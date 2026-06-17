var Rf = Object.defineProperty;
var Nf = (e, t, n) => t in e ? Rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var We = (e, t, n) => Nf(e, typeof t != "symbol" ? t + "" : t, n);
import * as cs from "vue";
import { inject as je, createVNode as M, defineAsyncComponent as Pf, ref as G, shallowRef as Tr, computed as P, watch as Ce, onMounted as vt, onUnmounted as Ua, defineComponent as ie, h as gu, Text as vu, Fragment as pt, getCurrentInstance as Kt, unref as c, watchEffect as bu, readonly as Js, getCurrentScope as $f, onScopeDispose as Mf, nextTick as mt, isRef as io, warn as Df, provide as Vn, createElementBlock as H, openBlock as N, mergeProps as co, renderSlot as Ee, createElementVNode as b, toRef as er, useAttrs as Ff, useSlots as zf, normalizeStyle as Rt, normalizeClass as q, createCommentVNode as te, createBlock as me, withCtx as fe, resolveDynamicComponent as Wt, withModifiers as nt, toDisplayString as D, onBeforeUnmount as Hn, Transition as wo, withDirectives as At, vShow as ir, reactive as Fr, onActivated as Bf, onUpdated as yu, cloneVNode as Vf, Comment as jf, Teleport as Uf, onBeforeMount as Hf, onDeactivated as Wf, createTextVNode as rn, withKeys as bn, createSlots as Gf, toRaw as Kf, toRefs as el, resolveComponent as $r, resolveDirective as qf, toHandlerKey as Yf, renderList as Jn, vModelText as jo, shallowReactive as Zf, isVNode as Uo, render as Ia, vModelSelect as Xf } from "vue";
var Qf = {
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
function Jf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function ep(e, t, n) {
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
var tp = Symbol("icon-context");
function en(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Jf(), i = je(tp, Qf);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, y = a.fill, g = a.spin, v = ep(s, {
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
const ni = en("brain", !0, function(e) {
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
}), ri = en("copy", !0, function(e) {
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
}), ca = en("delete", !1, function(e) {
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
}), oi = en("down", !1, function(e) {
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
}), us = en("edit", !0, function(e) {
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
}), np = en("fork", !1, function(e) {
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
}), ai = en("left-bar", !0, function(e) {
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
}), rp = en("link", !0, function(e) {
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
}), si = en("refresh", !0, function(e) {
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
}), li = en("robot", !0, function(e) {
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
}), op = en("search", !0, function(e) {
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
}), ap = en("send", !0, function(e) {
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
}), _u = en("setting-two", !1, function(e) {
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
}), sp = en("square", !1, function(e) {
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
}), aA = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => D2)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: _u,
    component: Pf(() => Promise.resolve().then(() => nA))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function lp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ii = typeof window < "u", jr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ip = (e, t, n) => cp({ l: e, k: t, s: n }), cp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Lt = (e) => typeof e == "number" && isFinite(e), up = (e) => tl(e) === "[object Date]", La = (e) => tl(e) === "[object RegExp]", Ha = (e) => Me(e) && Object.keys(e).length === 0, Nt = Object.assign, dp = Object.create, Ge = (e = null) => dp(e);
let ci;
const ka = () => ci || (ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ge());
function ui(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function di(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${di(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${di(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const pp = Object.prototype.hasOwnProperty;
function yn(e, t) {
  return pp.call(e, t);
}
const gt = Array.isArray, st = (e) => typeof e == "function", de = (e) => typeof e == "string", ht = (e) => typeof e == "boolean", De = (e) => e !== null && typeof e == "object", mp = (e) => De(e) && st(e.then) && st(e.catch), wu = Object.prototype.toString, tl = (e) => wu.call(e), Me = (e) => tl(e) === "[object Object]", hp = (e) => e == null ? "" : gt(e) || Me(e) && e.toString === wu ? JSON.stringify(e, null, 2) : String(e);
function nl(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const ua = (e) => !De(e) || gt(e);
function Ta(e, t) {
  if (ua(e) || ua(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (De(r[a]) && !De(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Ge()), ua(o[a]) || ua(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function gp(e, t, n) {
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
}, vp = 17;
function Wa(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function bp(e) {
  throw e;
}
const On = " ", yp = "\r", Bt = `
`, _p = "\u2028", wp = "\u2029";
function kp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (x) => t[x] === yp && t[x + 1] === Bt, i = (x) => t[x] === Bt, l = (x) => t[x] === wp, u = (x) => t[x] === _p, d = (x) => s(x) || i(x) || l(x) || u(x), p = () => n, m = () => r, y = () => o, g = () => a, v = (x) => s(x) || l(x) || u(x) ? Bt : t[x], E = () => v(n), f = () => v(n + a);
  function I() {
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
      I();
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
    next: I,
    peek: R,
    reset: C,
    resetPeek: w,
    skipToPeek: T
  };
}
const Yn = void 0, Tp = ".", fi = "'", Sp = "tokenizer";
function Ep(e, t = {}) {
  const n = t.location !== !1, r = kp(e), o = () => r.index(), a = () => gp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function p(k, O, V, ...re) {
    const Oe = u();
    if (O.column += V, O.offset += V, d) {
      const ue = n ? Is(Oe.startLoc, O) : null, S = Wa(k, ue, {
        domain: Sp,
        args: re
      });
      d(S);
    }
  }
  function m(k, O, V) {
    k.endLoc = a(), k.currentType = O;
    const re = { type: O };
    return n && (re.loc = Is(k.startLoc, k.endLoc)), V != null && (re.value = V), re;
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
    for (; k.currentPeek() === On || k.currentPeek() === Bt; )
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
  function I(k) {
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
    const re = f(k.currentPeek());
    return k.resetPeek(), re;
  }
  function C(k, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    v(k);
    const re = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), Oe = I(re);
    return k.resetPeek(), Oe;
  }
  function w(k, O) {
    const { currentType: V } = O;
    if (V !== 2)
      return !1;
    v(k);
    const re = k.currentPeek() === fi;
    return k.resetPeek(), re;
  }
  function T(k, O) {
    const { currentType: V } = O;
    if (V !== 7)
      return !1;
    v(k);
    const re = k.currentPeek() === ".";
    return k.resetPeek(), re;
  }
  function x(k, O) {
    const { currentType: V } = O;
    if (V !== 8)
      return !1;
    v(k);
    const re = f(k.currentPeek());
    return k.resetPeek(), re;
  }
  function Y(k, O) {
    const { currentType: V } = O;
    if (!(V === 7 || V === 11))
      return !1;
    v(k);
    const re = k.currentPeek() === ":";
    return k.resetPeek(), re;
  }
  function Z(k, O) {
    const { currentType: V } = O;
    if (V !== 9)
      return !1;
    const re = () => {
      const ue = k.currentPeek();
      return ue === "{" ? f(k.peek()) : ue === "@" || ue === "|" || ue === ":" || ue === "." || ue === On || !ue ? !1 : ue === Bt ? (k.peek(), re()) : he(k, !1);
    }, Oe = re();
    return k.resetPeek(), Oe;
  }
  function ae(k) {
    v(k);
    const O = k.currentPeek() === "|";
    return k.resetPeek(), O;
  }
  function he(k, O = !0) {
    const V = (Oe = !1, ue = "") => {
      const S = k.currentPeek();
      return S === "{" || S === "@" || !S ? Oe : S === "|" ? !(ue === On || ue === Bt) : S === On ? (k.peek(), V(!0, On)) : S === Bt ? (k.peek(), V(!0, Bt)) : !0;
    }, re = V();
    return O && k.resetPeek(), re;
  }
  function le(k, O) {
    const V = k.currentChar();
    return V === Yn ? Yn : O(V) ? (k.next(), V) : null;
  }
  function Te(k) {
    const O = k.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36;
  }
  function be(k) {
    return le(k, Te);
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
    return le(k, B);
  }
  function U(k) {
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function pe(k) {
    return le(k, U);
  }
  function X(k) {
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57 || // 0-9
    O >= 65 && O <= 70 || // A-F
    O >= 97 && O <= 102;
  }
  function K(k) {
    return le(k, X);
  }
  function Ne(k) {
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
      if (V === On || V === Bt)
        if (he(k))
          O += V, k.next();
        else {
          if (ae(k))
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
    const re = k.currentChar();
    if (re && re !== "}" && re !== Yn && re !== On && re !== Bt && re !== "　") {
      const Oe = ut(k);
      return p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V + Oe), V + Oe;
    }
    return k.currentChar() === Yn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), V;
  }
  function ye(k) {
    E(k);
    let O = "";
    return k.currentChar() === "-" ? (k.next(), O += `-${Ne(k)}`) : O += Ne(k), k.currentChar() === Yn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), O;
  }
  function ne(k) {
    return k !== fi && k !== Bt;
  }
  function se(k) {
    E(k), g(k, "'");
    let O = "", V = "";
    for (; O = le(k, ne); )
      O === "\\" ? V += Ke(k) : V += O;
    const re = k.currentChar();
    return re === Bt || re === Yn ? (p(Fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), re === Bt && (k.next(), g(k, "'")), V) : (g(k, "'"), V);
  }
  function Ke(k) {
    const O = k.currentChar();
    switch (O) {
      case "\\":
      case "'":
        return k.next(), `\\${O}`;
      case "u":
        return ge(k, O, 4);
      case "U":
        return ge(k, O, 6);
      default:
        return p(Fe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, O), "";
    }
  }
  function ge(k, O, V) {
    g(k, O);
    let re = "";
    for (let Oe = 0; Oe < V; Oe++) {
      const ue = K(k);
      if (!ue) {
        p(Fe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${O}${re}${k.currentChar()}`);
        break;
      }
      re += ue;
    }
    return `\\${O}${re}`;
  }
  function et(k) {
    return k !== "{" && k !== "}" && k !== On && k !== Bt;
  }
  function ut(k) {
    E(k);
    let O = "", V = "";
    for (; O = le(k, et); )
      V += O;
    return V;
  }
  function Ye(k) {
    let O = "", V = "";
    for (; O = be(k); )
      V += O;
    return V;
  }
  function $t(k) {
    const O = (V) => {
      const re = k.currentChar();
      return re === "{" || re === "@" || re === "|" || re === "(" || re === ")" || !re || re === On ? V : (V += re, k.next(), O(V));
    };
    return O("");
  }
  function ot(k) {
    E(k);
    const O = g(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return E(k), O;
  }
  function Ct(k, O) {
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
        return O.braceNest > 0 && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), V = It(k, O) || y(O), O.braceNest = 0, V;
      default: {
        let Oe = !0, ue = !0, S = !0;
        if (ae(k))
          return O.braceNest > 0 && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), V = m(O, 1, ot(k)), O.braceNest = 0, O.inLinked = !1, V;
        if (O.braceNest > 0 && (O.currentType === 4 || O.currentType === 5 || O.currentType === 6))
          return p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), O.braceNest = 0, qe(k, O);
        if (Oe = R(k, O))
          return V = m(O, 4, ve(k)), E(k), V;
        if (ue = C(k, O))
          return V = m(O, 5, ye(k)), E(k), V;
        if (S = w(k, O))
          return V = m(O, 6, se(k)), E(k), V;
        if (!Oe && !ue && !S)
          return V = m(O, 12, ut(k)), p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, V.value), E(k), V;
        break;
      }
    }
    return V;
  }
  function It(k, O) {
    const { currentType: V } = O;
    let re = null;
    const Oe = k.currentChar();
    switch ((V === 7 || V === 8 || V === 11 || V === 9) && (Oe === Bt || Oe === On) && p(Fe.INVALID_LINKED_FORMAT, a(), 0), Oe) {
      case "@":
        return k.next(), re = m(
          O,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), O.inLinked = !0, re;
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
        return ae(k) ? (re = m(O, 1, ot(k)), O.braceNest = 0, O.inLinked = !1, re) : T(k, O) || Y(k, O) ? (E(k), It(k, O)) : x(k, O) ? (E(k), m(O, 11, Ye(k))) : Z(k, O) ? (E(k), Oe === "{" ? Ct(k, O) || re : m(O, 10, $t(k))) : (V === 7 && p(Fe.INVALID_LINKED_FORMAT, a(), 0), O.braceNest = 0, O.inLinked = !1, qe(k, O));
    }
  }
  function qe(k, O) {
    let V = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (O.braceNest > 0)
      return Ct(k, O) || y(O);
    if (O.inLinked)
      return It(k, O) || y(O);
    switch (k.currentChar()) {
      case "{":
        return Ct(k, O) || y(O);
      case "}":
        return p(Fe.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), m(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return It(k, O) || y(O);
      default: {
        if (ae(k))
          return V = m(O, 1, ot(k)), O.braceNest = 0, O.inLinked = !1, V;
        if (he(k))
          return m(O, 0, Ue(k));
        break;
      }
    }
    return V;
  }
  function Tt() {
    const { currentType: k, offset: O, startLoc: V, endLoc: re } = l;
    return l.lastType = k, l.lastOffset = O, l.lastStartLoc = V, l.lastEndLoc = re, l.offset = o(), l.startLoc = a(), r.currentChar() === Yn ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : qe(r, l);
  }
  return {
    nextToken: Tt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Ap = "parser", Cp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ip(e, t, n) {
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
function Lp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, I, R, C, ...w) {
    const T = f.currentPosition();
    if (T.offset += C, T.column += C, n) {
      const x = t ? Is(R, T) : null, Y = Wa(I, x, {
        domain: Ap,
        args: w
      });
      n(Y);
    }
  }
  function o(f, I, R) {
    const C = { type: f };
    return t && (C.start = I, C.end = I, C.loc = { start: R, end: R }), C;
  }
  function a(f, I, R, C) {
    t && (f.end = I, f.loc && (f.loc.end = R));
  }
  function s(f, I) {
    const R = f.context(), C = o(3, R.offset, R.startLoc);
    return C.value = I, a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function i(f, I) {
    const R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(5, C, w);
    return T.index = parseInt(I, 10), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function l(f, I) {
    const R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(4, C, w);
    return T.key = I, f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function u(f, I) {
    const R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(9, C, w);
    return T.value = I.replace(Cp, Ip), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function d(f) {
    const I = f.nextToken(), R = f.context(), { lastOffset: C, lastStartLoc: w } = R, T = o(8, C, w);
    return I.type !== 11 ? (r(f, Fe.UNEXPECTED_EMPTY_LINKED_MODIFIER, R.lastStartLoc, 0), T.value = "", a(T, C, w), {
      nextConsumeToken: I,
      node: T
    }) : (I.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, xn(I)), T.value = I.value || "", a(T, f.currentOffset(), f.currentPosition()), {
      node: T
    });
  }
  function p(f, I) {
    const R = f.context(), C = o(7, R.offset, R.startLoc);
    return C.value = I, a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function m(f) {
    const I = f.context(), R = o(6, I.offset, I.startLoc);
    let C = f.nextToken();
    if (C.type === 8) {
      const w = d(f);
      R.modifier = w.node, C = w.nextConsumeToken || f.nextToken();
    }
    switch (C.type !== 9 && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(C)), C = f.nextToken(), C.type === 2 && (C = f.nextToken()), C.type) {
      case 10:
        C.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(C)), R.key = p(f, C.value || "");
        break;
      case 4:
        C.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(C)), R.key = l(f, C.value || "");
        break;
      case 5:
        C.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(C)), R.key = i(f, C.value || "");
        break;
      case 6:
        C.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(C)), R.key = u(f, C.value || "");
        break;
      default: {
        r(f, Fe.UNEXPECTED_EMPTY_LINKED_KEY, I.lastStartLoc, 0);
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
    const I = f.context(), R = I.currentType === 1 ? f.currentOffset() : I.offset, C = I.currentType === 1 ? I.endLoc : I.startLoc, w = o(2, R, C);
    w.items = [];
    let T = null;
    do {
      const Z = T || f.nextToken();
      switch (T = null, Z.type) {
        case 0:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(Z)), w.items.push(s(f, Z.value || ""));
          break;
        case 5:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(Z)), w.items.push(i(f, Z.value || ""));
          break;
        case 4:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(Z)), w.items.push(l(f, Z.value || ""));
          break;
        case 6:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, xn(Z)), w.items.push(u(f, Z.value || ""));
          break;
        case 7: {
          const ae = m(f);
          w.items.push(ae.node), T = ae.nextConsumeToken || null;
          break;
        }
      }
    } while (I.currentType !== 13 && I.currentType !== 1);
    const x = I.currentType === 1 ? I.lastOffset : f.currentOffset(), Y = I.currentType === 1 ? I.lastEndLoc : f.currentPosition();
    return a(w, x, Y), w;
  }
  function g(f, I, R, C) {
    const w = f.context();
    let T = C.items.length === 0;
    const x = o(1, I, R);
    x.cases = [], x.cases.push(C);
    do {
      const Y = y(f);
      T || (T = Y.items.length === 0), x.cases.push(Y);
    } while (w.currentType !== 13);
    return T && r(f, Fe.MUST_HAVE_MESSAGES_IN_PLURAL, R, 0), a(x, f.currentOffset(), f.currentPosition()), x;
  }
  function v(f) {
    const I = f.context(), { offset: R, startLoc: C } = I, w = y(f);
    return I.currentType === 13 ? w : g(f, R, C, w);
  }
  function E(f) {
    const I = Ep(f, Nt({}, e)), R = I.context(), C = o(0, R.offset, R.startLoc);
    return t && C.loc && (C.loc.source = f), C.body = v(I), e.onCacheKey && (C.cacheKey = e.onCacheKey(f)), R.currentType !== 13 && r(I, Fe.UNEXPECTED_LEXICAL_ANALYSIS, R.lastStartLoc, 0, f[R.offset] || ""), a(C, I.currentOffset(), I.currentPosition()), C;
  }
  return { parse: E };
}
function xn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Op(e, t = {}) {
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
function xp(e, t = {}) {
  const n = Op(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && rl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Rp(e) {
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
function Np(e, t) {
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
function Pp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), uo(e, t.key), t.modifier ? (e.push(", "), uo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function $p(e, t) {
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
function Mp(e, t) {
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
function Dp(e, t) {
  t.body ? uo(e, t.body) : e.push("null");
}
function uo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Dp(e, t);
      break;
    case 1:
      Mp(e, t);
      break;
    case 2:
      $p(e, t);
      break;
    case 6:
      Pp(e, t);
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
const Fp = (e, t = {}) => {
  const n = de(t.mode) ? t.mode : "normal", r = de(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Np(e, {
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
function zp(e, t = {}) {
  const n = Nt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Lp(n).parse(e);
  return r ? (a && Rp(i), o && ao(i), { ast: i, code: "" }) : (xp(i, n), Fp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Bp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ka().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Fn(e) {
  return De(e) && ol(e) === 0 && (yn(e, "b") || yn(e, "body"));
}
const ku = ["b", "body"];
function Vp(e) {
  return Ar(e, ku);
}
const Tu = ["c", "cases"];
function jp(e) {
  return Ar(e, Tu, []);
}
const Su = ["s", "static"];
function Up(e) {
  return Ar(e, Su);
}
const Eu = ["i", "items"];
function Hp(e) {
  return Ar(e, Eu, []);
}
const Au = ["t", "type"];
function ol(e) {
  return Ar(e, Au);
}
const Cu = ["v", "value"];
function da(e, t) {
  const n = Ar(e, Cu);
  if (n != null)
    return n;
  throw Ho(t);
}
const Iu = ["m", "modifier"];
function Wp(e) {
  return Ar(e, Iu);
}
const Lu = ["k", "key"];
function Gp(e) {
  const t = Ar(e, Lu);
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
    if (yn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Ou = [
  ...ku,
  ...Tu,
  ...Su,
  ...Eu,
  ...Lu,
  ...Iu,
  ...Cu,
  ...Au
];
function Ho(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ds(e) {
  return (n) => Kp(n, e);
}
function Kp(e, t) {
  const n = Vp(t);
  if (n == null)
    throw Ho(
      0
      /* NodeTypes.Resource */
    );
  if (ol(n) === 1) {
    const a = jp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      hi(e, i)
    ], []));
  } else
    return hi(e, n);
}
function hi(e, t) {
  const n = Up(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Hp(t).reduce((o, a) => [...o, Ls(e, a)], []);
    return e.normalize(r);
  }
}
function Ls(e, t) {
  const n = ol(t);
  switch (n) {
    case 3:
      return da(t, n);
    case 9:
      return da(t, n);
    case 4: {
      const r = t;
      if (yn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (yn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ho(n);
    }
    case 5: {
      const r = t;
      if (yn(r, "i") && Lt(r.i))
        return e.interpolate(e.list(r.i));
      if (yn(r, "index") && Lt(r.index))
        return e.interpolate(e.list(r.index));
      throw Ho(n);
    }
    case 6: {
      const r = t, o = Wp(r), a = Gp(r);
      return e.linked(Ls(e, a), o ? Ls(e, o) : void 0, e.type);
    }
    case 7:
      return da(t, n);
    case 8:
      return da(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const qp = (e) => e;
let fa = Ge();
function Yp(e, t = {}) {
  let n = !1;
  const r = t.onError || bp;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...zp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Zp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && de(e)) {
    ht(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || qp)(e), o = fa[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = Yp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ds(a);
    return s ? i : fa[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = fa[n];
      return r || (fa[n] = ds(e));
    } else
      return ds(e);
  }
}
const tr = {
  INVALID_ARGUMENT: vp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Xp = 24;
function nr(e) {
  return Wa(e, null, void 0);
}
function al(e, t) {
  return t.locale != null ? gi(t.locale) : gi(e.locale);
}
let fs;
function gi(e) {
  if (de(e))
    return e;
  if (st(e)) {
    if (e.resolvedOnce && fs != null)
      return fs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (mp(t))
        throw nr(tr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return fs = t;
    } else
      throw nr(tr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw nr(tr.NOT_SUPPORT_LOCALE_TYPE);
}
function Qp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...gt(t) ? t : De(t) ? Object.keys(t) : de(t) ? [t] : [n]
  ])];
}
function xu(e, t, n) {
  const r = de(n) ? n : Oa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; gt(s); )
      s = vi(a, s, t);
    const i = gt(t) || !Me(t) ? t : t.default ? t.default : null;
    s = de(i) ? [i] : i, gt(s) && vi(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function vi(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ht(r); o++) {
    const a = t[o];
    de(a) && (r = Jp(e, t[o], n));
  }
  return r;
}
function Jp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = em(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function em(e, t, n) {
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
const tm = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function nm(e) {
  return tm.test(e);
}
function rm(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function om(e) {
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
function am(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : nm(t) ? rm(t) : "*" + t;
}
function sm(e) {
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
      if (o = 0, s === void 0 || (s = am(s), s === !1))
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
      if (l = om(a), p = Cr[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = m[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const bi = /* @__PURE__ */ new Map();
function lm(e, t) {
  return De(e) ? e[t] : null;
}
function im(e, t) {
  if (!De(e))
    return null;
  let n = bi.get(t);
  if (n || (n = sm(t), n && bi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Ou.includes(s) && Fn(o))
      return null;
    const i = o[s];
    if (i === void 0 || st(o))
      return null;
    o = i, a++;
  }
  return o;
}
const cm = "11.2.2", Ga = -1, Oa = "en-US", yi = "", _i = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function um() {
  return {
    upper: (e, t) => t === "text" && de(e) ? e.toUpperCase() : t === "vnode" && De(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && de(e) ? e.toLowerCase() : t === "vnode" && De(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && de(e) ? _i(e) : t === "vnode" && De(e) && "__v_isVNode" in e ? _i(e.children) : e
  };
}
let Ru;
function dm(e) {
  Ru = e;
}
let Nu;
function fm(e) {
  Nu = e;
}
let Pu;
function pm(e) {
  Pu = e;
}
let $u = null;
const wi = (e) => {
  $u = e;
}, mm = () => $u;
let ki = 0;
function hm(e = {}) {
  const t = st(e.onWarn) ? e.onWarn : lp, n = de(e.version) ? e.version : cm, r = de(e.locale) || st(e.locale) ? e.locale : Oa, o = st(r) ? Oa : r, a = gt(e.fallbackLocale) || Me(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Me(e.messages) ? e.messages : ps(o), i = Me(e.datetimeFormats) ? e.datetimeFormats : ps(o), l = Me(e.numberFormats) ? e.numberFormats : ps(o), u = Nt(Ge(), e.modifiers, um()), d = e.pluralRules || Ge(), p = st(e.missing) ? e.missing : null, m = ht(e.missingWarn) || La(e.missingWarn) ? e.missingWarn : !0, y = ht(e.fallbackWarn) || La(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, v = !!e.unresolving, E = st(e.postTranslation) ? e.postTranslation : null, f = Me(e.processor) ? e.processor : null, I = ht(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter, C = st(e.messageCompiler) ? e.messageCompiler : Ru, w = st(e.messageResolver) ? e.messageResolver : Nu || lm, T = st(e.localeFallbacker) ? e.localeFallbacker : Pu || Qp, x = De(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, Z = De(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), ae = De(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), he = De(Y.__meta) ? Y.__meta : {};
  ki++;
  const le = {
    version: n,
    cid: ki,
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
    warnHtmlMessage: I,
    escapeParameter: R,
    messageCompiler: C,
    messageResolver: w,
    localeFallbacker: T,
    fallbackContext: x,
    onWarn: t,
    __meta: he
  };
  return le.datetimeFormats = i, le.numberFormats = l, le.__datetimeFormatters = Z, le.__numberFormatters = ae, le;
}
const ps = (e) => ({ [e]: Ge() });
function sl(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return de(i) ? i : t;
  } else
    return t;
}
function Co(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function gm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function vm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (gm(e, t[r]))
      return !0;
  return !1;
}
function Ti(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, p] = Os(...t), m = ht(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ht(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = al(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!de(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let E = {}, f, I = null;
  const R = "datetime format";
  for (let T = 0; T < v.length && (f = v[T], E = n[f] || {}, I = E[l], !Me(I)); T++)
    sl(e, l, f, m, R);
  if (!Me(I) || !de(f))
    return r ? Ga : l;
  let C = `${f}__${l}`;
  Ha(p) || (C = `${C}__${JSON.stringify(p)}`);
  let w = i.get(C);
  return w || (w = new Intl.DateTimeFormat(f, Nt({}, I, p)), i.set(C, w)), y ? w.formatToParts(u) : w.format(u);
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
function Os(...e) {
  const [t, n, r, o] = e, a = Ge();
  let s = Ge(), i;
  if (de(t)) {
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
  } else if (up(t)) {
    if (isNaN(t.getTime()))
      throw nr(tr.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Lt(t))
    i = t;
  else
    throw nr(tr.INVALID_ARGUMENT);
  return de(n) ? a.key = n : Me(n) && Object.keys(n).forEach((l) => {
    Mu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), de(r) ? a.locale = r : Me(r) && (s = r), Me(o) && (s = o), [a.key || "", i, a, s];
}
function Si(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Ei(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, p] = xs(...t), m = ht(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ht(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = al(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!de(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let E = {}, f, I = null;
  const R = "number format";
  for (let T = 0; T < v.length && (f = v[T], E = n[f] || {}, I = E[l], !Me(I)); T++)
    sl(e, l, f, m, R);
  if (!Me(I) || !de(f))
    return r ? Ga : l;
  let C = `${f}__${l}`;
  Ha(p) || (C = `${C}__${JSON.stringify(p)}`);
  let w = i.get(C);
  return w || (w = new Intl.NumberFormat(f, Nt({}, I, p)), i.set(C, w)), y ? w.formatToParts(u) : w.format(u);
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
  const [t, n, r, o] = e, a = Ge();
  let s = Ge();
  if (!Lt(t))
    throw nr(tr.INVALID_ARGUMENT);
  const i = t;
  return de(n) ? a.key = n : Me(n) && Object.keys(n).forEach((l) => {
    Du.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), de(r) ? a.locale = r : Me(r) && (s = r), Me(o) && (s = o), [a.key || "", i, a, s];
}
function Ai(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const bm = (e) => e, ym = (e) => "", _m = "text", wm = (e) => e.length === 0 ? "" : nl(e), km = hp;
function Ci(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Tm(e) {
  const t = Lt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Lt(e.named.count) || Lt(e.named.n)) ? Lt(e.named.count) ? e.named.count : Lt(e.named.n) ? e.named.n : t : t;
}
function Sm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Em(e = {}) {
  const t = e.locale, n = Tm(e), r = De(e.pluralRules) && de(t) && st(e.pluralRules[t]) ? e.pluralRules[t] : Ci, o = De(e.pluralRules) && de(t) && st(e.pluralRules[t]) ? Ci : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || Ge();
  Lt(e.pluralIndex) && Sm(n, l);
  const u = (f) => l[f];
  function d(f, I) {
    const R = st(e.messages) ? e.messages(f, !!I) : De(e.messages) ? e.messages[f] : !1;
    return R || (e.parent ? e.parent.message(f) : ym);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : bm, m = Me(e.processor) && st(e.processor.normalize) ? e.processor.normalize : wm, y = Me(e.processor) && st(e.processor.interpolate) ? e.processor.interpolate : km, g = Me(e.processor) && de(e.processor.type) ? e.processor.type : _m, E = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...I) => {
      const [R, C] = I;
      let w = "text", T = "";
      I.length === 1 ? De(R) ? (T = R.modifier || T, w = R.type || w) : de(R) && (T = R || T) : I.length === 2 && (de(R) && (T = R || T), de(C) && (w = C || w));
      const x = d(f, !0)(E), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && gt(x) && T ? x[0] : x
      );
      return T ? p(T)(Y, w) : Y;
    },
    message: d,
    type: g,
    interpolate: y,
    normalize: m,
    values: Nt(Ge(), s, l)
  };
  return E;
}
const Ii = () => "", or = (e) => st(e);
function Li(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Rs(...t), d = ht(u.missingWarn) ? u.missingWarn : e.missingWarn, p = ht(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ht(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, g = de(u.default) || ht(u.default) ? ht(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, v = n || g != null && (de(g) || st(g)), E = al(e, u);
  m && Am(u);
  let [f, I, R] = y ? [
    l,
    E,
    i[E] || Ge()
  ] : Fu(e, l, E, s, p, d), C = f, w = l;
  if (!y && !(de(C) || Fn(C) || or(C)) && v && (C = g, w = C), !y && (!(de(C) || Fn(C) || or(C)) || !de(I)))
    return o ? Ga : l;
  let T = !1;
  const x = () => {
    T = !0;
  }, Y = or(C) ? C : zu(e, l, I, C, w, x);
  if (T)
    return C;
  const Z = Lm(e, I, R, u), ae = Em(Z), he = Cm(e, Y, ae);
  let le = r ? r(he, l) : he;
  return m && de(le) && (le = fp(le)), le;
}
function Am(e) {
  gt(e.list) ? e.list = e.list.map((t) => de(t) ? ui(t) : t) : De(e.named) && Object.keys(e.named).forEach((t) => {
    de(e.named[t]) && (e.named[t] = ui(e.named[t]));
  });
}
function Fu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let p = Ge(), m, y = null;
  const g = "translate";
  for (let v = 0; v < d.length && (m = d[v], p = s[m] || Ge(), (y = l(p, t)) === null && (y = p[t]), !(de(y) || Fn(y) || or(y))); v++)
    if (!vm(m, d)) {
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
function zu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (or(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Im(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Cm(e, t, n) {
  return t(n);
}
function Rs(...e) {
  const [t, n, r] = e, o = Ge();
  if (!de(t) && !Lt(t) && !or(t) && !Fn(t))
    throw nr(tr.INVALID_ARGUMENT);
  const a = Lt(t) ? String(t) : (or(t), t);
  return Lt(n) ? o.plural = n : de(n) ? o.default = n : Me(n) && !Ha(n) ? o.named = n : gt(n) && (o.list = n), Lt(r) ? o.plural = r : de(r) ? o.default = r : Me(r) && Nt(o, r), [a, o];
}
function Im(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => ip(t, n, s)
  };
}
function Lm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, g) => {
      let v = s(n, y);
      if (v == null && (d || g)) {
        const [, , E] = Fu(
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
      if (de(v) || Fn(v)) {
        let E = !1;
        const I = zu(e, y, t, v, y, () => {
          E = !0;
        });
        return E ? Ii : I;
      } else return or(v) ? v : Ii;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Lt(r.plural) && (m.pluralIndex = r.plural), m;
}
Bp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Om = "11.2.2";
function xm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ka().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ka().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ka().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const fo = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Xp,
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
  return Wa(e, null, void 0);
}
const Ns = /* @__PURE__ */ jr("__translateVNode"), Ps = /* @__PURE__ */ jr("__datetimeParts"), $s = /* @__PURE__ */ jr("__numberParts"), Rm = jr("__setPluralRules"), Bu = /* @__PURE__ */ jr("__injectWithOption"), Ms = /* @__PURE__ */ jr("__dispose");
function Go(e) {
  if (!De(e) || Fn(e))
    return e;
  for (const t in e)
    if (yn(e, t))
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
        if (a || (Fn(o) ? Ou.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Fn(o)) {
          const s = o[n[r]];
          De(s) && Go(s);
        }
      }
  return e;
}
function Vu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Me(n) ? n : gt(r) ? Ge() : { [e]: Ge() };
  if (gt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Ge(), Ta(u, s[l])) : Ta(u, s);
    } else
      de(i) && Ta(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      yn(s, i) && Go(s[i]);
  return s;
}
function Nm(e) {
  return e.type;
}
function Pm(e, t, n) {
  let r = De(t.messages) ? t.messages : Ge();
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
function Oi(e) {
  return M(vu, null, e, 0);
}
function ju() {
  return "currentInstance" in cs ? cs["currentInstance"] : cs.getCurrentInstance();
}
const xi = () => [], $m = () => !1;
let Ri = 0;
function Ni(e) {
  return (t, n, r, o) => e(n, r, ju() || void 0, o);
}
function Mm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = ii ? G : Tr;
  let s = ht(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : de(e.locale) ? e.locale : Oa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : de(e.fallbackLocale) || gt(e.fallbackLocale) || Me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Vu(i.value, e)), d = a(Me(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(Me(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : ht(e.missingWarn) || La(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : ht(e.fallbackWarn) || La(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : ht(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, E = st(e.missing) ? e.missing : null, f = st(e.missing) ? Ni(e.missing) : null, I = st(e.postTranslation) ? e.postTranslation : null, R = t ? t.warnHtmlMessage : ht(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const w = t ? t.modifiers : Me(e.modifiers) ? e.modifiers : {};
  let T = e.pluralRules || t && t.pluralRules, x;
  x = (() => {
    r && wi(null);
    const S = {
      version: Om,
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
      postTranslation: I === null ? void 0 : I,
      warnHtmlMessage: R,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = d.value, S.numberFormats = p.value, S.__datetimeFormatters = Me(x) ? x.__datetimeFormatters : void 0, S.__numberFormatters = Me(x) ? x.__numberFormatters : void 0;
    const F = hm(S);
    return r && wi(F), F;
  })(), Co(x, i.value, l.value);
  function Z() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      p.value
    ];
  }
  const ae = P({
    get: () => i.value,
    set: (S) => {
      x.locale = S, i.value = S;
    }
  }), he = P({
    get: () => l.value,
    set: (S) => {
      x.fallbackLocale = S, l.value = S, Co(x, i.value, S);
    }
  }), le = P(() => u.value), Te = /* @__PURE__ */ P(() => d.value), be = /* @__PURE__ */ P(() => p.value);
  function B() {
    return st(I) ? I : null;
  }
  function Q(S) {
    I = S, x.postTranslation = S;
  }
  function U() {
    return E;
  }
  function pe(S) {
    S !== null && (f = Ni(S)), E = S, x.missing = f;
  }
  const X = (S, F, ke, xe, Xe, dt) => {
    Z();
    let Ze;
    try {
      r || (x.fallbackContext = t ? mm() : void 0), Ze = S(x);
    } finally {
      r || (x.fallbackContext = void 0);
    }
    if (ke !== "translate exists" && // for not `te` (e.g `t`)
    Lt(Ze) && Ze === Ga || ke === "translate exists" && !Ze) {
      const [Gn, pr] = F();
      return t && g ? xe(t) : Xe(Gn);
    } else {
      if (dt(Ze))
        return Ze;
      throw Wo(fo.UNEXPECTED_RETURN_TYPE);
    }
  };
  function K(...S) {
    return X((F) => Reflect.apply(Li, null, [F, ...S]), () => Rs(...S), "translate", (F) => Reflect.apply(F.t, F, [...S]), (F) => F, (F) => de(F));
  }
  function Ne(...S) {
    const [F, ke, xe] = S;
    if (xe && !De(xe))
      throw Wo(fo.INVALID_ARGUMENT);
    return K(F, ke, Nt({ resolvedMessage: !0 }, xe || {}));
  }
  function Ue(...S) {
    return X((F) => Reflect.apply(Ti, null, [F, ...S]), () => Os(...S), "datetime format", (F) => Reflect.apply(F.d, F, [...S]), () => yi, (F) => de(F) || gt(F));
  }
  function ve(...S) {
    return X((F) => Reflect.apply(Ei, null, [F, ...S]), () => xs(...S), "number format", (F) => Reflect.apply(F.n, F, [...S]), () => yi, (F) => de(F) || gt(F));
  }
  function ye(S) {
    return S.map((F) => de(F) || Lt(F) || ht(F) ? Oi(String(F)) : F);
  }
  const se = {
    normalize: ye,
    interpolate: (S) => S,
    type: "vnode"
  };
  function Ke(...S) {
    return X((F) => {
      let ke;
      const xe = F;
      try {
        xe.processor = se, ke = Reflect.apply(Li, null, [xe, ...S]);
      } finally {
        xe.processor = null;
      }
      return ke;
    }, () => Rs(...S), "translate", (F) => F[Ns](...S), (F) => [Oi(F)], (F) => gt(F));
  }
  function ge(...S) {
    return X((F) => Reflect.apply(Ei, null, [F, ...S]), () => xs(...S), "number format", (F) => F[$s](...S), xi, (F) => de(F) || gt(F));
  }
  function et(...S) {
    return X((F) => Reflect.apply(Ti, null, [F, ...S]), () => Os(...S), "datetime format", (F) => F[Ps](...S), xi, (F) => de(F) || gt(F));
  }
  function ut(S) {
    T = S, x.pluralRules = T;
  }
  function Ye(S, F) {
    return X(() => {
      if (!S)
        return !1;
      const ke = de(F) ? F : i.value, xe = Ct(ke), Xe = x.messageResolver(xe, S);
      return Fn(Xe) || or(Xe) || de(Xe);
    }, () => [S], "translate exists", (ke) => Reflect.apply(ke.te, ke, [S, F]), $m, (ke) => ht(ke));
  }
  function $t(S) {
    let F = null;
    const ke = xu(x, l.value, i.value);
    for (let xe = 0; xe < ke.length; xe++) {
      const Xe = u.value[ke[xe]] || {}, dt = x.messageResolver(Xe, S);
      if (dt != null) {
        F = dt;
        break;
      }
    }
    return F;
  }
  function ot(S) {
    const F = $t(S);
    return F ?? (t ? t.tm(S) || {} : {});
  }
  function Ct(S) {
    return u.value[S] || {};
  }
  function It(S, F) {
    if (o) {
      const ke = { [S]: F };
      for (const xe in ke)
        yn(ke, xe) && Go(ke[xe]);
      F = ke[S];
    }
    u.value[S] = F, x.messages = u.value;
  }
  function qe(S, F) {
    u.value[S] = u.value[S] || {};
    const ke = { [S]: F };
    if (o)
      for (const xe in ke)
        yn(ke, xe) && Go(ke[xe]);
    F = ke[S], Ta(F, u.value[S]), x.messages = u.value;
  }
  function Tt(S) {
    return d.value[S] || {};
  }
  function k(S, F) {
    d.value[S] = F, x.datetimeFormats = d.value, Si(x, S, F);
  }
  function O(S, F) {
    d.value[S] = Nt(d.value[S] || {}, F), x.datetimeFormats = d.value, Si(x, S, F);
  }
  function V(S) {
    return p.value[S] || {};
  }
  function re(S, F) {
    p.value[S] = F, x.numberFormats = p.value, Ai(x, S, F);
  }
  function Oe(S, F) {
    p.value[S] = Nt(p.value[S] || {}, F), x.numberFormats = p.value, Ai(x, S, F);
  }
  Ri++, t && ii && (Ce(t.locale, (S) => {
    s && (i.value = S, x.locale = S, Co(x, i.value, l.value));
  }), Ce(t.fallbackLocale, (S) => {
    s && (l.value = S, x.fallbackLocale = S, Co(x, i.value, l.value));
  }));
  const ue = {
    id: Ri,
    locale: ae,
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
    messages: le,
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
      return C;
    },
    set escapeParameter(S) {
      C = S, x.escapeParameter = S;
    },
    t: K,
    getLocaleMessage: Ct,
    setLocaleMessage: It,
    mergeLocaleMessage: qe,
    getPostTranslationHandler: B,
    setPostTranslationHandler: Q,
    getMissingHandler: U,
    setMissingHandler: pe,
    [Rm]: ut
  };
  return ue.datetimeFormats = Te, ue.numberFormats = be, ue.rt = Ne, ue.te = Ye, ue.tm = ot, ue.d = Ue, ue.n = ve, ue.getDateTimeFormat = Tt, ue.setDateTimeFormat = k, ue.mergeDateTimeFormat = O, ue.getNumberFormat = V, ue.setNumberFormat = re, ue.mergeNumberFormat = Oe, ue[Bu] = n, ue[Ns] = Ke, ue[Ps] = et, ue[$s] = ge, ue;
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
function Dm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === pt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Ge());
}
function Uu() {
  return pt;
}
Nt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Lt(e) || !isNaN(e)
  }
}, ll);
function Fm(e) {
  return gt(e) && !de(e[0]);
}
function Hu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Ge();
    e.locale && (s.locale = e.locale), de(e.format) ? s.key = e.format : De(e.format) && (de(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, y) => n.includes(y) ? Nt(Ge(), m, { [y]: e.format[y] }) : m, Ge()));
    const l = r(e.value, s, i);
    let u = [s.key];
    gt(l) ? u = l.map((m, y) => {
      const g = o[m.type], v = g ? g({ [m.type]: m.value, index: y, parts: l }) : [m.value];
      return Fm(v) && (v[0].key = `${m.type}-${y}`), v;
    }) : de(l) && (u = [l]);
    const d = Nt(Ge(), a), p = de(e.tag) || De(e.tag) ? e.tag : Uu();
    return gu(p, d, u);
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
const zm = /* @__PURE__ */ jr("global-vue-i18n");
function Qo(e = {}) {
  const t = ju();
  if (t == null)
    throw Wo(fo.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wo(fo.NOT_INSTALLED);
  const n = Bm(t), r = jm(n), o = Nm(t), a = Vm(e, o);
  if (a === "global")
    return Pm(r, e, o), r;
  if (a === "parent") {
    let l = Um(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Nt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Mm(l), s.__composerExtend && (i[Ms] = s.__composerExtend(i)), Wm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function Bm(e) {
  const t = je(e.isCE ? zm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Wo(e.isCE ? fo.NOT_INSTALLED_WITH_PROVIDE : fo.UNEXPECTED_ERROR);
  return t;
}
function Vm(e, t) {
  return Ha(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function jm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Um(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Hm(t, n);
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
function Hm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Wm(e, t, n) {
  vt(() => {
  }, t), Ua(() => {
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
xm();
dm(Zp);
fm(im);
pm(xu);
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
var Gm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Gt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Km = /^(?:[ \t]*(?:\n|$))+/, qm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ym = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Jo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Zm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, cl = /(?:[*+-]|\d{1,9}[.)])/, Gu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Ku = $e(Gu).replace(/bull/g, cl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Xm = $e(Gu).replace(/bull/g, cl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ul = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Qm = /^[^\n]+/, dl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Jm = $e(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", dl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), eh = $e(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, cl).getRegex(), Ka = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", fl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, th = $e("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", fl).replace("tag", Ka).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), qu = $e(ul).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ka).getRegex(), nh = $e(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", qu).getRegex(), pl = { blockquote: nh, code: qm, def: Jm, fences: Ym, heading: Zm, hr: Jo, html: th, lheading: Ku, list: eh, newline: Km, paragraph: qu, table: Do, text: Qm }, Pi = $e("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ka).getRegex(), rh = { ...pl, lheading: Xm, table: Pi, paragraph: $e(ul).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ka).getRegex() }, oh = { ...pl, html: $e(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", fl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Do, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: $e(ul).replace("hr", Jo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ku).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, ah = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, sh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Yu = /^( {2,}|\\)\n(?!\s*$)/, lh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, qa = /[\p{P}\p{S}]/u, ml = /[\s\p{P}\p{S}]/u, Zu = /[^\s\p{P}\p{S}]/u, ih = $e(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ml).getRegex(), Xu = /(?!~)[\p{P}\p{S}]/u, ch = /(?!~)[\s\p{P}\p{S}]/u, uh = /(?:[^\s\p{P}\p{S}]|~)/u, dh = $e(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Gm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Qu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, fh = $e(Qu, "u").replace(/punct/g, qa).getRegex(), ph = $e(Qu, "u").replace(/punct/g, Xu).getRegex(), Ju = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", mh = $e(Ju, "gu").replace(/notPunctSpace/g, Zu).replace(/punctSpace/g, ml).replace(/punct/g, qa).getRegex(), hh = $e(Ju, "gu").replace(/notPunctSpace/g, uh).replace(/punctSpace/g, ch).replace(/punct/g, Xu).getRegex(), gh = $e("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Zu).replace(/punctSpace/g, ml).replace(/punct/g, qa).getRegex(), vh = $e(/\\(punct)/, "gu").replace(/punct/g, qa).getRegex(), bh = $e(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), yh = $e(fl).replace("(?:-->|$)", "-->").getRegex(), _h = $e("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", yh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), xa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, wh = $e(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", xa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ed = $e(/^!?\[(label)\]\[(ref)\]/).replace("label", xa).replace("ref", dl).getRegex(), td = $e(/^!?\[(ref)\](?:\[\])?/).replace("ref", dl).getRegex(), kh = $e("reflink|nolink(?!\\()", "g").replace("reflink", ed).replace("nolink", td).getRegex(), $i = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, hl = { _backpedal: Do, anyPunctuation: vh, autolink: bh, blockSkip: dh, br: Yu, code: sh, del: Do, emStrongLDelim: fh, emStrongRDelimAst: mh, emStrongRDelimUnd: gh, escape: ah, link: wh, nolink: td, punctuation: ih, reflink: ed, reflinkSearch: kh, tag: _h, text: lh, url: Do }, Th = { ...hl, link: $e(/^!?\[(label)\]\((.*?)\)/).replace("label", xa).getRegex(), reflink: $e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", xa).getRegex() }, Ds = { ...hl, emStrongRDelimAst: hh, emStrongLDelim: ph, url: $e(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", $i).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: $e(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", $i).getRegex() }, Sh = { ...Ds, br: $e(Yu).replace("{2,}", "*").getRegex(), text: $e(Ds.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, pa = { normal: pl, gfm: rh, pedantic: oh }, Io = { normal: hl, gfm: Ds, breaks: Sh, pedantic: Th }, Eh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Mi = (e) => Eh[e];
function Zn(e, t) {
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
function Lo(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Ah(e, t) {
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
function Ch(e, t, n) {
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
    We(this, "options");
    We(this, "rules");
    We(this, "lexer");
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Lo(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Ch(n, t[3] || "", this.rules);
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
          let v = this.rules.other.nextBulletRegex(g), E = this.rules.other.hrRegex(g), f = this.rules.other.fencesBeginRegex(g), I = this.rules.other.headingBeginRegex(g), R = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let C = e.split(`
`, 1)[0], w;
            if (m = C, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), w = m) : w = m.replace(this.rules.other.tabCharGlobal, "    "), f.test(m) || I.test(m) || R.test(m) || v.test(m) || E.test(m)) break;
            if (w.search(this.rules.other.nonSpaceChar) >= g || !m.trim()) d += `
` + w.slice(g);
            else {
              if (y || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(p) || I.test(p) || E.test(p)) break;
              d += `
` + m;
            }
            !y && !m.trim() && (y = !0), u += C + `
`, e = e.substring(C.length + 1), p = w.slice(g);
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
        let a = Lo(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Ah(t[2], "()");
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
}, gn = class Fs {
  constructor(t) {
    We(this, "tokens");
    We(this, "options");
    We(this, "state");
    We(this, "inlineQueue");
    We(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ur, this.options.tokenizer = this.options.tokenizer || new Ra(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Gt, block: pa.normal, inline: Io.normal };
    this.options.pedantic ? (n.block = pa.pedantic, n.inline = Io.pedantic) : this.options.gfm && (n.block = pa.gfm, this.options.breaks ? n.inline = Io.breaks : n.inline = Io.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: pa, inline: Io };
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
}, Na = class {
  constructor(t) {
    We(this, "options");
    We(this, "parser");
    this.options = t || Ur;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Gt.notSpaceStart)?.[0], a = t.replace(Gt.endingNewline, "") + `
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
    let o = this.parser.parseInline(r), a = Di(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Zn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Di(t);
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
}, vn = class zs {
  constructor(t) {
    We(this, "options");
    We(this, "renderer");
    We(this, "textRenderer");
    this.options = t || Ur, this.options.renderer = this.options.renderer || new Na(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new gl();
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
}, wa, $o = (wa = class {
  constructor(e) {
    We(this, "options");
    We(this, "block");
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
    return this.block ? gn.lex : gn.lexInline;
  }
  provideParser() {
    return this.block ? vn.parse : vn.parseInline;
  }
}, We(wa, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), We(wa, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), wa), Ih = class {
  constructor(...t) {
    We(this, "defaults", il());
    We(this, "options", this.setOptions);
    We(this, "parse", this.parseMarkdown(!0));
    We(this, "parseInline", this.parseMarkdown(!1));
    We(this, "Parser", vn);
    We(this, "Renderer", Na);
    We(this, "TextRenderer", gl);
    We(this, "Lexer", gn);
    We(this, "Tokenizer", Ra);
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
        let a = this.defaults.renderer || new Na(this.defaults);
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
        let a = this.defaults.tokenizer || new Ra(this.defaults);
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
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? gn.lex : gn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser() : t ? vn.parse : vn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? gn.lex : gn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? vn.parse : vn.parseInline)(i, a);
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
}, zr = new Ih();
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
Ve.Parser = vn;
Ve.parser = vn.parse;
Ve.Renderer = Na;
Ve.TextRenderer = gl;
Ve.Lexer = gn;
Ve.lexer = gn.lex;
Ve.Tokenizer = Ra;
Ve.Hooks = $o;
Ve.parse = Ve;
Ve.options;
Ve.setOptions;
Ve.use;
Ve.walkTokens;
Ve.parseInline;
vn.parse;
gn.lex;
function Lh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Pt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Bi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Bi || (Bi = {}));
async function Oh(e, t) {
  await Pt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function xh(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return Pt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Lh(t)
  }).then((a) => async () => Oh(e, a));
}
async function nd() {
  return await Pt("local_ai_get_config");
}
async function Sa(e) {
  return await Pt("local_ai_save_config", { config: e });
}
async function rd(e) {
  return await Pt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Rh() {
  return await Pt("local_ai_get_runtime_status");
}
async function od() {
  return await Pt("local_ai_get_status");
}
async function Nh(e) {
  return await Pt("local_ai_start_service", {
    config: e ?? null
  });
}
async function ad() {
  return await Pt("local_ai_restart_service");
}
async function Ph() {
  await Pt("local_ai_stop_service");
}
function sd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function $h(e, t, n = {}) {
  const r = n.requestId ?? sd(), o = await xh(
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
async function Mh() {
  return await Pt("local_ai_get_chat_histories");
}
async function Dh(e) {
  return await Pt("local_ai_save_chat_history", {
    history: e
  });
}
async function Fh(e) {
  return await Pt("local_ai_delete_chat_history", {
    historyId: e
  });
}
const zh = /* @__PURE__ */ new Set([
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
]), Bh = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), Vh = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), jh = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), Uh = 5, Hh = 1024 * 1024, Wh = 5 * 1024 * 1024, Vi = 4e4, vl = (e) => e.split(".").pop()?.toLowerCase() ?? "", Gh = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, hs = (e) => Bh.has(e.type) || Vh.has(vl(e.name)), ji = (e) => e.type.startsWith("text/") || zh.has(vl(e.name)), Kh = (e) => jh.has(vl(e.name)), qh = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), Yh = async (e) => {
  const t = await e.text();
  return t.length <= Vi ? { text: t, truncated: !1 } : {
    text: t.slice(0, Vi),
    truncated: !0
  };
}, Zh = (e, t) => {
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
function Xh(e) {
  if (Array.isArray(e)) return e;
}
function Qh(e, t) {
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
function Jh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eg(e, t) {
  return Xh(e) || Qh(e, t) || tg(e, t) || Jh();
}
function tg(e, t) {
  if (e) {
    if (typeof e == "string") return Ui(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ui(e, t) : void 0;
  }
}
const ld = Object.entries, Hi = Object.setPrototypeOf, ng = Object.isFrozen, rg = Object.getPrototypeOf, og = Object.getOwnPropertyDescriptor;
let qt = Object.freeze, un = Object.seal, so = Object.create, id = typeof Reflect < "u" && Reflect, Bs = id.apply, Vs = id.construct;
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
const eo = wt(Array.prototype.forEach), ag = wt(Array.prototype.lastIndexOf), Wi = wt(Array.prototype.pop), to = wt(Array.prototype.push), sg = wt(Array.prototype.splice), Ht = Array.isArray, Mo = wt(String.prototype.toLowerCase), gs = wt(String.prototype.toString), Gi = wt(String.prototype.match), no = wt(String.prototype.replace), Ki = wt(String.prototype.indexOf), lg = wt(String.prototype.trim), ig = wt(Number.prototype.toString), cg = wt(Boolean.prototype.toString), qi = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Yi = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), ct = wt(Object.prototype.hasOwnProperty), Oo = wt(Object.prototype.toString), xt = wt(RegExp.prototype.test), xo = ug(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Bs(e, t, r);
  };
}
function ug(e) {
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
      a !== o && (ng(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function dg(e) {
  for (let t = 0; t < e.length; t++)
    ct(e, t) || (e[t] = null);
  return e;
}
function Ft(e) {
  const t = so(null);
  for (const r of ld(e)) {
    var n = eg(r, 2);
    const o = n[0], a = n[1];
    ct(e, o) && (Ht(a) ? t[o] = dg(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Ft(a) : t[o] = a);
  }
  return t;
}
function fg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return ig(e);
    case "boolean":
      return cg(e);
    case "bigint":
      return qi ? qi(e) : "0";
    case "symbol":
      return Yi ? Yi(e) : "Symbol()";
    case "undefined":
      return Oo(e);
    case "function":
    case "object": {
      if (e === null)
        return Oo(e);
      const t = e, n = Nn(t, "toString");
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
function Nn(e, t) {
  for (; e !== null; ) {
    const r = og(e, t);
    if (r) {
      if (r.get)
        return wt(r.get);
      if (typeof r.value == "function")
        return wt(r.value);
    }
    e = rg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function pg(e) {
  try {
    return xt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Zi = qt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vs = qt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bs = qt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), mg = qt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ys = qt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), hg = qt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xi = qt(["#text"]), Qi = qt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), _s = qt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ji = qt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ma = qt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gg = un(/{{[\w\W]*|^[\w\W]*}}/g), vg = un(/<%[\w\W]*|^[\w\W]*%>/g), bg = un(/\${[\w\W]*/g), yg = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), _g = un(/^aria-[\-\w]+$/), ec = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wg = un(/^(?:\w+script|data):/i), kg = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Tg = un(/^html$/i), Sg = un(/^[a-z][.\w]*(-[.\w]+)+$/i), Rn = {
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
}, Eg = function() {
  return typeof window > "u" ? null : window;
}, Ag = function(t, n) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Eg();
  const t = (ce) => cd(ce);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Rn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, p = e.trustedTypes, m = i.prototype, y = Nn(m, "cloneNode"), g = Nn(m, "remove"), v = Nn(m, "nextSibling"), E = Nn(m, "childNodes"), f = Nn(m, "parentNode"), I = Nn(m, "shadowRoot"), R = Nn(m, "attributes"), C = s && s.prototype ? Nn(s.prototype, "nodeType") : null, w = s && s.prototype ? Nn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ce = n.createElement("template");
    ce.content && ce.content.ownerDocument && (n = ce.content.ownerDocument);
  }
  let T, x = "";
  const Y = n, Z = Y.implementation, ae = Y.createNodeIterator, he = Y.createDocumentFragment, le = Y.getElementsByTagName, Te = r.importNode;
  let be = tc();
  t.isSupported = typeof ld == "function" && typeof f == "function" && Z && Z.createHTMLDocument !== void 0;
  const B = gg, Q = vg, U = bg, pe = yg, X = _g, K = wg, Ne = kg, Ue = Sg;
  let ve = ec, ye = null;
  const ne = Ie({}, [...Zi, ...vs, ...bs, ...ys, ...Xi]);
  let se = null;
  const Ke = Ie({}, [...Qi, ..._s, ...Ji, ...ma]);
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
  })), et = null, ut = null;
  const Ye = Object.seal(so(null, {
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
  let $t = !0, ot = !0, Ct = !1, It = !0, qe = !1, Tt = !0, k = !1, O = !1, V = !1, re = !1, Oe = !1, ue = !1, S = !0, F = !1;
  const ke = "user-content-";
  let xe = !0, Xe = !1, dt = {}, Ze = null;
  const Gn = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let pr = null;
  const Kr = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let mr = null;
  const En = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Kn = "http://www.w3.org/1998/Math/MathML", tn = "http://www.w3.org/2000/svg", Yt = "http://www.w3.org/1999/xhtml";
  let An = Yt, Lr = !1, Or = null;
  const hr = Ie({}, [Kn, tn, Yt], gs);
  let xr = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = Ie({}, ["annotation-xml"]);
  const To = Ie({}, ["title", "style", "font", "a", "script"]);
  let Cn = null;
  const Nr = ["application/xhtml+xml", "text/html"], Pr = "text/html";
  let He = null, pn = null;
  const qr = n.createElement("form"), Yr = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, In = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = Ft(_), Cn = // eslint-disable-next-line unicorn/prefer-includes
    Nr.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Pr : _.PARSER_MEDIA_TYPE, He = Cn === "application/xhtml+xml" ? gs : Mo, ye = ct(_, "ALLOWED_TAGS") && Ht(_.ALLOWED_TAGS) ? Ie({}, _.ALLOWED_TAGS, He) : ne, se = ct(_, "ALLOWED_ATTR") && Ht(_.ALLOWED_ATTR) ? Ie({}, _.ALLOWED_ATTR, He) : Ke, Or = ct(_, "ALLOWED_NAMESPACES") && Ht(_.ALLOWED_NAMESPACES) ? Ie({}, _.ALLOWED_NAMESPACES, gs) : hr, mr = ct(_, "ADD_URI_SAFE_ATTR") && Ht(_.ADD_URI_SAFE_ATTR) ? Ie(Ft(En), _.ADD_URI_SAFE_ATTR, He) : En, pr = ct(_, "ADD_DATA_URI_TAGS") && Ht(_.ADD_DATA_URI_TAGS) ? Ie(Ft(Kr), _.ADD_DATA_URI_TAGS, He) : Kr, Ze = ct(_, "FORBID_CONTENTS") && Ht(_.FORBID_CONTENTS) ? Ie({}, _.FORBID_CONTENTS, He) : Gn, et = ct(_, "FORBID_TAGS") && Ht(_.FORBID_TAGS) ? Ie({}, _.FORBID_TAGS, He) : Ft({}), ut = ct(_, "FORBID_ATTR") && Ht(_.FORBID_ATTR) ? Ie({}, _.FORBID_ATTR, He) : Ft({}), dt = ct(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? Ft(_.USE_PROFILES) : _.USE_PROFILES : !1, $t = _.ALLOW_ARIA_ATTR !== !1, ot = _.ALLOW_DATA_ATTR !== !1, Ct = _.ALLOW_UNKNOWN_PROTOCOLS || !1, It = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qe = _.SAFE_FOR_TEMPLATES || !1, Tt = _.SAFE_FOR_XML !== !1, k = _.WHOLE_DOCUMENT || !1, re = _.RETURN_DOM || !1, Oe = _.RETURN_DOM_FRAGMENT || !1, ue = _.RETURN_TRUSTED_TYPE || !1, V = _.FORCE_BODY || !1, S = _.SANITIZE_DOM !== !1, F = _.SANITIZE_NAMED_PROPS || !1, xe = _.KEEP_CONTENT !== !1, Xe = _.IN_PLACE || !1, ve = pg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : ec, An = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Yt, xr = ct(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ft(_.MATHML_TEXT_INTEGRATION_POINTS) : Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), Rr = ct(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? Ft(_.HTML_INTEGRATION_POINTS) : Ie({}, ["annotation-xml"]);
    const j = ct(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? Ft(_.CUSTOM_ELEMENT_HANDLING) : so(null);
    if (ge = so(null), ct(j, "tagNameCheck") && Yr(j.tagNameCheck) && (ge.tagNameCheck = j.tagNameCheck), ct(j, "attributeNameCheck") && Yr(j.attributeNameCheck) && (ge.attributeNameCheck = j.attributeNameCheck), ct(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (ge.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), qe && (ot = !1), Oe && (re = !0), dt && (ye = Ie({}, Xi), se = so(null), dt.html === !0 && (Ie(ye, Zi), Ie(se, Qi)), dt.svg === !0 && (Ie(ye, vs), Ie(se, _s), Ie(se, ma)), dt.svgFilters === !0 && (Ie(ye, bs), Ie(se, _s), Ie(se, ma)), dt.mathMl === !0 && (Ie(ye, ys), Ie(se, Ji), Ie(se, ma))), Ye.tagCheck = null, Ye.attributeCheck = null, ct(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? Ye.tagCheck = _.ADD_TAGS : Ht(_.ADD_TAGS) && (ye === ne && (ye = Ft(ye)), Ie(ye, _.ADD_TAGS, He))), ct(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? Ye.attributeCheck = _.ADD_ATTR : Ht(_.ADD_ATTR) && (se === Ke && (se = Ft(se)), Ie(se, _.ADD_ATTR, He))), ct(_, "ADD_URI_SAFE_ATTR") && Ht(_.ADD_URI_SAFE_ATTR) && Ie(mr, _.ADD_URI_SAFE_ATTR, He), ct(_, "FORBID_CONTENTS") && Ht(_.FORBID_CONTENTS) && (Ze === Gn && (Ze = Ft(Ze)), Ie(Ze, _.FORBID_CONTENTS, He)), ct(_, "ADD_FORBID_CONTENTS") && Ht(_.ADD_FORBID_CONTENTS) && (Ze === Gn && (Ze = Ft(Ze)), Ie(Ze, _.ADD_FORBID_CONTENTS, He)), xe && (ye["#text"] = !0), k && Ie(ye, ["html", "head", "body"]), ye.table && (Ie(ye, ["tbody"]), delete et.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw xo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw xo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      T = _.TRUSTED_TYPES_POLICY, x = T.createHTML("");
    } else
      T === void 0 && (T = Ag(p, o)), T !== null && typeof x == "string" && (x = T.createHTML(""));
    (be.uponSanitizeElement.length > 0 || be.uponSanitizeAttribute.length > 0) && ye === ne && (ye = Ft(ye)), be.uponSanitizeAttribute.length > 0 && se === Ke && (se = Ft(se)), qt && qt(_), pn = _;
  }, Zr = Ie({}, [...vs, ...bs, ...mg]), Xr = Ie({}, [...ys, ...hg]), sn = function(_) {
    let j = f(_);
    (!j || !j.tagName) && (j = {
      namespaceURI: An,
      tagName: "template"
    });
    const oe = Mo(_.tagName), Pe = Mo(j.tagName);
    return Or[_.namespaceURI] ? _.namespaceURI === tn ? j.namespaceURI === Yt ? oe === "svg" : j.namespaceURI === Kn ? oe === "svg" && (Pe === "annotation-xml" || xr[Pe]) : !!Zr[oe] : _.namespaceURI === Kn ? j.namespaceURI === Yt ? oe === "math" : j.namespaceURI === tn ? oe === "math" && Rr[Pe] : !!Xr[oe] : _.namespaceURI === Yt ? j.namespaceURI === tn && !Rr[Pe] || j.namespaceURI === Kn && !xr[Pe] ? !1 : !Xr[oe] && (To[oe] || !Zr[oe]) : !!(Cn === "application/xhtml+xml" && Or[_.namespaceURI]) : !1;
  }, Mt = function(_) {
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
      if (re || Oe)
        try {
          Mt(j);
        } catch {
        }
      else
        try {
          j.setAttribute(_, "");
        } catch {
        }
  }, ee = function(_) {
    let j = null, oe = null;
    if (V)
      _ = "<remove></remove>" + _;
    else {
      const Be = Gi(_, /^[\r\n\t ]+/);
      oe = Be && Be[0];
    }
    Cn === "application/xhtml+xml" && An === Yt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Pe = T ? T.createHTML(_) : _;
    if (An === Yt)
      try {
        j = new d().parseFromString(Pe, Cn);
      } catch {
      }
    if (!j || !j.documentElement) {
      j = Z.createDocument(An, "template", null);
      try {
        j.documentElement.innerHTML = Lr ? x : Pe;
      } catch {
      }
    }
    const Le = j.body || j.documentElement;
    return _ && oe && Le.insertBefore(n.createTextNode(oe), Le.childNodes[0] || null), An === Yt ? le.call(j, k ? "html" : "body")[0] : k ? j.documentElement : Le;
  }, Ae = function(_) {
    return ae.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, tt = function(_) {
    _.normalize();
    const j = ae.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let oe = j.nextNode();
    for (; oe; ) {
      let Pe = oe.data;
      eo([B, Q, U], (Le) => {
        Pe = no(Pe, Le, " ");
      }), oe.data = Pe, oe = j.nextNode();
    }
  }, bt = function(_) {
    const j = w ? w(_) : null;
    return typeof j != "string" || He(j) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    _.childNodes !== E(_);
  }, Zt = function(_) {
    if (!C || typeof _ != "object" || _ === null)
      return !1;
    try {
      return C(_) === Rn.documentFragment;
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
  function St(ce, _, j) {
    eo(ce, (oe) => {
      oe.call(t, _, j, pn);
    });
  }
  const Ln = function(_) {
    let j = null;
    if (St(be.beforeSanitizeElements, _, null), bt(_))
      return Mt(_), !0;
    const oe = He(_.nodeName);
    if (St(be.uponSanitizeElement, _, {
      tagName: oe,
      allowedTags: ye
    }), Tt && _.hasChildNodes() && !jt(_.firstElementChild) && xt(/<[/\w!]/g, _.innerHTML) && xt(/<[/\w!]/g, _.textContent) || Tt && _.namespaceURI === Yt && oe === "style" && jt(_.firstElementChild) || _.nodeType === Rn.progressingInstruction || Tt && _.nodeType === Rn.comment && xt(/<[/\w]/g, _.data))
      return Mt(_), !0;
    if (et[oe] || !(Ye.tagCheck instanceof Function && Ye.tagCheck(oe)) && !ye[oe]) {
      if (!et[oe] && So(oe) && (ge.tagNameCheck instanceof RegExp && xt(ge.tagNameCheck, oe) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(oe)))
        return !1;
      if (xe && !Ze[oe]) {
        const Le = f(_), Be = E(_);
        if (Be && Le) {
          const Ut = Be.length;
          for (let ln = Ut - 1; ln >= 0; --ln) {
            const nn = y(Be[ln], !0);
            Le.insertBefore(nn, v(_));
          }
        }
      }
      return Mt(_), !0;
    }
    return (C ? C(_) : _.nodeType) === Rn.element && !sn(_) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && xt(/<\/no(script|embed|frames)/i, _.innerHTML) ? (Mt(_), !0) : (qe && _.nodeType === Rn.text && (j = _.textContent, eo([B, Q, U], (Le) => {
      j = no(j, Le, " ");
    }), _.textContent !== j && (to(t.removed, {
      element: _.cloneNode()
    }), _.textContent = j)), St(be.afterSanitizeElements, _, null), !1);
  }, Qr = function(_, j, oe) {
    if (ut[j] || S && (j === "id" || j === "name") && (oe in n || oe in qr))
      return !1;
    const Pe = se[j] || Ye.attributeCheck instanceof Function && Ye.attributeCheck(j, _);
    if (!(ot && !ut[j] && xt(pe, j))) {
      if (!($t && xt(X, j))) {
        if (!Pe || ut[j]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(So(_) && (ge.tagNameCheck instanceof RegExp && xt(ge.tagNameCheck, _) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(_)) && (ge.attributeNameCheck instanceof RegExp && xt(ge.attributeNameCheck, j) || ge.attributeNameCheck instanceof Function && ge.attributeNameCheck(j, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            j === "is" && ge.allowCustomizedBuiltInElements && (ge.tagNameCheck instanceof RegExp && xt(ge.tagNameCheck, oe) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(oe)))
          ) return !1;
        } else if (!mr[j]) {
          if (!xt(ve, no(oe, Ne, ""))) {
            if (!((j === "src" || j === "xlink:href" || j === "href") && _ !== "script" && Ki(oe, "data:") === 0 && pr[_])) {
              if (!(Ct && !xt(K, no(oe, Ne, "")))) {
                if (oe)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, qn = Ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), So = function(_) {
    return !qn[Mo(_)] && xt(Ue, _);
  }, aa = function(_) {
    St(be.beforeSanitizeAttributes, _, null);
    const j = _.attributes;
    if (!j || bt(_))
      return;
    const oe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: se,
      forceKeepAttr: void 0
    };
    let Pe = j.length;
    for (; Pe--; ) {
      const Le = j[Pe], Be = Le.name, Ut = Le.namespaceURI, ln = Le.value, nn = He(Be), Eo = ln;
      let ft = Be === "value" ? Eo : lg(Eo);
      if (oe.attrName = nn, oe.attrValue = ft, oe.keepAttr = !0, oe.forceKeepAttr = void 0, St(be.uponSanitizeAttribute, _, oe), ft = oe.attrValue, F && (nn === "id" || nn === "name") && Ki(ft, ke) !== 0 && ($(Be, _), ft = ke + ft), Tt && xt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        $(Be, _);
        continue;
      }
      if (nn === "attributename" && Gi(ft, "href")) {
        $(Be, _);
        continue;
      }
      if (oe.forceKeepAttr)
        continue;
      if (!oe.keepAttr) {
        $(Be, _);
        continue;
      }
      if (!It && xt(/\/>/i, ft)) {
        $(Be, _);
        continue;
      }
      qe && eo([B, Q, U], (la) => {
        ft = no(ft, la, " ");
      });
      const sa = He(_.nodeName);
      if (!Qr(sa, nn, ft)) {
        $(Be, _);
        continue;
      }
      if (T && typeof p == "object" && typeof p.getAttributeType == "function" && !Ut)
        switch (p.getAttributeType(sa, nn)) {
          case "TrustedHTML": {
            ft = T.createHTML(ft);
            break;
          }
          case "TrustedScriptURL": {
            ft = T.createScriptURL(ft);
            break;
          }
        }
      if (ft !== Eo)
        try {
          Ut ? _.setAttributeNS(Ut, Be, ft) : _.setAttribute(Be, ft), bt(_) ? Mt(_) : Wi(t.removed);
        } catch {
          $(Be, _);
        }
    }
    St(be.afterSanitizeAttributes, _, null);
  }, gr = function(_) {
    let j = null;
    const oe = Ae(_);
    for (St(be.beforeSanitizeShadowDOM, _, null); j = oe.nextNode(); )
      if (St(be.uponSanitizeShadowNode, j, null), Ln(j), aa(j), Zt(j.content) && gr(j.content), (C ? C(j) : j.nodeType) === Rn.element) {
        const Le = I ? I(j) : j.shadowRoot;
        Zt(Le) && (vr(Le), gr(Le));
      }
    St(be.afterSanitizeShadowDOM, _, null);
  }, vr = function(_) {
    const j = C ? C(_) : _.nodeType;
    if (j === Rn.element) {
      const Le = I ? I(_) : _.shadowRoot;
      Zt(Le) && (vr(Le), gr(Le));
    }
    const oe = E ? E(_) : _.childNodes;
    if (!oe)
      return;
    const Pe = [];
    eo(oe, (Le) => {
      to(Pe, Le);
    });
    for (const Le of Pe)
      vr(Le);
    if (j === Rn.element) {
      const Le = w ? w(_) : null;
      if (typeof Le == "string" && He(Le) === "template") {
        const Be = _.content;
        Zt(Be) && vr(Be);
      }
    }
  };
  return t.sanitize = function(ce) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, oe = null, Pe = null, Le = null;
    if (Lr = !ce, Lr && (ce = "<!-->"), typeof ce != "string" && !jt(ce) && (ce = fg(ce), typeof ce != "string"))
      throw xo("dirty is not a string, aborting");
    if (!t.isSupported)
      return ce;
    if (O || In(_), t.removed = [], typeof ce == "string" && (Xe = !1), Xe) {
      const ln = w ? w(ce) : ce.nodeName;
      if (typeof ln == "string") {
        const nn = He(ln);
        if (!ye[nn] || et[nn])
          throw xo("root node is forbidden and cannot be sanitized in-place");
      }
      if (bt(ce))
        throw xo("root node is clobbered and cannot be sanitized in-place");
      vr(ce);
    } else if (jt(ce))
      j = ee("<!---->"), oe = j.ownerDocument.importNode(ce, !0), oe.nodeType === Rn.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? j = oe : j.appendChild(oe), vr(oe);
    else {
      if (!re && !qe && !k && // eslint-disable-next-line unicorn/prefer-includes
      ce.indexOf("<") === -1)
        return T && ue ? T.createHTML(ce) : ce;
      if (j = ee(ce), !j)
        return re ? null : ue ? x : "";
    }
    j && V && Mt(j.firstChild);
    const Be = Ae(Xe ? ce : j);
    for (; Pe = Be.nextNode(); )
      Ln(Pe), aa(Pe), Zt(Pe.content) && gr(Pe.content);
    if (Xe)
      return qe && tt(ce), ce;
    if (re) {
      if (qe && tt(j), Oe)
        for (Le = he.call(j.ownerDocument); j.firstChild; )
          Le.appendChild(j.firstChild);
      else
        Le = j;
      return (se.shadowroot || se.shadowrootmode) && (Le = Te.call(r, Le, !0)), Le;
    }
    let Ut = k ? j.outerHTML : j.innerHTML;
    return k && ye["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && xt(Tg, j.ownerDocument.doctype.name) && (Ut = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + Ut), qe && eo([B, Q, U], (ln) => {
      Ut = no(Ut, ln, " ");
    }), T && ue ? T.createHTML(Ut) : Ut;
  }, t.setConfig = function() {
    let ce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    In(ce), O = !0;
  }, t.clearConfig = function() {
    pn = null, O = !1;
  }, t.isValidAttribute = function(ce, _, j) {
    pn || In({});
    const oe = He(ce), Pe = He(_);
    return Qr(oe, Pe, j);
  }, t.addHook = function(ce, _) {
    typeof _ == "function" && to(be[ce], _);
  }, t.removeHook = function(ce, _) {
    if (_ !== void 0) {
      const j = ag(be[ce], _);
      return j === -1 ? void 0 : sg(be[ce], j, 1)[0];
    }
    return Wi(be[ce]);
  }, t.removeHooks = function(ce) {
    be[ce] = [];
  }, t.removeAllHooks = function() {
    be = tc();
  }, t;
}
var Cg = cd();
const Ig = {
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
function Lg(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Cg.sanitize(e, Ig) : "";
}
const ud = Symbol(), Ea = "el", Og = "is-", Mr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, dd = Symbol("namespaceContextKey"), bl = (e) => {
  const t = e || (Kt() ? je(dd, G(Ea)) : G(Ea));
  return P(() => c(t) || Ea);
}, kt = (e, t) => {
  const n = bl(t);
  return {
    namespace: n,
    b: (v = "") => Mr(n.value, e, v, "", ""),
    e: (v) => v ? Mr(n.value, e, "", v, "") : "",
    m: (v) => v ? Mr(n.value, e, "", "", v) : "",
    be: (v, E) => v && E ? Mr(n.value, e, v, E, "") : "",
    em: (v, E) => v && E ? Mr(n.value, e, "", v, E) : "",
    bm: (v, E) => v && E ? Mr(n.value, e, v, "", E) : "",
    bem: (v, E, f) => v && E && f ? Mr(n.value, e, v, E, f) : "",
    is: (v, ...E) => {
      const f = E.length >= 1 ? E[0] : !0;
      return v && f ? `${Og}${v}` : "";
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
}, xg = Object.prototype.hasOwnProperty, nc = (e, t) => xg.call(e, t), $n = Array.isArray, lt = (e) => typeof e == "function", Vt = (e) => typeof e == "string", on = (e) => e !== null && typeof e == "object", rc = (e) => (on(e) || lt(e)) && lt(e.then) && lt(e.catch), Rg = Object.prototype.toString, Ng = (e) => Rg.call(e), Pg = (e) => Ng(e) === "[object Object]";
var fd = typeof global == "object" && global && global.Object === Object && global, $g = typeof self == "object" && self && self.Object === Object && self, Wn = fd || $g || Function("return this")(), jn = Wn.Symbol, pd = Object.prototype, Mg = pd.hasOwnProperty, Dg = pd.toString, Ro = jn ? jn.toStringTag : void 0;
function Fg(e) {
  var t = Mg.call(e, Ro), n = e[Ro];
  try {
    e[Ro] = void 0;
    var r = !0;
  } catch {
  }
  var o = Dg.call(e);
  return r && (t ? e[Ro] = n : delete e[Ro]), o;
}
var zg = Object.prototype, Bg = zg.toString;
function Vg(e) {
  return Bg.call(e);
}
var jg = "[object Null]", Ug = "[object Undefined]", oc = jn ? jn.toStringTag : void 0;
function ko(e) {
  return e == null ? e === void 0 ? Ug : jg : oc && oc in Object(e) ? Fg(e) : Vg(e);
}
function po(e) {
  return e != null && typeof e == "object";
}
var Hg = "[object Symbol]";
function Ya(e) {
  return typeof e == "symbol" || po(e) && ko(e) == Hg;
}
function Wg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tn = Array.isArray, ac = jn ? jn.prototype : void 0, sc = ac ? ac.toString : void 0;
function md(e) {
  if (typeof e == "string")
    return e;
  if (Tn(e))
    return Wg(e, md) + "";
  if (Ya(e))
    return sc ? sc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Gg = /\s/;
function Kg(e) {
  for (var t = e.length; t-- && Gg.test(e.charAt(t)); )
    ;
  return t;
}
var qg = /^\s+/;
function Yg(e) {
  return e && e.slice(0, Kg(e) + 1).replace(qg, "");
}
function Er(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var lc = NaN, Zg = /^[-+]0x[0-9a-f]+$/i, Xg = /^0b[01]+$/i, Qg = /^0o[0-7]+$/i, Jg = parseInt;
function ic(e) {
  if (typeof e == "number")
    return e;
  if (Ya(e))
    return lc;
  if (Er(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Er(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Yg(e);
  var n = Xg.test(e);
  return n || Qg.test(e) ? Jg(e.slice(2), n ? 2 : 8) : Zg.test(e) ? lc : +e;
}
function hd(e) {
  return e;
}
var ev = "[object AsyncFunction]", tv = "[object Function]", nv = "[object GeneratorFunction]", rv = "[object Proxy]";
function gd(e) {
  if (!Er(e))
    return !1;
  var t = ko(e);
  return t == tv || t == nv || t == ev || t == rv;
}
var ws = Wn["__core-js_shared__"], cc = function() {
  var e = /[^.]+$/.exec(ws && ws.keys && ws.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ov(e) {
  return !!cc && cc in e;
}
var av = Function.prototype, sv = av.toString;
function Hr(e) {
  if (e != null) {
    try {
      return sv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var lv = /[\\^$.*+?()[\]{}|]/g, iv = /^\[object .+?Constructor\]$/, cv = Function.prototype, uv = Object.prototype, dv = cv.toString, fv = uv.hasOwnProperty, pv = RegExp(
  "^" + dv.call(fv).replace(lv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mv(e) {
  if (!Er(e) || ov(e))
    return !1;
  var t = gd(e) ? pv : iv;
  return t.test(Hr(e));
}
function hv(e, t) {
  return e?.[t];
}
function Wr(e, t) {
  var n = hv(e, t);
  return mv(n) ? n : void 0;
}
var js = Wr(Wn, "WeakMap");
function gv(e, t, n) {
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
var vv = 800, bv = 16, yv = Date.now;
function _v(e) {
  var t = 0, n = 0;
  return function() {
    var r = yv(), o = bv - (r - n);
    if (n = r, o > 0) {
      if (++t >= vv)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function wv(e) {
  return function() {
    return e;
  };
}
var Pa = function() {
  try {
    var e = Wr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), kv = Pa ? function(e, t) {
  return Pa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wv(t),
    writable: !0
  });
} : hd, Tv = _v(kv);
function Sv(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Ev = 9007199254740991, Av = /^(?:0|[1-9]\d*)$/;
function yl(e, t) {
  var n = typeof e;
  return t = t ?? Ev, !!t && (n == "number" || n != "symbol" && Av.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Cv(e, t, n) {
  t == "__proto__" && Pa ? Pa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function _l(e, t) {
  return e === t || e !== e && t !== t;
}
var Iv = Object.prototype, Lv = Iv.hasOwnProperty;
function Ov(e, t, n) {
  var r = e[t];
  (!(Lv.call(e, t) && _l(r, n)) || n === void 0 && !(t in e)) && Cv(e, t, n);
}
var uc = Math.max;
function xv(e, t, n) {
  return t = uc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = uc(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), gv(e, this, i);
  };
}
var Rv = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rv;
}
function Nv(e) {
  return e != null && wl(e.length) && !gd(e);
}
var Pv = Object.prototype;
function $v(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Pv;
  return e === n;
}
function Mv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Dv = "[object Arguments]";
function dc(e) {
  return po(e) && ko(e) == Dv;
}
var vd = Object.prototype, Fv = vd.hasOwnProperty, zv = vd.propertyIsEnumerable, kl = dc(/* @__PURE__ */ function() {
  return arguments;
}()) ? dc : function(e) {
  return po(e) && Fv.call(e, "callee") && !zv.call(e, "callee");
};
function Bv() {
  return !1;
}
var bd = typeof exports == "object" && exports && !exports.nodeType && exports, fc = bd && typeof module == "object" && module && !module.nodeType && module, Vv = fc && fc.exports === bd, pc = Vv ? Wn.Buffer : void 0, jv = pc ? pc.isBuffer : void 0, Us = jv || Bv, Uv = "[object Arguments]", Hv = "[object Array]", Wv = "[object Boolean]", Gv = "[object Date]", Kv = "[object Error]", qv = "[object Function]", Yv = "[object Map]", Zv = "[object Number]", Xv = "[object Object]", Qv = "[object RegExp]", Jv = "[object Set]", e0 = "[object String]", t0 = "[object WeakMap]", n0 = "[object ArrayBuffer]", r0 = "[object DataView]", o0 = "[object Float32Array]", a0 = "[object Float64Array]", s0 = "[object Int8Array]", l0 = "[object Int16Array]", i0 = "[object Int32Array]", c0 = "[object Uint8Array]", u0 = "[object Uint8ClampedArray]", d0 = "[object Uint16Array]", f0 = "[object Uint32Array]", Qe = {};
Qe[o0] = Qe[a0] = Qe[s0] = Qe[l0] = Qe[i0] = Qe[c0] = Qe[u0] = Qe[d0] = Qe[f0] = !0;
Qe[Uv] = Qe[Hv] = Qe[n0] = Qe[Wv] = Qe[r0] = Qe[Gv] = Qe[Kv] = Qe[qv] = Qe[Yv] = Qe[Zv] = Qe[Xv] = Qe[Qv] = Qe[Jv] = Qe[e0] = Qe[t0] = !1;
function p0(e) {
  return po(e) && wl(e.length) && !!Qe[ko(e)];
}
function m0(e) {
  return function(t) {
    return e(t);
  };
}
var yd = typeof exports == "object" && exports && !exports.nodeType && exports, Fo = yd && typeof module == "object" && module && !module.nodeType && module, h0 = Fo && Fo.exports === yd, ks = h0 && fd.process, mc = function() {
  try {
    var e = Fo && Fo.require && Fo.require("util").types;
    return e || ks && ks.binding && ks.binding("util");
  } catch {
  }
}(), hc = mc && mc.isTypedArray, _d = hc ? m0(hc) : p0, g0 = Object.prototype, v0 = g0.hasOwnProperty;
function b0(e, t) {
  var n = Tn(e), r = !n && kl(e), o = !n && !r && Us(e), a = !n && !r && !o && _d(e), s = n || r || o || a, i = s ? Mv(e.length, String) : [], l = i.length;
  for (var u in e)
    v0.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    yl(u, l))) && i.push(u);
  return i;
}
function y0(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var _0 = y0(Object.keys, Object), w0 = Object.prototype, k0 = w0.hasOwnProperty;
function T0(e) {
  if (!$v(e))
    return _0(e);
  var t = [];
  for (var n in Object(e))
    k0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function wd(e) {
  return Nv(e) ? b0(e) : T0(e);
}
var S0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, E0 = /^\w*$/;
function Tl(e, t) {
  if (Tn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ya(e) ? !0 : E0.test(e) || !S0.test(e) || t != null && e in Object(t);
}
var qo = Wr(Object, "create");
function A0() {
  this.__data__ = qo ? qo(null) : {}, this.size = 0;
}
function C0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var I0 = "__lodash_hash_undefined__", L0 = Object.prototype, O0 = L0.hasOwnProperty;
function x0(e) {
  var t = this.__data__;
  if (qo) {
    var n = t[e];
    return n === I0 ? void 0 : n;
  }
  return O0.call(t, e) ? t[e] : void 0;
}
var R0 = Object.prototype, N0 = R0.hasOwnProperty;
function P0(e) {
  var t = this.__data__;
  return qo ? t[e] !== void 0 : N0.call(t, e);
}
var $0 = "__lodash_hash_undefined__";
function M0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = qo && t === void 0 ? $0 : t, this;
}
function Br(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Br.prototype.clear = A0;
Br.prototype.delete = C0;
Br.prototype.get = x0;
Br.prototype.has = P0;
Br.prototype.set = M0;
function D0() {
  this.__data__ = [], this.size = 0;
}
function Za(e, t) {
  for (var n = e.length; n--; )
    if (_l(e[n][0], t))
      return n;
  return -1;
}
var F0 = Array.prototype, z0 = F0.splice;
function B0(e) {
  var t = this.__data__, n = Za(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : z0.call(t, n, 1), --this.size, !0;
}
function V0(e) {
  var t = this.__data__, n = Za(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function j0(e) {
  return Za(this.__data__, e) > -1;
}
function U0(e, t) {
  var n = this.__data__, r = Za(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function dr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dr.prototype.clear = D0;
dr.prototype.delete = B0;
dr.prototype.get = V0;
dr.prototype.has = j0;
dr.prototype.set = U0;
var Yo = Wr(Wn, "Map");
function H0() {
  this.size = 0, this.__data__ = {
    hash: new Br(),
    map: new (Yo || dr)(),
    string: new Br()
  };
}
function W0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xa(e, t) {
  var n = e.__data__;
  return W0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function G0(e) {
  var t = Xa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function K0(e) {
  return Xa(this, e).get(e);
}
function q0(e) {
  return Xa(this, e).has(e);
}
function Y0(e, t) {
  var n = Xa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function fr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fr.prototype.clear = H0;
fr.prototype.delete = G0;
fr.prototype.get = K0;
fr.prototype.has = q0;
fr.prototype.set = Y0;
var Z0 = "Expected a function";
function Sl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Z0);
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
var X0 = 500;
function Q0(e) {
  var t = Sl(e, function(r) {
    return n.size === X0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var J0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eb = /\\(\\)?/g, tb = Q0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(J0, function(n, r, o, a) {
    t.push(o ? a.replace(eb, "$1") : r || n);
  }), t;
});
function nb(e) {
  return e == null ? "" : md(e);
}
function Qa(e, t) {
  return Tn(e) ? e : Tl(e, t) ? [e] : tb(nb(e));
}
function ea(e) {
  if (typeof e == "string" || Ya(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function El(e, t) {
  t = Qa(t, e);
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
var gc = jn ? jn.isConcatSpreadable : void 0;
function rb(e) {
  return Tn(e) || kl(e) || !!(gc && e && e[gc]);
}
function ob(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = rb), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? kd(o, i) : o[o.length] = i;
  }
  return o;
}
function ab(e) {
  var t = e == null ? 0 : e.length;
  return t ? ob(e) : [];
}
function sb(e) {
  return Tv(xv(e, void 0, ab), e + "");
}
function wr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Tn(e) ? e : [e];
}
function lb() {
  this.__data__ = new dr(), this.size = 0;
}
function ib(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function cb(e) {
  return this.__data__.get(e);
}
function ub(e) {
  return this.__data__.has(e);
}
var db = 200;
function fb(e, t) {
  var n = this.__data__;
  if (n instanceof dr) {
    var r = n.__data__;
    if (!Yo || r.length < db - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new fr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ar(e) {
  var t = this.__data__ = new dr(e);
  this.size = t.size;
}
ar.prototype.clear = lb;
ar.prototype.delete = ib;
ar.prototype.get = cb;
ar.prototype.has = ub;
ar.prototype.set = fb;
function pb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function mb() {
  return [];
}
var hb = Object.prototype, gb = hb.propertyIsEnumerable, vc = Object.getOwnPropertySymbols, vb = vc ? function(e) {
  return e == null ? [] : (e = Object(e), pb(vc(e), function(t) {
    return gb.call(e, t);
  }));
} : mb;
function bb(e, t, n) {
  var r = t(e);
  return Tn(e) ? r : kd(r, n(e));
}
function bc(e) {
  return bb(e, wd, vb);
}
var Hs = Wr(Wn, "DataView"), Ws = Wr(Wn, "Promise"), Gs = Wr(Wn, "Set"), yc = "[object Map]", yb = "[object Object]", _c = "[object Promise]", wc = "[object Set]", kc = "[object WeakMap]", Tc = "[object DataView]", _b = Hr(Hs), wb = Hr(Yo), kb = Hr(Ws), Tb = Hr(Gs), Sb = Hr(js), _r = ko;
(Hs && _r(new Hs(new ArrayBuffer(1))) != Tc || Yo && _r(new Yo()) != yc || Ws && _r(Ws.resolve()) != _c || Gs && _r(new Gs()) != wc || js && _r(new js()) != kc) && (_r = function(e) {
  var t = ko(e), n = t == yb ? e.constructor : void 0, r = n ? Hr(n) : "";
  if (r)
    switch (r) {
      case _b:
        return Tc;
      case wb:
        return yc;
      case kb:
        return _c;
      case Tb:
        return wc;
      case Sb:
        return kc;
    }
  return t;
});
var Sc = Wn.Uint8Array, Eb = "__lodash_hash_undefined__";
function Ab(e) {
  return this.__data__.set(e, Eb), this;
}
function Cb(e) {
  return this.__data__.has(e);
}
function $a(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new fr(); ++t < n; )
    this.add(e[t]);
}
$a.prototype.add = $a.prototype.push = Ab;
$a.prototype.has = Cb;
function Ib(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Lb(e, t) {
  return e.has(t);
}
var Ob = 1, xb = 2;
function Td(e, t, n, r, o, a) {
  var s = n & Ob, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, m = !0, y = n & xb ? new $a() : void 0;
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
      if (!Ib(t, function(f, I) {
        if (!Lb(y, I) && (g === f || o(g, f, n, r, a)))
          return y.push(I);
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
function Rb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Nb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Pb = 1, $b = 2, Mb = "[object Boolean]", Db = "[object Date]", Fb = "[object Error]", zb = "[object Map]", Bb = "[object Number]", Vb = "[object RegExp]", jb = "[object Set]", Ub = "[object String]", Hb = "[object Symbol]", Wb = "[object ArrayBuffer]", Gb = "[object DataView]", Ec = jn ? jn.prototype : void 0, Ts = Ec ? Ec.valueOf : void 0;
function Kb(e, t, n, r, o, a, s) {
  switch (n) {
    case Gb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Wb:
      return !(e.byteLength != t.byteLength || !a(new Sc(e), new Sc(t)));
    case Mb:
    case Db:
    case Bb:
      return _l(+e, +t);
    case Fb:
      return e.name == t.name && e.message == t.message;
    case Vb:
    case Ub:
      return e == t + "";
    case zb:
      var i = Rb;
    case jb:
      var l = r & Pb;
      if (i || (i = Nb), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= $b, s.set(e, t);
      var d = Td(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case Hb:
      if (Ts)
        return Ts.call(e) == Ts.call(t);
  }
  return !1;
}
var qb = 1, Yb = Object.prototype, Zb = Yb.hasOwnProperty;
function Xb(e, t, n, r, o, a) {
  var s = n & qb, i = bc(e), l = i.length, u = bc(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : Zb.call(t, m)))
      return !1;
  }
  var y = a.get(e), g = a.get(t);
  if (y && g)
    return y == t && g == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < l; ) {
    m = i[p];
    var f = e[m], I = t[m];
    if (r)
      var R = s ? r(I, f, m, t, e, a) : r(f, I, m, e, t, a);
    if (!(R === void 0 ? f === I || o(f, I, n, r, a) : R)) {
      v = !1;
      break;
    }
    E || (E = m == "constructor");
  }
  if (v && !E) {
    var C = e.constructor, w = t.constructor;
    C != w && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof w == "function" && w instanceof w) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var Qb = 1, Ac = "[object Arguments]", Cc = "[object Array]", ha = "[object Object]", Jb = Object.prototype, Ic = Jb.hasOwnProperty;
function e1(e, t, n, r, o, a) {
  var s = Tn(e), i = Tn(t), l = s ? Cc : _r(e), u = i ? Cc : _r(t);
  l = l == Ac ? ha : l, u = u == Ac ? ha : u;
  var d = l == ha, p = u == ha, m = l == u;
  if (m && Us(e)) {
    if (!Us(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new ar()), s || _d(e) ? Td(e, t, n, r, o, a) : Kb(e, t, l, n, r, o, a);
  if (!(n & Qb)) {
    var y = d && Ic.call(e, "__wrapped__"), g = p && Ic.call(t, "__wrapped__");
    if (y || g) {
      var v = y ? e.value() : e, E = g ? t.value() : t;
      return a || (a = new ar()), o(v, E, n, r, a);
    }
  }
  return m ? (a || (a = new ar()), Xb(e, t, n, r, o, a)) : !1;
}
function Ja(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !po(e) && !po(t) ? e !== e && t !== t : e1(e, t, n, r, Ja, o);
}
var t1 = 1, n1 = 2;
function r1(e, t, n, r) {
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
      if (!(p === void 0 ? Ja(u, l, t1 | n1, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function Sd(e) {
  return e === e && !Er(e);
}
function o1(e) {
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
function a1(e) {
  var t = o1(e);
  return t.length == 1 && t[0][2] ? Ed(t[0][0], t[0][1]) : function(n) {
    return n === e || r1(n, e, t);
  };
}
function s1(e, t) {
  return e != null && t in Object(e);
}
function l1(e, t, n) {
  t = Qa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = ea(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && wl(o) && yl(s, o) && (Tn(e) || kl(e)));
}
function Ad(e, t) {
  return e != null && l1(e, t, s1);
}
var i1 = 1, c1 = 2;
function u1(e, t) {
  return Tl(e) && Sd(t) ? Ed(ea(e), t) : function(n) {
    var r = kr(n, e);
    return r === void 0 && r === t ? Ad(n, e) : Ja(t, r, i1 | c1);
  };
}
function d1(e) {
  return function(t) {
    return t?.[e];
  };
}
function f1(e) {
  return function(t) {
    return El(t, e);
  };
}
function p1(e) {
  return Tl(e) ? d1(ea(e)) : f1(e);
}
function m1(e) {
  return typeof e == "function" ? e : e == null ? hd : typeof e == "object" ? Tn(e) ? u1(e[0], e[1]) : a1(e) : p1(e);
}
var Ss = function() {
  return Wn.Date.now();
}, h1 = "Expected a function", g1 = Math.max, v1 = Math.min;
function b1(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(h1);
  t = ic(t) || 0, Er(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? g1(ic(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function y(T) {
    var x = r, Y = o;
    return r = o = void 0, u = T, s = e.apply(Y, x), s;
  }
  function g(T) {
    return u = T, i = setTimeout(f, t), d ? y(T) : s;
  }
  function v(T) {
    var x = T - l, Y = T - u, Z = t - x;
    return p ? v1(Z, a - Y) : Z;
  }
  function E(T) {
    var x = T - l, Y = T - u;
    return l === void 0 || x >= t || x < 0 || p && Y >= a;
  }
  function f() {
    var T = Ss();
    if (E(T))
      return I(T);
    i = setTimeout(f, v(T));
  }
  function I(T) {
    return i = void 0, m && r ? y(T) : (r = o = void 0, s);
  }
  function R() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function C() {
    return i === void 0 ? s : I(Ss());
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
  return w.cancel = R, w.flush = C, w;
}
function y1(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Sv(e, m1(t), o);
}
function Ma(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function zo(e, t) {
  return Ja(e, t);
}
function sr(e) {
  return e == null;
}
function _1(e) {
  return e === void 0;
}
function w1(e, t, n, r) {
  if (!Er(e))
    return e;
  t = Qa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = ea(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = Er(d) ? d : yl(t[o + 1]) ? [] : {});
    }
    Ov(i, l, u), i = i[l];
  }
  return e;
}
function k1(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = El(e, s);
    n(i, s) && w1(a, Qa(s, e), i);
  }
  return a;
}
function T1(e, t) {
  return k1(e, t, function(n, r) {
    return Ad(e, r);
  });
}
var S1 = sb(function(e, t) {
  return e == null ? {} : T1(e, t);
});
const Mn = (e) => e === void 0, Sr = (e) => typeof e == "boolean", ze = (e) => typeof e == "number", wn = (e) => typeof Element > "u" ? !1 : e instanceof Element, E1 = (e) => Vt(e) ? !Number.isNaN(Number(e)) : !1;
var A1 = Object.defineProperty, C1 = Object.defineProperties, I1 = Object.getOwnPropertyDescriptors, Lc = Object.getOwnPropertySymbols, L1 = Object.prototype.hasOwnProperty, O1 = Object.prototype.propertyIsEnumerable, Oc = (e, t, n) => t in e ? A1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, x1 = (e, t) => {
  for (var n in t || (t = {}))
    L1.call(t, n) && Oc(e, n, t[n]);
  if (Lc)
    for (var n of Lc(t))
      O1.call(t, n) && Oc(e, n, t[n]);
  return e;
}, R1 = (e, t) => C1(e, I1(t));
function N1(e, t) {
  var n;
  const r = Tr();
  return bu(() => {
    r.value = e();
  }, R1(x1({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Js(r);
}
var xc;
const _t = typeof window < "u", P1 = (e) => typeof e == "string", Cd = () => {
}, Ks = _t && ((xc = window?.navigator) == null ? void 0 : xc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Al(e) {
  return typeof e == "function" ? e() : c(e);
}
function $1(e) {
  return e;
}
function ta(e) {
  return $f() ? (Mf(e), !0) : !1;
}
function M1(e, t = !0) {
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
  return r && (o.value = !0, _t && l()), ta(i), {
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
const es = _t ? window : void 0;
function kn(...e) {
  let t, n, r, o;
  if (P1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = es) : [t, n, r, o] = e, !t)
    return Cd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, p, m, y) => (d.addEventListener(p, m, y), () => d.removeEventListener(p, m, y)), l = Ce(() => [rr(t), Al(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((y) => i(d, m, y, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return ta(u), u;
}
let Rc = !1;
function D1(e, t, n = {}) {
  const { window: r = es, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Ks && !Rc && (Rc = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Cd)));
  let i = !0;
  const l = (m) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === m.target || m.composedPath().includes(g));
    {
      const g = rr(y);
      return g && (m.target === g || m.composedPath().includes(g));
    }
  }), d = [
    kn(r, "click", (m) => {
      const y = rr(e);
      if (!(!y || y === m.target || m.composedPath().includes(y))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    kn(r, "pointerdown", (m) => {
      const y = rr(e);
      y && (i = !m.composedPath().includes(y) && !l(m));
    }, { passive: !0 }),
    s && kn(r, "blur", (m) => {
      var y;
      const g = rr(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Ld(e, t = !1) {
  const n = G(), r = () => n.value = !!e();
  return r(), M1(r, t), n;
}
const Nc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pc = "__vueuse_ssr_handlers__";
Nc[Pc] = Nc[Pc] || {};
var $c = Object.getOwnPropertySymbols, F1 = Object.prototype.hasOwnProperty, z1 = Object.prototype.propertyIsEnumerable, B1 = (e, t) => {
  var n = {};
  for (var r in e)
    F1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $c)
    for (var r of $c(e))
      t.indexOf(r) < 0 && z1.call(e, r) && (n[r] = e[r]);
  return n;
};
function Pn(e, t, n = {}) {
  const r = n, { window: o = es } = r, a = B1(r, ["window"]);
  let s;
  const i = Ld(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ce(() => rr(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return ta(d), {
    isSupported: i,
    stop: d
  };
}
var Mc = Object.getOwnPropertySymbols, V1 = Object.prototype.hasOwnProperty, j1 = Object.prototype.propertyIsEnumerable, U1 = (e, t) => {
  var n = {};
  for (var r in e)
    V1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Mc)
    for (var r of Mc(e))
      t.indexOf(r) < 0 && j1.call(e, r) && (n[r] = e[r]);
  return n;
};
function H1(e, t, n = {}) {
  const r = n, { window: o = es } = r, a = U1(r, ["window"]);
  let s;
  const i = Ld(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ce(() => rr(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
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
var W1 = Object.defineProperty, Fc = Object.getOwnPropertySymbols, G1 = Object.prototype.hasOwnProperty, K1 = Object.prototype.propertyIsEnumerable, zc = (e, t, n) => t in e ? W1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q1 = (e, t) => {
  for (var n in t || (t = {}))
    G1.call(t, n) && zc(e, n, t[n]);
  if (Fc)
    for (var n of Fc(t))
      K1.call(t, n) && zc(e, n, t[n]);
  return e;
};
const Y1 = {
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
q1({
  linear: $1
}, Y1);
class Z1 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Cl(e, t) {
  throw new Z1(`[${e}] ${t}`);
}
const Bc = {
  current: 0
}, Vc = G(0), Od = 2e3, jc = Symbol("elZIndexContextKey"), xd = Symbol("zIndexContextKey"), Rd = (e) => {
  const t = Kt() ? je(jc, Bc) : Bc, n = e || (Kt() ? je(xd, void 0) : void 0), r = P(() => {
    const s = c(n);
    return ze(s) ? s : Od;
  }), o = P(() => r.value + Vc.value), a = () => (t.current++, Vc.value = t.current, o.value);
  return !_t && je(jc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var X1 = {
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
const Q1 = (e) => (t, n) => J1(t, n, c(e)), J1 = (e, t, n) => kr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), ey = (e) => {
  const t = P(() => c(e).name), n = io(e) ? e : G(e);
  return {
    lang: t,
    locale: n,
    t: Q1(e)
  };
}, Nd = Symbol("localeContextKey"), Il = (e) => {
  const t = e || je(Nd, G());
  return ey(P(() => t.value || X1));
}, Pd = "__epPropKey", Se = (e) => e, ty = (e) => on(e) && !!e[Pd], ts = (e, t) => {
  if (!on(e) || ty(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), nc(e, "default") && p.push(o), d || (d = p.includes(u))), s && (d || (d = s(u))), !d && p.length > 0) {
        const m = [...new Set(p)].map((y) => JSON.stringify(y)).join(", ");
        Df(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Pd]: !0
  };
  return nc(e, "default") && (l.default = o), l;
}, Je = (e) => Ma(Object.entries(e).map(([t, n]) => [
  t,
  ts(n, t)
])), Ll = ["", "default", "small", "large"], ns = ts({
  type: String,
  values: Ll,
  required: !1
}), $d = Symbol("size"), ny = () => {
  const e = je($d, {});
  return P(() => c(e.size) || "");
}, Md = Symbol("emptyValuesContextKey"), ry = ["", void 0, null], oy = void 0, Dd = Je({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => lt(e) ? !e() : !e
  }
}), ay = (e, t) => {
  const n = Kt() ? je(Md, G({})) : G({}), r = P(() => e.emptyValues || n.value.emptyValues || ry), o = P(() => lt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : lt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : oy), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Uc = (e) => Object.keys(e), Da = G();
function Fd(e, t = void 0) {
  return Kt() ? je(ud, Da) : Da;
}
function zd(e, t) {
  const n = Fd(), r = kt(e, P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Ea;
  })), o = Il(P(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Rd(P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Od;
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
  const o = !!Kt(), a = o ? Fd() : void 0, s = (r = void 0) != null ? r : o ? Vn : void 0;
  if (!s)
    return;
  const i = P(() => {
    const l = c(e);
    return a?.value ? sy(a.value, l) : l;
  });
  return s(ud, i), s(Nd, P(() => i.value.locale)), s(dd, P(() => i.value.namespace)), s(xd, P(() => i.value.zIndex)), s($d, {
    size: P(() => i.value.size || "")
  }), s(Md, P(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Da.value) && (Da.value = i.value), i;
}, sy = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Uc(e), ...Uc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Ot = "update:modelValue", cr = "change", lr = "input";
var rt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function mo(e, t = "px") {
  if (!e)
    return "";
  if (ze(e) || E1(e))
    return `${e}${t}`;
  if (Vt(e))
    return e;
}
function ly(e, t) {
  if (!_t)
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
const Sn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Vd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), jd = (e) => (e.install = Ko, e), iy = Je({
  size: {
    type: Se([Number, String])
  },
  color: {
    type: String
  }
}), cy = ie({
  name: "ElIcon",
  inheritAttrs: !1
}), uy = /* @__PURE__ */ ie({
  ...cy,
  props: iy,
  setup(e) {
    const t = e, n = kt("icon"), r = P(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Mn(o) ? void 0 : mo(o),
        "--color": a
      };
    });
    return (o, a) => (N(), H("i", co({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Ee(o.$slots, "default")
    ], 16));
  }
});
var dy = /* @__PURE__ */ rt(uy, [["__file", "icon.vue"]]);
const yt = Sn(dy);
/*! Element Plus Icons Vue v2.3.1 */
var fy = /* @__PURE__ */ ie({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ud = fy, py = /* @__PURE__ */ ie({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), my = py, hy = /* @__PURE__ */ ie({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (N(), H("svg", {
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
}), gy = hy, vy = /* @__PURE__ */ ie({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), by = vy, yy = /* @__PURE__ */ ie({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (N(), H("svg", {
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
}), Ol = yy, _y = /* @__PURE__ */ ie({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Fa = _y, wy = /* @__PURE__ */ ie({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (N(), H("svg", {
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
}), ky = wy, Ty = /* @__PURE__ */ ie({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Sy = Ty, Ey = /* @__PURE__ */ ie({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Hd = Ey, Ay = /* @__PURE__ */ ie({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Cy = Ay, Iy = /* @__PURE__ */ ie({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Ly = Iy, Oy = /* @__PURE__ */ ie({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), xy = Oy, Ry = /* @__PURE__ */ ie({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Ny = Ry, Py = /* @__PURE__ */ ie({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (N(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), $y = Py;
const Dn = Se([
  String,
  Object,
  Function
]), My = {
  Close: Fa
}, Dy = {
  Close: Fa
}, za = {
  success: xy,
  warning: $y,
  error: by,
  info: Sy
}, Wd = {
  validating: Hd,
  success: gy,
  error: Ol
}, Gd = () => _t && /firefox/i.test(window.navigator.userAgent);
let Xt;
const Fy = {
  height: "0",
  visibility: "hidden",
  overflow: Gd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, zy = [
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
function By(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: zy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Hc(e, t = 1, n) {
  var r;
  Xt || (Xt = document.createElement("textarea"), document.body.appendChild(Xt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = By(e);
  i.forEach(([p, m]) => Xt?.style.setProperty(p, m)), Object.entries(Fy).forEach(([p, m]) => Xt?.style.setProperty(p, m, "important")), Xt.value = e.value || e.placeholder || "";
  let l = Xt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Xt.value = "";
  const d = Xt.scrollHeight - o;
  if (ze(t)) {
    let p = d * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (ze(n)) {
    let p = d * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = Xt.parentNode) == null || r.removeChild(Xt), Xt = void 0, u;
}
const Kd = (e) => e, Vy = Je({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Gr = (e) => S1(Vy, e), jy = Je({
  id: {
    type: String,
    default: void 0
  },
  size: ns,
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
    default: () => Kd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Gr(["ariaLabel"])
}), Uy = {
  [Ot]: (e) => Vt(e),
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
}, Hy = ["class", "style"], Wy = /^on[A-Z]/, Gy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = P(() => (n?.value || []).concat(Hy)), o = Kt();
  return o ? P(() => {
    var a;
    return Ma(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && Wy.test(s))));
  }) : P(() => ({}));
}, xl = Symbol("formContextKey"), Ba = Symbol("formItemContextKey"), Wc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ky = Symbol("elIdInjection"), qd = () => Kt() ? je(Ky, Wc) : Wc, rs = (e) => {
  const t = qd(), n = bl();
  return N1(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, os = () => {
  const e = je(xl, void 0), t = je(Ba, void 0);
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
    a = Ce([er(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : rs().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Ua(() => {
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
  const n = G(void 0), r = t.prop ? n : Yd("size"), o = t.global ? n : ny(), a = t.form ? { size: void 0 } : je(xl, void 0), s = t.formItem ? { size: void 0 } : je(Ba, void 0);
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
  const a = Kt(), { emit: s } = a, i = Tr(), l = G(!1), u = (m) => {
    lt(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, d = (m) => {
    var y;
    lt(r) && r(m) || m.relatedTarget && ((y = i.value) != null && y.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, y;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Ce(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), kn(i, "focus", u, !0), kn(i, "blur", d, !0), kn(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const qy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
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
    n.value = !qy(d);
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
function Yy(e) {
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
const Zy = "ElInput", Xy = ie({
  name: Zy,
  inheritAttrs: !1
}), Qy = /* @__PURE__ */ ie({
  ...Xy,
  props: jy,
  emits: Uy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ff(), a = Gy(), s = zf(), i = P(() => [
      r.type === "textarea" ? v.b() : g.b(),
      g.m(m.value),
      g.is("disabled", y.value),
      g.is("exceed", Ue.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: pe.value && X.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = P(() => [
      g.e("wrapper"),
      g.is("focus", Y.value)
    ]), { form: u, formItem: d } = os(), { inputId: p } = Rl(r, {
      formItemContext: d
    }), m = na(), y = Nl(), g = kt("input"), v = kt("textarea"), E = Tr(), f = Tr(), I = G(!1), R = G(!1), C = G(), w = Tr(r.inputStyle), T = P(() => E.value || f.value), { wrapperRef: x, isFocused: Y, handleFocus: Z, handleBlur: ae } = Zd(T, {
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
    }), le = P(() => d?.validateState || ""), Te = P(() => le.value && Wd[le.value]), be = P(() => R.value ? Ny : ky), B = P(() => [
      o.style
    ]), Q = P(() => [
      r.inputStyle,
      w.value,
      { resize: r.resize }
    ]), U = P(() => sr(r.modelValue) ? "" : String(r.modelValue)), pe = P(() => r.clearable && !y.value && !r.readonly && !!U.value && (Y.value || I.value)), X = P(() => r.showPassword && !y.value && !!U.value && (!!U.value || Y.value)), K = P(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), Ne = P(() => U.value.length), Ue = P(() => !!K.value && Ne.value > Number(r.maxlength)), ve = P(() => !!s.suffix || !!r.suffixIcon || pe.value || r.showPassword || K.value || !!le.value && he.value), [ye, ne] = Yy(E);
    Pn(f, (S) => {
      if (ge(), !K.value || r.resize !== "both")
        return;
      const F = S[0], { width: ke } = F.contentRect;
      C.value = {
        right: `calc(100% - ${ke + 15 + 6}px)`
      };
    });
    const se = () => {
      const { type: S, autosize: F } = r;
      if (!(!_t || S !== "textarea" || !f.value))
        if (F) {
          const ke = on(F) ? F.minRows : void 0, xe = on(F) ? F.maxRows : void 0, Xe = Hc(f.value, ke, xe);
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
    }, ge = ((S) => {
      let F = !1;
      return () => {
        var ke;
        if (F || !r.autosize)
          return;
        ((ke = f.value) == null ? void 0 : ke.offsetParent) === null || (S(), F = !0);
      };
    })(se), et = () => {
      const S = T.value, F = r.formatter ? r.formatter(U.value) : U.value;
      !S || S.value === F || (S.value = F);
    }, ut = async (S) => {
      ye();
      let { value: F } = S.target;
      if (r.formatter && r.parser && (F = r.parser(F)), !$t.value) {
        if (F === U.value) {
          et();
          return;
        }
        n(Ot, F), n(lr, F), await mt(), et(), ne();
      }
    }, Ye = (S) => {
      let { value: F } = S.target;
      r.formatter && r.parser && (F = r.parser(F)), n(cr, F);
    }, {
      isComposing: $t,
      handleCompositionStart: ot,
      handleCompositionUpdate: Ct,
      handleCompositionEnd: It
    } = Xd({ emit: n, afterComposition: ut }), qe = () => {
      ye(), R.value = !R.value, setTimeout(ne);
    }, Tt = () => {
      var S;
      return (S = T.value) == null ? void 0 : S.focus();
    }, k = () => {
      var S;
      return (S = T.value) == null ? void 0 : S.blur();
    }, O = (S) => {
      I.value = !1, n("mouseleave", S);
    }, V = (S) => {
      I.value = !0, n("mouseenter", S);
    }, re = (S) => {
      n("keydown", S);
    }, Oe = () => {
      var S;
      (S = T.value) == null || S.select();
    }, ue = () => {
      n(Ot, ""), n(cr, ""), n("clear"), n(lr, "");
    };
    return Ce(() => r.modelValue, () => {
      var S;
      mt(() => se()), r.validateEvent && ((S = d?.validate) == null || S.call(d, "change").catch((F) => void 0));
    }), Ce(U, () => et()), Ce(() => r.type, async () => {
      await mt(), et(), se();
    }), vt(() => {
      !r.formatter && r.parser, et(), mt(se);
    }), t({
      input: E,
      textarea: f,
      ref: T,
      textareaStyle: Q,
      autosize: er(r, "autosize"),
      isComposing: $t,
      focus: Tt,
      blur: k,
      select: Oe,
      clear: ue,
      resizeTextarea: se
    }), (S, F) => (N(), H("div", {
      class: q([
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
      te(" input "),
      S.type !== "textarea" ? (N(), H(pt, { key: 0 }, [
        te(" prepend slot "),
        S.$slots.prepend ? (N(), H("div", {
          key: 0,
          class: q(c(g).be("group", "prepend"))
        }, [
          Ee(S.$slots, "prepend")
        ], 2)) : te("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: x,
          class: q(c(l))
        }, [
          te(" prefix slot "),
          S.$slots.prefix || S.prefixIcon ? (N(), H("span", {
            key: 0,
            class: q(c(g).e("prefix"))
          }, [
            b("span", {
              class: q(c(g).e("prefix-inner"))
            }, [
              Ee(S.$slots, "prefix"),
              S.prefixIcon ? (N(), me(c(yt), {
                key: 0,
                class: q(c(g).e("icon"))
              }, {
                default: fe(() => [
                  (N(), me(Wt(S.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0)
            ], 2)
          ], 2)) : te("v-if", !0),
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
            onCompositionstart: c(ot),
            onCompositionupdate: c(Ct),
            onCompositionend: c(It),
            onInput: ut,
            onChange: Ye,
            onKeydown: re
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          te(" suffix slot "),
          c(ve) ? (N(), H("span", {
            key: 1,
            class: q(c(g).e("suffix"))
          }, [
            b("span", {
              class: q(c(g).e("suffix-inner"))
            }, [
              !c(pe) || !c(X) || !c(K) ? (N(), H(pt, { key: 0 }, [
                Ee(S.$slots, "suffix"),
                S.suffixIcon ? (N(), me(c(yt), {
                  key: 0,
                  class: q(c(g).e("icon"))
                }, {
                  default: fe(() => [
                    (N(), me(Wt(S.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : te("v-if", !0)
              ], 64)) : te("v-if", !0),
              c(pe) ? (N(), me(c(yt), {
                key: 1,
                class: q([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: nt(c(Ko), ["prevent"]),
                onClick: ue
              }, {
                default: fe(() => [
                  M(c(Ol))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : te("v-if", !0),
              c(X) ? (N(), me(c(yt), {
                key: 2,
                class: q([c(g).e("icon"), c(g).e("password")]),
                onClick: qe
              }, {
                default: fe(() => [
                  (N(), me(Wt(c(be))))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0),
              c(K) ? (N(), H("span", {
                key: 3,
                class: q(c(g).e("count"))
              }, [
                b("span", {
                  class: q(c(g).e("count-inner"))
                }, D(c(Ne)) + " / " + D(S.maxlength), 3)
              ], 2)) : te("v-if", !0),
              c(le) && c(Te) && c(he) ? (N(), me(c(yt), {
                key: 4,
                class: q([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(le) === "validating")
                ])
              }, {
                default: fe(() => [
                  (N(), me(Wt(c(Te))))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0)
            ], 2)
          ], 2)) : te("v-if", !0)
        ], 2),
        te(" append slot "),
        S.$slots.append ? (N(), H("div", {
          key: 1,
          class: q(c(g).be("group", "append"))
        }, [
          Ee(S.$slots, "append")
        ], 2)) : te("v-if", !0)
      ], 64)) : (N(), H(pt, { key: 1 }, [
        te(" textarea "),
        b("textarea", co({
          id: c(p),
          ref_key: "textarea",
          ref: f,
          class: [c(v).e("inner"), c(g).is("focus", c(Y))]
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
          onCompositionstart: c(ot),
          onCompositionupdate: c(Ct),
          onCompositionend: c(It),
          onInput: ut,
          onFocus: c(Z),
          onBlur: c(ae),
          onChange: Ye,
          onKeydown: re
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(K) ? (N(), H("span", {
          key: 0,
          style: Rt(C.value),
          class: q(c(g).e("count"))
        }, D(c(Ne)) + " / " + D(S.maxlength), 7)) : te("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Jy = /* @__PURE__ */ rt(Qy, [["__file", "input.vue"]]);
const e_ = Sn(Jy), ro = 4, t_ = {
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
}, n_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Pl = Symbol("scrollbarContextKey"), r_ = Je({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), o_ = "Thumb", a_ = /* @__PURE__ */ ie({
  __name: "thumb",
  props: r_,
  setup(e) {
    const t = e, n = je(Pl), r = kt("scrollbar");
    n || Cl(o_, "can not inject scrollbar context");
    const o = G(), a = G(), s = G({}), i = G(!1);
    let l = !1, u = !1, d = _t ? document.onselectstart : null;
    const p = P(() => t_[t.vertical ? "vertical" : "horizontal"]), m = P(() => n_({
      size: t.size,
      move: t.move,
      bar: p.value
    })), y = P(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (T) => {
      var x;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (x = window.getSelection()) == null || x.removeAllRanges(), E(T);
      const Y = T.currentTarget;
      Y && (s.value[p.value.axis] = Y[p.value.offset] - (T[p.value.client] - Y.getBoundingClientRect()[p.value.direction]));
    }, v = (T) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const x = Math.abs(T.target.getBoundingClientRect()[p.value.direction] - T[p.value.client]), Y = a.value[p.value.offset] / 2, Z = (x - Y) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Z * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (T) => {
      T.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", I), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (T) => {
      if (!o.value || !a.value || l === !1)
        return;
      const x = s.value[p.value.axis];
      if (!x)
        return;
      const Y = (o.value.getBoundingClientRect()[p.value.direction] - T[p.value.client]) * -1, Z = a.value[p.value.offset] - x, ae = (Y - Z) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ae * n.wrapElement[p.value.scrollSize] / 100;
    }, I = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", I), w(), u && (i.value = !1);
    }, R = () => {
      u = !1, i.value = !!t.size;
    }, C = () => {
      u = !0, i.value = l;
    };
    Hn(() => {
      w(), document.removeEventListener("mouseup", I);
    });
    const w = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return kn(er(n, "scrollbarElement"), "mousemove", R), kn(er(n, "scrollbarElement"), "mouseleave", C), (T, x) => (N(), me(wo, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: fe(() => [
        At(b("div", {
          ref_key: "instance",
          ref: o,
          class: q([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: v
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: q(c(r).e("thumb")),
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
var Gc = /* @__PURE__ */ rt(a_, [["__file", "thumb.vue"]]);
const s_ = Je({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), l_ = /* @__PURE__ */ ie({
  __name: "bar",
  props: s_,
  setup(e, { expose: t }) {
    const n = e, r = je(Pl), o = G(0), a = G(0), s = G(""), i = G(""), l = G(1), u = G(1);
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
        const y = m.offsetHeight - ro, g = m.offsetWidth - ro, v = y ** 2 / m.scrollHeight, E = g ** 2 / m.scrollWidth, f = Math.max(v, n.minSize), I = Math.max(E, n.minSize);
        l.value = v / (y - v) / (f / (y - f)), u.value = E / (g - E) / (I / (g - I)), i.value = f + ro < y ? `${f}px` : "", s.value = I + ro < g ? `${I}px` : "";
      }
    }), (m, y) => (N(), H(pt, null, [
      M(Gc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      M(Gc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var i_ = /* @__PURE__ */ rt(l_, [["__file", "bar.vue"]]);
const c_ = Je({
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
}), u_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ze)
}, d_ = "ElScrollbar", f_ = ie({
  name: d_
}), p_ = /* @__PURE__ */ ie({
  ...f_,
  props: c_,
  emits: u_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = kt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = G(), d = G(), p = G(), m = G(), y = P(() => {
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
      on(w) ? d.value.scrollTo(w) : ze(w) && ze(T) && d.value.scrollTo(w, T);
    }
    const I = (w) => {
      ze(w) && (d.value.scrollTop = w);
    }, R = (w) => {
      ze(w) && (d.value.scrollLeft = w);
    }, C = () => {
      var w;
      (w = m.value) == null || w.update();
    };
    return Ce(() => r.noresize, (w) => {
      w ? (a?.(), s?.()) : ({ stop: a } = Pn(p, C), s = kn("resize", C));
    }, { immediate: !0 }), Ce(() => [r.maxHeight, r.height], () => {
      r.native || mt(() => {
        var w;
        C(), d.value && ((w = m.value) == null || w.handleScroll(d.value));
      });
    }), Vn(Pl, Fr({
      scrollbarElement: u,
      wrapElement: d
    })), Bf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), vt(() => {
      r.native || mt(() => {
        C();
      });
    }), yu(() => C()), t({
      wrapRef: d,
      update: C,
      scrollTo: f,
      setScrollTop: I,
      setScrollLeft: R,
      handleScroll: E
    }), (w, T) => (N(), H("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: q(c(o).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: q(c(g)),
        style: Rt(c(y)),
        tabindex: w.tabindex,
        onScroll: E
      }, [
        (N(), me(Wt(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: p,
          class: q(c(v)),
          style: Rt(w.viewStyle),
          role: w.role,
          "aria-label": w.ariaLabel,
          "aria-orientation": w.ariaOrientation
        }, {
          default: fe(() => [
            Ee(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      w.native ? te("v-if", !0) : (N(), me(i_, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var m_ = /* @__PURE__ */ rt(p_, [["__file", "scrollbar.vue"]]);
const h_ = Sn(m_), $l = Symbol("popper"), Qd = Symbol("popperContent"), g_ = [
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
    values: g_,
    default: "tooltip"
  }
}), v_ = ie({
  name: "ElPopper",
  inheritAttrs: !1
}), b_ = /* @__PURE__ */ ie({
  ...v_,
  props: Jd,
  setup(e, { expose: t }) {
    const n = e, r = G(), o = G(), a = G(), s = G(), i = P(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Vn($l, l), (u, d) => Ee(u.$slots, "default");
  }
});
var y_ = /* @__PURE__ */ rt(b_, [["__file", "popper.vue"]]);
const ef = Je({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), __ = ie({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), w_ = /* @__PURE__ */ ie({
  ...__,
  props: ef,
  setup(e, { expose: t }) {
    const n = e, r = kt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = je(Qd, void 0);
    return Ce(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Hn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (N(), H("span", {
      ref_key: "arrowRef",
      ref: a,
      class: q(c(r).e("arrow")),
      style: Rt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var k_ = /* @__PURE__ */ rt(w_, [["__file", "arrow.vue"]]);
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
}), nf = Symbol("elForwardRef"), T_ = (e) => {
  Vn(nf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, S_ = (e) => ({
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
}, E_ = "ElOnlyChild", A_ = ie({
  name: E_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = je(nf), a = S_((r = o?.setForwardRef) != null ? r : Ko);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = rf(i);
      return l ? At(Vf(l, n), [[a]]) : null;
    };
  }
});
function rf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (on(n))
      switch (n.type) {
        case jf:
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
  const t = kt("only-child");
  return M("span", {
    class: t.e("content")
  }, [e]);
}
const C_ = ie({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), I_ = /* @__PURE__ */ ie({
  ...C_,
  props: tf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = je($l, void 0);
    T_(o);
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
      Ce(() => n.virtualRef, (p) => {
        p && (o.value = rr(p));
      }, {
        immediate: !0
      }), Ce(o, (p, m) => {
        u?.(), u = void 0, wn(p) && (d.forEach((y) => {
          var g;
          const v = n[y];
          v && (p.addEventListener(y.slice(2).toLowerCase(), v), (g = m?.removeEventListener) == null || g.call(m, y.slice(2).toLowerCase(), v));
        }), qs(p) && (u = Ce([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            sr(y[v]) ? p.removeAttribute(g) : p.setAttribute(g, y[v]);
          });
        }, { immediate: !0 }))), wn(m) && qs(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => m.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Hn(() => {
      if (u?.(), u = void 0, o.value && wn(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const y = n[m];
          y && p.removeEventListener(m.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? te("v-if", !0) : (N(), me(c(A_), co({ key: 0 }, p.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: fe(() => [
        Ee(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var L_ = /* @__PURE__ */ rt(I_, [["__file", "trigger.vue"]]);
const Es = "focus-trap.focus-after-trapped", As = "focus-trap.focus-after-released", O_ = "focus-trap.focusout-prevented", qc = {
  cancelable: !0,
  bubbles: !1
}, x_ = {
  cancelable: !0,
  bubbles: !1
}, Yc = "focusAfterTrapped", Zc = "focusAfterReleased", R_ = Symbol("elFocusTrap"), Ml = G(), as = G(0), Dl = G(0);
let ga = 0;
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
    if (!N_(n, t))
      return n;
}, N_ = (e, t) => {
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
}, P_ = (e) => {
  const t = of(e), n = Xc(t, e), r = Xc(t.reverse(), e);
  return [n, r];
}, $_ = (e) => e instanceof HTMLInputElement && "select" in e, Xn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    wn(e) && !qs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Dl.value = window.performance.now(), e !== n && $_(e) && t && e.select(), wn(e) && r && e.removeAttribute("tabindex");
  }
};
function Qc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const M_ = () => {
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
}, D_ = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Xn(r, t), document.activeElement !== n)
      return;
}, Jc = M_(), F_ = () => as.value > Dl.value, va = () => {
  Ml.value = "pointer", as.value = window.performance.now();
}, eu = () => {
  Ml.value = "keyboard", as.value = window.performance.now();
}, z_ = () => (vt(() => {
  ga === 0 && (document.addEventListener("mousedown", va), document.addEventListener("touchstart", va), document.addEventListener("keydown", eu)), ga++;
}), Hn(() => {
  ga--, ga <= 0 && (document.removeEventListener("mousedown", va), document.removeEventListener("touchstart", va), document.removeEventListener("keydown", eu));
}), {
  focusReason: Ml,
  lastUserFocusTimestamp: as,
  lastAutomatedFocusTimestamp: Dl
}), ba = (e) => new CustomEvent(O_, {
  ...x_,
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
const tu = (e) => {
  e.code === zn.esc && lo.forEach((t) => t(e));
}, B_ = (e) => {
  vt(() => {
    lo.length === 0 && document.addEventListener("keydown", tu), _t && lo.push(e);
  }), Hn(() => {
    lo = lo.filter((t) => t !== e), lo.length === 0 && _t && document.removeEventListener("keydown", tu);
  });
}, V_ = ie({
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
    const { focusReason: a } = z_();
    B_((g) => {
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
      const { code: v, altKey: E, ctrlKey: f, metaKey: I, currentTarget: R, shiftKey: C } = g, { loop: w } = e, T = v === zn.tab && !E && !f && !I, x = document.activeElement;
      if (T && x) {
        const Y = R, [Z, ae] = P_(Y);
        if (Z && ae) {
          if (!C && x === ae) {
            const le = ba({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (g.preventDefault(), w && Xn(Z, !0));
          } else if (C && [Z, Y].includes(x)) {
            const le = ba({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (g.preventDefault(), w && Xn(ae, !0));
          }
        } else if (x === Y) {
          const le = ba({
            focusReason: a.value
          });
          t("focusout-prevented", le), le.defaultPrevented || g.preventDefault();
        }
      }
    };
    Vn(R_, {
      focusTrapRef: n,
      onKeydown: i
    }), Ce(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Ce([n], ([g], [v]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", d), g.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", p));
    });
    const l = (g) => {
      t(Yc, g);
    }, u = (g) => t(Zc, g), d = (g) => {
      const v = c(n);
      if (!v)
        return;
      const E = g.target, f = g.relatedTarget, I = E && v.contains(E);
      e.trapped || f && v.contains(f) || (r = f), I && t("focusin", g), !s.paused && e.trapped && (I ? o = E : Xn(o, !0));
    }, p = (g) => {
      const v = c(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const E = g.relatedTarget;
          !sr(E) && !v.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = ba({
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
      await mt();
      const g = c(n);
      if (g) {
        Jc.push(s);
        const v = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !g.contains(v)) {
          const f = new Event(Es, qc);
          g.addEventListener(Es, l), g.dispatchEvent(f), f.defaultPrevented || mt(() => {
            let I = e.focusStartEl;
            Vt(I) || (Xn(I), document.activeElement !== I && (I = "first")), I === "first" && D_(of(g), !0), (document.activeElement === v || I === "container") && Xn(g);
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
        g.addEventListener(As, u), g.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !F_() || g.contains(document.activeElement)) && Xn(r ?? document.body), g.removeEventListener(As, u), Jc.remove(s);
      }
    }
    return vt(() => {
      e.trapped && m(), Ce(() => e.trapped, (g) => {
        g ? m() : y();
      });
    }), Hn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function j_(e, t, n, r, o, a) {
  return Ee(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var U_ = /* @__PURE__ */ rt(V_, [["render", j_], ["__file", "focus-trap.vue"]]), Qt = "top", dn = "bottom", fn = "right", Jt = "left", Fl = "auto", ra = [Qt, dn, fn, Jt], ho = "start", Zo = "end", H_ = "clippingParents", af = "viewport", No = "popper", W_ = "reference", nu = ra.reduce(function(e, t) {
  return e.concat([t + "-" + ho, t + "-" + Zo]);
}, []), ss = [].concat(ra, [Fl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ho, t + "-" + Zo]);
}, []), G_ = "beforeRead", K_ = "read", q_ = "afterRead", Y_ = "beforeMain", Z_ = "main", X_ = "afterMain", Q_ = "beforeWrite", J_ = "write", ew = "afterWrite", tw = [G_, K_, q_, Y_, Z_, X_, Q_, J_, ew];
function Un(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function an(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Vr(e) {
  var t = an(e).Element;
  return e instanceof t || e instanceof Element;
}
function cn(e) {
  var t = an(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = an(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function nw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !cn(a) || !Un(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function rw(e) {
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
var sf = { name: "applyStyles", enabled: !0, phase: "write", fn: nw, effect: rw, requires: ["computeStyles"] };
function Bn(e) {
  return e.split("-")[0];
}
var Dr = Math.max, Va = Math.min, go = Math.round;
function Ys() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function lf() {
  return !/^((?!chrome|android).)*safari/i.test(Ys());
}
function vo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && cn(e) && (o = e.offsetWidth > 0 && go(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && go(r.height) / e.offsetHeight || 1);
  var s = Vr(e) ? an(e) : window, i = s.visualViewport, l = !lf() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: u + p, bottom: d + m, left: u, x: u, y: d };
}
function Bl(e) {
  var t = vo(e), n = e.offsetWidth, r = e.offsetHeight;
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
function ur(e) {
  return an(e).getComputedStyle(e);
}
function ow(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function Ir(e) {
  return ((Vr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ls(e) {
  return Un(e) === "html" ? e : e.assignedSlot || e.parentNode || (zl(e) ? e.host : null) || Ir(e);
}
function ru(e) {
  return !cn(e) || ur(e).position === "fixed" ? null : e.offsetParent;
}
function aw(e) {
  var t = /firefox/i.test(Ys()), n = /Trident/i.test(Ys());
  if (n && cn(e)) {
    var r = ur(e);
    if (r.position === "fixed") return null;
  }
  var o = ls(e);
  for (zl(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(Un(o)) < 0; ) {
    var a = ur(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function oa(e) {
  for (var t = an(e), n = ru(e); n && ow(n) && ur(n).position === "static"; ) n = ru(n);
  return n && (Un(n) === "html" || Un(n) === "body" && ur(n).position === "static") ? t : n || aw(e) || t;
}
function Vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bo(e, t, n) {
  return Dr(e, Va(t, n));
}
function sw(e, t, n) {
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
var lw = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, df(typeof e != "number" ? e : ff(e, ra));
};
function iw(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Bn(n.placement), l = Vl(i), u = [Jt, fn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = lw(o.padding, n), m = Bl(a), y = l === "y" ? Qt : Jt, g = l === "y" ? dn : fn, v = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], E = s[l] - n.rects.reference[l], f = oa(a), I = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, R = v / 2 - E / 2, C = p[y], w = I - m[d] - p[g], T = I / 2 - m[d] / 2 + R, x = Bo(C, T, w), Y = l;
    n.modifiersData[r] = (t = {}, t[Y] = x, t.centerOffset = x - T, t);
  }
}
function cw(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || cf(t.elements.popper, o) && (t.elements.arrow = o));
}
var uw = { name: "arrow", enabled: !0, phase: "main", fn: iw, effect: cw, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function bo(e) {
  return e.split("-")[1];
}
var dw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function fw(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: go(n * o) / o || 0, y: go(r * o) / o || 0 };
}
function ou(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, y = m === void 0 ? 0 : m, g = s.y, v = g === void 0 ? 0 : g, E = typeof d == "function" ? d({ x: y, y: v }) : { x: y, y: v };
  y = E.x, v = E.y;
  var f = s.hasOwnProperty("x"), I = s.hasOwnProperty("y"), R = Jt, C = Qt, w = window;
  if (u) {
    var T = oa(n), x = "clientHeight", Y = "clientWidth";
    if (T === an(n) && (T = Ir(n), ur(T).position !== "static" && i === "absolute" && (x = "scrollHeight", Y = "scrollWidth")), T = T, o === Qt || (o === Jt || o === fn) && a === Zo) {
      C = dn;
      var Z = p && T === w && w.visualViewport ? w.visualViewport.height : T[x];
      v -= Z - r.height, v *= l ? 1 : -1;
    }
    if (o === Jt || (o === Qt || o === dn) && a === Zo) {
      R = fn;
      var ae = p && T === w && w.visualViewport ? w.visualViewport.width : T[Y];
      y -= ae - r.width, y *= l ? 1 : -1;
    }
  }
  var he = Object.assign({ position: i }, u && dw), le = d === !0 ? fw({ x: y, y: v }, an(n)) : { x: y, y: v };
  if (y = le.x, v = le.y, l) {
    var Te;
    return Object.assign({}, he, (Te = {}, Te[C] = I ? "0" : "", Te[R] = f ? "0" : "", Te.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", Te));
  }
  return Object.assign({}, he, (t = {}, t[C] = I ? v + "px" : "", t[R] = f ? y + "px" : "", t.transform = "", t));
}
function pw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Bn(t.placement), variation: bo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ou(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ou(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var pf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: pw, data: {} }, ya = { passive: !0 };
function mw(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = an(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, ya);
  }), i && l.addEventListener("resize", n.update, ya), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ya);
    }), i && l.removeEventListener("resize", n.update, ya);
  };
}
var mf = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: mw, data: {} }, hw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Aa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return hw[t];
  });
}
var gw = { start: "end", end: "start" };
function au(e) {
  return e.replace(/start|end/g, function(t) {
    return gw[t];
  });
}
function jl(e) {
  var t = an(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ul(e) {
  return vo(Ir(e)).left + jl(e).scrollLeft;
}
function vw(e, t) {
  var n = an(e), r = Ir(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = lf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Ul(e), y: l };
}
function bw(e) {
  var t, n = Ir(e), r = jl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Dr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Dr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Ul(e), l = -r.scrollTop;
  return ur(o || n).direction === "rtl" && (i += Dr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Hl(e) {
  var t = ur(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function hf(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : cn(e) && Hl(e) ? e : hf(ls(e));
}
function Vo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = hf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = an(r), s = o ? [a].concat(a.visualViewport || [], Hl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Vo(ls(s)));
}
function Zs(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function yw(e, t) {
  var n = vo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function su(e, t, n) {
  return t === af ? Zs(vw(e, n)) : Vr(t) ? yw(t, n) : Zs(bw(Ir(e)));
}
function _w(e) {
  var t = Vo(ls(e)), n = ["absolute", "fixed"].indexOf(ur(e).position) >= 0, r = n && cn(e) ? oa(e) : e;
  return Vr(r) ? t.filter(function(o) {
    return Vr(o) && cf(o, r) && Un(o) !== "body";
  }) : [];
}
function ww(e, t, n, r) {
  var o = t === "clippingParents" ? _w(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = su(e, u, r);
    return l.top = Dr(d.top, l.top), l.right = Va(d.right, l.right), l.bottom = Va(d.bottom, l.bottom), l.left = Dr(d.left, l.left), l;
  }, su(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function gf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Bn(r) : null, a = r ? bo(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Qt:
      l = { x: s, y: t.y - n.height };
      break;
    case dn:
      l = { x: s, y: t.y + t.height };
      break;
    case fn:
      l = { x: t.x + t.width, y: i };
      break;
    case Jt:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? H_ : i, u = n.rootBoundary, d = u === void 0 ? af : u, p = n.elementContext, m = p === void 0 ? No : p, y = n.altBoundary, g = y === void 0 ? !1 : y, v = n.padding, E = v === void 0 ? 0 : v, f = df(typeof E != "number" ? E : ff(E, ra)), I = m === No ? W_ : No, R = e.rects.popper, C = e.elements[g ? I : m], w = ww(Vr(C) ? C : C.contextElement || Ir(e.elements.popper), l, d, s), T = vo(e.elements.reference), x = gf({ reference: T, element: R, placement: o }), Y = Zs(Object.assign({}, R, x)), Z = m === No ? Y : T, ae = { top: w.top - Z.top + f.top, bottom: Z.bottom - w.bottom + f.bottom, left: w.left - Z.left + f.left, right: Z.right - w.right + f.right }, he = e.modifiersData.offset;
  if (m === No && he) {
    var le = he[o];
    Object.keys(ae).forEach(function(Te) {
      var be = [fn, dn].indexOf(Te) >= 0 ? 1 : -1, B = [Qt, dn].indexOf(Te) >= 0 ? "y" : "x";
      ae[Te] += le[B] * be;
    });
  }
  return ae;
}
function kw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ss : l, d = bo(r), p = d ? i ? nu : nu.filter(function(g) {
    return bo(g) === d;
  }) : ra, m = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(g, v) {
    return g[v] = Xo(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[Bn(v)], g;
  }, {});
  return Object.keys(y).sort(function(g, v) {
    return y[g] - y[v];
  });
}
function Tw(e) {
  if (Bn(e) === Fl) return [];
  var t = Aa(e);
  return [au(e), t, au(t)];
}
function Sw(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, v = n.allowedAutoPlacements, E = t.options.placement, f = Bn(E), I = f === E, R = l || (I || !g ? [Aa(E)] : Tw(E)), C = [E].concat(R).reduce(function(ye, ne) {
      return ye.concat(Bn(ne) === Fl ? kw(t, { placement: ne, boundary: d, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: v }) : ne);
    }, []), w = t.rects.reference, T = t.rects.popper, x = /* @__PURE__ */ new Map(), Y = !0, Z = C[0], ae = 0; ae < C.length; ae++) {
      var he = C[ae], le = Bn(he), Te = bo(he) === ho, be = [Qt, dn].indexOf(le) >= 0, B = be ? "width" : "height", Q = Xo(t, { placement: he, boundary: d, rootBoundary: p, altBoundary: m, padding: u }), U = be ? Te ? fn : Jt : Te ? dn : Qt;
      w[B] > T[B] && (U = Aa(U));
      var pe = Aa(U), X = [];
      if (a && X.push(Q[le] <= 0), i && X.push(Q[U] <= 0, Q[pe] <= 0), X.every(function(ye) {
        return ye;
      })) {
        Z = he, Y = !1;
        break;
      }
      x.set(he, X);
    }
    if (Y) for (var K = g ? 3 : 1, Ne = function(ye) {
      var ne = C.find(function(se) {
        var Ke = x.get(se);
        if (Ke) return Ke.slice(0, ye).every(function(ge) {
          return ge;
        });
      });
      if (ne) return Z = ne, "break";
    }, Ue = K; Ue > 0; Ue--) {
      var ve = Ne(Ue);
      if (ve === "break") break;
    }
    t.placement !== Z && (t.modifiersData[r]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var Ew = { name: "flip", enabled: !0, phase: "main", fn: Sw, requiresIfExists: ["offset"], data: { _skip: !1 } };
function lu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function iu(e) {
  return [Qt, fn, dn, Jt].some(function(t) {
    return e[t] >= 0;
  });
}
function Aw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Xo(t, { elementContext: "reference" }), i = Xo(t, { altBoundary: !0 }), l = lu(s, r), u = lu(i, o, a), d = iu(l), p = iu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var Cw = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Aw };
function Iw(e, t, n) {
  var r = Bn(e), o = [Jt, Qt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Jt, fn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Lw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = ss.reduce(function(d, p) {
    return d[p] = Iw(p, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Ow = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Lw };
function xw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gf({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var vf = { name: "popperOffsets", enabled: !0, phase: "read", fn: xw, data: {} };
function Rw(e) {
  return e === "x" ? "y" : "x";
}
function Nw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, y = m === void 0 ? !0 : m, g = n.tetherOffset, v = g === void 0 ? 0 : g, E = Xo(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: d }), f = Bn(t.placement), I = bo(t.placement), R = !I, C = Vl(f), w = Rw(C), T = t.modifiersData.popperOffsets, x = t.rects.reference, Y = t.rects.popper, Z = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, ae = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), he = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, le = { x: 0, y: 0 };
  if (T) {
    if (a) {
      var Te, be = C === "y" ? Qt : Jt, B = C === "y" ? dn : fn, Q = C === "y" ? "height" : "width", U = T[C], pe = U + E[be], X = U - E[B], K = y ? -Y[Q] / 2 : 0, Ne = I === ho ? x[Q] : Y[Q], Ue = I === ho ? -Y[Q] : -x[Q], ve = t.elements.arrow, ye = y && ve ? Bl(ve) : { width: 0, height: 0 }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uf(), se = ne[be], Ke = ne[B], ge = Bo(0, x[Q], ye[Q]), et = R ? x[Q] / 2 - K - ge - se - ae.mainAxis : Ne - ge - se - ae.mainAxis, ut = R ? -x[Q] / 2 + K + ge + Ke + ae.mainAxis : Ue + ge + Ke + ae.mainAxis, Ye = t.elements.arrow && oa(t.elements.arrow), $t = Ye ? C === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, ot = (Te = he?.[C]) != null ? Te : 0, Ct = U + et - ot - $t, It = U + ut - ot, qe = Bo(y ? Va(pe, Ct) : pe, U, y ? Dr(X, It) : X);
      T[C] = qe, le[C] = qe - U;
    }
    if (i) {
      var Tt, k = C === "x" ? Qt : Jt, O = C === "x" ? dn : fn, V = T[w], re = w === "y" ? "height" : "width", Oe = V + E[k], ue = V - E[O], S = [Qt, Jt].indexOf(f) !== -1, F = (Tt = he?.[w]) != null ? Tt : 0, ke = S ? Oe : V - x[re] - Y[re] - F + ae.altAxis, xe = S ? V + x[re] + Y[re] - F - ae.altAxis : ue, Xe = y && S ? sw(ke, V, xe) : Bo(y ? ke : Oe, V, y ? xe : ue);
      T[w] = Xe, le[w] = Xe - V;
    }
    t.modifiersData[r] = le;
  }
}
var Pw = { name: "preventOverflow", enabled: !0, phase: "main", fn: Nw, requiresIfExists: ["offset"] };
function $w(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Mw(e) {
  return e === an(e) || !cn(e) ? jl(e) : $w(e);
}
function Dw(e) {
  var t = e.getBoundingClientRect(), n = go(t.width) / e.offsetWidth || 1, r = go(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Fw(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), o = cn(t) && Dw(t), a = Ir(t), s = vo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Un(t) !== "body" || Hl(a)) && (i = Mw(t)), cn(t) ? (l = vo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ul(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function zw(e) {
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
function Bw(e) {
  var t = zw(e);
  return tw.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Vw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function jw(e) {
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
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, cu, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: u, setOptions: function(v) {
      var E = typeof v == "function" ? v(u.options) : v;
      g(), u.options = Object.assign({}, a, u.options, E), u.scrollParents = { reference: Vr(s) ? Vo(s) : s.contextElement ? Vo(s.contextElement) : [], popper: Vo(i) };
      var f = Bw(jw([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(I) {
        return I.enabled;
      }), y(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, E = v.reference, f = v.popper;
        if (uu(E, f)) {
          u.rects = { reference: Fw(E, oa(f), u.options.strategy === "fixed"), popper: Bl(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
            return u.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var I = 0; I < u.orderedModifiers.length; I++) {
            if (u.reset === !0) {
              u.reset = !1, I = -1;
              continue;
            }
            var R = u.orderedModifiers[I], C = R.fn, w = R.options, T = w === void 0 ? {} : w, x = R.name;
            typeof C == "function" && (u = C({ state: u, options: T, name: x, instance: m }) || u);
          }
        }
      }
    }, update: Vw(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!uu(s, i)) return m;
    m.setOptions(l).then(function(v) {
      !p && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function y() {
      u.orderedModifiers.forEach(function(v) {
        var E = v.name, f = v.options, I = f === void 0 ? {} : f, R = v.effect;
        if (typeof R == "function") {
          var C = R({ state: u, name: E, instance: m, options: I }), w = function() {
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
    return m;
  };
}
Wl();
var Uw = [mf, vf, pf, sf];
Wl({ defaultModifiers: Uw });
var Hw = [mf, vf, pf, sf, Ow, Ew, Pw, uw, Cw], Ww = Wl({ defaultModifiers: Hw });
const Gw = ["fixed", "absolute"], Kw = Je({
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
    values: ss,
    default: "bottom"
  },
  popperOptions: {
    type: Se(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Gw,
    default: "absolute"
  }
}), bf = Je({
  ...Kw,
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
}), qw = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Yw = (e, t) => {
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
}, Zw = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Qw(e), ...t]
  };
  return Jw(a, o?.modifiers), a;
}, Xw = (e) => {
  if (_t)
    return rr(e);
};
function Qw(e) {
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
function Jw(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ek = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = tk(l);
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
    i(), !(!l || !u) && (a.value = Ww(l, u, c(o)));
  }), Hn(() => {
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
function tk(e) {
  const t = Object.keys(e.elements), n = Ma(t.map((o) => [o, e.styles[o] || {}])), r = Ma(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const nk = 0, rk = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = je($l, void 0), a = G(), s = G(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var f;
    const I = c(a), R = (f = c(s)) != null ? f : nk;
    return {
      name: "arrow",
      enabled: !_1(I),
      options: {
        element: I,
        padding: R
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...Zw(e, [
      c(l),
      c(i)
    ])
  })), d = P(() => Xw(e.referenceEl) || c(r)), { attributes: p, state: m, styles: y, update: g, forceUpdate: v, instanceRef: E } = ek(d, n, u);
  return Ce(E, (f) => t.value = f), vt(() => {
    Ce(() => {
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
}, ok = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Rd(), a = kt("popper"), s = P(() => c(t).popper), i = G(ze(e.zIndex) ? e.zIndex : o()), l = P(() => [
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
}, ak = ie({
  name: "ElPopperContent"
}), sk = /* @__PURE__ */ ie({
  ...ak,
  props: bf,
  emits: qw,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Yw(r, n), { attributes: p, arrowRef: m, contentRef: y, styles: g, instanceRef: v, role: E, update: f } = rk(r), {
      ariaModal: I,
      arrowStyle: R,
      contentAttrs: C,
      contentClass: w,
      contentStyle: T,
      updateZIndex: x
    } = ok(r, {
      styles: g,
      attributes: p,
      role: E
    }), Y = je(Ba, void 0), Z = G();
    Vn(Qd, {
      arrowStyle: R,
      arrowRef: m,
      arrowOffset: Z
    }), Y && Vn(Ba, {
      ...Y,
      addInputId: Ko,
      removeInputId: Ko
    });
    let ae;
    const he = (Te = !0) => {
      f(), Te && x();
    }, le = () => {
      he(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return vt(() => {
      Ce(() => r.triggerTargetEl, (Te, be) => {
        ae?.(), ae = void 0;
        const B = c(Te || y.value), Q = c(be || y.value);
        wn(B) && (ae = Ce([E, () => r.ariaLabel, I, () => r.id], (U) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((pe, X) => {
            sr(U[X]) ? B.removeAttribute(pe) : B.setAttribute(pe, U[X]);
          });
        }, { immediate: !0 })), Q !== B && wn(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((U) => {
          Q.removeAttribute(U);
        });
      }, { immediate: !0 }), Ce(() => r.visible, le, { immediate: !0 });
    }), Hn(() => {
      ae?.(), ae = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: v,
      updatePopper: he,
      contentStyle: T
    }), (Te, be) => (N(), H("div", co({
      ref_key: "contentRef",
      ref: y
    }, c(C), {
      style: c(T),
      class: c(w),
      tabindex: "-1",
      onMouseenter: (B) => Te.$emit("mouseenter", B),
      onMouseleave: (B) => Te.$emit("mouseleave", B)
    }), [
      M(c(U_), {
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
        default: fe(() => [
          Ee(Te.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var lk = /* @__PURE__ */ rt(sk, [["__file", "content.vue"]]);
const ik = Sn(y_), Gl = Symbol("elTooltip");
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
const ck = Je({
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
}), uk = ({
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
}, Kl = Je({
  ...ck,
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
    default: () => [zn.enter, zn.numpadEnter, zn.space]
  }
}), dk = ts({
  type: Se(Boolean),
  default: null
}), fk = ts({
  type: Se(Function)
}), pk = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: dk,
    [n]: fk
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
      const m = Kt(), { emit: y } = m, g = m.props, v = P(() => lt(g[n])), E = P(() => g[e] === null), f = (x) => {
        s.value !== !0 && (s.value = !0, i && (i.value = x), lt(d) && d(x));
      }, I = (x) => {
        s.value !== !1 && (s.value = !1, i && (i.value = x), lt(p) && p(x));
      }, R = (x) => {
        if (g.disabled === !0 || lt(u) && !u())
          return;
        const Y = v.value && _t;
        Y && y(t, !0), (E.value || !Y) && f(x);
      }, C = (x) => {
        if (g.disabled === !0 || !_t)
          return;
        const Y = v.value && _t;
        Y && y(t, !1), (E.value || !Y) && I(x);
      }, w = (x) => {
        Sr(x) && (g.disabled && x ? v.value && y(t, !1) : s.value !== x && (x ? f() : I()));
      }, T = () => {
        s.value ? C() : R();
      };
      return Ce(() => g[e], w), l && m.appContext.config.globalProperties.$route !== void 0 && Ce(() => ({
        ...m.proxy.$route
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
  useModelToggleProps: mk,
  useModelToggleEmits: hk,
  useModelToggle: gk
} = pk("visible"), vk = Je({
  ...Jd,
  ...mk,
  ...Kl,
  ...yf,
  ...ef,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), bk = [
  ...hk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], yk = (e, t) => $n(e) ? e.includes(t) : e === t, oo = (e, t, n) => (r) => {
  yk(c(e), t) && n(r);
}, Qn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, _k = ie({
  name: "ElTooltipTrigger"
}), wk = /* @__PURE__ */ ie({
  ..._k,
  props: yf,
  setup(e, { expose: t }) {
    const n = e, r = kt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = je(Gl, void 0), d = G(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = er(n, "trigger"), y = Qn(p, oo(m, "hover", i)), g = Qn(p, oo(m, "hover", l)), v = Qn(p, oo(m, "click", (C) => {
      C.button === 0 && u(C);
    })), E = Qn(p, oo(m, "focus", i)), f = Qn(p, oo(m, "focus", l)), I = Qn(p, oo(m, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), R = Qn(p, (C) => {
      const { code: w } = C;
      n.triggerKeys.includes(w) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: d
    }), (C, w) => (N(), me(c(L_), {
      id: c(a),
      "virtual-ref": C.virtualRef,
      open: c(s),
      "virtual-triggering": C.virtualTriggering,
      class: q(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(v),
      onContextmenu: c(I),
      onFocus: c(E),
      onMouseenter: c(y),
      onMouseleave: c(g),
      onKeydown: c(R)
    }, {
      default: fe(() => [
        Ee(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var kk = /* @__PURE__ */ rt(wk, [["__file", "trigger.vue"]]);
const Tk = Je({
  to: {
    type: Se([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Sk = /* @__PURE__ */ ie({
  __name: "teleport",
  props: Tk,
  setup(e) {
    return (t, n) => t.disabled ? Ee(t.$slots, "default", { key: 0 }) : (N(), me(Uf, {
      key: 1,
      to: t.to
    }, [
      Ee(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Ek = /* @__PURE__ */ rt(Sk, [["__file", "teleport.vue"]]);
const Ak = Sn(Ek), _f = () => {
  const e = bl(), t = qd(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Ck = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Ik = () => {
  const { id: e, selector: t } = _f();
  return Hf(() => {
    _t && (document.body.querySelector(t.value) || Ck(e.value));
  }), {
    id: e,
    selector: t
  };
}, Lk = ie({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Ok = /* @__PURE__ */ ie({
  ...Lk,
  props: Kl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = _f(), o = kt("tooltip"), a = G();
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
    } = je(Gl, void 0), f = P(() => n.transition || `${o.namespace.value}-fade-in-linear`), I = P(() => n.persistent);
    Hn(() => {
      s?.();
    });
    const R = P(() => c(I) ? !0 : c(u)), C = P(() => n.disabled ? !1 : c(u)), w = P(() => n.appendTo || r.value), T = P(() => {
      var U;
      return (U = n.style) != null ? U : {};
    }), x = G(!0), Y = () => {
      g(), Q() && Xn(document.body), x.value = !0;
    }, Z = () => {
      if (c(i))
        return !0;
    }, ae = Qn(Z, () => {
      n.enterable && c(d) === "hover" && m();
    }), he = Qn(Z, () => {
      c(d) === "hover" && p();
    }), le = () => {
      var U, pe;
      (pe = (U = a.value) == null ? void 0 : U.updatePopper) == null || pe.call(U), v?.();
    }, Te = () => {
      E?.();
    }, be = () => {
      y(), s = D1(P(() => {
        var U;
        return (U = a.value) == null ? void 0 : U.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && p();
      });
    }, B = () => {
      n.virtualTriggering || p();
    }, Q = (U) => {
      var pe;
      const X = (pe = a.value) == null ? void 0 : pe.popperContentRef, K = U?.relatedTarget || document.activeElement;
      return X?.contains(K);
    };
    return Ce(() => c(u), (U) => {
      U ? x.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ce(() => n.content, () => {
      var U, pe;
      (pe = (U = a.value) == null ? void 0 : U.updatePopper) == null || pe.call(U);
    }), t({
      contentRef: a,
      isFocusInsideContent: Q
    }), (U, pe) => (N(), me(c(Ak), {
      disabled: !U.teleported,
      to: c(w)
    }, {
      default: fe(() => [
        M(wo, {
          name: c(f),
          onAfterLeave: Y,
          onBeforeEnter: le,
          onAfterEnter: be,
          onBeforeLeave: Te
        }, {
          default: fe(() => [
            c(R) ? At((N(), me(c(lk), co({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, U.$attrs, {
              "aria-label": U.ariaLabel,
              "aria-hidden": x.value,
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
              "popper-style": [U.popperStyle, c(T)],
              "reference-el": U.referenceEl,
              "trigger-target-el": U.triggerTargetEl,
              visible: c(C),
              "z-index": U.zIndex,
              onMouseenter: c(ae),
              onMouseleave: c(he),
              onBlur: B,
              onClose: c(p)
            }), {
              default: fe(() => [
                Ee(U.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [ir, c(C)]
            ]) : te("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var xk = /* @__PURE__ */ rt(Ok, [["__file", "content.vue"]]);
const Rk = ie({
  name: "ElTooltip"
}), Nk = /* @__PURE__ */ ie({
  ...Rk,
  props: vk,
  emits: bk,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Ik();
    const o = rs(), a = G(), s = G(), i = () => {
      var f;
      const I = c(a);
      I && ((f = I.popperInstanceRef) == null || f.update());
    }, l = G(!1), u = G(), { show: d, hide: p, hasUpdateHandler: m } = gk({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = uk({
      showAfter: er(r, "showAfter"),
      hideAfter: er(r, "hideAfter"),
      autoClose: er(r, "autoClose"),
      open: d,
      close: p
    }), v = P(() => Sr(r.visible) && !m.value);
    Vn(Gl, {
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
    }), Ce(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const E = (f) => {
      var I;
      return (I = s.value) == null ? void 0 : I.isFocusInsideContent(f);
    };
    return Wf(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: y,
      onClose: g,
      hide: p
    }), (f, I) => (N(), me(c(ik), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: fe(() => [
        M(kk, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: fe(() => [
            f.$slots.default ? Ee(f.$slots, "default", { key: 0 }) : te("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        M(xk, {
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
          default: fe(() => [
            Ee(f.$slots, "content", {}, () => [
              f.rawContent ? (N(), H("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (N(), H("span", { key: 1 }, D(f.content), 1))
            ]),
            f.showArrow ? (N(), me(c(k_), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : te("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Pk = /* @__PURE__ */ rt(Nk, [["__file", "tooltip.vue"]]);
const $k = Sn(Pk), Mk = Je({
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
}), Dk = ie({
  name: "ElBadge"
}), Fk = /* @__PURE__ */ ie({
  ...Dk,
  props: Mk,
  setup(e, { expose: t }) {
    const n = e, r = kt("badge"), o = P(() => n.isDot ? "" : ze(n.value) && ze(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = P(() => {
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
    }), (s, i) => (N(), H("div", {
      class: q(c(r).b())
    }, [
      Ee(s.$slots, "default"),
      M(wo, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: fe(() => [
          At(b("sup", {
            class: q([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Rt(c(a))
          }, [
            Ee(s.$slots, "content", { value: c(o) }, () => [
              rn(D(c(o)), 1)
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
var zk = /* @__PURE__ */ rt(Fk, [["__file", "badge.vue"]]);
const Bk = Sn(zk), Vk = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Xs = Je({
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
}), jk = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Uk = ie({
  name: "ElTag"
}), Hk = /* @__PURE__ */ ie({
  ...Uk,
  props: Xs,
  emits: jk,
  setup(e, { emit: t }) {
    const n = e, r = na(), o = kt("tag"), a = P(() => {
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
    return (u, d) => u.disableTransitions ? (N(), H("span", {
      key: 0,
      class: q(c(a)),
      style: Rt({ backgroundColor: u.color }),
      onClick: i
    }, [
      b("span", {
        class: q(c(o).e("content"))
      }, [
        Ee(u.$slots, "default")
      ], 2),
      u.closable ? (N(), me(c(yt), {
        key: 0,
        class: q(c(o).e("close")),
        onClick: nt(s, ["stop"])
      }, {
        default: fe(() => [
          M(c(Fa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : te("v-if", !0)
    ], 6)) : (N(), me(wo, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: fe(() => [
        b("span", {
          class: q(c(a)),
          style: Rt({ backgroundColor: u.color }),
          onClick: i
        }, [
          b("span", {
            class: q(c(o).e("content"))
          }, [
            Ee(u.$slots, "default")
          ], 2),
          u.closable ? (N(), me(c(yt), {
            key: 0,
            class: q(c(o).e("close")),
            onClick: nt(s, ["stop"])
          }, {
            default: fe(() => [
              M(c(Fa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : te("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Wk = /* @__PURE__ */ rt(Hk, [["__file", "tag.vue"]]);
const Gk = Sn(Wk), yr = /* @__PURE__ */ new Map();
if (_t) {
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
  return $n(t.arg) ? n = t.arg : wn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || d || p || m || y || t.value(r, o);
  };
}
const Kk = {
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
}, qk = Je({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Se(Object)
  },
  size: ns,
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
}), mn = {};
ie({
  name: "ElConfigProvider",
  props: qk,
  setup(e, { slots: t }) {
    Ce(() => e.message, (r) => {
      Object.assign(mn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Bd(e);
    return () => Ee(t, "default", { config: n?.value });
  }
});
const Yk = 100, Zk = 600, pu = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Yk, delay: o = Zk } = lt(n) ? {} : n;
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
}, Xk = Je({
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
  ...Gr(["ariaLabel"])
}), Qk = {
  [cr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [lr]: (e) => ze(e) || sr(e),
  [Ot]: (e) => ze(e) || sr(e)
}, Jk = ie({
  name: "ElInputNumber"
}), eT = /* @__PURE__ */ ie({
  ...Jk,
  props: Xk,
  emits: Qk,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Il(), a = kt("input-number"), s = G(), i = Fr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = os(), u = P(() => ze(r.modelValue) && r.modelValue <= r.min), d = P(() => ze(r.modelValue) && r.modelValue >= r.max), p = P(() => {
      const B = f(r.step);
      return Mn(r.precision) ? Math.max(f(r.modelValue), B) : (B > r.precision, r.precision);
    }), m = P(() => r.controls && r.controlsPosition === "right"), y = na(), g = Nl(), v = P(() => {
      if (i.userInput !== null)
        return i.userInput;
      let B = i.currentValue;
      if (sr(B))
        return "";
      if (ze(B)) {
        if (Number.isNaN(B))
          return "";
        Mn(r.precision) || (B = B.toFixed(r.precision));
      }
      return B;
    }), E = (B, Q) => {
      if (Mn(Q) && (Q = p.value), Q === 0)
        return Math.round(B);
      let U = String(B);
      const pe = U.indexOf(".");
      if (pe === -1 || !U.replace(".", "").split("")[pe + Q])
        return B;
      const Ne = U.length;
      return U.charAt(Ne - 1) === "5" && (U = `${U.slice(0, Math.max(0, Ne - 1))}6`), Number.parseFloat(Number(U).toFixed(Q));
    }, f = (B) => {
      if (sr(B))
        return 0;
      const Q = B.toString(), U = Q.indexOf(".");
      let pe = 0;
      return U !== -1 && (pe = Q.length - U - 1), pe;
    }, I = (B, Q = 1) => ze(B) ? E(B + r.step * Q) : i.currentValue, R = () => {
      if (r.readonly || g.value || d.value)
        return;
      const B = Number(v.value) || 0, Q = I(B);
      T(Q), n(lr, i.currentValue), Te();
    }, C = () => {
      if (r.readonly || g.value || u.value)
        return;
      const B = Number(v.value) || 0, Q = I(B, -1);
      T(Q), n(lr, i.currentValue), Te();
    }, w = (B, Q) => {
      const { max: U, min: pe, step: X, precision: K, stepStrictly: Ne, valueOnClear: Ue } = r;
      U < pe && Cl("InputNumber", "min should not be greater than max.");
      let ve = Number(B);
      if (sr(B) || Number.isNaN(ve))
        return null;
      if (B === "") {
        if (Ue === null)
          return null;
        ve = Vt(Ue) ? { min: pe, max: U }[Ue] : Ue;
      }
      return Ne && (ve = E(Math.round(ve / X) * X, K), ve !== B && Q && n(Ot, ve)), Mn(K) || (ve = E(ve, K)), (ve > U || ve < pe) && (ve = ve > U ? U : pe, Q && n(Ot, ve)), ve;
    }, T = (B, Q = !0) => {
      var U;
      const pe = i.currentValue, X = w(B);
      if (!Q) {
        n(Ot, X);
        return;
      }
      pe === X && B || (i.userInput = null, n(Ot, X), pe !== X && n(cr, X, pe), r.validateEvent && ((U = l?.validate) == null || U.call(l, "change").catch((K) => void 0)), i.currentValue = X);
    }, x = (B) => {
      i.userInput = B;
      const Q = B === "" ? null : Number(B);
      n(lr, Q), T(Q, !1);
    }, Y = (B) => {
      const Q = B !== "" ? Number(B) : "";
      (ze(Q) && !Number.isNaN(Q) || B === "") && T(Q), Te(), i.userInput = null;
    }, Z = () => {
      var B, Q;
      (Q = (B = s.value) == null ? void 0 : B.focus) == null || Q.call(B);
    }, ae = () => {
      var B, Q;
      (Q = (B = s.value) == null ? void 0 : B.blur) == null || Q.call(B);
    }, he = (B) => {
      n("focus", B);
    }, le = (B) => {
      var Q, U;
      i.userInput = null, Gd() && i.currentValue === null && ((Q = s.value) != null && Q.input) && (s.value.input.value = ""), n("blur", B), r.validateEvent && ((U = l?.validate) == null || U.call(l, "blur").catch((pe) => void 0));
    }, Te = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, be = (B) => {
      document.activeElement === B.target && B.preventDefault();
    };
    return Ce(() => r.modelValue, (B, Q) => {
      const U = w(B, !0);
      i.userInput === null && U !== Q && (i.currentValue = U);
    }, { immediate: !0 }), vt(() => {
      var B;
      const { min: Q, max: U, modelValue: pe } = r, X = (B = s.value) == null ? void 0 : B.input;
      if (X.setAttribute("role", "spinbutton"), Number.isFinite(U) ? X.setAttribute("aria-valuemax", String(U)) : X.removeAttribute("aria-valuemax"), Number.isFinite(Q) ? X.setAttribute("aria-valuemin", String(Q)) : X.removeAttribute("aria-valuemin"), X.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), X.setAttribute("aria-disabled", String(g.value)), !ze(pe) && pe != null) {
        let K = Number(pe);
        Number.isNaN(K) && (K = null), n(Ot, K);
      }
      X.addEventListener("wheel", be, { passive: !1 });
    }), yu(() => {
      var B, Q;
      const U = (B = s.value) == null ? void 0 : B.input;
      U?.setAttribute("aria-valuenow", `${(Q = i.currentValue) != null ? Q : ""}`);
    }), t({
      focus: Z,
      blur: ae
    }), (B, Q) => (N(), H("div", {
      class: q([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !B.controls),
        c(a).is("controls-right", c(m))
      ]),
      onDragstart: nt(() => {
      }, ["prevent"])
    }, [
      B.controls ? At((N(), H("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: bn(C, ["enter"])
      }, [
        Ee(B.$slots, "decrease-icon", {}, () => [
          M(c(yt), null, {
            default: fe(() => [
              c(m) ? (N(), me(c(Ud), { key: 0 })) : (N(), me(c(Cy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(pu), C]
      ]) : te("v-if", !0),
      B.controls ? At((N(), H("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: bn(R, ["enter"])
      }, [
        Ee(B.$slots, "increase-icon", {}, () => [
          M(c(yt), null, {
            default: fe(() => [
              c(m) ? (N(), me(c(my), { key: 0 })) : (N(), me(c(Ly), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(pu), R]
      ]) : te("v-if", !0),
      M(c(e_), {
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
          bn(nt(R, ["prevent"]), ["up"]),
          bn(nt(C, ["prevent"]), ["down"])
        ],
        onBlur: le,
        onFocus: he,
        onInput: x,
        onChange: Y
      }, Gf({
        _: 2
      }, [
        B.$slots.prefix ? {
          name: "prefix",
          fn: fe(() => [
            Ee(B.$slots, "prefix")
          ])
        } : void 0,
        B.$slots.suffix ? {
          name: "suffix",
          fn: fe(() => [
            Ee(B.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var tT = /* @__PURE__ */ rt(eT, [["__file", "input-number.vue"]]);
const nT = Sn(tT);
function rT() {
  const e = Tr(), t = G(0), n = 11, r = P(() => ({
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
const wf = Symbol("ElSelectGroup"), is = Symbol("ElSelect");
function oT(e, t) {
  const n = je(is), r = je(wf, { disabled: !1 }), o = P(() => d(wr(n.props.modelValue), e.value)), a = P(() => {
    var y;
    if (n.props.multiple) {
      const g = wr((y = n.props.modelValue) != null ? y : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = P(() => e.label || (on(e.value) ? "" : e.value)), i = P(() => e.value || e.label || ""), l = P(() => e.disabled || t.groupDisabled || a.value), u = Kt(), d = (y = [], g) => {
    if (on(e.value)) {
      const v = n.props.valueKey;
      return y && y.some((E) => Kf(kr(E, v)) === kr(g, v));
    } else
      return y && y.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (y) => {
    const g = new RegExp(Vk(y), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Ce(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ce(() => e.value, (y, g) => {
    const { remote: v, valueKey: E } = n.props;
    if ((v ? y !== g : !zo(y, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
      if (E && on(y) && on(g) && y[E] === g[E])
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
    hoverItem: p,
    updateOption: m
  };
}
const aT = ie({
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
    const t = kt("select"), n = rs(), r = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(m))
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
    } = oT(e, o), { visible: p, hover: m } = el(o), y = Kt().proxy;
    l.onOptionCreate(y), Hn(() => {
      const v = y.value, { selected: E } = l.states, f = E.some((I) => I.value === y.value);
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
      visible: p,
      hover: m,
      selectOptionClick: g,
      states: o
    };
  }
});
function sT(e, t, n, r, o, a) {
  return At((N(), H("li", {
    id: e.id,
    class: q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: nt(e.selectOptionClick, ["stop"])
  }, [
    Ee(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [ir, e.visible]
  ]);
}
var ql = /* @__PURE__ */ rt(aT, [["render", sT], ["__file", "option.vue"]]);
const lT = ie({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = je(is), t = kt("select"), n = P(() => e.props.popperClass), r = P(() => e.props.multiple), o = P(() => e.props.fitInputWidth), a = G("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return vt(() => {
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
function iT(e, t, n, r, o, a) {
  return N(), H("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Rt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (N(), H("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      Ee(e.$slots, "header")
    ], 2)) : te("v-if", !0),
    Ee(e.$slots, "default"),
    e.$slots.footer ? (N(), H("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      Ee(e.$slots, "footer")
    ], 2)) : te("v-if", !0)
  ], 6);
}
var cT = /* @__PURE__ */ rt(lT, [["render", iT], ["__file", "select-dropdown.vue"]]);
const uT = (e, t) => {
  const { t: n } = Il(), r = rs(), o = kt("select"), a = kt("input"), s = Fr({
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
  }), i = G(null), l = G(null), u = G(null), d = G(null), p = G(null), m = G(null), y = G(null), g = G(null), v = G(null), E = G(null), f = G(null), {
    isComposing: I,
    handleCompositionStart: R,
    handleCompositionUpdate: C,
    handleCompositionEnd: w
  } = Xd({
    afterComposition: ($) => Xe($)
  }), { wrapperRef: T, isFocused: x, handleBlur: Y } = Zd(p, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !Z.value && (Z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur($) {
      var ee, Ae;
      return ((ee = u.value) == null ? void 0 : ee.isFocusInsideContent($)) || ((Ae = d.value) == null ? void 0 : Ae.isFocusInsideContent($));
    },
    afterBlur() {
      Z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Z = G(!1), ae = G(), { form: he, formItem: le } = os(), { inputId: Te } = Rl(e, {
    formItemContext: le
  }), { valueOnClear: be, isEmptyValue: B } = ay(e), Q = P(() => e.disabled || he?.disabled), U = P(() => $n(e.modelValue) ? e.modelValue.length > 0 : !B(e.modelValue)), pe = P(() => {
    var $;
    return ($ = he?.statusIcon) != null ? $ : !1;
  }), X = P(() => e.clearable && !Q.value && s.inputHovering && U.value), K = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Ne = P(() => o.is("reverse", K.value && Z.value)), Ue = P(() => le?.validateState || ""), ve = P(() => Wd[Ue.value]), ye = P(() => e.remote ? 300 : 0), ne = P(() => e.remote && !s.inputValue && s.options.size === 0), se = P(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ke.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ke = P(() => ge.value.filter(($) => $.visible).length), ge = P(() => {
    const $ = Array.from(s.options.values()), ee = [];
    return s.optionValues.forEach((Ae) => {
      const tt = $.findIndex((bt) => bt.value === Ae);
      tt > -1 && ee.push($[tt]);
    }), ee.length >= $.length ? ee : $;
  }), et = P(() => Array.from(s.cachedOptions.values())), ut = P(() => {
    const $ = ge.value.filter((ee) => !ee.created).some((ee) => ee.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !$;
  }), Ye = () => {
    e.filterable && lt(e.filterMethod) || e.filterable && e.remote && lt(e.remoteMethod) || ge.value.forEach(($) => {
      var ee;
      (ee = $.updateOption) == null || ee.call($, s.inputValue);
    });
  }, $t = na(), ot = P(() => ["small"].includes($t.value) ? "small" : "default"), Ct = P({
    get() {
      return Z.value && !ne.value;
    },
    set($) {
      Z.value = $;
    }
  }), It = P(() => {
    if (e.multiple && !Mn(e.modelValue))
      return wr(e.modelValue).length === 0 && !s.inputValue;
    const $ = $n(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Mn($) ? !s.inputValue : !0;
  }), qe = P(() => {
    var $;
    const ee = ($ = e.placeholder) != null ? $ : n("el.select.placeholder");
    return e.multiple || !U.value ? ee : s.selectedLabel;
  }), Tt = P(() => Ks ? null : "mouseenter");
  Ce(() => e.modelValue, ($, ee) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), V(), !zo($, ee) && e.validateEvent && le?.validate("change").catch((Ae) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ce(() => Z.value, ($) => {
    $ ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", $);
  }), Ce(() => s.options.entries(), () => {
    _t && (V(), e.defaultFirstOption && (e.filterable || e.remote) && Ke.value && O());
  }, {
    flush: "post"
  }), Ce([() => s.hoveringIndex, ge], ([$]) => {
    ze($) && $ > -1 ? ae.value = ge.value[$] || {} : ae.value = {}, ge.value.forEach((ee) => {
      ee.hover = ae.value === ee;
    });
  }), bu(() => {
    s.isBeforeHide || Ye();
  });
  const k = ($) => {
    s.previousQuery === $ || I.value || (s.previousQuery = $, e.filterable && lt(e.filterMethod) ? e.filterMethod($) : e.filterable && e.remote && lt(e.remoteMethod) && e.remoteMethod($), e.defaultFirstOption && (e.filterable || e.remote) && Ke.value ? mt(O) : mt(Oe));
  }, O = () => {
    const $ = ge.value.filter((bt) => bt.visible && !bt.disabled && !bt.states.groupDisabled), ee = $.find((bt) => bt.created), Ae = $[0], tt = ge.value.map((bt) => bt.value);
    s.hoveringIndex = Kn(tt, ee || Ae);
  }, V = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const ee = $n(e.modelValue) ? e.modelValue[0] : e.modelValue, Ae = re(ee);
      s.selectedLabel = Ae.currentLabel, s.selected = [Ae];
      return;
    }
    const $ = [];
    Mn(e.modelValue) || wr(e.modelValue).forEach((ee) => {
      $.push(re(ee));
    }), s.selected = $;
  }, re = ($) => {
    let ee;
    const Ae = Pg($);
    for (let Zt = s.cachedOptions.size - 1; Zt >= 0; Zt--) {
      const jt = et.value[Zt];
      if (Ae ? kr(jt.value, e.valueKey) === kr($, e.valueKey) : jt.value === $) {
        ee = {
          value: $,
          currentLabel: jt.currentLabel,
          get isDisabled() {
            return jt.isDisabled;
          }
        };
        break;
      }
    }
    if (ee)
      return ee;
    const tt = Ae ? $.label : $ ?? "";
    return {
      value: $,
      currentLabel: tt
    };
  }, Oe = () => {
    s.hoveringIndex = ge.value.findIndex(($) => s.selected.some((ee) => He(ee) === He($)));
  }, ue = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, S = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, F = () => {
    var $, ee;
    (ee = ($ = u.value) == null ? void 0 : $.updatePopper) == null || ee.call($);
  }, ke = () => {
    var $, ee;
    (ee = ($ = d.value) == null ? void 0 : $.updatePopper) == null || ee.call($);
  }, xe = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), k(s.inputValue);
  }, Xe = ($) => {
    if (s.inputValue = $.target.value, e.remote)
      dt();
    else
      return xe();
  }, dt = b1(() => {
    xe();
  }, ye.value), Ze = ($) => {
    zo(e.modelValue, $) || t(cr, $);
  }, Gn = ($) => y1($, (ee) => {
    const Ae = s.cachedOptions.get(ee);
    return Ae && !Ae.disabled && !Ae.states.groupDisabled;
  }), pr = ($) => {
    if (e.multiple && $.code !== zn.delete && $.target.value.length <= 0) {
      const ee = wr(e.modelValue).slice(), Ae = Gn(ee);
      if (Ae < 0)
        return;
      const tt = ee[Ae];
      ee.splice(Ae, 1), t(Ot, ee), Ze(ee), t("remove-tag", tt);
    }
  }, Kr = ($, ee) => {
    const Ae = s.selected.indexOf(ee);
    if (Ae > -1 && !Q.value) {
      const tt = wr(e.modelValue).slice();
      tt.splice(Ae, 1), t(Ot, tt), Ze(tt), t("remove-tag", ee.value);
    }
    $.stopPropagation(), hr();
  }, mr = ($) => {
    $.stopPropagation();
    const ee = e.multiple ? [] : be.value;
    if (e.multiple)
      for (const Ae of s.selected)
        Ae.isDisabled && ee.push(Ae.value);
    t(Ot, ee), Ze(ee), s.hoveringIndex = -1, Z.value = !1, t("clear"), hr();
  }, En = ($) => {
    var ee;
    if (e.multiple) {
      const Ae = wr((ee = e.modelValue) != null ? ee : []).slice(), tt = Kn(Ae, $);
      tt > -1 ? Ae.splice(tt, 1) : (e.multipleLimit <= 0 || Ae.length < e.multipleLimit) && Ae.push($.value), t(Ot, Ae), Ze(Ae), $.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ot, $.value), Ze($.value), Z.value = !1;
    hr(), !Z.value && mt(() => {
      tn($);
    });
  }, Kn = ($ = [], ee) => Mn(ee) ? -1 : on(ee.value) ? $.findIndex((Ae) => zo(kr(Ae, e.valueKey), He(ee))) : $.indexOf(ee.value), tn = ($) => {
    var ee, Ae, tt, bt, Zt;
    const jt = $n($) ? $[0] : $;
    let St = null;
    if (jt?.value) {
      const Ln = ge.value.filter((Qr) => Qr.value === jt.value);
      Ln.length > 0 && (St = Ln[0].$el);
    }
    if (u.value && St) {
      const Ln = (bt = (tt = (Ae = (ee = u.value) == null ? void 0 : ee.popperRef) == null ? void 0 : Ae.contentRef) == null ? void 0 : tt.querySelector) == null ? void 0 : bt.call(tt, `.${o.be("dropdown", "wrap")}`);
      Ln && ly(Ln, St);
    }
    (Zt = f.value) == null || Zt.handleScroll();
  }, Yt = ($) => {
    s.options.set($.value, $), s.cachedOptions.set($.value, $);
  }, An = ($, ee) => {
    s.options.get($) === ee && s.options.delete($);
  }, Lr = P(() => {
    var $, ee;
    return (ee = ($ = u.value) == null ? void 0 : $.popperRef) == null ? void 0 : ee.contentRef;
  }), Or = () => {
    s.isBeforeHide = !1, mt(() => {
      var $;
      ($ = f.value) == null || $.update(), tn(s.selected);
    });
  }, hr = () => {
    var $;
    ($ = p.value) == null || $.focus();
  }, xr = () => {
    var $;
    if (Z.value) {
      Z.value = !1, mt(() => {
        var ee;
        return (ee = p.value) == null ? void 0 : ee.blur();
      });
      return;
    }
    ($ = p.value) == null || $.blur();
  }, Rr = ($) => {
    mr($);
  }, To = ($) => {
    if (Z.value = !1, x.value) {
      const ee = new FocusEvent("focus", $);
      mt(() => Y(ee));
    }
  }, Cn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, Nr = () => {
    Q.value || (Ks && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, Pr = () => {
    if (!Z.value)
      Nr();
    else {
      const $ = ge.value[s.hoveringIndex];
      $ && !$.isDisabled && En($);
    }
  }, He = ($) => on($.value) ? kr($.value, e.valueKey) : $.value, pn = P(() => ge.value.filter(($) => $.visible).every(($) => $.isDisabled)), qr = P(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Yr = P(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), In = ($) => {
    if (!Z.value) {
      Z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ke.value === 0 || I.value) && !pn.value) {
      $ === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : $ === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const ee = ge.value[s.hoveringIndex];
      (ee.isDisabled || !ee.visible) && In($), mt(() => tn(ae.value));
    }
  }, Zr = () => {
    if (!l.value)
      return 0;
    const $ = window.getComputedStyle(l.value);
    return Number.parseFloat($.gap || "6px");
  }, Xr = P(() => {
    const $ = Zr();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - $ : s.selectionWidth}px` };
  }), sn = P(() => ({ maxWidth: `${s.selectionWidth}px` })), Mt = ($) => {
    t("popup-scroll", $);
  };
  return Pn(l, ue), Pn(g, F), Pn(T, F), Pn(v, ke), Pn(E, S), vt(() => {
    V();
  }), {
    inputId: Te,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: x,
    expanded: Z,
    optionsArray: ge,
    hoverOption: ae,
    selectSize: $t,
    filteredOptionsCount: Ke,
    updateTooltip: F,
    updateTagTooltip: ke,
    debouncedOnInputChange: dt,
    onInput: Xe,
    deletePrevTag: pr,
    deleteTag: Kr,
    deleteSelected: mr,
    handleOptionSelect: En,
    scrollToOption: tn,
    hasModelValue: U,
    shouldShowPlaceholder: It,
    currentPlaceholder: qe,
    mouseEnterEventName: Tt,
    needStatusIcon: pe,
    showClose: X,
    iconComponent: K,
    iconReverse: Ne,
    validateState: Ue,
    validateIcon: ve,
    showNewOption: ut,
    updateOptions: Ye,
    collapseTagSize: ot,
    setSelected: V,
    selectDisabled: Q,
    emptyText: se,
    handleCompositionStart: R,
    handleCompositionUpdate: C,
    handleCompositionEnd: w,
    onOptionCreate: Yt,
    onOptionDestroy: An,
    handleMenuEnter: Or,
    focus: hr,
    blur: xr,
    handleClearClick: Rr,
    handleClickOutside: To,
    handleEsc: Cn,
    toggleMenu: Nr,
    selectOption: Pr,
    getValueKey: He,
    navigateOptions: In,
    dropdownMenuVisible: Ct,
    showTagList: qr,
    collapseTagList: Yr,
    popupScroll: Mt,
    tagStyle: Xr,
    collapseTagStyle: sn,
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
var dT = ie({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = je(is);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        $n(u) && u.forEach((d) => {
          var p, m, y, g;
          const v = (p = d?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? l(!Vt(d.children) && !$n(d.children) && lt((m = d.children) == null ? void 0 : m.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : v === "ElOption" ? i.push((g = d.props) == null ? void 0 : g.value) : $n(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), zo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const fT = Je({
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
    type: Dn,
    default: Ol
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Dn,
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
    values: ss,
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
}), mu = "ElSelect", pT = ie({
  name: mu,
  componentName: mu,
  components: {
    ElSelectMenu: cT,
    ElOption: ql,
    ElOptions: dT,
    ElTag: Gk,
    ElScrollbar: h_,
    ElTooltip: $k,
    ElIcon: yt
  },
  directives: { ClickOutside: Kk },
  props: fT,
  emits: [
    Ot,
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
      return $n(l) ? u ? l : d : u ? d : l;
    }), r = Fr({
      ...el(e),
      modelValue: n
    }), o = uT(r, t), { calculatorRef: a, inputStyle: s } = rT();
    Vn(is, Fr({
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
function mT(e, t, n, r, o, a) {
  const s = $r("el-tag"), i = $r("el-tooltip"), l = $r("el-icon"), u = $r("el-option"), d = $r("el-options"), p = $r("el-scrollbar"), m = $r("el-select-menu"), y = qf("click-outside");
  return At((N(), H("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Yf(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
      default: fe(() => {
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
            e.$slots.prefix ? (N(), H("div", {
              key: 0,
              ref: "prefixRef",
              class: q(e.nsSelect.e("prefix"))
            }, [
              Ee(e.$slots, "prefix")
            ], 2)) : te("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: q([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Ee(e.$slots, "tag", { key: 0 }, () => [
                (N(!0), H(pt, null, Jn(e.showTagList, (v) => (N(), H("div", {
                  key: e.getValueKey(v),
                  class: q(e.nsSelect.e("selected-item"))
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
                    default: fe(() => [
                      b("span", {
                        class: q(e.nsSelect.e("tags-text"))
                      }, [
                        Ee(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          rn(D(v.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (N(), me(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: fe(() => [
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
                        style: Rt(e.collapseTagStyle)
                      }, {
                        default: fe(() => [
                          b("span", {
                            class: q(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: fe(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: q(e.nsSelect.e("selection"))
                    }, [
                      (N(!0), H(pt, null, Jn(e.collapseTagList, (v) => (N(), H("div", {
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
                          onClose: (E) => e.deleteTag(E, v)
                        }, {
                          default: fe(() => [
                            b("span", {
                              class: q(e.nsSelect.e("tags-text"))
                            }, [
                              Ee(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                rn(D(v.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : te("v-if", !0)
              ]) : te("v-if", !0),
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
                    bn(nt((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    bn(nt((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    bn(nt(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    bn(nt(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    bn(nt(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: nt(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [jo, e.states.inputValue]
                ]),
                e.filterable ? (N(), H("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : te("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (N(), H("div", {
                key: 1,
                class: q([
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
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (N(), H("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : te("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: q(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (N(), me(l, {
                key: 0,
                class: q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: fe(() => [
                  (N(), me(Wt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0),
              e.showClose && e.clearIcon ? (N(), me(l, {
                key: 1,
                class: q([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: fe(() => [
                  (N(), me(Wt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : te("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (N(), me(l, {
                key: 2,
                class: q([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: fe(() => [
                  (N(), me(Wt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: fe(() => [
        M(m, { ref: "menuRef" }, {
          default: fe(() => [
            e.$slots.header ? (N(), H("div", {
              key: 0,
              class: q(e.nsSelect.be("dropdown", "header")),
              onClick: nt(() => {
              }, ["stop"])
            }, [
              Ee(e.$slots, "header")
            ], 10, ["onClick"])) : te("v-if", !0),
            At(M(p, {
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
                e.showNewOption ? (N(), me(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : te("v-if", !0),
                M(d, null, {
                  default: fe(() => [
                    Ee(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [ir, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (N(), H("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              Ee(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (N(), H("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              Ee(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : te("v-if", !0),
            e.$slots.footer ? (N(), H("div", {
              key: 3,
              class: q(e.nsSelect.be("dropdown", "footer")),
              onClick: nt(() => {
              }, ["stop"])
            }, [
              Ee(e.$slots, "footer")
            ], 10, ["onClick"])) : te("v-if", !0)
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
var hT = /* @__PURE__ */ rt(pT, [["render", mT], ["__file", "select.vue"]]);
const gT = ie({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = kt("select"), n = G(null), r = Kt(), o = G([]);
    Vn(wf, Fr({
      ...el(e)
    }));
    const a = P(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, p;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const d = wr(u), p = [];
      return d.forEach((m) => {
        var y, g;
        s(m) ? p.push(m.component.proxy) : (y = m.children) != null && y.length ? p.push(...i(m.children)) : (g = m.component) != null && g.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return vt(() => {
      l();
    }), H1(n, l, {
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
function vT(e, t, n, r, o, a) {
  return At((N(), H("ul", {
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
        Ee(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ir, e.visible]
  ]);
}
var kf = /* @__PURE__ */ rt(gT, [["render", vT], ["__file", "option-group.vue"]]);
const bT = Sn(hT, {
  Option: ql,
  OptionGroup: kf
}), yT = jd(ql);
jd(kf);
const _T = (e) => ["", ...Ll].includes(e), wT = Je({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: _T
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
  ...Gr(["ariaLabel"])
}), kT = {
  [Ot]: (e) => Sr(e) || Vt(e) || ze(e),
  [cr]: (e) => Sr(e) || Vt(e) || ze(e),
  [lr]: (e) => Sr(e) || Vt(e) || ze(e)
}, Tf = "ElSwitch", TT = ie({
  name: Tf
}), ST = /* @__PURE__ */ ie({
  ...TT,
  props: wT,
  emits: kT,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = os(), a = na(), s = kt("switch"), { inputId: i } = Rl(r, {
      formItemContext: o
    }), l = Nl(P(() => r.loading)), u = G(r.modelValue !== !1), d = G(), p = G(), m = P(() => [
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
    Ce(() => r.modelValue, () => {
      u.value = !0;
    });
    const E = P(() => u.value ? r.modelValue : !1), f = P(() => E.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(E.value) || (n(Ot, r.inactiveValue), n(cr, r.inactiveValue), n(lr, r.inactiveValue)), Ce(f, (w) => {
      var T;
      d.value.checked = w, r.validateEvent && ((T = o?.validate) == null || T.call(o, "change").catch((x) => void 0));
    });
    const I = () => {
      const w = f.value ? r.inactiveValue : r.activeValue;
      n(Ot, w), n(cr, w), n(lr, w), mt(() => {
        d.value.checked = f.value;
      });
    }, R = () => {
      if (l.value)
        return;
      const { beforeChange: w } = r;
      if (!w) {
        I();
        return;
      }
      const T = w();
      [
        rc(T),
        Sr(T)
      ].includes(!0) || Cl(Tf, "beforeChange must return type `Promise<boolean>` or `boolean`"), rc(T) ? T.then((Y) => {
        Y && I();
      }).catch((Y) => {
      }) : T && I();
    }, C = () => {
      var w, T;
      (T = (w = d.value) == null ? void 0 : w.focus) == null || T.call(w);
    };
    return vt(() => {
      d.value.checked = f.value;
    }), t({
      focus: C,
      checked: f
    }), (w, T) => (N(), H("div", {
      class: q(c(m)),
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
        onChange: I,
        onKeydown: bn(R, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !w.inlinePrompt && (w.inactiveIcon || w.inactiveText) ? (N(), H("span", {
        key: 0,
        class: q(c(y))
      }, [
        w.inactiveIcon ? (N(), me(c(yt), { key: 0 }, {
          default: fe(() => [
            (N(), me(Wt(w.inactiveIcon)))
          ]),
          _: 1
        })) : te("v-if", !0),
        !w.inactiveIcon && w.inactiveText ? (N(), H("span", {
          key: 1,
          "aria-hidden": c(f)
        }, D(w.inactiveText), 9, ["aria-hidden"])) : te("v-if", !0)
      ], 2)) : te("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: q(c(s).e("core")),
        style: Rt(c(v))
      }, [
        w.inlinePrompt ? (N(), H("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          w.activeIcon || w.inactiveIcon ? (N(), me(c(yt), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: fe(() => [
              (N(), me(Wt(c(f) ? w.activeIcon : w.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : w.activeText || w.inactiveText ? (N(), H("span", {
            key: 1,
            class: q(c(s).is("text")),
            "aria-hidden": !c(f)
          }, D(c(f) ? w.activeText : w.inactiveText), 11, ["aria-hidden"])) : te("v-if", !0)
        ], 2)) : te("v-if", !0),
        b("div", {
          class: q(c(s).e("action"))
        }, [
          w.loading ? (N(), me(c(yt), {
            key: 0,
            class: q(c(s).is("loading"))
          }, {
            default: fe(() => [
              M(c(Hd))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? Ee(w.$slots, "active-action", { key: 1 }, () => [
            w.activeActionIcon ? (N(), me(c(yt), { key: 0 }, {
              default: fe(() => [
                (N(), me(Wt(w.activeActionIcon)))
              ]),
              _: 1
            })) : te("v-if", !0)
          ]) : c(f) ? te("v-if", !0) : Ee(w.$slots, "inactive-action", { key: 2 }, () => [
            w.inactiveActionIcon ? (N(), me(c(yt), { key: 0 }, {
              default: fe(() => [
                (N(), me(Wt(w.inactiveActionIcon)))
              ]),
              _: 1
            })) : te("v-if", !0)
          ])
        ], 2)
      ], 6),
      !w.inlinePrompt && (w.activeIcon || w.activeText) ? (N(), H("span", {
        key: 1,
        class: q(c(g))
      }, [
        w.activeIcon ? (N(), me(c(yt), { key: 0 }, {
          default: fe(() => [
            (N(), me(Wt(w.activeIcon)))
          ]),
          _: 1
        })) : te("v-if", !0),
        !w.activeIcon && w.activeText ? (N(), H("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, D(w.activeText), 9, ["aria-hidden"])) : te("v-if", !0)
      ], 2)) : te("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var ET = /* @__PURE__ */ rt(ST, [["__file", "switch.vue"]]);
const AT = Sn(ET), Sf = ["success", "info", "warning", "error"], zt = Kd({
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
  appendTo: _t ? document.body : void 0
}), CT = Je({
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
    type: Dn,
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
}), IT = {
  destroy: () => !0
}, _n = Zf([]), LT = (e) => {
  const t = _n.findIndex((o) => o.id === e), n = _n[t];
  let r;
  return t > 0 && (r = _n[t - 1]), { current: n, prev: r };
}, OT = (e) => {
  const { prev: t } = LT(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, xT = (e, t) => _n.findIndex((r) => r.id === e) > 0 ? 16 : t, RT = ie({
  name: "ElMessage"
}), NT = /* @__PURE__ */ ie({
  ...RT,
  props: CT,
  emits: IT,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Dy, { ns: o, zIndex: a } = zd("message"), { currentZIndex: s, nextZIndex: i } = a, l = G(), u = G(!1), d = G(0);
    let p;
    const m = P(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = P(() => {
      const x = n.type;
      return { [o.bm("icon", x)]: x && za[x] };
    }), g = P(() => n.icon || za[n.type] || ""), v = P(() => OT(n.id)), E = P(() => xT(n.id, n.offset) + v.value), f = P(() => d.value + E.value), I = P(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function R() {
      n.duration !== 0 && ({ stop: p } = Id(() => {
        w();
      }, n.duration));
    }
    function C() {
      p?.();
    }
    function w() {
      u.value = !1;
    }
    function T({ code: x }) {
      x === zn.esc && w();
    }
    return vt(() => {
      R(), i(), u.value = !0;
    }), Ce(() => n.repeatNum, () => {
      C(), R();
    }), kn(document, "keydown", T), Pn(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: w
    }), (x, Y) => (N(), me(wo, {
      name: c(o).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (Z) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: fe(() => [
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
          style: Rt(c(I)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: R
        }, [
          x.repeatNum > 1 ? (N(), me(c(Bk), {
            key: 0,
            value: x.repeatNum,
            type: c(m),
            class: q(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : te("v-if", !0),
          c(g) ? (N(), me(c(yt), {
            key: 1,
            class: q([c(o).e("icon"), c(y)])
          }, {
            default: fe(() => [
              (N(), me(Wt(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          Ee(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (N(), H(pt, { key: 1 }, [
              te(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: q(c(o).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (N(), H("p", {
              key: 0,
              class: q(c(o).e("content"))
            }, D(x.message), 3))
          ]),
          x.showClose ? (N(), me(c(yt), {
            key: 2,
            class: q(c(o).e("closeBtn")),
            onClick: nt(w, ["stop"])
          }, {
            default: fe(() => [
              M(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : te("v-if", !0)
        ], 46, ["id"]), [
          [ir, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var PT = /* @__PURE__ */ rt(NT, [["__file", "message.vue"]]);
let $T = 1;
const Ef = (e) => {
  const t = !e || Vt(e) || Uo(e) || lt(e) ? { message: e } : e, n = {
    ...zt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Vt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    wn(r) || (r = document.body), n.appendTo = r;
  }
  return Sr(mn.grouping) && !n.grouping && (n.grouping = mn.grouping), ze(mn.duration) && n.duration === 3e3 && (n.duration = mn.duration), ze(mn.offset) && n.offset === 16 && (n.offset = mn.offset), Sr(mn.showClose) && !n.showClose && (n.showClose = mn.showClose), n;
}, MT = (e) => {
  const t = _n.indexOf(e);
  if (t === -1)
    return;
  _n.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, DT = ({ appendTo: e, ...t }, n) => {
  const r = `message_${$T++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), MT(d);
    },
    onDestroy: () => {
      Ia(null, a);
    }
  }, i = M(PT, s, lt(s.message) || Uo(s.message) ? {
    default: lt(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || yo._context, Ia(i, a), e.appendChild(a.firstElementChild);
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
  if (!_t)
    return { close: () => {
    } };
  const n = Ef(e);
  if (n.grouping && _n.length) {
    const o = _n.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ze(mn.max) && _n.length >= mn.max)
    return { close: () => {
    } };
  const r = DT(n, t);
  return _n.push(r), r.handler;
};
Sf.forEach((e) => {
  yo[e] = (t = {}, n) => {
    const r = Ef(t);
    return yo({ ...r, type: e }, n);
  };
});
function FT(e) {
  for (const t of _n)
    (!e || e === t.props.type) && t.handler.close();
}
yo.closeAll = FT;
yo._context = null;
const zT = Vd(yo, "$message"), Af = [
  "success",
  "info",
  "warning",
  "error"
], BT = Je({
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
    values: [...Af, ""],
    default: ""
  },
  zIndex: Number
}), VT = {
  destroy: () => !0
}, jT = ie({
  name: "ElNotification"
}), UT = /* @__PURE__ */ ie({
  ...jT,
  props: BT,
  emits: VT,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = zd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = My, l = G(!1);
    let u;
    const d = P(() => {
      const R = n.type;
      return R && za[n.type] ? r.m(R) : "";
    }), p = P(() => n.type && za[n.type] || n.icon), m = P(() => n.position.endsWith("right") ? "right" : "left"), y = P(() => n.position.startsWith("top") ? "top" : "bottom"), g = P(() => {
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
    function E() {
      u?.();
    }
    function f() {
      l.value = !1;
    }
    function I({ code: R }) {
      R === zn.delete || R === zn.backspace ? E() : R === zn.esc ? l.value && f() : v();
    }
    return vt(() => {
      v(), a(), l.value = !0;
    }), kn(document, "keydown", I), t({
      visible: l,
      close: f
    }), (R, C) => (N(), me(wo, {
      name: c(r).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (w) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: fe(() => [
        At(b("div", {
          id: R.id,
          class: q([c(r).b(), R.customClass, c(m)]),
          style: Rt(c(g)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: v,
          onClick: R.onClick
        }, [
          c(p) ? (N(), me(c(yt), {
            key: 0,
            class: q([c(r).e("icon"), c(d)])
          }, {
            default: fe(() => [
              (N(), me(Wt(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          b("div", {
            class: q(c(r).e("group"))
          }, [
            b("h2", {
              class: q(c(r).e("title")),
              textContent: D(R.title)
            }, null, 10, ["textContent"]),
            At(b("div", {
              class: q(c(r).e("content")),
              style: Rt(R.title ? void 0 : { margin: 0 })
            }, [
              Ee(R.$slots, "default", {}, () => [
                R.dangerouslyUseHTMLString ? (N(), H(pt, { key: 1 }, [
                  te(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: R.message }, null, 8, ["innerHTML"])
                ], 2112)) : (N(), H("p", { key: 0 }, D(R.message), 1))
              ])
            ], 6), [
              [ir, R.message]
            ]),
            R.showClose ? (N(), me(c(yt), {
              key: 0,
              class: q(c(r).e("closeBtn")),
              onClick: nt(f, ["stop"])
            }, {
              default: fe(() => [
                M(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : te("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ir, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var HT = /* @__PURE__ */ rt(UT, [["__file", "notification.vue"]]);
const ja = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Qs = 16;
let WT = 1;
const _o = function(e = {}, t) {
  if (!_t)
    return { close: () => {
    } };
  (Vt(e) || Uo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  ja[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Qs;
  }), r += Qs;
  const o = `notification_${WT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      GT(o, n, a);
    }
  };
  let i = document.body;
  wn(e.appendTo) ? i = e.appendTo : Vt(e.appendTo) && (i = document.querySelector(e.appendTo)), wn(i) || (i = document.body);
  const l = document.createElement("div"), u = M(HT, s, lt(s.message) ? s.message : Uo(s.message) ? () => s.message : null);
  return u.appContext = Mn(t) ? _o._context : t, u.props.onDestroy = () => {
    Ia(null, l);
  }, Ia(u, l), ja[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Af.forEach((e) => {
  _o[e] = (t = {}, n) => ((Vt(t) || Uo(t)) && (t = {
    message: t
  }), _o({ ...t, type: e }, n));
});
function GT(e, t, n) {
  const r = ja[t], o = r.findIndex(({ vm: u }) => {
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
function KT() {
  for (const e of Object.values(ja))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
_o.closeAll = KT;
_o._context = null;
const qT = Vd(_o, "$notify"), at = {
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
    r === "center" ? zT({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : qT({
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
}, YT = "snippets-code:developer-mode", Cf = "snippets-code:frontend-diagnostics", ZT = 240, Po = "[REDACTED]", Ca = (e) => e.replace(
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
}, XT = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, QT = () => {
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
    return localStorage.getItem(YT) === "true";
  } catch {
    return !1;
  }
}, JT = (e, t, n) => {
  if (!Yl() || typeof localStorage > "u") return;
  const r = QT();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: XT(),
    message: Ca(t),
    data: If(n)
  });
  try {
    localStorage.setItem(
      Cf,
      JSON.stringify(r.slice(-ZT))
    );
  } catch {
  }
}, eS = () => Yl(), tS = (e) => e === "warn" || e === "error" || !1 || !1 || Yl(), _a = (e, t, n) => {
  JT(e, t, n), tS(e) && Pt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : If(n)
  }).catch(() => {
  });
}, hn = {
  info: (e, t, ...n) => {
    _a("info", e, t);
  },
  error: (e, t) => {
    _a("error", e, t);
  },
  warn: (e, t) => {
    _a("warn", e, t);
  },
  debug: (e, t) => {
    eS() && _a("debug", e, t);
  }
}, nS = { class: "sidebar-header" }, rS = { class: "sidebar-title-block" }, oS = ["title", "aria-pressed"], aS = { class: "sidebar-nav" }, sS = { class: "sidebar-nav-item sidebar-nav-item--search" }, lS = ["placeholder"], iS = { class: "sidebar-section recent-section" }, cS = { class: "section-title-row" }, uS = { class: "section-title" }, dS = ["title"], fS = {
  key: 0,
  class: "chat-list"
}, pS = ["onClick", "onKeydown"], mS = { class: "chat-item-title" }, hS = { class: "chat-item-time" }, gS = ["title", "onClick"], vS = {
  key: 1,
  class: "sidebar-empty"
}, bS = { class: "sidebar-service" }, yS = { class: "sidebar-service-row" }, _S = { class: "chat-panel" }, wS = ["title"], kS = {
  key: 0,
  class: "empty-state"
}, TS = { class: "empty-title" }, SS = { class: "empty-desc" }, ES = {
  key: 0,
  class: "date-divider"
}, AS = { class: "message-avatar" }, CS = { key: 1 }, IS = { class: "message-body" }, LS = { class: "user-bubble" }, OS = {
  key: 0,
  class: "user-message-text"
}, xS = {
  key: 1,
  class: "message-attachment-list"
}, RS = ["title"], NS = ["src", "alt"], PS = {
  key: 1,
  class: "attachment-file-icon"
}, $S = { key: 2 }, MS = {
  key: 0,
  class: "message-actions"
}, DS = ["title", "onClick"], FS = ["title", "onClick"], zS = ["title", "onClick"], BS = { class: "assistant-head" }, VS = { key: 0 }, jS = {
  key: 0,
  class: "assistant-content-stack"
}, US = ["open"], HS = { class: "reasoning-summary-title" }, WS = { key: 0 }, GS = ["innerHTML"], KS = ["innerHTML"], qS = {
  key: 1,
  class: "message-content loading-text"
}, YS = {
  key: 0,
  class: "message-stats"
}, ZS = { class: "message-stats__context" }, XS = { class: "message-stats__output" }, QS = { class: "message-stats__elapsed" }, JS = { class: "message-stats__speed" }, e2 = {
  key: 0,
  class: "message-stats-time"
}, t2 = {
  key: 1,
  class: "message-warning"
}, n2 = {
  key: 2,
  class: "message-actions"
}, r2 = ["title", "aria-label"], o2 = ["disabled", "title", "onClick"], a2 = ["disabled", "title", "onClick"], s2 = ["title", "onClick"], l2 = ["title", "onClick"], i2 = ["title", "onClick"], c2 = ["title", "onClick"], u2 = ["title", "onClick"], d2 = ["title"], f2 = {
  key: 0,
  class: "attachment-preview-list"
}, p2 = ["src", "alt"], m2 = {
  key: 1,
  class: "attachment-file-icon"
}, h2 = { class: "attachment-meta" }, g2 = ["title", "onClick"], v2 = ["placeholder"], b2 = { class: "input-toolbar" }, y2 = { class: "input-toolbar-left" }, _2 = ["title"], w2 = { class: "model-select-shell" }, k2 = ["disabled"], T2 = ["value"], S2 = {
  key: 0,
  value: ""
}, E2 = ["title", "aria-pressed"], A2 = { class: "input-toolbar-right" }, C2 = ["title", "aria-label"], I2 = ["disabled", "title", "aria-label"], L2 = 96, O2 = 4096, Cs = 160, x2 = 120, R2 = 480, N2 = 64, P2 = 1e3, $2 = /* @__PURE__ */ ie({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = G(""), r = G([]), o = G(""), a = G(!1), s = G(""), i = G([]), l = G(!1), u = G(!1), d = G(!1), p = G(!1), m = G(!1), y = G(!0), g = G(!1), v = G(null), E = G(null), f = G(null), I = G(""), R = G(null), C = G(null), w = G(null), T = G(Date.now());
    let x = null, Y = null, Z = null, ae = !1;
    const he = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), be = (h) => `${Date.now()}-${h}-${Math.random().toString(16).slice(2, 8)}`, B = (h) => h.type === "root", Q = (h) => new Map(h.map((L) => [L.id, L])), U = (h) => h.find(B), pe = (h, L) => {
      if (!L) return null;
      const A = Q(h);
      let z = A.get(L);
      const W = /* @__PURE__ */ new Set();
      for (; z?.childIds?.length && !W.has(z.id); )
        W.add(z.id), z = A.get(z.childIds[z.childIds.length - 1]);
      return z?.id ?? null;
    }, X = (h, L) => {
      if (h.some(B)) {
        const J = h.map((we) => ({
          ...we,
          type: we.type ?? "text",
          parentId: we.parentId ?? null,
          childIds: we.childIds ?? []
        })), _e = U(J);
        return {
          messages: J,
          currentNodeId: pe(J, J.at(-1)?.id) ?? _e?.id ?? null
        };
      }
      const A = {
        id: be("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: L,
        parentId: null,
        childIds: []
      }, z = [A];
      let W = A.id;
      for (const J of h) {
        const _e = {
          ...J,
          role: J.role === "system" ? "assistant" : J.role,
          type: "text",
          parentId: W,
          childIds: []
        };
        z.find((Re) => Re.id === W)?.childIds?.push(_e.id), z.push(_e), W = _e.id;
      }
      return { messages: z, currentNodeId: W };
    }, K = (h, L) => {
      if (!L) return [];
      const A = Q(h), z = [], W = /* @__PURE__ */ new Set();
      let J = A.get(L);
      for (; J && !W.has(J.id); )
        W.add(J.id), z.unshift(J), J = J.parentId ? A.get(J.parentId) : void 0;
      return z;
    }, Ne = (h) => {
      if (!h) return [];
      const L = h.currentNodeId ?? pe(h.messages, U(h.messages)?.id);
      return K(h.messages, L).filter(
        (A) => !B(A)
      );
    }, Ue = (h) => {
      if (!h) return [];
      const L = Q(h.messages), A = (z) => pe(h.messages, z) ?? z;
      return Ne(h).map((z) => {
        const J = (z.parentId ? L.get(z.parentId) : void 0)?.childIds ?? [z.id];
        return {
          message: z,
          siblingLeafNodeIds: J.map(A),
          siblingCurrentIndex: Math.max(0, J.indexOf(z.id))
        };
      });
    }, ve = (h, L) => {
      const A = U(h.messages), z = L.parentId ?? h.currentNodeId ?? A?.id ?? null, W = {
        ...L,
        type: "text",
        parentId: z,
        childIds: []
      };
      if (h.messages.push(W), z) {
        const J = h.messages.find((_e) => _e.id === z);
        J && (J.childIds = [...J.childIds ?? [], W.id]);
      }
      return h.currentNodeId = W.id, W;
    }, ye = P(
      () => (!!s.value.trim() || i.value.length > 0) && !l.value
    ), ne = P(() => R.value?.healthy ? t("localAi.serviceHealthy") : R.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), se = P(
      () => r.value.find((h) => h.id === o.value) ?? null
    ), Ke = P(() => Ne(se.value)), ge = P(() => Ue(se.value)), et = (h) => h ? h.split(/[\\/]+/).pop() ?? h : "", ut = P(
      () => et(I.value) || et(R.value?.modelPath) || et(E.value?.modelPath) || t("localAi.localModel")
    ), Ye = P(() => f.value?.mainModels ?? []), $t = P(() => !!E.value?.mmprojPath), ot = P(
      () => E.value?.ctxSize ?? R.value?.ctxSize ?? 4096
    ), Ct = P(() => {
      const h = ot.value, L = E.value?.maxTokens ?? 0;
      return L > 0 ? Math.min(
        Math.max(L, 512),
        Math.max(512, h - 512)
      ) : Math.min(
        Math.max(O2, Math.floor(h * 0.5)),
        Math.max(512, h - 512)
      );
    }), It = P(
      () => Math.max(512, ot.value - Ct.value)
    ), qe = P(() => {
      const h = ut.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(h);
    }), Tt = P(() => {
      const h = n.value.trim().toLowerCase();
      return r.value.filter(
        (L) => !h || L.title.toLowerCase().includes(h) || L.messages.some(
          (A) => !B(A) && A.content.toLowerCase().includes(h)
        )
      ).slice().sort((L, A) => A.updatedAt.localeCompare(L.updatedAt));
    }), k = () => t("localAi.now"), O = () => {
      const h = (/* @__PURE__ */ new Date()).toISOString(), L = {
        id: be("root"),
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
        updatedAtLabel: k(),
        currentNodeId: L.id,
        messages: [L]
      };
    }, V = () => {
      const h = C.value;
      return h ? h.scrollHeight - h.scrollTop - h.clientHeight <= L2 : !0;
    }, re = () => {
      const h = V();
      y.value = h, g.value = !h;
    }, Oe = () => {
      re();
    }, ue = async (h = {}) => {
      await mt(), !(!C.value || !h.force && !y.value) && (ae = ae || h.force === !0, Z === null && (Z = window.requestAnimationFrame(() => {
        Z = null;
        const A = C.value, z = ae;
        if (ae = !1, !A || !z && !y.value) return;
        const W = Math.max(0, A.scrollHeight - A.clientHeight);
        Math.abs(A.scrollTop - W) > 1 && (A.scrollTop = W), re();
      })));
    }, S = () => {
      y.value = !0, ue({ force: !0 });
    }, F = async () => {
      try {
        E.value = await nd(), I.value = E.value.modelPath ?? "", f.value = await rd(E.value), qe.value || (p.value = !1);
      } catch (h) {
        hn.warn("[LocalAI] refresh chat config failed", h);
      }
    }, ke = async () => {
      u.value = !0;
      try {
        R.value = await od();
      } catch (h) {
        hn.warn("[LocalAI] refresh chat status failed", h);
      } finally {
        u.value = !1;
      }
    }, xe = async () => {
      try {
        const h = await Mh();
        r.value = h.map((L) => {
          const A = L.messages?.length ? L.messages : L.turns.map((W) => ({
            id: W.id,
            role: W.role,
            content: W.content,
            createdAt: W.createdAt
          })), z = X(
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
        hn.warn("[LocalAI] refresh histories failed", h);
      }
    }, Xe = async () => {
      await Promise.all([F(), ke(), xe()]);
    }, dt = async () => {
      const h = se.value;
      if (!h) return;
      const L = Ne(h).map((A) => ({
        id: A.id,
        role: A.role,
        content: A.content,
        createdAt: A.createdAt
      }));
      await Dh({
        id: h.id,
        title: h.title,
        createdAt: h.createdAt,
        updatedAt: h.updatedAt,
        turns: L,
        currentNodeId: h.currentNodeId,
        messages: h.messages
      });
    }, Ze = () => {
      const h = O();
      r.value.unshift(h), o.value = h.id, s.value = "";
    }, Gn = () => {
      se.value || Ze();
    }, pr = (h) => {
      o.value = h;
      const L = se.value;
      L && !L.currentNodeId && (L.currentNodeId = pe(L.messages, U(L.messages)?.id) ?? null), y.value = !0, ue({ force: !0 });
    }, Kr = async (h) => {
      r.value = r.value.filter((L) => L.id !== h), await Fh(h), o.value === h && (o.value = r.value[0]?.id ?? "");
    }, mr = () => {
      w.value?.click();
    }, En = (h, L) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: h.name,
      type: L,
      mime: h.type || "application/octet-stream",
      size: h.size,
      status: "pending"
    }), Kn = async (h) => {
      if (hs(h)) {
        const A = En(h, "image");
        if (h.size > Wh)
          return {
            ...A,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...A,
            status: "parsed",
            dataUrl: await qh(h)
          };
        } catch (z) {
          return { ...A, status: "error", error: String(z) };
        }
      }
      if (ji(h)) {
        const A = En(h, "text");
        if (h.size > Hh)
          return {
            ...A,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const z = await Yh(h);
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
        ...En(h, "unsupported"),
        status: "error",
        error: Kh(h) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, tn = async (h) => {
      const L = Array.from(h), A = Uh - i.value.length;
      if (A <= 0) {
        at.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      L.length > A && at.msg(t("localAi.attachmentLimit"), "warning");
      const z = L.slice(0, A), W = z.map(
        (J) => En(
          J,
          hs(J) ? "image" : ji(J) ? "text" : "unsupported"
        )
      );
      i.value.push(...W), await Promise.all(
        z.map(async (J, _e) => {
          const we = await Kn(J), Re = i.value.findIndex(
            (it) => it.id === W[_e].id
          );
          Re >= 0 && (i.value[Re] = we);
        })
      );
    }, Yt = async (h) => {
      const L = h.target;
      L.files?.length && await tn(L.files), L.value = "";
    }, An = async (h) => {
      h.dataTransfer?.files.length && await tn(h.dataTransfer.files);
    }, Lr = async (h) => {
      const L = Array.from(h.clipboardData?.files ?? []);
      if (!L.length) return;
      const A = L.filter(hs);
      A.length && (h.preventDefault(), await tn(A));
    }, Or = (h) => {
      i.value = i.value.filter(
        (L) => L.id !== h
      );
    }, hr = (h) => h.status === "pending" ? t("localAi.attachmentPending") : h.status === "error" ? h.error ?? "" : h.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), xr = async () => {
      if (!(!E.value || !I.value)) {
        E.value.modelPath = I.value;
        try {
          E.value = await Sa(E.value), R.value?.running && (R.value = await ad()), at.msg(t("localAi.modelChanged"));
        } catch (h) {
          at.msg(`${t("localAi.configSaveFailed")}: ${h}`, "error");
        }
      }
    }, Rr = (h) => {
      let L = 0;
      for (let A = 0; A < h.length; A += 1)
        L = L * 31 + h.charCodeAt(A) >>> 0;
      return `code-${h.length}-${L.toString(16)}`;
    }, To = (h) => h.includes("<pre>") ? h.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (L, A, z) => {
        const W = document.createElement("textarea");
        W.innerHTML = z;
        const J = W.value, _e = Rr(J);
        le.set(_e, J);
        const we = A ? ` class="${A}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${_e}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${we}>${z}</code></pre></div>`;
      }
    ) : h, Cn = (h) => {
      const L = he.get(h);
      if (L) return L;
      const A = To(
        Lg(Ve.parse(h, { async: !1 }))
      );
      if (he.set(h, A), he.size > 80) {
        const z = he.keys().next().value;
        typeof z == "string" && he.delete(z);
      }
      return A;
    }, Nr = async (h) => {
      const z = h.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!z) return;
      const W = le.get(z);
      if (W)
        try {
          await navigator.clipboard.writeText(W), at.msg(t("localAi.codeCopied"));
        } catch (J) {
          at.msg(`${t("common.copy")}: ${J}`, "error");
        }
    }, Pr = (h) => {
      const L = h.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!L || L.index === void 0)
        return { reasoning: "", answer: h };
      const A = h.slice(0, L.index).trim(), z = L[0], W = h.slice(L.index + z.length).trim();
      return {
        reasoning: (L[1] ?? "").trim(),
        answer: [A, W].filter(Boolean).join(`

`)
      };
    }, He = (h) => Pr(h).reasoning, pn = (h) => Pr(h).answer, qr = (h, L) => {
      const { reasoning: A, answer: z } = Pr(h.content);
      if (!h.streaming)
        return Te.delete(h.id), L === "reasoning" ? A : z;
      const W = Date.now(), J = Te.get(h.id);
      if (!J || W - J.updatedAt >= x2 || h.content.length - J.source.length >= R2 || !J.reasoning && !!A || !J.answer && !!z) {
        const we = {
          source: h.content,
          reasoning: A,
          answer: z,
          updatedAt: W
        };
        return Te.set(h.id, we), L === "reasoning" ? A : z;
      }
      return L === "reasoning" ? J.reasoning : J.answer;
    }, Yr = (h) => !!pn(h.content), In = (h) => !!(h.streaming && h.allowThinking && h.reasoningStartedAt && !h.reasoningEndedAt && !Yr(h)), Zr = (h) => {
      if (!h.reasoningStartedAt) return "0.00";
      const L = h.reasoningEndedAt ?? (h.streaming ? T.value : Date.now());
      return Math.max(0, (L - h.reasoningStartedAt) / 1e3).toFixed(2);
    }, Xr = (h) => !h.reasoningStartedAt && h.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Zr(h)
    }), sn = (h) => new Date(
      h.createdAt || se.value?.updatedAt || Date.now()
    ), Mt = (h) => sn(h).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), $ = (h, L) => sn(h).toDateString() === sn(L).toDateString(), ee = (h) => sn(h).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Ae = (h) => {
      const L = ge.value[h]?.message;
      if (!L) return !1;
      if (h === 0) return !ee(L);
      const A = ge.value[h - 1]?.message;
      return A ? $(A, L) ? sn(L).getTime() - sn(A).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, tt = (h) => {
      const L = sn(h), A = L.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), z = L.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return ee(h) ? z : `${A} ${z}`;
    }, bt = (h) => h.streaming ? In(h) ? t("localAi.thinking") : t("localAi.generating") : Mt(h), Zt = (h) => h.allowThinking && !h.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), jt = (h, L) => {
      h.allowThinking && (L.includes("<think>") && !h.reasoningStartedAt && (h.reasoningStartedAt = Date.now()), L.includes("</think>") && !h.reasoningEndedAt && (h.reasoningEndedAt = Date.now()));
    }, St = (h) => {
      const L = h.trim();
      if (!L) return 0;
      const A = (L.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, J = (L.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((_e, we) => /^[A-Za-z0-9_]+$/.test(we) ? _e + Math.max(1, Math.ceil(we.length / 4)) : _e + 1, 0);
      return Math.max(1, Math.ceil(A + J));
    }, Ln = (h) => Array.isArray(h) ? h.filter((L) => L.type === "text").map((L) => L.text).join(`
`) : h, Qr = (h) => {
      const L = h.attachments?.filter(
        (J) => J.status === "parsed"
      ) ?? [], A = Zh(
        h.content,
        L
      ), z = L.filter(
        (J) => J.type === "image" && J.dataUrl
      );
      if (!z.length) return A;
      const W = [{ type: "text", text: A }];
      for (const J of z)
        W.push({
          type: "image_url",
          image_url: {
            url: J.dataUrl ?? ""
          }
        });
      return W;
    }, qn = (h) => St(
      h.map((L) => {
        const A = Ln(L.content);
        return `${L.role}: ${A}`;
      }).join(`
`)
    ), So = (h, L) => {
      const A = Math.max(240, L * 4);
      return h.length <= A ? h : `${t("localAi.previousAnswerTail")}

${h.slice(-A)}`;
    }, aa = (h, L) => {
      const A = [];
      let z = 0;
      for (let W = h.length - 1; W >= 0; W -= 1) {
        const J = h[W], _e = qn([J]);
        if (z + _e <= L || A.length === 0) {
          A.unshift(J), z += _e;
          continue;
        }
        const we = L - z;
        if (J.role !== "assistant" || typeof J.content != "string" || we < Cs)
          continue;
        let Re = we, it = {
          ...J,
          content: So(J.content, Re)
        }, Dt = qn([it]);
        for (; Dt > we && Re > Cs; )
          Re = Math.max(
            Cs,
            Math.floor(Re * 0.7)
          ), it = {
            ...J,
            content: So(J.content, Re)
          }, Dt = qn([it]);
        z + Dt <= L && (A.unshift(it), z += Dt);
      }
      return A;
    }, gr = () => aa(
      Ke.value.filter((h) => !h.streaming && h.role !== "system").map((h) => ({
        role: h.role,
        content: h.role === "user" ? Qr(h) : h.content
      })),
      It.value
    ), vr = (h) => {
      const L = E.value?.maxTokens ?? 0;
      if (L > 0) return L;
      const A = qn(h);
      return Math.max(256, ot.value - A - 128);
    }, ce = (h) => Math.max(
      1,
      h.stats?.ctxSize ?? h.contextSize ?? E.value?.ctxSize ?? R.value?.ctxSize ?? 4096
    ), _ = (h) => {
      const L = T.value, A = Ke.value.findIndex(
        (it) => it.id === h.id
      ), z = h.stats?.promptTokens ?? h.promptTokens ?? St(
        Ke.value.slice(0, Math.max(0, A)).map((it) => it.content).join(`
`)
      ), W = h.stats?.completionTokens ?? St(h.content), J = ce(h), _e = Math.min(z, J), we = Math.max(
        0,
        (h.stats?.generationTimeMs ?? h.elapsedMs ?? L - sn(h).getTime()) / 1e3
      ), Re = h.stats?.tokensPerSecond ?? (we > 0 ? W / we : 0);
      return {
        context: _e,
        contextMax: J,
        contextPercent: Math.min(100, Math.round(_e / J * 100)),
        output: W,
        outputMax: (E.value?.maxTokens ?? 0) > 0 ? String(E.value?.maxTokens) : "∞",
        seconds: we.toFixed(1),
        speed: Re.toFixed(1)
      };
    }, j = (h) => h.repetitionStopped ? t("localAi.repetitionStopped") : h.interrupted ? t("localAi.streamInterrupted") : h.stopped ? t("localAi.generationStopped") : (h.stats?.totalTokens ?? (h.promptTokens ?? 0) + (h.stats?.completionTokens ?? St(h.content))) >= ce(h) - 8 ? t("localAi.contextLimitReached") : h.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", oe = (h) => {
      const L = String(h);
      return /exceeds the available context size|exceed_context_size/i.test(L) ? t("localAi.contextExceeded") : L;
    }, Pe = (h) => {
      const L = h.replace(/\s+/g, " ").trim();
      if (L.length < 900) return !1;
      const z = L.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((we) => we.toLowerCase()) ?? [];
      if (z.length < 140) return !1;
      const W = z.slice(-120), J = /* @__PURE__ */ new Map();
      for (const we of W) J.set(we, (J.get(we) ?? 0) + 1);
      if (J.size / W.length < 0.12 && [...J.values()].some((we) => we >= 56))
        return !0;
      for (let we = 1; we <= 4; we += 1) {
        const Re = z.slice(-we).join("\0");
        let it = 1;
        for (let Dt = z.length - we * 2; Dt >= 0 && z.slice(Dt, Dt + we).join("\0") === Re; Dt -= we)
          it += 1;
        if (it >= Math.max(24, Math.ceil(72 / we))) return !0;
      }
      return !1;
    }, Le = () => {
      Y || (T.value = Date.now(), Y = setInterval(() => {
        T.value = Date.now();
      }, P2));
    }, Be = () => {
      Y && (clearInterval(Y), Y = null, T.value = Date.now());
    }, Ut = async (h) => {
      const L = performance.now(), A = sd(), z = gr();
      let W = "", J = null, _e = null, we = !1, Re = !1;
      v.value = A, d.value = !1, h.promptTokens = qn(z), h.contextSize = ot.value;
      const it = async () => {
        if (!W) {
          J = null, _e?.(), _e = null;
          return;
        }
        const Et = d.value ? 480 : W.length > 900 ? 180 : W.length > 240 ? 96 : 32;
        h.content += W.slice(0, Et), W = W.slice(Et), !Re && !d.value && Pe(h.content) && (Re = !0, d.value = !0, h.repetitionStopped = !0, ms(A).catch(
          (Ao) => hn.warn("[LocalAI] repetition stop failed", Ao)
        )), await ue(), J = window.setTimeout(() => {
          it().catch(
            (Ao) => hn.warn("[LocalAI] stream pump failed", Ao)
          );
        }, N2);
      }, Dt = (Et) => {
        Et && (jt(h, Et), W += Et, J === null && (J = window.setTimeout(() => {
          it().catch(
            (Ao) => hn.warn("[LocalAI] stream pump failed", Ao)
          );
        }, 32)));
      }, ia = async () => {
        !W && J === null || await new Promise((Et) => {
          _e = Et;
        });
      }, Jr = await $h(
        {
          messages: z,
          maxTokens: vr(z),
          enableThinking: h.allowThinking === !0
        },
        (Et) => {
          we = !0, Dt(Et);
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
        throw await ia(), Et;
      });
      if (!we)
        Dt(Jr.content);
      else if (!d.value) {
        const Et = h.content.length + W.length;
        Jr.content.length > Et && Dt(Jr.content.slice(Et));
      }
      await ia(), !d.value && Jr.content && h.content !== Jr.content && (h.content = Jr.content), h.streaming = !1, h.elapsedMs = performance.now() - L, h.stopped = d.value, h.interrupted = !1, h.error = "", T.value = Date.now(), v.value = null;
    }, ln = async () => {
      const h = v.value;
      if (!(!l.value || !h || d.value)) {
        d.value = !0;
        try {
          await ms(h);
        } catch (L) {
          hn.warn("[LocalAI] cancel stream failed", L);
        }
      }
    }, nn = (h) => {
      h.isComposing || h.keyCode === 229 || h.key === "Enter" && !h.shiftKey && (h.preventDefault(), ft());
    }, Eo = () => {
      if (!s.value.trim() && !i.value.length) return !1;
      if (i.value.find(
        (z) => z.status === "pending"
      ))
        return at.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const L = i.value.find(
        (z) => z.status === "error" || z.type === "unsupported"
      );
      return L ? (at.msg(
        `${t("localAi.attachmentErrorBlock")}: ${L.name}`,
        "warning"
      ), !1) : i.value.some(
        (z) => z.type === "image"
      ) && !$t.value ? (at.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, ft = async () => {
      const h = s.value.trim();
      if (l.value || !Eo()) return;
      Gn();
      const L = (/* @__PURE__ */ new Date()).toISOString(), A = i.value.map((Re) => ({
        ...Re
      })), z = h || A[0]?.name || "", W = se.value;
      if (!W) return;
      const J = ve(W, {
        id: be("user"),
        role: "user",
        content: h,
        createdAt: L,
        attachments: A
      }), _e = ve(W, {
        id: be("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: J.id,
        streaming: !0,
        allowThinking: p.value && qe.value,
        contextSize: ot.value,
        promptTokens: qn(gr())
      });
      s.value = "", i.value = [], l.value = !0, Le(), await ue({ force: !0 });
      const we = performance.now();
      try {
        await Ut(_e), se.value && (se.value.title = se.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : se.value.title, se.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), se.value.updatedAtLabel = new Date(
          se.value.updatedAt
        ).toLocaleString(), await dt()), await ke();
      } catch (Re) {
        if (!d.value) {
          s.value = h, i.value = A;
          const it = oe(Re);
          at.msg(`${t("localAi.chatFailed")}: ${it}`, "error"), _e.error = it, _e.interrupted = !!_e.content.trim(), _e.interrupted || (_e.content = it), se.value && (se.value.title = se.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : se.value.title, se.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), se.value.updatedAtLabel = new Date(
            se.value.updatedAt
          ).toLocaleString(), await dt());
        }
        _e.streaming = !1, _e.elapsedMs = performance.now() - we;
      } finally {
        l.value = !1, v.value = null, Be(), await ue();
      }
    }, sa = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, la = (h) => {
      const L = new Date(h), A = /* @__PURE__ */ new Date(), z = A.getTime() - L.getTime(), W = 24 * 60 * 60 * 1e3;
      return L.toDateString() === A.toDateString() ? L.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : z < W * 2 ? t("localAi.yesterday") : z < W * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(z / W))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(z / (W * 7)))
      });
    }, Xl = async (h) => {
      try {
        await navigator.clipboard.writeText(h.content), at.msg(t("localAi.copied"));
      } catch (L) {
        at.msg(`${t("common.operationFailed")}: ${L}`, "error");
      }
    }, Lf = (h, L) => {
      const A = Q(h), z = /* @__PURE__ */ new Set([L]), W = (J) => {
        const _e = A.get(J);
        for (const we of _e?.childIds ?? [])
          z.add(we), W(we);
      };
      return W(L), z;
    }, Ql = async (h) => {
      const L = se.value;
      if (!L) return;
      const A = L.messages.find((W) => W.id === h);
      if (!A || B(A)) return;
      const z = Lf(L.messages, h);
      L.messages = L.messages.filter((W) => !z.has(W.id)).map((W) => ({
        ...W,
        childIds: (W.childIds ?? []).filter((J) => !z.has(J))
      })), L.currentNodeId && z.has(L.currentNodeId) && (L.currentNodeId = pe(L.messages, A.parentId) ?? U(L.messages)?.id ?? null), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await dt();
    }, Jl = (h) => {
      s.value = h.content, se.value && h.parentId && (se.value.currentNodeId = h.parentId);
    }, ei = (h) => t("localAi.messageVersion", {
      current: h.siblingCurrentIndex + 1,
      total: h.siblingLeafNodeIds.length
    }), ti = (h, L) => {
      const A = se.value;
      if (!A) return;
      const z = h.siblingCurrentIndex + L, W = h.siblingLeafNodeIds[z];
      W && (A.currentNodeId = W, y.value = !0, ue({ force: !0 }));
    }, Of = async (h) => {
      const L = se.value;
      if (!L || l.value) return;
      const A = L.messages.find((Re) => Re.id === h);
      if (!A || A.role !== "assistant") return;
      const z = K(L.messages, A.id);
      if (!z.length) return;
      const W = (/* @__PURE__ */ new Date()).toISOString(), J = /* @__PURE__ */ new Map(), _e = z.map((Re, it) => {
        const Dt = be(it === 0 ? "root" : Re.role);
        return J.set(Re.id, Dt), {
          ...Re,
          id: Dt,
          parentId: Re.parentId ? J.get(Re.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Re.attachments?.map((ia) => ({ ...ia }))
        };
      });
      for (let Re = 0; Re < _e.length - 1; Re += 1)
        _e[Re].childIds = [_e[Re + 1].id];
      const we = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${L.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: W,
        updatedAt: W,
        updatedAtLabel: k(),
        currentNodeId: _e.at(-1)?.id ?? null,
        messages: _e
      };
      r.value.unshift(we), o.value = we.id, s.value = "", i.value = [], y.value = !0, await dt(), await ue({ force: !0 }), at.msg(t("localAi.branchCreated"));
    }, xf = async (h) => {
      const L = se.value;
      if (!L || l.value) return;
      const A = L.messages.find((J) => J.id === h);
      if (!A || A.role !== "assistant" || !A.parentId) return;
      L.currentNodeId = A.parentId;
      const z = ve(L, {
        id: be("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: A.parentId,
        streaming: !0,
        allowThinking: p.value && qe.value,
        promptTokens: qn(gr())
      });
      l.value = !0, Le(), await ue({ force: !0 });
      const W = performance.now();
      try {
        await Ut(z), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await dt();
      } catch (J) {
        if (!d.value) {
          const _e = oe(J);
          at.msg(`${t("localAi.chatFailed")}: ${_e}`, "error"), z.error = _e, z.interrupted = !!z.content.trim(), z.interrupted || (z.content = _e), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await dt();
        }
        z.streaming = !1, z.elapsedMs = performance.now() - W;
      } finally {
        l.value = !1, v.value = null, Be(), await ue();
      }
    };
    return vt(async () => {
      await Xe(), x = setInterval(() => {
        ke().catch(
          (h) => hn.warn("[LocalAI] status timer failed", h)
        );
      }, 8e3);
    }), Ce(qe, (h) => {
      h || (p.value = !1);
    }), Ua(() => {
      x && clearInterval(x), Z !== null && (window.cancelAnimationFrame(Z), Z = null), v.value && ms(v.value), Be();
    }), (h, L) => (N(), H(
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
            b("header", nS, [
              b("div", rS, [
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
                M(c(ai), {
                  theme: "outline",
                  size: "17"
                })
              ], 8, oS)
            ]),
            b("div", aS, [
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
              b("label", sS, [
                M(c(op), {
                  theme: "outline",
                  size: "18"
                }),
                At(b("input", {
                  "onUpdate:modelValue": L[1] || (L[1] = (A) => io(n) ? n.value = A : null),
                  placeholder: c(t)("localAi.searchHistory")
                }, null, 8, lS), [
                  [jo, c(n)]
                ])
              ])
            ]),
            b("section", iS, [
              b("div", cS, [
                b(
                  "div",
                  uS,
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
                ], 8, dS)
              ]),
              c(Tt).length ? (N(), H("div", fS, [
                (N(!0), H(
                  pt,
                  null,
                  Jn(c(Tt), (A) => (N(), H("div", {
                    key: A.id,
                    class: q([
                      "chat-list-item",
                      c(o) === A.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: (z) => pr(A.id),
                    onKeydown: bn(nt((z) => pr(A.id), ["prevent"]), ["enter"])
                  }, [
                    b(
                      "span",
                      mS,
                      D(A.title),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      hS,
                      D(la(A.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    b("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: nt((z) => Kr(A.id), ["stop"])
                    }, [
                      M(c(ca), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, gS)
                  ], 42, pS))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (N(), H(
                "div",
                vS,
                D(c(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            b("footer", bS, [
              b("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: sa
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
              b("div", yS, [
                b(
                  "span",
                  {
                    class: q([
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
                    rn(
                      " " + D(c(ne)),
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
        b("section", _S, [
          c(a) ? (N(), H("button", {
            key: 0,
            class: "panel-sidebar-toggle",
            type: "button",
            title: c(t)("localAi.expandSidebar"),
            onClick: L[2] || (L[2] = (A) => a.value = !1)
          }, [
            M(c(ai), {
              theme: "outline",
              size: "17"
            })
          ], 8, wS)) : te("v-if", !0),
          b(
            "div",
            {
              ref_key: "messageListRef",
              ref: C,
              class: "message-list",
              onScroll: Oe
            },
            [
              c(Ke).length ? te("v-if", !0) : (N(), H("div", kS, [
                M(c(li), {
                  theme: "outline",
                  size: "28"
                }),
                b(
                  "div",
                  TS,
                  D(c(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                b(
                  "div",
                  SS,
                  D(c(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (N(!0), H(
                pt,
                null,
                Jn(c(ge), (A, z) => (N(), H(
                  pt,
                  {
                    key: A.message.id
                  },
                  [
                    Ae(z) ? (N(), H("div", ES, [
                      b(
                        "span",
                        null,
                        D(tt(A.message)),
                        1
                        /* TEXT */
                      )
                    ])) : te("v-if", !0),
                    b(
                      "article",
                      {
                        class: q(["message-row", `message-row--${A.message.role}`])
                      },
                      [
                        b("div", AS, [
                          A.message.role === "assistant" ? (N(), me(c(li), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (N(), H(
                            "span",
                            CS,
                            D(c(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        b("div", IS, [
                          A.message.role === "user" ? (N(), H(
                            pt,
                            { key: 0 },
                            [
                              b("div", LS, [
                                A.message.content ? (N(), H(
                                  "div",
                                  OS,
                                  D(A.message.content),
                                  1
                                  /* TEXT */
                                )) : te("v-if", !0),
                                A.message.attachments?.length ? (N(), H("div", xS, [
                                  (N(!0), H(
                                    pt,
                                    null,
                                    Jn(A.message.attachments, (W) => (N(), H(
                                      "div",
                                      {
                                        key: W.id,
                                        class: q([
                                          "message-attachment-chip",
                                          W.type === "image" && W.dataUrl ? "message-attachment-chip--image" : ""
                                        ])
                                      },
                                      [
                                        W.type === "image" && W.dataUrl ? (N(), H("figure", {
                                          key: 0,
                                          title: W.name
                                        }, [
                                          b("img", {
                                            src: W.dataUrl,
                                            alt: W.name
                                          }, null, 8, NS)
                                        ], 8, RS)) : (N(), H(
                                          "span",
                                          PS,
                                          D(W.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        W.type === "image" && W.dataUrl ? te("v-if", !0) : (N(), H(
                                          "span",
                                          $S,
                                          D(W.name),
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
                                ])) : te("v-if", !0)
                              ]),
                              A.message.streaming ? te("v-if", !0) : (N(), H("div", MS, [
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (W) => Xl(A.message)
                                }, [
                                  M(c(ri), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, DS),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (W) => Jl(A.message)
                                }, [
                                  M(c(us), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, FS),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (W) => Ql(A.message.id)
                                }, [
                                  M(c(ca), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, zS)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (N(), H(
                            pt,
                            { key: 1 },
                            [
                              b("div", BS, [
                                b(
                                  "span",
                                  null,
                                  D(c(ut)),
                                  1
                                  /* TEXT */
                                ),
                                A.message.streaming ? (N(), H(
                                  "small",
                                  VS,
                                  D(bt(A.message)),
                                  1
                                  /* TEXT */
                                )) : te("v-if", !0)
                              ]),
                              b(
                                "div",
                                {
                                  class: q(["assistant-card", {
                                    "assistant-card--streaming": A.message.streaming
                                  }])
                                },
                                [
                                  A.message.content ? (N(), H("div", jS, [
                                    A.message.allowThinking && He(A.message.content) ? (N(), H("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: A.message.streaming && In(A.message)
                                    }, [
                                      b("summary", null, [
                                        b("span", HS, [
                                          M(c(ni), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          rn(
                                            " " + D(Xr(A.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        A.message.streaming ? (N(), H(
                                          "small",
                                          WS,
                                          D(In(A.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : te("v-if", !0)
                                      ]),
                                      b("div", {
                                        class: "message-content markdown-body",
                                        onClick: Nr,
                                        innerHTML: Cn(
                                          qr(A.message, "reasoning")
                                        )
                                      }, null, 8, GS)
                                    ], 8, US)) : te("v-if", !0),
                                    pn(A.message.content) ? (N(), H("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: Nr,
                                      innerHTML: Cn(
                                        qr(A.message, "answer")
                                      )
                                    }, null, 8, KS)) : te("v-if", !0)
                                  ])) : (N(), H(
                                    "div",
                                    qS,
                                    D(Zt(A.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              A.message.content ? (N(), H("div", YS, [
                                b(
                                  "span",
                                  ZS,
                                  D(c(t)("localAi.contextLabel")) + ": " + D(_(A.message).context) + "/" + D(_(A.message).contextMax) + " (" + D(_(A.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  XS,
                                  D(c(t)("localAi.outputLabel")) + ": " + D(_(A.message).output) + "/" + D(_(A.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  QS,
                                  D(_(A.message).seconds) + "s ",
                                  1
                                  /* TEXT */
                                ),
                                b(
                                  "span",
                                  JS,
                                  D(_(A.message).speed) + " t/s ",
                                  1
                                  /* TEXT */
                                ),
                                A.message.streaming ? te("v-if", !0) : (N(), H(
                                  "span",
                                  e2,
                                  D(Mt(A.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : te("v-if", !0),
                              j(A.message) ? (N(), H(
                                "div",
                                t2,
                                D(j(A.message)),
                                1
                                /* TEXT */
                              )) : te("v-if", !0),
                              A.message.streaming ? te("v-if", !0) : (N(), H("div", n2, [
                                A.siblingLeafNodeIds.length > 1 ? (N(), H("div", {
                                  key: 0,
                                  class: "message-version-switcher",
                                  title: ei(A),
                                  "aria-label": ei(A)
                                }, [
                                  b("button", {
                                    type: "button",
                                    disabled: A.siblingCurrentIndex <= 0,
                                    title: c(t)("localAi.previousVersion"),
                                    onClick: (W) => ti(A, -1)
                                  }, " ‹ ", 8, o2),
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
                                    onClick: (W) => ti(A, 1)
                                  }, " › ", 8, a2)
                                ], 8, r2)) : te("v-if", !0),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (W) => Xl(A.message)
                                }, [
                                  M(c(ri), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, s2),
                                A.message.role === "assistant" ? (N(), H("button", {
                                  key: 1,
                                  type: "button",
                                  title: c(t)("localAi.regenerate"),
                                  onClick: (W) => xf(A.message.id)
                                }, [
                                  M(c(si), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, l2)) : te("v-if", !0),
                                A.message.role === "assistant" ? (N(), H("button", {
                                  key: 2,
                                  type: "button",
                                  title: c(t)("localAi.branchChat"),
                                  onClick: (W) => Of(A.message.id)
                                }, [
                                  M(c(np), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, i2)) : te("v-if", !0),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (W) => Jl(A.message)
                                }, [
                                  M(c(us), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, c2),
                                b("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (W) => Ql(A.message.id)
                                }, [
                                  M(c(ca), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, u2)
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
          c(g) ? (N(), H("button", {
            key: 1,
            class: "scroll-bottom-btn",
            type: "button",
            title: c(t)("localAi.jumpToLatest"),
            onClick: S
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
          ], 8, d2)) : te("v-if", !0),
          b(
            "form",
            {
              class: q([
                "chat-input-card",
                c(m) ? "chat-input-card--focused" : ""
              ]),
              onDragover: L[6] || (L[6] = nt(() => {
              }, ["prevent"])),
              onDrop: nt(An, ["prevent"]),
              onSubmit: nt(ft, ["prevent"]),
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
                  onChange: Yt
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              c(i).length ? (N(), H("div", f2, [
                (N(!0), H(
                  pt,
                  null,
                  Jn(c(i), (A) => (N(), H(
                    "div",
                    {
                      key: A.id,
                      class: q([
                        "attachment-preview-item",
                        `attachment-preview-item--${A.status}`
                      ])
                    },
                    [
                      A.type === "image" && A.dataUrl ? (N(), H("img", {
                        key: 0,
                        src: A.dataUrl,
                        alt: A.name
                      }, null, 8, p2)) : (N(), H(
                        "span",
                        m2,
                        D(A.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      b("span", h2, [
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
                          D(c(Gh)(A.size)) + " · " + D(hr(A)),
                          1
                          /* TEXT */
                        )
                      ]),
                      b("button", {
                        type: "button",
                        title: c(t)("common.delete"),
                        onClick: (z) => Or(A.id)
                      }, [
                        M(c(ca), {
                          theme: "outline",
                          size: "12"
                        })
                      ], 8, g2)
                    ],
                    2
                    /* CLASS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : te("v-if", !0),
              At(b("textarea", {
                "onUpdate:modelValue": L[3] || (L[3] = (A) => io(s) ? s.value = A : null),
                class: "chat-input",
                rows: "2",
                placeholder: c(t)("localAi.chatPlaceholder"),
                onKeydown: nn,
                onPaste: Lr
              }, null, 40, v2), [
                [jo, c(s)]
              ]),
              b("div", b2, [
                b("div", y2, [
                  b("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: c(t)("localAi.addAttachment"),
                    onClick: mr
                  }, [
                    M(c(rp), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, _2),
                  b("label", w2, [
                    At(b("select", {
                      "onUpdate:modelValue": L[4] || (L[4] = (A) => io(I) ? I.value = A : null),
                      disabled: c(l) || !c(Ye).length,
                      onChange: xr
                    }, [
                      (N(!0), H(
                        pt,
                        null,
                        Jn(c(Ye), (A) => (N(), H("option", {
                          key: A,
                          value: A
                        }, D(et(A)), 9, T2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      c(Ye).length ? te("v-if", !0) : (N(), H(
                        "option",
                        S2,
                        D(c(ut)),
                        1
                        /* TEXT */
                      ))
                    ], 40, k2), [
                      [Xf, c(I)]
                    ]),
                    M(c(oi), {
                      theme: "outline",
                      size: "14"
                    })
                  ]),
                  c(qe) ? (N(), H("button", {
                    key: 0,
                    class: q([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      c(p) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: c(p) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                    "aria-pressed": c(p),
                    onClick: L[5] || (L[5] = (A) => p.value = !c(p))
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
                  ], 10, E2)) : te("v-if", !0)
                ]),
                b("div", A2, [
                  L[10] || (L[10] = b(
                    "span",
                    { class: "input-hint" },
                    "Enter · Shift + Enter",
                    -1
                    /* HOISTED */
                  )),
                  c(l) ? (N(), H("button", {
                    key: 0,
                    class: "send-btn send-btn--stop",
                    type: "button",
                    title: c(t)("localAi.stopGenerating"),
                    "aria-label": c(t)("localAi.stopGenerating"),
                    onClick: ln
                  }, [
                    M(c(sp), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, C2)) : (N(), H("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !c(ye),
                    title: c(t)("localAi.send"),
                    "aria-label": c(t)("localAi.send")
                  }, [
                    M(c(ap), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, I2))
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
}, M2 = /* @__PURE__ */ Zl($2, [["__scopeId", "data-v-e589c0dc"]]), D2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M2
}, Symbol.toStringTag, { value: "Module" }));
async function hu(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Pt("plugin:dialog|open", { options: e });
}
const F2 = ["disabled"], z2 = {
  key: 0,
  class: "custom-button__loading"
}, B2 = /* @__PURE__ */ ie({
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
    return (n, r) => (N(), H("button", {
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
      e.loading ? (N(), H("div", z2, r[1] || (r[1] = [
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
      ]))) : te("v-if", !0),
      Ee(n.$slots, "default", {}, void 0, !0)
    ], 10, F2));
  }
}), br = /* @__PURE__ */ Zl(B2, [["__scopeId", "data-v-9497085f"]]), V2 = { class: "settings-panel local-ai-settings-shell" }, j2 = { class: "local-ai-hero panel-card" }, U2 = { class: "panel-title" }, H2 = { class: "hero-desc" }, W2 = { class: "header-actions" }, G2 = {
  key: 0,
  class: "settings-grid"
}, K2 = { class: "summary-panel panel-card" }, q2 = { class: "status-strip" }, Y2 = { class: "memory-card" }, Z2 = { class: "memory-card__header" }, X2 = { class: "memory-metrics" }, Q2 = { class: "bottleneck-row" }, J2 = { class: "summary-card" }, eE = { class: "summary-card__title" }, tE = { class: "summary-card__desc" }, nE = { class: "service-controls" }, rE = { class: "service-url" }, oE = { class: "summary-card" }, aE = { class: "summary-card__title" }, sE = { class: "summary-card__desc" }, lE = { class: "summary-meta" }, iE = { class: "form-panel panel-card" }, cE = { class: "settings-section" }, uE = { class: "settings-section__header" }, dE = { class: "field-stack" }, fE = ["title"], pE = { class: "path-control" }, mE = ["title"], hE = ["title"], gE = ["title"], vE = { class: "path-control" }, bE = ["placeholder"], yE = { class: "settings-section grid-two" }, _E = { class: "settings-section__header" }, wE = { class: "param-grid" }, kE = ["title"], TE = ["title"], SE = ["title"], EE = ["title"], AE = ["title"], CE = ["title"], IE = { class: "settings-section grid-two" }, LE = { class: "settings-section__header" }, OE = { class: "switch-grid" }, xE = ["title"], RE = ["title"], NE = ["title"], PE = { class: "settings-section grid-two" }, $E = { class: "settings-section__header" }, ME = { class: "switch-grid switch-grid--two" }, DE = ["title"], FE = ["title"], zE = ["title"], BE = ["title"], VE = { class: "settings-section grid-two" }, jE = { class: "settings-section__header" }, UE = { class: "param-grid param-grid--three" }, HE = ["title"], WE = ["title"], GE = ["title"], KE = ["title"], qE = ["title"], YE = ["title"], ZE = ["title"], XE = ["title"], QE = { class: "settings-footer" }, JE = ["title"], eA = /* @__PURE__ */ ie({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = G(null), r = G(null), o = G(null), a = G(null), s = G(!1), i = G(!1), l = G(!1), u = G(!1), d = G(!1);
    let p = null;
    const m = P(() => !!a.value?.selectedModelPath), y = P(() => !!n.value?.mmprojPath), g = P({
      get: () => n.value?.modelPath ?? "",
      set: (X) => {
        n.value && (n.value.modelPath = X || void 0);
      }
    }), v = P({
      get: () => n.value?.mmprojPath ?? "",
      set: (X) => {
        n.value && (n.value.mmprojPath = X || void 0);
      }
    }), E = P(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), f = P(
      () => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), I = P(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), R = (X) => X.split(/[\\/]+/).pop() ?? X, C = P(() => {
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
      const K = Math.max(1.4, C.value * 0.92), Ne = Math.min(1, Math.max(0, X.gpuLayers) / 32), Ue = X.ctxSize / 8192 * 0.38 * (X.kvOffload ? 1 : 0.12), ve = X.batchSize / 512 * 0.18, ye = K * Ne + Ue + ve, ne = K * (1 - Ne) + X.ctxSize / 8192 * 0.22, se = ye + ne, Ke = X.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : X.ctxSize >= 32768 || X.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: ye.toFixed(2),
        totalGb: se.toFixed(2),
        bottleneck: Ke
      };
    }), T = (X) => t(`localAi.paramHints.${X}`), x = async () => {
      r.value = await Rh();
    }, Y = async () => {
      o.value = await od();
    }, Z = async () => {
      n.value && (a.value = await rd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, ae = async () => {
      s.value = !0;
      try {
        n.value = await nd(), await Promise.all([x(), Z(), Y()]);
      } catch (X) {
        hn.error("[LocalAI] refresh settings failed", X), at.msg(`${t("localAi.refreshFailed")}: ${X}`, "error");
      } finally {
        s.value = !1;
      }
    }, he = async () => {
      if (n.value)
        try {
          await Sa(n.value);
        } catch (X) {
          hn.warn("[LocalAI] autosave failed", X);
        }
    }, le = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Sa(n.value), await Promise.all([x(), Z(), Y()]), at.msg(t("localAi.configSaved"));
        } catch (X) {
          at.msg(`${t("localAi.configSaveFailed")}: ${X}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, Te = async () => {
      const X = await hu({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !X || Array.isArray(X) || !n.value || (n.value.modelDir = X, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await Z());
    }, be = async () => {
      const X = await hu({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !X || Array.isArray(X) || !n.value || (n.value.runtimePath = X, await he(), await x());
    }, B = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Sa(n.value), o.value = await Nh(n.value), at.msg(t("localAi.serviceStarted"));
        } catch (X) {
          at.msg(`${t("localAi.serviceStartFailed")}: ${X}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, Q = async () => {
      u.value = !0;
      try {
        await le(), o.value = await ad(), at.msg(t("localAi.serviceRestarted"));
      } catch (X) {
        at.msg(`${t("localAi.serviceRestartFailed")}: ${X}`, "error");
      } finally {
        u.value = !1;
      }
    }, U = async () => {
      d.value = !0;
      try {
        await Ph(), await Y(), at.msg(t("localAi.serviceStoppedMsg"));
      } catch (X) {
        at.msg(`${t("localAi.serviceStopFailed")}: ${X}`, "error");
      } finally {
        d.value = !1;
      }
    }, pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return vt(async () => {
      await ae(), p = setInterval(() => {
        Y().catch(
          (X) => hn.warn("[LocalAI] status refresh failed", X)
        );
      }, 5e3);
    }), Ua(() => {
      p && clearInterval(p);
    }), (X, K) => {
      const Ne = yT, Ue = bT, ve = nT, ye = AT;
      return N(), H("div", V2, [
        b("header", j2, [
          b("div", null, [
            b(
              "h3",
              U2,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              H2,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", W2, [
            M(c(br), {
              size: "small",
              plain: "",
              onClick: pe
            }, {
              default: fe(() => [
                rn(
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
              onClick: ae
            }, {
              default: fe(() => [
                rn(
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
        c(n) ? (N(), H("main", G2, [
          b("aside", K2, [
            b("div", q2, [
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
                  class: q(["status-item", { ready: c(m) }])
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
                    D(c(I)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", Y2, [
              b("div", Z2, [
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
              b("div", X2, [
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
              b("div", Q2, [
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
            b("section", J2, [
              b(
                "div",
                eE,
                D(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                tE,
                D(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", nE, [
                M(c(br), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: B
                }, {
                  default: fe(() => [
                    rn(
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
                  onClick: Q
                }, {
                  default: fe(() => [
                    rn(
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
                  onClick: U
                }, {
                  default: fe(() => [
                    rn(
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
                rE,
                D(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", oE, [
              b(
                "div",
                aE,
                D(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                sE,
                D(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", lE, [
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
          b("section", iE, [
            b("div", cE, [
              b("div", uE, [
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
              b("div", dE, [
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
                  b("div", pE, [
                    At(b(
                      "input",
                      {
                        "onUpdate:modelValue": K[0] || (K[0] = (ne) => c(n).modelDir = ne),
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
                      onClick: Te
                    }, {
                      default: fe(() => [
                        rn(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, fE),
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
                    "onUpdate:modelValue": K[1] || (K[1] = (ne) => io(g) ? g.value = ne : null),
                    class: "field-select",
                    clearable: "",
                    onChange: he
                  }, {
                    default: fe(() => [
                      (N(!0), H(
                        pt,
                        null,
                        Jn(c(a)?.mainModels ?? [], (ne) => (N(), me(Ne, {
                          key: ne,
                          label: R(ne),
                          value: ne
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, mE),
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
                    "onUpdate:modelValue": K[2] || (K[2] = (ne) => io(v) ? v.value = ne : null),
                    class: "field-select",
                    clearable: "",
                    onChange: he
                  }, {
                    default: fe(() => [
                      (N(!0), H(
                        pt,
                        null,
                        Jn(c(a)?.mmprojModels ?? [], (ne) => (N(), me(Ne, {
                          key: ne,
                          label: R(ne),
                          value: ne
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, hE),
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
                  b("div", vE, [
                    At(b("input", {
                      "onUpdate:modelValue": K[3] || (K[3] = (ne) => c(n).runtimePath = ne),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, bE), [
                      [jo, c(n).runtimePath]
                    ]),
                    M(c(br), {
                      size: "small",
                      plain: "",
                      onClick: be
                    }, {
                      default: fe(() => [
                        rn(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, gE)
              ])
            ]),
            b("div", yE, [
              b("div", _E, [
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
              b("div", wE, [
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
                    "onUpdate:modelValue": K[4] || (K[4] = (ne) => c(n).ctxSize = ne),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, kE),
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
                    "onUpdate:modelValue": K[5] || (K[5] = (ne) => c(n).gpuLayers = ne),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, TE),
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
                    "onUpdate:modelValue": K[6] || (K[6] = (ne) => c(n).threads = ne),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, SE),
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
                    "onUpdate:modelValue": K[7] || (K[7] = (ne) => c(n).batchSize = ne),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, EE),
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
                    "onUpdate:modelValue": K[8] || (K[8] = (ne) => c(n).ubatchSize = ne),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AE),
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
                    "onUpdate:modelValue": K[9] || (K[9] = (ne) => c(n).mainGpu = ne),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, CE)
              ])
            ]),
            b("div", IE, [
              b("div", LE, [
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
              b("div", OE, [
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
                  M(ye, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": K[10] || (K[10] = (ne) => c(n).flashAttn = ne)
                  }, null, 8, ["modelValue"])
                ], 8, xE),
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
                  M(ye, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": K[11] || (K[11] = (ne) => c(n).kvOffload = ne)
                  }, null, 8, ["modelValue"])
                ], 8, RE),
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
                  M(ye, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": K[12] || (K[12] = (ne) => c(n).mmap = ne)
                  }, null, 8, ["modelValue"])
                ], 8, NE)
              ])
            ]),
            b("div", PE, [
              b("div", $E, [
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
              b("div", ME, [
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
                  M(ye, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": K[13] || (K[13] = (ne) => c(n).autoStartOnRequest = ne)
                  }, null, 8, ["modelValue"])
                ], 8, DE),
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
                  M(ye, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": K[14] || (K[14] = (ne) => c(n).keepAlive = ne)
                  }, null, 8, ["modelValue"])
                ], 8, FE),
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
                    "onUpdate:modelValue": K[15] || (K[15] = (ne) => c(n).idleTimeoutMinutes = ne),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, zE),
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
                    "onUpdate:modelValue": K[16] || (K[16] = (ne) => c(n).requestTimeoutSecs = ne),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
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
              b("div", UE, [
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
                    "onUpdate:modelValue": K[17] || (K[17] = (ne) => c(n).temperature = ne),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, HE),
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
                    "onUpdate:modelValue": K[18] || (K[18] = (ne) => c(n).topP = ne),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, WE),
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
                    "onUpdate:modelValue": K[19] || (K[19] = (ne) => c(n).topK = ne),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, GE),
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
                    "onUpdate:modelValue": K[20] || (K[20] = (ne) => c(n).minP = ne),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, KE),
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
                    "onUpdate:modelValue": K[21] || (K[21] = (ne) => c(n).repeatPenalty = ne),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, qE),
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
                    "onUpdate:modelValue": K[22] || (K[22] = (ne) => c(n).repeatLastN = ne),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, YE),
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
                    "onUpdate:modelValue": K[23] || (K[23] = (ne) => c(n).maxTokens = ne),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, ZE),
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
                    "onUpdate:modelValue": K[24] || (K[24] = (ne) => c(n).port = ne),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, XE)
              ])
            ]),
            b("div", QE, [
              M(c(br), {
                type: "primary",
                loading: c(i),
                onClick: le
              }, {
                default: fe(() => [
                  rn(
                    D(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (N(), H("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, D(c(o).commandLine), 9, JE)) : te("v-if", !0)
            ])
          ])
        ])) : te("v-if", !0)
      ]);
    };
  }
}), tA = /* @__PURE__ */ Zl(eA, [["__scopeId", "data-v-c43741fb"]]), nA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tA
}, Symbol.toStringTag, { value: "Module" }));
export {
  aA as activate,
  aA as default
};
