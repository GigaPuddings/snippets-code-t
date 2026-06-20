var tp = Object.defineProperty;
var np = (e, t, n) => t in e ? tp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ye = (e, t, n) => np(e, typeof t != "symbol" ? t + "" : t, n);
import * as fs from "vue";
import { inject as Ke, createVNode as F, defineAsyncComponent as rp, ref as G, shallowRef as Sr, computed as N, watch as Le, onMounted as _t, onUnmounted as Wa, defineComponent as ce, h as Cu, Text as Iu, Fragment as pt, getCurrentInstance as Yt, unref as c, watchEffect as Lu, readonly as rl, getCurrentScope as op, onScopeDispose as ap, nextTick as vt, isRef as co, warn as sp, provide as Vn, createElementBlock as U, openBlock as R, mergeProps as uo, renderSlot as Ee, createElementVNode as v, toRef as tr, useAttrs as lp, useSlots as ip, normalizeStyle as Pt, normalizeClass as K, createCommentVNode as ee, createBlock as ge, withCtx as pe, resolveDynamicComponent as Kt, withModifiers as ot, toDisplayString as D, onBeforeUnmount as Wn, Transition as ko, withDirectives as It, vShow as cr, reactive as zr, onActivated as cp, onUpdated as Ou, cloneVNode as up, Comment as dp, Teleport as fp, onBeforeMount as pp, onDeactivated as mp, createTextVNode as en, withKeys as yn, createSlots as hp, toRaw as gp, toRefs as ol, resolveComponent as Mr, resolveDirective as vp, toHandlerKey as bp, renderList as Nn, vModelText as Ko, shallowReactive as yp, isVNode as qo, render as La, vModelSelect as _p } from "vue";
var wp = {
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
function kp() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Sp(e, t, n) {
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
var Tp = Symbol("icon-context");
function rn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = kp(), i = Ke(Tp, wp);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, m = a.strokeLinejoin, h = a.theme, y = a.fill, g = a.spin, b = Sp(s, {
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
const fi = rn("brain", !0, function(e) {
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
}), pi = rn("copy", !0, function(e) {
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
}), da = rn("delete", !1, function(e) {
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
}), mi = rn("down", !1, function(e) {
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
}), ps = rn("edit", !0, function(e) {
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
}), Ep = rn("fork", !1, function(e) {
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
}), hi = rn("left-bar", !0, function(e) {
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
}), Ap = rn("link", !0, function(e) {
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
}), gi = rn("refresh", !0, function(e) {
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
}), vi = rn("robot", !0, function(e) {
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
}), ms = rn("search", !0, function(e) {
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
}), Cp = rn("send", !0, function(e) {
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
}), xu = rn("setting-two", !1, function(e) {
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
}), Ip = rn("square", !1, function(e) {
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
    component: () => Promise.resolve().then(() => gE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: xu,
    component: rp(() => Promise.resolve().then(() => zA))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Lp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const bi = typeof window < "u", Ur = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Op = (e, t, n) => xp({ l: e, k: t, s: n }), xp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ot = (e) => typeof e == "number" && isFinite(e), Rp = (e) => al(e) === "[object Date]", Oa = (e) => al(e) === "[object RegExp]", Ha = (e) => Be(e) && Object.keys(e).length === 0, $t = Object.assign, Np = Object.create, Ze = (e = null) => Np(e);
let yi;
const Ta = () => yi || (yi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ze());
function _i(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function wi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${wi(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${wi(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const $p = Object.prototype.hasOwnProperty;
function _n(e, t) {
  return $p.call(e, t);
}
const yt = Array.isArray, lt = (e) => typeof e == "function", de = (e) => typeof e == "string", bt = (e) => typeof e == "boolean", Ve = (e) => e !== null && typeof e == "object", Mp = (e) => Ve(e) && lt(e.then) && lt(e.catch), Ru = Object.prototype.toString, al = (e) => Ru.call(e), Be = (e) => al(e) === "[object Object]", Dp = (e) => e == null ? "" : yt(e) || Be(e) && e.toString === Ru ? JSON.stringify(e, null, 2) : String(e);
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
      a !== "__proto__" && (Ve(r[a]) && !Ve(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Ze()), fa(o[a]) || fa(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fp(e, t, n) {
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
}, zp = 17;
function Ga(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Bp(e) {
  throw e;
}
const Ln = " ", Vp = "\r", Vt = `
`, jp = "\u2028", Up = "\u2029";
function Wp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (C) => t[C] === Vp && t[C + 1] === Vt, i = (C) => t[C] === Vt, l = (C) => t[C] === Up, u = (C) => t[C] === jp, f = (C) => s(C) || i(C) || l(C) || u(C), m = () => n, h = () => r, y = () => o, g = () => a, b = (C) => s(C) || l(C) || u(C) ? Vt : t[C], L = () => b(n), p = () => b(n + a);
  function A() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function P() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function I() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function w(C = 0) {
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
    resetPeek: w,
    skipToPeek: x
  };
}
const Zn = void 0, Hp = ".", ki = "'", Gp = "tokenizer";
function Kp(e, t = {}) {
  const n = t.location !== !1, r = Wp(e), o = () => r.index(), a = () => Fp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function m(T, O, j, ...re) {
    const Pe = u();
    if (O.column += j, O.offset += j, f) {
      const ve = n ? Rs(Pe.startLoc, O) : null, E = Ga(T, ve, {
        domain: Gp,
        args: re
      });
      f(E);
    }
  }
  function h(T, O, j) {
    T.endLoc = a(), T.currentType = O;
    const re = { type: O };
    return n && (re.loc = Rs(T.startLoc, T.endLoc)), j != null && (re.value = j), re;
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
    for (; T.currentPeek() === Ln || T.currentPeek() === Vt; )
      O += T.currentPeek(), T.peek();
    return O;
  }
  function L(T) {
    const O = b(T);
    return T.skipToPeek(), O;
  }
  function p(T) {
    if (T === Zn)
      return !1;
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O === 95;
  }
  function A(T) {
    if (T === Zn)
      return !1;
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function P(T, O) {
    const { currentType: j } = O;
    if (j !== 2)
      return !1;
    b(T);
    const re = p(T.currentPeek());
    return T.resetPeek(), re;
  }
  function I(T, O) {
    const { currentType: j } = O;
    if (j !== 2)
      return !1;
    b(T);
    const re = T.currentPeek() === "-" ? T.peek() : T.currentPeek(), Pe = A(re);
    return T.resetPeek(), Pe;
  }
  function w(T, O) {
    const { currentType: j } = O;
    if (j !== 2)
      return !1;
    b(T);
    const re = T.currentPeek() === ki;
    return T.resetPeek(), re;
  }
  function x(T, O) {
    const { currentType: j } = O;
    if (j !== 7)
      return !1;
    b(T);
    const re = T.currentPeek() === ".";
    return T.resetPeek(), re;
  }
  function C(T, O) {
    const { currentType: j } = O;
    if (j !== 8)
      return !1;
    b(T);
    const re = p(T.currentPeek());
    return T.resetPeek(), re;
  }
  function Y(T, O) {
    const { currentType: j } = O;
    if (!(j === 7 || j === 11))
      return !1;
    b(T);
    const re = T.currentPeek() === ":";
    return T.resetPeek(), re;
  }
  function X(T, O) {
    const { currentType: j } = O;
    if (j !== 9)
      return !1;
    const re = () => {
      const ve = T.currentPeek();
      return ve === "{" ? p(T.peek()) : ve === "@" || ve === "|" || ve === ":" || ve === "." || ve === Ln || !ve ? !1 : ve === Vt ? (T.peek(), re()) : he(T, !1);
    }, Pe = re();
    return T.resetPeek(), Pe;
  }
  function le(T) {
    b(T);
    const O = T.currentPeek() === "|";
    return T.resetPeek(), O;
  }
  function he(T, O = !0) {
    const j = (Pe = !1, ve = "") => {
      const E = T.currentPeek();
      return E === "{" || E === "@" || !E ? Pe : E === "|" ? !(ve === Ln || ve === Vt) : E === Ln ? (T.peek(), j(!0, Ln)) : E === Vt ? (T.peek(), j(!0, Vt)) : !0;
    }, re = j();
    return O && T.resetPeek(), re;
  }
  function se(T, O) {
    const j = T.currentChar();
    return j === Zn ? Zn : O(j) ? (T.next(), j) : null;
  }
  function _e(T) {
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36;
  }
  function ye(T) {
    return se(T, _e);
  }
  function V(T) {
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36 || // $
    O === 45;
  }
  function J(T) {
    return se(T, V);
  }
  function H(T) {
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function fe(T) {
    return se(T, H);
  }
  function me(T) {
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57 || // 0-9
    O >= 65 && O <= 70 || // A-F
    O >= 97 && O <= 102;
  }
  function Re(T) {
    return se(T, me);
  }
  function je(T) {
    let O = "", j = "";
    for (; O = fe(T); )
      j += O;
    return j;
  }
  function He(T) {
    let O = "";
    for (; ; ) {
      const j = T.currentChar();
      if (j === "{" || j === "}" || j === "@" || j === "|" || !j)
        break;
      if (j === Ln || j === Vt)
        if (he(T))
          O += j, T.next();
        else {
          if (le(T))
            break;
          O += j, T.next();
        }
      else
        O += j, T.next();
    }
    return O;
  }
  function Q(T) {
    L(T);
    let O = "", j = "";
    for (; O = J(T); )
      j += O;
    const re = T.currentChar();
    if (re && re !== "}" && re !== Zn && re !== Ln && re !== Vt && re !== "　") {
      const Pe = we(T);
      return m(Ue.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, j + Pe), j + Pe;
    }
    return T.currentChar() === Zn && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), j;
  }
  function q(T) {
    L(T);
    let O = "";
    return T.currentChar() === "-" ? (T.next(), O += `-${je(T)}`) : O += je(T), T.currentChar() === Zn && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), O;
  }
  function De(T) {
    return T !== ki && T !== Vt;
  }
  function Ae(T) {
    L(T), g(T, "'");
    let O = "", j = "";
    for (; O = se(T, De); )
      O === "\\" ? j += Se(T) : j += O;
    const re = T.currentChar();
    return re === Vt || re === Zn ? (m(Ue.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), re === Vt && (T.next(), g(T, "'")), j) : (g(T, "'"), j);
  }
  function Se(T) {
    const O = T.currentChar();
    switch (O) {
      case "\\":
      case "'":
        return T.next(), `\\${O}`;
      case "u":
        return ue(T, O, 4);
      case "U":
        return ue(T, O, 6);
      default:
        return m(Ue.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, O), "";
    }
  }
  function ue(T, O, j) {
    g(T, O);
    let re = "";
    for (let Pe = 0; Pe < j; Pe++) {
      const ve = Re(T);
      if (!ve) {
        m(Ue.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${O}${re}${T.currentChar()}`);
        break;
      }
      re += ve;
    }
    return `\\${O}${re}`;
  }
  function te(T) {
    return T !== "{" && T !== "}" && T !== Ln && T !== Vt;
  }
  function we(T) {
    L(T);
    let O = "", j = "";
    for (; O = se(T, te); )
      j += O;
    return j;
  }
  function Xe(T) {
    let O = "", j = "";
    for (; O = ye(T); )
      j += O;
    return j;
  }
  function wt(T) {
    const O = (j) => {
      const re = T.currentChar();
      return re === "{" || re === "@" || re === "|" || re === "(" || re === ")" || !re || re === Ln ? j : (j += re, T.next(), O(j));
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
  function kt(T, O) {
    let j = null;
    switch (T.currentChar()) {
      case "{":
        return O.braceNest >= 1 && m(Ue.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), T.next(), j = h(
          O,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), L(T), O.braceNest++, j;
      case "}":
        return O.braceNest > 0 && O.currentType === 2 && m(Ue.EMPTY_PLACEHOLDER, a(), 0), T.next(), j = h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), O.braceNest--, O.braceNest > 0 && L(T), O.inLinked && O.braceNest === 0 && (O.inLinked = !1), j;
      case "@":
        return O.braceNest > 0 && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), j = St(T, O) || y(O), O.braceNest = 0, j;
      default: {
        let Pe = !0, ve = !0, E = !0;
        if (le(T))
          return O.braceNest > 0 && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), j = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, j;
        if (O.braceNest > 0 && (O.currentType === 4 || O.currentType === 5 || O.currentType === 6))
          return m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), O.braceNest = 0, st(T, O);
        if (Pe = P(T, O))
          return j = h(O, 4, Q(T)), L(T), j;
        if (ve = I(T, O))
          return j = h(O, 5, q(T)), L(T), j;
        if (E = w(T, O))
          return j = h(O, 6, Ae(T)), L(T), j;
        if (!Pe && !ve && !E)
          return j = h(O, 12, we(T)), m(Ue.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, j.value), L(T), j;
        break;
      }
    }
    return j;
  }
  function St(T, O) {
    const { currentType: j } = O;
    let re = null;
    const Pe = T.currentChar();
    switch ((j === 7 || j === 8 || j === 11 || j === 9) && (Pe === Vt || Pe === Ln) && m(Ue.INVALID_LINKED_FORMAT, a(), 0), Pe) {
      case "@":
        return T.next(), re = h(
          O,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), O.inLinked = !0, re;
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
        return le(T) ? (re = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, re) : x(T, O) || Y(T, O) ? (L(T), St(T, O)) : C(T, O) ? (L(T), h(O, 11, Xe(T))) : X(T, O) ? (L(T), Pe === "{" ? kt(T, O) || re : h(O, 10, wt(T))) : (j === 7 && m(Ue.INVALID_LINKED_FORMAT, a(), 0), O.braceNest = 0, O.inLinked = !1, st(T, O));
    }
  }
  function st(T, O) {
    let j = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (O.braceNest > 0)
      return kt(T, O) || y(O);
    if (O.inLinked)
      return St(T, O) || y(O);
    switch (T.currentChar()) {
      case "{":
        return kt(T, O) || y(O);
      case "}":
        return m(Ue.UNBALANCED_CLOSING_BRACE, a(), 0), T.next(), h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return St(T, O) || y(O);
      default: {
        if (le(T))
          return j = h(O, 1, ct(T)), O.braceNest = 0, O.inLinked = !1, j;
        if (he(T))
          return h(O, 0, He(T));
        break;
      }
    }
    return j;
  }
  function ut() {
    const { currentType: T, offset: O, startLoc: j, endLoc: re } = l;
    return l.lastType = T, l.lastOffset = O, l.lastStartLoc = j, l.lastEndLoc = re, l.offset = o(), l.startLoc = a(), r.currentChar() === Zn ? h(
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
const qp = "parser", Yp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Zp(e, t, n) {
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
function Xp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(p, A, P, I, ...w) {
    const x = p.currentPosition();
    if (x.offset += I, x.column += I, n) {
      const C = t ? Rs(P, x) : null, Y = Ga(A, C, {
        domain: qp,
        args: w
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
    const P = p.context(), { lastOffset: I, lastStartLoc: w } = P, x = o(5, I, w);
    return x.index = parseInt(A, 10), p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function l(p, A) {
    const P = p.context(), { lastOffset: I, lastStartLoc: w } = P, x = o(4, I, w);
    return x.key = A, p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function u(p, A) {
    const P = p.context(), { lastOffset: I, lastStartLoc: w } = P, x = o(9, I, w);
    return x.value = A.replace(Yp, Zp), p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function f(p) {
    const A = p.nextToken(), P = p.context(), { lastOffset: I, lastStartLoc: w } = P, x = o(8, I, w);
    return A.type !== 11 ? (r(p, Ue.UNEXPECTED_EMPTY_LINKED_MODIFIER, P.lastStartLoc, 0), x.value = "", a(x, I, w), {
      nextConsumeToken: A,
      node: x
    }) : (A.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, On(A)), x.value = A.value || "", a(x, p.currentOffset(), p.currentPosition()), {
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
      const w = f(p);
      P.modifier = w.node, I = w.nextConsumeToken || p.nextToken();
    }
    switch (I.type !== 9 && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(I)), I = p.nextToken(), I.type === 2 && (I = p.nextToken()), I.type) {
      case 10:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(I)), P.key = m(p, I.value || "");
        break;
      case 4:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(I)), P.key = l(p, I.value || "");
        break;
      case 5:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(I)), P.key = i(p, I.value || "");
        break;
      case 6:
        I.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(I)), P.key = u(p, I.value || "");
        break;
      default: {
        r(p, Ue.UNEXPECTED_EMPTY_LINKED_KEY, A.lastStartLoc, 0);
        const w = p.context(), x = o(7, w.offset, w.startLoc);
        return x.value = "", a(x, w.offset, w.startLoc), P.key = x, a(P, w.offset, w.startLoc), {
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
    const A = p.context(), P = A.currentType === 1 ? p.currentOffset() : A.offset, I = A.currentType === 1 ? A.endLoc : A.startLoc, w = o(2, P, I);
    w.items = [];
    let x = null;
    do {
      const X = x || p.nextToken();
      switch (x = null, X.type) {
        case 0:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(X)), w.items.push(s(p, X.value || ""));
          break;
        case 5:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(X)), w.items.push(i(p, X.value || ""));
          break;
        case 4:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(X)), w.items.push(l(p, X.value || ""));
          break;
        case 6:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, On(X)), w.items.push(u(p, X.value || ""));
          break;
        case 7: {
          const le = h(p);
          w.items.push(le.node), x = le.nextConsumeToken || null;
          break;
        }
      }
    } while (A.currentType !== 13 && A.currentType !== 1);
    const C = A.currentType === 1 ? A.lastOffset : p.currentOffset(), Y = A.currentType === 1 ? A.lastEndLoc : p.currentPosition();
    return a(w, C, Y), w;
  }
  function g(p, A, P, I) {
    const w = p.context();
    let x = I.items.length === 0;
    const C = o(1, A, P);
    C.cases = [], C.cases.push(I);
    do {
      const Y = y(p);
      x || (x = Y.items.length === 0), C.cases.push(Y);
    } while (w.currentType !== 13);
    return x && r(p, Ue.MUST_HAVE_MESSAGES_IN_PLURAL, P, 0), a(C, p.currentOffset(), p.currentPosition()), C;
  }
  function b(p) {
    const A = p.context(), { offset: P, startLoc: I } = A, w = y(p);
    return A.currentType === 13 ? w : g(p, P, I, w);
  }
  function L(p) {
    const A = Kp(p, $t({}, e)), P = A.context(), I = o(0, P.offset, P.startLoc);
    return t && I.loc && (I.loc.source = p), I.body = b(A), e.onCacheKey && (I.cacheKey = e.onCacheKey(p)), P.currentType !== 13 && r(A, Ue.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, p[P.offset] || ""), a(I, A.currentOffset(), A.currentPosition()), I;
  }
  return { parse: L };
}
function On(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Qp(e, t = {}) {
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
function Jp(e, t = {}) {
  const n = Qp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ll(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function em(e) {
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
function tm(e, t) {
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
function nm(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), fo(e, t.key), t.modifier ? (e.push(", "), fo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function rm(e, t) {
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
function om(e, t) {
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
function am(e, t) {
  t.body ? fo(e, t.body) : e.push("null");
}
function fo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      am(e, t);
      break;
    case 1:
      om(e, t);
      break;
    case 2:
      rm(e, t);
      break;
    case 6:
      nm(e, t);
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
const sm = (e, t = {}) => {
  const n = de(t.mode) ? t.mode : "normal", r = de(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = tm(e, {
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
function lm(e, t = {}) {
  const n = $t({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Xp(n).parse(e);
  return r ? (a && em(i), o && so(i), { ast: i, code: "" }) : (Jp(i, n), sm(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function im() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ta().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Fn(e) {
  return Ve(e) && il(e) === 0 && (_n(e, "b") || _n(e, "body"));
}
const Nu = ["b", "body"];
function cm(e) {
  return Ar(e, Nu);
}
const Pu = ["c", "cases"];
function um(e) {
  return Ar(e, Pu, []);
}
const $u = ["s", "static"];
function dm(e) {
  return Ar(e, $u);
}
const Mu = ["i", "items"];
function fm(e) {
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
  throw Yo(t);
}
const zu = ["m", "modifier"];
function pm(e) {
  return Ar(e, zu);
}
const Bu = ["k", "key"];
function mm(e) {
  const t = Ar(e, Bu);
  if (t)
    return t;
  throw Yo(
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
function Yo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function hs(e) {
  return (n) => hm(n, e);
}
function hm(e, t) {
  const n = cm(t);
  if (n == null)
    throw Yo(
      0
      /* NodeTypes.Resource */
    );
  if (il(n) === 1) {
    const a = um(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Ei(e, i)
    ], []));
  } else
    return Ei(e, n);
}
function Ei(e, t) {
  const n = dm(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = fm(t).reduce((o, a) => [...o, Ns(e, a)], []);
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
      throw Yo(n);
    }
    case 5: {
      const r = t;
      if (_n(r, "i") && Ot(r.i))
        return e.interpolate(e.list(r.i));
      if (_n(r, "index") && Ot(r.index))
        return e.interpolate(e.list(r.index));
      throw Yo(n);
    }
    case 6: {
      const r = t, o = pm(r), a = mm(r);
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
const gm = (e) => e;
let ma = Ze();
function vm(e, t = {}) {
  let n = !1;
  const r = t.onError || Bp;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...lm(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function bm(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && de(e)) {
    bt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || gm)(e), o = ma[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = vm(e, {
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
const nr = {
  INVALID_ARGUMENT: zp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ym = 24;
function rr(e) {
  return Ga(e, null, void 0);
}
function cl(e, t) {
  return t.locale != null ? Ai(t.locale) : Ai(e.locale);
}
let gs;
function Ai(e) {
  if (de(e))
    return e;
  if (lt(e)) {
    if (e.resolvedOnce && gs != null)
      return gs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Mp(t))
        throw rr(nr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return gs = t;
    } else
      throw rr(nr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw rr(nr.NOT_SUPPORT_LOCALE_TYPE);
}
function _m(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...yt(t) ? t : Ve(t) ? Object.keys(t) : de(t) ? [t] : [n]
  ])];
}
function ju(e, t, n) {
  const r = de(n) ? n : xa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; yt(s); )
      s = Ci(a, s, t);
    const i = yt(t) || !Be(t) ? t : t.default ? t.default : null;
    s = de(i) ? [i] : i, yt(s) && Ci(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Ci(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && bt(r); o++) {
    const a = t[o];
    de(a) && (r = wm(e, t[o], n));
  }
  return r;
}
function wm(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = km(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function km(e, t, n) {
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
const Sm = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Tm(e) {
  return Sm.test(e);
}
function Em(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Am(e) {
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
function Cm(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Tm(t) ? Em(t) : "*" + t;
}
function Im(e) {
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
      if (o = 0, s === void 0 || (s = Cm(s), s === !1))
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
      if (l = Am(a), m = Cr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = h[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ii = /* @__PURE__ */ new Map();
function Lm(e, t) {
  return Ve(e) ? e[t] : null;
}
function Om(e, t) {
  if (!Ve(e))
    return null;
  let n = Ii.get(t);
  if (n || (n = Im(t), n && Ii.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Vu.includes(s) && Fn(o))
      return null;
    const i = o[s];
    if (i === void 0 || lt(o))
      return null;
    o = i, a++;
  }
  return o;
}
const xm = "11.2.2", Ka = -1, xa = "en-US", Li = "", Oi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Rm() {
  return {
    upper: (e, t) => t === "text" && de(e) ? e.toUpperCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && de(e) ? e.toLowerCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && de(e) ? Oi(e) : t === "vnode" && Ve(e) && "__v_isVNode" in e ? Oi(e.children) : e
  };
}
let Uu;
function Nm(e) {
  Uu = e;
}
let Wu;
function Pm(e) {
  Wu = e;
}
let Hu;
function $m(e) {
  Hu = e;
}
let Gu = null;
const xi = (e) => {
  Gu = e;
}, Mm = () => Gu;
let Ri = 0;
function Dm(e = {}) {
  const t = lt(e.onWarn) ? e.onWarn : Lp, n = de(e.version) ? e.version : xm, r = de(e.locale) || lt(e.locale) ? e.locale : xa, o = lt(r) ? xa : r, a = yt(e.fallbackLocale) || Be(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Be(e.messages) ? e.messages : vs(o), i = Be(e.datetimeFormats) ? e.datetimeFormats : vs(o), l = Be(e.numberFormats) ? e.numberFormats : vs(o), u = $t(Ze(), e.modifiers, Rm()), f = e.pluralRules || Ze(), m = lt(e.missing) ? e.missing : null, h = bt(e.missingWarn) || Oa(e.missingWarn) ? e.missingWarn : !0, y = bt(e.fallbackWarn) || Oa(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, b = !!e.unresolving, L = lt(e.postTranslation) ? e.postTranslation : null, p = Be(e.processor) ? e.processor : null, A = bt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter, I = lt(e.messageCompiler) ? e.messageCompiler : Uu, w = lt(e.messageResolver) ? e.messageResolver : Wu || Lm, x = lt(e.localeFallbacker) ? e.localeFallbacker : Hu || _m, C = Ve(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, X = Ve(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), le = Ve(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), he = Ve(Y.__meta) ? Y.__meta : {};
  Ri++;
  const se = {
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
    messageResolver: w,
    localeFallbacker: x,
    fallbackContext: C,
    onWarn: t,
    __meta: he
  };
  return se.datetimeFormats = i, se.numberFormats = l, se.__datetimeFormatters = X, se.__numberFormatters = le, se;
}
const vs = (e) => ({ [e]: Ze() });
function ul(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return de(i) ? i : t;
  } else
    return t;
}
function xo(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Fm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function zm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Fm(e, t[r]))
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
  if (!de(l) || l === "")
    return new Intl.DateTimeFormat(g, m).format(u);
  let L = {}, p, A = null;
  const P = "datetime format";
  for (let x = 0; x < b.length && (p = b[x], L = n[p] || {}, A = L[l], !Be(A)); x++)
    ul(e, l, p, h, P);
  if (!Be(A) || !de(p))
    return r ? Ka : l;
  let I = `${p}__${l}`;
  Ha(m) || (I = `${I}__${JSON.stringify(m)}`);
  let w = i.get(I);
  return w || (w = new Intl.DateTimeFormat(p, $t({}, A, m)), i.set(I, w)), y ? w.formatToParts(u) : w.format(u);
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
  const [t, n, r, o] = e, a = Ze();
  let s = Ze(), i;
  if (de(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw rr(nr.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw rr(nr.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Rp(t)) {
    if (isNaN(t.getTime()))
      throw rr(nr.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ot(t))
    i = t;
  else
    throw rr(nr.INVALID_ARGUMENT);
  return de(n) ? a.key = n : Be(n) && Object.keys(n).forEach((l) => {
    Ku.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), de(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", i, a, s];
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
  if (!de(l) || l === "")
    return new Intl.NumberFormat(g, m).format(u);
  let L = {}, p, A = null;
  const P = "number format";
  for (let x = 0; x < b.length && (p = b[x], L = n[p] || {}, A = L[l], !Be(A)); x++)
    ul(e, l, p, h, P);
  if (!Be(A) || !de(p))
    return r ? Ka : l;
  let I = `${p}__${l}`;
  Ha(m) || (I = `${I}__${JSON.stringify(m)}`);
  let w = i.get(I);
  return w || (w = new Intl.NumberFormat(p, $t({}, A, m)), i.set(I, w)), y ? w.formatToParts(u) : w.format(u);
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
  const [t, n, r, o] = e, a = Ze();
  let s = Ze();
  if (!Ot(t))
    throw rr(nr.INVALID_ARGUMENT);
  const i = t;
  return de(n) ? a.key = n : Be(n) && Object.keys(n).forEach((l) => {
    qu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), de(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", i, a, s];
}
function Mi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Bm = (e) => e, Vm = (e) => "", jm = "text", Um = (e) => e.length === 0 ? "" : sl(e), Wm = Dp;
function Di(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Hm(e) {
  const t = Ot(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ot(e.named.count) || Ot(e.named.n)) ? Ot(e.named.count) ? e.named.count : Ot(e.named.n) ? e.named.n : t : t;
}
function Gm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Km(e = {}) {
  const t = e.locale, n = Hm(e), r = Ve(e.pluralRules) && de(t) && lt(e.pluralRules[t]) ? e.pluralRules[t] : Di, o = Ve(e.pluralRules) && de(t) && lt(e.pluralRules[t]) ? Di : void 0, a = (p) => p[r(n, p.length, o)], s = e.list || [], i = (p) => s[p], l = e.named || Ze();
  Ot(e.pluralIndex) && Gm(n, l);
  const u = (p) => l[p];
  function f(p, A) {
    const P = lt(e.messages) ? e.messages(p, !!A) : Ve(e.messages) ? e.messages[p] : !1;
    return P || (e.parent ? e.parent.message(p) : Vm);
  }
  const m = (p) => e.modifiers ? e.modifiers[p] : Bm, h = Be(e.processor) && lt(e.processor.normalize) ? e.processor.normalize : Um, y = Be(e.processor) && lt(e.processor.interpolate) ? e.processor.interpolate : Wm, g = Be(e.processor) && de(e.processor.type) ? e.processor.type : jm, L = {
    list: i,
    named: u,
    plural: a,
    linked: (p, ...A) => {
      const [P, I] = A;
      let w = "text", x = "";
      A.length === 1 ? Ve(P) ? (x = P.modifier || x, w = P.type || w) : de(P) && (x = P || x) : A.length === 2 && (de(P) && (x = P || x), de(I) && (w = I || w));
      const C = f(p, !0)(L), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && yt(C) && x ? C[0] : C
      );
      return x ? m(x)(Y, w) : Y;
    },
    message: f,
    type: g,
    interpolate: y,
    normalize: h,
    values: $t(Ze(), s, l)
  };
  return L;
}
const Fi = () => "", ar = (e) => lt(e);
function zi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Ms(...t), f = bt(u.missingWarn) ? u.missingWarn : e.missingWarn, m = bt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = bt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, g = de(u.default) || bt(u.default) ? bt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, b = n || g != null && (de(g) || lt(g)), L = cl(e, u);
  h && qm(u);
  let [p, A, P] = y ? [
    l,
    L,
    i[L] || Ze()
  ] : Yu(e, l, L, s, m, f), I = p, w = l;
  if (!y && !(de(I) || Fn(I) || ar(I)) && b && (I = g, w = I), !y && (!(de(I) || Fn(I) || ar(I)) || !de(A)))
    return o ? Ka : l;
  let x = !1;
  const C = () => {
    x = !0;
  }, Y = ar(I) ? I : Zu(e, l, A, I, w, C);
  if (x)
    return I;
  const X = Xm(e, A, P, u), le = Km(X), he = Ym(e, Y, le);
  let se = r ? r(he, l) : he;
  return h && de(se) && (se = Pp(se)), se;
}
function qm(e) {
  yt(e.list) ? e.list = e.list.map((t) => de(t) ? _i(t) : t) : Ve(e.named) && Object.keys(e.named).forEach((t) => {
    de(e.named[t]) && (e.named[t] = _i(e.named[t]));
  });
}
function Yu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let m = Ze(), h, y = null;
  const g = "translate";
  for (let b = 0; b < f.length && (h = f[b], m = s[h] || Ze(), (y = l(m, t)) === null && (y = m[t]), !(de(y) || Fn(y) || ar(y))); b++)
    if (!zm(h, f)) {
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
  if (ar(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Zm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Ym(e, t, n) {
  return t(n);
}
function Ms(...e) {
  const [t, n, r] = e, o = Ze();
  if (!de(t) && !Ot(t) && !ar(t) && !Fn(t))
    throw rr(nr.INVALID_ARGUMENT);
  const a = Ot(t) ? String(t) : (ar(t), t);
  return Ot(n) ? o.plural = n : de(n) ? o.default = n : Be(n) && !Ha(n) ? o.named = n : yt(n) && (o.list = n), Ot(r) ? o.plural = r : de(r) ? o.default = r : Be(r) && $t(o, r), [a, o];
}
function Zm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Op(t, n, s)
  };
}
function Xm(e, t, n, r) {
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
      if (de(b) || Fn(b)) {
        let L = !1;
        const A = Zu(e, y, t, b, y, () => {
          L = !0;
        });
        return L ? Fi : A;
      } else return ar(b) ? b : Fi;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ot(r.plural) && (h.pluralIndex = r.plural), h;
}
im();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Qm = "11.2.2";
function Jm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ta().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ta().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ta().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const po = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ym,
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
function Zo(e, ...t) {
  return Ga(e, null, void 0);
}
const Ds = /* @__PURE__ */ Ur("__translateVNode"), Fs = /* @__PURE__ */ Ur("__datetimeParts"), zs = /* @__PURE__ */ Ur("__numberParts"), eh = Ur("__setPluralRules"), Xu = /* @__PURE__ */ Ur("__injectWithOption"), Bs = /* @__PURE__ */ Ur("__dispose");
function Xo(e) {
  if (!Ve(e) || Fn(e))
    return e;
  for (const t in e)
    if (_n(e, t))
      if (!t.includes("."))
        Ve(e[t]) && Xo(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Ze()), !Ve(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Fn(o) ? Vu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Fn(o)) {
          const s = o[n[r]];
          Ve(s) && Xo(s);
        }
      }
  return e;
}
function Qu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Be(n) ? n : yt(r) ? Ze() : { [e]: Ze() };
  if (yt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Ze(), Ea(u, s[l])) : Ea(u, s);
    } else
      de(i) && Ea(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      _n(s, i) && Xo(s[i]);
  return s;
}
function th(e) {
  return e.type;
}
function nh(e, t, n) {
  let r = Ve(t.messages) ? t.messages : Ze();
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
const Vi = () => [], rh = () => !1;
let ji = 0;
function Ui(e) {
  return (t, n, r, o) => e(n, r, Ju() || void 0, o);
}
function oh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = bi ? G : Sr;
  let s = bt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : de(e.locale) ? e.locale : xa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : de(e.fallbackLocale) || yt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Qu(i.value, e)), f = a(Be(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Be(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let h = t ? t.missingWarn : bt(e.missingWarn) || Oa(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : bt(e.fallbackWarn) || Oa(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : bt(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, L = lt(e.missing) ? e.missing : null, p = lt(e.missing) ? Ui(e.missing) : null, A = lt(e.postTranslation) ? e.postTranslation : null, P = t ? t.warnHtmlMessage : bt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const w = t ? t.modifiers : Be(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || t && t.pluralRules, C;
  C = (() => {
    r && xi(null);
    const E = {
      version: Qm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: w,
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
    const B = Dm(E);
    return r && xi(B), B;
  })(), xo(C, i.value, l.value);
  function X() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      m.value
    ];
  }
  const le = N({
    get: () => i.value,
    set: (E) => {
      C.locale = E, i.value = E;
    }
  }), he = N({
    get: () => l.value,
    set: (E) => {
      C.fallbackLocale = E, l.value = E, xo(C, i.value, E);
    }
  }), se = N(() => u.value), _e = /* @__PURE__ */ N(() => f.value), ye = /* @__PURE__ */ N(() => m.value);
  function V() {
    return lt(A) ? A : null;
  }
  function J(E) {
    A = E, C.postTranslation = E;
  }
  function H() {
    return L;
  }
  function fe(E) {
    E !== null && (p = Ui(E)), L = E, C.missing = p;
  }
  const me = (E, B, Te, Ce, rt, Mt) => {
    X();
    let Qe;
    try {
      r || (C.fallbackContext = t ? Mm() : void 0), Qe = E(C);
    } finally {
      r || (C.fallbackContext = void 0);
    }
    if (Te !== "translate exists" && // for not `te` (e.g `t`)
    Ot(Qe) && Qe === Ka || Te === "translate exists" && !Qe) {
      const [Gn, mr] = B();
      return t && g ? Ce(t) : rt(Gn);
    } else {
      if (Mt(Qe))
        return Qe;
      throw Zo(po.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Re(...E) {
    return me((B) => Reflect.apply(zi, null, [B, ...E]), () => Ms(...E), "translate", (B) => Reflect.apply(B.t, B, [...E]), (B) => B, (B) => de(B));
  }
  function je(...E) {
    const [B, Te, Ce] = E;
    if (Ce && !Ve(Ce))
      throw Zo(po.INVALID_ARGUMENT);
    return Re(B, Te, $t({ resolvedMessage: !0 }, Ce || {}));
  }
  function He(...E) {
    return me((B) => Reflect.apply(Ni, null, [B, ...E]), () => Ps(...E), "datetime format", (B) => Reflect.apply(B.d, B, [...E]), () => Li, (B) => de(B) || yt(B));
  }
  function Q(...E) {
    return me((B) => Reflect.apply($i, null, [B, ...E]), () => $s(...E), "number format", (B) => Reflect.apply(B.n, B, [...E]), () => Li, (B) => de(B) || yt(B));
  }
  function q(E) {
    return E.map((B) => de(B) || Ot(B) || bt(B) ? Bi(String(B)) : B);
  }
  const Ae = {
    normalize: q,
    interpolate: (E) => E,
    type: "vnode"
  };
  function Se(...E) {
    return me((B) => {
      let Te;
      const Ce = B;
      try {
        Ce.processor = Ae, Te = Reflect.apply(zi, null, [Ce, ...E]);
      } finally {
        Ce.processor = null;
      }
      return Te;
    }, () => Ms(...E), "translate", (B) => B[Ds](...E), (B) => [Bi(B)], (B) => yt(B));
  }
  function ue(...E) {
    return me((B) => Reflect.apply($i, null, [B, ...E]), () => $s(...E), "number format", (B) => B[zs](...E), Vi, (B) => de(B) || yt(B));
  }
  function te(...E) {
    return me((B) => Reflect.apply(Ni, null, [B, ...E]), () => Ps(...E), "datetime format", (B) => B[Fs](...E), Vi, (B) => de(B) || yt(B));
  }
  function we(E) {
    x = E, C.pluralRules = x;
  }
  function Xe(E, B) {
    return me(() => {
      if (!E)
        return !1;
      const Te = de(B) ? B : i.value, Ce = kt(Te), rt = C.messageResolver(Ce, E);
      return Fn(rt) || ar(rt) || de(rt);
    }, () => [E], "translate exists", (Te) => Reflect.apply(Te.te, Te, [E, B]), rh, (Te) => bt(Te));
  }
  function wt(E) {
    let B = null;
    const Te = ju(C, l.value, i.value);
    for (let Ce = 0; Ce < Te.length; Ce++) {
      const rt = u.value[Te[Ce]] || {}, Mt = C.messageResolver(rt, E);
      if (Mt != null) {
        B = Mt;
        break;
      }
    }
    return B;
  }
  function ct(E) {
    const B = wt(E);
    return B ?? (t ? t.tm(E) || {} : {});
  }
  function kt(E) {
    return u.value[E] || {};
  }
  function St(E, B) {
    if (o) {
      const Te = { [E]: B };
      for (const Ce in Te)
        _n(Te, Ce) && Xo(Te[Ce]);
      B = Te[E];
    }
    u.value[E] = B, C.messages = u.value;
  }
  function st(E, B) {
    u.value[E] = u.value[E] || {};
    const Te = { [E]: B };
    if (o)
      for (const Ce in Te)
        _n(Te, Ce) && Xo(Te[Ce]);
    B = Te[E], Ea(B, u.value[E]), C.messages = u.value;
  }
  function ut(E) {
    return f.value[E] || {};
  }
  function T(E, B) {
    f.value[E] = B, C.datetimeFormats = f.value, Pi(C, E, B);
  }
  function O(E, B) {
    f.value[E] = $t(f.value[E] || {}, B), C.datetimeFormats = f.value, Pi(C, E, B);
  }
  function j(E) {
    return m.value[E] || {};
  }
  function re(E, B) {
    m.value[E] = B, C.numberFormats = m.value, Mi(C, E, B);
  }
  function Pe(E, B) {
    m.value[E] = $t(m.value[E] || {}, B), C.numberFormats = m.value, Mi(C, E, B);
  }
  ji++, t && bi && (Le(t.locale, (E) => {
    s && (i.value = E, C.locale = E, xo(C, i.value, l.value));
  }), Le(t.fallbackLocale, (E) => {
    s && (l.value = E, C.fallbackLocale = E, xo(C, i.value, l.value));
  }));
  const ve = {
    id: ji,
    locale: le,
    fallbackLocale: he,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(E) {
      s = E, E && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, xo(C, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: se,
    get modifiers() {
      return w;
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
    t: Re,
    getLocaleMessage: kt,
    setLocaleMessage: St,
    mergeLocaleMessage: st,
    getPostTranslationHandler: V,
    setPostTranslationHandler: J,
    getMissingHandler: H,
    setMissingHandler: fe,
    [eh]: we
  };
  return ve.datetimeFormats = _e, ve.numberFormats = ye, ve.rt = je, ve.te = Xe, ve.tm = ct, ve.d = He, ve.n = Q, ve.getDateTimeFormat = ut, ve.setDateTimeFormat = T, ve.mergeDateTimeFormat = O, ve.getNumberFormat = j, ve.setNumberFormat = re, ve.mergeNumberFormat = Pe, ve[Xu] = n, ve[Ds] = Se, ve[Fs] = te, ve[zs] = ue, ve;
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
function ah({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === pt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Ze());
}
function ed() {
  return pt;
}
$t({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ot(e) || !isNaN(e)
  }
}, dl);
function sh(e) {
  return yt(e) && !de(e[0]);
}
function td(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Ze();
    e.locale && (s.locale = e.locale), de(e.format) ? s.key = e.format : Ve(e.format) && (de(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((h, y) => n.includes(y) ? $t(Ze(), h, { [y]: e.format[y] }) : h, Ze()));
    const l = r(e.value, s, i);
    let u = [s.key];
    yt(l) ? u = l.map((h, y) => {
      const g = o[h.type], b = g ? g({ [h.type]: h.value, index: y, parts: l }) : [h.value];
      return sh(b) && (b[0].key = `${h.type}-${y}`), b;
    }) : de(l) && (u = [l]);
    const f = $t(Ze(), a), m = de(e.tag) || Ve(e.tag) ? e.tag : ed();
    return Cu(m, f, u);
  };
}
$t({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, dl);
const lh = /* @__PURE__ */ Ur("global-vue-i18n");
function ra(e = {}) {
  const t = Ju();
  if (t == null)
    throw Zo(po.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Zo(po.NOT_INSTALLED);
  const n = ih(t), r = uh(n), o = th(t), a = ch(e, o);
  if (a === "global")
    return nh(r, e, o), r;
  if (a === "parent") {
    let l = dh(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = $t({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = oh(l), s.__composerExtend && (i[Bs] = s.__composerExtend(i)), ph(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function ih(e) {
  const t = Ke(e.isCE ? lh : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Zo(e.isCE ? po.NOT_INSTALLED_WITH_PROVIDE : po.UNEXPECTED_ERROR);
  return t;
}
function ch(e, t) {
  return Ha(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function uh(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function dh(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = fh(t, n);
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
function fh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ph(e, t, n) {
  _t(() => {
  }, t), Wa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Bs];
    o && (o(), delete r[Bs]);
  }, t);
}
$t({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, dl);
Jm();
Nm(bm);
Pm(Om);
$m(ju);
function fl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Wr = fl();
function nd(e) {
  Wr = e;
}
var jo = { exec: () => null };
function Me(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(qt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var mh = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), qt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, hh = /^(?:[ \t]*(?:\n|$))+/, gh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, vh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, oa = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, bh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, pl = /(?:[*+-]|\d{1,9}[.)])/, rd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, od = Me(rd).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), yh = Me(rd).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ml = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, _h = /^[^\n]+/, hl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, wh = Me(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", hl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), kh = Me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, pl).getRegex(), qa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", gl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Sh = Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", gl).replace("tag", qa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ad = Me(ml).replace("hr", oa).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex(), Th = Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ad).getRegex(), vl = { blockquote: Th, code: gh, def: wh, fences: vh, heading: bh, hr: oa, html: Sh, lheading: od, list: kh, newline: hh, paragraph: ad, table: jo, text: _h }, Wi = Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", oa).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex(), Eh = { ...vl, lheading: yh, table: Wi, paragraph: Me(ml).replace("hr", oa).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Wi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex() }, Ah = { ...vl, html: Me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", gl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: jo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Me(ml).replace("hr", oa).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", od).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ch = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ih = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, sd = /^( {2,}|\\)\n(?!\s*$)/, Lh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ya = /[\p{P}\p{S}]/u, bl = /[\s\p{P}\p{S}]/u, ld = /[^\s\p{P}\p{S}]/u, Oh = Me(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, bl).getRegex(), id = /(?!~)[\p{P}\p{S}]/u, xh = /(?!~)[\s\p{P}\p{S}]/u, Rh = /(?:[^\s\p{P}\p{S}]|~)/u, Nh = Me(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", mh ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), cd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ph = Me(cd, "u").replace(/punct/g, Ya).getRegex(), $h = Me(cd, "u").replace(/punct/g, id).getRegex(), ud = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Mh = Me(ud, "gu").replace(/notPunctSpace/g, ld).replace(/punctSpace/g, bl).replace(/punct/g, Ya).getRegex(), Dh = Me(ud, "gu").replace(/notPunctSpace/g, Rh).replace(/punctSpace/g, xh).replace(/punct/g, id).getRegex(), Fh = Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ld).replace(/punctSpace/g, bl).replace(/punct/g, Ya).getRegex(), zh = Me(/\\(punct)/, "gu").replace(/punct/g, Ya).getRegex(), Bh = Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vh = Me(gl).replace("(?:-->|$)", "-->").getRegex(), jh = Me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ra = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Uh = Me(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ra).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), dd = Me(/^!?\[(label)\]\[(ref)\]/).replace("label", Ra).replace("ref", hl).getRegex(), fd = Me(/^!?\[(ref)\](?:\[\])?/).replace("ref", hl).getRegex(), Wh = Me("reflink|nolink(?!\\()", "g").replace("reflink", dd).replace("nolink", fd).getRegex(), Hi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, yl = { _backpedal: jo, anyPunctuation: zh, autolink: Bh, blockSkip: Nh, br: sd, code: Ih, del: jo, emStrongLDelim: Ph, emStrongRDelimAst: Mh, emStrongRDelimUnd: Fh, escape: Ch, link: Uh, nolink: fd, punctuation: Oh, reflink: dd, reflinkSearch: Wh, tag: jh, text: Lh, url: jo }, Hh = { ...yl, link: Me(/^!?\[(label)\]\((.*?)\)/).replace("label", Ra).getRegex(), reflink: Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ra).getRegex() }, Vs = { ...yl, emStrongRDelimAst: Dh, emStrongLDelim: $h, url: Me(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Hi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Me(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Hi).getRegex() }, Gh = { ...Vs, br: Me(sd).replace("{2,}", "*").getRegex(), text: Me(Vs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ha = { normal: vl, gfm: Eh, pedantic: Ah }, Ro = { normal: yl, gfm: Vs, breaks: Gh, pedantic: Hh }, Kh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Gi = (e) => Kh[e];
function Qn(e, t) {
  if (t) {
    if (qt.escapeTest.test(e)) return e.replace(qt.escapeReplace, Gi);
  } else if (qt.escapeTestNoEncode.test(e)) return e.replace(qt.escapeReplaceNoEncode, Gi);
  return e;
}
function Ki(e) {
  try {
    e = encodeURI(e).replace(qt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function qi(e, t) {
  let n = e.replace(qt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(qt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(qt.slashPipe, "|");
  return r;
}
function No(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function qh(e, t) {
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
function Yh(e, t, n) {
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
    Ye(this, "options");
    Ye(this, "rules");
    Ye(this, "lexer");
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : No(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Yh(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = No(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: No(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = No(t[0], `
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
`, 1)[0], w;
            if (h = I, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), w = h) : w = h.replace(this.rules.other.tabCharGlobal, "    "), p.test(h) || A.test(h) || P.test(h) || b.test(h) || L.test(h)) break;
            if (w.search(this.rules.other.nonSpaceChar) >= g || !h.trim()) f += `
` + w.slice(g);
            else {
              if (y || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || p.test(m) || A.test(m) || L.test(m)) break;
              f += `
` + h;
            }
            !y && !h.trim() && (y = !0), u += I + `
`, e = e.substring(I.length + 1), m = w.slice(g);
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
        let a = No(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = qh(t[2], "()");
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
    Ye(this, "tokens");
    Ye(this, "options");
    Ye(this, "state");
    Ye(this, "inlineQueue");
    Ye(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Wr, this.options.tokenizer = this.options.tokenizer || new Na(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: qt, block: ha.normal, inline: Ro.normal };
    this.options.pedantic ? (n.block = ha.pedantic, n.inline = Ro.pedantic) : this.options.gfm && (n.block = ha.gfm, this.options.breaks ? n.inline = Ro.breaks : n.inline = Ro.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ha, inline: Ro };
  }
  static lex(t, n) {
    return new js(n).lex(t);
  }
  static lexInline(t, n) {
    return new js(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(qt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(qt.tabCharGlobal, "    ").replace(qt.spaceLine, "")); t; ) {
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
    Ye(this, "options");
    Ye(this, "parser");
    this.options = t || Wr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(qt.notSpaceStart)?.[0], a = t.replace(qt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Qn(o) + '">' + (r ? a : Qn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Qn(a, !0)) + `</code></pre>
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
    return `<code>${Qn(t, !0)}</code>`;
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
    return n && (s += ' title="' + Qn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Ki(t);
    if (a === null) return Qn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Qn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Qn(t.text);
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
    Ye(this, "options");
    Ye(this, "renderer");
    Ye(this, "textRenderer");
    this.options = t || Wr, this.options.renderer = this.options.renderer || new Pa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _l();
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
}, Sa, zo = (Sa = class {
  constructor(e) {
    Ye(this, "options");
    Ye(this, "block");
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
    return this.block ? vn.lex : vn.lexInline;
  }
  provideParser() {
    return this.block ? bn.parse : bn.parseInline;
  }
}, Ye(Sa, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ye(Sa, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Sa), Zh = class {
  constructor(...t) {
    Ye(this, "defaults", fl());
    Ye(this, "options", this.setOptions);
    Ye(this, "parse", this.parseMarkdown(!0));
    Ye(this, "parseInline", this.parseMarkdown(!1));
    Ye(this, "Parser", bn);
    Ye(this, "Renderer", Pa);
    Ye(this, "TextRenderer", _l);
    Ye(this, "Lexer", vn);
    Ye(this, "Tokenizer", Na);
    Ye(this, "Hooks", zo);
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
        let a = this.defaults.hooks || new zo();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          zo.passThroughHooks.has(s) ? a[i] = (f) => {
            if (this.defaults.async && zo.passThroughHooksRespectAsync.has(s)) return (async () => {
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
        let o = "<p>An error occurred:</p><pre>" + Qn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Br = new Zh();
function Ge(e, t) {
  return Br.parse(e, t);
}
Ge.options = Ge.setOptions = function(e) {
  return Br.setOptions(e), Ge.defaults = Br.defaults, nd(Ge.defaults), Ge;
};
Ge.getDefaults = fl;
Ge.defaults = Wr;
Ge.use = function(...e) {
  return Br.use(...e), Ge.defaults = Br.defaults, nd(Ge.defaults), Ge;
};
Ge.walkTokens = function(e, t) {
  return Br.walkTokens(e, t);
};
Ge.parseInline = Br.parseInline;
Ge.Parser = bn;
Ge.parser = bn.parse;
Ge.Renderer = Pa;
Ge.TextRenderer = _l;
Ge.Lexer = vn;
Ge.lexer = vn.lex;
Ge.Tokenizer = Na;
Ge.Hooks = zo;
Ge.parse = Ge;
Ge.options;
Ge.setOptions;
Ge.use;
Ge.walkTokens;
Ge.parseInline;
bn.parse;
vn.lex;
function Xh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Lt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Zi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Zi || (Zi = {}));
async function Qh(e, t) {
  await Lt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Jh(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return Lt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Xh(t)
  }).then((a) => async () => Qh(e, a));
}
async function pd() {
  return await Lt("local_ai_get_config");
}
async function Bo(e) {
  return await Lt("local_ai_save_config", { config: e });
}
async function md(e) {
  return await Lt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function eg() {
  return await Lt("local_ai_get_runtime_status");
}
async function hd() {
  return await Lt("local_ai_get_status");
}
async function tg(e) {
  return await Lt("local_ai_start_service", {
    config: e ?? null
  });
}
async function gd() {
  return await Lt("local_ai_restart_service");
}
async function ng() {
  await Lt("local_ai_stop_service");
}
function vd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function rg(e, t, n = {}) {
  const r = n.requestId ?? vd(), o = await Jh(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === r && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await Lt("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function bs(e) {
  return await Lt("local_ai_cancel_chat_stream", { requestId: e });
}
async function bd(e) {
  return await Lt("local_ai_web_search", {
    request: e
  });
}
async function og(e) {
  return await Lt("local_ai_weather", {
    request: e
  });
}
async function ag() {
  return await Lt("local_ai_get_chat_histories");
}
async function sg(e) {
  return await Lt("local_ai_save_chat_history", {
    history: e
  });
}
async function lg(e) {
  return await Lt("local_ai_delete_chat_history", {
    historyId: e
  });
}
const ig = /* @__PURE__ */ new Set([
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
]), cg = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), ug = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), dg = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), fg = 5, pg = 1024 * 1024, mg = 5 * 1024 * 1024, Xi = 4e4, wl = (e) => e.split(".").pop()?.toLowerCase() ?? "", hg = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, ys = (e) => cg.has(e.type) || ug.has(wl(e.name)), Qi = (e) => e.type.startsWith("text/") || ig.has(wl(e.name)), gg = (e) => dg.has(wl(e.name)), vg = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), bg = async (e) => {
  const t = await e.text();
  return t.length <= Xi ? { text: t, truncated: !1 } : {
    text: t.slice(0, Xi),
    truncated: !0
  };
}, yg = (e, t) => {
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
function _g(e) {
  if (Array.isArray(e)) return e;
}
function wg(e, t) {
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
function kg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sg(e, t) {
  return _g(e) || wg(e, t) || Tg(e, t) || kg();
}
function Tg(e, t) {
  if (e) {
    if (typeof e == "string") return Ji(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ji(e, t) : void 0;
  }
}
const yd = Object.entries, ec = Object.setPrototypeOf, Eg = Object.isFrozen, Ag = Object.getPrototypeOf, Cg = Object.getOwnPropertyDescriptor;
let Zt = Object.freeze, un = Object.seal, lo = Object.create, _d = typeof Reflect < "u" && Reflect, Ws = _d.apply, Hs = _d.construct;
Zt || (Zt = function(t) {
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
const to = At(Array.prototype.forEach), Ig = At(Array.prototype.lastIndexOf), tc = At(Array.prototype.pop), no = At(Array.prototype.push), Lg = At(Array.prototype.splice), Ht = Array.isArray, Vo = At(String.prototype.toLowerCase), _s = At(String.prototype.toString), nc = At(String.prototype.match), ro = At(String.prototype.replace), rc = At(String.prototype.indexOf), Og = At(String.prototype.trim), xg = At(Number.prototype.toString), Rg = At(Boolean.prototype.toString), oc = typeof BigInt > "u" ? null : At(BigInt.prototype.toString), ac = typeof Symbol > "u" ? null : At(Symbol.prototype.toString), ft = At(Object.prototype.hasOwnProperty), Po = At(Object.prototype.toString), Nt = At(RegExp.prototype.test), $o = Ng(TypeError);
function At(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Ws(e, t, r);
  };
}
function Ng(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Hs(e, n);
  };
}
function xe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vo;
  if (ec && ec(e, null), !Ht(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Eg(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function Pg(e) {
  for (let t = 0; t < e.length; t++)
    ft(e, t) || (e[t] = null);
  return e;
}
function zt(e) {
  const t = lo(null);
  for (const r of yd(e)) {
    var n = Sg(r, 2);
    const o = n[0], a = n[1];
    ft(e, o) && (Ht(a) ? t[o] = Pg(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = zt(a) : t[o] = a);
  }
  return t;
}
function $g(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return xg(e);
    case "boolean":
      return Rg(e);
    case "bigint":
      return oc ? oc(e) : "0";
    case "symbol":
      return ac ? ac(e) : "Symbol()";
    case "undefined":
      return Po(e);
    case "function":
    case "object": {
      if (e === null)
        return Po(e);
      const t = e, n = Rn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Po(r);
      }
      return Po(e);
    }
    default:
      return Po(e);
  }
}
function Rn(e, t) {
  for (; e !== null; ) {
    const r = Cg(e, t);
    if (r) {
      if (r.get)
        return At(r.get);
      if (typeof r.value == "function")
        return At(r.value);
    }
    e = Ag(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Mg(e) {
  try {
    return Nt(e, ""), !0;
  } catch {
    return !1;
  }
}
const sc = Zt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ws = Zt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ks = Zt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Dg = Zt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ss = Zt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Fg = Zt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), lc = Zt(["#text"]), ic = Zt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ts = Zt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), cc = Zt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ga = Zt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zg = un(/{{[\w\W]*|^[\w\W]*}}/g), Bg = un(/<%[\w\W]*|^[\w\W]*%>/g), Vg = un(/\${[\w\W]*/g), jg = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ug = un(/^aria-[\-\w]+$/), uc = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Wg = un(/^(?:\w+script|data):/i), Hg = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Gg = un(/^html$/i), Kg = un(/^[a-z][.\w]*(-[.\w]+)+$/i), xn = {
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
}, qg = function() {
  return typeof window > "u" ? null : window;
}, Yg = function(t, n) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qg();
  const t = (ie) => wd(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== xn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, m = e.trustedTypes, h = i.prototype, y = Rn(h, "cloneNode"), g = Rn(h, "remove"), b = Rn(h, "nextSibling"), L = Rn(h, "childNodes"), p = Rn(h, "parentNode"), A = Rn(h, "shadowRoot"), P = Rn(h, "attributes"), I = s && s.prototype ? Rn(s.prototype, "nodeType") : null, w = s && s.prototype ? Rn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let x, C = "";
  const Y = n, X = Y.implementation, le = Y.createNodeIterator, he = Y.createDocumentFragment, se = Y.getElementsByTagName, _e = r.importNode;
  let ye = dc();
  t.isSupported = typeof yd == "function" && typeof p == "function" && X && X.createHTMLDocument !== void 0;
  const V = zg, J = Bg, H = Vg, fe = jg, me = Ug, Re = Wg, je = Hg, He = Kg;
  let Q = uc, q = null;
  const De = xe({}, [...sc, ...ws, ...ks, ...Ss, ...lc]);
  let Ae = null;
  const Se = xe({}, [...ic, ...Ts, ...cc, ...ga]);
  let ue = Object.seal(lo(null, {
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
  })), te = null, we = null;
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
  let wt = !0, ct = !0, kt = !1, St = !0, st = !1, ut = !0, T = !1, O = !1, j = !1, re = !1, Pe = !1, ve = !1, E = !0, B = !1;
  const Te = "user-content-";
  let Ce = !0, rt = !1, Mt = {}, Qe = null;
  const Gn = xe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let mr = null;
  const pn = xe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kn = null;
  const Lr = xe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), An = "http://www.w3.org/1998/Math/MathML", mn = "http://www.w3.org/2000/svg", Xt = "http://www.w3.org/1999/xhtml";
  let on = Xt, Or = !1, qn = null;
  const hr = xe({}, [An, mn, Xt], _s);
  let xr = xe({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = xe({}, ["annotation-xml"]);
  const To = xe({}, ["title", "style", "font", "a", "script"]);
  let Yn = null;
  const qr = ["application/xhtml+xml", "text/html"], Eo = "text/html";
  let qe = null, hn = null;
  const Yr = n.createElement("form"), Nr = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Cn = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (hn && hn === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = zt(_), Yn = // eslint-disable-next-line unicorn/prefer-includes
    qr.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Eo : _.PARSER_MEDIA_TYPE, qe = Yn === "application/xhtml+xml" ? _s : Vo, q = ft(_, "ALLOWED_TAGS") && Ht(_.ALLOWED_TAGS) ? xe({}, _.ALLOWED_TAGS, qe) : De, Ae = ft(_, "ALLOWED_ATTR") && Ht(_.ALLOWED_ATTR) ? xe({}, _.ALLOWED_ATTR, qe) : Se, qn = ft(_, "ALLOWED_NAMESPACES") && Ht(_.ALLOWED_NAMESPACES) ? xe({}, _.ALLOWED_NAMESPACES, _s) : hr, Kn = ft(_, "ADD_URI_SAFE_ATTR") && Ht(_.ADD_URI_SAFE_ATTR) ? xe(zt(Lr), _.ADD_URI_SAFE_ATTR, qe) : Lr, mr = ft(_, "ADD_DATA_URI_TAGS") && Ht(_.ADD_DATA_URI_TAGS) ? xe(zt(pn), _.ADD_DATA_URI_TAGS, qe) : pn, Qe = ft(_, "FORBID_CONTENTS") && Ht(_.FORBID_CONTENTS) ? xe({}, _.FORBID_CONTENTS, qe) : Gn, te = ft(_, "FORBID_TAGS") && Ht(_.FORBID_TAGS) ? xe({}, _.FORBID_TAGS, qe) : zt({}), we = ft(_, "FORBID_ATTR") && Ht(_.FORBID_ATTR) ? xe({}, _.FORBID_ATTR, qe) : zt({}), Mt = ft(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? zt(_.USE_PROFILES) : _.USE_PROFILES : !1, wt = _.ALLOW_ARIA_ATTR !== !1, ct = _.ALLOW_DATA_ATTR !== !1, kt = _.ALLOW_UNKNOWN_PROTOCOLS || !1, St = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, st = _.SAFE_FOR_TEMPLATES || !1, ut = _.SAFE_FOR_XML !== !1, T = _.WHOLE_DOCUMENT || !1, re = _.RETURN_DOM || !1, Pe = _.RETURN_DOM_FRAGMENT || !1, ve = _.RETURN_TRUSTED_TYPE || !1, j = _.FORCE_BODY || !1, E = _.SANITIZE_DOM !== !1, B = _.SANITIZE_NAMED_PROPS || !1, Ce = _.KEEP_CONTENT !== !1, rt = _.IN_PLACE || !1, Q = Mg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : uc, on = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Xt, xr = ft(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? zt(_.MATHML_TEXT_INTEGRATION_POINTS) : xe({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = ft(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? zt(_.HTML_INTEGRATION_POINTS) : xe({}, ["annotation-xml"]);
    const W = ft(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? zt(_.CUSTOM_ELEMENT_HANDLING) : lo(null);
    if (ue = lo(null), ft(W, "tagNameCheck") && Nr(W.tagNameCheck) && (ue.tagNameCheck = W.tagNameCheck), ft(W, "attributeNameCheck") && Nr(W.attributeNameCheck) && (ue.attributeNameCheck = W.attributeNameCheck), ft(W, "allowCustomizedBuiltInElements") && typeof W.allowCustomizedBuiltInElements == "boolean" && (ue.allowCustomizedBuiltInElements = W.allowCustomizedBuiltInElements), st && (ct = !1), Pe && (re = !0), Mt && (q = xe({}, lc), Ae = lo(null), Mt.html === !0 && (xe(q, sc), xe(Ae, ic)), Mt.svg === !0 && (xe(q, ws), xe(Ae, Ts), xe(Ae, ga)), Mt.svgFilters === !0 && (xe(q, ks), xe(Ae, Ts), xe(Ae, ga)), Mt.mathMl === !0 && (xe(q, Ss), xe(Ae, cc), xe(Ae, ga))), Xe.tagCheck = null, Xe.attributeCheck = null, ft(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? Xe.tagCheck = _.ADD_TAGS : Ht(_.ADD_TAGS) && (q === De && (q = zt(q)), xe(q, _.ADD_TAGS, qe))), ft(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? Xe.attributeCheck = _.ADD_ATTR : Ht(_.ADD_ATTR) && (Ae === Se && (Ae = zt(Ae)), xe(Ae, _.ADD_ATTR, qe))), ft(_, "ADD_URI_SAFE_ATTR") && Ht(_.ADD_URI_SAFE_ATTR) && xe(Kn, _.ADD_URI_SAFE_ATTR, qe), ft(_, "FORBID_CONTENTS") && Ht(_.FORBID_CONTENTS) && (Qe === Gn && (Qe = zt(Qe)), xe(Qe, _.FORBID_CONTENTS, qe)), ft(_, "ADD_FORBID_CONTENTS") && Ht(_.ADD_FORBID_CONTENTS) && (Qe === Gn && (Qe = zt(Qe)), xe(Qe, _.ADD_FORBID_CONTENTS, qe)), Ce && (q["#text"] = !0), T && xe(q, ["html", "head", "body"]), q.table && (xe(q, ["tbody"]), delete te.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw $o('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw $o('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      x = _.TRUSTED_TYPES_POLICY, C = x.createHTML("");
    } else
      x === void 0 && (x = Yg(m, o)), x !== null && typeof C == "string" && (C = x.createHTML(""));
    (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && q === De && (q = zt(q)), ye.uponSanitizeAttribute.length > 0 && Ae === Se && (Ae = zt(Ae)), Zt && Zt(_), hn = _;
  }, Zr = xe({}, [...ws, ...ks, ...Dg]), Pr = xe({}, [...Ss, ...Fg]), Ao = function(_) {
    let W = p(_);
    (!W || !W.tagName) && (W = {
      namespaceURI: on,
      tagName: "template"
    });
    const ae = Vo(_.tagName), Ne = Vo(W.tagName);
    return qn[_.namespaceURI] ? _.namespaceURI === mn ? W.namespaceURI === Xt ? ae === "svg" : W.namespaceURI === An ? ae === "svg" && (Ne === "annotation-xml" || xr[Ne]) : !!Zr[ae] : _.namespaceURI === An ? W.namespaceURI === Xt ? ae === "math" : W.namespaceURI === mn ? ae === "math" && Rr[Ne] : !!Pr[ae] : _.namespaceURI === Xt ? W.namespaceURI === mn && !Rr[Ne] || W.namespaceURI === An && !xr[Ne] ? !1 : !Pr[ae] && (To[ae] || !Zr[ae]) : !!(Yn === "application/xhtml+xml" && qn[_.namespaceURI]) : !1;
  }, Ut = function(_) {
    no(t.removed, {
      element: _
    });
    try {
      p(_).removeChild(_);
    } catch {
      g(_);
    }
  }, M = function(_, W) {
    try {
      no(t.removed, {
        attribute: W.getAttributeNode(_),
        from: W
      });
    } catch {
      no(t.removed, {
        attribute: null,
        from: W
      });
    }
    if (W.removeAttribute(_), _ === "is")
      if (re || Pe)
        try {
          Ut(W);
        } catch {
        }
      else
        try {
          W.setAttribute(_, "");
        } catch {
        }
  }, ne = function(_) {
    let W = null, ae = null;
    if (j)
      _ = "<remove></remove>" + _;
    else {
      const ze = nc(_, /^[\r\n\t ]+/);
      ae = ze && ze[0];
    }
    Yn === "application/xhtml+xml" && on === Xt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Ne = x ? x.createHTML(_) : _;
    if (on === Xt)
      try {
        W = new f().parseFromString(Ne, Yn);
      } catch {
      }
    if (!W || !W.documentElement) {
      W = X.createDocument(on, "template", null);
      try {
        W.documentElement.innerHTML = Or ? C : Ne;
      } catch {
      }
    }
    const $e = W.body || W.documentElement;
    return _ && ae && $e.insertBefore(n.createTextNode(ae), $e.childNodes[0] || null), on === Xt ? se.call(W, T ? "html" : "body")[0] : T ? W.documentElement : $e;
  }, Ie = function(_) {
    return le.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Fe = function(_) {
    _.normalize();
    const W = le.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ae = W.nextNode();
    for (; ae; ) {
      let Ne = ae.data;
      to([V, J, H], ($e) => {
        Ne = ro(Ne, $e, " ");
      }), ae.data = Ne, ae = W.nextNode();
    }
  }, mt = function(_) {
    const W = w ? w(_) : null;
    return typeof W != "string" || qe(W) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== P(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    _.nodeType !== I(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== L(_);
  }, Qt = function(_) {
    if (!I || typeof _ != "object" || _ === null)
      return !1;
    try {
      return I(_) === xn.documentFragment;
    } catch {
      return !1;
    }
  }, Dt = function(_) {
    if (!I || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof I(_) == "number";
    } catch {
      return !1;
    }
  };
  function Ft(ie, _, W) {
    to(ie, (ae) => {
      ae.call(t, _, W, hn);
    });
  }
  const In = function(_) {
    let W = null;
    if (Ft(ye.beforeSanitizeElements, _, null), mt(_))
      return Ut(_), !0;
    const ae = qe(_.nodeName);
    if (Ft(ye.uponSanitizeElement, _, {
      tagName: ae,
      allowedTags: q
    }), ut && _.hasChildNodes() && !Dt(_.firstElementChild) && Nt(/<[/\w!]/g, _.innerHTML) && Nt(/<[/\w!]/g, _.textContent) || ut && _.namespaceURI === Xt && ae === "style" && Dt(_.firstElementChild) || _.nodeType === xn.progressingInstruction || ut && _.nodeType === xn.comment && Nt(/<[/\w]/g, _.data))
      return Ut(_), !0;
    if (te[ae] || !(Xe.tagCheck instanceof Function && Xe.tagCheck(ae)) && !q[ae]) {
      if (!te[ae] && Co(ae) && (ue.tagNameCheck instanceof RegExp && Nt(ue.tagNameCheck, ae) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(ae)))
        return !1;
      if (Ce && !Qe[ae]) {
        const $e = p(_), ze = L(_);
        if (ze && $e) {
          const Rt = ze.length;
          for (let ln = Rt - 1; ln >= 0; --ln) {
            const Wt = y(ze[ln], !0);
            $e.insertBefore(Wt, b(_));
          }
        }
      }
      return Ut(_), !0;
    }
    return (I ? I(_) : _.nodeType) === xn.element && !Ao(_) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && Nt(/<\/no(script|embed|frames)/i, _.innerHTML) ? (Ut(_), !0) : (st && _.nodeType === xn.text && (W = _.textContent, to([V, J, H], ($e) => {
      W = ro(W, $e, " ");
    }), _.textContent !== W && (no(t.removed, {
      element: _.cloneNode()
    }), _.textContent = W)), Ft(ye.afterSanitizeElements, _, null), !1);
  }, Xr = function(_, W, ae) {
    if (we[W] || E && (W === "id" || W === "name") && (ae in n || ae in Yr))
      return !1;
    const Ne = Ae[W] || Xe.attributeCheck instanceof Function && Xe.attributeCheck(W, _);
    if (!(ct && !we[W] && Nt(fe, W))) {
      if (!(wt && Nt(me, W))) {
        if (!Ne || we[W]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Co(_) && (ue.tagNameCheck instanceof RegExp && Nt(ue.tagNameCheck, _) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(_)) && (ue.attributeNameCheck instanceof RegExp && Nt(ue.attributeNameCheck, W) || ue.attributeNameCheck instanceof Function && ue.attributeNameCheck(W, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            W === "is" && ue.allowCustomizedBuiltInElements && (ue.tagNameCheck instanceof RegExp && Nt(ue.tagNameCheck, ae) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(ae)))
          ) return !1;
        } else if (!Kn[W]) {
          if (!Nt(Q, ro(ae, je, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && _ !== "script" && rc(ae, "data:") === 0 && mr[_])) {
              if (!(kt && !Nt(Re, ro(ae, je, "")))) {
                if (ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, us = xe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Co = function(_) {
    return !us[Vo(_)] && Nt(He, _);
  }, Io = function(_) {
    Ft(ye.beforeSanitizeAttributes, _, null);
    const W = _.attributes;
    if (!W || mt(_))
      return;
    const ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ae,
      forceKeepAttr: void 0
    };
    let Ne = W.length;
    for (; Ne--; ) {
      const $e = W[Ne], ze = $e.name, Rt = $e.namespaceURI, ln = $e.value, Wt = qe(ze), Jr = ln;
      let dt = ze === "value" ? Jr : Og(Jr);
      if (ae.attrName = Wt, ae.attrValue = dt, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Ft(ye.uponSanitizeAttribute, _, ae), dt = ae.attrValue, B && (Wt === "id" || Wt === "name") && rc(dt, Te) !== 0 && (M(ze, _), dt = Te + dt), ut && Nt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        M(ze, _);
        continue;
      }
      if (Wt === "attributename" && nc(dt, "href")) {
        M(ze, _);
        continue;
      }
      if (ae.forceKeepAttr)
        continue;
      if (!ae.keepAttr) {
        M(ze, _);
        continue;
      }
      if (!St && Nt(/\/>/i, dt)) {
        M(ze, _);
        continue;
      }
      st && to([V, J, H], (ua) => {
        dt = ro(dt, ua, " ");
      });
      const Lo = qe(_.nodeName);
      if (!Xr(Lo, Wt, dt)) {
        M(ze, _);
        continue;
      }
      if (x && typeof m == "object" && typeof m.getAttributeType == "function" && !Rt)
        switch (m.getAttributeType(Lo, Wt)) {
          case "TrustedHTML": {
            dt = x.createHTML(dt);
            break;
          }
          case "TrustedScriptURL": {
            dt = x.createScriptURL(dt);
            break;
          }
        }
      if (dt !== Jr)
        try {
          Rt ? _.setAttributeNS(Rt, ze, dt) : _.setAttribute(ze, dt), mt(_) ? Ut(_) : tc(t.removed);
        } catch {
          M(ze, _);
        }
    }
    Ft(ye.afterSanitizeAttributes, _, null);
  }, Qr = function(_) {
    let W = null;
    const ae = Ie(_);
    for (Ft(ye.beforeSanitizeShadowDOM, _, null); W = ae.nextNode(); )
      if (Ft(ye.uponSanitizeShadowNode, W, null), In(W), Io(W), Qt(W.content) && Qr(W.content), (I ? I(W) : W.nodeType) === xn.element) {
        const $e = A ? A(W) : W.shadowRoot;
        Qt($e) && (gr($e), Qr($e));
      }
    Ft(ye.afterSanitizeShadowDOM, _, null);
  }, gr = function(_) {
    const W = I ? I(_) : _.nodeType;
    if (W === xn.element) {
      const $e = A ? A(_) : _.shadowRoot;
      Qt($e) && (gr($e), Qr($e));
    }
    const ae = L ? L(_) : _.childNodes;
    if (!ae)
      return;
    const Ne = [];
    to(ae, ($e) => {
      no(Ne, $e);
    });
    for (const $e of Ne)
      gr($e);
    if (W === xn.element) {
      const $e = w ? w(_) : null;
      if (typeof $e == "string" && qe($e) === "template") {
        const ze = _.content;
        Qt(ze) && gr(ze);
      }
    }
  };
  return t.sanitize = function(ie) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, ae = null, Ne = null, $e = null;
    if (Or = !ie, Or && (ie = "<!-->"), typeof ie != "string" && !Dt(ie) && (ie = $g(ie), typeof ie != "string"))
      throw $o("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (O || Cn(_), t.removed = [], typeof ie == "string" && (rt = !1), rt) {
      const ln = w ? w(ie) : ie.nodeName;
      if (typeof ln == "string") {
        const Wt = qe(ln);
        if (!q[Wt] || te[Wt])
          throw $o("root node is forbidden and cannot be sanitized in-place");
      }
      if (mt(ie))
        throw $o("root node is clobbered and cannot be sanitized in-place");
      gr(ie);
    } else if (Dt(ie))
      W = ne("<!---->"), ae = W.ownerDocument.importNode(ie, !0), ae.nodeType === xn.element && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? W = ae : W.appendChild(ae), gr(ae);
    else {
      if (!re && !st && !T && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return x && ve ? x.createHTML(ie) : ie;
      if (W = ne(ie), !W)
        return re ? null : ve ? C : "";
    }
    W && j && Ut(W.firstChild);
    const ze = Ie(rt ? ie : W);
    for (; Ne = ze.nextNode(); )
      In(Ne), Io(Ne), Qt(Ne.content) && Qr(Ne.content);
    if (rt)
      return st && Fe(ie), ie;
    if (re) {
      if (st && Fe(W), Pe)
        for ($e = he.call(W.ownerDocument); W.firstChild; )
          $e.appendChild(W.firstChild);
      else
        $e = W;
      return (Ae.shadowroot || Ae.shadowrootmode) && ($e = _e.call(r, $e, !0)), $e;
    }
    let Rt = T ? W.outerHTML : W.innerHTML;
    return T && q["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Nt(Gg, W.ownerDocument.doctype.name) && (Rt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + Rt), st && to([V, J, H], (ln) => {
      Rt = ro(Rt, ln, " ");
    }), x && ve ? x.createHTML(Rt) : Rt;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cn(ie), O = !0;
  }, t.clearConfig = function() {
    hn = null, O = !1;
  }, t.isValidAttribute = function(ie, _, W) {
    hn || Cn({});
    const ae = qe(ie), Ne = qe(_);
    return Xr(ae, Ne, W);
  }, t.addHook = function(ie, _) {
    typeof _ == "function" && no(ye[ie], _);
  }, t.removeHook = function(ie, _) {
    if (_ !== void 0) {
      const W = Ig(ye[ie], _);
      return W === -1 ? void 0 : Lg(ye[ie], W, 1)[0];
    }
    return tc(ye[ie]);
  }, t.removeHooks = function(ie) {
    ye[ie] = [];
  }, t.removeAllHooks = function() {
    ye = dc();
  }, t;
}
var Zg = wd();
const Xg = {
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
function Qg(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Zg.sanitize(e, Xg) : "";
}
const kd = Symbol(), Aa = "el", Jg = "is-", Dr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Sd = Symbol("namespaceContextKey"), kl = (e) => {
  const t = e || (Yt() ? Ke(Sd, G(Aa)) : G(Aa));
  return N(() => c(t) || Aa);
}, Ct = (e, t) => {
  const n = kl(t);
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
      return b && p ? `${Jg}${b}` : "";
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
const Qo = () => {
}, ev = Object.prototype.hasOwnProperty, fc = (e, t) => ev.call(e, t), $n = Array.isArray, it = (e) => typeof e == "function", jt = (e) => typeof e == "string", an = (e) => e !== null && typeof e == "object", pc = (e) => (an(e) || it(e)) && it(e.then) && it(e.catch), tv = Object.prototype.toString, nv = (e) => tv.call(e), rv = (e) => nv(e) === "[object Object]";
var Td = typeof global == "object" && global && global.Object === Object && global, ov = typeof self == "object" && self && self.Object === Object && self, Hn = Td || ov || Function("return this")(), jn = Hn.Symbol, Ed = Object.prototype, av = Ed.hasOwnProperty, sv = Ed.toString, Mo = jn ? jn.toStringTag : void 0;
function lv(e) {
  var t = av.call(e, Mo), n = e[Mo];
  try {
    e[Mo] = void 0;
    var r = !0;
  } catch {
  }
  var o = sv.call(e);
  return r && (t ? e[Mo] = n : delete e[Mo]), o;
}
var iv = Object.prototype, cv = iv.toString;
function uv(e) {
  return cv.call(e);
}
var dv = "[object Null]", fv = "[object Undefined]", mc = jn ? jn.toStringTag : void 0;
function So(e) {
  return e == null ? e === void 0 ? fv : dv : mc && mc in Object(e) ? lv(e) : uv(e);
}
function mo(e) {
  return e != null && typeof e == "object";
}
var pv = "[object Symbol]";
function Za(e) {
  return typeof e == "symbol" || mo(e) && So(e) == pv;
}
function mv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tn = Array.isArray, hc = jn ? jn.prototype : void 0, gc = hc ? hc.toString : void 0;
function Ad(e) {
  if (typeof e == "string")
    return e;
  if (Tn(e))
    return mv(e, Ad) + "";
  if (Za(e))
    return gc ? gc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var hv = /\s/;
function gv(e) {
  for (var t = e.length; t-- && hv.test(e.charAt(t)); )
    ;
  return t;
}
var vv = /^\s+/;
function bv(e) {
  return e && e.slice(0, gv(e) + 1).replace(vv, "");
}
function Er(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var vc = NaN, yv = /^[-+]0x[0-9a-f]+$/i, _v = /^0b[01]+$/i, wv = /^0o[0-7]+$/i, kv = parseInt;
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
  e = bv(e);
  var n = _v.test(e);
  return n || wv.test(e) ? kv(e.slice(2), n ? 2 : 8) : yv.test(e) ? vc : +e;
}
function Cd(e) {
  return e;
}
var Sv = "[object AsyncFunction]", Tv = "[object Function]", Ev = "[object GeneratorFunction]", Av = "[object Proxy]";
function Id(e) {
  if (!Er(e))
    return !1;
  var t = So(e);
  return t == Tv || t == Ev || t == Sv || t == Av;
}
var Es = Hn["__core-js_shared__"], yc = function() {
  var e = /[^.]+$/.exec(Es && Es.keys && Es.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Cv(e) {
  return !!yc && yc in e;
}
var Iv = Function.prototype, Lv = Iv.toString;
function Hr(e) {
  if (e != null) {
    try {
      return Lv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ov = /[\\^$.*+?()[\]{}|]/g, xv = /^\[object .+?Constructor\]$/, Rv = Function.prototype, Nv = Object.prototype, Pv = Rv.toString, $v = Nv.hasOwnProperty, Mv = RegExp(
  "^" + Pv.call($v).replace(Ov, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Dv(e) {
  if (!Er(e) || Cv(e))
    return !1;
  var t = Id(e) ? Mv : xv;
  return t.test(Hr(e));
}
function Fv(e, t) {
  return e?.[t];
}
function Gr(e, t) {
  var n = Fv(e, t);
  return Dv(n) ? n : void 0;
}
var Gs = Gr(Hn, "WeakMap");
function zv(e, t, n) {
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
var Bv = 800, Vv = 16, jv = Date.now;
function Uv(e) {
  var t = 0, n = 0;
  return function() {
    var r = jv(), o = Vv - (r - n);
    if (n = r, o > 0) {
      if (++t >= Bv)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Wv(e) {
  return function() {
    return e;
  };
}
var $a = function() {
  try {
    var e = Gr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Hv = $a ? function(e, t) {
  return $a(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Wv(t),
    writable: !0
  });
} : Cd, Gv = Uv(Hv);
function Kv(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var qv = 9007199254740991, Yv = /^(?:0|[1-9]\d*)$/;
function Sl(e, t) {
  var n = typeof e;
  return t = t ?? qv, !!t && (n == "number" || n != "symbol" && Yv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Zv(e, t, n) {
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
var Xv = Object.prototype, Qv = Xv.hasOwnProperty;
function Jv(e, t, n) {
  var r = e[t];
  (!(Qv.call(e, t) && Tl(r, n)) || n === void 0 && !(t in e)) && Zv(e, t, n);
}
var _c = Math.max;
function eb(e, t, n) {
  return t = _c(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = _c(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), zv(e, this, i);
  };
}
var tb = 9007199254740991;
function El(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tb;
}
function nb(e) {
  return e != null && El(e.length) && !Id(e);
}
var rb = Object.prototype;
function ob(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || rb;
  return e === n;
}
function ab(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var sb = "[object Arguments]";
function wc(e) {
  return mo(e) && So(e) == sb;
}
var Ld = Object.prototype, lb = Ld.hasOwnProperty, ib = Ld.propertyIsEnumerable, Al = wc(/* @__PURE__ */ function() {
  return arguments;
}()) ? wc : function(e) {
  return mo(e) && lb.call(e, "callee") && !ib.call(e, "callee");
};
function cb() {
  return !1;
}
var Od = typeof exports == "object" && exports && !exports.nodeType && exports, kc = Od && typeof module == "object" && module && !module.nodeType && module, ub = kc && kc.exports === Od, Sc = ub ? Hn.Buffer : void 0, db = Sc ? Sc.isBuffer : void 0, Ks = db || cb, fb = "[object Arguments]", pb = "[object Array]", mb = "[object Boolean]", hb = "[object Date]", gb = "[object Error]", vb = "[object Function]", bb = "[object Map]", yb = "[object Number]", _b = "[object Object]", wb = "[object RegExp]", kb = "[object Set]", Sb = "[object String]", Tb = "[object WeakMap]", Eb = "[object ArrayBuffer]", Ab = "[object DataView]", Cb = "[object Float32Array]", Ib = "[object Float64Array]", Lb = "[object Int8Array]", Ob = "[object Int16Array]", xb = "[object Int32Array]", Rb = "[object Uint8Array]", Nb = "[object Uint8ClampedArray]", Pb = "[object Uint16Array]", $b = "[object Uint32Array]", et = {};
et[Cb] = et[Ib] = et[Lb] = et[Ob] = et[xb] = et[Rb] = et[Nb] = et[Pb] = et[$b] = !0;
et[fb] = et[pb] = et[Eb] = et[mb] = et[Ab] = et[hb] = et[gb] = et[vb] = et[bb] = et[yb] = et[_b] = et[wb] = et[kb] = et[Sb] = et[Tb] = !1;
function Mb(e) {
  return mo(e) && El(e.length) && !!et[So(e)];
}
function Db(e) {
  return function(t) {
    return e(t);
  };
}
var xd = typeof exports == "object" && exports && !exports.nodeType && exports, Uo = xd && typeof module == "object" && module && !module.nodeType && module, Fb = Uo && Uo.exports === xd, As = Fb && Td.process, Tc = function() {
  try {
    var e = Uo && Uo.require && Uo.require("util").types;
    return e || As && As.binding && As.binding("util");
  } catch {
  }
}(), Ec = Tc && Tc.isTypedArray, Rd = Ec ? Db(Ec) : Mb, zb = Object.prototype, Bb = zb.hasOwnProperty;
function Vb(e, t) {
  var n = Tn(e), r = !n && Al(e), o = !n && !r && Ks(e), a = !n && !r && !o && Rd(e), s = n || r || o || a, i = s ? ab(e.length, String) : [], l = i.length;
  for (var u in e)
    Bb.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Sl(u, l))) && i.push(u);
  return i;
}
function jb(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ub = jb(Object.keys, Object), Wb = Object.prototype, Hb = Wb.hasOwnProperty;
function Gb(e) {
  if (!ob(e))
    return Ub(e);
  var t = [];
  for (var n in Object(e))
    Hb.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Nd(e) {
  return nb(e) ? Vb(e) : Gb(e);
}
var Kb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qb = /^\w*$/;
function Cl(e, t) {
  if (Tn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Za(e) ? !0 : qb.test(e) || !Kb.test(e) || t != null && e in Object(t);
}
var Jo = Gr(Object, "create");
function Yb() {
  this.__data__ = Jo ? Jo(null) : {}, this.size = 0;
}
function Zb(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Xb = "__lodash_hash_undefined__", Qb = Object.prototype, Jb = Qb.hasOwnProperty;
function e0(e) {
  var t = this.__data__;
  if (Jo) {
    var n = t[e];
    return n === Xb ? void 0 : n;
  }
  return Jb.call(t, e) ? t[e] : void 0;
}
var t0 = Object.prototype, n0 = t0.hasOwnProperty;
function r0(e) {
  var t = this.__data__;
  return Jo ? t[e] !== void 0 : n0.call(t, e);
}
var o0 = "__lodash_hash_undefined__";
function a0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Jo && t === void 0 ? o0 : t, this;
}
function Vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vr.prototype.clear = Yb;
Vr.prototype.delete = Zb;
Vr.prototype.get = e0;
Vr.prototype.has = r0;
Vr.prototype.set = a0;
function s0() {
  this.__data__ = [], this.size = 0;
}
function Xa(e, t) {
  for (var n = e.length; n--; )
    if (Tl(e[n][0], t))
      return n;
  return -1;
}
var l0 = Array.prototype, i0 = l0.splice;
function c0(e) {
  var t = this.__data__, n = Xa(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : i0.call(t, n, 1), --this.size, !0;
}
function u0(e) {
  var t = this.__data__, n = Xa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function d0(e) {
  return Xa(this.__data__, e) > -1;
}
function f0(e, t) {
  var n = this.__data__, r = Xa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function fr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fr.prototype.clear = s0;
fr.prototype.delete = c0;
fr.prototype.get = u0;
fr.prototype.has = d0;
fr.prototype.set = f0;
var ea = Gr(Hn, "Map");
function p0() {
  this.size = 0, this.__data__ = {
    hash: new Vr(),
    map: new (ea || fr)(),
    string: new Vr()
  };
}
function m0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qa(e, t) {
  var n = e.__data__;
  return m0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function h0(e) {
  var t = Qa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function g0(e) {
  return Qa(this, e).get(e);
}
function v0(e) {
  return Qa(this, e).has(e);
}
function b0(e, t) {
  var n = Qa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function pr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pr.prototype.clear = p0;
pr.prototype.delete = h0;
pr.prototype.get = g0;
pr.prototype.has = v0;
pr.prototype.set = b0;
var y0 = "Expected a function";
function Il(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(y0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Il.Cache || pr)(), n;
}
Il.Cache = pr;
var _0 = 500;
function w0(e) {
  var t = Il(e, function(r) {
    return n.size === _0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var k0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, S0 = /\\(\\)?/g, T0 = w0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(k0, function(n, r, o, a) {
    t.push(o ? a.replace(S0, "$1") : r || n);
  }), t;
});
function E0(e) {
  return e == null ? "" : Ad(e);
}
function Ja(e, t) {
  return Tn(e) ? e : Cl(e, t) ? [e] : T0(E0(e));
}
function aa(e) {
  if (typeof e == "string" || Za(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ll(e, t) {
  t = Ja(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[aa(t[n++])];
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
var Ac = jn ? jn.isConcatSpreadable : void 0;
function A0(e) {
  return Tn(e) || Al(e) || !!(Ac && e && e[Ac]);
}
function C0(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = A0), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Pd(o, i) : o[o.length] = i;
  }
  return o;
}
function I0(e) {
  var t = e == null ? 0 : e.length;
  return t ? C0(e) : [];
}
function L0(e) {
  return Gv(eb(e, void 0, I0), e + "");
}
function wr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Tn(e) ? e : [e];
}
function O0() {
  this.__data__ = new fr(), this.size = 0;
}
function x0(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function R0(e) {
  return this.__data__.get(e);
}
function N0(e) {
  return this.__data__.has(e);
}
var P0 = 200;
function $0(e, t) {
  var n = this.__data__;
  if (n instanceof fr) {
    var r = n.__data__;
    if (!ea || r.length < P0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new pr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function sr(e) {
  var t = this.__data__ = new fr(e);
  this.size = t.size;
}
sr.prototype.clear = O0;
sr.prototype.delete = x0;
sr.prototype.get = R0;
sr.prototype.has = N0;
sr.prototype.set = $0;
function M0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function D0() {
  return [];
}
var F0 = Object.prototype, z0 = F0.propertyIsEnumerable, Cc = Object.getOwnPropertySymbols, B0 = Cc ? function(e) {
  return e == null ? [] : (e = Object(e), M0(Cc(e), function(t) {
    return z0.call(e, t);
  }));
} : D0;
function V0(e, t, n) {
  var r = t(e);
  return Tn(e) ? r : Pd(r, n(e));
}
function Ic(e) {
  return V0(e, Nd, B0);
}
var qs = Gr(Hn, "DataView"), Ys = Gr(Hn, "Promise"), Zs = Gr(Hn, "Set"), Lc = "[object Map]", j0 = "[object Object]", Oc = "[object Promise]", xc = "[object Set]", Rc = "[object WeakMap]", Nc = "[object DataView]", U0 = Hr(qs), W0 = Hr(ea), H0 = Hr(Ys), G0 = Hr(Zs), K0 = Hr(Gs), _r = So;
(qs && _r(new qs(new ArrayBuffer(1))) != Nc || ea && _r(new ea()) != Lc || Ys && _r(Ys.resolve()) != Oc || Zs && _r(new Zs()) != xc || Gs && _r(new Gs()) != Rc) && (_r = function(e) {
  var t = So(e), n = t == j0 ? e.constructor : void 0, r = n ? Hr(n) : "";
  if (r)
    switch (r) {
      case U0:
        return Nc;
      case W0:
        return Lc;
      case H0:
        return Oc;
      case G0:
        return xc;
      case K0:
        return Rc;
    }
  return t;
});
var Pc = Hn.Uint8Array, q0 = "__lodash_hash_undefined__";
function Y0(e) {
  return this.__data__.set(e, q0), this;
}
function Z0(e) {
  return this.__data__.has(e);
}
function Ma(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new pr(); ++t < n; )
    this.add(e[t]);
}
Ma.prototype.add = Ma.prototype.push = Y0;
Ma.prototype.has = Z0;
function X0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Q0(e, t) {
  return e.has(t);
}
var J0 = 1, ey = 2;
function $d(e, t, n, r, o, a) {
  var s = n & J0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var m = -1, h = !0, y = n & ey ? new Ma() : void 0;
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
      if (!X0(t, function(p, A) {
        if (!Q0(y, A) && (g === p || o(g, p, n, r, a)))
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
function ty(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function ny(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ry = 1, oy = 2, ay = "[object Boolean]", sy = "[object Date]", ly = "[object Error]", iy = "[object Map]", cy = "[object Number]", uy = "[object RegExp]", dy = "[object Set]", fy = "[object String]", py = "[object Symbol]", my = "[object ArrayBuffer]", hy = "[object DataView]", $c = jn ? jn.prototype : void 0, Cs = $c ? $c.valueOf : void 0;
function gy(e, t, n, r, o, a, s) {
  switch (n) {
    case hy:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case my:
      return !(e.byteLength != t.byteLength || !a(new Pc(e), new Pc(t)));
    case ay:
    case sy:
    case cy:
      return Tl(+e, +t);
    case ly:
      return e.name == t.name && e.message == t.message;
    case uy:
    case fy:
      return e == t + "";
    case iy:
      var i = ty;
    case dy:
      var l = r & ry;
      if (i || (i = ny), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= oy, s.set(e, t);
      var f = $d(i(e), i(t), r, o, a, s);
      return s.delete(e), f;
    case py:
      if (Cs)
        return Cs.call(e) == Cs.call(t);
  }
  return !1;
}
var vy = 1, by = Object.prototype, yy = by.hasOwnProperty;
function _y(e, t, n, r, o, a) {
  var s = n & vy, i = Ic(e), l = i.length, u = Ic(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var m = l; m--; ) {
    var h = i[m];
    if (!(s ? h in t : yy.call(t, h)))
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
    var I = e.constructor, w = t.constructor;
    I != w && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof w == "function" && w instanceof w) && (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var wy = 1, Mc = "[object Arguments]", Dc = "[object Array]", va = "[object Object]", ky = Object.prototype, Fc = ky.hasOwnProperty;
function Sy(e, t, n, r, o, a) {
  var s = Tn(e), i = Tn(t), l = s ? Dc : _r(e), u = i ? Dc : _r(t);
  l = l == Mc ? va : l, u = u == Mc ? va : u;
  var f = l == va, m = u == va, h = l == u;
  if (h && Ks(e)) {
    if (!Ks(t))
      return !1;
    s = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new sr()), s || Rd(e) ? $d(e, t, n, r, o, a) : gy(e, t, l, n, r, o, a);
  if (!(n & wy)) {
    var y = f && Fc.call(e, "__wrapped__"), g = m && Fc.call(t, "__wrapped__");
    if (y || g) {
      var b = y ? e.value() : e, L = g ? t.value() : t;
      return a || (a = new sr()), o(b, L, n, r, a);
    }
  }
  return h ? (a || (a = new sr()), _y(e, t, n, r, o, a)) : !1;
}
function es(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !mo(e) && !mo(t) ? e !== e && t !== t : Sy(e, t, n, r, es, o);
}
var Ty = 1, Ey = 2;
function Ay(e, t, n, r) {
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
      var f = new sr(), m;
      if (!(m === void 0 ? es(u, l, Ty | Ey, r, f) : m))
        return !1;
    }
  }
  return !0;
}
function Md(e) {
  return e === e && !Er(e);
}
function Cy(e) {
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
function Iy(e) {
  var t = Cy(e);
  return t.length == 1 && t[0][2] ? Dd(t[0][0], t[0][1]) : function(n) {
    return n === e || Ay(n, e, t);
  };
}
function Ly(e, t) {
  return e != null && t in Object(e);
}
function Oy(e, t, n) {
  t = Ja(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = aa(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && El(o) && Sl(s, o) && (Tn(e) || Al(e)));
}
function Fd(e, t) {
  return e != null && Oy(e, t, Ly);
}
var xy = 1, Ry = 2;
function Ny(e, t) {
  return Cl(e) && Md(t) ? Dd(aa(e), t) : function(n) {
    var r = kr(n, e);
    return r === void 0 && r === t ? Fd(n, e) : es(t, r, xy | Ry);
  };
}
function Py(e) {
  return function(t) {
    return t?.[e];
  };
}
function $y(e) {
  return function(t) {
    return Ll(t, e);
  };
}
function My(e) {
  return Cl(e) ? Py(aa(e)) : $y(e);
}
function Dy(e) {
  return typeof e == "function" ? e : e == null ? Cd : typeof e == "object" ? Tn(e) ? Ny(e[0], e[1]) : Iy(e) : My(e);
}
var Is = function() {
  return Hn.Date.now();
}, Fy = "Expected a function", zy = Math.max, By = Math.min;
function Vy(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Fy);
  t = bc(t) || 0, Er(n) && (f = !!n.leading, m = "maxWait" in n, a = m ? zy(bc(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function y(x) {
    var C = r, Y = o;
    return r = o = void 0, u = x, s = e.apply(Y, C), s;
  }
  function g(x) {
    return u = x, i = setTimeout(p, t), f ? y(x) : s;
  }
  function b(x) {
    var C = x - l, Y = x - u, X = t - C;
    return m ? By(X, a - Y) : X;
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
  function w() {
    var x = Is(), C = L(x);
    if (r = arguments, o = this, l = x, C) {
      if (i === void 0)
        return g(l);
      if (m)
        return clearTimeout(i), i = setTimeout(p, t), y(l);
    }
    return i === void 0 && (i = setTimeout(p, t)), s;
  }
  return w.cancel = P, w.flush = I, w;
}
function jy(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Kv(e, Dy(t), o);
}
function Da(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Wo(e, t) {
  return es(e, t);
}
function lr(e) {
  return e == null;
}
function Uy(e) {
  return e === void 0;
}
function Wy(e, t, n, r) {
  if (!Er(e))
    return e;
  t = Ja(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = aa(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = Er(f) ? f : Sl(t[o + 1]) ? [] : {});
    }
    Jv(i, l, u), i = i[l];
  }
  return e;
}
function Hy(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = Ll(e, s);
    n(i, s) && Wy(a, Ja(s, e), i);
  }
  return a;
}
function Gy(e, t) {
  return Hy(e, t, function(n, r) {
    return Fd(e, r);
  });
}
var Ky = L0(function(e, t) {
  return e == null ? {} : Gy(e, t);
});
const Mn = (e) => e === void 0, Tr = (e) => typeof e == "boolean", We = (e) => typeof e == "number", kn = (e) => typeof Element > "u" ? !1 : e instanceof Element, qy = (e) => jt(e) ? !Number.isNaN(Number(e)) : !1;
var Yy = Object.defineProperty, Zy = Object.defineProperties, Xy = Object.getOwnPropertyDescriptors, zc = Object.getOwnPropertySymbols, Qy = Object.prototype.hasOwnProperty, Jy = Object.prototype.propertyIsEnumerable, Bc = (e, t, n) => t in e ? Yy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, e1 = (e, t) => {
  for (var n in t || (t = {}))
    Qy.call(t, n) && Bc(e, n, t[n]);
  if (zc)
    for (var n of zc(t))
      Jy.call(t, n) && Bc(e, n, t[n]);
  return e;
}, t1 = (e, t) => Zy(e, Xy(t));
function n1(e, t) {
  var n;
  const r = Sr();
  return Lu(() => {
    r.value = e();
  }, t1(e1({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), rl(r);
}
var Vc;
const Et = typeof window < "u", r1 = (e) => typeof e == "string", zd = () => {
}, Xs = Et && ((Vc = window?.navigator) == null ? void 0 : Vc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ol(e) {
  return typeof e == "function" ? e() : c(e);
}
function o1(e) {
  return e;
}
function sa(e) {
  return op() ? (ap(e), !0) : !1;
}
function a1(e, t = !0) {
  Yt() ? _t(e) : t ? e() : vt(e);
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
  return r && (o.value = !0, Et && l()), sa(i), {
    isPending: rl(o),
    start: l,
    stop: i
  };
}
function or(e) {
  var t;
  const n = Ol(e);
  return (t = n?.$el) != null ? t : n;
}
const ts = Et ? window : void 0;
function Sn(...e) {
  let t, n, r, o;
  if (r1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = ts) : [t, n, r, o] = e, !t)
    return zd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, m, h, y) => (f.addEventListener(m, h, y), () => f.removeEventListener(m, h, y)), l = Le(() => [or(t), Ol(o)], ([f, m]) => {
    s(), f && a.push(...n.flatMap((h) => r.map((y) => i(f, h, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return sa(u), u;
}
let jc = !1;
function s1(e, t, n = {}) {
  const { window: r = ts, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Xs && !jc && (jc = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", zd)));
  let i = !0;
  const l = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === h.target || h.composedPath().includes(g));
    {
      const g = or(y);
      return g && (h.target === g || h.composedPath().includes(g));
    }
  }), f = [
    Sn(r, "click", (h) => {
      const y = or(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !l(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: a }),
    Sn(r, "pointerdown", (h) => {
      const y = or(e);
      y && (i = !h.composedPath().includes(y) && !l(h));
    }, { passive: !0 }),
    s && Sn(r, "blur", (h) => {
      var y;
      const g = or(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
function Vd(e, t = !1) {
  const n = G(), r = () => n.value = !!e();
  return r(), a1(r, t), n;
}
const Uc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wc = "__vueuse_ssr_handlers__";
Uc[Wc] = Uc[Wc] || {};
var Hc = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, c1 = (e, t) => {
  var n = {};
  for (var r in e)
    l1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Hc)
    for (var r of Hc(e))
      t.indexOf(r) < 0 && i1.call(e, r) && (n[r] = e[r]);
  return n;
};
function Pn(e, t, n = {}) {
  const r = n, { window: o = ts } = r, a = c1(r, ["window"]);
  let s;
  const i = Vd(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Le(() => or(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return sa(f), {
    isSupported: i,
    stop: f
  };
}
var Gc = Object.getOwnPropertySymbols, u1 = Object.prototype.hasOwnProperty, d1 = Object.prototype.propertyIsEnumerable, f1 = (e, t) => {
  var n = {};
  for (var r in e)
    u1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Gc)
    for (var r of Gc(e))
      t.indexOf(r) < 0 && d1.call(e, r) && (n[r] = e[r]);
  return n;
};
function p1(e, t, n = {}) {
  const r = n, { window: o = ts } = r, a = f1(r, ["window"]);
  let s;
  const i = Vd(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Le(() => or(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return sa(f), {
    isSupported: i,
    stop: f
  };
}
var Kc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Kc || (Kc = {}));
var m1 = Object.defineProperty, qc = Object.getOwnPropertySymbols, h1 = Object.prototype.hasOwnProperty, g1 = Object.prototype.propertyIsEnumerable, Yc = (e, t, n) => t in e ? m1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, v1 = (e, t) => {
  for (var n in t || (t = {}))
    h1.call(t, n) && Yc(e, n, t[n]);
  if (qc)
    for (var n of qc(t))
      g1.call(t, n) && Yc(e, n, t[n]);
  return e;
};
const b1 = {
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
v1({
  linear: o1
}, b1);
class y1 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function xl(e, t) {
  throw new y1(`[${e}] ${t}`);
}
const Zc = {
  current: 0
}, Xc = G(0), jd = 2e3, Qc = Symbol("elZIndexContextKey"), Ud = Symbol("zIndexContextKey"), Wd = (e) => {
  const t = Yt() ? Ke(Qc, Zc) : Zc, n = e || (Yt() ? Ke(Ud, void 0) : void 0), r = N(() => {
    const s = c(n);
    return We(s) ? s : jd;
  }), o = N(() => r.value + Xc.value), a = () => (t.current++, Xc.value = t.current, o.value);
  return !Et && Ke(Qc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var _1 = {
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
const w1 = (e) => (t, n) => k1(t, n, c(e)), k1 = (e, t, n) => kr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), S1 = (e) => {
  const t = N(() => c(e).name), n = co(e) ? e : G(e);
  return {
    lang: t,
    locale: n,
    t: w1(e)
  };
}, Hd = Symbol("localeContextKey"), Rl = (e) => {
  const t = e || Ke(Hd, G());
  return S1(N(() => t.value || _1));
}, Gd = "__epPropKey", ke = (e) => e, T1 = (e) => an(e) && !!e[Gd], ns = (e, t) => {
  if (!an(e) || T1(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, m = [];
      if (n && (m = Array.from(n), fc(e, "default") && m.push(o), f || (f = m.includes(u))), s && (f || (f = s(u))), !f && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        sp(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Gd]: !0
  };
  return fc(e, "default") && (l.default = o), l;
}, nt = (e) => Da(Object.entries(e).map(([t, n]) => [
  t,
  ns(n, t)
])), Nl = ["", "default", "small", "large"], rs = ns({
  type: String,
  values: Nl,
  required: !1
}), Kd = Symbol("size"), E1 = () => {
  const e = Ke(Kd, {});
  return N(() => c(e.size) || "");
}, qd = Symbol("emptyValuesContextKey"), A1 = ["", void 0, null], C1 = void 0, Yd = nt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => it(e) ? !e() : !e
  }
}), I1 = (e, t) => {
  const n = Yt() ? Ke(qd, G({})) : G({}), r = N(() => e.emptyValues || n.value.emptyValues || A1), o = N(() => it(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : it(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : C1), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Jc = (e) => Object.keys(e), Fa = G();
function Zd(e, t = void 0) {
  return Yt() ? Ke(kd, Fa) : Fa;
}
function Xd(e, t) {
  const n = Zd(), r = Ct(e, N(() => {
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
  const o = !!Yt(), a = o ? Zd() : void 0, s = (r = void 0) != null ? r : o ? Vn : void 0;
  if (!s)
    return;
  const i = N(() => {
    const l = c(e);
    return a?.value ? L1(a.value, l) : l;
  });
  return s(kd, i), s(Hd, N(() => i.value.locale)), s(Sd, N(() => i.value.namespace)), s(Ud, N(() => i.value.zIndex)), s(Kd, {
    size: N(() => i.value.size || "")
  }), s(qd, N(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Fa.value) && (Fa.value = i.value), i;
}, L1 = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Jc(e), ...Jc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, xt = "update:modelValue", ur = "change", ir = "input";
var at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function ho(e, t = "px") {
  if (!e)
    return "";
  if (We(e) || qy(e))
    return `${e}${t}`;
  if (jt(e))
    return e;
}
function O1(e, t) {
  if (!Et)
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
}, e), ef = (e) => (e.install = Qo, e), x1 = nt({
  size: {
    type: ke([Number, String])
  },
  color: {
    type: String
  }
}), R1 = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), N1 = /* @__PURE__ */ ce({
  ...R1,
  props: x1,
  setup(e) {
    const t = e, n = Ct("icon"), r = N(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Mn(o) ? void 0 : ho(o),
        "--color": a
      };
    });
    return (o, a) => (R(), U("i", uo({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Ee(o.$slots, "default")
    ], 16));
  }
});
var P1 = /* @__PURE__ */ at(N1, [["__file", "icon.vue"]]);
const Tt = En(P1);
/*! Element Plus Icons Vue v2.3.1 */
var $1 = /* @__PURE__ */ ce({
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
}), tf = $1, M1 = /* @__PURE__ */ ce({
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
}), D1 = M1, F1 = /* @__PURE__ */ ce({
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
}), z1 = F1, B1 = /* @__PURE__ */ ce({
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
}), V1 = B1, j1 = /* @__PURE__ */ ce({
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
}), Pl = j1, U1 = /* @__PURE__ */ ce({
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
}), za = U1, W1 = /* @__PURE__ */ ce({
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
}), H1 = W1, G1 = /* @__PURE__ */ ce({
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
}), K1 = G1, q1 = /* @__PURE__ */ ce({
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
}), nf = q1, Y1 = /* @__PURE__ */ ce({
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
}), Z1 = Y1, X1 = /* @__PURE__ */ ce({
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
}), Q1 = X1, J1 = /* @__PURE__ */ ce({
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
}), e_ = J1, t_ = /* @__PURE__ */ ce({
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
}), n_ = t_, r_ = /* @__PURE__ */ ce({
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
}), o_ = r_;
const Dn = ke([
  String,
  Object,
  Function
]), a_ = {
  Close: za
}, s_ = {
  Close: za
}, Ba = {
  success: e_,
  warning: o_,
  error: V1,
  info: K1
}, rf = {
  validating: nf,
  success: z1,
  error: Pl
}, of = () => Et && /firefox/i.test(window.navigator.userAgent);
let Jt;
const l_ = {
  height: "0",
  visibility: "hidden",
  overflow: of() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, i_ = [
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
function c_(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: i_.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function eu(e, t = 1, n) {
  var r;
  Jt || (Jt = document.createElement("textarea"), document.body.appendChild(Jt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = c_(e);
  i.forEach(([m, h]) => Jt?.style.setProperty(m, h)), Object.entries(l_).forEach(([m, h]) => Jt?.style.setProperty(m, h, "important")), Jt.value = e.value || e.placeholder || "";
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
const af = (e) => e, u_ = nt({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Kr = (e) => Ky(u_, e), d_ = nt({
  id: {
    type: String,
    default: void 0
  },
  size: rs,
  disabled: Boolean,
  modelValue: {
    type: ke([
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
    type: ke([Boolean, Object]),
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
    type: Dn
  },
  prefixIcon: {
    type: Dn
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
    type: ke([Object, Array, String]),
    default: () => af({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Kr(["ariaLabel"])
}), f_ = {
  [xt]: (e) => jt(e),
  input: (e) => jt(e),
  change: (e) => jt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, p_ = ["class", "style"], m_ = /^on[A-Z]/, h_ = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = N(() => (n?.value || []).concat(p_)), o = Yt();
  return o ? N(() => {
    var a;
    return Da(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && m_.test(s))));
  }) : N(() => ({}));
}, $l = Symbol("formContextKey"), Va = Symbol("formItemContextKey"), tu = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, g_ = Symbol("elIdInjection"), sf = () => Yt() ? Ke(g_, tu) : tu, os = (e) => {
  const t = sf(), n = kl();
  return n1(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, as = () => {
  const e = Ke($l, void 0), t = Ke(Va, void 0);
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
    a = Le([tr(e, "id"), n], ([i, l]) => {
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
  const t = Yt();
  return N(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, la = (e, t = {}) => {
  const n = G(void 0), r = t.prop ? n : lf("size"), o = t.global ? n : E1(), a = t.form ? { size: void 0 } : Ke($l, void 0), s = t.formItem ? { size: void 0 } : Ke(Va, void 0);
  return N(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, Dl = (e) => {
  const t = lf("disabled"), n = Ke($l, void 0);
  return N(() => t.value || c(e) || n?.disabled || !1);
};
function cf(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Yt(), { emit: s } = a, i = Sr(), l = G(!1), u = (h) => {
    it(t) && t(h) || l.value || (l.value = !0, s("focus", h), n?.());
  }, f = (h) => {
    var y;
    it(r) && r(h) || h.relatedTarget && ((y = i.value) != null && y.contains(h.relatedTarget)) || (l.value = !1, s("blur", h), o?.());
  }, m = () => {
    var h, y;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Le(i, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), Sn(i, "focus", u, !0), Sn(i, "blur", f, !0), Sn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const v_ = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
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
    n.value = !v_(f);
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
function b_(e) {
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
const y_ = "ElInput", __ = ce({
  name: y_,
  inheritAttrs: !1
}), w_ = /* @__PURE__ */ ce({
  ...__,
  props: d_,
  emits: f_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = lp(), a = h_(), s = ip(), i = N(() => [
      r.type === "textarea" ? b.b() : g.b(),
      g.m(h.value),
      g.is("disabled", y.value),
      g.is("exceed", He.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: fe.value && me.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = N(() => [
      g.e("wrapper"),
      g.is("focus", Y.value)
    ]), { form: u, formItem: f } = as(), { inputId: m } = Ml(r, {
      formItemContext: f
    }), h = la(), y = Dl(), g = Ct("input"), b = Ct("textarea"), L = Sr(), p = Sr(), A = G(!1), P = G(!1), I = G(), w = Sr(r.inputStyle), x = N(() => L.value || p.value), { wrapperRef: C, isFocused: Y, handleFocus: X, handleBlur: le } = cf(x, {
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
    }), se = N(() => f?.validateState || ""), _e = N(() => se.value && rf[se.value]), ye = N(() => P.value ? n_ : H1), V = N(() => [
      o.style
    ]), J = N(() => [
      r.inputStyle,
      w.value,
      { resize: r.resize }
    ]), H = N(() => lr(r.modelValue) ? "" : String(r.modelValue)), fe = N(() => r.clearable && !y.value && !r.readonly && !!H.value && (Y.value || A.value)), me = N(() => r.showPassword && !y.value && !!H.value && (!!H.value || Y.value)), Re = N(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), je = N(() => H.value.length), He = N(() => !!Re.value && je.value > Number(r.maxlength)), Q = N(() => !!s.suffix || !!r.suffixIcon || fe.value || r.showPassword || Re.value || !!se.value && he.value), [q, De] = b_(L);
    Pn(p, (E) => {
      if (ue(), !Re.value || r.resize !== "both")
        return;
      const B = E[0], { width: Te } = B.contentRect;
      I.value = {
        right: `calc(100% - ${Te + 15 + 6}px)`
      };
    });
    const Ae = () => {
      const { type: E, autosize: B } = r;
      if (!(!Et || E !== "textarea" || !p.value))
        if (B) {
          const Te = an(B) ? B.minRows : void 0, Ce = an(B) ? B.maxRows : void 0, rt = eu(p.value, Te, Ce);
          w.value = {
            overflowY: "hidden",
            ...rt
          }, vt(() => {
            p.value.offsetHeight, w.value = rt;
          });
        } else
          w.value = {
            minHeight: eu(p.value).minHeight
          };
    }, ue = ((E) => {
      let B = !1;
      return () => {
        var Te;
        if (B || !r.autosize)
          return;
        ((Te = p.value) == null ? void 0 : Te.offsetParent) === null || (E(), B = !0);
      };
    })(Ae), te = () => {
      const E = x.value, B = r.formatter ? r.formatter(H.value) : H.value;
      !E || E.value === B || (E.value = B);
    }, we = async (E) => {
      q();
      let { value: B } = E.target;
      if (r.formatter && r.parser && (B = r.parser(B)), !wt.value) {
        if (B === H.value) {
          te();
          return;
        }
        n(xt, B), n(ir, B), await vt(), te(), De();
      }
    }, Xe = (E) => {
      let { value: B } = E.target;
      r.formatter && r.parser && (B = r.parser(B)), n(ur, B);
    }, {
      isComposing: wt,
      handleCompositionStart: ct,
      handleCompositionUpdate: kt,
      handleCompositionEnd: St
    } = uf({ emit: n, afterComposition: we }), st = () => {
      q(), P.value = !P.value, setTimeout(De);
    }, ut = () => {
      var E;
      return (E = x.value) == null ? void 0 : E.focus();
    }, T = () => {
      var E;
      return (E = x.value) == null ? void 0 : E.blur();
    }, O = (E) => {
      A.value = !1, n("mouseleave", E);
    }, j = (E) => {
      A.value = !0, n("mouseenter", E);
    }, re = (E) => {
      n("keydown", E);
    }, Pe = () => {
      var E;
      (E = x.value) == null || E.select();
    }, ve = () => {
      n(xt, ""), n(ur, ""), n("clear"), n(ir, "");
    };
    return Le(() => r.modelValue, () => {
      var E;
      vt(() => Ae()), r.validateEvent && ((E = f?.validate) == null || E.call(f, "change").catch((B) => void 0));
    }), Le(H, () => te()), Le(() => r.type, async () => {
      await vt(), te(), Ae();
    }), _t(() => {
      !r.formatter && r.parser, te(), vt(Ae);
    }), t({
      input: L,
      textarea: p,
      ref: x,
      textareaStyle: J,
      autosize: tr(r, "autosize"),
      isComposing: wt,
      focus: ut,
      blur: T,
      select: Pe,
      clear: ve,
      resizeTextarea: Ae
    }), (E, B) => (R(), U("div", {
      class: K([
        c(i),
        {
          [c(g).bm("group", "append")]: E.$slots.append,
          [c(g).bm("group", "prepend")]: E.$slots.prepend
        }
      ]),
      style: Pt(c(V)),
      onMouseenter: j,
      onMouseleave: O
    }, [
      ee(" input "),
      E.type !== "textarea" ? (R(), U(pt, { key: 0 }, [
        ee(" prepend slot "),
        E.$slots.prepend ? (R(), U("div", {
          key: 0,
          class: K(c(g).be("group", "prepend"))
        }, [
          Ee(E.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        v("div", {
          ref_key: "wrapperRef",
          ref: C,
          class: K(c(l))
        }, [
          ee(" prefix slot "),
          E.$slots.prefix || E.prefixIcon ? (R(), U("span", {
            key: 0,
            class: K(c(g).e("prefix"))
          }, [
            v("span", {
              class: K(c(g).e("prefix-inner"))
            }, [
              Ee(E.$slots, "prefix"),
              E.prefixIcon ? (R(), ge(c(Tt), {
                key: 0,
                class: K(c(g).e("icon"))
              }, {
                default: pe(() => [
                  (R(), ge(Kt(E.prefixIcon)))
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
            onCompositionupdate: c(kt),
            onCompositionend: c(St),
            onInput: we,
            onChange: Xe,
            onKeydown: re
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(Q) ? (R(), U("span", {
            key: 1,
            class: K(c(g).e("suffix"))
          }, [
            v("span", {
              class: K(c(g).e("suffix-inner"))
            }, [
              !c(fe) || !c(me) || !c(Re) ? (R(), U(pt, { key: 0 }, [
                Ee(E.$slots, "suffix"),
                E.suffixIcon ? (R(), ge(c(Tt), {
                  key: 0,
                  class: K(c(g).e("icon"))
                }, {
                  default: pe(() => [
                    (R(), ge(Kt(E.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              c(fe) ? (R(), ge(c(Tt), {
                key: 1,
                class: K([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: ot(c(Qo), ["prevent"]),
                onClick: ve
              }, {
                default: pe(() => [
                  F(c(Pl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(me) ? (R(), ge(c(Tt), {
                key: 2,
                class: K([c(g).e("icon"), c(g).e("password")]),
                onClick: st
              }, {
                default: pe(() => [
                  (R(), ge(Kt(c(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(Re) ? (R(), U("span", {
                key: 3,
                class: K(c(g).e("count"))
              }, [
                v("span", {
                  class: K(c(g).e("count-inner"))
                }, D(c(je)) + " / " + D(E.maxlength), 3)
              ], 2)) : ee("v-if", !0),
              c(se) && c(_e) && c(he) ? (R(), ge(c(Tt), {
                key: 4,
                class: K([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(se) === "validating")
                ])
              }, {
                default: pe(() => [
                  (R(), ge(Kt(c(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        E.$slots.append ? (R(), U("div", {
          key: 1,
          class: K(c(g).be("group", "append"))
        }, [
          Ee(E.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (R(), U(pt, { key: 1 }, [
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
          onCompositionupdate: c(kt),
          onCompositionend: c(St),
          onInput: we,
          onFocus: c(X),
          onBlur: c(le),
          onChange: Xe,
          onKeydown: re
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(Re) ? (R(), U("span", {
          key: 0,
          style: Pt(I.value),
          class: K(c(g).e("count"))
        }, D(c(je)) + " / " + D(E.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var k_ = /* @__PURE__ */ at(w_, [["__file", "input.vue"]]);
const S_ = En(k_), oo = 4, T_ = {
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
}, E_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Fl = Symbol("scrollbarContextKey"), A_ = nt({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), C_ = "Thumb", I_ = /* @__PURE__ */ ce({
  __name: "thumb",
  props: A_,
  setup(e) {
    const t = e, n = Ke(Fl), r = Ct("scrollbar");
    n || xl(C_, "can not inject scrollbar context");
    const o = G(), a = G(), s = G({}), i = G(!1);
    let l = !1, u = !1, f = Et ? document.onselectstart : null;
    const m = N(() => T_[t.vertical ? "vertical" : "horizontal"]), h = N(() => E_({
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
      const Y = (o.value.getBoundingClientRect()[m.value.direction] - x[m.value.client]) * -1, X = a.value[m.value.offset] - C, le = (Y - X) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = le * n.wrapElement[m.value.scrollSize] / 100;
    }, A = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", A), w(), u && (i.value = !1);
    }, P = () => {
      u = !1, i.value = !!t.size;
    }, I = () => {
      u = !0, i.value = l;
    };
    Wn(() => {
      w(), document.removeEventListener("mouseup", A);
    });
    const w = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Sn(tr(n, "scrollbarElement"), "mousemove", P), Sn(tr(n, "scrollbarElement"), "mouseleave", I), (x, C) => (R(), ge(ko, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: pe(() => [
        It(v("div", {
          ref_key: "instance",
          ref: o,
          class: K([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: b
        }, [
          v("div", {
            ref_key: "thumb",
            ref: a,
            class: K(c(r).e("thumb")),
            style: Pt(c(h)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [cr, x.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var nu = /* @__PURE__ */ at(I_, [["__file", "thumb.vue"]]);
const L_ = nt({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), O_ = /* @__PURE__ */ ce({
  __name: "bar",
  props: L_,
  setup(e, { expose: t }) {
    const n = e, r = Ke(Fl), o = G(0), a = G(0), s = G(""), i = G(""), l = G(1), u = G(1);
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
    }), (h, y) => (R(), U(pt, null, [
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
var x_ = /* @__PURE__ */ at(O_, [["__file", "bar.vue"]]);
const R_ = nt({
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
    type: ke([String, Object, Array]),
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
}), N_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(We)
}, P_ = "ElScrollbar", $_ = ce({
  name: P_
}), M_ = /* @__PURE__ */ ce({
  ...$_,
  props: R_,
  emits: N_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ct("scrollbar");
    let a, s, i = 0, l = 0;
    const u = G(), f = G(), m = G(), h = G(), y = N(() => {
      const w = {};
      return r.height && (w.height = ho(r.height)), r.maxHeight && (w.maxHeight = ho(r.maxHeight)), [r.wrapStyle, w];
    }), g = N(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), b = N(() => [o.e("view"), r.viewClass]), L = () => {
      var w;
      f.value && ((w = h.value) == null || w.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function p(w, x) {
      an(w) ? f.value.scrollTo(w) : We(w) && We(x) && f.value.scrollTo(w, x);
    }
    const A = (w) => {
      We(w) && (f.value.scrollTop = w);
    }, P = (w) => {
      We(w) && (f.value.scrollLeft = w);
    }, I = () => {
      var w;
      (w = h.value) == null || w.update();
    };
    return Le(() => r.noresize, (w) => {
      w ? (a?.(), s?.()) : ({ stop: a } = Pn(m, I), s = Sn("resize", I));
    }, { immediate: !0 }), Le(() => [r.maxHeight, r.height], () => {
      r.native || vt(() => {
        var w;
        I(), f.value && ((w = h.value) == null || w.handleScroll(f.value));
      });
    }), Vn(Fl, zr({
      scrollbarElement: u,
      wrapElement: f
    })), cp(() => {
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
    }), (w, x) => (R(), U("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: K(c(o).b())
    }, [
      v("div", {
        ref_key: "wrapRef",
        ref: f,
        class: K(c(g)),
        style: Pt(c(y)),
        tabindex: w.tabindex,
        onScroll: L
      }, [
        (R(), ge(Kt(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: m,
          class: K(c(b)),
          style: Pt(w.viewStyle),
          role: w.role,
          "aria-label": w.ariaLabel,
          "aria-orientation": w.ariaOrientation
        }, {
          default: pe(() => [
            Ee(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      w.native ? ee("v-if", !0) : (R(), ge(x_, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var D_ = /* @__PURE__ */ at(M_, [["__file", "scrollbar.vue"]]);
const F_ = En(D_), zl = Symbol("popper"), df = Symbol("popperContent"), z_ = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ff = nt({
  role: {
    type: String,
    values: z_,
    default: "tooltip"
  }
}), B_ = ce({
  name: "ElPopper",
  inheritAttrs: !1
}), V_ = /* @__PURE__ */ ce({
  ...B_,
  props: ff,
  setup(e, { expose: t }) {
    const n = e, r = G(), o = G(), a = G(), s = G(), i = N(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Vn(zl, l), (u, f) => Ee(u.$slots, "default");
  }
});
var j_ = /* @__PURE__ */ at(V_, [["__file", "popper.vue"]]);
const pf = nt({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), U_ = ce({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), W_ = /* @__PURE__ */ ce({
  ...U_,
  props: pf,
  setup(e, { expose: t }) {
    const n = e, r = Ct("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ke(df, void 0);
    return Le(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Wn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (R(), U("span", {
      ref_key: "arrowRef",
      ref: a,
      class: K(c(r).e("arrow")),
      style: Pt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var H_ = /* @__PURE__ */ at(W_, [["__file", "arrow.vue"]]);
const mf = nt({
  virtualRef: {
    type: ke(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ke(Function)
  },
  onMouseleave: {
    type: ke(Function)
  },
  onClick: {
    type: ke(Function)
  },
  onKeydown: {
    type: ke(Function)
  },
  onFocus: {
    type: ke(Function)
  },
  onBlur: {
    type: ke(Function)
  },
  onContextmenu: {
    type: ke(Function)
  },
  id: String,
  open: Boolean
}), hf = Symbol("elForwardRef"), G_ = (e) => {
  Vn(hf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, K_ = (e) => ({
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
}, q_ = "ElOnlyChild", Y_ = ce({
  name: q_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ke(hf), a = K_((r = o?.setForwardRef) != null ? r : Qo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = gf(i);
      return l ? It(up(l, n), [[a]]) : null;
    };
  }
});
function gf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (an(n))
      switch (n.type) {
        case dp:
          continue;
        case Iu:
        case "svg":
          return ru(n);
        case pt:
          return gf(n.children);
        default:
          return n;
      }
    return ru(n);
  }
  return null;
}
function ru(e) {
  const t = Ct("only-child");
  return F("span", {
    class: t.e("content")
  }, [e]);
}
const Z_ = ce({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), X_ = /* @__PURE__ */ ce({
  ...Z_,
  props: mf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ke(zl, void 0);
    G_(o);
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
      Le(() => n.virtualRef, (m) => {
        m && (o.value = or(m));
      }, {
        immediate: !0
      }), Le(o, (m, h) => {
        u?.(), u = void 0, kn(m) && (f.forEach((y) => {
          var g;
          const b = n[y];
          b && (m.addEventListener(y.slice(2).toLowerCase(), b), (g = h?.removeEventListener) == null || g.call(h, y.slice(2).toLowerCase(), b));
        }), Qs(m) && (u = Le([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, b) => {
            lr(y[b]) ? m.removeAttribute(g) : m.setAttribute(g, y[b]);
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
    }), Wn(() => {
      if (u?.(), u = void 0, o.value && kn(o.value)) {
        const m = o.value;
        f.forEach((h) => {
          const y = n[h];
          y && m.removeEventListener(h.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, h) => m.virtualTriggering ? ee("v-if", !0) : (R(), ge(c(Y_), uo({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: pe(() => [
        Ee(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Q_ = /* @__PURE__ */ at(X_, [["__file", "trigger.vue"]]);
const Ls = "focus-trap.focus-after-trapped", Os = "focus-trap.focus-after-released", J_ = "focus-trap.focusout-prevented", ou = {
  cancelable: !0,
  bubbles: !1
}, ew = {
  cancelable: !0,
  bubbles: !1
}, au = "focusAfterTrapped", su = "focusAfterReleased", tw = Symbol("elFocusTrap"), Bl = G(), ss = G(0), Vl = G(0);
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
    if (!nw(n, t))
      return n;
}, nw = (e, t) => {
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
}, rw = (e) => {
  const t = vf(e), n = lu(t, e), r = lu(t.reverse(), e);
  return [n, r];
}, ow = (e) => e instanceof HTMLInputElement && "select" in e, Jn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    kn(e) && !Qs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Vl.value = window.performance.now(), e !== n && ow(e) && t && e.select(), kn(e) && r && e.removeAttribute("tabindex");
  }
};
function iu(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const aw = () => {
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
}, sw = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Jn(r, t), document.activeElement !== n)
      return;
}, cu = aw(), lw = () => ss.value > Vl.value, ya = () => {
  Bl.value = "pointer", ss.value = window.performance.now();
}, uu = () => {
  Bl.value = "keyboard", ss.value = window.performance.now();
}, iw = () => (_t(() => {
  ba === 0 && (document.addEventListener("mousedown", ya), document.addEventListener("touchstart", ya), document.addEventListener("keydown", uu)), ba++;
}), Wn(() => {
  ba--, ba <= 0 && (document.removeEventListener("mousedown", ya), document.removeEventListener("touchstart", ya), document.removeEventListener("keydown", uu));
}), {
  focusReason: Bl,
  lastUserFocusTimestamp: ss,
  lastAutomatedFocusTimestamp: Vl
}), _a = (e) => new CustomEvent(J_, {
  ...ew,
  detail: e
}), zn = {
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
  e.code === zn.esc && io.forEach((t) => t(e));
}, cw = (e) => {
  _t(() => {
    io.length === 0 && document.addEventListener("keydown", du), Et && io.push(e);
  }), Wn(() => {
    io = io.filter((t) => t !== e), io.length === 0 && Et && document.removeEventListener("keydown", du);
  });
}, uw = ce({
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
    const { focusReason: a } = iw();
    cw((g) => {
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
      const { code: b, altKey: L, ctrlKey: p, metaKey: A, currentTarget: P, shiftKey: I } = g, { loop: w } = e, x = b === zn.tab && !L && !p && !A, C = document.activeElement;
      if (x && C) {
        const Y = P, [X, le] = rw(Y);
        if (X && le) {
          if (!I && C === le) {
            const se = _a({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (g.preventDefault(), w && Jn(X, !0));
          } else if (I && [X, Y].includes(C)) {
            const se = _a({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (g.preventDefault(), w && Jn(le, !0));
          }
        } else if (C === Y) {
          const se = _a({
            focusReason: a.value
          });
          t("focusout-prevented", se), se.defaultPrevented || g.preventDefault();
        }
      }
    };
    Vn(tw, {
      focusTrapRef: n,
      onKeydown: i
    }), Le(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Le([n], ([g], [b]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", f), g.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", f), b.removeEventListener("focusout", m));
    });
    const l = (g) => {
      t(au, g);
    }, u = (g) => t(su, g), f = (g) => {
      const b = c(n);
      if (!b)
        return;
      const L = g.target, p = g.relatedTarget, A = L && b.contains(L);
      e.trapped || p && b.contains(p) || (r = p), A && t("focusin", g), !s.paused && e.trapped && (A ? o = L : Jn(o, !0));
    }, m = (g) => {
      const b = c(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const L = g.relatedTarget;
          !lr(L) && !b.contains(L) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const p = _a({
                focusReason: a.value
              });
              t("focusout-prevented", p), p.defaultPrevented || Jn(o, !0);
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
            jt(A) || (Jn(A), document.activeElement !== A && (A = "first")), A === "first" && sw(vf(g), !0), (document.activeElement === b || A === "container") && Jn(g);
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
        g.addEventListener(Os, u), g.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !lw() || g.contains(document.activeElement)) && Jn(r ?? document.body), g.removeEventListener(Os, u), cu.remove(s);
      }
    }
    return _t(() => {
      e.trapped && h(), Le(() => e.trapped, (g) => {
        g ? h() : y();
      });
    }), Wn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function dw(e, t, n, r, o, a) {
  return Ee(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var fw = /* @__PURE__ */ at(uw, [["render", dw], ["__file", "focus-trap.vue"]]), tn = "top", dn = "bottom", fn = "right", nn = "left", jl = "auto", ia = [tn, dn, fn, nn], go = "start", ta = "end", pw = "clippingParents", bf = "viewport", Do = "popper", mw = "reference", fu = ia.reduce(function(e, t) {
  return e.concat([t + "-" + go, t + "-" + ta]);
}, []), ls = [].concat(ia, [jl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + go, t + "-" + ta]);
}, []), hw = "beforeRead", gw = "read", vw = "afterRead", bw = "beforeMain", yw = "main", _w = "afterMain", ww = "beforeWrite", kw = "write", Sw = "afterWrite", Tw = [hw, gw, vw, bw, yw, _w, ww, kw, Sw];
function Un(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function sn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jr(e) {
  var t = sn(e).Element;
  return e instanceof t || e instanceof Element;
}
function cn(e) {
  var t = sn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ul(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = sn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ew(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !cn(a) || !Un(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Aw(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !cn(o) || !Un(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var yf = { name: "applyStyles", enabled: !0, phase: "write", fn: Ew, effect: Aw, requires: ["computeStyles"] };
function Bn(e) {
  return e.split("-")[0];
}
var Fr = Math.max, ja = Math.min, vo = Math.round;
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
  var s = jr(e) ? sn(e) : window, i = s.visualViewport, l = !_f() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, f = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
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
function dr(e) {
  return sn(e).getComputedStyle(e);
}
function Cw(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function Ir(e) {
  return ((jr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function is(e) {
  return Un(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ul(e) ? e.host : null) || Ir(e);
}
function pu(e) {
  return !cn(e) || dr(e).position === "fixed" ? null : e.offsetParent;
}
function Iw(e) {
  var t = /firefox/i.test(Js()), n = /Trident/i.test(Js());
  if (n && cn(e)) {
    var r = dr(e);
    if (r.position === "fixed") return null;
  }
  var o = is(e);
  for (Ul(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(Un(o)) < 0; ) {
    var a = dr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function ca(e) {
  for (var t = sn(e), n = pu(e); n && Cw(n) && dr(n).position === "static"; ) n = pu(n);
  return n && (Un(n) === "html" || Un(n) === "body" && dr(n).position === "static") ? t : n || Iw(e) || t;
}
function Hl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ho(e, t, n) {
  return Fr(e, ja(t, n));
}
function Lw(e, t, n) {
  var r = Ho(e, t, n);
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
var Ow = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Sf(typeof e != "number" ? e : Tf(e, ia));
};
function xw(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Bn(n.placement), l = Hl(i), u = [nn, fn].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = Ow(o.padding, n), h = Wl(a), y = l === "y" ? tn : nn, g = l === "y" ? dn : fn, b = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], L = s[l] - n.rects.reference[l], p = ca(a), A = p ? l === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, P = b / 2 - L / 2, I = m[y], w = A - h[f] - m[g], x = A / 2 - h[f] / 2 + P, C = Ho(I, x, w), Y = l;
    n.modifiersData[r] = (t = {}, t[Y] = C, t.centerOffset = C - x, t);
  }
}
function Rw(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || wf(t.elements.popper, o) && (t.elements.arrow = o));
}
var Nw = { name: "arrow", enabled: !0, phase: "main", fn: xw, effect: Rw, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function yo(e) {
  return e.split("-")[1];
}
var Pw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function $w(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: vo(n * o) / o || 0, y: vo(r * o) / o || 0 };
}
function mu(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, h = s.x, y = h === void 0 ? 0 : h, g = s.y, b = g === void 0 ? 0 : g, L = typeof f == "function" ? f({ x: y, y: b }) : { x: y, y: b };
  y = L.x, b = L.y;
  var p = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), P = nn, I = tn, w = window;
  if (u) {
    var x = ca(n), C = "clientHeight", Y = "clientWidth";
    if (x === sn(n) && (x = Ir(n), dr(x).position !== "static" && i === "absolute" && (C = "scrollHeight", Y = "scrollWidth")), x = x, o === tn || (o === nn || o === fn) && a === ta) {
      I = dn;
      var X = m && x === w && w.visualViewport ? w.visualViewport.height : x[C];
      b -= X - r.height, b *= l ? 1 : -1;
    }
    if (o === nn || (o === tn || o === dn) && a === ta) {
      P = fn;
      var le = m && x === w && w.visualViewport ? w.visualViewport.width : x[Y];
      y -= le - r.width, y *= l ? 1 : -1;
    }
  }
  var he = Object.assign({ position: i }, u && Pw), se = f === !0 ? $w({ x: y, y: b }, sn(n)) : { x: y, y: b };
  if (y = se.x, b = se.y, l) {
    var _e;
    return Object.assign({}, he, (_e = {}, _e[I] = A ? "0" : "", _e[P] = p ? "0" : "", _e.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", _e));
  }
  return Object.assign({}, he, (t = {}, t[I] = A ? b + "px" : "", t[P] = p ? y + "px" : "", t.transform = "", t));
}
function Mw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Bn(t.placement), variation: yo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mu(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mu(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ef = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Mw, data: {} }, wa = { passive: !0 };
function Dw(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = sn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, wa);
  }), i && l.addEventListener("resize", n.update, wa), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, wa);
    }), i && l.removeEventListener("resize", n.update, wa);
  };
}
var Af = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Dw, data: {} }, Fw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ca(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Fw[t];
  });
}
var zw = { start: "end", end: "start" };
function hu(e) {
  return e.replace(/start|end/g, function(t) {
    return zw[t];
  });
}
function Gl(e) {
  var t = sn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Kl(e) {
  return bo(Ir(e)).left + Gl(e).scrollLeft;
}
function Bw(e, t) {
  var n = sn(e), r = Ir(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = _f();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Kl(e), y: l };
}
function Vw(e) {
  var t, n = Ir(e), r = Gl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Fr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Fr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Kl(e), l = -r.scrollTop;
  return dr(o || n).direction === "rtl" && (i += Fr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function ql(e) {
  var t = dr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Cf(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : cn(e) && ql(e) ? e : Cf(is(e));
}
function Go(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Cf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = sn(r), s = o ? [a].concat(a.visualViewport || [], ql(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Go(is(s)));
}
function el(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function jw(e, t) {
  var n = bo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gu(e, t, n) {
  return t === bf ? el(Bw(e, n)) : jr(t) ? jw(t, n) : el(Vw(Ir(e)));
}
function Uw(e) {
  var t = Go(is(e)), n = ["absolute", "fixed"].indexOf(dr(e).position) >= 0, r = n && cn(e) ? ca(e) : e;
  return jr(r) ? t.filter(function(o) {
    return jr(o) && wf(o, r) && Un(o) !== "body";
  }) : [];
}
function Ww(e, t, n, r) {
  var o = t === "clippingParents" ? Uw(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = gu(e, u, r);
    return l.top = Fr(f.top, l.top), l.right = ja(f.right, l.right), l.bottom = ja(f.bottom, l.bottom), l.left = Fr(f.left, l.left), l;
  }, gu(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function If(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Bn(r) : null, a = r ? yo(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
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
  var u = o ? Hl(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case go:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case ta:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function na(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? pw : i, u = n.rootBoundary, f = u === void 0 ? bf : u, m = n.elementContext, h = m === void 0 ? Do : m, y = n.altBoundary, g = y === void 0 ? !1 : y, b = n.padding, L = b === void 0 ? 0 : b, p = Sf(typeof L != "number" ? L : Tf(L, ia)), A = h === Do ? mw : Do, P = e.rects.popper, I = e.elements[g ? A : h], w = Ww(jr(I) ? I : I.contextElement || Ir(e.elements.popper), l, f, s), x = bo(e.elements.reference), C = If({ reference: x, element: P, placement: o }), Y = el(Object.assign({}, P, C)), X = h === Do ? Y : x, le = { top: w.top - X.top + p.top, bottom: X.bottom - w.bottom + p.bottom, left: w.left - X.left + p.left, right: X.right - w.right + p.right }, he = e.modifiersData.offset;
  if (h === Do && he) {
    var se = he[o];
    Object.keys(le).forEach(function(_e) {
      var ye = [fn, dn].indexOf(_e) >= 0 ? 1 : -1, V = [tn, dn].indexOf(_e) >= 0 ? "y" : "x";
      le[_e] += se[V] * ye;
    });
  }
  return le;
}
function Hw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ls : l, f = yo(r), m = f ? i ? fu : fu.filter(function(g) {
    return yo(g) === f;
  }) : ia, h = m.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(g, b) {
    return g[b] = na(e, { placement: b, boundary: o, rootBoundary: a, padding: s })[Bn(b)], g;
  }, {});
  return Object.keys(y).sort(function(g, b) {
    return y[g] - y[b];
  });
}
function Gw(e) {
  if (Bn(e) === jl) return [];
  var t = Ca(e);
  return [hu(e), t, hu(t)];
}
function Kw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, b = n.allowedAutoPlacements, L = t.options.placement, p = Bn(L), A = p === L, P = l || (A || !g ? [Ca(L)] : Gw(L)), I = [L].concat(P).reduce(function(q, De) {
      return q.concat(Bn(De) === jl ? Hw(t, { placement: De, boundary: f, rootBoundary: m, padding: u, flipVariations: g, allowedAutoPlacements: b }) : De);
    }, []), w = t.rects.reference, x = t.rects.popper, C = /* @__PURE__ */ new Map(), Y = !0, X = I[0], le = 0; le < I.length; le++) {
      var he = I[le], se = Bn(he), _e = yo(he) === go, ye = [tn, dn].indexOf(se) >= 0, V = ye ? "width" : "height", J = na(t, { placement: he, boundary: f, rootBoundary: m, altBoundary: h, padding: u }), H = ye ? _e ? fn : nn : _e ? dn : tn;
      w[V] > x[V] && (H = Ca(H));
      var fe = Ca(H), me = [];
      if (a && me.push(J[se] <= 0), i && me.push(J[H] <= 0, J[fe] <= 0), me.every(function(q) {
        return q;
      })) {
        X = he, Y = !1;
        break;
      }
      C.set(he, me);
    }
    if (Y) for (var Re = g ? 3 : 1, je = function(q) {
      var De = I.find(function(Ae) {
        var Se = C.get(Ae);
        if (Se) return Se.slice(0, q).every(function(ue) {
          return ue;
        });
      });
      if (De) return X = De, "break";
    }, He = Re; He > 0; He--) {
      var Q = je(He);
      if (Q === "break") break;
    }
    t.placement !== X && (t.modifiersData[r]._skip = !0, t.placement = X, t.reset = !0);
  }
}
var qw = { name: "flip", enabled: !0, phase: "main", fn: Kw, requiresIfExists: ["offset"], data: { _skip: !1 } };
function vu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function bu(e) {
  return [tn, fn, dn, nn].some(function(t) {
    return e[t] >= 0;
  });
}
function Yw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = na(t, { elementContext: "reference" }), i = na(t, { altBoundary: !0 }), l = vu(s, r), u = vu(i, o, a), f = bu(l), m = bu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var Zw = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Yw };
function Xw(e, t, n) {
  var r = Bn(e), o = [nn, tn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [nn, fn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Qw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = ls.reduce(function(f, m) {
    return f[m] = Xw(m, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Jw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Qw };
function ek(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = If({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Lf = { name: "popperOffsets", enabled: !0, phase: "read", fn: ek, data: {} };
function tk(e) {
  return e === "x" ? "y" : "x";
}
function nk(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, g = n.tetherOffset, b = g === void 0 ? 0 : g, L = na(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: f }), p = Bn(t.placement), A = yo(t.placement), P = !A, I = Hl(p), w = tk(I), x = t.modifiersData.popperOffsets, C = t.rects.reference, Y = t.rects.popper, X = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, le = typeof X == "number" ? { mainAxis: X, altAxis: X } : Object.assign({ mainAxis: 0, altAxis: 0 }, X), he = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, se = { x: 0, y: 0 };
  if (x) {
    if (a) {
      var _e, ye = I === "y" ? tn : nn, V = I === "y" ? dn : fn, J = I === "y" ? "height" : "width", H = x[I], fe = H + L[ye], me = H - L[V], Re = y ? -Y[J] / 2 : 0, je = A === go ? C[J] : Y[J], He = A === go ? -Y[J] : -C[J], Q = t.elements.arrow, q = y && Q ? Wl(Q) : { width: 0, height: 0 }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : kf(), Ae = De[ye], Se = De[V], ue = Ho(0, C[J], q[J]), te = P ? C[J] / 2 - Re - ue - Ae - le.mainAxis : je - ue - Ae - le.mainAxis, we = P ? -C[J] / 2 + Re + ue + Se + le.mainAxis : He + ue + Se + le.mainAxis, Xe = t.elements.arrow && ca(t.elements.arrow), wt = Xe ? I === "y" ? Xe.clientTop || 0 : Xe.clientLeft || 0 : 0, ct = (_e = he?.[I]) != null ? _e : 0, kt = H + te - ct - wt, St = H + we - ct, st = Ho(y ? ja(fe, kt) : fe, H, y ? Fr(me, St) : me);
      x[I] = st, se[I] = st - H;
    }
    if (i) {
      var ut, T = I === "x" ? tn : nn, O = I === "x" ? dn : fn, j = x[w], re = w === "y" ? "height" : "width", Pe = j + L[T], ve = j - L[O], E = [tn, nn].indexOf(p) !== -1, B = (ut = he?.[w]) != null ? ut : 0, Te = E ? Pe : j - C[re] - Y[re] - B + le.altAxis, Ce = E ? j + C[re] + Y[re] - B - le.altAxis : ve, rt = y && E ? Lw(Te, j, Ce) : Ho(y ? Te : Pe, j, y ? Ce : ve);
      x[w] = rt, se[w] = rt - j;
    }
    t.modifiersData[r] = se;
  }
}
var rk = { name: "preventOverflow", enabled: !0, phase: "main", fn: nk, requiresIfExists: ["offset"] };
function ok(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ak(e) {
  return e === sn(e) || !cn(e) ? Gl(e) : ok(e);
}
function sk(e) {
  var t = e.getBoundingClientRect(), n = vo(t.width) / e.offsetWidth || 1, r = vo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function lk(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), o = cn(t) && sk(t), a = Ir(t), s = bo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Un(t) !== "body" || ql(a)) && (i = ak(t)), cn(t) ? (l = bo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Kl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function ik(e) {
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
function ck(e) {
  var t = ik(e);
  return Tw.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function uk(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function dk(e) {
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
      g(), u.options = Object.assign({}, a, u.options, L), u.scrollParents = { reference: jr(s) ? Go(s) : s.contextElement ? Go(s.contextElement) : [], popper: Go(i) };
      var p = ck(dk([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(A) {
        return A.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, L = b.reference, p = b.popper;
        if (_u(L, p)) {
          u.rects = { reference: lk(L, ca(p), u.options.strategy === "fixed"), popper: Wl(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
            return u.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var A = 0; A < u.orderedModifiers.length; A++) {
            if (u.reset === !0) {
              u.reset = !1, A = -1;
              continue;
            }
            var P = u.orderedModifiers[A], I = P.fn, w = P.options, x = w === void 0 ? {} : w, C = P.name;
            typeof I == "function" && (u = I({ state: u, options: x, name: C, instance: h }) || u);
          }
        }
      }
    }, update: uk(function() {
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
          var I = P({ state: u, name: L, instance: h, options: A }), w = function() {
          };
          f.push(I || w);
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
var fk = [Af, Lf, Ef, yf];
Yl({ defaultModifiers: fk });
var pk = [Af, Lf, Ef, yf, Jw, qw, rk, Nw, Zw], mk = Yl({ defaultModifiers: pk });
const hk = ["fixed", "absolute"], gk = nt({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ke(Array),
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
    type: ke(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: hk,
    default: "absolute"
  }
}), Of = nt({
  ...gk,
  id: String,
  style: {
    type: ke([String, Array, Object])
  },
  className: {
    type: ke([String, Array, Object])
  },
  effect: {
    type: ke(String),
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
    type: ke([String, Array, Object])
  },
  popperStyle: {
    type: ke([String, Array, Object])
  },
  referenceEl: {
    type: ke(Object)
  },
  triggerTargetEl: {
    type: ke(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Kr(["ariaLabel"])
}), vk = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, bk = (e, t) => {
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
}, yk = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...wk(e), ...t]
  };
  return kk(a, o?.modifiers), a;
}, _k = (e) => {
  if (Et)
    return or(e);
};
function wk(e) {
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
function kk(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Sk = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Tk(l);
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
  return Le(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Le([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = mk(l, u, c(o)));
  }), Wn(() => {
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
function Tk(e) {
  const t = Object.keys(e.elements), n = Da(t.map((o) => [o, e.styles[o] || {}])), r = Da(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Ek = 0, Ak = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ke(zl, void 0), a = G(), s = G(), i = N(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = N(() => {
    var p;
    const A = c(a), P = (p = c(s)) != null ? p : Ek;
    return {
      name: "arrow",
      enabled: !Uy(A),
      options: {
        element: A,
        padding: P
      }
    };
  }), u = N(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...yk(e, [
      c(l),
      c(i)
    ])
  })), f = N(() => _k(e.referenceEl) || c(r)), { attributes: m, state: h, styles: y, update: g, forceUpdate: b, instanceRef: L } = Sk(f, n, u);
  return Le(L, (p) => t.value = p), _t(() => {
    Le(() => {
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
}, Ck = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Wd(), a = Ct("popper"), s = N(() => c(t).popper), i = G(We(e.zIndex) ? e.zIndex : o()), l = N(() => [
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
}, Ik = ce({
  name: "ElPopperContent"
}), Lk = /* @__PURE__ */ ce({
  ...Ik,
  props: Of,
  emits: vk,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = bk(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: g, instanceRef: b, role: L, update: p } = Ak(r), {
      ariaModal: A,
      arrowStyle: P,
      contentAttrs: I,
      contentClass: w,
      contentStyle: x,
      updateZIndex: C
    } = Ck(r, {
      styles: g,
      attributes: m,
      role: L
    }), Y = Ke(Va, void 0), X = G();
    Vn(df, {
      arrowStyle: P,
      arrowRef: h,
      arrowOffset: X
    }), Y && Vn(Va, {
      ...Y,
      addInputId: Qo,
      removeInputId: Qo
    });
    let le;
    const he = (_e = !0) => {
      p(), _e && C();
    }, se = () => {
      he(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return _t(() => {
      Le(() => r.triggerTargetEl, (_e, ye) => {
        le?.(), le = void 0;
        const V = c(_e || y.value), J = c(ye || y.value);
        kn(V) && (le = Le([L, () => r.ariaLabel, A, () => r.id], (H) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((fe, me) => {
            lr(H[me]) ? V.removeAttribute(fe) : V.setAttribute(fe, H[me]);
          });
        }, { immediate: !0 })), J !== V && kn(J) && ["role", "aria-label", "aria-modal", "id"].forEach((H) => {
          J.removeAttribute(H);
        });
      }, { immediate: !0 }), Le(() => r.visible, se, { immediate: !0 });
    }), Wn(() => {
      le?.(), le = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: b,
      updatePopper: he,
      contentStyle: x
    }), (_e, ye) => (R(), U("div", uo({
      ref_key: "contentRef",
      ref: y
    }, c(I), {
      style: c(x),
      class: c(w),
      tabindex: "-1",
      onMouseenter: (V) => _e.$emit("mouseenter", V),
      onMouseleave: (V) => _e.$emit("mouseleave", V)
    }), [
      F(c(fw), {
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
        default: pe(() => [
          Ee(_e.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Ok = /* @__PURE__ */ at(Lk, [["__file", "content.vue"]]);
const xk = En(j_), Zl = Symbol("elTooltip");
function wu() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return sa(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Rk = nt({
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
}), Nk = ({
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
}, Xl = nt({
  ...Rk,
  ...Of,
  appendTo: {
    type: ke([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: ke(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Kr(["ariaLabel"])
}), xf = nt({
  ...mf,
  disabled: Boolean,
  trigger: {
    type: ke([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ke(Array),
    default: () => [zn.enter, zn.numpadEnter, zn.space]
  }
}), Pk = ns({
  type: ke(Boolean),
  default: null
}), $k = ns({
  type: ke(Function)
}), Mk = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Pk,
    [n]: $k
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
      const h = Yt(), { emit: y } = h, g = h.props, b = N(() => it(g[n])), L = N(() => g[e] === null), p = (C) => {
        s.value !== !0 && (s.value = !0, i && (i.value = C), it(f) && f(C));
      }, A = (C) => {
        s.value !== !1 && (s.value = !1, i && (i.value = C), it(m) && m(C));
      }, P = (C) => {
        if (g.disabled === !0 || it(u) && !u())
          return;
        const Y = b.value && Et;
        Y && y(t, !0), (L.value || !Y) && p(C);
      }, I = (C) => {
        if (g.disabled === !0 || !Et)
          return;
        const Y = b.value && Et;
        Y && y(t, !1), (L.value || !Y) && A(C);
      }, w = (C) => {
        Tr(C) && (g.disabled && C ? b.value && y(t, !1) : s.value !== C && (C ? p() : A()));
      }, x = () => {
        s.value ? I() : P();
      };
      return Le(() => g[e], w), l && h.appContext.config.globalProperties.$route !== void 0 && Le(() => ({
        ...h.proxy.$route
      }), () => {
        l.value && s.value && I();
      }), _t(() => {
        w(g[e]);
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
  useModelToggleProps: Dk,
  useModelToggleEmits: Fk,
  useModelToggle: zk
} = Mk("visible"), Bk = nt({
  ...ff,
  ...Dk,
  ...Xl,
  ...xf,
  ...pf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Vk = [
  ...Fk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], jk = (e, t) => $n(e) ? e.includes(t) : e === t, ao = (e, t, n) => (r) => {
  jk(c(e), t) && n(r);
}, er = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Uk = ce({
  name: "ElTooltipTrigger"
}), Wk = /* @__PURE__ */ ce({
  ...Uk,
  props: xf,
  setup(e, { expose: t }) {
    const n = e, r = Ct("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ke(Zl, void 0), f = G(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, h = tr(n, "trigger"), y = er(m, ao(h, "hover", i)), g = er(m, ao(h, "hover", l)), b = er(m, ao(h, "click", (I) => {
      I.button === 0 && u(I);
    })), L = er(m, ao(h, "focus", i)), p = er(m, ao(h, "focus", l)), A = er(m, ao(h, "contextmenu", (I) => {
      I.preventDefault(), u(I);
    })), P = er(m, (I) => {
      const { code: w } = I;
      n.triggerKeys.includes(w) && (I.preventDefault(), u(I));
    });
    return t({
      triggerRef: f
    }), (I, w) => (R(), ge(c(Q_), {
      id: c(a),
      "virtual-ref": I.virtualRef,
      open: c(s),
      "virtual-triggering": I.virtualTriggering,
      class: K(c(r).e("trigger")),
      onBlur: c(p),
      onClick: c(b),
      onContextmenu: c(A),
      onFocus: c(L),
      onMouseenter: c(y),
      onMouseleave: c(g),
      onKeydown: c(P)
    }, {
      default: pe(() => [
        Ee(I.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Hk = /* @__PURE__ */ at(Wk, [["__file", "trigger.vue"]]);
const Gk = nt({
  to: {
    type: ke([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Kk = /* @__PURE__ */ ce({
  __name: "teleport",
  props: Gk,
  setup(e) {
    return (t, n) => t.disabled ? Ee(t.$slots, "default", { key: 0 }) : (R(), ge(fp, {
      key: 1,
      to: t.to
    }, [
      Ee(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var qk = /* @__PURE__ */ at(Kk, [["__file", "teleport.vue"]]);
const Yk = En(qk), Rf = () => {
  const e = kl(), t = sf(), n = N(() => `${e.value}-popper-container-${t.prefix}`), r = N(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Zk = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Xk = () => {
  const { id: e, selector: t } = Rf();
  return pp(() => {
    Et && (document.body.querySelector(t.value) || Zk(e.value));
  }), {
    id: e,
    selector: t
  };
}, Qk = ce({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Jk = /* @__PURE__ */ ce({
  ...Qk,
  props: Xl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Rf(), o = Ct("tooltip"), a = G();
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
    } = Ke(Zl, void 0), p = N(() => n.transition || `${o.namespace.value}-fade-in-linear`), A = N(() => n.persistent);
    Wn(() => {
      s?.();
    });
    const P = N(() => c(A) ? !0 : c(u)), I = N(() => n.disabled ? !1 : c(u)), w = N(() => n.appendTo || r.value), x = N(() => {
      var H;
      return (H = n.style) != null ? H : {};
    }), C = G(!0), Y = () => {
      g(), J() && Jn(document.body), C.value = !0;
    }, X = () => {
      if (c(i))
        return !0;
    }, le = er(X, () => {
      n.enterable && c(f) === "hover" && h();
    }), he = er(X, () => {
      c(f) === "hover" && m();
    }), se = () => {
      var H, fe;
      (fe = (H = a.value) == null ? void 0 : H.updatePopper) == null || fe.call(H), b?.();
    }, _e = () => {
      L?.();
    }, ye = () => {
      y(), s = s1(N(() => {
        var H;
        return (H = a.value) == null ? void 0 : H.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && m();
      });
    }, V = () => {
      n.virtualTriggering || m();
    }, J = (H) => {
      var fe;
      const me = (fe = a.value) == null ? void 0 : fe.popperContentRef, Re = H?.relatedTarget || document.activeElement;
      return me?.contains(Re);
    };
    return Le(() => c(u), (H) => {
      H ? C.value = !1 : s?.();
    }, {
      flush: "post"
    }), Le(() => n.content, () => {
      var H, fe;
      (fe = (H = a.value) == null ? void 0 : H.updatePopper) == null || fe.call(H);
    }), t({
      contentRef: a,
      isFocusInsideContent: J
    }), (H, fe) => (R(), ge(c(Yk), {
      disabled: !H.teleported,
      to: c(w)
    }, {
      default: pe(() => [
        F(ko, {
          name: c(p),
          onAfterLeave: Y,
          onBeforeEnter: se,
          onAfterEnter: ye,
          onBeforeLeave: _e
        }, {
          default: pe(() => [
            c(P) ? It((R(), ge(c(Ok), uo({
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
              onMouseenter: c(le),
              onMouseleave: c(he),
              onBlur: V,
              onClose: c(m)
            }), {
              default: pe(() => [
                Ee(H.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [cr, c(I)]
            ]) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var eS = /* @__PURE__ */ at(Jk, [["__file", "content.vue"]]);
const tS = ce({
  name: "ElTooltip"
}), nS = /* @__PURE__ */ ce({
  ...tS,
  props: Bk,
  emits: Vk,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Xk();
    const o = os(), a = G(), s = G(), i = () => {
      var p;
      const A = c(a);
      A && ((p = A.popperInstanceRef) == null || p.update());
    }, l = G(!1), u = G(), { show: f, hide: m, hasUpdateHandler: h } = zk({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = Nk({
      showAfter: tr(r, "showAfter"),
      hideAfter: tr(r, "hideAfter"),
      autoClose: tr(r, "autoClose"),
      open: f,
      close: m
    }), b = N(() => Tr(r.visible) && !h.value);
    Vn(Zl, {
      controlled: b,
      id: o,
      open: rl(l),
      trigger: tr(r, "trigger"),
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
    }), Le(() => r.disabled, (p) => {
      p && l.value && (l.value = !1);
    });
    const L = (p) => {
      var A;
      return (A = s.value) == null ? void 0 : A.isFocusInsideContent(p);
    };
    return mp(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: L,
      updatePopper: i,
      onOpen: y,
      onClose: g,
      hide: m
    }), (p, A) => (R(), ge(c(xk), {
      ref_key: "popperRef",
      ref: a,
      role: p.role
    }, {
      default: pe(() => [
        F(Hk, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: pe(() => [
            p.$slots.default ? Ee(p.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        F(eS, {
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
          default: pe(() => [
            Ee(p.$slots, "content", {}, () => [
              p.rawContent ? (R(), U("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, ["innerHTML"])) : (R(), U("span", { key: 1 }, D(p.content), 1))
            ]),
            p.showArrow ? (R(), ge(c(H_), {
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
var rS = /* @__PURE__ */ at(nS, [["__file", "tooltip.vue"]]);
const oS = En(rS), aS = nt({
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
    type: ke([String, Object, Array])
  },
  offset: {
    type: ke(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), sS = ce({
  name: "ElBadge"
}), lS = /* @__PURE__ */ ce({
  ...sS,
  props: aS,
  setup(e, { expose: t }) {
    const n = e, r = Ct("badge"), o = N(() => n.isDot ? "" : We(n.value) && We(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = N(() => {
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
      class: K(c(r).b())
    }, [
      Ee(s.$slots, "default"),
      F(ko, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: pe(() => [
          It(v("sup", {
            class: K([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Pt(c(a))
          }, [
            Ee(s.$slots, "content", { value: c(o) }, () => [
              en(D(c(o)), 1)
            ])
          ], 6), [
            [cr, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var iS = /* @__PURE__ */ at(lS, [["__file", "badge.vue"]]);
const cS = En(iS), uS = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), tl = nt({
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
}), dS = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, fS = ce({
  name: "ElTag"
}), pS = /* @__PURE__ */ ce({
  ...fS,
  props: tl,
  emits: dS,
  setup(e, { emit: t }) {
    const n = e, r = la(), o = Ct("tag"), a = N(() => {
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
      class: K(c(a)),
      style: Pt({ backgroundColor: u.color }),
      onClick: i
    }, [
      v("span", {
        class: K(c(o).e("content"))
      }, [
        Ee(u.$slots, "default")
      ], 2),
      u.closable ? (R(), ge(c(Tt), {
        key: 0,
        class: K(c(o).e("close")),
        onClick: ot(s, ["stop"])
      }, {
        default: pe(() => [
          F(c(za))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (R(), ge(ko, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: pe(() => [
        v("span", {
          class: K(c(a)),
          style: Pt({ backgroundColor: u.color }),
          onClick: i
        }, [
          v("span", {
            class: K(c(o).e("content"))
          }, [
            Ee(u.$slots, "default")
          ], 2),
          u.closable ? (R(), ge(c(Tt), {
            key: 0,
            class: K(c(o).e("close")),
            onClick: ot(s, ["stop"])
          }, {
            default: pe(() => [
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
var mS = /* @__PURE__ */ at(pS, [["__file", "tag.vue"]]);
const hS = En(mS), yr = /* @__PURE__ */ new Map();
if (Et) {
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
  return $n(t.arg) ? n = t.arg : kn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), m = e === s, h = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || f || m || h || y || t.value(r, o);
  };
}
const gS = {
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
}, vS = nt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ke(Object)
  },
  size: rs,
  button: {
    type: ke(Object)
  },
  experimentalFeatures: {
    type: ke(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ke(Object)
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
  props: vS,
  setup(e, { slots: t }) {
    Le(() => e.message, (r) => {
      Object.assign(gn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Qd(e);
    return () => Ee(t, "default", { config: n?.value });
  }
});
const bS = 100, yS = 600, Su = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = bS, delay: o = yS } = it(n) ? {} : n;
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
}, _S = nt({
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
  ...Kr(["ariaLabel"])
}), wS = {
  [ur]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [ir]: (e) => We(e) || lr(e),
  [xt]: (e) => We(e) || lr(e)
}, kS = ce({
  name: "ElInputNumber"
}), SS = /* @__PURE__ */ ce({
  ...kS,
  props: _S,
  emits: wS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Rl(), a = Ct("input-number"), s = G(), i = zr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = as(), u = N(() => We(r.modelValue) && r.modelValue <= r.min), f = N(() => We(r.modelValue) && r.modelValue >= r.max), m = N(() => {
      const V = p(r.step);
      return Mn(r.precision) ? Math.max(p(r.modelValue), V) : (V > r.precision, r.precision);
    }), h = N(() => r.controls && r.controlsPosition === "right"), y = la(), g = Dl(), b = N(() => {
      if (i.userInput !== null)
        return i.userInput;
      let V = i.currentValue;
      if (lr(V))
        return "";
      if (We(V)) {
        if (Number.isNaN(V))
          return "";
        Mn(r.precision) || (V = V.toFixed(r.precision));
      }
      return V;
    }), L = (V, J) => {
      if (Mn(J) && (J = m.value), J === 0)
        return Math.round(V);
      let H = String(V);
      const fe = H.indexOf(".");
      if (fe === -1 || !H.replace(".", "").split("")[fe + J])
        return V;
      const je = H.length;
      return H.charAt(je - 1) === "5" && (H = `${H.slice(0, Math.max(0, je - 1))}6`), Number.parseFloat(Number(H).toFixed(J));
    }, p = (V) => {
      if (lr(V))
        return 0;
      const J = V.toString(), H = J.indexOf(".");
      let fe = 0;
      return H !== -1 && (fe = J.length - H - 1), fe;
    }, A = (V, J = 1) => We(V) ? L(V + r.step * J) : i.currentValue, P = () => {
      if (r.readonly || g.value || f.value)
        return;
      const V = Number(b.value) || 0, J = A(V);
      x(J), n(ir, i.currentValue), _e();
    }, I = () => {
      if (r.readonly || g.value || u.value)
        return;
      const V = Number(b.value) || 0, J = A(V, -1);
      x(J), n(ir, i.currentValue), _e();
    }, w = (V, J) => {
      const { max: H, min: fe, step: me, precision: Re, stepStrictly: je, valueOnClear: He } = r;
      H < fe && xl("InputNumber", "min should not be greater than max.");
      let Q = Number(V);
      if (lr(V) || Number.isNaN(Q))
        return null;
      if (V === "") {
        if (He === null)
          return null;
        Q = jt(He) ? { min: fe, max: H }[He] : He;
      }
      return je && (Q = L(Math.round(Q / me) * me, Re), Q !== V && J && n(xt, Q)), Mn(Re) || (Q = L(Q, Re)), (Q > H || Q < fe) && (Q = Q > H ? H : fe, J && n(xt, Q)), Q;
    }, x = (V, J = !0) => {
      var H;
      const fe = i.currentValue, me = w(V);
      if (!J) {
        n(xt, me);
        return;
      }
      fe === me && V || (i.userInput = null, n(xt, me), fe !== me && n(ur, me, fe), r.validateEvent && ((H = l?.validate) == null || H.call(l, "change").catch((Re) => void 0)), i.currentValue = me);
    }, C = (V) => {
      i.userInput = V;
      const J = V === "" ? null : Number(V);
      n(ir, J), x(J, !1);
    }, Y = (V) => {
      const J = V !== "" ? Number(V) : "";
      (We(J) && !Number.isNaN(J) || V === "") && x(J), _e(), i.userInput = null;
    }, X = () => {
      var V, J;
      (J = (V = s.value) == null ? void 0 : V.focus) == null || J.call(V);
    }, le = () => {
      var V, J;
      (J = (V = s.value) == null ? void 0 : V.blur) == null || J.call(V);
    }, he = (V) => {
      n("focus", V);
    }, se = (V) => {
      var J, H;
      i.userInput = null, of() && i.currentValue === null && ((J = s.value) != null && J.input) && (s.value.input.value = ""), n("blur", V), r.validateEvent && ((H = l?.validate) == null || H.call(l, "blur").catch((fe) => void 0));
    }, _e = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, ye = (V) => {
      document.activeElement === V.target && V.preventDefault();
    };
    return Le(() => r.modelValue, (V, J) => {
      const H = w(V, !0);
      i.userInput === null && H !== J && (i.currentValue = H);
    }, { immediate: !0 }), _t(() => {
      var V;
      const { min: J, max: H, modelValue: fe } = r, me = (V = s.value) == null ? void 0 : V.input;
      if (me.setAttribute("role", "spinbutton"), Number.isFinite(H) ? me.setAttribute("aria-valuemax", String(H)) : me.removeAttribute("aria-valuemax"), Number.isFinite(J) ? me.setAttribute("aria-valuemin", String(J)) : me.removeAttribute("aria-valuemin"), me.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), me.setAttribute("aria-disabled", String(g.value)), !We(fe) && fe != null) {
        let Re = Number(fe);
        Number.isNaN(Re) && (Re = null), n(xt, Re);
      }
      me.addEventListener("wheel", ye, { passive: !1 });
    }), Ou(() => {
      var V, J;
      const H = (V = s.value) == null ? void 0 : V.input;
      H?.setAttribute("aria-valuenow", `${(J = i.currentValue) != null ? J : ""}`);
    }), t({
      focus: X,
      blur: le
    }), (V, J) => (R(), U("div", {
      class: K([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !V.controls),
        c(a).is("controls-right", c(h))
      ]),
      onDragstart: ot(() => {
      }, ["prevent"])
    }, [
      V.controls ? It((R(), U("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: K([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: yn(I, ["enter"])
      }, [
        Ee(V.$slots, "decrease-icon", {}, () => [
          F(c(Tt), null, {
            default: pe(() => [
              c(h) ? (R(), ge(c(tf), { key: 0 })) : (R(), ge(c(Z1), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Su), I]
      ]) : ee("v-if", !0),
      V.controls ? It((R(), U("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: K([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: yn(P, ["enter"])
      }, [
        Ee(V.$slots, "increase-icon", {}, () => [
          F(c(Tt), null, {
            default: pe(() => [
              c(h) ? (R(), ge(c(D1), { key: 0 })) : (R(), ge(c(Q1), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Su), P]
      ]) : ee("v-if", !0),
      F(c(S_), {
        id: V.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: V.step,
        "model-value": c(b),
        placeholder: V.placeholder,
        readonly: V.readonly,
        disabled: c(g),
        size: c(y),
        max: V.max,
        min: V.min,
        name: V.name,
        "aria-label": V.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          yn(ot(P, ["prevent"]), ["up"]),
          yn(ot(I, ["prevent"]), ["down"])
        ],
        onBlur: se,
        onFocus: he,
        onInput: C,
        onChange: Y
      }, hp({
        _: 2
      }, [
        V.$slots.prefix ? {
          name: "prefix",
          fn: pe(() => [
            Ee(V.$slots, "prefix")
          ])
        } : void 0,
        V.$slots.suffix ? {
          name: "suffix",
          fn: pe(() => [
            Ee(V.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var TS = /* @__PURE__ */ at(SS, [["__file", "input-number.vue"]]);
const ES = En(TS);
function AS() {
  const e = Sr(), t = G(0), n = 11, r = N(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Pn(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Nf = Symbol("ElSelectGroup"), cs = Symbol("ElSelect");
function CS(e, t) {
  const n = Ke(cs), r = Ke(Nf, { disabled: !1 }), o = N(() => f(wr(n.props.modelValue), e.value)), a = N(() => {
    var y;
    if (n.props.multiple) {
      const g = wr((y = n.props.modelValue) != null ? y : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = N(() => e.label || (an(e.value) ? "" : e.value)), i = N(() => e.value || e.label || ""), l = N(() => e.disabled || t.groupDisabled || a.value), u = Yt(), f = (y = [], g) => {
    if (an(e.value)) {
      const b = n.props.valueKey;
      return y && y.some((L) => gp(kr(L, b)) === kr(g, b));
    } else
      return y && y.includes(g);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, h = (y) => {
    const g = new RegExp(uS(y), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Le(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Le(() => e.value, (y, g) => {
    const { remote: b, valueKey: L } = n.props;
    if ((b ? y !== g : !Wo(y, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (L && an(y) && an(g) && y[L] === g[L])
        return;
      n.setSelected();
    }
  }), Le(() => r.disabled, () => {
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
const IS = ce({
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
    const t = Ct("select"), n = os(), r = N(() => [
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
    } = CS(e, o), { visible: m, hover: h } = ol(o), y = Yt().proxy;
    l.onOptionCreate(y), Wn(() => {
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
function LS(e, t, n, r, o, a) {
  return It((R(), U("li", {
    id: e.id,
    class: K(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: ot(e.selectOptionClick, ["stop"])
  }, [
    Ee(e.$slots, "default", {}, () => [
      v("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [cr, e.visible]
  ]);
}
var Ql = /* @__PURE__ */ at(IS, [["render", LS], ["__file", "option.vue"]]);
const OS = ce({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ke(cs), t = Ct("select"), n = N(() => e.props.popperClass), r = N(() => e.props.multiple), o = N(() => e.props.fitInputWidth), a = G("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return _t(() => {
      s(), Pn(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function xS(e, t, n, r, o, a) {
  return R(), U("div", {
    class: K([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Pt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), U("div", {
      key: 0,
      class: K(e.ns.be("dropdown", "header"))
    }, [
      Ee(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    Ee(e.$slots, "default"),
    e.$slots.footer ? (R(), U("div", {
      key: 1,
      class: K(e.ns.be("dropdown", "footer"))
    }, [
      Ee(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var RS = /* @__PURE__ */ at(OS, [["render", xS], ["__file", "select-dropdown.vue"]]);
const NS = (e, t) => {
  const { t: n } = Rl(), r = os(), o = Ct("select"), a = Ct("input"), s = zr({
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
    handleCompositionEnd: w
  } = uf({
    afterComposition: (M) => rt(M)
  }), { wrapperRef: x, isFocused: C, handleBlur: Y } = cf(m, {
    beforeFocus() {
      return J.value;
    },
    afterFocus() {
      e.automaticDropdown && !X.value && (X.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(M) {
      var ne, Ie;
      return ((ne = u.value) == null ? void 0 : ne.isFocusInsideContent(M)) || ((Ie = f.value) == null ? void 0 : Ie.isFocusInsideContent(M));
    },
    afterBlur() {
      X.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), X = G(!1), le = G(), { form: he, formItem: se } = as(), { inputId: _e } = Ml(e, {
    formItemContext: se
  }), { valueOnClear: ye, isEmptyValue: V } = I1(e), J = N(() => e.disabled || he?.disabled), H = N(() => $n(e.modelValue) ? e.modelValue.length > 0 : !V(e.modelValue)), fe = N(() => {
    var M;
    return (M = he?.statusIcon) != null ? M : !1;
  }), me = N(() => e.clearable && !J.value && s.inputHovering && H.value), Re = N(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), je = N(() => o.is("reverse", Re.value && X.value)), He = N(() => se?.validateState || ""), Q = N(() => rf[He.value]), q = N(() => e.remote ? 300 : 0), De = N(() => e.remote && !s.inputValue && s.options.size === 0), Ae = N(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Se.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Se = N(() => ue.value.filter((M) => M.visible).length), ue = N(() => {
    const M = Array.from(s.options.values()), ne = [];
    return s.optionValues.forEach((Ie) => {
      const Fe = M.findIndex((mt) => mt.value === Ie);
      Fe > -1 && ne.push(M[Fe]);
    }), ne.length >= M.length ? ne : M;
  }), te = N(() => Array.from(s.cachedOptions.values())), we = N(() => {
    const M = ue.value.filter((ne) => !ne.created).some((ne) => ne.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !M;
  }), Xe = () => {
    e.filterable && it(e.filterMethod) || e.filterable && e.remote && it(e.remoteMethod) || ue.value.forEach((M) => {
      var ne;
      (ne = M.updateOption) == null || ne.call(M, s.inputValue);
    });
  }, wt = la(), ct = N(() => ["small"].includes(wt.value) ? "small" : "default"), kt = N({
    get() {
      return X.value && !De.value;
    },
    set(M) {
      X.value = M;
    }
  }), St = N(() => {
    if (e.multiple && !Mn(e.modelValue))
      return wr(e.modelValue).length === 0 && !s.inputValue;
    const M = $n(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Mn(M) ? !s.inputValue : !0;
  }), st = N(() => {
    var M;
    const ne = (M = e.placeholder) != null ? M : n("el.select.placeholder");
    return e.multiple || !H.value ? ne : s.selectedLabel;
  }), ut = N(() => Xs ? null : "mouseenter");
  Le(() => e.modelValue, (M, ne) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", T("")), j(), !Wo(M, ne) && e.validateEvent && se?.validate("change").catch((Ie) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Le(() => X.value, (M) => {
    M ? T(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", M);
  }), Le(() => s.options.entries(), () => {
    Et && (j(), e.defaultFirstOption && (e.filterable || e.remote) && Se.value && O());
  }, {
    flush: "post"
  }), Le([() => s.hoveringIndex, ue], ([M]) => {
    We(M) && M > -1 ? le.value = ue.value[M] || {} : le.value = {}, ue.value.forEach((ne) => {
      ne.hover = le.value === ne;
    });
  }), Lu(() => {
    s.isBeforeHide || Xe();
  });
  const T = (M) => {
    s.previousQuery === M || A.value || (s.previousQuery = M, e.filterable && it(e.filterMethod) ? e.filterMethod(M) : e.filterable && e.remote && it(e.remoteMethod) && e.remoteMethod(M), e.defaultFirstOption && (e.filterable || e.remote) && Se.value ? vt(O) : vt(Pe));
  }, O = () => {
    const M = ue.value.filter((mt) => mt.visible && !mt.disabled && !mt.states.groupDisabled), ne = M.find((mt) => mt.created), Ie = M[0], Fe = ue.value.map((mt) => mt.value);
    s.hoveringIndex = An(Fe, ne || Ie);
  }, j = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const ne = $n(e.modelValue) ? e.modelValue[0] : e.modelValue, Ie = re(ne);
      s.selectedLabel = Ie.currentLabel, s.selected = [Ie];
      return;
    }
    const M = [];
    Mn(e.modelValue) || wr(e.modelValue).forEach((ne) => {
      M.push(re(ne));
    }), s.selected = M;
  }, re = (M) => {
    let ne;
    const Ie = rv(M);
    for (let Qt = s.cachedOptions.size - 1; Qt >= 0; Qt--) {
      const Dt = te.value[Qt];
      if (Ie ? kr(Dt.value, e.valueKey) === kr(M, e.valueKey) : Dt.value === M) {
        ne = {
          value: M,
          currentLabel: Dt.currentLabel,
          get isDisabled() {
            return Dt.isDisabled;
          }
        };
        break;
      }
    }
    if (ne)
      return ne;
    const Fe = Ie ? M.label : M ?? "";
    return {
      value: M,
      currentLabel: Fe
    };
  }, Pe = () => {
    s.hoveringIndex = ue.value.findIndex((M) => s.selected.some((ne) => qe(ne) === qe(M)));
  }, ve = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, E = () => {
    s.collapseItemWidth = L.value.getBoundingClientRect().width;
  }, B = () => {
    var M, ne;
    (ne = (M = u.value) == null ? void 0 : M.updatePopper) == null || ne.call(M);
  }, Te = () => {
    var M, ne;
    (ne = (M = f.value) == null ? void 0 : M.updatePopper) == null || ne.call(M);
  }, Ce = () => {
    s.inputValue.length > 0 && !X.value && (X.value = !0), T(s.inputValue);
  }, rt = (M) => {
    if (s.inputValue = M.target.value, e.remote)
      Mt();
    else
      return Ce();
  }, Mt = Vy(() => {
    Ce();
  }, q.value), Qe = (M) => {
    Wo(e.modelValue, M) || t(ur, M);
  }, Gn = (M) => jy(M, (ne) => {
    const Ie = s.cachedOptions.get(ne);
    return Ie && !Ie.disabled && !Ie.states.groupDisabled;
  }), mr = (M) => {
    if (e.multiple && M.code !== zn.delete && M.target.value.length <= 0) {
      const ne = wr(e.modelValue).slice(), Ie = Gn(ne);
      if (Ie < 0)
        return;
      const Fe = ne[Ie];
      ne.splice(Ie, 1), t(xt, ne), Qe(ne), t("remove-tag", Fe);
    }
  }, pn = (M, ne) => {
    const Ie = s.selected.indexOf(ne);
    if (Ie > -1 && !J.value) {
      const Fe = wr(e.modelValue).slice();
      Fe.splice(Ie, 1), t(xt, Fe), Qe(Fe), t("remove-tag", ne.value);
    }
    M.stopPropagation(), hr();
  }, Kn = (M) => {
    M.stopPropagation();
    const ne = e.multiple ? [] : ye.value;
    if (e.multiple)
      for (const Ie of s.selected)
        Ie.isDisabled && ne.push(Ie.value);
    t(xt, ne), Qe(ne), s.hoveringIndex = -1, X.value = !1, t("clear"), hr();
  }, Lr = (M) => {
    var ne;
    if (e.multiple) {
      const Ie = wr((ne = e.modelValue) != null ? ne : []).slice(), Fe = An(Ie, M);
      Fe > -1 ? Ie.splice(Fe, 1) : (e.multipleLimit <= 0 || Ie.length < e.multipleLimit) && Ie.push(M.value), t(xt, Ie), Qe(Ie), M.created && T(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(xt, M.value), Qe(M.value), X.value = !1;
    hr(), !X.value && vt(() => {
      mn(M);
    });
  }, An = (M = [], ne) => Mn(ne) ? -1 : an(ne.value) ? M.findIndex((Ie) => Wo(kr(Ie, e.valueKey), qe(ne))) : M.indexOf(ne.value), mn = (M) => {
    var ne, Ie, Fe, mt, Qt;
    const Dt = $n(M) ? M[0] : M;
    let Ft = null;
    if (Dt?.value) {
      const In = ue.value.filter((Xr) => Xr.value === Dt.value);
      In.length > 0 && (Ft = In[0].$el);
    }
    if (u.value && Ft) {
      const In = (mt = (Fe = (Ie = (ne = u.value) == null ? void 0 : ne.popperRef) == null ? void 0 : Ie.contentRef) == null ? void 0 : Fe.querySelector) == null ? void 0 : mt.call(Fe, `.${o.be("dropdown", "wrap")}`);
      In && O1(In, Ft);
    }
    (Qt = p.value) == null || Qt.handleScroll();
  }, Xt = (M) => {
    s.options.set(M.value, M), s.cachedOptions.set(M.value, M);
  }, on = (M, ne) => {
    s.options.get(M) === ne && s.options.delete(M);
  }, Or = N(() => {
    var M, ne;
    return (ne = (M = u.value) == null ? void 0 : M.popperRef) == null ? void 0 : ne.contentRef;
  }), qn = () => {
    s.isBeforeHide = !1, vt(() => {
      var M;
      (M = p.value) == null || M.update(), mn(s.selected);
    });
  }, hr = () => {
    var M;
    (M = m.value) == null || M.focus();
  }, xr = () => {
    var M;
    if (X.value) {
      X.value = !1, vt(() => {
        var ne;
        return (ne = m.value) == null ? void 0 : ne.blur();
      });
      return;
    }
    (M = m.value) == null || M.blur();
  }, Rr = (M) => {
    Kn(M);
  }, To = (M) => {
    if (X.value = !1, C.value) {
      const ne = new FocusEvent("focus", M);
      vt(() => Y(ne));
    }
  }, Yn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : X.value = !1;
  }, qr = () => {
    J.value || (Xs && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : X.value = !X.value);
  }, Eo = () => {
    if (!X.value)
      qr();
    else {
      const M = ue.value[s.hoveringIndex];
      M && !M.isDisabled && Lr(M);
    }
  }, qe = (M) => an(M.value) ? kr(M.value, e.valueKey) : M.value, hn = N(() => ue.value.filter((M) => M.visible).every((M) => M.isDisabled)), Yr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Nr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Cn = (M) => {
    if (!X.value) {
      X.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Se.value === 0 || A.value) && !hn.value) {
      M === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : M === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const ne = ue.value[s.hoveringIndex];
      (ne.isDisabled || !ne.visible) && Cn(M), vt(() => mn(le.value));
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
  return Pn(l, ve), Pn(g, B), Pn(x, B), Pn(b, Te), Pn(L, E), _t(() => {
    j();
  }), {
    inputId: _e,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: C,
    expanded: X,
    optionsArray: ue,
    hoverOption: le,
    selectSize: wt,
    filteredOptionsCount: Se,
    updateTooltip: B,
    updateTagTooltip: Te,
    debouncedOnInputChange: Mt,
    onInput: rt,
    deletePrevTag: mr,
    deleteTag: pn,
    deleteSelected: Kn,
    handleOptionSelect: Lr,
    scrollToOption: mn,
    hasModelValue: H,
    shouldShowPlaceholder: St,
    currentPlaceholder: st,
    mouseEnterEventName: ut,
    needStatusIcon: fe,
    showClose: me,
    iconComponent: Re,
    iconReverse: je,
    validateState: He,
    validateIcon: Q,
    showNewOption: we,
    updateOptions: Xe,
    collapseTagSize: ct,
    setSelected: j,
    selectDisabled: J,
    emptyText: Ae,
    handleCompositionStart: P,
    handleCompositionUpdate: I,
    handleCompositionEnd: w,
    onOptionCreate: Xt,
    onOptionDestroy: on,
    handleMenuEnter: qn,
    focus: hr,
    blur: xr,
    handleClearClick: Rr,
    handleClickOutside: To,
    handleEsc: Yn,
    toggleMenu: qr,
    selectOption: Eo,
    getValueKey: qe,
    navigateOptions: Cn,
    dropdownMenuVisible: kt,
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
var PS = ce({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ke(cs);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        $n(u) && u.forEach((f) => {
          var m, h, y, g;
          const b = (m = f?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? l(!jt(f.children) && !$n(f.children) && it((h = f.children) == null ? void 0 : h.default) ? (y = f.children) == null ? void 0 : y.default() : f.children) : b === "ElOption" ? i.push((g = f.props) == null ? void 0 : g.value) : $n(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), Wo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const $S = nt({
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
    type: ke(String),
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
    type: ke(Object),
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
    type: Dn,
    default: Pl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Dn,
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
    type: ke(String),
    values: ls,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: ke(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Yd,
  ...Kr(["ariaLabel"])
}), Tu = "ElSelect", MS = ce({
  name: Tu,
  componentName: Tu,
  components: {
    ElSelectMenu: RS,
    ElOption: Ql,
    ElOptions: PS,
    ElTag: hS,
    ElScrollbar: F_,
    ElTooltip: oS,
    ElIcon: Tt
  },
  directives: { ClickOutside: gS },
  props: $S,
  emits: [
    xt,
    ur,
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
      return $n(l) ? u ? l : f : u ? f : l;
    }), r = zr({
      ...ol(e),
      modelValue: n
    }), o = NS(r, t), { calculatorRef: a, inputStyle: s } = AS();
    Vn(cs, zr({
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
function DS(e, t, n, r, o, a) {
  const s = Mr("el-tag"), i = Mr("el-tooltip"), l = Mr("el-icon"), u = Mr("el-option"), f = Mr("el-options"), m = Mr("el-scrollbar"), h = Mr("el-select-menu"), y = vp("click-outside");
  return It((R(), U("div", {
    ref: "selectRef",
    class: K([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [bp(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
      default: pe(() => {
        var g;
        return [
          v("div", {
            ref: "wrapperRef",
            class: K([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: ot(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), U("div", {
              key: 0,
              ref: "prefixRef",
              class: K(e.nsSelect.e("prefix"))
            }, [
              Ee(e.$slots, "prefix")
            ], 2)) : ee("v-if", !0),
            v("div", {
              ref: "selectionRef",
              class: K([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Ee(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), U(pt, null, Nn(e.showTagList, (b) => (R(), U("div", {
                  key: e.getValueKey(b),
                  class: K(e.nsSelect.e("selected-item"))
                }, [
                  F(s, {
                    closable: !e.selectDisabled && !b.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Pt(e.tagStyle),
                    onClose: (L) => e.deleteTag(L, b)
                  }, {
                    default: pe(() => [
                      v("span", {
                        class: K(e.nsSelect.e("tags-text"))
                      }, [
                        Ee(e.$slots, "label", {
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
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (R(), ge(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: pe(() => [
                    v("div", {
                      ref: "collapseItemRef",
                      class: K(e.nsSelect.e("selected-item"))
                    }, [
                      F(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Pt(e.collapseTagStyle)
                      }, {
                        default: pe(() => [
                          v("span", {
                            class: K(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: pe(() => [
                    v("div", {
                      ref: "tagMenuRef",
                      class: K(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), U(pt, null, Nn(e.collapseTagList, (b) => (R(), U("div", {
                        key: e.getValueKey(b),
                        class: K(e.nsSelect.e("selected-item"))
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
                          default: pe(() => [
                            v("span", {
                              class: K(e.nsSelect.e("tags-text"))
                            }, [
                              Ee(e.$slots, "label", {
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
                class: K([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                It(v("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (b) => e.states.inputValue = b,
                  type: "text",
                  name: e.name,
                  class: K([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Pt(e.inputStyle),
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
                    yn(ot((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    yn(ot((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    yn(ot(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    yn(ot(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    yn(ot(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: ot(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Ko, e.states.inputValue]
                ]),
                e.filterable ? (R(), U("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: K(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), U("div", {
                key: 1,
                class: K([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? Ee(e.$slots, "label", {
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
              class: K(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (R(), ge(l, {
                key: 0,
                class: K([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: pe(() => [
                  (R(), ge(Kt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (R(), ge(l, {
                key: 1,
                class: K([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: pe(() => [
                  (R(), ge(Kt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (R(), ge(l, {
                key: 2,
                class: K([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: pe(() => [
                  (R(), ge(Kt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: pe(() => [
        F(h, { ref: "menuRef" }, {
          default: pe(() => [
            e.$slots.header ? (R(), U("div", {
              key: 0,
              class: K(e.nsSelect.be("dropdown", "header")),
              onClick: ot(() => {
              }, ["stop"])
            }, [
              Ee(e.$slots, "header")
            ], 10, ["onClick"])) : ee("v-if", !0),
            It(F(m, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: K([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: pe(() => [
                e.showNewOption ? (R(), ge(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                F(f, null, {
                  default: pe(() => [
                    Ee(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [cr, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), U("div", {
              key: 1,
              class: K(e.nsSelect.be("dropdown", "loading"))
            }, [
              Ee(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), U("div", {
              key: 2,
              class: K(e.nsSelect.be("dropdown", "empty"))
            }, [
              Ee(e.$slots, "empty", {}, () => [
                v("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (R(), U("div", {
              key: 3,
              class: K(e.nsSelect.be("dropdown", "footer")),
              onClick: ot(() => {
              }, ["stop"])
            }, [
              Ee(e.$slots, "footer")
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
var FS = /* @__PURE__ */ at(MS, [["render", DS], ["__file", "select.vue"]]);
const zS = ce({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ct("select"), n = G(null), r = Yt(), o = G([]);
    Vn(Nf, zr({
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
    }), p1(n, l, {
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
function BS(e, t, n, r, o, a) {
  return It((R(), U("ul", {
    ref: "groupRef",
    class: K(e.ns.be("group", "wrap"))
  }, [
    v("li", {
      class: K(e.ns.be("group", "title"))
    }, D(e.label), 3),
    v("li", null, [
      v("ul", {
        class: K(e.ns.b("group"))
      }, [
        Ee(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [cr, e.visible]
  ]);
}
var Pf = /* @__PURE__ */ at(zS, [["render", BS], ["__file", "option-group.vue"]]);
const VS = En(FS, {
  Option: Ql,
  OptionGroup: Pf
}), jS = ef(Ql);
ef(Pf);
const US = (e) => ["", ...Nl].includes(e), WS = nt({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: US
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Dn
  },
  activeActionIcon: {
    type: Dn
  },
  activeIcon: {
    type: Dn
  },
  inactiveIcon: {
    type: Dn
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
    type: ke(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Kr(["ariaLabel"])
}), HS = {
  [xt]: (e) => Tr(e) || jt(e) || We(e),
  [ur]: (e) => Tr(e) || jt(e) || We(e),
  [ir]: (e) => Tr(e) || jt(e) || We(e)
}, $f = "ElSwitch", GS = ce({
  name: $f
}), KS = /* @__PURE__ */ ce({
  ...GS,
  props: WS,
  emits: HS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = as(), a = la(), s = Ct("switch"), { inputId: i } = Ml(r, {
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
    Le(() => r.modelValue, () => {
      u.value = !0;
    });
    const L = N(() => u.value ? r.modelValue : !1), p = N(() => L.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(L.value) || (n(xt, r.inactiveValue), n(ur, r.inactiveValue), n(ir, r.inactiveValue)), Le(p, (w) => {
      var x;
      f.value.checked = w, r.validateEvent && ((x = o?.validate) == null || x.call(o, "change").catch((C) => void 0));
    });
    const A = () => {
      const w = p.value ? r.inactiveValue : r.activeValue;
      n(xt, w), n(ur, w), n(ir, w), vt(() => {
        f.value.checked = p.value;
      });
    }, P = () => {
      if (l.value)
        return;
      const { beforeChange: w } = r;
      if (!w) {
        A();
        return;
      }
      const x = w();
      [
        pc(x),
        Tr(x)
      ].includes(!0) || xl($f, "beforeChange must return type `Promise<boolean>` or `boolean`"), pc(x) ? x.then((Y) => {
        Y && A();
      }).catch((Y) => {
      }) : x && A();
    }, I = () => {
      var w, x;
      (x = (w = f.value) == null ? void 0 : w.focus) == null || x.call(w);
    };
    return _t(() => {
      f.value.checked = p.value;
    }), t({
      focus: I,
      checked: p
    }), (w, x) => (R(), U("div", {
      class: K(c(h)),
      onClick: ot(P, ["prevent"])
    }, [
      v("input", {
        id: c(i),
        ref_key: "input",
        ref: f,
        class: K(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(p),
        "aria-disabled": c(l),
        "aria-label": w.ariaLabel,
        name: w.name,
        "true-value": w.activeValue,
        "false-value": w.inactiveValue,
        disabled: c(l),
        tabindex: w.tabindex,
        onChange: A,
        onKeydown: yn(P, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !w.inlinePrompt && (w.inactiveIcon || w.inactiveText) ? (R(), U("span", {
        key: 0,
        class: K(c(y))
      }, [
        w.inactiveIcon ? (R(), ge(c(Tt), { key: 0 }, {
          default: pe(() => [
            (R(), ge(Kt(w.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !w.inactiveIcon && w.inactiveText ? (R(), U("span", {
          key: 1,
          "aria-hidden": c(p)
        }, D(w.inactiveText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0),
      v("span", {
        ref_key: "core",
        ref: m,
        class: K(c(s).e("core")),
        style: Pt(c(b))
      }, [
        w.inlinePrompt ? (R(), U("div", {
          key: 0,
          class: K(c(s).e("inner"))
        }, [
          w.activeIcon || w.inactiveIcon ? (R(), ge(c(Tt), {
            key: 0,
            class: K(c(s).is("icon"))
          }, {
            default: pe(() => [
              (R(), ge(Kt(c(p) ? w.activeIcon : w.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : w.activeText || w.inactiveText ? (R(), U("span", {
            key: 1,
            class: K(c(s).is("text")),
            "aria-hidden": !c(p)
          }, D(c(p) ? w.activeText : w.inactiveText), 11, ["aria-hidden"])) : ee("v-if", !0)
        ], 2)) : ee("v-if", !0),
        v("div", {
          class: K(c(s).e("action"))
        }, [
          w.loading ? (R(), ge(c(Tt), {
            key: 0,
            class: K(c(s).is("loading"))
          }, {
            default: pe(() => [
              F(c(nf))
            ]),
            _: 1
          }, 8, ["class"])) : c(p) ? Ee(w.$slots, "active-action", { key: 1 }, () => [
            w.activeActionIcon ? (R(), ge(c(Tt), { key: 0 }, {
              default: pe(() => [
                (R(), ge(Kt(w.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(p) ? ee("v-if", !0) : Ee(w.$slots, "inactive-action", { key: 2 }, () => [
            w.inactiveActionIcon ? (R(), ge(c(Tt), { key: 0 }, {
              default: pe(() => [
                (R(), ge(Kt(w.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !w.inlinePrompt && (w.activeIcon || w.activeText) ? (R(), U("span", {
        key: 1,
        class: K(c(g))
      }, [
        w.activeIcon ? (R(), ge(c(Tt), { key: 0 }, {
          default: pe(() => [
            (R(), ge(Kt(w.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !w.activeIcon && w.activeText ? (R(), U("span", {
          key: 1,
          "aria-hidden": !c(p)
        }, D(w.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var qS = /* @__PURE__ */ at(KS, [["__file", "switch.vue"]]);
const YS = En(qS), Mf = ["success", "info", "warning", "error"], Bt = af({
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
  appendTo: Et ? document.body : void 0
}), ZS = nt({
  customClass: {
    type: String,
    default: Bt.customClass
  },
  center: {
    type: Boolean,
    default: Bt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Bt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Bt.duration
  },
  icon: {
    type: Dn,
    default: Bt.icon
  },
  id: {
    type: String,
    default: Bt.id
  },
  message: {
    type: ke([
      String,
      Object,
      Function
    ]),
    default: Bt.message
  },
  onClose: {
    type: ke(Function),
    default: Bt.onClose
  },
  showClose: {
    type: Boolean,
    default: Bt.showClose
  },
  type: {
    type: String,
    values: Mf,
    default: Bt.type
  },
  plain: {
    type: Boolean,
    default: Bt.plain
  },
  offset: {
    type: Number,
    default: Bt.offset
  },
  zIndex: {
    type: Number,
    default: Bt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Bt.grouping
  },
  repeatNum: {
    type: Number,
    default: Bt.repeatNum
  }
}), XS = {
  destroy: () => !0
}, wn = yp([]), QS = (e) => {
  const t = wn.findIndex((o) => o.id === e), n = wn[t];
  let r;
  return t > 0 && (r = wn[t - 1]), { current: n, prev: r };
}, JS = (e) => {
  const { prev: t } = QS(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, eT = (e, t) => wn.findIndex((r) => r.id === e) > 0 ? 16 : t, tT = ce({
  name: "ElMessage"
}), nT = /* @__PURE__ */ ce({
  ...tT,
  props: ZS,
  emits: XS,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = s_, { ns: o, zIndex: a } = Xd("message"), { currentZIndex: s, nextZIndex: i } = a, l = G(), u = G(!1), f = G(0);
    let m;
    const h = N(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = N(() => {
      const C = n.type;
      return { [o.bm("icon", C)]: C && Ba[C] };
    }), g = N(() => n.icon || Ba[n.type] || ""), b = N(() => JS(n.id)), L = N(() => eT(n.id, n.offset) + b.value), p = N(() => f.value + L.value), A = N(() => ({
      top: `${L.value}px`,
      zIndex: s.value
    }));
    function P() {
      n.duration !== 0 && ({ stop: m } = Bd(() => {
        w();
      }, n.duration));
    }
    function I() {
      m?.();
    }
    function w() {
      u.value = !1;
    }
    function x({ code: C }) {
      C === zn.esc && w();
    }
    return _t(() => {
      P(), i(), u.value = !0;
    }), Le(() => n.repeatNum, () => {
      I(), P();
    }), Sn(document, "keydown", x), Pn(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: p,
      close: w
    }), (C, Y) => (R(), ge(ko, {
      name: c(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (X) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: pe(() => [
        It(v("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: l,
          class: K([
            c(o).b(),
            { [c(o).m(C.type)]: C.type },
            c(o).is("center", C.center),
            c(o).is("closable", C.showClose),
            c(o).is("plain", C.plain),
            C.customClass
          ]),
          style: Pt(c(A)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: P
        }, [
          C.repeatNum > 1 ? (R(), ge(c(cS), {
            key: 0,
            value: C.repeatNum,
            type: c(h),
            class: K(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(g) ? (R(), ge(c(Tt), {
            key: 1,
            class: K([c(o).e("icon"), c(y)])
          }, {
            default: pe(() => [
              (R(), ge(Kt(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          Ee(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (R(), U(pt, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              v("p", {
                class: K(c(o).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), U("p", {
              key: 0,
              class: K(c(o).e("content"))
            }, D(C.message), 3))
          ]),
          C.showClose ? (R(), ge(c(Tt), {
            key: 2,
            class: K(c(o).e("closeBtn")),
            onClick: ot(w, ["stop"])
          }, {
            default: pe(() => [
              F(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [cr, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var rT = /* @__PURE__ */ at(nT, [["__file", "message.vue"]]);
let oT = 1;
const Df = (e) => {
  const t = !e || jt(e) || qo(e) || it(e) ? { message: e } : e, n = {
    ...Bt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (jt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    kn(r) || (r = document.body), n.appendTo = r;
  }
  return Tr(gn.grouping) && !n.grouping && (n.grouping = gn.grouping), We(gn.duration) && n.duration === 3e3 && (n.duration = gn.duration), We(gn.offset) && n.offset === 16 && (n.offset = gn.offset), Tr(gn.showClose) && !n.showClose && (n.showClose = gn.showClose), n;
}, aT = (e) => {
  const t = wn.indexOf(e);
  if (t === -1)
    return;
  wn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, sT = ({ appendTo: e, ...t }, n) => {
  const r = `message_${oT++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), aT(f);
    },
    onDestroy: () => {
      La(null, a);
    }
  }, i = F(rT, s, it(s.message) || qo(s.message) ? {
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
  if (!Et)
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
  const r = sT(n, t);
  return wn.push(r), r.handler;
};
Mf.forEach((e) => {
  _o[e] = (t = {}, n) => {
    const r = Df(t);
    return _o({ ...r, type: e }, n);
  };
});
function lT(e) {
  for (const t of wn)
    (!e || e === t.props.type) && t.handler.close();
}
_o.closeAll = lT;
_o._context = null;
const iT = Jd(_o, "$message"), Ff = [
  "success",
  "info",
  "warning",
  "error"
], cT = nt({
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
    type: Dn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ke([
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
    type: ke(Function),
    default: () => {
    }
  },
  onClose: {
    type: ke(Function),
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
}), uT = {
  destroy: () => !0
}, dT = ce({
  name: "ElNotification"
}), fT = /* @__PURE__ */ ce({
  ...dT,
  props: cT,
  emits: uT,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Xd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = a_, l = G(!1);
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
      P === zn.delete || P === zn.backspace ? L() : P === zn.esc ? l.value && p() : b();
    }
    return _t(() => {
      b(), a(), l.value = !0;
    }), Sn(document, "keydown", A), t({
      visible: l,
      close: p
    }), (P, I) => (R(), ge(ko, {
      name: c(r).b("fade"),
      onBeforeLeave: P.onClose,
      onAfterLeave: (w) => P.$emit("destroy"),
      persisted: ""
    }, {
      default: pe(() => [
        It(v("div", {
          id: P.id,
          class: K([c(r).b(), P.customClass, c(h)]),
          style: Pt(c(g)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: b,
          onClick: P.onClick
        }, [
          c(m) ? (R(), ge(c(Tt), {
            key: 0,
            class: K([c(r).e("icon"), c(f)])
          }, {
            default: pe(() => [
              (R(), ge(Kt(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          v("div", {
            class: K(c(r).e("group"))
          }, [
            v("h2", {
              class: K(c(r).e("title")),
              textContent: D(P.title)
            }, null, 10, ["textContent"]),
            It(v("div", {
              class: K(c(r).e("content")),
              style: Pt(P.title ? void 0 : { margin: 0 })
            }, [
              Ee(P.$slots, "default", {}, () => [
                P.dangerouslyUseHTMLString ? (R(), U(pt, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  v("p", { innerHTML: P.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), U("p", { key: 0 }, D(P.message), 1))
              ])
            ], 6), [
              [cr, P.message]
            ]),
            P.showClose ? (R(), ge(c(Tt), {
              key: 0,
              class: K(c(r).e("closeBtn")),
              onClick: ot(p, ["stop"])
            }, {
              default: pe(() => [
                F(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [cr, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var pT = /* @__PURE__ */ at(fT, [["__file", "notification.vue"]]);
const Ua = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, nl = 16;
let mT = 1;
const wo = function(e = {}, t) {
  if (!Et)
    return { close: () => {
    } };
  (jt(e) || qo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Ua[n].forEach(({ vm: f }) => {
    var m;
    r += (((m = f.el) == null ? void 0 : m.offsetHeight) || 0) + nl;
  }), r += nl;
  const o = `notification_${mT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      hT(o, n, a);
    }
  };
  let i = document.body;
  kn(e.appendTo) ? i = e.appendTo : jt(e.appendTo) && (i = document.querySelector(e.appendTo)), kn(i) || (i = document.body);
  const l = document.createElement("div"), u = F(pT, s, it(s.message) ? s.message : qo(s.message) ? () => s.message : null);
  return u.appContext = Mn(t) ? wo._context : t, u.props.onDestroy = () => {
    La(null, l);
  }, La(u, l), Ua[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Ff.forEach((e) => {
  wo[e] = (t = {}, n) => ((jt(t) || qo(t)) && (t = {
    message: t
  }), wo({ ...t, type: e }, n));
});
function hT(e, t, n) {
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
function gT() {
  for (const e of Object.values(Ua))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
wo.closeAll = gT;
wo._context = null;
const vT = Jd(wo, "$notify"), tt = {
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
    r === "center" ? iT({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : vT({
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
}, bT = "snippets-code:developer-mode", zf = "snippets-code:frontend-diagnostics", yT = 240, Fo = "[REDACTED]", Ia = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Fo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Fo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Fo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Fo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Fo}`
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
}, _T = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, wT = () => {
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
    return localStorage.getItem(bT) === "true";
  } catch {
    return !1;
  }
}, kT = (e, t, n) => {
  if (!Jl() || typeof localStorage > "u") return;
  const r = wT();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: _T(),
    message: Ia(t),
    data: Bf(n)
  });
  try {
    localStorage.setItem(
      zf,
      JSON.stringify(r.slice(-yT))
    );
  } catch {
  }
}, ST = () => Jl(), TT = (e) => e === "warn" || e === "error" || !1 || !1 || Jl(), ka = (e, t, n) => {
  kT(e, t, n), TT(e) && Lt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Bf(n)
  }).catch(() => {
  });
}, Gt = {
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
    ST() && ka("debug", e, t);
  }
}, ET = { class: "sidebar-header" }, AT = { class: "sidebar-title-block" }, CT = ["title", "aria-pressed"], IT = { class: "sidebar-nav" }, LT = { class: "sidebar-nav-item sidebar-nav-item--search" }, OT = ["placeholder"], xT = { class: "sidebar-section recent-section" }, RT = { class: "section-title-row" }, NT = { class: "section-title" }, PT = ["title"], $T = {
  key: 0,
  class: "chat-list"
}, MT = ["onClick", "onKeydown"], DT = { class: "chat-item-title" }, FT = { class: "chat-item-time" }, zT = ["title", "onClick"], BT = {
  key: 1,
  class: "sidebar-empty"
}, VT = { class: "sidebar-service" }, jT = { class: "sidebar-service-row" }, UT = { class: "chat-panel" }, WT = ["title"], HT = {
  key: 0,
  class: "empty-state"
}, GT = { class: "empty-title" }, KT = { class: "empty-desc" }, qT = {
  key: 0,
  class: "date-divider"
}, YT = { class: "message-avatar" }, ZT = { key: 1 }, XT = { class: "message-body" }, QT = { class: "user-bubble" }, JT = {
  key: 0,
  class: "user-message-text"
}, e2 = {
  key: 1,
  class: "message-attachment-list"
}, t2 = ["title"], n2 = ["src", "alt"], r2 = {
  key: 1,
  class: "attachment-file-icon"
}, o2 = { key: 2 }, a2 = {
  key: 0,
  class: "message-actions"
}, s2 = ["title", "onClick"], l2 = ["title", "onClick"], i2 = ["title", "onClick"], c2 = { class: "assistant-head" }, u2 = { key: 0 }, d2 = {
  key: 0,
  class: "assistant-content-stack"
}, f2 = ["open"], p2 = { class: "reasoning-summary-title" }, m2 = { key: 0 }, h2 = ["innerHTML"], g2 = ["innerHTML"], v2 = {
  key: 1,
  class: "message-content loading-text"
}, b2 = {
  key: 0,
  class: "web-search-panel"
}, y2 = { class: "web-search-panel__header" }, _2 = {
  key: 0,
  class: "web-search-source-list"
}, w2 = ["href", "title"], k2 = {
  key: 1,
  class: "message-stats"
}, S2 = { class: "message-stats__context" }, T2 = { class: "message-stats__output" }, E2 = { class: "message-stats__elapsed" }, A2 = { class: "message-stats__speed" }, C2 = {
  key: 0,
  class: "message-stats-time"
}, I2 = {
  key: 2,
  class: "message-warning"
}, L2 = {
  key: 3,
  class: "message-actions"
}, O2 = ["title", "aria-label"], x2 = ["disabled", "title", "onClick"], R2 = ["disabled", "title", "onClick"], N2 = ["title", "onClick"], P2 = ["title", "onClick"], $2 = ["title", "onClick"], M2 = ["title", "onClick"], D2 = ["title", "onClick"], F2 = ["title"], z2 = {
  key: 0,
  class: "attachment-preview-list"
}, B2 = ["src", "alt"], V2 = {
  key: 1,
  class: "attachment-file-icon"
}, j2 = { class: "attachment-meta" }, U2 = ["title", "onClick"], W2 = ["placeholder"], H2 = { class: "input-toolbar" }, G2 = { class: "input-toolbar-left" }, K2 = ["title"], q2 = { class: "model-select-shell" }, Y2 = ["disabled"], Z2 = ["value"], X2 = {
  key: 0,
  value: ""
}, Q2 = ["title", "aria-pressed"], J2 = ["title", "aria-pressed"], eE = { class: "input-toolbar-right" }, tE = ["title", "aria-label"], nE = ["disabled", "title", "aria-label"], Eu = "snippets.localAi.webSearchEnabled", rE = 96, oE = 24, aE = 120, sE = 4096, xs = 160, lE = 420, iE = 1200, cE = 24e3, uE = 1800, dE = 5200, fE = 90, pE = 1e3, mE = /* @__PURE__ */ ce({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = ra(), n = G(""), r = G([]), o = G(""), a = G(!1), s = G(""), i = G([]), l = G(!1), u = G(!1), f = G(!1), m = G(!1), y = G((() => {
      try {
        return localStorage.getItem(Eu) === "true";
      } catch {
        return !1;
      }
    })()), g = G(!1), b = G(!0), L = G(!1), p = G(null), A = G(null), P = G(null), I = G(""), w = G(null), x = G(null), C = G(null), Y = G(Date.now());
    let X = null, le = null, he = null, se = !1;
    const _e = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), J = /今天|今日|现在|当前|日期|时间|星期|天气|温度|气温|today|current|date|time|weather|temperature/i, H = /天气|温度|气温|体感|湿度|降雨|下雨|风速|weather|temperature|humidity|rain|wind/i, fe = (d) => `${Date.now()}-${d}-${Math.random().toString(16).slice(2, 8)}`, me = (d) => d.type === "root", Re = (d) => new Map(d.map((S) => [S.id, S])), je = (d) => d.find(me), He = (d, S) => {
      if (!S) return null;
      const k = Re(d);
      let $ = k.get(S);
      const z = /* @__PURE__ */ new Set();
      for (; $?.childIds?.length && !z.has($.id); )
        z.add($.id), $ = k.get($.childIds[$.childIds.length - 1]);
      return $?.id ?? null;
    }, Q = (d, S) => {
      if (d.some(me)) {
        const Z = d.map((be) => ({
          ...be,
          type: be.type ?? "text",
          parentId: be.parentId ?? null,
          childIds: be.childIds ?? []
        })), oe = je(Z);
        return {
          messages: Z,
          currentNodeId: He(Z, Z.at(-1)?.id) ?? oe?.id ?? null
        };
      }
      const k = {
        id: fe("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: S,
        parentId: null,
        childIds: []
      }, $ = [k];
      let z = k.id;
      for (const Z of d) {
        const oe = {
          ...Z,
          role: Z.role === "system" ? "assistant" : Z.role,
          type: "text",
          parentId: z,
          childIds: []
        };
        $.find((Oe) => Oe.id === z)?.childIds?.push(oe.id), $.push(oe), z = oe.id;
      }
      return { messages: $, currentNodeId: z };
    }, q = (d, S) => {
      if (!S) return [];
      const k = Re(d), $ = [], z = /* @__PURE__ */ new Set();
      let Z = k.get(S);
      for (; Z && !z.has(Z.id); )
        z.add(Z.id), $.unshift(Z), Z = Z.parentId ? k.get(Z.parentId) : void 0;
      return $;
    }, De = (d) => {
      if (!d) return [];
      const S = d.currentNodeId ?? He(d.messages, je(d.messages)?.id);
      return q(d.messages, S).filter(
        (k) => !me(k)
      );
    }, Ae = (d) => {
      if (!d) return [];
      const S = Re(d.messages), k = ($) => He(d.messages, $) ?? $;
      return De(d).map(($) => {
        const Z = ($.parentId ? S.get($.parentId) : void 0)?.childIds ?? [$.id];
        return {
          message: $,
          siblingLeafNodeIds: Z.map(k),
          siblingCurrentIndex: Math.max(0, Z.indexOf($.id))
        };
      });
    }, Se = (d, S) => {
      const k = je(d.messages), $ = S.parentId ?? d.currentNodeId ?? k?.id ?? null, z = {
        ...S,
        type: "text",
        parentId: $,
        childIds: []
      };
      if (d.messages.push(z), $) {
        const Z = d.messages.find((oe) => oe.id === $);
        Z && (Z.childIds = [...Z.childIds ?? [], z.id]);
      }
      return d.currentNodeId = z.id, z;
    }, ue = N(
      () => (!!s.value.trim() || i.value.length > 0) && !l.value
    ), te = N(() => w.value?.healthy ? t("localAi.serviceHealthy") : w.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), we = N(
      () => r.value.find((d) => d.id === o.value) ?? null
    ), Xe = N(() => De(we.value)), wt = N(() => Ae(we.value)), ct = (d) => d ? d.split(/[\\/]+/).pop() ?? d : "", kt = N(
      () => ct(I.value) || ct(w.value?.modelPath) || ct(A.value?.modelPath) || t("localAi.localModel")
    ), St = N(() => P.value?.mainModels ?? []), st = N(() => !!A.value?.mmprojPath), ut = N(
      () => A.value?.ctxSize ?? w.value?.ctxSize ?? 4096
    ), T = N(() => {
      const d = ut.value, S = A.value?.maxTokens ?? 0;
      return S > 0 ? Math.min(
        Math.max(S, 512),
        Math.max(512, d - 512)
      ) : Math.min(
        Math.max(sE, Math.floor(d * 0.5)),
        Math.max(512, d - 512)
      );
    }), O = N(
      () => Math.max(512, ut.value - T.value)
    ), j = N(() => {
      const d = kt.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(d);
    }), re = N(() => {
      const d = n.value.trim().toLowerCase();
      return r.value.filter(
        (S) => !d || S.title.toLowerCase().includes(d) || S.messages.some(
          (k) => !me(k) && k.content.toLowerCase().includes(d)
        )
      ).slice().sort((S, k) => k.updatedAt.localeCompare(S.updatedAt));
    }), Pe = () => t("localAi.now"), ve = () => {
      const d = (/* @__PURE__ */ new Date()).toISOString(), S = {
        id: fe("root"),
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
        updatedAtLabel: Pe(),
        currentNodeId: S.id,
        messages: [S]
      };
    }, E = () => {
      const d = x.value;
      return d ? d.scrollHeight - d.scrollTop - d.clientHeight <= rE : !0;
    }, B = () => {
      const d = E();
      b.value = d, L.value = !d;
    }, Te = () => {
      B();
    }, Ce = async (d = {}) => {
      await vt(), !(!x.value || !d.force && !b.value) && (se = se || d.force === !0, he === null && (he = window.requestAnimationFrame(() => {
        he = null;
        const k = x.value, $ = se;
        if (se = !1, !k || !$ && !b.value) return;
        const z = Math.max(0, k.scrollHeight - k.clientHeight);
        Math.abs(k.scrollTop - z) > 1 && (k.scrollTop = z), B();
      })));
    }, rt = () => {
      b.value = !0, Ce({ force: !0 });
    }, Mt = async () => {
      try {
        A.value = await pd(), I.value = A.value.modelPath ?? "", P.value = await md(A.value), j.value || (m.value = !1);
      } catch (d) {
        Gt.warn("[LocalAI] refresh chat config failed", d);
      }
    }, Qe = async () => {
      u.value = !0;
      try {
        w.value = await hd();
      } catch (d) {
        Gt.warn("[LocalAI] refresh chat status failed", d);
      } finally {
        u.value = !1;
      }
    }, Gn = async () => {
      try {
        const d = await ag();
        r.value = d.map((S) => {
          const k = S.messages?.length ? S.messages : S.turns.map((z) => ({
            id: z.id,
            role: z.role,
            content: z.content,
            createdAt: z.createdAt
          })), $ = Q(
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
        Gt.warn("[LocalAI] refresh histories failed", d);
      }
    }, mr = async () => {
      await Promise.all([Mt(), Qe(), Gn()]);
    }, pn = async () => {
      const d = we.value;
      if (!d) return;
      const S = De(d).map((k) => ({
        id: k.id,
        role: k.role,
        content: k.content,
        createdAt: k.createdAt
      }));
      await sg({
        id: d.id,
        title: d.title,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        turns: S,
        currentNodeId: d.currentNodeId,
        messages: d.messages
      });
    }, Kn = () => {
      const d = ve();
      r.value.unshift(d), o.value = d.id, s.value = "";
    }, Lr = () => {
      we.value || Kn();
    }, An = (d) => {
      o.value = d;
      const S = we.value;
      S && !S.currentNodeId && (S.currentNodeId = He(S.messages, je(S.messages)?.id) ?? null), b.value = !0, Ce({ force: !0 });
    }, mn = async (d) => {
      r.value = r.value.filter((S) => S.id !== d), await lg(d), o.value === d && (o.value = r.value[0]?.id ?? "");
    }, Xt = () => {
      C.value?.click();
    }, on = (d, S) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: d.name,
      type: S,
      mime: d.type || "application/octet-stream",
      size: d.size,
      status: "pending"
    }), Or = async (d) => {
      if (ys(d)) {
        const k = on(d, "image");
        if (d.size > mg)
          return {
            ...k,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...k,
            status: "parsed",
            dataUrl: await vg(d)
          };
        } catch ($) {
          return { ...k, status: "error", error: String($) };
        }
      }
      if (Qi(d)) {
        const k = on(d, "text");
        if (d.size > pg)
          return {
            ...k,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const $ = await bg(d);
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
        error: gg(d) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, qn = async (d) => {
      const S = Array.from(d), k = fg - i.value.length;
      if (k <= 0) {
        tt.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      S.length > k && tt.msg(t("localAi.attachmentLimit"), "warning");
      const $ = S.slice(0, k), z = $.map(
        (Z) => on(
          Z,
          ys(Z) ? "image" : Qi(Z) ? "text" : "unsupported"
        )
      );
      i.value.push(...z), await Promise.all(
        $.map(async (Z, oe) => {
          const be = await Or(Z), Oe = i.value.findIndex(
            (ht) => ht.id === z[oe].id
          );
          Oe >= 0 && (i.value[Oe] = be);
        })
      );
    }, hr = async (d) => {
      const S = d.target;
      S.files?.length && await qn(S.files), S.value = "";
    }, xr = async (d) => {
      d.dataTransfer?.files.length && await qn(d.dataTransfer.files);
    }, Rr = async (d) => {
      const S = Array.from(d.clipboardData?.files ?? []);
      if (!S.length) return;
      const k = S.filter(ys);
      k.length && (d.preventDefault(), await qn(k));
    }, To = (d) => {
      i.value = i.value.filter(
        (S) => S.id !== d
      );
    }, Yn = (d) => d.status === "pending" ? t("localAi.attachmentPending") : d.status === "error" ? d.error ?? "" : d.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), qr = async () => {
      if (!(!A.value || !I.value)) {
        A.value.modelPath = I.value;
        try {
          A.value = await Bo(A.value), w.value?.running && (w.value = await gd()), tt.msg(t("localAi.modelChanged"));
        } catch (d) {
          tt.msg(`${t("localAi.configSaveFailed")}: ${d}`, "error");
        }
      }
    }, Eo = (d) => {
      let S = 0;
      for (let k = 0; k < d.length; k += 1)
        S = S * 31 + d.charCodeAt(k) >>> 0;
      return `code-${d.length}-${S.toString(16)}`;
    }, qe = (d) => d.includes("<pre>") ? d.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (S, k, $) => {
        const z = document.createElement("textarea");
        z.innerHTML = $;
        const Z = z.value, oe = Eo(Z);
        if (ye.set(oe, Z), ye.size > aE) {
          const Oe = ye.keys().next().value;
          typeof Oe == "string" && ye.delete(Oe);
        }
        const be = k ? ` class="${k}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${oe}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${be}>${$}</code></pre></div>`;
      }
    ) : d, hn = (d, S = {}) => {
      const k = S.cache !== !1, $ = S.enhanceCodeBlocks !== !1;
      if (k) {
        const oe = _e.get(d);
        if (oe) return oe;
      }
      const z = Qg(Ge.parse(d, { async: !1 })), Z = $ ? qe(z) : z;
      if (!k) return Z;
      if (_e.set(d, Z), _e.size > oE) {
        const oe = _e.keys().next().value;
        typeof oe == "string" && _e.delete(oe);
      }
      return Z;
    }, Yr = (d, S) => {
      const k = Ao(d, S);
      if (!d.streaming) return hn(k);
      const $ = V.get(d.id), z = S === "reasoning" ? "reasoningHtml" : "answerHtml", Z = S === "reasoning" ? "reasoning" : "answer";
      if ($?.[Z] === k && $[z])
        return $[z];
      const oe = hn(k, {
        cache: !1,
        enhanceCodeBlocks: !1
      });
      return $?.[Z] === k && ($[z] = oe), oe;
    }, Nr = async (d) => {
      const $ = d.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!$) return;
      const z = ye.get($);
      if (z)
        try {
          await navigator.clipboard.writeText(z), tt.msg(t("localAi.codeCopied"));
        } catch (Z) {
          tt.msg(`${t("common.copy")}: ${Z}`, "error");
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
    }, Zr = (d) => Cn(d).reasoning, Pr = (d) => Cn(d).answer, Ao = (d, S) => {
      const { reasoning: k, answer: $ } = Cn(d.content);
      if (!d.streaming)
        return V.delete(d.id), S === "reasoning" ? k : $;
      const z = Date.now(), Z = V.get(d.id), oe = d.content.length >= cE, be = oe ? iE : lE, Oe = oe ? dE : uE;
      if (!Z || z - Z.updatedAt >= be || d.content.length - Z.source.length >= Oe || !Z.reasoning && !!k || !Z.answer && !!$) {
        const gt = {
          source: d.content,
          reasoning: k,
          answer: $,
          updatedAt: z
        };
        return V.set(d.id, gt), S === "reasoning" ? k : $;
      }
      return S === "reasoning" ? Z.reasoning : Z.answer;
    }, Ut = (d) => !!Pr(d.content), M = (d) => !!(d.streaming && d.allowThinking && d.reasoningStartedAt && !d.reasoningEndedAt && !Ut(d)), ne = (d) => {
      if (!d.reasoningStartedAt) return "0.00";
      const S = d.reasoningEndedAt ?? (d.streaming ? Y.value : Date.now());
      return Math.max(0, (S - d.reasoningStartedAt) / 1e3).toFixed(2);
    }, Ie = (d) => !d.reasoningStartedAt && d.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: ne(d)
    }), Fe = (d) => new Date(
      d.createdAt || we.value?.updatedAt || Date.now()
    ), mt = (d) => Fe(d).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Qt = (d, S) => Fe(d).toDateString() === Fe(S).toDateString(), Dt = (d) => Fe(d).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Ft = (d) => {
      const S = wt.value[d]?.message;
      if (!S) return !1;
      if (d === 0) return !Dt(S);
      const k = wt.value[d - 1]?.message;
      return k ? Qt(k, S) ? Fe(S).getTime() - Fe(k).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, In = (d) => {
      const S = Fe(d), k = S.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), $ = S.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Dt(d) ? $ : `${k} ${$}`;
    }, Xr = (d) => d.streaming ? M(d) ? t("localAi.thinking") : t("localAi.generating") : mt(d), us = (d) => d.webSearchStatus === "searching" ? Co() : d.allowThinking && !d.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Co = () => t("localAi.webSearchSearching"), Io = (d) => d.webSearchStatus === "searching" ? Co() : d.webSearchStatus === "done" && d.webSearchResults?.length ? t("localAi.webSearchUsed", {
      count: d.webSearchResults.length
    }) : d.webSearchStatus === "empty" ? t("localAi.webSearchNoResults") : d.webSearchStatus === "failed" ? `${t("localAi.webSearchFailed")}: ${d.webSearchError ?? ""}` : "", Qr = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(
          Eu,
          String(y.value)
        );
      } catch (d) {
        Gt.warn("[LocalAI] save web search state failed", d);
      }
    }, gr = (d, S) => {
      d.allowThinking && (S.includes("<think>") && !d.reasoningStartedAt && (d.reasoningStartedAt = Date.now()), S.includes("</think>") && !d.reasoningEndedAt && (d.reasoningEndedAt = Date.now()));
    }, ie = (d) => {
      const S = d.trim();
      if (!S) return 0;
      const k = (S.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Z = (S.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((oe, be) => /^[A-Za-z0-9_]+$/.test(be) ? oe + Math.max(1, Math.ceil(be.length / 4)) : oe + 1, 0);
      return Math.max(1, Math.ceil(k + Z));
    }, _ = (d) => Math.max(0, Math.ceil(d.length / 4)), W = (d) => Array.isArray(d) ? d.filter((S) => S.type === "text").map((S) => S.text).join(`
`) : d, ae = (d) => {
      const S = d.attachments?.filter(
        (Z) => Z.status === "parsed"
      ) ?? [], k = yg(
        d.content,
        S
      ), $ = S.filter(
        (Z) => Z.type === "image" && Z.dataUrl
      );
      if (!$.length) return k;
      const z = [{ type: "text", text: k }];
      for (const Z of $)
        z.push({
          type: "image_url",
          image_url: {
            url: Z.dataUrl ?? ""
          }
        });
      return z;
    }, Ne = (d) => ie(
      d.map((S) => {
        const k = W(S.content);
        return `${S.role}: ${k}`;
      }).join(`
`)
    ), $e = (d, S) => {
      const k = Math.max(240, S * 4);
      return d.length <= k ? d : `${t("localAi.previousAnswerTail")}

${d.slice(-k)}`;
    }, ze = (d) => String(d).padStart(2, "0"), Rt = (d = /* @__PURE__ */ new Date()) => {
      const S = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${-d.getTimezoneOffset() / 60 >= 0 ? "+" : ""}${-d.getTimezoneOffset() / 60}`, k = [
        d.getFullYear(),
        ze(d.getMonth() + 1),
        ze(d.getDate())
      ].join("-"), $ = [
        ze(d.getHours()),
        ze(d.getMinutes()),
        ze(d.getSeconds())
      ].join(":"), z = d.toLocaleDateString("zh-CN", { weekday: "long" });
      return { isoDate: k, localTime: $, timeZone: S, weekday: z };
    }, ln = () => {
      const { isoDate: d, localTime: S, timeZone: k, weekday: $ } = Rt();
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
    }, Wt = (d) => {
      const S = d.filter(($) => $.role === "system").map(($) => W($.content).trim()).filter(Boolean), k = d.filter(
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
    }, Jr = (d, S) => {
      const k = [];
      let $ = 0;
      for (let z = d.length - 1; z >= 0; z -= 1) {
        const Z = d[z], oe = Ne([Z]);
        if ($ + oe <= S || k.length === 0) {
          k.unshift(Z), $ += oe;
          continue;
        }
        const be = S - $;
        if (Z.role !== "assistant" || typeof Z.content != "string" || be < xs)
          continue;
        let Oe = be, ht = {
          ...Z,
          content: $e(Z.content, Oe)
        }, gt = Ne([ht]);
        for (; gt > be && Oe > xs; )
          Oe = Math.max(
            xs,
            Math.floor(Oe * 0.7)
          ), ht = {
            ...Z,
            content: $e(Z.content, Oe)
          }, gt = Ne([ht]);
        $ + gt <= S && (k.unshift(ht), $ += gt);
      }
      return k;
    }, dt = () => {
      const d = ln(), S = Ne([d]), k = Math.max(
        512,
        O.value - S
      );
      return [
        d,
        ...Jr(
          Xe.value.filter(($) => !$.streaming && $.role !== "system").map(($) => ({
            role: $.role,
            content: $.role === "user" ? ae($) : $.content
          })),
          k
        )
      ];
    }, Lo = (d) => {
      const S = we.value?.messages.find(
        (k) => k.id === d.parentId
      );
      return S?.role === "user" ? S.content.trim() : "";
    }, ua = (d) => Lo(d), Vf = (d) => {
      if (!J.test(d)) return d;
      const { isoDate: S, weekday: k } = Rt();
      return `${d} ${S} ${k}`;
    }, vr = (d, S) => typeof d == "number" ? `${d}${S}` : "未知", jf = (d) => {
      const { isoDate: S, localTime: k, timeZone: $, weekday: z } = Rt();
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
    }, Uf = (d) => {
      const { isoDate: S, localTime: k, timeZone: $, weekday: z } = Rt(), Z = d.results.map((oe, be) => {
        const Oe = oe.content.trim();
        return [
          `[${be + 1}] ${oe.title}`,
          `URL: ${oe.url}`,
          Oe ? `摘要: ${Oe}` : ""
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
          Z
        ].join(`
`)
      };
    }, Wf = async (d, S) => {
      if (S.webSearchStatus !== "searching") return d;
      const k = Lo(S);
      if (!k) return d;
      const $ = Vf(k);
      S.webSearchStatus = "searching", S.webSearchQuery = $, S.webSearchResults = [], S.webSearchError = "";
      const z = [];
      if (H.test(k))
        try {
          const oe = await og({
            query: ua(S)
          });
          z.push(jf(oe));
        } catch (oe) {
          Gt.warn("[LocalAI] weather context failed", oe);
        }
      const Z = (oe, be) => {
        if (!be.length) return Wt(oe);
        const Oe = oe.filter(
          (Je) => Je.role === "system"
        ), ht = oe.filter(
          (Je) => Je.role !== "system"
        ), gt = [...Oe, ...be], eo = Ne(gt), br = Math.max(
          512,
          O.value - eo
        );
        return Wt([
          ...gt,
          ...Jr(ht, br)
        ]);
      };
      try {
        const oe = await bd({
          query: $,
          maxResults: A.value?.webSearchMaxResults
        });
        if (!oe.results.length)
          return S.webSearchStatus = "empty", Z(d, z);
        S.webSearchStatus = "done", S.webSearchResults = oe.results;
        const be = Uf(oe);
        return Z(d, [
          ...z,
          be
        ]);
      } catch (oe) {
        return S.webSearchStatus = "failed", S.webSearchError = String(oe), Gt.warn("[LocalAI] web search failed", oe), Z(d, z);
      }
    }, Hf = (d) => {
      const S = A.value?.maxTokens ?? 0;
      if (S > 0) return S;
      const k = Ne(d);
      return Math.max(256, ut.value - k - 128);
    }, ti = (d) => Math.max(
      1,
      d.stats?.ctxSize ?? d.contextSize ?? A.value?.ctxSize ?? w.value?.ctxSize ?? 4096
    ), $r = (d) => {
      const S = Y.value, k = d.stats?.promptTokens ?? d.promptTokens ?? 0, $ = d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? _(d.content) : ie(d.content)), z = ti(d), Z = Math.min(
        d.stats?.totalTokens ?? k + $,
        z
      ), oe = Math.max(
        0,
        (d.stats?.generationTimeMs ?? d.elapsedMs ?? S - Fe(d).getTime()) / 1e3
      ), be = d.stats?.tokensPerSecond ?? (oe > 0 ? $ / oe : 0);
      return {
        context: Z,
        contextMax: z,
        contextPercent: Math.min(100, Math.round(Z / z * 100)),
        output: $,
        outputMax: (A.value?.maxTokens ?? 0) > 0 ? String(A.value?.maxTokens) : "∞",
        seconds: oe.toFixed(1),
        speed: be.toFixed(1)
      };
    }, ni = (d) => d.repetitionStopped ? t("localAi.repetitionStopped") : d.interrupted ? t("localAi.streamInterrupted") : d.stopped ? t("localAi.generationStopped") : (d.stats?.totalTokens ?? (d.promptTokens ?? 0) + (d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? _(d.content) : ie(d.content)))) >= ti(d) - 8 ? t("localAi.contextLimitReached") : d.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", ri = (d) => {
      const S = String(d);
      return /exceeds the available context size|exceed_context_size/i.test(S) ? t("localAi.contextExceeded") : S;
    }, Gf = (d) => {
      const S = d.replace(/\s+/g, " ").trim();
      if (S.length < 900) return !1;
      const $ = S.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((be) => be.toLowerCase()) ?? [];
      if ($.length < 140) return !1;
      const z = $.slice(-120), Z = /* @__PURE__ */ new Map();
      for (const be of z) Z.set(be, (Z.get(be) ?? 0) + 1);
      if (Z.size / z.length < 0.12 && [...Z.values()].some((be) => be >= 56))
        return !0;
      for (let be = 1; be <= 4; be += 1) {
        const Oe = $.slice(-be).join("\0");
        let ht = 1;
        for (let gt = $.length - be * 2; gt >= 0 && $.slice(gt, gt + be).join("\0") === Oe; gt -= be)
          ht += 1;
        if (ht >= Math.max(24, Math.ceil(72 / be))) return !0;
      }
      return !1;
    }, oi = () => {
      le || (Y.value = Date.now(), le = setInterval(() => {
        Y.value = Date.now();
      }, pE));
    }, ds = () => {
      le && (clearInterval(le), le = null, Y.value = Date.now());
    }, ai = async (d) => {
      const S = performance.now(), k = vd();
      let $ = dt(), z = "", Z = null, oe = null, be = !1, Oe = !1;
      if (p.value = k, f.value = !1, $ = await Wf($, d), f.value) {
        d.streaming = !1, d.stopped = !0, d.elapsedMs = performance.now() - S, p.value = null;
        return;
      }
      $ = Wt($), d.promptTokens = Ne($), d.contextSize = ut.value;
      const ht = async () => {
        if (!z) {
          Z = null, oe?.(), oe = null;
          return;
        }
        const Je = f.value ? 1200 : z.length > 4e3 ? 900 : z.length > 1200 ? 520 : z.length > 240 ? 180 : 64;
        d.content += z.slice(0, Je), z = z.slice(Je), d.estimatedCompletionTokens = _(
          d.content
        ), !Oe && !f.value && Gf(d.content) && (Oe = !0, f.value = !0, d.repetitionStopped = !0, bs(k).catch(
          (Oo) => Gt.warn("[LocalAI] repetition stop failed", Oo)
        )), await Ce(), Z = window.setTimeout(() => {
          ht().catch(
            (Oo) => Gt.warn("[LocalAI] stream pump failed", Oo)
          );
        }, fE);
      }, gt = (Je) => {
        Je && (gr(d, Je), z += Je, Z === null && (Z = window.setTimeout(() => {
          ht().catch(
            (Oo) => Gt.warn("[LocalAI] stream pump failed", Oo)
          );
        }, 32)));
      }, eo = async () => {
        !z && Z === null || await new Promise((Je) => {
          oe = Je;
        });
      }, br = await rg(
        {
          messages: $,
          maxTokens: Hf($),
          enableThinking: d.allowThinking === !0
        },
        (Je) => {
          be = !0, gt(Je);
        },
        {
          requestId: k,
          onStats: (Je) => {
            d.stats = {
              ...d.stats ?? {},
              ...Je
            }, Je.ctxSize && (d.contextSize = Je.ctxSize), Je.completionTokens !== void 0 && (d.estimatedCompletionTokens = Je.completionTokens), Y.value = Date.now();
          }
        }
      ).catch(async (Je) => {
        throw await eo(), Je;
      });
      if (!be)
        gt(br.content);
      else if (!f.value) {
        const Je = d.content.length + z.length;
        br.content.length > Je && gt(br.content.slice(Je));
      }
      await eo(), !f.value && br.content && d.content !== br.content && (d.content = br.content), d.estimatedCompletionTokens = d.stats?.completionTokens ?? _(d.content), V.delete(d.id), d.streaming = !1, d.elapsedMs = performance.now() - S, d.stopped = f.value, d.interrupted = !1, d.error = "", Y.value = Date.now(), p.value = null;
    }, Kf = async () => {
      const d = p.value;
      if (!(!l.value || !d || f.value)) {
        f.value = !0;
        try {
          await bs(d);
        } catch (S) {
          Gt.warn("[LocalAI] cancel stream failed", S);
        }
      }
    }, qf = (d) => {
      d.isComposing || d.keyCode === 229 || d.key === "Enter" && !d.shiftKey && (d.preventDefault(), si());
    }, Yf = () => {
      if (!s.value.trim() && !i.value.length) return !1;
      if (i.value.find(
        ($) => $.status === "pending"
      ))
        return tt.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const S = i.value.find(
        ($) => $.status === "error" || $.type === "unsupported"
      );
      return S ? (tt.msg(
        `${t("localAi.attachmentErrorBlock")}: ${S.name}`,
        "warning"
      ), !1) : i.value.some(
        ($) => $.type === "image"
      ) && !st.value ? (tt.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, si = async () => {
      const d = s.value.trim();
      if (l.value || !Yf()) return;
      Lr();
      const S = (/* @__PURE__ */ new Date()).toISOString(), k = i.value.map((Oe) => ({
        ...Oe
      })), $ = d || k[0]?.name || "", z = we.value;
      if (!z) return;
      const Z = Se(z, {
        id: fe("user"),
        role: "user",
        content: d,
        createdAt: S,
        attachments: k
      }), oe = Se(z, {
        id: fe("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: Z.id,
        streaming: !0,
        allowThinking: m.value && j.value,
        webSearchStatus: y.value ? "searching" : void 0,
        contextSize: ut.value,
        promptTokens: Ne(dt())
      });
      s.value = "", i.value = [], l.value = !0, oi(), await Ce({ force: !0 });
      const be = performance.now();
      try {
        await ai(oe), we.value && (we.value.title = we.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : we.value.title, we.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), we.value.updatedAtLabel = new Date(
          we.value.updatedAt
        ).toLocaleString(), await pn()), await Qe();
      } catch (Oe) {
        if (!f.value) {
          s.value = d, i.value = k;
          const ht = ri(Oe);
          tt.msg(`${t("localAi.chatFailed")}: ${ht}`, "error"), oe.error = ht, oe.interrupted = !!oe.content.trim(), oe.interrupted || (oe.content = ht), we.value && (we.value.title = we.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : we.value.title, we.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), we.value.updatedAtLabel = new Date(
            we.value.updatedAt
          ).toLocaleString(), await pn());
        }
        oe.streaming = !1, V.delete(oe.id), oe.elapsedMs = performance.now() - be;
      } finally {
        l.value = !1, p.value = null, ds(), await Ce();
      }
    }, Zf = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Xf = (d) => {
      const S = new Date(d), k = /* @__PURE__ */ new Date(), $ = k.getTime() - S.getTime(), z = 24 * 60 * 60 * 1e3;
      return S.toDateString() === k.toDateString() ? S.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : $ < z * 2 ? t("localAi.yesterday") : $ < z * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor($ / z))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor($ / (z * 7)))
      });
    }, li = async (d) => {
      try {
        await navigator.clipboard.writeText(d.content), tt.msg(t("localAi.copied"));
      } catch (S) {
        tt.msg(`${t("common.operationFailed")}: ${S}`, "error");
      }
    }, Qf = (d, S) => {
      const k = Re(d), $ = /* @__PURE__ */ new Set([S]), z = (Z) => {
        const oe = k.get(Z);
        for (const be of oe?.childIds ?? [])
          $.add(be), z(be);
      };
      return z(S), $;
    }, ii = async (d) => {
      const S = we.value;
      if (!S) return;
      const k = S.messages.find((z) => z.id === d);
      if (!k || me(k)) return;
      const $ = Qf(S.messages, d);
      S.messages = S.messages.filter((z) => !$.has(z.id)).map((z) => ({
        ...z,
        childIds: (z.childIds ?? []).filter((Z) => !$.has(Z))
      })), S.currentNodeId && $.has(S.currentNodeId) && (S.currentNodeId = He(S.messages, k.parentId) ?? je(S.messages)?.id ?? null), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
    }, ci = (d) => {
      s.value = d.content, we.value && d.parentId && (we.value.currentNodeId = d.parentId);
    }, ui = (d) => t("localAi.messageVersion", {
      current: d.siblingCurrentIndex + 1,
      total: d.siblingLeafNodeIds.length
    }), di = (d, S) => {
      const k = we.value;
      if (!k) return;
      const $ = d.siblingCurrentIndex + S, z = d.siblingLeafNodeIds[$];
      z && (k.currentNodeId = z, b.value = !0, Ce({ force: !0 }));
    }, Jf = async (d) => {
      const S = we.value;
      if (!S || l.value) return;
      const k = S.messages.find((Oe) => Oe.id === d);
      if (!k || k.role !== "assistant") return;
      const $ = q(S.messages, k.id);
      if (!$.length) return;
      const z = (/* @__PURE__ */ new Date()).toISOString(), Z = /* @__PURE__ */ new Map(), oe = $.map((Oe, ht) => {
        const gt = fe(ht === 0 ? "root" : Oe.role);
        return Z.set(Oe.id, gt), {
          ...Oe,
          id: gt,
          parentId: Oe.parentId ? Z.get(Oe.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Oe.attachments?.map((eo) => ({ ...eo }))
        };
      });
      for (let Oe = 0; Oe < oe.length - 1; Oe += 1)
        oe[Oe].childIds = [oe[Oe + 1].id];
      const be = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${S.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: z,
        updatedAt: z,
        updatedAtLabel: Pe(),
        currentNodeId: oe.at(-1)?.id ?? null,
        messages: oe
      };
      r.value.unshift(be), o.value = be.id, s.value = "", i.value = [], b.value = !0, await pn(), await Ce({ force: !0 }), tt.msg(t("localAi.branchCreated"));
    }, ep = async (d) => {
      const S = we.value;
      if (!S || l.value) return;
      const k = S.messages.find((Z) => Z.id === d);
      if (!k || k.role !== "assistant" || !k.parentId) return;
      S.currentNodeId = k.parentId;
      const $ = Se(S, {
        id: fe("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: k.parentId,
        streaming: !0,
        allowThinking: m.value && j.value,
        webSearchStatus: y.value ? "searching" : void 0,
        promptTokens: Ne(dt())
      });
      l.value = !0, oi(), await Ce({ force: !0 });
      const z = performance.now();
      try {
        await ai($), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
      } catch (Z) {
        if (!f.value) {
          const oe = ri(Z);
          tt.msg(`${t("localAi.chatFailed")}: ${oe}`, "error"), $.error = oe, $.interrupted = !!$.content.trim(), $.interrupted || ($.content = oe), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await pn();
        }
        $.streaming = !1, V.delete($.id), $.elapsedMs = performance.now() - z;
      } finally {
        l.value = !1, p.value = null, ds(), await Ce();
      }
    };
    return _t(async () => {
      await mr(), X = setInterval(() => {
        Qe().catch(
          (d) => Gt.warn("[LocalAI] status timer failed", d)
        );
      }, 8e3);
    }), Le(j, (d) => {
      d || (m.value = !1);
    }), Wa(() => {
      X && clearInterval(X), he !== null && (window.cancelAnimationFrame(he), he = null), p.value && bs(p.value), _e.clear(), ye.clear(), V.clear(), ds();
    }), (d, S) => (R(), U(
      "main",
      {
        class: K([
          "local-ai-chat-shell",
          c(a) ? "local-ai-chat-shell--sidebar-collapsed" : ""
        ])
      },
      [
        v(
          "aside",
          {
            class: K([
              "chat-sidebar",
              c(a) ? "chat-sidebar--collapsed" : ""
            ])
          },
          [
            v("header", ET, [
              v("div", AT, [
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
              ], 8, CT)
            ]),
            v("div", IT, [
              v("button", {
                class: "sidebar-nav-item",
                type: "button",
                onClick: Kn
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
              v("label", LT, [
                F(c(ms), {
                  theme: "outline",
                  size: "18"
                }),
                It(v("input", {
                  "onUpdate:modelValue": S[1] || (S[1] = (k) => co(n) ? n.value = k : null),
                  placeholder: c(t)("localAi.searchHistory")
                }, null, 8, OT), [
                  [Ko, c(n)]
                ])
              ])
            ]),
            v("section", xT, [
              v("div", RT, [
                v(
                  "div",
                  NT,
                  D(c(t)("localAi.recent")),
                  1
                  /* TEXT */
                ),
                v("button", {
                  class: "icon-action-btn",
                  type: "button",
                  title: c(t)("plugins.refresh"),
                  onClick: mr
                }, [
                  F(c(gi), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, PT)
              ]),
              c(re).length ? (R(), U("div", $T, [
                (R(!0), U(
                  pt,
                  null,
                  Nn(c(re), (k) => (R(), U("div", {
                    key: k.id,
                    class: K([
                      "chat-list-item",
                      c(o) === k.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: ($) => An(k.id),
                    onKeydown: yn(ot(($) => An(k.id), ["prevent"]), ["enter"])
                  }, [
                    v(
                      "span",
                      DT,
                      D(k.title),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      FT,
                      D(Xf(k.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    v("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: ot(($) => mn(k.id), ["stop"])
                    }, [
                      F(c(da), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, zT)
                  ], 42, MT))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (R(), U(
                "div",
                BT,
                D(c(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            v("footer", VT, [
              v("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: Zf
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
              v("div", jT, [
                v(
                  "span",
                  {
                    class: K([
                      "status-pill",
                      c(w)?.healthy ? "ready" : "stopped"
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
                      " " + D(c(te)),
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
        v("section", UT, [
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
          ], 8, WT)) : ee("v-if", !0),
          v(
            "div",
            {
              ref_key: "messageListRef",
              ref: x,
              class: "message-list",
              onScroll: Te
            },
            [
              c(Xe).length ? ee("v-if", !0) : (R(), U("div", HT, [
                F(c(vi), {
                  theme: "outline",
                  size: "28"
                }),
                v(
                  "div",
                  GT,
                  D(c(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                v(
                  "div",
                  KT,
                  D(c(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (R(!0), U(
                pt,
                null,
                Nn(c(wt), (k, $) => (R(), U(
                  pt,
                  {
                    key: k.message.id
                  },
                  [
                    Ft($) ? (R(), U("div", qT, [
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
                        class: K(["message-row", `message-row--${k.message.role}`])
                      },
                      [
                        v("div", YT, [
                          k.message.role === "assistant" ? (R(), ge(c(vi), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (R(), U(
                            "span",
                            ZT,
                            D(c(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        v("div", XT, [
                          k.message.role === "user" ? (R(), U(
                            pt,
                            { key: 0 },
                            [
                              v("div", QT, [
                                k.message.content ? (R(), U(
                                  "div",
                                  JT,
                                  D(k.message.content),
                                  1
                                  /* TEXT */
                                )) : ee("v-if", !0),
                                k.message.attachments?.length ? (R(), U("div", e2, [
                                  (R(!0), U(
                                    pt,
                                    null,
                                    Nn(k.message.attachments, (z) => (R(), U(
                                      "div",
                                      {
                                        key: z.id,
                                        class: K([
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
                                          }, null, 8, n2)
                                        ], 8, t2)) : (R(), U(
                                          "span",
                                          r2,
                                          D(z.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        z.type === "image" && z.dataUrl ? ee("v-if", !0) : (R(), U(
                                          "span",
                                          o2,
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
                              k.message.streaming ? ee("v-if", !0) : (R(), U("div", a2, [
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (z) => li(k.message)
                                }, [
                                  F(c(pi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, s2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (z) => ci(k.message)
                                }, [
                                  F(c(ps), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, l2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (z) => ii(k.message.id)
                                }, [
                                  F(c(da), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, i2)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (R(), U(
                            pt,
                            { key: 1 },
                            [
                              v("div", c2, [
                                v(
                                  "span",
                                  null,
                                  D(c(kt)),
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? (R(), U(
                                  "small",
                                  u2,
                                  D(Xr(k.message)),
                                  1
                                  /* TEXT */
                                )) : ee("v-if", !0)
                              ]),
                              v(
                                "div",
                                {
                                  class: K(["assistant-card", {
                                    "assistant-card--streaming": k.message.streaming
                                  }])
                                },
                                [
                                  k.message.content ? (R(), U("div", d2, [
                                    k.message.allowThinking && Zr(k.message.content) ? (R(), U("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: k.message.streaming && M(k.message)
                                    }, [
                                      v("summary", null, [
                                        v("span", p2, [
                                          F(c(fi), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          en(
                                            " " + D(Ie(k.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        k.message.streaming ? (R(), U(
                                          "small",
                                          m2,
                                          D(M(k.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : ee("v-if", !0)
                                      ]),
                                      v("div", {
                                        class: "message-content markdown-body",
                                        onClick: Nr,
                                        innerHTML: Yr(k.message, "reasoning")
                                      }, null, 8, h2)
                                    ], 8, f2)) : ee("v-if", !0),
                                    Pr(k.message.content) ? (R(), U("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: Nr,
                                      innerHTML: Yr(k.message, "answer")
                                    }, null, 8, g2)) : ee("v-if", !0)
                                  ])) : (R(), U(
                                    "div",
                                    v2,
                                    D(us(k.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              Io(k.message) || k.message.webSearchResults?.length ? (R(), U("div", b2, [
                                v("div", y2, [
                                  F(c(ms), {
                                    theme: "outline",
                                    size: "14"
                                  }),
                                  v(
                                    "span",
                                    null,
                                    D(Io(k.message)),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                k.message.webSearchResults?.length ? (R(), U("div", _2, [
                                  (R(!0), U(
                                    pt,
                                    null,
                                    Nn(k.message.webSearchResults, (z, Z) => (R(), U("a", {
                                      key: `${z.url}-${Z}`,
                                      class: "web-search-source",
                                      href: z.url,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      title: z.url
                                    }, [
                                      v(
                                        "span",
                                        null,
                                        D(Z + 1),
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
                                    ], 8, w2))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])) : ee("v-if", !0)
                              ])) : ee("v-if", !0),
                              k.message.content ? (R(), U("div", k2, [
                                v(
                                  "span",
                                  S2,
                                  D(c(t)("localAi.contextLabel")) + ": " + D($r(k.message).context) + "/" + D($r(k.message).contextMax) + " (" + D($r(k.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  T2,
                                  D(c(t)("localAi.outputLabel")) + ": " + D($r(k.message).output) + "/" + D($r(k.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  E2,
                                  D($r(k.message).seconds) + "s ",
                                  1
                                  /* TEXT */
                                ),
                                v(
                                  "span",
                                  A2,
                                  D($r(k.message).speed) + " t/s ",
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? ee("v-if", !0) : (R(), U(
                                  "span",
                                  C2,
                                  D(mt(k.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : ee("v-if", !0),
                              ni(k.message) ? (R(), U(
                                "div",
                                I2,
                                D(ni(k.message)),
                                1
                                /* TEXT */
                              )) : ee("v-if", !0),
                              k.message.streaming ? ee("v-if", !0) : (R(), U("div", L2, [
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
                                  }, " ‹ ", 8, x2),
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
                                  }, " › ", 8, R2)
                                ], 8, O2)) : ee("v-if", !0),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (z) => li(k.message)
                                }, [
                                  F(c(pi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, N2),
                                k.message.role === "assistant" ? (R(), U("button", {
                                  key: 1,
                                  type: "button",
                                  title: c(t)("localAi.regenerate"),
                                  onClick: (z) => ep(k.message.id)
                                }, [
                                  F(c(gi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, P2)) : ee("v-if", !0),
                                k.message.role === "assistant" ? (R(), U("button", {
                                  key: 2,
                                  type: "button",
                                  title: c(t)("localAi.branchChat"),
                                  onClick: (z) => Jf(k.message.id)
                                }, [
                                  F(c(Ep), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, $2)) : ee("v-if", !0),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (z) => ci(k.message)
                                }, [
                                  F(c(ps), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, M2),
                                v("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (z) => ii(k.message.id)
                                }, [
                                  F(c(da), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, D2)
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
            onClick: rt
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
          ], 8, F2)) : ee("v-if", !0),
          v(
            "form",
            {
              class: K([
                "chat-input-card",
                c(g) ? "chat-input-card--focused" : ""
              ]),
              onDragover: S[6] || (S[6] = ot(() => {
              }, ["prevent"])),
              onDrop: ot(xr, ["prevent"]),
              onSubmit: ot(si, ["prevent"]),
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
                  onChange: hr
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              c(i).length ? (R(), U("div", z2, [
                (R(!0), U(
                  pt,
                  null,
                  Nn(c(i), (k) => (R(), U(
                    "div",
                    {
                      key: k.id,
                      class: K([
                        "attachment-preview-item",
                        `attachment-preview-item--${k.status}`
                      ])
                    },
                    [
                      k.type === "image" && k.dataUrl ? (R(), U("img", {
                        key: 0,
                        src: k.dataUrl,
                        alt: k.name
                      }, null, 8, B2)) : (R(), U(
                        "span",
                        V2,
                        D(k.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      v("span", j2, [
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
                          D(c(hg)(k.size)) + " · " + D(Yn(k)),
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
                      ], 8, U2)
                    ],
                    2
                    /* CLASS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : ee("v-if", !0),
              It(v("textarea", {
                "onUpdate:modelValue": S[3] || (S[3] = (k) => co(s) ? s.value = k : null),
                class: "chat-input",
                rows: "2",
                placeholder: c(t)("localAi.chatPlaceholder"),
                onKeydown: qf,
                onPaste: Rr
              }, null, 40, W2), [
                [Ko, c(s)]
              ]),
              v("div", H2, [
                v("div", G2, [
                  v("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: c(t)("localAi.addAttachment"),
                    onClick: Xt
                  }, [
                    F(c(Ap), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, K2),
                  v("label", q2, [
                    It(v("select", {
                      "onUpdate:modelValue": S[4] || (S[4] = (k) => co(I) ? I.value = k : null),
                      disabled: c(l) || !c(St).length,
                      onChange: qr
                    }, [
                      (R(!0), U(
                        pt,
                        null,
                        Nn(c(St), (k) => (R(), U("option", {
                          key: k,
                          value: k
                        }, D(ct(k)), 9, Z2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      c(St).length ? ee("v-if", !0) : (R(), U(
                        "option",
                        X2,
                        D(c(kt)),
                        1
                        /* TEXT */
                      ))
                    ], 40, Y2), [
                      [_p, c(I)]
                    ]),
                    F(c(mi), {
                      theme: "outline",
                      size: "14"
                    })
                  ]),
                  v("button", {
                    class: K([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      c(y) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: c(y) ? c(t)("localAi.webSearchEnabled") : c(t)("localAi.webSearchDisabled"),
                    "aria-pressed": c(y),
                    onClick: Qr
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
                  ], 10, Q2),
                  c(j) ? (R(), U("button", {
                    key: 0,
                    class: K([
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
                  ], 10, J2)) : ee("v-if", !0)
                ]),
                v("div", eE, [
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
                    onClick: Kf
                  }, [
                    F(c(Ip), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, tE)) : (R(), U("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !c(ue),
                    title: c(t)("localAi.send"),
                    "aria-label": c(t)("localAi.send")
                  }, [
                    F(c(Cp), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, nE))
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
}, hE = /* @__PURE__ */ ei(mE, [["__scopeId", "data-v-9814a324"]]), gE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hE
}, Symbol.toStringTag, { value: "Module" }));
async function Au(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Lt("plugin:dialog|open", { options: e });
}
const vE = ["disabled"], bE = {
  key: 0,
  class: "custom-button__loading"
}, yE = /* @__PURE__ */ ce({
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
      class: K([
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
      e.loading ? (R(), U("div", bE, r[1] || (r[1] = [
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
      Ee(n.$slots, "default", {}, void 0, !0)
    ], 10, vE));
  }
}), Xn = /* @__PURE__ */ ei(yE, [["__scopeId", "data-v-9497085f"]]), _E = { class: "settings-panel local-ai-settings-shell" }, wE = { class: "local-ai-hero panel-card" }, kE = { class: "panel-title" }, SE = { class: "hero-desc" }, TE = { class: "header-actions" }, EE = {
  key: 0,
  class: "settings-grid"
}, AE = { class: "summary-panel panel-card" }, CE = { class: "status-strip" }, IE = { class: "memory-card__header" }, LE = { class: "memory-metrics" }, OE = { class: "bottleneck-row" }, xE = { class: "summary-card" }, RE = { class: "summary-card__title" }, NE = { class: "summary-card__desc" }, PE = { class: "service-controls" }, $E = { class: "service-url" }, ME = { class: "summary-card" }, DE = { class: "summary-card__title" }, FE = { class: "summary-card__desc" }, zE = { class: "summary-meta" }, BE = { class: "form-panel panel-card" }, VE = { class: "settings-section" }, jE = { class: "settings-section__header" }, UE = { class: "field-stack" }, WE = ["title"], HE = { class: "path-control" }, GE = ["title"], KE = ["title"], qE = ["title"], YE = { class: "path-control" }, ZE = ["placeholder"], XE = { class: "settings-section grid-two" }, QE = { class: "settings-section__header" }, JE = { class: "param-grid" }, eA = ["title"], tA = ["title"], nA = ["title"], rA = ["title"], oA = ["title"], aA = ["title"], sA = { class: "settings-section grid-two" }, lA = { class: "settings-section__header" }, iA = { class: "switch-grid" }, cA = ["title"], uA = ["title"], dA = ["title"], fA = { class: "settings-section grid-two" }, pA = { class: "settings-section__header" }, mA = { class: "switch-grid switch-grid--two" }, hA = ["title"], gA = ["title"], vA = ["title"], bA = ["title"], yA = { class: "settings-section grid-two" }, _A = { class: "settings-section__header" }, wA = { class: "param-grid param-grid--three" }, kA = ["title"], SA = ["title"], TA = ["title"], EA = ["title"], AA = ["title"], CA = ["title"], IA = ["title"], LA = ["title"], OA = { class: "settings-section grid-two" }, xA = { class: "settings-section__header" }, RA = { class: "param-grid" }, NA = ["title"], PA = ["title"], $A = { class: "settings-footer" }, MA = ["title"], DA = /* @__PURE__ */ ce({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = ra(), n = G(null), r = G(null), o = G(null), a = G(null), s = G(!1), i = G(!1), l = G(!1), u = G(!1), f = G(!1), m = G(!1);
    let h = null;
    const y = N(() => !!a.value?.selectedModelPath), g = N(() => !!n.value?.mmprojPath), b = N({
      get: () => n.value?.modelPath ?? "",
      set: (Q) => {
        n.value && (n.value.modelPath = Q || void 0);
      }
    }), L = N({
      get: () => n.value?.mmprojPath ?? "",
      set: (Q) => {
        n.value && (n.value.mmprojPath = Q || void 0);
      }
    }), p = N(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), A = N(
      () => y.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), P = N(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), I = (Q) => Q.split(/[\\/]+/).pop() ?? Q, w = N(() => {
      const q = I(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return q ? Number(q[1]) : 4;
    }), x = N(() => {
      const Q = n.value;
      if (!Q)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown"),
          level: "warn"
        };
      const q = Math.max(1.4, w.value * 0.92), De = Math.min(1, Math.max(0, Q.gpuLayers) / 32), Ae = Q.ctxSize / 8192 * 0.38 * (Q.kvOffload ? 1 : 0.12), Se = Q.batchSize / 512 * 0.18, ue = q * De + Ae + Se, te = q * (1 - De) + Q.ctxSize / 8192 * 0.22, we = ue + te, Xe = Q.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : Q.ctxSize >= 32768 || Q.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced"), wt = we >= 24 || Q.ctxSize >= 32768 || Q.batchSize >= 2048 ? "danger" : we >= 16 || Q.ctxSize >= 16384 || Q.batchSize >= 1024 ? "warn" : "ok";
      return {
        gpuGb: ue.toFixed(2),
        totalGb: we.toFixed(2),
        bottleneck: Xe,
        level: wt
      };
    }), C = (Q) => t(`localAi.paramHints.${Q}`), Y = (Q) => ({
      "tone-ok": Q === "ok",
      "tone-warn": Q === "warn",
      "tone-danger": Q === "danger"
    }), X = (Q) => Y(Q ? "ok" : "danger"), le = async () => {
      r.value = await eg();
    }, he = async () => {
      o.value = await hd();
    }, se = async () => {
      n.value && (a.value = await md(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, _e = async () => {
      s.value = !0;
      try {
        n.value = await pd(), await Promise.all([
          le(),
          se(),
          he()
        ]);
      } catch (Q) {
        Gt.error("[LocalAI] refresh settings failed", Q), tt.msg(`${t("localAi.refreshFailed")}: ${Q}`, "error");
      } finally {
        s.value = !1;
      }
    }, ye = async () => {
      if (n.value)
        try {
          await Bo(n.value);
        } catch (Q) {
          Gt.warn("[LocalAI] autosave failed", Q);
        }
    }, V = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Bo(n.value), await Promise.all([
            le(),
            se(),
            he()
          ]), tt.msg(t("localAi.configSaved"));
        } catch (Q) {
          tt.msg(`${t("localAi.configSaveFailed")}: ${Q}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, J = async () => {
      const Q = await Au({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !Q || Array.isArray(Q) || !n.value || (n.value.modelDir = Q, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await se());
    }, H = async () => {
      const Q = await Au({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !Q || Array.isArray(Q) || !n.value || (n.value.runtimePath = Q, await ye(), await le());
    }, fe = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Bo(n.value), o.value = await tg(n.value), tt.msg(t("localAi.serviceStarted"));
        } catch (Q) {
          tt.msg(`${t("localAi.serviceStartFailed")}: ${Q}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, me = async () => {
      u.value = !0;
      try {
        await V(), o.value = await gd(), tt.msg(t("localAi.serviceRestarted"));
      } catch (Q) {
        tt.msg(`${t("localAi.serviceRestartFailed")}: ${Q}`, "error");
      } finally {
        u.value = !1;
      }
    }, Re = async () => {
      f.value = !0;
      try {
        await ng(), await he(), tt.msg(t("localAi.serviceStoppedMsg"));
      } catch (Q) {
        tt.msg(`${t("localAi.serviceStopFailed")}: ${Q}`, "error");
      } finally {
        f.value = !1;
      }
    }, je = async () => {
      if (n.value) {
        m.value = !0;
        try {
          n.value = await Bo(n.value);
          const Q = await bd({
            query: t("localAi.webSearchTestQuery"),
            maxResults: 1
          });
          tt.msg(
            Q.results.length ? t("localAi.webSearchTestSuccess", {
              count: Q.results.length
            }) : t("localAi.webSearchTestEmpty")
          );
        } catch (Q) {
          Gt.warn("[LocalAI] web search test failed", Q), tt.msg(`${t("localAi.webSearchTestFailed")}: ${Q}`, "error");
        } finally {
          m.value = !1;
        }
      }
    }, He = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return _t(async () => {
      await _e(), h = setInterval(() => {
        he().catch(
          (Q) => Gt.warn("[LocalAI] status timer failed", Q)
        );
      }, 15e3);
    }), Wa(() => {
      h && clearInterval(h);
    }), (Q, q) => {
      const De = jS, Ae = VS, Se = ES, ue = YS;
      return R(), U("div", _E, [
        v("header", wE, [
          v("div", null, [
            v(
              "h3",
              kE,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            v(
              "p",
              SE,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          v("div", TE, [
            F(c(Xn), {
              size: "small",
              plain: "",
              onClick: He
            }, {
              default: pe(() => [
                en(
                  D(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            F(c(Xn), {
              size: "small",
              loading: c(s),
              onClick: _e
            }, {
              default: pe(() => [
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
        c(n) ? (R(), U("main", EE, [
          v("aside", AE, [
            v("div", CE, [
              v(
                "div",
                {
                  class: K(["status-item", Y(c(r)?.available ? "ok" : "danger")])
                },
                [
                  q[27] || (q[27] = v(
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
                  class: K(["status-item", Y(c(y) ? "ok" : "danger")])
                },
                [
                  q[28] || (q[28] = v(
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
                  class: K([
                    "status-item",
                    Y(
                      c(o)?.healthy ? "ok" : c(o)?.running ? "warn" : "danger"
                    )
                  ])
                },
                [
                  q[29] || (q[29] = v(
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
            v(
              "section",
              {
                class: K(["memory-card", Y(c(x).level)])
              },
              [
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
                    q[30] || (q[30] = v(
                      "span",
                      null,
                      "GPU",
                      -1
                      /* HOISTED */
                    )),
                    v(
                      "b",
                      {
                        class: K(Y(c(x).level))
                      },
                      D(c(x).gpuGb) + " GB ",
                      3
                      /* TEXT, CLASS */
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
                      {
                        class: K(Y(c(x).level))
                      },
                      D(c(x).totalGb) + " GB ",
                      3
                      /* TEXT, CLASS */
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
                    {
                      class: K(Y(c(x).level))
                    },
                    D(c(x).bottleneck),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            ),
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
                F(c(Xn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: fe
                }, {
                  default: pe(() => [
                    en(
                      D(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(Xn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: me
                }, {
                  default: pe(() => [
                    en(
                      D(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(Xn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: Re
                }, {
                  default: pe(() => [
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
                    {
                      class: K(X(c(r)?.available))
                    },
                    D(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    3
                    /* TEXT, CLASS */
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
                    {
                      class: K(X(c(y)))
                    },
                    D(c(y) ? c(t)("common.yes") : c(t)("common.no")),
                    3
                    /* TEXT, CLASS */
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
                    {
                      class: K(X(!!c(b)))
                    },
                    D(c(b) ? c(t)("common.yes") : c(t)("common.no")),
                    3
                    /* TEXT, CLASS */
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
                    {
                      class: K(X(!!c(L)))
                    },
                    D(c(L) ? c(t)("common.yes") : c(t)("common.no")),
                    3
                    /* TEXT, CLASS */
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
                    {
                      class: K(X(c(g)))
                    },
                    D(c(g) ? c(t)("common.yes") : c(t)("common.no")),
                    3
                    /* TEXT, CLASS */
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
                    {
                      class: K(X(!!c(o)?.healthy))
                    },
                    D(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    3
                    /* TEXT, CLASS */
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
                    It(v(
                      "input",
                      {
                        "onUpdate:modelValue": q[0] || (q[0] = (te) => c(n).modelDir = te),
                        class: "text-input",
                        onChange: se
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Ko, c(n).modelDir]
                    ]),
                    F(c(Xn), {
                      size: "small",
                      plain: "",
                      onClick: J
                    }, {
                      default: pe(() => [
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
                  F(Ae, {
                    modelValue: c(b),
                    "onUpdate:modelValue": q[1] || (q[1] = (te) => co(b) ? b.value = te : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ye
                  }, {
                    default: pe(() => [
                      (R(!0), U(
                        pt,
                        null,
                        Nn(c(a)?.mainModels ?? [], (te) => (R(), ge(De, {
                          key: te,
                          label: I(te),
                          value: te
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
                  F(Ae, {
                    modelValue: c(L),
                    "onUpdate:modelValue": q[2] || (q[2] = (te) => co(L) ? L.value = te : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ye
                  }, {
                    default: pe(() => [
                      (R(!0), U(
                        pt,
                        null,
                        Nn(c(a)?.mmprojModels ?? [], (te) => (R(), ge(De, {
                          key: te,
                          label: I(te),
                          value: te
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
                    It(v("input", {
                      "onUpdate:modelValue": q[3] || (q[3] = (te) => c(n).runtimePath = te),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, ZE), [
                      [Ko, c(n).runtimePath]
                    ]),
                    F(c(Xn), {
                      size: "small",
                      plain: "",
                      onClick: H
                    }, {
                      default: pe(() => [
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
                    "onUpdate:modelValue": q[4] || (q[4] = (te) => c(n).ctxSize = te),
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
                    "onUpdate:modelValue": q[5] || (q[5] = (te) => c(n).gpuLayers = te),
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
                    "onUpdate:modelValue": q[6] || (q[6] = (te) => c(n).threads = te),
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
                    "onUpdate:modelValue": q[7] || (q[7] = (te) => c(n).batchSize = te),
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
                    "onUpdate:modelValue": q[8] || (q[8] = (te) => c(n).ubatchSize = te),
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
                    "onUpdate:modelValue": q[9] || (q[9] = (te) => c(n).mainGpu = te),
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
                  F(ue, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": q[10] || (q[10] = (te) => c(n).flashAttn = te)
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
                  F(ue, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": q[11] || (q[11] = (te) => c(n).kvOffload = te)
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
                  F(ue, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": q[12] || (q[12] = (te) => c(n).mmap = te)
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
                  F(ue, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": q[13] || (q[13] = (te) => c(n).autoStartOnRequest = te)
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
                  F(ue, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": q[14] || (q[14] = (te) => c(n).keepAlive = te)
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
                    "onUpdate:modelValue": q[15] || (q[15] = (te) => c(n).idleTimeoutMinutes = te),
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
                    "onUpdate:modelValue": q[16] || (q[16] = (te) => c(n).requestTimeoutSecs = te),
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
                    "onUpdate:modelValue": q[17] || (q[17] = (te) => c(n).temperature = te),
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
                    "onUpdate:modelValue": q[18] || (q[18] = (te) => c(n).topP = te),
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
                    "onUpdate:modelValue": q[19] || (q[19] = (te) => c(n).topK = te),
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
                    "onUpdate:modelValue": q[20] || (q[20] = (te) => c(n).minP = te),
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
                    "onUpdate:modelValue": q[21] || (q[21] = (te) => c(n).repeatPenalty = te),
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
                    "onUpdate:modelValue": q[22] || (q[22] = (te) => c(n).repeatLastN = te),
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
                    "onUpdate:modelValue": q[23] || (q[23] = (te) => c(n).maxTokens = te),
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
                    "onUpdate:modelValue": q[24] || (q[24] = (te) => c(n).port = te),
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
                F(c(Xn), {
                  size: "small",
                  plain: "",
                  loading: c(m),
                  onClick: je
                }, {
                  default: pe(() => [
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
                    "onUpdate:modelValue": q[25] || (q[25] = (te) => c(n).webSearchMaxResults = te),
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
                    "onUpdate:modelValue": q[26] || (q[26] = (te) => c(n).webSearchTimeoutSecs = te),
                    min: 3,
                    max: 60,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, PA)
              ])
            ]),
            v("div", $A, [
              F(c(Xn), {
                type: "primary",
                loading: c(i),
                onClick: V
              }, {
                default: pe(() => [
                  en(
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
}), FA = /* @__PURE__ */ ei(DA, [["__scopeId", "data-v-5b77d31d"]]), zA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FA
}, Symbol.toStringTag, { value: "Module" }));
export {
  jA as activate,
  jA as default
};
