var Jf = Object.defineProperty;
var ep = (e, t, n) => t in e ? Jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qe = (e, t, n) => ep(e, typeof t != "symbol" ? t + "" : t, n);
import * as ds from "vue";
import { inject as Ge, createVNode as F, defineAsyncComponent as tp, ref as G, shallowRef as Sr, computed as N, watch as Oe, onMounted as yt, onUnmounted as ja, defineComponent as ce, h as Au, Text as Cu, Fragment as ft, getCurrentInstance as qt, unref as c, watchEffect as Iu, readonly as nl, getCurrentScope as np, onScopeDispose as rp, nextTick as gt, isRef as co, warn as op, provide as jn, createElementBlock as j, openBlock as R, mergeProps as uo, renderSlot as Ce, createElementVNode as v, toRef as rr, useAttrs as ap, useSlots as sp, normalizeStyle as Nt, normalizeClass as q, createCommentVNode as ee, createBlock as me, withCtx as fe, resolveDynamicComponent as Gt, withModifiers as rt, toDisplayString as D, onBeforeUnmount as Gn, Transition as ko, withDirectives as Ct, vShow as dr, reactive as zr, onActivated as lp, onUpdated as Lu, cloneVNode as ip, Comment as cp, Teleport as up, onBeforeMount as dp, onDeactivated as fp, createTextVNode as en, withKeys as _n, createSlots as pp, toRaw as mp, toRefs as rl, resolveComponent as Mr, resolveDirective as hp, toHandlerKey as gp, renderList as $n, vModelText as Ho, shallowReactive as vp, isVNode as Go, render as Ia, vModelSelect as bp } from "vue";
var yp = {
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
function _p() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function wp(e, t, n) {
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
var kp = Symbol("icon-context");
function rn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = _p(), i = Ge(kp, yp);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, m = a.strokeLinejoin, h = a.theme, y = a.fill, g = a.spin, b = wp(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: m,
          theme: h,
          fill: y
        }, i), L = [i.prefix + "-icon"];
        return L.push(i.prefix + "-icon-" + e), t && i.rtl && L.push(i.prefix + "-icon-rtl"), g && L.push(i.prefix + "-icon-spin"), F("span", {
          class: L.join(" ")
        }, [n(b)]);
      };
    }
  };
  return r;
}
const di = rn("brain", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), fi = rn("copy", !0, function(e) {
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
}), ua = rn("delete", !1, function(e) {
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
}), pi = rn("down", !1, function(e) {
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
}), fs = rn("edit", !0, function(e) {
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
}), Sp = rn("fork", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M37 12C39.2091 12 41 10.2091 41 8C41 5.79086 39.2091 4 37 4C34.7909 4 33 5.79086 33 8C33 10.2091 34.7909 12 37 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M11 12V15C11 22 24 25 24 32V36V32C24 25 37 22 37 15V12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), mi = rn("left-bar", !0, function(e) {
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
    d: "M16 6V42",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M13 42H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M13 6H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tp = rn("link", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hi = rn("refresh", !0, function(e) {
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
}), gi = rn("robot", !0, function(e) {
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
}), ps = rn("search", !0, function(e) {
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
}), Ep = rn("send", !0, function(e) {
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
}), Ou = rn("setting-two", !1, function(e) {
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
}), Ap = rn("square", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), VA = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => mE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Ou,
    component: tp(() => Promise.resolve().then(() => FA))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Cp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const vi = typeof window < "u", jr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ip = (e, t, n) => Lp({ l: e, k: t, s: n }), Lp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ot = (e) => typeof e == "number" && isFinite(e), Op = (e) => ol(e) === "[object Date]", La = (e) => ol(e) === "[object RegExp]", Wa = (e) => Be(e) && Object.keys(e).length === 0, Pt = Object.assign, xp = Object.create, Ye = (e = null) => xp(e);
let bi;
const Sa = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ye());
function yi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function _i(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Rp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${_i(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${_i(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Np = Object.prototype.hasOwnProperty;
function wn(e, t) {
  return Np.call(e, t);
}
const bt = Array.isArray, lt = (e) => typeof e == "function", ue = (e) => typeof e == "string", vt = (e) => typeof e == "boolean", Ve = (e) => e !== null && typeof e == "object", Pp = (e) => Ve(e) && lt(e.then) && lt(e.catch), xu = Object.prototype.toString, ol = (e) => xu.call(e), Be = (e) => ol(e) === "[object Object]", $p = (e) => e == null ? "" : bt(e) || Be(e) && e.toString === xu ? JSON.stringify(e, null, 2) : String(e);
function al(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const da = (e) => !Ve(e) || bt(e);
function Ta(e, t) {
  if (da(e) || da(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Ve(r[a]) && !Ve(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Ye()), da(o[a]) || da(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Mp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function xs(e, t, n) {
  return { start: e, end: t };
}
const je = {
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
}, Dp = 17;
function Ha(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Fp(e) {
  throw e;
}
const xn = " ", zp = "\r", Bt = `
`, Bp = "\u2028", Vp = "\u2029";
function Up(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (C) => t[C] === zp && t[C + 1] === Bt, i = (C) => t[C] === Bt, l = (C) => t[C] === Vp, u = (C) => t[C] === Bp, f = (C) => s(C) || i(C) || l(C) || u(C), m = () => n, h = () => r, y = () => o, g = () => a, b = (C) => s(C) || l(C) || u(C) ? Bt : t[C], L = () => b(n), p = () => b(n + a);
  function A() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function P() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function I() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(C = 0) {
    a = C;
  }
  function x() {
    const C = n + a;
    for (; C !== n; )
      A();
    a = 0;
  }
  return {
    index: m,
    line: h,
    column: y,
    peekOffset: g,
    charAt: b,
    currentChar: L,
    currentPeek: p,
    next: A,
    peek: P,
    reset: I,
    resetPeek: _,
    skipToPeek: x
  };
}
const Qn = void 0, jp = ".", wi = "'", Wp = "tokenizer";
function Hp(e, t = {}) {
  const n = t.location !== !1, r = Up(e), o = () => r.index(), a = () => Mp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function m(T, O, V, ...ne) {
    const $e = u();
    if (O.column += V, O.offset += V, f) {
      const ve = n ? xs($e.startLoc, O) : null, E = Ha(T, ve, {
        domain: Wp,
        args: ne
      });
      f(E);
    }
  }
  function h(T, O, V) {
    T.endLoc = a(), T.currentType = O;
    const ne = { type: O };
    return n && (ne.loc = xs(T.startLoc, T.endLoc)), V != null && (ne.value = V), ne;
  }
  const y = (T) => h(
    T,
    13
    /* TokenTypes.EOF */
  );
  function g(T, O) {
    return T.currentChar() === O ? (T.next(), O) : (m(je.EXPECTED_TOKEN, a(), 0, O), "");
  }
  function b(T) {
    let O = "";
    for (; T.currentPeek() === xn || T.currentPeek() === Bt; )
      O += T.currentPeek(), T.peek();
    return O;
  }
  function L(T) {
    const O = b(T);
    return T.skipToPeek(), O;
  }
  function p(T) {
    if (T === Qn)
      return !1;
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O === 95;
  }
  function A(T) {
    if (T === Qn)
      return !1;
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function P(T, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    b(T);
    const ne = p(T.currentPeek());
    return T.resetPeek(), ne;
  }
  function I(T, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    b(T);
    const ne = T.currentPeek() === "-" ? T.peek() : T.currentPeek(), $e = A(ne);
    return T.resetPeek(), $e;
  }
  function _(T, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    b(T);
    const ne = T.currentPeek() === wi;
    return T.resetPeek(), ne;
  }
  function x(T, O) {
    const { currentType: V } = O;
    if (V !== 7)
      return !1;
    b(T);
    const ne = T.currentPeek() === ".";
    return T.resetPeek(), ne;
  }
  function C(T, O) {
    const { currentType: V } = O;
    if (V !== 8)
      return !1;
    b(T);
    const ne = p(T.currentPeek());
    return T.resetPeek(), ne;
  }
  function Y(T, O) {
    const { currentType: V } = O;
    if (!(V === 7 || V === 11))
      return !1;
    b(T);
    const ne = T.currentPeek() === ":";
    return T.resetPeek(), ne;
  }
  function X(T, O) {
    const { currentType: V } = O;
    if (V !== 9)
      return !1;
    const ne = () => {
      const ve = T.currentPeek();
      return ve === "{" ? p(T.peek()) : ve === "@" || ve === "|" || ve === ":" || ve === "." || ve === xn || !ve ? !1 : ve === Bt ? (T.peek(), ne()) : he(T, !1);
    }, $e = ne();
    return T.resetPeek(), $e;
  }
  function se(T) {
    b(T);
    const O = T.currentPeek() === "|";
    return T.resetPeek(), O;
  }
  function he(T, O = !0) {
    const V = ($e = !1, ve = "") => {
      const E = T.currentPeek();
      return E === "{" || E === "@" || !E ? $e : E === "|" ? !(ve === xn || ve === Bt) : E === xn ? (T.peek(), V(!0, xn)) : E === Bt ? (T.peek(), V(!0, Bt)) : !0;
    }, ne = V();
    return O && T.resetPeek(), ne;
  }
  function le(T, O) {
    const V = T.currentChar();
    return V === Qn ? Qn : O(V) ? (T.next(), V) : null;
  }
  function ye(T) {
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36;
  }
  function _e(T) {
    return le(T, ye);
  }
  function U(T) {
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36 || // $
    O === 45;
  }
  function J(T) {
    return le(T, U);
  }
  function H(T) {
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function de(T) {
    return le(T, H);
  }
  function pe(T) {
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57 || // 0-9
    O >= 65 && O <= 70 || // A-F
    O >= 97 && O <= 102;
  }
  function Pe(T) {
    return le(T, pe);
  }
  function ae(T) {
    let O = "", V = "";
    for (; O = de(T); )
      V += O;
    return V;
  }
  function Z(T) {
    let O = "";
    for (; ; ) {
      const V = T.currentChar();
      if (V === "{" || V === "}" || V === "@" || V === "|" || !V)
        break;
      if (V === xn || V === Bt)
        if (he(T))
          O += V, T.next();
        else {
          if (se(T))
            break;
          O += V, T.next();
        }
      else
        O += V, T.next();
    }
    return O;
  }
  function Me(T) {
    L(T);
    let O = "", V = "";
    for (; O = J(T); )
      V += O;
    const ne = T.currentChar();
    if (ne && ne !== "}" && ne !== Qn && ne !== xn && ne !== Bt && ne !== "　") {
      const $e = Te(T);
      return m(je.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V + $e), V + $e;
    }
    return T.currentChar() === Qn && m(je.UNTERMINATED_CLOSING_BRACE, a(), 0), V;
  }
  function ke(T) {
    L(T);
    let O = "";
    return T.currentChar() === "-" ? (T.next(), O += `-${ae(T)}`) : O += ae(T), T.currentChar() === Qn && m(je.UNTERMINATED_CLOSING_BRACE, a(), 0), O;
  }
  function Se(T) {
    return T !== wi && T !== Bt;
  }
  function we(T) {
    L(T), g(T, "'");
    let O = "", V = "";
    for (; O = le(T, Se); )
      O === "\\" ? V += Q(T) : V += O;
    const ne = T.currentChar();
    return ne === Bt || ne === Qn ? (m(je.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ne === Bt && (T.next(), g(T, "'")), V) : (g(T, "'"), V);
  }
  function Q(T) {
    const O = T.currentChar();
    switch (O) {
      case "\\":
      case "'":
        return T.next(), `\\${O}`;
      case "u":
        return ge(T, O, 4);
      case "U":
        return ge(T, O, 6);
      default:
        return m(je.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, O), "";
    }
  }
  function ge(T, O, V) {
    g(T, O);
    let ne = "";
    for (let $e = 0; $e < V; $e++) {
      const ve = Pe(T);
      if (!ve) {
        m(je.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${O}${ne}${T.currentChar()}`);
        break;
      }
      ne += ve;
    }
    return `\\${O}${ne}`;
  }
  function at(T) {
    return T !== "{" && T !== "}" && T !== xn && T !== Bt;
  }
  function Te(T) {
    L(T);
    let O = "", V = "";
    for (; O = le(T, at); )
      V += O;
    return V;
  }
  function Xe(T) {
    let O = "", V = "";
    for (; O = _e(T); )
      V += O;
    return V;
  }
  function Lt(T) {
    const O = (V) => {
      const ne = T.currentChar();
      return ne === "{" || ne === "@" || ne === "|" || ne === "(" || ne === ")" || !ne || ne === xn ? V : (V += ne, T.next(), O(V));
    };
    return O("");
  }
  function ct(T) {
    L(T);
    const O = g(
      T,
      "|"
      /* TokenChars.Pipe */
    );
    return L(T), O;
  }
  function _t(T, O) {
    let V = null;
    switch (T.currentChar()) {
      case "{":
        return O.braceNest >= 1 && m(je.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), T.next(), V = h(
          O,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), L(T), O.braceNest++, V;
      case "}":
        return O.braceNest > 0 && O.currentType === 2 && m(je.EMPTY_PLACEHOLDER, a(), 0), T.next(), V = h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), O.braceNest--, O.braceNest > 0 && L(T), O.inLinked && O.braceNest === 0 && (O.inLinked = !1), V;
      case "@":
        return O.braceNest > 0 && m(je.UNTERMINATED_CLOSING_BRACE, a(), 0), V = wt(T, O) || y(O), O.braceNest = 0, V;
      default: {
        let $e = !0, ve = !0, E = !0;
        if (se(T))
          return O.braceNest > 0 && m(je.UNTERMINATED_CLOSING_BRACE, a(), 0), V = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, V;
        if (O.braceNest > 0 && (O.currentType === 4 || O.currentType === 5 || O.currentType === 6))
          return m(je.UNTERMINATED_CLOSING_BRACE, a(), 0), O.braceNest = 0, st(T, O);
        if ($e = P(T, O))
          return V = h(O, 4, Me(T)), L(T), V;
        if (ve = I(T, O))
          return V = h(O, 5, ke(T)), L(T), V;
        if (E = _(T, O))
          return V = h(O, 6, we(T)), L(T), V;
        if (!$e && !ve && !E)
          return V = h(O, 12, Te(T)), m(je.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V.value), L(T), V;
        break;
      }
    }
    return V;
  }
  function wt(T, O) {
    const { currentType: V } = O;
    let ne = null;
    const $e = T.currentChar();
    switch ((V === 7 || V === 8 || V === 11 || V === 9) && ($e === Bt || $e === xn) && m(je.INVALID_LINKED_FORMAT, a(), 0), $e) {
      case "@":
        return T.next(), ne = h(
          O,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), O.inLinked = !0, ne;
      case ".":
        return L(T), T.next(), h(
          O,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return L(T), T.next(), h(
          O,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return se(T) ? (ne = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, ne) : x(T, O) || Y(T, O) ? (L(T), wt(T, O)) : C(T, O) ? (L(T), h(O, 11, Xe(T))) : X(T, O) ? (L(T), $e === "{" ? _t(T, O) || ne : h(O, 10, Lt(T))) : (V === 7 && m(je.INVALID_LINKED_FORMAT, a(), 0), O.braceNest = 0, O.inLinked = !1, st(T, O));
    }
  }
  function st(T, O) {
    let V = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (O.braceNest > 0)
      return _t(T, O) || y(O);
    if (O.inLinked)
      return wt(T, O) || y(O);
    switch (T.currentChar()) {
      case "{":
        return _t(T, O) || y(O);
      case "}":
        return m(je.UNBALANCED_CLOSING_BRACE, a(), 0), T.next(), h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return wt(T, O) || y(O);
      default: {
        if (se(T))
          return V = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, V;
        if (he(T))
          return h(O, 0, Z(T));
        break;
      }
    }
    return V;
  }
  function ut() {
    const { currentType: T, offset: O, startLoc: V, endLoc: ne } = l;
    return l.lastType = T, l.lastOffset = O, l.lastStartLoc = V, l.lastEndLoc = ne, l.offset = o(), l.startLoc = a(), r.currentChar() === Qn ? h(
      l,
      13
      /* TokenTypes.EOF */
    ) : st(r, l);
  }
  return {
    nextToken: ut,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Gp = "parser", Kp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function qp(e, t, n) {
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
function Yp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(p, A, P, I, ..._) {
    const x = p.currentPosition();
    if (x.offset += I, x.column += I, n) {
      const C = t ? xs(P, x) : null, Y = Ha(A, C, {
        domain: Gp,
        args: _
      });
      n(Y);
    }
  }
  function o(p, A, P) {
    const I = { type: p };
    return t && (I.start = A, I.end = A, I.loc = { start: P, end: P }), I;
  }
  function a(p, A, P, I) {
    t && (p.end = A, p.loc && (p.loc.end = P));
  }
  function s(p, A) {
    const P = p.context(), I = o(3, P.offset, P.startLoc);
    return I.value = A, a(I, p.currentOffset(), p.currentPosition()), I;
  }
  function i(p, A) {
    const P = p.context(), { lastOffset: I, lastStartLoc: _ } = P, x = o(5, I, _);
    return x.index = parseInt(A, 10), p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function l(p, A) {
    const P = p.context(), { lastOffset: I, lastStartLoc: _ } = P, x = o(4, I, _);
    return x.key = A, p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function u(p, A) {
    const P = p.context(), { lastOffset: I, lastStartLoc: _ } = P, x = o(9, I, _);
    return x.value = A.replace(Kp, qp), p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function f(p) {
    const A = p.nextToken(), P = p.context(), { lastOffset: I, lastStartLoc: _ } = P, x = o(8, I, _);
    return A.type !== 11 ? (r(p, je.UNEXPECTED_EMPTY_LINKED_MODIFIER, P.lastStartLoc, 0), x.value = "", a(x, I, _), {
      nextConsumeToken: A,
      node: x
    }) : (A.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, Rn(A)), x.value = A.value || "", a(x, p.currentOffset(), p.currentPosition()), {
      node: x
    });
  }
  function m(p, A) {
    const P = p.context(), I = o(7, P.offset, P.startLoc);
    return I.value = A, a(I, p.currentOffset(), p.currentPosition()), I;
  }
  function h(p) {
    const A = p.context(), P = o(6, A.offset, A.startLoc);
    let I = p.nextToken();
    if (I.type === 8) {
      const _ = f(p);
      P.modifier = _.node, I = _.nextConsumeToken || p.nextToken();
    }
    switch (I.type !== 9 && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(I)), I = p.nextToken(), I.type === 2 && (I = p.nextToken()), I.type) {
      case 10:
        I.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(I)), P.key = m(p, I.value || "");
        break;
      case 4:
        I.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(I)), P.key = l(p, I.value || "");
        break;
      case 5:
        I.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(I)), P.key = i(p, I.value || "");
        break;
      case 6:
        I.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(I)), P.key = u(p, I.value || "");
        break;
      default: {
        r(p, je.UNEXPECTED_EMPTY_LINKED_KEY, A.lastStartLoc, 0);
        const _ = p.context(), x = o(7, _.offset, _.startLoc);
        return x.value = "", a(x, _.offset, _.startLoc), P.key = x, a(P, _.offset, _.startLoc), {
          nextConsumeToken: I,
          node: P
        };
      }
    }
    return a(P, p.currentOffset(), p.currentPosition()), {
      node: P
    };
  }
  function y(p) {
    const A = p.context(), P = A.currentType === 1 ? p.currentOffset() : A.offset, I = A.currentType === 1 ? A.endLoc : A.startLoc, _ = o(2, P, I);
    _.items = [];
    let x = null;
    do {
      const X = x || p.nextToken();
      switch (x = null, X.type) {
        case 0:
          X.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(X)), _.items.push(s(p, X.value || ""));
          break;
        case 5:
          X.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(X)), _.items.push(i(p, X.value || ""));
          break;
        case 4:
          X.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(X)), _.items.push(l(p, X.value || ""));
          break;
        case 6:
          X.value == null && r(p, je.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Rn(X)), _.items.push(u(p, X.value || ""));
          break;
        case 7: {
          const se = h(p);
          _.items.push(se.node), x = se.nextConsumeToken || null;
          break;
        }
      }
    } while (A.currentType !== 13 && A.currentType !== 1);
    const C = A.currentType === 1 ? A.lastOffset : p.currentOffset(), Y = A.currentType === 1 ? A.lastEndLoc : p.currentPosition();
    return a(_, C, Y), _;
  }
  function g(p, A, P, I) {
    const _ = p.context();
    let x = I.items.length === 0;
    const C = o(1, A, P);
    C.cases = [], C.cases.push(I);
    do {
      const Y = y(p);
      x || (x = Y.items.length === 0), C.cases.push(Y);
    } while (_.currentType !== 13);
    return x && r(p, je.MUST_HAVE_MESSAGES_IN_PLURAL, P, 0), a(C, p.currentOffset(), p.currentPosition()), C;
  }
  function b(p) {
    const A = p.context(), { offset: P, startLoc: I } = A, _ = y(p);
    return A.currentType === 13 ? _ : g(p, P, I, _);
  }
  function L(p) {
    const A = Hp(p, Pt({}, e)), P = A.context(), I = o(0, P.offset, P.startLoc);
    return t && I.loc && (I.loc.source = p), I.body = b(A), e.onCacheKey && (I.cacheKey = e.onCacheKey(p)), P.currentType !== 13 && r(A, je.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, p[P.offset] || ""), a(I, A.currentOffset(), A.currentPosition()), I;
  }
  return { parse: L };
}
function Rn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Zp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function ki(e, t) {
  for (let n = 0; n < e.length; n++)
    sl(e[n], t);
}
function sl(e, t) {
  switch (e.type) {
    case 1:
      ki(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ki(e.items, t);
      break;
    case 6: {
      sl(e.key, t), t.helper(
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
function Xp(e, t = {}) {
  const n = Zp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && sl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Qp(e) {
  const t = e.body;
  return t.type === 2 ? Si(t) : t.cases.forEach((n) => Si(n)), e;
}
function Si(e) {
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
      e.static = al(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function so(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      so(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        so(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        so(n[r]);
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
      so(t.key), t.k = t.key, delete t.key, t.modifier && (so(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Jp(e, t) {
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
  function l(b, L) {
    s.code += b;
  }
  function u(b, L = !0) {
    const p = L ? r : "";
    l(o ? p + "  ".repeat(b) : p);
  }
  function f(b = !0) {
    const L = ++s.indentLevel;
    b && u(L);
  }
  function m(b = !0) {
    const L = --s.indentLevel;
    b && u(L);
  }
  function h() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: f,
    deindent: m,
    newline: h,
    helper: (b) => `_${b}`,
    needIndent: () => s.needIndent
  };
}
function em(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), fo(e, t.key), t.modifier ? (e.push(", "), fo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function tm(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (fo(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function nm(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (fo(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function rm(e, t) {
  t.body ? fo(e, t.body) : e.push("null");
}
function fo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      rm(e, t);
      break;
    case 1:
      nm(e, t);
      break;
    case 2:
      tm(e, t);
      break;
    case 6:
      em(e, t);
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
const om = (e, t = {}) => {
  const n = ue(t.mode) ? t.mode : "normal", r = ue(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Jp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${al(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), fo(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function am(e, t = {}) {
  const n = Pt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Yp(n).parse(e);
  return r ? (a && Qp(i), o && so(i), { ast: i, code: "" }) : (Xp(i, n), om(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function sm() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Sa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Bn(e) {
  return Ve(e) && ll(e) === 0 && (wn(e, "b") || wn(e, "body"));
}
const Ru = ["b", "body"];
function lm(e) {
  return Ar(e, Ru);
}
const Nu = ["c", "cases"];
function im(e) {
  return Ar(e, Nu, []);
}
const Pu = ["s", "static"];
function cm(e) {
  return Ar(e, Pu);
}
const $u = ["i", "items"];
function um(e) {
  return Ar(e, $u, []);
}
const Mu = ["t", "type"];
function ll(e) {
  return Ar(e, Mu);
}
const Du = ["v", "value"];
function fa(e, t) {
  const n = Ar(e, Du);
  if (n != null)
    return n;
  throw Ko(t);
}
const Fu = ["m", "modifier"];
function dm(e) {
  return Ar(e, Fu);
}
const zu = ["k", "key"];
function fm(e) {
  const t = Ar(e, zu);
  if (t)
    return t;
  throw Ko(
    6
    /* NodeTypes.Linked */
  );
}
function Ar(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (wn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Bu = [
  ...Ru,
  ...Nu,
  ...Pu,
  ...$u,
  ...zu,
  ...Fu,
  ...Du,
  ...Mu
];
function Ko(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ms(e) {
  return (n) => pm(n, e);
}
function pm(e, t) {
  const n = lm(t);
  if (n == null)
    throw Ko(
      0
      /* NodeTypes.Resource */
    );
  if (ll(n) === 1) {
    const a = im(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Ti(e, i)
    ], []));
  } else
    return Ti(e, n);
}
function Ti(e, t) {
  const n = cm(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = um(t).reduce((o, a) => [...o, Rs(e, a)], []);
    return e.normalize(r);
  }
}
function Rs(e, t) {
  const n = ll(t);
  switch (n) {
    case 3:
      return fa(t, n);
    case 9:
      return fa(t, n);
    case 4: {
      const r = t;
      if (wn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (wn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ko(n);
    }
    case 5: {
      const r = t;
      if (wn(r, "i") && Ot(r.i))
        return e.interpolate(e.list(r.i));
      if (wn(r, "index") && Ot(r.index))
        return e.interpolate(e.list(r.index));
      throw Ko(n);
    }
    case 6: {
      const r = t, o = dm(r), a = fm(r);
      return e.linked(Rs(e, a), o ? Rs(e, o) : void 0, e.type);
    }
    case 7:
      return fa(t, n);
    case 8:
      return fa(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const mm = (e) => e;
let pa = Ye();
function hm(e, t = {}) {
  let n = !1;
  const r = t.onError || Fp;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...am(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function gm(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ue(e)) {
    vt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || mm)(e), o = pa[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = hm(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ms(a);
    return s ? i : pa[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = pa[n];
      return r || (pa[n] = ms(e));
    } else
      return ms(e);
  }
}
const or = {
  INVALID_ARGUMENT: Dp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, vm = 24;
function ar(e) {
  return Ha(e, null, void 0);
}
function il(e, t) {
  return t.locale != null ? Ei(t.locale) : Ei(e.locale);
}
let hs;
function Ei(e) {
  if (ue(e))
    return e;
  if (lt(e)) {
    if (e.resolvedOnce && hs != null)
      return hs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Pp(t))
        throw ar(or.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return hs = t;
    } else
      throw ar(or.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ar(or.NOT_SUPPORT_LOCALE_TYPE);
}
function bm(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...bt(t) ? t : Ve(t) ? Object.keys(t) : ue(t) ? [t] : [n]
  ])];
}
function Vu(e, t, n) {
  const r = ue(n) ? n : Oa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; bt(s); )
      s = Ai(a, s, t);
    const i = bt(t) || !Be(t) ? t : t.default ? t.default : null;
    s = ue(i) ? [i] : i, bt(s) && Ai(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Ai(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && vt(r); o++) {
    const a = t[o];
    ue(a) && (r = ym(e, t[o], n));
  }
  return r;
}
function ym(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = _m(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function _m(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (bt(n) || Be(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Cr = [];
Cr[
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
Cr[
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
Cr[
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
Cr[
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
Cr[
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
Cr[
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
Cr[
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
const wm = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function km(e) {
  return wm.test(e);
}
function Sm(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Tm(e) {
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
function Em(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : km(t) ? Sm(t) : "*" + t;
}
function Am(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, f, m;
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
      if (o = 0, s === void 0 || (s = Em(s), s === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, i = "\\" + g, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && y())) {
      if (l = Tm(a), m = Cr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = h[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ci = /* @__PURE__ */ new Map();
function Cm(e, t) {
  return Ve(e) ? e[t] : null;
}
function Im(e, t) {
  if (!Ve(e))
    return null;
  let n = Ci.get(t);
  if (n || (n = Am(t), n && Ci.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Bu.includes(s) && Bn(o))
      return null;
    const i = o[s];
    if (i === void 0 || lt(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Lm = "11.2.2", Ga = -1, Oa = "en-US", Ii = "", Li = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Om() {
  return {
    upper: (e, t) => t === "text" && ue(e) ? e.toUpperCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ue(e) ? e.toLowerCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ue(e) ? Li(e) : t === "vnode" && Ve(e) && "__v_isVNode" in e ? Li(e.children) : e
  };
}
let Uu;
function xm(e) {
  Uu = e;
}
let ju;
function Rm(e) {
  ju = e;
}
let Wu;
function Nm(e) {
  Wu = e;
}
let Hu = null;
const Oi = (e) => {
  Hu = e;
}, Pm = () => Hu;
let xi = 0;
function $m(e = {}) {
  const t = lt(e.onWarn) ? e.onWarn : Cp, n = ue(e.version) ? e.version : Lm, r = ue(e.locale) || lt(e.locale) ? e.locale : Oa, o = lt(r) ? Oa : r, a = bt(e.fallbackLocale) || Be(e.fallbackLocale) || ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Be(e.messages) ? e.messages : gs(o), i = Be(e.datetimeFormats) ? e.datetimeFormats : gs(o), l = Be(e.numberFormats) ? e.numberFormats : gs(o), u = Pt(Ye(), e.modifiers, Om()), f = e.pluralRules || Ye(), m = lt(e.missing) ? e.missing : null, h = vt(e.missingWarn) || La(e.missingWarn) ? e.missingWarn : !0, y = vt(e.fallbackWarn) || La(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, b = !!e.unresolving, L = lt(e.postTranslation) ? e.postTranslation : null, p = Be(e.processor) ? e.processor : null, A = vt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter, I = lt(e.messageCompiler) ? e.messageCompiler : Uu, _ = lt(e.messageResolver) ? e.messageResolver : ju || Cm, x = lt(e.localeFallbacker) ? e.localeFallbacker : Wu || bm, C = Ve(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, X = Ve(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), se = Ve(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), he = Ve(Y.__meta) ? Y.__meta : {};
  xi++;
  const le = {
    version: n,
    cid: xi,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: f,
    missing: m,
    missingWarn: h,
    fallbackWarn: y,
    fallbackFormat: g,
    unresolving: b,
    postTranslation: L,
    processor: p,
    warnHtmlMessage: A,
    escapeParameter: P,
    messageCompiler: I,
    messageResolver: _,
    localeFallbacker: x,
    fallbackContext: C,
    onWarn: t,
    __meta: he
  };
  return le.datetimeFormats = i, le.numberFormats = l, le.__datetimeFormatters = X, le.__numberFormatters = se, le;
}
const gs = (e) => ({ [e]: Ye() });
function cl(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return ue(i) ? i : t;
  } else
    return t;
}
function Lo(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Mm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Dm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Mm(e, t[r]))
      return !0;
  return !1;
}
function Ri(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, f, m] = Ns(...t), h = vt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  vt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, g = il(e, f), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!ue(l) || l === "")
    return new Intl.DateTimeFormat(g, m).format(u);
  let L = {}, p, A = null;
  const P = "datetime format";
  for (let x = 0; x < b.length && (p = b[x], L = n[p] || {}, A = L[l], !Be(A)); x++)
    cl(e, l, p, h, P);
  if (!Be(A) || !ue(p))
    return r ? Ga : l;
  let I = `${p}__${l}`;
  Wa(m) || (I = `${I}__${JSON.stringify(m)}`);
  let _ = i.get(I);
  return _ || (_ = new Intl.DateTimeFormat(p, Pt({}, A, m)), i.set(I, _)), y ? _.formatToParts(u) : _.format(u);
}
const Gu = [
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
function Ns(...e) {
  const [t, n, r, o] = e, a = Ye();
  let s = Ye(), i;
  if (ue(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw ar(or.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw ar(or.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Op(t)) {
    if (isNaN(t.getTime()))
      throw ar(or.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ot(t))
    i = t;
  else
    throw ar(or.INVALID_ARGUMENT);
  return ue(n) ? a.key = n : Be(n) && Object.keys(n).forEach((l) => {
    Gu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ue(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", i, a, s];
}
function Ni(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Pi(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, f, m] = Ps(...t), h = vt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  vt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, g = il(e, f), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!ue(l) || l === "")
    return new Intl.NumberFormat(g, m).format(u);
  let L = {}, p, A = null;
  const P = "number format";
  for (let x = 0; x < b.length && (p = b[x], L = n[p] || {}, A = L[l], !Be(A)); x++)
    cl(e, l, p, h, P);
  if (!Be(A) || !ue(p))
    return r ? Ga : l;
  let I = `${p}__${l}`;
  Wa(m) || (I = `${I}__${JSON.stringify(m)}`);
  let _ = i.get(I);
  return _ || (_ = new Intl.NumberFormat(p, Pt({}, A, m)), i.set(I, _)), y ? _.formatToParts(u) : _.format(u);
}
const Ku = [
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
function Ps(...e) {
  const [t, n, r, o] = e, a = Ye();
  let s = Ye();
  if (!Ot(t))
    throw ar(or.INVALID_ARGUMENT);
  const i = t;
  return ue(n) ? a.key = n : Be(n) && Object.keys(n).forEach((l) => {
    Ku.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ue(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", i, a, s];
}
function $i(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Fm = (e) => e, zm = (e) => "", Bm = "text", Vm = (e) => e.length === 0 ? "" : al(e), Um = $p;
function Mi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function jm(e) {
  const t = Ot(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ot(e.named.count) || Ot(e.named.n)) ? Ot(e.named.count) ? e.named.count : Ot(e.named.n) ? e.named.n : t : t;
}
function Wm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Hm(e = {}) {
  const t = e.locale, n = jm(e), r = Ve(e.pluralRules) && ue(t) && lt(e.pluralRules[t]) ? e.pluralRules[t] : Mi, o = Ve(e.pluralRules) && ue(t) && lt(e.pluralRules[t]) ? Mi : void 0, a = (p) => p[r(n, p.length, o)], s = e.list || [], i = (p) => s[p], l = e.named || Ye();
  Ot(e.pluralIndex) && Wm(n, l);
  const u = (p) => l[p];
  function f(p, A) {
    const P = lt(e.messages) ? e.messages(p, !!A) : Ve(e.messages) ? e.messages[p] : !1;
    return P || (e.parent ? e.parent.message(p) : zm);
  }
  const m = (p) => e.modifiers ? e.modifiers[p] : Fm, h = Be(e.processor) && lt(e.processor.normalize) ? e.processor.normalize : Vm, y = Be(e.processor) && lt(e.processor.interpolate) ? e.processor.interpolate : Um, g = Be(e.processor) && ue(e.processor.type) ? e.processor.type : Bm, L = {
    list: i,
    named: u,
    plural: a,
    linked: (p, ...A) => {
      const [P, I] = A;
      let _ = "text", x = "";
      A.length === 1 ? Ve(P) ? (x = P.modifier || x, _ = P.type || _) : ue(P) && (x = P || x) : A.length === 2 && (ue(P) && (x = P || x), ue(I) && (_ = I || _));
      const C = f(p, !0)(L), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && bt(C) && x ? C[0] : C
      );
      return x ? m(x)(Y, _) : Y;
    },
    message: f,
    type: g,
    interpolate: y,
    normalize: h,
    values: Pt(Ye(), s, l)
  };
  return L;
}
const Di = () => "", lr = (e) => lt(e);
function Fi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = $s(...t), f = vt(u.missingWarn) ? u.missingWarn : e.missingWarn, m = vt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = vt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, g = ue(u.default) || vt(u.default) ? vt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, b = n || g != null && (ue(g) || lt(g)), L = il(e, u);
  h && Gm(u);
  let [p, A, P] = y ? [
    l,
    L,
    i[L] || Ye()
  ] : qu(e, l, L, s, m, f), I = p, _ = l;
  if (!y && !(ue(I) || Bn(I) || lr(I)) && b && (I = g, _ = I), !y && (!(ue(I) || Bn(I) || lr(I)) || !ue(A)))
    return o ? Ga : l;
  let x = !1;
  const C = () => {
    x = !0;
  }, Y = lr(I) ? I : Yu(e, l, A, I, _, C);
  if (x)
    return I;
  const X = Ym(e, A, P, u), se = Hm(X), he = Km(e, Y, se);
  let le = r ? r(he, l) : he;
  return h && ue(le) && (le = Rp(le)), le;
}
function Gm(e) {
  bt(e.list) ? e.list = e.list.map((t) => ue(t) ? yi(t) : t) : Ve(e.named) && Object.keys(e.named).forEach((t) => {
    ue(e.named[t]) && (e.named[t] = yi(e.named[t]));
  });
}
function qu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let m = Ye(), h, y = null;
  const g = "translate";
  for (let b = 0; b < f.length && (h = f[b], m = s[h] || Ye(), (y = l(m, t)) === null && (y = m[t]), !(ue(y) || Bn(y) || lr(y))); b++)
    if (!Dm(h, f)) {
      const L = cl(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        a,
        g
      );
      L !== t && (y = L);
    }
  return [y, h, m];
}
function Yu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (lr(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, qm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Km(e, t, n) {
  return t(n);
}
function $s(...e) {
  const [t, n, r] = e, o = Ye();
  if (!ue(t) && !Ot(t) && !lr(t) && !Bn(t))
    throw ar(or.INVALID_ARGUMENT);
  const a = Ot(t) ? String(t) : (lr(t), t);
  return Ot(n) ? o.plural = n : ue(n) ? o.default = n : Be(n) && !Wa(n) ? o.named = n : bt(n) && (o.list = n), Ot(r) ? o.plural = r : ue(r) ? o.default = r : Be(r) && Pt(o, r), [a, o];
}
function qm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Ip(t, n, s)
  };
}
function Ym(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, g) => {
      let b = s(n, y);
      if (b == null && (f || g)) {
        const [, , L] = qu(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          l,
          u
        );
        b = s(L, y);
      }
      if (ue(b) || Bn(b)) {
        let L = !1;
        const A = Yu(e, y, t, b, y, () => {
          L = !0;
        });
        return L ? Di : A;
      } else return lr(b) ? b : Di;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ot(r.plural) && (h.pluralIndex = r.plural), h;
}
sm();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Zm = "11.2.2";
function Xm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Sa().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Sa().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Sa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const po = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: vm,
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
function qo(e, ...t) {
  return Ha(e, null, void 0);
}
const Ms = /* @__PURE__ */ jr("__translateVNode"), Ds = /* @__PURE__ */ jr("__datetimeParts"), Fs = /* @__PURE__ */ jr("__numberParts"), Qm = jr("__setPluralRules"), Zu = /* @__PURE__ */ jr("__injectWithOption"), zs = /* @__PURE__ */ jr("__dispose");
function Yo(e) {
  if (!Ve(e) || Bn(e))
    return e;
  for (const t in e)
    if (wn(e, t))
      if (!t.includes("."))
        Ve(e[t]) && Yo(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Ye()), !Ve(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Bn(o) ? Bu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Bn(o)) {
          const s = o[n[r]];
          Ve(s) && Yo(s);
        }
      }
  return e;
}
function Xu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Be(n) ? n : bt(r) ? Ye() : { [e]: Ye() };
  if (bt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Ye(), Ta(u, s[l])) : Ta(u, s);
    } else
      ue(i) && Ta(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      wn(s, i) && Yo(s[i]);
  return s;
}
function Jm(e) {
  return e.type;
}
function eh(e, t, n) {
  let r = Ve(t.messages) ? t.messages : Ye();
  "__i18nGlobal" in n && (r = Xu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Ve(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Ve(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function zi(e) {
  return F(Cu, null, e, 0);
}
function Qu() {
  return "currentInstance" in ds ? ds["currentInstance"] : ds.getCurrentInstance();
}
const Bi = () => [], th = () => !1;
let Vi = 0;
function Ui(e) {
  return (t, n, r, o) => e(n, r, Qu() || void 0, o);
}
function nh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = vi ? G : Sr;
  let s = vt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ue(e.locale) ? e.locale : Oa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ue(e.fallbackLocale) || bt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Xu(i.value, e)), f = a(Be(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Be(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let h = t ? t.missingWarn : vt(e.missingWarn) || La(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : vt(e.fallbackWarn) || La(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : vt(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, L = lt(e.missing) ? e.missing : null, p = lt(e.missing) ? Ui(e.missing) : null, A = lt(e.postTranslation) ? e.postTranslation : null, P = t ? t.warnHtmlMessage : vt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const _ = t ? t.modifiers : Be(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || t && t.pluralRules, C;
  C = (() => {
    r && Oi(null);
    const E = {
      version: Zm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: _,
      pluralRules: x,
      missing: p === null ? void 0 : p,
      missingWarn: h,
      fallbackWarn: y,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: A === null ? void 0 : A,
      warnHtmlMessage: P,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    E.datetimeFormats = f.value, E.numberFormats = m.value, E.__datetimeFormatters = Be(C) ? C.__datetimeFormatters : void 0, E.__numberFormatters = Be(C) ? C.__numberFormatters : void 0;
    const B = $m(E);
    return r && Oi(B), B;
  })(), Lo(C, i.value, l.value);
  function X() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      m.value
    ];
  }
  const se = N({
    get: () => i.value,
    set: (E) => {
      C.locale = E, i.value = E;
    }
  }), he = N({
    get: () => l.value,
    set: (E) => {
      C.fallbackLocale = E, l.value = E, Lo(C, i.value, E);
    }
  }), le = N(() => u.value), ye = /* @__PURE__ */ N(() => f.value), _e = /* @__PURE__ */ N(() => m.value);
  function U() {
    return lt(A) ? A : null;
  }
  function J(E) {
    A = E, C.postTranslation = E;
  }
  function H() {
    return L;
  }
  function de(E) {
    E !== null && (p = Ui(E)), L = E, C.missing = p;
  }
  const pe = (E, B, Ae, Ie, nt, $t) => {
    X();
    let Ze;
    try {
      r || (C.fallbackContext = t ? Pm() : void 0), Ze = E(C);
    } finally {
      r || (C.fallbackContext = void 0);
    }
    if (Ae !== "translate exists" && // for not `te` (e.g `t`)
    Ot(Ze) && Ze === Ga || Ae === "translate exists" && !Ze) {
      const [qn, gr] = B();
      return t && g ? Ie(t) : nt(qn);
    } else {
      if ($t(Ze))
        return Ze;
      throw qo(po.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Pe(...E) {
    return pe((B) => Reflect.apply(Fi, null, [B, ...E]), () => $s(...E), "translate", (B) => Reflect.apply(B.t, B, [...E]), (B) => B, (B) => ue(B));
  }
  function ae(...E) {
    const [B, Ae, Ie] = E;
    if (Ie && !Ve(Ie))
      throw qo(po.INVALID_ARGUMENT);
    return Pe(B, Ae, Pt({ resolvedMessage: !0 }, Ie || {}));
  }
  function Z(...E) {
    return pe((B) => Reflect.apply(Ri, null, [B, ...E]), () => Ns(...E), "datetime format", (B) => Reflect.apply(B.d, B, [...E]), () => Ii, (B) => ue(B) || bt(B));
  }
  function Me(...E) {
    return pe((B) => Reflect.apply(Pi, null, [B, ...E]), () => Ps(...E), "number format", (B) => Reflect.apply(B.n, B, [...E]), () => Ii, (B) => ue(B) || bt(B));
  }
  function ke(E) {
    return E.map((B) => ue(B) || Ot(B) || vt(B) ? zi(String(B)) : B);
  }
  const we = {
    normalize: ke,
    interpolate: (E) => E,
    type: "vnode"
  };
  function Q(...E) {
    return pe((B) => {
      let Ae;
      const Ie = B;
      try {
        Ie.processor = we, Ae = Reflect.apply(Fi, null, [Ie, ...E]);
      } finally {
        Ie.processor = null;
      }
      return Ae;
    }, () => $s(...E), "translate", (B) => B[Ms](...E), (B) => [zi(B)], (B) => bt(B));
  }
  function ge(...E) {
    return pe((B) => Reflect.apply(Pi, null, [B, ...E]), () => Ps(...E), "number format", (B) => B[Fs](...E), Bi, (B) => ue(B) || bt(B));
  }
  function at(...E) {
    return pe((B) => Reflect.apply(Ri, null, [B, ...E]), () => Ns(...E), "datetime format", (B) => B[Ds](...E), Bi, (B) => ue(B) || bt(B));
  }
  function Te(E) {
    x = E, C.pluralRules = x;
  }
  function Xe(E, B) {
    return pe(() => {
      if (!E)
        return !1;
      const Ae = ue(B) ? B : i.value, Ie = _t(Ae), nt = C.messageResolver(Ie, E);
      return Bn(nt) || lr(nt) || ue(nt);
    }, () => [E], "translate exists", (Ae) => Reflect.apply(Ae.te, Ae, [E, B]), th, (Ae) => vt(Ae));
  }
  function Lt(E) {
    let B = null;
    const Ae = Vu(C, l.value, i.value);
    for (let Ie = 0; Ie < Ae.length; Ie++) {
      const nt = u.value[Ae[Ie]] || {}, $t = C.messageResolver(nt, E);
      if ($t != null) {
        B = $t;
        break;
      }
    }
    return B;
  }
  function ct(E) {
    const B = Lt(E);
    return B ?? (t ? t.tm(E) || {} : {});
  }
  function _t(E) {
    return u.value[E] || {};
  }
  function wt(E, B) {
    if (o) {
      const Ae = { [E]: B };
      for (const Ie in Ae)
        wn(Ae, Ie) && Yo(Ae[Ie]);
      B = Ae[E];
    }
    u.value[E] = B, C.messages = u.value;
  }
  function st(E, B) {
    u.value[E] = u.value[E] || {};
    const Ae = { [E]: B };
    if (o)
      for (const Ie in Ae)
        wn(Ae, Ie) && Yo(Ae[Ie]);
    B = Ae[E], Ta(B, u.value[E]), C.messages = u.value;
  }
  function ut(E) {
    return f.value[E] || {};
  }
  function T(E, B) {
    f.value[E] = B, C.datetimeFormats = f.value, Ni(C, E, B);
  }
  function O(E, B) {
    f.value[E] = Pt(f.value[E] || {}, B), C.datetimeFormats = f.value, Ni(C, E, B);
  }
  function V(E) {
    return m.value[E] || {};
  }
  function ne(E, B) {
    m.value[E] = B, C.numberFormats = m.value, $i(C, E, B);
  }
  function $e(E, B) {
    m.value[E] = Pt(m.value[E] || {}, B), C.numberFormats = m.value, $i(C, E, B);
  }
  Vi++, t && vi && (Oe(t.locale, (E) => {
    s && (i.value = E, C.locale = E, Lo(C, i.value, l.value));
  }), Oe(t.fallbackLocale, (E) => {
    s && (l.value = E, C.fallbackLocale = E, Lo(C, i.value, l.value));
  }));
  const ve = {
    id: Vi,
    locale: se,
    fallbackLocale: he,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(E) {
      s = E, E && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Lo(C, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: le,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return x || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return h;
    },
    set missingWarn(E) {
      h = E, C.missingWarn = h;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(E) {
      y = E, C.fallbackWarn = y;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(E) {
      g = E;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(E) {
      b = E, C.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return P;
    },
    set warnHtmlMessage(E) {
      P = E, C.warnHtmlMessage = E;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(E) {
      I = E, C.escapeParameter = E;
    },
    t: Pe,
    getLocaleMessage: _t,
    setLocaleMessage: wt,
    mergeLocaleMessage: st,
    getPostTranslationHandler: U,
    setPostTranslationHandler: J,
    getMissingHandler: H,
    setMissingHandler: de,
    [Qm]: Te
  };
  return ve.datetimeFormats = ye, ve.numberFormats = _e, ve.rt = ae, ve.te = Xe, ve.tm = ct, ve.d = Z, ve.n = Me, ve.getDateTimeFormat = ut, ve.setDateTimeFormat = T, ve.mergeDateTimeFormat = O, ve.getNumberFormat = V, ve.setNumberFormat = ne, ve.mergeNumberFormat = $e, ve[Zu] = n, ve[Ms] = Q, ve[Ds] = at, ve[Fs] = ge, ve;
}
const ul = {
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
function rh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === ft ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Ye());
}
function Ju() {
  return ft;
}
Pt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ot(e) || !isNaN(e)
  }
}, ul);
function oh(e) {
  return bt(e) && !ue(e[0]);
}
function ed(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Ye();
    e.locale && (s.locale = e.locale), ue(e.format) ? s.key = e.format : Ve(e.format) && (ue(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((h, y) => n.includes(y) ? Pt(Ye(), h, { [y]: e.format[y] }) : h, Ye()));
    const l = r(e.value, s, i);
    let u = [s.key];
    bt(l) ? u = l.map((h, y) => {
      const g = o[h.type], b = g ? g({ [h.type]: h.value, index: y, parts: l }) : [h.value];
      return oh(b) && (b[0].key = `${h.type}-${y}`), b;
    }) : ue(l) && (u = [l]);
    const f = Pt(Ye(), a), m = ue(e.tag) || Ve(e.tag) ? e.tag : Ju();
    return Au(m, f, u);
  };
}
Pt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ul);
const ah = /* @__PURE__ */ jr("global-vue-i18n");
function ta(e = {}) {
  const t = Qu();
  if (t == null)
    throw qo(po.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw qo(po.NOT_INSTALLED);
  const n = sh(t), r = ih(n), o = Jm(t), a = lh(e, o);
  if (a === "global")
    return eh(r, e, o), r;
  if (a === "parent") {
    let l = ch(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Pt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = nh(l), s.__composerExtend && (i[zs] = s.__composerExtend(i)), dh(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function sh(e) {
  const t = Ge(e.isCE ? ah : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw qo(e.isCE ? po.NOT_INSTALLED_WITH_PROVIDE : po.UNEXPECTED_ERROR);
  return t;
}
function lh(e, t) {
  return Wa(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ih(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ch(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = uh(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Zu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function uh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function dh(e, t, n) {
  yt(() => {
  }, t), ja(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[zs];
    o && (o(), delete r[zs]);
  }, t);
}
Pt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ul);
Xm();
xm(gm);
Rm(Im);
Nm(Vu);
function dl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Wr = dl();
function td(e) {
  Wr = e;
}
var Bo = { exec: () => null };
function Fe(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Kt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var fh = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Kt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, ph = /^(?:[ \t]*(?:\n|$))+/, mh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, hh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, na = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, gh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, fl = /(?:[*+-]|\d{1,9}[.)])/, nd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, rd = Fe(nd).replace(/bull/g, fl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), vh = Fe(nd).replace(/bull/g, fl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), pl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, bh = /^[^\n]+/, ml = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, yh = Fe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ml).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), _h = Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, fl).getRegex(), Ka = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", hl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, wh = Fe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", hl).replace("tag", Ka).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), od = Fe(pl).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ka).getRegex(), kh = Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", od).getRegex(), gl = { blockquote: kh, code: mh, def: yh, fences: hh, heading: gh, hr: na, html: wh, lheading: rd, list: _h, newline: ph, paragraph: od, table: Bo, text: bh }, ji = Fe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ka).getRegex(), Sh = { ...gl, lheading: vh, table: ji, paragraph: Fe(pl).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ji).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ka).getRegex() }, Th = { ...gl, html: Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", hl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Bo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Fe(pl).replace("hr", na).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", rd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Eh = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ah = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ad = /^( {2,}|\\)\n(?!\s*$)/, Ch = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, qa = /[\p{P}\p{S}]/u, vl = /[\s\p{P}\p{S}]/u, sd = /[^\s\p{P}\p{S}]/u, Ih = Fe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, vl).getRegex(), ld = /(?!~)[\p{P}\p{S}]/u, Lh = /(?!~)[\s\p{P}\p{S}]/u, Oh = /(?:[^\s\p{P}\p{S}]|~)/u, xh = Fe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", fh ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), id = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Rh = Fe(id, "u").replace(/punct/g, qa).getRegex(), Nh = Fe(id, "u").replace(/punct/g, ld).getRegex(), cd = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ph = Fe(cd, "gu").replace(/notPunctSpace/g, sd).replace(/punctSpace/g, vl).replace(/punct/g, qa).getRegex(), $h = Fe(cd, "gu").replace(/notPunctSpace/g, Oh).replace(/punctSpace/g, Lh).replace(/punct/g, ld).getRegex(), Mh = Fe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, sd).replace(/punctSpace/g, vl).replace(/punct/g, qa).getRegex(), Dh = Fe(/\\(punct)/, "gu").replace(/punct/g, qa).getRegex(), Fh = Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), zh = Fe(hl).replace("(?:-->|$)", "-->").getRegex(), Bh = Fe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", zh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), xa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Vh = Fe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", xa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ud = Fe(/^!?\[(label)\]\[(ref)\]/).replace("label", xa).replace("ref", ml).getRegex(), dd = Fe(/^!?\[(ref)\](?:\[\])?/).replace("ref", ml).getRegex(), Uh = Fe("reflink|nolink(?!\\()", "g").replace("reflink", ud).replace("nolink", dd).getRegex(), Wi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, bl = { _backpedal: Bo, anyPunctuation: Dh, autolink: Fh, blockSkip: xh, br: ad, code: Ah, del: Bo, emStrongLDelim: Rh, emStrongRDelimAst: Ph, emStrongRDelimUnd: Mh, escape: Eh, link: Vh, nolink: dd, punctuation: Ih, reflink: ud, reflinkSearch: Uh, tag: Bh, text: Ch, url: Bo }, jh = { ...bl, link: Fe(/^!?\[(label)\]\((.*?)\)/).replace("label", xa).getRegex(), reflink: Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", xa).getRegex() }, Bs = { ...bl, emStrongRDelimAst: $h, emStrongLDelim: Nh, url: Fe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Wi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Fe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Wi).getRegex() }, Wh = { ...Bs, br: Fe(ad).replace("{2,}", "*").getRegex(), text: Fe(Bs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ma = { normal: gl, gfm: Sh, pedantic: Th }, Oo = { normal: bl, gfm: Bs, breaks: Wh, pedantic: jh }, Hh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Hi = (e) => Hh[e];
function er(e, t) {
  if (t) {
    if (Kt.escapeTest.test(e)) return e.replace(Kt.escapeReplace, Hi);
  } else if (Kt.escapeTestNoEncode.test(e)) return e.replace(Kt.escapeReplaceNoEncode, Hi);
  return e;
}
function Gi(e) {
  try {
    e = encodeURI(e).replace(Kt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Ki(e, t) {
  let n = e.replace(Kt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Kt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Kt.slashPipe, "|");
  return r;
}
function xo(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Gh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function qi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function Kh(e, t, n) {
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
var Ra = class {
  constructor(e) {
    qe(this, "options");
    qe(this, "rules");
    qe(this, "lexer");
    this.options = e || Wr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : xo(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Kh(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = xo(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: xo(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = xo(t[0], `
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
        let m = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(f, a, !0), this.lexer.state.top = m, n.length === 0) break;
        let h = a.at(-1);
        if (h?.type === "code") break;
        if (h?.type === "blockquote") {
          let y = h, g = y.raw + `
` + n.join(`
`), b = this.blockquote(g);
          a[a.length - 1] = b, r = r.substring(0, r.length - y.raw.length) + b.raw, o = o.substring(0, o.length - y.text.length) + b.text;
          break;
        } else if (h?.type === "list") {
          let y = h, g = y.raw + `
` + n.join(`
`), b = this.list(g);
          a[a.length - 1] = b, r = r.substring(0, r.length - h.raw.length) + b.raw, o = o.substring(0, o.length - y.raw.length) + b.raw, n = g.substring(a.at(-1).raw.length).split(`
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
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), h = e.split(`
`, 1)[0], y = !m.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, f = m.trimStart()) : y ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, f = m.slice(g), g += t[1].length), y && this.rules.other.blankLine.test(h) && (u += h + `
`, e = e.substring(h.length + 1), l = !0), !l) {
          let b = this.rules.other.nextBulletRegex(g), L = this.rules.other.hrRegex(g), p = this.rules.other.fencesBeginRegex(g), A = this.rules.other.headingBeginRegex(g), P = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let I = e.split(`
`, 1)[0], _;
            if (h = I, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), _ = h) : _ = h.replace(this.rules.other.tabCharGlobal, "    "), p.test(h) || A.test(h) || P.test(h) || b.test(h) || L.test(h)) break;
            if (_.search(this.rules.other.nonSpaceChar) >= g || !h.trim()) f += `
` + _.slice(g);
            else {
              if (y || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || p.test(m) || A.test(m) || L.test(m)) break;
              f += `
` + h;
            }
            !y && !h.trim() && (y = !0), u += I + `
`, e = e.substring(I.length + 1), m = _.slice(g);
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
          let u = l.tokens.filter((m) => m.type === "space"), f = u.length > 0 && u.some((m) => this.rules.other.anyLine.test(m.raw));
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
    let n = Ki(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(Ki(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = xo(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Gh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), qi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return qi(n, o, n[0], this.lexer, this.rules);
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
        let f = [...r[0]][0].length, m = e.slice(0, o + r.index + f + s);
        if (Math.min(o, s) % 2) {
          let y = m.slice(1, -1);
          return { type: "em", raw: m, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let h = m.slice(2, -2);
        return { type: "strong", raw: m, text: h, tokens: this.lexer.inlineTokens(h) };
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
}, bn = class Vs {
  constructor(t) {
    qe(this, "tokens");
    qe(this, "options");
    qe(this, "state");
    qe(this, "inlineQueue");
    qe(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Wr, this.options.tokenizer = this.options.tokenizer || new Ra(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Kt, block: ma.normal, inline: Oo.normal };
    this.options.pedantic ? (n.block = ma.pedantic, n.inline = Oo.pedantic) : this.options.gfm && (n.block = ma.gfm, this.options.breaks ? n.inline = Oo.breaks : n.inline = Oo.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ma, inline: Oo };
  }
  static lex(t, n) {
    return new Vs(n).lex(t);
  }
  static lexInline(t, n) {
    return new Vs(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Kt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Kt.tabCharGlobal, "    ").replace(Kt.spaceLine, "")); t; ) {
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
        let f = 1 / 0, m = t.slice(1), h;
        this.options.extensions.startInline.forEach((y) => {
          h = y.call({ lexer: this }, m), typeof h == "number" && h >= 0 && (f = Math.min(f, h));
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
}, Na = class {
  constructor(t) {
    qe(this, "options");
    qe(this, "parser");
    this.options = t || Wr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Kt.notSpaceStart)?.[0], a = t.replace(Kt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + er(o) + '">' + (r ? a : er(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : er(a, !0)) + `</code></pre>
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
    return `<code>${er(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Gi(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + er(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Gi(t);
    if (a === null) return er(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${er(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : er(t.text);
  }
}, yl = class {
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
}, yn = class Us {
  constructor(t) {
    qe(this, "options");
    qe(this, "renderer");
    qe(this, "textRenderer");
    this.options = t || Wr, this.options.renderer = this.options.renderer || new Na(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new yl();
  }
  static parse(t, n) {
    return new Us(n).parse(t);
  }
  static parseInline(t, n) {
    return new Us(n).parseInline(t);
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
}, ka, Do = (ka = class {
  constructor(e) {
    qe(this, "options");
    qe(this, "block");
    this.options = e || Wr;
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
    return this.block ? bn.lex : bn.lexInline;
  }
  provideParser() {
    return this.block ? yn.parse : yn.parseInline;
  }
}, qe(ka, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), qe(ka, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), ka), qh = class {
  constructor(...t) {
    qe(this, "defaults", dl());
    qe(this, "options", this.setOptions);
    qe(this, "parse", this.parseMarkdown(!0));
    qe(this, "parseInline", this.parseMarkdown(!1));
    qe(this, "Parser", yn);
    qe(this, "Renderer", Na);
    qe(this, "TextRenderer", yl);
    qe(this, "Lexer", bn);
    qe(this, "Tokenizer", Ra);
    qe(this, "Hooks", Do);
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
        let a = this.defaults.renderer || new Na(this.defaults);
        for (let s in r.renderer) {
          if (!(s in a)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let i = s, l = r.renderer[i], u = a[i];
          a[i] = (...f) => {
            let m = l.apply(a, f);
            return m === !1 && (m = u.apply(a, f)), m || "";
          };
        }
        o.renderer = a;
      }
      if (r.tokenizer) {
        let a = this.defaults.tokenizer || new Ra(this.defaults);
        for (let s in r.tokenizer) {
          if (!(s in a)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let i = s, l = r.tokenizer[i], u = a[i];
          a[i] = (...f) => {
            let m = l.apply(a, f);
            return m === !1 && (m = u.apply(a, f)), m;
          };
        }
        o.tokenizer = a;
      }
      if (r.hooks) {
        let a = this.defaults.hooks || new Do();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          Do.passThroughHooks.has(s) ? a[i] = (f) => {
            if (this.defaults.async && Do.passThroughHooksRespectAsync.has(s)) return (async () => {
              let h = await l.call(a, f);
              return u.call(a, h);
            })();
            let m = l.call(a, f);
            return u.call(a, m);
          } : a[i] = (...f) => {
            if (this.defaults.async) return (async () => {
              let h = await l.apply(a, f);
              return h === !1 && (h = await u.apply(a, f)), h;
            })();
            let m = l.apply(a, f);
            return m === !1 && (m = u.apply(a, f)), m;
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
    return bn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return yn.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? bn.lex : bn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let f = await (a.hooks ? await a.hooks.provideParser() : t ? yn.parse : yn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(f) : f;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? bn.lex : bn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? yn.parse : yn.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + er(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Br = new qh();
function He(e, t) {
  return Br.parse(e, t);
}
He.options = He.setOptions = function(e) {
  return Br.setOptions(e), He.defaults = Br.defaults, td(He.defaults), He;
};
He.getDefaults = dl;
He.defaults = Wr;
He.use = function(...e) {
  return Br.use(...e), He.defaults = Br.defaults, td(He.defaults), He;
};
He.walkTokens = function(e, t) {
  return Br.walkTokens(e, t);
};
He.parseInline = Br.parseInline;
He.Parser = yn;
He.parser = yn.parse;
He.Renderer = Na;
He.TextRenderer = yl;
He.Lexer = bn;
He.lexer = bn.lex;
He.Tokenizer = Ra;
He.Hooks = Do;
He.parse = He;
He.options;
He.setOptions;
He.use;
He.walkTokens;
He.parseInline;
yn.parse;
bn.lex;
function Yh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function It(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Yi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Yi || (Yi = {}));
async function Zh(e, t) {
  await It("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Xh(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return It("plugin:event|listen", {
    event: e,
    target: o,
    handler: Yh(t)
  }).then((a) => async () => Zh(e, a));
}
async function fd() {
  return await It("local_ai_get_config");
}
async function Fo(e) {
  return await It("local_ai_save_config", { config: e });
}
async function pd(e) {
  return await It("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Qh() {
  return await It("local_ai_get_runtime_status");
}
async function md() {
  return await It("local_ai_get_status");
}
async function Jh(e) {
  return await It("local_ai_start_service", {
    config: e ?? null
  });
}
async function hd() {
  return await It("local_ai_restart_service");
}
async function eg() {
  await It("local_ai_stop_service");
}
function gd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function tg(e, t, n = {}) {
  const r = n.requestId ?? gd(), o = await Xh(
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
async function vs(e) {
  return await It("local_ai_cancel_chat_stream", { requestId: e });
}
async function vd(e) {
  return await It("local_ai_web_search", {
    request: e
  });
}
async function ng(e) {
  return await It("local_ai_weather", {
    request: e
  });
}
async function rg() {
  return await It("local_ai_get_chat_histories");
}
async function og(e) {
  return await It("local_ai_save_chat_history", {
    history: e
  });
}
async function ag(e) {
  return await It("local_ai_delete_chat_history", {
    historyId: e
  });
}
const sg = /* @__PURE__ */ new Set([
  "txt",
  "md",
  "json",
  "csv",
  "html",
  "css",
  "js",
  "ts",
  "tsx",
  "vue",
  "rs",
  "py",
  "java",
  "go",
  "yaml",
  "yml",
  "toml",
  "xml",
  "log"
]), lg = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), ig = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), cg = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), ug = 5, dg = 1024 * 1024, fg = 5 * 1024 * 1024, Zi = 4e4, _l = (e) => e.split(".").pop()?.toLowerCase() ?? "", pg = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, bs = (e) => lg.has(e.type) || ig.has(_l(e.name)), Xi = (e) => e.type.startsWith("text/") || sg.has(_l(e.name)), mg = (e) => cg.has(_l(e.name)), hg = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), gg = async (e) => {
  const t = await e.text();
  return t.length <= Zi ? { text: t, truncated: !1 } : {
    text: t.slice(0, Zi),
    truncated: !0
  };
}, vg = (e, t) => {
  const n = t.filter(
    (o) => o.type === "text" && o.status === "parsed"
  );
  if (!n.length) return e;
  const r = n.map((o, a) => {
    const s = o.error === "truncated";
    return [
      `--- 文件 ${a + 1}: ${o.name} ---`,
      s ? "以下文件内容已截断。" : "",
      o.text ?? "",
      "--- 文件结束 ---"
    ].filter(Boolean).join(`
`);
  });
  return [
    "请基于用户上传的文件内容回答。",
    "",
    "用户原始问题：",
    e || "请分析用户上传的文件内容。",
    "",
    "用户上传的文件内容：",
    ...r
  ].join(`
`);
};
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Qi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function bg(e) {
  if (Array.isArray(e)) return e;
}
function yg(e, t) {
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
function _g() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wg(e, t) {
  return bg(e) || yg(e, t) || kg(e, t) || _g();
}
function kg(e, t) {
  if (e) {
    if (typeof e == "string") return Qi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qi(e, t) : void 0;
  }
}
const bd = Object.entries, Ji = Object.setPrototypeOf, Sg = Object.isFrozen, Tg = Object.getPrototypeOf, Eg = Object.getOwnPropertyDescriptor;
let Yt = Object.freeze, un = Object.seal, lo = Object.create, yd = typeof Reflect < "u" && Reflect, js = yd.apply, Ws = yd.construct;
Yt || (Yt = function(t) {
  return t;
});
un || (un = function(t) {
  return t;
});
js || (js = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Ws || (Ws = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const to = Et(Array.prototype.forEach), Ag = Et(Array.prototype.lastIndexOf), ec = Et(Array.prototype.pop), no = Et(Array.prototype.push), Cg = Et(Array.prototype.splice), Wt = Array.isArray, zo = Et(String.prototype.toLowerCase), ys = Et(String.prototype.toString), tc = Et(String.prototype.match), ro = Et(String.prototype.replace), nc = Et(String.prototype.indexOf), Ig = Et(String.prototype.trim), Lg = Et(Number.prototype.toString), Og = Et(Boolean.prototype.toString), rc = typeof BigInt > "u" ? null : Et(BigInt.prototype.toString), oc = typeof Symbol > "u" ? null : Et(Symbol.prototype.toString), dt = Et(Object.prototype.hasOwnProperty), Ro = Et(Object.prototype.toString), Rt = Et(RegExp.prototype.test), No = xg(TypeError);
function Et(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return js(e, t, r);
  };
}
function xg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ws(e, n);
  };
}
function Ne(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zo;
  if (Ji && Ji(e, null), !Wt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Sg(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function Rg(e) {
  for (let t = 0; t < e.length; t++)
    dt(e, t) || (e[t] = null);
  return e;
}
function Ft(e) {
  const t = lo(null);
  for (const r of bd(e)) {
    var n = wg(r, 2);
    const o = n[0], a = n[1];
    dt(e, o) && (Wt(a) ? t[o] = Rg(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Ft(a) : t[o] = a);
  }
  return t;
}
function Ng(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Lg(e);
    case "boolean":
      return Og(e);
    case "bigint":
      return rc ? rc(e) : "0";
    case "symbol":
      return oc ? oc(e) : "Symbol()";
    case "undefined":
      return Ro(e);
    case "function":
    case "object": {
      if (e === null)
        return Ro(e);
      const t = e, n = Pn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Ro(r);
      }
      return Ro(e);
    }
    default:
      return Ro(e);
  }
}
function Pn(e, t) {
  for (; e !== null; ) {
    const r = Eg(e, t);
    if (r) {
      if (r.get)
        return Et(r.get);
      if (typeof r.value == "function")
        return Et(r.value);
    }
    e = Tg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Pg(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ac = Yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _s = Yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ws = Yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), $g = Yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ks = Yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Mg = Yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), sc = Yt(["#text"]), lc = Yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ss = Yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ic = Yt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ha = Yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Dg = un(/{{[\w\W]*|^[\w\W]*}}/g), Fg = un(/<%[\w\W]*|^[\w\W]*%>/g), zg = un(/\${[\w\W]*/g), Bg = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), Vg = un(/^aria-[\-\w]+$/), cc = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ug = un(/^(?:\w+script|data):/i), jg = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Wg = un(/^html$/i), Hg = un(/^[a-z][.\w]*(-[.\w]+)+$/i), Nn = {
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
}, Gg = function() {
  return typeof window > "u" ? null : window;
}, Kg = function(t, n) {
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
}, uc = function() {
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
function _d() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gg();
  const t = (ie) => _d(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, m = e.trustedTypes, h = i.prototype, y = Pn(h, "cloneNode"), g = Pn(h, "remove"), b = Pn(h, "nextSibling"), L = Pn(h, "childNodes"), p = Pn(h, "parentNode"), A = Pn(h, "shadowRoot"), P = Pn(h, "attributes"), I = s && s.prototype ? Pn(s.prototype, "nodeType") : null, _ = s && s.prototype ? Pn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let x, C = "";
  const Y = n, X = Y.implementation, se = Y.createNodeIterator, he = Y.createDocumentFragment, le = Y.getElementsByTagName, ye = r.importNode;
  let _e = uc();
  t.isSupported = typeof bd == "function" && typeof p == "function" && X && X.createHTMLDocument !== void 0;
  const U = Dg, J = Fg, H = zg, de = Bg, pe = Vg, Pe = Ug, ae = jg, Z = Hg;
  let Me = cc, ke = null;
  const Se = Ne({}, [...ac, ..._s, ...ws, ...ks, ...sc]);
  let we = null;
  const Q = Ne({}, [...lc, ...Ss, ...ic, ...ha]);
  let ge = Object.seal(lo(null, {
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
  })), at = null, Te = null;
  const Xe = Object.seal(lo(null, {
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
  let Lt = !0, ct = !0, _t = !1, wt = !0, st = !1, ut = !0, T = !1, O = !1, V = !1, ne = !1, $e = !1, ve = !1, E = !0, B = !1;
  const Ae = "user-content-";
  let Ie = !0, nt = !1, $t = {}, Ze = null;
  const qn = Ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let gr = null;
  const pn = Ne({}, ["audio", "video", "img", "source", "image", "track"]);
  let Yn = null;
  const Lr = Ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Cn = "http://www.w3.org/1998/Math/MathML", mn = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let on = Zt, Or = !1, Zn = null;
  const vr = Ne({}, [Cn, mn, Zt], ys);
  let xr = Ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = Ne({}, ["annotation-xml"]);
  const To = Ne({}, ["title", "style", "font", "a", "script"]);
  let Xn = null;
  const qr = ["application/xhtml+xml", "text/html"], Eo = "text/html";
  let Ke = null, hn = null;
  const Yr = n.createElement("form"), Nr = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, In = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (hn && hn === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = Ft(w), Xn = // eslint-disable-next-line unicorn/prefer-includes
    qr.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Eo : w.PARSER_MEDIA_TYPE, Ke = Xn === "application/xhtml+xml" ? ys : zo, ke = dt(w, "ALLOWED_TAGS") && Wt(w.ALLOWED_TAGS) ? Ne({}, w.ALLOWED_TAGS, Ke) : Se, we = dt(w, "ALLOWED_ATTR") && Wt(w.ALLOWED_ATTR) ? Ne({}, w.ALLOWED_ATTR, Ke) : Q, Zn = dt(w, "ALLOWED_NAMESPACES") && Wt(w.ALLOWED_NAMESPACES) ? Ne({}, w.ALLOWED_NAMESPACES, ys) : vr, Yn = dt(w, "ADD_URI_SAFE_ATTR") && Wt(w.ADD_URI_SAFE_ATTR) ? Ne(Ft(Lr), w.ADD_URI_SAFE_ATTR, Ke) : Lr, gr = dt(w, "ADD_DATA_URI_TAGS") && Wt(w.ADD_DATA_URI_TAGS) ? Ne(Ft(pn), w.ADD_DATA_URI_TAGS, Ke) : pn, Ze = dt(w, "FORBID_CONTENTS") && Wt(w.FORBID_CONTENTS) ? Ne({}, w.FORBID_CONTENTS, Ke) : qn, at = dt(w, "FORBID_TAGS") && Wt(w.FORBID_TAGS) ? Ne({}, w.FORBID_TAGS, Ke) : Ft({}), Te = dt(w, "FORBID_ATTR") && Wt(w.FORBID_ATTR) ? Ne({}, w.FORBID_ATTR, Ke) : Ft({}), $t = dt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Ft(w.USE_PROFILES) : w.USE_PROFILES : !1, Lt = w.ALLOW_ARIA_ATTR !== !1, ct = w.ALLOW_DATA_ATTR !== !1, _t = w.ALLOW_UNKNOWN_PROTOCOLS || !1, wt = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, st = w.SAFE_FOR_TEMPLATES || !1, ut = w.SAFE_FOR_XML !== !1, T = w.WHOLE_DOCUMENT || !1, ne = w.RETURN_DOM || !1, $e = w.RETURN_DOM_FRAGMENT || !1, ve = w.RETURN_TRUSTED_TYPE || !1, V = w.FORCE_BODY || !1, E = w.SANITIZE_DOM !== !1, B = w.SANITIZE_NAMED_PROPS || !1, Ie = w.KEEP_CONTENT !== !1, nt = w.IN_PLACE || !1, Me = Pg(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : cc, on = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Zt, xr = dt(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ft(w.MATHML_TEXT_INTEGRATION_POINTS) : Ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = dt(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? Ft(w.HTML_INTEGRATION_POINTS) : Ne({}, ["annotation-xml"]);
    const W = dt(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? Ft(w.CUSTOM_ELEMENT_HANDLING) : lo(null);
    if (ge = lo(null), dt(W, "tagNameCheck") && Nr(W.tagNameCheck) && (ge.tagNameCheck = W.tagNameCheck), dt(W, "attributeNameCheck") && Nr(W.attributeNameCheck) && (ge.attributeNameCheck = W.attributeNameCheck), dt(W, "allowCustomizedBuiltInElements") && typeof W.allowCustomizedBuiltInElements == "boolean" && (ge.allowCustomizedBuiltInElements = W.allowCustomizedBuiltInElements), st && (ct = !1), $e && (ne = !0), $t && (ke = Ne({}, sc), we = lo(null), $t.html === !0 && (Ne(ke, ac), Ne(we, lc)), $t.svg === !0 && (Ne(ke, _s), Ne(we, Ss), Ne(we, ha)), $t.svgFilters === !0 && (Ne(ke, ws), Ne(we, Ss), Ne(we, ha)), $t.mathMl === !0 && (Ne(ke, ks), Ne(we, ic), Ne(we, ha))), Xe.tagCheck = null, Xe.attributeCheck = null, dt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Xe.tagCheck = w.ADD_TAGS : Wt(w.ADD_TAGS) && (ke === Se && (ke = Ft(ke)), Ne(ke, w.ADD_TAGS, Ke))), dt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Xe.attributeCheck = w.ADD_ATTR : Wt(w.ADD_ATTR) && (we === Q && (we = Ft(we)), Ne(we, w.ADD_ATTR, Ke))), dt(w, "ADD_URI_SAFE_ATTR") && Wt(w.ADD_URI_SAFE_ATTR) && Ne(Yn, w.ADD_URI_SAFE_ATTR, Ke), dt(w, "FORBID_CONTENTS") && Wt(w.FORBID_CONTENTS) && (Ze === qn && (Ze = Ft(Ze)), Ne(Ze, w.FORBID_CONTENTS, Ke)), dt(w, "ADD_FORBID_CONTENTS") && Wt(w.ADD_FORBID_CONTENTS) && (Ze === qn && (Ze = Ft(Ze)), Ne(Ze, w.ADD_FORBID_CONTENTS, Ke)), Ie && (ke["#text"] = !0), T && Ne(ke, ["html", "head", "body"]), ke.table && (Ne(ke, ["tbody"]), delete at.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw No('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw No('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      x = w.TRUSTED_TYPES_POLICY, C = x.createHTML("");
    } else
      x === void 0 && (x = Kg(m, o)), x !== null && typeof C == "string" && (C = x.createHTML(""));
    (_e.uponSanitizeElement.length > 0 || _e.uponSanitizeAttribute.length > 0) && ke === Se && (ke = Ft(ke)), _e.uponSanitizeAttribute.length > 0 && we === Q && (we = Ft(we)), Yt && Yt(w), hn = w;
  }, Zr = Ne({}, [..._s, ...ws, ...$g]), Pr = Ne({}, [...ks, ...Mg]), Ao = function(w) {
    let W = p(w);
    (!W || !W.tagName) && (W = {
      namespaceURI: on,
      tagName: "template"
    });
    const re = zo(w.tagName), De = zo(W.tagName);
    return Zn[w.namespaceURI] ? w.namespaceURI === mn ? W.namespaceURI === Zt ? re === "svg" : W.namespaceURI === Cn ? re === "svg" && (De === "annotation-xml" || xr[De]) : !!Zr[re] : w.namespaceURI === Cn ? W.namespaceURI === Zt ? re === "math" : W.namespaceURI === mn ? re === "math" && Rr[De] : !!Pr[re] : w.namespaceURI === Zt ? W.namespaceURI === mn && !Rr[De] || W.namespaceURI === Cn && !xr[De] ? !1 : !Pr[re] && (To[re] || !Zr[re]) : !!(Xn === "application/xhtml+xml" && Zn[w.namespaceURI]) : !1;
  }, Ut = function(w) {
    no(t.removed, {
      element: w
    });
    try {
      p(w).removeChild(w);
    } catch {
      g(w);
    }
  }, M = function(w, W) {
    try {
      no(t.removed, {
        attribute: W.getAttributeNode(w),
        from: W
      });
    } catch {
      no(t.removed, {
        attribute: null,
        from: W
      });
    }
    if (W.removeAttribute(w), w === "is")
      if (ne || $e)
        try {
          Ut(W);
        } catch {
        }
      else
        try {
          W.setAttribute(w, "");
        } catch {
        }
  }, te = function(w) {
    let W = null, re = null;
    if (V)
      w = "<remove></remove>" + w;
    else {
      const Ue = tc(w, /^[\r\n\t ]+/);
      re = Ue && Ue[0];
    }
    Xn === "application/xhtml+xml" && on === Zt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const De = x ? x.createHTML(w) : w;
    if (on === Zt)
      try {
        W = new f().parseFromString(De, Xn);
      } catch {
      }
    if (!W || !W.documentElement) {
      W = X.createDocument(on, "template", null);
      try {
        W.documentElement.innerHTML = Or ? C : De;
      } catch {
      }
    }
    const Re = W.body || W.documentElement;
    return w && re && Re.insertBefore(n.createTextNode(re), Re.childNodes[0] || null), on === Zt ? le.call(W, T ? "html" : "body")[0] : T ? W.documentElement : Re;
  }, Le = function(w) {
    return se.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, ze = function(w) {
    w.normalize();
    const W = se.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let re = W.nextNode();
    for (; re; ) {
      let De = re.data;
      to([U, J, H], (Re) => {
        De = ro(De, Re, " ");
      }), re.data = De, re = W.nextNode();
    }
  }, pt = function(w) {
    const W = _ ? _(w) : null;
    return typeof W != "string" || Ke(W) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== P(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    w.nodeType !== I(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    w.childNodes !== L(w);
  }, Xt = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return I(w) === Nn.documentFragment;
    } catch {
      return !1;
    }
  }, Mt = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof I(w) == "number";
    } catch {
      return !1;
    }
  };
  function Dt(ie, w, W) {
    to(ie, (re) => {
      re.call(t, w, W, hn);
    });
  }
  const Ln = function(w) {
    let W = null;
    if (Dt(_e.beforeSanitizeElements, w, null), pt(w))
      return Ut(w), !0;
    const re = Ke(w.nodeName);
    if (Dt(_e.uponSanitizeElement, w, {
      tagName: re,
      allowedTags: ke
    }), ut && w.hasChildNodes() && !Mt(w.firstElementChild) && Rt(/<[/\w!]/g, w.innerHTML) && Rt(/<[/\w!]/g, w.textContent) || ut && w.namespaceURI === Zt && re === "style" && Mt(w.firstElementChild) || w.nodeType === Nn.progressingInstruction || ut && w.nodeType === Nn.comment && Rt(/<[/\w]/g, w.data))
      return Ut(w), !0;
    if (at[re] || !(Xe.tagCheck instanceof Function && Xe.tagCheck(re)) && !ke[re]) {
      if (!at[re] && Co(re) && (ge.tagNameCheck instanceof RegExp && Rt(ge.tagNameCheck, re) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(re)))
        return !1;
      if (Ie && !Ze[re]) {
        const Re = p(w), Ue = L(w);
        if (Ue && Re) {
          const Qt = Ue.length;
          for (let an = Qt - 1; an >= 0; --an) {
            const jt = y(Ue[an], !0);
            Re.insertBefore(jt, b(w));
          }
        }
      }
      return Ut(w), !0;
    }
    return (I ? I(w) : w.nodeType) === Nn.element && !Ao(w) || (re === "noscript" || re === "noembed" || re === "noframes") && Rt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (Ut(w), !0) : (st && w.nodeType === Nn.text && (W = w.textContent, to([U, J, H], (Re) => {
      W = ro(W, Re, " ");
    }), w.textContent !== W && (no(t.removed, {
      element: w.cloneNode()
    }), w.textContent = W)), Dt(_e.afterSanitizeElements, w, null), !1);
  }, Xr = function(w, W, re) {
    if (Te[W] || E && (W === "id" || W === "name") && (re in n || re in Yr))
      return !1;
    const De = we[W] || Xe.attributeCheck instanceof Function && Xe.attributeCheck(W, w);
    if (!(ct && !Te[W] && Rt(de, W))) {
      if (!(Lt && Rt(pe, W))) {
        if (!De || Te[W]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Co(w) && (ge.tagNameCheck instanceof RegExp && Rt(ge.tagNameCheck, w) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(w)) && (ge.attributeNameCheck instanceof RegExp && Rt(ge.attributeNameCheck, W) || ge.attributeNameCheck instanceof Function && ge.attributeNameCheck(W, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            W === "is" && ge.allowCustomizedBuiltInElements && (ge.tagNameCheck instanceof RegExp && Rt(ge.tagNameCheck, re) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(re)))
          ) return !1;
        } else if (!Yn[W]) {
          if (!Rt(Me, ro(re, ae, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && w !== "script" && nc(re, "data:") === 0 && gr[w])) {
              if (!(_t && !Rt(Pe, ro(re, ae, "")))) {
                if (re)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, cs = Ne({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Co = function(w) {
    return !cs[zo(w)] && Rt(Z, w);
  }, ia = function(w) {
    Dt(_e.beforeSanitizeAttributes, w, null);
    const W = w.attributes;
    if (!W || pt(w))
      return;
    const re = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: we,
      forceKeepAttr: void 0
    };
    let De = W.length;
    for (; De--; ) {
      const Re = W[De], Ue = Re.name, Qt = Re.namespaceURI, an = Re.value, jt = Ke(Ue), Jr = an;
      let kt = Ue === "value" ? Jr : Ig(Jr);
      if (re.attrName = jt, re.attrValue = kt, re.keepAttr = !0, re.forceKeepAttr = void 0, Dt(_e.uponSanitizeAttribute, w, re), kt = re.attrValue, B && (jt === "id" || jt === "name") && nc(kt, Ae) !== 0 && (M(Ue, w), kt = Ae + kt), ut && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, kt)) {
        M(Ue, w);
        continue;
      }
      if (jt === "attributename" && tc(kt, "href")) {
        M(Ue, w);
        continue;
      }
      if (re.forceKeepAttr)
        continue;
      if (!re.keepAttr) {
        M(Ue, w);
        continue;
      }
      if (!wt && Rt(/\/>/i, kt)) {
        M(Ue, w);
        continue;
      }
      st && to([U, J, H], (gn) => {
        kt = ro(kt, gn, " ");
      });
      const ca = Ke(w.nodeName);
      if (!Xr(ca, jt, kt)) {
        M(Ue, w);
        continue;
      }
      if (x && typeof m == "object" && typeof m.getAttributeType == "function" && !Qt)
        switch (m.getAttributeType(ca, jt)) {
          case "TrustedHTML": {
            kt = x.createHTML(kt);
            break;
          }
          case "TrustedScriptURL": {
            kt = x.createScriptURL(kt);
            break;
          }
        }
      if (kt !== Jr)
        try {
          Qt ? w.setAttributeNS(Qt, Ue, kt) : w.setAttribute(Ue, kt), pt(w) ? Ut(w) : ec(t.removed);
        } catch {
          M(Ue, w);
        }
    }
    Dt(_e.afterSanitizeAttributes, w, null);
  }, Qr = function(w) {
    let W = null;
    const re = Le(w);
    for (Dt(_e.beforeSanitizeShadowDOM, w, null); W = re.nextNode(); )
      if (Dt(_e.uponSanitizeShadowNode, W, null), Ln(W), ia(W), Xt(W.content) && Qr(W.content), (I ? I(W) : W.nodeType) === Nn.element) {
        const Re = A ? A(W) : W.shadowRoot;
        Xt(Re) && (On(Re), Qr(Re));
      }
    Dt(_e.afterSanitizeShadowDOM, w, null);
  }, On = function(w) {
    const W = I ? I(w) : w.nodeType;
    if (W === Nn.element) {
      const Re = A ? A(w) : w.shadowRoot;
      Xt(Re) && (On(Re), Qr(Re));
    }
    const re = L ? L(w) : w.childNodes;
    if (!re)
      return;
    const De = [];
    to(re, (Re) => {
      no(De, Re);
    });
    for (const Re of De)
      On(Re);
    if (W === Nn.element) {
      const Re = _ ? _(w) : null;
      if (typeof Re == "string" && Ke(Re) === "template") {
        const Ue = w.content;
        Xt(Ue) && On(Ue);
      }
    }
  };
  return t.sanitize = function(ie) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, re = null, De = null, Re = null;
    if (Or = !ie, Or && (ie = "<!-->"), typeof ie != "string" && !Mt(ie) && (ie = Ng(ie), typeof ie != "string"))
      throw No("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (O || In(w), t.removed = [], typeof ie == "string" && (nt = !1), nt) {
      const an = _ ? _(ie) : ie.nodeName;
      if (typeof an == "string") {
        const jt = Ke(an);
        if (!ke[jt] || at[jt])
          throw No("root node is forbidden and cannot be sanitized in-place");
      }
      if (pt(ie))
        throw No("root node is clobbered and cannot be sanitized in-place");
      On(ie);
    } else if (Mt(ie))
      W = te("<!---->"), re = W.ownerDocument.importNode(ie, !0), re.nodeType === Nn.element && re.nodeName === "BODY" || re.nodeName === "HTML" ? W = re : W.appendChild(re), On(re);
    else {
      if (!ne && !st && !T && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return x && ve ? x.createHTML(ie) : ie;
      if (W = te(ie), !W)
        return ne ? null : ve ? C : "";
    }
    W && V && Ut(W.firstChild);
    const Ue = Le(nt ? ie : W);
    for (; De = Ue.nextNode(); )
      Ln(De), ia(De), Xt(De.content) && Qr(De.content);
    if (nt)
      return st && ze(ie), ie;
    if (ne) {
      if (st && ze(W), $e)
        for (Re = he.call(W.ownerDocument); W.firstChild; )
          Re.appendChild(W.firstChild);
      else
        Re = W;
      return (we.shadowroot || we.shadowrootmode) && (Re = ye.call(r, Re, !0)), Re;
    }
    let Qt = T ? W.outerHTML : W.innerHTML;
    return T && ke["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Rt(Wg, W.ownerDocument.doctype.name) && (Qt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + Qt), st && to([U, J, H], (an) => {
      Qt = ro(Qt, an, " ");
    }), x && ve ? x.createHTML(Qt) : Qt;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    In(ie), O = !0;
  }, t.clearConfig = function() {
    hn = null, O = !1;
  }, t.isValidAttribute = function(ie, w, W) {
    hn || In({});
    const re = Ke(ie), De = Ke(w);
    return Xr(re, De, W);
  }, t.addHook = function(ie, w) {
    typeof w == "function" && no(_e[ie], w);
  }, t.removeHook = function(ie, w) {
    if (w !== void 0) {
      const W = Ag(_e[ie], w);
      return W === -1 ? void 0 : Cg(_e[ie], W, 1)[0];
    }
    return ec(_e[ie]);
  }, t.removeHooks = function(ie) {
    _e[ie] = [];
  }, t.removeAllHooks = function() {
    _e = uc();
  }, t;
}
var qg = _d();
const Yg = {
  ADD_ATTR: [
    "checked",
    "class",
    "data-checked",
    "data-original-path",
    "data-type",
    "data-code-id",
    "id",
    "rel",
    "target",
    "title",
    "type",
    "width"
  ],
  FORBID_TAGS: ["script", "style", "iframe", "object", "embed"],
  FORBID_ATTR: ["style"]
};
function Zg(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : qg.sanitize(e, Yg) : "";
}
const wd = Symbol(), Ea = "el", Xg = "is-", Dr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, kd = Symbol("namespaceContextKey"), wl = (e) => {
  const t = e || (qt() ? Ge(kd, G(Ea)) : G(Ea));
  return N(() => c(t) || Ea);
}, At = (e, t) => {
  const n = wl(t);
  return {
    namespace: n,
    b: (b = "") => Dr(n.value, e, b, "", ""),
    e: (b) => b ? Dr(n.value, e, "", b, "") : "",
    m: (b) => b ? Dr(n.value, e, "", "", b) : "",
    be: (b, L) => b && L ? Dr(n.value, e, b, L, "") : "",
    em: (b, L) => b && L ? Dr(n.value, e, "", b, L) : "",
    bm: (b, L) => b && L ? Dr(n.value, e, b, "", L) : "",
    bem: (b, L, p) => b && L && p ? Dr(n.value, e, b, L, p) : "",
    is: (b, ...L) => {
      const p = L.length >= 1 ? L[0] : !0;
      return b && p ? `${Xg}${b}` : "";
    },
    cssVar: (b) => {
      const L = {};
      for (const p in b)
        b[p] && (L[`--${n.value}-${p}`] = b[p]);
      return L;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const L = {};
      for (const p in b)
        b[p] && (L[`--${n.value}-${e}-${p}`] = b[p]);
      return L;
    },
    cssVarBlockName: (b) => `--${n.value}-${e}-${b}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Zo = () => {
}, Qg = Object.prototype.hasOwnProperty, dc = (e, t) => Qg.call(e, t), Dn = Array.isArray, it = (e) => typeof e == "function", Vt = (e) => typeof e == "string", sn = (e) => e !== null && typeof e == "object", fc = (e) => (sn(e) || it(e)) && it(e.then) && it(e.catch), Jg = Object.prototype.toString, ev = (e) => Jg.call(e), tv = (e) => ev(e) === "[object Object]";
var Sd = typeof global == "object" && global && global.Object === Object && global, nv = typeof self == "object" && self && self.Object === Object && self, Kn = Sd || nv || Function("return this")(), Wn = Kn.Symbol, Td = Object.prototype, rv = Td.hasOwnProperty, ov = Td.toString, Po = Wn ? Wn.toStringTag : void 0;
function av(e) {
  var t = rv.call(e, Po), n = e[Po];
  try {
    e[Po] = void 0;
    var r = !0;
  } catch {
  }
  var o = ov.call(e);
  return r && (t ? e[Po] = n : delete e[Po]), o;
}
var sv = Object.prototype, lv = sv.toString;
function iv(e) {
  return lv.call(e);
}
var cv = "[object Null]", uv = "[object Undefined]", pc = Wn ? Wn.toStringTag : void 0;
function So(e) {
  return e == null ? e === void 0 ? uv : cv : pc && pc in Object(e) ? av(e) : iv(e);
}
function mo(e) {
  return e != null && typeof e == "object";
}
var dv = "[object Symbol]";
function Ya(e) {
  return typeof e == "symbol" || mo(e) && So(e) == dv;
}
function fv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var En = Array.isArray, mc = Wn ? Wn.prototype : void 0, hc = mc ? mc.toString : void 0;
function Ed(e) {
  if (typeof e == "string")
    return e;
  if (En(e))
    return fv(e, Ed) + "";
  if (Ya(e))
    return hc ? hc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var pv = /\s/;
function mv(e) {
  for (var t = e.length; t-- && pv.test(e.charAt(t)); )
    ;
  return t;
}
var hv = /^\s+/;
function gv(e) {
  return e && e.slice(0, mv(e) + 1).replace(hv, "");
}
function Er(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gc = NaN, vv = /^[-+]0x[0-9a-f]+$/i, bv = /^0b[01]+$/i, yv = /^0o[0-7]+$/i, _v = parseInt;
function vc(e) {
  if (typeof e == "number")
    return e;
  if (Ya(e))
    return gc;
  if (Er(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Er(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = gv(e);
  var n = bv.test(e);
  return n || yv.test(e) ? _v(e.slice(2), n ? 2 : 8) : vv.test(e) ? gc : +e;
}
function Ad(e) {
  return e;
}
var wv = "[object AsyncFunction]", kv = "[object Function]", Sv = "[object GeneratorFunction]", Tv = "[object Proxy]";
function Cd(e) {
  if (!Er(e))
    return !1;
  var t = So(e);
  return t == kv || t == Sv || t == wv || t == Tv;
}
var Ts = Kn["__core-js_shared__"], bc = function() {
  var e = /[^.]+$/.exec(Ts && Ts.keys && Ts.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ev(e) {
  return !!bc && bc in e;
}
var Av = Function.prototype, Cv = Av.toString;
function Hr(e) {
  if (e != null) {
    try {
      return Cv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Iv = /[\\^$.*+?()[\]{}|]/g, Lv = /^\[object .+?Constructor\]$/, Ov = Function.prototype, xv = Object.prototype, Rv = Ov.toString, Nv = xv.hasOwnProperty, Pv = RegExp(
  "^" + Rv.call(Nv).replace(Iv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $v(e) {
  if (!Er(e) || Ev(e))
    return !1;
  var t = Cd(e) ? Pv : Lv;
  return t.test(Hr(e));
}
function Mv(e, t) {
  return e?.[t];
}
function Gr(e, t) {
  var n = Mv(e, t);
  return $v(n) ? n : void 0;
}
var Hs = Gr(Kn, "WeakMap");
function Dv(e, t, n) {
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
var Fv = 800, zv = 16, Bv = Date.now;
function Vv(e) {
  var t = 0, n = 0;
  return function() {
    var r = Bv(), o = zv - (r - n);
    if (n = r, o > 0) {
      if (++t >= Fv)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Uv(e) {
  return function() {
    return e;
  };
}
var Pa = function() {
  try {
    var e = Gr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), jv = Pa ? function(e, t) {
  return Pa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Uv(t),
    writable: !0
  });
} : Ad, Wv = Vv(jv);
function Hv(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Gv = 9007199254740991, Kv = /^(?:0|[1-9]\d*)$/;
function kl(e, t) {
  var n = typeof e;
  return t = t ?? Gv, !!t && (n == "number" || n != "symbol" && Kv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function qv(e, t, n) {
  t == "__proto__" && Pa ? Pa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Sl(e, t) {
  return e === t || e !== e && t !== t;
}
var Yv = Object.prototype, Zv = Yv.hasOwnProperty;
function Xv(e, t, n) {
  var r = e[t];
  (!(Zv.call(e, t) && Sl(r, n)) || n === void 0 && !(t in e)) && qv(e, t, n);
}
var yc = Math.max;
function Qv(e, t, n) {
  return t = yc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = yc(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Dv(e, this, i);
  };
}
var Jv = 9007199254740991;
function Tl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jv;
}
function eb(e) {
  return e != null && Tl(e.length) && !Cd(e);
}
var tb = Object.prototype;
function nb(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || tb;
  return e === n;
}
function rb(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ob = "[object Arguments]";
function _c(e) {
  return mo(e) && So(e) == ob;
}
var Id = Object.prototype, ab = Id.hasOwnProperty, sb = Id.propertyIsEnumerable, El = _c(/* @__PURE__ */ function() {
  return arguments;
}()) ? _c : function(e) {
  return mo(e) && ab.call(e, "callee") && !sb.call(e, "callee");
};
function lb() {
  return !1;
}
var Ld = typeof exports == "object" && exports && !exports.nodeType && exports, wc = Ld && typeof module == "object" && module && !module.nodeType && module, ib = wc && wc.exports === Ld, kc = ib ? Kn.Buffer : void 0, cb = kc ? kc.isBuffer : void 0, Gs = cb || lb, ub = "[object Arguments]", db = "[object Array]", fb = "[object Boolean]", pb = "[object Date]", mb = "[object Error]", hb = "[object Function]", gb = "[object Map]", vb = "[object Number]", bb = "[object Object]", yb = "[object RegExp]", _b = "[object Set]", wb = "[object String]", kb = "[object WeakMap]", Sb = "[object ArrayBuffer]", Tb = "[object DataView]", Eb = "[object Float32Array]", Ab = "[object Float64Array]", Cb = "[object Int8Array]", Ib = "[object Int16Array]", Lb = "[object Int32Array]", Ob = "[object Uint8Array]", xb = "[object Uint8ClampedArray]", Rb = "[object Uint16Array]", Nb = "[object Uint32Array]", Je = {};
Je[Eb] = Je[Ab] = Je[Cb] = Je[Ib] = Je[Lb] = Je[Ob] = Je[xb] = Je[Rb] = Je[Nb] = !0;
Je[ub] = Je[db] = Je[Sb] = Je[fb] = Je[Tb] = Je[pb] = Je[mb] = Je[hb] = Je[gb] = Je[vb] = Je[bb] = Je[yb] = Je[_b] = Je[wb] = Je[kb] = !1;
function Pb(e) {
  return mo(e) && Tl(e.length) && !!Je[So(e)];
}
function $b(e) {
  return function(t) {
    return e(t);
  };
}
var Od = typeof exports == "object" && exports && !exports.nodeType && exports, Vo = Od && typeof module == "object" && module && !module.nodeType && module, Mb = Vo && Vo.exports === Od, Es = Mb && Sd.process, Sc = function() {
  try {
    var e = Vo && Vo.require && Vo.require("util").types;
    return e || Es && Es.binding && Es.binding("util");
  } catch {
  }
}(), Tc = Sc && Sc.isTypedArray, xd = Tc ? $b(Tc) : Pb, Db = Object.prototype, Fb = Db.hasOwnProperty;
function zb(e, t) {
  var n = En(e), r = !n && El(e), o = !n && !r && Gs(e), a = !n && !r && !o && xd(e), s = n || r || o || a, i = s ? rb(e.length, String) : [], l = i.length;
  for (var u in e)
    Fb.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    kl(u, l))) && i.push(u);
  return i;
}
function Bb(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Vb = Bb(Object.keys, Object), Ub = Object.prototype, jb = Ub.hasOwnProperty;
function Wb(e) {
  if (!nb(e))
    return Vb(e);
  var t = [];
  for (var n in Object(e))
    jb.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Rd(e) {
  return eb(e) ? zb(e) : Wb(e);
}
var Hb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gb = /^\w*$/;
function Al(e, t) {
  if (En(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ya(e) ? !0 : Gb.test(e) || !Hb.test(e) || t != null && e in Object(t);
}
var Xo = Gr(Object, "create");
function Kb() {
  this.__data__ = Xo ? Xo(null) : {}, this.size = 0;
}
function qb(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Yb = "__lodash_hash_undefined__", Zb = Object.prototype, Xb = Zb.hasOwnProperty;
function Qb(e) {
  var t = this.__data__;
  if (Xo) {
    var n = t[e];
    return n === Yb ? void 0 : n;
  }
  return Xb.call(t, e) ? t[e] : void 0;
}
var Jb = Object.prototype, e0 = Jb.hasOwnProperty;
function t0(e) {
  var t = this.__data__;
  return Xo ? t[e] !== void 0 : e0.call(t, e);
}
var n0 = "__lodash_hash_undefined__";
function r0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Xo && t === void 0 ? n0 : t, this;
}
function Vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vr.prototype.clear = Kb;
Vr.prototype.delete = qb;
Vr.prototype.get = Qb;
Vr.prototype.has = t0;
Vr.prototype.set = r0;
function o0() {
  this.__data__ = [], this.size = 0;
}
function Za(e, t) {
  for (var n = e.length; n--; )
    if (Sl(e[n][0], t))
      return n;
  return -1;
}
var a0 = Array.prototype, s0 = a0.splice;
function l0(e) {
  var t = this.__data__, n = Za(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : s0.call(t, n, 1), --this.size, !0;
}
function i0(e) {
  var t = this.__data__, n = Za(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function c0(e) {
  return Za(this.__data__, e) > -1;
}
function u0(e, t) {
  var n = this.__data__, r = Za(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function mr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mr.prototype.clear = o0;
mr.prototype.delete = l0;
mr.prototype.get = i0;
mr.prototype.has = c0;
mr.prototype.set = u0;
var Qo = Gr(Kn, "Map");
function d0() {
  this.size = 0, this.__data__ = {
    hash: new Vr(),
    map: new (Qo || mr)(),
    string: new Vr()
  };
}
function f0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xa(e, t) {
  var n = e.__data__;
  return f0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function p0(e) {
  var t = Xa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function m0(e) {
  return Xa(this, e).get(e);
}
function h0(e) {
  return Xa(this, e).has(e);
}
function g0(e, t) {
  var n = Xa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function hr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hr.prototype.clear = d0;
hr.prototype.delete = p0;
hr.prototype.get = m0;
hr.prototype.has = h0;
hr.prototype.set = g0;
var v0 = "Expected a function";
function Cl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(v0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Cl.Cache || hr)(), n;
}
Cl.Cache = hr;
var b0 = 500;
function y0(e) {
  var t = Cl(e, function(r) {
    return n.size === b0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var _0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, w0 = /\\(\\)?/g, k0 = y0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(_0, function(n, r, o, a) {
    t.push(o ? a.replace(w0, "$1") : r || n);
  }), t;
});
function S0(e) {
  return e == null ? "" : Ed(e);
}
function Qa(e, t) {
  return En(e) ? e : Al(e, t) ? [e] : k0(S0(e));
}
function ra(e) {
  if (typeof e == "string" || Ya(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Il(e, t) {
  t = Qa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ra(t[n++])];
  return n && n == r ? e : void 0;
}
function kr(e, t, n) {
  var r = e == null ? void 0 : Il(e, t);
  return r === void 0 ? n : r;
}
function Nd(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ec = Wn ? Wn.isConcatSpreadable : void 0;
function T0(e) {
  return En(e) || El(e) || !!(Ec && e && e[Ec]);
}
function E0(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = T0), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Nd(o, i) : o[o.length] = i;
  }
  return o;
}
function A0(e) {
  var t = e == null ? 0 : e.length;
  return t ? E0(e) : [];
}
function C0(e) {
  return Wv(Qv(e, void 0, A0), e + "");
}
function wr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return En(e) ? e : [e];
}
function I0() {
  this.__data__ = new mr(), this.size = 0;
}
function L0(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function O0(e) {
  return this.__data__.get(e);
}
function x0(e) {
  return this.__data__.has(e);
}
var R0 = 200;
function N0(e, t) {
  var n = this.__data__;
  if (n instanceof mr) {
    var r = n.__data__;
    if (!Qo || r.length < R0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new hr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ir(e) {
  var t = this.__data__ = new mr(e);
  this.size = t.size;
}
ir.prototype.clear = I0;
ir.prototype.delete = L0;
ir.prototype.get = O0;
ir.prototype.has = x0;
ir.prototype.set = N0;
function P0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function $0() {
  return [];
}
var M0 = Object.prototype, D0 = M0.propertyIsEnumerable, Ac = Object.getOwnPropertySymbols, F0 = Ac ? function(e) {
  return e == null ? [] : (e = Object(e), P0(Ac(e), function(t) {
    return D0.call(e, t);
  }));
} : $0;
function z0(e, t, n) {
  var r = t(e);
  return En(e) ? r : Nd(r, n(e));
}
function Cc(e) {
  return z0(e, Rd, F0);
}
var Ks = Gr(Kn, "DataView"), qs = Gr(Kn, "Promise"), Ys = Gr(Kn, "Set"), Ic = "[object Map]", B0 = "[object Object]", Lc = "[object Promise]", Oc = "[object Set]", xc = "[object WeakMap]", Rc = "[object DataView]", V0 = Hr(Ks), U0 = Hr(Qo), j0 = Hr(qs), W0 = Hr(Ys), H0 = Hr(Hs), _r = So;
(Ks && _r(new Ks(new ArrayBuffer(1))) != Rc || Qo && _r(new Qo()) != Ic || qs && _r(qs.resolve()) != Lc || Ys && _r(new Ys()) != Oc || Hs && _r(new Hs()) != xc) && (_r = function(e) {
  var t = So(e), n = t == B0 ? e.constructor : void 0, r = n ? Hr(n) : "";
  if (r)
    switch (r) {
      case V0:
        return Rc;
      case U0:
        return Ic;
      case j0:
        return Lc;
      case W0:
        return Oc;
      case H0:
        return xc;
    }
  return t;
});
var Nc = Kn.Uint8Array, G0 = "__lodash_hash_undefined__";
function K0(e) {
  return this.__data__.set(e, G0), this;
}
function q0(e) {
  return this.__data__.has(e);
}
function $a(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new hr(); ++t < n; )
    this.add(e[t]);
}
$a.prototype.add = $a.prototype.push = K0;
$a.prototype.has = q0;
function Y0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Z0(e, t) {
  return e.has(t);
}
var X0 = 1, Q0 = 2;
function Pd(e, t, n, r, o, a) {
  var s = n & X0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var m = -1, h = !0, y = n & Q0 ? new $a() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < i; ) {
    var g = e[m], b = t[m];
    if (r)
      var L = s ? r(b, g, m, t, e, a) : r(g, b, m, e, t, a);
    if (L !== void 0) {
      if (L)
        continue;
      h = !1;
      break;
    }
    if (y) {
      if (!Y0(t, function(p, A) {
        if (!Z0(y, A) && (g === p || o(g, p, n, r, a)))
          return y.push(A);
      })) {
        h = !1;
        break;
      }
    } else if (!(g === b || o(g, b, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
function J0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function ey(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ty = 1, ny = 2, ry = "[object Boolean]", oy = "[object Date]", ay = "[object Error]", sy = "[object Map]", ly = "[object Number]", iy = "[object RegExp]", cy = "[object Set]", uy = "[object String]", dy = "[object Symbol]", fy = "[object ArrayBuffer]", py = "[object DataView]", Pc = Wn ? Wn.prototype : void 0, As = Pc ? Pc.valueOf : void 0;
function my(e, t, n, r, o, a, s) {
  switch (n) {
    case py:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fy:
      return !(e.byteLength != t.byteLength || !a(new Nc(e), new Nc(t)));
    case ry:
    case oy:
    case ly:
      return Sl(+e, +t);
    case ay:
      return e.name == t.name && e.message == t.message;
    case iy:
    case uy:
      return e == t + "";
    case sy:
      var i = J0;
    case cy:
      var l = r & ty;
      if (i || (i = ey), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= ny, s.set(e, t);
      var f = Pd(i(e), i(t), r, o, a, s);
      return s.delete(e), f;
    case dy:
      if (As)
        return As.call(e) == As.call(t);
  }
  return !1;
}
var hy = 1, gy = Object.prototype, vy = gy.hasOwnProperty;
function by(e, t, n, r, o, a) {
  var s = n & hy, i = Cc(e), l = i.length, u = Cc(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var m = l; m--; ) {
    var h = i[m];
    if (!(s ? h in t : vy.call(t, h)))
      return !1;
  }
  var y = a.get(e), g = a.get(t);
  if (y && g)
    return y == t && g == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var L = s; ++m < l; ) {
    h = i[m];
    var p = e[h], A = t[h];
    if (r)
      var P = s ? r(A, p, h, t, e, a) : r(p, A, h, e, t, a);
    if (!(P === void 0 ? p === A || o(p, A, n, r, a) : P)) {
      b = !1;
      break;
    }
    L || (L = h == "constructor");
  }
  if (b && !L) {
    var I = e.constructor, _ = t.constructor;
    I != _ && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof _ == "function" && _ instanceof _) && (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var yy = 1, $c = "[object Arguments]", Mc = "[object Array]", ga = "[object Object]", _y = Object.prototype, Dc = _y.hasOwnProperty;
function wy(e, t, n, r, o, a) {
  var s = En(e), i = En(t), l = s ? Mc : _r(e), u = i ? Mc : _r(t);
  l = l == $c ? ga : l, u = u == $c ? ga : u;
  var f = l == ga, m = u == ga, h = l == u;
  if (h && Gs(e)) {
    if (!Gs(t))
      return !1;
    s = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new ir()), s || xd(e) ? Pd(e, t, n, r, o, a) : my(e, t, l, n, r, o, a);
  if (!(n & yy)) {
    var y = f && Dc.call(e, "__wrapped__"), g = m && Dc.call(t, "__wrapped__");
    if (y || g) {
      var b = y ? e.value() : e, L = g ? t.value() : t;
      return a || (a = new ir()), o(b, L, n, r, a);
    }
  }
  return h ? (a || (a = new ir()), by(e, t, n, r, o, a)) : !1;
}
function Ja(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !mo(e) && !mo(t) ? e !== e && t !== t : wy(e, t, n, r, Ja, o);
}
var ky = 1, Sy = 2;
function Ty(e, t, n, r) {
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
      var f = new ir(), m;
      if (!(m === void 0 ? Ja(u, l, ky | Sy, r, f) : m))
        return !1;
    }
  }
  return !0;
}
function $d(e) {
  return e === e && !Er(e);
}
function Ey(e) {
  for (var t = Rd(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, $d(o)];
  }
  return t;
}
function Md(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Ay(e) {
  var t = Ey(e);
  return t.length == 1 && t[0][2] ? Md(t[0][0], t[0][1]) : function(n) {
    return n === e || Ty(n, e, t);
  };
}
function Cy(e, t) {
  return e != null && t in Object(e);
}
function Iy(e, t, n) {
  t = Qa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = ra(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Tl(o) && kl(s, o) && (En(e) || El(e)));
}
function Dd(e, t) {
  return e != null && Iy(e, t, Cy);
}
var Ly = 1, Oy = 2;
function xy(e, t) {
  return Al(e) && $d(t) ? Md(ra(e), t) : function(n) {
    var r = kr(n, e);
    return r === void 0 && r === t ? Dd(n, e) : Ja(t, r, Ly | Oy);
  };
}
function Ry(e) {
  return function(t) {
    return t?.[e];
  };
}
function Ny(e) {
  return function(t) {
    return Il(t, e);
  };
}
function Py(e) {
  return Al(e) ? Ry(ra(e)) : Ny(e);
}
function $y(e) {
  return typeof e == "function" ? e : e == null ? Ad : typeof e == "object" ? En(e) ? xy(e[0], e[1]) : Ay(e) : Py(e);
}
var Cs = function() {
  return Kn.Date.now();
}, My = "Expected a function", Dy = Math.max, Fy = Math.min;
function zy(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(My);
  t = vc(t) || 0, Er(n) && (f = !!n.leading, m = "maxWait" in n, a = m ? Dy(vc(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function y(x) {
    var C = r, Y = o;
    return r = o = void 0, u = x, s = e.apply(Y, C), s;
  }
  function g(x) {
    return u = x, i = setTimeout(p, t), f ? y(x) : s;
  }
  function b(x) {
    var C = x - l, Y = x - u, X = t - C;
    return m ? Fy(X, a - Y) : X;
  }
  function L(x) {
    var C = x - l, Y = x - u;
    return l === void 0 || C >= t || C < 0 || m && Y >= a;
  }
  function p() {
    var x = Cs();
    if (L(x))
      return A(x);
    i = setTimeout(p, b(x));
  }
  function A(x) {
    return i = void 0, h && r ? y(x) : (r = o = void 0, s);
  }
  function P() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function I() {
    return i === void 0 ? s : A(Cs());
  }
  function _() {
    var x = Cs(), C = L(x);
    if (r = arguments, o = this, l = x, C) {
      if (i === void 0)
        return g(l);
      if (m)
        return clearTimeout(i), i = setTimeout(p, t), y(l);
    }
    return i === void 0 && (i = setTimeout(p, t)), s;
  }
  return _.cancel = P, _.flush = I, _;
}
function By(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Hv(e, $y(t), o);
}
function Ma(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Uo(e, t) {
  return Ja(e, t);
}
function cr(e) {
  return e == null;
}
function Vy(e) {
  return e === void 0;
}
function Uy(e, t, n, r) {
  if (!Er(e))
    return e;
  t = Qa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = ra(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = Er(f) ? f : kl(t[o + 1]) ? [] : {});
    }
    Xv(i, l, u), i = i[l];
  }
  return e;
}
function jy(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = Il(e, s);
    n(i, s) && Uy(a, Qa(s, e), i);
  }
  return a;
}
function Wy(e, t) {
  return jy(e, t, function(n, r) {
    return Dd(e, r);
  });
}
var Hy = C0(function(e, t) {
  return e == null ? {} : Wy(e, t);
});
const Fn = (e) => e === void 0, Tr = (e) => typeof e == "boolean", We = (e) => typeof e == "number", Sn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Gy = (e) => Vt(e) ? !Number.isNaN(Number(e)) : !1;
var Ky = Object.defineProperty, qy = Object.defineProperties, Yy = Object.getOwnPropertyDescriptors, Fc = Object.getOwnPropertySymbols, Zy = Object.prototype.hasOwnProperty, Xy = Object.prototype.propertyIsEnumerable, zc = (e, t, n) => t in e ? Ky(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qy = (e, t) => {
  for (var n in t || (t = {}))
    Zy.call(t, n) && zc(e, n, t[n]);
  if (Fc)
    for (var n of Fc(t))
      Xy.call(t, n) && zc(e, n, t[n]);
  return e;
}, Jy = (e, t) => qy(e, Yy(t));
function e1(e, t) {
  var n;
  const r = Sr();
  return Iu(() => {
    r.value = e();
  }, Jy(Qy({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), nl(r);
}
var Bc;
const Tt = typeof window < "u", t1 = (e) => typeof e == "string", Fd = () => {
}, Zs = Tt && ((Bc = window?.navigator) == null ? void 0 : Bc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ll(e) {
  return typeof e == "function" ? e() : c(e);
}
function n1(e) {
  return e;
}
function oa(e) {
  return np() ? (rp(e), !0) : !1;
}
function r1(e, t = !0) {
  qt() ? yt(e) : t ? e() : gt(e);
}
function zd(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = G(!1);
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
    }, Ll(t));
  }
  return r && (o.value = !0, Tt && l()), oa(i), {
    isPending: nl(o),
    start: l,
    stop: i
  };
}
function sr(e) {
  var t;
  const n = Ll(e);
  return (t = n?.$el) != null ? t : n;
}
const es = Tt ? window : void 0;
function Tn(...e) {
  let t, n, r, o;
  if (t1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = es) : [t, n, r, o] = e, !t)
    return Fd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, m, h, y) => (f.addEventListener(m, h, y), () => f.removeEventListener(m, h, y)), l = Oe(() => [sr(t), Ll(o)], ([f, m]) => {
    s(), f && a.push(...n.flatMap((h) => r.map((y) => i(f, h, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return oa(u), u;
}
let Vc = !1;
function o1(e, t, n = {}) {
  const { window: r = es, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Zs && !Vc && (Vc = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", Fd)));
  let i = !0;
  const l = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === h.target || h.composedPath().includes(g));
    {
      const g = sr(y);
      return g && (h.target === g || h.composedPath().includes(g));
    }
  }), f = [
    Tn(r, "click", (h) => {
      const y = sr(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !l(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: a }),
    Tn(r, "pointerdown", (h) => {
      const y = sr(e);
      y && (i = !h.composedPath().includes(y) && !l(h));
    }, { passive: !0 }),
    s && Tn(r, "blur", (h) => {
      var y;
      const g = sr(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
function Bd(e, t = !1) {
  const n = G(), r = () => n.value = !!e();
  return r(), r1(r, t), n;
}
const Uc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jc = "__vueuse_ssr_handlers__";
Uc[jc] = Uc[jc] || {};
var Wc = Object.getOwnPropertySymbols, a1 = Object.prototype.hasOwnProperty, s1 = Object.prototype.propertyIsEnumerable, l1 = (e, t) => {
  var n = {};
  for (var r in e)
    a1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Wc)
    for (var r of Wc(e))
      t.indexOf(r) < 0 && s1.call(e, r) && (n[r] = e[r]);
  return n;
};
function Mn(e, t, n = {}) {
  const r = n, { window: o = es } = r, a = l1(r, ["window"]);
  let s;
  const i = Bd(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Oe(() => sr(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return oa(f), {
    isSupported: i,
    stop: f
  };
}
var Hc = Object.getOwnPropertySymbols, i1 = Object.prototype.hasOwnProperty, c1 = Object.prototype.propertyIsEnumerable, u1 = (e, t) => {
  var n = {};
  for (var r in e)
    i1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Hc)
    for (var r of Hc(e))
      t.indexOf(r) < 0 && c1.call(e, r) && (n[r] = e[r]);
  return n;
};
function d1(e, t, n = {}) {
  const r = n, { window: o = es } = r, a = u1(r, ["window"]);
  let s;
  const i = Bd(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Oe(() => sr(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return oa(f), {
    isSupported: i,
    stop: f
  };
}
var Gc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Gc || (Gc = {}));
var f1 = Object.defineProperty, Kc = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, m1 = Object.prototype.propertyIsEnumerable, qc = (e, t, n) => t in e ? f1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, h1 = (e, t) => {
  for (var n in t || (t = {}))
    p1.call(t, n) && qc(e, n, t[n]);
  if (Kc)
    for (var n of Kc(t))
      m1.call(t, n) && qc(e, n, t[n]);
  return e;
};
const g1 = {
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
h1({
  linear: n1
}, g1);
class v1 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ol(e, t) {
  throw new v1(`[${e}] ${t}`);
}
const Yc = {
  current: 0
}, Zc = G(0), Vd = 2e3, Xc = Symbol("elZIndexContextKey"), Ud = Symbol("zIndexContextKey"), jd = (e) => {
  const t = qt() ? Ge(Xc, Yc) : Yc, n = e || (qt() ? Ge(Ud, void 0) : void 0), r = N(() => {
    const s = c(n);
    return We(s) ? s : Vd;
  }), o = N(() => r.value + Zc.value), a = () => (t.current++, Zc.value = t.current, o.value);
  return !Tt && Ge(Xc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var b1 = {
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
const y1 = (e) => (t, n) => _1(t, n, c(e)), _1 = (e, t, n) => kr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), w1 = (e) => {
  const t = N(() => c(e).name), n = co(e) ? e : G(e);
  return {
    lang: t,
    locale: n,
    t: y1(e)
  };
}, Wd = Symbol("localeContextKey"), xl = (e) => {
  const t = e || Ge(Wd, G());
  return w1(N(() => t.value || b1));
}, Hd = "__epPropKey", Ee = (e) => e, k1 = (e) => sn(e) && !!e[Hd], ts = (e, t) => {
  if (!sn(e) || k1(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, m = [];
      if (n && (m = Array.from(n), dc(e, "default") && m.push(o), f || (f = m.includes(u))), s && (f || (f = s(u))), !f && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        op(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Hd]: !0
  };
  return dc(e, "default") && (l.default = o), l;
}, tt = (e) => Ma(Object.entries(e).map(([t, n]) => [
  t,
  ts(n, t)
])), Rl = ["", "default", "small", "large"], ns = ts({
  type: String,
  values: Rl,
  required: !1
}), Gd = Symbol("size"), S1 = () => {
  const e = Ge(Gd, {});
  return N(() => c(e.size) || "");
}, Kd = Symbol("emptyValuesContextKey"), T1 = ["", void 0, null], E1 = void 0, qd = tt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => it(e) ? !e() : !e
  }
}), A1 = (e, t) => {
  const n = qt() ? Ge(Kd, G({})) : G({}), r = N(() => e.emptyValues || n.value.emptyValues || T1), o = N(() => it(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : it(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : E1), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Qc = (e) => Object.keys(e), Da = G();
function Yd(e, t = void 0) {
  return qt() ? Ge(wd, Da) : Da;
}
function Zd(e, t) {
  const n = Yd(), r = At(e, N(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Ea;
  })), o = xl(N(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = jd(N(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Vd;
  })), s = N(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Xd(N(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Xd = (e, t, n = !1) => {
  var r;
  const o = !!qt(), a = o ? Yd() : void 0, s = (r = void 0) != null ? r : o ? jn : void 0;
  if (!s)
    return;
  const i = N(() => {
    const l = c(e);
    return a?.value ? C1(a.value, l) : l;
  });
  return s(wd, i), s(Wd, N(() => i.value.locale)), s(kd, N(() => i.value.namespace)), s(Ud, N(() => i.value.zIndex)), s(Gd, {
    size: N(() => i.value.size || "")
  }), s(Kd, N(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Da.value) && (Da.value = i.value), i;
}, C1 = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Qc(e), ...Qc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, xt = "update:modelValue", fr = "change", ur = "input";
var ot = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function ho(e, t = "px") {
  if (!e)
    return "";
  if (We(e) || Gy(e))
    return `${e}${t}`;
  if (Vt(e))
    return e;
}
function I1(e, t) {
  if (!Tt)
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
const An = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Qd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Jd = (e) => (e.install = Zo, e), L1 = tt({
  size: {
    type: Ee([Number, String])
  },
  color: {
    type: String
  }
}), O1 = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), x1 = /* @__PURE__ */ ce({
  ...O1,
  props: L1,
  setup(e) {
    const t = e, n = At("icon"), r = N(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Fn(o) ? void 0 : ho(o),
        "--color": a
      };
    });
    return (o, a) => (R(), j("i", uo({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Ce(o.$slots, "default")
    ], 16));
  }
});
var R1 = /* @__PURE__ */ ot(x1, [["__file", "icon.vue"]]);
const St = An(R1);
/*! Element Plus Icons Vue v2.3.1 */
var N1 = /* @__PURE__ */ ce({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), ef = N1, P1 = /* @__PURE__ */ ce({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), $1 = P1, M1 = /* @__PURE__ */ ce({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      v("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), D1 = M1, F1 = /* @__PURE__ */ ce({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), z1 = F1, B1 = /* @__PURE__ */ ce({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      v("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Nl = B1, V1 = /* @__PURE__ */ ce({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Fa = V1, U1 = /* @__PURE__ */ ce({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      v("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), j1 = U1, W1 = /* @__PURE__ */ ce({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), H1 = W1, G1 = /* @__PURE__ */ ce({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), tf = G1, K1 = /* @__PURE__ */ ce({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), q1 = K1, Y1 = /* @__PURE__ */ ce({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Z1 = Y1, X1 = /* @__PURE__ */ ce({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Q1 = X1, J1 = /* @__PURE__ */ ce({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), e_ = J1, t_ = /* @__PURE__ */ ce({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), n_ = t_;
const zn = Ee([
  String,
  Object,
  Function
]), r_ = {
  Close: Fa
}, o_ = {
  Close: Fa
}, za = {
  success: Q1,
  warning: n_,
  error: z1,
  info: H1
}, nf = {
  validating: tf,
  success: D1,
  error: Nl
}, rf = () => Tt && /firefox/i.test(window.navigator.userAgent);
let Jt;
const a_ = {
  height: "0",
  visibility: "hidden",
  overflow: rf() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, s_ = [
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
function l_(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: s_.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Jc(e, t = 1, n) {
  var r;
  Jt || (Jt = document.createElement("textarea"), document.body.appendChild(Jt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = l_(e);
  i.forEach(([m, h]) => Jt?.style.setProperty(m, h)), Object.entries(a_).forEach(([m, h]) => Jt?.style.setProperty(m, h, "important")), Jt.value = e.value || e.placeholder || "";
  let l = Jt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Jt.value = "";
  const f = Jt.scrollHeight - o;
  if (We(t)) {
    let m = f * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (We(n)) {
    let m = f * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = Jt.parentNode) == null || r.removeChild(Jt), Jt = void 0, u;
}
const of = (e) => e, i_ = tt({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Kr = (e) => Hy(i_, e), c_ = tt({
  id: {
    type: String,
    default: void 0
  },
  size: ns,
  disabled: Boolean,
  modelValue: {
    type: Ee([
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
    type: Ee([Boolean, Object]),
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
    type: zn
  },
  prefixIcon: {
    type: zn
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
    type: Ee([Object, Array, String]),
    default: () => of({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Kr(["ariaLabel"])
}), u_ = {
  [xt]: (e) => Vt(e),
  input: (e) => Vt(e),
  change: (e) => Vt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, d_ = ["class", "style"], f_ = /^on[A-Z]/, p_ = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = N(() => (n?.value || []).concat(d_)), o = qt();
  return o ? N(() => {
    var a;
    return Ma(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && f_.test(s))));
  }) : N(() => ({}));
}, Pl = Symbol("formContextKey"), Ba = Symbol("formItemContextKey"), eu = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, m_ = Symbol("elIdInjection"), af = () => qt() ? Ge(m_, eu) : eu, rs = (e) => {
  const t = af(), n = wl();
  return e1(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, os = () => {
  const e = Ge(Pl, void 0), t = Ge(Ba, void 0);
  return {
    form: e,
    formItem: t
  };
}, $l = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = G(!1)), r || (r = G(!1));
  const o = G();
  let a;
  const s = N(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return yt(() => {
    a = Oe([rr(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : rs().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), ja(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, sf = (e) => {
  const t = qt();
  return N(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, aa = (e, t = {}) => {
  const n = G(void 0), r = t.prop ? n : sf("size"), o = t.global ? n : S1(), a = t.form ? { size: void 0 } : Ge(Pl, void 0), s = t.formItem ? { size: void 0 } : Ge(Ba, void 0);
  return N(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, Ml = (e) => {
  const t = sf("disabled"), n = Ge(Pl, void 0);
  return N(() => t.value || c(e) || n?.disabled || !1);
};
function lf(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = qt(), { emit: s } = a, i = Sr(), l = G(!1), u = (h) => {
    it(t) && t(h) || l.value || (l.value = !0, s("focus", h), n?.());
  }, f = (h) => {
    var y;
    it(r) && r(h) || h.relatedTarget && ((y = i.value) != null && y.contains(h.relatedTarget)) || (l.value = !1, s("blur", h), o?.());
  }, m = () => {
    var h, y;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Oe(i, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), Tn(i, "focus", u, !0), Tn(i, "blur", f, !0), Tn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const h_ = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function cf({
  afterComposition: e,
  emit: t
}) {
  const n = G(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !h_(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, gt(() => e(i)));
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
function g_(e) {
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
const v_ = "ElInput", b_ = ce({
  name: v_,
  inheritAttrs: !1
}), y_ = /* @__PURE__ */ ce({
  ...b_,
  props: c_,
  emits: u_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = ap(), a = p_(), s = sp(), i = N(() => [
      r.type === "textarea" ? b.b() : g.b(),
      g.m(h.value),
      g.is("disabled", y.value),
      g.is("exceed", Z.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: de.value && pe.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = N(() => [
      g.e("wrapper"),
      g.is("focus", Y.value)
    ]), { form: u, formItem: f } = os(), { inputId: m } = $l(r, {
      formItemContext: f
    }), h = aa(), y = Ml(), g = At("input"), b = At("textarea"), L = Sr(), p = Sr(), A = G(!1), P = G(!1), I = G(), _ = Sr(r.inputStyle), x = N(() => L.value || p.value), { wrapperRef: C, isFocused: Y, handleFocus: X, handleBlur: se } = lf(x, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var E;
        r.validateEvent && ((E = f?.validate) == null || E.call(f, "blur").catch((B) => void 0));
      }
    }), he = N(() => {
      var E;
      return (E = u?.statusIcon) != null ? E : !1;
    }), le = N(() => f?.validateState || ""), ye = N(() => le.value && nf[le.value]), _e = N(() => P.value ? e_ : j1), U = N(() => [
      o.style
    ]), J = N(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), H = N(() => cr(r.modelValue) ? "" : String(r.modelValue)), de = N(() => r.clearable && !y.value && !r.readonly && !!H.value && (Y.value || A.value)), pe = N(() => r.showPassword && !y.value && !!H.value && (!!H.value || Y.value)), Pe = N(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), ae = N(() => H.value.length), Z = N(() => !!Pe.value && ae.value > Number(r.maxlength)), Me = N(() => !!s.suffix || !!r.suffixIcon || de.value || r.showPassword || Pe.value || !!le.value && he.value), [ke, Se] = g_(L);
    Mn(p, (E) => {
      if (ge(), !Pe.value || r.resize !== "both")
        return;
      const B = E[0], { width: Ae } = B.contentRect;
      I.value = {
        right: `calc(100% - ${Ae + 15 + 6}px)`
      };
    });
    const we = () => {
      const { type: E, autosize: B } = r;
      if (!(!Tt || E !== "textarea" || !p.value))
        if (B) {
          const Ae = sn(B) ? B.minRows : void 0, Ie = sn(B) ? B.maxRows : void 0, nt = Jc(p.value, Ae, Ie);
          _.value = {
            overflowY: "hidden",
            ...nt
          }, gt(() => {
            p.value.offsetHeight, _.value = nt;
          });
        } else
          _.value = {
            minHeight: Jc(p.value).minHeight
          };
    }, ge = ((E) => {
      let B = !1;
      return () => {
        var Ae;
        if (B || !r.autosize)
          return;
        ((Ae = p.value) == null ? void 0 : Ae.offsetParent) === null || (E(), B = !0);
      };
    })(we), at = () => {
      const E = x.value, B = r.formatter ? r.formatter(H.value) : H.value;
      !E || E.value === B || (E.value = B);
    }, Te = async (E) => {
      ke();
      let { value: B } = E.target;
      if (r.formatter && r.parser && (B = r.parser(B)), !Lt.value) {
        if (B === H.value) {
          at();
          return;
        }
        n(xt, B), n(ur, B), await gt(), at(), Se();
      }
    }, Xe = (E) => {
      let { value: B } = E.target;
      r.formatter && r.parser && (B = r.parser(B)), n(fr, B);
    }, {
      isComposing: Lt,
      handleCompositionStart: ct,
      handleCompositionUpdate: _t,
      handleCompositionEnd: wt
    } = cf({ emit: n, afterComposition: Te }), st = () => {
      ke(), P.value = !P.value, setTimeout(Se);
    }, ut = () => {
      var E;
      return (E = x.value) == null ? void 0 : E.focus();
    }, T = () => {
      var E;
      return (E = x.value) == null ? void 0 : E.blur();
    }, O = (E) => {
      A.value = !1, n("mouseleave", E);
    }, V = (E) => {
      A.value = !0, n("mouseenter", E);
    }, ne = (E) => {
      n("keydown", E);
    }, $e = () => {
      var E;
      (E = x.value) == null || E.select();
    }, ve = () => {
      n(xt, ""), n(fr, ""), n("clear"), n(ur, "");
    };
    return Oe(() => r.modelValue, () => {
      var E;
      gt(() => we()), r.validateEvent && ((E = f?.validate) == null || E.call(f, "change").catch((B) => void 0));
    }), Oe(H, () => at()), Oe(() => r.type, async () => {
      await gt(), at(), we();
    }), yt(() => {
      !r.formatter && r.parser, at(), gt(we);
    }), t({
      input: L,
      textarea: p,
      ref: x,
      textareaStyle: J,
      autosize: rr(r, "autosize"),
      isComposing: Lt,
      focus: ut,
      blur: T,
      select: $e,
      clear: ve,
      resizeTextarea: we
    }), (E, B) => (R(), j("div", {
      class: q([
        c(i),
        {
          [c(g).bm("group", "append")]: E.$slots.append,
          [c(g).bm("group", "prepend")]: E.$slots.prepend
        }
      ]),
      style: Nt(c(U)),
      onMouseenter: V,
      onMouseleave: O
    }, [
      ee(" input "),
      E.type !== "textarea" ? (R(), j(ft, { key: 0 }, [
        ee(" prepend slot "),
        E.$slots.prepend ? (R(), j("div", {
          key: 0,
          class: q(c(g).be("group", "prepend"))
        }, [
          Ce(E.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        v("div", {
          ref_key: "wrapperRef",
          ref: C,
          class: q(c(l))
        }, [
          ee(" prefix slot "),
          E.$slots.prefix || E.prefixIcon ? (R(), j("span", {
            key: 0,
            class: q(c(g).e("prefix"))
          }, [
            v("span", {
              class: q(c(g).e("prefix-inner"))
            }, [
              Ce(E.$slots, "prefix"),
              E.prefixIcon ? (R(), me(c(St), {
                key: 0,
                class: q(c(g).e("icon"))
              }, {
                default: fe(() => [
                  (R(), me(Gt(E.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0),
          v("input", uo({
            id: c(m),
            ref_key: "input",
            ref: L,
            class: c(g).e("inner")
          }, c(a), {
            minlength: E.minlength,
            maxlength: E.maxlength,
            type: E.showPassword ? P.value ? "text" : "password" : E.type,
            disabled: c(y),
            readonly: E.readonly,
            autocomplete: E.autocomplete,
            tabindex: E.tabindex,
            "aria-label": E.ariaLabel,
            placeholder: E.placeholder,
            style: E.inputStyle,
            form: E.form,
            autofocus: E.autofocus,
            role: E.containerRole,
            onCompositionstart: c(ct),
            onCompositionupdate: c(_t),
            onCompositionend: c(wt),
            onInput: Te,
            onChange: Xe,
            onKeydown: ne
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(Me) ? (R(), j("span", {
            key: 1,
            class: q(c(g).e("suffix"))
          }, [
            v("span", {
              class: q(c(g).e("suffix-inner"))
            }, [
              !c(de) || !c(pe) || !c(Pe) ? (R(), j(ft, { key: 0 }, [
                Ce(E.$slots, "suffix"),
                E.suffixIcon ? (R(), me(c(St), {
                  key: 0,
                  class: q(c(g).e("icon"))
                }, {
                  default: fe(() => [
                    (R(), me(Gt(E.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              c(de) ? (R(), me(c(St), {
                key: 1,
                class: q([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: rt(c(Zo), ["prevent"]),
                onClick: ve
              }, {
                default: fe(() => [
                  F(c(Nl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(pe) ? (R(), me(c(St), {
                key: 2,
                class: q([c(g).e("icon"), c(g).e("password")]),
                onClick: st
              }, {
                default: fe(() => [
                  (R(), me(Gt(c(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(Pe) ? (R(), j("span", {
                key: 3,
                class: q(c(g).e("count"))
              }, [
                v("span", {
                  class: q(c(g).e("count-inner"))
                }, D(c(ae)) + " / " + D(E.maxlength), 3)
              ], 2)) : ee("v-if", !0),
              c(le) && c(ye) && c(he) ? (R(), me(c(St), {
                key: 4,
                class: q([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(le) === "validating")
                ])
              }, {
                default: fe(() => [
                  (R(), me(Gt(c(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        E.$slots.append ? (R(), j("div", {
          key: 1,
          class: q(c(g).be("group", "append"))
        }, [
          Ce(E.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (R(), j(ft, { key: 1 }, [
        ee(" textarea "),
        v("textarea", uo({
          id: c(m),
          ref_key: "textarea",
          ref: p,
          class: [c(b).e("inner"), c(g).is("focus", c(Y))]
        }, c(a), {
          minlength: E.minlength,
          maxlength: E.maxlength,
          tabindex: E.tabindex,
          disabled: c(y),
          readonly: E.readonly,
          autocomplete: E.autocomplete,
          style: c(J),
          "aria-label": E.ariaLabel,
          placeholder: E.placeholder,
          form: E.form,
          autofocus: E.autofocus,
          rows: E.rows,
          role: E.containerRole,
          onCompositionstart: c(ct),
          onCompositionupdate: c(_t),
          onCompositionend: c(wt),
          onInput: Te,
          onFocus: c(X),
          onBlur: c(se),
          onChange: Xe,
          onKeydown: ne
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(Pe) ? (R(), j("span", {
          key: 0,
          style: Nt(I.value),
          class: q(c(g).e("count"))
        }, D(c(ae)) + " / " + D(E.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var __ = /* @__PURE__ */ ot(y_, [["__file", "input.vue"]]);
const w_ = An(__), oo = 4, k_ = {
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
}, S_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Dl = Symbol("scrollbarContextKey"), T_ = tt({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), E_ = "Thumb", A_ = /* @__PURE__ */ ce({
  __name: "thumb",
  props: T_,
  setup(e) {
    const t = e, n = Ge(Dl), r = At("scrollbar");
    n || Ol(E_, "can not inject scrollbar context");
    const o = G(), a = G(), s = G({}), i = G(!1);
    let l = !1, u = !1, f = Tt ? document.onselectstart : null;
    const m = N(() => k_[t.vertical ? "vertical" : "horizontal"]), h = N(() => S_({
      size: t.size,
      move: t.move,
      bar: m.value
    })), y = N(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), g = (x) => {
      var C;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), L(x);
      const Y = x.currentTarget;
      Y && (s.value[m.value.axis] = Y[m.value.offset] - (x[m.value.client] - Y.getBoundingClientRect()[m.value.direction]));
    }, b = (x) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const C = Math.abs(x.target.getBoundingClientRect()[m.value.direction] - x[m.value.client]), Y = a.value[m.value.offset] / 2, X = (C - Y) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = X * n.wrapElement[m.value.scrollSize] / 100;
    }, L = (x) => {
      x.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", p), document.addEventListener("mouseup", A), f = document.onselectstart, document.onselectstart = () => !1;
    }, p = (x) => {
      if (!o.value || !a.value || l === !1)
        return;
      const C = s.value[m.value.axis];
      if (!C)
        return;
      const Y = (o.value.getBoundingClientRect()[m.value.direction] - x[m.value.client]) * -1, X = a.value[m.value.offset] - C, se = (Y - X) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = se * n.wrapElement[m.value.scrollSize] / 100;
    }, A = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", A), _(), u && (i.value = !1);
    }, P = () => {
      u = !1, i.value = !!t.size;
    }, I = () => {
      u = !0, i.value = l;
    };
    Gn(() => {
      _(), document.removeEventListener("mouseup", A);
    });
    const _ = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Tn(rr(n, "scrollbarElement"), "mousemove", P), Tn(rr(n, "scrollbarElement"), "mouseleave", I), (x, C) => (R(), me(ko, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: fe(() => [
        Ct(v("div", {
          ref_key: "instance",
          ref: o,
          class: q([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: b
        }, [
          v("div", {
            ref_key: "thumb",
            ref: a,
            class: q(c(r).e("thumb")),
            style: Nt(c(h)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [dr, x.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var tu = /* @__PURE__ */ ot(A_, [["__file", "thumb.vue"]]);
const C_ = tt({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), I_ = /* @__PURE__ */ ce({
  __name: "bar",
  props: C_,
  setup(e, { expose: t }) {
    const n = e, r = Ge(Dl), o = G(0), a = G(0), s = G(""), i = G(""), l = G(1), u = G(1);
    return t({
      handleScroll: (h) => {
        if (h) {
          const y = h.offsetHeight - oo, g = h.offsetWidth - oo;
          a.value = h.scrollTop * 100 / y * l.value, o.value = h.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const h = r?.wrapElement;
        if (!h)
          return;
        const y = h.offsetHeight - oo, g = h.offsetWidth - oo, b = y ** 2 / h.scrollHeight, L = g ** 2 / h.scrollWidth, p = Math.max(b, n.minSize), A = Math.max(L, n.minSize);
        l.value = b / (y - b) / (p / (y - p)), u.value = L / (g - L) / (A / (g - A)), i.value = p + oo < y ? `${p}px` : "", s.value = A + oo < g ? `${A}px` : "";
      }
    }), (h, y) => (R(), j(ft, null, [
      F(tu, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      F(tu, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var L_ = /* @__PURE__ */ ot(I_, [["__file", "bar.vue"]]);
const O_ = tt({
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
    type: Ee([String, Object, Array]),
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
  ...Kr(["ariaLabel", "ariaOrientation"])
}), x_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(We)
}, R_ = "ElScrollbar", N_ = ce({
  name: R_
}), P_ = /* @__PURE__ */ ce({
  ...N_,
  props: O_,
  emits: x_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = At("scrollbar");
    let a, s, i = 0, l = 0;
    const u = G(), f = G(), m = G(), h = G(), y = N(() => {
      const _ = {};
      return r.height && (_.height = ho(r.height)), r.maxHeight && (_.maxHeight = ho(r.maxHeight)), [r.wrapStyle, _];
    }), g = N(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), b = N(() => [o.e("view"), r.viewClass]), L = () => {
      var _;
      f.value && ((_ = h.value) == null || _.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function p(_, x) {
      sn(_) ? f.value.scrollTo(_) : We(_) && We(x) && f.value.scrollTo(_, x);
    }
    const A = (_) => {
      We(_) && (f.value.scrollTop = _);
    }, P = (_) => {
      We(_) && (f.value.scrollLeft = _);
    }, I = () => {
      var _;
      (_ = h.value) == null || _.update();
    };
    return Oe(() => r.noresize, (_) => {
      _ ? (a?.(), s?.()) : ({ stop: a } = Mn(m, I), s = Tn("resize", I));
    }, { immediate: !0 }), Oe(() => [r.maxHeight, r.height], () => {
      r.native || gt(() => {
        var _;
        I(), f.value && ((_ = h.value) == null || _.handleScroll(f.value));
      });
    }), jn(Dl, zr({
      scrollbarElement: u,
      wrapElement: f
    })), lp(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), yt(() => {
      r.native || gt(() => {
        I();
      });
    }), Lu(() => I()), t({
      wrapRef: f,
      update: I,
      scrollTo: p,
      setScrollTop: A,
      setScrollLeft: P,
      handleScroll: L
    }), (_, x) => (R(), j("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: q(c(o).b())
    }, [
      v("div", {
        ref_key: "wrapRef",
        ref: f,
        class: q(c(g)),
        style: Nt(c(y)),
        tabindex: _.tabindex,
        onScroll: L
      }, [
        (R(), me(Gt(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: m,
          class: q(c(b)),
          style: Nt(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: fe(() => [
            Ce(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      _.native ? ee("v-if", !0) : (R(), me(L_, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var $_ = /* @__PURE__ */ ot(P_, [["__file", "scrollbar.vue"]]);
const M_ = An($_), Fl = Symbol("popper"), uf = Symbol("popperContent"), D_ = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], df = tt({
  role: {
    type: String,
    values: D_,
    default: "tooltip"
  }
}), F_ = ce({
  name: "ElPopper",
  inheritAttrs: !1
}), z_ = /* @__PURE__ */ ce({
  ...F_,
  props: df,
  setup(e, { expose: t }) {
    const n = e, r = G(), o = G(), a = G(), s = G(), i = N(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), jn(Fl, l), (u, f) => Ce(u.$slots, "default");
  }
});
var B_ = /* @__PURE__ */ ot(z_, [["__file", "popper.vue"]]);
const ff = tt({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), V_ = ce({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), U_ = /* @__PURE__ */ ce({
  ...V_,
  props: ff,
  setup(e, { expose: t }) {
    const n = e, r = At("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ge(uf, void 0);
    return Oe(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Gn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (R(), j("span", {
      ref_key: "arrowRef",
      ref: a,
      class: q(c(r).e("arrow")),
      style: Nt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var j_ = /* @__PURE__ */ ot(U_, [["__file", "arrow.vue"]]);
const pf = tt({
  virtualRef: {
    type: Ee(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Ee(Function)
  },
  onMouseleave: {
    type: Ee(Function)
  },
  onClick: {
    type: Ee(Function)
  },
  onKeydown: {
    type: Ee(Function)
  },
  onFocus: {
    type: Ee(Function)
  },
  onBlur: {
    type: Ee(Function)
  },
  onContextmenu: {
    type: Ee(Function)
  },
  id: String,
  open: Boolean
}), mf = Symbol("elForwardRef"), W_ = (e) => {
  jn(mf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, H_ = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Xs = (e) => {
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
}, G_ = "ElOnlyChild", K_ = ce({
  name: G_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ge(mf), a = H_((r = o?.setForwardRef) != null ? r : Zo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = hf(i);
      return l ? Ct(ip(l, n), [[a]]) : null;
    };
  }
});
function hf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (sn(n))
      switch (n.type) {
        case cp:
          continue;
        case Cu:
        case "svg":
          return nu(n);
        case ft:
          return hf(n.children);
        default:
          return n;
      }
    return nu(n);
  }
  return null;
}
function nu(e) {
  const t = At("only-child");
  return F("span", {
    class: t.e("content")
  }, [e]);
}
const q_ = ce({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Y_ = /* @__PURE__ */ ce({
  ...q_,
  props: pf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ge(Fl, void 0);
    W_(o);
    const a = N(() => i.value ? n.id : void 0), s = N(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = N(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = N(() => i.value ? `${n.open}` : void 0);
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
    return yt(() => {
      Oe(() => n.virtualRef, (m) => {
        m && (o.value = sr(m));
      }, {
        immediate: !0
      }), Oe(o, (m, h) => {
        u?.(), u = void 0, Sn(m) && (f.forEach((y) => {
          var g;
          const b = n[y];
          b && (m.addEventListener(y.slice(2).toLowerCase(), b), (g = h?.removeEventListener) == null || g.call(h, y.slice(2).toLowerCase(), b));
        }), Xs(m) && (u = Oe([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, b) => {
            cr(y[b]) ? m.removeAttribute(g) : m.setAttribute(g, y[b]);
          });
        }, { immediate: !0 }))), Sn(h) && Xs(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => h.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Gn(() => {
      if (u?.(), u = void 0, o.value && Sn(o.value)) {
        const m = o.value;
        f.forEach((h) => {
          const y = n[h];
          y && m.removeEventListener(h.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, h) => m.virtualTriggering ? ee("v-if", !0) : (R(), me(c(K_), uo({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: fe(() => [
        Ce(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Z_ = /* @__PURE__ */ ot(Y_, [["__file", "trigger.vue"]]);
const Is = "focus-trap.focus-after-trapped", Ls = "focus-trap.focus-after-released", X_ = "focus-trap.focusout-prevented", ru = {
  cancelable: !0,
  bubbles: !1
}, Q_ = {
  cancelable: !0,
  bubbles: !1
}, ou = "focusAfterTrapped", au = "focusAfterReleased", J_ = Symbol("elFocusTrap"), zl = G(), as = G(0), Bl = G(0);
let va = 0;
const gf = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, su = (e, t) => {
  for (const n of e)
    if (!ew(n, t))
      return n;
}, ew = (e, t) => {
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
}, tw = (e) => {
  const t = gf(e), n = su(t, e), r = su(t.reverse(), e);
  return [n, r];
}, nw = (e) => e instanceof HTMLInputElement && "select" in e, tr = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    Sn(e) && !Xs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Bl.value = window.performance.now(), e !== n && nw(e) && t && e.select(), Sn(e) && r && e.removeAttribute("tabindex");
  }
};
function lu(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const rw = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = lu(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = lu(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, ow = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (tr(r, t), document.activeElement !== n)
      return;
}, iu = rw(), aw = () => as.value > Bl.value, ba = () => {
  zl.value = "pointer", as.value = window.performance.now();
}, cu = () => {
  zl.value = "keyboard", as.value = window.performance.now();
}, sw = () => (yt(() => {
  va === 0 && (document.addEventListener("mousedown", ba), document.addEventListener("touchstart", ba), document.addEventListener("keydown", cu)), va++;
}), Gn(() => {
  va--, va <= 0 && (document.removeEventListener("mousedown", ba), document.removeEventListener("touchstart", ba), document.removeEventListener("keydown", cu));
}), {
  focusReason: zl,
  lastUserFocusTimestamp: as,
  lastAutomatedFocusTimestamp: Bl
}), ya = (e) => new CustomEvent(X_, {
  ...Q_,
  detail: e
}), Vn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let io = [];
const uu = (e) => {
  e.code === Vn.esc && io.forEach((t) => t(e));
}, lw = (e) => {
  yt(() => {
    io.length === 0 && document.addEventListener("keydown", uu), Tt && io.push(e);
  }), Gn(() => {
    io = io.filter((t) => t !== e), io.length === 0 && Tt && document.removeEventListener("keydown", uu);
  });
}, iw = ce({
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
    ou,
    au,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = G();
    let r, o;
    const { focusReason: a } = sw();
    lw((g) => {
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
      const { code: b, altKey: L, ctrlKey: p, metaKey: A, currentTarget: P, shiftKey: I } = g, { loop: _ } = e, x = b === Vn.tab && !L && !p && !A, C = document.activeElement;
      if (x && C) {
        const Y = P, [X, se] = tw(Y);
        if (X && se) {
          if (!I && C === se) {
            const le = ya({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (g.preventDefault(), _ && tr(X, !0));
          } else if (I && [X, Y].includes(C)) {
            const le = ya({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (g.preventDefault(), _ && tr(se, !0));
          }
        } else if (C === Y) {
          const le = ya({
            focusReason: a.value
          });
          t("focusout-prevented", le), le.defaultPrevented || g.preventDefault();
        }
      }
    };
    jn(J_, {
      focusTrapRef: n,
      onKeydown: i
    }), Oe(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Oe([n], ([g], [b]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", f), g.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", f), b.removeEventListener("focusout", m));
    });
    const l = (g) => {
      t(ou, g);
    }, u = (g) => t(au, g), f = (g) => {
      const b = c(n);
      if (!b)
        return;
      const L = g.target, p = g.relatedTarget, A = L && b.contains(L);
      e.trapped || p && b.contains(p) || (r = p), A && t("focusin", g), !s.paused && e.trapped && (A ? o = L : tr(o, !0));
    }, m = (g) => {
      const b = c(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const L = g.relatedTarget;
          !cr(L) && !b.contains(L) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const p = ya({
                focusReason: a.value
              });
              t("focusout-prevented", p), p.defaultPrevented || tr(o, !0);
            }
          }, 0);
        } else {
          const L = g.target;
          L && b.contains(L) || t("focusout", g);
        }
    };
    async function h() {
      await gt();
      const g = c(n);
      if (g) {
        iu.push(s);
        const b = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = b, !g.contains(b)) {
          const p = new Event(Is, ru);
          g.addEventListener(Is, l), g.dispatchEvent(p), p.defaultPrevented || gt(() => {
            let A = e.focusStartEl;
            Vt(A) || (tr(A), document.activeElement !== A && (A = "first")), A === "first" && ow(gf(g), !0), (document.activeElement === b || A === "container") && tr(g);
          });
        }
      }
    }
    function y() {
      const g = c(n);
      if (g) {
        g.removeEventListener(Is, l);
        const b = new CustomEvent(Ls, {
          ...ru,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Ls, u), g.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !aw() || g.contains(document.activeElement)) && tr(r ?? document.body), g.removeEventListener(Ls, u), iu.remove(s);
      }
    }
    return yt(() => {
      e.trapped && h(), Oe(() => e.trapped, (g) => {
        g ? h() : y();
      });
    }), Gn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function cw(e, t, n, r, o, a) {
  return Ce(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var uw = /* @__PURE__ */ ot(iw, [["render", cw], ["__file", "focus-trap.vue"]]), tn = "top", dn = "bottom", fn = "right", nn = "left", Vl = "auto", sa = [tn, dn, fn, nn], go = "start", Jo = "end", dw = "clippingParents", vf = "viewport", $o = "popper", fw = "reference", du = sa.reduce(function(e, t) {
  return e.concat([t + "-" + go, t + "-" + Jo]);
}, []), ss = [].concat(sa, [Vl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + go, t + "-" + Jo]);
}, []), pw = "beforeRead", mw = "read", hw = "afterRead", gw = "beforeMain", vw = "main", bw = "afterMain", yw = "beforeWrite", _w = "write", ww = "afterWrite", kw = [pw, mw, hw, gw, vw, bw, yw, _w, ww];
function Hn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ln(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ur(e) {
  var t = ln(e).Element;
  return e instanceof t || e instanceof Element;
}
function cn(e) {
  var t = ln(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ul(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ln(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Sw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !cn(a) || !Hn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Tw(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !cn(o) || !Hn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var bf = { name: "applyStyles", enabled: !0, phase: "write", fn: Sw, effect: Tw, requires: ["computeStyles"] };
function Un(e) {
  return e.split("-")[0];
}
var Fr = Math.max, Va = Math.min, vo = Math.round;
function Qs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function yf() {
  return !/^((?!chrome|android).)*safari/i.test(Qs());
}
function bo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && cn(e) && (o = e.offsetWidth > 0 && vo(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && vo(r.height) / e.offsetHeight || 1);
  var s = Ur(e) ? ln(e) : window, i = s.visualViewport, l = !yf() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, f = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
  return { width: m, height: h, top: f, right: u + m, bottom: f + h, left: u, x: u, y: f };
}
function jl(e) {
  var t = bo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function _f(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ul(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function pr(e) {
  return ln(e).getComputedStyle(e);
}
function Ew(e) {
  return ["table", "td", "th"].indexOf(Hn(e)) >= 0;
}
function Ir(e) {
  return ((Ur(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ls(e) {
  return Hn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ul(e) ? e.host : null) || Ir(e);
}
function fu(e) {
  return !cn(e) || pr(e).position === "fixed" ? null : e.offsetParent;
}
function Aw(e) {
  var t = /firefox/i.test(Qs()), n = /Trident/i.test(Qs());
  if (n && cn(e)) {
    var r = pr(e);
    if (r.position === "fixed") return null;
  }
  var o = ls(e);
  for (Ul(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(Hn(o)) < 0; ) {
    var a = pr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function la(e) {
  for (var t = ln(e), n = fu(e); n && Ew(n) && pr(n).position === "static"; ) n = fu(n);
  return n && (Hn(n) === "html" || Hn(n) === "body" && pr(n).position === "static") ? t : n || Aw(e) || t;
}
function Wl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function jo(e, t, n) {
  return Fr(e, Va(t, n));
}
function Cw(e, t, n) {
  var r = jo(e, t, n);
  return r > n ? n : r;
}
function wf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function kf(e) {
  return Object.assign({}, wf(), e);
}
function Sf(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Iw = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, kf(typeof e != "number" ? e : Sf(e, sa));
};
function Lw(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Un(n.placement), l = Wl(i), u = [nn, fn].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = Iw(o.padding, n), h = jl(a), y = l === "y" ? tn : nn, g = l === "y" ? dn : fn, b = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], L = s[l] - n.rects.reference[l], p = la(a), A = p ? l === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, P = b / 2 - L / 2, I = m[y], _ = A - h[f] - m[g], x = A / 2 - h[f] / 2 + P, C = jo(I, x, _), Y = l;
    n.modifiersData[r] = (t = {}, t[Y] = C, t.centerOffset = C - x, t);
  }
}
function Ow(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || _f(t.elements.popper, o) && (t.elements.arrow = o));
}
var xw = { name: "arrow", enabled: !0, phase: "main", fn: Lw, effect: Ow, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function yo(e) {
  return e.split("-")[1];
}
var Rw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Nw(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: vo(n * o) / o || 0, y: vo(r * o) / o || 0 };
}
function pu(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, h = s.x, y = h === void 0 ? 0 : h, g = s.y, b = g === void 0 ? 0 : g, L = typeof f == "function" ? f({ x: y, y: b }) : { x: y, y: b };
  y = L.x, b = L.y;
  var p = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), P = nn, I = tn, _ = window;
  if (u) {
    var x = la(n), C = "clientHeight", Y = "clientWidth";
    if (x === ln(n) && (x = Ir(n), pr(x).position !== "static" && i === "absolute" && (C = "scrollHeight", Y = "scrollWidth")), x = x, o === tn || (o === nn || o === fn) && a === Jo) {
      I = dn;
      var X = m && x === _ && _.visualViewport ? _.visualViewport.height : x[C];
      b -= X - r.height, b *= l ? 1 : -1;
    }
    if (o === nn || (o === tn || o === dn) && a === Jo) {
      P = fn;
      var se = m && x === _ && _.visualViewport ? _.visualViewport.width : x[Y];
      y -= se - r.width, y *= l ? 1 : -1;
    }
  }
  var he = Object.assign({ position: i }, u && Rw), le = f === !0 ? Nw({ x: y, y: b }, ln(n)) : { x: y, y: b };
  if (y = le.x, b = le.y, l) {
    var ye;
    return Object.assign({}, he, (ye = {}, ye[I] = A ? "0" : "", ye[P] = p ? "0" : "", ye.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", ye));
  }
  return Object.assign({}, he, (t = {}, t[I] = A ? b + "px" : "", t[P] = p ? y + "px" : "", t.transform = "", t));
}
function Pw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Un(t.placement), variation: yo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pu(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pu(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Tf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Pw, data: {} }, _a = { passive: !0 };
function $w(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = ln(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, _a);
  }), i && l.addEventListener("resize", n.update, _a), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, _a);
    }), i && l.removeEventListener("resize", n.update, _a);
  };
}
var Ef = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: $w, data: {} }, Mw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Aa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Mw[t];
  });
}
var Dw = { start: "end", end: "start" };
function mu(e) {
  return e.replace(/start|end/g, function(t) {
    return Dw[t];
  });
}
function Hl(e) {
  var t = ln(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Gl(e) {
  return bo(Ir(e)).left + Hl(e).scrollLeft;
}
function Fw(e, t) {
  var n = ln(e), r = Ir(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = yf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Gl(e), y: l };
}
function zw(e) {
  var t, n = Ir(e), r = Hl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Fr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Fr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Gl(e), l = -r.scrollTop;
  return pr(o || n).direction === "rtl" && (i += Fr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Kl(e) {
  var t = pr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Af(e) {
  return ["html", "body", "#document"].indexOf(Hn(e)) >= 0 ? e.ownerDocument.body : cn(e) && Kl(e) ? e : Af(ls(e));
}
function Wo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Af(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ln(r), s = o ? [a].concat(a.visualViewport || [], Kl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Wo(ls(s)));
}
function Js(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Bw(e, t) {
  var n = bo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function hu(e, t, n) {
  return t === vf ? Js(Fw(e, n)) : Ur(t) ? Bw(t, n) : Js(zw(Ir(e)));
}
function Vw(e) {
  var t = Wo(ls(e)), n = ["absolute", "fixed"].indexOf(pr(e).position) >= 0, r = n && cn(e) ? la(e) : e;
  return Ur(r) ? t.filter(function(o) {
    return Ur(o) && _f(o, r) && Hn(o) !== "body";
  }) : [];
}
function Uw(e, t, n, r) {
  var o = t === "clippingParents" ? Vw(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = hu(e, u, r);
    return l.top = Fr(f.top, l.top), l.right = Va(f.right, l.right), l.bottom = Va(f.bottom, l.bottom), l.left = Fr(f.left, l.left), l;
  }, hu(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Cf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Un(r) : null, a = r ? yo(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case tn:
      l = { x: s, y: t.y - n.height };
      break;
    case dn:
      l = { x: s, y: t.y + t.height };
      break;
    case fn:
      l = { x: t.x + t.width, y: i };
      break;
    case nn:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Wl(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case go:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Jo:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function ea(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? dw : i, u = n.rootBoundary, f = u === void 0 ? vf : u, m = n.elementContext, h = m === void 0 ? $o : m, y = n.altBoundary, g = y === void 0 ? !1 : y, b = n.padding, L = b === void 0 ? 0 : b, p = kf(typeof L != "number" ? L : Sf(L, sa)), A = h === $o ? fw : $o, P = e.rects.popper, I = e.elements[g ? A : h], _ = Uw(Ur(I) ? I : I.contextElement || Ir(e.elements.popper), l, f, s), x = bo(e.elements.reference), C = Cf({ reference: x, element: P, placement: o }), Y = Js(Object.assign({}, P, C)), X = h === $o ? Y : x, se = { top: _.top - X.top + p.top, bottom: X.bottom - _.bottom + p.bottom, left: _.left - X.left + p.left, right: X.right - _.right + p.right }, he = e.modifiersData.offset;
  if (h === $o && he) {
    var le = he[o];
    Object.keys(se).forEach(function(ye) {
      var _e = [fn, dn].indexOf(ye) >= 0 ? 1 : -1, U = [tn, dn].indexOf(ye) >= 0 ? "y" : "x";
      se[ye] += le[U] * _e;
    });
  }
  return se;
}
function jw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ss : l, f = yo(r), m = f ? i ? du : du.filter(function(g) {
    return yo(g) === f;
  }) : sa, h = m.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(g, b) {
    return g[b] = ea(e, { placement: b, boundary: o, rootBoundary: a, padding: s })[Un(b)], g;
  }, {});
  return Object.keys(y).sort(function(g, b) {
    return y[g] - y[b];
  });
}
function Ww(e) {
  if (Un(e) === Vl) return [];
  var t = Aa(e);
  return [mu(e), t, mu(t)];
}
function Hw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, b = n.allowedAutoPlacements, L = t.options.placement, p = Un(L), A = p === L, P = l || (A || !g ? [Aa(L)] : Ww(L)), I = [L].concat(P).reduce(function(ke, Se) {
      return ke.concat(Un(Se) === Vl ? jw(t, { placement: Se, boundary: f, rootBoundary: m, padding: u, flipVariations: g, allowedAutoPlacements: b }) : Se);
    }, []), _ = t.rects.reference, x = t.rects.popper, C = /* @__PURE__ */ new Map(), Y = !0, X = I[0], se = 0; se < I.length; se++) {
      var he = I[se], le = Un(he), ye = yo(he) === go, _e = [tn, dn].indexOf(le) >= 0, U = _e ? "width" : "height", J = ea(t, { placement: he, boundary: f, rootBoundary: m, altBoundary: h, padding: u }), H = _e ? ye ? fn : nn : ye ? dn : tn;
      _[U] > x[U] && (H = Aa(H));
      var de = Aa(H), pe = [];
      if (a && pe.push(J[le] <= 0), i && pe.push(J[H] <= 0, J[de] <= 0), pe.every(function(ke) {
        return ke;
      })) {
        X = he, Y = !1;
        break;
      }
      C.set(he, pe);
    }
    if (Y) for (var Pe = g ? 3 : 1, ae = function(ke) {
      var Se = I.find(function(we) {
        var Q = C.get(we);
        if (Q) return Q.slice(0, ke).every(function(ge) {
          return ge;
        });
      });
      if (Se) return X = Se, "break";
    }, Z = Pe; Z > 0; Z--) {
      var Me = ae(Z);
      if (Me === "break") break;
    }
    t.placement !== X && (t.modifiersData[r]._skip = !0, t.placement = X, t.reset = !0);
  }
}
var Gw = { name: "flip", enabled: !0, phase: "main", fn: Hw, requiresIfExists: ["offset"], data: { _skip: !1 } };
function gu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function vu(e) {
  return [tn, fn, dn, nn].some(function(t) {
    return e[t] >= 0;
  });
}
function Kw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = ea(t, { elementContext: "reference" }), i = ea(t, { altBoundary: !0 }), l = gu(s, r), u = gu(i, o, a), f = vu(l), m = vu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var qw = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Kw };
function Yw(e, t, n) {
  var r = Un(e), o = [nn, tn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [nn, fn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Zw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = ss.reduce(function(f, m) {
    return f[m] = Yw(m, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Xw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Zw };
function Qw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cf({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var If = { name: "popperOffsets", enabled: !0, phase: "read", fn: Qw, data: {} };
function Jw(e) {
  return e === "x" ? "y" : "x";
}
function ek(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, g = n.tetherOffset, b = g === void 0 ? 0 : g, L = ea(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: f }), p = Un(t.placement), A = yo(t.placement), P = !A, I = Wl(p), _ = Jw(I), x = t.modifiersData.popperOffsets, C = t.rects.reference, Y = t.rects.popper, X = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, se = typeof X == "number" ? { mainAxis: X, altAxis: X } : Object.assign({ mainAxis: 0, altAxis: 0 }, X), he = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, le = { x: 0, y: 0 };
  if (x) {
    if (a) {
      var ye, _e = I === "y" ? tn : nn, U = I === "y" ? dn : fn, J = I === "y" ? "height" : "width", H = x[I], de = H + L[_e], pe = H - L[U], Pe = y ? -Y[J] / 2 : 0, ae = A === go ? C[J] : Y[J], Z = A === go ? -Y[J] : -C[J], Me = t.elements.arrow, ke = y && Me ? jl(Me) : { width: 0, height: 0 }, Se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wf(), we = Se[_e], Q = Se[U], ge = jo(0, C[J], ke[J]), at = P ? C[J] / 2 - Pe - ge - we - se.mainAxis : ae - ge - we - se.mainAxis, Te = P ? -C[J] / 2 + Pe + ge + Q + se.mainAxis : Z + ge + Q + se.mainAxis, Xe = t.elements.arrow && la(t.elements.arrow), Lt = Xe ? I === "y" ? Xe.clientTop || 0 : Xe.clientLeft || 0 : 0, ct = (ye = he?.[I]) != null ? ye : 0, _t = H + at - ct - Lt, wt = H + Te - ct, st = jo(y ? Va(de, _t) : de, H, y ? Fr(pe, wt) : pe);
      x[I] = st, le[I] = st - H;
    }
    if (i) {
      var ut, T = I === "x" ? tn : nn, O = I === "x" ? dn : fn, V = x[_], ne = _ === "y" ? "height" : "width", $e = V + L[T], ve = V - L[O], E = [tn, nn].indexOf(p) !== -1, B = (ut = he?.[_]) != null ? ut : 0, Ae = E ? $e : V - C[ne] - Y[ne] - B + se.altAxis, Ie = E ? V + C[ne] + Y[ne] - B - se.altAxis : ve, nt = y && E ? Cw(Ae, V, Ie) : jo(y ? Ae : $e, V, y ? Ie : ve);
      x[_] = nt, le[_] = nt - V;
    }
    t.modifiersData[r] = le;
  }
}
var tk = { name: "preventOverflow", enabled: !0, phase: "main", fn: ek, requiresIfExists: ["offset"] };
function nk(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function rk(e) {
  return e === ln(e) || !cn(e) ? Hl(e) : nk(e);
}
function ok(e) {
  var t = e.getBoundingClientRect(), n = vo(t.width) / e.offsetWidth || 1, r = vo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ak(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), o = cn(t) && ok(t), a = Ir(t), s = bo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Hn(t) !== "body" || Kl(a)) && (i = rk(t)), cn(t) ? (l = bo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Gl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function sk(e) {
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
function lk(e) {
  var t = sk(e);
  return kw.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function ik(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ck(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var bu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function yu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ql(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? bu : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, bu, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], m = !1, h = { state: u, setOptions: function(b) {
      var L = typeof b == "function" ? b(u.options) : b;
      g(), u.options = Object.assign({}, a, u.options, L), u.scrollParents = { reference: Ur(s) ? Wo(s) : s.contextElement ? Wo(s.contextElement) : [], popper: Wo(i) };
      var p = lk(ck([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(A) {
        return A.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, L = b.reference, p = b.popper;
        if (yu(L, p)) {
          u.rects = { reference: ak(L, la(p), u.options.strategy === "fixed"), popper: jl(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
            return u.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var A = 0; A < u.orderedModifiers.length; A++) {
            if (u.reset === !0) {
              u.reset = !1, A = -1;
              continue;
            }
            var P = u.orderedModifiers[A], I = P.fn, _ = P.options, x = _ === void 0 ? {} : _, C = P.name;
            typeof I == "function" && (u = I({ state: u, options: x, name: C, instance: h }) || u);
          }
        }
      }
    }, update: ik(function() {
      return new Promise(function(b) {
        h.forceUpdate(), b(u);
      });
    }), destroy: function() {
      g(), m = !0;
    } };
    if (!yu(s, i)) return h;
    h.setOptions(l).then(function(b) {
      !m && l.onFirstUpdate && l.onFirstUpdate(b);
    });
    function y() {
      u.orderedModifiers.forEach(function(b) {
        var L = b.name, p = b.options, A = p === void 0 ? {} : p, P = b.effect;
        if (typeof P == "function") {
          var I = P({ state: u, name: L, instance: h, options: A }), _ = function() {
          };
          f.push(I || _);
        }
      });
    }
    function g() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return h;
  };
}
ql();
var uk = [Ef, If, Tf, bf];
ql({ defaultModifiers: uk });
var dk = [Ef, If, Tf, bf, Xw, Gw, tk, xw, qw], fk = ql({ defaultModifiers: dk });
const pk = ["fixed", "absolute"], mk = tt({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Ee(Array),
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
    values: ss,
    default: "bottom"
  },
  popperOptions: {
    type: Ee(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: pk,
    default: "absolute"
  }
}), Lf = tt({
  ...mk,
  id: String,
  style: {
    type: Ee([String, Array, Object])
  },
  className: {
    type: Ee([String, Array, Object])
  },
  effect: {
    type: Ee(String),
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
    type: Ee([String, Array, Object])
  },
  popperStyle: {
    type: Ee([String, Array, Object])
  },
  referenceEl: {
    type: Ee(Object)
  },
  triggerTargetEl: {
    type: Ee(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Kr(["ariaLabel"])
}), hk = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, gk = (e, t) => {
  const n = G(!1), r = G();
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
}, vk = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...yk(e), ...t]
  };
  return _k(a, o?.modifiers), a;
}, bk = (e) => {
  if (Tt)
    return sr(e);
};
function yk(e) {
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
function _k(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const wk = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = kk(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = N(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: m } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...m || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Sr(), s = G({
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
  return Oe(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Oe([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = fk(l, u, c(o)));
  }), Gn(() => {
    i();
  }), {
    state: N(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: N(() => c(s).styles),
    attributes: N(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: N(() => c(a))
  };
};
function kk(e) {
  const t = Object.keys(e.elements), n = Ma(t.map((o) => [o, e.styles[o] || {}])), r = Ma(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Sk = 0, Tk = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ge(Fl, void 0), a = G(), s = G(), i = N(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = N(() => {
    var p;
    const A = c(a), P = (p = c(s)) != null ? p : Sk;
    return {
      name: "arrow",
      enabled: !Vy(A),
      options: {
        element: A,
        padding: P
      }
    };
  }), u = N(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...vk(e, [
      c(l),
      c(i)
    ])
  })), f = N(() => bk(e.referenceEl) || c(r)), { attributes: m, state: h, styles: y, update: g, forceUpdate: b, instanceRef: L } = wk(f, n, u);
  return Oe(L, (p) => t.value = p), yt(() => {
    Oe(() => {
      var p;
      return (p = c(f)) == null ? void 0 : p.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: L,
    state: h,
    styles: y,
    role: o,
    forceUpdate: b,
    update: g
  };
}, Ek = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = jd(), a = At("popper"), s = N(() => c(t).popper), i = G(We(e.zIndex) ? e.zIndex : o()), l = N(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = N(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = N(() => r.value === "dialog" ? "false" : void 0), m = N(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = We(e.zIndex) ? e.zIndex : o();
    }
  };
}, Ak = ce({
  name: "ElPopperContent"
}), Ck = /* @__PURE__ */ ce({
  ...Ak,
  props: Lf,
  emits: hk,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = gk(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: g, instanceRef: b, role: L, update: p } = Tk(r), {
      ariaModal: A,
      arrowStyle: P,
      contentAttrs: I,
      contentClass: _,
      contentStyle: x,
      updateZIndex: C
    } = Ek(r, {
      styles: g,
      attributes: m,
      role: L
    }), Y = Ge(Ba, void 0), X = G();
    jn(uf, {
      arrowStyle: P,
      arrowRef: h,
      arrowOffset: X
    }), Y && jn(Ba, {
      ...Y,
      addInputId: Zo,
      removeInputId: Zo
    });
    let se;
    const he = (ye = !0) => {
      p(), ye && C();
    }, le = () => {
      he(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return yt(() => {
      Oe(() => r.triggerTargetEl, (ye, _e) => {
        se?.(), se = void 0;
        const U = c(ye || y.value), J = c(_e || y.value);
        Sn(U) && (se = Oe([L, () => r.ariaLabel, A, () => r.id], (H) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((de, pe) => {
            cr(H[pe]) ? U.removeAttribute(de) : U.setAttribute(de, H[pe]);
          });
        }, { immediate: !0 })), J !== U && Sn(J) && ["role", "aria-label", "aria-modal", "id"].forEach((H) => {
          J.removeAttribute(H);
        });
      }, { immediate: !0 }), Oe(() => r.visible, le, { immediate: !0 });
    }), Gn(() => {
      se?.(), se = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: b,
      updatePopper: he,
      contentStyle: x
    }), (ye, _e) => (R(), j("div", uo({
      ref_key: "contentRef",
      ref: y
    }, c(I), {
      style: c(x),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (U) => ye.$emit("mouseenter", U),
      onMouseleave: (U) => ye.$emit("mouseleave", U)
    }), [
      F(c(uw), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(y),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: fe(() => [
          Ce(ye.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Ik = /* @__PURE__ */ ot(Ck, [["__file", "content.vue"]]);
const Lk = An(B_), Yl = Symbol("elTooltip");
function _u() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return oa(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Ok = tt({
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
}), xk = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = _u(), {
    registerTimeout: s,
    cancelTimeout: i
  } = _u();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const m = c(n);
        We(m) && m > 0 && s(() => {
          o(f);
        }, m);
      }, c(e));
    },
    onClose: (f) => {
      i(), a(() => {
        o(f);
      }, c(t));
    }
  };
}, Zl = tt({
  ...Ok,
  ...Lf,
  appendTo: {
    type: Ee([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: Ee(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Kr(["ariaLabel"])
}), Of = tt({
  ...pf,
  disabled: Boolean,
  trigger: {
    type: Ee([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Ee(Array),
    default: () => [Vn.enter, Vn.numpadEnter, Vn.space]
  }
}), Rk = ts({
  type: Ee(Boolean),
  default: null
}), Nk = ts({
  type: Ee(Function)
}), Pk = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Rk,
    [n]: Nk
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: m
    }) => {
      const h = qt(), { emit: y } = h, g = h.props, b = N(() => it(g[n])), L = N(() => g[e] === null), p = (C) => {
        s.value !== !0 && (s.value = !0, i && (i.value = C), it(f) && f(C));
      }, A = (C) => {
        s.value !== !1 && (s.value = !1, i && (i.value = C), it(m) && m(C));
      }, P = (C) => {
        if (g.disabled === !0 || it(u) && !u())
          return;
        const Y = b.value && Tt;
        Y && y(t, !0), (L.value || !Y) && p(C);
      }, I = (C) => {
        if (g.disabled === !0 || !Tt)
          return;
        const Y = b.value && Tt;
        Y && y(t, !1), (L.value || !Y) && A(C);
      }, _ = (C) => {
        Tr(C) && (g.disabled && C ? b.value && y(t, !1) : s.value !== C && (C ? p() : A()));
      }, x = () => {
        s.value ? I() : P();
      };
      return Oe(() => g[e], _), l && h.appContext.config.globalProperties.$route !== void 0 && Oe(() => ({
        ...h.proxy.$route
      }), () => {
        l.value && s.value && I();
      }), yt(() => {
        _(g[e]);
      }), {
        hide: I,
        show: P,
        toggle: x,
        hasUpdateHandler: b
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: $k,
  useModelToggleEmits: Mk,
  useModelToggle: Dk
} = Pk("visible"), Fk = tt({
  ...df,
  ...$k,
  ...Zl,
  ...Of,
  ...ff,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), zk = [
  ...Mk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Bk = (e, t) => Dn(e) ? e.includes(t) : e === t, ao = (e, t, n) => (r) => {
  Bk(c(e), t) && n(r);
}, nr = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Vk = ce({
  name: "ElTooltipTrigger"
}), Uk = /* @__PURE__ */ ce({
  ...Vk,
  props: Of,
  setup(e, { expose: t }) {
    const n = e, r = At("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ge(Yl, void 0), f = G(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, h = rr(n, "trigger"), y = nr(m, ao(h, "hover", i)), g = nr(m, ao(h, "hover", l)), b = nr(m, ao(h, "click", (I) => {
      I.button === 0 && u(I);
    })), L = nr(m, ao(h, "focus", i)), p = nr(m, ao(h, "focus", l)), A = nr(m, ao(h, "contextmenu", (I) => {
      I.preventDefault(), u(I);
    })), P = nr(m, (I) => {
      const { code: _ } = I;
      n.triggerKeys.includes(_) && (I.preventDefault(), u(I));
    });
    return t({
      triggerRef: f
    }), (I, _) => (R(), me(c(Z_), {
      id: c(a),
      "virtual-ref": I.virtualRef,
      open: c(s),
      "virtual-triggering": I.virtualTriggering,
      class: q(c(r).e("trigger")),
      onBlur: c(p),
      onClick: c(b),
      onContextmenu: c(A),
      onFocus: c(L),
      onMouseenter: c(y),
      onMouseleave: c(g),
      onKeydown: c(P)
    }, {
      default: fe(() => [
        Ce(I.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var jk = /* @__PURE__ */ ot(Uk, [["__file", "trigger.vue"]]);
const Wk = tt({
  to: {
    type: Ee([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Hk = /* @__PURE__ */ ce({
  __name: "teleport",
  props: Wk,
  setup(e) {
    return (t, n) => t.disabled ? Ce(t.$slots, "default", { key: 0 }) : (R(), me(up, {
      key: 1,
      to: t.to
    }, [
      Ce(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Gk = /* @__PURE__ */ ot(Hk, [["__file", "teleport.vue"]]);
const Kk = An(Gk), xf = () => {
  const e = wl(), t = af(), n = N(() => `${e.value}-popper-container-${t.prefix}`), r = N(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, qk = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Yk = () => {
  const { id: e, selector: t } = xf();
  return dp(() => {
    Tt && (document.body.querySelector(t.value) || qk(e.value));
  }), {
    id: e,
    selector: t
  };
}, Zk = ce({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Xk = /* @__PURE__ */ ce({
  ...Zk,
  props: Zl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = xf(), o = At("tooltip"), a = G();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: m,
      onOpen: h,
      onShow: y,
      onHide: g,
      onBeforeShow: b,
      onBeforeHide: L
    } = Ge(Yl, void 0), p = N(() => n.transition || `${o.namespace.value}-fade-in-linear`), A = N(() => n.persistent);
    Gn(() => {
      s?.();
    });
    const P = N(() => c(A) ? !0 : c(u)), I = N(() => n.disabled ? !1 : c(u)), _ = N(() => n.appendTo || r.value), x = N(() => {
      var H;
      return (H = n.style) != null ? H : {};
    }), C = G(!0), Y = () => {
      g(), J() && tr(document.body), C.value = !0;
    }, X = () => {
      if (c(i))
        return !0;
    }, se = nr(X, () => {
      n.enterable && c(f) === "hover" && h();
    }), he = nr(X, () => {
      c(f) === "hover" && m();
    }), le = () => {
      var H, de;
      (de = (H = a.value) == null ? void 0 : H.updatePopper) == null || de.call(H), b?.();
    }, ye = () => {
      L?.();
    }, _e = () => {
      y(), s = o1(N(() => {
        var H;
        return (H = a.value) == null ? void 0 : H.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && m();
      });
    }, U = () => {
      n.virtualTriggering || m();
    }, J = (H) => {
      var de;
      const pe = (de = a.value) == null ? void 0 : de.popperContentRef, Pe = H?.relatedTarget || document.activeElement;
      return pe?.contains(Pe);
    };
    return Oe(() => c(u), (H) => {
      H ? C.value = !1 : s?.();
    }, {
      flush: "post"
    }), Oe(() => n.content, () => {
      var H, de;
      (de = (H = a.value) == null ? void 0 : H.updatePopper) == null || de.call(H);
    }), t({
      contentRef: a,
      isFocusInsideContent: J
    }), (H, de) => (R(), me(c(Kk), {
      disabled: !H.teleported,
      to: c(_)
    }, {
      default: fe(() => [
        F(ko, {
          name: c(p),
          onAfterLeave: Y,
          onBeforeEnter: le,
          onAfterEnter: _e,
          onBeforeLeave: ye
        }, {
          default: fe(() => [
            c(P) ? Ct((R(), me(c(Ik), uo({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, H.$attrs, {
              "aria-label": H.ariaLabel,
              "aria-hidden": C.value,
              "boundaries-padding": H.boundariesPadding,
              "fallback-placements": H.fallbackPlacements,
              "gpu-acceleration": H.gpuAcceleration,
              offset: H.offset,
              placement: H.placement,
              "popper-options": H.popperOptions,
              strategy: H.strategy,
              effect: H.effect,
              enterable: H.enterable,
              pure: H.pure,
              "popper-class": H.popperClass,
              "popper-style": [H.popperStyle, c(x)],
              "reference-el": H.referenceEl,
              "trigger-target-el": H.triggerTargetEl,
              visible: c(I),
              "z-index": H.zIndex,
              onMouseenter: c(se),
              onMouseleave: c(he),
              onBlur: U,
              onClose: c(m)
            }), {
              default: fe(() => [
                Ce(H.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [dr, c(I)]
            ]) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Qk = /* @__PURE__ */ ot(Xk, [["__file", "content.vue"]]);
const Jk = ce({
  name: "ElTooltip"
}), eS = /* @__PURE__ */ ce({
  ...Jk,
  props: Fk,
  emits: zk,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Yk();
    const o = rs(), a = G(), s = G(), i = () => {
      var p;
      const A = c(a);
      A && ((p = A.popperInstanceRef) == null || p.update());
    }, l = G(!1), u = G(), { show: f, hide: m, hasUpdateHandler: h } = Dk({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = xk({
      showAfter: rr(r, "showAfter"),
      hideAfter: rr(r, "hideAfter"),
      autoClose: rr(r, "autoClose"),
      open: f,
      close: m
    }), b = N(() => Tr(r.visible) && !h.value);
    jn(Yl, {
      controlled: b,
      id: o,
      open: nl(l),
      trigger: rr(r, "trigger"),
      onOpen: (p) => {
        y(p);
      },
      onClose: (p) => {
        g(p);
      },
      onToggle: (p) => {
        c(l) ? g(p) : y(p);
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
    }), Oe(() => r.disabled, (p) => {
      p && l.value && (l.value = !1);
    });
    const L = (p) => {
      var A;
      return (A = s.value) == null ? void 0 : A.isFocusInsideContent(p);
    };
    return fp(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: L,
      updatePopper: i,
      onOpen: y,
      onClose: g,
      hide: m
    }), (p, A) => (R(), me(c(Lk), {
      ref_key: "popperRef",
      ref: a,
      role: p.role
    }, {
      default: fe(() => [
        F(jk, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: fe(() => [
            p.$slots.default ? Ce(p.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        F(Qk, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": p.ariaLabel,
          "boundaries-padding": p.boundariesPadding,
          content: p.content,
          disabled: p.disabled,
          effect: p.effect,
          enterable: p.enterable,
          "fallback-placements": p.fallbackPlacements,
          "hide-after": p.hideAfter,
          "gpu-acceleration": p.gpuAcceleration,
          offset: p.offset,
          persistent: p.persistent,
          "popper-class": p.popperClass,
          "popper-style": p.popperStyle,
          placement: p.placement,
          "popper-options": p.popperOptions,
          pure: p.pure,
          "raw-content": p.rawContent,
          "reference-el": p.referenceEl,
          "trigger-target-el": p.triggerTargetEl,
          "show-after": p.showAfter,
          strategy: p.strategy,
          teleported: p.teleported,
          transition: p.transition,
          "virtual-triggering": p.virtualTriggering,
          "z-index": p.zIndex,
          "append-to": p.appendTo
        }, {
          default: fe(() => [
            Ce(p.$slots, "content", {}, () => [
              p.rawContent ? (R(), j("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, ["innerHTML"])) : (R(), j("span", { key: 1 }, D(p.content), 1))
            ]),
            p.showArrow ? (R(), me(c(j_), {
              key: 0,
              "arrow-offset": p.arrowOffset
            }, null, 8, ["arrow-offset"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var tS = /* @__PURE__ */ ot(eS, [["__file", "tooltip.vue"]]);
const nS = An(tS), rS = tt({
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
    type: Ee([String, Object, Array])
  },
  offset: {
    type: Ee(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), oS = ce({
  name: "ElBadge"
}), aS = /* @__PURE__ */ ce({
  ...oS,
  props: rS,
  setup(e, { expose: t }) {
    const n = e, r = At("badge"), o = N(() => n.isDot ? "" : We(n.value) && We(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = N(() => {
      var s, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: ho(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: ho((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (R(), j("div", {
      class: q(c(r).b())
    }, [
      Ce(s.$slots, "default"),
      F(ko, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: fe(() => [
          Ct(v("sup", {
            class: q([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Nt(c(a))
          }, [
            Ce(s.$slots, "content", { value: c(o) }, () => [
              en(D(c(o)), 1)
            ])
          ], 6), [
            [dr, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var sS = /* @__PURE__ */ ot(aS, [["__file", "badge.vue"]]);
const lS = An(sS), iS = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), el = tt({
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
    values: Rl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), cS = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, uS = ce({
  name: "ElTag"
}), dS = /* @__PURE__ */ ce({
  ...uS,
  props: el,
  emits: cS,
  setup(e, { emit: t }) {
    const n = e, r = aa(), o = At("tag"), a = N(() => {
      const { type: u, hit: f, effect: m, closable: h, round: y } = n;
      return [
        o.b(),
        o.is("closable", h),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(m),
        o.is("hit", f),
        o.is("round", y)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var f, m, h;
      (h = (m = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : m.component) != null && h.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (R(), j("span", {
      key: 0,
      class: q(c(a)),
      style: Nt({ backgroundColor: u.color }),
      onClick: i
    }, [
      v("span", {
        class: q(c(o).e("content"))
      }, [
        Ce(u.$slots, "default")
      ], 2),
      u.closable ? (R(), me(c(St), {
        key: 0,
        class: q(c(o).e("close")),
        onClick: rt(s, ["stop"])
      }, {
        default: fe(() => [
          F(c(Fa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (R(), me(ko, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: fe(() => [
        v("span", {
          class: q(c(a)),
          style: Nt({ backgroundColor: u.color }),
          onClick: i
        }, [
          v("span", {
            class: q(c(o).e("content"))
          }, [
            Ce(u.$slots, "default")
          ], 2),
          u.closable ? (R(), me(c(St), {
            key: 0,
            class: q(c(o).e("close")),
            onClick: rt(s, ["stop"])
          }, {
            default: fe(() => [
              F(c(Fa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var fS = /* @__PURE__ */ ot(dS, [["__file", "tag.vue"]]);
const pS = An(fS), yr = /* @__PURE__ */ new Map();
if (Tt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of yr.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function wu(e, t) {
  let n = [];
  return Dn(t.arg) ? n = t.arg : Sn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), m = e === s, h = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || f || m || h || y || t.value(r, o);
  };
}
const mS = {
  beforeMount(e, t) {
    yr.has(e) || yr.set(e, []), yr.get(e).push({
      documentHandler: wu(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    yr.has(e) || yr.set(e, []);
    const n = yr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: wu(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    yr.delete(e);
  }
}, hS = tt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Ee(Object)
  },
  size: ns,
  button: {
    type: Ee(Object)
  },
  experimentalFeatures: {
    type: Ee(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Ee(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...qd
}), vn = {};
ce({
  name: "ElConfigProvider",
  props: hS,
  setup(e, { slots: t }) {
    Oe(() => e.message, (r) => {
      Object.assign(vn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Xd(e);
    return () => Ce(t, "default", { config: n?.value });
  }
});
const gS = 100, vS = 600, ku = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = gS, delay: o = vS } = it(n) ? {} : n;
    let a, s;
    const i = () => it(n) ? n() : n.handler(), l = () => {
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
}, bS = tt({
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
  size: ns,
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
    validator: (e) => e === null || We(e) || ["min", "max"].includes(e),
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
  ...Kr(["ariaLabel"])
}), yS = {
  [fr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [ur]: (e) => We(e) || cr(e),
  [xt]: (e) => We(e) || cr(e)
}, _S = ce({
  name: "ElInputNumber"
}), wS = /* @__PURE__ */ ce({
  ..._S,
  props: bS,
  emits: yS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = xl(), a = At("input-number"), s = G(), i = zr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = os(), u = N(() => We(r.modelValue) && r.modelValue <= r.min), f = N(() => We(r.modelValue) && r.modelValue >= r.max), m = N(() => {
      const U = p(r.step);
      return Fn(r.precision) ? Math.max(p(r.modelValue), U) : (U > r.precision, r.precision);
    }), h = N(() => r.controls && r.controlsPosition === "right"), y = aa(), g = Ml(), b = N(() => {
      if (i.userInput !== null)
        return i.userInput;
      let U = i.currentValue;
      if (cr(U))
        return "";
      if (We(U)) {
        if (Number.isNaN(U))
          return "";
        Fn(r.precision) || (U = U.toFixed(r.precision));
      }
      return U;
    }), L = (U, J) => {
      if (Fn(J) && (J = m.value), J === 0)
        return Math.round(U);
      let H = String(U);
      const de = H.indexOf(".");
      if (de === -1 || !H.replace(".", "").split("")[de + J])
        return U;
      const ae = H.length;
      return H.charAt(ae - 1) === "5" && (H = `${H.slice(0, Math.max(0, ae - 1))}6`), Number.parseFloat(Number(H).toFixed(J));
    }, p = (U) => {
      if (cr(U))
        return 0;
      const J = U.toString(), H = J.indexOf(".");
      let de = 0;
      return H !== -1 && (de = J.length - H - 1), de;
    }, A = (U, J = 1) => We(U) ? L(U + r.step * J) : i.currentValue, P = () => {
      if (r.readonly || g.value || f.value)
        return;
      const U = Number(b.value) || 0, J = A(U);
      x(J), n(ur, i.currentValue), ye();
    }, I = () => {
      if (r.readonly || g.value || u.value)
        return;
      const U = Number(b.value) || 0, J = A(U, -1);
      x(J), n(ur, i.currentValue), ye();
    }, _ = (U, J) => {
      const { max: H, min: de, step: pe, precision: Pe, stepStrictly: ae, valueOnClear: Z } = r;
      H < de && Ol("InputNumber", "min should not be greater than max.");
      let Me = Number(U);
      if (cr(U) || Number.isNaN(Me))
        return null;
      if (U === "") {
        if (Z === null)
          return null;
        Me = Vt(Z) ? { min: de, max: H }[Z] : Z;
      }
      return ae && (Me = L(Math.round(Me / pe) * pe, Pe), Me !== U && J && n(xt, Me)), Fn(Pe) || (Me = L(Me, Pe)), (Me > H || Me < de) && (Me = Me > H ? H : de, J && n(xt, Me)), Me;
    }, x = (U, J = !0) => {
      var H;
      const de = i.currentValue, pe = _(U);
      if (!J) {
        n(xt, pe);
        return;
      }
      de === pe && U || (i.userInput = null, n(xt, pe), de !== pe && n(fr, pe, de), r.validateEvent && ((H = l?.validate) == null || H.call(l, "change").catch((Pe) => void 0)), i.currentValue = pe);
    }, C = (U) => {
      i.userInput = U;
      const J = U === "" ? null : Number(U);
      n(ur, J), x(J, !1);
    }, Y = (U) => {
      const J = U !== "" ? Number(U) : "";
      (We(J) && !Number.isNaN(J) || U === "") && x(J), ye(), i.userInput = null;
    }, X = () => {
      var U, J;
      (J = (U = s.value) == null ? void 0 : U.focus) == null || J.call(U);
    }, se = () => {
      var U, J;
      (J = (U = s.value) == null ? void 0 : U.blur) == null || J.call(U);
    }, he = (U) => {
      n("focus", U);
    }, le = (U) => {
      var J, H;
      i.userInput = null, rf() && i.currentValue === null && ((J = s.value) != null && J.input) && (s.value.input.value = ""), n("blur", U), r.validateEvent && ((H = l?.validate) == null || H.call(l, "blur").catch((de) => void 0));
    }, ye = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, _e = (U) => {
      document.activeElement === U.target && U.preventDefault();
    };
    return Oe(() => r.modelValue, (U, J) => {
      const H = _(U, !0);
      i.userInput === null && H !== J && (i.currentValue = H);
    }, { immediate: !0 }), yt(() => {
      var U;
      const { min: J, max: H, modelValue: de } = r, pe = (U = s.value) == null ? void 0 : U.input;
      if (pe.setAttribute("role", "spinbutton"), Number.isFinite(H) ? pe.setAttribute("aria-valuemax", String(H)) : pe.removeAttribute("aria-valuemax"), Number.isFinite(J) ? pe.setAttribute("aria-valuemin", String(J)) : pe.removeAttribute("aria-valuemin"), pe.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), pe.setAttribute("aria-disabled", String(g.value)), !We(de) && de != null) {
        let Pe = Number(de);
        Number.isNaN(Pe) && (Pe = null), n(xt, Pe);
      }
      pe.addEventListener("wheel", _e, { passive: !1 });
    }), Lu(() => {
      var U, J;
      const H = (U = s.value) == null ? void 0 : U.input;
      H?.setAttribute("aria-valuenow", `${(J = i.currentValue) != null ? J : ""}`);
    }), t({
      focus: X,
      blur: se
    }), (U, J) => (R(), j("div", {
      class: q([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !U.controls),
        c(a).is("controls-right", c(h))
      ]),
      onDragstart: rt(() => {
      }, ["prevent"])
    }, [
      U.controls ? Ct((R(), j("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: _n(I, ["enter"])
      }, [
        Ce(U.$slots, "decrease-icon", {}, () => [
          F(c(St), null, {
            default: fe(() => [
              c(h) ? (R(), me(c(ef), { key: 0 })) : (R(), me(c(q1), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(ku), I]
      ]) : ee("v-if", !0),
      U.controls ? Ct((R(), j("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: _n(P, ["enter"])
      }, [
        Ce(U.$slots, "increase-icon", {}, () => [
          F(c(St), null, {
            default: fe(() => [
              c(h) ? (R(), me(c($1), { key: 0 })) : (R(), me(c(Z1), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(ku), P]
      ]) : ee("v-if", !0),
      F(c(w_), {
        id: U.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: U.step,
        "model-value": c(b),
        placeholder: U.placeholder,
        readonly: U.readonly,
        disabled: c(g),
        size: c(y),
        max: U.max,
        min: U.min,
        name: U.name,
        "aria-label": U.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          _n(rt(P, ["prevent"]), ["up"]),
          _n(rt(I, ["prevent"]), ["down"])
        ],
        onBlur: le,
        onFocus: he,
        onInput: C,
        onChange: Y
      }, pp({
        _: 2
      }, [
        U.$slots.prefix ? {
          name: "prefix",
          fn: fe(() => [
            Ce(U.$slots, "prefix")
          ])
        } : void 0,
        U.$slots.suffix ? {
          name: "suffix",
          fn: fe(() => [
            Ce(U.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var kS = /* @__PURE__ */ ot(wS, [["__file", "input-number.vue"]]);
const SS = An(kS);
function TS() {
  const e = Sr(), t = G(0), n = 11, r = N(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Mn(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Rf = Symbol("ElSelectGroup"), is = Symbol("ElSelect");
function ES(e, t) {
  const n = Ge(is), r = Ge(Rf, { disabled: !1 }), o = N(() => f(wr(n.props.modelValue), e.value)), a = N(() => {
    var y;
    if (n.props.multiple) {
      const g = wr((y = n.props.modelValue) != null ? y : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = N(() => e.label || (sn(e.value) ? "" : e.value)), i = N(() => e.value || e.label || ""), l = N(() => e.disabled || t.groupDisabled || a.value), u = qt(), f = (y = [], g) => {
    if (sn(e.value)) {
      const b = n.props.valueKey;
      return y && y.some((L) => mp(kr(L, b)) === kr(g, b));
    } else
      return y && y.includes(g);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, h = (y) => {
    const g = new RegExp(iS(y), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Oe(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Oe(() => e.value, (y, g) => {
    const { remote: b, valueKey: L } = n.props;
    if ((b ? y !== g : !Uo(y, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (L && sn(y) && sn(g) && y[L] === g[L])
        return;
      n.setSelected();
    }
  }), Oe(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: o,
    isDisabled: l,
    hoverItem: m,
    updateOption: h
  };
}
const AS = ce({
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
    const t = At("select"), n = rs(), r = N(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(h))
    ]), o = zr({
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
    } = ES(e, o), { visible: m, hover: h } = rl(o), y = qt().proxy;
    l.onOptionCreate(y), Gn(() => {
      const b = y.value, { selected: L } = l.states, p = L.some((A) => A.value === y.value);
      gt(() => {
        l.states.cachedOptions.get(b) === y && !p && l.states.cachedOptions.delete(b);
      }), l.onOptionDestroy(b, y);
    });
    function g() {
      i.value || l.handleOptionSelect(y);
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
      visible: m,
      hover: h,
      selectOptionClick: g,
      states: o
    };
  }
});
function CS(e, t, n, r, o, a) {
  return Ct((R(), j("li", {
    id: e.id,
    class: q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: rt(e.selectOptionClick, ["stop"])
  }, [
    Ce(e.$slots, "default", {}, () => [
      v("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [dr, e.visible]
  ]);
}
var Xl = /* @__PURE__ */ ot(AS, [["render", CS], ["__file", "option.vue"]]);
const IS = ce({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ge(is), t = At("select"), n = N(() => e.props.popperClass), r = N(() => e.props.multiple), o = N(() => e.props.fitInputWidth), a = G("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return yt(() => {
      s(), Mn(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function LS(e, t, n, r, o, a) {
  return R(), j("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Nt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), j("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      Ce(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    Ce(e.$slots, "default"),
    e.$slots.footer ? (R(), j("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      Ce(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var OS = /* @__PURE__ */ ot(IS, [["render", LS], ["__file", "select-dropdown.vue"]]);
const xS = (e, t) => {
  const { t: n } = xl(), r = rs(), o = At("select"), a = At("input"), s = zr({
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
  }), i = G(null), l = G(null), u = G(null), f = G(null), m = G(null), h = G(null), y = G(null), g = G(null), b = G(null), L = G(null), p = G(null), {
    isComposing: A,
    handleCompositionStart: P,
    handleCompositionUpdate: I,
    handleCompositionEnd: _
  } = cf({
    afterComposition: (M) => nt(M)
  }), { wrapperRef: x, isFocused: C, handleBlur: Y } = lf(m, {
    beforeFocus() {
      return J.value;
    },
    afterFocus() {
      e.automaticDropdown && !X.value && (X.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(M) {
      var te, Le;
      return ((te = u.value) == null ? void 0 : te.isFocusInsideContent(M)) || ((Le = f.value) == null ? void 0 : Le.isFocusInsideContent(M));
    },
    afterBlur() {
      X.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), X = G(!1), se = G(), { form: he, formItem: le } = os(), { inputId: ye } = $l(e, {
    formItemContext: le
  }), { valueOnClear: _e, isEmptyValue: U } = A1(e), J = N(() => e.disabled || he?.disabled), H = N(() => Dn(e.modelValue) ? e.modelValue.length > 0 : !U(e.modelValue)), de = N(() => {
    var M;
    return (M = he?.statusIcon) != null ? M : !1;
  }), pe = N(() => e.clearable && !J.value && s.inputHovering && H.value), Pe = N(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), ae = N(() => o.is("reverse", Pe.value && X.value)), Z = N(() => le?.validateState || ""), Me = N(() => nf[Z.value]), ke = N(() => e.remote ? 300 : 0), Se = N(() => e.remote && !s.inputValue && s.options.size === 0), we = N(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Q.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Q = N(() => ge.value.filter((M) => M.visible).length), ge = N(() => {
    const M = Array.from(s.options.values()), te = [];
    return s.optionValues.forEach((Le) => {
      const ze = M.findIndex((pt) => pt.value === Le);
      ze > -1 && te.push(M[ze]);
    }), te.length >= M.length ? te : M;
  }), at = N(() => Array.from(s.cachedOptions.values())), Te = N(() => {
    const M = ge.value.filter((te) => !te.created).some((te) => te.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !M;
  }), Xe = () => {
    e.filterable && it(e.filterMethod) || e.filterable && e.remote && it(e.remoteMethod) || ge.value.forEach((M) => {
      var te;
      (te = M.updateOption) == null || te.call(M, s.inputValue);
    });
  }, Lt = aa(), ct = N(() => ["small"].includes(Lt.value) ? "small" : "default"), _t = N({
    get() {
      return X.value && !Se.value;
    },
    set(M) {
      X.value = M;
    }
  }), wt = N(() => {
    if (e.multiple && !Fn(e.modelValue))
      return wr(e.modelValue).length === 0 && !s.inputValue;
    const M = Dn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Fn(M) ? !s.inputValue : !0;
  }), st = N(() => {
    var M;
    const te = (M = e.placeholder) != null ? M : n("el.select.placeholder");
    return e.multiple || !H.value ? te : s.selectedLabel;
  }), ut = N(() => Zs ? null : "mouseenter");
  Oe(() => e.modelValue, (M, te) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", T("")), V(), !Uo(M, te) && e.validateEvent && le?.validate("change").catch((Le) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Oe(() => X.value, (M) => {
    M ? T(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", M);
  }), Oe(() => s.options.entries(), () => {
    Tt && (V(), e.defaultFirstOption && (e.filterable || e.remote) && Q.value && O());
  }, {
    flush: "post"
  }), Oe([() => s.hoveringIndex, ge], ([M]) => {
    We(M) && M > -1 ? se.value = ge.value[M] || {} : se.value = {}, ge.value.forEach((te) => {
      te.hover = se.value === te;
    });
  }), Iu(() => {
    s.isBeforeHide || Xe();
  });
  const T = (M) => {
    s.previousQuery === M || A.value || (s.previousQuery = M, e.filterable && it(e.filterMethod) ? e.filterMethod(M) : e.filterable && e.remote && it(e.remoteMethod) && e.remoteMethod(M), e.defaultFirstOption && (e.filterable || e.remote) && Q.value ? gt(O) : gt($e));
  }, O = () => {
    const M = ge.value.filter((pt) => pt.visible && !pt.disabled && !pt.states.groupDisabled), te = M.find((pt) => pt.created), Le = M[0], ze = ge.value.map((pt) => pt.value);
    s.hoveringIndex = Cn(ze, te || Le);
  }, V = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const te = Dn(e.modelValue) ? e.modelValue[0] : e.modelValue, Le = ne(te);
      s.selectedLabel = Le.currentLabel, s.selected = [Le];
      return;
    }
    const M = [];
    Fn(e.modelValue) || wr(e.modelValue).forEach((te) => {
      M.push(ne(te));
    }), s.selected = M;
  }, ne = (M) => {
    let te;
    const Le = tv(M);
    for (let Xt = s.cachedOptions.size - 1; Xt >= 0; Xt--) {
      const Mt = at.value[Xt];
      if (Le ? kr(Mt.value, e.valueKey) === kr(M, e.valueKey) : Mt.value === M) {
        te = {
          value: M,
          currentLabel: Mt.currentLabel,
          get isDisabled() {
            return Mt.isDisabled;
          }
        };
        break;
      }
    }
    if (te)
      return te;
    const ze = Le ? M.label : M ?? "";
    return {
      value: M,
      currentLabel: ze
    };
  }, $e = () => {
    s.hoveringIndex = ge.value.findIndex((M) => s.selected.some((te) => Ke(te) === Ke(M)));
  }, ve = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, E = () => {
    s.collapseItemWidth = L.value.getBoundingClientRect().width;
  }, B = () => {
    var M, te;
    (te = (M = u.value) == null ? void 0 : M.updatePopper) == null || te.call(M);
  }, Ae = () => {
    var M, te;
    (te = (M = f.value) == null ? void 0 : M.updatePopper) == null || te.call(M);
  }, Ie = () => {
    s.inputValue.length > 0 && !X.value && (X.value = !0), T(s.inputValue);
  }, nt = (M) => {
    if (s.inputValue = M.target.value, e.remote)
      $t();
    else
      return Ie();
  }, $t = zy(() => {
    Ie();
  }, ke.value), Ze = (M) => {
    Uo(e.modelValue, M) || t(fr, M);
  }, qn = (M) => By(M, (te) => {
    const Le = s.cachedOptions.get(te);
    return Le && !Le.disabled && !Le.states.groupDisabled;
  }), gr = (M) => {
    if (e.multiple && M.code !== Vn.delete && M.target.value.length <= 0) {
      const te = wr(e.modelValue).slice(), Le = qn(te);
      if (Le < 0)
        return;
      const ze = te[Le];
      te.splice(Le, 1), t(xt, te), Ze(te), t("remove-tag", ze);
    }
  }, pn = (M, te) => {
    const Le = s.selected.indexOf(te);
    if (Le > -1 && !J.value) {
      const ze = wr(e.modelValue).slice();
      ze.splice(Le, 1), t(xt, ze), Ze(ze), t("remove-tag", te.value);
    }
    M.stopPropagation(), vr();
  }, Yn = (M) => {
    M.stopPropagation();
    const te = e.multiple ? [] : _e.value;
    if (e.multiple)
      for (const Le of s.selected)
        Le.isDisabled && te.push(Le.value);
    t(xt, te), Ze(te), s.hoveringIndex = -1, X.value = !1, t("clear"), vr();
  }, Lr = (M) => {
    var te;
    if (e.multiple) {
      const Le = wr((te = e.modelValue) != null ? te : []).slice(), ze = Cn(Le, M);
      ze > -1 ? Le.splice(ze, 1) : (e.multipleLimit <= 0 || Le.length < e.multipleLimit) && Le.push(M.value), t(xt, Le), Ze(Le), M.created && T(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(xt, M.value), Ze(M.value), X.value = !1;
    vr(), !X.value && gt(() => {
      mn(M);
    });
  }, Cn = (M = [], te) => Fn(te) ? -1 : sn(te.value) ? M.findIndex((Le) => Uo(kr(Le, e.valueKey), Ke(te))) : M.indexOf(te.value), mn = (M) => {
    var te, Le, ze, pt, Xt;
    const Mt = Dn(M) ? M[0] : M;
    let Dt = null;
    if (Mt?.value) {
      const Ln = ge.value.filter((Xr) => Xr.value === Mt.value);
      Ln.length > 0 && (Dt = Ln[0].$el);
    }
    if (u.value && Dt) {
      const Ln = (pt = (ze = (Le = (te = u.value) == null ? void 0 : te.popperRef) == null ? void 0 : Le.contentRef) == null ? void 0 : ze.querySelector) == null ? void 0 : pt.call(ze, `.${o.be("dropdown", "wrap")}`);
      Ln && I1(Ln, Dt);
    }
    (Xt = p.value) == null || Xt.handleScroll();
  }, Zt = (M) => {
    s.options.set(M.value, M), s.cachedOptions.set(M.value, M);
  }, on = (M, te) => {
    s.options.get(M) === te && s.options.delete(M);
  }, Or = N(() => {
    var M, te;
    return (te = (M = u.value) == null ? void 0 : M.popperRef) == null ? void 0 : te.contentRef;
  }), Zn = () => {
    s.isBeforeHide = !1, gt(() => {
      var M;
      (M = p.value) == null || M.update(), mn(s.selected);
    });
  }, vr = () => {
    var M;
    (M = m.value) == null || M.focus();
  }, xr = () => {
    var M;
    if (X.value) {
      X.value = !1, gt(() => {
        var te;
        return (te = m.value) == null ? void 0 : te.blur();
      });
      return;
    }
    (M = m.value) == null || M.blur();
  }, Rr = (M) => {
    Yn(M);
  }, To = (M) => {
    if (X.value = !1, C.value) {
      const te = new FocusEvent("focus", M);
      gt(() => Y(te));
    }
  }, Xn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : X.value = !1;
  }, qr = () => {
    J.value || (Zs && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : X.value = !X.value);
  }, Eo = () => {
    if (!X.value)
      qr();
    else {
      const M = ge.value[s.hoveringIndex];
      M && !M.isDisabled && Lr(M);
    }
  }, Ke = (M) => sn(M.value) ? kr(M.value, e.valueKey) : M.value, hn = N(() => ge.value.filter((M) => M.visible).every((M) => M.isDisabled)), Yr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Nr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), In = (M) => {
    if (!X.value) {
      X.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Q.value === 0 || A.value) && !hn.value) {
      M === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : M === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const te = ge.value[s.hoveringIndex];
      (te.isDisabled || !te.visible) && In(M), gt(() => mn(se.value));
    }
  }, Zr = () => {
    if (!l.value)
      return 0;
    const M = window.getComputedStyle(l.value);
    return Number.parseFloat(M.gap || "6px");
  }, Pr = N(() => {
    const M = Zr();
    return { maxWidth: `${L.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - M : s.selectionWidth}px` };
  }), Ao = N(() => ({ maxWidth: `${s.selectionWidth}px` })), Ut = (M) => {
    t("popup-scroll", M);
  };
  return Mn(l, ve), Mn(g, B), Mn(x, B), Mn(b, Ae), Mn(L, E), yt(() => {
    V();
  }), {
    inputId: ye,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: C,
    expanded: X,
    optionsArray: ge,
    hoverOption: se,
    selectSize: Lt,
    filteredOptionsCount: Q,
    updateTooltip: B,
    updateTagTooltip: Ae,
    debouncedOnInputChange: $t,
    onInput: nt,
    deletePrevTag: gr,
    deleteTag: pn,
    deleteSelected: Yn,
    handleOptionSelect: Lr,
    scrollToOption: mn,
    hasModelValue: H,
    shouldShowPlaceholder: wt,
    currentPlaceholder: st,
    mouseEnterEventName: ut,
    needStatusIcon: de,
    showClose: pe,
    iconComponent: Pe,
    iconReverse: ae,
    validateState: Z,
    validateIcon: Me,
    showNewOption: Te,
    updateOptions: Xe,
    collapseTagSize: ct,
    setSelected: V,
    selectDisabled: J,
    emptyText: we,
    handleCompositionStart: P,
    handleCompositionUpdate: I,
    handleCompositionEnd: _,
    onOptionCreate: Zt,
    onOptionDestroy: on,
    handleMenuEnter: Zn,
    focus: vr,
    blur: xr,
    handleClearClick: Rr,
    handleClickOutside: To,
    handleEsc: Xn,
    toggleMenu: qr,
    selectOption: Eo,
    getValueKey: Ke,
    navigateOptions: In,
    dropdownMenuVisible: _t,
    showTagList: Yr,
    collapseTagList: Nr,
    popupScroll: Ut,
    tagStyle: Pr,
    collapseTagStyle: Ao,
    popperRef: Or,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: h,
    suffixRef: y,
    selectRef: i,
    wrapperRef: x,
    selectionRef: l,
    scrollbarRef: p,
    menuRef: g,
    tagMenuRef: b,
    collapseItemRef: L
  };
};
var RS = ce({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ge(is);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Dn(u) && u.forEach((f) => {
          var m, h, y, g;
          const b = (m = f?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? l(!Vt(f.children) && !Dn(f.children) && it((h = f.children) == null ? void 0 : h.default) ? (y = f.children) == null ? void 0 : y.default() : f.children) : b === "ElOption" ? i.push((g = f.props) == null ? void 0 : g.value) : Dn(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), Uo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const NS = tt({
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
  size: ns,
  effect: {
    type: Ee(String),
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
    type: Ee(Object),
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
  teleported: Zl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: zn,
    default: Nl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: zn,
    default: ef
  },
  tagType: { ...el.type, default: "info" },
  tagEffect: { ...el.effect, default: "light" },
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
    type: Ee(String),
    values: ss,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: Ee(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...qd,
  ...Kr(["ariaLabel"])
}), Su = "ElSelect", PS = ce({
  name: Su,
  componentName: Su,
  components: {
    ElSelectMenu: OS,
    ElOption: Xl,
    ElOptions: RS,
    ElTag: pS,
    ElScrollbar: M_,
    ElTooltip: nS,
    ElIcon: St
  },
  directives: { ClickOutside: mS },
  props: NS,
  emits: [
    xt,
    fr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = N(() => {
      const { modelValue: l, multiple: u } = e, f = u ? [] : void 0;
      return Dn(l) ? u ? l : f : u ? f : l;
    }), r = zr({
      ...rl(e),
      modelValue: n
    }), o = xS(r, t), { calculatorRef: a, inputStyle: s } = TS();
    jn(is, zr({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const i = N(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function $S(e, t, n, r, o, a) {
  const s = Mr("el-tag"), i = Mr("el-tooltip"), l = Mr("el-icon"), u = Mr("el-option"), f = Mr("el-options"), m = Mr("el-scrollbar"), h = Mr("el-select-menu"), y = hp("click-outside");
  return Ct((R(), j("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [gp(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
    onMouseleave: (g) => e.states.inputHovering = !1
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
      onHide: (g) => e.states.isBeforeHide = !1
    }, {
      default: fe(() => {
        var g;
        return [
          v("div", {
            ref: "wrapperRef",
            class: q([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: rt(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), j("div", {
              key: 0,
              ref: "prefixRef",
              class: q(e.nsSelect.e("prefix"))
            }, [
              Ce(e.$slots, "prefix")
            ], 2)) : ee("v-if", !0),
            v("div", {
              ref: "selectionRef",
              class: q([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Ce(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), j(ft, null, $n(e.showTagList, (b) => (R(), j("div", {
                  key: e.getValueKey(b),
                  class: q(e.nsSelect.e("selected-item"))
                }, [
                  F(s, {
                    closable: !e.selectDisabled && !b.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Nt(e.tagStyle),
                    onClose: (L) => e.deleteTag(L, b)
                  }, {
                    default: fe(() => [
                      v("span", {
                        class: q(e.nsSelect.e("tags-text"))
                      }, [
                        Ce(e.$slots, "label", {
                          label: b.currentLabel,
                          value: b.value
                        }, () => [
                          en(D(b.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (R(), me(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: fe(() => [
                    v("div", {
                      ref: "collapseItemRef",
                      class: q(e.nsSelect.e("selected-item"))
                    }, [
                      F(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Nt(e.collapseTagStyle)
                      }, {
                        default: fe(() => [
                          v("span", {
                            class: q(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: fe(() => [
                    v("div", {
                      ref: "tagMenuRef",
                      class: q(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), j(ft, null, $n(e.collapseTagList, (b) => (R(), j("div", {
                        key: e.getValueKey(b),
                        class: q(e.nsSelect.e("selected-item"))
                      }, [
                        F(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !b.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (L) => e.deleteTag(L, b)
                        }, {
                          default: fe(() => [
                            v("span", {
                              class: q(e.nsSelect.e("tags-text"))
                            }, [
                              Ce(e.$slots, "label", {
                                label: b.currentLabel,
                                value: b.value
                              }, () => [
                                en(D(b.currentLabel), 1)
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
              v("div", {
                class: q([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Ct(v("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (b) => e.states.inputValue = b,
                  type: "text",
                  name: e.name,
                  class: q([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Nt(e.inputStyle),
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
                    _n(rt((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    _n(rt((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    _n(rt(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    _n(rt(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    _n(rt(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: rt(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Ho, e.states.inputValue]
                ]),
                e.filterable ? (R(), j("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), j("div", {
                key: 1,
                class: q([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? Ce(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  v("span", null, D(e.currentPlaceholder), 1)
                ]) : (R(), j("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : ee("v-if", !0)
            ], 2),
            v("div", {
              ref: "suffixRef",
              class: q(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (R(), me(l, {
                key: 0,
                class: q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: fe(() => [
                  (R(), me(Gt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (R(), me(l, {
                key: 1,
                class: q([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: fe(() => [
                  (R(), me(Gt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (R(), me(l, {
                key: 2,
                class: q([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: fe(() => [
                  (R(), me(Gt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: fe(() => [
        F(h, { ref: "menuRef" }, {
          default: fe(() => [
            e.$slots.header ? (R(), j("div", {
              key: 0,
              class: q(e.nsSelect.be("dropdown", "header")),
              onClick: rt(() => {
              }, ["stop"])
            }, [
              Ce(e.$slots, "header")
            ], 10, ["onClick"])) : ee("v-if", !0),
            Ct(F(m, {
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
              default: fe(() => [
                e.showNewOption ? (R(), me(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                F(f, null, {
                  default: fe(() => [
                    Ce(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [dr, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), j("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              Ce(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), j("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              Ce(e.$slots, "empty", {}, () => [
                v("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (R(), j("div", {
              key: 3,
              class: q(e.nsSelect.be("dropdown", "footer")),
              onClick: rt(() => {
              }, ["stop"])
            }, [
              Ce(e.$slots, "footer")
            ], 10, ["onClick"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [y, e.handleClickOutside, e.popperRef]
  ]);
}
var MS = /* @__PURE__ */ ot(PS, [["render", $S], ["__file", "select.vue"]]);
const DS = ce({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = At("select"), n = G(null), r = qt(), o = G([]);
    jn(Rf, zr({
      ...rl(e)
    }));
    const a = N(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, m;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const f = wr(u), m = [];
      return f.forEach((h) => {
        var y, g;
        s(h) ? m.push(h.component.proxy) : (y = h.children) != null && y.length ? m.push(...i(h.children)) : (g = h.component) != null && g.subTree && m.push(...i(h.component.subTree));
      }), m;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return yt(() => {
      l();
    }), d1(n, l, {
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
function FS(e, t, n, r, o, a) {
  return Ct((R(), j("ul", {
    ref: "groupRef",
    class: q(e.ns.be("group", "wrap"))
  }, [
    v("li", {
      class: q(e.ns.be("group", "title"))
    }, D(e.label), 3),
    v("li", null, [
      v("ul", {
        class: q(e.ns.b("group"))
      }, [
        Ce(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [dr, e.visible]
  ]);
}
var Nf = /* @__PURE__ */ ot(DS, [["render", FS], ["__file", "option-group.vue"]]);
const zS = An(MS, {
  Option: Xl,
  OptionGroup: Nf
}), BS = Jd(Xl);
Jd(Nf);
const VS = (e) => ["", ...Rl].includes(e), US = tt({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: VS
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: zn
  },
  activeActionIcon: {
    type: zn
  },
  activeIcon: {
    type: zn
  },
  inactiveIcon: {
    type: zn
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
    type: Ee(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Kr(["ariaLabel"])
}), jS = {
  [xt]: (e) => Tr(e) || Vt(e) || We(e),
  [fr]: (e) => Tr(e) || Vt(e) || We(e),
  [ur]: (e) => Tr(e) || Vt(e) || We(e)
}, Pf = "ElSwitch", WS = ce({
  name: Pf
}), HS = /* @__PURE__ */ ce({
  ...WS,
  props: US,
  emits: jS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = os(), a = aa(), s = At("switch"), { inputId: i } = $l(r, {
      formItemContext: o
    }), l = Ml(N(() => r.loading)), u = G(r.modelValue !== !1), f = G(), m = G(), h = N(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", p.value)
    ]), y = N(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !p.value)
    ]), g = N(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", p.value)
    ]), b = N(() => ({
      width: ho(r.width)
    }));
    Oe(() => r.modelValue, () => {
      u.value = !0;
    });
    const L = N(() => u.value ? r.modelValue : !1), p = N(() => L.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(L.value) || (n(xt, r.inactiveValue), n(fr, r.inactiveValue), n(ur, r.inactiveValue)), Oe(p, (_) => {
      var x;
      f.value.checked = _, r.validateEvent && ((x = o?.validate) == null || x.call(o, "change").catch((C) => void 0));
    });
    const A = () => {
      const _ = p.value ? r.inactiveValue : r.activeValue;
      n(xt, _), n(fr, _), n(ur, _), gt(() => {
        f.value.checked = p.value;
      });
    }, P = () => {
      if (l.value)
        return;
      const { beforeChange: _ } = r;
      if (!_) {
        A();
        return;
      }
      const x = _();
      [
        fc(x),
        Tr(x)
      ].includes(!0) || Ol(Pf, "beforeChange must return type `Promise<boolean>` or `boolean`"), fc(x) ? x.then((Y) => {
        Y && A();
      }).catch((Y) => {
      }) : x && A();
    }, I = () => {
      var _, x;
      (x = (_ = f.value) == null ? void 0 : _.focus) == null || x.call(_);
    };
    return yt(() => {
      f.value.checked = p.value;
    }), t({
      focus: I,
      checked: p
    }), (_, x) => (R(), j("div", {
      class: q(c(h)),
      onClick: rt(P, ["prevent"])
    }, [
      v("input", {
        id: c(i),
        ref_key: "input",
        ref: f,
        class: q(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(p),
        "aria-disabled": c(l),
        "aria-label": _.ariaLabel,
        name: _.name,
        "true-value": _.activeValue,
        "false-value": _.inactiveValue,
        disabled: c(l),
        tabindex: _.tabindex,
        onChange: A,
        onKeydown: _n(P, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (R(), j("span", {
        key: 0,
        class: q(c(y))
      }, [
        _.inactiveIcon ? (R(), me(c(St), { key: 0 }, {
          default: fe(() => [
            (R(), me(Gt(_.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (R(), j("span", {
          key: 1,
          "aria-hidden": c(p)
        }, D(_.inactiveText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0),
      v("span", {
        ref_key: "core",
        ref: m,
        class: q(c(s).e("core")),
        style: Nt(c(b))
      }, [
        _.inlinePrompt ? (R(), j("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (R(), me(c(St), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: fe(() => [
              (R(), me(Gt(c(p) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (R(), j("span", {
            key: 1,
            class: q(c(s).is("text")),
            "aria-hidden": !c(p)
          }, D(c(p) ? _.activeText : _.inactiveText), 11, ["aria-hidden"])) : ee("v-if", !0)
        ], 2)) : ee("v-if", !0),
        v("div", {
          class: q(c(s).e("action"))
        }, [
          _.loading ? (R(), me(c(St), {
            key: 0,
            class: q(c(s).is("loading"))
          }, {
            default: fe(() => [
              F(c(tf))
            ]),
            _: 1
          }, 8, ["class"])) : c(p) ? Ce(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (R(), me(c(St), { key: 0 }, {
              default: fe(() => [
                (R(), me(Gt(_.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(p) ? ee("v-if", !0) : Ce(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (R(), me(c(St), { key: 0 }, {
              default: fe(() => [
                (R(), me(Gt(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (R(), j("span", {
        key: 1,
        class: q(c(g))
      }, [
        _.activeIcon ? (R(), me(c(St), { key: 0 }, {
          default: fe(() => [
            (R(), me(Gt(_.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !_.activeIcon && _.activeText ? (R(), j("span", {
          key: 1,
          "aria-hidden": !c(p)
        }, D(_.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var GS = /* @__PURE__ */ ot(HS, [["__file", "switch.vue"]]);
const KS = An(GS), $f = ["success", "info", "warning", "error"], zt = of({
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
  appendTo: Tt ? document.body : void 0
}), qS = tt({
  customClass: {
    type: String,
    default: zt.customClass
  },
  center: {
    type: Boolean,
    default: zt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: zt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: zt.duration
  },
  icon: {
    type: zn,
    default: zt.icon
  },
  id: {
    type: String,
    default: zt.id
  },
  message: {
    type: Ee([
      String,
      Object,
      Function
    ]),
    default: zt.message
  },
  onClose: {
    type: Ee(Function),
    default: zt.onClose
  },
  showClose: {
    type: Boolean,
    default: zt.showClose
  },
  type: {
    type: String,
    values: $f,
    default: zt.type
  },
  plain: {
    type: Boolean,
    default: zt.plain
  },
  offset: {
    type: Number,
    default: zt.offset
  },
  zIndex: {
    type: Number,
    default: zt.zIndex
  },
  grouping: {
    type: Boolean,
    default: zt.grouping
  },
  repeatNum: {
    type: Number,
    default: zt.repeatNum
  }
}), YS = {
  destroy: () => !0
}, kn = vp([]), ZS = (e) => {
  const t = kn.findIndex((o) => o.id === e), n = kn[t];
  let r;
  return t > 0 && (r = kn[t - 1]), { current: n, prev: r };
}, XS = (e) => {
  const { prev: t } = ZS(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, QS = (e, t) => kn.findIndex((r) => r.id === e) > 0 ? 16 : t, JS = ce({
  name: "ElMessage"
}), eT = /* @__PURE__ */ ce({
  ...JS,
  props: qS,
  emits: YS,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = o_, { ns: o, zIndex: a } = Zd("message"), { currentZIndex: s, nextZIndex: i } = a, l = G(), u = G(!1), f = G(0);
    let m;
    const h = N(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = N(() => {
      const C = n.type;
      return { [o.bm("icon", C)]: C && za[C] };
    }), g = N(() => n.icon || za[n.type] || ""), b = N(() => XS(n.id)), L = N(() => QS(n.id, n.offset) + b.value), p = N(() => f.value + L.value), A = N(() => ({
      top: `${L.value}px`,
      zIndex: s.value
    }));
    function P() {
      n.duration !== 0 && ({ stop: m } = zd(() => {
        _();
      }, n.duration));
    }
    function I() {
      m?.();
    }
    function _() {
      u.value = !1;
    }
    function x({ code: C }) {
      C === Vn.esc && _();
    }
    return yt(() => {
      P(), i(), u.value = !0;
    }), Oe(() => n.repeatNum, () => {
      I(), P();
    }), Tn(document, "keydown", x), Mn(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: p,
      close: _
    }), (C, Y) => (R(), me(ko, {
      name: c(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (X) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: fe(() => [
        Ct(v("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: l,
          class: q([
            c(o).b(),
            { [c(o).m(C.type)]: C.type },
            c(o).is("center", C.center),
            c(o).is("closable", C.showClose),
            c(o).is("plain", C.plain),
            C.customClass
          ]),
          style: Nt(c(A)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: P
        }, [
          C.repeatNum > 1 ? (R(), me(c(lS), {
            key: 0,
            value: C.repeatNum,
            type: c(h),
            class: q(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(g) ? (R(), me(c(St), {
            key: 1,
            class: q([c(o).e("icon"), c(y)])
          }, {
            default: fe(() => [
              (R(), me(Gt(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          Ce(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (R(), j(ft, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              v("p", {
                class: q(c(o).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), j("p", {
              key: 0,
              class: q(c(o).e("content"))
            }, D(C.message), 3))
          ]),
          C.showClose ? (R(), me(c(St), {
            key: 2,
            class: q(c(o).e("closeBtn")),
            onClick: rt(_, ["stop"])
          }, {
            default: fe(() => [
              F(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [dr, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var tT = /* @__PURE__ */ ot(eT, [["__file", "message.vue"]]);
let nT = 1;
const Mf = (e) => {
  const t = !e || Vt(e) || Go(e) || it(e) ? { message: e } : e, n = {
    ...zt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Vt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Sn(r) || (r = document.body), n.appendTo = r;
  }
  return Tr(vn.grouping) && !n.grouping && (n.grouping = vn.grouping), We(vn.duration) && n.duration === 3e3 && (n.duration = vn.duration), We(vn.offset) && n.offset === 16 && (n.offset = vn.offset), Tr(vn.showClose) && !n.showClose && (n.showClose = vn.showClose), n;
}, rT = (e) => {
  const t = kn.indexOf(e);
  if (t === -1)
    return;
  kn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, oT = ({ appendTo: e, ...t }, n) => {
  const r = `message_${nT++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), rT(f);
    },
    onDestroy: () => {
      Ia(null, a);
    }
  }, i = F(tT, s, it(s.message) || Go(s.message) ? {
    default: it(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || _o._context, Ia(i, a), e.appendChild(a.firstElementChild);
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
}, _o = (e = {}, t) => {
  if (!Tt)
    return { close: () => {
    } };
  const n = Mf(e);
  if (n.grouping && kn.length) {
    const o = kn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (We(vn.max) && kn.length >= vn.max)
    return { close: () => {
    } };
  const r = oT(n, t);
  return kn.push(r), r.handler;
};
$f.forEach((e) => {
  _o[e] = (t = {}, n) => {
    const r = Mf(t);
    return _o({ ...r, type: e }, n);
  };
});
function aT(e) {
  for (const t of kn)
    (!e || e === t.props.type) && t.handler.close();
}
_o.closeAll = aT;
_o._context = null;
const sT = Qd(_o, "$message"), Df = [
  "success",
  "info",
  "warning",
  "error"
], lT = tt({
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
    type: zn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Ee([
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
    type: Ee(Function),
    default: () => {
    }
  },
  onClose: {
    type: Ee(Function),
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
    values: [...Df, ""],
    default: ""
  },
  zIndex: Number
}), iT = {
  destroy: () => !0
}, cT = ce({
  name: "ElNotification"
}), uT = /* @__PURE__ */ ce({
  ...cT,
  props: lT,
  emits: iT,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Zd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = r_, l = G(!1);
    let u;
    const f = N(() => {
      const P = n.type;
      return P && za[n.type] ? r.m(P) : "";
    }), m = N(() => n.type && za[n.type] || n.icon), h = N(() => n.position.endsWith("right") ? "right" : "left"), y = N(() => n.position.startsWith("top") ? "top" : "bottom"), g = N(() => {
      var P;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (P = n.zIndex) != null ? P : s.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = zd(() => {
        l.value && p();
      }, n.duration));
    }
    function L() {
      u?.();
    }
    function p() {
      l.value = !1;
    }
    function A({ code: P }) {
      P === Vn.delete || P === Vn.backspace ? L() : P === Vn.esc ? l.value && p() : b();
    }
    return yt(() => {
      b(), a(), l.value = !0;
    }), Tn(document, "keydown", A), t({
      visible: l,
      close: p
    }), (P, I) => (R(), me(ko, {
      name: c(r).b("fade"),
      onBeforeLeave: P.onClose,
      onAfterLeave: (_) => P.$emit("destroy"),
      persisted: ""
    }, {
      default: fe(() => [
        Ct(v("div", {
          id: P.id,
          class: q([c(r).b(), P.customClass, c(h)]),
          style: Nt(c(g)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: b,
          onClick: P.onClick
        }, [
          c(m) ? (R(), me(c(St), {
            key: 0,
            class: q([c(r).e("icon"), c(f)])
          }, {
            default: fe(() => [
              (R(), me(Gt(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          v("div", {
            class: q(c(r).e("group"))
          }, [
            v("h2", {
              class: q(c(r).e("title")),
              textContent: D(P.title)
            }, null, 10, ["textContent"]),
            Ct(v("div", {
              class: q(c(r).e("content")),
              style: Nt(P.title ? void 0 : { margin: 0 })
            }, [
              Ce(P.$slots, "default", {}, () => [
                P.dangerouslyUseHTMLString ? (R(), j(ft, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  v("p", { innerHTML: P.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), j("p", { key: 0 }, D(P.message), 1))
              ])
            ], 6), [
              [dr, P.message]
            ]),
            P.showClose ? (R(), me(c(St), {
              key: 0,
              class: q(c(r).e("closeBtn")),
              onClick: rt(p, ["stop"])
            }, {
              default: fe(() => [
                F(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [dr, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var dT = /* @__PURE__ */ ot(uT, [["__file", "notification.vue"]]);
const Ua = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, tl = 16;
let fT = 1;
const wo = function(e = {}, t) {
  if (!Tt)
    return { close: () => {
    } };
  (Vt(e) || Go(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Ua[n].forEach(({ vm: f }) => {
    var m;
    r += (((m = f.el) == null ? void 0 : m.offsetHeight) || 0) + tl;
  }), r += tl;
  const o = `notification_${fT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      pT(o, n, a);
    }
  };
  let i = document.body;
  Sn(e.appendTo) ? i = e.appendTo : Vt(e.appendTo) && (i = document.querySelector(e.appendTo)), Sn(i) || (i = document.body);
  const l = document.createElement("div"), u = F(dT, s, it(s.message) ? s.message : Go(s.message) ? () => s.message : null);
  return u.appContext = Fn(t) ? wo._context : t, u.props.onDestroy = () => {
    Ia(null, l);
  }, Ia(u, l), Ua[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Df.forEach((e) => {
  wo[e] = (t = {}, n) => ((Vt(t) || Go(t)) && (t = {
    message: t
  }), wo({ ...t, type: e }, n));
});
function pT(e, t, n) {
  const r = Ua[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: f, component: m } = r[u].vm, h = Number.parseInt(f.style[i], 10) - s - tl;
      m.props.offset = h;
    }
}
function mT() {
  for (const e of Object.values(Ua))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
wo.closeAll = mT;
wo._context = null;
const hT = Qd(wo, "$notify"), et = {
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
    r === "center" ? sT({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : hT({
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
}, gT = "snippets-code:developer-mode", Ff = "snippets-code:frontend-diagnostics", vT = 240, Mo = "[REDACTED]", Ca = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Mo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Mo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Mo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Mo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Mo}`
), zf = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Ca(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Ca(
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
    return Ca(String(e));
  }
}, bT = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, yT = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Ff) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Ql = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(gT) === "true";
  } catch {
    return !1;
  }
}, _T = (e, t, n) => {
  if (!Ql() || typeof localStorage > "u") return;
  const r = yT();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: bT(),
    message: Ca(t),
    data: zf(n)
  });
  try {
    localStorage.setItem(
      Ff,
      JSON.stringify(r.slice(-vT))
    );
  } catch {
  }
}, wT = () => Ql(), kT = (e) => e === "warn" || e === "error" || !1 || !1 || Ql(), wa = (e, t, n) => {
  _T(e, t, n), kT(e) && It("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : zf(n)
  }).catch(() => {
  });
}, Ht = {
  info: (e, t, ...n) => {
    wa("info", e, t);
  },
  error: (e, t) => {
    wa("error", e, t);
  },
  warn: (e, t) => {
    wa("warn", e, t);
  },
  debug: (e, t) => {
    wT() && wa("debug", e, t);
  }
}, ST = { class: "sidebar-header" }, TT = { class: "sidebar-title-block" }, ET = ["title", "aria-pressed"], AT = { class: "sidebar-nav" }, CT = { class: "sidebar-nav-item sidebar-nav-item--search" }, IT = ["placeholder"], LT = { class: "sidebar-section recent-section" }, OT = { class: "section-title-row" }, xT = { class: "section-title" }, RT = ["title"], NT = {
  key: 0,
  class: "chat-list"
}, PT = ["onClick", "onKeydown"], $T = { class: "chat-item-title" }, MT = { class: "chat-item-time" }, DT = ["title", "onClick"], FT = {
  key: 1,
  class: "sidebar-empty"
}, zT = { class: "sidebar-service" }, BT = { class: "sidebar-service-row" }, VT = { class: "chat-panel" }, UT = ["title"], jT = {
  key: 0,
  class: "empty-state"
}, WT = { class: "empty-title" }, HT = { class: "empty-desc" }, GT = {
  key: 0,
  class: "date-divider"
}, KT = { class: "message-avatar" }, qT = { key: 1 }, YT = { class: "message-body" }, ZT = { class: "user-bubble" }, XT = {
  key: 0,
  class: "user-message-text"
}, QT = {
  key: 1,
  class: "message-attachment-list"
}, JT = ["title"], e2 = ["src", "alt"], t2 = {
  key: 1,
  class: "attachment-file-icon"
}, n2 = { key: 2 }, r2 = {
  key: 0,
  class: "message-actions"
}, o2 = ["title", "onClick"], a2 = ["title", "onClick"], s2 = ["title", "onClick"], l2 = { class: "assistant-head" }, i2 = { key: 0 }, c2 = {
  key: 0,
  class: "assistant-content-stack"
}, u2 = ["open"], d2 = { class: "reasoning-summary-title" }, f2 = { key: 0 }, p2 = ["innerHTML"], m2 = ["innerHTML"], h2 = {
  key: 1,
  class: "message-content loading-text"
}, g2 = {
  key: 0,
  class: "web-search-panel"
}, v2 = { class: "web-search-panel__header" }, b2 = {
  key: 0,
  class: "web-search-source-list"
}, y2 = ["href", "title"], _2 = {
  key: 1,
  class: "message-stats"
}, w2 = { class: "message-stats__context" }, k2 = { class: "message-stats__output" }, S2 = { class: "message-stats__elapsed" }, T2 = { class: "message-stats__speed" }, E2 = {
  key: 0,
  class: "message-stats-time"
}, A2 = {
  key: 2,
  class: "message-warning"
}, C2 = {
  key: 3,
  class: "message-actions"
}, I2 = ["title", "aria-label"], L2 = ["disabled", "title", "onClick"], O2 = ["disabled", "title", "onClick"], x2 = ["title", "onClick"], R2 = ["title", "onClick"], N2 = ["title", "onClick"], P2 = ["title", "onClick"], $2 = ["title", "onClick"], M2 = ["title"], D2 = {
  key: 0,
  class: "attachment-preview-list"
}, F2 = ["src", "alt"], z2 = {
  key: 1,
  class: "attachment-file-icon"
}, B2 = { class: "attachment-meta" }, V2 = ["title", "onClick"], U2 = ["placeholder"], j2 = { class: "input-toolbar" }, W2 = { class: "input-toolbar-left" }, H2 = ["title"], G2 = { class: "model-select-shell" }, K2 = ["disabled"], q2 = ["value"], Y2 = {
  key: 0,
  value: ""
}, Z2 = ["title", "aria-pressed"], X2 = ["title", "aria-pressed"], Q2 = { class: "input-toolbar-right" }, J2 = ["title", "aria-label"], eE = ["disabled", "title", "aria-label"], Tu = "snippets.localAi.webSearchEnabled", tE = 96, nE = 24, rE = 120, oE = 4096, Os = 160, aE = 420, sE = 1200, lE = 24e3, iE = 1800, cE = 5200, uE = 90, dE = 1e3, fE = /* @__PURE__ */ ce({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = ta(), n = G(""), r = G([]), o = G(""), a = G(!1), s = G(""), i = G([]), l = G(!1), u = G(!1), f = G(!1), m = G(!1), y = G((() => {
      try {
        return localStorage.getItem(Tu) === "true";
      } catch {
        return !1;
      }
    })()), g = G(!1), b = G(!0), L = G(!1), p = G(null), A = G(null), P = G(null), I = G(""), _ = G(null), x = G(null), C = G(null), Y = G(Date.now());
    let X = null, se = null, he = null, le = !1;
    const ye = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), J = /今天|今日|现在|当前|日期|时间|星期|天气|温度|气温|today|current|date|time|weather|temperature/i, H = /天气|温度|气温|体感|湿度|降雨|下雨|风速|weather|temperature|humidity|rain|wind/i, de = (d) => `${Date.now()}-${d}-${Math.random().toString(16).slice(2, 8)}`, pe = (d) => d.type === "root", Pe = (d) => new Map(d.map((S) => [S.id, S])), ae = (d) => d.find(pe), Z = (d, S) => {
      if (!S) return null;
      const k = Pe(d);
      let $ = k.get(S);
      const z = /* @__PURE__ */ new Set();
      for (; $?.childIds?.length && !z.has($.id); )
        z.add($.id), $ = k.get($.childIds[$.childIds.length - 1]);
      return $?.id ?? null;
    }, Me = (d, S) => {
      if (d.some(pe)) {
        const K = d.map((be) => ({
          ...be,
          type: be.type ?? "text",
          parentId: be.parentId ?? null,
          childIds: be.childIds ?? []
        })), oe = ae(K);
        return {
          messages: K,
          currentNodeId: Z(K, K.at(-1)?.id) ?? oe?.id ?? null
        };
      }
      const k = {
        id: de("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: S,
        parentId: null,
        childIds: []
      }, $ = [k];
      let z = k.id;
      for (const K of d) {
        const oe = {
          ...K,
          role: K.role === "system" ? "assistant" : K.role,
          type: "text",
          parentId: z,
          childIds: []
        };
        $.find((xe) => xe.id === z)?.childIds?.push(oe.id), $.push(oe), z = oe.id;
      }
      return { messages: $, currentNodeId: z };
    }, ke = (d, S) => {
      if (!S) return [];
      const k = Pe(d), $ = [], z = /* @__PURE__ */ new Set();
      let K = k.get(S);
      for (; K && !z.has(K.id); )
        z.add(K.id), $.unshift(K), K = K.parentId ? k.get(K.parentId) : void 0;
      return $;
    }, Se = (d) => {
      if (!d) return [];
      const S = d.currentNodeId ?? Z(d.messages, ae(d.messages)?.id);
      return ke(d.messages, S).filter(
        (k) => !pe(k)
      );
    }, we = (d) => {
      if (!d) return [];
      const S = Pe(d.messages), k = ($) => Z(d.messages, $) ?? $;
      return Se(d).map(($) => {
        const K = ($.parentId ? S.get($.parentId) : void 0)?.childIds ?? [$.id];
        return {
          message: $,
          siblingLeafNodeIds: K.map(k),
          siblingCurrentIndex: Math.max(0, K.indexOf($.id))
        };
      });
    }, Q = (d, S) => {
      const k = ae(d.messages), $ = S.parentId ?? d.currentNodeId ?? k?.id ?? null, z = {
        ...S,
        type: "text",
        parentId: $,
        childIds: []
      };
      if (d.messages.push(z), $) {
        const K = d.messages.find((oe) => oe.id === $);
        K && (K.childIds = [...K.childIds ?? [], z.id]);
      }
      return d.currentNodeId = z.id, z;
    }, ge = N(
      () => (!!s.value.trim() || i.value.length > 0) && !l.value
    ), at = N(() => _.value?.healthy ? t("localAi.serviceHealthy") : _.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), Te = N(
      () => r.value.find((d) => d.id === o.value) ?? null
    ), Xe = N(() => Se(Te.value)), Lt = N(() => we(Te.value)), ct = (d) => d ? d.split(/[\\/]+/).pop() ?? d : "", _t = N(
      () => ct(I.value) || ct(_.value?.modelPath) || ct(A.value?.modelPath) || t("localAi.localModel")
    ), wt = N(() => P.value?.mainModels ?? []), st = N(() => !!A.value?.mmprojPath), ut = N(
      () => A.value?.ctxSize ?? _.value?.ctxSize ?? 4096
    ), T = N(() => {
      const d = ut.value, S = A.value?.maxTokens ?? 0;
      return S > 0 ? Math.min(
        Math.max(S, 512),
        Math.max(512, d - 512)
      ) : Math.min(
        Math.max(oE, Math.floor(d * 0.5)),
        Math.max(512, d - 512)
      );
    }), O = N(
      () => Math.max(512, ut.value - T.value)
    ), V = N(() => {
      const d = _t.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(d);
    }), ne = N(() => {
      const d = n.value.trim().toLowerCase();
      return r.value.filter(
        (S) => !d || S.title.toLowerCase().includes(d) || S.messages.some(
          (k) => !pe(k) && k.content.toLowerCase().includes(d)
        )
      ).slice().sort((S, k) => k.updatedAt.localeCompare(S.updatedAt));
    }), $e = () => t("localAi.now"), ve = () => {
      const d = (/* @__PURE__ */ new Date()).toISOString(), S = {
        id: de("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: d,
        parentId: null,
        childIds: []
      };
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: d,
        updatedAt: d,
        updatedAtLabel: $e(),
        currentNodeId: S.id,
        messages: [S]
      };
    }, E = () => {
      const d = x.value;
      return d ? d.scrollHeight - d.scrollTop - d.clientHeight <= tE : !0;
    }, B = () => {
      const d = E();
      b.value = d, L.value = !d;
    }, Ae = () => {
      B();
    }, Ie = async (d = {}) => {
      await gt(), !(!x.value || !d.force && !b.value) && (le = le || d.force === !0, he === null && (he = window.requestAnimationFrame(() => {
        he = null;
        const k = x.value, $ = le;
        if (le = !1, !k || !$ && !b.value) return;
        const z = Math.max(0, k.scrollHeight - k.clientHeight);
        Math.abs(k.scrollTop - z) > 1 && (k.scrollTop = z), B();
      })));
    }, nt = () => {
      b.value = !0, Ie({ force: !0 });
    }, $t = async () => {
      try {
        A.value = await fd(), I.value = A.value.modelPath ?? "", P.value = await pd(A.value), V.value || (m.value = !1);
      } catch (d) {
        Ht.warn("[LocalAI] refresh chat config failed", d);
      }
    }, Ze = async () => {
      u.value = !0;
      try {
        _.value = await md();
      } catch (d) {
        Ht.warn("[LocalAI] refresh chat status failed", d);
      } finally {
        u.value = !1;
      }
    }, qn = async () => {
      try {
        const d = await rg();
        r.value = d.map((S) => {
          const k = S.messages?.length ? S.messages : S.turns.map((z) => ({
            id: z.id,
            role: z.role,
            content: z.content,
            createdAt: z.createdAt
          })), $ = Me(
            k,
            S.createdAt
          );
          return {
            id: S.id,
            title: S.title,
            createdAt: S.createdAt,
            updatedAt: S.updatedAt,
            updatedAtLabel: new Date(S.updatedAt).toLocaleString(),
            currentNodeId: S.currentNodeId ?? $.currentNodeId,
            messages: $.messages
          };
        }), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (d) {
        Ht.warn("[LocalAI] refresh histories failed", d);
      }
    }, gr = async () => {
      await Promise.all([$t(), Ze(), qn()]);
    }, pn = async () => {
      const d = Te.value;
      if (!d) return;
      const S = Se(d).map((k) => ({
        id: k.id,
        role: k.role,
        content: k.content,
        createdAt: k.createdAt
      }));
      await og({
        id: d.id,
        title: d.title,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        turns: S,
        currentNodeId: d.currentNodeId,
        messages: d.messages
      });
    }, Yn = () => {
      const d = ve();
      r.value.unshift(d), o.value = d.id, s.value = "";
    }, Lr = () => {
      Te.value || Yn();
    }, Cn = (d) => {
      o.value = d;
      const S = Te.value;
      S && !S.currentNodeId && (S.currentNodeId = Z(S.messages, ae(S.messages)?.id) ?? null), b.value = !0, Ie({ force: !0 });
    }, mn = async (d) => {
      r.value = r.value.filter((S) => S.id !== d), await ag(d), o.value === d && (o.value = r.value[0]?.id ?? "");
    }, Zt = () => {
      C.value?.click();
    }, on = (d, S) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: d.name,
      type: S,
      mime: d.type || "application/octet-stream",
      size: d.size,
      status: "pending"
    }), Or = async (d) => {
      if (bs(d)) {
        const k = on(d, "image");
        if (d.size > fg)
          return {
            ...k,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...k,
            status: "parsed",
            dataUrl: await hg(d)
          };
        } catch ($) {
          return { ...k, status: "error", error: String($) };
        }
      }
      if (Xi(d)) {
        const k = on(d, "text");
        if (d.size > dg)
          return {
            ...k,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const $ = await gg(d);
          return {
            ...k,
            status: "parsed",
            text: $.text,
            error: $.truncated ? "truncated" : void 0
          };
        } catch ($) {
          return { ...k, status: "error", error: String($) };
        }
      }
      return {
        ...on(d, "unsupported"),
        status: "error",
        error: mg(d) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, Zn = async (d) => {
      const S = Array.from(d), k = ug - i.value.length;
      if (k <= 0) {
        et.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      S.length > k && et.msg(t("localAi.attachmentLimit"), "warning");
      const $ = S.slice(0, k), z = $.map(
        (K) => on(
          K,
          bs(K) ? "image" : Xi(K) ? "text" : "unsupported"
        )
      );
      i.value.push(...z), await Promise.all(
        $.map(async (K, oe) => {
          const be = await Or(K), xe = i.value.findIndex(
            (mt) => mt.id === z[oe].id
          );
          xe >= 0 && (i.value[xe] = be);
        })
      );
    }, vr = async (d) => {
      const S = d.target;
      S.files?.length && await Zn(S.files), S.value = "";
    }, xr = async (d) => {
      d.dataTransfer?.files.length && await Zn(d.dataTransfer.files);
    }, Rr = async (d) => {
      const S = Array.from(d.clipboardData?.files ?? []);
      if (!S.length) return;
      const k = S.filter(bs);
      k.length && (d.preventDefault(), await Zn(k));
    }, To = (d) => {
      i.value = i.value.filter(
        (S) => S.id !== d
      );
    }, Xn = (d) => d.status === "pending" ? t("localAi.attachmentPending") : d.status === "error" ? d.error ?? "" : d.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), qr = async () => {
      if (!(!A.value || !I.value)) {
        A.value.modelPath = I.value;
        try {
          A.value = await Fo(A.value), _.value?.running && (_.value = await hd()), et.msg(t("localAi.modelChanged"));
        } catch (d) {
          et.msg(`${t("localAi.configSaveFailed")}: ${d}`, "error");
        }
      }
    }, Eo = (d) => {
      let S = 0;
      for (let k = 0; k < d.length; k += 1)
        S = S * 31 + d.charCodeAt(k) >>> 0;
      return `code-${d.length}-${S.toString(16)}`;
    }, Ke = (d) => d.includes("<pre>") ? d.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (S, k, $) => {
        const z = document.createElement("textarea");
        z.innerHTML = $;
        const K = z.value, oe = Eo(K);
        if (_e.set(oe, K), _e.size > rE) {
          const xe = _e.keys().next().value;
          typeof xe == "string" && _e.delete(xe);
        }
        const be = k ? ` class="${k}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${oe}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${be}>${$}</code></pre></div>`;
      }
    ) : d, hn = (d, S = {}) => {
      const k = S.cache !== !1, $ = S.enhanceCodeBlocks !== !1;
      if (k) {
        const oe = ye.get(d);
        if (oe) return oe;
      }
      const z = Zg(He.parse(d, { async: !1 })), K = $ ? Ke(z) : z;
      if (!k) return K;
      if (ye.set(d, K), ye.size > nE) {
        const oe = ye.keys().next().value;
        typeof oe == "string" && ye.delete(oe);
      }
      return K;
    }, Yr = (d, S) => {
      const k = Ao(d, S);
      if (!d.streaming) return hn(k);
      const $ = U.get(d.id), z = S === "reasoning" ? "reasoningHtml" : "answerHtml", K = S === "reasoning" ? "reasoning" : "answer";
      if ($?.[K] === k && $[z])
        return $[z];
      const oe = hn(k, {
        cache: !1,
        enhanceCodeBlocks: !1
      });
      return $?.[K] === k && ($[z] = oe), oe;
    }, Nr = async (d) => {
      const $ = d.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!$) return;
      const z = _e.get($);
      if (z)
        try {
          await navigator.clipboard.writeText(z), et.msg(t("localAi.codeCopied"));
        } catch (K) {
          et.msg(`${t("common.copy")}: ${K}`, "error");
        }
    }, In = (d) => {
      const S = d.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!S || S.index === void 0)
        return { reasoning: "", answer: d };
      const k = d.slice(0, S.index).trim(), $ = S[0], z = d.slice(S.index + $.length).trim();
      return {
        reasoning: (S[1] ?? "").trim(),
        answer: [k, z].filter(Boolean).join(`

`)
      };
    }, Zr = (d) => In(d).reasoning, Pr = (d) => In(d).answer, Ao = (d, S) => {
      const { reasoning: k, answer: $ } = In(d.content);
      if (!d.streaming)
        return U.delete(d.id), S === "reasoning" ? k : $;
      const z = Date.now(), K = U.get(d.id), oe = d.content.length >= lE, be = oe ? sE : aE, xe = oe ? cE : iE;
      if (!K || z - K.updatedAt >= be || d.content.length - K.source.length >= xe || !K.reasoning && !!k || !K.answer && !!$) {
        const ht = {
          source: d.content,
          reasoning: k,
          answer: $,
          updatedAt: z
        };
        return U.set(d.id, ht), S === "reasoning" ? k : $;
      }
      return S === "reasoning" ? K.reasoning : K.answer;
    }, Ut = (d) => !!Pr(d.content), M = (d) => !!(d.streaming && d.allowThinking && d.reasoningStartedAt && !d.reasoningEndedAt && !Ut(d)), te = (d) => {
      if (!d.reasoningStartedAt) return "0.00";
      const S = d.reasoningEndedAt ?? (d.streaming ? Y.value : Date.now());
      return Math.max(0, (S - d.reasoningStartedAt) / 1e3).toFixed(2);
    }, Le = (d) => !d.reasoningStartedAt && d.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: te(d)
    }), ze = (d) => new Date(
      d.createdAt || Te.value?.updatedAt || Date.now()
    ), pt = (d) => ze(d).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Xt = (d, S) => ze(d).toDateString() === ze(S).toDateString(), Mt = (d) => ze(d).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Dt = (d) => {
      const S = Lt.value[d]?.message;
      if (!S) return !1;
      if (d === 0) return !Mt(S);
      const k = Lt.value[d - 1]?.message;
      return k ? Xt(k, S) ? ze(S).getTime() - ze(k).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, Ln = (d) => {
      const S = ze(d), k = S.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), $ = S.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Mt(d) ? $ : `${k} ${$}`;
    }, Xr = (d) => d.streaming ? M(d) ? t("localAi.thinking") : t("localAi.generating") : pt(d), cs = (d) => d.webSearchStatus === "searching" ? t("localAi.webSearchSearching") : d.allowThinking && !d.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Co = (d) => d.webSearchStatus === "searching" ? t("localAi.webSearchSearching") : d.webSearchStatus === "done" && d.webSearchResults?.length ? t("localAi.webSearchUsed", {
      count: d.webSearchResults.length
    }) : d.webSearchStatus === "empty" ? t("localAi.webSearchNoResults") : d.webSearchStatus === "failed" ? `${t("localAi.webSearchFailed")}: ${d.webSearchError ?? ""}` : "", ia = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(
          Tu,
          String(y.value)
        );
      } catch (d) {
        Ht.warn("[LocalAI] save web search state failed", d);
      }
    }, Qr = (d, S) => {
      d.allowThinking && (S.includes("<think>") && !d.reasoningStartedAt && (d.reasoningStartedAt = Date.now()), S.includes("</think>") && !d.reasoningEndedAt && (d.reasoningEndedAt = Date.now()));
    }, On = (d) => {
      const S = d.trim();
      if (!S) return 0;
      const k = (S.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, K = (S.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((oe, be) => /^[A-Za-z0-9_]+$/.test(be) ? oe + Math.max(1, Math.ceil(be.length / 4)) : oe + 1, 0);
      return Math.max(1, Math.ceil(k + K));
    }, ie = (d) => Math.max(0, Math.ceil(d.length / 4)), w = (d) => Array.isArray(d) ? d.filter((S) => S.type === "text").map((S) => S.text).join(`
`) : d, W = (d) => {
      const S = d.attachments?.filter(
        (K) => K.status === "parsed"
      ) ?? [], k = vg(
        d.content,
        S
      ), $ = S.filter(
        (K) => K.type === "image" && K.dataUrl
      );
      if (!$.length) return k;
      const z = [{ type: "text", text: k }];
      for (const K of $)
        z.push({
          type: "image_url",
          image_url: {
            url: K.dataUrl ?? ""
          }
        });
      return z;
    }, re = (d) => On(
      d.map((S) => {
        const k = w(S.content);
        return `${S.role}: ${k}`;
      }).join(`
`)
    ), De = (d, S) => {
      const k = Math.max(240, S * 4);
      return d.length <= k ? d : `${t("localAi.previousAnswerTail")}

${d.slice(-k)}`;
    }, Re = (d) => String(d).padStart(2, "0"), Ue = (d = /* @__PURE__ */ new Date()) => {
      const S = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${-d.getTimezoneOffset() / 60 >= 0 ? "+" : ""}${-d.getTimezoneOffset() / 60}`, k = [
        d.getFullYear(),
        Re(d.getMonth() + 1),
        Re(d.getDate())
      ].join("-"), $ = [
        Re(d.getHours()),
        Re(d.getMinutes()),
        Re(d.getSeconds())
      ].join(":"), z = d.toLocaleDateString("zh-CN", { weekday: "long" });
      return { isoDate: k, localTime: $, timeZone: S, weekday: z };
    }, Qt = () => {
      const { isoDate: d, localTime: S, timeZone: k, weekday: $ } = Ue();
      return {
        role: "system",
        content: [
          "Current runtime context is authoritative.",
          `Current local date: ${d}`,
          `Current local weekday: ${$}`,
          `Current local time: ${S}`,
          `Current timezone: ${k}`,
          "For questions involving today, current date, current time, weather, temperature, news, schedules, or other time-sensitive facts, use this runtime context as the source of truth. Do not infer the current date from model memory or from older search result snippets."
        ].join(`
`)
      };
    }, an = (d, S) => {
      const k = [];
      let $ = 0;
      for (let z = d.length - 1; z >= 0; z -= 1) {
        const K = d[z], oe = re([K]);
        if ($ + oe <= S || k.length === 0) {
          k.unshift(K), $ += oe;
          continue;
        }
        const be = S - $;
        if (K.role !== "assistant" || typeof K.content != "string" || be < Os)
          continue;
        let xe = be, mt = {
          ...K,
          content: De(K.content, xe)
        }, ht = re([mt]);
        for (; ht > be && xe > Os; )
          xe = Math.max(
            Os,
            Math.floor(xe * 0.7)
          ), mt = {
            ...K,
            content: De(K.content, xe)
          }, ht = re([mt]);
        $ + ht <= S && (k.unshift(mt), $ += ht);
      }
      return k;
    }, jt = () => {
      const d = Qt(), S = re([d]), k = Math.max(
        512,
        O.value - S
      );
      return [
        d,
        ...an(
          Xe.value.filter(($) => !$.streaming && $.role !== "system").map(($) => ({
            role: $.role,
            content: $.role === "user" ? W($) : $.content
          })),
          k
        )
      ];
    }, Jr = (d) => {
      const S = Te.value?.messages.find(
        (k) => k.id === d.parentId
      );
      return S?.role === "user" ? S.content.trim() : "";
    }, kt = (d) => {
      const S = Jr(d);
      return [...Xe.value.filter(($) => $.role === "user" && !$.streaming).slice(-4).map(($) => $.content.trim()).filter(Boolean), S].filter(Boolean).join(`
`);
    }, ca = (d) => {
      if (!J.test(d)) return d;
      const { isoDate: S, weekday: k } = Ue();
      return `${d} ${S} ${k}`;
    }, gn = (d, S) => typeof d == "number" ? `${d}${S}` : "未知", Bf = (d) => {
      const { isoDate: S, localTime: k, timeZone: $, weekday: z } = Ue();
      return {
        role: "system",
        content: [
          "Structured weather context is available for this turn.",
          `Authoritative current local date: ${S} (${z})`,
          `Authoritative current local time: ${k} ${$}`,
          `Weather source: ${d.source}`,
          `Weather location: ${d.location}, ${d.country}`,
          `Weather data date: ${d.date}`,
          `Weather data updated at: ${d.time} ${d.timezone}`,
          `Current temperature: ${gn(d.temperature, "°C")}`,
          `Apparent temperature: ${gn(d.apparentTemperature, "°C")}`,
          `Condition: ${d.weatherText}`,
          `Humidity: ${gn(d.humidity, "%")}`,
          `Precipitation: ${gn(d.precipitation, "mm")}`,
          `Wind speed: ${gn(d.windSpeed, "km/h")}`,
          `Today high: ${gn(d.temperatureMax, "°C")}`,
          `Today low: ${gn(d.temperatureMin, "°C")}`,
          `Precipitation probability: ${gn(d.precipitationProbability, "%")}`,
          "For weather, temperature, humidity, wind, rain, and today/date questions, this structured weather context and the authoritative current local date override model memory and stale web snippets."
        ].join(`
`)
      };
    }, Vf = (d) => {
      const { isoDate: S, localTime: k, timeZone: $, weekday: z } = Ue(), K = d.results.map((oe, be) => {
        const xe = oe.content.trim();
        return [
          `[${be + 1}] ${oe.title}`,
          `URL: ${oe.url}`,
          xe ? `摘要: ${xe}` : ""
        ].filter(Boolean).join(`
`);
      }).join(`

`);
      return {
        role: "system",
        content: [
          "Web search context is available for this turn.",
          `Authoritative current local date: ${S} (${z})`,
          `Authoritative current local time: ${k} ${$}`,
          `Search query: ${d.query}`,
          "Use the search results below when they are relevant. Prefer recent factual information from these results, and cite sources with bracket numbers like [1]. If the user asks about today/date/time/weather, the authoritative current date above overrides model memory and any stale search result wording.",
          "",
          K
        ].join(`
`)
      };
    }, Uf = async (d, S) => {
      if (S.webSearchStatus !== "searching") return d;
      const k = Jr(S);
      if (!k) return d;
      const $ = ca(k);
      S.webSearchStatus = "searching", S.webSearchQuery = $, S.webSearchResults = [], S.webSearchError = "";
      const z = [];
      if (H.test(k))
        try {
          const oe = await ng({
            query: kt(S)
          });
          z.push(Bf(oe));
        } catch (oe) {
          Ht.warn("[LocalAI] weather context failed", oe);
        }
      const K = (oe, be) => {
        if (!be.length) return oe;
        const xe = oe.filter(
          (Qe) => Qe.role === "system"
        ), mt = oe.filter(
          (Qe) => Qe.role !== "system"
        ), ht = [...xe, ...be], eo = re(ht), br = Math.max(
          512,
          O.value - eo
        );
        return [
          ...ht,
          ...an(mt, br)
        ];
      };
      try {
        const oe = await vd({
          query: $,
          maxResults: A.value?.webSearchMaxResults
        });
        if (!oe.results.length)
          return S.webSearchStatus = "empty", K(d, z);
        S.webSearchStatus = "done", S.webSearchResults = oe.results;
        const be = Vf(oe);
        return K(d, [
          ...z,
          be
        ]);
      } catch (oe) {
        return S.webSearchStatus = "failed", S.webSearchError = String(oe), Ht.warn("[LocalAI] web search failed", oe), K(d, z);
      }
    }, jf = (d) => {
      const S = A.value?.maxTokens ?? 0;
      if (S > 0) return S;
      const k = re(d);
      return Math.max(256, ut.value - k - 128);
    }, ei = (d) => Math.max(
      1,
      d.stats?.ctxSize ?? d.contextSize ?? A.value?.ctxSize ?? _.value?.ctxSize ?? 4096
    ), $r = (d) => {
      const S = Y.value, k = d.stats?.promptTokens ?? d.promptTokens ?? 0, $ = d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? ie(d.content) : On(d.content)), z = ei(d), K = Math.min(
        d.stats?.totalTokens ?? k + $,
        z
      ), oe = Math.max(
        0,
        (d.stats?.generationTimeMs ?? d.elapsedMs ?? S - ze(d).getTime()) / 1e3
      ), be = d.stats?.tokensPerSecond ?? (oe > 0 ? $ / oe : 0);
      return {
        context: K,
        contextMax: z,
        contextPercent: Math.min(100, Math.round(K / z * 100)),
        output: $,
        outputMax: (A.value?.maxTokens ?? 0) > 0 ? String(A.value?.maxTokens) : "∞",
        seconds: oe.toFixed(1),
        speed: be.toFixed(1)
      };
    }, ti = (d) => d.repetitionStopped ? t("localAi.repetitionStopped") : d.interrupted ? t("localAi.streamInterrupted") : d.stopped ? t("localAi.generationStopped") : (d.stats?.totalTokens ?? (d.promptTokens ?? 0) + (d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? ie(d.content) : On(d.content)))) >= ei(d) - 8 ? t("localAi.contextLimitReached") : d.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", ni = (d) => {
      const S = String(d);
      return /exceeds the available context size|exceed_context_size/i.test(S) ? t("localAi.contextExceeded") : S;
    }, Wf = (d) => {
      const S = d.replace(/\s+/g, " ").trim();
      if (S.length < 900) return !1;
      const $ = S.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((be) => be.toLowerCase()) ?? [];
      if ($.length < 140) return !1;
      const z = $.slice(-120), K = /* @__PURE__ */ new Map();
      for (const be of z) K.set(be, (K.get(be) ?? 0) + 1);
      if (K.size / z.length < 0.12 && [...K.values()].some((be) => be >= 56))
        return !0;
      for (let be = 1; be <= 4; be += 1) {
        const xe = $.slice(-be).join("\0");
        let mt = 1;
        for (let ht = $.length - be * 2; ht >= 0 && $.slice(ht, ht + be).join("\0") === xe; ht -= be)
          mt += 1;
        if (mt >= Math.max(24, Math.ceil(72 / be))) return !0;
      }
      return !1;
    }, ri = () => {
      se || (Y.value = Date.now(), se = setInterval(() => {
        Y.value = Date.now();
      }, dE));
    }, us = () => {
      se && (clearInterval(se), se = null, Y.value = Date.now());
    }, oi = async (d) => {
      const S = performance.now(), k = gd();
      let $ = jt(), z = "", K = null, oe = null, be = !1, xe = !1;
      if (p.value = k, f.value = !1, $ = await Uf($, d), f.value) {
        d.streaming = !1, d.stopped = !0, d.elapsedMs = performance.now() - S, p.value = null;
        return;
      }
      d.promptTokens = re($), d.contextSize = ut.value;
      const mt = async () => {
        if (!z) {
          K = null, oe?.(), oe = null;
          return;
        }
        const Qe = f.value ? 1200 : z.length > 4e3 ? 900 : z.length > 1200 ? 520 : z.length > 240 ? 180 : 64;
        d.content += z.slice(0, Qe), z = z.slice(Qe), d.estimatedCompletionTokens = ie(
          d.content
        ), !xe && !f.value && Wf(d.content) && (xe = !0, f.value = !0, d.repetitionStopped = !0, vs(k).catch(
          (Io) => Ht.warn("[LocalAI] repetition stop failed", Io)
        )), await Ie(), K = window.setTimeout(() => {
          mt().catch(
            (Io) => Ht.warn("[LocalAI] stream pump failed", Io)
          );
        }, uE);
      }, ht = (Qe) => {
        Qe && (Qr(d, Qe), z += Qe, K === null && (K = window.setTimeout(() => {
          mt().catch(
            (Io) => Ht.warn("[LocalAI] stream pump failed", Io)
          );
        }, 32)));
      }, eo = async () => {
        !z && K === null || await new Promise((Qe) => {
          oe = Qe;
        });
      }, br = await tg(
        {
          messages: $,
          maxTokens: jf($),
          enableThinking: d.allowThinking === !0
        },
        (Qe) => {
          be = !0, ht(Qe);
        },
        {
          requestId: k,
          onStats: (Qe) => {
            d.stats = {
              ...d.stats ?? {},
              ...Qe
            }, Qe.ctxSize && (d.contextSize = Qe.ctxSize), Qe.completionTokens !== void 0 && (d.estimatedCompletionTokens = Qe.completionTokens), Y.value = Date.now();
          }
        }
      ).catch(async (Qe) => {
        throw await eo(), Qe;
      });
      if (!be)
        ht(br.content);
      else if (!f.value) {
        const Qe = d.content.length + z.length;
        br.content.length > Qe && ht(br.content.slice(Qe));
      }
      await eo(), !f.value && br.content && d.content !== br.content && (d.content = br.content), d.estimatedCompletionTokens = d.stats?.completionTokens ?? ie(d.content), U.delete(d.id), d.streaming = !1, d.elapsedMs = performance.now() - S, d.stopped = f.value, d.interrupted = !1, d.error = "", Y.value = Date.now(), p.value = null;
    }, Hf = async () => {
      const d = p.value;
      if (!(!l.value || !d || f.value)) {
        f.value = !0;
        try {
          await vs(d);
        } catch (S) {
          Ht.warn("[LocalAI] cancel stream failed", S);
        }
      }
    }, Gf = (d) => {
      d.isComposing || d.keyCode === 229 || d.key === "Enter" && !d.shiftKey && (d.preventDefault(), ai());
    }, Kf = () => {
      if (!s.value.trim() && !i.value.length) return !1;
      if (i.value.find(
        ($) => $.status === "pending"
      ))
        return et.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const S = i.value.find(
        ($) => $.status === "error" || $.type === "unsupported"
      );
      return S ? (et.msg(
        `${t("localAi.attachmentErrorBlock")}: ${S.name}`,
        "warning"
      ), !1) : i.value.some(
        ($) => $.type === "image"
      ) && !st.value ? (et.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, ai = async () => {
      const d = s.value.trim();
      if (l.value || !Kf()) return;
      Lr();
      const S = (/* @__PURE__ */ new Date()).toISOString(), k = i.value.map((xe) => ({
        ...xe
      })), $ = d || k[0]?.name || "", z = Te.value;
      if (!z) return;
      const K = Q(z, {
        id: de("user"),
        role: "user",
        content: d,
        createdAt: S,
        attachments: k
      }), oe = Q(z, {
        id: de("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: K.id,
        streaming: !0,
        allowThinking: m.value && V.value,
        webSearchStatus: y.value ? "searching" : void 0,
        contextSize: ut.value,
        promptTokens: re(jt())
      });
      s.value = "", i.value = [], l.value = !0, ri(), await Ie({ force: !0 });
      const be = performance.now();
      try {
        await oi(oe), Te.value && (Te.value.title = Te.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : Te.value.title, Te.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Te.value.updatedAtLabel = new Date(
          Te.value.updatedAt
        ).toLocaleString(), await pn()), await Ze();
      } catch (xe) {
        if (!f.value) {
          s.value = d, i.value = k;
          const mt = ni(xe);
          et.msg(`${t("localAi.chatFailed")}: ${mt}`, "error"), oe.error = mt, oe.interrupted = !!oe.content.trim(), oe.interrupted || (oe.content = mt), Te.value && (Te.value.title = Te.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : Te.value.title, Te.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Te.value.updatedAtLabel = new Date(
            Te.value.updatedAt
          ).toLocaleString(), await pn());
        }
        oe.streaming = !1, U.delete(oe.id), oe.elapsedMs = performance.now() - be;
      } finally {
        l.value = !1, p.value = null, us(), await Ie();
      }
    }, qf = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Yf = (d) => {
      const S = new Date(d), k = /* @__PURE__ */ new Date(), $ = k.getTime() - S.getTime(), z = 24 * 60 * 60 * 1e3;
      return S.toDateString() === k.toDateString() ? S.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : $ < z * 2 ? t("localAi.yesterday") : $ < z * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor($ / z))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor($ / (z * 7)))
      });
    }, si = async (d) => {
      try {
        await navigator.clipboard.writeText(d.content), et.msg(t("localAi.copied"));
      } catch (S) {
        et.msg(`${t("common.operationFailed")}: ${S}`, "error");
      }
    }, Zf = (d, S) => {
      const k = Pe(d), $ = /* @__PURE__ */ new Set([S]), z = (K) => {
        const oe = k.get(K);
        for (const be of oe?.childIds ?? [])
          $.add(be), z(be);
      };
      return z(S), $;
    }, li = async (d) => {
      const S = Te.value;
      if (!S) return;
      const k = S.messages.find((z) => z.id === d);
      if (!k || pe(k)) return;
      const $ = Zf(S.messages, d);
      S.messages = S.messages.filter((z) => !$.has(z.id)).map((z) => ({
        ...z,
        childIds: (z.childIds ?? []).filter((K) => !$.has(K))
      })), S.currentNodeId && $.has(S.currentNodeId) && (S.currentNodeId = Z(S.messages, k.parentId) ?? ae(S.messages)?.id ?? null), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
    }, ii = (d) => {
      s.value = d.content, Te.value && d.parentId && (Te.value.currentNodeId = d.parentId);
    }, ci = (d) => t("localAi.messageVersion", {
      current: d.siblingCurrentIndex + 1,
      total: d.siblingLeafNodeIds.length
    }), ui = (d, S) => {
      const k = Te.value;
      if (!k) return;
      const $ = d.siblingCurrentIndex + S, z = d.siblingLeafNodeIds[$];
      z && (k.currentNodeId = z, b.value = !0, Ie({ force: !0 }));
    }, Xf = async (d) => {
      const S = Te.value;
      if (!S || l.value) return;
      const k = S.messages.find((xe) => xe.id === d);
      if (!k || k.role !== "assistant") return;
      const $ = ke(S.messages, k.id);
      if (!$.length) return;
      const z = (/* @__PURE__ */ new Date()).toISOString(), K = /* @__PURE__ */ new Map(), oe = $.map((xe, mt) => {
        const ht = de(mt === 0 ? "root" : xe.role);
        return K.set(xe.id, ht), {
          ...xe,
          id: ht,
          parentId: xe.parentId ? K.get(xe.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: xe.attachments?.map((eo) => ({ ...eo }))
        };
      });
      for (let xe = 0; xe < oe.length - 1; xe += 1)
        oe[xe].childIds = [oe[xe + 1].id];
      const be = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${S.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: z,
        updatedAt: z,
        updatedAtLabel: $e(),
        currentNodeId: oe.at(-1)?.id ?? null,
        messages: oe
      };
      r.value.unshift(be), o.value = be.id, s.value = "", i.value = [], b.value = !0, await pn(), await Ie({ force: !0 }), et.msg(t("localAi.branchCreated"));
    }, Qf = async (d) => {
      const S = Te.value;
      if (!S || l.value) return;
      const k = S.messages.find((K) => K.id === d);
      if (!k || k.role !== "assistant" || !k.parentId) return;
      S.currentNodeId = k.parentId;
      const $ = Q(S, {
        id: de("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: k.parentId,
        streaming: !0,
        allowThinking: m.value && V.value,
        webSearchStatus: y.value ? "searching" : void 0,
        promptTokens: re(jt())
      });
      l.value = !0, ri(), await Ie({ force: !0 });
      const z = performance.now();
      try {
        await oi($), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
      } catch (K) {
        if (!f.value) {
          const oe = ni(K);
          et.msg(`${t("localAi.chatFailed")}: ${oe}`, "error"), $.error = oe, $.interrupted = !!$.content.trim(), $.interrupted || ($.content = oe), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
        }
        $.streaming = !1, U.delete($.id), $.elapsedMs = performance.now() - z;
      } finally {
        l.value = !1, p.value = null, us(), await Ie();
      }
    };
    return yt(async () => {
      await gr(), X = setInterval(() => {
        Ze().catch(
          (d) => Ht.warn("[LocalAI] status timer failed", d)
        );
      }, 8e3);
    }), Oe(V, (d) => {
      d || (m.value = !1);
    }), ja(() => {
      X && clearInterval(X), he !== null && (window.cancelAnimationFrame(he), he = null), p.value && vs(p.value), ye.clear(), _e.clear(), U.clear(), us();
    }), (d, S) => (R(), j(
      "main",
      {
        class: q([
          "local-ai-chat-shell",
          c(a) ? "local-ai-chat-shell--sidebar-collapsed" : ""
        ])
      },
      [
        v(
          "aside",
          {
            class: q([
              "chat-sidebar",
              c(a) ? "chat-sidebar--collapsed" : ""
            ])
          },
          [
            v("header", ST, [
              v("div", TT, [
                v(
                  "h2",
                  null,
                  D(c(t)("localAi.chatTitle")),
                  1
                  /* TEXT */
                )
              ]),
              v("button", {
                class: "icon-action-btn sidebar-collapse-btn",
                type: "button",
                title: c(a) ? c(t)("localAi.expandSidebar") : c(t)("localAi.collapseSidebar"),
                "aria-pressed": c(a),
                onClick: S[0] || (S[0] = (k) => a.value = !c(a))
              }, [
                F(c(mi), {
                  theme: "outline",
                  size: "17"
                })
              ], 8, ET)
            ]),
            v("div", AT, [
              v("button", {
                class: "sidebar-nav-item",
                type: "button",
                onClick: Yn
              }, [
                F(c(fs), {
                  theme: "outline",
                  size: "18"
                }),
                v(
                  "span",
                  null,
                  D(c(t)("localAi.newChat")),
                  1
                  /* TEXT */
                )
              ]),
              v("label", CT, [
                F(c(ps), {
                  theme: "outline",
                  size: "18"
                }),
                Ct(v("input", {
                  "onUpdate:modelValue": S[1] || (S[1] = (k) => co(n) ? n.value = k : null),
                  placeholder: c(t)("localAi.searchHistory")
                }, null, 8, IT), [
                  [Ho, c(n)]
                ])
              ])
            ]),
            v("section", LT, [
              v("div", OT, [
                v(
                  "div",
                  xT,
                  D(c(t)("localAi.recent")),
                  1
                  /* TEXT */
                ),
                v("button", {
                  class: "icon-action-btn",
                  type: "button",
                  title: c(t)("plugins.refresh"),
                  onClick: gr
                }, [
                  F(c(hi), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, RT)
              ]),
              c(ne).length ? (R(), j("div", NT, [
                (R(!0), j(
                  ft,
                  null,
                  $n(c(ne), (k) => (R(), j("div", {
                    key: k.id,
                    class: q([
                      "chat-list-item",
                      c(o) === k.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: ($) => Cn(k.id),
                    onKeydown: _n(rt(($) => Cn(k.id), ["prevent"]), ["enter"])
                  }, [
                    v(
                      "span",
                      $T,
                      D(k.title),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      MT,
                      D(Yf(k.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    v("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: rt(($) => mn(k.id), ["stop"])
                    }, [
                      F(c(ua), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, DT)
                  ], 42, PT))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (R(), j(
                "div",
                FT,
                D(c(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            v("footer", zT, [
              v("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: qf
              }, [
                F(c(Ou), {
                  theme: "outline",
                  size: "16"
                }),
                v(
                  "span",
                  null,
                  D(c(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              v("div", BT, [
                v(
                  "span",
                  {
                    class: q([
                      "status-pill",
                      c(_)?.healthy ? "ready" : "stopped"
                    ])
                  },
                  [
                    S[9] || (S[9] = v(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    )),
                    en(
                      " " + D(c(at)),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ])
            ])
          ],
          2
          /* CLASS */
        ),
        v("section", VT, [
          c(a) ? (R(), j("button", {
            key: 0,
            class: "panel-sidebar-toggle",
            type: "button",
            title: c(t)("localAi.expandSidebar"),
            onClick: S[2] || (S[2] = (k) => a.value = !1)
          }, [
            F(c(mi), {
              theme: "outline",
              size: "17"
            })
          ], 8, UT)) : ee("v-if", !0),
          v(
            "div",
            {
              ref_key: "messageListRef",
              ref: x,
              class: "message-list",
              onScroll: Ae
            },
            [
              c(Xe).length ? ee("v-if", !0) : (R(), j("div", jT, [
                F(c(gi), {
                  theme: "outline",
                  size: "28"
                }),
                v(
                  "div",
                  WT,
                  D(c(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                v(
                  "div",
                  HT,
                  D(c(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (R(!0), j(
                ft,
                null,
                $n(c(Lt), (k, $) => (R(), j(
                  ft,
                  {
                    key: k.message.id
                  },
                  [
                    Dt($) ? (R(), j("div", GT, [
                      v(
                        "span",
                        null,
                        D(Ln(k.message)),
                        1
                        /* TEXT */
                      )
                    ])) : ee("v-if", !0),
                    v(
                      "article",
                      {
                        class: q(["message-row", `message-row--${k.message.role}`])
                      },
                      [
                        v("div", KT, [
                          k.message.role === "assistant" ? (R(), me(c(gi), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (R(), j(
                            "span",
                            qT,
                            D(c(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        v("div", YT, [
                          k.message.role === "user" ? (R(), j(
                            ft,
                            { key: 0 },
                            [
                              v("div", ZT, [
                                k.message.content ? (R(), j(
                                  "div",
                                  XT,
                                  D(k.message.content),
                                  1
                                  /* TEXT */
                                )) : ee("v-if", !0),
                                k.message.attachments?.length ? (R(), j("div", QT, [
                                  (R(!0), j(
                                    ft,
                                    null,
                                    $n(k.message.attachments, (z) => (R(), j(
                                      "div",
                                      {
                                        key: z.id,
                                        class: q([
                                          "message-attachment-chip",
                                          z.type === "image" && z.dataUrl ? "message-attachment-chip--image" : ""
                                        ])
                                      },
                                      [
                                        z.type === "image" && z.dataUrl ? (R(), j("figure", {
                                          key: 0,
                                          title: z.name
                                        }, [
                                          v("img", {
                                            src: z.dataUrl,
                                            alt: z.name
                                          }, null, 8, e2)
                                        ], 8, JT)) : (R(), j(
                                          "span",
                                          t2,
                                          D(z.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        z.type === "image" && z.dataUrl ? ee("v-if", !0) : (R(), j(
                                          "span",
                                          n2,
                                          D(z.name),
                                          1
                                          /* TEXT */
                                        ))
                                      ],
                                      2
                                      /* CLASS */
                                    ))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])) : ee("v-if", !0)
                              ]),
                              k.message.streaming ? ee("v-if", !0) : (R(), j("div", r2, [
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (z) => si(k.message)
                                }, [
                                  F(c(fi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, o2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (z) => ii(k.message)
                                }, [
                                  F(c(fs), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, a2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (z) => li(k.message.id)
                                }, [
                                  F(c(ua), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, s2)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (R(), j(
                            ft,
                            { key: 1 },
                            [
                              v("div", l2, [
                                v(
                                  "span",
                                  null,
                                  D(c(_t)),
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? (R(), j(
                                  "small",
                                  i2,
                                  D(Xr(k.message)),
                                  1
                                  /* TEXT */
                                )) : ee("v-if", !0)
                              ]),
                              v(
                                "div",
                                {
                                  class: q(["assistant-card", {
                                    "assistant-card--streaming": k.message.streaming
                                  }])
                                },
                                [
                                  k.message.content ? (R(), j("div", c2, [
                                    k.message.allowThinking && Zr(k.message.content) ? (R(), j("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: k.message.streaming && M(k.message)
                                    }, [
                                      v("summary", null, [
                                        v("span", d2, [
                                          F(c(di), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          en(
                                            " " + D(Le(k.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        k.message.streaming ? (R(), j(
                                          "small",
                                          f2,
                                          D(M(k.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : ee("v-if", !0)
                                      ]),
                                      v("div", {
                                        class: "message-content markdown-body",
                                        onClick: Nr,
                                        innerHTML: Yr(k.message, "reasoning")
                                      }, null, 8, p2)
                                    ], 8, u2)) : ee("v-if", !0),
                                    Pr(k.message.content) ? (R(), j("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: Nr,
                                      innerHTML: Yr(k.message, "answer")
                                    }, null, 8, m2)) : ee("v-if", !0)
                                  ])) : (R(), j(
                                    "div",
                                    h2,
                                    D(cs(k.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              Co(k.message) || k.message.webSearchResults?.length ? (R(), j("div", g2, [
                                v("div", v2, [
                                  F(c(ps), {
                                    theme: "outline",
                                    size: "14"
                                  }),
                                  v(
                                    "span",
                                    null,
                                    D(Co(k.message)),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                k.message.webSearchResults?.length ? (R(), j("div", b2, [
                                  (R(!0), j(
                                    ft,
                                    null,
                                    $n(k.message.webSearchResults, (z, K) => (R(), j("a", {
                                      key: `${z.url}-${K}`,
                                      class: "web-search-source",
                                      href: z.url,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      title: z.url
                                    }, [
                                      v(
                                        "span",
                                        null,
                                        D(K + 1),
                                        1
                                        /* TEXT */
                                      ),
                                      v(
                                        "strong",
                                        null,
                                        D(z.title),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, y2))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])) : ee("v-if", !0)
                              ])) : ee("v-if", !0),
                              k.message.content ? (R(), j("div", _2, [
                                v(
                                  "span",
                                  w2,
                                  D(c(t)("localAi.contextLabel")) + ": " + D($r(k.message).context) + "/" + D($r(k.message).contextMax) + " (" + D($r(k.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  k2,
                                  D(c(t)("localAi.outputLabel")) + ": " + D($r(k.message).output) + "/" + D($r(k.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  S2,
                                  D($r(k.message).seconds) + "s ",
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  T2,
                                  D($r(k.message).speed) + " t/s ",
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? ee("v-if", !0) : (R(), j(
                                  "span",
                                  E2,
                                  D(pt(k.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : ee("v-if", !0),
                              ti(k.message) ? (R(), j(
                                "div",
                                A2,
                                D(ti(k.message)),
                                1
                                /* TEXT */
                              )) : ee("v-if", !0),
                              k.message.streaming ? ee("v-if", !0) : (R(), j("div", C2, [
                                k.siblingLeafNodeIds.length > 1 ? (R(), j("div", {
                                  key: 0,
                                  class: "message-version-switcher",
                                  title: ci(k),
                                  "aria-label": ci(k)
                                }, [
                                  v("button", {
                                    type: "button",
                                    disabled: k.siblingCurrentIndex <= 0,
                                    title: c(t)("localAi.previousVersion"),
                                    onClick: (z) => ui(k, -1)
                                  }, " ‹ ", 8, L2),
                                  v(
                                    "span",
                                    null,
                                    D(k.siblingCurrentIndex + 1) + " / " + D(k.siblingLeafNodeIds.length),
                                    1
                                    /* TEXT */
                                  ),
                                  v("button", {
                                    type: "button",
                                    disabled: k.siblingCurrentIndex >= k.siblingLeafNodeIds.length - 1,
                                    title: c(t)("localAi.nextVersion"),
                                    onClick: (z) => ui(k, 1)
                                  }, " › ", 8, O2)
                                ], 8, I2)) : ee("v-if", !0),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (z) => si(k.message)
                                }, [
                                  F(c(fi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, x2),
                                k.message.role === "assistant" ? (R(), j("button", {
                                  key: 1,
                                  type: "button",
                                  title: c(t)("localAi.regenerate"),
                                  onClick: (z) => Qf(k.message.id)
                                }, [
                                  F(c(hi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, R2)) : ee("v-if", !0),
                                k.message.role === "assistant" ? (R(), j("button", {
                                  key: 2,
                                  type: "button",
                                  title: c(t)("localAi.branchChat"),
                                  onClick: (z) => Xf(k.message.id)
                                }, [
                                  F(c(Sp), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, N2)) : ee("v-if", !0),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (z) => ii(k.message)
                                }, [
                                  F(c(fs), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, P2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (z) => li(k.message.id)
                                }, [
                                  F(c(ua), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, $2)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          ))
                        ])
                      ],
                      2
                      /* CLASS */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          c(L) ? (R(), j("button", {
            key: 1,
            class: "scroll-bottom-btn",
            type: "button",
            title: c(t)("localAi.jumpToLatest"),
            onClick: nt
          }, [
            F(c(pi), {
              theme: "outline",
              size: "15"
            }),
            v(
              "span",
              null,
              D(c(t)("localAi.jumpToLatest")),
              1
              /* TEXT */
            )
          ], 8, M2)) : ee("v-if", !0),
          v(
            "form",
            {
              class: q([
                "chat-input-card",
                c(g) ? "chat-input-card--focused" : ""
              ]),
              onDragover: S[6] || (S[6] = rt(() => {
              }, ["prevent"])),
              onDrop: rt(xr, ["prevent"]),
              onSubmit: rt(ai, ["prevent"]),
              onFocusin: S[7] || (S[7] = (k) => g.value = !0),
              onFocusout: S[8] || (S[8] = (k) => g.value = !1)
            },
            [
              v(
                "input",
                {
                  ref_key: "fileInputRef",
                  ref: C,
                  class: "attachment-input",
                  type: "file",
                  multiple: "",
                  accept: ".txt,.md,.json,.csv,.html,.css,.js,.ts,.tsx,.vue,.rs,.py,.java,.go,.yaml,.yml,.toml,.xml,.log,image/png,image/jpeg,image/webp,.pdf,.doc,.docx,.xls,.xlsx",
                  onChange: vr
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              c(i).length ? (R(), j("div", D2, [
                (R(!0), j(
                  ft,
                  null,
                  $n(c(i), (k) => (R(), j(
                    "div",
                    {
                      key: k.id,
                      class: q([
                        "attachment-preview-item",
                        `attachment-preview-item--${k.status}`
                      ])
                    },
                    [
                      k.type === "image" && k.dataUrl ? (R(), j("img", {
                        key: 0,
                        src: k.dataUrl,
                        alt: k.name
                      }, null, 8, F2)) : (R(), j(
                        "span",
                        z2,
                        D(k.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      v("span", B2, [
                        v(
                          "strong",
                          null,
                          D(k.name),
                          1
                          /* TEXT */
                        ),
                        v(
                          "small",
                          null,
                          D(c(pg)(k.size)) + " · " + D(Xn(k)),
                          1
                          /* TEXT */
                        )
                      ]),
                      v("button", {
                        type: "button",
                        title: c(t)("common.delete"),
                        onClick: ($) => To(k.id)
                      }, [
                        F(c(ua), {
                          theme: "outline",
                          size: "12"
                        })
                      ], 8, V2)
                    ],
                    2
                    /* CLASS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : ee("v-if", !0),
              Ct(v("textarea", {
                "onUpdate:modelValue": S[3] || (S[3] = (k) => co(s) ? s.value = k : null),
                class: "chat-input",
                rows: "2",
                placeholder: c(t)("localAi.chatPlaceholder"),
                onKeydown: Gf,
                onPaste: Rr
              }, null, 40, U2), [
                [Ho, c(s)]
              ]),
              v("div", j2, [
                v("div", W2, [
                  v("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: c(t)("localAi.addAttachment"),
                    onClick: Zt
                  }, [
                    F(c(Tp), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, H2),
                  v("label", G2, [
                    Ct(v("select", {
                      "onUpdate:modelValue": S[4] || (S[4] = (k) => co(I) ? I.value = k : null),
                      disabled: c(l) || !c(wt).length,
                      onChange: qr
                    }, [
                      (R(!0), j(
                        ft,
                        null,
                        $n(c(wt), (k) => (R(), j("option", {
                          key: k,
                          value: k
                        }, D(ct(k)), 9, q2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      c(wt).length ? ee("v-if", !0) : (R(), j(
                        "option",
                        Y2,
                        D(c(_t)),
                        1
                        /* TEXT */
                      ))
                    ], 40, K2), [
                      [bp, c(I)]
                    ]),
                    F(c(pi), {
                      theme: "outline",
                      size: "14"
                    })
                  ]),
                  v("button", {
                    class: q([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      c(y) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: c(y) ? c(t)("localAi.webSearchEnabled") : c(t)("localAi.webSearchDisabled"),
                    "aria-pressed": c(y),
                    onClick: ia
                  }, [
                    F(c(ps), {
                      theme: "outline",
                      size: "15"
                    }),
                    v(
                      "span",
                      null,
                      D(c(t)("localAi.webSearchTitle")),
                      1
                      /* TEXT */
                    )
                  ], 10, Z2),
                  c(V) ? (R(), j("button", {
                    key: 0,
                    class: q([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      c(m) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: c(m) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                    "aria-pressed": c(m),
                    onClick: S[5] || (S[5] = (k) => m.value = !c(m))
                  }, [
                    F(c(di), {
                      theme: "outline",
                      size: "15"
                    }),
                    v(
                      "span",
                      null,
                      D(c(t)("localAi.reasoningTitle")),
                      1
                      /* TEXT */
                    )
                  ], 10, X2)) : ee("v-if", !0)
                ]),
                v("div", Q2, [
                  S[10] || (S[10] = v(
                    "span",
                    { class: "input-hint" },
                    "Enter · Shift + Enter",
                    -1
                    /* HOISTED */
                  )),
                  c(l) ? (R(), j("button", {
                    key: 0,
                    class: "send-btn send-btn--stop",
                    type: "button",
                    title: c(t)("localAi.stopGenerating"),
                    "aria-label": c(t)("localAi.stopGenerating"),
                    onClick: Hf
                  }, [
                    F(c(Ap), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, J2)) : (R(), j("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !c(ge),
                    title: c(t)("localAi.send"),
                    "aria-label": c(t)("localAi.send")
                  }, [
                    F(c(Ep), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, eE))
                ])
              ])
            ],
            34
            /* CLASS, NEED_HYDRATION */
          )
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Jl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, pE = /* @__PURE__ */ Jl(fE, [["__scopeId", "data-v-92c8c54c"]]), mE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pE
}, Symbol.toStringTag, { value: "Module" }));
async function Eu(e = {}) {
  return typeof e == "object" && Object.freeze(e), await It("plugin:dialog|open", { options: e });
}
const hE = ["disabled"], gE = {
  key: 0,
  class: "custom-button__loading"
}, vE = /* @__PURE__ */ ce({
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
    return (n, r) => (R(), j("button", {
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
      e.loading ? (R(), j("div", gE, r[1] || (r[1] = [
        v(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            v("circle", {
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
      Ce(n.$slots, "default", {}, void 0, !0)
    ], 10, hE));
  }
}), Jn = /* @__PURE__ */ Jl(vE, [["__scopeId", "data-v-9497085f"]]), bE = { class: "settings-panel local-ai-settings-shell" }, yE = { class: "local-ai-hero panel-card" }, _E = { class: "panel-title" }, wE = { class: "hero-desc" }, kE = { class: "header-actions" }, SE = {
  key: 0,
  class: "settings-grid"
}, TE = { class: "summary-panel panel-card" }, EE = { class: "status-strip" }, AE = { class: "memory-card" }, CE = { class: "memory-card__header" }, IE = { class: "memory-metrics" }, LE = { class: "bottleneck-row" }, OE = { class: "summary-card" }, xE = { class: "summary-card__title" }, RE = { class: "summary-card__desc" }, NE = { class: "service-controls" }, PE = { class: "service-url" }, $E = { class: "summary-card" }, ME = { class: "summary-card__title" }, DE = { class: "summary-card__desc" }, FE = { class: "summary-meta" }, zE = { class: "form-panel panel-card" }, BE = { class: "settings-section" }, VE = { class: "settings-section__header" }, UE = { class: "field-stack" }, jE = ["title"], WE = { class: "path-control" }, HE = ["title"], GE = ["title"], KE = ["title"], qE = { class: "path-control" }, YE = ["placeholder"], ZE = { class: "settings-section grid-two" }, XE = { class: "settings-section__header" }, QE = { class: "param-grid" }, JE = ["title"], eA = ["title"], tA = ["title"], nA = ["title"], rA = ["title"], oA = ["title"], aA = { class: "settings-section grid-two" }, sA = { class: "settings-section__header" }, lA = { class: "switch-grid" }, iA = ["title"], cA = ["title"], uA = ["title"], dA = { class: "settings-section grid-two" }, fA = { class: "settings-section__header" }, pA = { class: "switch-grid switch-grid--two" }, mA = ["title"], hA = ["title"], gA = ["title"], vA = ["title"], bA = { class: "settings-section grid-two" }, yA = { class: "settings-section__header" }, _A = { class: "param-grid param-grid--three" }, wA = ["title"], kA = ["title"], SA = ["title"], TA = ["title"], EA = ["title"], AA = ["title"], CA = ["title"], IA = ["title"], LA = { class: "settings-section grid-two" }, OA = { class: "settings-section__header" }, xA = { class: "param-grid" }, RA = ["title"], NA = ["title"], PA = { class: "settings-footer" }, $A = ["title"], MA = /* @__PURE__ */ ce({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = ta(), n = G(null), r = G(null), o = G(null), a = G(null), s = G(!1), i = G(!1), l = G(!1), u = G(!1), f = G(!1), m = G(!1);
    let h = null;
    const y = N(() => !!a.value?.selectedModelPath), g = N(() => !!n.value?.mmprojPath), b = N({
      get: () => n.value?.modelPath ?? "",
      set: (ae) => {
        n.value && (n.value.modelPath = ae || void 0);
      }
    }), L = N({
      get: () => n.value?.mmprojPath ?? "",
      set: (ae) => {
        n.value && (n.value.mmprojPath = ae || void 0);
      }
    }), p = N(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), A = N(
      () => y.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), P = N(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), I = (ae) => ae.split(/[\\/]+/).pop() ?? ae, _ = N(() => {
      const Z = I(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return Z ? Number(Z[1]) : 4;
    }), x = N(() => {
      const ae = n.value;
      if (!ae)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const Z = Math.max(1.4, _.value * 0.92), Me = Math.min(1, Math.max(0, ae.gpuLayers) / 32), ke = ae.ctxSize / 8192 * 0.38 * (ae.kvOffload ? 1 : 0.12), Se = ae.batchSize / 512 * 0.18, we = Z * Me + ke + Se, Q = Z * (1 - Me) + ae.ctxSize / 8192 * 0.22, ge = we + Q, at = ae.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : ae.ctxSize >= 32768 || ae.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: we.toFixed(2),
        totalGb: ge.toFixed(2),
        bottleneck: at
      };
    }), C = (ae) => t(`localAi.paramHints.${ae}`), Y = async () => {
      r.value = await Qh();
    }, X = async () => {
      o.value = await md();
    }, se = async () => {
      n.value && (a.value = await pd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, he = async () => {
      s.value = !0;
      try {
        n.value = await fd(), await Promise.all([Y(), se(), X()]);
      } catch (ae) {
        Ht.error("[LocalAI] refresh settings failed", ae), et.msg(`${t("localAi.refreshFailed")}: ${ae}`, "error");
      } finally {
        s.value = !1;
      }
    }, le = async () => {
      if (n.value)
        try {
          await Fo(n.value);
        } catch (ae) {
          Ht.warn("[LocalAI] autosave failed", ae);
        }
    }, ye = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Fo(n.value), await Promise.all([Y(), se(), X()]), et.msg(t("localAi.configSaved"));
        } catch (ae) {
          et.msg(`${t("localAi.configSaveFailed")}: ${ae}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, _e = async () => {
      const ae = await Eu({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !ae || Array.isArray(ae) || !n.value || (n.value.modelDir = ae, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await se());
    }, U = async () => {
      const ae = await Eu({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !ae || Array.isArray(ae) || !n.value || (n.value.runtimePath = ae, await le(), await Y());
    }, J = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Fo(n.value), o.value = await Jh(n.value), et.msg(t("localAi.serviceStarted"));
        } catch (ae) {
          et.msg(`${t("localAi.serviceStartFailed")}: ${ae}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, H = async () => {
      u.value = !0;
      try {
        await ye(), o.value = await hd(), et.msg(t("localAi.serviceRestarted"));
      } catch (ae) {
        et.msg(`${t("localAi.serviceRestartFailed")}: ${ae}`, "error");
      } finally {
        u.value = !1;
      }
    }, de = async () => {
      f.value = !0;
      try {
        await eg(), await X(), et.msg(t("localAi.serviceStoppedMsg"));
      } catch (ae) {
        et.msg(`${t("localAi.serviceStopFailed")}: ${ae}`, "error");
      } finally {
        f.value = !1;
      }
    }, pe = async () => {
      if (n.value) {
        m.value = !0;
        try {
          n.value = await Fo(n.value);
          const ae = await vd({
            query: t("localAi.webSearchTestQuery"),
            maxResults: 1
          });
          et.msg(
            ae.results.length ? t("localAi.webSearchTestSuccess", {
              count: ae.results.length
            }) : t("localAi.webSearchTestEmpty")
          );
        } catch (ae) {
          Ht.warn("[LocalAI] web search test failed", ae), et.msg(`${t("localAi.webSearchTestFailed")}: ${ae}`, "error");
        } finally {
          m.value = !1;
        }
      }
    }, Pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return yt(async () => {
      await he(), h = setInterval(() => {
        X().catch(
          (ae) => Ht.warn("[LocalAI] status refresh failed", ae)
        );
      }, 5e3);
    }), ja(() => {
      h && clearInterval(h);
    }), (ae, Z) => {
      const Me = BS, ke = zS, Se = SS, we = KS;
      return R(), j("div", bE, [
        v("header", yE, [
          v("div", null, [
            v(
              "h3",
              _E,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            v(
              "p",
              wE,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          v("div", kE, [
            F(c(Jn), {
              size: "small",
              plain: "",
              onClick: Pe
            }, {
              default: fe(() => [
                en(
                  D(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            F(c(Jn), {
              size: "small",
              loading: c(s),
              onClick: he
            }, {
              default: fe(() => [
                en(
                  D(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (R(), j("main", SE, [
          v("aside", TE, [
            v("div", EE, [
              v(
                "div",
                {
                  class: q(["status-item", { ready: c(r)?.available }])
                },
                [
                  Z[27] || (Z[27] = v(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  v(
                    "span",
                    null,
                    D(c(p)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              v(
                "div",
                {
                  class: q(["status-item", { ready: c(y) }])
                },
                [
                  Z[28] || (Z[28] = v(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  v(
                    "span",
                    null,
                    D(c(A)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              v(
                "div",
                {
                  class: q(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  Z[29] || (Z[29] = v(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  v(
                    "span",
                    null,
                    D(c(P)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            v("section", AE, [
              v("div", CE, [
                v(
                  "span",
                  null,
                  D(c(t)("localAi.estimatedMemory")),
                  1
                  /* TEXT */
                ),
                v(
                  "small",
                  null,
                  D(c(t)("localAi.estimateBeta")),
                  1
                  /* TEXT */
                )
              ]),
              v("div", IE, [
                v("div", null, [
                  Z[30] || (Z[30] = v(
                    "span",
                    null,
                    "GPU",
                    -1
                    /* HOISTED */
                  )),
                  v(
                    "b",
                    null,
                    D(c(x).gpuGb) + " GB",
                    1
                    /* TEXT */
                  )
                ]),
                v("div", null, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.total")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "b",
                    null,
                    D(c(x).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              v("div", LE, [
                v(
                  "span",
                  null,
                  D(c(t)("localAi.bottleneck")),
                  1
                  /* TEXT */
                ),
                v(
                  "b",
                  null,
                  D(c(x).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            v("section", OE, [
              v(
                "div",
                xE,
                D(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              v(
                "div",
                RE,
                D(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              v("div", NE, [
                F(c(Jn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: J
                }, {
                  default: fe(() => [
                    en(
                      D(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(Jn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: H
                }, {
                  default: fe(() => [
                    en(
                      D(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(Jn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: de
                }, {
                  default: fe(() => [
                    en(
                      D(c(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              v(
                "div",
                PE,
                D(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            v("section", $E, [
              v(
                "div",
                ME,
                D(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              v(
                "div",
                DE,
                D(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              v("div", FE, [
                v("div", null, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "b",
                    null,
                    D(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                v("div", null, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "b",
                    null,
                    D(c(y) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                v("div", null, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "b",
                    null,
                    D(c(b) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                v("div", null, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "b",
                    null,
                    D(c(L) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                v("div", null, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "b",
                    null,
                    D(c(g) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                v("div", null, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "b",
                    null,
                    D(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          v("section", zE, [
            v("div", BE, [
              v("div", VE, [
                v("div", null, [
                  v(
                    "h4",
                    null,
                    D(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "p",
                    null,
                    D(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              v("div", UE, [
                v("label", {
                  class: "field-row",
                  title: C("modelDir")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  v("div", WE, [
                    Ct(v(
                      "input",
                      {
                        "onUpdate:modelValue": Z[0] || (Z[0] = (Q) => c(n).modelDir = Q),
                        class: "text-input",
                        onChange: se
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Ho, c(n).modelDir]
                    ]),
                    F(c(Jn), {
                      size: "small",
                      plain: "",
                      onClick: _e
                    }, {
                      default: fe(() => [
                        en(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, jE),
                v("label", {
                  class: "field-row",
                  title: C("mainModel")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  F(ke, {
                    modelValue: c(b),
                    "onUpdate:modelValue": Z[1] || (Z[1] = (Q) => co(b) ? b.value = Q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: le
                  }, {
                    default: fe(() => [
                      (R(!0), j(
                        ft,
                        null,
                        $n(c(a)?.mainModels ?? [], (Q) => (R(), me(Me, {
                          key: Q,
                          label: I(Q),
                          value: Q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, HE),
                v("label", {
                  class: "field-row",
                  title: C("mmprojModel")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  F(ke, {
                    modelValue: c(L),
                    "onUpdate:modelValue": Z[2] || (Z[2] = (Q) => co(L) ? L.value = Q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: le
                  }, {
                    default: fe(() => [
                      (R(!0), j(
                        ft,
                        null,
                        $n(c(a)?.mmprojModels ?? [], (Q) => (R(), me(Me, {
                          key: Q,
                          label: I(Q),
                          value: Q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, GE),
                v("label", {
                  class: "field-row",
                  title: C("runtimePath")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  v("div", qE, [
                    Ct(v("input", {
                      "onUpdate:modelValue": Z[3] || (Z[3] = (Q) => c(n).runtimePath = Q),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, YE), [
                      [Ho, c(n).runtimePath]
                    ]),
                    F(c(Jn), {
                      size: "small",
                      plain: "",
                      onClick: U
                    }, {
                      default: fe(() => [
                        en(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, KE)
              ])
            ]),
            v("div", ZE, [
              v("div", XE, [
                v("div", null, [
                  v(
                    "h4",
                    null,
                    D(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "p",
                    null,
                    D(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              v("div", QE, [
                v("label", {
                  class: "number-field",
                  title: C("ctxSize")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": Z[4] || (Z[4] = (Q) => c(n).ctxSize = Q),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, JE),
                v("label", {
                  class: "number-field",
                  title: C("gpuLayers")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": Z[5] || (Z[5] = (Q) => c(n).gpuLayers = Q),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, eA),
                v("label", {
                  class: "number-field",
                  title: C("threads")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": Z[6] || (Z[6] = (Q) => c(n).threads = Q),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, tA),
                v("label", {
                  class: "number-field",
                  title: C("batchSize")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": Z[7] || (Z[7] = (Q) => c(n).batchSize = Q),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, nA),
                v("label", {
                  class: "number-field",
                  title: C("ubatchSize")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": Z[8] || (Z[8] = (Q) => c(n).ubatchSize = Q),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, rA),
                v("label", {
                  class: "number-field",
                  title: C("mainGpu")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": Z[9] || (Z[9] = (Q) => c(n).mainGpu = Q),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, oA)
              ])
            ]),
            v("div", aA, [
              v("div", sA, [
                v("div", null, [
                  v(
                    "h4",
                    null,
                    D(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "p",
                    null,
                    D(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              v("div", lA, [
                v("label", {
                  title: C("flashAttn")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  F(we, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": Z[10] || (Z[10] = (Q) => c(n).flashAttn = Q)
                  }, null, 8, ["modelValue"])
                ], 8, iA),
                v("label", {
                  title: C("kvOffload")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  F(we, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": Z[11] || (Z[11] = (Q) => c(n).kvOffload = Q)
                  }, null, 8, ["modelValue"])
                ], 8, cA),
                v("label", {
                  title: C("mmap")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  F(we, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": Z[12] || (Z[12] = (Q) => c(n).mmap = Q)
                  }, null, 8, ["modelValue"])
                ], 8, uA)
              ])
            ]),
            v("div", dA, [
              v("div", fA, [
                v("div", null, [
                  v(
                    "h4",
                    null,
                    D(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "p",
                    null,
                    D(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              v("div", pA, [
                v("label", {
                  title: C("autoStart")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  F(we, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": Z[13] || (Z[13] = (Q) => c(n).autoStartOnRequest = Q)
                  }, null, 8, ["modelValue"])
                ], 8, mA),
                v("label", {
                  title: C("keepAlive")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  F(we, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": Z[14] || (Z[14] = (Q) => c(n).keepAlive = Q)
                  }, null, 8, ["modelValue"])
                ], 8, hA),
                v("label", {
                  class: "number-field",
                  title: C("idleTimeout")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": Z[15] || (Z[15] = (Q) => c(n).idleTimeoutMinutes = Q),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, gA),
                v("label", {
                  class: "number-field",
                  title: C("requestTimeout")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": Z[16] || (Z[16] = (Q) => c(n).requestTimeoutSecs = Q),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, vA)
              ])
            ]),
            v("div", bA, [
              v("div", yA, [
                v("div", null, [
                  v(
                    "h4",
                    null,
                    D(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "p",
                    null,
                    D(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              v("div", _A, [
                v("label", {
                  class: "number-field",
                  title: C("temperature")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": Z[17] || (Z[17] = (Q) => c(n).temperature = Q),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, wA),
                v("label", {
                  class: "number-field",
                  title: C("topP")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": Z[18] || (Z[18] = (Q) => c(n).topP = Q),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, kA),
                v("label", {
                  class: "number-field",
                  title: C("topK")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": Z[19] || (Z[19] = (Q) => c(n).topK = Q),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, SA),
                v("label", {
                  class: "number-field",
                  title: C("minP")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": Z[20] || (Z[20] = (Q) => c(n).minP = Q),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, TA),
                v("label", {
                  class: "number-field",
                  title: C("repeatPenalty")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": Z[21] || (Z[21] = (Q) => c(n).repeatPenalty = Q),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, EA),
                v("label", {
                  class: "number-field",
                  title: C("repeatLastN")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": Z[22] || (Z[22] = (Q) => c(n).repeatLastN = Q),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AA),
                v("label", {
                  class: "number-field",
                  title: C("maxTokens")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": Z[23] || (Z[23] = (Q) => c(n).maxTokens = Q),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, CA),
                v("label", {
                  class: "number-field",
                  title: C("port")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": Z[24] || (Z[24] = (Q) => c(n).port = Q),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, IA)
              ])
            ]),
            v("div", LA, [
              v("div", OA, [
                v("div", null, [
                  v(
                    "h4",
                    null,
                    D(c(t)("localAi.webSearch")),
                    1
                    /* TEXT */
                  ),
                  v(
                    "p",
                    null,
                    D(c(t)("localAi.webSearchDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                F(c(Jn), {
                  size: "small",
                  plain: "",
                  loading: c(m),
                  onClick: pe
                }, {
                  default: fe(() => [
                    en(
                      D(c(t)("localAi.webSearchTest")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])
              ]),
              v("div", xA, [
                v("label", {
                  class: "number-field",
                  title: C("webSearchMaxResults")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.webSearchMaxResults")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).webSearchMaxResults,
                    "onUpdate:modelValue": Z[25] || (Z[25] = (Q) => c(n).webSearchMaxResults = Q),
                    min: 1,
                    max: 10,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, RA),
                v("label", {
                  class: "number-field",
                  title: C("webSearchTimeoutSecs")
                }, [
                  v(
                    "span",
                    null,
                    D(c(t)("localAi.webSearchTimeoutSecs")),
                    1
                    /* TEXT */
                  ),
                  F(Se, {
                    modelValue: c(n).webSearchTimeoutSecs,
                    "onUpdate:modelValue": Z[26] || (Z[26] = (Q) => c(n).webSearchTimeoutSecs = Q),
                    min: 3,
                    max: 60,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, NA)
              ])
            ]),
            v("div", PA, [
              F(c(Jn), {
                type: "primary",
                loading: c(i),
                onClick: ye
              }, {
                default: fe(() => [
                  en(
                    D(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (R(), j("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, D(c(o).commandLine), 9, $A)) : ee("v-if", !0)
            ])
          ])
        ])) : ee("v-if", !0)
      ]);
    };
  }
}), DA = /* @__PURE__ */ Jl(MA, [["__scopeId", "data-v-c5639815"]]), FA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DA
}, Symbol.toStringTag, { value: "Module" }));
export {
  VA as activate,
  VA as default
};
