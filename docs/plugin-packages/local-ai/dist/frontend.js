var op = Object.defineProperty;
var ap = (e, t, n) => t in e ? op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qe = (e, t, n) => ap(e, typeof t != "symbol" ? t + "" : t, n);
import * as fs from "vue";
import { inject as Ge, createVNode as z, defineAsyncComponent as sp, ref as q, shallowRef as Er, computed as N, watch as Ie, onMounted as Tt, onUnmounted as Wa, defineComponent as le, h as Lu, Text as Ou, Fragment as gt, getCurrentInstance as Qt, unref as l, watchEffect as xu, readonly as rl, getCurrentScope as lp, onScopeDispose as ip, nextTick as wt, isRef as io, warn as cp, provide as Vn, createElementBlock as j, openBlock as R, mergeProps as co, renderSlot as Ae, createElementVNode as g, toRef as or, useAttrs as up, useSlots as dp, normalizeStyle as $t, normalizeClass as K, createCommentVNode as ne, createBlock as fe, withCtx as de, resolveDynamicComponent as Zt, withModifiers as it, toDisplayString as M, onBeforeUnmount as Wn, Transition as wo, withDirectives as xt, vShow as fr, reactive as Br, onActivated as fp, onUpdated as Ru, cloneVNode as pp, Comment as mp, Teleport as hp, onBeforeMount as gp, onDeactivated as vp, createTextVNode as tn, withKeys as bn, createSlots as bp, toRaw as yp, toRefs as ol, resolveComponent as Dr, resolveDirective as _p, toHandlerKey as wp, renderList as Nn, vModelText as Go, shallowReactive as kp, isVNode as Ko, render as La, vModelSelect as Sp } from "vue";
var Tp = {
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
function Ep() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ap(e, t, n) {
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
var Cp = Symbol("icon-context");
function on(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Ep(), c = Ge(Cp, Tp);
      return function() {
        var i = a.size, u = a.strokeWidth, f = a.strokeLinecap, m = a.strokeLinejoin, h = a.theme, y = a.fill, v = a.spin, b = Ap(s, {
          size: i,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: m,
          theme: h,
          fill: y
        }, c), I = [c.prefix + "-icon"];
        return I.push(c.prefix + "-icon-" + e), t && c.rtl && I.push(c.prefix + "-icon-rtl"), v && I.push(c.prefix + "-icon-spin"), z("span", {
          class: I.join(" ")
        }, [n(b)]);
      };
    }
  };
  return r;
}
const mi = on("brain", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), hi = on("copy", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), da = on("delete", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gi = on("down", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ps = on("edit", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ip = on("fork", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M37 12C39.2091 12 41 10.2091 41 8C41 5.79086 39.2091 4 37 4C34.7909 4 33 5.79086 33 8C33 10.2091 34.7909 12 37 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M11 12V15C11 22 24 25 24 32V36V32C24 25 37 22 37 15V12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), vi = on("left-bar", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M16 6V42",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M13 42H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M13 6H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Lp = on("link", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bi = on("refresh", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yi = on("robot", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), z("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), z("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), z("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ms = on("search", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Op = on("send", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nu = on("setting-two", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xp = on("square", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), ZA = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => yE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Nu,
    component: sp(() => Promise.resolve().then(() => KA))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Rp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const _i = typeof window < "u", Wr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Np = (e, t, n) => Pp({ l: e, k: t, s: n }), Pp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Nt = (e) => typeof e == "number" && isFinite(e), $p = (e) => al(e) === "[object Date]", Oa = (e) => al(e) === "[object RegExp]", Ha = (e) => Be(e) && Object.keys(e).length === 0, Dt = Object.assign, Mp = Object.create, Ye = (e = null) => Mp(e);
let wi;
const Ta = () => wi || (wi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ye());
function ki(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Si(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Dp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${Si(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${Si(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Fp = Object.prototype.hasOwnProperty;
function yn(e, t) {
  return Fp.call(e, t);
}
const St = Array.isArray, ut = (e) => typeof e == "function", ce = (e) => typeof e == "string", kt = (e) => typeof e == "boolean", Ve = (e) => e !== null && typeof e == "object", zp = (e) => Ve(e) && ut(e.then) && ut(e.catch), Pu = Object.prototype.toString, al = (e) => Pu.call(e), Be = (e) => al(e) === "[object Object]", Bp = (e) => e == null ? "" : St(e) || Be(e) && e.toString === Pu ? JSON.stringify(e, null, 2) : String(e);
function sl(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const fa = (e) => !Ve(e) || St(e);
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
function Vp(e, t, n) {
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
}, Up = 17;
function Ga(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, c = new SyntaxError(String(s));
  return c.code = e, t && (c.location = t), c.domain = r, c;
}
function jp(e) {
  throw e;
}
const Ln = " ", Wp = "\r", Ht = `
`, Hp = "\u2028", Gp = "\u2029";
function Kp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Wp && t[O + 1] === Ht, c = (O) => t[O] === Ht, i = (O) => t[O] === Gp, u = (O) => t[O] === Hp, f = (O) => s(O) || c(O) || i(O) || u(O), m = () => n, h = () => r, y = () => o, v = () => a, b = (O) => s(O) || i(O) || u(O) ? Ht : t[O], I = () => b(n), p = () => b(n + a);
  function L() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function P() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function C() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function S(O = 0) {
    a = O;
  }
  function x() {
    const O = n + a;
    for (; O !== n; )
      L();
    a = 0;
  }
  return {
    index: m,
    line: h,
    column: y,
    peekOffset: v,
    charAt: b,
    currentChar: I,
    currentPeek: p,
    next: L,
    peek: P,
    reset: C,
    resetPeek: S,
    skipToPeek: x
  };
}
const Jn = void 0, qp = ".", Ti = "'", Yp = "tokenizer";
function Zp(e, t = {}) {
  const n = t.location !== !1, r = Kp(e), o = () => r.index(), a = () => Vp(r.line(), r.column(), r.index()), s = a(), c = o(), i = {
    currentType: 13,
    offset: c,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: c,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => i, { onError: f } = t;
  function m(T, E, V, ...F) {
    const we = u();
    if (E.column += V, E.offset += V, f) {
      const pe = n ? Rs(we.startLoc, E) : null, A = Ga(T, pe, {
        domain: Yp,
        args: F
      });
      f(A);
    }
  }
  function h(T, E, V) {
    T.endLoc = a(), T.currentType = E;
    const F = { type: E };
    return n && (F.loc = Rs(T.startLoc, T.endLoc)), V != null && (F.value = V), F;
  }
  const y = (T) => h(
    T,
    13
    /* TokenTypes.EOF */
  );
  function v(T, E) {
    return T.currentChar() === E ? (T.next(), E) : (m(Ue.EXPECTED_TOKEN, a(), 0, E), "");
  }
  function b(T) {
    let E = "";
    for (; T.currentPeek() === Ln || T.currentPeek() === Ht; )
      E += T.currentPeek(), T.peek();
    return E;
  }
  function I(T) {
    const E = b(T);
    return T.skipToPeek(), E;
  }
  function p(T) {
    if (T === Jn)
      return !1;
    const E = T.charCodeAt(0);
    return E >= 97 && E <= 122 || // a-z
    E >= 65 && E <= 90 || // A-Z
    E === 95;
  }
  function L(T) {
    if (T === Jn)
      return !1;
    const E = T.charCodeAt(0);
    return E >= 48 && E <= 57;
  }
  function P(T, E) {
    const { currentType: V } = E;
    if (V !== 2)
      return !1;
    b(T);
    const F = p(T.currentPeek());
    return T.resetPeek(), F;
  }
  function C(T, E) {
    const { currentType: V } = E;
    if (V !== 2)
      return !1;
    b(T);
    const F = T.currentPeek() === "-" ? T.peek() : T.currentPeek(), we = L(F);
    return T.resetPeek(), we;
  }
  function S(T, E) {
    const { currentType: V } = E;
    if (V !== 2)
      return !1;
    b(T);
    const F = T.currentPeek() === Ti;
    return T.resetPeek(), F;
  }
  function x(T, E) {
    const { currentType: V } = E;
    if (V !== 7)
      return !1;
    b(T);
    const F = T.currentPeek() === ".";
    return T.resetPeek(), F;
  }
  function O(T, E) {
    const { currentType: V } = E;
    if (V !== 8)
      return !1;
    b(T);
    const F = p(T.currentPeek());
    return T.resetPeek(), F;
  }
  function J(T, E) {
    const { currentType: V } = E;
    if (!(V === 7 || V === 11))
      return !1;
    b(T);
    const F = T.currentPeek() === ":";
    return T.resetPeek(), F;
  }
  function X(T, E) {
    const { currentType: V } = E;
    if (V !== 9)
      return !1;
    const F = () => {
      const pe = T.currentPeek();
      return pe === "{" ? p(T.peek()) : pe === "@" || pe === "|" || pe === ":" || pe === "." || pe === Ln || !pe ? !1 : pe === Ht ? (T.peek(), F()) : ue(T, !1);
    }, we = F();
    return T.resetPeek(), we;
  }
  function Q(T) {
    b(T);
    const E = T.currentPeek() === "|";
    return T.resetPeek(), E;
  }
  function ue(T, E = !0) {
    const V = (we = !1, pe = "") => {
      const A = T.currentPeek();
      return A === "{" || A === "@" || !A ? we : A === "|" ? !(pe === Ln || pe === Ht) : A === Ln ? (T.peek(), V(!0, Ln)) : A === Ht ? (T.peek(), V(!0, Ht)) : !0;
    }, F = V();
    return E && T.resetPeek(), F;
  }
  function se(T, E) {
    const V = T.currentChar();
    return V === Jn ? Jn : E(V) ? (T.next(), V) : null;
  }
  function be(T) {
    const E = T.charCodeAt(0);
    return E >= 97 && E <= 122 || // a-z
    E >= 65 && E <= 90 || // A-Z
    E >= 48 && E <= 57 || // 0-9
    E === 95 || // _
    E === 36;
  }
  function _e(T) {
    return se(T, be);
  }
  function H(T) {
    const E = T.charCodeAt(0);
    return E >= 97 && E <= 122 || // a-z
    E >= 65 && E <= 90 || // A-Z
    E >= 48 && E <= 57 || // 0-9
    E === 95 || // _
    E === 36 || // $
    E === 45;
  }
  function ee(T) {
    return se(T, H);
  }
  function W(T) {
    const E = T.charCodeAt(0);
    return E >= 48 && E <= 57;
  }
  function he(T) {
    return se(T, W);
  }
  function me(T) {
    const E = T.charCodeAt(0);
    return E >= 48 && E <= 57 || // 0-9
    E >= 65 && E <= 70 || // A-F
    E >= 97 && E <= 102;
  }
  function Le(T) {
    return se(T, me);
  }
  function De(T) {
    let E = "", V = "";
    for (; E = he(T); )
      V += E;
    return V;
  }
  function Fe(T) {
    let E = "";
    for (; ; ) {
      const V = T.currentChar();
      if (V === "{" || V === "}" || V === "@" || V === "|" || !V)
        break;
      if (V === Ln || V === Ht)
        if (ue(T))
          E += V, T.next();
        else {
          if (Q(T))
            break;
          E += V, T.next();
        }
      else
        E += V, T.next();
    }
    return E;
  }
  function xe(T) {
    I(T);
    let E = "", V = "";
    for (; E = ee(T); )
      V += E;
    const F = T.currentChar();
    if (F && F !== "}" && F !== Jn && F !== Ln && F !== Ht && F !== "　") {
      const we = vt(T);
      return m(Ue.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V + we), V + we;
    }
    return T.currentChar() === Jn && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), V;
  }
  function ye(T) {
    I(T);
    let E = "";
    return T.currentChar() === "-" ? (T.next(), E += `-${De(T)}`) : E += De(T), T.currentChar() === Jn && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), E;
  }
  function Xe(T) {
    return T !== Ti && T !== Ht;
  }
  function Ce(T) {
    I(T), v(T, "'");
    let E = "", V = "";
    for (; E = se(T, Xe); )
      E === "\\" ? V += Ze(T) : V += E;
    const F = T.currentChar();
    return F === Ht || F === Jn ? (m(Ue.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), F === Ht && (T.next(), v(T, "'")), V) : (v(T, "'"), V);
  }
  function Ze(T) {
    const E = T.currentChar();
    switch (E) {
      case "\\":
      case "'":
        return T.next(), `\\${E}`;
      case "u":
        return ge(T, E, 4);
      case "U":
        return ge(T, E, 6);
      default:
        return m(Ue.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, E), "";
    }
  }
  function ge(T, E, V) {
    v(T, E);
    let F = "";
    for (let we = 0; we < V; we++) {
      const pe = Le(T);
      if (!pe) {
        m(Ue.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${E}${F}${T.currentChar()}`);
        break;
      }
      F += pe;
    }
    return `\\${E}${F}`;
  }
  function Je(T) {
    return T !== "{" && T !== "}" && T !== Ln && T !== Ht;
  }
  function vt(T) {
    I(T);
    let E = "", V = "";
    for (; E = se(T, Je); )
      V += E;
    return V;
  }
  function Qe(T) {
    let E = "", V = "";
    for (; E = _e(T); )
      V += E;
    return V;
  }
  function Te(T) {
    const E = (V) => {
      const F = T.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Ln ? V : (V += F, T.next(), E(V));
    };
    return E("");
  }
  function ft(T) {
    I(T);
    const E = v(
      T,
      "|"
      /* TokenChars.Pipe */
    );
    return I(T), E;
  }
  function pt(T, E) {
    let V = null;
    switch (T.currentChar()) {
      case "{":
        return E.braceNest >= 1 && m(Ue.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), T.next(), V = h(
          E,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), I(T), E.braceNest++, V;
      case "}":
        return E.braceNest > 0 && E.currentType === 2 && m(Ue.EMPTY_PLACEHOLDER, a(), 0), T.next(), V = h(
          E,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), E.braceNest--, E.braceNest > 0 && I(T), E.inLinked && E.braceNest === 0 && (E.inLinked = !1), V;
      case "@":
        return E.braceNest > 0 && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), V = te(T, E) || y(E), E.braceNest = 0, V;
      default: {
        let we = !0, pe = !0, A = !0;
        if (Q(T))
          return E.braceNest > 0 && m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), V = h(E, 1, ft(T)), E.braceNest = 0, E.inLinked = !1, V;
        if (E.braceNest > 0 && (E.currentType === 4 || E.currentType === 5 || E.currentType === 6))
          return m(Ue.UNTERMINATED_CLOSING_BRACE, a(), 0), E.braceNest = 0, Z(T, E);
        if (we = P(T, E))
          return V = h(E, 4, xe(T)), I(T), V;
        if (pe = C(T, E))
          return V = h(E, 5, ye(T)), I(T), V;
        if (A = S(T, E))
          return V = h(E, 6, Ce(T)), I(T), V;
        if (!we && !pe && !A)
          return V = h(E, 12, vt(T)), m(Ue.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V.value), I(T), V;
        break;
      }
    }
    return V;
  }
  function te(T, E) {
    const { currentType: V } = E;
    let F = null;
    const we = T.currentChar();
    switch ((V === 7 || V === 8 || V === 11 || V === 9) && (we === Ht || we === Ln) && m(Ue.INVALID_LINKED_FORMAT, a(), 0), we) {
      case "@":
        return T.next(), F = h(
          E,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), E.inLinked = !0, F;
      case ".":
        return I(T), T.next(), h(
          E,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return I(T), T.next(), h(
          E,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Q(T) ? (F = h(E, 1, ft(T)), E.braceNest = 0, E.inLinked = !1, F) : x(T, E) || J(T, E) ? (I(T), te(T, E)) : O(T, E) ? (I(T), h(E, 11, Qe(T))) : X(T, E) ? (I(T), we === "{" ? pt(T, E) || F : h(E, 10, Te(T))) : (V === 7 && m(Ue.INVALID_LINKED_FORMAT, a(), 0), E.braceNest = 0, E.inLinked = !1, Z(T, E));
    }
  }
  function Z(T, E) {
    let V = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (E.braceNest > 0)
      return pt(T, E) || y(E);
    if (E.inLinked)
      return te(T, E) || y(E);
    switch (T.currentChar()) {
      case "{":
        return pt(T, E) || y(E);
      case "}":
        return m(Ue.UNBALANCED_CLOSING_BRACE, a(), 0), T.next(), h(
          E,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return te(T, E) || y(E);
      default: {
        if (Q(T))
          return V = h(E, 1, ft(T)), E.braceNest = 0, E.inLinked = !1, V;
        if (ue(T))
          return h(E, 0, Fe(T));
        break;
      }
    }
    return V;
  }
  function We() {
    const { currentType: T, offset: E, startLoc: V, endLoc: F } = i;
    return i.lastType = T, i.lastOffset = E, i.lastStartLoc = V, i.lastEndLoc = F, i.offset = o(), i.startLoc = a(), r.currentChar() === Jn ? h(
      i,
      13
      /* TokenTypes.EOF */
    ) : Z(r, i);
  }
  return {
    nextToken: We,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Xp = "parser", Qp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Jp(e, t, n) {
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
function em(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(p, L, P, C, ...S) {
    const x = p.currentPosition();
    if (x.offset += C, x.column += C, n) {
      const O = t ? Rs(P, x) : null, J = Ga(L, O, {
        domain: Xp,
        args: S
      });
      n(J);
    }
  }
  function o(p, L, P) {
    const C = { type: p };
    return t && (C.start = L, C.end = L, C.loc = { start: P, end: P }), C;
  }
  function a(p, L, P, C) {
    t && (p.end = L, p.loc && (p.loc.end = P));
  }
  function s(p, L) {
    const P = p.context(), C = o(3, P.offset, P.startLoc);
    return C.value = L, a(C, p.currentOffset(), p.currentPosition()), C;
  }
  function c(p, L) {
    const P = p.context(), { lastOffset: C, lastStartLoc: S } = P, x = o(5, C, S);
    return x.index = parseInt(L, 10), p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function i(p, L) {
    const P = p.context(), { lastOffset: C, lastStartLoc: S } = P, x = o(4, C, S);
    return x.key = L, p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function u(p, L) {
    const P = p.context(), { lastOffset: C, lastStartLoc: S } = P, x = o(9, C, S);
    return x.value = L.replace(Qp, Jp), p.nextToken(), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function f(p) {
    const L = p.nextToken(), P = p.context(), { lastOffset: C, lastStartLoc: S } = P, x = o(8, C, S);
    return L.type !== 11 ? (r(p, Ue.UNEXPECTED_EMPTY_LINKED_MODIFIER, P.lastStartLoc, 0), x.value = "", a(x, C, S), {
      nextConsumeToken: L,
      node: x
    }) : (L.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, On(L)), x.value = L.value || "", a(x, p.currentOffset(), p.currentPosition()), {
      node: x
    });
  }
  function m(p, L) {
    const P = p.context(), C = o(7, P.offset, P.startLoc);
    return C.value = L, a(C, p.currentOffset(), p.currentPosition()), C;
  }
  function h(p) {
    const L = p.context(), P = o(6, L.offset, L.startLoc);
    let C = p.nextToken();
    if (C.type === 8) {
      const S = f(p);
      P.modifier = S.node, C = S.nextConsumeToken || p.nextToken();
    }
    switch (C.type !== 9 && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(C)), C = p.nextToken(), C.type === 2 && (C = p.nextToken()), C.type) {
      case 10:
        C.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(C)), P.key = m(p, C.value || "");
        break;
      case 4:
        C.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(C)), P.key = i(p, C.value || "");
        break;
      case 5:
        C.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(C)), P.key = c(p, C.value || "");
        break;
      case 6:
        C.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(C)), P.key = u(p, C.value || "");
        break;
      default: {
        r(p, Ue.UNEXPECTED_EMPTY_LINKED_KEY, L.lastStartLoc, 0);
        const S = p.context(), x = o(7, S.offset, S.startLoc);
        return x.value = "", a(x, S.offset, S.startLoc), P.key = x, a(P, S.offset, S.startLoc), {
          nextConsumeToken: C,
          node: P
        };
      }
    }
    return a(P, p.currentOffset(), p.currentPosition()), {
      node: P
    };
  }
  function y(p) {
    const L = p.context(), P = L.currentType === 1 ? p.currentOffset() : L.offset, C = L.currentType === 1 ? L.endLoc : L.startLoc, S = o(2, P, C);
    S.items = [];
    let x = null;
    do {
      const X = x || p.nextToken();
      switch (x = null, X.type) {
        case 0:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(X)), S.items.push(s(p, X.value || ""));
          break;
        case 5:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(X)), S.items.push(c(p, X.value || ""));
          break;
        case 4:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(X)), S.items.push(i(p, X.value || ""));
          break;
        case 6:
          X.value == null && r(p, Ue.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, On(X)), S.items.push(u(p, X.value || ""));
          break;
        case 7: {
          const Q = h(p);
          S.items.push(Q.node), x = Q.nextConsumeToken || null;
          break;
        }
      }
    } while (L.currentType !== 13 && L.currentType !== 1);
    const O = L.currentType === 1 ? L.lastOffset : p.currentOffset(), J = L.currentType === 1 ? L.lastEndLoc : p.currentPosition();
    return a(S, O, J), S;
  }
  function v(p, L, P, C) {
    const S = p.context();
    let x = C.items.length === 0;
    const O = o(1, L, P);
    O.cases = [], O.cases.push(C);
    do {
      const J = y(p);
      x || (x = J.items.length === 0), O.cases.push(J);
    } while (S.currentType !== 13);
    return x && r(p, Ue.MUST_HAVE_MESSAGES_IN_PLURAL, P, 0), a(O, p.currentOffset(), p.currentPosition()), O;
  }
  function b(p) {
    const L = p.context(), { offset: P, startLoc: C } = L, S = y(p);
    return L.currentType === 13 ? S : v(p, P, C, S);
  }
  function I(p) {
    const L = Zp(p, Dt({}, e)), P = L.context(), C = o(0, P.offset, P.startLoc);
    return t && C.loc && (C.loc.source = p), C.body = b(L), e.onCacheKey && (C.cacheKey = e.onCacheKey(p)), P.currentType !== 13 && r(L, Ue.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, p[P.offset] || ""), a(C, L.currentOffset(), L.currentPosition()), C;
  }
  return { parse: I };
}
function On(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function tm(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Ei(e, t) {
  for (let n = 0; n < e.length; n++)
    ll(e[n], t);
}
function ll(e, t) {
  switch (e.type) {
    case 1:
      Ei(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ei(e.items, t);
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
function nm(e, t = {}) {
  const n = tm(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ll(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function rm(e) {
  const t = e.body;
  return t.type === 2 ? Ai(t) : t.cases.forEach((n) => Ai(n)), e;
}
function Ai(e) {
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
function ao(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      ao(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        ao(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        ao(n[r]);
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
      ao(t.key), t.k = t.key, delete t.key, t.modifier && (ao(t.modifier), t.m = t.modifier, delete t.modifier);
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
function om(e, t) {
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
  const c = () => s;
  function i(b, I) {
    s.code += b;
  }
  function u(b, I = !0) {
    const p = I ? r : "";
    i(o ? p + "  ".repeat(b) : p);
  }
  function f(b = !0) {
    const I = ++s.indentLevel;
    b && u(I);
  }
  function m(b = !0) {
    const I = --s.indentLevel;
    b && u(I);
  }
  function h() {
    u(s.indentLevel);
  }
  return {
    context: c,
    push: i,
    indent: f,
    deindent: m,
    newline: h,
    helper: (b) => `_${b}`,
    needIndent: () => s.needIndent
  };
}
function am(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), uo(e, t.key), t.modifier ? (e.push(", "), uo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function sm(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (uo(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function lm(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (uo(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function im(e, t) {
  t.body ? uo(e, t.body) : e.push("null");
}
function uo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      im(e, t);
      break;
    case 1:
      lm(e, t);
      break;
    case 2:
      sm(e, t);
      break;
    case 6:
      am(e, t);
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
const cm = (e, t = {}) => {
  const n = ce(t.mode) ? t.mode : "normal", r = ce(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = om(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(a), s.length > 0 && (c.push(`const { ${sl(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), c.newline()), c.push("return "), uo(c, e), c.deindent(a), c.push("}"), delete e.helpers;
  const { code: i, map: u } = c.context();
  return {
    ast: e,
    code: i,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function um(e, t = {}) {
  const n = Dt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, c = em(n).parse(e);
  return r ? (a && rm(c), o && ao(c), { ast: c, code: "" }) : (nm(c, n), cm(c, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function dm() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ta().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Fn(e) {
  return Ve(e) && il(e) === 0 && (yn(e, "b") || yn(e, "body"));
}
const $u = ["b", "body"];
function fm(e) {
  return Ir(e, $u);
}
const Mu = ["c", "cases"];
function pm(e) {
  return Ir(e, Mu, []);
}
const Du = ["s", "static"];
function mm(e) {
  return Ir(e, Du);
}
const Fu = ["i", "items"];
function hm(e) {
  return Ir(e, Fu, []);
}
const zu = ["t", "type"];
function il(e) {
  return Ir(e, zu);
}
const Bu = ["v", "value"];
function pa(e, t) {
  const n = Ir(e, Bu);
  if (n != null)
    return n;
  throw qo(t);
}
const Vu = ["m", "modifier"];
function gm(e) {
  return Ir(e, Vu);
}
const Uu = ["k", "key"];
function vm(e) {
  const t = Ir(e, Uu);
  if (t)
    return t;
  throw qo(
    6
    /* NodeTypes.Linked */
  );
}
function Ir(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (yn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const ju = [
  ...$u,
  ...Mu,
  ...Du,
  ...Fu,
  ...Uu,
  ...Vu,
  ...Bu,
  ...zu
];
function qo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function hs(e) {
  return (n) => bm(n, e);
}
function bm(e, t) {
  const n = fm(t);
  if (n == null)
    throw qo(
      0
      /* NodeTypes.Resource */
    );
  if (il(n) === 1) {
    const a = pm(n);
    return e.plural(a.reduce((s, c) => [
      ...s,
      Ci(e, c)
    ], []));
  } else
    return Ci(e, n);
}
function Ci(e, t) {
  const n = mm(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = hm(t).reduce((o, a) => [...o, Ns(e, a)], []);
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
      if (yn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (yn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw qo(n);
    }
    case 5: {
      const r = t;
      if (yn(r, "i") && Nt(r.i))
        return e.interpolate(e.list(r.i));
      if (yn(r, "index") && Nt(r.index))
        return e.interpolate(e.list(r.index));
      throw qo(n);
    }
    case 6: {
      const r = t, o = gm(r), a = vm(r);
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
const ym = (e) => e;
let ma = Ye();
function _m(e, t = {}) {
  let n = !1;
  const r = t.onError || jp;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...um(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function wm(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ce(e)) {
    kt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || ym)(e), o = ma[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = _m(e, {
      ...t,
      location: !1,
      jit: !0
    }), c = hs(a);
    return s ? c : ma[r] = c;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = ma[n];
      return r || (ma[n] = hs(e));
    } else
      return hs(e);
  }
}
const ar = {
  INVALID_ARGUMENT: Up,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, km = 24;
function sr(e) {
  return Ga(e, null, void 0);
}
function cl(e, t) {
  return t.locale != null ? Ii(t.locale) : Ii(e.locale);
}
let gs;
function Ii(e) {
  if (ce(e))
    return e;
  if (ut(e)) {
    if (e.resolvedOnce && gs != null)
      return gs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (zp(t))
        throw sr(ar.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return gs = t;
    } else
      throw sr(ar.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw sr(ar.NOT_SUPPORT_LOCALE_TYPE);
}
function Sm(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...St(t) ? t : Ve(t) ? Object.keys(t) : ce(t) ? [t] : [n]
  ])];
}
function Wu(e, t, n) {
  const r = ce(n) ? n : xa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; St(s); )
      s = Li(a, s, t);
    const c = St(t) || !Be(t) ? t : t.default ? t.default : null;
    s = ce(c) ? [c] : c, St(s) && Li(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Li(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && kt(r); o++) {
    const a = t[o];
    ce(a) && (r = Tm(e, t[o], n));
  }
  return r;
}
function Tm(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Em(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Em(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (St(n) || Be(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Lr = [];
Lr[
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
Lr[
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
Lr[
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
Lr[
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
Lr[
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
Lr[
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
Lr[
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
const Am = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Cm(e) {
  return Am.test(e);
}
function Im(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Lm(e) {
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
function Om(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Cm(t) ? Im(t) : "*" + t;
}
function xm(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, c, i, u, f, m;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = c : s += c;
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
      if (o = 0, s === void 0 || (s = Om(s), s === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const v = e[n + 1];
    if (r === 5 && v === "'" || r === 6 && v === '"')
      return n++, c = "\\" + v, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && y())) {
      if (i = Lm(a), m = Lr[r], u = m[i] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = h[u[1]], f && (c = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Oi = /* @__PURE__ */ new Map();
function Rm(e, t) {
  return Ve(e) ? e[t] : null;
}
function Nm(e, t) {
  if (!Ve(e))
    return null;
  let n = Oi.get(t);
  if (n || (n = xm(t), n && Oi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (ju.includes(s) && Fn(o))
      return null;
    const c = o[s];
    if (c === void 0 || ut(o))
      return null;
    o = c, a++;
  }
  return o;
}
const Pm = "11.2.2", Ka = -1, xa = "en-US", xi = "", Ri = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function $m() {
  return {
    upper: (e, t) => t === "text" && ce(e) ? e.toUpperCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ce(e) ? e.toLowerCase() : t === "vnode" && Ve(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ce(e) ? Ri(e) : t === "vnode" && Ve(e) && "__v_isVNode" in e ? Ri(e.children) : e
  };
}
let Hu;
function Mm(e) {
  Hu = e;
}
let Gu;
function Dm(e) {
  Gu = e;
}
let Ku;
function Fm(e) {
  Ku = e;
}
let qu = null;
const Ni = (e) => {
  qu = e;
}, zm = () => qu;
let Pi = 0;
function Bm(e = {}) {
  const t = ut(e.onWarn) ? e.onWarn : Rp, n = ce(e.version) ? e.version : Pm, r = ce(e.locale) || ut(e.locale) ? e.locale : xa, o = ut(r) ? xa : r, a = St(e.fallbackLocale) || Be(e.fallbackLocale) || ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Be(e.messages) ? e.messages : vs(o), c = Be(e.datetimeFormats) ? e.datetimeFormats : vs(o), i = Be(e.numberFormats) ? e.numberFormats : vs(o), u = Dt(Ye(), e.modifiers, $m()), f = e.pluralRules || Ye(), m = ut(e.missing) ? e.missing : null, h = kt(e.missingWarn) || Oa(e.missingWarn) ? e.missingWarn : !0, y = kt(e.fallbackWarn) || Oa(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, b = !!e.unresolving, I = ut(e.postTranslation) ? e.postTranslation : null, p = Be(e.processor) ? e.processor : null, L = kt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter, C = ut(e.messageCompiler) ? e.messageCompiler : Hu, S = ut(e.messageResolver) ? e.messageResolver : Gu || Rm, x = ut(e.localeFallbacker) ? e.localeFallbacker : Ku || Sm, O = Ve(e.fallbackContext) ? e.fallbackContext : void 0, J = e, X = Ve(J.__datetimeFormatters) ? J.__datetimeFormatters : /* @__PURE__ */ new Map(), Q = Ve(J.__numberFormatters) ? J.__numberFormatters : /* @__PURE__ */ new Map(), ue = Ve(J.__meta) ? J.__meta : {};
  Pi++;
  const se = {
    version: n,
    cid: Pi,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: f,
    missing: m,
    missingWarn: h,
    fallbackWarn: y,
    fallbackFormat: v,
    unresolving: b,
    postTranslation: I,
    processor: p,
    warnHtmlMessage: L,
    escapeParameter: P,
    messageCompiler: C,
    messageResolver: S,
    localeFallbacker: x,
    fallbackContext: O,
    onWarn: t,
    __meta: ue
  };
  return se.datetimeFormats = c, se.numberFormats = i, se.__datetimeFormatters = X, se.__numberFormatters = Q, se;
}
const vs = (e) => ({ [e]: Ye() });
function ul(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const c = a(e, n, t, o);
    return ce(c) ? c : t;
  } else
    return t;
}
function Oo(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Vm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Um(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Vm(e, t[r]))
      return !0;
  return !1;
}
function $i(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: c } = e, [i, u, f, m] = Ps(...t), h = kt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  kt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, v = cl(e, f), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!ce(i) || i === "")
    return new Intl.DateTimeFormat(v, m).format(u);
  let I = {}, p, L = null;
  const P = "datetime format";
  for (let x = 0; x < b.length && (p = b[x], I = n[p] || {}, L = I[i], !Be(L)); x++)
    ul(e, i, p, h, P);
  if (!Be(L) || !ce(p))
    return r ? Ka : i;
  let C = `${p}__${i}`;
  Ha(m) || (C = `${C}__${JSON.stringify(m)}`);
  let S = c.get(C);
  return S || (S = new Intl.DateTimeFormat(p, Dt({}, L, m)), c.set(C, S)), y ? S.formatToParts(u) : S.format(u);
}
const Yu = [
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
  let s = Ye(), c;
  if (ce(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw sr(ar.INVALID_ISO_DATE_ARGUMENT);
    const u = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    c = new Date(u);
    try {
      c.toISOString();
    } catch {
      throw sr(ar.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if ($p(t)) {
    if (isNaN(t.getTime()))
      throw sr(ar.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (Nt(t))
    c = t;
  else
    throw sr(ar.INVALID_ARGUMENT);
  return ce(n) ? a.key = n : Be(n) && Object.keys(n).forEach((i) => {
    Yu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), ce(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", c, a, s];
}
function Mi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Di(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: c } = e, [i, u, f, m] = $s(...t), h = kt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  kt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, v = cl(e, f), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!ce(i) || i === "")
    return new Intl.NumberFormat(v, m).format(u);
  let I = {}, p, L = null;
  const P = "number format";
  for (let x = 0; x < b.length && (p = b[x], I = n[p] || {}, L = I[i], !Be(L)); x++)
    ul(e, i, p, h, P);
  if (!Be(L) || !ce(p))
    return r ? Ka : i;
  let C = `${p}__${i}`;
  Ha(m) || (C = `${C}__${JSON.stringify(m)}`);
  let S = c.get(C);
  return S || (S = new Intl.NumberFormat(p, Dt({}, L, m)), c.set(C, S)), y ? S.formatToParts(u) : S.format(u);
}
const Zu = [
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
  if (!Nt(t))
    throw sr(ar.INVALID_ARGUMENT);
  const c = t;
  return ce(n) ? a.key = n : Be(n) && Object.keys(n).forEach((i) => {
    Zu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), ce(r) ? a.locale = r : Be(r) && (s = r), Be(o) && (s = o), [a.key || "", c, a, s];
}
function Fi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const jm = (e) => e, Wm = (e) => "", Hm = "text", Gm = (e) => e.length === 0 ? "" : sl(e), Km = Bp;
function zi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function qm(e) {
  const t = Nt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Nt(e.named.count) || Nt(e.named.n)) ? Nt(e.named.count) ? e.named.count : Nt(e.named.n) ? e.named.n : t : t;
}
function Ym(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Zm(e = {}) {
  const t = e.locale, n = qm(e), r = Ve(e.pluralRules) && ce(t) && ut(e.pluralRules[t]) ? e.pluralRules[t] : zi, o = Ve(e.pluralRules) && ce(t) && ut(e.pluralRules[t]) ? zi : void 0, a = (p) => p[r(n, p.length, o)], s = e.list || [], c = (p) => s[p], i = e.named || Ye();
  Nt(e.pluralIndex) && Ym(n, i);
  const u = (p) => i[p];
  function f(p, L) {
    const P = ut(e.messages) ? e.messages(p, !!L) : Ve(e.messages) ? e.messages[p] : !1;
    return P || (e.parent ? e.parent.message(p) : Wm);
  }
  const m = (p) => e.modifiers ? e.modifiers[p] : jm, h = Be(e.processor) && ut(e.processor.normalize) ? e.processor.normalize : Gm, y = Be(e.processor) && ut(e.processor.interpolate) ? e.processor.interpolate : Km, v = Be(e.processor) && ce(e.processor.type) ? e.processor.type : Hm, I = {
    list: c,
    named: u,
    plural: a,
    linked: (p, ...L) => {
      const [P, C] = L;
      let S = "text", x = "";
      L.length === 1 ? Ve(P) ? (x = P.modifier || x, S = P.type || S) : ce(P) && (x = P || x) : L.length === 2 && (ce(P) && (x = P || x), ce(C) && (S = C || S));
      const O = f(p, !0)(I), J = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        S === "vnode" && St(O) && x ? O[0] : O
      );
      return x ? m(x)(J, S) : J;
    },
    message: f,
    type: v,
    interpolate: y,
    normalize: h,
    values: Dt(Ye(), s, i)
  };
  return I;
}
const Bi = () => "", ir = (e) => ut(e);
function Vi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: c } = e, [i, u] = Ms(...t), f = kt(u.missingWarn) ? u.missingWarn : e.missingWarn, m = kt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = kt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, v = ce(u.default) || kt(u.default) ? kt(u.default) ? a ? i : () => i : u.default : n ? a ? i : () => i : null, b = n || v != null && (ce(v) || ut(v)), I = cl(e, u);
  h && Xm(u);
  let [p, L, P] = y ? [
    i,
    I,
    c[I] || Ye()
  ] : Xu(e, i, I, s, m, f), C = p, S = i;
  if (!y && !(ce(C) || Fn(C) || ir(C)) && b && (C = v, S = C), !y && (!(ce(C) || Fn(C) || ir(C)) || !ce(L)))
    return o ? Ka : i;
  let x = !1;
  const O = () => {
    x = !0;
  }, J = ir(C) ? C : Qu(e, i, L, C, S, O);
  if (x)
    return C;
  const X = eh(e, L, P, u), Q = Zm(X), ue = Qm(e, J, Q);
  let se = r ? r(ue, i) : ue;
  return h && ce(se) && (se = Dp(se)), se;
}
function Xm(e) {
  St(e.list) ? e.list = e.list.map((t) => ce(t) ? ki(t) : t) : Ve(e.named) && Object.keys(e.named).forEach((t) => {
    ce(e.named[t]) && (e.named[t] = ki(e.named[t]));
  });
}
function Xu(e, t, n, r, o, a) {
  const { messages: s, onWarn: c, messageResolver: i, localeFallbacker: u } = e, f = u(e, r, n);
  let m = Ye(), h, y = null;
  const v = "translate";
  for (let b = 0; b < f.length && (h = f[b], m = s[h] || Ye(), (y = i(m, t)) === null && (y = m[t]), !(ce(y) || Fn(y) || ir(y))); b++)
    if (!Um(h, f)) {
      const I = ul(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        a,
        v
      );
      I !== t && (y = I);
    }
  return [y, h, m];
}
function Qu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: c } = e;
  if (ir(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const i = s(r, Jm(e, n, o, r, c, a));
  return i.locale = n, i.key = t, i.source = r, i;
}
function Qm(e, t, n) {
  return t(n);
}
function Ms(...e) {
  const [t, n, r] = e, o = Ye();
  if (!ce(t) && !Nt(t) && !ir(t) && !Fn(t))
    throw sr(ar.INVALID_ARGUMENT);
  const a = Nt(t) ? String(t) : (ir(t), t);
  return Nt(n) ? o.plural = n : ce(n) ? o.default = n : Be(n) && !Ha(n) ? o.named = n : St(n) && (o.list = n), Nt(r) ? o.plural = r : ce(r) ? o.default = r : Be(r) && Dt(o, r), [a, o];
}
function Jm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Np(t, n, s)
  };
}
function eh(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: c, fallbackWarn: i, missingWarn: u, fallbackContext: f } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, v) => {
      let b = s(n, y);
      if (b == null && (f || v)) {
        const [, , I] = Xu(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          c,
          i,
          u
        );
        b = s(I, y);
      }
      if (ce(b) || Fn(b)) {
        let I = !1;
        const L = Qu(e, y, t, b, y, () => {
          I = !0;
        });
        return I ? Bi : L;
      } else return ir(b) ? b : Bi;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Nt(r.plural) && (h.pluralIndex = r.plural), h;
}
dm();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const th = "11.2.2";
function nh() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ta().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ta().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ta().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const fo = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: km,
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
function Yo(e, ...t) {
  return Ga(e, null, void 0);
}
const Ds = /* @__PURE__ */ Wr("__translateVNode"), Fs = /* @__PURE__ */ Wr("__datetimeParts"), zs = /* @__PURE__ */ Wr("__numberParts"), rh = Wr("__setPluralRules"), Ju = /* @__PURE__ */ Wr("__injectWithOption"), Bs = /* @__PURE__ */ Wr("__dispose");
function Zo(e) {
  if (!Ve(e) || Fn(e))
    return e;
  for (const t in e)
    if (yn(e, t))
      if (!t.includes("."))
        Ve(e[t]) && Zo(e[t]);
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
        if (a || (Fn(o) ? ju.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Fn(o)) {
          const s = o[n[r]];
          Ve(s) && Zo(s);
        }
      }
  return e;
}
function ed(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Be(n) ? n : St(r) ? Ye() : { [e]: Ye() };
  if (St(r) && r.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: i, resource: u } = c;
      i ? (s[i] = s[i] || Ye(), Ea(u, s[i])) : Ea(u, s);
    } else
      ce(c) && Ea(JSON.parse(c), s);
  }), o == null && a)
    for (const c in s)
      yn(s, c) && Zo(s[c]);
  return s;
}
function oh(e) {
  return e.type;
}
function ah(e, t, n) {
  let r = Ve(t.messages) ? t.messages : Ye();
  "__i18nGlobal" in n && (r = ed(e.locale.value, {
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
function Ui(e) {
  return z(Ou, null, e, 0);
}
function td() {
  return "currentInstance" in fs ? fs["currentInstance"] : fs.getCurrentInstance();
}
const ji = () => [], sh = () => !1;
let Wi = 0;
function Hi(e) {
  return (t, n, r, o) => e(n, r, td() || void 0, o);
}
function lh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = _i ? q : Er;
  let s = kt(e.inheritLocale) ? e.inheritLocale : !0;
  const c = a(
    // prettier-ignore
    t && s ? t.locale.value : ce(e.locale) ? e.locale : xa
  ), i = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ce(e.fallbackLocale) || St(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), u = a(ed(c.value, e)), f = a(Be(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), m = a(Be(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let h = t ? t.missingWarn : kt(e.missingWarn) || Oa(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : kt(e.fallbackWarn) || Oa(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : kt(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, I = ut(e.missing) ? e.missing : null, p = ut(e.missing) ? Hi(e.missing) : null, L = ut(e.postTranslation) ? e.postTranslation : null, P = t ? t.warnHtmlMessage : kt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const S = t ? t.modifiers : Be(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && Ni(null);
    const A = {
      version: th,
      locale: c.value,
      fallbackLocale: i.value,
      messages: u.value,
      modifiers: S,
      pluralRules: x,
      missing: p === null ? void 0 : p,
      missingWarn: h,
      fallbackWarn: y,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: L === null ? void 0 : L,
      warnHtmlMessage: P,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    A.datetimeFormats = f.value, A.numberFormats = m.value, A.__datetimeFormatters = Be(O) ? O.__datetimeFormatters : void 0, A.__numberFormatters = Be(O) ? O.__numberFormatters : void 0;
    const U = Bm(A);
    return r && Ni(U), U;
  })(), Oo(O, c.value, i.value);
  function X() {
    return [
      c.value,
      i.value,
      u.value,
      f.value,
      m.value
    ];
  }
  const Q = N({
    get: () => c.value,
    set: (A) => {
      O.locale = A, c.value = A;
    }
  }), ue = N({
    get: () => i.value,
    set: (A) => {
      O.fallbackLocale = A, i.value = A, Oo(O, c.value, A);
    }
  }), se = N(() => u.value), be = /* @__PURE__ */ N(() => f.value), _e = /* @__PURE__ */ N(() => m.value);
  function H() {
    return ut(L) ? L : null;
  }
  function ee(A) {
    L = A, O.postTranslation = A;
  }
  function W() {
    return I;
  }
  function he(A) {
    A !== null && (p = Hi(A)), I = A, O.missing = p;
  }
  const me = (A, U, Ee, Pe, at, st) => {
    X();
    let et;
    try {
      r || (O.fallbackContext = t ? zm() : void 0), et = A(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (Ee !== "translate exists" && // for not `te` (e.g `t`)
    Nt(et) && et === Ka || Ee === "translate exists" && !et) {
      const [Gn, Kn] = U();
      return t && v ? Pe(t) : at(Gn);
    } else {
      if (st(et))
        return et;
      throw Yo(fo.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Le(...A) {
    return me((U) => Reflect.apply(Vi, null, [U, ...A]), () => Ms(...A), "translate", (U) => Reflect.apply(U.t, U, [...A]), (U) => U, (U) => ce(U));
  }
  function De(...A) {
    const [U, Ee, Pe] = A;
    if (Pe && !Ve(Pe))
      throw Yo(fo.INVALID_ARGUMENT);
    return Le(U, Ee, Dt({ resolvedMessage: !0 }, Pe || {}));
  }
  function Fe(...A) {
    return me((U) => Reflect.apply($i, null, [U, ...A]), () => Ps(...A), "datetime format", (U) => Reflect.apply(U.d, U, [...A]), () => xi, (U) => ce(U) || St(U));
  }
  function xe(...A) {
    return me((U) => Reflect.apply(Di, null, [U, ...A]), () => $s(...A), "number format", (U) => Reflect.apply(U.n, U, [...A]), () => xi, (U) => ce(U) || St(U));
  }
  function ye(A) {
    return A.map((U) => ce(U) || Nt(U) || kt(U) ? Ui(String(U)) : U);
  }
  const Ce = {
    normalize: ye,
    interpolate: (A) => A,
    type: "vnode"
  };
  function Ze(...A) {
    return me((U) => {
      let Ee;
      const Pe = U;
      try {
        Pe.processor = Ce, Ee = Reflect.apply(Vi, null, [Pe, ...A]);
      } finally {
        Pe.processor = null;
      }
      return Ee;
    }, () => Ms(...A), "translate", (U) => U[Ds](...A), (U) => [Ui(U)], (U) => St(U));
  }
  function ge(...A) {
    return me((U) => Reflect.apply(Di, null, [U, ...A]), () => $s(...A), "number format", (U) => U[zs](...A), ji, (U) => ce(U) || St(U));
  }
  function Je(...A) {
    return me((U) => Reflect.apply($i, null, [U, ...A]), () => Ps(...A), "datetime format", (U) => U[Fs](...A), ji, (U) => ce(U) || St(U));
  }
  function vt(A) {
    x = A, O.pluralRules = x;
  }
  function Qe(A, U) {
    return me(() => {
      if (!A)
        return !1;
      const Ee = ce(U) ? U : c.value, Pe = pt(Ee), at = O.messageResolver(Pe, A);
      return Fn(at) || ir(at) || ce(at);
    }, () => [A], "translate exists", (Ee) => Reflect.apply(Ee.te, Ee, [A, U]), sh, (Ee) => kt(Ee));
  }
  function Te(A) {
    let U = null;
    const Ee = Wu(O, i.value, c.value);
    for (let Pe = 0; Pe < Ee.length; Pe++) {
      const at = u.value[Ee[Pe]] || {}, st = O.messageResolver(at, A);
      if (st != null) {
        U = st;
        break;
      }
    }
    return U;
  }
  function ft(A) {
    const U = Te(A);
    return U ?? (t ? t.tm(A) || {} : {});
  }
  function pt(A) {
    return u.value[A] || {};
  }
  function te(A, U) {
    if (o) {
      const Ee = { [A]: U };
      for (const Pe in Ee)
        yn(Ee, Pe) && Zo(Ee[Pe]);
      U = Ee[A];
    }
    u.value[A] = U, O.messages = u.value;
  }
  function Z(A, U) {
    u.value[A] = u.value[A] || {};
    const Ee = { [A]: U };
    if (o)
      for (const Pe in Ee)
        yn(Ee, Pe) && Zo(Ee[Pe]);
    U = Ee[A], Ea(U, u.value[A]), O.messages = u.value;
  }
  function We(A) {
    return f.value[A] || {};
  }
  function T(A, U) {
    f.value[A] = U, O.datetimeFormats = f.value, Mi(O, A, U);
  }
  function E(A, U) {
    f.value[A] = Dt(f.value[A] || {}, U), O.datetimeFormats = f.value, Mi(O, A, U);
  }
  function V(A) {
    return m.value[A] || {};
  }
  function F(A, U) {
    m.value[A] = U, O.numberFormats = m.value, Fi(O, A, U);
  }
  function we(A, U) {
    m.value[A] = Dt(m.value[A] || {}, U), O.numberFormats = m.value, Fi(O, A, U);
  }
  Wi++, t && _i && (Ie(t.locale, (A) => {
    s && (c.value = A, O.locale = A, Oo(O, c.value, i.value));
  }), Ie(t.fallbackLocale, (A) => {
    s && (i.value = A, O.fallbackLocale = A, Oo(O, c.value, i.value));
  }));
  const pe = {
    id: Wi,
    locale: Q,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(A) {
      s = A, A && t && (c.value = t.locale.value, i.value = t.fallbackLocale.value, Oo(O, c.value, i.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: se,
    get modifiers() {
      return S;
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
    set missingWarn(A) {
      h = A, O.missingWarn = h;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(A) {
      y = A, O.fallbackWarn = y;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(A) {
      v = A;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(A) {
      b = A, O.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return P;
    },
    set warnHtmlMessage(A) {
      P = A, O.warnHtmlMessage = A;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(A) {
      C = A, O.escapeParameter = A;
    },
    t: Le,
    getLocaleMessage: pt,
    setLocaleMessage: te,
    mergeLocaleMessage: Z,
    getPostTranslationHandler: H,
    setPostTranslationHandler: ee,
    getMissingHandler: W,
    setMissingHandler: he,
    [rh]: vt
  };
  return pe.datetimeFormats = be, pe.numberFormats = _e, pe.rt = De, pe.te = Qe, pe.tm = ft, pe.d = Fe, pe.n = xe, pe.getDateTimeFormat = We, pe.setDateTimeFormat = T, pe.mergeDateTimeFormat = E, pe.getNumberFormat = V, pe.setNumberFormat = F, pe.mergeNumberFormat = we, pe[Ju] = n, pe[Ds] = Ze, pe[Fs] = Je, pe[zs] = ge, pe;
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
function ih({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === gt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Ye());
}
function nd() {
  return gt;
}
Dt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Nt(e) || !isNaN(e)
  }
}, dl);
function ch(e) {
  return St(e) && !ce(e[0]);
}
function rd(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let c = Ye();
    e.locale && (s.locale = e.locale), ce(e.format) ? s.key = e.format : Ve(e.format) && (ce(e.format.key) && (s.key = e.format.key), c = Object.keys(e.format).reduce((h, y) => n.includes(y) ? Dt(Ye(), h, { [y]: e.format[y] }) : h, Ye()));
    const i = r(e.value, s, c);
    let u = [s.key];
    St(i) ? u = i.map((h, y) => {
      const v = o[h.type], b = v ? v({ [h.type]: h.value, index: y, parts: i }) : [h.value];
      return ch(b) && (b[0].key = `${h.type}-${y}`), b;
    }) : ce(i) && (u = [i]);
    const f = Dt(Ye(), a), m = ce(e.tag) || Ve(e.tag) ? e.tag : nd();
    return Lu(m, f, u);
  };
}
Dt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, dl);
const uh = /* @__PURE__ */ Wr("global-vue-i18n");
function na(e = {}) {
  const t = td();
  if (t == null)
    throw Yo(fo.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Yo(fo.NOT_INSTALLED);
  const n = dh(t), r = ph(n), o = oh(t), a = fh(e, o);
  if (a === "global")
    return ah(r, e, o), r;
  if (a === "parent") {
    let i = mh(n, t, e.__useComponent);
    return i == null && (i = r), i;
  }
  const s = n;
  let c = s.__getInstance(t);
  if (c == null) {
    const i = Dt({}, e);
    "__i18n" in o && (i.__i18n = o.__i18n), r && (i.__root = r), c = lh(i), s.__composerExtend && (c[Bs] = s.__composerExtend(c)), gh(s, t, c), s.__setInstance(t, c);
  }
  return c;
}
function dh(e) {
  const t = Ge(e.isCE ? uh : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Yo(e.isCE ? fo.NOT_INSTALLED_WITH_PROVIDE : fo.UNEXPECTED_ERROR);
  return t;
}
function fh(e, t) {
  return Ha(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ph(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function mh(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = hh(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = s.__getInstance(a);
      c != null && (r = c.__composer, n && r && !r[Ju] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function hh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function gh(e, t, n) {
  Tt(() => {
  }, t), Wa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Bs];
    o && (o(), delete r[Bs]);
  }, t);
}
Dt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, dl);
nh();
Mm(wm);
Dm(Nm);
Fm(Wu);
function vh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Ot(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Gi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Gi || (Gi = {}));
async function bh(e, t) {
  await Ot("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function fl(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return Ot("plugin:event|listen", {
    event: e,
    target: o,
    handler: vh(t)
  }).then((a) => async () => bh(e, a));
}
function pl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Hr = pl();
function od(e) {
  Hr = e;
}
var Vo = { exec: () => null };
function ze(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Xt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var yh = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Xt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, _h = /^(?:[ \t]*(?:\n|$))+/, wh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, kh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ra = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Sh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ml = /(?:[*+-]|\d{1,9}[.)])/, ad = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, sd = ze(ad).replace(/bull/g, ml).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Th = ze(ad).replace(/bull/g, ml).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), hl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Eh = /^[^\n]+/, gl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Ah = ze(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", gl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ch = ze(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ml).getRegex(), qa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", vl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ih = ze("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", vl).replace("tag", qa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ld = ze(hl).replace("hr", ra).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex(), Lh = ze(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ld).getRegex(), bl = { blockquote: Lh, code: wh, def: Ah, fences: kh, heading: Sh, hr: ra, html: Ih, lheading: sd, list: Ch, newline: _h, paragraph: ld, table: Vo, text: Eh }, Ki = ze("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ra).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex(), Oh = { ...bl, lheading: Th, table: Ki, paragraph: ze(hl).replace("hr", ra).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ki).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa).getRegex() }, xh = { ...bl, html: ze(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", vl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Vo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ze(hl).replace("hr", ra).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", sd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Rh = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Nh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, id = /^( {2,}|\\)\n(?!\s*$)/, Ph = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ya = /[\p{P}\p{S}]/u, yl = /[\s\p{P}\p{S}]/u, cd = /[^\s\p{P}\p{S}]/u, $h = ze(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, yl).getRegex(), ud = /(?!~)[\p{P}\p{S}]/u, Mh = /(?!~)[\s\p{P}\p{S}]/u, Dh = /(?:[^\s\p{P}\p{S}]|~)/u, Fh = ze(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", yh ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), dd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, zh = ze(dd, "u").replace(/punct/g, Ya).getRegex(), Bh = ze(dd, "u").replace(/punct/g, ud).getRegex(), fd = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Vh = ze(fd, "gu").replace(/notPunctSpace/g, cd).replace(/punctSpace/g, yl).replace(/punct/g, Ya).getRegex(), Uh = ze(fd, "gu").replace(/notPunctSpace/g, Dh).replace(/punctSpace/g, Mh).replace(/punct/g, ud).getRegex(), jh = ze("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, cd).replace(/punctSpace/g, yl).replace(/punct/g, Ya).getRegex(), Wh = ze(/\\(punct)/, "gu").replace(/punct/g, Ya).getRegex(), Hh = ze(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Gh = ze(vl).replace("(?:-->|$)", "-->").getRegex(), Kh = ze("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Gh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ra = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, qh = ze(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ra).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), pd = ze(/^!?\[(label)\]\[(ref)\]/).replace("label", Ra).replace("ref", gl).getRegex(), md = ze(/^!?\[(ref)\](?:\[\])?/).replace("ref", gl).getRegex(), Yh = ze("reflink|nolink(?!\\()", "g").replace("reflink", pd).replace("nolink", md).getRegex(), qi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, _l = { _backpedal: Vo, anyPunctuation: Wh, autolink: Hh, blockSkip: Fh, br: id, code: Nh, del: Vo, emStrongLDelim: zh, emStrongRDelimAst: Vh, emStrongRDelimUnd: jh, escape: Rh, link: qh, nolink: md, punctuation: $h, reflink: pd, reflinkSearch: Yh, tag: Kh, text: Ph, url: Vo }, Zh = { ..._l, link: ze(/^!?\[(label)\]\((.*?)\)/).replace("label", Ra).getRegex(), reflink: ze(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ra).getRegex() }, Vs = { ..._l, emStrongRDelimAst: Uh, emStrongLDelim: Bh, url: ze(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", qi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: ze(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", qi).getRegex() }, Xh = { ...Vs, br: ze(id).replace("{2,}", "*").getRegex(), text: ze(Vs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ha = { normal: bl, gfm: Oh, pedantic: xh }, xo = { normal: _l, gfm: Vs, breaks: Xh, pedantic: Zh }, Qh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Yi = (e) => Qh[e];
function tr(e, t) {
  if (t) {
    if (Xt.escapeTest.test(e)) return e.replace(Xt.escapeReplace, Yi);
  } else if (Xt.escapeTestNoEncode.test(e)) return e.replace(Xt.escapeReplaceNoEncode, Yi);
  return e;
}
function Zi(e) {
  try {
    e = encodeURI(e).replace(Xt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Xi(e, t) {
  let n = e.replace(Xt.findPipe, (a, s, c) => {
    let i = !1, u = s;
    for (; --u >= 0 && c[u] === "\\"; ) i = !i;
    return i ? "|" : " |";
  }), r = n.split(Xt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Xt.slashPipe, "|");
  return r;
}
function Ro(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Jh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Qi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, c = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let i = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: c, tokens: r.inlineTokens(c) };
  return r.state.inLink = !1, i;
}
function eg(e, t, n) {
  let r = e.match(n.other.indentCodeCompensation);
  if (r === null) return t;
  let o = r[1];
  return t.split(`
`).map((a) => {
    let s = a.match(n.other.beginningSpace);
    if (s === null) return a;
    let [c] = s;
    return c.length >= o.length ? a.slice(o.length) : a;
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Ro(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = eg(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = Ro(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Ro(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = Ro(t[0], `
`).split(`
`), r = "", o = "", a = [];
      for (; n.length > 0; ) {
        let s = !1, c = [], i;
        for (i = 0; i < n.length; i++) if (this.rules.other.blockquoteStart.test(n[i])) c.push(n[i]), s = !0;
        else if (!s) c.push(n[i]);
        else break;
        n = n.slice(i);
        let u = c.join(`
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
          let y = h, v = y.raw + `
` + n.join(`
`), b = this.blockquote(v);
          a[a.length - 1] = b, r = r.substring(0, r.length - y.raw.length) + b.raw, o = o.substring(0, o.length - y.text.length) + b.text;
          break;
        } else if (h?.type === "list") {
          let y = h, v = y.raw + `
` + n.join(`
`), b = this.list(v);
          a[a.length - 1] = b, r = r.substring(0, r.length - h.raw.length) + b.raw, o = o.substring(0, o.length - y.raw.length) + b.raw, n = v.substring(a.at(-1).raw.length).split(`
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
        let i = !1, u = "", f = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), h = e.split(`
`, 1)[0], y = !m.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, f = m.trimStart()) : y ? v = t[1].length + 1 : (v = t[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, f = m.slice(v), v += t[1].length), y && this.rules.other.blankLine.test(h) && (u += h + `
`, e = e.substring(h.length + 1), i = !0), !i) {
          let b = this.rules.other.nextBulletRegex(v), I = this.rules.other.hrRegex(v), p = this.rules.other.fencesBeginRegex(v), L = this.rules.other.headingBeginRegex(v), P = this.rules.other.htmlBeginRegex(v);
          for (; e; ) {
            let C = e.split(`
`, 1)[0], S;
            if (h = C, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), S = h) : S = h.replace(this.rules.other.tabCharGlobal, "    "), p.test(h) || L.test(h) || P.test(h) || b.test(h) || I.test(h)) break;
            if (S.search(this.rules.other.nonSpaceChar) >= v || !h.trim()) f += `
` + S.slice(v);
            else {
              if (y || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || p.test(m) || L.test(m) || I.test(m)) break;
              f += `
` + h;
            }
            !y && !h.trim() && (y = !0), u += C + `
`, e = e.substring(C.length + 1), m = S.slice(v);
          }
        }
        o.loose || (s ? o.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (s = !0)), o.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(f), loose: !1, text: f, tokens: [] }), o.raw += u;
      }
      let c = o.items.at(-1);
      if (c) c.raw = c.raw.trimEnd(), c.text = c.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let i of o.items) {
        if (this.lexer.state.top = !1, i.tokens = this.lexer.blockTokens(i.text, []), i.task) {
          if (i.text = i.text.replace(this.rules.other.listReplaceTask, ""), i.tokens[0]?.type === "text" || i.tokens[0]?.type === "paragraph") {
            i.tokens[0].raw = i.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), i.tokens[0].text = i.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let f = this.lexer.inlineQueue.length - 1; f >= 0; f--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)) {
              this.lexer.inlineQueue[f].src = this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let u = this.rules.other.listTaskCheckbox.exec(i.raw);
          if (u) {
            let f = { type: "checkbox", raw: u[0] + " ", checked: u[0] !== "[ ]" };
            i.checked = f.checked, o.loose ? i.tokens[0] && ["paragraph", "text"].includes(i.tokens[0].type) && "tokens" in i.tokens[0] && i.tokens[0].tokens ? (i.tokens[0].raw = f.raw + i.tokens[0].raw, i.tokens[0].text = f.raw + i.tokens[0].text, i.tokens[0].tokens.unshift(f)) : i.tokens.unshift({ type: "paragraph", raw: f.raw, text: f.raw, tokens: [f] }) : i.tokens.unshift(f);
          }
        }
        if (!o.loose) {
          let u = i.tokens.filter((m) => m.type === "space"), f = u.length > 0 && u.some((m) => this.rules.other.anyLine.test(m.raw));
          o.loose = f;
        }
      }
      if (o.loose) for (let i of o.items) {
        i.loose = !0;
        for (let u of i.tokens) u.type === "text" && (u.type = "paragraph");
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
    let n = Xi(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(Xi(s, a.header.length).map((c, i) => ({ text: c, tokens: this.lexer.inline(c), header: !1, align: a.align[i] })));
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
        let a = Ro(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Jh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), Qi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return Qi(n, o, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let o = [...r[0]].length - 1, a, s, c = o, i = 0, u = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + o); (r = u.exec(t)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
        if (s = [...a].length, r[3] || r[4]) {
          c += s;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + s) % 3)) {
          i += s;
          continue;
        }
        if (c -= s, c > 0) continue;
        s = Math.min(s, s + c + i);
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
}, gn = class Us {
  constructor(t) {
    qe(this, "tokens");
    qe(this, "options");
    qe(this, "state");
    qe(this, "inlineQueue");
    qe(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Hr, this.options.tokenizer = this.options.tokenizer || new Na(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Xt, block: ha.normal, inline: xo.normal };
    this.options.pedantic ? (n.block = ha.pedantic, n.inline = xo.pedantic) : this.options.gfm && (n.block = ha.gfm, this.options.breaks ? n.inline = xo.breaks : n.inline = xo.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ha, inline: xo };
  }
  static lex(t, n) {
    return new Us(n).lex(t);
  }
  static lexInline(t, n) {
    return new Us(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Xt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Xt.tabCharGlobal, "    ").replace(Xt.spaceLine, "")); t; ) {
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
        let s = 1 / 0, c = t.slice(1), i;
        this.options.extensions.startBlock.forEach((u) => {
          i = u.call({ lexer: this }, c), typeof i == "number" && i >= 0 && (s = Math.min(s, i));
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
      let i = Object.keys(this.tokens.links);
      if (i.length > 0) for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; ) i.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; ) r = r.slice(0, o.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let a;
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; ) a = o[2] ? o[2].length : 0, r = r.slice(0, o.index + a) + "[" + "a".repeat(o[0].length - a - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    r = this.options.hooks?.emStrongMask?.call({ lexer: this }, r) ?? r;
    let s = !1, c = "";
    for (; t; ) {
      s || (c = ""), s = !1;
      let i;
      if (this.options.extensions?.inline?.some((f) => (i = f.call({ lexer: this }, t, n)) ? (t = t.substring(i.raw.length), n.push(i), !0) : !1)) continue;
      if (i = this.tokenizer.escape(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.tag(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.link(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(i.raw.length);
        let f = n.at(-1);
        i.type === "text" && f?.type === "text" ? (f.raw += i.raw, f.text += i.text) : n.push(i);
        continue;
      }
      if (i = this.tokenizer.emStrong(t, r, c)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.codespan(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.br(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.del(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.autolink(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (!this.state.inLink && (i = this.tokenizer.url(t))) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      let u = t;
      if (this.options.extensions?.startInline) {
        let f = 1 / 0, m = t.slice(1), h;
        this.options.extensions.startInline.forEach((y) => {
          h = y.call({ lexer: this }, m), typeof h == "number" && h >= 0 && (f = Math.min(f, h));
        }), f < 1 / 0 && f >= 0 && (u = t.substring(0, f + 1));
      }
      if (i = this.tokenizer.inlineText(u)) {
        t = t.substring(i.raw.length), i.raw.slice(-1) !== "_" && (c = i.raw.slice(-1)), s = !0;
        let f = n.at(-1);
        f?.type === "text" ? (f.raw += i.raw, f.text += i.text) : n.push(i);
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
    let o = (n || "").match(Xt.notSpaceStart)?.[0], a = t.replace(Xt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + tr(o) + '">' + (r ? a : tr(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : tr(a, !0)) + `</code></pre>
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
    for (let c = 0; c < t.items.length; c++) {
      let i = t.items[c];
      o += this.listitem(i);
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
      for (let c = 0; c < s.length; c++) r += this.tablecell(s[c]);
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
    return `<code>${tr(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Zi(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + tr(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Zi(t);
    if (a === null) return tr(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${tr(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : tr(t.text);
  }
}, wl = class {
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
}, vn = class js {
  constructor(t) {
    qe(this, "options");
    qe(this, "renderer");
    qe(this, "textRenderer");
    this.options = t || Hr, this.options.renderer = this.options.renderer || new Pa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new wl();
  }
  static parse(t, n) {
    return new js(n).parse(t);
  }
  static parseInline(t, n) {
    return new js(n).parseInline(t);
  }
  parse(t) {
    let n = "";
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      if (this.options.extensions?.renderers?.[o.type]) {
        let s = o, c = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(s.type)) {
          n += c || "";
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
        let c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          r += c || "";
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
          let c = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return r;
  }
}, Sa, Fo = (Sa = class {
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
    return this.block ? gn.lex : gn.lexInline;
  }
  provideParser() {
    return this.block ? vn.parse : vn.parseInline;
  }
}, qe(Sa, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), qe(Sa, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Sa), tg = class {
  constructor(...t) {
    qe(this, "defaults", pl());
    qe(this, "options", this.setOptions);
    qe(this, "parse", this.parseMarkdown(!0));
    qe(this, "parseInline", this.parseMarkdown(!1));
    qe(this, "Parser", vn);
    qe(this, "Renderer", Pa);
    qe(this, "TextRenderer", wl);
    qe(this, "Lexer", gn);
    qe(this, "Tokenizer", Na);
    qe(this, "Hooks", Fo);
    this.use(...t);
  }
  walkTokens(t, n) {
    let r = [];
    for (let o of t) switch (r = r.concat(n.call(this, o)), o.type) {
      case "table": {
        let a = o;
        for (let s of a.header) r = r.concat(this.walkTokens(s.tokens, n));
        for (let s of a.rows) for (let c of s) r = r.concat(this.walkTokens(c.tokens, n));
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
          let c = a[s].flat(1 / 0);
          r = r.concat(this.walkTokens(c, n));
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
          s ? n.renderers[a.name] = function(...c) {
            let i = a.renderer.apply(this, c);
            return i === !1 && (i = s.apply(this, c)), i;
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
          let c = s, i = r.renderer[c], u = a[c];
          a[c] = (...f) => {
            let m = i.apply(a, f);
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
          let c = s, i = r.tokenizer[c], u = a[c];
          a[c] = (...f) => {
            let m = i.apply(a, f);
            return m === !1 && (m = u.apply(a, f)), m;
          };
        }
        o.tokenizer = a;
      }
      if (r.hooks) {
        let a = this.defaults.hooks || new Fo();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let c = s, i = r.hooks[c], u = a[c];
          Fo.passThroughHooks.has(s) ? a[c] = (f) => {
            if (this.defaults.async && Fo.passThroughHooksRespectAsync.has(s)) return (async () => {
              let h = await i.call(a, f);
              return u.call(a, h);
            })();
            let m = i.call(a, f);
            return u.call(a, m);
          } : a[c] = (...f) => {
            if (this.defaults.async) return (async () => {
              let h = await i.apply(a, f);
              return h === !1 && (h = await u.apply(a, f)), h;
            })();
            let m = i.apply(a, f);
            return m === !1 && (m = u.apply(a, f)), m;
          };
        }
        o.hooks = a;
      }
      if (r.walkTokens) {
        let a = this.defaults.walkTokens, s = r.walkTokens;
        o.walkTokens = function(c) {
          let i = [];
          return i.push(s.call(this, c)), a && (i = i.concat(a.call(this, c))), i;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return gn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return vn.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let c = a.hooks ? await a.hooks.preprocess(n) : n, i = await (a.hooks ? await a.hooks.provideLexer() : t ? gn.lex : gn.lexInline)(c, a), u = a.hooks ? await a.hooks.processAllTokens(i) : i;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let f = await (a.hooks ? await a.hooks.provideParser() : t ? vn.parse : vn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(f) : f;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let c = (a.hooks ? a.hooks.provideLexer() : t ? gn.lex : gn.lexInline)(n, a);
        a.hooks && (c = a.hooks.processAllTokens(c)), a.walkTokens && this.walkTokens(c, a.walkTokens);
        let i = (a.hooks ? a.hooks.provideParser() : t ? vn.parse : vn.parseInline)(c, a);
        return a.hooks && (i = a.hooks.postprocess(i)), i;
      } catch (c) {
        return s(c);
      }
    };
  }
  onError(t, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let o = "<p>An error occurred:</p><pre>" + tr(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Vr = new tg();
function He(e, t) {
  return Vr.parse(e, t);
}
He.options = He.setOptions = function(e) {
  return Vr.setOptions(e), He.defaults = Vr.defaults, od(He.defaults), He;
};
He.getDefaults = pl;
He.defaults = Hr;
He.use = function(...e) {
  return Vr.use(...e), He.defaults = Vr.defaults, od(He.defaults), He;
};
He.walkTokens = function(e, t) {
  return Vr.walkTokens(e, t);
};
He.parseInline = Vr.parseInline;
He.Parser = vn;
He.parser = vn.parse;
He.Renderer = Pa;
He.TextRenderer = wl;
He.Lexer = gn;
He.lexer = gn.lex;
He.Tokenizer = Na;
He.Hooks = Fo;
He.parse = He;
He.options;
He.setOptions;
He.use;
He.walkTokens;
He.parseInline;
vn.parse;
gn.lex;
async function hd() {
  return await Ot("local_ai_get_config");
}
async function zo(e) {
  return await Ot("local_ai_save_config", { config: e });
}
async function gd(e) {
  return await Ot("local_ai_scan_models", {
    config: e ?? null
  });
}
async function ng() {
  return await Ot("local_ai_get_runtime_status");
}
async function vd() {
  return await Ot("local_ai_get_status");
}
async function rg(e) {
  return await Ot("local_ai_start_service", {
    config: e ?? null
  });
}
async function bd() {
  return await Ot("local_ai_restart_service");
}
async function og() {
  await Ot("local_ai_stop_service");
}
function yd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function ag(e, t, n = {}) {
  const r = n.requestId ?? yd(), o = await fl(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === r && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await Ot("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function bs(e) {
  return await Ot("local_ai_cancel_chat_stream", { requestId: e });
}
async function _d(e) {
  return await Ot("local_ai_web_search", {
    request: e
  });
}
async function sg() {
  return await Ot("local_ai_agent_reach_status");
}
async function lg(e) {
  return await Ot("local_ai_weather", {
    request: e
  });
}
async function ig() {
  return await Ot("local_ai_get_chat_histories");
}
async function cg(e) {
  return await Ot("local_ai_save_chat_history", {
    history: e
  });
}
async function ug(e) {
  return await Ot("local_ai_delete_chat_history", {
    historyId: e
  });
}
const dg = /* @__PURE__ */ new Set([
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
]), fg = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), pg = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), mg = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), hg = 5, gg = 1024 * 1024, vg = 5 * 1024 * 1024, Ji = 4e4, kl = (e) => e.split(".").pop()?.toLowerCase() ?? "", bg = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, ys = (e) => fg.has(e.type) || pg.has(kl(e.name)), ec = (e) => e.type.startsWith("text/") || dg.has(kl(e.name)), yg = (e) => mg.has(kl(e.name)), _g = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), wg = async (e) => {
  const t = await e.text();
  return t.length <= Ji ? { text: t, truncated: !1 } : {
    text: t.slice(0, Ji),
    truncated: !0
  };
}, kg = (e, t) => {
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
function tc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Sg(e) {
  if (Array.isArray(e)) return e;
}
function Tg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, c = [], i = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(i = (r = a.call(n)).done) && (c.push(r.value), c.length !== t); i = !0) ;
    } catch (f) {
      u = !0, o = f;
    } finally {
      try {
        if (!i && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return c;
  }
}
function Eg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ag(e, t) {
  return Sg(e) || Tg(e, t) || Cg(e, t) || Eg();
}
function Cg(e, t) {
  if (e) {
    if (typeof e == "string") return tc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tc(e, t) : void 0;
  }
}
const wd = Object.entries, nc = Object.setPrototypeOf, Ig = Object.isFrozen, Lg = Object.getPrototypeOf, Og = Object.getOwnPropertyDescriptor;
let Jt = Object.freeze, un = Object.seal, so = Object.create, kd = typeof Reflect < "u" && Reflect, Ws = kd.apply, Hs = kd.construct;
Jt || (Jt = function(t) {
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
const eo = It(Array.prototype.forEach), xg = It(Array.prototype.lastIndexOf), rc = It(Array.prototype.pop), to = It(Array.prototype.push), Rg = It(Array.prototype.splice), Yt = Array.isArray, Bo = It(String.prototype.toLowerCase), _s = It(String.prototype.toString), oc = It(String.prototype.match), no = It(String.prototype.replace), ac = It(String.prototype.indexOf), Ng = It(String.prototype.trim), Pg = It(Number.prototype.toString), $g = It(Boolean.prototype.toString), sc = typeof BigInt > "u" ? null : It(BigInt.prototype.toString), lc = typeof Symbol > "u" ? null : It(Symbol.prototype.toString), ht = It(Object.prototype.hasOwnProperty), No = It(Object.prototype.toString), Mt = It(RegExp.prototype.test), Po = Mg(TypeError);
function It(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Ws(e, t, r);
  };
}
function Mg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Hs(e, n);
  };
}
function Re(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Bo;
  if (nc && nc(e, null), !Yt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Ig(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function Dg(e) {
  for (let t = 0; t < e.length; t++)
    ht(e, t) || (e[t] = null);
  return e;
}
function jt(e) {
  const t = so(null);
  for (const r of wd(e)) {
    var n = Ag(r, 2);
    const o = n[0], a = n[1];
    ht(e, o) && (Yt(a) ? t[o] = Dg(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = jt(a) : t[o] = a);
  }
  return t;
}
function Fg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Pg(e);
    case "boolean":
      return $g(e);
    case "bigint":
      return sc ? sc(e) : "0";
    case "symbol":
      return lc ? lc(e) : "Symbol()";
    case "undefined":
      return No(e);
    case "function":
    case "object": {
      if (e === null)
        return No(e);
      const t = e, n = Rn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : No(r);
      }
      return No(e);
    }
    default:
      return No(e);
  }
}
function Rn(e, t) {
  for (; e !== null; ) {
    const r = Og(e, t);
    if (r) {
      if (r.get)
        return It(r.get);
      if (typeof r.value == "function")
        return It(r.value);
    }
    e = Lg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function zg(e) {
  try {
    return Mt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ic = Jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ws = Jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ks = Jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Bg = Jt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ss = Jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Vg = Jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), cc = Jt(["#text"]), uc = Jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ts = Jt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), dc = Jt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ga = Jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ug = un(/{{[\w\W]*|^[\w\W]*}}/g), jg = un(/<%[\w\W]*|^[\w\W]*%>/g), Wg = un(/\${[\w\W]*/g), Hg = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), Gg = un(/^aria-[\-\w]+$/), fc = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Kg = un(/^(?:\w+script|data):/i), qg = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Yg = un(/^html$/i), Zg = un(/^[a-z][.\w]*(-[.\w]+)+$/i), xn = {
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
}, Xg = function() {
  return typeof window > "u" ? null : window;
}, Qg = function(t, n) {
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
}, pc = function() {
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
function Sd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Xg();
  const t = (ie) => Sd(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== xn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, c = e.Element, i = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, m = e.trustedTypes, h = c.prototype, y = Rn(h, "cloneNode"), v = Rn(h, "remove"), b = Rn(h, "nextSibling"), I = Rn(h, "childNodes"), p = Rn(h, "parentNode"), L = Rn(h, "shadowRoot"), P = Rn(h, "attributes"), C = s && s.prototype ? Rn(s.prototype, "nodeType") : null, S = s && s.prototype ? Rn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let x, O = "";
  const J = n, X = J.implementation, Q = J.createNodeIterator, ue = J.createDocumentFragment, se = J.getElementsByTagName, be = r.importNode;
  let _e = pc();
  t.isSupported = typeof wd == "function" && typeof p == "function" && X && X.createHTMLDocument !== void 0;
  const H = Ug, ee = jg, W = Wg, he = Hg, me = Gg, Le = Kg, De = qg, Fe = Zg;
  let xe = fc, ye = null;
  const Xe = Re({}, [...ic, ...ws, ...ks, ...Ss, ...cc]);
  let Ce = null;
  const Ze = Re({}, [...uc, ...Ts, ...dc, ...ga]);
  let ge = Object.seal(so(null, {
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
  })), Je = null, vt = null;
  const Qe = Object.seal(so(null, {
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
  let Te = !0, ft = !0, pt = !1, te = !0, Z = !1, We = !0, T = !1, E = !1, V = !1, F = !1, we = !1, pe = !1, A = !0, U = !1;
  const Ee = "user-content-";
  let Pe = !0, at = !1, st = {}, et = null;
  const Gn = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Kn = null;
  const Yr = Re({}, ["audio", "video", "img", "source", "image", "track"]);
  let qn = null;
  const ln = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), En = "http://www.w3.org/1998/Math/MathML", pn = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml";
  let An = Kt, xr = !1, Cn = null;
  const vr = Re({}, [En, pn, Kt], _s);
  let Yn = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = Re({}, ["annotation-xml"]);
  const So = Re({}, ["title", "style", "font", "a", "script"]);
  let Zn = null;
  const Zr = ["application/xhtml+xml", "text/html"], To = "text/html";
  let Ke = null, In = null;
  const Eo = n.createElement("form"), Nr = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Xn = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (In && In === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = jt(_), Zn = // eslint-disable-next-line unicorn/prefer-includes
    Zr.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? To : _.PARSER_MEDIA_TYPE, Ke = Zn === "application/xhtml+xml" ? _s : Bo, ye = ht(_, "ALLOWED_TAGS") && Yt(_.ALLOWED_TAGS) ? Re({}, _.ALLOWED_TAGS, Ke) : Xe, Ce = ht(_, "ALLOWED_ATTR") && Yt(_.ALLOWED_ATTR) ? Re({}, _.ALLOWED_ATTR, Ke) : Ze, Cn = ht(_, "ALLOWED_NAMESPACES") && Yt(_.ALLOWED_NAMESPACES) ? Re({}, _.ALLOWED_NAMESPACES, _s) : vr, qn = ht(_, "ADD_URI_SAFE_ATTR") && Yt(_.ADD_URI_SAFE_ATTR) ? Re(jt(ln), _.ADD_URI_SAFE_ATTR, Ke) : ln, Kn = ht(_, "ADD_DATA_URI_TAGS") && Yt(_.ADD_DATA_URI_TAGS) ? Re(jt(Yr), _.ADD_DATA_URI_TAGS, Ke) : Yr, et = ht(_, "FORBID_CONTENTS") && Yt(_.FORBID_CONTENTS) ? Re({}, _.FORBID_CONTENTS, Ke) : Gn, Je = ht(_, "FORBID_TAGS") && Yt(_.FORBID_TAGS) ? Re({}, _.FORBID_TAGS, Ke) : jt({}), vt = ht(_, "FORBID_ATTR") && Yt(_.FORBID_ATTR) ? Re({}, _.FORBID_ATTR, Ke) : jt({}), st = ht(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? jt(_.USE_PROFILES) : _.USE_PROFILES : !1, Te = _.ALLOW_ARIA_ATTR !== !1, ft = _.ALLOW_DATA_ATTR !== !1, pt = _.ALLOW_UNKNOWN_PROTOCOLS || !1, te = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = _.SAFE_FOR_TEMPLATES || !1, We = _.SAFE_FOR_XML !== !1, T = _.WHOLE_DOCUMENT || !1, F = _.RETURN_DOM || !1, we = _.RETURN_DOM_FRAGMENT || !1, pe = _.RETURN_TRUSTED_TYPE || !1, V = _.FORCE_BODY || !1, A = _.SANITIZE_DOM !== !1, U = _.SANITIZE_NAMED_PROPS || !1, Pe = _.KEEP_CONTENT !== !1, at = _.IN_PLACE || !1, xe = zg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : fc, An = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Kt, Yn = ht(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? jt(_.MATHML_TEXT_INTEGRATION_POINTS) : Re({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = ht(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? jt(_.HTML_INTEGRATION_POINTS) : Re({}, ["annotation-xml"]);
    const G = ht(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? jt(_.CUSTOM_ELEMENT_HANDLING) : so(null);
    if (ge = so(null), ht(G, "tagNameCheck") && Nr(G.tagNameCheck) && (ge.tagNameCheck = G.tagNameCheck), ht(G, "attributeNameCheck") && Nr(G.attributeNameCheck) && (ge.attributeNameCheck = G.attributeNameCheck), ht(G, "allowCustomizedBuiltInElements") && typeof G.allowCustomizedBuiltInElements == "boolean" && (ge.allowCustomizedBuiltInElements = G.allowCustomizedBuiltInElements), Z && (ft = !1), we && (F = !0), st && (ye = Re({}, cc), Ce = so(null), st.html === !0 && (Re(ye, ic), Re(Ce, uc)), st.svg === !0 && (Re(ye, ws), Re(Ce, Ts), Re(Ce, ga)), st.svgFilters === !0 && (Re(ye, ks), Re(Ce, Ts), Re(Ce, ga)), st.mathMl === !0 && (Re(ye, Ss), Re(Ce, dc), Re(Ce, ga))), Qe.tagCheck = null, Qe.attributeCheck = null, ht(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? Qe.tagCheck = _.ADD_TAGS : Yt(_.ADD_TAGS) && (ye === Xe && (ye = jt(ye)), Re(ye, _.ADD_TAGS, Ke))), ht(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? Qe.attributeCheck = _.ADD_ATTR : Yt(_.ADD_ATTR) && (Ce === Ze && (Ce = jt(Ce)), Re(Ce, _.ADD_ATTR, Ke))), ht(_, "ADD_URI_SAFE_ATTR") && Yt(_.ADD_URI_SAFE_ATTR) && Re(qn, _.ADD_URI_SAFE_ATTR, Ke), ht(_, "FORBID_CONTENTS") && Yt(_.FORBID_CONTENTS) && (et === Gn && (et = jt(et)), Re(et, _.FORBID_CONTENTS, Ke)), ht(_, "ADD_FORBID_CONTENTS") && Yt(_.ADD_FORBID_CONTENTS) && (et === Gn && (et = jt(et)), Re(et, _.ADD_FORBID_CONTENTS, Ke)), Pe && (ye["#text"] = !0), T && Re(ye, ["html", "head", "body"]), ye.table && (Re(ye, ["tbody"]), delete Je.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Po('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Po('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      x = _.TRUSTED_TYPES_POLICY, O = x.createHTML("");
    } else
      x === void 0 && (x = Qg(m, o)), x !== null && typeof O == "string" && (O = x.createHTML(""));
    (_e.uponSanitizeElement.length > 0 || _e.uponSanitizeAttribute.length > 0) && ye === Xe && (ye = jt(ye)), _e.uponSanitizeAttribute.length > 0 && Ce === Ze && (Ce = jt(Ce)), Jt && Jt(_), In = _;
  }, Pr = Re({}, [...ws, ...ks, ...Bg]), br = Re({}, [...Ss, ...Vg]), Ao = function(_) {
    let G = p(_);
    (!G || !G.tagName) && (G = {
      namespaceURI: An,
      tagName: "template"
    });
    const ae = Bo(_.tagName), Me = Bo(G.tagName);
    return Cn[_.namespaceURI] ? _.namespaceURI === pn ? G.namespaceURI === Kt ? ae === "svg" : G.namespaceURI === En ? ae === "svg" && (Me === "annotation-xml" || Yn[Me]) : !!Pr[ae] : _.namespaceURI === En ? G.namespaceURI === Kt ? ae === "math" : G.namespaceURI === pn ? ae === "math" && Rr[Me] : !!br[ae] : _.namespaceURI === Kt ? G.namespaceURI === pn && !Rr[Me] || G.namespaceURI === En && !Yn[Me] ? !1 : !br[ae] && (So[ae] || !Pr[ae]) : !!(Zn === "application/xhtml+xml" && Cn[_.namespaceURI]) : !1;
  }, Ft = function(_) {
    to(t.removed, {
      element: _
    });
    try {
      p(_).removeChild(_);
    } catch {
      v(_);
    }
  }, D = function(_, G) {
    try {
      to(t.removed, {
        attribute: G.getAttributeNode(_),
        from: G
      });
    } catch {
      to(t.removed, {
        attribute: null,
        from: G
      });
    }
    if (G.removeAttribute(_), _ === "is")
      if (F || we)
        try {
          Ft(G);
        } catch {
        }
      else
        try {
          G.setAttribute(_, "");
        } catch {
        }
  }, re = function(_) {
    let G = null, ae = null;
    if (V)
      _ = "<remove></remove>" + _;
    else {
      const $e = oc(_, /^[\r\n\t ]+/);
      ae = $e && $e[0];
    }
    Zn === "application/xhtml+xml" && An === Kt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Me = x ? x.createHTML(_) : _;
    if (An === Kt)
      try {
        G = new f().parseFromString(Me, Zn);
      } catch {
      }
    if (!G || !G.documentElement) {
      G = X.createDocument(An, "template", null);
      try {
        G.documentElement.innerHTML = xr ? O : Me;
      } catch {
      }
    }
    const Ne = G.body || G.documentElement;
    return _ && ae && Ne.insertBefore(n.createTextNode(ae), Ne.childNodes[0] || null), An === Kt ? se.call(G, T ? "html" : "body")[0] : T ? G.documentElement : Ne;
  }, ke = function(_) {
    return Q.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      i.SHOW_ELEMENT | i.SHOW_COMMENT | i.SHOW_TEXT | i.SHOW_PROCESSING_INSTRUCTION | i.SHOW_CDATA_SECTION,
      null
    );
  }, lt = function(_) {
    _.normalize();
    const G = Q.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      i.SHOW_TEXT | i.SHOW_COMMENT | i.SHOW_CDATA_SECTION | i.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ae = G.nextNode();
    for (; ae; ) {
      let Me = ae.data;
      eo([H, ee, W], (Ne) => {
        Me = no(Me, Ne, " ");
      }), ae.data = Me, ae = G.nextNode();
    }
  }, Et = function(_) {
    const G = S ? S(_) : null;
    return typeof G != "string" || Ke(G) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    _.nodeType !== C(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== I(_);
  }, bt = function(_) {
    if (!C || typeof _ != "object" || _ === null)
      return !1;
    try {
      return C(_) === xn.documentFragment;
    } catch {
      return !1;
    }
  }, zt = function(_) {
    if (!C || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof C(_) == "number";
    } catch {
      return !1;
    }
  };
  function Bt(ie, _, G) {
    eo(ie, (ae) => {
      ae.call(t, _, G, In);
    });
  }
  const mn = function(_) {
    let G = null;
    if (Bt(_e.beforeSanitizeElements, _, null), Et(_))
      return Ft(_), !0;
    const ae = Ke(_.nodeName);
    if (Bt(_e.uponSanitizeElement, _, {
      tagName: ae,
      allowedTags: ye
    }), We && _.hasChildNodes() && !zt(_.firstElementChild) && Mt(/<[/\w!]/g, _.innerHTML) && Mt(/<[/\w!]/g, _.textContent) || We && _.namespaceURI === Kt && ae === "style" && zt(_.firstElementChild) || _.nodeType === xn.progressingInstruction || We && _.nodeType === xn.comment && Mt(/<[/\w]/g, _.data))
      return Ft(_), !0;
    if (Je[ae] || !(Qe.tagCheck instanceof Function && Qe.tagCheck(ae)) && !ye[ae]) {
      if (!Je[ae] && ca(ae) && (ge.tagNameCheck instanceof RegExp && Mt(ge.tagNameCheck, ae) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(ae)))
        return !1;
      if (Pe && !et[ae]) {
        const Ne = p(_), $e = I(_);
        if ($e && Ne) {
          const qt = $e.length;
          for (let Vt = qt - 1; Vt >= 0; --Vt) {
            const Ut = y($e[Vt], !0);
            Ne.insertBefore(Ut, b(_));
          }
        }
      }
      return Ft(_), !0;
    }
    return (C ? C(_) : _.nodeType) === xn.element && !Ao(_) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && Mt(/<\/no(script|embed|frames)/i, _.innerHTML) ? (Ft(_), !0) : (Z && _.nodeType === xn.text && (G = _.textContent, eo([H, ee, W], (Ne) => {
      G = no(G, Ne, " ");
    }), _.textContent !== G && (to(t.removed, {
      element: _.cloneNode()
    }), _.textContent = G)), Bt(_e.afterSanitizeElements, _, null), !1);
  }, Xr = function(_, G, ae) {
    if (vt[G] || A && (G === "id" || G === "name") && (ae in n || ae in Eo))
      return !1;
    const Me = Ce[G] || Qe.attributeCheck instanceof Function && Qe.attributeCheck(G, _);
    if (!(ft && !vt[G] && Mt(he, G))) {
      if (!(Te && Mt(me, G))) {
        if (!Me || vt[G]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ca(_) && (ge.tagNameCheck instanceof RegExp && Mt(ge.tagNameCheck, _) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(_)) && (ge.attributeNameCheck instanceof RegExp && Mt(ge.attributeNameCheck, G) || ge.attributeNameCheck instanceof Function && ge.attributeNameCheck(G, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            G === "is" && ge.allowCustomizedBuiltInElements && (ge.tagNameCheck instanceof RegExp && Mt(ge.tagNameCheck, ae) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(ae)))
          ) return !1;
        } else if (!qn[G]) {
          if (!Mt(xe, no(ae, De, ""))) {
            if (!((G === "src" || G === "xlink:href" || G === "href") && _ !== "script" && ac(ae, "data:") === 0 && Kn[_])) {
              if (!(pt && !Mt(Le, no(ae, De, "")))) {
                if (ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, us = Re({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ca = function(_) {
    return !us[Bo(_)] && Mt(Fe, _);
  }, ua = function(_) {
    Bt(_e.beforeSanitizeAttributes, _, null);
    const G = _.attributes;
    if (!G || Et(_))
      return;
    const ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ce,
      forceKeepAttr: void 0
    };
    let Me = G.length;
    for (; Me--; ) {
      const Ne = G[Me], $e = Ne.name, qt = Ne.namespaceURI, Vt = Ne.value, Ut = Ke($e), Co = Vt;
      let mt = $e === "value" ? Co : Ng(Co);
      if (ae.attrName = Ut, ae.attrValue = mt, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Bt(_e.uponSanitizeAttribute, _, ae), mt = ae.attrValue, U && (Ut === "id" || Ut === "name") && ac(mt, Ee) !== 0 && (D($e, _), mt = Ee + mt), We && Mt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, mt)) {
        D($e, _);
        continue;
      }
      if (Ut === "attributename" && oc(mt, "href")) {
        D($e, _);
        continue;
      }
      if (ae.forceKeepAttr)
        continue;
      if (!ae.keepAttr) {
        D($e, _);
        continue;
      }
      if (!te && Mt(/\/>/i, mt)) {
        D($e, _);
        continue;
      }
      Z && eo([H, ee, W], (Qr) => {
        mt = no(mt, Qr, " ");
      });
      const Io = Ke(_.nodeName);
      if (!Xr(Io, Ut, mt)) {
        D($e, _);
        continue;
      }
      if (x && typeof m == "object" && typeof m.getAttributeType == "function" && !qt)
        switch (m.getAttributeType(Io, Ut)) {
          case "TrustedHTML": {
            mt = x.createHTML(mt);
            break;
          }
          case "TrustedScriptURL": {
            mt = x.createScriptURL(mt);
            break;
          }
        }
      if (mt !== Co)
        try {
          qt ? _.setAttributeNS(qt, $e, mt) : _.setAttribute($e, mt), Et(_) ? Ft(_) : rc(t.removed);
        } catch {
          D($e, _);
        }
    }
    Bt(_e.afterSanitizeAttributes, _, null);
  }, $r = function(_) {
    let G = null;
    const ae = ke(_);
    for (Bt(_e.beforeSanitizeShadowDOM, _, null); G = ae.nextNode(); )
      if (Bt(_e.uponSanitizeShadowNode, G, null), mn(G), ua(G), bt(G.content) && $r(G.content), (C ? C(G) : G.nodeType) === xn.element) {
        const Ne = L ? L(G) : G.shadowRoot;
        bt(Ne) && (Qn(Ne), $r(Ne));
      }
    Bt(_e.afterSanitizeShadowDOM, _, null);
  }, Qn = function(_) {
    const G = C ? C(_) : _.nodeType;
    if (G === xn.element) {
      const Ne = L ? L(_) : _.shadowRoot;
      bt(Ne) && (Qn(Ne), $r(Ne));
    }
    const ae = I ? I(_) : _.childNodes;
    if (!ae)
      return;
    const Me = [];
    eo(ae, (Ne) => {
      to(Me, Ne);
    });
    for (const Ne of Me)
      Qn(Ne);
    if (G === xn.element) {
      const Ne = S ? S(_) : null;
      if (typeof Ne == "string" && Ke(Ne) === "template") {
        const $e = _.content;
        bt($e) && Qn($e);
      }
    }
  };
  return t.sanitize = function(ie) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, G = null, ae = null, Me = null, Ne = null;
    if (xr = !ie, xr && (ie = "<!-->"), typeof ie != "string" && !zt(ie) && (ie = Fg(ie), typeof ie != "string"))
      throw Po("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (E || Xn(_), t.removed = [], typeof ie == "string" && (at = !1), at) {
      const Vt = S ? S(ie) : ie.nodeName;
      if (typeof Vt == "string") {
        const Ut = Ke(Vt);
        if (!ye[Ut] || Je[Ut])
          throw Po("root node is forbidden and cannot be sanitized in-place");
      }
      if (Et(ie))
        throw Po("root node is clobbered and cannot be sanitized in-place");
      Qn(ie);
    } else if (zt(ie))
      G = re("<!---->"), ae = G.ownerDocument.importNode(ie, !0), ae.nodeType === xn.element && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? G = ae : G.appendChild(ae), Qn(ae);
    else {
      if (!F && !Z && !T && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return x && pe ? x.createHTML(ie) : ie;
      if (G = re(ie), !G)
        return F ? null : pe ? O : "";
    }
    G && V && Ft(G.firstChild);
    const $e = ke(at ? ie : G);
    for (; Me = $e.nextNode(); )
      mn(Me), ua(Me), bt(Me.content) && $r(Me.content);
    if (at)
      return Z && lt(ie), ie;
    if (F) {
      if (Z && lt(G), we)
        for (Ne = ue.call(G.ownerDocument); G.firstChild; )
          Ne.appendChild(G.firstChild);
      else
        Ne = G;
      return (Ce.shadowroot || Ce.shadowrootmode) && (Ne = be.call(r, Ne, !0)), Ne;
    }
    let qt = T ? G.outerHTML : G.innerHTML;
    return T && ye["!doctype"] && G.ownerDocument && G.ownerDocument.doctype && G.ownerDocument.doctype.name && Mt(Yg, G.ownerDocument.doctype.name) && (qt = "<!DOCTYPE " + G.ownerDocument.doctype.name + `>
` + qt), Z && eo([H, ee, W], (Vt) => {
      qt = no(qt, Vt, " ");
    }), x && pe ? x.createHTML(qt) : qt;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xn(ie), E = !0;
  }, t.clearConfig = function() {
    In = null, E = !1;
  }, t.isValidAttribute = function(ie, _, G) {
    In || Xn({});
    const ae = Ke(ie), Me = Ke(_);
    return Xr(ae, Me, G);
  }, t.addHook = function(ie, _) {
    typeof _ == "function" && to(_e[ie], _);
  }, t.removeHook = function(ie, _) {
    if (_ !== void 0) {
      const G = xg(_e[ie], _);
      return G === -1 ? void 0 : Rg(_e[ie], G, 1)[0];
    }
    return rc(_e[ie]);
  }, t.removeHooks = function(ie) {
    _e[ie] = [];
  }, t.removeAllHooks = function() {
    _e = pc();
  }, t;
}
var Jg = Sd();
const ev = {
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
function tv(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Jg.sanitize(e, ev) : "";
}
const Td = Symbol(), Aa = "el", nv = "is-", Fr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Ed = Symbol("namespaceContextKey"), Sl = (e) => {
  const t = e || (Qt() ? Ge(Ed, q(Aa)) : q(Aa));
  return N(() => l(t) || Aa);
}, Lt = (e, t) => {
  const n = Sl(t);
  return {
    namespace: n,
    b: (b = "") => Fr(n.value, e, b, "", ""),
    e: (b) => b ? Fr(n.value, e, "", b, "") : "",
    m: (b) => b ? Fr(n.value, e, "", "", b) : "",
    be: (b, I) => b && I ? Fr(n.value, e, b, I, "") : "",
    em: (b, I) => b && I ? Fr(n.value, e, "", b, I) : "",
    bm: (b, I) => b && I ? Fr(n.value, e, b, "", I) : "",
    bem: (b, I, p) => b && I && p ? Fr(n.value, e, b, I, p) : "",
    is: (b, ...I) => {
      const p = I.length >= 1 ? I[0] : !0;
      return b && p ? `${nv}${b}` : "";
    },
    cssVar: (b) => {
      const I = {};
      for (const p in b)
        b[p] && (I[`--${n.value}-${p}`] = b[p]);
      return I;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const I = {};
      for (const p in b)
        b[p] && (I[`--${n.value}-${e}-${p}`] = b[p]);
      return I;
    },
    cssVarBlockName: (b) => `--${n.value}-${e}-${b}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Xo = () => {
}, rv = Object.prototype.hasOwnProperty, mc = (e, t) => rv.call(e, t), $n = Array.isArray, dt = (e) => typeof e == "function", Gt = (e) => typeof e == "string", an = (e) => e !== null && typeof e == "object", hc = (e) => (an(e) || dt(e)) && dt(e.then) && dt(e.catch), ov = Object.prototype.toString, av = (e) => ov.call(e), sv = (e) => av(e) === "[object Object]";
var Ad = typeof global == "object" && global && global.Object === Object && global, lv = typeof self == "object" && self && self.Object === Object && self, Hn = Ad || lv || Function("return this")(), Un = Hn.Symbol, Cd = Object.prototype, iv = Cd.hasOwnProperty, cv = Cd.toString, $o = Un ? Un.toStringTag : void 0;
function uv(e) {
  var t = iv.call(e, $o), n = e[$o];
  try {
    e[$o] = void 0;
    var r = !0;
  } catch {
  }
  var o = cv.call(e);
  return r && (t ? e[$o] = n : delete e[$o]), o;
}
var dv = Object.prototype, fv = dv.toString;
function pv(e) {
  return fv.call(e);
}
var mv = "[object Null]", hv = "[object Undefined]", gc = Un ? Un.toStringTag : void 0;
function ko(e) {
  return e == null ? e === void 0 ? hv : mv : gc && gc in Object(e) ? uv(e) : pv(e);
}
function po(e) {
  return e != null && typeof e == "object";
}
var gv = "[object Symbol]";
function Za(e) {
  return typeof e == "symbol" || po(e) && ko(e) == gv;
}
function vv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Sn = Array.isArray, vc = Un ? Un.prototype : void 0, bc = vc ? vc.toString : void 0;
function Id(e) {
  if (typeof e == "string")
    return e;
  if (Sn(e))
    return vv(e, Id) + "";
  if (Za(e))
    return bc ? bc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var bv = /\s/;
function yv(e) {
  for (var t = e.length; t-- && bv.test(e.charAt(t)); )
    ;
  return t;
}
var _v = /^\s+/;
function wv(e) {
  return e && e.slice(0, yv(e) + 1).replace(_v, "");
}
function Cr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var yc = NaN, kv = /^[-+]0x[0-9a-f]+$/i, Sv = /^0b[01]+$/i, Tv = /^0o[0-7]+$/i, Ev = parseInt;
function _c(e) {
  if (typeof e == "number")
    return e;
  if (Za(e))
    return yc;
  if (Cr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Cr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = wv(e);
  var n = Sv.test(e);
  return n || Tv.test(e) ? Ev(e.slice(2), n ? 2 : 8) : kv.test(e) ? yc : +e;
}
function Ld(e) {
  return e;
}
var Av = "[object AsyncFunction]", Cv = "[object Function]", Iv = "[object GeneratorFunction]", Lv = "[object Proxy]";
function Od(e) {
  if (!Cr(e))
    return !1;
  var t = ko(e);
  return t == Cv || t == Iv || t == Av || t == Lv;
}
var Es = Hn["__core-js_shared__"], wc = function() {
  var e = /[^.]+$/.exec(Es && Es.keys && Es.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ov(e) {
  return !!wc && wc in e;
}
var xv = Function.prototype, Rv = xv.toString;
function Gr(e) {
  if (e != null) {
    try {
      return Rv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Nv = /[\\^$.*+?()[\]{}|]/g, Pv = /^\[object .+?Constructor\]$/, $v = Function.prototype, Mv = Object.prototype, Dv = $v.toString, Fv = Mv.hasOwnProperty, zv = RegExp(
  "^" + Dv.call(Fv).replace(Nv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bv(e) {
  if (!Cr(e) || Ov(e))
    return !1;
  var t = Od(e) ? zv : Pv;
  return t.test(Gr(e));
}
function Vv(e, t) {
  return e?.[t];
}
function Kr(e, t) {
  var n = Vv(e, t);
  return Bv(n) ? n : void 0;
}
var Gs = Kr(Hn, "WeakMap");
function Uv(e, t, n) {
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
var jv = 800, Wv = 16, Hv = Date.now;
function Gv(e) {
  var t = 0, n = 0;
  return function() {
    var r = Hv(), o = Wv - (r - n);
    if (n = r, o > 0) {
      if (++t >= jv)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Kv(e) {
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
}(), qv = $a ? function(e, t) {
  return $a(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kv(t),
    writable: !0
  });
} : Ld, Yv = Gv(qv);
function Zv(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Xv = 9007199254740991, Qv = /^(?:0|[1-9]\d*)$/;
function Tl(e, t) {
  var n = typeof e;
  return t = t ?? Xv, !!t && (n == "number" || n != "symbol" && Qv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Jv(e, t, n) {
  t == "__proto__" && $a ? $a(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function El(e, t) {
  return e === t || e !== e && t !== t;
}
var eb = Object.prototype, tb = eb.hasOwnProperty;
function nb(e, t, n) {
  var r = e[t];
  (!(tb.call(e, t) && El(r, n)) || n === void 0 && !(t in e)) && Jv(e, t, n);
}
var kc = Math.max;
function rb(e, t, n) {
  return t = kc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = kc(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var c = Array(t + 1); ++o < t; )
      c[o] = r[o];
    return c[t] = n(s), Uv(e, this, c);
  };
}
var ob = 9007199254740991;
function Al(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ob;
}
function ab(e) {
  return e != null && Al(e.length) && !Od(e);
}
var sb = Object.prototype;
function lb(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || sb;
  return e === n;
}
function ib(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var cb = "[object Arguments]";
function Sc(e) {
  return po(e) && ko(e) == cb;
}
var xd = Object.prototype, ub = xd.hasOwnProperty, db = xd.propertyIsEnumerable, Cl = Sc(/* @__PURE__ */ function() {
  return arguments;
}()) ? Sc : function(e) {
  return po(e) && ub.call(e, "callee") && !db.call(e, "callee");
};
function fb() {
  return !1;
}
var Rd = typeof exports == "object" && exports && !exports.nodeType && exports, Tc = Rd && typeof module == "object" && module && !module.nodeType && module, pb = Tc && Tc.exports === Rd, Ec = pb ? Hn.Buffer : void 0, mb = Ec ? Ec.isBuffer : void 0, Ks = mb || fb, hb = "[object Arguments]", gb = "[object Array]", vb = "[object Boolean]", bb = "[object Date]", yb = "[object Error]", _b = "[object Function]", wb = "[object Map]", kb = "[object Number]", Sb = "[object Object]", Tb = "[object RegExp]", Eb = "[object Set]", Ab = "[object String]", Cb = "[object WeakMap]", Ib = "[object ArrayBuffer]", Lb = "[object DataView]", Ob = "[object Float32Array]", xb = "[object Float64Array]", Rb = "[object Int8Array]", Nb = "[object Int16Array]", Pb = "[object Int32Array]", $b = "[object Uint8Array]", Mb = "[object Uint8ClampedArray]", Db = "[object Uint16Array]", Fb = "[object Uint32Array]", nt = {};
nt[Ob] = nt[xb] = nt[Rb] = nt[Nb] = nt[Pb] = nt[$b] = nt[Mb] = nt[Db] = nt[Fb] = !0;
nt[hb] = nt[gb] = nt[Ib] = nt[vb] = nt[Lb] = nt[bb] = nt[yb] = nt[_b] = nt[wb] = nt[kb] = nt[Sb] = nt[Tb] = nt[Eb] = nt[Ab] = nt[Cb] = !1;
function zb(e) {
  return po(e) && Al(e.length) && !!nt[ko(e)];
}
function Bb(e) {
  return function(t) {
    return e(t);
  };
}
var Nd = typeof exports == "object" && exports && !exports.nodeType && exports, Uo = Nd && typeof module == "object" && module && !module.nodeType && module, Vb = Uo && Uo.exports === Nd, As = Vb && Ad.process, Ac = function() {
  try {
    var e = Uo && Uo.require && Uo.require("util").types;
    return e || As && As.binding && As.binding("util");
  } catch {
  }
}(), Cc = Ac && Ac.isTypedArray, Pd = Cc ? Bb(Cc) : zb, Ub = Object.prototype, jb = Ub.hasOwnProperty;
function Wb(e, t) {
  var n = Sn(e), r = !n && Cl(e), o = !n && !r && Ks(e), a = !n && !r && !o && Pd(e), s = n || r || o || a, c = s ? ib(e.length, String) : [], i = c.length;
  for (var u in e)
    jb.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Tl(u, i))) && c.push(u);
  return c;
}
function Hb(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Gb = Hb(Object.keys, Object), Kb = Object.prototype, qb = Kb.hasOwnProperty;
function Yb(e) {
  if (!lb(e))
    return Gb(e);
  var t = [];
  for (var n in Object(e))
    qb.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function $d(e) {
  return ab(e) ? Wb(e) : Yb(e);
}
var Zb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xb = /^\w*$/;
function Il(e, t) {
  if (Sn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Za(e) ? !0 : Xb.test(e) || !Zb.test(e) || t != null && e in Object(t);
}
var Qo = Kr(Object, "create");
function Qb() {
  this.__data__ = Qo ? Qo(null) : {}, this.size = 0;
}
function Jb(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var e0 = "__lodash_hash_undefined__", t0 = Object.prototype, n0 = t0.hasOwnProperty;
function r0(e) {
  var t = this.__data__;
  if (Qo) {
    var n = t[e];
    return n === e0 ? void 0 : n;
  }
  return n0.call(t, e) ? t[e] : void 0;
}
var o0 = Object.prototype, a0 = o0.hasOwnProperty;
function s0(e) {
  var t = this.__data__;
  return Qo ? t[e] !== void 0 : a0.call(t, e);
}
var l0 = "__lodash_hash_undefined__";
function i0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qo && t === void 0 ? l0 : t, this;
}
function Ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ur.prototype.clear = Qb;
Ur.prototype.delete = Jb;
Ur.prototype.get = r0;
Ur.prototype.has = s0;
Ur.prototype.set = i0;
function c0() {
  this.__data__ = [], this.size = 0;
}
function Xa(e, t) {
  for (var n = e.length; n--; )
    if (El(e[n][0], t))
      return n;
  return -1;
}
var u0 = Array.prototype, d0 = u0.splice;
function f0(e) {
  var t = this.__data__, n = Xa(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : d0.call(t, n, 1), --this.size, !0;
}
function p0(e) {
  var t = this.__data__, n = Xa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function m0(e) {
  return Xa(this.__data__, e) > -1;
}
function h0(e, t) {
  var n = this.__data__, r = Xa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function hr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hr.prototype.clear = c0;
hr.prototype.delete = f0;
hr.prototype.get = p0;
hr.prototype.has = m0;
hr.prototype.set = h0;
var Jo = Kr(Hn, "Map");
function g0() {
  this.size = 0, this.__data__ = {
    hash: new Ur(),
    map: new (Jo || hr)(),
    string: new Ur()
  };
}
function v0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qa(e, t) {
  var n = e.__data__;
  return v0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function b0(e) {
  var t = Qa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function y0(e) {
  return Qa(this, e).get(e);
}
function _0(e) {
  return Qa(this, e).has(e);
}
function w0(e, t) {
  var n = Qa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function gr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
gr.prototype.clear = g0;
gr.prototype.delete = b0;
gr.prototype.get = y0;
gr.prototype.has = _0;
gr.prototype.set = w0;
var k0 = "Expected a function";
function Ll(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(k0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Ll.Cache || gr)(), n;
}
Ll.Cache = gr;
var S0 = 500;
function T0(e) {
  var t = Ll(e, function(r) {
    return n.size === S0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var E0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, A0 = /\\(\\)?/g, C0 = T0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(E0, function(n, r, o, a) {
    t.push(o ? a.replace(A0, "$1") : r || n);
  }), t;
});
function I0(e) {
  return e == null ? "" : Id(e);
}
function Ja(e, t) {
  return Sn(e) ? e : Il(e, t) ? [e] : C0(I0(e));
}
function oa(e) {
  if (typeof e == "string" || Za(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ol(e, t) {
  t = Ja(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[oa(t[n++])];
  return n && n == r ? e : void 0;
}
function Tr(e, t, n) {
  var r = e == null ? void 0 : Ol(e, t);
  return r === void 0 ? n : r;
}
function Md(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ic = Un ? Un.isConcatSpreadable : void 0;
function L0(e) {
  return Sn(e) || Cl(e) || !!(Ic && e && e[Ic]);
}
function O0(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = L0), o || (o = []); ++a < s; ) {
    var c = e[a];
    n(c) ? Md(o, c) : o[o.length] = c;
  }
  return o;
}
function x0(e) {
  var t = e == null ? 0 : e.length;
  return t ? O0(e) : [];
}
function R0(e) {
  return Yv(rb(e, void 0, x0), e + "");
}
function Sr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Sn(e) ? e : [e];
}
function N0() {
  this.__data__ = new hr(), this.size = 0;
}
function P0(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function $0(e) {
  return this.__data__.get(e);
}
function M0(e) {
  return this.__data__.has(e);
}
var D0 = 200;
function F0(e, t) {
  var n = this.__data__;
  if (n instanceof hr) {
    var r = n.__data__;
    if (!Jo || r.length < D0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new gr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function cr(e) {
  var t = this.__data__ = new hr(e);
  this.size = t.size;
}
cr.prototype.clear = N0;
cr.prototype.delete = P0;
cr.prototype.get = $0;
cr.prototype.has = M0;
cr.prototype.set = F0;
function z0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function B0() {
  return [];
}
var V0 = Object.prototype, U0 = V0.propertyIsEnumerable, Lc = Object.getOwnPropertySymbols, j0 = Lc ? function(e) {
  return e == null ? [] : (e = Object(e), z0(Lc(e), function(t) {
    return U0.call(e, t);
  }));
} : B0;
function W0(e, t, n) {
  var r = t(e);
  return Sn(e) ? r : Md(r, n(e));
}
function Oc(e) {
  return W0(e, $d, j0);
}
var qs = Kr(Hn, "DataView"), Ys = Kr(Hn, "Promise"), Zs = Kr(Hn, "Set"), xc = "[object Map]", H0 = "[object Object]", Rc = "[object Promise]", Nc = "[object Set]", Pc = "[object WeakMap]", $c = "[object DataView]", G0 = Gr(qs), K0 = Gr(Jo), q0 = Gr(Ys), Y0 = Gr(Zs), Z0 = Gr(Gs), kr = ko;
(qs && kr(new qs(new ArrayBuffer(1))) != $c || Jo && kr(new Jo()) != xc || Ys && kr(Ys.resolve()) != Rc || Zs && kr(new Zs()) != Nc || Gs && kr(new Gs()) != Pc) && (kr = function(e) {
  var t = ko(e), n = t == H0 ? e.constructor : void 0, r = n ? Gr(n) : "";
  if (r)
    switch (r) {
      case G0:
        return $c;
      case K0:
        return xc;
      case q0:
        return Rc;
      case Y0:
        return Nc;
      case Z0:
        return Pc;
    }
  return t;
});
var Mc = Hn.Uint8Array, X0 = "__lodash_hash_undefined__";
function Q0(e) {
  return this.__data__.set(e, X0), this;
}
function J0(e) {
  return this.__data__.has(e);
}
function Ma(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new gr(); ++t < n; )
    this.add(e[t]);
}
Ma.prototype.add = Ma.prototype.push = Q0;
Ma.prototype.has = J0;
function ey(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ty(e, t) {
  return e.has(t);
}
var ny = 1, ry = 2;
function Dd(e, t, n, r, o, a) {
  var s = n & ny, c = e.length, i = t.length;
  if (c != i && !(s && i > c))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var m = -1, h = !0, y = n & ry ? new Ma() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < c; ) {
    var v = e[m], b = t[m];
    if (r)
      var I = s ? r(b, v, m, t, e, a) : r(v, b, m, e, t, a);
    if (I !== void 0) {
      if (I)
        continue;
      h = !1;
      break;
    }
    if (y) {
      if (!ey(t, function(p, L) {
        if (!ty(y, L) && (v === p || o(v, p, n, r, a)))
          return y.push(L);
      })) {
        h = !1;
        break;
      }
    } else if (!(v === b || o(v, b, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
function oy(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function ay(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var sy = 1, ly = 2, iy = "[object Boolean]", cy = "[object Date]", uy = "[object Error]", dy = "[object Map]", fy = "[object Number]", py = "[object RegExp]", my = "[object Set]", hy = "[object String]", gy = "[object Symbol]", vy = "[object ArrayBuffer]", by = "[object DataView]", Dc = Un ? Un.prototype : void 0, Cs = Dc ? Dc.valueOf : void 0;
function yy(e, t, n, r, o, a, s) {
  switch (n) {
    case by:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case vy:
      return !(e.byteLength != t.byteLength || !a(new Mc(e), new Mc(t)));
    case iy:
    case cy:
    case fy:
      return El(+e, +t);
    case uy:
      return e.name == t.name && e.message == t.message;
    case py:
    case hy:
      return e == t + "";
    case dy:
      var c = oy;
    case my:
      var i = r & sy;
      if (c || (c = ay), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= ly, s.set(e, t);
      var f = Dd(c(e), c(t), r, o, a, s);
      return s.delete(e), f;
    case gy:
      if (Cs)
        return Cs.call(e) == Cs.call(t);
  }
  return !1;
}
var _y = 1, wy = Object.prototype, ky = wy.hasOwnProperty;
function Sy(e, t, n, r, o, a) {
  var s = n & _y, c = Oc(e), i = c.length, u = Oc(t), f = u.length;
  if (i != f && !s)
    return !1;
  for (var m = i; m--; ) {
    var h = c[m];
    if (!(s ? h in t : ky.call(t, h)))
      return !1;
  }
  var y = a.get(e), v = a.get(t);
  if (y && v)
    return y == t && v == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var I = s; ++m < i; ) {
    h = c[m];
    var p = e[h], L = t[h];
    if (r)
      var P = s ? r(L, p, h, t, e, a) : r(p, L, h, e, t, a);
    if (!(P === void 0 ? p === L || o(p, L, n, r, a) : P)) {
      b = !1;
      break;
    }
    I || (I = h == "constructor");
  }
  if (b && !I) {
    var C = e.constructor, S = t.constructor;
    C != S && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof S == "function" && S instanceof S) && (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var Ty = 1, Fc = "[object Arguments]", zc = "[object Array]", va = "[object Object]", Ey = Object.prototype, Bc = Ey.hasOwnProperty;
function Ay(e, t, n, r, o, a) {
  var s = Sn(e), c = Sn(t), i = s ? zc : kr(e), u = c ? zc : kr(t);
  i = i == Fc ? va : i, u = u == Fc ? va : u;
  var f = i == va, m = u == va, h = i == u;
  if (h && Ks(e)) {
    if (!Ks(t))
      return !1;
    s = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new cr()), s || Pd(e) ? Dd(e, t, n, r, o, a) : yy(e, t, i, n, r, o, a);
  if (!(n & Ty)) {
    var y = f && Bc.call(e, "__wrapped__"), v = m && Bc.call(t, "__wrapped__");
    if (y || v) {
      var b = y ? e.value() : e, I = v ? t.value() : t;
      return a || (a = new cr()), o(b, I, n, r, a);
    }
  }
  return h ? (a || (a = new cr()), Sy(e, t, n, r, o, a)) : !1;
}
function es(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !po(e) && !po(t) ? e !== e && t !== t : Ay(e, t, n, r, es, o);
}
var Cy = 1, Iy = 2;
function Ly(e, t, n, r) {
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
    var c = s[0], i = e[c], u = s[1];
    if (s[2]) {
      if (i === void 0 && !(c in e))
        return !1;
    } else {
      var f = new cr(), m;
      if (!(m === void 0 ? es(u, i, Cy | Iy, r, f) : m))
        return !1;
    }
  }
  return !0;
}
function Fd(e) {
  return e === e && !Cr(e);
}
function Oy(e) {
  for (var t = $d(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Fd(o)];
  }
  return t;
}
function zd(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function xy(e) {
  var t = Oy(e);
  return t.length == 1 && t[0][2] ? zd(t[0][0], t[0][1]) : function(n) {
    return n === e || Ly(n, e, t);
  };
}
function Ry(e, t) {
  return e != null && t in Object(e);
}
function Ny(e, t, n) {
  t = Ja(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = oa(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Al(o) && Tl(s, o) && (Sn(e) || Cl(e)));
}
function Bd(e, t) {
  return e != null && Ny(e, t, Ry);
}
var Py = 1, $y = 2;
function My(e, t) {
  return Il(e) && Fd(t) ? zd(oa(e), t) : function(n) {
    var r = Tr(n, e);
    return r === void 0 && r === t ? Bd(n, e) : es(t, r, Py | $y);
  };
}
function Dy(e) {
  return function(t) {
    return t?.[e];
  };
}
function Fy(e) {
  return function(t) {
    return Ol(t, e);
  };
}
function zy(e) {
  return Il(e) ? Dy(oa(e)) : Fy(e);
}
function By(e) {
  return typeof e == "function" ? e : e == null ? Ld : typeof e == "object" ? Sn(e) ? My(e[0], e[1]) : xy(e) : zy(e);
}
var Is = function() {
  return Hn.Date.now();
}, Vy = "Expected a function", Uy = Math.max, jy = Math.min;
function Wy(e, t, n) {
  var r, o, a, s, c, i, u = 0, f = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Vy);
  t = _c(t) || 0, Cr(n) && (f = !!n.leading, m = "maxWait" in n, a = m ? Uy(_c(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function y(x) {
    var O = r, J = o;
    return r = o = void 0, u = x, s = e.apply(J, O), s;
  }
  function v(x) {
    return u = x, c = setTimeout(p, t), f ? y(x) : s;
  }
  function b(x) {
    var O = x - i, J = x - u, X = t - O;
    return m ? jy(X, a - J) : X;
  }
  function I(x) {
    var O = x - i, J = x - u;
    return i === void 0 || O >= t || O < 0 || m && J >= a;
  }
  function p() {
    var x = Is();
    if (I(x))
      return L(x);
    c = setTimeout(p, b(x));
  }
  function L(x) {
    return c = void 0, h && r ? y(x) : (r = o = void 0, s);
  }
  function P() {
    c !== void 0 && clearTimeout(c), u = 0, r = i = o = c = void 0;
  }
  function C() {
    return c === void 0 ? s : L(Is());
  }
  function S() {
    var x = Is(), O = I(x);
    if (r = arguments, o = this, i = x, O) {
      if (c === void 0)
        return v(i);
      if (m)
        return clearTimeout(c), c = setTimeout(p, t), y(i);
    }
    return c === void 0 && (c = setTimeout(p, t)), s;
  }
  return S.cancel = P, S.flush = C, S;
}
function Hy(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Zv(e, By(t), o);
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
function ur(e) {
  return e == null;
}
function Gy(e) {
  return e === void 0;
}
function Ky(e, t, n, r) {
  if (!Cr(e))
    return e;
  t = Ja(t, e);
  for (var o = -1, a = t.length, s = a - 1, c = e; c != null && ++o < a; ) {
    var i = oa(t[o]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != s) {
      var f = c[i];
      u = void 0, u === void 0 && (u = Cr(f) ? f : Tl(t[o + 1]) ? [] : {});
    }
    nb(c, i, u), c = c[i];
  }
  return e;
}
function qy(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], c = Ol(e, s);
    n(c, s) && Ky(a, Ja(s, e), c);
  }
  return a;
}
function Yy(e, t) {
  return qy(e, t, function(n, r) {
    return Bd(e, r);
  });
}
var Zy = R0(function(e, t) {
  return e == null ? {} : Yy(e, t);
});
const Mn = (e) => e === void 0, Ar = (e) => typeof e == "boolean", je = (e) => typeof e == "number", wn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Xy = (e) => Gt(e) ? !Number.isNaN(Number(e)) : !1;
var Qy = Object.defineProperty, Jy = Object.defineProperties, e1 = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, t1 = Object.prototype.hasOwnProperty, n1 = Object.prototype.propertyIsEnumerable, Uc = (e, t, n) => t in e ? Qy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, r1 = (e, t) => {
  for (var n in t || (t = {}))
    t1.call(t, n) && Uc(e, n, t[n]);
  if (Vc)
    for (var n of Vc(t))
      n1.call(t, n) && Uc(e, n, t[n]);
  return e;
}, o1 = (e, t) => Jy(e, e1(t));
function a1(e, t) {
  var n;
  const r = Er();
  return xu(() => {
    r.value = e();
  }, o1(r1({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), rl(r);
}
var jc;
const Ct = typeof window < "u", s1 = (e) => typeof e == "string", Vd = () => {
}, Xs = Ct && ((jc = window?.navigator) == null ? void 0 : jc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xl(e) {
  return typeof e == "function" ? e() : l(e);
}
function l1(e) {
  return e;
}
function aa(e) {
  return lp() ? (ip(e), !0) : !1;
}
function i1(e, t = !0) {
  Qt() ? Tt(e) : t ? e() : wt(e);
}
function Ud(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = q(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function c() {
    o.value = !1, s();
  }
  function i(...u) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...u);
    }, xl(t));
  }
  return r && (o.value = !0, Ct && i()), aa(c), {
    isPending: rl(o),
    start: i,
    stop: c
  };
}
function lr(e) {
  var t;
  const n = xl(e);
  return (t = n?.$el) != null ? t : n;
}
const ts = Ct ? window : void 0;
function kn(...e) {
  let t, n, r, o;
  if (s1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = ts) : [t, n, r, o] = e, !t)
    return Vd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, c = (f, m, h, y) => (f.addEventListener(m, h, y), () => f.removeEventListener(m, h, y)), i = Ie(() => [lr(t), xl(o)], ([f, m]) => {
    s(), f && a.push(...n.flatMap((h) => r.map((y) => c(f, h, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return aa(u), u;
}
let Wc = !1;
function c1(e, t, n = {}) {
  const { window: r = ts, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Xs && !Wc && (Wc = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", Vd)));
  let c = !0;
  const i = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((v) => v === h.target || h.composedPath().includes(v));
    {
      const v = lr(y);
      return v && (h.target === v || h.composedPath().includes(v));
    }
  }), f = [
    kn(r, "click", (h) => {
      const y = lr(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (c = !i(h)), !c) {
          c = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: a }),
    kn(r, "pointerdown", (h) => {
      const y = lr(e);
      y && (c = !h.composedPath().includes(y) && !i(h));
    }, { passive: !0 }),
    s && kn(r, "blur", (h) => {
      var y;
      const v = lr(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !v?.contains(r.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
function jd(e, t = !1) {
  const n = q(), r = () => n.value = !!e();
  return r(), i1(r, t), n;
}
const Hc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gc = "__vueuse_ssr_handlers__";
Hc[Gc] = Hc[Gc] || {};
var Kc = Object.getOwnPropertySymbols, u1 = Object.prototype.hasOwnProperty, d1 = Object.prototype.propertyIsEnumerable, f1 = (e, t) => {
  var n = {};
  for (var r in e)
    u1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Kc)
    for (var r of Kc(e))
      t.indexOf(r) < 0 && d1.call(e, r) && (n[r] = e[r]);
  return n;
};
function Pn(e, t, n = {}) {
  const r = n, { window: o = ts } = r, a = f1(r, ["window"]);
  let s;
  const c = jd(() => o && "ResizeObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ie(() => lr(e), (m) => {
    i(), c.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    i(), u();
  };
  return aa(f), {
    isSupported: c,
    stop: f
  };
}
var qc = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, m1 = Object.prototype.propertyIsEnumerable, h1 = (e, t) => {
  var n = {};
  for (var r in e)
    p1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qc)
    for (var r of qc(e))
      t.indexOf(r) < 0 && m1.call(e, r) && (n[r] = e[r]);
  return n;
};
function g1(e, t, n = {}) {
  const r = n, { window: o = ts } = r, a = h1(r, ["window"]);
  let s;
  const c = jd(() => o && "MutationObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ie(() => lr(e), (m) => {
    i(), c.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), f = () => {
    i(), u();
  };
  return aa(f), {
    isSupported: c,
    stop: f
  };
}
var Yc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yc || (Yc = {}));
var v1 = Object.defineProperty, Zc = Object.getOwnPropertySymbols, b1 = Object.prototype.hasOwnProperty, y1 = Object.prototype.propertyIsEnumerable, Xc = (e, t, n) => t in e ? v1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _1 = (e, t) => {
  for (var n in t || (t = {}))
    b1.call(t, n) && Xc(e, n, t[n]);
  if (Zc)
    for (var n of Zc(t))
      y1.call(t, n) && Xc(e, n, t[n]);
  return e;
};
const w1 = {
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
_1({
  linear: l1
}, w1);
class k1 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Rl(e, t) {
  throw new k1(`[${e}] ${t}`);
}
const Qc = {
  current: 0
}, Jc = q(0), Wd = 2e3, eu = Symbol("elZIndexContextKey"), Hd = Symbol("zIndexContextKey"), Gd = (e) => {
  const t = Qt() ? Ge(eu, Qc) : Qc, n = e || (Qt() ? Ge(Hd, void 0) : void 0), r = N(() => {
    const s = l(n);
    return je(s) ? s : Wd;
  }), o = N(() => r.value + Jc.value), a = () => (t.current++, Jc.value = t.current, o.value);
  return !Ct && Ge(eu), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var S1 = {
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
const T1 = (e) => (t, n) => E1(t, n, l(e)), E1 = (e, t, n) => Tr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), A1 = (e) => {
  const t = N(() => l(e).name), n = io(e) ? e : q(e);
  return {
    lang: t,
    locale: n,
    t: T1(e)
  };
}, Kd = Symbol("localeContextKey"), Nl = (e) => {
  const t = e || Ge(Kd, q());
  return A1(N(() => t.value || S1));
}, qd = "__epPropKey", Se = (e) => e, C1 = (e) => an(e) && !!e[qd], ns = (e, t) => {
  if (!an(e) || C1(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, i = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, m = [];
      if (n && (m = Array.from(n), mc(e, "default") && m.push(o), f || (f = m.includes(u))), s && (f || (f = s(u))), !f && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        cp(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [qd]: !0
  };
  return mc(e, "default") && (i.default = o), i;
}, ot = (e) => Da(Object.entries(e).map(([t, n]) => [
  t,
  ns(n, t)
])), Pl = ["", "default", "small", "large"], rs = ns({
  type: String,
  values: Pl,
  required: !1
}), Yd = Symbol("size"), I1 = () => {
  const e = Ge(Yd, {});
  return N(() => l(e.size) || "");
}, Zd = Symbol("emptyValuesContextKey"), L1 = ["", void 0, null], O1 = void 0, Xd = ot({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => dt(e) ? !e() : !e
  }
}), x1 = (e, t) => {
  const n = Qt() ? Ge(Zd, q({})) : q({}), r = N(() => e.emptyValues || n.value.emptyValues || L1), o = N(() => dt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : dt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : O1), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, tu = (e) => Object.keys(e), Fa = q();
function Qd(e, t = void 0) {
  return Qt() ? Ge(Td, Fa) : Fa;
}
function Jd(e, t) {
  const n = Qd(), r = Lt(e, N(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || Aa;
  })), o = Nl(N(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), a = Gd(N(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || Wd;
  })), s = N(() => {
    var c;
    return l(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return ef(N(() => l(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const ef = (e, t, n = !1) => {
  var r;
  const o = !!Qt(), a = o ? Qd() : void 0, s = (r = void 0) != null ? r : o ? Vn : void 0;
  if (!s)
    return;
  const c = N(() => {
    const i = l(e);
    return a?.value ? R1(a.value, i) : i;
  });
  return s(Td, c), s(Kd, N(() => c.value.locale)), s(Ed, N(() => c.value.namespace)), s(Hd, N(() => c.value.zIndex)), s(Yd, {
    size: N(() => c.value.size || "")
  }), s(Zd, N(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !Fa.value) && (Fa.value = c.value), c;
}, R1 = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...tu(e), ...tu(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Pt = "update:modelValue", pr = "change", dr = "input";
var ct = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function mo(e, t = "px") {
  if (!e)
    return "";
  if (je(e) || Xy(e))
    return `${e}${t}`;
  if (Gt(e))
    return e;
}
function N1(e, t) {
  if (!Ct)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, c = s + e.clientHeight;
  o < s ? e.scrollTop = o : a > c && (e.scrollTop = a - e.clientHeight);
}
const Tn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, tf = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), nf = (e) => (e.install = Xo, e), P1 = ot({
  size: {
    type: Se([Number, String])
  },
  color: {
    type: String
  }
}), $1 = le({
  name: "ElIcon",
  inheritAttrs: !1
}), M1 = /* @__PURE__ */ le({
  ...$1,
  props: P1,
  setup(e) {
    const t = e, n = Lt("icon"), r = N(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Mn(o) ? void 0 : mo(o),
        "--color": a
      };
    });
    return (o, a) => (R(), j("i", co({
      class: l(n).b(),
      style: l(r)
    }, o.$attrs), [
      Ae(o.$slots, "default")
    ], 16));
  }
});
var D1 = /* @__PURE__ */ ct(M1, [["__file", "icon.vue"]]);
const At = Tn(D1);
/*! Element Plus Icons Vue v2.3.1 */
var F1 = /* @__PURE__ */ le({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), rf = F1, z1 = /* @__PURE__ */ le({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), B1 = z1, V1 = /* @__PURE__ */ le({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      g("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), U1 = V1, j1 = /* @__PURE__ */ le({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), W1 = j1, H1 = /* @__PURE__ */ le({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      g("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), $l = H1, G1 = /* @__PURE__ */ le({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), za = G1, K1 = /* @__PURE__ */ le({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      g("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), q1 = K1, Y1 = /* @__PURE__ */ le({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Z1 = Y1, X1 = /* @__PURE__ */ le({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), of = X1, Q1 = /* @__PURE__ */ le({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), J1 = Q1, e_ = /* @__PURE__ */ le({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), t_ = e_, n_ = /* @__PURE__ */ le({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), r_ = n_, o_ = /* @__PURE__ */ le({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), a_ = o_, s_ = /* @__PURE__ */ le({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), l_ = s_;
const Dn = Se([
  String,
  Object,
  Function
]), i_ = {
  Close: za
}, c_ = {
  Close: za
}, Ba = {
  success: r_,
  warning: l_,
  error: W1,
  info: Z1
}, af = {
  validating: of,
  success: U1,
  error: $l
}, sf = () => Ct && /firefox/i.test(window.navigator.userAgent);
let en;
const u_ = {
  height: "0",
  visibility: "hidden",
  overflow: sf() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, d_ = [
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
function f_(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: d_.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function nu(e, t = 1, n) {
  var r;
  en || (en = document.createElement("textarea"), document.body.appendChild(en));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: c } = f_(e);
  c.forEach(([m, h]) => en?.style.setProperty(m, h)), Object.entries(u_).forEach(([m, h]) => en?.style.setProperty(m, h, "important")), en.value = e.value || e.placeholder || "";
  let i = en.scrollHeight;
  const u = {};
  s === "border-box" ? i = i + a : s === "content-box" && (i = i - o), en.value = "";
  const f = en.scrollHeight - o;
  if (je(t)) {
    let m = f * t;
    s === "border-box" && (m = m + o + a), i = Math.max(m, i), u.minHeight = `${m}px`;
  }
  if (je(n)) {
    let m = f * n;
    s === "border-box" && (m = m + o + a), i = Math.min(m, i);
  }
  return u.height = `${i}px`, (r = en.parentNode) == null || r.removeChild(en), en = void 0, u;
}
const lf = (e) => e, p_ = ot({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), qr = (e) => Zy(p_, e), m_ = ot({
  id: {
    type: String,
    default: void 0
  },
  size: rs,
  disabled: Boolean,
  modelValue: {
    type: Se([
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
    type: Se([Boolean, Object]),
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
    type: Se([Object, Array, String]),
    default: () => lf({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...qr(["ariaLabel"])
}), h_ = {
  [Pt]: (e) => Gt(e),
  input: (e) => Gt(e),
  change: (e) => Gt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, g_ = ["class", "style"], v_ = /^on[A-Z]/, b_ = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = N(() => (n?.value || []).concat(g_)), o = Qt();
  return o ? N(() => {
    var a;
    return Da(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && v_.test(s))));
  }) : N(() => ({}));
}, Ml = Symbol("formContextKey"), Va = Symbol("formItemContextKey"), ru = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, y_ = Symbol("elIdInjection"), cf = () => Qt() ? Ge(y_, ru) : ru, os = (e) => {
  const t = cf(), n = Sl();
  return a1(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, as = () => {
  const e = Ge(Ml, void 0), t = Ge(Va, void 0);
  return {
    form: e,
    formItem: t
  };
}, Dl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = q(!1)), r || (r = q(!1));
  const o = q();
  let a;
  const s = N(() => {
    var c;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((c = t.inputIds) == null ? void 0 : c.length) <= 1);
  });
  return Tt(() => {
    a = Ie([or(e, "id"), n], ([c, i]) => {
      const u = c ?? (i ? void 0 : os().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !i && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Wa(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, uf = (e) => {
  const t = Qt();
  return N(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, sa = (e, t = {}) => {
  const n = q(void 0), r = t.prop ? n : uf("size"), o = t.global ? n : I1(), a = t.form ? { size: void 0 } : Ge(Ml, void 0), s = t.formItem ? { size: void 0 } : Ge(Va, void 0);
  return N(() => r.value || l(e) || s?.size || a?.size || o.value || "");
}, Fl = (e) => {
  const t = uf("disabled"), n = Ge(Ml, void 0);
  return N(() => t.value || l(e) || n?.disabled || !1);
};
function df(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Qt(), { emit: s } = a, c = Er(), i = q(!1), u = (h) => {
    dt(t) && t(h) || i.value || (i.value = !0, s("focus", h), n?.());
  }, f = (h) => {
    var y;
    dt(r) && r(h) || h.relatedTarget && ((y = c.value) != null && y.contains(h.relatedTarget)) || (i.value = !1, s("blur", h), o?.());
  }, m = () => {
    var h, y;
    (h = c.value) != null && h.contains(document.activeElement) && c.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Ie(c, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), kn(c, "focus", u, !0), kn(c, "blur", f, !0), kn(c, "click", m, !0), {
    isFocused: i,
    wrapperRef: c,
    handleFocus: u,
    handleBlur: f
  };
}
const __ = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function ff({
  afterComposition: e,
  emit: t
}) {
  const n = q(!1), r = (c) => {
    t?.("compositionstart", c), n.value = !0;
  }, o = (c) => {
    var i;
    t?.("compositionupdate", c);
    const u = (i = c.target) == null ? void 0 : i.value, f = u[u.length - 1] || "";
    n.value = !__(f);
  }, a = (c) => {
    t?.("compositionend", c), n.value && (n.value = !1, wt(() => e(c)));
  };
  return {
    isComposing: n,
    handleComposition: (c) => {
      c.type === "compositionend" ? a(c) : o(c);
    },
    handleCompositionStart: r,
    handleCompositionUpdate: o,
    handleCompositionEnd: a
  };
}
function w_(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: s } = e.value;
    if (o == null || a == null)
      return;
    const c = s.slice(0, Math.max(0, o)), i = s.slice(Math.max(0, a));
    t = {
      selectionStart: o,
      selectionEnd: a,
      value: s,
      beforeTxt: c,
      afterTxt: i
    };
  }
  function r() {
    if (e.value == null || t == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: c } = t;
    if (a == null || s == null || c == null)
      return;
    let i = o.length;
    if (o.endsWith(s))
      i = o.length - s.length;
    else if (o.startsWith(a))
      i = a.length;
    else {
      const u = a[c - 1], f = o.indexOf(u, c - 1);
      f !== -1 && (i = f + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, r];
}
const k_ = "ElInput", S_ = le({
  name: k_,
  inheritAttrs: !1
}), T_ = /* @__PURE__ */ le({
  ...S_,
  props: m_,
  emits: h_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = up(), a = b_(), s = dp(), c = N(() => [
      r.type === "textarea" ? b.b() : v.b(),
      v.m(h.value),
      v.is("disabled", y.value),
      v.is("exceed", Fe.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || r.prefixIcon,
        [v.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [v.bm("suffix", "password-clear")]: he.value && me.value,
        [v.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), i = N(() => [
      v.e("wrapper"),
      v.is("focus", J.value)
    ]), { form: u, formItem: f } = as(), { inputId: m } = Dl(r, {
      formItemContext: f
    }), h = sa(), y = Fl(), v = Lt("input"), b = Lt("textarea"), I = Er(), p = Er(), L = q(!1), P = q(!1), C = q(), S = Er(r.inputStyle), x = N(() => I.value || p.value), { wrapperRef: O, isFocused: J, handleFocus: X, handleBlur: Q } = df(x, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var A;
        r.validateEvent && ((A = f?.validate) == null || A.call(f, "blur").catch((U) => void 0));
      }
    }), ue = N(() => {
      var A;
      return (A = u?.statusIcon) != null ? A : !1;
    }), se = N(() => f?.validateState || ""), be = N(() => se.value && af[se.value]), _e = N(() => P.value ? a_ : q1), H = N(() => [
      o.style
    ]), ee = N(() => [
      r.inputStyle,
      S.value,
      { resize: r.resize }
    ]), W = N(() => ur(r.modelValue) ? "" : String(r.modelValue)), he = N(() => r.clearable && !y.value && !r.readonly && !!W.value && (J.value || L.value)), me = N(() => r.showPassword && !y.value && !!W.value && (!!W.value || J.value)), Le = N(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), De = N(() => W.value.length), Fe = N(() => !!Le.value && De.value > Number(r.maxlength)), xe = N(() => !!s.suffix || !!r.suffixIcon || he.value || r.showPassword || Le.value || !!se.value && ue.value), [ye, Xe] = w_(I);
    Pn(p, (A) => {
      if (ge(), !Le.value || r.resize !== "both")
        return;
      const U = A[0], { width: Ee } = U.contentRect;
      C.value = {
        right: `calc(100% - ${Ee + 15 + 6}px)`
      };
    });
    const Ce = () => {
      const { type: A, autosize: U } = r;
      if (!(!Ct || A !== "textarea" || !p.value))
        if (U) {
          const Ee = an(U) ? U.minRows : void 0, Pe = an(U) ? U.maxRows : void 0, at = nu(p.value, Ee, Pe);
          S.value = {
            overflowY: "hidden",
            ...at
          }, wt(() => {
            p.value.offsetHeight, S.value = at;
          });
        } else
          S.value = {
            minHeight: nu(p.value).minHeight
          };
    }, ge = ((A) => {
      let U = !1;
      return () => {
        var Ee;
        if (U || !r.autosize)
          return;
        ((Ee = p.value) == null ? void 0 : Ee.offsetParent) === null || (A(), U = !0);
      };
    })(Ce), Je = () => {
      const A = x.value, U = r.formatter ? r.formatter(W.value) : W.value;
      !A || A.value === U || (A.value = U);
    }, vt = async (A) => {
      ye();
      let { value: U } = A.target;
      if (r.formatter && r.parser && (U = r.parser(U)), !Te.value) {
        if (U === W.value) {
          Je();
          return;
        }
        n(Pt, U), n(dr, U), await wt(), Je(), Xe();
      }
    }, Qe = (A) => {
      let { value: U } = A.target;
      r.formatter && r.parser && (U = r.parser(U)), n(pr, U);
    }, {
      isComposing: Te,
      handleCompositionStart: ft,
      handleCompositionUpdate: pt,
      handleCompositionEnd: te
    } = ff({ emit: n, afterComposition: vt }), Z = () => {
      ye(), P.value = !P.value, setTimeout(Xe);
    }, We = () => {
      var A;
      return (A = x.value) == null ? void 0 : A.focus();
    }, T = () => {
      var A;
      return (A = x.value) == null ? void 0 : A.blur();
    }, E = (A) => {
      L.value = !1, n("mouseleave", A);
    }, V = (A) => {
      L.value = !0, n("mouseenter", A);
    }, F = (A) => {
      n("keydown", A);
    }, we = () => {
      var A;
      (A = x.value) == null || A.select();
    }, pe = () => {
      n(Pt, ""), n(pr, ""), n("clear"), n(dr, "");
    };
    return Ie(() => r.modelValue, () => {
      var A;
      wt(() => Ce()), r.validateEvent && ((A = f?.validate) == null || A.call(f, "change").catch((U) => void 0));
    }), Ie(W, () => Je()), Ie(() => r.type, async () => {
      await wt(), Je(), Ce();
    }), Tt(() => {
      !r.formatter && r.parser, Je(), wt(Ce);
    }), t({
      input: I,
      textarea: p,
      ref: x,
      textareaStyle: ee,
      autosize: or(r, "autosize"),
      isComposing: Te,
      focus: We,
      blur: T,
      select: we,
      clear: pe,
      resizeTextarea: Ce
    }), (A, U) => (R(), j("div", {
      class: K([
        l(c),
        {
          [l(v).bm("group", "append")]: A.$slots.append,
          [l(v).bm("group", "prepend")]: A.$slots.prepend
        }
      ]),
      style: $t(l(H)),
      onMouseenter: V,
      onMouseleave: E
    }, [
      ne(" input "),
      A.type !== "textarea" ? (R(), j(gt, { key: 0 }, [
        ne(" prepend slot "),
        A.$slots.prepend ? (R(), j("div", {
          key: 0,
          class: K(l(v).be("group", "prepend"))
        }, [
          Ae(A.$slots, "prepend")
        ], 2)) : ne("v-if", !0),
        g("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: K(l(i))
        }, [
          ne(" prefix slot "),
          A.$slots.prefix || A.prefixIcon ? (R(), j("span", {
            key: 0,
            class: K(l(v).e("prefix"))
          }, [
            g("span", {
              class: K(l(v).e("prefix-inner"))
            }, [
              Ae(A.$slots, "prefix"),
              A.prefixIcon ? (R(), fe(l(At), {
                key: 0,
                class: K(l(v).e("icon"))
              }, {
                default: de(() => [
                  (R(), fe(Zt(A.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0),
          g("input", co({
            id: l(m),
            ref_key: "input",
            ref: I,
            class: l(v).e("inner")
          }, l(a), {
            minlength: A.minlength,
            maxlength: A.maxlength,
            type: A.showPassword ? P.value ? "text" : "password" : A.type,
            disabled: l(y),
            readonly: A.readonly,
            autocomplete: A.autocomplete,
            tabindex: A.tabindex,
            "aria-label": A.ariaLabel,
            placeholder: A.placeholder,
            style: A.inputStyle,
            form: A.form,
            autofocus: A.autofocus,
            role: A.containerRole,
            onCompositionstart: l(ft),
            onCompositionupdate: l(pt),
            onCompositionend: l(te),
            onInput: vt,
            onChange: Qe,
            onKeydown: F
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ne(" suffix slot "),
          l(xe) ? (R(), j("span", {
            key: 1,
            class: K(l(v).e("suffix"))
          }, [
            g("span", {
              class: K(l(v).e("suffix-inner"))
            }, [
              !l(he) || !l(me) || !l(Le) ? (R(), j(gt, { key: 0 }, [
                Ae(A.$slots, "suffix"),
                A.suffixIcon ? (R(), fe(l(At), {
                  key: 0,
                  class: K(l(v).e("icon"))
                }, {
                  default: de(() => [
                    (R(), fe(Zt(A.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ne("v-if", !0)
              ], 64)) : ne("v-if", !0),
              l(he) ? (R(), fe(l(At), {
                key: 1,
                class: K([l(v).e("icon"), l(v).e("clear")]),
                onMousedown: it(l(Xo), ["prevent"]),
                onClick: pe
              }, {
                default: de(() => [
                  z(l($l))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ne("v-if", !0),
              l(me) ? (R(), fe(l(At), {
                key: 2,
                class: K([l(v).e("icon"), l(v).e("password")]),
                onClick: Z
              }, {
                default: de(() => [
                  (R(), fe(Zt(l(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0),
              l(Le) ? (R(), j("span", {
                key: 3,
                class: K(l(v).e("count"))
              }, [
                g("span", {
                  class: K(l(v).e("count-inner"))
                }, M(l(De)) + " / " + M(A.maxlength), 3)
              ], 2)) : ne("v-if", !0),
              l(se) && l(be) && l(ue) ? (R(), fe(l(At), {
                key: 4,
                class: K([
                  l(v).e("icon"),
                  l(v).e("validateIcon"),
                  l(v).is("loading", l(se) === "validating")
                ])
              }, {
                default: de(() => [
                  (R(), fe(Zt(l(be))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0)
        ], 2),
        ne(" append slot "),
        A.$slots.append ? (R(), j("div", {
          key: 1,
          class: K(l(v).be("group", "append"))
        }, [
          Ae(A.$slots, "append")
        ], 2)) : ne("v-if", !0)
      ], 64)) : (R(), j(gt, { key: 1 }, [
        ne(" textarea "),
        g("textarea", co({
          id: l(m),
          ref_key: "textarea",
          ref: p,
          class: [l(b).e("inner"), l(v).is("focus", l(J))]
        }, l(a), {
          minlength: A.minlength,
          maxlength: A.maxlength,
          tabindex: A.tabindex,
          disabled: l(y),
          readonly: A.readonly,
          autocomplete: A.autocomplete,
          style: l(ee),
          "aria-label": A.ariaLabel,
          placeholder: A.placeholder,
          form: A.form,
          autofocus: A.autofocus,
          rows: A.rows,
          role: A.containerRole,
          onCompositionstart: l(ft),
          onCompositionupdate: l(pt),
          onCompositionend: l(te),
          onInput: vt,
          onFocus: l(X),
          onBlur: l(Q),
          onChange: Qe,
          onKeydown: F
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(Le) ? (R(), j("span", {
          key: 0,
          style: $t(C.value),
          class: K(l(v).e("count"))
        }, M(l(De)) + " / " + M(A.maxlength), 7)) : ne("v-if", !0)
      ], 64))
    ], 38));
  }
});
var E_ = /* @__PURE__ */ ct(T_, [["__file", "input.vue"]]);
const A_ = Tn(E_), ro = 4, C_ = {
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
}, I_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), zl = Symbol("scrollbarContextKey"), L_ = ot({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), O_ = "Thumb", x_ = /* @__PURE__ */ le({
  __name: "thumb",
  props: L_,
  setup(e) {
    const t = e, n = Ge(zl), r = Lt("scrollbar");
    n || Rl(O_, "can not inject scrollbar context");
    const o = q(), a = q(), s = q({}), c = q(!1);
    let i = !1, u = !1, f = Ct ? document.onselectstart : null;
    const m = N(() => C_[t.vertical ? "vertical" : "horizontal"]), h = N(() => I_({
      size: t.size,
      move: t.move,
      bar: m.value
    })), y = N(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), v = (x) => {
      var O;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), I(x);
      const J = x.currentTarget;
      J && (s.value[m.value.axis] = J[m.value.offset] - (x[m.value.client] - J.getBoundingClientRect()[m.value.direction]));
    }, b = (x) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(x.target.getBoundingClientRect()[m.value.direction] - x[m.value.client]), J = a.value[m.value.offset] / 2, X = (O - J) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = X * n.wrapElement[m.value.scrollSize] / 100;
    }, I = (x) => {
      x.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", p), document.addEventListener("mouseup", L), f = document.onselectstart, document.onselectstart = () => !1;
    }, p = (x) => {
      if (!o.value || !a.value || i === !1)
        return;
      const O = s.value[m.value.axis];
      if (!O)
        return;
      const J = (o.value.getBoundingClientRect()[m.value.direction] - x[m.value.client]) * -1, X = a.value[m.value.offset] - O, Q = (J - X) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = Q * n.wrapElement[m.value.scrollSize] / 100;
    }, L = () => {
      i = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", L), S(), u && (c.value = !1);
    }, P = () => {
      u = !1, c.value = !!t.size;
    }, C = () => {
      u = !0, c.value = i;
    };
    Wn(() => {
      S(), document.removeEventListener("mouseup", L);
    });
    const S = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return kn(or(n, "scrollbarElement"), "mousemove", P), kn(or(n, "scrollbarElement"), "mouseleave", C), (x, O) => (R(), fe(wo, {
      name: l(r).b("fade"),
      persisted: ""
    }, {
      default: de(() => [
        xt(g("div", {
          ref_key: "instance",
          ref: o,
          class: K([l(r).e("bar"), l(r).is(l(m).key)]),
          onMousedown: b
        }, [
          g("div", {
            ref_key: "thumb",
            ref: a,
            class: K(l(r).e("thumb")),
            style: $t(l(h)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [fr, x.always || c.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ou = /* @__PURE__ */ ct(x_, [["__file", "thumb.vue"]]);
const R_ = ot({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), N_ = /* @__PURE__ */ le({
  __name: "bar",
  props: R_,
  setup(e, { expose: t }) {
    const n = e, r = Ge(zl), o = q(0), a = q(0), s = q(""), c = q(""), i = q(1), u = q(1);
    return t({
      handleScroll: (h) => {
        if (h) {
          const y = h.offsetHeight - ro, v = h.offsetWidth - ro;
          a.value = h.scrollTop * 100 / y * i.value, o.value = h.scrollLeft * 100 / v * u.value;
        }
      },
      update: () => {
        const h = r?.wrapElement;
        if (!h)
          return;
        const y = h.offsetHeight - ro, v = h.offsetWidth - ro, b = y ** 2 / h.scrollHeight, I = v ** 2 / h.scrollWidth, p = Math.max(b, n.minSize), L = Math.max(I, n.minSize);
        i.value = b / (y - b) / (p / (y - p)), u.value = I / (v - I) / (L / (v - L)), c.value = p + ro < y ? `${p}px` : "", s.value = L + ro < v ? `${L}px` : "";
      }
    }), (h, y) => (R(), j(gt, null, [
      z(ou, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      z(ou, {
        move: a.value,
        ratio: i.value,
        size: c.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var P_ = /* @__PURE__ */ ct(N_, [["__file", "bar.vue"]]);
const $_ = ot({
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
    type: Se([String, Object, Array]),
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
}), M_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(je)
}, D_ = "ElScrollbar", F_ = le({
  name: D_
}), z_ = /* @__PURE__ */ le({
  ...F_,
  props: $_,
  emits: M_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Lt("scrollbar");
    let a, s, c = 0, i = 0;
    const u = q(), f = q(), m = q(), h = q(), y = N(() => {
      const S = {};
      return r.height && (S.height = mo(r.height)), r.maxHeight && (S.maxHeight = mo(r.maxHeight)), [r.wrapStyle, S];
    }), v = N(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), b = N(() => [o.e("view"), r.viewClass]), I = () => {
      var S;
      f.value && ((S = h.value) == null || S.handleScroll(f.value), c = f.value.scrollTop, i = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function p(S, x) {
      an(S) ? f.value.scrollTo(S) : je(S) && je(x) && f.value.scrollTo(S, x);
    }
    const L = (S) => {
      je(S) && (f.value.scrollTop = S);
    }, P = (S) => {
      je(S) && (f.value.scrollLeft = S);
    }, C = () => {
      var S;
      (S = h.value) == null || S.update();
    };
    return Ie(() => r.noresize, (S) => {
      S ? (a?.(), s?.()) : ({ stop: a } = Pn(m, C), s = kn("resize", C));
    }, { immediate: !0 }), Ie(() => [r.maxHeight, r.height], () => {
      r.native || wt(() => {
        var S;
        C(), f.value && ((S = h.value) == null || S.handleScroll(f.value));
      });
    }), Vn(zl, Br({
      scrollbarElement: u,
      wrapElement: f
    })), fp(() => {
      f.value && (f.value.scrollTop = c, f.value.scrollLeft = i);
    }), Tt(() => {
      r.native || wt(() => {
        C();
      });
    }), Ru(() => C()), t({
      wrapRef: f,
      update: C,
      scrollTo: p,
      setScrollTop: L,
      setScrollLeft: P,
      handleScroll: I
    }), (S, x) => (R(), j("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: K(l(o).b())
    }, [
      g("div", {
        ref_key: "wrapRef",
        ref: f,
        class: K(l(v)),
        style: $t(l(y)),
        tabindex: S.tabindex,
        onScroll: I
      }, [
        (R(), fe(Zt(S.tag), {
          id: S.id,
          ref_key: "resizeRef",
          ref: m,
          class: K(l(b)),
          style: $t(S.viewStyle),
          role: S.role,
          "aria-label": S.ariaLabel,
          "aria-orientation": S.ariaOrientation
        }, {
          default: de(() => [
            Ae(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      S.native ? ne("v-if", !0) : (R(), fe(P_, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: S.always,
        "min-size": S.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var B_ = /* @__PURE__ */ ct(z_, [["__file", "scrollbar.vue"]]);
const V_ = Tn(B_), Bl = Symbol("popper"), pf = Symbol("popperContent"), U_ = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], mf = ot({
  role: {
    type: String,
    values: U_,
    default: "tooltip"
  }
}), j_ = le({
  name: "ElPopper",
  inheritAttrs: !1
}), W_ = /* @__PURE__ */ le({
  ...j_,
  props: mf,
  setup(e, { expose: t }) {
    const n = e, r = q(), o = q(), a = q(), s = q(), c = N(() => n.role), i = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: c
    };
    return t(i), Vn(Bl, i), (u, f) => Ae(u.$slots, "default");
  }
});
var H_ = /* @__PURE__ */ ct(W_, [["__file", "popper.vue"]]);
const hf = ot({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), G_ = le({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), K_ = /* @__PURE__ */ le({
  ...G_,
  props: hf,
  setup(e, { expose: t }) {
    const n = e, r = Lt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ge(pf, void 0);
    return Ie(() => n.arrowOffset, (c) => {
      o.value = c;
    }), Wn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (c, i) => (R(), j("span", {
      ref_key: "arrowRef",
      ref: a,
      class: K(l(r).e("arrow")),
      style: $t(l(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var q_ = /* @__PURE__ */ ct(K_, [["__file", "arrow.vue"]]);
const gf = ot({
  virtualRef: {
    type: Se(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Se(Function)
  },
  onMouseleave: {
    type: Se(Function)
  },
  onClick: {
    type: Se(Function)
  },
  onKeydown: {
    type: Se(Function)
  },
  onFocus: {
    type: Se(Function)
  },
  onBlur: {
    type: Se(Function)
  },
  onContextmenu: {
    type: Se(Function)
  },
  id: String,
  open: Boolean
}), vf = Symbol("elForwardRef"), Y_ = (e) => {
  Vn(vf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Z_ = (e) => ({
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
}, X_ = "ElOnlyChild", Q_ = le({
  name: X_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ge(vf), a = Z_((r = o?.setForwardRef) != null ? r : Xo);
    return () => {
      var s;
      const c = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!c || c.length > 1)
        return null;
      const i = bf(c);
      return i ? xt(pp(i, n), [[a]]) : null;
    };
  }
});
function bf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (an(n))
      switch (n.type) {
        case mp:
          continue;
        case Ou:
        case "svg":
          return au(n);
        case gt:
          return bf(n.children);
        default:
          return n;
      }
    return au(n);
  }
  return null;
}
function au(e) {
  const t = Lt("only-child");
  return z("span", {
    class: t.e("content")
  }, [e]);
}
const J_ = le({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), ew = /* @__PURE__ */ le({
  ...J_,
  props: gf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ge(Bl, void 0);
    Y_(o);
    const a = N(() => c.value ? n.id : void 0), s = N(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), c = N(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), i = N(() => c.value ? `${n.open}` : void 0);
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
    return Tt(() => {
      Ie(() => n.virtualRef, (m) => {
        m && (o.value = lr(m));
      }, {
        immediate: !0
      }), Ie(o, (m, h) => {
        u?.(), u = void 0, wn(m) && (f.forEach((y) => {
          var v;
          const b = n[y];
          b && (m.addEventListener(y.slice(2).toLowerCase(), b), (v = h?.removeEventListener) == null || v.call(h, y.slice(2).toLowerCase(), b));
        }), Qs(m) && (u = Ie([a, s, c, i], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, b) => {
            ur(y[b]) ? m.removeAttribute(v) : m.setAttribute(v, y[b]);
          });
        }, { immediate: !0 }))), wn(h) && Qs(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => h.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Wn(() => {
      if (u?.(), u = void 0, o.value && wn(o.value)) {
        const m = o.value;
        f.forEach((h) => {
          const y = n[h];
          y && m.removeEventListener(h.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, h) => m.virtualTriggering ? ne("v-if", !0) : (R(), fe(l(Q_), co({ key: 0 }, m.$attrs, {
      "aria-controls": l(a),
      "aria-describedby": l(s),
      "aria-expanded": l(i),
      "aria-haspopup": l(c)
    }), {
      default: de(() => [
        Ae(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var tw = /* @__PURE__ */ ct(ew, [["__file", "trigger.vue"]]);
const Ls = "focus-trap.focus-after-trapped", Os = "focus-trap.focus-after-released", nw = "focus-trap.focusout-prevented", su = {
  cancelable: !0,
  bubbles: !1
}, rw = {
  cancelable: !0,
  bubbles: !1
}, lu = "focusAfterTrapped", iu = "focusAfterReleased", ow = Symbol("elFocusTrap"), Vl = q(), ss = q(0), Ul = q(0);
let ba = 0;
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
}, cu = (e, t) => {
  for (const n of e)
    if (!aw(n, t))
      return n;
}, aw = (e, t) => {
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
}, sw = (e) => {
  const t = yf(e), n = cu(t, e), r = cu(t.reverse(), e);
  return [n, r];
}, lw = (e) => e instanceof HTMLInputElement && "select" in e, nr = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    wn(e) && !Qs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Ul.value = window.performance.now(), e !== n && lw(e) && t && e.select(), wn(e) && r && e.removeAttribute("tabindex");
  }
};
function uu(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const iw = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = uu(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = uu(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, cw = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (nr(r, t), document.activeElement !== n)
      return;
}, du = iw(), uw = () => ss.value > Ul.value, ya = () => {
  Vl.value = "pointer", ss.value = window.performance.now();
}, fu = () => {
  Vl.value = "keyboard", ss.value = window.performance.now();
}, dw = () => (Tt(() => {
  ba === 0 && (document.addEventListener("mousedown", ya), document.addEventListener("touchstart", ya), document.addEventListener("keydown", fu)), ba++;
}), Wn(() => {
  ba--, ba <= 0 && (document.removeEventListener("mousedown", ya), document.removeEventListener("touchstart", ya), document.removeEventListener("keydown", fu));
}), {
  focusReason: Vl,
  lastUserFocusTimestamp: ss,
  lastAutomatedFocusTimestamp: Ul
}), _a = (e) => new CustomEvent(nw, {
  ...rw,
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
let lo = [];
const pu = (e) => {
  e.code === zn.esc && lo.forEach((t) => t(e));
}, fw = (e) => {
  Tt(() => {
    lo.length === 0 && document.addEventListener("keydown", pu), Ct && lo.push(e);
  }), Wn(() => {
    lo = lo.filter((t) => t !== e), lo.length === 0 && Ct && document.removeEventListener("keydown", pu);
  });
}, pw = le({
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
    lu,
    iu,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = q();
    let r, o;
    const { focusReason: a } = dw();
    fw((v) => {
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
    }, c = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: b, altKey: I, ctrlKey: p, metaKey: L, currentTarget: P, shiftKey: C } = v, { loop: S } = e, x = b === zn.tab && !I && !p && !L, O = document.activeElement;
      if (x && O) {
        const J = P, [X, Q] = sw(J);
        if (X && Q) {
          if (!C && O === Q) {
            const se = _a({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (v.preventDefault(), S && nr(X, !0));
          } else if (C && [X, J].includes(O)) {
            const se = _a({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (v.preventDefault(), S && nr(Q, !0));
          }
        } else if (O === J) {
          const se = _a({
            focusReason: a.value
          });
          t("focusout-prevented", se), se.defaultPrevented || v.preventDefault();
        }
      }
    };
    Vn(ow, {
      focusTrapRef: n,
      onKeydown: c
    }), Ie(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), Ie([n], ([v], [b]) => {
      v && (v.addEventListener("keydown", c), v.addEventListener("focusin", f), v.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", c), b.removeEventListener("focusin", f), b.removeEventListener("focusout", m));
    });
    const i = (v) => {
      t(lu, v);
    }, u = (v) => t(iu, v), f = (v) => {
      const b = l(n);
      if (!b)
        return;
      const I = v.target, p = v.relatedTarget, L = I && b.contains(I);
      e.trapped || p && b.contains(p) || (r = p), L && t("focusin", v), !s.paused && e.trapped && (L ? o = I : nr(o, !0));
    }, m = (v) => {
      const b = l(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const I = v.relatedTarget;
          !ur(I) && !b.contains(I) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const p = _a({
                focusReason: a.value
              });
              t("focusout-prevented", p), p.defaultPrevented || nr(o, !0);
            }
          }, 0);
        } else {
          const I = v.target;
          I && b.contains(I) || t("focusout", v);
        }
    };
    async function h() {
      await wt();
      const v = l(n);
      if (v) {
        du.push(s);
        const b = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = b, !v.contains(b)) {
          const p = new Event(Ls, su);
          v.addEventListener(Ls, i), v.dispatchEvent(p), p.defaultPrevented || wt(() => {
            let L = e.focusStartEl;
            Gt(L) || (nr(L), document.activeElement !== L && (L = "first")), L === "first" && cw(yf(v), !0), (document.activeElement === b || L === "container") && nr(v);
          });
        }
      }
    }
    function y() {
      const v = l(n);
      if (v) {
        v.removeEventListener(Ls, i);
        const b = new CustomEvent(Os, {
          ...su,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(Os, u), v.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !uw() || v.contains(document.activeElement)) && nr(r ?? document.body), v.removeEventListener(Os, u), du.remove(s);
      }
    }
    return Tt(() => {
      e.trapped && h(), Ie(() => e.trapped, (v) => {
        v ? h() : y();
      });
    }), Wn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", c), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: c
    };
  }
});
function mw(e, t, n, r, o, a) {
  return Ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var hw = /* @__PURE__ */ ct(pw, [["render", mw], ["__file", "focus-trap.vue"]]), nn = "top", dn = "bottom", fn = "right", rn = "left", jl = "auto", la = [nn, dn, fn, rn], ho = "start", ea = "end", gw = "clippingParents", _f = "viewport", Mo = "popper", vw = "reference", mu = la.reduce(function(e, t) {
  return e.concat([t + "-" + ho, t + "-" + ea]);
}, []), ls = [].concat(la, [jl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ho, t + "-" + ea]);
}, []), bw = "beforeRead", yw = "read", _w = "afterRead", ww = "beforeMain", kw = "main", Sw = "afterMain", Tw = "beforeWrite", Ew = "write", Aw = "afterWrite", Cw = [bw, yw, _w, ww, kw, Sw, Tw, Ew, Aw];
function jn(e) {
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
function Wl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = sn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Iw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !cn(a) || !jn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var c = o[s];
      c === !1 ? a.removeAttribute(s) : a.setAttribute(s, c === !0 ? "" : c);
    }));
  });
}
function Lw(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !cn(o) || !jn(o) || (Object.assign(o.style, c), Object.keys(a).forEach(function(i) {
        o.removeAttribute(i);
      }));
    });
  };
}
var wf = { name: "applyStyles", enabled: !0, phase: "write", fn: Iw, effect: Lw, requires: ["computeStyles"] };
function Bn(e) {
  return e.split("-")[0];
}
var zr = Math.max, Ua = Math.min, go = Math.round;
function Js() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function kf() {
  return !/^((?!chrome|android).)*safari/i.test(Js());
}
function vo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && cn(e) && (o = e.offsetWidth > 0 && go(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && go(r.height) / e.offsetHeight || 1);
  var s = jr(e) ? sn(e) : window, c = s.visualViewport, i = !kf() && n, u = (r.left + (i && c ? c.offsetLeft : 0)) / o, f = (r.top + (i && c ? c.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
  return { width: m, height: h, top: f, right: u + m, bottom: f + h, left: u, x: u, y: f };
}
function Hl(e) {
  var t = vo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Sf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Wl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function mr(e) {
  return sn(e).getComputedStyle(e);
}
function Ow(e) {
  return ["table", "td", "th"].indexOf(jn(e)) >= 0;
}
function Or(e) {
  return ((jr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function is(e) {
  return jn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wl(e) ? e.host : null) || Or(e);
}
function hu(e) {
  return !cn(e) || mr(e).position === "fixed" ? null : e.offsetParent;
}
function xw(e) {
  var t = /firefox/i.test(Js()), n = /Trident/i.test(Js());
  if (n && cn(e)) {
    var r = mr(e);
    if (r.position === "fixed") return null;
  }
  var o = is(e);
  for (Wl(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(jn(o)) < 0; ) {
    var a = mr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function ia(e) {
  for (var t = sn(e), n = hu(e); n && Ow(n) && mr(n).position === "static"; ) n = hu(n);
  return n && (jn(n) === "html" || jn(n) === "body" && mr(n).position === "static") ? t : n || xw(e) || t;
}
function Gl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Wo(e, t, n) {
  return zr(e, Ua(t, n));
}
function Rw(e, t, n) {
  var r = Wo(e, t, n);
  return r > n ? n : r;
}
function Tf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ef(e) {
  return Object.assign({}, Tf(), e);
}
function Af(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Nw = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ef(typeof e != "number" ? e : Af(e, la));
};
function Pw(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, c = Bn(n.placement), i = Gl(c), u = [rn, fn].indexOf(c) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = Nw(o.padding, n), h = Hl(a), y = i === "y" ? nn : rn, v = i === "y" ? dn : fn, b = n.rects.reference[f] + n.rects.reference[i] - s[i] - n.rects.popper[f], I = s[i] - n.rects.reference[i], p = ia(a), L = p ? i === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, P = b / 2 - I / 2, C = m[y], S = L - h[f] - m[v], x = L / 2 - h[f] / 2 + P, O = Wo(C, x, S), J = i;
    n.modifiersData[r] = (t = {}, t[J] = O, t.centerOffset = O - x, t);
  }
}
function $w(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Sf(t.elements.popper, o) && (t.elements.arrow = o));
}
var Mw = { name: "arrow", enabled: !0, phase: "main", fn: Pw, effect: $w, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function bo(e) {
  return e.split("-")[1];
}
var Dw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Fw(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: go(n * o) / o || 0, y: go(r * o) / o || 0 };
}
function gu(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, c = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, h = s.x, y = h === void 0 ? 0 : h, v = s.y, b = v === void 0 ? 0 : v, I = typeof f == "function" ? f({ x: y, y: b }) : { x: y, y: b };
  y = I.x, b = I.y;
  var p = s.hasOwnProperty("x"), L = s.hasOwnProperty("y"), P = rn, C = nn, S = window;
  if (u) {
    var x = ia(n), O = "clientHeight", J = "clientWidth";
    if (x === sn(n) && (x = Or(n), mr(x).position !== "static" && c === "absolute" && (O = "scrollHeight", J = "scrollWidth")), x = x, o === nn || (o === rn || o === fn) && a === ea) {
      C = dn;
      var X = m && x === S && S.visualViewport ? S.visualViewport.height : x[O];
      b -= X - r.height, b *= i ? 1 : -1;
    }
    if (o === rn || (o === nn || o === dn) && a === ea) {
      P = fn;
      var Q = m && x === S && S.visualViewport ? S.visualViewport.width : x[J];
      y -= Q - r.width, y *= i ? 1 : -1;
    }
  }
  var ue = Object.assign({ position: c }, u && Dw), se = f === !0 ? Fw({ x: y, y: b }, sn(n)) : { x: y, y: b };
  if (y = se.x, b = se.y, i) {
    var be;
    return Object.assign({}, ue, (be = {}, be[C] = L ? "0" : "", be[P] = p ? "0" : "", be.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", be));
  }
  return Object.assign({}, ue, (t = {}, t[C] = L ? b + "px" : "", t[P] = p ? y + "px" : "", t.transform = "", t));
}
function zw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, c = n.roundOffsets, i = c === void 0 ? !0 : c, u = { placement: Bn(t.placement), variation: bo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gu(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gu(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Cf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: zw, data: {} }, wa = { passive: !0 };
function Bw(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, c = s === void 0 ? !0 : s, i = sn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, wa);
  }), c && i.addEventListener("resize", n.update, wa), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, wa);
    }), c && i.removeEventListener("resize", n.update, wa);
  };
}
var If = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Bw, data: {} }, Vw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ca(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Vw[t];
  });
}
var Uw = { start: "end", end: "start" };
function vu(e) {
  return e.replace(/start|end/g, function(t) {
    return Uw[t];
  });
}
function Kl(e) {
  var t = sn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function ql(e) {
  return vo(Or(e)).left + Kl(e).scrollLeft;
}
function jw(e, t) {
  var n = sn(e), r = Or(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, c = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = kf();
    (u || !u && t === "fixed") && (c = o.offsetLeft, i = o.offsetTop);
  }
  return { width: a, height: s, x: c + ql(e), y: i };
}
function Ww(e) {
  var t, n = Or(e), r = Kl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = zr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = zr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -r.scrollLeft + ql(e), i = -r.scrollTop;
  return mr(o || n).direction === "rtl" && (c += zr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: c, y: i };
}
function Yl(e) {
  var t = mr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Lf(e) {
  return ["html", "body", "#document"].indexOf(jn(e)) >= 0 ? e.ownerDocument.body : cn(e) && Yl(e) ? e : Lf(is(e));
}
function Ho(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Lf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = sn(r), s = o ? [a].concat(a.visualViewport || [], Yl(r) ? r : []) : r, c = t.concat(s);
  return o ? c : c.concat(Ho(is(s)));
}
function el(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Hw(e, t) {
  var n = vo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function bu(e, t, n) {
  return t === _f ? el(jw(e, n)) : jr(t) ? Hw(t, n) : el(Ww(Or(e)));
}
function Gw(e) {
  var t = Ho(is(e)), n = ["absolute", "fixed"].indexOf(mr(e).position) >= 0, r = n && cn(e) ? ia(e) : e;
  return jr(r) ? t.filter(function(o) {
    return jr(o) && Sf(o, r) && jn(o) !== "body";
  }) : [];
}
function Kw(e, t, n, r) {
  var o = t === "clippingParents" ? Gw(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], c = a.reduce(function(i, u) {
    var f = bu(e, u, r);
    return i.top = zr(f.top, i.top), i.right = Ua(f.right, i.right), i.bottom = Ua(f.bottom, i.bottom), i.left = zr(f.left, i.left), i;
  }, bu(e, s, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Of(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Bn(r) : null, a = r ? bo(r) : null, s = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, i;
  switch (o) {
    case nn:
      i = { x: s, y: t.y - n.height };
      break;
    case dn:
      i = { x: s, y: t.y + t.height };
      break;
    case fn:
      i = { x: t.x + t.width, y: c };
      break;
    case rn:
      i = { x: t.x - n.width, y: c };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = o ? Gl(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case ho:
        i[u] = i[u] - (t[f] / 2 - n[f] / 2);
        break;
      case ea:
        i[u] = i[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return i;
}
function ta(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, c = n.boundary, i = c === void 0 ? gw : c, u = n.rootBoundary, f = u === void 0 ? _f : u, m = n.elementContext, h = m === void 0 ? Mo : m, y = n.altBoundary, v = y === void 0 ? !1 : y, b = n.padding, I = b === void 0 ? 0 : b, p = Ef(typeof I != "number" ? I : Af(I, la)), L = h === Mo ? vw : Mo, P = e.rects.popper, C = e.elements[v ? L : h], S = Kw(jr(C) ? C : C.contextElement || Or(e.elements.popper), i, f, s), x = vo(e.elements.reference), O = Of({ reference: x, element: P, placement: o }), J = el(Object.assign({}, P, O)), X = h === Mo ? J : x, Q = { top: S.top - X.top + p.top, bottom: X.bottom - S.bottom + p.bottom, left: S.left - X.left + p.left, right: X.right - S.right + p.right }, ue = e.modifiersData.offset;
  if (h === Mo && ue) {
    var se = ue[o];
    Object.keys(Q).forEach(function(be) {
      var _e = [fn, dn].indexOf(be) >= 0 ? 1 : -1, H = [nn, dn].indexOf(be) >= 0 ? "y" : "x";
      Q[be] += se[H] * _e;
    });
  }
  return Q;
}
function qw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, c = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? ls : i, f = bo(r), m = f ? c ? mu : mu.filter(function(v) {
    return bo(v) === f;
  }) : la, h = m.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(v, b) {
    return v[b] = ta(e, { placement: b, boundary: o, rootBoundary: a, padding: s })[Bn(b)], v;
  }, {});
  return Object.keys(y).sort(function(v, b) {
    return y[v] - y[b];
  });
}
function Yw(e) {
  if (Bn(e) === jl) return [];
  var t = Ca(e);
  return [vu(e), t, vu(t)];
}
function Zw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, c = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, v = y === void 0 ? !0 : y, b = n.allowedAutoPlacements, I = t.options.placement, p = Bn(I), L = p === I, P = i || (L || !v ? [Ca(I)] : Yw(I)), C = [I].concat(P).reduce(function(ye, Xe) {
      return ye.concat(Bn(Xe) === jl ? qw(t, { placement: Xe, boundary: f, rootBoundary: m, padding: u, flipVariations: v, allowedAutoPlacements: b }) : Xe);
    }, []), S = t.rects.reference, x = t.rects.popper, O = /* @__PURE__ */ new Map(), J = !0, X = C[0], Q = 0; Q < C.length; Q++) {
      var ue = C[Q], se = Bn(ue), be = bo(ue) === ho, _e = [nn, dn].indexOf(se) >= 0, H = _e ? "width" : "height", ee = ta(t, { placement: ue, boundary: f, rootBoundary: m, altBoundary: h, padding: u }), W = _e ? be ? fn : rn : be ? dn : nn;
      S[H] > x[H] && (W = Ca(W));
      var he = Ca(W), me = [];
      if (a && me.push(ee[se] <= 0), c && me.push(ee[W] <= 0, ee[he] <= 0), me.every(function(ye) {
        return ye;
      })) {
        X = ue, J = !1;
        break;
      }
      O.set(ue, me);
    }
    if (J) for (var Le = v ? 3 : 1, De = function(ye) {
      var Xe = C.find(function(Ce) {
        var Ze = O.get(Ce);
        if (Ze) return Ze.slice(0, ye).every(function(ge) {
          return ge;
        });
      });
      if (Xe) return X = Xe, "break";
    }, Fe = Le; Fe > 0; Fe--) {
      var xe = De(Fe);
      if (xe === "break") break;
    }
    t.placement !== X && (t.modifiersData[r]._skip = !0, t.placement = X, t.reset = !0);
  }
}
var Xw = { name: "flip", enabled: !0, phase: "main", fn: Zw, requiresIfExists: ["offset"], data: { _skip: !1 } };
function yu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function _u(e) {
  return [nn, fn, dn, rn].some(function(t) {
    return e[t] >= 0;
  });
}
function Qw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = ta(t, { elementContext: "reference" }), c = ta(t, { altBoundary: !0 }), i = yu(s, r), u = yu(c, o, a), f = _u(i), m = _u(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var Jw = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Qw };
function ek(e, t, n) {
  var r = Bn(e), o = [rn, nn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], c = a[1];
  return s = s || 0, c = (c || 0) * o, [rn, fn].indexOf(r) >= 0 ? { x: c, y: s } : { x: s, y: c };
}
function tk(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = ls.reduce(function(f, m) {
    return f[m] = ek(m, t.rects, a), f;
  }, {}), c = s[t.placement], i = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var nk = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: tk };
function rk(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Of({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var xf = { name: "popperOffsets", enabled: !0, phase: "read", fn: rk, data: {} };
function ok(e) {
  return e === "x" ? "y" : "x";
}
function ak(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, c = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, v = n.tetherOffset, b = v === void 0 ? 0 : v, I = ta(t, { boundary: i, rootBoundary: u, padding: m, altBoundary: f }), p = Bn(t.placement), L = bo(t.placement), P = !L, C = Gl(p), S = ok(C), x = t.modifiersData.popperOffsets, O = t.rects.reference, J = t.rects.popper, X = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, Q = typeof X == "number" ? { mainAxis: X, altAxis: X } : Object.assign({ mainAxis: 0, altAxis: 0 }, X), ue = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, se = { x: 0, y: 0 };
  if (x) {
    if (a) {
      var be, _e = C === "y" ? nn : rn, H = C === "y" ? dn : fn, ee = C === "y" ? "height" : "width", W = x[C], he = W + I[_e], me = W - I[H], Le = y ? -J[ee] / 2 : 0, De = L === ho ? O[ee] : J[ee], Fe = L === ho ? -J[ee] : -O[ee], xe = t.elements.arrow, ye = y && xe ? Hl(xe) : { width: 0, height: 0 }, Xe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Tf(), Ce = Xe[_e], Ze = Xe[H], ge = Wo(0, O[ee], ye[ee]), Je = P ? O[ee] / 2 - Le - ge - Ce - Q.mainAxis : De - ge - Ce - Q.mainAxis, vt = P ? -O[ee] / 2 + Le + ge + Ze + Q.mainAxis : Fe + ge + Ze + Q.mainAxis, Qe = t.elements.arrow && ia(t.elements.arrow), Te = Qe ? C === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, ft = (be = ue?.[C]) != null ? be : 0, pt = W + Je - ft - Te, te = W + vt - ft, Z = Wo(y ? Ua(he, pt) : he, W, y ? zr(me, te) : me);
      x[C] = Z, se[C] = Z - W;
    }
    if (c) {
      var We, T = C === "x" ? nn : rn, E = C === "x" ? dn : fn, V = x[S], F = S === "y" ? "height" : "width", we = V + I[T], pe = V - I[E], A = [nn, rn].indexOf(p) !== -1, U = (We = ue?.[S]) != null ? We : 0, Ee = A ? we : V - O[F] - J[F] - U + Q.altAxis, Pe = A ? V + O[F] + J[F] - U - Q.altAxis : pe, at = y && A ? Rw(Ee, V, Pe) : Wo(y ? Ee : we, V, y ? Pe : pe);
      x[S] = at, se[S] = at - V;
    }
    t.modifiersData[r] = se;
  }
}
var sk = { name: "preventOverflow", enabled: !0, phase: "main", fn: ak, requiresIfExists: ["offset"] };
function lk(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ik(e) {
  return e === sn(e) || !cn(e) ? Kl(e) : lk(e);
}
function ck(e) {
  var t = e.getBoundingClientRect(), n = go(t.width) / e.offsetWidth || 1, r = go(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function uk(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), o = cn(t) && ck(t), a = Or(t), s = vo(e, o, n), c = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (r || !r && !n) && ((jn(t) !== "body" || Yl(a)) && (c = ik(t)), cn(t) ? (i = vo(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = ql(a))), { x: s.left + c.scrollLeft - i.x, y: s.top + c.scrollTop - i.y, width: s.width, height: s.height };
}
function dk(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(c) {
      if (!n.has(c)) {
        var i = t.get(c);
        i && o(i);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function fk(e) {
  var t = dk(e);
  return Cw.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function pk(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function mk(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var wu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ku() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Zl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? wu : o;
  return function(s, c, i) {
    i === void 0 && (i = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, wu, a), modifiersData: {}, elements: { reference: s, popper: c }, attributes: {}, styles: {} }, f = [], m = !1, h = { state: u, setOptions: function(b) {
      var I = typeof b == "function" ? b(u.options) : b;
      v(), u.options = Object.assign({}, a, u.options, I), u.scrollParents = { reference: jr(s) ? Ho(s) : s.contextElement ? Ho(s.contextElement) : [], popper: Ho(c) };
      var p = fk(mk([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(L) {
        return L.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, I = b.reference, p = b.popper;
        if (ku(I, p)) {
          u.rects = { reference: uk(I, ia(p), u.options.strategy === "fixed"), popper: Hl(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(J) {
            return u.modifiersData[J.name] = Object.assign({}, J.data);
          });
          for (var L = 0; L < u.orderedModifiers.length; L++) {
            if (u.reset === !0) {
              u.reset = !1, L = -1;
              continue;
            }
            var P = u.orderedModifiers[L], C = P.fn, S = P.options, x = S === void 0 ? {} : S, O = P.name;
            typeof C == "function" && (u = C({ state: u, options: x, name: O, instance: h }) || u);
          }
        }
      }
    }, update: pk(function() {
      return new Promise(function(b) {
        h.forceUpdate(), b(u);
      });
    }), destroy: function() {
      v(), m = !0;
    } };
    if (!ku(s, c)) return h;
    h.setOptions(i).then(function(b) {
      !m && i.onFirstUpdate && i.onFirstUpdate(b);
    });
    function y() {
      u.orderedModifiers.forEach(function(b) {
        var I = b.name, p = b.options, L = p === void 0 ? {} : p, P = b.effect;
        if (typeof P == "function") {
          var C = P({ state: u, name: I, instance: h, options: L }), S = function() {
          };
          f.push(C || S);
        }
      });
    }
    function v() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return h;
  };
}
Zl();
var hk = [If, xf, Cf, wf];
Zl({ defaultModifiers: hk });
var gk = [If, xf, Cf, wf, nk, Xw, sk, Mw, Jw], vk = Zl({ defaultModifiers: gk });
const bk = ["fixed", "absolute"], yk = ot({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Se(Array),
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
    type: Se(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: bk,
    default: "absolute"
  }
}), Rf = ot({
  ...yk,
  id: String,
  style: {
    type: Se([String, Array, Object])
  },
  className: {
    type: Se([String, Array, Object])
  },
  effect: {
    type: Se(String),
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
    type: Se([String, Array, Object])
  },
  popperStyle: {
    type: Se([String, Array, Object])
  },
  referenceEl: {
    type: Se(Object)
  },
  triggerTargetEl: {
    type: Se(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...qr(["ariaLabel"])
}), _k = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, wk = (e, t) => {
  const n = q(!1), r = q();
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
}, kk = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Tk(e), ...t]
  };
  return Ek(a, o?.modifiers), a;
}, Sk = (e) => {
  if (Ct)
    return lr(e);
};
function Tk(e) {
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
function Ek(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Ak = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = Ck(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = N(() => {
    const { onFirstUpdate: i, placement: u, strategy: f, modifiers: m } = l(n);
    return {
      onFirstUpdate: i,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...m || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Er(), s = q({
    styles: {
      popper: {
        position: l(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), c = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return Ie(o, (i) => {
    const u = l(a);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), Ie([e, t], ([i, u]) => {
    c(), !(!i || !u) && (a.value = vk(i, u, l(o)));
  }), Wn(() => {
    c();
  }), {
    state: N(() => {
      var i;
      return { ...((i = l(a)) == null ? void 0 : i.state) || {} };
    }),
    styles: N(() => l(s).styles),
    attributes: N(() => l(s).attributes),
    update: () => {
      var i;
      return (i = l(a)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = l(a)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: N(() => l(a))
  };
};
function Ck(e) {
  const t = Object.keys(e.elements), n = Da(t.map((o) => [o, e.styles[o] || {}])), r = Da(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Ik = 0, Lk = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ge(Bl, void 0), a = q(), s = q(), c = N(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = N(() => {
    var p;
    const L = l(a), P = (p = l(s)) != null ? p : Ik;
    return {
      name: "arrow",
      enabled: !Gy(L),
      options: {
        element: L,
        padding: P
      }
    };
  }), u = N(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...kk(e, [
      l(i),
      l(c)
    ])
  })), f = N(() => Sk(e.referenceEl) || l(r)), { attributes: m, state: h, styles: y, update: v, forceUpdate: b, instanceRef: I } = Ak(f, n, u);
  return Ie(I, (p) => t.value = p), Tt(() => {
    Ie(() => {
      var p;
      return (p = l(f)) == null ? void 0 : p.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: I,
    state: h,
    styles: y,
    role: o,
    forceUpdate: b,
    update: v
  };
}, Ok = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Gd(), a = Lt("popper"), s = N(() => l(t).popper), c = q(je(e.zIndex) ? e.zIndex : o()), i = N(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = N(() => [
    { zIndex: l(c) },
    l(n).popper,
    e.popperStyle || {}
  ]), f = N(() => r.value === "dialog" ? "false" : void 0), m = N(() => l(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: c,
    updateZIndex: () => {
      c.value = je(e.zIndex) ? e.zIndex : o();
    }
  };
}, xk = le({
  name: "ElPopperContent"
}), Rk = /* @__PURE__ */ le({
  ...xk,
  props: Rf,
  emits: _k,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: c,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = wk(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: v, instanceRef: b, role: I, update: p } = Lk(r), {
      ariaModal: L,
      arrowStyle: P,
      contentAttrs: C,
      contentClass: S,
      contentStyle: x,
      updateZIndex: O
    } = Ok(r, {
      styles: v,
      attributes: m,
      role: I
    }), J = Ge(Va, void 0), X = q();
    Vn(pf, {
      arrowStyle: P,
      arrowRef: h,
      arrowOffset: X
    }), J && Vn(Va, {
      ...J,
      addInputId: Xo,
      removeInputId: Xo
    });
    let Q;
    const ue = (be = !0) => {
      p(), be && O();
    }, se = () => {
      ue(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Tt(() => {
      Ie(() => r.triggerTargetEl, (be, _e) => {
        Q?.(), Q = void 0;
        const H = l(be || y.value), ee = l(_e || y.value);
        wn(H) && (Q = Ie([I, () => r.ariaLabel, L, () => r.id], (W) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((he, me) => {
            ur(W[me]) ? H.removeAttribute(he) : H.setAttribute(he, W[me]);
          });
        }, { immediate: !0 })), ee !== H && wn(ee) && ["role", "aria-label", "aria-modal", "id"].forEach((W) => {
          ee.removeAttribute(W);
        });
      }, { immediate: !0 }), Ie(() => r.visible, se, { immediate: !0 });
    }), Wn(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: b,
      updatePopper: ue,
      contentStyle: x
    }), (be, _e) => (R(), j("div", co({
      ref_key: "contentRef",
      ref: y
    }, l(C), {
      style: l(x),
      class: l(S),
      tabindex: "-1",
      onMouseenter: (H) => be.$emit("mouseenter", H),
      onMouseleave: (H) => be.$emit("mouseleave", H)
    }), [
      z(l(hw), {
        trapped: l(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(y),
        "focus-start-el": l(o),
        onFocusAfterTrapped: l(c),
        onFocusAfterReleased: l(s),
        onFocusin: l(i),
        onFocusoutPrevented: l(u),
        onReleaseRequested: l(f)
      }, {
        default: de(() => [
          Ae(be.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Nk = /* @__PURE__ */ ct(Rk, [["__file", "content.vue"]]);
const Pk = Tn(H_), Xl = Symbol("elTooltip");
function Su() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return aa(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const $k = ot({
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
}), Mk = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Su(), {
    registerTimeout: s,
    cancelTimeout: c
  } = Su();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const m = l(n);
        je(m) && m > 0 && s(() => {
          o(f);
        }, m);
      }, l(e));
    },
    onClose: (f) => {
      c(), a(() => {
        o(f);
      }, l(t));
    }
  };
}, Ql = ot({
  ...$k,
  ...Rf,
  appendTo: {
    type: Se([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: Se(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...qr(["ariaLabel"])
}), Nf = ot({
  ...gf,
  disabled: Boolean,
  trigger: {
    type: Se([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Se(Array),
    default: () => [zn.enter, zn.numpadEnter, zn.space]
  }
}), Dk = ns({
  type: Se(Boolean),
  default: null
}), Fk = ns({
  type: Se(Function)
}), zk = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Dk,
    [n]: Fk
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: c,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: f,
      onHide: m
    }) => {
      const h = Qt(), { emit: y } = h, v = h.props, b = N(() => dt(v[n])), I = N(() => v[e] === null), p = (O) => {
        s.value !== !0 && (s.value = !0, c && (c.value = O), dt(f) && f(O));
      }, L = (O) => {
        s.value !== !1 && (s.value = !1, c && (c.value = O), dt(m) && m(O));
      }, P = (O) => {
        if (v.disabled === !0 || dt(u) && !u())
          return;
        const J = b.value && Ct;
        J && y(t, !0), (I.value || !J) && p(O);
      }, C = (O) => {
        if (v.disabled === !0 || !Ct)
          return;
        const J = b.value && Ct;
        J && y(t, !1), (I.value || !J) && L(O);
      }, S = (O) => {
        Ar(O) && (v.disabled && O ? b.value && y(t, !1) : s.value !== O && (O ? p() : L()));
      }, x = () => {
        s.value ? C() : P();
      };
      return Ie(() => v[e], S), i && h.appContext.config.globalProperties.$route !== void 0 && Ie(() => ({
        ...h.proxy.$route
      }), () => {
        i.value && s.value && C();
      }), Tt(() => {
        S(v[e]);
      }), {
        hide: C,
        show: P,
        toggle: x,
        hasUpdateHandler: b
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: Bk,
  useModelToggleEmits: Vk,
  useModelToggle: Uk
} = zk("visible"), jk = ot({
  ...mf,
  ...Bk,
  ...Ql,
  ...Nf,
  ...hf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Wk = [
  ...Vk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Hk = (e, t) => $n(e) ? e.includes(t) : e === t, oo = (e, t, n) => (r) => {
  Hk(l(e), t) && n(r);
}, rr = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Gk = le({
  name: "ElTooltipTrigger"
}), Kk = /* @__PURE__ */ le({
  ...Gk,
  props: Nf,
  setup(e, { expose: t }) {
    const n = e, r = Lt("tooltip"), { controlled: o, id: a, open: s, onOpen: c, onClose: i, onToggle: u } = Ge(Xl, void 0), f = q(null), m = () => {
      if (l(o) || n.disabled)
        return !0;
    }, h = or(n, "trigger"), y = rr(m, oo(h, "hover", c)), v = rr(m, oo(h, "hover", i)), b = rr(m, oo(h, "click", (C) => {
      C.button === 0 && u(C);
    })), I = rr(m, oo(h, "focus", c)), p = rr(m, oo(h, "focus", i)), L = rr(m, oo(h, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), P = rr(m, (C) => {
      const { code: S } = C;
      n.triggerKeys.includes(S) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: f
    }), (C, S) => (R(), fe(l(tw), {
      id: l(a),
      "virtual-ref": C.virtualRef,
      open: l(s),
      "virtual-triggering": C.virtualTriggering,
      class: K(l(r).e("trigger")),
      onBlur: l(p),
      onClick: l(b),
      onContextmenu: l(L),
      onFocus: l(I),
      onMouseenter: l(y),
      onMouseleave: l(v),
      onKeydown: l(P)
    }, {
      default: de(() => [
        Ae(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var qk = /* @__PURE__ */ ct(Kk, [["__file", "trigger.vue"]]);
const Yk = ot({
  to: {
    type: Se([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Zk = /* @__PURE__ */ le({
  __name: "teleport",
  props: Yk,
  setup(e) {
    return (t, n) => t.disabled ? Ae(t.$slots, "default", { key: 0 }) : (R(), fe(hp, {
      key: 1,
      to: t.to
    }, [
      Ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Xk = /* @__PURE__ */ ct(Zk, [["__file", "teleport.vue"]]);
const Qk = Tn(Xk), Pf = () => {
  const e = Sl(), t = cf(), n = N(() => `${e.value}-popper-container-${t.prefix}`), r = N(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Jk = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, eS = () => {
  const { id: e, selector: t } = Pf();
  return gp(() => {
    Ct && (document.body.querySelector(t.value) || Jk(e.value));
  }), {
    id: e,
    selector: t
  };
}, tS = le({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), nS = /* @__PURE__ */ le({
  ...tS,
  props: Ql,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Pf(), o = Lt("tooltip"), a = q();
    let s;
    const {
      controlled: c,
      id: i,
      open: u,
      trigger: f,
      onClose: m,
      onOpen: h,
      onShow: y,
      onHide: v,
      onBeforeShow: b,
      onBeforeHide: I
    } = Ge(Xl, void 0), p = N(() => n.transition || `${o.namespace.value}-fade-in-linear`), L = N(() => n.persistent);
    Wn(() => {
      s?.();
    });
    const P = N(() => l(L) ? !0 : l(u)), C = N(() => n.disabled ? !1 : l(u)), S = N(() => n.appendTo || r.value), x = N(() => {
      var W;
      return (W = n.style) != null ? W : {};
    }), O = q(!0), J = () => {
      v(), ee() && nr(document.body), O.value = !0;
    }, X = () => {
      if (l(c))
        return !0;
    }, Q = rr(X, () => {
      n.enterable && l(f) === "hover" && h();
    }), ue = rr(X, () => {
      l(f) === "hover" && m();
    }), se = () => {
      var W, he;
      (he = (W = a.value) == null ? void 0 : W.updatePopper) == null || he.call(W), b?.();
    }, be = () => {
      I?.();
    }, _e = () => {
      y(), s = c1(N(() => {
        var W;
        return (W = a.value) == null ? void 0 : W.popperContentRef;
      }), () => {
        if (l(c))
          return;
        l(f) !== "hover" && m();
      });
    }, H = () => {
      n.virtualTriggering || m();
    }, ee = (W) => {
      var he;
      const me = (he = a.value) == null ? void 0 : he.popperContentRef, Le = W?.relatedTarget || document.activeElement;
      return me?.contains(Le);
    };
    return Ie(() => l(u), (W) => {
      W ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ie(() => n.content, () => {
      var W, he;
      (he = (W = a.value) == null ? void 0 : W.updatePopper) == null || he.call(W);
    }), t({
      contentRef: a,
      isFocusInsideContent: ee
    }), (W, he) => (R(), fe(l(Qk), {
      disabled: !W.teleported,
      to: l(S)
    }, {
      default: de(() => [
        z(wo, {
          name: l(p),
          onAfterLeave: J,
          onBeforeEnter: se,
          onAfterEnter: _e,
          onBeforeLeave: be
        }, {
          default: de(() => [
            l(P) ? xt((R(), fe(l(Nk), co({
              key: 0,
              id: l(i),
              ref_key: "contentRef",
              ref: a
            }, W.$attrs, {
              "aria-label": W.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": W.boundariesPadding,
              "fallback-placements": W.fallbackPlacements,
              "gpu-acceleration": W.gpuAcceleration,
              offset: W.offset,
              placement: W.placement,
              "popper-options": W.popperOptions,
              strategy: W.strategy,
              effect: W.effect,
              enterable: W.enterable,
              pure: W.pure,
              "popper-class": W.popperClass,
              "popper-style": [W.popperStyle, l(x)],
              "reference-el": W.referenceEl,
              "trigger-target-el": W.triggerTargetEl,
              visible: l(C),
              "z-index": W.zIndex,
              onMouseenter: l(Q),
              onMouseleave: l(ue),
              onBlur: H,
              onClose: l(m)
            }), {
              default: de(() => [
                Ae(W.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [fr, l(C)]
            ]) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var rS = /* @__PURE__ */ ct(nS, [["__file", "content.vue"]]);
const oS = le({
  name: "ElTooltip"
}), aS = /* @__PURE__ */ le({
  ...oS,
  props: jk,
  emits: Wk,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    eS();
    const o = os(), a = q(), s = q(), c = () => {
      var p;
      const L = l(a);
      L && ((p = L.popperInstanceRef) == null || p.update());
    }, i = q(!1), u = q(), { show: f, hide: m, hasUpdateHandler: h } = Uk({
      indicator: i,
      toggleReason: u
    }), { onOpen: y, onClose: v } = Mk({
      showAfter: or(r, "showAfter"),
      hideAfter: or(r, "hideAfter"),
      autoClose: or(r, "autoClose"),
      open: f,
      close: m
    }), b = N(() => Ar(r.visible) && !h.value);
    Vn(Xl, {
      controlled: b,
      id: o,
      open: rl(i),
      trigger: or(r, "trigger"),
      onOpen: (p) => {
        y(p);
      },
      onClose: (p) => {
        v(p);
      },
      onToggle: (p) => {
        l(i) ? v(p) : y(p);
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
      updatePopper: c
    }), Ie(() => r.disabled, (p) => {
      p && i.value && (i.value = !1);
    });
    const I = (p) => {
      var L;
      return (L = s.value) == null ? void 0 : L.isFocusInsideContent(p);
    };
    return vp(() => i.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: I,
      updatePopper: c,
      onOpen: y,
      onClose: v,
      hide: m
    }), (p, L) => (R(), fe(l(Pk), {
      ref_key: "popperRef",
      ref: a,
      role: p.role
    }, {
      default: de(() => [
        z(qk, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: de(() => [
            p.$slots.default ? Ae(p.$slots, "default", { key: 0 }) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        z(rS, {
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
          default: de(() => [
            Ae(p.$slots, "content", {}, () => [
              p.rawContent ? (R(), j("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, ["innerHTML"])) : (R(), j("span", { key: 1 }, M(p.content), 1))
            ]),
            p.showArrow ? (R(), fe(l(q_), {
              key: 0,
              "arrow-offset": p.arrowOffset
            }, null, 8, ["arrow-offset"])) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var sS = /* @__PURE__ */ ct(aS, [["__file", "tooltip.vue"]]);
const lS = Tn(sS), iS = ot({
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
    type: Se([String, Object, Array])
  },
  offset: {
    type: Se(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), cS = le({
  name: "ElBadge"
}), uS = /* @__PURE__ */ le({
  ...cS,
  props: iS,
  setup(e, { expose: t }) {
    const n = e, r = Lt("badge"), o = N(() => n.isDot ? "" : je(n.value) && je(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = N(() => {
      var s, c, i, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: mo(-((c = (s = n.offset) == null ? void 0 : s[0]) != null ? c : 0)),
          marginTop: mo((u = (i = n.offset) == null ? void 0 : i[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, c) => (R(), j("div", {
      class: K(l(r).b())
    }, [
      Ae(s.$slots, "default"),
      z(wo, {
        name: `${l(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: de(() => [
          xt(g("sup", {
            class: K([
              l(r).e("content"),
              l(r).em("content", s.type),
              l(r).is("fixed", !!s.$slots.default),
              l(r).is("dot", s.isDot),
              l(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: $t(l(a))
          }, [
            Ae(s.$slots, "content", { value: l(o) }, () => [
              tn(M(l(o)), 1)
            ])
          ], 6), [
            [fr, !s.hidden && (l(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var dS = /* @__PURE__ */ ct(uS, [["__file", "badge.vue"]]);
const fS = Tn(dS), pS = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), tl = ot({
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
    values: Pl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), mS = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, hS = le({
  name: "ElTag"
}), gS = /* @__PURE__ */ le({
  ...hS,
  props: tl,
  emits: mS,
  setup(e, { emit: t }) {
    const n = e, r = sa(), o = Lt("tag"), a = N(() => {
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
    }, c = (u) => {
      t("click", u);
    }, i = (u) => {
      var f, m, h;
      (h = (m = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : m.component) != null && h.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (R(), j("span", {
      key: 0,
      class: K(l(a)),
      style: $t({ backgroundColor: u.color }),
      onClick: c
    }, [
      g("span", {
        class: K(l(o).e("content"))
      }, [
        Ae(u.$slots, "default")
      ], 2),
      u.closable ? (R(), fe(l(At), {
        key: 0,
        class: K(l(o).e("close")),
        onClick: it(s, ["stop"])
      }, {
        default: de(() => [
          z(l(za))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ne("v-if", !0)
    ], 6)) : (R(), fe(wo, {
      key: 1,
      name: `${l(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: de(() => [
        g("span", {
          class: K(l(a)),
          style: $t({ backgroundColor: u.color }),
          onClick: c
        }, [
          g("span", {
            class: K(l(o).e("content"))
          }, [
            Ae(u.$slots, "default")
          ], 2),
          u.closable ? (R(), fe(l(At), {
            key: 0,
            class: K(l(o).e("close")),
            onClick: it(s, ["stop"])
          }, {
            default: de(() => [
              z(l(za))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var vS = /* @__PURE__ */ ct(gS, [["__file", "tag.vue"]]);
const bS = Tn(vS), wr = /* @__PURE__ */ new Map();
if (Ct) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of wr.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Tu(e, t) {
  let n = [];
  return $n(t.arg) ? n = t.arg : wn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, c = o?.target, i = !t || !t.instance, u = !s || !c, f = e.contains(s) || e.contains(c), m = e === s, h = n.length && n.some((v) => v?.contains(s)) || n.length && n.includes(c), y = a && (a.contains(s) || a.contains(c));
    i || u || f || m || h || y || t.value(r, o);
  };
}
const yS = {
  beforeMount(e, t) {
    wr.has(e) || wr.set(e, []), wr.get(e).push({
      documentHandler: Tu(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    wr.has(e) || wr.set(e, []);
    const n = wr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Tu(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    wr.delete(e);
  }
}, _S = ot({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Se(Object)
  },
  size: rs,
  button: {
    type: Se(Object)
  },
  experimentalFeatures: {
    type: Se(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Se(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Xd
}), hn = {};
le({
  name: "ElConfigProvider",
  props: _S,
  setup(e, { slots: t }) {
    Ie(() => e.message, (r) => {
      Object.assign(hn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ef(e);
    return () => Ae(t, "default", { config: n?.value });
  }
});
const wS = 100, kS = 600, Eu = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = wS, delay: o = kS } = dt(n) ? {} : n;
    let a, s;
    const c = () => dt(n) ? n() : n.handler(), i = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (i(), c(), document.addEventListener("mouseup", () => i(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          c();
        }, r);
      }, o));
    });
  }
}, SS = ot({
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
    validator: (e) => e === null || je(e) || ["min", "max"].includes(e),
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
}), TS = {
  [pr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [dr]: (e) => je(e) || ur(e),
  [Pt]: (e) => je(e) || ur(e)
}, ES = le({
  name: "ElInputNumber"
}), AS = /* @__PURE__ */ le({
  ...ES,
  props: SS,
  emits: TS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Nl(), a = Lt("input-number"), s = q(), c = Br({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: i } = as(), u = N(() => je(r.modelValue) && r.modelValue <= r.min), f = N(() => je(r.modelValue) && r.modelValue >= r.max), m = N(() => {
      const H = p(r.step);
      return Mn(r.precision) ? Math.max(p(r.modelValue), H) : (H > r.precision, r.precision);
    }), h = N(() => r.controls && r.controlsPosition === "right"), y = sa(), v = Fl(), b = N(() => {
      if (c.userInput !== null)
        return c.userInput;
      let H = c.currentValue;
      if (ur(H))
        return "";
      if (je(H)) {
        if (Number.isNaN(H))
          return "";
        Mn(r.precision) || (H = H.toFixed(r.precision));
      }
      return H;
    }), I = (H, ee) => {
      if (Mn(ee) && (ee = m.value), ee === 0)
        return Math.round(H);
      let W = String(H);
      const he = W.indexOf(".");
      if (he === -1 || !W.replace(".", "").split("")[he + ee])
        return H;
      const De = W.length;
      return W.charAt(De - 1) === "5" && (W = `${W.slice(0, Math.max(0, De - 1))}6`), Number.parseFloat(Number(W).toFixed(ee));
    }, p = (H) => {
      if (ur(H))
        return 0;
      const ee = H.toString(), W = ee.indexOf(".");
      let he = 0;
      return W !== -1 && (he = ee.length - W - 1), he;
    }, L = (H, ee = 1) => je(H) ? I(H + r.step * ee) : c.currentValue, P = () => {
      if (r.readonly || v.value || f.value)
        return;
      const H = Number(b.value) || 0, ee = L(H);
      x(ee), n(dr, c.currentValue), be();
    }, C = () => {
      if (r.readonly || v.value || u.value)
        return;
      const H = Number(b.value) || 0, ee = L(H, -1);
      x(ee), n(dr, c.currentValue), be();
    }, S = (H, ee) => {
      const { max: W, min: he, step: me, precision: Le, stepStrictly: De, valueOnClear: Fe } = r;
      W < he && Rl("InputNumber", "min should not be greater than max.");
      let xe = Number(H);
      if (ur(H) || Number.isNaN(xe))
        return null;
      if (H === "") {
        if (Fe === null)
          return null;
        xe = Gt(Fe) ? { min: he, max: W }[Fe] : Fe;
      }
      return De && (xe = I(Math.round(xe / me) * me, Le), xe !== H && ee && n(Pt, xe)), Mn(Le) || (xe = I(xe, Le)), (xe > W || xe < he) && (xe = xe > W ? W : he, ee && n(Pt, xe)), xe;
    }, x = (H, ee = !0) => {
      var W;
      const he = c.currentValue, me = S(H);
      if (!ee) {
        n(Pt, me);
        return;
      }
      he === me && H || (c.userInput = null, n(Pt, me), he !== me && n(pr, me, he), r.validateEvent && ((W = i?.validate) == null || W.call(i, "change").catch((Le) => void 0)), c.currentValue = me);
    }, O = (H) => {
      c.userInput = H;
      const ee = H === "" ? null : Number(H);
      n(dr, ee), x(ee, !1);
    }, J = (H) => {
      const ee = H !== "" ? Number(H) : "";
      (je(ee) && !Number.isNaN(ee) || H === "") && x(ee), be(), c.userInput = null;
    }, X = () => {
      var H, ee;
      (ee = (H = s.value) == null ? void 0 : H.focus) == null || ee.call(H);
    }, Q = () => {
      var H, ee;
      (ee = (H = s.value) == null ? void 0 : H.blur) == null || ee.call(H);
    }, ue = (H) => {
      n("focus", H);
    }, se = (H) => {
      var ee, W;
      c.userInput = null, sf() && c.currentValue === null && ((ee = s.value) != null && ee.input) && (s.value.input.value = ""), n("blur", H), r.validateEvent && ((W = i?.validate) == null || W.call(i, "blur").catch((he) => void 0));
    }, be = () => {
      c.currentValue !== r.modelValue && (c.currentValue = r.modelValue);
    }, _e = (H) => {
      document.activeElement === H.target && H.preventDefault();
    };
    return Ie(() => r.modelValue, (H, ee) => {
      const W = S(H, !0);
      c.userInput === null && W !== ee && (c.currentValue = W);
    }, { immediate: !0 }), Tt(() => {
      var H;
      const { min: ee, max: W, modelValue: he } = r, me = (H = s.value) == null ? void 0 : H.input;
      if (me.setAttribute("role", "spinbutton"), Number.isFinite(W) ? me.setAttribute("aria-valuemax", String(W)) : me.removeAttribute("aria-valuemax"), Number.isFinite(ee) ? me.setAttribute("aria-valuemin", String(ee)) : me.removeAttribute("aria-valuemin"), me.setAttribute("aria-valuenow", c.currentValue || c.currentValue === 0 ? String(c.currentValue) : ""), me.setAttribute("aria-disabled", String(v.value)), !je(he) && he != null) {
        let Le = Number(he);
        Number.isNaN(Le) && (Le = null), n(Pt, Le);
      }
      me.addEventListener("wheel", _e, { passive: !1 });
    }), Ru(() => {
      var H, ee;
      const W = (H = s.value) == null ? void 0 : H.input;
      W?.setAttribute("aria-valuenow", `${(ee = c.currentValue) != null ? ee : ""}`);
    }), t({
      focus: X,
      blur: Q
    }), (H, ee) => (R(), j("div", {
      class: K([
        l(a).b(),
        l(a).m(l(y)),
        l(a).is("disabled", l(v)),
        l(a).is("without-controls", !H.controls),
        l(a).is("controls-right", l(h))
      ]),
      onDragstart: it(() => {
      }, ["prevent"])
    }, [
      H.controls ? xt((R(), j("span", {
        key: 0,
        role: "button",
        "aria-label": l(o)("el.inputNumber.decrease"),
        class: K([l(a).e("decrease"), l(a).is("disabled", l(u))]),
        onKeydown: bn(C, ["enter"])
      }, [
        Ae(H.$slots, "decrease-icon", {}, () => [
          z(l(At), null, {
            default: de(() => [
              l(h) ? (R(), fe(l(rf), { key: 0 })) : (R(), fe(l(J1), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(Eu), C]
      ]) : ne("v-if", !0),
      H.controls ? xt((R(), j("span", {
        key: 1,
        role: "button",
        "aria-label": l(o)("el.inputNumber.increase"),
        class: K([l(a).e("increase"), l(a).is("disabled", l(f))]),
        onKeydown: bn(P, ["enter"])
      }, [
        Ae(H.$slots, "increase-icon", {}, () => [
          z(l(At), null, {
            default: de(() => [
              l(h) ? (R(), fe(l(B1), { key: 0 })) : (R(), fe(l(t_), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(Eu), P]
      ]) : ne("v-if", !0),
      z(l(A_), {
        id: H.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: H.step,
        "model-value": l(b),
        placeholder: H.placeholder,
        readonly: H.readonly,
        disabled: l(v),
        size: l(y),
        max: H.max,
        min: H.min,
        name: H.name,
        "aria-label": H.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          bn(it(P, ["prevent"]), ["up"]),
          bn(it(C, ["prevent"]), ["down"])
        ],
        onBlur: se,
        onFocus: ue,
        onInput: O,
        onChange: J
      }, bp({
        _: 2
      }, [
        H.$slots.prefix ? {
          name: "prefix",
          fn: de(() => [
            Ae(H.$slots, "prefix")
          ])
        } : void 0,
        H.$slots.suffix ? {
          name: "suffix",
          fn: de(() => [
            Ae(H.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var CS = /* @__PURE__ */ ct(AS, [["__file", "input-number.vue"]]);
const IS = Tn(CS);
function LS() {
  const e = Er(), t = q(0), n = 11, r = N(() => ({
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
const $f = Symbol("ElSelectGroup"), cs = Symbol("ElSelect");
function OS(e, t) {
  const n = Ge(cs), r = Ge($f, { disabled: !1 }), o = N(() => f(Sr(n.props.modelValue), e.value)), a = N(() => {
    var y;
    if (n.props.multiple) {
      const v = Sr((y = n.props.modelValue) != null ? y : []);
      return !o.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = N(() => e.label || (an(e.value) ? "" : e.value)), c = N(() => e.value || e.label || ""), i = N(() => e.disabled || t.groupDisabled || a.value), u = Qt(), f = (y = [], v) => {
    if (an(e.value)) {
      const b = n.props.valueKey;
      return y && y.some((I) => yp(Tr(I, b)) === Tr(v, b));
    } else
      return y && y.includes(v);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, h = (y) => {
    const v = new RegExp(pS(y), "i");
    t.visible = v.test(s.value) || e.created;
  };
  return Ie(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ie(() => e.value, (y, v) => {
    const { remote: b, valueKey: I } = n.props;
    if ((b ? y !== v : !jo(y, v)) && (n.onOptionDestroy(v, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (I && an(y) && an(v) && y[I] === v[I])
        return;
      n.setSelected();
    }
  }), Ie(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: c,
    itemSelected: o,
    isDisabled: i,
    hoverItem: m,
    updateOption: h
  };
}
const xS = le({
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
    const t = Lt("select"), n = os(), r = N(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(c)),
      t.is("selected", l(s)),
      t.is("hovering", l(h))
    ]), o = Br({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: c,
      select: i,
      hoverItem: u,
      updateOption: f
    } = OS(e, o), { visible: m, hover: h } = ol(o), y = Qt().proxy;
    i.onOptionCreate(y), Wn(() => {
      const b = y.value, { selected: I } = i.states, p = I.some((L) => L.value === y.value);
      wt(() => {
        i.states.cachedOptions.get(b) === y && !p && i.states.cachedOptions.delete(b);
      }), i.onOptionDestroy(b, y);
    });
    function v() {
      c.value || i.handleOptionSelect(y);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: a,
      itemSelected: s,
      isDisabled: c,
      select: i,
      hoverItem: u,
      updateOption: f,
      visible: m,
      hover: h,
      selectOptionClick: v,
      states: o
    };
  }
});
function RS(e, t, n, r, o, a) {
  return xt((R(), j("li", {
    id: e.id,
    class: K(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: it(e.selectOptionClick, ["stop"])
  }, [
    Ae(e.$slots, "default", {}, () => [
      g("span", null, M(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [fr, e.visible]
  ]);
}
var Jl = /* @__PURE__ */ ct(xS, [["render", RS], ["__file", "option.vue"]]);
const NS = le({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ge(cs), t = Lt("select"), n = N(() => e.props.popperClass), r = N(() => e.props.multiple), o = N(() => e.props.fitInputWidth), a = q("");
    function s() {
      var c;
      a.value = `${(c = e.selectRef) == null ? void 0 : c.offsetWidth}px`;
    }
    return Tt(() => {
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
function PS(e, t, n, r, o, a) {
  return R(), j("div", {
    class: K([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: $t({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), j("div", {
      key: 0,
      class: K(e.ns.be("dropdown", "header"))
    }, [
      Ae(e.$slots, "header")
    ], 2)) : ne("v-if", !0),
    Ae(e.$slots, "default"),
    e.$slots.footer ? (R(), j("div", {
      key: 1,
      class: K(e.ns.be("dropdown", "footer"))
    }, [
      Ae(e.$slots, "footer")
    ], 2)) : ne("v-if", !0)
  ], 6);
}
var $S = /* @__PURE__ */ ct(NS, [["render", PS], ["__file", "select-dropdown.vue"]]);
const MS = (e, t) => {
  const { t: n } = Nl(), r = os(), o = Lt("select"), a = Lt("input"), s = Br({
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
  }), c = q(null), i = q(null), u = q(null), f = q(null), m = q(null), h = q(null), y = q(null), v = q(null), b = q(null), I = q(null), p = q(null), {
    isComposing: L,
    handleCompositionStart: P,
    handleCompositionUpdate: C,
    handleCompositionEnd: S
  } = ff({
    afterComposition: (D) => at(D)
  }), { wrapperRef: x, isFocused: O, handleBlur: J } = df(m, {
    beforeFocus() {
      return ee.value;
    },
    afterFocus() {
      e.automaticDropdown && !X.value && (X.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(D) {
      var re, ke;
      return ((re = u.value) == null ? void 0 : re.isFocusInsideContent(D)) || ((ke = f.value) == null ? void 0 : ke.isFocusInsideContent(D));
    },
    afterBlur() {
      X.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), X = q(!1), Q = q(), { form: ue, formItem: se } = as(), { inputId: be } = Dl(e, {
    formItemContext: se
  }), { valueOnClear: _e, isEmptyValue: H } = x1(e), ee = N(() => e.disabled || ue?.disabled), W = N(() => $n(e.modelValue) ? e.modelValue.length > 0 : !H(e.modelValue)), he = N(() => {
    var D;
    return (D = ue?.statusIcon) != null ? D : !1;
  }), me = N(() => e.clearable && !ee.value && s.inputHovering && W.value), Le = N(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = N(() => o.is("reverse", Le.value && X.value)), Fe = N(() => se?.validateState || ""), xe = N(() => af[Fe.value]), ye = N(() => e.remote ? 300 : 0), Xe = N(() => e.remote && !s.inputValue && s.options.size === 0), Ce = N(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ze.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ze = N(() => ge.value.filter((D) => D.visible).length), ge = N(() => {
    const D = Array.from(s.options.values()), re = [];
    return s.optionValues.forEach((ke) => {
      const lt = D.findIndex((Et) => Et.value === ke);
      lt > -1 && re.push(D[lt]);
    }), re.length >= D.length ? re : D;
  }), Je = N(() => Array.from(s.cachedOptions.values())), vt = N(() => {
    const D = ge.value.filter((re) => !re.created).some((re) => re.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !D;
  }), Qe = () => {
    e.filterable && dt(e.filterMethod) || e.filterable && e.remote && dt(e.remoteMethod) || ge.value.forEach((D) => {
      var re;
      (re = D.updateOption) == null || re.call(D, s.inputValue);
    });
  }, Te = sa(), ft = N(() => ["small"].includes(Te.value) ? "small" : "default"), pt = N({
    get() {
      return X.value && !Xe.value;
    },
    set(D) {
      X.value = D;
    }
  }), te = N(() => {
    if (e.multiple && !Mn(e.modelValue))
      return Sr(e.modelValue).length === 0 && !s.inputValue;
    const D = $n(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Mn(D) ? !s.inputValue : !0;
  }), Z = N(() => {
    var D;
    const re = (D = e.placeholder) != null ? D : n("el.select.placeholder");
    return e.multiple || !W.value ? re : s.selectedLabel;
  }), We = N(() => Xs ? null : "mouseenter");
  Ie(() => e.modelValue, (D, re) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", T("")), V(), !jo(D, re) && e.validateEvent && se?.validate("change").catch((ke) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ie(() => X.value, (D) => {
    D ? T(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", D);
  }), Ie(() => s.options.entries(), () => {
    Ct && (V(), e.defaultFirstOption && (e.filterable || e.remote) && Ze.value && E());
  }, {
    flush: "post"
  }), Ie([() => s.hoveringIndex, ge], ([D]) => {
    je(D) && D > -1 ? Q.value = ge.value[D] || {} : Q.value = {}, ge.value.forEach((re) => {
      re.hover = Q.value === re;
    });
  }), xu(() => {
    s.isBeforeHide || Qe();
  });
  const T = (D) => {
    s.previousQuery === D || L.value || (s.previousQuery = D, e.filterable && dt(e.filterMethod) ? e.filterMethod(D) : e.filterable && e.remote && dt(e.remoteMethod) && e.remoteMethod(D), e.defaultFirstOption && (e.filterable || e.remote) && Ze.value ? wt(E) : wt(we));
  }, E = () => {
    const D = ge.value.filter((Et) => Et.visible && !Et.disabled && !Et.states.groupDisabled), re = D.find((Et) => Et.created), ke = D[0], lt = ge.value.map((Et) => Et.value);
    s.hoveringIndex = En(lt, re || ke);
  }, V = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const re = $n(e.modelValue) ? e.modelValue[0] : e.modelValue, ke = F(re);
      s.selectedLabel = ke.currentLabel, s.selected = [ke];
      return;
    }
    const D = [];
    Mn(e.modelValue) || Sr(e.modelValue).forEach((re) => {
      D.push(F(re));
    }), s.selected = D;
  }, F = (D) => {
    let re;
    const ke = sv(D);
    for (let bt = s.cachedOptions.size - 1; bt >= 0; bt--) {
      const zt = Je.value[bt];
      if (ke ? Tr(zt.value, e.valueKey) === Tr(D, e.valueKey) : zt.value === D) {
        re = {
          value: D,
          currentLabel: zt.currentLabel,
          get isDisabled() {
            return zt.isDisabled;
          }
        };
        break;
      }
    }
    if (re)
      return re;
    const lt = ke ? D.label : D ?? "";
    return {
      value: D,
      currentLabel: lt
    };
  }, we = () => {
    s.hoveringIndex = ge.value.findIndex((D) => s.selected.some((re) => Ke(re) === Ke(D)));
  }, pe = () => {
    s.selectionWidth = i.value.getBoundingClientRect().width;
  }, A = () => {
    s.collapseItemWidth = I.value.getBoundingClientRect().width;
  }, U = () => {
    var D, re;
    (re = (D = u.value) == null ? void 0 : D.updatePopper) == null || re.call(D);
  }, Ee = () => {
    var D, re;
    (re = (D = f.value) == null ? void 0 : D.updatePopper) == null || re.call(D);
  }, Pe = () => {
    s.inputValue.length > 0 && !X.value && (X.value = !0), T(s.inputValue);
  }, at = (D) => {
    if (s.inputValue = D.target.value, e.remote)
      st();
    else
      return Pe();
  }, st = Wy(() => {
    Pe();
  }, ye.value), et = (D) => {
    jo(e.modelValue, D) || t(pr, D);
  }, Gn = (D) => Hy(D, (re) => {
    const ke = s.cachedOptions.get(re);
    return ke && !ke.disabled && !ke.states.groupDisabled;
  }), Kn = (D) => {
    if (e.multiple && D.code !== zn.delete && D.target.value.length <= 0) {
      const re = Sr(e.modelValue).slice(), ke = Gn(re);
      if (ke < 0)
        return;
      const lt = re[ke];
      re.splice(ke, 1), t(Pt, re), et(re), t("remove-tag", lt);
    }
  }, Yr = (D, re) => {
    const ke = s.selected.indexOf(re);
    if (ke > -1 && !ee.value) {
      const lt = Sr(e.modelValue).slice();
      lt.splice(ke, 1), t(Pt, lt), et(lt), t("remove-tag", re.value);
    }
    D.stopPropagation(), vr();
  }, qn = (D) => {
    D.stopPropagation();
    const re = e.multiple ? [] : _e.value;
    if (e.multiple)
      for (const ke of s.selected)
        ke.isDisabled && re.push(ke.value);
    t(Pt, re), et(re), s.hoveringIndex = -1, X.value = !1, t("clear"), vr();
  }, ln = (D) => {
    var re;
    if (e.multiple) {
      const ke = Sr((re = e.modelValue) != null ? re : []).slice(), lt = En(ke, D);
      lt > -1 ? ke.splice(lt, 1) : (e.multipleLimit <= 0 || ke.length < e.multipleLimit) && ke.push(D.value), t(Pt, ke), et(ke), D.created && T(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Pt, D.value), et(D.value), X.value = !1;
    vr(), !X.value && wt(() => {
      pn(D);
    });
  }, En = (D = [], re) => Mn(re) ? -1 : an(re.value) ? D.findIndex((ke) => jo(Tr(ke, e.valueKey), Ke(re))) : D.indexOf(re.value), pn = (D) => {
    var re, ke, lt, Et, bt;
    const zt = $n(D) ? D[0] : D;
    let Bt = null;
    if (zt?.value) {
      const mn = ge.value.filter((Xr) => Xr.value === zt.value);
      mn.length > 0 && (Bt = mn[0].$el);
    }
    if (u.value && Bt) {
      const mn = (Et = (lt = (ke = (re = u.value) == null ? void 0 : re.popperRef) == null ? void 0 : ke.contentRef) == null ? void 0 : lt.querySelector) == null ? void 0 : Et.call(lt, `.${o.be("dropdown", "wrap")}`);
      mn && N1(mn, Bt);
    }
    (bt = p.value) == null || bt.handleScroll();
  }, Kt = (D) => {
    s.options.set(D.value, D), s.cachedOptions.set(D.value, D);
  }, An = (D, re) => {
    s.options.get(D) === re && s.options.delete(D);
  }, xr = N(() => {
    var D, re;
    return (re = (D = u.value) == null ? void 0 : D.popperRef) == null ? void 0 : re.contentRef;
  }), Cn = () => {
    s.isBeforeHide = !1, wt(() => {
      var D;
      (D = p.value) == null || D.update(), pn(s.selected);
    });
  }, vr = () => {
    var D;
    (D = m.value) == null || D.focus();
  }, Yn = () => {
    var D;
    if (X.value) {
      X.value = !1, wt(() => {
        var re;
        return (re = m.value) == null ? void 0 : re.blur();
      });
      return;
    }
    (D = m.value) == null || D.blur();
  }, Rr = (D) => {
    qn(D);
  }, So = (D) => {
    if (X.value = !1, O.value) {
      const re = new FocusEvent("focus", D);
      wt(() => J(re));
    }
  }, Zn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : X.value = !1;
  }, Zr = () => {
    ee.value || (Xs && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : X.value = !X.value);
  }, To = () => {
    if (!X.value)
      Zr();
    else {
      const D = ge.value[s.hoveringIndex];
      D && !D.isDisabled && ln(D);
    }
  }, Ke = (D) => an(D.value) ? Tr(D.value, e.valueKey) : D.value, In = N(() => ge.value.filter((D) => D.visible).every((D) => D.isDisabled)), Eo = N(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Nr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Xn = (D) => {
    if (!X.value) {
      X.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ze.value === 0 || L.value) && !In.value) {
      D === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : D === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const re = ge.value[s.hoveringIndex];
      (re.isDisabled || !re.visible) && Xn(D), wt(() => pn(Q.value));
    }
  }, Pr = () => {
    if (!i.value)
      return 0;
    const D = window.getComputedStyle(i.value);
    return Number.parseFloat(D.gap || "6px");
  }, br = N(() => {
    const D = Pr();
    return { maxWidth: `${I.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - D : s.selectionWidth}px` };
  }), Ao = N(() => ({ maxWidth: `${s.selectionWidth}px` })), Ft = (D) => {
    t("popup-scroll", D);
  };
  return Pn(i, pe), Pn(v, U), Pn(x, U), Pn(b, Ee), Pn(I, A), Tt(() => {
    V();
  }), {
    inputId: be,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: X,
    optionsArray: ge,
    hoverOption: Q,
    selectSize: Te,
    filteredOptionsCount: Ze,
    updateTooltip: U,
    updateTagTooltip: Ee,
    debouncedOnInputChange: st,
    onInput: at,
    deletePrevTag: Kn,
    deleteTag: Yr,
    deleteSelected: qn,
    handleOptionSelect: ln,
    scrollToOption: pn,
    hasModelValue: W,
    shouldShowPlaceholder: te,
    currentPlaceholder: Z,
    mouseEnterEventName: We,
    needStatusIcon: he,
    showClose: me,
    iconComponent: Le,
    iconReverse: De,
    validateState: Fe,
    validateIcon: xe,
    showNewOption: vt,
    updateOptions: Qe,
    collapseTagSize: ft,
    setSelected: V,
    selectDisabled: ee,
    emptyText: Ce,
    handleCompositionStart: P,
    handleCompositionUpdate: C,
    handleCompositionEnd: S,
    onOptionCreate: Kt,
    onOptionDestroy: An,
    handleMenuEnter: Cn,
    focus: vr,
    blur: Yn,
    handleClearClick: Rr,
    handleClickOutside: So,
    handleEsc: Zn,
    toggleMenu: Zr,
    selectOption: To,
    getValueKey: Ke,
    navigateOptions: Xn,
    dropdownMenuVisible: pt,
    showTagList: Eo,
    collapseTagList: Nr,
    popupScroll: Ft,
    tagStyle: br,
    collapseTagStyle: Ao,
    popperRef: xr,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: h,
    suffixRef: y,
    selectRef: c,
    wrapperRef: x,
    selectionRef: i,
    scrollbarRef: p,
    menuRef: v,
    tagMenuRef: b,
    collapseItemRef: I
  };
};
var DS = le({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ge(cs);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), c = [];
      function i(u) {
        $n(u) && u.forEach((f) => {
          var m, h, y, v;
          const b = (m = f?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? i(!Gt(f.children) && !$n(f.children) && dt((h = f.children) == null ? void 0 : h.default) ? (y = f.children) == null ? void 0 : y.default() : f.children) : b === "ElOption" ? c.push((v = f.props) == null ? void 0 : v.value) : $n(f.children) && i(f.children);
        });
      }
      return s.length && i((a = s[0]) == null ? void 0 : a.children), jo(c, r) || (r = c, n && (n.states.optionValues = c)), s;
    };
  }
});
const FS = ot({
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
    type: Se(String),
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
    type: Se(Object),
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
  teleported: Ql.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Dn,
    default: $l
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Dn,
    default: rf
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
    type: Se(String),
    values: ls,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: Se(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Xd,
  ...qr(["ariaLabel"])
}), Au = "ElSelect", zS = le({
  name: Au,
  componentName: Au,
  components: {
    ElSelectMenu: $S,
    ElOption: Jl,
    ElOptions: DS,
    ElTag: bS,
    ElScrollbar: V_,
    ElTooltip: lS,
    ElIcon: At
  },
  directives: { ClickOutside: yS },
  props: FS,
  emits: [
    Pt,
    pr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = N(() => {
      const { modelValue: i, multiple: u } = e, f = u ? [] : void 0;
      return $n(i) ? u ? i : f : u ? f : i;
    }), r = Br({
      ...ol(e),
      modelValue: n
    }), o = MS(r, t), { calculatorRef: a, inputStyle: s } = LS();
    Vn(cs, Br({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const c = N(() => e.multiple ? o.states.selected.map((i) => i.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: c,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function BS(e, t, n, r, o, a) {
  const s = Dr("el-tag"), c = Dr("el-tooltip"), i = Dr("el-icon"), u = Dr("el-option"), f = Dr("el-options"), m = Dr("el-scrollbar"), h = Dr("el-select-menu"), y = _p("click-outside");
  return xt((R(), j("div", {
    ref: "selectRef",
    class: K([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [wp(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
  }, [
    z(c, {
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
      default: de(() => {
        var v;
        return [
          g("div", {
            ref: "wrapperRef",
            class: K([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: it(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), j("div", {
              key: 0,
              ref: "prefixRef",
              class: K(e.nsSelect.e("prefix"))
            }, [
              Ae(e.$slots, "prefix")
            ], 2)) : ne("v-if", !0),
            g("div", {
              ref: "selectionRef",
              class: K([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Ae(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), j(gt, null, Nn(e.showTagList, (b) => (R(), j("div", {
                  key: e.getValueKey(b),
                  class: K(e.nsSelect.e("selected-item"))
                }, [
                  z(s, {
                    closable: !e.selectDisabled && !b.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: $t(e.tagStyle),
                    onClose: (I) => e.deleteTag(I, b)
                  }, {
                    default: de(() => [
                      g("span", {
                        class: K(e.nsSelect.e("tags-text"))
                      }, [
                        Ae(e.$slots, "label", {
                          label: b.currentLabel,
                          value: b.value
                        }, () => [
                          tn(M(b.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (R(), fe(c, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: de(() => [
                    g("div", {
                      ref: "collapseItemRef",
                      class: K(e.nsSelect.e("selected-item"))
                    }, [
                      z(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: $t(e.collapseTagStyle)
                      }, {
                        default: de(() => [
                          g("span", {
                            class: K(e.nsSelect.e("tags-text"))
                          }, " + " + M(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: de(() => [
                    g("div", {
                      ref: "tagMenuRef",
                      class: K(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), j(gt, null, Nn(e.collapseTagList, (b) => (R(), j("div", {
                        key: e.getValueKey(b),
                        class: K(e.nsSelect.e("selected-item"))
                      }, [
                        z(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !b.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (I) => e.deleteTag(I, b)
                        }, {
                          default: de(() => [
                            g("span", {
                              class: K(e.nsSelect.e("tags-text"))
                            }, [
                              Ae(e.$slots, "label", {
                                label: b.currentLabel,
                                value: b.value
                              }, () => [
                                tn(M(b.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : ne("v-if", !0)
              ]) : ne("v-if", !0),
              g("div", {
                class: K([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                xt(g("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (b) => e.states.inputValue = b,
                  type: "text",
                  name: e.name,
                  class: K([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: $t(e.inputStyle),
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
                    bn(it((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    bn(it((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    bn(it(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    bn(it(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    bn(it(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: it(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Go, e.states.inputValue]
                ]),
                e.filterable ? (R(), j("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: K(e.nsSelect.e("input-calculator")),
                  textContent: M(e.states.inputValue)
                }, null, 10, ["textContent"])) : ne("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), j("div", {
                key: 1,
                class: K([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? Ae(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  g("span", null, M(e.currentPlaceholder), 1)
                ]) : (R(), j("span", { key: 1 }, M(e.currentPlaceholder), 1))
              ], 2)) : ne("v-if", !0)
            ], 2),
            g("div", {
              ref: "suffixRef",
              class: K(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (R(), fe(i, {
                key: 0,
                class: K([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: de(() => [
                  (R(), fe(Zt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0),
              e.showClose && e.clearIcon ? (R(), fe(i, {
                key: 1,
                class: K([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: de(() => [
                  (R(), fe(Zt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ne("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (R(), fe(i, {
                key: 2,
                class: K([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: de(() => [
                  (R(), fe(Zt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: de(() => [
        z(h, { ref: "menuRef" }, {
          default: de(() => [
            e.$slots.header ? (R(), j("div", {
              key: 0,
              class: K(e.nsSelect.be("dropdown", "header")),
              onClick: it(() => {
              }, ["stop"])
            }, [
              Ae(e.$slots, "header")
            ], 10, ["onClick"])) : ne("v-if", !0),
            xt(z(m, {
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
              default: de(() => [
                e.showNewOption ? (R(), fe(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ne("v-if", !0),
                z(f, null, {
                  default: de(() => [
                    Ae(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [fr, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), j("div", {
              key: 1,
              class: K(e.nsSelect.be("dropdown", "loading"))
            }, [
              Ae(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), j("div", {
              key: 2,
              class: K(e.nsSelect.be("dropdown", "empty"))
            }, [
              Ae(e.$slots, "empty", {}, () => [
                g("span", null, M(e.emptyText), 1)
              ])
            ], 2)) : ne("v-if", !0),
            e.$slots.footer ? (R(), j("div", {
              key: 3,
              class: K(e.nsSelect.be("dropdown", "footer")),
              onClick: it(() => {
              }, ["stop"])
            }, [
              Ae(e.$slots, "footer")
            ], 10, ["onClick"])) : ne("v-if", !0)
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
var VS = /* @__PURE__ */ ct(zS, [["render", BS], ["__file", "select.vue"]]);
const US = le({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Lt("select"), n = q(null), r = Qt(), o = q([]);
    Vn($f, Br({
      ...ol(e)
    }));
    const a = N(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, m;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, c = (u) => {
      const f = Sr(u), m = [];
      return f.forEach((h) => {
        var y, v;
        s(h) ? m.push(h.component.proxy) : (y = h.children) != null && y.length ? m.push(...c(h.children)) : (v = h.component) != null && v.subTree && m.push(...c(h.component.subTree));
      }), m;
    }, i = () => {
      o.value = c(r.subTree);
    };
    return Tt(() => {
      i();
    }), g1(n, i, {
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
function jS(e, t, n, r, o, a) {
  return xt((R(), j("ul", {
    ref: "groupRef",
    class: K(e.ns.be("group", "wrap"))
  }, [
    g("li", {
      class: K(e.ns.be("group", "title"))
    }, M(e.label), 3),
    g("li", null, [
      g("ul", {
        class: K(e.ns.b("group"))
      }, [
        Ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [fr, e.visible]
  ]);
}
var Mf = /* @__PURE__ */ ct(US, [["render", jS], ["__file", "option-group.vue"]]);
const WS = Tn(VS, {
  Option: Jl,
  OptionGroup: Mf
}), HS = nf(Jl);
nf(Mf);
const GS = (e) => ["", ...Pl].includes(e), KS = ot({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: GS
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
    type: Se(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...qr(["ariaLabel"])
}), qS = {
  [Pt]: (e) => Ar(e) || Gt(e) || je(e),
  [pr]: (e) => Ar(e) || Gt(e) || je(e),
  [dr]: (e) => Ar(e) || Gt(e) || je(e)
}, Df = "ElSwitch", YS = le({
  name: Df
}), ZS = /* @__PURE__ */ le({
  ...YS,
  props: KS,
  emits: qS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = as(), a = sa(), s = Lt("switch"), { inputId: c } = Dl(r, {
      formItemContext: o
    }), i = Fl(N(() => r.loading)), u = q(r.modelValue !== !1), f = q(), m = q(), h = N(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", i.value),
      s.is("checked", p.value)
    ]), y = N(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !p.value)
    ]), v = N(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", p.value)
    ]), b = N(() => ({
      width: mo(r.width)
    }));
    Ie(() => r.modelValue, () => {
      u.value = !0;
    });
    const I = N(() => u.value ? r.modelValue : !1), p = N(() => I.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(I.value) || (n(Pt, r.inactiveValue), n(pr, r.inactiveValue), n(dr, r.inactiveValue)), Ie(p, (S) => {
      var x;
      f.value.checked = S, r.validateEvent && ((x = o?.validate) == null || x.call(o, "change").catch((O) => void 0));
    });
    const L = () => {
      const S = p.value ? r.inactiveValue : r.activeValue;
      n(Pt, S), n(pr, S), n(dr, S), wt(() => {
        f.value.checked = p.value;
      });
    }, P = () => {
      if (i.value)
        return;
      const { beforeChange: S } = r;
      if (!S) {
        L();
        return;
      }
      const x = S();
      [
        hc(x),
        Ar(x)
      ].includes(!0) || Rl(Df, "beforeChange must return type `Promise<boolean>` or `boolean`"), hc(x) ? x.then((J) => {
        J && L();
      }).catch((J) => {
      }) : x && L();
    }, C = () => {
      var S, x;
      (x = (S = f.value) == null ? void 0 : S.focus) == null || x.call(S);
    };
    return Tt(() => {
      f.value.checked = p.value;
    }), t({
      focus: C,
      checked: p
    }), (S, x) => (R(), j("div", {
      class: K(l(h)),
      onClick: it(P, ["prevent"])
    }, [
      g("input", {
        id: l(c),
        ref_key: "input",
        ref: f,
        class: K(l(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": l(p),
        "aria-disabled": l(i),
        "aria-label": S.ariaLabel,
        name: S.name,
        "true-value": S.activeValue,
        "false-value": S.inactiveValue,
        disabled: l(i),
        tabindex: S.tabindex,
        onChange: L,
        onKeydown: bn(P, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !S.inlinePrompt && (S.inactiveIcon || S.inactiveText) ? (R(), j("span", {
        key: 0,
        class: K(l(y))
      }, [
        S.inactiveIcon ? (R(), fe(l(At), { key: 0 }, {
          default: de(() => [
            (R(), fe(Zt(S.inactiveIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !S.inactiveIcon && S.inactiveText ? (R(), j("span", {
          key: 1,
          "aria-hidden": l(p)
        }, M(S.inactiveText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0),
      g("span", {
        ref_key: "core",
        ref: m,
        class: K(l(s).e("core")),
        style: $t(l(b))
      }, [
        S.inlinePrompt ? (R(), j("div", {
          key: 0,
          class: K(l(s).e("inner"))
        }, [
          S.activeIcon || S.inactiveIcon ? (R(), fe(l(At), {
            key: 0,
            class: K(l(s).is("icon"))
          }, {
            default: de(() => [
              (R(), fe(Zt(l(p) ? S.activeIcon : S.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : S.activeText || S.inactiveText ? (R(), j("span", {
            key: 1,
            class: K(l(s).is("text")),
            "aria-hidden": !l(p)
          }, M(l(p) ? S.activeText : S.inactiveText), 11, ["aria-hidden"])) : ne("v-if", !0)
        ], 2)) : ne("v-if", !0),
        g("div", {
          class: K(l(s).e("action"))
        }, [
          S.loading ? (R(), fe(l(At), {
            key: 0,
            class: K(l(s).is("loading"))
          }, {
            default: de(() => [
              z(l(of))
            ]),
            _: 1
          }, 8, ["class"])) : l(p) ? Ae(S.$slots, "active-action", { key: 1 }, () => [
            S.activeActionIcon ? (R(), fe(l(At), { key: 0 }, {
              default: de(() => [
                (R(), fe(Zt(S.activeActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ]) : l(p) ? ne("v-if", !0) : Ae(S.$slots, "inactive-action", { key: 2 }, () => [
            S.inactiveActionIcon ? (R(), fe(l(At), { key: 0 }, {
              default: de(() => [
                (R(), fe(Zt(S.inactiveActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ])
        ], 2)
      ], 6),
      !S.inlinePrompt && (S.activeIcon || S.activeText) ? (R(), j("span", {
        key: 1,
        class: K(l(v))
      }, [
        S.activeIcon ? (R(), fe(l(At), { key: 0 }, {
          default: de(() => [
            (R(), fe(Zt(S.activeIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !S.activeIcon && S.activeText ? (R(), j("span", {
          key: 1,
          "aria-hidden": !l(p)
        }, M(S.activeText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var XS = /* @__PURE__ */ ct(ZS, [["__file", "switch.vue"]]);
const QS = Tn(XS), Ff = ["success", "info", "warning", "error"], Wt = lf({
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
  appendTo: Ct ? document.body : void 0
}), JS = ot({
  customClass: {
    type: String,
    default: Wt.customClass
  },
  center: {
    type: Boolean,
    default: Wt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Wt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Wt.duration
  },
  icon: {
    type: Dn,
    default: Wt.icon
  },
  id: {
    type: String,
    default: Wt.id
  },
  message: {
    type: Se([
      String,
      Object,
      Function
    ]),
    default: Wt.message
  },
  onClose: {
    type: Se(Function),
    default: Wt.onClose
  },
  showClose: {
    type: Boolean,
    default: Wt.showClose
  },
  type: {
    type: String,
    values: Ff,
    default: Wt.type
  },
  plain: {
    type: Boolean,
    default: Wt.plain
  },
  offset: {
    type: Number,
    default: Wt.offset
  },
  zIndex: {
    type: Number,
    default: Wt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Wt.grouping
  },
  repeatNum: {
    type: Number,
    default: Wt.repeatNum
  }
}), eT = {
  destroy: () => !0
}, _n = kp([]), tT = (e) => {
  const t = _n.findIndex((o) => o.id === e), n = _n[t];
  let r;
  return t > 0 && (r = _n[t - 1]), { current: n, prev: r };
}, nT = (e) => {
  const { prev: t } = tT(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, rT = (e, t) => _n.findIndex((r) => r.id === e) > 0 ? 16 : t, oT = le({
  name: "ElMessage"
}), aT = /* @__PURE__ */ le({
  ...oT,
  props: JS,
  emits: eT,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = c_, { ns: o, zIndex: a } = Jd("message"), { currentZIndex: s, nextZIndex: c } = a, i = q(), u = q(!1), f = q(0);
    let m;
    const h = N(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = N(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && Ba[O] };
    }), v = N(() => n.icon || Ba[n.type] || ""), b = N(() => nT(n.id)), I = N(() => rT(n.id, n.offset) + b.value), p = N(() => f.value + I.value), L = N(() => ({
      top: `${I.value}px`,
      zIndex: s.value
    }));
    function P() {
      n.duration !== 0 && ({ stop: m } = Ud(() => {
        S();
      }, n.duration));
    }
    function C() {
      m?.();
    }
    function S() {
      u.value = !1;
    }
    function x({ code: O }) {
      O === zn.esc && S();
    }
    return Tt(() => {
      P(), c(), u.value = !0;
    }), Ie(() => n.repeatNum, () => {
      C(), P();
    }), kn(document, "keydown", x), Pn(i, () => {
      f.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: p,
      close: S
    }), (O, J) => (R(), fe(wo, {
      name: l(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (X) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: de(() => [
        xt(g("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: i,
          class: K([
            l(o).b(),
            { [l(o).m(O.type)]: O.type },
            l(o).is("center", O.center),
            l(o).is("closable", O.showClose),
            l(o).is("plain", O.plain),
            O.customClass
          ]),
          style: $t(l(L)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: P
        }, [
          O.repeatNum > 1 ? (R(), fe(l(fS), {
            key: 0,
            value: O.repeatNum,
            type: l(h),
            class: K(l(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          l(v) ? (R(), fe(l(At), {
            key: 1,
            class: K([l(o).e("icon"), l(y)])
          }, {
            default: de(() => [
              (R(), fe(Zt(l(v))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          Ae(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (R(), j(gt, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              g("p", {
                class: K(l(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), j("p", {
              key: 0,
              class: K(l(o).e("content"))
            }, M(O.message), 3))
          ]),
          O.showClose ? (R(), fe(l(At), {
            key: 2,
            class: K(l(o).e("closeBtn")),
            onClick: it(S, ["stop"])
          }, {
            default: de(() => [
              z(l(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 46, ["id"]), [
          [fr, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var sT = /* @__PURE__ */ ct(aT, [["__file", "message.vue"]]);
let lT = 1;
const zf = (e) => {
  const t = !e || Gt(e) || Ko(e) || dt(e) ? { message: e } : e, n = {
    ...Wt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Gt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    wn(r) || (r = document.body), n.appendTo = r;
  }
  return Ar(hn.grouping) && !n.grouping && (n.grouping = hn.grouping), je(hn.duration) && n.duration === 3e3 && (n.duration = hn.duration), je(hn.offset) && n.offset === 16 && (n.offset = hn.offset), Ar(hn.showClose) && !n.showClose && (n.showClose = hn.showClose), n;
}, iT = (e) => {
  const t = _n.indexOf(e);
  if (t === -1)
    return;
  _n.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, cT = ({ appendTo: e, ...t }, n) => {
  const r = `message_${lT++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), iT(f);
    },
    onDestroy: () => {
      La(null, a);
    }
  }, c = z(sT, s, dt(s.message) || Ko(s.message) ? {
    default: dt(s.message) ? s.message : () => s.message
  } : null);
  c.appContext = n || yo._context, La(c, a), e.appendChild(a.firstElementChild);
  const i = c.component, f = {
    id: r,
    vnode: c,
    vm: i,
    handler: {
      close: () => {
        i.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return f;
}, yo = (e = {}, t) => {
  if (!Ct)
    return { close: () => {
    } };
  const n = zf(e);
  if (n.grouping && _n.length) {
    const o = _n.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (je(hn.max) && _n.length >= hn.max)
    return { close: () => {
    } };
  const r = cT(n, t);
  return _n.push(r), r.handler;
};
Ff.forEach((e) => {
  yo[e] = (t = {}, n) => {
    const r = zf(t);
    return yo({ ...r, type: e }, n);
  };
});
function uT(e) {
  for (const t of _n)
    (!e || e === t.props.type) && t.handler.close();
}
yo.closeAll = uT;
yo._context = null;
const dT = tf(yo, "$message"), Bf = [
  "success",
  "info",
  "warning",
  "error"
], fT = ot({
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
    type: Se([
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
    type: Se(Function),
    default: () => {
    }
  },
  onClose: {
    type: Se(Function),
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
}), pT = {
  destroy: () => !0
}, mT = le({
  name: "ElNotification"
}), hT = /* @__PURE__ */ le({
  ...mT,
  props: fT,
  emits: pT,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Jd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: c } = i_, i = q(!1);
    let u;
    const f = N(() => {
      const P = n.type;
      return P && Ba[n.type] ? r.m(P) : "";
    }), m = N(() => n.type && Ba[n.type] || n.icon), h = N(() => n.position.endsWith("right") ? "right" : "left"), y = N(() => n.position.startsWith("top") ? "top" : "bottom"), v = N(() => {
      var P;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (P = n.zIndex) != null ? P : s.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = Ud(() => {
        i.value && p();
      }, n.duration));
    }
    function I() {
      u?.();
    }
    function p() {
      i.value = !1;
    }
    function L({ code: P }) {
      P === zn.delete || P === zn.backspace ? I() : P === zn.esc ? i.value && p() : b();
    }
    return Tt(() => {
      b(), a(), i.value = !0;
    }), kn(document, "keydown", L), t({
      visible: i,
      close: p
    }), (P, C) => (R(), fe(wo, {
      name: l(r).b("fade"),
      onBeforeLeave: P.onClose,
      onAfterLeave: (S) => P.$emit("destroy"),
      persisted: ""
    }, {
      default: de(() => [
        xt(g("div", {
          id: P.id,
          class: K([l(r).b(), P.customClass, l(h)]),
          style: $t(l(v)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: b,
          onClick: P.onClick
        }, [
          l(m) ? (R(), fe(l(At), {
            key: 0,
            class: K([l(r).e("icon"), l(f)])
          }, {
            default: de(() => [
              (R(), fe(Zt(l(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          g("div", {
            class: K(l(r).e("group"))
          }, [
            g("h2", {
              class: K(l(r).e("title")),
              textContent: M(P.title)
            }, null, 10, ["textContent"]),
            xt(g("div", {
              class: K(l(r).e("content")),
              style: $t(P.title ? void 0 : { margin: 0 })
            }, [
              Ae(P.$slots, "default", {}, () => [
                P.dangerouslyUseHTMLString ? (R(), j(gt, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  g("p", { innerHTML: P.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), j("p", { key: 0 }, M(P.message), 1))
              ])
            ], 6), [
              [fr, P.message]
            ]),
            P.showClose ? (R(), fe(l(At), {
              key: 0,
              class: K(l(r).e("closeBtn")),
              onClick: it(p, ["stop"])
            }, {
              default: de(() => [
                z(l(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ne("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [fr, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var gT = /* @__PURE__ */ ct(hT, [["__file", "notification.vue"]]);
const ja = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, nl = 16;
let vT = 1;
const _o = function(e = {}, t) {
  if (!Ct)
    return { close: () => {
    } };
  (Gt(e) || Ko(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  ja[n].forEach(({ vm: f }) => {
    var m;
    r += (((m = f.el) == null ? void 0 : m.offsetHeight) || 0) + nl;
  }), r += nl;
  const o = `notification_${vT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      bT(o, n, a);
    }
  };
  let c = document.body;
  wn(e.appendTo) ? c = e.appendTo : Gt(e.appendTo) && (c = document.querySelector(e.appendTo)), wn(c) || (c = document.body);
  const i = document.createElement("div"), u = z(gT, s, dt(s.message) ? s.message : Ko(s.message) ? () => s.message : null);
  return u.appContext = Mn(t) ? _o._context : t, u.props.onDestroy = () => {
    La(null, i);
  }, La(u, i), ja[n].push({ vm: u }), c.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Bf.forEach((e) => {
  _o[e] = (t = {}, n) => ((Gt(t) || Ko(t)) && (t = {
    message: t
  }), _o({ ...t, type: e }, n));
});
function bT(e, t, n) {
  const r = ja[t], o = r.findIndex(({ vm: u }) => {
    var f;
    return ((f = u.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: a } = r[o];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, c = t.split("-")[0];
  r.splice(o, 1);
  const i = r.length;
  if (!(i < 1))
    for (let u = o; u < i; u++) {
      const { el: f, component: m } = r[u].vm, h = Number.parseInt(f.style[c], 10) - s - nl;
      m.props.offset = h;
    }
}
function yT() {
  for (const e of Object.values(ja))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
_o.closeAll = yT;
_o._context = null;
const _T = tf(_o, "$notify"), rt = {
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
    r === "center" ? dT({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : _T({
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
}, wT = "snippets-code:developer-mode", Vf = "snippets-code:frontend-diagnostics", kT = 240, Do = "[REDACTED]", Ia = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Do}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Do}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Do
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Do}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Do}`
), Uf = (e) => {
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
}, ST = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, TT = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Vf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, ei = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(wT) === "true";
  } catch {
    return !1;
  }
}, ET = (e, t, n) => {
  if (!ei() || typeof localStorage > "u") return;
  const r = TT();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: ST(),
    message: Ia(t),
    data: Uf(n)
  });
  try {
    localStorage.setItem(
      Vf,
      JSON.stringify(r.slice(-kT))
    );
  } catch {
  }
}, AT = () => ei(), CT = (e) => e === "warn" || e === "error" || !1 || !1 || ei(), ka = (e, t, n) => {
  ET(e, t, n), CT(e) && Ot("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Uf(n)
  }).catch(() => {
  });
}, Rt = {
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
    AT() && ka("debug", e, t);
  }
}, IT = { class: "sidebar-header" }, LT = { class: "sidebar-title-block" }, OT = ["title", "aria-pressed"], xT = { class: "sidebar-nav" }, RT = { class: "sidebar-nav-item sidebar-nav-item--search" }, NT = ["placeholder"], PT = { class: "sidebar-section recent-section" }, $T = { class: "section-title-row" }, MT = { class: "section-title" }, DT = ["title"], FT = {
  key: 0,
  class: "chat-list"
}, zT = ["onClick", "onKeydown"], BT = { class: "chat-item-title" }, VT = { class: "chat-item-time" }, UT = ["title", "onClick"], jT = {
  key: 1,
  class: "sidebar-empty"
}, WT = { class: "sidebar-service" }, HT = { class: "sidebar-service-row" }, GT = { class: "chat-panel" }, KT = ["title"], qT = {
  key: 0,
  class: "empty-state"
}, YT = { class: "empty-title" }, ZT = { class: "empty-desc" }, XT = {
  key: 0,
  class: "date-divider"
}, QT = { class: "message-avatar" }, JT = { key: 1 }, e2 = { class: "message-body" }, t2 = { class: "user-bubble" }, n2 = {
  key: 0,
  class: "user-message-text"
}, r2 = {
  key: 1,
  class: "message-attachment-list"
}, o2 = ["title"], a2 = ["src", "alt"], s2 = {
  key: 1,
  class: "attachment-file-icon"
}, l2 = { key: 2 }, i2 = {
  key: 0,
  class: "message-actions"
}, c2 = ["title", "onClick"], u2 = ["title", "onClick"], d2 = ["title", "onClick"], f2 = { class: "assistant-head" }, p2 = { key: 0 }, m2 = {
  key: 0,
  class: "assistant-content-stack"
}, h2 = ["open"], g2 = { class: "reasoning-summary-title" }, v2 = { key: 0 }, b2 = ["innerHTML"], y2 = ["innerHTML"], _2 = {
  key: 1,
  class: "message-content loading-text"
}, w2 = {
  key: 0,
  class: "web-search-panel"
}, k2 = { class: "web-search-panel__header" }, S2 = {
  key: 0,
  class: "web-search-source-list"
}, T2 = ["href", "title"], E2 = {
  key: 1,
  class: "message-stats"
}, A2 = { class: "message-stats__context" }, C2 = { class: "message-stats__output" }, I2 = { class: "message-stats__elapsed" }, L2 = { class: "message-stats__speed" }, O2 = {
  key: 0,
  class: "message-stats-time"
}, x2 = {
  key: 2,
  class: "message-warning"
}, R2 = {
  key: 3,
  class: "message-actions"
}, N2 = ["title", "aria-label"], P2 = ["disabled", "title", "onClick"], $2 = ["disabled", "title", "onClick"], M2 = ["title", "onClick"], D2 = ["title", "onClick"], F2 = ["title", "onClick"], z2 = ["title", "onClick"], B2 = ["title", "onClick"], V2 = ["title"], U2 = {
  key: 0,
  class: "attachment-preview-list"
}, j2 = ["src", "alt"], W2 = {
  key: 1,
  class: "attachment-file-icon"
}, H2 = { class: "attachment-meta" }, G2 = ["title", "onClick"], K2 = ["placeholder"], q2 = { class: "input-toolbar" }, Y2 = { class: "input-toolbar-left" }, Z2 = ["title"], X2 = { class: "model-select-shell" }, Q2 = ["disabled"], J2 = ["value"], eE = {
  key: 0,
  value: ""
}, tE = ["title", "aria-pressed"], nE = ["title", "aria-pressed"], rE = { class: "input-toolbar-right" }, oE = ["title", "aria-label"], aE = ["disabled", "title", "aria-label"], Cu = "snippets.localAi.webSearchEnabled", sE = 96, lE = 24, iE = 120, cE = 4096, xs = 160, uE = 420, dE = 1200, fE = 24e3, pE = 1800, mE = 5200, hE = 90, gE = 1e3, vE = /* @__PURE__ */ le({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = na(), n = q(""), r = q([]), o = q(""), a = q(!1), s = q(""), c = q([]), i = q(!1), u = q(!1), f = q(!1), m = q(!1), y = q((() => {
      try {
        return localStorage.getItem(Cu) === "true";
      } catch {
        return !1;
      }
    })()), v = q(null);
    let b = null;
    const I = q(!1), p = q(!0), L = q(!1), P = q(null), C = q(null), S = q(null), x = q(""), O = q(null), J = q(null), X = q(null), Q = q(Date.now());
    let ue = null, se = null, be = null, _e = !1;
    const H = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /今天|今日|现在|当前|日期|时间|星期|天气|温度|气温|today|current|date|time|weather|temperature/i, me = /天气|温度|气温|体感|湿度|降雨|下雨|风速|weather|temperature|humidity|rain|wind/i, Le = (d) => `${Date.now()}-${d}-${Math.random().toString(16).slice(2, 8)}`, De = (d) => d.type === "root", Fe = (d) => new Map(d.map((k) => [k.id, k])), xe = (d) => d.find(De), ye = (d, k) => {
      if (!k) return null;
      const w = Fe(d);
      let $ = w.get(k);
      const B = /* @__PURE__ */ new Set();
      for (; $?.childIds?.length && !B.has($.id); )
        B.add($.id), $ = w.get($.childIds[$.childIds.length - 1]);
      return $?.id ?? null;
    }, Xe = (d, k) => {
      if (d.some(De)) {
        const Y = d.map((ve) => ({
          ...ve,
          type: ve.type ?? "text",
          parentId: ve.parentId ?? null,
          childIds: ve.childIds ?? []
        })), oe = xe(Y);
        return {
          messages: Y,
          currentNodeId: ye(Y, Y.at(-1)?.id) ?? oe?.id ?? null
        };
      }
      const w = {
        id: Le("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: k,
        parentId: null,
        childIds: []
      }, $ = [w];
      let B = w.id;
      for (const Y of d) {
        const oe = {
          ...Y,
          role: Y.role === "system" ? "assistant" : Y.role,
          type: "text",
          parentId: B,
          childIds: []
        };
        $.find((Oe) => Oe.id === B)?.childIds?.push(oe.id), $.push(oe), B = oe.id;
      }
      return { messages: $, currentNodeId: B };
    }, Ce = (d, k) => {
      if (!k) return [];
      const w = Fe(d), $ = [], B = /* @__PURE__ */ new Set();
      let Y = w.get(k);
      for (; Y && !B.has(Y.id); )
        B.add(Y.id), $.unshift(Y), Y = Y.parentId ? w.get(Y.parentId) : void 0;
      return $;
    }, Ze = (d) => {
      if (!d) return [];
      const k = d.currentNodeId ?? ye(d.messages, xe(d.messages)?.id);
      return Ce(d.messages, k).filter(
        (w) => !De(w)
      );
    }, ge = (d) => {
      if (!d) return [];
      const k = Fe(d.messages), w = ($) => ye(d.messages, $) ?? $;
      return Ze(d).map(($) => {
        const Y = ($.parentId ? k.get($.parentId) : void 0)?.childIds ?? [$.id];
        return {
          message: $,
          siblingLeafNodeIds: Y.map(w),
          siblingCurrentIndex: Math.max(0, Y.indexOf($.id))
        };
      });
    }, Je = (d, k) => {
      const w = xe(d.messages), $ = k.parentId ?? d.currentNodeId ?? w?.id ?? null, B = {
        ...k,
        type: "text",
        parentId: $,
        childIds: []
      };
      if (d.messages.push(B), $) {
        const Y = d.messages.find((oe) => oe.id === $);
        Y && (Y.childIds = [...Y.childIds ?? [], B.id]);
      }
      return d.currentNodeId = B.id, B;
    }, vt = N(
      () => (!!s.value.trim() || c.value.length > 0) && !i.value
    ), Qe = N(() => O.value?.healthy ? t("localAi.serviceHealthy") : O.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), Te = N(
      () => r.value.find((d) => d.id === o.value) ?? null
    ), ft = N(() => Ze(Te.value)), pt = N(() => ge(Te.value)), te = (d) => d ? d.split(/[\\/]+/).pop() ?? d : "", Z = N(
      () => te(x.value) || te(O.value?.modelPath) || te(C.value?.modelPath) || t("localAi.localModel")
    ), We = N(() => S.value?.mainModels ?? []), T = N(() => !!C.value?.mmprojPath), E = N(
      () => C.value?.ctxSize ?? O.value?.ctxSize ?? 4096
    ), V = N(() => {
      const d = E.value, k = C.value?.maxTokens ?? 0;
      return k > 0 ? Math.min(
        Math.max(k, 512),
        Math.max(512, d - 512)
      ) : Math.min(
        Math.max(cE, Math.floor(d * 0.5)),
        Math.max(512, d - 512)
      );
    }), F = N(
      () => Math.max(512, E.value - V.value)
    ), we = N(() => {
      const d = Z.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(d);
    }), pe = N(() => {
      const d = n.value.trim().toLowerCase();
      return r.value.filter(
        (k) => !d || k.title.toLowerCase().includes(d) || k.messages.some(
          (w) => !De(w) && w.content.toLowerCase().includes(d)
        )
      ).slice().sort((k, w) => w.updatedAt.localeCompare(k.updatedAt));
    }), A = () => t("localAi.now"), U = () => {
      const d = (/* @__PURE__ */ new Date()).toISOString(), k = {
        id: Le("root"),
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
        updatedAtLabel: A(),
        currentNodeId: k.id,
        messages: [k]
      };
    }, Ee = () => {
      const d = J.value;
      return d ? d.scrollHeight - d.scrollTop - d.clientHeight <= sE : !0;
    }, Pe = () => {
      const d = Ee();
      p.value = d, L.value = !d;
    }, at = () => {
      Pe();
    }, st = async (d = {}) => {
      await wt(), !(!J.value || !d.force && !p.value) && (_e = _e || d.force === !0, be === null && (be = window.requestAnimationFrame(() => {
        be = null;
        const w = J.value, $ = _e;
        if (_e = !1, !w || !$ && !p.value) return;
        const B = Math.max(0, w.scrollHeight - w.clientHeight);
        Math.abs(w.scrollTop - B) > 1 && (w.scrollTop = B), Pe();
      })));
    }, et = () => {
      p.value = !0, st({ force: !0 });
    }, Gn = async () => {
      try {
        C.value = await hd(), x.value = C.value.modelPath ?? "", S.value = await gd(C.value), we.value || (m.value = !1);
      } catch (d) {
        Rt.warn("[LocalAI] refresh chat config failed", d);
      }
    }, Kn = async () => {
      u.value = !0;
      try {
        O.value = await vd();
      } catch (d) {
        Rt.warn("[LocalAI] refresh chat status failed", d);
      } finally {
        u.value = !1;
      }
    }, Yr = async () => {
      try {
        const d = await ig();
        r.value = d.map((k) => {
          const w = k.messages?.length ? k.messages : k.turns.map((B) => ({
            id: B.id,
            role: B.role,
            content: B.content,
            createdAt: B.createdAt
          })), $ = Xe(
            w,
            k.createdAt
          );
          return {
            id: k.id,
            title: k.title,
            createdAt: k.createdAt,
            updatedAt: k.updatedAt,
            updatedAtLabel: new Date(k.updatedAt).toLocaleString(),
            currentNodeId: k.currentNodeId ?? $.currentNodeId,
            messages: $.messages
          };
        }), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (d) {
        Rt.warn("[LocalAI] refresh histories failed", d);
      }
    }, qn = async () => {
      await Promise.all([Gn(), Kn(), Yr()]);
    }, ln = async () => {
      const d = Te.value;
      if (!d) return;
      const k = Ze(d).map((w) => ({
        id: w.id,
        role: w.role,
        content: w.content,
        createdAt: w.createdAt
      }));
      await cg({
        id: d.id,
        title: d.title,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        turns: k,
        currentNodeId: d.currentNodeId,
        messages: d.messages
      });
    }, En = () => {
      const d = U();
      r.value.unshift(d), o.value = d.id, s.value = "";
    }, pn = () => {
      Te.value || En();
    }, Kt = (d) => {
      o.value = d;
      const k = Te.value;
      k && !k.currentNodeId && (k.currentNodeId = ye(k.messages, xe(k.messages)?.id) ?? null), p.value = !0, st({ force: !0 });
    }, An = async (d) => {
      r.value = r.value.filter((k) => k.id !== d), await ug(d), o.value === d && (o.value = r.value[0]?.id ?? "");
    }, xr = () => {
      X.value?.click();
    }, Cn = (d, k) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: d.name,
      type: k,
      mime: d.type || "application/octet-stream",
      size: d.size,
      status: "pending"
    }), vr = async (d) => {
      if (ys(d)) {
        const w = Cn(d, "image");
        if (d.size > vg)
          return {
            ...w,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...w,
            status: "parsed",
            dataUrl: await _g(d)
          };
        } catch ($) {
          return { ...w, status: "error", error: String($) };
        }
      }
      if (ec(d)) {
        const w = Cn(d, "text");
        if (d.size > gg)
          return {
            ...w,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const $ = await wg(d);
          return {
            ...w,
            status: "parsed",
            text: $.text,
            error: $.truncated ? "truncated" : void 0
          };
        } catch ($) {
          return { ...w, status: "error", error: String($) };
        }
      }
      return {
        ...Cn(d, "unsupported"),
        status: "error",
        error: yg(d) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, Yn = async (d) => {
      const k = Array.from(d), w = hg - c.value.length;
      if (w <= 0) {
        rt.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      k.length > w && rt.msg(t("localAi.attachmentLimit"), "warning");
      const $ = k.slice(0, w), B = $.map(
        (Y) => Cn(
          Y,
          ys(Y) ? "image" : ec(Y) ? "text" : "unsupported"
        )
      );
      c.value.push(...B), await Promise.all(
        $.map(async (Y, oe) => {
          const ve = await vr(Y), Oe = c.value.findIndex(
            (yt) => yt.id === B[oe].id
          );
          Oe >= 0 && (c.value[Oe] = ve);
        })
      );
    }, Rr = async (d) => {
      const k = d.target;
      k.files?.length && await Yn(k.files), k.value = "";
    }, So = async (d) => {
      d.dataTransfer?.files.length && await Yn(d.dataTransfer.files);
    }, Zn = async (d) => {
      const k = Array.from(d.clipboardData?.files ?? []);
      if (!k.length) return;
      const w = k.filter(ys);
      w.length && (d.preventDefault(), await Yn(w));
    }, Zr = (d) => {
      c.value = c.value.filter(
        (k) => k.id !== d
      );
    }, To = (d) => d.status === "pending" ? t("localAi.attachmentPending") : d.status === "error" ? d.error ?? "" : d.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), Ke = async () => {
      if (!(!C.value || !x.value)) {
        C.value.modelPath = x.value;
        try {
          C.value = await zo(C.value), O.value?.running && (O.value = await bd()), rt.msg(t("localAi.modelChanged"));
        } catch (d) {
          rt.msg(`${t("localAi.configSaveFailed")}: ${d}`, "error");
        }
      }
    }, In = (d) => {
      let k = 0;
      for (let w = 0; w < d.length; w += 1)
        k = k * 31 + d.charCodeAt(w) >>> 0;
      return `code-${d.length}-${k.toString(16)}`;
    }, Eo = (d) => d.includes("<pre>") ? d.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (k, w, $) => {
        const B = document.createElement("textarea");
        B.innerHTML = $;
        const Y = B.value, oe = In(Y);
        if (ee.set(oe, Y), ee.size > iE) {
          const Oe = ee.keys().next().value;
          typeof Oe == "string" && ee.delete(Oe);
        }
        const ve = w ? ` class="${w}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${oe}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${ve}>${$}</code></pre></div>`;
      }
    ) : d, Nr = (d, k = {}) => {
      const w = k.cache !== !1, $ = k.enhanceCodeBlocks !== !1;
      if (w) {
        const oe = H.get(d);
        if (oe) return oe;
      }
      const B = tv(He.parse(d, { async: !1 })), Y = $ ? Eo(B) : B;
      if (!w) return Y;
      if (H.set(d, Y), H.size > lE) {
        const oe = H.keys().next().value;
        typeof oe == "string" && H.delete(oe);
      }
      return Y;
    }, Xn = (d, k) => {
      const w = D(d, k);
      if (!d.streaming) return Nr(w);
      const $ = W.get(d.id), B = k === "reasoning" ? "reasoningHtml" : "answerHtml", Y = k === "reasoning" ? "reasoning" : "answer";
      if ($?.[Y] === w && $[B])
        return $[B];
      const oe = Nr(w, {
        cache: !1,
        enhanceCodeBlocks: !1
      });
      return $?.[Y] === w && ($[B] = oe), oe;
    }, Pr = async (d) => {
      const $ = d.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!$) return;
      const B = ee.get($);
      if (B)
        try {
          await navigator.clipboard.writeText(B), rt.msg(t("localAi.codeCopied"));
        } catch (Y) {
          rt.msg(`${t("common.copy")}: ${Y}`, "error");
        }
    }, br = (d) => {
      const k = d.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!k || k.index === void 0)
        return { reasoning: "", answer: d };
      const w = d.slice(0, k.index).trim(), $ = k[0], B = d.slice(k.index + $.length).trim();
      return {
        reasoning: (k[1] ?? "").trim(),
        answer: [w, B].filter(Boolean).join(`

`)
      };
    }, Ao = (d) => br(d).reasoning, Ft = (d) => br(d).answer, D = (d, k) => {
      const { reasoning: w, answer: $ } = br(d.content);
      if (!d.streaming)
        return W.delete(d.id), k === "reasoning" ? w : $;
      const B = Date.now(), Y = W.get(d.id), oe = d.content.length >= fE, ve = oe ? dE : uE, Oe = oe ? mE : pE;
      if (!Y || B - Y.updatedAt >= ve || d.content.length - Y.source.length >= Oe || !Y.reasoning && !!w || !Y.answer && !!$) {
        const _t = {
          source: d.content,
          reasoning: w,
          answer: $,
          updatedAt: B
        };
        return W.set(d.id, _t), k === "reasoning" ? w : $;
      }
      return k === "reasoning" ? Y.reasoning : Y.answer;
    }, re = (d) => !!Ft(d.content), ke = (d) => !!(d.streaming && d.allowThinking && d.reasoningStartedAt && !d.reasoningEndedAt && !re(d)), lt = (d) => {
      if (!d.reasoningStartedAt) return "0.00";
      const k = d.reasoningEndedAt ?? (d.streaming ? Q.value : Date.now());
      return Math.max(0, (k - d.reasoningStartedAt) / 1e3).toFixed(2);
    }, Et = (d) => !d.reasoningStartedAt && d.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: lt(d)
    }), bt = (d) => new Date(
      d.createdAt || Te.value?.updatedAt || Date.now()
    ), zt = (d) => bt(d).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Bt = (d, k) => bt(d).toDateString() === bt(k).toDateString(), mn = (d) => bt(d).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Xr = (d) => {
      const k = pt.value[d]?.message;
      if (!k) return !1;
      if (d === 0) return !mn(k);
      const w = pt.value[d - 1]?.message;
      return w ? Bt(w, k) ? bt(k).getTime() - bt(w).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, us = (d) => {
      const k = bt(d), w = k.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), $ = k.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return mn(d) ? $ : `${w} ${$}`;
    }, ca = (d) => d.streaming ? ke(d) ? t("localAi.thinking") : t("localAi.generating") : zt(d), ua = (d) => d.webSearchStatus === "searching" ? $r() : d.allowThinking && !d.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), $r = () => {
      const d = v.value;
      return d && d.phase !== "ready" ? d.message : t("localAi.webSearchSearching");
    }, Qn = (d) => d.webSearchStatus === "searching" ? $r() : d.webSearchStatus === "done" && d.webSearchResults?.length ? t("localAi.webSearchUsed", {
      count: d.webSearchResults.length
    }) : d.webSearchStatus === "empty" ? t("localAi.webSearchNoResults") : d.webSearchStatus === "failed" ? `${t("localAi.webSearchFailed")}: ${d.webSearchError ?? ""}` : "", ie = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(
          Cu,
          String(y.value)
        );
      } catch (d) {
        Rt.warn("[LocalAI] save web search state failed", d);
      }
    }, _ = (d, k) => {
      d.allowThinking && (k.includes("<think>") && !d.reasoningStartedAt && (d.reasoningStartedAt = Date.now()), k.includes("</think>") && !d.reasoningEndedAt && (d.reasoningEndedAt = Date.now()));
    }, G = (d) => {
      const k = d.trim();
      if (!k) return 0;
      const w = (k.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Y = (k.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((oe, ve) => /^[A-Za-z0-9_]+$/.test(ve) ? oe + Math.max(1, Math.ceil(ve.length / 4)) : oe + 1, 0);
      return Math.max(1, Math.ceil(w + Y));
    }, ae = (d) => Math.max(0, Math.ceil(d.length / 4)), Me = (d) => Array.isArray(d) ? d.filter((k) => k.type === "text").map((k) => k.text).join(`
`) : d, Ne = (d) => {
      const k = d.attachments?.filter(
        (Y) => Y.status === "parsed"
      ) ?? [], w = kg(
        d.content,
        k
      ), $ = k.filter(
        (Y) => Y.type === "image" && Y.dataUrl
      );
      if (!$.length) return w;
      const B = [{ type: "text", text: w }];
      for (const Y of $)
        B.push({
          type: "image_url",
          image_url: {
            url: Y.dataUrl ?? ""
          }
        });
      return B;
    }, $e = (d) => G(
      d.map((k) => {
        const w = Me(k.content);
        return `${k.role}: ${w}`;
      }).join(`
`)
    ), qt = (d, k) => {
      const w = Math.max(240, k * 4);
      return d.length <= w ? d : `${t("localAi.previousAnswerTail")}

${d.slice(-w)}`;
    }, Vt = (d) => String(d).padStart(2, "0"), Ut = (d = /* @__PURE__ */ new Date()) => {
      const k = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${-d.getTimezoneOffset() / 60 >= 0 ? "+" : ""}${-d.getTimezoneOffset() / 60}`, w = [
        d.getFullYear(),
        Vt(d.getMonth() + 1),
        Vt(d.getDate())
      ].join("-"), $ = [
        Vt(d.getHours()),
        Vt(d.getMinutes()),
        Vt(d.getSeconds())
      ].join(":"), B = d.toLocaleDateString("zh-CN", { weekday: "long" });
      return { isoDate: w, localTime: $, timeZone: k, weekday: B };
    }, Co = () => {
      const { isoDate: d, localTime: k, timeZone: w, weekday: $ } = Ut();
      return {
        role: "system",
        content: [
          "Current runtime context is authoritative.",
          `Current local date: ${d}`,
          `Current local weekday: ${$}`,
          `Current local time: ${k}`,
          `Current timezone: ${w}`,
          "For questions involving today, current date, current time, weather, temperature, news, schedules, or other time-sensitive facts, use this runtime context as the source of truth. Do not infer the current date from model memory or from older search result snippets."
        ].join(`
`)
      };
    }, mt = (d) => {
      const k = d.filter(($) => $.role === "system").map(($) => Me($.content).trim()).filter(Boolean), w = d.filter(
        ($) => $.role !== "system"
      );
      return k.length ? [
        {
          role: "system",
          content: k.join(`

---

`)
        },
        ...w
      ] : w;
    }, Io = (d, k) => {
      const w = [];
      let $ = 0;
      for (let B = d.length - 1; B >= 0; B -= 1) {
        const Y = d[B], oe = $e([Y]);
        if ($ + oe <= k || w.length === 0) {
          w.unshift(Y), $ += oe;
          continue;
        }
        const ve = k - $;
        if (Y.role !== "assistant" || typeof Y.content != "string" || ve < xs)
          continue;
        let Oe = ve, yt = {
          ...Y,
          content: qt(Y.content, Oe)
        }, _t = $e([yt]);
        for (; _t > ve && Oe > xs; )
          Oe = Math.max(
            xs,
            Math.floor(Oe * 0.7)
          ), yt = {
            ...Y,
            content: qt(Y.content, Oe)
          }, _t = $e([yt]);
        $ + _t <= k && (w.unshift(yt), $ += _t);
      }
      return w;
    }, Qr = () => {
      const d = Co(), k = $e([d]), w = Math.max(
        512,
        F.value - k
      );
      return [
        d,
        ...Io(
          ft.value.filter(($) => !$.streaming && $.role !== "system").map(($) => ({
            role: $.role,
            content: $.role === "user" ? Ne($) : $.content
          })),
          w
        )
      ];
    }, ni = (d) => {
      const k = Te.value?.messages.find(
        (w) => w.id === d.parentId
      );
      return k?.role === "user" ? k.content.trim() : "";
    }, jf = (d) => ni(d), Wf = (d) => {
      if (!he.test(d)) return d;
      const { isoDate: k, weekday: w } = Ut();
      return `${d} ${k} ${w}`;
    }, yr = (d, k) => typeof d == "number" ? `${d}${k}` : "未知", Hf = (d) => {
      const { isoDate: k, localTime: w, timeZone: $, weekday: B } = Ut();
      return {
        role: "system",
        content: [
          "Structured weather context is available for this turn.",
          `Authoritative current local date: ${k} (${B})`,
          `Authoritative current local time: ${w} ${$}`,
          `Weather source: ${d.source}`,
          `Weather location: ${d.location}, ${d.country}`,
          `Weather data date: ${d.date}`,
          `Weather data updated at: ${d.time} ${d.timezone}`,
          `Current temperature: ${yr(d.temperature, "°C")}`,
          `Apparent temperature: ${yr(d.apparentTemperature, "°C")}`,
          `Condition: ${d.weatherText}`,
          `Humidity: ${yr(d.humidity, "%")}`,
          `Precipitation: ${yr(d.precipitation, "mm")}`,
          `Wind speed: ${yr(d.windSpeed, "km/h")}`,
          `Today high: ${yr(d.temperatureMax, "°C")}`,
          `Today low: ${yr(d.temperatureMin, "°C")}`,
          `Precipitation probability: ${yr(d.precipitationProbability, "%")}`,
          "For weather, temperature, humidity, wind, rain, and today/date questions, this structured weather context and the authoritative current local date override model memory and stale web snippets."
        ].join(`
`)
      };
    }, Gf = (d) => {
      const { isoDate: k, localTime: w, timeZone: $, weekday: B } = Ut(), Y = d.results.map((oe, ve) => {
        const Oe = oe.content.trim();
        return [
          `[${ve + 1}] ${oe.title}`,
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
          `Authoritative current local date: ${k} (${B})`,
          `Authoritative current local time: ${w} ${$}`,
          `Search query: ${d.query}`,
          "Use the search results below when they are relevant. Prefer recent factual information from these results, and cite sources with bracket numbers like [1]. If the user asks about today/date/time/weather, the authoritative current date above overrides model memory and any stale search result wording.",
          "",
          Y
        ].join(`
`)
      };
    }, Kf = async (d, k) => {
      if (k.webSearchStatus !== "searching") return d;
      const w = ni(k);
      if (!w) return d;
      const $ = Wf(w);
      k.webSearchStatus = "searching", k.webSearchQuery = $, k.webSearchResults = [], k.webSearchError = "";
      const B = [];
      if (me.test(w))
        try {
          const oe = await lg({
            query: jf(k)
          });
          B.push(Hf(oe));
        } catch (oe) {
          Rt.warn("[LocalAI] weather context failed", oe);
        }
      const Y = (oe, ve) => {
        if (!ve.length) return mt(oe);
        const Oe = oe.filter(
          (tt) => tt.role === "system"
        ), yt = oe.filter(
          (tt) => tt.role !== "system"
        ), _t = [...Oe, ...ve], Jr = $e(_t), _r = Math.max(
          512,
          F.value - Jr
        );
        return mt([
          ..._t,
          ...Io(yt, _r)
        ]);
      };
      try {
        const oe = await _d({
          query: $,
          maxResults: C.value?.webSearchMaxResults
        });
        if (v.value = null, !oe.results.length)
          return k.webSearchStatus = "empty", Y(d, B);
        k.webSearchStatus = "done", k.webSearchResults = oe.results;
        const ve = Gf(oe);
        return Y(d, [
          ...B,
          ve
        ]);
      } catch (oe) {
        return v.value = null, k.webSearchStatus = "failed", k.webSearchError = String(oe), Rt.warn("[LocalAI] web search failed", oe), Y(d, B);
      }
    }, qf = (d) => {
      const k = C.value?.maxTokens ?? 0;
      if (k > 0) return k;
      const w = $e(d);
      return Math.max(256, E.value - w - 128);
    }, ri = (d) => Math.max(
      1,
      d.stats?.ctxSize ?? d.contextSize ?? C.value?.ctxSize ?? O.value?.ctxSize ?? 4096
    ), Mr = (d) => {
      const k = Q.value, w = d.stats?.promptTokens ?? d.promptTokens ?? 0, $ = d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? ae(d.content) : G(d.content)), B = ri(d), Y = Math.min(
        d.stats?.totalTokens ?? w + $,
        B
      ), oe = Math.max(
        0,
        (d.stats?.generationTimeMs ?? d.elapsedMs ?? k - bt(d).getTime()) / 1e3
      ), ve = d.stats?.tokensPerSecond ?? (oe > 0 ? $ / oe : 0);
      return {
        context: Y,
        contextMax: B,
        contextPercent: Math.min(100, Math.round(Y / B * 100)),
        output: $,
        outputMax: (C.value?.maxTokens ?? 0) > 0 ? String(C.value?.maxTokens) : "∞",
        seconds: oe.toFixed(1),
        speed: ve.toFixed(1)
      };
    }, oi = (d) => d.repetitionStopped ? t("localAi.repetitionStopped") : d.interrupted ? t("localAi.streamInterrupted") : d.stopped ? t("localAi.generationStopped") : (d.stats?.totalTokens ?? (d.promptTokens ?? 0) + (d.stats?.completionTokens ?? d.estimatedCompletionTokens ?? (d.streaming ? ae(d.content) : G(d.content)))) >= ri(d) - 8 ? t("localAi.contextLimitReached") : d.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", ai = (d) => {
      const k = String(d);
      return /exceeds the available context size|exceed_context_size/i.test(k) ? t("localAi.contextExceeded") : k;
    }, Yf = (d) => {
      const k = d.replace(/\s+/g, " ").trim();
      if (k.length < 900) return !1;
      const $ = k.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((ve) => ve.toLowerCase()) ?? [];
      if ($.length < 140) return !1;
      const B = $.slice(-120), Y = /* @__PURE__ */ new Map();
      for (const ve of B) Y.set(ve, (Y.get(ve) ?? 0) + 1);
      if (Y.size / B.length < 0.12 && [...Y.values()].some((ve) => ve >= 56))
        return !0;
      for (let ve = 1; ve <= 4; ve += 1) {
        const Oe = $.slice(-ve).join("\0");
        let yt = 1;
        for (let _t = $.length - ve * 2; _t >= 0 && $.slice(_t, _t + ve).join("\0") === Oe; _t -= ve)
          yt += 1;
        if (yt >= Math.max(24, Math.ceil(72 / ve))) return !0;
      }
      return !1;
    }, si = () => {
      se || (Q.value = Date.now(), se = setInterval(() => {
        Q.value = Date.now();
      }, gE));
    }, ds = () => {
      se && (clearInterval(se), se = null, Q.value = Date.now());
    }, li = async (d) => {
      const k = performance.now(), w = yd();
      let $ = Qr(), B = "", Y = null, oe = null, ve = !1, Oe = !1;
      if (P.value = w, f.value = !1, $ = await Kf($, d), f.value) {
        d.streaming = !1, d.stopped = !0, d.elapsedMs = performance.now() - k, P.value = null;
        return;
      }
      $ = mt($), d.promptTokens = $e($), d.contextSize = E.value;
      const yt = async () => {
        if (!B) {
          Y = null, oe?.(), oe = null;
          return;
        }
        const tt = f.value ? 1200 : B.length > 4e3 ? 900 : B.length > 1200 ? 520 : B.length > 240 ? 180 : 64;
        d.content += B.slice(0, tt), B = B.slice(tt), d.estimatedCompletionTokens = ae(
          d.content
        ), !Oe && !f.value && Yf(d.content) && (Oe = !0, f.value = !0, d.repetitionStopped = !0, bs(w).catch(
          (Lo) => Rt.warn("[LocalAI] repetition stop failed", Lo)
        )), await st(), Y = window.setTimeout(() => {
          yt().catch(
            (Lo) => Rt.warn("[LocalAI] stream pump failed", Lo)
          );
        }, hE);
      }, _t = (tt) => {
        tt && (_(d, tt), B += tt, Y === null && (Y = window.setTimeout(() => {
          yt().catch(
            (Lo) => Rt.warn("[LocalAI] stream pump failed", Lo)
          );
        }, 32)));
      }, Jr = async () => {
        !B && Y === null || await new Promise((tt) => {
          oe = tt;
        });
      }, _r = await ag(
        {
          messages: $,
          maxTokens: qf($),
          enableThinking: d.allowThinking === !0
        },
        (tt) => {
          ve = !0, _t(tt);
        },
        {
          requestId: w,
          onStats: (tt) => {
            d.stats = {
              ...d.stats ?? {},
              ...tt
            }, tt.ctxSize && (d.contextSize = tt.ctxSize), tt.completionTokens !== void 0 && (d.estimatedCompletionTokens = tt.completionTokens), Q.value = Date.now();
          }
        }
      ).catch(async (tt) => {
        throw await Jr(), tt;
      });
      if (!ve)
        _t(_r.content);
      else if (!f.value) {
        const tt = d.content.length + B.length;
        _r.content.length > tt && _t(_r.content.slice(tt));
      }
      await Jr(), !f.value && _r.content && d.content !== _r.content && (d.content = _r.content), d.estimatedCompletionTokens = d.stats?.completionTokens ?? ae(d.content), W.delete(d.id), d.streaming = !1, d.elapsedMs = performance.now() - k, d.stopped = f.value, d.interrupted = !1, d.error = "", Q.value = Date.now(), P.value = null;
    }, Zf = async () => {
      const d = P.value;
      if (!(!i.value || !d || f.value)) {
        f.value = !0;
        try {
          await bs(d);
        } catch (k) {
          Rt.warn("[LocalAI] cancel stream failed", k);
        }
      }
    }, Xf = (d) => {
      d.isComposing || d.keyCode === 229 || d.key === "Enter" && !d.shiftKey && (d.preventDefault(), ii());
    }, Qf = () => {
      if (!s.value.trim() && !c.value.length) return !1;
      if (c.value.find(
        ($) => $.status === "pending"
      ))
        return rt.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const k = c.value.find(
        ($) => $.status === "error" || $.type === "unsupported"
      );
      return k ? (rt.msg(
        `${t("localAi.attachmentErrorBlock")}: ${k.name}`,
        "warning"
      ), !1) : c.value.some(
        ($) => $.type === "image"
      ) && !T.value ? (rt.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, ii = async () => {
      const d = s.value.trim();
      if (i.value || !Qf()) return;
      pn();
      const k = (/* @__PURE__ */ new Date()).toISOString(), w = c.value.map((Oe) => ({
        ...Oe
      })), $ = d || w[0]?.name || "", B = Te.value;
      if (!B) return;
      const Y = Je(B, {
        id: Le("user"),
        role: "user",
        content: d,
        createdAt: k,
        attachments: w
      }), oe = Je(B, {
        id: Le("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: Y.id,
        streaming: !0,
        allowThinking: m.value && we.value,
        webSearchStatus: y.value ? "searching" : void 0,
        contextSize: E.value,
        promptTokens: $e(Qr())
      });
      s.value = "", c.value = [], i.value = !0, si(), await st({ force: !0 });
      const ve = performance.now();
      try {
        await li(oe), Te.value && (Te.value.title = Te.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : Te.value.title, Te.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Te.value.updatedAtLabel = new Date(
          Te.value.updatedAt
        ).toLocaleString(), await ln()), await Kn();
      } catch (Oe) {
        if (!f.value) {
          s.value = d, c.value = w;
          const yt = ai(Oe);
          rt.msg(`${t("localAi.chatFailed")}: ${yt}`, "error"), oe.error = yt, oe.interrupted = !!oe.content.trim(), oe.interrupted || (oe.content = yt), Te.value && (Te.value.title = Te.value.title === t("localAi.newChatTitle") ? $.slice(0, 28) : Te.value.title, Te.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Te.value.updatedAtLabel = new Date(
            Te.value.updatedAt
          ).toLocaleString(), await ln());
        }
        oe.streaming = !1, W.delete(oe.id), oe.elapsedMs = performance.now() - ve;
      } finally {
        i.value = !1, P.value = null, ds(), await st();
      }
    }, Jf = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, ep = (d) => {
      const k = new Date(d), w = /* @__PURE__ */ new Date(), $ = w.getTime() - k.getTime(), B = 24 * 60 * 60 * 1e3;
      return k.toDateString() === w.toDateString() ? k.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : $ < B * 2 ? t("localAi.yesterday") : $ < B * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor($ / B))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor($ / (B * 7)))
      });
    }, ci = async (d) => {
      try {
        await navigator.clipboard.writeText(d.content), rt.msg(t("localAi.copied"));
      } catch (k) {
        rt.msg(`${t("common.operationFailed")}: ${k}`, "error");
      }
    }, tp = (d, k) => {
      const w = Fe(d), $ = /* @__PURE__ */ new Set([k]), B = (Y) => {
        const oe = w.get(Y);
        for (const ve of oe?.childIds ?? [])
          $.add(ve), B(ve);
      };
      return B(k), $;
    }, ui = async (d) => {
      const k = Te.value;
      if (!k) return;
      const w = k.messages.find((B) => B.id === d);
      if (!w || De(w)) return;
      const $ = tp(k.messages, d);
      k.messages = k.messages.filter((B) => !$.has(B.id)).map((B) => ({
        ...B,
        childIds: (B.childIds ?? []).filter((Y) => !$.has(Y))
      })), k.currentNodeId && $.has(k.currentNodeId) && (k.currentNodeId = ye(k.messages, w.parentId) ?? xe(k.messages)?.id ?? null), k.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.updatedAtLabel = new Date(k.updatedAt).toLocaleString(), await ln();
    }, di = (d) => {
      s.value = d.content, Te.value && d.parentId && (Te.value.currentNodeId = d.parentId);
    }, fi = (d) => t("localAi.messageVersion", {
      current: d.siblingCurrentIndex + 1,
      total: d.siblingLeafNodeIds.length
    }), pi = (d, k) => {
      const w = Te.value;
      if (!w) return;
      const $ = d.siblingCurrentIndex + k, B = d.siblingLeafNodeIds[$];
      B && (w.currentNodeId = B, p.value = !0, st({ force: !0 }));
    }, np = async (d) => {
      const k = Te.value;
      if (!k || i.value) return;
      const w = k.messages.find((Oe) => Oe.id === d);
      if (!w || w.role !== "assistant") return;
      const $ = Ce(k.messages, w.id);
      if (!$.length) return;
      const B = (/* @__PURE__ */ new Date()).toISOString(), Y = /* @__PURE__ */ new Map(), oe = $.map((Oe, yt) => {
        const _t = Le(yt === 0 ? "root" : Oe.role);
        return Y.set(Oe.id, _t), {
          ...Oe,
          id: _t,
          parentId: Oe.parentId ? Y.get(Oe.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Oe.attachments?.map((Jr) => ({ ...Jr }))
        };
      });
      for (let Oe = 0; Oe < oe.length - 1; Oe += 1)
        oe[Oe].childIds = [oe[Oe + 1].id];
      const ve = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${k.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: B,
        updatedAt: B,
        updatedAtLabel: A(),
        currentNodeId: oe.at(-1)?.id ?? null,
        messages: oe
      };
      r.value.unshift(ve), o.value = ve.id, s.value = "", c.value = [], p.value = !0, await ln(), await st({ force: !0 }), rt.msg(t("localAi.branchCreated"));
    }, rp = async (d) => {
      const k = Te.value;
      if (!k || i.value) return;
      const w = k.messages.find((Y) => Y.id === d);
      if (!w || w.role !== "assistant" || !w.parentId) return;
      k.currentNodeId = w.parentId;
      const $ = Je(k, {
        id: Le("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: w.parentId,
        streaming: !0,
        allowThinking: m.value && we.value,
        webSearchStatus: y.value ? "searching" : void 0,
        promptTokens: $e(Qr())
      });
      i.value = !0, si(), await st({ force: !0 });
      const B = performance.now();
      try {
        await li($), k.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.updatedAtLabel = new Date(k.updatedAt).toLocaleString(), await ln();
      } catch (Y) {
        if (!f.value) {
          const oe = ai(Y);
          rt.msg(`${t("localAi.chatFailed")}: ${oe}`, "error"), $.error = oe, $.interrupted = !!$.content.trim(), $.interrupted || ($.content = oe), k.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.updatedAtLabel = new Date(k.updatedAt).toLocaleString(), await ln();
        }
        $.streaming = !1, W.delete($.id), $.elapsedMs = performance.now() - B;
      } finally {
        i.value = !1, P.value = null, ds(), await st();
      }
    };
    return Tt(async () => {
      await qn();
      try {
        b = await fl(
          "local-ai-agent-reach-progress",
          (d) => {
            v.value = d.payload;
          }
        );
      } catch (d) {
        Rt.warn("[LocalAI] listen Agent-Reach progress failed", d);
      }
      ue = setInterval(() => {
        Kn().catch(
          (d) => Rt.warn("[LocalAI] status timer failed", d)
        );
      }, 8e3);
    }), Ie(we, (d) => {
      d || (m.value = !1);
    }), Wa(() => {
      b?.(), b = null, ue && clearInterval(ue), be !== null && (window.cancelAnimationFrame(be), be = null), P.value && bs(P.value), H.clear(), ee.clear(), W.clear(), ds();
    }), (d, k) => (R(), j(
      "main",
      {
        class: K([
          "local-ai-chat-shell",
          l(a) ? "local-ai-chat-shell--sidebar-collapsed" : ""
        ])
      },
      [
        g(
          "aside",
          {
            class: K([
              "chat-sidebar",
              l(a) ? "chat-sidebar--collapsed" : ""
            ])
          },
          [
            g("header", IT, [
              g("div", LT, [
                g(
                  "h2",
                  null,
                  M(l(t)("localAi.chatTitle")),
                  1
                  /* TEXT */
                )
              ]),
              g("button", {
                class: "icon-action-btn sidebar-collapse-btn",
                type: "button",
                title: l(a) ? l(t)("localAi.expandSidebar") : l(t)("localAi.collapseSidebar"),
                "aria-pressed": l(a),
                onClick: k[0] || (k[0] = (w) => a.value = !l(a))
              }, [
                z(l(vi), {
                  theme: "outline",
                  size: "17"
                })
              ], 8, OT)
            ]),
            g("div", xT, [
              g("button", {
                class: "sidebar-nav-item",
                type: "button",
                onClick: En
              }, [
                z(l(ps), {
                  theme: "outline",
                  size: "18"
                }),
                g(
                  "span",
                  null,
                  M(l(t)("localAi.newChat")),
                  1
                  /* TEXT */
                )
              ]),
              g("label", RT, [
                z(l(ms), {
                  theme: "outline",
                  size: "18"
                }),
                xt(g("input", {
                  "onUpdate:modelValue": k[1] || (k[1] = (w) => io(n) ? n.value = w : null),
                  placeholder: l(t)("localAi.searchHistory")
                }, null, 8, NT), [
                  [Go, l(n)]
                ])
              ])
            ]),
            g("section", PT, [
              g("div", $T, [
                g(
                  "div",
                  MT,
                  M(l(t)("localAi.recent")),
                  1
                  /* TEXT */
                ),
                g("button", {
                  class: "icon-action-btn",
                  type: "button",
                  title: l(t)("plugins.refresh"),
                  onClick: qn
                }, [
                  z(l(bi), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, DT)
              ]),
              l(pe).length ? (R(), j("div", FT, [
                (R(!0), j(
                  gt,
                  null,
                  Nn(l(pe), (w) => (R(), j("div", {
                    key: w.id,
                    class: K([
                      "chat-list-item",
                      l(o) === w.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: ($) => Kt(w.id),
                    onKeydown: bn(it(($) => Kt(w.id), ["prevent"]), ["enter"])
                  }, [
                    g(
                      "span",
                      BT,
                      M(w.title),
                      1
                      /* TEXT */
                    ),
                    g(
                      "span",
                      VT,
                      M(ep(w.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    g("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: l(t)("common.delete"),
                      onClick: it(($) => An(w.id), ["stop"])
                    }, [
                      z(l(da), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, UT)
                  ], 42, zT))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (R(), j(
                "div",
                jT,
                M(l(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            g("footer", WT, [
              g("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: Jf
              }, [
                z(l(Nu), {
                  theme: "outline",
                  size: "16"
                }),
                g(
                  "span",
                  null,
                  M(l(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              g("div", HT, [
                g(
                  "span",
                  {
                    class: K([
                      "status-pill",
                      l(O)?.healthy ? "ready" : "stopped"
                    ])
                  },
                  [
                    k[9] || (k[9] = g(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    )),
                    tn(
                      " " + M(l(Qe)),
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
        g("section", GT, [
          l(a) ? (R(), j("button", {
            key: 0,
            class: "panel-sidebar-toggle",
            type: "button",
            title: l(t)("localAi.expandSidebar"),
            onClick: k[2] || (k[2] = (w) => a.value = !1)
          }, [
            z(l(vi), {
              theme: "outline",
              size: "17"
            })
          ], 8, KT)) : ne("v-if", !0),
          g(
            "div",
            {
              ref_key: "messageListRef",
              ref: J,
              class: "message-list",
              onScroll: at
            },
            [
              l(ft).length ? ne("v-if", !0) : (R(), j("div", qT, [
                z(l(yi), {
                  theme: "outline",
                  size: "28"
                }),
                g(
                  "div",
                  YT,
                  M(l(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                g(
                  "div",
                  ZT,
                  M(l(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (R(!0), j(
                gt,
                null,
                Nn(l(pt), (w, $) => (R(), j(
                  gt,
                  {
                    key: w.message.id
                  },
                  [
                    Xr($) ? (R(), j("div", XT, [
                      g(
                        "span",
                        null,
                        M(us(w.message)),
                        1
                        /* TEXT */
                      )
                    ])) : ne("v-if", !0),
                    g(
                      "article",
                      {
                        class: K(["message-row", `message-row--${w.message.role}`])
                      },
                      [
                        g("div", QT, [
                          w.message.role === "assistant" ? (R(), fe(l(yi), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (R(), j(
                            "span",
                            JT,
                            M(l(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        g("div", e2, [
                          w.message.role === "user" ? (R(), j(
                            gt,
                            { key: 0 },
                            [
                              g("div", t2, [
                                w.message.content ? (R(), j(
                                  "div",
                                  n2,
                                  M(w.message.content),
                                  1
                                  /* TEXT */
                                )) : ne("v-if", !0),
                                w.message.attachments?.length ? (R(), j("div", r2, [
                                  (R(!0), j(
                                    gt,
                                    null,
                                    Nn(w.message.attachments, (B) => (R(), j(
                                      "div",
                                      {
                                        key: B.id,
                                        class: K([
                                          "message-attachment-chip",
                                          B.type === "image" && B.dataUrl ? "message-attachment-chip--image" : ""
                                        ])
                                      },
                                      [
                                        B.type === "image" && B.dataUrl ? (R(), j("figure", {
                                          key: 0,
                                          title: B.name
                                        }, [
                                          g("img", {
                                            src: B.dataUrl,
                                            alt: B.name
                                          }, null, 8, a2)
                                        ], 8, o2)) : (R(), j(
                                          "span",
                                          s2,
                                          M(B.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        B.type === "image" && B.dataUrl ? ne("v-if", !0) : (R(), j(
                                          "span",
                                          l2,
                                          M(B.name),
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
                                ])) : ne("v-if", !0)
                              ]),
                              w.message.streaming ? ne("v-if", !0) : (R(), j("div", i2, [
                                g("button", {
                                  type: "button",
                                  title: l(t)("common.copy"),
                                  onClick: (B) => ci(w.message)
                                }, [
                                  z(l(hi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, c2),
                                g("button", {
                                  type: "button",
                                  title: l(t)("common.edit"),
                                  onClick: (B) => di(w.message)
                                }, [
                                  z(l(ps), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, u2),
                                g("button", {
                                  type: "button",
                                  title: l(t)("common.delete"),
                                  onClick: (B) => ui(w.message.id)
                                }, [
                                  z(l(da), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, d2)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (R(), j(
                            gt,
                            { key: 1 },
                            [
                              g("div", f2, [
                                g(
                                  "span",
                                  null,
                                  M(l(Z)),
                                  1
                                  /* TEXT */
                                ),
                                w.message.streaming ? (R(), j(
                                  "small",
                                  p2,
                                  M(ca(w.message)),
                                  1
                                  /* TEXT */
                                )) : ne("v-if", !0)
                              ]),
                              g(
                                "div",
                                {
                                  class: K(["assistant-card", {
                                    "assistant-card--streaming": w.message.streaming
                                  }])
                                },
                                [
                                  w.message.content ? (R(), j("div", m2, [
                                    w.message.allowThinking && Ao(w.message.content) ? (R(), j("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: w.message.streaming && ke(w.message)
                                    }, [
                                      g("summary", null, [
                                        g("span", g2, [
                                          z(l(mi), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          tn(
                                            " " + M(Et(w.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        w.message.streaming ? (R(), j(
                                          "small",
                                          v2,
                                          M(ke(w.message) ? l(t)("localAi.thinking") : l(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : ne("v-if", !0)
                                      ]),
                                      g("div", {
                                        class: "message-content markdown-body",
                                        onClick: Pr,
                                        innerHTML: Xn(w.message, "reasoning")
                                      }, null, 8, b2)
                                    ], 8, h2)) : ne("v-if", !0),
                                    Ft(w.message.content) ? (R(), j("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: Pr,
                                      innerHTML: Xn(w.message, "answer")
                                    }, null, 8, y2)) : ne("v-if", !0)
                                  ])) : (R(), j(
                                    "div",
                                    _2,
                                    M(ua(w.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              Qn(w.message) || w.message.webSearchResults?.length ? (R(), j("div", w2, [
                                g("div", k2, [
                                  z(l(ms), {
                                    theme: "outline",
                                    size: "14"
                                  }),
                                  g(
                                    "span",
                                    null,
                                    M(Qn(w.message)),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                w.message.webSearchResults?.length ? (R(), j("div", S2, [
                                  (R(!0), j(
                                    gt,
                                    null,
                                    Nn(w.message.webSearchResults, (B, Y) => (R(), j("a", {
                                      key: `${B.url}-${Y}`,
                                      class: "web-search-source",
                                      href: B.url,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      title: B.url
                                    }, [
                                      g(
                                        "span",
                                        null,
                                        M(Y + 1),
                                        1
                                        /* TEXT */
                                      ),
                                      g(
                                        "strong",
                                        null,
                                        M(B.title),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, T2))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])) : ne("v-if", !0)
                              ])) : ne("v-if", !0),
                              w.message.content ? (R(), j("div", E2, [
                                g(
                                  "span",
                                  A2,
                                  M(l(t)("localAi.contextLabel")) + ": " + M(Mr(w.message).context) + "/" + M(Mr(w.message).contextMax) + " (" + M(Mr(w.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                g(
                                  "span",
                                  C2,
                                  M(l(t)("localAi.outputLabel")) + ": " + M(Mr(w.message).output) + "/" + M(Mr(w.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                g(
                                  "span",
                                  I2,
                                  M(Mr(w.message).seconds) + "s ",
                                  1
                                  /* TEXT */
                                ),
                                g(
                                  "span",
                                  L2,
                                  M(Mr(w.message).speed) + " t/s ",
                                  1
                                  /* TEXT */
                                ),
                                w.message.streaming ? ne("v-if", !0) : (R(), j(
                                  "span",
                                  O2,
                                  M(zt(w.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : ne("v-if", !0),
                              oi(w.message) ? (R(), j(
                                "div",
                                x2,
                                M(oi(w.message)),
                                1
                                /* TEXT */
                              )) : ne("v-if", !0),
                              w.message.streaming ? ne("v-if", !0) : (R(), j("div", R2, [
                                w.siblingLeafNodeIds.length > 1 ? (R(), j("div", {
                                  key: 0,
                                  class: "message-version-switcher",
                                  title: fi(w),
                                  "aria-label": fi(w)
                                }, [
                                  g("button", {
                                    type: "button",
                                    disabled: w.siblingCurrentIndex <= 0,
                                    title: l(t)("localAi.previousVersion"),
                                    onClick: (B) => pi(w, -1)
                                  }, " ‹ ", 8, P2),
                                  g(
                                    "span",
                                    null,
                                    M(w.siblingCurrentIndex + 1) + " / " + M(w.siblingLeafNodeIds.length),
                                    1
                                    /* TEXT */
                                  ),
                                  g("button", {
                                    type: "button",
                                    disabled: w.siblingCurrentIndex >= w.siblingLeafNodeIds.length - 1,
                                    title: l(t)("localAi.nextVersion"),
                                    onClick: (B) => pi(w, 1)
                                  }, " › ", 8, $2)
                                ], 8, N2)) : ne("v-if", !0),
                                g("button", {
                                  type: "button",
                                  title: l(t)("common.copy"),
                                  onClick: (B) => ci(w.message)
                                }, [
                                  z(l(hi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, M2),
                                w.message.role === "assistant" ? (R(), j("button", {
                                  key: 1,
                                  type: "button",
                                  title: l(t)("localAi.regenerate"),
                                  onClick: (B) => rp(w.message.id)
                                }, [
                                  z(l(bi), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, D2)) : ne("v-if", !0),
                                w.message.role === "assistant" ? (R(), j("button", {
                                  key: 2,
                                  type: "button",
                                  title: l(t)("localAi.branchChat"),
                                  onClick: (B) => np(w.message.id)
                                }, [
                                  z(l(Ip), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, F2)) : ne("v-if", !0),
                                g("button", {
                                  type: "button",
                                  title: l(t)("common.edit"),
                                  onClick: (B) => di(w.message)
                                }, [
                                  z(l(ps), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, z2),
                                g("button", {
                                  type: "button",
                                  title: l(t)("common.delete"),
                                  onClick: (B) => ui(w.message.id)
                                }, [
                                  z(l(da), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, B2)
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
          l(L) ? (R(), j("button", {
            key: 1,
            class: "scroll-bottom-btn",
            type: "button",
            title: l(t)("localAi.jumpToLatest"),
            onClick: et
          }, [
            z(l(gi), {
              theme: "outline",
              size: "15"
            }),
            g(
              "span",
              null,
              M(l(t)("localAi.jumpToLatest")),
              1
              /* TEXT */
            )
          ], 8, V2)) : ne("v-if", !0),
          g(
            "form",
            {
              class: K([
                "chat-input-card",
                l(I) ? "chat-input-card--focused" : ""
              ]),
              onDragover: k[6] || (k[6] = it(() => {
              }, ["prevent"])),
              onDrop: it(So, ["prevent"]),
              onSubmit: it(ii, ["prevent"]),
              onFocusin: k[7] || (k[7] = (w) => I.value = !0),
              onFocusout: k[8] || (k[8] = (w) => I.value = !1)
            },
            [
              g(
                "input",
                {
                  ref_key: "fileInputRef",
                  ref: X,
                  class: "attachment-input",
                  type: "file",
                  multiple: "",
                  accept: ".txt,.md,.json,.csv,.html,.css,.js,.ts,.tsx,.vue,.rs,.py,.java,.go,.yaml,.yml,.toml,.xml,.log,image/png,image/jpeg,image/webp,.pdf,.doc,.docx,.xls,.xlsx",
                  onChange: Rr
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              l(c).length ? (R(), j("div", U2, [
                (R(!0), j(
                  gt,
                  null,
                  Nn(l(c), (w) => (R(), j(
                    "div",
                    {
                      key: w.id,
                      class: K([
                        "attachment-preview-item",
                        `attachment-preview-item--${w.status}`
                      ])
                    },
                    [
                      w.type === "image" && w.dataUrl ? (R(), j("img", {
                        key: 0,
                        src: w.dataUrl,
                        alt: w.name
                      }, null, 8, j2)) : (R(), j(
                        "span",
                        W2,
                        M(w.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      g("span", H2, [
                        g(
                          "strong",
                          null,
                          M(w.name),
                          1
                          /* TEXT */
                        ),
                        g(
                          "small",
                          null,
                          M(l(bg)(w.size)) + " · " + M(To(w)),
                          1
                          /* TEXT */
                        )
                      ]),
                      g("button", {
                        type: "button",
                        title: l(t)("common.delete"),
                        onClick: ($) => Zr(w.id)
                      }, [
                        z(l(da), {
                          theme: "outline",
                          size: "12"
                        })
                      ], 8, G2)
                    ],
                    2
                    /* CLASS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : ne("v-if", !0),
              xt(g("textarea", {
                "onUpdate:modelValue": k[3] || (k[3] = (w) => io(s) ? s.value = w : null),
                class: "chat-input",
                rows: "2",
                placeholder: l(t)("localAi.chatPlaceholder"),
                onKeydown: Xf,
                onPaste: Zn
              }, null, 40, K2), [
                [Go, l(s)]
              ]),
              g("div", q2, [
                g("div", Y2, [
                  g("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: l(t)("localAi.addAttachment"),
                    onClick: xr
                  }, [
                    z(l(Lp), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, Z2),
                  g("label", X2, [
                    xt(g("select", {
                      "onUpdate:modelValue": k[4] || (k[4] = (w) => io(x) ? x.value = w : null),
                      disabled: l(i) || !l(We).length,
                      onChange: Ke
                    }, [
                      (R(!0), j(
                        gt,
                        null,
                        Nn(l(We), (w) => (R(), j("option", {
                          key: w,
                          value: w
                        }, M(te(w)), 9, J2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      l(We).length ? ne("v-if", !0) : (R(), j(
                        "option",
                        eE,
                        M(l(Z)),
                        1
                        /* TEXT */
                      ))
                    ], 40, Q2), [
                      [Sp, l(x)]
                    ]),
                    z(l(gi), {
                      theme: "outline",
                      size: "14"
                    })
                  ]),
                  g("button", {
                    class: K([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      l(y) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: l(y) ? l(t)("localAi.webSearchEnabled") : l(t)("localAi.webSearchDisabled"),
                    "aria-pressed": l(y),
                    onClick: ie
                  }, [
                    z(l(ms), {
                      theme: "outline",
                      size: "15"
                    }),
                    g(
                      "span",
                      null,
                      M(l(t)("localAi.webSearchTitle")),
                      1
                      /* TEXT */
                    )
                  ], 10, tE),
                  l(we) ? (R(), j("button", {
                    key: 0,
                    class: K([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      l(m) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: l(m) ? l(t)("localAi.thinkingEnabled") : l(t)("localAi.thinkingDisabled"),
                    "aria-pressed": l(m),
                    onClick: k[5] || (k[5] = (w) => m.value = !l(m))
                  }, [
                    z(l(mi), {
                      theme: "outline",
                      size: "15"
                    }),
                    g(
                      "span",
                      null,
                      M(l(t)("localAi.reasoningTitle")),
                      1
                      /* TEXT */
                    )
                  ], 10, nE)) : ne("v-if", !0)
                ]),
                g("div", rE, [
                  k[10] || (k[10] = g(
                    "span",
                    { class: "input-hint" },
                    "Enter · Shift + Enter",
                    -1
                    /* HOISTED */
                  )),
                  l(i) ? (R(), j("button", {
                    key: 0,
                    class: "send-btn send-btn--stop",
                    type: "button",
                    title: l(t)("localAi.stopGenerating"),
                    "aria-label": l(t)("localAi.stopGenerating"),
                    onClick: Zf
                  }, [
                    z(l(xp), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, oE)) : (R(), j("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !l(vt),
                    title: l(t)("localAi.send"),
                    "aria-label": l(t)("localAi.send")
                  }, [
                    z(l(Op), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, aE))
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
}), ti = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, bE = /* @__PURE__ */ ti(vE, [["__scopeId", "data-v-573186a7"]]), yE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bE
}, Symbol.toStringTag, { value: "Module" }));
async function Iu(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Ot("plugin:dialog|open", { options: e });
}
const _E = ["disabled"], wE = {
  key: 0,
  class: "custom-button__loading"
}, kE = /* @__PURE__ */ le({
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
      e.loading ? (R(), j("div", wE, r[1] || (r[1] = [
        g(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            g("circle", {
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
      ]))) : ne("v-if", !0),
      Ae(n.$slots, "default", {}, void 0, !0)
    ], 10, _E));
  }
}), er = /* @__PURE__ */ ti(kE, [["__scopeId", "data-v-9497085f"]]), SE = { class: "settings-panel local-ai-settings-shell" }, TE = { class: "local-ai-hero panel-card" }, EE = { class: "panel-title" }, AE = { class: "hero-desc" }, CE = { class: "header-actions" }, IE = {
  key: 0,
  class: "settings-grid"
}, LE = { class: "summary-panel panel-card" }, OE = { class: "status-strip" }, xE = { class: "memory-card__header" }, RE = { class: "memory-metrics" }, NE = { class: "bottleneck-row" }, PE = { class: "summary-card" }, $E = { class: "summary-card__title" }, ME = { class: "summary-card__desc" }, DE = { class: "service-controls" }, FE = { class: "service-url" }, zE = { class: "summary-card" }, BE = { class: "summary-card__title" }, VE = { class: "summary-card__desc" }, UE = { class: "summary-meta" }, jE = { class: "form-panel panel-card" }, WE = { class: "settings-section" }, HE = { class: "settings-section__header" }, GE = { class: "field-stack" }, KE = ["title"], qE = { class: "path-control" }, YE = ["title"], ZE = ["title"], XE = ["title"], QE = { class: "path-control" }, JE = ["placeholder"], eA = { class: "settings-section grid-two" }, tA = { class: "settings-section__header" }, nA = { class: "param-grid" }, rA = ["title"], oA = ["title"], aA = ["title"], sA = ["title"], lA = ["title"], iA = ["title"], cA = { class: "agent-reach-card__header" }, uA = {
  key: 0,
  class: "agent-reach-phase"
}, dA = { class: "agent-reach-meta" }, fA = ["title"], pA = ["title"], mA = { class: "settings-section grid-two" }, hA = { class: "settings-section__header" }, gA = { class: "switch-grid" }, vA = ["title"], bA = ["title"], yA = ["title"], _A = { class: "settings-section grid-two" }, wA = { class: "settings-section__header" }, kA = { class: "switch-grid switch-grid--two" }, SA = ["title"], TA = ["title"], EA = ["title"], AA = ["title"], CA = { class: "settings-section grid-two" }, IA = { class: "settings-section__header" }, LA = { class: "param-grid param-grid--three" }, OA = ["title"], xA = ["title"], RA = ["title"], NA = ["title"], PA = ["title"], $A = ["title"], MA = ["title"], DA = ["title"], FA = { class: "settings-section grid-two" }, zA = { class: "settings-section__header" }, BA = { class: "param-grid" }, VA = ["title"], UA = ["title"], jA = { class: "settings-footer" }, WA = ["title"], HA = /* @__PURE__ */ le({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = na(), n = q(null), r = q(null), o = q(null), a = q(null), s = q(null), c = q(null), i = q(!1), u = q(!1), f = q(!1), m = q(!1), h = q(!1), y = q(!1);
    let v = null, b = null;
    const I = N(() => !!c.value?.selectedModelPath), p = N(() => !!n.value?.mmprojPath), L = N({
      get: () => n.value?.modelPath ?? "",
      set: (te) => {
        n.value && (n.value.modelPath = te || void 0);
      }
    }), P = N({
      get: () => n.value?.mmprojPath ?? "",
      set: (te) => {
        n.value && (n.value.mmprojPath = te || void 0);
      }
    }), C = N(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), S = N(
      () => I.value ? t("localAi.modelReady") : c.value?.message ?? t("localAi.modelMissing")
    ), x = N(() => s.value?.healthy ? t("localAi.serviceHealthy") : s.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), O = (te) => te.split(/[\\/]+/).pop() ?? te, J = N(() => {
      const Z = O(
        n.value?.modelPath ?? c.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return Z ? Number(Z[1]) : 4;
    }), X = N(() => {
      const te = n.value;
      if (!te)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown"),
          level: "warn"
        };
      const Z = Math.max(1.4, J.value * 0.92), We = Math.min(1, Math.max(0, te.gpuLayers) / 32), T = te.ctxSize / 8192 * 0.38 * (te.kvOffload ? 1 : 0.12), E = te.batchSize / 512 * 0.18, V = Z * We + T + E, F = Z * (1 - We) + te.ctxSize / 8192 * 0.22, we = V + F, pe = te.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : te.ctxSize >= 32768 || te.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced"), A = we >= 24 || te.ctxSize >= 32768 || te.batchSize >= 2048 ? "danger" : we >= 16 || te.ctxSize >= 16384 || te.batchSize >= 1024 ? "warn" : "ok";
      return {
        gpuGb: V.toFixed(2),
        totalGb: we.toFixed(2),
        bottleneck: pe,
        level: A
      };
    }), Q = (te) => t(`localAi.paramHints.${te}`), ue = (te) => ({
      "tone-ok": te === "ok",
      "tone-warn": te === "warn",
      "tone-danger": te === "danger"
    }), se = (te) => ue(te ? "ok" : "danger"), be = N(() => o.value?.ready ? "ok" : o.value?.installing || a.value ? "warn" : "danger"), _e = N(() => o.value?.ready ? t("localAi.agentReachReady") : o.value?.installing || a.value ? t("localAi.agentReachPreparing") : t("localAi.agentReachMissing")), H = N(() => {
      const te = o.value?.source ?? "missing", Z = `localAi.agentReachSources.${te}`, We = t(Z);
      return We === Z ? te : We;
    }), ee = N(
      () => a.value?.message ?? o.value?.message ?? ""
    ), W = N(() => {
      const te = a.value?.progress;
      return typeof te == "number" ? Math.max(0, Math.min(100, Math.round(te))) : void 0;
    }), he = N(
      () => !!a.value && a.value?.phase !== "ready"
    ), me = N(
      () => o.value?.agentReachPath ? O(o.value.agentReachPath) : "-"
    ), Le = N(
      () => o.value?.managedRoot ? O(o.value.managedRoot) : "-"
    ), De = async () => {
      r.value = await ng();
    }, Fe = async () => {
      o.value = await sg();
    }, xe = async () => {
      s.value = await vd();
    }, ye = async () => {
      n.value && (c.value = await gd(n.value), !n.value.modelPath && c.value.selectedModelPath && (n.value.modelPath = c.value.selectedModelPath), !n.value.mmprojPath && c.value.selectedMmprojPath && (n.value.mmprojPath = c.value.selectedMmprojPath));
    }, Xe = async () => {
      i.value = !0;
      try {
        n.value = await hd(), await Promise.all([
          De(),
          ye(),
          xe(),
          Fe()
        ]);
      } catch (te) {
        Rt.error("[LocalAI] refresh settings failed", te), rt.msg(`${t("localAi.refreshFailed")}: ${te}`, "error");
      } finally {
        i.value = !1;
      }
    }, Ce = async () => {
      if (n.value)
        try {
          await zo(n.value);
        } catch (te) {
          Rt.warn("[LocalAI] autosave failed", te);
        }
    }, Ze = async () => {
      if (n.value) {
        u.value = !0;
        try {
          n.value = await zo(n.value), await Promise.all([
            De(),
            ye(),
            xe(),
            Fe()
          ]), rt.msg(t("localAi.configSaved"));
        } catch (te) {
          rt.msg(`${t("localAi.configSaveFailed")}: ${te}`, "error");
        } finally {
          u.value = !1;
        }
      }
    }, ge = async () => {
      const te = await Iu({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !te || Array.isArray(te) || !n.value || (n.value.modelDir = te, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await ye());
    }, Je = async () => {
      const te = await Iu({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !te || Array.isArray(te) || !n.value || (n.value.runtimePath = te, await Ce(), await De());
    }, vt = async () => {
      if (n.value) {
        f.value = !0;
        try {
          await zo(n.value), s.value = await rg(n.value), rt.msg(t("localAi.serviceStarted"));
        } catch (te) {
          rt.msg(`${t("localAi.serviceStartFailed")}: ${te}`, "error");
        } finally {
          f.value = !1;
        }
      }
    }, Qe = async () => {
      m.value = !0;
      try {
        await Ze(), s.value = await bd(), rt.msg(t("localAi.serviceRestarted"));
      } catch (te) {
        rt.msg(`${t("localAi.serviceRestartFailed")}: ${te}`, "error");
      } finally {
        m.value = !1;
      }
    }, Te = async () => {
      h.value = !0;
      try {
        await og(), await xe(), rt.msg(t("localAi.serviceStoppedMsg"));
      } catch (te) {
        rt.msg(`${t("localAi.serviceStopFailed")}: ${te}`, "error");
      } finally {
        h.value = !1;
      }
    }, ft = async () => {
      if (n.value) {
        y.value = !0;
        try {
          n.value = await zo(n.value);
          const te = await _d({
            query: t("localAi.webSearchTestQuery"),
            maxResults: 1
          });
          rt.msg(
            te.results.length ? t("localAi.webSearchTestSuccess", {
              count: te.results.length
            }) : t("localAi.webSearchTestEmpty")
          ), await Fe();
        } catch (te) {
          Rt.warn("[LocalAI] web search test failed", te), rt.msg(`${t("localAi.webSearchTestFailed")}: ${te}`, "error");
        } finally {
          y.value = !1;
        }
      }
    }, pt = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return Tt(async () => {
      await Xe();
      try {
        b = await fl(
          "local-ai-agent-reach-progress",
          (te) => {
            a.value = te.payload, (te.payload.phase === "ready" || te.payload.phase === "failed") && Fe().catch(
              (Z) => Rt.warn("[LocalAI] refresh Agent-Reach status failed", Z)
            );
          }
        );
      } catch (te) {
        Rt.warn("[LocalAI] listen Agent-Reach progress failed", te);
      }
      v = setInterval(() => {
        Promise.all([xe(), Fe()]).catch(
          (te) => Rt.warn("[LocalAI] status timer failed", te)
        );
      }, 15e3);
    }), Wa(() => {
      v && clearInterval(v), b?.(), b = null;
    }), (te, Z) => {
      const We = HS, T = WS, E = IS, V = QS;
      return R(), j("div", SE, [
        g("header", TE, [
          g("div", null, [
            g(
              "h3",
              EE,
              M(l(t)("localAi.title")),
              1
              /* TEXT */
            ),
            g(
              "p",
              AE,
              M(l(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          g("div", CE, [
            z(l(er), {
              size: "small",
              plain: "",
              onClick: pt
            }, {
              default: de(() => [
                tn(
                  M(l(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            z(l(er), {
              size: "small",
              loading: l(i),
              onClick: Xe
            }, {
              default: de(() => [
                tn(
                  M(l(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        l(n) ? (R(), j("main", IE, [
          g("aside", LE, [
            g("div", OE, [
              g(
                "div",
                {
                  class: K(["status-item", ue(l(r)?.available ? "ok" : "danger")])
                },
                [
                  Z[27] || (Z[27] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    M(l(C)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              g(
                "div",
                {
                  class: K(["status-item", ue(l(I) ? "ok" : "danger")])
                },
                [
                  Z[28] || (Z[28] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    M(l(S)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              g(
                "div",
                {
                  class: K([
                    "status-item",
                    ue(
                      l(s)?.healthy ? "ok" : l(s)?.running ? "warn" : "danger"
                    )
                  ])
                },
                [
                  Z[29] || (Z[29] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    M(l(x)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            g(
              "section",
              {
                class: K(["memory-card", ue(l(X).level)])
              },
              [
                g("div", xE, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.estimatedMemory")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "small",
                    null,
                    M(l(t)("localAi.estimateBeta")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", RE, [
                  g("div", null, [
                    Z[30] || (Z[30] = g(
                      "span",
                      null,
                      "GPU",
                      -1
                      /* HOISTED */
                    )),
                    g(
                      "b",
                      {
                        class: K(ue(l(X).level))
                      },
                      M(l(X).gpuGb) + " GB ",
                      3
                      /* TEXT, CLASS */
                    )
                  ]),
                  g("div", null, [
                    g(
                      "span",
                      null,
                      M(l(t)("localAi.total")),
                      1
                      /* TEXT */
                    ),
                    g(
                      "b",
                      {
                        class: K(ue(l(X).level))
                      },
                      M(l(X).totalGb) + " GB ",
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ]),
                g("div", NE, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.bottleneck")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    {
                      class: K(ue(l(X).level))
                    },
                    M(l(X).bottleneck),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            ),
            g("section", PE, [
              g(
                "div",
                $E,
                M(l(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              g(
                "div",
                ME,
                M(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              g("div", DE, [
                z(l(er), {
                  type: "primary",
                  size: "small",
                  loading: l(f),
                  disabled: l(s)?.running,
                  onClick: vt
                }, {
                  default: de(() => [
                    tn(
                      M(l(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                z(l(er), {
                  size: "small",
                  loading: l(m),
                  disabled: !l(s)?.running,
                  onClick: Qe
                }, {
                  default: de(() => [
                    tn(
                      M(l(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                z(l(er), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: l(h),
                  disabled: !l(s)?.running,
                  onClick: Te
                }, {
                  default: de(() => [
                    tn(
                      M(l(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              g(
                "div",
                FE,
                M(l(s)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            g("section", zE, [
              g(
                "div",
                BE,
                M(l(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              g(
                "div",
                VE,
                M(l(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              g("div", UE, [
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    {
                      class: K(se(l(r)?.available))
                    },
                    M(l(r)?.available ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    {
                      class: K(se(l(I)))
                    },
                    M(l(I) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    {
                      class: K(se(!!l(L)))
                    },
                    M(l(L) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    {
                      class: K(se(!!l(P)))
                    },
                    M(l(P) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    {
                      class: K(se(l(p)))
                    },
                    M(l(p) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    {
                      class: K(se(!!l(s)?.healthy))
                    },
                    M(l(s)?.healthy ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ])
            ])
          ]),
          g("section", jE, [
            g("div", WE, [
              g("div", HE, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(l(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(l(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", GE, [
                g("label", {
                  class: "field-row",
                  title: Q("modelDir")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  g("div", qE, [
                    xt(g(
                      "input",
                      {
                        "onUpdate:modelValue": Z[0] || (Z[0] = (F) => l(n).modelDir = F),
                        class: "text-input",
                        onChange: ye
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Go, l(n).modelDir]
                    ]),
                    z(l(er), {
                      size: "small",
                      plain: "",
                      onClick: ge
                    }, {
                      default: de(() => [
                        tn(
                          M(l(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, KE),
                g("label", {
                  class: "field-row",
                  title: Q("mainModel")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  z(T, {
                    modelValue: l(L),
                    "onUpdate:modelValue": Z[1] || (Z[1] = (F) => io(L) ? L.value = F : null),
                    class: "field-select",
                    clearable: "",
                    onChange: Ce
                  }, {
                    default: de(() => [
                      (R(!0), j(
                        gt,
                        null,
                        Nn(l(c)?.mainModels ?? [], (F) => (R(), fe(We, {
                          key: F,
                          label: O(F),
                          value: F
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, YE),
                g("label", {
                  class: "field-row",
                  title: Q("mmprojModel")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  z(T, {
                    modelValue: l(P),
                    "onUpdate:modelValue": Z[2] || (Z[2] = (F) => io(P) ? P.value = F : null),
                    class: "field-select",
                    clearable: "",
                    onChange: Ce
                  }, {
                    default: de(() => [
                      (R(!0), j(
                        gt,
                        null,
                        Nn(l(c)?.mmprojModels ?? [], (F) => (R(), fe(We, {
                          key: F,
                          label: O(F),
                          value: F
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, ZE),
                g("label", {
                  class: "field-row",
                  title: Q("runtimePath")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  g("div", QE, [
                    xt(g("input", {
                      "onUpdate:modelValue": Z[3] || (Z[3] = (F) => l(n).runtimePath = F),
                      class: "text-input",
                      placeholder: l(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, JE), [
                      [Go, l(n).runtimePath]
                    ]),
                    z(l(er), {
                      size: "small",
                      plain: "",
                      onClick: Je
                    }, {
                      default: de(() => [
                        tn(
                          M(l(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, XE)
              ])
            ]),
            g("div", eA, [
              g("div", tA, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(l(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(l(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", nA, [
                g("label", {
                  class: "number-field",
                  title: Q("ctxSize")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).ctxSize,
                    "onUpdate:modelValue": Z[4] || (Z[4] = (F) => l(n).ctxSize = F),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, rA),
                g("label", {
                  class: "number-field",
                  title: Q("gpuLayers")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).gpuLayers,
                    "onUpdate:modelValue": Z[5] || (Z[5] = (F) => l(n).gpuLayers = F),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, oA),
                g("label", {
                  class: "number-field",
                  title: Q("threads")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).threads,
                    "onUpdate:modelValue": Z[6] || (Z[6] = (F) => l(n).threads = F),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, aA),
                g("label", {
                  class: "number-field",
                  title: Q("batchSize")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).batchSize,
                    "onUpdate:modelValue": Z[7] || (Z[7] = (F) => l(n).batchSize = F),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, sA),
                g("label", {
                  class: "number-field",
                  title: Q("ubatchSize")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).ubatchSize,
                    "onUpdate:modelValue": Z[8] || (Z[8] = (F) => l(n).ubatchSize = F),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, lA),
                g("label", {
                  class: "number-field",
                  title: Q("mainGpu")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).mainGpu,
                    "onUpdate:modelValue": Z[9] || (Z[9] = (F) => l(n).mainGpu = F),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, iA)
              ]),
              g(
                "div",
                {
                  class: K(["agent-reach-card", ue(l(be))])
                },
                [
                  g("div", cA, [
                    g(
                      "div",
                      {
                        class: K(["status-item", ue(l(be))])
                      },
                      [
                        Z[31] || (Z[31] = g(
                          "span",
                          { class: "status-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        g(
                          "span",
                          null,
                          M(l(_e)),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    ),
                    l(ee) ? (R(), j(
                      "span",
                      uA,
                      M(l(ee)),
                      1
                      /* TEXT */
                    )) : ne("v-if", !0)
                  ]),
                  l(he) ? (R(), j(
                    "div",
                    {
                      key: 0,
                      class: K(["agent-reach-progress-track", {
                        "agent-reach-progress-track--indeterminate": l(W) === void 0
                      }])
                    },
                    [
                      g(
                        "div",
                        {
                          class: "agent-reach-progress-bar",
                          style: $t({
                            width: l(W) === void 0 ? "35%" : `${l(W)}%`
                          })
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ],
                    2
                    /* CLASS */
                  )) : ne("v-if", !0),
                  g("div", dA, [
                    g("div", null, [
                      g(
                        "span",
                        null,
                        M(l(t)("localAi.agentReachSource")),
                        1
                        /* TEXT */
                      ),
                      g(
                        "b",
                        null,
                        M(l(H)),
                        1
                        /* TEXT */
                      )
                    ]),
                    g("div", null, [
                      g(
                        "span",
                        null,
                        M(l(t)("localAi.agentReachResourcePackage")),
                        1
                        /* TEXT */
                      ),
                      g(
                        "b",
                        {
                          class: K(se(l(o)?.runtimeResourceAvailable))
                        },
                        M(l(o)?.runtimeResourceAvailable ? l(t)("localAi.agentReachResourceAvailable") : l(t)("localAi.agentReachResourceMissing")),
                        3
                        /* TEXT, CLASS */
                      )
                    ]),
                    g("div", null, [
                      g(
                        "span",
                        null,
                        M(l(t)("localAi.agentReachExecutable")),
                        1
                        /* TEXT */
                      ),
                      g("b", {
                        title: l(o)?.agentReachPath ?? ""
                      }, M(l(me)), 9, fA)
                    ]),
                    g("div", null, [
                      g(
                        "span",
                        null,
                        M(l(t)("localAi.agentReachManagedRoot")),
                        1
                        /* TEXT */
                      ),
                      g("b", {
                        title: l(o)?.managedRoot ?? ""
                      }, M(l(Le)), 9, pA)
                    ])
                  ])
                ],
                2
                /* CLASS */
              )
            ]),
            g("div", mA, [
              g("div", hA, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(l(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(l(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", gA, [
                g("label", {
                  title: Q("flashAttn")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  z(V, {
                    modelValue: l(n).flashAttn,
                    "onUpdate:modelValue": Z[10] || (Z[10] = (F) => l(n).flashAttn = F)
                  }, null, 8, ["modelValue"])
                ], 8, vA),
                g("label", {
                  title: Q("kvOffload")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  z(V, {
                    modelValue: l(n).kvOffload,
                    "onUpdate:modelValue": Z[11] || (Z[11] = (F) => l(n).kvOffload = F)
                  }, null, 8, ["modelValue"])
                ], 8, bA),
                g("label", {
                  title: Q("mmap")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  z(V, {
                    modelValue: l(n).mmap,
                    "onUpdate:modelValue": Z[12] || (Z[12] = (F) => l(n).mmap = F)
                  }, null, 8, ["modelValue"])
                ], 8, yA)
              ])
            ]),
            g("div", _A, [
              g("div", wA, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(l(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(l(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", kA, [
                g("label", {
                  title: Q("autoStart")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  z(V, {
                    modelValue: l(n).autoStartOnRequest,
                    "onUpdate:modelValue": Z[13] || (Z[13] = (F) => l(n).autoStartOnRequest = F)
                  }, null, 8, ["modelValue"])
                ], 8, SA),
                g("label", {
                  title: Q("keepAlive")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  z(V, {
                    modelValue: l(n).keepAlive,
                    "onUpdate:modelValue": Z[14] || (Z[14] = (F) => l(n).keepAlive = F)
                  }, null, 8, ["modelValue"])
                ], 8, TA),
                g("label", {
                  class: "number-field",
                  title: Q("idleTimeout")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": Z[15] || (Z[15] = (F) => l(n).idleTimeoutMinutes = F),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, EA),
                g("label", {
                  class: "number-field",
                  title: Q("requestTimeout")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).requestTimeoutSecs,
                    "onUpdate:modelValue": Z[16] || (Z[16] = (F) => l(n).requestTimeoutSecs = F),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AA)
              ])
            ]),
            g("div", CA, [
              g("div", IA, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(l(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(l(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", LA, [
                g("label", {
                  class: "number-field",
                  title: Q("temperature")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).temperature,
                    "onUpdate:modelValue": Z[17] || (Z[17] = (F) => l(n).temperature = F),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, OA),
                g("label", {
                  class: "number-field",
                  title: Q("topP")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).topP,
                    "onUpdate:modelValue": Z[18] || (Z[18] = (F) => l(n).topP = F),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, xA),
                g("label", {
                  class: "number-field",
                  title: Q("topK")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).topK,
                    "onUpdate:modelValue": Z[19] || (Z[19] = (F) => l(n).topK = F),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, RA),
                g("label", {
                  class: "number-field",
                  title: Q("minP")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).minP,
                    "onUpdate:modelValue": Z[20] || (Z[20] = (F) => l(n).minP = F),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, NA),
                g("label", {
                  class: "number-field",
                  title: Q("repeatPenalty")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).repeatPenalty,
                    "onUpdate:modelValue": Z[21] || (Z[21] = (F) => l(n).repeatPenalty = F),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, PA),
                g("label", {
                  class: "number-field",
                  title: Q("repeatLastN")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).repeatLastN,
                    "onUpdate:modelValue": Z[22] || (Z[22] = (F) => l(n).repeatLastN = F),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, $A),
                g("label", {
                  class: "number-field",
                  title: Q("maxTokens")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).maxTokens,
                    "onUpdate:modelValue": Z[23] || (Z[23] = (F) => l(n).maxTokens = F),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, MA),
                g("label", {
                  class: "number-field",
                  title: Q("port")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).port,
                    "onUpdate:modelValue": Z[24] || (Z[24] = (F) => l(n).port = F),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, DA)
              ])
            ]),
            g("div", FA, [
              g("div", zA, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(l(t)("localAi.webSearch")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(l(t)("localAi.webSearchDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                z(l(er), {
                  size: "small",
                  plain: "",
                  loading: l(y),
                  onClick: ft
                }, {
                  default: de(() => [
                    tn(
                      M(l(t)("localAi.webSearchTest")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])
              ]),
              g("div", BA, [
                g("label", {
                  class: "number-field",
                  title: Q("webSearchMaxResults")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.webSearchMaxResults")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).webSearchMaxResults,
                    "onUpdate:modelValue": Z[25] || (Z[25] = (F) => l(n).webSearchMaxResults = F),
                    min: 1,
                    max: 10,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, VA),
                g("label", {
                  class: "number-field",
                  title: Q("webSearchTimeoutSecs")
                }, [
                  g(
                    "span",
                    null,
                    M(l(t)("localAi.webSearchTimeoutSecs")),
                    1
                    /* TEXT */
                  ),
                  z(E, {
                    modelValue: l(n).webSearchTimeoutSecs,
                    "onUpdate:modelValue": Z[26] || (Z[26] = (F) => l(n).webSearchTimeoutSecs = F),
                    min: 3,
                    max: 60,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, UA)
              ])
            ]),
            g("div", jA, [
              z(l(er), {
                type: "primary",
                loading: l(u),
                onClick: Ze
              }, {
                default: de(() => [
                  tn(
                    M(l(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              l(s)?.commandLine ? (R(), j("span", {
                key: 0,
                class: "command-line",
                title: l(s).commandLine
              }, M(l(s).commandLine), 9, WA)) : ne("v-if", !0)
            ])
          ])
        ])) : ne("v-if", !0)
      ]);
    };
  }
}), GA = /* @__PURE__ */ ti(HA, [["__scopeId", "data-v-f285fe1b"]]), KA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GA
}, Symbol.toStringTag, { value: "Module" }));
export {
  ZA as activate,
  ZA as default
};
