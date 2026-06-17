var ef = Object.defineProperty;
var tf = (e, t, n) => t in e ? ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Be = (e, t, n) => tf(e, typeof t != "symbol" ? t + "" : t, n);
import * as ja from "vue";
import { inject as ze, createVNode as N, defineAsyncComponent as nf, ref as U, shallowRef as vr, computed as x, watch as we, onMounted as it, onUnmounted as wa, defineComponent as oe, h as jc, Text as Uc, Fragment as Ot, createElementBlock as G, openBlock as R, normalizeClass as q, createCommentVNode as ee, renderSlot as _e, createElementVNode as y, getCurrentInstance as Bt, unref as c, watchEffect as Hc, readonly as Is, getCurrentScope as rf, onScopeDispose as of, nextTick as at, isRef as Kr, warn as af, provide as Mn, mergeProps as qr, toRef as Yn, useAttrs as sf, useSlots as lf, normalizeStyle as Lt, createBlock as ie, withCtx as se, resolveDynamicComponent as Ft, withModifiers as Qe, toDisplayString as F, onBeforeUnmount as zn, Transition as ao, withDirectives as bt, vShow as rr, reactive as Lr, onActivated as cf, onUpdated as Wc, cloneVNode as uf, Comment as df, Teleport as ff, onBeforeMount as pf, onDeactivated as mf, createTextVNode as Zt, withKeys as tn, createSlots as hf, toRaw as gf, toRefs as xs, resolveComponent as Er, resolveDirective as vf, toHandlerKey as bf, renderList as Cr, vModelText as To, shallowReactive as yf, isVNode as So, render as sa, vModelSelect as _f } from "vue";
var wf = {
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
function kf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Tf(e, t, n) {
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
var Sf = Symbol("icon-context");
function jt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = kf(), i = ze(Sf, wf);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, m = a.strokeLinejoin, p = a.theme, b = a.fill, h = a.spin, g = Tf(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: p,
          fill: b
        }, i), S = [i.prefix + "-icon"];
        return S.push(i.prefix + "-icon-" + e), t && i.rtl && S.push(i.prefix + "-icon-rtl"), h && S.push(i.prefix + "-icon-spin"), N("span", {
          class: S.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const Ef = jt("add", !1, function(e) {
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
}), xl = jt("brain", !0, function(e) {
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
}), Af = jt("copy", !0, function(e) {
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
}), Rl = jt("delete", !1, function(e) {
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
}), Cf = jt("dislike", !0, function(e) {
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
}), Pl = jt("down", !1, function(e) {
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
}), Of = jt("edit", !0, function(e) {
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
}), Lf = jt("like", !1, function(e) {
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
}), If = jt("message", !0, function(e) {
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
}), Nl = jt("refresh", !0, function(e) {
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
}), $l = jt("robot", !0, function(e) {
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
}), xf = jt("search", !0, function(e) {
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
}), Rf = jt("send", !0, function(e) {
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
}), os = jt("setting-two", !1, function(e) {
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
}), Pf = jt("square", !1, function(e) {
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
}), Z2 = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => xS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: os,
    component: nf(() => Promise.resolve().then(() => K2))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Nf(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ml = typeof window < "u", Pr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), $f = (e, t, n) => Mf({ l: e, k: t, s: n }), Mf = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Tt = (e) => typeof e == "number" && isFinite(e), Df = (e) => Rs(e) === "[object Date]", la = (e) => Rs(e) === "[object RegExp]", ka = (e) => xe(e) && Object.keys(e).length === 0, It = Object.assign, Ff = Object.create, Ve = (e = null) => Ff(e);
let Dl;
const ea = () => Dl || (Dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ve());
function Fl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function zl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function zf(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${zl(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${zl(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Bf = Object.prototype.hasOwnProperty;
function hn(e, t) {
  return Bf.call(e, t);
}
const lt = Array.isArray, Je = (e) => typeof e == "function", ae = (e) => typeof e == "string", st = (e) => typeof e == "boolean", Re = (e) => e !== null && typeof e == "object", Vf = (e) => Re(e) && Je(e.then) && Je(e.catch), Gc = Object.prototype.toString, Rs = (e) => Gc.call(e), xe = (e) => Rs(e) === "[object Object]", jf = (e) => e == null ? "" : lt(e) || xe(e) && e.toString === Gc ? JSON.stringify(e, null, 2) : String(e);
function Ps(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const jo = (e) => !Re(e) || lt(e);
function ta(e, t) {
  if (jo(e) || jo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Re(r[a]) && !Re(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Ve()), jo(o[a]) || jo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Uf(e, t, n) {
  return { line: e, column: t, offset: n };
}
function as(e, t, n) {
  return { start: e, end: t };
}
const $e = {
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
}, Hf = 17;
function Ta(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Wf(e) {
  throw e;
}
const En = " ", Gf = "\r", Nt = `
`, Kf = "\u2028", qf = "\u2029";
function Yf(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Gf && t[O + 1] === Nt, i = (O) => t[O] === Nt, l = (O) => t[O] === qf, u = (O) => t[O] === Kf, d = (O) => s(O) || i(O) || l(O) || u(O), m = () => n, p = () => r, b = () => o, h = () => a, g = (O) => s(O) || l(O) || u(O) ? Nt : t[O], S = () => g(n), f = () => g(n + a);
  function E() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function L() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function T() {
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
    currentChar: S,
    currentPeek: f,
    next: E,
    peek: L,
    reset: T,
    resetPeek: v,
    skipToPeek: C
  };
}
const Hn = void 0, Zf = ".", Bl = "'", Xf = "tokenizer";
function Qf(e, t = {}) {
  const n = t.location !== !1, r = Yf(e), o = () => r.index(), a = () => Uf(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function m(w, A, D, ...Q) {
    const Ae = u();
    if (A.column += D, A.offset += D, d) {
      const ce = n ? as(Ae.startLoc, A) : null, k = Ta(w, ce, {
        domain: Xf,
        args: Q
      });
      d(k);
    }
  }
  function p(w, A, D) {
    w.endLoc = a(), w.currentType = A;
    const Q = { type: A };
    return n && (Q.loc = as(w.startLoc, w.endLoc)), D != null && (Q.value = D), Q;
  }
  const b = (w) => p(
    w,
    13
    /* TokenTypes.EOF */
  );
  function h(w, A) {
    return w.currentChar() === A ? (w.next(), A) : (m($e.EXPECTED_TOKEN, a(), 0, A), "");
  }
  function g(w) {
    let A = "";
    for (; w.currentPeek() === En || w.currentPeek() === Nt; )
      A += w.currentPeek(), w.peek();
    return A;
  }
  function S(w) {
    const A = g(w);
    return w.skipToPeek(), A;
  }
  function f(w) {
    if (w === Hn)
      return !1;
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A === 95;
  }
  function E(w) {
    if (w === Hn)
      return !1;
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function L(w, A) {
    const { currentType: D } = A;
    if (D !== 2)
      return !1;
    g(w);
    const Q = f(w.currentPeek());
    return w.resetPeek(), Q;
  }
  function T(w, A) {
    const { currentType: D } = A;
    if (D !== 2)
      return !1;
    g(w);
    const Q = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), Ae = E(Q);
    return w.resetPeek(), Ae;
  }
  function v(w, A) {
    const { currentType: D } = A;
    if (D !== 2)
      return !1;
    g(w);
    const Q = w.currentPeek() === Bl;
    return w.resetPeek(), Q;
  }
  function C(w, A) {
    const { currentType: D } = A;
    if (D !== 7)
      return !1;
    g(w);
    const Q = w.currentPeek() === ".";
    return w.resetPeek(), Q;
  }
  function O(w, A) {
    const { currentType: D } = A;
    if (D !== 8)
      return !1;
    g(w);
    const Q = f(w.currentPeek());
    return w.resetPeek(), Q;
  }
  function M(w, A) {
    const { currentType: D } = A;
    if (!(D === 7 || D === 11))
      return !1;
    g(w);
    const Q = w.currentPeek() === ":";
    return w.resetPeek(), Q;
  }
  function Y(w, A) {
    const { currentType: D } = A;
    if (D !== 9)
      return !1;
    const Q = () => {
      const ce = w.currentPeek();
      return ce === "{" ? f(w.peek()) : ce === "@" || ce === "|" || ce === ":" || ce === "." || ce === En || !ce ? !1 : ce === Nt ? (w.peek(), Q()) : ue(w, !1);
    }, Ae = Q();
    return w.resetPeek(), Ae;
  }
  function ne(w) {
    g(w);
    const A = w.currentPeek() === "|";
    return w.resetPeek(), A;
  }
  function ue(w, A = !0) {
    const D = (Ae = !1, ce = "") => {
      const k = w.currentPeek();
      return k === "{" || k === "@" || !k ? Ae : k === "|" ? !(ce === En || ce === Nt) : k === En ? (w.peek(), D(!0, En)) : k === Nt ? (w.peek(), D(!0, Nt)) : !0;
    }, Q = D();
    return A && w.resetPeek(), Q;
  }
  function re(w, A) {
    const D = w.currentChar();
    return D === Hn ? Hn : A(D) ? (w.next(), D) : null;
  }
  function pe(w) {
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36;
  }
  function ve(w) {
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
  function X(w) {
    return re(w, B);
  }
  function j(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function K(w) {
    return re(w, j);
  }
  function z(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57 || // 0-9
    A >= 65 && A <= 70 || // A-F
    A >= 97 && A <= 102;
  }
  function me(w) {
    return re(w, z);
  }
  function De(w) {
    let A = "", D = "";
    for (; A = K(w); )
      D += A;
    return D;
  }
  function Te(w) {
    let A = "";
    for (; ; ) {
      const D = w.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D)
        break;
      if (D === En || D === Nt)
        if (ue(w))
          A += D, w.next();
        else {
          if (ne(w))
            break;
          A += D, w.next();
        }
      else
        A += D, w.next();
    }
    return A;
  }
  function ke(w) {
    S(w);
    let A = "", D = "";
    for (; A = X(w); )
      D += A;
    const Q = w.currentChar();
    if (Q && Q !== "}" && Q !== Hn && Q !== En && Q !== Nt && Q !== "　") {
      const Ae = ht(w);
      return m($e.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D + Ae), D + Ae;
    }
    return w.currentChar() === Hn && m($e.UNTERMINATED_CLOSING_BRACE, a(), 0), D;
  }
  function H(w) {
    S(w);
    let A = "";
    return w.currentChar() === "-" ? (w.next(), A += `-${De(w)}`) : A += De(w), w.currentChar() === Hn && m($e.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function je(w) {
    return w !== Bl && w !== Nt;
  }
  function ye(w) {
    S(w), h(w, "'");
    let A = "", D = "";
    for (; A = re(w, je); )
      A === "\\" ? D += Xe(w) : D += A;
    const Q = w.currentChar();
    return Q === Nt || Q === Hn ? (m($e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), Q === Nt && (w.next(), h(w, "'")), D) : (h(w, "'"), D);
  }
  function Xe(w) {
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
        return m($e.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, A), "";
    }
  }
  function de(w, A, D) {
    h(w, A);
    let Q = "";
    for (let Ae = 0; Ae < D; Ae++) {
      const ce = me(w);
      if (!ce) {
        m($e.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${A}${Q}${w.currentChar()}`);
        break;
      }
      Q += ce;
    }
    return `\\${A}${Q}`;
  }
  function tt(w) {
    return w !== "{" && w !== "}" && w !== En && w !== Nt;
  }
  function ht(w) {
    S(w);
    let A = "", D = "";
    for (; A = re(w, tt); )
      D += A;
    return D;
  }
  function qe(w) {
    let A = "", D = "";
    for (; A = ve(w); )
      D += A;
    return D;
  }
  function yt(w) {
    const A = (D) => {
      const Q = w.currentChar();
      return Q === "{" || Q === "@" || Q === "|" || Q === "(" || Q === ")" || !Q || Q === En ? D : (D += Q, w.next(), A(D));
    };
    return A("");
  }
  function ct(w) {
    S(w);
    const A = h(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return S(w), A;
  }
  function gt(w, A) {
    let D = null;
    switch (w.currentChar()) {
      case "{":
        return A.braceNest >= 1 && m($e.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), D = p(
          A,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), S(w), A.braceNest++, D;
      case "}":
        return A.braceNest > 0 && A.currentType === 2 && m($e.EMPTY_PLACEHOLDER, a(), 0), w.next(), D = p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), A.braceNest--, A.braceNest > 0 && S(w), A.inLinked && A.braceNest === 0 && (A.inLinked = !1), D;
      case "@":
        return A.braceNest > 0 && m($e.UNTERMINATED_CLOSING_BRACE, a(), 0), D = vt(w, A) || b(A), A.braceNest = 0, D;
      default: {
        let Ae = !0, ce = !0, k = !0;
        if (ne(w))
          return A.braceNest > 0 && m($e.UNTERMINATED_CLOSING_BRACE, a(), 0), D = p(A, 1, ct(w)), A.braceNest = 0, A.inLinked = !1, D;
        if (A.braceNest > 0 && (A.currentType === 4 || A.currentType === 5 || A.currentType === 6))
          return m($e.UNTERMINATED_CLOSING_BRACE, a(), 0), A.braceNest = 0, Ue(w, A);
        if (Ae = L(w, A))
          return D = p(A, 4, ke(w)), S(w), D;
        if (ce = T(w, A))
          return D = p(A, 5, H(w)), S(w), D;
        if (k = v(w, A))
          return D = p(A, 6, ye(w)), S(w), D;
        if (!Ae && !ce && !k)
          return D = p(A, 12, ht(w)), m($e.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D.value), S(w), D;
        break;
      }
    }
    return D;
  }
  function vt(w, A) {
    const { currentType: D } = A;
    let Q = null;
    const Ae = w.currentChar();
    switch ((D === 7 || D === 8 || D === 11 || D === 9) && (Ae === Nt || Ae === En) && m($e.INVALID_LINKED_FORMAT, a(), 0), Ae) {
      case "@":
        return w.next(), Q = p(
          A,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), A.inLinked = !0, Q;
      case ".":
        return S(w), w.next(), p(
          A,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return S(w), w.next(), p(
          A,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ne(w) ? (Q = p(A, 1, ct(w)), A.braceNest = 0, A.inLinked = !1, Q) : C(w, A) || M(w, A) ? (S(w), vt(w, A)) : O(w, A) ? (S(w), p(A, 11, qe(w))) : Y(w, A) ? (S(w), Ae === "{" ? gt(w, A) || Q : p(A, 10, yt(w))) : (D === 7 && m($e.INVALID_LINKED_FORMAT, a(), 0), A.braceNest = 0, A.inLinked = !1, Ue(w, A));
    }
  }
  function Ue(w, A) {
    let D = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (A.braceNest > 0)
      return gt(w, A) || b(A);
    if (A.inLinked)
      return vt(w, A) || b(A);
    switch (w.currentChar()) {
      case "{":
        return gt(w, A) || b(A);
      case "}":
        return m($e.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return vt(w, A) || b(A);
      default: {
        if (ne(w))
          return D = p(A, 1, ct(w)), A.braceNest = 0, A.inLinked = !1, D;
        if (ue(w))
          return p(A, 0, Te(w));
        break;
      }
    }
    return D;
  }
  function _t() {
    const { currentType: w, offset: A, startLoc: D, endLoc: Q } = l;
    return l.lastType = w, l.lastOffset = A, l.lastStartLoc = D, l.lastEndLoc = Q, l.offset = o(), l.startLoc = a(), r.currentChar() === Hn ? p(
      l,
      13
      /* TokenTypes.EOF */
    ) : Ue(r, l);
  }
  return {
    nextToken: _t,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Jf = "parser", ep = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function tp(e, t, n) {
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
function np(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, E, L, T, ...v) {
    const C = f.currentPosition();
    if (C.offset += T, C.column += T, n) {
      const O = t ? as(L, C) : null, M = Ta(E, O, {
        domain: Jf,
        args: v
      });
      n(M);
    }
  }
  function o(f, E, L) {
    const T = { type: f };
    return t && (T.start = E, T.end = E, T.loc = { start: L, end: L }), T;
  }
  function a(f, E, L, T) {
    t && (f.end = E, f.loc && (f.loc.end = L));
  }
  function s(f, E) {
    const L = f.context(), T = o(3, L.offset, L.startLoc);
    return T.value = E, a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function i(f, E) {
    const L = f.context(), { lastOffset: T, lastStartLoc: v } = L, C = o(5, T, v);
    return C.index = parseInt(E, 10), f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function l(f, E) {
    const L = f.context(), { lastOffset: T, lastStartLoc: v } = L, C = o(4, T, v);
    return C.key = E, f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function u(f, E) {
    const L = f.context(), { lastOffset: T, lastStartLoc: v } = L, C = o(9, T, v);
    return C.value = E.replace(ep, tp), f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function d(f) {
    const E = f.nextToken(), L = f.context(), { lastOffset: T, lastStartLoc: v } = L, C = o(8, T, v);
    return E.type !== 11 ? (r(f, $e.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), C.value = "", a(C, T, v), {
      nextConsumeToken: E,
      node: C
    }) : (E.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, An(E)), C.value = E.value || "", a(C, f.currentOffset(), f.currentPosition()), {
      node: C
    });
  }
  function m(f, E) {
    const L = f.context(), T = o(7, L.offset, L.startLoc);
    return T.value = E, a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function p(f) {
    const E = f.context(), L = o(6, E.offset, E.startLoc);
    let T = f.nextToken();
    if (T.type === 8) {
      const v = d(f);
      L.modifier = v.node, T = v.nextConsumeToken || f.nextToken();
    }
    switch (T.type !== 9 && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(T)), T = f.nextToken(), T.type === 2 && (T = f.nextToken()), T.type) {
      case 10:
        T.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(T)), L.key = m(f, T.value || "");
        break;
      case 4:
        T.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(T)), L.key = l(f, T.value || "");
        break;
      case 5:
        T.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(T)), L.key = i(f, T.value || "");
        break;
      case 6:
        T.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(T)), L.key = u(f, T.value || "");
        break;
      default: {
        r(f, $e.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const v = f.context(), C = o(7, v.offset, v.startLoc);
        return C.value = "", a(C, v.offset, v.startLoc), L.key = C, a(L, v.offset, v.startLoc), {
          nextConsumeToken: T,
          node: L
        };
      }
    }
    return a(L, f.currentOffset(), f.currentPosition()), {
      node: L
    };
  }
  function b(f) {
    const E = f.context(), L = E.currentType === 1 ? f.currentOffset() : E.offset, T = E.currentType === 1 ? E.endLoc : E.startLoc, v = o(2, L, T);
    v.items = [];
    let C = null;
    do {
      const Y = C || f.nextToken();
      switch (C = null, Y.type) {
        case 0:
          Y.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(Y)), v.items.push(s(f, Y.value || ""));
          break;
        case 5:
          Y.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(Y)), v.items.push(i(f, Y.value || ""));
          break;
        case 4:
          Y.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(Y)), v.items.push(l(f, Y.value || ""));
          break;
        case 6:
          Y.value == null && r(f, $e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(Y)), v.items.push(u(f, Y.value || ""));
          break;
        case 7: {
          const ne = p(f);
          v.items.push(ne.node), C = ne.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const O = E.currentType === 1 ? E.lastOffset : f.currentOffset(), M = E.currentType === 1 ? E.lastEndLoc : f.currentPosition();
    return a(v, O, M), v;
  }
  function h(f, E, L, T) {
    const v = f.context();
    let C = T.items.length === 0;
    const O = o(1, E, L);
    O.cases = [], O.cases.push(T);
    do {
      const M = b(f);
      C || (C = M.items.length === 0), O.cases.push(M);
    } while (v.currentType !== 13);
    return C && r(f, $e.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function g(f) {
    const E = f.context(), { offset: L, startLoc: T } = E, v = b(f);
    return E.currentType === 13 ? v : h(f, L, T, v);
  }
  function S(f) {
    const E = Qf(f, It({}, e)), L = E.context(), T = o(0, L.offset, L.startLoc);
    return t && T.loc && (T.loc.source = f), T.body = g(E), e.onCacheKey && (T.cacheKey = e.onCacheKey(f)), L.currentType !== 13 && r(E, $e.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, f[L.offset] || ""), a(T, E.currentOffset(), E.currentPosition()), T;
  }
  return { parse: S };
}
function An(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function rp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Vl(e, t) {
  for (let n = 0; n < e.length; n++)
    Ns(e[n], t);
}
function Ns(e, t) {
  switch (e.type) {
    case 1:
      Vl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Vl(e.items, t);
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
function op(e, t = {}) {
  const n = rp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ns(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function ap(e) {
  const t = e.body;
  return t.type === 2 ? jl(t) : t.cases.forEach((n) => jl(n)), e;
}
function jl(e) {
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
      e.static = Ps(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Hr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Hr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Hr(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Hr(n[r]);
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
      Hr(t.key), t.k = t.key, delete t.key, t.modifier && (Hr(t.modifier), t.m = t.modifier, delete t.modifier);
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
function sp(e, t) {
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
  function l(g, S) {
    s.code += g;
  }
  function u(g, S = !0) {
    const f = S ? r : "";
    l(o ? f + "  ".repeat(g) : f);
  }
  function d(g = !0) {
    const S = ++s.indentLevel;
    g && u(S);
  }
  function m(g = !0) {
    const S = --s.indentLevel;
    g && u(S);
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
function lp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Yr(e, t.key), t.modifier ? (e.push(", "), Yr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ip(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Yr(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function cp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Yr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function up(e, t) {
  t.body ? Yr(e, t.body) : e.push("null");
}
function Yr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      up(e, t);
      break;
    case 1:
      cp(e, t);
      break;
    case 2:
      ip(e, t);
      break;
    case 6:
      lp(e, t);
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
const dp = (e, t = {}) => {
  const n = ae(t.mode) ? t.mode : "normal", r = ae(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = sp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Ps(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), Yr(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fp(e, t = {}) {
  const n = It({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = np(n).parse(e);
  return r ? (a && ap(i), o && Hr(i), { ast: i, code: "" }) : (op(i, n), dp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function pp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ea().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Pn(e) {
  return Re(e) && $s(e) === 0 && (hn(e, "b") || hn(e, "body"));
}
const Kc = ["b", "body"];
function mp(e) {
  return _r(e, Kc);
}
const qc = ["c", "cases"];
function hp(e) {
  return _r(e, qc, []);
}
const Yc = ["s", "static"];
function gp(e) {
  return _r(e, Yc);
}
const Zc = ["i", "items"];
function vp(e) {
  return _r(e, Zc, []);
}
const Xc = ["t", "type"];
function $s(e) {
  return _r(e, Xc);
}
const Qc = ["v", "value"];
function Uo(e, t) {
  const n = _r(e, Qc);
  if (n != null)
    return n;
  throw Eo(t);
}
const Jc = ["m", "modifier"];
function bp(e) {
  return _r(e, Jc);
}
const eu = ["k", "key"];
function yp(e) {
  const t = _r(e, eu);
  if (t)
    return t;
  throw Eo(
    6
    /* NodeTypes.Linked */
  );
}
function _r(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (hn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const tu = [
  ...Kc,
  ...qc,
  ...Yc,
  ...Zc,
  ...eu,
  ...Jc,
  ...Qc,
  ...Xc
];
function Eo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Ua(e) {
  return (n) => _p(n, e);
}
function _p(e, t) {
  const n = mp(t);
  if (n == null)
    throw Eo(
      0
      /* NodeTypes.Resource */
    );
  if ($s(n) === 1) {
    const a = hp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Ul(e, i)
    ], []));
  } else
    return Ul(e, n);
}
function Ul(e, t) {
  const n = gp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = vp(t).reduce((o, a) => [...o, ss(e, a)], []);
    return e.normalize(r);
  }
}
function ss(e, t) {
  const n = $s(t);
  switch (n) {
    case 3:
      return Uo(t, n);
    case 9:
      return Uo(t, n);
    case 4: {
      const r = t;
      if (hn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (hn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Eo(n);
    }
    case 5: {
      const r = t;
      if (hn(r, "i") && Tt(r.i))
        return e.interpolate(e.list(r.i));
      if (hn(r, "index") && Tt(r.index))
        return e.interpolate(e.list(r.index));
      throw Eo(n);
    }
    case 6: {
      const r = t, o = bp(r), a = yp(r);
      return e.linked(ss(e, a), o ? ss(e, o) : void 0, e.type);
    }
    case 7:
      return Uo(t, n);
    case 8:
      return Uo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const wp = (e) => e;
let Ho = Ve();
function kp(e, t = {}) {
  let n = !1;
  const r = t.onError || Wf;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...fp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Tp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ae(e)) {
    st(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || wp)(e), o = Ho[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = kp(e, {
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
const Zn = {
  INVALID_ARGUMENT: Hf,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Sp = 24;
function Xn(e) {
  return Ta(e, null, void 0);
}
function Ms(e, t) {
  return t.locale != null ? Hl(t.locale) : Hl(e.locale);
}
let Ha;
function Hl(e) {
  if (ae(e))
    return e;
  if (Je(e)) {
    if (e.resolvedOnce && Ha != null)
      return Ha;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Vf(t))
        throw Xn(Zn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ha = t;
    } else
      throw Xn(Zn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Xn(Zn.NOT_SUPPORT_LOCALE_TYPE);
}
function Ep(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...lt(t) ? t : Re(t) ? Object.keys(t) : ae(t) ? [t] : [n]
  ])];
}
function nu(e, t, n) {
  const r = ae(n) ? n : ia, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; lt(s); )
      s = Wl(a, s, t);
    const i = lt(t) || !xe(t) ? t : t.default ? t.default : null;
    s = ae(i) ? [i] : i, lt(s) && Wl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Wl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && st(r); o++) {
    const a = t[o];
    ae(a) && (r = Ap(e, t[o], n));
  }
  return r;
}
function Ap(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Cp(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Cp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (lt(n) || xe(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const wr = [];
wr[
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
wr[
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
wr[
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
wr[
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
wr[
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
wr[
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
wr[
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
const Op = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Lp(e) {
  return Op.test(e);
}
function Ip(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function xp(e) {
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
function Rp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Lp(t) ? Ip(t) : "*" + t;
}
function Pp(e) {
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
      if (o = 0, s === void 0 || (s = Rp(s), s === !1))
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
      if (l = xp(a), m = wr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = p[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Gl = /* @__PURE__ */ new Map();
function Np(e, t) {
  return Re(e) ? e[t] : null;
}
function $p(e, t) {
  if (!Re(e))
    return null;
  let n = Gl.get(t);
  if (n || (n = Pp(t), n && Gl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (tu.includes(s) && Pn(o))
      return null;
    const i = o[s];
    if (i === void 0 || Je(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Mp = "11.2.2", Sa = -1, ia = "en-US", Kl = "", ql = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Dp() {
  return {
    upper: (e, t) => t === "text" && ae(e) ? e.toUpperCase() : t === "vnode" && Re(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ae(e) ? e.toLowerCase() : t === "vnode" && Re(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ae(e) ? ql(e) : t === "vnode" && Re(e) && "__v_isVNode" in e ? ql(e.children) : e
  };
}
let ru;
function Fp(e) {
  ru = e;
}
let ou;
function zp(e) {
  ou = e;
}
let au;
function Bp(e) {
  au = e;
}
let su = null;
const Yl = (e) => {
  su = e;
}, Vp = () => su;
let Zl = 0;
function jp(e = {}) {
  const t = Je(e.onWarn) ? e.onWarn : Nf, n = ae(e.version) ? e.version : Mp, r = ae(e.locale) || Je(e.locale) ? e.locale : ia, o = Je(r) ? ia : r, a = lt(e.fallbackLocale) || xe(e.fallbackLocale) || ae(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = xe(e.messages) ? e.messages : Wa(o), i = xe(e.datetimeFormats) ? e.datetimeFormats : Wa(o), l = xe(e.numberFormats) ? e.numberFormats : Wa(o), u = It(Ve(), e.modifiers, Dp()), d = e.pluralRules || Ve(), m = Je(e.missing) ? e.missing : null, p = st(e.missingWarn) || la(e.missingWarn) ? e.missingWarn : !0, b = st(e.fallbackWarn) || la(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, S = Je(e.postTranslation) ? e.postTranslation : null, f = xe(e.processor) ? e.processor : null, E = st(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, T = Je(e.messageCompiler) ? e.messageCompiler : ru, v = Je(e.messageResolver) ? e.messageResolver : ou || Np, C = Je(e.localeFallbacker) ? e.localeFallbacker : au || Ep, O = Re(e.fallbackContext) ? e.fallbackContext : void 0, M = e, Y = Re(M.__datetimeFormatters) ? M.__datetimeFormatters : /* @__PURE__ */ new Map(), ne = Re(M.__numberFormatters) ? M.__numberFormatters : /* @__PURE__ */ new Map(), ue = Re(M.__meta) ? M.__meta : {};
  Zl++;
  const re = {
    version: n,
    cid: Zl,
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
    postTranslation: S,
    processor: f,
    warnHtmlMessage: E,
    escapeParameter: L,
    messageCompiler: T,
    messageResolver: v,
    localeFallbacker: C,
    fallbackContext: O,
    onWarn: t,
    __meta: ue
  };
  return re.datetimeFormats = i, re.numberFormats = l, re.__datetimeFormatters = Y, re.__numberFormatters = ne, re;
}
const Wa = (e) => ({ [e]: Ve() });
function Ds(e, t, n, r, o) {
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
function Up(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Hp(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Up(e, t[r]))
      return !0;
  return !1;
}
function Xl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, m] = ls(...t), p = st(d.missingWarn) ? d.missingWarn : e.missingWarn;
  st(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const b = !!d.part, h = Ms(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ae(l) || l === "")
    return new Intl.DateTimeFormat(h, m).format(u);
  let S = {}, f, E = null;
  const L = "datetime format";
  for (let C = 0; C < g.length && (f = g[C], S = n[f] || {}, E = S[l], !xe(E)); C++)
    Ds(e, l, f, p, L);
  if (!xe(E) || !ae(f))
    return r ? Sa : l;
  let T = `${f}__${l}`;
  ka(m) || (T = `${T}__${JSON.stringify(m)}`);
  let v = i.get(T);
  return v || (v = new Intl.DateTimeFormat(f, It({}, E, m)), i.set(T, v)), b ? v.formatToParts(u) : v.format(u);
}
const lu = [
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
function ls(...e) {
  const [t, n, r, o] = e, a = Ve();
  let s = Ve(), i;
  if (ae(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Xn(Zn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Xn(Zn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Df(t)) {
    if (isNaN(t.getTime()))
      throw Xn(Zn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Tt(t))
    i = t;
  else
    throw Xn(Zn.INVALID_ARGUMENT);
  return ae(n) ? a.key = n : xe(n) && Object.keys(n).forEach((l) => {
    lu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ae(r) ? a.locale = r : xe(r) && (s = r), xe(o) && (s = o), [a.key || "", i, a, s];
}
function Ql(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Jl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, m] = is(...t), p = st(d.missingWarn) ? d.missingWarn : e.missingWarn;
  st(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const b = !!d.part, h = Ms(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ae(l) || l === "")
    return new Intl.NumberFormat(h, m).format(u);
  let S = {}, f, E = null;
  const L = "number format";
  for (let C = 0; C < g.length && (f = g[C], S = n[f] || {}, E = S[l], !xe(E)); C++)
    Ds(e, l, f, p, L);
  if (!xe(E) || !ae(f))
    return r ? Sa : l;
  let T = `${f}__${l}`;
  ka(m) || (T = `${T}__${JSON.stringify(m)}`);
  let v = i.get(T);
  return v || (v = new Intl.NumberFormat(f, It({}, E, m)), i.set(T, v)), b ? v.formatToParts(u) : v.format(u);
}
const iu = [
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
function is(...e) {
  const [t, n, r, o] = e, a = Ve();
  let s = Ve();
  if (!Tt(t))
    throw Xn(Zn.INVALID_ARGUMENT);
  const i = t;
  return ae(n) ? a.key = n : xe(n) && Object.keys(n).forEach((l) => {
    iu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ae(r) ? a.locale = r : xe(r) && (s = r), xe(o) && (s = o), [a.key || "", i, a, s];
}
function ei(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Wp = (e) => e, Gp = (e) => "", Kp = "text", qp = (e) => e.length === 0 ? "" : Ps(e), Yp = jf;
function ti(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Zp(e) {
  const t = Tt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Tt(e.named.count) || Tt(e.named.n)) ? Tt(e.named.count) ? e.named.count : Tt(e.named.n) ? e.named.n : t : t;
}
function Xp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Qp(e = {}) {
  const t = e.locale, n = Zp(e), r = Re(e.pluralRules) && ae(t) && Je(e.pluralRules[t]) ? e.pluralRules[t] : ti, o = Re(e.pluralRules) && ae(t) && Je(e.pluralRules[t]) ? ti : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || Ve();
  Tt(e.pluralIndex) && Xp(n, l);
  const u = (f) => l[f];
  function d(f, E) {
    const L = Je(e.messages) ? e.messages(f, !!E) : Re(e.messages) ? e.messages[f] : !1;
    return L || (e.parent ? e.parent.message(f) : Gp);
  }
  const m = (f) => e.modifiers ? e.modifiers[f] : Wp, p = xe(e.processor) && Je(e.processor.normalize) ? e.processor.normalize : qp, b = xe(e.processor) && Je(e.processor.interpolate) ? e.processor.interpolate : Yp, h = xe(e.processor) && ae(e.processor.type) ? e.processor.type : Kp, S = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...E) => {
      const [L, T] = E;
      let v = "text", C = "";
      E.length === 1 ? Re(L) ? (C = L.modifier || C, v = L.type || v) : ae(L) && (C = L || C) : E.length === 2 && (ae(L) && (C = L || C), ae(T) && (v = T || v));
      const O = d(f, !0)(S), M = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        v === "vnode" && lt(O) && C ? O[0] : O
      );
      return C ? m(C)(M, v) : M;
    },
    message: d,
    type: h,
    interpolate: b,
    normalize: p,
    values: It(Ve(), s, l)
  };
  return S;
}
const ni = () => "", Jn = (e) => Je(e);
function ri(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = cs(...t), d = st(u.missingWarn) ? u.missingWarn : e.missingWarn, m = st(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = st(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, h = ae(u.default) || st(u.default) ? st(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (ae(h) || Je(h)), S = Ms(e, u);
  p && Jp(u);
  let [f, E, L] = b ? [
    l,
    S,
    i[S] || Ve()
  ] : cu(e, l, S, s, m, d), T = f, v = l;
  if (!b && !(ae(T) || Pn(T) || Jn(T)) && g && (T = h, v = T), !b && (!(ae(T) || Pn(T) || Jn(T)) || !ae(E)))
    return o ? Sa : l;
  let C = !1;
  const O = () => {
    C = !0;
  }, M = Jn(T) ? T : uu(e, l, E, T, v, O);
  if (C)
    return T;
  const Y = nm(e, E, L, u), ne = Qp(Y), ue = em(e, M, ne);
  let re = r ? r(ue, l) : ue;
  return p && ae(re) && (re = zf(re)), re;
}
function Jp(e) {
  lt(e.list) ? e.list = e.list.map((t) => ae(t) ? Fl(t) : t) : Re(e.named) && Object.keys(e.named).forEach((t) => {
    ae(e.named[t]) && (e.named[t] = Fl(e.named[t]));
  });
}
function cu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let m = Ve(), p, b = null;
  const h = "translate";
  for (let g = 0; g < d.length && (p = d[g], m = s[p] || Ve(), (b = l(m, t)) === null && (b = m[t]), !(ae(b) || Pn(b) || Jn(b))); g++)
    if (!Hp(p, d)) {
      const S = Ds(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        a,
        h
      );
      S !== t && (b = S);
    }
  return [b, p, m];
}
function uu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Jn(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, tm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function em(e, t, n) {
  return t(n);
}
function cs(...e) {
  const [t, n, r] = e, o = Ve();
  if (!ae(t) && !Tt(t) && !Jn(t) && !Pn(t))
    throw Xn(Zn.INVALID_ARGUMENT);
  const a = Tt(t) ? String(t) : (Jn(t), t);
  return Tt(n) ? o.plural = n : ae(n) ? o.default = n : xe(n) && !ka(n) ? o.named = n : lt(n) && (o.list = n), Tt(r) ? o.plural = r : ae(r) ? o.default = r : xe(r) && It(o, r), [a, o];
}
function tm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => $f(t, n, s)
  };
}
function nm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (b, h) => {
      let g = s(n, b);
      if (g == null && (d || h)) {
        const [, , S] = cu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          b,
          t,
          i,
          l,
          u
        );
        g = s(S, b);
      }
      if (ae(g) || Pn(g)) {
        let S = !1;
        const E = uu(e, b, t, g, b, () => {
          S = !0;
        });
        return S ? ni : E;
      } else return Jn(g) ? g : ni;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), Tt(r.plural) && (p.pluralIndex = r.plural), p;
}
pp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const rm = "11.2.2";
function om() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ea().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ea().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ea().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Zr = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Sp,
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
const us = /* @__PURE__ */ Pr("__translateVNode"), ds = /* @__PURE__ */ Pr("__datetimeParts"), fs = /* @__PURE__ */ Pr("__numberParts"), am = Pr("__setPluralRules"), du = /* @__PURE__ */ Pr("__injectWithOption"), ps = /* @__PURE__ */ Pr("__dispose");
function Co(e) {
  if (!Re(e) || Pn(e))
    return e;
  for (const t in e)
    if (hn(e, t))
      if (!t.includes("."))
        Re(e[t]) && Co(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Ve()), !Re(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Pn(o) ? tu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Pn(o)) {
          const s = o[n[r]];
          Re(s) && Co(s);
        }
      }
  return e;
}
function fu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = xe(n) ? n : lt(r) ? Ve() : { [e]: Ve() };
  if (lt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Ve(), ta(u, s[l])) : ta(u, s);
    } else
      ae(i) && ta(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      hn(s, i) && Co(s[i]);
  return s;
}
function sm(e) {
  return e.type;
}
function lm(e, t, n) {
  let r = Re(t.messages) ? t.messages : Ve();
  "__i18nGlobal" in n && (r = fu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Re(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Re(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function oi(e) {
  return N(Uc, null, e, 0);
}
function pu() {
  return "currentInstance" in ja ? ja["currentInstance"] : ja.getCurrentInstance();
}
const ai = () => [], im = () => !1;
let si = 0;
function li(e) {
  return (t, n, r, o) => e(n, r, pu() || void 0, o);
}
function cm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Ml ? U : vr;
  let s = st(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ae(e.locale) ? e.locale : ia
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ae(e.fallbackLocale) || lt(e.fallbackLocale) || xe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(fu(i.value, e)), d = a(xe(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(xe(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : st(e.missingWarn) || la(e.missingWarn) ? e.missingWarn : !0, b = t ? t.fallbackWarn : st(e.fallbackWarn) || la(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : st(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, S = Je(e.missing) ? e.missing : null, f = Je(e.missing) ? li(e.missing) : null, E = Je(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : st(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const v = t ? t.modifiers : xe(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && Yl(null);
    const k = {
      version: rm,
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
      warnHtmlMessage: L,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = d.value, k.numberFormats = m.value, k.__datetimeFormatters = xe(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = xe(O) ? O.__numberFormatters : void 0;
    const $ = jp(k);
    return r && Yl($), $;
  })(), lo(O, i.value, l.value);
  function Y() {
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
  }), ue = x({
    get: () => l.value,
    set: (k) => {
      O.fallbackLocale = k, l.value = k, lo(O, i.value, k);
    }
  }), re = x(() => u.value), pe = /* @__PURE__ */ x(() => d.value), ve = /* @__PURE__ */ x(() => m.value);
  function B() {
    return Je(E) ? E : null;
  }
  function X(k) {
    E = k, O.postTranslation = k;
  }
  function j() {
    return S;
  }
  function K(k) {
    k !== null && (f = li(k)), S = k, O.missing = f;
  }
  const z = (k, $, he, Ce, Pe, Et) => {
    Y();
    let He;
    try {
      r || (O.fallbackContext = t ? Vp() : void 0), He = k(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (he !== "translate exists" && // for not `te` (e.g `t`)
    Tt(He) && He === Sa || he === "translate exists" && !He) {
      const [wn, Vn] = $();
      return t && h ? Ce(t) : Pe(wn);
    } else {
      if (Et(He))
        return He;
      throw Ao(Zr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function me(...k) {
    return z(($) => Reflect.apply(ri, null, [$, ...k]), () => cs(...k), "translate", ($) => Reflect.apply($.t, $, [...k]), ($) => $, ($) => ae($));
  }
  function De(...k) {
    const [$, he, Ce] = k;
    if (Ce && !Re(Ce))
      throw Ao(Zr.INVALID_ARGUMENT);
    return me($, he, It({ resolvedMessage: !0 }, Ce || {}));
  }
  function Te(...k) {
    return z(($) => Reflect.apply(Xl, null, [$, ...k]), () => ls(...k), "datetime format", ($) => Reflect.apply($.d, $, [...k]), () => Kl, ($) => ae($) || lt($));
  }
  function ke(...k) {
    return z(($) => Reflect.apply(Jl, null, [$, ...k]), () => is(...k), "number format", ($) => Reflect.apply($.n, $, [...k]), () => Kl, ($) => ae($) || lt($));
  }
  function H(k) {
    return k.map(($) => ae($) || Tt($) || st($) ? oi(String($)) : $);
  }
  const ye = {
    normalize: H,
    interpolate: (k) => k,
    type: "vnode"
  };
  function Xe(...k) {
    return z(($) => {
      let he;
      const Ce = $;
      try {
        Ce.processor = ye, he = Reflect.apply(ri, null, [Ce, ...k]);
      } finally {
        Ce.processor = null;
      }
      return he;
    }, () => cs(...k), "translate", ($) => $[us](...k), ($) => [oi($)], ($) => lt($));
  }
  function de(...k) {
    return z(($) => Reflect.apply(Jl, null, [$, ...k]), () => is(...k), "number format", ($) => $[fs](...k), ai, ($) => ae($) || lt($));
  }
  function tt(...k) {
    return z(($) => Reflect.apply(Xl, null, [$, ...k]), () => ls(...k), "datetime format", ($) => $[ds](...k), ai, ($) => ae($) || lt($));
  }
  function ht(k) {
    C = k, O.pluralRules = C;
  }
  function qe(k, $) {
    return z(() => {
      if (!k)
        return !1;
      const he = ae($) ? $ : i.value, Ce = gt(he), Pe = O.messageResolver(Ce, k);
      return Pn(Pe) || Jn(Pe) || ae(Pe);
    }, () => [k], "translate exists", (he) => Reflect.apply(he.te, he, [k, $]), im, (he) => st(he));
  }
  function yt(k) {
    let $ = null;
    const he = nu(O, l.value, i.value);
    for (let Ce = 0; Ce < he.length; Ce++) {
      const Pe = u.value[he[Ce]] || {}, Et = O.messageResolver(Pe, k);
      if (Et != null) {
        $ = Et;
        break;
      }
    }
    return $;
  }
  function ct(k) {
    const $ = yt(k);
    return $ ?? (t ? t.tm(k) || {} : {});
  }
  function gt(k) {
    return u.value[k] || {};
  }
  function vt(k, $) {
    if (o) {
      const he = { [k]: $ };
      for (const Ce in he)
        hn(he, Ce) && Co(he[Ce]);
      $ = he[k];
    }
    u.value[k] = $, O.messages = u.value;
  }
  function Ue(k, $) {
    u.value[k] = u.value[k] || {};
    const he = { [k]: $ };
    if (o)
      for (const Ce in he)
        hn(he, Ce) && Co(he[Ce]);
    $ = he[k], ta($, u.value[k]), O.messages = u.value;
  }
  function _t(k) {
    return d.value[k] || {};
  }
  function w(k, $) {
    d.value[k] = $, O.datetimeFormats = d.value, Ql(O, k, $);
  }
  function A(k, $) {
    d.value[k] = It(d.value[k] || {}, $), O.datetimeFormats = d.value, Ql(O, k, $);
  }
  function D(k) {
    return m.value[k] || {};
  }
  function Q(k, $) {
    m.value[k] = $, O.numberFormats = m.value, ei(O, k, $);
  }
  function Ae(k, $) {
    m.value[k] = It(m.value[k] || {}, $), O.numberFormats = m.value, ei(O, k, $);
  }
  si++, t && Ml && (we(t.locale, (k) => {
    s && (i.value = k, O.locale = k, lo(O, i.value, l.value));
  }), we(t.fallbackLocale, (k) => {
    s && (l.value = k, O.fallbackLocale = k, lo(O, i.value, l.value));
  }));
  const ce = {
    id: si,
    locale: ne,
    fallbackLocale: ue,
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
    t: me,
    getLocaleMessage: gt,
    setLocaleMessage: vt,
    mergeLocaleMessage: Ue,
    getPostTranslationHandler: B,
    setPostTranslationHandler: X,
    getMissingHandler: j,
    setMissingHandler: K,
    [am]: ht
  };
  return ce.datetimeFormats = pe, ce.numberFormats = ve, ce.rt = De, ce.te = qe, ce.tm = ct, ce.d = Te, ce.n = ke, ce.getDateTimeFormat = _t, ce.setDateTimeFormat = w, ce.mergeDateTimeFormat = A, ce.getNumberFormat = D, ce.setNumberFormat = Q, ce.mergeNumberFormat = Ae, ce[du] = n, ce[us] = Xe, ce[ds] = tt, ce[fs] = de, ce;
}
const Fs = {
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
function um({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Ot ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Ve());
}
function mu() {
  return Ot;
}
It({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Tt(e) || !isNaN(e)
  }
}, Fs);
function dm(e) {
  return lt(e) && !ae(e[0]);
}
function hu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Ve();
    e.locale && (s.locale = e.locale), ae(e.format) ? s.key = e.format : Re(e.format) && (ae(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((p, b) => n.includes(b) ? It(Ve(), p, { [b]: e.format[b] }) : p, Ve()));
    const l = r(e.value, s, i);
    let u = [s.key];
    lt(l) ? u = l.map((p, b) => {
      const h = o[p.type], g = h ? h({ [p.type]: p.value, index: b, parts: l }) : [p.value];
      return dm(g) && (g[0].key = `${p.type}-${b}`), g;
    }) : ae(l) && (u = [l]);
    const d = It(Ve(), a), m = ae(e.tag) || Re(e.tag) ? e.tag : mu();
    return jc(m, d, u);
  };
}
It({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Fs);
const fm = /* @__PURE__ */ Pr("global-vue-i18n");
function Po(e = {}) {
  const t = pu();
  if (t == null)
    throw Ao(Zr.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ao(Zr.NOT_INSTALLED);
  const n = pm(t), r = hm(n), o = sm(t), a = mm(e, o);
  if (a === "global")
    return lm(r, e, o), r;
  if (a === "parent") {
    let l = gm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = It({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = cm(l), s.__composerExtend && (i[ps] = s.__composerExtend(i)), bm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function pm(e) {
  const t = ze(e.isCE ? fm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Ao(e.isCE ? Zr.NOT_INSTALLED_WITH_PROVIDE : Zr.UNEXPECTED_ERROR);
  return t;
}
function mm(e, t) {
  return ka(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function hm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function gm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = vm(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[du] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function vm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function bm(e, t, n) {
  it(() => {
  }, t), wa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ps];
    o && (o(), delete r[ps]);
  }, t);
}
It({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Fs);
om();
Fp(Tp);
zp($p);
Bp(nu);
function zs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Nr = zs();
function gu(e) {
  Nr = e;
}
var bo = { exec: () => null };
function Ie(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(zt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var ym = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), zt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, _m = /^(?:[ \t]*(?:\n|$))+/, wm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, km = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, No = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Tm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Bs = /(?:[*+-]|\d{1,9}[.)])/, vu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, bu = Ie(vu).replace(/bull/g, Bs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Sm = Ie(vu).replace(/bull/g, Bs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Vs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Em = /^[^\n]+/, js = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Am = Ie(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", js).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Cm = Ie(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Bs).getRegex(), Ea = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Us = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Om = Ie("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Us).replace("tag", Ea).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), yu = Ie(Vs).replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex(), Lm = Ie(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", yu).getRegex(), Hs = { blockquote: Lm, code: wm, def: Am, fences: km, heading: Tm, hr: No, html: Om, lheading: bu, list: Cm, newline: _m, paragraph: yu, table: bo, text: Em }, ii = Ie("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex(), Im = { ...Hs, lheading: Sm, table: ii, paragraph: Ie(Vs).replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ii).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex() }, xm = { ...Hs, html: Ie(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Us).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: bo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ie(Vs).replace("hr", No).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", bu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Rm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Pm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, _u = /^( {2,}|\\)\n(?!\s*$)/, Nm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Aa = /[\p{P}\p{S}]/u, Ws = /[\s\p{P}\p{S}]/u, wu = /[^\s\p{P}\p{S}]/u, $m = Ie(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ws).getRegex(), ku = /(?!~)[\p{P}\p{S}]/u, Mm = /(?!~)[\s\p{P}\p{S}]/u, Dm = /(?:[^\s\p{P}\p{S}]|~)/u, Fm = Ie(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ym ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Tu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, zm = Ie(Tu, "u").replace(/punct/g, Aa).getRegex(), Bm = Ie(Tu, "u").replace(/punct/g, ku).getRegex(), Su = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Vm = Ie(Su, "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Ws).replace(/punct/g, Aa).getRegex(), jm = Ie(Su, "gu").replace(/notPunctSpace/g, Dm).replace(/punctSpace/g, Mm).replace(/punct/g, ku).getRegex(), Um = Ie("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Ws).replace(/punct/g, Aa).getRegex(), Hm = Ie(/\\(punct)/, "gu").replace(/punct/g, Aa).getRegex(), Wm = Ie(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Gm = Ie(Us).replace("(?:-->|$)", "-->").getRegex(), Km = Ie("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Gm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ca = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, qm = Ie(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ca).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Eu = Ie(/^!?\[(label)\]\[(ref)\]/).replace("label", ca).replace("ref", js).getRegex(), Au = Ie(/^!?\[(ref)\](?:\[\])?/).replace("ref", js).getRegex(), Ym = Ie("reflink|nolink(?!\\()", "g").replace("reflink", Eu).replace("nolink", Au).getRegex(), ci = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Gs = { _backpedal: bo, anyPunctuation: Hm, autolink: Wm, blockSkip: Fm, br: _u, code: Pm, del: bo, emStrongLDelim: zm, emStrongRDelimAst: Vm, emStrongRDelimUnd: Um, escape: Rm, link: qm, nolink: Au, punctuation: $m, reflink: Eu, reflinkSearch: Ym, tag: Km, text: Nm, url: bo }, Zm = { ...Gs, link: Ie(/^!?\[(label)\]\((.*?)\)/).replace("label", ca).getRegex(), reflink: Ie(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ca).getRegex() }, ms = { ...Gs, emStrongRDelimAst: jm, emStrongLDelim: Bm, url: Ie(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ci).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ie(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ci).getRegex() }, Xm = { ...ms, br: Ie(_u).replace("{2,}", "*").getRegex(), text: Ie(ms.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Wo = { normal: Hs, gfm: Im, pedantic: xm }, io = { normal: Gs, gfm: ms, breaks: Xm, pedantic: Zm }, Qm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ui = (e) => Qm[e];
function Wn(e, t) {
  if (t) {
    if (zt.escapeTest.test(e)) return e.replace(zt.escapeReplace, ui);
  } else if (zt.escapeTestNoEncode.test(e)) return e.replace(zt.escapeReplaceNoEncode, ui);
  return e;
}
function di(e) {
  try {
    e = encodeURI(e).replace(zt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function fi(e, t) {
  let n = e.replace(zt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(zt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(zt.slashPipe, "|");
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
function Jm(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function pi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function eh(e, t, n) {
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
    Be(this, "options");
    Be(this, "rules");
    Be(this, "lexer");
    this.options = e || Nr;
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
      let n = t[0], r = eh(n, t[3] || "", this.rules);
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
          let g = this.rules.other.nextBulletRegex(h), S = this.rules.other.hrRegex(h), f = this.rules.other.fencesBeginRegex(h), E = this.rules.other.headingBeginRegex(h), L = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let T = e.split(`
`, 1)[0], v;
            if (p = T, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), v = p) : v = p.replace(this.rules.other.tabCharGlobal, "    "), f.test(p) || E.test(p) || L.test(p) || g.test(p) || S.test(p)) break;
            if (v.search(this.rules.other.nonSpaceChar) >= h || !p.trim()) d += `
` + v.slice(h);
            else {
              if (b || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(m) || E.test(m) || S.test(m)) break;
              d += `
` + p;
            }
            !b && !p.trim() && (b = !0), u += T + `
`, e = e.substring(T.length + 1), m = v.slice(h);
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
    let n = fi(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(fi(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = Jm(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), pi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return pi(n, o, n[0], this.lexer, this.rules);
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
}, pn = class hs {
  constructor(t) {
    Be(this, "tokens");
    Be(this, "options");
    Be(this, "state");
    Be(this, "inlineQueue");
    Be(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Nr, this.options.tokenizer = this.options.tokenizer || new ua(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: zt, block: Wo.normal, inline: io.normal };
    this.options.pedantic ? (n.block = Wo.pedantic, n.inline = io.pedantic) : this.options.gfm && (n.block = Wo.gfm, this.options.breaks ? n.inline = io.breaks : n.inline = io.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: Wo, inline: io };
  }
  static lex(t, n) {
    return new hs(n).lex(t);
  }
  static lexInline(t, n) {
    return new hs(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(zt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(zt.tabCharGlobal, "    ").replace(zt.spaceLine, "")); t; ) {
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
    Be(this, "options");
    Be(this, "parser");
    this.options = t || Nr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(zt.notSpaceStart)?.[0], a = t.replace(zt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Wn(o) + '">' + (r ? a : Wn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Wn(a, !0)) + `</code></pre>
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
    return `<code>${Wn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = di(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Wn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = di(t);
    if (a === null) return Wn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Wn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Wn(t.text);
  }
}, Ks = class {
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
}, mn = class gs {
  constructor(t) {
    Be(this, "options");
    Be(this, "renderer");
    Be(this, "textRenderer");
    this.options = t || Nr, this.options.renderer = this.options.renderer || new da(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ks();
  }
  static parse(t, n) {
    return new gs(n).parse(t);
  }
  static parseInline(t, n) {
    return new gs(n).parseInline(t);
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
    Be(this, "options");
    Be(this, "block");
    this.options = e || Nr;
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
    return this.block ? pn.lex : pn.lexInline;
  }
  provideParser() {
    return this.block ? mn.parse : mn.parseInline;
  }
}, Be(Jo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Be(Jo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Jo), th = class {
  constructor(...t) {
    Be(this, "defaults", zs());
    Be(this, "options", this.setOptions);
    Be(this, "parse", this.parseMarkdown(!0));
    Be(this, "parseInline", this.parseMarkdown(!1));
    Be(this, "Parser", mn);
    Be(this, "Renderer", da);
    Be(this, "TextRenderer", Ks);
    Be(this, "Lexer", pn);
    Be(this, "Tokenizer", ua);
    Be(this, "Hooks", go);
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
    return pn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return mn.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? pn.lex : pn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser() : t ? mn.parse : mn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? pn.lex : pn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? mn.parse : mn.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + Wn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Ir = new th();
function Fe(e, t) {
  return Ir.parse(e, t);
}
Fe.options = Fe.setOptions = function(e) {
  return Ir.setOptions(e), Fe.defaults = Ir.defaults, gu(Fe.defaults), Fe;
};
Fe.getDefaults = zs;
Fe.defaults = Nr;
Fe.use = function(...e) {
  return Ir.use(...e), Fe.defaults = Ir.defaults, gu(Fe.defaults), Fe;
};
Fe.walkTokens = function(e, t) {
  return Ir.walkTokens(e, t);
};
Fe.parseInline = Ir.parseInline;
Fe.Parser = mn;
Fe.parser = mn.parse;
Fe.Renderer = da;
Fe.TextRenderer = Ks;
Fe.Lexer = pn;
Fe.lexer = pn.lex;
Fe.Tokenizer = ua;
Fe.Hooks = go;
Fe.parse = Fe;
Fe.options;
Fe.setOptions;
Fe.use;
Fe.walkTokens;
Fe.parseInline;
mn.parse;
pn.lex;
const nh = ["disabled"], rh = {
  key: 0,
  class: "custom-button__loading"
}, oh = /* @__PURE__ */ oe({
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
    return (n, r) => (R(), G("button", {
      class: q([
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
      e.loading ? (R(), G("div", rh, r[1] || (r[1] = [
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
      _e(n.$slots, "default", {}, void 0, !0)
    ], 10, nh));
  }
}), qs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Gn = /* @__PURE__ */ qs(oh, [["__scopeId", "data-v-9497085f"]]), Cu = Symbol(), na = "el", ah = "is-", Ar = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Ou = Symbol("namespaceContextKey"), Ys = (e) => {
  const t = e || (Bt() ? ze(Ou, U(na)) : U(na));
  return x(() => c(t) || na);
}, pt = (e, t) => {
  const n = Ys(t);
  return {
    namespace: n,
    b: (g = "") => Ar(n.value, e, g, "", ""),
    e: (g) => g ? Ar(n.value, e, "", g, "") : "",
    m: (g) => g ? Ar(n.value, e, "", "", g) : "",
    be: (g, S) => g && S ? Ar(n.value, e, g, S, "") : "",
    em: (g, S) => g && S ? Ar(n.value, e, "", g, S) : "",
    bm: (g, S) => g && S ? Ar(n.value, e, g, "", S) : "",
    bem: (g, S, f) => g && S && f ? Ar(n.value, e, g, S, f) : "",
    is: (g, ...S) => {
      const f = S.length >= 1 ? S[0] : !0;
      return g && f ? `${ah}${g}` : "";
    },
    cssVar: (g) => {
      const S = {};
      for (const f in g)
        g[f] && (S[`--${n.value}-${f}`] = g[f]);
      return S;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const S = {};
      for (const f in g)
        g[f] && (S[`--${n.value}-${e}-${f}`] = g[f]);
      return S;
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
}, sh = Object.prototype.hasOwnProperty, mi = (e, t) => sh.call(e, t), In = Array.isArray, et = (e) => typeof e == "function", Mt = (e) => typeof e == "string", Xt = (e) => e !== null && typeof e == "object", hi = (e) => (Xt(e) || et(e)) && et(e.then) && et(e.catch), lh = Object.prototype.toString, ih = (e) => lh.call(e), ch = (e) => ih(e) === "[object Object]";
var Lu = typeof global == "object" && global && global.Object === Object && global, uh = typeof self == "object" && self && self.Object === Object && self, Bn = Lu || uh || Function("return this")(), Dn = Bn.Symbol, Iu = Object.prototype, dh = Iu.hasOwnProperty, fh = Iu.toString, uo = Dn ? Dn.toStringTag : void 0;
function ph(e) {
  var t = dh.call(e, uo), n = e[uo];
  try {
    e[uo] = void 0;
    var r = !0;
  } catch {
  }
  var o = fh.call(e);
  return r && (t ? e[uo] = n : delete e[uo]), o;
}
var mh = Object.prototype, hh = mh.toString;
function gh(e) {
  return hh.call(e);
}
var vh = "[object Null]", bh = "[object Undefined]", gi = Dn ? Dn.toStringTag : void 0;
function so(e) {
  return e == null ? e === void 0 ? bh : vh : gi && gi in Object(e) ? ph(e) : gh(e);
}
function Xr(e) {
  return e != null && typeof e == "object";
}
var yh = "[object Symbol]";
function Ca(e) {
  return typeof e == "symbol" || Xr(e) && so(e) == yh;
}
function _h(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var yn = Array.isArray, vi = Dn ? Dn.prototype : void 0, bi = vi ? vi.toString : void 0;
function xu(e) {
  if (typeof e == "string")
    return e;
  if (yn(e))
    return _h(e, xu) + "";
  if (Ca(e))
    return bi ? bi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var wh = /\s/;
function kh(e) {
  for (var t = e.length; t-- && wh.test(e.charAt(t)); )
    ;
  return t;
}
var Th = /^\s+/;
function Sh(e) {
  return e && e.slice(0, kh(e) + 1).replace(Th, "");
}
function yr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var yi = NaN, Eh = /^[-+]0x[0-9a-f]+$/i, Ah = /^0b[01]+$/i, Ch = /^0o[0-7]+$/i, Oh = parseInt;
function _i(e) {
  if (typeof e == "number")
    return e;
  if (Ca(e))
    return yi;
  if (yr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Sh(e);
  var n = Ah.test(e);
  return n || Ch.test(e) ? Oh(e.slice(2), n ? 2 : 8) : Eh.test(e) ? yi : +e;
}
function Ru(e) {
  return e;
}
var Lh = "[object AsyncFunction]", Ih = "[object Function]", xh = "[object GeneratorFunction]", Rh = "[object Proxy]";
function Pu(e) {
  if (!yr(e))
    return !1;
  var t = so(e);
  return t == Ih || t == xh || t == Lh || t == Rh;
}
var Ga = Bn["__core-js_shared__"], wi = function() {
  var e = /[^.]+$/.exec(Ga && Ga.keys && Ga.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ph(e) {
  return !!wi && wi in e;
}
var Nh = Function.prototype, $h = Nh.toString;
function $r(e) {
  if (e != null) {
    try {
      return $h.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Mh = /[\\^$.*+?()[\]{}|]/g, Dh = /^\[object .+?Constructor\]$/, Fh = Function.prototype, zh = Object.prototype, Bh = Fh.toString, Vh = zh.hasOwnProperty, jh = RegExp(
  "^" + Bh.call(Vh).replace(Mh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uh(e) {
  if (!yr(e) || Ph(e))
    return !1;
  var t = Pu(e) ? jh : Dh;
  return t.test($r(e));
}
function Hh(e, t) {
  return e?.[t];
}
function Mr(e, t) {
  var n = Hh(e, t);
  return Uh(n) ? n : void 0;
}
var vs = Mr(Bn, "WeakMap");
function Wh(e, t, n) {
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
var Gh = 800, Kh = 16, qh = Date.now;
function Yh(e) {
  var t = 0, n = 0;
  return function() {
    var r = qh(), o = Kh - (r - n);
    if (n = r, o > 0) {
      if (++t >= Gh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Zh(e) {
  return function() {
    return e;
  };
}
var fa = function() {
  try {
    var e = Mr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Xh = fa ? function(e, t) {
  return fa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zh(t),
    writable: !0
  });
} : Ru, Qh = Yh(Xh);
function Jh(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var eg = 9007199254740991, tg = /^(?:0|[1-9]\d*)$/;
function Zs(e, t) {
  var n = typeof e;
  return t = t ?? eg, !!t && (n == "number" || n != "symbol" && tg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ng(e, t, n) {
  t == "__proto__" && fa ? fa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Xs(e, t) {
  return e === t || e !== e && t !== t;
}
var rg = Object.prototype, og = rg.hasOwnProperty;
function ag(e, t, n) {
  var r = e[t];
  (!(og.call(e, t) && Xs(r, n)) || n === void 0 && !(t in e)) && ng(e, t, n);
}
var ki = Math.max;
function sg(e, t, n) {
  return t = ki(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ki(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Wh(e, this, i);
  };
}
var lg = 9007199254740991;
function Qs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lg;
}
function ig(e) {
  return e != null && Qs(e.length) && !Pu(e);
}
var cg = Object.prototype;
function ug(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || cg;
  return e === n;
}
function dg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var fg = "[object Arguments]";
function Ti(e) {
  return Xr(e) && so(e) == fg;
}
var Nu = Object.prototype, pg = Nu.hasOwnProperty, mg = Nu.propertyIsEnumerable, Js = Ti(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ti : function(e) {
  return Xr(e) && pg.call(e, "callee") && !mg.call(e, "callee");
};
function hg() {
  return !1;
}
var $u = typeof exports == "object" && exports && !exports.nodeType && exports, Si = $u && typeof module == "object" && module && !module.nodeType && module, gg = Si && Si.exports === $u, Ei = gg ? Bn.Buffer : void 0, vg = Ei ? Ei.isBuffer : void 0, bs = vg || hg, bg = "[object Arguments]", yg = "[object Array]", _g = "[object Boolean]", wg = "[object Date]", kg = "[object Error]", Tg = "[object Function]", Sg = "[object Map]", Eg = "[object Number]", Ag = "[object Object]", Cg = "[object RegExp]", Og = "[object Set]", Lg = "[object String]", Ig = "[object WeakMap]", xg = "[object ArrayBuffer]", Rg = "[object DataView]", Pg = "[object Float32Array]", Ng = "[object Float64Array]", $g = "[object Int8Array]", Mg = "[object Int16Array]", Dg = "[object Int32Array]", Fg = "[object Uint8Array]", zg = "[object Uint8ClampedArray]", Bg = "[object Uint16Array]", Vg = "[object Uint32Array]", Ge = {};
Ge[Pg] = Ge[Ng] = Ge[$g] = Ge[Mg] = Ge[Dg] = Ge[Fg] = Ge[zg] = Ge[Bg] = Ge[Vg] = !0;
Ge[bg] = Ge[yg] = Ge[xg] = Ge[_g] = Ge[Rg] = Ge[wg] = Ge[kg] = Ge[Tg] = Ge[Sg] = Ge[Eg] = Ge[Ag] = Ge[Cg] = Ge[Og] = Ge[Lg] = Ge[Ig] = !1;
function jg(e) {
  return Xr(e) && Qs(e.length) && !!Ge[so(e)];
}
function Ug(e) {
  return function(t) {
    return e(t);
  };
}
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports, yo = Mu && typeof module == "object" && module && !module.nodeType && module, Hg = yo && yo.exports === Mu, Ka = Hg && Lu.process, Ai = function() {
  try {
    var e = yo && yo.require && yo.require("util").types;
    return e || Ka && Ka.binding && Ka.binding("util");
  } catch {
  }
}(), Ci = Ai && Ai.isTypedArray, Du = Ci ? Ug(Ci) : jg, Wg = Object.prototype, Gg = Wg.hasOwnProperty;
function Kg(e, t) {
  var n = yn(e), r = !n && Js(e), o = !n && !r && bs(e), a = !n && !r && !o && Du(e), s = n || r || o || a, i = s ? dg(e.length, String) : [], l = i.length;
  for (var u in e)
    Gg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Zs(u, l))) && i.push(u);
  return i;
}
function qg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Yg = qg(Object.keys, Object), Zg = Object.prototype, Xg = Zg.hasOwnProperty;
function Qg(e) {
  if (!ug(e))
    return Yg(e);
  var t = [];
  for (var n in Object(e))
    Xg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Fu(e) {
  return ig(e) ? Kg(e) : Qg(e);
}
var Jg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ev = /^\w*$/;
function el(e, t) {
  if (yn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ca(e) ? !0 : ev.test(e) || !Jg.test(e) || t != null && e in Object(t);
}
var Lo = Mr(Object, "create");
function tv() {
  this.__data__ = Lo ? Lo(null) : {}, this.size = 0;
}
function nv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var rv = "__lodash_hash_undefined__", ov = Object.prototype, av = ov.hasOwnProperty;
function sv(e) {
  var t = this.__data__;
  if (Lo) {
    var n = t[e];
    return n === rv ? void 0 : n;
  }
  return av.call(t, e) ? t[e] : void 0;
}
var lv = Object.prototype, iv = lv.hasOwnProperty;
function cv(e) {
  var t = this.__data__;
  return Lo ? t[e] !== void 0 : iv.call(t, e);
}
var uv = "__lodash_hash_undefined__";
function dv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Lo && t === void 0 ? uv : t, this;
}
function xr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
xr.prototype.clear = tv;
xr.prototype.delete = nv;
xr.prototype.get = sv;
xr.prototype.has = cv;
xr.prototype.set = dv;
function fv() {
  this.__data__ = [], this.size = 0;
}
function Oa(e, t) {
  for (var n = e.length; n--; )
    if (Xs(e[n][0], t))
      return n;
  return -1;
}
var pv = Array.prototype, mv = pv.splice;
function hv(e) {
  var t = this.__data__, n = Oa(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : mv.call(t, n, 1), --this.size, !0;
}
function gv(e) {
  var t = this.__data__, n = Oa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function vv(e) {
  return Oa(this.__data__, e) > -1;
}
function bv(e, t) {
  var n = this.__data__, r = Oa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function sr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
sr.prototype.clear = fv;
sr.prototype.delete = hv;
sr.prototype.get = gv;
sr.prototype.has = vv;
sr.prototype.set = bv;
var Io = Mr(Bn, "Map");
function yv() {
  this.size = 0, this.__data__ = {
    hash: new xr(),
    map: new (Io || sr)(),
    string: new xr()
  };
}
function _v(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function La(e, t) {
  var n = e.__data__;
  return _v(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function wv(e) {
  var t = La(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kv(e) {
  return La(this, e).get(e);
}
function Tv(e) {
  return La(this, e).has(e);
}
function Sv(e, t) {
  var n = La(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function lr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
lr.prototype.clear = yv;
lr.prototype.delete = wv;
lr.prototype.get = kv;
lr.prototype.has = Tv;
lr.prototype.set = Sv;
var Ev = "Expected a function";
function tl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ev);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (tl.Cache || lr)(), n;
}
tl.Cache = lr;
var Av = 500;
function Cv(e) {
  var t = tl(e, function(r) {
    return n.size === Av && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Ov = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lv = /\\(\\)?/g, Iv = Cv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ov, function(n, r, o, a) {
    t.push(o ? a.replace(Lv, "$1") : r || n);
  }), t;
});
function xv(e) {
  return e == null ? "" : xu(e);
}
function Ia(e, t) {
  return yn(e) ? e : el(e, t) ? [e] : Iv(xv(e));
}
function $o(e) {
  if (typeof e == "string" || Ca(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function nl(e, t) {
  t = Ia(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$o(t[n++])];
  return n && n == r ? e : void 0;
}
function gr(e, t, n) {
  var r = e == null ? void 0 : nl(e, t);
  return r === void 0 ? n : r;
}
function zu(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Oi = Dn ? Dn.isConcatSpreadable : void 0;
function Rv(e) {
  return yn(e) || Js(e) || !!(Oi && e && e[Oi]);
}
function Pv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Rv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? zu(o, i) : o[o.length] = i;
  }
  return o;
}
function Nv(e) {
  var t = e == null ? 0 : e.length;
  return t ? Pv(e) : [];
}
function $v(e) {
  return Qh(sg(e, void 0, Nv), e + "");
}
function hr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return yn(e) ? e : [e];
}
function Mv() {
  this.__data__ = new sr(), this.size = 0;
}
function Dv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Fv(e) {
  return this.__data__.get(e);
}
function zv(e) {
  return this.__data__.has(e);
}
var Bv = 200;
function Vv(e, t) {
  var n = this.__data__;
  if (n instanceof sr) {
    var r = n.__data__;
    if (!Io || r.length < Bv - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new lr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function er(e) {
  var t = this.__data__ = new sr(e);
  this.size = t.size;
}
er.prototype.clear = Mv;
er.prototype.delete = Dv;
er.prototype.get = Fv;
er.prototype.has = zv;
er.prototype.set = Vv;
function jv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Uv() {
  return [];
}
var Hv = Object.prototype, Wv = Hv.propertyIsEnumerable, Li = Object.getOwnPropertySymbols, Gv = Li ? function(e) {
  return e == null ? [] : (e = Object(e), jv(Li(e), function(t) {
    return Wv.call(e, t);
  }));
} : Uv;
function Kv(e, t, n) {
  var r = t(e);
  return yn(e) ? r : zu(r, n(e));
}
function Ii(e) {
  return Kv(e, Fu, Gv);
}
var ys = Mr(Bn, "DataView"), _s = Mr(Bn, "Promise"), ws = Mr(Bn, "Set"), xi = "[object Map]", qv = "[object Object]", Ri = "[object Promise]", Pi = "[object Set]", Ni = "[object WeakMap]", $i = "[object DataView]", Yv = $r(ys), Zv = $r(Io), Xv = $r(_s), Qv = $r(ws), Jv = $r(vs), mr = so;
(ys && mr(new ys(new ArrayBuffer(1))) != $i || Io && mr(new Io()) != xi || _s && mr(_s.resolve()) != Ri || ws && mr(new ws()) != Pi || vs && mr(new vs()) != Ni) && (mr = function(e) {
  var t = so(e), n = t == qv ? e.constructor : void 0, r = n ? $r(n) : "";
  if (r)
    switch (r) {
      case Yv:
        return $i;
      case Zv:
        return xi;
      case Xv:
        return Ri;
      case Qv:
        return Pi;
      case Jv:
        return Ni;
    }
  return t;
});
var Mi = Bn.Uint8Array, e0 = "__lodash_hash_undefined__";
function t0(e) {
  return this.__data__.set(e, e0), this;
}
function n0(e) {
  return this.__data__.has(e);
}
function pa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new lr(); ++t < n; )
    this.add(e[t]);
}
pa.prototype.add = pa.prototype.push = t0;
pa.prototype.has = n0;
function r0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function o0(e, t) {
  return e.has(t);
}
var a0 = 1, s0 = 2;
function Bu(e, t, n, r, o, a) {
  var s = n & a0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, p = !0, b = n & s0 ? new pa() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < i; ) {
    var h = e[m], g = t[m];
    if (r)
      var S = s ? r(g, h, m, t, e, a) : r(h, g, m, e, t, a);
    if (S !== void 0) {
      if (S)
        continue;
      p = !1;
      break;
    }
    if (b) {
      if (!r0(t, function(f, E) {
        if (!o0(b, E) && (h === f || o(h, f, n, r, a)))
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
function l0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function i0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var c0 = 1, u0 = 2, d0 = "[object Boolean]", f0 = "[object Date]", p0 = "[object Error]", m0 = "[object Map]", h0 = "[object Number]", g0 = "[object RegExp]", v0 = "[object Set]", b0 = "[object String]", y0 = "[object Symbol]", _0 = "[object ArrayBuffer]", w0 = "[object DataView]", Di = Dn ? Dn.prototype : void 0, qa = Di ? Di.valueOf : void 0;
function k0(e, t, n, r, o, a, s) {
  switch (n) {
    case w0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _0:
      return !(e.byteLength != t.byteLength || !a(new Mi(e), new Mi(t)));
    case d0:
    case f0:
    case h0:
      return Xs(+e, +t);
    case p0:
      return e.name == t.name && e.message == t.message;
    case g0:
    case b0:
      return e == t + "";
    case m0:
      var i = l0;
    case v0:
      var l = r & c0;
      if (i || (i = i0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= u0, s.set(e, t);
      var d = Bu(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case y0:
      if (qa)
        return qa.call(e) == qa.call(t);
  }
  return !1;
}
var T0 = 1, S0 = Object.prototype, E0 = S0.hasOwnProperty;
function A0(e, t, n, r, o, a) {
  var s = n & T0, i = Ii(e), l = i.length, u = Ii(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var m = l; m--; ) {
    var p = i[m];
    if (!(s ? p in t : E0.call(t, p)))
      return !1;
  }
  var b = a.get(e), h = a.get(t);
  if (b && h)
    return b == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var S = s; ++m < l; ) {
    p = i[m];
    var f = e[p], E = t[p];
    if (r)
      var L = s ? r(E, f, p, t, e, a) : r(f, E, p, e, t, a);
    if (!(L === void 0 ? f === E || o(f, E, n, r, a) : L)) {
      g = !1;
      break;
    }
    S || (S = p == "constructor");
  }
  if (g && !S) {
    var T = e.constructor, v = t.constructor;
    T != v && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof v == "function" && v instanceof v) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var C0 = 1, Fi = "[object Arguments]", zi = "[object Array]", Go = "[object Object]", O0 = Object.prototype, Bi = O0.hasOwnProperty;
function L0(e, t, n, r, o, a) {
  var s = yn(e), i = yn(t), l = s ? zi : mr(e), u = i ? zi : mr(t);
  l = l == Fi ? Go : l, u = u == Fi ? Go : u;
  var d = l == Go, m = u == Go, p = l == u;
  if (p && bs(e)) {
    if (!bs(t))
      return !1;
    s = !0, d = !1;
  }
  if (p && !d)
    return a || (a = new er()), s || Du(e) ? Bu(e, t, n, r, o, a) : k0(e, t, l, n, r, o, a);
  if (!(n & C0)) {
    var b = d && Bi.call(e, "__wrapped__"), h = m && Bi.call(t, "__wrapped__");
    if (b || h) {
      var g = b ? e.value() : e, S = h ? t.value() : t;
      return a || (a = new er()), o(g, S, n, r, a);
    }
  }
  return p ? (a || (a = new er()), A0(e, t, n, r, o, a)) : !1;
}
function xa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Xr(e) && !Xr(t) ? e !== e && t !== t : L0(e, t, n, r, xa, o);
}
var I0 = 1, x0 = 2;
function R0(e, t, n, r) {
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
      var d = new er(), m;
      if (!(m === void 0 ? xa(u, l, I0 | x0, r, d) : m))
        return !1;
    }
  }
  return !0;
}
function Vu(e) {
  return e === e && !yr(e);
}
function P0(e) {
  for (var t = Fu(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Vu(o)];
  }
  return t;
}
function ju(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function N0(e) {
  var t = P0(e);
  return t.length == 1 && t[0][2] ? ju(t[0][0], t[0][1]) : function(n) {
    return n === e || R0(n, e, t);
  };
}
function $0(e, t) {
  return e != null && t in Object(e);
}
function M0(e, t, n) {
  t = Ia(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = $o(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Qs(o) && Zs(s, o) && (yn(e) || Js(e)));
}
function Uu(e, t) {
  return e != null && M0(e, t, $0);
}
var D0 = 1, F0 = 2;
function z0(e, t) {
  return el(e) && Vu(t) ? ju($o(e), t) : function(n) {
    var r = gr(n, e);
    return r === void 0 && r === t ? Uu(n, e) : xa(t, r, D0 | F0);
  };
}
function B0(e) {
  return function(t) {
    return t?.[e];
  };
}
function V0(e) {
  return function(t) {
    return nl(t, e);
  };
}
function j0(e) {
  return el(e) ? B0($o(e)) : V0(e);
}
function U0(e) {
  return typeof e == "function" ? e : e == null ? Ru : typeof e == "object" ? yn(e) ? z0(e[0], e[1]) : N0(e) : j0(e);
}
var Ya = function() {
  return Bn.Date.now();
}, H0 = "Expected a function", W0 = Math.max, G0 = Math.min;
function K0(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(H0);
  t = _i(t) || 0, yr(n) && (d = !!n.leading, m = "maxWait" in n, a = m ? W0(_i(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function b(C) {
    var O = r, M = o;
    return r = o = void 0, u = C, s = e.apply(M, O), s;
  }
  function h(C) {
    return u = C, i = setTimeout(f, t), d ? b(C) : s;
  }
  function g(C) {
    var O = C - l, M = C - u, Y = t - O;
    return m ? G0(Y, a - M) : Y;
  }
  function S(C) {
    var O = C - l, M = C - u;
    return l === void 0 || O >= t || O < 0 || m && M >= a;
  }
  function f() {
    var C = Ya();
    if (S(C))
      return E(C);
    i = setTimeout(f, g(C));
  }
  function E(C) {
    return i = void 0, p && r ? b(C) : (r = o = void 0, s);
  }
  function L() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function T() {
    return i === void 0 ? s : E(Ya());
  }
  function v() {
    var C = Ya(), O = S(C);
    if (r = arguments, o = this, l = C, O) {
      if (i === void 0)
        return h(l);
      if (m)
        return clearTimeout(i), i = setTimeout(f, t), b(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return v.cancel = L, v.flush = T, v;
}
function q0(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Jh(e, U0(t), o);
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
function tr(e) {
  return e == null;
}
function Y0(e) {
  return e === void 0;
}
function Z0(e, t, n, r) {
  if (!yr(e))
    return e;
  t = Ia(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = $o(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = yr(d) ? d : Zs(t[o + 1]) ? [] : {});
    }
    ag(i, l, u), i = i[l];
  }
  return e;
}
function X0(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = nl(e, s);
    n(i, s) && Z0(a, Ia(s, e), i);
  }
  return a;
}
function Q0(e, t) {
  return X0(e, t, function(n, r) {
    return Uu(e, r);
  });
}
var J0 = $v(function(e, t) {
  return e == null ? {} : Q0(e, t);
});
const xn = (e) => e === void 0, br = (e) => typeof e == "boolean", Me = (e) => typeof e == "number", vn = (e) => typeof Element > "u" ? !1 : e instanceof Element, eb = (e) => Mt(e) ? !Number.isNaN(Number(e)) : !1;
var tb = Object.defineProperty, nb = Object.defineProperties, rb = Object.getOwnPropertyDescriptors, Vi = Object.getOwnPropertySymbols, ob = Object.prototype.hasOwnProperty, ab = Object.prototype.propertyIsEnumerable, ji = (e, t, n) => t in e ? tb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sb = (e, t) => {
  for (var n in t || (t = {}))
    ob.call(t, n) && ji(e, n, t[n]);
  if (Vi)
    for (var n of Vi(t))
      ab.call(t, n) && ji(e, n, t[n]);
  return e;
}, lb = (e, t) => nb(e, rb(t));
function ib(e, t) {
  var n;
  const r = vr();
  return Hc(() => {
    r.value = e();
  }, lb(sb({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Is(r);
}
var Ui;
const ft = typeof window < "u", cb = (e) => typeof e == "string", Hu = () => {
}, ks = ft && ((Ui = window?.navigator) == null ? void 0 : Ui.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rl(e) {
  return typeof e == "function" ? e() : c(e);
}
function ub(e) {
  return e;
}
function Mo(e) {
  return rf() ? (of(e), !0) : !1;
}
function db(e, t = !0) {
  Bt() ? it(e) : t ? e() : at(e);
}
function Wu(e, t, n = {}) {
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
    }, rl(t));
  }
  return r && (o.value = !0, ft && l()), Mo(i), {
    isPending: Is(o),
    start: l,
    stop: i
  };
}
function Qn(e) {
  var t;
  const n = rl(e);
  return (t = n?.$el) != null ? t : n;
}
const Ra = ft ? window : void 0;
function bn(...e) {
  let t, n, r, o;
  if (cb(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ra) : [t, n, r, o] = e, !t)
    return Hu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, m, p, b) => (d.addEventListener(m, p, b), () => d.removeEventListener(m, p, b)), l = we(() => [Qn(t), rl(o)], ([d, m]) => {
    s(), d && a.push(...n.flatMap((p) => r.map((b) => i(d, p, b, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Mo(u), u;
}
let Hi = !1;
function fb(e, t, n = {}) {
  const { window: r = Ra, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  ks && !Hi && (Hi = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", Hu)));
  let i = !0;
  const l = (p) => o.some((b) => {
    if (typeof b == "string")
      return Array.from(r.document.querySelectorAll(b)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Qn(b);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), d = [
    bn(r, "click", (p) => {
      const b = Qn(e);
      if (!(!b || b === p.target || p.composedPath().includes(b))) {
        if (p.detail === 0 && (i = !l(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: a }),
    bn(r, "pointerdown", (p) => {
      const b = Qn(e);
      b && (i = !p.composedPath().includes(b) && !l(p));
    }, { passive: !0 }),
    s && bn(r, "blur", (p) => {
      var b;
      const h = Qn(e);
      ((b = r.document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function Gu(e, t = !1) {
  const n = U(), r = () => n.value = !!e();
  return r(), db(r, t), n;
}
const Wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gi = "__vueuse_ssr_handlers__";
Wi[Gi] = Wi[Gi] || {};
var Ki = Object.getOwnPropertySymbols, pb = Object.prototype.hasOwnProperty, mb = Object.prototype.propertyIsEnumerable, hb = (e, t) => {
  var n = {};
  for (var r in e)
    pb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ki)
    for (var r of Ki(e))
      t.indexOf(r) < 0 && mb.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ln(e, t, n = {}) {
  const r = n, { window: o = Ra } = r, a = hb(r, ["window"]);
  let s;
  const i = Gu(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = we(() => Qn(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return Mo(d), {
    isSupported: i,
    stop: d
  };
}
var qi = Object.getOwnPropertySymbols, gb = Object.prototype.hasOwnProperty, vb = Object.prototype.propertyIsEnumerable, bb = (e, t) => {
  var n = {};
  for (var r in e)
    gb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qi)
    for (var r of qi(e))
      t.indexOf(r) < 0 && vb.call(e, r) && (n[r] = e[r]);
  return n;
};
function yb(e, t, n = {}) {
  const r = n, { window: o = Ra } = r, a = bb(r, ["window"]);
  let s;
  const i = Gu(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = we(() => Qn(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return Mo(d), {
    isSupported: i,
    stop: d
  };
}
var Yi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yi || (Yi = {}));
var _b = Object.defineProperty, Zi = Object.getOwnPropertySymbols, wb = Object.prototype.hasOwnProperty, kb = Object.prototype.propertyIsEnumerable, Xi = (e, t, n) => t in e ? _b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tb = (e, t) => {
  for (var n in t || (t = {}))
    wb.call(t, n) && Xi(e, n, t[n]);
  if (Zi)
    for (var n of Zi(t))
      kb.call(t, n) && Xi(e, n, t[n]);
  return e;
};
const Sb = {
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
Tb({
  linear: ub
}, Sb);
class Eb extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ol(e, t) {
  throw new Eb(`[${e}] ${t}`);
}
const Qi = {
  current: 0
}, Ji = U(0), Ku = 2e3, ec = Symbol("elZIndexContextKey"), qu = Symbol("zIndexContextKey"), Yu = (e) => {
  const t = Bt() ? ze(ec, Qi) : Qi, n = e || (Bt() ? ze(qu, void 0) : void 0), r = x(() => {
    const s = c(n);
    return Me(s) ? s : Ku;
  }), o = x(() => r.value + Ji.value), a = () => (t.current++, Ji.value = t.current, o.value);
  return !ft && ze(ec), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Ab = {
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
const Cb = (e) => (t, n) => Ob(t, n, c(e)), Ob = (e, t, n) => gr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Lb = (e) => {
  const t = x(() => c(e).name), n = Kr(e) ? e : U(e);
  return {
    lang: t,
    locale: n,
    t: Cb(e)
  };
}, Zu = Symbol("localeContextKey"), al = (e) => {
  const t = e || ze(Zu, U());
  return Lb(x(() => t.value || Ab));
}, Xu = "__epPropKey", be = (e) => e, Ib = (e) => Xt(e) && !!e[Xu], Pa = (e, t) => {
  if (!Xt(e) || Ib(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), mi(e, "default") && m.push(o), d || (d = m.includes(u))), s && (d || (d = s(u))), !d && m.length > 0) {
        const p = [...new Set(m)].map((b) => JSON.stringify(b)).join(", ");
        af(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Xu]: !0
  };
  return mi(e, "default") && (l.default = o), l;
}, Ke = (e) => ma(Object.entries(e).map(([t, n]) => [
  t,
  Pa(n, t)
])), sl = ["", "default", "small", "large"], Na = Pa({
  type: String,
  values: sl,
  required: !1
}), Qu = Symbol("size"), xb = () => {
  const e = ze(Qu, {});
  return x(() => c(e.size) || "");
}, Ju = Symbol("emptyValuesContextKey"), Rb = ["", void 0, null], Pb = void 0, ed = Ke({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => et(e) ? !e() : !e
  }
}), Nb = (e, t) => {
  const n = Bt() ? ze(Ju, U({})) : U({}), r = x(() => e.emptyValues || n.value.emptyValues || Rb), o = x(() => et(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : et(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Pb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, tc = (e) => Object.keys(e), ha = U();
function td(e, t = void 0) {
  return Bt() ? ze(Cu, ha) : ha;
}
function nd(e, t) {
  const n = td(), r = pt(e, x(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || na;
  })), o = al(x(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Yu(x(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Ku;
  })), s = x(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return rd(x(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const rd = (e, t, n = !1) => {
  var r;
  const o = !!Bt(), a = o ? td() : void 0, s = (r = void 0) != null ? r : o ? Mn : void 0;
  if (!s)
    return;
  const i = x(() => {
    const l = c(e);
    return a?.value ? $b(a.value, l) : l;
  });
  return s(Cu, i), s(Zu, x(() => i.value.locale)), s(Ou, x(() => i.value.namespace)), s(qu, x(() => i.value.zIndex)), s(Qu, {
    size: x(() => i.value.size || "")
  }), s(Ju, x(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ha.value) && (ha.value = i.value), i;
}, $b = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...tc(e), ...tc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, St = "update:modelValue", or = "change", nr = "input";
var Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Qr(e, t = "px") {
  if (!e)
    return "";
  if (Me(e) || eb(e))
    return `${e}${t}`;
  if (Mt(e))
    return e;
}
function Mb(e, t) {
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
const _n = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, od = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ad = (e) => (e.install = Oo, e), Db = Ke({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
}), Fb = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), zb = /* @__PURE__ */ oe({
  ...Fb,
  props: Db,
  setup(e) {
    const t = e, n = pt("icon"), r = x(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: xn(o) ? void 0 : Qr(o),
        "--color": a
      };
    });
    return (o, a) => (R(), G("i", qr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      _e(o.$slots, "default")
    ], 16));
  }
});
var Bb = /* @__PURE__ */ Ze(zb, [["__file", "icon.vue"]]);
const dt = _n(Bb);
/*! Element Plus Icons Vue v2.3.1 */
var Vb = /* @__PURE__ */ oe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), sd = Vb, jb = /* @__PURE__ */ oe({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Ub = jb, Hb = /* @__PURE__ */ oe({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (R(), G("svg", {
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
}), Wb = Hb, Gb = /* @__PURE__ */ oe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Kb = Gb, qb = /* @__PURE__ */ oe({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (R(), G("svg", {
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
}), ll = qb, Yb = /* @__PURE__ */ oe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ga = Yb, Zb = /* @__PURE__ */ oe({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (R(), G("svg", {
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
}), Xb = Zb, Qb = /* @__PURE__ */ oe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Jb = Qb, ey = /* @__PURE__ */ oe({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), ld = ey, ty = /* @__PURE__ */ oe({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), ny = ty, ry = /* @__PURE__ */ oe({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), oy = ry, ay = /* @__PURE__ */ oe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), sy = ay, ly = /* @__PURE__ */ oe({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), iy = ly, cy = /* @__PURE__ */ oe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), uy = cy;
const Rn = be([
  String,
  Object,
  Function
]), dy = {
  Close: ga
}, fy = {
  Close: ga
}, va = {
  success: sy,
  warning: uy,
  error: Kb,
  info: Jb
}, id = {
  validating: ld,
  success: Wb,
  error: ll
}, cd = () => ft && /firefox/i.test(window.navigator.userAgent);
let Wt;
const py = {
  height: "0",
  visibility: "hidden",
  overflow: cd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, my = [
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
function hy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: my.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function nc(e, t = 1, n) {
  var r;
  Wt || (Wt = document.createElement("textarea"), document.body.appendChild(Wt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = hy(e);
  i.forEach(([m, p]) => Wt?.style.setProperty(m, p)), Object.entries(py).forEach(([m, p]) => Wt?.style.setProperty(m, p, "important")), Wt.value = e.value || e.placeholder || "";
  let l = Wt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Wt.value = "";
  const d = Wt.scrollHeight - o;
  if (Me(t)) {
    let m = d * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (Me(n)) {
    let m = d * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = Wt.parentNode) == null || r.removeChild(Wt), Wt = void 0, u;
}
const ud = (e) => e, gy = Ke({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Dr = (e) => J0(gy, e), vy = Ke({
  id: {
    type: String,
    default: void 0
  },
  size: Na,
  disabled: Boolean,
  modelValue: {
    type: be([
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
    type: be([Boolean, Object]),
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
    type: Rn
  },
  prefixIcon: {
    type: Rn
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
    type: be([Object, Array, String]),
    default: () => ud({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Dr(["ariaLabel"])
}), by = {
  [St]: (e) => Mt(e),
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
}, yy = ["class", "style"], _y = /^on[A-Z]/, wy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = x(() => (n?.value || []).concat(yy)), o = Bt();
  return o ? x(() => {
    var a;
    return ma(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && _y.test(s))));
  }) : x(() => ({}));
}, il = Symbol("formContextKey"), ba = Symbol("formItemContextKey"), rc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ky = Symbol("elIdInjection"), dd = () => Bt() ? ze(ky, rc) : rc, $a = (e) => {
  const t = dd(), n = Ys();
  return ib(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ma = () => {
  const e = ze(il, void 0), t = ze(ba, void 0);
  return {
    form: e,
    formItem: t
  };
}, cl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = U(!1)), r || (r = U(!1));
  const o = U();
  let a;
  const s = x(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return it(() => {
    a = we([Yn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : $a().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), wa(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, fd = (e) => {
  const t = Bt();
  return x(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Do = (e, t = {}) => {
  const n = U(void 0), r = t.prop ? n : fd("size"), o = t.global ? n : xb(), a = t.form ? { size: void 0 } : ze(il, void 0), s = t.formItem ? { size: void 0 } : ze(ba, void 0);
  return x(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, ul = (e) => {
  const t = fd("disabled"), n = ze(il, void 0);
  return x(() => t.value || c(e) || n?.disabled || !1);
};
function pd(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Bt(), { emit: s } = a, i = vr(), l = U(!1), u = (p) => {
    et(t) && t(p) || l.value || (l.value = !0, s("focus", p), n?.());
  }, d = (p) => {
    var b;
    et(r) && r(p) || p.relatedTarget && ((b = i.value) != null && b.contains(p.relatedTarget)) || (l.value = !1, s("blur", p), o?.());
  }, m = () => {
    var p, b;
    (p = i.value) != null && p.contains(document.activeElement) && i.value !== document.activeElement || (b = e.value) == null || b.focus();
  };
  return we(i, (p) => {
    p && p.setAttribute("tabindex", "-1");
  }), bn(i, "focus", u, !0), bn(i, "blur", d, !0), bn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const Ty = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function md({
  afterComposition: e,
  emit: t
}) {
  const n = U(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !Ty(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, at(() => e(i)));
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
function Sy(e) {
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
const Ey = "ElInput", Ay = oe({
  name: Ey,
  inheritAttrs: !1
}), Cy = /* @__PURE__ */ oe({
  ...Ay,
  props: vy,
  emits: by,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = sf(), a = wy(), s = lf(), i = x(() => [
      r.type === "textarea" ? g.b() : h.b(),
      h.m(p.value),
      h.is("disabled", b.value),
      h.is("exceed", Te.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: K.value && z.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = x(() => [
      h.e("wrapper"),
      h.is("focus", M.value)
    ]), { form: u, formItem: d } = Ma(), { inputId: m } = cl(r, {
      formItemContext: d
    }), p = Do(), b = ul(), h = pt("input"), g = pt("textarea"), S = vr(), f = vr(), E = U(!1), L = U(!1), T = U(), v = vr(r.inputStyle), C = x(() => S.value || f.value), { wrapperRef: O, isFocused: M, handleFocus: Y, handleBlur: ne } = pd(C, {
      beforeFocus() {
        return b.value;
      },
      afterBlur() {
        var k;
        r.validateEvent && ((k = d?.validate) == null || k.call(d, "blur").catch(($) => void 0));
      }
    }), ue = x(() => {
      var k;
      return (k = u?.statusIcon) != null ? k : !1;
    }), re = x(() => d?.validateState || ""), pe = x(() => re.value && id[re.value]), ve = x(() => L.value ? iy : Xb), B = x(() => [
      o.style
    ]), X = x(() => [
      r.inputStyle,
      v.value,
      { resize: r.resize }
    ]), j = x(() => tr(r.modelValue) ? "" : String(r.modelValue)), K = x(() => r.clearable && !b.value && !r.readonly && !!j.value && (M.value || E.value)), z = x(() => r.showPassword && !b.value && !!j.value && (!!j.value || M.value)), me = x(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !b.value && !r.readonly && !r.showPassword), De = x(() => j.value.length), Te = x(() => !!me.value && De.value > Number(r.maxlength)), ke = x(() => !!s.suffix || !!r.suffixIcon || K.value || r.showPassword || me.value || !!re.value && ue.value), [H, je] = Sy(S);
    Ln(f, (k) => {
      if (de(), !me.value || r.resize !== "both")
        return;
      const $ = k[0], { width: he } = $.contentRect;
      T.value = {
        right: `calc(100% - ${he + 15 + 6}px)`
      };
    });
    const ye = () => {
      const { type: k, autosize: $ } = r;
      if (!(!ft || k !== "textarea" || !f.value))
        if ($) {
          const he = Xt($) ? $.minRows : void 0, Ce = Xt($) ? $.maxRows : void 0, Pe = nc(f.value, he, Ce);
          v.value = {
            overflowY: "hidden",
            ...Pe
          }, at(() => {
            f.value.offsetHeight, v.value = Pe;
          });
        } else
          v.value = {
            minHeight: nc(f.value).minHeight
          };
    }, de = ((k) => {
      let $ = !1;
      return () => {
        var he;
        if ($ || !r.autosize)
          return;
        ((he = f.value) == null ? void 0 : he.offsetParent) === null || (k(), $ = !0);
      };
    })(ye), tt = () => {
      const k = C.value, $ = r.formatter ? r.formatter(j.value) : j.value;
      !k || k.value === $ || (k.value = $);
    }, ht = async (k) => {
      H();
      let { value: $ } = k.target;
      if (r.formatter && r.parser && ($ = r.parser($)), !yt.value) {
        if ($ === j.value) {
          tt();
          return;
        }
        n(St, $), n(nr, $), await at(), tt(), je();
      }
    }, qe = (k) => {
      let { value: $ } = k.target;
      r.formatter && r.parser && ($ = r.parser($)), n(or, $);
    }, {
      isComposing: yt,
      handleCompositionStart: ct,
      handleCompositionUpdate: gt,
      handleCompositionEnd: vt
    } = md({ emit: n, afterComposition: ht }), Ue = () => {
      H(), L.value = !L.value, setTimeout(je);
    }, _t = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.focus();
    }, w = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.blur();
    }, A = (k) => {
      E.value = !1, n("mouseleave", k);
    }, D = (k) => {
      E.value = !0, n("mouseenter", k);
    }, Q = (k) => {
      n("keydown", k);
    }, Ae = () => {
      var k;
      (k = C.value) == null || k.select();
    }, ce = () => {
      n(St, ""), n(or, ""), n("clear"), n(nr, "");
    };
    return we(() => r.modelValue, () => {
      var k;
      at(() => ye()), r.validateEvent && ((k = d?.validate) == null || k.call(d, "change").catch(($) => void 0));
    }), we(j, () => tt()), we(() => r.type, async () => {
      await at(), tt(), ye();
    }), it(() => {
      !r.formatter && r.parser, tt(), at(ye);
    }), t({
      input: S,
      textarea: f,
      ref: C,
      textareaStyle: X,
      autosize: Yn(r, "autosize"),
      isComposing: yt,
      focus: _t,
      blur: w,
      select: Ae,
      clear: ce,
      resizeTextarea: ye
    }), (k, $) => (R(), G("div", {
      class: q([
        c(i),
        {
          [c(h).bm("group", "append")]: k.$slots.append,
          [c(h).bm("group", "prepend")]: k.$slots.prepend
        }
      ]),
      style: Lt(c(B)),
      onMouseenter: D,
      onMouseleave: A
    }, [
      ee(" input "),
      k.type !== "textarea" ? (R(), G(Ot, { key: 0 }, [
        ee(" prepend slot "),
        k.$slots.prepend ? (R(), G("div", {
          key: 0,
          class: q(c(h).be("group", "prepend"))
        }, [
          _e(k.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        y("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: q(c(l))
        }, [
          ee(" prefix slot "),
          k.$slots.prefix || k.prefixIcon ? (R(), G("span", {
            key: 0,
            class: q(c(h).e("prefix"))
          }, [
            y("span", {
              class: q(c(h).e("prefix-inner"))
            }, [
              _e(k.$slots, "prefix"),
              k.prefixIcon ? (R(), ie(c(dt), {
                key: 0,
                class: q(c(h).e("icon"))
              }, {
                default: se(() => [
                  (R(), ie(Ft(k.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0),
          y("input", qr({
            id: c(m),
            ref_key: "input",
            ref: S,
            class: c(h).e("inner")
          }, c(a), {
            minlength: k.minlength,
            maxlength: k.maxlength,
            type: k.showPassword ? L.value ? "text" : "password" : k.type,
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
            onCompositionstart: c(ct),
            onCompositionupdate: c(gt),
            onCompositionend: c(vt),
            onInput: ht,
            onChange: qe,
            onKeydown: Q
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(ke) ? (R(), G("span", {
            key: 1,
            class: q(c(h).e("suffix"))
          }, [
            y("span", {
              class: q(c(h).e("suffix-inner"))
            }, [
              !c(K) || !c(z) || !c(me) ? (R(), G(Ot, { key: 0 }, [
                _e(k.$slots, "suffix"),
                k.suffixIcon ? (R(), ie(c(dt), {
                  key: 0,
                  class: q(c(h).e("icon"))
                }, {
                  default: se(() => [
                    (R(), ie(Ft(k.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              c(K) ? (R(), ie(c(dt), {
                key: 1,
                class: q([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: Qe(c(Oo), ["prevent"]),
                onClick: ce
              }, {
                default: se(() => [
                  N(c(ll))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(z) ? (R(), ie(c(dt), {
                key: 2,
                class: q([c(h).e("icon"), c(h).e("password")]),
                onClick: Ue
              }, {
                default: se(() => [
                  (R(), ie(Ft(c(ve))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(me) ? (R(), G("span", {
                key: 3,
                class: q(c(h).e("count"))
              }, [
                y("span", {
                  class: q(c(h).e("count-inner"))
                }, F(c(De)) + " / " + F(k.maxlength), 3)
              ], 2)) : ee("v-if", !0),
              c(re) && c(pe) && c(ue) ? (R(), ie(c(dt), {
                key: 4,
                class: q([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(re) === "validating")
                ])
              }, {
                default: se(() => [
                  (R(), ie(Ft(c(pe))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        k.$slots.append ? (R(), G("div", {
          key: 1,
          class: q(c(h).be("group", "append"))
        }, [
          _e(k.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (R(), G(Ot, { key: 1 }, [
        ee(" textarea "),
        y("textarea", qr({
          id: c(m),
          ref_key: "textarea",
          ref: f,
          class: [c(g).e("inner"), c(h).is("focus", c(M))]
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
          onCompositionstart: c(ct),
          onCompositionupdate: c(gt),
          onCompositionend: c(vt),
          onInput: ht,
          onFocus: c(Y),
          onBlur: c(ne),
          onChange: qe,
          onKeydown: Q
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(me) ? (R(), G("span", {
          key: 0,
          style: Lt(T.value),
          class: q(c(h).e("count"))
        }, F(c(De)) + " / " + F(k.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Oy = /* @__PURE__ */ Ze(Cy, [["__file", "input.vue"]]);
const Ly = _n(Oy), zr = 4, Iy = {
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
}, xy = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), dl = Symbol("scrollbarContextKey"), Ry = Ke({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Py = "Thumb", Ny = /* @__PURE__ */ oe({
  __name: "thumb",
  props: Ry,
  setup(e) {
    const t = e, n = ze(dl), r = pt("scrollbar");
    n || ol(Py, "can not inject scrollbar context");
    const o = U(), a = U(), s = U({}), i = U(!1);
    let l = !1, u = !1, d = ft ? document.onselectstart : null;
    const m = x(() => Iy[t.vertical ? "vertical" : "horizontal"]), p = x(() => xy({
      size: t.size,
      move: t.move,
      bar: m.value
    })), b = x(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), h = (C) => {
      var O;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), S(C);
      const M = C.currentTarget;
      M && (s.value[m.value.axis] = M[m.value.offset] - (C[m.value.client] - M.getBoundingClientRect()[m.value.direction]));
    }, g = (C) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(C.target.getBoundingClientRect()[m.value.direction] - C[m.value.client]), M = a.value[m.value.offset] / 2, Y = (O - M) * 100 * b.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = Y * n.wrapElement[m.value.scrollSize] / 100;
    }, S = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (C) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[m.value.axis];
      if (!O)
        return;
      const M = (o.value.getBoundingClientRect()[m.value.direction] - C[m.value.client]) * -1, Y = a.value[m.value.offset] - O, ne = (M - Y) * 100 * b.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = ne * n.wrapElement[m.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", E), v(), u && (i.value = !1);
    }, L = () => {
      u = !1, i.value = !!t.size;
    }, T = () => {
      u = !0, i.value = l;
    };
    zn(() => {
      v(), document.removeEventListener("mouseup", E);
    });
    const v = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return bn(Yn(n, "scrollbarElement"), "mousemove", L), bn(Yn(n, "scrollbarElement"), "mouseleave", T), (C, O) => (R(), ie(ao, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: se(() => [
        bt(y("div", {
          ref_key: "instance",
          ref: o,
          class: q([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: g
        }, [
          y("div", {
            ref_key: "thumb",
            ref: a,
            class: q(c(r).e("thumb")),
            style: Lt(c(p)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [rr, C.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var oc = /* @__PURE__ */ Ze(Ny, [["__file", "thumb.vue"]]);
const $y = Ke({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), My = /* @__PURE__ */ oe({
  __name: "bar",
  props: $y,
  setup(e, { expose: t }) {
    const n = e, r = ze(dl), o = U(0), a = U(0), s = U(""), i = U(""), l = U(1), u = U(1);
    return t({
      handleScroll: (p) => {
        if (p) {
          const b = p.offsetHeight - zr, h = p.offsetWidth - zr;
          a.value = p.scrollTop * 100 / b * l.value, o.value = p.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const p = r?.wrapElement;
        if (!p)
          return;
        const b = p.offsetHeight - zr, h = p.offsetWidth - zr, g = b ** 2 / p.scrollHeight, S = h ** 2 / p.scrollWidth, f = Math.max(g, n.minSize), E = Math.max(S, n.minSize);
        l.value = g / (b - g) / (f / (b - f)), u.value = S / (h - S) / (E / (h - E)), i.value = f + zr < b ? `${f}px` : "", s.value = E + zr < h ? `${E}px` : "";
      }
    }), (p, b) => (R(), G(Ot, null, [
      N(oc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(oc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Dy = /* @__PURE__ */ Ze(My, [["__file", "bar.vue"]]);
const Fy = Ke({
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
    type: be([String, Object, Array]),
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
  ...Dr(["ariaLabel", "ariaOrientation"])
}), zy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Me)
}, By = "ElScrollbar", Vy = oe({
  name: By
}), jy = /* @__PURE__ */ oe({
  ...Vy,
  props: Fy,
  emits: zy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = pt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = U(), d = U(), m = U(), p = U(), b = x(() => {
      const v = {};
      return r.height && (v.height = Qr(r.height)), r.maxHeight && (v.maxHeight = Qr(r.maxHeight)), [r.wrapStyle, v];
    }), h = x(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = x(() => [o.e("view"), r.viewClass]), S = () => {
      var v;
      d.value && ((v = p.value) == null || v.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(v, C) {
      Xt(v) ? d.value.scrollTo(v) : Me(v) && Me(C) && d.value.scrollTo(v, C);
    }
    const E = (v) => {
      Me(v) && (d.value.scrollTop = v);
    }, L = (v) => {
      Me(v) && (d.value.scrollLeft = v);
    }, T = () => {
      var v;
      (v = p.value) == null || v.update();
    };
    return we(() => r.noresize, (v) => {
      v ? (a?.(), s?.()) : ({ stop: a } = Ln(m, T), s = bn("resize", T));
    }, { immediate: !0 }), we(() => [r.maxHeight, r.height], () => {
      r.native || at(() => {
        var v;
        T(), d.value && ((v = p.value) == null || v.handleScroll(d.value));
      });
    }), Mn(dl, Lr({
      scrollbarElement: u,
      wrapElement: d
    })), cf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), it(() => {
      r.native || at(() => {
        T();
      });
    }), Wc(() => T()), t({
      wrapRef: d,
      update: T,
      scrollTo: f,
      setScrollTop: E,
      setScrollLeft: L,
      handleScroll: S
    }), (v, C) => (R(), G("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: q(c(o).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: d,
        class: q(c(h)),
        style: Lt(c(b)),
        tabindex: v.tabindex,
        onScroll: S
      }, [
        (R(), ie(Ft(v.tag), {
          id: v.id,
          ref_key: "resizeRef",
          ref: m,
          class: q(c(g)),
          style: Lt(v.viewStyle),
          role: v.role,
          "aria-label": v.ariaLabel,
          "aria-orientation": v.ariaOrientation
        }, {
          default: se(() => [
            _e(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      v.native ? ee("v-if", !0) : (R(), ie(Dy, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        always: v.always,
        "min-size": v.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Uy = /* @__PURE__ */ Ze(jy, [["__file", "scrollbar.vue"]]);
const Hy = _n(Uy), fl = Symbol("popper"), hd = Symbol("popperContent"), Wy = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], gd = Ke({
  role: {
    type: String,
    values: Wy,
    default: "tooltip"
  }
}), Gy = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), Ky = /* @__PURE__ */ oe({
  ...Gy,
  props: gd,
  setup(e, { expose: t }) {
    const n = e, r = U(), o = U(), a = U(), s = U(), i = x(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Mn(fl, l), (u, d) => _e(u.$slots, "default");
  }
});
var qy = /* @__PURE__ */ Ze(Ky, [["__file", "popper.vue"]]);
const vd = Ke({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Yy = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Zy = /* @__PURE__ */ oe({
  ...Yy,
  props: vd,
  setup(e, { expose: t }) {
    const n = e, r = pt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = ze(hd, void 0);
    return we(() => n.arrowOffset, (i) => {
      o.value = i;
    }), zn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (R(), G("span", {
      ref_key: "arrowRef",
      ref: a,
      class: q(c(r).e("arrow")),
      style: Lt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Xy = /* @__PURE__ */ Ze(Zy, [["__file", "arrow.vue"]]);
const bd = Ke({
  virtualRef: {
    type: be(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: be(Function)
  },
  onMouseleave: {
    type: be(Function)
  },
  onClick: {
    type: be(Function)
  },
  onKeydown: {
    type: be(Function)
  },
  onFocus: {
    type: be(Function)
  },
  onBlur: {
    type: be(Function)
  },
  onContextmenu: {
    type: be(Function)
  },
  id: String,
  open: Boolean
}), yd = Symbol("elForwardRef"), Qy = (e) => {
  Mn(yd, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Jy = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Ts = (e) => {
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
}, e1 = "ElOnlyChild", t1 = oe({
  name: e1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ze(yd), a = Jy((r = o?.setForwardRef) != null ? r : Oo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = _d(i);
      return l ? bt(uf(l, n), [[a]]) : null;
    };
  }
});
function _d(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Xt(n))
      switch (n.type) {
        case df:
          continue;
        case Uc:
        case "svg":
          return ac(n);
        case Ot:
          return _d(n.children);
        default:
          return n;
      }
    return ac(n);
  }
  return null;
}
function ac(e) {
  const t = pt("only-child");
  return N("span", {
    class: t.e("content")
  }, [e]);
}
const n1 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), r1 = /* @__PURE__ */ oe({
  ...n1,
  props: bd,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ze(fl, void 0);
    Qy(o);
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
    return it(() => {
      we(() => n.virtualRef, (m) => {
        m && (o.value = Qn(m));
      }, {
        immediate: !0
      }), we(o, (m, p) => {
        u?.(), u = void 0, vn(m) && (d.forEach((b) => {
          var h;
          const g = n[b];
          g && (m.addEventListener(b.slice(2).toLowerCase(), g), (h = p?.removeEventListener) == null || h.call(p, b.slice(2).toLowerCase(), g));
        }), Ts(m) && (u = we([a, s, i, l], (b) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            tr(b[g]) ? m.removeAttribute(h) : m.setAttribute(h, b[g]);
          });
        }, { immediate: !0 }))), vn(p) && Ts(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((b) => p.removeAttribute(b));
      }, {
        immediate: !0
      });
    }), zn(() => {
      if (u?.(), u = void 0, o.value && vn(o.value)) {
        const m = o.value;
        d.forEach((p) => {
          const b = n[p];
          b && m.removeEventListener(p.slice(2).toLowerCase(), b);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, p) => m.virtualTriggering ? ee("v-if", !0) : (R(), ie(c(t1), qr({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: se(() => [
        _e(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var o1 = /* @__PURE__ */ Ze(r1, [["__file", "trigger.vue"]]);
const Za = "focus-trap.focus-after-trapped", Xa = "focus-trap.focus-after-released", a1 = "focus-trap.focusout-prevented", sc = {
  cancelable: !0,
  bubbles: !1
}, s1 = {
  cancelable: !0,
  bubbles: !1
}, lc = "focusAfterTrapped", ic = "focusAfterReleased", l1 = Symbol("elFocusTrap"), pl = U(), Da = U(0), ml = U(0);
let Ko = 0;
const wd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, cc = (e, t) => {
  for (const n of e)
    if (!i1(n, t))
      return n;
}, i1 = (e, t) => {
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
}, c1 = (e) => {
  const t = wd(e), n = cc(t, e), r = cc(t.reverse(), e);
  return [n, r];
}, u1 = (e) => e instanceof HTMLInputElement && "select" in e, Kn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    vn(e) && !Ts(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), ml.value = window.performance.now(), e !== n && u1(e) && t && e.select(), vn(e) && r && e.removeAttribute("tabindex");
  }
};
function uc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const d1 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = uc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = uc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, f1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Kn(r, t), document.activeElement !== n)
      return;
}, dc = d1(), p1 = () => Da.value > ml.value, qo = () => {
  pl.value = "pointer", Da.value = window.performance.now();
}, fc = () => {
  pl.value = "keyboard", Da.value = window.performance.now();
}, m1 = () => (it(() => {
  Ko === 0 && (document.addEventListener("mousedown", qo), document.addEventListener("touchstart", qo), document.addEventListener("keydown", fc)), Ko++;
}), zn(() => {
  Ko--, Ko <= 0 && (document.removeEventListener("mousedown", qo), document.removeEventListener("touchstart", qo), document.removeEventListener("keydown", fc));
}), {
  focusReason: pl,
  lastUserFocusTimestamp: Da,
  lastAutomatedFocusTimestamp: ml
}), Yo = (e) => new CustomEvent(a1, {
  ...s1,
  detail: e
}), Nn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Wr = [];
const pc = (e) => {
  e.code === Nn.esc && Wr.forEach((t) => t(e));
}, h1 = (e) => {
  it(() => {
    Wr.length === 0 && document.addEventListener("keydown", pc), ft && Wr.push(e);
  }), zn(() => {
    Wr = Wr.filter((t) => t !== e), Wr.length === 0 && ft && document.removeEventListener("keydown", pc);
  });
}, g1 = oe({
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
    lc,
    ic,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = U();
    let r, o;
    const { focusReason: a } = m1();
    h1((h) => {
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
      const { code: g, altKey: S, ctrlKey: f, metaKey: E, currentTarget: L, shiftKey: T } = h, { loop: v } = e, C = g === Nn.tab && !S && !f && !E, O = document.activeElement;
      if (C && O) {
        const M = L, [Y, ne] = c1(M);
        if (Y && ne) {
          if (!T && O === ne) {
            const re = Yo({
              focusReason: a.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), v && Kn(Y, !0));
          } else if (T && [Y, M].includes(O)) {
            const re = Yo({
              focusReason: a.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), v && Kn(ne, !0));
          }
        } else if (O === M) {
          const re = Yo({
            focusReason: a.value
          });
          t("focusout-prevented", re), re.defaultPrevented || h.preventDefault();
        }
      }
    };
    Mn(l1, {
      focusTrapRef: n,
      onKeydown: i
    }), we(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), we([n], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", d), g.removeEventListener("focusout", m));
    });
    const l = (h) => {
      t(lc, h);
    }, u = (h) => t(ic, h), d = (h) => {
      const g = c(n);
      if (!g)
        return;
      const S = h.target, f = h.relatedTarget, E = S && g.contains(S);
      e.trapped || f && g.contains(f) || (r = f), E && t("focusin", h), !s.paused && e.trapped && (E ? o = S : Kn(o, !0));
    }, m = (h) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const S = h.relatedTarget;
          !tr(S) && !g.contains(S) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = Yo({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Kn(o, !0);
            }
          }, 0);
        } else {
          const S = h.target;
          S && g.contains(S) || t("focusout", h);
        }
    };
    async function p() {
      await at();
      const h = c(n);
      if (h) {
        dc.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const f = new Event(Za, sc);
          h.addEventListener(Za, l), h.dispatchEvent(f), f.defaultPrevented || at(() => {
            let E = e.focusStartEl;
            Mt(E) || (Kn(E), document.activeElement !== E && (E = "first")), E === "first" && f1(wd(h), !0), (document.activeElement === g || E === "container") && Kn(h);
          });
        }
      }
    }
    function b() {
      const h = c(n);
      if (h) {
        h.removeEventListener(Za, l);
        const g = new CustomEvent(Xa, {
          ...sc,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(Xa, u), h.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !p1() || h.contains(document.activeElement)) && Kn(r ?? document.body), h.removeEventListener(Xa, u), dc.remove(s);
      }
    }
    return it(() => {
      e.trapped && p(), we(() => e.trapped, (h) => {
        h ? p() : b();
      });
    }), zn(() => {
      e.trapped && b(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function v1(e, t, n, r, o, a) {
  return _e(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var b1 = /* @__PURE__ */ Ze(g1, [["render", v1], ["__file", "focus-trap.vue"]]), Gt = "top", rn = "bottom", on = "right", Kt = "left", hl = "auto", Fo = [Gt, rn, on, Kt], Jr = "start", xo = "end", y1 = "clippingParents", kd = "viewport", fo = "popper", _1 = "reference", mc = Fo.reduce(function(e, t) {
  return e.concat([t + "-" + Jr, t + "-" + xo]);
}, []), Fa = [].concat(Fo, [hl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Jr, t + "-" + xo]);
}, []), w1 = "beforeRead", k1 = "read", T1 = "afterRead", S1 = "beforeMain", E1 = "main", A1 = "afterMain", C1 = "beforeWrite", O1 = "write", L1 = "afterWrite", I1 = [w1, k1, T1, S1, E1, A1, C1, O1, L1];
function Fn(e) {
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
function Rr(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function nn(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function x1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !nn(a) || !Fn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function R1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !nn(o) || !Fn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Td = { name: "applyStyles", enabled: !0, phase: "write", fn: x1, effect: R1, requires: ["computeStyles"] };
function $n(e) {
  return e.split("-")[0];
}
var Or = Math.max, ya = Math.min, eo = Math.round;
function Ss() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Sd() {
  return !/^((?!chrome|android).)*safari/i.test(Ss());
}
function to(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && nn(e) && (o = e.offsetWidth > 0 && eo(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && eo(r.height) / e.offsetHeight || 1);
  var s = Rr(e) ? Qt(e) : window, i = s.visualViewport, l = !Sd() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, p = r.height / a;
  return { width: m, height: p, top: d, right: u + m, bottom: d + p, left: u, x: u, y: d };
}
function vl(e) {
  var t = to(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Ed(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && gl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ar(e) {
  return Qt(e).getComputedStyle(e);
}
function P1(e) {
  return ["table", "td", "th"].indexOf(Fn(e)) >= 0;
}
function kr(e) {
  return ((Rr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function za(e) {
  return Fn(e) === "html" ? e : e.assignedSlot || e.parentNode || (gl(e) ? e.host : null) || kr(e);
}
function hc(e) {
  return !nn(e) || ar(e).position === "fixed" ? null : e.offsetParent;
}
function N1(e) {
  var t = /firefox/i.test(Ss()), n = /Trident/i.test(Ss());
  if (n && nn(e)) {
    var r = ar(e);
    if (r.position === "fixed") return null;
  }
  var o = za(e);
  for (gl(o) && (o = o.host); nn(o) && ["html", "body"].indexOf(Fn(o)) < 0; ) {
    var a = ar(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function zo(e) {
  for (var t = Qt(e), n = hc(e); n && P1(n) && ar(n).position === "static"; ) n = hc(n);
  return n && (Fn(n) === "html" || Fn(n) === "body" && ar(n).position === "static") ? t : n || N1(e) || t;
}
function bl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wo(e, t, n) {
  return Or(e, ya(t, n));
}
function $1(e, t, n) {
  var r = wo(e, t, n);
  return r > n ? n : r;
}
function Ad() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Cd(e) {
  return Object.assign({}, Ad(), e);
}
function Od(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var M1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Cd(typeof e != "number" ? e : Od(e, Fo));
};
function D1(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = $n(n.placement), l = bl(i), u = [Kt, on].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = M1(o.padding, n), p = vl(a), b = l === "y" ? Gt : Kt, h = l === "y" ? rn : on, g = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], S = s[l] - n.rects.reference[l], f = zo(a), E = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, L = g / 2 - S / 2, T = m[b], v = E - p[d] - m[h], C = E / 2 - p[d] / 2 + L, O = wo(T, C, v), M = l;
    n.modifiersData[r] = (t = {}, t[M] = O, t.centerOffset = O - C, t);
  }
}
function F1(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ed(t.elements.popper, o) && (t.elements.arrow = o));
}
var z1 = { name: "arrow", enabled: !0, phase: "main", fn: D1, effect: F1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function no(e) {
  return e.split("-")[1];
}
var B1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function V1(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: eo(n * o) / o || 0, y: eo(r * o) / o || 0 };
}
function gc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, p = s.x, b = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, S = typeof d == "function" ? d({ x: b, y: g }) : { x: b, y: g };
  b = S.x, g = S.y;
  var f = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), L = Kt, T = Gt, v = window;
  if (u) {
    var C = zo(n), O = "clientHeight", M = "clientWidth";
    if (C === Qt(n) && (C = kr(n), ar(C).position !== "static" && i === "absolute" && (O = "scrollHeight", M = "scrollWidth")), C = C, o === Gt || (o === Kt || o === on) && a === xo) {
      T = rn;
      var Y = m && C === v && v.visualViewport ? v.visualViewport.height : C[O];
      g -= Y - r.height, g *= l ? 1 : -1;
    }
    if (o === Kt || (o === Gt || o === rn) && a === xo) {
      L = on;
      var ne = m && C === v && v.visualViewport ? v.visualViewport.width : C[M];
      b -= ne - r.width, b *= l ? 1 : -1;
    }
  }
  var ue = Object.assign({ position: i }, u && B1), re = d === !0 ? V1({ x: b, y: g }, Qt(n)) : { x: b, y: g };
  if (b = re.x, g = re.y, l) {
    var pe;
    return Object.assign({}, ue, (pe = {}, pe[T] = E ? "0" : "", pe[L] = f ? "0" : "", pe.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + g + "px)" : "translate3d(" + b + "px, " + g + "px, 0)", pe));
  }
  return Object.assign({}, ue, (t = {}, t[T] = E ? g + "px" : "", t[L] = f ? b + "px" : "", t.transform = "", t));
}
function j1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: $n(t.placement), variation: no(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ld = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: j1, data: {} }, Zo = { passive: !0 };
function U1(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Zo);
  }), i && l.addEventListener("resize", n.update, Zo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Zo);
    }), i && l.removeEventListener("resize", n.update, Zo);
  };
}
var Id = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: U1, data: {} }, H1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ra(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return H1[t];
  });
}
var W1 = { start: "end", end: "start" };
function vc(e) {
  return e.replace(/start|end/g, function(t) {
    return W1[t];
  });
}
function yl(e) {
  var t = Qt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function _l(e) {
  return to(kr(e)).left + yl(e).scrollLeft;
}
function G1(e, t) {
  var n = Qt(e), r = kr(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Sd();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + _l(e), y: l };
}
function K1(e) {
  var t, n = kr(e), r = yl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Or(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Or(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + _l(e), l = -r.scrollTop;
  return ar(o || n).direction === "rtl" && (i += Or(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function wl(e) {
  var t = ar(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function xd(e) {
  return ["html", "body", "#document"].indexOf(Fn(e)) >= 0 ? e.ownerDocument.body : nn(e) && wl(e) ? e : xd(za(e));
}
function ko(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = xd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Qt(r), s = o ? [a].concat(a.visualViewport || [], wl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(ko(za(s)));
}
function Es(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function q1(e, t) {
  var n = to(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function bc(e, t, n) {
  return t === kd ? Es(G1(e, n)) : Rr(t) ? q1(t, n) : Es(K1(kr(e)));
}
function Y1(e) {
  var t = ko(za(e)), n = ["absolute", "fixed"].indexOf(ar(e).position) >= 0, r = n && nn(e) ? zo(e) : e;
  return Rr(r) ? t.filter(function(o) {
    return Rr(o) && Ed(o, r) && Fn(o) !== "body";
  }) : [];
}
function Z1(e, t, n, r) {
  var o = t === "clippingParents" ? Y1(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = bc(e, u, r);
    return l.top = Or(d.top, l.top), l.right = ya(d.right, l.right), l.bottom = ya(d.bottom, l.bottom), l.left = Or(d.left, l.left), l;
  }, bc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Rd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? $n(r) : null, a = r ? no(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Gt:
      l = { x: s, y: t.y - n.height };
      break;
    case rn:
      l = { x: s, y: t.y + t.height };
      break;
    case on:
      l = { x: t.x + t.width, y: i };
      break;
    case Kt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? bl(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Jr:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? y1 : i, u = n.rootBoundary, d = u === void 0 ? kd : u, m = n.elementContext, p = m === void 0 ? fo : m, b = n.altBoundary, h = b === void 0 ? !1 : b, g = n.padding, S = g === void 0 ? 0 : g, f = Cd(typeof S != "number" ? S : Od(S, Fo)), E = p === fo ? _1 : fo, L = e.rects.popper, T = e.elements[h ? E : p], v = Z1(Rr(T) ? T : T.contextElement || kr(e.elements.popper), l, d, s), C = to(e.elements.reference), O = Rd({ reference: C, element: L, placement: o }), M = Es(Object.assign({}, L, O)), Y = p === fo ? M : C, ne = { top: v.top - Y.top + f.top, bottom: Y.bottom - v.bottom + f.bottom, left: v.left - Y.left + f.left, right: Y.right - v.right + f.right }, ue = e.modifiersData.offset;
  if (p === fo && ue) {
    var re = ue[o];
    Object.keys(ne).forEach(function(pe) {
      var ve = [on, rn].indexOf(pe) >= 0 ? 1 : -1, B = [Gt, rn].indexOf(pe) >= 0 ? "y" : "x";
      ne[pe] += re[B] * ve;
    });
  }
  return ne;
}
function X1(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Fa : l, d = no(r), m = d ? i ? mc : mc.filter(function(h) {
    return no(h) === d;
  }) : Fo, p = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = m);
  var b = p.reduce(function(h, g) {
    return h[g] = Ro(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[$n(g)], h;
  }, {});
  return Object.keys(b).sort(function(h, g) {
    return b[h] - b[g];
  });
}
function Q1(e) {
  if ($n(e) === hl) return [];
  var t = ra(e);
  return [vc(e), t, vc(t)];
}
function J1(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, p = n.altBoundary, b = n.flipVariations, h = b === void 0 ? !0 : b, g = n.allowedAutoPlacements, S = t.options.placement, f = $n(S), E = f === S, L = l || (E || !h ? [ra(S)] : Q1(S)), T = [S].concat(L).reduce(function(H, je) {
      return H.concat($n(je) === hl ? X1(t, { placement: je, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: g }) : je);
    }, []), v = t.rects.reference, C = t.rects.popper, O = /* @__PURE__ */ new Map(), M = !0, Y = T[0], ne = 0; ne < T.length; ne++) {
      var ue = T[ne], re = $n(ue), pe = no(ue) === Jr, ve = [Gt, rn].indexOf(re) >= 0, B = ve ? "width" : "height", X = Ro(t, { placement: ue, boundary: d, rootBoundary: m, altBoundary: p, padding: u }), j = ve ? pe ? on : Kt : pe ? rn : Gt;
      v[B] > C[B] && (j = ra(j));
      var K = ra(j), z = [];
      if (a && z.push(X[re] <= 0), i && z.push(X[j] <= 0, X[K] <= 0), z.every(function(H) {
        return H;
      })) {
        Y = ue, M = !1;
        break;
      }
      O.set(ue, z);
    }
    if (M) for (var me = h ? 3 : 1, De = function(H) {
      var je = T.find(function(ye) {
        var Xe = O.get(ye);
        if (Xe) return Xe.slice(0, H).every(function(de) {
          return de;
        });
      });
      if (je) return Y = je, "break";
    }, Te = me; Te > 0; Te--) {
      var ke = De(Te);
      if (ke === "break") break;
    }
    t.placement !== Y && (t.modifiersData[r]._skip = !0, t.placement = Y, t.reset = !0);
  }
}
var e_ = { name: "flip", enabled: !0, phase: "main", fn: J1, requiresIfExists: ["offset"], data: { _skip: !1 } };
function yc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function _c(e) {
  return [Gt, on, rn, Kt].some(function(t) {
    return e[t] >= 0;
  });
}
function t_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ro(t, { elementContext: "reference" }), i = Ro(t, { altBoundary: !0 }), l = yc(s, r), u = yc(i, o, a), d = _c(l), m = _c(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var n_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: t_ };
function r_(e, t, n) {
  var r = $n(e), o = [Kt, Gt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Kt, on].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function o_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Fa.reduce(function(d, m) {
    return d[m] = r_(m, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var a_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: o_ };
function s_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Rd({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Pd = { name: "popperOffsets", enabled: !0, phase: "read", fn: s_, data: {} };
function l_(e) {
  return e === "x" ? "y" : "x";
}
function i_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, p = n.tether, b = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, S = Ro(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: d }), f = $n(t.placement), E = no(t.placement), L = !E, T = bl(f), v = l_(T), C = t.modifiersData.popperOffsets, O = t.rects.reference, M = t.rects.popper, Y = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, ne = typeof Y == "number" ? { mainAxis: Y, altAxis: Y } : Object.assign({ mainAxis: 0, altAxis: 0 }, Y), ue = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, re = { x: 0, y: 0 };
  if (C) {
    if (a) {
      var pe, ve = T === "y" ? Gt : Kt, B = T === "y" ? rn : on, X = T === "y" ? "height" : "width", j = C[T], K = j + S[ve], z = j - S[B], me = b ? -M[X] / 2 : 0, De = E === Jr ? O[X] : M[X], Te = E === Jr ? -M[X] : -O[X], ke = t.elements.arrow, H = b && ke ? vl(ke) : { width: 0, height: 0 }, je = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ad(), ye = je[ve], Xe = je[B], de = wo(0, O[X], H[X]), tt = L ? O[X] / 2 - me - de - ye - ne.mainAxis : De - de - ye - ne.mainAxis, ht = L ? -O[X] / 2 + me + de + Xe + ne.mainAxis : Te + de + Xe + ne.mainAxis, qe = t.elements.arrow && zo(t.elements.arrow), yt = qe ? T === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, ct = (pe = ue?.[T]) != null ? pe : 0, gt = j + tt - ct - yt, vt = j + ht - ct, Ue = wo(b ? ya(K, gt) : K, j, b ? Or(z, vt) : z);
      C[T] = Ue, re[T] = Ue - j;
    }
    if (i) {
      var _t, w = T === "x" ? Gt : Kt, A = T === "x" ? rn : on, D = C[v], Q = v === "y" ? "height" : "width", Ae = D + S[w], ce = D - S[A], k = [Gt, Kt].indexOf(f) !== -1, $ = (_t = ue?.[v]) != null ? _t : 0, he = k ? Ae : D - O[Q] - M[Q] - $ + ne.altAxis, Ce = k ? D + O[Q] + M[Q] - $ - ne.altAxis : ce, Pe = b && k ? $1(he, D, Ce) : wo(b ? he : Ae, D, b ? Ce : ce);
      C[v] = Pe, re[v] = Pe - D;
    }
    t.modifiersData[r] = re;
  }
}
var c_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: i_, requiresIfExists: ["offset"] };
function u_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function d_(e) {
  return e === Qt(e) || !nn(e) ? yl(e) : u_(e);
}
function f_(e) {
  var t = e.getBoundingClientRect(), n = eo(t.width) / e.offsetWidth || 1, r = eo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function p_(e, t, n) {
  n === void 0 && (n = !1);
  var r = nn(t), o = nn(t) && f_(t), a = kr(t), s = to(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Fn(t) !== "body" || wl(a)) && (i = d_(t)), nn(t) ? (l = to(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = _l(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function m_(e) {
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
function h_(e) {
  var t = m_(e);
  return I1.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function g_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function v_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var wc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function kc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function kl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? wc : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, wc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, p = { state: u, setOptions: function(g) {
      var S = typeof g == "function" ? g(u.options) : g;
      h(), u.options = Object.assign({}, a, u.options, S), u.scrollParents = { reference: Rr(s) ? ko(s) : s.contextElement ? ko(s.contextElement) : [], popper: ko(i) };
      var f = h_(v_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(E) {
        return E.enabled;
      }), b(), p.update();
    }, forceUpdate: function() {
      if (!m) {
        var g = u.elements, S = g.reference, f = g.popper;
        if (kc(S, f)) {
          u.rects = { reference: p_(S, zo(f), u.options.strategy === "fixed"), popper: vl(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var L = u.orderedModifiers[E], T = L.fn, v = L.options, C = v === void 0 ? {} : v, O = L.name;
            typeof T == "function" && (u = T({ state: u, options: C, name: O, instance: p }) || u);
          }
        }
      }
    }, update: g_(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!kc(s, i)) return p;
    p.setOptions(l).then(function(g) {
      !m && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function b() {
      u.orderedModifiers.forEach(function(g) {
        var S = g.name, f = g.options, E = f === void 0 ? {} : f, L = g.effect;
        if (typeof L == "function") {
          var T = L({ state: u, name: S, instance: p, options: E }), v = function() {
          };
          d.push(T || v);
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
kl();
var b_ = [Id, Pd, Ld, Td];
kl({ defaultModifiers: b_ });
var y_ = [Id, Pd, Ld, Td, a_, e_, c_, z1, n_], __ = kl({ defaultModifiers: y_ });
const w_ = ["fixed", "absolute"], k_ = Ke({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: be(Array),
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
    type: be(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: w_,
    default: "absolute"
  }
}), Nd = Ke({
  ...k_,
  id: String,
  style: {
    type: be([String, Array, Object])
  },
  className: {
    type: be([String, Array, Object])
  },
  effect: {
    type: be(String),
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
    type: be([String, Array, Object])
  },
  popperStyle: {
    type: be([String, Array, Object])
  },
  referenceEl: {
    type: be(Object)
  },
  triggerTargetEl: {
    type: be(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Dr(["ariaLabel"])
}), T_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, S_ = (e, t) => {
  const n = U(!1), r = U();
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
}, E_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...C_(e), ...t]
  };
  return O_(a, o?.modifiers), a;
}, A_ = (e) => {
  if (ft)
    return Qn(e);
};
function C_(e) {
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
function O_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const L_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = I_(l);
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
  }), a = vr(), s = U({
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
  return we(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), we([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = __(l, u, c(o)));
  }), zn(() => {
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
function I_(e) {
  const t = Object.keys(e.elements), n = ma(t.map((o) => [o, e.styles[o] || {}])), r = ma(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const x_ = 0, R_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ze(fl, void 0), a = U(), s = U(), i = x(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = x(() => {
    var f;
    const E = c(a), L = (f = c(s)) != null ? f : x_;
    return {
      name: "arrow",
      enabled: !Y0(E),
      options: {
        element: E,
        padding: L
      }
    };
  }), u = x(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...E_(e, [
      c(l),
      c(i)
    ])
  })), d = x(() => A_(e.referenceEl) || c(r)), { attributes: m, state: p, styles: b, update: h, forceUpdate: g, instanceRef: S } = L_(d, n, u);
  return we(S, (f) => t.value = f), it(() => {
    we(() => {
      var f;
      return (f = c(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: S,
    state: p,
    styles: b,
    role: o,
    forceUpdate: g,
    update: h
  };
}, P_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Yu(), a = pt("popper"), s = x(() => c(t).popper), i = U(Me(e.zIndex) ? e.zIndex : o()), l = x(() => [
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
      i.value = Me(e.zIndex) ? e.zIndex : o();
    }
  };
}, N_ = oe({
  name: "ElPopperContent"
}), $_ = /* @__PURE__ */ oe({
  ...N_,
  props: Nd,
  emits: T_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = S_(r, n), { attributes: m, arrowRef: p, contentRef: b, styles: h, instanceRef: g, role: S, update: f } = R_(r), {
      ariaModal: E,
      arrowStyle: L,
      contentAttrs: T,
      contentClass: v,
      contentStyle: C,
      updateZIndex: O
    } = P_(r, {
      styles: h,
      attributes: m,
      role: S
    }), M = ze(ba, void 0), Y = U();
    Mn(hd, {
      arrowStyle: L,
      arrowRef: p,
      arrowOffset: Y
    }), M && Mn(ba, {
      ...M,
      addInputId: Oo,
      removeInputId: Oo
    });
    let ne;
    const ue = (pe = !0) => {
      f(), pe && O();
    }, re = () => {
      ue(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return it(() => {
      we(() => r.triggerTargetEl, (pe, ve) => {
        ne?.(), ne = void 0;
        const B = c(pe || b.value), X = c(ve || b.value);
        vn(B) && (ne = we([S, () => r.ariaLabel, E, () => r.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((K, z) => {
            tr(j[z]) ? B.removeAttribute(K) : B.setAttribute(K, j[z]);
          });
        }, { immediate: !0 })), X !== B && vn(X) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          X.removeAttribute(j);
        });
      }, { immediate: !0 }), we(() => r.visible, re, { immediate: !0 });
    }), zn(() => {
      ne?.(), ne = void 0;
    }), t({
      popperContentRef: b,
      popperInstanceRef: g,
      updatePopper: ue,
      contentStyle: C
    }), (pe, ve) => (R(), G("div", qr({
      ref_key: "contentRef",
      ref: b
    }, c(T), {
      style: c(C),
      class: c(v),
      tabindex: "-1",
      onMouseenter: (B) => pe.$emit("mouseenter", B),
      onMouseleave: (B) => pe.$emit("mouseleave", B)
    }), [
      N(c(b1), {
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
        default: se(() => [
          _e(pe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var M_ = /* @__PURE__ */ Ze($_, [["__file", "content.vue"]]);
const D_ = _n(qy), Tl = Symbol("elTooltip");
function Tc() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Mo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const F_ = Ke({
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
}), z_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Tc(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Tc();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const m = c(n);
        Me(m) && m > 0 && s(() => {
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
}, Sl = Ke({
  ...F_,
  ...Nd,
  appendTo: {
    type: be([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: be(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Dr(["ariaLabel"])
}), $d = Ke({
  ...bd,
  disabled: Boolean,
  trigger: {
    type: be([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: be(Array),
    default: () => [Nn.enter, Nn.numpadEnter, Nn.space]
  }
}), B_ = Pa({
  type: be(Boolean),
  default: null
}), V_ = Pa({
  type: be(Function)
}), j_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: B_,
    [n]: V_
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
      const p = Bt(), { emit: b } = p, h = p.props, g = x(() => et(h[n])), S = x(() => h[e] === null), f = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), et(d) && d(O));
      }, E = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), et(m) && m(O));
      }, L = (O) => {
        if (h.disabled === !0 || et(u) && !u())
          return;
        const M = g.value && ft;
        M && b(t, !0), (S.value || !M) && f(O);
      }, T = (O) => {
        if (h.disabled === !0 || !ft)
          return;
        const M = g.value && ft;
        M && b(t, !1), (S.value || !M) && E(O);
      }, v = (O) => {
        br(O) && (h.disabled && O ? g.value && b(t, !1) : s.value !== O && (O ? f() : E()));
      }, C = () => {
        s.value ? T() : L();
      };
      return we(() => h[e], v), l && p.appContext.config.globalProperties.$route !== void 0 && we(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && s.value && T();
      }), it(() => {
        v(h[e]);
      }), {
        hide: T,
        show: L,
        toggle: C,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: U_,
  useModelToggleEmits: H_,
  useModelToggle: W_
} = j_("visible"), G_ = Ke({
  ...gd,
  ...U_,
  ...Sl,
  ...$d,
  ...vd,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), K_ = [
  ...H_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], q_ = (e, t) => In(e) ? e.includes(t) : e === t, Br = (e, t, n) => (r) => {
  q_(c(e), t) && n(r);
}, qn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Y_ = oe({
  name: "ElTooltipTrigger"
}), Z_ = /* @__PURE__ */ oe({
  ...Y_,
  props: $d,
  setup(e, { expose: t }) {
    const n = e, r = pt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = ze(Tl, void 0), d = U(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, p = Yn(n, "trigger"), b = qn(m, Br(p, "hover", i)), h = qn(m, Br(p, "hover", l)), g = qn(m, Br(p, "click", (T) => {
      T.button === 0 && u(T);
    })), S = qn(m, Br(p, "focus", i)), f = qn(m, Br(p, "focus", l)), E = qn(m, Br(p, "contextmenu", (T) => {
      T.preventDefault(), u(T);
    })), L = qn(m, (T) => {
      const { code: v } = T;
      n.triggerKeys.includes(v) && (T.preventDefault(), u(T));
    });
    return t({
      triggerRef: d
    }), (T, v) => (R(), ie(c(o1), {
      id: c(a),
      "virtual-ref": T.virtualRef,
      open: c(s),
      "virtual-triggering": T.virtualTriggering,
      class: q(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(g),
      onContextmenu: c(E),
      onFocus: c(S),
      onMouseenter: c(b),
      onMouseleave: c(h),
      onKeydown: c(L)
    }, {
      default: se(() => [
        _e(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var X_ = /* @__PURE__ */ Ze(Z_, [["__file", "trigger.vue"]]);
const Q_ = Ke({
  to: {
    type: be([String, Object]),
    required: !0
  },
  disabled: Boolean
}), J_ = /* @__PURE__ */ oe({
  __name: "teleport",
  props: Q_,
  setup(e) {
    return (t, n) => t.disabled ? _e(t.$slots, "default", { key: 0 }) : (R(), ie(ff, {
      key: 1,
      to: t.to
    }, [
      _e(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var ew = /* @__PURE__ */ Ze(J_, [["__file", "teleport.vue"]]);
const tw = _n(ew), Md = () => {
  const e = Ys(), t = dd(), n = x(() => `${e.value}-popper-container-${t.prefix}`), r = x(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, nw = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, rw = () => {
  const { id: e, selector: t } = Md();
  return pf(() => {
    ft && (document.body.querySelector(t.value) || nw(e.value));
  }), {
    id: e,
    selector: t
  };
}, ow = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), aw = /* @__PURE__ */ oe({
  ...ow,
  props: Sl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Md(), o = pt("tooltip"), a = U();
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
      onBeforeHide: S
    } = ze(Tl, void 0), f = x(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = x(() => n.persistent);
    zn(() => {
      s?.();
    });
    const L = x(() => c(E) ? !0 : c(u)), T = x(() => n.disabled ? !1 : c(u)), v = x(() => n.appendTo || r.value), C = x(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), O = U(!0), M = () => {
      h(), X() && Kn(document.body), O.value = !0;
    }, Y = () => {
      if (c(i))
        return !0;
    }, ne = qn(Y, () => {
      n.enterable && c(d) === "hover" && p();
    }), ue = qn(Y, () => {
      c(d) === "hover" && m();
    }), re = () => {
      var j, K;
      (K = (j = a.value) == null ? void 0 : j.updatePopper) == null || K.call(j), g?.();
    }, pe = () => {
      S?.();
    }, ve = () => {
      b(), s = fb(x(() => {
        var j;
        return (j = a.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && m();
      });
    }, B = () => {
      n.virtualTriggering || m();
    }, X = (j) => {
      var K;
      const z = (K = a.value) == null ? void 0 : K.popperContentRef, me = j?.relatedTarget || document.activeElement;
      return z?.contains(me);
    };
    return we(() => c(u), (j) => {
      j ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), we(() => n.content, () => {
      var j, K;
      (K = (j = a.value) == null ? void 0 : j.updatePopper) == null || K.call(j);
    }), t({
      contentRef: a,
      isFocusInsideContent: X
    }), (j, K) => (R(), ie(c(tw), {
      disabled: !j.teleported,
      to: c(v)
    }, {
      default: se(() => [
        N(ao, {
          name: c(f),
          onAfterLeave: M,
          onBeforeEnter: re,
          onAfterEnter: ve,
          onBeforeLeave: pe
        }, {
          default: se(() => [
            c(L) ? bt((R(), ie(c(M_), qr({
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
              visible: c(T),
              "z-index": j.zIndex,
              onMouseenter: c(ne),
              onMouseleave: c(ue),
              onBlur: B,
              onClose: c(m)
            }), {
              default: se(() => [
                _e(j.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [rr, c(T)]
            ]) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var sw = /* @__PURE__ */ Ze(aw, [["__file", "content.vue"]]);
const lw = oe({
  name: "ElTooltip"
}), iw = /* @__PURE__ */ oe({
  ...lw,
  props: G_,
  emits: K_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    rw();
    const o = $a(), a = U(), s = U(), i = () => {
      var f;
      const E = c(a);
      E && ((f = E.popperInstanceRef) == null || f.update());
    }, l = U(!1), u = U(), { show: d, hide: m, hasUpdateHandler: p } = W_({
      indicator: l,
      toggleReason: u
    }), { onOpen: b, onClose: h } = z_({
      showAfter: Yn(r, "showAfter"),
      hideAfter: Yn(r, "hideAfter"),
      autoClose: Yn(r, "autoClose"),
      open: d,
      close: m
    }), g = x(() => br(r.visible) && !p.value);
    Mn(Tl, {
      controlled: g,
      id: o,
      open: Is(l),
      trigger: Yn(r, "trigger"),
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
    }), we(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const S = (f) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(f);
    };
    return mf(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: S,
      updatePopper: i,
      onOpen: b,
      onClose: h,
      hide: m
    }), (f, E) => (R(), ie(c(D_), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: se(() => [
        N(X_, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: se(() => [
            f.$slots.default ? _e(f.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        N(sw, {
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
            _e(f.$slots, "content", {}, () => [
              f.rawContent ? (R(), G("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (R(), G("span", { key: 1 }, F(f.content), 1))
            ]),
            f.showArrow ? (R(), ie(c(Xy), {
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
var cw = /* @__PURE__ */ Ze(iw, [["__file", "tooltip.vue"]]);
const uw = _n(cw), dw = Ke({
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
    type: be([String, Object, Array])
  },
  offset: {
    type: be(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), fw = oe({
  name: "ElBadge"
}), pw = /* @__PURE__ */ oe({
  ...fw,
  props: dw,
  setup(e, { expose: t }) {
    const n = e, r = pt("badge"), o = x(() => n.isDot ? "" : Me(n.value) && Me(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = x(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Qr(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Qr((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (R(), G("div", {
      class: q(c(r).b())
    }, [
      _e(s.$slots, "default"),
      N(ao, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: se(() => [
          bt(y("sup", {
            class: q([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Lt(c(a))
          }, [
            _e(s.$slots, "content", { value: c(o) }, () => [
              Zt(F(c(o)), 1)
            ])
          ], 6), [
            [rr, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var mw = /* @__PURE__ */ Ze(pw, [["__file", "badge.vue"]]);
const hw = _n(mw), gw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), As = Ke({
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
    values: sl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), vw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, bw = oe({
  name: "ElTag"
}), yw = /* @__PURE__ */ oe({
  ...bw,
  props: As,
  emits: vw,
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
    return (u, d) => u.disableTransitions ? (R(), G("span", {
      key: 0,
      class: q(c(a)),
      style: Lt({ backgroundColor: u.color }),
      onClick: i
    }, [
      y("span", {
        class: q(c(o).e("content"))
      }, [
        _e(u.$slots, "default")
      ], 2),
      u.closable ? (R(), ie(c(dt), {
        key: 0,
        class: q(c(o).e("close")),
        onClick: Qe(s, ["stop"])
      }, {
        default: se(() => [
          N(c(ga))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (R(), ie(ao, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: se(() => [
        y("span", {
          class: q(c(a)),
          style: Lt({ backgroundColor: u.color }),
          onClick: i
        }, [
          y("span", {
            class: q(c(o).e("content"))
          }, [
            _e(u.$slots, "default")
          ], 2),
          u.closable ? (R(), ie(c(dt), {
            key: 0,
            class: q(c(o).e("close")),
            onClick: Qe(s, ["stop"])
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
var _w = /* @__PURE__ */ Ze(yw, [["__file", "tag.vue"]]);
const ww = _n(_w), pr = /* @__PURE__ */ new Map();
if (ft) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of pr.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Sc(e, t) {
  let n = [];
  return In(t.arg) ? n = t.arg : vn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), m = e === s, p = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), b = a && (a.contains(s) || a.contains(i));
    l || u || d || m || p || b || t.value(r, o);
  };
}
const kw = {
  beforeMount(e, t) {
    pr.has(e) || pr.set(e, []), pr.get(e).push({
      documentHandler: Sc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    pr.has(e) || pr.set(e, []);
    const n = pr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Sc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    pr.delete(e);
  }
}, Tw = Ke({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: be(Object)
  },
  size: Na,
  button: {
    type: be(Object)
  },
  experimentalFeatures: {
    type: be(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: be(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...ed
}), dn = {};
oe({
  name: "ElConfigProvider",
  props: Tw,
  setup(e, { slots: t }) {
    we(() => e.message, (r) => {
      Object.assign(dn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rd(e);
    return () => _e(t, "default", { config: n?.value });
  }
});
const Sw = 100, Ew = 600, Ec = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Sw, delay: o = Ew } = et(n) ? {} : n;
    let a, s;
    const i = () => et(n) ? n() : n.handler(), l = () => {
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
}, Aw = Ke({
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
    validator: (e) => e === null || Me(e) || ["min", "max"].includes(e),
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
  ...Dr(["ariaLabel"])
}), Cw = {
  [or]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [nr]: (e) => Me(e) || tr(e),
  [St]: (e) => Me(e) || tr(e)
}, Ow = oe({
  name: "ElInputNumber"
}), Lw = /* @__PURE__ */ oe({
  ...Ow,
  props: Aw,
  emits: Cw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = al(), a = pt("input-number"), s = U(), i = Lr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ma(), u = x(() => Me(r.modelValue) && r.modelValue <= r.min), d = x(() => Me(r.modelValue) && r.modelValue >= r.max), m = x(() => {
      const B = f(r.step);
      return xn(r.precision) ? Math.max(f(r.modelValue), B) : (B > r.precision, r.precision);
    }), p = x(() => r.controls && r.controlsPosition === "right"), b = Do(), h = ul(), g = x(() => {
      if (i.userInput !== null)
        return i.userInput;
      let B = i.currentValue;
      if (tr(B))
        return "";
      if (Me(B)) {
        if (Number.isNaN(B))
          return "";
        xn(r.precision) || (B = B.toFixed(r.precision));
      }
      return B;
    }), S = (B, X) => {
      if (xn(X) && (X = m.value), X === 0)
        return Math.round(B);
      let j = String(B);
      const K = j.indexOf(".");
      if (K === -1 || !j.replace(".", "").split("")[K + X])
        return B;
      const De = j.length;
      return j.charAt(De - 1) === "5" && (j = `${j.slice(0, Math.max(0, De - 1))}6`), Number.parseFloat(Number(j).toFixed(X));
    }, f = (B) => {
      if (tr(B))
        return 0;
      const X = B.toString(), j = X.indexOf(".");
      let K = 0;
      return j !== -1 && (K = X.length - j - 1), K;
    }, E = (B, X = 1) => Me(B) ? S(B + r.step * X) : i.currentValue, L = () => {
      if (r.readonly || h.value || d.value)
        return;
      const B = Number(g.value) || 0, X = E(B);
      C(X), n(nr, i.currentValue), pe();
    }, T = () => {
      if (r.readonly || h.value || u.value)
        return;
      const B = Number(g.value) || 0, X = E(B, -1);
      C(X), n(nr, i.currentValue), pe();
    }, v = (B, X) => {
      const { max: j, min: K, step: z, precision: me, stepStrictly: De, valueOnClear: Te } = r;
      j < K && ol("InputNumber", "min should not be greater than max.");
      let ke = Number(B);
      if (tr(B) || Number.isNaN(ke))
        return null;
      if (B === "") {
        if (Te === null)
          return null;
        ke = Mt(Te) ? { min: K, max: j }[Te] : Te;
      }
      return De && (ke = S(Math.round(ke / z) * z, me), ke !== B && X && n(St, ke)), xn(me) || (ke = S(ke, me)), (ke > j || ke < K) && (ke = ke > j ? j : K, X && n(St, ke)), ke;
    }, C = (B, X = !0) => {
      var j;
      const K = i.currentValue, z = v(B);
      if (!X) {
        n(St, z);
        return;
      }
      K === z && B || (i.userInput = null, n(St, z), K !== z && n(or, z, K), r.validateEvent && ((j = l?.validate) == null || j.call(l, "change").catch((me) => void 0)), i.currentValue = z);
    }, O = (B) => {
      i.userInput = B;
      const X = B === "" ? null : Number(B);
      n(nr, X), C(X, !1);
    }, M = (B) => {
      const X = B !== "" ? Number(B) : "";
      (Me(X) && !Number.isNaN(X) || B === "") && C(X), pe(), i.userInput = null;
    }, Y = () => {
      var B, X;
      (X = (B = s.value) == null ? void 0 : B.focus) == null || X.call(B);
    }, ne = () => {
      var B, X;
      (X = (B = s.value) == null ? void 0 : B.blur) == null || X.call(B);
    }, ue = (B) => {
      n("focus", B);
    }, re = (B) => {
      var X, j;
      i.userInput = null, cd() && i.currentValue === null && ((X = s.value) != null && X.input) && (s.value.input.value = ""), n("blur", B), r.validateEvent && ((j = l?.validate) == null || j.call(l, "blur").catch((K) => void 0));
    }, pe = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, ve = (B) => {
      document.activeElement === B.target && B.preventDefault();
    };
    return we(() => r.modelValue, (B, X) => {
      const j = v(B, !0);
      i.userInput === null && j !== X && (i.currentValue = j);
    }, { immediate: !0 }), it(() => {
      var B;
      const { min: X, max: j, modelValue: K } = r, z = (B = s.value) == null ? void 0 : B.input;
      if (z.setAttribute("role", "spinbutton"), Number.isFinite(j) ? z.setAttribute("aria-valuemax", String(j)) : z.removeAttribute("aria-valuemax"), Number.isFinite(X) ? z.setAttribute("aria-valuemin", String(X)) : z.removeAttribute("aria-valuemin"), z.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), z.setAttribute("aria-disabled", String(h.value)), !Me(K) && K != null) {
        let me = Number(K);
        Number.isNaN(me) && (me = null), n(St, me);
      }
      z.addEventListener("wheel", ve, { passive: !1 });
    }), Wc(() => {
      var B, X;
      const j = (B = s.value) == null ? void 0 : B.input;
      j?.setAttribute("aria-valuenow", `${(X = i.currentValue) != null ? X : ""}`);
    }), t({
      focus: Y,
      blur: ne
    }), (B, X) => (R(), G("div", {
      class: q([
        c(a).b(),
        c(a).m(c(b)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !B.controls),
        c(a).is("controls-right", c(p))
      ]),
      onDragstart: Qe(() => {
      }, ["prevent"])
    }, [
      B.controls ? bt((R(), G("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: tn(T, ["enter"])
      }, [
        _e(B.$slots, "decrease-icon", {}, () => [
          N(c(dt), null, {
            default: se(() => [
              c(p) ? (R(), ie(c(sd), { key: 0 })) : (R(), ie(c(ny), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ec), T]
      ]) : ee("v-if", !0),
      B.controls ? bt((R(), G("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: tn(L, ["enter"])
      }, [
        _e(B.$slots, "increase-icon", {}, () => [
          N(c(dt), null, {
            default: se(() => [
              c(p) ? (R(), ie(c(Ub), { key: 0 })) : (R(), ie(c(oy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ec), L]
      ]) : ee("v-if", !0),
      N(c(Ly), {
        id: B.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: B.step,
        "model-value": c(g),
        placeholder: B.placeholder,
        readonly: B.readonly,
        disabled: c(h),
        size: c(b),
        max: B.max,
        min: B.min,
        name: B.name,
        "aria-label": B.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          tn(Qe(L, ["prevent"]), ["up"]),
          tn(Qe(T, ["prevent"]), ["down"])
        ],
        onBlur: re,
        onFocus: ue,
        onInput: O,
        onChange: M
      }, hf({
        _: 2
      }, [
        B.$slots.prefix ? {
          name: "prefix",
          fn: se(() => [
            _e(B.$slots, "prefix")
          ])
        } : void 0,
        B.$slots.suffix ? {
          name: "suffix",
          fn: se(() => [
            _e(B.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Iw = /* @__PURE__ */ Ze(Lw, [["__file", "input-number.vue"]]);
const xw = _n(Iw);
function Rw() {
  const e = vr(), t = U(0), n = 11, r = x(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Ln(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Dd = Symbol("ElSelectGroup"), Ba = Symbol("ElSelect");
function Pw(e, t) {
  const n = ze(Ba), r = ze(Dd, { disabled: !1 }), o = x(() => d(hr(n.props.modelValue), e.value)), a = x(() => {
    var b;
    if (n.props.multiple) {
      const h = hr((b = n.props.modelValue) != null ? b : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = x(() => e.label || (Xt(e.value) ? "" : e.value)), i = x(() => e.value || e.label || ""), l = x(() => e.disabled || t.groupDisabled || a.value), u = Bt(), d = (b = [], h) => {
    if (Xt(e.value)) {
      const g = n.props.valueKey;
      return b && b.some((S) => gf(gr(S, g)) === gr(h, g));
    } else
      return b && b.includes(h);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, p = (b) => {
    const h = new RegExp(gw(b), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return we(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), we(() => e.value, (b, h) => {
    const { remote: g, valueKey: S } = n.props;
    if ((g ? b !== h : !_o(b, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (S && Xt(b) && Xt(h) && b[S] === h[S])
        return;
      n.setSelected();
    }
  }), we(() => r.disabled, () => {
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
const Nw = oe({
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
    ]), o = Lr({
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
    } = Pw(e, o), { visible: m, hover: p } = xs(o), b = Bt().proxy;
    l.onOptionCreate(b), zn(() => {
      const g = b.value, { selected: S } = l.states, f = S.some((E) => E.value === b.value);
      at(() => {
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
function $w(e, t, n, r, o, a) {
  return bt((R(), G("li", {
    id: e.id,
    class: q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Qe(e.selectOptionClick, ["stop"])
  }, [
    _e(e.$slots, "default", {}, () => [
      y("span", null, F(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [rr, e.visible]
  ]);
}
var El = /* @__PURE__ */ Ze(Nw, [["render", $w], ["__file", "option.vue"]]);
const Mw = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ze(Ba), t = pt("select"), n = x(() => e.props.popperClass), r = x(() => e.props.multiple), o = x(() => e.props.fitInputWidth), a = U("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return it(() => {
      s(), Ln(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function Dw(e, t, n, r, o, a) {
  return R(), G("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Lt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), G("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      _e(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    _e(e.$slots, "default"),
    e.$slots.footer ? (R(), G("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      _e(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var Fw = /* @__PURE__ */ Ze(Mw, [["render", Dw], ["__file", "select-dropdown.vue"]]);
const zw = (e, t) => {
  const { t: n } = al(), r = $a(), o = pt("select"), a = pt("input"), s = Lr({
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
  }), i = U(null), l = U(null), u = U(null), d = U(null), m = U(null), p = U(null), b = U(null), h = U(null), g = U(null), S = U(null), f = U(null), {
    isComposing: E,
    handleCompositionStart: L,
    handleCompositionUpdate: T,
    handleCompositionEnd: v
  } = md({
    afterComposition: (P) => Pe(P)
  }), { wrapperRef: C, isFocused: O, handleBlur: M } = pd(m, {
    beforeFocus() {
      return X.value;
    },
    afterFocus() {
      e.automaticDropdown && !Y.value && (Y.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(P) {
      var J, Se;
      return ((J = u.value) == null ? void 0 : J.isFocusInsideContent(P)) || ((Se = d.value) == null ? void 0 : Se.isFocusInsideContent(P));
    },
    afterBlur() {
      Y.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Y = U(!1), ne = U(), { form: ue, formItem: re } = Ma(), { inputId: pe } = cl(e, {
    formItemContext: re
  }), { valueOnClear: ve, isEmptyValue: B } = Nb(e), X = x(() => e.disabled || ue?.disabled), j = x(() => In(e.modelValue) ? e.modelValue.length > 0 : !B(e.modelValue)), K = x(() => {
    var P;
    return (P = ue?.statusIcon) != null ? P : !1;
  }), z = x(() => e.clearable && !X.value && s.inputHovering && j.value), me = x(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = x(() => o.is("reverse", me.value && Y.value)), Te = x(() => re?.validateState || ""), ke = x(() => id[Te.value]), H = x(() => e.remote ? 300 : 0), je = x(() => e.remote && !s.inputValue && s.options.size === 0), ye = x(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Xe.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Xe = x(() => de.value.filter((P) => P.visible).length), de = x(() => {
    const P = Array.from(s.options.values()), J = [];
    return s.optionValues.forEach((Se) => {
      const rt = P.findIndex((wt) => wt.value === Se);
      rt > -1 && J.push(P[rt]);
    }), J.length >= P.length ? J : P;
  }), tt = x(() => Array.from(s.cachedOptions.values())), ht = x(() => {
    const P = de.value.filter((J) => !J.created).some((J) => J.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !P;
  }), qe = () => {
    e.filterable && et(e.filterMethod) || e.filterable && e.remote && et(e.remoteMethod) || de.value.forEach((P) => {
      var J;
      (J = P.updateOption) == null || J.call(P, s.inputValue);
    });
  }, yt = Do(), ct = x(() => ["small"].includes(yt.value) ? "small" : "default"), gt = x({
    get() {
      return Y.value && !je.value;
    },
    set(P) {
      Y.value = P;
    }
  }), vt = x(() => {
    if (e.multiple && !xn(e.modelValue))
      return hr(e.modelValue).length === 0 && !s.inputValue;
    const P = In(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || xn(P) ? !s.inputValue : !0;
  }), Ue = x(() => {
    var P;
    const J = (P = e.placeholder) != null ? P : n("el.select.placeholder");
    return e.multiple || !j.value ? J : s.selectedLabel;
  }), _t = x(() => ks ? null : "mouseenter");
  we(() => e.modelValue, (P, J) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), D(), !_o(P, J) && e.validateEvent && re?.validate("change").catch((Se) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), we(() => Y.value, (P) => {
    P ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", P);
  }), we(() => s.options.entries(), () => {
    ft && (D(), e.defaultFirstOption && (e.filterable || e.remote) && Xe.value && A());
  }, {
    flush: "post"
  }), we([() => s.hoveringIndex, de], ([P]) => {
    Me(P) && P > -1 ? ne.value = de.value[P] || {} : ne.value = {}, de.value.forEach((J) => {
      J.hover = ne.value === J;
    });
  }), Hc(() => {
    s.isBeforeHide || qe();
  });
  const w = (P) => {
    s.previousQuery === P || E.value || (s.previousQuery = P, e.filterable && et(e.filterMethod) ? e.filterMethod(P) : e.filterable && e.remote && et(e.remoteMethod) && e.remoteMethod(P), e.defaultFirstOption && (e.filterable || e.remote) && Xe.value ? at(A) : at(Ae));
  }, A = () => {
    const P = de.value.filter((wt) => wt.visible && !wt.disabled && !wt.states.groupDisabled), J = P.find((wt) => wt.created), Se = P[0], rt = de.value.map((wt) => wt.value);
    s.hoveringIndex = kn(rt, J || Se);
  }, D = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const J = In(e.modelValue) ? e.modelValue[0] : e.modelValue, Se = Q(J);
      s.selectedLabel = Se.currentLabel, s.selected = [Se];
      return;
    }
    const P = [];
    xn(e.modelValue) || hr(e.modelValue).forEach((J) => {
      P.push(Q(J));
    }), s.selected = P;
  }, Q = (P) => {
    let J;
    const Se = ch(P);
    for (let Jt = s.cachedOptions.size - 1; Jt >= 0; Jt--) {
      const Yt = tt.value[Jt];
      if (Se ? gr(Yt.value, e.valueKey) === gr(P, e.valueKey) : Yt.value === P) {
        J = {
          value: P,
          currentLabel: Yt.currentLabel,
          get isDisabled() {
            return Yt.isDisabled;
          }
        };
        break;
      }
    }
    if (J)
      return J;
    const rt = Se ? P.label : P ?? "";
    return {
      value: P,
      currentLabel: rt
    };
  }, Ae = () => {
    s.hoveringIndex = de.value.findIndex((P) => s.selected.some((J) => fe(J) === fe(P)));
  }, ce = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, k = () => {
    s.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, $ = () => {
    var P, J;
    (J = (P = u.value) == null ? void 0 : P.updatePopper) == null || J.call(P);
  }, he = () => {
    var P, J;
    (J = (P = d.value) == null ? void 0 : P.updatePopper) == null || J.call(P);
  }, Ce = () => {
    s.inputValue.length > 0 && !Y.value && (Y.value = !0), w(s.inputValue);
  }, Pe = (P) => {
    if (s.inputValue = P.target.value, e.remote)
      Et();
    else
      return Ce();
  }, Et = K0(() => {
    Ce();
  }, H.value), He = (P) => {
    _o(e.modelValue, P) || t(or, P);
  }, wn = (P) => q0(P, (J) => {
    const Se = s.cachedOptions.get(J);
    return Se && !Se.disabled && !Se.states.groupDisabled;
  }), Vn = (P) => {
    if (e.multiple && P.code !== Nn.delete && P.target.value.length <= 0) {
      const J = hr(e.modelValue).slice(), Se = wn(J);
      if (Se < 0)
        return;
      const rt = J[Se];
      J.splice(Se, 1), t(St, J), He(J), t("remove-tag", rt);
    }
  }, Tr = (P, J) => {
    const Se = s.selected.indexOf(J);
    if (Se > -1 && !X.value) {
      const rt = hr(e.modelValue).slice();
      rt.splice(Se, 1), t(St, rt), He(rt), t("remove-tag", J.value);
    }
    P.stopPropagation(), dr();
  }, ir = (P) => {
    P.stopPropagation();
    const J = e.multiple ? [] : ve.value;
    if (e.multiple)
      for (const Se of s.selected)
        Se.isDisabled && J.push(Se.value);
    t(St, J), He(J), s.hoveringIndex = -1, Y.value = !1, t("clear"), dr();
  }, cr = (P) => {
    var J;
    if (e.multiple) {
      const Se = hr((J = e.modelValue) != null ? J : []).slice(), rt = kn(Se, P);
      rt > -1 ? Se.splice(rt, 1) : (e.multipleLimit <= 0 || Se.length < e.multipleLimit) && Se.push(P.value), t(St, Se), He(Se), P.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(St, P.value), He(P.value), Y.value = !1;
    dr(), !Y.value && at(() => {
      sn(P);
    });
  }, kn = (P = [], J) => xn(J) ? -1 : Xt(J.value) ? P.findIndex((Se) => _o(gr(Se, e.valueKey), fe(J))) : P.indexOf(J.value), sn = (P) => {
    var J, Se, rt, wt, Jt;
    const Yt = In(P) ? P[0] : P;
    let Ht = null;
    if (Yt?.value) {
      const fr = de.value.filter((Bo) => Bo.value === Yt.value);
      fr.length > 0 && (Ht = fr[0].$el);
    }
    if (u.value && Ht) {
      const fr = (wt = (rt = (Se = (J = u.value) == null ? void 0 : J.popperRef) == null ? void 0 : Se.contentRef) == null ? void 0 : rt.querySelector) == null ? void 0 : wt.call(rt, `.${o.be("dropdown", "wrap")}`);
      fr && Mb(fr, Ht);
    }
    (Jt = f.value) == null || Jt.handleScroll();
  }, Ut = (P) => {
    s.options.set(P.value, P), s.cachedOptions.set(P.value, P);
  }, Tn = (P, J) => {
    s.options.get(P) === J && s.options.delete(P);
  }, Sr = x(() => {
    var P, J;
    return (J = (P = u.value) == null ? void 0 : P.popperRef) == null ? void 0 : J.contentRef;
  }), ur = () => {
    s.isBeforeHide = !1, at(() => {
      var P;
      (P = f.value) == null || P.update(), sn(s.selected);
    });
  }, dr = () => {
    var P;
    (P = m.value) == null || P.focus();
  }, I = () => {
    var P;
    if (Y.value) {
      Y.value = !1, at(() => {
        var J;
        return (J = m.value) == null ? void 0 : J.blur();
      });
      return;
    }
    (P = m.value) == null || P.blur();
  }, Z = (P) => {
    ir(P);
  }, W = (P) => {
    if (Y.value = !1, O.value) {
      const J = new FocusEvent("focus", P);
      at(() => M(J));
    }
  }, ge = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Y.value = !1;
  }, Le = () => {
    X.value || (ks && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Y.value = !Y.value);
  }, Ye = () => {
    if (!Y.value)
      Le();
    else {
      const P = de.value[s.hoveringIndex];
      P && !P.isDisabled && cr(P);
    }
  }, fe = (P) => Xt(P.value) ? gr(P.value, e.valueKey) : P.value, ut = x(() => de.value.filter((P) => P.visible).every((P) => P.isDisabled)), ln = x(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), At = x(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), jn = (P) => {
    if (!Y.value) {
      Y.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Xe.value === 0 || E.value) && !ut.value) {
      P === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : P === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const J = de.value[s.hoveringIndex];
      (J.isDisabled || !J.visible) && jn(P), at(() => sn(ne.value));
    }
  }, cn = () => {
    if (!l.value)
      return 0;
    const P = window.getComputedStyle(l.value);
    return Number.parseFloat(P.gap || "6px");
  }, nt = x(() => {
    const P = cn();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - P : s.selectionWidth}px` };
  }), Un = x(() => ({ maxWidth: `${s.selectionWidth}px` })), qt = (P) => {
    t("popup-scroll", P);
  };
  return Ln(l, ce), Ln(h, $), Ln(C, $), Ln(g, he), Ln(S, k), it(() => {
    D();
  }), {
    inputId: pe,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: Y,
    optionsArray: de,
    hoverOption: ne,
    selectSize: yt,
    filteredOptionsCount: Xe,
    updateTooltip: $,
    updateTagTooltip: he,
    debouncedOnInputChange: Et,
    onInput: Pe,
    deletePrevTag: Vn,
    deleteTag: Tr,
    deleteSelected: ir,
    handleOptionSelect: cr,
    scrollToOption: sn,
    hasModelValue: j,
    shouldShowPlaceholder: vt,
    currentPlaceholder: Ue,
    mouseEnterEventName: _t,
    needStatusIcon: K,
    showClose: z,
    iconComponent: me,
    iconReverse: De,
    validateState: Te,
    validateIcon: ke,
    showNewOption: ht,
    updateOptions: qe,
    collapseTagSize: ct,
    setSelected: D,
    selectDisabled: X,
    emptyText: ye,
    handleCompositionStart: L,
    handleCompositionUpdate: T,
    handleCompositionEnd: v,
    onOptionCreate: Ut,
    onOptionDestroy: Tn,
    handleMenuEnter: ur,
    focus: dr,
    blur: I,
    handleClearClick: Z,
    handleClickOutside: W,
    handleEsc: ge,
    toggleMenu: Le,
    selectOption: Ye,
    getValueKey: fe,
    navigateOptions: jn,
    dropdownMenuVisible: gt,
    showTagList: ln,
    collapseTagList: At,
    popupScroll: qt,
    tagStyle: nt,
    collapseTagStyle: Un,
    popperRef: Sr,
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
    collapseItemRef: S
  };
};
var Bw = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ze(Ba);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        In(u) && u.forEach((d) => {
          var m, p, b, h;
          const g = (m = d?.type || {}) == null ? void 0 : m.name;
          g === "ElOptionGroup" ? l(!Mt(d.children) && !In(d.children) && et((p = d.children) == null ? void 0 : p.default) ? (b = d.children) == null ? void 0 : b.default() : d.children) : g === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : In(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), _o(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Vw = Ke({
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
    type: be(String),
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
    type: be(Object),
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
  teleported: Sl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Rn,
    default: ll
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Rn,
    default: sd
  },
  tagType: { ...As.type, default: "info" },
  tagEffect: { ...As.effect, default: "light" },
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
    type: be(String),
    values: Fa,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: be(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...ed,
  ...Dr(["ariaLabel"])
}), Ac = "ElSelect", jw = oe({
  name: Ac,
  componentName: Ac,
  components: {
    ElSelectMenu: Fw,
    ElOption: El,
    ElOptions: Bw,
    ElTag: ww,
    ElScrollbar: Hy,
    ElTooltip: uw,
    ElIcon: dt
  },
  directives: { ClickOutside: kw },
  props: Vw,
  emits: [
    St,
    or,
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
      return In(l) ? u ? l : d : u ? d : l;
    }), r = Lr({
      ...xs(e),
      modelValue: n
    }), o = zw(r, t), { calculatorRef: a, inputStyle: s } = Rw();
    Mn(Ba, Lr({
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
function Uw(e, t, n, r, o, a) {
  const s = Er("el-tag"), i = Er("el-tooltip"), l = Er("el-icon"), u = Er("el-option"), d = Er("el-options"), m = Er("el-scrollbar"), p = Er("el-select-menu"), b = vf("click-outside");
  return bt((R(), G("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [bf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
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
            class: q([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Qe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), G("div", {
              key: 0,
              ref: "prefixRef",
              class: q(e.nsSelect.e("prefix"))
            }, [
              _e(e.$slots, "prefix")
            ], 2)) : ee("v-if", !0),
            y("div", {
              ref: "selectionRef",
              class: q([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? _e(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), G(Ot, null, Cr(e.showTagList, (g) => (R(), G("div", {
                  key: e.getValueKey(g),
                  class: q(e.nsSelect.e("selected-item"))
                }, [
                  N(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Lt(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, g)
                  }, {
                    default: se(() => [
                      y("span", {
                        class: q(e.nsSelect.e("tags-text"))
                      }, [
                        _e(e.$slots, "label", {
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
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (R(), ie(i, {
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
                      class: q(e.nsSelect.e("selected-item"))
                    }, [
                      N(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Lt(e.collapseTagStyle)
                      }, {
                        default: se(() => [
                          y("span", {
                            class: q(e.nsSelect.e("tags-text"))
                          }, " + " + F(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: se(() => [
                    y("div", {
                      ref: "tagMenuRef",
                      class: q(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), G(Ot, null, Cr(e.collapseTagList, (g) => (R(), G("div", {
                        key: e.getValueKey(g),
                        class: q(e.nsSelect.e("selected-item"))
                      }, [
                        N(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (S) => e.deleteTag(S, g)
                        }, {
                          default: se(() => [
                            y("span", {
                              class: q(e.nsSelect.e("tags-text"))
                            }, [
                              _e(e.$slots, "label", {
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
                class: q([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                bt(y("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: q([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Lt(e.inputStyle),
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
                    tn(Qe((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    tn(Qe((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    tn(Qe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    tn(Qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    tn(Qe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Qe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [To, e.states.inputValue]
                ]),
                e.filterable ? (R(), G("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: F(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), G("div", {
                key: 1,
                class: q([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? _e(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  y("span", null, F(e.currentPlaceholder), 1)
                ]) : (R(), G("span", { key: 1 }, F(e.currentPlaceholder), 1))
              ], 2)) : ee("v-if", !0)
            ], 2),
            y("div", {
              ref: "suffixRef",
              class: q(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (R(), ie(l, {
                key: 0,
                class: q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: se(() => [
                  (R(), ie(Ft(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (R(), ie(l, {
                key: 1,
                class: q([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: se(() => [
                  (R(), ie(Ft(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (R(), ie(l, {
                key: 2,
                class: q([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: se(() => [
                  (R(), ie(Ft(e.validateIcon)))
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
            e.$slots.header ? (R(), G("div", {
              key: 0,
              class: q(e.nsSelect.be("dropdown", "header")),
              onClick: Qe(() => {
              }, ["stop"])
            }, [
              _e(e.$slots, "header")
            ], 10, ["onClick"])) : ee("v-if", !0),
            bt(N(m, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: q([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: se(() => [
                e.showNewOption ? (R(), ie(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                N(d, null, {
                  default: se(() => [
                    _e(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [rr, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), G("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              _e(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), G("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              _e(e.$slots, "empty", {}, () => [
                y("span", null, F(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (R(), G("div", {
              key: 3,
              class: q(e.nsSelect.be("dropdown", "footer")),
              onClick: Qe(() => {
              }, ["stop"])
            }, [
              _e(e.$slots, "footer")
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
var Hw = /* @__PURE__ */ Ze(jw, [["render", Uw], ["__file", "select.vue"]]);
const Ww = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = pt("select"), n = U(null), r = Bt(), o = U([]);
    Mn(Dd, Lr({
      ...xs(e)
    }));
    const a = x(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = hr(u), m = [];
      return d.forEach((p) => {
        var b, h;
        s(p) ? m.push(p.component.proxy) : (b = p.children) != null && b.length ? m.push(...i(p.children)) : (h = p.component) != null && h.subTree && m.push(...i(p.component.subTree));
      }), m;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return it(() => {
      l();
    }), yb(n, l, {
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
function Gw(e, t, n, r, o, a) {
  return bt((R(), G("ul", {
    ref: "groupRef",
    class: q(e.ns.be("group", "wrap"))
  }, [
    y("li", {
      class: q(e.ns.be("group", "title"))
    }, F(e.label), 3),
    y("li", null, [
      y("ul", {
        class: q(e.ns.b("group"))
      }, [
        _e(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [rr, e.visible]
  ]);
}
var Fd = /* @__PURE__ */ Ze(Ww, [["render", Gw], ["__file", "option-group.vue"]]);
const Kw = _n(Hw, {
  Option: El,
  OptionGroup: Fd
}), qw = ad(El);
ad(Fd);
const Yw = (e) => ["", ...sl].includes(e), Zw = Ke({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Yw
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Rn
  },
  activeActionIcon: {
    type: Rn
  },
  activeIcon: {
    type: Rn
  },
  inactiveIcon: {
    type: Rn
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
    type: be(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Dr(["ariaLabel"])
}), Xw = {
  [St]: (e) => br(e) || Mt(e) || Me(e),
  [or]: (e) => br(e) || Mt(e) || Me(e),
  [nr]: (e) => br(e) || Mt(e) || Me(e)
}, zd = "ElSwitch", Qw = oe({
  name: zd
}), Jw = /* @__PURE__ */ oe({
  ...Qw,
  props: Zw,
  emits: Xw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ma(), a = Do(), s = pt("switch"), { inputId: i } = cl(r, {
      formItemContext: o
    }), l = ul(x(() => r.loading)), u = U(r.modelValue !== !1), d = U(), m = U(), p = x(() => [
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
      width: Qr(r.width)
    }));
    we(() => r.modelValue, () => {
      u.value = !0;
    });
    const S = x(() => u.value ? r.modelValue : !1), f = x(() => S.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(S.value) || (n(St, r.inactiveValue), n(or, r.inactiveValue), n(nr, r.inactiveValue)), we(f, (v) => {
      var C;
      d.value.checked = v, r.validateEvent && ((C = o?.validate) == null || C.call(o, "change").catch((O) => void 0));
    });
    const E = () => {
      const v = f.value ? r.inactiveValue : r.activeValue;
      n(St, v), n(or, v), n(nr, v), at(() => {
        d.value.checked = f.value;
      });
    }, L = () => {
      if (l.value)
        return;
      const { beforeChange: v } = r;
      if (!v) {
        E();
        return;
      }
      const C = v();
      [
        hi(C),
        br(C)
      ].includes(!0) || ol(zd, "beforeChange must return type `Promise<boolean>` or `boolean`"), hi(C) ? C.then((M) => {
        M && E();
      }).catch((M) => {
      }) : C && E();
    }, T = () => {
      var v, C;
      (C = (v = d.value) == null ? void 0 : v.focus) == null || C.call(v);
    };
    return it(() => {
      d.value.checked = f.value;
    }), t({
      focus: T,
      checked: f
    }), (v, C) => (R(), G("div", {
      class: q(c(p)),
      onClick: Qe(L, ["prevent"])
    }, [
      y("input", {
        id: c(i),
        ref_key: "input",
        ref: d,
        class: q(c(s).e("input")),
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
        onKeydown: tn(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !v.inlinePrompt && (v.inactiveIcon || v.inactiveText) ? (R(), G("span", {
        key: 0,
        class: q(c(b))
      }, [
        v.inactiveIcon ? (R(), ie(c(dt), { key: 0 }, {
          default: se(() => [
            (R(), ie(Ft(v.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !v.inactiveIcon && v.inactiveText ? (R(), G("span", {
          key: 1,
          "aria-hidden": c(f)
        }, F(v.inactiveText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0),
      y("span", {
        ref_key: "core",
        ref: m,
        class: q(c(s).e("core")),
        style: Lt(c(g))
      }, [
        v.inlinePrompt ? (R(), G("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          v.activeIcon || v.inactiveIcon ? (R(), ie(c(dt), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: se(() => [
              (R(), ie(Ft(c(f) ? v.activeIcon : v.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : v.activeText || v.inactiveText ? (R(), G("span", {
            key: 1,
            class: q(c(s).is("text")),
            "aria-hidden": !c(f)
          }, F(c(f) ? v.activeText : v.inactiveText), 11, ["aria-hidden"])) : ee("v-if", !0)
        ], 2)) : ee("v-if", !0),
        y("div", {
          class: q(c(s).e("action"))
        }, [
          v.loading ? (R(), ie(c(dt), {
            key: 0,
            class: q(c(s).is("loading"))
          }, {
            default: se(() => [
              N(c(ld))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? _e(v.$slots, "active-action", { key: 1 }, () => [
            v.activeActionIcon ? (R(), ie(c(dt), { key: 0 }, {
              default: se(() => [
                (R(), ie(Ft(v.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(f) ? ee("v-if", !0) : _e(v.$slots, "inactive-action", { key: 2 }, () => [
            v.inactiveActionIcon ? (R(), ie(c(dt), { key: 0 }, {
              default: se(() => [
                (R(), ie(Ft(v.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !v.inlinePrompt && (v.activeIcon || v.activeText) ? (R(), G("span", {
        key: 1,
        class: q(c(h))
      }, [
        v.activeIcon ? (R(), ie(c(dt), { key: 0 }, {
          default: se(() => [
            (R(), ie(Ft(v.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !v.activeIcon && v.activeText ? (R(), G("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, F(v.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var ek = /* @__PURE__ */ Ze(Jw, [["__file", "switch.vue"]]);
const tk = _n(ek), Bd = ["success", "info", "warning", "error"], Rt = ud({
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
}), nk = Ke({
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
    type: Rn,
    default: Rt.icon
  },
  id: {
    type: String,
    default: Rt.id
  },
  message: {
    type: be([
      String,
      Object,
      Function
    ]),
    default: Rt.message
  },
  onClose: {
    type: be(Function),
    default: Rt.onClose
  },
  showClose: {
    type: Boolean,
    default: Rt.showClose
  },
  type: {
    type: String,
    values: Bd,
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
}), rk = {
  destroy: () => !0
}, gn = yf([]), ok = (e) => {
  const t = gn.findIndex((o) => o.id === e), n = gn[t];
  let r;
  return t > 0 && (r = gn[t - 1]), { current: n, prev: r };
}, ak = (e) => {
  const { prev: t } = ok(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, sk = (e, t) => gn.findIndex((r) => r.id === e) > 0 ? 16 : t, lk = oe({
  name: "ElMessage"
}), ik = /* @__PURE__ */ oe({
  ...lk,
  props: nk,
  emits: rk,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = fy, { ns: o, zIndex: a } = nd("message"), { currentZIndex: s, nextZIndex: i } = a, l = U(), u = U(!1), d = U(0);
    let m;
    const p = x(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = x(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && va[O] };
    }), h = x(() => n.icon || va[n.type] || ""), g = x(() => ak(n.id)), S = x(() => sk(n.id, n.offset) + g.value), f = x(() => d.value + S.value), E = x(() => ({
      top: `${S.value}px`,
      zIndex: s.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: m } = Wu(() => {
        v();
      }, n.duration));
    }
    function T() {
      m?.();
    }
    function v() {
      u.value = !1;
    }
    function C({ code: O }) {
      O === Nn.esc && v();
    }
    return it(() => {
      L(), i(), u.value = !0;
    }), we(() => n.repeatNum, () => {
      T(), L();
    }), bn(document, "keydown", C), Ln(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: v
    }), (O, M) => (R(), ie(ao, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (Y) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        bt(y("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: l,
          class: q([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: Lt(c(E)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (R(), ie(c(hw), {
            key: 0,
            value: O.repeatNum,
            type: c(p),
            class: q(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(h) ? (R(), ie(c(dt), {
            key: 1,
            class: q([c(o).e("icon"), c(b)])
          }, {
            default: se(() => [
              (R(), ie(Ft(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          _e(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (R(), G(Ot, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: q(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), G("p", {
              key: 0,
              class: q(c(o).e("content"))
            }, F(O.message), 3))
          ]),
          O.showClose ? (R(), ie(c(dt), {
            key: 2,
            class: q(c(o).e("closeBtn")),
            onClick: Qe(v, ["stop"])
          }, {
            default: se(() => [
              N(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [rr, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ck = /* @__PURE__ */ Ze(ik, [["__file", "message.vue"]]);
let uk = 1;
const Vd = (e) => {
  const t = !e || Mt(e) || So(e) || et(e) ? { message: e } : e, n = {
    ...Rt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Mt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    vn(r) || (r = document.body), n.appendTo = r;
  }
  return br(dn.grouping) && !n.grouping && (n.grouping = dn.grouping), Me(dn.duration) && n.duration === 3e3 && (n.duration = dn.duration), Me(dn.offset) && n.offset === 16 && (n.offset = dn.offset), br(dn.showClose) && !n.showClose && (n.showClose = dn.showClose), n;
}, dk = (e) => {
  const t = gn.indexOf(e);
  if (t === -1)
    return;
  gn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, fk = ({ appendTo: e, ...t }, n) => {
  const r = `message_${uk++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), dk(d);
    },
    onDestroy: () => {
      sa(null, a);
    }
  }, i = N(ck, s, et(s.message) || So(s.message) ? {
    default: et(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || ro._context, sa(i, a), e.appendChild(a.firstElementChild);
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
}, ro = (e = {}, t) => {
  if (!ft)
    return { close: () => {
    } };
  const n = Vd(e);
  if (n.grouping && gn.length) {
    const o = gn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Me(dn.max) && gn.length >= dn.max)
    return { close: () => {
    } };
  const r = fk(n, t);
  return gn.push(r), r.handler;
};
Bd.forEach((e) => {
  ro[e] = (t = {}, n) => {
    const r = Vd(t);
    return ro({ ...r, type: e }, n);
  };
});
function pk(e) {
  for (const t of gn)
    (!e || e === t.props.type) && t.handler.close();
}
ro.closeAll = pk;
ro._context = null;
const mk = od(ro, "$message"), jd = [
  "success",
  "info",
  "warning",
  "error"
], hk = Ke({
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
    type: Rn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: be([
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
    type: be(Function),
    default: () => {
    }
  },
  onClose: {
    type: be(Function),
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
    values: [...jd, ""],
    default: ""
  },
  zIndex: Number
}), gk = {
  destroy: () => !0
}, vk = oe({
  name: "ElNotification"
}), bk = /* @__PURE__ */ oe({
  ...vk,
  props: hk,
  emits: gk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = nd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = dy, l = U(!1);
    let u;
    const d = x(() => {
      const L = n.type;
      return L && va[n.type] ? r.m(L) : "";
    }), m = x(() => n.type && va[n.type] || n.icon), p = x(() => n.position.endsWith("right") ? "right" : "left"), b = x(() => n.position.startsWith("top") ? "top" : "bottom"), h = x(() => {
      var L;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = Wu(() => {
        l.value && f();
      }, n.duration));
    }
    function S() {
      u?.();
    }
    function f() {
      l.value = !1;
    }
    function E({ code: L }) {
      L === Nn.delete || L === Nn.backspace ? S() : L === Nn.esc ? l.value && f() : g();
    }
    return it(() => {
      g(), a(), l.value = !0;
    }), bn(document, "keydown", E), t({
      visible: l,
      close: f
    }), (L, T) => (R(), ie(ao, {
      name: c(r).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (v) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        bt(y("div", {
          id: L.id,
          class: q([c(r).b(), L.customClass, c(p)]),
          style: Lt(c(h)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: g,
          onClick: L.onClick
        }, [
          c(m) ? (R(), ie(c(dt), {
            key: 0,
            class: q([c(r).e("icon"), c(d)])
          }, {
            default: se(() => [
              (R(), ie(Ft(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          y("div", {
            class: q(c(r).e("group"))
          }, [
            y("h2", {
              class: q(c(r).e("title")),
              textContent: F(L.title)
            }, null, 10, ["textContent"]),
            bt(y("div", {
              class: q(c(r).e("content")),
              style: Lt(L.title ? void 0 : { margin: 0 })
            }, [
              _e(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (R(), G(Ot, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), G("p", { key: 0 }, F(L.message), 1))
              ])
            ], 6), [
              [rr, L.message]
            ]),
            L.showClose ? (R(), ie(c(dt), {
              key: 0,
              class: q(c(r).e("closeBtn")),
              onClick: Qe(f, ["stop"])
            }, {
              default: se(() => [
                N(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [rr, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var yk = /* @__PURE__ */ Ze(bk, [["__file", "notification.vue"]]);
const _a = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Cs = 16;
let _k = 1;
const oo = function(e = {}, t) {
  if (!ft)
    return { close: () => {
    } };
  (Mt(e) || So(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  _a[n].forEach(({ vm: d }) => {
    var m;
    r += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + Cs;
  }), r += Cs;
  const o = `notification_${_k++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      wk(o, n, a);
    }
  };
  let i = document.body;
  vn(e.appendTo) ? i = e.appendTo : Mt(e.appendTo) && (i = document.querySelector(e.appendTo)), vn(i) || (i = document.body);
  const l = document.createElement("div"), u = N(yk, s, et(s.message) ? s.message : So(s.message) ? () => s.message : null);
  return u.appContext = xn(t) ? oo._context : t, u.props.onDestroy = () => {
    sa(null, l);
  }, sa(u, l), _a[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
jd.forEach((e) => {
  oo[e] = (t = {}, n) => ((Mt(t) || So(t)) && (t = {
    message: t
  }), oo({ ...t, type: e }, n));
});
function wk(e, t, n) {
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
      const { el: d, component: m } = r[u].vm, p = Number.parseInt(d.style[i], 10) - s - Cs;
      m.props.offset = p;
    }
}
function kk() {
  for (const e of Object.values(_a))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
oo.closeAll = kk;
oo._context = null;
const Tk = od(oo, "$notify"), $t = {
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
    r === "center" ? mk({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Tk({
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
function Sk(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function xt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Cc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Cc || (Cc = {}));
async function Ek(e, t) {
  await xt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ak(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return xt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Sk(t)
  }).then((a) => async () => Ek(e, a));
}
const Ck = "snippets-code:developer-mode", Ud = "snippets-code:frontend-diagnostics", Ok = 240, po = "[REDACTED]", oa = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${po}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${po}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  po
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${po}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${po}`
), Hd = (e) => {
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
}, Lk = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Ik = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Ud) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Al = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ck) === "true";
  } catch {
    return !1;
  }
}, xk = (e, t, n) => {
  if (!Al() || typeof localStorage > "u") return;
  const r = Ik();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Lk(),
    message: oa(t),
    data: Hd(n)
  });
  try {
    localStorage.setItem(
      Ud,
      JSON.stringify(r.slice(-Ok))
    );
  } catch {
  }
}, Rk = () => Al(), Pk = (e) => e === "warn" || e === "error" || !1 || !1 || Al(), Xo = (e, t, n) => {
  xk(e, t, n), Pk(e) && xt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Hd(n)
  }).catch(() => {
  });
}, fn = {
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
    Rk() && Xo("debug", e, t);
  }
};
async function Wd() {
  return await xt("local_ai_get_config");
}
async function aa(e) {
  return await xt("local_ai_save_config", { config: e });
}
async function Gd(e) {
  return await xt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Nk() {
  return await xt("local_ai_get_runtime_status");
}
async function Kd() {
  return await xt("local_ai_get_status");
}
async function $k(e) {
  return await xt("local_ai_start_service", {
    config: e ?? null
  });
}
async function qd() {
  return await xt("local_ai_restart_service");
}
async function Mk() {
  await xt("local_ai_stop_service");
}
function Yd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Dk(e, t, n = {}) {
  const r = n.requestId ?? Yd(), o = await Ak(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === r && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await xt("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function Qa(e) {
  return await xt("local_ai_cancel_chat_stream", { requestId: e });
}
async function Fk() {
  return await xt("local_ai_get_chat_histories");
}
async function zk(e) {
  return await xt("local_ai_save_chat_history", {
    history: e
  });
}
async function Bk(e) {
  return await xt("local_ai_delete_chat_history", {
    historyId: e
  });
}
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Oc(e, t) {
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
function Uk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hk(e, t) {
  return Vk(e) || jk(e, t) || Wk(e, t) || Uk();
}
function Wk(e, t) {
  if (e) {
    if (typeof e == "string") return Oc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oc(e, t) : void 0;
  }
}
const Zd = Object.entries, Lc = Object.setPrototypeOf, Gk = Object.isFrozen, Kk = Object.getPrototypeOf, qk = Object.getOwnPropertyDescriptor;
let Vt = Object.freeze, an = Object.seal, Gr = Object.create, Xd = typeof Reflect < "u" && Reflect, Os = Xd.apply, Ls = Xd.construct;
Vt || (Vt = function(t) {
  return t;
});
an || (an = function(t) {
  return t;
});
Os || (Os = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Ls || (Ls = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Vr = mt(Array.prototype.forEach), Yk = mt(Array.prototype.lastIndexOf), Ic = mt(Array.prototype.pop), jr = mt(Array.prototype.push), Zk = mt(Array.prototype.splice), Dt = Array.isArray, vo = mt(String.prototype.toLowerCase), Ja = mt(String.prototype.toString), xc = mt(String.prototype.match), Ur = mt(String.prototype.replace), Rc = mt(String.prototype.indexOf), Xk = mt(String.prototype.trim), Qk = mt(Number.prototype.toString), Jk = mt(Boolean.prototype.toString), Pc = typeof BigInt > "u" ? null : mt(BigInt.prototype.toString), Nc = typeof Symbol > "u" ? null : mt(Symbol.prototype.toString), ot = mt(Object.prototype.hasOwnProperty), mo = mt(Object.prototype.toString), Ct = mt(RegExp.prototype.test), ho = eT(TypeError);
function mt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Os(e, t, r);
  };
}
function eT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ls(e, n);
  };
}
function Ee(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vo;
  if (Lc && Lc(e, null), !Dt(t))
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
    ot(e, t) || (e[t] = null);
  return e;
}
function Pt(e) {
  const t = Gr(null);
  for (const r of Zd(e)) {
    var n = Hk(r, 2);
    const o = n[0], a = n[1];
    ot(e, o) && (Dt(a) ? t[o] = tT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Pt(a) : t[o] = a);
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
      return Pc ? Pc(e) : "0";
    case "symbol":
      return Nc ? Nc(e) : "Symbol()";
    case "undefined":
      return mo(e);
    case "function":
    case "object": {
      if (e === null)
        return mo(e);
      const t = e, n = On(t, "toString");
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
function On(e, t) {
  for (; e !== null; ) {
    const r = qk(e, t);
    if (r) {
      if (r.get)
        return mt(r.get);
      if (typeof r.value == "function")
        return mt(r.value);
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
    return Ct(e, ""), !0;
  } catch {
    return !1;
  }
}
const $c = Vt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), es = Vt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ts = Vt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), oT = Vt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ns = Vt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), aT = Vt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Mc = Vt(["#text"]), Dc = Vt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), rs = Vt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fc = Vt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qo = Vt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sT = an(/{{[\w\W]*|^[\w\W]*}}/g), lT = an(/<%[\w\W]*|^[\w\W]*%>/g), iT = an(/\${[\w\W]*/g), cT = an(/^data-[\-\w.\u00B7-\uFFFF]+$/), uT = an(/^aria-[\-\w]+$/), zc = an(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dT = an(/^(?:\w+script|data):/i), fT = an(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pT = an(/^html$/i), mT = an(/^[a-z][.\w]*(-[.\w]+)+$/i), Cn = {
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
}, Bc = function() {
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
function Qd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hT();
  const t = (le) => Qd(le);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Cn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, p = i.prototype, b = On(p, "cloneNode"), h = On(p, "remove"), g = On(p, "nextSibling"), S = On(p, "childNodes"), f = On(p, "parentNode"), E = On(p, "shadowRoot"), L = On(p, "attributes"), T = s && s.prototype ? On(s.prototype, "nodeType") : null, v = s && s.prototype ? On(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const le = n.createElement("template");
    le.content && le.content.ownerDocument && (n = le.content.ownerDocument);
  }
  let C, O = "";
  const M = n, Y = M.implementation, ne = M.createNodeIterator, ue = M.createDocumentFragment, re = M.getElementsByTagName, pe = r.importNode;
  let ve = Bc();
  t.isSupported = typeof Zd == "function" && typeof f == "function" && Y && Y.createHTMLDocument !== void 0;
  const B = sT, X = lT, j = iT, K = cT, z = uT, me = dT, De = fT, Te = mT;
  let ke = zc, H = null;
  const je = Ee({}, [...$c, ...es, ...ts, ...ns, ...Mc]);
  let ye = null;
  const Xe = Ee({}, [...Dc, ...rs, ...Fc, ...Qo]);
  let de = Object.seal(Gr(null, {
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
  })), tt = null, ht = null;
  const qe = Object.seal(Gr(null, {
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
  let yt = !0, ct = !0, gt = !1, vt = !0, Ue = !1, _t = !0, w = !1, A = !1, D = !1, Q = !1, Ae = !1, ce = !1, k = !0, $ = !1;
  const he = "user-content-";
  let Ce = !0, Pe = !1, Et = {}, He = null;
  const wn = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Vn = null;
  const Tr = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let ir = null;
  const cr = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), kn = "http://www.w3.org/1998/Math/MathML", sn = "http://www.w3.org/2000/svg", Ut = "http://www.w3.org/1999/xhtml";
  let Tn = Ut, Sr = !1, ur = null;
  const dr = Ee({}, [kn, sn, Ut], Ja);
  let I = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), Z = Ee({}, ["annotation-xml"]);
  const W = Ee({}, ["title", "style", "font", "a", "script"]);
  let ge = null;
  const Le = ["application/xhtml+xml", "text/html"], Ye = "text/html";
  let fe = null, ut = null;
  const ln = n.createElement("form"), At = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, jn = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ut && ut === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = Pt(_), ge = // eslint-disable-next-line unicorn/prefer-includes
    Le.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Ye : _.PARSER_MEDIA_TYPE, fe = ge === "application/xhtml+xml" ? Ja : vo, H = ot(_, "ALLOWED_TAGS") && Dt(_.ALLOWED_TAGS) ? Ee({}, _.ALLOWED_TAGS, fe) : je, ye = ot(_, "ALLOWED_ATTR") && Dt(_.ALLOWED_ATTR) ? Ee({}, _.ALLOWED_ATTR, fe) : Xe, ur = ot(_, "ALLOWED_NAMESPACES") && Dt(_.ALLOWED_NAMESPACES) ? Ee({}, _.ALLOWED_NAMESPACES, Ja) : dr, ir = ot(_, "ADD_URI_SAFE_ATTR") && Dt(_.ADD_URI_SAFE_ATTR) ? Ee(Pt(cr), _.ADD_URI_SAFE_ATTR, fe) : cr, Vn = ot(_, "ADD_DATA_URI_TAGS") && Dt(_.ADD_DATA_URI_TAGS) ? Ee(Pt(Tr), _.ADD_DATA_URI_TAGS, fe) : Tr, He = ot(_, "FORBID_CONTENTS") && Dt(_.FORBID_CONTENTS) ? Ee({}, _.FORBID_CONTENTS, fe) : wn, tt = ot(_, "FORBID_TAGS") && Dt(_.FORBID_TAGS) ? Ee({}, _.FORBID_TAGS, fe) : Pt({}), ht = ot(_, "FORBID_ATTR") && Dt(_.FORBID_ATTR) ? Ee({}, _.FORBID_ATTR, fe) : Pt({}), Et = ot(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? Pt(_.USE_PROFILES) : _.USE_PROFILES : !1, yt = _.ALLOW_ARIA_ATTR !== !1, ct = _.ALLOW_DATA_ATTR !== !1, gt = _.ALLOW_UNKNOWN_PROTOCOLS || !1, vt = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ue = _.SAFE_FOR_TEMPLATES || !1, _t = _.SAFE_FOR_XML !== !1, w = _.WHOLE_DOCUMENT || !1, Q = _.RETURN_DOM || !1, Ae = _.RETURN_DOM_FRAGMENT || !1, ce = _.RETURN_TRUSTED_TYPE || !1, D = _.FORCE_BODY || !1, k = _.SANITIZE_DOM !== !1, $ = _.SANITIZE_NAMED_PROPS || !1, Ce = _.KEEP_CONTENT !== !1, Pe = _.IN_PLACE || !1, ke = rT(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : zc, Tn = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Ut, I = ot(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Pt(_.MATHML_TEXT_INTEGRATION_POINTS) : Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), Z = ot(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? Pt(_.HTML_INTEGRATION_POINTS) : Ee({}, ["annotation-xml"]);
    const V = ot(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? Pt(_.CUSTOM_ELEMENT_HANDLING) : Gr(null);
    if (de = Gr(null), ot(V, "tagNameCheck") && At(V.tagNameCheck) && (de.tagNameCheck = V.tagNameCheck), ot(V, "attributeNameCheck") && At(V.attributeNameCheck) && (de.attributeNameCheck = V.attributeNameCheck), ot(V, "allowCustomizedBuiltInElements") && typeof V.allowCustomizedBuiltInElements == "boolean" && (de.allowCustomizedBuiltInElements = V.allowCustomizedBuiltInElements), Ue && (ct = !1), Ae && (Q = !0), Et && (H = Ee({}, Mc), ye = Gr(null), Et.html === !0 && (Ee(H, $c), Ee(ye, Dc)), Et.svg === !0 && (Ee(H, es), Ee(ye, rs), Ee(ye, Qo)), Et.svgFilters === !0 && (Ee(H, ts), Ee(ye, rs), Ee(ye, Qo)), Et.mathMl === !0 && (Ee(H, ns), Ee(ye, Fc), Ee(ye, Qo))), qe.tagCheck = null, qe.attributeCheck = null, ot(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? qe.tagCheck = _.ADD_TAGS : Dt(_.ADD_TAGS) && (H === je && (H = Pt(H)), Ee(H, _.ADD_TAGS, fe))), ot(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? qe.attributeCheck = _.ADD_ATTR : Dt(_.ADD_ATTR) && (ye === Xe && (ye = Pt(ye)), Ee(ye, _.ADD_ATTR, fe))), ot(_, "ADD_URI_SAFE_ATTR") && Dt(_.ADD_URI_SAFE_ATTR) && Ee(ir, _.ADD_URI_SAFE_ATTR, fe), ot(_, "FORBID_CONTENTS") && Dt(_.FORBID_CONTENTS) && (He === wn && (He = Pt(He)), Ee(He, _.FORBID_CONTENTS, fe)), ot(_, "ADD_FORBID_CONTENTS") && Dt(_.ADD_FORBID_CONTENTS) && (He === wn && (He = Pt(He)), Ee(He, _.ADD_FORBID_CONTENTS, fe)), Ce && (H["#text"] = !0), w && Ee(H, ["html", "head", "body"]), H.table && (Ee(H, ["tbody"]), delete tt.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ho('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ho('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      C = _.TRUSTED_TYPES_POLICY, O = C.createHTML("");
    } else
      C === void 0 && (C = gT(m, o)), C !== null && typeof O == "string" && (O = C.createHTML(""));
    (ve.uponSanitizeElement.length > 0 || ve.uponSanitizeAttribute.length > 0) && H === je && (H = Pt(H)), ve.uponSanitizeAttribute.length > 0 && ye === Xe && (ye = Pt(ye)), Vt && Vt(_), ut = _;
  }, cn = Ee({}, [...es, ...ts, ...oT]), nt = Ee({}, [...ns, ...aT]), Un = function(_) {
    let V = f(_);
    (!V || !V.tagName) && (V = {
      namespaceURI: Tn,
      tagName: "template"
    });
    const te = vo(_.tagName), Ne = vo(V.tagName);
    return ur[_.namespaceURI] ? _.namespaceURI === sn ? V.namespaceURI === Ut ? te === "svg" : V.namespaceURI === kn ? te === "svg" && (Ne === "annotation-xml" || I[Ne]) : !!cn[te] : _.namespaceURI === kn ? V.namespaceURI === Ut ? te === "math" : V.namespaceURI === sn ? te === "math" && Z[Ne] : !!nt[te] : _.namespaceURI === Ut ? V.namespaceURI === sn && !Z[Ne] || V.namespaceURI === kn && !I[Ne] ? !1 : !nt[te] && (W[te] || !cn[te]) : !!(ge === "application/xhtml+xml" && ur[_.namespaceURI]) : !1;
  }, qt = function(_) {
    jr(t.removed, {
      element: _
    });
    try {
      f(_).removeChild(_);
    } catch {
      h(_);
    }
  }, P = function(_, V) {
    try {
      jr(t.removed, {
        attribute: V.getAttributeNode(_),
        from: V
      });
    } catch {
      jr(t.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(_), _ === "is")
      if (Q || Ae)
        try {
          qt(V);
        } catch {
        }
      else
        try {
          V.setAttribute(_, "");
        } catch {
        }
  }, J = function(_) {
    let V = null, te = null;
    if (D)
      _ = "<remove></remove>" + _;
    else {
      const We = xc(_, /^[\r\n\t ]+/);
      te = We && We[0];
    }
    ge === "application/xhtml+xml" && Tn === Ut && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Ne = C ? C.createHTML(_) : _;
    if (Tn === Ut)
      try {
        V = new d().parseFromString(Ne, ge);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = Y.createDocument(Tn, "template", null);
      try {
        V.documentElement.innerHTML = Sr ? O : Ne;
      } catch {
      }
    }
    const Oe = V.body || V.documentElement;
    return _ && te && Oe.insertBefore(n.createTextNode(te), Oe.childNodes[0] || null), Tn === Ut ? re.call(V, w ? "html" : "body")[0] : w ? V.documentElement : Oe;
  }, Se = function(_) {
    return ne.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, rt = function(_) {
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
      let Ne = te.data;
      Vr([B, X, j], (Oe) => {
        Ne = Ur(Ne, Oe, " ");
      }), te.data = Ne, te = V.nextNode();
    }
  }, wt = function(_) {
    const V = v ? v(_) : null;
    return typeof V != "string" || fe(V) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== L(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    _.nodeType !== T(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== S(_);
  }, Jt = function(_) {
    if (!T || typeof _ != "object" || _ === null)
      return !1;
    try {
      return T(_) === Cn.documentFragment;
    } catch {
      return !1;
    }
  }, Yt = function(_) {
    if (!T || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof T(_) == "number";
    } catch {
      return !1;
    }
  };
  function Ht(le, _, V) {
    Vr(le, (te) => {
      te.call(t, _, V, ut);
    });
  }
  const fr = function(_) {
    let V = null;
    if (Ht(ve.beforeSanitizeElements, _, null), wt(_))
      return qt(_), !0;
    const te = fe(_.nodeName);
    if (Ht(ve.uponSanitizeElement, _, {
      tagName: te,
      allowedTags: H
    }), _t && _.hasChildNodes() && !Yt(_.firstElementChild) && Ct(/<[/\w!]/g, _.innerHTML) && Ct(/<[/\w!]/g, _.textContent) || _t && _.namespaceURI === Ut && te === "style" && Yt(_.firstElementChild) || _.nodeType === Cn.progressingInstruction || _t && _.nodeType === Cn.comment && Ct(/<[/\w]/g, _.data))
      return qt(_), !0;
    if (tt[te] || !(qe.tagCheck instanceof Function && qe.tagCheck(te)) && !H[te]) {
      if (!tt[te] && Cl(te) && (de.tagNameCheck instanceof RegExp && Ct(de.tagNameCheck, te) || de.tagNameCheck instanceof Function && de.tagNameCheck(te)))
        return !1;
      if (Ce && !He[te]) {
        const Oe = f(_), We = S(_);
        if (We && Oe) {
          const en = We.length;
          for (let Sn = en - 1; Sn >= 0; --Sn) {
            const un = b(We[Sn], !0);
            Oe.insertBefore(un, g(_));
          }
        }
      }
      return qt(_), !0;
    }
    return (T ? T(_) : _.nodeType) === Cn.element && !Un(_) || (te === "noscript" || te === "noembed" || te === "noframes") && Ct(/<\/no(script|embed|frames)/i, _.innerHTML) ? (qt(_), !0) : (Ue && _.nodeType === Cn.text && (V = _.textContent, Vr([B, X, j], (Oe) => {
      V = Ur(V, Oe, " ");
    }), _.textContent !== V && (jr(t.removed, {
      element: _.cloneNode()
    }), _.textContent = V)), Ht(ve.afterSanitizeElements, _, null), !1);
  }, Bo = function(_, V, te) {
    if (ht[V] || k && (V === "id" || V === "name") && (te in n || te in ln))
      return !1;
    const Ne = ye[V] || qe.attributeCheck instanceof Function && qe.attributeCheck(V, _);
    if (!(ct && !ht[V] && Ct(K, V))) {
      if (!(yt && Ct(z, V))) {
        if (!Ne || ht[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Cl(_) && (de.tagNameCheck instanceof RegExp && Ct(de.tagNameCheck, _) || de.tagNameCheck instanceof Function && de.tagNameCheck(_)) && (de.attributeNameCheck instanceof RegExp && Ct(de.attributeNameCheck, V) || de.attributeNameCheck instanceof Function && de.attributeNameCheck(V, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && de.allowCustomizedBuiltInElements && (de.tagNameCheck instanceof RegExp && Ct(de.tagNameCheck, te) || de.tagNameCheck instanceof Function && de.tagNameCheck(te)))
          ) return !1;
        } else if (!ir[V]) {
          if (!Ct(ke, Ur(te, De, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && _ !== "script" && Rc(te, "data:") === 0 && Vn[_])) {
              if (!(gt && !Ct(me, Ur(te, De, "")))) {
                if (te)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Jd = Ee({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Cl = function(_) {
    return !Jd[vo(_)] && Ct(Te, _);
  }, Ol = function(_) {
    Ht(ve.beforeSanitizeAttributes, _, null);
    const V = _.attributes;
    if (!V || wt(_))
      return;
    const te = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let Ne = V.length;
    for (; Ne--; ) {
      const Oe = V[Ne], We = Oe.name, en = Oe.namespaceURI, Sn = Oe.value, un = fe(We), Va = Sn;
      let kt = We === "value" ? Va : Xk(Va);
      if (te.attrName = un, te.attrValue = kt, te.keepAttr = !0, te.forceKeepAttr = void 0, Ht(ve.uponSanitizeAttribute, _, te), kt = te.attrValue, $ && (un === "id" || un === "name") && Rc(kt, he) !== 0 && (P(We, _), kt = he + kt), _t && Ct(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, kt)) {
        P(We, _);
        continue;
      }
      if (un === "attributename" && xc(kt, "href")) {
        P(We, _);
        continue;
      }
      if (te.forceKeepAttr)
        continue;
      if (!te.keepAttr) {
        P(We, _);
        continue;
      }
      if (!vt && Ct(/\/>/i, kt)) {
        P(We, _);
        continue;
      }
      Ue && Vr([B, X, j], (Il) => {
        kt = Ur(kt, Il, " ");
      });
      const Ll = fe(_.nodeName);
      if (!Bo(Ll, un, kt)) {
        P(We, _);
        continue;
      }
      if (C && typeof m == "object" && typeof m.getAttributeType == "function" && !en)
        switch (m.getAttributeType(Ll, un)) {
          case "TrustedHTML": {
            kt = C.createHTML(kt);
            break;
          }
          case "TrustedScriptURL": {
            kt = C.createScriptURL(kt);
            break;
          }
        }
      if (kt !== Va)
        try {
          en ? _.setAttributeNS(en, We, kt) : _.setAttribute(We, kt), wt(_) ? qt(_) : Ic(t.removed);
        } catch {
          P(We, _);
        }
    }
    Ht(ve.afterSanitizeAttributes, _, null);
  }, Vo = function(_) {
    let V = null;
    const te = Se(_);
    for (Ht(ve.beforeSanitizeShadowDOM, _, null); V = te.nextNode(); )
      if (Ht(ve.uponSanitizeShadowNode, V, null), fr(V), Ol(V), Jt(V.content) && Vo(V.content), (T ? T(V) : V.nodeType) === Cn.element) {
        const Oe = E ? E(V) : V.shadowRoot;
        Jt(Oe) && (Fr(Oe), Vo(Oe));
      }
    Ht(ve.afterSanitizeShadowDOM, _, null);
  }, Fr = function(_) {
    const V = T ? T(_) : _.nodeType;
    if (V === Cn.element) {
      const Oe = E ? E(_) : _.shadowRoot;
      Jt(Oe) && (Fr(Oe), Vo(Oe));
    }
    const te = S ? S(_) : _.childNodes;
    if (!te)
      return;
    const Ne = [];
    Vr(te, (Oe) => {
      jr(Ne, Oe);
    });
    for (const Oe of Ne)
      Fr(Oe);
    if (V === Cn.element) {
      const Oe = v ? v(_) : null;
      if (typeof Oe == "string" && fe(Oe) === "template") {
        const We = _.content;
        Jt(We) && Fr(We);
      }
    }
  };
  return t.sanitize = function(le) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, te = null, Ne = null, Oe = null;
    if (Sr = !le, Sr && (le = "<!-->"), typeof le != "string" && !Yt(le) && (le = nT(le), typeof le != "string"))
      throw ho("dirty is not a string, aborting");
    if (!t.isSupported)
      return le;
    if (A || jn(_), t.removed = [], typeof le == "string" && (Pe = !1), Pe) {
      const Sn = v ? v(le) : le.nodeName;
      if (typeof Sn == "string") {
        const un = fe(Sn);
        if (!H[un] || tt[un])
          throw ho("root node is forbidden and cannot be sanitized in-place");
      }
      if (wt(le))
        throw ho("root node is clobbered and cannot be sanitized in-place");
      Fr(le);
    } else if (Yt(le))
      V = J("<!---->"), te = V.ownerDocument.importNode(le, !0), te.nodeType === Cn.element && te.nodeName === "BODY" || te.nodeName === "HTML" ? V = te : V.appendChild(te), Fr(te);
    else {
      if (!Q && !Ue && !w && // eslint-disable-next-line unicorn/prefer-includes
      le.indexOf("<") === -1)
        return C && ce ? C.createHTML(le) : le;
      if (V = J(le), !V)
        return Q ? null : ce ? O : "";
    }
    V && D && qt(V.firstChild);
    const We = Se(Pe ? le : V);
    for (; Ne = We.nextNode(); )
      fr(Ne), Ol(Ne), Jt(Ne.content) && Vo(Ne.content);
    if (Pe)
      return Ue && rt(le), le;
    if (Q) {
      if (Ue && rt(V), Ae)
        for (Oe = ue.call(V.ownerDocument); V.firstChild; )
          Oe.appendChild(V.firstChild);
      else
        Oe = V;
      return (ye.shadowroot || ye.shadowrootmode) && (Oe = pe.call(r, Oe, !0)), Oe;
    }
    let en = w ? V.outerHTML : V.innerHTML;
    return w && H["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && Ct(pT, V.ownerDocument.doctype.name) && (en = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + en), Ue && Vr([B, X, j], (Sn) => {
      en = Ur(en, Sn, " ");
    }), C && ce ? C.createHTML(en) : en;
  }, t.setConfig = function() {
    let le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    jn(le), A = !0;
  }, t.clearConfig = function() {
    ut = null, A = !1;
  }, t.isValidAttribute = function(le, _, V) {
    ut || jn({});
    const te = fe(le), Ne = fe(_);
    return Bo(te, Ne, V);
  }, t.addHook = function(le, _) {
    typeof _ == "function" && jr(ve[le], _);
  }, t.removeHook = function(le, _) {
    if (_ !== void 0) {
      const V = Yk(ve[le], _);
      return V === -1 ? void 0 : Zk(ve[le], V, 1)[0];
    }
    return Ic(ve[le]);
  }, t.removeHooks = function(le) {
    ve[le] = [];
  }, t.removeAllHooks = function() {
    ve = Bc();
  }, t;
}
var vT = Qd();
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
const _T = { class: "local-ai-chat-shell" }, wT = { class: "chat-sidebar" }, kT = { class: "sidebar-header" }, TT = { class: "sidebar-title-block" }, ST = { class: "sidebar-search" }, ET = ["placeholder"], AT = { class: "sidebar-section recent-section" }, CT = { class: "section-title-row" }, OT = { class: "section-title" }, LT = { class: "sidebar-actions" }, IT = ["title"], xT = ["title"], RT = {
  key: 0,
  class: "chat-list"
}, PT = ["onClick", "onKeydown"], NT = { class: "chat-item-title" }, $T = { class: "chat-item-time" }, MT = ["title", "onClick"], DT = {
  key: 1,
  class: "sidebar-empty"
}, FT = { class: "chat-panel" }, zT = { class: "chat-topbar" }, BT = { class: "chat-topbar-main" }, VT = { class: "chat-title-row" }, jT = { class: "service-url" }, UT = { class: "chat-topbar-actions" }, HT = { class: "date-divider" }, WT = {
  key: 0,
  class: "empty-state"
}, GT = { class: "empty-title" }, KT = { class: "empty-desc" }, qT = { class: "message-avatar" }, YT = { key: 1 }, ZT = { class: "message-body" }, XT = {
  key: 0,
  class: "user-bubble"
}, QT = { class: "assistant-head" }, JT = {
  key: 0,
  class: "assistant-content-stack"
}, eS = ["open"], tS = { class: "reasoning-summary-title" }, nS = { key: 0 }, rS = ["innerHTML"], oS = ["innerHTML"], aS = {
  key: 1,
  class: "message-content loading-text"
}, sS = {
  key: 0,
  class: "message-stats"
}, lS = {
  key: 1,
  class: "message-warning"
}, iS = {
  key: 2,
  class: "message-actions"
}, cS = ["title", "onClick"], uS = ["title", "onClick"], dS = ["title"], fS = ["title"], pS = ["title", "onClick"], mS = ["title", "onClick"], hS = ["title"], gS = ["placeholder", "onKeydown"], vS = { class: "input-toolbar" }, bS = { class: "input-toolbar-left" }, yS = ["title"], _S = ["title", "aria-pressed"], wS = { class: "model-select-shell" }, kS = ["disabled"], TS = ["value"], SS = {
  key: 0,
  value: ""
}, ES = { class: "input-toolbar-right" }, AS = ["title", "aria-label"], CS = ["disabled", "title", "aria-label"], OS = 96, LS = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Po(), n = U(""), r = U([]), o = U(""), a = U(""), s = U(!1), i = U(!1), l = U(!1), u = U(!1), d = U(!0), m = U(!1), p = U(null), b = U(null), h = U(null), g = U(""), S = U(null), f = U(null), E = U(Date.now());
    let L = null, T = null;
    const v = /* @__PURE__ */ new Map(), C = x(() => !!a.value.trim() && !s.value), O = x(() => S.value?.healthy ? t("localAi.serviceHealthy") : S.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), M = x(
      () => r.value.find((I) => I.id === o.value) ?? null
    ), Y = x(() => M.value?.messages ?? []), ne = (I) => I ? I.split(/[\\/]+/).pop() ?? I : "", ue = x(
      () => ne(g.value) || ne(S.value?.modelPath) || ne(b.value?.modelPath) || t("localAi.localModel")
    ), re = x(() => h.value?.mainModels ?? []), pe = x(() => {
      const I = ue.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(I);
    }), ve = x(() => {
      const I = n.value.trim().toLowerCase();
      return r.value.filter(
        (Z) => !I || Z.title.toLowerCase().includes(I) || Z.messages.some(
          (W) => W.content.toLowerCase().includes(I)
        )
      ).slice().sort((Z, W) => W.updatedAt.localeCompare(Z.updatedAt));
    }), B = () => t("localAi.now"), X = () => {
      const I = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: I,
        updatedAt: I,
        updatedAtLabel: B(),
        messages: []
      };
    }, j = () => {
      const I = f.value;
      return I ? I.scrollHeight - I.scrollTop - I.clientHeight <= OS : !0;
    }, K = () => {
      const I = j();
      d.value = I, m.value = !I;
    }, z = () => {
      K();
    }, me = async (I = {}) => {
      await at();
      const Z = f.value;
      !Z || !I.force && !d.value || (Z.scrollTop = Z.scrollHeight, K());
    }, De = () => {
      d.value = !0, me({ force: !0 });
    }, Te = async () => {
      try {
        b.value = await Wd(), g.value = b.value.modelPath ?? "", h.value = await Gd(b.value), pe.value || (u.value = !1);
      } catch (I) {
        fn.warn("[LocalAI] refresh chat config failed", I);
      }
    }, ke = async () => {
      i.value = !0;
      try {
        S.value = await Kd();
      } catch (I) {
        fn.warn("[LocalAI] refresh chat status failed", I);
      } finally {
        i.value = !1;
      }
    }, H = async () => {
      try {
        const I = await Fk();
        r.value = I.map((Z) => ({
          id: Z.id,
          title: Z.title,
          createdAt: Z.createdAt,
          updatedAt: Z.updatedAt,
          updatedAtLabel: new Date(Z.updatedAt).toLocaleString(),
          messages: Z.turns.map((W) => ({
            id: W.id,
            role: W.role,
            content: W.content,
            createdAt: W.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (I) {
        fn.warn("[LocalAI] refresh histories failed", I);
      }
    }, je = async () => {
      await Promise.all([Te(), ke(), H()]);
    }, ye = async () => {
      const I = M.value;
      I && await zk({
        id: I.id,
        title: I.title,
        createdAt: I.createdAt,
        updatedAt: I.updatedAt,
        turns: I.messages.map((Z) => ({
          id: Z.id,
          role: Z.role,
          content: Z.content,
          createdAt: Z.createdAt
        }))
      });
    }, Xe = () => {
      const I = X();
      r.value.unshift(I), o.value = I.id, a.value = "";
    }, de = () => {
      M.value || Xe();
    }, tt = (I) => {
      o.value = I, d.value = !0, me({ force: !0 });
    }, ht = async (I) => {
      r.value = r.value.filter((Z) => Z.id !== I), await Bk(I), o.value === I && (o.value = r.value[0]?.id ?? "");
    }, qe = async () => {
      if (!(!b.value || !g.value)) {
        b.value.modelPath = g.value;
        try {
          b.value = await aa(b.value), S.value?.running && (S.value = await qd()), $t.msg(t("localAi.modelChanged"));
        } catch (I) {
          $t.msg(`${t("localAi.configSaveFailed")}: ${I}`, "error");
        }
      }
    }, yt = () => Y.value.filter((I) => !I.streaming).map((I) => ({
      role: I.role,
      content: I.content
    })), ct = (I) => {
      const Z = v.get(I);
      if (Z) return Z;
      const W = yT(Fe.parse(I, { async: !1 }));
      if (v.set(I, W), v.size > 80) {
        const ge = v.keys().next().value;
        typeof ge == "string" && v.delete(ge);
      }
      return W;
    }, gt = (I) => {
      const Z = I.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!Z || Z.index === void 0)
        return { reasoning: "", answer: I };
      const W = I.slice(0, Z.index).trim(), ge = Z[0], Le = I.slice(Z.index + ge.length).trim();
      return {
        reasoning: (Z[1] ?? "").trim(),
        answer: [W, Le].filter(Boolean).join(`

`)
      };
    }, vt = (I) => gt(I).reasoning, Ue = (I) => gt(I).answer, _t = (I) => !!Ue(I.content), w = (I) => !!(I.streaming && I.allowThinking && I.reasoningStartedAt && !I.reasoningEndedAt && !_t(I)), A = (I) => {
      if (!I.reasoningStartedAt) return "0.00";
      const Z = I.reasoningEndedAt ?? (I.streaming ? E.value : Date.now());
      return Math.max(0, (Z - I.reasoningStartedAt) / 1e3).toFixed(2);
    }, D = (I) => !I.reasoningStartedAt && I.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: A(I)
    }), Q = (I) => new Date(
      I.createdAt || M.value?.updatedAt || Date.now()
    ), Ae = (I) => Q(I).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), ce = (I) => I.streaming ? w(I) ? t("localAi.thinking") : t("localAi.generating") : Ae(I), k = (I) => I.allowThinking && !I.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), $ = (I, Z) => {
      I.allowThinking && (Z.includes("<think>") && !I.reasoningStartedAt && (I.reasoningStartedAt = Date.now()), Z.includes("</think>") && !I.reasoningEndedAt && (I.reasoningEndedAt = Date.now()));
    }, he = (I) => {
      const Z = I.trim();
      if (!Z) return 0;
      const W = (Z.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Ye = (Z.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((fe, ut) => /^[A-Za-z0-9_]+$/.test(ut) ? fe + Math.max(1, Math.ceil(ut.length / 4)) : fe + 1, 0);
      return Math.max(1, Math.ceil(W + Ye));
    }, Ce = (I) => he(
      I.map((Z) => `${Z.role}: ${Z.content}`).join(`
`)
    ), Pe = (I) => {
      const Z = E.value, W = Y.value.findIndex(
        (At) => At.id === I.id
      ), ge = I.stats?.promptTokens ?? I.promptTokens ?? he(
        Y.value.slice(0, Math.max(0, W)).map((At) => At.content).join(`
`)
      ), Le = I.stats?.completionTokens ?? he(I.content), Ye = I.stats?.totalTokens ?? ge + Le, fe = b.value?.ctxSize ?? 4096, ut = (I.stats?.generationTimeMs ?? I.elapsedMs ?? Z - Q(I).getTime()) / 1e3, ln = I.stats?.tokensPerSecond ?? (ut > 0 ? Le / ut : 0);
      return {
        context: Ye,
        contextMax: fe,
        contextPercent: Math.min(100, Math.round(Ye / fe * 100)),
        output: Le,
        outputMax: (b.value?.maxTokens ?? 0) > 0 ? String(b.value?.maxTokens) : "∞",
        seconds: ut.toFixed(1),
        speed: ln.toFixed(1)
      };
    }, Et = (I) => I.repetitionStopped ? t("localAi.repetitionStopped") : I.interrupted ? t("localAi.streamInterrupted") : I.stopped ? t("localAi.generationStopped") : I.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", He = (I) => {
      const Z = I.replace(/\s+/g, " ").trim();
      if (Z.length < 360) return !1;
      const ge = Z.slice(-1200).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((fe) => fe.toLowerCase()) ?? [];
      if (ge.length < 72) return !1;
      const Le = ge.slice(-80), Ye = /* @__PURE__ */ new Map();
      for (const fe of Le) Ye.set(fe, (Ye.get(fe) ?? 0) + 1);
      if ([...Ye.values()].some((fe) => fe >= 28)) return !0;
      for (let fe = 1; fe <= 4; fe += 1) {
        const ut = ge.slice(-fe).join("\0");
        let ln = 1;
        for (let At = ge.length - fe * 2; At >= 0 && ge.slice(At, At + fe).join("\0") === ut; At -= fe)
          ln += 1;
        if (ln >= Math.max(10, Math.ceil(32 / fe))) return !0;
      }
      return !1;
    }, wn = () => {
      T || (E.value = Date.now(), T = setInterval(() => {
        E.value = Date.now();
      }, 250));
    }, Vn = () => {
      T && (clearInterval(T), T = null, E.value = Date.now());
    }, Tr = async (I) => {
      const Z = performance.now(), W = Yd();
      let ge = "", Le = null, Ye = null, fe = !1, ut = !1;
      p.value = W, l.value = !1;
      const ln = async () => {
        if (!ge) {
          Le = null, Ye?.(), Ye = null;
          return;
        }
        const nt = l.value ? 240 : ge.length > 240 ? 18 : 6;
        I.content += ge.slice(0, nt), ge = ge.slice(nt), !ut && !l.value && He(I.content) && (ut = !0, l.value = !0, I.repetitionStopped = !0, Qa(W).catch(
          (Un) => fn.warn("[LocalAI] repetition stop failed", Un)
        )), await me(), Le = window.setTimeout(() => {
          ln().catch(
            (Un) => fn.warn("[LocalAI] stream pump failed", Un)
          );
        }, 24);
      }, At = (nt) => {
        nt && ($(I, nt), ge += nt, Le === null && (Le = window.setTimeout(() => {
          ln().catch(
            (Un) => fn.warn("[LocalAI] stream pump failed", Un)
          );
        }, 12)));
      }, jn = async () => {
        !ge && Le === null || await new Promise((nt) => {
          Ye = nt;
        });
      }, cn = await Dk(
        {
          messages: yt(),
          enableThinking: I.allowThinking === !0
        },
        (nt) => {
          fe = !0, At(nt);
        },
        {
          requestId: W,
          onStats: (nt) => {
            I.stats = nt, E.value = Date.now();
          }
        }
      ).catch(async (nt) => {
        throw await jn(), nt;
      });
      if (!fe)
        At(cn.content);
      else if (!l.value) {
        const nt = I.content.length + ge.length;
        cn.content.length > nt && At(cn.content.slice(nt));
      }
      await jn(), !l.value && cn.content && I.content !== cn.content && (I.content = cn.content), I.streaming = !1, I.elapsedMs = performance.now() - Z, I.stopped = l.value, I.interrupted = !1, I.error = "", E.value = Date.now(), p.value = null;
    }, ir = async () => {
      const I = p.value;
      if (!(!s.value || !I || l.value)) {
        l.value = !0;
        try {
          await Qa(I);
        } catch (Z) {
          fn.warn("[LocalAI] cancel stream failed", Z);
        }
      }
    }, cr = async () => {
      const I = a.value.trim();
      if (!I || s.value) return;
      de();
      const Z = (/* @__PURE__ */ new Date()).toISOString();
      M.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: I,
        createdAt: Z
      });
      const W = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: u.value && pe.value,
        promptTokens: Ce(yt())
      };
      M.value?.messages.push(W), a.value = "", s.value = !0, wn(), await me({ force: !0 });
      try {
        await Tr(W), M.value && (M.value.title = M.value.title === t("localAi.newChatTitle") ? I.slice(0, 28) : M.value.title, M.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), M.value.updatedAtLabel = new Date(
          M.value.updatedAt
        ).toLocaleString(), await ye()), await ke();
      } catch (ge) {
        l.value || ($t.msg(`${t("localAi.chatFailed")}: ${ge}`, "error"), W.error = String(ge), W.interrupted = !!W.content.trim(), W.interrupted || (W.content = String(ge)), M.value && (M.value.title = M.value.title === t("localAi.newChatTitle") ? I.slice(0, 28) : M.value.title, M.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), M.value.updatedAtLabel = new Date(
          M.value.updatedAt
        ).toLocaleString(), await ye())), W.streaming = !1, W.elapsedMs = performance.now() - Q(W).getTime();
      } finally {
        s.value = !1, p.value = null, Vn(), await me();
      }
    }, kn = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, sn = (I) => {
      const Z = new Date(I), W = /* @__PURE__ */ new Date(), ge = W.getTime() - Z.getTime(), Le = 24 * 60 * 60 * 1e3;
      return Z.toDateString() === W.toDateString() ? Z.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ge < Le * 2 ? t("localAi.yesterday") : ge < Le * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(ge / Le))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(ge / (Le * 7)))
      });
    }, Ut = async (I) => {
      try {
        await navigator.clipboard.writeText(I.content), $t.msg(t("localAi.copied"));
      } catch (Z) {
        $t.msg(`${t("common.operationFailed")}: ${Z}`, "error");
      }
    }, Tn = async (I) => {
      M.value && (M.value.messages = M.value.messages.filter(
        (Z) => Z.id !== I
      ), M.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), M.value.updatedAtLabel = new Date(
        M.value.updatedAt
      ).toLocaleString(), await ye());
    }, Sr = (I) => {
      a.value = I.content;
    }, ur = () => {
      $t.msg(t("localAi.feedbackSaved"));
    }, dr = async (I) => {
      const Z = M.value;
      if (!Z || s.value) return;
      const W = Z.messages.findIndex(
        (Ye) => Ye.id === I
      );
      if (!Z.messages.slice(0, W).reverse().find((Ye) => Ye.role === "user")) return;
      Z.messages = Z.messages.slice(0, W);
      const Le = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: u.value && pe.value,
        promptTokens: Ce(yt())
      };
      Z.messages.push(Le), s.value = !0, wn(), await me({ force: !0 });
      try {
        await Tr(Le), Z.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Z.updatedAtLabel = new Date(Z.updatedAt).toLocaleString(), await ye();
      } catch (Ye) {
        l.value || ($t.msg(`${t("localAi.chatFailed")}: ${Ye}`, "error"), Le.error = String(Ye), Le.interrupted = !!Le.content.trim(), Le.interrupted || (Le.content = String(Ye)), Z.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Z.updatedAtLabel = new Date(Z.updatedAt).toLocaleString(), await ye()), Le.streaming = !1, Le.elapsedMs = performance.now() - Q(Le).getTime();
      } finally {
        s.value = !1, p.value = null, Vn(), await me();
      }
    };
    return it(async () => {
      await je(), L = setInterval(() => {
        ke().catch(
          (I) => fn.warn("[LocalAI] status timer failed", I)
        );
      }, 8e3);
    }), we(pe, (I) => {
      I || (u.value = !1);
    }), wa(() => {
      L && clearInterval(L), p.value && Qa(p.value), Vn();
    }), (I, Z) => (R(), G("main", _T, [
      y("aside", wT, [
        y("header", kT, [
          y("div", TT, [
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
        y("div", ST, [
          N(c(xf), {
            theme: "outline",
            size: "17"
          }),
          bt(y("input", {
            "onUpdate:modelValue": Z[0] || (Z[0] = (W) => Kr(n) ? n.value = W : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, ET), [
            [To, c(n)]
          ])
        ]),
        y("section", AT, [
          y("div", CT, [
            y(
              "div",
              OT,
              F(c(t)("localAi.recent")),
              1
              /* TEXT */
            ),
            y("div", LT, [
              y("button", {
                class: "icon-action-btn icon-action-btn--primary",
                type: "button",
                title: c(t)("localAi.newChat"),
                onClick: Xe
              }, [
                N(c(Ef), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, IT),
              y("button", {
                class: "icon-action-btn",
                type: "button",
                title: c(t)("plugins.refresh"),
                onClick: je
              }, [
                N(c(Nl), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, xT)
            ])
          ]),
          c(ve).length ? (R(), G("div", RT, [
            (R(!0), G(
              Ot,
              null,
              Cr(c(ve), (W) => (R(), G("div", {
                key: W.id,
                class: q([
                  "chat-list-item",
                  c(o) === W.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (ge) => tt(W.id),
                onKeydown: tn(Qe((ge) => tt(W.id), ["prevent"]), ["enter"])
              }, [
                N(c(If), {
                  theme: "outline",
                  size: "16"
                }),
                y(
                  "span",
                  NT,
                  F(W.title),
                  1
                  /* TEXT */
                ),
                y(
                  "span",
                  $T,
                  F(sn(W.updatedAt)),
                  1
                  /* TEXT */
                ),
                y("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: Qe((ge) => ht(W.id), ["stop"])
                }, [
                  N(c(Rl), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, MT)
              ], 42, PT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (R(), G(
            "div",
            DT,
            F(c(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      y("section", FT, [
        y("header", zT, [
          y("div", BT, [
            y("div", VT, [
              y(
                "h3",
                null,
                F(c(M)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              y(
                "span",
                {
                  class: q([
                    "status-pill",
                    c(S)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  Z[4] || (Z[4] = y(
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
              jT,
              F(c(S)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          y("div", UT, [
            N(c(Gn), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: kn
            }, {
              default: se(() => [
                N(c(os), {
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
            onScroll: z
          },
          [
            y("div", HT, [
              y(
                "span",
                null,
                F(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(Y).length ? ee("v-if", !0) : (R(), G("div", WT, [
              N(c($l), {
                theme: "outline",
                size: "28"
              }),
              y(
                "div",
                GT,
                F(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              y(
                "div",
                KT,
                F(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (R(!0), G(
              Ot,
              null,
              Cr(c(Y), (W) => (R(), G(
                "article",
                {
                  key: W.id,
                  class: q(["message-row", `message-row--${W.role}`])
                },
                [
                  y("div", qT, [
                    W.role === "assistant" ? (R(), ie(c($l), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (R(), G(
                      "span",
                      YT,
                      F(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  y("div", ZT, [
                    W.role === "user" ? (R(), G("div", XT, [
                      y(
                        "div",
                        null,
                        F(W.content),
                        1
                        /* TEXT */
                      ),
                      y(
                        "time",
                        null,
                        F(Ae(W)),
                        1
                        /* TEXT */
                      )
                    ])) : (R(), G(
                      Ot,
                      { key: 1 },
                      [
                        y("div", QT, [
                          y(
                            "span",
                            null,
                            F(c(ue)),
                            1
                            /* TEXT */
                          ),
                          y(
                            "small",
                            null,
                            F(ce(W)),
                            1
                            /* TEXT */
                          )
                        ]),
                        y(
                          "div",
                          {
                            class: q(["assistant-card", { "assistant-card--streaming": W.streaming }])
                          },
                          [
                            W.content ? (R(), G("div", JT, [
                              W.allowThinking && vt(W.content) ? (R(), G("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: W.streaming && w(W)
                              }, [
                                y("summary", null, [
                                  y("span", tS, [
                                    N(c(xl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    Zt(
                                      " " + F(D(W)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  W.streaming ? (R(), G(
                                    "small",
                                    nS,
                                    F(w(W) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                    1
                                    /* TEXT */
                                  )) : ee("v-if", !0)
                                ]),
                                y("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: ct(vt(W.content))
                                }, null, 8, rS)
                              ], 8, eS)) : ee("v-if", !0),
                              Ue(W.content) ? (R(), G("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: ct(Ue(W.content))
                              }, null, 8, oS)) : ee("v-if", !0)
                            ])) : (R(), G(
                              "div",
                              aS,
                              F(k(W)),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        W.content ? (R(), G("div", sS, [
                          y(
                            "span",
                            null,
                            " Context: " + F(Pe(W).context) + "/" + F(Pe(W).contextMax) + " (" + F(Pe(W).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            " Output: " + F(Pe(W).output) + "/" + F(Pe(W).outputMax),
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            F(Pe(W).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            F(Pe(W).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : ee("v-if", !0),
                        Et(W) ? (R(), G(
                          "div",
                          lS,
                          F(Et(W)),
                          1
                          /* TEXT */
                        )) : ee("v-if", !0),
                        W.streaming ? ee("v-if", !0) : (R(), G("div", iS, [
                          y("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (ge) => Ut(W)
                          }, [
                            N(c(Af), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, cS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (ge) => dr(W.id)
                          }, [
                            N(c(Nl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, uS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: ur
                          }, [
                            N(c(Lf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, dS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: ur
                          }, [
                            N(c(Cf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, fS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (ge) => Sr(W)
                          }, [
                            N(c(Of), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, pS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (ge) => Tn(W.id)
                          }, [
                            N(c(Rl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, mS)
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
        c(m) ? (R(), G("button", {
          key: 0,
          class: "scroll-bottom-btn",
          type: "button",
          title: c(t)("localAi.jumpToLatest"),
          onClick: De
        }, [
          N(c(Pl), {
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
        ], 8, hS)) : ee("v-if", !0),
        y(
          "form",
          {
            class: "chat-input-card",
            onSubmit: Qe(cr, ["prevent"])
          },
          [
            bt(y("textarea", {
              "onUpdate:modelValue": Z[1] || (Z[1] = (W) => Kr(a) ? a.value = W : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: tn(Qe(cr, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, gS), [
              [To, c(a)]
            ]),
            y("div", vS, [
              y("div", bS, [
                y("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: kn
                }, [
                  N(c(os), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, yS),
                c(pe) ? (R(), G("button", {
                  key: 0,
                  class: q([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(u) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(u) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(u),
                  onClick: Z[2] || (Z[2] = (W) => u.value = !c(u))
                }, [
                  N(c(xl), {
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
                ], 10, _S)) : ee("v-if", !0),
                y("label", wS, [
                  bt(y("select", {
                    "onUpdate:modelValue": Z[3] || (Z[3] = (W) => Kr(g) ? g.value = W : null),
                    disabled: c(s) || !c(re).length,
                    onChange: qe
                  }, [
                    (R(!0), G(
                      Ot,
                      null,
                      Cr(c(re), (W) => (R(), G("option", {
                        key: W,
                        value: W
                      }, F(ne(W)), 9, TS))),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    c(re).length ? ee("v-if", !0) : (R(), G(
                      "option",
                      SS,
                      F(c(ue)),
                      1
                      /* TEXT */
                    ))
                  ], 40, kS), [
                    [_f, c(g)]
                  ]),
                  N(c(Pl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              y("div", ES, [
                Z[5] || (Z[5] = y(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                c(s) ? (R(), G("button", {
                  key: 0,
                  class: "send-btn send-btn--stop",
                  type: "button",
                  title: c(t)("localAi.stopGenerating"),
                  "aria-label": c(t)("localAi.stopGenerating"),
                  onClick: ir
                }, [
                  N(c(Pf), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, AS)) : (R(), G("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(C),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  N(c(Rf), {
                    theme: "outline",
                    size: "15"
                  })
                ], 8, CS))
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), IS = /* @__PURE__ */ qs(LS, [["__scopeId", "data-v-916e3254"]]), xS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IS
}, Symbol.toStringTag, { value: "Module" }));
async function Vc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await xt("plugin:dialog|open", { options: e });
}
const RS = { class: "settings-panel local-ai-settings-shell" }, PS = { class: "local-ai-hero panel-card" }, NS = { class: "panel-title" }, $S = { class: "hero-desc" }, MS = { class: "header-actions" }, DS = {
  key: 0,
  class: "settings-grid"
}, FS = { class: "summary-panel panel-card" }, zS = { class: "status-strip" }, BS = { class: "memory-card" }, VS = { class: "memory-card__header" }, jS = { class: "memory-metrics" }, US = { class: "bottleneck-row" }, HS = { class: "summary-card" }, WS = { class: "summary-card__title" }, GS = { class: "summary-card__desc" }, KS = { class: "service-controls" }, qS = { class: "service-url" }, YS = { class: "summary-card" }, ZS = { class: "summary-card__title" }, XS = { class: "summary-card__desc" }, QS = { class: "summary-meta" }, JS = { class: "form-panel panel-card" }, e2 = { class: "settings-section" }, t2 = { class: "settings-section__header" }, n2 = { class: "field-stack" }, r2 = ["title"], o2 = { class: "path-control" }, a2 = ["title"], s2 = ["title"], l2 = ["title"], i2 = { class: "path-control" }, c2 = ["placeholder"], u2 = { class: "settings-section grid-two" }, d2 = { class: "settings-section__header" }, f2 = { class: "param-grid" }, p2 = ["title"], m2 = ["title"], h2 = ["title"], g2 = ["title"], v2 = ["title"], b2 = ["title"], y2 = { class: "settings-section grid-two" }, _2 = { class: "settings-section__header" }, w2 = { class: "switch-grid" }, k2 = ["title"], T2 = ["title"], S2 = ["title"], E2 = { class: "settings-section grid-two" }, A2 = { class: "settings-section__header" }, C2 = { class: "switch-grid switch-grid--two" }, O2 = ["title"], L2 = ["title"], I2 = ["title"], x2 = ["title"], R2 = { class: "settings-section grid-two" }, P2 = { class: "settings-section__header" }, N2 = { class: "param-grid param-grid--three" }, $2 = ["title"], M2 = ["title"], D2 = ["title"], F2 = ["title"], z2 = ["title"], B2 = ["title"], V2 = ["title"], j2 = ["title"], U2 = { class: "settings-footer" }, H2 = ["title"], W2 = /* @__PURE__ */ oe({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Po(), n = U(null), r = U(null), o = U(null), a = U(null), s = U(!1), i = U(!1), l = U(!1), u = U(!1), d = U(!1);
    let m = null;
    const p = x(() => !!a.value?.selectedModelPath), b = x({
      get: () => n.value?.modelPath ?? "",
      set: (K) => {
        n.value && (n.value.modelPath = K || void 0);
      }
    }), h = x({
      get: () => n.value?.mmprojPath ?? "",
      set: (K) => {
        n.value && (n.value.mmprojPath = K || void 0);
      }
    }), g = x(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), S = x(
      () => p.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), f = x(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), E = (K) => K.split(/[\\/]+/).pop() ?? K, L = x(() => {
      const z = E(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return z ? Number(z[1]) : 4;
    }), T = x(() => {
      const K = n.value;
      if (!K)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const z = Math.max(1.4, L.value * 0.92), me = Math.min(1, Math.max(0, K.gpuLayers) / 32), De = K.ctxSize / 8192 * 0.38 * (K.kvOffload ? 1 : 0.12), Te = K.batchSize / 512 * 0.18, ke = z * me + De + Te, H = z * (1 - me) + K.ctxSize / 8192 * 0.22, je = ke + H, ye = K.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : K.ctxSize >= 32768 || K.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: ke.toFixed(2),
        totalGb: je.toFixed(2),
        bottleneck: ye
      };
    }), v = (K) => t(`localAi.paramHints.${K}`), C = async () => {
      r.value = await Nk();
    }, O = async () => {
      o.value = await Kd();
    }, M = async () => {
      n.value && (a.value = await Gd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, Y = async () => {
      s.value = !0;
      try {
        n.value = await Wd(), await Promise.all([C(), M(), O()]);
      } catch (K) {
        fn.error("[LocalAI] refresh settings failed", K), $t.msg(`${t("localAi.refreshFailed")}: ${K}`, "error");
      } finally {
        s.value = !1;
      }
    }, ne = async () => {
      if (n.value)
        try {
          await aa(n.value);
        } catch (K) {
          fn.warn("[LocalAI] autosave failed", K);
        }
    }, ue = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await aa(n.value), await Promise.all([C(), M(), O()]), $t.msg(t("localAi.configSaved"));
        } catch (K) {
          $t.msg(`${t("localAi.configSaveFailed")}: ${K}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, re = async () => {
      const K = await Vc({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !K || Array.isArray(K) || !n.value || (n.value.modelDir = K, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await M());
    }, pe = async () => {
      const K = await Vc({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !K || Array.isArray(K) || !n.value || (n.value.runtimePath = K, await ne(), await C());
    }, ve = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await aa(n.value), o.value = await $k(n.value), $t.msg(t("localAi.serviceStarted"));
        } catch (K) {
          $t.msg(`${t("localAi.serviceStartFailed")}: ${K}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, B = async () => {
      u.value = !0;
      try {
        await ue(), o.value = await qd(), $t.msg(t("localAi.serviceRestarted"));
      } catch (K) {
        $t.msg(`${t("localAi.serviceRestartFailed")}: ${K}`, "error");
      } finally {
        u.value = !1;
      }
    }, X = async () => {
      d.value = !0;
      try {
        await Mk(), await O(), $t.msg(t("localAi.serviceStoppedMsg"));
      } catch (K) {
        $t.msg(`${t("localAi.serviceStopFailed")}: ${K}`, "error");
      } finally {
        d.value = !1;
      }
    }, j = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return it(async () => {
      await Y(), m = setInterval(() => {
        O().catch(
          (K) => fn.warn("[LocalAI] status refresh failed", K)
        );
      }, 5e3);
    }), wa(() => {
      m && clearInterval(m);
    }), (K, z) => {
      const me = qw, De = Kw, Te = xw, ke = tk;
      return R(), G("div", RS, [
        y("header", PS, [
          y("div", null, [
            y(
              "h3",
              NS,
              F(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            y(
              "p",
              $S,
              F(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          y("div", MS, [
            N(c(Gn), {
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
            N(c(Gn), {
              size: "small",
              loading: c(s),
              onClick: Y
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
        c(n) ? (R(), G("main", DS, [
          y("aside", FS, [
            y("div", zS, [
              y(
                "div",
                {
                  class: q(["status-item", { ready: c(r)?.available }])
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
                  class: q(["status-item", { ready: c(p) }])
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
                    F(c(S)),
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
                  class: q(["status-item", { ready: c(o)?.healthy }])
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
            y("section", BS, [
              y("div", VS, [
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
              y("div", jS, [
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
                    F(c(T).gpuGb) + " GB",
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
                    F(c(T).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", US, [
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
                  F(c(T).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            y("section", HS, [
              y(
                "div",
                WS,
                F(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              y(
                "div",
                GS,
                F(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              y("div", KS, [
                N(c(Gn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: ve
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
                N(c(Gn), {
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
                N(c(Gn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(d),
                  disabled: !c(o)?.running,
                  onClick: X
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
                qS,
                F(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            y("section", YS, [
              y(
                "div",
                ZS,
                F(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              y(
                "div",
                XS,
                F(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              y("div", QS, [
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
          y("section", JS, [
            y("div", e2, [
              y("div", t2, [
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
              y("div", n2, [
                y("label", {
                  class: "field-row",
                  title: v("modelDir")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  y("div", o2, [
                    bt(y(
                      "input",
                      {
                        "onUpdate:modelValue": z[0] || (z[0] = (H) => c(n).modelDir = H),
                        class: "text-input",
                        onChange: M
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [To, c(n).modelDir]
                    ]),
                    N(c(Gn), {
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
                ], 8, r2),
                y("label", {
                  class: "field-row",
                  title: v("mainModel")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  N(De, {
                    modelValue: c(b),
                    "onUpdate:modelValue": z[1] || (z[1] = (H) => Kr(b) ? b.value = H : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ne
                  }, {
                    default: se(() => [
                      (R(!0), G(
                        Ot,
                        null,
                        Cr(c(a)?.mainModels ?? [], (H) => (R(), ie(me, {
                          key: H,
                          label: E(H),
                          value: H
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, a2),
                y("label", {
                  class: "field-row",
                  title: v("mmprojModel")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  N(De, {
                    modelValue: c(h),
                    "onUpdate:modelValue": z[2] || (z[2] = (H) => Kr(h) ? h.value = H : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ne
                  }, {
                    default: se(() => [
                      (R(!0), G(
                        Ot,
                        null,
                        Cr(c(a)?.mmprojModels ?? [], (H) => (R(), ie(me, {
                          key: H,
                          label: E(H),
                          value: H
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, s2),
                y("label", {
                  class: "field-row",
                  title: v("runtimePath")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  y("div", i2, [
                    bt(y("input", {
                      "onUpdate:modelValue": z[3] || (z[3] = (H) => c(n).runtimePath = H),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, c2), [
                      [To, c(n).runtimePath]
                    ]),
                    N(c(Gn), {
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
                ], 8, l2)
              ])
            ]),
            y("div", u2, [
              y("div", d2, [
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
              y("div", f2, [
                y("label", {
                  class: "number-field",
                  title: v("ctxSize")
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
                    "onUpdate:modelValue": z[4] || (z[4] = (H) => c(n).ctxSize = H),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, p2),
                y("label", {
                  class: "number-field",
                  title: v("gpuLayers")
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
                    "onUpdate:modelValue": z[5] || (z[5] = (H) => c(n).gpuLayers = H),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, m2),
                y("label", {
                  class: "number-field",
                  title: v("threads")
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
                    "onUpdate:modelValue": z[6] || (z[6] = (H) => c(n).threads = H),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, h2),
                y("label", {
                  class: "number-field",
                  title: v("batchSize")
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
                    "onUpdate:modelValue": z[7] || (z[7] = (H) => c(n).batchSize = H),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, g2),
                y("label", {
                  class: "number-field",
                  title: v("ubatchSize")
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
                    "onUpdate:modelValue": z[8] || (z[8] = (H) => c(n).ubatchSize = H),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, v2),
                y("label", {
                  class: "number-field",
                  title: v("mainGpu")
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
                    "onUpdate:modelValue": z[9] || (z[9] = (H) => c(n).mainGpu = H),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, b2)
              ])
            ]),
            y("div", y2, [
              y("div", _2, [
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
              y("div", w2, [
                y("label", {
                  title: v("flashAttn")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": z[10] || (z[10] = (H) => c(n).flashAttn = H)
                  }, null, 8, ["modelValue"])
                ], 8, k2),
                y("label", {
                  title: v("kvOffload")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": z[11] || (z[11] = (H) => c(n).kvOffload = H)
                  }, null, 8, ["modelValue"])
                ], 8, T2),
                y("label", {
                  title: v("mmap")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": z[12] || (z[12] = (H) => c(n).mmap = H)
                  }, null, 8, ["modelValue"])
                ], 8, S2)
              ])
            ]),
            y("div", E2, [
              y("div", A2, [
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
              y("div", C2, [
                y("label", {
                  title: v("autoStart")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": z[13] || (z[13] = (H) => c(n).autoStartOnRequest = H)
                  }, null, 8, ["modelValue"])
                ], 8, O2),
                y("label", {
                  title: v("keepAlive")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  N(ke, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": z[14] || (z[14] = (H) => c(n).keepAlive = H)
                  }, null, 8, ["modelValue"])
                ], 8, L2),
                y("label", {
                  class: "number-field",
                  title: v("idleTimeout")
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
                    "onUpdate:modelValue": z[15] || (z[15] = (H) => c(n).idleTimeoutMinutes = H),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, I2),
                y("label", {
                  class: "number-field",
                  title: v("requestTimeout")
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
                    "onUpdate:modelValue": z[16] || (z[16] = (H) => c(n).requestTimeoutSecs = H),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, x2)
              ])
            ]),
            y("div", R2, [
              y("div", P2, [
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
              y("div", N2, [
                y("label", {
                  class: "number-field",
                  title: v("temperature")
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
                    "onUpdate:modelValue": z[17] || (z[17] = (H) => c(n).temperature = H),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, $2),
                y("label", {
                  class: "number-field",
                  title: v("topP")
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
                    "onUpdate:modelValue": z[18] || (z[18] = (H) => c(n).topP = H),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, M2),
                y("label", {
                  class: "number-field",
                  title: v("topK")
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
                    "onUpdate:modelValue": z[19] || (z[19] = (H) => c(n).topK = H),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, D2),
                y("label", {
                  class: "number-field",
                  title: v("minP")
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
                    "onUpdate:modelValue": z[20] || (z[20] = (H) => c(n).minP = H),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, F2),
                y("label", {
                  class: "number-field",
                  title: v("repeatPenalty")
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
                    "onUpdate:modelValue": z[21] || (z[21] = (H) => c(n).repeatPenalty = H),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, z2),
                y("label", {
                  class: "number-field",
                  title: v("repeatLastN")
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
                    "onUpdate:modelValue": z[22] || (z[22] = (H) => c(n).repeatLastN = H),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, B2),
                y("label", {
                  class: "number-field",
                  title: v("maxTokens")
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
                    "onUpdate:modelValue": z[23] || (z[23] = (H) => c(n).maxTokens = H),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, V2),
                y("label", {
                  class: "number-field",
                  title: v("port")
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
                    "onUpdate:modelValue": z[24] || (z[24] = (H) => c(n).port = H),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, j2)
              ])
            ]),
            y("div", U2, [
              N(c(Gn), {
                type: "primary",
                loading: c(i),
                onClick: ue
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
              c(o)?.commandLine ? (R(), G("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, F(c(o).commandLine), 9, H2)) : ee("v-if", !0)
            ])
          ])
        ])) : ee("v-if", !0)
      ]);
    };
  }
}), G2 = /* @__PURE__ */ qs(W2, [["__scopeId", "data-v-152a5e70"]]), K2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G2
}, Symbol.toStringTag, { value: "Module" }));
export {
  Z2 as activate,
  Z2 as default
};
