var Pf = Object.defineProperty;
var $f = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var He = (e, t, n) => $f(e, typeof t != "symbol" ? t + "" : t, n);
import * as cs from "vue";
import { inject as je, createVNode as M, defineAsyncComponent as Mf, ref as G, shallowRef as Tr, computed as P, watch as Ce, onMounted as vt, onUnmounted as ja, defineComponent as ce, h as gu, Text as vu, Fragment as pt, getCurrentInstance as Kt, unref as c, watchEffect as bu, readonly as Js, getCurrentScope as Df, onScopeDispose as Ff, nextTick as mt, isRef as lo, warn as zf, provide as Bn, createElementBlock as W, openBlock as N, mergeProps as io, renderSlot as Ae, createElementVNode as b, toRef as Jn, useAttrs as Bf, useSlots as Vf, normalizeStyle as Nt, normalizeClass as q, createCommentVNode as ee, createBlock as he, withCtx as pe, resolveDynamicComponent as Wt, withModifiers as nt, toDisplayString as D, onBeforeUnmount as Un, Transition as _o, withDirectives as At, vShow as lr, reactive as Fr, onActivated as jf, onUpdated as yu, cloneVNode as Uf, Comment as Hf, Teleport as Wf, onBeforeMount as Gf, onDeactivated as Kf, createTextVNode as on, withKeys as vn, createSlots as qf, toRaw as Yf, toRefs as el, resolveComponent as $r, resolveDirective as Zf, toHandlerKey as Xf, renderList as Qn, vModelText as jo, shallowReactive as Qf, isVNode as Uo, render as Ca, vModelSelect as Jf } from "vue";
var ep = {
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
function tp() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function np(e, t, n) {
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
var rp = Symbol("icon-context");
function nn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = tp(), i = je(rp, ep);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, m = a.strokeLinejoin, h = a.theme, y = a.fill, g = a.spin, v = np(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: h,
          fill: y
        }, i), A = [i.prefix + "-icon"];
        return A.push(i.prefix + "-icon-" + e), t && i.rtl && A.push(i.prefix + "-icon-rtl"), g && A.push(i.prefix + "-icon-spin"), M("span", {
          class: A.join(" ")
        }, [n(v)]);
      };
    }
  };
  return r;
}
const ni = nn("brain", !0, function(e) {
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
}), ri = nn("copy", !0, function(e) {
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
}), ia = nn("delete", !1, function(e) {
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
}), oi = nn("down", !1, function(e) {
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
}), us = nn("edit", !0, function(e) {
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
}), op = nn("fork", !1, function(e) {
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
}), ai = nn("left-bar", !0, function(e) {
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
}), ap = nn("link", !0, function(e) {
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
}), si = nn("refresh", !0, function(e) {
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
}), li = nn("robot", !0, function(e) {
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
}), sp = nn("search", !0, function(e) {
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
}), lp = nn("send", !0, function(e) {
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
}), _u = nn("setting-two", !1, function(e) {
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
}), ip = nn("square", !1, function(e) {
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
}), fA = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => H2)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: _u,
    component: Mf(() => Promise.resolve().then(() => cA))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function cp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ii = typeof window < "u", jr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), up = (e, t, n) => dp({ l: e, k: t, s: n }), dp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Lt = (e) => typeof e == "number" && isFinite(e), fp = (e) => tl(e) === "[object Date]", Ia = (e) => tl(e) === "[object RegExp]", Ua = (e) => Me(e) && Object.keys(e).length === 0, Pt = Object.assign, pp = Object.create, We = (e = null) => pp(e);
