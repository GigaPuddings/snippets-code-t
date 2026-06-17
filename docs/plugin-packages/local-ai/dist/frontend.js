var tf = Object.defineProperty;
var nf = (e, t, n) => t in e ? tf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ue = (e, t, n) => nf(e, typeof t != "symbol" ? t + "" : t, n);
import * as ja from "vue";
import { inject as Be, createVNode as N, defineAsyncComponent as rf, ref as W, shallowRef as pr, computed as x, watch as _e, onMounted as ct, onUnmounted as wa, defineComponent as oe, h as Uc, Text as Hc, Fragment as Ct, createElementBlock as K, openBlock as P, normalizeClass as Y, createCommentVNode as ee, renderSlot as ye, createElementVNode as y, getCurrentInstance as Vt, unref as c, watchEffect as Wc, readonly as xs, getCurrentScope as of, onScopeDispose as af, nextTick as st, isRef as Gr, warn as sf, provide as $n, mergeProps as Kr, toRef as Gn, useAttrs as lf, useSlots as cf, normalizeStyle as Ot, createBlock as ce, withCtx as le, resolveDynamicComponent as zt, withModifiers as tt, toDisplayString as B, onBeforeUnmount as Fn, Transition as oo, withDirectives as yt, vShow as er, reactive as Cr, onActivated as uf, onUpdated as Gc, cloneVNode as df, Comment as ff, Teleport as pf, onBeforeMount as mf, onDeactivated as hf, createTextVNode as Xt, withKeys as nn, createSlots as gf, toRaw as vf, toRefs as Rs, resolveComponent as Tr, resolveDirective as bf, toHandlerKey as yf, renderList as Er, vModelText as To, shallowReactive as _f, isVNode as So, render as sa, vModelSelect as wf } from "vue";
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
function Ut(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Tf(), i = Be(Ef, kf);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, m = a.strokeLinejoin, p = a.theme, b = a.fill, h = a.spin, g = Sf(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: p,
          fill: b
        }, i), T = [i.prefix + "-icon"];
        return T.push(i.prefix + "-icon-" + e), t && i.rtl && T.push(i.prefix + "-icon-rtl"), h && T.push(i.prefix + "-icon-spin"), N("span", {
          class: T.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const Af = Ut("add", !1, function(e) {
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
}), Rl = Ut("brain", !0, function(e) {
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
}), Cf = Ut("copy", !0, function(e) {
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
}), Pl = Ut("delete", !1, function(e) {
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
}), Of = Ut("dislike", !0, function(e) {
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
}), Nl = Ut("down", !1, function(e) {
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
}), Lf = Ut("edit", !0, function(e) {
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
}), If = Ut("like", !1, function(e) {
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
}), xf = Ut("message", !0, function(e) {
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
}), $l = Ut("refresh", !0, function(e) {
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
}), Ml = Ut("robot", !0, function(e) {
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
}), Rf = Ut("search", !0, function(e) {
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
}), Pf = Ut("send", !0, function(e) {
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
}), as = Ut("setting-two", !1, function(e) {
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
}), Nf = Ut("square", !1, function(e) {
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
const Dl = typeof window < "u", xr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Mf = (e, t, n) => Df({ l: e, k: t, s: n }), Df = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), kt = (e) => typeof e == "number" && isFinite(e), Ff = (e) => Ps(e) === "[object Date]", la = (e) => Ps(e) === "[object RegExp]", ka = (e) => Pe(e) && Object.keys(e).length === 0, Lt = Object.assign, zf = Object.create, He = (e = null) => zf(e);
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
function mn(e, t) {
  return Vf.call(e, t);
}
const it = Array.isArray, nt = (e) => typeof e == "function", ae = (e) => typeof e == "string", lt = (e) => typeof e == "boolean", Ne = (e) => e !== null && typeof e == "object", jf = (e) => Ne(e) && nt(e.then) && nt(e.catch), Kc = Object.prototype.toString, Ps = (e) => Kc.call(e), Pe = (e) => Ps(e) === "[object Object]", Uf = (e) => e == null ? "" : it(e) || Pe(e) && e.toString === Kc ? JSON.stringify(e, null, 2) : String(e);
function Ns(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const jo = (e) => !Ne(e) || it(e);
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
const Me = {
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
const Sn = " ", Kf = "\r", Nt = `
`, qf = "\u2028", Yf = "\u2029";
function Zf(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Kf && t[O + 1] === Nt, i = (O) => t[O] === Nt, l = (O) => t[O] === Yf, u = (O) => t[O] === qf, d = (O) => s(O) || i(O) || l(O) || u(O), m = () => n, p = () => r, b = () => o, h = () => a, g = (O) => s(O) || l(O) || u(O) ? Nt : t[O], T = () => g(n), f = () => g(n + a);
  function E() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function I() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function S() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function v(O = 0) {
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
    column: b,
    peekOffset: h,
    charAt: g,
    currentChar: T,
    currentPeek: f,
    next: E,
    peek: I,
    reset: S,
    resetPeek: v,
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
  function m(w, A, z, ...J) {
    const Ae = u();
    if (A.column += z, A.offset += z, d) {
      const de = n ? ss(Ae.startLoc, A) : null, k = Ta(w, de, {
        domain: Qf,
        args: J
      });
      d(k);
    }
  }
  function p(w, A, z) {
    w.endLoc = a(), w.currentType = A;
    const J = { type: A };
    return n && (J.loc = ss(w.startLoc, w.endLoc)), z != null && (J.value = z), J;
  }
  const b = (w) => p(
    w,
    13
    /* TokenTypes.EOF */
  );
  function h(w, A) {
    return w.currentChar() === A ? (w.next(), A) : (m(Me.EXPECTED_TOKEN, a(), 0, A), "");
  }
  function g(w) {
    let A = "";
    for (; w.currentPeek() === Sn || w.currentPeek() === Nt; )
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
  function I(w, A) {
    const { currentType: z } = A;
    if (z !== 2)
      return !1;
    g(w);
    const J = f(w.currentPeek());
    return w.resetPeek(), J;
  }
  function S(w, A) {
    const { currentType: z } = A;
    if (z !== 2)
      return !1;
    g(w);
    const J = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), Ae = E(J);
    return w.resetPeek(), Ae;
  }
  function v(w, A) {
    const { currentType: z } = A;
    if (z !== 2)
      return !1;
    g(w);
    const J = w.currentPeek() === Vl;
    return w.resetPeek(), J;
  }
  function C(w, A) {
    const { currentType: z } = A;
    if (z !== 7)
      return !1;
    g(w);
    const J = w.currentPeek() === ".";
    return w.resetPeek(), J;
  }
  function O(w, A) {
    const { currentType: z } = A;
    if (z !== 8)
      return !1;
    g(w);
    const J = f(w.currentPeek());
    return w.resetPeek(), J;
  }
  function D(w, A) {
    const { currentType: z } = A;
    if (!(z === 7 || z === 11))
      return !1;
    g(w);
    const J = w.currentPeek() === ":";
    return w.resetPeek(), J;
  }
  function Z(w, A) {
    const { currentType: z } = A;
    if (z !== 9)
      return !1;
    const J = () => {
      const de = w.currentPeek();
      return de === "{" ? f(w.peek()) : de === "@" || de === "|" || de === ":" || de === "." || de === Sn || !de ? !1 : de === Nt ? (w.peek(), J()) : fe(w, !1);
    }, Ae = J();
    return w.resetPeek(), Ae;
  }
  function ne(w) {
    g(w);
    const A = w.currentPeek() === "|";
    return w.resetPeek(), A;
  }
  function fe(w, A = !0) {
    const z = (Ae = !1, de = "") => {
      const k = w.currentPeek();
      return k === "{" || k === "@" || !k ? Ae : k === "|" ? !(de === Sn || de === Nt) : k === Sn ? (w.peek(), z(!0, Sn)) : k === Nt ? (w.peek(), z(!0, Nt)) : !0;
    }, J = z();
    return A && w.resetPeek(), J;
  }
  function re(w, A) {
    const z = w.currentChar();
    return z === Vn ? Vn : A(z) ? (w.next(), z) : null;
  }
  function he(w) {
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36;
  }
  function ve(w) {
    return re(w, he);
  }
  function F(w) {
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36 || // $
    A === 45;
  }
  function X(w) {
    return re(w, F);
  }
  function U(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function q(w) {
    return re(w, U);
  }
  function V(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57 || // 0-9
    A >= 65 && A <= 70 || // A-F
    A >= 97 && A <= 102;
  }
  function we(w) {
    return re(w, V);
  }
  function Fe(w) {
    let A = "", z = "";
    for (; A = q(w); )
      z += A;
    return z;
  }
  function pe(w) {
    let A = "";
    for (; ; ) {
      const z = w.currentChar();
      if (z === "{" || z === "}" || z === "@" || z === "|" || !z)
        break;
      if (z === Sn || z === Nt)
        if (fe(w))
          A += z, w.next();
        else {
          if (ne(w))
            break;
          A += z, w.next();
        }
      else
        A += z, w.next();
    }
    return A;
  }
  function ke(w) {
    T(w);
    let A = "", z = "";
    for (; A = X(w); )
      z += A;
    const J = w.currentChar();
    if (J && J !== "}" && J !== Vn && J !== Sn && J !== Nt && J !== "　") {
      const Ae = ht(w);
      return m(Me.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, z + Ae), z + Ae;
    }
    return w.currentChar() === Vn && m(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), z;
  }
  function G(w) {
    T(w);
    let A = "";
    return w.currentChar() === "-" ? (w.next(), A += `-${Fe(w)}`) : A += Fe(w), w.currentChar() === Vn && m(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function We(w) {
    return w !== Vl && w !== Nt;
  }
  function Te(w) {
    T(w), h(w, "'");
    let A = "", z = "";
    for (; A = re(w, We); )
      A === "\\" ? z += et(w) : z += A;
    const J = w.currentChar();
    return J === Nt || J === Vn ? (m(Me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), J === Nt && (w.next(), h(w, "'")), z) : (h(w, "'"), z);
  }
  function et(w) {
    const A = w.currentChar();
    switch (A) {
      case "\\":
      case "'":
        return w.next(), `\\${A}`;
      case "u":
        return ue(w, A, 4);
      case "U":
        return ue(w, A, 6);
      default:
        return m(Me.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, A), "";
    }
  }
  function ue(w, A, z) {
    h(w, A);
    let J = "";
    for (let Ae = 0; Ae < z; Ae++) {
      const de = we(w);
      if (!de) {
        m(Me.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${A}${J}${w.currentChar()}`);
        break;
      }
      J += de;
    }
    return `\\${A}${J}`;
  }
  function ot(w) {
    return w !== "{" && w !== "}" && w !== Sn && w !== Nt;
  }
  function ht(w) {
    T(w);
    let A = "", z = "";
    for (; A = re(w, ot); )
      z += A;
    return z;
  }
  function Ge(w) {
    let A = "", z = "";
    for (; A = ve(w); )
      z += A;
    return z;
  }
  function xt(w) {
    const A = (z) => {
      const J = w.currentChar();
      return J === "{" || J === "@" || J === "|" || J === "(" || J === ")" || !J || J === Sn ? z : (z += J, w.next(), A(z));
    };
    return A("");
  }
  function gt(w) {
    T(w);
    const A = h(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return T(w), A;
  }
  function vt(w, A) {
    let z = null;
    switch (w.currentChar()) {
      case "{":
        return A.braceNest >= 1 && m(Me.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), z = p(
          A,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(w), A.braceNest++, z;
      case "}":
        return A.braceNest > 0 && A.currentType === 2 && m(Me.EMPTY_PLACEHOLDER, a(), 0), w.next(), z = p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), A.braceNest--, A.braceNest > 0 && T(w), A.inLinked && A.braceNest === 0 && (A.inLinked = !1), z;
      case "@":
        return A.braceNest > 0 && m(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), z = bt(w, A) || b(A), A.braceNest = 0, z;
      default: {
        let Ae = !0, de = !0, k = !0;
        if (ne(w))
          return A.braceNest > 0 && m(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), z = p(A, 1, gt(w)), A.braceNest = 0, A.inLinked = !1, z;
        if (A.braceNest > 0 && (A.currentType === 4 || A.currentType === 5 || A.currentType === 6))
          return m(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), A.braceNest = 0, Xe(w, A);
        if (Ae = I(w, A))
          return z = p(A, 4, ke(w)), T(w), z;
        if (de = S(w, A))
          return z = p(A, 5, G(w)), T(w), z;
        if (k = v(w, A))
          return z = p(A, 6, Te(w)), T(w), z;
        if (!Ae && !de && !k)
          return z = p(A, 12, ht(w)), m(Me.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, z.value), T(w), z;
        break;
      }
    }
    return z;
  }
  function bt(w, A) {
    const { currentType: z } = A;
    let J = null;
    const Ae = w.currentChar();
    switch ((z === 7 || z === 8 || z === 11 || z === 9) && (Ae === Nt || Ae === Sn) && m(Me.INVALID_LINKED_FORMAT, a(), 0), Ae) {
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
        return ne(w) ? (J = p(A, 1, gt(w)), A.braceNest = 0, A.inLinked = !1, J) : C(w, A) || D(w, A) ? (T(w), bt(w, A)) : O(w, A) ? (T(w), p(A, 11, Ge(w))) : Z(w, A) ? (T(w), Ae === "{" ? vt(w, A) || J : p(A, 10, xt(w))) : (z === 7 && m(Me.INVALID_LINKED_FORMAT, a(), 0), A.braceNest = 0, A.inLinked = !1, Xe(w, A));
    }
  }
  function Xe(w, A) {
    let z = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (A.braceNest > 0)
      return vt(w, A) || b(A);
    if (A.inLinked)
      return bt(w, A) || b(A);
    switch (w.currentChar()) {
      case "{":
        return vt(w, A) || b(A);
      case "}":
        return m(Me.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return bt(w, A) || b(A);
      default: {
        if (ne(w))
          return z = p(A, 1, gt(w)), A.braceNest = 0, A.inLinked = !1, z;
        if (fe(w))
          return p(A, 0, pe(w));
        break;
      }
    }
    return z;
  }
  function ut() {
    const { currentType: w, offset: A, startLoc: z, endLoc: J } = l;
    return l.lastType = w, l.lastOffset = A, l.lastStartLoc = z, l.lastEndLoc = J, l.offset = o(), l.startLoc = a(), r.currentChar() === Vn ? p(
      l,
      13
      /* TokenTypes.EOF */
    ) : Xe(r, l);
  }
  return {
    nextToken: ut,
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
  function r(f, E, I, S, ...v) {
    const C = f.currentPosition();
    if (C.offset += S, C.column += S, n) {
      const O = t ? ss(I, C) : null, D = Ta(E, O, {
        domain: ep,
        args: v
      });
      n(D);
    }
  }
  function o(f, E, I) {
    const S = { type: f };
    return t && (S.start = E, S.end = E, S.loc = { start: I, end: I }), S;
  }
  function a(f, E, I, S) {
    t && (f.end = E, f.loc && (f.loc.end = I));
  }
  function s(f, E) {
    const I = f.context(), S = o(3, I.offset, I.startLoc);
    return S.value = E, a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function i(f, E) {
    const I = f.context(), { lastOffset: S, lastStartLoc: v } = I, C = o(5, S, v);
    return C.index = parseInt(E, 10), f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function l(f, E) {
    const I = f.context(), { lastOffset: S, lastStartLoc: v } = I, C = o(4, S, v);
    return C.key = E, f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function u(f, E) {
    const I = f.context(), { lastOffset: S, lastStartLoc: v } = I, C = o(9, S, v);
    return C.value = E.replace(tp, np), f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function d(f) {
    const E = f.nextToken(), I = f.context(), { lastOffset: S, lastStartLoc: v } = I, C = o(8, S, v);
    return E.type !== 11 ? (r(f, Me.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), C.value = "", a(C, S, v), {
      nextConsumeToken: E,
      node: C
    }) : (E.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, En(E)), C.value = E.value || "", a(C, f.currentOffset(), f.currentPosition()), {
      node: C
    });
  }
  function m(f, E) {
    const I = f.context(), S = o(7, I.offset, I.startLoc);
    return S.value = E, a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function p(f) {
    const E = f.context(), I = o(6, E.offset, E.startLoc);
    let S = f.nextToken();
    if (S.type === 8) {
      const v = d(f);
      I.modifier = v.node, S = v.nextConsumeToken || f.nextToken();
    }
    switch (S.type !== 9 && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(S)), S = f.nextToken(), S.type === 2 && (S = f.nextToken()), S.type) {
      case 10:
        S.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(S)), I.key = m(f, S.value || "");
        break;
      case 4:
        S.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(S)), I.key = l(f, S.value || "");
        break;
      case 5:
        S.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(S)), I.key = i(f, S.value || "");
        break;
      case 6:
        S.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(S)), I.key = u(f, S.value || "");
        break;
      default: {
        r(f, Me.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const v = f.context(), C = o(7, v.offset, v.startLoc);
        return C.value = "", a(C, v.offset, v.startLoc), I.key = C, a(I, v.offset, v.startLoc), {
          nextConsumeToken: S,
          node: I
        };
      }
    }
    return a(I, f.currentOffset(), f.currentPosition()), {
      node: I
    };
  }
  function b(f) {
    const E = f.context(), I = E.currentType === 1 ? f.currentOffset() : E.offset, S = E.currentType === 1 ? E.endLoc : E.startLoc, v = o(2, I, S);
    v.items = [];
    let C = null;
    do {
      const Z = C || f.nextToken();
      switch (C = null, Z.type) {
        case 0:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(Z)), v.items.push(s(f, Z.value || ""));
          break;
        case 5:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(Z)), v.items.push(i(f, Z.value || ""));
          break;
        case 4:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(Z)), v.items.push(l(f, Z.value || ""));
          break;
        case 6:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(Z)), v.items.push(u(f, Z.value || ""));
          break;
        case 7: {
          const ne = p(f);
          v.items.push(ne.node), C = ne.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const O = E.currentType === 1 ? E.lastOffset : f.currentOffset(), D = E.currentType === 1 ? E.lastEndLoc : f.currentPosition();
    return a(v, O, D), v;
  }
  function h(f, E, I, S) {
    const v = f.context();
    let C = S.items.length === 0;
    const O = o(1, E, I);
    O.cases = [], O.cases.push(S);
    do {
      const D = b(f);
      C || (C = D.items.length === 0), O.cases.push(D);
    } while (v.currentType !== 13);
    return C && r(f, Me.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function g(f) {
    const E = f.context(), { offset: I, startLoc: S } = E, v = b(f);
    return E.currentType === 13 ? v : h(f, I, S, v);
  }
  function T(f) {
    const E = Jf(f, Lt({}, e)), I = E.context(), S = o(0, I.offset, I.startLoc);
    return t && S.loc && (S.loc.source = f), S.body = g(E), e.onCacheKey && (S.cacheKey = e.onCacheKey(f)), I.currentType !== 13 && r(E, Me.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, f[I.offset] || ""), a(S, E.currentOffset(), E.currentPosition()), S;
  }
  return { parse: T };
}
function En(e) {
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
  const n = Lt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = rp(n).parse(e);
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
function Rn(e) {
  return Ne(e) && Ms(e) === 0 && (mn(e, "b") || mn(e, "body"));
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
    if (mn(e, o) && e[o] != null)
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
      if (mn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (mn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Eo(n);
    }
    case 5: {
      const r = t;
      if (mn(r, "i") && kt(r.i))
        return e.interpolate(e.list(r.i));
      if (mn(r, "index") && kt(r.index))
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
    lt(t.warnHtmlMessage) && t.warnHtmlMessage;
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
  if (nt(e)) {
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
    ...it(t) ? t : Ne(t) ? Object.keys(t) : ae(t) ? [t] : [n]
  ])];
}
function ru(e, t, n) {
  const r = ae(n) ? n : ia, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; it(s); )
      s = Gl(a, s, t);
    const i = it(t) || !Pe(t) ? t : t.default ? t.default : null;
    s = ae(i) ? [i] : i, it(s) && Gl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Gl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && lt(r); o++) {
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
    e.push(o), (it(n) || Pe(n)) && n[o] && (r = n[o]);
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
  function b() {
    const h = e[n + 1];
    if (r === 5 && h === "'" || r === 6 && h === '"')
      return n++, i = "\\" + h, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && b())) {
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
    if (nu.includes(s) && Rn(o))
      return null;
    const i = o[s];
    if (i === void 0 || nt(o))
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
  const t = nt(e.onWarn) ? e.onWarn : $f, n = ae(e.version) ? e.version : Dp, r = ae(e.locale) || nt(e.locale) ? e.locale : ia, o = nt(r) ? ia : r, a = it(e.fallbackLocale) || Pe(e.fallbackLocale) || ae(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Pe(e.messages) ? e.messages : Wa(o), i = Pe(e.datetimeFormats) ? e.datetimeFormats : Wa(o), l = Pe(e.numberFormats) ? e.numberFormats : Wa(o), u = Lt(He(), e.modifiers, Fp()), d = e.pluralRules || He(), m = nt(e.missing) ? e.missing : null, p = lt(e.missingWarn) || la(e.missingWarn) ? e.missingWarn : !0, b = lt(e.fallbackWarn) || la(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, T = nt(e.postTranslation) ? e.postTranslation : null, f = Pe(e.processor) ? e.processor : null, E = lt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter, S = nt(e.messageCompiler) ? e.messageCompiler : ou, v = nt(e.messageResolver) ? e.messageResolver : au || $p, C = nt(e.localeFallbacker) ? e.localeFallbacker : su || Ap, O = Ne(e.fallbackContext) ? e.fallbackContext : void 0, D = e, Z = Ne(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), ne = Ne(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), fe = Ne(D.__meta) ? D.__meta : {};
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
    fallbackWarn: b,
    fallbackFormat: h,
    unresolving: g,
    postTranslation: T,
    processor: f,
    warnHtmlMessage: E,
    escapeParameter: I,
    messageCompiler: S,
    messageResolver: v,
    localeFallbacker: C,
    fallbackContext: O,
    onWarn: t,
    __meta: fe
  };
  return re.datetimeFormats = i, re.numberFormats = l, re.__datetimeFormatters = Z, re.__numberFormatters = ne, re;
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
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, m] = is(...t), p = lt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  lt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const b = !!d.part, h = Ds(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ae(l) || l === "")
    return new Intl.DateTimeFormat(h, m).format(u);
  let T = {}, f, E = null;
  const I = "datetime format";
  for (let C = 0; C < g.length && (f = g[C], T = n[f] || {}, E = T[l], !Pe(E)); C++)
    Fs(e, l, f, p, I);
  if (!Pe(E) || !ae(f))
    return r ? Sa : l;
  let S = `${f}__${l}`;
  ka(m) || (S = `${S}__${JSON.stringify(m)}`);
  let v = i.get(S);
  return v || (v = new Intl.DateTimeFormat(f, Lt({}, E, m)), i.set(S, v)), b ? v.formatToParts(u) : v.format(u);
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
  } else if (kt(t))
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
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, m] = cs(...t), p = lt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  lt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const b = !!d.part, h = Ds(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ae(l) || l === "")
    return new Intl.NumberFormat(h, m).format(u);
  let T = {}, f, E = null;
  const I = "number format";
  for (let C = 0; C < g.length && (f = g[C], T = n[f] || {}, E = T[l], !Pe(E)); C++)
    Fs(e, l, f, p, I);
  if (!Pe(E) || !ae(f))
    return r ? Sa : l;
  let S = `${f}__${l}`;
  ka(m) || (S = `${S}__${JSON.stringify(m)}`);
  let v = i.get(S);
  return v || (v = new Intl.NumberFormat(f, Lt({}, E, m)), i.set(S, v)), b ? v.formatToParts(u) : v.format(u);
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
  if (!kt(t))
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
  const t = kt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (kt(e.named.count) || kt(e.named.n)) ? kt(e.named.count) ? e.named.count : kt(e.named.n) ? e.named.n : t : t;
}
function Qp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Jp(e = {}) {
  const t = e.locale, n = Xp(e), r = Ne(e.pluralRules) && ae(t) && nt(e.pluralRules[t]) ? e.pluralRules[t] : ni, o = Ne(e.pluralRules) && ae(t) && nt(e.pluralRules[t]) ? ni : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || He();
  kt(e.pluralIndex) && Qp(n, l);
  const u = (f) => l[f];
  function d(f, E) {
    const I = nt(e.messages) ? e.messages(f, !!E) : Ne(e.messages) ? e.messages[f] : !1;
    return I || (e.parent ? e.parent.message(f) : Kp);
  }
  const m = (f) => e.modifiers ? e.modifiers[f] : Gp, p = Pe(e.processor) && nt(e.processor.normalize) ? e.processor.normalize : Yp, b = Pe(e.processor) && nt(e.processor.interpolate) ? e.processor.interpolate : Zp, h = Pe(e.processor) && ae(e.processor.type) ? e.processor.type : qp, T = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...E) => {
      const [I, S] = E;
      let v = "text", C = "";
      E.length === 1 ? Ne(I) ? (C = I.modifier || C, v = I.type || v) : ae(I) && (C = I || C) : E.length === 2 && (ae(I) && (C = I || C), ae(S) && (v = S || v));
      const O = d(f, !0)(T), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        v === "vnode" && it(O) && C ? O[0] : O
      );
      return C ? m(C)(D, v) : D;
    },
    message: d,
    type: h,
    interpolate: b,
    normalize: p,
    values: Lt(He(), s, l)
  };
  return T;
}
const ri = () => "", Zn = (e) => nt(e);
function oi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = us(...t), d = lt(u.missingWarn) ? u.missingWarn : e.missingWarn, m = lt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = lt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, h = ae(u.default) || lt(u.default) ? lt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (ae(h) || nt(h)), T = Ds(e, u);
  p && em(u);
  let [f, E, I] = b ? [
    l,
    T,
    i[T] || He()
  ] : uu(e, l, T, s, m, d), S = f, v = l;
  if (!b && !(ae(S) || Rn(S) || Zn(S)) && g && (S = h, v = S), !b && (!(ae(S) || Rn(S) || Zn(S)) || !ae(E)))
    return o ? Sa : l;
  let C = !1;
  const O = () => {
    C = !0;
  }, D = Zn(S) ? S : du(e, l, E, S, v, O);
  if (C)
    return S;
  const Z = rm(e, E, I, u), ne = Jp(Z), fe = tm(e, D, ne);
  let re = r ? r(fe, l) : fe;
  return p && ae(re) && (re = Bf(re)), re;
}
function em(e) {
  it(e.list) ? e.list = e.list.map((t) => ae(t) ? zl(t) : t) : Ne(e.named) && Object.keys(e.named).forEach((t) => {
    ae(e.named[t]) && (e.named[t] = zl(e.named[t]));
  });
}
function uu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let m = He(), p, b = null;
  const h = "translate";
  for (let g = 0; g < d.length && (p = d[g], m = s[p] || He(), (b = l(m, t)) === null && (b = m[t]), !(ae(b) || Rn(b) || Zn(b))); g++)
    if (!Wp(p, d)) {
      const T = Fs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        a,
        h
      );
      T !== t && (b = T);
    }
  return [b, p, m];
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
  if (!ae(t) && !kt(t) && !Zn(t) && !Rn(t))
    throw qn(Kn.INVALID_ARGUMENT);
  const a = kt(t) ? String(t) : (Zn(t), t);
  return kt(n) ? o.plural = n : ae(n) ? o.default = n : Pe(n) && !ka(n) ? o.named = n : it(n) && (o.list = n), kt(r) ? o.plural = r : ae(r) ? o.default = r : Pe(r) && Lt(o, r), [a, o];
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
    messages: (b, h) => {
      let g = s(n, b);
      if (g == null && (d || h)) {
        const [, , T] = uu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          b,
          t,
          i,
          l,
          u
        );
        g = s(T, b);
      }
      if (ae(g) || Rn(g)) {
        let T = !1;
        const E = du(e, b, t, g, b, () => {
          T = !0;
        });
        return T ? ri : E;
      } else return Zn(g) ? g : ri;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), kt(r.plural) && (p.pluralIndex = r.plural), p;
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
const ds = /* @__PURE__ */ xr("__translateVNode"), fs = /* @__PURE__ */ xr("__datetimeParts"), ps = /* @__PURE__ */ xr("__numberParts"), sm = xr("__setPluralRules"), fu = /* @__PURE__ */ xr("__injectWithOption"), ms = /* @__PURE__ */ xr("__dispose");
function Co(e) {
  if (!Ne(e) || Rn(e))
    return e;
  for (const t in e)
    if (mn(e, t))
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
        if (a || (Rn(o) ? nu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Rn(o)) {
          const s = o[n[r]];
          Ne(s) && Co(s);
        }
      }
  return e;
}
function pu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Pe(n) ? n : it(r) ? He() : { [e]: He() };
  if (it(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || He(), ta(u, s[l])) : ta(u, s);
    } else
      ae(i) && ta(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      mn(s, i) && Co(s[i]);
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
  let s = lt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ae(e.locale) ? e.locale : ia
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ae(e.fallbackLocale) || it(e.fallbackLocale) || Pe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(pu(i.value, e)), d = a(Pe(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Pe(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : lt(e.missingWarn) || la(e.missingWarn) ? e.missingWarn : !0, b = t ? t.fallbackWarn : lt(e.fallbackWarn) || la(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : lt(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, T = nt(e.missing) ? e.missing : null, f = nt(e.missing) ? ii(e.missing) : null, E = nt(e.postTranslation) ? e.postTranslation : null, I = t ? t.warnHtmlMessage : lt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const v = t ? t.modifiers : Pe(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && Zl(null);
    const k = {
      version: om,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: v,
      pluralRules: C,
      missing: f === null ? void 0 : f,
      missingWarn: p,
      fallbackWarn: b,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: I,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = d.value, k.numberFormats = m.value, k.__datetimeFormatters = Pe(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = Pe(O) ? O.__numberFormatters : void 0;
    const $ = Up(k);
    return r && Zl($), $;
  })(), lo(O, i.value, l.value);
  function Z() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      m.value
    ];
  }
  const ne = x({
    get: () => i.value,
    set: (k) => {
      O.locale = k, i.value = k;
    }
  }), fe = x({
    get: () => l.value,
    set: (k) => {
      O.fallbackLocale = k, l.value = k, lo(O, i.value, k);
    }
  }), re = x(() => u.value), he = /* @__PURE__ */ x(() => d.value), ve = /* @__PURE__ */ x(() => m.value);
  function F() {
    return nt(E) ? E : null;
  }
  function X(k) {
    E = k, O.postTranslation = k;
  }
  function U() {
    return T;
  }
  function q(k) {
    k !== null && (f = ii(k)), T = k, O.missing = f;
  }
  const V = (k, $, be, Ce, Ve, St) => {
    Z();
    let Ke;
    try {
      r || (O.fallbackContext = t ? jp() : void 0), Ke = k(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (be !== "translate exists" && // for not `te` (e.g `t`)
    kt(Ke) && Ke === Sa || be === "translate exists" && !Ke) {
      const [ln, qt] = $();
      return t && h ? Ce(t) : Ve(ln);
    } else {
      if (St(Ke))
        return Ke;
      throw Ao(Yr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function we(...k) {
    return V(($) => Reflect.apply(oi, null, [$, ...k]), () => us(...k), "translate", ($) => Reflect.apply($.t, $, [...k]), ($) => $, ($) => ae($));
  }
  function Fe(...k) {
    const [$, be, Ce] = k;
    if (Ce && !Ne(Ce))
      throw Ao(Yr.INVALID_ARGUMENT);
    return we($, be, Lt({ resolvedMessage: !0 }, Ce || {}));
  }
  function pe(...k) {
    return V(($) => Reflect.apply(Ql, null, [$, ...k]), () => is(...k), "datetime format", ($) => Reflect.apply($.d, $, [...k]), () => ql, ($) => ae($) || it($));
  }
  function ke(...k) {
    return V(($) => Reflect.apply(ei, null, [$, ...k]), () => cs(...k), "number format", ($) => Reflect.apply($.n, $, [...k]), () => ql, ($) => ae($) || it($));
  }
  function G(k) {
    return k.map(($) => ae($) || kt($) || lt($) ? ai(String($)) : $);
  }
  const Te = {
    normalize: G,
    interpolate: (k) => k,
    type: "vnode"
  };
  function et(...k) {
    return V(($) => {
      let be;
      const Ce = $;
      try {
        Ce.processor = Te, be = Reflect.apply(oi, null, [Ce, ...k]);
      } finally {
        Ce.processor = null;
      }
      return be;
    }, () => us(...k), "translate", ($) => $[ds](...k), ($) => [ai($)], ($) => it($));
  }
  function ue(...k) {
    return V(($) => Reflect.apply(ei, null, [$, ...k]), () => cs(...k), "number format", ($) => $[ps](...k), si, ($) => ae($) || it($));
  }
  function ot(...k) {
    return V(($) => Reflect.apply(Ql, null, [$, ...k]), () => is(...k), "datetime format", ($) => $[fs](...k), si, ($) => ae($) || it($));
  }
  function ht(k) {
    C = k, O.pluralRules = C;
  }
  function Ge(k, $) {
    return V(() => {
      if (!k)
        return !1;
      const be = ae($) ? $ : i.value, Ce = vt(be), Ve = O.messageResolver(Ce, k);
      return Rn(Ve) || Zn(Ve) || ae(Ve);
    }, () => [k], "translate exists", (be) => Reflect.apply(be.te, be, [k, $]), cm, (be) => lt(be));
  }
  function xt(k) {
    let $ = null;
    const be = ru(O, l.value, i.value);
    for (let Ce = 0; Ce < be.length; Ce++) {
      const Ve = u.value[be[Ce]] || {}, St = O.messageResolver(Ve, k);
      if (St != null) {
        $ = St;
        break;
      }
    }
    return $;
  }
  function gt(k) {
    const $ = xt(k);
    return $ ?? (t ? t.tm(k) || {} : {});
  }
  function vt(k) {
    return u.value[k] || {};
  }
  function bt(k, $) {
    if (o) {
      const be = { [k]: $ };
      for (const Ce in be)
        mn(be, Ce) && Co(be[Ce]);
      $ = be[k];
    }
    u.value[k] = $, O.messages = u.value;
  }
  function Xe(k, $) {
    u.value[k] = u.value[k] || {};
    const be = { [k]: $ };
    if (o)
      for (const Ce in be)
        mn(be, Ce) && Co(be[Ce]);
    $ = be[k], ta($, u.value[k]), O.messages = u.value;
  }
  function ut(k) {
    return d.value[k] || {};
  }
  function w(k, $) {
    d.value[k] = $, O.datetimeFormats = d.value, Jl(O, k, $);
  }
  function A(k, $) {
    d.value[k] = Lt(d.value[k] || {}, $), O.datetimeFormats = d.value, Jl(O, k, $);
  }
  function z(k) {
    return m.value[k] || {};
  }
  function J(k, $) {
    m.value[k] = $, O.numberFormats = m.value, ti(O, k, $);
  }
  function Ae(k, $) {
    m.value[k] = Lt(m.value[k] || {}, $), O.numberFormats = m.value, ti(O, k, $);
  }
  li++, t && Dl && (_e(t.locale, (k) => {
    s && (i.value = k, O.locale = k, lo(O, i.value, l.value));
  }), _e(t.fallbackLocale, (k) => {
    s && (l.value = k, O.fallbackLocale = k, lo(O, i.value, l.value));
  }));
  const de = {
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
      return v;
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
      return b;
    },
    set fallbackWarn(k) {
      b = k, O.fallbackWarn = b;
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
      return I;
    },
    set warnHtmlMessage(k) {
      I = k, O.warnHtmlMessage = k;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(k) {
      S = k, O.escapeParameter = k;
    },
    t: we,
    getLocaleMessage: vt,
    setLocaleMessage: bt,
    mergeLocaleMessage: Xe,
    getPostTranslationHandler: F,
    setPostTranslationHandler: X,
    getMissingHandler: U,
    setMissingHandler: q,
    [sm]: ht
  };
  return de.datetimeFormats = he, de.numberFormats = ve, de.rt = Fe, de.te = Ge, de.tm = gt, de.d = pe, de.n = ke, de.getDateTimeFormat = ut, de.setDateTimeFormat = w, de.mergeDateTimeFormat = A, de.getNumberFormat = z, de.setNumberFormat = J, de.mergeNumberFormat = Ae, de[fu] = n, de[ds] = et, de[fs] = ot, de[ps] = ue, de;
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
    ...o.type === Ct ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, He());
}
function hu() {
  return Ct;
}
Lt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => kt(e) || !isNaN(e)
  }
}, zs);
function fm(e) {
  return it(e) && !ae(e[0]);
}
function gu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = He();
    e.locale && (s.locale = e.locale), ae(e.format) ? s.key = e.format : Ne(e.format) && (ae(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((p, b) => n.includes(b) ? Lt(He(), p, { [b]: e.format[b] }) : p, He()));
    const l = r(e.value, s, i);
    let u = [s.key];
    it(l) ? u = l.map((p, b) => {
      const h = o[p.type], g = h ? h({ [p.type]: p.value, index: b, parts: l }) : [p.value];
      return fm(g) && (g[0].key = `${p.type}-${b}`), g;
    }) : ae(l) && (u = [l]);
    const d = Lt(He(), a), m = ae(e.tag) || Ne(e.tag) ? e.tag : hu();
    return Uc(m, d, u);
  };
}
Lt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, zs);
const pm = /* @__PURE__ */ xr("global-vue-i18n");
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
    const l = Lt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = um(l), s.__composerExtend && (i[ms] = s.__composerExtend(i)), ym(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function mm(e) {
  const t = Be(e.isCE ? pm : e.appContext.app.__VUE_I18N_SYMBOL__);
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
  ct(() => {
  }, t), wa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ms];
    o && (o(), delete r[ms]);
  }, t);
}
Lt({
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
var Rr = Bs();
function vu(e) {
  Rr = e;
}
var bo = { exec: () => null };
function xe(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Bt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var _m = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Bt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, wm = /^(?:[ \t]*(?:\n|$))+/, km = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Tm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, No = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Sm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Vs = /(?:[*+-]|\d{1,9}[.)])/, bu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, yu = xe(bu).replace(/bull/g, Vs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Em = xe(bu).replace(/bull/g, Vs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), js = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Am = /^[^\n]+/, Us = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Cm = xe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Us).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Om = xe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Vs).getRegex(), Ea = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Hs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Lm = xe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Hs).replace("tag", Ea).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _u = xe(js).replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex(), Im = xe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _u).getRegex(), Ws = { blockquote: Im, code: km, def: Cm, fences: Tm, heading: Sm, hr: No, html: Lm, lheading: yu, list: Om, newline: wm, paragraph: _u, table: bo, text: Am }, ci = xe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex(), xm = { ...Ws, lheading: Em, table: ci, paragraph: xe(js).replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ci).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex() }, Rm = { ...Ws, html: xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Hs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: bo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: xe(js).replace("hr", No).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", yu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Pm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Nm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, wu = /^( {2,}|\\)\n(?!\s*$)/, $m = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Aa = /[\p{P}\p{S}]/u, Gs = /[\s\p{P}\p{S}]/u, ku = /[^\s\p{P}\p{S}]/u, Mm = xe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Gs).getRegex(), Tu = /(?!~)[\p{P}\p{S}]/u, Dm = /(?!~)[\s\p{P}\p{S}]/u, Fm = /(?:[^\s\p{P}\p{S}]|~)/u, zm = xe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", _m ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Su = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Bm = xe(Su, "u").replace(/punct/g, Aa).getRegex(), Vm = xe(Su, "u").replace(/punct/g, Tu).getRegex(), Eu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", jm = xe(Eu, "gu").replace(/notPunctSpace/g, ku).replace(/punctSpace/g, Gs).replace(/punct/g, Aa).getRegex(), Um = xe(Eu, "gu").replace(/notPunctSpace/g, Fm).replace(/punctSpace/g, Dm).replace(/punct/g, Tu).getRegex(), Hm = xe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ku).replace(/punctSpace/g, Gs).replace(/punct/g, Aa).getRegex(), Wm = xe(/\\(punct)/, "gu").replace(/punct/g, Aa).getRegex(), Gm = xe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Km = xe(Hs).replace("(?:-->|$)", "-->").getRegex(), qm = xe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Km).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ca = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Ym = xe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ca).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Au = xe(/^!?\[(label)\]\[(ref)\]/).replace("label", ca).replace("ref", Us).getRegex(), Cu = xe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Us).getRegex(), Zm = xe("reflink|nolink(?!\\()", "g").replace("reflink", Au).replace("nolink", Cu).getRegex(), ui = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ks = { _backpedal: bo, anyPunctuation: Wm, autolink: Gm, blockSkip: zm, br: wu, code: Nm, del: bo, emStrongLDelim: Bm, emStrongRDelimAst: jm, emStrongRDelimUnd: Hm, escape: Pm, link: Ym, nolink: Cu, punctuation: Mm, reflink: Au, reflinkSearch: Zm, tag: qm, text: $m, url: bo }, Xm = { ...Ks, link: xe(/^!?\[(label)\]\((.*?)\)/).replace("label", ca).getRegex(), reflink: xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ca).getRegex() }, hs = { ...Ks, emStrongRDelimAst: Um, emStrongLDelim: Vm, url: xe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ui).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: xe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ui).getRegex() }, Qm = { ...hs, br: xe(wu).replace("{2,}", "*").getRegex(), text: xe(hs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Wo = { normal: Ws, gfm: xm, pedantic: Rm }, io = { normal: Ks, gfm: hs, breaks: Qm, pedantic: Xm }, Jm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, di = (e) => Jm[e];
function jn(e, t) {
  if (t) {
    if (Bt.escapeTest.test(e)) return e.replace(Bt.escapeReplace, di);
  } else if (Bt.escapeTestNoEncode.test(e)) return e.replace(Bt.escapeReplaceNoEncode, di);
  return e;
}
function fi(e) {
  try {
    e = encodeURI(e).replace(Bt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function pi(e, t) {
  let n = e.replace(Bt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Bt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Bt.slashPipe, "|");
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
    this.options = e || Rr;
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
          let b = p, h = b.raw + `
` + n.join(`
`), g = this.blockquote(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - b.raw.length) + g.raw, o = o.substring(0, o.length - b.text.length) + g.text;
          break;
        } else if (p?.type === "list") {
          let b = p, h = b.raw + `
` + n.join(`
`), g = this.list(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - p.raw.length) + g.raw, o = o.substring(0, o.length - b.raw.length) + g.raw, n = h.substring(a.at(-1).raw.length).split(`
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
`, 1)[0], b = !m.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, d = m.trimStart()) : b ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, d = m.slice(h), h += t[1].length), b && this.rules.other.blankLine.test(p) && (u += p + `
`, e = e.substring(p.length + 1), l = !0), !l) {
          let g = this.rules.other.nextBulletRegex(h), T = this.rules.other.hrRegex(h), f = this.rules.other.fencesBeginRegex(h), E = this.rules.other.headingBeginRegex(h), I = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let S = e.split(`
`, 1)[0], v;
            if (p = S, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), v = p) : v = p.replace(this.rules.other.tabCharGlobal, "    "), f.test(p) || E.test(p) || I.test(p) || g.test(p) || T.test(p)) break;
            if (v.search(this.rules.other.nonSpaceChar) >= h || !p.trim()) d += `
` + v.slice(h);
            else {
              if (b || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(m) || E.test(m) || T.test(m)) break;
              d += `
` + p;
            }
            !b && !p.trim() && (b = !0), u += S + `
`, e = e.substring(S.length + 1), m = v.slice(h);
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
          let b = m.slice(1, -1);
          return { type: "em", raw: m, text: b, tokens: this.lexer.inlineTokens(b) };
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
}, fn = class gs {
  constructor(t) {
    Ue(this, "tokens");
    Ue(this, "options");
    Ue(this, "state");
    Ue(this, "inlineQueue");
    Ue(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Rr, this.options.tokenizer = this.options.tokenizer || new ua(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Bt, block: Wo.normal, inline: io.normal };
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
    t = t.replace(Bt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Bt.tabCharGlobal, "    ").replace(Bt.spaceLine, "")); t; ) {
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
        this.options.extensions.startInline.forEach((b) => {
          p = b.call({ lexer: this }, m), typeof p == "number" && p >= 0 && (d = Math.min(d, p));
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
    this.options = t || Rr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Bt.notSpaceStart)?.[0], a = t.replace(Bt.endingNewline, "") + `
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
}, pn = class vs {
  constructor(t) {
    Ue(this, "options");
    Ue(this, "renderer");
    Ue(this, "textRenderer");
    this.options = t || Rr, this.options.renderer = this.options.renderer || new da(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new qs();
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
    this.options = e || Rr;
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
    return this.block ? fn.lex : fn.lexInline;
  }
  provideParser() {
    return this.block ? pn.parse : pn.parseInline;
  }
}, Ue(Jo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ue(Jo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Jo), nh = class {
  constructor(...t) {
    Ue(this, "defaults", Bs());
    Ue(this, "options", this.setOptions);
    Ue(this, "parse", this.parseMarkdown(!0));
    Ue(this, "parseInline", this.parseMarkdown(!1));
    Ue(this, "Parser", pn);
    Ue(this, "Renderer", da);
    Ue(this, "TextRenderer", qs);
    Ue(this, "Lexer", fn);
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
    return fn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return pn.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? fn.lex : fn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser() : t ? pn.parse : pn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? fn.lex : fn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? pn.parse : pn.parseInline)(i, a);
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
}, Or = new nh();
function ze(e, t) {
  return Or.parse(e, t);
}
ze.options = ze.setOptions = function(e) {
  return Or.setOptions(e), ze.defaults = Or.defaults, vu(ze.defaults), ze;
};
ze.getDefaults = Bs;
ze.defaults = Rr;
ze.use = function(...e) {
  return Or.use(...e), ze.defaults = Or.defaults, vu(ze.defaults), ze;
};
ze.walkTokens = function(e, t) {
  return Or.walkTokens(e, t);
};
ze.parseInline = Or.parseInline;
ze.Parser = pn;
ze.parser = pn.parse;
ze.Renderer = da;
ze.TextRenderer = qs;
ze.Lexer = fn;
ze.lexer = fn.lex;
ze.Tokenizer = ua;
ze.Hooks = go;
ze.parse = ze;
ze.options;
ze.setOptions;
ze.use;
ze.walkTokens;
ze.parseInline;
pn.parse;
fn.lex;
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
      class: Y([
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
}, Un = /* @__PURE__ */ Ys(ah, [["__scopeId", "data-v-9497085f"]]), Ou = Symbol(), na = "el", sh = "is-", Sr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Lu = Symbol("namespaceContextKey"), Zs = (e) => {
  const t = e || (Vt() ? Be(Lu, W(na)) : W(na));
  return x(() => c(t) || na);
}, pt = (e, t) => {
  const n = Zs(t);
  return {
    namespace: n,
    b: (g = "") => Sr(n.value, e, g, "", ""),
    e: (g) => g ? Sr(n.value, e, "", g, "") : "",
    m: (g) => g ? Sr(n.value, e, "", "", g) : "",
    be: (g, T) => g && T ? Sr(n.value, e, g, T, "") : "",
    em: (g, T) => g && T ? Sr(n.value, e, "", g, T) : "",
    bm: (g, T) => g && T ? Sr(n.value, e, g, "", T) : "",
    bem: (g, T, f) => g && T && f ? Sr(n.value, e, g, T, f) : "",
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
}, lh = Object.prototype.hasOwnProperty, hi = (e, t) => lh.call(e, t), Ln = Array.isArray, rt = (e) => typeof e == "function", Mt = (e) => typeof e == "string", Qt = (e) => e !== null && typeof e == "object", gi = (e) => (Qt(e) || rt(e)) && rt(e.then) && rt(e.catch), ih = Object.prototype.toString, ch = (e) => ih.call(e), uh = (e) => ch(e) === "[object Object]";
var Iu = typeof global == "object" && global && global.Object === Object && global, dh = typeof self == "object" && self && self.Object === Object && self, zn = Iu || dh || Function("return this")(), Mn = zn.Symbol, xu = Object.prototype, fh = xu.hasOwnProperty, ph = xu.toString, uo = Mn ? Mn.toStringTag : void 0;
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
var bh = "[object Null]", yh = "[object Undefined]", vi = Mn ? Mn.toStringTag : void 0;
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
var bn = Array.isArray, bi = Mn ? Mn.prototype : void 0, yi = bi ? bi.toString : void 0;
function Ru(e) {
  if (typeof e == "string")
    return e;
  if (bn(e))
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
var Ga = zn["__core-js_shared__"], ki = function() {
  var e = /[^.]+$/.exec(Ga && Ga.keys && Ga.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nh(e) {
  return !!ki && ki in e;
}
var $h = Function.prototype, Mh = $h.toString;
function Pr(e) {
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
  return t.test(Pr(e));
}
function Wh(e, t) {
  return e?.[t];
}
function Nr(e, t) {
  var n = Wh(e, t);
  return Hh(n) ? n : void 0;
}
var bs = Nr(zn, "WeakMap");
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
    var e = Nr(Object, "defineProperty");
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
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports, Ei = Mu && typeof module == "object" && module && !module.nodeType && module, vg = Ei && Ei.exports === Mu, Ai = vg ? zn.Buffer : void 0, bg = Ai ? Ai.isBuffer : void 0, ys = bg || gg, yg = "[object Arguments]", _g = "[object Array]", wg = "[object Boolean]", kg = "[object Date]", Tg = "[object Error]", Sg = "[object Function]", Eg = "[object Map]", Ag = "[object Number]", Cg = "[object Object]", Og = "[object RegExp]", Lg = "[object Set]", Ig = "[object String]", xg = "[object WeakMap]", Rg = "[object ArrayBuffer]", Pg = "[object DataView]", Ng = "[object Float32Array]", $g = "[object Float64Array]", Mg = "[object Int8Array]", Dg = "[object Int16Array]", Fg = "[object Int32Array]", zg = "[object Uint8Array]", Bg = "[object Uint8ClampedArray]", Vg = "[object Uint16Array]", jg = "[object Uint32Array]", Ye = {};
Ye[Ng] = Ye[$g] = Ye[Mg] = Ye[Dg] = Ye[Fg] = Ye[zg] = Ye[Bg] = Ye[Vg] = Ye[jg] = !0;
Ye[yg] = Ye[_g] = Ye[Rg] = Ye[wg] = Ye[Pg] = Ye[kg] = Ye[Tg] = Ye[Sg] = Ye[Eg] = Ye[Ag] = Ye[Cg] = Ye[Og] = Ye[Lg] = Ye[Ig] = Ye[xg] = !1;
function Ug(e) {
  return Zr(e) && Js(e.length) && !!Ye[ao(e)];
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
  var n = bn(e), r = !n && el(e), o = !n && !r && ys(e), a = !n && !r && !o && Fu(e), s = n || r || o || a, i = s ? fg(e.length, String) : [], l = i.length;
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
  if (bn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ca(e) ? !0 : tv.test(e) || !ev.test(e) || t != null && e in Object(t);
}
var Lo = Nr(Object, "create");
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
function Lr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Lr.prototype.clear = nv;
Lr.prototype.delete = rv;
Lr.prototype.get = lv;
Lr.prototype.has = uv;
Lr.prototype.set = fv;
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
var Io = Nr(zn, "Map");
function _v() {
  this.size = 0, this.__data__ = {
    hash: new Lr(),
    map: new (Io || rr)(),
    string: new Lr()
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
  return bn(e) ? e : tl(e, t) ? [e] : xv(Rv(e));
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
var Li = Mn ? Mn.isConcatSpreadable : void 0;
function Pv(e) {
  return bn(e) || el(e) || !!(Li && e && e[Li]);
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
  return bn(e) ? e : [e];
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
  return bn(e) ? r : Bu(r, n(e));
}
function xi(e) {
  return qv(e, zu, Kv);
}
var _s = Nr(zn, "DataView"), ws = Nr(zn, "Promise"), ks = Nr(zn, "Set"), Ri = "[object Map]", Yv = "[object Object]", Pi = "[object Promise]", Ni = "[object Set]", $i = "[object WeakMap]", Mi = "[object DataView]", Zv = Pr(_s), Xv = Pr(Io), Qv = Pr(ws), Jv = Pr(ks), e0 = Pr(bs), ur = ao;
(_s && ur(new _s(new ArrayBuffer(1))) != Mi || Io && ur(new Io()) != Ri || ws && ur(ws.resolve()) != Pi || ks && ur(new ks()) != Ni || bs && ur(new bs()) != $i) && (ur = function(e) {
  var t = ao(e), n = t == Yv ? e.constructor : void 0, r = n ? Pr(n) : "";
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
var Di = zn.Uint8Array, t0 = "__lodash_hash_undefined__";
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
  var m = -1, p = !0, b = n & l0 ? new pa() : void 0;
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
    if (b) {
      if (!o0(t, function(f, E) {
        if (!a0(b, E) && (h === f || o(h, f, n, r, a)))
          return b.push(E);
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
var u0 = 1, d0 = 2, f0 = "[object Boolean]", p0 = "[object Date]", m0 = "[object Error]", h0 = "[object Map]", g0 = "[object Number]", v0 = "[object RegExp]", b0 = "[object Set]", y0 = "[object String]", _0 = "[object Symbol]", w0 = "[object ArrayBuffer]", k0 = "[object DataView]", Fi = Mn ? Mn.prototype : void 0, qa = Fi ? Fi.valueOf : void 0;
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
  var b = a.get(e), h = a.get(t);
  if (b && h)
    return b == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var T = s; ++m < l; ) {
    p = i[m];
    var f = e[p], E = t[p];
    if (r)
      var I = s ? r(E, f, p, t, e, a) : r(f, E, p, e, t, a);
    if (!(I === void 0 ? f === E || o(f, E, n, r, a) : I)) {
      g = !1;
      break;
    }
    T || (T = p == "constructor");
  }
  if (g && !T) {
    var S = e.constructor, v = t.constructor;
    S != v && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof v == "function" && v instanceof v) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var O0 = 1, zi = "[object Arguments]", Bi = "[object Array]", Go = "[object Object]", L0 = Object.prototype, Vi = L0.hasOwnProperty;
function I0(e, t, n, r, o, a) {
  var s = bn(e), i = bn(t), l = s ? Bi : ur(e), u = i ? Bi : ur(t);
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
    var b = d && Vi.call(e, "__wrapped__"), h = m && Vi.call(t, "__wrapped__");
    if (b || h) {
      var g = b ? e.value() : e, T = h ? t.value() : t;
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
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Js(o) && Xs(s, o) && (bn(e) || el(e)));
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
  return typeof e == "function" ? e : e == null ? Pu : typeof e == "object" ? bn(e) ? B0(e[0], e[1]) : $0(e) : U0(e);
}
var Ya = function() {
  return zn.Date.now();
}, W0 = "Expected a function", G0 = Math.max, K0 = Math.min;
function q0(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(W0);
  t = wi(t) || 0, hr(n) && (d = !!n.leading, m = "maxWait" in n, a = m ? G0(wi(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function b(C) {
    var O = r, D = o;
    return r = o = void 0, u = C, s = e.apply(D, O), s;
  }
  function h(C) {
    return u = C, i = setTimeout(f, t), d ? b(C) : s;
  }
  function g(C) {
    var O = C - l, D = C - u, Z = t - O;
    return m ? K0(Z, a - D) : Z;
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
    return i = void 0, p && r ? b(C) : (r = o = void 0, s);
  }
  function I() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function S() {
    return i === void 0 ? s : E(Ya());
  }
  function v() {
    var C = Ya(), O = T(C);
    if (r = arguments, o = this, l = C, O) {
      if (i === void 0)
        return h(l);
      if (m)
        return clearTimeout(i), i = setTimeout(f, t), b(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return v.cancel = I, v.flush = S, v;
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
const In = (e) => e === void 0, mr = (e) => typeof e == "boolean", De = (e) => typeof e == "number", gn = (e) => typeof Element > "u" ? !1 : e instanceof Element, tb = (e) => Mt(e) ? !Number.isNaN(Number(e)) : !1;
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
const ft = typeof window < "u", ub = (e) => typeof e == "string", Wu = () => {
}, Ts = ft && ((Hi = window?.navigator) == null ? void 0 : Hi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
  Vt() ? ct(e) : t ? e() : st(e);
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
  return r && (o.value = !0, ft && l()), Mo(i), {
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
const Ra = ft ? window : void 0;
function vn(...e) {
  let t, n, r, o;
  if (ub(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ra) : [t, n, r, o] = e, !t)
    return Wu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, m, p, b) => (d.addEventListener(m, p, b), () => d.removeEventListener(m, p, b)), l = _e(() => [Yn(t), ol(o)], ([d, m]) => {
    s(), d && a.push(...n.flatMap((p) => r.map((b) => i(d, p, b, m))));
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
  const l = (p) => o.some((b) => {
    if (typeof b == "string")
      return Array.from(r.document.querySelectorAll(b)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Yn(b);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), d = [
    vn(r, "click", (p) => {
      const b = Yn(e);
      if (!(!b || b === p.target || p.composedPath().includes(b))) {
        if (p.detail === 0 && (i = !l(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: a }),
    vn(r, "pointerdown", (p) => {
      const b = Yn(e);
      b && (i = !p.composedPath().includes(b) && !l(p));
    }, { passive: !0 }),
    s && vn(r, "blur", (p) => {
      var b;
      const h = Yn(e);
      ((b = r.document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(p);
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
function On(e, t, n = {}) {
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
  const t = Vt() ? Be(tc, Ji) : Ji, n = e || (Vt() ? Be(Yu, void 0) : void 0), r = x(() => {
    const s = c(n);
    return De(s) ? s : qu;
  }), o = x(() => r.value + ec.value), a = () => (t.current++, ec.value = t.current, o.value);
  return !ft && Be(tc), {
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
  const t = x(() => c(e).name), n = Gr(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: Ob(e)
  };
}, Xu = Symbol("localeContextKey"), sl = (e) => {
  const t = e || Be(Xu, W());
  return Ib(x(() => t.value || Cb));
}, Qu = "__epPropKey", ge = (e) => e, xb = (e) => Qt(e) && !!e[Qu], Pa = (e, t) => {
  if (!Qt(e) || xb(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), hi(e, "default") && m.push(o), d || (d = m.includes(u))), s && (d || (d = s(u))), !d && m.length > 0) {
        const p = [...new Set(m)].map((b) => JSON.stringify(b)).join(", ");
        sf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Qu]: !0
  };
  return hi(e, "default") && (l.default = o), l;
}, Ze = (e) => ma(Object.entries(e).map(([t, n]) => [
  t,
  Pa(n, t)
])), ll = ["", "default", "small", "large"], Na = Pa({
  type: String,
  values: ll,
  required: !1
}), Ju = Symbol("size"), Rb = () => {
  const e = Be(Ju, {});
  return x(() => c(e.size) || "");
}, ed = Symbol("emptyValuesContextKey"), Pb = ["", void 0, null], Nb = void 0, td = Ze({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => rt(e) ? !e() : !e
  }
}), $b = (e, t) => {
  const n = Vt() ? Be(ed, W({})) : W({}), r = x(() => e.emptyValues || n.value.emptyValues || Pb), o = x(() => rt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : rt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Nb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, nc = (e) => Object.keys(e), ha = W();
function nd(e, t = void 0) {
  return Vt() ? Be(Ou, ha) : ha;
}
function rd(e, t) {
  const n = nd(), r = pt(e, x(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || na;
  })), o = sl(x(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Zu(x(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || qu;
  })), s = x(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return od(x(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const od = (e, t, n = !1) => {
  var r;
  const o = !!Vt(), a = o ? nd() : void 0, s = (r = void 0) != null ? r : o ? $n : void 0;
  if (!s)
    return;
  const i = x(() => {
    const l = c(e);
    return a?.value ? Mb(a.value, l) : l;
  });
  return s(Ou, i), s(Xu, x(() => i.value.locale)), s(Lu, x(() => i.value.namespace)), s(Yu, x(() => i.value.zIndex)), s(Ju, {
    size: x(() => i.value.size || "")
  }), s(ed, x(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ha.value) && (ha.value = i.value), i;
}, Mb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...nc(e), ...nc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Tt = "update:modelValue", tr = "change", Jn = "input";
var Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Xr(e, t = "px") {
  if (!e)
    return "";
  if (De(e) || tb(e))
    return `${e}${t}`;
  if (Mt(e))
    return e;
}
function Db(e, t) {
  if (!ft)
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
const yn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, ad = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), sd = (e) => (e.install = Oo, e), Fb = Ze({
  size: {
    type: ge([Number, String])
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
    const t = e, n = pt("icon"), r = x(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: In(o) ? void 0 : Xr(o),
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
var Vb = /* @__PURE__ */ Je(Bb, [["__file", "icon.vue"]]);
const dt = yn(Vb);
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
const xn = ge([
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
}, ud = () => ft && /firefox/i.test(window.navigator.userAgent);
let Wt;
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
  Wt || (Wt = document.createElement("textarea"), document.body.appendChild(Wt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = gy(e);
  i.forEach(([m, p]) => Wt?.style.setProperty(m, p)), Object.entries(my).forEach(([m, p]) => Wt?.style.setProperty(m, p, "important")), Wt.value = e.value || e.placeholder || "";
  let l = Wt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Wt.value = "";
  const d = Wt.scrollHeight - o;
  if (De(t)) {
    let m = d * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (De(n)) {
    let m = d * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = Wt.parentNode) == null || r.removeChild(Wt), Wt = void 0, u;
}
const dd = (e) => e, vy = Ze({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), $r = (e) => eb(vy, e), by = Ze({
  id: {
    type: String,
    default: void 0
  },
  size: Na,
  disabled: Boolean,
  modelValue: {
    type: ge([
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
    type: ge([Boolean, Object]),
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
    type: ge([Object, Array, String]),
    default: () => dd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...$r(["ariaLabel"])
}), yy = {
  [Tt]: (e) => Mt(e),
  input: (e) => Mt(e),
  change: (e) => Mt(e),
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
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = x(() => (n?.value || []).concat(_y)), o = Vt();
  return o ? x(() => {
    var a;
    return ma(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && wy.test(s))));
  }) : x(() => ({}));
}, cl = Symbol("formContextKey"), ba = Symbol("formItemContextKey"), oc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ty = Symbol("elIdInjection"), fd = () => Vt() ? Be(Ty, oc) : oc, $a = (e) => {
  const t = fd(), n = Zs();
  return cb(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ma = () => {
  const e = Be(cl, void 0), t = Be(ba, void 0);
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
  const s = x(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ct(() => {
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
  const t = Vt();
  return x(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Do = (e, t = {}) => {
  const n = W(void 0), r = t.prop ? n : pd("size"), o = t.global ? n : Rb(), a = t.form ? { size: void 0 } : Be(cl, void 0), s = t.formItem ? { size: void 0 } : Be(ba, void 0);
  return x(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, dl = (e) => {
  const t = pd("disabled"), n = Be(cl, void 0);
  return x(() => t.value || c(e) || n?.disabled || !1);
};
function md(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Vt(), { emit: s } = a, i = pr(), l = W(!1), u = (p) => {
    rt(t) && t(p) || l.value || (l.value = !0, s("focus", p), n?.());
  }, d = (p) => {
    var b;
    rt(r) && r(p) || p.relatedTarget && ((b = i.value) != null && b.contains(p.relatedTarget)) || (l.value = !1, s("blur", p), o?.());
  }, m = () => {
    var p, b;
    (p = i.value) != null && p.contains(document.activeElement) && i.value !== document.activeElement || (b = e.value) == null || b.focus();
  };
  return _e(i, (p) => {
    p && p.setAttribute("tabindex", "-1");
  }), vn(i, "focus", u, !0), vn(i, "blur", d, !0), vn(i, "click", m, !0), {
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
    t?.("compositionend", i), n.value && (n.value = !1, st(() => e(i)));
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
    const r = e, o = lf(), a = ky(), s = cf(), i = x(() => [
      r.type === "textarea" ? g.b() : h.b(),
      h.m(p.value),
      h.is("disabled", b.value),
      h.is("exceed", pe.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: q.value && V.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = x(() => [
      h.e("wrapper"),
      h.is("focus", D.value)
    ]), { form: u, formItem: d } = Ma(), { inputId: m } = ul(r, {
      formItemContext: d
    }), p = Do(), b = dl(), h = pt("input"), g = pt("textarea"), T = pr(), f = pr(), E = W(!1), I = W(!1), S = W(), v = pr(r.inputStyle), C = x(() => T.value || f.value), { wrapperRef: O, isFocused: D, handleFocus: Z, handleBlur: ne } = md(C, {
      beforeFocus() {
        return b.value;
      },
      afterBlur() {
        var k;
        r.validateEvent && ((k = d?.validate) == null || k.call(d, "blur").catch(($) => void 0));
      }
    }), fe = x(() => {
      var k;
      return (k = u?.statusIcon) != null ? k : !1;
    }), re = x(() => d?.validateState || ""), he = x(() => re.value && cd[re.value]), ve = x(() => I.value ? cy : Qb), F = x(() => [
      o.style
    ]), X = x(() => [
      r.inputStyle,
      v.value,
      { resize: r.resize }
    ]), U = x(() => Qn(r.modelValue) ? "" : String(r.modelValue)), q = x(() => r.clearable && !b.value && !r.readonly && !!U.value && (D.value || E.value)), V = x(() => r.showPassword && !b.value && !!U.value && (!!U.value || D.value)), we = x(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !b.value && !r.readonly && !r.showPassword), Fe = x(() => U.value.length), pe = x(() => !!we.value && Fe.value > Number(r.maxlength)), ke = x(() => !!s.suffix || !!r.suffixIcon || q.value || r.showPassword || we.value || !!re.value && fe.value), [G, We] = Ey(T);
    On(f, (k) => {
      if (ue(), !we.value || r.resize !== "both")
        return;
      const $ = k[0], { width: be } = $.contentRect;
      S.value = {
        right: `calc(100% - ${be + 15 + 6}px)`
      };
    });
    const Te = () => {
      const { type: k, autosize: $ } = r;
      if (!(!ft || k !== "textarea" || !f.value))
        if ($) {
          const be = Qt($) ? $.minRows : void 0, Ce = Qt($) ? $.maxRows : void 0, Ve = rc(f.value, be, Ce);
          v.value = {
            overflowY: "hidden",
            ...Ve
          }, st(() => {
            f.value.offsetHeight, v.value = Ve;
          });
        } else
          v.value = {
            minHeight: rc(f.value).minHeight
          };
    }, ue = ((k) => {
      let $ = !1;
      return () => {
        var be;
        if ($ || !r.autosize)
          return;
        ((be = f.value) == null ? void 0 : be.offsetParent) === null || (k(), $ = !0);
      };
    })(Te), ot = () => {
      const k = C.value, $ = r.formatter ? r.formatter(U.value) : U.value;
      !k || k.value === $ || (k.value = $);
    }, ht = async (k) => {
      G();
      let { value: $ } = k.target;
      if (r.formatter && r.parser && ($ = r.parser($)), !xt.value) {
        if ($ === U.value) {
          ot();
          return;
        }
        n(Tt, $), n(Jn, $), await st(), ot(), We();
      }
    }, Ge = (k) => {
      let { value: $ } = k.target;
      r.formatter && r.parser && ($ = r.parser($)), n(tr, $);
    }, {
      isComposing: xt,
      handleCompositionStart: gt,
      handleCompositionUpdate: vt,
      handleCompositionEnd: bt
    } = hd({ emit: n, afterComposition: ht }), Xe = () => {
      G(), I.value = !I.value, setTimeout(We);
    }, ut = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.focus();
    }, w = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.blur();
    }, A = (k) => {
      E.value = !1, n("mouseleave", k);
    }, z = (k) => {
      E.value = !0, n("mouseenter", k);
    }, J = (k) => {
      n("keydown", k);
    }, Ae = () => {
      var k;
      (k = C.value) == null || k.select();
    }, de = () => {
      n(Tt, ""), n(tr, ""), n("clear"), n(Jn, "");
    };
    return _e(() => r.modelValue, () => {
      var k;
      st(() => Te()), r.validateEvent && ((k = d?.validate) == null || k.call(d, "change").catch(($) => void 0));
    }), _e(U, () => ot()), _e(() => r.type, async () => {
      await st(), ot(), Te();
    }), ct(() => {
      !r.formatter && r.parser, ot(), st(Te);
    }), t({
      input: T,
      textarea: f,
      ref: C,
      textareaStyle: X,
      autosize: Gn(r, "autosize"),
      isComposing: xt,
      focus: ut,
      blur: w,
      select: Ae,
      clear: de,
      resizeTextarea: Te
    }), (k, $) => (P(), K("div", {
      class: Y([
        c(i),
        {
          [c(h).bm("group", "append")]: k.$slots.append,
          [c(h).bm("group", "prepend")]: k.$slots.prepend
        }
      ]),
      style: Ot(c(F)),
      onMouseenter: z,
      onMouseleave: A
    }, [
      ee(" input "),
      k.type !== "textarea" ? (P(), K(Ct, { key: 0 }, [
        ee(" prepend slot "),
        k.$slots.prepend ? (P(), K("div", {
          key: 0,
          class: Y(c(h).be("group", "prepend"))
        }, [
          ye(k.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        y("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: Y(c(l))
        }, [
          ee(" prefix slot "),
          k.$slots.prefix || k.prefixIcon ? (P(), K("span", {
            key: 0,
            class: Y(c(h).e("prefix"))
          }, [
            y("span", {
              class: Y(c(h).e("prefix-inner"))
            }, [
              ye(k.$slots, "prefix"),
              k.prefixIcon ? (P(), ce(c(dt), {
                key: 0,
                class: Y(c(h).e("icon"))
              }, {
                default: le(() => [
                  (P(), ce(zt(k.prefixIcon)))
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
            type: k.showPassword ? I.value ? "text" : "password" : k.type,
            disabled: c(b),
            readonly: k.readonly,
            autocomplete: k.autocomplete,
            tabindex: k.tabindex,
            "aria-label": k.ariaLabel,
            placeholder: k.placeholder,
            style: k.inputStyle,
            form: k.form,
            autofocus: k.autofocus,
            role: k.containerRole,
            onCompositionstart: c(gt),
            onCompositionupdate: c(vt),
            onCompositionend: c(bt),
            onInput: ht,
            onChange: Ge,
            onKeydown: J
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(ke) ? (P(), K("span", {
            key: 1,
            class: Y(c(h).e("suffix"))
          }, [
            y("span", {
              class: Y(c(h).e("suffix-inner"))
            }, [
              !c(q) || !c(V) || !c(we) ? (P(), K(Ct, { key: 0 }, [
                ye(k.$slots, "suffix"),
                k.suffixIcon ? (P(), ce(c(dt), {
                  key: 0,
                  class: Y(c(h).e("icon"))
                }, {
                  default: le(() => [
                    (P(), ce(zt(k.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              c(q) ? (P(), ce(c(dt), {
                key: 1,
                class: Y([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: tt(c(Oo), ["prevent"]),
                onClick: de
              }, {
                default: le(() => [
                  N(c(il))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(V) ? (P(), ce(c(dt), {
                key: 2,
                class: Y([c(h).e("icon"), c(h).e("password")]),
                onClick: Xe
              }, {
                default: le(() => [
                  (P(), ce(zt(c(ve))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(we) ? (P(), K("span", {
                key: 3,
                class: Y(c(h).e("count"))
              }, [
                y("span", {
                  class: Y(c(h).e("count-inner"))
                }, B(c(Fe)) + " / " + B(k.maxlength), 3)
              ], 2)) : ee("v-if", !0),
              c(re) && c(he) && c(fe) ? (P(), ce(c(dt), {
                key: 4,
                class: Y([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(re) === "validating")
                ])
              }, {
                default: le(() => [
                  (P(), ce(zt(c(he))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        k.$slots.append ? (P(), K("div", {
          key: 1,
          class: Y(c(h).be("group", "append"))
        }, [
          ye(k.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (P(), K(Ct, { key: 1 }, [
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
          disabled: c(b),
          readonly: k.readonly,
          autocomplete: k.autocomplete,
          style: c(X),
          "aria-label": k.ariaLabel,
          placeholder: k.placeholder,
          form: k.form,
          autofocus: k.autofocus,
          rows: k.rows,
          role: k.containerRole,
          onCompositionstart: c(gt),
          onCompositionupdate: c(vt),
          onCompositionend: c(bt),
          onInput: ht,
          onFocus: c(Z),
          onBlur: c(ne),
          onChange: Ge,
          onKeydown: J
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(we) ? (P(), K("span", {
          key: 0,
          style: Ot(S.value),
          class: Y(c(h).e("count"))
        }, B(c(Fe)) + " / " + B(k.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ly = /* @__PURE__ */ Je(Oy, [["__file", "input.vue"]]);
const Iy = yn(Ly), Fr = 4, xy = {
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
}), fl = Symbol("scrollbarContextKey"), Py = Ze({
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
    const t = e, n = Be(fl), r = pt("scrollbar");
    n || al(Ny, "can not inject scrollbar context");
    const o = W(), a = W(), s = W({}), i = W(!1);
    let l = !1, u = !1, d = ft ? document.onselectstart : null;
    const m = x(() => xy[t.vertical ? "vertical" : "horizontal"]), p = x(() => Ry({
      size: t.size,
      move: t.move,
      bar: m.value
    })), b = x(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), h = (C) => {
      var O;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), T(C);
      const D = C.currentTarget;
      D && (s.value[m.value.axis] = D[m.value.offset] - (C[m.value.client] - D.getBoundingClientRect()[m.value.direction]));
    }, g = (C) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(C.target.getBoundingClientRect()[m.value.direction] - C[m.value.client]), D = a.value[m.value.offset] / 2, Z = (O - D) * 100 * b.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = Z * n.wrapElement[m.value.scrollSize] / 100;
    }, T = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (C) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[m.value.axis];
      if (!O)
        return;
      const D = (o.value.getBoundingClientRect()[m.value.direction] - C[m.value.client]) * -1, Z = a.value[m.value.offset] - O, ne = (D - Z) * 100 * b.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = ne * n.wrapElement[m.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", E), v(), u && (i.value = !1);
    }, I = () => {
      u = !1, i.value = !!t.size;
    }, S = () => {
      u = !0, i.value = l;
    };
    Fn(() => {
      v(), document.removeEventListener("mouseup", E);
    });
    const v = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return vn(Gn(n, "scrollbarElement"), "mousemove", I), vn(Gn(n, "scrollbarElement"), "mouseleave", S), (C, O) => (P(), ce(oo, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: le(() => [
        yt(y("div", {
          ref_key: "instance",
          ref: o,
          class: Y([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: g
        }, [
          y("div", {
            ref_key: "thumb",
            ref: a,
            class: Y(c(r).e("thumb")),
            style: Ot(c(p)),
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
var ac = /* @__PURE__ */ Je($y, [["__file", "thumb.vue"]]);
const My = Ze({
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
    const n = e, r = Be(fl), o = W(0), a = W(0), s = W(""), i = W(""), l = W(1), u = W(1);
    return t({
      handleScroll: (p) => {
        if (p) {
          const b = p.offsetHeight - Fr, h = p.offsetWidth - Fr;
          a.value = p.scrollTop * 100 / b * l.value, o.value = p.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const p = r?.wrapElement;
        if (!p)
          return;
        const b = p.offsetHeight - Fr, h = p.offsetWidth - Fr, g = b ** 2 / p.scrollHeight, T = h ** 2 / p.scrollWidth, f = Math.max(g, n.minSize), E = Math.max(T, n.minSize);
        l.value = g / (b - g) / (f / (b - f)), u.value = T / (h - T) / (E / (h - E)), i.value = f + Fr < b ? `${f}px` : "", s.value = E + Fr < h ? `${E}px` : "";
      }
    }), (p, b) => (P(), K(Ct, null, [
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
var Fy = /* @__PURE__ */ Je(Dy, [["__file", "bar.vue"]]);
const zy = Ze({
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
    type: ge([String, Object, Array]),
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
  ...$r(["ariaLabel", "ariaOrientation"])
}), By = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(De)
}, Vy = "ElScrollbar", jy = oe({
  name: Vy
}), Uy = /* @__PURE__ */ oe({
  ...jy,
  props: zy,
  emits: By,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = pt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = W(), d = W(), m = W(), p = W(), b = x(() => {
      const v = {};
      return r.height && (v.height = Xr(r.height)), r.maxHeight && (v.maxHeight = Xr(r.maxHeight)), [r.wrapStyle, v];
    }), h = x(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = x(() => [o.e("view"), r.viewClass]), T = () => {
      var v;
      d.value && ((v = p.value) == null || v.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(v, C) {
      Qt(v) ? d.value.scrollTo(v) : De(v) && De(C) && d.value.scrollTo(v, C);
    }
    const E = (v) => {
      De(v) && (d.value.scrollTop = v);
    }, I = (v) => {
      De(v) && (d.value.scrollLeft = v);
    }, S = () => {
      var v;
      (v = p.value) == null || v.update();
    };
    return _e(() => r.noresize, (v) => {
      v ? (a?.(), s?.()) : ({ stop: a } = On(m, S), s = vn("resize", S));
    }, { immediate: !0 }), _e(() => [r.maxHeight, r.height], () => {
      r.native || st(() => {
        var v;
        S(), d.value && ((v = p.value) == null || v.handleScroll(d.value));
      });
    }), $n(fl, Cr({
      scrollbarElement: u,
      wrapElement: d
    })), uf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), ct(() => {
      r.native || st(() => {
        S();
      });
    }), Gc(() => S()), t({
      wrapRef: d,
      update: S,
      scrollTo: f,
      setScrollTop: E,
      setScrollLeft: I,
      handleScroll: T
    }), (v, C) => (P(), K("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: Y(c(o).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: d,
        class: Y(c(h)),
        style: Ot(c(b)),
        tabindex: v.tabindex,
        onScroll: T
      }, [
        (P(), ce(zt(v.tag), {
          id: v.id,
          ref_key: "resizeRef",
          ref: m,
          class: Y(c(g)),
          style: Ot(v.viewStyle),
          role: v.role,
          "aria-label": v.ariaLabel,
          "aria-orientation": v.ariaOrientation
        }, {
          default: le(() => [
            ye(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      v.native ? ee("v-if", !0) : (P(), ce(Fy, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        always: v.always,
        "min-size": v.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Hy = /* @__PURE__ */ Je(Uy, [["__file", "scrollbar.vue"]]);
const Wy = yn(Hy), pl = Symbol("popper"), gd = Symbol("popperContent"), Gy = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], vd = Ze({
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
    const n = e, r = W(), o = W(), a = W(), s = W(), i = x(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), $n(pl, l), (u, d) => ye(u.$slots, "default");
  }
});
var Yy = /* @__PURE__ */ Je(qy, [["__file", "popper.vue"]]);
const bd = Ze({
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
    const n = e, r = pt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Be(gd, void 0);
    return _e(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Fn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (P(), K("span", {
      ref_key: "arrowRef",
      ref: a,
      class: Y(c(r).e("arrow")),
      style: Ot(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Qy = /* @__PURE__ */ Je(Xy, [["__file", "arrow.vue"]]);
const yd = Ze({
  virtualRef: {
    type: ge(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ge(Function)
  },
  onMouseleave: {
    type: ge(Function)
  },
  onClick: {
    type: ge(Function)
  },
  onKeydown: {
    type: ge(Function)
  },
  onFocus: {
    type: ge(Function)
  },
  onBlur: {
    type: ge(Function)
  },
  onContextmenu: {
    type: ge(Function)
  },
  id: String,
  open: Boolean
}), _d = Symbol("elForwardRef"), Jy = (e) => {
  $n(_d, {
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
    const o = Be(_d), a = e1((r = o?.setForwardRef) != null ? r : Oo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = wd(i);
      return l ? yt(df(l, n), [[a]]) : null;
    };
  }
});
function wd(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Qt(n))
      switch (n.type) {
        case ff:
          continue;
        case Hc:
        case "svg":
          return sc(n);
        case Ct:
          return wd(n.children);
        default:
          return n;
      }
    return sc(n);
  }
  return null;
}
function sc(e) {
  const t = pt("only-child");
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
    const n = e, { role: r, triggerRef: o } = Be(pl, void 0);
    Jy(o);
    const a = x(() => i.value ? n.id : void 0), s = x(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = x(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = x(() => i.value ? `${n.open}` : void 0);
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
    return ct(() => {
      _e(() => n.virtualRef, (m) => {
        m && (o.value = Yn(m));
      }, {
        immediate: !0
      }), _e(o, (m, p) => {
        u?.(), u = void 0, gn(m) && (d.forEach((b) => {
          var h;
          const g = n[b];
          g && (m.addEventListener(b.slice(2).toLowerCase(), g), (h = p?.removeEventListener) == null || h.call(p, b.slice(2).toLowerCase(), g));
        }), Ss(m) && (u = _e([a, s, i, l], (b) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            Qn(b[g]) ? m.removeAttribute(h) : m.setAttribute(h, b[g]);
          });
        }, { immediate: !0 }))), gn(p) && Ss(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((b) => p.removeAttribute(b));
      }, {
        immediate: !0
      });
    }), Fn(() => {
      if (u?.(), u = void 0, o.value && gn(o.value)) {
        const m = o.value;
        d.forEach((p) => {
          const b = n[p];
          b && m.removeEventListener(p.slice(2).toLowerCase(), b);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, p) => m.virtualTriggering ? ee("v-if", !0) : (P(), ce(c(n1), Kr({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: le(() => [
        ye(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var a1 = /* @__PURE__ */ Je(o1, [["__file", "trigger.vue"]]);
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
    gn(e) && !Ss(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), hl.value = window.performance.now(), e !== n && d1(e) && t && e.select(), gn(e) && r && e.removeAttribute("tabindex");
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
}, h1 = () => (ct(() => {
  Ko === 0 && (document.addEventListener("mousedown", qo), document.addEventListener("touchstart", qo), document.addEventListener("keydown", pc)), Ko++;
}), Fn(() => {
  Ko--, Ko <= 0 && (document.removeEventListener("mousedown", qo), document.removeEventListener("touchstart", qo), document.removeEventListener("keydown", pc));
}), {
  focusReason: ml,
  lastUserFocusTimestamp: Da,
  lastAutomatedFocusTimestamp: hl
}), Yo = (e) => new CustomEvent(s1, {
  ...l1,
  detail: e
}), Pn = {
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
  e.code === Pn.esc && Hr.forEach((t) => t(e));
}, g1 = (e) => {
  ct(() => {
    Hr.length === 0 && document.addEventListener("keydown", mc), ft && Hr.push(e);
  }), Fn(() => {
    Hr = Hr.filter((t) => t !== e), Hr.length === 0 && ft && document.removeEventListener("keydown", mc);
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
      const { code: g, altKey: T, ctrlKey: f, metaKey: E, currentTarget: I, shiftKey: S } = h, { loop: v } = e, C = g === Pn.tab && !T && !f && !E, O = document.activeElement;
      if (C && O) {
        const D = I, [Z, ne] = u1(D);
        if (Z && ne) {
          if (!S && O === ne) {
            const re = Yo({
              focusReason: a.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), v && Hn(Z, !0));
          } else if (S && [Z, D].includes(O)) {
            const re = Yo({
              focusReason: a.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), v && Hn(ne, !0));
          }
        } else if (O === D) {
          const re = Yo({
            focusReason: a.value
          });
          t("focusout-prevented", re), re.defaultPrevented || h.preventDefault();
        }
      }
    };
    $n(i1, {
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
      await st();
      const h = c(n);
      if (h) {
        fc.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const f = new Event(Za, lc);
          h.addEventListener(Za, l), h.dispatchEvent(f), f.defaultPrevented || st(() => {
            let E = e.focusStartEl;
            Mt(E) || (Hn(E), document.activeElement !== E && (E = "first")), E === "first" && p1(kd(h), !0), (document.activeElement === g || E === "container") && Hn(h);
          });
        }
      }
    }
    function b() {
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
    return ct(() => {
      e.trapped && p(), _e(() => e.trapped, (h) => {
        h ? p() : b();
      });
    }), Fn(() => {
      e.trapped && b(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function b1(e, t, n, r, o, a) {
  return ye(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var y1 = /* @__PURE__ */ Je(v1, [["render", b1], ["__file", "focus-trap.vue"]]), Gt = "top", on = "bottom", an = "right", Kt = "left", gl = "auto", Fo = [Gt, on, an, Kt], Qr = "start", xo = "end", _1 = "clippingParents", Td = "viewport", fo = "popper", w1 = "reference", hc = Fo.reduce(function(e, t) {
  return e.concat([t + "-" + Qr, t + "-" + xo]);
}, []), Fa = [].concat(Fo, [gl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qr, t + "-" + xo]);
}, []), k1 = "beforeRead", T1 = "read", S1 = "afterRead", E1 = "beforeMain", A1 = "main", C1 = "afterMain", O1 = "beforeWrite", L1 = "write", I1 = "afterWrite", x1 = [k1, T1, S1, E1, A1, C1, O1, L1, I1];
function Dn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ir(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function rn(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function vl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function R1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !rn(a) || !Dn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
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
      !rn(o) || !Dn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Sd = { name: "applyStyles", enabled: !0, phase: "write", fn: R1, effect: P1, requires: ["computeStyles"] };
function Nn(e) {
  return e.split("-")[0];
}
var Ar = Math.max, ya = Math.min, Jr = Math.round;
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
  t && rn(e) && (o = e.offsetWidth > 0 && Jr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Jr(r.height) / e.offsetHeight || 1);
  var s = Ir(e) ? Jt(e) : window, i = s.visualViewport, l = !Ed() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, p = r.height / a;
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
  return Jt(e).getComputedStyle(e);
}
function N1(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
}
function br(e) {
  return ((Ir(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function za(e) {
  return Dn(e) === "html" ? e : e.assignedSlot || e.parentNode || (vl(e) ? e.host : null) || br(e);
}
function gc(e) {
  return !rn(e) || nr(e).position === "fixed" ? null : e.offsetParent;
}
function $1(e) {
  var t = /firefox/i.test(Es()), n = /Trident/i.test(Es());
  if (n && rn(e)) {
    var r = nr(e);
    if (r.position === "fixed") return null;
  }
  var o = za(e);
  for (vl(o) && (o = o.host); rn(o) && ["html", "body"].indexOf(Dn(o)) < 0; ) {
    var a = nr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function zo(e) {
  for (var t = Jt(e), n = gc(e); n && N1(n) && nr(n).position === "static"; ) n = gc(n);
  return n && (Dn(n) === "html" || Dn(n) === "body" && nr(n).position === "static") ? t : n || $1(e) || t;
}
function yl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wo(e, t, n) {
  return Ar(e, ya(t, n));
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
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Nn(n.placement), l = yl(i), u = [Kt, an].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = D1(o.padding, n), p = bl(a), b = l === "y" ? Gt : Kt, h = l === "y" ? on : an, g = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], T = s[l] - n.rects.reference[l], f = zo(a), E = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, I = g / 2 - T / 2, S = m[b], v = E - p[d] - m[h], C = E / 2 - p[d] / 2 + I, O = wo(S, C, v), D = l;
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
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, p = s.x, b = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, T = typeof d == "function" ? d({ x: b, y: g }) : { x: b, y: g };
  b = T.x, g = T.y;
  var f = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), I = Kt, S = Gt, v = window;
  if (u) {
    var C = zo(n), O = "clientHeight", D = "clientWidth";
    if (C === Jt(n) && (C = br(n), nr(C).position !== "static" && i === "absolute" && (O = "scrollHeight", D = "scrollWidth")), C = C, o === Gt || (o === Kt || o === an) && a === xo) {
      S = on;
      var Z = m && C === v && v.visualViewport ? v.visualViewport.height : C[O];
      g -= Z - r.height, g *= l ? 1 : -1;
    }
    if (o === Kt || (o === Gt || o === on) && a === xo) {
      I = an;
      var ne = m && C === v && v.visualViewport ? v.visualViewport.width : C[D];
      b -= ne - r.width, b *= l ? 1 : -1;
    }
  }
  var fe = Object.assign({ position: i }, u && V1), re = d === !0 ? j1({ x: b, y: g }, Jt(n)) : { x: b, y: g };
  if (b = re.x, g = re.y, l) {
    var he;
    return Object.assign({}, fe, (he = {}, he[S] = E ? "0" : "", he[I] = f ? "0" : "", he.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + g + "px)" : "translate3d(" + b + "px, " + g + "px, 0)", he));
  }
  return Object.assign({}, fe, (t = {}, t[S] = E ? g + "px" : "", t[I] = f ? b + "px" : "", t.transform = "", t));
}
function U1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Nn(t.placement), variation: to(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Id = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: U1, data: {} }, Zo = { passive: !0 };
function H1(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Jt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
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
  var t = Jt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function wl(e) {
  return eo(br(e)).left + _l(e).scrollLeft;
}
function K1(e, t) {
  var n = Jt(e), r = br(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Ed();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + wl(e), y: l };
}
function q1(e) {
  var t, n = br(e), r = _l(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ar(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Ar(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + wl(e), l = -r.scrollTop;
  return nr(o || n).direction === "rtl" && (i += Ar(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function kl(e) {
  var t = nr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Rd(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0 ? e.ownerDocument.body : rn(e) && kl(e) ? e : Rd(za(e));
}
function ko(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Rd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Jt(r), s = o ? [a].concat(a.visualViewport || [], kl(r) ? r : []) : r, i = t.concat(s);
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
  return t === Td ? As(K1(e, n)) : Ir(t) ? Y1(t, n) : As(q1(br(e)));
}
function Z1(e) {
  var t = ko(za(e)), n = ["absolute", "fixed"].indexOf(nr(e).position) >= 0, r = n && rn(e) ? zo(e) : e;
  return Ir(r) ? t.filter(function(o) {
    return Ir(o) && Ad(o, r) && Dn(o) !== "body";
  }) : [];
}
function X1(e, t, n, r) {
  var o = t === "clippingParents" ? Z1(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = yc(e, u, r);
    return l.top = Ar(d.top, l.top), l.right = ya(d.right, l.right), l.bottom = ya(d.bottom, l.bottom), l.left = Ar(d.left, l.left), l;
  }, yc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Pd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Nn(r) : null, a = r ? to(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Gt:
      l = { x: s, y: t.y - n.height };
      break;
    case on:
      l = { x: s, y: t.y + t.height };
      break;
    case an:
      l = { x: t.x + t.width, y: i };
      break;
    case Kt:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? _1 : i, u = n.rootBoundary, d = u === void 0 ? Td : u, m = n.elementContext, p = m === void 0 ? fo : m, b = n.altBoundary, h = b === void 0 ? !1 : b, g = n.padding, T = g === void 0 ? 0 : g, f = Od(typeof T != "number" ? T : Ld(T, Fo)), E = p === fo ? w1 : fo, I = e.rects.popper, S = e.elements[h ? E : p], v = X1(Ir(S) ? S : S.contextElement || br(e.elements.popper), l, d, s), C = eo(e.elements.reference), O = Pd({ reference: C, element: I, placement: o }), D = As(Object.assign({}, I, O)), Z = p === fo ? D : C, ne = { top: v.top - Z.top + f.top, bottom: Z.bottom - v.bottom + f.bottom, left: v.left - Z.left + f.left, right: Z.right - v.right + f.right }, fe = e.modifiersData.offset;
  if (p === fo && fe) {
    var re = fe[o];
    Object.keys(ne).forEach(function(he) {
      var ve = [an, on].indexOf(he) >= 0 ? 1 : -1, F = [Gt, on].indexOf(he) >= 0 ? "y" : "x";
      ne[he] += re[F] * ve;
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
  var b = p.reduce(function(h, g) {
    return h[g] = Ro(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[Nn(g)], h;
  }, {});
  return Object.keys(b).sort(function(h, g) {
    return b[h] - b[g];
  });
}
function J1(e) {
  if (Nn(e) === gl) return [];
  var t = ra(e);
  return [bc(e), t, bc(t)];
}
function e_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, p = n.altBoundary, b = n.flipVariations, h = b === void 0 ? !0 : b, g = n.allowedAutoPlacements, T = t.options.placement, f = Nn(T), E = f === T, I = l || (E || !h ? [ra(T)] : J1(T)), S = [T].concat(I).reduce(function(G, We) {
      return G.concat(Nn(We) === gl ? Q1(t, { placement: We, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: g }) : We);
    }, []), v = t.rects.reference, C = t.rects.popper, O = /* @__PURE__ */ new Map(), D = !0, Z = S[0], ne = 0; ne < S.length; ne++) {
      var fe = S[ne], re = Nn(fe), he = to(fe) === Qr, ve = [Gt, on].indexOf(re) >= 0, F = ve ? "width" : "height", X = Ro(t, { placement: fe, boundary: d, rootBoundary: m, altBoundary: p, padding: u }), U = ve ? he ? an : Kt : he ? on : Gt;
      v[F] > C[F] && (U = ra(U));
      var q = ra(U), V = [];
      if (a && V.push(X[re] <= 0), i && V.push(X[U] <= 0, X[q] <= 0), V.every(function(G) {
        return G;
      })) {
        Z = fe, D = !1;
        break;
      }
      O.set(fe, V);
    }
    if (D) for (var we = h ? 3 : 1, Fe = function(G) {
      var We = S.find(function(Te) {
        var et = O.get(Te);
        if (et) return et.slice(0, G).every(function(ue) {
          return ue;
        });
      });
      if (We) return Z = We, "break";
    }, pe = we; pe > 0; pe--) {
      var ke = Fe(pe);
      if (ke === "break") break;
    }
    t.placement !== Z && (t.modifiersData[r]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var t_ = { name: "flip", enabled: !0, phase: "main", fn: e_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function _c(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function wc(e) {
  return [Gt, an, on, Kt].some(function(t) {
    return e[t] >= 0;
  });
}
function n_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ro(t, { elementContext: "reference" }), i = Ro(t, { altBoundary: !0 }), l = _c(s, r), u = _c(i, o, a), d = wc(l), m = wc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var r_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: n_ };
function o_(e, t, n) {
  var r = Nn(e), o = [Kt, Gt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Kt, an].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, p = n.tether, b = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, T = Ro(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: d }), f = Nn(t.placement), E = to(t.placement), I = !E, S = yl(f), v = i_(S), C = t.modifiersData.popperOffsets, O = t.rects.reference, D = t.rects.popper, Z = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, ne = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), fe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, re = { x: 0, y: 0 };
  if (C) {
    if (a) {
      var he, ve = S === "y" ? Gt : Kt, F = S === "y" ? on : an, X = S === "y" ? "height" : "width", U = C[S], q = U + T[ve], V = U - T[F], we = b ? -D[X] / 2 : 0, Fe = E === Qr ? O[X] : D[X], pe = E === Qr ? -D[X] : -O[X], ke = t.elements.arrow, G = b && ke ? bl(ke) : { width: 0, height: 0 }, We = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cd(), Te = We[ve], et = We[F], ue = wo(0, O[X], G[X]), ot = I ? O[X] / 2 - we - ue - Te - ne.mainAxis : Fe - ue - Te - ne.mainAxis, ht = I ? -O[X] / 2 + we + ue + et + ne.mainAxis : pe + ue + et + ne.mainAxis, Ge = t.elements.arrow && zo(t.elements.arrow), xt = Ge ? S === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0 : 0, gt = (he = fe?.[S]) != null ? he : 0, vt = U + ot - gt - xt, bt = U + ht - gt, Xe = wo(b ? ya(q, vt) : q, U, b ? Ar(V, bt) : V);
      C[S] = Xe, re[S] = Xe - U;
    }
    if (i) {
      var ut, w = S === "x" ? Gt : Kt, A = S === "x" ? on : an, z = C[v], J = v === "y" ? "height" : "width", Ae = z + T[w], de = z - T[A], k = [Gt, Kt].indexOf(f) !== -1, $ = (ut = fe?.[v]) != null ? ut : 0, be = k ? Ae : z - O[J] - D[J] - $ + ne.altAxis, Ce = k ? z + O[J] + D[J] - $ - ne.altAxis : de, Ve = b && k ? M1(be, z, Ce) : wo(b ? be : Ae, z, b ? Ce : de);
      C[v] = Ve, re[v] = Ve - z;
    }
    t.modifiersData[r] = re;
  }
}
var u_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: c_, requiresIfExists: ["offset"] };
function d_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function f_(e) {
  return e === Jt(e) || !rn(e) ? _l(e) : d_(e);
}
function p_(e) {
  var t = e.getBoundingClientRect(), n = Jr(t.width) / e.offsetWidth || 1, r = Jr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function m_(e, t, n) {
  n === void 0 && (n = !1);
  var r = rn(t), o = rn(t) && p_(t), a = br(t), s = eo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Dn(t) !== "body" || kl(a)) && (i = f_(t)), rn(t) ? (l = eo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = wl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
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
      h(), u.options = Object.assign({}, a, u.options, T), u.scrollParents = { reference: Ir(s) ? ko(s) : s.contextElement ? ko(s.contextElement) : [], popper: ko(i) };
      var f = g_(b_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(E) {
        return E.enabled;
      }), b(), p.update();
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
            var I = u.orderedModifiers[E], S = I.fn, v = I.options, C = v === void 0 ? {} : v, O = I.name;
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
    function b() {
      u.orderedModifiers.forEach(function(g) {
        var T = g.name, f = g.options, E = f === void 0 ? {} : f, I = g.effect;
        if (typeof I == "function") {
          var S = I({ state: u, name: T, instance: p, options: E }), v = function() {
          };
          d.push(S || v);
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
const k_ = ["fixed", "absolute"], T_ = Ze({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ge(Array),
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
    type: ge(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: k_,
    default: "absolute"
  }
}), $d = Ze({
  ...T_,
  id: String,
  style: {
    type: ge([String, Array, Object])
  },
  className: {
    type: ge([String, Array, Object])
  },
  effect: {
    type: ge(String),
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
    type: ge([String, Array, Object])
  },
  popperStyle: {
    type: ge([String, Array, Object])
  },
  referenceEl: {
    type: ge(Object)
  },
  triggerTargetEl: {
    type: ge(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...$r(["ariaLabel"])
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
  if (ft)
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
  }, o = x(() => {
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
  }), Fn(() => {
    i();
  }), {
    state: x(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: x(() => c(s).styles),
    attributes: x(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: x(() => c(a))
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
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Be(pl, void 0), a = W(), s = W(), i = x(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = x(() => {
    var f;
    const E = c(a), I = (f = c(s)) != null ? f : R_;
    return {
      name: "arrow",
      enabled: !Z0(E),
      options: {
        element: E,
        padding: I
      }
    };
  }), u = x(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...A_(e, [
      c(l),
      c(i)
    ])
  })), d = x(() => C_(e.referenceEl) || c(r)), { attributes: m, state: p, styles: b, update: h, forceUpdate: g, instanceRef: T } = I_(d, n, u);
  return _e(T, (f) => t.value = f), ct(() => {
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
    styles: b,
    role: o,
    forceUpdate: g,
    update: h
  };
}, N_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Zu(), a = pt("popper"), s = x(() => c(t).popper), i = W(De(e.zIndex) ? e.zIndex : o()), l = x(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = x(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = x(() => r.value === "dialog" ? "false" : void 0), m = x(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = De(e.zIndex) ? e.zIndex : o();
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
    } = E_(r, n), { attributes: m, arrowRef: p, contentRef: b, styles: h, instanceRef: g, role: T, update: f } = P_(r), {
      ariaModal: E,
      arrowStyle: I,
      contentAttrs: S,
      contentClass: v,
      contentStyle: C,
      updateZIndex: O
    } = N_(r, {
      styles: h,
      attributes: m,
      role: T
    }), D = Be(ba, void 0), Z = W();
    $n(gd, {
      arrowStyle: I,
      arrowRef: p,
      arrowOffset: Z
    }), D && $n(ba, {
      ...D,
      addInputId: Oo,
      removeInputId: Oo
    });
    let ne;
    const fe = (he = !0) => {
      f(), he && O();
    }, re = () => {
      fe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ct(() => {
      _e(() => r.triggerTargetEl, (he, ve) => {
        ne?.(), ne = void 0;
        const F = c(he || b.value), X = c(ve || b.value);
        gn(F) && (ne = _e([T, () => r.ariaLabel, E, () => r.id], (U) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((q, V) => {
            Qn(U[V]) ? F.removeAttribute(q) : F.setAttribute(q, U[V]);
          });
        }, { immediate: !0 })), X !== F && gn(X) && ["role", "aria-label", "aria-modal", "id"].forEach((U) => {
          X.removeAttribute(U);
        });
      }, { immediate: !0 }), _e(() => r.visible, re, { immediate: !0 });
    }), Fn(() => {
      ne?.(), ne = void 0;
    }), t({
      popperContentRef: b,
      popperInstanceRef: g,
      updatePopper: fe,
      contentStyle: C
    }), (he, ve) => (P(), K("div", Kr({
      ref_key: "contentRef",
      ref: b
    }, c(S), {
      style: c(C),
      class: c(v),
      tabindex: "-1",
      onMouseenter: (F) => he.$emit("mouseenter", F),
      onMouseleave: (F) => he.$emit("mouseleave", F)
    }), [
      N(c(y1), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(b),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(d)
      }, {
        default: le(() => [
          ye(he.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var D_ = /* @__PURE__ */ Je(M_, [["__file", "content.vue"]]);
const F_ = yn(Yy), Sl = Symbol("elTooltip");
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
const z_ = Ze({
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
        De(m) && m > 0 && s(() => {
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
}, El = Ze({
  ...z_,
  ...$d,
  appendTo: {
    type: ge([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: ge(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...$r(["ariaLabel"])
}), Md = Ze({
  ...yd,
  disabled: Boolean,
  trigger: {
    type: ge([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ge(Array),
    default: () => [Pn.enter, Pn.numpadEnter, Pn.space]
  }
}), V_ = Pa({
  type: ge(Boolean),
  default: null
}), j_ = Pa({
  type: ge(Function)
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
      const p = Vt(), { emit: b } = p, h = p.props, g = x(() => rt(h[n])), T = x(() => h[e] === null), f = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), rt(d) && d(O));
      }, E = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), rt(m) && m(O));
      }, I = (O) => {
        if (h.disabled === !0 || rt(u) && !u())
          return;
        const D = g.value && ft;
        D && b(t, !0), (T.value || !D) && f(O);
      }, S = (O) => {
        if (h.disabled === !0 || !ft)
          return;
        const D = g.value && ft;
        D && b(t, !1), (T.value || !D) && E(O);
      }, v = (O) => {
        mr(O) && (h.disabled && O ? g.value && b(t, !1) : s.value !== O && (O ? f() : E()));
      }, C = () => {
        s.value ? S() : I();
      };
      return _e(() => h[e], v), l && p.appContext.config.globalProperties.$route !== void 0 && _e(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && s.value && S();
      }), ct(() => {
        v(h[e]);
      }), {
        hide: S,
        show: I,
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
} = U_("visible"), K_ = Ze({
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
], Y_ = (e, t) => Ln(e) ? e.includes(t) : e === t, zr = (e, t, n) => (r) => {
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
    const n = e, r = pt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Be(Sl, void 0), d = W(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, p = Gn(n, "trigger"), b = Wn(m, zr(p, "hover", i)), h = Wn(m, zr(p, "hover", l)), g = Wn(m, zr(p, "click", (S) => {
      S.button === 0 && u(S);
    })), T = Wn(m, zr(p, "focus", i)), f = Wn(m, zr(p, "focus", l)), E = Wn(m, zr(p, "contextmenu", (S) => {
      S.preventDefault(), u(S);
    })), I = Wn(m, (S) => {
      const { code: v } = S;
      n.triggerKeys.includes(v) && (S.preventDefault(), u(S));
    });
    return t({
      triggerRef: d
    }), (S, v) => (P(), ce(c(a1), {
      id: c(a),
      "virtual-ref": S.virtualRef,
      open: c(s),
      "virtual-triggering": S.virtualTriggering,
      class: Y(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(g),
      onContextmenu: c(E),
      onFocus: c(T),
      onMouseenter: c(b),
      onMouseleave: c(h),
      onKeydown: c(I)
    }, {
      default: le(() => [
        ye(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Q_ = /* @__PURE__ */ Je(X_, [["__file", "trigger.vue"]]);
const J_ = Ze({
  to: {
    type: ge([String, Object]),
    required: !0
  },
  disabled: Boolean
}), ew = /* @__PURE__ */ oe({
  __name: "teleport",
  props: J_,
  setup(e) {
    return (t, n) => t.disabled ? ye(t.$slots, "default", { key: 0 }) : (P(), ce(pf, {
      key: 1,
      to: t.to
    }, [
      ye(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var tw = /* @__PURE__ */ Je(ew, [["__file", "teleport.vue"]]);
const nw = yn(tw), Dd = () => {
  const e = Zs(), t = fd(), n = x(() => `${e.value}-popper-container-${t.prefix}`), r = x(() => `#${n.value}`);
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
    ft && (document.body.querySelector(t.value) || rw(e.value));
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
    const n = e, { selector: r } = Dd(), o = pt("tooltip"), a = W();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: m,
      onOpen: p,
      onShow: b,
      onHide: h,
      onBeforeShow: g,
      onBeforeHide: T
    } = Be(Sl, void 0), f = x(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = x(() => n.persistent);
    Fn(() => {
      s?.();
    });
    const I = x(() => c(E) ? !0 : c(u)), S = x(() => n.disabled ? !1 : c(u)), v = x(() => n.appendTo || r.value), C = x(() => {
      var U;
      return (U = n.style) != null ? U : {};
    }), O = W(!0), D = () => {
      h(), X() && Hn(document.body), O.value = !0;
    }, Z = () => {
      if (c(i))
        return !0;
    }, ne = Wn(Z, () => {
      n.enterable && c(d) === "hover" && p();
    }), fe = Wn(Z, () => {
      c(d) === "hover" && m();
    }), re = () => {
      var U, q;
      (q = (U = a.value) == null ? void 0 : U.updatePopper) == null || q.call(U), g?.();
    }, he = () => {
      T?.();
    }, ve = () => {
      b(), s = pb(x(() => {
        var U;
        return (U = a.value) == null ? void 0 : U.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && m();
      });
    }, F = () => {
      n.virtualTriggering || m();
    }, X = (U) => {
      var q;
      const V = (q = a.value) == null ? void 0 : q.popperContentRef, we = U?.relatedTarget || document.activeElement;
      return V?.contains(we);
    };
    return _e(() => c(u), (U) => {
      U ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), _e(() => n.content, () => {
      var U, q;
      (q = (U = a.value) == null ? void 0 : U.updatePopper) == null || q.call(U);
    }), t({
      contentRef: a,
      isFocusInsideContent: X
    }), (U, q) => (P(), ce(c(nw), {
      disabled: !U.teleported,
      to: c(v)
    }, {
      default: le(() => [
        N(oo, {
          name: c(f),
          onAfterLeave: D,
          onBeforeEnter: re,
          onAfterEnter: ve,
          onBeforeLeave: he
        }, {
          default: le(() => [
            c(I) ? yt((P(), ce(c(D_), Kr({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, U.$attrs, {
              "aria-label": U.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": U.boundariesPadding,
              "fallback-placements": U.fallbackPlacements,
              "gpu-acceleration": U.gpuAcceleration,
              offset: U.offset,
              placement: U.placement,
              "popper-options": U.popperOptions,
              strategy: U.strategy,
              effect: U.effect,
              enterable: U.enterable,
              pure: U.pure,
              "popper-class": U.popperClass,
              "popper-style": [U.popperStyle, c(C)],
              "reference-el": U.referenceEl,
              "trigger-target-el": U.triggerTargetEl,
              visible: c(S),
              "z-index": U.zIndex,
              onMouseenter: c(ne),
              onMouseleave: c(fe),
              onBlur: F,
              onClose: c(m)
            }), {
              default: le(() => [
                ye(U.$slots, "default")
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
var lw = /* @__PURE__ */ Je(sw, [["__file", "content.vue"]]);
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
    }), { onOpen: b, onClose: h } = B_({
      showAfter: Gn(r, "showAfter"),
      hideAfter: Gn(r, "hideAfter"),
      autoClose: Gn(r, "autoClose"),
      open: d,
      close: m
    }), g = x(() => mr(r.visible) && !p.value);
    $n(Sl, {
      controlled: g,
      id: o,
      open: xs(l),
      trigger: Gn(r, "trigger"),
      onOpen: (f) => {
        b(f);
      },
      onClose: (f) => {
        h(f);
      },
      onToggle: (f) => {
        c(l) ? h(f) : b(f);
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
      onOpen: b,
      onClose: h,
      hide: m
    }), (f, E) => (P(), ce(c(F_), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: le(() => [
        N(Q_, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: le(() => [
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
          default: le(() => [
            ye(f.$slots, "content", {}, () => [
              f.rawContent ? (P(), K("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (P(), K("span", { key: 1 }, B(f.content), 1))
            ]),
            f.showArrow ? (P(), ce(c(Qy), {
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
var uw = /* @__PURE__ */ Je(cw, [["__file", "tooltip.vue"]]);
const dw = yn(uw), fw = Ze({
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
    type: ge([String, Object, Array])
  },
  offset: {
    type: ge(Array),
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
    const n = e, r = pt("badge"), o = x(() => n.isDot ? "" : De(n.value) && De(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = x(() => {
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
      class: Y(c(r).b())
    }, [
      ye(s.$slots, "default"),
      N(oo, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: le(() => [
          yt(y("sup", {
            class: Y([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ot(c(a))
          }, [
            ye(s.$slots, "content", { value: c(o) }, () => [
              Xt(B(c(o)), 1)
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
var hw = /* @__PURE__ */ Je(mw, [["__file", "badge.vue"]]);
const gw = yn(hw), vw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Cs = Ze({
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
    const n = e, r = Do(), o = pt("tag"), a = x(() => {
      const { type: u, hit: d, effect: m, closable: p, round: b } = n;
      return [
        o.b(),
        o.is("closable", p),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(m),
        o.is("hit", d),
        o.is("round", b)
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
      class: Y(c(a)),
      style: Ot({ backgroundColor: u.color }),
      onClick: i
    }, [
      y("span", {
        class: Y(c(o).e("content"))
      }, [
        ye(u.$slots, "default")
      ], 2),
      u.closable ? (P(), ce(c(dt), {
        key: 0,
        class: Y(c(o).e("close")),
        onClick: tt(s, ["stop"])
      }, {
        default: le(() => [
          N(c(ga))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (P(), ce(oo, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: le(() => [
        y("span", {
          class: Y(c(a)),
          style: Ot({ backgroundColor: u.color }),
          onClick: i
        }, [
          y("span", {
            class: Y(c(o).e("content"))
          }, [
            ye(u.$slots, "default")
          ], 2),
          u.closable ? (P(), ce(c(dt), {
            key: 0,
            class: Y(c(o).e("close")),
            onClick: tt(s, ["stop"])
          }, {
            default: le(() => [
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
var ww = /* @__PURE__ */ Je(_w, [["__file", "tag.vue"]]);
const kw = yn(ww), cr = /* @__PURE__ */ new Map();
if (ft) {
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
  return Ln(t.arg) ? n = t.arg : gn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), m = e === s, p = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), b = a && (a.contains(s) || a.contains(i));
    l || u || d || m || p || b || t.value(r, o);
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
}, Sw = Ze({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ge(Object)
  },
  size: Na,
  button: {
    type: ge(Object)
  },
  experimentalFeatures: {
    type: ge(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ge(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...td
}), un = {};
oe({
  name: "ElConfigProvider",
  props: Sw,
  setup(e, { slots: t }) {
    _e(() => e.message, (r) => {
      Object.assign(un, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = od(e);
    return () => ye(t, "default", { config: n?.value });
  }
});
const Ew = 100, Aw = 600, Ac = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Ew, delay: o = Aw } = rt(n) ? {} : n;
    let a, s;
    const i = () => rt(n) ? n() : n.handler(), l = () => {
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
}, Cw = Ze({
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
    validator: (e) => e === null || De(e) || ["min", "max"].includes(e),
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
  ...$r(["ariaLabel"])
}), Ow = {
  [tr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Jn]: (e) => De(e) || Qn(e),
  [Tt]: (e) => De(e) || Qn(e)
}, Lw = oe({
  name: "ElInputNumber"
}), Iw = /* @__PURE__ */ oe({
  ...Lw,
  props: Cw,
  emits: Ow,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = sl(), a = pt("input-number"), s = W(), i = Cr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ma(), u = x(() => De(r.modelValue) && r.modelValue <= r.min), d = x(() => De(r.modelValue) && r.modelValue >= r.max), m = x(() => {
      const F = f(r.step);
      return In(r.precision) ? Math.max(f(r.modelValue), F) : (F > r.precision, r.precision);
    }), p = x(() => r.controls && r.controlsPosition === "right"), b = Do(), h = dl(), g = x(() => {
      if (i.userInput !== null)
        return i.userInput;
      let F = i.currentValue;
      if (Qn(F))
        return "";
      if (De(F)) {
        if (Number.isNaN(F))
          return "";
        In(r.precision) || (F = F.toFixed(r.precision));
      }
      return F;
    }), T = (F, X) => {
      if (In(X) && (X = m.value), X === 0)
        return Math.round(F);
      let U = String(F);
      const q = U.indexOf(".");
      if (q === -1 || !U.replace(".", "").split("")[q + X])
        return F;
      const Fe = U.length;
      return U.charAt(Fe - 1) === "5" && (U = `${U.slice(0, Math.max(0, Fe - 1))}6`), Number.parseFloat(Number(U).toFixed(X));
    }, f = (F) => {
      if (Qn(F))
        return 0;
      const X = F.toString(), U = X.indexOf(".");
      let q = 0;
      return U !== -1 && (q = X.length - U - 1), q;
    }, E = (F, X = 1) => De(F) ? T(F + r.step * X) : i.currentValue, I = () => {
      if (r.readonly || h.value || d.value)
        return;
      const F = Number(g.value) || 0, X = E(F);
      C(X), n(Jn, i.currentValue), he();
    }, S = () => {
      if (r.readonly || h.value || u.value)
        return;
      const F = Number(g.value) || 0, X = E(F, -1);
      C(X), n(Jn, i.currentValue), he();
    }, v = (F, X) => {
      const { max: U, min: q, step: V, precision: we, stepStrictly: Fe, valueOnClear: pe } = r;
      U < q && al("InputNumber", "min should not be greater than max.");
      let ke = Number(F);
      if (Qn(F) || Number.isNaN(ke))
        return null;
      if (F === "") {
        if (pe === null)
          return null;
        ke = Mt(pe) ? { min: q, max: U }[pe] : pe;
      }
      return Fe && (ke = T(Math.round(ke / V) * V, we), ke !== F && X && n(Tt, ke)), In(we) || (ke = T(ke, we)), (ke > U || ke < q) && (ke = ke > U ? U : q, X && n(Tt, ke)), ke;
    }, C = (F, X = !0) => {
      var U;
      const q = i.currentValue, V = v(F);
      if (!X) {
        n(Tt, V);
        return;
      }
      q === V && F || (i.userInput = null, n(Tt, V), q !== V && n(tr, V, q), r.validateEvent && ((U = l?.validate) == null || U.call(l, "change").catch((we) => void 0)), i.currentValue = V);
    }, O = (F) => {
      i.userInput = F;
      const X = F === "" ? null : Number(F);
      n(Jn, X), C(X, !1);
    }, D = (F) => {
      const X = F !== "" ? Number(F) : "";
      (De(X) && !Number.isNaN(X) || F === "") && C(X), he(), i.userInput = null;
    }, Z = () => {
      var F, X;
      (X = (F = s.value) == null ? void 0 : F.focus) == null || X.call(F);
    }, ne = () => {
      var F, X;
      (X = (F = s.value) == null ? void 0 : F.blur) == null || X.call(F);
    }, fe = (F) => {
      n("focus", F);
    }, re = (F) => {
      var X, U;
      i.userInput = null, ud() && i.currentValue === null && ((X = s.value) != null && X.input) && (s.value.input.value = ""), n("blur", F), r.validateEvent && ((U = l?.validate) == null || U.call(l, "blur").catch((q) => void 0));
    }, he = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, ve = (F) => {
      document.activeElement === F.target && F.preventDefault();
    };
    return _e(() => r.modelValue, (F, X) => {
      const U = v(F, !0);
      i.userInput === null && U !== X && (i.currentValue = U);
    }, { immediate: !0 }), ct(() => {
      var F;
      const { min: X, max: U, modelValue: q } = r, V = (F = s.value) == null ? void 0 : F.input;
      if (V.setAttribute("role", "spinbutton"), Number.isFinite(U) ? V.setAttribute("aria-valuemax", String(U)) : V.removeAttribute("aria-valuemax"), Number.isFinite(X) ? V.setAttribute("aria-valuemin", String(X)) : V.removeAttribute("aria-valuemin"), V.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), V.setAttribute("aria-disabled", String(h.value)), !De(q) && q != null) {
        let we = Number(q);
        Number.isNaN(we) && (we = null), n(Tt, we);
      }
      V.addEventListener("wheel", ve, { passive: !1 });
    }), Gc(() => {
      var F, X;
      const U = (F = s.value) == null ? void 0 : F.input;
      U?.setAttribute("aria-valuenow", `${(X = i.currentValue) != null ? X : ""}`);
    }), t({
      focus: Z,
      blur: ne
    }), (F, X) => (P(), K("div", {
      class: Y([
        c(a).b(),
        c(a).m(c(b)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !F.controls),
        c(a).is("controls-right", c(p))
      ]),
      onDragstart: tt(() => {
      }, ["prevent"])
    }, [
      F.controls ? yt((P(), K("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: Y([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: nn(S, ["enter"])
      }, [
        ye(F.$slots, "decrease-icon", {}, () => [
          N(c(dt), null, {
            default: le(() => [
              c(p) ? (P(), ce(c(ld), { key: 0 })) : (P(), ce(c(ry), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ac), S]
      ]) : ee("v-if", !0),
      F.controls ? yt((P(), K("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: Y([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: nn(I, ["enter"])
      }, [
        ye(F.$slots, "increase-icon", {}, () => [
          N(c(dt), null, {
            default: le(() => [
              c(p) ? (P(), ce(c(Hb), { key: 0 })) : (P(), ce(c(ay), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ac), I]
      ]) : ee("v-if", !0),
      N(c(Iy), {
        id: F.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: F.step,
        "model-value": c(g),
        placeholder: F.placeholder,
        readonly: F.readonly,
        disabled: c(h),
        size: c(b),
        max: F.max,
        min: F.min,
        name: F.name,
        "aria-label": F.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          nn(tt(I, ["prevent"]), ["up"]),
          nn(tt(S, ["prevent"]), ["down"])
        ],
        onBlur: re,
        onFocus: fe,
        onInput: O,
        onChange: D
      }, gf({
        _: 2
      }, [
        F.$slots.prefix ? {
          name: "prefix",
          fn: le(() => [
            ye(F.$slots, "prefix")
          ])
        } : void 0,
        F.$slots.suffix ? {
          name: "suffix",
          fn: le(() => [
            ye(F.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var xw = /* @__PURE__ */ Je(Iw, [["__file", "input-number.vue"]]);
const Rw = yn(xw);
function Pw() {
  const e = pr(), t = W(0), n = 11, r = x(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return On(e, () => {
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
  const n = Be(Ba), r = Be(Fd, { disabled: !1 }), o = x(() => d(dr(n.props.modelValue), e.value)), a = x(() => {
    var b;
    if (n.props.multiple) {
      const h = dr((b = n.props.modelValue) != null ? b : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = x(() => e.label || (Qt(e.value) ? "" : e.value)), i = x(() => e.value || e.label || ""), l = x(() => e.disabled || t.groupDisabled || a.value), u = Vt(), d = (b = [], h) => {
    if (Qt(e.value)) {
      const g = n.props.valueKey;
      return b && b.some((T) => vf(fr(T, g)) === fr(h, g));
    } else
      return b && b.includes(h);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, p = (b) => {
    const h = new RegExp(vw(b), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return _e(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), _e(() => e.value, (b, h) => {
    const { remote: g, valueKey: T } = n.props;
    if ((g ? b !== h : !_o(b, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (T && Qt(b) && Qt(h) && b[T] === h[T])
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
    const t = pt("select"), n = $a(), r = x(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(p))
    ]), o = Cr({
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
    } = Nw(e, o), { visible: m, hover: p } = Rs(o), b = Vt().proxy;
    l.onOptionCreate(b), Fn(() => {
      const g = b.value, { selected: T } = l.states, f = T.some((E) => E.value === b.value);
      st(() => {
        l.states.cachedOptions.get(g) === b && !f && l.states.cachedOptions.delete(g);
      }), l.onOptionDestroy(g, b);
    });
    function h() {
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
      updateOption: d,
      visible: m,
      hover: p,
      selectOptionClick: h,
      states: o
    };
  }
});
function Mw(e, t, n, r, o, a) {
  return yt((P(), K("li", {
    id: e.id,
    class: Y(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: tt(e.selectOptionClick, ["stop"])
  }, [
    ye(e.$slots, "default", {}, () => [
      y("span", null, B(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [er, e.visible]
  ]);
}
var Al = /* @__PURE__ */ Je($w, [["render", Mw], ["__file", "option.vue"]]);
const Dw = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Be(Ba), t = pt("select"), n = x(() => e.props.popperClass), r = x(() => e.props.multiple), o = x(() => e.props.fitInputWidth), a = W("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ct(() => {
      s(), On(e.selectRef, s);
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
    class: Y([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ot({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), K("div", {
      key: 0,
      class: Y(e.ns.be("dropdown", "header"))
    }, [
      ye(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    ye(e.$slots, "default"),
    e.$slots.footer ? (P(), K("div", {
      key: 1,
      class: Y(e.ns.be("dropdown", "footer"))
    }, [
      ye(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var zw = /* @__PURE__ */ Je(Dw, [["render", Fw], ["__file", "select-dropdown.vue"]]);
const Bw = (e, t) => {
  const { t: n } = sl(), r = $a(), o = pt("select"), a = pt("input"), s = Cr({
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
  }), i = W(null), l = W(null), u = W(null), d = W(null), m = W(null), p = W(null), b = W(null), h = W(null), g = W(null), T = W(null), f = W(null), {
    isComposing: E,
    handleCompositionStart: I,
    handleCompositionUpdate: S,
    handleCompositionEnd: v
  } = hd({
    afterComposition: (R) => Ve(R)
  }), { wrapperRef: C, isFocused: O, handleBlur: D } = md(m, {
    beforeFocus() {
      return X.value;
    },
    afterFocus() {
      e.automaticDropdown && !Z.value && (Z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(R) {
      var Q, se;
      return ((Q = u.value) == null ? void 0 : Q.isFocusInsideContent(R)) || ((se = d.value) == null ? void 0 : se.isFocusInsideContent(R));
    },
    afterBlur() {
      Z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Z = W(!1), ne = W(), { form: fe, formItem: re } = Ma(), { inputId: he } = ul(e, {
    formItemContext: re
  }), { valueOnClear: ve, isEmptyValue: F } = $b(e), X = x(() => e.disabled || fe?.disabled), U = x(() => Ln(e.modelValue) ? e.modelValue.length > 0 : !F(e.modelValue)), q = x(() => {
    var R;
    return (R = fe?.statusIcon) != null ? R : !1;
  }), V = x(() => e.clearable && !X.value && s.inputHovering && U.value), we = x(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Fe = x(() => o.is("reverse", we.value && Z.value)), pe = x(() => re?.validateState || ""), ke = x(() => cd[pe.value]), G = x(() => e.remote ? 300 : 0), We = x(() => e.remote && !s.inputValue && s.options.size === 0), Te = x(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && et.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), et = x(() => ue.value.filter((R) => R.visible).length), ue = x(() => {
    const R = Array.from(s.options.values()), Q = [];
    return s.optionValues.forEach((se) => {
      const je = R.findIndex((_t) => _t.value === se);
      je > -1 && Q.push(R[je]);
    }), Q.length >= R.length ? Q : R;
  }), ot = x(() => Array.from(s.cachedOptions.values())), ht = x(() => {
    const R = ue.value.filter((Q) => !Q.created).some((Q) => Q.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !R;
  }), Ge = () => {
    e.filterable && rt(e.filterMethod) || e.filterable && e.remote && rt(e.remoteMethod) || ue.value.forEach((R) => {
      var Q;
      (Q = R.updateOption) == null || Q.call(R, s.inputValue);
    });
  }, xt = Do(), gt = x(() => ["small"].includes(xt.value) ? "small" : "default"), vt = x({
    get() {
      return Z.value && !We.value;
    },
    set(R) {
      Z.value = R;
    }
  }), bt = x(() => {
    if (e.multiple && !In(e.modelValue))
      return dr(e.modelValue).length === 0 && !s.inputValue;
    const R = Ln(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || In(R) ? !s.inputValue : !0;
  }), Xe = x(() => {
    var R;
    const Q = (R = e.placeholder) != null ? R : n("el.select.placeholder");
    return e.multiple || !U.value ? Q : s.selectedLabel;
  }), ut = x(() => Ts ? null : "mouseenter");
  _e(() => e.modelValue, (R, Q) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), z(), !_o(R, Q) && e.validateEvent && re?.validate("change").catch((se) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), _e(() => Z.value, (R) => {
    R ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", R);
  }), _e(() => s.options.entries(), () => {
    ft && (z(), e.defaultFirstOption && (e.filterable || e.remote) && et.value && A());
  }, {
    flush: "post"
  }), _e([() => s.hoveringIndex, ue], ([R]) => {
    De(R) && R > -1 ? ne.value = ue.value[R] || {} : ne.value = {}, ue.value.forEach((Q) => {
      Q.hover = ne.value === Q;
    });
  }), Wc(() => {
    s.isBeforeHide || Ge();
  });
  const w = (R) => {
    s.previousQuery === R || E.value || (s.previousQuery = R, e.filterable && rt(e.filterMethod) ? e.filterMethod(R) : e.filterable && e.remote && rt(e.remoteMethod) && e.remoteMethod(R), e.defaultFirstOption && (e.filterable || e.remote) && et.value ? st(A) : st(Ae));
  }, A = () => {
    const R = ue.value.filter((_t) => _t.visible && !_t.disabled && !_t.states.groupDisabled), Q = R.find((_t) => _t.created), se = R[0], je = ue.value.map((_t) => _t.value);
    s.hoveringIndex = _n(je, Q || se);
  }, z = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const Q = Ln(e.modelValue) ? e.modelValue[0] : e.modelValue, se = J(Q);
      s.selectedLabel = se.currentLabel, s.selected = [se];
      return;
    }
    const R = [];
    In(e.modelValue) || dr(e.modelValue).forEach((Q) => {
      R.push(J(Q));
    }), s.selected = R;
  }, J = (R) => {
    let Q;
    const se = uh(R);
    for (let en = s.cachedOptions.size - 1; en >= 0; en--) {
      const Zt = ot.value[en];
      if (se ? fr(Zt.value, e.valueKey) === fr(R, e.valueKey) : Zt.value === R) {
        Q = {
          value: R,
          currentLabel: Zt.currentLabel,
          get isDisabled() {
            return Zt.isDisabled;
          }
        };
        break;
      }
    }
    if (Q)
      return Q;
    const je = se ? R.label : R ?? "";
    return {
      value: R,
      currentLabel: je
    };
  }, Ae = () => {
    s.hoveringIndex = ue.value.findIndex((R) => s.selected.some((Q) => M(Q) === M(R)));
  }, de = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, k = () => {
    s.collapseItemWidth = T.value.getBoundingClientRect().width;
  }, $ = () => {
    var R, Q;
    (Q = (R = u.value) == null ? void 0 : R.updatePopper) == null || Q.call(R);
  }, be = () => {
    var R, Q;
    (Q = (R = d.value) == null ? void 0 : R.updatePopper) == null || Q.call(R);
  }, Ce = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), w(s.inputValue);
  }, Ve = (R) => {
    if (s.inputValue = R.target.value, e.remote)
      St();
    else
      return Ce();
  }, St = q0(() => {
    Ce();
  }, G.value), Ke = (R) => {
    _o(e.modelValue, R) || t(tr, R);
  }, ln = (R) => Y0(R, (Q) => {
    const se = s.cachedOptions.get(Q);
    return se && !se.disabled && !se.states.groupDisabled;
  }), qt = (R) => {
    if (e.multiple && R.code !== Pn.delete && R.target.value.length <= 0) {
      const Q = dr(e.modelValue).slice(), se = ln(Q);
      if (se < 0)
        return;
      const je = Q[se];
      Q.splice(se, 1), t(Tt, Q), Ke(Q), t("remove-tag", je);
    }
  }, yr = (R, Q) => {
    const se = s.selected.indexOf(Q);
    if (se > -1 && !X.value) {
      const je = dr(e.modelValue).slice();
      je.splice(se, 1), t(Tt, je), Ke(je), t("remove-tag", Q.value);
    }
    R.stopPropagation(), lr();
  }, Bn = (R) => {
    R.stopPropagation();
    const Q = e.multiple ? [] : ve.value;
    if (e.multiple)
      for (const se of s.selected)
        se.isDisabled && Q.push(se.value);
    t(Tt, Q), Ke(Q), s.hoveringIndex = -1, Z.value = !1, t("clear"), lr();
  }, _r = (R) => {
    var Q;
    if (e.multiple) {
      const se = dr((Q = e.modelValue) != null ? Q : []).slice(), je = _n(se, R);
      je > -1 ? se.splice(je, 1) : (e.multipleLimit <= 0 || se.length < e.multipleLimit) && se.push(R.value), t(Tt, se), Ke(se), R.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Tt, R.value), Ke(R.value), Z.value = !1;
    lr(), !Z.value && st(() => {
      Yt(R);
    });
  }, _n = (R = [], Q) => In(Q) ? -1 : Qt(Q.value) ? R.findIndex((se) => _o(fr(se, e.valueKey), M(Q))) : R.indexOf(Q.value), Yt = (R) => {
    var Q, se, je, _t, en;
    const Zt = Ln(R) ? R[0] : R;
    let Ht = null;
    if (Zt?.value) {
      const ir = ue.value.filter((Bo) => Bo.value === Zt.value);
      ir.length > 0 && (Ht = ir[0].$el);
    }
    if (u.value && Ht) {
      const ir = (_t = (je = (se = (Q = u.value) == null ? void 0 : Q.popperRef) == null ? void 0 : se.contentRef) == null ? void 0 : je.querySelector) == null ? void 0 : _t.call(je, `.${o.be("dropdown", "wrap")}`);
      ir && Db(ir, Ht);
    }
    (en = f.value) == null || en.handleScroll();
  }, Dt = (R) => {
    s.options.set(R.value, R), s.cachedOptions.set(R.value, R);
  }, wn = (R, Q) => {
    s.options.get(R) === Q && s.options.delete(R);
  }, ar = x(() => {
    var R, Q;
    return (Q = (R = u.value) == null ? void 0 : R.popperRef) == null ? void 0 : Q.contentRef;
  }), sr = () => {
    s.isBeforeHide = !1, st(() => {
      var R;
      (R = f.value) == null || R.update(), Yt(s.selected);
    });
  }, lr = () => {
    var R;
    (R = m.value) == null || R.focus();
  }, wr = () => {
    var R;
    if (Z.value) {
      Z.value = !1, st(() => {
        var Q;
        return (Q = m.value) == null ? void 0 : Q.blur();
      });
      return;
    }
    (R = m.value) == null || R.blur();
  }, kr = (R) => {
    Bn(R);
  }, so = (R) => {
    if (Z.value = !1, O.value) {
      const Q = new FocusEvent("focus", R);
      st(() => D(Q));
    }
  }, kn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, Mr = () => {
    X.value || (Ts && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, L = () => {
    if (!Z.value)
      Mr();
    else {
      const R = ue.value[s.hoveringIndex];
      R && !R.isDisabled && _r(R);
    }
  }, M = (R) => Qt(R.value) ? fr(R.value, e.valueKey) : R.value, H = x(() => ue.value.filter((R) => R.visible).every((R) => R.isDisabled)), me = x(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Ee = x(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ie = (R) => {
    if (!Z.value) {
      Z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || et.value === 0 || E.value) && !H.value) {
      R === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : R === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const Q = ue.value[s.hoveringIndex];
      (Q.isDisabled || !Q.visible) && Ie(R), st(() => Yt(ne.value));
    }
  }, Oe = () => {
    if (!l.value)
      return 0;
    const R = window.getComputedStyle(l.value);
    return Number.parseFloat(R.gap || "6px");
  }, Qe = x(() => {
    const R = Oe();
    return { maxWidth: `${T.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - R : s.selectionWidth}px` };
  }), Et = x(() => ({ maxWidth: `${s.selectionWidth}px` })), Re = (R) => {
    t("popup-scroll", R);
  };
  return On(l, de), On(h, $), On(C, $), On(g, be), On(T, k), ct(() => {
    z();
  }), {
    inputId: he,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: Z,
    optionsArray: ue,
    hoverOption: ne,
    selectSize: xt,
    filteredOptionsCount: et,
    updateTooltip: $,
    updateTagTooltip: be,
    debouncedOnInputChange: St,
    onInput: Ve,
    deletePrevTag: qt,
    deleteTag: yr,
    deleteSelected: Bn,
    handleOptionSelect: _r,
    scrollToOption: Yt,
    hasModelValue: U,
    shouldShowPlaceholder: bt,
    currentPlaceholder: Xe,
    mouseEnterEventName: ut,
    needStatusIcon: q,
    showClose: V,
    iconComponent: we,
    iconReverse: Fe,
    validateState: pe,
    validateIcon: ke,
    showNewOption: ht,
    updateOptions: Ge,
    collapseTagSize: gt,
    setSelected: z,
    selectDisabled: X,
    emptyText: Te,
    handleCompositionStart: I,
    handleCompositionUpdate: S,
    handleCompositionEnd: v,
    onOptionCreate: Dt,
    onOptionDestroy: wn,
    handleMenuEnter: sr,
    focus: lr,
    blur: wr,
    handleClearClick: kr,
    handleClickOutside: so,
    handleEsc: kn,
    toggleMenu: Mr,
    selectOption: L,
    getValueKey: M,
    navigateOptions: Ie,
    dropdownMenuVisible: vt,
    showTagList: me,
    collapseTagList: Ee,
    popupScroll: Re,
    tagStyle: Qe,
    collapseTagStyle: Et,
    popperRef: ar,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: p,
    suffixRef: b,
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
    const n = Be(Ba);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Ln(u) && u.forEach((d) => {
          var m, p, b, h;
          const g = (m = d?.type || {}) == null ? void 0 : m.name;
          g === "ElOptionGroup" ? l(!Mt(d.children) && !Ln(d.children) && rt((p = d.children) == null ? void 0 : p.default) ? (b = d.children) == null ? void 0 : b.default() : d.children) : g === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : Ln(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), _o(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const jw = Ze({
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
    type: ge(String),
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
    type: ge(Object),
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
    type: xn,
    default: il
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: xn,
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
    type: ge(String),
    values: Fa,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: ge(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...td,
  ...$r(["ariaLabel"])
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
    ElIcon: dt
  },
  directives: { ClickOutside: Tw },
  props: jw,
  emits: [
    Tt,
    tr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = x(() => {
      const { modelValue: l, multiple: u } = e, d = u ? [] : void 0;
      return Ln(l) ? u ? l : d : u ? d : l;
    }), r = Cr({
      ...Rs(e),
      modelValue: n
    }), o = Bw(r, t), { calculatorRef: a, inputStyle: s } = Pw();
    $n(Ba, Cr({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const i = x(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
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
  const s = Tr("el-tag"), i = Tr("el-tooltip"), l = Tr("el-icon"), u = Tr("el-option"), d = Tr("el-options"), m = Tr("el-scrollbar"), p = Tr("el-select-menu"), b = bf("click-outside");
  return yt((P(), K("div", {
    ref: "selectRef",
    class: Y([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
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
      default: le(() => {
        var h;
        return [
          y("div", {
            ref: "wrapperRef",
            class: Y([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: tt(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (P(), K("div", {
              key: 0,
              ref: "prefixRef",
              class: Y(e.nsSelect.e("prefix"))
            }, [
              ye(e.$slots, "prefix")
            ], 2)) : ee("v-if", !0),
            y("div", {
              ref: "selectionRef",
              class: Y([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ye(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), K(Ct, null, Er(e.showTagList, (g) => (P(), K("div", {
                  key: e.getValueKey(g),
                  class: Y(e.nsSelect.e("selected-item"))
                }, [
                  N(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ot(e.tagStyle),
                    onClose: (T) => e.deleteTag(T, g)
                  }, {
                    default: le(() => [
                      y("span", {
                        class: Y(e.nsSelect.e("tags-text"))
                      }, [
                        ye(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Xt(B(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (P(), ce(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: le(() => [
                    y("div", {
                      ref: "collapseItemRef",
                      class: Y(e.nsSelect.e("selected-item"))
                    }, [
                      N(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ot(e.collapseTagStyle)
                      }, {
                        default: le(() => [
                          y("span", {
                            class: Y(e.nsSelect.e("tags-text"))
                          }, " + " + B(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: le(() => [
                    y("div", {
                      ref: "tagMenuRef",
                      class: Y(e.nsSelect.e("selection"))
                    }, [
                      (P(!0), K(Ct, null, Er(e.collapseTagList, (g) => (P(), K("div", {
                        key: e.getValueKey(g),
                        class: Y(e.nsSelect.e("selected-item"))
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
                          default: le(() => [
                            y("span", {
                              class: Y(e.nsSelect.e("tags-text"))
                            }, [
                              ye(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Xt(B(g.currentLabel), 1)
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
                class: Y([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                yt(y("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: Y([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ot(e.inputStyle),
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
                    nn(tt((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    nn(tt((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    nn(tt(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    nn(tt(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    nn(tt(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: tt(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [To, e.states.inputValue]
                ]),
                e.filterable ? (P(), K("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: Y(e.nsSelect.e("input-calculator")),
                  textContent: B(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (P(), K("div", {
                key: 1,
                class: Y([
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
                  y("span", null, B(e.currentPlaceholder), 1)
                ]) : (P(), K("span", { key: 1 }, B(e.currentPlaceholder), 1))
              ], 2)) : ee("v-if", !0)
            ], 2),
            y("div", {
              ref: "suffixRef",
              class: Y(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), ce(l, {
                key: 0,
                class: Y([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: le(() => [
                  (P(), ce(zt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (P(), ce(l, {
                key: 1,
                class: Y([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: le(() => [
                  (P(), ce(zt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (P(), ce(l, {
                key: 2,
                class: Y([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: le(() => [
                  (P(), ce(zt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: le(() => [
        N(p, { ref: "menuRef" }, {
          default: le(() => [
            e.$slots.header ? (P(), K("div", {
              key: 0,
              class: Y(e.nsSelect.be("dropdown", "header")),
              onClick: tt(() => {
              }, ["stop"])
            }, [
              ye(e.$slots, "header")
            ], 10, ["onClick"])) : ee("v-if", !0),
            yt(N(m, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Y([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: le(() => [
                e.showNewOption ? (P(), ce(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                N(d, null, {
                  default: le(() => [
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
              class: Y(e.nsSelect.be("dropdown", "loading"))
            }, [
              ye(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), K("div", {
              key: 2,
              class: Y(e.nsSelect.be("dropdown", "empty"))
            }, [
              ye(e.$slots, "empty", {}, () => [
                y("span", null, B(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (P(), K("div", {
              key: 3,
              class: Y(e.nsSelect.be("dropdown", "footer")),
              onClick: tt(() => {
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
    [b, e.handleClickOutside, e.popperRef]
  ]);
}
var Ww = /* @__PURE__ */ Je(Uw, [["render", Hw], ["__file", "select.vue"]]);
const Gw = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = pt("select"), n = W(null), r = Vt(), o = W([]);
    $n(Fd, Cr({
      ...Rs(e)
    }));
    const a = x(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = dr(u), m = [];
      return d.forEach((p) => {
        var b, h;
        s(p) ? m.push(p.component.proxy) : (b = p.children) != null && b.length ? m.push(...i(p.children)) : (h = p.component) != null && h.subTree && m.push(...i(p.component.subTree));
      }), m;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return ct(() => {
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
  return yt((P(), K("ul", {
    ref: "groupRef",
    class: Y(e.ns.be("group", "wrap"))
  }, [
    y("li", {
      class: Y(e.ns.be("group", "title"))
    }, B(e.label), 3),
    y("li", null, [
      y("ul", {
        class: Y(e.ns.b("group"))
      }, [
        ye(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [er, e.visible]
  ]);
}
var zd = /* @__PURE__ */ Je(Gw, [["render", Kw], ["__file", "option-group.vue"]]);
const qw = yn(Ww, {
  Option: Al,
  OptionGroup: zd
}), Yw = sd(Al);
sd(zd);
const Zw = (e) => ["", ...ll].includes(e), Xw = Ze({
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
    type: xn
  },
  activeActionIcon: {
    type: xn
  },
  activeIcon: {
    type: xn
  },
  inactiveIcon: {
    type: xn
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
    type: ge(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...$r(["ariaLabel"])
}), Qw = {
  [Tt]: (e) => mr(e) || Mt(e) || De(e),
  [tr]: (e) => mr(e) || Mt(e) || De(e),
  [Jn]: (e) => mr(e) || Mt(e) || De(e)
}, Bd = "ElSwitch", Jw = oe({
  name: Bd
}), ek = /* @__PURE__ */ oe({
  ...Jw,
  props: Xw,
  emits: Qw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ma(), a = Do(), s = pt("switch"), { inputId: i } = ul(r, {
      formItemContext: o
    }), l = dl(x(() => r.loading)), u = W(r.modelValue !== !1), d = W(), m = W(), p = x(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", f.value)
    ]), b = x(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !f.value)
    ]), h = x(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", f.value)
    ]), g = x(() => ({
      width: Xr(r.width)
    }));
    _e(() => r.modelValue, () => {
      u.value = !0;
    });
    const T = x(() => u.value ? r.modelValue : !1), f = x(() => T.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(T.value) || (n(Tt, r.inactiveValue), n(tr, r.inactiveValue), n(Jn, r.inactiveValue)), _e(f, (v) => {
      var C;
      d.value.checked = v, r.validateEvent && ((C = o?.validate) == null || C.call(o, "change").catch((O) => void 0));
    });
    const E = () => {
      const v = f.value ? r.inactiveValue : r.activeValue;
      n(Tt, v), n(tr, v), n(Jn, v), st(() => {
        d.value.checked = f.value;
      });
    }, I = () => {
      if (l.value)
        return;
      const { beforeChange: v } = r;
      if (!v) {
        E();
        return;
      }
      const C = v();
      [
        gi(C),
        mr(C)
      ].includes(!0) || al(Bd, "beforeChange must return type `Promise<boolean>` or `boolean`"), gi(C) ? C.then((D) => {
        D && E();
      }).catch((D) => {
      }) : C && E();
    }, S = () => {
      var v, C;
      (C = (v = d.value) == null ? void 0 : v.focus) == null || C.call(v);
    };
    return ct(() => {
      d.value.checked = f.value;
    }), t({
      focus: S,
      checked: f
    }), (v, C) => (P(), K("div", {
      class: Y(c(p)),
      onClick: tt(I, ["prevent"])
    }, [
      y("input", {
        id: c(i),
        ref_key: "input",
        ref: d,
        class: Y(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(f),
        "aria-disabled": c(l),
        "aria-label": v.ariaLabel,
        name: v.name,
        "true-value": v.activeValue,
        "false-value": v.inactiveValue,
        disabled: c(l),
        tabindex: v.tabindex,
        onChange: E,
        onKeydown: nn(I, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !v.inlinePrompt && (v.inactiveIcon || v.inactiveText) ? (P(), K("span", {
        key: 0,
        class: Y(c(b))
      }, [
        v.inactiveIcon ? (P(), ce(c(dt), { key: 0 }, {
          default: le(() => [
            (P(), ce(zt(v.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !v.inactiveIcon && v.inactiveText ? (P(), K("span", {
          key: 1,
          "aria-hidden": c(f)
        }, B(v.inactiveText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0),
      y("span", {
        ref_key: "core",
        ref: m,
        class: Y(c(s).e("core")),
        style: Ot(c(g))
      }, [
        v.inlinePrompt ? (P(), K("div", {
          key: 0,
          class: Y(c(s).e("inner"))
        }, [
          v.activeIcon || v.inactiveIcon ? (P(), ce(c(dt), {
            key: 0,
            class: Y(c(s).is("icon"))
          }, {
            default: le(() => [
              (P(), ce(zt(c(f) ? v.activeIcon : v.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : v.activeText || v.inactiveText ? (P(), K("span", {
            key: 1,
            class: Y(c(s).is("text")),
            "aria-hidden": !c(f)
          }, B(c(f) ? v.activeText : v.inactiveText), 11, ["aria-hidden"])) : ee("v-if", !0)
        ], 2)) : ee("v-if", !0),
        y("div", {
          class: Y(c(s).e("action"))
        }, [
          v.loading ? (P(), ce(c(dt), {
            key: 0,
            class: Y(c(s).is("loading"))
          }, {
            default: le(() => [
              N(c(id))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? ye(v.$slots, "active-action", { key: 1 }, () => [
            v.activeActionIcon ? (P(), ce(c(dt), { key: 0 }, {
              default: le(() => [
                (P(), ce(zt(v.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(f) ? ee("v-if", !0) : ye(v.$slots, "inactive-action", { key: 2 }, () => [
            v.inactiveActionIcon ? (P(), ce(c(dt), { key: 0 }, {
              default: le(() => [
                (P(), ce(zt(v.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !v.inlinePrompt && (v.activeIcon || v.activeText) ? (P(), K("span", {
        key: 1,
        class: Y(c(h))
      }, [
        v.activeIcon ? (P(), ce(c(dt), { key: 0 }, {
          default: le(() => [
            (P(), ce(zt(v.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !v.activeIcon && v.activeText ? (P(), K("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, B(v.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var tk = /* @__PURE__ */ Je(ek, [["__file", "switch.vue"]]);
const nk = yn(tk), Vd = ["success", "info", "warning", "error"], Rt = dd({
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
  appendTo: ft ? document.body : void 0
}), rk = Ze({
  customClass: {
    type: String,
    default: Rt.customClass
  },
  center: {
    type: Boolean,
    default: Rt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Rt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Rt.duration
  },
  icon: {
    type: xn,
    default: Rt.icon
  },
  id: {
    type: String,
    default: Rt.id
  },
  message: {
    type: ge([
      String,
      Object,
      Function
    ]),
    default: Rt.message
  },
  onClose: {
    type: ge(Function),
    default: Rt.onClose
  },
  showClose: {
    type: Boolean,
    default: Rt.showClose
  },
  type: {
    type: String,
    values: Vd,
    default: Rt.type
  },
  plain: {
    type: Boolean,
    default: Rt.plain
  },
  offset: {
    type: Number,
    default: Rt.offset
  },
  zIndex: {
    type: Number,
    default: Rt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Rt.grouping
  },
  repeatNum: {
    type: Number,
    default: Rt.repeatNum
  }
}), ok = {
  destroy: () => !0
}, hn = _f([]), ak = (e) => {
  const t = hn.findIndex((o) => o.id === e), n = hn[t];
  let r;
  return t > 0 && (r = hn[t - 1]), { current: n, prev: r };
}, sk = (e) => {
  const { prev: t } = ak(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, lk = (e, t) => hn.findIndex((r) => r.id === e) > 0 ? 16 : t, ik = oe({
  name: "ElMessage"
}), ck = /* @__PURE__ */ oe({
  ...ik,
  props: rk,
  emits: ok,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = py, { ns: o, zIndex: a } = rd("message"), { currentZIndex: s, nextZIndex: i } = a, l = W(), u = W(!1), d = W(0);
    let m;
    const p = x(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = x(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && va[O] };
    }), h = x(() => n.icon || va[n.type] || ""), g = x(() => sk(n.id)), T = x(() => lk(n.id, n.offset) + g.value), f = x(() => d.value + T.value), E = x(() => ({
      top: `${T.value}px`,
      zIndex: s.value
    }));
    function I() {
      n.duration !== 0 && ({ stop: m } = Gu(() => {
        v();
      }, n.duration));
    }
    function S() {
      m?.();
    }
    function v() {
      u.value = !1;
    }
    function C({ code: O }) {
      O === Pn.esc && v();
    }
    return ct(() => {
      I(), i(), u.value = !0;
    }), _e(() => n.repeatNum, () => {
      S(), I();
    }), vn(document, "keydown", C), On(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: v
    }), (O, D) => (P(), ce(oo, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (Z) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: le(() => [
        yt(y("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: l,
          class: Y([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: Ot(c(E)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: I
        }, [
          O.repeatNum > 1 ? (P(), ce(c(gw), {
            key: 0,
            value: O.repeatNum,
            type: c(p),
            class: Y(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(h) ? (P(), ce(c(dt), {
            key: 1,
            class: Y([c(o).e("icon"), c(b)])
          }, {
            default: le(() => [
              (P(), ce(zt(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          ye(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (P(), K(Ct, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: Y(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), K("p", {
              key: 0,
              class: Y(c(o).e("content"))
            }, B(O.message), 3))
          ]),
          O.showClose ? (P(), ce(c(dt), {
            key: 2,
            class: Y(c(o).e("closeBtn")),
            onClick: tt(v, ["stop"])
          }, {
            default: le(() => [
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
var uk = /* @__PURE__ */ Je(ck, [["__file", "message.vue"]]);
let dk = 1;
const jd = (e) => {
  const t = !e || Mt(e) || So(e) || rt(e) ? { message: e } : e, n = {
    ...Rt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Mt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    gn(r) || (r = document.body), n.appendTo = r;
  }
  return mr(un.grouping) && !n.grouping && (n.grouping = un.grouping), De(un.duration) && n.duration === 3e3 && (n.duration = un.duration), De(un.offset) && n.offset === 16 && (n.offset = un.offset), mr(un.showClose) && !n.showClose && (n.showClose = un.showClose), n;
}, fk = (e) => {
  const t = hn.indexOf(e);
  if (t === -1)
    return;
  hn.splice(t, 1);
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
  }, i = N(uk, s, rt(s.message) || So(s.message) ? {
    default: rt(s.message) ? s.message : () => s.message
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
  if (!ft)
    return { close: () => {
    } };
  const n = jd(e);
  if (n.grouping && hn.length) {
    const o = hn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (De(un.max) && hn.length >= un.max)
    return { close: () => {
    } };
  const r = pk(n, t);
  return hn.push(r), r.handler;
};
Vd.forEach((e) => {
  no[e] = (t = {}, n) => {
    const r = jd(t);
    return no({ ...r, type: e }, n);
  };
});
function mk(e) {
  for (const t of hn)
    (!e || e === t.props.type) && t.handler.close();
}
no.closeAll = mk;
no._context = null;
const hk = ad(no, "$message"), Ud = [
  "success",
  "info",
  "warning",
  "error"
], gk = Ze({
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
    type: ge([
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
    type: ge(Function),
    default: () => {
    }
  },
  onClose: {
    type: ge(Function),
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
    const d = x(() => {
      const I = n.type;
      return I && va[n.type] ? r.m(I) : "";
    }), m = x(() => n.type && va[n.type] || n.icon), p = x(() => n.position.endsWith("right") ? "right" : "left"), b = x(() => n.position.startsWith("top") ? "top" : "bottom"), h = x(() => {
      var I;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (I = n.zIndex) != null ? I : s.value
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
    function E({ code: I }) {
      I === Pn.delete || I === Pn.backspace ? T() : I === Pn.esc ? l.value && f() : g();
    }
    return ct(() => {
      g(), a(), l.value = !0;
    }), vn(document, "keydown", E), t({
      visible: l,
      close: f
    }), (I, S) => (P(), ce(oo, {
      name: c(r).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (v) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: le(() => [
        yt(y("div", {
          id: I.id,
          class: Y([c(r).b(), I.customClass, c(p)]),
          style: Ot(c(h)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: g,
          onClick: I.onClick
        }, [
          c(m) ? (P(), ce(c(dt), {
            key: 0,
            class: Y([c(r).e("icon"), c(d)])
          }, {
            default: le(() => [
              (P(), ce(zt(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          y("div", {
            class: Y(c(r).e("group"))
          }, [
            y("h2", {
              class: Y(c(r).e("title")),
              textContent: B(I.title)
            }, null, 10, ["textContent"]),
            yt(y("div", {
              class: Y(c(r).e("content")),
              style: Ot(I.title ? void 0 : { margin: 0 })
            }, [
              ye(I.$slots, "default", {}, () => [
                I.dangerouslyUseHTMLString ? (P(), K(Ct, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: I.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), K("p", { key: 0 }, B(I.message), 1))
              ])
            ], 6), [
              [er, I.message]
            ]),
            I.showClose ? (P(), ce(c(dt), {
              key: 0,
              class: Y(c(r).e("closeBtn")),
              onClick: tt(f, ["stop"])
            }, {
              default: le(() => [
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
var _k = /* @__PURE__ */ Je(yk, [["__file", "notification.vue"]]);
const _a = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Os = 16;
let wk = 1;
const ro = function(e = {}, t) {
  if (!ft)
    return { close: () => {
    } };
  (Mt(e) || So(e)) && (e = { message: e });
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
  gn(e.appendTo) ? i = e.appendTo : Mt(e.appendTo) && (i = document.querySelector(e.appendTo)), gn(i) || (i = document.body);
  const l = document.createElement("div"), u = N(_k, s, rt(s.message) ? s.message : So(s.message) ? () => s.message : null);
  return u.appContext = In(t) ? ro._context : t, u.props.onDestroy = () => {
    sa(null, l);
  }, sa(u, l), _a[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Ud.forEach((e) => {
  ro[e] = (t = {}, n) => ((Mt(t) || So(t)) && (t = {
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
const Sk = ad(ro, "$notify"), $t = {
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
async function It(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Oc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Oc || (Oc = {}));
async function Ak(e, t) {
  await It("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ck(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return It("plugin:event|listen", {
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
  Rk(e, t, n), Nk(e) && It("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Wd(n)
  }).catch(() => {
  });
}, dn = {
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
  return await It("local_ai_get_config");
}
async function aa(e) {
  return await It("local_ai_save_config", { config: e });
}
async function Kd(e) {
  return await It("local_ai_scan_models", {
    config: e ?? null
  });
}
async function $k() {
  return await It("local_ai_get_runtime_status");
}
async function qd() {
  return await It("local_ai_get_status");
}
async function Mk(e) {
  return await It("local_ai_start_service", {
    config: e ?? null
  });
}
async function Yd() {
  return await It("local_ai_restart_service");
}
async function Dk() {
  await It("local_ai_stop_service");
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
    return await It("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function Qa(e) {
  return await It("local_ai_cancel_chat_stream", { requestId: e });
}
async function zk() {
  return await It("local_ai_get_chat_histories");
}
async function Bk(e) {
  return await It("local_ai_save_chat_history", {
    history: e
  });
}
async function Vk(e) {
  return await It("local_ai_delete_chat_history", {
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
let jt = Object.freeze, sn = Object.seal, Wr = Object.create, Qd = typeof Reflect < "u" && Reflect, Ls = Qd.apply, Is = Qd.construct;
jt || (jt = function(t) {
  return t;
});
sn || (sn = function(t) {
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
const Br = mt(Array.prototype.forEach), Zk = mt(Array.prototype.lastIndexOf), xc = mt(Array.prototype.pop), Vr = mt(Array.prototype.push), Xk = mt(Array.prototype.splice), Ft = Array.isArray, vo = mt(String.prototype.toLowerCase), Ja = mt(String.prototype.toString), Rc = mt(String.prototype.match), jr = mt(String.prototype.replace), Pc = mt(String.prototype.indexOf), Qk = mt(String.prototype.trim), Jk = mt(Number.prototype.toString), eT = mt(Boolean.prototype.toString), Nc = typeof BigInt > "u" ? null : mt(BigInt.prototype.toString), $c = typeof Symbol > "u" ? null : mt(Symbol.prototype.toString), at = mt(Object.prototype.hasOwnProperty), mo = mt(Object.prototype.toString), At = mt(RegExp.prototype.test), ho = tT(TypeError);
function mt(e) {
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
function Se(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vo;
  if (Ic && Ic(e, null), !Ft(t))
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
    at(e, t) || (e[t] = null);
  return e;
}
function Pt(e) {
  const t = Wr(null);
  for (const r of Xd(e)) {
    var n = Wk(r, 2);
    const o = n[0], a = n[1];
    at(e, o) && (Ft(a) ? t[o] = nT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Pt(a) : t[o] = a);
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
      const t = e, n = Cn(t, "toString");
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
function Cn(e, t) {
  for (; e !== null; ) {
    const r = Yk(e, t);
    if (r) {
      if (r.get)
        return mt(r.get);
      if (typeof r.value == "function")
        return mt(r.value);
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
    return At(e, ""), !0;
  } catch {
    return !1;
  }
}
const Mc = jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), es = jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ts = jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), aT = jt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ns = jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sT = jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Dc = jt(["#text"]), Fc = jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), rs = jt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zc = jt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qo = jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lT = sn(/{{[\w\W]*|^[\w\W]*}}/g), iT = sn(/<%[\w\W]*|^[\w\W]*%>/g), cT = sn(/\${[\w\W]*/g), uT = sn(/^data-[\-\w.\u00B7-\uFFFF]+$/), dT = sn(/^aria-[\-\w]+$/), Bc = sn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fT = sn(/^(?:\w+script|data):/i), pT = sn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), mT = sn(/^html$/i), hT = sn(/^[a-z][.\w]*(-[.\w]+)+$/i), An = {
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
  const t = (ie) => Jd(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== An.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, p = i.prototype, b = Cn(p, "cloneNode"), h = Cn(p, "remove"), g = Cn(p, "nextSibling"), T = Cn(p, "childNodes"), f = Cn(p, "parentNode"), E = Cn(p, "shadowRoot"), I = Cn(p, "attributes"), S = s && s.prototype ? Cn(s.prototype, "nodeType") : null, v = s && s.prototype ? Cn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let C, O = "";
  const D = n, Z = D.implementation, ne = D.createNodeIterator, fe = D.createDocumentFragment, re = D.getElementsByTagName, he = r.importNode;
  let ve = Vc();
  t.isSupported = typeof Xd == "function" && typeof f == "function" && Z && Z.createHTMLDocument !== void 0;
  const F = lT, X = iT, U = cT, q = uT, V = dT, we = fT, Fe = pT, pe = hT;
  let ke = Bc, G = null;
  const We = Se({}, [...Mc, ...es, ...ts, ...ns, ...Dc]);
  let Te = null;
  const et = Se({}, [...Fc, ...rs, ...zc, ...Qo]);
  let ue = Object.seal(Wr(null, {
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
  })), ot = null, ht = null;
  const Ge = Object.seal(Wr(null, {
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
  let xt = !0, gt = !0, vt = !1, bt = !0, Xe = !1, ut = !0, w = !1, A = !1, z = !1, J = !1, Ae = !1, de = !1, k = !0, $ = !1;
  const be = "user-content-";
  let Ce = !0, Ve = !1, St = {}, Ke = null;
  const ln = Se({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qt = null;
  const yr = Se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bn = null;
  const _r = Se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), _n = "http://www.w3.org/1998/Math/MathML", Yt = "http://www.w3.org/2000/svg", Dt = "http://www.w3.org/1999/xhtml";
  let wn = Dt, ar = !1, sr = null;
  const lr = Se({}, [_n, Yt, Dt], Ja);
  let wr = Se({}, ["mi", "mo", "mn", "ms", "mtext"]), kr = Se({}, ["annotation-xml"]);
  const so = Se({}, ["title", "style", "font", "a", "script"]);
  let kn = null;
  const Mr = ["application/xhtml+xml", "text/html"], L = "text/html";
  let M = null, H = null;
  const me = n.createElement("form"), Ee = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Ie = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (H && H === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = Pt(_), kn = // eslint-disable-next-line unicorn/prefer-includes
    Mr.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? L : _.PARSER_MEDIA_TYPE, M = kn === "application/xhtml+xml" ? Ja : vo, G = at(_, "ALLOWED_TAGS") && Ft(_.ALLOWED_TAGS) ? Se({}, _.ALLOWED_TAGS, M) : We, Te = at(_, "ALLOWED_ATTR") && Ft(_.ALLOWED_ATTR) ? Se({}, _.ALLOWED_ATTR, M) : et, sr = at(_, "ALLOWED_NAMESPACES") && Ft(_.ALLOWED_NAMESPACES) ? Se({}, _.ALLOWED_NAMESPACES, Ja) : lr, Bn = at(_, "ADD_URI_SAFE_ATTR") && Ft(_.ADD_URI_SAFE_ATTR) ? Se(Pt(_r), _.ADD_URI_SAFE_ATTR, M) : _r, qt = at(_, "ADD_DATA_URI_TAGS") && Ft(_.ADD_DATA_URI_TAGS) ? Se(Pt(yr), _.ADD_DATA_URI_TAGS, M) : yr, Ke = at(_, "FORBID_CONTENTS") && Ft(_.FORBID_CONTENTS) ? Se({}, _.FORBID_CONTENTS, M) : ln, ot = at(_, "FORBID_TAGS") && Ft(_.FORBID_TAGS) ? Se({}, _.FORBID_TAGS, M) : Pt({}), ht = at(_, "FORBID_ATTR") && Ft(_.FORBID_ATTR) ? Se({}, _.FORBID_ATTR, M) : Pt({}), St = at(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? Pt(_.USE_PROFILES) : _.USE_PROFILES : !1, xt = _.ALLOW_ARIA_ATTR !== !1, gt = _.ALLOW_DATA_ATTR !== !1, vt = _.ALLOW_UNKNOWN_PROTOCOLS || !1, bt = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Xe = _.SAFE_FOR_TEMPLATES || !1, ut = _.SAFE_FOR_XML !== !1, w = _.WHOLE_DOCUMENT || !1, J = _.RETURN_DOM || !1, Ae = _.RETURN_DOM_FRAGMENT || !1, de = _.RETURN_TRUSTED_TYPE || !1, z = _.FORCE_BODY || !1, k = _.SANITIZE_DOM !== !1, $ = _.SANITIZE_NAMED_PROPS || !1, Ce = _.KEEP_CONTENT !== !1, Ve = _.IN_PLACE || !1, ke = oT(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : Bc, wn = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Dt, wr = at(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Pt(_.MATHML_TEXT_INTEGRATION_POINTS) : Se({}, ["mi", "mo", "mn", "ms", "mtext"]), kr = at(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? Pt(_.HTML_INTEGRATION_POINTS) : Se({}, ["annotation-xml"]);
    const j = at(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? Pt(_.CUSTOM_ELEMENT_HANDLING) : Wr(null);
    if (ue = Wr(null), at(j, "tagNameCheck") && Ee(j.tagNameCheck) && (ue.tagNameCheck = j.tagNameCheck), at(j, "attributeNameCheck") && Ee(j.attributeNameCheck) && (ue.attributeNameCheck = j.attributeNameCheck), at(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (ue.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), Xe && (gt = !1), Ae && (J = !0), St && (G = Se({}, Dc), Te = Wr(null), St.html === !0 && (Se(G, Mc), Se(Te, Fc)), St.svg === !0 && (Se(G, es), Se(Te, rs), Se(Te, Qo)), St.svgFilters === !0 && (Se(G, ts), Se(Te, rs), Se(Te, Qo)), St.mathMl === !0 && (Se(G, ns), Se(Te, zc), Se(Te, Qo))), Ge.tagCheck = null, Ge.attributeCheck = null, at(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? Ge.tagCheck = _.ADD_TAGS : Ft(_.ADD_TAGS) && (G === We && (G = Pt(G)), Se(G, _.ADD_TAGS, M))), at(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? Ge.attributeCheck = _.ADD_ATTR : Ft(_.ADD_ATTR) && (Te === et && (Te = Pt(Te)), Se(Te, _.ADD_ATTR, M))), at(_, "ADD_URI_SAFE_ATTR") && Ft(_.ADD_URI_SAFE_ATTR) && Se(Bn, _.ADD_URI_SAFE_ATTR, M), at(_, "FORBID_CONTENTS") && Ft(_.FORBID_CONTENTS) && (Ke === ln && (Ke = Pt(Ke)), Se(Ke, _.FORBID_CONTENTS, M)), at(_, "ADD_FORBID_CONTENTS") && Ft(_.ADD_FORBID_CONTENTS) && (Ke === ln && (Ke = Pt(Ke)), Se(Ke, _.ADD_FORBID_CONTENTS, M)), Ce && (G["#text"] = !0), w && Se(G, ["html", "head", "body"]), G.table && (Se(G, ["tbody"]), delete ot.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ho('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ho('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      C = _.TRUSTED_TYPES_POLICY, O = C.createHTML("");
    } else
      C === void 0 && (C = vT(m, o)), C !== null && typeof O == "string" && (O = C.createHTML(""));
    (ve.uponSanitizeElement.length > 0 || ve.uponSanitizeAttribute.length > 0) && G === We && (G = Pt(G)), ve.uponSanitizeAttribute.length > 0 && Te === et && (Te = Pt(Te)), jt && jt(_), H = _;
  }, Oe = Se({}, [...es, ...ts, ...aT]), Qe = Se({}, [...ns, ...sT]), Et = function(_) {
    let j = f(_);
    (!j || !j.tagName) && (j = {
      namespaceURI: wn,
      tagName: "template"
    });
    const te = vo(_.tagName), $e = vo(j.tagName);
    return sr[_.namespaceURI] ? _.namespaceURI === Yt ? j.namespaceURI === Dt ? te === "svg" : j.namespaceURI === _n ? te === "svg" && ($e === "annotation-xml" || wr[$e]) : !!Oe[te] : _.namespaceURI === _n ? j.namespaceURI === Dt ? te === "math" : j.namespaceURI === Yt ? te === "math" && kr[$e] : !!Qe[te] : _.namespaceURI === Dt ? j.namespaceURI === Yt && !kr[$e] || j.namespaceURI === _n && !wr[$e] ? !1 : !Qe[te] && (so[te] || !Oe[te]) : !!(kn === "application/xhtml+xml" && sr[_.namespaceURI]) : !1;
  }, Re = function(_) {
    Vr(t.removed, {
      element: _
    });
    try {
      f(_).removeChild(_);
    } catch {
      h(_);
    }
  }, R = function(_, j) {
    try {
      Vr(t.removed, {
        attribute: j.getAttributeNode(_),
        from: j
      });
    } catch {
      Vr(t.removed, {
        attribute: null,
        from: j
      });
    }
    if (j.removeAttribute(_), _ === "is")
      if (J || Ae)
        try {
          Re(j);
        } catch {
        }
      else
        try {
          j.setAttribute(_, "");
        } catch {
        }
  }, Q = function(_) {
    let j = null, te = null;
    if (z)
      _ = "<remove></remove>" + _;
    else {
      const qe = Rc(_, /^[\r\n\t ]+/);
      te = qe && qe[0];
    }
    kn === "application/xhtml+xml" && wn === Dt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const $e = C ? C.createHTML(_) : _;
    if (wn === Dt)
      try {
        j = new d().parseFromString($e, kn);
      } catch {
      }
    if (!j || !j.documentElement) {
      j = Z.createDocument(wn, "template", null);
      try {
        j.documentElement.innerHTML = ar ? O : $e;
      } catch {
      }
    }
    const Le = j.body || j.documentElement;
    return _ && te && Le.insertBefore(n.createTextNode(te), Le.childNodes[0] || null), wn === Dt ? re.call(j, w ? "html" : "body")[0] : w ? j.documentElement : Le;
  }, se = function(_) {
    return ne.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, je = function(_) {
    _.normalize();
    const j = ne.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let te = j.nextNode();
    for (; te; ) {
      let $e = te.data;
      Br([F, X, U], (Le) => {
        $e = jr($e, Le, " ");
      }), te.data = $e, te = j.nextNode();
    }
  }, _t = function(_) {
    const j = v ? v(_) : null;
    return typeof j != "string" || M(j) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== I(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, en = function(_) {
    if (!S || typeof _ != "object" || _ === null)
      return !1;
    try {
      return S(_) === An.documentFragment;
    } catch {
      return !1;
    }
  }, Zt = function(_) {
    if (!S || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof S(_) == "number";
    } catch {
      return !1;
    }
  };
  function Ht(ie, _, j) {
    Br(ie, (te) => {
      te.call(t, _, j, H);
    });
  }
  const ir = function(_) {
    let j = null;
    if (Ht(ve.beforeSanitizeElements, _, null), _t(_))
      return Re(_), !0;
    const te = M(_.nodeName);
    if (Ht(ve.uponSanitizeElement, _, {
      tagName: te,
      allowedTags: G
    }), ut && _.hasChildNodes() && !Zt(_.firstElementChild) && At(/<[/\w!]/g, _.innerHTML) && At(/<[/\w!]/g, _.textContent) || ut && _.namespaceURI === Dt && te === "style" && Zt(_.firstElementChild) || _.nodeType === An.progressingInstruction || ut && _.nodeType === An.comment && At(/<[/\w]/g, _.data))
      return Re(_), !0;
    if (ot[te] || !(Ge.tagCheck instanceof Function && Ge.tagCheck(te)) && !G[te]) {
      if (!ot[te] && Ol(te) && (ue.tagNameCheck instanceof RegExp && At(ue.tagNameCheck, te) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(te)))
        return !1;
      if (Ce && !Ke[te]) {
        const Le = f(_), qe = T(_);
        if (qe && Le) {
          const tn = qe.length;
          for (let Tn = tn - 1; Tn >= 0; --Tn) {
            const cn = b(qe[Tn], !0);
            Le.insertBefore(cn, g(_));
          }
        }
      }
      return Re(_), !0;
    }
    return (S ? S(_) : _.nodeType) === An.element && !Et(_) || (te === "noscript" || te === "noembed" || te === "noframes") && At(/<\/no(script|embed|frames)/i, _.innerHTML) ? (Re(_), !0) : (Xe && _.nodeType === An.text && (j = _.textContent, Br([F, X, U], (Le) => {
      j = jr(j, Le, " ");
    }), _.textContent !== j && (Vr(t.removed, {
      element: _.cloneNode()
    }), _.textContent = j)), Ht(ve.afterSanitizeElements, _, null), !1);
  }, Bo = function(_, j, te) {
    if (ht[j] || k && (j === "id" || j === "name") && (te in n || te in me))
      return !1;
    const $e = Te[j] || Ge.attributeCheck instanceof Function && Ge.attributeCheck(j, _);
    if (!(gt && !ht[j] && At(q, j))) {
      if (!(xt && At(V, j))) {
        if (!$e || ht[j]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ol(_) && (ue.tagNameCheck instanceof RegExp && At(ue.tagNameCheck, _) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(_)) && (ue.attributeNameCheck instanceof RegExp && At(ue.attributeNameCheck, j) || ue.attributeNameCheck instanceof Function && ue.attributeNameCheck(j, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            j === "is" && ue.allowCustomizedBuiltInElements && (ue.tagNameCheck instanceof RegExp && At(ue.tagNameCheck, te) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(te)))
          ) return !1;
        } else if (!Bn[j]) {
          if (!At(ke, jr(te, Fe, ""))) {
            if (!((j === "src" || j === "xlink:href" || j === "href") && _ !== "script" && Pc(te, "data:") === 0 && qt[_])) {
              if (!(vt && !At(we, jr(te, Fe, "")))) {
                if (te)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ef = Se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ol = function(_) {
    return !ef[vo(_)] && At(pe, _);
  }, Ll = function(_) {
    Ht(ve.beforeSanitizeAttributes, _, null);
    const j = _.attributes;
    if (!j || _t(_))
      return;
    const te = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Te,
      forceKeepAttr: void 0
    };
    let $e = j.length;
    for (; $e--; ) {
      const Le = j[$e], qe = Le.name, tn = Le.namespaceURI, Tn = Le.value, cn = M(qe), Va = Tn;
      let wt = qe === "value" ? Va : Qk(Va);
      if (te.attrName = cn, te.attrValue = wt, te.keepAttr = !0, te.forceKeepAttr = void 0, Ht(ve.uponSanitizeAttribute, _, te), wt = te.attrValue, $ && (cn === "id" || cn === "name") && Pc(wt, be) !== 0 && (R(qe, _), wt = be + wt), ut && At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, wt)) {
        R(qe, _);
        continue;
      }
      if (cn === "attributename" && Rc(wt, "href")) {
        R(qe, _);
        continue;
      }
      if (te.forceKeepAttr)
        continue;
      if (!te.keepAttr) {
        R(qe, _);
        continue;
      }
      if (!bt && At(/\/>/i, wt)) {
        R(qe, _);
        continue;
      }
      Xe && Br([F, X, U], (xl) => {
        wt = jr(wt, xl, " ");
      });
      const Il = M(_.nodeName);
      if (!Bo(Il, cn, wt)) {
        R(qe, _);
        continue;
      }
      if (C && typeof m == "object" && typeof m.getAttributeType == "function" && !tn)
        switch (m.getAttributeType(Il, cn)) {
          case "TrustedHTML": {
            wt = C.createHTML(wt);
            break;
          }
          case "TrustedScriptURL": {
            wt = C.createScriptURL(wt);
            break;
          }
        }
      if (wt !== Va)
        try {
          tn ? _.setAttributeNS(tn, qe, wt) : _.setAttribute(qe, wt), _t(_) ? Re(_) : xc(t.removed);
        } catch {
          R(qe, _);
        }
    }
    Ht(ve.afterSanitizeAttributes, _, null);
  }, Vo = function(_) {
    let j = null;
    const te = se(_);
    for (Ht(ve.beforeSanitizeShadowDOM, _, null); j = te.nextNode(); )
      if (Ht(ve.uponSanitizeShadowNode, j, null), ir(j), Ll(j), en(j.content) && Vo(j.content), (S ? S(j) : j.nodeType) === An.element) {
        const Le = E ? E(j) : j.shadowRoot;
        en(Le) && (Dr(Le), Vo(Le));
      }
    Ht(ve.afterSanitizeShadowDOM, _, null);
  }, Dr = function(_) {
    const j = S ? S(_) : _.nodeType;
    if (j === An.element) {
      const Le = E ? E(_) : _.shadowRoot;
      en(Le) && (Dr(Le), Vo(Le));
    }
    const te = T ? T(_) : _.childNodes;
    if (!te)
      return;
    const $e = [];
    Br(te, (Le) => {
      Vr($e, Le);
    });
    for (const Le of $e)
      Dr(Le);
    if (j === An.element) {
      const Le = v ? v(_) : null;
      if (typeof Le == "string" && M(Le) === "template") {
        const qe = _.content;
        en(qe) && Dr(qe);
      }
    }
  };
  return t.sanitize = function(ie) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, te = null, $e = null, Le = null;
    if (ar = !ie, ar && (ie = "<!-->"), typeof ie != "string" && !Zt(ie) && (ie = rT(ie), typeof ie != "string"))
      throw ho("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (A || Ie(_), t.removed = [], typeof ie == "string" && (Ve = !1), Ve) {
      const Tn = v ? v(ie) : ie.nodeName;
      if (typeof Tn == "string") {
        const cn = M(Tn);
        if (!G[cn] || ot[cn])
          throw ho("root node is forbidden and cannot be sanitized in-place");
      }
      if (_t(ie))
        throw ho("root node is clobbered and cannot be sanitized in-place");
      Dr(ie);
    } else if (Zt(ie))
      j = Q("<!---->"), te = j.ownerDocument.importNode(ie, !0), te.nodeType === An.element && te.nodeName === "BODY" || te.nodeName === "HTML" ? j = te : j.appendChild(te), Dr(te);
    else {
      if (!J && !Xe && !w && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return C && de ? C.createHTML(ie) : ie;
      if (j = Q(ie), !j)
        return J ? null : de ? O : "";
    }
    j && z && Re(j.firstChild);
    const qe = se(Ve ? ie : j);
    for (; $e = qe.nextNode(); )
      ir($e), Ll($e), en($e.content) && Vo($e.content);
    if (Ve)
      return Xe && je(ie), ie;
    if (J) {
      if (Xe && je(j), Ae)
        for (Le = fe.call(j.ownerDocument); j.firstChild; )
          Le.appendChild(j.firstChild);
      else
        Le = j;
      return (Te.shadowroot || Te.shadowrootmode) && (Le = he.call(r, Le, !0)), Le;
    }
    let tn = w ? j.outerHTML : j.innerHTML;
    return w && G["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && At(mT, j.ownerDocument.doctype.name) && (tn = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + tn), Xe && Br([F, X, U], (Tn) => {
      tn = jr(tn, Tn, " ");
    }), C && de ? C.createHTML(tn) : tn;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ie(ie), A = !0;
  }, t.clearConfig = function() {
    H = null, A = !1;
  }, t.isValidAttribute = function(ie, _, j) {
    H || Ie({});
    const te = M(ie), $e = M(_);
    return Bo(te, $e, j);
  }, t.addHook = function(ie, _) {
    typeof _ == "function" && Vr(ve[ie], _);
  }, t.removeHook = function(ie, _) {
    if (_ !== void 0) {
      const j = Zk(ve[ie], _);
      return j === -1 ? void 0 : Xk(ve[ie], j, 1)[0];
    }
    return xc(ve[ie]);
  }, t.removeHooks = function(ie) {
    ve[ie] = [];
  }, t.removeAllHooks = function() {
    ve = Vc();
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
}, AS = { class: "input-toolbar-right" }, CS = ["title", "aria-label"], OS = ["disabled", "title", "aria-label"], LS = 96, IS = 512, os = 160, xS = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Po(), n = W(""), r = W([]), o = W(""), a = W(""), s = W(!1), i = W(!1), l = W(!1), u = W(!1), d = W(!0), m = W(!1), p = W(null), b = W(null), h = W(null), g = W(""), T = W(null), f = W(null), E = W(Date.now());
    let I = null, S = null;
    const v = /* @__PURE__ */ new Map(), C = x(() => !!a.value.trim() && !s.value), O = x(() => T.value?.healthy ? t("localAi.serviceHealthy") : T.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), D = x(
      () => r.value.find((L) => L.id === o.value) ?? null
    ), Z = x(() => D.value?.messages ?? []), ne = (L) => L ? L.split(/[\\/]+/).pop() ?? L : "", fe = x(
      () => ne(g.value) || ne(T.value?.modelPath) || ne(b.value?.modelPath) || t("localAi.localModel")
    ), re = x(() => h.value?.mainModels ?? []), he = x(
      () => T.value?.ctxSize ?? b.value?.ctxSize ?? 4096
    ), ve = x(
      () => Math.max(512, he.value - IS)
    ), F = x(() => {
      const L = fe.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(L);
    }), X = x(() => {
      const L = n.value.trim().toLowerCase();
      return r.value.filter(
        (M) => !L || M.title.toLowerCase().includes(L) || M.messages.some(
          (H) => H.content.toLowerCase().includes(L)
        )
      ).slice().sort((M, H) => H.updatedAt.localeCompare(M.updatedAt));
    }), U = () => t("localAi.now"), q = () => {
      const L = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: L,
        updatedAt: L,
        updatedAtLabel: U(),
        messages: []
      };
    }, V = () => {
      const L = f.value;
      return L ? L.scrollHeight - L.scrollTop - L.clientHeight <= LS : !0;
    }, we = () => {
      const L = V();
      d.value = L, m.value = !L;
    }, Fe = () => {
      we();
    }, pe = async (L = {}) => {
      await st();
      const M = f.value;
      !M || !L.force && !d.value || (M.scrollTop = M.scrollHeight, we());
    }, ke = () => {
      d.value = !0, pe({ force: !0 });
    }, G = async () => {
      try {
        b.value = await Gd(), g.value = b.value.modelPath ?? "", h.value = await Kd(b.value), F.value || (u.value = !1);
      } catch (L) {
        dn.warn("[LocalAI] refresh chat config failed", L);
      }
    }, We = async () => {
      i.value = !0;
      try {
        T.value = await qd();
      } catch (L) {
        dn.warn("[LocalAI] refresh chat status failed", L);
      } finally {
        i.value = !1;
      }
    }, Te = async () => {
      try {
        const L = await zk();
        r.value = L.map((M) => ({
          id: M.id,
          title: M.title,
          createdAt: M.createdAt,
          updatedAt: M.updatedAt,
          updatedAtLabel: new Date(M.updatedAt).toLocaleString(),
          messages: M.turns.map((H) => ({
            id: H.id,
            role: H.role,
            content: H.content,
            createdAt: H.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (L) {
        dn.warn("[LocalAI] refresh histories failed", L);
      }
    }, et = async () => {
      await Promise.all([G(), We(), Te()]);
    }, ue = async () => {
      const L = D.value;
      L && await Bk({
        id: L.id,
        title: L.title,
        createdAt: L.createdAt,
        updatedAt: L.updatedAt,
        turns: L.messages.map((M) => ({
          id: M.id,
          role: M.role,
          content: M.content,
          createdAt: M.createdAt
        }))
      });
    }, ot = () => {
      const L = q();
      r.value.unshift(L), o.value = L.id, a.value = "";
    }, ht = () => {
      D.value || ot();
    }, Ge = (L) => {
      o.value = L, d.value = !0, pe({ force: !0 });
    }, xt = async (L) => {
      r.value = r.value.filter((M) => M.id !== L), await Vk(L), o.value === L && (o.value = r.value[0]?.id ?? "");
    }, gt = async () => {
      if (!(!b.value || !g.value)) {
        b.value.modelPath = g.value;
        try {
          b.value = await aa(b.value), T.value?.running && (T.value = await Yd()), $t.msg(t("localAi.modelChanged"));
        } catch (L) {
          $t.msg(`${t("localAi.configSaveFailed")}: ${L}`, "error");
        }
      }
    }, vt = (L) => {
      const M = v.get(L);
      if (M) return M;
      const H = _T(ze.parse(L, { async: !1 }));
      if (v.set(L, H), v.size > 80) {
        const me = v.keys().next().value;
        typeof me == "string" && v.delete(me);
      }
      return H;
    }, bt = (L) => {
      const M = L.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!M || M.index === void 0)
        return { reasoning: "", answer: L };
      const H = L.slice(0, M.index).trim(), me = M[0], Ee = L.slice(M.index + me.length).trim();
      return {
        reasoning: (M[1] ?? "").trim(),
        answer: [H, Ee].filter(Boolean).join(`

`)
      };
    }, Xe = (L) => bt(L).reasoning, ut = (L) => bt(L).answer, w = (L) => !!ut(L.content), A = (L) => !!(L.streaming && L.allowThinking && L.reasoningStartedAt && !L.reasoningEndedAt && !w(L)), z = (L) => {
      if (!L.reasoningStartedAt) return "0.00";
      const M = L.reasoningEndedAt ?? (L.streaming ? E.value : Date.now());
      return Math.max(0, (M - L.reasoningStartedAt) / 1e3).toFixed(2);
    }, J = (L) => !L.reasoningStartedAt && L.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: z(L)
    }), Ae = (L) => new Date(
      L.createdAt || D.value?.updatedAt || Date.now()
    ), de = (L) => Ae(L).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), k = (L) => L.streaming ? A(L) ? t("localAi.thinking") : t("localAi.generating") : de(L), $ = (L) => L.allowThinking && !L.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), be = (L, M) => {
      L.allowThinking && (M.includes("<think>") && !L.reasoningStartedAt && (L.reasoningStartedAt = Date.now()), M.includes("</think>") && !L.reasoningEndedAt && (L.reasoningEndedAt = Date.now()));
    }, Ce = (L) => {
      const M = L.trim();
      if (!M) return 0;
      const H = (M.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Ie = (M.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((Oe, Qe) => /^[A-Za-z0-9_]+$/.test(Qe) ? Oe + Math.max(1, Math.ceil(Qe.length / 4)) : Oe + 1, 0);
      return Math.max(1, Math.ceil(H + Ie));
    }, Ve = (L) => Ce(
      L.map((M) => `${M.role}: ${M.content}`).join(`
`)
    ), St = (L, M) => {
      const H = Math.max(240, M * 4);
      return L.length <= H ? L : `${t("localAi.previousAnswerTail")}

${L.slice(-H)}`;
    }, Ke = (L, M) => {
      const H = [];
      let me = 0;
      for (let Ee = L.length - 1; Ee >= 0; Ee -= 1) {
        const Ie = L[Ee], Oe = Ve([Ie]);
        if (me + Oe <= M || H.length === 0) {
          H.unshift(Ie), me += Oe;
          continue;
        }
        const Qe = M - me;
        if (Ie.role !== "assistant" || Qe < os)
          continue;
        let Et = Qe, Re = {
          ...Ie,
          content: St(Ie.content, Et)
        }, R = Ve([Re]);
        for (; R > Qe && Et > os; )
          Et = Math.max(
            os,
            Math.floor(Et * 0.7)
          ), Re = {
            ...Ie,
            content: St(Ie.content, Et)
          }, R = Ve([Re]);
        me + R <= M && (H.unshift(Re), me += R);
      }
      return H;
    }, ln = () => Ke(
      Z.value.filter((L) => !L.streaming).map((L) => ({
        role: L.role,
        content: L.content
      })),
      ve.value
    ), qt = (L) => {
      const M = E.value, H = Z.value.findIndex(
        (Re) => Re.id === L.id
      ), me = L.stats?.promptTokens ?? L.promptTokens ?? Ce(
        Z.value.slice(0, Math.max(0, H)).map((Re) => Re.content).join(`
`)
      ), Ee = L.stats?.completionTokens ?? Ce(L.content), Ie = L.stats?.totalTokens ?? me + Ee, Oe = he.value, Qe = Math.max(
        0,
        (L.stats?.generationTimeMs ?? L.elapsedMs ?? M - Ae(L).getTime()) / 1e3
      ), Et = L.stats?.tokensPerSecond ?? (Qe > 0 ? Ee / Qe : 0);
      return {
        context: Ie,
        contextMax: Oe,
        contextPercent: Math.min(100, Math.round(Ie / Oe * 100)),
        output: Ee,
        outputMax: (b.value?.maxTokens ?? 0) > 0 ? String(b.value?.maxTokens) : "∞",
        seconds: Qe.toFixed(1),
        speed: Et.toFixed(1)
      };
    }, yr = (L) => L.repetitionStopped ? t("localAi.repetitionStopped") : L.interrupted ? t("localAi.streamInterrupted") : L.stopped ? t("localAi.generationStopped") : L.stats?.totalTokens && L.stats.totalTokens >= he.value - 8 ? t("localAi.contextLimitReached") : L.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", Bn = (L) => {
      const M = String(L);
      return /exceeds the available context size|exceed_context_size/i.test(M) ? t("localAi.contextExceeded") : M;
    }, _r = (L) => {
      const M = L.replace(/\s+/g, " ").trim();
      if (M.length < 360) return !1;
      const me = M.slice(-1200).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Oe) => Oe.toLowerCase()) ?? [];
      if (me.length < 72) return !1;
      const Ee = me.slice(-80), Ie = /* @__PURE__ */ new Map();
      for (const Oe of Ee) Ie.set(Oe, (Ie.get(Oe) ?? 0) + 1);
      if ([...Ie.values()].some((Oe) => Oe >= 28)) return !0;
      for (let Oe = 1; Oe <= 4; Oe += 1) {
        const Qe = me.slice(-Oe).join("\0");
        let Et = 1;
        for (let Re = me.length - Oe * 2; Re >= 0 && me.slice(Re, Re + Oe).join("\0") === Qe; Re -= Oe)
          Et += 1;
        if (Et >= Math.max(10, Math.ceil(32 / Oe))) return !0;
      }
      return !1;
    }, _n = () => {
      S || (E.value = Date.now(), S = setInterval(() => {
        E.value = Date.now();
      }, 250));
    }, Yt = () => {
      S && (clearInterval(S), S = null, E.value = Date.now());
    }, Dt = async (L) => {
      const M = performance.now(), H = Zd();
      let me = "", Ee = null, Ie = null, Oe = !1, Qe = !1;
      p.value = H, l.value = !1;
      const Et = async () => {
        if (!me) {
          Ee = null, Ie?.(), Ie = null;
          return;
        }
        const se = l.value ? 240 : me.length > 240 ? 18 : 6;
        L.content += me.slice(0, se), me = me.slice(se), !Qe && !l.value && _r(L.content) && (Qe = !0, l.value = !0, L.repetitionStopped = !0, Qa(H).catch(
          (je) => dn.warn("[LocalAI] repetition stop failed", je)
        )), await pe(), Ee = window.setTimeout(() => {
          Et().catch(
            (je) => dn.warn("[LocalAI] stream pump failed", je)
          );
        }, 24);
      }, Re = (se) => {
        se && (be(L, se), me += se, Ee === null && (Ee = window.setTimeout(() => {
          Et().catch(
            (je) => dn.warn("[LocalAI] stream pump failed", je)
          );
        }, 12)));
      }, R = async () => {
        !me && Ee === null || await new Promise((se) => {
          Ie = se;
        });
      }, Q = await Fk(
        {
          messages: ln(),
          enableThinking: L.allowThinking === !0
        },
        (se) => {
          Oe = !0, Re(se);
        },
        {
          requestId: H,
          onStats: (se) => {
            L.stats = se, E.value = Date.now();
          }
        }
      ).catch(async (se) => {
        throw await R(), se;
      });
      if (!Oe)
        Re(Q.content);
      else if (!l.value) {
        const se = L.content.length + me.length;
        Q.content.length > se && Re(Q.content.slice(se));
      }
      await R(), !l.value && Q.content && L.content !== Q.content && (L.content = Q.content), L.streaming = !1, L.elapsedMs = performance.now() - M, L.stopped = l.value, L.interrupted = !1, L.error = "", E.value = Date.now(), p.value = null;
    }, wn = async () => {
      const L = p.value;
      if (!(!s.value || !L || l.value)) {
        l.value = !0;
        try {
          await Qa(L);
        } catch (M) {
          dn.warn("[LocalAI] cancel stream failed", M);
        }
      }
    }, ar = async () => {
      const L = a.value.trim();
      if (!L || s.value) return;
      ht();
      const M = (/* @__PURE__ */ new Date()).toISOString();
      D.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: L,
        createdAt: M
      });
      const H = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: u.value && F.value,
        promptTokens: Ve(ln())
      };
      D.value?.messages.push(H), a.value = "", s.value = !0, _n(), await pe({ force: !0 });
      const me = performance.now();
      try {
        await Dt(H), D.value && (D.value.title = D.value.title === t("localAi.newChatTitle") ? L.slice(0, 28) : D.value.title, D.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), D.value.updatedAtLabel = new Date(
          D.value.updatedAt
        ).toLocaleString(), await ue()), await We();
      } catch (Ee) {
        if (!l.value) {
          const Ie = Bn(Ee);
          $t.msg(`${t("localAi.chatFailed")}: ${Ie}`, "error"), H.error = Ie, H.interrupted = !!H.content.trim(), H.interrupted || (H.content = Ie), D.value && (D.value.title = D.value.title === t("localAi.newChatTitle") ? L.slice(0, 28) : D.value.title, D.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), D.value.updatedAtLabel = new Date(
            D.value.updatedAt
          ).toLocaleString(), await ue());
        }
        H.streaming = !1, H.elapsedMs = performance.now() - me;
      } finally {
        s.value = !1, p.value = null, Yt(), await pe();
      }
    }, sr = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, lr = (L) => {
      const M = new Date(L), H = /* @__PURE__ */ new Date(), me = H.getTime() - M.getTime(), Ee = 24 * 60 * 60 * 1e3;
      return M.toDateString() === H.toDateString() ? M.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : me < Ee * 2 ? t("localAi.yesterday") : me < Ee * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(me / Ee))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(me / (Ee * 7)))
      });
    }, wr = async (L) => {
      try {
        await navigator.clipboard.writeText(L.content), $t.msg(t("localAi.copied"));
      } catch (M) {
        $t.msg(`${t("common.operationFailed")}: ${M}`, "error");
      }
    }, kr = async (L) => {
      D.value && (D.value.messages = D.value.messages.filter(
        (M) => M.id !== L
      ), D.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), D.value.updatedAtLabel = new Date(
        D.value.updatedAt
      ).toLocaleString(), await ue());
    }, so = (L) => {
      a.value = L.content;
    }, kn = () => {
      $t.msg(t("localAi.feedbackSaved"));
    }, Mr = async (L) => {
      const M = D.value;
      if (!M || s.value) return;
      const H = M.messages.findIndex(
        (Oe) => Oe.id === L
      );
      if (!M.messages.slice(0, H).reverse().find((Oe) => Oe.role === "user")) return;
      M.messages = M.messages.slice(0, H);
      const Ee = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: u.value && F.value,
        promptTokens: Ve(ln())
      };
      M.messages.push(Ee), s.value = !0, _n(), await pe({ force: !0 });
      const Ie = performance.now();
      try {
        await Dt(Ee), M.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), M.updatedAtLabel = new Date(M.updatedAt).toLocaleString(), await ue();
      } catch (Oe) {
        if (!l.value) {
          const Qe = Bn(Oe);
          $t.msg(`${t("localAi.chatFailed")}: ${Qe}`, "error"), Ee.error = Qe, Ee.interrupted = !!Ee.content.trim(), Ee.interrupted || (Ee.content = Qe), M.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), M.updatedAtLabel = new Date(M.updatedAt).toLocaleString(), await ue();
        }
        Ee.streaming = !1, Ee.elapsedMs = performance.now() - Ie;
      } finally {
        s.value = !1, p.value = null, Yt(), await pe();
      }
    };
    return ct(async () => {
      await et(), I = setInterval(() => {
        We().catch(
          (L) => dn.warn("[LocalAI] status timer failed", L)
        );
      }, 8e3);
    }), _e(F, (L) => {
      L || (u.value = !1);
    }), wa(() => {
      I && clearInterval(I), p.value && Qa(p.value), Yt();
    }), (L, M) => (P(), K("main", wT, [
      y("aside", kT, [
        y("header", TT, [
          y("div", ST, [
            y(
              "h2",
              null,
              B(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            y(
              "p",
              null,
              B(c(t)("localAi.chatPrivacySubtitle")),
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
          yt(y("input", {
            "onUpdate:modelValue": M[0] || (M[0] = (H) => Gr(n) ? n.value = H : null),
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
              B(c(t)("localAi.recent")),
              1
              /* TEXT */
            ),
            y("div", IT, [
              y("button", {
                class: "icon-action-btn icon-action-btn--primary",
                type: "button",
                title: c(t)("localAi.newChat"),
                onClick: ot
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
                onClick: et
              }, [
                N(c($l), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, RT)
            ])
          ]),
          c(X).length ? (P(), K("div", PT, [
            (P(!0), K(
              Ct,
              null,
              Er(c(X), (H) => (P(), K("div", {
                key: H.id,
                class: Y([
                  "chat-list-item",
                  c(o) === H.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (me) => Ge(H.id),
                onKeydown: nn(tt((me) => Ge(H.id), ["prevent"]), ["enter"])
              }, [
                N(c(xf), {
                  theme: "outline",
                  size: "16"
                }),
                y(
                  "span",
                  $T,
                  B(H.title),
                  1
                  /* TEXT */
                ),
                y(
                  "span",
                  MT,
                  B(lr(H.updatedAt)),
                  1
                  /* TEXT */
                ),
                y("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: tt((me) => xt(H.id), ["stop"])
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
            B(c(t)("common.empty")),
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
                B(c(D)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              y(
                "span",
                {
                  class: Y([
                    "status-pill",
                    c(T)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  M[4] || (M[4] = y(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Xt(
                    " " + B(c(O)),
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
              B(c(T)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          y("div", HT, [
            N(c(Un), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: sr
            }, {
              default: le(() => [
                N(c(as), {
                  theme: "outline",
                  size: "16"
                }),
                y(
                  "span",
                  null,
                  B(c(t)("localAi.settings")),
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
            onScroll: Fe
          },
          [
            y("div", WT, [
              y(
                "span",
                null,
                B(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(Z).length ? ee("v-if", !0) : (P(), K("div", GT, [
              N(c(Ml), {
                theme: "outline",
                size: "28"
              }),
              y(
                "div",
                KT,
                B(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              y(
                "div",
                qT,
                B(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (P(!0), K(
              Ct,
              null,
              Er(c(Z), (H) => (P(), K(
                "article",
                {
                  key: H.id,
                  class: Y(["message-row", `message-row--${H.role}`])
                },
                [
                  y("div", YT, [
                    H.role === "assistant" ? (P(), ce(c(Ml), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (P(), K(
                      "span",
                      ZT,
                      B(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  y("div", XT, [
                    H.role === "user" ? (P(), K("div", QT, [
                      y(
                        "div",
                        null,
                        B(H.content),
                        1
                        /* TEXT */
                      ),
                      y(
                        "time",
                        null,
                        B(de(H)),
                        1
                        /* TEXT */
                      )
                    ])) : (P(), K(
                      Ct,
                      { key: 1 },
                      [
                        y("div", JT, [
                          y(
                            "span",
                            null,
                            B(c(fe)),
                            1
                            /* TEXT */
                          ),
                          y(
                            "small",
                            null,
                            B(k(H)),
                            1
                            /* TEXT */
                          )
                        ]),
                        y(
                          "div",
                          {
                            class: Y(["assistant-card", { "assistant-card--streaming": H.streaming }])
                          },
                          [
                            H.content ? (P(), K("div", eS, [
                              H.allowThinking && Xe(H.content) ? (P(), K("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: H.streaming && A(H)
                              }, [
                                y("summary", null, [
                                  y("span", nS, [
                                    N(c(Rl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    Xt(
                                      " " + B(J(H)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  H.streaming ? (P(), K(
                                    "small",
                                    rS,
                                    B(A(H) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                    1
                                    /* TEXT */
                                  )) : ee("v-if", !0)
                                ]),
                                y("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: vt(Xe(H.content))
                                }, null, 8, oS)
                              ], 8, tS)) : ee("v-if", !0),
                              ut(H.content) ? (P(), K("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: vt(ut(H.content))
                              }, null, 8, aS)) : ee("v-if", !0)
                            ])) : (P(), K(
                              "div",
                              sS,
                              B($(H)),
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
                            " Context: " + B(qt(H).context) + "/" + B(qt(H).contextMax) + " (" + B(qt(H).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            " Output: " + B(qt(H).output) + "/" + B(qt(H).outputMax),
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            B(qt(H).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            B(qt(H).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : ee("v-if", !0),
                        yr(H) ? (P(), K(
                          "div",
                          iS,
                          B(yr(H)),
                          1
                          /* TEXT */
                        )) : ee("v-if", !0),
                        H.streaming ? ee("v-if", !0) : (P(), K("div", cS, [
                          y("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (me) => wr(H)
                          }, [
                            N(c(Cf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, uS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (me) => Mr(H.id)
                          }, [
                            N(c($l), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, dS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: kn
                          }, [
                            N(c(If), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, fS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: kn
                          }, [
                            N(c(Of), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, pS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (me) => so(H)
                          }, [
                            N(c(Lf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, mS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (me) => kr(H.id)
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
          onClick: ke
        }, [
          N(c(Nl), {
            theme: "outline",
            size: "15"
          }),
          y(
            "span",
            null,
            B(c(t)("localAi.jumpToLatest")),
            1
            /* TEXT */
          )
        ], 8, gS)) : ee("v-if", !0),
        y(
          "form",
          {
            class: "chat-input-card",
            onSubmit: tt(ar, ["prevent"])
          },
          [
            yt(y("textarea", {
              "onUpdate:modelValue": M[1] || (M[1] = (H) => Gr(a) ? a.value = H : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: nn(tt(ar, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, vS), [
              [To, c(a)]
            ]),
            y("div", bS, [
              y("div", yS, [
                y("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: sr
                }, [
                  N(c(as), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, _S),
                c(F) ? (P(), K("button", {
                  key: 0,
                  class: Y([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(u) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(u) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(u),
                  onClick: M[2] || (M[2] = (H) => u.value = !c(u))
                }, [
                  N(c(Rl), {
                    theme: "outline",
                    size: "15"
                  }),
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.reasoningTitle")),
                    1
                    /* TEXT */
                  )
                ], 10, wS)) : ee("v-if", !0),
                y("label", kS, [
                  yt(y("select", {
                    "onUpdate:modelValue": M[3] || (M[3] = (H) => Gr(g) ? g.value = H : null),
                    disabled: c(s) || !c(re).length,
                    onChange: gt
                  }, [
                    (P(!0), K(
                      Ct,
                      null,
                      Er(c(re), (H) => (P(), K("option", {
                        key: H,
                        value: H
                      }, B(ne(H)), 9, SS))),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    c(re).length ? ee("v-if", !0) : (P(), K(
                      "option",
                      ES,
                      B(c(fe)),
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
                M[5] || (M[5] = y(
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
                  onClick: wn
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
}), RS = /* @__PURE__ */ Ys(xS, [["__scopeId", "data-v-c1100ed2"]]), PS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RS
}, Symbol.toStringTag, { value: "Module" }));
async function jc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await It("plugin:dialog|open", { options: e });
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
    const p = x(() => !!a.value?.selectedModelPath), b = x({
      get: () => n.value?.modelPath ?? "",
      set: (q) => {
        n.value && (n.value.modelPath = q || void 0);
      }
    }), h = x({
      get: () => n.value?.mmprojPath ?? "",
      set: (q) => {
        n.value && (n.value.mmprojPath = q || void 0);
      }
    }), g = x(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), T = x(
      () => p.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), f = x(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), E = (q) => q.split(/[\\/]+/).pop() ?? q, I = x(() => {
      const V = E(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return V ? Number(V[1]) : 4;
    }), S = x(() => {
      const q = n.value;
      if (!q)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const V = Math.max(1.4, I.value * 0.92), we = Math.min(1, Math.max(0, q.gpuLayers) / 32), Fe = q.ctxSize / 8192 * 0.38 * (q.kvOffload ? 1 : 0.12), pe = q.batchSize / 512 * 0.18, ke = V * we + Fe + pe, G = V * (1 - we) + q.ctxSize / 8192 * 0.22, We = ke + G, Te = q.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : q.ctxSize >= 32768 || q.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: ke.toFixed(2),
        totalGb: We.toFixed(2),
        bottleneck: Te
      };
    }), v = (q) => t(`localAi.paramHints.${q}`), C = async () => {
      r.value = await $k();
    }, O = async () => {
      o.value = await qd();
    }, D = async () => {
      n.value && (a.value = await Kd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, Z = async () => {
      s.value = !0;
      try {
        n.value = await Gd(), await Promise.all([C(), D(), O()]);
      } catch (q) {
        dn.error("[LocalAI] refresh settings failed", q), $t.msg(`${t("localAi.refreshFailed")}: ${q}`, "error");
      } finally {
        s.value = !1;
      }
    }, ne = async () => {
      if (n.value)
        try {
          await aa(n.value);
        } catch (q) {
          dn.warn("[LocalAI] autosave failed", q);
        }
    }, fe = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await aa(n.value), await Promise.all([C(), D(), O()]), $t.msg(t("localAi.configSaved"));
        } catch (q) {
          $t.msg(`${t("localAi.configSaveFailed")}: ${q}`, "error");
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
    }, he = async () => {
      const q = await jc({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !q || Array.isArray(q) || !n.value || (n.value.runtimePath = q, await ne(), await C());
    }, ve = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await aa(n.value), o.value = await Mk(n.value), $t.msg(t("localAi.serviceStarted"));
        } catch (q) {
          $t.msg(`${t("localAi.serviceStartFailed")}: ${q}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, F = async () => {
      u.value = !0;
      try {
        await fe(), o.value = await Yd(), $t.msg(t("localAi.serviceRestarted"));
      } catch (q) {
        $t.msg(`${t("localAi.serviceRestartFailed")}: ${q}`, "error");
      } finally {
        u.value = !1;
      }
    }, X = async () => {
      d.value = !0;
      try {
        await Dk(), await O(), $t.msg(t("localAi.serviceStoppedMsg"));
      } catch (q) {
        $t.msg(`${t("localAi.serviceStopFailed")}: ${q}`, "error");
      } finally {
        d.value = !1;
      }
    }, U = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return ct(async () => {
      await Z(), m = setInterval(() => {
        O().catch(
          (q) => dn.warn("[LocalAI] status refresh failed", q)
        );
      }, 5e3);
    }), wa(() => {
      m && clearInterval(m);
    }), (q, V) => {
      const we = Yw, Fe = qw, pe = Rw, ke = nk;
      return P(), K("div", NS, [
        y("header", $S, [
          y("div", null, [
            y(
              "h3",
              MS,
              B(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            y(
              "p",
              DS,
              B(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          y("div", FS, [
            N(c(Un), {
              size: "small",
              plain: "",
              onClick: U
            }, {
              default: le(() => [
                Xt(
                  B(c(t)("localAi.openChat")),
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
              onClick: Z
            }, {
              default: le(() => [
                Xt(
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
        c(n) ? (P(), K("main", zS, [
          y("aside", BS, [
            y("div", VS, [
              y(
                "div",
                {
                  class: Y(["status-item", { ready: c(r)?.available }])
                },
                [
                  V[25] || (V[25] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    B(c(g)),
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
                  class: Y(["status-item", { ready: c(p) }])
                },
                [
                  V[26] || (V[26] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    B(c(T)),
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
                  class: Y(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  V[27] || (V[27] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    B(c(f)),
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
                  B(c(t)("localAi.estimatedMemory")),
                  1
                  /* TEXT */
                ),
                y(
                  "small",
                  null,
                  B(c(t)("localAi.estimateBeta")),
                  1
                  /* TEXT */
                )
              ]),
              y("div", HS, [
                y("div", null, [
                  V[28] || (V[28] = y(
                    "span",
                    null,
                    "GPU",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "b",
                    null,
                    B(c(S).gpuGb) + " GB",
                    1
                    /* TEXT */
                  )
                ]),
                y("div", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.total")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "b",
                    null,
                    B(c(S).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", WS, [
                y(
                  "span",
                  null,
                  B(c(t)("localAi.bottleneck")),
                  1
                  /* TEXT */
                ),
                y(
                  "b",
                  null,
                  B(c(S).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            y("section", GS, [
              y(
                "div",
                KS,
                B(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              y(
                "div",
                qS,
                B(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              y("div", YS, [
                N(c(Un), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: ve
                }, {
                  default: le(() => [
                    Xt(
                      B(c(t)("localAi.startService")),
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
                  onClick: F
                }, {
                  default: le(() => [
                    Xt(
                      B(c(t)("localAi.restartService")),
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
                  onClick: X
                }, {
                  default: le(() => [
                    Xt(
                      B(c(t)("localAi.stopService")),
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
                B(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            y("section", XS, [
              y(
                "div",
                QS,
                B(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              y(
                "div",
                JS,
                B(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              y("div", e2, [
                y("div", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "b",
                    null,
                    B(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "b",
                    null,
                    B(c(p) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  y(
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
          y("section", t2, [
            y("div", n2, [
              y("div", r2, [
                y("div", null, [
                  y(
                    "h4",
                    null,
                    B(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    B(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", o2, [
                y("label", {
                  class: "field-row",
                  title: v("modelDir")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  y("div", s2, [
                    yt(y(
                      "input",
                      {
                        "onUpdate:modelValue": V[0] || (V[0] = (G) => c(n).modelDir = G),
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
                      default: le(() => [
                        Xt(
                          B(c(t)("common.browse")),
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
                  title: v("mainModel")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  N(Fe, {
                    modelValue: c(b),
                    "onUpdate:modelValue": V[1] || (V[1] = (G) => Gr(b) ? b.value = G : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ne
                  }, {
                    default: le(() => [
                      (P(!0), K(
                        Ct,
                        null,
                        Er(c(a)?.mainModels ?? [], (G) => (P(), ce(we, {
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
                  title: v("mmprojModel")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  N(Fe, {
                    modelValue: c(h),
                    "onUpdate:modelValue": V[2] || (V[2] = (G) => Gr(h) ? h.value = G : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ne
                  }, {
                    default: le(() => [
                      (P(!0), K(
                        Ct,
                        null,
                        Er(c(a)?.mmprojModels ?? [], (G) => (P(), ce(we, {
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
                  title: v("runtimePath")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  y("div", u2, [
                    yt(y("input", {
                      "onUpdate:modelValue": V[3] || (V[3] = (G) => c(n).runtimePath = G),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, d2), [
                      [To, c(n).runtimePath]
                    ]),
                    N(c(Un), {
                      size: "small",
                      plain: "",
                      onClick: he
                    }, {
                      default: le(() => [
                        Xt(
                          B(c(t)("common.browse")),
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
                    B(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    B(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", m2, [
                y("label", {
                  class: "number-field",
                  title: v("ctxSize")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": V[4] || (V[4] = (G) => c(n).ctxSize = G),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, h2),
                y("label", {
                  class: "number-field",
                  title: v("gpuLayers")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": V[5] || (V[5] = (G) => c(n).gpuLayers = G),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, g2),
                y("label", {
                  class: "number-field",
                  title: v("threads")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": V[6] || (V[6] = (G) => c(n).threads = G),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, v2),
                y("label", {
                  class: "number-field",
                  title: v("batchSize")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": V[7] || (V[7] = (G) => c(n).batchSize = G),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, b2),
                y("label", {
                  class: "number-field",
                  title: v("ubatchSize")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": V[8] || (V[8] = (G) => c(n).ubatchSize = G),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, y2),
                y("label", {
                  class: "number-field",
                  title: v("mainGpu")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": V[9] || (V[9] = (G) => c(n).mainGpu = G),
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
                    B(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    B(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", T2, [
                y("label", {
                  title: v("flashAttn")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": V[10] || (V[10] = (G) => c(n).flashAttn = G)
                  }, null, 8, ["modelValue"])
                ], 8, S2),
                y("label", {
                  title: v("kvOffload")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": V[11] || (V[11] = (G) => c(n).kvOffload = G)
                  }, null, 8, ["modelValue"])
                ], 8, E2),
                y("label", {
                  title: v("mmap")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": V[12] || (V[12] = (G) => c(n).mmap = G)
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
                    B(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    B(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", L2, [
                y("label", {
                  title: v("autoStart")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": V[13] || (V[13] = (G) => c(n).autoStartOnRequest = G)
                  }, null, 8, ["modelValue"])
                ], 8, I2),
                y("label", {
                  title: v("keepAlive")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": V[14] || (V[14] = (G) => c(n).keepAlive = G)
                  }, null, 8, ["modelValue"])
                ], 8, x2),
                y("label", {
                  class: "number-field",
                  title: v("idleTimeout")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": V[15] || (V[15] = (G) => c(n).idleTimeoutMinutes = G),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, R2),
                y("label", {
                  class: "number-field",
                  title: v("requestTimeout")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": V[16] || (V[16] = (G) => c(n).requestTimeoutSecs = G),
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
                    B(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    B(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", M2, [
                y("label", {
                  class: "number-field",
                  title: v("temperature")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": V[17] || (V[17] = (G) => c(n).temperature = G),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, D2),
                y("label", {
                  class: "number-field",
                  title: v("topP")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": V[18] || (V[18] = (G) => c(n).topP = G),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, F2),
                y("label", {
                  class: "number-field",
                  title: v("topK")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": V[19] || (V[19] = (G) => c(n).topK = G),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, z2),
                y("label", {
                  class: "number-field",
                  title: v("minP")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": V[20] || (V[20] = (G) => c(n).minP = G),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, B2),
                y("label", {
                  class: "number-field",
                  title: v("repeatPenalty")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": V[21] || (V[21] = (G) => c(n).repeatPenalty = G),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, V2),
                y("label", {
                  class: "number-field",
                  title: v("repeatLastN")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": V[22] || (V[22] = (G) => c(n).repeatLastN = G),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, j2),
                y("label", {
                  class: "number-field",
                  title: v("maxTokens")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": V[23] || (V[23] = (G) => c(n).maxTokens = G),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, U2),
                y("label", {
                  class: "number-field",
                  title: v("port")
                }, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  N(pe, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": V[24] || (V[24] = (G) => c(n).port = G),
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
                default: le(() => [
                  Xt(
                    B(c(t)("common.save")),
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
              }, B(c(o).commandLine), 9, G2)) : ee("v-if", !0)
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
