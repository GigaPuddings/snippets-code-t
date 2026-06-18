var ep = Object.defineProperty;
var tp = (e, t, n) => t in e ? ep(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qe = (e, t, n) => tp(e, typeof t != "symbol" ? t + "" : t, n);
import * as fs from "vue";
import { inject as Ge, createVNode as F, defineAsyncComponent as np, ref as G, shallowRef as Sr, computed as N, watch as Oe, onMounted as _t, onUnmounted as Wa, defineComponent as ce, h as Cu, Text as Iu, Fragment as ft, getCurrentInstance as Kt, unref as c, watchEffect as Lu, readonly as rl, getCurrentScope as rp, onScopeDispose as op, nextTick as vt, isRef as co, warn as ap, provide as jn, createElementBlock as U, openBlock as R, mergeProps as uo, renderSlot as Ce, createElementVNode as v, toRef as nr, useAttrs as sp, useSlots as lp, normalizeStyle as Nt, normalizeClass as q, createCommentVNode as ee, createBlock as me, withCtx as fe, resolveDynamicComponent as Ht, withModifiers as rt, toDisplayString as D, onBeforeUnmount as Hn, Transition as ko, withDirectives as Ct, vShow as ur, reactive as Br, onActivated as ip, onUpdated as Ou, cloneVNode as cp, Comment as up, Teleport as dp, onBeforeMount as fp, onDeactivated as pp, createTextVNode as tn, withKeys as yn, createSlots as mp, toRaw as hp, toRefs as ol, resolveComponent as Dr, resolveDirective as gp, toHandlerKey as vp, renderList as Pn, vModelText as Ho, shallowReactive as bp, isVNode as Go, render as La, vModelSelect as yp } from "vue";
var _p = {
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
function wp() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function kp(e, t, n) {
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
var Sp = Symbol("icon-context");
function on(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = wp(), i = Ge(Sp, _p);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, m = a.strokeLinejoin, h = a.theme, y = a.fill, g = a.spin, b = kp(s, {
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
const fi = on("brain", !0, function(e) {
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
}), pi = on("copy", !0, function(e) {
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
}), da = on("delete", !1, function(e) {
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
}), mi = on("down", !1, function(e) {
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
}), ps = on("edit", !0, function(e) {
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
}), Tp = on("fork", !1, function(e) {
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
}), hi = on("left-bar", !0, function(e) {
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
}), Ep = on("link", !0, function(e) {
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
}), gi = on("refresh", !0, function(e) {
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
}), vi = on("robot", !0, function(e) {
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
}), ms = on("search", !0, function(e) {
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
}), Ap = on("send", !0, function(e) {
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
}), xu = on("setting-two", !1, function(e) {
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
}), Cp = on("square", !1, function(e) {
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
}), jA = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => hE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: xu,
    component: np(() => Promise.resolve().then(() => zA))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ip(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const bi = typeof window < "u", Wr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Lp = (e, t, n) => Op({ l: e, k: t, s: n }), Op = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ot = (e) => typeof e == "number" && isFinite(e), xp = (e) => al(e) === "[object Date]", Oa = (e) => al(e) === "[object RegExp]", Ha = (e) => Be(e) && Object.keys(e).length === 0, Pt = Object.assign, Rp = Object.create, Ye = (e = null) => Rp(e);
let yi;
const Ta = () => yi || (yi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ye());
function _i(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function wi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Np(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${wi(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${wi(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Pp = Object.prototype.hasOwnProperty;
function _n(e, t) {
  return Pp.call(e, t);
}
const yt = Array.isArray, lt = (e) => typeof e == "function", ue = (e) => typeof e == "string", bt = (e) => typeof e == "boolean", Ve = (e) => e !== null && typeof e == "object", $p = (e) => Ve(e) && lt(e.then) && lt(e.catch), Ru = Object.prototype.toString, al = (e) => Ru.call(e), Be = (e) => al(e) === "[object Object]", Mp = (e) => e == null ? "" : yt(e) || Be(e) && e.toString === Ru ? JSON.stringify(e, null, 2) : String(e);
function sl(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const fa = (e) => !Ve(e) || yt(e);
function Ea(e, t) {
  if (fa(e) || fa(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Ve(r[a]) && !Ve(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Ye()), fa(o[a]) || fa(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Dp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Rs(e, t, n) {
  return { start: e, end: t };
}
const Ue = {
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
}, Fp = 17;
function Ga(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function zp(e) {
  throw e;
}
const On = " ", Bp = "\r", Bt = `
`, Vp = "\u2028", jp = "\u2029";
function Up(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (C) => t[C] === Bp && t[C + 1] === Bt, i = (C) => t[C] === Bt, l = (C) => t[C] === jp, u = (C) => t[C] === Vp, f = (C) => s(C) || i(C) || l(C) || u(C), m = () => n, h = () => r, y = () => o, g = () => a, b = (C) => s(C) || l(C) || u(C) ? Bt : t[C], L = () => b(n), p = () => b(n + a);
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
const Xn = void 0, Wp = ".", ki = "'", Hp = "tokenizer";
function Gp(e, t = {}) {
  const n = t.location !== !1, r = Up(e), o = () => r.index(), a = () => Dp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
      const ve = n ? Rs($e.startLoc, O) : null, E = Ga(T, ve, {
        domain: Hp,
        args: ne
      });
      f(E);
    }
  }
  function h(T, O, V) {
    T.endLoc = a(), T.currentType = O;
    const ne = { type: O };
    return n && (ne.loc = Rs(T.startLoc, T.endLoc)), V != null && (ne.value = V), ne;
  }
  const y = (T) => h(
    T,
    13
    /* TokenTypes.EOF */
  );
  function g(T, O) {
    return T.currentChar() === O ? (T.next(), O) : (m(Ue.EXPECTED_TOKEN, a(), 0, O), "");
  }
  function b(T) {
    let O = "";
    for (; T.currentPeek() === On || T.currentPeek() === Bt; )
      O += T.currentPeek(), T.peek();
    return O;
  }
  function L(T) {
    const O = b(T);
    return T.skipToPeek(), O;
  }
  function p(T) {
    if (T === Xn)
      return !1;
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O === 95;
  }
  function A(T) {
    if (T === Xn)
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
    const ne = T.currentPeek() === ki;
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
      return ve === "{" ? p(T.peek()) : ve === "@" || ve === "|" || ve === ":" || ve === "." || ve === On || !ve ? !1 : ve === Bt ? (T.peek(), ne()) : he(T, !1);
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
      return E === "{" || E === "@" || !E ? $e : E === "|" ? !(ve === On || ve === Bt) : E === On ? (T.peek(), V(!0, On)) : E === Bt ? (T.peek(), V(!0, Bt)) : !0;
    }, ne = V();
    return O && T.resetPeek(), ne;
  }
  function le(T, O) {
    const V = T.currentChar();
    return V === Xn ? Xn : O(V) ? (T.next(), V) : null;
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
  function j(T) {
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36 || // $
    O === 45;
  }
  function J(T) {
    return le(T, j);
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
      if (V === On || V === Bt)
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
    if (ne && ne !== "}" && ne !== Xn && ne !== On && ne !== Bt && ne !== "　") {
      const $e = Te(T);
      return m(Ue.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V + $e), V + $e;
    }
    return T.currentChar() === Xn && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), V;
  }
  function ke(T) {
    L(T);
    let O = "";
    return T.currentChar() === "-" ? (T.next(), O += `-${ae(T)}`) : O += ae(T), T.currentChar() === Xn && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), O;
  }
  function Se(T) {
    return T !== ki && T !== Bt;
  }
  function we(T) {
    L(T), g(T, "'");
    let O = "", V = "";
    for (; O = le(T, Se); )
      O === "\\" ? V += Q(T) : V += O;
    const ne = T.currentChar();
    return ne === Bt || ne === Xn ? (m(Ue.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ne === Bt && (T.next(), g(T, "'")), V) : (g(T, "'"), V);
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
        return m(Ue.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, O), "";
    }
  }
  function ge(T, O, V) {
    g(T, O);
    let ne = "";
    for (let $e = 0; $e < V; $e++) {
      const ve = Pe(T);
      if (!ve) {
        m(Ue.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${O}${ne}${T.currentChar()}`);
        break;
      }
      ne += ve;
    }
    return `\\${O}${ne}`;
  }
  function at(T) {
    return T !== "{" && T !== "}" && T !== On && T !== Bt;
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
      return ne === "{" || ne === "@" || ne === "|" || ne === "(" || ne === ")" || !ne || ne === On ? V : (V += ne, T.next(), O(V));
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
  function wt(T, O) {
    let V = null;
    switch (T.currentChar()) {
      case "{":
        return O.braceNest >= 1 && m(Ue.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), T.next(), V = h(
          O,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), L(T), O.braceNest++, V;
      case "}":
        return O.braceNest > 0 && O.currentType === 2 && m(Ue.EMPTY_PLACEHOLDER, a(), 0), T.next(), V = h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), O.braceNest--, O.braceNest > 0 && L(T), O.inLinked && O.braceNest === 0 && (O.inLinked = !1), V;
      case "@":
        return O.braceNest > 0 && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), V = kt(T, O) || y(O), O.braceNest = 0, V;
      default: {
        let $e = !0, ve = !0, E = !0;
        if (se(T))
          return O.braceNest > 0 && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), V = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, V;
        if (O.braceNest > 0 && (O.currentType === 4 || O.currentType === 5 || O.currentType === 6))
          return m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), O.braceNest = 0, st(T, O);
        if ($e = P(T, O))
          return V = h(O, 4, Me(T)), L(T), V;
        if (ve = I(T, O))
          return V = h(O, 5, ke(T)), L(T), V;
        if (E = _(T, O))
          return V = h(O, 6, we(T)), L(T), V;
        if (!$e && !ve && !E)
          return V = h(O, 12, Te(T)), m(Ue.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V.value), L(T), V;
        break;
      }
    }
    return V;
  }
  function kt(T, O) {
    const { currentType: V } = O;
    let ne = null;
    const $e = T.currentChar();
    switch ((V === 7 || V === 8 || V === 11 || V === 9) && ($e === Bt || $e === On) && m(Ue.INVALID_LINKED_FORMAT, a(), 0), $e) {
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
        return se(T) ? (ne = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, ne) : x(T, O) || Y(T, O) ? (L(T), kt(T, O)) : C(T, O) ? (L(T), h(O, 11, Xe(T))) : X(T, O) ? (L(T), $e === "{" ? wt(T, O) || ne : h(O, 10, Lt(T))) : (V === 7 && m(Ue.INVALID_LINKED_FORMAT, a(), 0), O.braceNest = 0, O.inLinked = !1, st(T, O));
    }
  }
  function st(T, O) {
    let V = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (O.braceNest > 0)
      return wt(T, O) || y(O);
    if (O.inLinked)
      return kt(T, O) || y(O);
    switch (T.currentChar()) {
      case "{":
        return wt(T, O) || y(O);
      case "}":
        return m(Ue.UNBALANCED_CLOSING_BRACE, a(), 0), T.next(), h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return kt(T, O) || y(O);
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
    return l.lastType = T, l.lastOffset = O, l.lastStartLoc = V, l.lastEndLoc = ne, l.offset = o(), l.startLoc = a(), r.currentChar() === Xn ? h(
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
const Kp = "parser", qp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Yp(e, t, n) {
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
function Zp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(p, A, P, I, ..._) {
    const x = p.currentPosition();
    if (x.offset += I, x.column += I, n) {
      const C = t ? Rs(P, x) : null, Y = Ga(A, C, {
        domain: Kp,
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
    return x.value = A.replace(qp, Yp), p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function f(p) {
    const A = p.nextToken(), P = p.context(), { lastOffset: I, lastStartLoc: _ } = P, x = o(8, I, _);
    return A.type !== 11 ? (r(p, Ue.UNEXPECTED_EMPTY_LINKED_MODIFIER, P.lastStartLoc, 0), x.value = "", a(x, I, _), {
      nextConsumeToken: A,
      node: x
    }) : (A.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, xn(A)), x.value = A.value || "", a(x, p.currentOffset(), p.currentPosition()), {
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
    switch (I.type !== 9 && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(I)), I = p.nextToken(), I.type === 2 && (I = p.nextToken()), I.type) {
      case 10:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(I)), P.key = m(p, I.value || "");
        break;
      case 4:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(I)), P.key = l(p, I.value || "");
        break;
      case 5:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(I)), P.key = i(p, I.value || "");
        break;
      case 6:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(I)), P.key = u(p, I.value || "");
        break;
      default: {
        r(p, Ue.UNEXPECTED_EMPTY_LINKED_KEY, A.lastStartLoc, 0);
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
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(X)), _.items.push(s(p, X.value || ""));
          break;
        case 5:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(X)), _.items.push(i(p, X.value || ""));
          break;
        case 4:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(X)), _.items.push(l(p, X.value || ""));
          break;
        case 6:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, xn(X)), _.items.push(u(p, X.value || ""));
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
    return x && r(p, Ue.MUST_HAVE_MESSAGES_IN_PLURAL, P, 0), a(C, p.currentOffset(), p.currentPosition()), C;
  }
  function b(p) {
    const A = p.context(), { offset: P, startLoc: I } = A, _ = y(p);
    return A.currentType === 13 ? _ : g(p, P, I, _);
  }
  function L(p) {
    const A = Gp(p, Pt({}, e)), P = A.context(), I = o(0, P.offset, P.startLoc);
    return t && I.loc && (I.loc.source = p), I.body = b(A), e.onCacheKey && (I.cacheKey = e.onCacheKey(p)), P.currentType !== 13 && r(A, Ue.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, p[P.offset] || ""), a(I, A.currentOffset(), A.currentPosition()), I;
  }
  return { parse: L };
}
function xn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Xp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Si(e, t) {
  for (let n = 0; n < e.length; n++)
    ll(e[n], t);
}
function ll(e, t) {
  switch (e.type) {
    case 1:
      Si(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Si(e.items, t);
      break;
    case 6: {
      ll(e.key, t), t.helper(
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
function Qp(e, t = {}) {
  const n = Xp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ll(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Jp(e) {
  const t = e.body;
  return t.type === 2 ? Ti(t) : t.cases.forEach((n) => Ti(n)), e;
}
function Ti(e) {
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
      e.static = sl(t);
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
function em(e, t) {
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
function tm(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), fo(e, t.key), t.modifier ? (e.push(", "), fo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function nm(e, t) {
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
function rm(e, t) {
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
function om(e, t) {
  t.body ? fo(e, t.body) : e.push("null");
}
function fo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      om(e, t);
      break;
    case 1:
      rm(e, t);
      break;
    case 2:
      nm(e, t);
      break;
    case 6:
      tm(e, t);
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
const am = (e, t = {}) => {
  const n = ue(t.mode) ? t.mode : "normal", r = ue(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = em(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${sl(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), fo(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function sm(e, t = {}) {
  const n = Pt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Zp(n).parse(e);
  return r ? (a && Jp(i), o && so(i), { ast: i, code: "" }) : (Qp(i, n), am(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function lm() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ta().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function zn(e) {
  return Ve(e) && il(e) === 0 && (_n(e, "b") || _n(e, "body"));
}
const Nu = ["b", "body"];
function im(e) {
  return Ar(e, Nu);
}
const Pu = ["c", "cases"];
function cm(e) {
  return Ar(e, Pu, []);
}
const $u = ["s", "static"];
function um(e) {
  return Ar(e, $u);
}
const Mu = ["i", "items"];
function dm(e) {
  return Ar(e, Mu, []);
}
const Du = ["t", "type"];
function il(e) {
  return Ar(e, Du);
}
const Fu = ["v", "value"];
function pa(e, t) {
  const n = Ar(e, Fu);
  if (n != null)
    return n;
  throw Ko(t);
}
const zu = ["m", "modifier"];
function fm(e) {
  return Ar(e, zu);
}
const Bu = ["k", "key"];
function pm(e) {
  const t = Ar(e, Bu);
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
    if (_n(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Vu = [
  ...Nu,
  ...Pu,
  ...$u,
  ...Mu,
  ...Bu,
  ...zu,
  ...Fu,
  ...Du
];
function Ko(e) {
  return new Error(`unhandled node type: ${e}`);
}
function hs(e) {
  return (n) => mm(n, e);
}
function mm(e, t) {
  const n = im(t);
  if (n == null)
    throw Ko(
      0
      /* NodeTypes.Resource */
    );
  if (il(n) === 1) {
    const a = cm(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Ei(e, i)
    ], []));
  } else
    return Ei(e, n);
}
function Ei(e, t) {
  const n = um(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = dm(t).reduce((o, a) => [...o, Ns(e, a)], []);
    return e.normalize(r);
  }
}
function Ns(e, t) {
  const n = il(t);
  switch (n) {
    case 3:
      return pa(t, n);
    case 9:
      return pa(t, n);
    case 4: {
      const r = t;
      if (_n(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (_n(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ko(n);
    }
    case 5: {
      const r = t;
      if (_n(r, "i") && Ot(r.i))
        return e.interpolate(e.list(r.i));
      if (_n(r, "index") && Ot(r.index))
        return e.interpolate(e.list(r.index));
      throw Ko(n);
    }
    case 6: {
      const r = t, o = fm(r), a = pm(r);
      return e.linked(Ns(e, a), o ? Ns(e, o) : void 0, e.type);
    }
    case 7:
      return pa(t, n);
    case 8:
      return pa(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const hm = (e) => e;
let ma = Ye();
function gm(e, t = {}) {
  let n = !1;
  const r = t.onError || zp;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...sm(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function vm(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ue(e)) {
    bt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || hm)(e), o = ma[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = gm(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = hs(a);
    return s ? i : ma[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = ma[n];
      return r || (ma[n] = hs(e));
    } else
      return hs(e);
  }
}
const rr = {
  INVALID_ARGUMENT: Fp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, bm = 24;
function or(e) {
  return Ga(e, null, void 0);
}
function cl(e, t) {
  return t.locale != null ? Ai(t.locale) : Ai(e.locale);
}
let gs;
function Ai(e) {
  if (ue(e))
    return e;
  if (lt(e)) {
    if (e.resolvedOnce && gs != null)
      return gs;
    if (e.constructor.name === "Function") {
      const t = e();
      if ($p(t))
        throw or(rr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return gs = t;
    } else
      throw or(rr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw or(rr.NOT_SUPPORT_LOCALE_TYPE);
}
function ym(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...yt(t) ? t : Ve(t) ? Object.keys(t) : ue(t) ? [t] : [n]
  ])];
}
function ju(e, t, n) {
  const r = ue(n) ? n : xa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; yt(s); )
      s = Ci(a, s, t);
    const i = yt(t) || !Be(t) ? t : t.default ? t.default : null;
    s = ue(i) ? [i] : i, yt(s) && Ci(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Ci(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && bt(r); o++) {
    const a = t[o];
    ue(a) && (r = _m(e, t[o], n));
  }
  return r;
}
function _m(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = wm(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function wm(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (yt(n) || Be(n)) && n[o] && (r = n[o]);
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
const km = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Sm(e) {
  return km.test(e);
}
function Tm(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Em(e) {
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
function Am(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Sm(t) ? Tm(t) : "*" + t;
}
function Cm(e) {
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
      if (o = 0, s === void 0 || (s = Am(s), s === !1))
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
      if (l = Em(a), m = Cr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = h[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ii = /* @__PURE__ */ new Map();
function Im(e, t) {
  return Ve(e) ? e[t] : null;
}
function Lm(e, t) {
  if (!Ve(e))
    return null;
  let n = Ii.get(t);
  if (n || (n = Cm(t), n && Ii.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Vu.includes(s) && zn(o))
      return null;
    const i = o[s];
    if (i === void 0 || lt(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Om = "11.2.2", Ka = -1, xa = "en-US", Li = "", Oi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function xm() {
  return {
    upper: (e, t) => t === "text" && ue(e) ? e.toUpperCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ue(e) ? e.toLowerCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ue(e) ? Oi(e) : t === "vnode" && Ve(e) && "__v_isVNode" in e ? Oi(e.children) : e
  };
}
let Uu;
function Rm(e) {
  Uu = e;
}
let Wu;
function Nm(e) {
  Wu = e;
}
let Hu;
function Pm(e) {
  Hu = e;
}
let Gu = null;
const xi = (e) => {
  Gu = e;
}, $m = () => Gu;
let Ri = 0;
function Mm(e = {}) {
  const t = lt(e.onWarn) ? e.onWarn : Ip, n = ue(e.version) ? e.version : Om, r = ue(e.locale) || lt(e.locale) ? e.locale : xa, o = lt(r) ? xa : r, a = yt(e.fallbackLocale) || Be(e.fallbackLocale) || ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Be(e.messages) ? e.messages : vs(o), i = Be(e.datetimeFormats) ? e.datetimeFormats : vs(o), l = Be(e.numberFormats) ? e.numberFormats : vs(o), u = Pt(Ye(), e.modifiers, xm()), f = e.pluralRules || Ye(), m = lt(e.missing) ? e.missing : null, h = bt(e.missingWarn) || Oa(e.missingWarn) ? e.missingWarn : !0, y = bt(e.fallbackWarn) || Oa(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, b = !!e.unresolving, L = lt(e.postTranslation) ? e.postTranslation : null, p = Be(e.processor) ? e.processor : null, A = bt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter, I = lt(e.messageCompiler) ? e.messageCompiler : Uu, _ = lt(e.messageResolver) ? e.messageResolver : Wu || Im, x = lt(e.localeFallbacker) ? e.localeFallbacker : Hu || ym, C = Ve(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, X = Ve(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), se = Ve(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), he = Ve(Y.__meta) ? Y.__meta : {};
  Ri++;
  const le = {
    version: n,
    cid: Ri,
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
const vs = (e) => ({ [e]: Ye() });
function ul(e, t, n, r, o) {
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
function Dm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Fm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Dm(e, t[r]))
      return !0;
  return !1;
}
function Ni(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, f, m] = Ps(...t), h = bt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  bt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, g = cl(e, f), b = s(
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
    ul(e, l, p, h, P);
  if (!Be(A) || !ue(p))
    return r ? Ka : l;
  let I = `${p}__${l}`;
  Ha(m) || (I = `${I}__${JSON.stringify(m)}`);
  let _ = i.get(I);
  return _ || (_ = new Intl.DateTimeFormat(p, Pt({}, A, m)), i.set(I, _)), y ? _.formatToParts(u) : _.format(u);
}
const Ku = [
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
function Ps(...e) {
  const [t, n, r, o] = e, a = Ye();
  let s = Ye(), i;
  if (ue(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw or(rr.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw or(rr.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (xp(t)) {
    if (isNaN(t.getTime()))
      throw or(rr.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ot(t))
    i = t;
  else
    throw or(rr.INVALID_ARGUMENT);
  return ue(n) ? a.key = n : Be(n) && Object.keys(n).forEach((l) => {
    Ku.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ue(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", i, a, s];
}
function Pi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function $i(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, f, m] = $s(...t), h = bt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  bt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, g = cl(e, f), b = s(
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
    ul(e, l, p, h, P);
  if (!Be(A) || !ue(p))
    return r ? Ka : l;
  let I = `${p}__${l}`;
  Ha(m) || (I = `${I}__${JSON.stringify(m)}`);
  let _ = i.get(I);
  return _ || (_ = new Intl.NumberFormat(p, Pt({}, A, m)), i.set(I, _)), y ? _.formatToParts(u) : _.format(u);
}
const qu = [
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
function $s(...e) {
  const [t, n, r, o] = e, a = Ye();
  let s = Ye();
  if (!Ot(t))
    throw or(rr.INVALID_ARGUMENT);
  const i = t;
  return ue(n) ? a.key = n : Be(n) && Object.keys(n).forEach((l) => {
    qu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ue(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", i, a, s];
}
function Mi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const zm = (e) => e, Bm = (e) => "", Vm = "text", jm = (e) => e.length === 0 ? "" : sl(e), Um = Mp;
function Di(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Wm(e) {
  const t = Ot(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ot(e.named.count) || Ot(e.named.n)) ? Ot(e.named.count) ? e.named.count : Ot(e.named.n) ? e.named.n : t : t;
}
function Hm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Gm(e = {}) {
  const t = e.locale, n = Wm(e), r = Ve(e.pluralRules) && ue(t) && lt(e.pluralRules[t]) ? e.pluralRules[t] : Di, o = Ve(e.pluralRules) && ue(t) && lt(e.pluralRules[t]) ? Di : void 0, a = (p) => p[r(n, p.length, o)], s = e.list || [], i = (p) => s[p], l = e.named || Ye();
  Ot(e.pluralIndex) && Hm(n, l);
  const u = (p) => l[p];
  function f(p, A) {
    const P = lt(e.messages) ? e.messages(p, !!A) : Ve(e.messages) ? e.messages[p] : !1;
    return P || (e.parent ? e.parent.message(p) : Bm);
  }
  const m = (p) => e.modifiers ? e.modifiers[p] : zm, h = Be(e.processor) && lt(e.processor.normalize) ? e.processor.normalize : jm, y = Be(e.processor) && lt(e.processor.interpolate) ? e.processor.interpolate : Um, g = Be(e.processor) && ue(e.processor.type) ? e.processor.type : Vm, L = {
    list: i,
    named: u,
    plural: a,
    linked: (p, ...A) => {
      const [P, I] = A;
      let _ = "text", x = "";
      A.length === 1 ? Ve(P) ? (x = P.modifier || x, _ = P.type || _) : ue(P) && (x = P || x) : A.length === 2 && (ue(P) && (x = P || x), ue(I) && (_ = I || _));
      const C = f(p, !0)(L), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && yt(C) && x ? C[0] : C
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
const Fi = () => "", sr = (e) => lt(e);
function zi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Ms(...t), f = bt(u.missingWarn) ? u.missingWarn : e.missingWarn, m = bt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = bt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, g = ue(u.default) || bt(u.default) ? bt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, b = n || g != null && (ue(g) || lt(g)), L = cl(e, u);
  h && Km(u);
  let [p, A, P] = y ? [
    l,
    L,
    i[L] || Ye()
  ] : Yu(e, l, L, s, m, f), I = p, _ = l;
  if (!y && !(ue(I) || zn(I) || sr(I)) && b && (I = g, _ = I), !y && (!(ue(I) || zn(I) || sr(I)) || !ue(A)))
    return o ? Ka : l;
  let x = !1;
  const C = () => {
    x = !0;
  }, Y = sr(I) ? I : Zu(e, l, A, I, _, C);
  if (x)
    return I;
  const X = Zm(e, A, P, u), se = Gm(X), he = qm(e, Y, se);
  let le = r ? r(he, l) : he;
  return h && ue(le) && (le = Np(le)), le;
}
function Km(e) {
  yt(e.list) ? e.list = e.list.map((t) => ue(t) ? _i(t) : t) : Ve(e.named) && Object.keys(e.named).forEach((t) => {
    ue(e.named[t]) && (e.named[t] = _i(e.named[t]));
  });
}
function Yu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let m = Ye(), h, y = null;
  const g = "translate";
  for (let b = 0; b < f.length && (h = f[b], m = s[h] || Ye(), (y = l(m, t)) === null && (y = m[t]), !(ue(y) || zn(y) || sr(y))); b++)
    if (!Fm(h, f)) {
      const L = ul(
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
function Zu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (sr(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Ym(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function qm(e, t, n) {
  return t(n);
}
function Ms(...e) {
  const [t, n, r] = e, o = Ye();
  if (!ue(t) && !Ot(t) && !sr(t) && !zn(t))
    throw or(rr.INVALID_ARGUMENT);
  const a = Ot(t) ? String(t) : (sr(t), t);
  return Ot(n) ? o.plural = n : ue(n) ? o.default = n : Be(n) && !Ha(n) ? o.named = n : yt(n) && (o.list = n), Ot(r) ? o.plural = r : ue(r) ? o.default = r : Be(r) && Pt(o, r), [a, o];
}
function Ym(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Lp(t, n, s)
  };
}
function Zm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, g) => {
      let b = s(n, y);
      if (b == null && (f || g)) {
        const [, , L] = Yu(
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
      if (ue(b) || zn(b)) {
        let L = !1;
        const A = Zu(e, y, t, b, y, () => {
          L = !0;
        });
        return L ? Fi : A;
      } else return sr(b) ? b : Fi;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ot(r.plural) && (h.pluralIndex = r.plural), h;
}
lm();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Xm = "11.2.2";
function Qm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ta().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ta().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ta().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const po = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: bm,
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
  return Ga(e, null, void 0);
}
const Ds = /* @__PURE__ */ Wr("__translateVNode"), Fs = /* @__PURE__ */ Wr("__datetimeParts"), zs = /* @__PURE__ */ Wr("__numberParts"), Jm = Wr("__setPluralRules"), Xu = /* @__PURE__ */ Wr("__injectWithOption"), Bs = /* @__PURE__ */ Wr("__dispose");
function Yo(e) {
  if (!Ve(e) || zn(e))
    return e;
  for (const t in e)
    if (_n(e, t))
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
        if (a || (zn(o) ? Vu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !zn(o)) {
          const s = o[n[r]];
          Ve(s) && Yo(s);
        }
      }
  return e;
}
function Qu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Be(n) ? n : yt(r) ? Ye() : { [e]: Ye() };
  if (yt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Ye(), Ea(u, s[l])) : Ea(u, s);
    } else
      ue(i) && Ea(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      _n(s, i) && Yo(s[i]);
  return s;
}
function eh(e) {
  return e.type;
}
function th(e, t, n) {
  let r = Ve(t.messages) ? t.messages : Ye();
  "__i18nGlobal" in n && (r = Qu(e.locale.value, {
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
function Bi(e) {
  return F(Iu, null, e, 0);
}
function Ju() {
  return "currentInstance" in fs ? fs["currentInstance"] : fs.getCurrentInstance();
}
const Vi = () => [], nh = () => !1;
let ji = 0;
function Ui(e) {
  return (t, n, r, o) => e(n, r, Ju() || void 0, o);
}
function rh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = bi ? G : Sr;
  let s = bt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ue(e.locale) ? e.locale : xa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ue(e.fallbackLocale) || yt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Qu(i.value, e)), f = a(Be(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Be(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let h = t ? t.missingWarn : bt(e.missingWarn) || Oa(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : bt(e.fallbackWarn) || Oa(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : bt(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, L = lt(e.missing) ? e.missing : null, p = lt(e.missing) ? Ui(e.missing) : null, A = lt(e.postTranslation) ? e.postTranslation : null, P = t ? t.warnHtmlMessage : bt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const _ = t ? t.modifiers : Be(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || t && t.pluralRules, C;
  C = (() => {
    r && xi(null);
    const E = {
      version: Xm,
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
    const B = Mm(E);
    return r && xi(B), B;
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
  function j() {
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
      r || (C.fallbackContext = t ? $m() : void 0), Ze = E(C);
    } finally {
      r || (C.fallbackContext = void 0);
    }
    if (Ae !== "translate exists" && // for not `te` (e.g `t`)
    Ot(Ze) && Ze === Ka || Ae === "translate exists" && !Ze) {
      const [Kn, hr] = B();
      return t && g ? Ie(t) : nt(Kn);
    } else {
      if ($t(Ze))
        return Ze;
      throw qo(po.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Pe(...E) {
    return pe((B) => Reflect.apply(zi, null, [B, ...E]), () => Ms(...E), "translate", (B) => Reflect.apply(B.t, B, [...E]), (B) => B, (B) => ue(B));
  }
  function ae(...E) {
    const [B, Ae, Ie] = E;
    if (Ie && !Ve(Ie))
      throw qo(po.INVALID_ARGUMENT);
    return Pe(B, Ae, Pt({ resolvedMessage: !0 }, Ie || {}));
  }
  function Z(...E) {
    return pe((B) => Reflect.apply(Ni, null, [B, ...E]), () => Ps(...E), "datetime format", (B) => Reflect.apply(B.d, B, [...E]), () => Li, (B) => ue(B) || yt(B));
  }
  function Me(...E) {
    return pe((B) => Reflect.apply($i, null, [B, ...E]), () => $s(...E), "number format", (B) => Reflect.apply(B.n, B, [...E]), () => Li, (B) => ue(B) || yt(B));
  }
  function ke(E) {
    return E.map((B) => ue(B) || Ot(B) || bt(B) ? Bi(String(B)) : B);
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
        Ie.processor = we, Ae = Reflect.apply(zi, null, [Ie, ...E]);
      } finally {
        Ie.processor = null;
      }
      return Ae;
    }, () => Ms(...E), "translate", (B) => B[Ds](...E), (B) => [Bi(B)], (B) => yt(B));
  }
  function ge(...E) {
    return pe((B) => Reflect.apply($i, null, [B, ...E]), () => $s(...E), "number format", (B) => B[zs](...E), Vi, (B) => ue(B) || yt(B));
  }
  function at(...E) {
    return pe((B) => Reflect.apply(Ni, null, [B, ...E]), () => Ps(...E), "datetime format", (B) => B[Fs](...E), Vi, (B) => ue(B) || yt(B));
  }
  function Te(E) {
    x = E, C.pluralRules = x;
  }
  function Xe(E, B) {
    return pe(() => {
      if (!E)
        return !1;
      const Ae = ue(B) ? B : i.value, Ie = wt(Ae), nt = C.messageResolver(Ie, E);
      return zn(nt) || sr(nt) || ue(nt);
    }, () => [E], "translate exists", (Ae) => Reflect.apply(Ae.te, Ae, [E, B]), nh, (Ae) => bt(Ae));
  }
  function Lt(E) {
    let B = null;
    const Ae = ju(C, l.value, i.value);
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
  function wt(E) {
    return u.value[E] || {};
  }
  function kt(E, B) {
    if (o) {
      const Ae = { [E]: B };
      for (const Ie in Ae)
        _n(Ae, Ie) && Yo(Ae[Ie]);
      B = Ae[E];
    }
    u.value[E] = B, C.messages = u.value;
  }
  function st(E, B) {
    u.value[E] = u.value[E] || {};
    const Ae = { [E]: B };
    if (o)
      for (const Ie in Ae)
        _n(Ae, Ie) && Yo(Ae[Ie]);
    B = Ae[E], Ea(B, u.value[E]), C.messages = u.value;
  }
  function ut(E) {
    return f.value[E] || {};
  }
  function T(E, B) {
    f.value[E] = B, C.datetimeFormats = f.value, Pi(C, E, B);
  }
  function O(E, B) {
    f.value[E] = Pt(f.value[E] || {}, B), C.datetimeFormats = f.value, Pi(C, E, B);
  }
  function V(E) {
    return m.value[E] || {};
  }
  function ne(E, B) {
    m.value[E] = B, C.numberFormats = m.value, Mi(C, E, B);
  }
  function $e(E, B) {
    m.value[E] = Pt(m.value[E] || {}, B), C.numberFormats = m.value, Mi(C, E, B);
  }
  ji++, t && bi && (Oe(t.locale, (E) => {
    s && (i.value = E, C.locale = E, Lo(C, i.value, l.value));
  }), Oe(t.fallbackLocale, (E) => {
    s && (l.value = E, C.fallbackLocale = E, Lo(C, i.value, l.value));
  }));
  const ve = {
    id: ji,
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
    getLocaleMessage: wt,
    setLocaleMessage: kt,
    mergeLocaleMessage: st,
    getPostTranslationHandler: j,
    setPostTranslationHandler: J,
    getMissingHandler: H,
    setMissingHandler: de,
    [Jm]: Te
  };
  return ve.datetimeFormats = ye, ve.numberFormats = _e, ve.rt = ae, ve.te = Xe, ve.tm = ct, ve.d = Z, ve.n = Me, ve.getDateTimeFormat = ut, ve.setDateTimeFormat = T, ve.mergeDateTimeFormat = O, ve.getNumberFormat = V, ve.setNumberFormat = ne, ve.mergeNumberFormat = $e, ve[Xu] = n, ve[Ds] = Q, ve[Fs] = at, ve[zs] = ge, ve;
}
const dl = {
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
function oh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === ft ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Ye());
}
function ed() {
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
}, dl);
function ah(e) {
  return yt(e) && !ue(e[0]);
}
function td(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Ye();
    e.locale && (s.locale = e.locale), ue(e.format) ? s.key = e.format : Ve(e.format) && (ue(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((h, y) => n.includes(y) ? Pt(Ye(), h, { [y]: e.format[y] }) : h, Ye()));
    const l = r(e.value, s, i);
    let u = [s.key];
    yt(l) ? u = l.map((h, y) => {
      const g = o[h.type], b = g ? g({ [h.type]: h.value, index: y, parts: l }) : [h.value];
      return ah(b) && (b[0].key = `${h.type}-${y}`), b;
    }) : ue(l) && (u = [l]);
    const f = Pt(Ye(), a), m = ue(e.tag) || Ve(e.tag) ? e.tag : ed();
    return Cu(m, f, u);
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
}, dl);
const sh = /* @__PURE__ */ Wr("global-vue-i18n");
function ta(e = {}) {
  const t = Ju();
  if (t == null)
    throw qo(po.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw qo(po.NOT_INSTALLED);
  const n = lh(t), r = ch(n), o = eh(t), a = ih(e, o);
  if (a === "global")
    return th(r, e, o), r;
  if (a === "parent") {
    let l = uh(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Pt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = rh(l), s.__composerExtend && (i[Bs] = s.__composerExtend(i)), fh(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function lh(e) {
  const t = Ge(e.isCE ? sh : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw qo(e.isCE ? po.NOT_INSTALLED_WITH_PROVIDE : po.UNEXPECTED_ERROR);
  return t;
}
function ih(e, t) {
  return Ha(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ch(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function uh(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = dh(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Xu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function dh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function fh(e, t, n) {
  _t(() => {
  }, t), Wa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Bs];
    o && (o(), delete r[Bs]);
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
}, dl);
Qm();
Rm(vm);
Nm(Lm);
Pm(ju);
function fl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Hr = fl();
function nd(e) {
  Hr = e;
}
var Bo = { exec: () => null };
function Fe(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Gt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var ph = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Gt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, mh = /^(?:[ \t]*(?:\n|$))+/, hh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, gh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, na = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, vh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, pl = /(?:[*+-]|\d{1,9}[.)])/, rd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, od = Fe(rd).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), bh = Fe(rd).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ml = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, yh = /^[^\n]+/, hl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, _h = Fe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", hl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), wh = Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, pl).getRegex(), qa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", gl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, kh = Fe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", gl).replace("tag", qa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ad = Fe(ml).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex(), Sh = Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ad).getRegex(), vl = { blockquote: Sh, code: hh, def: _h, fences: gh, heading: vh, hr: na, html: kh, lheading: od, list: wh, newline: mh, paragraph: ad, table: Bo, text: yh }, Wi = Fe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex(), Th = { ...vl, lheading: bh, table: Wi, paragraph: Fe(ml).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Wi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex() }, Eh = { ...vl, html: Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", gl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Bo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Fe(ml).replace("hr", na).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", od).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ah = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ch = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, sd = /^( {2,}|\\)\n(?!\s*$)/, Ih = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ya = /[\p{P}\p{S}]/u, bl = /[\s\p{P}\p{S}]/u, ld = /[^\s\p{P}\p{S}]/u, Lh = Fe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, bl).getRegex(), id = /(?!~)[\p{P}\p{S}]/u, Oh = /(?!~)[\s\p{P}\p{S}]/u, xh = /(?:[^\s\p{P}\p{S}]|~)/u, Rh = Fe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ph ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), cd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Nh = Fe(cd, "u").replace(/punct/g, Ya).getRegex(), Ph = Fe(cd, "u").replace(/punct/g, id).getRegex(), ud = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", $h = Fe(ud, "gu").replace(/notPunctSpace/g, ld).replace(/punctSpace/g, bl).replace(/punct/g, Ya).getRegex(), Mh = Fe(ud, "gu").replace(/notPunctSpace/g, xh).replace(/punctSpace/g, Oh).replace(/punct/g, id).getRegex(), Dh = Fe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ld).replace(/punctSpace/g, bl).replace(/punct/g, Ya).getRegex(), Fh = Fe(/\\(punct)/, "gu").replace(/punct/g, Ya).getRegex(), zh = Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Bh = Fe(gl).replace("(?:-->|$)", "-->").getRegex(), Vh = Fe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Bh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ra = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, jh = Fe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ra).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), dd = Fe(/^!?\[(label)\]\[(ref)\]/).replace("label", Ra).replace("ref", hl).getRegex(), fd = Fe(/^!?\[(ref)\](?:\[\])?/).replace("ref", hl).getRegex(), Uh = Fe("reflink|nolink(?!\\()", "g").replace("reflink", dd).replace("nolink", fd).getRegex(), Hi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, yl = { _backpedal: Bo, anyPunctuation: Fh, autolink: zh, blockSkip: Rh, br: sd, code: Ch, del: Bo, emStrongLDelim: Nh, emStrongRDelimAst: $h, emStrongRDelimUnd: Dh, escape: Ah, link: jh, nolink: fd, punctuation: Lh, reflink: dd, reflinkSearch: Uh, tag: Vh, text: Ih, url: Bo }, Wh = { ...yl, link: Fe(/^!?\[(label)\]\((.*?)\)/).replace("label", Ra).getRegex(), reflink: Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ra).getRegex() }, Vs = { ...yl, emStrongRDelimAst: Mh, emStrongLDelim: Ph, url: Fe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Hi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Fe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Hi).getRegex() }, Hh = { ...Vs, br: Fe(sd).replace("{2,}", "*").getRegex(), text: Fe(Vs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ha = { normal: vl, gfm: Th, pedantic: Eh }, Oo = { normal: yl, gfm: Vs, breaks: Hh, pedantic: Wh }, Gh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Gi = (e) => Gh[e];
function Jn(e, t) {
  if (t) {
    if (Gt.escapeTest.test(e)) return e.replace(Gt.escapeReplace, Gi);
  } else if (Gt.escapeTestNoEncode.test(e)) return e.replace(Gt.escapeReplaceNoEncode, Gi);
  return e;
}
function Ki(e) {
  try {
    e = encodeURI(e).replace(Gt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function qi(e, t) {
  let n = e.replace(Gt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Gt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Gt.slashPipe, "|");
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
function Kh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Yi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function qh(e, t, n) {
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
var Na = class {
  constructor(e) {
    qe(this, "options");
    qe(this, "rules");
    qe(this, "lexer");
    this.options = e || Hr;
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
      let n = t[0], r = qh(n, t[3] || "", this.rules);
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
    let n = qi(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(qi(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = Kh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), Yi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return Yi(n, o, n[0], this.lexer, this.rules);
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
}, vn = class js {
  constructor(t) {
    qe(this, "tokens");
    qe(this, "options");
    qe(this, "state");
    qe(this, "inlineQueue");
    qe(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Hr, this.options.tokenizer = this.options.tokenizer || new Na(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Gt, block: ha.normal, inline: Oo.normal };
    this.options.pedantic ? (n.block = ha.pedantic, n.inline = Oo.pedantic) : this.options.gfm && (n.block = ha.gfm, this.options.breaks ? n.inline = Oo.breaks : n.inline = Oo.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ha, inline: Oo };
  }
  static lex(t, n) {
    return new js(n).lex(t);
  }
  static lexInline(t, n) {
    return new js(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Gt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Gt.tabCharGlobal, "    ").replace(Gt.spaceLine, "")); t; ) {
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
}, Pa = class {
  constructor(t) {
    qe(this, "options");
    qe(this, "parser");
    this.options = t || Hr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Gt.notSpaceStart)?.[0], a = t.replace(Gt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Jn(o) + '">' + (r ? a : Jn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Jn(a, !0)) + `</code></pre>
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
    return `<code>${Jn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Ki(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Jn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Ki(t);
    if (a === null) return Jn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Jn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Jn(t.text);
  }
}, _l = class {
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
}, bn = class Us {
  constructor(t) {
    qe(this, "options");
    qe(this, "renderer");
    qe(this, "textRenderer");
    this.options = t || Hr, this.options.renderer = this.options.renderer || new Pa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _l();
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
}, Sa, Do = (Sa = class {
  constructor(e) {
    qe(this, "options");
    qe(this, "block");
    this.options = e || Hr;
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
    return this.block ? vn.lex : vn.lexInline;
  }
  provideParser() {
    return this.block ? bn.parse : bn.parseInline;
  }
}, qe(Sa, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), qe(Sa, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Sa), Yh = class {
  constructor(...t) {
    qe(this, "defaults", fl());
    qe(this, "options", this.setOptions);
    qe(this, "parse", this.parseMarkdown(!0));
    qe(this, "parseInline", this.parseMarkdown(!1));
    qe(this, "Parser", bn);
    qe(this, "Renderer", Pa);
    qe(this, "TextRenderer", _l);
    qe(this, "Lexer", vn);
    qe(this, "Tokenizer", Na);
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
        let a = this.defaults.renderer || new Pa(this.defaults);
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
        let a = this.defaults.tokenizer || new Na(this.defaults);
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
    return vn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return bn.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? vn.lex : vn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let f = await (a.hooks ? await a.hooks.provideParser() : t ? bn.parse : bn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(f) : f;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? vn.lex : vn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? bn.parse : bn.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + Jn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Vr = new Yh();
function He(e, t) {
  return Vr.parse(e, t);
}
He.options = He.setOptions = function(e) {
  return Vr.setOptions(e), He.defaults = Vr.defaults, nd(He.defaults), He;
};
He.getDefaults = fl;
He.defaults = Hr;
He.use = function(...e) {
  return Vr.use(...e), He.defaults = Vr.defaults, nd(He.defaults), He;
};
He.walkTokens = function(e, t) {
  return Vr.walkTokens(e, t);
};
He.parseInline = Vr.parseInline;
He.Parser = bn;
He.parser = bn.parse;
He.Renderer = Pa;
He.TextRenderer = _l;
He.Lexer = vn;
He.lexer = vn.lex;
He.Tokenizer = Na;
He.Hooks = Do;
He.parse = He;
He.options;
He.setOptions;
He.use;
He.walkTokens;
He.parseInline;
bn.parse;
vn.lex;
function Zh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function It(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Zi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Zi || (Zi = {}));
async function Xh(e, t) {
  await It("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Qh(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return It("plugin:event|listen", {
    event: e,
    target: o,
    handler: Zh(t)
  }).then((a) => async () => Xh(e, a));
}
async function pd() {
  return await It("local_ai_get_config");
}
async function Fo(e) {
  return await It("local_ai_save_config", { config: e });
}
async function md(e) {
  return await It("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Jh() {
  return await It("local_ai_get_runtime_status");
}
async function hd() {
  return await It("local_ai_get_status");
}
async function eg(e) {
  return await It("local_ai_start_service", {
    config: e ?? null
  });
}
async function gd() {
  return await It("local_ai_restart_service");
}
async function tg() {
  await It("local_ai_stop_service");
}
function vd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function ng(e, t, n = {}) {
  const r = n.requestId ?? vd(), o = await Qh(
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
async function bs(e) {
  return await It("local_ai_cancel_chat_stream", { requestId: e });
}
async function bd(e) {
  return await It("local_ai_web_search", {
    request: e
  });
}
async function rg(e) {
  return await It("local_ai_weather", {
    request: e
  });
}
async function og() {
  return await It("local_ai_get_chat_histories");
}
async function ag(e) {
  return await It("local_ai_save_chat_history", {
    history: e
  });
}
async function sg(e) {
  return await It("local_ai_delete_chat_history", {
    historyId: e
  });
}
const lg = /* @__PURE__ */ new Set([
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
]), ig = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), cg = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), ug = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), dg = 5, fg = 1024 * 1024, pg = 5 * 1024 * 1024, Xi = 4e4, wl = (e) => e.split(".").pop()?.toLowerCase() ?? "", mg = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, ys = (e) => ig.has(e.type) || cg.has(wl(e.name)), Qi = (e) => e.type.startsWith("text/") || lg.has(wl(e.name)), hg = (e) => ug.has(wl(e.name)), gg = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), vg = async (e) => {
  const t = await e.text();
  return t.length <= Xi ? { text: t, truncated: !1 } : {
    text: t.slice(0, Xi),
    truncated: !0
  };
}, bg = (e, t) => {
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
function Ji(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yg(e) {
  if (Array.isArray(e)) return e;
}
function _g(e, t) {
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
function wg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kg(e, t) {
  return yg(e) || _g(e, t) || Sg(e, t) || wg();
}
function Sg(e, t) {
  if (e) {
    if (typeof e == "string") return Ji(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ji(e, t) : void 0;
  }
}
const yd = Object.entries, ec = Object.setPrototypeOf, Tg = Object.isFrozen, Eg = Object.getPrototypeOf, Ag = Object.getOwnPropertyDescriptor;
let qt = Object.freeze, un = Object.seal, lo = Object.create, _d = typeof Reflect < "u" && Reflect, Ws = _d.apply, Hs = _d.construct;
qt || (qt = function(t) {
  return t;
});
un || (un = function(t) {
  return t;
});
Ws || (Ws = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Hs || (Hs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const to = Et(Array.prototype.forEach), Cg = Et(Array.prototype.lastIndexOf), tc = Et(Array.prototype.pop), no = Et(Array.prototype.push), Ig = Et(Array.prototype.splice), Ut = Array.isArray, zo = Et(String.prototype.toLowerCase), _s = Et(String.prototype.toString), nc = Et(String.prototype.match), ro = Et(String.prototype.replace), rc = Et(String.prototype.indexOf), Lg = Et(String.prototype.trim), Og = Et(Number.prototype.toString), xg = Et(Boolean.prototype.toString), oc = typeof BigInt > "u" ? null : Et(BigInt.prototype.toString), ac = typeof Symbol > "u" ? null : Et(Symbol.prototype.toString), dt = Et(Object.prototype.hasOwnProperty), Ro = Et(Object.prototype.toString), Rt = Et(RegExp.prototype.test), No = Rg(TypeError);
function Et(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Ws(e, t, r);
  };
}
function Rg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Hs(e, n);
  };
}
function Ne(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zo;
  if (ec && ec(e, null), !Ut(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Tg(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function Ng(e) {
  for (let t = 0; t < e.length; t++)
    dt(e, t) || (e[t] = null);
  return e;
}
function Ft(e) {
  const t = lo(null);
  for (const r of yd(e)) {
    var n = kg(r, 2);
    const o = n[0], a = n[1];
    dt(e, o) && (Ut(a) ? t[o] = Ng(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Ft(a) : t[o] = a);
  }
  return t;
}
function Pg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Og(e);
    case "boolean":
      return xg(e);
    case "bigint":
      return oc ? oc(e) : "0";
    case "symbol":
      return ac ? ac(e) : "Symbol()";
    case "undefined":
      return Ro(e);
    case "function":
    case "object": {
      if (e === null)
        return Ro(e);
      const t = e, n = Nn(t, "toString");
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
function Nn(e, t) {
  for (; e !== null; ) {
    const r = Ag(e, t);
    if (r) {
      if (r.get)
        return Et(r.get);
      if (typeof r.value == "function")
        return Et(r.value);
    }
    e = Eg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function $g(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const sc = qt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ws = qt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ks = qt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mg = qt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ss = qt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Dg = qt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), lc = qt(["#text"]), ic = qt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ts = qt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), cc = qt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ga = qt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Fg = un(/{{[\w\W]*|^[\w\W]*}}/g), zg = un(/<%[\w\W]*|^[\w\W]*%>/g), Bg = un(/\${[\w\W]*/g), Vg = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), jg = un(/^aria-[\-\w]+$/), uc = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ug = un(/^(?:\w+script|data):/i), Wg = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hg = un(/^html$/i), Gg = un(/^[a-z][.\w]*(-[.\w]+)+$/i), Rn = {
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
}, Kg = function() {
  return typeof window > "u" ? null : window;
}, qg = function(t, n) {
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
}, dc = function() {
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
function wd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kg();
  const t = (ie) => wd(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Rn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, m = e.trustedTypes, h = i.prototype, y = Nn(h, "cloneNode"), g = Nn(h, "remove"), b = Nn(h, "nextSibling"), L = Nn(h, "childNodes"), p = Nn(h, "parentNode"), A = Nn(h, "shadowRoot"), P = Nn(h, "attributes"), I = s && s.prototype ? Nn(s.prototype, "nodeType") : null, _ = s && s.prototype ? Nn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let x, C = "";
  const Y = n, X = Y.implementation, se = Y.createNodeIterator, he = Y.createDocumentFragment, le = Y.getElementsByTagName, ye = r.importNode;
  let _e = dc();
  t.isSupported = typeof yd == "function" && typeof p == "function" && X && X.createHTMLDocument !== void 0;
  const j = Fg, J = zg, H = Bg, de = Vg, pe = jg, Pe = Ug, ae = Wg, Z = Gg;
  let Me = uc, ke = null;
  const Se = Ne({}, [...sc, ...ws, ...ks, ...Ss, ...lc]);
  let we = null;
  const Q = Ne({}, [...ic, ...Ts, ...cc, ...ga]);
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
  let Lt = !0, ct = !0, wt = !1, kt = !0, st = !1, ut = !0, T = !1, O = !1, V = !1, ne = !1, $e = !1, ve = !1, E = !0, B = !1;
  const Ae = "user-content-";
  let Ie = !0, nt = !1, $t = {}, Ze = null;
  const Kn = Ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let hr = null;
  const pn = Ne({}, ["audio", "video", "img", "source", "image", "track"]);
  let qn = null;
  const Lr = Ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), An = "http://www.w3.org/1998/Math/MathML", mn = "http://www.w3.org/2000/svg", Yt = "http://www.w3.org/1999/xhtml";
  let an = Yt, Or = !1, Yn = null;
  const gr = Ne({}, [An, mn, Yt], _s);
  let xr = Ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = Ne({}, ["annotation-xml"]);
  const To = Ne({}, ["title", "style", "font", "a", "script"]);
  let Zn = null;
  const Yr = ["application/xhtml+xml", "text/html"], Eo = "text/html";
  let Ke = null, hn = null;
  const Zr = n.createElement("form"), Nr = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Cn = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (hn && hn === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = Ft(w), Zn = // eslint-disable-next-line unicorn/prefer-includes
    Yr.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Eo : w.PARSER_MEDIA_TYPE, Ke = Zn === "application/xhtml+xml" ? _s : zo, ke = dt(w, "ALLOWED_TAGS") && Ut(w.ALLOWED_TAGS) ? Ne({}, w.ALLOWED_TAGS, Ke) : Se, we = dt(w, "ALLOWED_ATTR") && Ut(w.ALLOWED_ATTR) ? Ne({}, w.ALLOWED_ATTR, Ke) : Q, Yn = dt(w, "ALLOWED_NAMESPACES") && Ut(w.ALLOWED_NAMESPACES) ? Ne({}, w.ALLOWED_NAMESPACES, _s) : gr, qn = dt(w, "ADD_URI_SAFE_ATTR") && Ut(w.ADD_URI_SAFE_ATTR) ? Ne(Ft(Lr), w.ADD_URI_SAFE_ATTR, Ke) : Lr, hr = dt(w, "ADD_DATA_URI_TAGS") && Ut(w.ADD_DATA_URI_TAGS) ? Ne(Ft(pn), w.ADD_DATA_URI_TAGS, Ke) : pn, Ze = dt(w, "FORBID_CONTENTS") && Ut(w.FORBID_CONTENTS) ? Ne({}, w.FORBID_CONTENTS, Ke) : Kn, at = dt(w, "FORBID_TAGS") && Ut(w.FORBID_TAGS) ? Ne({}, w.FORBID_TAGS, Ke) : Ft({}), Te = dt(w, "FORBID_ATTR") && Ut(w.FORBID_ATTR) ? Ne({}, w.FORBID_ATTR, Ke) : Ft({}), $t = dt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Ft(w.USE_PROFILES) : w.USE_PROFILES : !1, Lt = w.ALLOW_ARIA_ATTR !== !1, ct = w.ALLOW_DATA_ATTR !== !1, wt = w.ALLOW_UNKNOWN_PROTOCOLS || !1, kt = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, st = w.SAFE_FOR_TEMPLATES || !1, ut = w.SAFE_FOR_XML !== !1, T = w.WHOLE_DOCUMENT || !1, ne = w.RETURN_DOM || !1, $e = w.RETURN_DOM_FRAGMENT || !1, ve = w.RETURN_TRUSTED_TYPE || !1, V = w.FORCE_BODY || !1, E = w.SANITIZE_DOM !== !1, B = w.SANITIZE_NAMED_PROPS || !1, Ie = w.KEEP_CONTENT !== !1, nt = w.IN_PLACE || !1, Me = $g(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : uc, an = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Yt, xr = dt(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ft(w.MATHML_TEXT_INTEGRATION_POINTS) : Ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = dt(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? Ft(w.HTML_INTEGRATION_POINTS) : Ne({}, ["annotation-xml"]);
    const W = dt(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? Ft(w.CUSTOM_ELEMENT_HANDLING) : lo(null);
    if (ge = lo(null), dt(W, "tagNameCheck") && Nr(W.tagNameCheck) && (ge.tagNameCheck = W.tagNameCheck), dt(W, "attributeNameCheck") && Nr(W.attributeNameCheck) && (ge.attributeNameCheck = W.attributeNameCheck), dt(W, "allowCustomizedBuiltInElements") && typeof W.allowCustomizedBuiltInElements == "boolean" && (ge.allowCustomizedBuiltInElements = W.allowCustomizedBuiltInElements), st && (ct = !1), $e && (ne = !0), $t && (ke = Ne({}, lc), we = lo(null), $t.html === !0 && (Ne(ke, sc), Ne(we, ic)), $t.svg === !0 && (Ne(ke, ws), Ne(we, Ts), Ne(we, ga)), $t.svgFilters === !0 && (Ne(ke, ks), Ne(we, Ts), Ne(we, ga)), $t.mathMl === !0 && (Ne(ke, Ss), Ne(we, cc), Ne(we, ga))), Xe.tagCheck = null, Xe.attributeCheck = null, dt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Xe.tagCheck = w.ADD_TAGS : Ut(w.ADD_TAGS) && (ke === Se && (ke = Ft(ke)), Ne(ke, w.ADD_TAGS, Ke))), dt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Xe.attributeCheck = w.ADD_ATTR : Ut(w.ADD_ATTR) && (we === Q && (we = Ft(we)), Ne(we, w.ADD_ATTR, Ke))), dt(w, "ADD_URI_SAFE_ATTR") && Ut(w.ADD_URI_SAFE_ATTR) && Ne(qn, w.ADD_URI_SAFE_ATTR, Ke), dt(w, "FORBID_CONTENTS") && Ut(w.FORBID_CONTENTS) && (Ze === Kn && (Ze = Ft(Ze)), Ne(Ze, w.FORBID_CONTENTS, Ke)), dt(w, "ADD_FORBID_CONTENTS") && Ut(w.ADD_FORBID_CONTENTS) && (Ze === Kn && (Ze = Ft(Ze)), Ne(Ze, w.ADD_FORBID_CONTENTS, Ke)), Ie && (ke["#text"] = !0), T && Ne(ke, ["html", "head", "body"]), ke.table && (Ne(ke, ["tbody"]), delete at.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw No('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw No('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      x = w.TRUSTED_TYPES_POLICY, C = x.createHTML("");
    } else
      x === void 0 && (x = qg(m, o)), x !== null && typeof C == "string" && (C = x.createHTML(""));
    (_e.uponSanitizeElement.length > 0 || _e.uponSanitizeAttribute.length > 0) && ke === Se && (ke = Ft(ke)), _e.uponSanitizeAttribute.length > 0 && we === Q && (we = Ft(we)), qt && qt(w), hn = w;
  }, Xr = Ne({}, [...ws, ...ks, ...Mg]), Pr = Ne({}, [...Ss, ...Dg]), Ao = function(w) {
    let W = p(w);
    (!W || !W.tagName) && (W = {
      namespaceURI: an,
      tagName: "template"
    });
    const re = zo(w.tagName), De = zo(W.tagName);
    return Yn[w.namespaceURI] ? w.namespaceURI === mn ? W.namespaceURI === Yt ? re === "svg" : W.namespaceURI === An ? re === "svg" && (De === "annotation-xml" || xr[De]) : !!Xr[re] : w.namespaceURI === An ? W.namespaceURI === Yt ? re === "math" : W.namespaceURI === mn ? re === "math" && Rr[De] : !!Pr[re] : w.namespaceURI === Yt ? W.namespaceURI === mn && !Rr[De] || W.namespaceURI === An && !xr[De] ? !1 : !Pr[re] && (To[re] || !Xr[re]) : !!(Zn === "application/xhtml+xml" && Yn[w.namespaceURI]) : !1;
  }, jt = function(w) {
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
          jt(W);
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
      const je = nc(w, /^[\r\n\t ]+/);
      re = je && je[0];
    }
    Zn === "application/xhtml+xml" && an === Yt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const De = x ? x.createHTML(w) : w;
    if (an === Yt)
      try {
        W = new f().parseFromString(De, Zn);
      } catch {
      }
    if (!W || !W.documentElement) {
      W = X.createDocument(an, "template", null);
      try {
        W.documentElement.innerHTML = Or ? C : De;
      } catch {
      }
    }
    const Re = W.body || W.documentElement;
    return w && re && Re.insertBefore(n.createTextNode(re), Re.childNodes[0] || null), an === Yt ? le.call(W, T ? "html" : "body")[0] : T ? W.documentElement : Re;
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
      to([j, J, H], (Re) => {
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
  }, Zt = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return I(w) === Rn.documentFragment;
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
  const In = function(w) {
    let W = null;
    if (Dt(_e.beforeSanitizeElements, w, null), pt(w))
      return jt(w), !0;
    const re = Ke(w.nodeName);
    if (Dt(_e.uponSanitizeElement, w, {
      tagName: re,
      allowedTags: ke
    }), ut && w.hasChildNodes() && !Mt(w.firstElementChild) && Rt(/<[/\w!]/g, w.innerHTML) && Rt(/<[/\w!]/g, w.textContent) || ut && w.namespaceURI === Yt && re === "style" && Mt(w.firstElementChild) || w.nodeType === Rn.progressingInstruction || ut && w.nodeType === Rn.comment && Rt(/<[/\w]/g, w.data))
      return jt(w), !0;
    if (at[re] || !(Xe.tagCheck instanceof Function && Xe.tagCheck(re)) && !ke[re]) {
      if (!at[re] && Co(re) && (ge.tagNameCheck instanceof RegExp && Rt(ge.tagNameCheck, re) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(re)))
        return !1;
      if (Ie && !Ze[re]) {
        const Re = p(w), je = L(w);
        if (je && Re) {
          const Xt = je.length;
          for (let Qt = Xt - 1; Qt >= 0; --Qt) {
            const Jt = y(je[Qt], !0);
            Re.insertBefore(Jt, b(w));
          }
        }
      }
      return jt(w), !0;
    }
    return (I ? I(w) : w.nodeType) === Rn.element && !Ao(w) || (re === "noscript" || re === "noembed" || re === "noframes") && Rt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (jt(w), !0) : (st && w.nodeType === Rn.text && (W = w.textContent, to([j, J, H], (Re) => {
      W = ro(W, Re, " ");
    }), w.textContent !== W && (no(t.removed, {
      element: w.cloneNode()
    }), w.textContent = W)), Dt(_e.afterSanitizeElements, w, null), !1);
  }, Qr = function(w, W, re) {
    if (Te[W] || E && (W === "id" || W === "name") && (re in n || re in Zr))
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
        } else if (!qn[W]) {
          if (!Rt(Me, ro(re, ae, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && w !== "script" && rc(re, "data:") === 0 && hr[w])) {
              if (!(wt && !Rt(Pe, ro(re, ae, "")))) {
                if (re)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, us = Ne({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Co = function(w) {
    return !us[zo(w)] && Rt(Z, w);
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
      const Re = W[De], je = Re.name, Xt = Re.namespaceURI, Qt = Re.value, Jt = Ke(je), $r = Qt;
      let mt = je === "value" ? $r : Lg($r);
      if (re.attrName = Jt, re.attrValue = mt, re.keepAttr = !0, re.forceKeepAttr = void 0, Dt(_e.uponSanitizeAttribute, w, re), mt = re.attrValue, B && (Jt === "id" || Jt === "name") && rc(mt, Ae) !== 0 && (M(je, w), mt = Ae + mt), ut && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, mt)) {
        M(je, w);
        continue;
      }
      if (Jt === "attributename" && nc(mt, "href")) {
        M(je, w);
        continue;
      }
      if (re.forceKeepAttr)
        continue;
      if (!re.keepAttr) {
        M(je, w);
        continue;
      }
      if (!kt && Rt(/\/>/i, mt)) {
        M(je, w);
        continue;
      }
      st && to([j, J, H], (ua) => {
        mt = ro(mt, ua, " ");
      });
      const ca = Ke(w.nodeName);
      if (!Qr(ca, Jt, mt)) {
        M(je, w);
        continue;
      }
      if (x && typeof m == "object" && typeof m.getAttributeType == "function" && !Xt)
        switch (m.getAttributeType(ca, Jt)) {
          case "TrustedHTML": {
            mt = x.createHTML(mt);
            break;
          }
          case "TrustedScriptURL": {
            mt = x.createScriptURL(mt);
            break;
          }
        }
      if (mt !== $r)
        try {
          Xt ? w.setAttributeNS(Xt, je, mt) : w.setAttribute(je, mt), pt(w) ? jt(w) : tc(t.removed);
        } catch {
          M(je, w);
        }
    }
    Dt(_e.afterSanitizeAttributes, w, null);
  }, Jr = function(w) {
    let W = null;
    const re = Le(w);
    for (Dt(_e.beforeSanitizeShadowDOM, w, null); W = re.nextNode(); )
      if (Dt(_e.uponSanitizeShadowNode, W, null), In(W), ia(W), Zt(W.content) && Jr(W.content), (I ? I(W) : W.nodeType) === Rn.element) {
        const Re = A ? A(W) : W.shadowRoot;
        Zt(Re) && (Ln(Re), Jr(Re));
      }
    Dt(_e.afterSanitizeShadowDOM, w, null);
  }, Ln = function(w) {
    const W = I ? I(w) : w.nodeType;
    if (W === Rn.element) {
      const Re = A ? A(w) : w.shadowRoot;
      Zt(Re) && (Ln(Re), Jr(Re));
    }
    const re = L ? L(w) : w.childNodes;
    if (!re)
      return;
    const De = [];
    to(re, (Re) => {
      no(De, Re);
    });
    for (const Re of De)
      Ln(Re);
    if (W === Rn.element) {
      const Re = _ ? _(w) : null;
      if (typeof Re == "string" && Ke(Re) === "template") {
        const je = w.content;
        Zt(je) && Ln(je);
      }
    }
  };
  return t.sanitize = function(ie) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, re = null, De = null, Re = null;
    if (Or = !ie, Or && (ie = "<!-->"), typeof ie != "string" && !Mt(ie) && (ie = Pg(ie), typeof ie != "string"))
      throw No("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (O || Cn(w), t.removed = [], typeof ie == "string" && (nt = !1), nt) {
      const Qt = _ ? _(ie) : ie.nodeName;
      if (typeof Qt == "string") {
        const Jt = Ke(Qt);
        if (!ke[Jt] || at[Jt])
          throw No("root node is forbidden and cannot be sanitized in-place");
      }
      if (pt(ie))
        throw No("root node is clobbered and cannot be sanitized in-place");
      Ln(ie);
    } else if (Mt(ie))
      W = te("<!---->"), re = W.ownerDocument.importNode(ie, !0), re.nodeType === Rn.element && re.nodeName === "BODY" || re.nodeName === "HTML" ? W = re : W.appendChild(re), Ln(re);
    else {
      if (!ne && !st && !T && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return x && ve ? x.createHTML(ie) : ie;
      if (W = te(ie), !W)
        return ne ? null : ve ? C : "";
    }
    W && V && jt(W.firstChild);
    const je = Le(nt ? ie : W);
    for (; De = je.nextNode(); )
      In(De), ia(De), Zt(De.content) && Jr(De.content);
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
    let Xt = T ? W.outerHTML : W.innerHTML;
    return T && ke["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Rt(Hg, W.ownerDocument.doctype.name) && (Xt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + Xt), st && to([j, J, H], (Qt) => {
      Xt = ro(Xt, Qt, " ");
    }), x && ve ? x.createHTML(Xt) : Xt;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cn(ie), O = !0;
  }, t.clearConfig = function() {
    hn = null, O = !1;
  }, t.isValidAttribute = function(ie, w, W) {
    hn || Cn({});
    const re = Ke(ie), De = Ke(w);
    return Qr(re, De, W);
  }, t.addHook = function(ie, w) {
    typeof w == "function" && no(_e[ie], w);
  }, t.removeHook = function(ie, w) {
    if (w !== void 0) {
      const W = Cg(_e[ie], w);
      return W === -1 ? void 0 : Ig(_e[ie], W, 1)[0];
    }
    return tc(_e[ie]);
  }, t.removeHooks = function(ie) {
    _e[ie] = [];
  }, t.removeAllHooks = function() {
    _e = dc();
  }, t;
}
var Yg = wd();
const Zg = {
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
function Xg(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Yg.sanitize(e, Zg) : "";
}
const kd = Symbol(), Aa = "el", Qg = "is-", Fr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Sd = Symbol("namespaceContextKey"), kl = (e) => {
  const t = e || (Kt() ? Ge(Sd, G(Aa)) : G(Aa));
  return N(() => c(t) || Aa);
}, At = (e, t) => {
  const n = kl(t);
  return {
    namespace: n,
    b: (b = "") => Fr(n.value, e, b, "", ""),
    e: (b) => b ? Fr(n.value, e, "", b, "") : "",
    m: (b) => b ? Fr(n.value, e, "", "", b) : "",
    be: (b, L) => b && L ? Fr(n.value, e, b, L, "") : "",
    em: (b, L) => b && L ? Fr(n.value, e, "", b, L) : "",
    bm: (b, L) => b && L ? Fr(n.value, e, b, "", L) : "",
    bem: (b, L, p) => b && L && p ? Fr(n.value, e, b, L, p) : "",
    is: (b, ...L) => {
      const p = L.length >= 1 ? L[0] : !0;
      return b && p ? `${Qg}${b}` : "";
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
}, Jg = Object.prototype.hasOwnProperty, fc = (e, t) => Jg.call(e, t), Mn = Array.isArray, it = (e) => typeof e == "function", Vt = (e) => typeof e == "string", sn = (e) => e !== null && typeof e == "object", pc = (e) => (sn(e) || it(e)) && it(e.then) && it(e.catch), ev = Object.prototype.toString, tv = (e) => ev.call(e), nv = (e) => tv(e) === "[object Object]";
var Td = typeof global == "object" && global && global.Object === Object && global, rv = typeof self == "object" && self && self.Object === Object && self, Gn = Td || rv || Function("return this")(), Un = Gn.Symbol, Ed = Object.prototype, ov = Ed.hasOwnProperty, av = Ed.toString, Po = Un ? Un.toStringTag : void 0;
function sv(e) {
  var t = ov.call(e, Po), n = e[Po];
  try {
    e[Po] = void 0;
    var r = !0;
  } catch {
  }
  var o = av.call(e);
  return r && (t ? e[Po] = n : delete e[Po]), o;
}
var lv = Object.prototype, iv = lv.toString;
function cv(e) {
  return iv.call(e);
}
var uv = "[object Null]", dv = "[object Undefined]", mc = Un ? Un.toStringTag : void 0;
function So(e) {
  return e == null ? e === void 0 ? dv : uv : mc && mc in Object(e) ? sv(e) : cv(e);
}
function mo(e) {
  return e != null && typeof e == "object";
}
var fv = "[object Symbol]";
function Za(e) {
  return typeof e == "symbol" || mo(e) && So(e) == fv;
}
function pv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tn = Array.isArray, hc = Un ? Un.prototype : void 0, gc = hc ? hc.toString : void 0;
function Ad(e) {
  if (typeof e == "string")
    return e;
  if (Tn(e))
    return pv(e, Ad) + "";
  if (Za(e))
    return gc ? gc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var mv = /\s/;
function hv(e) {
  for (var t = e.length; t-- && mv.test(e.charAt(t)); )
    ;
  return t;
}
var gv = /^\s+/;
function vv(e) {
  return e && e.slice(0, hv(e) + 1).replace(gv, "");
}
function Er(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var vc = NaN, bv = /^[-+]0x[0-9a-f]+$/i, yv = /^0b[01]+$/i, _v = /^0o[0-7]+$/i, wv = parseInt;
function bc(e) {
  if (typeof e == "number")
    return e;
  if (Za(e))
    return vc;
  if (Er(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Er(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = vv(e);
  var n = yv.test(e);
  return n || _v.test(e) ? wv(e.slice(2), n ? 2 : 8) : bv.test(e) ? vc : +e;
}
function Cd(e) {
  return e;
}
var kv = "[object AsyncFunction]", Sv = "[object Function]", Tv = "[object GeneratorFunction]", Ev = "[object Proxy]";
function Id(e) {
  if (!Er(e))
    return !1;
  var t = So(e);
  return t == Sv || t == Tv || t == kv || t == Ev;
}
var Es = Gn["__core-js_shared__"], yc = function() {
  var e = /[^.]+$/.exec(Es && Es.keys && Es.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Av(e) {
  return !!yc && yc in e;
}
var Cv = Function.prototype, Iv = Cv.toString;
function Gr(e) {
  if (e != null) {
    try {
      return Iv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Lv = /[\\^$.*+?()[\]{}|]/g, Ov = /^\[object .+?Constructor\]$/, xv = Function.prototype, Rv = Object.prototype, Nv = xv.toString, Pv = Rv.hasOwnProperty, $v = RegExp(
  "^" + Nv.call(Pv).replace(Lv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mv(e) {
  if (!Er(e) || Av(e))
    return !1;
  var t = Id(e) ? $v : Ov;
  return t.test(Gr(e));
}
function Dv(e, t) {
  return e?.[t];
}
function Kr(e, t) {
  var n = Dv(e, t);
  return Mv(n) ? n : void 0;
}
var Gs = Kr(Gn, "WeakMap");
function Fv(e, t, n) {
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
var zv = 800, Bv = 16, Vv = Date.now;
function jv(e) {
  var t = 0, n = 0;
  return function() {
    var r = Vv(), o = Bv - (r - n);
    if (n = r, o > 0) {
      if (++t >= zv)
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
var $a = function() {
  try {
    var e = Kr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wv = $a ? function(e, t) {
  return $a(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Uv(t),
    writable: !0
  });
} : Cd, Hv = jv(Wv);
function Gv(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Kv = 9007199254740991, qv = /^(?:0|[1-9]\d*)$/;
function Sl(e, t) {
  var n = typeof e;
  return t = t ?? Kv, !!t && (n == "number" || n != "symbol" && qv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Yv(e, t, n) {
  t == "__proto__" && $a ? $a(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Tl(e, t) {
  return e === t || e !== e && t !== t;
}
var Zv = Object.prototype, Xv = Zv.hasOwnProperty;
function Qv(e, t, n) {
  var r = e[t];
  (!(Xv.call(e, t) && Tl(r, n)) || n === void 0 && !(t in e)) && Yv(e, t, n);
}
var _c = Math.max;
function Jv(e, t, n) {
  return t = _c(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = _c(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Fv(e, this, i);
  };
}
var eb = 9007199254740991;
function El(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eb;
}
function tb(e) {
  return e != null && El(e.length) && !Id(e);
}
var nb = Object.prototype;
function rb(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || nb;
  return e === n;
}
function ob(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ab = "[object Arguments]";
function wc(e) {
  return mo(e) && So(e) == ab;
}
var Ld = Object.prototype, sb = Ld.hasOwnProperty, lb = Ld.propertyIsEnumerable, Al = wc(/* @__PURE__ */ function() {
  return arguments;
}()) ? wc : function(e) {
  return mo(e) && sb.call(e, "callee") && !lb.call(e, "callee");
};
function ib() {
  return !1;
}
var Od = typeof exports == "object" && exports && !exports.nodeType && exports, kc = Od && typeof module == "object" && module && !module.nodeType && module, cb = kc && kc.exports === Od, Sc = cb ? Gn.Buffer : void 0, ub = Sc ? Sc.isBuffer : void 0, Ks = ub || ib, db = "[object Arguments]", fb = "[object Array]", pb = "[object Boolean]", mb = "[object Date]", hb = "[object Error]", gb = "[object Function]", vb = "[object Map]", bb = "[object Number]", yb = "[object Object]", _b = "[object RegExp]", wb = "[object Set]", kb = "[object String]", Sb = "[object WeakMap]", Tb = "[object ArrayBuffer]", Eb = "[object DataView]", Ab = "[object Float32Array]", Cb = "[object Float64Array]", Ib = "[object Int8Array]", Lb = "[object Int16Array]", Ob = "[object Int32Array]", xb = "[object Uint8Array]", Rb = "[object Uint8ClampedArray]", Nb = "[object Uint16Array]", Pb = "[object Uint32Array]", Je = {};
Je[Ab] = Je[Cb] = Je[Ib] = Je[Lb] = Je[Ob] = Je[xb] = Je[Rb] = Je[Nb] = Je[Pb] = !0;
Je[db] = Je[fb] = Je[Tb] = Je[pb] = Je[Eb] = Je[mb] = Je[hb] = Je[gb] = Je[vb] = Je[bb] = Je[yb] = Je[_b] = Je[wb] = Je[kb] = Je[Sb] = !1;
function $b(e) {
  return mo(e) && El(e.length) && !!Je[So(e)];
}
function Mb(e) {
  return function(t) {
    return e(t);
  };
}
var xd = typeof exports == "object" && exports && !exports.nodeType && exports, Vo = xd && typeof module == "object" && module && !module.nodeType && module, Db = Vo && Vo.exports === xd, As = Db && Td.process, Tc = function() {
  try {
    var e = Vo && Vo.require && Vo.require("util").types;
    return e || As && As.binding && As.binding("util");
  } catch {
  }
}(), Ec = Tc && Tc.isTypedArray, Rd = Ec ? Mb(Ec) : $b, Fb = Object.prototype, zb = Fb.hasOwnProperty;
function Bb(e, t) {
  var n = Tn(e), r = !n && Al(e), o = !n && !r && Ks(e), a = !n && !r && !o && Rd(e), s = n || r || o || a, i = s ? ob(e.length, String) : [], l = i.length;
  for (var u in e)
    zb.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Sl(u, l))) && i.push(u);
  return i;
}
function Vb(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var jb = Vb(Object.keys, Object), Ub = Object.prototype, Wb = Ub.hasOwnProperty;
function Hb(e) {
  if (!rb(e))
    return jb(e);
  var t = [];
  for (var n in Object(e))
    Wb.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Nd(e) {
  return tb(e) ? Bb(e) : Hb(e);
}
var Gb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Kb = /^\w*$/;
function Cl(e, t) {
  if (Tn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Za(e) ? !0 : Kb.test(e) || !Gb.test(e) || t != null && e in Object(t);
}
var Xo = Kr(Object, "create");
function qb() {
  this.__data__ = Xo ? Xo(null) : {}, this.size = 0;
}
function Yb(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Zb = "__lodash_hash_undefined__", Xb = Object.prototype, Qb = Xb.hasOwnProperty;
function Jb(e) {
  var t = this.__data__;
  if (Xo) {
    var n = t[e];
    return n === Zb ? void 0 : n;
  }
  return Qb.call(t, e) ? t[e] : void 0;
}
var e0 = Object.prototype, t0 = e0.hasOwnProperty;
function n0(e) {
  var t = this.__data__;
  return Xo ? t[e] !== void 0 : t0.call(t, e);
}
var r0 = "__lodash_hash_undefined__";
function o0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Xo && t === void 0 ? r0 : t, this;
}
function jr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
jr.prototype.clear = qb;
jr.prototype.delete = Yb;
jr.prototype.get = Jb;
jr.prototype.has = n0;
jr.prototype.set = o0;
function a0() {
  this.__data__ = [], this.size = 0;
}
function Xa(e, t) {
  for (var n = e.length; n--; )
    if (Tl(e[n][0], t))
      return n;
  return -1;
}
var s0 = Array.prototype, l0 = s0.splice;
function i0(e) {
  var t = this.__data__, n = Xa(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : l0.call(t, n, 1), --this.size, !0;
}
function c0(e) {
  var t = this.__data__, n = Xa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function u0(e) {
  return Xa(this.__data__, e) > -1;
}
function d0(e, t) {
  var n = this.__data__, r = Xa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function pr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pr.prototype.clear = a0;
pr.prototype.delete = i0;
pr.prototype.get = c0;
pr.prototype.has = u0;
pr.prototype.set = d0;
var Qo = Kr(Gn, "Map");
function f0() {
  this.size = 0, this.__data__ = {
    hash: new jr(),
    map: new (Qo || pr)(),
    string: new jr()
  };
}
function p0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qa(e, t) {
  var n = e.__data__;
  return p0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function m0(e) {
  var t = Qa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function h0(e) {
  return Qa(this, e).get(e);
}
function g0(e) {
  return Qa(this, e).has(e);
}
function v0(e, t) {
  var n = Qa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function mr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mr.prototype.clear = f0;
mr.prototype.delete = m0;
mr.prototype.get = h0;
mr.prototype.has = g0;
mr.prototype.set = v0;
var b0 = "Expected a function";
function Il(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(b0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Il.Cache || mr)(), n;
}
Il.Cache = mr;
var y0 = 500;
function _0(e) {
  var t = Il(e, function(r) {
    return n.size === y0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var w0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, k0 = /\\(\\)?/g, S0 = _0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(w0, function(n, r, o, a) {
    t.push(o ? a.replace(k0, "$1") : r || n);
  }), t;
});
function T0(e) {
  return e == null ? "" : Ad(e);
}
function Ja(e, t) {
  return Tn(e) ? e : Cl(e, t) ? [e] : S0(T0(e));
}
function ra(e) {
  if (typeof e == "string" || Za(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ll(e, t) {
  t = Ja(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ra(t[n++])];
  return n && n == r ? e : void 0;
}
function kr(e, t, n) {
  var r = e == null ? void 0 : Ll(e, t);
  return r === void 0 ? n : r;
}
function Pd(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ac = Un ? Un.isConcatSpreadable : void 0;
function E0(e) {
  return Tn(e) || Al(e) || !!(Ac && e && e[Ac]);
}
function A0(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = E0), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Pd(o, i) : o[o.length] = i;
  }
  return o;
}
function C0(e) {
  var t = e == null ? 0 : e.length;
  return t ? A0(e) : [];
}
function I0(e) {
  return Hv(Jv(e, void 0, C0), e + "");
}
function wr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Tn(e) ? e : [e];
}
function L0() {
  this.__data__ = new pr(), this.size = 0;
}
function O0(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function x0(e) {
  return this.__data__.get(e);
}
function R0(e) {
  return this.__data__.has(e);
}
var N0 = 200;
function P0(e, t) {
  var n = this.__data__;
  if (n instanceof pr) {
    var r = n.__data__;
    if (!Qo || r.length < N0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new mr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function lr(e) {
  var t = this.__data__ = new pr(e);
  this.size = t.size;
}
lr.prototype.clear = L0;
lr.prototype.delete = O0;
lr.prototype.get = x0;
lr.prototype.has = R0;
lr.prototype.set = P0;
function $0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function M0() {
  return [];
}
var D0 = Object.prototype, F0 = D0.propertyIsEnumerable, Cc = Object.getOwnPropertySymbols, z0 = Cc ? function(e) {
  return e == null ? [] : (e = Object(e), $0(Cc(e), function(t) {
    return F0.call(e, t);
  }));
} : M0;
function B0(e, t, n) {
  var r = t(e);
  return Tn(e) ? r : Pd(r, n(e));
}
function Ic(e) {
  return B0(e, Nd, z0);
}
var qs = Kr(Gn, "DataView"), Ys = Kr(Gn, "Promise"), Zs = Kr(Gn, "Set"), Lc = "[object Map]", V0 = "[object Object]", Oc = "[object Promise]", xc = "[object Set]", Rc = "[object WeakMap]", Nc = "[object DataView]", j0 = Gr(qs), U0 = Gr(Qo), W0 = Gr(Ys), H0 = Gr(Zs), G0 = Gr(Gs), _r = So;
(qs && _r(new qs(new ArrayBuffer(1))) != Nc || Qo && _r(new Qo()) != Lc || Ys && _r(Ys.resolve()) != Oc || Zs && _r(new Zs()) != xc || Gs && _r(new Gs()) != Rc) && (_r = function(e) {
  var t = So(e), n = t == V0 ? e.constructor : void 0, r = n ? Gr(n) : "";
  if (r)
    switch (r) {
      case j0:
        return Nc;
      case U0:
        return Lc;
      case W0:
        return Oc;
      case H0:
        return xc;
      case G0:
        return Rc;
    }
  return t;
});
var Pc = Gn.Uint8Array, K0 = "__lodash_hash_undefined__";
function q0(e) {
  return this.__data__.set(e, K0), this;
}
function Y0(e) {
  return this.__data__.has(e);
}
function Ma(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new mr(); ++t < n; )
    this.add(e[t]);
}
Ma.prototype.add = Ma.prototype.push = q0;
Ma.prototype.has = Y0;
function Z0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function X0(e, t) {
  return e.has(t);
}
var Q0 = 1, J0 = 2;
function $d(e, t, n, r, o, a) {
  var s = n & Q0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var m = -1, h = !0, y = n & J0 ? new Ma() : void 0;
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
      if (!Z0(t, function(p, A) {
        if (!X0(y, A) && (g === p || o(g, p, n, r, a)))
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
function ey(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function ty(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ny = 1, ry = 2, oy = "[object Boolean]", ay = "[object Date]", sy = "[object Error]", ly = "[object Map]", iy = "[object Number]", cy = "[object RegExp]", uy = "[object Set]", dy = "[object String]", fy = "[object Symbol]", py = "[object ArrayBuffer]", my = "[object DataView]", $c = Un ? Un.prototype : void 0, Cs = $c ? $c.valueOf : void 0;
function hy(e, t, n, r, o, a, s) {
  switch (n) {
    case my:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case py:
      return !(e.byteLength != t.byteLength || !a(new Pc(e), new Pc(t)));
    case oy:
    case ay:
    case iy:
      return Tl(+e, +t);
    case sy:
      return e.name == t.name && e.message == t.message;
    case cy:
    case dy:
      return e == t + "";
    case ly:
      var i = ey;
    case uy:
      var l = r & ny;
      if (i || (i = ty), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= ry, s.set(e, t);
      var f = $d(i(e), i(t), r, o, a, s);
      return s.delete(e), f;
    case fy:
      if (Cs)
        return Cs.call(e) == Cs.call(t);
  }
  return !1;
}
var gy = 1, vy = Object.prototype, by = vy.hasOwnProperty;
function yy(e, t, n, r, o, a) {
  var s = n & gy, i = Ic(e), l = i.length, u = Ic(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var m = l; m--; ) {
    var h = i[m];
    if (!(s ? h in t : by.call(t, h)))
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
var _y = 1, Mc = "[object Arguments]", Dc = "[object Array]", va = "[object Object]", wy = Object.prototype, Fc = wy.hasOwnProperty;
function ky(e, t, n, r, o, a) {
  var s = Tn(e), i = Tn(t), l = s ? Dc : _r(e), u = i ? Dc : _r(t);
  l = l == Mc ? va : l, u = u == Mc ? va : u;
  var f = l == va, m = u == va, h = l == u;
  if (h && Ks(e)) {
    if (!Ks(t))
      return !1;
    s = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new lr()), s || Rd(e) ? $d(e, t, n, r, o, a) : hy(e, t, l, n, r, o, a);
  if (!(n & _y)) {
    var y = f && Fc.call(e, "__wrapped__"), g = m && Fc.call(t, "__wrapped__");
    if (y || g) {
      var b = y ? e.value() : e, L = g ? t.value() : t;
      return a || (a = new lr()), o(b, L, n, r, a);
    }
  }
  return h ? (a || (a = new lr()), yy(e, t, n, r, o, a)) : !1;
}
function es(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !mo(e) && !mo(t) ? e !== e && t !== t : ky(e, t, n, r, es, o);
}
var Sy = 1, Ty = 2;
function Ey(e, t, n, r) {
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
      var f = new lr(), m;
      if (!(m === void 0 ? es(u, l, Sy | Ty, r, f) : m))
        return !1;
    }
  }
  return !0;
}
function Md(e) {
  return e === e && !Er(e);
}
function Ay(e) {
  for (var t = Nd(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Md(o)];
  }
  return t;
}
function Dd(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Cy(e) {
  var t = Ay(e);
  return t.length == 1 && t[0][2] ? Dd(t[0][0], t[0][1]) : function(n) {
    return n === e || Ey(n, e, t);
  };
}
function Iy(e, t) {
  return e != null && t in Object(e);
}
function Ly(e, t, n) {
  t = Ja(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = ra(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && El(o) && Sl(s, o) && (Tn(e) || Al(e)));
}
function Fd(e, t) {
  return e != null && Ly(e, t, Iy);
}
var Oy = 1, xy = 2;
function Ry(e, t) {
  return Cl(e) && Md(t) ? Dd(ra(e), t) : function(n) {
    var r = kr(n, e);
    return r === void 0 && r === t ? Fd(n, e) : es(t, r, Oy | xy);
  };
}
function Ny(e) {
  return function(t) {
    return t?.[e];
  };
}
function Py(e) {
  return function(t) {
    return Ll(t, e);
  };
}
function $y(e) {
  return Cl(e) ? Ny(ra(e)) : Py(e);
}
function My(e) {
  return typeof e == "function" ? e : e == null ? Cd : typeof e == "object" ? Tn(e) ? Ry(e[0], e[1]) : Cy(e) : $y(e);
}
var Is = function() {
  return Gn.Date.now();
}, Dy = "Expected a function", Fy = Math.max, zy = Math.min;
function By(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Dy);
  t = bc(t) || 0, Er(n) && (f = !!n.leading, m = "maxWait" in n, a = m ? Fy(bc(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function y(x) {
    var C = r, Y = o;
    return r = o = void 0, u = x, s = e.apply(Y, C), s;
  }
  function g(x) {
    return u = x, i = setTimeout(p, t), f ? y(x) : s;
  }
  function b(x) {
    var C = x - l, Y = x - u, X = t - C;
    return m ? zy(X, a - Y) : X;
  }
  function L(x) {
    var C = x - l, Y = x - u;
    return l === void 0 || C >= t || C < 0 || m && Y >= a;
  }
  function p() {
    var x = Is();
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
    return i === void 0 ? s : A(Is());
  }
  function _() {
    var x = Is(), C = L(x);
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
function Vy(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Gv(e, My(t), o);
}
function Da(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function jo(e, t) {
  return es(e, t);
}
function ir(e) {
  return e == null;
}
function jy(e) {
  return e === void 0;
}
function Uy(e, t, n, r) {
  if (!Er(e))
    return e;
  t = Ja(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = ra(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = Er(f) ? f : Sl(t[o + 1]) ? [] : {});
    }
    Qv(i, l, u), i = i[l];
  }
  return e;
}
function Wy(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = Ll(e, s);
    n(i, s) && Uy(a, Ja(s, e), i);
  }
  return a;
}
function Hy(e, t) {
  return Wy(e, t, function(n, r) {
    return Fd(e, r);
  });
}
var Gy = I0(function(e, t) {
  return e == null ? {} : Hy(e, t);
});
const Dn = (e) => e === void 0, Tr = (e) => typeof e == "boolean", We = (e) => typeof e == "number", kn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ky = (e) => Vt(e) ? !Number.isNaN(Number(e)) : !1;
var qy = Object.defineProperty, Yy = Object.defineProperties, Zy = Object.getOwnPropertyDescriptors, zc = Object.getOwnPropertySymbols, Xy = Object.prototype.hasOwnProperty, Qy = Object.prototype.propertyIsEnumerable, Bc = (e, t, n) => t in e ? qy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jy = (e, t) => {
  for (var n in t || (t = {}))
    Xy.call(t, n) && Bc(e, n, t[n]);
  if (zc)
    for (var n of zc(t))
      Qy.call(t, n) && Bc(e, n, t[n]);
  return e;
}, e1 = (e, t) => Yy(e, Zy(t));
function t1(e, t) {
  var n;
  const r = Sr();
  return Lu(() => {
    r.value = e();
  }, e1(Jy({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), rl(r);
}
var Vc;
const Tt = typeof window < "u", n1 = (e) => typeof e == "string", zd = () => {
}, Xs = Tt && ((Vc = window?.navigator) == null ? void 0 : Vc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ol(e) {
  return typeof e == "function" ? e() : c(e);
}
function r1(e) {
  return e;
}
function oa(e) {
  return rp() ? (op(e), !0) : !1;
}
function o1(e, t = !0) {
  Kt() ? _t(e) : t ? e() : vt(e);
}
function Bd(e, t, n = {}) {
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
    }, Ol(t));
  }
  return r && (o.value = !0, Tt && l()), oa(i), {
    isPending: rl(o),
    start: l,
    stop: i
  };
}
function ar(e) {
  var t;
  const n = Ol(e);
  return (t = n?.$el) != null ? t : n;
}
const ts = Tt ? window : void 0;
function Sn(...e) {
  let t, n, r, o;
  if (n1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = ts) : [t, n, r, o] = e, !t)
    return zd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, m, h, y) => (f.addEventListener(m, h, y), () => f.removeEventListener(m, h, y)), l = Oe(() => [ar(t), Ol(o)], ([f, m]) => {
    s(), f && a.push(...n.flatMap((h) => r.map((y) => i(f, h, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return oa(u), u;
}
let jc = !1;
function a1(e, t, n = {}) {
  const { window: r = ts, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Xs && !jc && (jc = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", zd)));
  let i = !0;
  const l = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === h.target || h.composedPath().includes(g));
    {
      const g = ar(y);
      return g && (h.target === g || h.composedPath().includes(g));
    }
  }), f = [
    Sn(r, "click", (h) => {
      const y = ar(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !l(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: a }),
    Sn(r, "pointerdown", (h) => {
      const y = ar(e);
      y && (i = !h.composedPath().includes(y) && !l(h));
    }, { passive: !0 }),
    s && Sn(r, "blur", (h) => {
      var y;
      const g = ar(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
function Vd(e, t = !1) {
  const n = G(), r = () => n.value = !!e();
  return r(), o1(r, t), n;
}
const Uc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wc = "__vueuse_ssr_handlers__";
Uc[Wc] = Uc[Wc] || {};
var Hc = Object.getOwnPropertySymbols, s1 = Object.prototype.hasOwnProperty, l1 = Object.prototype.propertyIsEnumerable, i1 = (e, t) => {
  var n = {};
  for (var r in e)
    s1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Hc)
    for (var r of Hc(e))
      t.indexOf(r) < 0 && l1.call(e, r) && (n[r] = e[r]);
  return n;
};
function $n(e, t, n = {}) {
  const r = n, { window: o = ts } = r, a = i1(r, ["window"]);
  let s;
  const i = Vd(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Oe(() => ar(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return oa(f), {
    isSupported: i,
    stop: f
  };
}
var Gc = Object.getOwnPropertySymbols, c1 = Object.prototype.hasOwnProperty, u1 = Object.prototype.propertyIsEnumerable, d1 = (e, t) => {
  var n = {};
  for (var r in e)
    c1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Gc)
    for (var r of Gc(e))
      t.indexOf(r) < 0 && u1.call(e, r) && (n[r] = e[r]);
  return n;
};
function f1(e, t, n = {}) {
  const r = n, { window: o = ts } = r, a = d1(r, ["window"]);
  let s;
  const i = Vd(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Oe(() => ar(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return oa(f), {
    isSupported: i,
    stop: f
  };
}
var Kc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Kc || (Kc = {}));
var p1 = Object.defineProperty, qc = Object.getOwnPropertySymbols, m1 = Object.prototype.hasOwnProperty, h1 = Object.prototype.propertyIsEnumerable, Yc = (e, t, n) => t in e ? p1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, g1 = (e, t) => {
  for (var n in t || (t = {}))
    m1.call(t, n) && Yc(e, n, t[n]);
  if (qc)
    for (var n of qc(t))
      h1.call(t, n) && Yc(e, n, t[n]);
  return e;
};
const v1 = {
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
g1({
  linear: r1
}, v1);
class b1 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function xl(e, t) {
  throw new b1(`[${e}] ${t}`);
}
const Zc = {
  current: 0
}, Xc = G(0), jd = 2e3, Qc = Symbol("elZIndexContextKey"), Ud = Symbol("zIndexContextKey"), Wd = (e) => {
  const t = Kt() ? Ge(Qc, Zc) : Zc, n = e || (Kt() ? Ge(Ud, void 0) : void 0), r = N(() => {
    const s = c(n);
    return We(s) ? s : jd;
  }), o = N(() => r.value + Xc.value), a = () => (t.current++, Xc.value = t.current, o.value);
  return !Tt && Ge(Qc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var y1 = {
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
const _1 = (e) => (t, n) => w1(t, n, c(e)), w1 = (e, t, n) => kr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), k1 = (e) => {
  const t = N(() => c(e).name), n = co(e) ? e : G(e);
  return {
    lang: t,
    locale: n,
    t: _1(e)
  };
}, Hd = Symbol("localeContextKey"), Rl = (e) => {
  const t = e || Ge(Hd, G());
  return k1(N(() => t.value || y1));
}, Gd = "__epPropKey", Ee = (e) => e, S1 = (e) => sn(e) && !!e[Gd], ns = (e, t) => {
  if (!sn(e) || S1(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, m = [];
      if (n && (m = Array.from(n), fc(e, "default") && m.push(o), f || (f = m.includes(u))), s && (f || (f = s(u))), !f && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        ap(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Gd]: !0
  };
  return fc(e, "default") && (l.default = o), l;
}, tt = (e) => Da(Object.entries(e).map(([t, n]) => [
  t,
  ns(n, t)
])), Nl = ["", "default", "small", "large"], rs = ns({
  type: String,
  values: Nl,
  required: !1
}), Kd = Symbol("size"), T1 = () => {
  const e = Ge(Kd, {});
  return N(() => c(e.size) || "");
}, qd = Symbol("emptyValuesContextKey"), E1 = ["", void 0, null], A1 = void 0, Yd = tt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => it(e) ? !e() : !e
  }
}), C1 = (e, t) => {
  const n = Kt() ? Ge(qd, G({})) : G({}), r = N(() => e.emptyValues || n.value.emptyValues || E1), o = N(() => it(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : it(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : A1), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Jc = (e) => Object.keys(e), Fa = G();
function Zd(e, t = void 0) {
  return Kt() ? Ge(kd, Fa) : Fa;
}
function Xd(e, t) {
  const n = Zd(), r = At(e, N(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Aa;
  })), o = Rl(N(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Wd(N(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || jd;
  })), s = N(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Qd(N(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Qd = (e, t, n = !1) => {
  var r;
  const o = !!Kt(), a = o ? Zd() : void 0, s = (r = void 0) != null ? r : o ? jn : void 0;
  if (!s)
    return;
  const i = N(() => {
    const l = c(e);
    return a?.value ? I1(a.value, l) : l;
  });
  return s(kd, i), s(Hd, N(() => i.value.locale)), s(Sd, N(() => i.value.namespace)), s(Ud, N(() => i.value.zIndex)), s(Kd, {
    size: N(() => i.value.size || "")
  }), s(qd, N(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Fa.value) && (Fa.value = i.value), i;
}, I1 = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Jc(e), ...Jc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, xt = "update:modelValue", dr = "change", cr = "input";
var ot = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function ho(e, t = "px") {
  if (!e)
    return "";
  if (We(e) || Ky(e))
    return `${e}${t}`;
  if (Vt(e))
    return e;
}
function L1(e, t) {
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
const En = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Jd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ef = (e) => (e.install = Zo, e), O1 = tt({
  size: {
    type: Ee([Number, String])
  },
  color: {
    type: String
  }
}), x1 = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), R1 = /* @__PURE__ */ ce({
  ...x1,
  props: O1,
  setup(e) {
    const t = e, n = At("icon"), r = N(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Dn(o) ? void 0 : ho(o),
        "--color": a
      };
    });
    return (o, a) => (R(), U("i", uo({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Ce(o.$slots, "default")
    ], 16));
  }
});
var N1 = /* @__PURE__ */ ot(R1, [["__file", "icon.vue"]]);
const St = En(N1);
/*! Element Plus Icons Vue v2.3.1 */
var P1 = /* @__PURE__ */ ce({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), tf = P1, $1 = /* @__PURE__ */ ce({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), M1 = $1, D1 = /* @__PURE__ */ ce({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (R(), U("svg", {
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
}), F1 = D1, z1 = /* @__PURE__ */ ce({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), B1 = z1, V1 = /* @__PURE__ */ ce({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (R(), U("svg", {
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
}), Pl = V1, j1 = /* @__PURE__ */ ce({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), za = j1, U1 = /* @__PURE__ */ ce({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (R(), U("svg", {
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
}), W1 = U1, H1 = /* @__PURE__ */ ce({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), G1 = H1, K1 = /* @__PURE__ */ ce({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), nf = K1, q1 = /* @__PURE__ */ ce({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Y1 = q1, Z1 = /* @__PURE__ */ ce({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), X1 = Z1, Q1 = /* @__PURE__ */ ce({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), J1 = Q1, e_ = /* @__PURE__ */ ce({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), t_ = e_, n_ = /* @__PURE__ */ ce({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), r_ = n_;
const Fn = Ee([
  String,
  Object,
  Function
]), o_ = {
  Close: za
}, a_ = {
  Close: za
}, Ba = {
  success: J1,
  warning: r_,
  error: B1,
  info: G1
}, rf = {
  validating: nf,
  success: F1,
  error: Pl
}, of = () => Tt && /firefox/i.test(window.navigator.userAgent);
let en;
const s_ = {
  height: "0",
  visibility: "hidden",
  overflow: of() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, l_ = [
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
function i_(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: l_.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function eu(e, t = 1, n) {
  var r;
  en || (en = document.createElement("textarea"), document.body.appendChild(en));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = i_(e);
  i.forEach(([m, h]) => en?.style.setProperty(m, h)), Object.entries(s_).forEach(([m, h]) => en?.style.setProperty(m, h, "important")), en.value = e.value || e.placeholder || "";
  let l = en.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), en.value = "";
  const f = en.scrollHeight - o;
  if (We(t)) {
    let m = f * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (We(n)) {
    let m = f * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = en.parentNode) == null || r.removeChild(en), en = void 0, u;
}
const af = (e) => e, c_ = tt({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), qr = (e) => Gy(c_, e), u_ = tt({
  id: {
    type: String,
    default: void 0
  },
  size: rs,
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
    type: Fn
  },
  prefixIcon: {
    type: Fn
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
    default: () => af({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...qr(["ariaLabel"])
}), d_ = {
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
}, f_ = ["class", "style"], p_ = /^on[A-Z]/, m_ = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = N(() => (n?.value || []).concat(f_)), o = Kt();
  return o ? N(() => {
    var a;
    return Da(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && p_.test(s))));
  }) : N(() => ({}));
}, $l = Symbol("formContextKey"), Va = Symbol("formItemContextKey"), tu = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, h_ = Symbol("elIdInjection"), sf = () => Kt() ? Ge(h_, tu) : tu, os = (e) => {
  const t = sf(), n = kl();
  return t1(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, as = () => {
  const e = Ge($l, void 0), t = Ge(Va, void 0);
  return {
    form: e,
    formItem: t
  };
}, Ml = (e, {
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
  return _t(() => {
    a = Oe([nr(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : os().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Wa(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, lf = (e) => {
  const t = Kt();
  return N(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, aa = (e, t = {}) => {
  const n = G(void 0), r = t.prop ? n : lf("size"), o = t.global ? n : T1(), a = t.form ? { size: void 0 } : Ge($l, void 0), s = t.formItem ? { size: void 0 } : Ge(Va, void 0);
  return N(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, Dl = (e) => {
  const t = lf("disabled"), n = Ge($l, void 0);
  return N(() => t.value || c(e) || n?.disabled || !1);
};
function cf(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Kt(), { emit: s } = a, i = Sr(), l = G(!1), u = (h) => {
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
  }), Sn(i, "focus", u, !0), Sn(i, "blur", f, !0), Sn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const g_ = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function uf({
  afterComposition: e,
  emit: t
}) {
  const n = G(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !g_(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, vt(() => e(i)));
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
function v_(e) {
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
const b_ = "ElInput", y_ = ce({
  name: b_,
  inheritAttrs: !1
}), __ = /* @__PURE__ */ ce({
  ...y_,
  props: u_,
  emits: d_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = sp(), a = m_(), s = lp(), i = N(() => [
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
    ]), { form: u, formItem: f } = as(), { inputId: m } = Ml(r, {
      formItemContext: f
    }), h = aa(), y = Dl(), g = At("input"), b = At("textarea"), L = Sr(), p = Sr(), A = G(!1), P = G(!1), I = G(), _ = Sr(r.inputStyle), x = N(() => L.value || p.value), { wrapperRef: C, isFocused: Y, handleFocus: X, handleBlur: se } = cf(x, {
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
    }), le = N(() => f?.validateState || ""), ye = N(() => le.value && rf[le.value]), _e = N(() => P.value ? t_ : W1), j = N(() => [
      o.style
    ]), J = N(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), H = N(() => ir(r.modelValue) ? "" : String(r.modelValue)), de = N(() => r.clearable && !y.value && !r.readonly && !!H.value && (Y.value || A.value)), pe = N(() => r.showPassword && !y.value && !!H.value && (!!H.value || Y.value)), Pe = N(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), ae = N(() => H.value.length), Z = N(() => !!Pe.value && ae.value > Number(r.maxlength)), Me = N(() => !!s.suffix || !!r.suffixIcon || de.value || r.showPassword || Pe.value || !!le.value && he.value), [ke, Se] = v_(L);
    $n(p, (E) => {
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
          const Ae = sn(B) ? B.minRows : void 0, Ie = sn(B) ? B.maxRows : void 0, nt = eu(p.value, Ae, Ie);
          _.value = {
            overflowY: "hidden",
            ...nt
          }, vt(() => {
            p.value.offsetHeight, _.value = nt;
          });
        } else
          _.value = {
            minHeight: eu(p.value).minHeight
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
        n(xt, B), n(cr, B), await vt(), at(), Se();
      }
    }, Xe = (E) => {
      let { value: B } = E.target;
      r.formatter && r.parser && (B = r.parser(B)), n(dr, B);
    }, {
      isComposing: Lt,
      handleCompositionStart: ct,
      handleCompositionUpdate: wt,
      handleCompositionEnd: kt
    } = uf({ emit: n, afterComposition: Te }), st = () => {
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
      n(xt, ""), n(dr, ""), n("clear"), n(cr, "");
    };
    return Oe(() => r.modelValue, () => {
      var E;
      vt(() => we()), r.validateEvent && ((E = f?.validate) == null || E.call(f, "change").catch((B) => void 0));
    }), Oe(H, () => at()), Oe(() => r.type, async () => {
      await vt(), at(), we();
    }), _t(() => {
      !r.formatter && r.parser, at(), vt(we);
    }), t({
      input: L,
      textarea: p,
      ref: x,
      textareaStyle: J,
      autosize: nr(r, "autosize"),
      isComposing: Lt,
      focus: ut,
      blur: T,
      select: $e,
      clear: ve,
      resizeTextarea: we
    }), (E, B) => (R(), U("div", {
      class: q([
        c(i),
        {
          [c(g).bm("group", "append")]: E.$slots.append,
          [c(g).bm("group", "prepend")]: E.$slots.prepend
        }
      ]),
      style: Nt(c(j)),
      onMouseenter: V,
      onMouseleave: O
    }, [
      ee(" input "),
      E.type !== "textarea" ? (R(), U(ft, { key: 0 }, [
        ee(" prepend slot "),
        E.$slots.prepend ? (R(), U("div", {
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
          E.$slots.prefix || E.prefixIcon ? (R(), U("span", {
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
                  (R(), me(Ht(E.prefixIcon)))
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
            onCompositionupdate: c(wt),
            onCompositionend: c(kt),
            onInput: Te,
            onChange: Xe,
            onKeydown: ne
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(Me) ? (R(), U("span", {
            key: 1,
            class: q(c(g).e("suffix"))
          }, [
            v("span", {
              class: q(c(g).e("suffix-inner"))
            }, [
              !c(de) || !c(pe) || !c(Pe) ? (R(), U(ft, { key: 0 }, [
                Ce(E.$slots, "suffix"),
                E.suffixIcon ? (R(), me(c(St), {
                  key: 0,
                  class: q(c(g).e("icon"))
                }, {
                  default: fe(() => [
                    (R(), me(Ht(E.suffixIcon)))
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
                  F(c(Pl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(pe) ? (R(), me(c(St), {
                key: 2,
                class: q([c(g).e("icon"), c(g).e("password")]),
                onClick: st
              }, {
                default: fe(() => [
                  (R(), me(Ht(c(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(Pe) ? (R(), U("span", {
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
                  (R(), me(Ht(c(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        E.$slots.append ? (R(), U("div", {
          key: 1,
          class: q(c(g).be("group", "append"))
        }, [
          Ce(E.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (R(), U(ft, { key: 1 }, [
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
          onCompositionupdate: c(wt),
          onCompositionend: c(kt),
          onInput: Te,
          onFocus: c(X),
          onBlur: c(se),
          onChange: Xe,
          onKeydown: ne
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(Pe) ? (R(), U("span", {
          key: 0,
          style: Nt(I.value),
          class: q(c(g).e("count"))
        }, D(c(ae)) + " / " + D(E.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var w_ = /* @__PURE__ */ ot(__, [["__file", "input.vue"]]);
const k_ = En(w_), oo = 4, S_ = {
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
}, T_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Fl = Symbol("scrollbarContextKey"), E_ = tt({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), A_ = "Thumb", C_ = /* @__PURE__ */ ce({
  __name: "thumb",
  props: E_,
  setup(e) {
    const t = e, n = Ge(Fl), r = At("scrollbar");
    n || xl(A_, "can not inject scrollbar context");
    const o = G(), a = G(), s = G({}), i = G(!1);
    let l = !1, u = !1, f = Tt ? document.onselectstart : null;
    const m = N(() => S_[t.vertical ? "vertical" : "horizontal"]), h = N(() => T_({
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
    Hn(() => {
      _(), document.removeEventListener("mouseup", A);
    });
    const _ = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Sn(nr(n, "scrollbarElement"), "mousemove", P), Sn(nr(n, "scrollbarElement"), "mouseleave", I), (x, C) => (R(), me(ko, {
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
          [ur, x.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var nu = /* @__PURE__ */ ot(C_, [["__file", "thumb.vue"]]);
const I_ = tt({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), L_ = /* @__PURE__ */ ce({
  __name: "bar",
  props: I_,
  setup(e, { expose: t }) {
    const n = e, r = Ge(Fl), o = G(0), a = G(0), s = G(""), i = G(""), l = G(1), u = G(1);
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
    }), (h, y) => (R(), U(ft, null, [
      F(nu, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      F(nu, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var O_ = /* @__PURE__ */ ot(L_, [["__file", "bar.vue"]]);
const x_ = tt({
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
  ...qr(["ariaLabel", "ariaOrientation"])
}), R_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(We)
}, N_ = "ElScrollbar", P_ = ce({
  name: N_
}), $_ = /* @__PURE__ */ ce({
  ...P_,
  props: x_,
  emits: R_,
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
      _ ? (a?.(), s?.()) : ({ stop: a } = $n(m, I), s = Sn("resize", I));
    }, { immediate: !0 }), Oe(() => [r.maxHeight, r.height], () => {
      r.native || vt(() => {
        var _;
        I(), f.value && ((_ = h.value) == null || _.handleScroll(f.value));
      });
    }), jn(Fl, Br({
      scrollbarElement: u,
      wrapElement: f
    })), ip(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), _t(() => {
      r.native || vt(() => {
        I();
      });
    }), Ou(() => I()), t({
      wrapRef: f,
      update: I,
      scrollTo: p,
      setScrollTop: A,
      setScrollLeft: P,
      handleScroll: L
    }), (_, x) => (R(), U("div", {
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
        (R(), me(Ht(_.tag), {
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
      _.native ? ee("v-if", !0) : (R(), me(O_, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var M_ = /* @__PURE__ */ ot($_, [["__file", "scrollbar.vue"]]);
const D_ = En(M_), zl = Symbol("popper"), df = Symbol("popperContent"), F_ = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ff = tt({
  role: {
    type: String,
    values: F_,
    default: "tooltip"
  }
}), z_ = ce({
  name: "ElPopper",
  inheritAttrs: !1
}), B_ = /* @__PURE__ */ ce({
  ...z_,
  props: ff,
  setup(e, { expose: t }) {
    const n = e, r = G(), o = G(), a = G(), s = G(), i = N(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), jn(zl, l), (u, f) => Ce(u.$slots, "default");
  }
});
var V_ = /* @__PURE__ */ ot(B_, [["__file", "popper.vue"]]);
const pf = tt({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), j_ = ce({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), U_ = /* @__PURE__ */ ce({
  ...j_,
  props: pf,
  setup(e, { expose: t }) {
    const n = e, r = At("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ge(df, void 0);
    return Oe(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Hn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (R(), U("span", {
      ref_key: "arrowRef",
      ref: a,
      class: q(c(r).e("arrow")),
      style: Nt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var W_ = /* @__PURE__ */ ot(U_, [["__file", "arrow.vue"]]);
const mf = tt({
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
}), hf = Symbol("elForwardRef"), H_ = (e) => {
  jn(hf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, G_ = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Qs = (e) => {
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
}, K_ = "ElOnlyChild", q_ = ce({
  name: K_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ge(hf), a = G_((r = o?.setForwardRef) != null ? r : Zo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = gf(i);
      return l ? Ct(cp(l, n), [[a]]) : null;
    };
  }
});
function gf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (sn(n))
      switch (n.type) {
        case up:
          continue;
        case Iu:
        case "svg":
          return ru(n);
        case ft:
          return gf(n.children);
        default:
          return n;
      }
    return ru(n);
  }
  return null;
}
function ru(e) {
  const t = At("only-child");
  return F("span", {
    class: t.e("content")
  }, [e]);
}
const Y_ = ce({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Z_ = /* @__PURE__ */ ce({
  ...Y_,
  props: mf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ge(zl, void 0);
    H_(o);
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
    return _t(() => {
      Oe(() => n.virtualRef, (m) => {
        m && (o.value = ar(m));
      }, {
        immediate: !0
      }), Oe(o, (m, h) => {
        u?.(), u = void 0, kn(m) && (f.forEach((y) => {
          var g;
          const b = n[y];
          b && (m.addEventListener(y.slice(2).toLowerCase(), b), (g = h?.removeEventListener) == null || g.call(h, y.slice(2).toLowerCase(), b));
        }), Qs(m) && (u = Oe([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, b) => {
            ir(y[b]) ? m.removeAttribute(g) : m.setAttribute(g, y[b]);
          });
        }, { immediate: !0 }))), kn(h) && Qs(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => h.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Hn(() => {
      if (u?.(), u = void 0, o.value && kn(o.value)) {
        const m = o.value;
        f.forEach((h) => {
          const y = n[h];
          y && m.removeEventListener(h.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, h) => m.virtualTriggering ? ee("v-if", !0) : (R(), me(c(q_), uo({ key: 0 }, m.$attrs, {
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
var X_ = /* @__PURE__ */ ot(Z_, [["__file", "trigger.vue"]]);
const Ls = "focus-trap.focus-after-trapped", Os = "focus-trap.focus-after-released", Q_ = "focus-trap.focusout-prevented", ou = {
  cancelable: !0,
  bubbles: !1
}, J_ = {
  cancelable: !0,
  bubbles: !1
}, au = "focusAfterTrapped", su = "focusAfterReleased", ew = Symbol("elFocusTrap"), Bl = G(), ss = G(0), Vl = G(0);
let ba = 0;
const vf = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, lu = (e, t) => {
  for (const n of e)
    if (!tw(n, t))
      return n;
}, tw = (e, t) => {
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
}, nw = (e) => {
  const t = vf(e), n = lu(t, e), r = lu(t.reverse(), e);
  return [n, r];
}, rw = (e) => e instanceof HTMLInputElement && "select" in e, er = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    kn(e) && !Qs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Vl.value = window.performance.now(), e !== n && rw(e) && t && e.select(), kn(e) && r && e.removeAttribute("tabindex");
  }
};
function iu(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const ow = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = iu(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = iu(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, aw = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (er(r, t), document.activeElement !== n)
      return;
}, cu = ow(), sw = () => ss.value > Vl.value, ya = () => {
  Bl.value = "pointer", ss.value = window.performance.now();
}, uu = () => {
  Bl.value = "keyboard", ss.value = window.performance.now();
}, lw = () => (_t(() => {
  ba === 0 && (document.addEventListener("mousedown", ya), document.addEventListener("touchstart", ya), document.addEventListener("keydown", uu)), ba++;
}), Hn(() => {
  ba--, ba <= 0 && (document.removeEventListener("mousedown", ya), document.removeEventListener("touchstart", ya), document.removeEventListener("keydown", uu));
}), {
  focusReason: Bl,
  lastUserFocusTimestamp: ss,
  lastAutomatedFocusTimestamp: Vl
}), _a = (e) => new CustomEvent(Q_, {
  ...J_,
  detail: e
}), Bn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let io = [];
const du = (e) => {
  e.code === Bn.esc && io.forEach((t) => t(e));
}, iw = (e) => {
  _t(() => {
    io.length === 0 && document.addEventListener("keydown", du), Tt && io.push(e);
  }), Hn(() => {
    io = io.filter((t) => t !== e), io.length === 0 && Tt && document.removeEventListener("keydown", du);
  });
}, cw = ce({
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
    au,
    su,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = G();
    let r, o;
    const { focusReason: a } = lw();
    iw((g) => {
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
      const { code: b, altKey: L, ctrlKey: p, metaKey: A, currentTarget: P, shiftKey: I } = g, { loop: _ } = e, x = b === Bn.tab && !L && !p && !A, C = document.activeElement;
      if (x && C) {
        const Y = P, [X, se] = nw(Y);
        if (X && se) {
          if (!I && C === se) {
            const le = _a({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (g.preventDefault(), _ && er(X, !0));
          } else if (I && [X, Y].includes(C)) {
            const le = _a({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (g.preventDefault(), _ && er(se, !0));
          }
        } else if (C === Y) {
          const le = _a({
            focusReason: a.value
          });
          t("focusout-prevented", le), le.defaultPrevented || g.preventDefault();
        }
      }
    };
    jn(ew, {
      focusTrapRef: n,
      onKeydown: i
    }), Oe(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Oe([n], ([g], [b]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", f), g.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", f), b.removeEventListener("focusout", m));
    });
    const l = (g) => {
      t(au, g);
    }, u = (g) => t(su, g), f = (g) => {
      const b = c(n);
      if (!b)
        return;
      const L = g.target, p = g.relatedTarget, A = L && b.contains(L);
      e.trapped || p && b.contains(p) || (r = p), A && t("focusin", g), !s.paused && e.trapped && (A ? o = L : er(o, !0));
    }, m = (g) => {
      const b = c(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const L = g.relatedTarget;
          !ir(L) && !b.contains(L) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const p = _a({
                focusReason: a.value
              });
              t("focusout-prevented", p), p.defaultPrevented || er(o, !0);
            }
          }, 0);
        } else {
          const L = g.target;
          L && b.contains(L) || t("focusout", g);
        }
    };
    async function h() {
      await vt();
      const g = c(n);
      if (g) {
        cu.push(s);
        const b = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = b, !g.contains(b)) {
          const p = new Event(Ls, ou);
          g.addEventListener(Ls, l), g.dispatchEvent(p), p.defaultPrevented || vt(() => {
            let A = e.focusStartEl;
            Vt(A) || (er(A), document.activeElement !== A && (A = "first")), A === "first" && aw(vf(g), !0), (document.activeElement === b || A === "container") && er(g);
          });
        }
      }
    }
    function y() {
      const g = c(n);
      if (g) {
        g.removeEventListener(Ls, l);
        const b = new CustomEvent(Os, {
          ...ou,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Os, u), g.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !sw() || g.contains(document.activeElement)) && er(r ?? document.body), g.removeEventListener(Os, u), cu.remove(s);
      }
    }
    return _t(() => {
      e.trapped && h(), Oe(() => e.trapped, (g) => {
        g ? h() : y();
      });
    }), Hn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function uw(e, t, n, r, o, a) {
  return Ce(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var dw = /* @__PURE__ */ ot(cw, [["render", uw], ["__file", "focus-trap.vue"]]), nn = "top", dn = "bottom", fn = "right", rn = "left", jl = "auto", sa = [nn, dn, fn, rn], go = "start", Jo = "end", fw = "clippingParents", bf = "viewport", $o = "popper", pw = "reference", fu = sa.reduce(function(e, t) {
  return e.concat([t + "-" + go, t + "-" + Jo]);
}, []), ls = [].concat(sa, [jl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + go, t + "-" + Jo]);
}, []), mw = "beforeRead", hw = "read", gw = "afterRead", vw = "beforeMain", bw = "main", yw = "afterMain", _w = "beforeWrite", ww = "write", kw = "afterWrite", Sw = [mw, hw, gw, vw, bw, yw, _w, ww, kw];
function Wn(e) {
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
function Tw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !cn(a) || !Wn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Ew(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !cn(o) || !Wn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var yf = { name: "applyStyles", enabled: !0, phase: "write", fn: Tw, effect: Ew, requires: ["computeStyles"] };
function Vn(e) {
  return e.split("-")[0];
}
var zr = Math.max, ja = Math.min, vo = Math.round;
function Js() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _f() {
  return !/^((?!chrome|android).)*safari/i.test(Js());
}
function bo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && cn(e) && (o = e.offsetWidth > 0 && vo(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && vo(r.height) / e.offsetHeight || 1);
  var s = Ur(e) ? ln(e) : window, i = s.visualViewport, l = !_f() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, f = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
  return { width: m, height: h, top: f, right: u + m, bottom: f + h, left: u, x: u, y: f };
}
function Wl(e) {
  var t = bo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function wf(e, t) {
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
function fr(e) {
  return ln(e).getComputedStyle(e);
}
function Aw(e) {
  return ["table", "td", "th"].indexOf(Wn(e)) >= 0;
}
function Ir(e) {
  return ((Ur(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function is(e) {
  return Wn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ul(e) ? e.host : null) || Ir(e);
}
function pu(e) {
  return !cn(e) || fr(e).position === "fixed" ? null : e.offsetParent;
}
function Cw(e) {
  var t = /firefox/i.test(Js()), n = /Trident/i.test(Js());
  if (n && cn(e)) {
    var r = fr(e);
    if (r.position === "fixed") return null;
  }
  var o = is(e);
  for (Ul(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(Wn(o)) < 0; ) {
    var a = fr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function la(e) {
  for (var t = ln(e), n = pu(e); n && Aw(n) && fr(n).position === "static"; ) n = pu(n);
  return n && (Wn(n) === "html" || Wn(n) === "body" && fr(n).position === "static") ? t : n || Cw(e) || t;
}
function Hl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Uo(e, t, n) {
  return zr(e, ja(t, n));
}
function Iw(e, t, n) {
  var r = Uo(e, t, n);
  return r > n ? n : r;
}
function kf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Sf(e) {
  return Object.assign({}, kf(), e);
}
function Tf(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Lw = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Sf(typeof e != "number" ? e : Tf(e, sa));
};
function Ow(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Vn(n.placement), l = Hl(i), u = [rn, fn].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = Lw(o.padding, n), h = Wl(a), y = l === "y" ? nn : rn, g = l === "y" ? dn : fn, b = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], L = s[l] - n.rects.reference[l], p = la(a), A = p ? l === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, P = b / 2 - L / 2, I = m[y], _ = A - h[f] - m[g], x = A / 2 - h[f] / 2 + P, C = Uo(I, x, _), Y = l;
    n.modifiersData[r] = (t = {}, t[Y] = C, t.centerOffset = C - x, t);
  }
}
function xw(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || wf(t.elements.popper, o) && (t.elements.arrow = o));
}
var Rw = { name: "arrow", enabled: !0, phase: "main", fn: Ow, effect: xw, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function yo(e) {
  return e.split("-")[1];
}
var Nw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Pw(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: vo(n * o) / o || 0, y: vo(r * o) / o || 0 };
}
function mu(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, h = s.x, y = h === void 0 ? 0 : h, g = s.y, b = g === void 0 ? 0 : g, L = typeof f == "function" ? f({ x: y, y: b }) : { x: y, y: b };
  y = L.x, b = L.y;
  var p = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), P = rn, I = nn, _ = window;
  if (u) {
    var x = la(n), C = "clientHeight", Y = "clientWidth";
    if (x === ln(n) && (x = Ir(n), fr(x).position !== "static" && i === "absolute" && (C = "scrollHeight", Y = "scrollWidth")), x = x, o === nn || (o === rn || o === fn) && a === Jo) {
      I = dn;
      var X = m && x === _ && _.visualViewport ? _.visualViewport.height : x[C];
      b -= X - r.height, b *= l ? 1 : -1;
    }
    if (o === rn || (o === nn || o === dn) && a === Jo) {
      P = fn;
      var se = m && x === _ && _.visualViewport ? _.visualViewport.width : x[Y];
      y -= se - r.width, y *= l ? 1 : -1;
    }
  }
  var he = Object.assign({ position: i }, u && Nw), le = f === !0 ? Pw({ x: y, y: b }, ln(n)) : { x: y, y: b };
  if (y = le.x, b = le.y, l) {
    var ye;
    return Object.assign({}, he, (ye = {}, ye[I] = A ? "0" : "", ye[P] = p ? "0" : "", ye.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", ye));
  }
  return Object.assign({}, he, (t = {}, t[I] = A ? b + "px" : "", t[P] = p ? y + "px" : "", t.transform = "", t));
}
function $w(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Vn(t.placement), variation: yo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mu(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mu(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ef = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: $w, data: {} }, wa = { passive: !0 };
function Mw(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = ln(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, wa);
  }), i && l.addEventListener("resize", n.update, wa), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, wa);
    }), i && l.removeEventListener("resize", n.update, wa);
  };
}
var Af = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Mw, data: {} }, Dw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ca(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dw[t];
  });
}
var Fw = { start: "end", end: "start" };
function hu(e) {
  return e.replace(/start|end/g, function(t) {
    return Fw[t];
  });
}
function Gl(e) {
  var t = ln(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Kl(e) {
  return bo(Ir(e)).left + Gl(e).scrollLeft;
}
function zw(e, t) {
  var n = ln(e), r = Ir(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = _f();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Kl(e), y: l };
}
function Bw(e) {
  var t, n = Ir(e), r = Gl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = zr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = zr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Kl(e), l = -r.scrollTop;
  return fr(o || n).direction === "rtl" && (i += zr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function ql(e) {
  var t = fr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Cf(e) {
  return ["html", "body", "#document"].indexOf(Wn(e)) >= 0 ? e.ownerDocument.body : cn(e) && ql(e) ? e : Cf(is(e));
}
function Wo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Cf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ln(r), s = o ? [a].concat(a.visualViewport || [], ql(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Wo(is(s)));
}
function el(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Vw(e, t) {
  var n = bo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gu(e, t, n) {
  return t === bf ? el(zw(e, n)) : Ur(t) ? Vw(t, n) : el(Bw(Ir(e)));
}
function jw(e) {
  var t = Wo(is(e)), n = ["absolute", "fixed"].indexOf(fr(e).position) >= 0, r = n && cn(e) ? la(e) : e;
  return Ur(r) ? t.filter(function(o) {
    return Ur(o) && wf(o, r) && Wn(o) !== "body";
  }) : [];
}
function Uw(e, t, n, r) {
  var o = t === "clippingParents" ? jw(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = gu(e, u, r);
    return l.top = zr(f.top, l.top), l.right = ja(f.right, l.right), l.bottom = ja(f.bottom, l.bottom), l.left = zr(f.left, l.left), l;
  }, gu(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function If(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Vn(r) : null, a = r ? yo(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case nn:
      l = { x: s, y: t.y - n.height };
      break;
    case dn:
      l = { x: s, y: t.y + t.height };
      break;
    case fn:
      l = { x: t.x + t.width, y: i };
      break;
    case rn:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Hl(o) : null;
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? fw : i, u = n.rootBoundary, f = u === void 0 ? bf : u, m = n.elementContext, h = m === void 0 ? $o : m, y = n.altBoundary, g = y === void 0 ? !1 : y, b = n.padding, L = b === void 0 ? 0 : b, p = Sf(typeof L != "number" ? L : Tf(L, sa)), A = h === $o ? pw : $o, P = e.rects.popper, I = e.elements[g ? A : h], _ = Uw(Ur(I) ? I : I.contextElement || Ir(e.elements.popper), l, f, s), x = bo(e.elements.reference), C = If({ reference: x, element: P, placement: o }), Y = el(Object.assign({}, P, C)), X = h === $o ? Y : x, se = { top: _.top - X.top + p.top, bottom: X.bottom - _.bottom + p.bottom, left: _.left - X.left + p.left, right: X.right - _.right + p.right }, he = e.modifiersData.offset;
  if (h === $o && he) {
    var le = he[o];
    Object.keys(se).forEach(function(ye) {
      var _e = [fn, dn].indexOf(ye) >= 0 ? 1 : -1, j = [nn, dn].indexOf(ye) >= 0 ? "y" : "x";
      se[ye] += le[j] * _e;
    });
  }
  return se;
}
function Ww(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ls : l, f = yo(r), m = f ? i ? fu : fu.filter(function(g) {
    return yo(g) === f;
  }) : sa, h = m.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(g, b) {
    return g[b] = ea(e, { placement: b, boundary: o, rootBoundary: a, padding: s })[Vn(b)], g;
  }, {});
  return Object.keys(y).sort(function(g, b) {
    return y[g] - y[b];
  });
}
function Hw(e) {
  if (Vn(e) === jl) return [];
  var t = Ca(e);
  return [hu(e), t, hu(t)];
}
function Gw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, b = n.allowedAutoPlacements, L = t.options.placement, p = Vn(L), A = p === L, P = l || (A || !g ? [Ca(L)] : Hw(L)), I = [L].concat(P).reduce(function(ke, Se) {
      return ke.concat(Vn(Se) === jl ? Ww(t, { placement: Se, boundary: f, rootBoundary: m, padding: u, flipVariations: g, allowedAutoPlacements: b }) : Se);
    }, []), _ = t.rects.reference, x = t.rects.popper, C = /* @__PURE__ */ new Map(), Y = !0, X = I[0], se = 0; se < I.length; se++) {
      var he = I[se], le = Vn(he), ye = yo(he) === go, _e = [nn, dn].indexOf(le) >= 0, j = _e ? "width" : "height", J = ea(t, { placement: he, boundary: f, rootBoundary: m, altBoundary: h, padding: u }), H = _e ? ye ? fn : rn : ye ? dn : nn;
      _[j] > x[j] && (H = Ca(H));
      var de = Ca(H), pe = [];
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
var Kw = { name: "flip", enabled: !0, phase: "main", fn: Gw, requiresIfExists: ["offset"], data: { _skip: !1 } };
function vu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function bu(e) {
  return [nn, fn, dn, rn].some(function(t) {
    return e[t] >= 0;
  });
}
function qw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = ea(t, { elementContext: "reference" }), i = ea(t, { altBoundary: !0 }), l = vu(s, r), u = vu(i, o, a), f = bu(l), m = bu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var Yw = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: qw };
function Zw(e, t, n) {
  var r = Vn(e), o = [rn, nn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [rn, fn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Xw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = ls.reduce(function(f, m) {
    return f[m] = Zw(m, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Qw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Xw };
function Jw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = If({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Lf = { name: "popperOffsets", enabled: !0, phase: "read", fn: Jw, data: {} };
function ek(e) {
  return e === "x" ? "y" : "x";
}
function tk(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, g = n.tetherOffset, b = g === void 0 ? 0 : g, L = ea(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: f }), p = Vn(t.placement), A = yo(t.placement), P = !A, I = Hl(p), _ = ek(I), x = t.modifiersData.popperOffsets, C = t.rects.reference, Y = t.rects.popper, X = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, se = typeof X == "number" ? { mainAxis: X, altAxis: X } : Object.assign({ mainAxis: 0, altAxis: 0 }, X), he = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, le = { x: 0, y: 0 };
  if (x) {
    if (a) {
      var ye, _e = I === "y" ? nn : rn, j = I === "y" ? dn : fn, J = I === "y" ? "height" : "width", H = x[I], de = H + L[_e], pe = H - L[j], Pe = y ? -Y[J] / 2 : 0, ae = A === go ? C[J] : Y[J], Z = A === go ? -Y[J] : -C[J], Me = t.elements.arrow, ke = y && Me ? Wl(Me) : { width: 0, height: 0 }, Se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : kf(), we = Se[_e], Q = Se[j], ge = Uo(0, C[J], ke[J]), at = P ? C[J] / 2 - Pe - ge - we - se.mainAxis : ae - ge - we - se.mainAxis, Te = P ? -C[J] / 2 + Pe + ge + Q + se.mainAxis : Z + ge + Q + se.mainAxis, Xe = t.elements.arrow && la(t.elements.arrow), Lt = Xe ? I === "y" ? Xe.clientTop || 0 : Xe.clientLeft || 0 : 0, ct = (ye = he?.[I]) != null ? ye : 0, wt = H + at - ct - Lt, kt = H + Te - ct, st = Uo(y ? ja(de, wt) : de, H, y ? zr(pe, kt) : pe);
      x[I] = st, le[I] = st - H;
    }
    if (i) {
      var ut, T = I === "x" ? nn : rn, O = I === "x" ? dn : fn, V = x[_], ne = _ === "y" ? "height" : "width", $e = V + L[T], ve = V - L[O], E = [nn, rn].indexOf(p) !== -1, B = (ut = he?.[_]) != null ? ut : 0, Ae = E ? $e : V - C[ne] - Y[ne] - B + se.altAxis, Ie = E ? V + C[ne] + Y[ne] - B - se.altAxis : ve, nt = y && E ? Iw(Ae, V, Ie) : Uo(y ? Ae : $e, V, y ? Ie : ve);
      x[_] = nt, le[_] = nt - V;
    }
    t.modifiersData[r] = le;
  }
}
var nk = { name: "preventOverflow", enabled: !0, phase: "main", fn: tk, requiresIfExists: ["offset"] };
function rk(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ok(e) {
  return e === ln(e) || !cn(e) ? Gl(e) : rk(e);
}
function ak(e) {
  var t = e.getBoundingClientRect(), n = vo(t.width) / e.offsetWidth || 1, r = vo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function sk(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), o = cn(t) && ak(t), a = Ir(t), s = bo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Wn(t) !== "body" || ql(a)) && (i = ok(t)), cn(t) ? (l = bo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Kl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function lk(e) {
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
function ik(e) {
  var t = lk(e);
  return Sw.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function ck(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function uk(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var yu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function _u() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Yl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? yu : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, yu, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], m = !1, h = { state: u, setOptions: function(b) {
      var L = typeof b == "function" ? b(u.options) : b;
      g(), u.options = Object.assign({}, a, u.options, L), u.scrollParents = { reference: Ur(s) ? Wo(s) : s.contextElement ? Wo(s.contextElement) : [], popper: Wo(i) };
      var p = ik(uk([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(A) {
        return A.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, L = b.reference, p = b.popper;
        if (_u(L, p)) {
          u.rects = { reference: sk(L, la(p), u.options.strategy === "fixed"), popper: Wl(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
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
    }, update: ck(function() {
      return new Promise(function(b) {
        h.forceUpdate(), b(u);
      });
    }), destroy: function() {
      g(), m = !0;
    } };
    if (!_u(s, i)) return h;
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
Yl();
var dk = [Af, Lf, Ef, yf];
Yl({ defaultModifiers: dk });
var fk = [Af, Lf, Ef, yf, Qw, Kw, nk, Rw, Yw], pk = Yl({ defaultModifiers: fk });
const mk = ["fixed", "absolute"], hk = tt({
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
    values: ls,
    default: "bottom"
  },
  popperOptions: {
    type: Ee(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: mk,
    default: "absolute"
  }
}), Of = tt({
  ...hk,
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
  ...qr(["ariaLabel"])
}), gk = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, vk = (e, t) => {
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
}, bk = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [..._k(e), ...t]
  };
  return wk(a, o?.modifiers), a;
}, yk = (e) => {
  if (Tt)
    return ar(e);
};
function _k(e) {
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
function wk(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const kk = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Sk(l);
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
    i(), !(!l || !u) && (a.value = pk(l, u, c(o)));
  }), Hn(() => {
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
function Sk(e) {
  const t = Object.keys(e.elements), n = Da(t.map((o) => [o, e.styles[o] || {}])), r = Da(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Tk = 0, Ek = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ge(zl, void 0), a = G(), s = G(), i = N(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = N(() => {
    var p;
    const A = c(a), P = (p = c(s)) != null ? p : Tk;
    return {
      name: "arrow",
      enabled: !jy(A),
      options: {
        element: A,
        padding: P
      }
    };
  }), u = N(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...bk(e, [
      c(l),
      c(i)
    ])
  })), f = N(() => yk(e.referenceEl) || c(r)), { attributes: m, state: h, styles: y, update: g, forceUpdate: b, instanceRef: L } = kk(f, n, u);
  return Oe(L, (p) => t.value = p), _t(() => {
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
}, Ak = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Wd(), a = At("popper"), s = N(() => c(t).popper), i = G(We(e.zIndex) ? e.zIndex : o()), l = N(() => [
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
}, Ck = ce({
  name: "ElPopperContent"
}), Ik = /* @__PURE__ */ ce({
  ...Ck,
  props: Of,
  emits: gk,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = vk(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: g, instanceRef: b, role: L, update: p } = Ek(r), {
      ariaModal: A,
      arrowStyle: P,
      contentAttrs: I,
      contentClass: _,
      contentStyle: x,
      updateZIndex: C
    } = Ak(r, {
      styles: g,
      attributes: m,
      role: L
    }), Y = Ge(Va, void 0), X = G();
    jn(df, {
      arrowStyle: P,
      arrowRef: h,
      arrowOffset: X
    }), Y && jn(Va, {
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
    return _t(() => {
      Oe(() => r.triggerTargetEl, (ye, _e) => {
        se?.(), se = void 0;
        const j = c(ye || y.value), J = c(_e || y.value);
        kn(j) && (se = Oe([L, () => r.ariaLabel, A, () => r.id], (H) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((de, pe) => {
            ir(H[pe]) ? j.removeAttribute(de) : j.setAttribute(de, H[pe]);
          });
        }, { immediate: !0 })), J !== j && kn(J) && ["role", "aria-label", "aria-modal", "id"].forEach((H) => {
          J.removeAttribute(H);
        });
      }, { immediate: !0 }), Oe(() => r.visible, le, { immediate: !0 });
    }), Hn(() => {
      se?.(), se = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: b,
      updatePopper: he,
      contentStyle: x
    }), (ye, _e) => (R(), U("div", uo({
      ref_key: "contentRef",
      ref: y
    }, c(I), {
      style: c(x),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (j) => ye.$emit("mouseenter", j),
      onMouseleave: (j) => ye.$emit("mouseleave", j)
    }), [
      F(c(dw), {
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
var Lk = /* @__PURE__ */ ot(Ik, [["__file", "content.vue"]]);
const Ok = En(V_), Zl = Symbol("elTooltip");
function wu() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return oa(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const xk = tt({
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
}), Rk = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = wu(), {
    registerTimeout: s,
    cancelTimeout: i
  } = wu();
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
}, Xl = tt({
  ...xk,
  ...Of,
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
  ...qr(["ariaLabel"])
}), xf = tt({
  ...mf,
  disabled: Boolean,
  trigger: {
    type: Ee([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Ee(Array),
    default: () => [Bn.enter, Bn.numpadEnter, Bn.space]
  }
}), Nk = ns({
  type: Ee(Boolean),
  default: null
}), Pk = ns({
  type: Ee(Function)
}), $k = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Nk,
    [n]: Pk
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
      const h = Kt(), { emit: y } = h, g = h.props, b = N(() => it(g[n])), L = N(() => g[e] === null), p = (C) => {
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
      }), _t(() => {
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
  useModelToggleProps: Mk,
  useModelToggleEmits: Dk,
  useModelToggle: Fk
} = $k("visible"), zk = tt({
  ...ff,
  ...Mk,
  ...Xl,
  ...xf,
  ...pf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Bk = [
  ...Dk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Vk = (e, t) => Mn(e) ? e.includes(t) : e === t, ao = (e, t, n) => (r) => {
  Vk(c(e), t) && n(r);
}, tr = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, jk = ce({
  name: "ElTooltipTrigger"
}), Uk = /* @__PURE__ */ ce({
  ...jk,
  props: xf,
  setup(e, { expose: t }) {
    const n = e, r = At("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ge(Zl, void 0), f = G(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, h = nr(n, "trigger"), y = tr(m, ao(h, "hover", i)), g = tr(m, ao(h, "hover", l)), b = tr(m, ao(h, "click", (I) => {
      I.button === 0 && u(I);
    })), L = tr(m, ao(h, "focus", i)), p = tr(m, ao(h, "focus", l)), A = tr(m, ao(h, "contextmenu", (I) => {
      I.preventDefault(), u(I);
    })), P = tr(m, (I) => {
      const { code: _ } = I;
      n.triggerKeys.includes(_) && (I.preventDefault(), u(I));
    });
    return t({
      triggerRef: f
    }), (I, _) => (R(), me(c(X_), {
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
var Wk = /* @__PURE__ */ ot(Uk, [["__file", "trigger.vue"]]);
const Hk = tt({
  to: {
    type: Ee([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Gk = /* @__PURE__ */ ce({
  __name: "teleport",
  props: Hk,
  setup(e) {
    return (t, n) => t.disabled ? Ce(t.$slots, "default", { key: 0 }) : (R(), me(dp, {
      key: 1,
      to: t.to
    }, [
      Ce(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Kk = /* @__PURE__ */ ot(Gk, [["__file", "teleport.vue"]]);
const qk = En(Kk), Rf = () => {
  const e = kl(), t = sf(), n = N(() => `${e.value}-popper-container-${t.prefix}`), r = N(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Yk = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Zk = () => {
  const { id: e, selector: t } = Rf();
  return fp(() => {
    Tt && (document.body.querySelector(t.value) || Yk(e.value));
  }), {
    id: e,
    selector: t
  };
}, Xk = ce({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Qk = /* @__PURE__ */ ce({
  ...Xk,
  props: Xl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Rf(), o = At("tooltip"), a = G();
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
    } = Ge(Zl, void 0), p = N(() => n.transition || `${o.namespace.value}-fade-in-linear`), A = N(() => n.persistent);
    Hn(() => {
      s?.();
    });
    const P = N(() => c(A) ? !0 : c(u)), I = N(() => n.disabled ? !1 : c(u)), _ = N(() => n.appendTo || r.value), x = N(() => {
      var H;
      return (H = n.style) != null ? H : {};
    }), C = G(!0), Y = () => {
      g(), J() && er(document.body), C.value = !0;
    }, X = () => {
      if (c(i))
        return !0;
    }, se = tr(X, () => {
      n.enterable && c(f) === "hover" && h();
    }), he = tr(X, () => {
      c(f) === "hover" && m();
    }), le = () => {
      var H, de;
      (de = (H = a.value) == null ? void 0 : H.updatePopper) == null || de.call(H), b?.();
    }, ye = () => {
      L?.();
    }, _e = () => {
      y(), s = a1(N(() => {
        var H;
        return (H = a.value) == null ? void 0 : H.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && m();
      });
    }, j = () => {
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
    }), (H, de) => (R(), me(c(qk), {
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
            c(P) ? Ct((R(), me(c(Lk), uo({
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
              onBlur: j,
              onClose: c(m)
            }), {
              default: fe(() => [
                Ce(H.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [ur, c(I)]
            ]) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Jk = /* @__PURE__ */ ot(Qk, [["__file", "content.vue"]]);
const eS = ce({
  name: "ElTooltip"
}), tS = /* @__PURE__ */ ce({
  ...eS,
  props: zk,
  emits: Bk,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Zk();
    const o = os(), a = G(), s = G(), i = () => {
      var p;
      const A = c(a);
      A && ((p = A.popperInstanceRef) == null || p.update());
    }, l = G(!1), u = G(), { show: f, hide: m, hasUpdateHandler: h } = Fk({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = Rk({
      showAfter: nr(r, "showAfter"),
      hideAfter: nr(r, "hideAfter"),
      autoClose: nr(r, "autoClose"),
      open: f,
      close: m
    }), b = N(() => Tr(r.visible) && !h.value);
    jn(Zl, {
      controlled: b,
      id: o,
      open: rl(l),
      trigger: nr(r, "trigger"),
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
    return pp(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: L,
      updatePopper: i,
      onOpen: y,
      onClose: g,
      hide: m
    }), (p, A) => (R(), me(c(Ok), {
      ref_key: "popperRef",
      ref: a,
      role: p.role
    }, {
      default: fe(() => [
        F(Wk, {
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
        F(Jk, {
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
              p.rawContent ? (R(), U("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, ["innerHTML"])) : (R(), U("span", { key: 1 }, D(p.content), 1))
            ]),
            p.showArrow ? (R(), me(c(W_), {
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
var nS = /* @__PURE__ */ ot(tS, [["__file", "tooltip.vue"]]);
const rS = En(nS), oS = tt({
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
}), aS = ce({
  name: "ElBadge"
}), sS = /* @__PURE__ */ ce({
  ...aS,
  props: oS,
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
    }), (s, i) => (R(), U("div", {
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
              tn(D(c(o)), 1)
            ])
          ], 6), [
            [ur, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var lS = /* @__PURE__ */ ot(sS, [["__file", "badge.vue"]]);
const iS = En(lS), cS = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), tl = tt({
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
    values: Nl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), uS = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, dS = ce({
  name: "ElTag"
}), fS = /* @__PURE__ */ ce({
  ...dS,
  props: tl,
  emits: uS,
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
    return (u, f) => u.disableTransitions ? (R(), U("span", {
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
          F(c(za))
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
              F(c(za))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var pS = /* @__PURE__ */ ot(fS, [["__file", "tag.vue"]]);
const mS = En(pS), yr = /* @__PURE__ */ new Map();
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
function ku(e, t) {
  let n = [];
  return Mn(t.arg) ? n = t.arg : kn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), m = e === s, h = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || f || m || h || y || t.value(r, o);
  };
}
const hS = {
  beforeMount(e, t) {
    yr.has(e) || yr.set(e, []), yr.get(e).push({
      documentHandler: ku(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    yr.has(e) || yr.set(e, []);
    const n = yr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: ku(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    yr.delete(e);
  }
}, gS = tt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Ee(Object)
  },
  size: rs,
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
  ...Yd
}), gn = {};
ce({
  name: "ElConfigProvider",
  props: gS,
  setup(e, { slots: t }) {
    Oe(() => e.message, (r) => {
      Object.assign(gn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Qd(e);
    return () => Ce(t, "default", { config: n?.value });
  }
});
const vS = 100, bS = 600, Su = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = vS, delay: o = bS } = it(n) ? {} : n;
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
}, yS = tt({
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
  size: rs,
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
  ...qr(["ariaLabel"])
}), _S = {
  [dr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [cr]: (e) => We(e) || ir(e),
  [xt]: (e) => We(e) || ir(e)
}, wS = ce({
  name: "ElInputNumber"
}), kS = /* @__PURE__ */ ce({
  ...wS,
  props: yS,
  emits: _S,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Rl(), a = At("input-number"), s = G(), i = Br({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = as(), u = N(() => We(r.modelValue) && r.modelValue <= r.min), f = N(() => We(r.modelValue) && r.modelValue >= r.max), m = N(() => {
      const j = p(r.step);
      return Dn(r.precision) ? Math.max(p(r.modelValue), j) : (j > r.precision, r.precision);
    }), h = N(() => r.controls && r.controlsPosition === "right"), y = aa(), g = Dl(), b = N(() => {
      if (i.userInput !== null)
        return i.userInput;
      let j = i.currentValue;
      if (ir(j))
        return "";
      if (We(j)) {
        if (Number.isNaN(j))
          return "";
        Dn(r.precision) || (j = j.toFixed(r.precision));
      }
      return j;
    }), L = (j, J) => {
      if (Dn(J) && (J = m.value), J === 0)
        return Math.round(j);
      let H = String(j);
      const de = H.indexOf(".");
      if (de === -1 || !H.replace(".", "").split("")[de + J])
        return j;
      const ae = H.length;
      return H.charAt(ae - 1) === "5" && (H = `${H.slice(0, Math.max(0, ae - 1))}6`), Number.parseFloat(Number(H).toFixed(J));
    }, p = (j) => {
      if (ir(j))
        return 0;
      const J = j.toString(), H = J.indexOf(".");
      let de = 0;
      return H !== -1 && (de = J.length - H - 1), de;
    }, A = (j, J = 1) => We(j) ? L(j + r.step * J) : i.currentValue, P = () => {
      if (r.readonly || g.value || f.value)
        return;
      const j = Number(b.value) || 0, J = A(j);
      x(J), n(cr, i.currentValue), ye();
    }, I = () => {
      if (r.readonly || g.value || u.value)
        return;
      const j = Number(b.value) || 0, J = A(j, -1);
      x(J), n(cr, i.currentValue), ye();
    }, _ = (j, J) => {
      const { max: H, min: de, step: pe, precision: Pe, stepStrictly: ae, valueOnClear: Z } = r;
      H < de && xl("InputNumber", "min should not be greater than max.");
      let Me = Number(j);
      if (ir(j) || Number.isNaN(Me))
        return null;
      if (j === "") {
        if (Z === null)
          return null;
        Me = Vt(Z) ? { min: de, max: H }[Z] : Z;
      }
      return ae && (Me = L(Math.round(Me / pe) * pe, Pe), Me !== j && J && n(xt, Me)), Dn(Pe) || (Me = L(Me, Pe)), (Me > H || Me < de) && (Me = Me > H ? H : de, J && n(xt, Me)), Me;
    }, x = (j, J = !0) => {
      var H;
      const de = i.currentValue, pe = _(j);
      if (!J) {
        n(xt, pe);
        return;
      }
      de === pe && j || (i.userInput = null, n(xt, pe), de !== pe && n(dr, pe, de), r.validateEvent && ((H = l?.validate) == null || H.call(l, "change").catch((Pe) => void 0)), i.currentValue = pe);
    }, C = (j) => {
      i.userInput = j;
      const J = j === "" ? null : Number(j);
      n(cr, J), x(J, !1);
    }, Y = (j) => {
      const J = j !== "" ? Number(j) : "";
      (We(J) && !Number.isNaN(J) || j === "") && x(J), ye(), i.userInput = null;
    }, X = () => {
      var j, J;
      (J = (j = s.value) == null ? void 0 : j.focus) == null || J.call(j);
    }, se = () => {
      var j, J;
      (J = (j = s.value) == null ? void 0 : j.blur) == null || J.call(j);
    }, he = (j) => {
      n("focus", j);
    }, le = (j) => {
      var J, H;
      i.userInput = null, of() && i.currentValue === null && ((J = s.value) != null && J.input) && (s.value.input.value = ""), n("blur", j), r.validateEvent && ((H = l?.validate) == null || H.call(l, "blur").catch((de) => void 0));
    }, ye = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, _e = (j) => {
      document.activeElement === j.target && j.preventDefault();
    };
    return Oe(() => r.modelValue, (j, J) => {
      const H = _(j, !0);
      i.userInput === null && H !== J && (i.currentValue = H);
    }, { immediate: !0 }), _t(() => {
      var j;
      const { min: J, max: H, modelValue: de } = r, pe = (j = s.value) == null ? void 0 : j.input;
      if (pe.setAttribute("role", "spinbutton"), Number.isFinite(H) ? pe.setAttribute("aria-valuemax", String(H)) : pe.removeAttribute("aria-valuemax"), Number.isFinite(J) ? pe.setAttribute("aria-valuemin", String(J)) : pe.removeAttribute("aria-valuemin"), pe.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), pe.setAttribute("aria-disabled", String(g.value)), !We(de) && de != null) {
        let Pe = Number(de);
        Number.isNaN(Pe) && (Pe = null), n(xt, Pe);
      }
      pe.addEventListener("wheel", _e, { passive: !1 });
    }), Ou(() => {
      var j, J;
      const H = (j = s.value) == null ? void 0 : j.input;
      H?.setAttribute("aria-valuenow", `${(J = i.currentValue) != null ? J : ""}`);
    }), t({
      focus: X,
      blur: se
    }), (j, J) => (R(), U("div", {
      class: q([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !j.controls),
        c(a).is("controls-right", c(h))
      ]),
      onDragstart: rt(() => {
      }, ["prevent"])
    }, [
      j.controls ? Ct((R(), U("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: yn(I, ["enter"])
      }, [
        Ce(j.$slots, "decrease-icon", {}, () => [
          F(c(St), null, {
            default: fe(() => [
              c(h) ? (R(), me(c(tf), { key: 0 })) : (R(), me(c(Y1), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Su), I]
      ]) : ee("v-if", !0),
      j.controls ? Ct((R(), U("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: yn(P, ["enter"])
      }, [
        Ce(j.$slots, "increase-icon", {}, () => [
          F(c(St), null, {
            default: fe(() => [
              c(h) ? (R(), me(c(M1), { key: 0 })) : (R(), me(c(X1), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Su), P]
      ]) : ee("v-if", !0),
      F(c(k_), {
        id: j.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: j.step,
        "model-value": c(b),
        placeholder: j.placeholder,
        readonly: j.readonly,
        disabled: c(g),
        size: c(y),
        max: j.max,
        min: j.min,
        name: j.name,
        "aria-label": j.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          yn(rt(P, ["prevent"]), ["up"]),
          yn(rt(I, ["prevent"]), ["down"])
        ],
        onBlur: le,
        onFocus: he,
        onInput: C,
        onChange: Y
      }, mp({
        _: 2
      }, [
        j.$slots.prefix ? {
          name: "prefix",
          fn: fe(() => [
            Ce(j.$slots, "prefix")
          ])
        } : void 0,
        j.$slots.suffix ? {
          name: "suffix",
          fn: fe(() => [
            Ce(j.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var SS = /* @__PURE__ */ ot(kS, [["__file", "input-number.vue"]]);
const TS = En(SS);
function ES() {
  const e = Sr(), t = G(0), n = 11, r = N(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return $n(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Nf = Symbol("ElSelectGroup"), cs = Symbol("ElSelect");
function AS(e, t) {
  const n = Ge(cs), r = Ge(Nf, { disabled: !1 }), o = N(() => f(wr(n.props.modelValue), e.value)), a = N(() => {
    var y;
    if (n.props.multiple) {
      const g = wr((y = n.props.modelValue) != null ? y : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = N(() => e.label || (sn(e.value) ? "" : e.value)), i = N(() => e.value || e.label || ""), l = N(() => e.disabled || t.groupDisabled || a.value), u = Kt(), f = (y = [], g) => {
    if (sn(e.value)) {
      const b = n.props.valueKey;
      return y && y.some((L) => hp(kr(L, b)) === kr(g, b));
    } else
      return y && y.includes(g);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, h = (y) => {
    const g = new RegExp(cS(y), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Oe(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Oe(() => e.value, (y, g) => {
    const { remote: b, valueKey: L } = n.props;
    if ((b ? y !== g : !jo(y, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
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
const CS = ce({
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
    const t = At("select"), n = os(), r = N(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(h))
    ]), o = Br({
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
    } = AS(e, o), { visible: m, hover: h } = ol(o), y = Kt().proxy;
    l.onOptionCreate(y), Hn(() => {
      const b = y.value, { selected: L } = l.states, p = L.some((A) => A.value === y.value);
      vt(() => {
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
function IS(e, t, n, r, o, a) {
  return Ct((R(), U("li", {
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
    [ur, e.visible]
  ]);
}
var Ql = /* @__PURE__ */ ot(CS, [["render", IS], ["__file", "option.vue"]]);
const LS = ce({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ge(cs), t = At("select"), n = N(() => e.props.popperClass), r = N(() => e.props.multiple), o = N(() => e.props.fitInputWidth), a = G("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return _t(() => {
      s(), $n(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function OS(e, t, n, r, o, a) {
  return R(), U("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Nt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), U("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      Ce(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    Ce(e.$slots, "default"),
    e.$slots.footer ? (R(), U("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      Ce(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var xS = /* @__PURE__ */ ot(LS, [["render", OS], ["__file", "select-dropdown.vue"]]);
const RS = (e, t) => {
  const { t: n } = Rl(), r = os(), o = At("select"), a = At("input"), s = Br({
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
  } = uf({
    afterComposition: (M) => nt(M)
  }), { wrapperRef: x, isFocused: C, handleBlur: Y } = cf(m, {
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
  }), X = G(!1), se = G(), { form: he, formItem: le } = as(), { inputId: ye } = Ml(e, {
    formItemContext: le
  }), { valueOnClear: _e, isEmptyValue: j } = C1(e), J = N(() => e.disabled || he?.disabled), H = N(() => Mn(e.modelValue) ? e.modelValue.length > 0 : !j(e.modelValue)), de = N(() => {
    var M;
    return (M = he?.statusIcon) != null ? M : !1;
  }), pe = N(() => e.clearable && !J.value && s.inputHovering && H.value), Pe = N(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), ae = N(() => o.is("reverse", Pe.value && X.value)), Z = N(() => le?.validateState || ""), Me = N(() => rf[Z.value]), ke = N(() => e.remote ? 300 : 0), Se = N(() => e.remote && !s.inputValue && s.options.size === 0), we = N(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Q.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Q = N(() => ge.value.filter((M) => M.visible).length), ge = N(() => {
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
  }, Lt = aa(), ct = N(() => ["small"].includes(Lt.value) ? "small" : "default"), wt = N({
    get() {
      return X.value && !Se.value;
    },
    set(M) {
      X.value = M;
    }
  }), kt = N(() => {
    if (e.multiple && !Dn(e.modelValue))
      return wr(e.modelValue).length === 0 && !s.inputValue;
    const M = Mn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Dn(M) ? !s.inputValue : !0;
  }), st = N(() => {
    var M;
    const te = (M = e.placeholder) != null ? M : n("el.select.placeholder");
    return e.multiple || !H.value ? te : s.selectedLabel;
  }), ut = N(() => Xs ? null : "mouseenter");
  Oe(() => e.modelValue, (M, te) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", T("")), V(), !jo(M, te) && e.validateEvent && le?.validate("change").catch((Le) => void 0);
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
  }), Lu(() => {
    s.isBeforeHide || Xe();
  });
  const T = (M) => {
    s.previousQuery === M || A.value || (s.previousQuery = M, e.filterable && it(e.filterMethod) ? e.filterMethod(M) : e.filterable && e.remote && it(e.remoteMethod) && e.remoteMethod(M), e.defaultFirstOption && (e.filterable || e.remote) && Q.value ? vt(O) : vt($e));
  }, O = () => {
    const M = ge.value.filter((pt) => pt.visible && !pt.disabled && !pt.states.groupDisabled), te = M.find((pt) => pt.created), Le = M[0], ze = ge.value.map((pt) => pt.value);
    s.hoveringIndex = An(ze, te || Le);
  }, V = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const te = Mn(e.modelValue) ? e.modelValue[0] : e.modelValue, Le = ne(te);
      s.selectedLabel = Le.currentLabel, s.selected = [Le];
      return;
    }
    const M = [];
    Dn(e.modelValue) || wr(e.modelValue).forEach((te) => {
      M.push(ne(te));
    }), s.selected = M;
  }, ne = (M) => {
    let te;
    const Le = nv(M);
    for (let Zt = s.cachedOptions.size - 1; Zt >= 0; Zt--) {
      const Mt = at.value[Zt];
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
  }, $t = By(() => {
    Ie();
  }, ke.value), Ze = (M) => {
    jo(e.modelValue, M) || t(dr, M);
  }, Kn = (M) => Vy(M, (te) => {
    const Le = s.cachedOptions.get(te);
    return Le && !Le.disabled && !Le.states.groupDisabled;
  }), hr = (M) => {
    if (e.multiple && M.code !== Bn.delete && M.target.value.length <= 0) {
      const te = wr(e.modelValue).slice(), Le = Kn(te);
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
    M.stopPropagation(), gr();
  }, qn = (M) => {
    M.stopPropagation();
    const te = e.multiple ? [] : _e.value;
    if (e.multiple)
      for (const Le of s.selected)
        Le.isDisabled && te.push(Le.value);
    t(xt, te), Ze(te), s.hoveringIndex = -1, X.value = !1, t("clear"), gr();
  }, Lr = (M) => {
    var te;
    if (e.multiple) {
      const Le = wr((te = e.modelValue) != null ? te : []).slice(), ze = An(Le, M);
      ze > -1 ? Le.splice(ze, 1) : (e.multipleLimit <= 0 || Le.length < e.multipleLimit) && Le.push(M.value), t(xt, Le), Ze(Le), M.created && T(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(xt, M.value), Ze(M.value), X.value = !1;
    gr(), !X.value && vt(() => {
      mn(M);
    });
  }, An = (M = [], te) => Dn(te) ? -1 : sn(te.value) ? M.findIndex((Le) => jo(kr(Le, e.valueKey), Ke(te))) : M.indexOf(te.value), mn = (M) => {
    var te, Le, ze, pt, Zt;
    const Mt = Mn(M) ? M[0] : M;
    let Dt = null;
    if (Mt?.value) {
      const In = ge.value.filter((Qr) => Qr.value === Mt.value);
      In.length > 0 && (Dt = In[0].$el);
    }
    if (u.value && Dt) {
      const In = (pt = (ze = (Le = (te = u.value) == null ? void 0 : te.popperRef) == null ? void 0 : Le.contentRef) == null ? void 0 : ze.querySelector) == null ? void 0 : pt.call(ze, `.${o.be("dropdown", "wrap")}`);
      In && L1(In, Dt);
    }
    (Zt = p.value) == null || Zt.handleScroll();
  }, Yt = (M) => {
    s.options.set(M.value, M), s.cachedOptions.set(M.value, M);
  }, an = (M, te) => {
    s.options.get(M) === te && s.options.delete(M);
  }, Or = N(() => {
    var M, te;
    return (te = (M = u.value) == null ? void 0 : M.popperRef) == null ? void 0 : te.contentRef;
  }), Yn = () => {
    s.isBeforeHide = !1, vt(() => {
      var M;
      (M = p.value) == null || M.update(), mn(s.selected);
    });
  }, gr = () => {
    var M;
    (M = m.value) == null || M.focus();
  }, xr = () => {
    var M;
    if (X.value) {
      X.value = !1, vt(() => {
        var te;
        return (te = m.value) == null ? void 0 : te.blur();
      });
      return;
    }
    (M = m.value) == null || M.blur();
  }, Rr = (M) => {
    qn(M);
  }, To = (M) => {
    if (X.value = !1, C.value) {
      const te = new FocusEvent("focus", M);
      vt(() => Y(te));
    }
  }, Zn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : X.value = !1;
  }, Yr = () => {
    J.value || (Xs && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : X.value = !X.value);
  }, Eo = () => {
    if (!X.value)
      Yr();
    else {
      const M = ge.value[s.hoveringIndex];
      M && !M.isDisabled && Lr(M);
    }
  }, Ke = (M) => sn(M.value) ? kr(M.value, e.valueKey) : M.value, hn = N(() => ge.value.filter((M) => M.visible).every((M) => M.isDisabled)), Zr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Nr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Cn = (M) => {
    if (!X.value) {
      X.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Q.value === 0 || A.value) && !hn.value) {
      M === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : M === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const te = ge.value[s.hoveringIndex];
      (te.isDisabled || !te.visible) && Cn(M), vt(() => mn(se.value));
    }
  }, Xr = () => {
    if (!l.value)
      return 0;
    const M = window.getComputedStyle(l.value);
    return Number.parseFloat(M.gap || "6px");
  }, Pr = N(() => {
    const M = Xr();
    return { maxWidth: `${L.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - M : s.selectionWidth}px` };
  }), Ao = N(() => ({ maxWidth: `${s.selectionWidth}px` })), jt = (M) => {
    t("popup-scroll", M);
  };
  return $n(l, ve), $n(g, B), $n(x, B), $n(b, Ae), $n(L, E), _t(() => {
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
    deletePrevTag: hr,
    deleteTag: pn,
    deleteSelected: qn,
    handleOptionSelect: Lr,
    scrollToOption: mn,
    hasModelValue: H,
    shouldShowPlaceholder: kt,
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
    onOptionCreate: Yt,
    onOptionDestroy: an,
    handleMenuEnter: Yn,
    focus: gr,
    blur: xr,
    handleClearClick: Rr,
    handleClickOutside: To,
    handleEsc: Zn,
    toggleMenu: Yr,
    selectOption: Eo,
    getValueKey: Ke,
    navigateOptions: Cn,
    dropdownMenuVisible: wt,
    showTagList: Zr,
    collapseTagList: Nr,
    popupScroll: jt,
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
var NS = ce({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ge(cs);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Mn(u) && u.forEach((f) => {
          var m, h, y, g;
          const b = (m = f?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? l(!Vt(f.children) && !Mn(f.children) && it((h = f.children) == null ? void 0 : h.default) ? (y = f.children) == null ? void 0 : y.default() : f.children) : b === "ElOption" ? i.push((g = f.props) == null ? void 0 : g.value) : Mn(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), jo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const PS = tt({
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
  size: rs,
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
  teleported: Xl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Fn,
    default: Pl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Fn,
    default: tf
  },
  tagType: { ...tl.type, default: "info" },
  tagEffect: { ...tl.effect, default: "light" },
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
    values: ls,
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
  ...Yd,
  ...qr(["ariaLabel"])
}), Tu = "ElSelect", $S = ce({
  name: Tu,
  componentName: Tu,
  components: {
    ElSelectMenu: xS,
    ElOption: Ql,
    ElOptions: NS,
    ElTag: mS,
    ElScrollbar: D_,
    ElTooltip: rS,
    ElIcon: St
  },
  directives: { ClickOutside: hS },
  props: PS,
  emits: [
    xt,
    dr,
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
      return Mn(l) ? u ? l : f : u ? f : l;
    }), r = Br({
      ...ol(e),
      modelValue: n
    }), o = RS(r, t), { calculatorRef: a, inputStyle: s } = ES();
    jn(cs, Br({
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
function MS(e, t, n, r, o, a) {
  const s = Dr("el-tag"), i = Dr("el-tooltip"), l = Dr("el-icon"), u = Dr("el-option"), f = Dr("el-options"), m = Dr("el-scrollbar"), h = Dr("el-select-menu"), y = gp("click-outside");
  return Ct((R(), U("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [vp(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
            e.$slots.prefix ? (R(), U("div", {
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
                (R(!0), U(ft, null, Pn(e.showTagList, (b) => (R(), U("div", {
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
                          tn(D(b.currentLabel), 1)
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
                      (R(!0), U(ft, null, Pn(e.collapseTagList, (b) => (R(), U("div", {
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
                                tn(D(b.currentLabel), 1)
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
                    yn(rt((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    yn(rt((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    yn(rt(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    yn(rt(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    yn(rt(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: rt(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Ho, e.states.inputValue]
                ]),
                e.filterable ? (R(), U("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), U("div", {
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
                ]) : (R(), U("span", { key: 1 }, D(e.currentPlaceholder), 1))
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
                  (R(), me(Ht(e.iconComponent)))
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
                  (R(), me(Ht(e.clearIcon)))
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
                  (R(), me(Ht(e.validateIcon)))
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
            e.$slots.header ? (R(), U("div", {
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
              [ur, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), U("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              Ce(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), U("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              Ce(e.$slots, "empty", {}, () => [
                v("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (R(), U("div", {
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
var DS = /* @__PURE__ */ ot($S, [["render", MS], ["__file", "select.vue"]]);
const FS = ce({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = At("select"), n = G(null), r = Kt(), o = G([]);
    jn(Nf, Br({
      ...ol(e)
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
    return _t(() => {
      l();
    }), f1(n, l, {
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
function zS(e, t, n, r, o, a) {
  return Ct((R(), U("ul", {
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
    [ur, e.visible]
  ]);
}
var Pf = /* @__PURE__ */ ot(FS, [["render", zS], ["__file", "option-group.vue"]]);
const BS = En(DS, {
  Option: Ql,
  OptionGroup: Pf
}), VS = ef(Ql);
ef(Pf);
const jS = (e) => ["", ...Nl].includes(e), US = tt({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: jS
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Fn
  },
  activeActionIcon: {
    type: Fn
  },
  activeIcon: {
    type: Fn
  },
  inactiveIcon: {
    type: Fn
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
  ...qr(["ariaLabel"])
}), WS = {
  [xt]: (e) => Tr(e) || Vt(e) || We(e),
  [dr]: (e) => Tr(e) || Vt(e) || We(e),
  [cr]: (e) => Tr(e) || Vt(e) || We(e)
}, $f = "ElSwitch", HS = ce({
  name: $f
}), GS = /* @__PURE__ */ ce({
  ...HS,
  props: US,
  emits: WS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = as(), a = aa(), s = At("switch"), { inputId: i } = Ml(r, {
      formItemContext: o
    }), l = Dl(N(() => r.loading)), u = G(r.modelValue !== !1), f = G(), m = G(), h = N(() => [
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
    [r.activeValue, r.inactiveValue].includes(L.value) || (n(xt, r.inactiveValue), n(dr, r.inactiveValue), n(cr, r.inactiveValue)), Oe(p, (_) => {
      var x;
      f.value.checked = _, r.validateEvent && ((x = o?.validate) == null || x.call(o, "change").catch((C) => void 0));
    });
    const A = () => {
      const _ = p.value ? r.inactiveValue : r.activeValue;
      n(xt, _), n(dr, _), n(cr, _), vt(() => {
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
        pc(x),
        Tr(x)
      ].includes(!0) || xl($f, "beforeChange must return type `Promise<boolean>` or `boolean`"), pc(x) ? x.then((Y) => {
        Y && A();
      }).catch((Y) => {
      }) : x && A();
    }, I = () => {
      var _, x;
      (x = (_ = f.value) == null ? void 0 : _.focus) == null || x.call(_);
    };
    return _t(() => {
      f.value.checked = p.value;
    }), t({
      focus: I,
      checked: p
    }), (_, x) => (R(), U("div", {
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
        onKeydown: yn(P, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (R(), U("span", {
        key: 0,
        class: q(c(y))
      }, [
        _.inactiveIcon ? (R(), me(c(St), { key: 0 }, {
          default: fe(() => [
            (R(), me(Ht(_.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (R(), U("span", {
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
        _.inlinePrompt ? (R(), U("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (R(), me(c(St), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: fe(() => [
              (R(), me(Ht(c(p) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (R(), U("span", {
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
              F(c(nf))
            ]),
            _: 1
          }, 8, ["class"])) : c(p) ? Ce(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (R(), me(c(St), { key: 0 }, {
              default: fe(() => [
                (R(), me(Ht(_.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(p) ? ee("v-if", !0) : Ce(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (R(), me(c(St), { key: 0 }, {
              default: fe(() => [
                (R(), me(Ht(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (R(), U("span", {
        key: 1,
        class: q(c(g))
      }, [
        _.activeIcon ? (R(), me(c(St), { key: 0 }, {
          default: fe(() => [
            (R(), me(Ht(_.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !_.activeIcon && _.activeText ? (R(), U("span", {
          key: 1,
          "aria-hidden": !c(p)
        }, D(_.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var KS = /* @__PURE__ */ ot(GS, [["__file", "switch.vue"]]);
const qS = En(KS), Mf = ["success", "info", "warning", "error"], zt = af({
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
}), YS = tt({
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
    type: Fn,
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
    values: Mf,
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
}), ZS = {
  destroy: () => !0
}, wn = bp([]), XS = (e) => {
  const t = wn.findIndex((o) => o.id === e), n = wn[t];
  let r;
  return t > 0 && (r = wn[t - 1]), { current: n, prev: r };
}, QS = (e) => {
  const { prev: t } = XS(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, JS = (e, t) => wn.findIndex((r) => r.id === e) > 0 ? 16 : t, eT = ce({
  name: "ElMessage"
}), tT = /* @__PURE__ */ ce({
  ...eT,
  props: YS,
  emits: ZS,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = a_, { ns: o, zIndex: a } = Xd("message"), { currentZIndex: s, nextZIndex: i } = a, l = G(), u = G(!1), f = G(0);
    let m;
    const h = N(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = N(() => {
      const C = n.type;
      return { [o.bm("icon", C)]: C && Ba[C] };
    }), g = N(() => n.icon || Ba[n.type] || ""), b = N(() => QS(n.id)), L = N(() => JS(n.id, n.offset) + b.value), p = N(() => f.value + L.value), A = N(() => ({
      top: `${L.value}px`,
      zIndex: s.value
    }));
    function P() {
      n.duration !== 0 && ({ stop: m } = Bd(() => {
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
      C === Bn.esc && _();
    }
    return _t(() => {
      P(), i(), u.value = !0;
    }), Oe(() => n.repeatNum, () => {
      I(), P();
    }), Sn(document, "keydown", x), $n(l, () => {
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
          C.repeatNum > 1 ? (R(), me(c(iS), {
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
              (R(), me(Ht(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          Ce(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (R(), U(ft, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              v("p", {
                class: q(c(o).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), U("p", {
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
          [ur, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var nT = /* @__PURE__ */ ot(tT, [["__file", "message.vue"]]);
let rT = 1;
const Df = (e) => {
  const t = !e || Vt(e) || Go(e) || it(e) ? { message: e } : e, n = {
    ...zt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Vt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    kn(r) || (r = document.body), n.appendTo = r;
  }
  return Tr(gn.grouping) && !n.grouping && (n.grouping = gn.grouping), We(gn.duration) && n.duration === 3e3 && (n.duration = gn.duration), We(gn.offset) && n.offset === 16 && (n.offset = gn.offset), Tr(gn.showClose) && !n.showClose && (n.showClose = gn.showClose), n;
}, oT = (e) => {
  const t = wn.indexOf(e);
  if (t === -1)
    return;
  wn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, aT = ({ appendTo: e, ...t }, n) => {
  const r = `message_${rT++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), oT(f);
    },
    onDestroy: () => {
      La(null, a);
    }
  }, i = F(nT, s, it(s.message) || Go(s.message) ? {
    default: it(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || _o._context, La(i, a), e.appendChild(a.firstElementChild);
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
  const n = Df(e);
  if (n.grouping && wn.length) {
    const o = wn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (We(gn.max) && wn.length >= gn.max)
    return { close: () => {
    } };
  const r = aT(n, t);
  return wn.push(r), r.handler;
};
Mf.forEach((e) => {
  _o[e] = (t = {}, n) => {
    const r = Df(t);
    return _o({ ...r, type: e }, n);
  };
});
function sT(e) {
  for (const t of wn)
    (!e || e === t.props.type) && t.handler.close();
}
_o.closeAll = sT;
_o._context = null;
const lT = Jd(_o, "$message"), Ff = [
  "success",
  "info",
  "warning",
  "error"
], iT = tt({
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
    type: Fn
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
    values: [...Ff, ""],
    default: ""
  },
  zIndex: Number
}), cT = {
  destroy: () => !0
}, uT = ce({
  name: "ElNotification"
}), dT = /* @__PURE__ */ ce({
  ...uT,
  props: iT,
  emits: cT,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Xd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = o_, l = G(!1);
    let u;
    const f = N(() => {
      const P = n.type;
      return P && Ba[n.type] ? r.m(P) : "";
    }), m = N(() => n.type && Ba[n.type] || n.icon), h = N(() => n.position.endsWith("right") ? "right" : "left"), y = N(() => n.position.startsWith("top") ? "top" : "bottom"), g = N(() => {
      var P;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (P = n.zIndex) != null ? P : s.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = Bd(() => {
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
      P === Bn.delete || P === Bn.backspace ? L() : P === Bn.esc ? l.value && p() : b();
    }
    return _t(() => {
      b(), a(), l.value = !0;
    }), Sn(document, "keydown", A), t({
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
              (R(), me(Ht(c(m))))
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
                P.dangerouslyUseHTMLString ? (R(), U(ft, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  v("p", { innerHTML: P.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), U("p", { key: 0 }, D(P.message), 1))
              ])
            ], 6), [
              [ur, P.message]
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
          [ur, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var fT = /* @__PURE__ */ ot(dT, [["__file", "notification.vue"]]);
const Ua = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, nl = 16;
let pT = 1;
const wo = function(e = {}, t) {
  if (!Tt)
    return { close: () => {
    } };
  (Vt(e) || Go(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Ua[n].forEach(({ vm: f }) => {
    var m;
    r += (((m = f.el) == null ? void 0 : m.offsetHeight) || 0) + nl;
  }), r += nl;
  const o = `notification_${pT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      mT(o, n, a);
    }
  };
  let i = document.body;
  kn(e.appendTo) ? i = e.appendTo : Vt(e.appendTo) && (i = document.querySelector(e.appendTo)), kn(i) || (i = document.body);
  const l = document.createElement("div"), u = F(fT, s, it(s.message) ? s.message : Go(s.message) ? () => s.message : null);
  return u.appContext = Dn(t) ? wo._context : t, u.props.onDestroy = () => {
    La(null, l);
  }, La(u, l), Ua[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Ff.forEach((e) => {
  wo[e] = (t = {}, n) => ((Vt(t) || Go(t)) && (t = {
    message: t
  }), wo({ ...t, type: e }, n));
});
function mT(e, t, n) {
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
      const { el: f, component: m } = r[u].vm, h = Number.parseInt(f.style[i], 10) - s - nl;
      m.props.offset = h;
    }
}
function hT() {
  for (const e of Object.values(Ua))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
wo.closeAll = hT;
wo._context = null;
const gT = Jd(wo, "$notify"), et = {
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
    r === "center" ? lT({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : gT({
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
}, vT = "snippets-code:developer-mode", zf = "snippets-code:frontend-diagnostics", bT = 240, Mo = "[REDACTED]", Ia = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Mo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Mo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Mo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Mo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Mo}`
), Bf = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Ia(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Ia(
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
    return Ia(String(e));
  }
}, yT = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, _T = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(zf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Jl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(vT) === "true";
  } catch {
    return !1;
  }
}, wT = (e, t, n) => {
  if (!Jl() || typeof localStorage > "u") return;
  const r = _T();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: yT(),
    message: Ia(t),
    data: Bf(n)
  });
  try {
    localStorage.setItem(
      zf,
      JSON.stringify(r.slice(-bT))
    );
  } catch {
  }
}, kT = () => Jl(), ST = (e) => e === "warn" || e === "error" || !1 || !1 || Jl(), ka = (e, t, n) => {
  wT(e, t, n), ST(e) && It("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Bf(n)
  }).catch(() => {
  });
}, Wt = {
  info: (e, t, ...n) => {
    ka("info", e, t);
  },
  error: (e, t) => {
    ka("error", e, t);
  },
  warn: (e, t) => {
    ka("warn", e, t);
  },
  debug: (e, t) => {
    kT() && ka("debug", e, t);
  }
}, TT = { class: "sidebar-header" }, ET = { class: "sidebar-title-block" }, AT = ["title", "aria-pressed"], CT = { class: "sidebar-nav" }, IT = { class: "sidebar-nav-item sidebar-nav-item--search" }, LT = ["placeholder"], OT = { class: "sidebar-section recent-section" }, xT = { class: "section-title-row" }, RT = { class: "section-title" }, NT = ["title"], PT = {
  key: 0,
  class: "chat-list"
}, $T = ["onClick", "onKeydown"], MT = { class: "chat-item-title" }, DT = { class: "chat-item-time" }, FT = ["title", "onClick"], zT = {
  key: 1,
  class: "sidebar-empty"
}, BT = { class: "sidebar-service" }, VT = { class: "sidebar-service-row" }, jT = { class: "chat-panel" }, UT = ["title"], WT = {
  key: 0,
  class: "empty-state"
}, HT = { class: "empty-title" }, GT = { class: "empty-desc" }, KT = {
  key: 0,
  class: "date-divider"
}, qT = { class: "message-avatar" }, YT = { key: 1 }, ZT = { class: "message-body" }, XT = { class: "user-bubble" }, QT = {
  key: 0,
  class: "user-message-text"
}, JT = {
  key: 1,
  class: "message-attachment-list"
}, e2 = ["title"], t2 = ["src", "alt"], n2 = {
  key: 1,
  class: "attachment-file-icon"
}, r2 = { key: 2 }, o2 = {
  key: 0,
  class: "message-actions"
}, a2 = ["title", "onClick"], s2 = ["title", "onClick"], l2 = ["title", "onClick"], i2 = { class: "assistant-head" }, c2 = { key: 0 }, u2 = {
  key: 0,
  class: "assistant-content-stack"
}, d2 = ["open"], f2 = { class: "reasoning-summary-title" }, p2 = { key: 0 }, m2 = ["innerHTML"], h2 = ["innerHTML"], g2 = {
  key: 1,
  class: "message-content loading-text"
}, v2 = {
  key: 0,
  class: "web-search-panel"
}, b2 = { class: "web-search-panel__header" }, y2 = {
  key: 0,
  class: "web-search-source-list"
}, _2 = ["href", "title"], w2 = {
  key: 1,
  class: "message-stats"
}, k2 = { class: "message-stats__context" }, S2 = { class: "message-stats__output" }, T2 = { class: "message-stats__elapsed" }, E2 = { class: "message-stats__speed" }, A2 = {
  key: 0,
  class: "message-stats-time"
}, C2 = {
  key: 2,
  class: "message-warning"
}, I2 = {
  key: 3,
  class: "message-actions"
}, L2 = ["title", "aria-label"], O2 = ["disabled", "title", "onClick"], x2 = ["disabled", "title", "onClick"], R2 = ["title", "onClick"], N2 = ["title", "onClick"], P2 = ["title", "onClick"], $2 = ["title", "onClick"], M2 = ["title", "onClick"], D2 = ["title"], F2 = {
  key: 0,
  class: "attachment-preview-list"
}, z2 = ["src", "alt"], B2 = {
  key: 1,
  class: "attachment-file-icon"
}, V2 = { class: "attachment-meta" }, j2 = ["title", "onClick"], U2 = ["placeholder"], W2 = { class: "input-toolbar" }, H2 = { class: "input-toolbar-left" }, G2 = ["title"], K2 = { class: "model-select-shell" }, q2 = ["disabled"], Y2 = ["value"], Z2 = {
  key: 0,
  value: ""
}, X2 = ["title", "aria-pressed"], Q2 = ["title", "aria-pressed"], J2 = { class: "input-toolbar-right" }, eE = ["title", "aria-label"], tE = ["disabled", "title", "aria-label"], Eu = "snippets.localAi.webSearchEnabled", nE = 96, rE = 24, oE = 120, aE = 4096, xs = 160, sE = 420, lE = 1200, iE = 24e3, cE = 1800, uE = 5200, dE = 90, fE = 1e3, pE = /* @__PURE__ */ ce({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = ta(), n = G(""), r = G([]), o = G(""), a = G(!1), s = G(""), i = G([]), l = G(!1), u = G(!1), f = G(!1), m = G(!1), y = G((() => {
      try {
        return localStorage.getItem(Eu) === "true";
      } catch {
        return !1;
      }
    })()), g = G(!1), b = G(!0), L = G(!1), p = G(null), A = G(null), P = G(null), I = G(""), _ = G(null), x = G(null), C = G(null), Y = G(Date.now());
    let X = null, se = null, he = null, le = !1;
    const ye = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), J = /今天|今日|现在|当前|日期|时间|星期|天气|温度|气温|today|current|date|time|weather|temperature/i, H = /天气|温度|气温|体感|湿度|降雨|下雨|风速|weather|temperature|humidity|rain|wind/i, de = (d) => `${Date.now()}-${d}-${Math.random().toString(16).slice(2, 8)}`, pe = (d) => d.type === "root", Pe = (d) => new Map(d.map((S) => [S.id, S])), ae = (d) => d.find(pe), Z = (d, S) => {
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
    ), Xe = N(() => Se(Te.value)), Lt = N(() => we(Te.value)), ct = (d) => d ? d.split(/[\\/]+/).pop() ?? d : "", wt = N(
      () => ct(I.value) || ct(_.value?.modelPath) || ct(A.value?.modelPath) || t("localAi.localModel")
    ), kt = N(() => P.value?.mainModels ?? []), st = N(() => !!A.value?.mmprojPath), ut = N(
      () => A.value?.ctxSize ?? _.value?.ctxSize ?? 4096
    ), T = N(() => {
      const d = ut.value, S = A.value?.maxTokens ?? 0;
      return S > 0 ? Math.min(
        Math.max(S, 512),
        Math.max(512, d - 512)
      ) : Math.min(
        Math.max(aE, Math.floor(d * 0.5)),
        Math.max(512, d - 512)
      );
    }), O = N(
      () => Math.max(512, ut.value - T.value)
    ), V = N(() => {
      const d = wt.value.toLowerCase();
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
      return d ? d.scrollHeight - d.scrollTop - d.clientHeight <= nE : !0;
    }, B = () => {
      const d = E();
      b.value = d, L.value = !d;
    }, Ae = () => {
      B();
    }, Ie = async (d = {}) => {
      await vt(), !(!x.value || !d.force && !b.value) && (le = le || d.force === !0, he === null && (he = window.requestAnimationFrame(() => {
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
        A.value = await pd(), I.value = A.value.modelPath ?? "", P.value = await md(A.value), V.value || (m.value = !1);
      } catch (d) {
        Wt.warn("[LocalAI] refresh chat config failed", d);
      }
    }, Ze = async () => {
      u.value = !0;
      try {
        _.value = await hd();
      } catch (d) {
        Wt.warn("[LocalAI] refresh chat status failed", d);
      } finally {
        u.value = !1;
      }
    }, Kn = async () => {
      try {
        const d = await og();
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
        Wt.warn("[LocalAI] refresh histories failed", d);
      }
    }, hr = async () => {
      await Promise.all([$t(), Ze(), Kn()]);
    }, pn = async () => {
      const d = Te.value;
      if (!d) return;
      const S = Se(d).map((k) => ({
        id: k.id,
        role: k.role,
        content: k.content,
        createdAt: k.createdAt
      }));
      await ag({
        id: d.id,
        title: d.title,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        turns: S,
        currentNodeId: d.currentNodeId,
        messages: d.messages
      });
    }, qn = () => {
      const d = ve();
      r.value.unshift(d), o.value = d.id, s.value = "";
    }, Lr = () => {
      Te.value || qn();
    }, An = (d) => {
      o.value = d;
      const S = Te.value;
      S && !S.currentNodeId && (S.currentNodeId = Z(S.messages, ae(S.messages)?.id) ?? null), b.value = !0, Ie({ force: !0 });
    }, mn = async (d) => {
      r.value = r.value.filter((S) => S.id !== d), await sg(d), o.value === d && (o.value = r.value[0]?.id ?? "");
    }, Yt = () => {
      C.value?.click();
    }, an = (d, S) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: d.name,
      type: S,
      mime: d.type || "application/octet-stream",
      size: d.size,
      status: "pending"
    }), Or = async (d) => {
      if (ys(d)) {
        const k = an(d, "image");
        if (d.size > pg)
          return {
            ...k,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...k,
            status: "parsed",
            dataUrl: await gg(d)
          };
        } catch ($) {
          return { ...k, status: "error", error: String($) };
        }
      }
      if (Qi(d)) {
        const k = an(d, "text");
        if (d.size > fg)
          return {
            ...k,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const $ = await vg(d);
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
        ...an(d, "unsupported"),
        status: "error",
        error: hg(d) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, Yn = async (d) => {
      const S = Array.from(d), k = dg - i.value.length;
      if (k <= 0) {
        et.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      S.length > k && et.msg(t("localAi.attachmentLimit"), "warning");
      const $ = S.slice(0, k), z = $.map(
        (K) => an(
          K,
          ys(K) ? "image" : Qi(K) ? "text" : "unsupported"
        )
      );
      i.value.push(...z), await Promise.all(
        $.map(async (K, oe) => {
          const be = await Or(K), xe = i.value.findIndex(
            (ht) => ht.id === z[oe].id
          );
          xe >= 0 && (i.value[xe] = be);
        })
      );
    }, gr = async (d) => {
      const S = d.target;
      S.files?.length && await Yn(S.files), S.value = "";
    }, xr = async (d) => {
      d.dataTransfer?.files.length && await Yn(d.dataTransfer.files);
    }, Rr = async (d) => {
      const S = Array.from(d.clipboardData?.files ?? []);
      if (!S.length) return;
      const k = S.filter(ys);
      k.length && (d.preventDefault(), await Yn(k));
    }, To = (d) => {
      i.value = i.value.filter(
        (S) => S.id !== d
      );
    }, Zn = (d) => d.status === "pending" ? t("localAi.attachmentPending") : d.status === "error" ? d.error ?? "" : d.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), Yr = async () => {
      if (!(!A.value || !I.value)) {
        A.value.modelPath = I.value;
        try {
          A.value = await Fo(A.value), _.value?.running && (_.value = await gd()), et.msg(t("localAi.modelChanged"));
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
        if (_e.set(oe, K), _e.size > oE) {
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
      const z = Xg(He.parse(d, { async: !1 })), K = $ ? Ke(z) : z;
      if (!k) return K;
      if (ye.set(d, K), ye.size > rE) {
        const oe = ye.keys().next().value;
        typeof oe == "string" && ye.delete(oe);
      }
      return K;
    }, Zr = (d, S) => {
      const k = Ao(d, S);
      if (!d.streaming) return hn(k);
      const $ = j.get(d.id), z = S === "reasoning" ? "reasoningHtml" : "answerHtml", K = S === "reasoning" ? "reasoning" : "answer";
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
    }, Cn = (d) => {
      const S = d.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!S || S.index === void 0)
        return { reasoning: "", answer: d };
      const k = d.slice(0, S.index).trim(), $ = S[0], z = d.slice(S.index + $.length).trim();
      return {
        reasoning: (S[1] ?? "").trim(),
        answer: [k, z].filter(Boolean).join(`

`)
      };
    }, Xr = (d) => Cn(d).reasoning, Pr = (d) => Cn(d).answer, Ao = (d, S) => {
      const { reasoning: k, answer: $ } = Cn(d.content);
      if (!d.streaming)
        return j.delete(d.id), S === "reasoning" ? k : $;
      const z = Date.now(), K = j.get(d.id), oe = d.content.length >= iE, be = oe ? lE : sE, xe = oe ? uE : cE;
      if (!K || z - K.updatedAt >= be || d.content.length - K.source.length >= xe || !K.reasoning && !!k || !K.answer && !!$) {
        const gt = {
          source: d.content,
          reasoning: k,
          answer: $,
          updatedAt: z
        };
        return j.set(d.id, gt), S === "reasoning" ? k : $;
      }
      return S === "reasoning" ? K.reasoning : K.answer;
    }, jt = (d) => !!Pr(d.content), M = (d) => !!(d.streaming && d.allowThinking && d.reasoningStartedAt && !d.reasoningEndedAt && !jt(d)), te = (d) => {
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
    }), Zt = (d, S) => ze(d).toDateString() === ze(S).toDateString(), Mt = (d) => ze(d).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Dt = (d) => {
      const S = Lt.value[d]?.message;
      if (!S) return !1;
      if (d === 0) return !Mt(S);
      const k = Lt.value[d - 1]?.message;
      return k ? Zt(k, S) ? ze(S).getTime() - ze(k).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, In = (d) => {
      const S = ze(d), k = S.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), $ = S.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Mt(d) ? $ : `${k} ${$}`;
    }, Qr = (d) => d.streaming ? M(d) ? t("localAi.thinking") : t("localAi.generating") : pt(d), us = (d) => d.webSearchStatus === "searching" ? t("localAi.webSearchSearching") : d.allowThinking && !d.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Co = (d) => d.webSearchStatus === "searching" ? t("localAi.webSearchSearching") : d.webSearchStatus === "done" && d.webSearchResults?.length ? t("localAi.webSearchUsed", {
      count: d.webSearchResults.length
    }) : d.webSearchStatus === "empty" ? t("localAi.webSearchNoResults") : d.webSearchStatus === "failed" ? `${t("localAi.webSearchFailed")}: ${d.webSearchError ?? ""}` : "", ia = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(
          Eu,
          String(y.value)
        );
      } catch (d) {
        Wt.warn("[LocalAI] save web search state failed", d);
      }
    }, Jr = (d, S) => {
      d.allowThinking && (S.includes("<think>") && !d.reasoningStartedAt && (d.reasoningStartedAt = Date.now()), S.includes("</think>") && !d.reasoningEndedAt && (d.reasoningEndedAt = Date.now()));
    }, Ln = (d) => {
      const S = d.trim();
      if (!S) return 0;
      const k = (S.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, K = (S.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((oe, be) => /^[A-Za-z0-9_]+$/.test(be) ? oe + Math.max(1, Math.ceil(be.length / 4)) : oe + 1, 0);
      return Math.max(1, Math.ceil(k + K));
    }, ie = (d) => Math.max(0, Math.ceil(d.length / 4)), w = (d) => Array.isArray(d) ? d.filter((S) => S.type === "text").map((S) => S.text).join(`
`) : d, W = (d) => {
      const S = d.attachments?.filter(
        (K) => K.status === "parsed"
      ) ?? [], k = bg(
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
    }, re = (d) => Ln(
      d.map((S) => {
        const k = w(S.content);
        return `${S.role}: ${k}`;
      }).join(`
`)
    ), De = (d, S) => {
      const k = Math.max(240, S * 4);
      return d.length <= k ? d : `${t("localAi.previousAnswerTail")}

${d.slice(-k)}`;
    }, Re = (d) => String(d).padStart(2, "0"), je = (d = /* @__PURE__ */ new Date()) => {
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
    }, Xt = () => {
      const { isoDate: d, localTime: S, timeZone: k, weekday: $ } = je();
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
    }, Qt = (d) => {
      const S = d.filter(($) => $.role === "system").map(($) => w($.content).trim()).filter(Boolean), k = d.filter(
        ($) => $.role !== "system"
      );
      return S.length ? [
        {
          role: "system",
          content: S.join(`

---

`)
        },
        ...k
      ] : k;
    }, Jt = (d, S) => {
      const k = [];
      let $ = 0;
      for (let z = d.length - 1; z >= 0; z -= 1) {
        const K = d[z], oe = re([K]);
        if ($ + oe <= S || k.length === 0) {
          k.unshift(K), $ += oe;
          continue;
        }
        const be = S - $;
        if (K.role !== "assistant" || typeof K.content != "string" || be < xs)
          continue;
        let xe = be, ht = {
          ...K,
          content: De(K.content, xe)
        }, gt = re([ht]);
        for (; gt > be && xe > xs; )
          xe = Math.max(
            xs,
            Math.floor(xe * 0.7)
          ), ht = {
            ...K,
            content: De(K.content, xe)
          }, gt = re([ht]);
        $ + gt <= S && (k.unshift(ht), $ += gt);
      }
      return k;
    }, $r = () => {
      const d = Xt(), S = re([d]), k = Math.max(
        512,
        O.value - S
      );
      return [
        d,
        ...Jt(
          Xe.value.filter(($) => !$.streaming && $.role !== "system").map(($) => ({
            role: $.role,
            content: $.role === "user" ? W($) : $.content
          })),
          k
        )
      ];
    }, mt = (d) => {
      const S = Te.value?.messages.find(
        (k) => k.id === d.parentId
      );
      return S?.role === "user" ? S.content.trim() : "";
    }, ca = (d) => {
      const S = mt(d);
      return [...Xe.value.filter(($) => $.role === "user" && !$.streaming).slice(-4).map(($) => $.content.trim()).filter(Boolean), S].filter(Boolean).join(`
`);
    }, ua = (d) => {
      if (!J.test(d)) return d;
      const { isoDate: S, weekday: k } = je();
      return `${d} ${S} ${k}`;
    }, vr = (d, S) => typeof d == "number" ? `${d}${S}` : "未知", Vf = (d) => {
      const { isoDate: S, localTime: k, timeZone: $, weekday: z } = je();
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
          `Current temperature: ${vr(d.temperature, "°C")}`,
          `Apparent temperature: ${vr(d.apparentTemperature, "°C")}`,
          `Condition: ${d.weatherText}`,
          `Humidity: ${vr(d.humidity, "%")}`,
          `Precipitation: ${vr(d.precipitation, "mm")}`,
          `Wind speed: ${vr(d.windSpeed, "km/h")}`,
          `Today high: ${vr(d.temperatureMax, "°C")}`,
          `Today low: ${vr(d.temperatureMin, "°C")}`,
          `Precipitation probability: ${vr(d.precipitationProbability, "%")}`,
          "For weather, temperature, humidity, wind, rain, and today/date questions, this structured weather context and the authoritative current local date override model memory and stale web snippets."
        ].join(`
`)
      };
    }, jf = (d) => {
      const { isoDate: S, localTime: k, timeZone: $, weekday: z } = je(), K = d.results.map((oe, be) => {
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
      const k = mt(S);
      if (!k) return d;
      const $ = ua(k);
      S.webSearchStatus = "searching", S.webSearchQuery = $, S.webSearchResults = [], S.webSearchError = "";
      const z = [];
      if (H.test(k))
        try {
          const oe = await rg({
            query: ca(S)
          });
          z.push(Vf(oe));
        } catch (oe) {
          Wt.warn("[LocalAI] weather context failed", oe);
        }
      const K = (oe, be) => {
        if (!be.length) return Qt(oe);
        const xe = oe.filter(
          (Qe) => Qe.role === "system"
        ), ht = oe.filter(
          (Qe) => Qe.role !== "system"
        ), gt = [...xe, ...be], eo = re(gt), br = Math.max(
          512,
          O.value - eo
        );
        return Qt([
          ...gt,
          ...Jt(ht, br)
        ]);
      };
      try {
        const oe = await bd({
          query: $,
          maxResults: A.value?.webSearchMaxResults
        });
        if (!oe.results.length)
          return S.webSearchStatus = "empty", K(d, z);
        S.webSearchStatus = "done", S.webSearchResults = oe.results;
        const be = jf(oe);
        return K(d, [
          ...z,
          be
        ]);
      } catch (oe) {
        return S.webSearchStatus = "failed", S.webSearchError = String(oe), Wt.warn("[LocalAI] web search failed", oe), K(d, z);
      }
    }, Wf = (d) => {
      const S = A.value?.maxTokens ?? 0;
      if (S > 0) return S;
      const k = re(d);
      return Math.max(256, ut.value - k - 128);
    }, ti = (d) => Math.max(
      1,
      d.stats?.ctxSize ?? d.contextSize ?? A.value?.ctxSize ?? _.value?.ctxSize ?? 4096
    ), Mr = (d) => {
      const S = Y.value, k = d.stats?.promptTokens ?? d.promptTokens ?? 0, $ = d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? ie(d.content) : Ln(d.content)), z = ti(d), K = Math.min(
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
    }, ni = (d) => d.repetitionStopped ? t("localAi.repetitionStopped") : d.interrupted ? t("localAi.streamInterrupted") : d.stopped ? t("localAi.generationStopped") : (d.stats?.totalTokens ?? (d.promptTokens ?? 0) + (d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? ie(d.content) : Ln(d.content)))) >= ti(d) - 8 ? t("localAi.contextLimitReached") : d.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", ri = (d) => {
      const S = String(d);
      return /exceeds the available context size|exceed_context_size/i.test(S) ? t("localAi.contextExceeded") : S;
    }, Hf = (d) => {
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
        let ht = 1;
        for (let gt = $.length - be * 2; gt >= 0 && $.slice(gt, gt + be).join("\0") === xe; gt -= be)
          ht += 1;
        if (ht >= Math.max(24, Math.ceil(72 / be))) return !0;
      }
      return !1;
    }, oi = () => {
      se || (Y.value = Date.now(), se = setInterval(() => {
        Y.value = Date.now();
      }, fE));
    }, ds = () => {
      se && (clearInterval(se), se = null, Y.value = Date.now());
    }, ai = async (d) => {
      const S = performance.now(), k = vd();
      let $ = $r(), z = "", K = null, oe = null, be = !1, xe = !1;
      if (p.value = k, f.value = !1, $ = await Uf($, d), f.value) {
        d.streaming = !1, d.stopped = !0, d.elapsedMs = performance.now() - S, p.value = null;
        return;
      }
      $ = Qt($), d.promptTokens = re($), d.contextSize = ut.value;
      const ht = async () => {
        if (!z) {
          K = null, oe?.(), oe = null;
          return;
        }
        const Qe = f.value ? 1200 : z.length > 4e3 ? 900 : z.length > 1200 ? 520 : z.length > 240 ? 180 : 64;
        d.content += z.slice(0, Qe), z = z.slice(Qe), d.estimatedCompletionTokens = ie(
          d.content
        ), !xe && !f.value && Hf(d.content) && (xe = !0, f.value = !0, d.repetitionStopped = !0, bs(k).catch(
          (Io) => Wt.warn("[LocalAI] repetition stop failed", Io)
        )), await Ie(), K = window.setTimeout(() => {
          ht().catch(
            (Io) => Wt.warn("[LocalAI] stream pump failed", Io)
          );
        }, dE);
      }, gt = (Qe) => {
        Qe && (Jr(d, Qe), z += Qe, K === null && (K = window.setTimeout(() => {
          ht().catch(
            (Io) => Wt.warn("[LocalAI] stream pump failed", Io)
          );
        }, 32)));
      }, eo = async () => {
        !z && K === null || await new Promise((Qe) => {
          oe = Qe;
        });
      }, br = await ng(
        {
          messages: $,
          maxTokens: Wf($),
          enableThinking: d.allowThinking === !0
        },
        (Qe) => {
          be = !0, gt(Qe);
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
        gt(br.content);
      else if (!f.value) {
        const Qe = d.content.length + z.length;
        br.content.length > Qe && gt(br.content.slice(Qe));
      }
      await eo(), !f.value && br.content && d.content !== br.content && (d.content = br.content), d.estimatedCompletionTokens = d.stats?.completionTokens ?? ie(d.content), j.delete(d.id), d.streaming = !1, d.elapsedMs = performance.now() - S, d.stopped = f.value, d.interrupted = !1, d.error = "", Y.value = Date.now(), p.value = null;
    }, Gf = async () => {
      const d = p.value;
      if (!(!l.value || !d || f.value)) {
        f.value = !0;
        try {
          await bs(d);
        } catch (S) {
          Wt.warn("[LocalAI] cancel stream failed", S);
        }
      }
    }, Kf = (d) => {
      d.isComposing || d.keyCode === 229 || d.key === "Enter" && !d.shiftKey && (d.preventDefault(), si());
    }, qf = () => {
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
    }, si = async () => {
      const d = s.value.trim();
      if (l.value || !qf()) return;
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
        promptTokens: re($r())
      });
      s.value = "", i.value = [], l.value = !0, oi(), await Ie({ force: !0 });
      const be = performance.now();
      try {
        await ai(oe), Te.value && (Te.value.title = Te.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : Te.value.title, Te.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Te.value.updatedAtLabel = new Date(
          Te.value.updatedAt
        ).toLocaleString(), await pn()), await Ze();
      } catch (xe) {
        if (!f.value) {
          s.value = d, i.value = k;
          const ht = ri(xe);
          et.msg(`${t("localAi.chatFailed")}: ${ht}`, "error"), oe.error = ht, oe.interrupted = !!oe.content.trim(), oe.interrupted || (oe.content = ht), Te.value && (Te.value.title = Te.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : Te.value.title, Te.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Te.value.updatedAtLabel = new Date(
            Te.value.updatedAt
          ).toLocaleString(), await pn());
        }
        oe.streaming = !1, j.delete(oe.id), oe.elapsedMs = performance.now() - be;
      } finally {
        l.value = !1, p.value = null, ds(), await Ie();
      }
    }, Yf = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Zf = (d) => {
      const S = new Date(d), k = /* @__PURE__ */ new Date(), $ = k.getTime() - S.getTime(), z = 24 * 60 * 60 * 1e3;
      return S.toDateString() === k.toDateString() ? S.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : $ < z * 2 ? t("localAi.yesterday") : $ < z * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor($ / z))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor($ / (z * 7)))
      });
    }, li = async (d) => {
      try {
        await navigator.clipboard.writeText(d.content), et.msg(t("localAi.copied"));
      } catch (S) {
        et.msg(`${t("common.operationFailed")}: ${S}`, "error");
      }
    }, Xf = (d, S) => {
      const k = Pe(d), $ = /* @__PURE__ */ new Set([S]), z = (K) => {
        const oe = k.get(K);
        for (const be of oe?.childIds ?? [])
          $.add(be), z(be);
      };
      return z(S), $;
    }, ii = async (d) => {
      const S = Te.value;
      if (!S) return;
      const k = S.messages.find((z) => z.id === d);
      if (!k || pe(k)) return;
      const $ = Xf(S.messages, d);
      S.messages = S.messages.filter((z) => !$.has(z.id)).map((z) => ({
        ...z,
        childIds: (z.childIds ?? []).filter((K) => !$.has(K))
      })), S.currentNodeId && $.has(S.currentNodeId) && (S.currentNodeId = Z(S.messages, k.parentId) ?? ae(S.messages)?.id ?? null), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
    }, ci = (d) => {
      s.value = d.content, Te.value && d.parentId && (Te.value.currentNodeId = d.parentId);
    }, ui = (d) => t("localAi.messageVersion", {
      current: d.siblingCurrentIndex + 1,
      total: d.siblingLeafNodeIds.length
    }), di = (d, S) => {
      const k = Te.value;
      if (!k) return;
      const $ = d.siblingCurrentIndex + S, z = d.siblingLeafNodeIds[$];
      z && (k.currentNodeId = z, b.value = !0, Ie({ force: !0 }));
    }, Qf = async (d) => {
      const S = Te.value;
      if (!S || l.value) return;
      const k = S.messages.find((xe) => xe.id === d);
      if (!k || k.role !== "assistant") return;
      const $ = ke(S.messages, k.id);
      if (!$.length) return;
      const z = (/* @__PURE__ */ new Date()).toISOString(), K = /* @__PURE__ */ new Map(), oe = $.map((xe, ht) => {
        const gt = de(ht === 0 ? "root" : xe.role);
        return K.set(xe.id, gt), {
          ...xe,
          id: gt,
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
    }, Jf = async (d) => {
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
        promptTokens: re($r())
      });
      l.value = !0, oi(), await Ie({ force: !0 });
      const z = performance.now();
      try {
        await ai($), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
      } catch (K) {
        if (!f.value) {
          const oe = ri(K);
          et.msg(`${t("localAi.chatFailed")}: ${oe}`, "error"), $.error = oe, $.interrupted = !!$.content.trim(), $.interrupted || ($.content = oe), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
        }
        $.streaming = !1, j.delete($.id), $.elapsedMs = performance.now() - z;
      } finally {
        l.value = !1, p.value = null, ds(), await Ie();
      }
    };
    return _t(async () => {
      await hr(), X = setInterval(() => {
        Ze().catch(
          (d) => Wt.warn("[LocalAI] status timer failed", d)
        );
      }, 8e3);
    }), Oe(V, (d) => {
      d || (m.value = !1);
    }), Wa(() => {
      X && clearInterval(X), he !== null && (window.cancelAnimationFrame(he), he = null), p.value && bs(p.value), ye.clear(), _e.clear(), j.clear(), ds();
    }), (d, S) => (R(), U(
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
            v("header", TT, [
              v("div", ET, [
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
                F(c(hi), {
                  theme: "outline",
                  size: "17"
                })
              ], 8, AT)
            ]),
            v("div", CT, [
              v("button", {
                class: "sidebar-nav-item",
                type: "button",
                onClick: qn
              }, [
                F(c(ps), {
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
              v("label", IT, [
                F(c(ms), {
                  theme: "outline",
                  size: "18"
                }),
                Ct(v("input", {
                  "onUpdate:modelValue": S[1] || (S[1] = (k) => co(n) ? n.value = k : null),
                  placeholder: c(t)("localAi.searchHistory")
                }, null, 8, LT), [
                  [Ho, c(n)]
                ])
              ])
            ]),
            v("section", OT, [
              v("div", xT, [
                v(
                  "div",
                  RT,
                  D(c(t)("localAi.recent")),
                  1
                  /* TEXT */
                ),
                v("button", {
                  class: "icon-action-btn",
                  type: "button",
                  title: c(t)("plugins.refresh"),
                  onClick: hr
                }, [
                  F(c(gi), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, NT)
              ]),
              c(ne).length ? (R(), U("div", PT, [
                (R(!0), U(
                  ft,
                  null,
                  Pn(c(ne), (k) => (R(), U("div", {
                    key: k.id,
                    class: q([
                      "chat-list-item",
                      c(o) === k.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: ($) => An(k.id),
                    onKeydown: yn(rt(($) => An(k.id), ["prevent"]), ["enter"])
                  }, [
                    v(
                      "span",
                      MT,
                      D(k.title),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      DT,
                      D(Zf(k.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    v("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: rt(($) => mn(k.id), ["stop"])
                    }, [
                      F(c(da), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, FT)
                  ], 42, $T))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (R(), U(
                "div",
                zT,
                D(c(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            v("footer", BT, [
              v("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: Yf
              }, [
                F(c(xu), {
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
              v("div", VT, [
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
                    tn(
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
        v("section", jT, [
          c(a) ? (R(), U("button", {
            key: 0,
            class: "panel-sidebar-toggle",
            type: "button",
            title: c(t)("localAi.expandSidebar"),
            onClick: S[2] || (S[2] = (k) => a.value = !1)
          }, [
            F(c(hi), {
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
              c(Xe).length ? ee("v-if", !0) : (R(), U("div", WT, [
                F(c(vi), {
                  theme: "outline",
                  size: "28"
                }),
                v(
                  "div",
                  HT,
                  D(c(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                v(
                  "div",
                  GT,
                  D(c(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (R(!0), U(
                ft,
                null,
                Pn(c(Lt), (k, $) => (R(), U(
                  ft,
                  {
                    key: k.message.id
                  },
                  [
                    Dt($) ? (R(), U("div", KT, [
                      v(
                        "span",
                        null,
                        D(In(k.message)),
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
                        v("div", qT, [
                          k.message.role === "assistant" ? (R(), me(c(vi), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (R(), U(
                            "span",
                            YT,
                            D(c(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        v("div", ZT, [
                          k.message.role === "user" ? (R(), U(
                            ft,
                            { key: 0 },
                            [
                              v("div", XT, [
                                k.message.content ? (R(), U(
                                  "div",
                                  QT,
                                  D(k.message.content),
                                  1
                                  /* TEXT */
                                )) : ee("v-if", !0),
                                k.message.attachments?.length ? (R(), U("div", JT, [
                                  (R(!0), U(
                                    ft,
                                    null,
                                    Pn(k.message.attachments, (z) => (R(), U(
                                      "div",
                                      {
                                        key: z.id,
                                        class: q([
                                          "message-attachment-chip",
                                          z.type === "image" && z.dataUrl ? "message-attachment-chip--image" : ""
                                        ])
                                      },
                                      [
                                        z.type === "image" && z.dataUrl ? (R(), U("figure", {
                                          key: 0,
                                          title: z.name
                                        }, [
                                          v("img", {
                                            src: z.dataUrl,
                                            alt: z.name
                                          }, null, 8, t2)
                                        ], 8, e2)) : (R(), U(
                                          "span",
                                          n2,
                                          D(z.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        z.type === "image" && z.dataUrl ? ee("v-if", !0) : (R(), U(
                                          "span",
                                          r2,
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
                              k.message.streaming ? ee("v-if", !0) : (R(), U("div", o2, [
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (z) => li(k.message)
                                }, [
                                  F(c(pi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, a2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (z) => ci(k.message)
                                }, [
                                  F(c(ps), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, s2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (z) => ii(k.message.id)
                                }, [
                                  F(c(da), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, l2)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (R(), U(
                            ft,
                            { key: 1 },
                            [
                              v("div", i2, [
                                v(
                                  "span",
                                  null,
                                  D(c(wt)),
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? (R(), U(
                                  "small",
                                  c2,
                                  D(Qr(k.message)),
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
                                  k.message.content ? (R(), U("div", u2, [
                                    k.message.allowThinking && Xr(k.message.content) ? (R(), U("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: k.message.streaming && M(k.message)
                                    }, [
                                      v("summary", null, [
                                        v("span", f2, [
                                          F(c(fi), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          tn(
                                            " " + D(Le(k.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        k.message.streaming ? (R(), U(
                                          "small",
                                          p2,
                                          D(M(k.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : ee("v-if", !0)
                                      ]),
                                      v("div", {
                                        class: "message-content markdown-body",
                                        onClick: Nr,
                                        innerHTML: Zr(k.message, "reasoning")
                                      }, null, 8, m2)
                                    ], 8, d2)) : ee("v-if", !0),
                                    Pr(k.message.content) ? (R(), U("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: Nr,
                                      innerHTML: Zr(k.message, "answer")
                                    }, null, 8, h2)) : ee("v-if", !0)
                                  ])) : (R(), U(
                                    "div",
                                    g2,
                                    D(us(k.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              Co(k.message) || k.message.webSearchResults?.length ? (R(), U("div", v2, [
                                v("div", b2, [
                                  F(c(ms), {
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
                                k.message.webSearchResults?.length ? (R(), U("div", y2, [
                                  (R(!0), U(
                                    ft,
                                    null,
                                    Pn(k.message.webSearchResults, (z, K) => (R(), U("a", {
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
                                    ], 8, _2))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])) : ee("v-if", !0)
                              ])) : ee("v-if", !0),
                              k.message.content ? (R(), U("div", w2, [
                                v(
                                  "span",
                                  k2,
                                  D(c(t)("localAi.contextLabel")) + ": " + D(Mr(k.message).context) + "/" + D(Mr(k.message).contextMax) + " (" + D(Mr(k.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  S2,
                                  D(c(t)("localAi.outputLabel")) + ": " + D(Mr(k.message).output) + "/" + D(Mr(k.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  T2,
                                  D(Mr(k.message).seconds) + "s ",
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  E2,
                                  D(Mr(k.message).speed) + " t/s ",
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? ee("v-if", !0) : (R(), U(
                                  "span",
                                  A2,
                                  D(pt(k.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : ee("v-if", !0),
                              ni(k.message) ? (R(), U(
                                "div",
                                C2,
                                D(ni(k.message)),
                                1
                                /* TEXT */
                              )) : ee("v-if", !0),
                              k.message.streaming ? ee("v-if", !0) : (R(), U("div", I2, [
                                k.siblingLeafNodeIds.length > 1 ? (R(), U("div", {
                                  key: 0,
                                  class: "message-version-switcher",
                                  title: ui(k),
                                  "aria-label": ui(k)
                                }, [
                                  v("button", {
                                    type: "button",
                                    disabled: k.siblingCurrentIndex <= 0,
                                    title: c(t)("localAi.previousVersion"),
                                    onClick: (z) => di(k, -1)
                                  }, " ‹ ", 8, O2),
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
                                    onClick: (z) => di(k, 1)
                                  }, " › ", 8, x2)
                                ], 8, L2)) : ee("v-if", !0),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (z) => li(k.message)
                                }, [
                                  F(c(pi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, R2),
                                k.message.role === "assistant" ? (R(), U("button", {
                                  key: 1,
                                  type: "button",
                                  title: c(t)("localAi.regenerate"),
                                  onClick: (z) => Jf(k.message.id)
                                }, [
                                  F(c(gi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, N2)) : ee("v-if", !0),
                                k.message.role === "assistant" ? (R(), U("button", {
                                  key: 2,
                                  type: "button",
                                  title: c(t)("localAi.branchChat"),
                                  onClick: (z) => Qf(k.message.id)
                                }, [
                                  F(c(Tp), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, P2)) : ee("v-if", !0),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (z) => ci(k.message)
                                }, [
                                  F(c(ps), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, $2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (z) => ii(k.message.id)
                                }, [
                                  F(c(da), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, M2)
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
          c(L) ? (R(), U("button", {
            key: 1,
            class: "scroll-bottom-btn",
            type: "button",
            title: c(t)("localAi.jumpToLatest"),
            onClick: nt
          }, [
            F(c(mi), {
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
          ], 8, D2)) : ee("v-if", !0),
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
              onSubmit: rt(si, ["prevent"]),
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
                  onChange: gr
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              c(i).length ? (R(), U("div", F2, [
                (R(!0), U(
                  ft,
                  null,
                  Pn(c(i), (k) => (R(), U(
                    "div",
                    {
                      key: k.id,
                      class: q([
                        "attachment-preview-item",
                        `attachment-preview-item--${k.status}`
                      ])
                    },
                    [
                      k.type === "image" && k.dataUrl ? (R(), U("img", {
                        key: 0,
                        src: k.dataUrl,
                        alt: k.name
                      }, null, 8, z2)) : (R(), U(
                        "span",
                        B2,
                        D(k.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      v("span", V2, [
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
                          D(c(mg)(k.size)) + " · " + D(Zn(k)),
                          1
                          /* TEXT */
                        )
                      ]),
                      v("button", {
                        type: "button",
                        title: c(t)("common.delete"),
                        onClick: ($) => To(k.id)
                      }, [
                        F(c(da), {
                          theme: "outline",
                          size: "12"
                        })
                      ], 8, j2)
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
                onKeydown: Kf,
                onPaste: Rr
              }, null, 40, U2), [
                [Ho, c(s)]
              ]),
              v("div", W2, [
                v("div", H2, [
                  v("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: c(t)("localAi.addAttachment"),
                    onClick: Yt
                  }, [
                    F(c(Ep), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, G2),
                  v("label", K2, [
                    Ct(v("select", {
                      "onUpdate:modelValue": S[4] || (S[4] = (k) => co(I) ? I.value = k : null),
                      disabled: c(l) || !c(kt).length,
                      onChange: Yr
                    }, [
                      (R(!0), U(
                        ft,
                        null,
                        Pn(c(kt), (k) => (R(), U("option", {
                          key: k,
                          value: k
                        }, D(ct(k)), 9, Y2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      c(kt).length ? ee("v-if", !0) : (R(), U(
                        "option",
                        Z2,
                        D(c(wt)),
                        1
                        /* TEXT */
                      ))
                    ], 40, q2), [
                      [yp, c(I)]
                    ]),
                    F(c(mi), {
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
                    F(c(ms), {
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
                  ], 10, X2),
                  c(V) ? (R(), U("button", {
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
                    F(c(fi), {
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
                  ], 10, Q2)) : ee("v-if", !0)
                ]),
                v("div", J2, [
                  S[10] || (S[10] = v(
                    "span",
                    { class: "input-hint" },
                    "Enter · Shift + Enter",
                    -1
                    /* HOISTED */
                  )),
                  c(l) ? (R(), U("button", {
                    key: 0,
                    class: "send-btn send-btn--stop",
                    type: "button",
                    title: c(t)("localAi.stopGenerating"),
                    "aria-label": c(t)("localAi.stopGenerating"),
                    onClick: Gf
                  }, [
                    F(c(Cp), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, eE)) : (R(), U("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !c(ge),
                    title: c(t)("localAi.send"),
                    "aria-label": c(t)("localAi.send")
                  }, [
                    F(c(Ap), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, tE))
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
}), ei = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, mE = /* @__PURE__ */ ei(pE, [["__scopeId", "data-v-0d15ec8f"]]), hE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mE
}, Symbol.toStringTag, { value: "Module" }));
async function Au(e = {}) {
  return typeof e == "object" && Object.freeze(e), await It("plugin:dialog|open", { options: e });
}
const gE = ["disabled"], vE = {
  key: 0,
  class: "custom-button__loading"
}, bE = /* @__PURE__ */ ce({
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
    return (n, r) => (R(), U("button", {
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
      e.loading ? (R(), U("div", vE, r[1] || (r[1] = [
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
    ], 10, gE));
  }
}), Qn = /* @__PURE__ */ ei(bE, [["__scopeId", "data-v-9497085f"]]), yE = { class: "settings-panel local-ai-settings-shell" }, _E = { class: "local-ai-hero panel-card" }, wE = { class: "panel-title" }, kE = { class: "hero-desc" }, SE = { class: "header-actions" }, TE = {
  key: 0,
  class: "settings-grid"
}, EE = { class: "summary-panel panel-card" }, AE = { class: "status-strip" }, CE = { class: "memory-card" }, IE = { class: "memory-card__header" }, LE = { class: "memory-metrics" }, OE = { class: "bottleneck-row" }, xE = { class: "summary-card" }, RE = { class: "summary-card__title" }, NE = { class: "summary-card__desc" }, PE = { class: "service-controls" }, $E = { class: "service-url" }, ME = { class: "summary-card" }, DE = { class: "summary-card__title" }, FE = { class: "summary-card__desc" }, zE = { class: "summary-meta" }, BE = { class: "form-panel panel-card" }, VE = { class: "settings-section" }, jE = { class: "settings-section__header" }, UE = { class: "field-stack" }, WE = ["title"], HE = { class: "path-control" }, GE = ["title"], KE = ["title"], qE = ["title"], YE = { class: "path-control" }, ZE = ["placeholder"], XE = { class: "settings-section grid-two" }, QE = { class: "settings-section__header" }, JE = { class: "param-grid" }, eA = ["title"], tA = ["title"], nA = ["title"], rA = ["title"], oA = ["title"], aA = ["title"], sA = { class: "settings-section grid-two" }, lA = { class: "settings-section__header" }, iA = { class: "switch-grid" }, cA = ["title"], uA = ["title"], dA = ["title"], fA = { class: "settings-section grid-two" }, pA = { class: "settings-section__header" }, mA = { class: "switch-grid switch-grid--two" }, hA = ["title"], gA = ["title"], vA = ["title"], bA = ["title"], yA = { class: "settings-section grid-two" }, _A = { class: "settings-section__header" }, wA = { class: "param-grid param-grid--three" }, kA = ["title"], SA = ["title"], TA = ["title"], EA = ["title"], AA = ["title"], CA = ["title"], IA = ["title"], LA = ["title"], OA = { class: "settings-section grid-two" }, xA = { class: "settings-section__header" }, RA = { class: "param-grid" }, NA = ["title"], PA = ["title"], $A = { class: "settings-footer" }, MA = ["title"], DA = /* @__PURE__ */ ce({
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
      r.value = await Jh();
    }, X = async () => {
      o.value = await hd();
    }, se = async () => {
      n.value && (a.value = await md(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, he = async () => {
      s.value = !0;
      try {
        n.value = await pd(), await Promise.all([Y(), se(), X()]);
      } catch (ae) {
        Wt.error("[LocalAI] refresh settings failed", ae), et.msg(`${t("localAi.refreshFailed")}: ${ae}`, "error");
      } finally {
        s.value = !1;
      }
    }, le = async () => {
      if (n.value)
        try {
          await Fo(n.value);
        } catch (ae) {
          Wt.warn("[LocalAI] autosave failed", ae);
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
      const ae = await Au({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !ae || Array.isArray(ae) || !n.value || (n.value.modelDir = ae, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await se());
    }, j = async () => {
      const ae = await Au({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !ae || Array.isArray(ae) || !n.value || (n.value.runtimePath = ae, await le(), await Y());
    }, J = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Fo(n.value), o.value = await eg(n.value), et.msg(t("localAi.serviceStarted"));
        } catch (ae) {
          et.msg(`${t("localAi.serviceStartFailed")}: ${ae}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, H = async () => {
      u.value = !0;
      try {
        await ye(), o.value = await gd(), et.msg(t("localAi.serviceRestarted"));
      } catch (ae) {
        et.msg(`${t("localAi.serviceRestartFailed")}: ${ae}`, "error");
      } finally {
        u.value = !1;
      }
    }, de = async () => {
      f.value = !0;
      try {
        await tg(), await X(), et.msg(t("localAi.serviceStoppedMsg"));
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
          const ae = await bd({
            query: t("localAi.webSearchTestQuery"),
            maxResults: 1
          });
          et.msg(
            ae.results.length ? t("localAi.webSearchTestSuccess", {
              count: ae.results.length
            }) : t("localAi.webSearchTestEmpty")
          );
        } catch (ae) {
          Wt.warn("[LocalAI] web search test failed", ae), et.msg(`${t("localAi.webSearchTestFailed")}: ${ae}`, "error");
        } finally {
          m.value = !1;
        }
      }
    }, Pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return _t(async () => {
      await he(), h = setInterval(() => {
        X().catch(
          (ae) => Wt.warn("[LocalAI] status refresh failed", ae)
        );
      }, 5e3);
    }), Wa(() => {
      h && clearInterval(h);
    }), (ae, Z) => {
      const Me = VS, ke = BS, Se = TS, we = qS;
      return R(), U("div", yE, [
        v("header", _E, [
          v("div", null, [
            v(
              "h3",
              wE,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            v(
              "p",
              kE,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          v("div", SE, [
            F(c(Qn), {
              size: "small",
              plain: "",
              onClick: Pe
            }, {
              default: fe(() => [
                tn(
                  D(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            F(c(Qn), {
              size: "small",
              loading: c(s),
              onClick: he
            }, {
              default: fe(() => [
                tn(
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
        c(n) ? (R(), U("main", TE, [
          v("aside", EE, [
            v("div", AE, [
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
            v("section", CE, [
              v("div", IE, [
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
              v("div", LE, [
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
              v("div", OE, [
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
            v("section", xE, [
              v(
                "div",
                RE,
                D(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              v(
                "div",
                NE,
                D(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              v("div", PE, [
                F(c(Qn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: J
                }, {
                  default: fe(() => [
                    tn(
                      D(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(Qn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: H
                }, {
                  default: fe(() => [
                    tn(
                      D(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(Qn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: de
                }, {
                  default: fe(() => [
                    tn(
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
                $E,
                D(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            v("section", ME, [
              v(
                "div",
                DE,
                D(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              v(
                "div",
                FE,
                D(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              v("div", zE, [
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
          v("section", BE, [
            v("div", VE, [
              v("div", jE, [
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
                  v("div", HE, [
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
                    F(c(Qn), {
                      size: "small",
                      plain: "",
                      onClick: _e
                    }, {
                      default: fe(() => [
                        tn(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, WE),
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
                      (R(!0), U(
                        ft,
                        null,
                        Pn(c(a)?.mainModels ?? [], (Q) => (R(), me(Me, {
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
                      (R(!0), U(
                        ft,
                        null,
                        Pn(c(a)?.mmprojModels ?? [], (Q) => (R(), me(Me, {
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
                ], 8, KE),
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
                  v("div", YE, [
                    Ct(v("input", {
                      "onUpdate:modelValue": Z[3] || (Z[3] = (Q) => c(n).runtimePath = Q),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, ZE), [
                      [Ho, c(n).runtimePath]
                    ]),
                    F(c(Qn), {
                      size: "small",
                      plain: "",
                      onClick: j
                    }, {
                      default: fe(() => [
                        tn(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, qE)
              ])
            ]),
            v("div", XE, [
              v("div", QE, [
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
              v("div", JE, [
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
                ], 8, eA),
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
                ], 8, tA),
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
                ], 8, nA),
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
                ], 8, rA),
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
                ], 8, oA),
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
                ], 8, aA)
              ])
            ]),
            v("div", sA, [
              v("div", lA, [
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
              v("div", iA, [
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
                ], 8, cA),
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
                ], 8, uA),
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
                ], 8, dA)
              ])
            ]),
            v("div", fA, [
              v("div", pA, [
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
              v("div", mA, [
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
                ], 8, hA),
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
                ], 8, gA),
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
                ], 8, vA),
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
                ], 8, bA)
              ])
            ]),
            v("div", yA, [
              v("div", _A, [
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
              v("div", wA, [
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
                ], 8, kA),
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
                ], 8, SA),
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
                ], 8, TA),
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
                ], 8, EA),
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
                ], 8, AA),
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
                ], 8, CA),
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
                ], 8, IA),
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
                ], 8, LA)
              ])
            ]),
            v("div", OA, [
              v("div", xA, [
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
                F(c(Qn), {
                  size: "small",
                  plain: "",
                  loading: c(m),
                  onClick: pe
                }, {
                  default: fe(() => [
                    tn(
                      D(c(t)("localAi.webSearchTest")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])
              ]),
              v("div", RA, [
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
                ], 8, NA),
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
                ], 8, PA)
              ])
            ]),
            v("div", $A, [
              F(c(Qn), {
                type: "primary",
                loading: c(i),
                onClick: ye
              }, {
                default: fe(() => [
                  tn(
                    D(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (R(), U("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, D(c(o).commandLine), 9, MA)) : ee("v-if", !0)
            ])
          ])
        ])) : ee("v-if", !0)
      ]);
    };
  }
}), FA = /* @__PURE__ */ ei(DA, [["__scopeId", "data-v-c5639815"]]), zA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FA
}, Symbol.toStringTag, { value: "Module" }));
export {
  jA as activate,
  jA as default
};