let ci;
const wa = () => ci || (ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : We());
function ui(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function di(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function mp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${di(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${di(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const hp = Object.prototype.hasOwnProperty;
function bn(e, t) {
  return hp.call(e, t);
}
const gt = Array.isArray, st = (e) => typeof e == "function", fe = (e) => typeof e == "string", ht = (e) => typeof e == "boolean", De = (e) => e !== null && typeof e == "object", gp = (e) => De(e) && st(e.then) && st(e.catch), wu = Object.prototype.toString, tl = (e) => wu.call(e), Me = (e) => tl(e) === "[object Object]", vp = (e) => e == null ? "" : gt(e) || Me(e) && e.toString === wu ? JSON.stringify(e, null, 2) : String(e);
function nl(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const ca = (e) => !De(e) || gt(e);
function ka(e, t) {
  if (ca(e) || ca(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (De(r[a]) && !De(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : We()), ca(o[a]) || ca(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function bp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Is(e, t, n) {
  return { start: e, end: t };
}
const ze = {
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
}, yp = 17;
function Ha(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function _p(e) {
  throw e;
}
const On = " ", wp = "\r", Bt = `
`, kp = "\u2028", Tp = "\u2029";
function Sp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (x) => t[x] === wp && t[x + 1] === Bt, i = (x) => t[x] === Bt, l = (x) => t[x] === Tp, u = (x) => t[x] === kp, d = (x) => s(x) || i(x) || l(x) || u(x), m = () => n, h = () => r, y = () => o, g = () => a, v = (x) => s(x) || l(x) || u(x) ? Bt : t[x], A = () => v(n), f = () => v(n + a);
  function O() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function R() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function C() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function w(x = 0) {
    a = x;
  }
  function T() {
    const x = n + a;
    for (; x !== n; )
      O();
    a = 0;
  }
  return {
    index: m,
    line: h,
    column: y,
    peekOffset: g,
    charAt: v,
    currentChar: A,
    currentPeek: f,
    next: O,
    peek: R,
    reset: C,
    resetPeek: w,
    skipToPeek: T
  };
}
const qn = void 0, Ep = ".", fi = "'", Ap = "tokenizer";
function Cp(e, t = {}) {
  const n = t.location !== !1, r = Sp(e), o = () => r.index(), a = () => bp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function m(k, L, V, ...re) {
    const Le = u();
    if (L.column += V, L.offset += V, d) {
      const ue = n ? Is(Le.startLoc, L) : null, E = Ha(k, ue, {
        domain: Ap,
        args: re
      });
      d(E);
    }
  }
  function h(k, L, V) {
    k.endLoc = a(), k.currentType = L;
    const re = { type: L };
    return n && (re.loc = Is(k.startLoc, k.endLoc)), V != null && (re.value = V), re;
  }
  const y = (k) => h(
    k,
    13
    /* TokenTypes.EOF */
  );
  function g(k, L) {
    return k.currentChar() === L ? (k.next(), L) : (m(ze.EXPECTED_TOKEN, a(), 0, L), "");
  }
  function v(k) {
    let L = "";
    for (; k.currentPeek() === On || k.currentPeek() === Bt; )
      L += k.currentPeek(), k.peek();
    return L;
  }
  function A(k) {
    const L = v(k);
    return k.skipToPeek(), L;
  }
  function f(k) {
    if (k === qn)
      return !1;
    const L = k.charCodeAt(0);
    return L >= 97 && L <= 122 || // a-z
    L >= 65 && L <= 90 || // A-Z
    L === 95;
  }
  function O(k) {
    if (k === qn)
      return !1;
    const L = k.charCodeAt(0);
    return L >= 48 && L <= 57;
  }
  function R(k, L) {
    const { currentType: V } = L;
    if (V !== 2)
      return !1;
    v(k);
    const re = f(k.currentPeek());
    return k.resetPeek(), re;
  }
  function C(k, L) {
    const { currentType: V } = L;
    if (V !== 2)
      return !1;
    v(k);
    const re = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), Le = O(re);
    return k.resetPeek(), Le;
  }
  function w(k, L) {
    const { currentType: V } = L;
    if (V !== 2)
      return !1;
    v(k);
    const re = k.currentPeek() === fi;
    return k.resetPeek(), re;
  }
  function T(k, L) {
    const { currentType: V } = L;
    if (V !== 7)
      return !1;
    v(k);
    const re = k.currentPeek() === ".";
    return k.resetPeek(), re;
  }
  function x(k, L) {
    const { currentType: V } = L;
    if (V !== 8)
      return !1;
    v(k);
    const re = f(k.currentPeek());
    return k.resetPeek(), re;
  }
  function Y(k, L) {
    const { currentType: V } = L;
    if (!(V === 7 || V === 11))
      return !1;
    v(k);
    const re = k.currentPeek() === ":";
    return k.resetPeek(), re;
  }
  function Z(k, L) {
    const { currentType: V } = L;
    if (V !== 9)
      return !1;
    const re = () => {
      const ue = k.currentPeek();
      return ue === "{" ? f(k.peek()) : ue === "@" || ue === "|" || ue === ":" || ue === "." || ue === On || !ue ? !1 : ue === Bt ? (k.peek(), re()) : ge(k, !1);
    }, Le = re();
    return k.resetPeek(), Le;
  }
  function se(k) {
    v(k);
    const L = k.currentPeek() === "|";
    return k.resetPeek(), L;
  }
  function ge(k, L = !0) {
    const V = (Le = !1, ue = "") => {
      const E = k.currentPeek();
      return E === "{" || E === "@" || !E ? Le : E === "|" ? !(ue === On || ue === Bt) : E === On ? (k.peek(), V(!0, On)) : E === Bt ? (k.peek(), V(!0, Bt)) : !0;
    }, re = V();
    return L && k.resetPeek(), re;
  }
  function ae(k, L) {
    const V = k.currentChar();
    return V === qn ? qn : L(V) ? (k.next(), V) : null;
  }
  function ye(k) {
    const L = k.charCodeAt(0);
    return L >= 97 && L <= 122 || // a-z
    L >= 65 && L <= 90 || // A-Z
    L >= 48 && L <= 57 || // 0-9
    L === 95 || // _
    L === 36;
  }
  function _e(k) {
    return ae(k, ye);
  }
  function B(k) {
    const L = k.charCodeAt(0);
    return L >= 97 && L <= 122 || // a-z
    L >= 65 && L <= 90 || // A-Z
    L >= 48 && L <= 57 || // 0-9
    L === 95 || // _
    L === 36 || // $
    L === 45;
  }
  function J(k) {
    return ae(k, B);
  }
  function H(k) {
    const L = k.charCodeAt(0);
    return L >= 48 && L <= 57;
  }
  function me(k) {
    return ae(k, H);
  }
  function X(k) {
    const L = k.charCodeAt(0);
    return L >= 48 && L <= 57 || // 0-9
    L >= 65 && L <= 70 || // A-F
    L >= 97 && L <= 102;
  }
  function K(k) {
    return ae(k, X);
  }
  function Pe(k) {
    let L = "", V = "";
    for (; L = me(k); )
      V += L;
    return V;
  }
  function Ue(k) {
    let L = "";
    for (; ; ) {
      const V = k.currentChar();
      if (V === "{" || V === "}" || V === "@" || V === "|" || !V)
        break;
      if (V === On || V === Bt)
        if (ge(k))
          L += V, k.next();
        else {
          if (se(k))
            break;
          L += V, k.next();
        }
      else
        L += V, k.next();
    }
    return L;
  }
  function be(k) {
    A(k);
    let L = "", V = "";
    for (; L = J(k); )
      V += L;
    const re = k.currentChar();
    if (re && re !== "}" && re !== qn && re !== On && re !== Bt && re !== "　") {
      const Le = ut(k);
      return m(ze.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V + Le), V + Le;
    }
    return k.currentChar() === qn && m(ze.UNTERMINATED_CLOSING_BRACE, a(), 0), V;
  }
  function we(k) {
    A(k);
    let L = "";
    return k.currentChar() === "-" ? (k.next(), L += `-${Pe(k)}`) : L += Pe(k), k.currentChar() === qn && m(ze.UNTERMINATED_CLOSING_BRACE, a(), 0), L;
  }
  function te(k) {
    return k !== fi && k !== Bt;
  }
  function le(k) {
    A(k), g(k, "'");
    let L = "", V = "";
    for (; L = ae(k, te); )
      L === "\\" ? V += Ze(k) : V += L;
    const re = k.currentChar();
    return re === Bt || re === qn ? (m(ze.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), re === Bt && (k.next(), g(k, "'")), V) : (g(k, "'"), V);
  }
  function Ze(k) {
    const L = k.currentChar();
    switch (L) {
      case "\\":
      case "'":
        return k.next(), `\\${L}`;
      case "u":
        return ve(k, L, 4);
      case "U":
        return ve(k, L, 6);
      default:
        return m(ze.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, L), "";
    }
  }
  function ve(k, L, V) {
    g(k, L);
    let re = "";
    for (let Le = 0; Le < V; Le++) {
      const ue = K(k);
      if (!ue) {
        m(ze.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${L}${re}${k.currentChar()}`);
        break;
      }
      re += ue;
    }
    return `\\${L}${re}`;
  }
  function et(k) {
    return k !== "{" && k !== "}" && k !== On && k !== Bt;
  }
  function ut(k) {
    A(k);
    let L = "", V = "";
    for (; L = ae(k, et); )
      V += L;
    return V;
  }
  function qe(k) {
    let L = "", V = "";
    for (; L = _e(k); )
      V += L;
    return V;
  }
  function Mt(k) {
    const L = (V) => {
      const re = k.currentChar();
      return re === "{" || re === "@" || re === "|" || re === "(" || re === ")" || !re || re === On ? V : (V += re, k.next(), L(V));
    };
    return L("");
  }
  function ot(k) {
    A(k);
    const L = g(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return A(k), L;
  }
  function Ct(k, L) {
    let V = null;
    switch (k.currentChar()) {
      case "{":
        return L.braceNest >= 1 && m(ze.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), k.next(), V = h(
          L,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(k), L.braceNest++, V;
      case "}":
        return L.braceNest > 0 && L.currentType === 2 && m(ze.EMPTY_PLACEHOLDER, a(), 0), k.next(), V = h(
          L,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), L.braceNest--, L.braceNest > 0 && A(k), L.inLinked && L.braceNest === 0 && (L.inLinked = !1), V;
      case "@":
        return L.braceNest > 0 && m(ze.UNTERMINATED_CLOSING_BRACE, a(), 0), V = It(k, L) || y(L), L.braceNest = 0, V;
      default: {
        let Le = !0, ue = !0, E = !0;
        if (se(k))
          return L.braceNest > 0 && m(ze.UNTERMINATED_CLOSING_BRACE, a(), 0), V = h(L, 1, ot(k)), L.braceNest = 0, L.inLinked = !1, V;
        if (L.braceNest > 0 && (L.currentType === 4 || L.currentType === 5 || L.currentType === 6))
          return m(ze.UNTERMINATED_CLOSING_BRACE, a(), 0), L.braceNest = 0, Ge(k, L);
        if (Le = R(k, L))
          return V = h(L, 4, be(k)), A(k), V;
        if (ue = C(k, L))
          return V = h(L, 5, we(k)), A(k), V;
        if (E = w(k, L))
          return V = h(L, 6, le(k)), A(k), V;
        if (!Le && !ue && !E)
          return V = h(L, 12, ut(k)), m(ze.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V.value), A(k), V;
        break;
      }
    }
    return V;
  }
  function It(k, L) {
    const { currentType: V } = L;
    let re = null;
    const Le = k.currentChar();
    switch ((V === 7 || V === 8 || V === 11 || V === 9) && (Le === Bt || Le === On) && m(ze.INVALID_LINKED_FORMAT, a(), 0), Le) {
      case "@":
        return k.next(), re = h(
          L,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), L.inLinked = !0, re;
      case ".":
        return A(k), k.next(), h(
          L,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(k), k.next(), h(
          L,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return se(k) ? (re = h(L, 1, ot(k)), L.braceNest = 0, L.inLinked = !1, re) : T(k, L) || Y(k, L) ? (A(k), It(k, L)) : x(k, L) ? (A(k), h(L, 11, qe(k))) : Z(k, L) ? (A(k), Le === "{" ? Ct(k, L) || re : h(L, 10, Mt(k))) : (V === 7 && m(ze.INVALID_LINKED_FORMAT, a(), 0), L.braceNest = 0, L.inLinked = !1, Ge(k, L));
    }
  }
  function Ge(k, L) {
    let V = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (L.braceNest > 0)
      return Ct(k, L) || y(L);
    if (L.inLinked)
      return It(k, L) || y(L);
    switch (k.currentChar()) {
      case "{":
        return Ct(k, L) || y(L);
      case "}":
        return m(ze.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), h(
          L,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return It(k, L) || y(L);
      default: {
        if (se(k))
          return V = h(L, 1, ot(k)), L.braceNest = 0, L.inLinked = !1, V;
        if (ge(k))
          return h(L, 0, Ue(k));
        break;
      }
    }
    return V;
  }
  function St() {
    const { currentType: k, offset: L, startLoc: V, endLoc: re } = l;
    return l.lastType = k, l.lastOffset = L, l.lastStartLoc = V, l.lastEndLoc = re, l.offset = o(), l.startLoc = a(), r.currentChar() === qn ? h(
      l,
      13
      /* TokenTypes.EOF */
    ) : Ge(r, l);
  }
  return {
    nextToken: St,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Ip = "parser", Op = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Lp(e, t, n) {
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
function xp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, O, R, C, ...w) {
    const T = f.currentPosition();
    if (T.offset += C, T.column += C, n) {
      const x = t ? Is(R, T) : null, Y = Ha(O, x, {
        domain: Ip,
        args: w
      });
      n(Y);
    }
  }
  function o(f, O, R) {
    const C = { type: f };
    return t && (C.start = O, C.end = O, C.loc = { start: R, end: R }), C;
  }
  function a(f, O, R, C) {
    t && (f.end = O, f.loc && (f.loc.end = R));
  }
  function s(f, O) {
    const R = f.context(), C = o(3, R.offset, R.startLoc);
    return C.value = O, a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function i(f, O) {
    const R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(5, C, w);
    return T.index = parseInt(O, 10), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function l(f, O) {
    const R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(4, C, w);
    return T.key = O, f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function u(f, O) {
    const R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(9, C, w);
    return T.value = O.replace(Op, Lp), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function d(f) {
    const O = f.nextToken(), R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(8, C, w);
    return O.type !== 11 ? (r(f, ze.UNEXPECTED_EMPTY_LINKED_MODIFIER, R.lastStartLoc, 0), T.value = "", a(T, C, w), {
      nextConsumeToken: O,
      node: T
    }) : (O.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, Ln(O)), T.value = O.value || "", a(T, f.currentOffset(), f.currentPosition()), {
      node: T
    });
  }
  function m(f, O) {
    const R = f.context(), C = o(7, R.offset, R.startLoc);
    return C.value = O, a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function h(f) {
    const O = f.context(), R = o(6, O.offset, O.startLoc);
    let C = f.nextToken();
    if (C.type === 8) {
      const w = d(f);
      R.modifier = w.node, C = w.nextConsumeToken || f.nextToken();
    }
    switch (C.type !== 9 && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(C)), C = f.nextToken(), C.type === 2 && (C = f.nextToken()), C.type) {
      case 10:
        C.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(C)), R.key = m(f, C.value || "");
        break;
      case 4:
        C.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(C)), R.key = l(f, C.value || "");
        break;
      case 5:
        C.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(C)), R.key = i(f, C.value || "");
        break;
      case 6:
        C.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(C)), R.key = u(f, C.value || "");
        break;
      default: {
        r(f, ze.UNEXPECTED_EMPTY_LINKED_KEY, O.lastStartLoc, 0);
        const w = f.context(), T = o(7, w.offset, w.startLoc);
        return T.value = "", a(T, w.offset, w.startLoc), R.key = T, a(R, w.offset, w.startLoc), {
          nextConsumeToken: C,
          node: R
        };
      }
    }
    return a(R, f.currentOffset(), f.currentPosition()), {
      node: R
    };
  }
  function y(f) {
    const O = f.context(), R = O.currentType === 1 ? f.currentOffset() : O.offset, C = O.currentType === 1 ? O.endLoc : O.startLoc, w = o(2, R, C);
    w.items = [];
    let T = null;
    do {
      const Z = T || f.nextToken();
      switch (T = null, Z.type) {
        case 0:
          Z.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(Z)), w.items.push(s(f, Z.value || ""));
          break;
        case 5:
          Z.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(Z)), w.items.push(i(f, Z.value || ""));
          break;
        case 4:
          Z.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(Z)), w.items.push(l(f, Z.value || ""));
          break;
        case 6:
          Z.value == null && r(f, ze.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, Ln(Z)), w.items.push(u(f, Z.value || ""));
          break;
        case 7: {
          const se = h(f);
          w.items.push(se.node), T = se.nextConsumeToken || null;
          break;
        }
      }
    } while (O.currentType !== 13 && O.currentType !== 1);
    const x = O.currentType === 1 ? O.lastOffset : f.currentOffset(), Y = O.currentType === 1 ? O.lastEndLoc : f.currentPosition();
    return a(w, x, Y), w;
  }
  function g(f, O, R, C) {
    const w = f.context();
    let T = C.items.length === 0;
    const x = o(1, O, R);
    x.cases = [], x.cases.push(C);
    do {
      const Y = y(f);
      T || (T = Y.items.length === 0), x.cases.push(Y);
    } while (w.currentType !== 13);
    return T && r(f, ze.MUST_HAVE_MESSAGES_IN_PLURAL, R, 0), a(x, f.currentOffset(), f.currentPosition()), x;
  }
  function v(f) {
    const O = f.context(), { offset: R, startLoc: C } = O, w = y(f);
    return O.currentType === 13 ? w : g(f, R, C, w);
  }
  function A(f) {
    const O = Cp(f, Pt({}, e)), R = O.context(), C = o(0, R.offset, R.startLoc);
    return t && C.loc && (C.loc.source = f), C.body = v(O), e.onCacheKey && (C.cacheKey = e.onCacheKey(f)), R.currentType !== 13 && r(O, ze.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, f[R.offset] || ""), a(C, O.currentOffset(), O.currentPosition()), C;
  }
  return { parse: A };
}
function Ln(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Rp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function pi(e, t) {
  for (let n = 0; n < e.length; n++)
    rl(e[n], t);
}
function rl(e, t) {
  switch (e.type) {
    case 1:
      pi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      pi(e.items, t);
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
function Np(e, t = {}) {
  const n = Rp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && rl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Pp(e) {
  const t = e.body;
  return t.type === 2 ? mi(t) : t.cases.forEach((n) => mi(n)), e;
}
function mi(e) {
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
function oo(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      oo(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        oo(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        oo(n[r]);
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
      oo(t.key), t.k = t.key, delete t.key, t.modifier && (oo(t.modifier), t.m = t.modifier, delete t.modifier);
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
function $p(e, t) {
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
  function l(v, A) {
    s.code += v;
  }
  function u(v, A = !0) {
    const f = A ? r : "";
    l(o ? f + "  ".repeat(v) : f);
  }
  function d(v = !0) {
    const A = ++s.indentLevel;
    v && u(A);
  }
  function m(v = !0) {
    const A = --s.indentLevel;
    v && u(A);
  }
  function h() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: d,
    deindent: m,
    newline: h,
    helper: (v) => `_${v}`,
    needIndent: () => s.needIndent
  };
}
function Mp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), co(e, t.key), t.modifier ? (e.push(", "), co(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Dp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (co(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Fp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (co(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function zp(e, t) {
  t.body ? co(e, t.body) : e.push("null");
}
function co(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      zp(e, t);
      break;
    case 1:
      Fp(e, t);
      break;
    case 2:
      Dp(e, t);
      break;
    case 6:
      Mp(e, t);
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
const Bp = (e, t = {}) => {
  const n = fe(t.mode) ? t.mode : "normal", r = fe(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = $p(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${nl(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), co(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Vp(e, t = {}) {
  const n = Pt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = xp(n).parse(e);
  return r ? (a && Pp(i), o && oo(i), { ast: i, code: "" }) : (Np(i, n), Bp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function jp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (wa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dn(e) {
  return De(e) && ol(e) === 0 && (bn(e, "b") || bn(e, "body"));
}
const ku = ["b", "body"];
function Up(e) {
  return Ar(e, ku);
}
const Tu = ["c", "cases"];
function Hp(e) {
  return Ar(e, Tu, []);
}
const Su = ["s", "static"];
function Wp(e) {
  return Ar(e, Su);
}
const Eu = ["i", "items"];
function Gp(e) {
  return Ar(e, Eu, []);
}
const Au = ["t", "type"];
function ol(e) {
  return Ar(e, Au);
}
const Cu = ["v", "value"];
function ua(e, t) {
  const n = Ar(e, Cu);
  if (n != null)
    return n;
  throw Ho(t);
}
const Iu = ["m", "modifier"];
function Kp(e) {
  return Ar(e, Iu);
}
const Ou = ["k", "key"];
function qp(e) {
  const t = Ar(e, Ou);
  if (t)
    return t;
  throw Ho(
    6
    /* NodeTypes.Linked */
  );
}
function Ar(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (bn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Lu = [
  ...ku,
  ...Tu,
  ...Su,
  ...Eu,
  ...Ou,
  ...Iu,
  ...Cu,
  ...Au
];
function Ho(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ds(e) {
  return (n) => Yp(n, e);
}
function Yp(e, t) {
  const n = Up(t);
  if (n == null)
    throw Ho(
      0
      /* NodeTypes.Resource */
    );
  if (ol(n) === 1) {
    const a = Hp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      hi(e, i)
    ], []));
  } else
    return hi(e, n);
}
function hi(e, t) {
  const n = Wp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Gp(t).reduce((o, a) => [...o, Os(e, a)], []);
    return e.normalize(r);
  }
}
function Os(e, t) {
  const n = ol(t);
  switch (n) {
    case 3:
      return ua(t, n);
    case 9:
      return ua(t, n);
    case 4: {
      const r = t;
      if (bn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (bn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ho(n);
    }
    case 5: {
      const r = t;
      if (bn(r, "i") && Lt(r.i))
        return e.interpolate(e.list(r.i));
      if (bn(r, "index") && Lt(r.index))
        return e.interpolate(e.list(r.index));
      throw Ho(n);
    }
    case 6: {
      const r = t, o = Kp(r), a = qp(r);
      return e.linked(Os(e, a), o ? Os(e, o) : void 0, e.type);
    }
    case 7:
      return ua(t, n);
    case 8:
      return ua(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Zp = (e) => e;
let da = We();
function Xp(e, t = {}) {
  let n = !1;
  const r = t.onError || _p;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Vp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Qp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && fe(e)) {
    ht(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Zp)(e), o = da[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = Xp(e, {
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
const er = {
  INVALID_ARGUMENT: yp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Jp = 24;
function tr(e) {
  return Ha(e, null, void 0);
}
function al(e, t) {
  return t.locale != null ? gi(t.locale) : gi(e.locale);
}
let fs;
function gi(e) {
  if (fe(e))
    return e;
  if (st(e)) {
    if (e.resolvedOnce && fs != null)
      return fs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (gp(t))
        throw tr(er.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return fs = t;
    } else
      throw tr(er.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw tr(er.NOT_SUPPORT_LOCALE_TYPE);
}
function em(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...gt(t) ? t : De(t) ? Object.keys(t) : fe(t) ? [t] : [n]
  ])];
}
function xu(e, t, n) {
  const r = fe(n) ? n : Oa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; gt(s); )
      s = vi(a, s, t);
    const i = gt(t) || !Me(t) ? t : t.default ? t.default : null;
    s = fe(i) ? [i] : i, gt(s) && vi(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function vi(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ht(r); o++) {
    const a = t[o];
    fe(a) && (r = tm(e, t[o], n));
  }
  return r;
}
function tm(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = nm(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function nm(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (gt(n) || Me(n)) && n[o] && (r = n[o]);
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
const rm = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function om(e) {
  return rm.test(e);
}
function am(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function sm(e) {
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
function lm(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : om(t) ? am(t) : "*" + t;
}
function im(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, d, m;
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
      if (o = 0, s === void 0 || (s = lm(s), s === !1))
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
      if (l = sm(a), m = Cr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = h[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const bi = /* @__PURE__ */ new Map();
function cm(e, t) {
  return De(e) ? e[t] : null;
}
function um(e, t) {
  if (!De(e))
    return null;
  let n = bi.get(t);
  if (n || (n = im(t), n && bi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Lu.includes(s) && Dn(o))
      return null;
    const i = o[s];
    if (i === void 0 || st(o))
      return null;
    o = i, a++;
  }
  return o;
}
const dm = "11.2.2", Wa = -1, Oa = "en-US", yi = "", _i = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function fm() {
  return {
    upper: (e, t) => t === "text" && fe(e) ? e.toUpperCase() : t === "vnode" && De(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && fe(e) ? e.toLowerCase() : t === "vnode" && De(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && fe(e) ? _i(e) : t === "vnode" && De(e) && "__v_isVNode" in e ? _i(e.children) : e
  };
}
let Ru;
function pm(e) {
  Ru = e;
}
let Nu;
function mm(e) {
  Nu = e;
}
let Pu;
function hm(e) {
  Pu = e;
}
let $u = null;
const wi = (e) => {
  $u = e;
}, gm = () => $u;
let ki = 0;
function vm(e = {}) {
  const t = st(e.onWarn) ? e.onWarn : cp, n = fe(e.version) ? e.version : dm, r = fe(e.locale) || st(e.locale) ? e.locale : Oa, o = st(r) ? Oa : r, a = gt(e.fallbackLocale) || Me(e.fallbackLocale) || fe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Me(e.messages) ? e.messages : ps(o), i = Me(e.datetimeFormats) ? e.datetimeFormats : ps(o), l = Me(e.numberFormats) ? e.numberFormats : ps(o), u = Pt(We(), e.modifiers, fm()), d = e.pluralRules || We(), m = st(e.missing) ? e.missing : null, h = ht(e.missingWarn) || Ia(e.missingWarn) ? e.missingWarn : !0, y = ht(e.fallbackWarn) || Ia(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, v = !!e.unresolving, A = st(e.postTranslation) ? e.postTranslation : null, f = Me(e.processor) ? e.processor : null, O = ht(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter, C = st(e.messageCompiler) ? e.messageCompiler : Ru, w = st(e.messageResolver) ? e.messageResolver : Nu || cm, T = st(e.localeFallbacker) ? e.localeFallbacker : Pu || em, x = De(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, Z = De(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), se = De(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), ge = De(Y.__meta) ? Y.__meta : {};
  ki++;
  const ae = {
    version: n,
    cid: ki,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: d,
    missing: m,
    missingWarn: h,
    fallbackWarn: y,
    fallbackFormat: g,
    unresolving: v,
    postTranslation: A,
    processor: f,
    warnHtmlMessage: O,
    escapeParameter: R,
    messageCompiler: C,
    messageResolver: w,
    localeFallbacker: T,
    fallbackContext: x,
    onWarn: t,
    __meta: ge
  };
  return ae.datetimeFormats = i, ae.numberFormats = l, ae.__datetimeFormatters = Z, ae.__numberFormatters = se, ae;
}
const ps = (e) => ({ [e]: We() });
function sl(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return fe(i) ? i : t;
  } else
    return t;
}
function Co(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function bm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ym(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (bm(e, t[r]))
      return !0;
  return !1;
}
function Ti(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, m] = Ls(...t), h = ht(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ht(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = al(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!fe(l) || l === "")
    return new Intl.DateTimeFormat(g, m).format(u);
  let A = {}, f, O = null;
  const R = "datetime format";
  for (let T = 0; T < v.length && (f = v[T], A = n[f] || {}, O = A[l], !Me(O)); T++)
    sl(e, l, f, h, R);
  if (!Me(O) || !fe(f))
    return r ? Wa : l;
  let C = `${f}__${l}`;
  Ua(m) || (C = `${C}__${JSON.stringify(m)}`);
  let w = i.get(C);
  return w || (w = new Intl.DateTimeFormat(f, Pt({}, O, m)), i.set(C, w)), y ? w.formatToParts(u) : w.format(u);
}
const Mu = [
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
function Ls(...e) {
  const [t, n, r, o] = e, a = We();
  let s = We(), i;
  if (fe(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw tr(er.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw tr(er.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (fp(t)) {
    if (isNaN(t.getTime()))
      throw tr(er.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Lt(t))
    i = t;
  else
    throw tr(er.INVALID_ARGUMENT);
  return fe(n) ? a.key = n : Me(n) && Object.keys(n).forEach((l) => {
    Mu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), fe(r) ? a.locale = r : Me(r) && (s = r), Me(o) && (s = o), [a.key || "", i, a, s];
}
function Si(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Ei(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, m] = xs(...t), h = ht(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ht(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = al(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!fe(l) || l === "")
    return new Intl.NumberFormat(g, m).format(u);
  let A = {}, f, O = null;
  const R = "number format";
  for (let T = 0; T < v.length && (f = v[T], A = n[f] || {}, O = A[l], !Me(O)); T++)
    sl(e, l, f, h, R);
  if (!Me(O) || !fe(f))
    return r ? Wa : l;
  let C = `${f}__${l}`;
  Ua(m) || (C = `${C}__${JSON.stringify(m)}`);
  let w = i.get(C);
  return w || (w = new Intl.NumberFormat(f, Pt({}, O, m)), i.set(C, w)), y ? w.formatToParts(u) : w.format(u);
}
const Du = [
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
  const [t, n, r, o] = e, a = We();
  let s = We();
  if (!Lt(t))
    throw tr(er.INVALID_ARGUMENT);
  const i = t;
  return fe(n) ? a.key = n : Me(n) && Object.keys(n).forEach((l) => {
    Du.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), fe(r) ? a.locale = r : Me(r) && (s = r), Me(o) && (s = o), [a.key || "", i, a, s];
}
function Ai(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const _m = (e) => e, wm = (e) => "", km = "text", Tm = (e) => e.length === 0 ? "" : nl(e), Sm = vp;
function Ci(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Em(e) {
  const t = Lt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Lt(e.named.count) || Lt(e.named.n)) ? Lt(e.named.count) ? e.named.count : Lt(e.named.n) ? e.named.n : t : t;
}
function Am(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Cm(e = {}) {
  const t = e.locale, n = Em(e), r = De(e.pluralRules) && fe(t) && st(e.pluralRules[t]) ? e.pluralRules[t] : Ci, o = De(e.pluralRules) && fe(t) && st(e.pluralRules[t]) ? Ci : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || We();
  Lt(e.pluralIndex) && Am(n, l);
  const u = (f) => l[f];
  function d(f, O) {
    const R = st(e.messages) ? e.messages(f, !!O) : De(e.messages) ? e.messages[f] : !1;
    return R || (e.parent ? e.parent.message(f) : wm);
  }
  const m = (f) => e.modifiers ? e.modifiers[f] : _m, h = Me(e.processor) && st(e.processor.normalize) ? e.processor.normalize : Tm, y = Me(e.processor) && st(e.processor.interpolate) ? e.processor.interpolate : Sm, g = Me(e.processor) && fe(e.processor.type) ? e.processor.type : km, A = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...O) => {
      const [R, C] = O;
      let w = "text", T = "";
      O.length === 1 ? De(R) ? (T = R.modifier || T, w = R.type || w) : fe(R) && (T = R || T) : O.length === 2 && (fe(R) && (T = R || T), fe(C) && (w = C || w));
      const x = d(f, !0)(A), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && gt(x) && T ? x[0] : x
      );
      return T ? m(T)(Y, w) : Y;
    },
    message: d,
    type: g,
    interpolate: y,
    normalize: h,
    values: Pt(We(), s, l)
  };
  return A;
}
const Ii = () => "", rr = (e) => st(e);
function Oi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Rs(...t), d = ht(u.missingWarn) ? u.missingWarn : e.missingWarn, m = ht(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = ht(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, g = fe(u.default) || ht(u.default) ? ht(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, v = n || g != null && (fe(g) || st(g)), A = al(e, u);
  h && Im(u);
  let [f, O, R] = y ? [
    l,
    A,
    i[A] || We()
  ] : Fu(e, l, A, s, m, d), C = f, w = l;
  if (!y && !(fe(C) || Dn(C) || rr(C)) && v && (C = g, w = C), !y && (!(fe(C) || Dn(C) || rr(C)) || !fe(O)))
    return o ? Wa : l;
  let T = !1;
  const x = () => {
    T = !0;
  }, Y = rr(C) ? C : zu(e, l, O, C, w, x);
  if (T)
    return C;
  const Z = xm(e, O, R, u), se = Cm(Z), ge = Om(e, Y, se);
  let ae = r ? r(ge, l) : ge;
  return h && fe(ae) && (ae = mp(ae)), ae;
}
function Im(e) {
  gt(e.list) ? e.list = e.list.map((t) => fe(t) ? ui(t) : t) : De(e.named) && Object.keys(e.named).forEach((t) => {
    fe(e.named[t]) && (e.named[t] = ui(e.named[t]));
  });
}
function Fu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let m = We(), h, y = null;
  const g = "translate";
  for (let v = 0; v < d.length && (h = d[v], m = s[h] || We(), (y = l(m, t)) === null && (y = m[t]), !(fe(y) || Dn(y) || rr(y))); v++)
    if (!ym(h, d)) {
      const A = sl(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        a,
        g
      );
      A !== t && (y = A);
    }
  return [y, h, m];
}
function zu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (rr(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Lm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Om(e, t, n) {
  return t(n);
}
function Rs(...e) {
  const [t, n, r] = e, o = We();
  if (!fe(t) && !Lt(t) && !rr(t) && !Dn(t))
    throw tr(er.INVALID_ARGUMENT);
  const a = Lt(t) ? String(t) : (rr(t), t);
  return Lt(n) ? o.plural = n : fe(n) ? o.default = n : Me(n) && !Ua(n) ? o.named = n : gt(n) && (o.list = n), Lt(r) ? o.plural = r : fe(r) ? o.default = r : Me(r) && Pt(o, r), [a, o];
}
function Lm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => up(t, n, s)
  };
}
function xm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, g) => {
      let v = s(n, y);
      if (v == null && (d || g)) {
        const [, , A] = Fu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          l,
          u
        );
        v = s(A, y);
      }
      if (fe(v) || Dn(v)) {
        let A = !1;
        const O = zu(e, y, t, v, y, () => {
          A = !0;
        });
        return A ? Ii : O;
      } else return rr(v) ? v : Ii;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Lt(r.plural) && (h.pluralIndex = r.plural), h;
}
jp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Rm = "11.2.2";
function Nm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (wa().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (wa().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (wa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const uo = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Jp,
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
const Ns = /* @__PURE__ */ jr("__translateVNode"), Ps = /* @__PURE__ */ jr("__datetimeParts"), $s = /* @__PURE__ */ jr("__numberParts"), Pm = jr("__setPluralRules"), Bu = /* @__PURE__ */ jr("__injectWithOption"), Ms = /* @__PURE__ */ jr("__dispose");
function Go(e) {
  if (!De(e) || Dn(e))
    return e;
  for (const t in e)
    if (bn(e, t))
      if (!t.includes("."))
        De(e[t]) && Go(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = We()), !De(o[n[s]])) {
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
function Vu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Me(n) ? n : gt(r) ? We() : { [e]: We() };
  if (gt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || We(), ka(u, s[l])) : ka(u, s);
    } else
      fe(i) && ka(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      bn(s, i) && Go(s[i]);
  return s;
}
function $m(e) {
  return e.type;
}
function Mm(e, t, n) {
  let r = De(t.messages) ? t.messages : We();
  "__i18nGlobal" in n && (r = Vu(e.locale.value, {
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
  return M(vu, null, e, 0);
}
function ju() {
  return "currentInstance" in cs ? cs["currentInstance"] : cs.getCurrentInstance();
}
const xi = () => [], Dm = () => !1;
let Ri = 0;
function Ni(e) {
  return (t, n, r, o) => e(n, r, ju() || void 0, o);
}
function Fm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = ii ? G : Tr;
  let s = ht(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : fe(e.locale) ? e.locale : Oa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : fe(e.fallbackLocale) || gt(e.fallbackLocale) || Me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Vu(i.value, e)), d = a(Me(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Me(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let h = t ? t.missingWarn : ht(e.missingWarn) || Ia(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : ht(e.fallbackWarn) || Ia(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : ht(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, A = st(e.missing) ? e.missing : null, f = st(e.missing) ? Ni(e.missing) : null, O = st(e.postTranslation) ? e.postTranslation : null, R = t ? t.warnHtmlMessage : ht(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const w = t ? t.modifiers : Me(e.modifiers) ? e.modifiers : {};
  let T = e.pluralRules || t && t.pluralRules, x;
  x = (() => {
    r && wi(null);
    const E = {
      version: Rm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: w,
      pluralRules: T,
      missing: f === null ? void 0 : f,
      missingWarn: h,
      fallbackWarn: y,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: O === null ? void 0 : O,
      warnHtmlMessage: R,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    E.datetimeFormats = d.value, E.numberFormats = m.value, E.__datetimeFormatters = Me(x) ? x.__datetimeFormatters : void 0, E.__numberFormatters = Me(x) ? x.__numberFormatters : void 0;
    const z = vm(E);
    return r && wi(z), z;
  })(), Co(x, i.value, l.value);
  function Z() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      m.value
    ];
  }
  const se = P({
    get: () => i.value,
    set: (E) => {
      x.locale = E, i.value = E;
    }
  }), ge = P({
    get: () => l.value,
    set: (E) => {
      x.fallbackLocale = E, l.value = E, Co(x, i.value, E);
    }
  }), ae = P(() => u.value), ye = /* @__PURE__ */ P(() => d.value), _e = /* @__PURE__ */ P(() => m.value);
  function B() {
    return st(O) ? O : null;
  }
  function J(E) {
    O = E, x.postTranslation = E;
  }
  function H() {
    return A;
  }
  function me(E) {
    E !== null && (f = Ni(E)), A = E, x.missing = f;
  }
  const X = (E, z, ke, Re, Xe, dt) => {
    Z();
    let Ye;
    try {
      r || (x.fallbackContext = t ? gm() : void 0), Ye = E(x);
    } finally {
      r || (x.fallbackContext = void 0);
    }
    if (ke !== "translate exists" && // for not `te` (e.g `t`)
    Lt(Ye) && Ye === Wa || ke === "translate exists" && !Ye) {
      const [Wn, fr] = z();
      return t && g ? Re(t) : Xe(Wn);
    } else {
      if (dt(Ye))
        return Ye;
      throw Wo(uo.UNEXPECTED_RETURN_TYPE);
    }
  };
  function K(...E) {
    return X((z) => Reflect.apply(Oi, null, [z, ...E]), () => Rs(...E), "translate", (z) => Reflect.apply(z.t, z, [...E]), (z) => z, (z) => fe(z));
  }
  function Pe(...E) {
    const [z, ke, Re] = E;
    if (Re && !De(Re))
      throw Wo(uo.INVALID_ARGUMENT);
    return K(z, ke, Pt({ resolvedMessage: !0 }, Re || {}));
  }
  function Ue(...E) {
    return X((z) => Reflect.apply(Ti, null, [z, ...E]), () => Ls(...E), "datetime format", (z) => Reflect.apply(z.d, z, [...E]), () => yi, (z) => fe(z) || gt(z));
  }
  function be(...E) {
    return X((z) => Reflect.apply(Ei, null, [z, ...E]), () => xs(...E), "number format", (z) => Reflect.apply(z.n, z, [...E]), () => yi, (z) => fe(z) || gt(z));
  }
  function we(E) {
    return E.map((z) => fe(z) || Lt(z) || ht(z) ? Li(String(z)) : z);
  }
  const le = {
    normalize: we,
    interpolate: (E) => E,
    type: "vnode"
  };
  function Ze(...E) {
    return X((z) => {
      let ke;
      const Re = z;
      try {
        Re.processor = le, ke = Reflect.apply(Oi, null, [Re, ...E]);
      } finally {
        Re.processor = null;
      }
      return ke;
    }, () => Rs(...E), "translate", (z) => z[Ns](...E), (z) => [Li(z)], (z) => gt(z));
  }
  function ve(...E) {
    return X((z) => Reflect.apply(Ei, null, [z, ...E]), () => xs(...E), "number format", (z) => z[$s](...E), xi, (z) => fe(z) || gt(z));
  }
  function et(...E) {
    return X((z) => Reflect.apply(Ti, null, [z, ...E]), () => Ls(...E), "datetime format", (z) => z[Ps](...E), xi, (z) => fe(z) || gt(z));
  }
  function ut(E) {
    T = E, x.pluralRules = T;
  }
  function qe(E, z) {
    return X(() => {
      if (!E)
        return !1;
      const ke = fe(z) ? z : i.value, Re = Ct(ke), Xe = x.messageResolver(Re, E);
      return Dn(Xe) || rr(Xe) || fe(Xe);
    }, () => [E], "translate exists", (ke) => Reflect.apply(ke.te, ke, [E, z]), Dm, (ke) => ht(ke));
  }
  function Mt(E) {
    let z = null;
    const ke = xu(x, l.value, i.value);
    for (let Re = 0; Re < ke.length; Re++) {
      const Xe = u.value[ke[Re]] || {}, dt = x.messageResolver(Xe, E);
      if (dt != null) {
        z = dt;
        break;
      }
    }
    return z;
  }
  function ot(E) {
    const z = Mt(E);
    return z ?? (t ? t.tm(E) || {} : {});
  }
  function Ct(E) {
    return u.value[E] || {};
  }
  function It(E, z) {
    if (o) {
      const ke = { [E]: z };
      for (const Re in ke)
        bn(ke, Re) && Go(ke[Re]);
      z = ke[E];
    }
    u.value[E] = z, x.messages = u.value;
  }
  function Ge(E, z) {
    u.value[E] = u.value[E] || {};
    const ke = { [E]: z };
    if (o)
      for (const Re in ke)
        bn(ke, Re) && Go(ke[Re]);
    z = ke[E], ka(z, u.value[E]), x.messages = u.value;
  }
  function St(E) {
    return d.value[E] || {};
  }
  function k(E, z) {
    d.value[E] = z, x.datetimeFormats = d.value, Si(x, E, z);
  }
  function L(E, z) {
    d.value[E] = Pt(d.value[E] || {}, z), x.datetimeFormats = d.value, Si(x, E, z);
  }
  function V(E) {
    return m.value[E] || {};
  }
  function re(E, z) {
    m.value[E] = z, x.numberFormats = m.value, Ai(x, E, z);
  }
  function Le(E, z) {
    m.value[E] = Pt(m.value[E] || {}, z), x.numberFormats = m.value, Ai(x, E, z);
  }
  Ri++, t && ii && (Ce(t.locale, (E) => {
    s && (i.value = E, x.locale = E, Co(x, i.value, l.value));
  }), Ce(t.fallbackLocale, (E) => {
    s && (l.value = E, x.fallbackLocale = E, Co(x, i.value, l.value));
  }));
  const ue = {
    id: Ri,
    locale: se,
    fallbackLocale: ge,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(E) {
      s = E, E && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Co(x, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ae,
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
      return h;
    },
    set missingWarn(E) {
      h = E, x.missingWarn = h;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(E) {
      y = E, x.fallbackWarn = y;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(E) {
      g = E;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(E) {
      v = E, x.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return R;
    },
    set warnHtmlMessage(E) {
      R = E, x.warnHtmlMessage = E;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(E) {
      C = E, x.escapeParameter = E;
    },
    t: K,
    getLocaleMessage: Ct,
    setLocaleMessage: It,
    mergeLocaleMessage: Ge,
    getPostTranslationHandler: B,
    setPostTranslationHandler: J,
    getMissingHandler: H,
    setMissingHandler: me,
    [Pm]: ut
  };
  return ue.datetimeFormats = ye, ue.numberFormats = _e, ue.rt = Pe, ue.te = qe, ue.tm = ot, ue.d = Ue, ue.n = be, ue.getDateTimeFormat = St, ue.setDateTimeFormat = k, ue.mergeDateTimeFormat = L, ue.getNumberFormat = V, ue.setNumberFormat = re, ue.mergeNumberFormat = Le, ue[Bu] = n, ue[Ns] = Ze, ue[Ps] = et, ue[$s] = ve, ue;
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
function zm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === pt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, We());
}
function Uu() {
  return pt;
}
Pt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Lt(e) || !isNaN(e)
  }
}, ll);
function Bm(e) {
  return gt(e) && !fe(e[0]);
}
function Hu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = We();
    e.locale && (s.locale = e.locale), fe(e.format) ? s.key = e.format : De(e.format) && (fe(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((h, y) => n.includes(y) ? Pt(We(), h, { [y]: e.format[y] }) : h, We()));
    const l = r(e.value, s, i);
    let u = [s.key];
    gt(l) ? u = l.map((h, y) => {
      const g = o[h.type], v = g ? g({ [h.type]: h.value, index: y, parts: l }) : [h.value];
      return Bm(v) && (v[0].key = `${h.type}-${y}`), v;
    }) : fe(l) && (u = [l]);
    const d = Pt(We(), a), m = fe(e.tag) || De(e.tag) ? e.tag : Uu();
    return gu(m, d, u);
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
}, ll);
const Vm = /* @__PURE__ */ jr("global-vue-i18n");
function Qo(e = {}) {
  const t = ju();
  if (t == null)
    throw Wo(uo.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wo(uo.NOT_INSTALLED);
  const n = jm(t), r = Hm(n), o = $m(t), a = Um(e, o);
  if (a === "global")
    return Mm(r, e, o), r;
  if (a === "parent") {
    let l = Wm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Pt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Fm(l), s.__composerExtend && (i[Ms] = s.__composerExtend(i)), Km(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function jm(e) {
  const t = je(e.isCE ? Vm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Wo(e.isCE ? uo.NOT_INSTALLED_WITH_PROVIDE : uo.UNEXPECTED_ERROR);
  return t;
}
function Um(e, t) {
  return Ua(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Hm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Wm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Gm(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Bu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function Gm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Km(e, t, n) {
  vt(() => {
  }, t), ja(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Ms];
    o && (o(), delete r[Ms]);
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
}, ll);
Nm();
pm(Qp);
mm(um);
hm(xu);
function il() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Ur = il();
function Wu(e) {
  Ur = e;
}
var Do = { exec: () => null };
function $e(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Gt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var qm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Gt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Ym = /^(?:[ \t]*(?:\n|$))+/, Zm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Xm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Jo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Qm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, cl = /(?:[*+-]|\d{1,9}[.)])/, Gu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Ku = $e(Gu).replace(/bull/g, cl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Jm = $e(Gu).replace(/bull/g, cl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ul = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, eh = /^[^\n]+/, dl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, th = $e(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", dl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), nh = $e(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, cl).getRegex(), Ga = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", fl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, rh = $e("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", fl).replace("tag", Ga).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), qu = $e(ul).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex(), oh = $e(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", qu).getRegex(), pl = { blockquote: oh, code: Zm, def: th, fences: Xm, heading: Qm, hr: Jo, html: rh, lheading: Ku, list: nh, newline: Ym, paragraph: qu, table: Do, text: eh }, Pi = $e("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex(), ah = { ...pl, lheading: Jm, table: Pi, paragraph: $e(ul).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex() }, sh = { ...pl, html: $e(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", fl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Do, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: $e(ul).replace("hr", Jo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ku).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, lh = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ih = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Yu = /^( {2,}|\\)\n(?!\s*$)/, ch = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ka = /[\p{P}\p{S}]/u, ml = /[\s\p{P}\p{S}]/u, Zu = /[^\s\p{P}\p{S}]/u, uh = $e(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ml).getRegex(), Xu = /(?!~)[\p{P}\p{S}]/u, dh = /(?!~)[\s\p{P}\p{S}]/u, fh = /(?:[^\s\p{P}\p{S}]|~)/u, ph = $e(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", qm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Qu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, mh = $e(Qu, "u").replace(/punct/g, Ka).getRegex(), hh = $e(Qu, "u").replace(/punct/g, Xu).getRegex(), Ju = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", gh = $e(Ju, "gu").replace(/notPunctSpace/g, Zu).replace(/punctSpace/g, ml).replace(/punct/g, Ka).getRegex(), vh = $e(Ju, "gu").replace(/notPunctSpace/g, fh).replace(/punctSpace/g, dh).replace(/punct/g, Xu).getRegex(), bh = $e("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Zu).replace(/punctSpace/g, ml).replace(/punct/g, Ka).getRegex(), yh = $e(/\\(punct)/, "gu").replace(/punct/g, Ka).getRegex(), _h = $e(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), wh = $e(fl).replace("(?:-->|$)", "-->").getRegex(), kh = $e("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", wh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), La = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Th = $e(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", La).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ed = $e(/^!?\[(label)\]\[(ref)\]/).replace("label", La).replace("ref", dl).getRegex(), td = $e(/^!?\[(ref)\](?:\[\])?/).replace("ref", dl).getRegex(), Sh = $e("reflink|nolink(?!\\()", "g").replace("reflink", ed).replace("nolink", td).getRegex(), $i = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, hl = { _backpedal: Do, anyPunctuation: yh, autolink: _h, blockSkip: ph, br: Yu, code: ih, del: Do, emStrongLDelim: mh, emStrongRDelimAst: gh, emStrongRDelimUnd: bh, escape: lh, link: Th, nolink: td, punctuation: uh, reflink: ed, reflinkSearch: Sh, tag: kh, text: ch, url: Do }, Eh = { ...hl, link: $e(/^!?\[(label)\]\((.*?)\)/).replace("label", La).getRegex(), reflink: $e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", La).getRegex() }, Ds = { ...hl, emStrongRDelimAst: vh, emStrongLDelim: hh, url: $e(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", $i).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: $e(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", $i).getRegex() }, Ah = { ...Ds, br: $e(Yu).replace("{2,}", "*").getRegex(), text: $e(Ds.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, fa = { normal: pl, gfm: ah, pedantic: sh }, Io = { normal: hl, gfm: Ds, breaks: Ah, pedantic: Eh }, Ch = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Mi = (e) => Ch[e];
function Yn(e, t) {
  if (t) {
    if (Gt.escapeTest.test(e)) return e.replace(Gt.escapeReplace, Mi);
  } else if (Gt.escapeTestNoEncode.test(e)) return e.replace(Gt.escapeReplaceNoEncode, Mi);
  return e;
}
function Di(e) {
  try {
    e = encodeURI(e).replace(Gt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Fi(e, t) {
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
function Oo(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Ih(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function zi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function Oh(e, t, n) {
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
    He(this, "options");
    He(this, "rules");
    He(this, "lexer");
    this.options = e || Ur;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Oo(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Oh(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = Oo(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Oo(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = Oo(t[0], `
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
        let h = a.at(-1);
        if (h?.type === "code") break;
        if (h?.type === "blockquote") {
          let y = h, g = y.raw + `
` + n.join(`
`), v = this.blockquote(g);
          a[a.length - 1] = v, r = r.substring(0, r.length - y.raw.length) + v.raw, o = o.substring(0, o.length - y.text.length) + v.text;
          break;
        } else if (h?.type === "list") {
          let y = h, g = y.raw + `
` + n.join(`
`), v = this.list(g);
          a[a.length - 1] = v, r = r.substring(0, r.length - h.raw.length) + v.raw, o = o.substring(0, o.length - y.raw.length) + v.raw, n = g.substring(a.at(-1).raw.length).split(`
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
`, 1)[0].replace(this.rules.other.listReplaceTabs, (v) => " ".repeat(3 * v.length)), h = e.split(`
`, 1)[0], y = !m.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, d = m.trimStart()) : y ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, d = m.slice(g), g += t[1].length), y && this.rules.other.blankLine.test(h) && (u += h + `
`, e = e.substring(h.length + 1), l = !0), !l) {
          let v = this.rules.other.nextBulletRegex(g), A = this.rules.other.hrRegex(g), f = this.rules.other.fencesBeginRegex(g), O = this.rules.other.headingBeginRegex(g), R = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let C = e.split(`
`, 1)[0], w;
            if (h = C, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), w = h) : w = h.replace(this.rules.other.tabCharGlobal, "    "), f.test(h) || O.test(h) || R.test(h) || v.test(h) || A.test(h)) break;
            if (w.search(this.rules.other.nonSpaceChar) >= g || !h.trim()) d += `
` + w.slice(g);
            else {
              if (y || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(m) || O.test(m) || A.test(m)) break;
              d += `
` + h;
            }
            !y && !h.trim() && (y = !0), u += C + `
`, e = e.substring(C.length + 1), m = w.slice(g);
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
    let n = Fi(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(Fi(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = Oo(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Ih(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), zi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return zi(n, o, n[0], this.lexer, this.rules);
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
}, hn = class Fs {
  constructor(t) {
    He(this, "tokens");
    He(this, "options");
    He(this, "state");
    He(this, "inlineQueue");
    He(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ur, this.options.tokenizer = this.options.tokenizer || new xa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Gt, block: fa.normal, inline: Io.normal };
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
        let d = 1 / 0, m = t.slice(1), h;
        this.options.extensions.startInline.forEach((y) => {
          h = y.call({ lexer: this }, m), typeof h == "number" && h >= 0 && (d = Math.min(d, h));
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
    He(this, "options");
    He(this, "parser");
    this.options = t || Ur;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Gt.notSpaceStart)?.[0], a = t.replace(Gt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Yn(o) + '">' + (r ? a : Yn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Yn(a, !0)) + `</code></pre>
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
    return `<code>${Yn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Di(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Yn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Di(t);
    if (a === null) return Yn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Yn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Yn(t.text);
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
}, gn = class zs {
  constructor(t) {
    He(this, "options");
    He(this, "renderer");
    He(this, "textRenderer");
    this.options = t || Ur, this.options.renderer = this.options.renderer || new Ra(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new gl();
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
    He(this, "options");
    He(this, "block");
    this.options = e || Ur;
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
    return this.block ? hn.lex : hn.lexInline;
  }
  provideParser() {
    return this.block ? gn.parse : gn.parseInline;
  }
}, He(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), He(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a), Lh = class {
  constructor(...t) {
    He(this, "defaults", il());
    He(this, "options", this.setOptions);
    He(this, "parse", this.parseMarkdown(!0));
    He(this, "parseInline", this.parseMarkdown(!1));
    He(this, "Parser", gn);
    He(this, "Renderer", Ra);
    He(this, "TextRenderer", gl);
    He(this, "Lexer", hn);
    He(this, "Tokenizer", xa);
    He(this, "Hooks", $o);
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
            let m = l.apply(a, d);
            return m === !1 && (m = u.apply(a, d)), m || "";
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
            let m = l.apply(a, d);
            return m === !1 && (m = u.apply(a, d)), m;
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
              let h = await l.call(a, d);
              return u.call(a, h);
            })();
            let m = l.call(a, d);
            return u.call(a, m);
          } : a[i] = (...d) => {
            if (this.defaults.async) return (async () => {
              let h = await l.apply(a, d);
              return h === !1 && (h = await u.apply(a, d)), h;
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
    return hn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return gn.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? hn.lex : hn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser() : t ? gn.parse : gn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? hn.lex : hn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? gn.parse : gn.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + Yn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, zr = new Lh();
function Ve(e, t) {
  return zr.parse(e, t);
}
Ve.options = Ve.setOptions = function(e) {
  return zr.setOptions(e), Ve.defaults = zr.defaults, Wu(Ve.defaults), Ve;
};
Ve.getDefaults = il;
Ve.defaults = Ur;
Ve.use = function(...e) {
  return zr.use(...e), Ve.defaults = zr.defaults, Wu(Ve.defaults), Ve;
};
Ve.walkTokens = function(e, t) {
  return zr.walkTokens(e, t);
};
Ve.parseInline = zr.parseInline;
Ve.Parser = gn;
Ve.parser = gn.parse;
Ve.Renderer = Ra;
Ve.TextRenderer = gl;
Ve.Lexer = hn;
Ve.lexer = hn.lex;
Ve.Tokenizer = xa;
Ve.Hooks = $o;
Ve.parse = Ve;
Ve.options;
Ve.setOptions;
Ve.use;
Ve.walkTokens;
Ve.parseInline;
gn.parse;
hn.lex;
function xh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function $t(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Bi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Bi || (Bi = {}));
async function Rh(e, t) {
  await $t("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Nh(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return $t("plugin:event|listen", {
    event: e,
    target: o,
    handler: xh(t)
  }).then((a) => async () => Rh(e, a));
}
async function nd() {
  return await $t("local_ai_get_config");
}
async function Ta(e) {
  return await $t("local_ai_save_config", { config: e });
}
async function rd(e) {
  return await $t("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Ph() {
  return await $t("local_ai_get_runtime_status");
}
async function od() {
  return await $t("local_ai_get_status");
}
async function $h(e) {
  return await $t("local_ai_start_service", {
    config: e ?? null
  });
}
async function ad() {
  return await $t("local_ai_restart_service");
}
async function Mh() {
  await $t("local_ai_stop_service");
}
function sd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Dh(e, t, n = {}) {
  const r = n.requestId ?? sd(), o = await Nh(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === r && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await $t("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function ms(e) {
  return await $t("local_ai_cancel_chat_stream", { requestId: e });
}
async function Fh() {
  return await $t("local_ai_get_chat_histories");
}
async function zh(e) {
  return await $t("local_ai_save_chat_history", {
    history: e
  });
}
async function Bh(e) {
  return await $t("local_ai_delete_chat_history", {
    historyId: e
  });
}
const Vh = /* @__PURE__ */ new Set([
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
]), jh = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), Uh = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), Hh = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), Wh = 5, Gh = 1024 * 1024, Kh = 5 * 1024 * 1024, Vi = 4e4, vl = (e) => e.split(".").pop()?.toLowerCase() ?? "", qh = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, hs = (e) => jh.has(e.type) || Uh.has(vl(e.name)), ji = (e) => e.type.startsWith("text/") || Vh.has(vl(e.name)), Yh = (e) => Hh.has(vl(e.name)), Zh = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), Xh = async (e) => {
  const t = await e.text();
  return t.length <= Vi ? { text: t, truncated: !1 } : {
    text: t.slice(0, Vi),
    truncated: !0
  };
}, Qh = (e, t) => {
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
function Ui(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Jh(e) {
  if (Array.isArray(e)) return e;
}
function eg(e, t) {
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
function tg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ng(e, t) {
  return Jh(e) || eg(e, t) || rg(e, t) || tg();
}
function rg(e, t) {
  if (e) {
    if (typeof e == "string") return Ui(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ui(e, t) : void 0;
  }
}
const ld = Object.entries, Hi = Object.setPrototypeOf, og = Object.isFrozen, ag = Object.getPrototypeOf, sg = Object.getOwnPropertyDescriptor;
let qt = Object.freeze, un = Object.seal, ao = Object.create, id = typeof Reflect < "u" && Reflect, Bs = id.apply, Vs = id.construct;
qt || (qt = function(t) {
  return t;
});
un || (un = function(t) {
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
const Jr = kt(Array.prototype.forEach), lg = kt(Array.prototype.lastIndexOf), Wi = kt(Array.prototype.pop), eo = kt(Array.prototype.push), ig = kt(Array.prototype.splice), Ht = Array.isArray, Mo = kt(String.prototype.toLowerCase), gs = kt(String.prototype.toString), Gi = kt(String.prototype.match), to = kt(String.prototype.replace), Ki = kt(String.prototype.indexOf), cg = kt(String.prototype.trim), ug = kt(Number.prototype.toString), dg = kt(Boolean.prototype.toString), qi = typeof BigInt > "u" ? null : kt(BigInt.prototype.toString), Yi = typeof Symbol > "u" ? null : kt(Symbol.prototype.toString), ct = kt(Object.prototype.hasOwnProperty), Lo = kt(Object.prototype.toString), Rt = kt(RegExp.prototype.test), xo = fg(TypeError);
function kt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Bs(e, t, r);
  };
}
function fg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Vs(e, n);
  };
}
function Ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mo;
  if (Hi && Hi(e, null), !Ht(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (og(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function pg(e) {
  for (let t = 0; t < e.length; t++)
    ct(e, t) || (e[t] = null);
  return e;
}
function Ft(e) {
  const t = ao(null);
  for (const r of ld(e)) {
    var n = ng(r, 2);
    const o = n[0], a = n[1];
    ct(e, o) && (Ht(a) ? t[o] = pg(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Ft(a) : t[o] = a);
  }
  return t;
}
function mg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return ug(e);
    case "boolean":
      return dg(e);
    case "bigint":
      return qi ? qi(e) : "0";
    case "symbol":
      return Yi ? Yi(e) : "Symbol()";
    case "undefined":
      return Lo(e);
    case "function":
    case "object": {
      if (e === null)
        return Lo(e);
      const t = e, n = Rn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Lo(r);
      }
      return Lo(e);
    }
    default:
      return Lo(e);
  }
}
function Rn(e, t) {
  for (; e !== null; ) {
    const r = sg(e, t);
    if (r) {
      if (r.get)
        return kt(r.get);
      if (typeof r.value == "function")
        return kt(r.value);
    }
    e = ag(e);
  }
  function n() {
    return null;
  }
  return n;
}
function hg(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Zi = qt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vs = qt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bs = qt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gg = qt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ys = qt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), vg = qt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xi = qt(["#text"]), Qi = qt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), _s = qt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ji = qt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pa = qt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), bg = un(/{{[\w\W]*|^[\w\W]*}}/g), yg = un(/<%[\w\W]*|^[\w\W]*%>/g), _g = un(/\${[\w\W]*/g), wg = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), kg = un(/^aria-[\-\w]+$/), ec = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Tg = un(/^(?:\w+script|data):/i), Sg = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Eg = un(/^html$/i), Ag = un(/^[a-z][.\w]*(-[.\w]+)+$/i), xn = {
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
}, Cg = function() {
  return typeof window > "u" ? null : window;
}, Ig = function(t, n) {
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
}, tc = function() {
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
function cd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cg();
  const t = (ie) => cd(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== xn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, h = i.prototype, y = Rn(h, "cloneNode"), g = Rn(h, "remove"), v = Rn(h, "nextSibling"), A = Rn(h, "childNodes"), f = Rn(h, "parentNode"), O = Rn(h, "shadowRoot"), R = Rn(h, "attributes"), C = s && s.prototype ? Rn(s.prototype, "nodeType") : null, w = s && s.prototype ? Rn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let T, x = "";
  const Y = n, Z = Y.implementation, se = Y.createNodeIterator, ge = Y.createDocumentFragment, ae = Y.getElementsByTagName, ye = r.importNode;
  let _e = tc();
  t.isSupported = typeof ld == "function" && typeof f == "function" && Z && Z.createHTMLDocument !== void 0;
  const B = bg, J = yg, H = _g, me = wg, X = kg, K = Tg, Pe = Sg, Ue = Ag;
  let be = ec, we = null;
  const te = Ie({}, [...Zi, ...vs, ...bs, ...ys, ...Xi]);
  let le = null;
  const Ze = Ie({}, [...Qi, ..._s, ...Ji, ...pa]);
  let ve = Object.seal(ao(null, {
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
  })), et = null, ut = null;
  const qe = Object.seal(ao(null, {
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
  let Mt = !0, ot = !0, Ct = !1, It = !0, Ge = !1, St = !0, k = !1, L = !1, V = !1, re = !1, Le = !1, ue = !1, E = !0, z = !1;
  const ke = "user-content-";
  let Re = !0, Xe = !1, dt = {}, Ye = null;
  const Wn = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let fr = null;
  const Kr = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let pr = null;
  const Sn = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Gn = "http://www.w3.org/1998/Math/MathML", rn = "http://www.w3.org/2000/svg", Yt = "http://www.w3.org/1999/xhtml";
  let En = Yt, Or = !1, Lr = null;
  const mr = Ie({}, [Gn, rn, Yt], gs);
  let xr = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = Ie({}, ["annotation-xml"]);
  const ko = Ie({}, ["title", "style", "font", "a", "script"]);
  let An = null;
  const Nr = ["application/xhtml+xml", "text/html"], qr = "text/html";
  let Fe = null, Cn = null;
  const Yr = n.createElement("form"), Zr = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, hr = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Cn && Cn === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = Ft(_), An = // eslint-disable-next-line unicorn/prefer-includes
    Nr.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? qr : _.PARSER_MEDIA_TYPE, Fe = An === "application/xhtml+xml" ? gs : Mo, we = ct(_, "ALLOWED_TAGS") && Ht(_.ALLOWED_TAGS) ? Ie({}, _.ALLOWED_TAGS, Fe) : te, le = ct(_, "ALLOWED_ATTR") && Ht(_.ALLOWED_ATTR) ? Ie({}, _.ALLOWED_ATTR, Fe) : Ze, Lr = ct(_, "ALLOWED_NAMESPACES") && Ht(_.ALLOWED_NAMESPACES) ? Ie({}, _.ALLOWED_NAMESPACES, gs) : mr, pr = ct(_, "ADD_URI_SAFE_ATTR") && Ht(_.ADD_URI_SAFE_ATTR) ? Ie(Ft(Sn), _.ADD_URI_SAFE_ATTR, Fe) : Sn, fr = ct(_, "ADD_DATA_URI_TAGS") && Ht(_.ADD_DATA_URI_TAGS) ? Ie(Ft(Kr), _.ADD_DATA_URI_TAGS, Fe) : Kr, Ye = ct(_, "FORBID_CONTENTS") && Ht(_.FORBID_CONTENTS) ? Ie({}, _.FORBID_CONTENTS, Fe) : Wn, et = ct(_, "FORBID_TAGS") && Ht(_.FORBID_TAGS) ? Ie({}, _.FORBID_TAGS, Fe) : Ft({}), ut = ct(_, "FORBID_ATTR") && Ht(_.FORBID_ATTR) ? Ie({}, _.FORBID_ATTR, Fe) : Ft({}), dt = ct(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? Ft(_.USE_PROFILES) : _.USE_PROFILES : !1, Mt = _.ALLOW_ARIA_ATTR !== !1, ot = _.ALLOW_DATA_ATTR !== !1, Ct = _.ALLOW_UNKNOWN_PROTOCOLS || !1, It = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ge = _.SAFE_FOR_TEMPLATES || !1, St = _.SAFE_FOR_XML !== !1, k = _.WHOLE_DOCUMENT || !1, re = _.RETURN_DOM || !1, Le = _.RETURN_DOM_FRAGMENT || !1, ue = _.RETURN_TRUSTED_TYPE || !1, V = _.FORCE_BODY || !1, E = _.SANITIZE_DOM !== !1, z = _.SANITIZE_NAMED_PROPS || !1, Re = _.KEEP_CONTENT !== !1, Xe = _.IN_PLACE || !1, be = hg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : ec, En = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Yt, xr = ct(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ft(_.MATHML_TEXT_INTEGRATION_POINTS) : Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = ct(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? Ft(_.HTML_INTEGRATION_POINTS) : Ie({}, ["annotation-xml"]);
    const U = ct(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? Ft(_.CUSTOM_ELEMENT_HANDLING) : ao(null);
    if (ve = ao(null), ct(U, "tagNameCheck") && Zr(U.tagNameCheck) && (ve.tagNameCheck = U.tagNameCheck), ct(U, "attributeNameCheck") && Zr(U.attributeNameCheck) && (ve.attributeNameCheck = U.attributeNameCheck), ct(U, "allowCustomizedBuiltInElements") && typeof U.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = U.allowCustomizedBuiltInElements), Ge && (ot = !1), Le && (re = !0), dt && (we = Ie({}, Xi), le = ao(null), dt.html === !0 && (Ie(we, Zi), Ie(le, Qi)), dt.svg === !0 && (Ie(we, vs), Ie(le, _s), Ie(le, pa)), dt.svgFilters === !0 && (Ie(we, bs), Ie(le, _s), Ie(le, pa)), dt.mathMl === !0 && (Ie(we, ys), Ie(le, Ji), Ie(le, pa))), qe.tagCheck = null, qe.attributeCheck = null, ct(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? qe.tagCheck = _.ADD_TAGS : Ht(_.ADD_TAGS) && (we === te && (we = Ft(we)), Ie(we, _.ADD_TAGS, Fe))), ct(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? qe.attributeCheck = _.ADD_ATTR : Ht(_.ADD_ATTR) && (le === Ze && (le = Ft(le)), Ie(le, _.ADD_ATTR, Fe))), ct(_, "ADD_URI_SAFE_ATTR") && Ht(_.ADD_URI_SAFE_ATTR) && Ie(pr, _.ADD_URI_SAFE_ATTR, Fe), ct(_, "FORBID_CONTENTS") && Ht(_.FORBID_CONTENTS) && (Ye === Wn && (Ye = Ft(Ye)), Ie(Ye, _.FORBID_CONTENTS, Fe)), ct(_, "ADD_FORBID_CONTENTS") && Ht(_.ADD_FORBID_CONTENTS) && (Ye === Wn && (Ye = Ft(Ye)), Ie(Ye, _.ADD_FORBID_CONTENTS, Fe)), Re && (we["#text"] = !0), k && Ie(we, ["html", "head", "body"]), we.table && (Ie(we, ["tbody"]), delete et.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw xo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw xo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      T = _.TRUSTED_TYPES_POLICY, x = T.createHTML("");
    } else
      T === void 0 && (T = Ig(m, o)), T !== null && typeof x == "string" && (x = T.createHTML(""));
    (_e.uponSanitizeElement.length > 0 || _e.uponSanitizeAttribute.length > 0) && we === te && (we = Ft(we)), _e.uponSanitizeAttribute.length > 0 && le === Ze && (le = Ft(le)), qt && qt(_), Cn = _;
  }, gr = Ie({}, [...vs, ...bs, ...gg]), Xr = Ie({}, [...ys, ...vg]), To = function(_) {
    let U = f(_);
    (!U || !U.tagName) && (U = {
      namespaceURI: En,
      tagName: "template"
    });
    const oe = Mo(_.tagName), Ne = Mo(U.tagName);
    return Lr[_.namespaceURI] ? _.namespaceURI === rn ? U.namespaceURI === Yt ? oe === "svg" : U.namespaceURI === Gn ? oe === "svg" && (Ne === "annotation-xml" || xr[Ne]) : !!gr[oe] : _.namespaceURI === Gn ? U.namespaceURI === Yt ? oe === "math" : U.namespaceURI === rn ? oe === "math" && Rr[Ne] : !!Xr[oe] : _.namespaceURI === Yt ? U.namespaceURI === rn && !Rr[Ne] || U.namespaceURI === Gn && !xr[Ne] ? !1 : !Xr[oe] && (ko[oe] || !gr[oe]) : !!(An === "application/xhtml+xml" && Lr[_.namespaceURI]) : !1;
  }, it = function(_) {
    eo(t.removed, {
      element: _
    });
    try {
      f(_).removeChild(_);
    } catch {
      g(_);
    }
  }, $ = function(_, U) {
    try {
      eo(t.removed, {
        attribute: U.getAttributeNode(_),
        from: U
      });
    } catch {
      eo(t.removed, {
        attribute: null,
        from: U
      });
    }
    if (U.removeAttribute(_), _ === "is")
      if (re || Le)
        try {
          it(U);
        } catch {
        }
      else
        try {
          U.setAttribute(_, "");
        } catch {
        }
  }, ne = function(_) {
    let U = null, oe = null;
    if (V)
      _ = "<remove></remove>" + _;
    else {
      const Ke = Gi(_, /^[\r\n\t ]+/);
      oe = Ke && Ke[0];
    }
    An === "application/xhtml+xml" && En === Yt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Ne = T ? T.createHTML(_) : _;
    if (En === Yt)
      try {
        U = new d().parseFromString(Ne, An);
      } catch {
      }
    if (!U || !U.documentElement) {
      U = Z.createDocument(En, "template", null);
      try {
        U.documentElement.innerHTML = Or ? x : Ne;
      } catch {
      }
    }
    const Oe = U.body || U.documentElement;
    return _ && oe && Oe.insertBefore(n.createTextNode(oe), Oe.childNodes[0] || null), En === Yt ? ae.call(U, k ? "html" : "body")[0] : k ? U.documentElement : Oe;
  }, Ee = function(_) {
    return se.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, tt = function(_) {
    _.normalize();
    const U = se.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let oe = U.nextNode();
    for (; oe; ) {
      let Ne = oe.data;
      Jr([B, J, H], (Oe) => {
        Ne = to(Ne, Oe, " ");
      }), oe.data = Ne, oe = U.nextNode();
    }
  }, bt = function(_) {
    const U = w ? w(_) : null;
    return typeof U != "string" || Fe(U) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    _.childNodes !== A(_);
  }, Zt = function(_) {
    if (!C || typeof _ != "object" || _ === null)
      return !1;
    try {
      return C(_) === xn.documentFragment;
    } catch {
      return !1;
    }
  }, jt = function(_) {
    if (!C || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof C(_) == "number";
    } catch {
      return !1;
    }
  };
  function Dt(ie, _, U) {
    Jr(ie, (oe) => {
      oe.call(t, _, U, Cn);
    });
  }
  const ln = function(_) {
    let U = null;
    if (Dt(_e.beforeSanitizeElements, _, null), bt(_))
      return it(_), !0;
    const oe = Fe(_.nodeName);
    if (Dt(_e.uponSanitizeElement, _, {
      tagName: oe,
      allowedTags: we
    }), St && _.hasChildNodes() && !jt(_.firstElementChild) && Rt(/<[/\w!]/g, _.innerHTML) && Rt(/<[/\w!]/g, _.textContent) || St && _.namespaceURI === Yt && oe === "style" && jt(_.firstElementChild) || _.nodeType === xn.progressingInstruction || St && _.nodeType === xn.comment && Rt(/<[/\w]/g, _.data))
      return it(_), !0;
    if (et[oe] || !(qe.tagCheck instanceof Function && qe.tagCheck(oe)) && !we[oe]) {
      if (!et[oe] && aa(oe) && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, oe) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(oe)))
        return !1;
      if (Re && !Ye[oe]) {
        const Oe = f(_), Ke = A(_);
        if (Ke && Oe) {
          const Ut = Ke.length;
          for (let Xt = Ut - 1; Xt >= 0; --Xt) {
            const Qt = y(Ke[Xt], !0);
            Oe.insertBefore(Qt, v(_));
          }
        }
      }
      return it(_), !0;
    }
    return (C ? C(_) : _.nodeType) === xn.element && !To(_) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && Rt(/<\/no(script|embed|frames)/i, _.innerHTML) ? (it(_), !0) : (Ge && _.nodeType === xn.text && (U = _.textContent, Jr([B, J, H], (Oe) => {
      U = to(U, Oe, " ");
    }), _.textContent !== U && (eo(t.removed, {
      element: _.cloneNode()
    }), _.textContent = U)), Dt(_e.afterSanitizeElements, _, null), !1);
  }, Kn = function(_, U, oe) {
    if (ut[U] || E && (U === "id" || U === "name") && (oe in n || oe in Yr))
      return !1;
    const Ne = le[U] || qe.attributeCheck instanceof Function && qe.attributeCheck(U, _);
    if (!(ot && !ut[U] && Rt(me, U))) {
      if (!(Mt && Rt(X, U))) {
        if (!Ne || ut[U]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(aa(_) && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, _) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(_)) && (ve.attributeNameCheck instanceof RegExp && Rt(ve.attributeNameCheck, U) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(U, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            U === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, oe) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(oe)))
          ) return !1;
        } else if (!pr[U]) {
          if (!Rt(be, to(oe, Pe, ""))) {
            if (!((U === "src" || U === "xlink:href" || U === "href") && _ !== "script" && Ki(oe, "data:") === 0 && fr[_])) {
              if (!(Ct && !Rt(K, to(oe, Pe, "")))) {
                if (oe)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, is = Ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), aa = function(_) {
    return !is[Mo(_)] && Rt(Ue, _);
  }, In = function(_) {
    Dt(_e.beforeSanitizeAttributes, _, null);
    const U = _.attributes;
    if (!U || bt(_))
      return;
    const oe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: le,
      forceKeepAttr: void 0
    };
    let Ne = U.length;
    for (; Ne--; ) {
      const Oe = U[Ne], Ke = Oe.name, Ut = Oe.namespaceURI, Xt = Oe.value, Qt = Fe(Ke), So = Xt;
      let yt = Ke === "value" ? So : cg(So);
      if (oe.attrName = Qt, oe.attrValue = yt, oe.keepAttr = !0, oe.forceKeepAttr = void 0, Dt(_e.uponSanitizeAttribute, _, oe), yt = oe.attrValue, z && (Qt === "id" || Qt === "name") && Ki(yt, ke) !== 0 && ($(Ke, _), yt = ke + yt), St && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, yt)) {
        $(Ke, _);
        continue;
      }
      if (Qt === "attributename" && Gi(yt, "href")) {
        $(Ke, _);
        continue;
      }
      if (oe.forceKeepAttr)
        continue;
      if (!oe.keepAttr) {
        $(Ke, _);
        continue;
      }
      if (!It && Rt(/\/>/i, yt)) {
        $(Ke, _);
        continue;
      }
      Ge && Jr([B, J, H], (Eo) => {
        yt = to(yt, Eo, " ");
      });
      const sa = Fe(_.nodeName);
      if (!Kn(sa, Qt, yt)) {
        $(Ke, _);
        continue;
      }
      if (T && typeof m == "object" && typeof m.getAttributeType == "function" && !Ut)
        switch (m.getAttributeType(sa, Qt)) {
          case "TrustedHTML": {
            yt = T.createHTML(yt);
            break;
          }
          case "TrustedScriptURL": {
            yt = T.createScriptURL(yt);
            break;
          }
        }
      if (yt !== So)
        try {
          Ut ? _.setAttributeNS(Ut, Ke, yt) : _.setAttribute(Ke, yt), bt(_) ? it(_) : Wi(t.removed);
        } catch {
          $(Ke, _);
        }
    }
    Dt(_e.afterSanitizeAttributes, _, null);
  }, Pr = function(_) {
    let U = null;
    const oe = Ee(_);
    for (Dt(_e.beforeSanitizeShadowDOM, _, null); U = oe.nextNode(); )
      if (Dt(_e.uponSanitizeShadowNode, U, null), ln(U), In(U), Zt(U.content) && Pr(U.content), (C ? C(U) : U.nodeType) === xn.element) {
        const Oe = O ? O(U) : U.shadowRoot;
        Zt(Oe) && (vr(Oe), Pr(Oe));
      }
    Dt(_e.afterSanitizeShadowDOM, _, null);
  }, vr = function(_) {
    const U = C ? C(_) : _.nodeType;
    if (U === xn.element) {
      const Oe = O ? O(_) : _.shadowRoot;
      Zt(Oe) && (vr(Oe), Pr(Oe));
    }
    const oe = A ? A(_) : _.childNodes;
    if (!oe)
      return;
    const Ne = [];
    Jr(oe, (Oe) => {
      eo(Ne, Oe);
    });
    for (const Oe of Ne)
      vr(Oe);
    if (U === xn.element) {
      const Oe = w ? w(_) : null;
      if (typeof Oe == "string" && Fe(Oe) === "template") {
        const Ke = _.content;
        Zt(Ke) && vr(Ke);
      }
    }
  };
  return t.sanitize = function(ie) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, U = null, oe = null, Ne = null, Oe = null;
    if (Or = !ie, Or && (ie = "<!-->"), typeof ie != "string" && !jt(ie) && (ie = mg(ie), typeof ie != "string"))
      throw xo("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (L || hr(_), t.removed = [], typeof ie == "string" && (Xe = !1), Xe) {
      const Xt = w ? w(ie) : ie.nodeName;
      if (typeof Xt == "string") {
        const Qt = Fe(Xt);
        if (!we[Qt] || et[Qt])
          throw xo("root node is forbidden and cannot be sanitized in-place");
      }
      if (bt(ie))
        throw xo("root node is clobbered and cannot be sanitized in-place");
      vr(ie);
    } else if (jt(ie))
      U = ne("<!---->"), oe = U.ownerDocument.importNode(ie, !0), oe.nodeType === xn.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? U = oe : U.appendChild(oe), vr(oe);
    else {
      if (!re && !Ge && !k && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return T && ue ? T.createHTML(ie) : ie;
      if (U = ne(ie), !U)
        return re ? null : ue ? x : "";
    }
    U && V && it(U.firstChild);
    const Ke = Ee(Xe ? ie : U);
    for (; Ne = Ke.nextNode(); )
      ln(Ne), In(Ne), Zt(Ne.content) && Pr(Ne.content);
    if (Xe)
      return Ge && tt(ie), ie;
    if (re) {
      if (Ge && tt(U), Le)
        for (Oe = ge.call(U.ownerDocument); U.firstChild; )
          Oe.appendChild(U.firstChild);
      else
        Oe = U;
      return (le.shadowroot || le.shadowrootmode) && (Oe = ye.call(r, Oe, !0)), Oe;
    }
    let Ut = k ? U.outerHTML : U.innerHTML;
    return k && we["!doctype"] && U.ownerDocument && U.ownerDocument.doctype && U.ownerDocument.doctype.name && Rt(Eg, U.ownerDocument.doctype.name) && (Ut = "<!DOCTYPE " + U.ownerDocument.doctype.name + `>
` + Ut), Ge && Jr([B, J, H], (Xt) => {
      Ut = to(Ut, Xt, " ");
    }), T && ue ? T.createHTML(Ut) : Ut;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    hr(ie), L = !0;
  }, t.clearConfig = function() {
    Cn = null, L = !1;
  }, t.isValidAttribute = function(ie, _, U) {
    Cn || hr({});
    const oe = Fe(ie), Ne = Fe(_);
    return Kn(oe, Ne, U);
  }, t.addHook = function(ie, _) {
    typeof _ == "function" && eo(_e[ie], _);
  }, t.removeHook = function(ie, _) {
    if (_ !== void 0) {
      const U = lg(_e[ie], _);
      return U === -1 ? void 0 : ig(_e[ie], U, 1)[0];
    }
    return Wi(_e[ie]);
  }, t.removeHooks = function(ie) {
    _e[ie] = [];
  }, t.removeAllHooks = function() {
    _e = tc();
  }, t;
}
var Og = cd();
const Lg = {
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
function xg(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Og.sanitize(e, Lg) : "";
}
const ud = Symbol(), Sa = "el", Rg = "is-", Mr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, dd = Symbol("namespaceContextKey"), bl = (e) => {
  const t = e || (Kt() ? je(dd, G(Sa)) : G(Sa));
  return P(() => c(t) || Sa);
}, Tt = (e, t) => {
  const n = bl(t);
  return {
    namespace: n,
    b: (v = "") => Mr(n.value, e, v, "", ""),
    e: (v) => v ? Mr(n.value, e, "", v, "") : "",
    m: (v) => v ? Mr(n.value, e, "", "", v) : "",
    be: (v, A) => v && A ? Mr(n.value, e, v, A, "") : "",
    em: (v, A) => v && A ? Mr(n.value, e, "", v, A) : "",
    bm: (v, A) => v && A ? Mr(n.value, e, v, "", A) : "",
    bem: (v, A, f) => v && A && f ? Mr(n.value, e, v, A, f) : "",
    is: (v, ...A) => {
      const f = A.length >= 1 ? A[0] : !0;
      return v && f ? `${Rg}${v}` : "";
    },
    cssVar: (v) => {
      const A = {};
      for (const f in v)
        v[f] && (A[`--${n.value}-${f}`] = v[f]);
      return A;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const A = {};
      for (const f in v)
        v[f] && (A[`--${n.value}-${e}-${f}`] = v[f]);
      return A;
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
}, Ng = Object.prototype.hasOwnProperty, nc = (e, t) => Ng.call(e, t), Pn = Array.isArray, lt = (e) => typeof e == "function", Vt = (e) => typeof e == "string", an = (e) => e !== null && typeof e == "object", rc = (e) => (an(e) || lt(e)) && lt(e.then) && lt(e.catch), Pg = Object.prototype.toString, $g = (e) => Pg.call(e), Mg = (e) => $g(e) === "[object Object]";
var fd = typeof global == "object" && global && global.Object === Object && global, Dg = typeof self == "object" && self && self.Object === Object && self, Hn = fd || Dg || Function("return this")(), Vn = Hn.Symbol, pd = Object.prototype, Fg = pd.hasOwnProperty, zg = pd.toString, Ro = Vn ? Vn.toStringTag : void 0;
function Bg(e) {
  var t = Fg.call(e, Ro), n = e[Ro];
  try {
    e[Ro] = void 0;
    var r = !0;
  } catch {
  }
  var o = zg.call(e);
  return r && (t ? e[Ro] = n : delete e[Ro]), o;
}
var Vg = Object.prototype, jg = Vg.toString;
function Ug(e) {
  return jg.call(e);
}
var Hg = "[object Null]", Wg = "[object Undefined]", oc = Vn ? Vn.toStringTag : void 0;
function wo(e) {
  return e == null ? e === void 0 ? Wg : Hg : oc && oc in Object(e) ? Bg(e) : Ug(e);
}
function fo(e) {
  return e != null && typeof e == "object";
}
var Gg = "[object Symbol]";
function qa(e) {
  return typeof e == "symbol" || fo(e) && wo(e) == Gg;
}
function Kg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var kn = Array.isArray, ac = Vn ? Vn.prototype : void 0, sc = ac ? ac.toString : void 0;
function md(e) {
  if (typeof e == "string")
    return e;
  if (kn(e))
    return Kg(e, md) + "";
  if (qa(e))
    return sc ? sc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var qg = /\s/;
function Yg(e) {
  for (var t = e.length; t-- && qg.test(e.charAt(t)); )
    ;
  return t;
}
var Zg = /^\s+/;
function Xg(e) {
  return e && e.slice(0, Yg(e) + 1).replace(Zg, "");
}
function Er(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var lc = NaN, Qg = /^[-+]0x[0-9a-f]+$/i, Jg = /^0b[01]+$/i, ev = /^0o[0-7]+$/i, tv = parseInt;
function ic(e) {
  if (typeof e == "number")
    return e;
  if (qa(e))
    return lc;
  if (Er(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Er(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Xg(e);
  var n = Jg.test(e);
  return n || ev.test(e) ? tv(e.slice(2), n ? 2 : 8) : Qg.test(e) ? lc : +e;
}
function hd(e) {
  return e;
}
var nv = "[object AsyncFunction]", rv = "[object Function]", ov = "[object GeneratorFunction]", av = "[object Proxy]";
function gd(e) {
  if (!Er(e))
    return !1;
  var t = wo(e);
  return t == rv || t == ov || t == nv || t == av;
}
var ws = Hn["__core-js_shared__"], cc = function() {
  var e = /[^.]+$/.exec(ws && ws.keys && ws.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function sv(e) {
  return !!cc && cc in e;
}
var lv = Function.prototype, iv = lv.toString;
function Hr(e) {
  if (e != null) {
    try {
      return iv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var cv = /[\\^$.*+?()[\]{}|]/g, uv = /^\[object .+?Constructor\]$/, dv = Function.prototype, fv = Object.prototype, pv = dv.toString, mv = fv.hasOwnProperty, hv = RegExp(
  "^" + pv.call(mv).replace(cv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gv(e) {
  if (!Er(e) || sv(e))
    return !1;
  var t = gd(e) ? hv : uv;
  return t.test(Hr(e));
}
function vv(e, t) {
  return e?.[t];
}
function Wr(e, t) {
  var n = vv(e, t);
  return gv(n) ? n : void 0;
}
var js = Wr(Hn, "WeakMap");
function bv(e, t, n) {
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
var yv = 800, _v = 16, wv = Date.now;
function kv(e) {
  var t = 0, n = 0;
  return function() {
    var r = wv(), o = _v - (r - n);
    if (n = r, o > 0) {
      if (++t >= yv)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Tv(e) {
  return function() {
    return e;
  };
}
var Na = function() {
  try {
    var e = Wr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Sv = Na ? function(e, t) {
  return Na(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Tv(t),
    writable: !0
  });
} : hd, Ev = kv(Sv);
function Av(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Cv = 9007199254740991, Iv = /^(?:0|[1-9]\d*)$/;
function yl(e, t) {
  var n = typeof e;
  return t = t ?? Cv, !!t && (n == "number" || n != "symbol" && Iv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ov(e, t, n) {
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
var Lv = Object.prototype, xv = Lv.hasOwnProperty;
function Rv(e, t, n) {
  var r = e[t];
  (!(xv.call(e, t) && _l(r, n)) || n === void 0 && !(t in e)) && Ov(e, t, n);
}
var uc = Math.max;
function Nv(e, t, n) {
  return t = uc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = uc(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), bv(e, this, i);
  };
}
var Pv = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pv;
}
function $v(e) {
  return e != null && wl(e.length) && !gd(e);
}
var Mv = Object.prototype;
function Dv(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Mv;
  return e === n;
}
function Fv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var zv = "[object Arguments]";
function dc(e) {
  return fo(e) && wo(e) == zv;
}
var vd = Object.prototype, Bv = vd.hasOwnProperty, Vv = vd.propertyIsEnumerable, kl = dc(/* @__PURE__ */ function() {
  return arguments;
}()) ? dc : function(e) {
  return fo(e) && Bv.call(e, "callee") && !Vv.call(e, "callee");
};
function jv() {
  return !1;
}
var bd = typeof exports == "object" && exports && !exports.nodeType && exports, fc = bd && typeof module == "object" && module && !module.nodeType && module, Uv = fc && fc.exports === bd, pc = Uv ? Hn.Buffer : void 0, Hv = pc ? pc.isBuffer : void 0, Us = Hv || jv, Wv = "[object Arguments]", Gv = "[object Array]", Kv = "[object Boolean]", qv = "[object Date]", Yv = "[object Error]", Zv = "[object Function]", Xv = "[object Map]", Qv = "[object Number]", Jv = "[object Object]", e0 = "[object RegExp]", t0 = "[object Set]", n0 = "[object String]", r0 = "[object WeakMap]", o0 = "[object ArrayBuffer]", a0 = "[object DataView]", s0 = "[object Float32Array]", l0 = "[object Float64Array]", i0 = "[object Int8Array]", c0 = "[object Int16Array]", u0 = "[object Int32Array]", d0 = "[object Uint8Array]", f0 = "[object Uint8ClampedArray]", p0 = "[object Uint16Array]", m0 = "[object Uint32Array]", Qe = {};
Qe[s0] = Qe[l0] = Qe[i0] = Qe[c0] = Qe[u0] = Qe[d0] = Qe[f0] = Qe[p0] = Qe[m0] = !0;
Qe[Wv] = Qe[Gv] = Qe[o0] = Qe[Kv] = Qe[a0] = Qe[qv] = Qe[Yv] = Qe[Zv] = Qe[Xv] = Qe[Qv] = Qe[Jv] = Qe[e0] = Qe[t0] = Qe[n0] = Qe[r0] = !1;
function h0(e) {
  return fo(e) && wl(e.length) && !!Qe[wo(e)];
}
function g0(e) {
  return function(t) {
    return e(t);
  };
}
var yd = typeof exports == "object" && exports && !exports.nodeType && exports, Fo = yd && typeof module == "object" && module && !module.nodeType && module, v0 = Fo && Fo.exports === yd, ks = v0 && fd.process, mc = function() {
  try {
    var e = Fo && Fo.require && Fo.require("util").types;
    return e || ks && ks.binding && ks.binding("util");
  } catch {
  }
}(), hc = mc && mc.isTypedArray, _d = hc ? g0(hc) : h0, b0 = Object.prototype, y0 = b0.hasOwnProperty;
function _0(e, t) {
  var n = kn(e), r = !n && kl(e), o = !n && !r && Us(e), a = !n && !r && !o && _d(e), s = n || r || o || a, i = s ? Fv(e.length, String) : [], l = i.length;
  for (var u in e)
    y0.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    yl(u, l))) && i.push(u);
  return i;
}
function w0(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var k0 = w0(Object.keys, Object), T0 = Object.prototype, S0 = T0.hasOwnProperty;
function E0(e) {
  if (!Dv(e))
    return k0(e);
  var t = [];
  for (var n in Object(e))
    S0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function wd(e) {
  return $v(e) ? _0(e) : E0(e);
}
var A0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, C0 = /^\w*$/;
function Tl(e, t) {
  if (kn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qa(e) ? !0 : C0.test(e) || !A0.test(e) || t != null && e in Object(t);
}
var qo = Wr(Object, "create");
function I0() {
  this.__data__ = qo ? qo(null) : {}, this.size = 0;
}
function O0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var L0 = "__lodash_hash_undefined__", x0 = Object.prototype, R0 = x0.hasOwnProperty;
function N0(e) {
  var t = this.__data__;
  if (qo) {
    var n = t[e];
    return n === L0 ? void 0 : n;
  }
  return R0.call(t, e) ? t[e] : void 0;
}
var P0 = Object.prototype, $0 = P0.hasOwnProperty;
function M0(e) {
  var t = this.__data__;
  return qo ? t[e] !== void 0 : $0.call(t, e);
}
var D0 = "__lodash_hash_undefined__";
function F0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = qo && t === void 0 ? D0 : t, this;
}
function Br(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Br.prototype.clear = I0;
Br.prototype.delete = O0;
Br.prototype.get = N0;
Br.prototype.has = M0;
Br.prototype.set = F0;
function z0() {
  this.__data__ = [], this.size = 0;
}
function Ya(e, t) {
  for (var n = e.length; n--; )
    if (_l(e[n][0], t))
      return n;
  return -1;
}
var B0 = Array.prototype, V0 = B0.splice;
function j0(e) {
  var t = this.__data__, n = Ya(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : V0.call(t, n, 1), --this.size, !0;
}
function U0(e) {
  var t = this.__data__, n = Ya(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function H0(e) {
  return Ya(this.__data__, e) > -1;
}
function W0(e, t) {
  var n = this.__data__, r = Ya(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ur.prototype.clear = z0;
ur.prototype.delete = j0;
ur.prototype.get = U0;
ur.prototype.has = H0;
ur.prototype.set = W0;
var Yo = Wr(Hn, "Map");
function G0() {
  this.size = 0, this.__data__ = {
    hash: new Br(),
    map: new (Yo || ur)(),
    string: new Br()
  };
}
function K0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Za(e, t) {
  var n = e.__data__;
  return K0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function q0(e) {
  var t = Za(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Y0(e) {
  return Za(this, e).get(e);
}
function Z0(e) {
  return Za(this, e).has(e);
}
function X0(e, t) {
  var n = Za(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function dr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dr.prototype.clear = G0;
dr.prototype.delete = q0;
dr.prototype.get = Y0;
dr.prototype.has = Z0;
dr.prototype.set = X0;
var Q0 = "Expected a function";
function Sl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Q0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Sl.Cache || dr)(), n;
}
Sl.Cache = dr;
var J0 = 500;
function eb(e) {
  var t = Sl(e, function(r) {
    return n.size === J0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var tb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nb = /\\(\\)?/g, rb = eb(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tb, function(n, r, o, a) {
    t.push(o ? a.replace(nb, "$1") : r || n);
  }), t;
});
function ob(e) {
  return e == null ? "" : md(e);
}
function Xa(e, t) {
  return kn(e) ? e : Tl(e, t) ? [e] : rb(ob(e));
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
function kr(e, t, n) {
  var r = e == null ? void 0 : El(e, t);
  return r === void 0 ? n : r;
}
function kd(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var gc = Vn ? Vn.isConcatSpreadable : void 0;
function ab(e) {
  return kn(e) || kl(e) || !!(gc && e && e[gc]);
}
function sb(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = ab), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? kd(o, i) : o[o.length] = i;
  }
  return o;
}
function lb(e) {
  var t = e == null ? 0 : e.length;
  return t ? sb(e) : [];
}
function ib(e) {
  return Ev(Nv(e, void 0, lb), e + "");
}
function wr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return kn(e) ? e : [e];
}
function cb() {
  this.__data__ = new ur(), this.size = 0;
}
function ub(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function db(e) {
  return this.__data__.get(e);
}
function fb(e) {
  return this.__data__.has(e);
}
var pb = 200;
function mb(e, t) {
  var n = this.__data__;
  if (n instanceof ur) {
    var r = n.__data__;
    if (!Yo || r.length < pb - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new dr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function or(e) {
  var t = this.__data__ = new ur(e);
  this.size = t.size;
}
or.prototype.clear = cb;
or.prototype.delete = ub;
or.prototype.get = db;
or.prototype.has = fb;
or.prototype.set = mb;
function hb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function gb() {
  return [];
}
var vb = Object.prototype, bb = vb.propertyIsEnumerable, vc = Object.getOwnPropertySymbols, yb = vc ? function(e) {
  return e == null ? [] : (e = Object(e), hb(vc(e), function(t) {
    return bb.call(e, t);
  }));
} : gb;
function _b(e, t, n) {
  var r = t(e);
  return kn(e) ? r : kd(r, n(e));
}
function bc(e) {
  return _b(e, wd, yb);
}
var Hs = Wr(Hn, "DataView"), Ws = Wr(Hn, "Promise"), Gs = Wr(Hn, "Set"), yc = "[object Map]", wb = "[object Object]", _c = "[object Promise]", wc = "[object Set]", kc = "[object WeakMap]", Tc = "[object DataView]", kb = Hr(Hs), Tb = Hr(Yo), Sb = Hr(Ws), Eb = Hr(Gs), Ab = Hr(js), _r = wo;
(Hs && _r(new Hs(new ArrayBuffer(1))) != Tc || Yo && _r(new Yo()) != yc || Ws && _r(Ws.resolve()) != _c || Gs && _r(new Gs()) != wc || js && _r(new js()) != kc) && (_r = function(e) {
  var t = wo(e), n = t == wb ? e.constructor : void 0, r = n ? Hr(n) : "";
  if (r)
    switch (r) {
      case kb:
        return Tc;
      case Tb:
        return yc;
      case Sb:
        return _c;
      case Eb:
        return wc;
      case Ab:
        return kc;
    }
  return t;
});
var Sc = Hn.Uint8Array, Cb = "__lodash_hash_undefined__";
function Ib(e) {
  return this.__data__.set(e, Cb), this;
}
function Ob(e) {
  return this.__data__.has(e);
}
function Pa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new dr(); ++t < n; )
    this.add(e[t]);
}
Pa.prototype.add = Pa.prototype.push = Ib;
Pa.prototype.has = Ob;
function Lb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function xb(e, t) {
  return e.has(t);
}
var Rb = 1, Nb = 2;
function Td(e, t, n, r, o, a) {
  var s = n & Rb, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, h = !0, y = n & Nb ? new Pa() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < i; ) {
    var g = e[m], v = t[m];
    if (r)
      var A = s ? r(v, g, m, t, e, a) : r(g, v, m, e, t, a);
    if (A !== void 0) {
      if (A)
        continue;
      h = !1;
      break;
    }
    if (y) {
      if (!Lb(t, function(f, O) {
        if (!xb(y, O) && (g === f || o(g, f, n, r, a)))
          return y.push(O);
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
function Pb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function $b(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Mb = 1, Db = 2, Fb = "[object Boolean]", zb = "[object Date]", Bb = "[object Error]", Vb = "[object Map]", jb = "[object Number]", Ub = "[object RegExp]", Hb = "[object Set]", Wb = "[object String]", Gb = "[object Symbol]", Kb = "[object ArrayBuffer]", qb = "[object DataView]", Ec = Vn ? Vn.prototype : void 0, Ts = Ec ? Ec.valueOf : void 0;
function Yb(e, t, n, r, o, a, s) {
  switch (n) {
    case qb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Kb:
      return !(e.byteLength != t.byteLength || !a(new Sc(e), new Sc(t)));
    case Fb:
    case zb:
    case jb:
      return _l(+e, +t);
    case Bb:
      return e.name == t.name && e.message == t.message;
    case Ub:
    case Wb:
      return e == t + "";
    case Vb:
      var i = Pb;
    case Hb:
      var l = r & Mb;
      if (i || (i = $b), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= Db, s.set(e, t);
      var d = Td(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case Gb:
      if (Ts)
        return Ts.call(e) == Ts.call(t);
  }
  return !1;
}
var Zb = 1, Xb = Object.prototype, Qb = Xb.hasOwnProperty;
function Jb(e, t, n, r, o, a) {
  var s = n & Zb, i = bc(e), l = i.length, u = bc(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var m = l; m--; ) {
    var h = i[m];
    if (!(s ? h in t : Qb.call(t, h)))
      return !1;
  }
  var y = a.get(e), g = a.get(t);
  if (y && g)
    return y == t && g == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var A = s; ++m < l; ) {
    h = i[m];
    var f = e[h], O = t[h];
    if (r)
      var R = s ? r(O, f, h, t, e, a) : r(f, O, h, e, t, a);
    if (!(R === void 0 ? f === O || o(f, O, n, r, a) : R)) {
      v = !1;
      break;
    }
    A || (A = h == "constructor");
  }
  if (v && !A) {
    var C = e.constructor, w = t.constructor;
    C != w && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof w == "function" && w instanceof w) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var e1 = 1, Ac = "[object Arguments]", Cc = "[object Array]", ma = "[object Object]", t1 = Object.prototype, Ic = t1.hasOwnProperty;
function n1(e, t, n, r, o, a) {
  var s = kn(e), i = kn(t), l = s ? Cc : _r(e), u = i ? Cc : _r(t);
  l = l == Ac ? ma : l, u = u == Ac ? ma : u;
  var d = l == ma, m = u == ma, h = l == u;
  if (h && Us(e)) {
    if (!Us(t))
      return !1;
    s = !0, d = !1;
  }
  if (h && !d)
    return a || (a = new or()), s || _d(e) ? Td(e, t, n, r, o, a) : Yb(e, t, l, n, r, o, a);
  if (!(n & e1)) {
    var y = d && Ic.call(e, "__wrapped__"), g = m && Ic.call(t, "__wrapped__");
    if (y || g) {
      var v = y ? e.value() : e, A = g ? t.value() : t;
      return a || (a = new or()), o(v, A, n, r, a);
    }
  }
  return h ? (a || (a = new or()), Jb(e, t, n, r, o, a)) : !1;
}
function Qa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !fo(e) && !fo(t) ? e !== e && t !== t : n1(e, t, n, r, Qa, o);
}
var r1 = 1, o1 = 2;
function a1(e, t, n, r) {
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
      var d = new or(), m;
      if (!(m === void 0 ? Qa(u, l, r1 | o1, r, d) : m))
        return !1;
    }
  }
  return !0;
}
function Sd(e) {
  return e === e && !Er(e);
}
function s1(e) {
  for (var t = wd(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Sd(o)];
  }
  return t;
}
function Ed(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function l1(e) {
  var t = s1(e);
  return t.length == 1 && t[0][2] ? Ed(t[0][0], t[0][1]) : function(n) {
    return n === e || a1(n, e, t);
  };
}
function i1(e, t) {
  return e != null && t in Object(e);
}
function c1(e, t, n) {
  t = Xa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = ea(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && wl(o) && yl(s, o) && (kn(e) || kl(e)));
}
function Ad(e, t) {
  return e != null && c1(e, t, i1);
}
var u1 = 1, d1 = 2;
function f1(e, t) {
  return Tl(e) && Sd(t) ? Ed(ea(e), t) : function(n) {
    var r = kr(n, e);
    return r === void 0 && r === t ? Ad(n, e) : Qa(t, r, u1 | d1);
  };
}
function p1(e) {
  return function(t) {
    return t?.[e];
  };
}
function m1(e) {
  return function(t) {
    return El(t, e);
  };
}
function h1(e) {
  return Tl(e) ? p1(ea(e)) : m1(e);
}
function g1(e) {
  return typeof e == "function" ? e : e == null ? hd : typeof e == "object" ? kn(e) ? f1(e[0], e[1]) : l1(e) : h1(e);
}
var Ss = function() {
  return Hn.Date.now();
}, v1 = "Expected a function", b1 = Math.max, y1 = Math.min;
function _1(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(v1);
  t = ic(t) || 0, Er(n) && (d = !!n.leading, m = "maxWait" in n, a = m ? b1(ic(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function y(T) {
    var x = r, Y = o;
    return r = o = void 0, u = T, s = e.apply(Y, x), s;
  }
  function g(T) {
    return u = T, i = setTimeout(f, t), d ? y(T) : s;
  }
  function v(T) {
    var x = T - l, Y = T - u, Z = t - x;
    return m ? y1(Z, a - Y) : Z;
  }
  function A(T) {
    var x = T - l, Y = T - u;
    return l === void 0 || x >= t || x < 0 || m && Y >= a;
  }
  function f() {
    var T = Ss();
    if (A(T))
      return O(T);
    i = setTimeout(f, v(T));
  }
  function O(T) {
    return i = void 0, h && r ? y(T) : (r = o = void 0, s);
  }
  function R() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function C() {
    return i === void 0 ? s : O(Ss());
  }
  function w() {
    var T = Ss(), x = A(T);
    if (r = arguments, o = this, l = T, x) {
      if (i === void 0)
        return g(l);
      if (m)
        return clearTimeout(i), i = setTimeout(f, t), y(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return w.cancel = R, w.flush = C, w;
}
function w1(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Av(e, g1(t), o);
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
function ar(e) {
  return e == null;
}
function k1(e) {
  return e === void 0;
}
function T1(e, t, n, r) {
  if (!Er(e))
    return e;
  t = Xa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = ea(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = Er(d) ? d : yl(t[o + 1]) ? [] : {});
    }
    Rv(i, l, u), i = i[l];
  }
  return e;
}
function S1(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = El(e, s);
    n(i, s) && T1(a, Xa(s, e), i);
  }
  return a;
}
function E1(e, t) {
  return S1(e, t, function(n, r) {
    return Ad(e, r);
  });
}
var A1 = ib(function(e, t) {
  return e == null ? {} : E1(e, t);
});
const $n = (e) => e === void 0, Sr = (e) => typeof e == "boolean", Be = (e) => typeof e == "number", _n = (e) => typeof Element > "u" ? !1 : e instanceof Element, C1 = (e) => Vt(e) ? !Number.isNaN(Number(e)) : !1;
var I1 = Object.defineProperty, O1 = Object.defineProperties, L1 = Object.getOwnPropertyDescriptors, Oc = Object.getOwnPropertySymbols, x1 = Object.prototype.hasOwnProperty, R1 = Object.prototype.propertyIsEnumerable, Lc = (e, t, n) => t in e ? I1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, N1 = (e, t) => {
  for (var n in t || (t = {}))
    x1.call(t, n) && Lc(e, n, t[n]);
  if (Oc)
    for (var n of Oc(t))
      R1.call(t, n) && Lc(e, n, t[n]);
  return e;
}, P1 = (e, t) => O1(e, L1(t));
function $1(e, t) {
  var n;
  const r = Tr();
  return bu(() => {
    r.value = e();
  }, P1(N1({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Js(r);
}
var xc;
const wt = typeof window < "u", M1 = (e) => typeof e == "string", Cd = () => {
}, Ks = wt && ((xc = window?.navigator) == null ? void 0 : xc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Al(e) {
  return typeof e == "function" ? e() : c(e);
}
function D1(e) {
  return e;
}
function ta(e) {
  return Df() ? (Ff(e), !0) : !1;
}
function F1(e, t = !0) {
  Kt() ? vt(e) : t ? e() : mt(e);
}
function Id(e, t, n = {}) {
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
    }, Al(t));
  }
  return r && (o.value = !0, wt && l()), ta(i), {
    isPending: Js(o),
    start: l,
    stop: i
  };
}
function nr(e) {
  var t;
  const n = Al(e);
  return (t = n?.$el) != null ? t : n;
}
const Ja = wt ? window : void 0;
function wn(...e) {
  let t, n, r, o;
  if (M1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ja) : [t, n, r, o] = e, !t)
    return Cd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, m, h, y) => (d.addEventListener(m, h, y), () => d.removeEventListener(m, h, y)), l = Ce(() => [nr(t), Al(o)], ([d, m]) => {
    s(), d && a.push(...n.flatMap((h) => r.map((y) => i(d, h, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return ta(u), u;
}
let Rc = !1;
function z1(e, t, n = {}) {
  const { window: r = Ja, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Ks && !Rc && (Rc = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", Cd)));
  let i = !0;
  const l = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === h.target || h.composedPath().includes(g));
    {
      const g = nr(y);
      return g && (h.target === g || h.composedPath().includes(g));
    }
  }), d = [
    wn(r, "click", (h) => {
      const y = nr(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !l(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: a }),
    wn(r, "pointerdown", (h) => {
      const y = nr(e);
      y && (i = !h.composedPath().includes(y) && !l(h));
    }, { passive: !0 }),
    s && wn(r, "blur", (h) => {
      var y;
      const g = nr(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => d.forEach((h) => h());
}
function Od(e, t = !1) {
  const n = G(), r = () => n.value = !!e();
  return r(), F1(r, t), n;
}
const Nc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pc = "__vueuse_ssr_handlers__";
Nc[Pc] = Nc[Pc] || {};
var $c = Object.getOwnPropertySymbols, B1 = Object.prototype.hasOwnProperty, V1 = Object.prototype.propertyIsEnumerable, j1 = (e, t) => {
  var n = {};
  for (var r in e)
    B1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $c)
    for (var r of $c(e))
      t.indexOf(r) < 0 && V1.call(e, r) && (n[r] = e[r]);
  return n;
};
function Nn(e, t, n = {}) {
  const r = n, { window: o = Ja } = r, a = j1(r, ["window"]);
  let s;
  const i = Od(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ce(() => nr(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return ta(d), {
    isSupported: i,
    stop: d
  };
}
var Mc = Object.getOwnPropertySymbols, U1 = Object.prototype.hasOwnProperty, H1 = Object.prototype.propertyIsEnumerable, W1 = (e, t) => {
  var n = {};
  for (var r in e)
    U1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Mc)
    for (var r of Mc(e))
      t.indexOf(r) < 0 && H1.call(e, r) && (n[r] = e[r]);
  return n;
};
function G1(e, t, n = {}) {
  const r = n, { window: o = Ja } = r, a = W1(r, ["window"]);
  let s;
  const i = Od(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ce(() => nr(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return ta(d), {
    isSupported: i,
    stop: d
  };
}
var Dc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Dc || (Dc = {}));
var K1 = Object.defineProperty, Fc = Object.getOwnPropertySymbols, q1 = Object.prototype.hasOwnProperty, Y1 = Object.prototype.propertyIsEnumerable, zc = (e, t, n) => t in e ? K1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Z1 = (e, t) => {
  for (var n in t || (t = {}))
    q1.call(t, n) && zc(e, n, t[n]);
  if (Fc)
    for (var n of Fc(t))
      Y1.call(t, n) && zc(e, n, t[n]);
  return e;
};
const X1 = {
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
Z1({
  linear: D1
}, X1);
class Q1 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Cl(e, t) {
  throw new Q1(`[${e}] ${t}`);
}
const Bc = {
  current: 0
}, Vc = G(0), Ld = 2e3, jc = Symbol("elZIndexContextKey"), xd = Symbol("zIndexContextKey"), Rd = (e) => {
  const t = Kt() ? je(jc, Bc) : Bc, n = e || (Kt() ? je(xd, void 0) : void 0), r = P(() => {
    const s = c(n);
    return Be(s) ? s : Ld;
  }), o = P(() => r.value + Vc.value), a = () => (t.current++, Vc.value = t.current, o.value);
  return !wt && je(jc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var J1 = {
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
const ey = (e) => (t, n) => ty(t, n, c(e)), ty = (e, t, n) => kr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), ny = (e) => {
  const t = P(() => c(e).name), n = lo(e) ? e : G(e);
  return {
    lang: t,
    locale: n,
    t: ey(e)
  };
}, Nd = Symbol("localeContextKey"), Il = (e) => {
  const t = e || je(Nd, G());
  return ny(P(() => t.value || J1));
}, Pd = "__epPropKey", Se = (e) => e, ry = (e) => an(e) && !!e[Pd], es = (e, t) => {
  if (!an(e) || ry(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), nc(e, "default") && m.push(o), d || (d = m.includes(u))), s && (d || (d = s(u))), !d && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        zf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Pd]: !0
  };
  return nc(e, "default") && (l.default = o), l;
}, Je = (e) => $a(Object.entries(e).map(([t, n]) => [
  t,
  es(n, t)
])), Ol = ["", "default", "small", "large"], ts = es({
  type: String,
  values: Ol,
  required: !1
}), $d = Symbol("size"), oy = () => {
  const e = je($d, {});
  return P(() => c(e.size) || "");
}, Md = Symbol("emptyValuesContextKey"), ay = ["", void 0, null], sy = void 0, Dd = Je({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => lt(e) ? !e() : !e
  }
}), ly = (e, t) => {
  const n = Kt() ? je(Md, G({})) : G({}), r = P(() => e.emptyValues || n.value.emptyValues || ay), o = P(() => lt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : lt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : sy), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Uc = (e) => Object.keys(e), Ma = G();
function Fd(e, t = void 0) {
  return Kt() ? je(ud, Ma) : Ma;
}
function zd(e, t) {
  const n = Fd(), r = Tt(e, P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Sa;
  })), o = Il(P(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Rd(P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Ld;
  })), s = P(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Bd(P(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Bd = (e, t, n = !1) => {
  var r;
  const o = !!Kt(), a = o ? Fd() : void 0, s = (r = void 0) != null ? r : o ? Bn : void 0;
  if (!s)
    return;
  const i = P(() => {
    const l = c(e);
    return a?.value ? iy(a.value, l) : l;
  });
  return s(ud, i), s(Nd, P(() => i.value.locale)), s(dd, P(() => i.value.namespace)), s(xd, P(() => i.value.zIndex)), s($d, {
    size: P(() => i.value.size || "")
  }), s(Md, P(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Ma.value) && (Ma.value = i.value), i;
}, iy = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Uc(e), ...Uc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, xt = "update:modelValue", ir = "change", sr = "input";
var rt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function po(e, t = "px") {
  if (!e)
    return "";
  if (Be(e) || C1(e))
    return `${e}${t}`;
  if (Vt(e))
    return e;
}
function cy(e, t) {
  if (!wt)
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
const Tn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Vd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), jd = (e) => (e.install = Ko, e), uy = Je({
  size: {
    type: Se([Number, String])
  },
  color: {
    type: String
  }
}), dy = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), fy = /* @__PURE__ */ ce({
  ...dy,
  props: uy,
  setup(e) {
    const t = e, n = Tt("icon"), r = P(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: $n(o) ? void 0 : po(o),
        "--color": a
      };
    });
    return (o, a) => (N(), W("i", io({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Ae(o.$slots, "default")
    ], 16));
  }
});
var py = /* @__PURE__ */ rt(fy, [["__file", "icon.vue"]]);
const _t = Tn(py);
/*! Element Plus Icons Vue v2.3.1 */
var my = /* @__PURE__ */ ce({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ud = my, hy = /* @__PURE__ */ ce({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), gy = hy, vy = /* @__PURE__ */ ce({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (N(), W("svg", {
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
}), by = vy, yy = /* @__PURE__ */ ce({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), _y = yy, wy = /* @__PURE__ */ ce({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (N(), W("svg", {
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
}), Ll = wy, ky = /* @__PURE__ */ ce({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Da = ky, Ty = /* @__PURE__ */ ce({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (N(), W("svg", {
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
}), Sy = Ty, Ey = /* @__PURE__ */ ce({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ay = Ey, Cy = /* @__PURE__ */ ce({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Hd = Cy, Iy = /* @__PURE__ */ ce({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Oy = Iy, Ly = /* @__PURE__ */ ce({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), xy = Ly, Ry = /* @__PURE__ */ ce({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ny = Ry, Py = /* @__PURE__ */ ce({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), $y = Py, My = /* @__PURE__ */ ce({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (N(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Dy = My;
const Mn = Se([
  String,
  Object,
  Function
]), Fy = {
  Close: Da
}, zy = {
  Close: Da
}, Fa = {
  success: Ny,
  warning: Dy,
  error: _y,
  info: Ay
}, Wd = {
  validating: Hd,
  success: by,
  error: Ll
}, Gd = () => wt && /firefox/i.test(window.navigator.userAgent);
let Jt;
const By = {
  height: "0",
  visibility: "hidden",
  overflow: Gd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Vy = [
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
function jy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Vy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Hc(e, t = 1, n) {
  var r;
  Jt || (Jt = document.createElement("textarea"), document.body.appendChild(Jt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = jy(e);
  i.forEach(([m, h]) => Jt?.style.setProperty(m, h)), Object.entries(By).forEach(([m, h]) => Jt?.style.setProperty(m, h, "important")), Jt.value = e.value || e.placeholder || "";
  let l = Jt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Jt.value = "";
  const d = Jt.scrollHeight - o;
  if (Be(t)) {
    let m = d * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (Be(n)) {
    let m = d * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = Jt.parentNode) == null || r.removeChild(Jt), Jt = void 0, u;
}
const Kd = (e) => e, Uy = Je({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Gr = (e) => A1(Uy, e), Hy = Je({
  id: {
    type: String,
    default: void 0
  },
  size: ts,
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
    type: Se([Object, Array, String]),
    default: () => Kd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Gr(["ariaLabel"])
}), Wy = {
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
}, Gy = ["class", "style"], Ky = /^on[A-Z]/, qy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = P(() => (n?.value || []).concat(Gy)), o = Kt();
  return o ? P(() => {
    var a;
    return $a(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && Ky.test(s))));
  }) : P(() => ({}));
}, xl = Symbol("formContextKey"), za = Symbol("formItemContextKey"), Wc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Yy = Symbol("elIdInjection"), qd = () => Kt() ? je(Yy, Wc) : Wc, ns = (e) => {
  const t = qd(), n = bl();
  return $1(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
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
  n || (n = G(!1)), r || (r = G(!1));
  const o = G();
  let a;
  const s = P(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return vt(() => {
    a = Ce([Jn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : ns().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), ja(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Yd = (e) => {
  const t = Kt();
  return P(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, na = (e, t = {}) => {
  const n = G(void 0), r = t.prop ? n : Yd("size"), o = t.global ? n : oy(), a = t.form ? { size: void 0 } : je(xl, void 0), s = t.formItem ? { size: void 0 } : je(za, void 0);
  return P(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, Nl = (e) => {
  const t = Yd("disabled"), n = je(xl, void 0);
  return P(() => t.value || c(e) || n?.disabled || !1);
};
function Zd(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Kt(), { emit: s } = a, i = Tr(), l = G(!1), u = (h) => {
    lt(t) && t(h) || l.value || (l.value = !0, s("focus", h), n?.());
  }, d = (h) => {
    var y;
    lt(r) && r(h) || h.relatedTarget && ((y = i.value) != null && y.contains(h.relatedTarget)) || (l.value = !1, s("blur", h), o?.());
  }, m = () => {
    var h, y;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Ce(i, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), wn(i, "focus", u, !0), wn(i, "blur", d, !0), wn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const Zy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Xd({
  afterComposition: e,
  emit: t
}) {
  const n = G(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !Zy(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, mt(() => e(i)));
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
function Xy(e) {
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
const Qy = "ElInput", Jy = ce({
  name: Qy,
  inheritAttrs: !1
}), e_ = /* @__PURE__ */ ce({
  ...Jy,
  props: Hy,
  emits: Wy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Bf(), a = qy(), s = Vf(), i = P(() => [
      r.type === "textarea" ? v.b() : g.b(),
      g.m(h.value),
      g.is("disabled", y.value),
      g.is("exceed", Ue.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: me.value && X.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = P(() => [
      g.e("wrapper"),
      g.is("focus", Y.value)
    ]), { form: u, formItem: d } = rs(), { inputId: m } = Rl(r, {
      formItemContext: d
    }), h = na(), y = Nl(), g = Tt("input"), v = Tt("textarea"), A = Tr(), f = Tr(), O = G(!1), R = G(!1), C = G(), w = Tr(r.inputStyle), T = P(() => A.value || f.value), { wrapperRef: x, isFocused: Y, handleFocus: Z, handleBlur: se } = Zd(T, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var E;
        r.validateEvent && ((E = d?.validate) == null || E.call(d, "blur").catch((z) => void 0));
      }
    }), ge = P(() => {
      var E;
      return (E = u?.statusIcon) != null ? E : !1;
    }), ae = P(() => d?.validateState || ""), ye = P(() => ae.value && Wd[ae.value]), _e = P(() => R.value ? $y : Sy), B = P(() => [
      o.style
    ]), J = P(() => [
      r.inputStyle,
      w.value,
      { resize: r.resize }
    ]), H = P(() => ar(r.modelValue) ? "" : String(r.modelValue)), me = P(() => r.clearable && !y.value && !r.readonly && !!H.value && (Y.value || O.value)), X = P(() => r.showPassword && !y.value && !!H.value && (!!H.value || Y.value)), K = P(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), Pe = P(() => H.value.length), Ue = P(() => !!K.value && Pe.value > Number(r.maxlength)), be = P(() => !!s.suffix || !!r.suffixIcon || me.value || r.showPassword || K.value || !!ae.value && ge.value), [we, te] = Xy(A);
    Nn(f, (E) => {
      if (ve(), !K.value || r.resize !== "both")
        return;
      const z = E[0], { width: ke } = z.contentRect;
      C.value = {
        right: `calc(100% - ${ke + 15 + 6}px)`
      };
    });
    const le = () => {
      const { type: E, autosize: z } = r;
      if (!(!wt || E !== "textarea" || !f.value))
        if (z) {
          const ke = an(z) ? z.minRows : void 0, Re = an(z) ? z.maxRows : void 0, Xe = Hc(f.value, ke, Re);
          w.value = {
            overflowY: "hidden",
            ...Xe
          }, mt(() => {
            f.value.offsetHeight, w.value = Xe;
          });
        } else
          w.value = {
            minHeight: Hc(f.value).minHeight
          };
    }, ve = ((E) => {
      let z = !1;
      return () => {
        var ke;
        if (z || !r.autosize)
          return;
        ((ke = f.value) == null ? void 0 : ke.offsetParent) === null || (E(), z = !0);
      };
    })(le), et = () => {
      const E = T.value, z = r.formatter ? r.formatter(H.value) : H.value;
      !E || E.value === z || (E.value = z);
    }, ut = async (E) => {
      we();
      let { value: z } = E.target;
      if (r.formatter && r.parser && (z = r.parser(z)), !Mt.value) {
        if (z === H.value) {
          et();
          return;
        }
        n(xt, z), n(sr, z), await mt(), et(), te();
      }
    }, qe = (E) => {
      let { value: z } = E.target;
      r.formatter && r.parser && (z = r.parser(z)), n(ir, z);
    }, {
      isComposing: Mt,
      handleCompositionStart: ot,
      handleCompositionUpdate: Ct,
      handleCompositionEnd: It
    } = Xd({ emit: n, afterComposition: ut }), Ge = () => {
      we(), R.value = !R.value, setTimeout(te);
    }, St = () => {
      var E;
      return (E = T.value) == null ? void 0 : E.focus();
    }, k = () => {
      var E;
      return (E = T.value) == null ? void 0 : E.blur();
    }, L = (E) => {
      O.value = !1, n("mouseleave", E);
    }, V = (E) => {
      O.value = !0, n("mouseenter", E);
    }, re = (E) => {
      n("keydown", E);
    }, Le = () => {
      var E;
      (E = T.value) == null || E.select();
    }, ue = () => {
      n(xt, ""), n(ir, ""), n("clear"), n(sr, "");
    };
    return Ce(() => r.modelValue, () => {
      var E;
      mt(() => le()), r.validateEvent && ((E = d?.validate) == null || E.call(d, "change").catch((z) => void 0));
    }), Ce(H, () => et()), Ce(() => r.type, async () => {
      await mt(), et(), le();
    }), vt(() => {
      !r.formatter && r.parser, et(), mt(le);
    }), t({
      input: A,
      textarea: f,
      ref: T,
      textareaStyle: J,
      autosize: Jn(r, "autosize"),
      isComposing: Mt,
      focus: St,
      blur: k,
      select: Le,
      clear: ue,
      resizeTextarea: le
    }), (E, z) => (N(), W("div", {
      class: q([
        c(i),
        {
          [c(g).bm("group", "append")]: E.$slots.append,
          [c(g).bm("group", "prepend")]: E.$slots.prepend
        }
      ]),
      style: Nt(c(B)),
      onMouseenter: V,
      onMouseleave: L
    }, [
      ee(" input "),
      E.type !== "textarea" ? (N(), W(pt, { key: 0 }, [
        ee(" prepend slot "),
        E.$slots.prepend ? (N(), W("div", {
          key: 0,
          class: q(c(g).be("group", "prepend"))
        }, [
          Ae(E.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: x,
          class: q(c(l))
        }, [
          ee(" prefix slot "),
          E.$slots.prefix || E.prefixIcon ? (N(), W("span", {
            key: 0,
            class: q(c(g).e("prefix"))
          }, [
            b("span", {
              class: q(c(g).e("prefix-inner"))
            }, [
              Ae(E.$slots, "prefix"),
              E.prefixIcon ? (N(), he(c(_t), {
                key: 0,
                class: q(c(g).e("icon"))
              }, {
                default: pe(() => [
                  (N(), he(Wt(E.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0),
          b("input", io({
            id: c(m),
            ref_key: "input",
            ref: A,
            class: c(g).e("inner")
          }, c(a), {
            minlength: E.minlength,
            maxlength: E.maxlength,
            type: E.showPassword ? R.value ? "text" : "password" : E.type,
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
            onCompositionstart: c(ot),
            onCompositionupdate: c(Ct),
            onCompositionend: c(It),
            onInput: ut,
            onChange: qe,
            onKeydown: re
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(be) ? (N(), W("span", {
            key: 1,
            class: q(c(g).e("suffix"))
          }, [
            b("span", {
              class: q(c(g).e("suffix-inner"))
            }, [
              !c(me) || !c(X) || !c(K) ? (N(), W(pt, { key: 0 }, [
                Ae(E.$slots, "suffix"),
                E.suffixIcon ? (N(), he(c(_t), {
                  key: 0,
                  class: q(c(g).e("icon"))
                }, {
                  default: pe(() => [
                    (N(), he(Wt(E.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              c(me) ? (N(), he(c(_t), {
                key: 1,
                class: q([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: nt(c(Ko), ["prevent"]),
                onClick: ue
              }, {
                default: pe(() => [
                  M(c(Ll))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(X) ? (N(), he(c(_t), {
                key: 2,
                class: q([c(g).e("icon"), c(g).e("password")]),
                onClick: Ge
              }, {
                default: pe(() => [
                  (N(), he(Wt(c(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(K) ? (N(), W("span", {
                key: 3,
                class: q(c(g).e("count"))
              }, [
                b("span", {
                  class: q(c(g).e("count-inner"))
                }, D(c(Pe)) + " / " + D(E.maxlength), 3)
              ], 2)) : ee("v-if", !0),
              c(ae) && c(ye) && c(ge) ? (N(), he(c(_t), {
                key: 4,
                class: q([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(ae) === "validating")
                ])
              }, {
                default: pe(() => [
                  (N(), he(Wt(c(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        E.$slots.append ? (N(), W("div", {
          key: 1,
          class: q(c(g).be("group", "append"))
        }, [
          Ae(E.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (N(), W(pt, { key: 1 }, [
        ee(" textarea "),
        b("textarea", io({
          id: c(m),
          ref_key: "textarea",
          ref: f,
          class: [c(v).e("inner"), c(g).is("focus", c(Y))]
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
          onCompositionstart: c(ot),
          onCompositionupdate: c(Ct),
          onCompositionend: c(It),
          onInput: ut,
          onFocus: c(Z),
          onBlur: c(se),
          onChange: qe,
          onKeydown: re
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(K) ? (N(), W("span", {
          key: 0,
          style: Nt(C.value),
          class: q(c(g).e("count"))
        }, D(c(Pe)) + " / " + D(E.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var t_ = /* @__PURE__ */ rt(e_, [["__file", "input.vue"]]);
const n_ = Tn(t_), no = 4, r_ = {
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
}, o_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Pl = Symbol("scrollbarContextKey"), a_ = Je({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), s_ = "Thumb", l_ = /* @__PURE__ */ ce({
  __name: "thumb",
  props: a_,
  setup(e) {
    const t = e, n = je(Pl), r = Tt("scrollbar");
    n || Cl(s_, "can not inject scrollbar context");
    const o = G(), a = G(), s = G({}), i = G(!1);
    let l = !1, u = !1, d = wt ? document.onselectstart : null;
    const m = P(() => r_[t.vertical ? "vertical" : "horizontal"]), h = P(() => o_({
      size: t.size,
      move: t.move,
      bar: m.value
    })), y = P(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), g = (T) => {
      var x;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (x = window.getSelection()) == null || x.removeAllRanges(), A(T);
      const Y = T.currentTarget;
      Y && (s.value[m.value.axis] = Y[m.value.offset] - (T[m.value.client] - Y.getBoundingClientRect()[m.value.direction]));
    }, v = (T) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const x = Math.abs(T.target.getBoundingClientRect()[m.value.direction] - T[m.value.client]), Y = a.value[m.value.offset] / 2, Z = (x - Y) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = Z * n.wrapElement[m.value.scrollSize] / 100;
    }, A = (T) => {
      T.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", O), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (T) => {
      if (!o.value || !a.value || l === !1)
        return;
      const x = s.value[m.value.axis];
      if (!x)
        return;
      const Y = (o.value.getBoundingClientRect()[m.value.direction] - T[m.value.client]) * -1, Z = a.value[m.value.offset] - x, se = (Y - Z) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = se * n.wrapElement[m.value.scrollSize] / 100;
    }, O = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", O), w(), u && (i.value = !1);
    }, R = () => {
      u = !1, i.value = !!t.size;
    }, C = () => {
      u = !0, i.value = l;
    };
    Un(() => {
      w(), document.removeEventListener("mouseup", O);
    });
    const w = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return wn(Jn(n, "scrollbarElement"), "mousemove", R), wn(Jn(n, "scrollbarElement"), "mouseleave", C), (T, x) => (N(), he(_o, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: pe(() => [
        At(b("div", {
          ref_key: "instance",
          ref: o,
          class: q([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: v
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: q(c(r).e("thumb")),
            style: Nt(c(h)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [lr, T.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Gc = /* @__PURE__ */ rt(l_, [["__file", "thumb.vue"]]);
const i_ = Je({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), c_ = /* @__PURE__ */ ce({
  __name: "bar",
  props: i_,
  setup(e, { expose: t }) {
    const n = e, r = je(Pl), o = G(0), a = G(0), s = G(""), i = G(""), l = G(1), u = G(1);
    return t({
      handleScroll: (h) => {
        if (h) {
          const y = h.offsetHeight - no, g = h.offsetWidth - no;
          a.value = h.scrollTop * 100 / y * l.value, o.value = h.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const h = r?.wrapElement;
        if (!h)
          return;
        const y = h.offsetHeight - no, g = h.offsetWidth - no, v = y ** 2 / h.scrollHeight, A = g ** 2 / h.scrollWidth, f = Math.max(v, n.minSize), O = Math.max(A, n.minSize);
        l.value = v / (y - v) / (f / (y - f)), u.value = A / (g - A) / (O / (g - O)), i.value = f + no < y ? `${f}px` : "", s.value = O + no < g ? `${O}px` : "";
      }
    }), (h, y) => (N(), W(pt, null, [
      M(Gc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      M(Gc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var u_ = /* @__PURE__ */ rt(c_, [["__file", "bar.vue"]]);
const d_ = Je({
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
  ...Gr(["ariaLabel", "ariaOrientation"])
}), f_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Be)
}, p_ = "ElScrollbar", m_ = ce({
  name: p_
}), h_ = /* @__PURE__ */ ce({
  ...m_,
  props: d_,
  emits: f_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Tt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = G(), d = G(), m = G(), h = G(), y = P(() => {
      const w = {};
      return r.height && (w.height = po(r.height)), r.maxHeight && (w.maxHeight = po(r.maxHeight)), [r.wrapStyle, w];
    }), g = P(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = P(() => [o.e("view"), r.viewClass]), A = () => {
      var w;
      d.value && ((w = h.value) == null || w.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(w, T) {
      an(w) ? d.value.scrollTo(w) : Be(w) && Be(T) && d.value.scrollTo(w, T);
    }
    const O = (w) => {
      Be(w) && (d.value.scrollTop = w);
    }, R = (w) => {
      Be(w) && (d.value.scrollLeft = w);
    }, C = () => {
      var w;
      (w = h.value) == null || w.update();
    };
    return Ce(() => r.noresize, (w) => {
      w ? (a?.(), s?.()) : ({ stop: a } = Nn(m, C), s = wn("resize", C));
    }, { immediate: !0 }), Ce(() => [r.maxHeight, r.height], () => {
      r.native || mt(() => {
        var w;
        C(), d.value && ((w = h.value) == null || w.handleScroll(d.value));
      });
    }), Bn(Pl, Fr({
      scrollbarElement: u,
      wrapElement: d
    })), jf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), vt(() => {
      r.native || mt(() => {
        C();
      });
    }), yu(() => C()), t({
      wrapRef: d,
      update: C,
      scrollTo: f,
      setScrollTop: O,
      setScrollLeft: R,
      handleScroll: A
    }), (w, T) => (N(), W("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: q(c(o).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: q(c(g)),
        style: Nt(c(y)),
        tabindex: w.tabindex,
        onScroll: A
      }, [
        (N(), he(Wt(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: m,
          class: q(c(v)),
          style: Nt(w.viewStyle),
          role: w.role,
          "aria-label": w.ariaLabel,
          "aria-orientation": w.ariaOrientation
        }, {
          default: pe(() => [
            Ae(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      w.native ? ee("v-if", !0) : (N(), he(u_, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var g_ = /* @__PURE__ */ rt(h_, [["__file", "scrollbar.vue"]]);
const v_ = Tn(g_), $l = Symbol("popper"), Qd = Symbol("popperContent"), b_ = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Jd = Je({
  role: {
    type: String,
    values: b_,
    default: "tooltip"
  }
}), y_ = ce({
  name: "ElPopper",
  inheritAttrs: !1
}), __ = /* @__PURE__ */ ce({
  ...y_,
  props: Jd,
  setup(e, { expose: t }) {
    const n = e, r = G(), o = G(), a = G(), s = G(), i = P(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Bn($l, l), (u, d) => Ae(u.$slots, "default");
  }
});
var w_ = /* @__PURE__ */ rt(__, [["__file", "popper.vue"]]);
const ef = Je({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), k_ = ce({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), T_ = /* @__PURE__ */ ce({
  ...k_,
  props: ef,
  setup(e, { expose: t }) {
    const n = e, r = Tt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = je(Qd, void 0);
    return Ce(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Un(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (N(), W("span", {
      ref_key: "arrowRef",
      ref: a,
      class: q(c(r).e("arrow")),
      style: Nt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var S_ = /* @__PURE__ */ rt(T_, [["__file", "arrow.vue"]]);
const tf = Je({
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
}), nf = Symbol("elForwardRef"), E_ = (e) => {
  Bn(nf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, A_ = (e) => ({
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
}, C_ = "ElOnlyChild", I_ = ce({
  name: C_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = je(nf), a = A_((r = o?.setForwardRef) != null ? r : Ko);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = rf(i);
      return l ? At(Uf(l, n), [[a]]) : null;
    };
  }
});
function rf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (an(n))
      switch (n.type) {
        case Hf:
          continue;
        case vu:
        case "svg":
          return Kc(n);
        case pt:
          return rf(n.children);
        default:
          return n;
      }
    return Kc(n);
  }
  return null;
}
function Kc(e) {
  const t = Tt("only-child");
  return M("span", {
    class: t.e("content")
  }, [e]);
}
const O_ = ce({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), L_ = /* @__PURE__ */ ce({
  ...O_,
  props: tf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = je($l, void 0);
    E_(o);
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
    return vt(() => {
      Ce(() => n.virtualRef, (m) => {
        m && (o.value = nr(m));
      }, {
        immediate: !0
      }), Ce(o, (m, h) => {
        u?.(), u = void 0, _n(m) && (d.forEach((y) => {
          var g;
          const v = n[y];
          v && (m.addEventListener(y.slice(2).toLowerCase(), v), (g = h?.removeEventListener) == null || g.call(h, y.slice(2).toLowerCase(), v));
        }), qs(m) && (u = Ce([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            ar(y[v]) ? m.removeAttribute(g) : m.setAttribute(g, y[v]);
          });
        }, { immediate: !0 }))), _n(h) && qs(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => h.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Un(() => {
      if (u?.(), u = void 0, o.value && _n(o.value)) {
        const m = o.value;
        d.forEach((h) => {
          const y = n[h];
          y && m.removeEventListener(h.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, h) => m.virtualTriggering ? ee("v-if", !0) : (N(), he(c(I_), io({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: pe(() => [
        Ae(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var x_ = /* @__PURE__ */ rt(L_, [["__file", "trigger.vue"]]);
const Es = "focus-trap.focus-after-trapped", As = "focus-trap.focus-after-released", R_ = "focus-trap.focusout-prevented", qc = {
  cancelable: !0,
  bubbles: !1
}, N_ = {
  cancelable: !0,
  bubbles: !1
}, Yc = "focusAfterTrapped", Zc = "focusAfterReleased", P_ = Symbol("elFocusTrap"), Ml = G(), os = G(0), Dl = G(0);
let ha = 0;
const of = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Xc = (e, t) => {
  for (const n of e)
    if (!$_(n, t))
      return n;
}, $_ = (e, t) => {
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
}, M_ = (e) => {
  const t = of(e), n = Xc(t, e), r = Xc(t.reverse(), e);
  return [n, r];
}, D_ = (e) => e instanceof HTMLInputElement && "select" in e, Zn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    _n(e) && !qs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Dl.value = window.performance.now(), e !== n && D_(e) && t && e.select(), _n(e) && r && e.removeAttribute("tabindex");
  }
};
function Qc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const F_ = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Qc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Qc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, z_ = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Zn(r, t), document.activeElement !== n)
      return;
}, Jc = F_(), B_ = () => os.value > Dl.value, ga = () => {
  Ml.value = "pointer", os.value = window.performance.now();
}, eu = () => {
  Ml.value = "keyboard", os.value = window.performance.now();
}, V_ = () => (vt(() => {
  ha === 0 && (document.addEventListener("mousedown", ga), document.addEventListener("touchstart", ga), document.addEventListener("keydown", eu)), ha++;
}), Un(() => {
  ha--, ha <= 0 && (document.removeEventListener("mousedown", ga), document.removeEventListener("touchstart", ga), document.removeEventListener("keydown", eu));
}), {
  focusReason: Ml,
  lastUserFocusTimestamp: os,
  lastAutomatedFocusTimestamp: Dl
}), va = (e) => new CustomEvent(R_, {
  ...N_,
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
let so = [];
const tu = (e) => {
  e.code === Fn.esc && so.forEach((t) => t(e));
}, j_ = (e) => {
  vt(() => {
    so.length === 0 && document.addEventListener("keydown", tu), wt && so.push(e);
  }), Un(() => {
    so = so.filter((t) => t !== e), so.length === 0 && wt && document.removeEventListener("keydown", tu);
  });
}, U_ = ce({
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
    Yc,
    Zc,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = G();
    let r, o;
    const { focusReason: a } = V_();
    j_((g) => {
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
      const { code: v, altKey: A, ctrlKey: f, metaKey: O, currentTarget: R, shiftKey: C } = g, { loop: w } = e, T = v === Fn.tab && !A && !f && !O, x = document.activeElement;
      if (T && x) {
        const Y = R, [Z, se] = M_(Y);
        if (Z && se) {
          if (!C && x === se) {
            const ae = va({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (g.preventDefault(), w && Zn(Z, !0));
          } else if (C && [Z, Y].includes(x)) {
            const ae = va({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (g.preventDefault(), w && Zn(se, !0));
          }
        } else if (x === Y) {
          const ae = va({
            focusReason: a.value
          });
          t("focusout-prevented", ae), ae.defaultPrevented || g.preventDefault();
        }
      }
    };
    Bn(P_, {
      focusTrapRef: n,
      onKeydown: i
    }), Ce(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Ce([n], ([g], [v]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", d), g.addEventListener("focusout", m)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", m));
    });
    const l = (g) => {
      t(Yc, g);
    }, u = (g) => t(Zc, g), d = (g) => {
      const v = c(n);
      if (!v)
        return;
      const A = g.target, f = g.relatedTarget, O = A && v.contains(A);
      e.trapped || f && v.contains(f) || (r = f), O && t("focusin", g), !s.paused && e.trapped && (O ? o = A : Zn(o, !0));
    }, m = (g) => {
      const v = c(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const A = g.relatedTarget;
          !ar(A) && !v.contains(A) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = va({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Zn(o, !0);
            }
          }, 0);
        } else {
          const A = g.target;
          A && v.contains(A) || t("focusout", g);
        }
    };
    async function h() {
      await mt();
      const g = c(n);
      if (g) {
        Jc.push(s);
        const v = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !g.contains(v)) {
          const f = new Event(Es, qc);
          g.addEventListener(Es, l), g.dispatchEvent(f), f.defaultPrevented || mt(() => {
            let O = e.focusStartEl;
            Vt(O) || (Zn(O), document.activeElement !== O && (O = "first")), O === "first" && z_(of(g), !0), (document.activeElement === v || O === "container") && Zn(g);
          });
        }
      }
    }
    function y() {
      const g = c(n);
      if (g) {
        g.removeEventListener(Es, l);
        const v = new CustomEvent(As, {
          ...qc,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(As, u), g.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !B_() || g.contains(document.activeElement)) && Zn(r ?? document.body), g.removeEventListener(As, u), Jc.remove(s);
      }
    }
    return vt(() => {
      e.trapped && h(), Ce(() => e.trapped, (g) => {
        g ? h() : y();
      });
    }), Un(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function H_(e, t, n, r, o, a) {
  return Ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var W_ = /* @__PURE__ */ rt(U_, [["render", H_], ["__file", "focus-trap.vue"]]), en = "top", dn = "bottom", fn = "right", tn = "left", Fl = "auto", ra = [en, dn, fn, tn], mo = "start", Zo = "end", G_ = "clippingParents", af = "viewport", No = "popper", K_ = "reference", nu = ra.reduce(function(e, t) {
  return e.concat([t + "-" + mo, t + "-" + Zo]);
}, []), as = [].concat(ra, [Fl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + mo, t + "-" + Zo]);
}, []), q_ = "beforeRead", Y_ = "read", Z_ = "afterRead", X_ = "beforeMain", Q_ = "main", J_ = "afterMain", ew = "beforeWrite", tw = "write", nw = "afterWrite", rw = [q_, Y_, Z_, X_, Q_, J_, ew, tw, nw];
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
function Vr(e) {
  var t = sn(e).Element;
  return e instanceof t || e instanceof Element;
}
function cn(e) {
  var t = sn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = sn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ow(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !cn(a) || !jn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function aw(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !cn(o) || !jn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var sf = { name: "applyStyles", enabled: !0, phase: "write", fn: ow, effect: aw, requires: ["computeStyles"] };
function zn(e) {
  return e.split("-")[0];
}
var Dr = Math.max, Ba = Math.min, ho = Math.round;
function Ys() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function lf() {
  return !/^((?!chrome|android).)*safari/i.test(Ys());
}
function go(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && cn(e) && (o = e.offsetWidth > 0 && ho(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ho(r.height) / e.offsetHeight || 1);
  var s = Vr(e) ? sn(e) : window, i = s.visualViewport, l = !lf() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
  return { width: m, height: h, top: d, right: u + m, bottom: d + h, left: u, x: u, y: d };
}
function Bl(e) {
  var t = go(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function cf(e, t) {
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
function cr(e) {
  return sn(e).getComputedStyle(e);
}
function sw(e) {
  return ["table", "td", "th"].indexOf(jn(e)) >= 0;
}
function Ir(e) {
  return ((Vr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ss(e) {
  return jn(e) === "html" ? e : e.assignedSlot || e.parentNode || (zl(e) ? e.host : null) || Ir(e);
}
function ru(e) {
  return !cn(e) || cr(e).position === "fixed" ? null : e.offsetParent;
}
function lw(e) {
  var t = /firefox/i.test(Ys()), n = /Trident/i.test(Ys());
  if (n && cn(e)) {
    var r = cr(e);
    if (r.position === "fixed") return null;
  }
  var o = ss(e);
  for (zl(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(jn(o)) < 0; ) {
    var a = cr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function oa(e) {
  for (var t = sn(e), n = ru(e); n && sw(n) && cr(n).position === "static"; ) n = ru(n);
  return n && (jn(n) === "html" || jn(n) === "body" && cr(n).position === "static") ? t : n || lw(e) || t;
}
function Vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bo(e, t, n) {
  return Dr(e, Ba(t, n));
}
function iw(e, t, n) {
  var r = Bo(e, t, n);
  return r > n ? n : r;
}
function uf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function df(e) {
  return Object.assign({}, uf(), e);
}
function ff(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var cw = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, df(typeof e != "number" ? e : ff(e, ra));
};
function uw(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = zn(n.placement), l = Vl(i), u = [tn, fn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = cw(o.padding, n), h = Bl(a), y = l === "y" ? en : tn, g = l === "y" ? dn : fn, v = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], A = s[l] - n.rects.reference[l], f = oa(a), O = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, R = v / 2 - A / 2, C = m[y], w = O - h[d] - m[g], T = O / 2 - h[d] / 2 + R, x = Bo(C, T, w), Y = l;
    n.modifiersData[r] = (t = {}, t[Y] = x, t.centerOffset = x - T, t);
  }
}
function dw(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || cf(t.elements.popper, o) && (t.elements.arrow = o));
}
var fw = { name: "arrow", enabled: !0, phase: "main", fn: uw, effect: dw, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function vo(e) {
  return e.split("-")[1];
}
var pw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function mw(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: ho(n * o) / o || 0, y: ho(r * o) / o || 0 };
}
function ou(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, h = s.x, y = h === void 0 ? 0 : h, g = s.y, v = g === void 0 ? 0 : g, A = typeof d == "function" ? d({ x: y, y: v }) : { x: y, y: v };
  y = A.x, v = A.y;
  var f = s.hasOwnProperty("x"), O = s.hasOwnProperty("y"), R = tn, C = en, w = window;
  if (u) {
    var T = oa(n), x = "clientHeight", Y = "clientWidth";
    if (T === sn(n) && (T = Ir(n), cr(T).position !== "static" && i === "absolute" && (x = "scrollHeight", Y = "scrollWidth")), T = T, o === en || (o === tn || o === fn) && a === Zo) {
      C = dn;
      var Z = m && T === w && w.visualViewport ? w.visualViewport.height : T[x];
      v -= Z - r.height, v *= l ? 1 : -1;
    }
    if (o === tn || (o === en || o === dn) && a === Zo) {
      R = fn;
      var se = m && T === w && w.visualViewport ? w.visualViewport.width : T[Y];
      y -= se - r.width, y *= l ? 1 : -1;
    }
  }
  var ge = Object.assign({ position: i }, u && pw), ae = d === !0 ? mw({ x: y, y: v }, sn(n)) : { x: y, y: v };
  if (y = ae.x, v = ae.y, l) {
    var ye;
    return Object.assign({}, ge, (ye = {}, ye[C] = O ? "0" : "", ye[R] = f ? "0" : "", ye.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", ye));
  }
  return Object.assign({}, ge, (t = {}, t[C] = O ? v + "px" : "", t[R] = f ? y + "px" : "", t.transform = "", t));
}
function hw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: zn(t.placement), variation: vo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ou(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ou(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var pf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: hw, data: {} }, ba = { passive: !0 };
function gw(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = sn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, ba);
  }), i && l.addEventListener("resize", n.update, ba), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ba);
    }), i && l.removeEventListener("resize", n.update, ba);
  };
}
var mf = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: gw, data: {} }, vw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ea(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return vw[t];
  });
}
var bw = { start: "end", end: "start" };
function au(e) {
  return e.replace(/start|end/g, function(t) {
    return bw[t];
  });
}
function jl(e) {
  var t = sn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ul(e) {
  return go(Ir(e)).left + jl(e).scrollLeft;
}
function yw(e, t) {
  var n = sn(e), r = Ir(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = lf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Ul(e), y: l };
}
function _w(e) {
  var t, n = Ir(e), r = jl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Dr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Dr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Ul(e), l = -r.scrollTop;
  return cr(o || n).direction === "rtl" && (i += Dr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Hl(e) {
  var t = cr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function hf(e) {
  return ["html", "body", "#document"].indexOf(jn(e)) >= 0 ? e.ownerDocument.body : cn(e) && Hl(e) ? e : hf(ss(e));
}
function Vo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = hf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = sn(r), s = o ? [a].concat(a.visualViewport || [], Hl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Vo(ss(s)));
}
function Zs(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function ww(e, t) {
  var n = go(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function su(e, t, n) {
  return t === af ? Zs(yw(e, n)) : Vr(t) ? ww(t, n) : Zs(_w(Ir(e)));
}
function kw(e) {
  var t = Vo(ss(e)), n = ["absolute", "fixed"].indexOf(cr(e).position) >= 0, r = n && cn(e) ? oa(e) : e;
  return Vr(r) ? t.filter(function(o) {
    return Vr(o) && cf(o, r) && jn(o) !== "body";
  }) : [];
}
function Tw(e, t, n, r) {
  var o = t === "clippingParents" ? kw(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = su(e, u, r);
    return l.top = Dr(d.top, l.top), l.right = Ba(d.right, l.right), l.bottom = Ba(d.bottom, l.bottom), l.left = Dr(d.left, l.left), l;
  }, su(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function gf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? zn(r) : null, a = r ? vo(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case en:
      l = { x: s, y: t.y - n.height };
      break;
    case dn:
      l = { x: s, y: t.y + t.height };
      break;
    case fn:
      l = { x: t.x + t.width, y: i };
      break;
    case tn:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Vl(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case mo:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? G_ : i, u = n.rootBoundary, d = u === void 0 ? af : u, m = n.elementContext, h = m === void 0 ? No : m, y = n.altBoundary, g = y === void 0 ? !1 : y, v = n.padding, A = v === void 0 ? 0 : v, f = df(typeof A != "number" ? A : ff(A, ra)), O = h === No ? K_ : No, R = e.rects.popper, C = e.elements[g ? O : h], w = Tw(Vr(C) ? C : C.contextElement || Ir(e.elements.popper), l, d, s), T = go(e.elements.reference), x = gf({ reference: T, element: R, placement: o }), Y = Zs(Object.assign({}, R, x)), Z = h === No ? Y : T, se = { top: w.top - Z.top + f.top, bottom: Z.bottom - w.bottom + f.bottom, left: w.left - Z.left + f.left, right: Z.right - w.right + f.right }, ge = e.modifiersData.offset;
  if (h === No && ge) {
    var ae = ge[o];
    Object.keys(se).forEach(function(ye) {
      var _e = [fn, dn].indexOf(ye) >= 0 ? 1 : -1, B = [en, dn].indexOf(ye) >= 0 ? "y" : "x";
      se[ye] += ae[B] * _e;
    });
  }
  return se;
}
function Sw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? as : l, d = vo(r), m = d ? i ? nu : nu.filter(function(g) {
    return vo(g) === d;
  }) : ra, h = m.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(g, v) {
    return g[v] = Xo(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[zn(v)], g;
  }, {});
  return Object.keys(y).sort(function(g, v) {
    return y[g] - y[v];
  });
}
function Ew(e) {
  if (zn(e) === Fl) return [];
  var t = Ea(e);
  return [au(e), t, au(t)];
}
function Aw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, v = n.allowedAutoPlacements, A = t.options.placement, f = zn(A), O = f === A, R = l || (O || !g ? [Ea(A)] : Ew(A)), C = [A].concat(R).reduce(function(we, te) {
      return we.concat(zn(te) === Fl ? Sw(t, { placement: te, boundary: d, rootBoundary: m, padding: u, flipVariations: g, allowedAutoPlacements: v }) : te);
    }, []), w = t.rects.reference, T = t.rects.popper, x = /* @__PURE__ */ new Map(), Y = !0, Z = C[0], se = 0; se < C.length; se++) {
      var ge = C[se], ae = zn(ge), ye = vo(ge) === mo, _e = [en, dn].indexOf(ae) >= 0, B = _e ? "width" : "height", J = Xo(t, { placement: ge, boundary: d, rootBoundary: m, altBoundary: h, padding: u }), H = _e ? ye ? fn : tn : ye ? dn : en;
      w[B] > T[B] && (H = Ea(H));
      var me = Ea(H), X = [];
      if (a && X.push(J[ae] <= 0), i && X.push(J[H] <= 0, J[me] <= 0), X.every(function(we) {
        return we;
      })) {
        Z = ge, Y = !1;
        break;
      }
      x.set(ge, X);
    }
    if (Y) for (var K = g ? 3 : 1, Pe = function(we) {
      var te = C.find(function(le) {
        var Ze = x.get(le);
        if (Ze) return Ze.slice(0, we).every(function(ve) {
          return ve;
        });
      });
      if (te) return Z = te, "break";
    }, Ue = K; Ue > 0; Ue--) {
      var be = Pe(Ue);
      if (be === "break") break;
    }
    t.placement !== Z && (t.modifiersData[r]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var Cw = { name: "flip", enabled: !0, phase: "main", fn: Aw, requiresIfExists: ["offset"], data: { _skip: !1 } };
function lu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function iu(e) {
  return [en, fn, dn, tn].some(function(t) {
    return e[t] >= 0;
  });
}
function Iw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Xo(t, { elementContext: "reference" }), i = Xo(t, { altBoundary: !0 }), l = lu(s, r), u = lu(i, o, a), d = iu(l), m = iu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var Ow = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Iw };
function Lw(e, t, n) {
  var r = zn(e), o = [tn, en].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [tn, fn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function xw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = as.reduce(function(d, m) {
    return d[m] = Lw(m, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Rw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: xw };
function Nw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gf({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var vf = { name: "popperOffsets", enabled: !0, phase: "read", fn: Nw, data: {} };
function Pw(e) {
  return e === "x" ? "y" : "x";
}
function $w(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, g = n.tetherOffset, v = g === void 0 ? 0 : g, A = Xo(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: d }), f = zn(t.placement), O = vo(t.placement), R = !O, C = Vl(f), w = Pw(C), T = t.modifiersData.popperOffsets, x = t.rects.reference, Y = t.rects.popper, Z = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, se = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), ge = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ae = { x: 0, y: 0 };
  if (T) {
    if (a) {
      var ye, _e = C === "y" ? en : tn, B = C === "y" ? dn : fn, J = C === "y" ? "height" : "width", H = T[C], me = H + A[_e], X = H - A[B], K = y ? -Y[J] / 2 : 0, Pe = O === mo ? x[J] : Y[J], Ue = O === mo ? -Y[J] : -x[J], be = t.elements.arrow, we = y && be ? Bl(be) : { width: 0, height: 0 }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uf(), le = te[_e], Ze = te[B], ve = Bo(0, x[J], we[J]), et = R ? x[J] / 2 - K - ve - le - se.mainAxis : Pe - ve - le - se.mainAxis, ut = R ? -x[J] / 2 + K + ve + Ze + se.mainAxis : Ue + ve + Ze + se.mainAxis, qe = t.elements.arrow && oa(t.elements.arrow), Mt = qe ? C === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, ot = (ye = ge?.[C]) != null ? ye : 0, Ct = H + et - ot - Mt, It = H + ut - ot, Ge = Bo(y ? Ba(me, Ct) : me, H, y ? Dr(X, It) : X);
      T[C] = Ge, ae[C] = Ge - H;
    }
    if (i) {
      var St, k = C === "x" ? en : tn, L = C === "x" ? dn : fn, V = T[w], re = w === "y" ? "height" : "width", Le = V + A[k], ue = V - A[L], E = [en, tn].indexOf(f) !== -1, z = (St = ge?.[w]) != null ? St : 0, ke = E ? Le : V - x[re] - Y[re] - z + se.altAxis, Re = E ? V + x[re] + Y[re] - z - se.altAxis : ue, Xe = y && E ? iw(ke, V, Re) : Bo(y ? ke : Le, V, y ? Re : ue);
      T[w] = Xe, ae[w] = Xe - V;
    }
    t.modifiersData[r] = ae;
  }
}
var Mw = { name: "preventOverflow", enabled: !0, phase: "main", fn: $w, requiresIfExists: ["offset"] };
function Dw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Fw(e) {
  return e === sn(e) || !cn(e) ? jl(e) : Dw(e);
}
function zw(e) {
  var t = e.getBoundingClientRect(), n = ho(t.width) / e.offsetWidth || 1, r = ho(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Bw(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), o = cn(t) && zw(t), a = Ir(t), s = go(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((jn(t) !== "body" || Hl(a)) && (i = Fw(t)), cn(t) ? (l = go(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ul(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function Vw(e) {
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
function jw(e) {
  var t = Vw(e);
  return rw.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Uw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Hw(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var cu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function uu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Wl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? cu : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, cu, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, h = { state: u, setOptions: function(v) {
      var A = typeof v == "function" ? v(u.options) : v;
      g(), u.options = Object.assign({}, a, u.options, A), u.scrollParents = { reference: Vr(s) ? Vo(s) : s.contextElement ? Vo(s.contextElement) : [], popper: Vo(i) };
      var f = jw(Hw([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(O) {
        return O.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var v = u.elements, A = v.reference, f = v.popper;
        if (uu(A, f)) {
          u.rects = { reference: Bw(A, oa(f), u.options.strategy === "fixed"), popper: Bl(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
            return u.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var O = 0; O < u.orderedModifiers.length; O++) {
            if (u.reset === !0) {
              u.reset = !1, O = -1;
              continue;
            }
            var R = u.orderedModifiers[O], C = R.fn, w = R.options, T = w === void 0 ? {} : w, x = R.name;
            typeof C == "function" && (u = C({ state: u, options: T, name: x, instance: h }) || u);
          }
        }
      }
    }, update: Uw(function() {
      return new Promise(function(v) {
        h.forceUpdate(), v(u);
      });
    }), destroy: function() {
      g(), m = !0;
    } };
    if (!uu(s, i)) return h;
    h.setOptions(l).then(function(v) {
      !m && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function y() {
      u.orderedModifiers.forEach(function(v) {
        var A = v.name, f = v.options, O = f === void 0 ? {} : f, R = v.effect;
        if (typeof R == "function") {
          var C = R({ state: u, name: A, instance: h, options: O }), w = function() {
          };
          d.push(C || w);
        }
      });
    }
    function g() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return h;
  };
}
Wl();
var Ww = [mf, vf, pf, sf];
Wl({ defaultModifiers: Ww });
var Gw = [mf, vf, pf, sf, Rw, Cw, Mw, fw, Ow], Kw = Wl({ defaultModifiers: Gw });
const qw = ["fixed", "absolute"], Yw = Je({
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
    values: as,
    default: "bottom"
  },
  popperOptions: {
    type: Se(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: qw,
    default: "absolute"
  }
}), bf = Je({
  ...Yw,
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
  ...Gr(["ariaLabel"])
}), Zw = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Xw = (e, t) => {
  const n = G(!1), r = G();
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
}, Qw = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...ek(e), ...t]
  };
  return tk(a, o?.modifiers), a;
}, Jw = (e) => {
  if (wt)
    return nr(e);
};
function ek(e) {
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
function tk(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const nk = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = rk(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = P(() => {
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
  }), a = Tr(), s = G({
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
  return Ce(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Ce([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = Kw(l, u, c(o)));
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
function rk(e) {
  const t = Object.keys(e.elements), n = $a(t.map((o) => [o, e.styles[o] || {}])), r = $a(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const ok = 0, ak = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = je($l, void 0), a = G(), s = G(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var f;
    const O = c(a), R = (f = c(s)) != null ? f : ok;
    return {
      name: "arrow",
      enabled: !k1(O),
      options: {
        element: O,
        padding: R
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...Qw(e, [
      c(l),
      c(i)
    ])
  })), d = P(() => Jw(e.referenceEl) || c(r)), { attributes: m, state: h, styles: y, update: g, forceUpdate: v, instanceRef: A } = nk(d, n, u);
  return Ce(A, (f) => t.value = f), vt(() => {
    Ce(() => {
      var f;
      return (f = c(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: A,
    state: h,
    styles: y,
    role: o,
    forceUpdate: v,
    update: g
  };
}, sk = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Rd(), a = Tt("popper"), s = P(() => c(t).popper), i = G(Be(e.zIndex) ? e.zIndex : o()), l = P(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = P(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = P(() => r.value === "dialog" ? "false" : void 0), m = P(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Be(e.zIndex) ? e.zIndex : o();
    }
  };
}, lk = ce({
  name: "ElPopperContent"
}), ik = /* @__PURE__ */ ce({
  ...lk,
  props: bf,
  emits: Zw,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Xw(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: g, instanceRef: v, role: A, update: f } = ak(r), {
      ariaModal: O,
      arrowStyle: R,
      contentAttrs: C,
      contentClass: w,
      contentStyle: T,
      updateZIndex: x
    } = sk(r, {
      styles: g,
      attributes: m,
      role: A
    }), Y = je(za, void 0), Z = G();
    Bn(Qd, {
      arrowStyle: R,
      arrowRef: h,
      arrowOffset: Z
    }), Y && Bn(za, {
      ...Y,
      addInputId: Ko,
      removeInputId: Ko
    });
    let se;
    const ge = (ye = !0) => {
      f(), ye && x();
    }, ae = () => {
      ge(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return vt(() => {
      Ce(() => r.triggerTargetEl, (ye, _e) => {
        se?.(), se = void 0;
        const B = c(ye || y.value), J = c(_e || y.value);
        _n(B) && (se = Ce([A, () => r.ariaLabel, O, () => r.id], (H) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((me, X) => {
            ar(H[X]) ? B.removeAttribute(me) : B.setAttribute(me, H[X]);
          });
        }, { immediate: !0 })), J !== B && _n(J) && ["role", "aria-label", "aria-modal", "id"].forEach((H) => {
          J.removeAttribute(H);
        });
      }, { immediate: !0 }), Ce(() => r.visible, ae, { immediate: !0 });
    }), Un(() => {
      se?.(), se = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: v,
      updatePopper: ge,
      contentStyle: T
    }), (ye, _e) => (N(), W("div", io({
      ref_key: "contentRef",
      ref: y
    }, c(C), {
      style: c(T),
      class: c(w),
      tabindex: "-1",
      onMouseenter: (B) => ye.$emit("mouseenter", B),
      onMouseleave: (B) => ye.$emit("mouseleave", B)
    }), [
      M(c(W_), {
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
        default: pe(() => [
          Ae(ye.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var ck = /* @__PURE__ */ rt(ik, [["__file", "content.vue"]]);
const uk = Tn(w_), Gl = Symbol("elTooltip");
function du() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return ta(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const dk = Je({
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
}), fk = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = du(), {
    registerTimeout: s,
    cancelTimeout: i
  } = du();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const m = c(n);
        Be(m) && m > 0 && s(() => {
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
}, Kl = Je({
  ...dk,
  ...bf,
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
  ...Gr(["ariaLabel"])
}), yf = Je({
  ...tf,
  disabled: Boolean,
  trigger: {
    type: Se([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Se(Array),
    default: () => [Fn.enter, Fn.numpadEnter, Fn.space]
  }
}), pk = es({
  type: Se(Boolean),
  default: null
}), mk = es({
  type: Se(Function)
}), hk = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: pk,
    [n]: mk
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
      const h = Kt(), { emit: y } = h, g = h.props, v = P(() => lt(g[n])), A = P(() => g[e] === null), f = (x) => {
        s.value !== !0 && (s.value = !0, i && (i.value = x), lt(d) && d(x));
      }, O = (x) => {
        s.value !== !1 && (s.value = !1, i && (i.value = x), lt(m) && m(x));
      }, R = (x) => {
        if (g.disabled === !0 || lt(u) && !u())
          return;
        const Y = v.value && wt;
        Y && y(t, !0), (A.value || !Y) && f(x);
      }, C = (x) => {
        if (g.disabled === !0 || !wt)
          return;
        const Y = v.value && wt;
        Y && y(t, !1), (A.value || !Y) && O(x);
      }, w = (x) => {
        Sr(x) && (g.disabled && x ? v.value && y(t, !1) : s.value !== x && (x ? f() : O()));
      }, T = () => {
        s.value ? C() : R();
      };
      return Ce(() => g[e], w), l && h.appContext.config.globalProperties.$route !== void 0 && Ce(() => ({
        ...h.proxy.$route
      }), () => {
        l.value && s.value && C();
      }), vt(() => {
        w(g[e]);
      }), {
        hide: C,
        show: R,
        toggle: T,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: gk,
  useModelToggleEmits: vk,
  useModelToggle: bk
} = hk("visible"), yk = Je({
  ...Jd,
  ...gk,
  ...Kl,
  ...yf,
  ...ef,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), _k = [
  ...vk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], wk = (e, t) => Pn(e) ? e.includes(t) : e === t, ro = (e, t, n) => (r) => {
  wk(c(e), t) && n(r);
}, Xn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, kk = ce({
  name: "ElTooltipTrigger"
}), Tk = /* @__PURE__ */ ce({
  ...kk,
  props: yf,
  setup(e, { expose: t }) {
    const n = e, r = Tt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = je(Gl, void 0), d = G(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, h = Jn(n, "trigger"), y = Xn(m, ro(h, "hover", i)), g = Xn(m, ro(h, "hover", l)), v = Xn(m, ro(h, "click", (C) => {
      C.button === 0 && u(C);
    })), A = Xn(m, ro(h, "focus", i)), f = Xn(m, ro(h, "focus", l)), O = Xn(m, ro(h, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), R = Xn(m, (C) => {
      const { code: w } = C;
      n.triggerKeys.includes(w) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: d
    }), (C, w) => (N(), he(c(x_), {
      id: c(a),
      "virtual-ref": C.virtualRef,
      open: c(s),
      "virtual-triggering": C.virtualTriggering,
      class: q(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(v),
      onContextmenu: c(O),
      onFocus: c(A),
      onMouseenter: c(y),
      onMouseleave: c(g),
      onKeydown: c(R)
    }, {
      default: pe(() => [
        Ae(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Sk = /* @__PURE__ */ rt(Tk, [["__file", "trigger.vue"]]);
const Ek = Je({
  to: {
    type: Se([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Ak = /* @__PURE__ */ ce({
  __name: "teleport",
  props: Ek,
  setup(e) {
    return (t, n) => t.disabled ? Ae(t.$slots, "default", { key: 0 }) : (N(), he(Wf, {
      key: 1,
      to: t.to
    }, [
      Ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Ck = /* @__PURE__ */ rt(Ak, [["__file", "teleport.vue"]]);
const Ik = Tn(Ck), _f = () => {
  const e = bl(), t = qd(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Ok = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Lk = () => {
  const { id: e, selector: t } = _f();
  return Gf(() => {
    wt && (document.body.querySelector(t.value) || Ok(e.value));
  }), {
    id: e,
    selector: t
  };
}, xk = ce({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Rk = /* @__PURE__ */ ce({
  ...xk,
  props: Kl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = _f(), o = Tt("tooltip"), a = G();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: m,
      onOpen: h,
      onShow: y,
      onHide: g,
      onBeforeShow: v,
      onBeforeHide: A
    } = je(Gl, void 0), f = P(() => n.transition || `${o.namespace.value}-fade-in-linear`), O = P(() => n.persistent);
    Un(() => {
      s?.();
    });
    const R = P(() => c(O) ? !0 : c(u)), C = P(() => n.disabled ? !1 : c(u)), w = P(() => n.appendTo || r.value), T = P(() => {
      var H;
      return (H = n.style) != null ? H : {};
    }), x = G(!0), Y = () => {
      g(), J() && Zn(document.body), x.value = !0;
    }, Z = () => {
      if (c(i))
        return !0;
    }, se = Xn(Z, () => {
      n.enterable && c(d) === "hover" && h();
    }), ge = Xn(Z, () => {
      c(d) === "hover" && m();
    }), ae = () => {
      var H, me;
      (me = (H = a.value) == null ? void 0 : H.updatePopper) == null || me.call(H), v?.();
    }, ye = () => {
      A?.();
    }, _e = () => {
      y(), s = z1(P(() => {
        var H;
        return (H = a.value) == null ? void 0 : H.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && m();
      });
    }, B = () => {
      n.virtualTriggering || m();
    }, J = (H) => {
      var me;
      const X = (me = a.value) == null ? void 0 : me.popperContentRef, K = H?.relatedTarget || document.activeElement;
      return X?.contains(K);
    };
    return Ce(() => c(u), (H) => {
      H ? x.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ce(() => n.content, () => {
      var H, me;
      (me = (H = a.value) == null ? void 0 : H.updatePopper) == null || me.call(H);
    }), t({
      contentRef: a,
      isFocusInsideContent: J
    }), (H, me) => (N(), he(c(Ik), {
      disabled: !H.teleported,
      to: c(w)
    }, {
      default: pe(() => [
        M(_o, {
          name: c(f),
          onAfterLeave: Y,
          onBeforeEnter: ae,
          onAfterEnter: _e,
          onBeforeLeave: ye
        }, {
          default: pe(() => [
            c(R) ? At((N(), he(c(ck), io({
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
              visible: c(C),
              "z-index": H.zIndex,
              onMouseenter: c(se),
              onMouseleave: c(ge),
              onBlur: B,
              onClose: c(m)
            }), {
              default: pe(() => [
                Ae(H.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [lr, c(C)]
            ]) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Nk = /* @__PURE__ */ rt(Rk, [["__file", "content.vue"]]);
const Pk = ce({
  name: "ElTooltip"
}), $k = /* @__PURE__ */ ce({
  ...Pk,
  props: yk,
  emits: _k,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Lk();
    const o = ns(), a = G(), s = G(), i = () => {
      var f;
      const O = c(a);
      O && ((f = O.popperInstanceRef) == null || f.update());
    }, l = G(!1), u = G(), { show: d, hide: m, hasUpdateHandler: h } = bk({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = fk({
      showAfter: Jn(r, "showAfter"),
      hideAfter: Jn(r, "hideAfter"),
      autoClose: Jn(r, "autoClose"),
      open: d,
      close: m
    }), v = P(() => Sr(r.visible) && !h.value);
    Bn(Gl, {
      controlled: v,
      id: o,
      open: Js(l),
      trigger: Jn(r, "trigger"),
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
    }), Ce(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const A = (f) => {
      var O;
      return (O = s.value) == null ? void 0 : O.isFocusInsideContent(f);
    };
    return Kf(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: A,
      updatePopper: i,
      onOpen: y,
      onClose: g,
      hide: m
    }), (f, O) => (N(), he(c(uk), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: pe(() => [
        M(Sk, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: pe(() => [
            f.$slots.default ? Ae(f.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        M(Nk, {
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
          default: pe(() => [
            Ae(f.$slots, "content", {}, () => [
              f.rawContent ? (N(), W("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (N(), W("span", { key: 1 }, D(f.content), 1))
            ]),
            f.showArrow ? (N(), he(c(S_), {
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
var Mk = /* @__PURE__ */ rt($k, [["__file", "tooltip.vue"]]);
const Dk = Tn(Mk), Fk = Je({
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
}), zk = ce({
  name: "ElBadge"
}), Bk = /* @__PURE__ */ ce({
  ...zk,
  props: Fk,
  setup(e, { expose: t }) {
    const n = e, r = Tt("badge"), o = P(() => n.isDot ? "" : Be(n.value) && Be(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = P(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: po(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: po((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (N(), W("div", {
      class: q(c(r).b())
    }, [
      Ae(s.$slots, "default"),
      M(_o, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: pe(() => [
          At(b("sup", {
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
            Ae(s.$slots, "content", { value: c(o) }, () => [
              on(D(c(o)), 1)
            ])
          ], 6), [
            [lr, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Vk = /* @__PURE__ */ rt(Bk, [["__file", "badge.vue"]]);
const jk = Tn(Vk), Uk = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Xs = Je({
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
    values: Ol
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Hk = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Wk = ce({
  name: "ElTag"
}), Gk = /* @__PURE__ */ ce({
  ...Wk,
  props: Xs,
  emits: Hk,
  setup(e, { emit: t }) {
    const n = e, r = na(), o = Tt("tag"), a = P(() => {
      const { type: u, hit: d, effect: m, closable: h, round: y } = n;
      return [
        o.b(),
        o.is("closable", h),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(m),
        o.is("hit", d),
        o.is("round", y)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var d, m, h;
      (h = (m = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : m.component) != null && h.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (N(), W("span", {
      key: 0,
      class: q(c(a)),
      style: Nt({ backgroundColor: u.color }),
      onClick: i
    }, [
      b("span", {
        class: q(c(o).e("content"))
      }, [
        Ae(u.$slots, "default")
      ], 2),
      u.closable ? (N(), he(c(_t), {
        key: 0,
        class: q(c(o).e("close")),
        onClick: nt(s, ["stop"])
      }, {
        default: pe(() => [
          M(c(Da))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (N(), he(_o, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: pe(() => [
        b("span", {
          class: q(c(a)),
          style: Nt({ backgroundColor: u.color }),
          onClick: i
        }, [
          b("span", {
            class: q(c(o).e("content"))
          }, [
            Ae(u.$slots, "default")
          ], 2),
          u.closable ? (N(), he(c(_t), {
            key: 0,
            class: q(c(o).e("close")),
            onClick: nt(s, ["stop"])
          }, {
            default: pe(() => [
              M(c(Da))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Kk = /* @__PURE__ */ rt(Gk, [["__file", "tag.vue"]]);
const qk = Tn(Kk), yr = /* @__PURE__ */ new Map();
if (wt) {
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
function fu(e, t) {
  let n = [];
  return Pn(t.arg) ? n = t.arg : _n(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), m = e === s, h = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || d || m || h || y || t.value(r, o);
  };
}
const Yk = {
  beforeMount(e, t) {
    yr.has(e) || yr.set(e, []), yr.get(e).push({
      documentHandler: fu(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    yr.has(e) || yr.set(e, []);
    const n = yr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: fu(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    yr.delete(e);
  }
}, Zk = Je({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Se(Object)
  },
  size: ts,
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
  ...Dd
}), pn = {};
ce({
  name: "ElConfigProvider",
  props: Zk,
  setup(e, { slots: t }) {
    Ce(() => e.message, (r) => {
      Object.assign(pn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Bd(e);
    return () => Ae(t, "default", { config: n?.value });
  }
});
const Xk = 100, Qk = 600, pu = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Xk, delay: o = Qk } = lt(n) ? {} : n;
    let a, s;
    const i = () => lt(n) ? n() : n.handler(), l = () => {
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
}, Jk = Je({
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
    validator: (e) => e === null || Be(e) || ["min", "max"].includes(e),
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
  ...Gr(["ariaLabel"])
}), eT = {
  [ir]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [sr]: (e) => Be(e) || ar(e),
  [xt]: (e) => Be(e) || ar(e)
}, tT = ce({
  name: "ElInputNumber"
}), nT = /* @__PURE__ */ ce({
  ...tT,
  props: Jk,
  emits: eT,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Il(), a = Tt("input-number"), s = G(), i = Fr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = rs(), u = P(() => Be(r.modelValue) && r.modelValue <= r.min), d = P(() => Be(r.modelValue) && r.modelValue >= r.max), m = P(() => {
      const B = f(r.step);
      return $n(r.precision) ? Math.max(f(r.modelValue), B) : (B > r.precision, r.precision);
    }), h = P(() => r.controls && r.controlsPosition === "right"), y = na(), g = Nl(), v = P(() => {
      if (i.userInput !== null)
        return i.userInput;
      let B = i.currentValue;
      if (ar(B))
        return "";
      if (Be(B)) {
        if (Number.isNaN(B))
          return "";
        $n(r.precision) || (B = B.toFixed(r.precision));
      }
      return B;
    }), A = (B, J) => {
      if ($n(J) && (J = m.value), J === 0)
        return Math.round(B);
      let H = String(B);
      const me = H.indexOf(".");
      if (me === -1 || !H.replace(".", "").split("")[me + J])
        return B;
      const Pe = H.length;
      return H.charAt(Pe - 1) === "5" && (H = `${H.slice(0, Math.max(0, Pe - 1))}6`), Number.parseFloat(Number(H).toFixed(J));
    }, f = (B) => {
      if (ar(B))
        return 0;
      const J = B.toString(), H = J.indexOf(".");
      let me = 0;
      return H !== -1 && (me = J.length - H - 1), me;
    }, O = (B, J = 1) => Be(B) ? A(B + r.step * J) : i.currentValue, R = () => {
      if (r.readonly || g.value || d.value)
        return;
      const B = Number(v.value) || 0, J = O(B);
      T(J), n(sr, i.currentValue), ye();
    }, C = () => {
      if (r.readonly || g.value || u.value)
        return;
      const B = Number(v.value) || 0, J = O(B, -1);
      T(J), n(sr, i.currentValue), ye();
    }, w = (B, J) => {
      const { max: H, min: me, step: X, precision: K, stepStrictly: Pe, valueOnClear: Ue } = r;
      H < me && Cl("InputNumber", "min should not be greater than max.");
      let be = Number(B);
      if (ar(B) || Number.isNaN(be))
        return null;
      if (B === "") {
        if (Ue === null)
          return null;
        be = Vt(Ue) ? { min: me, max: H }[Ue] : Ue;
      }
      return Pe && (be = A(Math.round(be / X) * X, K), be !== B && J && n(xt, be)), $n(K) || (be = A(be, K)), (be > H || be < me) && (be = be > H ? H : me, J && n(xt, be)), be;
    }, T = (B, J = !0) => {
      var H;
      const me = i.currentValue, X = w(B);
      if (!J) {
        n(xt, X);
        return;
      }
      me === X && B || (i.userInput = null, n(xt, X), me !== X && n(ir, X, me), r.validateEvent && ((H = l?.validate) == null || H.call(l, "change").catch((K) => void 0)), i.currentValue = X);
    }, x = (B) => {
      i.userInput = B;
      const J = B === "" ? null : Number(B);
      n(sr, J), T(J, !1);
    }, Y = (B) => {
      const J = B !== "" ? Number(B) : "";
      (Be(J) && !Number.isNaN(J) || B === "") && T(J), ye(), i.userInput = null;
    }, Z = () => {
      var B, J;
      (J = (B = s.value) == null ? void 0 : B.focus) == null || J.call(B);
    }, se = () => {
      var B, J;
      (J = (B = s.value) == null ? void 0 : B.blur) == null || J.call(B);
    }, ge = (B) => {
      n("focus", B);
    }, ae = (B) => {
      var J, H;
      i.userInput = null, Gd() && i.currentValue === null && ((J = s.value) != null && J.input) && (s.value.input.value = ""), n("blur", B), r.validateEvent && ((H = l?.validate) == null || H.call(l, "blur").catch((me) => void 0));
    }, ye = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, _e = (B) => {
      document.activeElement === B.target && B.preventDefault();
    };
    return Ce(() => r.modelValue, (B, J) => {
      const H = w(B, !0);
      i.userInput === null && H !== J && (i.currentValue = H);
    }, { immediate: !0 }), vt(() => {
      var B;
      const { min: J, max: H, modelValue: me } = r, X = (B = s.value) == null ? void 0 : B.input;
      if (X.setAttribute("role", "spinbutton"), Number.isFinite(H) ? X.setAttribute("aria-valuemax", String(H)) : X.removeAttribute("aria-valuemax"), Number.isFinite(J) ? X.setAttribute("aria-valuemin", String(J)) : X.removeAttribute("aria-valuemin"), X.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), X.setAttribute("aria-disabled", String(g.value)), !Be(me) && me != null) {
        let K = Number(me);
        Number.isNaN(K) && (K = null), n(xt, K);
      }
      X.addEventListener("wheel", _e, { passive: !1 });
    }), yu(() => {
      var B, J;
      const H = (B = s.value) == null ? void 0 : B.input;
      H?.setAttribute("aria-valuenow", `${(J = i.currentValue) != null ? J : ""}`);
    }), t({
      focus: Z,
      blur: se
    }), (B, J) => (N(), W("div", {
      class: q([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !B.controls),
        c(a).is("controls-right", c(h))
      ]),
      onDragstart: nt(() => {
      }, ["prevent"])
    }, [
      B.controls ? At((N(), W("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: vn(C, ["enter"])
      }, [
        Ae(B.$slots, "decrease-icon", {}, () => [
          M(c(_t), null, {
            default: pe(() => [
              c(h) ? (N(), he(c(Ud), { key: 0 })) : (N(), he(c(Oy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(pu), C]
      ]) : ee("v-if", !0),
      B.controls ? At((N(), W("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: vn(R, ["enter"])
      }, [
        Ae(B.$slots, "increase-icon", {}, () => [
          M(c(_t), null, {
            default: pe(() => [
              c(h) ? (N(), he(c(gy), { key: 0 })) : (N(), he(c(xy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(pu), R]
      ]) : ee("v-if", !0),
      M(c(n_), {
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
          vn(nt(R, ["prevent"]), ["up"]),
          vn(nt(C, ["prevent"]), ["down"])
        ],
        onBlur: ae,
        onFocus: ge,
        onInput: x,
        onChange: Y
      }, qf({
        _: 2
      }, [
        B.$slots.prefix ? {
          name: "prefix",
          fn: pe(() => [
            Ae(B.$slots, "prefix")
          ])
        } : void 0,
        B.$slots.suffix ? {
          name: "suffix",
          fn: pe(() => [
            Ae(B.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var rT = /* @__PURE__ */ rt(nT, [["__file", "input-number.vue"]]);
const oT = Tn(rT);
function aT() {
  const e = Tr(), t = G(0), n = 11, r = P(() => ({
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
const wf = Symbol("ElSelectGroup"), ls = Symbol("ElSelect");
function sT(e, t) {
  const n = je(ls), r = je(wf, { disabled: !1 }), o = P(() => d(wr(n.props.modelValue), e.value)), a = P(() => {
    var y;
    if (n.props.multiple) {
      const g = wr((y = n.props.modelValue) != null ? y : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = P(() => e.label || (an(e.value) ? "" : e.value)), i = P(() => e.value || e.label || ""), l = P(() => e.disabled || t.groupDisabled || a.value), u = Kt(), d = (y = [], g) => {
    if (an(e.value)) {
      const v = n.props.valueKey;
      return y && y.some((A) => Yf(kr(A, v)) === kr(g, v));
    } else
      return y && y.includes(g);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, h = (y) => {
    const g = new RegExp(Uk(y), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Ce(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ce(() => e.value, (y, g) => {
    const { remote: v, valueKey: A } = n.props;
    if ((v ? y !== g : !zo(y, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
      if (A && an(y) && an(g) && y[A] === g[A])
        return;
      n.setSelected();
    }
  }), Ce(() => r.disabled, () => {
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
const lT = ce({
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
    const t = Tt("select"), n = ns(), r = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(h))
    ]), o = Fr({
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
    } = sT(e, o), { visible: m, hover: h } = el(o), y = Kt().proxy;
    l.onOptionCreate(y), Un(() => {
      const v = y.value, { selected: A } = l.states, f = A.some((O) => O.value === y.value);
      mt(() => {
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
      visible: m,
      hover: h,
      selectOptionClick: g,
      states: o
    };
  }
});
function iT(e, t, n, r, o, a) {
  return At((N(), W("li", {
    id: e.id,
    class: q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: nt(e.selectOptionClick, ["stop"])
  }, [
    Ae(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [lr, e.visible]
  ]);
}
var ql = /* @__PURE__ */ rt(lT, [["render", iT], ["__file", "option.vue"]]);
const cT = ce({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = je(ls), t = Tt("select"), n = P(() => e.props.popperClass), r = P(() => e.props.multiple), o = P(() => e.props.fitInputWidth), a = G("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return vt(() => {
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
function uT(e, t, n, r, o, a) {
  return N(), W("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Nt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (N(), W("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      Ae(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    Ae(e.$slots, "default"),
    e.$slots.footer ? (N(), W("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      Ae(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var dT = /* @__PURE__ */ rt(cT, [["render", uT], ["__file", "select-dropdown.vue"]]);
const fT = (e, t) => {
  const { t: n } = Il(), r = ns(), o = Tt("select"), a = Tt("input"), s = Fr({
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
  }), i = G(null), l = G(null), u = G(null), d = G(null), m = G(null), h = G(null), y = G(null), g = G(null), v = G(null), A = G(null), f = G(null), {
    isComposing: O,
    handleCompositionStart: R,
    handleCompositionUpdate: C,
    handleCompositionEnd: w
  } = Xd({
    afterComposition: ($) => Xe($)
  }), { wrapperRef: T, isFocused: x, handleBlur: Y } = Zd(m, {
    beforeFocus() {
      return J.value;
    },
    afterFocus() {
      e.automaticDropdown && !Z.value && (Z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur($) {
      var ne, Ee;
      return ((ne = u.value) == null ? void 0 : ne.isFocusInsideContent($)) || ((Ee = d.value) == null ? void 0 : Ee.isFocusInsideContent($));
    },
    afterBlur() {
      Z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Z = G(!1), se = G(), { form: ge, formItem: ae } = rs(), { inputId: ye } = Rl(e, {
    formItemContext: ae
  }), { valueOnClear: _e, isEmptyValue: B } = ly(e), J = P(() => e.disabled || ge?.disabled), H = P(() => Pn(e.modelValue) ? e.modelValue.length > 0 : !B(e.modelValue)), me = P(() => {
    var $;
    return ($ = ge?.statusIcon) != null ? $ : !1;
  }), X = P(() => e.clearable && !J.value && s.inputHovering && H.value), K = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Pe = P(() => o.is("reverse", K.value && Z.value)), Ue = P(() => ae?.validateState || ""), be = P(() => Wd[Ue.value]), we = P(() => e.remote ? 300 : 0), te = P(() => e.remote && !s.inputValue && s.options.size === 0), le = P(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ze.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ze = P(() => ve.value.filter(($) => $.visible).length), ve = P(() => {
    const $ = Array.from(s.options.values()), ne = [];
    return s.optionValues.forEach((Ee) => {
      const tt = $.findIndex((bt) => bt.value === Ee);
      tt > -1 && ne.push($[tt]);
    }), ne.length >= $.length ? ne : $;
  }), et = P(() => Array.from(s.cachedOptions.values())), ut = P(() => {
    const $ = ve.value.filter((ne) => !ne.created).some((ne) => ne.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !$;
  }), qe = () => {
    e.filterable && lt(e.filterMethod) || e.filterable && e.remote && lt(e.remoteMethod) || ve.value.forEach(($) => {
      var ne;
      (ne = $.updateOption) == null || ne.call($, s.inputValue);
    });
  }, Mt = na(), ot = P(() => ["small"].includes(Mt.value) ? "small" : "default"), Ct = P({
    get() {
      return Z.value && !te.value;
    },
    set($) {
      Z.value = $;
    }
  }), It = P(() => {
    if (e.multiple && !$n(e.modelValue))
      return wr(e.modelValue).length === 0 && !s.inputValue;
    const $ = Pn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $n($) ? !s.inputValue : !0;
  }), Ge = P(() => {
    var $;
    const ne = ($ = e.placeholder) != null ? $ : n("el.select.placeholder");
    return e.multiple || !H.value ? ne : s.selectedLabel;
  }), St = P(() => Ks ? null : "mouseenter");
  Ce(() => e.modelValue, ($, ne) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), V(), !zo($, ne) && e.validateEvent && ae?.validate("change").catch((Ee) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ce(() => Z.value, ($) => {
    $ ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", $);
  }), Ce(() => s.options.entries(), () => {
    wt && (V(), e.defaultFirstOption && (e.filterable || e.remote) && Ze.value && L());
  }, {
    flush: "post"
  }), Ce([() => s.hoveringIndex, ve], ([$]) => {
    Be($) && $ > -1 ? se.value = ve.value[$] || {} : se.value = {}, ve.value.forEach((ne) => {
      ne.hover = se.value === ne;
    });
  }), bu(() => {
    s.isBeforeHide || qe();
  });
  const k = ($) => {
    s.previousQuery === $ || O.value || (s.previousQuery = $, e.filterable && lt(e.filterMethod) ? e.filterMethod($) : e.filterable && e.remote && lt(e.remoteMethod) && e.remoteMethod($), e.defaultFirstOption && (e.filterable || e.remote) && Ze.value ? mt(L) : mt(Le));
  }, L = () => {
    const $ = ve.value.filter((bt) => bt.visible && !bt.disabled && !bt.states.groupDisabled), ne = $.find((bt) => bt.created), Ee = $[0], tt = ve.value.map((bt) => bt.value);
    s.hoveringIndex = Gn(tt, ne || Ee);
  }, V = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const ne = Pn(e.modelValue) ? e.modelValue[0] : e.modelValue, Ee = re(ne);
      s.selectedLabel = Ee.currentLabel, s.selected = [Ee];
      return;
    }
    const $ = [];
    $n(e.modelValue) || wr(e.modelValue).forEach((ne) => {
      $.push(re(ne));
    }), s.selected = $;
  }, re = ($) => {
    let ne;
    const Ee = Mg($);
    for (let Zt = s.cachedOptions.size - 1; Zt >= 0; Zt--) {
      const jt = et.value[Zt];
      if (Ee ? kr(jt.value, e.valueKey) === kr($, e.valueKey) : jt.value === $) {
        ne = {
          value: $,
          currentLabel: jt.currentLabel,
          get isDisabled() {
            return jt.isDisabled;
          }
        };
        break;
      }
    }
    if (ne)
      return ne;
    const tt = Ee ? $.label : $ ?? "";
    return {
      value: $,
      currentLabel: tt
    };
  }, Le = () => {
    s.hoveringIndex = ve.value.findIndex(($) => s.selected.some((ne) => Fe(ne) === Fe($)));
  }, ue = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, E = () => {
    s.collapseItemWidth = A.value.getBoundingClientRect().width;
  }, z = () => {
    var $, ne;
    (ne = ($ = u.value) == null ? void 0 : $.updatePopper) == null || ne.call($);
  }, ke = () => {
    var $, ne;
    (ne = ($ = d.value) == null ? void 0 : $.updatePopper) == null || ne.call($);
  }, Re = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), k(s.inputValue);
  }, Xe = ($) => {
    if (s.inputValue = $.target.value, e.remote)
      dt();
    else
      return Re();
  }, dt = _1(() => {
    Re();
  }, we.value), Ye = ($) => {
    zo(e.modelValue, $) || t(ir, $);
  }, Wn = ($) => w1($, (ne) => {
    const Ee = s.cachedOptions.get(ne);
    return Ee && !Ee.disabled && !Ee.states.groupDisabled;
  }), fr = ($) => {
    if (e.multiple && $.code !== Fn.delete && $.target.value.length <= 0) {
      const ne = wr(e.modelValue).slice(), Ee = Wn(ne);
      if (Ee < 0)
        return;
      const tt = ne[Ee];
      ne.splice(Ee, 1), t(xt, ne), Ye(ne), t("remove-tag", tt);
    }
  }, Kr = ($, ne) => {
    const Ee = s.selected.indexOf(ne);
    if (Ee > -1 && !J.value) {
      const tt = wr(e.modelValue).slice();
      tt.splice(Ee, 1), t(xt, tt), Ye(tt), t("remove-tag", ne.value);
    }
    $.stopPropagation(), mr();
  }, pr = ($) => {
    $.stopPropagation();
    const ne = e.multiple ? [] : _e.value;
    if (e.multiple)
      for (const Ee of s.selected)
        Ee.isDisabled && ne.push(Ee.value);
    t(xt, ne), Ye(ne), s.hoveringIndex = -1, Z.value = !1, t("clear"), mr();
  }, Sn = ($) => {
    var ne;
    if (e.multiple) {
      const Ee = wr((ne = e.modelValue) != null ? ne : []).slice(), tt = Gn(Ee, $);
      tt > -1 ? Ee.splice(tt, 1) : (e.multipleLimit <= 0 || Ee.length < e.multipleLimit) && Ee.push($.value), t(xt, Ee), Ye(Ee), $.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(xt, $.value), Ye($.value), Z.value = !1;
    mr(), !Z.value && mt(() => {
      rn($);
    });
  }, Gn = ($ = [], ne) => $n(ne) ? -1 : an(ne.value) ? $.findIndex((Ee) => zo(kr(Ee, e.valueKey), Fe(ne))) : $.indexOf(ne.value), rn = ($) => {
    var ne, Ee, tt, bt, Zt;
    const jt = Pn($) ? $[0] : $;
    let Dt = null;
    if (jt?.value) {
      const ln = ve.value.filter((Kn) => Kn.value === jt.value);
      ln.length > 0 && (Dt = ln[0].$el);
    }
    if (u.value && Dt) {
      const ln = (bt = (tt = (Ee = (ne = u.value) == null ? void 0 : ne.popperRef) == null ? void 0 : Ee.contentRef) == null ? void 0 : tt.querySelector) == null ? void 0 : bt.call(tt, `.${o.be("dropdown", "wrap")}`);
      ln && cy(ln, Dt);
    }
    (Zt = f.value) == null || Zt.handleScroll();
  }, Yt = ($) => {
    s.options.set($.value, $), s.cachedOptions.set($.value, $);
  }, En = ($, ne) => {
    s.options.get($) === ne && s.options.delete($);
  }, Or = P(() => {
    var $, ne;
    return (ne = ($ = u.value) == null ? void 0 : $.popperRef) == null ? void 0 : ne.contentRef;
  }), Lr = () => {
    s.isBeforeHide = !1, mt(() => {
      var $;
      ($ = f.value) == null || $.update(), rn(s.selected);
    });
  }, mr = () => {
    var $;
    ($ = m.value) == null || $.focus();
  }, xr = () => {
    var $;
    if (Z.value) {
      Z.value = !1, mt(() => {
        var ne;
        return (ne = m.value) == null ? void 0 : ne.blur();
      });
      return;
    }
    ($ = m.value) == null || $.blur();
  }, Rr = ($) => {
    pr($);
  }, ko = ($) => {
    if (Z.value = !1, x.value) {
      const ne = new FocusEvent("focus", $);
      mt(() => Y(ne));
    }
  }, An = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, Nr = () => {
    J.value || (Ks && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, qr = () => {
    if (!Z.value)
      Nr();
    else {
      const $ = ve.value[s.hoveringIndex];
      $ && !$.isDisabled && Sn($);
    }
  }, Fe = ($) => an($.value) ? kr($.value, e.valueKey) : $.value, Cn = P(() => ve.value.filter(($) => $.visible).every(($) => $.isDisabled)), Yr = P(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Zr = P(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), hr = ($) => {
    if (!Z.value) {
      Z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ze.value === 0 || O.value) && !Cn.value) {
      $ === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : $ === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const ne = ve.value[s.hoveringIndex];
      (ne.isDisabled || !ne.visible) && hr($), mt(() => rn(se.value));
    }
  }, gr = () => {
    if (!l.value)
      return 0;
    const $ = window.getComputedStyle(l.value);
    return Number.parseFloat($.gap || "6px");
  }, Xr = P(() => {
    const $ = gr();
    return { maxWidth: `${A.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - $ : s.selectionWidth}px` };
  }), To = P(() => ({ maxWidth: `${s.selectionWidth}px` })), it = ($) => {
    t("popup-scroll", $);
  };
  return Nn(l, ue), Nn(g, z), Nn(T, z), Nn(v, ke), Nn(A, E), vt(() => {
    V();
  }), {
    inputId: ye,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: x,
    expanded: Z,
    optionsArray: ve,
    hoverOption: se,
    selectSize: Mt,
    filteredOptionsCount: Ze,
    updateTooltip: z,
    updateTagTooltip: ke,
    debouncedOnInputChange: dt,
    onInput: Xe,
    deletePrevTag: fr,
    deleteTag: Kr,
    deleteSelected: pr,
    handleOptionSelect: Sn,
    scrollToOption: rn,
    hasModelValue: H,
    shouldShowPlaceholder: It,
    currentPlaceholder: Ge,
    mouseEnterEventName: St,
    needStatusIcon: me,
    showClose: X,
    iconComponent: K,
    iconReverse: Pe,
    validateState: Ue,
    validateIcon: be,
    showNewOption: ut,
    updateOptions: qe,
    collapseTagSize: ot,
    setSelected: V,
    selectDisabled: J,
    emptyText: le,
    handleCompositionStart: R,
    handleCompositionUpdate: C,
    handleCompositionEnd: w,
    onOptionCreate: Yt,
    onOptionDestroy: En,
    handleMenuEnter: Lr,
    focus: mr,
    blur: xr,
    handleClearClick: Rr,
    handleClickOutside: ko,
    handleEsc: An,
    toggleMenu: Nr,
    selectOption: qr,
    getValueKey: Fe,
    navigateOptions: hr,
    dropdownMenuVisible: Ct,
    showTagList: Yr,
    collapseTagList: Zr,
    popupScroll: it,
    tagStyle: Xr,
    collapseTagStyle: To,
    popperRef: Or,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: h,
    suffixRef: y,
    selectRef: i,
    wrapperRef: T,
    selectionRef: l,
    scrollbarRef: f,
    menuRef: g,
    tagMenuRef: v,
    collapseItemRef: A
  };
};
var pT = ce({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = je(ls);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Pn(u) && u.forEach((d) => {
          var m, h, y, g;
          const v = (m = d?.type || {}) == null ? void 0 : m.name;
          v === "ElOptionGroup" ? l(!Vt(d.children) && !Pn(d.children) && lt((h = d.children) == null ? void 0 : h.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : v === "ElOption" ? i.push((g = d.props) == null ? void 0 : g.value) : Pn(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), zo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const mT = Je({
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
  teleported: Kl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mn,
    default: Ll
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mn,
    default: Ud
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
    type: Se(String),
    values: as,
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
  ...Dd,
  ...Gr(["ariaLabel"])
}), mu = "ElSelect", hT = ce({
  name: mu,
  componentName: mu,
  components: {
    ElSelectMenu: dT,
    ElOption: ql,
    ElOptions: pT,
    ElTag: qk,
    ElScrollbar: v_,
    ElTooltip: Dk,
    ElIcon: _t
  },
  directives: { ClickOutside: Yk },
  props: mT,
  emits: [
    xt,
    ir,
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
    }), r = Fr({
      ...el(e),
      modelValue: n
    }), o = fT(r, t), { calculatorRef: a, inputStyle: s } = aT();
    Bn(ls, Fr({
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
function gT(e, t, n, r, o, a) {
  const s = $r("el-tag"), i = $r("el-tooltip"), l = $r("el-icon"), u = $r("el-option"), d = $r("el-options"), m = $r("el-scrollbar"), h = $r("el-select-menu"), y = Zf("click-outside");
  return At((N(), W("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Xf(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
      default: pe(() => {
        var g;
        return [
          b("div", {
            ref: "wrapperRef",
            class: q([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: nt(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (N(), W("div", {
              key: 0,
              ref: "prefixRef",
              class: q(e.nsSelect.e("prefix"))
            }, [
              Ae(e.$slots, "prefix")
            ], 2)) : ee("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: q([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Ae(e.$slots, "tag", { key: 0 }, () => [
                (N(!0), W(pt, null, Qn(e.showTagList, (v) => (N(), W("div", {
                  key: e.getValueKey(v),
                  class: q(e.nsSelect.e("selected-item"))
                }, [
                  M(s, {
                    closable: !e.selectDisabled && !v.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Nt(e.tagStyle),
                    onClose: (A) => e.deleteTag(A, v)
                  }, {
                    default: pe(() => [
                      b("span", {
                        class: q(e.nsSelect.e("tags-text"))
                      }, [
                        Ae(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          on(D(v.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (N(), he(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: pe(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: q(e.nsSelect.e("selected-item"))
                    }, [
                      M(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Nt(e.collapseTagStyle)
                      }, {
                        default: pe(() => [
                          b("span", {
                            class: q(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: pe(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: q(e.nsSelect.e("selection"))
                    }, [
                      (N(!0), W(pt, null, Qn(e.collapseTagList, (v) => (N(), W("div", {
                        key: e.getValueKey(v),
                        class: q(e.nsSelect.e("selected-item"))
                      }, [
                        M(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !v.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (A) => e.deleteTag(A, v)
                        }, {
                          default: pe(() => [
                            b("span", {
                              class: q(e.nsSelect.e("tags-text"))
                            }, [
                              Ae(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                on(D(v.currentLabel), 1)
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
              b("div", {
                class: q([
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
                    vn(nt((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    vn(nt((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    vn(nt(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    vn(nt(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    vn(nt(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: nt(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [jo, e.states.inputValue]
                ]),
                e.filterable ? (N(), W("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (N(), W("div", {
                key: 1,
                class: q([
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
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (N(), W("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : ee("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: q(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (N(), he(l, {
                key: 0,
                class: q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: pe(() => [
                  (N(), he(Wt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (N(), he(l, {
                key: 1,
                class: q([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: pe(() => [
                  (N(), he(Wt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (N(), he(l, {
                key: 2,
                class: q([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: pe(() => [
                  (N(), he(Wt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: pe(() => [
        M(h, { ref: "menuRef" }, {
          default: pe(() => [
            e.$slots.header ? (N(), W("div", {
              key: 0,
              class: q(e.nsSelect.be("dropdown", "header")),
              onClick: nt(() => {
              }, ["stop"])
            }, [
              Ae(e.$slots, "header")
            ], 10, ["onClick"])) : ee("v-if", !0),
            At(M(m, {
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
              default: pe(() => [
                e.showNewOption ? (N(), he(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                M(d, null, {
                  default: pe(() => [
                    Ae(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [lr, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (N(), W("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              Ae(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (N(), W("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              Ae(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (N(), W("div", {
              key: 3,
              class: q(e.nsSelect.be("dropdown", "footer")),
              onClick: nt(() => {
              }, ["stop"])
            }, [
              Ae(e.$slots, "footer")
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
var vT = /* @__PURE__ */ rt(hT, [["render", gT], ["__file", "select.vue"]]);
const bT = ce({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Tt("select"), n = G(null), r = Kt(), o = G([]);
    Bn(wf, Fr({
      ...el(e)
    }));
    const a = P(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = wr(u), m = [];
      return d.forEach((h) => {
        var y, g;
        s(h) ? m.push(h.component.proxy) : (y = h.children) != null && y.length ? m.push(...i(h.children)) : (g = h.component) != null && g.subTree && m.push(...i(h.component.subTree));
      }), m;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return vt(() => {
      l();
    }), G1(n, l, {
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
function yT(e, t, n, r, o, a) {
  return At((N(), W("ul", {
    ref: "groupRef",
    class: q(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: q(e.ns.be("group", "title"))
    }, D(e.label), 3),
    b("li", null, [
      b("ul", {
        class: q(e.ns.b("group"))
      }, [
        Ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [lr, e.visible]
  ]);
}
var kf = /* @__PURE__ */ rt(bT, [["render", yT], ["__file", "option-group.vue"]]);
const _T = Tn(vT, {
  Option: ql,
  OptionGroup: kf
}), wT = jd(ql);
jd(kf);
const kT = (e) => ["", ...Ol].includes(e), TT = Je({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: kT
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
    type: Se(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Gr(["ariaLabel"])
}), ST = {
  [xt]: (e) => Sr(e) || Vt(e) || Be(e),
  [ir]: (e) => Sr(e) || Vt(e) || Be(e),
  [sr]: (e) => Sr(e) || Vt(e) || Be(e)
}, Tf = "ElSwitch", ET = ce({
  name: Tf
}), AT = /* @__PURE__ */ ce({
  ...ET,
  props: TT,
  emits: ST,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = rs(), a = na(), s = Tt("switch"), { inputId: i } = Rl(r, {
      formItemContext: o
    }), l = Nl(P(() => r.loading)), u = G(r.modelValue !== !1), d = G(), m = G(), h = P(() => [
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
      width: po(r.width)
    }));
    Ce(() => r.modelValue, () => {
      u.value = !0;
    });
    const A = P(() => u.value ? r.modelValue : !1), f = P(() => A.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(A.value) || (n(xt, r.inactiveValue), n(ir, r.inactiveValue), n(sr, r.inactiveValue)), Ce(f, (w) => {
      var T;
      d.value.checked = w, r.validateEvent && ((T = o?.validate) == null || T.call(o, "change").catch((x) => void 0));
    });
    const O = () => {
      const w = f.value ? r.inactiveValue : r.activeValue;
      n(xt, w), n(ir, w), n(sr, w), mt(() => {
        d.value.checked = f.value;
      });
    }, R = () => {
      if (l.value)
        return;
      const { beforeChange: w } = r;
      if (!w) {
        O();
        return;
      }
      const T = w();
      [
        rc(T),
        Sr(T)
      ].includes(!0) || Cl(Tf, "beforeChange must return type `Promise<boolean>` or `boolean`"), rc(T) ? T.then((Y) => {
        Y && O();
      }).catch((Y) => {
      }) : T && O();
    }, C = () => {
      var w, T;
      (T = (w = d.value) == null ? void 0 : w.focus) == null || T.call(w);
    };
    return vt(() => {
      d.value.checked = f.value;
    }), t({
      focus: C,
      checked: f
    }), (w, T) => (N(), W("div", {
      class: q(c(h)),
      onClick: nt(R, ["prevent"])
    }, [
      b("input", {
        id: c(i),
        ref_key: "input",
        ref: d,
        class: q(c(s).e("input")),
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
        onChange: O,
        onKeydown: vn(R, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !w.inlinePrompt && (w.inactiveIcon || w.inactiveText) ? (N(), W("span", {
        key: 0,
        class: q(c(y))
      }, [
        w.inactiveIcon ? (N(), he(c(_t), { key: 0 }, {
          default: pe(() => [
            (N(), he(Wt(w.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !w.inactiveIcon && w.inactiveText ? (N(), W("span", {
          key: 1,
          "aria-hidden": c(f)
        }, D(w.inactiveText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: m,
        class: q(c(s).e("core")),
        style: Nt(c(v))
      }, [
        w.inlinePrompt ? (N(), W("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          w.activeIcon || w.inactiveIcon ? (N(), he(c(_t), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: pe(() => [
              (N(), he(Wt(c(f) ? w.activeIcon : w.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : w.activeText || w.inactiveText ? (N(), W("span", {
            key: 1,
            class: q(c(s).is("text")),
            "aria-hidden": !c(f)
          }, D(c(f) ? w.activeText : w.inactiveText), 11, ["aria-hidden"])) : ee("v-if", !0)
        ], 2)) : ee("v-if", !0),
        b("div", {
          class: q(c(s).e("action"))
        }, [
          w.loading ? (N(), he(c(_t), {
            key: 0,
            class: q(c(s).is("loading"))
          }, {
            default: pe(() => [
              M(c(Hd))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? Ae(w.$slots, "active-action", { key: 1 }, () => [
            w.activeActionIcon ? (N(), he(c(_t), { key: 0 }, {
              default: pe(() => [
                (N(), he(Wt(w.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(f) ? ee("v-if", !0) : Ae(w.$slots, "inactive-action", { key: 2 }, () => [
            w.inactiveActionIcon ? (N(), he(c(_t), { key: 0 }, {
              default: pe(() => [
                (N(), he(Wt(w.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !w.inlinePrompt && (w.activeIcon || w.activeText) ? (N(), W("span", {
        key: 1,
        class: q(c(g))
      }, [
        w.activeIcon ? (N(), he(c(_t), { key: 0 }, {
          default: pe(() => [
            (N(), he(Wt(w.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !w.activeIcon && w.activeText ? (N(), W("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, D(w.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var CT = /* @__PURE__ */ rt(AT, [["__file", "switch.vue"]]);
const IT = Tn(CT), Sf = ["success", "info", "warning", "error"], zt = Kd({
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
  appendTo: wt ? document.body : void 0
}), OT = Je({
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
    type: Mn,
    default: zt.icon
  },
  id: {
    type: String,
    default: zt.id
  },
  message: {
    type: Se([
      String,
      Object,
      Function
    ]),
    default: zt.message
  },
  onClose: {
    type: Se(Function),
    default: zt.onClose
  },
  showClose: {
    type: Boolean,
    default: zt.showClose
  },
  type: {
    type: String,
    values: Sf,
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
}), LT = {
  destroy: () => !0
}, yn = Qf([]), xT = (e) => {
  const t = yn.findIndex((o) => o.id === e), n = yn[t];
  let r;
  return t > 0 && (r = yn[t - 1]), { current: n, prev: r };
}, RT = (e) => {
  const { prev: t } = xT(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, NT = (e, t) => yn.findIndex((r) => r.id === e) > 0 ? 16 : t, PT = ce({
  name: "ElMessage"
}), $T = /* @__PURE__ */ ce({
  ...PT,
  props: OT,
  emits: LT,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = zy, { ns: o, zIndex: a } = zd("message"), { currentZIndex: s, nextZIndex: i } = a, l = G(), u = G(!1), d = G(0);
    let m;
    const h = P(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = P(() => {
      const x = n.type;
      return { [o.bm("icon", x)]: x && Fa[x] };
    }), g = P(() => n.icon || Fa[n.type] || ""), v = P(() => RT(n.id)), A = P(() => NT(n.id, n.offset) + v.value), f = P(() => d.value + A.value), O = P(() => ({
      top: `${A.value}px`,
      zIndex: s.value
    }));
    function R() {
      n.duration !== 0 && ({ stop: m } = Id(() => {
        w();
      }, n.duration));
    }
    function C() {
      m?.();
    }
    function w() {
      u.value = !1;
    }
    function T({ code: x }) {
      x === Fn.esc && w();
    }
    return vt(() => {
      R(), i(), u.value = !0;
    }), Ce(() => n.repeatNum, () => {
      C(), R();
    }), wn(document, "keydown", T), Nn(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: w
    }), (x, Y) => (N(), he(_o, {
      name: c(o).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (Z) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: pe(() => [
        At(b("div", {
          id: x.id,
          ref_key: "messageRef",
          ref: l,
          class: q([
            c(o).b(),
            { [c(o).m(x.type)]: x.type },
            c(o).is("center", x.center),
            c(o).is("closable", x.showClose),
            c(o).is("plain", x.plain),
            x.customClass
          ]),
          style: Nt(c(O)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: R
        }, [
          x.repeatNum > 1 ? (N(), he(c(jk), {
            key: 0,
            value: x.repeatNum,
            type: c(h),
            class: q(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(g) ? (N(), he(c(_t), {
            key: 1,
            class: q([c(o).e("icon"), c(y)])
          }, {
            default: pe(() => [
              (N(), he(Wt(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          Ae(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (N(), W(pt, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: q(c(o).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (N(), W("p", {
              key: 0,
              class: q(c(o).e("content"))
            }, D(x.message), 3))
          ]),
          x.showClose ? (N(), he(c(_t), {
            key: 2,
            class: q(c(o).e("closeBtn")),
            onClick: nt(w, ["stop"])
          }, {
            default: pe(() => [
              M(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [lr, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var MT = /* @__PURE__ */ rt($T, [["__file", "message.vue"]]);
let DT = 1;
const Ef = (e) => {
  const t = !e || Vt(e) || Uo(e) || lt(e) ? { message: e } : e, n = {
    ...zt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Vt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    _n(r) || (r = document.body), n.appendTo = r;
  }
  return Sr(pn.grouping) && !n.grouping && (n.grouping = pn.grouping), Be(pn.duration) && n.duration === 3e3 && (n.duration = pn.duration), Be(pn.offset) && n.offset === 16 && (n.offset = pn.offset), Sr(pn.showClose) && !n.showClose && (n.showClose = pn.showClose), n;
}, FT = (e) => {
  const t = yn.indexOf(e);
  if (t === -1)
    return;
  yn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, zT = ({ appendTo: e, ...t }, n) => {
  const r = `message_${DT++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), FT(d);
    },
    onDestroy: () => {
      Ca(null, a);
    }
  }, i = M(MT, s, lt(s.message) || Uo(s.message) ? {
    default: lt(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || bo._context, Ca(i, a), e.appendChild(a.firstElementChild);
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
}, bo = (e = {}, t) => {
  if (!wt)
    return { close: () => {
    } };
  const n = Ef(e);
  if (n.grouping && yn.length) {
    const o = yn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Be(pn.max) && yn.length >= pn.max)
    return { close: () => {
    } };
  const r = zT(n, t);
  return yn.push(r), r.handler;
};
Sf.forEach((e) => {
  bo[e] = (t = {}, n) => {
    const r = Ef(t);
    return bo({ ...r, type: e }, n);
  };
});
function BT(e) {
  for (const t of yn)
    (!e || e === t.props.type) && t.handler.close();
}
bo.closeAll = BT;
bo._context = null;
const VT = Vd(bo, "$message"), Af = [
  "success",
  "info",
  "warning",
  "error"
], jT = Je({
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
    values: [...Af, ""],
    default: ""
  },
  zIndex: Number
}), UT = {
  destroy: () => !0
}, HT = ce({
  name: "ElNotification"
}), WT = /* @__PURE__ */ ce({
  ...HT,
  props: jT,
  emits: UT,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = zd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = Fy, l = G(!1);
    let u;
    const d = P(() => {
      const R = n.type;
      return R && Fa[n.type] ? r.m(R) : "";
    }), m = P(() => n.type && Fa[n.type] || n.icon), h = P(() => n.position.endsWith("right") ? "right" : "left"), y = P(() => n.position.startsWith("top") ? "top" : "bottom"), g = P(() => {
      var R;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (R = n.zIndex) != null ? R : s.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: u } = Id(() => {
        l.value && f();
      }, n.duration));
    }
    function A() {
      u?.();
    }
    function f() {
      l.value = !1;
    }
    function O({ code: R }) {
      R === Fn.delete || R === Fn.backspace ? A() : R === Fn.esc ? l.value && f() : v();
    }
    return vt(() => {
      v(), a(), l.value = !0;
    }), wn(document, "keydown", O), t({
      visible: l,
      close: f
    }), (R, C) => (N(), he(_o, {
      name: c(r).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (w) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: pe(() => [
        At(b("div", {
          id: R.id,
          class: q([c(r).b(), R.customClass, c(h)]),
          style: Nt(c(g)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: v,
          onClick: R.onClick
        }, [
          c(m) ? (N(), he(c(_t), {
            key: 0,
            class: q([c(r).e("icon"), c(d)])
          }, {
            default: pe(() => [
              (N(), he(Wt(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          b("div", {
            class: q(c(r).e("group"))
          }, [
            b("h2", {
              class: q(c(r).e("title")),
              textContent: D(R.title)
            }, null, 10, ["textContent"]),
            At(b("div", {
              class: q(c(r).e("content")),
              style: Nt(R.title ? void 0 : { margin: 0 })
            }, [
              Ae(R.$slots, "default", {}, () => [
                R.dangerouslyUseHTMLString ? (N(), W(pt, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: R.message }, null, 8, ["innerHTML"])
                ], 2112)) : (N(), W("p", { key: 0 }, D(R.message), 1))
              ])
            ], 6), [
              [lr, R.message]
            ]),
            R.showClose ? (N(), he(c(_t), {
              key: 0,
              class: q(c(r).e("closeBtn")),
              onClick: nt(f, ["stop"])
            }, {
              default: pe(() => [
                M(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [lr, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var GT = /* @__PURE__ */ rt(WT, [["__file", "notification.vue"]]);
const Va = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Qs = 16;
let KT = 1;
const yo = function(e = {}, t) {
  if (!wt)
    return { close: () => {
    } };
  (Vt(e) || Uo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Va[n].forEach(({ vm: d }) => {
    var m;
    r += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + Qs;
  }), r += Qs;
  const o = `notification_${KT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      qT(o, n, a);
    }
  };
  let i = document.body;
  _n(e.appendTo) ? i = e.appendTo : Vt(e.appendTo) && (i = document.querySelector(e.appendTo)), _n(i) || (i = document.body);
  const l = document.createElement("div"), u = M(GT, s, lt(s.message) ? s.message : Uo(s.message) ? () => s.message : null);
  return u.appContext = $n(t) ? yo._context : t, u.props.onDestroy = () => {
    Ca(null, l);
  }, Ca(u, l), Va[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Af.forEach((e) => {
  yo[e] = (t = {}, n) => ((Vt(t) || Uo(t)) && (t = {
    message: t
  }), yo({ ...t, type: e }, n));
});
function qT(e, t, n) {
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
      const { el: d, component: m } = r[u].vm, h = Number.parseInt(d.style[i], 10) - s - Qs;
      m.props.offset = h;
    }
}
function YT() {
  for (const e of Object.values(Va))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
yo.closeAll = YT;
yo._context = null;
const ZT = Vd(yo, "$notify"), at = {
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
    r === "center" ? VT({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ZT({
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
}, XT = "snippets-code:developer-mode", Cf = "snippets-code:frontend-diagnostics", QT = 240, Po = "[REDACTED]", Aa = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Po}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Po}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Po
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Po}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Po}`
), If = (e) => {
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
}, JT = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, eS = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Cf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Yl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(XT) === "true";
  } catch {
    return !1;
  }
}, tS = (e, t, n) => {
  if (!Yl() || typeof localStorage > "u") return;
  const r = eS();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: JT(),
    message: Aa(t),
    data: If(n)
  });
  try {
    localStorage.setItem(
      Cf,
      JSON.stringify(r.slice(-QT))
    );
  } catch {
  }
}, nS = () => Yl(), rS = (e) => e === "warn" || e === "error" || !1 || !1 || Yl(), ya = (e, t, n) => {
  tS(e, t, n), rS(e) && $t("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : If(n)
  }).catch(() => {
  });
}, mn = {
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
    nS() && ya("debug", e, t);
  }
}, oS = { class: "sidebar-header" }, aS = { class: "sidebar-title-block" }, sS = ["title", "aria-pressed"], lS = { class: "sidebar-nav" }, iS = { class: "sidebar-nav-item sidebar-nav-item--search" }, cS = ["placeholder"], uS = { class: "sidebar-section recent-section" }, dS = { class: "section-title-row" }, fS = { class: "section-title" }, pS = ["title"], mS = {
  key: 0,
  class: "chat-list"
}, hS = ["onClick", "onKeydown"], gS = { class: "chat-item-title" }, vS = { class: "chat-item-time" }, bS = ["title", "onClick"], yS = {
  key: 1,
  class: "sidebar-empty"
}, _S = { class: "sidebar-service" }, wS = { class: "sidebar-service-row" }, kS = { class: "chat-panel" }, TS = ["title"], SS = {
  key: 0,
  class: "empty-state"
}, ES = { class: "empty-title" }, AS = { class: "empty-desc" }, CS = {
  key: 0,
  class: "date-divider"
}, IS = { class: "message-avatar" }, OS = { key: 1 }, LS = { class: "message-body" }, xS = { class: "user-bubble" }, RS = {
  key: 0,
  class: "user-message-text"
}, NS = {
  key: 1,
  class: "message-attachment-list"
}, PS = ["title"], $S = ["src", "alt"], MS = {
  key: 1,
  class: "attachment-file-icon"
}, DS = { key: 2 }, FS = {
  key: 0,
  class: "message-actions"
}, zS = ["title", "onClick"], BS = ["title", "onClick"], VS = ["title", "onClick"], jS = { class: "assistant-head" }, US = { key: 0 }, HS = {
  key: 0,
  class: "assistant-content-stack"
}, WS = ["open"], GS = { class: "reasoning-summary-title" }, KS = { key: 0 }, qS = ["innerHTML"], YS = ["innerHTML"], ZS = {
  key: 1,
  class: "message-content loading-text"
}, XS = {
  key: 0,
  class: "message-stats"
}, QS = { class: "message-stats__context" }, JS = { class: "message-stats__output" }, e2 = { class: "message-stats__elapsed" }, t2 = { class: "message-stats__speed" }, n2 = {
  key: 0,
  class: "message-stats-time"
}, r2 = {
  key: 1,
  class: "message-warning"
}, o2 = {
  key: 2,
  class: "message-actions"
}, a2 = ["title", "aria-label"], s2 = ["disabled", "title", "onClick"], l2 = ["disabled", "title", "onClick"], i2 = ["title", "onClick"], c2 = ["title", "onClick"], u2 = ["title", "onClick"], d2 = ["title", "onClick"], f2 = ["title", "onClick"], p2 = ["title"], m2 = {
  key: 0,
  class: "attachment-preview-list"
}, h2 = ["src", "alt"], g2 = {
  key: 1,
  class: "attachment-file-icon"
}, v2 = { class: "attachment-meta" }, b2 = ["title", "onClick"], y2 = ["placeholder"], _2 = { class: "input-toolbar" }, w2 = { class: "input-toolbar-left" }, k2 = ["title"], T2 = { class: "model-select-shell" }, S2 = ["disabled"], E2 = ["value"], A2 = {
  key: 0,
  value: ""
}, C2 = ["title", "aria-pressed"], I2 = { class: "input-toolbar-right" }, O2 = ["title", "aria-label"], L2 = ["disabled", "title", "aria-label"], x2 = 96, R2 = 24, N2 = 120, P2 = 4096, Cs = 160, $2 = 420, M2 = 1200, D2 = 24e3, F2 = 1800, z2 = 5200, B2 = 90, V2 = 1e3, j2 = /* @__PURE__ */ ce({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = G(""), r = G([]), o = G(""), a = G(!1), s = G(""), i = G([]), l = G(!1), u = G(!1), d = G(!1), m = G(!1), h = G(!1), y = G(!0), g = G(!1), v = G(null), A = G(null), f = G(null), O = G(""), R = G(null), C = G(null), w = G(null), T = G(Date.now());
    let x = null, Y = null, Z = null, se = !1;
    const ge = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), _e = (p) => `${Date.now()}-${p}-${Math.random().toString(16).slice(2, 8)}`, B = (p) => p.type === "root", J = (p) => new Map(p.map((I) => [I.id, I])), H = (p) => p.find(B), me = (p, I) => {
      if (!I) return null;
      const S = J(p);
      let F = S.get(I);
      const j = /* @__PURE__ */ new Set();
      for (; F?.childIds?.length && !j.has(F.id); )
        j.add(F.id), F = S.get(F.childIds[F.childIds.length - 1]);
      return F?.id ?? null;
    }, X = (p, I) => {
      if (p.some(B)) {
        const Q = p.map((Te) => ({
          ...Te,
          type: Te.type ?? "text",
          parentId: Te.parentId ?? null,
          childIds: Te.childIds ?? []
        })), de = H(Q);
        return {
          messages: Q,
          currentNodeId: me(Q, Q.at(-1)?.id) ?? de?.id ?? null
        };
      }
      const S = {
        id: _e("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: I,
        parentId: null,
        childIds: []
      }, F = [S];
      let j = S.id;
      for (const Q of p) {
        const de = {
          ...Q,
          role: Q.role === "system" ? "assistant" : Q.role,
          type: "text",
          parentId: j,
          childIds: []
        };
        F.find((xe) => xe.id === j)?.childIds?.push(de.id), F.push(de), j = de.id;
      }
      return { messages: F, currentNodeId: j };
    }, K = (p, I) => {
      if (!I) return [];
      const S = J(p), F = [], j = /* @__PURE__ */ new Set();
      let Q = S.get(I);
      for (; Q && !j.has(Q.id); )
        j.add(Q.id), F.unshift(Q), Q = Q.parentId ? S.get(Q.parentId) : void 0;
      return F;
    }, Pe = (p) => {
      if (!p) return [];
      const I = p.currentNodeId ?? me(p.messages, H(p.messages)?.id);
      return K(p.messages, I).filter(
        (S) => !B(S)
      );
    }, Ue = (p) => {
      if (!p) return [];
      const I = J(p.messages), S = (F) => me(p.messages, F) ?? F;
      return Pe(p).map((F) => {
        const Q = (F.parentId ? I.get(F.parentId) : void 0)?.childIds ?? [F.id];
        return {
          message: F,
          siblingLeafNodeIds: Q.map(S),
          siblingCurrentIndex: Math.max(0, Q.indexOf(F.id))
        };
      });
    }, be = (p, I) => {
      const S = H(p.messages), F = I.parentId ?? p.currentNodeId ?? S?.id ?? null, j = {
        ...I,
        type: "text",
        parentId: F,
        childIds: []
      };
      if (p.messages.push(j), F) {
        const Q = p.messages.find((de) => de.id === F);
        Q && (Q.childIds = [...Q.childIds ?? [], j.id]);
      }
      return p.currentNodeId = j.id, j;
    }, we = P(
      () => (!!s.value.trim() || i.value.length > 0) && !l.value
    ), te = P(() => R.value?.healthy ? t("localAi.serviceHealthy") : R.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), le = P(
      () => r.value.find((p) => p.id === o.value) ?? null
    ), Ze = P(() => Pe(le.value)), ve = P(() => Ue(le.value)), et = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", ut = P(
      () => et(O.value) || et(R.value?.modelPath) || et(A.value?.modelPath) || t("localAi.localModel")
    ), qe = P(() => f.value?.mainModels ?? []), Mt = P(() => !!A.value?.mmprojPath), ot = P(
      () => A.value?.ctxSize ?? R.value?.ctxSize ?? 4096
    ), Ct = P(() => {
      const p = ot.value, I = A.value?.maxTokens ?? 0;
      return I > 0 ? Math.min(
        Math.max(I, 512),
        Math.max(512, p - 512)
      ) : Math.min(
        Math.max(P2, Math.floor(p * 0.5)),
        Math.max(512, p - 512)
      );
    }), It = P(
      () => Math.max(512, ot.value - Ct.value)
    ), Ge = P(() => {
      const p = ut.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(p);
    }), St = P(() => {
      const p = n.value.trim().toLowerCase();
      return r.value.filter(
        (I) => !p || I.title.toLowerCase().includes(p) || I.messages.some(
          (S) => !B(S) && S.content.toLowerCase().includes(p)
        )
      ).slice().sort((I, S) => S.updatedAt.localeCompare(I.updatedAt));
    }), k = () => t("localAi.now"), L = () => {
      const p = (/* @__PURE__ */ new Date()).toISOString(), I = {
        id: _e("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: p,
        parentId: null,
        childIds: []
      };
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: p,
        updatedAt: p,
        updatedAtLabel: k(),
        currentNodeId: I.id,
        messages: [I]
      };
    }, V = () => {
      const p = C.value;
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= x2 : !0;
    }, re = () => {
      const p = V();
      y.value = p, g.value = !p;
    }, Le = () => {
      re();
    }, ue = async (p = {}) => {
      await mt(), !(!C.value || !p.force && !y.value) && (se = se || p.force === !0, Z === null && (Z = window.requestAnimationFrame(() => {
        Z = null;
        const S = C.value, F = se;
        if (se = !1, !S || !F && !y.value) return;
        const j = Math.max(0, S.scrollHeight - S.clientHeight);
        Math.abs(S.scrollTop - j) > 1 && (S.scrollTop = j), re();
      })));
    }, E = () => {
      y.value = !0, ue({ force: !0 });
    }, z = async () => {
      try {
        A.value = await nd(), O.value = A.value.modelPath ?? "", f.value = await rd(A.value), Ge.value || (m.value = !1);
      } catch (p) {
        mn.warn("[LocalAI] refresh chat config failed", p);
      }
    }, ke = async () => {
      u.value = !0;
      try {
        R.value = await od();
      } catch (p) {
        mn.warn("[LocalAI] refresh chat status failed", p);
      } finally {
        u.value = !1;
      }
    }, Re = async () => {
      try {
        const p = await Fh();
        r.value = p.map((I) => {
          const S = I.messages?.length ? I.messages : I.turns.map((j) => ({
            id: j.id,
            role: j.role,
            content: j.content,
            createdAt: j.createdAt
          })), F = X(
            S,
            I.createdAt
          );
          return {
            id: I.id,
            title: I.title,
            createdAt: I.createdAt,
            updatedAt: I.updatedAt,
            updatedAtLabel: new Date(I.updatedAt).toLocaleString(),
            currentNodeId: I.currentNodeId ?? F.currentNodeId,
            messages: F.messages
          };
        }), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (p) {
        mn.warn("[LocalAI] refresh histories failed", p);
      }
    }, Xe = async () => {
      await Promise.all([z(), ke(), Re()]);
    }, dt = async () => {
      const p = le.value;
      if (!p) return;
      const I = Pe(p).map((S) => ({
        id: S.id,
        role: S.role,
        content: S.content,
        createdAt: S.createdAt
      }));
      await zh({
        id: p.id,
        title: p.title,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        turns: I,
        currentNodeId: p.currentNodeId,
        messages: p.messages
      });
    }, Ye = () => {
      const p = L();
      r.value.unshift(p), o.value = p.id, s.value = "";
    }, Wn = () => {
      le.value || Ye();
    }, fr = (p) => {
      o.value = p;
      const I = le.value;
      I && !I.currentNodeId && (I.currentNodeId = me(I.messages, H(I.messages)?.id) ?? null), y.value = !0, ue({ force: !0 });
    }, Kr = async (p) => {
      r.value = r.value.filter((I) => I.id !== p), await Bh(p), o.value === p && (o.value = r.value[0]?.id ?? "");
    }, pr = () => {
      w.value?.click();
    }, Sn = (p, I) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: p.name,
      type: I,
      mime: p.type || "application/octet-stream",
      size: p.size,
      status: "pending"
    }), Gn = async (p) => {
      if (hs(p)) {
        const S = Sn(p, "image");
        if (p.size > Kh)
          return {
            ...S,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...S,
            status: "parsed",
            dataUrl: await Zh(p)
          };
        } catch (F) {
          return { ...S, status: "error", error: String(F) };
        }
      }
      if (ji(p)) {
        const S = Sn(p, "text");
        if (p.size > Gh)
          return {
            ...S,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const F = await Xh(p);
          return {
            ...S,
            status: "parsed",
            text: F.text,
            error: F.truncated ? "truncated" : void 0
          };
        } catch (F) {
          return { ...S, status: "error", error: String(F) };
        }
      }
      return {
        ...Sn(p, "unsupported"),
        status: "error",
        error: Yh(p) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, rn = async (p) => {
      const I = Array.from(p), S = Wh - i.value.length;
      if (S <= 0) {
        at.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      I.length > S && at.msg(t("localAi.attachmentLimit"), "warning");
      const F = I.slice(0, S), j = F.map(
        (Q) => Sn(
          Q,
          hs(Q) ? "image" : ji(Q) ? "text" : "unsupported"
        )
      );
      i.value.push(...j), await Promise.all(
        F.map(async (Q, de) => {
          const Te = await Gn(Q), xe = i.value.findIndex(
            (Et) => Et.id === j[de].id
          );
          xe >= 0 && (i.value[xe] = Te);
        })
      );
    }, Yt = async (p) => {
      const I = p.target;
      I.files?.length && await rn(I.files), I.value = "";
    }, En = async (p) => {
      p.dataTransfer?.files.length && await rn(p.dataTransfer.files);
    }, Or = async (p) => {
      const I = Array.from(p.clipboardData?.files ?? []);
      if (!I.length) return;
      const S = I.filter(hs);
      S.length && (p.preventDefault(), await rn(S));
    }, Lr = (p) => {
      i.value = i.value.filter(
        (I) => I.id !== p
      );
    }, mr = (p) => p.status === "pending" ? t("localAi.attachmentPending") : p.status === "error" ? p.error ?? "" : p.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), xr = async () => {
      if (!(!A.value || !O.value)) {
        A.value.modelPath = O.value;
        try {
          A.value = await Ta(A.value), R.value?.running && (R.value = await ad()), at.msg(t("localAi.modelChanged"));
        } catch (p) {
          at.msg(`${t("localAi.configSaveFailed")}: ${p}`, "error");
        }
      }
    }, Rr = (p) => {
      let I = 0;
      for (let S = 0; S < p.length; S += 1)
        I = I * 31 + p.charCodeAt(S) >>> 0;
      return `code-${p.length}-${I.toString(16)}`;
    }, ko = (p) => p.includes("<pre>") ? p.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (I, S, F) => {
        const j = document.createElement("textarea");
        j.innerHTML = F;
        const Q = j.value, de = Rr(Q);
        if (ae.set(de, Q), ae.size > N2) {
          const xe = ae.keys().next().value;
          typeof xe == "string" && ae.delete(xe);
        }
        const Te = S ? ` class="${S}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${de}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${Te}>${F}</code></pre></div>`;
      }
    ) : p, An = (p, I = {}) => {
      const S = I.cache !== !1, F = I.enhanceCodeBlocks !== !1;
      if (S) {
        const de = ge.get(p);
        if (de) return de;
      }
      const j = xg(Ve.parse(p, { async: !1 })), Q = F ? ko(j) : j;
      if (!S) return Q;
      if (ge.set(p, Q), ge.size > R2) {
        const de = ge.keys().next().value;
        typeof de == "string" && ge.delete(de);
      }
      return Q;
    }, Nr = (p, I) => {
      const S = Zr(p, I);
      if (!p.streaming) return An(S);
      const F = ye.get(p.id), j = I === "reasoning" ? "reasoningHtml" : "answerHtml", Q = I === "reasoning" ? "reasoning" : "answer";
      if (F?.[Q] === S && F[j])
        return F[j];
      const de = An(S, {
        cache: !1,
        enhanceCodeBlocks: !1
      });
      return F?.[Q] === S && (F[j] = de), de;
    }, qr = async (p) => {
      const F = p.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!F) return;
      const j = ae.get(F);
      if (j)
        try {
          await navigator.clipboard.writeText(j), at.msg(t("localAi.codeCopied"));
        } catch (Q) {
          at.msg(`${t("common.copy")}: ${Q}`, "error");
        }
    }, Fe = (p) => {
      const I = p.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!I || I.index === void 0)
        return { reasoning: "", answer: p };
      const S = p.slice(0, I.index).trim(), F = I[0], j = p.slice(I.index + F.length).trim();
      return {
        reasoning: (I[1] ?? "").trim(),
        answer: [S, j].filter(Boolean).join(`

`)
      };
    }, Cn = (p) => Fe(p).reasoning, Yr = (p) => Fe(p).answer, Zr = (p, I) => {
      const { reasoning: S, answer: F } = Fe(p.content);
      if (!p.streaming)
        return ye.delete(p.id), I === "reasoning" ? S : F;
      const j = Date.now(), Q = ye.get(p.id), de = p.content.length >= D2, Te = de ? M2 : $2, xe = de ? z2 : F2;
      if (!Q || j - Q.updatedAt >= Te || p.content.length - Q.source.length >= xe || !Q.reasoning && !!S || !Q.answer && !!F) {
        const Ot = {
          source: p.content,
          reasoning: S,
          answer: F,
          updatedAt: j
        };
        return ye.set(p.id, Ot), I === "reasoning" ? S : F;
      }
      return I === "reasoning" ? Q.reasoning : Q.answer;
    }, hr = (p) => !!Yr(p.content), gr = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !hr(p)), Xr = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const I = p.reasoningEndedAt ?? (p.streaming ? T.value : Date.now());
      return Math.max(0, (I - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, To = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Xr(p)
    }), it = (p) => new Date(
      p.createdAt || le.value?.updatedAt || Date.now()
    ), $ = (p) => it(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), ne = (p, I) => it(p).toDateString() === it(I).toDateString(), Ee = (p) => it(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), tt = (p) => {
      const I = ve.value[p]?.message;
      if (!I) return !1;
      if (p === 0) return !Ee(I);
      const S = ve.value[p - 1]?.message;
      return S ? ne(S, I) ? it(I).getTime() - it(S).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, bt = (p) => {
      const I = it(p), S = I.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), F = I.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Ee(p) ? F : `${S} ${F}`;
    }, Zt = (p) => p.streaming ? gr(p) ? t("localAi.thinking") : t("localAi.generating") : $(p), jt = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Dt = (p, I) => {
      p.allowThinking && (I.includes("<think>") && !p.reasoningStartedAt && (p.reasoningStartedAt = Date.now()), I.includes("</think>") && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()));
    }, ln = (p) => {
      const I = p.trim();
      if (!I) return 0;
      const S = (I.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Q = (I.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((de, Te) => /^[A-Za-z0-9_]+$/.test(Te) ? de + Math.max(1, Math.ceil(Te.length / 4)) : de + 1, 0);
      return Math.max(1, Math.ceil(S + Q));
    }, Kn = (p) => Math.max(0, Math.ceil(p.length / 4)), is = (p) => Array.isArray(p) ? p.filter((I) => I.type === "text").map((I) => I.text).join(`
`) : p, aa = (p) => {
      const I = p.attachments?.filter(
        (Q) => Q.status === "parsed"
      ) ?? [], S = Qh(
        p.content,
        I
      ), F = I.filter(
        (Q) => Q.type === "image" && Q.dataUrl
      );
      if (!F.length) return S;
      const j = [{ type: "text", text: S }];
      for (const Q of F)
        j.push({
          type: "image_url",
          image_url: {
            url: Q.dataUrl ?? ""
          }
        });
      return j;
    }, In = (p) => ln(
      p.map((I) => {
        const S = is(I.content);
        return `${I.role}: ${S}`;
      }).join(`
`)
    ), Pr = (p, I) => {
      const S = Math.max(240, I * 4);
      return p.length <= S ? p : `${t("localAi.previousAnswerTail")}

${p.slice(-S)}`;
    }, vr = (p, I) => {
      const S = [];
      let F = 0;
      for (let j = p.length - 1; j >= 0; j -= 1) {
        const Q = p[j], de = In([Q]);
        if (F + de <= I || S.length === 0) {
          S.unshift(Q), F += de;
          continue;
        }
        const Te = I - F;
        if (Q.role !== "assistant" || typeof Q.content != "string" || Te < Cs)
          continue;
        let xe = Te, Et = {
          ...Q,
          content: Pr(Q.content, xe)
        }, Ot = In([Et]);
        for (; Ot > Te && xe > Cs; )
          xe = Math.max(
            Cs,
            Math.floor(xe * 0.7)
          ), Et = {
            ...Q,
            content: Pr(Q.content, xe)
          }, Ot = In([Et]);
        F + Ot <= I && (S.unshift(Et), F += Ot);
      }
      return S;
    }, ie = () => vr(
      Ze.value.filter((p) => !p.streaming && p.role !== "system").map((p) => ({
        role: p.role,
        content: p.role === "user" ? aa(p) : p.content
      })),
      It.value
    ), _ = (p) => {
      const I = A.value?.maxTokens ?? 0;
      if (I > 0) return I;
      const S = In(p);
      return Math.max(256, ot.value - S - 128);
    }, U = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? A.value?.ctxSize ?? R.value?.ctxSize ?? 4096
    ), oe = (p) => {
      const I = T.value, S = p.stats?.promptTokens ?? p.promptTokens ?? 0, F = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? Kn(p.content) : ln(p.content)), j = U(p), Q = Math.min(
        p.stats?.totalTokens ?? S + F,
        j
      ), de = Math.max(
        0,
        (p.stats?.generationTimeMs ?? p.elapsedMs ?? I - it(p).getTime()) / 1e3
      ), Te = p.stats?.tokensPerSecond ?? (de > 0 ? F / de : 0);
      return {
        context: Q,
        contextMax: j,
        contextPercent: Math.min(100, Math.round(Q / j * 100)),
        output: F,
        outputMax: (A.value?.maxTokens ?? 0) > 0 ? String(A.value?.maxTokens) : "∞",
        seconds: de.toFixed(1),
        speed: Te.toFixed(1)
      };
    }, Ne = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : (p.stats?.totalTokens ?? (p.promptTokens ?? 0) + (p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? Kn(p.content) : ln(p.content)))) >= U(p) - 8 ? t("localAi.contextLimitReached") : p.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", Oe = (p) => {
      const I = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(I) ? t("localAi.contextExceeded") : I;
    }, Ke = (p) => {
      const I = p.replace(/\s+/g, " ").trim();
      if (I.length < 900) return !1;
      const F = I.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Te) => Te.toLowerCase()) ?? [];
      if (F.length < 140) return !1;
      const j = F.slice(-120), Q = /* @__PURE__ */ new Map();
      for (const Te of j) Q.set(Te, (Q.get(Te) ?? 0) + 1);
      if (Q.size / j.length < 0.12 && [...Q.values()].some((Te) => Te >= 56))
        return !0;
      for (let Te = 1; Te <= 4; Te += 1) {
        const xe = F.slice(-Te).join("\0");
        let Et = 1;
        for (let Ot = F.length - Te * 2; Ot >= 0 && F.slice(Ot, Ot + Te).join("\0") === xe; Ot -= Te)
          Et += 1;
        if (Et >= Math.max(24, Math.ceil(72 / Te))) return !0;
      }
      return !1;
    }, Ut = () => {
      Y || (T.value = Date.now(), Y = setInterval(() => {
        T.value = Date.now();
      }, V2));
    }, Xt = () => {
      Y && (clearInterval(Y), Y = null, T.value = Date.now());
    }, Qt = async (p) => {
      const I = performance.now(), S = sd(), F = ie();
      let j = "", Q = null, de = null, Te = !1, xe = !1;
      v.value = S, d.value = !1, p.promptTokens = In(F), p.contextSize = ot.value;
      const Et = async () => {
        if (!j) {
          Q = null, de?.(), de = null;
          return;
        }
        const ft = d.value ? 1200 : j.length > 4e3 ? 900 : j.length > 1200 ? 520 : j.length > 240 ? 180 : 64;
        p.content += j.slice(0, ft), j = j.slice(ft), p.estimatedCompletionTokens = Kn(
          p.content
        ), !xe && !d.value && Ke(p.content) && (xe = !0, d.value = !0, p.repetitionStopped = !0, ms(S).catch(
          (Ao) => mn.warn("[LocalAI] repetition stop failed", Ao)
        )), await ue(), Q = window.setTimeout(() => {
          Et().catch(
            (Ao) => mn.warn("[LocalAI] stream pump failed", Ao)
          );
        }, B2);
      }, Ot = (ft) => {
        ft && (Dt(p, ft), j += ft, Q === null && (Q = window.setTimeout(() => {
          Et().catch(
            (Ao) => mn.warn("[LocalAI] stream pump failed", Ao)
          );
        }, 32)));
      }, la = async () => {
        !j && Q === null || await new Promise((ft) => {
          de = ft;
        });
      }, Qr = await Dh(
        {
          messages: F,
          maxTokens: _(F),
          enableThinking: p.allowThinking === !0
        },
        (ft) => {
          Te = !0, Ot(ft);
        },
        {
          requestId: S,
          onStats: (ft) => {
            p.stats = {
              ...p.stats ?? {},
              ...ft
            }, ft.ctxSize && (p.contextSize = ft.ctxSize), ft.completionTokens !== void 0 && (p.estimatedCompletionTokens = ft.completionTokens), T.value = Date.now();
          }
        }
      ).catch(async (ft) => {
        throw await la(), ft;
      });
      if (!Te)
        Ot(Qr.content);
      else if (!d.value) {
        const ft = p.content.length + j.length;
        Qr.content.length > ft && Ot(Qr.content.slice(ft));
      }
      await la(), !d.value && Qr.content && p.content !== Qr.content && (p.content = Qr.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? Kn(p.content), ye.delete(p.id), p.streaming = !1, p.elapsedMs = performance.now() - I, p.stopped = d.value, p.interrupted = !1, p.error = "", T.value = Date.now(), v.value = null;
    }, So = async () => {
      const p = v.value;
      if (!(!l.value || !p || d.value)) {
        d.value = !0;
        try {
          await ms(p);
        } catch (I) {
          mn.warn("[LocalAI] cancel stream failed", I);
        }
      }
    }, yt = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), Eo());
    }, sa = () => {
      if (!s.value.trim() && !i.value.length) return !1;
      if (i.value.find(
        (F) => F.status === "pending"
      ))
        return at.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const I = i.value.find(
        (F) => F.status === "error" || F.type === "unsupported"
      );
      return I ? (at.msg(
        `${t("localAi.attachmentErrorBlock")}: ${I.name}`,
        "warning"
      ), !1) : i.value.some(
        (F) => F.type === "image"
      ) && !Mt.value ? (at.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, Eo = async () => {
      const p = s.value.trim();
      if (l.value || !sa()) return;
      Wn();
      const I = (/* @__PURE__ */ new Date()).toISOString(), S = i.value.map((xe) => ({
        ...xe
      })), F = p || S[0]?.name || "", j = le.value;
      if (!j) return;
      const Q = be(j, {
        id: _e("user"),
        role: "user",
        content: p,
        createdAt: I,
        attachments: S
      }), de = be(j, {
        id: _e("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: Q.id,
        streaming: !0,
        allowThinking: m.value && Ge.value,
        contextSize: ot.value,
        promptTokens: In(ie())
      });
      s.value = "", i.value = [], l.value = !0, Ut(), await ue({ force: !0 });
      const Te = performance.now();
      try {
        await Qt(de), le.value && (le.value.title = le.value.title === t("localAi.newChatTitle") ? F.slice(0, 28) : le.value.title, le.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), le.value.updatedAtLabel = new Date(
          le.value.updatedAt
        ).toLocaleString(), await dt()), await ke();
      } catch (xe) {
        if (!d.value) {
          s.value = p, i.value = S;
          const Et = Oe(xe);
          at.msg(`${t("localAi.chatFailed")}: ${Et}`, "error"), de.error = Et, de.interrupted = !!de.content.trim(), de.interrupted || (de.content = Et), le.value && (le.value.title = le.value.title === t("localAi.newChatTitle") ? F.slice(0, 28) : le.value.title, le.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), le.value.updatedAtLabel = new Date(
            le.value.updatedAt
          ).toLocaleString(), await dt());
        }
        de.streaming = !1, ye.delete(de.id), de.elapsedMs = performance.now() - Te;
      } finally {
        l.value = !1, v.value = null, Xt(), await ue();
      }
    }, Of = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Lf = (p) => {
      const I = new Date(p), S = /* @__PURE__ */ new Date(), F = S.getTime() - I.getTime(), j = 24 * 60 * 60 * 1e3;
      return I.toDateString() === S.toDateString() ? I.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : F < j * 2 ? t("localAi.yesterday") : F < j * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(F / j))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(F / (j * 7)))
      });
    }, Xl = async (p) => {
      try {
        await navigator.clipboard.writeText(p.content), at.msg(t("localAi.copied"));
      } catch (I) {
        at.msg(`${t("common.operationFailed")}: ${I}`, "error");
      }
    }, xf = (p, I) => {
      const S = J(p), F = /* @__PURE__ */ new Set([I]), j = (Q) => {
        const de = S.get(Q);
        for (const Te of de?.childIds ?? [])
          F.add(Te), j(Te);
      };
      return j(I), F;
    }, Ql = async (p) => {
      const I = le.value;
      if (!I) return;
      const S = I.messages.find((j) => j.id === p);
      if (!S || B(S)) return;
      const F = xf(I.messages, p);
      I.messages = I.messages.filter((j) => !F.has(j.id)).map((j) => ({
        ...j,
        childIds: (j.childIds ?? []).filter((Q) => !F.has(Q))
      })), I.currentNodeId && F.has(I.currentNodeId) && (I.currentNodeId = me(I.messages, S.parentId) ?? H(I.messages)?.id ?? null), I.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), I.updatedAtLabel = new Date(I.updatedAt).toLocaleString(), await dt();
    }, Jl = (p) => {
      s.value = p.content, le.value && p.parentId && (le.value.currentNodeId = p.parentId);
    }, ei = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), ti = (p, I) => {
      const S = le.value;
      if (!S) return;
      const F = p.siblingCurrentIndex + I, j = p.siblingLeafNodeIds[F];
      j && (S.currentNodeId = j, y.value = !0, ue({ force: !0 }));
    }, Rf = async (p) => {
      const I = le.value;
      if (!I || l.value) return;
      const S = I.messages.find((xe) => xe.id === p);
      if (!S || S.role !== "assistant") return;
      const F = K(I.messages, S.id);
      if (!F.length) return;
      const j = (/* @__PURE__ */ new Date()).toISOString(), Q = /* @__PURE__ */ new Map(), de = F.map((xe, Et) => {
        const Ot = _e(Et === 0 ? "root" : xe.role);
        return Q.set(xe.id, Ot), {
          ...xe,
          id: Ot,
          parentId: xe.parentId ? Q.get(xe.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: xe.attachments?.map((la) => ({ ...la }))
        };
      });
      for (let xe = 0; xe < de.length - 1; xe += 1)
        de[xe].childIds = [de[xe + 1].id];
      const Te = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${I.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: j,
        updatedAt: j,
        updatedAtLabel: k(),
        currentNodeId: de.at(-1)?.id ?? null,
        messages: de
      };
      r.value.unshift(Te), o.value = Te.id, s.value = "", i.value = [], y.value = !0, await dt(), await ue({ force: !0 }), at.msg(t("localAi.branchCreated"));
    }, Nf = async (p) => {
      const I = le.value;
      if (!I || l.value) return;
      const S = I.messages.find((Q) => Q.id === p);
      if (!S || S.role !== "assistant" || !S.parentId) return;
      I.currentNodeId = S.parentId;
      const F = be(I, {
        id: _e("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: S.parentId,
        streaming: !0,
        allowThinking: m.value && Ge.value,
        promptTokens: In(ie())
      });
      l.value = !0, Ut(), await ue({ force: !0 });
      const j = performance.now();
      try {
        await Qt(F), I.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), I.updatedAtLabel = new Date(I.updatedAt).toLocaleString(), await dt();
      } catch (Q) {
        if (!d.value) {
          const de = Oe(Q);
          at.msg(`${t("localAi.chatFailed")}: ${de}`, "error"), F.error = de, F.interrupted = !!F.content.trim(), F.interrupted || (F.content = de), I.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), I.updatedAtLabel = new Date(I.updatedAt).toLocaleString(), await dt();
        }
        F.streaming = !1, ye.delete(F.id), F.elapsedMs = performance.now() - j;
      } finally {
        l.value = !1, v.value = null, Xt(), await ue();
      }
    };
    return vt(async () => {
      await Xe(), x = setInterval(() => {
        ke().catch(
          (p) => mn.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), Ce(Ge, (p) => {
      p || (m.value = !1);
    }), ja(() => {
      x && clearInterval(x), Z !== null && (window.cancelAnimationFrame(Z), Z = null), v.value && ms(v.value), ge.clear(), ae.clear(), ye.clear(), Xt();
    }), (p, I) => (N(), W(
      "main",
      {
        class: q([
          "local-ai-chat-shell",
          c(a) ? "local-ai-chat-shell--sidebar-collapsed" : ""
        ])
      },
      [
        b(
          "aside",
          {
            class: q([
              "chat-sidebar",
              c(a) ? "chat-sidebar--collapsed" : ""
            ])
          },
          [
            b("header", oS, [
              b("div", aS, [
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
                onClick: I[0] || (I[0] = (S) => a.value = !c(a))
              }, [
                M(c(ai), {
                  theme: "outline",
                  size: "17"
                })
              ], 8, sS)
            ]),
            b("div", lS, [
              b("button", {
                class: "sidebar-nav-item",
                type: "button",
                onClick: Ye
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
              b("label", iS, [
                M(c(sp), {
                  theme: "outline",
                  size: "18"
                }),
                At(b("input", {
                  "onUpdate:modelValue": I[1] || (I[1] = (S) => lo(n) ? n.value = S : null),
                  placeholder: c(t)("localAi.searchHistory")
                }, null, 8, cS), [
                  [jo, c(n)]
                ])
              ])
            ]),
            b("section", uS, [
              b("div", dS, [
                b(
                  "div",
                  fS,
                  D(c(t)("localAi.recent")),
                  1
                  /* TEXT */
                ),
                b("button", {
                  class: "icon-action-btn",
                  type: "button",
                  title: c(t)("plugins.refresh"),
                  onClick: Xe
                }, [
                  M(c(si), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, pS)
              ]),
              c(St).length ? (N(), W("div", mS, [
                (N(!0), W(
                  pt,
                  null,
                  Qn(c(St), (S) => (N(), W("div", {
                    key: S.id,
                    class: q([
                      "chat-list-item",
                      c(o) === S.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: (F) => fr(S.id),
                    onKeydown: vn(nt((F) => fr(S.id), ["prevent"]), ["enter"])
                  }, [
                    b(
                      "span",
                      gS,
                      D(S.title),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      vS,
                      D(Lf(S.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    b("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: nt((F) => Kr(S.id), ["stop"])
                    }, [
                      M(c(ia), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, bS)
                  ], 42, hS))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (N(), W(
                "div",
                yS,
                D(c(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            b("footer", _S, [
              b("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: Of
              }, [
                M(c(_u), {
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
              b("div", wS, [
                b(
                  "span",
                  {
                    class: q([
                      "status-pill",
                      c(R)?.healthy ? "ready" : "stopped"
                    ])
                  },
                  [
                    I[9] || (I[9] = b(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    )),
                    on(
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
        b("section", kS, [
          c(a) ? (N(), W("button", {
            key: 0,
            class: "panel-sidebar-toggle",
            type: "button",
            title: c(t)("localAi.expandSidebar"),
            onClick: I[2] || (I[2] = (S) => a.value = !1)
          }, [
            M(c(ai), {
              theme: "outline",
              size: "17"
            })
          ], 8, TS)) : ee("v-if", !0),
          b(
            "div",
            {
              ref_key: "messageListRef",
              ref: C,
              class: "message-list",
              onScroll: Le
            },
            [
              c(Ze).length ? ee("v-if", !0) : (N(), W("div", SS, [
                M(c(li), {
                  theme: "outline",
                  size: "28"
                }),
                b(
                  "div",
                  ES,
                  D(c(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                b(
                  "div",
                  AS,
                  D(c(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (N(!0), W(
                pt,
                null,
                Qn(c(ve), (S, F) => (N(), W(
                  pt,
                  {
                    key: S.message.id
                  },
                  [
                    tt(F) ? (N(), W("div", CS, [
                      b(
                        "span",
                        null,
                        D(bt(S.message)),
                        1
                        /* TEXT */
                      )
                    ])) : ee("v-if", !0),
                    b(
                      "article",
                      {
                        class: q(["message-row", `message-row--${S.message.role}`])
                      },
                      [
                        b("div", IS, [
                          S.message.role === "assistant" ? (N(), he(c(li), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (N(), W(
                            "span",
                            OS,
                            D(c(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        b("div", LS, [
                          S.message.role === "user" ? (N(), W(
                            pt,
                            { key: 0 },
                            [
                              b("div", xS, [
                                S.message.content ? (N(), W(
                                  "div",
                                  RS,
                                  D(S.message.content),
                                  1
                                  /* TEXT */
                                )) : ee("v-if", !0),
                                S.message.attachments?.length ? (N(), W("div", NS, [
                                  (N(!0), W(
                                    pt,
                                    null,
                                    Qn(S.message.attachments, (j) => (N(), W(
                                      "div",
                                      {
                                        key: j.id,
                                        class: q([
                                          "message-attachment-chip",
                                          j.type === "image" && j.dataUrl ? "message-attachment-chip--image" : ""
                                        ])
                                      },
                                      [
                                        j.type === "image" && j.dataUrl ? (N(), W("figure", {
                                          key: 0,
                                          title: j.name
                                        }, [
                                          b("img", {
                                            src: j.dataUrl,
                                            alt: j.name
                                          }, null, 8, $S)
                                        ], 8, PS)) : (N(), W(
                                          "span",
                                          MS,
                                          D(j.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        j.type === "image" && j.dataUrl ? ee("v-if", !0) : (N(), W(
                                          "span",
                                          DS,
                                          D(j.name),
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
                              S.message.streaming ? ee("v-if", !0) : (N(), W("div", FS, [
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (j) => Xl(S.message)
                                }, [
                                  M(c(ri), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, zS),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (j) => Jl(S.message)
                                }, [
                                  M(c(us), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, BS),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (j) => Ql(S.message.id)
                                }, [
                                  M(c(ia), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, VS)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (N(), W(
                            pt,
                            { key: 1 },
                            [
                              b("div", jS, [
                                b(
                                  "span",
                                  null,
                                  D(c(ut)),
                                  1
                                  /* TEXT */
                                ),
                                S.message.streaming ? (N(), W(
                                  "small",
                                  US,
                                  D(Zt(S.message)),
                                  1
                                  /* TEXT */
                                )) : ee("v-if", !0)
                              ]),
                              b(
                                "div",
                                {
                                  class: q(["assistant-card", {
                                    "assistant-card--streaming": S.message.streaming
                                  }])
                                },
                                [
                                  S.message.content ? (N(), W("div", HS, [
                                    S.message.allowThinking && Cn(S.message.content) ? (N(), W("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: S.message.streaming && gr(S.message)
                                    }, [
                                      b("summary", null, [
                                        b("span", GS, [
                                          M(c(ni), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          on(
                                            " " + D(To(S.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        S.message.streaming ? (N(), W(
                                          "small",
                                          KS,
                                          D(gr(S.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : ee("v-if", !0)
                                      ]),
                                      b("div", {
                                        class: "message-content markdown-body",
                                        onClick: qr,
                                        innerHTML: Nr(S.message, "reasoning")
                                      }, null, 8, qS)
                                    ], 8, WS)) : ee("v-if", !0),
                                    Yr(S.message.content) ? (N(), W("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: qr,
                                      innerHTML: Nr(S.message, "answer")
                                    }, null, 8, YS)) : ee("v-if", !0)
                                  ])) : (N(), W(
                                    "div",
                                    ZS,
                                    D(jt(S.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              S.message.content ? (N(), W("div", XS, [
                                b(
                                  "span",
                                  QS,
                                  D(c(t)("localAi.contextLabel")) + ": " + D(oe(S.message).context) + "/" + D(oe(S.message).contextMax) + " (" + D(oe(S.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  JS,
                                  D(c(t)("localAi.outputLabel")) + ": " + D(oe(S.message).output) + "/" + D(oe(S.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  e2,
                                  D(oe(S.message).seconds) + "s ",
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  t2,
                                  D(oe(S.message).speed) + " t/s ",
                                  1
                                  /* TEXT */
                                ),
                                S.message.streaming ? ee("v-if", !0) : (N(), W(
                                  "span",
                                  n2,
                                  D($(S.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : ee("v-if", !0),
                              Ne(S.message) ? (N(), W(
                                "div",
                                r2,
                                D(Ne(S.message)),
                                1
                                /* TEXT */
                              )) : ee("v-if", !0),
                              S.message.streaming ? ee("v-if", !0) : (N(), W("div", o2, [
                                S.siblingLeafNodeIds.length > 1 ? (N(), W("div", {
                                  key: 0,
                                  class: "message-version-switcher",
                                  title: ei(S),
                                  "aria-label": ei(S)
                                }, [
                                  b("button", {
                                    type: "button",
                                    disabled: S.siblingCurrentIndex <= 0,
                                    title: c(t)("localAi.previousVersion"),
                                    onClick: (j) => ti(S, -1)
                                  }, " ‹ ", 8, s2),
                                  b(
                                    "span",
                                    null,
                                    D(S.siblingCurrentIndex + 1) + " / " + D(S.siblingLeafNodeIds.length),
                                    1
                                    /* TEXT */
                                  ),
                                  b("button", {
                                    type: "button",
                                    disabled: S.siblingCurrentIndex >= S.siblingLeafNodeIds.length - 1,
                                    title: c(t)("localAi.nextVersion"),
                                    onClick: (j) => ti(S, 1)
                                  }, " › ", 8, l2)
                                ], 8, a2)) : ee("v-if", !0),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (j) => Xl(S.message)
                                }, [
                                  M(c(ri), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, i2),
                                S.message.role === "assistant" ? (N(), W("button", {
                                  key: 1,
                                  type: "button",
                                  title: c(t)("localAi.regenerate"),
                                  onClick: (j) => Nf(S.message.id)
                                }, [
                                  M(c(si), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, c2)) : ee("v-if", !0),
                                S.message.role === "assistant" ? (N(), W("button", {
                                  key: 2,
                                  type: "button",
                                  title: c(t)("localAi.branchChat"),
                                  onClick: (j) => Rf(S.message.id)
                                }, [
                                  M(c(op), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, u2)) : ee("v-if", !0),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (j) => Jl(S.message)
                                }, [
                                  M(c(us), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, d2),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (j) => Ql(S.message.id)
                                }, [
                                  M(c(ia), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, f2)
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
          c(g) ? (N(), W("button", {
            key: 1,
            class: "scroll-bottom-btn",
            type: "button",
            title: c(t)("localAi.jumpToLatest"),
            onClick: E
          }, [
            M(c(oi), {
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
          ], 8, p2)) : ee("v-if", !0),
          b(
            "form",
            {
              class: q([
                "chat-input-card",
                c(h) ? "chat-input-card--focused" : ""
              ]),
              onDragover: I[6] || (I[6] = nt(() => {
              }, ["prevent"])),
              onDrop: nt(En, ["prevent"]),
              onSubmit: nt(Eo, ["prevent"]),
              onFocusin: I[7] || (I[7] = (S) => h.value = !0),
              onFocusout: I[8] || (I[8] = (S) => h.value = !1)
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
                  onChange: Yt
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              c(i).length ? (N(), W("div", m2, [
                (N(!0), W(
                  pt,
                  null,
                  Qn(c(i), (S) => (N(), W(
                    "div",
                    {
                      key: S.id,
                      class: q([
                        "attachment-preview-item",
                        `attachment-preview-item--${S.status}`
                      ])
                    },
                    [
                      S.type === "image" && S.dataUrl ? (N(), W("img", {
                        key: 0,
                        src: S.dataUrl,
                        alt: S.name
                      }, null, 8, h2)) : (N(), W(
                        "span",
                        g2,
                        D(S.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      b("span", v2, [
                        b(
                          "strong",
                          null,
                          D(S.name),
                          1
                          /* TEXT */
                        ),
                        b(
                          "small",
                          null,
                          D(c(qh)(S.size)) + " · " + D(mr(S)),
                          1
                          /* TEXT */
                        )
                      ]),
                      b("button", {
                        type: "button",
                        title: c(t)("common.delete"),
                        onClick: (F) => Lr(S.id)
                      }, [
                        M(c(ia), {
                          theme: "outline",
                          size: "12"
                        })
                      ], 8, b2)
                    ],
                    2
                    /* CLASS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : ee("v-if", !0),
              At(b("textarea", {
                "onUpdate:modelValue": I[3] || (I[3] = (S) => lo(s) ? s.value = S : null),
                class: "chat-input",
                rows: "2",
                placeholder: c(t)("localAi.chatPlaceholder"),
                onKeydown: yt,
                onPaste: Or
              }, null, 40, y2), [
                [jo, c(s)]
              ]),
              b("div", _2, [
                b("div", w2, [
                  b("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: c(t)("localAi.addAttachment"),
                    onClick: pr
                  }, [
                    M(c(ap), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, k2),
                  b("label", T2, [
                    At(b("select", {
                      "onUpdate:modelValue": I[4] || (I[4] = (S) => lo(O) ? O.value = S : null),
                      disabled: c(l) || !c(qe).length,
                      onChange: xr
                    }, [
                      (N(!0), W(
                        pt,
                        null,
                        Qn(c(qe), (S) => (N(), W("option", {
                          key: S,
                          value: S
                        }, D(et(S)), 9, E2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      c(qe).length ? ee("v-if", !0) : (N(), W(
                        "option",
                        A2,
                        D(c(ut)),
                        1
                        /* TEXT */
                      ))
                    ], 40, S2), [
                      [Jf, c(O)]
                    ]),
                    M(c(oi), {
                      theme: "outline",
                      size: "14"
                    })
                  ]),
                  c(Ge) ? (N(), W("button", {
                    key: 0,
                    class: q([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      c(m) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: c(m) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                    "aria-pressed": c(m),
                    onClick: I[5] || (I[5] = (S) => m.value = !c(m))
                  }, [
                    M(c(ni), {
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
                  ], 10, C2)) : ee("v-if", !0)
                ]),
                b("div", I2, [
                  I[10] || (I[10] = b(
                    "span",
                    { class: "input-hint" },
                    "Enter · Shift + Enter",
                    -1
                    /* HOISTED */
                  )),
                  c(l) ? (N(), W("button", {
                    key: 0,
                    class: "send-btn send-btn--stop",
                    type: "button",
                    title: c(t)("localAi.stopGenerating"),
                    "aria-label": c(t)("localAi.stopGenerating"),
                    onClick: So
                  }, [
                    M(c(ip), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, O2)) : (N(), W("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !c(we),
                    title: c(t)("localAi.send"),
                    "aria-label": c(t)("localAi.send")
                  }, [
                    M(c(lp), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, L2))
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
}, U2 = /* @__PURE__ */ Zl(j2, [["__scopeId", "data-v-1eb58459"]]), H2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U2
}, Symbol.toStringTag, { value: "Module" }));
async function hu(e = {}) {
  return typeof e == "object" && Object.freeze(e), await $t("plugin:dialog|open", { options: e });
}
const W2 = ["disabled"], G2 = {
  key: 0,
  class: "custom-button__loading"
}, K2 = /* @__PURE__ */ ce({
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
    return (n, r) => (N(), W("button", {
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
      e.loading ? (N(), W("div", G2, r[1] || (r[1] = [
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
      ]))) : ee("v-if", !0),
      Ae(n.$slots, "default", {}, void 0, !0)
    ], 10, W2));
  }
}), br = /* @__PURE__ */ Zl(K2, [["__scopeId", "data-v-9497085f"]]), q2 = { class: "settings-panel local-ai-settings-shell" }, Y2 = { class: "local-ai-hero panel-card" }, Z2 = { class: "panel-title" }, X2 = { class: "hero-desc" }, Q2 = { class: "header-actions" }, J2 = {
  key: 0,
  class: "settings-grid"
}, eE = { class: "summary-panel panel-card" }, tE = { class: "status-strip" }, nE = { class: "memory-card" }, rE = { class: "memory-card__header" }, oE = { class: "memory-metrics" }, aE = { class: "bottleneck-row" }, sE = { class: "summary-card" }, lE = { class: "summary-card__title" }, iE = { class: "summary-card__desc" }, cE = { class: "service-controls" }, uE = { class: "service-url" }, dE = { class: "summary-card" }, fE = { class: "summary-card__title" }, pE = { class: "summary-card__desc" }, mE = { class: "summary-meta" }, hE = { class: "form-panel panel-card" }, gE = { class: "settings-section" }, vE = { class: "settings-section__header" }, bE = { class: "field-stack" }, yE = ["title"], _E = { class: "path-control" }, wE = ["title"], kE = ["title"], TE = ["title"], SE = { class: "path-control" }, EE = ["placeholder"], AE = { class: "settings-section grid-two" }, CE = { class: "settings-section__header" }, IE = { class: "param-grid" }, OE = ["title"], LE = ["title"], xE = ["title"], RE = ["title"], NE = ["title"], PE = ["title"], $E = { class: "settings-section grid-two" }, ME = { class: "settings-section__header" }, DE = { class: "switch-grid" }, FE = ["title"], zE = ["title"], BE = ["title"], VE = { class: "settings-section grid-two" }, jE = { class: "settings-section__header" }, UE = { class: "switch-grid switch-grid--two" }, HE = ["title"], WE = ["title"], GE = ["title"], KE = ["title"], qE = { class: "settings-section grid-two" }, YE = { class: "settings-section__header" }, ZE = { class: "param-grid param-grid--three" }, XE = ["title"], QE = ["title"], JE = ["title"], eA = ["title"], tA = ["title"], nA = ["title"], rA = ["title"], oA = ["title"], aA = { class: "settings-footer" }, sA = ["title"], lA = /* @__PURE__ */ ce({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = G(null), r = G(null), o = G(null), a = G(null), s = G(!1), i = G(!1), l = G(!1), u = G(!1), d = G(!1);
    let m = null;
    const h = P(() => !!a.value?.selectedModelPath), y = P(() => !!n.value?.mmprojPath), g = P({
      get: () => n.value?.modelPath ?? "",
      set: (X) => {
        n.value && (n.value.modelPath = X || void 0);
      }
    }), v = P({
      get: () => n.value?.mmprojPath ?? "",
      set: (X) => {
        n.value && (n.value.mmprojPath = X || void 0);
      }
    }), A = P(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), f = P(
      () => h.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), O = P(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), R = (X) => X.split(/[\\/]+/).pop() ?? X, C = P(() => {
      const K = R(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return K ? Number(K[1]) : 4;
    }), w = P(() => {
      const X = n.value;
      if (!X)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const K = Math.max(1.4, C.value * 0.92), Pe = Math.min(1, Math.max(0, X.gpuLayers) / 32), Ue = X.ctxSize / 8192 * 0.38 * (X.kvOffload ? 1 : 0.12), be = X.batchSize / 512 * 0.18, we = K * Pe + Ue + be, te = K * (1 - Pe) + X.ctxSize / 8192 * 0.22, le = we + te, Ze = X.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : X.ctxSize >= 32768 || X.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: we.toFixed(2),
        totalGb: le.toFixed(2),
        bottleneck: Ze
      };
    }), T = (X) => t(`localAi.paramHints.${X}`), x = async () => {
      r.value = await Ph();
    }, Y = async () => {
      o.value = await od();
    }, Z = async () => {
      n.value && (a.value = await rd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, se = async () => {
      s.value = !0;
      try {
        n.value = await nd(), await Promise.all([x(), Z(), Y()]);
      } catch (X) {
        mn.error("[LocalAI] refresh settings failed", X), at.msg(`${t("localAi.refreshFailed")}: ${X}`, "error");
      } finally {
        s.value = !1;
      }
    }, ge = async () => {
      if (n.value)
        try {
          await Ta(n.value);
        } catch (X) {
          mn.warn("[LocalAI] autosave failed", X);
        }
    }, ae = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Ta(n.value), await Promise.all([x(), Z(), Y()]), at.msg(t("localAi.configSaved"));
        } catch (X) {
          at.msg(`${t("localAi.configSaveFailed")}: ${X}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, ye = async () => {
      const X = await hu({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !X || Array.isArray(X) || !n.value || (n.value.modelDir = X, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await Z());
    }, _e = async () => {
      const X = await hu({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !X || Array.isArray(X) || !n.value || (n.value.runtimePath = X, await ge(), await x());
    }, B = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Ta(n.value), o.value = await $h(n.value), at.msg(t("localAi.serviceStarted"));
        } catch (X) {
          at.msg(`${t("localAi.serviceStartFailed")}: ${X}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, J = async () => {
      u.value = !0;
      try {
        await ae(), o.value = await ad(), at.msg(t("localAi.serviceRestarted"));
      } catch (X) {
        at.msg(`${t("localAi.serviceRestartFailed")}: ${X}`, "error");
      } finally {
        u.value = !1;
      }
    }, H = async () => {
      d.value = !0;
      try {
        await Mh(), await Y(), at.msg(t("localAi.serviceStoppedMsg"));
      } catch (X) {
        at.msg(`${t("localAi.serviceStopFailed")}: ${X}`, "error");
      } finally {
        d.value = !1;
      }
    }, me = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return vt(async () => {
      await se(), m = setInterval(() => {
        Y().catch(
          (X) => mn.warn("[LocalAI] status refresh failed", X)
        );
      }, 5e3);
    }), ja(() => {
      m && clearInterval(m);
    }), (X, K) => {
      const Pe = wT, Ue = _T, be = oT, we = IT;
      return N(), W("div", q2, [
        b("header", Y2, [
          b("div", null, [
            b(
              "h3",
              Z2,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              X2,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", Q2, [
            M(c(br), {
              size: "small",
              plain: "",
              onClick: me
            }, {
              default: pe(() => [
                on(
                  D(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            M(c(br), {
              size: "small",
              loading: c(s),
              onClick: se
            }, {
              default: pe(() => [
                on(
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
        c(n) ? (N(), W("main", J2, [
          b("aside", eE, [
            b("div", tE, [
              b(
                "div",
                {
                  class: q(["status-item", { ready: c(r)?.available }])
                },
                [
                  K[25] || (K[25] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
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
              b(
                "div",
                {
                  class: q(["status-item", { ready: c(h) }])
                },
                [
                  K[26] || (K[26] = b(
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
                  class: q(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  K[27] || (K[27] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(c(O)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", nE, [
              b("div", rE, [
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
              b("div", oE, [
                b("div", null, [
                  K[28] || (K[28] = b(
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
              b("div", aE, [
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
            b("section", sE, [
              b(
                "div",
                lE,
                D(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                iE,
                D(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", cE, [
                M(c(br), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: B
                }, {
                  default: pe(() => [
                    on(
                      D(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(br), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: J
                }, {
                  default: pe(() => [
                    on(
                      D(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(br), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(d),
                  disabled: !c(o)?.running,
                  onClick: H
                }, {
                  default: pe(() => [
                    on(
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
                uE,
                D(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", dE, [
              b(
                "div",
                fE,
                D(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                pE,
                D(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", mE, [
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
                    D(c(h) ? c(t)("common.yes") : c(t)("common.no")),
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
          b("section", hE, [
            b("div", gE, [
              b("div", vE, [
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
              b("div", bE, [
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
                  b("div", _E, [
                    At(b(
                      "input",
                      {
                        "onUpdate:modelValue": K[0] || (K[0] = (te) => c(n).modelDir = te),
                        class: "text-input",
                        onChange: Z
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [jo, c(n).modelDir]
                    ]),
                    M(c(br), {
                      size: "small",
                      plain: "",
                      onClick: ye
                    }, {
                      default: pe(() => [
                        on(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, yE),
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
                    "onUpdate:modelValue": K[1] || (K[1] = (te) => lo(g) ? g.value = te : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ge
                  }, {
                    default: pe(() => [
                      (N(!0), W(
                        pt,
                        null,
                        Qn(c(a)?.mainModels ?? [], (te) => (N(), he(Pe, {
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
                ], 8, wE),
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
                    "onUpdate:modelValue": K[2] || (K[2] = (te) => lo(v) ? v.value = te : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ge
                  }, {
                    default: pe(() => [
                      (N(!0), W(
                        pt,
                        null,
                        Qn(c(a)?.mmprojModels ?? [], (te) => (N(), he(Pe, {
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
                ], 8, kE),
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
                  b("div", SE, [
                    At(b("input", {
                      "onUpdate:modelValue": K[3] || (K[3] = (te) => c(n).runtimePath = te),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, EE), [
                      [jo, c(n).runtimePath]
                    ]),
                    M(c(br), {
                      size: "small",
                      plain: "",
                      onClick: _e
                    }, {
                      default: pe(() => [
                        on(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, TE)
              ])
            ]),
            b("div", AE, [
              b("div", CE, [
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
              b("div", IE, [
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
                  M(be, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": K[4] || (K[4] = (te) => c(n).ctxSize = te),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, OE),
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
                  M(be, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": K[5] || (K[5] = (te) => c(n).gpuLayers = te),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, LE),
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
                  M(be, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": K[6] || (K[6] = (te) => c(n).threads = te),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, xE),
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
                  M(be, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": K[7] || (K[7] = (te) => c(n).batchSize = te),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, RE),
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
                  M(be, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": K[8] || (K[8] = (te) => c(n).ubatchSize = te),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, NE),
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
                  M(be, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": K[9] || (K[9] = (te) => c(n).mainGpu = te),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, PE)
              ])
            ]),
            b("div", $E, [
              b("div", ME, [
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
              b("div", DE, [
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
                  M(we, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": K[10] || (K[10] = (te) => c(n).flashAttn = te)
                  }, null, 8, ["modelValue"])
                ], 8, FE),
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
                  M(we, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": K[11] || (K[11] = (te) => c(n).kvOffload = te)
                  }, null, 8, ["modelValue"])
                ], 8, zE),
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
                  M(we, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": K[12] || (K[12] = (te) => c(n).mmap = te)
                  }, null, 8, ["modelValue"])
                ], 8, BE)
              ])
            ]),
            b("div", VE, [
              b("div", jE, [
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
              b("div", UE, [
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
                  M(we, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": K[13] || (K[13] = (te) => c(n).autoStartOnRequest = te)
                  }, null, 8, ["modelValue"])
                ], 8, HE),
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
                  M(we, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": K[14] || (K[14] = (te) => c(n).keepAlive = te)
                  }, null, 8, ["modelValue"])
                ], 8, WE),
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
                  M(be, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": K[15] || (K[15] = (te) => c(n).idleTimeoutMinutes = te),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, GE),
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
                  M(be, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": K[16] || (K[16] = (te) => c(n).requestTimeoutSecs = te),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, KE)
              ])
            ]),
            b("div", qE, [
              b("div", YE, [
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
              b("div", ZE, [
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
                  M(be, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": K[17] || (K[17] = (te) => c(n).temperature = te),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, XE),
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
                  M(be, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": K[18] || (K[18] = (te) => c(n).topP = te),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, QE),
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
                  M(be, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": K[19] || (K[19] = (te) => c(n).topK = te),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, JE),
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
                  M(be, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": K[20] || (K[20] = (te) => c(n).minP = te),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, eA),
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
                  M(be, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": K[21] || (K[21] = (te) => c(n).repeatPenalty = te),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, tA),
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
                  M(be, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": K[22] || (K[22] = (te) => c(n).repeatLastN = te),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, nA),
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
                  M(be, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": K[23] || (K[23] = (te) => c(n).maxTokens = te),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, rA),
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
                  M(be, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": K[24] || (K[24] = (te) => c(n).port = te),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, oA)
              ])
            ]),
            b("div", aA, [
              M(c(br), {
                type: "primary",
                loading: c(i),
                onClick: ae
              }, {
                default: pe(() => [
                  on(
                    D(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (N(), W("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, D(c(o).commandLine), 9, sA)) : ee("v-if", !0)
            ])
          ])
        ])) : ee("v-if", !0)
      ]);
    };
  }
}), iA = /* @__PURE__ */ Zl(lA, [["__scopeId", "data-v-c43741fb"]]), cA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iA
}, Symbol.toStringTag, { value: "Module" }));
export {
  fA as activate,
  fA as default
};
