var Of = Object.defineProperty;
var xf = (e, t, n) => t in e ? Of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var We = (e, t, n) => xf(e, typeof t != "symbol" ? t + "" : t, n);
import * as cs from "vue";
import { inject as je, createVNode as M, defineAsyncComponent as Rf, ref as W, shallowRef as kr, computed as P, watch as Ae, onMounted as pt, onUnmounted as ja, defineComponent as ie, h as hu, Text as gu, Fragment as ct, getCurrentInstance as qt, unref as c, watchEffect as vu, readonly as Js, getCurrentScope as Nf, onScopeDispose as Pf, nextTick as ut, isRef as io, warn as $f, provide as Bn, createElementBlock as U, openBlock as N, mergeProps as co, renderSlot as Se, createElementVNode as b, toRef as er, useAttrs as Mf, useSlots as Df, normalizeStyle as Rt, normalizeClass as K, createCommentVNode as ne, createBlock as fe, withCtx as de, resolveDynamicComponent as Gt, withModifiers as tt, toDisplayString as D, onBeforeUnmount as Un, Transition as wo, withDirectives as At, vShow as ir, reactive as zr, onActivated as Ff, onUpdated as bu, cloneVNode as zf, Comment as Bf, Teleport as Vf, onBeforeMount as jf, onDeactivated as Uf, createTextVNode as an, withKeys as _n, createSlots as Hf, toRaw as Wf, toRefs as el, resolveComponent as Mr, resolveDirective as Gf, toHandlerKey as Kf, renderList as Jn, vModelText as jo, shallowReactive as qf, isVNode as Uo, render as Ca, vModelSelect as Yf } from "vue";
var Zf = {
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
function Xf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Qf(e, t, n) {
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
var Jf = Symbol("icon-context");
function rn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Xf(), i = je(Jf, Zf);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, y = a.fill, g = a.spin, v = Qf(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: m,
          fill: y
        }, i), E = [i.prefix + "-icon"];
        return E.push(i.prefix + "-icon-" + e), t && i.rtl && E.push(i.prefix + "-icon-rtl"), g && E.push(i.prefix + "-icon-spin"), M("span", {
          class: E.join(" ")
        }, [n(v)]);
      };
    }
  };
  return r;
}
const ti = rn("brain", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), ni = rn("copy", !0, function(e) {
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
}), ia = rn("delete", !1, function(e) {
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
}), ri = rn("down", !1, function(e) {
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
}), us = rn("edit", !0, function(e) {
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
}), ep = rn("fork", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M37 12C39.2091 12 41 10.2091 41 8C41 5.79086 39.2091 4 37 4C34.7909 4 33 5.79086 33 8C33 10.2091 34.7909 12 37 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M11 12V15C11 22 24 25 24 32V36V32C24 25 37 22 37 15V12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oi = rn("left-bar", !0, function(e) {
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
    d: "M16 6V42",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M13 42H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M13 6H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), tp = rn("link", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ai = rn("refresh", !0, function(e) {
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
}), si = rn("robot", !0, function(e) {
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
}), np = rn("search", !0, function(e) {
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
}), rp = rn("send", !0, function(e) {
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
}), yu = rn("setting-two", !1, function(e) {
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
}), op = rn("square", !1, function(e) {
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
}), XE = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => L2)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: yu,
    component: Rf(() => Promise.resolve().then(() => qE))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ap(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const li = typeof window < "u", Ur = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), sp = (e, t, n) => lp({ l: e, k: t, s: n }), lp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), It = (e) => typeof e == "number" && isFinite(e), ip = (e) => tl(e) === "[object Date]", Ia = (e) => tl(e) === "[object RegExp]", Ua = (e) => Me(e) && Object.keys(e).length === 0, Nt = Object.assign, cp = Object.create, Ge = (e = null) => cp(e);
let ii;
const wa = () => ii || (ii = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ge());
function ci(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ui(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function up(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${ui(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${ui(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const dp = Object.prototype.hasOwnProperty;
function wn(e, t) {
  return dp.call(e, t);
}
const ft = Array.isArray, at = (e) => typeof e == "function", ue = (e) => typeof e == "string", dt = (e) => typeof e == "boolean", De = (e) => e !== null && typeof e == "object", fp = (e) => De(e) && at(e.then) && at(e.catch), _u = Object.prototype.toString, tl = (e) => _u.call(e), Me = (e) => tl(e) === "[object Object]", pp = (e) => e == null ? "" : ft(e) || Me(e) && e.toString === _u ? JSON.stringify(e, null, 2) : String(e);
function nl(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const ca = (e) => !De(e) || ft(e);
function ka(e, t) {
  if (ca(e) || ca(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (De(r[a]) && !De(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Ge()), ca(o[a]) || ca(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function mp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Is(e, t, n) {
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
}, hp = 17;
function Ha(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function gp(e) {
  throw e;
}
const Ln = " ", vp = "\r", jt = `
`, bp = "\u2028", yp = "\u2029";
function _p(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (x) => t[x] === vp && t[x + 1] === jt, i = (x) => t[x] === jt, l = (x) => t[x] === yp, u = (x) => t[x] === bp, d = (x) => s(x) || i(x) || l(x) || u(x), p = () => n, m = () => r, y = () => o, g = () => a, v = (x) => s(x) || l(x) || u(x) ? jt : t[x], E = () => v(n), f = () => v(n + a);
  function C() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function R() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function I() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function w(x = 0) {
    a = x;
  }
  function T() {
    const x = n + a;
    for (; x !== n; )
      C();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: y,
    peekOffset: g,
    charAt: v,
    currentChar: E,
    currentPeek: f,
    next: C,
    peek: R,
    reset: I,
    resetPeek: w,
    skipToPeek: T
  };
}
const Yn = void 0, wp = ".", di = "'", kp = "tokenizer";
function Tp(e, t = {}) {
  const n = t.location !== !1, r = _p(e), o = () => r.index(), a = () => mp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function p(k, O, V, ...J) {
    const xe = u();
    if (O.column += V, O.offset += V, d) {
      const ge = n ? Is(xe.startLoc, O) : null, S = Ha(k, ge, {
        domain: kp,
        args: J
      });
      d(S);
    }
  }
  function m(k, O, V) {
    k.endLoc = a(), k.currentType = O;
    const J = { type: O };
    return n && (J.loc = Is(k.startLoc, k.endLoc)), V != null && (J.value = V), J;
  }
  const y = (k) => m(
    k,
    13
    /* TokenTypes.EOF */
  );
  function g(k, O) {
    return k.currentChar() === O ? (k.next(), O) : (p(Fe.EXPECTED_TOKEN, a(), 0, O), "");
  }
  function v(k) {
    let O = "";
    for (; k.currentPeek() === Ln || k.currentPeek() === jt; )
      O += k.currentPeek(), k.peek();
    return O;
  }
  function E(k) {
    const O = v(k);
    return k.skipToPeek(), O;
  }
  function f(k) {
    if (k === Yn)
      return !1;
    const O = k.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O === 95;
  }
  function C(k) {
    if (k === Yn)
      return !1;
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function R(k, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    v(k);
    const J = f(k.currentPeek());
    return k.resetPeek(), J;
  }
  function I(k, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    v(k);
    const J = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), xe = C(J);
    return k.resetPeek(), xe;
  }
  function w(k, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    v(k);
    const J = k.currentPeek() === di;
    return k.resetPeek(), J;
  }
  function T(k, O) {
    const { currentType: V } = O;
    if (V !== 7)
      return !1;
    v(k);
    const J = k.currentPeek() === ".";
    return k.resetPeek(), J;
  }
  function x(k, O) {
    const { currentType: V } = O;
    if (V !== 8)
      return !1;
    v(k);
    const J = f(k.currentPeek());
    return k.resetPeek(), J;
  }
  function Z(k, O) {
    const { currentType: V } = O;
    if (!(V === 7 || V === 11))
      return !1;
    v(k);
    const J = k.currentPeek() === ":";
    return k.resetPeek(), J;
  }
  function X(k, O) {
    const { currentType: V } = O;
    if (V !== 9)
      return !1;
    const J = () => {
      const ge = k.currentPeek();
      return ge === "{" ? f(k.peek()) : ge === "@" || ge === "|" || ge === ":" || ge === "." || ge === Ln || !ge ? !1 : ge === jt ? (k.peek(), J()) : he(k, !1);
    }, xe = J();
    return k.resetPeek(), xe;
  }
  function le(k) {
    v(k);
    const O = k.currentPeek() === "|";
    return k.resetPeek(), O;
  }
  function he(k, O = !0) {
    const V = (xe = !1, ge = "") => {
      const S = k.currentPeek();
      return S === "{" || S === "@" || !S ? xe : S === "|" ? !(ge === Ln || ge === jt) : S === Ln ? (k.peek(), V(!0, Ln)) : S === jt ? (k.peek(), V(!0, jt)) : !0;
    }, J = V();
    return O && k.resetPeek(), J;
  }
  function se(k, O) {
    const V = k.currentChar();
    return V === Yn ? Yn : O(V) ? (k.next(), V) : null;
  }
  function be(k) {
    const O = k.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36;
  }
  function ye(k) {
    return se(k, be);
  }
  function B(k) {
    const O = k.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36 || // $
    O === 45;
  }
  function Q(k) {
    return se(k, B);
  }
  function H(k) {
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function pe(k) {
    return se(k, H);
  }
  function Y(k) {
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57 || // 0-9
    O >= 65 && O <= 70 || // A-F
    O >= 97 && O <= 102;
  }
  function q(k) {
    return se(k, Y);
  }
  function Pe(k) {
    let O = "", V = "";
    for (; O = pe(k); )
      V += O;
    return V;
  }
  function Ue(k) {
    let O = "";
    for (; ; ) {
      const V = k.currentChar();
      if (V === "{" || V === "}" || V === "@" || V === "|" || !V)
        break;
      if (V === Ln || V === jt)
        if (he(k))
          O += V, k.next();
        else {
          if (le(k))
            break;
          O += V, k.next();
        }
      else
        O += V, k.next();
    }
    return O;
  }
  function ve(k) {
    E(k);
    let O = "", V = "";
    for (; O = Q(k); )
      V += O;
    const J = k.currentChar();
    if (J && J !== "}" && J !== Yn && J !== Ln && J !== jt && J !== "　") {
      const xe = kt(k);
      return p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V + xe), V + xe;
    }
    return k.currentChar() === Yn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), V;
  }
  function oe(k) {
    E(k);
    let O = "";
    return k.currentChar() === "-" ? (k.next(), O += `-${Pe(k)}`) : O += Pe(k), k.currentChar() === Yn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), O;
  }
  function te(k) {
    return k !== di && k !== jt;
  }
  function Ce(k) {
    E(k), g(k, "'");
    let O = "", V = "";
    for (; O = se(k, te); )
      O === "\\" ? V += Ke(k) : V += O;
    const J = k.currentChar();
    return J === jt || J === Yn ? (p(Fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), J === jt && (k.next(), g(k, "'")), V) : (g(k, "'"), V);
  }
  function Ke(k) {
    const O = k.currentChar();
    switch (O) {
      case "\\":
      case "'":
        return k.next(), `\\${O}`;
      case "u":
        return me(k, O, 4);
      case "U":
        return me(k, O, 6);
      default:
        return p(Fe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, O), "";
    }
  }
  function me(k, O, V) {
    g(k, O);
    let J = "";
    for (let xe = 0; xe < V; xe++) {
      const ge = q(k);
      if (!ge) {
        p(Fe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${O}${J}${k.currentChar()}`);
        break;
      }
      J += ge;
    }
    return `\\${O}${J}`;
  }
  function rt(k) {
    return k !== "{" && k !== "}" && k !== Ln && k !== jt;
  }
  function kt(k) {
    E(k);
    let O = "", V = "";
    for (; O = se(k, rt); )
      V += O;
    return V;
  }
  function He(k) {
    let O = "", V = "";
    for (; O = ye(k); )
      V += O;
    return V;
  }
  function $t(k) {
    const O = (V) => {
      const J = k.currentChar();
      return J === "{" || J === "@" || J === "|" || J === "(" || J === ")" || !J || J === Ln ? V : (V += J, k.next(), O(V));
    };
    return O("");
  }
  function Tt(k) {
    E(k);
    const O = g(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return E(k), O;
  }
  function lt(k, O) {
    let V = null;
    switch (k.currentChar()) {
      case "{":
        return O.braceNest >= 1 && p(Fe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), k.next(), V = m(
          O,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(k), O.braceNest++, V;
      case "}":
        return O.braceNest > 0 && O.currentType === 2 && p(Fe.EMPTY_PLACEHOLDER, a(), 0), k.next(), V = m(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), O.braceNest--, O.braceNest > 0 && E(k), O.inLinked && O.braceNest === 0 && (O.inLinked = !1), V;
      case "@":
        return O.braceNest > 0 && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), V = St(k, O) || y(O), O.braceNest = 0, V;
      default: {
        let xe = !0, ge = !0, S = !0;
        if (le(k))
          return O.braceNest > 0 && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), V = m(O, 1, Tt(k)), O.braceNest = 0, O.inLinked = !1, V;
        if (O.braceNest > 0 && (O.currentType === 4 || O.currentType === 5 || O.currentType === 6))
          return p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), O.braceNest = 0, Je(k, O);
        if (xe = R(k, O))
          return V = m(O, 4, ve(k)), E(k), V;
        if (ge = I(k, O))
          return V = m(O, 5, oe(k)), E(k), V;
        if (S = w(k, O))
          return V = m(O, 6, Ce(k)), E(k), V;
        if (!xe && !ge && !S)
          return V = m(O, 12, kt(k)), p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V.value), E(k), V;
        break;
      }
    }
    return V;
  }
  function St(k, O) {
    const { currentType: V } = O;
    let J = null;
    const xe = k.currentChar();
    switch ((V === 7 || V === 8 || V === 11 || V === 9) && (xe === jt || xe === Ln) && p(Fe.INVALID_LINKED_FORMAT, a(), 0), xe) {
      case "@":
        return k.next(), J = m(
          O,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), O.inLinked = !0, J;
      case ".":
        return E(k), k.next(), m(
          O,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(k), k.next(), m(
          O,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return le(k) ? (J = m(O, 1, Tt(k)), O.braceNest = 0, O.inLinked = !1, J) : T(k, O) || Z(k, O) ? (E(k), St(k, O)) : x(k, O) ? (E(k), m(O, 11, He(k))) : X(k, O) ? (E(k), xe === "{" ? lt(k, O) || J : m(O, 10, $t(k))) : (V === 7 && p(Fe.INVALID_LINKED_FORMAT, a(), 0), O.braceNest = 0, O.inLinked = !1, Je(k, O));
    }
  }
  function Je(k, O) {
    let V = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (O.braceNest > 0)
      return lt(k, O) || y(O);
    if (O.inLinked)
      return St(k, O) || y(O);
    switch (k.currentChar()) {
      case "{":
        return lt(k, O) || y(O);
      case "}":
        return p(Fe.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), m(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return St(k, O) || y(O);
      default: {
        if (le(k))
          return V = m(O, 1, Tt(k)), O.braceNest = 0, O.inLinked = !1, V;
        if (he(k))
          return m(O, 0, Ue(k));
        break;
      }
    }
    return V;
  }
  function Ct() {
    const { currentType: k, offset: O, startLoc: V, endLoc: J } = l;
    return l.lastType = k, l.lastOffset = O, l.lastStartLoc = V, l.lastEndLoc = J, l.offset = o(), l.startLoc = a(), r.currentChar() === Yn ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : Je(r, l);
  }
  return {
    nextToken: Ct,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Sp = "parser", Ep = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ap(e, t, n) {
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
function Cp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, C, R, I, ...w) {
    const T = f.currentPosition();
    if (T.offset += I, T.column += I, n) {
      const x = t ? Is(R, T) : null, Z = Ha(C, x, {
        domain: Sp,
        args: w
      });
      n(Z);
    }
  }
  function o(f, C, R) {
    const I = { type: f };
    return t && (I.start = C, I.end = C, I.loc = { start: R, end: R }), I;
  }
  function a(f, C, R, I) {
    t && (f.end = C, f.loc && (f.loc.end = R));
  }
  function s(f, C) {
    const R = f.context(), I = o(3, R.offset, R.startLoc);
    return I.value = C, a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function i(f, C) {
    const R = f.context(), { lastOffset: I, lastStartLoc: w } = R, T = o(5, I, w);
    return T.index = parseInt(C, 10), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function l(f, C) {
    const R = f.context(), { lastOffset: I, lastStartLoc: w } = R, T = o(4, I, w);
    return T.key = C, f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function u(f, C) {
    const R = f.context(), { lastOffset: I, lastStartLoc: w } = R, T = o(9, I, w);
    return T.value = C.replace(Ep, Ap), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function d(f) {
    const C = f.nextToken(), R = f.context(), { lastOffset: I, lastStartLoc: w } = R, T = o(8, I, w);
    return C.type !== 11 ? (r(f, Fe.UNEXPECTED_EMPTY_LINKED_MODIFIER, R.lastStartLoc, 0), T.value = "", a(T, I, w), {
      nextConsumeToken: C,
      node: T
    }) : (C.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, On(C)), T.value = C.value || "", a(T, f.currentOffset(), f.currentPosition()), {
      node: T
    });
  }
  function p(f, C) {
    const R = f.context(), I = o(7, R.offset, R.startLoc);
    return I.value = C, a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function m(f) {
    const C = f.context(), R = o(6, C.offset, C.startLoc);
    let I = f.nextToken();
    if (I.type === 8) {
      const w = d(f);
      R.modifier = w.node, I = w.nextConsumeToken || f.nextToken();
    }
    switch (I.type !== 9 && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(I)), I = f.nextToken(), I.type === 2 && (I = f.nextToken()), I.type) {
      case 10:
        I.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(I)), R.key = p(f, I.value || "");
        break;
      case 4:
        I.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(I)), R.key = l(f, I.value || "");
        break;
      case 5:
        I.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(I)), R.key = i(f, I.value || "");
        break;
      case 6:
        I.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(I)), R.key = u(f, I.value || "");
        break;
      default: {
        r(f, Fe.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const w = f.context(), T = o(7, w.offset, w.startLoc);
        return T.value = "", a(T, w.offset, w.startLoc), R.key = T, a(R, w.offset, w.startLoc), {
          nextConsumeToken: I,
          node: R
        };
      }
    }
    return a(R, f.currentOffset(), f.currentPosition()), {
      node: R
    };
  }
  function y(f) {
    const C = f.context(), R = C.currentType === 1 ? f.currentOffset() : C.offset, I = C.currentType === 1 ? C.endLoc : C.startLoc, w = o(2, R, I);
    w.items = [];
    let T = null;
    do {
      const X = T || f.nextToken();
      switch (T = null, X.type) {
        case 0:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(X)), w.items.push(s(f, X.value || ""));
          break;
        case 5:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(X)), w.items.push(i(f, X.value || ""));
          break;
        case 4:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(X)), w.items.push(l(f, X.value || ""));
          break;
        case 6:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, On(X)), w.items.push(u(f, X.value || ""));
          break;
        case 7: {
          const le = m(f);
          w.items.push(le.node), T = le.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const x = C.currentType === 1 ? C.lastOffset : f.currentOffset(), Z = C.currentType === 1 ? C.lastEndLoc : f.currentPosition();
    return a(w, x, Z), w;
  }
  function g(f, C, R, I) {
    const w = f.context();
    let T = I.items.length === 0;
    const x = o(1, C, R);
    x.cases = [], x.cases.push(I);
    do {
      const Z = y(f);
      T || (T = Z.items.length === 0), x.cases.push(Z);
    } while (w.currentType !== 13);
    return T && r(f, Fe.MUST_HAVE_MESSAGES_IN_PLURAL, R, 0), a(x, f.currentOffset(), f.currentPosition()), x;
  }
  function v(f) {
    const C = f.context(), { offset: R, startLoc: I } = C, w = y(f);
    return C.currentType === 13 ? w : g(f, R, I, w);
  }
  function E(f) {
    const C = Tp(f, Nt({}, e)), R = C.context(), I = o(0, R.offset, R.startLoc);
    return t && I.loc && (I.loc.source = f), I.body = v(C), e.onCacheKey && (I.cacheKey = e.onCacheKey(f)), R.currentType !== 13 && r(C, Fe.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, f[R.offset] || ""), a(I, C.currentOffset(), C.currentPosition()), I;
  }
  return { parse: E };
}
function On(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ip(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function fi(e, t) {
  for (let n = 0; n < e.length; n++)
    rl(e[n], t);
}
function rl(e, t) {
  switch (e.type) {
    case 1:
      fi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      fi(e.items, t);
      break;
    case 6: {
      rl(e.key, t), t.helper(
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
function Lp(e, t = {}) {
  const n = Ip(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && rl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Op(e) {
  const t = e.body;
  return t.type === 2 ? pi(t) : t.cases.forEach((n) => pi(n)), e;
}
function pi(e) {
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
      e.static = nl(t);
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
function xp(e, t) {
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
    const f = E ? r : "";
    l(o ? f + "  ".repeat(v) : f);
  }
  function d(v = !0) {
    const E = ++s.indentLevel;
    v && u(E);
  }
  function p(v = !0) {
    const E = --s.indentLevel;
    v && u(E);
  }
  function m() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: d,
    deindent: p,
    newline: m,
    helper: (v) => `_${v}`,
    needIndent: () => s.needIndent
  };
}
function Rp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), uo(e, t.key), t.modifier ? (e.push(", "), uo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Np(e, t) {
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
function Pp(e, t) {
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
function $p(e, t) {
  t.body ? uo(e, t.body) : e.push("null");
}
function uo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      $p(e, t);
      break;
    case 1:
      Pp(e, t);
      break;
    case 2:
      Np(e, t);
      break;
    case 6:
      Rp(e, t);
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
const Mp = (e, t = {}) => {
  const n = ue(t.mode) ? t.mode : "normal", r = ue(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = xp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${nl(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), uo(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Dp(e, t = {}) {
  const n = Nt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Cp(n).parse(e);
  return r ? (a && Op(i), o && ao(i), { ast: i, code: "" }) : (Lp(i, n), Mp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (wa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dn(e) {
  return De(e) && ol(e) === 0 && (wn(e, "b") || wn(e, "body"));
}
const wu = ["b", "body"];
function zp(e) {
  return Er(e, wu);
}
const ku = ["c", "cases"];
function Bp(e) {
  return Er(e, ku, []);
}
const Tu = ["s", "static"];
function Vp(e) {
  return Er(e, Tu);
}
const Su = ["i", "items"];
function jp(e) {
  return Er(e, Su, []);
}
const Eu = ["t", "type"];
function ol(e) {
  return Er(e, Eu);
}
const Au = ["v", "value"];
function ua(e, t) {
  const n = Er(e, Au);
  if (n != null)
    return n;
  throw Ho(t);
}
const Cu = ["m", "modifier"];
function Up(e) {
  return Er(e, Cu);
}
const Iu = ["k", "key"];
function Hp(e) {
  const t = Er(e, Iu);
  if (t)
    return t;
  throw Ho(
    6
    /* NodeTypes.Linked */
  );
}
function Er(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (wn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Lu = [
  ...wu,
  ...ku,
  ...Tu,
  ...Su,
  ...Iu,
  ...Cu,
  ...Au,
  ...Eu
];
function Ho(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ds(e) {
  return (n) => Wp(n, e);
}
function Wp(e, t) {
  const n = zp(t);
  if (n == null)
    throw Ho(
      0
      /* NodeTypes.Resource */
    );
  if (ol(n) === 1) {
    const a = Bp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      mi(e, i)
    ], []));
  } else
    return mi(e, n);
}
function mi(e, t) {
  const n = Vp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = jp(t).reduce((o, a) => [...o, Ls(e, a)], []);
    return e.normalize(r);
  }
}
function Ls(e, t) {
  const n = ol(t);
  switch (n) {
    case 3:
      return ua(t, n);
    case 9:
      return ua(t, n);
    case 4: {
      const r = t;
      if (wn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (wn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ho(n);
    }
    case 5: {
      const r = t;
      if (wn(r, "i") && It(r.i))
        return e.interpolate(e.list(r.i));
      if (wn(r, "index") && It(r.index))
        return e.interpolate(e.list(r.index));
      throw Ho(n);
    }
    case 6: {
      const r = t, o = Up(r), a = Hp(r);
      return e.linked(Ls(e, a), o ? Ls(e, o) : void 0, e.type);
    }
    case 7:
      return ua(t, n);
    case 8:
      return ua(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Gp = (e) => e;
let da = Ge();
function Kp(e, t = {}) {
  let n = !1;
  const r = t.onError || gp;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Dp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function qp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ue(e)) {
    dt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Gp)(e), o = da[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = Kp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ds(a);
    return s ? i : da[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = da[n];
      return r || (da[n] = ds(e));
    } else
      return ds(e);
  }
}
const tr = {
  INVALID_ARGUMENT: hp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Yp = 24;
function nr(e) {
  return Ha(e, null, void 0);
}
function al(e, t) {
  return t.locale != null ? hi(t.locale) : hi(e.locale);
}
let fs;
function hi(e) {
  if (ue(e))
    return e;
  if (at(e)) {
    if (e.resolvedOnce && fs != null)
      return fs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (fp(t))
        throw nr(tr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return fs = t;
    } else
      throw nr(tr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw nr(tr.NOT_SUPPORT_LOCALE_TYPE);
}
function Zp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ft(t) ? t : De(t) ? Object.keys(t) : ue(t) ? [t] : [n]
  ])];
}
function Ou(e, t, n) {
  const r = ue(n) ? n : La, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; ft(s); )
      s = gi(a, s, t);
    const i = ft(t) || !Me(t) ? t : t.default ? t.default : null;
    s = ue(i) ? [i] : i, ft(s) && gi(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function gi(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && dt(r); o++) {
    const a = t[o];
    ue(a) && (r = Xp(e, t[o], n));
  }
  return r;
}
function Xp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Qp(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Qp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ft(n) || Me(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Ar = [];
Ar[
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
Ar[
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
Ar[
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
Ar[
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
Ar[
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
Ar[
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
Ar[
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
const Jp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function em(e) {
  return Jp.test(e);
}
function tm(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function nm(e) {
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
function rm(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : em(t) ? tm(t) : "*" + t;
}
function om(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, d, p;
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
      if (o = 0, s === void 0 || (s = rm(s), s === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, i = "\\" + g, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && y())) {
      if (l = nm(a), p = Ar[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = m[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const vi = /* @__PURE__ */ new Map();
function am(e, t) {
  return De(e) ? e[t] : null;
}
function sm(e, t) {
  if (!De(e))
    return null;
  let n = vi.get(t);
  if (n || (n = om(t), n && vi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Lu.includes(s) && Dn(o))
      return null;
    const i = o[s];
    if (i === void 0 || at(o))
      return null;
    o = i, a++;
  }
  return o;
}
const lm = "11.2.2", Wa = -1, La = "en-US", bi = "", yi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function im() {
  return {
    upper: (e, t) => t === "text" && ue(e) ? e.toUpperCase() : t === "vnode" && De(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ue(e) ? e.toLowerCase() : t === "vnode" && De(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ue(e) ? yi(e) : t === "vnode" && De(e) && "__v_isVNode" in e ? yi(e.children) : e
  };
}
let xu;
function cm(e) {
  xu = e;
}
let Ru;
function um(e) {
  Ru = e;
}
let Nu;
function dm(e) {
  Nu = e;
}
let Pu = null;
const _i = (e) => {
  Pu = e;
}, fm = () => Pu;
let wi = 0;
function pm(e = {}) {
  const t = at(e.onWarn) ? e.onWarn : ap, n = ue(e.version) ? e.version : lm, r = ue(e.locale) || at(e.locale) ? e.locale : La, o = at(r) ? La : r, a = ft(e.fallbackLocale) || Me(e.fallbackLocale) || ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Me(e.messages) ? e.messages : ps(o), i = Me(e.datetimeFormats) ? e.datetimeFormats : ps(o), l = Me(e.numberFormats) ? e.numberFormats : ps(o), u = Nt(Ge(), e.modifiers, im()), d = e.pluralRules || Ge(), p = at(e.missing) ? e.missing : null, m = dt(e.missingWarn) || Ia(e.missingWarn) ? e.missingWarn : !0, y = dt(e.fallbackWarn) || Ia(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, v = !!e.unresolving, E = at(e.postTranslation) ? e.postTranslation : null, f = Me(e.processor) ? e.processor : null, C = dt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter, I = at(e.messageCompiler) ? e.messageCompiler : xu, w = at(e.messageResolver) ? e.messageResolver : Ru || am, T = at(e.localeFallbacker) ? e.localeFallbacker : Nu || Zp, x = De(e.fallbackContext) ? e.fallbackContext : void 0, Z = e, X = De(Z.__datetimeFormatters) ? Z.__datetimeFormatters : /* @__PURE__ */ new Map(), le = De(Z.__numberFormatters) ? Z.__numberFormatters : /* @__PURE__ */ new Map(), he = De(Z.__meta) ? Z.__meta : {};
  wi++;
  const se = {
    version: n,
    cid: wi,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: d,
    missing: p,
    missingWarn: m,
    fallbackWarn: y,
    fallbackFormat: g,
    unresolving: v,
    postTranslation: E,
    processor: f,
    warnHtmlMessage: C,
    escapeParameter: R,
    messageCompiler: I,
    messageResolver: w,
    localeFallbacker: T,
    fallbackContext: x,
    onWarn: t,
    __meta: he
  };
  return se.datetimeFormats = i, se.numberFormats = l, se.__datetimeFormatters = X, se.__numberFormatters = le, se;
}
const ps = (e) => ({ [e]: Ge() });
function sl(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return ue(i) ? i : t;
  } else
    return t;
}
function Co(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function mm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function hm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (mm(e, t[r]))
      return !0;
  return !1;
}
function ki(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, p] = Os(...t), m = dt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  dt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = al(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!ue(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let E = {}, f, C = null;
  const R = "datetime format";
  for (let T = 0; T < v.length && (f = v[T], E = n[f] || {}, C = E[l], !Me(C)); T++)
    sl(e, l, f, m, R);
  if (!Me(C) || !ue(f))
    return r ? Wa : l;
  let I = `${f}__${l}`;
  Ua(p) || (I = `${I}__${JSON.stringify(p)}`);
  let w = i.get(I);
  return w || (w = new Intl.DateTimeFormat(f, Nt({}, C, p)), i.set(I, w)), y ? w.formatToParts(u) : w.format(u);
}
const $u = [
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
function Os(...e) {
  const [t, n, r, o] = e, a = Ge();
  let s = Ge(), i;
  if (ue(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw nr(tr.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw nr(tr.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ip(t)) {
    if (isNaN(t.getTime()))
      throw nr(tr.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (It(t))
    i = t;
  else
    throw nr(tr.INVALID_ARGUMENT);
  return ue(n) ? a.key = n : Me(n) && Object.keys(n).forEach((l) => {
    $u.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ue(r) ? a.locale = r : Me(r) && (s = r), Me(o) && (s = o), [a.key || "", i, a, s];
}
function Ti(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Si(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, p] = xs(...t), m = dt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  dt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = al(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!ue(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let E = {}, f, C = null;
  const R = "number format";
  for (let T = 0; T < v.length && (f = v[T], E = n[f] || {}, C = E[l], !Me(C)); T++)
    sl(e, l, f, m, R);
  if (!Me(C) || !ue(f))
    return r ? Wa : l;
  let I = `${f}__${l}`;
  Ua(p) || (I = `${I}__${JSON.stringify(p)}`);
  let w = i.get(I);
  return w || (w = new Intl.NumberFormat(f, Nt({}, C, p)), i.set(I, w)), y ? w.formatToParts(u) : w.format(u);
}
const Mu = [
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
function xs(...e) {
  const [t, n, r, o] = e, a = Ge();
  let s = Ge();
  if (!It(t))
    throw nr(tr.INVALID_ARGUMENT);
  const i = t;
  return ue(n) ? a.key = n : Me(n) && Object.keys(n).forEach((l) => {
    Mu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ue(r) ? a.locale = r : Me(r) && (s = r), Me(o) && (s = o), [a.key || "", i, a, s];
}
function Ei(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const gm = (e) => e, vm = (e) => "", bm = "text", ym = (e) => e.length === 0 ? "" : nl(e), _m = pp;
function Ai(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function wm(e) {
  const t = It(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (It(e.named.count) || It(e.named.n)) ? It(e.named.count) ? e.named.count : It(e.named.n) ? e.named.n : t : t;
}
function km(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Tm(e = {}) {
  const t = e.locale, n = wm(e), r = De(e.pluralRules) && ue(t) && at(e.pluralRules[t]) ? e.pluralRules[t] : Ai, o = De(e.pluralRules) && ue(t) && at(e.pluralRules[t]) ? Ai : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || Ge();
  It(e.pluralIndex) && km(n, l);
  const u = (f) => l[f];
  function d(f, C) {
    const R = at(e.messages) ? e.messages(f, !!C) : De(e.messages) ? e.messages[f] : !1;
    return R || (e.parent ? e.parent.message(f) : vm);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : gm, m = Me(e.processor) && at(e.processor.normalize) ? e.processor.normalize : ym, y = Me(e.processor) && at(e.processor.interpolate) ? e.processor.interpolate : _m, g = Me(e.processor) && ue(e.processor.type) ? e.processor.type : bm, E = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...C) => {
      const [R, I] = C;
      let w = "text", T = "";
      C.length === 1 ? De(R) ? (T = R.modifier || T, w = R.type || w) : ue(R) && (T = R || T) : C.length === 2 && (ue(R) && (T = R || T), ue(I) && (w = I || w));
      const x = d(f, !0)(E), Z = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && ft(x) && T ? x[0] : x
      );
      return T ? p(T)(Z, w) : Z;
    },
    message: d,
    type: g,
    interpolate: y,
    normalize: m,
    values: Nt(Ge(), s, l)
  };
  return E;
}
const Ci = () => "", or = (e) => at(e);
function Ii(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Rs(...t), d = dt(u.missingWarn) ? u.missingWarn : e.missingWarn, p = dt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = dt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, g = ue(u.default) || dt(u.default) ? dt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, v = n || g != null && (ue(g) || at(g)), E = al(e, u);
  m && Sm(u);
  let [f, C, R] = y ? [
    l,
    E,
    i[E] || Ge()
  ] : Du(e, l, E, s, p, d), I = f, w = l;
  if (!y && !(ue(I) || Dn(I) || or(I)) && v && (I = g, w = I), !y && (!(ue(I) || Dn(I) || or(I)) || !ue(C)))
    return o ? Wa : l;
  let T = !1;
  const x = () => {
    T = !0;
  }, Z = or(I) ? I : Fu(e, l, C, I, w, x);
  if (T)
    return I;
  const X = Cm(e, C, R, u), le = Tm(X), he = Em(e, Z, le);
  let se = r ? r(he, l) : he;
  return m && ue(se) && (se = up(se)), se;
}
function Sm(e) {
  ft(e.list) ? e.list = e.list.map((t) => ue(t) ? ci(t) : t) : De(e.named) && Object.keys(e.named).forEach((t) => {
    ue(e.named[t]) && (e.named[t] = ci(e.named[t]));
  });
}
function Du(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let p = Ge(), m, y = null;
  const g = "translate";
  for (let v = 0; v < d.length && (m = d[v], p = s[m] || Ge(), (y = l(p, t)) === null && (y = p[t]), !(ue(y) || Dn(y) || or(y))); v++)
    if (!hm(m, d)) {
      const E = sl(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        g
      );
      E !== t && (y = E);
    }
  return [y, m, p];
}
function Fu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (or(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Am(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Em(e, t, n) {
  return t(n);
}
function Rs(...e) {
  const [t, n, r] = e, o = Ge();
  if (!ue(t) && !It(t) && !or(t) && !Dn(t))
    throw nr(tr.INVALID_ARGUMENT);
  const a = It(t) ? String(t) : (or(t), t);
  return It(n) ? o.plural = n : ue(n) ? o.default = n : Me(n) && !Ua(n) ? o.named = n : ft(n) && (o.list = n), It(r) ? o.plural = r : ue(r) ? o.default = r : Me(r) && Nt(o, r), [a, o];
}
function Am(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => sp(t, n, s)
  };
}
function Cm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, g) => {
      let v = s(n, y);
      if (v == null && (d || g)) {
        const [, , E] = Du(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          l,
          u
        );
        v = s(E, y);
      }
      if (ue(v) || Dn(v)) {
        let E = !1;
        const C = Fu(e, y, t, v, y, () => {
          E = !0;
        });
        return E ? Ci : C;
      } else return or(v) ? v : Ci;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), It(r.plural) && (m.pluralIndex = r.plural), m;
}
Fp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Im = "11.2.2";
function Lm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (wa().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (wa().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (wa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const fo = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Yp,
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
function Wo(e, ...t) {
  return Ha(e, null, void 0);
}
const Ns = /* @__PURE__ */ Ur("__translateVNode"), Ps = /* @__PURE__ */ Ur("__datetimeParts"), $s = /* @__PURE__ */ Ur("__numberParts"), Om = Ur("__setPluralRules"), zu = /* @__PURE__ */ Ur("__injectWithOption"), Ms = /* @__PURE__ */ Ur("__dispose");
function Go(e) {
  if (!De(e) || Dn(e))
    return e;
  for (const t in e)
    if (wn(e, t))
      if (!t.includes("."))
        De(e[t]) && Go(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Ge()), !De(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Dn(o) ? Lu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Dn(o)) {
          const s = o[n[r]];
          De(s) && Go(s);
        }
      }
  return e;
}
function Bu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Me(n) ? n : ft(r) ? Ge() : { [e]: Ge() };
  if (ft(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Ge(), ka(u, s[l])) : ka(u, s);
    } else
      ue(i) && ka(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      wn(s, i) && Go(s[i]);
  return s;
}
function xm(e) {
  return e.type;
}
function Rm(e, t, n) {
  let r = De(t.messages) ? t.messages : Ge();
  "__i18nGlobal" in n && (r = Bu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (De(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (De(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Li(e) {
  return M(gu, null, e, 0);
}
function Vu() {
  return "currentInstance" in cs ? cs["currentInstance"] : cs.getCurrentInstance();
}
const Oi = () => [], Nm = () => !1;
let xi = 0;
function Ri(e) {
  return (t, n, r, o) => e(n, r, Vu() || void 0, o);
}
function Pm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = li ? W : kr;
  let s = dt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ue(e.locale) ? e.locale : La
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ue(e.fallbackLocale) || ft(e.fallbackLocale) || Me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Bu(i.value, e)), d = a(Me(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(Me(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : dt(e.missingWarn) || Ia(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : dt(e.fallbackWarn) || Ia(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : dt(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, E = at(e.missing) ? e.missing : null, f = at(e.missing) ? Ri(e.missing) : null, C = at(e.postTranslation) ? e.postTranslation : null, R = t ? t.warnHtmlMessage : dt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const w = t ? t.modifiers : Me(e.modifiers) ? e.modifiers : {};
  let T = e.pluralRules || t && t.pluralRules, x;
  x = (() => {
    r && _i(null);
    const S = {
      version: Im,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: w,
      pluralRules: T,
      missing: f === null ? void 0 : f,
      missingWarn: m,
      fallbackWarn: y,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: R,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = d.value, S.numberFormats = p.value, S.__datetimeFormatters = Me(x) ? x.__datetimeFormatters : void 0, S.__numberFormatters = Me(x) ? x.__numberFormatters : void 0;
    const F = pm(S);
    return r && _i(F), F;
  })(), Co(x, i.value, l.value);
  function X() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      p.value
    ];
  }
  const le = P({
    get: () => i.value,
    set: (S) => {
      x.locale = S, i.value = S;
    }
  }), he = P({
    get: () => l.value,
    set: (S) => {
      x.fallbackLocale = S, l.value = S, Co(x, i.value, S);
    }
  }), se = P(() => u.value), be = /* @__PURE__ */ P(() => d.value), ye = /* @__PURE__ */ P(() => p.value);
  function B() {
    return at(C) ? C : null;
  }
  function Q(S) {
    C = S, x.postTranslation = S;
  }
  function H() {
    return E;
  }
  function pe(S) {
    S !== null && (f = Ri(S)), E = S, x.missing = f;
  }
  const Y = (S, F, ke, Ie, Ze, Mt) => {
    X();
    let Ye;
    try {
      r || (x.fallbackContext = t ? fm() : void 0), Ye = S(x);
    } finally {
      r || (x.fallbackContext = void 0);
    }
    if (ke !== "translate exists" && // for not `te` (e.g `t`)
    It(Ye) && Ye === Wa || ke === "translate exists" && !Ye) {
      const [Wn, Ir] = F();
      return t && g ? Ie(t) : Ze(Wn);
    } else {
      if (Mt(Ye))
        return Ye;
      throw Wo(fo.UNEXPECTED_RETURN_TYPE);
    }
  };
  function q(...S) {
    return Y((F) => Reflect.apply(Ii, null, [F, ...S]), () => Rs(...S), "translate", (F) => Reflect.apply(F.t, F, [...S]), (F) => F, (F) => ue(F));
  }
  function Pe(...S) {
    const [F, ke, Ie] = S;
    if (Ie && !De(Ie))
      throw Wo(fo.INVALID_ARGUMENT);
    return q(F, ke, Nt({ resolvedMessage: !0 }, Ie || {}));
  }
  function Ue(...S) {
    return Y((F) => Reflect.apply(ki, null, [F, ...S]), () => Os(...S), "datetime format", (F) => Reflect.apply(F.d, F, [...S]), () => bi, (F) => ue(F) || ft(F));
  }
  function ve(...S) {
    return Y((F) => Reflect.apply(Si, null, [F, ...S]), () => xs(...S), "number format", (F) => Reflect.apply(F.n, F, [...S]), () => bi, (F) => ue(F) || ft(F));
  }
  function oe(S) {
    return S.map((F) => ue(F) || It(F) || dt(F) ? Li(String(F)) : F);
  }
  const Ce = {
    normalize: oe,
    interpolate: (S) => S,
    type: "vnode"
  };
  function Ke(...S) {
    return Y((F) => {
      let ke;
      const Ie = F;
      try {
        Ie.processor = Ce, ke = Reflect.apply(Ii, null, [Ie, ...S]);
      } finally {
        Ie.processor = null;
      }
      return ke;
    }, () => Rs(...S), "translate", (F) => F[Ns](...S), (F) => [Li(F)], (F) => ft(F));
  }
  function me(...S) {
    return Y((F) => Reflect.apply(Si, null, [F, ...S]), () => xs(...S), "number format", (F) => F[$s](...S), Oi, (F) => ue(F) || ft(F));
  }
  function rt(...S) {
    return Y((F) => Reflect.apply(ki, null, [F, ...S]), () => Os(...S), "datetime format", (F) => F[Ps](...S), Oi, (F) => ue(F) || ft(F));
  }
  function kt(S) {
    T = S, x.pluralRules = T;
  }
  function He(S, F) {
    return Y(() => {
      if (!S)
        return !1;
      const ke = ue(F) ? F : i.value, Ie = lt(ke), Ze = x.messageResolver(Ie, S);
      return Dn(Ze) || or(Ze) || ue(Ze);
    }, () => [S], "translate exists", (ke) => Reflect.apply(ke.te, ke, [S, F]), Nm, (ke) => dt(ke));
  }
  function $t(S) {
    let F = null;
    const ke = Ou(x, l.value, i.value);
    for (let Ie = 0; Ie < ke.length; Ie++) {
      const Ze = u.value[ke[Ie]] || {}, Mt = x.messageResolver(Ze, S);
      if (Mt != null) {
        F = Mt;
        break;
      }
    }
    return F;
  }
  function Tt(S) {
    const F = $t(S);
    return F ?? (t ? t.tm(S) || {} : {});
  }
  function lt(S) {
    return u.value[S] || {};
  }
  function St(S, F) {
    if (o) {
      const ke = { [S]: F };
      for (const Ie in ke)
        wn(ke, Ie) && Go(ke[Ie]);
      F = ke[S];
    }
    u.value[S] = F, x.messages = u.value;
  }
  function Je(S, F) {
    u.value[S] = u.value[S] || {};
    const ke = { [S]: F };
    if (o)
      for (const Ie in ke)
        wn(ke, Ie) && Go(ke[Ie]);
    F = ke[S], ka(F, u.value[S]), x.messages = u.value;
  }
  function Ct(S) {
    return d.value[S] || {};
  }
  function k(S, F) {
    d.value[S] = F, x.datetimeFormats = d.value, Ti(x, S, F);
  }
  function O(S, F) {
    d.value[S] = Nt(d.value[S] || {}, F), x.datetimeFormats = d.value, Ti(x, S, F);
  }
  function V(S) {
    return p.value[S] || {};
  }
  function J(S, F) {
    p.value[S] = F, x.numberFormats = p.value, Ei(x, S, F);
  }
  function xe(S, F) {
    p.value[S] = Nt(p.value[S] || {}, F), x.numberFormats = p.value, Ei(x, S, F);
  }
  xi++, t && li && (Ae(t.locale, (S) => {
    s && (i.value = S, x.locale = S, Co(x, i.value, l.value));
  }), Ae(t.fallbackLocale, (S) => {
    s && (l.value = S, x.fallbackLocale = S, Co(x, i.value, l.value));
  }));
  const ge = {
    id: xi,
    locale: le,
    fallbackLocale: he,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(S) {
      s = S, S && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Co(x, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: se,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return T || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(S) {
      m = S, x.missingWarn = m;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(S) {
      y = S, x.fallbackWarn = y;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(S) {
      g = S;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(S) {
      v = S, x.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return R;
    },
    set warnHtmlMessage(S) {
      R = S, x.warnHtmlMessage = S;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(S) {
      I = S, x.escapeParameter = S;
    },
    t: q,
    getLocaleMessage: lt,
    setLocaleMessage: St,
    mergeLocaleMessage: Je,
    getPostTranslationHandler: B,
    setPostTranslationHandler: Q,
    getMissingHandler: H,
    setMissingHandler: pe,
    [Om]: kt
  };
  return ge.datetimeFormats = be, ge.numberFormats = ye, ge.rt = Pe, ge.te = He, ge.tm = Tt, ge.d = Ue, ge.n = ve, ge.getDateTimeFormat = Ct, ge.setDateTimeFormat = k, ge.mergeDateTimeFormat = O, ge.getNumberFormat = V, ge.setNumberFormat = J, ge.mergeNumberFormat = xe, ge[zu] = n, ge[Ns] = Ke, ge[Ps] = rt, ge[$s] = me, ge;
}
const ll = {
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
function $m({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === ct ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Ge());
}
function ju() {
  return ct;
}
Nt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => It(e) || !isNaN(e)
  }
}, ll);
function Mm(e) {
  return ft(e) && !ue(e[0]);
}
function Uu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Ge();
    e.locale && (s.locale = e.locale), ue(e.format) ? s.key = e.format : De(e.format) && (ue(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, y) => n.includes(y) ? Nt(Ge(), m, { [y]: e.format[y] }) : m, Ge()));
    const l = r(e.value, s, i);
    let u = [s.key];
    ft(l) ? u = l.map((m, y) => {
      const g = o[m.type], v = g ? g({ [m.type]: m.value, index: y, parts: l }) : [m.value];
      return Mm(v) && (v[0].key = `${m.type}-${y}`), v;
    }) : ue(l) && (u = [l]);
    const d = Nt(Ge(), a), p = ue(e.tag) || De(e.tag) ? e.tag : ju();
    return hu(p, d, u);
  };
}
Nt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ll);
const Dm = /* @__PURE__ */ Ur("global-vue-i18n");
function Qo(e = {}) {
  const t = Vu();
  if (t == null)
    throw Wo(fo.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wo(fo.NOT_INSTALLED);
  const n = Fm(t), r = Bm(n), o = xm(t), a = zm(e, o);
  if (a === "global")
    return Rm(r, e, o), r;
  if (a === "parent") {
    let l = Vm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Nt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Pm(l), s.__composerExtend && (i[Ms] = s.__composerExtend(i)), Um(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function Fm(e) {
  const t = je(e.isCE ? Dm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Wo(e.isCE ? fo.NOT_INSTALLED_WITH_PROVIDE : fo.UNEXPECTED_ERROR);
  return t;
}
function zm(e, t) {
  return Ua(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Bm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Vm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = jm(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[zu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function jm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Um(e, t, n) {
  pt(() => {
  }, t), ja(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Ms];
    o && (o(), delete r[Ms]);
  }, t);
}
Nt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ll);
Lm();
cm(qp);
um(sm);
dm(Ou);
function il() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Hr = il();
function Hu(e) {
  Hr = e;
}
var Do = { exec: () => null };
function $e(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Kt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var Hm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Kt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Wm = /^(?:[ \t]*(?:\n|$))+/, Gm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Km = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Jo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, qm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, cl = /(?:[*+-]|\d{1,9}[.)])/, Wu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Gu = $e(Wu).replace(/bull/g, cl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Ym = $e(Wu).replace(/bull/g, cl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ul = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Zm = /^[^\n]+/, dl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Xm = $e(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", dl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Qm = $e(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, cl).getRegex(), Ga = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", fl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Jm = $e("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", fl).replace("tag", Ga).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ku = $e(ul).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex(), eh = $e(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ku).getRegex(), pl = { blockquote: eh, code: Gm, def: Xm, fences: Km, heading: qm, hr: Jo, html: Jm, lheading: Gu, list: Qm, newline: Wm, paragraph: Ku, table: Do, text: Zm }, Ni = $e("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex(), th = { ...pl, lheading: Ym, table: Ni, paragraph: $e(ul).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ni).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex() }, nh = { ...pl, html: $e(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", fl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Do, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: $e(ul).replace("hr", Jo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Gu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, rh = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, oh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, qu = /^( {2,}|\\)\n(?!\s*$)/, ah = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ka = /[\p{P}\p{S}]/u, ml = /[\s\p{P}\p{S}]/u, Yu = /[^\s\p{P}\p{S}]/u, sh = $e(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ml).getRegex(), Zu = /(?!~)[\p{P}\p{S}]/u, lh = /(?!~)[\s\p{P}\p{S}]/u, ih = /(?:[^\s\p{P}\p{S}]|~)/u, ch = $e(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Hm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Xu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, uh = $e(Xu, "u").replace(/punct/g, Ka).getRegex(), dh = $e(Xu, "u").replace(/punct/g, Zu).getRegex(), Qu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", fh = $e(Qu, "gu").replace(/notPunctSpace/g, Yu).replace(/punctSpace/g, ml).replace(/punct/g, Ka).getRegex(), ph = $e(Qu, "gu").replace(/notPunctSpace/g, ih).replace(/punctSpace/g, lh).replace(/punct/g, Zu).getRegex(), mh = $e("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Yu).replace(/punctSpace/g, ml).replace(/punct/g, Ka).getRegex(), hh = $e(/\\(punct)/, "gu").replace(/punct/g, Ka).getRegex(), gh = $e(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), vh = $e(fl).replace("(?:-->|$)", "-->").getRegex(), bh = $e("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", vh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Oa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, yh = $e(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Oa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ju = $e(/^!?\[(label)\]\[(ref)\]/).replace("label", Oa).replace("ref", dl).getRegex(), ed = $e(/^!?\[(ref)\](?:\[\])?/).replace("ref", dl).getRegex(), _h = $e("reflink|nolink(?!\\()", "g").replace("reflink", Ju).replace("nolink", ed).getRegex(), Pi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, hl = { _backpedal: Do, anyPunctuation: hh, autolink: gh, blockSkip: ch, br: qu, code: oh, del: Do, emStrongLDelim: uh, emStrongRDelimAst: fh, emStrongRDelimUnd: mh, escape: rh, link: yh, nolink: ed, punctuation: sh, reflink: Ju, reflinkSearch: _h, tag: bh, text: ah, url: Do }, wh = { ...hl, link: $e(/^!?\[(label)\]\((.*?)\)/).replace("label", Oa).getRegex(), reflink: $e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Oa).getRegex() }, Ds = { ...hl, emStrongRDelimAst: ph, emStrongLDelim: dh, url: $e(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Pi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: $e(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Pi).getRegex() }, kh = { ...Ds, br: $e(qu).replace("{2,}", "*").getRegex(), text: $e(Ds.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, fa = { normal: pl, gfm: th, pedantic: nh }, Io = { normal: hl, gfm: Ds, breaks: kh, pedantic: wh }, Th = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, $i = (e) => Th[e];
function Zn(e, t) {
  if (t) {
    if (Kt.escapeTest.test(e)) return e.replace(Kt.escapeReplace, $i);
  } else if (Kt.escapeTestNoEncode.test(e)) return e.replace(Kt.escapeReplaceNoEncode, $i);
  return e;
}
function Mi(e) {
  try {
    e = encodeURI(e).replace(Kt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Di(e, t) {
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
function Lo(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Sh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Fi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function Eh(e, t, n) {
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
var xa = class {
  constructor(e) {
    We(this, "options");
    We(this, "rules");
    We(this, "lexer");
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Lo(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Eh(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = Lo(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Lo(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = Lo(t[0], `
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
        let p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, a, !0), this.lexer.state.top = p, n.length === 0) break;
        let m = a.at(-1);
        if (m?.type === "code") break;
        if (m?.type === "blockquote") {
          let y = m, g = y.raw + `
` + n.join(`
`), v = this.blockquote(g);
          a[a.length - 1] = v, r = r.substring(0, r.length - y.raw.length) + v.raw, o = o.substring(0, o.length - y.text.length) + v.text;
          break;
        } else if (m?.type === "list") {
          let y = m, g = y.raw + `
` + n.join(`
`), v = this.list(g);
          a[a.length - 1] = v, r = r.substring(0, r.length - m.raw.length) + v.raw, o = o.substring(0, o.length - y.raw.length) + v.raw, n = g.substring(a.at(-1).raw.length).split(`
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
        let p = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (v) => " ".repeat(3 * v.length)), m = e.split(`
`, 1)[0], y = !p.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, d = p.trimStart()) : y ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, d = p.slice(g), g += t[1].length), y && this.rules.other.blankLine.test(m) && (u += m + `
`, e = e.substring(m.length + 1), l = !0), !l) {
          let v = this.rules.other.nextBulletRegex(g), E = this.rules.other.hrRegex(g), f = this.rules.other.fencesBeginRegex(g), C = this.rules.other.headingBeginRegex(g), R = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let I = e.split(`
`, 1)[0], w;
            if (m = I, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), w = m) : w = m.replace(this.rules.other.tabCharGlobal, "    "), f.test(m) || C.test(m) || R.test(m) || v.test(m) || E.test(m)) break;
            if (w.search(this.rules.other.nonSpaceChar) >= g || !m.trim()) d += `
` + w.slice(g);
            else {
              if (y || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(p) || C.test(p) || E.test(p)) break;
              d += `
` + m;
            }
            !y && !m.trim() && (y = !0), u += I + `
`, e = e.substring(I.length + 1), p = w.slice(g);
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
          let u = l.tokens.filter((p) => p.type === "space"), d = u.length > 0 && u.some((p) => this.rules.other.anyLine.test(p.raw));
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
    let n = Di(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(Di(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = Lo(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Sh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), Fi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return Fi(n, o, n[0], this.lexer, this.rules);
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
        let d = [...r[0]][0].length, p = e.slice(0, o + r.index + d + s);
        if (Math.min(o, s) % 2) {
          let y = p.slice(1, -1);
          return { type: "em", raw: p, text: y, tokens: this.lexer.inlineTokens(y) };
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
}, bn = class Fs {
  constructor(t) {
    We(this, "tokens");
    We(this, "options");
    We(this, "state");
    We(this, "inlineQueue");
    We(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Hr, this.options.tokenizer = this.options.tokenizer || new xa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Kt, block: fa.normal, inline: Io.normal };
    this.options.pedantic ? (n.block = fa.pedantic, n.inline = Io.pedantic) : this.options.gfm && (n.block = fa.gfm, this.options.breaks ? n.inline = Io.breaks : n.inline = Io.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: fa, inline: Io };
  }
  static lex(t, n) {
    return new Fs(n).lex(t);
  }
  static lexInline(t, n) {
    return new Fs(n).inlineTokens(t);
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
        let d = 1 / 0, p = t.slice(1), m;
        this.options.extensions.startInline.forEach((y) => {
          m = y.call({ lexer: this }, p), typeof m == "number" && m >= 0 && (d = Math.min(d, m));
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
}, Ra = class {
  constructor(t) {
    We(this, "options");
    We(this, "parser");
    this.options = t || Hr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Kt.notSpaceStart)?.[0], a = t.replace(Kt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Zn(o) + '">' + (r ? a : Zn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Zn(a, !0)) + `</code></pre>
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
    return `<code>${Zn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Mi(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Zn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Mi(t);
    if (a === null) return Zn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Zn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Zn(t.text);
  }
}, gl = class {
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
}, yn = class zs {
  constructor(t) {
    We(this, "options");
    We(this, "renderer");
    We(this, "textRenderer");
    this.options = t || Hr, this.options.renderer = this.options.renderer || new Ra(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new gl();
  }
  static parse(t, n) {
    return new zs(n).parse(t);
  }
  static parseInline(t, n) {
    return new zs(n).parseInline(t);
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
}, _a, $o = (_a = class {
  constructor(e) {
    We(this, "options");
    We(this, "block");
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
    return this.block ? bn.lex : bn.lexInline;
  }
  provideParser() {
    return this.block ? yn.parse : yn.parseInline;
  }
}, We(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), We(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a), Ah = class {
  constructor(...t) {
    We(this, "defaults", il());
    We(this, "options", this.setOptions);
    We(this, "parse", this.parseMarkdown(!0));
    We(this, "parseInline", this.parseMarkdown(!1));
    We(this, "Parser", yn);
    We(this, "Renderer", Ra);
    We(this, "TextRenderer", gl);
    We(this, "Lexer", bn);
    We(this, "Tokenizer", xa);
    We(this, "Hooks", $o);
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
        let a = this.defaults.renderer || new Ra(this.defaults);
        for (let s in r.renderer) {
          if (!(s in a)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let i = s, l = r.renderer[i], u = a[i];
          a[i] = (...d) => {
            let p = l.apply(a, d);
            return p === !1 && (p = u.apply(a, d)), p || "";
          };
        }
        o.renderer = a;
      }
      if (r.tokenizer) {
        let a = this.defaults.tokenizer || new xa(this.defaults);
        for (let s in r.tokenizer) {
          if (!(s in a)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let i = s, l = r.tokenizer[i], u = a[i];
          a[i] = (...d) => {
            let p = l.apply(a, d);
            return p === !1 && (p = u.apply(a, d)), p;
          };
        }
        o.tokenizer = a;
      }
      if (r.hooks) {
        let a = this.defaults.hooks || new $o();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          $o.passThroughHooks.has(s) ? a[i] = (d) => {
            if (this.defaults.async && $o.passThroughHooksRespectAsync.has(s)) return (async () => {
              let m = await l.call(a, d);
              return u.call(a, m);
            })();
            let p = l.call(a, d);
            return u.call(a, p);
          } : a[i] = (...d) => {
            if (this.defaults.async) return (async () => {
              let m = await l.apply(a, d);
              return m === !1 && (m = await u.apply(a, d)), m;
            })();
            let p = l.apply(a, d);
            return p === !1 && (p = u.apply(a, d)), p;
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
        let d = await (a.hooks ? await a.hooks.provideParser() : t ? yn.parse : yn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
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
        let o = "<p>An error occurred:</p><pre>" + Zn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Br = new Ah();
function Ve(e, t) {
  return Br.parse(e, t);
}
Ve.options = Ve.setOptions = function(e) {
  return Br.setOptions(e), Ve.defaults = Br.defaults, Hu(Ve.defaults), Ve;
};
Ve.getDefaults = il;
Ve.defaults = Hr;
Ve.use = function(...e) {
  return Br.use(...e), Ve.defaults = Br.defaults, Hu(Ve.defaults), Ve;
};
Ve.walkTokens = function(e, t) {
  return Br.walkTokens(e, t);
};
Ve.parseInline = Br.parseInline;
Ve.Parser = yn;
Ve.parser = yn.parse;
Ve.Renderer = Ra;
Ve.TextRenderer = gl;
Ve.Lexer = bn;
Ve.lexer = bn.lex;
Ve.Tokenizer = xa;
Ve.Hooks = $o;
Ve.parse = Ve;
Ve.options;
Ve.setOptions;
Ve.use;
Ve.walkTokens;
Ve.parseInline;
yn.parse;
bn.lex;
function Ch(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Pt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var zi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(zi || (zi = {}));
async function Ih(e, t) {
  await Pt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Lh(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return Pt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Ch(t)
  }).then((a) => async () => Ih(e, a));
}
async function td() {
  return await Pt("local_ai_get_config");
}
async function Ta(e) {
  return await Pt("local_ai_save_config", { config: e });
}
async function nd(e) {
  return await Pt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Oh() {
  return await Pt("local_ai_get_runtime_status");
}
async function rd() {
  return await Pt("local_ai_get_status");
}
async function xh(e) {
  return await Pt("local_ai_start_service", {
    config: e ?? null
  });
}
async function od() {
  return await Pt("local_ai_restart_service");
}
async function Rh() {
  await Pt("local_ai_stop_service");
}
function ad() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Nh(e, t, n = {}) {
  const r = n.requestId ?? ad(), o = await Lh(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === r && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await Pt("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function ms(e) {
  return await Pt("local_ai_cancel_chat_stream", { requestId: e });
}
async function Ph() {
  return await Pt("local_ai_get_chat_histories");
}
async function $h(e) {
  return await Pt("local_ai_save_chat_history", {
    history: e
  });
}
async function Mh(e) {
  return await Pt("local_ai_delete_chat_history", {
    historyId: e
  });
}
const Dh = /* @__PURE__ */ new Set([
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
]), Fh = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), zh = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), Bh = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), Vh = 5, jh = 1024 * 1024, Uh = 5 * 1024 * 1024, Bi = 4e4, vl = (e) => e.split(".").pop()?.toLowerCase() ?? "", Hh = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, hs = (e) => Fh.has(e.type) || zh.has(vl(e.name)), Vi = (e) => e.type.startsWith("text/") || Dh.has(vl(e.name)), Wh = (e) => Bh.has(vl(e.name)), Gh = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), Kh = async (e) => {
  const t = await e.text();
  return t.length <= Bi ? { text: t, truncated: !1 } : {
    text: t.slice(0, Bi),
    truncated: !0
  };
}, qh = (e, t) => {
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
function ji(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Yh(e) {
  if (Array.isArray(e)) return e;
}
function Zh(e, t) {
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
function Xh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qh(e, t) {
  return Yh(e) || Zh(e, t) || Jh(e, t) || Xh();
}
function Jh(e, t) {
  if (e) {
    if (typeof e == "string") return ji(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ji(e, t) : void 0;
  }
}
const sd = Object.entries, Ui = Object.setPrototypeOf, eg = Object.isFrozen, tg = Object.getPrototypeOf, ng = Object.getOwnPropertyDescriptor;
let Yt = Object.freeze, dn = Object.seal, so = Object.create, ld = typeof Reflect < "u" && Reflect, Bs = ld.apply, Vs = ld.construct;
Yt || (Yt = function(t) {
  return t;
});
dn || (dn = function(t) {
  return t;
});
Bs || (Bs = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Vs || (Vs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const eo = _t(Array.prototype.forEach), rg = _t(Array.prototype.lastIndexOf), Hi = _t(Array.prototype.pop), to = _t(Array.prototype.push), og = _t(Array.prototype.splice), Wt = Array.isArray, Mo = _t(String.prototype.toLowerCase), gs = _t(String.prototype.toString), Wi = _t(String.prototype.match), no = _t(String.prototype.replace), Gi = _t(String.prototype.indexOf), ag = _t(String.prototype.trim), sg = _t(Number.prototype.toString), lg = _t(Boolean.prototype.toString), Ki = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), qi = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), it = _t(Object.prototype.hasOwnProperty), Oo = _t(Object.prototype.toString), xt = _t(RegExp.prototype.test), xo = ig(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Bs(e, t, r);
  };
}
function ig(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Vs(e, n);
  };
}
function Le(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mo;
  if (Ui && Ui(e, null), !Wt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (eg(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function cg(e) {
  for (let t = 0; t < e.length; t++)
    it(e, t) || (e[t] = null);
  return e;
}
function Bt(e) {
  const t = so(null);
  for (const r of sd(e)) {
    var n = Qh(r, 2);
    const o = n[0], a = n[1];
    it(e, o) && (Wt(a) ? t[o] = cg(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Bt(a) : t[o] = a);
  }
  return t;
}
function ug(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return sg(e);
    case "boolean":
      return lg(e);
    case "bigint":
      return Ki ? Ki(e) : "0";
    case "symbol":
      return qi ? qi(e) : "Symbol()";
    case "undefined":
      return Oo(e);
    case "function":
    case "object": {
      if (e === null)
        return Oo(e);
      const t = e, n = Rn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Oo(r);
      }
      return Oo(e);
    }
    default:
      return Oo(e);
  }
}
function Rn(e, t) {
  for (; e !== null; ) {
    const r = ng(e, t);
    if (r) {
      if (r.get)
        return _t(r.get);
      if (typeof r.value == "function")
        return _t(r.value);
    }
    e = tg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function dg(e) {
  try {
    return xt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Yi = Yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vs = Yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bs = Yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), fg = Yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ys = Yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), pg = Yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Zi = Yt(["#text"]), Xi = Yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), _s = Yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qi = Yt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pa = Yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), mg = dn(/{{[\w\W]*|^[\w\W]*}}/g), hg = dn(/<%[\w\W]*|^[\w\W]*%>/g), gg = dn(/\${[\w\W]*/g), vg = dn(/^data-[\-\w.\u00B7-\uFFFF]+$/), bg = dn(/^aria-[\-\w]+$/), Ji = dn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yg = dn(/^(?:\w+script|data):/i), _g = dn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), wg = dn(/^html$/i), kg = dn(/^[a-z][.\w]*(-[.\w]+)+$/i), xn = {
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
}, Tg = function() {
  return typeof window > "u" ? null : window;
}, Sg = function(t, n) {
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
}, ec = function() {
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
function id() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Tg();
  const t = (ce) => id(ce);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== xn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, p = e.trustedTypes, m = i.prototype, y = Rn(m, "cloneNode"), g = Rn(m, "remove"), v = Rn(m, "nextSibling"), E = Rn(m, "childNodes"), f = Rn(m, "parentNode"), C = Rn(m, "shadowRoot"), R = Rn(m, "attributes"), I = s && s.prototype ? Rn(s.prototype, "nodeType") : null, w = s && s.prototype ? Rn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ce = n.createElement("template");
    ce.content && ce.content.ownerDocument && (n = ce.content.ownerDocument);
  }
  let T, x = "";
  const Z = n, X = Z.implementation, le = Z.createNodeIterator, he = Z.createDocumentFragment, se = Z.getElementsByTagName, be = r.importNode;
  let ye = ec();
  t.isSupported = typeof sd == "function" && typeof f == "function" && X && X.createHTMLDocument !== void 0;
  const B = mg, Q = hg, H = gg, pe = vg, Y = bg, q = yg, Pe = _g, Ue = kg;
  let ve = Ji, oe = null;
  const te = Le({}, [...Yi, ...vs, ...bs, ...ys, ...Zi]);
  let Ce = null;
  const Ke = Le({}, [...Xi, ..._s, ...Qi, ...pa]);
  let me = Object.seal(so(null, {
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
  })), rt = null, kt = null;
  const He = Object.seal(so(null, {
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
  let $t = !0, Tt = !0, lt = !1, St = !0, Je = !1, Ct = !0, k = !1, O = !1, V = !1, J = !1, xe = !1, ge = !1, S = !0, F = !1;
  const ke = "user-content-";
  let Ie = !0, Ze = !1, Mt = {}, Ye = null;
  const Wn = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ir = null;
  const Gn = Le({}, ["audio", "video", "img", "source", "image", "track"]);
  let pr = null;
  const Kn = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", mn = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let Cn = Zt, Lr = !1, Or = null;
  const mr = Le({}, [qn, mn, Zt], gs);
  let xr = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), hr = Le({}, ["annotation-xml"]);
  const qr = Le({}, ["title", "style", "font", "a", "script"]);
  let hn = null;
  const Yr = ["application/xhtml+xml", "text/html"], Zr = "text/html";
  let Be = null, In = null;
  const Rr = n.createElement("form"), Xr = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, gr = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (In && In === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = Bt(_), hn = // eslint-disable-next-line unicorn/prefer-includes
    Yr.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Zr : _.PARSER_MEDIA_TYPE, Be = hn === "application/xhtml+xml" ? gs : Mo, oe = it(_, "ALLOWED_TAGS") && Wt(_.ALLOWED_TAGS) ? Le({}, _.ALLOWED_TAGS, Be) : te, Ce = it(_, "ALLOWED_ATTR") && Wt(_.ALLOWED_ATTR) ? Le({}, _.ALLOWED_ATTR, Be) : Ke, Or = it(_, "ALLOWED_NAMESPACES") && Wt(_.ALLOWED_NAMESPACES) ? Le({}, _.ALLOWED_NAMESPACES, gs) : mr, pr = it(_, "ADD_URI_SAFE_ATTR") && Wt(_.ADD_URI_SAFE_ATTR) ? Le(Bt(Kn), _.ADD_URI_SAFE_ATTR, Be) : Kn, Ir = it(_, "ADD_DATA_URI_TAGS") && Wt(_.ADD_DATA_URI_TAGS) ? Le(Bt(Gn), _.ADD_DATA_URI_TAGS, Be) : Gn, Ye = it(_, "FORBID_CONTENTS") && Wt(_.FORBID_CONTENTS) ? Le({}, _.FORBID_CONTENTS, Be) : Wn, rt = it(_, "FORBID_TAGS") && Wt(_.FORBID_TAGS) ? Le({}, _.FORBID_TAGS, Be) : Bt({}), kt = it(_, "FORBID_ATTR") && Wt(_.FORBID_ATTR) ? Le({}, _.FORBID_ATTR, Be) : Bt({}), Mt = it(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? Bt(_.USE_PROFILES) : _.USE_PROFILES : !1, $t = _.ALLOW_ARIA_ATTR !== !1, Tt = _.ALLOW_DATA_ATTR !== !1, lt = _.ALLOW_UNKNOWN_PROTOCOLS || !1, St = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Je = _.SAFE_FOR_TEMPLATES || !1, Ct = _.SAFE_FOR_XML !== !1, k = _.WHOLE_DOCUMENT || !1, J = _.RETURN_DOM || !1, xe = _.RETURN_DOM_FRAGMENT || !1, ge = _.RETURN_TRUSTED_TYPE || !1, V = _.FORCE_BODY || !1, S = _.SANITIZE_DOM !== !1, F = _.SANITIZE_NAMED_PROPS || !1, Ie = _.KEEP_CONTENT !== !1, Ze = _.IN_PLACE || !1, ve = dg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : Ji, Cn = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Zt, xr = it(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Bt(_.MATHML_TEXT_INTEGRATION_POINTS) : Le({}, ["mi", "mo", "mn", "ms", "mtext"]), hr = it(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? Bt(_.HTML_INTEGRATION_POINTS) : Le({}, ["annotation-xml"]);
    const j = it(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? Bt(_.CUSTOM_ELEMENT_HANDLING) : so(null);
    if (me = so(null), it(j, "tagNameCheck") && Xr(j.tagNameCheck) && (me.tagNameCheck = j.tagNameCheck), it(j, "attributeNameCheck") && Xr(j.attributeNameCheck) && (me.attributeNameCheck = j.attributeNameCheck), it(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), Je && (Tt = !1), xe && (J = !0), Mt && (oe = Le({}, Zi), Ce = so(null), Mt.html === !0 && (Le(oe, Yi), Le(Ce, Xi)), Mt.svg === !0 && (Le(oe, vs), Le(Ce, _s), Le(Ce, pa)), Mt.svgFilters === !0 && (Le(oe, bs), Le(Ce, _s), Le(Ce, pa)), Mt.mathMl === !0 && (Le(oe, ys), Le(Ce, Qi), Le(Ce, pa))), He.tagCheck = null, He.attributeCheck = null, it(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? He.tagCheck = _.ADD_TAGS : Wt(_.ADD_TAGS) && (oe === te && (oe = Bt(oe)), Le(oe, _.ADD_TAGS, Be))), it(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? He.attributeCheck = _.ADD_ATTR : Wt(_.ADD_ATTR) && (Ce === Ke && (Ce = Bt(Ce)), Le(Ce, _.ADD_ATTR, Be))), it(_, "ADD_URI_SAFE_ATTR") && Wt(_.ADD_URI_SAFE_ATTR) && Le(pr, _.ADD_URI_SAFE_ATTR, Be), it(_, "FORBID_CONTENTS") && Wt(_.FORBID_CONTENTS) && (Ye === Wn && (Ye = Bt(Ye)), Le(Ye, _.FORBID_CONTENTS, Be)), it(_, "ADD_FORBID_CONTENTS") && Wt(_.ADD_FORBID_CONTENTS) && (Ye === Wn && (Ye = Bt(Ye)), Le(Ye, _.ADD_FORBID_CONTENTS, Be)), Ie && (oe["#text"] = !0), k && Le(oe, ["html", "head", "body"]), oe.table && (Le(oe, ["tbody"]), delete rt.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw xo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw xo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      T = _.TRUSTED_TYPES_POLICY, x = T.createHTML("");
    } else
      T === void 0 && (T = Sg(p, o)), T !== null && typeof x == "string" && (x = T.createHTML(""));
    (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && oe === te && (oe = Bt(oe)), ye.uponSanitizeAttribute.length > 0 && Ce === Ke && (Ce = Bt(Ce)), Yt && Yt(_), In = _;
  }, on = Le({}, [...vs, ...bs, ...fg]), Nr = Le({}, [...ys, ...pg]), To = function(_) {
    let j = f(_);
    (!j || !j.tagName) && (j = {
      namespaceURI: Cn,
      tagName: "template"
    });
    const ae = Mo(_.tagName), Ne = Mo(j.tagName);
    return Or[_.namespaceURI] ? _.namespaceURI === mn ? j.namespaceURI === Zt ? ae === "svg" : j.namespaceURI === qn ? ae === "svg" && (Ne === "annotation-xml" || xr[Ne]) : !!on[ae] : _.namespaceURI === qn ? j.namespaceURI === Zt ? ae === "math" : j.namespaceURI === mn ? ae === "math" && hr[Ne] : !!Nr[ae] : _.namespaceURI === Zt ? j.namespaceURI === mn && !hr[Ne] || j.namespaceURI === qn && !xr[Ne] ? !1 : !Nr[ae] && (qr[ae] || !on[ae]) : !!(hn === "application/xhtml+xml" && Or[_.namespaceURI]) : !1;
  }, Dt = function(_) {
    to(t.removed, {
      element: _
    });
    try {
      f(_).removeChild(_);
    } catch {
      g(_);
    }
  }, $ = function(_, j) {
    try {
      to(t.removed, {
        attribute: j.getAttributeNode(_),
        from: j
      });
    } catch {
      to(t.removed, {
        attribute: null,
        from: j
      });
    }
    if (j.removeAttribute(_), _ === "is")
      if (J || xe)
        try {
          Dt(j);
        } catch {
        }
      else
        try {
          j.setAttribute(_, "");
        } catch {
        }
  }, re = function(_) {
    let j = null, ae = null;
    if (V)
      _ = "<remove></remove>" + _;
    else {
      const qe = Wi(_, /^[\r\n\t ]+/);
      ae = qe && qe[0];
    }
    hn === "application/xhtml+xml" && Cn === Zt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Ne = T ? T.createHTML(_) : _;
    if (Cn === Zt)
      try {
        j = new d().parseFromString(Ne, hn);
      } catch {
      }
    if (!j || !j.documentElement) {
      j = X.createDocument(Cn, "template", null);
      try {
        j.documentElement.innerHTML = Lr ? x : Ne;
      } catch {
      }
    }
    const Oe = j.body || j.documentElement;
    return _ && ae && Oe.insertBefore(n.createTextNode(ae), Oe.childNodes[0] || null), Cn === Zt ? se.call(j, k ? "html" : "body")[0] : k ? j.documentElement : Oe;
  }, Ee = function(_) {
    return le.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, et = function(_) {
    _.normalize();
    const j = le.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ae = j.nextNode();
    for (; ae; ) {
      let Ne = ae.data;
      eo([B, Q, H], (Oe) => {
        Ne = no(Ne, Oe, " ");
      }), ae.data = Ne, ae = j.nextNode();
    }
  }, mt = function(_) {
    const j = w ? w(_) : null;
    return typeof j != "string" || Be(j) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== R(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    _.childNodes !== E(_);
  }, Ot = function(_) {
    if (!I || typeof _ != "object" || _ === null)
      return !1;
    try {
      return I(_) === xn.documentFragment;
    } catch {
      return !1;
    }
  }, Ht = function(_) {
    if (!I || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof I(_) == "number";
    } catch {
      return !1;
    }
  };
  function Ft(ce, _, j) {
    eo(ce, (ae) => {
      ae.call(t, _, j, In);
    });
  }
  const zt = function(_) {
    let j = null;
    if (Ft(ye.beforeSanitizeElements, _, null), mt(_))
      return Dt(_), !0;
    const ae = Be(_.nodeName);
    if (Ft(ye.uponSanitizeElement, _, {
      tagName: ae,
      allowedTags: oe
    }), Ct && _.hasChildNodes() && !Ht(_.firstElementChild) && xt(/<[/\w!]/g, _.innerHTML) && xt(/<[/\w!]/g, _.textContent) || Ct && _.namespaceURI === Zt && ae === "style" && Ht(_.firstElementChild) || _.nodeType === xn.progressingInstruction || Ct && _.nodeType === xn.comment && xt(/<[/\w]/g, _.data))
      return Dt(_), !0;
    if (rt[ae] || !(He.tagCheck instanceof Function && He.tagCheck(ae)) && !oe[ae]) {
      if (!rt[ae] && Qr(ae) && (me.tagNameCheck instanceof RegExp && xt(me.tagNameCheck, ae) || me.tagNameCheck instanceof Function && me.tagNameCheck(ae)))
        return !1;
      if (Ie && !Ye[ae]) {
        const Oe = f(_), qe = E(_);
        if (qe && Oe) {
          const Qt = qe.length;
          for (let cn = Qt - 1; cn >= 0; --cn) {
            const Jt = y(qe[cn], !0);
            Oe.insertBefore(Jt, v(_));
          }
        }
      }
      return Dt(_), !0;
    }
    return (I ? I(_) : _.nodeType) === xn.element && !To(_) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && xt(/<\/no(script|embed|frames)/i, _.innerHTML) ? (Dt(_), !0) : (Je && _.nodeType === xn.text && (j = _.textContent, eo([B, Q, H], (Oe) => {
      j = no(j, Oe, " ");
    }), _.textContent !== j && (to(t.removed, {
      element: _.cloneNode()
    }), _.textContent = j)), Ft(ye.afterSanitizeElements, _, null), !1);
  }, Pr = function(_, j, ae) {
    if (kt[j] || S && (j === "id" || j === "name") && (ae in n || ae in Rr))
      return !1;
    const Ne = Ce[j] || He.attributeCheck instanceof Function && He.attributeCheck(j, _);
    if (!(Tt && !kt[j] && xt(pe, j))) {
      if (!($t && xt(Y, j))) {
        if (!Ne || kt[j]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Qr(_) && (me.tagNameCheck instanceof RegExp && xt(me.tagNameCheck, _) || me.tagNameCheck instanceof Function && me.tagNameCheck(_)) && (me.attributeNameCheck instanceof RegExp && xt(me.attributeNameCheck, j) || me.attributeNameCheck instanceof Function && me.attributeNameCheck(j, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            j === "is" && me.allowCustomizedBuiltInElements && (me.tagNameCheck instanceof RegExp && xt(me.tagNameCheck, ae) || me.tagNameCheck instanceof Function && me.tagNameCheck(ae)))
          ) return !1;
        } else if (!pr[j]) {
          if (!xt(ve, no(ae, Pe, ""))) {
            if (!((j === "src" || j === "xlink:href" || j === "href") && _ !== "script" && Gi(ae, "data:") === 0 && Ir[_])) {
              if (!(lt && !xt(q, no(ae, Pe, "")))) {
                if (ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, is = Le({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Qr = function(_) {
    return !is[Mo(_)] && xt(Ue, _);
  }, aa = function(_) {
    Ft(ye.beforeSanitizeAttributes, _, null);
    const j = _.attributes;
    if (!j || mt(_))
      return;
    const ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ce,
      forceKeepAttr: void 0
    };
    let Ne = j.length;
    for (; Ne--; ) {
      const Oe = j[Ne], qe = Oe.name, Qt = Oe.namespaceURI, cn = Oe.value, Jt = Be(qe), So = cn;
      let ht = qe === "value" ? So : ag(So);
      if (ae.attrName = Jt, ae.attrValue = ht, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Ft(ye.uponSanitizeAttribute, _, ae), ht = ae.attrValue, F && (Jt === "id" || Jt === "name") && Gi(ht, ke) !== 0 && ($(qe, _), ht = ke + ht), Ct && xt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ht)) {
        $(qe, _);
        continue;
      }
      if (Jt === "attributename" && Wi(ht, "href")) {
        $(qe, _);
        continue;
      }
      if (ae.forceKeepAttr)
        continue;
      if (!ae.keepAttr) {
        $(qe, _);
        continue;
      }
      if (!St && xt(/\/>/i, ht)) {
        $(qe, _);
        continue;
      }
      Je && eo([B, Q, H], (sa) => {
        ht = no(ht, sa, " ");
      });
      const Eo = Be(_.nodeName);
      if (!Pr(Eo, Jt, ht)) {
        $(qe, _);
        continue;
      }
      if (T && typeof p == "object" && typeof p.getAttributeType == "function" && !Qt)
        switch (p.getAttributeType(Eo, Jt)) {
          case "TrustedHTML": {
            ht = T.createHTML(ht);
            break;
          }
          case "TrustedScriptURL": {
            ht = T.createScriptURL(ht);
            break;
          }
        }
      if (ht !== So)
        try {
          Qt ? _.setAttributeNS(Qt, qe, ht) : _.setAttribute(qe, ht), mt(_) ? Dt(_) : Hi(t.removed);
        } catch {
          $(qe, _);
        }
    }
    Ft(ye.afterSanitizeAttributes, _, null);
  }, $r = function(_) {
    let j = null;
    const ae = Ee(_);
    for (Ft(ye.beforeSanitizeShadowDOM, _, null); j = ae.nextNode(); )
      if (Ft(ye.uponSanitizeShadowNode, j, null), zt(j), aa(j), Ot(j.content) && $r(j.content), (I ? I(j) : j.nodeType) === xn.element) {
        const Oe = C ? C(j) : j.shadowRoot;
        Ot(Oe) && (Xt(Oe), $r(Oe));
      }
    Ft(ye.afterSanitizeShadowDOM, _, null);
  }, Xt = function(_) {
    const j = I ? I(_) : _.nodeType;
    if (j === xn.element) {
      const Oe = C ? C(_) : _.shadowRoot;
      Ot(Oe) && (Xt(Oe), $r(Oe));
    }
    const ae = E ? E(_) : _.childNodes;
    if (!ae)
      return;
    const Ne = [];
    eo(ae, (Oe) => {
      to(Ne, Oe);
    });
    for (const Oe of Ne)
      Xt(Oe);
    if (j === xn.element) {
      const Oe = w ? w(_) : null;
      if (typeof Oe == "string" && Be(Oe) === "template") {
        const qe = _.content;
        Ot(qe) && Xt(qe);
      }
    }
  };
  return t.sanitize = function(ce) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, ae = null, Ne = null, Oe = null;
    if (Lr = !ce, Lr && (ce = "<!-->"), typeof ce != "string" && !Ht(ce) && (ce = ug(ce), typeof ce != "string"))
      throw xo("dirty is not a string, aborting");
    if (!t.isSupported)
      return ce;
    if (O || gr(_), t.removed = [], typeof ce == "string" && (Ze = !1), Ze) {
      const cn = w ? w(ce) : ce.nodeName;
      if (typeof cn == "string") {
        const Jt = Be(cn);
        if (!oe[Jt] || rt[Jt])
          throw xo("root node is forbidden and cannot be sanitized in-place");
      }
      if (mt(ce))
        throw xo("root node is clobbered and cannot be sanitized in-place");
      Xt(ce);
    } else if (Ht(ce))
      j = re("<!---->"), ae = j.ownerDocument.importNode(ce, !0), ae.nodeType === xn.element && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? j = ae : j.appendChild(ae), Xt(ae);
    else {
      if (!J && !Je && !k && // eslint-disable-next-line unicorn/prefer-includes
      ce.indexOf("<") === -1)
        return T && ge ? T.createHTML(ce) : ce;
      if (j = re(ce), !j)
        return J ? null : ge ? x : "";
    }
    j && V && Dt(j.firstChild);
    const qe = Ee(Ze ? ce : j);
    for (; Ne = qe.nextNode(); )
      zt(Ne), aa(Ne), Ot(Ne.content) && $r(Ne.content);
    if (Ze)
      return Je && et(ce), ce;
    if (J) {
      if (Je && et(j), xe)
        for (Oe = he.call(j.ownerDocument); j.firstChild; )
          Oe.appendChild(j.firstChild);
      else
        Oe = j;
      return (Ce.shadowroot || Ce.shadowrootmode) && (Oe = be.call(r, Oe, !0)), Oe;
    }
    let Qt = k ? j.outerHTML : j.innerHTML;
    return k && oe["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && xt(wg, j.ownerDocument.doctype.name) && (Qt = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + Qt), Je && eo([B, Q, H], (cn) => {
      Qt = no(Qt, cn, " ");
    }), T && ge ? T.createHTML(Qt) : Qt;
  }, t.setConfig = function() {
    let ce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gr(ce), O = !0;
  }, t.clearConfig = function() {
    In = null, O = !1;
  }, t.isValidAttribute = function(ce, _, j) {
    In || gr({});
    const ae = Be(ce), Ne = Be(_);
    return Pr(ae, Ne, j);
  }, t.addHook = function(ce, _) {
    typeof _ == "function" && to(ye[ce], _);
  }, t.removeHook = function(ce, _) {
    if (_ !== void 0) {
      const j = rg(ye[ce], _);
      return j === -1 ? void 0 : og(ye[ce], j, 1)[0];
    }
    return Hi(ye[ce]);
  }, t.removeHooks = function(ce) {
    ye[ce] = [];
  }, t.removeAllHooks = function() {
    ye = ec();
  }, t;
}
var Eg = id();
const Ag = {
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
function Cg(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Eg.sanitize(e, Ag) : "";
}
const cd = Symbol(), Sa = "el", Ig = "is-", Dr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, ud = Symbol("namespaceContextKey"), bl = (e) => {
  const t = e || (qt() ? je(ud, W(Sa)) : W(Sa));
  return P(() => c(t) || Sa);
}, wt = (e, t) => {
  const n = bl(t);
  return {
    namespace: n,
    b: (v = "") => Dr(n.value, e, v, "", ""),
    e: (v) => v ? Dr(n.value, e, "", v, "") : "",
    m: (v) => v ? Dr(n.value, e, "", "", v) : "",
    be: (v, E) => v && E ? Dr(n.value, e, v, E, "") : "",
    em: (v, E) => v && E ? Dr(n.value, e, "", v, E) : "",
    bm: (v, E) => v && E ? Dr(n.value, e, v, "", E) : "",
    bem: (v, E, f) => v && E && f ? Dr(n.value, e, v, E, f) : "",
    is: (v, ...E) => {
      const f = E.length >= 1 ? E[0] : !0;
      return v && f ? `${Ig}${v}` : "";
    },
    cssVar: (v) => {
      const E = {};
      for (const f in v)
        v[f] && (E[`--${n.value}-${f}`] = v[f]);
      return E;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const E = {};
      for (const f in v)
        v[f] && (E[`--${n.value}-${e}-${f}`] = v[f]);
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
const Ko = () => {
}, Lg = Object.prototype.hasOwnProperty, tc = (e, t) => Lg.call(e, t), Pn = Array.isArray, st = (e) => typeof e == "function", Ut = (e) => typeof e == "string", sn = (e) => e !== null && typeof e == "object", nc = (e) => (sn(e) || st(e)) && st(e.then) && st(e.catch), Og = Object.prototype.toString, xg = (e) => Og.call(e), Rg = (e) => xg(e) === "[object Object]";
var dd = typeof global == "object" && global && global.Object === Object && global, Ng = typeof self == "object" && self && self.Object === Object && self, Hn = dd || Ng || Function("return this")(), Vn = Hn.Symbol, fd = Object.prototype, Pg = fd.hasOwnProperty, $g = fd.toString, Ro = Vn ? Vn.toStringTag : void 0;
function Mg(e) {
  var t = Pg.call(e, Ro), n = e[Ro];
  try {
    e[Ro] = void 0;
    var r = !0;
  } catch {
  }
  var o = $g.call(e);
  return r && (t ? e[Ro] = n : delete e[Ro]), o;
}
var Dg = Object.prototype, Fg = Dg.toString;
function zg(e) {
  return Fg.call(e);
}
var Bg = "[object Null]", Vg = "[object Undefined]", rc = Vn ? Vn.toStringTag : void 0;
function ko(e) {
  return e == null ? e === void 0 ? Vg : Bg : rc && rc in Object(e) ? Mg(e) : zg(e);
}
function po(e) {
  return e != null && typeof e == "object";
}
var jg = "[object Symbol]";
function qa(e) {
  return typeof e == "symbol" || po(e) && ko(e) == jg;
}
function Ug(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var En = Array.isArray, oc = Vn ? Vn.prototype : void 0, ac = oc ? oc.toString : void 0;
function pd(e) {
  if (typeof e == "string")
    return e;
  if (En(e))
    return Ug(e, pd) + "";
  if (qa(e))
    return ac ? ac.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Hg = /\s/;
function Wg(e) {
  for (var t = e.length; t-- && Hg.test(e.charAt(t)); )
    ;
  return t;
}
var Gg = /^\s+/;
function Kg(e) {
  return e && e.slice(0, Wg(e) + 1).replace(Gg, "");
}
function Sr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var sc = NaN, qg = /^[-+]0x[0-9a-f]+$/i, Yg = /^0b[01]+$/i, Zg = /^0o[0-7]+$/i, Xg = parseInt;
function lc(e) {
  if (typeof e == "number")
    return e;
  if (qa(e))
    return sc;
  if (Sr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Sr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Kg(e);
  var n = Yg.test(e);
  return n || Zg.test(e) ? Xg(e.slice(2), n ? 2 : 8) : qg.test(e) ? sc : +e;
}
function md(e) {
  return e;
}
var Qg = "[object AsyncFunction]", Jg = "[object Function]", ev = "[object GeneratorFunction]", tv = "[object Proxy]";
function hd(e) {
  if (!Sr(e))
    return !1;
  var t = ko(e);
  return t == Jg || t == ev || t == Qg || t == tv;
}
var ws = Hn["__core-js_shared__"], ic = function() {
  var e = /[^.]+$/.exec(ws && ws.keys && ws.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nv(e) {
  return !!ic && ic in e;
}
var rv = Function.prototype, ov = rv.toString;
function Wr(e) {
  if (e != null) {
    try {
      return ov.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var av = /[\\^$.*+?()[\]{}|]/g, sv = /^\[object .+?Constructor\]$/, lv = Function.prototype, iv = Object.prototype, cv = lv.toString, uv = iv.hasOwnProperty, dv = RegExp(
  "^" + cv.call(uv).replace(av, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fv(e) {
  if (!Sr(e) || nv(e))
    return !1;
  var t = hd(e) ? dv : sv;
  return t.test(Wr(e));
}
function pv(e, t) {
  return e?.[t];
}
function Gr(e, t) {
  var n = pv(e, t);
  return fv(n) ? n : void 0;
}
var js = Gr(Hn, "WeakMap");
function mv(e, t, n) {
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
var hv = 800, gv = 16, vv = Date.now;
function bv(e) {
  var t = 0, n = 0;
  return function() {
    var r = vv(), o = gv - (r - n);
    if (n = r, o > 0) {
      if (++t >= hv)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function yv(e) {
  return function() {
    return e;
  };
}
var Na = function() {
  try {
    var e = Gr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), _v = Na ? function(e, t) {
  return Na(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: yv(t),
    writable: !0
  });
} : md, wv = bv(_v);
function kv(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Tv = 9007199254740991, Sv = /^(?:0|[1-9]\d*)$/;
function yl(e, t) {
  var n = typeof e;
  return t = t ?? Tv, !!t && (n == "number" || n != "symbol" && Sv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ev(e, t, n) {
  t == "__proto__" && Na ? Na(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function _l(e, t) {
  return e === t || e !== e && t !== t;
}
var Av = Object.prototype, Cv = Av.hasOwnProperty;
function Iv(e, t, n) {
  var r = e[t];
  (!(Cv.call(e, t) && _l(r, n)) || n === void 0 && !(t in e)) && Ev(e, t, n);
}
var cc = Math.max;
function Lv(e, t, n) {
  return t = cc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = cc(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), mv(e, this, i);
  };
}
var Ov = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ov;
}
function xv(e) {
  return e != null && wl(e.length) && !hd(e);
}
var Rv = Object.prototype;
function Nv(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Rv;
  return e === n;
}
function Pv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var $v = "[object Arguments]";
function uc(e) {
  return po(e) && ko(e) == $v;
}
var gd = Object.prototype, Mv = gd.hasOwnProperty, Dv = gd.propertyIsEnumerable, kl = uc(/* @__PURE__ */ function() {
  return arguments;
}()) ? uc : function(e) {
  return po(e) && Mv.call(e, "callee") && !Dv.call(e, "callee");
};
function Fv() {
  return !1;
}
var vd = typeof exports == "object" && exports && !exports.nodeType && exports, dc = vd && typeof module == "object" && module && !module.nodeType && module, zv = dc && dc.exports === vd, fc = zv ? Hn.Buffer : void 0, Bv = fc ? fc.isBuffer : void 0, Us = Bv || Fv, Vv = "[object Arguments]", jv = "[object Array]", Uv = "[object Boolean]", Hv = "[object Date]", Wv = "[object Error]", Gv = "[object Function]", Kv = "[object Map]", qv = "[object Number]", Yv = "[object Object]", Zv = "[object RegExp]", Xv = "[object Set]", Qv = "[object String]", Jv = "[object WeakMap]", e0 = "[object ArrayBuffer]", t0 = "[object DataView]", n0 = "[object Float32Array]", r0 = "[object Float64Array]", o0 = "[object Int8Array]", a0 = "[object Int16Array]", s0 = "[object Int32Array]", l0 = "[object Uint8Array]", i0 = "[object Uint8ClampedArray]", c0 = "[object Uint16Array]", u0 = "[object Uint32Array]", Xe = {};
Xe[n0] = Xe[r0] = Xe[o0] = Xe[a0] = Xe[s0] = Xe[l0] = Xe[i0] = Xe[c0] = Xe[u0] = !0;
Xe[Vv] = Xe[jv] = Xe[e0] = Xe[Uv] = Xe[t0] = Xe[Hv] = Xe[Wv] = Xe[Gv] = Xe[Kv] = Xe[qv] = Xe[Yv] = Xe[Zv] = Xe[Xv] = Xe[Qv] = Xe[Jv] = !1;
function d0(e) {
  return po(e) && wl(e.length) && !!Xe[ko(e)];
}
function f0(e) {
  return function(t) {
    return e(t);
  };
}
var bd = typeof exports == "object" && exports && !exports.nodeType && exports, Fo = bd && typeof module == "object" && module && !module.nodeType && module, p0 = Fo && Fo.exports === bd, ks = p0 && dd.process, pc = function() {
  try {
    var e = Fo && Fo.require && Fo.require("util").types;
    return e || ks && ks.binding && ks.binding("util");
  } catch {
  }
}(), mc = pc && pc.isTypedArray, yd = mc ? f0(mc) : d0, m0 = Object.prototype, h0 = m0.hasOwnProperty;
function g0(e, t) {
  var n = En(e), r = !n && kl(e), o = !n && !r && Us(e), a = !n && !r && !o && yd(e), s = n || r || o || a, i = s ? Pv(e.length, String) : [], l = i.length;
  for (var u in e)
    h0.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    yl(u, l))) && i.push(u);
  return i;
}
function v0(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var b0 = v0(Object.keys, Object), y0 = Object.prototype, _0 = y0.hasOwnProperty;
function w0(e) {
  if (!Nv(e))
    return b0(e);
  var t = [];
  for (var n in Object(e))
    _0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function _d(e) {
  return xv(e) ? g0(e) : w0(e);
}
var k0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, T0 = /^\w*$/;
function Tl(e, t) {
  if (En(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qa(e) ? !0 : T0.test(e) || !k0.test(e) || t != null && e in Object(t);
}
var qo = Gr(Object, "create");
function S0() {
  this.__data__ = qo ? qo(null) : {}, this.size = 0;
}
function E0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var A0 = "__lodash_hash_undefined__", C0 = Object.prototype, I0 = C0.hasOwnProperty;
function L0(e) {
  var t = this.__data__;
  if (qo) {
    var n = t[e];
    return n === A0 ? void 0 : n;
  }
  return I0.call(t, e) ? t[e] : void 0;
}
var O0 = Object.prototype, x0 = O0.hasOwnProperty;
function R0(e) {
  var t = this.__data__;
  return qo ? t[e] !== void 0 : x0.call(t, e);
}
var N0 = "__lodash_hash_undefined__";
function P0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = qo && t === void 0 ? N0 : t, this;
}
function Vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vr.prototype.clear = S0;
Vr.prototype.delete = E0;
Vr.prototype.get = L0;
Vr.prototype.has = R0;
Vr.prototype.set = P0;
function $0() {
  this.__data__ = [], this.size = 0;
}
function Ya(e, t) {
  for (var n = e.length; n--; )
    if (_l(e[n][0], t))
      return n;
  return -1;
}
var M0 = Array.prototype, D0 = M0.splice;
function F0(e) {
  var t = this.__data__, n = Ya(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : D0.call(t, n, 1), --this.size, !0;
}
function z0(e) {
  var t = this.__data__, n = Ya(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function B0(e) {
  return Ya(this.__data__, e) > -1;
}
function V0(e, t) {
  var n = this.__data__, r = Ya(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function dr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dr.prototype.clear = $0;
dr.prototype.delete = F0;
dr.prototype.get = z0;
dr.prototype.has = B0;
dr.prototype.set = V0;
var Yo = Gr(Hn, "Map");
function j0() {
  this.size = 0, this.__data__ = {
    hash: new Vr(),
    map: new (Yo || dr)(),
    string: new Vr()
  };
}
function U0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Za(e, t) {
  var n = e.__data__;
  return U0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function H0(e) {
  var t = Za(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function W0(e) {
  return Za(this, e).get(e);
}
function G0(e) {
  return Za(this, e).has(e);
}
function K0(e, t) {
  var n = Za(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function fr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fr.prototype.clear = j0;
fr.prototype.delete = H0;
fr.prototype.get = W0;
fr.prototype.has = G0;
fr.prototype.set = K0;
var q0 = "Expected a function";
function Sl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(q0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Sl.Cache || fr)(), n;
}
Sl.Cache = fr;
var Y0 = 500;
function Z0(e) {
  var t = Sl(e, function(r) {
    return n.size === Y0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var X0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Q0 = /\\(\\)?/g, J0 = Z0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(X0, function(n, r, o, a) {
    t.push(o ? a.replace(Q0, "$1") : r || n);
  }), t;
});
function eb(e) {
  return e == null ? "" : pd(e);
}
function Xa(e, t) {
  return En(e) ? e : Tl(e, t) ? [e] : J0(eb(e));
}
function ea(e) {
  if (typeof e == "string" || qa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function El(e, t) {
  t = Xa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ea(t[n++])];
  return n && n == r ? e : void 0;
}
function wr(e, t, n) {
  var r = e == null ? void 0 : El(e, t);
  return r === void 0 ? n : r;
}
function wd(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var hc = Vn ? Vn.isConcatSpreadable : void 0;
function tb(e) {
  return En(e) || kl(e) || !!(hc && e && e[hc]);
}
function nb(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = tb), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? wd(o, i) : o[o.length] = i;
  }
  return o;
}
function rb(e) {
  var t = e == null ? 0 : e.length;
  return t ? nb(e) : [];
}
function ob(e) {
  return wv(Lv(e, void 0, rb), e + "");
}
function _r() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return En(e) ? e : [e];
}
function ab() {
  this.__data__ = new dr(), this.size = 0;
}
function sb(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function lb(e) {
  return this.__data__.get(e);
}
function ib(e) {
  return this.__data__.has(e);
}
var cb = 200;
function ub(e, t) {
  var n = this.__data__;
  if (n instanceof dr) {
    var r = n.__data__;
    if (!Yo || r.length < cb - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new fr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ar(e) {
  var t = this.__data__ = new dr(e);
  this.size = t.size;
}
ar.prototype.clear = ab;
ar.prototype.delete = sb;
ar.prototype.get = lb;
ar.prototype.has = ib;
ar.prototype.set = ub;
function db(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function fb() {
  return [];
}
var pb = Object.prototype, mb = pb.propertyIsEnumerable, gc = Object.getOwnPropertySymbols, hb = gc ? function(e) {
  return e == null ? [] : (e = Object(e), db(gc(e), function(t) {
    return mb.call(e, t);
  }));
} : fb;
function gb(e, t, n) {
  var r = t(e);
  return En(e) ? r : wd(r, n(e));
}
function vc(e) {
  return gb(e, _d, hb);
}
var Hs = Gr(Hn, "DataView"), Ws = Gr(Hn, "Promise"), Gs = Gr(Hn, "Set"), bc = "[object Map]", vb = "[object Object]", yc = "[object Promise]", _c = "[object Set]", wc = "[object WeakMap]", kc = "[object DataView]", bb = Wr(Hs), yb = Wr(Yo), _b = Wr(Ws), wb = Wr(Gs), kb = Wr(js), yr = ko;
(Hs && yr(new Hs(new ArrayBuffer(1))) != kc || Yo && yr(new Yo()) != bc || Ws && yr(Ws.resolve()) != yc || Gs && yr(new Gs()) != _c || js && yr(new js()) != wc) && (yr = function(e) {
  var t = ko(e), n = t == vb ? e.constructor : void 0, r = n ? Wr(n) : "";
  if (r)
    switch (r) {
      case bb:
        return kc;
      case yb:
        return bc;
      case _b:
        return yc;
      case wb:
        return _c;
      case kb:
        return wc;
    }
  return t;
});
var Tc = Hn.Uint8Array, Tb = "__lodash_hash_undefined__";
function Sb(e) {
  return this.__data__.set(e, Tb), this;
}
function Eb(e) {
  return this.__data__.has(e);
}
function Pa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new fr(); ++t < n; )
    this.add(e[t]);
}
Pa.prototype.add = Pa.prototype.push = Sb;
Pa.prototype.has = Eb;
function Ab(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Cb(e, t) {
  return e.has(t);
}
var Ib = 1, Lb = 2;
function kd(e, t, n, r, o, a) {
  var s = n & Ib, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, m = !0, y = n & Lb ? new Pa() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var g = e[p], v = t[p];
    if (r)
      var E = s ? r(v, g, p, t, e, a) : r(g, v, p, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      m = !1;
      break;
    }
    if (y) {
      if (!Ab(t, function(f, C) {
        if (!Cb(y, C) && (g === f || o(g, f, n, r, a)))
          return y.push(C);
      })) {
        m = !1;
        break;
      }
    } else if (!(g === v || o(g, v, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function Ob(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function xb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Rb = 1, Nb = 2, Pb = "[object Boolean]", $b = "[object Date]", Mb = "[object Error]", Db = "[object Map]", Fb = "[object Number]", zb = "[object RegExp]", Bb = "[object Set]", Vb = "[object String]", jb = "[object Symbol]", Ub = "[object ArrayBuffer]", Hb = "[object DataView]", Sc = Vn ? Vn.prototype : void 0, Ts = Sc ? Sc.valueOf : void 0;
function Wb(e, t, n, r, o, a, s) {
  switch (n) {
    case Hb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ub:
      return !(e.byteLength != t.byteLength || !a(new Tc(e), new Tc(t)));
    case Pb:
    case $b:
    case Fb:
      return _l(+e, +t);
    case Mb:
      return e.name == t.name && e.message == t.message;
    case zb:
    case Vb:
      return e == t + "";
    case Db:
      var i = Ob;
    case Bb:
      var l = r & Rb;
      if (i || (i = xb), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= Nb, s.set(e, t);
      var d = kd(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case jb:
      if (Ts)
        return Ts.call(e) == Ts.call(t);
  }
  return !1;
}
var Gb = 1, Kb = Object.prototype, qb = Kb.hasOwnProperty;
function Yb(e, t, n, r, o, a) {
  var s = n & Gb, i = vc(e), l = i.length, u = vc(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : qb.call(t, m)))
      return !1;
  }
  var y = a.get(e), g = a.get(t);
  if (y && g)
    return y == t && g == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < l; ) {
    m = i[p];
    var f = e[m], C = t[m];
    if (r)
      var R = s ? r(C, f, m, t, e, a) : r(f, C, m, e, t, a);
    if (!(R === void 0 ? f === C || o(f, C, n, r, a) : R)) {
      v = !1;
      break;
    }
    E || (E = m == "constructor");
  }
  if (v && !E) {
    var I = e.constructor, w = t.constructor;
    I != w && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof w == "function" && w instanceof w) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var Zb = 1, Ec = "[object Arguments]", Ac = "[object Array]", ma = "[object Object]", Xb = Object.prototype, Cc = Xb.hasOwnProperty;
function Qb(e, t, n, r, o, a) {
  var s = En(e), i = En(t), l = s ? Ac : yr(e), u = i ? Ac : yr(t);
  l = l == Ec ? ma : l, u = u == Ec ? ma : u;
  var d = l == ma, p = u == ma, m = l == u;
  if (m && Us(e)) {
    if (!Us(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new ar()), s || yd(e) ? kd(e, t, n, r, o, a) : Wb(e, t, l, n, r, o, a);
  if (!(n & Zb)) {
    var y = d && Cc.call(e, "__wrapped__"), g = p && Cc.call(t, "__wrapped__");
    if (y || g) {
      var v = y ? e.value() : e, E = g ? t.value() : t;
      return a || (a = new ar()), o(v, E, n, r, a);
    }
  }
  return m ? (a || (a = new ar()), Yb(e, t, n, r, o, a)) : !1;
}
function Qa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !po(e) && !po(t) ? e !== e && t !== t : Qb(e, t, n, r, Qa, o);
}
var Jb = 1, e1 = 2;
function t1(e, t, n, r) {
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
      var d = new ar(), p;
      if (!(p === void 0 ? Qa(u, l, Jb | e1, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function Td(e) {
  return e === e && !Sr(e);
}
function n1(e) {
  for (var t = _d(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Td(o)];
  }
  return t;
}
function Sd(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function r1(e) {
  var t = n1(e);
  return t.length == 1 && t[0][2] ? Sd(t[0][0], t[0][1]) : function(n) {
    return n === e || t1(n, e, t);
  };
}
function o1(e, t) {
  return e != null && t in Object(e);
}
function a1(e, t, n) {
  t = Xa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = ea(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && wl(o) && yl(s, o) && (En(e) || kl(e)));
}
function Ed(e, t) {
  return e != null && a1(e, t, o1);
}
var s1 = 1, l1 = 2;
function i1(e, t) {
  return Tl(e) && Td(t) ? Sd(ea(e), t) : function(n) {
    var r = wr(n, e);
    return r === void 0 && r === t ? Ed(n, e) : Qa(t, r, s1 | l1);
  };
}
function c1(e) {
  return function(t) {
    return t?.[e];
  };
}
function u1(e) {
  return function(t) {
    return El(t, e);
  };
}
function d1(e) {
  return Tl(e) ? c1(ea(e)) : u1(e);
}
function f1(e) {
  return typeof e == "function" ? e : e == null ? md : typeof e == "object" ? En(e) ? i1(e[0], e[1]) : r1(e) : d1(e);
}
var Ss = function() {
  return Hn.Date.now();
}, p1 = "Expected a function", m1 = Math.max, h1 = Math.min;
function g1(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(p1);
  t = lc(t) || 0, Sr(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? m1(lc(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function y(T) {
    var x = r, Z = o;
    return r = o = void 0, u = T, s = e.apply(Z, x), s;
  }
  function g(T) {
    return u = T, i = setTimeout(f, t), d ? y(T) : s;
  }
  function v(T) {
    var x = T - l, Z = T - u, X = t - x;
    return p ? h1(X, a - Z) : X;
  }
  function E(T) {
    var x = T - l, Z = T - u;
    return l === void 0 || x >= t || x < 0 || p && Z >= a;
  }
  function f() {
    var T = Ss();
    if (E(T))
      return C(T);
    i = setTimeout(f, v(T));
  }
  function C(T) {
    return i = void 0, m && r ? y(T) : (r = o = void 0, s);
  }
  function R() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function I() {
    return i === void 0 ? s : C(Ss());
  }
  function w() {
    var T = Ss(), x = E(T);
    if (r = arguments, o = this, l = T, x) {
      if (i === void 0)
        return g(l);
      if (p)
        return clearTimeout(i), i = setTimeout(f, t), y(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return w.cancel = R, w.flush = I, w;
}
function v1(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return kv(e, f1(t), o);
}
function $a(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function zo(e, t) {
  return Qa(e, t);
}
function sr(e) {
  return e == null;
}
function b1(e) {
  return e === void 0;
}
function y1(e, t, n, r) {
  if (!Sr(e))
    return e;
  t = Xa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = ea(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = Sr(d) ? d : yl(t[o + 1]) ? [] : {});
    }
    Iv(i, l, u), i = i[l];
  }
  return e;
}
function _1(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = El(e, s);
    n(i, s) && y1(a, Xa(s, e), i);
  }
  return a;
}
function w1(e, t) {
  return _1(e, t, function(n, r) {
    return Ed(e, r);
  });
}
var k1 = ob(function(e, t) {
  return e == null ? {} : w1(e, t);
});
const $n = (e) => e === void 0, Tr = (e) => typeof e == "boolean", ze = (e) => typeof e == "number", Tn = (e) => typeof Element > "u" ? !1 : e instanceof Element, T1 = (e) => Ut(e) ? !Number.isNaN(Number(e)) : !1;
var S1 = Object.defineProperty, E1 = Object.defineProperties, A1 = Object.getOwnPropertyDescriptors, Ic = Object.getOwnPropertySymbols, C1 = Object.prototype.hasOwnProperty, I1 = Object.prototype.propertyIsEnumerable, Lc = (e, t, n) => t in e ? S1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, L1 = (e, t) => {
  for (var n in t || (t = {}))
    C1.call(t, n) && Lc(e, n, t[n]);
  if (Ic)
    for (var n of Ic(t))
      I1.call(t, n) && Lc(e, n, t[n]);
  return e;
}, O1 = (e, t) => E1(e, A1(t));
function x1(e, t) {
  var n;
  const r = kr();
  return vu(() => {
    r.value = e();
  }, O1(L1({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Js(r);
}
var Oc;
const yt = typeof window < "u", R1 = (e) => typeof e == "string", Ad = () => {
}, Ks = yt && ((Oc = window?.navigator) == null ? void 0 : Oc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Al(e) {
  return typeof e == "function" ? e() : c(e);
}
function N1(e) {
  return e;
}
function ta(e) {
  return Nf() ? (Pf(e), !0) : !1;
}
function P1(e, t = !0) {
  qt() ? pt(e) : t ? e() : ut(e);
}
function Cd(e, t, n = {}) {
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
    }, Al(t));
  }
  return r && (o.value = !0, yt && l()), ta(i), {
    isPending: Js(o),
    start: l,
    stop: i
  };
}
function rr(e) {
  var t;
  const n = Al(e);
  return (t = n?.$el) != null ? t : n;
}
const Ja = yt ? window : void 0;
function Sn(...e) {
  let t, n, r, o;
  if (R1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ja) : [t, n, r, o] = e, !t)
    return Ad;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, p, m, y) => (d.addEventListener(p, m, y), () => d.removeEventListener(p, m, y)), l = Ae(() => [rr(t), Al(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((y) => i(d, m, y, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return ta(u), u;
}
let xc = !1;
function $1(e, t, n = {}) {
  const { window: r = Ja, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Ks && !xc && (xc = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Ad)));
  let i = !0;
  const l = (m) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === m.target || m.composedPath().includes(g));
    {
      const g = rr(y);
      return g && (m.target === g || m.composedPath().includes(g));
    }
  }), d = [
    Sn(r, "click", (m) => {
      const y = rr(e);
      if (!(!y || y === m.target || m.composedPath().includes(y))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    Sn(r, "pointerdown", (m) => {
      const y = rr(e);
      y && (i = !m.composedPath().includes(y) && !l(m));
    }, { passive: !0 }),
    s && Sn(r, "blur", (m) => {
      var y;
      const g = rr(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Id(e, t = !1) {
  const n = W(), r = () => n.value = !!e();
  return r(), P1(r, t), n;
}
const Rc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nc = "__vueuse_ssr_handlers__";
Rc[Nc] = Rc[Nc] || {};
var Pc = Object.getOwnPropertySymbols, M1 = Object.prototype.hasOwnProperty, D1 = Object.prototype.propertyIsEnumerable, F1 = (e, t) => {
  var n = {};
  for (var r in e)
    M1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Pc)
    for (var r of Pc(e))
      t.indexOf(r) < 0 && D1.call(e, r) && (n[r] = e[r]);
  return n;
};
function Nn(e, t, n = {}) {
  const r = n, { window: o = Ja } = r, a = F1(r, ["window"]);
  let s;
  const i = Id(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ae(() => rr(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return ta(d), {
    isSupported: i,
    stop: d
  };
}
var $c = Object.getOwnPropertySymbols, z1 = Object.prototype.hasOwnProperty, B1 = Object.prototype.propertyIsEnumerable, V1 = (e, t) => {
  var n = {};
  for (var r in e)
    z1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $c)
    for (var r of $c(e))
      t.indexOf(r) < 0 && B1.call(e, r) && (n[r] = e[r]);
  return n;
};
function j1(e, t, n = {}) {
  const r = n, { window: o = Ja } = r, a = V1(r, ["window"]);
  let s;
  const i = Id(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ae(() => rr(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return ta(d), {
    isSupported: i,
    stop: d
  };
}
var Mc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Mc || (Mc = {}));
var U1 = Object.defineProperty, Dc = Object.getOwnPropertySymbols, H1 = Object.prototype.hasOwnProperty, W1 = Object.prototype.propertyIsEnumerable, Fc = (e, t, n) => t in e ? U1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G1 = (e, t) => {
  for (var n in t || (t = {}))
    H1.call(t, n) && Fc(e, n, t[n]);
  if (Dc)
    for (var n of Dc(t))
      W1.call(t, n) && Fc(e, n, t[n]);
  return e;
};
const K1 = {
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
G1({
  linear: N1
}, K1);
class q1 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Cl(e, t) {
  throw new q1(`[${e}] ${t}`);
}
const zc = {
  current: 0
}, Bc = W(0), Ld = 2e3, Vc = Symbol("elZIndexContextKey"), Od = Symbol("zIndexContextKey"), xd = (e) => {
  const t = qt() ? je(Vc, zc) : zc, n = e || (qt() ? je(Od, void 0) : void 0), r = P(() => {
    const s = c(n);
    return ze(s) ? s : Ld;
  }), o = P(() => r.value + Bc.value), a = () => (t.current++, Bc.value = t.current, o.value);
  return !yt && je(Vc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Y1 = {
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
const Z1 = (e) => (t, n) => X1(t, n, c(e)), X1 = (e, t, n) => wr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Q1 = (e) => {
  const t = P(() => c(e).name), n = io(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: Z1(e)
  };
}, Rd = Symbol("localeContextKey"), Il = (e) => {
  const t = e || je(Rd, W());
  return Q1(P(() => t.value || Y1));
}, Nd = "__epPropKey", Te = (e) => e, J1 = (e) => sn(e) && !!e[Nd], es = (e, t) => {
  if (!sn(e) || J1(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), tc(e, "default") && p.push(o), d || (d = p.includes(u))), s && (d || (d = s(u))), !d && p.length > 0) {
        const m = [...new Set(p)].map((y) => JSON.stringify(y)).join(", ");
        $f(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Nd]: !0
  };
  return tc(e, "default") && (l.default = o), l;
}, Qe = (e) => $a(Object.entries(e).map(([t, n]) => [
  t,
  es(n, t)
])), Ll = ["", "default", "small", "large"], ts = es({
  type: String,
  values: Ll,
  required: !1
}), Pd = Symbol("size"), ey = () => {
  const e = je(Pd, {});
  return P(() => c(e.size) || "");
}, $d = Symbol("emptyValuesContextKey"), ty = ["", void 0, null], ny = void 0, Md = Qe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => st(e) ? !e() : !e
  }
}), ry = (e, t) => {
  const n = qt() ? je($d, W({})) : W({}), r = P(() => e.emptyValues || n.value.emptyValues || ty), o = P(() => st(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : st(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : ny), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, jc = (e) => Object.keys(e), Ma = W();
function Dd(e, t = void 0) {
  return qt() ? je(cd, Ma) : Ma;
}
function Fd(e, t) {
  const n = Dd(), r = wt(e, P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Sa;
  })), o = Il(P(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = xd(P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Ld;
  })), s = P(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return zd(P(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const zd = (e, t, n = !1) => {
  var r;
  const o = !!qt(), a = o ? Dd() : void 0, s = (r = void 0) != null ? r : o ? Bn : void 0;
  if (!s)
    return;
  const i = P(() => {
    const l = c(e);
    return a?.value ? oy(a.value, l) : l;
  });
  return s(cd, i), s(Rd, P(() => i.value.locale)), s(ud, P(() => i.value.namespace)), s(Od, P(() => i.value.zIndex)), s(Pd, {
    size: P(() => i.value.size || "")
  }), s($d, P(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Ma.value) && (Ma.value = i.value), i;
}, oy = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...jc(e), ...jc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Lt = "update:modelValue", cr = "change", lr = "input";
var nt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function mo(e, t = "px") {
  if (!e)
    return "";
  if (ze(e) || T1(e))
    return `${e}${t}`;
  if (Ut(e))
    return e;
}
function ay(e, t) {
  if (!yt)
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
}, Bd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Vd = (e) => (e.install = Ko, e), sy = Qe({
  size: {
    type: Te([Number, String])
  },
  color: {
    type: String
  }
}), ly = ie({
  name: "ElIcon",
  inheritAttrs: !1
}), iy = /* @__PURE__ */ ie({
  ...ly,
  props: sy,
  setup(e) {
    const t = e, n = wt("icon"), r = P(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: $n(o) ? void 0 : mo(o),
        "--color": a
      };
    });
    return (o, a) => (N(), U("i", co({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Se(o.$slots, "default")
    ], 16));
  }
});
var cy = /* @__PURE__ */ nt(iy, [["__file", "icon.vue"]]);
const bt = An(cy);
/*! Element Plus Icons Vue v2.3.1 */
var uy = /* @__PURE__ */ ie({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), jd = uy, dy = /* @__PURE__ */ ie({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), fy = dy, py = /* @__PURE__ */ ie({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      b("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), my = py, hy = /* @__PURE__ */ ie({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), gy = hy, vy = /* @__PURE__ */ ie({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      b("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Ol = vy, by = /* @__PURE__ */ ie({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Da = by, yy = /* @__PURE__ */ ie({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      b("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), _y = yy, wy = /* @__PURE__ */ ie({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ky = wy, Ty = /* @__PURE__ */ ie({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Ud = Ty, Sy = /* @__PURE__ */ ie({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Ey = Sy, Ay = /* @__PURE__ */ ie({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Cy = Ay, Iy = /* @__PURE__ */ ie({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ly = Iy, Oy = /* @__PURE__ */ ie({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), xy = Oy, Ry = /* @__PURE__ */ ie({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (N(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ny = Ry;
const Mn = Te([
  String,
  Object,
  Function
]), Py = {
  Close: Da
}, $y = {
  Close: Da
}, Fa = {
  success: Ly,
  warning: Ny,
  error: gy,
  info: ky
}, Hd = {
  validating: Ud,
  success: my,
  error: Ol
}, Wd = () => yt && /firefox/i.test(window.navigator.userAgent);
let en;
const My = {
  height: "0",
  visibility: "hidden",
  overflow: Wd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Dy = [
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
function Fy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Dy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Uc(e, t = 1, n) {
  var r;
  en || (en = document.createElement("textarea"), document.body.appendChild(en));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = Fy(e);
  i.forEach(([p, m]) => en?.style.setProperty(p, m)), Object.entries(My).forEach(([p, m]) => en?.style.setProperty(p, m, "important")), en.value = e.value || e.placeholder || "";
  let l = en.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), en.value = "";
  const d = en.scrollHeight - o;
  if (ze(t)) {
    let p = d * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (ze(n)) {
    let p = d * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = en.parentNode) == null || r.removeChild(en), en = void 0, u;
}
const Gd = (e) => e, zy = Qe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Kr = (e) => k1(zy, e), By = Qe({
  id: {
    type: String,
    default: void 0
  },
  size: ts,
  disabled: Boolean,
  modelValue: {
    type: Te([
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
    type: Te([Boolean, Object]),
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
    type: Mn
  },
  prefixIcon: {
    type: Mn
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
    type: Te([Object, Array, String]),
    default: () => Gd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Kr(["ariaLabel"])
}), Vy = {
  [Lt]: (e) => Ut(e),
  input: (e) => Ut(e),
  change: (e) => Ut(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, jy = ["class", "style"], Uy = /^on[A-Z]/, Hy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = P(() => (n?.value || []).concat(jy)), o = qt();
  return o ? P(() => {
    var a;
    return $a(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && Uy.test(s))));
  }) : P(() => ({}));
}, xl = Symbol("formContextKey"), za = Symbol("formItemContextKey"), Hc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Wy = Symbol("elIdInjection"), Kd = () => qt() ? je(Wy, Hc) : Hc, ns = (e) => {
  const t = Kd(), n = bl();
  return x1(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, rs = () => {
  const e = je(xl, void 0), t = je(za, void 0);
  return {
    form: e,
    formItem: t
  };
}, Rl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = W(!1)), r || (r = W(!1));
  const o = W();
  let a;
  const s = P(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return pt(() => {
    a = Ae([er(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : ns().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), ja(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, qd = (e) => {
  const t = qt();
  return P(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, na = (e, t = {}) => {
  const n = W(void 0), r = t.prop ? n : qd("size"), o = t.global ? n : ey(), a = t.form ? { size: void 0 } : je(xl, void 0), s = t.formItem ? { size: void 0 } : je(za, void 0);
  return P(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, Nl = (e) => {
  const t = qd("disabled"), n = je(xl, void 0);
  return P(() => t.value || c(e) || n?.disabled || !1);
};
function Yd(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = qt(), { emit: s } = a, i = kr(), l = W(!1), u = (m) => {
    st(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, d = (m) => {
    var y;
    st(r) && r(m) || m.relatedTarget && ((y = i.value) != null && y.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, y;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Ae(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), Sn(i, "focus", u, !0), Sn(i, "blur", d, !0), Sn(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const Gy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Zd({
  afterComposition: e,
  emit: t
}) {
  const n = W(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !Gy(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, ut(() => e(i)));
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
function Ky(e) {
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
const qy = "ElInput", Yy = ie({
  name: qy,
  inheritAttrs: !1
}), Zy = /* @__PURE__ */ ie({
  ...Yy,
  props: By,
  emits: Vy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Mf(), a = Hy(), s = Df(), i = P(() => [
      r.type === "textarea" ? v.b() : g.b(),
      g.m(m.value),
      g.is("disabled", y.value),
      g.is("exceed", Ue.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: pe.value && Y.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = P(() => [
      g.e("wrapper"),
      g.is("focus", Z.value)
    ]), { form: u, formItem: d } = rs(), { inputId: p } = Rl(r, {
      formItemContext: d
    }), m = na(), y = Nl(), g = wt("input"), v = wt("textarea"), E = kr(), f = kr(), C = W(!1), R = W(!1), I = W(), w = kr(r.inputStyle), T = P(() => E.value || f.value), { wrapperRef: x, isFocused: Z, handleFocus: X, handleBlur: le } = Yd(T, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var S;
        r.validateEvent && ((S = d?.validate) == null || S.call(d, "blur").catch((F) => void 0));
      }
    }), he = P(() => {
      var S;
      return (S = u?.statusIcon) != null ? S : !1;
    }), se = P(() => d?.validateState || ""), be = P(() => se.value && Hd[se.value]), ye = P(() => R.value ? xy : _y), B = P(() => [
      o.style
    ]), Q = P(() => [
      r.inputStyle,
      w.value,
      { resize: r.resize }
    ]), H = P(() => sr(r.modelValue) ? "" : String(r.modelValue)), pe = P(() => r.clearable && !y.value && !r.readonly && !!H.value && (Z.value || C.value)), Y = P(() => r.showPassword && !y.value && !!H.value && (!!H.value || Z.value)), q = P(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), Pe = P(() => H.value.length), Ue = P(() => !!q.value && Pe.value > Number(r.maxlength)), ve = P(() => !!s.suffix || !!r.suffixIcon || pe.value || r.showPassword || q.value || !!se.value && he.value), [oe, te] = Ky(E);
    Nn(f, (S) => {
      if (me(), !q.value || r.resize !== "both")
        return;
      const F = S[0], { width: ke } = F.contentRect;
      I.value = {
        right: `calc(100% - ${ke + 15 + 6}px)`
      };
    });
    const Ce = () => {
      const { type: S, autosize: F } = r;
      if (!(!yt || S !== "textarea" || !f.value))
        if (F) {
          const ke = sn(F) ? F.minRows : void 0, Ie = sn(F) ? F.maxRows : void 0, Ze = Uc(f.value, ke, Ie);
          w.value = {
            overflowY: "hidden",
            ...Ze
          }, ut(() => {
            f.value.offsetHeight, w.value = Ze;
          });
        } else
          w.value = {
            minHeight: Uc(f.value).minHeight
          };
    }, me = ((S) => {
      let F = !1;
      return () => {
        var ke;
        if (F || !r.autosize)
          return;
        ((ke = f.value) == null ? void 0 : ke.offsetParent) === null || (S(), F = !0);
      };
    })(Ce), rt = () => {
      const S = T.value, F = r.formatter ? r.formatter(H.value) : H.value;
      !S || S.value === F || (S.value = F);
    }, kt = async (S) => {
      oe();
      let { value: F } = S.target;
      if (r.formatter && r.parser && (F = r.parser(F)), !$t.value) {
        if (F === H.value) {
          rt();
          return;
        }
        n(Lt, F), n(lr, F), await ut(), rt(), te();
      }
    }, He = (S) => {
      let { value: F } = S.target;
      r.formatter && r.parser && (F = r.parser(F)), n(cr, F);
    }, {
      isComposing: $t,
      handleCompositionStart: Tt,
      handleCompositionUpdate: lt,
      handleCompositionEnd: St
    } = Zd({ emit: n, afterComposition: kt }), Je = () => {
      oe(), R.value = !R.value, setTimeout(te);
    }, Ct = () => {
      var S;
      return (S = T.value) == null ? void 0 : S.focus();
    }, k = () => {
      var S;
      return (S = T.value) == null ? void 0 : S.blur();
    }, O = (S) => {
      C.value = !1, n("mouseleave", S);
    }, V = (S) => {
      C.value = !0, n("mouseenter", S);
    }, J = (S) => {
      n("keydown", S);
    }, xe = () => {
      var S;
      (S = T.value) == null || S.select();
    }, ge = () => {
      n(Lt, ""), n(cr, ""), n("clear"), n(lr, "");
    };
    return Ae(() => r.modelValue, () => {
      var S;
      ut(() => Ce()), r.validateEvent && ((S = d?.validate) == null || S.call(d, "change").catch((F) => void 0));
    }), Ae(H, () => rt()), Ae(() => r.type, async () => {
      await ut(), rt(), Ce();
    }), pt(() => {
      !r.formatter && r.parser, rt(), ut(Ce);
    }), t({
      input: E,
      textarea: f,
      ref: T,
      textareaStyle: Q,
      autosize: er(r, "autosize"),
      isComposing: $t,
      focus: Ct,
      blur: k,
      select: xe,
      clear: ge,
      resizeTextarea: Ce
    }), (S, F) => (N(), U("div", {
      class: K([
        c(i),
        {
          [c(g).bm("group", "append")]: S.$slots.append,
          [c(g).bm("group", "prepend")]: S.$slots.prepend
        }
      ]),
      style: Rt(c(B)),
      onMouseenter: V,
      onMouseleave: O
    }, [
      ne(" input "),
      S.type !== "textarea" ? (N(), U(ct, { key: 0 }, [
        ne(" prepend slot "),
        S.$slots.prepend ? (N(), U("div", {
          key: 0,
          class: K(c(g).be("group", "prepend"))
        }, [
          Se(S.$slots, "prepend")
        ], 2)) : ne("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: x,
          class: K(c(l))
        }, [
          ne(" prefix slot "),
          S.$slots.prefix || S.prefixIcon ? (N(), U("span", {
            key: 0,
            class: K(c(g).e("prefix"))
          }, [
            b("span", {
              class: K(c(g).e("prefix-inner"))
            }, [
              Se(S.$slots, "prefix"),
              S.prefixIcon ? (N(), fe(c(bt), {
                key: 0,
                class: K(c(g).e("icon"))
              }, {
                default: de(() => [
                  (N(), fe(Gt(S.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0),
          b("input", co({
            id: c(p),
            ref_key: "input",
            ref: E,
            class: c(g).e("inner")
          }, c(a), {
            minlength: S.minlength,
            maxlength: S.maxlength,
            type: S.showPassword ? R.value ? "text" : "password" : S.type,
            disabled: c(y),
            readonly: S.readonly,
            autocomplete: S.autocomplete,
            tabindex: S.tabindex,
            "aria-label": S.ariaLabel,
            placeholder: S.placeholder,
            style: S.inputStyle,
            form: S.form,
            autofocus: S.autofocus,
            role: S.containerRole,
            onCompositionstart: c(Tt),
            onCompositionupdate: c(lt),
            onCompositionend: c(St),
            onInput: kt,
            onChange: He,
            onKeydown: J
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ne(" suffix slot "),
          c(ve) ? (N(), U("span", {
            key: 1,
            class: K(c(g).e("suffix"))
          }, [
            b("span", {
              class: K(c(g).e("suffix-inner"))
            }, [
              !c(pe) || !c(Y) || !c(q) ? (N(), U(ct, { key: 0 }, [
                Se(S.$slots, "suffix"),
                S.suffixIcon ? (N(), fe(c(bt), {
                  key: 0,
                  class: K(c(g).e("icon"))
                }, {
                  default: de(() => [
                    (N(), fe(Gt(S.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ne("v-if", !0)
              ], 64)) : ne("v-if", !0),
              c(pe) ? (N(), fe(c(bt), {
                key: 1,
                class: K([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: tt(c(Ko), ["prevent"]),
                onClick: ge
              }, {
                default: de(() => [
                  M(c(Ol))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ne("v-if", !0),
              c(Y) ? (N(), fe(c(bt), {
                key: 2,
                class: K([c(g).e("icon"), c(g).e("password")]),
                onClick: Je
              }, {
                default: de(() => [
                  (N(), fe(Gt(c(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0),
              c(q) ? (N(), U("span", {
                key: 3,
                class: K(c(g).e("count"))
              }, [
                b("span", {
                  class: K(c(g).e("count-inner"))
                }, D(c(Pe)) + " / " + D(S.maxlength), 3)
              ], 2)) : ne("v-if", !0),
              c(se) && c(be) && c(he) ? (N(), fe(c(bt), {
                key: 4,
                class: K([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(se) === "validating")
                ])
              }, {
                default: de(() => [
                  (N(), fe(Gt(c(be))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0)
        ], 2),
        ne(" append slot "),
        S.$slots.append ? (N(), U("div", {
          key: 1,
          class: K(c(g).be("group", "append"))
        }, [
          Se(S.$slots, "append")
        ], 2)) : ne("v-if", !0)
      ], 64)) : (N(), U(ct, { key: 1 }, [
        ne(" textarea "),
        b("textarea", co({
          id: c(p),
          ref_key: "textarea",
          ref: f,
          class: [c(v).e("inner"), c(g).is("focus", c(Z))]
        }, c(a), {
          minlength: S.minlength,
          maxlength: S.maxlength,
          tabindex: S.tabindex,
          disabled: c(y),
          readonly: S.readonly,
          autocomplete: S.autocomplete,
          style: c(Q),
          "aria-label": S.ariaLabel,
          placeholder: S.placeholder,
          form: S.form,
          autofocus: S.autofocus,
          rows: S.rows,
          role: S.containerRole,
          onCompositionstart: c(Tt),
          onCompositionupdate: c(lt),
          onCompositionend: c(St),
          onInput: kt,
          onFocus: c(X),
          onBlur: c(le),
          onChange: He,
          onKeydown: J
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(q) ? (N(), U("span", {
          key: 0,
          style: Rt(I.value),
          class: K(c(g).e("count"))
        }, D(c(Pe)) + " / " + D(S.maxlength), 7)) : ne("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Xy = /* @__PURE__ */ nt(Zy, [["__file", "input.vue"]]);
const Qy = An(Xy), ro = 4, Jy = {
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
}, e_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Pl = Symbol("scrollbarContextKey"), t_ = Qe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), n_ = "Thumb", r_ = /* @__PURE__ */ ie({
  __name: "thumb",
  props: t_,
  setup(e) {
    const t = e, n = je(Pl), r = wt("scrollbar");
    n || Cl(n_, "can not inject scrollbar context");
    const o = W(), a = W(), s = W({}), i = W(!1);
    let l = !1, u = !1, d = yt ? document.onselectstart : null;
    const p = P(() => Jy[t.vertical ? "vertical" : "horizontal"]), m = P(() => e_({
      size: t.size,
      move: t.move,
      bar: p.value
    })), y = P(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (T) => {
      var x;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (x = window.getSelection()) == null || x.removeAllRanges(), E(T);
      const Z = T.currentTarget;
      Z && (s.value[p.value.axis] = Z[p.value.offset] - (T[p.value.client] - Z.getBoundingClientRect()[p.value.direction]));
    }, v = (T) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const x = Math.abs(T.target.getBoundingClientRect()[p.value.direction] - T[p.value.client]), Z = a.value[p.value.offset] / 2, X = (x - Z) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = X * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (T) => {
      T.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", C), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (T) => {
      if (!o.value || !a.value || l === !1)
        return;
      const x = s.value[p.value.axis];
      if (!x)
        return;
      const Z = (o.value.getBoundingClientRect()[p.value.direction] - T[p.value.client]) * -1, X = a.value[p.value.offset] - x, le = (Z - X) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = le * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", C), w(), u && (i.value = !1);
    }, R = () => {
      u = !1, i.value = !!t.size;
    }, I = () => {
      u = !0, i.value = l;
    };
    Un(() => {
      w(), document.removeEventListener("mouseup", C);
    });
    const w = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Sn(er(n, "scrollbarElement"), "mousemove", R), Sn(er(n, "scrollbarElement"), "mouseleave", I), (T, x) => (N(), fe(wo, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: de(() => [
        At(b("div", {
          ref_key: "instance",
          ref: o,
          class: K([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: v
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: K(c(r).e("thumb")),
            style: Rt(c(m)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [ir, T.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Wc = /* @__PURE__ */ nt(r_, [["__file", "thumb.vue"]]);
const o_ = Qe({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), a_ = /* @__PURE__ */ ie({
  __name: "bar",
  props: o_,
  setup(e, { expose: t }) {
    const n = e, r = je(Pl), o = W(0), a = W(0), s = W(""), i = W(""), l = W(1), u = W(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const y = m.offsetHeight - ro, g = m.offsetWidth - ro;
          a.value = m.scrollTop * 100 / y * l.value, o.value = m.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const y = m.offsetHeight - ro, g = m.offsetWidth - ro, v = y ** 2 / m.scrollHeight, E = g ** 2 / m.scrollWidth, f = Math.max(v, n.minSize), C = Math.max(E, n.minSize);
        l.value = v / (y - v) / (f / (y - f)), u.value = E / (g - E) / (C / (g - C)), i.value = f + ro < y ? `${f}px` : "", s.value = C + ro < g ? `${C}px` : "";
      }
    }), (m, y) => (N(), U(ct, null, [
      M(Wc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      M(Wc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var s_ = /* @__PURE__ */ nt(a_, [["__file", "bar.vue"]]);
const l_ = Qe({
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
    type: Te([String, Object, Array]),
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
}), i_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ze)
}, c_ = "ElScrollbar", u_ = ie({
  name: c_
}), d_ = /* @__PURE__ */ ie({
  ...u_,
  props: l_,
  emits: i_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = wt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = W(), d = W(), p = W(), m = W(), y = P(() => {
      const w = {};
      return r.height && (w.height = mo(r.height)), r.maxHeight && (w.maxHeight = mo(r.maxHeight)), [r.wrapStyle, w];
    }), g = P(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = P(() => [o.e("view"), r.viewClass]), E = () => {
      var w;
      d.value && ((w = m.value) == null || w.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(w, T) {
      sn(w) ? d.value.scrollTo(w) : ze(w) && ze(T) && d.value.scrollTo(w, T);
    }
    const C = (w) => {
      ze(w) && (d.value.scrollTop = w);
    }, R = (w) => {
      ze(w) && (d.value.scrollLeft = w);
    }, I = () => {
      var w;
      (w = m.value) == null || w.update();
    };
    return Ae(() => r.noresize, (w) => {
      w ? (a?.(), s?.()) : ({ stop: a } = Nn(p, I), s = Sn("resize", I));
    }, { immediate: !0 }), Ae(() => [r.maxHeight, r.height], () => {
      r.native || ut(() => {
        var w;
        I(), d.value && ((w = m.value) == null || w.handleScroll(d.value));
      });
    }), Bn(Pl, zr({
      scrollbarElement: u,
      wrapElement: d
    })), Ff(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), pt(() => {
      r.native || ut(() => {
        I();
      });
    }), bu(() => I()), t({
      wrapRef: d,
      update: I,
      scrollTo: f,
      setScrollTop: C,
      setScrollLeft: R,
      handleScroll: E
    }), (w, T) => (N(), U("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: K(c(o).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: K(c(g)),
        style: Rt(c(y)),
        tabindex: w.tabindex,
        onScroll: E
      }, [
        (N(), fe(Gt(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: p,
          class: K(c(v)),
          style: Rt(w.viewStyle),
          role: w.role,
          "aria-label": w.ariaLabel,
          "aria-orientation": w.ariaOrientation
        }, {
          default: de(() => [
            Se(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      w.native ? ne("v-if", !0) : (N(), fe(s_, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var f_ = /* @__PURE__ */ nt(d_, [["__file", "scrollbar.vue"]]);
const p_ = An(f_), $l = Symbol("popper"), Xd = Symbol("popperContent"), m_ = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Qd = Qe({
  role: {
    type: String,
    values: m_,
    default: "tooltip"
  }
}), h_ = ie({
  name: "ElPopper",
  inheritAttrs: !1
}), g_ = /* @__PURE__ */ ie({
  ...h_,
  props: Qd,
  setup(e, { expose: t }) {
    const n = e, r = W(), o = W(), a = W(), s = W(), i = P(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Bn($l, l), (u, d) => Se(u.$slots, "default");
  }
});
var v_ = /* @__PURE__ */ nt(g_, [["__file", "popper.vue"]]);
const Jd = Qe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), b_ = ie({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), y_ = /* @__PURE__ */ ie({
  ...b_,
  props: Jd,
  setup(e, { expose: t }) {
    const n = e, r = wt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = je(Xd, void 0);
    return Ae(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Un(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (N(), U("span", {
      ref_key: "arrowRef",
      ref: a,
      class: K(c(r).e("arrow")),
      style: Rt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var __ = /* @__PURE__ */ nt(y_, [["__file", "arrow.vue"]]);
const ef = Qe({
  virtualRef: {
    type: Te(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Te(Function)
  },
  onMouseleave: {
    type: Te(Function)
  },
  onClick: {
    type: Te(Function)
  },
  onKeydown: {
    type: Te(Function)
  },
  onFocus: {
    type: Te(Function)
  },
  onBlur: {
    type: Te(Function)
  },
  onContextmenu: {
    type: Te(Function)
  },
  id: String,
  open: Boolean
}), tf = Symbol("elForwardRef"), w_ = (e) => {
  Bn(tf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, k_ = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), qs = (e) => {
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
}, T_ = "ElOnlyChild", S_ = ie({
  name: T_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = je(tf), a = k_((r = o?.setForwardRef) != null ? r : Ko);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = nf(i);
      return l ? At(zf(l, n), [[a]]) : null;
    };
  }
});
function nf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (sn(n))
      switch (n.type) {
        case Bf:
          continue;
        case gu:
        case "svg":
          return Gc(n);
        case ct:
          return nf(n.children);
        default:
          return n;
      }
    return Gc(n);
  }
  return null;
}
function Gc(e) {
  const t = wt("only-child");
  return M("span", {
    class: t.e("content")
  }, [e]);
}
const E_ = ie({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), A_ = /* @__PURE__ */ ie({
  ...E_,
  props: ef,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = je($l, void 0);
    w_(o);
    const a = P(() => i.value ? n.id : void 0), s = P(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = P(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = P(() => i.value ? `${n.open}` : void 0);
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
    return pt(() => {
      Ae(() => n.virtualRef, (p) => {
        p && (o.value = rr(p));
      }, {
        immediate: !0
      }), Ae(o, (p, m) => {
        u?.(), u = void 0, Tn(p) && (d.forEach((y) => {
          var g;
          const v = n[y];
          v && (p.addEventListener(y.slice(2).toLowerCase(), v), (g = m?.removeEventListener) == null || g.call(m, y.slice(2).toLowerCase(), v));
        }), qs(p) && (u = Ae([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            sr(y[v]) ? p.removeAttribute(g) : p.setAttribute(g, y[v]);
          });
        }, { immediate: !0 }))), Tn(m) && qs(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => m.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Un(() => {
      if (u?.(), u = void 0, o.value && Tn(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const y = n[m];
          y && p.removeEventListener(m.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? ne("v-if", !0) : (N(), fe(c(S_), co({ key: 0 }, p.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: de(() => [
        Se(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var C_ = /* @__PURE__ */ nt(A_, [["__file", "trigger.vue"]]);
const Es = "focus-trap.focus-after-trapped", As = "focus-trap.focus-after-released", I_ = "focus-trap.focusout-prevented", Kc = {
  cancelable: !0,
  bubbles: !1
}, L_ = {
  cancelable: !0,
  bubbles: !1
}, qc = "focusAfterTrapped", Yc = "focusAfterReleased", O_ = Symbol("elFocusTrap"), Ml = W(), os = W(0), Dl = W(0);
let ha = 0;
const rf = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Zc = (e, t) => {
  for (const n of e)
    if (!x_(n, t))
      return n;
}, x_ = (e, t) => {
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
}, R_ = (e) => {
  const t = rf(e), n = Zc(t, e), r = Zc(t.reverse(), e);
  return [n, r];
}, N_ = (e) => e instanceof HTMLInputElement && "select" in e, Xn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    Tn(e) && !qs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Dl.value = window.performance.now(), e !== n && N_(e) && t && e.select(), Tn(e) && r && e.removeAttribute("tabindex");
  }
};
function Xc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const P_ = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Xc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Xc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, $_ = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Xn(r, t), document.activeElement !== n)
      return;
}, Qc = P_(), M_ = () => os.value > Dl.value, ga = () => {
  Ml.value = "pointer", os.value = window.performance.now();
}, Jc = () => {
  Ml.value = "keyboard", os.value = window.performance.now();
}, D_ = () => (pt(() => {
  ha === 0 && (document.addEventListener("mousedown", ga), document.addEventListener("touchstart", ga), document.addEventListener("keydown", Jc)), ha++;
}), Un(() => {
  ha--, ha <= 0 && (document.removeEventListener("mousedown", ga), document.removeEventListener("touchstart", ga), document.removeEventListener("keydown", Jc));
}), {
  focusReason: Ml,
  lastUserFocusTimestamp: os,
  lastAutomatedFocusTimestamp: Dl
}), va = (e) => new CustomEvent(I_, {
  ...L_,
  detail: e
}), Fn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let lo = [];
const eu = (e) => {
  e.code === Fn.esc && lo.forEach((t) => t(e));
}, F_ = (e) => {
  pt(() => {
    lo.length === 0 && document.addEventListener("keydown", eu), yt && lo.push(e);
  }), Un(() => {
    lo = lo.filter((t) => t !== e), lo.length === 0 && yt && document.removeEventListener("keydown", eu);
  });
}, z_ = ie({
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
    qc,
    Yc,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = W();
    let r, o;
    const { focusReason: a } = D_();
    F_((g) => {
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
      const { code: v, altKey: E, ctrlKey: f, metaKey: C, currentTarget: R, shiftKey: I } = g, { loop: w } = e, T = v === Fn.tab && !E && !f && !C, x = document.activeElement;
      if (T && x) {
        const Z = R, [X, le] = R_(Z);
        if (X && le) {
          if (!I && x === le) {
            const se = va({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (g.preventDefault(), w && Xn(X, !0));
          } else if (I && [X, Z].includes(x)) {
            const se = va({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (g.preventDefault(), w && Xn(le, !0));
          }
        } else if (x === Z) {
          const se = va({
            focusReason: a.value
          });
          t("focusout-prevented", se), se.defaultPrevented || g.preventDefault();
        }
      }
    };
    Bn(O_, {
      focusTrapRef: n,
      onKeydown: i
    }), Ae(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Ae([n], ([g], [v]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", d), g.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", p));
    });
    const l = (g) => {
      t(qc, g);
    }, u = (g) => t(Yc, g), d = (g) => {
      const v = c(n);
      if (!v)
        return;
      const E = g.target, f = g.relatedTarget, C = E && v.contains(E);
      e.trapped || f && v.contains(f) || (r = f), C && t("focusin", g), !s.paused && e.trapped && (C ? o = E : Xn(o, !0));
    }, p = (g) => {
      const v = c(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const E = g.relatedTarget;
          !sr(E) && !v.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = va({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Xn(o, !0);
            }
          }, 0);
        } else {
          const E = g.target;
          E && v.contains(E) || t("focusout", g);
        }
    };
    async function m() {
      await ut();
      const g = c(n);
      if (g) {
        Qc.push(s);
        const v = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !g.contains(v)) {
          const f = new Event(Es, Kc);
          g.addEventListener(Es, l), g.dispatchEvent(f), f.defaultPrevented || ut(() => {
            let C = e.focusStartEl;
            Ut(C) || (Xn(C), document.activeElement !== C && (C = "first")), C === "first" && $_(rf(g), !0), (document.activeElement === v || C === "container") && Xn(g);
          });
        }
      }
    }
    function y() {
      const g = c(n);
      if (g) {
        g.removeEventListener(Es, l);
        const v = new CustomEvent(As, {
          ...Kc,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(As, u), g.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !M_() || g.contains(document.activeElement)) && Xn(r ?? document.body), g.removeEventListener(As, u), Qc.remove(s);
      }
    }
    return pt(() => {
      e.trapped && m(), Ae(() => e.trapped, (g) => {
        g ? m() : y();
      });
    }), Un(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function B_(e, t, n, r, o, a) {
  return Se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var V_ = /* @__PURE__ */ nt(z_, [["render", B_], ["__file", "focus-trap.vue"]]), tn = "top", fn = "bottom", pn = "right", nn = "left", Fl = "auto", ra = [tn, fn, pn, nn], ho = "start", Zo = "end", j_ = "clippingParents", of = "viewport", No = "popper", U_ = "reference", tu = ra.reduce(function(e, t) {
  return e.concat([t + "-" + ho, t + "-" + Zo]);
}, []), as = [].concat(ra, [Fl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ho, t + "-" + Zo]);
}, []), H_ = "beforeRead", W_ = "read", G_ = "afterRead", K_ = "beforeMain", q_ = "main", Y_ = "afterMain", Z_ = "beforeWrite", X_ = "write", Q_ = "afterWrite", J_ = [H_, W_, G_, K_, q_, Y_, Z_, X_, Q_];
function jn(e) {
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
function jr(e) {
  var t = ln(e).Element;
  return e instanceof t || e instanceof Element;
}
function un(e) {
  var t = ln(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ln(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ew(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !un(a) || !jn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function tw(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !un(o) || !jn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var af = { name: "applyStyles", enabled: !0, phase: "write", fn: ew, effect: tw, requires: ["computeStyles"] };
function zn(e) {
  return e.split("-")[0];
}
var Fr = Math.max, Ba = Math.min, go = Math.round;
function Ys() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function sf() {
  return !/^((?!chrome|android).)*safari/i.test(Ys());
}
function vo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && un(e) && (o = e.offsetWidth > 0 && go(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && go(r.height) / e.offsetHeight || 1);
  var s = jr(e) ? ln(e) : window, i = s.visualViewport, l = !sf() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: u + p, bottom: d + m, left: u, x: u, y: d };
}
function Bl(e) {
  var t = vo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function lf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && zl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ur(e) {
  return ln(e).getComputedStyle(e);
}
function nw(e) {
  return ["table", "td", "th"].indexOf(jn(e)) >= 0;
}
function Cr(e) {
  return ((jr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ss(e) {
  return jn(e) === "html" ? e : e.assignedSlot || e.parentNode || (zl(e) ? e.host : null) || Cr(e);
}
function nu(e) {
  return !un(e) || ur(e).position === "fixed" ? null : e.offsetParent;
}
function rw(e) {
  var t = /firefox/i.test(Ys()), n = /Trident/i.test(Ys());
  if (n && un(e)) {
    var r = ur(e);
    if (r.position === "fixed") return null;
  }
  var o = ss(e);
  for (zl(o) && (o = o.host); un(o) && ["html", "body"].indexOf(jn(o)) < 0; ) {
    var a = ur(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function oa(e) {
  for (var t = ln(e), n = nu(e); n && nw(n) && ur(n).position === "static"; ) n = nu(n);
  return n && (jn(n) === "html" || jn(n) === "body" && ur(n).position === "static") ? t : n || rw(e) || t;
}
function Vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bo(e, t, n) {
  return Fr(e, Ba(t, n));
}
function ow(e, t, n) {
  var r = Bo(e, t, n);
  return r > n ? n : r;
}
function cf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function uf(e) {
  return Object.assign({}, cf(), e);
}
function df(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var aw = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, uf(typeof e != "number" ? e : df(e, ra));
};
function sw(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = zn(n.placement), l = Vl(i), u = [nn, pn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = aw(o.padding, n), m = Bl(a), y = l === "y" ? tn : nn, g = l === "y" ? fn : pn, v = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], E = s[l] - n.rects.reference[l], f = oa(a), C = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, R = v / 2 - E / 2, I = p[y], w = C - m[d] - p[g], T = C / 2 - m[d] / 2 + R, x = Bo(I, T, w), Z = l;
    n.modifiersData[r] = (t = {}, t[Z] = x, t.centerOffset = x - T, t);
  }
}
function lw(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || lf(t.elements.popper, o) && (t.elements.arrow = o));
}
var iw = { name: "arrow", enabled: !0, phase: "main", fn: sw, effect: lw, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function bo(e) {
  return e.split("-")[1];
}
var cw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function uw(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: go(n * o) / o || 0, y: go(r * o) / o || 0 };
}
function ru(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, y = m === void 0 ? 0 : m, g = s.y, v = g === void 0 ? 0 : g, E = typeof d == "function" ? d({ x: y, y: v }) : { x: y, y: v };
  y = E.x, v = E.y;
  var f = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), R = nn, I = tn, w = window;
  if (u) {
    var T = oa(n), x = "clientHeight", Z = "clientWidth";
    if (T === ln(n) && (T = Cr(n), ur(T).position !== "static" && i === "absolute" && (x = "scrollHeight", Z = "scrollWidth")), T = T, o === tn || (o === nn || o === pn) && a === Zo) {
      I = fn;
      var X = p && T === w && w.visualViewport ? w.visualViewport.height : T[x];
      v -= X - r.height, v *= l ? 1 : -1;
    }
    if (o === nn || (o === tn || o === fn) && a === Zo) {
      R = pn;
      var le = p && T === w && w.visualViewport ? w.visualViewport.width : T[Z];
      y -= le - r.width, y *= l ? 1 : -1;
    }
  }
  var he = Object.assign({ position: i }, u && cw), se = d === !0 ? uw({ x: y, y: v }, ln(n)) : { x: y, y: v };
  if (y = se.x, v = se.y, l) {
    var be;
    return Object.assign({}, he, (be = {}, be[I] = C ? "0" : "", be[R] = f ? "0" : "", be.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", be));
  }
  return Object.assign({}, he, (t = {}, t[I] = C ? v + "px" : "", t[R] = f ? y + "px" : "", t.transform = "", t));
}
function dw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: zn(t.placement), variation: bo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ru(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ru(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ff = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: dw, data: {} }, ba = { passive: !0 };
function fw(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = ln(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, ba);
  }), i && l.addEventListener("resize", n.update, ba), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ba);
    }), i && l.removeEventListener("resize", n.update, ba);
  };
}
var pf = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: fw, data: {} }, pw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ea(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return pw[t];
  });
}
var mw = { start: "end", end: "start" };
function ou(e) {
  return e.replace(/start|end/g, function(t) {
    return mw[t];
  });
}
function jl(e) {
  var t = ln(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ul(e) {
  return vo(Cr(e)).left + jl(e).scrollLeft;
}
function hw(e, t) {
  var n = ln(e), r = Cr(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = sf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Ul(e), y: l };
}
function gw(e) {
  var t, n = Cr(e), r = jl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Fr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Fr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Ul(e), l = -r.scrollTop;
  return ur(o || n).direction === "rtl" && (i += Fr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Hl(e) {
  var t = ur(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function mf(e) {
  return ["html", "body", "#document"].indexOf(jn(e)) >= 0 ? e.ownerDocument.body : un(e) && Hl(e) ? e : mf(ss(e));
}
function Vo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = mf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ln(r), s = o ? [a].concat(a.visualViewport || [], Hl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Vo(ss(s)));
}
function Zs(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function vw(e, t) {
  var n = vo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function au(e, t, n) {
  return t === of ? Zs(hw(e, n)) : jr(t) ? vw(t, n) : Zs(gw(Cr(e)));
}
function bw(e) {
  var t = Vo(ss(e)), n = ["absolute", "fixed"].indexOf(ur(e).position) >= 0, r = n && un(e) ? oa(e) : e;
  return jr(r) ? t.filter(function(o) {
    return jr(o) && lf(o, r) && jn(o) !== "body";
  }) : [];
}
function yw(e, t, n, r) {
  var o = t === "clippingParents" ? bw(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = au(e, u, r);
    return l.top = Fr(d.top, l.top), l.right = Ba(d.right, l.right), l.bottom = Ba(d.bottom, l.bottom), l.left = Fr(d.left, l.left), l;
  }, au(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function hf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? zn(r) : null, a = r ? bo(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case tn:
      l = { x: s, y: t.y - n.height };
      break;
    case fn:
      l = { x: s, y: t.y + t.height };
      break;
    case pn:
      l = { x: t.x + t.width, y: i };
      break;
    case nn:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Vl(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case ho:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Zo:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Xo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? j_ : i, u = n.rootBoundary, d = u === void 0 ? of : u, p = n.elementContext, m = p === void 0 ? No : p, y = n.altBoundary, g = y === void 0 ? !1 : y, v = n.padding, E = v === void 0 ? 0 : v, f = uf(typeof E != "number" ? E : df(E, ra)), C = m === No ? U_ : No, R = e.rects.popper, I = e.elements[g ? C : m], w = yw(jr(I) ? I : I.contextElement || Cr(e.elements.popper), l, d, s), T = vo(e.elements.reference), x = hf({ reference: T, element: R, placement: o }), Z = Zs(Object.assign({}, R, x)), X = m === No ? Z : T, le = { top: w.top - X.top + f.top, bottom: X.bottom - w.bottom + f.bottom, left: w.left - X.left + f.left, right: X.right - w.right + f.right }, he = e.modifiersData.offset;
  if (m === No && he) {
    var se = he[o];
    Object.keys(le).forEach(function(be) {
      var ye = [pn, fn].indexOf(be) >= 0 ? 1 : -1, B = [tn, fn].indexOf(be) >= 0 ? "y" : "x";
      le[be] += se[B] * ye;
    });
  }
  return le;
}
function _w(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? as : l, d = bo(r), p = d ? i ? tu : tu.filter(function(g) {
    return bo(g) === d;
  }) : ra, m = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(g, v) {
    return g[v] = Xo(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[zn(v)], g;
  }, {});
  return Object.keys(y).sort(function(g, v) {
    return y[g] - y[v];
  });
}
function ww(e) {
  if (zn(e) === Fl) return [];
  var t = Ea(e);
  return [ou(e), t, ou(t)];
}
function kw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, v = n.allowedAutoPlacements, E = t.options.placement, f = zn(E), C = f === E, R = l || (C || !g ? [Ea(E)] : ww(E)), I = [E].concat(R).reduce(function(oe, te) {
      return oe.concat(zn(te) === Fl ? _w(t, { placement: te, boundary: d, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: v }) : te);
    }, []), w = t.rects.reference, T = t.rects.popper, x = /* @__PURE__ */ new Map(), Z = !0, X = I[0], le = 0; le < I.length; le++) {
      var he = I[le], se = zn(he), be = bo(he) === ho, ye = [tn, fn].indexOf(se) >= 0, B = ye ? "width" : "height", Q = Xo(t, { placement: he, boundary: d, rootBoundary: p, altBoundary: m, padding: u }), H = ye ? be ? pn : nn : be ? fn : tn;
      w[B] > T[B] && (H = Ea(H));
      var pe = Ea(H), Y = [];
      if (a && Y.push(Q[se] <= 0), i && Y.push(Q[H] <= 0, Q[pe] <= 0), Y.every(function(oe) {
        return oe;
      })) {
        X = he, Z = !1;
        break;
      }
      x.set(he, Y);
    }
    if (Z) for (var q = g ? 3 : 1, Pe = function(oe) {
      var te = I.find(function(Ce) {
        var Ke = x.get(Ce);
        if (Ke) return Ke.slice(0, oe).every(function(me) {
          return me;
        });
      });
      if (te) return X = te, "break";
    }, Ue = q; Ue > 0; Ue--) {
      var ve = Pe(Ue);
      if (ve === "break") break;
    }
    t.placement !== X && (t.modifiersData[r]._skip = !0, t.placement = X, t.reset = !0);
  }
}
var Tw = { name: "flip", enabled: !0, phase: "main", fn: kw, requiresIfExists: ["offset"], data: { _skip: !1 } };
function su(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function lu(e) {
  return [tn, pn, fn, nn].some(function(t) {
    return e[t] >= 0;
  });
}
function Sw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Xo(t, { elementContext: "reference" }), i = Xo(t, { altBoundary: !0 }), l = su(s, r), u = su(i, o, a), d = lu(l), p = lu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var Ew = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Sw };
function Aw(e, t, n) {
  var r = zn(e), o = [nn, tn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [nn, pn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Cw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = as.reduce(function(d, p) {
    return d[p] = Aw(p, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Iw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Cw };
function Lw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = hf({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var gf = { name: "popperOffsets", enabled: !0, phase: "read", fn: Lw, data: {} };
function Ow(e) {
  return e === "x" ? "y" : "x";
}
function xw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, y = m === void 0 ? !0 : m, g = n.tetherOffset, v = g === void 0 ? 0 : g, E = Xo(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: d }), f = zn(t.placement), C = bo(t.placement), R = !C, I = Vl(f), w = Ow(I), T = t.modifiersData.popperOffsets, x = t.rects.reference, Z = t.rects.popper, X = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, le = typeof X == "number" ? { mainAxis: X, altAxis: X } : Object.assign({ mainAxis: 0, altAxis: 0 }, X), he = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, se = { x: 0, y: 0 };
  if (T) {
    if (a) {
      var be, ye = I === "y" ? tn : nn, B = I === "y" ? fn : pn, Q = I === "y" ? "height" : "width", H = T[I], pe = H + E[ye], Y = H - E[B], q = y ? -Z[Q] / 2 : 0, Pe = C === ho ? x[Q] : Z[Q], Ue = C === ho ? -Z[Q] : -x[Q], ve = t.elements.arrow, oe = y && ve ? Bl(ve) : { width: 0, height: 0 }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cf(), Ce = te[ye], Ke = te[B], me = Bo(0, x[Q], oe[Q]), rt = R ? x[Q] / 2 - q - me - Ce - le.mainAxis : Pe - me - Ce - le.mainAxis, kt = R ? -x[Q] / 2 + q + me + Ke + le.mainAxis : Ue + me + Ke + le.mainAxis, He = t.elements.arrow && oa(t.elements.arrow), $t = He ? I === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, Tt = (be = he?.[I]) != null ? be : 0, lt = H + rt - Tt - $t, St = H + kt - Tt, Je = Bo(y ? Ba(pe, lt) : pe, H, y ? Fr(Y, St) : Y);
      T[I] = Je, se[I] = Je - H;
    }
    if (i) {
      var Ct, k = I === "x" ? tn : nn, O = I === "x" ? fn : pn, V = T[w], J = w === "y" ? "height" : "width", xe = V + E[k], ge = V - E[O], S = [tn, nn].indexOf(f) !== -1, F = (Ct = he?.[w]) != null ? Ct : 0, ke = S ? xe : V - x[J] - Z[J] - F + le.altAxis, Ie = S ? V + x[J] + Z[J] - F - le.altAxis : ge, Ze = y && S ? ow(ke, V, Ie) : Bo(y ? ke : xe, V, y ? Ie : ge);
      T[w] = Ze, se[w] = Ze - V;
    }
    t.modifiersData[r] = se;
  }
}
var Rw = { name: "preventOverflow", enabled: !0, phase: "main", fn: xw, requiresIfExists: ["offset"] };
function Nw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Pw(e) {
  return e === ln(e) || !un(e) ? jl(e) : Nw(e);
}
function $w(e) {
  var t = e.getBoundingClientRect(), n = go(t.width) / e.offsetWidth || 1, r = go(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Mw(e, t, n) {
  n === void 0 && (n = !1);
  var r = un(t), o = un(t) && $w(t), a = Cr(t), s = vo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((jn(t) !== "body" || Hl(a)) && (i = Pw(t)), un(t) ? (l = vo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ul(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function Dw(e) {
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
function Fw(e) {
  var t = Dw(e);
  return J_.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function zw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Bw(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var iu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function cu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Wl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? iu : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, iu, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: u, setOptions: function(v) {
      var E = typeof v == "function" ? v(u.options) : v;
      g(), u.options = Object.assign({}, a, u.options, E), u.scrollParents = { reference: jr(s) ? Vo(s) : s.contextElement ? Vo(s.contextElement) : [], popper: Vo(i) };
      var f = Fw(Bw([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(C) {
        return C.enabled;
      }), y(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, E = v.reference, f = v.popper;
        if (cu(E, f)) {
          u.rects = { reference: Mw(E, oa(f), u.options.strategy === "fixed"), popper: Bl(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Z) {
            return u.modifiersData[Z.name] = Object.assign({}, Z.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var R = u.orderedModifiers[C], I = R.fn, w = R.options, T = w === void 0 ? {} : w, x = R.name;
            typeof I == "function" && (u = I({ state: u, options: T, name: x, instance: m }) || u);
          }
        }
      }
    }, update: zw(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!cu(s, i)) return m;
    m.setOptions(l).then(function(v) {
      !p && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function y() {
      u.orderedModifiers.forEach(function(v) {
        var E = v.name, f = v.options, C = f === void 0 ? {} : f, R = v.effect;
        if (typeof R == "function") {
          var I = R({ state: u, name: E, instance: m, options: C }), w = function() {
          };
          d.push(I || w);
        }
      });
    }
    function g() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return m;
  };
}
Wl();
var Vw = [pf, gf, ff, af];
Wl({ defaultModifiers: Vw });
var jw = [pf, gf, ff, af, Iw, Tw, Rw, iw, Ew], Uw = Wl({ defaultModifiers: jw });
const Hw = ["fixed", "absolute"], Ww = Qe({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Te(Array),
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
    values: as,
    default: "bottom"
  },
  popperOptions: {
    type: Te(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Hw,
    default: "absolute"
  }
}), vf = Qe({
  ...Ww,
  id: String,
  style: {
    type: Te([String, Array, Object])
  },
  className: {
    type: Te([String, Array, Object])
  },
  effect: {
    type: Te(String),
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
    type: Te([String, Array, Object])
  },
  popperStyle: {
    type: Te([String, Array, Object])
  },
  referenceEl: {
    type: Te(Object)
  },
  triggerTargetEl: {
    type: Te(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Kr(["ariaLabel"])
}), Gw = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Kw = (e, t) => {
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
}, qw = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Zw(e), ...t]
  };
  return Xw(a, o?.modifiers), a;
}, Yw = (e) => {
  if (yt)
    return rr(e);
};
function Zw(e) {
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
function Xw(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Qw = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Jw(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = P(() => {
    const { onFirstUpdate: l, placement: u, strategy: d, modifiers: p } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = kr(), s = W({
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
  return Ae(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Ae([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = Uw(l, u, c(o)));
  }), Un(() => {
    i();
  }), {
    state: P(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: P(() => c(s).styles),
    attributes: P(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: P(() => c(a))
  };
};
function Jw(e) {
  const t = Object.keys(e.elements), n = $a(t.map((o) => [o, e.styles[o] || {}])), r = $a(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const ek = 0, tk = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = je($l, void 0), a = W(), s = W(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var f;
    const C = c(a), R = (f = c(s)) != null ? f : ek;
    return {
      name: "arrow",
      enabled: !b1(C),
      options: {
        element: C,
        padding: R
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...qw(e, [
      c(l),
      c(i)
    ])
  })), d = P(() => Yw(e.referenceEl) || c(r)), { attributes: p, state: m, styles: y, update: g, forceUpdate: v, instanceRef: E } = Qw(d, n, u);
  return Ae(E, (f) => t.value = f), pt(() => {
    Ae(() => {
      var f;
      return (f = c(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: m,
    styles: y,
    role: o,
    forceUpdate: v,
    update: g
  };
}, nk = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = xd(), a = wt("popper"), s = P(() => c(t).popper), i = W(ze(e.zIndex) ? e.zIndex : o()), l = P(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = P(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = P(() => r.value === "dialog" ? "false" : void 0), p = P(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = ze(e.zIndex) ? e.zIndex : o();
    }
  };
}, rk = ie({
  name: "ElPopperContent"
}), ok = /* @__PURE__ */ ie({
  ...rk,
  props: vf,
  emits: Gw,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Kw(r, n), { attributes: p, arrowRef: m, contentRef: y, styles: g, instanceRef: v, role: E, update: f } = tk(r), {
      ariaModal: C,
      arrowStyle: R,
      contentAttrs: I,
      contentClass: w,
      contentStyle: T,
      updateZIndex: x
    } = nk(r, {
      styles: g,
      attributes: p,
      role: E
    }), Z = je(za, void 0), X = W();
    Bn(Xd, {
      arrowStyle: R,
      arrowRef: m,
      arrowOffset: X
    }), Z && Bn(za, {
      ...Z,
      addInputId: Ko,
      removeInputId: Ko
    });
    let le;
    const he = (be = !0) => {
      f(), be && x();
    }, se = () => {
      he(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return pt(() => {
      Ae(() => r.triggerTargetEl, (be, ye) => {
        le?.(), le = void 0;
        const B = c(be || y.value), Q = c(ye || y.value);
        Tn(B) && (le = Ae([E, () => r.ariaLabel, C, () => r.id], (H) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((pe, Y) => {
            sr(H[Y]) ? B.removeAttribute(pe) : B.setAttribute(pe, H[Y]);
          });
        }, { immediate: !0 })), Q !== B && Tn(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((H) => {
          Q.removeAttribute(H);
        });
      }, { immediate: !0 }), Ae(() => r.visible, se, { immediate: !0 });
    }), Un(() => {
      le?.(), le = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: v,
      updatePopper: he,
      contentStyle: T
    }), (be, ye) => (N(), U("div", co({
      ref_key: "contentRef",
      ref: y
    }, c(I), {
      style: c(T),
      class: c(w),
      tabindex: "-1",
      onMouseenter: (B) => be.$emit("mouseenter", B),
      onMouseleave: (B) => be.$emit("mouseleave", B)
    }), [
      M(c(V_), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(y),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(d)
      }, {
        default: de(() => [
          Se(be.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var ak = /* @__PURE__ */ nt(ok, [["__file", "content.vue"]]);
const sk = An(v_), Gl = Symbol("elTooltip");
function uu() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return ta(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const lk = Qe({
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
}), ik = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = uu(), {
    registerTimeout: s,
    cancelTimeout: i
  } = uu();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const p = c(n);
        ze(p) && p > 0 && s(() => {
          o(d);
        }, p);
      }, c(e));
    },
    onClose: (d) => {
      i(), a(() => {
        o(d);
      }, c(t));
    }
  };
}, Kl = Qe({
  ...lk,
  ...vf,
  appendTo: {
    type: Te([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: Te(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Kr(["ariaLabel"])
}), bf = Qe({
  ...ef,
  disabled: Boolean,
  trigger: {
    type: Te([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Te(Array),
    default: () => [Fn.enter, Fn.numpadEnter, Fn.space]
  }
}), ck = es({
  type: Te(Boolean),
  default: null
}), uk = es({
  type: Te(Function)
}), dk = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: ck,
    [n]: uk
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: d,
      onHide: p
    }) => {
      const m = qt(), { emit: y } = m, g = m.props, v = P(() => st(g[n])), E = P(() => g[e] === null), f = (x) => {
        s.value !== !0 && (s.value = !0, i && (i.value = x), st(d) && d(x));
      }, C = (x) => {
        s.value !== !1 && (s.value = !1, i && (i.value = x), st(p) && p(x));
      }, R = (x) => {
        if (g.disabled === !0 || st(u) && !u())
          return;
        const Z = v.value && yt;
        Z && y(t, !0), (E.value || !Z) && f(x);
      }, I = (x) => {
        if (g.disabled === !0 || !yt)
          return;
        const Z = v.value && yt;
        Z && y(t, !1), (E.value || !Z) && C(x);
      }, w = (x) => {
        Tr(x) && (g.disabled && x ? v.value && y(t, !1) : s.value !== x && (x ? f() : C()));
      }, T = () => {
        s.value ? I() : R();
      };
      return Ae(() => g[e], w), l && m.appContext.config.globalProperties.$route !== void 0 && Ae(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && I();
      }), pt(() => {
        w(g[e]);
      }), {
        hide: I,
        show: R,
        toggle: T,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: fk,
  useModelToggleEmits: pk,
  useModelToggle: mk
} = dk("visible"), hk = Qe({
  ...Qd,
  ...fk,
  ...Kl,
  ...bf,
  ...Jd,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), gk = [
  ...pk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], vk = (e, t) => Pn(e) ? e.includes(t) : e === t, oo = (e, t, n) => (r) => {
  vk(c(e), t) && n(r);
}, Qn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, bk = ie({
  name: "ElTooltipTrigger"
}), yk = /* @__PURE__ */ ie({
  ...bk,
  props: bf,
  setup(e, { expose: t }) {
    const n = e, r = wt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = je(Gl, void 0), d = W(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = er(n, "trigger"), y = Qn(p, oo(m, "hover", i)), g = Qn(p, oo(m, "hover", l)), v = Qn(p, oo(m, "click", (I) => {
      I.button === 0 && u(I);
    })), E = Qn(p, oo(m, "focus", i)), f = Qn(p, oo(m, "focus", l)), C = Qn(p, oo(m, "contextmenu", (I) => {
      I.preventDefault(), u(I);
    })), R = Qn(p, (I) => {
      const { code: w } = I;
      n.triggerKeys.includes(w) && (I.preventDefault(), u(I));
    });
    return t({
      triggerRef: d
    }), (I, w) => (N(), fe(c(C_), {
      id: c(a),
      "virtual-ref": I.virtualRef,
      open: c(s),
      "virtual-triggering": I.virtualTriggering,
      class: K(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(v),
      onContextmenu: c(C),
      onFocus: c(E),
      onMouseenter: c(y),
      onMouseleave: c(g),
      onKeydown: c(R)
    }, {
      default: de(() => [
        Se(I.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var _k = /* @__PURE__ */ nt(yk, [["__file", "trigger.vue"]]);
const wk = Qe({
  to: {
    type: Te([String, Object]),
    required: !0
  },
  disabled: Boolean
}), kk = /* @__PURE__ */ ie({
  __name: "teleport",
  props: wk,
  setup(e) {
    return (t, n) => t.disabled ? Se(t.$slots, "default", { key: 0 }) : (N(), fe(Vf, {
      key: 1,
      to: t.to
    }, [
      Se(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Tk = /* @__PURE__ */ nt(kk, [["__file", "teleport.vue"]]);
const Sk = An(Tk), yf = () => {
  const e = bl(), t = Kd(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Ek = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Ak = () => {
  const { id: e, selector: t } = yf();
  return jf(() => {
    yt && (document.body.querySelector(t.value) || Ek(e.value));
  }), {
    id: e,
    selector: t
  };
}, Ck = ie({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Ik = /* @__PURE__ */ ie({
  ...Ck,
  props: Kl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = yf(), o = wt("tooltip"), a = W();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: p,
      onOpen: m,
      onShow: y,
      onHide: g,
      onBeforeShow: v,
      onBeforeHide: E
    } = je(Gl, void 0), f = P(() => n.transition || `${o.namespace.value}-fade-in-linear`), C = P(() => n.persistent);
    Un(() => {
      s?.();
    });
    const R = P(() => c(C) ? !0 : c(u)), I = P(() => n.disabled ? !1 : c(u)), w = P(() => n.appendTo || r.value), T = P(() => {
      var H;
      return (H = n.style) != null ? H : {};
    }), x = W(!0), Z = () => {
      g(), Q() && Xn(document.body), x.value = !0;
    }, X = () => {
      if (c(i))
        return !0;
    }, le = Qn(X, () => {
      n.enterable && c(d) === "hover" && m();
    }), he = Qn(X, () => {
      c(d) === "hover" && p();
    }), se = () => {
      var H, pe;
      (pe = (H = a.value) == null ? void 0 : H.updatePopper) == null || pe.call(H), v?.();
    }, be = () => {
      E?.();
    }, ye = () => {
      y(), s = $1(P(() => {
        var H;
        return (H = a.value) == null ? void 0 : H.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && p();
      });
    }, B = () => {
      n.virtualTriggering || p();
    }, Q = (H) => {
      var pe;
      const Y = (pe = a.value) == null ? void 0 : pe.popperContentRef, q = H?.relatedTarget || document.activeElement;
      return Y?.contains(q);
    };
    return Ae(() => c(u), (H) => {
      H ? x.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ae(() => n.content, () => {
      var H, pe;
      (pe = (H = a.value) == null ? void 0 : H.updatePopper) == null || pe.call(H);
    }), t({
      contentRef: a,
      isFocusInsideContent: Q
    }), (H, pe) => (N(), fe(c(Sk), {
      disabled: !H.teleported,
      to: c(w)
    }, {
      default: de(() => [
        M(wo, {
          name: c(f),
          onAfterLeave: Z,
          onBeforeEnter: se,
          onAfterEnter: ye,
          onBeforeLeave: be
        }, {
          default: de(() => [
            c(R) ? At((N(), fe(c(ak), co({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, H.$attrs, {
              "aria-label": H.ariaLabel,
              "aria-hidden": x.value,
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
              "popper-style": [H.popperStyle, c(T)],
              "reference-el": H.referenceEl,
              "trigger-target-el": H.triggerTargetEl,
              visible: c(I),
              "z-index": H.zIndex,
              onMouseenter: c(le),
              onMouseleave: c(he),
              onBlur: B,
              onClose: c(p)
            }), {
              default: de(() => [
                Se(H.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [ir, c(I)]
            ]) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Lk = /* @__PURE__ */ nt(Ik, [["__file", "content.vue"]]);
const Ok = ie({
  name: "ElTooltip"
}), xk = /* @__PURE__ */ ie({
  ...Ok,
  props: hk,
  emits: gk,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Ak();
    const o = ns(), a = W(), s = W(), i = () => {
      var f;
      const C = c(a);
      C && ((f = C.popperInstanceRef) == null || f.update());
    }, l = W(!1), u = W(), { show: d, hide: p, hasUpdateHandler: m } = mk({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = ik({
      showAfter: er(r, "showAfter"),
      hideAfter: er(r, "hideAfter"),
      autoClose: er(r, "autoClose"),
      open: d,
      close: p
    }), v = P(() => Tr(r.visible) && !m.value);
    Bn(Gl, {
      controlled: v,
      id: o,
      open: Js(l),
      trigger: er(r, "trigger"),
      onOpen: (f) => {
        y(f);
      },
      onClose: (f) => {
        g(f);
      },
      onToggle: (f) => {
        c(l) ? g(f) : y(f);
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
    }), Ae(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const E = (f) => {
      var C;
      return (C = s.value) == null ? void 0 : C.isFocusInsideContent(f);
    };
    return Uf(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: y,
      onClose: g,
      hide: p
    }), (f, C) => (N(), fe(c(sk), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: de(() => [
        M(_k, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: de(() => [
            f.$slots.default ? Se(f.$slots, "default", { key: 0 }) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        M(Lk, {
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
          default: de(() => [
            Se(f.$slots, "content", {}, () => [
              f.rawContent ? (N(), U("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (N(), U("span", { key: 1 }, D(f.content), 1))
            ]),
            f.showArrow ? (N(), fe(c(__), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Rk = /* @__PURE__ */ nt(xk, [["__file", "tooltip.vue"]]);
const Nk = An(Rk), Pk = Qe({
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
    type: Te([String, Object, Array])
  },
  offset: {
    type: Te(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), $k = ie({
  name: "ElBadge"
}), Mk = /* @__PURE__ */ ie({
  ...$k,
  props: Pk,
  setup(e, { expose: t }) {
    const n = e, r = wt("badge"), o = P(() => n.isDot ? "" : ze(n.value) && ze(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = P(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: mo(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: mo((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (N(), U("div", {
      class: K(c(r).b())
    }, [
      Se(s.$slots, "default"),
      M(wo, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: de(() => [
          At(b("sup", {
            class: K([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Rt(c(a))
          }, [
            Se(s.$slots, "content", { value: c(o) }, () => [
              an(D(c(o)), 1)
            ])
          ], 6), [
            [ir, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Dk = /* @__PURE__ */ nt(Mk, [["__file", "badge.vue"]]);
const Fk = An(Dk), zk = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Xs = Qe({
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
    values: Ll
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Bk = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Vk = ie({
  name: "ElTag"
}), jk = /* @__PURE__ */ ie({
  ...Vk,
  props: Xs,
  emits: Bk,
  setup(e, { emit: t }) {
    const n = e, r = na(), o = wt("tag"), a = P(() => {
      const { type: u, hit: d, effect: p, closable: m, round: y } = n;
      return [
        o.b(),
        o.is("closable", m),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", d),
        o.is("round", y)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var d, p, m;
      (m = (p = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : p.component) != null && m.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (N(), U("span", {
      key: 0,
      class: K(c(a)),
      style: Rt({ backgroundColor: u.color }),
      onClick: i
    }, [
      b("span", {
        class: K(c(o).e("content"))
      }, [
        Se(u.$slots, "default")
      ], 2),
      u.closable ? (N(), fe(c(bt), {
        key: 0,
        class: K(c(o).e("close")),
        onClick: tt(s, ["stop"])
      }, {
        default: de(() => [
          M(c(Da))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ne("v-if", !0)
    ], 6)) : (N(), fe(wo, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: de(() => [
        b("span", {
          class: K(c(a)),
          style: Rt({ backgroundColor: u.color }),
          onClick: i
        }, [
          b("span", {
            class: K(c(o).e("content"))
          }, [
            Se(u.$slots, "default")
          ], 2),
          u.closable ? (N(), fe(c(bt), {
            key: 0,
            class: K(c(o).e("close")),
            onClick: tt(s, ["stop"])
          }, {
            default: de(() => [
              M(c(Da))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Uk = /* @__PURE__ */ nt(jk, [["__file", "tag.vue"]]);
const Hk = An(Uk), br = /* @__PURE__ */ new Map();
if (yt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of br.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function du(e, t) {
  let n = [];
  return Pn(t.arg) ? n = t.arg : Tn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || d || p || m || y || t.value(r, o);
  };
}
const Wk = {
  beforeMount(e, t) {
    br.has(e) || br.set(e, []), br.get(e).push({
      documentHandler: du(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    br.has(e) || br.set(e, []);
    const n = br.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: du(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    br.delete(e);
  }
}, Gk = Qe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Te(Object)
  },
  size: ts,
  button: {
    type: Te(Object)
  },
  experimentalFeatures: {
    type: Te(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Te(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Md
}), gn = {};
ie({
  name: "ElConfigProvider",
  props: Gk,
  setup(e, { slots: t }) {
    Ae(() => e.message, (r) => {
      Object.assign(gn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = zd(e);
    return () => Se(t, "default", { config: n?.value });
  }
});
const Kk = 100, qk = 600, fu = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Kk, delay: o = qk } = st(n) ? {} : n;
    let a, s;
    const i = () => st(n) ? n() : n.handler(), l = () => {
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
}, Yk = Qe({
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
  size: ts,
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
  ...Kr(["ariaLabel"])
}), Zk = {
  [cr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [lr]: (e) => ze(e) || sr(e),
  [Lt]: (e) => ze(e) || sr(e)
}, Xk = ie({
  name: "ElInputNumber"
}), Qk = /* @__PURE__ */ ie({
  ...Xk,
  props: Yk,
  emits: Zk,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Il(), a = wt("input-number"), s = W(), i = zr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = rs(), u = P(() => ze(r.modelValue) && r.modelValue <= r.min), d = P(() => ze(r.modelValue) && r.modelValue >= r.max), p = P(() => {
      const B = f(r.step);
      return $n(r.precision) ? Math.max(f(r.modelValue), B) : (B > r.precision, r.precision);
    }), m = P(() => r.controls && r.controlsPosition === "right"), y = na(), g = Nl(), v = P(() => {
      if (i.userInput !== null)
        return i.userInput;
      let B = i.currentValue;
      if (sr(B))
        return "";
      if (ze(B)) {
        if (Number.isNaN(B))
          return "";
        $n(r.precision) || (B = B.toFixed(r.precision));
      }
      return B;
    }), E = (B, Q) => {
      if ($n(Q) && (Q = p.value), Q === 0)
        return Math.round(B);
      let H = String(B);
      const pe = H.indexOf(".");
      if (pe === -1 || !H.replace(".", "").split("")[pe + Q])
        return B;
      const Pe = H.length;
      return H.charAt(Pe - 1) === "5" && (H = `${H.slice(0, Math.max(0, Pe - 1))}6`), Number.parseFloat(Number(H).toFixed(Q));
    }, f = (B) => {
      if (sr(B))
        return 0;
      const Q = B.toString(), H = Q.indexOf(".");
      let pe = 0;
      return H !== -1 && (pe = Q.length - H - 1), pe;
    }, C = (B, Q = 1) => ze(B) ? E(B + r.step * Q) : i.currentValue, R = () => {
      if (r.readonly || g.value || d.value)
        return;
      const B = Number(v.value) || 0, Q = C(B);
      T(Q), n(lr, i.currentValue), be();
    }, I = () => {
      if (r.readonly || g.value || u.value)
        return;
      const B = Number(v.value) || 0, Q = C(B, -1);
      T(Q), n(lr, i.currentValue), be();
    }, w = (B, Q) => {
      const { max: H, min: pe, step: Y, precision: q, stepStrictly: Pe, valueOnClear: Ue } = r;
      H < pe && Cl("InputNumber", "min should not be greater than max.");
      let ve = Number(B);
      if (sr(B) || Number.isNaN(ve))
        return null;
      if (B === "") {
        if (Ue === null)
          return null;
        ve = Ut(Ue) ? { min: pe, max: H }[Ue] : Ue;
      }
      return Pe && (ve = E(Math.round(ve / Y) * Y, q), ve !== B && Q && n(Lt, ve)), $n(q) || (ve = E(ve, q)), (ve > H || ve < pe) && (ve = ve > H ? H : pe, Q && n(Lt, ve)), ve;
    }, T = (B, Q = !0) => {
      var H;
      const pe = i.currentValue, Y = w(B);
      if (!Q) {
        n(Lt, Y);
        return;
      }
      pe === Y && B || (i.userInput = null, n(Lt, Y), pe !== Y && n(cr, Y, pe), r.validateEvent && ((H = l?.validate) == null || H.call(l, "change").catch((q) => void 0)), i.currentValue = Y);
    }, x = (B) => {
      i.userInput = B;
      const Q = B === "" ? null : Number(B);
      n(lr, Q), T(Q, !1);
    }, Z = (B) => {
      const Q = B !== "" ? Number(B) : "";
      (ze(Q) && !Number.isNaN(Q) || B === "") && T(Q), be(), i.userInput = null;
    }, X = () => {
      var B, Q;
      (Q = (B = s.value) == null ? void 0 : B.focus) == null || Q.call(B);
    }, le = () => {
      var B, Q;
      (Q = (B = s.value) == null ? void 0 : B.blur) == null || Q.call(B);
    }, he = (B) => {
      n("focus", B);
    }, se = (B) => {
      var Q, H;
      i.userInput = null, Wd() && i.currentValue === null && ((Q = s.value) != null && Q.input) && (s.value.input.value = ""), n("blur", B), r.validateEvent && ((H = l?.validate) == null || H.call(l, "blur").catch((pe) => void 0));
    }, be = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, ye = (B) => {
      document.activeElement === B.target && B.preventDefault();
    };
    return Ae(() => r.modelValue, (B, Q) => {
      const H = w(B, !0);
      i.userInput === null && H !== Q && (i.currentValue = H);
    }, { immediate: !0 }), pt(() => {
      var B;
      const { min: Q, max: H, modelValue: pe } = r, Y = (B = s.value) == null ? void 0 : B.input;
      if (Y.setAttribute("role", "spinbutton"), Number.isFinite(H) ? Y.setAttribute("aria-valuemax", String(H)) : Y.removeAttribute("aria-valuemax"), Number.isFinite(Q) ? Y.setAttribute("aria-valuemin", String(Q)) : Y.removeAttribute("aria-valuemin"), Y.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), Y.setAttribute("aria-disabled", String(g.value)), !ze(pe) && pe != null) {
        let q = Number(pe);
        Number.isNaN(q) && (q = null), n(Lt, q);
      }
      Y.addEventListener("wheel", ye, { passive: !1 });
    }), bu(() => {
      var B, Q;
      const H = (B = s.value) == null ? void 0 : B.input;
      H?.setAttribute("aria-valuenow", `${(Q = i.currentValue) != null ? Q : ""}`);
    }), t({
      focus: X,
      blur: le
    }), (B, Q) => (N(), U("div", {
      class: K([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !B.controls),
        c(a).is("controls-right", c(m))
      ]),
      onDragstart: tt(() => {
      }, ["prevent"])
    }, [
      B.controls ? At((N(), U("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: K([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: _n(I, ["enter"])
      }, [
        Se(B.$slots, "decrease-icon", {}, () => [
          M(c(bt), null, {
            default: de(() => [
              c(m) ? (N(), fe(c(jd), { key: 0 })) : (N(), fe(c(Ey), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(fu), I]
      ]) : ne("v-if", !0),
      B.controls ? At((N(), U("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: K([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: _n(R, ["enter"])
      }, [
        Se(B.$slots, "increase-icon", {}, () => [
          M(c(bt), null, {
            default: de(() => [
              c(m) ? (N(), fe(c(fy), { key: 0 })) : (N(), fe(c(Cy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(fu), R]
      ]) : ne("v-if", !0),
      M(c(Qy), {
        id: B.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: B.step,
        "model-value": c(v),
        placeholder: B.placeholder,
        readonly: B.readonly,
        disabled: c(g),
        size: c(y),
        max: B.max,
        min: B.min,
        name: B.name,
        "aria-label": B.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          _n(tt(R, ["prevent"]), ["up"]),
          _n(tt(I, ["prevent"]), ["down"])
        ],
        onBlur: se,
        onFocus: he,
        onInput: x,
        onChange: Z
      }, Hf({
        _: 2
      }, [
        B.$slots.prefix ? {
          name: "prefix",
          fn: de(() => [
            Se(B.$slots, "prefix")
          ])
        } : void 0,
        B.$slots.suffix ? {
          name: "suffix",
          fn: de(() => [
            Se(B.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Jk = /* @__PURE__ */ nt(Qk, [["__file", "input-number.vue"]]);
const eT = An(Jk);
function tT() {
  const e = kr(), t = W(0), n = 11, r = P(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Nn(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const _f = Symbol("ElSelectGroup"), ls = Symbol("ElSelect");
function nT(e, t) {
  const n = je(ls), r = je(_f, { disabled: !1 }), o = P(() => d(_r(n.props.modelValue), e.value)), a = P(() => {
    var y;
    if (n.props.multiple) {
      const g = _r((y = n.props.modelValue) != null ? y : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = P(() => e.label || (sn(e.value) ? "" : e.value)), i = P(() => e.value || e.label || ""), l = P(() => e.disabled || t.groupDisabled || a.value), u = qt(), d = (y = [], g) => {
    if (sn(e.value)) {
      const v = n.props.valueKey;
      return y && y.some((E) => Wf(wr(E, v)) === wr(g, v));
    } else
      return y && y.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (y) => {
    const g = new RegExp(zk(y), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Ae(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ae(() => e.value, (y, g) => {
    const { remote: v, valueKey: E } = n.props;
    if ((v ? y !== g : !zo(y, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
      if (E && sn(y) && sn(g) && y[E] === g[E])
        return;
      n.setSelected();
    }
  }), Ae(() => r.disabled, () => {
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
const rT = ie({
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
    const t = wt("select"), n = ns(), r = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(m))
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
      updateOption: d
    } = nT(e, o), { visible: p, hover: m } = el(o), y = qt().proxy;
    l.onOptionCreate(y), Un(() => {
      const v = y.value, { selected: E } = l.states, f = E.some((C) => C.value === y.value);
      ut(() => {
        l.states.cachedOptions.get(v) === y && !f && l.states.cachedOptions.delete(v);
      }), l.onOptionDestroy(v, y);
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
      updateOption: d,
      visible: p,
      hover: m,
      selectOptionClick: g,
      states: o
    };
  }
});
function oT(e, t, n, r, o, a) {
  return At((N(), U("li", {
    id: e.id,
    class: K(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: tt(e.selectOptionClick, ["stop"])
  }, [
    Se(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [ir, e.visible]
  ]);
}
var ql = /* @__PURE__ */ nt(rT, [["render", oT], ["__file", "option.vue"]]);
const aT = ie({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = je(ls), t = wt("select"), n = P(() => e.props.popperClass), r = P(() => e.props.multiple), o = P(() => e.props.fitInputWidth), a = W("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return pt(() => {
      s(), Nn(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function sT(e, t, n, r, o, a) {
  return N(), U("div", {
    class: K([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Rt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (N(), U("div", {
      key: 0,
      class: K(e.ns.be("dropdown", "header"))
    }, [
      Se(e.$slots, "header")
    ], 2)) : ne("v-if", !0),
    Se(e.$slots, "default"),
    e.$slots.footer ? (N(), U("div", {
      key: 1,
      class: K(e.ns.be("dropdown", "footer"))
    }, [
      Se(e.$slots, "footer")
    ], 2)) : ne("v-if", !0)
  ], 6);
}
var lT = /* @__PURE__ */ nt(aT, [["render", sT], ["__file", "select-dropdown.vue"]]);
const iT = (e, t) => {
  const { t: n } = Il(), r = ns(), o = wt("select"), a = wt("input"), s = zr({
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
  }), i = W(null), l = W(null), u = W(null), d = W(null), p = W(null), m = W(null), y = W(null), g = W(null), v = W(null), E = W(null), f = W(null), {
    isComposing: C,
    handleCompositionStart: R,
    handleCompositionUpdate: I,
    handleCompositionEnd: w
  } = Zd({
    afterComposition: ($) => Ze($)
  }), { wrapperRef: T, isFocused: x, handleBlur: Z } = Yd(p, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !X.value && (X.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur($) {
      var re, Ee;
      return ((re = u.value) == null ? void 0 : re.isFocusInsideContent($)) || ((Ee = d.value) == null ? void 0 : Ee.isFocusInsideContent($));
    },
    afterBlur() {
      X.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), X = W(!1), le = W(), { form: he, formItem: se } = rs(), { inputId: be } = Rl(e, {
    formItemContext: se
  }), { valueOnClear: ye, isEmptyValue: B } = ry(e), Q = P(() => e.disabled || he?.disabled), H = P(() => Pn(e.modelValue) ? e.modelValue.length > 0 : !B(e.modelValue)), pe = P(() => {
    var $;
    return ($ = he?.statusIcon) != null ? $ : !1;
  }), Y = P(() => e.clearable && !Q.value && s.inputHovering && H.value), q = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Pe = P(() => o.is("reverse", q.value && X.value)), Ue = P(() => se?.validateState || ""), ve = P(() => Hd[Ue.value]), oe = P(() => e.remote ? 300 : 0), te = P(() => e.remote && !s.inputValue && s.options.size === 0), Ce = P(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ke.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ke = P(() => me.value.filter(($) => $.visible).length), me = P(() => {
    const $ = Array.from(s.options.values()), re = [];
    return s.optionValues.forEach((Ee) => {
      const et = $.findIndex((mt) => mt.value === Ee);
      et > -1 && re.push($[et]);
    }), re.length >= $.length ? re : $;
  }), rt = P(() => Array.from(s.cachedOptions.values())), kt = P(() => {
    const $ = me.value.filter((re) => !re.created).some((re) => re.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !$;
  }), He = () => {
    e.filterable && st(e.filterMethod) || e.filterable && e.remote && st(e.remoteMethod) || me.value.forEach(($) => {
      var re;
      (re = $.updateOption) == null || re.call($, s.inputValue);
    });
  }, $t = na(), Tt = P(() => ["small"].includes($t.value) ? "small" : "default"), lt = P({
    get() {
      return X.value && !te.value;
    },
    set($) {
      X.value = $;
    }
  }), St = P(() => {
    if (e.multiple && !$n(e.modelValue))
      return _r(e.modelValue).length === 0 && !s.inputValue;
    const $ = Pn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $n($) ? !s.inputValue : !0;
  }), Je = P(() => {
    var $;
    const re = ($ = e.placeholder) != null ? $ : n("el.select.placeholder");
    return e.multiple || !H.value ? re : s.selectedLabel;
  }), Ct = P(() => Ks ? null : "mouseenter");
  Ae(() => e.modelValue, ($, re) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), V(), !zo($, re) && e.validateEvent && se?.validate("change").catch((Ee) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ae(() => X.value, ($) => {
    $ ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", $);
  }), Ae(() => s.options.entries(), () => {
    yt && (V(), e.defaultFirstOption && (e.filterable || e.remote) && Ke.value && O());
  }, {
    flush: "post"
  }), Ae([() => s.hoveringIndex, me], ([$]) => {
    ze($) && $ > -1 ? le.value = me.value[$] || {} : le.value = {}, me.value.forEach((re) => {
      re.hover = le.value === re;
    });
  }), vu(() => {
    s.isBeforeHide || He();
  });
  const k = ($) => {
    s.previousQuery === $ || C.value || (s.previousQuery = $, e.filterable && st(e.filterMethod) ? e.filterMethod($) : e.filterable && e.remote && st(e.remoteMethod) && e.remoteMethod($), e.defaultFirstOption && (e.filterable || e.remote) && Ke.value ? ut(O) : ut(xe));
  }, O = () => {
    const $ = me.value.filter((mt) => mt.visible && !mt.disabled && !mt.states.groupDisabled), re = $.find((mt) => mt.created), Ee = $[0], et = me.value.map((mt) => mt.value);
    s.hoveringIndex = qn(et, re || Ee);
  }, V = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const re = Pn(e.modelValue) ? e.modelValue[0] : e.modelValue, Ee = J(re);
      s.selectedLabel = Ee.currentLabel, s.selected = [Ee];
      return;
    }
    const $ = [];
    $n(e.modelValue) || _r(e.modelValue).forEach((re) => {
      $.push(J(re));
    }), s.selected = $;
  }, J = ($) => {
    let re;
    const Ee = Rg($);
    for (let Ot = s.cachedOptions.size - 1; Ot >= 0; Ot--) {
      const Ht = rt.value[Ot];
      if (Ee ? wr(Ht.value, e.valueKey) === wr($, e.valueKey) : Ht.value === $) {
        re = {
          value: $,
          currentLabel: Ht.currentLabel,
          get isDisabled() {
            return Ht.isDisabled;
          }
        };
        break;
      }
    }
    if (re)
      return re;
    const et = Ee ? $.label : $ ?? "";
    return {
      value: $,
      currentLabel: et
    };
  }, xe = () => {
    s.hoveringIndex = me.value.findIndex(($) => s.selected.some((re) => Be(re) === Be($)));
  }, ge = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, S = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, F = () => {
    var $, re;
    (re = ($ = u.value) == null ? void 0 : $.updatePopper) == null || re.call($);
  }, ke = () => {
    var $, re;
    (re = ($ = d.value) == null ? void 0 : $.updatePopper) == null || re.call($);
  }, Ie = () => {
    s.inputValue.length > 0 && !X.value && (X.value = !0), k(s.inputValue);
  }, Ze = ($) => {
    if (s.inputValue = $.target.value, e.remote)
      Mt();
    else
      return Ie();
  }, Mt = g1(() => {
    Ie();
  }, oe.value), Ye = ($) => {
    zo(e.modelValue, $) || t(cr, $);
  }, Wn = ($) => v1($, (re) => {
    const Ee = s.cachedOptions.get(re);
    return Ee && !Ee.disabled && !Ee.states.groupDisabled;
  }), Ir = ($) => {
    if (e.multiple && $.code !== Fn.delete && $.target.value.length <= 0) {
      const re = _r(e.modelValue).slice(), Ee = Wn(re);
      if (Ee < 0)
        return;
      const et = re[Ee];
      re.splice(Ee, 1), t(Lt, re), Ye(re), t("remove-tag", et);
    }
  }, Gn = ($, re) => {
    const Ee = s.selected.indexOf(re);
    if (Ee > -1 && !Q.value) {
      const et = _r(e.modelValue).slice();
      et.splice(Ee, 1), t(Lt, et), Ye(et), t("remove-tag", re.value);
    }
    $.stopPropagation(), mr();
  }, pr = ($) => {
    $.stopPropagation();
    const re = e.multiple ? [] : ye.value;
    if (e.multiple)
      for (const Ee of s.selected)
        Ee.isDisabled && re.push(Ee.value);
    t(Lt, re), Ye(re), s.hoveringIndex = -1, X.value = !1, t("clear"), mr();
  }, Kn = ($) => {
    var re;
    if (e.multiple) {
      const Ee = _r((re = e.modelValue) != null ? re : []).slice(), et = qn(Ee, $);
      et > -1 ? Ee.splice(et, 1) : (e.multipleLimit <= 0 || Ee.length < e.multipleLimit) && Ee.push($.value), t(Lt, Ee), Ye(Ee), $.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Lt, $.value), Ye($.value), X.value = !1;
    mr(), !X.value && ut(() => {
      mn($);
    });
  }, qn = ($ = [], re) => $n(re) ? -1 : sn(re.value) ? $.findIndex((Ee) => zo(wr(Ee, e.valueKey), Be(re))) : $.indexOf(re.value), mn = ($) => {
    var re, Ee, et, mt, Ot;
    const Ht = Pn($) ? $[0] : $;
    let Ft = null;
    if (Ht?.value) {
      const zt = me.value.filter((Pr) => Pr.value === Ht.value);
      zt.length > 0 && (Ft = zt[0].$el);
    }
    if (u.value && Ft) {
      const zt = (mt = (et = (Ee = (re = u.value) == null ? void 0 : re.popperRef) == null ? void 0 : Ee.contentRef) == null ? void 0 : et.querySelector) == null ? void 0 : mt.call(et, `.${o.be("dropdown", "wrap")}`);
      zt && ay(zt, Ft);
    }
    (Ot = f.value) == null || Ot.handleScroll();
  }, Zt = ($) => {
    s.options.set($.value, $), s.cachedOptions.set($.value, $);
  }, Cn = ($, re) => {
    s.options.get($) === re && s.options.delete($);
  }, Lr = P(() => {
    var $, re;
    return (re = ($ = u.value) == null ? void 0 : $.popperRef) == null ? void 0 : re.contentRef;
  }), Or = () => {
    s.isBeforeHide = !1, ut(() => {
      var $;
      ($ = f.value) == null || $.update(), mn(s.selected);
    });
  }, mr = () => {
    var $;
    ($ = p.value) == null || $.focus();
  }, xr = () => {
    var $;
    if (X.value) {
      X.value = !1, ut(() => {
        var re;
        return (re = p.value) == null ? void 0 : re.blur();
      });
      return;
    }
    ($ = p.value) == null || $.blur();
  }, hr = ($) => {
    pr($);
  }, qr = ($) => {
    if (X.value = !1, x.value) {
      const re = new FocusEvent("focus", $);
      ut(() => Z(re));
    }
  }, hn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : X.value = !1;
  }, Yr = () => {
    Q.value || (Ks && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : X.value = !X.value);
  }, Zr = () => {
    if (!X.value)
      Yr();
    else {
      const $ = me.value[s.hoveringIndex];
      $ && !$.isDisabled && Kn($);
    }
  }, Be = ($) => sn($.value) ? wr($.value, e.valueKey) : $.value, In = P(() => me.value.filter(($) => $.visible).every(($) => $.isDisabled)), Rr = P(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Xr = P(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), gr = ($) => {
    if (!X.value) {
      X.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ke.value === 0 || C.value) && !In.value) {
      $ === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : $ === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const re = me.value[s.hoveringIndex];
      (re.isDisabled || !re.visible) && gr($), ut(() => mn(le.value));
    }
  }, on = () => {
    if (!l.value)
      return 0;
    const $ = window.getComputedStyle(l.value);
    return Number.parseFloat($.gap || "6px");
  }, Nr = P(() => {
    const $ = on();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - $ : s.selectionWidth}px` };
  }), To = P(() => ({ maxWidth: `${s.selectionWidth}px` })), Dt = ($) => {
    t("popup-scroll", $);
  };
  return Nn(l, ge), Nn(g, F), Nn(T, F), Nn(v, ke), Nn(E, S), pt(() => {
    V();
  }), {
    inputId: be,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: x,
    expanded: X,
    optionsArray: me,
    hoverOption: le,
    selectSize: $t,
    filteredOptionsCount: Ke,
    updateTooltip: F,
    updateTagTooltip: ke,
    debouncedOnInputChange: Mt,
    onInput: Ze,
    deletePrevTag: Ir,
    deleteTag: Gn,
    deleteSelected: pr,
    handleOptionSelect: Kn,
    scrollToOption: mn,
    hasModelValue: H,
    shouldShowPlaceholder: St,
    currentPlaceholder: Je,
    mouseEnterEventName: Ct,
    needStatusIcon: pe,
    showClose: Y,
    iconComponent: q,
    iconReverse: Pe,
    validateState: Ue,
    validateIcon: ve,
    showNewOption: kt,
    updateOptions: He,
    collapseTagSize: Tt,
    setSelected: V,
    selectDisabled: Q,
    emptyText: Ce,
    handleCompositionStart: R,
    handleCompositionUpdate: I,
    handleCompositionEnd: w,
    onOptionCreate: Zt,
    onOptionDestroy: Cn,
    handleMenuEnter: Or,
    focus: mr,
    blur: xr,
    handleClearClick: hr,
    handleClickOutside: qr,
    handleEsc: hn,
    toggleMenu: Yr,
    selectOption: Zr,
    getValueKey: Be,
    navigateOptions: gr,
    dropdownMenuVisible: lt,
    showTagList: Rr,
    collapseTagList: Xr,
    popupScroll: Dt,
    tagStyle: Nr,
    collapseTagStyle: To,
    popperRef: Lr,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: m,
    suffixRef: y,
    selectRef: i,
    wrapperRef: T,
    selectionRef: l,
    scrollbarRef: f,
    menuRef: g,
    tagMenuRef: v,
    collapseItemRef: E
  };
};
var cT = ie({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = je(ls);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Pn(u) && u.forEach((d) => {
          var p, m, y, g;
          const v = (p = d?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? l(!Ut(d.children) && !Pn(d.children) && st((m = d.children) == null ? void 0 : m.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : v === "ElOption" ? i.push((g = d.props) == null ? void 0 : g.value) : Pn(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), zo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const uT = Qe({
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
  size: ts,
  effect: {
    type: Te(String),
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
    type: Te(Object),
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
  teleported: Kl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mn,
    default: Ol
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mn,
    default: jd
  },
  tagType: { ...Xs.type, default: "info" },
  tagEffect: { ...Xs.effect, default: "light" },
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
    type: Te(String),
    values: as,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: Te(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Md,
  ...Kr(["ariaLabel"])
}), pu = "ElSelect", dT = ie({
  name: pu,
  componentName: pu,
  components: {
    ElSelectMenu: lT,
    ElOption: ql,
    ElOptions: cT,
    ElTag: Hk,
    ElScrollbar: p_,
    ElTooltip: Nk,
    ElIcon: bt
  },
  directives: { ClickOutside: Wk },
  props: uT,
  emits: [
    Lt,
    cr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = P(() => {
      const { modelValue: l, multiple: u } = e, d = u ? [] : void 0;
      return Pn(l) ? u ? l : d : u ? d : l;
    }), r = zr({
      ...el(e),
      modelValue: n
    }), o = iT(r, t), { calculatorRef: a, inputStyle: s } = tT();
    Bn(ls, zr({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const i = P(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function fT(e, t, n, r, o, a) {
  const s = Mr("el-tag"), i = Mr("el-tooltip"), l = Mr("el-icon"), u = Mr("el-option"), d = Mr("el-options"), p = Mr("el-scrollbar"), m = Mr("el-select-menu"), y = Gf("click-outside");
  return At((N(), U("div", {
    ref: "selectRef",
    class: K([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Kf(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
      default: de(() => {
        var g;
        return [
          b("div", {
            ref: "wrapperRef",
            class: K([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: tt(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (N(), U("div", {
              key: 0,
              ref: "prefixRef",
              class: K(e.nsSelect.e("prefix"))
            }, [
              Se(e.$slots, "prefix")
            ], 2)) : ne("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: K([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Se(e.$slots, "tag", { key: 0 }, () => [
                (N(!0), U(ct, null, Jn(e.showTagList, (v) => (N(), U("div", {
                  key: e.getValueKey(v),
                  class: K(e.nsSelect.e("selected-item"))
                }, [
                  M(s, {
                    closable: !e.selectDisabled && !v.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Rt(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, v)
                  }, {
                    default: de(() => [
                      b("span", {
                        class: K(e.nsSelect.e("tags-text"))
                      }, [
                        Se(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          an(D(v.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (N(), fe(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: de(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: K(e.nsSelect.e("selected-item"))
                    }, [
                      M(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Rt(e.collapseTagStyle)
                      }, {
                        default: de(() => [
                          b("span", {
                            class: K(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: de(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: K(e.nsSelect.e("selection"))
                    }, [
                      (N(!0), U(ct, null, Jn(e.collapseTagList, (v) => (N(), U("div", {
                        key: e.getValueKey(v),
                        class: K(e.nsSelect.e("selected-item"))
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
                          default: de(() => [
                            b("span", {
                              class: K(e.nsSelect.e("tags-text"))
                            }, [
                              Se(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                an(D(v.currentLabel), 1)
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
              b("div", {
                class: K([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                At(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (v) => e.states.inputValue = v,
                  type: "text",
                  name: e.name,
                  class: K([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Rt(e.inputStyle),
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
                    _n(tt((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    _n(tt((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    _n(tt(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    _n(tt(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    _n(tt(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: tt(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [jo, e.states.inputValue]
                ]),
                e.filterable ? (N(), U("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: K(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : ne("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (N(), U("div", {
                key: 1,
                class: K([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? Se(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (N(), U("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : ne("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: K(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (N(), fe(l, {
                key: 0,
                class: K([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: de(() => [
                  (N(), fe(Gt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0),
              e.showClose && e.clearIcon ? (N(), fe(l, {
                key: 1,
                class: K([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: de(() => [
                  (N(), fe(Gt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ne("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (N(), fe(l, {
                key: 2,
                class: K([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: de(() => [
                  (N(), fe(Gt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: de(() => [
        M(m, { ref: "menuRef" }, {
          default: de(() => [
            e.$slots.header ? (N(), U("div", {
              key: 0,
              class: K(e.nsSelect.be("dropdown", "header")),
              onClick: tt(() => {
              }, ["stop"])
            }, [
              Se(e.$slots, "header")
            ], 10, ["onClick"])) : ne("v-if", !0),
            At(M(p, {
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
                e.showNewOption ? (N(), fe(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ne("v-if", !0),
                M(d, null, {
                  default: de(() => [
                    Se(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [ir, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (N(), U("div", {
              key: 1,
              class: K(e.nsSelect.be("dropdown", "loading"))
            }, [
              Se(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (N(), U("div", {
              key: 2,
              class: K(e.nsSelect.be("dropdown", "empty"))
            }, [
              Se(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : ne("v-if", !0),
            e.$slots.footer ? (N(), U("div", {
              key: 3,
              class: K(e.nsSelect.be("dropdown", "footer")),
              onClick: tt(() => {
              }, ["stop"])
            }, [
              Se(e.$slots, "footer")
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
var pT = /* @__PURE__ */ nt(dT, [["render", fT], ["__file", "select.vue"]]);
const mT = ie({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = wt("select"), n = W(null), r = qt(), o = W([]);
    Bn(_f, zr({
      ...el(e)
    }));
    const a = P(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, p;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const d = _r(u), p = [];
      return d.forEach((m) => {
        var y, g;
        s(m) ? p.push(m.component.proxy) : (y = m.children) != null && y.length ? p.push(...i(m.children)) : (g = m.component) != null && g.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return pt(() => {
      l();
    }), j1(n, l, {
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
function hT(e, t, n, r, o, a) {
  return At((N(), U("ul", {
    ref: "groupRef",
    class: K(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: K(e.ns.be("group", "title"))
    }, D(e.label), 3),
    b("li", null, [
      b("ul", {
        class: K(e.ns.b("group"))
      }, [
        Se(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ir, e.visible]
  ]);
}
var wf = /* @__PURE__ */ nt(mT, [["render", hT], ["__file", "option-group.vue"]]);
const gT = An(pT, {
  Option: ql,
  OptionGroup: wf
}), vT = Vd(ql);
Vd(wf);
const bT = (e) => ["", ...Ll].includes(e), yT = Qe({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: bT
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Mn
  },
  activeActionIcon: {
    type: Mn
  },
  activeIcon: {
    type: Mn
  },
  inactiveIcon: {
    type: Mn
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
    type: Te(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Kr(["ariaLabel"])
}), _T = {
  [Lt]: (e) => Tr(e) || Ut(e) || ze(e),
  [cr]: (e) => Tr(e) || Ut(e) || ze(e),
  [lr]: (e) => Tr(e) || Ut(e) || ze(e)
}, kf = "ElSwitch", wT = ie({
  name: kf
}), kT = /* @__PURE__ */ ie({
  ...wT,
  props: yT,
  emits: _T,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = rs(), a = na(), s = wt("switch"), { inputId: i } = Rl(r, {
      formItemContext: o
    }), l = Nl(P(() => r.loading)), u = W(r.modelValue !== !1), d = W(), p = W(), m = P(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", f.value)
    ]), y = P(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !f.value)
    ]), g = P(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", f.value)
    ]), v = P(() => ({
      width: mo(r.width)
    }));
    Ae(() => r.modelValue, () => {
      u.value = !0;
    });
    const E = P(() => u.value ? r.modelValue : !1), f = P(() => E.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(E.value) || (n(Lt, r.inactiveValue), n(cr, r.inactiveValue), n(lr, r.inactiveValue)), Ae(f, (w) => {
      var T;
      d.value.checked = w, r.validateEvent && ((T = o?.validate) == null || T.call(o, "change").catch((x) => void 0));
    });
    const C = () => {
      const w = f.value ? r.inactiveValue : r.activeValue;
      n(Lt, w), n(cr, w), n(lr, w), ut(() => {
        d.value.checked = f.value;
      });
    }, R = () => {
      if (l.value)
        return;
      const { beforeChange: w } = r;
      if (!w) {
        C();
        return;
      }
      const T = w();
      [
        nc(T),
        Tr(T)
      ].includes(!0) || Cl(kf, "beforeChange must return type `Promise<boolean>` or `boolean`"), nc(T) ? T.then((Z) => {
        Z && C();
      }).catch((Z) => {
      }) : T && C();
    }, I = () => {
      var w, T;
      (T = (w = d.value) == null ? void 0 : w.focus) == null || T.call(w);
    };
    return pt(() => {
      d.value.checked = f.value;
    }), t({
      focus: I,
      checked: f
    }), (w, T) => (N(), U("div", {
      class: K(c(m)),
      onClick: tt(R, ["prevent"])
    }, [
      b("input", {
        id: c(i),
        ref_key: "input",
        ref: d,
        class: K(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(f),
        "aria-disabled": c(l),
        "aria-label": w.ariaLabel,
        name: w.name,
        "true-value": w.activeValue,
        "false-value": w.inactiveValue,
        disabled: c(l),
        tabindex: w.tabindex,
        onChange: C,
        onKeydown: _n(R, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !w.inlinePrompt && (w.inactiveIcon || w.inactiveText) ? (N(), U("span", {
        key: 0,
        class: K(c(y))
      }, [
        w.inactiveIcon ? (N(), fe(c(bt), { key: 0 }, {
          default: de(() => [
            (N(), fe(Gt(w.inactiveIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !w.inactiveIcon && w.inactiveText ? (N(), U("span", {
          key: 1,
          "aria-hidden": c(f)
        }, D(w.inactiveText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: K(c(s).e("core")),
        style: Rt(c(v))
      }, [
        w.inlinePrompt ? (N(), U("div", {
          key: 0,
          class: K(c(s).e("inner"))
        }, [
          w.activeIcon || w.inactiveIcon ? (N(), fe(c(bt), {
            key: 0,
            class: K(c(s).is("icon"))
          }, {
            default: de(() => [
              (N(), fe(Gt(c(f) ? w.activeIcon : w.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : w.activeText || w.inactiveText ? (N(), U("span", {
            key: 1,
            class: K(c(s).is("text")),
            "aria-hidden": !c(f)
          }, D(c(f) ? w.activeText : w.inactiveText), 11, ["aria-hidden"])) : ne("v-if", !0)
        ], 2)) : ne("v-if", !0),
        b("div", {
          class: K(c(s).e("action"))
        }, [
          w.loading ? (N(), fe(c(bt), {
            key: 0,
            class: K(c(s).is("loading"))
          }, {
            default: de(() => [
              M(c(Ud))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? Se(w.$slots, "active-action", { key: 1 }, () => [
            w.activeActionIcon ? (N(), fe(c(bt), { key: 0 }, {
              default: de(() => [
                (N(), fe(Gt(w.activeActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ]) : c(f) ? ne("v-if", !0) : Se(w.$slots, "inactive-action", { key: 2 }, () => [
            w.inactiveActionIcon ? (N(), fe(c(bt), { key: 0 }, {
              default: de(() => [
                (N(), fe(Gt(w.inactiveActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ])
        ], 2)
      ], 6),
      !w.inlinePrompt && (w.activeIcon || w.activeText) ? (N(), U("span", {
        key: 1,
        class: K(c(g))
      }, [
        w.activeIcon ? (N(), fe(c(bt), { key: 0 }, {
          default: de(() => [
            (N(), fe(Gt(w.activeIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !w.activeIcon && w.activeText ? (N(), U("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, D(w.activeText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var TT = /* @__PURE__ */ nt(kT, [["__file", "switch.vue"]]);
const ST = An(TT), Tf = ["success", "info", "warning", "error"], Vt = Gd({
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
  appendTo: yt ? document.body : void 0
}), ET = Qe({
  customClass: {
    type: String,
    default: Vt.customClass
  },
  center: {
    type: Boolean,
    default: Vt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Vt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Vt.duration
  },
  icon: {
    type: Mn,
    default: Vt.icon
  },
  id: {
    type: String,
    default: Vt.id
  },
  message: {
    type: Te([
      String,
      Object,
      Function
    ]),
    default: Vt.message
  },
  onClose: {
    type: Te(Function),
    default: Vt.onClose
  },
  showClose: {
    type: Boolean,
    default: Vt.showClose
  },
  type: {
    type: String,
    values: Tf,
    default: Vt.type
  },
  plain: {
    type: Boolean,
    default: Vt.plain
  },
  offset: {
    type: Number,
    default: Vt.offset
  },
  zIndex: {
    type: Number,
    default: Vt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Vt.grouping
  },
  repeatNum: {
    type: Number,
    default: Vt.repeatNum
  }
}), AT = {
  destroy: () => !0
}, kn = qf([]), CT = (e) => {
  const t = kn.findIndex((o) => o.id === e), n = kn[t];
  let r;
  return t > 0 && (r = kn[t - 1]), { current: n, prev: r };
}, IT = (e) => {
  const { prev: t } = CT(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, LT = (e, t) => kn.findIndex((r) => r.id === e) > 0 ? 16 : t, OT = ie({
  name: "ElMessage"
}), xT = /* @__PURE__ */ ie({
  ...OT,
  props: ET,
  emits: AT,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = $y, { ns: o, zIndex: a } = Fd("message"), { currentZIndex: s, nextZIndex: i } = a, l = W(), u = W(!1), d = W(0);
    let p;
    const m = P(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = P(() => {
      const x = n.type;
      return { [o.bm("icon", x)]: x && Fa[x] };
    }), g = P(() => n.icon || Fa[n.type] || ""), v = P(() => IT(n.id)), E = P(() => LT(n.id, n.offset) + v.value), f = P(() => d.value + E.value), C = P(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function R() {
      n.duration !== 0 && ({ stop: p } = Cd(() => {
        w();
      }, n.duration));
    }
    function I() {
      p?.();
    }
    function w() {
      u.value = !1;
    }
    function T({ code: x }) {
      x === Fn.esc && w();
    }
    return pt(() => {
      R(), i(), u.value = !0;
    }), Ae(() => n.repeatNum, () => {
      I(), R();
    }), Sn(document, "keydown", T), Nn(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: w
    }), (x, Z) => (N(), fe(wo, {
      name: c(o).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (X) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: de(() => [
        At(b("div", {
          id: x.id,
          ref_key: "messageRef",
          ref: l,
          class: K([
            c(o).b(),
            { [c(o).m(x.type)]: x.type },
            c(o).is("center", x.center),
            c(o).is("closable", x.showClose),
            c(o).is("plain", x.plain),
            x.customClass
          ]),
          style: Rt(c(C)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: R
        }, [
          x.repeatNum > 1 ? (N(), fe(c(Fk), {
            key: 0,
            value: x.repeatNum,
            type: c(m),
            class: K(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          c(g) ? (N(), fe(c(bt), {
            key: 1,
            class: K([c(o).e("icon"), c(y)])
          }, {
            default: de(() => [
              (N(), fe(Gt(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          Se(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (N(), U(ct, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: K(c(o).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (N(), U("p", {
              key: 0,
              class: K(c(o).e("content"))
            }, D(x.message), 3))
          ]),
          x.showClose ? (N(), fe(c(bt), {
            key: 2,
            class: K(c(o).e("closeBtn")),
            onClick: tt(w, ["stop"])
          }, {
            default: de(() => [
              M(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 46, ["id"]), [
          [ir, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var RT = /* @__PURE__ */ nt(xT, [["__file", "message.vue"]]);
let NT = 1;
const Sf = (e) => {
  const t = !e || Ut(e) || Uo(e) || st(e) ? { message: e } : e, n = {
    ...Vt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ut(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Tn(r) || (r = document.body), n.appendTo = r;
  }
  return Tr(gn.grouping) && !n.grouping && (n.grouping = gn.grouping), ze(gn.duration) && n.duration === 3e3 && (n.duration = gn.duration), ze(gn.offset) && n.offset === 16 && (n.offset = gn.offset), Tr(gn.showClose) && !n.showClose && (n.showClose = gn.showClose), n;
}, PT = (e) => {
  const t = kn.indexOf(e);
  if (t === -1)
    return;
  kn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, $T = ({ appendTo: e, ...t }, n) => {
  const r = `message_${NT++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), PT(d);
    },
    onDestroy: () => {
      Ca(null, a);
    }
  }, i = M(RT, s, st(s.message) || Uo(s.message) ? {
    default: st(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || yo._context, Ca(i, a), e.appendChild(a.firstElementChild);
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
}, yo = (e = {}, t) => {
  if (!yt)
    return { close: () => {
    } };
  const n = Sf(e);
  if (n.grouping && kn.length) {
    const o = kn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ze(gn.max) && kn.length >= gn.max)
    return { close: () => {
    } };
  const r = $T(n, t);
  return kn.push(r), r.handler;
};
Tf.forEach((e) => {
  yo[e] = (t = {}, n) => {
    const r = Sf(t);
    return yo({ ...r, type: e }, n);
  };
});
function MT(e) {
  for (const t of kn)
    (!e || e === t.props.type) && t.handler.close();
}
yo.closeAll = MT;
yo._context = null;
const DT = Bd(yo, "$message"), Ef = [
  "success",
  "info",
  "warning",
  "error"
], FT = Qe({
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
    type: Mn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Te([
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
    type: Te(Function),
    default: () => {
    }
  },
  onClose: {
    type: Te(Function),
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
    values: [...Ef, ""],
    default: ""
  },
  zIndex: Number
}), zT = {
  destroy: () => !0
}, BT = ie({
  name: "ElNotification"
}), VT = /* @__PURE__ */ ie({
  ...BT,
  props: FT,
  emits: zT,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Fd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = Py, l = W(!1);
    let u;
    const d = P(() => {
      const R = n.type;
      return R && Fa[n.type] ? r.m(R) : "";
    }), p = P(() => n.type && Fa[n.type] || n.icon), m = P(() => n.position.endsWith("right") ? "right" : "left"), y = P(() => n.position.startsWith("top") ? "top" : "bottom"), g = P(() => {
      var R;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (R = n.zIndex) != null ? R : s.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: u } = Cd(() => {
        l.value && f();
      }, n.duration));
    }
    function E() {
      u?.();
    }
    function f() {
      l.value = !1;
    }
    function C({ code: R }) {
      R === Fn.delete || R === Fn.backspace ? E() : R === Fn.esc ? l.value && f() : v();
    }
    return pt(() => {
      v(), a(), l.value = !0;
    }), Sn(document, "keydown", C), t({
      visible: l,
      close: f
    }), (R, I) => (N(), fe(wo, {
      name: c(r).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (w) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: de(() => [
        At(b("div", {
          id: R.id,
          class: K([c(r).b(), R.customClass, c(m)]),
          style: Rt(c(g)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: v,
          onClick: R.onClick
        }, [
          c(p) ? (N(), fe(c(bt), {
            key: 0,
            class: K([c(r).e("icon"), c(d)])
          }, {
            default: de(() => [
              (N(), fe(Gt(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          b("div", {
            class: K(c(r).e("group"))
          }, [
            b("h2", {
              class: K(c(r).e("title")),
              textContent: D(R.title)
            }, null, 10, ["textContent"]),
            At(b("div", {
              class: K(c(r).e("content")),
              style: Rt(R.title ? void 0 : { margin: 0 })
            }, [
              Se(R.$slots, "default", {}, () => [
                R.dangerouslyUseHTMLString ? (N(), U(ct, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: R.message }, null, 8, ["innerHTML"])
                ], 2112)) : (N(), U("p", { key: 0 }, D(R.message), 1))
              ])
            ], 6), [
              [ir, R.message]
            ]),
            R.showClose ? (N(), fe(c(bt), {
              key: 0,
              class: K(c(r).e("closeBtn")),
              onClick: tt(f, ["stop"])
            }, {
              default: de(() => [
                M(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ne("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ir, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var jT = /* @__PURE__ */ nt(VT, [["__file", "notification.vue"]]);
const Va = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Qs = 16;
let UT = 1;
const _o = function(e = {}, t) {
  if (!yt)
    return { close: () => {
    } };
  (Ut(e) || Uo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Va[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Qs;
  }), r += Qs;
  const o = `notification_${UT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      HT(o, n, a);
    }
  };
  let i = document.body;
  Tn(e.appendTo) ? i = e.appendTo : Ut(e.appendTo) && (i = document.querySelector(e.appendTo)), Tn(i) || (i = document.body);
  const l = document.createElement("div"), u = M(jT, s, st(s.message) ? s.message : Uo(s.message) ? () => s.message : null);
  return u.appContext = $n(t) ? _o._context : t, u.props.onDestroy = () => {
    Ca(null, l);
  }, Ca(u, l), Va[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Ef.forEach((e) => {
  _o[e] = (t = {}, n) => ((Ut(t) || Uo(t)) && (t = {
    message: t
  }), _o({ ...t, type: e }, n));
});
function HT(e, t, n) {
  const r = Va[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: d, component: p } = r[u].vm, m = Number.parseInt(d.style[i], 10) - s - Qs;
      p.props.offset = m;
    }
}
function WT() {
  for (const e of Object.values(Va))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
_o.closeAll = WT;
_o._context = null;
const GT = Bd(_o, "$notify"), ot = {
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
    r === "center" ? DT({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : GT({
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
}, KT = "snippets-code:developer-mode", Af = "snippets-code:frontend-diagnostics", qT = 240, Po = "[REDACTED]", Aa = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Po}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Po}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Po
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Po}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Po}`
), Cf = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Aa(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Aa(
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
    return Aa(String(e));
  }
}, YT = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, ZT = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Af) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Yl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(KT) === "true";
  } catch {
    return !1;
  }
}, XT = (e, t, n) => {
  if (!Yl() || typeof localStorage > "u") return;
  const r = ZT();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: YT(),
    message: Aa(t),
    data: Cf(n)
  });
  try {
    localStorage.setItem(
      Af,
      JSON.stringify(r.slice(-qT))
    );
  } catch {
  }
}, QT = () => Yl(), JT = (e) => e === "warn" || e === "error" || !1 || !1 || Yl(), ya = (e, t, n) => {
  XT(e, t, n), JT(e) && Pt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Cf(n)
  }).catch(() => {
  });
}, vn = {
  info: (e, t, ...n) => {
    ya("info", e, t);
  },
  error: (e, t) => {
    ya("error", e, t);
  },
  warn: (e, t) => {
    ya("warn", e, t);
  },
  debug: (e, t) => {
    QT() && ya("debug", e, t);
  }
}, eS = { class: "sidebar-header" }, tS = { class: "sidebar-title-block" }, nS = ["title", "aria-pressed"], rS = { class: "sidebar-nav" }, oS = { class: "sidebar-nav-item sidebar-nav-item--search" }, aS = ["placeholder"], sS = { class: "sidebar-section recent-section" }, lS = { class: "section-title-row" }, iS = { class: "section-title" }, cS = ["title"], uS = {
  key: 0,
  class: "chat-list"
}, dS = ["onClick", "onKeydown"], fS = { class: "chat-item-title" }, pS = { class: "chat-item-time" }, mS = ["title", "onClick"], hS = {
  key: 1,
  class: "sidebar-empty"
}, gS = { class: "sidebar-service" }, vS = { class: "sidebar-service-row" }, bS = { class: "chat-panel" }, yS = ["title"], _S = {
  key: 0,
  class: "empty-state"
}, wS = { class: "empty-title" }, kS = { class: "empty-desc" }, TS = {
  key: 0,
  class: "date-divider"
}, SS = { class: "message-avatar" }, ES = { key: 1 }, AS = { class: "message-body" }, CS = { class: "user-bubble" }, IS = {
  key: 0,
  class: "user-message-text"
}, LS = {
  key: 1,
  class: "message-attachment-list"
}, OS = ["title"], xS = ["src", "alt"], RS = {
  key: 1,
  class: "attachment-file-icon"
}, NS = { key: 2 }, PS = {
  key: 0,
  class: "message-actions"
}, $S = ["title", "onClick"], MS = ["title", "onClick"], DS = ["title", "onClick"], FS = { class: "assistant-head" }, zS = { key: 0 }, BS = {
  key: 0,
  class: "assistant-content-stack"
}, VS = ["open"], jS = { class: "reasoning-summary-title" }, US = { key: 0 }, HS = ["innerHTML"], WS = ["innerHTML"], GS = {
  key: 1,
  class: "message-content loading-text"
}, KS = {
  key: 0,
  class: "message-stats"
}, qS = {
  key: 0,
  class: "message-stats-time"
}, YS = {
  key: 1,
  class: "message-warning"
}, ZS = {
  key: 2,
  class: "message-actions"
}, XS = ["title", "aria-label"], QS = ["disabled", "title", "onClick"], JS = ["disabled", "title", "onClick"], e2 = ["title", "onClick"], t2 = ["title", "onClick"], n2 = ["title", "onClick"], r2 = ["title", "onClick"], o2 = ["title", "onClick"], a2 = ["title"], s2 = {
  key: 0,
  class: "attachment-preview-list"
}, l2 = ["src", "alt"], i2 = {
  key: 1,
  class: "attachment-file-icon"
}, c2 = { class: "attachment-meta" }, u2 = ["title", "onClick"], d2 = ["placeholder"], f2 = { class: "input-toolbar" }, p2 = { class: "input-toolbar-left" }, m2 = ["title"], h2 = { class: "model-select-shell" }, g2 = ["disabled"], v2 = ["value"], b2 = {
  key: 0,
  value: ""
}, y2 = ["title", "aria-pressed"], _2 = { class: "input-toolbar-right" }, w2 = ["title", "aria-label"], k2 = ["disabled", "title", "aria-label"], T2 = 96, S2 = 4096, Cs = 160, E2 = 120, A2 = 480, C2 = /* @__PURE__ */ ie({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = W(""), r = W([]), o = W(""), a = W(!1), s = W(""), i = W([]), l = W(!1), u = W(!1), d = W(!1), p = W(!1), m = W(!1), y = W(!0), g = W(!1), v = W(null), E = W(null), f = W(null), C = W(""), R = W(null), I = W(null), w = W(null), T = W(Date.now());
    let x = null, Z = null;
    const X = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), se = (h) => `${Date.now()}-${h}-${Math.random().toString(16).slice(2, 8)}`, be = (h) => h.type === "root", ye = (h) => new Map(h.map((L) => [L.id, L])), B = (h) => h.find(be), Q = (h, L) => {
      if (!L) return null;
      const A = ye(h);
      let z = A.get(L);
      const G = /* @__PURE__ */ new Set();
      for (; z?.childIds?.length && !G.has(z.id); )
        G.add(z.id), z = A.get(z.childIds[z.childIds.length - 1]);
      return z?.id ?? null;
    }, H = (h, L) => {
      if (h.some(be)) {
        const ee = h.map((we) => ({
          ...we,
          type: we.type ?? "text",
          parentId: we.parentId ?? null,
          childIds: we.childIds ?? []
        })), _e = B(ee);
        return {
          messages: ee,
          currentNodeId: Q(ee, ee.at(-1)?.id) ?? _e?.id ?? null
        };
      }
      const A = {
        id: se("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: L,
        parentId: null,
        childIds: []
      }, z = [A];
      let G = A.id;
      for (const ee of h) {
        const _e = {
          ...ee,
          role: ee.role === "system" ? "assistant" : ee.role,
          type: "text",
          parentId: G,
          childIds: []
        };
        z.find((Re) => Re.id === G)?.childIds?.push(_e.id), z.push(_e), G = _e.id;
      }
      return { messages: z, currentNodeId: G };
    }, pe = (h, L) => {
      if (!L) return [];
      const A = ye(h), z = [], G = /* @__PURE__ */ new Set();
      let ee = A.get(L);
      for (; ee && !G.has(ee.id); )
        G.add(ee.id), z.unshift(ee), ee = ee.parentId ? A.get(ee.parentId) : void 0;
      return z;
    }, Y = (h) => {
      if (!h) return [];
      const L = h.currentNodeId ?? Q(h.messages, B(h.messages)?.id);
      return pe(h.messages, L).filter(
        (A) => !be(A)
      );
    }, q = (h) => {
      if (!h) return [];
      const L = ye(h.messages), A = (z) => Q(h.messages, z) ?? z;
      return Y(h).map((z) => {
        const ee = (z.parentId ? L.get(z.parentId) : void 0)?.childIds ?? [z.id];
        return {
          message: z,
          siblingLeafNodeIds: ee.map(A),
          siblingCurrentIndex: Math.max(0, ee.indexOf(z.id))
        };
      });
    }, Pe = (h, L) => {
      const A = B(h.messages), z = L.parentId ?? h.currentNodeId ?? A?.id ?? null, G = {
        ...L,
        type: "text",
        parentId: z,
        childIds: []
      };
      if (h.messages.push(G), z) {
        const ee = h.messages.find((_e) => _e.id === z);
        ee && (ee.childIds = [...ee.childIds ?? [], G.id]);
      }
      return h.currentNodeId = G.id, G;
    }, Ue = P(
      () => (!!s.value.trim() || i.value.length > 0) && !l.value
    ), ve = P(() => R.value?.healthy ? t("localAi.serviceHealthy") : R.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), oe = P(
      () => r.value.find((h) => h.id === o.value) ?? null
    ), te = P(() => Y(oe.value)), Ce = P(() => q(oe.value)), Ke = (h) => h ? h.split(/[\\/]+/).pop() ?? h : "", me = P(
      () => Ke(C.value) || Ke(R.value?.modelPath) || Ke(E.value?.modelPath) || t("localAi.localModel")
    ), rt = P(() => f.value?.mainModels ?? []), kt = P(() => !!E.value?.mmprojPath), He = P(
      () => E.value?.ctxSize ?? R.value?.ctxSize ?? 4096
    ), $t = P(() => {
      const h = He.value, L = E.value?.maxTokens ?? 0;
      return L > 0 ? Math.min(
        Math.max(L, 512),
        Math.max(512, h - 512)
      ) : Math.min(
        Math.max(S2, Math.floor(h * 0.5)),
        Math.max(512, h - 512)
      );
    }), Tt = P(
      () => Math.max(512, He.value - $t.value)
    ), lt = P(() => {
      const h = me.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(h);
    }), St = P(() => {
      const h = n.value.trim().toLowerCase();
      return r.value.filter(
        (L) => !h || L.title.toLowerCase().includes(h) || L.messages.some(
          (A) => !be(A) && A.content.toLowerCase().includes(h)
        )
      ).slice().sort((L, A) => A.updatedAt.localeCompare(L.updatedAt));
    }), Je = () => t("localAi.now"), Ct = () => {
      const h = (/* @__PURE__ */ new Date()).toISOString(), L = {
        id: se("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: h,
        parentId: null,
        childIds: []
      };
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: h,
        updatedAt: h,
        updatedAtLabel: Je(),
        currentNodeId: L.id,
        messages: [L]
      };
    }, k = () => {
      const h = I.value;
      return h ? h.scrollHeight - h.scrollTop - h.clientHeight <= T2 : !0;
    }, O = () => {
      const h = k();
      y.value = h, g.value = !h;
    }, V = () => {
      O();
    }, J = async (h = {}) => {
      await ut();
      const L = I.value;
      !L || !h.force && !y.value || (L.scrollTop = L.scrollHeight, O());
    }, xe = () => {
      y.value = !0, J({ force: !0 });
    }, ge = async () => {
      try {
        E.value = await td(), C.value = E.value.modelPath ?? "", f.value = await nd(E.value), lt.value || (p.value = !1);
      } catch (h) {
        vn.warn("[LocalAI] refresh chat config failed", h);
      }
    }, S = async () => {
      u.value = !0;
      try {
        R.value = await rd();
      } catch (h) {
        vn.warn("[LocalAI] refresh chat status failed", h);
      } finally {
        u.value = !1;
      }
    }, F = async () => {
      try {
        const h = await Ph();
        r.value = h.map((L) => {
          const A = L.messages?.length ? L.messages : L.turns.map((G) => ({
            id: G.id,
            role: G.role,
            content: G.content,
            createdAt: G.createdAt
          })), z = H(
            A,
            L.createdAt
          );
          return {
            id: L.id,
            title: L.title,
            createdAt: L.createdAt,
            updatedAt: L.updatedAt,
            updatedAtLabel: new Date(L.updatedAt).toLocaleString(),
            currentNodeId: L.currentNodeId ?? z.currentNodeId,
            messages: z.messages
          };
        }), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (h) {
        vn.warn("[LocalAI] refresh histories failed", h);
      }
    }, ke = async () => {
      await Promise.all([ge(), S(), F()]);
    }, Ie = async () => {
      const h = oe.value;
      if (!h) return;
      const L = Y(h).map((A) => ({
        id: A.id,
        role: A.role,
        content: A.content,
        createdAt: A.createdAt
      }));
      await $h({
        id: h.id,
        title: h.title,
        createdAt: h.createdAt,
        updatedAt: h.updatedAt,
        turns: L,
        currentNodeId: h.currentNodeId,
        messages: h.messages
      });
    }, Ze = () => {
      const h = Ct();
      r.value.unshift(h), o.value = h.id, s.value = "";
    }, Mt = () => {
      oe.value || Ze();
    }, Ye = (h) => {
      o.value = h;
      const L = oe.value;
      L && !L.currentNodeId && (L.currentNodeId = Q(L.messages, B(L.messages)?.id) ?? null), y.value = !0, J({ force: !0 });
    }, Wn = async (h) => {
      r.value = r.value.filter((L) => L.id !== h), await Mh(h), o.value === h && (o.value = r.value[0]?.id ?? "");
    }, Ir = () => {
      w.value?.click();
    }, Gn = (h, L) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: h.name,
      type: L,
      mime: h.type || "application/octet-stream",
      size: h.size,
      status: "pending"
    }), pr = async (h) => {
      if (hs(h)) {
        const A = Gn(h, "image");
        if (h.size > Uh)
          return {
            ...A,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...A,
            status: "parsed",
            dataUrl: await Gh(h)
          };
        } catch (z) {
          return { ...A, status: "error", error: String(z) };
        }
      }
      if (Vi(h)) {
        const A = Gn(h, "text");
        if (h.size > jh)
          return {
            ...A,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const z = await Kh(h);
          return {
            ...A,
            status: "parsed",
            text: z.text,
            error: z.truncated ? "truncated" : void 0
          };
        } catch (z) {
          return { ...A, status: "error", error: String(z) };
        }
      }
      return {
        ...Gn(h, "unsupported"),
        status: "error",
        error: Wh(h) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, Kn = async (h) => {
      const L = Array.from(h), A = Vh - i.value.length;
      if (A <= 0) {
        ot.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      L.length > A && ot.msg(t("localAi.attachmentLimit"), "warning");
      const z = L.slice(0, A), G = z.map(
        (ee) => Gn(
          ee,
          hs(ee) ? "image" : Vi(ee) ? "text" : "unsupported"
        )
      );
      i.value.push(...G), await Promise.all(
        z.map(async (ee, _e) => {
          const we = await pr(ee), Re = i.value.findIndex(
            (gt) => gt.id === G[_e].id
          );
          Re >= 0 && (i.value[Re] = we);
        })
      );
    }, qn = async (h) => {
      const L = h.target;
      L.files?.length && await Kn(L.files), L.value = "";
    }, mn = async (h) => {
      h.dataTransfer?.files.length && await Kn(h.dataTransfer.files);
    }, Zt = async (h) => {
      const L = Array.from(h.clipboardData?.files ?? []);
      if (!L.length) return;
      const A = L.filter(hs);
      A.length && (h.preventDefault(), await Kn(A));
    }, Cn = (h) => {
      i.value = i.value.filter(
        (L) => L.id !== h
      );
    }, Lr = (h) => h.status === "pending" ? t("localAi.attachmentPending") : h.status === "error" ? h.error ?? "" : h.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), Or = async () => {
      if (!(!E.value || !C.value)) {
        E.value.modelPath = C.value;
        try {
          E.value = await Ta(E.value), R.value?.running && (R.value = await od()), ot.msg(t("localAi.modelChanged"));
        } catch (h) {
          ot.msg(`${t("localAi.configSaveFailed")}: ${h}`, "error");
        }
      }
    }, mr = (h) => {
      let L = 0;
      for (let A = 0; A < h.length; A += 1)
        L = L * 31 + h.charCodeAt(A) >>> 0;
      return `code-${h.length}-${L.toString(16)}`;
    }, xr = (h) => h.includes("<pre>") ? h.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (L, A, z) => {
        const G = document.createElement("textarea");
        G.innerHTML = z;
        const ee = G.value, _e = mr(ee);
        le.set(_e, ee);
        const we = A ? ` class="${A}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${_e}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${we}>${z}</code></pre></div>`;
      }
    ) : h, hr = (h) => {
      const L = X.get(h);
      if (L) return L;
      const A = xr(
        Cg(Ve.parse(h, { async: !1 }))
      );
      if (X.set(h, A), X.size > 80) {
        const z = X.keys().next().value;
        typeof z == "string" && X.delete(z);
      }
      return A;
    }, qr = async (h) => {
      const z = h.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!z) return;
      const G = le.get(z);
      if (G)
        try {
          await navigator.clipboard.writeText(G), ot.msg(t("localAi.codeCopied"));
        } catch (ee) {
          ot.msg(`${t("common.copy")}: ${ee}`, "error");
        }
    }, hn = (h) => {
      const L = h.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!L || L.index === void 0)
        return { reasoning: "", answer: h };
      const A = h.slice(0, L.index).trim(), z = L[0], G = h.slice(L.index + z.length).trim();
      return {
        reasoning: (L[1] ?? "").trim(),
        answer: [A, G].filter(Boolean).join(`

`)
      };
    }, Yr = (h) => hn(h).reasoning, Zr = (h) => hn(h).answer, Be = (h, L) => {
      const { reasoning: A, answer: z } = hn(h.content);
      if (!h.streaming)
        return he.delete(h.id), L === "reasoning" ? A : z;
      const G = Date.now(), ee = he.get(h.id);
      if (!ee || G - ee.updatedAt >= E2 || h.content.length - ee.source.length >= A2 || !ee.reasoning && !!A || !ee.answer && !!z) {
        const we = {
          source: h.content,
          reasoning: A,
          answer: z,
          updatedAt: G
        };
        return he.set(h.id, we), L === "reasoning" ? A : z;
      }
      return L === "reasoning" ? ee.reasoning : ee.answer;
    }, In = (h) => !!Zr(h.content), Rr = (h) => !!(h.streaming && h.allowThinking && h.reasoningStartedAt && !h.reasoningEndedAt && !In(h)), Xr = (h) => {
      if (!h.reasoningStartedAt) return "0.00";
      const L = h.reasoningEndedAt ?? (h.streaming ? T.value : Date.now());
      return Math.max(0, (L - h.reasoningStartedAt) / 1e3).toFixed(2);
    }, gr = (h) => !h.reasoningStartedAt && h.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Xr(h)
    }), on = (h) => new Date(
      h.createdAt || oe.value?.updatedAt || Date.now()
    ), Nr = (h) => on(h).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), To = (h, L) => on(h).toDateString() === on(L).toDateString(), Dt = (h) => on(h).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), $ = (h) => {
      const L = Ce.value[h]?.message;
      if (!L) return !1;
      if (h === 0) return !Dt(L);
      const A = Ce.value[h - 1]?.message;
      return A ? To(A, L) ? on(L).getTime() - on(A).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, re = (h) => {
      const L = on(h), A = L.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), z = L.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Dt(h) ? z : `${A} ${z}`;
    }, Ee = (h) => h.streaming ? Rr(h) ? t("localAi.thinking") : t("localAi.generating") : Nr(h), et = (h) => h.allowThinking && !h.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), mt = (h, L) => {
      h.allowThinking && (L.includes("<think>") && !h.reasoningStartedAt && (h.reasoningStartedAt = Date.now()), L.includes("</think>") && !h.reasoningEndedAt && (h.reasoningEndedAt = Date.now()));
    }, Ot = (h) => {
      const L = h.trim();
      if (!L) return 0;
      const A = (L.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, ee = (L.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((_e, we) => /^[A-Za-z0-9_]+$/.test(we) ? _e + Math.max(1, Math.ceil(we.length / 4)) : _e + 1, 0);
      return Math.max(1, Math.ceil(A + ee));
    }, Ht = (h) => Array.isArray(h) ? h.filter((L) => L.type === "text").map((L) => L.text).join(`
`) : h, Ft = (h) => {
      const L = h.attachments?.filter(
        (ee) => ee.status === "parsed"
      ) ?? [], A = qh(
        h.content,
        L
      ), z = L.filter(
        (ee) => ee.type === "image" && ee.dataUrl
      );
      if (!z.length) return A;
      const G = [{ type: "text", text: A }];
      for (const ee of z)
        G.push({
          type: "image_url",
          image_url: {
            url: ee.dataUrl ?? ""
          }
        });
      return G;
    }, zt = (h) => Ot(
      h.map((L) => {
        const A = Ht(L.content);
        return `${L.role}: ${A}`;
      }).join(`
`)
    ), Pr = (h, L) => {
      const A = Math.max(240, L * 4);
      return h.length <= A ? h : `${t("localAi.previousAnswerTail")}

${h.slice(-A)}`;
    }, is = (h, L) => {
      const A = [];
      let z = 0;
      for (let G = h.length - 1; G >= 0; G -= 1) {
        const ee = h[G], _e = zt([ee]);
        if (z + _e <= L || A.length === 0) {
          A.unshift(ee), z += _e;
          continue;
        }
        const we = L - z;
        if (ee.role !== "assistant" || typeof ee.content != "string" || we < Cs)
          continue;
        let Re = we, gt = {
          ...ee,
          content: Pr(ee.content, Re)
        }, vt = zt([gt]);
        for (; vt > we && Re > Cs; )
          Re = Math.max(
            Cs,
            Math.floor(Re * 0.7)
          ), gt = {
            ...ee,
            content: Pr(ee.content, Re)
          }, vt = zt([gt]);
        z + vt <= L && (A.unshift(gt), z += vt);
      }
      return A;
    }, Qr = () => is(
      te.value.filter((h) => !h.streaming && h.role !== "system").map((h) => ({
        role: h.role,
        content: h.role === "user" ? Ft(h) : h.content
      })),
      Tt.value
    ), aa = (h) => {
      const L = E.value?.maxTokens ?? 0;
      if (L > 0) return L;
      const A = zt(h);
      return Math.max(256, He.value - A - 128);
    }, $r = (h) => Math.max(
      1,
      h.stats?.ctxSize ?? h.contextSize ?? R.value?.ctxSize ?? E.value?.ctxSize ?? 4096
    ), Xt = (h) => {
      const L = T.value, A = te.value.findIndex(
        (vt) => vt.id === h.id
      ), z = h.stats?.promptTokens ?? h.promptTokens ?? Ot(
        te.value.slice(0, Math.max(0, A)).map((vt) => vt.content).join(`
`)
      ), G = h.stats?.completionTokens ?? Ot(h.content), ee = $r(h), _e = h.stats?.totalTokens ?? z + G, we = Math.min(_e, ee), Re = Math.max(
        0,
        (h.stats?.generationTimeMs ?? h.elapsedMs ?? L - on(h).getTime()) / 1e3
      ), gt = h.stats?.tokensPerSecond ?? (Re > 0 ? G / Re : 0);
      return {
        context: we,
        contextMax: ee,
        contextPercent: Math.min(100, Math.round(we / ee * 100)),
        output: G,
        outputMax: (E.value?.maxTokens ?? 0) > 0 ? String(E.value?.maxTokens) : "∞",
        seconds: Re.toFixed(1),
        speed: gt.toFixed(1)
      };
    }, ce = (h) => h.repetitionStopped ? t("localAi.repetitionStopped") : h.interrupted ? t("localAi.streamInterrupted") : h.stopped ? t("localAi.generationStopped") : (h.stats?.totalTokens ?? (h.promptTokens ?? 0) + (h.stats?.completionTokens ?? Ot(h.content))) >= $r(h) - 8 ? t("localAi.contextLimitReached") : h.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", _ = (h) => {
      const L = String(h);
      return /exceeds the available context size|exceed_context_size/i.test(L) ? t("localAi.contextExceeded") : L;
    }, j = (h) => {
      const L = h.replace(/\s+/g, " ").trim();
      if (L.length < 900) return !1;
      const z = L.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((we) => we.toLowerCase()) ?? [];
      if (z.length < 140) return !1;
      const G = z.slice(-120), ee = /* @__PURE__ */ new Map();
      for (const we of G) ee.set(we, (ee.get(we) ?? 0) + 1);
      if (ee.size / G.length < 0.12 && [...ee.values()].some((we) => we >= 56))
        return !0;
      for (let we = 1; we <= 4; we += 1) {
        const Re = z.slice(-we).join("\0");
        let gt = 1;
        for (let vt = z.length - we * 2; vt >= 0 && z.slice(vt, vt + we).join("\0") === Re; vt -= we)
          gt += 1;
        if (gt >= Math.max(24, Math.ceil(72 / we))) return !0;
      }
      return !1;
    }, ae = () => {
      Z || (T.value = Date.now(), Z = setInterval(() => {
        T.value = Date.now();
      }, 250));
    }, Ne = () => {
      Z && (clearInterval(Z), Z = null, T.value = Date.now());
    }, Oe = async (h) => {
      const L = performance.now(), A = ad(), z = Qr();
      let G = "", ee = null, _e = null, we = !1, Re = !1;
      v.value = A, d.value = !1, h.promptTokens = zt(z), h.contextSize = He.value;
      const gt = async () => {
        if (!G) {
          ee = null, _e?.(), _e = null;
          return;
        }
        const Et = d.value ? 480 : G.length > 900 ? 180 : G.length > 240 ? 96 : 32;
        h.content += G.slice(0, Et), G = G.slice(Et), !Re && !d.value && j(h.content) && (Re = !0, d.value = !0, h.repetitionStopped = !0, ms(A).catch(
          (Ao) => vn.warn("[LocalAI] repetition stop failed", Ao)
        )), await J(), ee = window.setTimeout(() => {
          gt().catch(
            (Ao) => vn.warn("[LocalAI] stream pump failed", Ao)
          );
        }, 48);
      }, vt = (Et) => {
        Et && (mt(h, Et), G += Et, ee === null && (ee = window.setTimeout(() => {
          gt().catch(
            (Ao) => vn.warn("[LocalAI] stream pump failed", Ao)
          );
        }, 32)));
      }, la = async () => {
        !G && ee === null || await new Promise((Et) => {
          _e = Et;
        });
      }, Jr = await Nh(
        {
          messages: z,
          maxTokens: aa(z),
          enableThinking: h.allowThinking === !0
        },
        (Et) => {
          we = !0, vt(Et);
        },
        {
          requestId: A,
          onStats: (Et) => {
            h.stats = {
              ...h.stats ?? {},
              ...Et
            }, Et.ctxSize && (h.contextSize = Et.ctxSize), T.value = Date.now();
          }
        }
      ).catch(async (Et) => {
        throw await la(), Et;
      });
      if (!we)
        vt(Jr.content);
      else if (!d.value) {
        const Et = h.content.length + G.length;
        Jr.content.length > Et && vt(Jr.content.slice(Et));
      }
      await la(), !d.value && Jr.content && h.content !== Jr.content && (h.content = Jr.content), h.streaming = !1, h.elapsedMs = performance.now() - L, h.stopped = d.value, h.interrupted = !1, h.error = "", T.value = Date.now(), v.value = null;
    }, qe = async () => {
      const h = v.value;
      if (!(!l.value || !h || d.value)) {
        d.value = !0;
        try {
          await ms(h);
        } catch (L) {
          vn.warn("[LocalAI] cancel stream failed", L);
        }
      }
    }, Qt = (h) => {
      h.isComposing || h.keyCode === 229 || h.key === "Enter" && !h.shiftKey && (h.preventDefault(), Jt());
    }, cn = () => {
      if (!s.value.trim() && !i.value.length) return !1;
      if (i.value.find(
        (z) => z.status === "pending"
      ))
        return ot.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const L = i.value.find(
        (z) => z.status === "error" || z.type === "unsupported"
      );
      return L ? (ot.msg(
        `${t("localAi.attachmentErrorBlock")}: ${L.name}`,
        "warning"
      ), !1) : i.value.some(
        (z) => z.type === "image"
      ) && !kt.value ? (ot.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, Jt = async () => {
      const h = s.value.trim();
      if (l.value || !cn()) return;
      Mt();
      const L = (/* @__PURE__ */ new Date()).toISOString(), A = i.value.map((Re) => ({
        ...Re
      })), z = h || A[0]?.name || "", G = oe.value;
      if (!G) return;
      const ee = Pe(G, {
        id: se("user"),
        role: "user",
        content: h,
        createdAt: L,
        attachments: A
      }), _e = Pe(G, {
        id: se("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: ee.id,
        streaming: !0,
        allowThinking: p.value && lt.value,
        contextSize: He.value,
        promptTokens: zt(Qr())
      });
      s.value = "", i.value = [], l.value = !0, ae(), await J({ force: !0 });
      const we = performance.now();
      try {
        await Oe(_e), oe.value && (oe.value.title = oe.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : oe.value.title, oe.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), oe.value.updatedAtLabel = new Date(
          oe.value.updatedAt
        ).toLocaleString(), await Ie()), await S();
      } catch (Re) {
        if (!d.value) {
          s.value = h, i.value = A;
          const gt = _(Re);
          ot.msg(`${t("localAi.chatFailed")}: ${gt}`, "error"), _e.error = gt, _e.interrupted = !!_e.content.trim(), _e.interrupted || (_e.content = gt), oe.value && (oe.value.title = oe.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : oe.value.title, oe.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), oe.value.updatedAtLabel = new Date(
            oe.value.updatedAt
          ).toLocaleString(), await Ie());
        }
        _e.streaming = !1, _e.elapsedMs = performance.now() - we;
      } finally {
        l.value = !1, v.value = null, Ne(), await J();
      }
    }, So = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, ht = (h) => {
      const L = new Date(h), A = /* @__PURE__ */ new Date(), z = A.getTime() - L.getTime(), G = 24 * 60 * 60 * 1e3;
      return L.toDateString() === A.toDateString() ? L.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : z < G * 2 ? t("localAi.yesterday") : z < G * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(z / G))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(z / (G * 7)))
      });
    }, Eo = async (h) => {
      try {
        await navigator.clipboard.writeText(h.content), ot.msg(t("localAi.copied"));
      } catch (L) {
        ot.msg(`${t("common.operationFailed")}: ${L}`, "error");
      }
    }, sa = (h, L) => {
      const A = ye(h), z = /* @__PURE__ */ new Set([L]), G = (ee) => {
        const _e = A.get(ee);
        for (const we of _e?.childIds ?? [])
          z.add(we), G(we);
      };
      return G(L), z;
    }, Xl = async (h) => {
      const L = oe.value;
      if (!L) return;
      const A = L.messages.find((G) => G.id === h);
      if (!A || be(A)) return;
      const z = sa(L.messages, h);
      L.messages = L.messages.filter((G) => !z.has(G.id)).map((G) => ({
        ...G,
        childIds: (G.childIds ?? []).filter((ee) => !z.has(ee))
      })), L.currentNodeId && z.has(L.currentNodeId) && (L.currentNodeId = Q(L.messages, A.parentId) ?? B(L.messages)?.id ?? null), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await Ie();
    }, Ql = (h) => {
      s.value = h.content, oe.value && h.parentId && (oe.value.currentNodeId = h.parentId);
    }, Jl = (h) => t("localAi.messageVersion", {
      current: h.siblingCurrentIndex + 1,
      total: h.siblingLeafNodeIds.length
    }), ei = (h, L) => {
      const A = oe.value;
      if (!A) return;
      const z = h.siblingCurrentIndex + L, G = h.siblingLeafNodeIds[z];
      G && (A.currentNodeId = G, y.value = !0, J({ force: !0 }));
    }, If = async (h) => {
      const L = oe.value;
      if (!L || l.value) return;
      const A = L.messages.find((Re) => Re.id === h);
      if (!A || A.role !== "assistant") return;
      const z = pe(L.messages, A.id);
      if (!z.length) return;
      const G = (/* @__PURE__ */ new Date()).toISOString(), ee = /* @__PURE__ */ new Map(), _e = z.map((Re, gt) => {
        const vt = se(gt === 0 ? "root" : Re.role);
        return ee.set(Re.id, vt), {
          ...Re,
          id: vt,
          parentId: Re.parentId ? ee.get(Re.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Re.attachments?.map((la) => ({ ...la }))
        };
      });
      for (let Re = 0; Re < _e.length - 1; Re += 1)
        _e[Re].childIds = [_e[Re + 1].id];
      const we = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${L.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: G,
        updatedAt: G,
        updatedAtLabel: Je(),
        currentNodeId: _e.at(-1)?.id ?? null,
        messages: _e
      };
      r.value.unshift(we), o.value = we.id, s.value = "", i.value = [], y.value = !0, await Ie(), await J({ force: !0 }), ot.msg(t("localAi.branchCreated"));
    }, Lf = async (h) => {
      const L = oe.value;
      if (!L || l.value) return;
      const A = L.messages.find((ee) => ee.id === h);
      if (!A || A.role !== "assistant" || !A.parentId) return;
      L.currentNodeId = A.parentId;
      const z = Pe(L, {
        id: se("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: A.parentId,
        streaming: !0,
        allowThinking: p.value && lt.value,
        promptTokens: zt(Qr())
      });
      l.value = !0, ae(), await J({ force: !0 });
      const G = performance.now();
      try {
        await Oe(z), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await Ie();
      } catch (ee) {
        if (!d.value) {
          const _e = _(ee);
          ot.msg(`${t("localAi.chatFailed")}: ${_e}`, "error"), z.error = _e, z.interrupted = !!z.content.trim(), z.interrupted || (z.content = _e), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await Ie();
        }
        z.streaming = !1, z.elapsedMs = performance.now() - G;
      } finally {
        l.value = !1, v.value = null, Ne(), await J();
      }
    };
    return pt(async () => {
      await ke(), x = setInterval(() => {
        S().catch(
          (h) => vn.warn("[LocalAI] status timer failed", h)
        );
      }, 8e3);
    }), Ae(lt, (h) => {
      h || (p.value = !1);
    }), ja(() => {
      x && clearInterval(x), v.value && ms(v.value), Ne();
    }), (h, L) => (N(), U(
      "main",
      {
        class: K([
          "local-ai-chat-shell",
          c(a) ? "local-ai-chat-shell--sidebar-collapsed" : ""
        ])
      },
      [
        b(
          "aside",
          {
            class: K([
              "chat-sidebar",
              c(a) ? "chat-sidebar--collapsed" : ""
            ])
          },
          [
            b("header", eS, [
              b("div", tS, [
                b(
                  "h2",
                  null,
                  D(c(t)("localAi.chatTitle")),
                  1
                  /* TEXT */
                )
              ]),
              b("button", {
                class: "icon-action-btn sidebar-collapse-btn",
                type: "button",
                title: c(a) ? c(t)("localAi.expandSidebar") : c(t)("localAi.collapseSidebar"),
                "aria-pressed": c(a),
                onClick: L[0] || (L[0] = (A) => a.value = !c(a))
              }, [
                M(c(oi), {
                  theme: "outline",
                  size: "17"
                })
              ], 8, nS)
            ]),
            b("div", rS, [
              b("button", {
                class: "sidebar-nav-item",
                type: "button",
                onClick: Ze
              }, [
                M(c(us), {
                  theme: "outline",
                  size: "18"
                }),
                b(
                  "span",
                  null,
                  D(c(t)("localAi.newChat")),
                  1
                  /* TEXT */
                )
              ]),
              b("label", oS, [
                M(c(np), {
                  theme: "outline",
                  size: "18"
                }),
                At(b("input", {
                  "onUpdate:modelValue": L[1] || (L[1] = (A) => io(n) ? n.value = A : null),
                  placeholder: c(t)("localAi.searchHistory")
                }, null, 8, aS), [
                  [jo, c(n)]
                ])
              ])
            ]),
            b("section", sS, [
              b("div", lS, [
                b(
                  "div",
                  iS,
                  D(c(t)("localAi.recent")),
                  1
                  /* TEXT */
                ),
                b("button", {
                  class: "icon-action-btn",
                  type: "button",
                  title: c(t)("plugins.refresh"),
                  onClick: ke
                }, [
                  M(c(ai), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, cS)
              ]),
              c(St).length ? (N(), U("div", uS, [
                (N(!0), U(
                  ct,
                  null,
                  Jn(c(St), (A) => (N(), U("div", {
                    key: A.id,
                    class: K([
                      "chat-list-item",
                      c(o) === A.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: (z) => Ye(A.id),
                    onKeydown: _n(tt((z) => Ye(A.id), ["prevent"]), ["enter"])
                  }, [
                    b(
                      "span",
                      fS,
                      D(A.title),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      pS,
                      D(ht(A.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    b("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: tt((z) => Wn(A.id), ["stop"])
                    }, [
                      M(c(ia), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, mS)
                  ], 42, dS))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (N(), U(
                "div",
                hS,
                D(c(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            b("footer", gS, [
              b("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: So
              }, [
                M(c(yu), {
                  theme: "outline",
                  size: "16"
                }),
                b(
                  "span",
                  null,
                  D(c(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              b("div", vS, [
                b(
                  "span",
                  {
                    class: K([
                      "status-pill",
                      c(R)?.healthy ? "ready" : "stopped"
                    ])
                  },
                  [
                    L[9] || (L[9] = b(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    )),
                    an(
                      " " + D(c(ve)),
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
        b("section", bS, [
          c(a) ? (N(), U("button", {
            key: 0,
            class: "panel-sidebar-toggle",
            type: "button",
            title: c(t)("localAi.expandSidebar"),
            onClick: L[2] || (L[2] = (A) => a.value = !1)
          }, [
            M(c(oi), {
              theme: "outline",
              size: "17"
            })
          ], 8, yS)) : ne("v-if", !0),
          b(
            "div",
            {
              ref_key: "messageListRef",
              ref: I,
              class: "message-list",
              onScroll: V
            },
            [
              c(te).length ? ne("v-if", !0) : (N(), U("div", _S, [
                M(c(si), {
                  theme: "outline",
                  size: "28"
                }),
                b(
                  "div",
                  wS,
                  D(c(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                b(
                  "div",
                  kS,
                  D(c(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (N(!0), U(
                ct,
                null,
                Jn(c(Ce), (A, z) => (N(), U(
                  ct,
                  {
                    key: A.message.id
                  },
                  [
                    $(z) ? (N(), U("div", TS, [
                      b(
                        "span",
                        null,
                        D(re(A.message)),
                        1
                        /* TEXT */
                      )
                    ])) : ne("v-if", !0),
                    b(
                      "article",
                      {
                        class: K(["message-row", `message-row--${A.message.role}`])
                      },
                      [
                        b("div", SS, [
                          A.message.role === "assistant" ? (N(), fe(c(si), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (N(), U(
                            "span",
                            ES,
                            D(c(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        b("div", AS, [
                          A.message.role === "user" ? (N(), U(
                            ct,
                            { key: 0 },
                            [
                              b("div", CS, [
                                A.message.content ? (N(), U(
                                  "div",
                                  IS,
                                  D(A.message.content),
                                  1
                                  /* TEXT */
                                )) : ne("v-if", !0),
                                A.message.attachments?.length ? (N(), U("div", LS, [
                                  (N(!0), U(
                                    ct,
                                    null,
                                    Jn(A.message.attachments, (G) => (N(), U(
                                      "div",
                                      {
                                        key: G.id,
                                        class: K([
                                          "message-attachment-chip",
                                          G.type === "image" && G.dataUrl ? "message-attachment-chip--image" : ""
                                        ])
                                      },
                                      [
                                        G.type === "image" && G.dataUrl ? (N(), U("figure", {
                                          key: 0,
                                          title: G.name
                                        }, [
                                          b("img", {
                                            src: G.dataUrl,
                                            alt: G.name
                                          }, null, 8, xS)
                                        ], 8, OS)) : (N(), U(
                                          "span",
                                          RS,
                                          D(G.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        G.type === "image" && G.dataUrl ? ne("v-if", !0) : (N(), U(
                                          "span",
                                          NS,
                                          D(G.name),
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
                              A.message.streaming ? ne("v-if", !0) : (N(), U("div", PS, [
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (G) => Eo(A.message)
                                }, [
                                  M(c(ni), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, $S),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (G) => Ql(A.message)
                                }, [
                                  M(c(us), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, MS),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (G) => Xl(A.message.id)
                                }, [
                                  M(c(ia), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, DS)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (N(), U(
                            ct,
                            { key: 1 },
                            [
                              b("div", FS, [
                                b(
                                  "span",
                                  null,
                                  D(c(me)),
                                  1
                                  /* TEXT */
                                ),
                                A.message.streaming ? (N(), U(
                                  "small",
                                  zS,
                                  D(Ee(A.message)),
                                  1
                                  /* TEXT */
                                )) : ne("v-if", !0)
                              ]),
                              b(
                                "div",
                                {
                                  class: K(["assistant-card", {
                                    "assistant-card--streaming": A.message.streaming
                                  }])
                                },
                                [
                                  A.message.content ? (N(), U("div", BS, [
                                    A.message.allowThinking && Yr(A.message.content) ? (N(), U("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: A.message.streaming && Rr(A.message)
                                    }, [
                                      b("summary", null, [
                                        b("span", jS, [
                                          M(c(ti), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          an(
                                            " " + D(gr(A.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        A.message.streaming ? (N(), U(
                                          "small",
                                          US,
                                          D(Rr(A.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : ne("v-if", !0)
                                      ]),
                                      b("div", {
                                        class: "message-content markdown-body",
                                        onClick: qr,
                                        innerHTML: hr(
                                          Be(A.message, "reasoning")
                                        )
                                      }, null, 8, HS)
                                    ], 8, VS)) : ne("v-if", !0),
                                    Zr(A.message.content) ? (N(), U("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: qr,
                                      innerHTML: hr(
                                        Be(A.message, "answer")
                                      )
                                    }, null, 8, WS)) : ne("v-if", !0)
                                  ])) : (N(), U(
                                    "div",
                                    GS,
                                    D(et(A.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              A.message.content ? (N(), U("div", KS, [
                                b(
                                  "span",
                                  null,
                                  D(c(t)("localAi.contextLabel")) + ": " + D(Xt(A.message).context) + "/" + D(Xt(A.message).contextMax) + " (" + D(Xt(A.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  null,
                                  D(c(t)("localAi.outputLabel")) + ": " + D(Xt(A.message).output) + "/" + D(Xt(A.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  null,
                                  D(Xt(A.message).seconds) + "s",
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  null,
                                  D(Xt(A.message).speed) + " t/s",
                                  1
                                  /* TEXT */
                                ),
                                A.message.streaming ? ne("v-if", !0) : (N(), U(
                                  "span",
                                  qS,
                                  D(Nr(A.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : ne("v-if", !0),
                              ce(A.message) ? (N(), U(
                                "div",
                                YS,
                                D(ce(A.message)),
                                1
                                /* TEXT */
                              )) : ne("v-if", !0),
                              A.message.streaming ? ne("v-if", !0) : (N(), U("div", ZS, [
                                A.siblingLeafNodeIds.length > 1 ? (N(), U("div", {
                                  key: 0,
                                  class: "message-version-switcher",
                                  title: Jl(A),
                                  "aria-label": Jl(A)
                                }, [
                                  b("button", {
                                    type: "button",
                                    disabled: A.siblingCurrentIndex <= 0,
                                    title: c(t)("localAi.previousVersion"),
                                    onClick: (G) => ei(A, -1)
                                  }, " ‹ ", 8, QS),
                                  b(
                                    "span",
                                    null,
                                    D(A.siblingCurrentIndex + 1) + " / " + D(A.siblingLeafNodeIds.length),
                                    1
                                    /* TEXT */
                                  ),
                                  b("button", {
                                    type: "button",
                                    disabled: A.siblingCurrentIndex >= A.siblingLeafNodeIds.length - 1,
                                    title: c(t)("localAi.nextVersion"),
                                    onClick: (G) => ei(A, 1)
                                  }, " › ", 8, JS)
                                ], 8, XS)) : ne("v-if", !0),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (G) => Eo(A.message)
                                }, [
                                  M(c(ni), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, e2),
                                A.message.role === "assistant" ? (N(), U("button", {
                                  key: 1,
                                  type: "button",
                                  title: c(t)("localAi.regenerate"),
                                  onClick: (G) => Lf(A.message.id)
                                }, [
                                  M(c(ai), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, t2)) : ne("v-if", !0),
                                A.message.role === "assistant" ? (N(), U("button", {
                                  key: 2,
                                  type: "button",
                                  title: c(t)("localAi.branchChat"),
                                  onClick: (G) => If(A.message.id)
                                }, [
                                  M(c(ep), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, n2)) : ne("v-if", !0),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (G) => Ql(A.message)
                                }, [
                                  M(c(us), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, r2),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (G) => Xl(A.message.id)
                                }, [
                                  M(c(ia), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, o2)
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
          c(g) ? (N(), U("button", {
            key: 1,
            class: "scroll-bottom-btn",
            type: "button",
            title: c(t)("localAi.jumpToLatest"),
            onClick: xe
          }, [
            M(c(ri), {
              theme: "outline",
              size: "15"
            }),
            b(
              "span",
              null,
              D(c(t)("localAi.jumpToLatest")),
              1
              /* TEXT */
            )
          ], 8, a2)) : ne("v-if", !0),
          b(
            "form",
            {
              class: K([
                "chat-input-card",
                c(m) ? "chat-input-card--focused" : ""
              ]),
              onDragover: L[6] || (L[6] = tt(() => {
              }, ["prevent"])),
              onDrop: tt(mn, ["prevent"]),
              onSubmit: tt(Jt, ["prevent"]),
              onFocusin: L[7] || (L[7] = (A) => m.value = !0),
              onFocusout: L[8] || (L[8] = (A) => m.value = !1)
            },
            [
              b(
                "input",
                {
                  ref_key: "fileInputRef",
                  ref: w,
                  class: "attachment-input",
                  type: "file",
                  multiple: "",
                  accept: ".txt,.md,.json,.csv,.html,.css,.js,.ts,.tsx,.vue,.rs,.py,.java,.go,.yaml,.yml,.toml,.xml,.log,image/png,image/jpeg,image/webp,.pdf,.doc,.docx,.xls,.xlsx",
                  onChange: qn
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              c(i).length ? (N(), U("div", s2, [
                (N(!0), U(
                  ct,
                  null,
                  Jn(c(i), (A) => (N(), U(
                    "div",
                    {
                      key: A.id,
                      class: K([
                        "attachment-preview-item",
                        `attachment-preview-item--${A.status}`
                      ])
                    },
                    [
                      A.type === "image" && A.dataUrl ? (N(), U("img", {
                        key: 0,
                        src: A.dataUrl,
                        alt: A.name
                      }, null, 8, l2)) : (N(), U(
                        "span",
                        i2,
                        D(A.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      b("span", c2, [
                        b(
                          "strong",
                          null,
                          D(A.name),
                          1
                          /* TEXT */
                        ),
                        b(
                          "small",
                          null,
                          D(c(Hh)(A.size)) + " · " + D(Lr(A)),
                          1
                          /* TEXT */
                        )
                      ]),
                      b("button", {
                        type: "button",
                        title: c(t)("common.delete"),
                        onClick: (z) => Cn(A.id)
                      }, [
                        M(c(ia), {
                          theme: "outline",
                          size: "12"
                        })
                      ], 8, u2)
                    ],
                    2
                    /* CLASS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : ne("v-if", !0),
              At(b("textarea", {
                "onUpdate:modelValue": L[3] || (L[3] = (A) => io(s) ? s.value = A : null),
                class: "chat-input",
                rows: "2",
                placeholder: c(t)("localAi.chatPlaceholder"),
                onKeydown: Qt,
                onPaste: Zt
              }, null, 40, d2), [
                [jo, c(s)]
              ]),
              b("div", f2, [
                b("div", p2, [
                  b("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: c(t)("localAi.addAttachment"),
                    onClick: Ir
                  }, [
                    M(c(tp), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, m2),
                  b("label", h2, [
                    At(b("select", {
                      "onUpdate:modelValue": L[4] || (L[4] = (A) => io(C) ? C.value = A : null),
                      disabled: c(l) || !c(rt).length,
                      onChange: Or
                    }, [
                      (N(!0), U(
                        ct,
                        null,
                        Jn(c(rt), (A) => (N(), U("option", {
                          key: A,
                          value: A
                        }, D(Ke(A)), 9, v2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      c(rt).length ? ne("v-if", !0) : (N(), U(
                        "option",
                        b2,
                        D(c(me)),
                        1
                        /* TEXT */
                      ))
                    ], 40, g2), [
                      [Yf, c(C)]
                    ]),
                    M(c(ri), {
                      theme: "outline",
                      size: "14"
                    })
                  ]),
                  c(lt) ? (N(), U("button", {
                    key: 0,
                    class: K([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      c(p) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: c(p) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                    "aria-pressed": c(p),
                    onClick: L[5] || (L[5] = (A) => p.value = !c(p))
                  }, [
                    M(c(ti), {
                      theme: "outline",
                      size: "15"
                    }),
                    b(
                      "span",
                      null,
                      D(c(t)("localAi.reasoningTitle")),
                      1
                      /* TEXT */
                    )
                  ], 10, y2)) : ne("v-if", !0)
                ]),
                b("div", _2, [
                  L[10] || (L[10] = b(
                    "span",
                    { class: "input-hint" },
                    "Enter · Shift + Enter",
                    -1
                    /* HOISTED */
                  )),
                  c(l) ? (N(), U("button", {
                    key: 0,
                    class: "send-btn send-btn--stop",
                    type: "button",
                    title: c(t)("localAi.stopGenerating"),
                    "aria-label": c(t)("localAi.stopGenerating"),
                    onClick: qe
                  }, [
                    M(c(op), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, w2)) : (N(), U("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !c(Ue),
                    title: c(t)("localAi.send"),
                    "aria-label": c(t)("localAi.send")
                  }, [
                    M(c(rp), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, k2))
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
}), Zl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, I2 = /* @__PURE__ */ Zl(C2, [["__scopeId", "data-v-99d93241"]]), L2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I2
}, Symbol.toStringTag, { value: "Module" }));
async function mu(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Pt("plugin:dialog|open", { options: e });
}
const O2 = ["disabled"], x2 = {
  key: 0,
  class: "custom-button__loading"
}, R2 = /* @__PURE__ */ ie({
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
    return (n, r) => (N(), U("button", {
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
      e.loading ? (N(), U("div", x2, r[1] || (r[1] = [
        b(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            b("circle", {
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
      Se(n.$slots, "default", {}, void 0, !0)
    ], 10, O2));
  }
}), vr = /* @__PURE__ */ Zl(R2, [["__scopeId", "data-v-9497085f"]]), N2 = { class: "settings-panel local-ai-settings-shell" }, P2 = { class: "local-ai-hero panel-card" }, $2 = { class: "panel-title" }, M2 = { class: "hero-desc" }, D2 = { class: "header-actions" }, F2 = {
  key: 0,
  class: "settings-grid"
}, z2 = { class: "summary-panel panel-card" }, B2 = { class: "status-strip" }, V2 = { class: "memory-card" }, j2 = { class: "memory-card__header" }, U2 = { class: "memory-metrics" }, H2 = { class: "bottleneck-row" }, W2 = { class: "summary-card" }, G2 = { class: "summary-card__title" }, K2 = { class: "summary-card__desc" }, q2 = { class: "service-controls" }, Y2 = { class: "service-url" }, Z2 = { class: "summary-card" }, X2 = { class: "summary-card__title" }, Q2 = { class: "summary-card__desc" }, J2 = { class: "summary-meta" }, eE = { class: "form-panel panel-card" }, tE = { class: "settings-section" }, nE = { class: "settings-section__header" }, rE = { class: "field-stack" }, oE = ["title"], aE = { class: "path-control" }, sE = ["title"], lE = ["title"], iE = ["title"], cE = { class: "path-control" }, uE = ["placeholder"], dE = { class: "settings-section grid-two" }, fE = { class: "settings-section__header" }, pE = { class: "param-grid" }, mE = ["title"], hE = ["title"], gE = ["title"], vE = ["title"], bE = ["title"], yE = ["title"], _E = { class: "settings-section grid-two" }, wE = { class: "settings-section__header" }, kE = { class: "switch-grid" }, TE = ["title"], SE = ["title"], EE = ["title"], AE = { class: "settings-section grid-two" }, CE = { class: "settings-section__header" }, IE = { class: "switch-grid switch-grid--two" }, LE = ["title"], OE = ["title"], xE = ["title"], RE = ["title"], NE = { class: "settings-section grid-two" }, PE = { class: "settings-section__header" }, $E = { class: "param-grid param-grid--three" }, ME = ["title"], DE = ["title"], FE = ["title"], zE = ["title"], BE = ["title"], VE = ["title"], jE = ["title"], UE = ["title"], HE = { class: "settings-footer" }, WE = ["title"], GE = /* @__PURE__ */ ie({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = W(null), r = W(null), o = W(null), a = W(null), s = W(!1), i = W(!1), l = W(!1), u = W(!1), d = W(!1);
    let p = null;
    const m = P(() => !!a.value?.selectedModelPath), y = P(() => !!n.value?.mmprojPath), g = P({
      get: () => n.value?.modelPath ?? "",
      set: (Y) => {
        n.value && (n.value.modelPath = Y || void 0);
      }
    }), v = P({
      get: () => n.value?.mmprojPath ?? "",
      set: (Y) => {
        n.value && (n.value.mmprojPath = Y || void 0);
      }
    }), E = P(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), f = P(
      () => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), C = P(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), R = (Y) => Y.split(/[\\/]+/).pop() ?? Y, I = P(() => {
      const q = R(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return q ? Number(q[1]) : 4;
    }), w = P(() => {
      const Y = n.value;
      if (!Y)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const q = Math.max(1.4, I.value * 0.92), Pe = Math.min(1, Math.max(0, Y.gpuLayers) / 32), Ue = Y.ctxSize / 8192 * 0.38 * (Y.kvOffload ? 1 : 0.12), ve = Y.batchSize / 512 * 0.18, oe = q * Pe + Ue + ve, te = q * (1 - Pe) + Y.ctxSize / 8192 * 0.22, Ce = oe + te, Ke = Y.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : Y.ctxSize >= 32768 || Y.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: oe.toFixed(2),
        totalGb: Ce.toFixed(2),
        bottleneck: Ke
      };
    }), T = (Y) => t(`localAi.paramHints.${Y}`), x = async () => {
      r.value = await Oh();
    }, Z = async () => {
      o.value = await rd();
    }, X = async () => {
      n.value && (a.value = await nd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, le = async () => {
      s.value = !0;
      try {
        n.value = await td(), await Promise.all([x(), X(), Z()]);
      } catch (Y) {
        vn.error("[LocalAI] refresh settings failed", Y), ot.msg(`${t("localAi.refreshFailed")}: ${Y}`, "error");
      } finally {
        s.value = !1;
      }
    }, he = async () => {
      if (n.value)
        try {
          await Ta(n.value);
        } catch (Y) {
          vn.warn("[LocalAI] autosave failed", Y);
        }
    }, se = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Ta(n.value), await Promise.all([x(), X(), Z()]), ot.msg(t("localAi.configSaved"));
        } catch (Y) {
          ot.msg(`${t("localAi.configSaveFailed")}: ${Y}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, be = async () => {
      const Y = await mu({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !Y || Array.isArray(Y) || !n.value || (n.value.modelDir = Y, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await X());
    }, ye = async () => {
      const Y = await mu({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !Y || Array.isArray(Y) || !n.value || (n.value.runtimePath = Y, await he(), await x());
    }, B = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Ta(n.value), o.value = await xh(n.value), ot.msg(t("localAi.serviceStarted"));
        } catch (Y) {
          ot.msg(`${t("localAi.serviceStartFailed")}: ${Y}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, Q = async () => {
      u.value = !0;
      try {
        await se(), o.value = await od(), ot.msg(t("localAi.serviceRestarted"));
      } catch (Y) {
        ot.msg(`${t("localAi.serviceRestartFailed")}: ${Y}`, "error");
      } finally {
        u.value = !1;
      }
    }, H = async () => {
      d.value = !0;
      try {
        await Rh(), await Z(), ot.msg(t("localAi.serviceStoppedMsg"));
      } catch (Y) {
        ot.msg(`${t("localAi.serviceStopFailed")}: ${Y}`, "error");
      } finally {
        d.value = !1;
      }
    }, pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return pt(async () => {
      await le(), p = setInterval(() => {
        Z().catch(
          (Y) => vn.warn("[LocalAI] status refresh failed", Y)
        );
      }, 5e3);
    }), ja(() => {
      p && clearInterval(p);
    }), (Y, q) => {
      const Pe = vT, Ue = gT, ve = eT, oe = ST;
      return N(), U("div", N2, [
        b("header", P2, [
          b("div", null, [
            b(
              "h3",
              $2,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              M2,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", D2, [
            M(c(vr), {
              size: "small",
              plain: "",
              onClick: pe
            }, {
              default: de(() => [
                an(
                  D(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            M(c(vr), {
              size: "small",
              loading: c(s),
              onClick: le
            }, {
              default: de(() => [
                an(
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
        c(n) ? (N(), U("main", F2, [
          b("aside", z2, [
            b("div", B2, [
              b(
                "div",
                {
                  class: K(["status-item", { ready: c(r)?.available }])
                },
                [
                  q[25] || (q[25] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(c(E)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              b(
                "div",
                {
                  class: K(["status-item", { ready: c(m) }])
                },
                [
                  q[26] || (q[26] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(c(f)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              b(
                "div",
                {
                  class: K(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  q[27] || (q[27] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(c(C)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", V2, [
              b("div", j2, [
                b(
                  "span",
                  null,
                  D(c(t)("localAi.estimatedMemory")),
                  1
                  /* TEXT */
                ),
                b(
                  "small",
                  null,
                  D(c(t)("localAi.estimateBeta")),
                  1
                  /* TEXT */
                )
              ]),
              b("div", U2, [
                b("div", null, [
                  q[28] || (q[28] = b(
                    "span",
                    null,
                    "GPU",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "b",
                    null,
                    D(c(w).gpuGb) + " GB",
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.total")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(c(w).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", H2, [
                b(
                  "span",
                  null,
                  D(c(t)("localAi.bottleneck")),
                  1
                  /* TEXT */
                ),
                b(
                  "b",
                  null,
                  D(c(w).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            b("section", W2, [
              b(
                "div",
                G2,
                D(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                K2,
                D(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", q2, [
                M(c(vr), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: B
                }, {
                  default: de(() => [
                    an(
                      D(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(vr), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: Q
                }, {
                  default: de(() => [
                    an(
                      D(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(vr), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(d),
                  disabled: !c(o)?.running,
                  onClick: H
                }, {
                  default: de(() => [
                    an(
                      D(c(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              b(
                "div",
                Y2,
                D(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", Z2, [
              b(
                "div",
                X2,
                D(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                Q2,
                D(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", J2, [
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(c(m) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(c(g) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(c(v) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(c(y) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  b(
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
          b("section", eE, [
            b("div", tE, [
              b("div", nE, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", rE, [
                b("label", {
                  class: "field-row",
                  title: T("modelDir")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  b("div", aE, [
                    At(b(
                      "input",
                      {
                        "onUpdate:modelValue": q[0] || (q[0] = (te) => c(n).modelDir = te),
                        class: "text-input",
                        onChange: X
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [jo, c(n).modelDir]
                    ]),
                    M(c(vr), {
                      size: "small",
                      plain: "",
                      onClick: be
                    }, {
                      default: de(() => [
                        an(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, oE),
                b("label", {
                  class: "field-row",
                  title: T("mainModel")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  M(Ue, {
                    modelValue: c(g),
                    "onUpdate:modelValue": q[1] || (q[1] = (te) => io(g) ? g.value = te : null),
                    class: "field-select",
                    clearable: "",
                    onChange: he
                  }, {
                    default: de(() => [
                      (N(!0), U(
                        ct,
                        null,
                        Jn(c(a)?.mainModels ?? [], (te) => (N(), fe(Pe, {
                          key: te,
                          label: R(te),
                          value: te
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, sE),
                b("label", {
                  class: "field-row",
                  title: T("mmprojModel")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  M(Ue, {
                    modelValue: c(v),
                    "onUpdate:modelValue": q[2] || (q[2] = (te) => io(v) ? v.value = te : null),
                    class: "field-select",
                    clearable: "",
                    onChange: he
                  }, {
                    default: de(() => [
                      (N(!0), U(
                        ct,
                        null,
                        Jn(c(a)?.mmprojModels ?? [], (te) => (N(), fe(Pe, {
                          key: te,
                          label: R(te),
                          value: te
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, lE),
                b("label", {
                  class: "field-row",
                  title: T("runtimePath")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  b("div", cE, [
                    At(b("input", {
                      "onUpdate:modelValue": q[3] || (q[3] = (te) => c(n).runtimePath = te),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, uE), [
                      [jo, c(n).runtimePath]
                    ]),
                    M(c(vr), {
                      size: "small",
                      plain: "",
                      onClick: ye
                    }, {
                      default: de(() => [
                        an(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, iE)
              ])
            ]),
            b("div", dE, [
              b("div", fE, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", pE, [
                b("label", {
                  class: "number-field",
                  title: T("ctxSize")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": q[4] || (q[4] = (te) => c(n).ctxSize = te),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, mE),
                b("label", {
                  class: "number-field",
                  title: T("gpuLayers")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": q[5] || (q[5] = (te) => c(n).gpuLayers = te),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, hE),
                b("label", {
                  class: "number-field",
                  title: T("threads")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": q[6] || (q[6] = (te) => c(n).threads = te),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, gE),
                b("label", {
                  class: "number-field",
                  title: T("batchSize")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": q[7] || (q[7] = (te) => c(n).batchSize = te),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, vE),
                b("label", {
                  class: "number-field",
                  title: T("ubatchSize")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": q[8] || (q[8] = (te) => c(n).ubatchSize = te),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, bE),
                b("label", {
                  class: "number-field",
                  title: T("mainGpu")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": q[9] || (q[9] = (te) => c(n).mainGpu = te),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, yE)
              ])
            ]),
            b("div", _E, [
              b("div", wE, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", kE, [
                b("label", {
                  title: T("flashAttn")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  M(oe, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": q[10] || (q[10] = (te) => c(n).flashAttn = te)
                  }, null, 8, ["modelValue"])
                ], 8, TE),
                b("label", {
                  title: T("kvOffload")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  M(oe, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": q[11] || (q[11] = (te) => c(n).kvOffload = te)
                  }, null, 8, ["modelValue"])
                ], 8, SE),
                b("label", {
                  title: T("mmap")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  M(oe, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": q[12] || (q[12] = (te) => c(n).mmap = te)
                  }, null, 8, ["modelValue"])
                ], 8, EE)
              ])
            ]),
            b("div", AE, [
              b("div", CE, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", IE, [
                b("label", {
                  title: T("autoStart")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  M(oe, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": q[13] || (q[13] = (te) => c(n).autoStartOnRequest = te)
                  }, null, 8, ["modelValue"])
                ], 8, LE),
                b("label", {
                  title: T("keepAlive")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  M(oe, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": q[14] || (q[14] = (te) => c(n).keepAlive = te)
                  }, null, 8, ["modelValue"])
                ], 8, OE),
                b("label", {
                  class: "number-field",
                  title: T("idleTimeout")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": q[15] || (q[15] = (te) => c(n).idleTimeoutMinutes = te),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, xE),
                b("label", {
                  class: "number-field",
                  title: T("requestTimeout")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": q[16] || (q[16] = (te) => c(n).requestTimeoutSecs = te),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, RE)
              ])
            ]),
            b("div", NE, [
              b("div", PE, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", $E, [
                b("label", {
                  class: "number-field",
                  title: T("temperature")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": q[17] || (q[17] = (te) => c(n).temperature = te),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, ME),
                b("label", {
                  class: "number-field",
                  title: T("topP")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": q[18] || (q[18] = (te) => c(n).topP = te),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, DE),
                b("label", {
                  class: "number-field",
                  title: T("topK")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": q[19] || (q[19] = (te) => c(n).topK = te),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, FE),
                b("label", {
                  class: "number-field",
                  title: T("minP")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": q[20] || (q[20] = (te) => c(n).minP = te),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, zE),
                b("label", {
                  class: "number-field",
                  title: T("repeatPenalty")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": q[21] || (q[21] = (te) => c(n).repeatPenalty = te),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, BE),
                b("label", {
                  class: "number-field",
                  title: T("repeatLastN")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": q[22] || (q[22] = (te) => c(n).repeatLastN = te),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, VE),
                b("label", {
                  class: "number-field",
                  title: T("maxTokens")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": q[23] || (q[23] = (te) => c(n).maxTokens = te),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, jE),
                b("label", {
                  class: "number-field",
                  title: T("port")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  M(ve, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": q[24] || (q[24] = (te) => c(n).port = te),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, UE)
              ])
            ]),
            b("div", HE, [
              M(c(vr), {
                type: "primary",
                loading: c(i),
                onClick: se
              }, {
                default: de(() => [
                  an(
                    D(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (N(), U("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, D(c(o).commandLine), 9, WE)) : ne("v-if", !0)
            ])
          ])
        ])) : ne("v-if", !0)
      ]);
    };
  }
}), KE = /* @__PURE__ */ Zl(GE, [["__scopeId", "data-v-c43741fb"]]), qE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KE
}, Symbol.toStringTag, { value: "Module" }));
export {
  XE as activate,
  XE as default
};
