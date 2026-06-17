var Jf = Object.defineProperty;
var ed = (e, t, n) => t in e ? Jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ze = (e, t, n) => ed(e, typeof t != "symbol" ? t + "" : t, n);
import * as Va from "vue";
import { inject as Fe, createVNode as N, defineAsyncComponent as td, ref as j, shallowRef as ir, computed as I, watch as be, onMounted as ut, onUnmounted as va, defineComponent as re, h as jc, Text as Uc, Fragment as Nt, createElementBlock as H, openBlock as R, normalizeClass as U, createCommentVNode as J, renderSlot as ge, createElementVNode as _, getCurrentInstance as Vt, unref as c, watchEffect as Hc, readonly as Ls, getCurrentScope as nd, onScopeDispose as rd, nextTick as lt, isRef as ho, warn as od, provide as Pn, mergeProps as zr, toRef as Un, useAttrs as ad, useSlots as sd, normalizeStyle as Ct, createBlock as le, withCtx as ae, resolveDynamicComponent as zt, withModifiers as Xe, toDisplayString as V, onBeforeUnmount as Mn, Transition as Xr, withDirectives as kt, vShow as Xn, reactive as _r, onActivated as ld, onUpdated as Wc, cloneVNode as id, Comment as cd, Teleport as ud, onBeforeMount as fd, onDeactivated as dd, createTextVNode as Zt, withKeys as nn, createSlots as pd, toRaw as md, toRefs as Is, resolveComponent as vr, resolveDirective as hd, toHandlerKey as gd, renderList as Br, vModelText as go, shallowReactive as vd, isVNode as vo, render as na } from "vue";
var bd = {
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
function yd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function _d(e, t, n) {
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
var wd = Symbol("icon-context");
function Ot(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = yd(), i = Fe(wd, bd);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, m = a.strokeLinejoin, p = a.theme, v = a.fill, h = a.spin, g = _d(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: m,
          theme: p,
          fill: v
        }, i), S = [i.prefix + "-icon"];
        return S.push(i.prefix + "-icon-" + e), t && i.rtl && S.push(i.prefix + "-icon-rtl"), h && S.push(i.prefix + "-icon-spin"), N("span", {
          class: S.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const kd = Ot("add", !1, function(e) {
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
}), Il = Ot("brain", !0, function(e) {
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
}), Td = Ot("copy", !0, function(e) {
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
}), Rl = Ot("delete", !1, function(e) {
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
}), Sd = Ot("dislike", !0, function(e) {
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
}), xl = Ot("down", !1, function(e) {
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
}), Ed = Ot("edit", !0, function(e) {
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
}), Cd = Ot("like", !1, function(e) {
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
}), Ad = Ot("message", !0, function(e) {
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
}), Od = Ot("more", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), N("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), N("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Pl = Ot("refresh", !0, function(e) {
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
}), Ld = Ot("right", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nl = Ot("robot", !0, function(e) {
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
}), Id = Ot("search", !0, function(e) {
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
}), Rd = Ot("send", !0, function(e) {
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
}), rs = Ot("setting-two", !1, function(e) {
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
}), xd = Ot("square", !1, function(e) {
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
}), ME = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => RS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: rs,
    component: td(() => Promise.resolve().then(() => PE))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Pd(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const $l = typeof window < "u", Sr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Nd = (e, t, n) => $d({ l: e, k: t, s: n }), $d = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), _t = (e) => typeof e == "number" && isFinite(e), Md = (e) => Rs(e) === "[object Date]", ra = (e) => Rs(e) === "[object RegExp]", ba = (e) => Ie(e) && Object.keys(e).length === 0, At = Object.assign, Dd = Object.create, Be = (e = null) => Dd(e);
let Ml;
const Xo = () => Ml || (Ml = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Be());
function Dl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Fl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Fd(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${Fl(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${Fl(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const zd = Object.prototype.hasOwnProperty;
function pn(e, t) {
  return zd.call(e, t);
}
const ct = Array.isArray, Qe = (e) => typeof e == "function", oe = (e) => typeof e == "string", it = (e) => typeof e == "boolean", Re = (e) => e !== null && typeof e == "object", Bd = (e) => Re(e) && Qe(e.then) && Qe(e.catch), Gc = Object.prototype.toString, Rs = (e) => Gc.call(e), Ie = (e) => Rs(e) === "[object Object]", Vd = (e) => e == null ? "" : ct(e) || Ie(e) && e.toString === Gc ? JSON.stringify(e, null, 2) : String(e);
function xs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const zo = (e) => !Re(e) || ct(e);
function Qo(e, t) {
  if (zo(e) || zo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Re(r[a]) && !Re(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Be()), zo(o[a]) || zo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function jd(e, t, n) {
  return { line: e, column: t, offset: n };
}
function os(e, t, n) {
  return { start: e, end: t };
}
const Pe = {
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
}, Ud = 17;
function ya(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Hd(e) {
  throw e;
}
const wn = " ", Wd = "\r", Pt = `
`, Gd = "\u2028", Kd = "\u2029";
function qd(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Wd && t[O + 1] === Pt, i = (O) => t[O] === Pt, l = (O) => t[O] === Kd, u = (O) => t[O] === Gd, f = (O) => s(O) || i(O) || l(O) || u(O), m = () => n, p = () => r, v = () => o, h = () => a, g = (O) => s(O) || l(O) || u(O) ? Pt : t[O], S = () => g(n), d = () => g(n + a);
  function C() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function L() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function E() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function y(O = 0) {
    a = O;
  }
  function k() {
    const O = n + a;
    for (; O !== n; )
      C();
    a = 0;
  }
  return {
    index: m,
    line: p,
    column: v,
    peekOffset: h,
    charAt: g,
    currentChar: S,
    currentPeek: d,
    next: C,
    peek: L,
    reset: E,
    resetPeek: y,
    skipToPeek: k
  };
}
const Fn = void 0, Yd = ".", zl = "'", Zd = "tokenizer";
function Xd(e, t = {}) {
  const n = t.location !== !1, r = qd(e), o = () => r.index(), a = () => jd(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function m(w, A, F, ...Y) {
    const Ee = u();
    if (A.column += F, A.offset += F, f) {
      const ue = n ? os(Ee.startLoc, A) : null, T = ya(w, ue, {
        domain: Zd,
        args: Y
      });
      f(T);
    }
  }
  function p(w, A, F) {
    w.endLoc = a(), w.currentType = A;
    const Y = { type: A };
    return n && (Y.loc = os(w.startLoc, w.endLoc)), F != null && (Y.value = F), Y;
  }
  const v = (w) => p(
    w,
    13
    /* TokenTypes.EOF */
  );
  function h(w, A) {
    return w.currentChar() === A ? (w.next(), A) : (m(Pe.EXPECTED_TOKEN, a(), 0, A), "");
  }
  function g(w) {
    let A = "";
    for (; w.currentPeek() === wn || w.currentPeek() === Pt; )
      A += w.currentPeek(), w.peek();
    return A;
  }
  function S(w) {
    const A = g(w);
    return w.skipToPeek(), A;
  }
  function d(w) {
    if (w === Fn)
      return !1;
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A === 95;
  }
  function C(w) {
    if (w === Fn)
      return !1;
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function L(w, A) {
    const { currentType: F } = A;
    if (F !== 2)
      return !1;
    g(w);
    const Y = d(w.currentPeek());
    return w.resetPeek(), Y;
  }
  function E(w, A) {
    const { currentType: F } = A;
    if (F !== 2)
      return !1;
    g(w);
    const Y = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), Ee = C(Y);
    return w.resetPeek(), Ee;
  }
  function y(w, A) {
    const { currentType: F } = A;
    if (F !== 2)
      return !1;
    g(w);
    const Y = w.currentPeek() === zl;
    return w.resetPeek(), Y;
  }
  function k(w, A) {
    const { currentType: F } = A;
    if (F !== 7)
      return !1;
    g(w);
    const Y = w.currentPeek() === ".";
    return w.resetPeek(), Y;
  }
  function O(w, A) {
    const { currentType: F } = A;
    if (F !== 8)
      return !1;
    g(w);
    const Y = d(w.currentPeek());
    return w.resetPeek(), Y;
  }
  function W(w, A) {
    const { currentType: F } = A;
    if (!(F === 7 || F === 11))
      return !1;
    g(w);
    const Y = w.currentPeek() === ":";
    return w.resetPeek(), Y;
  }
  function G(w, A) {
    const { currentType: F } = A;
    if (F !== 9)
      return !1;
    const Y = () => {
      const ue = w.currentPeek();
      return ue === "{" ? d(w.peek()) : ue === "@" || ue === "|" || ue === ":" || ue === "." || ue === wn || !ue ? !1 : ue === Pt ? (w.peek(), Y()) : de(w, !1);
    }, Ee = Y();
    return w.resetPeek(), Ee;
  }
  function te(w) {
    g(w);
    const A = w.currentPeek() === "|";
    return w.resetPeek(), A;
  }
  function de(w, A = !0) {
    const F = (Ee = !1, ue = "") => {
      const T = w.currentPeek();
      return T === "{" || T === "@" || !T ? Ee : T === "|" ? !(ue === wn || ue === Pt) : T === wn ? (w.peek(), F(!0, wn)) : T === Pt ? (w.peek(), F(!0, Pt)) : !0;
    }, Y = F();
    return A && w.resetPeek(), Y;
  }
  function ne(w, A) {
    const F = w.currentChar();
    return F === Fn ? Fn : A(F) ? (w.next(), F) : null;
  }
  function ve(w) {
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36;
  }
  function pe(w) {
    return ne(w, ve);
  }
  function P(w) {
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36 || // $
    A === 45;
  }
  function $(w) {
    return ne(w, P);
  }
  function B(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function ie(w) {
    return ne(w, B);
  }
  function ee(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57 || // 0-9
    A >= 65 && A <= 70 || // A-F
    A >= 97 && A <= 102;
  }
  function _e(w) {
    return ne(w, ee);
  }
  function X(w) {
    let A = "", F = "";
    for (; A = ie(w); )
      F += A;
    return F;
  }
  function Ve(w) {
    let A = "";
    for (; ; ) {
      const F = w.currentChar();
      if (F === "{" || F === "}" || F === "@" || F === "|" || !F)
        break;
      if (F === wn || F === Pt)
        if (de(w))
          A += F, w.next();
        else {
          if (te(w))
            break;
          A += F, w.next();
        }
      else
        A += F, w.next();
    }
    return A;
  }
  function Oe(w) {
    S(w);
    let A = "", F = "";
    for (; A = $(w); )
      F += A;
    const Y = w.currentChar();
    if (Y && Y !== "}" && Y !== Fn && Y !== wn && Y !== Pt && Y !== "　") {
      const Ee = ft(w);
      return m(Pe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, F + Ee), F + Ee;
    }
    return w.currentChar() === Fn && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), F;
  }
  function ke(w) {
    S(w);
    let A = "";
    return w.currentChar() === "-" ? (w.next(), A += `-${X(w)}`) : A += X(w), w.currentChar() === Fn && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function qe(w) {
    return w !== zl && w !== Pt;
  }
  function Se(w) {
    S(w), h(w, "'");
    let A = "", F = "";
    for (; A = ne(w, qe); )
      A === "\\" ? F += et(w) : F += A;
    const Y = w.currentChar();
    return Y === Pt || Y === Fn ? (m(Pe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), Y === Pt && (w.next(), h(w, "'")), F) : (h(w, "'"), F);
  }
  function et(w) {
    const A = w.currentChar();
    switch (A) {
      case "\\":
      case "'":
        return w.next(), `\\${A}`;
      case "u":
        return ce(w, A, 4);
      case "U":
        return ce(w, A, 6);
      default:
        return m(Pe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, A), "";
    }
  }
  function ce(w, A, F) {
    h(w, A);
    let Y = "";
    for (let Ee = 0; Ee < F; Ee++) {
      const ue = _e(w);
      if (!ue) {
        m(Pe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${A}${Y}${w.currentChar()}`);
        break;
      }
      Y += ue;
    }
    return `\\${A}${Y}`;
  }
  function tt(w) {
    return w !== "{" && w !== "}" && w !== wn && w !== Pt;
  }
  function ft(w) {
    S(w);
    let A = "", F = "";
    for (; A = ne(w, tt); )
      F += A;
    return F;
  }
  function Ue(w) {
    let A = "", F = "";
    for (; A = pe(w); )
      F += A;
    return F;
  }
  function Tt(w) {
    const A = (F) => {
      const Y = w.currentChar();
      return Y === "{" || Y === "@" || Y === "|" || Y === "(" || Y === ")" || !Y || Y === wn ? F : (F += Y, w.next(), A(F));
    };
    return A("");
  }
  function at(w) {
    S(w);
    const A = h(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return S(w), A;
  }
  function gt(w, A) {
    let F = null;
    switch (w.currentChar()) {
      case "{":
        return A.braceNest >= 1 && m(Pe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), F = p(
          A,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), S(w), A.braceNest++, F;
      case "}":
        return A.braceNest > 0 && A.currentType === 2 && m(Pe.EMPTY_PLACEHOLDER, a(), 0), w.next(), F = p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), A.braceNest--, A.braceNest > 0 && S(w), A.inLinked && A.braceNest === 0 && (A.inLinked = !1), F;
      case "@":
        return A.braceNest > 0 && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), F = st(w, A) || v(A), A.braceNest = 0, F;
      default: {
        let Ee = !0, ue = !0, T = !0;
        if (te(w))
          return A.braceNest > 0 && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), F = p(A, 1, at(w)), A.braceNest = 0, A.inLinked = !1, F;
        if (A.braceNest > 0 && (A.currentType === 4 || A.currentType === 5 || A.currentType === 6))
          return m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), A.braceNest = 0, $e(w, A);
        if (Ee = L(w, A))
          return F = p(A, 4, Oe(w)), S(w), F;
        if (ue = E(w, A))
          return F = p(A, 5, ke(w)), S(w), F;
        if (T = y(w, A))
          return F = p(A, 6, Se(w)), S(w), F;
        if (!Ee && !ue && !T)
          return F = p(A, 12, ft(w)), m(Pe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, F.value), S(w), F;
        break;
      }
    }
    return F;
  }
  function st(w, A) {
    const { currentType: F } = A;
    let Y = null;
    const Ee = w.currentChar();
    switch ((F === 7 || F === 8 || F === 11 || F === 9) && (Ee === Pt || Ee === wn) && m(Pe.INVALID_LINKED_FORMAT, a(), 0), Ee) {
      case "@":
        return w.next(), Y = p(
          A,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), A.inLinked = !0, Y;
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
        return te(w) ? (Y = p(A, 1, at(w)), A.braceNest = 0, A.inLinked = !1, Y) : k(w, A) || W(w, A) ? (S(w), st(w, A)) : O(w, A) ? (S(w), p(A, 11, Ue(w))) : G(w, A) ? (S(w), Ee === "{" ? gt(w, A) || Y : p(A, 10, Tt(w))) : (F === 7 && m(Pe.INVALID_LINKED_FORMAT, a(), 0), A.braceNest = 0, A.inLinked = !1, $e(w, A));
    }
  }
  function $e(w, A) {
    let F = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (A.braceNest > 0)
      return gt(w, A) || v(A);
    if (A.inLinked)
      return st(w, A) || v(A);
    switch (w.currentChar()) {
      case "{":
        return gt(w, A) || v(A);
      case "}":
        return m(Pe.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return st(w, A) || v(A);
      default: {
        if (te(w))
          return F = p(A, 1, at(w)), A.braceNest = 0, A.inLinked = !1, F;
        if (de(w))
          return p(A, 0, Ve(w));
        break;
      }
    }
    return F;
  }
  function vt() {
    const { currentType: w, offset: A, startLoc: F, endLoc: Y } = l;
    return l.lastType = w, l.lastOffset = A, l.lastStartLoc = F, l.lastEndLoc = Y, l.offset = o(), l.startLoc = a(), r.currentChar() === Fn ? p(
      l,
      13
      /* TokenTypes.EOF */
    ) : $e(r, l);
  }
  return {
    nextToken: vt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Qd = "parser", Jd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ep(e, t, n) {
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
function tp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, C, L, E, ...y) {
    const k = d.currentPosition();
    if (k.offset += E, k.column += E, n) {
      const O = t ? os(L, k) : null, W = ya(C, O, {
        domain: Qd,
        args: y
      });
      n(W);
    }
  }
  function o(d, C, L) {
    const E = { type: d };
    return t && (E.start = C, E.end = C, E.loc = { start: L, end: L }), E;
  }
  function a(d, C, L, E) {
    t && (d.end = C, d.loc && (d.loc.end = L));
  }
  function s(d, C) {
    const L = d.context(), E = o(3, L.offset, L.startLoc);
    return E.value = C, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function i(d, C) {
    const L = d.context(), { lastOffset: E, lastStartLoc: y } = L, k = o(5, E, y);
    return k.index = parseInt(C, 10), d.nextToken(), a(k, d.currentOffset(), d.currentPosition()), k;
  }
  function l(d, C) {
    const L = d.context(), { lastOffset: E, lastStartLoc: y } = L, k = o(4, E, y);
    return k.key = C, d.nextToken(), a(k, d.currentOffset(), d.currentPosition()), k;
  }
  function u(d, C) {
    const L = d.context(), { lastOffset: E, lastStartLoc: y } = L, k = o(9, E, y);
    return k.value = C.replace(Jd, ep), d.nextToken(), a(k, d.currentOffset(), d.currentPosition()), k;
  }
  function f(d) {
    const C = d.nextToken(), L = d.context(), { lastOffset: E, lastStartLoc: y } = L, k = o(8, E, y);
    return C.type !== 11 ? (r(d, Pe.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), k.value = "", a(k, E, y), {
      nextConsumeToken: C,
      node: k
    }) : (C.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, kn(C)), k.value = C.value || "", a(k, d.currentOffset(), d.currentPosition()), {
      node: k
    });
  }
  function m(d, C) {
    const L = d.context(), E = o(7, L.offset, L.startLoc);
    return E.value = C, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function p(d) {
    const C = d.context(), L = o(6, C.offset, C.startLoc);
    let E = d.nextToken();
    if (E.type === 8) {
      const y = f(d);
      L.modifier = y.node, E = y.nextConsumeToken || d.nextToken();
    }
    switch (E.type !== 9 && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(E)), E = d.nextToken(), E.type === 2 && (E = d.nextToken()), E.type) {
      case 10:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(E)), L.key = m(d, E.value || "");
        break;
      case 4:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(E)), L.key = l(d, E.value || "");
        break;
      case 5:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(E)), L.key = i(d, E.value || "");
        break;
      case 6:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(E)), L.key = u(d, E.value || "");
        break;
      default: {
        r(d, Pe.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const y = d.context(), k = o(7, y.offset, y.startLoc);
        return k.value = "", a(k, y.offset, y.startLoc), L.key = k, a(L, y.offset, y.startLoc), {
          nextConsumeToken: E,
          node: L
        };
      }
    }
    return a(L, d.currentOffset(), d.currentPosition()), {
      node: L
    };
  }
  function v(d) {
    const C = d.context(), L = C.currentType === 1 ? d.currentOffset() : C.offset, E = C.currentType === 1 ? C.endLoc : C.startLoc, y = o(2, L, E);
    y.items = [];
    let k = null;
    do {
      const G = k || d.nextToken();
      switch (k = null, G.type) {
        case 0:
          G.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(G)), y.items.push(s(d, G.value || ""));
          break;
        case 5:
          G.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(G)), y.items.push(i(d, G.value || ""));
          break;
        case 4:
          G.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(G)), y.items.push(l(d, G.value || ""));
          break;
        case 6:
          G.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, kn(G)), y.items.push(u(d, G.value || ""));
          break;
        case 7: {
          const te = p(d);
          y.items.push(te.node), k = te.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const O = C.currentType === 1 ? C.lastOffset : d.currentOffset(), W = C.currentType === 1 ? C.lastEndLoc : d.currentPosition();
    return a(y, O, W), y;
  }
  function h(d, C, L, E) {
    const y = d.context();
    let k = E.items.length === 0;
    const O = o(1, C, L);
    O.cases = [], O.cases.push(E);
    do {
      const W = v(d);
      k || (k = W.items.length === 0), O.cases.push(W);
    } while (y.currentType !== 13);
    return k && r(d, Pe.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function g(d) {
    const C = d.context(), { offset: L, startLoc: E } = C, y = v(d);
    return C.currentType === 13 ? y : h(d, L, E, y);
  }
  function S(d) {
    const C = Xd(d, At({}, e)), L = C.context(), E = o(0, L.offset, L.startLoc);
    return t && E.loc && (E.loc.source = d), E.body = g(C), e.onCacheKey && (E.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && r(C, Pe.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), a(E, C.currentOffset(), C.currentPosition()), E;
  }
  return { parse: S };
}
function kn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function np(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Bl(e, t) {
  for (let n = 0; n < e.length; n++)
    Ps(e[n], t);
}
function Ps(e, t) {
  switch (e.type) {
    case 1:
      Bl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Bl(e.items, t);
      break;
    case 6: {
      Ps(e.key, t), t.helper(
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
function rp(e, t = {}) {
  const n = np(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ps(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function op(e) {
  const t = e.body;
  return t.type === 2 ? Vl(t) : t.cases.forEach((n) => Vl(n)), e;
}
function Vl(e) {
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
      e.static = xs(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Mr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Mr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Mr(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Mr(n[r]);
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
      Mr(t.key), t.k = t.key, delete t.key, t.modifier && (Mr(t.modifier), t.m = t.modifier, delete t.modifier);
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
function ap(e, t) {
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
    const d = S ? r : "";
    l(o ? d + "  ".repeat(g) : d);
  }
  function f(g = !0) {
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
    indent: f,
    deindent: m,
    newline: p,
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function sp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Vr(e, t.key), t.modifier ? (e.push(", "), Vr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function lp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Vr(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function ip(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Vr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function cp(e, t) {
  t.body ? Vr(e, t.body) : e.push("null");
}
function Vr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      cp(e, t);
      break;
    case 1:
      ip(e, t);
      break;
    case 2:
      lp(e, t);
      break;
    case 6:
      sp(e, t);
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
const up = (e, t = {}) => {
  const n = oe(t.mode) ? t.mode : "normal", r = oe(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = ap(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${xs(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), Vr(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fp(e, t = {}) {
  const n = At({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = tp(n).parse(e);
  return r ? (a && op(i), o && Mr(i), { ast: i, code: "" }) : (rp(i, n), up(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function dp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Xo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function In(e) {
  return Re(e) && Ns(e) === 0 && (pn(e, "b") || pn(e, "body"));
}
const Kc = ["b", "body"];
function pp(e) {
  return fr(e, Kc);
}
const qc = ["c", "cases"];
function mp(e) {
  return fr(e, qc, []);
}
const Yc = ["s", "static"];
function hp(e) {
  return fr(e, Yc);
}
const Zc = ["i", "items"];
function gp(e) {
  return fr(e, Zc, []);
}
const Xc = ["t", "type"];
function Ns(e) {
  return fr(e, Xc);
}
const Qc = ["v", "value"];
function Bo(e, t) {
  const n = fr(e, Qc);
  if (n != null)
    return n;
  throw bo(t);
}
const Jc = ["m", "modifier"];
function vp(e) {
  return fr(e, Jc);
}
const eu = ["k", "key"];
function bp(e) {
  const t = fr(e, eu);
  if (t)
    return t;
  throw bo(
    6
    /* NodeTypes.Linked */
  );
}
function fr(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (pn(e, o) && e[o] != null)
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
function bo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ja(e) {
  return (n) => yp(n, e);
}
function yp(e, t) {
  const n = pp(t);
  if (n == null)
    throw bo(
      0
      /* NodeTypes.Resource */
    );
  if (Ns(n) === 1) {
    const a = mp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      jl(e, i)
    ], []));
  } else
    return jl(e, n);
}
function jl(e, t) {
  const n = hp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = gp(t).reduce((o, a) => [...o, as(e, a)], []);
    return e.normalize(r);
  }
}
function as(e, t) {
  const n = Ns(t);
  switch (n) {
    case 3:
      return Bo(t, n);
    case 9:
      return Bo(t, n);
    case 4: {
      const r = t;
      if (pn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (pn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw bo(n);
    }
    case 5: {
      const r = t;
      if (pn(r, "i") && _t(r.i))
        return e.interpolate(e.list(r.i));
      if (pn(r, "index") && _t(r.index))
        return e.interpolate(e.list(r.index));
      throw bo(n);
    }
    case 6: {
      const r = t, o = vp(r), a = bp(r);
      return e.linked(as(e, a), o ? as(e, o) : void 0, e.type);
    }
    case 7:
      return Bo(t, n);
    case 8:
      return Bo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const _p = (e) => e;
let Vo = Be();
function wp(e, t = {}) {
  let n = !1;
  const r = t.onError || Hd;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...fp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function kp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && oe(e)) {
    it(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || _p)(e), o = Vo[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = wp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ja(a);
    return s ? i : Vo[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Vo[n];
      return r || (Vo[n] = ja(e));
    } else
      return ja(e);
  }
}
const Hn = {
  INVALID_ARGUMENT: Ud,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Tp = 24;
function Wn(e) {
  return ya(e, null, void 0);
}
function $s(e, t) {
  return t.locale != null ? Ul(t.locale) : Ul(e.locale);
}
let Ua;
function Ul(e) {
  if (oe(e))
    return e;
  if (Qe(e)) {
    if (e.resolvedOnce && Ua != null)
      return Ua;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Bd(t))
        throw Wn(Hn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ua = t;
    } else
      throw Wn(Hn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Wn(Hn.NOT_SUPPORT_LOCALE_TYPE);
}
function Sp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ct(t) ? t : Re(t) ? Object.keys(t) : oe(t) ? [t] : [n]
  ])];
}
function nu(e, t, n) {
  const r = oe(n) ? n : oa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; ct(s); )
      s = Hl(a, s, t);
    const i = ct(t) || !Ie(t) ? t : t.default ? t.default : null;
    s = oe(i) ? [i] : i, ct(s) && Hl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Hl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && it(r); o++) {
    const a = t[o];
    oe(a) && (r = Ep(e, t[o], n));
  }
  return r;
}
function Ep(e, t, n) {
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
    e.push(o), (ct(n) || Ie(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const dr = [];
dr[
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
dr[
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
dr[
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
dr[
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
dr[
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
dr[
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
dr[
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
const Ap = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Op(e) {
  return Ap.test(e);
}
function Lp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ip(e) {
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
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Op(t) ? Lp(t) : "*" + t;
}
function xp(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, f, m;
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
      if (l = Ip(a), m = dr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = p[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Wl = /* @__PURE__ */ new Map();
function Pp(e, t) {
  return Re(e) ? e[t] : null;
}
function Np(e, t) {
  if (!Re(e))
    return null;
  let n = Wl.get(t);
  if (n || (n = xp(t), n && Wl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (tu.includes(s) && In(o))
      return null;
    const i = o[s];
    if (i === void 0 || Qe(o))
      return null;
    o = i, a++;
  }
  return o;
}
const $p = "11.2.2", _a = -1, oa = "en-US", Gl = "", Kl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Mp() {
  return {
    upper: (e, t) => t === "text" && oe(e) ? e.toUpperCase() : t === "vnode" && Re(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && oe(e) ? e.toLowerCase() : t === "vnode" && Re(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && oe(e) ? Kl(e) : t === "vnode" && Re(e) && "__v_isVNode" in e ? Kl(e.children) : e
  };
}
let ru;
function Dp(e) {
  ru = e;
}
let ou;
function Fp(e) {
  ou = e;
}
let au;
function zp(e) {
  au = e;
}
let su = null;
const ql = (e) => {
  su = e;
}, Bp = () => su;
let Yl = 0;
function Vp(e = {}) {
  const t = Qe(e.onWarn) ? e.onWarn : Pd, n = oe(e.version) ? e.version : $p, r = oe(e.locale) || Qe(e.locale) ? e.locale : oa, o = Qe(r) ? oa : r, a = ct(e.fallbackLocale) || Ie(e.fallbackLocale) || oe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Ie(e.messages) ? e.messages : Ha(o), i = Ie(e.datetimeFormats) ? e.datetimeFormats : Ha(o), l = Ie(e.numberFormats) ? e.numberFormats : Ha(o), u = At(Be(), e.modifiers, Mp()), f = e.pluralRules || Be(), m = Qe(e.missing) ? e.missing : null, p = it(e.missingWarn) || ra(e.missingWarn) ? e.missingWarn : !0, v = it(e.fallbackWarn) || ra(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, S = Qe(e.postTranslation) ? e.postTranslation : null, d = Ie(e.processor) ? e.processor : null, C = it(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, E = Qe(e.messageCompiler) ? e.messageCompiler : ru, y = Qe(e.messageResolver) ? e.messageResolver : ou || Pp, k = Qe(e.localeFallbacker) ? e.localeFallbacker : au || Sp, O = Re(e.fallbackContext) ? e.fallbackContext : void 0, W = e, G = Re(W.__datetimeFormatters) ? W.__datetimeFormatters : /* @__PURE__ */ new Map(), te = Re(W.__numberFormatters) ? W.__numberFormatters : /* @__PURE__ */ new Map(), de = Re(W.__meta) ? W.__meta : {};
  Yl++;
  const ne = {
    version: n,
    cid: Yl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: f,
    missing: m,
    missingWarn: p,
    fallbackWarn: v,
    fallbackFormat: h,
    unresolving: g,
    postTranslation: S,
    processor: d,
    warnHtmlMessage: C,
    escapeParameter: L,
    messageCompiler: E,
    messageResolver: y,
    localeFallbacker: k,
    fallbackContext: O,
    onWarn: t,
    __meta: de
  };
  return ne.datetimeFormats = i, ne.numberFormats = l, ne.__datetimeFormatters = G, ne.__numberFormatters = te, ne;
}
const Ha = (e) => ({ [e]: Be() });
function Ms(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return oe(i) ? i : t;
  } else
    return t;
}
function Jr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function jp(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Up(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (jp(e, t[r]))
      return !0;
  return !1;
}
function Zl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, f, m] = ss(...t), p = it(f.missingWarn) ? f.missingWarn : e.missingWarn;
  it(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part, h = $s(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!oe(l) || l === "")
    return new Intl.DateTimeFormat(h, m).format(u);
  let S = {}, d, C = null;
  const L = "datetime format";
  for (let k = 0; k < g.length && (d = g[k], S = n[d] || {}, C = S[l], !Ie(C)); k++)
    Ms(e, l, d, p, L);
  if (!Ie(C) || !oe(d))
    return r ? _a : l;
  let E = `${d}__${l}`;
  ba(m) || (E = `${E}__${JSON.stringify(m)}`);
  let y = i.get(E);
  return y || (y = new Intl.DateTimeFormat(d, At({}, C, m)), i.set(E, y)), v ? y.formatToParts(u) : y.format(u);
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
function ss(...e) {
  const [t, n, r, o] = e, a = Be();
  let s = Be(), i;
  if (oe(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Wn(Hn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Wn(Hn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Md(t)) {
    if (isNaN(t.getTime()))
      throw Wn(Hn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (_t(t))
    i = t;
  else
    throw Wn(Hn.INVALID_ARGUMENT);
  return oe(n) ? a.key = n : Ie(n) && Object.keys(n).forEach((l) => {
    lu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), oe(r) ? a.locale = r : Ie(r) && (s = r), Ie(o) && (s = o), [a.key || "", i, a, s];
}
function Xl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Ql(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, f, m] = ls(...t), p = it(f.missingWarn) ? f.missingWarn : e.missingWarn;
  it(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part, h = $s(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!oe(l) || l === "")
    return new Intl.NumberFormat(h, m).format(u);
  let S = {}, d, C = null;
  const L = "number format";
  for (let k = 0; k < g.length && (d = g[k], S = n[d] || {}, C = S[l], !Ie(C)); k++)
    Ms(e, l, d, p, L);
  if (!Ie(C) || !oe(d))
    return r ? _a : l;
  let E = `${d}__${l}`;
  ba(m) || (E = `${E}__${JSON.stringify(m)}`);
  let y = i.get(E);
  return y || (y = new Intl.NumberFormat(d, At({}, C, m)), i.set(E, y)), v ? y.formatToParts(u) : y.format(u);
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
function ls(...e) {
  const [t, n, r, o] = e, a = Be();
  let s = Be();
  if (!_t(t))
    throw Wn(Hn.INVALID_ARGUMENT);
  const i = t;
  return oe(n) ? a.key = n : Ie(n) && Object.keys(n).forEach((l) => {
    iu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), oe(r) ? a.locale = r : Ie(r) && (s = r), Ie(o) && (s = o), [a.key || "", i, a, s];
}
function Jl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Hp = (e) => e, Wp = (e) => "", Gp = "text", Kp = (e) => e.length === 0 ? "" : xs(e), qp = Vd;
function ei(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Yp(e) {
  const t = _t(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (_t(e.named.count) || _t(e.named.n)) ? _t(e.named.count) ? e.named.count : _t(e.named.n) ? e.named.n : t : t;
}
function Zp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Xp(e = {}) {
  const t = e.locale, n = Yp(e), r = Re(e.pluralRules) && oe(t) && Qe(e.pluralRules[t]) ? e.pluralRules[t] : ei, o = Re(e.pluralRules) && oe(t) && Qe(e.pluralRules[t]) ? ei : void 0, a = (d) => d[r(n, d.length, o)], s = e.list || [], i = (d) => s[d], l = e.named || Be();
  _t(e.pluralIndex) && Zp(n, l);
  const u = (d) => l[d];
  function f(d, C) {
    const L = Qe(e.messages) ? e.messages(d, !!C) : Re(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Wp);
  }
  const m = (d) => e.modifiers ? e.modifiers[d] : Hp, p = Ie(e.processor) && Qe(e.processor.normalize) ? e.processor.normalize : Kp, v = Ie(e.processor) && Qe(e.processor.interpolate) ? e.processor.interpolate : qp, h = Ie(e.processor) && oe(e.processor.type) ? e.processor.type : Gp, S = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...C) => {
      const [L, E] = C;
      let y = "text", k = "";
      C.length === 1 ? Re(L) ? (k = L.modifier || k, y = L.type || y) : oe(L) && (k = L || k) : C.length === 2 && (oe(L) && (k = L || k), oe(E) && (y = E || y));
      const O = f(d, !0)(S), W = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && ct(O) && k ? O[0] : O
      );
      return k ? m(k)(W, y) : W;
    },
    message: f,
    type: h,
    interpolate: v,
    normalize: p,
    values: At(Be(), s, l)
  };
  return S;
}
const ti = () => "", Kn = (e) => Qe(e);
function ni(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = is(...t), f = it(u.missingWarn) ? u.missingWarn : e.missingWarn, m = it(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = it(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, h = oe(u.default) || it(u.default) ? it(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (oe(h) || Qe(h)), S = $s(e, u);
  p && Qp(u);
  let [d, C, L] = v ? [
    l,
    S,
    i[S] || Be()
  ] : cu(e, l, S, s, m, f), E = d, y = l;
  if (!v && !(oe(E) || In(E) || Kn(E)) && g && (E = h, y = E), !v && (!(oe(E) || In(E) || Kn(E)) || !oe(C)))
    return o ? _a : l;
  let k = !1;
  const O = () => {
    k = !0;
  }, W = Kn(E) ? E : uu(e, l, C, E, y, O);
  if (k)
    return E;
  const G = tm(e, C, L, u), te = Xp(G), de = Jp(e, W, te);
  let ne = r ? r(de, l) : de;
  return p && oe(ne) && (ne = Fd(ne)), ne;
}
function Qp(e) {
  ct(e.list) ? e.list = e.list.map((t) => oe(t) ? Dl(t) : t) : Re(e.named) && Object.keys(e.named).forEach((t) => {
    oe(e.named[t]) && (e.named[t] = Dl(e.named[t]));
  });
}
function cu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let m = Be(), p, v = null;
  const h = "translate";
  for (let g = 0; g < f.length && (p = f[g], m = s[p] || Be(), (v = l(m, t)) === null && (v = m[t]), !(oe(v) || In(v) || Kn(v))); g++)
    if (!Up(p, f)) {
      const S = Ms(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        a,
        h
      );
      S !== t && (v = S);
    }
  return [v, p, m];
}
function uu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Kn(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, em(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Jp(e, t, n) {
  return t(n);
}
function is(...e) {
  const [t, n, r] = e, o = Be();
  if (!oe(t) && !_t(t) && !Kn(t) && !In(t))
    throw Wn(Hn.INVALID_ARGUMENT);
  const a = _t(t) ? String(t) : (Kn(t), t);
  return _t(n) ? o.plural = n : oe(n) ? o.default = n : Ie(n) && !ba(n) ? o.named = n : ct(n) && (o.list = n), _t(r) ? o.plural = r : oe(r) ? o.default = r : Ie(r) && At(o, r), [a, o];
}
function em(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Nd(t, n, s)
  };
}
function tm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (v, h) => {
      let g = s(n, v);
      if (g == null && (f || h)) {
        const [, , S] = cu(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          i,
          l,
          u
        );
        g = s(S, v);
      }
      if (oe(g) || In(g)) {
        let S = !1;
        const C = uu(e, v, t, g, v, () => {
          S = !0;
        });
        return S ? ti : C;
      } else return Kn(g) ? g : ti;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), _t(r.plural) && (p.pluralIndex = r.plural), p;
}
dp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const nm = "11.2.2";
function rm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Xo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Xo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Xo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const jr = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Tp,
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
function yo(e, ...t) {
  return ya(e, null, void 0);
}
const cs = /* @__PURE__ */ Sr("__translateVNode"), us = /* @__PURE__ */ Sr("__datetimeParts"), fs = /* @__PURE__ */ Sr("__numberParts"), om = Sr("__setPluralRules"), fu = /* @__PURE__ */ Sr("__injectWithOption"), ds = /* @__PURE__ */ Sr("__dispose");
function _o(e) {
  if (!Re(e) || In(e))
    return e;
  for (const t in e)
    if (pn(e, t))
      if (!t.includes("."))
        Re(e[t]) && _o(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Be()), !Re(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (In(o) ? tu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !In(o)) {
          const s = o[n[r]];
          Re(s) && _o(s);
        }
      }
  return e;
}
function du(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Ie(n) ? n : ct(r) ? Be() : { [e]: Be() };
  if (ct(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Be(), Qo(u, s[l])) : Qo(u, s);
    } else
      oe(i) && Qo(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      pn(s, i) && _o(s[i]);
  return s;
}
function am(e) {
  return e.type;
}
function sm(e, t, n) {
  let r = Re(t.messages) ? t.messages : Be();
  "__i18nGlobal" in n && (r = du(e.locale.value, {
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
function ri(e) {
  return N(Uc, null, e, 0);
}
function pu() {
  return "currentInstance" in Va ? Va["currentInstance"] : Va.getCurrentInstance();
}
const oi = () => [], lm = () => !1;
let ai = 0;
function si(e) {
  return (t, n, r, o) => e(n, r, pu() || void 0, o);
}
function im(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = $l ? j : ir;
  let s = it(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : oe(e.locale) ? e.locale : oa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : oe(e.fallbackLocale) || ct(e.fallbackLocale) || Ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(du(i.value, e)), f = a(Ie(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Ie(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : it(e.missingWarn) || ra(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : it(e.fallbackWarn) || ra(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : it(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, S = Qe(e.missing) ? e.missing : null, d = Qe(e.missing) ? si(e.missing) : null, C = Qe(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : it(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const y = t ? t.modifiers : Ie(e.modifiers) ? e.modifiers : {};
  let k = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && ql(null);
    const T = {
      version: nm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: y,
      pluralRules: k,
      missing: d === null ? void 0 : d,
      missingWarn: p,
      fallbackWarn: v,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: L,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = f.value, T.numberFormats = m.value, T.__datetimeFormatters = Ie(O) ? O.__datetimeFormatters : void 0, T.__numberFormatters = Ie(O) ? O.__numberFormatters : void 0;
    const M = Vp(T);
    return r && ql(M), M;
  })(), Jr(O, i.value, l.value);
  function G() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      m.value
    ];
  }
  const te = I({
    get: () => i.value,
    set: (T) => {
      O.locale = T, i.value = T;
    }
  }), de = I({
    get: () => l.value,
    set: (T) => {
      O.fallbackLocale = T, l.value = T, Jr(O, i.value, T);
    }
  }), ne = I(() => u.value), ve = /* @__PURE__ */ I(() => f.value), pe = /* @__PURE__ */ I(() => m.value);
  function P() {
    return Qe(C) ? C : null;
  }
  function $(T) {
    C = T, O.postTranslation = T;
  }
  function B() {
    return S;
  }
  function ie(T) {
    T !== null && (d = si(T)), S = T, O.missing = d;
  }
  const ee = (T, M, me, Ce, Ye, It) => {
    G();
    let He;
    try {
      r || (O.fallbackContext = t ? Bp() : void 0), He = T(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (me !== "translate exists" && // for not `te` (e.g `t`)
    _t(He) && He === _a || me === "translate exists" && !He) {
      const [yn, mr] = M();
      return t && h ? Ce(t) : Ye(yn);
    } else {
      if (It(He))
        return He;
      throw yo(jr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function _e(...T) {
    return ee((M) => Reflect.apply(ni, null, [M, ...T]), () => is(...T), "translate", (M) => Reflect.apply(M.t, M, [...T]), (M) => M, (M) => oe(M));
  }
  function X(...T) {
    const [M, me, Ce] = T;
    if (Ce && !Re(Ce))
      throw yo(jr.INVALID_ARGUMENT);
    return _e(M, me, At({ resolvedMessage: !0 }, Ce || {}));
  }
  function Ve(...T) {
    return ee((M) => Reflect.apply(Zl, null, [M, ...T]), () => ss(...T), "datetime format", (M) => Reflect.apply(M.d, M, [...T]), () => Gl, (M) => oe(M) || ct(M));
  }
  function Oe(...T) {
    return ee((M) => Reflect.apply(Ql, null, [M, ...T]), () => ls(...T), "number format", (M) => Reflect.apply(M.n, M, [...T]), () => Gl, (M) => oe(M) || ct(M));
  }
  function ke(T) {
    return T.map((M) => oe(M) || _t(M) || it(M) ? ri(String(M)) : M);
  }
  const Se = {
    normalize: ke,
    interpolate: (T) => T,
    type: "vnode"
  };
  function et(...T) {
    return ee((M) => {
      let me;
      const Ce = M;
      try {
        Ce.processor = Se, me = Reflect.apply(ni, null, [Ce, ...T]);
      } finally {
        Ce.processor = null;
      }
      return me;
    }, () => is(...T), "translate", (M) => M[cs](...T), (M) => [ri(M)], (M) => ct(M));
  }
  function ce(...T) {
    return ee((M) => Reflect.apply(Ql, null, [M, ...T]), () => ls(...T), "number format", (M) => M[fs](...T), oi, (M) => oe(M) || ct(M));
  }
  function tt(...T) {
    return ee((M) => Reflect.apply(Zl, null, [M, ...T]), () => ss(...T), "datetime format", (M) => M[us](...T), oi, (M) => oe(M) || ct(M));
  }
  function ft(T) {
    k = T, O.pluralRules = k;
  }
  function Ue(T, M) {
    return ee(() => {
      if (!T)
        return !1;
      const me = oe(M) ? M : i.value, Ce = gt(me), Ye = O.messageResolver(Ce, T);
      return In(Ye) || Kn(Ye) || oe(Ye);
    }, () => [T], "translate exists", (me) => Reflect.apply(me.te, me, [T, M]), lm, (me) => it(me));
  }
  function Tt(T) {
    let M = null;
    const me = nu(O, l.value, i.value);
    for (let Ce = 0; Ce < me.length; Ce++) {
      const Ye = u.value[me[Ce]] || {}, It = O.messageResolver(Ye, T);
      if (It != null) {
        M = It;
        break;
      }
    }
    return M;
  }
  function at(T) {
    const M = Tt(T);
    return M ?? (t ? t.tm(T) || {} : {});
  }
  function gt(T) {
    return u.value[T] || {};
  }
  function st(T, M) {
    if (o) {
      const me = { [T]: M };
      for (const Ce in me)
        pn(me, Ce) && _o(me[Ce]);
      M = me[T];
    }
    u.value[T] = M, O.messages = u.value;
  }
  function $e(T, M) {
    u.value[T] = u.value[T] || {};
    const me = { [T]: M };
    if (o)
      for (const Ce in me)
        pn(me, Ce) && _o(me[Ce]);
    M = me[T], Qo(M, u.value[T]), O.messages = u.value;
  }
  function vt(T) {
    return f.value[T] || {};
  }
  function w(T, M) {
    f.value[T] = M, O.datetimeFormats = f.value, Xl(O, T, M);
  }
  function A(T, M) {
    f.value[T] = At(f.value[T] || {}, M), O.datetimeFormats = f.value, Xl(O, T, M);
  }
  function F(T) {
    return m.value[T] || {};
  }
  function Y(T, M) {
    m.value[T] = M, O.numberFormats = m.value, Jl(O, T, M);
  }
  function Ee(T, M) {
    m.value[T] = At(m.value[T] || {}, M), O.numberFormats = m.value, Jl(O, T, M);
  }
  ai++, t && $l && (be(t.locale, (T) => {
    s && (i.value = T, O.locale = T, Jr(O, i.value, l.value));
  }), be(t.fallbackLocale, (T) => {
    s && (l.value = T, O.fallbackLocale = T, Jr(O, i.value, l.value));
  }));
  const ue = {
    id: ai,
    locale: te,
    fallbackLocale: de,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(T) {
      s = T, T && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Jr(O, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ne,
    get modifiers() {
      return y;
    },
    get pluralRules() {
      return k || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(T) {
      p = T, O.missingWarn = p;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(T) {
      v = T, O.fallbackWarn = v;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(T) {
      h = T;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(T) {
      g = T, O.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(T) {
      L = T, O.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(T) {
      E = T, O.escapeParameter = T;
    },
    t: _e,
    getLocaleMessage: gt,
    setLocaleMessage: st,
    mergeLocaleMessage: $e,
    getPostTranslationHandler: P,
    setPostTranslationHandler: $,
    getMissingHandler: B,
    setMissingHandler: ie,
    [om]: ft
  };
  return ue.datetimeFormats = ve, ue.numberFormats = pe, ue.rt = X, ue.te = Ue, ue.tm = at, ue.d = Ve, ue.n = Oe, ue.getDateTimeFormat = vt, ue.setDateTimeFormat = w, ue.mergeDateTimeFormat = A, ue.getNumberFormat = F, ue.setNumberFormat = Y, ue.mergeNumberFormat = Ee, ue[fu] = n, ue[cs] = et, ue[us] = tt, ue[fs] = ce, ue;
}
const Ds = {
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
function cm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Nt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Be());
}
function mu() {
  return Nt;
}
At({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => _t(e) || !isNaN(e)
  }
}, Ds);
function um(e) {
  return ct(e) && !oe(e[0]);
}
function hu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Be();
    e.locale && (s.locale = e.locale), oe(e.format) ? s.key = e.format : Re(e.format) && (oe(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((p, v) => n.includes(v) ? At(Be(), p, { [v]: e.format[v] }) : p, Be()));
    const l = r(e.value, s, i);
    let u = [s.key];
    ct(l) ? u = l.map((p, v) => {
      const h = o[p.type], g = h ? h({ [p.type]: p.value, index: v, parts: l }) : [p.value];
      return um(g) && (g[0].key = `${p.type}-${v}`), g;
    }) : oe(l) && (u = [l]);
    const f = At(Be(), a), m = oe(e.tag) || Re(e.tag) ? e.tag : mu();
    return jc(m, f, u);
  };
}
At({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ds);
const fm = /* @__PURE__ */ Sr("global-vue-i18n");
function Co(e = {}) {
  const t = pu();
  if (t == null)
    throw yo(jr.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw yo(jr.NOT_INSTALLED);
  const n = dm(t), r = mm(n), o = am(t), a = pm(e, o);
  if (a === "global")
    return sm(r, e, o), r;
  if (a === "parent") {
    let l = hm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = At({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = im(l), s.__composerExtend && (i[ds] = s.__composerExtend(i)), vm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function dm(e) {
  const t = Fe(e.isCE ? fm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw yo(e.isCE ? jr.NOT_INSTALLED_WITH_PROVIDE : jr.UNEXPECTED_ERROR);
  return t;
}
function pm(e, t) {
  return ba(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function mm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function hm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = gm(t, n);
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
function gm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function vm(e, t, n) {
  ut(() => {
  }, t), va(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ds];
    o && (o(), delete r[ds]);
  }, t);
}
At({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ds);
rm();
Dp(kp);
Fp(Np);
zp(nu);
function Fs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Er = Fs();
function gu(e) {
  Er = e;
}
var co = { exec: () => null };
function Le(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Bt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var bm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Bt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, ym = /^(?:[ \t]*(?:\n|$))+/, _m = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, wm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ao = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, km = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, zs = /(?:[*+-]|\d{1,9}[.)])/, vu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, bu = Le(vu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Tm = Le(vu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Sm = /^[^\n]+/, Vs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Em = Le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Vs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Cm = Le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zs).getRegex(), wa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", js = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Am = Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", js).replace("tag", wa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), yu = Le(Bs).replace("hr", Ao).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex(), Om = Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", yu).getRegex(), Us = { blockquote: Om, code: _m, def: Em, fences: wm, heading: km, hr: Ao, html: Am, lheading: bu, list: Cm, newline: ym, paragraph: yu, table: co, text: Sm }, li = Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ao).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex(), Lm = { ...Us, lheading: Tm, table: li, paragraph: Le(Bs).replace("hr", Ao).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", li).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex() }, Im = { ...Us, html: Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", js).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: co, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Le(Bs).replace("hr", Ao).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", bu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Rm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, xm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, _u = /^( {2,}|\\)\n(?!\s*$)/, Pm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ka = /[\p{P}\p{S}]/u, Hs = /[\s\p{P}\p{S}]/u, wu = /[^\s\p{P}\p{S}]/u, Nm = Le(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Hs).getRegex(), ku = /(?!~)[\p{P}\p{S}]/u, $m = /(?!~)[\s\p{P}\p{S}]/u, Mm = /(?:[^\s\p{P}\p{S}]|~)/u, Dm = Le(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", bm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Tu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Fm = Le(Tu, "u").replace(/punct/g, ka).getRegex(), zm = Le(Tu, "u").replace(/punct/g, ku).getRegex(), Su = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Bm = Le(Su, "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Hs).replace(/punct/g, ka).getRegex(), Vm = Le(Su, "gu").replace(/notPunctSpace/g, Mm).replace(/punctSpace/g, $m).replace(/punct/g, ku).getRegex(), jm = Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Hs).replace(/punct/g, ka).getRegex(), Um = Le(/\\(punct)/, "gu").replace(/punct/g, ka).getRegex(), Hm = Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Wm = Le(js).replace("(?:-->|$)", "-->").getRegex(), Gm = Le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Wm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), aa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Km = Le(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", aa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Eu = Le(/^!?\[(label)\]\[(ref)\]/).replace("label", aa).replace("ref", Vs).getRegex(), Cu = Le(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vs).getRegex(), qm = Le("reflink|nolink(?!\\()", "g").replace("reflink", Eu).replace("nolink", Cu).getRegex(), ii = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ws = { _backpedal: co, anyPunctuation: Um, autolink: Hm, blockSkip: Dm, br: _u, code: xm, del: co, emStrongLDelim: Fm, emStrongRDelimAst: Bm, emStrongRDelimUnd: jm, escape: Rm, link: Km, nolink: Cu, punctuation: Nm, reflink: Eu, reflinkSearch: qm, tag: Gm, text: Pm, url: co }, Ym = { ...Ws, link: Le(/^!?\[(label)\]\((.*?)\)/).replace("label", aa).getRegex(), reflink: Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", aa).getRegex() }, ps = { ...Ws, emStrongRDelimAst: Vm, emStrongLDelim: zm, url: Le(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ii).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Le(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ii).getRegex() }, Zm = { ...ps, br: Le(_u).replace("{2,}", "*").getRegex(), text: Le(ps.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, jo = { normal: Us, gfm: Lm, pedantic: Im }, eo = { normal: Ws, gfm: ps, breaks: Zm, pedantic: Ym }, Xm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ci = (e) => Xm[e];
function zn(e, t) {
  if (t) {
    if (Bt.escapeTest.test(e)) return e.replace(Bt.escapeReplace, ci);
  } else if (Bt.escapeTestNoEncode.test(e)) return e.replace(Bt.escapeReplaceNoEncode, ci);
  return e;
}
function ui(e) {
  try {
    e = encodeURI(e).replace(Bt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function fi(e, t) {
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
function to(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Qm(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function di(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function Jm(e, t, n) {
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
var sa = class {
  constructor(e) {
    ze(this, "options");
    ze(this, "rules");
    ze(this, "lexer");
    this.options = e || Er;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : to(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Jm(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = to(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: to(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = to(t[0], `
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
        let l = !1, u = "", f = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (g) => " ".repeat(3 * g.length)), p = e.split(`
`, 1)[0], v = !m.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, f = m.trimStart()) : v ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, f = m.slice(h), h += t[1].length), v && this.rules.other.blankLine.test(p) && (u += p + `
`, e = e.substring(p.length + 1), l = !0), !l) {
          let g = this.rules.other.nextBulletRegex(h), S = this.rules.other.hrRegex(h), d = this.rules.other.fencesBeginRegex(h), C = this.rules.other.headingBeginRegex(h), L = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let E = e.split(`
`, 1)[0], y;
            if (p = E, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), y = p) : y = p.replace(this.rules.other.tabCharGlobal, "    "), d.test(p) || C.test(p) || L.test(p) || g.test(p) || S.test(p)) break;
            if (y.search(this.rules.other.nonSpaceChar) >= h || !p.trim()) f += `
` + y.slice(h);
            else {
              if (v || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || d.test(m) || C.test(m) || S.test(m)) break;
              f += `
` + p;
            }
            !v && !p.trim() && (v = !0), u += E + `
`, e = e.substring(E.length + 1), m = y.slice(h);
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
        let a = to(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Qm(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), di(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return di(n, o, n[0], this.lexer, this.rules);
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
}, fn = class ms {
  constructor(t) {
    ze(this, "tokens");
    ze(this, "options");
    ze(this, "state");
    ze(this, "inlineQueue");
    ze(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Er, this.options.tokenizer = this.options.tokenizer || new sa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Bt, block: jo.normal, inline: eo.normal };
    this.options.pedantic ? (n.block = jo.pedantic, n.inline = eo.pedantic) : this.options.gfm && (n.block = jo.gfm, this.options.breaks ? n.inline = eo.breaks : n.inline = eo.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: jo, inline: eo };
  }
  static lex(t, n) {
    return new ms(n).lex(t);
  }
  static lexInline(t, n) {
    return new ms(n).inlineTokens(t);
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
        let f = 1 / 0, m = t.slice(1), p;
        this.options.extensions.startInline.forEach((v) => {
          p = v.call({ lexer: this }, m), typeof p == "number" && p >= 0 && (f = Math.min(f, p));
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
}, la = class {
  constructor(t) {
    ze(this, "options");
    ze(this, "parser");
    this.options = t || Er;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Bt.notSpaceStart)?.[0], a = t.replace(Bt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + zn(o) + '">' + (r ? a : zn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : zn(a, !0)) + `</code></pre>
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
    return `<code>${zn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = ui(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + zn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = ui(t);
    if (a === null) return zn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${zn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : zn(t.text);
  }
}, Gs = class {
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
}, dn = class hs {
  constructor(t) {
    ze(this, "options");
    ze(this, "renderer");
    ze(this, "textRenderer");
    this.options = t || Er, this.options.renderer = this.options.renderer || new la(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Gs();
  }
  static parse(t, n) {
    return new hs(n).parse(t);
  }
  static parseInline(t, n) {
    return new hs(n).parseInline(t);
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
}, Zo, lo = (Zo = class {
  constructor(e) {
    ze(this, "options");
    ze(this, "block");
    this.options = e || Er;
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
    return this.block ? dn.parse : dn.parseInline;
  }
}, ze(Zo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), ze(Zo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Zo), eh = class {
  constructor(...t) {
    ze(this, "defaults", Fs());
    ze(this, "options", this.setOptions);
    ze(this, "parse", this.parseMarkdown(!0));
    ze(this, "parseInline", this.parseMarkdown(!1));
    ze(this, "Parser", dn);
    ze(this, "Renderer", la);
    ze(this, "TextRenderer", Gs);
    ze(this, "Lexer", fn);
    ze(this, "Tokenizer", sa);
    ze(this, "Hooks", lo);
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
        let a = this.defaults.renderer || new la(this.defaults);
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
        let a = this.defaults.tokenizer || new sa(this.defaults);
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
        let a = this.defaults.hooks || new lo();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          lo.passThroughHooks.has(s) ? a[i] = (f) => {
            if (this.defaults.async && lo.passThroughHooksRespectAsync.has(s)) return (async () => {
              let p = await l.call(a, f);
              return u.call(a, p);
            })();
            let m = l.call(a, f);
            return u.call(a, m);
          } : a[i] = (...f) => {
            if (this.defaults.async) return (async () => {
              let p = await l.apply(a, f);
              return p === !1 && (p = await u.apply(a, f)), p;
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
    return fn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return dn.parse(t, n ?? this.defaults);
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
        let f = await (a.hooks ? await a.hooks.provideParser() : t ? dn.parse : dn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(f) : f;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? fn.lex : fn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? dn.parse : dn.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + zn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, wr = new eh();
function De(e, t) {
  return wr.parse(e, t);
}
De.options = De.setOptions = function(e) {
  return wr.setOptions(e), De.defaults = wr.defaults, gu(De.defaults), De;
};
De.getDefaults = Fs;
De.defaults = Er;
De.use = function(...e) {
  return wr.use(...e), De.defaults = wr.defaults, gu(De.defaults), De;
};
De.walkTokens = function(e, t) {
  return wr.walkTokens(e, t);
};
De.parseInline = wr.parseInline;
De.Parser = dn;
De.parser = dn.parse;
De.Renderer = la;
De.TextRenderer = Gs;
De.Lexer = fn;
De.lexer = fn.lex;
De.Tokenizer = sa;
De.Hooks = lo;
De.parse = De;
De.options;
De.setOptions;
De.use;
De.walkTokens;
De.parseInline;
dn.parse;
fn.lex;
const th = ["disabled"], nh = {
  key: 0,
  class: "custom-button__loading"
}, rh = /* @__PURE__ */ re({
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
    return (n, r) => (R(), H("button", {
      class: U([
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
      e.loading ? (R(), H("div", nh, r[1] || (r[1] = [
        _(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            _("circle", {
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
      ]))) : J("v-if", !0),
      ge(n.$slots, "default", {}, void 0, !0)
    ], 10, th));
  }
}), Ks = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Bn = /* @__PURE__ */ Ks(rh, [["__scopeId", "data-v-9497085f"]]), Au = Symbol(), Jo = "el", oh = "is-", br = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Ou = Symbol("namespaceContextKey"), qs = (e) => {
  const t = e || (Vt() ? Fe(Ou, j(Jo)) : j(Jo));
  return I(() => c(t) || Jo);
}, mt = (e, t) => {
  const n = qs(t);
  return {
    namespace: n,
    b: (g = "") => br(n.value, e, g, "", ""),
    e: (g) => g ? br(n.value, e, "", g, "") : "",
    m: (g) => g ? br(n.value, e, "", "", g) : "",
    be: (g, S) => g && S ? br(n.value, e, g, S, "") : "",
    em: (g, S) => g && S ? br(n.value, e, "", g, S) : "",
    bm: (g, S) => g && S ? br(n.value, e, g, "", S) : "",
    bem: (g, S, d) => g && S && d ? br(n.value, e, g, S, d) : "",
    is: (g, ...S) => {
      const d = S.length >= 1 ? S[0] : !0;
      return g && d ? `${oh}${g}` : "";
    },
    cssVar: (g) => {
      const S = {};
      for (const d in g)
        g[d] && (S[`--${n.value}-${d}`] = g[d]);
      return S;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const S = {};
      for (const d in g)
        g[d] && (S[`--${n.value}-${e}-${d}`] = g[d]);
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
const wo = () => {
}, ah = Object.prototype.hasOwnProperty, pi = (e, t) => ah.call(e, t), An = Array.isArray, Je = (e) => typeof e == "function", $t = (e) => typeof e == "string", Xt = (e) => e !== null && typeof e == "object", mi = (e) => (Xt(e) || Je(e)) && Je(e.then) && Je(e.catch), sh = Object.prototype.toString, lh = (e) => sh.call(e), ih = (e) => lh(e) === "[object Object]";
var Lu = typeof global == "object" && global && global.Object === Object && global, ch = typeof self == "object" && self && self.Object === Object && self, Dn = Lu || ch || Function("return this")(), Nn = Dn.Symbol, Iu = Object.prototype, uh = Iu.hasOwnProperty, fh = Iu.toString, no = Nn ? Nn.toStringTag : void 0;
function dh(e) {
  var t = uh.call(e, no), n = e[no];
  try {
    e[no] = void 0;
    var r = !0;
  } catch {
  }
  var o = fh.call(e);
  return r && (t ? e[no] = n : delete e[no]), o;
}
var ph = Object.prototype, mh = ph.toString;
function hh(e) {
  return mh.call(e);
}
var gh = "[object Null]", vh = "[object Undefined]", hi = Nn ? Nn.toStringTag : void 0;
function Qr(e) {
  return e == null ? e === void 0 ? vh : gh : hi && hi in Object(e) ? dh(e) : hh(e);
}
function Ur(e) {
  return e != null && typeof e == "object";
}
var bh = "[object Symbol]";
function Ta(e) {
  return typeof e == "symbol" || Ur(e) && Qr(e) == bh;
}
function yh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var vn = Array.isArray, gi = Nn ? Nn.prototype : void 0, vi = gi ? gi.toString : void 0;
function Ru(e) {
  if (typeof e == "string")
    return e;
  if (vn(e))
    return yh(e, Ru) + "";
  if (Ta(e))
    return vi ? vi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var _h = /\s/;
function wh(e) {
  for (var t = e.length; t-- && _h.test(e.charAt(t)); )
    ;
  return t;
}
var kh = /^\s+/;
function Th(e) {
  return e && e.slice(0, wh(e) + 1).replace(kh, "");
}
function ur(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var bi = NaN, Sh = /^[-+]0x[0-9a-f]+$/i, Eh = /^0b[01]+$/i, Ch = /^0o[0-7]+$/i, Ah = parseInt;
function yi(e) {
  if (typeof e == "number")
    return e;
  if (Ta(e))
    return bi;
  if (ur(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ur(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Th(e);
  var n = Eh.test(e);
  return n || Ch.test(e) ? Ah(e.slice(2), n ? 2 : 8) : Sh.test(e) ? bi : +e;
}
function xu(e) {
  return e;
}
var Oh = "[object AsyncFunction]", Lh = "[object Function]", Ih = "[object GeneratorFunction]", Rh = "[object Proxy]";
function Pu(e) {
  if (!ur(e))
    return !1;
  var t = Qr(e);
  return t == Lh || t == Ih || t == Oh || t == Rh;
}
var Wa = Dn["__core-js_shared__"], _i = function() {
  var e = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xh(e) {
  return !!_i && _i in e;
}
var Ph = Function.prototype, Nh = Ph.toString;
function Cr(e) {
  if (e != null) {
    try {
      return Nh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $h = /[\\^$.*+?()[\]{}|]/g, Mh = /^\[object .+?Constructor\]$/, Dh = Function.prototype, Fh = Object.prototype, zh = Dh.toString, Bh = Fh.hasOwnProperty, Vh = RegExp(
  "^" + zh.call(Bh).replace($h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jh(e) {
  if (!ur(e) || xh(e))
    return !1;
  var t = Pu(e) ? Vh : Mh;
  return t.test(Cr(e));
}
function Uh(e, t) {
  return e?.[t];
}
function Ar(e, t) {
  var n = Uh(e, t);
  return jh(n) ? n : void 0;
}
var gs = Ar(Dn, "WeakMap");
function Hh(e, t, n) {
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
var Wh = 800, Gh = 16, Kh = Date.now;
function qh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Kh(), o = Gh - (r - n);
    if (n = r, o > 0) {
      if (++t >= Wh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Yh(e) {
  return function() {
    return e;
  };
}
var ia = function() {
  try {
    var e = Ar(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Zh = ia ? function(e, t) {
  return ia(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yh(t),
    writable: !0
  });
} : xu, Xh = qh(Zh);
function Qh(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Jh = 9007199254740991, eg = /^(?:0|[1-9]\d*)$/;
function Ys(e, t) {
  var n = typeof e;
  return t = t ?? Jh, !!t && (n == "number" || n != "symbol" && eg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function tg(e, t, n) {
  t == "__proto__" && ia ? ia(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Zs(e, t) {
  return e === t || e !== e && t !== t;
}
var ng = Object.prototype, rg = ng.hasOwnProperty;
function og(e, t, n) {
  var r = e[t];
  (!(rg.call(e, t) && Zs(r, n)) || n === void 0 && !(t in e)) && tg(e, t, n);
}
var wi = Math.max;
function ag(e, t, n) {
  return t = wi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = wi(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Hh(e, this, i);
  };
}
var sg = 9007199254740991;
function Xs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sg;
}
function lg(e) {
  return e != null && Xs(e.length) && !Pu(e);
}
var ig = Object.prototype;
function cg(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ig;
  return e === n;
}
function ug(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var fg = "[object Arguments]";
function ki(e) {
  return Ur(e) && Qr(e) == fg;
}
var Nu = Object.prototype, dg = Nu.hasOwnProperty, pg = Nu.propertyIsEnumerable, Qs = ki(/* @__PURE__ */ function() {
  return arguments;
}()) ? ki : function(e) {
  return Ur(e) && dg.call(e, "callee") && !pg.call(e, "callee");
};
function mg() {
  return !1;
}
var $u = typeof exports == "object" && exports && !exports.nodeType && exports, Ti = $u && typeof module == "object" && module && !module.nodeType && module, hg = Ti && Ti.exports === $u, Si = hg ? Dn.Buffer : void 0, gg = Si ? Si.isBuffer : void 0, vs = gg || mg, vg = "[object Arguments]", bg = "[object Array]", yg = "[object Boolean]", _g = "[object Date]", wg = "[object Error]", kg = "[object Function]", Tg = "[object Map]", Sg = "[object Number]", Eg = "[object Object]", Cg = "[object RegExp]", Ag = "[object Set]", Og = "[object String]", Lg = "[object WeakMap]", Ig = "[object ArrayBuffer]", Rg = "[object DataView]", xg = "[object Float32Array]", Pg = "[object Float64Array]", Ng = "[object Int8Array]", $g = "[object Int16Array]", Mg = "[object Int32Array]", Dg = "[object Uint8Array]", Fg = "[object Uint8ClampedArray]", zg = "[object Uint16Array]", Bg = "[object Uint32Array]", Ge = {};
Ge[xg] = Ge[Pg] = Ge[Ng] = Ge[$g] = Ge[Mg] = Ge[Dg] = Ge[Fg] = Ge[zg] = Ge[Bg] = !0;
Ge[vg] = Ge[bg] = Ge[Ig] = Ge[yg] = Ge[Rg] = Ge[_g] = Ge[wg] = Ge[kg] = Ge[Tg] = Ge[Sg] = Ge[Eg] = Ge[Cg] = Ge[Ag] = Ge[Og] = Ge[Lg] = !1;
function Vg(e) {
  return Ur(e) && Xs(e.length) && !!Ge[Qr(e)];
}
function jg(e) {
  return function(t) {
    return e(t);
  };
}
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports, uo = Mu && typeof module == "object" && module && !module.nodeType && module, Ug = uo && uo.exports === Mu, Ga = Ug && Lu.process, Ei = function() {
  try {
    var e = uo && uo.require && uo.require("util").types;
    return e || Ga && Ga.binding && Ga.binding("util");
  } catch {
  }
}(), Ci = Ei && Ei.isTypedArray, Du = Ci ? jg(Ci) : Vg, Hg = Object.prototype, Wg = Hg.hasOwnProperty;
function Gg(e, t) {
  var n = vn(e), r = !n && Qs(e), o = !n && !r && vs(e), a = !n && !r && !o && Du(e), s = n || r || o || a, i = s ? ug(e.length, String) : [], l = i.length;
  for (var u in e)
    Wg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ys(u, l))) && i.push(u);
  return i;
}
function Kg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var qg = Kg(Object.keys, Object), Yg = Object.prototype, Zg = Yg.hasOwnProperty;
function Xg(e) {
  if (!cg(e))
    return qg(e);
  var t = [];
  for (var n in Object(e))
    Zg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Fu(e) {
  return lg(e) ? Gg(e) : Xg(e);
}
var Qg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jg = /^\w*$/;
function Js(e, t) {
  if (vn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ta(e) ? !0 : Jg.test(e) || !Qg.test(e) || t != null && e in Object(t);
}
var ko = Ar(Object, "create");
function ev() {
  this.__data__ = ko ? ko(null) : {}, this.size = 0;
}
function tv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nv = "__lodash_hash_undefined__", rv = Object.prototype, ov = rv.hasOwnProperty;
function av(e) {
  var t = this.__data__;
  if (ko) {
    var n = t[e];
    return n === nv ? void 0 : n;
  }
  return ov.call(t, e) ? t[e] : void 0;
}
var sv = Object.prototype, lv = sv.hasOwnProperty;
function iv(e) {
  var t = this.__data__;
  return ko ? t[e] !== void 0 : lv.call(t, e);
}
var cv = "__lodash_hash_undefined__";
function uv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ko && t === void 0 ? cv : t, this;
}
function kr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
kr.prototype.clear = ev;
kr.prototype.delete = tv;
kr.prototype.get = av;
kr.prototype.has = iv;
kr.prototype.set = uv;
function fv() {
  this.__data__ = [], this.size = 0;
}
function Sa(e, t) {
  for (var n = e.length; n--; )
    if (Zs(e[n][0], t))
      return n;
  return -1;
}
var dv = Array.prototype, pv = dv.splice;
function mv(e) {
  var t = this.__data__, n = Sa(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : pv.call(t, n, 1), --this.size, !0;
}
function hv(e) {
  var t = this.__data__, n = Sa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gv(e) {
  return Sa(this.__data__, e) > -1;
}
function vv(e, t) {
  var n = this.__data__, r = Sa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function er(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
er.prototype.clear = fv;
er.prototype.delete = mv;
er.prototype.get = hv;
er.prototype.has = gv;
er.prototype.set = vv;
var To = Ar(Dn, "Map");
function bv() {
  this.size = 0, this.__data__ = {
    hash: new kr(),
    map: new (To || er)(),
    string: new kr()
  };
}
function yv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ea(e, t) {
  var n = e.__data__;
  return yv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _v(e) {
  var t = Ea(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function wv(e) {
  return Ea(this, e).get(e);
}
function kv(e) {
  return Ea(this, e).has(e);
}
function Tv(e, t) {
  var n = Ea(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function tr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tr.prototype.clear = bv;
tr.prototype.delete = _v;
tr.prototype.get = wv;
tr.prototype.has = kv;
tr.prototype.set = Tv;
var Sv = "Expected a function";
function el(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sv);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (el.Cache || tr)(), n;
}
el.Cache = tr;
var Ev = 500;
function Cv(e) {
  var t = el(e, function(r) {
    return n.size === Ev && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Av = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ov = /\\(\\)?/g, Lv = Cv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Av, function(n, r, o, a) {
    t.push(o ? a.replace(Ov, "$1") : r || n);
  }), t;
});
function Iv(e) {
  return e == null ? "" : Ru(e);
}
function Ca(e, t) {
  return vn(e) ? e : Js(e, t) ? [e] : Lv(Iv(e));
}
function Oo(e) {
  if (typeof e == "string" || Ta(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function tl(e, t) {
  t = Ca(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Oo(t[n++])];
  return n && n == r ? e : void 0;
}
function lr(e, t, n) {
  var r = e == null ? void 0 : tl(e, t);
  return r === void 0 ? n : r;
}
function zu(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ai = Nn ? Nn.isConcatSpreadable : void 0;
function Rv(e) {
  return vn(e) || Qs(e) || !!(Ai && e && e[Ai]);
}
function xv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Rv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? zu(o, i) : o[o.length] = i;
  }
  return o;
}
function Pv(e) {
  var t = e == null ? 0 : e.length;
  return t ? xv(e) : [];
}
function Nv(e) {
  return Xh(ag(e, void 0, Pv), e + "");
}
function sr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return vn(e) ? e : [e];
}
function $v() {
  this.__data__ = new er(), this.size = 0;
}
function Mv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Dv(e) {
  return this.__data__.get(e);
}
function Fv(e) {
  return this.__data__.has(e);
}
var zv = 200;
function Bv(e, t) {
  var n = this.__data__;
  if (n instanceof er) {
    var r = n.__data__;
    if (!To || r.length < zv - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new tr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function qn(e) {
  var t = this.__data__ = new er(e);
  this.size = t.size;
}
qn.prototype.clear = $v;
qn.prototype.delete = Mv;
qn.prototype.get = Dv;
qn.prototype.has = Fv;
qn.prototype.set = Bv;
function Vv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function jv() {
  return [];
}
var Uv = Object.prototype, Hv = Uv.propertyIsEnumerable, Oi = Object.getOwnPropertySymbols, Wv = Oi ? function(e) {
  return e == null ? [] : (e = Object(e), Vv(Oi(e), function(t) {
    return Hv.call(e, t);
  }));
} : jv;
function Gv(e, t, n) {
  var r = t(e);
  return vn(e) ? r : zu(r, n(e));
}
function Li(e) {
  return Gv(e, Fu, Wv);
}
var bs = Ar(Dn, "DataView"), ys = Ar(Dn, "Promise"), _s = Ar(Dn, "Set"), Ii = "[object Map]", Kv = "[object Object]", Ri = "[object Promise]", xi = "[object Set]", Pi = "[object WeakMap]", Ni = "[object DataView]", qv = Cr(bs), Yv = Cr(To), Zv = Cr(ys), Xv = Cr(_s), Qv = Cr(gs), ar = Qr;
(bs && ar(new bs(new ArrayBuffer(1))) != Ni || To && ar(new To()) != Ii || ys && ar(ys.resolve()) != Ri || _s && ar(new _s()) != xi || gs && ar(new gs()) != Pi) && (ar = function(e) {
  var t = Qr(e), n = t == Kv ? e.constructor : void 0, r = n ? Cr(n) : "";
  if (r)
    switch (r) {
      case qv:
        return Ni;
      case Yv:
        return Ii;
      case Zv:
        return Ri;
      case Xv:
        return xi;
      case Qv:
        return Pi;
    }
  return t;
});
var $i = Dn.Uint8Array, Jv = "__lodash_hash_undefined__";
function e0(e) {
  return this.__data__.set(e, Jv), this;
}
function t0(e) {
  return this.__data__.has(e);
}
function ca(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new tr(); ++t < n; )
    this.add(e[t]);
}
ca.prototype.add = ca.prototype.push = e0;
ca.prototype.has = t0;
function n0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function r0(e, t) {
  return e.has(t);
}
var o0 = 1, a0 = 2;
function Bu(e, t, n, r, o, a) {
  var s = n & o0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var m = -1, p = !0, v = n & a0 ? new ca() : void 0;
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
    if (v) {
      if (!n0(t, function(d, C) {
        if (!r0(v, C) && (h === d || o(h, d, n, r, a)))
          return v.push(C);
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
function s0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function l0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var i0 = 1, c0 = 2, u0 = "[object Boolean]", f0 = "[object Date]", d0 = "[object Error]", p0 = "[object Map]", m0 = "[object Number]", h0 = "[object RegExp]", g0 = "[object Set]", v0 = "[object String]", b0 = "[object Symbol]", y0 = "[object ArrayBuffer]", _0 = "[object DataView]", Mi = Nn ? Nn.prototype : void 0, Ka = Mi ? Mi.valueOf : void 0;
function w0(e, t, n, r, o, a, s) {
  switch (n) {
    case _0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case y0:
      return !(e.byteLength != t.byteLength || !a(new $i(e), new $i(t)));
    case u0:
    case f0:
    case m0:
      return Zs(+e, +t);
    case d0:
      return e.name == t.name && e.message == t.message;
    case h0:
    case v0:
      return e == t + "";
    case p0:
      var i = s0;
    case g0:
      var l = r & i0;
      if (i || (i = l0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= c0, s.set(e, t);
      var f = Bu(i(e), i(t), r, o, a, s);
      return s.delete(e), f;
    case b0:
      if (Ka)
        return Ka.call(e) == Ka.call(t);
  }
  return !1;
}
var k0 = 1, T0 = Object.prototype, S0 = T0.hasOwnProperty;
function E0(e, t, n, r, o, a) {
  var s = n & k0, i = Li(e), l = i.length, u = Li(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var m = l; m--; ) {
    var p = i[m];
    if (!(s ? p in t : S0.call(t, p)))
      return !1;
  }
  var v = a.get(e), h = a.get(t);
  if (v && h)
    return v == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var S = s; ++m < l; ) {
    p = i[m];
    var d = e[p], C = t[p];
    if (r)
      var L = s ? r(C, d, p, t, e, a) : r(d, C, p, e, t, a);
    if (!(L === void 0 ? d === C || o(d, C, n, r, a) : L)) {
      g = !1;
      break;
    }
    S || (S = p == "constructor");
  }
  if (g && !S) {
    var E = e.constructor, y = t.constructor;
    E != y && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof y == "function" && y instanceof y) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var C0 = 1, Di = "[object Arguments]", Fi = "[object Array]", Uo = "[object Object]", A0 = Object.prototype, zi = A0.hasOwnProperty;
function O0(e, t, n, r, o, a) {
  var s = vn(e), i = vn(t), l = s ? Fi : ar(e), u = i ? Fi : ar(t);
  l = l == Di ? Uo : l, u = u == Di ? Uo : u;
  var f = l == Uo, m = u == Uo, p = l == u;
  if (p && vs(e)) {
    if (!vs(t))
      return !1;
    s = !0, f = !1;
  }
  if (p && !f)
    return a || (a = new qn()), s || Du(e) ? Bu(e, t, n, r, o, a) : w0(e, t, l, n, r, o, a);
  if (!(n & C0)) {
    var v = f && zi.call(e, "__wrapped__"), h = m && zi.call(t, "__wrapped__");
    if (v || h) {
      var g = v ? e.value() : e, S = h ? t.value() : t;
      return a || (a = new qn()), o(g, S, n, r, a);
    }
  }
  return p ? (a || (a = new qn()), E0(e, t, n, r, o, a)) : !1;
}
function Aa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Ur(e) && !Ur(t) ? e !== e && t !== t : O0(e, t, n, r, Aa, o);
}
var L0 = 1, I0 = 2;
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
      var f = new qn(), m;
      if (!(m === void 0 ? Aa(u, l, L0 | I0, r, f) : m))
        return !1;
    }
  }
  return !0;
}
function Vu(e) {
  return e === e && !ur(e);
}
function x0(e) {
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
function P0(e) {
  var t = x0(e);
  return t.length == 1 && t[0][2] ? ju(t[0][0], t[0][1]) : function(n) {
    return n === e || R0(n, e, t);
  };
}
function N0(e, t) {
  return e != null && t in Object(e);
}
function $0(e, t, n) {
  t = Ca(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Oo(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Xs(o) && Ys(s, o) && (vn(e) || Qs(e)));
}
function Uu(e, t) {
  return e != null && $0(e, t, N0);
}
var M0 = 1, D0 = 2;
function F0(e, t) {
  return Js(e) && Vu(t) ? ju(Oo(e), t) : function(n) {
    var r = lr(n, e);
    return r === void 0 && r === t ? Uu(n, e) : Aa(t, r, M0 | D0);
  };
}
function z0(e) {
  return function(t) {
    return t?.[e];
  };
}
function B0(e) {
  return function(t) {
    return tl(t, e);
  };
}
function V0(e) {
  return Js(e) ? z0(Oo(e)) : B0(e);
}
function j0(e) {
  return typeof e == "function" ? e : e == null ? xu : typeof e == "object" ? vn(e) ? F0(e[0], e[1]) : P0(e) : V0(e);
}
var qa = function() {
  return Dn.Date.now();
}, U0 = "Expected a function", H0 = Math.max, W0 = Math.min;
function G0(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(U0);
  t = yi(t) || 0, ur(n) && (f = !!n.leading, m = "maxWait" in n, a = m ? H0(yi(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function v(k) {
    var O = r, W = o;
    return r = o = void 0, u = k, s = e.apply(W, O), s;
  }
  function h(k) {
    return u = k, i = setTimeout(d, t), f ? v(k) : s;
  }
  function g(k) {
    var O = k - l, W = k - u, G = t - O;
    return m ? W0(G, a - W) : G;
  }
  function S(k) {
    var O = k - l, W = k - u;
    return l === void 0 || O >= t || O < 0 || m && W >= a;
  }
  function d() {
    var k = qa();
    if (S(k))
      return C(k);
    i = setTimeout(d, g(k));
  }
  function C(k) {
    return i = void 0, p && r ? v(k) : (r = o = void 0, s);
  }
  function L() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function E() {
    return i === void 0 ? s : C(qa());
  }
  function y() {
    var k = qa(), O = S(k);
    if (r = arguments, o = this, l = k, O) {
      if (i === void 0)
        return h(l);
      if (m)
        return clearTimeout(i), i = setTimeout(d, t), v(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return y.cancel = L, y.flush = E, y;
}
function K0(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Qh(e, j0(t), o);
}
function ua(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function fo(e, t) {
  return Aa(e, t);
}
function Yn(e) {
  return e == null;
}
function q0(e) {
  return e === void 0;
}
function Y0(e, t, n, r) {
  if (!ur(e))
    return e;
  t = Ca(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Oo(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = ur(f) ? f : Ys(t[o + 1]) ? [] : {});
    }
    og(i, l, u), i = i[l];
  }
  return e;
}
function Z0(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = tl(e, s);
    n(i, s) && Y0(a, Ca(s, e), i);
  }
  return a;
}
function X0(e, t) {
  return Z0(e, t, function(n, r) {
    return Uu(e, r);
  });
}
var Q0 = Nv(function(e, t) {
  return e == null ? {} : X0(e, t);
});
const On = (e) => e === void 0, cr = (e) => typeof e == "boolean", Ne = (e) => typeof e == "number", hn = (e) => typeof Element > "u" ? !1 : e instanceof Element, J0 = (e) => $t(e) ? !Number.isNaN(Number(e)) : !1;
var eb = Object.defineProperty, tb = Object.defineProperties, nb = Object.getOwnPropertyDescriptors, Bi = Object.getOwnPropertySymbols, rb = Object.prototype.hasOwnProperty, ob = Object.prototype.propertyIsEnumerable, Vi = (e, t, n) => t in e ? eb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ab = (e, t) => {
  for (var n in t || (t = {}))
    rb.call(t, n) && Vi(e, n, t[n]);
  if (Bi)
    for (var n of Bi(t))
      ob.call(t, n) && Vi(e, n, t[n]);
  return e;
}, sb = (e, t) => tb(e, nb(t));
function lb(e, t) {
  var n;
  const r = ir();
  return Hc(() => {
    r.value = e();
  }, sb(ab({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ls(r);
}
var ji;
const pt = typeof window < "u", ib = (e) => typeof e == "string", Hu = () => {
}, ws = pt && ((ji = window?.navigator) == null ? void 0 : ji.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function nl(e) {
  return typeof e == "function" ? e() : c(e);
}
function cb(e) {
  return e;
}
function Lo(e) {
  return nd() ? (rd(e), !0) : !1;
}
function ub(e, t = !0) {
  Vt() ? ut(e) : t ? e() : lt(e);
}
function Wu(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = j(!1);
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
    }, nl(t));
  }
  return r && (o.value = !0, pt && l()), Lo(i), {
    isPending: Ls(o),
    start: l,
    stop: i
  };
}
function Gn(e) {
  var t;
  const n = nl(e);
  return (t = n?.$el) != null ? t : n;
}
const Oa = pt ? window : void 0;
function gn(...e) {
  let t, n, r, o;
  if (ib(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Oa) : [t, n, r, o] = e, !t)
    return Hu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, m, p, v) => (f.addEventListener(m, p, v), () => f.removeEventListener(m, p, v)), l = be(() => [Gn(t), nl(o)], ([f, m]) => {
    s(), f && a.push(...n.flatMap((p) => r.map((v) => i(f, p, v, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Lo(u), u;
}
let Ui = !1;
function fb(e, t, n = {}) {
  const { window: r = Oa, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  ws && !Ui && (Ui = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", Hu)));
  let i = !0;
  const l = (p) => o.some((v) => {
    if (typeof v == "string")
      return Array.from(r.document.querySelectorAll(v)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Gn(v);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), f = [
    gn(r, "click", (p) => {
      const v = Gn(e);
      if (!(!v || v === p.target || p.composedPath().includes(v))) {
        if (p.detail === 0 && (i = !l(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: a }),
    gn(r, "pointerdown", (p) => {
      const v = Gn(e);
      v && (i = !p.composedPath().includes(v) && !l(p));
    }, { passive: !0 }),
    s && gn(r, "blur", (p) => {
      var v;
      const h = Gn(e);
      ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(p);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function Gu(e, t = !1) {
  const n = j(), r = () => n.value = !!e();
  return r(), ub(r, t), n;
}
const Hi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wi = "__vueuse_ssr_handlers__";
Hi[Wi] = Hi[Wi] || {};
var Gi = Object.getOwnPropertySymbols, db = Object.prototype.hasOwnProperty, pb = Object.prototype.propertyIsEnumerable, mb = (e, t) => {
  var n = {};
  for (var r in e)
    db.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Gi)
    for (var r of Gi(e))
      t.indexOf(r) < 0 && pb.call(e, r) && (n[r] = e[r]);
  return n;
};
function Cn(e, t, n = {}) {
  const r = n, { window: o = Oa } = r, a = mb(r, ["window"]);
  let s;
  const i = Gu(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = be(() => Gn(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return Lo(f), {
    isSupported: i,
    stop: f
  };
}
var Ki = Object.getOwnPropertySymbols, hb = Object.prototype.hasOwnProperty, gb = Object.prototype.propertyIsEnumerable, vb = (e, t) => {
  var n = {};
  for (var r in e)
    hb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ki)
    for (var r of Ki(e))
      t.indexOf(r) < 0 && gb.call(e, r) && (n[r] = e[r]);
  return n;
};
function bb(e, t, n = {}) {
  const r = n, { window: o = Oa } = r, a = vb(r, ["window"]);
  let s;
  const i = Gu(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = be(() => Gn(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return Lo(f), {
    isSupported: i,
    stop: f
  };
}
var qi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(qi || (qi = {}));
var yb = Object.defineProperty, Yi = Object.getOwnPropertySymbols, _b = Object.prototype.hasOwnProperty, wb = Object.prototype.propertyIsEnumerable, Zi = (e, t, n) => t in e ? yb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kb = (e, t) => {
  for (var n in t || (t = {}))
    _b.call(t, n) && Zi(e, n, t[n]);
  if (Yi)
    for (var n of Yi(t))
      wb.call(t, n) && Zi(e, n, t[n]);
  return e;
};
const Tb = {
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
kb({
  linear: cb
}, Tb);
class Sb extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rl(e, t) {
  throw new Sb(`[${e}] ${t}`);
}
const Xi = {
  current: 0
}, Qi = j(0), Ku = 2e3, Ji = Symbol("elZIndexContextKey"), qu = Symbol("zIndexContextKey"), Yu = (e) => {
  const t = Vt() ? Fe(Ji, Xi) : Xi, n = e || (Vt() ? Fe(qu, void 0) : void 0), r = I(() => {
    const s = c(n);
    return Ne(s) ? s : Ku;
  }), o = I(() => r.value + Qi.value), a = () => (t.current++, Qi.value = t.current, o.value);
  return !pt && Fe(Ji), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Eb = {
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
const Cb = (e) => (t, n) => Ab(t, n, c(e)), Ab = (e, t, n) => lr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Ob = (e) => {
  const t = I(() => c(e).name), n = ho(e) ? e : j(e);
  return {
    lang: t,
    locale: n,
    t: Cb(e)
  };
}, Zu = Symbol("localeContextKey"), ol = (e) => {
  const t = e || Fe(Zu, j());
  return Ob(I(() => t.value || Eb));
}, Xu = "__epPropKey", he = (e) => e, Lb = (e) => Xt(e) && !!e[Xu], La = (e, t) => {
  if (!Xt(e) || Lb(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, m = [];
      if (n && (m = Array.from(n), pi(e, "default") && m.push(o), f || (f = m.includes(u))), s && (f || (f = s(u))), !f && m.length > 0) {
        const p = [...new Set(m)].map((v) => JSON.stringify(v)).join(", ");
        od(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Xu]: !0
  };
  return pi(e, "default") && (l.default = o), l;
}, Ke = (e) => ua(Object.entries(e).map(([t, n]) => [
  t,
  La(n, t)
])), al = ["", "default", "small", "large"], Ia = La({
  type: String,
  values: al,
  required: !1
}), Qu = Symbol("size"), Ib = () => {
  const e = Fe(Qu, {});
  return I(() => c(e.size) || "");
}, Ju = Symbol("emptyValuesContextKey"), Rb = ["", void 0, null], xb = void 0, ef = Ke({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Je(e) ? !e() : !e
  }
}), Pb = (e, t) => {
  const n = Vt() ? Fe(Ju, j({})) : j({}), r = I(() => e.emptyValues || n.value.emptyValues || Rb), o = I(() => Je(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Je(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : xb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, ec = (e) => Object.keys(e), fa = j();
function tf(e, t = void 0) {
  return Vt() ? Fe(Au, fa) : fa;
}
function nf(e, t) {
  const n = tf(), r = mt(e, I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Jo;
  })), o = ol(I(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Yu(I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Ku;
  })), s = I(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return rf(I(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const rf = (e, t, n = !1) => {
  var r;
  const o = !!Vt(), a = o ? tf() : void 0, s = (r = void 0) != null ? r : o ? Pn : void 0;
  if (!s)
    return;
  const i = I(() => {
    const l = c(e);
    return a?.value ? Nb(a.value, l) : l;
  });
  return s(Au, i), s(Zu, I(() => i.value.locale)), s(Ou, I(() => i.value.namespace)), s(qu, I(() => i.value.zIndex)), s(Qu, {
    size: I(() => i.value.size || "")
  }), s(Ju, I(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !fa.value) && (fa.value = i.value), i;
}, Nb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ec(e), ...ec(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, wt = "update:modelValue", Qn = "change", Zn = "input";
var Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Hr(e, t = "px") {
  if (!e)
    return "";
  if (Ne(e) || J0(e))
    return `${e}${t}`;
  if ($t(e))
    return e;
}
function $b(e, t) {
  if (!pt)
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
}, of = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), af = (e) => (e.install = wo, e), Mb = Ke({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), Db = re({
  name: "ElIcon",
  inheritAttrs: !1
}), Fb = /* @__PURE__ */ re({
  ...Db,
  props: Mb,
  setup(e) {
    const t = e, n = mt("icon"), r = I(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: On(o) ? void 0 : Hr(o),
        "--color": a
      };
    });
    return (o, a) => (R(), H("i", zr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      ge(o.$slots, "default")
    ], 16));
  }
});
var zb = /* @__PURE__ */ Ze(Fb, [["__file", "icon.vue"]]);
const dt = bn(zb);
/*! Element Plus Icons Vue v2.3.1 */
var Bb = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), sf = Bb, Vb = /* @__PURE__ */ re({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), jb = Vb, Ub = /* @__PURE__ */ re({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      _("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Hb = Ub, Wb = /* @__PURE__ */ re({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Gb = Wb, Kb = /* @__PURE__ */ re({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      _("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), sl = Kb, qb = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), da = qb, Yb = /* @__PURE__ */ re({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      _("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Zb = Yb, Xb = /* @__PURE__ */ re({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Qb = Xb, Jb = /* @__PURE__ */ re({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), lf = Jb, ey = /* @__PURE__ */ re({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), ty = ey, ny = /* @__PURE__ */ re({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), ry = ny, oy = /* @__PURE__ */ re({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ay = oy, sy = /* @__PURE__ */ re({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), ly = sy, iy = /* @__PURE__ */ re({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), cy = iy;
const Ln = he([
  String,
  Object,
  Function
]), uy = {
  Close: da
}, fy = {
  Close: da
}, pa = {
  success: ay,
  warning: cy,
  error: Gb,
  info: Qb
}, cf = {
  validating: lf,
  success: Hb,
  error: sl
}, uf = () => pt && /firefox/i.test(window.navigator.userAgent);
let Ht;
const dy = {
  height: "0",
  visibility: "hidden",
  overflow: uf() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, py = [
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
function my(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: py.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function tc(e, t = 1, n) {
  var r;
  Ht || (Ht = document.createElement("textarea"), document.body.appendChild(Ht));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = my(e);
  i.forEach(([m, p]) => Ht?.style.setProperty(m, p)), Object.entries(dy).forEach(([m, p]) => Ht?.style.setProperty(m, p, "important")), Ht.value = e.value || e.placeholder || "";
  let l = Ht.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Ht.value = "";
  const f = Ht.scrollHeight - o;
  if (Ne(t)) {
    let m = f * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (Ne(n)) {
    let m = f * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = Ht.parentNode) == null || r.removeChild(Ht), Ht = void 0, u;
}
const ff = (e) => e, hy = Ke({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Or = (e) => Q0(hy, e), gy = Ke({
  id: {
    type: String,
    default: void 0
  },
  size: Ia,
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
    type: Ln
  },
  prefixIcon: {
    type: Ln
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
    default: () => ff({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Or(["ariaLabel"])
}), vy = {
  [wt]: (e) => $t(e),
  input: (e) => $t(e),
  change: (e) => $t(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, by = ["class", "style"], yy = /^on[A-Z]/, _y = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = I(() => (n?.value || []).concat(by)), o = Vt();
  return o ? I(() => {
    var a;
    return ua(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && yy.test(s))));
  }) : I(() => ({}));
}, ll = Symbol("formContextKey"), ma = Symbol("formItemContextKey"), nc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, wy = Symbol("elIdInjection"), df = () => Vt() ? Fe(wy, nc) : nc, Ra = (e) => {
  const t = df(), n = qs();
  return lb(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, xa = () => {
  const e = Fe(ll, void 0), t = Fe(ma, void 0);
  return {
    form: e,
    formItem: t
  };
}, il = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = j(!1)), r || (r = j(!1));
  const o = j();
  let a;
  const s = I(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ut(() => {
    a = be([Un(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : Ra().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), va(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, pf = (e) => {
  const t = Vt();
  return I(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Io = (e, t = {}) => {
  const n = j(void 0), r = t.prop ? n : pf("size"), o = t.global ? n : Ib(), a = t.form ? { size: void 0 } : Fe(ll, void 0), s = t.formItem ? { size: void 0 } : Fe(ma, void 0);
  return I(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, cl = (e) => {
  const t = pf("disabled"), n = Fe(ll, void 0);
  return I(() => t.value || c(e) || n?.disabled || !1);
};
function mf(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Vt(), { emit: s } = a, i = ir(), l = j(!1), u = (p) => {
    Je(t) && t(p) || l.value || (l.value = !0, s("focus", p), n?.());
  }, f = (p) => {
    var v;
    Je(r) && r(p) || p.relatedTarget && ((v = i.value) != null && v.contains(p.relatedTarget)) || (l.value = !1, s("blur", p), o?.());
  }, m = () => {
    var p, v;
    (p = i.value) != null && p.contains(document.activeElement) && i.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return be(i, (p) => {
    p && p.setAttribute("tabindex", "-1");
  }), gn(i, "focus", u, !0), gn(i, "blur", f, !0), gn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const ky = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function hf({
  afterComposition: e,
  emit: t
}) {
  const n = j(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !ky(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, lt(() => e(i)));
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
function Ty(e) {
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
const Sy = "ElInput", Ey = re({
  name: Sy,
  inheritAttrs: !1
}), Cy = /* @__PURE__ */ re({
  ...Ey,
  props: gy,
  emits: vy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = ad(), a = _y(), s = sd(), i = I(() => [
      r.type === "textarea" ? g.b() : h.b(),
      h.m(p.value),
      h.is("disabled", v.value),
      h.is("exceed", Ve.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: ie.value && ee.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = I(() => [
      h.e("wrapper"),
      h.is("focus", W.value)
    ]), { form: u, formItem: f } = xa(), { inputId: m } = il(r, {
      formItemContext: f
    }), p = Io(), v = cl(), h = mt("input"), g = mt("textarea"), S = ir(), d = ir(), C = j(!1), L = j(!1), E = j(), y = ir(r.inputStyle), k = I(() => S.value || d.value), { wrapperRef: O, isFocused: W, handleFocus: G, handleBlur: te } = mf(k, {
      beforeFocus() {
        return v.value;
      },
      afterBlur() {
        var T;
        r.validateEvent && ((T = f?.validate) == null || T.call(f, "blur").catch((M) => void 0));
      }
    }), de = I(() => {
      var T;
      return (T = u?.statusIcon) != null ? T : !1;
    }), ne = I(() => f?.validateState || ""), ve = I(() => ne.value && cf[ne.value]), pe = I(() => L.value ? ly : Zb), P = I(() => [
      o.style
    ]), $ = I(() => [
      r.inputStyle,
      y.value,
      { resize: r.resize }
    ]), B = I(() => Yn(r.modelValue) ? "" : String(r.modelValue)), ie = I(() => r.clearable && !v.value && !r.readonly && !!B.value && (W.value || C.value)), ee = I(() => r.showPassword && !v.value && !!B.value && (!!B.value || W.value)), _e = I(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), X = I(() => B.value.length), Ve = I(() => !!_e.value && X.value > Number(r.maxlength)), Oe = I(() => !!s.suffix || !!r.suffixIcon || ie.value || r.showPassword || _e.value || !!ne.value && de.value), [ke, qe] = Ty(S);
    Cn(d, (T) => {
      if (ce(), !_e.value || r.resize !== "both")
        return;
      const M = T[0], { width: me } = M.contentRect;
      E.value = {
        right: `calc(100% - ${me + 15 + 6}px)`
      };
    });
    const Se = () => {
      const { type: T, autosize: M } = r;
      if (!(!pt || T !== "textarea" || !d.value))
        if (M) {
          const me = Xt(M) ? M.minRows : void 0, Ce = Xt(M) ? M.maxRows : void 0, Ye = tc(d.value, me, Ce);
          y.value = {
            overflowY: "hidden",
            ...Ye
          }, lt(() => {
            d.value.offsetHeight, y.value = Ye;
          });
        } else
          y.value = {
            minHeight: tc(d.value).minHeight
          };
    }, ce = ((T) => {
      let M = !1;
      return () => {
        var me;
        if (M || !r.autosize)
          return;
        ((me = d.value) == null ? void 0 : me.offsetParent) === null || (T(), M = !0);
      };
    })(Se), tt = () => {
      const T = k.value, M = r.formatter ? r.formatter(B.value) : B.value;
      !T || T.value === M || (T.value = M);
    }, ft = async (T) => {
      ke();
      let { value: M } = T.target;
      if (r.formatter && r.parser && (M = r.parser(M)), !Tt.value) {
        if (M === B.value) {
          tt();
          return;
        }
        n(wt, M), n(Zn, M), await lt(), tt(), qe();
      }
    }, Ue = (T) => {
      let { value: M } = T.target;
      r.formatter && r.parser && (M = r.parser(M)), n(Qn, M);
    }, {
      isComposing: Tt,
      handleCompositionStart: at,
      handleCompositionUpdate: gt,
      handleCompositionEnd: st
    } = hf({ emit: n, afterComposition: ft }), $e = () => {
      ke(), L.value = !L.value, setTimeout(qe);
    }, vt = () => {
      var T;
      return (T = k.value) == null ? void 0 : T.focus();
    }, w = () => {
      var T;
      return (T = k.value) == null ? void 0 : T.blur();
    }, A = (T) => {
      C.value = !1, n("mouseleave", T);
    }, F = (T) => {
      C.value = !0, n("mouseenter", T);
    }, Y = (T) => {
      n("keydown", T);
    }, Ee = () => {
      var T;
      (T = k.value) == null || T.select();
    }, ue = () => {
      n(wt, ""), n(Qn, ""), n("clear"), n(Zn, "");
    };
    return be(() => r.modelValue, () => {
      var T;
      lt(() => Se()), r.validateEvent && ((T = f?.validate) == null || T.call(f, "change").catch((M) => void 0));
    }), be(B, () => tt()), be(() => r.type, async () => {
      await lt(), tt(), Se();
    }), ut(() => {
      !r.formatter && r.parser, tt(), lt(Se);
    }), t({
      input: S,
      textarea: d,
      ref: k,
      textareaStyle: $,
      autosize: Un(r, "autosize"),
      isComposing: Tt,
      focus: vt,
      blur: w,
      select: Ee,
      clear: ue,
      resizeTextarea: Se
    }), (T, M) => (R(), H("div", {
      class: U([
        c(i),
        {
          [c(h).bm("group", "append")]: T.$slots.append,
          [c(h).bm("group", "prepend")]: T.$slots.prepend
        }
      ]),
      style: Ct(c(P)),
      onMouseenter: F,
      onMouseleave: A
    }, [
      J(" input "),
      T.type !== "textarea" ? (R(), H(Nt, { key: 0 }, [
        J(" prepend slot "),
        T.$slots.prepend ? (R(), H("div", {
          key: 0,
          class: U(c(h).be("group", "prepend"))
        }, [
          ge(T.$slots, "prepend")
        ], 2)) : J("v-if", !0),
        _("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: U(c(l))
        }, [
          J(" prefix slot "),
          T.$slots.prefix || T.prefixIcon ? (R(), H("span", {
            key: 0,
            class: U(c(h).e("prefix"))
          }, [
            _("span", {
              class: U(c(h).e("prefix-inner"))
            }, [
              ge(T.$slots, "prefix"),
              T.prefixIcon ? (R(), le(c(dt), {
                key: 0,
                class: U(c(h).e("icon"))
              }, {
                default: ae(() => [
                  (R(), le(zt(T.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : J("v-if", !0)
            ], 2)
          ], 2)) : J("v-if", !0),
          _("input", zr({
            id: c(m),
            ref_key: "input",
            ref: S,
            class: c(h).e("inner")
          }, c(a), {
            minlength: T.minlength,
            maxlength: T.maxlength,
            type: T.showPassword ? L.value ? "text" : "password" : T.type,
            disabled: c(v),
            readonly: T.readonly,
            autocomplete: T.autocomplete,
            tabindex: T.tabindex,
            "aria-label": T.ariaLabel,
            placeholder: T.placeholder,
            style: T.inputStyle,
            form: T.form,
            autofocus: T.autofocus,
            role: T.containerRole,
            onCompositionstart: c(at),
            onCompositionupdate: c(gt),
            onCompositionend: c(st),
            onInput: ft,
            onChange: Ue,
            onKeydown: Y
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          J(" suffix slot "),
          c(Oe) ? (R(), H("span", {
            key: 1,
            class: U(c(h).e("suffix"))
          }, [
            _("span", {
              class: U(c(h).e("suffix-inner"))
            }, [
              !c(ie) || !c(ee) || !c(_e) ? (R(), H(Nt, { key: 0 }, [
                ge(T.$slots, "suffix"),
                T.suffixIcon ? (R(), le(c(dt), {
                  key: 0,
                  class: U(c(h).e("icon"))
                }, {
                  default: ae(() => [
                    (R(), le(zt(T.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : J("v-if", !0)
              ], 64)) : J("v-if", !0),
              c(ie) ? (R(), le(c(dt), {
                key: 1,
                class: U([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: Xe(c(wo), ["prevent"]),
                onClick: ue
              }, {
                default: ae(() => [
                  N(c(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : J("v-if", !0),
              c(ee) ? (R(), le(c(dt), {
                key: 2,
                class: U([c(h).e("icon"), c(h).e("password")]),
                onClick: $e
              }, {
                default: ae(() => [
                  (R(), le(zt(c(pe))))
                ]),
                _: 1
              }, 8, ["class"])) : J("v-if", !0),
              c(_e) ? (R(), H("span", {
                key: 3,
                class: U(c(h).e("count"))
              }, [
                _("span", {
                  class: U(c(h).e("count-inner"))
                }, V(c(X)) + " / " + V(T.maxlength), 3)
              ], 2)) : J("v-if", !0),
              c(ne) && c(ve) && c(de) ? (R(), le(c(dt), {
                key: 4,
                class: U([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(ne) === "validating")
                ])
              }, {
                default: ae(() => [
                  (R(), le(zt(c(ve))))
                ]),
                _: 1
              }, 8, ["class"])) : J("v-if", !0)
            ], 2)
          ], 2)) : J("v-if", !0)
        ], 2),
        J(" append slot "),
        T.$slots.append ? (R(), H("div", {
          key: 1,
          class: U(c(h).be("group", "append"))
        }, [
          ge(T.$slots, "append")
        ], 2)) : J("v-if", !0)
      ], 64)) : (R(), H(Nt, { key: 1 }, [
        J(" textarea "),
        _("textarea", zr({
          id: c(m),
          ref_key: "textarea",
          ref: d,
          class: [c(g).e("inner"), c(h).is("focus", c(W))]
        }, c(a), {
          minlength: T.minlength,
          maxlength: T.maxlength,
          tabindex: T.tabindex,
          disabled: c(v),
          readonly: T.readonly,
          autocomplete: T.autocomplete,
          style: c($),
          "aria-label": T.ariaLabel,
          placeholder: T.placeholder,
          form: T.form,
          autofocus: T.autofocus,
          rows: T.rows,
          role: T.containerRole,
          onCompositionstart: c(at),
          onCompositionupdate: c(gt),
          onCompositionend: c(st),
          onInput: ft,
          onFocus: c(G),
          onBlur: c(te),
          onChange: Ue,
          onKeydown: Y
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(_e) ? (R(), H("span", {
          key: 0,
          style: Ct(E.value),
          class: U(c(h).e("count"))
        }, V(c(X)) + " / " + V(T.maxlength), 7)) : J("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ay = /* @__PURE__ */ Ze(Cy, [["__file", "input.vue"]]);
const Oy = bn(Ay), Rr = 4, Ly = {
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
}, Iy = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ul = Symbol("scrollbarContextKey"), Ry = Ke({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), xy = "Thumb", Py = /* @__PURE__ */ re({
  __name: "thumb",
  props: Ry,
  setup(e) {
    const t = e, n = Fe(ul), r = mt("scrollbar");
    n || rl(xy, "can not inject scrollbar context");
    const o = j(), a = j(), s = j({}), i = j(!1);
    let l = !1, u = !1, f = pt ? document.onselectstart : null;
    const m = I(() => Ly[t.vertical ? "vertical" : "horizontal"]), p = I(() => Iy({
      size: t.size,
      move: t.move,
      bar: m.value
    })), v = I(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), h = (k) => {
      var O;
      if (k.stopPropagation(), k.ctrlKey || [1, 2].includes(k.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), S(k);
      const W = k.currentTarget;
      W && (s.value[m.value.axis] = W[m.value.offset] - (k[m.value.client] - W.getBoundingClientRect()[m.value.direction]));
    }, g = (k) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(k.target.getBoundingClientRect()[m.value.direction] - k[m.value.client]), W = a.value[m.value.offset] / 2, G = (O - W) * 100 * v.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = G * n.wrapElement[m.value.scrollSize] / 100;
    }, S = (k) => {
      k.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (k) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[m.value.axis];
      if (!O)
        return;
      const W = (o.value.getBoundingClientRect()[m.value.direction] - k[m.value.client]) * -1, G = a.value[m.value.offset] - O, te = (W - G) * 100 * v.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = te * n.wrapElement[m.value.scrollSize] / 100;
    }, C = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", C), y(), u && (i.value = !1);
    }, L = () => {
      u = !1, i.value = !!t.size;
    }, E = () => {
      u = !0, i.value = l;
    };
    Mn(() => {
      y(), document.removeEventListener("mouseup", C);
    });
    const y = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return gn(Un(n, "scrollbarElement"), "mousemove", L), gn(Un(n, "scrollbarElement"), "mouseleave", E), (k, O) => (R(), le(Xr, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: ae(() => [
        kt(_("div", {
          ref_key: "instance",
          ref: o,
          class: U([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: g
        }, [
          _("div", {
            ref_key: "thumb",
            ref: a,
            class: U(c(r).e("thumb")),
            style: Ct(c(p)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [Xn, k.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var rc = /* @__PURE__ */ Ze(Py, [["__file", "thumb.vue"]]);
const Ny = Ke({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), $y = /* @__PURE__ */ re({
  __name: "bar",
  props: Ny,
  setup(e, { expose: t }) {
    const n = e, r = Fe(ul), o = j(0), a = j(0), s = j(""), i = j(""), l = j(1), u = j(1);
    return t({
      handleScroll: (p) => {
        if (p) {
          const v = p.offsetHeight - Rr, h = p.offsetWidth - Rr;
          a.value = p.scrollTop * 100 / v * l.value, o.value = p.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const p = r?.wrapElement;
        if (!p)
          return;
        const v = p.offsetHeight - Rr, h = p.offsetWidth - Rr, g = v ** 2 / p.scrollHeight, S = h ** 2 / p.scrollWidth, d = Math.max(g, n.minSize), C = Math.max(S, n.minSize);
        l.value = g / (v - g) / (d / (v - d)), u.value = S / (h - S) / (C / (h - C)), i.value = d + Rr < v ? `${d}px` : "", s.value = C + Rr < h ? `${C}px` : "";
      }
    }), (p, v) => (R(), H(Nt, null, [
      N(rc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(rc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var My = /* @__PURE__ */ Ze($y, [["__file", "bar.vue"]]);
const Dy = Ke({
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
  ...Or(["ariaLabel", "ariaOrientation"])
}), Fy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ne)
}, zy = "ElScrollbar", By = re({
  name: zy
}), Vy = /* @__PURE__ */ re({
  ...By,
  props: Dy,
  emits: Fy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = mt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = j(), f = j(), m = j(), p = j(), v = I(() => {
      const y = {};
      return r.height && (y.height = Hr(r.height)), r.maxHeight && (y.maxHeight = Hr(r.maxHeight)), [r.wrapStyle, y];
    }), h = I(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = I(() => [o.e("view"), r.viewClass]), S = () => {
      var y;
      f.value && ((y = p.value) == null || y.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(y, k) {
      Xt(y) ? f.value.scrollTo(y) : Ne(y) && Ne(k) && f.value.scrollTo(y, k);
    }
    const C = (y) => {
      Ne(y) && (f.value.scrollTop = y);
    }, L = (y) => {
      Ne(y) && (f.value.scrollLeft = y);
    }, E = () => {
      var y;
      (y = p.value) == null || y.update();
    };
    return be(() => r.noresize, (y) => {
      y ? (a?.(), s?.()) : ({ stop: a } = Cn(m, E), s = gn("resize", E));
    }, { immediate: !0 }), be(() => [r.maxHeight, r.height], () => {
      r.native || lt(() => {
        var y;
        E(), f.value && ((y = p.value) == null || y.handleScroll(f.value));
      });
    }), Pn(ul, _r({
      scrollbarElement: u,
      wrapElement: f
    })), ld(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), ut(() => {
      r.native || lt(() => {
        E();
      });
    }), Wc(() => E()), t({
      wrapRef: f,
      update: E,
      scrollTo: d,
      setScrollTop: C,
      setScrollLeft: L,
      handleScroll: S
    }), (y, k) => (R(), H("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: U(c(o).b())
    }, [
      _("div", {
        ref_key: "wrapRef",
        ref: f,
        class: U(c(h)),
        style: Ct(c(v)),
        tabindex: y.tabindex,
        onScroll: S
      }, [
        (R(), le(zt(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: m,
          class: U(c(g)),
          style: Ct(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: ae(() => [
            ge(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? J("v-if", !0) : (R(), le(My, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        always: y.always,
        "min-size": y.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var jy = /* @__PURE__ */ Ze(Vy, [["__file", "scrollbar.vue"]]);
const Uy = bn(jy), fl = Symbol("popper"), gf = Symbol("popperContent"), Hy = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], vf = Ke({
  role: {
    type: String,
    values: Hy,
    default: "tooltip"
  }
}), Wy = re({
  name: "ElPopper",
  inheritAttrs: !1
}), Gy = /* @__PURE__ */ re({
  ...Wy,
  props: vf,
  setup(e, { expose: t }) {
    const n = e, r = j(), o = j(), a = j(), s = j(), i = I(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Pn(fl, l), (u, f) => ge(u.$slots, "default");
  }
});
var Ky = /* @__PURE__ */ Ze(Gy, [["__file", "popper.vue"]]);
const bf = Ke({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), qy = re({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Yy = /* @__PURE__ */ re({
  ...qy,
  props: bf,
  setup(e, { expose: t }) {
    const n = e, r = mt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Fe(gf, void 0);
    return be(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Mn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (R(), H("span", {
      ref_key: "arrowRef",
      ref: a,
      class: U(c(r).e("arrow")),
      style: Ct(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Zy = /* @__PURE__ */ Ze(Yy, [["__file", "arrow.vue"]]);
const yf = Ke({
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
}), _f = Symbol("elForwardRef"), Xy = (e) => {
  Pn(_f, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Qy = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ks = (e) => {
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
}, Jy = "ElOnlyChild", e1 = re({
  name: Jy,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Fe(_f), a = Qy((r = o?.setForwardRef) != null ? r : wo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = wf(i);
      return l ? kt(id(l, n), [[a]]) : null;
    };
  }
});
function wf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Xt(n))
      switch (n.type) {
        case cd:
          continue;
        case Uc:
        case "svg":
          return oc(n);
        case Nt:
          return wf(n.children);
        default:
          return n;
      }
    return oc(n);
  }
  return null;
}
function oc(e) {
  const t = mt("only-child");
  return N("span", {
    class: t.e("content")
  }, [e]);
}
const t1 = re({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), n1 = /* @__PURE__ */ re({
  ...t1,
  props: yf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Fe(fl, void 0);
    Xy(o);
    const a = I(() => i.value ? n.id : void 0), s = I(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = I(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = I(() => i.value ? `${n.open}` : void 0);
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
    return ut(() => {
      be(() => n.virtualRef, (m) => {
        m && (o.value = Gn(m));
      }, {
        immediate: !0
      }), be(o, (m, p) => {
        u?.(), u = void 0, hn(m) && (f.forEach((v) => {
          var h;
          const g = n[v];
          g && (m.addEventListener(v.slice(2).toLowerCase(), g), (h = p?.removeEventListener) == null || h.call(p, v.slice(2).toLowerCase(), g));
        }), ks(m) && (u = be([a, s, i, l], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            Yn(v[g]) ? m.removeAttribute(h) : m.setAttribute(h, v[g]);
          });
        }, { immediate: !0 }))), hn(p) && ks(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => p.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Mn(() => {
      if (u?.(), u = void 0, o.value && hn(o.value)) {
        const m = o.value;
        f.forEach((p) => {
          const v = n[p];
          v && m.removeEventListener(p.slice(2).toLowerCase(), v);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, p) => m.virtualTriggering ? J("v-if", !0) : (R(), le(c(e1), zr({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: ae(() => [
        ge(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var r1 = /* @__PURE__ */ Ze(n1, [["__file", "trigger.vue"]]);
const Ya = "focus-trap.focus-after-trapped", Za = "focus-trap.focus-after-released", o1 = "focus-trap.focusout-prevented", ac = {
  cancelable: !0,
  bubbles: !1
}, a1 = {
  cancelable: !0,
  bubbles: !1
}, sc = "focusAfterTrapped", lc = "focusAfterReleased", s1 = Symbol("elFocusTrap"), dl = j(), Pa = j(0), pl = j(0);
let Ho = 0;
const kf = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ic = (e, t) => {
  for (const n of e)
    if (!l1(n, t))
      return n;
}, l1 = (e, t) => {
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
}, i1 = (e) => {
  const t = kf(e), n = ic(t, e), r = ic(t.reverse(), e);
  return [n, r];
}, c1 = (e) => e instanceof HTMLInputElement && "select" in e, Vn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    hn(e) && !ks(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), pl.value = window.performance.now(), e !== n && c1(e) && t && e.select(), hn(e) && r && e.removeAttribute("tabindex");
  }
};
function cc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const u1 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = cc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = cc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, f1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Vn(r, t), document.activeElement !== n)
      return;
}, uc = u1(), d1 = () => Pa.value > pl.value, Wo = () => {
  dl.value = "pointer", Pa.value = window.performance.now();
}, fc = () => {
  dl.value = "keyboard", Pa.value = window.performance.now();
}, p1 = () => (ut(() => {
  Ho === 0 && (document.addEventListener("mousedown", Wo), document.addEventListener("touchstart", Wo), document.addEventListener("keydown", fc)), Ho++;
}), Mn(() => {
  Ho--, Ho <= 0 && (document.removeEventListener("mousedown", Wo), document.removeEventListener("touchstart", Wo), document.removeEventListener("keydown", fc));
}), {
  focusReason: dl,
  lastUserFocusTimestamp: Pa,
  lastAutomatedFocusTimestamp: pl
}), Go = (e) => new CustomEvent(o1, {
  ...a1,
  detail: e
}), Rn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Dr = [];
const dc = (e) => {
  e.code === Rn.esc && Dr.forEach((t) => t(e));
}, m1 = (e) => {
  ut(() => {
    Dr.length === 0 && document.addEventListener("keydown", dc), pt && Dr.push(e);
  }), Mn(() => {
    Dr = Dr.filter((t) => t !== e), Dr.length === 0 && pt && document.removeEventListener("keydown", dc);
  });
}, h1 = re({
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
    sc,
    lc,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = j();
    let r, o;
    const { focusReason: a } = p1();
    m1((h) => {
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
      const { code: g, altKey: S, ctrlKey: d, metaKey: C, currentTarget: L, shiftKey: E } = h, { loop: y } = e, k = g === Rn.tab && !S && !d && !C, O = document.activeElement;
      if (k && O) {
        const W = L, [G, te] = i1(W);
        if (G && te) {
          if (!E && O === te) {
            const ne = Go({
              focusReason: a.value
            });
            t("focusout-prevented", ne), ne.defaultPrevented || (h.preventDefault(), y && Vn(G, !0));
          } else if (E && [G, W].includes(O)) {
            const ne = Go({
              focusReason: a.value
            });
            t("focusout-prevented", ne), ne.defaultPrevented || (h.preventDefault(), y && Vn(te, !0));
          }
        } else if (O === W) {
          const ne = Go({
            focusReason: a.value
          });
          t("focusout-prevented", ne), ne.defaultPrevented || h.preventDefault();
        }
      }
    };
    Pn(s1, {
      focusTrapRef: n,
      onKeydown: i
    }), be(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), be([n], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", f), h.addEventListener("focusout", m)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", f), g.removeEventListener("focusout", m));
    });
    const l = (h) => {
      t(sc, h);
    }, u = (h) => t(lc, h), f = (h) => {
      const g = c(n);
      if (!g)
        return;
      const S = h.target, d = h.relatedTarget, C = S && g.contains(S);
      e.trapped || d && g.contains(d) || (r = d), C && t("focusin", h), !s.paused && e.trapped && (C ? o = S : Vn(o, !0));
    }, m = (h) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const S = h.relatedTarget;
          !Yn(S) && !g.contains(S) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Go({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Vn(o, !0);
            }
          }, 0);
        } else {
          const S = h.target;
          S && g.contains(S) || t("focusout", h);
        }
    };
    async function p() {
      await lt();
      const h = c(n);
      if (h) {
        uc.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const d = new Event(Ya, ac);
          h.addEventListener(Ya, l), h.dispatchEvent(d), d.defaultPrevented || lt(() => {
            let C = e.focusStartEl;
            $t(C) || (Vn(C), document.activeElement !== C && (C = "first")), C === "first" && f1(kf(h), !0), (document.activeElement === g || C === "container") && Vn(h);
          });
        }
      }
    }
    function v() {
      const h = c(n);
      if (h) {
        h.removeEventListener(Ya, l);
        const g = new CustomEvent(Za, {
          ...ac,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(Za, u), h.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !d1() || h.contains(document.activeElement)) && Vn(r ?? document.body), h.removeEventListener(Za, u), uc.remove(s);
      }
    }
    return ut(() => {
      e.trapped && p(), be(() => e.trapped, (h) => {
        h ? p() : v();
      });
    }), Mn(() => {
      e.trapped && v(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function g1(e, t, n, r, o, a) {
  return ge(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var v1 = /* @__PURE__ */ Ze(h1, [["render", g1], ["__file", "focus-trap.vue"]]), Wt = "top", on = "bottom", an = "right", Gt = "left", ml = "auto", Ro = [Wt, on, an, Gt], Wr = "start", So = "end", b1 = "clippingParents", Tf = "viewport", ro = "popper", y1 = "reference", pc = Ro.reduce(function(e, t) {
  return e.concat([t + "-" + Wr, t + "-" + So]);
}, []), Na = [].concat(Ro, [ml]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Wr, t + "-" + So]);
}, []), _1 = "beforeRead", w1 = "read", k1 = "afterRead", T1 = "beforeMain", S1 = "main", E1 = "afterMain", C1 = "beforeWrite", A1 = "write", O1 = "afterWrite", L1 = [_1, w1, k1, T1, S1, E1, C1, A1, O1];
function $n(e) {
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
function Tr(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function rn(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function I1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !rn(a) || !$n(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
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
      !rn(o) || !$n(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Sf = { name: "applyStyles", enabled: !0, phase: "write", fn: I1, effect: R1, requires: ["computeStyles"] };
function xn(e) {
  return e.split("-")[0];
}
var yr = Math.max, ha = Math.min, Gr = Math.round;
function Ts() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ef() {
  return !/^((?!chrome|android).)*safari/i.test(Ts());
}
function Kr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && rn(e) && (o = e.offsetWidth > 0 && Gr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Gr(r.height) / e.offsetHeight || 1);
  var s = Tr(e) ? Qt(e) : window, i = s.visualViewport, l = !Ef() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, f = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, p = r.height / a;
  return { width: m, height: p, top: f, right: u + m, bottom: f + p, left: u, x: u, y: f };
}
function gl(e) {
  var t = Kr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Cf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && hl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Jn(e) {
  return Qt(e).getComputedStyle(e);
}
function x1(e) {
  return ["table", "td", "th"].indexOf($n(e)) >= 0;
}
function pr(e) {
  return ((Tr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function $a(e) {
  return $n(e) === "html" ? e : e.assignedSlot || e.parentNode || (hl(e) ? e.host : null) || pr(e);
}
function mc(e) {
  return !rn(e) || Jn(e).position === "fixed" ? null : e.offsetParent;
}
function P1(e) {
  var t = /firefox/i.test(Ts()), n = /Trident/i.test(Ts());
  if (n && rn(e)) {
    var r = Jn(e);
    if (r.position === "fixed") return null;
  }
  var o = $a(e);
  for (hl(o) && (o = o.host); rn(o) && ["html", "body"].indexOf($n(o)) < 0; ) {
    var a = Jn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function xo(e) {
  for (var t = Qt(e), n = mc(e); n && x1(n) && Jn(n).position === "static"; ) n = mc(n);
  return n && ($n(n) === "html" || $n(n) === "body" && Jn(n).position === "static") ? t : n || P1(e) || t;
}
function vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function po(e, t, n) {
  return yr(e, ha(t, n));
}
function N1(e, t, n) {
  var r = po(e, t, n);
  return r > n ? n : r;
}
function Af() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Of(e) {
  return Object.assign({}, Af(), e);
}
function Lf(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Of(typeof e != "number" ? e : Lf(e, Ro));
};
function M1(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = xn(n.placement), l = vl(i), u = [Gt, an].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = $1(o.padding, n), p = gl(a), v = l === "y" ? Wt : Gt, h = l === "y" ? on : an, g = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], S = s[l] - n.rects.reference[l], d = xo(a), C = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = g / 2 - S / 2, E = m[v], y = C - p[f] - m[h], k = C / 2 - p[f] / 2 + L, O = po(E, k, y), W = l;
    n.modifiersData[r] = (t = {}, t[W] = O, t.centerOffset = O - k, t);
  }
}
function D1(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Cf(t.elements.popper, o) && (t.elements.arrow = o));
}
var F1 = { name: "arrow", enabled: !0, phase: "main", fn: M1, effect: D1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function qr(e) {
  return e.split("-")[1];
}
var z1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function B1(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Gr(n * o) / o || 0, y: Gr(r * o) / o || 0 };
}
function hc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, p = s.x, v = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, S = typeof f == "function" ? f({ x: v, y: g }) : { x: v, y: g };
  v = S.x, g = S.y;
  var d = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), L = Gt, E = Wt, y = window;
  if (u) {
    var k = xo(n), O = "clientHeight", W = "clientWidth";
    if (k === Qt(n) && (k = pr(n), Jn(k).position !== "static" && i === "absolute" && (O = "scrollHeight", W = "scrollWidth")), k = k, o === Wt || (o === Gt || o === an) && a === So) {
      E = on;
      var G = m && k === y && y.visualViewport ? y.visualViewport.height : k[O];
      g -= G - r.height, g *= l ? 1 : -1;
    }
    if (o === Gt || (o === Wt || o === on) && a === So) {
      L = an;
      var te = m && k === y && y.visualViewport ? y.visualViewport.width : k[W];
      v -= te - r.width, v *= l ? 1 : -1;
    }
  }
  var de = Object.assign({ position: i }, u && z1), ne = f === !0 ? B1({ x: v, y: g }, Qt(n)) : { x: v, y: g };
  if (v = ne.x, g = ne.y, l) {
    var ve;
    return Object.assign({}, de, (ve = {}, ve[E] = C ? "0" : "", ve[L] = d ? "0" : "", ve.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", ve));
  }
  return Object.assign({}, de, (t = {}, t[E] = C ? g + "px" : "", t[L] = d ? v + "px" : "", t.transform = "", t));
}
function V1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: xn(t.placement), variation: qr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, hc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, hc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var If = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: V1, data: {} }, Ko = { passive: !0 };
function j1(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ko);
  }), i && l.addEventListener("resize", n.update, Ko), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ko);
    }), i && l.removeEventListener("resize", n.update, Ko);
  };
}
var Rf = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: j1, data: {} }, U1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ea(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return U1[t];
  });
}
var H1 = { start: "end", end: "start" };
function gc(e) {
  return e.replace(/start|end/g, function(t) {
    return H1[t];
  });
}
function bl(e) {
  var t = Qt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function yl(e) {
  return Kr(pr(e)).left + bl(e).scrollLeft;
}
function W1(e, t) {
  var n = Qt(e), r = pr(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Ef();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + yl(e), y: l };
}
function G1(e) {
  var t, n = pr(e), r = bl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = yr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = yr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + yl(e), l = -r.scrollTop;
  return Jn(o || n).direction === "rtl" && (i += yr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function _l(e) {
  var t = Jn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function xf(e) {
  return ["html", "body", "#document"].indexOf($n(e)) >= 0 ? e.ownerDocument.body : rn(e) && _l(e) ? e : xf($a(e));
}
function mo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = xf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Qt(r), s = o ? [a].concat(a.visualViewport || [], _l(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(mo($a(s)));
}
function Ss(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function K1(e, t) {
  var n = Kr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function vc(e, t, n) {
  return t === Tf ? Ss(W1(e, n)) : Tr(t) ? K1(t, n) : Ss(G1(pr(e)));
}
function q1(e) {
  var t = mo($a(e)), n = ["absolute", "fixed"].indexOf(Jn(e).position) >= 0, r = n && rn(e) ? xo(e) : e;
  return Tr(r) ? t.filter(function(o) {
    return Tr(o) && Cf(o, r) && $n(o) !== "body";
  }) : [];
}
function Y1(e, t, n, r) {
  var o = t === "clippingParents" ? q1(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = vc(e, u, r);
    return l.top = yr(f.top, l.top), l.right = ha(f.right, l.right), l.bottom = ha(f.bottom, l.bottom), l.left = yr(f.left, l.left), l;
  }, vc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Pf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? xn(r) : null, a = r ? qr(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Wt:
      l = { x: s, y: t.y - n.height };
      break;
    case on:
      l = { x: s, y: t.y + t.height };
      break;
    case an:
      l = { x: t.x + t.width, y: i };
      break;
    case Gt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? vl(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Wr:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case So:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function Eo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? b1 : i, u = n.rootBoundary, f = u === void 0 ? Tf : u, m = n.elementContext, p = m === void 0 ? ro : m, v = n.altBoundary, h = v === void 0 ? !1 : v, g = n.padding, S = g === void 0 ? 0 : g, d = Of(typeof S != "number" ? S : Lf(S, Ro)), C = p === ro ? y1 : ro, L = e.rects.popper, E = e.elements[h ? C : p], y = Y1(Tr(E) ? E : E.contextElement || pr(e.elements.popper), l, f, s), k = Kr(e.elements.reference), O = Pf({ reference: k, element: L, placement: o }), W = Ss(Object.assign({}, L, O)), G = p === ro ? W : k, te = { top: y.top - G.top + d.top, bottom: G.bottom - y.bottom + d.bottom, left: y.left - G.left + d.left, right: G.right - y.right + d.right }, de = e.modifiersData.offset;
  if (p === ro && de) {
    var ne = de[o];
    Object.keys(te).forEach(function(ve) {
      var pe = [an, on].indexOf(ve) >= 0 ? 1 : -1, P = [Wt, on].indexOf(ve) >= 0 ? "y" : "x";
      te[ve] += ne[P] * pe;
    });
  }
  return te;
}
function Z1(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Na : l, f = qr(r), m = f ? i ? pc : pc.filter(function(h) {
    return qr(h) === f;
  }) : Ro, p = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = m);
  var v = p.reduce(function(h, g) {
    return h[g] = Eo(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[xn(g)], h;
  }, {});
  return Object.keys(v).sort(function(h, g) {
    return v[h] - v[g];
  });
}
function X1(e) {
  if (xn(e) === ml) return [];
  var t = ea(e);
  return [gc(e), t, gc(t)];
}
function Q1(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, h = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, S = t.options.placement, d = xn(S), C = d === S, L = l || (C || !h ? [ea(S)] : X1(S)), E = [S].concat(L).reduce(function(ke, qe) {
      return ke.concat(xn(qe) === ml ? Z1(t, { placement: qe, boundary: f, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: g }) : qe);
    }, []), y = t.rects.reference, k = t.rects.popper, O = /* @__PURE__ */ new Map(), W = !0, G = E[0], te = 0; te < E.length; te++) {
      var de = E[te], ne = xn(de), ve = qr(de) === Wr, pe = [Wt, on].indexOf(ne) >= 0, P = pe ? "width" : "height", $ = Eo(t, { placement: de, boundary: f, rootBoundary: m, altBoundary: p, padding: u }), B = pe ? ve ? an : Gt : ve ? on : Wt;
      y[P] > k[P] && (B = ea(B));
      var ie = ea(B), ee = [];
      if (a && ee.push($[ne] <= 0), i && ee.push($[B] <= 0, $[ie] <= 0), ee.every(function(ke) {
        return ke;
      })) {
        G = de, W = !1;
        break;
      }
      O.set(de, ee);
    }
    if (W) for (var _e = h ? 3 : 1, X = function(ke) {
      var qe = E.find(function(Se) {
        var et = O.get(Se);
        if (et) return et.slice(0, ke).every(function(ce) {
          return ce;
        });
      });
      if (qe) return G = qe, "break";
    }, Ve = _e; Ve > 0; Ve--) {
      var Oe = X(Ve);
      if (Oe === "break") break;
    }
    t.placement !== G && (t.modifiersData[r]._skip = !0, t.placement = G, t.reset = !0);
  }
}
var J1 = { name: "flip", enabled: !0, phase: "main", fn: Q1, requiresIfExists: ["offset"], data: { _skip: !1 } };
function bc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function yc(e) {
  return [Wt, an, on, Gt].some(function(t) {
    return e[t] >= 0;
  });
}
function e_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Eo(t, { elementContext: "reference" }), i = Eo(t, { altBoundary: !0 }), l = bc(s, r), u = bc(i, o, a), f = yc(l), m = yc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var t_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: e_ };
function n_(e, t, n) {
  var r = xn(e), o = [Gt, Wt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Gt, an].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function r_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Na.reduce(function(f, m) {
    return f[m] = n_(m, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var o_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: r_ };
function a_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Pf({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Nf = { name: "popperOffsets", enabled: !0, phase: "read", fn: a_, data: {} };
function s_(e) {
  return e === "x" ? "y" : "x";
}
function l_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, p = n.tether, v = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, S = Eo(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: f }), d = xn(t.placement), C = qr(t.placement), L = !C, E = vl(d), y = s_(E), k = t.modifiersData.popperOffsets, O = t.rects.reference, W = t.rects.popper, G = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, te = typeof G == "number" ? { mainAxis: G, altAxis: G } : Object.assign({ mainAxis: 0, altAxis: 0 }, G), de = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = { x: 0, y: 0 };
  if (k) {
    if (a) {
      var ve, pe = E === "y" ? Wt : Gt, P = E === "y" ? on : an, $ = E === "y" ? "height" : "width", B = k[E], ie = B + S[pe], ee = B - S[P], _e = v ? -W[$] / 2 : 0, X = C === Wr ? O[$] : W[$], Ve = C === Wr ? -W[$] : -O[$], Oe = t.elements.arrow, ke = v && Oe ? gl(Oe) : { width: 0, height: 0 }, qe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Af(), Se = qe[pe], et = qe[P], ce = po(0, O[$], ke[$]), tt = L ? O[$] / 2 - _e - ce - Se - te.mainAxis : X - ce - Se - te.mainAxis, ft = L ? -O[$] / 2 + _e + ce + et + te.mainAxis : Ve + ce + et + te.mainAxis, Ue = t.elements.arrow && xo(t.elements.arrow), Tt = Ue ? E === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0, at = (ve = de?.[E]) != null ? ve : 0, gt = B + tt - at - Tt, st = B + ft - at, $e = po(v ? ha(ie, gt) : ie, B, v ? yr(ee, st) : ee);
      k[E] = $e, ne[E] = $e - B;
    }
    if (i) {
      var vt, w = E === "x" ? Wt : Gt, A = E === "x" ? on : an, F = k[y], Y = y === "y" ? "height" : "width", Ee = F + S[w], ue = F - S[A], T = [Wt, Gt].indexOf(d) !== -1, M = (vt = de?.[y]) != null ? vt : 0, me = T ? Ee : F - O[Y] - W[Y] - M + te.altAxis, Ce = T ? F + O[Y] + W[Y] - M - te.altAxis : ue, Ye = v && T ? N1(me, F, Ce) : po(v ? me : Ee, F, v ? Ce : ue);
      k[y] = Ye, ne[y] = Ye - F;
    }
    t.modifiersData[r] = ne;
  }
}
var i_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: l_, requiresIfExists: ["offset"] };
function c_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function u_(e) {
  return e === Qt(e) || !rn(e) ? bl(e) : c_(e);
}
function f_(e) {
  var t = e.getBoundingClientRect(), n = Gr(t.width) / e.offsetWidth || 1, r = Gr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function d_(e, t, n) {
  n === void 0 && (n = !1);
  var r = rn(t), o = rn(t) && f_(t), a = pr(t), s = Kr(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && (($n(t) !== "body" || _l(a)) && (i = u_(t)), rn(t) ? (l = Kr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = yl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function p_(e) {
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
function m_(e) {
  var t = p_(e);
  return L1.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function h_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function g_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var _c = { placement: "bottom", modifiers: [], strategy: "absolute" };
function wc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function wl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? _c : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, _c, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], m = !1, p = { state: u, setOptions: function(g) {
      var S = typeof g == "function" ? g(u.options) : g;
      h(), u.options = Object.assign({}, a, u.options, S), u.scrollParents = { reference: Tr(s) ? mo(s) : s.contextElement ? mo(s.contextElement) : [], popper: mo(i) };
      var d = m_(g_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(C) {
        return C.enabled;
      }), v(), p.update();
    }, forceUpdate: function() {
      if (!m) {
        var g = u.elements, S = g.reference, d = g.popper;
        if (wc(S, d)) {
          u.rects = { reference: d_(S, xo(d), u.options.strategy === "fixed"), popper: gl(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(W) {
            return u.modifiersData[W.name] = Object.assign({}, W.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var L = u.orderedModifiers[C], E = L.fn, y = L.options, k = y === void 0 ? {} : y, O = L.name;
            typeof E == "function" && (u = E({ state: u, options: k, name: O, instance: p }) || u);
          }
        }
      }
    }, update: h_(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!wc(s, i)) return p;
    p.setOptions(l).then(function(g) {
      !m && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function v() {
      u.orderedModifiers.forEach(function(g) {
        var S = g.name, d = g.options, C = d === void 0 ? {} : d, L = g.effect;
        if (typeof L == "function") {
          var E = L({ state: u, name: S, instance: p, options: C }), y = function() {
          };
          f.push(E || y);
        }
      });
    }
    function h() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return p;
  };
}
wl();
var v_ = [Rf, Nf, If, Sf];
wl({ defaultModifiers: v_ });
var b_ = [Rf, Nf, If, Sf, o_, J1, i_, F1, t_], y_ = wl({ defaultModifiers: b_ });
const __ = ["fixed", "absolute"], w_ = Ke({
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
    values: Na,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: __,
    default: "absolute"
  }
}), $f = Ke({
  ...w_,
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
  ...Or(["ariaLabel"])
}), k_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, T_ = (e, t) => {
  const n = j(!1), r = j();
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
}, S_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...C_(e), ...t]
  };
  return A_(a, o?.modifiers), a;
}, E_ = (e) => {
  if (pt)
    return Gn(e);
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
function A_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const O_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = L_(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = I(() => {
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
  }), a = ir(), s = j({
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
  return be(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), be([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = y_(l, u, c(o)));
  }), Mn(() => {
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
function L_(e) {
  const t = Object.keys(e.elements), n = ua(t.map((o) => [o, e.styles[o] || {}])), r = ua(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const I_ = 0, R_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Fe(fl, void 0), a = j(), s = j(), i = I(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = I(() => {
    var d;
    const C = c(a), L = (d = c(s)) != null ? d : I_;
    return {
      name: "arrow",
      enabled: !q0(C),
      options: {
        element: C,
        padding: L
      }
    };
  }), u = I(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...S_(e, [
      c(l),
      c(i)
    ])
  })), f = I(() => E_(e.referenceEl) || c(r)), { attributes: m, state: p, styles: v, update: h, forceUpdate: g, instanceRef: S } = O_(f, n, u);
  return be(S, (d) => t.value = d), ut(() => {
    be(() => {
      var d;
      return (d = c(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: S,
    state: p,
    styles: v,
    role: o,
    forceUpdate: g,
    update: h
  };
}, x_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Yu(), a = mt("popper"), s = I(() => c(t).popper), i = j(Ne(e.zIndex) ? e.zIndex : o()), l = I(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = I(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = I(() => r.value === "dialog" ? "false" : void 0), m = I(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Ne(e.zIndex) ? e.zIndex : o();
    }
  };
}, P_ = re({
  name: "ElPopperContent"
}), N_ = /* @__PURE__ */ re({
  ...P_,
  props: $f,
  emits: k_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = T_(r, n), { attributes: m, arrowRef: p, contentRef: v, styles: h, instanceRef: g, role: S, update: d } = R_(r), {
      ariaModal: C,
      arrowStyle: L,
      contentAttrs: E,
      contentClass: y,
      contentStyle: k,
      updateZIndex: O
    } = x_(r, {
      styles: h,
      attributes: m,
      role: S
    }), W = Fe(ma, void 0), G = j();
    Pn(gf, {
      arrowStyle: L,
      arrowRef: p,
      arrowOffset: G
    }), W && Pn(ma, {
      ...W,
      addInputId: wo,
      removeInputId: wo
    });
    let te;
    const de = (ve = !0) => {
      d(), ve && O();
    }, ne = () => {
      de(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ut(() => {
      be(() => r.triggerTargetEl, (ve, pe) => {
        te?.(), te = void 0;
        const P = c(ve || v.value), $ = c(pe || v.value);
        hn(P) && (te = be([S, () => r.ariaLabel, C, () => r.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ie, ee) => {
            Yn(B[ee]) ? P.removeAttribute(ie) : P.setAttribute(ie, B[ee]);
          });
        }, { immediate: !0 })), $ !== P && hn($) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          $.removeAttribute(B);
        });
      }, { immediate: !0 }), be(() => r.visible, ne, { immediate: !0 });
    }), Mn(() => {
      te?.(), te = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: g,
      updatePopper: de,
      contentStyle: k
    }), (ve, pe) => (R(), H("div", zr({
      ref_key: "contentRef",
      ref: v
    }, c(E), {
      style: c(k),
      class: c(y),
      tabindex: "-1",
      onMouseenter: (P) => ve.$emit("mouseenter", P),
      onMouseleave: (P) => ve.$emit("mouseleave", P)
    }), [
      N(c(v1), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(v),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: ae(() => [
          ge(ve.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var $_ = /* @__PURE__ */ Ze(N_, [["__file", "content.vue"]]);
const M_ = bn(Ky), kl = Symbol("elTooltip");
function kc() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Lo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const D_ = Ke({
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
}), F_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = kc(), {
    registerTimeout: s,
    cancelTimeout: i
  } = kc();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const m = c(n);
        Ne(m) && m > 0 && s(() => {
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
}, Tl = Ke({
  ...D_,
  ...$f,
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
  ...Or(["ariaLabel"])
}), Mf = Ke({
  ...yf,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [Rn.enter, Rn.numpadEnter, Rn.space]
  }
}), z_ = La({
  type: he(Boolean),
  default: null
}), B_ = La({
  type: he(Function)
}), V_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: z_,
    [n]: B_
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
      const p = Vt(), { emit: v } = p, h = p.props, g = I(() => Je(h[n])), S = I(() => h[e] === null), d = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), Je(f) && f(O));
      }, C = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), Je(m) && m(O));
      }, L = (O) => {
        if (h.disabled === !0 || Je(u) && !u())
          return;
        const W = g.value && pt;
        W && v(t, !0), (S.value || !W) && d(O);
      }, E = (O) => {
        if (h.disabled === !0 || !pt)
          return;
        const W = g.value && pt;
        W && v(t, !1), (S.value || !W) && C(O);
      }, y = (O) => {
        cr(O) && (h.disabled && O ? g.value && v(t, !1) : s.value !== O && (O ? d() : C()));
      }, k = () => {
        s.value ? E() : L();
      };
      return be(() => h[e], y), l && p.appContext.config.globalProperties.$route !== void 0 && be(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && s.value && E();
      }), ut(() => {
        y(h[e]);
      }), {
        hide: E,
        show: L,
        toggle: k,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: j_,
  useModelToggleEmits: U_,
  useModelToggle: H_
} = V_("visible"), W_ = Ke({
  ...vf,
  ...j_,
  ...Tl,
  ...Mf,
  ...bf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), G_ = [
  ...U_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], K_ = (e, t) => An(e) ? e.includes(t) : e === t, xr = (e, t, n) => (r) => {
  K_(c(e), t) && n(r);
}, jn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, q_ = re({
  name: "ElTooltipTrigger"
}), Y_ = /* @__PURE__ */ re({
  ...q_,
  props: Mf,
  setup(e, { expose: t }) {
    const n = e, r = mt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Fe(kl, void 0), f = j(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, p = Un(n, "trigger"), v = jn(m, xr(p, "hover", i)), h = jn(m, xr(p, "hover", l)), g = jn(m, xr(p, "click", (E) => {
      E.button === 0 && u(E);
    })), S = jn(m, xr(p, "focus", i)), d = jn(m, xr(p, "focus", l)), C = jn(m, xr(p, "contextmenu", (E) => {
      E.preventDefault(), u(E);
    })), L = jn(m, (E) => {
      const { code: y } = E;
      n.triggerKeys.includes(y) && (E.preventDefault(), u(E));
    });
    return t({
      triggerRef: f
    }), (E, y) => (R(), le(c(r1), {
      id: c(a),
      "virtual-ref": E.virtualRef,
      open: c(s),
      "virtual-triggering": E.virtualTriggering,
      class: U(c(r).e("trigger")),
      onBlur: c(d),
      onClick: c(g),
      onContextmenu: c(C),
      onFocus: c(S),
      onMouseenter: c(v),
      onMouseleave: c(h),
      onKeydown: c(L)
    }, {
      default: ae(() => [
        ge(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Z_ = /* @__PURE__ */ Ze(Y_, [["__file", "trigger.vue"]]);
const X_ = Ke({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Q_ = /* @__PURE__ */ re({
  __name: "teleport",
  props: X_,
  setup(e) {
    return (t, n) => t.disabled ? ge(t.$slots, "default", { key: 0 }) : (R(), le(ud, {
      key: 1,
      to: t.to
    }, [
      ge(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var J_ = /* @__PURE__ */ Ze(Q_, [["__file", "teleport.vue"]]);
const ew = bn(J_), Df = () => {
  const e = qs(), t = df(), n = I(() => `${e.value}-popper-container-${t.prefix}`), r = I(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, tw = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, nw = () => {
  const { id: e, selector: t } = Df();
  return fd(() => {
    pt && (document.body.querySelector(t.value) || tw(e.value));
  }), {
    id: e,
    selector: t
  };
}, rw = re({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ow = /* @__PURE__ */ re({
  ...rw,
  props: Tl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Df(), o = mt("tooltip"), a = j();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: m,
      onOpen: p,
      onShow: v,
      onHide: h,
      onBeforeShow: g,
      onBeforeHide: S
    } = Fe(kl, void 0), d = I(() => n.transition || `${o.namespace.value}-fade-in-linear`), C = I(() => n.persistent);
    Mn(() => {
      s?.();
    });
    const L = I(() => c(C) ? !0 : c(u)), E = I(() => n.disabled ? !1 : c(u)), y = I(() => n.appendTo || r.value), k = I(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), O = j(!0), W = () => {
      h(), $() && Vn(document.body), O.value = !0;
    }, G = () => {
      if (c(i))
        return !0;
    }, te = jn(G, () => {
      n.enterable && c(f) === "hover" && p();
    }), de = jn(G, () => {
      c(f) === "hover" && m();
    }), ne = () => {
      var B, ie;
      (ie = (B = a.value) == null ? void 0 : B.updatePopper) == null || ie.call(B), g?.();
    }, ve = () => {
      S?.();
    }, pe = () => {
      v(), s = fb(I(() => {
        var B;
        return (B = a.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && m();
      });
    }, P = () => {
      n.virtualTriggering || m();
    }, $ = (B) => {
      var ie;
      const ee = (ie = a.value) == null ? void 0 : ie.popperContentRef, _e = B?.relatedTarget || document.activeElement;
      return ee?.contains(_e);
    };
    return be(() => c(u), (B) => {
      B ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), be(() => n.content, () => {
      var B, ie;
      (ie = (B = a.value) == null ? void 0 : B.updatePopper) == null || ie.call(B);
    }), t({
      contentRef: a,
      isFocusInsideContent: $
    }), (B, ie) => (R(), le(c(ew), {
      disabled: !B.teleported,
      to: c(y)
    }, {
      default: ae(() => [
        N(Xr, {
          name: c(d),
          onAfterLeave: W,
          onBeforeEnter: ne,
          onAfterEnter: pe,
          onBeforeLeave: ve
        }, {
          default: ae(() => [
            c(L) ? kt((R(), le(c($_), zr({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": B.boundariesPadding,
              "fallback-placements": B.fallbackPlacements,
              "gpu-acceleration": B.gpuAcceleration,
              offset: B.offset,
              placement: B.placement,
              "popper-options": B.popperOptions,
              strategy: B.strategy,
              effect: B.effect,
              enterable: B.enterable,
              pure: B.pure,
              "popper-class": B.popperClass,
              "popper-style": [B.popperStyle, c(k)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: c(E),
              "z-index": B.zIndex,
              onMouseenter: c(te),
              onMouseleave: c(de),
              onBlur: P,
              onClose: c(m)
            }), {
              default: ae(() => [
                ge(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Xn, c(E)]
            ]) : J("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var aw = /* @__PURE__ */ Ze(ow, [["__file", "content.vue"]]);
const sw = re({
  name: "ElTooltip"
}), lw = /* @__PURE__ */ re({
  ...sw,
  props: W_,
  emits: G_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    nw();
    const o = Ra(), a = j(), s = j(), i = () => {
      var d;
      const C = c(a);
      C && ((d = C.popperInstanceRef) == null || d.update());
    }, l = j(!1), u = j(), { show: f, hide: m, hasUpdateHandler: p } = H_({
      indicator: l,
      toggleReason: u
    }), { onOpen: v, onClose: h } = F_({
      showAfter: Un(r, "showAfter"),
      hideAfter: Un(r, "hideAfter"),
      autoClose: Un(r, "autoClose"),
      open: f,
      close: m
    }), g = I(() => cr(r.visible) && !p.value);
    Pn(kl, {
      controlled: g,
      id: o,
      open: Ls(l),
      trigger: Un(r, "trigger"),
      onOpen: (d) => {
        v(d);
      },
      onClose: (d) => {
        h(d);
      },
      onToggle: (d) => {
        c(l) ? h(d) : v(d);
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
    }), be(() => r.disabled, (d) => {
      d && l.value && (l.value = !1);
    });
    const S = (d) => {
      var C;
      return (C = s.value) == null ? void 0 : C.isFocusInsideContent(d);
    };
    return dd(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: S,
      updatePopper: i,
      onOpen: v,
      onClose: h,
      hide: m
    }), (d, C) => (R(), le(c(M_), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: ae(() => [
        N(Z_, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: ae(() => [
            d.$slots.default ? ge(d.$slots, "default", { key: 0 }) : J("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        N(aw, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": d.ariaLabel,
          "boundaries-padding": d.boundariesPadding,
          content: d.content,
          disabled: d.disabled,
          effect: d.effect,
          enterable: d.enterable,
          "fallback-placements": d.fallbackPlacements,
          "hide-after": d.hideAfter,
          "gpu-acceleration": d.gpuAcceleration,
          offset: d.offset,
          persistent: d.persistent,
          "popper-class": d.popperClass,
          "popper-style": d.popperStyle,
          placement: d.placement,
          "popper-options": d.popperOptions,
          pure: d.pure,
          "raw-content": d.rawContent,
          "reference-el": d.referenceEl,
          "trigger-target-el": d.triggerTargetEl,
          "show-after": d.showAfter,
          strategy: d.strategy,
          teleported: d.teleported,
          transition: d.transition,
          "virtual-triggering": d.virtualTriggering,
          "z-index": d.zIndex,
          "append-to": d.appendTo
        }, {
          default: ae(() => [
            ge(d.$slots, "content", {}, () => [
              d.rawContent ? (R(), H("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (R(), H("span", { key: 1 }, V(d.content), 1))
            ]),
            d.showArrow ? (R(), le(c(Zy), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : J("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var iw = /* @__PURE__ */ Ze(lw, [["__file", "tooltip.vue"]]);
const cw = bn(iw), uw = Ke({
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
}), fw = re({
  name: "ElBadge"
}), dw = /* @__PURE__ */ re({
  ...fw,
  props: uw,
  setup(e, { expose: t }) {
    const n = e, r = mt("badge"), o = I(() => n.isDot ? "" : Ne(n.value) && Ne(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = I(() => {
      var s, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Hr(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Hr((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (R(), H("div", {
      class: U(c(r).b())
    }, [
      ge(s.$slots, "default"),
      N(Xr, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ae(() => [
          kt(_("sup", {
            class: U([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ct(c(a))
          }, [
            ge(s.$slots, "content", { value: c(o) }, () => [
              Zt(V(c(o)), 1)
            ])
          ], 6), [
            [Xn, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var pw = /* @__PURE__ */ Ze(dw, [["__file", "badge.vue"]]);
const mw = bn(pw), hw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Es = Ke({
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
    values: al
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), gw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, vw = re({
  name: "ElTag"
}), bw = /* @__PURE__ */ re({
  ...vw,
  props: Es,
  emits: gw,
  setup(e, { emit: t }) {
    const n = e, r = Io(), o = mt("tag"), a = I(() => {
      const { type: u, hit: f, effect: m, closable: p, round: v } = n;
      return [
        o.b(),
        o.is("closable", p),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(m),
        o.is("hit", f),
        o.is("round", v)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var f, m, p;
      (p = (m = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : m.component) != null && p.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (R(), H("span", {
      key: 0,
      class: U(c(a)),
      style: Ct({ backgroundColor: u.color }),
      onClick: i
    }, [
      _("span", {
        class: U(c(o).e("content"))
      }, [
        ge(u.$slots, "default")
      ], 2),
      u.closable ? (R(), le(c(dt), {
        key: 0,
        class: U(c(o).e("close")),
        onClick: Xe(s, ["stop"])
      }, {
        default: ae(() => [
          N(c(da))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : J("v-if", !0)
    ], 6)) : (R(), le(Xr, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ae(() => [
        _("span", {
          class: U(c(a)),
          style: Ct({ backgroundColor: u.color }),
          onClick: i
        }, [
          _("span", {
            class: U(c(o).e("content"))
          }, [
            ge(u.$slots, "default")
          ], 2),
          u.closable ? (R(), le(c(dt), {
            key: 0,
            class: U(c(o).e("close")),
            onClick: Xe(s, ["stop"])
          }, {
            default: ae(() => [
              N(c(da))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : J("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var yw = /* @__PURE__ */ Ze(bw, [["__file", "tag.vue"]]);
const _w = bn(yw), or = /* @__PURE__ */ new Map();
if (pt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of or.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Tc(e, t) {
  let n = [];
  return An(t.arg) ? n = t.arg : hn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), m = e === s, p = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), v = a && (a.contains(s) || a.contains(i));
    l || u || f || m || p || v || t.value(r, o);
  };
}
const ww = {
  beforeMount(e, t) {
    or.has(e) || or.set(e, []), or.get(e).push({
      documentHandler: Tc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    or.has(e) || or.set(e, []);
    const n = or.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Tc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    or.delete(e);
  }
}, kw = Ke({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: Ia,
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
  ...ef
}), un = {};
re({
  name: "ElConfigProvider",
  props: kw,
  setup(e, { slots: t }) {
    be(() => e.message, (r) => {
      Object.assign(un, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rf(e);
    return () => ge(t, "default", { config: n?.value });
  }
});
const Tw = 100, Sw = 600, Sc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Tw, delay: o = Sw } = Je(n) ? {} : n;
    let a, s;
    const i = () => Je(n) ? n() : n.handler(), l = () => {
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
}, Ew = Ke({
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
  size: Ia,
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
    validator: (e) => e === null || Ne(e) || ["min", "max"].includes(e),
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
  ...Or(["ariaLabel"])
}), Cw = {
  [Qn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Zn]: (e) => Ne(e) || Yn(e),
  [wt]: (e) => Ne(e) || Yn(e)
}, Aw = re({
  name: "ElInputNumber"
}), Ow = /* @__PURE__ */ re({
  ...Aw,
  props: Ew,
  emits: Cw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ol(), a = mt("input-number"), s = j(), i = _r({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = xa(), u = I(() => Ne(r.modelValue) && r.modelValue <= r.min), f = I(() => Ne(r.modelValue) && r.modelValue >= r.max), m = I(() => {
      const P = d(r.step);
      return On(r.precision) ? Math.max(d(r.modelValue), P) : (P > r.precision, r.precision);
    }), p = I(() => r.controls && r.controlsPosition === "right"), v = Io(), h = cl(), g = I(() => {
      if (i.userInput !== null)
        return i.userInput;
      let P = i.currentValue;
      if (Yn(P))
        return "";
      if (Ne(P)) {
        if (Number.isNaN(P))
          return "";
        On(r.precision) || (P = P.toFixed(r.precision));
      }
      return P;
    }), S = (P, $) => {
      if (On($) && ($ = m.value), $ === 0)
        return Math.round(P);
      let B = String(P);
      const ie = B.indexOf(".");
      if (ie === -1 || !B.replace(".", "").split("")[ie + $])
        return P;
      const X = B.length;
      return B.charAt(X - 1) === "5" && (B = `${B.slice(0, Math.max(0, X - 1))}6`), Number.parseFloat(Number(B).toFixed($));
    }, d = (P) => {
      if (Yn(P))
        return 0;
      const $ = P.toString(), B = $.indexOf(".");
      let ie = 0;
      return B !== -1 && (ie = $.length - B - 1), ie;
    }, C = (P, $ = 1) => Ne(P) ? S(P + r.step * $) : i.currentValue, L = () => {
      if (r.readonly || h.value || f.value)
        return;
      const P = Number(g.value) || 0, $ = C(P);
      k($), n(Zn, i.currentValue), ve();
    }, E = () => {
      if (r.readonly || h.value || u.value)
        return;
      const P = Number(g.value) || 0, $ = C(P, -1);
      k($), n(Zn, i.currentValue), ve();
    }, y = (P, $) => {
      const { max: B, min: ie, step: ee, precision: _e, stepStrictly: X, valueOnClear: Ve } = r;
      B < ie && rl("InputNumber", "min should not be greater than max.");
      let Oe = Number(P);
      if (Yn(P) || Number.isNaN(Oe))
        return null;
      if (P === "") {
        if (Ve === null)
          return null;
        Oe = $t(Ve) ? { min: ie, max: B }[Ve] : Ve;
      }
      return X && (Oe = S(Math.round(Oe / ee) * ee, _e), Oe !== P && $ && n(wt, Oe)), On(_e) || (Oe = S(Oe, _e)), (Oe > B || Oe < ie) && (Oe = Oe > B ? B : ie, $ && n(wt, Oe)), Oe;
    }, k = (P, $ = !0) => {
      var B;
      const ie = i.currentValue, ee = y(P);
      if (!$) {
        n(wt, ee);
        return;
      }
      ie === ee && P || (i.userInput = null, n(wt, ee), ie !== ee && n(Qn, ee, ie), r.validateEvent && ((B = l?.validate) == null || B.call(l, "change").catch((_e) => void 0)), i.currentValue = ee);
    }, O = (P) => {
      i.userInput = P;
      const $ = P === "" ? null : Number(P);
      n(Zn, $), k($, !1);
    }, W = (P) => {
      const $ = P !== "" ? Number(P) : "";
      (Ne($) && !Number.isNaN($) || P === "") && k($), ve(), i.userInput = null;
    }, G = () => {
      var P, $;
      ($ = (P = s.value) == null ? void 0 : P.focus) == null || $.call(P);
    }, te = () => {
      var P, $;
      ($ = (P = s.value) == null ? void 0 : P.blur) == null || $.call(P);
    }, de = (P) => {
      n("focus", P);
    }, ne = (P) => {
      var $, B;
      i.userInput = null, uf() && i.currentValue === null && (($ = s.value) != null && $.input) && (s.value.input.value = ""), n("blur", P), r.validateEvent && ((B = l?.validate) == null || B.call(l, "blur").catch((ie) => void 0));
    }, ve = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, pe = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return be(() => r.modelValue, (P, $) => {
      const B = y(P, !0);
      i.userInput === null && B !== $ && (i.currentValue = B);
    }, { immediate: !0 }), ut(() => {
      var P;
      const { min: $, max: B, modelValue: ie } = r, ee = (P = s.value) == null ? void 0 : P.input;
      if (ee.setAttribute("role", "spinbutton"), Number.isFinite(B) ? ee.setAttribute("aria-valuemax", String(B)) : ee.removeAttribute("aria-valuemax"), Number.isFinite($) ? ee.setAttribute("aria-valuemin", String($)) : ee.removeAttribute("aria-valuemin"), ee.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), ee.setAttribute("aria-disabled", String(h.value)), !Ne(ie) && ie != null) {
        let _e = Number(ie);
        Number.isNaN(_e) && (_e = null), n(wt, _e);
      }
      ee.addEventListener("wheel", pe, { passive: !1 });
    }), Wc(() => {
      var P, $;
      const B = (P = s.value) == null ? void 0 : P.input;
      B?.setAttribute("aria-valuenow", `${($ = i.currentValue) != null ? $ : ""}`);
    }), t({
      focus: G,
      blur: te
    }), (P, $) => (R(), H("div", {
      class: U([
        c(a).b(),
        c(a).m(c(v)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !P.controls),
        c(a).is("controls-right", c(p))
      ]),
      onDragstart: Xe(() => {
      }, ["prevent"])
    }, [
      P.controls ? kt((R(), H("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: U([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: nn(E, ["enter"])
      }, [
        ge(P.$slots, "decrease-icon", {}, () => [
          N(c(dt), null, {
            default: ae(() => [
              c(p) ? (R(), le(c(sf), { key: 0 })) : (R(), le(c(ty), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Sc), E]
      ]) : J("v-if", !0),
      P.controls ? kt((R(), H("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: U([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: nn(L, ["enter"])
      }, [
        ge(P.$slots, "increase-icon", {}, () => [
          N(c(dt), null, {
            default: ae(() => [
              c(p) ? (R(), le(c(jb), { key: 0 })) : (R(), le(c(ry), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Sc), L]
      ]) : J("v-if", !0),
      N(c(Oy), {
        id: P.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: P.step,
        "model-value": c(g),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: c(h),
        size: c(v),
        max: P.max,
        min: P.min,
        name: P.name,
        "aria-label": P.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          nn(Xe(L, ["prevent"]), ["up"]),
          nn(Xe(E, ["prevent"]), ["down"])
        ],
        onBlur: ne,
        onFocus: de,
        onInput: O,
        onChange: W
      }, pd({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: ae(() => [
            ge(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: ae(() => [
            ge(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Lw = /* @__PURE__ */ Ze(Ow, [["__file", "input-number.vue"]]);
const Iw = bn(Lw);
function Rw() {
  const e = ir(), t = j(0), n = 11, r = I(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Cn(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Ff = Symbol("ElSelectGroup"), Ma = Symbol("ElSelect");
function xw(e, t) {
  const n = Fe(Ma), r = Fe(Ff, { disabled: !1 }), o = I(() => f(sr(n.props.modelValue), e.value)), a = I(() => {
    var v;
    if (n.props.multiple) {
      const h = sr((v = n.props.modelValue) != null ? v : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = I(() => e.label || (Xt(e.value) ? "" : e.value)), i = I(() => e.value || e.label || ""), l = I(() => e.disabled || t.groupDisabled || a.value), u = Vt(), f = (v = [], h) => {
    if (Xt(e.value)) {
      const g = n.props.valueKey;
      return v && v.some((S) => md(lr(S, g)) === lr(h, g));
    } else
      return v && v.includes(h);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, p = (v) => {
    const h = new RegExp(hw(v), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return be(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), be(() => e.value, (v, h) => {
    const { remote: g, valueKey: S } = n.props;
    if ((g ? v !== h : !fo(v, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (S && Xt(v) && Xt(h) && v[S] === h[S])
        return;
      n.setSelected();
    }
  }), be(() => r.disabled, () => {
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
const Pw = re({
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
    const t = mt("select"), n = Ra(), r = I(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(p))
    ]), o = _r({
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
    } = xw(e, o), { visible: m, hover: p } = Is(o), v = Vt().proxy;
    l.onOptionCreate(v), Mn(() => {
      const g = v.value, { selected: S } = l.states, d = S.some((C) => C.value === v.value);
      lt(() => {
        l.states.cachedOptions.get(g) === v && !d && l.states.cachedOptions.delete(g);
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
      updateOption: f,
      visible: m,
      hover: p,
      selectOptionClick: h,
      states: o
    };
  }
});
function Nw(e, t, n, r, o, a) {
  return kt((R(), H("li", {
    id: e.id,
    class: U(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Xe(e.selectOptionClick, ["stop"])
  }, [
    ge(e.$slots, "default", {}, () => [
      _("span", null, V(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Xn, e.visible]
  ]);
}
var Sl = /* @__PURE__ */ Ze(Pw, [["render", Nw], ["__file", "option.vue"]]);
const $w = re({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Fe(Ma), t = mt("select"), n = I(() => e.props.popperClass), r = I(() => e.props.multiple), o = I(() => e.props.fitInputWidth), a = j("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ut(() => {
      s(), Cn(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function Mw(e, t, n, r, o, a) {
  return R(), H("div", {
    class: U([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ct({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), H("div", {
      key: 0,
      class: U(e.ns.be("dropdown", "header"))
    }, [
      ge(e.$slots, "header")
    ], 2)) : J("v-if", !0),
    ge(e.$slots, "default"),
    e.$slots.footer ? (R(), H("div", {
      key: 1,
      class: U(e.ns.be("dropdown", "footer"))
    }, [
      ge(e.$slots, "footer")
    ], 2)) : J("v-if", !0)
  ], 6);
}
var Dw = /* @__PURE__ */ Ze($w, [["render", Mw], ["__file", "select-dropdown.vue"]]);
const Fw = (e, t) => {
  const { t: n } = ol(), r = Ra(), o = mt("select"), a = mt("input"), s = _r({
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
  }), i = j(null), l = j(null), u = j(null), f = j(null), m = j(null), p = j(null), v = j(null), h = j(null), g = j(null), S = j(null), d = j(null), {
    isComposing: C,
    handleCompositionStart: L,
    handleCompositionUpdate: E,
    handleCompositionEnd: y
  } = hf({
    afterComposition: (x) => Ye(x)
  }), { wrapperRef: k, isFocused: O, handleBlur: W } = mf(m, {
    beforeFocus() {
      return $.value;
    },
    afterFocus() {
      e.automaticDropdown && !G.value && (G.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(x) {
      var Z, ye;
      return ((Z = u.value) == null ? void 0 : Z.isFocusInsideContent(x)) || ((ye = f.value) == null ? void 0 : ye.isFocusInsideContent(x));
    },
    afterBlur() {
      G.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), G = j(!1), te = j(), { form: de, formItem: ne } = xa(), { inputId: ve } = il(e, {
    formItemContext: ne
  }), { valueOnClear: pe, isEmptyValue: P } = Pb(e), $ = I(() => e.disabled || de?.disabled), B = I(() => An(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), ie = I(() => {
    var x;
    return (x = de?.statusIcon) != null ? x : !1;
  }), ee = I(() => e.clearable && !$.value && s.inputHovering && B.value), _e = I(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), X = I(() => o.is("reverse", _e.value && G.value)), Ve = I(() => ne?.validateState || ""), Oe = I(() => cf[Ve.value]), ke = I(() => e.remote ? 300 : 0), qe = I(() => e.remote && !s.inputValue && s.options.size === 0), Se = I(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && et.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), et = I(() => ce.value.filter((x) => x.visible).length), ce = I(() => {
    const x = Array.from(s.options.values()), Z = [];
    return s.optionValues.forEach((ye) => {
      const rt = x.findIndex((bt) => bt.value === ye);
      rt > -1 && Z.push(x[rt]);
    }), Z.length >= x.length ? Z : x;
  }), tt = I(() => Array.from(s.cachedOptions.values())), ft = I(() => {
    const x = ce.value.filter((Z) => !Z.created).some((Z) => Z.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !x;
  }), Ue = () => {
    e.filterable && Je(e.filterMethod) || e.filterable && e.remote && Je(e.remoteMethod) || ce.value.forEach((x) => {
      var Z;
      (Z = x.updateOption) == null || Z.call(x, s.inputValue);
    });
  }, Tt = Io(), at = I(() => ["small"].includes(Tt.value) ? "small" : "default"), gt = I({
    get() {
      return G.value && !qe.value;
    },
    set(x) {
      G.value = x;
    }
  }), st = I(() => {
    if (e.multiple && !On(e.modelValue))
      return sr(e.modelValue).length === 0 && !s.inputValue;
    const x = An(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || On(x) ? !s.inputValue : !0;
  }), $e = I(() => {
    var x;
    const Z = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !B.value ? Z : s.selectedLabel;
  }), vt = I(() => ws ? null : "mouseenter");
  be(() => e.modelValue, (x, Z) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), F(), !fo(x, Z) && e.validateEvent && ne?.validate("change").catch((ye) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), be(() => G.value, (x) => {
    x ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", x);
  }), be(() => s.options.entries(), () => {
    pt && (F(), e.defaultFirstOption && (e.filterable || e.remote) && et.value && A());
  }, {
    flush: "post"
  }), be([() => s.hoveringIndex, ce], ([x]) => {
    Ne(x) && x > -1 ? te.value = ce.value[x] || {} : te.value = {}, ce.value.forEach((Z) => {
      Z.hover = te.value === Z;
    });
  }), Hc(() => {
    s.isBeforeHide || Ue();
  });
  const w = (x) => {
    s.previousQuery === x || C.value || (s.previousQuery = x, e.filterable && Je(e.filterMethod) ? e.filterMethod(x) : e.filterable && e.remote && Je(e.remoteMethod) && e.remoteMethod(x), e.defaultFirstOption && (e.filterable || e.remote) && et.value ? lt(A) : lt(Ee));
  }, A = () => {
    const x = ce.value.filter((bt) => bt.visible && !bt.disabled && !bt.states.groupDisabled), Z = x.find((bt) => bt.created), ye = x[0], rt = ce.value.map((bt) => bt.value);
    s.hoveringIndex = fe(rt, Z || ye);
  }, F = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const Z = An(e.modelValue) ? e.modelValue[0] : e.modelValue, ye = Y(Z);
      s.selectedLabel = ye.currentLabel, s.selected = [ye];
      return;
    }
    const x = [];
    On(e.modelValue) || sr(e.modelValue).forEach((Z) => {
      x.push(Y(Z));
    }), s.selected = x;
  }, Y = (x) => {
    let Z;
    const ye = ih(x);
    for (let en = s.cachedOptions.size - 1; en >= 0; en--) {
      const Yt = tt.value[en];
      if (ye ? lr(Yt.value, e.valueKey) === lr(x, e.valueKey) : Yt.value === x) {
        Z = {
          value: x,
          currentLabel: Yt.currentLabel,
          get isDisabled() {
            return Yt.isDisabled;
          }
        };
        break;
      }
    }
    if (Z)
      return Z;
    const rt = ye ? x.label : x ?? "";
    return {
      value: x,
      currentLabel: rt
    };
  }, Ee = () => {
    s.hoveringIndex = ce.value.findIndex((x) => s.selected.some((Z) => je(Z) === je(x)));
  }, ue = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, T = () => {
    s.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, M = () => {
    var x, Z;
    (Z = (x = u.value) == null ? void 0 : x.updatePopper) == null || Z.call(x);
  }, me = () => {
    var x, Z;
    (Z = (x = f.value) == null ? void 0 : x.updatePopper) == null || Z.call(x);
  }, Ce = () => {
    s.inputValue.length > 0 && !G.value && (G.value = !0), w(s.inputValue);
  }, Ye = (x) => {
    if (s.inputValue = x.target.value, e.remote)
      It();
    else
      return Ce();
  }, It = G0(() => {
    Ce();
  }, ke.value), He = (x) => {
    fo(e.modelValue, x) || t(Qn, x);
  }, yn = (x) => K0(x, (Z) => {
    const ye = s.cachedOptions.get(Z);
    return ye && !ye.disabled && !ye.states.groupDisabled;
  }), mr = (x) => {
    if (e.multiple && x.code !== Rn.delete && x.target.value.length <= 0) {
      const Z = sr(e.modelValue).slice(), ye = yn(Z);
      if (ye < 0)
        return;
      const rt = Z[ye];
      Z.splice(ye, 1), t(wt, Z), He(Z), t("remove-tag", rt);
    }
  }, D = (x, Z) => {
    const ye = s.selected.indexOf(Z);
    if (ye > -1 && !$.value) {
      const rt = sr(e.modelValue).slice();
      rt.splice(ye, 1), t(wt, rt), He(rt), t("remove-tag", Z.value);
    }
    x.stopPropagation(), Kt();
  }, K = (x) => {
    x.stopPropagation();
    const Z = e.multiple ? [] : pe.value;
    if (e.multiple)
      for (const ye of s.selected)
        ye.isDisabled && Z.push(ye.value);
    t(wt, Z), He(Z), s.hoveringIndex = -1, G.value = !1, t("clear"), Kt();
  }, q = (x) => {
    var Z;
    if (e.multiple) {
      const ye = sr((Z = e.modelValue) != null ? Z : []).slice(), rt = fe(ye, x);
      rt > -1 ? ye.splice(rt, 1) : (e.multipleLimit <= 0 || ye.length < e.multipleLimit) && ye.push(x.value), t(wt, ye), He(ye), x.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(wt, x.value), He(x.value), G.value = !1;
    Kt(), !G.value && lt(() => {
      Te(x);
    });
  }, fe = (x = [], Z) => On(Z) ? -1 : Xt(Z.value) ? x.findIndex((ye) => fo(lr(ye, e.valueKey), je(Z))) : x.indexOf(Z.value), Te = (x) => {
    var Z, ye, rt, bt, en;
    const Yt = An(x) ? x[0] : x;
    let Ut = null;
    if (Yt?.value) {
      const rr = ce.value.filter((Do) => Do.value === Yt.value);
      rr.length > 0 && (Ut = rr[0].$el);
    }
    if (u.value && Ut) {
      const rr = (bt = (rt = (ye = (Z = u.value) == null ? void 0 : Z.popperRef) == null ? void 0 : ye.contentRef) == null ? void 0 : rt.querySelector) == null ? void 0 : bt.call(rt, `.${o.be("dropdown", "wrap")}`);
      rr && $b(rr, Ut);
    }
    (en = d.value) == null || en.handleScroll();
  }, Me = (x) => {
    s.options.set(x.value, x), s.cachedOptions.set(x.value, x);
  }, St = (x, Z) => {
    s.options.get(x) === Z && s.options.delete(x);
  }, Mt = I(() => {
    var x, Z;
    return (Z = (x = u.value) == null ? void 0 : x.popperRef) == null ? void 0 : Z.contentRef;
  }), ln = () => {
    s.isBeforeHide = !1, lt(() => {
      var x;
      (x = d.value) == null || x.update(), Te(s.selected);
    });
  }, Kt = () => {
    var x;
    (x = m.value) == null || x.focus();
  }, Jt = () => {
    var x;
    if (G.value) {
      G.value = !1, lt(() => {
        var Z;
        return (Z = m.value) == null ? void 0 : Z.blur();
      });
      return;
    }
    (x = m.value) == null || x.blur();
  }, nt = (x) => {
    K(x);
  }, hr = (x) => {
    if (G.value = !1, O.value) {
      const Z = new FocusEvent("focus", x);
      lt(() => W(Z));
    }
  }, gr = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : G.value = !1;
  }, Po = () => {
    $.value || (ws && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : G.value = !G.value);
  }, Da = () => {
    if (!G.value)
      Po();
    else {
      const x = ce.value[s.hoveringIndex];
      x && !x.isDisabled && q(x);
    }
  }, je = (x) => Xt(x.value) ? lr(x.value, e.valueKey) : x.value, nr = I(() => ce.value.filter((x) => x.visible).every((x) => x.isDisabled)), Fa = I(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), No = I(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Lr = (x) => {
    if (!G.value) {
      G.value = !0;
      return;
    }
    if (!(s.options.size === 0 || et.value === 0 || C.value) && !nr.value) {
      x === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : x === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const Z = ce.value[s.hoveringIndex];
      (Z.isDisabled || !Z.visible) && Lr(x), lt(() => Te(te.value));
    }
  }, $o = () => {
    if (!l.value)
      return 0;
    const x = window.getComputedStyle(l.value);
    return Number.parseFloat(x.gap || "6px");
  }, Mo = I(() => {
    const x = $o();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - x : s.selectionWidth}px` };
  }), za = I(() => ({ maxWidth: `${s.selectionWidth}px` })), qt = (x) => {
    t("popup-scroll", x);
  };
  return Cn(l, ue), Cn(h, M), Cn(k, M), Cn(g, me), Cn(S, T), ut(() => {
    F();
  }), {
    inputId: ve,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: G,
    optionsArray: ce,
    hoverOption: te,
    selectSize: Tt,
    filteredOptionsCount: et,
    updateTooltip: M,
    updateTagTooltip: me,
    debouncedOnInputChange: It,
    onInput: Ye,
    deletePrevTag: mr,
    deleteTag: D,
    deleteSelected: K,
    handleOptionSelect: q,
    scrollToOption: Te,
    hasModelValue: B,
    shouldShowPlaceholder: st,
    currentPlaceholder: $e,
    mouseEnterEventName: vt,
    needStatusIcon: ie,
    showClose: ee,
    iconComponent: _e,
    iconReverse: X,
    validateState: Ve,
    validateIcon: Oe,
    showNewOption: ft,
    updateOptions: Ue,
    collapseTagSize: at,
    setSelected: F,
    selectDisabled: $,
    emptyText: Se,
    handleCompositionStart: L,
    handleCompositionUpdate: E,
    handleCompositionEnd: y,
    onOptionCreate: Me,
    onOptionDestroy: St,
    handleMenuEnter: ln,
    focus: Kt,
    blur: Jt,
    handleClearClick: nt,
    handleClickOutside: hr,
    handleEsc: gr,
    toggleMenu: Po,
    selectOption: Da,
    getValueKey: je,
    navigateOptions: Lr,
    dropdownMenuVisible: gt,
    showTagList: Fa,
    collapseTagList: No,
    popupScroll: qt,
    tagStyle: Mo,
    collapseTagStyle: za,
    popperRef: Mt,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: p,
    suffixRef: v,
    selectRef: i,
    wrapperRef: k,
    selectionRef: l,
    scrollbarRef: d,
    menuRef: h,
    tagMenuRef: g,
    collapseItemRef: S
  };
};
var zw = re({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Fe(Ma);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        An(u) && u.forEach((f) => {
          var m, p, v, h;
          const g = (m = f?.type || {}) == null ? void 0 : m.name;
          g === "ElOptionGroup" ? l(!$t(f.children) && !An(f.children) && Je((p = f.children) == null ? void 0 : p.default) ? (v = f.children) == null ? void 0 : v.default() : f.children) : g === "ElOption" ? i.push((h = f.props) == null ? void 0 : h.value) : An(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), fo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Bw = Ke({
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
  size: Ia,
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
  teleported: Tl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Ln,
    default: sl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Ln,
    default: sf
  },
  tagType: { ...Es.type, default: "info" },
  tagEffect: { ...Es.effect, default: "light" },
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
    values: Na,
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
  ...ef,
  ...Or(["ariaLabel"])
}), Ec = "ElSelect", Vw = re({
  name: Ec,
  componentName: Ec,
  components: {
    ElSelectMenu: Dw,
    ElOption: Sl,
    ElOptions: zw,
    ElTag: _w,
    ElScrollbar: Uy,
    ElTooltip: cw,
    ElIcon: dt
  },
  directives: { ClickOutside: ww },
  props: Bw,
  emits: [
    wt,
    Qn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = I(() => {
      const { modelValue: l, multiple: u } = e, f = u ? [] : void 0;
      return An(l) ? u ? l : f : u ? f : l;
    }), r = _r({
      ...Is(e),
      modelValue: n
    }), o = Fw(r, t), { calculatorRef: a, inputStyle: s } = Rw();
    Pn(Ma, _r({
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
function jw(e, t, n, r, o, a) {
  const s = vr("el-tag"), i = vr("el-tooltip"), l = vr("el-icon"), u = vr("el-option"), f = vr("el-options"), m = vr("el-scrollbar"), p = vr("el-select-menu"), v = hd("click-outside");
  return kt((R(), H("div", {
    ref: "selectRef",
    class: U([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [gd(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
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
      default: ae(() => {
        var h;
        return [
          _("div", {
            ref: "wrapperRef",
            class: U([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Xe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), H("div", {
              key: 0,
              ref: "prefixRef",
              class: U(e.nsSelect.e("prefix"))
            }, [
              ge(e.$slots, "prefix")
            ], 2)) : J("v-if", !0),
            _("div", {
              ref: "selectionRef",
              class: U([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ge(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), H(Nt, null, Br(e.showTagList, (g) => (R(), H("div", {
                  key: e.getValueKey(g),
                  class: U(e.nsSelect.e("selected-item"))
                }, [
                  N(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ct(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, g)
                  }, {
                    default: ae(() => [
                      _("span", {
                        class: U(e.nsSelect.e("tags-text"))
                      }, [
                        ge(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Zt(V(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (R(), le(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ae(() => [
                    _("div", {
                      ref: "collapseItemRef",
                      class: U(e.nsSelect.e("selected-item"))
                    }, [
                      N(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ct(e.collapseTagStyle)
                      }, {
                        default: ae(() => [
                          _("span", {
                            class: U(e.nsSelect.e("tags-text"))
                          }, " + " + V(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ae(() => [
                    _("div", {
                      ref: "tagMenuRef",
                      class: U(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), H(Nt, null, Br(e.collapseTagList, (g) => (R(), H("div", {
                        key: e.getValueKey(g),
                        class: U(e.nsSelect.e("selected-item"))
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
                          default: ae(() => [
                            _("span", {
                              class: U(e.nsSelect.e("tags-text"))
                            }, [
                              ge(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Zt(V(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : J("v-if", !0)
              ]) : J("v-if", !0),
              _("div", {
                class: U([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                kt(_("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: U([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ct(e.inputStyle),
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
                    nn(Xe((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    nn(Xe((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    nn(Xe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    nn(Xe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    nn(Xe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Xe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [go, e.states.inputValue]
                ]),
                e.filterable ? (R(), H("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: U(e.nsSelect.e("input-calculator")),
                  textContent: V(e.states.inputValue)
                }, null, 10, ["textContent"])) : J("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), H("div", {
                key: 1,
                class: U([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ge(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  _("span", null, V(e.currentPlaceholder), 1)
                ]) : (R(), H("span", { key: 1 }, V(e.currentPlaceholder), 1))
              ], 2)) : J("v-if", !0)
            ], 2),
            _("div", {
              ref: "suffixRef",
              class: U(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (R(), le(l, {
                key: 0,
                class: U([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ae(() => [
                  (R(), le(zt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : J("v-if", !0),
              e.showClose && e.clearIcon ? (R(), le(l, {
                key: 1,
                class: U([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ae(() => [
                  (R(), le(zt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : J("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (R(), le(l, {
                key: 2,
                class: U([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ae(() => [
                  (R(), le(zt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : J("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ae(() => [
        N(p, { ref: "menuRef" }, {
          default: ae(() => [
            e.$slots.header ? (R(), H("div", {
              key: 0,
              class: U(e.nsSelect.be("dropdown", "header")),
              onClick: Xe(() => {
              }, ["stop"])
            }, [
              ge(e.$slots, "header")
            ], 10, ["onClick"])) : J("v-if", !0),
            kt(N(m, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: U([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ae(() => [
                e.showNewOption ? (R(), le(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : J("v-if", !0),
                N(f, null, {
                  default: ae(() => [
                    ge(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Xn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), H("div", {
              key: 1,
              class: U(e.nsSelect.be("dropdown", "loading"))
            }, [
              ge(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), H("div", {
              key: 2,
              class: U(e.nsSelect.be("dropdown", "empty"))
            }, [
              ge(e.$slots, "empty", {}, () => [
                _("span", null, V(e.emptyText), 1)
              ])
            ], 2)) : J("v-if", !0),
            e.$slots.footer ? (R(), H("div", {
              key: 3,
              class: U(e.nsSelect.be("dropdown", "footer")),
              onClick: Xe(() => {
              }, ["stop"])
            }, [
              ge(e.$slots, "footer")
            ], 10, ["onClick"])) : J("v-if", !0)
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
var Uw = /* @__PURE__ */ Ze(Vw, [["render", jw], ["__file", "select.vue"]]);
const Hw = re({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = mt("select"), n = j(null), r = Vt(), o = j([]);
    Pn(Ff, _r({
      ...Is(e)
    }));
    const a = I(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, m;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const f = sr(u), m = [];
      return f.forEach((p) => {
        var v, h;
        s(p) ? m.push(p.component.proxy) : (v = p.children) != null && v.length ? m.push(...i(p.children)) : (h = p.component) != null && h.subTree && m.push(...i(p.component.subTree));
      }), m;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return ut(() => {
      l();
    }), bb(n, l, {
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
function Ww(e, t, n, r, o, a) {
  return kt((R(), H("ul", {
    ref: "groupRef",
    class: U(e.ns.be("group", "wrap"))
  }, [
    _("li", {
      class: U(e.ns.be("group", "title"))
    }, V(e.label), 3),
    _("li", null, [
      _("ul", {
        class: U(e.ns.b("group"))
      }, [
        ge(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Xn, e.visible]
  ]);
}
var zf = /* @__PURE__ */ Ze(Hw, [["render", Ww], ["__file", "option-group.vue"]]);
const Gw = bn(Uw, {
  Option: Sl,
  OptionGroup: zf
}), Kw = af(Sl);
af(zf);
const qw = (e) => ["", ...al].includes(e), Yw = Ke({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: qw
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Ln
  },
  activeActionIcon: {
    type: Ln
  },
  activeIcon: {
    type: Ln
  },
  inactiveIcon: {
    type: Ln
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
  ...Or(["ariaLabel"])
}), Zw = {
  [wt]: (e) => cr(e) || $t(e) || Ne(e),
  [Qn]: (e) => cr(e) || $t(e) || Ne(e),
  [Zn]: (e) => cr(e) || $t(e) || Ne(e)
}, Bf = "ElSwitch", Xw = re({
  name: Bf
}), Qw = /* @__PURE__ */ re({
  ...Xw,
  props: Yw,
  emits: Zw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = xa(), a = Io(), s = mt("switch"), { inputId: i } = il(r, {
      formItemContext: o
    }), l = cl(I(() => r.loading)), u = j(r.modelValue !== !1), f = j(), m = j(), p = I(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", d.value)
    ]), v = I(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), h = I(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), g = I(() => ({
      width: Hr(r.width)
    }));
    be(() => r.modelValue, () => {
      u.value = !0;
    });
    const S = I(() => u.value ? r.modelValue : !1), d = I(() => S.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(S.value) || (n(wt, r.inactiveValue), n(Qn, r.inactiveValue), n(Zn, r.inactiveValue)), be(d, (y) => {
      var k;
      f.value.checked = y, r.validateEvent && ((k = o?.validate) == null || k.call(o, "change").catch((O) => void 0));
    });
    const C = () => {
      const y = d.value ? r.inactiveValue : r.activeValue;
      n(wt, y), n(Qn, y), n(Zn, y), lt(() => {
        f.value.checked = d.value;
      });
    }, L = () => {
      if (l.value)
        return;
      const { beforeChange: y } = r;
      if (!y) {
        C();
        return;
      }
      const k = y();
      [
        mi(k),
        cr(k)
      ].includes(!0) || rl(Bf, "beforeChange must return type `Promise<boolean>` or `boolean`"), mi(k) ? k.then((W) => {
        W && C();
      }).catch((W) => {
      }) : k && C();
    }, E = () => {
      var y, k;
      (k = (y = f.value) == null ? void 0 : y.focus) == null || k.call(y);
    };
    return ut(() => {
      f.value.checked = d.value;
    }), t({
      focus: E,
      checked: d
    }), (y, k) => (R(), H("div", {
      class: U(c(p)),
      onClick: Xe(L, ["prevent"])
    }, [
      _("input", {
        id: c(i),
        ref_key: "input",
        ref: f,
        class: U(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(d),
        "aria-disabled": c(l),
        "aria-label": y.ariaLabel,
        name: y.name,
        "true-value": y.activeValue,
        "false-value": y.inactiveValue,
        disabled: c(l),
        tabindex: y.tabindex,
        onChange: C,
        onKeydown: nn(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !y.inlinePrompt && (y.inactiveIcon || y.inactiveText) ? (R(), H("span", {
        key: 0,
        class: U(c(v))
      }, [
        y.inactiveIcon ? (R(), le(c(dt), { key: 0 }, {
          default: ae(() => [
            (R(), le(zt(y.inactiveIcon)))
          ]),
          _: 1
        })) : J("v-if", !0),
        !y.inactiveIcon && y.inactiveText ? (R(), H("span", {
          key: 1,
          "aria-hidden": c(d)
        }, V(y.inactiveText), 9, ["aria-hidden"])) : J("v-if", !0)
      ], 2)) : J("v-if", !0),
      _("span", {
        ref_key: "core",
        ref: m,
        class: U(c(s).e("core")),
        style: Ct(c(g))
      }, [
        y.inlinePrompt ? (R(), H("div", {
          key: 0,
          class: U(c(s).e("inner"))
        }, [
          y.activeIcon || y.inactiveIcon ? (R(), le(c(dt), {
            key: 0,
            class: U(c(s).is("icon"))
          }, {
            default: ae(() => [
              (R(), le(zt(c(d) ? y.activeIcon : y.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : y.activeText || y.inactiveText ? (R(), H("span", {
            key: 1,
            class: U(c(s).is("text")),
            "aria-hidden": !c(d)
          }, V(c(d) ? y.activeText : y.inactiveText), 11, ["aria-hidden"])) : J("v-if", !0)
        ], 2)) : J("v-if", !0),
        _("div", {
          class: U(c(s).e("action"))
        }, [
          y.loading ? (R(), le(c(dt), {
            key: 0,
            class: U(c(s).is("loading"))
          }, {
            default: ae(() => [
              N(c(lf))
            ]),
            _: 1
          }, 8, ["class"])) : c(d) ? ge(y.$slots, "active-action", { key: 1 }, () => [
            y.activeActionIcon ? (R(), le(c(dt), { key: 0 }, {
              default: ae(() => [
                (R(), le(zt(y.activeActionIcon)))
              ]),
              _: 1
            })) : J("v-if", !0)
          ]) : c(d) ? J("v-if", !0) : ge(y.$slots, "inactive-action", { key: 2 }, () => [
            y.inactiveActionIcon ? (R(), le(c(dt), { key: 0 }, {
              default: ae(() => [
                (R(), le(zt(y.inactiveActionIcon)))
              ]),
              _: 1
            })) : J("v-if", !0)
          ])
        ], 2)
      ], 6),
      !y.inlinePrompt && (y.activeIcon || y.activeText) ? (R(), H("span", {
        key: 1,
        class: U(c(h))
      }, [
        y.activeIcon ? (R(), le(c(dt), { key: 0 }, {
          default: ae(() => [
            (R(), le(zt(y.activeIcon)))
          ]),
          _: 1
        })) : J("v-if", !0),
        !y.activeIcon && y.activeText ? (R(), H("span", {
          key: 1,
          "aria-hidden": !c(d)
        }, V(y.activeText), 9, ["aria-hidden"])) : J("v-if", !0)
      ], 2)) : J("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var Jw = /* @__PURE__ */ Ze(Qw, [["__file", "switch.vue"]]);
const ek = bn(Jw), Vf = ["success", "info", "warning", "error"], Rt = ff({
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
  appendTo: pt ? document.body : void 0
}), tk = Ke({
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
    type: Ln,
    default: Rt.icon
  },
  id: {
    type: String,
    default: Rt.id
  },
  message: {
    type: he([
      String,
      Object,
      Function
    ]),
    default: Rt.message
  },
  onClose: {
    type: he(Function),
    default: Rt.onClose
  },
  showClose: {
    type: Boolean,
    default: Rt.showClose
  },
  type: {
    type: String,
    values: Vf,
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
}), nk = {
  destroy: () => !0
}, mn = vd([]), rk = (e) => {
  const t = mn.findIndex((o) => o.id === e), n = mn[t];
  let r;
  return t > 0 && (r = mn[t - 1]), { current: n, prev: r };
}, ok = (e) => {
  const { prev: t } = rk(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ak = (e, t) => mn.findIndex((r) => r.id === e) > 0 ? 16 : t, sk = re({
  name: "ElMessage"
}), lk = /* @__PURE__ */ re({
  ...sk,
  props: tk,
  emits: nk,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = fy, { ns: o, zIndex: a } = nf("message"), { currentZIndex: s, nextZIndex: i } = a, l = j(), u = j(!1), f = j(0);
    let m;
    const p = I(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = I(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && pa[O] };
    }), h = I(() => n.icon || pa[n.type] || ""), g = I(() => ok(n.id)), S = I(() => ak(n.id, n.offset) + g.value), d = I(() => f.value + S.value), C = I(() => ({
      top: `${S.value}px`,
      zIndex: s.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: m } = Wu(() => {
        y();
      }, n.duration));
    }
    function E() {
      m?.();
    }
    function y() {
      u.value = !1;
    }
    function k({ code: O }) {
      O === Rn.esc && y();
    }
    return ut(() => {
      L(), i(), u.value = !0;
    }), be(() => n.repeatNum, () => {
      E(), L();
    }), gn(document, "keydown", k), Cn(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: y
    }), (O, W) => (R(), le(Xr, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (G) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        kt(_("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: l,
          class: U([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: Ct(c(C)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (R(), le(c(mw), {
            key: 0,
            value: O.repeatNum,
            type: c(p),
            class: U(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : J("v-if", !0),
          c(h) ? (R(), le(c(dt), {
            key: 1,
            class: U([c(o).e("icon"), c(v)])
          }, {
            default: ae(() => [
              (R(), le(zt(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : J("v-if", !0),
          ge(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (R(), H(Nt, { key: 1 }, [
              J(" Caution here, message could've been compromised, never use user's input as message "),
              _("p", {
                class: U(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), H("p", {
              key: 0,
              class: U(c(o).e("content"))
            }, V(O.message), 3))
          ]),
          O.showClose ? (R(), le(c(dt), {
            key: 2,
            class: U(c(o).e("closeBtn")),
            onClick: Xe(y, ["stop"])
          }, {
            default: ae(() => [
              N(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : J("v-if", !0)
        ], 46, ["id"]), [
          [Xn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ik = /* @__PURE__ */ Ze(lk, [["__file", "message.vue"]]);
let ck = 1;
const jf = (e) => {
  const t = !e || $t(e) || vo(e) || Je(e) ? { message: e } : e, n = {
    ...Rt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if ($t(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    hn(r) || (r = document.body), n.appendTo = r;
  }
  return cr(un.grouping) && !n.grouping && (n.grouping = un.grouping), Ne(un.duration) && n.duration === 3e3 && (n.duration = un.duration), Ne(un.offset) && n.offset === 16 && (n.offset = un.offset), cr(un.showClose) && !n.showClose && (n.showClose = un.showClose), n;
}, uk = (e) => {
  const t = mn.indexOf(e);
  if (t === -1)
    return;
  mn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, fk = ({ appendTo: e, ...t }, n) => {
  const r = `message_${ck++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), uk(f);
    },
    onDestroy: () => {
      na(null, a);
    }
  }, i = N(ik, s, Je(s.message) || vo(s.message) ? {
    default: Je(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Yr._context, na(i, a), e.appendChild(a.firstElementChild);
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
}, Yr = (e = {}, t) => {
  if (!pt)
    return { close: () => {
    } };
  const n = jf(e);
  if (n.grouping && mn.length) {
    const o = mn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Ne(un.max) && mn.length >= un.max)
    return { close: () => {
    } };
  const r = fk(n, t);
  return mn.push(r), r.handler;
};
Vf.forEach((e) => {
  Yr[e] = (t = {}, n) => {
    const r = jf(t);
    return Yr({ ...r, type: e }, n);
  };
});
function dk(e) {
  for (const t of mn)
    (!e || e === t.props.type) && t.handler.close();
}
Yr.closeAll = dk;
Yr._context = null;
const pk = of(Yr, "$message"), Uf = [
  "success",
  "info",
  "warning",
  "error"
], mk = Ke({
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
    type: Ln
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
    values: [...Uf, ""],
    default: ""
  },
  zIndex: Number
}), hk = {
  destroy: () => !0
}, gk = re({
  name: "ElNotification"
}), vk = /* @__PURE__ */ re({
  ...gk,
  props: mk,
  emits: hk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = nf("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = uy, l = j(!1);
    let u;
    const f = I(() => {
      const L = n.type;
      return L && pa[n.type] ? r.m(L) : "";
    }), m = I(() => n.type && pa[n.type] || n.icon), p = I(() => n.position.endsWith("right") ? "right" : "left"), v = I(() => n.position.startsWith("top") ? "top" : "bottom"), h = I(() => {
      var L;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = Wu(() => {
        l.value && d();
      }, n.duration));
    }
    function S() {
      u?.();
    }
    function d() {
      l.value = !1;
    }
    function C({ code: L }) {
      L === Rn.delete || L === Rn.backspace ? S() : L === Rn.esc ? l.value && d() : g();
    }
    return ut(() => {
      g(), a(), l.value = !0;
    }), gn(document, "keydown", C), t({
      visible: l,
      close: d
    }), (L, E) => (R(), le(Xr, {
      name: c(r).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (y) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        kt(_("div", {
          id: L.id,
          class: U([c(r).b(), L.customClass, c(p)]),
          style: Ct(c(h)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: g,
          onClick: L.onClick
        }, [
          c(m) ? (R(), le(c(dt), {
            key: 0,
            class: U([c(r).e("icon"), c(f)])
          }, {
            default: ae(() => [
              (R(), le(zt(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : J("v-if", !0),
          _("div", {
            class: U(c(r).e("group"))
          }, [
            _("h2", {
              class: U(c(r).e("title")),
              textContent: V(L.title)
            }, null, 10, ["textContent"]),
            kt(_("div", {
              class: U(c(r).e("content")),
              style: Ct(L.title ? void 0 : { margin: 0 })
            }, [
              ge(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (R(), H(Nt, { key: 1 }, [
                  J(" Caution here, message could've been compromised, never use user's input as message "),
                  _("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), H("p", { key: 0 }, V(L.message), 1))
              ])
            ], 6), [
              [Xn, L.message]
            ]),
            L.showClose ? (R(), le(c(dt), {
              key: 0,
              class: U(c(r).e("closeBtn")),
              onClick: Xe(d, ["stop"])
            }, {
              default: ae(() => [
                N(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : J("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Xn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var bk = /* @__PURE__ */ Ze(vk, [["__file", "notification.vue"]]);
const ga = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Cs = 16;
let yk = 1;
const Zr = function(e = {}, t) {
  if (!pt)
    return { close: () => {
    } };
  ($t(e) || vo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  ga[n].forEach(({ vm: f }) => {
    var m;
    r += (((m = f.el) == null ? void 0 : m.offsetHeight) || 0) + Cs;
  }), r += Cs;
  const o = `notification_${yk++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      _k(o, n, a);
    }
  };
  let i = document.body;
  hn(e.appendTo) ? i = e.appendTo : $t(e.appendTo) && (i = document.querySelector(e.appendTo)), hn(i) || (i = document.body);
  const l = document.createElement("div"), u = N(bk, s, Je(s.message) ? s.message : vo(s.message) ? () => s.message : null);
  return u.appContext = On(t) ? Zr._context : t, u.props.onDestroy = () => {
    na(null, l);
  }, na(u, l), ga[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Uf.forEach((e) => {
  Zr[e] = (t = {}, n) => (($t(t) || vo(t)) && (t = {
    message: t
  }), Zr({ ...t, type: e }, n));
});
function _k(e, t, n) {
  const r = ga[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: f, component: m } = r[u].vm, p = Number.parseInt(f.style[i], 10) - s - Cs;
      m.props.offset = p;
    }
}
function wk() {
  for (const e of Object.values(ga))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Zr.closeAll = wk;
Zr._context = null;
const kk = of(Zr, "$notify"), Ft = {
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
    r === "center" ? pk({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : kk({
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
function Tk(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Lt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Cc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Cc || (Cc = {}));
async function Sk(e, t) {
  await Lt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ek(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return Lt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Tk(t)
  }).then((a) => async () => Sk(e, a));
}
const Ck = "snippets-code:developer-mode", Hf = "snippets-code:frontend-diagnostics", Ak = 240, oo = "[REDACTED]", ta = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${oo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${oo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  oo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${oo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${oo}`
), Wf = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return ta(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return ta(
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
    return ta(String(e));
  }
}, Ok = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Lk = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Hf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, El = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ck) === "true";
  } catch {
    return !1;
  }
}, Ik = (e, t, n) => {
  if (!El() || typeof localStorage > "u") return;
  const r = Lk();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Ok(),
    message: ta(t),
    data: Wf(n)
  });
  try {
    localStorage.setItem(
      Hf,
      JSON.stringify(r.slice(-Ak))
    );
  } catch {
  }
}, Rk = () => El(), xk = (e) => e === "warn" || e === "error" || !1 || !1 || El(), qo = (e, t, n) => {
  Ik(e, t, n), xk(e) && Lt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Wf(n)
  }).catch(() => {
  });
}, En = {
  info: (e, t, ...n) => {
    qo("info", e, t);
  },
  error: (e, t) => {
    qo("error", e, t);
  },
  warn: (e, t) => {
    qo("warn", e, t);
  },
  debug: (e, t) => {
    Rk() && qo("debug", e, t);
  }
};
async function Gf() {
  return await Lt("local_ai_get_config");
}
async function Xa(e) {
  return await Lt("local_ai_save_config", { config: e });
}
async function Pk(e) {
  return await Lt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Nk() {
  return await Lt("local_ai_get_runtime_status");
}
async function Kf() {
  return await Lt("local_ai_get_status");
}
async function $k(e) {
  return await Lt("local_ai_start_service", {
    config: e ?? null
  });
}
async function Mk() {
  return await Lt("local_ai_restart_service");
}
async function Dk() {
  await Lt("local_ai_stop_service");
}
function qf() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Fk(e, t, n = {}) {
  const r = n.requestId ?? qf(), o = await Ek(
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
async function Ac(e) {
  return await Lt("local_ai_cancel_chat_stream", { requestId: e });
}
async function zk() {
  return await Lt("local_ai_get_chat_histories");
}
async function Bk(e) {
  return await Lt("local_ai_save_chat_history", { history: e });
}
async function Vk(e) {
  return await Lt("local_ai_delete_chat_history", { historyId: e });
}
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Oc(e, t) {
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
function Hk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wk(e, t) {
  return jk(e) || Uk(e, t) || Gk(e, t) || Hk();
}
function Gk(e, t) {
  if (e) {
    if (typeof e == "string") return Oc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oc(e, t) : void 0;
  }
}
const Yf = Object.entries, Lc = Object.setPrototypeOf, Kk = Object.isFrozen, qk = Object.getPrototypeOf, Yk = Object.getOwnPropertyDescriptor;
let jt = Object.freeze, sn = Object.seal, Fr = Object.create, Zf = typeof Reflect < "u" && Reflect, As = Zf.apply, Os = Zf.construct;
jt || (jt = function(t) {
  return t;
});
sn || (sn = function(t) {
  return t;
});
As || (As = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Os || (Os = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Pr = ht(Array.prototype.forEach), Zk = ht(Array.prototype.lastIndexOf), Ic = ht(Array.prototype.pop), Nr = ht(Array.prototype.push), Xk = ht(Array.prototype.splice), Dt = Array.isArray, io = ht(String.prototype.toLowerCase), Qa = ht(String.prototype.toString), Rc = ht(String.prototype.match), $r = ht(String.prototype.replace), xc = ht(String.prototype.indexOf), Qk = ht(String.prototype.trim), Jk = ht(Number.prototype.toString), eT = ht(Boolean.prototype.toString), Pc = typeof BigInt > "u" ? null : ht(BigInt.prototype.toString), Nc = typeof Symbol > "u" ? null : ht(Symbol.prototype.toString), ot = ht(Object.prototype.hasOwnProperty), ao = ht(Object.prototype.toString), Et = ht(RegExp.prototype.test), so = tT(TypeError);
function ht(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return As(e, t, r);
  };
}
function tT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Os(e, n);
  };
}
function we(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : io;
  if (Lc && Lc(e, null), !Dt(t))
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
    ot(e, t) || (e[t] = null);
  return e;
}
function xt(e) {
  const t = Fr(null);
  for (const r of Yf(e)) {
    var n = Wk(r, 2);
    const o = n[0], a = n[1];
    ot(e, o) && (Dt(a) ? t[o] = nT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = xt(a) : t[o] = a);
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
      return Pc ? Pc(e) : "0";
    case "symbol":
      return Nc ? Nc(e) : "Symbol()";
    case "undefined":
      return ao(e);
    case "function":
    case "object": {
      if (e === null)
        return ao(e);
      const t = e, n = Sn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : ao(r);
      }
      return ao(e);
    }
    default:
      return ao(e);
  }
}
function Sn(e, t) {
  for (; e !== null; ) {
    const r = Yk(e, t);
    if (r) {
      if (r.get)
        return ht(r.get);
      if (typeof r.value == "function")
        return ht(r.value);
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
    return Et(e, ""), !0;
  } catch {
    return !1;
  }
}
const $c = jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ja = jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), es = jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), aT = jt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ts = jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sT = jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Mc = jt(["#text"]), Dc = jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ns = jt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fc = jt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yo = jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lT = sn(/{{[\w\W]*|^[\w\W]*}}/g), iT = sn(/<%[\w\W]*|^[\w\W]*%>/g), cT = sn(/\${[\w\W]*/g), uT = sn(/^data-[\-\w.\u00B7-\uFFFF]+$/), fT = sn(/^aria-[\-\w]+$/), zc = sn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dT = sn(/^(?:\w+script|data):/i), pT = sn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), mT = sn(/^html$/i), hT = sn(/^[a-z][.\w]*(-[.\w]+)+$/i), Tn = {
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
function Xf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gT();
  const t = (se) => Xf(se);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, m = e.trustedTypes, p = i.prototype, v = Sn(p, "cloneNode"), h = Sn(p, "remove"), g = Sn(p, "nextSibling"), S = Sn(p, "childNodes"), d = Sn(p, "parentNode"), C = Sn(p, "shadowRoot"), L = Sn(p, "attributes"), E = s && s.prototype ? Sn(s.prototype, "nodeType") : null, y = s && s.prototype ? Sn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let k, O = "";
  const W = n, G = W.implementation, te = W.createNodeIterator, de = W.createDocumentFragment, ne = W.getElementsByTagName, ve = r.importNode;
  let pe = Bc();
  t.isSupported = typeof Yf == "function" && typeof d == "function" && G && G.createHTMLDocument !== void 0;
  const P = lT, $ = iT, B = cT, ie = uT, ee = fT, _e = dT, X = pT, Ve = hT;
  let Oe = zc, ke = null;
  const qe = we({}, [...$c, ...Ja, ...es, ...ts, ...Mc]);
  let Se = null;
  const et = we({}, [...Dc, ...ns, ...Fc, ...Yo]);
  let ce = Object.seal(Fr(null, {
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
  })), tt = null, ft = null;
  const Ue = Object.seal(Fr(null, {
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
  let Tt = !0, at = !0, gt = !1, st = !0, $e = !1, vt = !0, w = !1, A = !1, F = !1, Y = !1, Ee = !1, ue = !1, T = !0, M = !1;
  const me = "user-content-";
  let Ce = !0, Ye = !1, It = {}, He = null;
  const yn = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let mr = null;
  const D = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let K = null;
  const q = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), fe = "http://www.w3.org/1998/Math/MathML", Te = "http://www.w3.org/2000/svg", Me = "http://www.w3.org/1999/xhtml";
  let St = Me, Mt = !1, ln = null;
  const Kt = we({}, [fe, Te, Me], Qa);
  let Jt = we({}, ["mi", "mo", "mn", "ms", "mtext"]), nt = we({}, ["annotation-xml"]);
  const hr = we({}, ["title", "style", "font", "a", "script"]);
  let gr = null;
  const Po = ["application/xhtml+xml", "text/html"], Da = "text/html";
  let je = null, nr = null;
  const Fa = n.createElement("form"), No = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Lr = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (nr && nr === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = xt(b), gr = // eslint-disable-next-line unicorn/prefer-includes
    Po.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Da : b.PARSER_MEDIA_TYPE, je = gr === "application/xhtml+xml" ? Qa : io, ke = ot(b, "ALLOWED_TAGS") && Dt(b.ALLOWED_TAGS) ? we({}, b.ALLOWED_TAGS, je) : qe, Se = ot(b, "ALLOWED_ATTR") && Dt(b.ALLOWED_ATTR) ? we({}, b.ALLOWED_ATTR, je) : et, ln = ot(b, "ALLOWED_NAMESPACES") && Dt(b.ALLOWED_NAMESPACES) ? we({}, b.ALLOWED_NAMESPACES, Qa) : Kt, K = ot(b, "ADD_URI_SAFE_ATTR") && Dt(b.ADD_URI_SAFE_ATTR) ? we(xt(q), b.ADD_URI_SAFE_ATTR, je) : q, mr = ot(b, "ADD_DATA_URI_TAGS") && Dt(b.ADD_DATA_URI_TAGS) ? we(xt(D), b.ADD_DATA_URI_TAGS, je) : D, He = ot(b, "FORBID_CONTENTS") && Dt(b.FORBID_CONTENTS) ? we({}, b.FORBID_CONTENTS, je) : yn, tt = ot(b, "FORBID_TAGS") && Dt(b.FORBID_TAGS) ? we({}, b.FORBID_TAGS, je) : xt({}), ft = ot(b, "FORBID_ATTR") && Dt(b.FORBID_ATTR) ? we({}, b.FORBID_ATTR, je) : xt({}), It = ot(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? xt(b.USE_PROFILES) : b.USE_PROFILES : !1, Tt = b.ALLOW_ARIA_ATTR !== !1, at = b.ALLOW_DATA_ATTR !== !1, gt = b.ALLOW_UNKNOWN_PROTOCOLS || !1, st = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $e = b.SAFE_FOR_TEMPLATES || !1, vt = b.SAFE_FOR_XML !== !1, w = b.WHOLE_DOCUMENT || !1, Y = b.RETURN_DOM || !1, Ee = b.RETURN_DOM_FRAGMENT || !1, ue = b.RETURN_TRUSTED_TYPE || !1, F = b.FORCE_BODY || !1, T = b.SANITIZE_DOM !== !1, M = b.SANITIZE_NAMED_PROPS || !1, Ce = b.KEEP_CONTENT !== !1, Ye = b.IN_PLACE || !1, Oe = oT(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : zc, St = typeof b.NAMESPACE == "string" ? b.NAMESPACE : Me, Jt = ot(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? xt(b.MATHML_TEXT_INTEGRATION_POINTS) : we({}, ["mi", "mo", "mn", "ms", "mtext"]), nt = ot(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? xt(b.HTML_INTEGRATION_POINTS) : we({}, ["annotation-xml"]);
    const z = ot(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? xt(b.CUSTOM_ELEMENT_HANDLING) : Fr(null);
    if (ce = Fr(null), ot(z, "tagNameCheck") && No(z.tagNameCheck) && (ce.tagNameCheck = z.tagNameCheck), ot(z, "attributeNameCheck") && No(z.attributeNameCheck) && (ce.attributeNameCheck = z.attributeNameCheck), ot(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ce.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), $e && (at = !1), Ee && (Y = !0), It && (ke = we({}, Mc), Se = Fr(null), It.html === !0 && (we(ke, $c), we(Se, Dc)), It.svg === !0 && (we(ke, Ja), we(Se, ns), we(Se, Yo)), It.svgFilters === !0 && (we(ke, es), we(Se, ns), we(Se, Yo)), It.mathMl === !0 && (we(ke, ts), we(Se, Fc), we(Se, Yo))), Ue.tagCheck = null, Ue.attributeCheck = null, ot(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? Ue.tagCheck = b.ADD_TAGS : Dt(b.ADD_TAGS) && (ke === qe && (ke = xt(ke)), we(ke, b.ADD_TAGS, je))), ot(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? Ue.attributeCheck = b.ADD_ATTR : Dt(b.ADD_ATTR) && (Se === et && (Se = xt(Se)), we(Se, b.ADD_ATTR, je))), ot(b, "ADD_URI_SAFE_ATTR") && Dt(b.ADD_URI_SAFE_ATTR) && we(K, b.ADD_URI_SAFE_ATTR, je), ot(b, "FORBID_CONTENTS") && Dt(b.FORBID_CONTENTS) && (He === yn && (He = xt(He)), we(He, b.FORBID_CONTENTS, je)), ot(b, "ADD_FORBID_CONTENTS") && Dt(b.ADD_FORBID_CONTENTS) && (He === yn && (He = xt(He)), we(He, b.ADD_FORBID_CONTENTS, je)), Ce && (ke["#text"] = !0), w && we(ke, ["html", "head", "body"]), ke.table && (we(ke, ["tbody"]), delete tt.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw so('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw so('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      k = b.TRUSTED_TYPES_POLICY, O = k.createHTML("");
    } else
      k === void 0 && (k = vT(m, o)), k !== null && typeof O == "string" && (O = k.createHTML(""));
    (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && ke === qe && (ke = xt(ke)), pe.uponSanitizeAttribute.length > 0 && Se === et && (Se = xt(Se)), jt && jt(b), nr = b;
  }, $o = we({}, [...Ja, ...es, ...aT]), Mo = we({}, [...ts, ...sT]), za = function(b) {
    let z = d(b);
    (!z || !z.tagName) && (z = {
      namespaceURI: St,
      tagName: "template"
    });
    const Q = io(b.tagName), xe = io(z.tagName);
    return ln[b.namespaceURI] ? b.namespaceURI === Te ? z.namespaceURI === Me ? Q === "svg" : z.namespaceURI === fe ? Q === "svg" && (xe === "annotation-xml" || Jt[xe]) : !!$o[Q] : b.namespaceURI === fe ? z.namespaceURI === Me ? Q === "math" : z.namespaceURI === Te ? Q === "math" && nt[xe] : !!Mo[Q] : b.namespaceURI === Me ? z.namespaceURI === Te && !nt[xe] || z.namespaceURI === fe && !Jt[xe] ? !1 : !Mo[Q] && (hr[Q] || !$o[Q]) : !!(gr === "application/xhtml+xml" && ln[b.namespaceURI]) : !1;
  }, qt = function(b) {
    Nr(t.removed, {
      element: b
    });
    try {
      d(b).removeChild(b);
    } catch {
      h(b);
    }
  }, x = function(b, z) {
    try {
      Nr(t.removed, {
        attribute: z.getAttributeNode(b),
        from: z
      });
    } catch {
      Nr(t.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(b), b === "is")
      if (Y || Ee)
        try {
          qt(z);
        } catch {
        }
      else
        try {
          z.setAttribute(b, "");
        } catch {
        }
  }, Z = function(b) {
    let z = null, Q = null;
    if (F)
      b = "<remove></remove>" + b;
    else {
      const We = Rc(b, /^[\r\n\t ]+/);
      Q = We && We[0];
    }
    gr === "application/xhtml+xml" && St === Me && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const xe = k ? k.createHTML(b) : b;
    if (St === Me)
      try {
        z = new f().parseFromString(xe, gr);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = G.createDocument(St, "template", null);
      try {
        z.documentElement.innerHTML = Mt ? O : xe;
      } catch {
      }
    }
    const Ae = z.body || z.documentElement;
    return b && Q && Ae.insertBefore(n.createTextNode(Q), Ae.childNodes[0] || null), St === Me ? ne.call(z, w ? "html" : "body")[0] : w ? z.documentElement : Ae;
  }, ye = function(b) {
    return te.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, rt = function(b) {
    b.normalize();
    const z = te.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Q = z.nextNode();
    for (; Q; ) {
      let xe = Q.data;
      Pr([P, $, B], (Ae) => {
        xe = $r(xe, Ae, " ");
      }), Q.data = xe, Q = z.nextNode();
    }
  }, bt = function(b) {
    const z = y ? y(b) : null;
    return typeof z != "string" || je(z) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== L(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== E(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    b.childNodes !== S(b);
  }, en = function(b) {
    if (!E || typeof b != "object" || b === null)
      return !1;
    try {
      return E(b) === Tn.documentFragment;
    } catch {
      return !1;
    }
  }, Yt = function(b) {
    if (!E || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof E(b) == "number";
    } catch {
      return !1;
    }
  };
  function Ut(se, b, z) {
    Pr(se, (Q) => {
      Q.call(t, b, z, nr);
    });
  }
  const rr = function(b) {
    let z = null;
    if (Ut(pe.beforeSanitizeElements, b, null), bt(b))
      return qt(b), !0;
    const Q = je(b.nodeName);
    if (Ut(pe.uponSanitizeElement, b, {
      tagName: Q,
      allowedTags: ke
    }), vt && b.hasChildNodes() && !Yt(b.firstElementChild) && Et(/<[/\w!]/g, b.innerHTML) && Et(/<[/\w!]/g, b.textContent) || vt && b.namespaceURI === Me && Q === "style" && Yt(b.firstElementChild) || b.nodeType === Tn.progressingInstruction || vt && b.nodeType === Tn.comment && Et(/<[/\w]/g, b.data))
      return qt(b), !0;
    if (tt[Q] || !(Ue.tagCheck instanceof Function && Ue.tagCheck(Q)) && !ke[Q]) {
      if (!tt[Q] && Cl(Q) && (ce.tagNameCheck instanceof RegExp && Et(ce.tagNameCheck, Q) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(Q)))
        return !1;
      if (Ce && !He[Q]) {
        const Ae = d(b), We = S(b);
        if (We && Ae) {
          const tn = We.length;
          for (let _n = tn - 1; _n >= 0; --_n) {
            const cn = v(We[_n], !0);
            Ae.insertBefore(cn, g(b));
          }
        }
      }
      return qt(b), !0;
    }
    return (E ? E(b) : b.nodeType) === Tn.element && !za(b) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && Et(/<\/no(script|embed|frames)/i, b.innerHTML) ? (qt(b), !0) : ($e && b.nodeType === Tn.text && (z = b.textContent, Pr([P, $, B], (Ae) => {
      z = $r(z, Ae, " ");
    }), b.textContent !== z && (Nr(t.removed, {
      element: b.cloneNode()
    }), b.textContent = z)), Ut(pe.afterSanitizeElements, b, null), !1);
  }, Do = function(b, z, Q) {
    if (ft[z] || T && (z === "id" || z === "name") && (Q in n || Q in Fa))
      return !1;
    const xe = Se[z] || Ue.attributeCheck instanceof Function && Ue.attributeCheck(z, b);
    if (!(at && !ft[z] && Et(ie, z))) {
      if (!(Tt && Et(ee, z))) {
        if (!xe || ft[z]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Cl(b) && (ce.tagNameCheck instanceof RegExp && Et(ce.tagNameCheck, b) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(b)) && (ce.attributeNameCheck instanceof RegExp && Et(ce.attributeNameCheck, z) || ce.attributeNameCheck instanceof Function && ce.attributeNameCheck(z, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            z === "is" && ce.allowCustomizedBuiltInElements && (ce.tagNameCheck instanceof RegExp && Et(ce.tagNameCheck, Q) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(Q)))
          ) return !1;
        } else if (!K[z]) {
          if (!Et(Oe, $r(Q, X, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && b !== "script" && xc(Q, "data:") === 0 && mr[b])) {
              if (!(gt && !Et(_e, $r(Q, X, "")))) {
                if (Q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Qf = we({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Cl = function(b) {
    return !Qf[io(b)] && Et(Ve, b);
  }, Al = function(b) {
    Ut(pe.beforeSanitizeAttributes, b, null);
    const z = b.attributes;
    if (!z || bt(b))
      return;
    const Q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Se,
      forceKeepAttr: void 0
    };
    let xe = z.length;
    for (; xe--; ) {
      const Ae = z[xe], We = Ae.name, tn = Ae.namespaceURI, _n = Ae.value, cn = je(We), Ba = _n;
      let yt = We === "value" ? Ba : Qk(Ba);
      if (Q.attrName = cn, Q.attrValue = yt, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ut(pe.uponSanitizeAttribute, b, Q), yt = Q.attrValue, M && (cn === "id" || cn === "name") && xc(yt, me) !== 0 && (x(We, b), yt = me + yt), vt && Et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, yt)) {
        x(We, b);
        continue;
      }
      if (cn === "attributename" && Rc(yt, "href")) {
        x(We, b);
        continue;
      }
      if (Q.forceKeepAttr)
        continue;
      if (!Q.keepAttr) {
        x(We, b);
        continue;
      }
      if (!st && Et(/\/>/i, yt)) {
        x(We, b);
        continue;
      }
      $e && Pr([P, $, B], (Ll) => {
        yt = $r(yt, Ll, " ");
      });
      const Ol = je(b.nodeName);
      if (!Do(Ol, cn, yt)) {
        x(We, b);
        continue;
      }
      if (k && typeof m == "object" && typeof m.getAttributeType == "function" && !tn)
        switch (m.getAttributeType(Ol, cn)) {
          case "TrustedHTML": {
            yt = k.createHTML(yt);
            break;
          }
          case "TrustedScriptURL": {
            yt = k.createScriptURL(yt);
            break;
          }
        }
      if (yt !== Ba)
        try {
          tn ? b.setAttributeNS(tn, We, yt) : b.setAttribute(We, yt), bt(b) ? qt(b) : Ic(t.removed);
        } catch {
          x(We, b);
        }
    }
    Ut(pe.afterSanitizeAttributes, b, null);
  }, Fo = function(b) {
    let z = null;
    const Q = ye(b);
    for (Ut(pe.beforeSanitizeShadowDOM, b, null); z = Q.nextNode(); )
      if (Ut(pe.uponSanitizeShadowNode, z, null), rr(z), Al(z), en(z.content) && Fo(z.content), (E ? E(z) : z.nodeType) === Tn.element) {
        const Ae = C ? C(z) : z.shadowRoot;
        en(Ae) && (Ir(Ae), Fo(Ae));
      }
    Ut(pe.afterSanitizeShadowDOM, b, null);
  }, Ir = function(b) {
    const z = E ? E(b) : b.nodeType;
    if (z === Tn.element) {
      const Ae = C ? C(b) : b.shadowRoot;
      en(Ae) && (Ir(Ae), Fo(Ae));
    }
    const Q = S ? S(b) : b.childNodes;
    if (!Q)
      return;
    const xe = [];
    Pr(Q, (Ae) => {
      Nr(xe, Ae);
    });
    for (const Ae of xe)
      Ir(Ae);
    if (z === Tn.element) {
      const Ae = y ? y(b) : null;
      if (typeof Ae == "string" && je(Ae) === "template") {
        const We = b.content;
        en(We) && Ir(We);
      }
    }
  };
  return t.sanitize = function(se) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, Q = null, xe = null, Ae = null;
    if (Mt = !se, Mt && (se = "<!-->"), typeof se != "string" && !Yt(se) && (se = rT(se), typeof se != "string"))
      throw so("dirty is not a string, aborting");
    if (!t.isSupported)
      return se;
    if (A || Lr(b), t.removed = [], typeof se == "string" && (Ye = !1), Ye) {
      const _n = y ? y(se) : se.nodeName;
      if (typeof _n == "string") {
        const cn = je(_n);
        if (!ke[cn] || tt[cn])
          throw so("root node is forbidden and cannot be sanitized in-place");
      }
      if (bt(se))
        throw so("root node is clobbered and cannot be sanitized in-place");
      Ir(se);
    } else if (Yt(se))
      z = Z("<!---->"), Q = z.ownerDocument.importNode(se, !0), Q.nodeType === Tn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? z = Q : z.appendChild(Q), Ir(Q);
    else {
      if (!Y && !$e && !w && // eslint-disable-next-line unicorn/prefer-includes
      se.indexOf("<") === -1)
        return k && ue ? k.createHTML(se) : se;
      if (z = Z(se), !z)
        return Y ? null : ue ? O : "";
    }
    z && F && qt(z.firstChild);
    const We = ye(Ye ? se : z);
    for (; xe = We.nextNode(); )
      rr(xe), Al(xe), en(xe.content) && Fo(xe.content);
    if (Ye)
      return $e && rt(se), se;
    if (Y) {
      if ($e && rt(z), Ee)
        for (Ae = de.call(z.ownerDocument); z.firstChild; )
          Ae.appendChild(z.firstChild);
      else
        Ae = z;
      return (Se.shadowroot || Se.shadowrootmode) && (Ae = ve.call(r, Ae, !0)), Ae;
    }
    let tn = w ? z.outerHTML : z.innerHTML;
    return w && ke["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && Et(mT, z.ownerDocument.doctype.name) && (tn = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + tn), $e && Pr([P, $, B], (_n) => {
      tn = $r(tn, _n, " ");
    }), k && ue ? k.createHTML(tn) : tn;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Lr(se), A = !0;
  }, t.clearConfig = function() {
    nr = null, A = !1;
  }, t.isValidAttribute = function(se, b, z) {
    nr || Lr({});
    const Q = je(se), xe = je(b);
    return Do(Q, xe, z);
  }, t.addHook = function(se, b) {
    typeof b == "function" && Nr(pe[se], b);
  }, t.removeHook = function(se, b) {
    if (b !== void 0) {
      const z = Zk(pe[se], b);
      return z === -1 ? void 0 : Xk(pe[se], z, 1)[0];
    }
    return Ic(pe[se]);
  }, t.removeHooks = function(se) {
    pe[se] = [];
  }, t.removeAllHooks = function() {
    pe = Bc();
  }, t;
}
var bT = Xf();
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
const wT = { class: "local-ai-chat-shell" }, kT = { class: "chat-sidebar" }, TT = { class: "sidebar-header" }, ST = { class: "sidebar-title-block" }, ET = { class: "sidebar-actions" }, CT = ["title"], AT = ["title"], OT = { class: "sidebar-search" }, LT = ["placeholder"], IT = { class: "sidebar-section recent-section" }, RT = { class: "section-title" }, xT = {
  key: 0,
  class: "chat-list"
}, PT = ["onClick", "onKeydown"], NT = { class: "chat-item-title" }, $T = { class: "chat-item-time" }, MT = ["title", "onClick"], DT = {
  key: 1,
  class: "sidebar-empty"
}, FT = { class: "chat-panel" }, zT = { class: "chat-topbar" }, BT = { class: "chat-topbar-main" }, VT = { class: "chat-title-row" }, jT = { class: "service-url" }, UT = { class: "chat-topbar-actions" }, HT = ["title"], WT = { class: "date-divider" }, GT = {
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
}, uS = ["title", "onClick"], fS = ["title", "onClick"], dS = ["title"], pS = ["title"], mS = ["title", "onClick"], hS = ["title", "onClick"], gS = ["title"], vS = ["placeholder", "onKeydown"], bS = { class: "input-toolbar" }, yS = { class: "input-toolbar-left" }, _S = ["title"], wS = ["title", "aria-pressed"], kS = { class: "model-select-shell" }, TS = ["value"], SS = ["value"], ES = { class: "input-toolbar-right" }, CS = ["title", "aria-label"], AS = ["disabled", "title", "aria-label"], OS = 96, LS = /* @__PURE__ */ re({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Co(), n = j(""), r = j([]), o = j(""), a = j(""), s = j(!1), i = j(!1), l = j(!1), u = j(!0), f = j(!0), m = j(!1), p = j(null), v = j(null), h = j(null), g = j(null), S = j(Date.now());
    let d = null, C = null;
    const L = /* @__PURE__ */ new Map(), E = I(() => !!a.value.trim() && !s.value), y = I(() => h.value?.healthy ? t("localAi.serviceHealthy") : h.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), k = I(
      () => r.value.find((D) => D.id === o.value) ?? null
    ), O = I(() => k.value?.messages ?? []), W = (D) => D ? D.split(/[\\/]+/).pop() ?? D : "", G = I(
      () => W(h.value?.modelPath) || W(v.value?.modelPath) || t("localAi.localModel")
    ), te = I(() => {
      const D = n.value.trim().toLowerCase();
      return r.value.filter(
        (K) => !D || K.title.toLowerCase().includes(D) || K.messages.some(
          (q) => q.content.toLowerCase().includes(D)
        )
      ).slice().sort((K, q) => q.updatedAt.localeCompare(K.updatedAt));
    }), de = () => t("localAi.now"), ne = () => {
      const D = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: D,
        updatedAt: D,
        updatedAtLabel: de(),
        messages: []
      };
    }, ve = () => {
      const D = g.value;
      return D ? D.scrollHeight - D.scrollTop - D.clientHeight <= OS : !0;
    }, pe = () => {
      const D = ve();
      f.value = D, m.value = !D;
    }, P = () => {
      pe();
    }, $ = async (D = {}) => {
      await lt();
      const K = g.value;
      !K || !D.force && !f.value || (K.scrollTop = K.scrollHeight, pe());
    }, B = () => {
      f.value = !0, $({ force: !0 });
    }, ie = async () => {
      try {
        v.value = await Gf();
      } catch (D) {
        En.warn("[LocalAI] refresh chat config failed", D);
      }
    }, ee = async () => {
      i.value = !0;
      try {
        h.value = await Kf();
      } catch (D) {
        En.warn("[LocalAI] refresh chat status failed", D);
      } finally {
        i.value = !1;
      }
    }, _e = async () => {
      try {
        const D = await zk();
        r.value = D.map((K) => ({
          id: K.id,
          title: K.title,
          createdAt: K.createdAt,
          updatedAt: K.updatedAt,
          updatedAtLabel: new Date(K.updatedAt).toLocaleString(),
          messages: K.turns.map((q) => ({
            id: q.id,
            role: q.role,
            content: q.content,
            createdAt: q.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (D) {
        En.warn("[LocalAI] refresh histories failed", D);
      }
    }, X = async () => {
      await Promise.all([ie(), ee(), _e()]);
    }, Ve = async () => {
      const D = k.value;
      D && await Bk({
        id: D.id,
        title: D.title,
        createdAt: D.createdAt,
        updatedAt: D.updatedAt,
        turns: D.messages.map((K) => ({
          id: K.id,
          role: K.role,
          content: K.content,
          createdAt: K.createdAt
        }))
      });
    }, Oe = () => {
      const D = ne();
      r.value.unshift(D), o.value = D.id, a.value = "";
    }, ke = () => {
      k.value || Oe();
    }, qe = (D) => {
      o.value = D, f.value = !0, $({ force: !0 });
    }, Se = async (D) => {
      r.value = r.value.filter((K) => K.id !== D), await Vk(D), o.value === D && (o.value = r.value[0]?.id ?? "");
    }, et = (D) => {
      const K = D.trimStart();
      return /^\/(?:no_)?think\b/i.test(K) ? D : `${u.value ? "/think" : "/no_think"}
${D}`;
    }, ce = (D = {}) => {
      const K = O.value.filter((fe) => !fe.streaming), q = D.applyThinkingDirective ? K.map((fe) => fe.role).lastIndexOf("user") : -1;
      return K.map((fe, Te) => ({
        role: fe.role,
        content: Te === q && fe.role === "user" ? et(fe.content) : fe.content
      }));
    }, tt = (D) => {
      const K = L.get(D);
      if (K) return K;
      const q = _T(De.parse(D, { async: !1 }));
      if (L.set(D, q), L.size > 80) {
        const fe = L.keys().next().value;
        typeof fe == "string" && L.delete(fe);
      }
      return q;
    }, ft = (D) => {
      const K = D.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!K || K.index === void 0)
        return { reasoning: "", answer: D };
      const q = D.slice(0, K.index).trim(), fe = K[0], Te = D.slice(K.index + fe.length).trim();
      return {
        reasoning: (K[1] ?? "").trim(),
        answer: [q, Te].filter(Boolean).join(`

`)
      };
    }, Ue = (D) => ft(D).reasoning, Tt = (D) => ft(D).answer, at = (D) => {
      const K = D.trim();
      if (!K) return 0;
      const q = (K.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Me = (K.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((St, Mt) => /^[A-Za-z0-9_]+$/.test(Mt) ? St + Math.max(1, Math.ceil(Mt.length / 4)) : St + 1, 0);
      return Math.max(1, Math.ceil(q + Me));
    }, gt = (D) => at(
      D.map((K) => `${K.role}: ${K.content}`).join(`
`)
    ), st = (D) => new Date(
      D.createdAt || k.value?.updatedAt || Date.now()
    ), $e = (D) => {
      const K = S.value, q = O.value.findIndex(
        (Kt) => Kt.id === D.id
      ), fe = D.stats?.promptTokens ?? D.promptTokens ?? at(
        O.value.slice(0, Math.max(0, q)).map((Kt) => Kt.content).join(`
`)
      ), Te = D.stats?.completionTokens ?? at(D.content), Me = D.stats?.totalTokens ?? fe + Te, St = v.value?.ctxSize ?? 4096, Mt = (D.stats?.generationTimeMs ?? D.elapsedMs ?? K - st(D).getTime()) / 1e3, ln = D.stats?.tokensPerSecond ?? (Mt > 0 ? Te / Mt : 0);
      return {
        context: Me,
        contextMax: St,
        contextPercent: Math.min(100, Math.round(Me / St * 100)),
        output: Te,
        outputMax: (v.value?.maxTokens ?? 0) > 0 ? String(v.value?.maxTokens) : "∞",
        seconds: Mt.toFixed(1),
        speed: ln.toFixed(1)
      };
    }, vt = (D) => D.interrupted ? t("localAi.streamInterrupted") : D.stopped ? t("localAi.generationStopped") : D.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", w = () => {
      C || (S.value = Date.now(), C = setInterval(() => {
        S.value = Date.now();
      }, 250));
    }, A = () => {
      C && (clearInterval(C), C = null, S.value = Date.now());
    }, F = async (D) => {
      const K = performance.now(), q = qf();
      let fe = "", Te = null, Me = null, St = !1;
      p.value = q, l.value = !1;
      const Mt = async () => {
        if (!fe) {
          Te = null, Me?.(), Me = null;
          return;
        }
        const nt = l.value ? 240 : fe.length > 240 ? 18 : 6;
        D.content += fe.slice(0, nt), fe = fe.slice(nt), await $(), Te = window.setTimeout(() => {
          Mt().catch(
            (hr) => En.warn("[LocalAI] stream pump failed", hr)
          );
        }, 24);
      }, ln = (nt) => {
        nt && (fe += nt, Te === null && (Te = window.setTimeout(() => {
          Mt().catch(
            (hr) => En.warn("[LocalAI] stream pump failed", hr)
          );
        }, 12)));
      }, Kt = async () => {
        !fe && Te === null || await new Promise((nt) => {
          Me = nt;
        });
      }, Jt = await Fk(
        { messages: ce({ applyThinkingDirective: !0 }) },
        (nt) => {
          St = !0, ln(nt);
        },
        {
          requestId: q,
          onStats: (nt) => {
            D.stats = nt, S.value = Date.now();
          }
        }
      ).catch(async (nt) => {
        throw await Kt(), nt;
      });
      if (!St)
        ln(Jt.content);
      else if (!l.value) {
        const nt = D.content.length + fe.length;
        Jt.content.length > nt && ln(Jt.content.slice(nt));
      }
      await Kt(), !l.value && Jt.content && D.content !== Jt.content && (D.content = Jt.content), D.streaming = !1, D.elapsedMs = performance.now() - K, D.stopped = l.value, D.interrupted = !1, D.error = "", S.value = Date.now(), p.value = null;
    }, Y = async () => {
      const D = p.value;
      if (!(!s.value || !D || l.value)) {
        l.value = !0;
        try {
          await Ac(D);
        } catch (K) {
          En.warn("[LocalAI] cancel stream failed", K);
        }
      }
    }, Ee = async () => {
      const D = a.value.trim();
      if (!D || s.value) return;
      ke();
      const K = (/* @__PURE__ */ new Date()).toISOString();
      k.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: D,
        createdAt: K
      });
      const q = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        promptTokens: gt(
          ce({ applyThinkingDirective: !0 })
        )
      };
      k.value?.messages.push(q), a.value = "", s.value = !0, w(), await $({ force: !0 });
      try {
        await F(q), k.value && (k.value.title = k.value.title === t("localAi.newChatTitle") ? D.slice(0, 28) : k.value.title, k.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.value.updatedAtLabel = new Date(
          k.value.updatedAt
        ).toLocaleString(), await Ve()), await ee();
      } catch (fe) {
        l.value || (Ft.msg(`${t("localAi.chatFailed")}: ${fe}`, "error"), q.error = String(fe), q.interrupted = !!q.content.trim(), q.interrupted || (q.content = String(fe)), k.value && (k.value.title = k.value.title === t("localAi.newChatTitle") ? D.slice(0, 28) : k.value.title, k.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.value.updatedAtLabel = new Date(
          k.value.updatedAt
        ).toLocaleString(), await Ve())), q.streaming = !1, q.elapsedMs = performance.now() - st(q).getTime();
      } finally {
        s.value = !1, p.value = null, A(), await $();
      }
    }, ue = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, T = () => {
      n.value = "";
    }, M = () => {
      Ft.msg(t("localAi.moreComingSoon"));
    }, me = (D) => st(D).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Ce = (D) => {
      const K = new Date(D), q = /* @__PURE__ */ new Date(), fe = q.getTime() - K.getTime(), Te = 24 * 60 * 60 * 1e3;
      return K.toDateString() === q.toDateString() ? K.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : fe < Te * 2 ? t("localAi.yesterday") : fe < Te * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(fe / Te))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(fe / (Te * 7)))
      });
    }, Ye = async (D) => {
      try {
        await navigator.clipboard.writeText(D.content), Ft.msg(t("localAi.copied"));
      } catch (K) {
        Ft.msg(`${t("common.operationFailed")}: ${K}`, "error");
      }
    }, It = async (D) => {
      k.value && (k.value.messages = k.value.messages.filter(
        (K) => K.id !== D
      ), k.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.value.updatedAtLabel = new Date(
        k.value.updatedAt
      ).toLocaleString(), await Ve());
    }, He = (D) => {
      a.value = D.content;
    }, yn = () => {
      Ft.msg(t("localAi.feedbackSaved"));
    }, mr = async (D) => {
      const K = k.value;
      if (!K || s.value) return;
      const q = K.messages.findIndex(
        (Me) => Me.id === D
      );
      if (!K.messages.slice(0, q).reverse().find((Me) => Me.role === "user")) return;
      K.messages = K.messages.slice(0, q);
      const Te = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        promptTokens: gt(
          ce({ applyThinkingDirective: !0 })
        )
      };
      K.messages.push(Te), s.value = !0, w(), await $({ force: !0 });
      try {
        await F(Te), K.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), K.updatedAtLabel = new Date(K.updatedAt).toLocaleString(), await Ve();
      } catch (Me) {
        l.value || (Ft.msg(`${t("localAi.chatFailed")}: ${Me}`, "error"), Te.error = String(Me), Te.interrupted = !!Te.content.trim(), Te.interrupted || (Te.content = String(Me)), K.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), K.updatedAtLabel = new Date(K.updatedAt).toLocaleString(), await Ve()), Te.streaming = !1, Te.elapsedMs = performance.now() - st(Te).getTime();
      } finally {
        s.value = !1, p.value = null, A(), await $();
      }
    };
    return ut(async () => {
      await X(), d = setInterval(() => {
        ee().catch(
          (D) => En.warn("[LocalAI] status timer failed", D)
        );
      }, 8e3);
    }), va(() => {
      d && clearInterval(d), p.value && Ac(p.value), A();
    }), (D, K) => (R(), H("main", wT, [
      _("aside", kT, [
        _("header", TT, [
          _("div", ST, [
            _(
              "h2",
              null,
              V(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            _(
              "p",
              null,
              V(c(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ]),
          _("div", ET, [
            _("button", {
              class: "icon-action-btn icon-action-btn--primary",
              type: "button",
              title: c(t)("localAi.newChat"),
              onClick: Oe
            }, [
              N(c(kd), {
                theme: "outline",
                size: "16"
              })
            ], 8, CT),
            _("button", {
              class: "icon-action-btn",
              type: "button",
              title: c(t)("plugins.refresh"),
              onClick: X
            }, [
              N(c(Pl), {
                theme: "outline",
                size: "16"
              })
            ], 8, AT)
          ])
        ]),
        _("div", OT, [
          N(c(Id), {
            theme: "outline",
            size: "17"
          }),
          kt(_("input", {
            "onUpdate:modelValue": K[0] || (K[0] = (q) => ho(n) ? n.value = q : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, LT), [
            [go, c(n)]
          ])
        ]),
        _("section", IT, [
          _(
            "div",
            RT,
            V(c(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          c(te).length ? (R(), H("div", xT, [
            (R(!0), H(
              Nt,
              null,
              Br(c(te), (q) => (R(), H("div", {
                key: q.id,
                class: U([
                  "chat-list-item",
                  c(o) === q.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (fe) => qe(q.id),
                onKeydown: nn(Xe((fe) => qe(q.id), ["prevent"]), ["enter"])
              }, [
                N(c(Ad), {
                  theme: "outline",
                  size: "16"
                }),
                _(
                  "span",
                  NT,
                  V(q.title),
                  1
                  /* TEXT */
                ),
                _(
                  "span",
                  $T,
                  V(Ce(q.updatedAt)),
                  1
                  /* TEXT */
                ),
                _("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: Xe((fe) => Se(q.id), ["stop"])
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
          ])) : (R(), H(
            "div",
            DT,
            V(c(t)("common.empty")),
            1
            /* TEXT */
          )),
          _("button", {
            class: "view-all-btn",
            type: "button",
            onClick: T
          }, [
            _(
              "span",
              null,
              V(c(t)("localAi.viewAllChats")),
              1
              /* TEXT */
            ),
            N(c(Ld), {
              theme: "outline",
              size: "15"
            })
          ])
        ])
      ]),
      _("section", FT, [
        _("header", zT, [
          _("div", BT, [
            _("div", VT, [
              _(
                "h3",
                null,
                V(c(k)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              _(
                "span",
                {
                  class: U([
                    "status-pill",
                    c(h)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  K[3] || (K[3] = _(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Zt(
                    " " + V(c(y)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            _(
              "div",
              jT,
              V(c(h)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          _("div", UT, [
            N(c(Bn), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: ue
            }, {
              default: ae(() => [
                N(c(rs), {
                  theme: "outline",
                  size: "16"
                }),
                _(
                  "span",
                  null,
                  V(c(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            _("button", {
              class: "topbar-btn topbar-btn--icon",
              type: "button",
              title: c(t)("common.more"),
              onClick: M
            }, [
              N(c(Od), {
                theme: "outline",
                size: "17"
              })
            ], 8, HT)
          ])
        ]),
        _(
          "div",
          {
            ref_key: "messageListRef",
            ref: g,
            class: "message-list",
            onScroll: P
          },
          [
            _("div", WT, [
              _(
                "span",
                null,
                V(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(O).length ? J("v-if", !0) : (R(), H("div", GT, [
              N(c(Nl), {
                theme: "outline",
                size: "28"
              }),
              _(
                "div",
                KT,
                V(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              _(
                "div",
                qT,
                V(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (R(!0), H(
              Nt,
              null,
              Br(c(O), (q) => (R(), H(
                "article",
                {
                  key: q.id,
                  class: U(["message-row", `message-row--${q.role}`])
                },
                [
                  _("div", YT, [
                    q.role === "assistant" ? (R(), le(c(Nl), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (R(), H(
                      "span",
                      ZT,
                      V(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  _("div", XT, [
                    q.role === "user" ? (R(), H("div", QT, [
                      _(
                        "div",
                        null,
                        V(q.content),
                        1
                        /* TEXT */
                      ),
                      _(
                        "time",
                        null,
                        V(me(q)),
                        1
                        /* TEXT */
                      )
                    ])) : (R(), H(
                      Nt,
                      { key: 1 },
                      [
                        _("div", JT, [
                          _(
                            "span",
                            null,
                            V(c(G)),
                            1
                            /* TEXT */
                          ),
                          _(
                            "small",
                            null,
                            V(q.streaming ? c(t)("localAi.thinking") : me(q)),
                            1
                            /* TEXT */
                          )
                        ]),
                        _(
                          "div",
                          {
                            class: U(["assistant-card", { "assistant-card--streaming": q.streaming }])
                          },
                          [
                            q.content ? (R(), H("div", eS, [
                              Ue(q.content) ? (R(), H("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: q.streaming
                              }, [
                                _("summary", null, [
                                  _("span", nS, [
                                    N(c(Il), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    Zt(
                                      " " + V(c(t)("localAi.reasoningTitle")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  q.streaming ? (R(), H(
                                    "small",
                                    rS,
                                    V(c(t)("localAi.thinking")),
                                    1
                                    /* TEXT */
                                  )) : J("v-if", !0)
                                ]),
                                _("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: tt(Ue(q.content))
                                }, null, 8, oS)
                              ], 8, tS)) : J("v-if", !0),
                              Tt(q.content) ? (R(), H("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: tt(Tt(q.content))
                              }, null, 8, aS)) : J("v-if", !0)
                            ])) : (R(), H(
                              "div",
                              sS,
                              V(c(t)("localAi.thinking")),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        q.content ? (R(), H("div", lS, [
                          _(
                            "span",
                            null,
                            " Context: " + V($e(q).context) + "/" + V($e(q).contextMax) + " (" + V($e(q).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          _(
                            "span",
                            null,
                            " Output: " + V($e(q).output) + "/" + V($e(q).outputMax),
                            1
                            /* TEXT */
                          ),
                          _(
                            "span",
                            null,
                            V($e(q).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          _(
                            "span",
                            null,
                            V($e(q).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : J("v-if", !0),
                        vt(q) ? (R(), H(
                          "div",
                          iS,
                          V(vt(q)),
                          1
                          /* TEXT */
                        )) : J("v-if", !0),
                        q.streaming ? J("v-if", !0) : (R(), H("div", cS, [
                          _("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (fe) => Ye(q)
                          }, [
                            N(c(Td), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, uS),
                          _("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (fe) => mr(q.id)
                          }, [
                            N(c(Pl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, fS),
                          _("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: yn
                          }, [
                            N(c(Cd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, dS),
                          _("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: yn
                          }, [
                            N(c(Sd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, pS),
                          _("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (fe) => He(q)
                          }, [
                            N(c(Ed), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, mS),
                          _("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (fe) => It(q.id)
                          }, [
                            N(c(Rl), {
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
        c(m) ? (R(), H("button", {
          key: 0,
          class: "scroll-bottom-btn",
          type: "button",
          title: c(t)("localAi.jumpToLatest"),
          onClick: B
        }, [
          N(c(xl), {
            theme: "outline",
            size: "15"
          }),
          _(
            "span",
            null,
            V(c(t)("localAi.jumpToLatest")),
            1
            /* TEXT */
          )
        ], 8, gS)) : J("v-if", !0),
        _(
          "form",
          {
            class: "chat-input-card",
            onSubmit: Xe(Ee, ["prevent"])
          },
          [
            kt(_("textarea", {
              "onUpdate:modelValue": K[1] || (K[1] = (q) => ho(a) ? a.value = q : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: nn(Xe(Ee, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, vS), [
              [go, c(a)]
            ]),
            _("div", bS, [
              _("div", yS, [
                _("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: ue
                }, [
                  N(c(rs), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, _S),
                _("button", {
                  class: U([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(u) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(u) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(u),
                  onClick: K[2] || (K[2] = (q) => u.value = !c(u))
                }, [
                  N(c(Il), {
                    theme: "outline",
                    size: "15"
                  }),
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.reasoningTitle")),
                    1
                    /* TEXT */
                  )
                ], 10, wS),
                _("label", kS, [
                  _("select", {
                    value: c(G),
                    disabled: ""
                  }, [
                    _("option", { value: c(G) }, V(c(G)), 9, SS)
                  ], 8, TS),
                  N(c(xl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              _("div", ES, [
                K[4] || (K[4] = _(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                c(s) ? (R(), H("button", {
                  key: 0,
                  class: "send-btn send-btn--stop",
                  type: "button",
                  title: c(t)("localAi.stopGenerating"),
                  "aria-label": c(t)("localAi.stopGenerating"),
                  onClick: Y
                }, [
                  N(c(xd), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, CS)) : (R(), H("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(E),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  N(c(Rd), {
                    theme: "outline",
                    size: "15"
                  })
                ], 8, AS))
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), IS = /* @__PURE__ */ Ks(LS, [["__scopeId", "data-v-fe548552"]]), RS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IS
}, Symbol.toStringTag, { value: "Module" }));
async function Vc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Lt("plugin:dialog|open", { options: e });
}
const xS = { class: "settings-panel local-ai-settings-shell" }, PS = { class: "local-ai-hero panel-card" }, NS = { class: "panel-title" }, $S = { class: "hero-desc" }, MS = { class: "header-actions" }, DS = {
  key: 0,
  class: "settings-grid"
}, FS = { class: "summary-panel panel-card" }, zS = { class: "status-strip" }, BS = { class: "summary-card" }, VS = { class: "summary-card__title" }, jS = { class: "summary-card__desc" }, US = { class: "service-controls" }, HS = { class: "service-url" }, WS = { class: "summary-card" }, GS = { class: "summary-card__title" }, KS = { class: "summary-card__desc" }, qS = { class: "summary-meta" }, YS = { class: "form-panel panel-card" }, ZS = { class: "settings-section" }, XS = { class: "settings-section__header" }, QS = { class: "field-stack" }, JS = { class: "field-row" }, eE = { class: "path-control" }, tE = { class: "field-row" }, nE = { class: "field-row" }, rE = { class: "field-row" }, oE = { class: "path-control" }, aE = ["placeholder"], sE = { class: "settings-section grid-two" }, lE = { class: "settings-section__header" }, iE = { class: "param-grid" }, cE = { class: "number-field" }, uE = { class: "number-field" }, fE = { class: "number-field" }, dE = { class: "number-field" }, pE = { class: "number-field" }, mE = { class: "number-field" }, hE = { class: "settings-section grid-two" }, gE = { class: "settings-section__header" }, vE = { class: "switch-grid" }, bE = { class: "settings-section grid-two" }, yE = { class: "settings-section__header" }, _E = { class: "switch-grid switch-grid--two" }, wE = { class: "number-field" }, kE = { class: "number-field" }, TE = { class: "settings-section grid-two" }, SE = { class: "settings-section__header" }, EE = { class: "param-grid param-grid--three" }, CE = { class: "number-field" }, AE = { class: "number-field" }, OE = { class: "number-field" }, LE = { class: "settings-footer" }, IE = ["title"], RE = /* @__PURE__ */ re({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Co(), n = j(null), r = j(null), o = j(null), a = j(null), s = j(!1), i = j(!1), l = j(!1), u = j(!1), f = j(!1);
    let m = null;
    const p = I(() => !!a.value?.selectedModelPath), v = I({ get: () => n.value?.modelPath ?? "", set: (P) => {
      n.value && (n.value.modelPath = P || void 0);
    } }), h = I({ get: () => n.value?.mmprojPath ?? "", set: (P) => {
      n.value && (n.value.mmprojPath = P || void 0);
    } }), g = I(() => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), S = I(() => p.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = I(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), C = (P) => P.split(/[\\/]+/).pop() ?? P, L = async () => {
      s.value = !0;
      try {
        n.value = await Gf(), await Promise.all([E(), k(), y()]);
      } catch (P) {
        En.error("[LocalAI] refresh settings failed", P), Ft.msg(`${t("localAi.refreshFailed")}: ${P}`, "error");
      } finally {
        s.value = !1;
      }
    }, E = async () => {
      r.value = await Nk();
    }, y = async () => {
      o.value = await Kf();
    }, k = async () => {
      n.value && (a.value = await Pk(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, O = async () => {
      if (n.value)
        try {
          await Xa(n.value);
        } catch (P) {
          En.warn("[LocalAI] autosave failed", P);
        }
    }, W = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Xa(n.value), await Promise.all([E(), k(), y()]), Ft.msg(t("localAi.configSaved"));
        } catch (P) {
          Ft.msg(`${t("localAi.configSaveFailed")}: ${P}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, G = async () => {
      const P = await Vc({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !P || Array.isArray(P) || !n.value || (n.value.modelDir = P, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await k());
    }, te = async () => {
      const P = await Vc({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !P || Array.isArray(P) || !n.value || (n.value.runtimePath = P, await O(), await E());
    }, de = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Xa(n.value), o.value = await $k(n.value), Ft.msg(t("localAi.serviceStarted"));
        } catch (P) {
          Ft.msg(`${t("localAi.serviceStartFailed")}: ${P}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, ne = async () => {
      u.value = !0;
      try {
        await W(), o.value = await Mk(), Ft.msg(t("localAi.serviceRestarted"));
      } catch (P) {
        Ft.msg(`${t("localAi.serviceRestartFailed")}: ${P}`, "error");
      } finally {
        u.value = !1;
      }
    }, ve = async () => {
      f.value = !0;
      try {
        await Dk(), await y(), Ft.msg(t("localAi.serviceStoppedMsg"));
      } catch (P) {
        Ft.msg(`${t("localAi.serviceStopFailed")}: ${P}`, "error");
      } finally {
        f.value = !1;
      }
    }, pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return ut(async () => {
      await L(), m = setInterval(() => {
        y().catch((P) => En.warn("[LocalAI] status refresh failed", P));
      }, 5e3);
    }), va(() => {
      m && clearInterval(m);
    }), (P, $) => {
      const B = Kw, ie = Gw, ee = Iw, _e = ek;
      return R(), H("div", xS, [
        _("header", PS, [
          _("div", null, [
            _(
              "h3",
              NS,
              V(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            _(
              "p",
              $S,
              V(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          _("div", MS, [
            N(c(Bn), {
              size: "small",
              plain: "",
              onClick: pe
            }, {
              default: ae(() => [
                Zt(
                  V(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            N(c(Bn), {
              size: "small",
              loading: c(s),
              onClick: L
            }, {
              default: ae(() => [
                Zt(
                  V(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (R(), H("main", DS, [
          _("aside", FS, [
            _("div", zS, [
              _(
                "div",
                {
                  class: U(["status-item", { ready: c(r)?.available }])
                },
                [
                  $[20] || ($[20] = _(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  _(
                    "span",
                    null,
                    V(c(g)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              _(
                "div",
                {
                  class: U(["status-item", { ready: c(p) }])
                },
                [
                  $[21] || ($[21] = _(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  _(
                    "span",
                    null,
                    V(c(S)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              _(
                "div",
                {
                  class: U(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  $[22] || ($[22] = _(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  _(
                    "span",
                    null,
                    V(c(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            _("section", BS, [
              _(
                "div",
                VS,
                V(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              _(
                "div",
                jS,
                V(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              _("div", US, [
                N(c(Bn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: de
                }, {
                  default: ae(() => [
                    Zt(
                      V(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                N(c(Bn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: ne
                }, {
                  default: ae(() => [
                    Zt(
                      V(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                N(c(Bn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: ve
                }, {
                  default: ae(() => [
                    Zt(
                      V(c(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              _(
                "div",
                HS,
                V(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            _("section", WS, [
              _(
                "div",
                GS,
                V(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              _(
                "div",
                KS,
                V(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              _("div", qS, [
                _("div", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "b",
                    null,
                    V(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                _("div", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "b",
                    null,
                    V(c(p) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                _("div", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "b",
                    null,
                    V(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          _("section", YS, [
            _("div", ZS, [
              _("div", XS, [
                _("div", null, [
                  _(
                    "h4",
                    null,
                    V(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "p",
                    null,
                    V(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _("div", QS, [
                _("label", JS, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  _("div", eE, [
                    kt(_(
                      "input",
                      {
                        "onUpdate:modelValue": $[0] || ($[0] = (X) => c(n).modelDir = X),
                        class: "text-input",
                        onChange: k
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [go, c(n).modelDir]
                    ]),
                    N(c(Bn), {
                      size: "small",
                      plain: "",
                      onClick: G
                    }, {
                      default: ae(() => [
                        Zt(
                          V(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                _("label", tE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  N(ie, {
                    modelValue: c(v),
                    "onUpdate:modelValue": $[1] || ($[1] = (X) => ho(v) ? v.value = X : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: ae(() => [
                      (R(!0), H(
                        Nt,
                        null,
                        Br(c(a)?.mainModels ?? [], (X) => (R(), le(B, {
                          key: X,
                          label: C(X),
                          value: X
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _("label", nE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  N(ie, {
                    modelValue: c(h),
                    "onUpdate:modelValue": $[2] || ($[2] = (X) => ho(h) ? h.value = X : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: ae(() => [
                      (R(!0), H(
                        Nt,
                        null,
                        Br(c(a)?.mmprojModels ?? [], (X) => (R(), le(B, {
                          key: X,
                          label: C(X),
                          value: X
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _("label", rE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  _("div", oE, [
                    kt(_("input", {
                      "onUpdate:modelValue": $[3] || ($[3] = (X) => c(n).runtimePath = X),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, aE), [
                      [go, c(n).runtimePath]
                    ]),
                    N(c(Bn), {
                      size: "small",
                      plain: "",
                      onClick: te
                    }, {
                      default: ae(() => [
                        Zt(
                          V(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ])
            ]),
            _("div", sE, [
              _("div", lE, [
                _("div", null, [
                  _(
                    "h4",
                    null,
                    V(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "p",
                    null,
                    V(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _("div", iE, [
                _("label", cE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": $[4] || ($[4] = (X) => c(n).ctxSize = X),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", uE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": $[5] || ($[5] = (X) => c(n).gpuLayers = X),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", fE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": $[6] || ($[6] = (X) => c(n).threads = X),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", dE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": $[7] || ($[7] = (X) => c(n).batchSize = X),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", pE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": $[8] || ($[8] = (X) => c(n).ubatchSize = X),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", mE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": $[9] || ($[9] = (X) => c(n).mainGpu = X),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _("div", hE, [
              _("div", gE, [
                _("div", null, [
                  _(
                    "h4",
                    null,
                    V(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "p",
                    null,
                    V(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _("div", vE, [
                _("label", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  N(_e, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": $[10] || ($[10] = (X) => c(n).flashAttn = X)
                  }, null, 8, ["modelValue"])
                ]),
                _("label", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  N(_e, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": $[11] || ($[11] = (X) => c(n).kvOffload = X)
                  }, null, 8, ["modelValue"])
                ]),
                _("label", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  N(_e, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": $[12] || ($[12] = (X) => c(n).mmap = X)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _("div", bE, [
              _("div", yE, [
                _("div", null, [
                  _(
                    "h4",
                    null,
                    V(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "p",
                    null,
                    V(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _("div", _E, [
                _("label", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  N(_e, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": $[13] || ($[13] = (X) => c(n).autoStartOnRequest = X)
                  }, null, 8, ["modelValue"])
                ]),
                _("label", null, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  N(_e, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": $[14] || ($[14] = (X) => c(n).keepAlive = X)
                  }, null, 8, ["modelValue"])
                ]),
                _("label", wE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": $[15] || ($[15] = (X) => c(n).idleTimeoutMinutes = X),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", kE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": $[16] || ($[16] = (X) => c(n).requestTimeoutSecs = X),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _("div", TE, [
              _("div", SE, [
                _("div", null, [
                  _(
                    "h4",
                    null,
                    V(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  _(
                    "p",
                    null,
                    V(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _("div", EE, [
                _("label", CE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": $[17] || ($[17] = (X) => c(n).temperature = X),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", AE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": $[18] || ($[18] = (X) => c(n).maxTokens = X),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _("label", OE, [
                  _(
                    "span",
                    null,
                    V(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  N(ee, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": $[19] || ($[19] = (X) => c(n).port = X),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _("div", LE, [
              N(c(Bn), {
                type: "primary",
                loading: c(i),
                onClick: W
              }, {
                default: ae(() => [
                  Zt(
                    V(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (R(), H("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, V(c(o).commandLine), 9, IE)) : J("v-if", !0)
            ])
          ])
        ])) : J("v-if", !0)
      ]);
    };
  }
}), xE = /* @__PURE__ */ Ks(RE, [["__scopeId", "data-v-18356d29"]]), PE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xE
}, Symbol.toStringTag, { value: "Module" }));
export {
  ME as activate,
  ME as default
};
