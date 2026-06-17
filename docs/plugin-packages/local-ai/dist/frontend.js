var Jf = Object.defineProperty;
var ed = (e, t, n) => t in e ? Jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Fe = (e, t, n) => ed(e, typeof t != "symbol" ? t + "" : t, n);
import * as Ba from "vue";
import { inject as De, createVNode as $, defineAsyncComponent as td, ref as j, shallowRef as fr, computed as I, watch as ye, onMounted as ut, onUnmounted as va, defineComponent as re, h as jc, Text as Uc, Fragment as $t, createElementBlock as W, openBlock as x, normalizeClass as U, createCommentVNode as ee, renderSlot as ve, createElementVNode as y, getCurrentInstance as Bt, unref as c, watchEffect as Hc, readonly as Is, getCurrentScope as nd, onScopeDispose as rd, nextTick as lt, isRef as go, warn as od, provide as Pn, mergeProps as Vr, toRef as Hn, useAttrs as ad, useSlots as sd, normalizeStyle as Ct, createBlock as ie, withCtx as ae, resolveDynamicComponent as zt, withModifiers as Qe, toDisplayString as B, onBeforeUnmount as Mn, Transition as Qr, withDirectives as Tt, vShow as Qn, reactive as _r, onActivated as ld, onUpdated as Wc, cloneVNode as id, Comment as cd, Teleport as ud, onBeforeMount as fd, onDeactivated as dd, createTextVNode as Zt, withKeys as tn, createSlots as pd, toRaw as md, toRefs as xs, resolveComponent as vr, resolveDirective as hd, toHandlerKey as gd, renderList as Br, vModelText as vo, shallowReactive as vd, isVNode as bo, render as na } from "vue";
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
function Lt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = yd(), i = De(wd, bd);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, m = a.strokeLinejoin, p = a.theme, v = a.fill, h = a.spin, g = _d(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: m,
          theme: p,
          fill: v
        }, i), S = [i.prefix + "-icon"];
        return S.push(i.prefix + "-icon-" + e), t && i.rtl && S.push(i.prefix + "-icon-rtl"), h && S.push(i.prefix + "-icon-spin"), $("span", {
          class: S.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const kd = Lt("add", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = Lt("brain", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), Td = Lt("copy", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rl = Lt("delete", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sd = Lt("dislike", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pl = Lt("down", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ed = Lt("edit", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ad = Lt("like", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cd = Lt("message", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Od = Lt("more", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), $("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), $("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Nl = Lt("refresh", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ld = Lt("right", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $l = Lt("robot", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Id = Lt("search", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xd = Lt("send", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), os = Lt("setting-two", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rd = Lt("square", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), B2 = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => xS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: os,
    component: td(() => Promise.resolve().then(() => F2))
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
const Ml = typeof window < "u", Sr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Nd = (e, t, n) => $d({ l: e, k: t, s: n }), $d = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), wt = (e) => typeof e == "number" && isFinite(e), Md = (e) => Rs(e) === "[object Date]", ra = (e) => Rs(e) === "[object RegExp]", ba = (e) => Ie(e) && Object.keys(e).length === 0, Ot = Object.assign, Dd = Object.create, ze = (e = null) => Dd(e);
let Dl;
const Xo = () => Dl || (Dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ze());
function Fl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function zl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Fd(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${zl(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${zl(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
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
const ct = Array.isArray, Je = (e) => typeof e == "function", oe = (e) => typeof e == "string", it = (e) => typeof e == "boolean", xe = (e) => e !== null && typeof e == "object", Vd = (e) => xe(e) && Je(e.then) && Je(e.catch), Gc = Object.prototype.toString, Rs = (e) => Gc.call(e), Ie = (e) => Rs(e) === "[object Object]", Bd = (e) => e == null ? "" : ct(e) || Ie(e) && e.toString === Gc ? JSON.stringify(e, null, 2) : String(e);
function Ps(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const zo = (e) => !xe(e) || ct(e);
function Qo(e, t) {
  if (zo(e) || zo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (xe(r[a]) && !xe(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : ze()), zo(o[a]) || zo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
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
function as(e, t, n) {
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
const kn = " ", Wd = "\r", Nt = `
`, Gd = "\u2028", Kd = "\u2029";
function qd(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Wd && t[O + 1] === Nt, i = (O) => t[O] === Nt, l = (O) => t[O] === Kd, u = (O) => t[O] === Gd, f = (O) => s(O) || i(O) || l(O) || u(O), m = () => n, p = () => r, v = () => o, h = () => a, g = (O) => s(O) || l(O) || u(O) ? Nt : t[O], S = () => g(n), d = () => g(n + a);
  function A() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function L() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function E() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(O = 0) {
    a = O;
  }
  function T() {
    const O = n + a;
    for (; O !== n; )
      A();
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
    next: A,
    peek: L,
    reset: E,
    resetPeek: _,
    skipToPeek: T
  };
}
const zn = void 0, Yd = ".", Vl = "'", Zd = "tokenizer";
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
  function m(w, C, F, ...Z) {
    const Ee = u();
    if (C.column += F, C.offset += F, f) {
      const fe = n ? as(Ee.startLoc, C) : null, k = ya(w, fe, {
        domain: Zd,
        args: Z
      });
      f(k);
    }
  }
  function p(w, C, F) {
    w.endLoc = a(), w.currentType = C;
    const Z = { type: C };
    return n && (Z.loc = as(w.startLoc, w.endLoc)), F != null && (Z.value = F), Z;
  }
  const v = (w) => p(
    w,
    13
    /* TokenTypes.EOF */
  );
  function h(w, C) {
    return w.currentChar() === C ? (w.next(), C) : (m(Pe.EXPECTED_TOKEN, a(), 0, C), "");
  }
  function g(w) {
    let C = "";
    for (; w.currentPeek() === kn || w.currentPeek() === Nt; )
      C += w.currentPeek(), w.peek();
    return C;
  }
  function S(w) {
    const C = g(w);
    return w.skipToPeek(), C;
  }
  function d(w) {
    if (w === zn)
      return !1;
    const C = w.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C === 95;
  }
  function A(w) {
    if (w === zn)
      return !1;
    const C = w.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function L(w, C) {
    const { currentType: F } = C;
    if (F !== 2)
      return !1;
    g(w);
    const Z = d(w.currentPeek());
    return w.resetPeek(), Z;
  }
  function E(w, C) {
    const { currentType: F } = C;
    if (F !== 2)
      return !1;
    g(w);
    const Z = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), Ee = A(Z);
    return w.resetPeek(), Ee;
  }
  function _(w, C) {
    const { currentType: F } = C;
    if (F !== 2)
      return !1;
    g(w);
    const Z = w.currentPeek() === Vl;
    return w.resetPeek(), Z;
  }
  function T(w, C) {
    const { currentType: F } = C;
    if (F !== 7)
      return !1;
    g(w);
    const Z = w.currentPeek() === ".";
    return w.resetPeek(), Z;
  }
  function O(w, C) {
    const { currentType: F } = C;
    if (F !== 8)
      return !1;
    g(w);
    const Z = d(w.currentPeek());
    return w.resetPeek(), Z;
  }
  function G(w, C) {
    const { currentType: F } = C;
    if (!(F === 7 || F === 11))
      return !1;
    g(w);
    const Z = w.currentPeek() === ":";
    return w.resetPeek(), Z;
  }
  function K(w, C) {
    const { currentType: F } = C;
    if (F !== 9)
      return !1;
    const Z = () => {
      const fe = w.currentPeek();
      return fe === "{" ? d(w.peek()) : fe === "@" || fe === "|" || fe === ":" || fe === "." || fe === kn || !fe ? !1 : fe === Nt ? (w.peek(), Z()) : pe(w, !1);
    }, Ee = Z();
    return w.resetPeek(), Ee;
  }
  function te(w) {
    g(w);
    const C = w.currentPeek() === "|";
    return w.resetPeek(), C;
  }
  function pe(w, C = !0) {
    const F = (Ee = !1, fe = "") => {
      const k = w.currentPeek();
      return k === "{" || k === "@" || !k ? Ee : k === "|" ? !(fe === kn || fe === Nt) : k === kn ? (w.peek(), F(!0, kn)) : k === Nt ? (w.peek(), F(!0, Nt)) : !0;
    }, Z = F();
    return C && w.resetPeek(), Z;
  }
  function ne(w, C) {
    const F = w.currentChar();
    return F === zn ? zn : C(F) ? (w.next(), F) : null;
  }
  function be(w) {
    const C = w.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36;
  }
  function me(w) {
    return ne(w, be);
  }
  function N(w) {
    const C = w.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36 || // $
    C === 45;
  }
  function R(w) {
    return ne(w, N);
  }
  function V(w) {
    const C = w.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function ce(w) {
    return ne(w, V);
  }
  function Q(w) {
    const C = w.charCodeAt(0);
    return C >= 48 && C <= 57 || // 0-9
    C >= 65 && C <= 70 || // A-F
    C >= 97 && C <= 102;
  }
  function we(w) {
    return ne(w, Q);
  }
  function Y(w) {
    let C = "", F = "";
    for (; C = ce(w); )
      F += C;
    return F;
  }
  function Ve(w) {
    let C = "";
    for (; ; ) {
      const F = w.currentChar();
      if (F === "{" || F === "}" || F === "@" || F === "|" || !F)
        break;
      if (F === kn || F === Nt)
        if (pe(w))
          C += F, w.next();
        else {
          if (te(w))
            break;
          C += F, w.next();
        }
      else
        C += F, w.next();
    }
    return C;
  }
  function Oe(w) {
    S(w);
    let C = "", F = "";
    for (; C = R(w); )
      F += C;
    const Z = w.currentChar();
    if (Z && Z !== "}" && Z !== zn && Z !== kn && Z !== Nt && Z !== "　") {
      const Ee = ft(w);
      return m(Pe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, F + Ee), F + Ee;
    }
    return w.currentChar() === zn && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), F;
  }
  function Te(w) {
    S(w);
    let C = "";
    return w.currentChar() === "-" ? (w.next(), C += `-${Y(w)}`) : C += Y(w), w.currentChar() === zn && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), C;
  }
  function qe(w) {
    return w !== Vl && w !== Nt;
  }
  function Se(w) {
    S(w), h(w, "'");
    let C = "", F = "";
    for (; C = ne(w, qe); )
      C === "\\" ? F += tt(w) : F += C;
    const Z = w.currentChar();
    return Z === Nt || Z === zn ? (m(Pe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), Z === Nt && (w.next(), h(w, "'")), F) : (h(w, "'"), F);
  }
  function tt(w) {
    const C = w.currentChar();
    switch (C) {
      case "\\":
      case "'":
        return w.next(), `\\${C}`;
      case "u":
        return ue(w, C, 4);
      case "U":
        return ue(w, C, 6);
      default:
        return m(Pe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, C), "";
    }
  }
  function ue(w, C, F) {
    h(w, C);
    let Z = "";
    for (let Ee = 0; Ee < F; Ee++) {
      const fe = we(w);
      if (!fe) {
        m(Pe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${C}${Z}${w.currentChar()}`);
        break;
      }
      Z += fe;
    }
    return `\\${C}${Z}`;
  }
  function nt(w) {
    return w !== "{" && w !== "}" && w !== kn && w !== Nt;
  }
  function ft(w) {
    S(w);
    let C = "", F = "";
    for (; C = ne(w, nt); )
      F += C;
    return F;
  }
  function Ue(w) {
    let C = "", F = "";
    for (; C = me(w); )
      F += C;
    return F;
  }
  function St(w) {
    const C = (F) => {
      const Z = w.currentChar();
      return Z === "{" || Z === "@" || Z === "|" || Z === "(" || Z === ")" || !Z || Z === kn ? F : (F += Z, w.next(), C(F));
    };
    return C("");
  }
  function at(w) {
    S(w);
    const C = h(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return S(w), C;
  }
  function vt(w, C) {
    let F = null;
    switch (w.currentChar()) {
      case "{":
        return C.braceNest >= 1 && m(Pe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), F = p(
          C,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), S(w), C.braceNest++, F;
      case "}":
        return C.braceNest > 0 && C.currentType === 2 && m(Pe.EMPTY_PLACEHOLDER, a(), 0), w.next(), F = p(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), C.braceNest--, C.braceNest > 0 && S(w), C.inLinked && C.braceNest === 0 && (C.inLinked = !1), F;
      case "@":
        return C.braceNest > 0 && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), F = st(w, C) || v(C), C.braceNest = 0, F;
      default: {
        let Ee = !0, fe = !0, k = !0;
        if (te(w))
          return C.braceNest > 0 && m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), F = p(C, 1, at(w)), C.braceNest = 0, C.inLinked = !1, F;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6))
          return m(Pe.UNTERMINATED_CLOSING_BRACE, a(), 0), C.braceNest = 0, $e(w, C);
        if (Ee = L(w, C))
          return F = p(C, 4, Oe(w)), S(w), F;
        if (fe = E(w, C))
          return F = p(C, 5, Te(w)), S(w), F;
        if (k = _(w, C))
          return F = p(C, 6, Se(w)), S(w), F;
        if (!Ee && !fe && !k)
          return F = p(C, 12, ft(w)), m(Pe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, F.value), S(w), F;
        break;
      }
    }
    return F;
  }
  function st(w, C) {
    const { currentType: F } = C;
    let Z = null;
    const Ee = w.currentChar();
    switch ((F === 7 || F === 8 || F === 11 || F === 9) && (Ee === Nt || Ee === kn) && m(Pe.INVALID_LINKED_FORMAT, a(), 0), Ee) {
      case "@":
        return w.next(), Z = p(
          C,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), C.inLinked = !0, Z;
      case ".":
        return S(w), w.next(), p(
          C,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return S(w), w.next(), p(
          C,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return te(w) ? (Z = p(C, 1, at(w)), C.braceNest = 0, C.inLinked = !1, Z) : T(w, C) || G(w, C) ? (S(w), st(w, C)) : O(w, C) ? (S(w), p(C, 11, Ue(w))) : K(w, C) ? (S(w), Ee === "{" ? vt(w, C) || Z : p(C, 10, St(w))) : (F === 7 && m(Pe.INVALID_LINKED_FORMAT, a(), 0), C.braceNest = 0, C.inLinked = !1, $e(w, C));
    }
  }
  function $e(w, C) {
    let F = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (C.braceNest > 0)
      return vt(w, C) || v(C);
    if (C.inLinked)
      return st(w, C) || v(C);
    switch (w.currentChar()) {
      case "{":
        return vt(w, C) || v(C);
      case "}":
        return m(Pe.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), p(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return st(w, C) || v(C);
      default: {
        if (te(w))
          return F = p(C, 1, at(w)), C.braceNest = 0, C.inLinked = !1, F;
        if (pe(w))
          return p(C, 0, Ve(w));
        break;
      }
    }
    return F;
  }
  function bt() {
    const { currentType: w, offset: C, startLoc: F, endLoc: Z } = l;
    return l.lastType = w, l.lastOffset = C, l.lastStartLoc = F, l.lastEndLoc = Z, l.offset = o(), l.startLoc = a(), r.currentChar() === zn ? p(
      l,
      13
      /* TokenTypes.EOF */
    ) : $e(r, l);
  }
  return {
    nextToken: bt,
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
  function r(d, A, L, E, ..._) {
    const T = d.currentPosition();
    if (T.offset += E, T.column += E, n) {
      const O = t ? as(L, T) : null, G = ya(A, O, {
        domain: Qd,
        args: _
      });
      n(G);
    }
  }
  function o(d, A, L) {
    const E = { type: d };
    return t && (E.start = A, E.end = A, E.loc = { start: L, end: L }), E;
  }
  function a(d, A, L, E) {
    t && (d.end = A, d.loc && (d.loc.end = L));
  }
  function s(d, A) {
    const L = d.context(), E = o(3, L.offset, L.startLoc);
    return E.value = A, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function i(d, A) {
    const L = d.context(), { lastOffset: E, lastStartLoc: _ } = L, T = o(5, E, _);
    return T.index = parseInt(A, 10), d.nextToken(), a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function l(d, A) {
    const L = d.context(), { lastOffset: E, lastStartLoc: _ } = L, T = o(4, E, _);
    return T.key = A, d.nextToken(), a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function u(d, A) {
    const L = d.context(), { lastOffset: E, lastStartLoc: _ } = L, T = o(9, E, _);
    return T.value = A.replace(Jd, ep), d.nextToken(), a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function f(d) {
    const A = d.nextToken(), L = d.context(), { lastOffset: E, lastStartLoc: _ } = L, T = o(8, E, _);
    return A.type !== 11 ? (r(d, Pe.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), T.value = "", a(T, E, _), {
      nextConsumeToken: A,
      node: T
    }) : (A.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, Tn(A)), T.value = A.value || "", a(T, d.currentOffset(), d.currentPosition()), {
      node: T
    });
  }
  function m(d, A) {
    const L = d.context(), E = o(7, L.offset, L.startLoc);
    return E.value = A, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function p(d) {
    const A = d.context(), L = o(6, A.offset, A.startLoc);
    let E = d.nextToken();
    if (E.type === 8) {
      const _ = f(d);
      L.modifier = _.node, E = _.nextConsumeToken || d.nextToken();
    }
    switch (E.type !== 9 && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(E)), E = d.nextToken(), E.type === 2 && (E = d.nextToken()), E.type) {
      case 10:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(E)), L.key = m(d, E.value || "");
        break;
      case 4:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(E)), L.key = l(d, E.value || "");
        break;
      case 5:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(E)), L.key = i(d, E.value || "");
        break;
      case 6:
        E.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(E)), L.key = u(d, E.value || "");
        break;
      default: {
        r(d, Pe.UNEXPECTED_EMPTY_LINKED_KEY, A.lastStartLoc, 0);
        const _ = d.context(), T = o(7, _.offset, _.startLoc);
        return T.value = "", a(T, _.offset, _.startLoc), L.key = T, a(L, _.offset, _.startLoc), {
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
    const A = d.context(), L = A.currentType === 1 ? d.currentOffset() : A.offset, E = A.currentType === 1 ? A.endLoc : A.startLoc, _ = o(2, L, E);
    _.items = [];
    let T = null;
    do {
      const K = T || d.nextToken();
      switch (T = null, K.type) {
        case 0:
          K.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(K)), _.items.push(s(d, K.value || ""));
          break;
        case 5:
          K.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(K)), _.items.push(i(d, K.value || ""));
          break;
        case 4:
          K.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(K)), _.items.push(l(d, K.value || ""));
          break;
        case 6:
          K.value == null && r(d, Pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Tn(K)), _.items.push(u(d, K.value || ""));
          break;
        case 7: {
          const te = p(d);
          _.items.push(te.node), T = te.nextConsumeToken || null;
          break;
        }
      }
    } while (A.currentType !== 13 && A.currentType !== 1);
    const O = A.currentType === 1 ? A.lastOffset : d.currentOffset(), G = A.currentType === 1 ? A.lastEndLoc : d.currentPosition();
    return a(_, O, G), _;
  }
  function h(d, A, L, E) {
    const _ = d.context();
    let T = E.items.length === 0;
    const O = o(1, A, L);
    O.cases = [], O.cases.push(E);
    do {
      const G = v(d);
      T || (T = G.items.length === 0), O.cases.push(G);
    } while (_.currentType !== 13);
    return T && r(d, Pe.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function g(d) {
    const A = d.context(), { offset: L, startLoc: E } = A, _ = v(d);
    return A.currentType === 13 ? _ : h(d, L, E, _);
  }
  function S(d) {
    const A = Xd(d, Ot({}, e)), L = A.context(), E = o(0, L.offset, L.startLoc);
    return t && E.loc && (E.loc.source = d), E.body = g(A), e.onCacheKey && (E.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && r(A, Pe.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), a(E, A.currentOffset(), A.currentPosition()), E;
  }
  return { parse: S };
}
function Tn(e) {
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
    Ns(e[n], t);
}
function Ns(e, t) {
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
function rp(e, t = {}) {
  const n = np(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ns(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function op(e) {
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
function Dr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Dr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Dr(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Dr(n[r]);
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
      Dr(t.key), t.k = t.key, delete t.key, t.modifier && (Dr(t.modifier), t.m = t.modifier, delete t.modifier);
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
  )}(`), jr(e, t.key), t.modifier ? (e.push(", "), jr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function lp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (jr(e, t.items[a]), a !== o - 1); a++)
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
    for (let a = 0; a < o && (jr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function cp(e, t) {
  t.body ? jr(e, t.body) : e.push("null");
}
function jr(e, t) {
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
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Ps(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), jr(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fp(e, t = {}) {
  const n = Ot({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = tp(n).parse(e);
  return r ? (a && op(i), o && Dr(i), { ast: i, code: "" }) : (rp(i, n), up(i, n));
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
  return xe(e) && $s(e) === 0 && (pn(e, "b") || pn(e, "body"));
}
const Kc = ["b", "body"];
function pp(e) {
  return mr(e, Kc);
}
const qc = ["c", "cases"];
function mp(e) {
  return mr(e, qc, []);
}
const Yc = ["s", "static"];
function hp(e) {
  return mr(e, Yc);
}
const Zc = ["i", "items"];
function gp(e) {
  return mr(e, Zc, []);
}
const Xc = ["t", "type"];
function $s(e) {
  return mr(e, Xc);
}
const Qc = ["v", "value"];
function Vo(e, t) {
  const n = mr(e, Qc);
  if (n != null)
    return n;
  throw yo(t);
}
const Jc = ["m", "modifier"];
function vp(e) {
  return mr(e, Jc);
}
const eu = ["k", "key"];
function bp(e) {
  const t = mr(e, eu);
  if (t)
    return t;
  throw yo(
    6
    /* NodeTypes.Linked */
  );
}
function mr(e, t, n) {
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
function yo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ja(e) {
  return (n) => yp(n, e);
}
function yp(e, t) {
  const n = pp(t);
  if (n == null)
    throw yo(
      0
      /* NodeTypes.Resource */
    );
  if ($s(n) === 1) {
    const a = mp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Ul(e, i)
    ], []));
  } else
    return Ul(e, n);
}
function Ul(e, t) {
  const n = hp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = gp(t).reduce((o, a) => [...o, ss(e, a)], []);
    return e.normalize(r);
  }
}
function ss(e, t) {
  const n = $s(t);
  switch (n) {
    case 3:
      return Vo(t, n);
    case 9:
      return Vo(t, n);
    case 4: {
      const r = t;
      if (pn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (pn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw yo(n);
    }
    case 5: {
      const r = t;
      if (pn(r, "i") && wt(r.i))
        return e.interpolate(e.list(r.i));
      if (pn(r, "index") && wt(r.index))
        return e.interpolate(e.list(r.index));
      throw yo(n);
    }
    case 6: {
      const r = t, o = vp(r), a = bp(r);
      return e.linked(ss(e, a), o ? ss(e, o) : void 0, e.type);
    }
    case 7:
      return Vo(t, n);
    case 8:
      return Vo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const _p = (e) => e;
let Bo = ze();
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
    const r = (t.onCacheKey || _p)(e), o = Bo[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = wp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ja(a);
    return s ? i : Bo[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Bo[n];
      return r || (Bo[n] = ja(e));
    } else
      return ja(e);
  }
}
const Wn = {
  INVALID_ARGUMENT: Ud,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Tp = 24;
function Gn(e) {
  return ya(e, null, void 0);
}
function Ms(e, t) {
  return t.locale != null ? Hl(t.locale) : Hl(e.locale);
}
let Ua;
function Hl(e) {
  if (oe(e))
    return e;
  if (Je(e)) {
    if (e.resolvedOnce && Ua != null)
      return Ua;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Vd(t))
        throw Gn(Wn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ua = t;
    } else
      throw Gn(Wn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Gn(Wn.NOT_SUPPORT_LOCALE_TYPE);
}
function Sp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ct(t) ? t : xe(t) ? Object.keys(t) : oe(t) ? [t] : [n]
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
      s = Wl(a, s, t);
    const i = ct(t) || !Ie(t) ? t : t.default ? t.default : null;
    s = oe(i) ? [i] : i, ct(s) && Wl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Wl(e, t, n) {
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
    r = Ap(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Ap(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ct(n) || Ie(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const hr = [];
hr[
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
hr[
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
hr[
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
hr[
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
hr[
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
hr[
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
hr[
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
const Cp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Op(e) {
  return Cp.test(e);
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
function xp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Op(t) ? Lp(t) : "*" + t;
}
function Rp(e) {
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
      if (o = 0, s === void 0 || (s = xp(s), s === !1))
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
      if (l = Ip(a), m = hr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = p[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Gl = /* @__PURE__ */ new Map();
function Pp(e, t) {
  return xe(e) ? e[t] : null;
}
function Np(e, t) {
  if (!xe(e))
    return null;
  let n = Gl.get(t);
  if (n || (n = Rp(t), n && Gl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (tu.includes(s) && In(o))
      return null;
    const i = o[s];
    if (i === void 0 || Je(o))
      return null;
    o = i, a++;
  }
  return o;
}
const $p = "11.2.2", _a = -1, oa = "en-US", Kl = "", ql = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Mp() {
  return {
    upper: (e, t) => t === "text" && oe(e) ? e.toUpperCase() : t === "vnode" && xe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && oe(e) ? e.toLowerCase() : t === "vnode" && xe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && oe(e) ? ql(e) : t === "vnode" && xe(e) && "__v_isVNode" in e ? ql(e.children) : e
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
const Yl = (e) => {
  su = e;
}, Vp = () => su;
let Zl = 0;
function Bp(e = {}) {
  const t = Je(e.onWarn) ? e.onWarn : Pd, n = oe(e.version) ? e.version : $p, r = oe(e.locale) || Je(e.locale) ? e.locale : oa, o = Je(r) ? oa : r, a = ct(e.fallbackLocale) || Ie(e.fallbackLocale) || oe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Ie(e.messages) ? e.messages : Ha(o), i = Ie(e.datetimeFormats) ? e.datetimeFormats : Ha(o), l = Ie(e.numberFormats) ? e.numberFormats : Ha(o), u = Ot(ze(), e.modifiers, Mp()), f = e.pluralRules || ze(), m = Je(e.missing) ? e.missing : null, p = it(e.missingWarn) || ra(e.missingWarn) ? e.missingWarn : !0, v = it(e.fallbackWarn) || ra(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, S = Je(e.postTranslation) ? e.postTranslation : null, d = Ie(e.processor) ? e.processor : null, A = it(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, E = Je(e.messageCompiler) ? e.messageCompiler : ru, _ = Je(e.messageResolver) ? e.messageResolver : ou || Pp, T = Je(e.localeFallbacker) ? e.localeFallbacker : au || Sp, O = xe(e.fallbackContext) ? e.fallbackContext : void 0, G = e, K = xe(G.__datetimeFormatters) ? G.__datetimeFormatters : /* @__PURE__ */ new Map(), te = xe(G.__numberFormatters) ? G.__numberFormatters : /* @__PURE__ */ new Map(), pe = xe(G.__meta) ? G.__meta : {};
  Zl++;
  const ne = {
    version: n,
    cid: Zl,
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
    warnHtmlMessage: A,
    escapeParameter: L,
    messageCompiler: E,
    messageResolver: _,
    localeFallbacker: T,
    fallbackContext: O,
    onWarn: t,
    __meta: pe
  };
  return ne.datetimeFormats = i, ne.numberFormats = l, ne.__datetimeFormatters = K, ne.__numberFormatters = te, ne;
}
const Ha = (e) => ({ [e]: ze() });
function Ds(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return oe(i) ? i : t;
  } else
    return t;
}
function eo(e, t, n) {
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
function Xl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, f, m] = ls(...t), p = it(f.missingWarn) ? f.missingWarn : e.missingWarn;
  it(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part, h = Ms(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!oe(l) || l === "")
    return new Intl.DateTimeFormat(h, m).format(u);
  let S = {}, d, A = null;
  const L = "datetime format";
  for (let T = 0; T < g.length && (d = g[T], S = n[d] || {}, A = S[l], !Ie(A)); T++)
    Ds(e, l, d, p, L);
  if (!Ie(A) || !oe(d))
    return r ? _a : l;
  let E = `${d}__${l}`;
  ba(m) || (E = `${E}__${JSON.stringify(m)}`);
  let _ = i.get(E);
  return _ || (_ = new Intl.DateTimeFormat(d, Ot({}, A, m)), i.set(E, _)), v ? _.formatToParts(u) : _.format(u);
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
  const [t, n, r, o] = e, a = ze();
  let s = ze(), i;
  if (oe(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Gn(Wn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Gn(Wn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Md(t)) {
    if (isNaN(t.getTime()))
      throw Gn(Wn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (wt(t))
    i = t;
  else
    throw Gn(Wn.INVALID_ARGUMENT);
  return oe(n) ? a.key = n : Ie(n) && Object.keys(n).forEach((l) => {
    lu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), oe(r) ? a.locale = r : Ie(r) && (s = r), Ie(o) && (s = o), [a.key || "", i, a, s];
}
function Ql(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Jl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, f, m] = is(...t), p = it(f.missingWarn) ? f.missingWarn : e.missingWarn;
  it(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part, h = Ms(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!oe(l) || l === "")
    return new Intl.NumberFormat(h, m).format(u);
  let S = {}, d, A = null;
  const L = "number format";
  for (let T = 0; T < g.length && (d = g[T], S = n[d] || {}, A = S[l], !Ie(A)); T++)
    Ds(e, l, d, p, L);
  if (!Ie(A) || !oe(d))
    return r ? _a : l;
  let E = `${d}__${l}`;
  ba(m) || (E = `${E}__${JSON.stringify(m)}`);
  let _ = i.get(E);
  return _ || (_ = new Intl.NumberFormat(d, Ot({}, A, m)), i.set(E, _)), v ? _.formatToParts(u) : _.format(u);
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
  const [t, n, r, o] = e, a = ze();
  let s = ze();
  if (!wt(t))
    throw Gn(Wn.INVALID_ARGUMENT);
  const i = t;
  return oe(n) ? a.key = n : Ie(n) && Object.keys(n).forEach((l) => {
    iu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), oe(r) ? a.locale = r : Ie(r) && (s = r), Ie(o) && (s = o), [a.key || "", i, a, s];
}
function ei(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Hp = (e) => e, Wp = (e) => "", Gp = "text", Kp = (e) => e.length === 0 ? "" : Ps(e), qp = Bd;
function ti(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Yp(e) {
  const t = wt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (wt(e.named.count) || wt(e.named.n)) ? wt(e.named.count) ? e.named.count : wt(e.named.n) ? e.named.n : t : t;
}
function Zp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Xp(e = {}) {
  const t = e.locale, n = Yp(e), r = xe(e.pluralRules) && oe(t) && Je(e.pluralRules[t]) ? e.pluralRules[t] : ti, o = xe(e.pluralRules) && oe(t) && Je(e.pluralRules[t]) ? ti : void 0, a = (d) => d[r(n, d.length, o)], s = e.list || [], i = (d) => s[d], l = e.named || ze();
  wt(e.pluralIndex) && Zp(n, l);
  const u = (d) => l[d];
  function f(d, A) {
    const L = Je(e.messages) ? e.messages(d, !!A) : xe(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Wp);
  }
  const m = (d) => e.modifiers ? e.modifiers[d] : Hp, p = Ie(e.processor) && Je(e.processor.normalize) ? e.processor.normalize : Kp, v = Ie(e.processor) && Je(e.processor.interpolate) ? e.processor.interpolate : qp, h = Ie(e.processor) && oe(e.processor.type) ? e.processor.type : Gp, S = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...A) => {
      const [L, E] = A;
      let _ = "text", T = "";
      A.length === 1 ? xe(L) ? (T = L.modifier || T, _ = L.type || _) : oe(L) && (T = L || T) : A.length === 2 && (oe(L) && (T = L || T), oe(E) && (_ = E || _));
      const O = f(d, !0)(S), G = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && ct(O) && T ? O[0] : O
      );
      return T ? m(T)(G, _) : G;
    },
    message: f,
    type: h,
    interpolate: v,
    normalize: p,
    values: Ot(ze(), s, l)
  };
  return S;
}
const ni = () => "", qn = (e) => Je(e);
function ri(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = cs(...t), f = it(u.missingWarn) ? u.missingWarn : e.missingWarn, m = it(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = it(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, h = oe(u.default) || it(u.default) ? it(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (oe(h) || Je(h)), S = Ms(e, u);
  p && Qp(u);
  let [d, A, L] = v ? [
    l,
    S,
    i[S] || ze()
  ] : cu(e, l, S, s, m, f), E = d, _ = l;
  if (!v && !(oe(E) || In(E) || qn(E)) && g && (E = h, _ = E), !v && (!(oe(E) || In(E) || qn(E)) || !oe(A)))
    return o ? _a : l;
  let T = !1;
  const O = () => {
    T = !0;
  }, G = qn(E) ? E : uu(e, l, A, E, _, O);
  if (T)
    return E;
  const K = tm(e, A, L, u), te = Xp(K), pe = Jp(e, G, te);
  let ne = r ? r(pe, l) : pe;
  return p && oe(ne) && (ne = Fd(ne)), ne;
}
function Qp(e) {
  ct(e.list) ? e.list = e.list.map((t) => oe(t) ? Fl(t) : t) : xe(e.named) && Object.keys(e.named).forEach((t) => {
    oe(e.named[t]) && (e.named[t] = Fl(e.named[t]));
  });
}
function cu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let m = ze(), p, v = null;
  const h = "translate";
  for (let g = 0; g < f.length && (p = f[g], m = s[p] || ze(), (v = l(m, t)) === null && (v = m[t]), !(oe(v) || In(v) || qn(v))); g++)
    if (!Up(p, f)) {
      const S = Ds(
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
  if (qn(r)) {
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
function cs(...e) {
  const [t, n, r] = e, o = ze();
  if (!oe(t) && !wt(t) && !qn(t) && !In(t))
    throw Gn(Wn.INVALID_ARGUMENT);
  const a = wt(t) ? String(t) : (qn(t), t);
  return wt(n) ? o.plural = n : oe(n) ? o.default = n : Ie(n) && !ba(n) ? o.named = n : ct(n) && (o.list = n), wt(r) ? o.plural = r : oe(r) ? o.default = r : Ie(r) && Ot(o, r), [a, o];
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
        const A = uu(e, v, t, g, v, () => {
          S = !0;
        });
        return S ? ni : A;
      } else return qn(g) ? g : ni;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), wt(r.plural) && (p.pluralIndex = r.plural), p;
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
const Ur = {
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
function _o(e, ...t) {
  return ya(e, null, void 0);
}
const us = /* @__PURE__ */ Sr("__translateVNode"), fs = /* @__PURE__ */ Sr("__datetimeParts"), ds = /* @__PURE__ */ Sr("__numberParts"), om = Sr("__setPluralRules"), fu = /* @__PURE__ */ Sr("__injectWithOption"), ps = /* @__PURE__ */ Sr("__dispose");
function wo(e) {
  if (!xe(e) || In(e))
    return e;
  for (const t in e)
    if (pn(e, t))
      if (!t.includes("."))
        xe(e[t]) && wo(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = ze()), !xe(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (In(o) ? tu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !In(o)) {
          const s = o[n[r]];
          xe(s) && wo(s);
        }
      }
  return e;
}
function du(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Ie(n) ? n : ct(r) ? ze() : { [e]: ze() };
  if (ct(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || ze(), Qo(u, s[l])) : Qo(u, s);
    } else
      oe(i) && Qo(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      pn(s, i) && wo(s[i]);
  return s;
}
function am(e) {
  return e.type;
}
function sm(e, t, n) {
  let r = xe(t.messages) ? t.messages : ze();
  "__i18nGlobal" in n && (r = du(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (xe(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (xe(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function oi(e) {
  return $(Uc, null, e, 0);
}
function pu() {
  return "currentInstance" in Ba ? Ba["currentInstance"] : Ba.getCurrentInstance();
}
const ai = () => [], lm = () => !1;
let si = 0;
function li(e) {
  return (t, n, r, o) => e(n, r, pu() || void 0, o);
}
function im(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Ml ? j : fr;
  let s = it(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : oe(e.locale) ? e.locale : oa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : oe(e.fallbackLocale) || ct(e.fallbackLocale) || Ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(du(i.value, e)), f = a(Ie(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Ie(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : it(e.missingWarn) || ra(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : it(e.fallbackWarn) || ra(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : it(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, S = Je(e.missing) ? e.missing : null, d = Je(e.missing) ? li(e.missing) : null, A = Je(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : it(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const _ = t ? t.modifiers : Ie(e.modifiers) ? e.modifiers : {};
  let T = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && Yl(null);
    const k = {
      version: nm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: _,
      pluralRules: T,
      missing: d === null ? void 0 : d,
      missingWarn: p,
      fallbackWarn: v,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: A === null ? void 0 : A,
      warnHtmlMessage: L,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = f.value, k.numberFormats = m.value, k.__datetimeFormatters = Ie(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = Ie(O) ? O.__numberFormatters : void 0;
    const D = Bp(k);
    return r && Yl(D), D;
  })(), eo(O, i.value, l.value);
  function K() {
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
    set: (k) => {
      O.locale = k, i.value = k;
    }
  }), pe = I({
    get: () => l.value,
    set: (k) => {
      O.fallbackLocale = k, l.value = k, eo(O, i.value, k);
    }
  }), ne = I(() => u.value), be = /* @__PURE__ */ I(() => f.value), me = /* @__PURE__ */ I(() => m.value);
  function N() {
    return Je(A) ? A : null;
  }
  function R(k) {
    A = k, O.postTranslation = k;
  }
  function V() {
    return S;
  }
  function ce(k) {
    k !== null && (d = li(k)), S = k, O.missing = d;
  }
  const Q = (k, D, ge, Ae, Ye, xt) => {
    K();
    let He;
    try {
      r || (O.fallbackContext = t ? Vp() : void 0), He = k(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (ge !== "translate exists" && // for not `te` (e.g `t`)
    wt(He) && He === _a || ge === "translate exists" && !He) {
      const [Fn, rr] = D();
      return t && h ? Ae(t) : Ye(Fn);
    } else {
      if (xt(He))
        return He;
      throw _o(Ur.UNEXPECTED_RETURN_TYPE);
    }
  };
  function we(...k) {
    return Q((D) => Reflect.apply(ri, null, [D, ...k]), () => cs(...k), "translate", (D) => Reflect.apply(D.t, D, [...k]), (D) => D, (D) => oe(D));
  }
  function Y(...k) {
    const [D, ge, Ae] = k;
    if (Ae && !xe(Ae))
      throw _o(Ur.INVALID_ARGUMENT);
    return we(D, ge, Ot({ resolvedMessage: !0 }, Ae || {}));
  }
  function Ve(...k) {
    return Q((D) => Reflect.apply(Xl, null, [D, ...k]), () => ls(...k), "datetime format", (D) => Reflect.apply(D.d, D, [...k]), () => Kl, (D) => oe(D) || ct(D));
  }
  function Oe(...k) {
    return Q((D) => Reflect.apply(Jl, null, [D, ...k]), () => is(...k), "number format", (D) => Reflect.apply(D.n, D, [...k]), () => Kl, (D) => oe(D) || ct(D));
  }
  function Te(k) {
    return k.map((D) => oe(D) || wt(D) || it(D) ? oi(String(D)) : D);
  }
  const Se = {
    normalize: Te,
    interpolate: (k) => k,
    type: "vnode"
  };
  function tt(...k) {
    return Q((D) => {
      let ge;
      const Ae = D;
      try {
        Ae.processor = Se, ge = Reflect.apply(ri, null, [Ae, ...k]);
      } finally {
        Ae.processor = null;
      }
      return ge;
    }, () => cs(...k), "translate", (D) => D[us](...k), (D) => [oi(D)], (D) => ct(D));
  }
  function ue(...k) {
    return Q((D) => Reflect.apply(Jl, null, [D, ...k]), () => is(...k), "number format", (D) => D[ds](...k), ai, (D) => oe(D) || ct(D));
  }
  function nt(...k) {
    return Q((D) => Reflect.apply(Xl, null, [D, ...k]), () => ls(...k), "datetime format", (D) => D[fs](...k), ai, (D) => oe(D) || ct(D));
  }
  function ft(k) {
    T = k, O.pluralRules = T;
  }
  function Ue(k, D) {
    return Q(() => {
      if (!k)
        return !1;
      const ge = oe(D) ? D : i.value, Ae = vt(ge), Ye = O.messageResolver(Ae, k);
      return In(Ye) || qn(Ye) || oe(Ye);
    }, () => [k], "translate exists", (ge) => Reflect.apply(ge.te, ge, [k, D]), lm, (ge) => it(ge));
  }
  function St(k) {
    let D = null;
    const ge = nu(O, l.value, i.value);
    for (let Ae = 0; Ae < ge.length; Ae++) {
      const Ye = u.value[ge[Ae]] || {}, xt = O.messageResolver(Ye, k);
      if (xt != null) {
        D = xt;
        break;
      }
    }
    return D;
  }
  function at(k) {
    const D = St(k);
    return D ?? (t ? t.tm(k) || {} : {});
  }
  function vt(k) {
    return u.value[k] || {};
  }
  function st(k, D) {
    if (o) {
      const ge = { [k]: D };
      for (const Ae in ge)
        pn(ge, Ae) && wo(ge[Ae]);
      D = ge[k];
    }
    u.value[k] = D, O.messages = u.value;
  }
  function $e(k, D) {
    u.value[k] = u.value[k] || {};
    const ge = { [k]: D };
    if (o)
      for (const Ae in ge)
        pn(ge, Ae) && wo(ge[Ae]);
    D = ge[k], Qo(D, u.value[k]), O.messages = u.value;
  }
  function bt(k) {
    return f.value[k] || {};
  }
  function w(k, D) {
    f.value[k] = D, O.datetimeFormats = f.value, Ql(O, k, D);
  }
  function C(k, D) {
    f.value[k] = Ot(f.value[k] || {}, D), O.datetimeFormats = f.value, Ql(O, k, D);
  }
  function F(k) {
    return m.value[k] || {};
  }
  function Z(k, D) {
    m.value[k] = D, O.numberFormats = m.value, ei(O, k, D);
  }
  function Ee(k, D) {
    m.value[k] = Ot(m.value[k] || {}, D), O.numberFormats = m.value, ei(O, k, D);
  }
  si++, t && Ml && (ye(t.locale, (k) => {
    s && (i.value = k, O.locale = k, eo(O, i.value, l.value));
  }), ye(t.fallbackLocale, (k) => {
    s && (l.value = k, O.fallbackLocale = k, eo(O, i.value, l.value));
  }));
  const fe = {
    id: si,
    locale: te,
    fallbackLocale: pe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(k) {
      s = k, k && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, eo(O, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ne,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return T || {};
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
      return v;
    },
    set fallbackWarn(k) {
      v = k, O.fallbackWarn = v;
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
      return E;
    },
    set escapeParameter(k) {
      E = k, O.escapeParameter = k;
    },
    t: we,
    getLocaleMessage: vt,
    setLocaleMessage: st,
    mergeLocaleMessage: $e,
    getPostTranslationHandler: N,
    setPostTranslationHandler: R,
    getMissingHandler: V,
    setMissingHandler: ce,
    [om]: ft
  };
  return fe.datetimeFormats = be, fe.numberFormats = me, fe.rt = Y, fe.te = Ue, fe.tm = at, fe.d = Ve, fe.n = Oe, fe.getDateTimeFormat = bt, fe.setDateTimeFormat = w, fe.mergeDateTimeFormat = C, fe.getNumberFormat = F, fe.setNumberFormat = Z, fe.mergeNumberFormat = Ee, fe[fu] = n, fe[us] = tt, fe[fs] = nt, fe[ds] = ue, fe;
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
function cm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === $t ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, ze());
}
function mu() {
  return $t;
}
Ot({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => wt(e) || !isNaN(e)
  }
}, Fs);
function um(e) {
  return ct(e) && !oe(e[0]);
}
function hu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = ze();
    e.locale && (s.locale = e.locale), oe(e.format) ? s.key = e.format : xe(e.format) && (oe(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((p, v) => n.includes(v) ? Ot(ze(), p, { [v]: e.format[v] }) : p, ze()));
    const l = r(e.value, s, i);
    let u = [s.key];
    ct(l) ? u = l.map((p, v) => {
      const h = o[p.type], g = h ? h({ [p.type]: p.value, index: v, parts: l }) : [p.value];
      return um(g) && (g[0].key = `${p.type}-${v}`), g;
    }) : oe(l) && (u = [l]);
    const f = Ot(ze(), a), m = oe(e.tag) || xe(e.tag) ? e.tag : mu();
    return jc(m, f, u);
  };
}
Ot({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Fs);
const fm = /* @__PURE__ */ Sr("global-vue-i18n");
function Co(e = {}) {
  const t = pu();
  if (t == null)
    throw _o(Ur.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw _o(Ur.NOT_INSTALLED);
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
    const l = Ot({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = im(l), s.__composerExtend && (i[ps] = s.__composerExtend(i)), vm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function dm(e) {
  const t = De(e.isCE ? fm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw _o(e.isCE ? Ur.NOT_INSTALLED_WITH_PROVIDE : Ur.UNEXPECTED_ERROR);
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
    const o = r[ps];
    o && (o(), delete r[ps]);
  }, t);
}
Ot({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Fs);
rm();
Dp(kp);
Fp(Np);
zp(nu);
function zs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Er = zs();
function gu(e) {
  Er = e;
}
var uo = { exec: () => null };
function Le(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Vt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var bm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Vt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, ym = /^(?:[ \t]*(?:\n|$))+/, _m = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, wm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Oo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, km = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Vs = /(?:[*+-]|\d{1,9}[.)])/, vu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, bu = Le(vu).replace(/bull/g, Vs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Tm = Le(vu).replace(/bull/g, Vs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Sm = /^[^\n]+/, js = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Em = Le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", js).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Am = Le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Vs).getRegex(), wa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Us = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Cm = Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Us).replace("tag", wa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), yu = Le(Bs).replace("hr", Oo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex(), Om = Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", yu).getRegex(), Hs = { blockquote: Om, code: _m, def: Em, fences: wm, heading: km, hr: Oo, html: Cm, lheading: bu, list: Am, newline: ym, paragraph: yu, table: uo, text: Sm }, ii = Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Oo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex(), Lm = { ...Hs, lheading: Tm, table: ii, paragraph: Le(Bs).replace("hr", Oo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ii).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex() }, Im = { ...Hs, html: Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Us).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: uo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Le(Bs).replace("hr", Oo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", bu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, xm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Rm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, _u = /^( {2,}|\\)\n(?!\s*$)/, Pm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ka = /[\p{P}\p{S}]/u, Ws = /[\s\p{P}\p{S}]/u, wu = /[^\s\p{P}\p{S}]/u, Nm = Le(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ws).getRegex(), ku = /(?!~)[\p{P}\p{S}]/u, $m = /(?!~)[\s\p{P}\p{S}]/u, Mm = /(?:[^\s\p{P}\p{S}]|~)/u, Dm = Le(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", bm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Tu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Fm = Le(Tu, "u").replace(/punct/g, ka).getRegex(), zm = Le(Tu, "u").replace(/punct/g, ku).getRegex(), Su = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Vm = Le(Su, "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Ws).replace(/punct/g, ka).getRegex(), Bm = Le(Su, "gu").replace(/notPunctSpace/g, Mm).replace(/punctSpace/g, $m).replace(/punct/g, ku).getRegex(), jm = Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Ws).replace(/punct/g, ka).getRegex(), Um = Le(/\\(punct)/, "gu").replace(/punct/g, ka).getRegex(), Hm = Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Wm = Le(Us).replace("(?:-->|$)", "-->").getRegex(), Gm = Le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Wm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), aa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Km = Le(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", aa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Eu = Le(/^!?\[(label)\]\[(ref)\]/).replace("label", aa).replace("ref", js).getRegex(), Au = Le(/^!?\[(ref)\](?:\[\])?/).replace("ref", js).getRegex(), qm = Le("reflink|nolink(?!\\()", "g").replace("reflink", Eu).replace("nolink", Au).getRegex(), ci = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Gs = { _backpedal: uo, anyPunctuation: Um, autolink: Hm, blockSkip: Dm, br: _u, code: Rm, del: uo, emStrongLDelim: Fm, emStrongRDelimAst: Vm, emStrongRDelimUnd: jm, escape: xm, link: Km, nolink: Au, punctuation: Nm, reflink: Eu, reflinkSearch: qm, tag: Gm, text: Pm, url: uo }, Ym = { ...Gs, link: Le(/^!?\[(label)\]\((.*?)\)/).replace("label", aa).getRegex(), reflink: Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", aa).getRegex() }, ms = { ...Gs, emStrongRDelimAst: Bm, emStrongLDelim: zm, url: Le(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ci).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Le(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ci).getRegex() }, Zm = { ...ms, br: Le(_u).replace("{2,}", "*").getRegex(), text: Le(ms.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, jo = { normal: Hs, gfm: Lm, pedantic: Im }, to = { normal: Gs, gfm: ms, breaks: Zm, pedantic: Ym }, Xm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ui = (e) => Xm[e];
function Vn(e, t) {
  if (t) {
    if (Vt.escapeTest.test(e)) return e.replace(Vt.escapeReplace, ui);
  } else if (Vt.escapeTestNoEncode.test(e)) return e.replace(Vt.escapeReplaceNoEncode, ui);
  return e;
}
function fi(e) {
  try {
    e = encodeURI(e).replace(Vt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function di(e, t) {
  let n = e.replace(Vt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Vt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Vt.slashPipe, "|");
  return r;
}
function no(e, t, n) {
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
function pi(e, t, n, r, o) {
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
    Fe(this, "options");
    Fe(this, "rules");
    Fe(this, "lexer");
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : no(n, `
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
        let r = no(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: no(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = no(t[0], `
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
          let g = this.rules.other.nextBulletRegex(h), S = this.rules.other.hrRegex(h), d = this.rules.other.fencesBeginRegex(h), A = this.rules.other.headingBeginRegex(h), L = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let E = e.split(`
`, 1)[0], _;
            if (p = E, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), _ = p) : _ = p.replace(this.rules.other.tabCharGlobal, "    "), d.test(p) || A.test(p) || L.test(p) || g.test(p) || S.test(p)) break;
            if (_.search(this.rules.other.nonSpaceChar) >= h || !p.trim()) f += `
` + _.slice(h);
            else {
              if (v || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || d.test(m) || A.test(m) || S.test(m)) break;
              f += `
` + p;
            }
            !v && !p.trim() && (v = !0), u += E + `
`, e = e.substring(E.length + 1), m = _.slice(h);
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
    let n = di(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(di(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = no(n.slice(0, -1), "\\");
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
}, fn = class hs {
  constructor(t) {
    Fe(this, "tokens");
    Fe(this, "options");
    Fe(this, "state");
    Fe(this, "inlineQueue");
    Fe(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Er, this.options.tokenizer = this.options.tokenizer || new sa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Vt, block: jo.normal, inline: to.normal };
    this.options.pedantic ? (n.block = jo.pedantic, n.inline = to.pedantic) : this.options.gfm && (n.block = jo.gfm, this.options.breaks ? n.inline = to.breaks : n.inline = to.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: jo, inline: to };
  }
  static lex(t, n) {
    return new hs(n).lex(t);
  }
  static lexInline(t, n) {
    return new hs(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Vt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Vt.tabCharGlobal, "    ").replace(Vt.spaceLine, "")); t; ) {
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
    Fe(this, "options");
    Fe(this, "parser");
    this.options = t || Er;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Vt.notSpaceStart)?.[0], a = t.replace(Vt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Vn(o) + '">' + (r ? a : Vn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Vn(a, !0)) + `</code></pre>
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
    return `<code>${Vn(t, !0)}</code>`;
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
    return n && (s += ' title="' + Vn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = fi(t);
    if (a === null) return Vn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Vn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Vn(t.text);
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
}, dn = class gs {
  constructor(t) {
    Fe(this, "options");
    Fe(this, "renderer");
    Fe(this, "textRenderer");
    this.options = t || Er, this.options.renderer = this.options.renderer || new la(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ks();
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
}, Zo, io = (Zo = class {
  constructor(e) {
    Fe(this, "options");
    Fe(this, "block");
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
}, Fe(Zo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Fe(Zo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Zo), eh = class {
  constructor(...t) {
    Fe(this, "defaults", zs());
    Fe(this, "options", this.setOptions);
    Fe(this, "parse", this.parseMarkdown(!0));
    Fe(this, "parseInline", this.parseMarkdown(!1));
    Fe(this, "Parser", dn);
    Fe(this, "Renderer", la);
    Fe(this, "TextRenderer", Ks);
    Fe(this, "Lexer", fn);
    Fe(this, "Tokenizer", sa);
    Fe(this, "Hooks", io);
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
        let a = this.defaults.hooks || new io();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          io.passThroughHooks.has(s) ? a[i] = (f) => {
            if (this.defaults.async && io.passThroughHooksRespectAsync.has(s)) return (async () => {
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
        let o = "<p>An error occurred:</p><pre>" + Vn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, wr = new eh();
function Me(e, t) {
  return wr.parse(e, t);
}
Me.options = Me.setOptions = function(e) {
  return wr.setOptions(e), Me.defaults = wr.defaults, gu(Me.defaults), Me;
};
Me.getDefaults = zs;
Me.defaults = Er;
Me.use = function(...e) {
  return wr.use(...e), Me.defaults = wr.defaults, gu(Me.defaults), Me;
};
Me.walkTokens = function(e, t) {
  return wr.walkTokens(e, t);
};
Me.parseInline = wr.parseInline;
Me.Parser = dn;
Me.parser = dn.parse;
Me.Renderer = la;
Me.TextRenderer = Ks;
Me.Lexer = fn;
Me.lexer = fn.lex;
Me.Tokenizer = sa;
Me.Hooks = io;
Me.parse = Me;
Me.options;
Me.setOptions;
Me.use;
Me.walkTokens;
Me.parseInline;
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
    return (n, r) => (x(), W("button", {
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
      e.loading ? (x(), W("div", nh, r[1] || (r[1] = [
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
      ve(n.$slots, "default", {}, void 0, !0)
    ], 10, th));
  }
}), qs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Bn = /* @__PURE__ */ qs(rh, [["__scopeId", "data-v-9497085f"]]), Cu = Symbol(), Jo = "el", oh = "is-", br = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Ou = Symbol("namespaceContextKey"), Ys = (e) => {
  const t = e || (Bt() ? De(Ou, j(Jo)) : j(Jo));
  return I(() => c(t) || Jo);
}, ht = (e, t) => {
  const n = Ys(t);
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
const ko = () => {
}, ah = Object.prototype.hasOwnProperty, mi = (e, t) => ah.call(e, t), Cn = Array.isArray, et = (e) => typeof e == "function", Mt = (e) => typeof e == "string", Xt = (e) => e !== null && typeof e == "object", hi = (e) => (Xt(e) || et(e)) && et(e.then) && et(e.catch), sh = Object.prototype.toString, lh = (e) => sh.call(e), ih = (e) => lh(e) === "[object Object]";
var Lu = typeof global == "object" && global && global.Object === Object && global, ch = typeof self == "object" && self && self.Object === Object && self, Dn = Lu || ch || Function("return this")(), Nn = Dn.Symbol, Iu = Object.prototype, uh = Iu.hasOwnProperty, fh = Iu.toString, ro = Nn ? Nn.toStringTag : void 0;
function dh(e) {
  var t = uh.call(e, ro), n = e[ro];
  try {
    e[ro] = void 0;
    var r = !0;
  } catch {
  }
  var o = fh.call(e);
  return r && (t ? e[ro] = n : delete e[ro]), o;
}
var ph = Object.prototype, mh = ph.toString;
function hh(e) {
  return mh.call(e);
}
var gh = "[object Null]", vh = "[object Undefined]", gi = Nn ? Nn.toStringTag : void 0;
function Jr(e) {
  return e == null ? e === void 0 ? vh : gh : gi && gi in Object(e) ? dh(e) : hh(e);
}
function Hr(e) {
  return e != null && typeof e == "object";
}
var bh = "[object Symbol]";
function Ta(e) {
  return typeof e == "symbol" || Hr(e) && Jr(e) == bh;
}
function yh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var vn = Array.isArray, vi = Nn ? Nn.prototype : void 0, bi = vi ? vi.toString : void 0;
function xu(e) {
  if (typeof e == "string")
    return e;
  if (vn(e))
    return yh(e, xu) + "";
  if (Ta(e))
    return bi ? bi.call(e) : "";
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
function pr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var yi = NaN, Sh = /^[-+]0x[0-9a-f]+$/i, Eh = /^0b[01]+$/i, Ah = /^0o[0-7]+$/i, Ch = parseInt;
function _i(e) {
  if (typeof e == "number")
    return e;
  if (Ta(e))
    return yi;
  if (pr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = pr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Th(e);
  var n = Eh.test(e);
  return n || Ah.test(e) ? Ch(e.slice(2), n ? 2 : 8) : Sh.test(e) ? yi : +e;
}
function Ru(e) {
  return e;
}
var Oh = "[object AsyncFunction]", Lh = "[object Function]", Ih = "[object GeneratorFunction]", xh = "[object Proxy]";
function Pu(e) {
  if (!pr(e))
    return !1;
  var t = Jr(e);
  return t == Lh || t == Ih || t == Oh || t == xh;
}
var Wa = Dn["__core-js_shared__"], wi = function() {
  var e = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rh(e) {
  return !!wi && wi in e;
}
var Ph = Function.prototype, Nh = Ph.toString;
function Ar(e) {
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
var $h = /[\\^$.*+?()[\]{}|]/g, Mh = /^\[object .+?Constructor\]$/, Dh = Function.prototype, Fh = Object.prototype, zh = Dh.toString, Vh = Fh.hasOwnProperty, Bh = RegExp(
  "^" + zh.call(Vh).replace($h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jh(e) {
  if (!pr(e) || Rh(e))
    return !1;
  var t = Pu(e) ? Bh : Mh;
  return t.test(Ar(e));
}
function Uh(e, t) {
  return e?.[t];
}
function Cr(e, t) {
  var n = Uh(e, t);
  return jh(n) ? n : void 0;
}
var vs = Cr(Dn, "WeakMap");
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
    var e = Cr(Object, "defineProperty");
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
} : Ru, Xh = qh(Zh);
function Qh(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Jh = 9007199254740991, eg = /^(?:0|[1-9]\d*)$/;
function Zs(e, t) {
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
function Xs(e, t) {
  return e === t || e !== e && t !== t;
}
var ng = Object.prototype, rg = ng.hasOwnProperty;
function og(e, t, n) {
  var r = e[t];
  (!(rg.call(e, t) && Xs(r, n)) || n === void 0 && !(t in e)) && tg(e, t, n);
}
var ki = Math.max;
function ag(e, t, n) {
  return t = ki(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ki(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Hh(e, this, i);
  };
}
var sg = 9007199254740991;
function Qs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sg;
}
function lg(e) {
  return e != null && Qs(e.length) && !Pu(e);
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
function Ti(e) {
  return Hr(e) && Jr(e) == fg;
}
var Nu = Object.prototype, dg = Nu.hasOwnProperty, pg = Nu.propertyIsEnumerable, Js = Ti(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ti : function(e) {
  return Hr(e) && dg.call(e, "callee") && !pg.call(e, "callee");
};
function mg() {
  return !1;
}
var $u = typeof exports == "object" && exports && !exports.nodeType && exports, Si = $u && typeof module == "object" && module && !module.nodeType && module, hg = Si && Si.exports === $u, Ei = hg ? Dn.Buffer : void 0, gg = Ei ? Ei.isBuffer : void 0, bs = gg || mg, vg = "[object Arguments]", bg = "[object Array]", yg = "[object Boolean]", _g = "[object Date]", wg = "[object Error]", kg = "[object Function]", Tg = "[object Map]", Sg = "[object Number]", Eg = "[object Object]", Ag = "[object RegExp]", Cg = "[object Set]", Og = "[object String]", Lg = "[object WeakMap]", Ig = "[object ArrayBuffer]", xg = "[object DataView]", Rg = "[object Float32Array]", Pg = "[object Float64Array]", Ng = "[object Int8Array]", $g = "[object Int16Array]", Mg = "[object Int32Array]", Dg = "[object Uint8Array]", Fg = "[object Uint8ClampedArray]", zg = "[object Uint16Array]", Vg = "[object Uint32Array]", Ge = {};
Ge[Rg] = Ge[Pg] = Ge[Ng] = Ge[$g] = Ge[Mg] = Ge[Dg] = Ge[Fg] = Ge[zg] = Ge[Vg] = !0;
Ge[vg] = Ge[bg] = Ge[Ig] = Ge[yg] = Ge[xg] = Ge[_g] = Ge[wg] = Ge[kg] = Ge[Tg] = Ge[Sg] = Ge[Eg] = Ge[Ag] = Ge[Cg] = Ge[Og] = Ge[Lg] = !1;
function Bg(e) {
  return Hr(e) && Qs(e.length) && !!Ge[Jr(e)];
}
function jg(e) {
  return function(t) {
    return e(t);
  };
}
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports, fo = Mu && typeof module == "object" && module && !module.nodeType && module, Ug = fo && fo.exports === Mu, Ga = Ug && Lu.process, Ai = function() {
  try {
    var e = fo && fo.require && fo.require("util").types;
    return e || Ga && Ga.binding && Ga.binding("util");
  } catch {
  }
}(), Ci = Ai && Ai.isTypedArray, Du = Ci ? jg(Ci) : Bg, Hg = Object.prototype, Wg = Hg.hasOwnProperty;
function Gg(e, t) {
  var n = vn(e), r = !n && Js(e), o = !n && !r && bs(e), a = !n && !r && !o && Du(e), s = n || r || o || a, i = s ? ug(e.length, String) : [], l = i.length;
  for (var u in e)
    Wg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Zs(u, l))) && i.push(u);
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
function el(e, t) {
  if (vn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ta(e) ? !0 : Jg.test(e) || !Qg.test(e) || t != null && e in Object(t);
}
var To = Cr(Object, "create");
function ev() {
  this.__data__ = To ? To(null) : {}, this.size = 0;
}
function tv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nv = "__lodash_hash_undefined__", rv = Object.prototype, ov = rv.hasOwnProperty;
function av(e) {
  var t = this.__data__;
  if (To) {
    var n = t[e];
    return n === nv ? void 0 : n;
  }
  return ov.call(t, e) ? t[e] : void 0;
}
var sv = Object.prototype, lv = sv.hasOwnProperty;
function iv(e) {
  var t = this.__data__;
  return To ? t[e] !== void 0 : lv.call(t, e);
}
var cv = "__lodash_hash_undefined__";
function uv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = To && t === void 0 ? cv : t, this;
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
    if (Xs(e[n][0], t))
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
function tr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tr.prototype.clear = fv;
tr.prototype.delete = mv;
tr.prototype.get = hv;
tr.prototype.has = gv;
tr.prototype.set = vv;
var So = Cr(Dn, "Map");
function bv() {
  this.size = 0, this.__data__ = {
    hash: new kr(),
    map: new (So || tr)(),
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
function nr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nr.prototype.clear = bv;
nr.prototype.delete = _v;
nr.prototype.get = wv;
nr.prototype.has = kv;
nr.prototype.set = Tv;
var Sv = "Expected a function";
function tl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sv);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (tl.Cache || nr)(), n;
}
tl.Cache = nr;
var Ev = 500;
function Av(e) {
  var t = tl(e, function(r) {
    return n.size === Ev && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Cv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ov = /\\(\\)?/g, Lv = Av(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Cv, function(n, r, o, a) {
    t.push(o ? a.replace(Ov, "$1") : r || n);
  }), t;
});
function Iv(e) {
  return e == null ? "" : xu(e);
}
function Aa(e, t) {
  return vn(e) ? e : el(e, t) ? [e] : Lv(Iv(e));
}
function Lo(e) {
  if (typeof e == "string" || Ta(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function nl(e, t) {
  t = Aa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Lo(t[n++])];
  return n && n == r ? e : void 0;
}
function ur(e, t, n) {
  var r = e == null ? void 0 : nl(e, t);
  return r === void 0 ? n : r;
}
function zu(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Oi = Nn ? Nn.isConcatSpreadable : void 0;
function xv(e) {
  return vn(e) || Js(e) || !!(Oi && e && e[Oi]);
}
function Rv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = xv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? zu(o, i) : o[o.length] = i;
  }
  return o;
}
function Pv(e) {
  var t = e == null ? 0 : e.length;
  return t ? Rv(e) : [];
}
function Nv(e) {
  return Xh(ag(e, void 0, Pv), e + "");
}
function cr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return vn(e) ? e : [e];
}
function $v() {
  this.__data__ = new tr(), this.size = 0;
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
function Vv(e, t) {
  var n = this.__data__;
  if (n instanceof tr) {
    var r = n.__data__;
    if (!So || r.length < zv - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new nr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Yn(e) {
  var t = this.__data__ = new tr(e);
  this.size = t.size;
}
Yn.prototype.clear = $v;
Yn.prototype.delete = Mv;
Yn.prototype.get = Dv;
Yn.prototype.has = Fv;
Yn.prototype.set = Vv;
function Bv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function jv() {
  return [];
}
var Uv = Object.prototype, Hv = Uv.propertyIsEnumerable, Li = Object.getOwnPropertySymbols, Wv = Li ? function(e) {
  return e == null ? [] : (e = Object(e), Bv(Li(e), function(t) {
    return Hv.call(e, t);
  }));
} : jv;
function Gv(e, t, n) {
  var r = t(e);
  return vn(e) ? r : zu(r, n(e));
}
function Ii(e) {
  return Gv(e, Fu, Wv);
}
var ys = Cr(Dn, "DataView"), _s = Cr(Dn, "Promise"), ws = Cr(Dn, "Set"), xi = "[object Map]", Kv = "[object Object]", Ri = "[object Promise]", Pi = "[object Set]", Ni = "[object WeakMap]", $i = "[object DataView]", qv = Ar(ys), Yv = Ar(So), Zv = Ar(_s), Xv = Ar(ws), Qv = Ar(vs), ir = Jr;
(ys && ir(new ys(new ArrayBuffer(1))) != $i || So && ir(new So()) != xi || _s && ir(_s.resolve()) != Ri || ws && ir(new ws()) != Pi || vs && ir(new vs()) != Ni) && (ir = function(e) {
  var t = Jr(e), n = t == Kv ? e.constructor : void 0, r = n ? Ar(n) : "";
  if (r)
    switch (r) {
      case qv:
        return $i;
      case Yv:
        return xi;
      case Zv:
        return Ri;
      case Xv:
        return Pi;
      case Qv:
        return Ni;
    }
  return t;
});
var Mi = Dn.Uint8Array, Jv = "__lodash_hash_undefined__";
function e0(e) {
  return this.__data__.set(e, Jv), this;
}
function t0(e) {
  return this.__data__.has(e);
}
function ca(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new nr(); ++t < n; )
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
function Vu(e, t, n, r, o, a) {
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
      if (!n0(t, function(d, A) {
        if (!r0(v, A) && (h === d || o(h, d, n, r, a)))
          return v.push(A);
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
var i0 = 1, c0 = 2, u0 = "[object Boolean]", f0 = "[object Date]", d0 = "[object Error]", p0 = "[object Map]", m0 = "[object Number]", h0 = "[object RegExp]", g0 = "[object Set]", v0 = "[object String]", b0 = "[object Symbol]", y0 = "[object ArrayBuffer]", _0 = "[object DataView]", Di = Nn ? Nn.prototype : void 0, Ka = Di ? Di.valueOf : void 0;
function w0(e, t, n, r, o, a, s) {
  switch (n) {
    case _0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case y0:
      return !(e.byteLength != t.byteLength || !a(new Mi(e), new Mi(t)));
    case u0:
    case f0:
    case m0:
      return Xs(+e, +t);
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
      var f = Vu(i(e), i(t), r, o, a, s);
      return s.delete(e), f;
    case b0:
      if (Ka)
        return Ka.call(e) == Ka.call(t);
  }
  return !1;
}
var k0 = 1, T0 = Object.prototype, S0 = T0.hasOwnProperty;
function E0(e, t, n, r, o, a) {
  var s = n & k0, i = Ii(e), l = i.length, u = Ii(t), f = u.length;
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
    var d = e[p], A = t[p];
    if (r)
      var L = s ? r(A, d, p, t, e, a) : r(d, A, p, e, t, a);
    if (!(L === void 0 ? d === A || o(d, A, n, r, a) : L)) {
      g = !1;
      break;
    }
    S || (S = p == "constructor");
  }
  if (g && !S) {
    var E = e.constructor, _ = t.constructor;
    E != _ && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof _ == "function" && _ instanceof _) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var A0 = 1, Fi = "[object Arguments]", zi = "[object Array]", Uo = "[object Object]", C0 = Object.prototype, Vi = C0.hasOwnProperty;
function O0(e, t, n, r, o, a) {
  var s = vn(e), i = vn(t), l = s ? zi : ir(e), u = i ? zi : ir(t);
  l = l == Fi ? Uo : l, u = u == Fi ? Uo : u;
  var f = l == Uo, m = u == Uo, p = l == u;
  if (p && bs(e)) {
    if (!bs(t))
      return !1;
    s = !0, f = !1;
  }
  if (p && !f)
    return a || (a = new Yn()), s || Du(e) ? Vu(e, t, n, r, o, a) : w0(e, t, l, n, r, o, a);
  if (!(n & A0)) {
    var v = f && Vi.call(e, "__wrapped__"), h = m && Vi.call(t, "__wrapped__");
    if (v || h) {
      var g = v ? e.value() : e, S = h ? t.value() : t;
      return a || (a = new Yn()), o(g, S, n, r, a);
    }
  }
  return p ? (a || (a = new Yn()), E0(e, t, n, r, o, a)) : !1;
}
function Ca(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Hr(e) && !Hr(t) ? e !== e && t !== t : O0(e, t, n, r, Ca, o);
}
var L0 = 1, I0 = 2;
function x0(e, t, n, r) {
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
      var f = new Yn(), m;
      if (!(m === void 0 ? Ca(u, l, L0 | I0, r, f) : m))
        return !1;
    }
  }
  return !0;
}
function Bu(e) {
  return e === e && !pr(e);
}
function R0(e) {
  for (var t = Fu(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Bu(o)];
  }
  return t;
}
function ju(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function P0(e) {
  var t = R0(e);
  return t.length == 1 && t[0][2] ? ju(t[0][0], t[0][1]) : function(n) {
    return n === e || x0(n, e, t);
  };
}
function N0(e, t) {
  return e != null && t in Object(e);
}
function $0(e, t, n) {
  t = Aa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Lo(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Qs(o) && Zs(s, o) && (vn(e) || Js(e)));
}
function Uu(e, t) {
  return e != null && $0(e, t, N0);
}
var M0 = 1, D0 = 2;
function F0(e, t) {
  return el(e) && Bu(t) ? ju(Lo(e), t) : function(n) {
    var r = ur(n, e);
    return r === void 0 && r === t ? Uu(n, e) : Ca(t, r, M0 | D0);
  };
}
function z0(e) {
  return function(t) {
    return t?.[e];
  };
}
function V0(e) {
  return function(t) {
    return nl(t, e);
  };
}
function B0(e) {
  return el(e) ? z0(Lo(e)) : V0(e);
}
function j0(e) {
  return typeof e == "function" ? e : e == null ? Ru : typeof e == "object" ? vn(e) ? F0(e[0], e[1]) : P0(e) : B0(e);
}
var qa = function() {
  return Dn.Date.now();
}, U0 = "Expected a function", H0 = Math.max, W0 = Math.min;
function G0(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(U0);
  t = _i(t) || 0, pr(n) && (f = !!n.leading, m = "maxWait" in n, a = m ? H0(_i(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function v(T) {
    var O = r, G = o;
    return r = o = void 0, u = T, s = e.apply(G, O), s;
  }
  function h(T) {
    return u = T, i = setTimeout(d, t), f ? v(T) : s;
  }
  function g(T) {
    var O = T - l, G = T - u, K = t - O;
    return m ? W0(K, a - G) : K;
  }
  function S(T) {
    var O = T - l, G = T - u;
    return l === void 0 || O >= t || O < 0 || m && G >= a;
  }
  function d() {
    var T = qa();
    if (S(T))
      return A(T);
    i = setTimeout(d, g(T));
  }
  function A(T) {
    return i = void 0, p && r ? v(T) : (r = o = void 0, s);
  }
  function L() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function E() {
    return i === void 0 ? s : A(qa());
  }
  function _() {
    var T = qa(), O = S(T);
    if (r = arguments, o = this, l = T, O) {
      if (i === void 0)
        return h(l);
      if (m)
        return clearTimeout(i), i = setTimeout(d, t), v(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return _.cancel = L, _.flush = E, _;
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
function po(e, t) {
  return Ca(e, t);
}
function Zn(e) {
  return e == null;
}
function q0(e) {
  return e === void 0;
}
function Y0(e, t, n, r) {
  if (!pr(e))
    return e;
  t = Aa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Lo(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = pr(f) ? f : Zs(t[o + 1]) ? [] : {});
    }
    og(i, l, u), i = i[l];
  }
  return e;
}
function Z0(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = nl(e, s);
    n(i, s) && Y0(a, Aa(s, e), i);
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
const On = (e) => e === void 0, dr = (e) => typeof e == "boolean", Ne = (e) => typeof e == "number", hn = (e) => typeof Element > "u" ? !1 : e instanceof Element, J0 = (e) => Mt(e) ? !Number.isNaN(Number(e)) : !1;
var eb = Object.defineProperty, tb = Object.defineProperties, nb = Object.getOwnPropertyDescriptors, Bi = Object.getOwnPropertySymbols, rb = Object.prototype.hasOwnProperty, ob = Object.prototype.propertyIsEnumerable, ji = (e, t, n) => t in e ? eb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ab = (e, t) => {
  for (var n in t || (t = {}))
    rb.call(t, n) && ji(e, n, t[n]);
  if (Bi)
    for (var n of Bi(t))
      ob.call(t, n) && ji(e, n, t[n]);
  return e;
}, sb = (e, t) => tb(e, nb(t));
function lb(e, t) {
  var n;
  const r = fr();
  return Hc(() => {
    r.value = e();
  }, sb(ab({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Is(r);
}
var Ui;
const mt = typeof window < "u", ib = (e) => typeof e == "string", Hu = () => {
}, ks = mt && ((Ui = window?.navigator) == null ? void 0 : Ui.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rl(e) {
  return typeof e == "function" ? e() : c(e);
}
function cb(e) {
  return e;
}
function Io(e) {
  return nd() ? (rd(e), !0) : !1;
}
function ub(e, t = !0) {
  Bt() ? ut(e) : t ? e() : lt(e);
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
    }, rl(t));
  }
  return r && (o.value = !0, mt && l()), Io(i), {
    isPending: Is(o),
    start: l,
    stop: i
  };
}
function Kn(e) {
  var t;
  const n = rl(e);
  return (t = n?.$el) != null ? t : n;
}
const Oa = mt ? window : void 0;
function gn(...e) {
  let t, n, r, o;
  if (ib(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Oa) : [t, n, r, o] = e, !t)
    return Hu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, m, p, v) => (f.addEventListener(m, p, v), () => f.removeEventListener(m, p, v)), l = ye(() => [Kn(t), rl(o)], ([f, m]) => {
    s(), f && a.push(...n.flatMap((p) => r.map((v) => i(f, p, v, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Io(u), u;
}
let Hi = !1;
function fb(e, t, n = {}) {
  const { window: r = Oa, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  ks && !Hi && (Hi = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", Hu)));
  let i = !0;
  const l = (p) => o.some((v) => {
    if (typeof v == "string")
      return Array.from(r.document.querySelectorAll(v)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Kn(v);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), f = [
    gn(r, "click", (p) => {
      const v = Kn(e);
      if (!(!v || v === p.target || p.composedPath().includes(v))) {
        if (p.detail === 0 && (i = !l(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: a }),
    gn(r, "pointerdown", (p) => {
      const v = Kn(e);
      v && (i = !p.composedPath().includes(v) && !l(p));
    }, { passive: !0 }),
    s && gn(r, "blur", (p) => {
      var v;
      const h = Kn(e);
      ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(p);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function Gu(e, t = !1) {
  const n = j(), r = () => n.value = !!e();
  return r(), ub(r, t), n;
}
const Wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gi = "__vueuse_ssr_handlers__";
Wi[Gi] = Wi[Gi] || {};
var Ki = Object.getOwnPropertySymbols, db = Object.prototype.hasOwnProperty, pb = Object.prototype.propertyIsEnumerable, mb = (e, t) => {
  var n = {};
  for (var r in e)
    db.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ki)
    for (var r of Ki(e))
      t.indexOf(r) < 0 && pb.call(e, r) && (n[r] = e[r]);
  return n;
};
function An(e, t, n = {}) {
  const r = n, { window: o = Oa } = r, a = mb(r, ["window"]);
  let s;
  const i = Gu(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ye(() => Kn(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return Io(f), {
    isSupported: i,
    stop: f
  };
}
var qi = Object.getOwnPropertySymbols, hb = Object.prototype.hasOwnProperty, gb = Object.prototype.propertyIsEnumerable, vb = (e, t) => {
  var n = {};
  for (var r in e)
    hb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qi)
    for (var r of qi(e))
      t.indexOf(r) < 0 && gb.call(e, r) && (n[r] = e[r]);
  return n;
};
function bb(e, t, n = {}) {
  const r = n, { window: o = Oa } = r, a = vb(r, ["window"]);
  let s;
  const i = Gu(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ye(() => Kn(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return Io(f), {
    isSupported: i,
    stop: f
  };
}
var Yi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yi || (Yi = {}));
var yb = Object.defineProperty, Zi = Object.getOwnPropertySymbols, _b = Object.prototype.hasOwnProperty, wb = Object.prototype.propertyIsEnumerable, Xi = (e, t, n) => t in e ? yb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kb = (e, t) => {
  for (var n in t || (t = {}))
    _b.call(t, n) && Xi(e, n, t[n]);
  if (Zi)
    for (var n of Zi(t))
      wb.call(t, n) && Xi(e, n, t[n]);
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
function ol(e, t) {
  throw new Sb(`[${e}] ${t}`);
}
const Qi = {
  current: 0
}, Ji = j(0), Ku = 2e3, ec = Symbol("elZIndexContextKey"), qu = Symbol("zIndexContextKey"), Yu = (e) => {
  const t = Bt() ? De(ec, Qi) : Qi, n = e || (Bt() ? De(qu, void 0) : void 0), r = I(() => {
    const s = c(n);
    return Ne(s) ? s : Ku;
  }), o = I(() => r.value + Ji.value), a = () => (t.current++, Ji.value = t.current, o.value);
  return !mt && De(ec), {
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
const Ab = (e) => (t, n) => Cb(t, n, c(e)), Cb = (e, t, n) => ur(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Ob = (e) => {
  const t = I(() => c(e).name), n = go(e) ? e : j(e);
  return {
    lang: t,
    locale: n,
    t: Ab(e)
  };
}, Zu = Symbol("localeContextKey"), al = (e) => {
  const t = e || De(Zu, j());
  return Ob(I(() => t.value || Eb));
}, Xu = "__epPropKey", he = (e) => e, Lb = (e) => Xt(e) && !!e[Xu], La = (e, t) => {
  if (!Xt(e) || Lb(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, m = [];
      if (n && (m = Array.from(n), mi(e, "default") && m.push(o), f || (f = m.includes(u))), s && (f || (f = s(u))), !f && m.length > 0) {
        const p = [...new Set(m)].map((v) => JSON.stringify(v)).join(", ");
        od(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Xu]: !0
  };
  return mi(e, "default") && (l.default = o), l;
}, Ke = (e) => ua(Object.entries(e).map(([t, n]) => [
  t,
  La(n, t)
])), sl = ["", "default", "small", "large"], Ia = La({
  type: String,
  values: sl,
  required: !1
}), Qu = Symbol("size"), Ib = () => {
  const e = De(Qu, {});
  return I(() => c(e.size) || "");
}, Ju = Symbol("emptyValuesContextKey"), xb = ["", void 0, null], Rb = void 0, ef = Ke({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => et(e) ? !e() : !e
  }
}), Pb = (e, t) => {
  const n = Bt() ? De(Ju, j({})) : j({}), r = I(() => e.emptyValues || n.value.emptyValues || xb), o = I(() => et(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : et(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Rb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, tc = (e) => Object.keys(e), fa = j();
function tf(e, t = void 0) {
  return Bt() ? De(Cu, fa) : fa;
}
function nf(e, t) {
  const n = tf(), r = ht(e, I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Jo;
  })), o = al(I(() => {
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
  const o = !!Bt(), a = o ? tf() : void 0, s = (r = void 0) != null ? r : o ? Pn : void 0;
  if (!s)
    return;
  const i = I(() => {
    const l = c(e);
    return a?.value ? Nb(a.value, l) : l;
  });
  return s(Cu, i), s(Zu, I(() => i.value.locale)), s(Ou, I(() => i.value.namespace)), s(qu, I(() => i.value.zIndex)), s(Qu, {
    size: I(() => i.value.size || "")
  }), s(Ju, I(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !fa.value) && (fa.value = i.value), i;
}, Nb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...tc(e), ...tc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, kt = "update:modelValue", Jn = "change", Xn = "input";
var Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Wr(e, t = "px") {
  if (!e)
    return "";
  if (Ne(e) || J0(e))
    return `${e}${t}`;
  if (Mt(e))
    return e;
}
function $b(e, t) {
  if (!mt)
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
}, e), af = (e) => (e.install = ko, e), Mb = Ke({
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
    const t = e, n = ht("icon"), r = I(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: On(o) ? void 0 : Wr(o),
        "--color": a
      };
    });
    return (o, a) => (x(), W("i", Vr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      ve(o.$slots, "default")
    ], 16));
  }
});
var zb = /* @__PURE__ */ Xe(Fb, [["__file", "icon.vue"]]);
const pt = bn(zb);
/*! Element Plus Icons Vue v2.3.1 */
var Vb = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), sf = Vb, Bb = /* @__PURE__ */ re({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), jb = Bb, Ub = /* @__PURE__ */ re({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (x(), W("svg", {
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
}), Hb = Ub, Wb = /* @__PURE__ */ re({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Gb = Wb, Kb = /* @__PURE__ */ re({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (x(), W("svg", {
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
}), ll = Kb, qb = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), da = qb, Yb = /* @__PURE__ */ re({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (x(), W("svg", {
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
}), Zb = Yb, Xb = /* @__PURE__ */ re({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Qb = Xb, Jb = /* @__PURE__ */ re({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), lf = Jb, ey = /* @__PURE__ */ re({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), ty = ey, ny = /* @__PURE__ */ re({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), ry = ny, oy = /* @__PURE__ */ re({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ay = oy, sy = /* @__PURE__ */ re({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), ly = sy, iy = /* @__PURE__ */ re({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (x(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
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
  error: ll
}, uf = () => mt && /firefox/i.test(window.navigator.userAgent);
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
function nc(e, t = 1, n) {
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
  [kt]: (e) => Mt(e),
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
}, by = ["class", "style"], yy = /^on[A-Z]/, _y = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = I(() => (n?.value || []).concat(by)), o = Bt();
  return o ? I(() => {
    var a;
    return ua(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && yy.test(s))));
  }) : I(() => ({}));
}, il = Symbol("formContextKey"), ma = Symbol("formItemContextKey"), rc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, wy = Symbol("elIdInjection"), df = () => Bt() ? De(wy, rc) : rc, xa = (e) => {
  const t = df(), n = Ys();
  return lb(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ra = () => {
  const e = De(il, void 0), t = De(ma, void 0);
  return {
    form: e,
    formItem: t
  };
}, cl = (e, {
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
    a = ye([Hn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : xa().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), va(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, pf = (e) => {
  const t = Bt();
  return I(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, xo = (e, t = {}) => {
  const n = j(void 0), r = t.prop ? n : pf("size"), o = t.global ? n : Ib(), a = t.form ? { size: void 0 } : De(il, void 0), s = t.formItem ? { size: void 0 } : De(ma, void 0);
  return I(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, ul = (e) => {
  const t = pf("disabled"), n = De(il, void 0);
  return I(() => t.value || c(e) || n?.disabled || !1);
};
function mf(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Bt(), { emit: s } = a, i = fr(), l = j(!1), u = (p) => {
    et(t) && t(p) || l.value || (l.value = !0, s("focus", p), n?.());
  }, f = (p) => {
    var v;
    et(r) && r(p) || p.relatedTarget && ((v = i.value) != null && v.contains(p.relatedTarget)) || (l.value = !1, s("blur", p), o?.());
  }, m = () => {
    var p, v;
    (p = i.value) != null && p.contains(document.activeElement) && i.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return ye(i, (p) => {
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
}), Ay = /* @__PURE__ */ re({
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
        [h.bm("suffix", "password-clear")]: ce.value && Q.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = I(() => [
      h.e("wrapper"),
      h.is("focus", G.value)
    ]), { form: u, formItem: f } = Ra(), { inputId: m } = cl(r, {
      formItemContext: f
    }), p = xo(), v = ul(), h = ht("input"), g = ht("textarea"), S = fr(), d = fr(), A = j(!1), L = j(!1), E = j(), _ = fr(r.inputStyle), T = I(() => S.value || d.value), { wrapperRef: O, isFocused: G, handleFocus: K, handleBlur: te } = mf(T, {
      beforeFocus() {
        return v.value;
      },
      afterBlur() {
        var k;
        r.validateEvent && ((k = f?.validate) == null || k.call(f, "blur").catch((D) => void 0));
      }
    }), pe = I(() => {
      var k;
      return (k = u?.statusIcon) != null ? k : !1;
    }), ne = I(() => f?.validateState || ""), be = I(() => ne.value && cf[ne.value]), me = I(() => L.value ? ly : Zb), N = I(() => [
      o.style
    ]), R = I(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), V = I(() => Zn(r.modelValue) ? "" : String(r.modelValue)), ce = I(() => r.clearable && !v.value && !r.readonly && !!V.value && (G.value || A.value)), Q = I(() => r.showPassword && !v.value && !!V.value && (!!V.value || G.value)), we = I(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), Y = I(() => V.value.length), Ve = I(() => !!we.value && Y.value > Number(r.maxlength)), Oe = I(() => !!s.suffix || !!r.suffixIcon || ce.value || r.showPassword || we.value || !!ne.value && pe.value), [Te, qe] = Ty(S);
    An(d, (k) => {
      if (ue(), !we.value || r.resize !== "both")
        return;
      const D = k[0], { width: ge } = D.contentRect;
      E.value = {
        right: `calc(100% - ${ge + 15 + 6}px)`
      };
    });
    const Se = () => {
      const { type: k, autosize: D } = r;
      if (!(!mt || k !== "textarea" || !d.value))
        if (D) {
          const ge = Xt(D) ? D.minRows : void 0, Ae = Xt(D) ? D.maxRows : void 0, Ye = nc(d.value, ge, Ae);
          _.value = {
            overflowY: "hidden",
            ...Ye
          }, lt(() => {
            d.value.offsetHeight, _.value = Ye;
          });
        } else
          _.value = {
            minHeight: nc(d.value).minHeight
          };
    }, ue = ((k) => {
      let D = !1;
      return () => {
        var ge;
        if (D || !r.autosize)
          return;
        ((ge = d.value) == null ? void 0 : ge.offsetParent) === null || (k(), D = !0);
      };
    })(Se), nt = () => {
      const k = T.value, D = r.formatter ? r.formatter(V.value) : V.value;
      !k || k.value === D || (k.value = D);
    }, ft = async (k) => {
      Te();
      let { value: D } = k.target;
      if (r.formatter && r.parser && (D = r.parser(D)), !St.value) {
        if (D === V.value) {
          nt();
          return;
        }
        n(kt, D), n(Xn, D), await lt(), nt(), qe();
      }
    }, Ue = (k) => {
      let { value: D } = k.target;
      r.formatter && r.parser && (D = r.parser(D)), n(Jn, D);
    }, {
      isComposing: St,
      handleCompositionStart: at,
      handleCompositionUpdate: vt,
      handleCompositionEnd: st
    } = hf({ emit: n, afterComposition: ft }), $e = () => {
      Te(), L.value = !L.value, setTimeout(qe);
    }, bt = () => {
      var k;
      return (k = T.value) == null ? void 0 : k.focus();
    }, w = () => {
      var k;
      return (k = T.value) == null ? void 0 : k.blur();
    }, C = (k) => {
      A.value = !1, n("mouseleave", k);
    }, F = (k) => {
      A.value = !0, n("mouseenter", k);
    }, Z = (k) => {
      n("keydown", k);
    }, Ee = () => {
      var k;
      (k = T.value) == null || k.select();
    }, fe = () => {
      n(kt, ""), n(Jn, ""), n("clear"), n(Xn, "");
    };
    return ye(() => r.modelValue, () => {
      var k;
      lt(() => Se()), r.validateEvent && ((k = f?.validate) == null || k.call(f, "change").catch((D) => void 0));
    }), ye(V, () => nt()), ye(() => r.type, async () => {
      await lt(), nt(), Se();
    }), ut(() => {
      !r.formatter && r.parser, nt(), lt(Se);
    }), t({
      input: S,
      textarea: d,
      ref: T,
      textareaStyle: R,
      autosize: Hn(r, "autosize"),
      isComposing: St,
      focus: bt,
      blur: w,
      select: Ee,
      clear: fe,
      resizeTextarea: Se
    }), (k, D) => (x(), W("div", {
      class: U([
        c(i),
        {
          [c(h).bm("group", "append")]: k.$slots.append,
          [c(h).bm("group", "prepend")]: k.$slots.prepend
        }
      ]),
      style: Ct(c(N)),
      onMouseenter: F,
      onMouseleave: C
    }, [
      ee(" input "),
      k.type !== "textarea" ? (x(), W($t, { key: 0 }, [
        ee(" prepend slot "),
        k.$slots.prepend ? (x(), W("div", {
          key: 0,
          class: U(c(h).be("group", "prepend"))
        }, [
          ve(k.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        y("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: U(c(l))
        }, [
          ee(" prefix slot "),
          k.$slots.prefix || k.prefixIcon ? (x(), W("span", {
            key: 0,
            class: U(c(h).e("prefix"))
          }, [
            y("span", {
              class: U(c(h).e("prefix-inner"))
            }, [
              ve(k.$slots, "prefix"),
              k.prefixIcon ? (x(), ie(c(pt), {
                key: 0,
                class: U(c(h).e("icon"))
              }, {
                default: ae(() => [
                  (x(), ie(zt(k.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0),
          y("input", Vr({
            id: c(m),
            ref_key: "input",
            ref: S,
            class: c(h).e("inner")
          }, c(a), {
            minlength: k.minlength,
            maxlength: k.maxlength,
            type: k.showPassword ? L.value ? "text" : "password" : k.type,
            disabled: c(v),
            readonly: k.readonly,
            autocomplete: k.autocomplete,
            tabindex: k.tabindex,
            "aria-label": k.ariaLabel,
            placeholder: k.placeholder,
            style: k.inputStyle,
            form: k.form,
            autofocus: k.autofocus,
            role: k.containerRole,
            onCompositionstart: c(at),
            onCompositionupdate: c(vt),
            onCompositionend: c(st),
            onInput: ft,
            onChange: Ue,
            onKeydown: Z
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(Oe) ? (x(), W("span", {
            key: 1,
            class: U(c(h).e("suffix"))
          }, [
            y("span", {
              class: U(c(h).e("suffix-inner"))
            }, [
              !c(ce) || !c(Q) || !c(we) ? (x(), W($t, { key: 0 }, [
                ve(k.$slots, "suffix"),
                k.suffixIcon ? (x(), ie(c(pt), {
                  key: 0,
                  class: U(c(h).e("icon"))
                }, {
                  default: ae(() => [
                    (x(), ie(zt(k.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              c(ce) ? (x(), ie(c(pt), {
                key: 1,
                class: U([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: Qe(c(ko), ["prevent"]),
                onClick: fe
              }, {
                default: ae(() => [
                  $(c(ll))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(Q) ? (x(), ie(c(pt), {
                key: 2,
                class: U([c(h).e("icon"), c(h).e("password")]),
                onClick: $e
              }, {
                default: ae(() => [
                  (x(), ie(zt(c(me))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(we) ? (x(), W("span", {
                key: 3,
                class: U(c(h).e("count"))
              }, [
                y("span", {
                  class: U(c(h).e("count-inner"))
                }, B(c(Y)) + " / " + B(k.maxlength), 3)
              ], 2)) : ee("v-if", !0),
              c(ne) && c(be) && c(pe) ? (x(), ie(c(pt), {
                key: 4,
                class: U([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(ne) === "validating")
                ])
              }, {
                default: ae(() => [
                  (x(), ie(zt(c(be))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        k.$slots.append ? (x(), W("div", {
          key: 1,
          class: U(c(h).be("group", "append"))
        }, [
          ve(k.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (x(), W($t, { key: 1 }, [
        ee(" textarea "),
        y("textarea", Vr({
          id: c(m),
          ref_key: "textarea",
          ref: d,
          class: [c(g).e("inner"), c(h).is("focus", c(G))]
        }, c(a), {
          minlength: k.minlength,
          maxlength: k.maxlength,
          tabindex: k.tabindex,
          disabled: c(v),
          readonly: k.readonly,
          autocomplete: k.autocomplete,
          style: c(R),
          "aria-label": k.ariaLabel,
          placeholder: k.placeholder,
          form: k.form,
          autofocus: k.autofocus,
          rows: k.rows,
          role: k.containerRole,
          onCompositionstart: c(at),
          onCompositionupdate: c(vt),
          onCompositionend: c(st),
          onInput: ft,
          onFocus: c(K),
          onBlur: c(te),
          onChange: Ue,
          onKeydown: Z
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(we) ? (x(), W("span", {
          key: 0,
          style: Ct(E.value),
          class: U(c(h).e("count"))
        }, B(c(Y)) + " / " + B(k.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Cy = /* @__PURE__ */ Xe(Ay, [["__file", "input.vue"]]);
const Oy = bn(Cy), Rr = 4, Ly = {
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
}), fl = Symbol("scrollbarContextKey"), xy = Ke({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ry = "Thumb", Py = /* @__PURE__ */ re({
  __name: "thumb",
  props: xy,
  setup(e) {
    const t = e, n = De(fl), r = ht("scrollbar");
    n || ol(Ry, "can not inject scrollbar context");
    const o = j(), a = j(), s = j({}), i = j(!1);
    let l = !1, u = !1, f = mt ? document.onselectstart : null;
    const m = I(() => Ly[t.vertical ? "vertical" : "horizontal"]), p = I(() => Iy({
      size: t.size,
      move: t.move,
      bar: m.value
    })), v = I(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), h = (T) => {
      var O;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), S(T);
      const G = T.currentTarget;
      G && (s.value[m.value.axis] = G[m.value.offset] - (T[m.value.client] - G.getBoundingClientRect()[m.value.direction]));
    }, g = (T) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(T.target.getBoundingClientRect()[m.value.direction] - T[m.value.client]), G = a.value[m.value.offset] / 2, K = (O - G) * 100 * v.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = K * n.wrapElement[m.value.scrollSize] / 100;
    }, S = (T) => {
      T.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", A), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (T) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[m.value.axis];
      if (!O)
        return;
      const G = (o.value.getBoundingClientRect()[m.value.direction] - T[m.value.client]) * -1, K = a.value[m.value.offset] - O, te = (G - K) * 100 * v.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = te * n.wrapElement[m.value.scrollSize] / 100;
    }, A = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", A), _(), u && (i.value = !1);
    }, L = () => {
      u = !1, i.value = !!t.size;
    }, E = () => {
      u = !0, i.value = l;
    };
    Mn(() => {
      _(), document.removeEventListener("mouseup", A);
    });
    const _ = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return gn(Hn(n, "scrollbarElement"), "mousemove", L), gn(Hn(n, "scrollbarElement"), "mouseleave", E), (T, O) => (x(), ie(Qr, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: ae(() => [
        Tt(y("div", {
          ref_key: "instance",
          ref: o,
          class: U([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: g
        }, [
          y("div", {
            ref_key: "thumb",
            ref: a,
            class: U(c(r).e("thumb")),
            style: Ct(c(p)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [Qn, T.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var oc = /* @__PURE__ */ Xe(Py, [["__file", "thumb.vue"]]);
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
    const n = e, r = De(fl), o = j(0), a = j(0), s = j(""), i = j(""), l = j(1), u = j(1);
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
        const v = p.offsetHeight - Rr, h = p.offsetWidth - Rr, g = v ** 2 / p.scrollHeight, S = h ** 2 / p.scrollWidth, d = Math.max(g, n.minSize), A = Math.max(S, n.minSize);
        l.value = g / (v - g) / (d / (v - d)), u.value = S / (h - S) / (A / (h - A)), i.value = d + Rr < v ? `${d}px` : "", s.value = A + Rr < h ? `${A}px` : "";
      }
    }), (p, v) => (x(), W($t, null, [
      $(oc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      $(oc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var My = /* @__PURE__ */ Xe($y, [["__file", "bar.vue"]]);
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
}, zy = "ElScrollbar", Vy = re({
  name: zy
}), By = /* @__PURE__ */ re({
  ...Vy,
  props: Dy,
  emits: Fy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = ht("scrollbar");
    let a, s, i = 0, l = 0;
    const u = j(), f = j(), m = j(), p = j(), v = I(() => {
      const _ = {};
      return r.height && (_.height = Wr(r.height)), r.maxHeight && (_.maxHeight = Wr(r.maxHeight)), [r.wrapStyle, _];
    }), h = I(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = I(() => [o.e("view"), r.viewClass]), S = () => {
      var _;
      f.value && ((_ = p.value) == null || _.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(_, T) {
      Xt(_) ? f.value.scrollTo(_) : Ne(_) && Ne(T) && f.value.scrollTo(_, T);
    }
    const A = (_) => {
      Ne(_) && (f.value.scrollTop = _);
    }, L = (_) => {
      Ne(_) && (f.value.scrollLeft = _);
    }, E = () => {
      var _;
      (_ = p.value) == null || _.update();
    };
    return ye(() => r.noresize, (_) => {
      _ ? (a?.(), s?.()) : ({ stop: a } = An(m, E), s = gn("resize", E));
    }, { immediate: !0 }), ye(() => [r.maxHeight, r.height], () => {
      r.native || lt(() => {
        var _;
        E(), f.value && ((_ = p.value) == null || _.handleScroll(f.value));
      });
    }), Pn(fl, _r({
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
      setScrollTop: A,
      setScrollLeft: L,
      handleScroll: S
    }), (_, T) => (x(), W("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: U(c(o).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: f,
        class: U(c(h)),
        style: Ct(c(v)),
        tabindex: _.tabindex,
        onScroll: S
      }, [
        (x(), ie(zt(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: m,
          class: U(c(g)),
          style: Ct(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: ae(() => [
            ve(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      _.native ? ee("v-if", !0) : (x(), ie(My, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var jy = /* @__PURE__ */ Xe(By, [["__file", "scrollbar.vue"]]);
const Uy = bn(jy), dl = Symbol("popper"), gf = Symbol("popperContent"), Hy = [
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
    return t(l), Pn(dl, l), (u, f) => ve(u.$slots, "default");
  }
});
var Ky = /* @__PURE__ */ Xe(Gy, [["__file", "popper.vue"]]);
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
    const n = e, r = ht("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = De(gf, void 0);
    return ye(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Mn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (x(), W("span", {
      ref_key: "arrowRef",
      ref: a,
      class: U(c(r).e("arrow")),
      style: Ct(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Zy = /* @__PURE__ */ Xe(Yy, [["__file", "arrow.vue"]]);
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
}, Jy = "ElOnlyChild", e1 = re({
  name: Jy,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = De(_f), a = Qy((r = o?.setForwardRef) != null ? r : ko);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = wf(i);
      return l ? Tt(id(l, n), [[a]]) : null;
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
          return ac(n);
        case $t:
          return wf(n.children);
        default:
          return n;
      }
    return ac(n);
  }
  return null;
}
function ac(e) {
  const t = ht("only-child");
  return $("span", {
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
    const n = e, { role: r, triggerRef: o } = De(dl, void 0);
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
      ye(() => n.virtualRef, (m) => {
        m && (o.value = Kn(m));
      }, {
        immediate: !0
      }), ye(o, (m, p) => {
        u?.(), u = void 0, hn(m) && (f.forEach((v) => {
          var h;
          const g = n[v];
          g && (m.addEventListener(v.slice(2).toLowerCase(), g), (h = p?.removeEventListener) == null || h.call(p, v.slice(2).toLowerCase(), g));
        }), Ts(m) && (u = ye([a, s, i, l], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            Zn(v[g]) ? m.removeAttribute(h) : m.setAttribute(h, v[g]);
          });
        }, { immediate: !0 }))), hn(p) && Ts(p) && [
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
    }), (m, p) => m.virtualTriggering ? ee("v-if", !0) : (x(), ie(c(e1), Vr({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: ae(() => [
        ve(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var r1 = /* @__PURE__ */ Xe(n1, [["__file", "trigger.vue"]]);
const Ya = "focus-trap.focus-after-trapped", Za = "focus-trap.focus-after-released", o1 = "focus-trap.focusout-prevented", sc = {
  cancelable: !0,
  bubbles: !1
}, a1 = {
  cancelable: !0,
  bubbles: !1
}, lc = "focusAfterTrapped", ic = "focusAfterReleased", s1 = Symbol("elFocusTrap"), pl = j(), Pa = j(0), ml = j(0);
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
}, cc = (e, t) => {
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
  const t = kf(e), n = cc(t, e), r = cc(t.reverse(), e);
  return [n, r];
}, c1 = (e) => e instanceof HTMLInputElement && "select" in e, jn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    hn(e) && !Ts(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), ml.value = window.performance.now(), e !== n && c1(e) && t && e.select(), hn(e) && r && e.removeAttribute("tabindex");
  }
};
function uc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const u1 = () => {
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
    if (jn(r, t), document.activeElement !== n)
      return;
}, fc = u1(), d1 = () => Pa.value > ml.value, Wo = () => {
  pl.value = "pointer", Pa.value = window.performance.now();
}, dc = () => {
  pl.value = "keyboard", Pa.value = window.performance.now();
}, p1 = () => (ut(() => {
  Ho === 0 && (document.addEventListener("mousedown", Wo), document.addEventListener("touchstart", Wo), document.addEventListener("keydown", dc)), Ho++;
}), Mn(() => {
  Ho--, Ho <= 0 && (document.removeEventListener("mousedown", Wo), document.removeEventListener("touchstart", Wo), document.removeEventListener("keydown", dc));
}), {
  focusReason: pl,
  lastUserFocusTimestamp: Pa,
  lastAutomatedFocusTimestamp: ml
}), Go = (e) => new CustomEvent(o1, {
  ...a1,
  detail: e
}), xn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Fr = [];
const pc = (e) => {
  e.code === xn.esc && Fr.forEach((t) => t(e));
}, m1 = (e) => {
  ut(() => {
    Fr.length === 0 && document.addEventListener("keydown", pc), mt && Fr.push(e);
  }), Mn(() => {
    Fr = Fr.filter((t) => t !== e), Fr.length === 0 && mt && document.removeEventListener("keydown", pc);
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
    lc,
    ic,
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
      const { code: g, altKey: S, ctrlKey: d, metaKey: A, currentTarget: L, shiftKey: E } = h, { loop: _ } = e, T = g === xn.tab && !S && !d && !A, O = document.activeElement;
      if (T && O) {
        const G = L, [K, te] = i1(G);
        if (K && te) {
          if (!E && O === te) {
            const ne = Go({
              focusReason: a.value
            });
            t("focusout-prevented", ne), ne.defaultPrevented || (h.preventDefault(), _ && jn(K, !0));
          } else if (E && [K, G].includes(O)) {
            const ne = Go({
              focusReason: a.value
            });
            t("focusout-prevented", ne), ne.defaultPrevented || (h.preventDefault(), _ && jn(te, !0));
          }
        } else if (O === G) {
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
    }), ye(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), ye([n], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", f), h.addEventListener("focusout", m)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", f), g.removeEventListener("focusout", m));
    });
    const l = (h) => {
      t(lc, h);
    }, u = (h) => t(ic, h), f = (h) => {
      const g = c(n);
      if (!g)
        return;
      const S = h.target, d = h.relatedTarget, A = S && g.contains(S);
      e.trapped || d && g.contains(d) || (r = d), A && t("focusin", h), !s.paused && e.trapped && (A ? o = S : jn(o, !0));
    }, m = (h) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const S = h.relatedTarget;
          !Zn(S) && !g.contains(S) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Go({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || jn(o, !0);
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
        fc.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const d = new Event(Ya, sc);
          h.addEventListener(Ya, l), h.dispatchEvent(d), d.defaultPrevented || lt(() => {
            let A = e.focusStartEl;
            Mt(A) || (jn(A), document.activeElement !== A && (A = "first")), A === "first" && f1(kf(h), !0), (document.activeElement === g || A === "container") && jn(h);
          });
        }
      }
    }
    function v() {
      const h = c(n);
      if (h) {
        h.removeEventListener(Ya, l);
        const g = new CustomEvent(Za, {
          ...sc,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(Za, u), h.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !d1() || h.contains(document.activeElement)) && jn(r ?? document.body), h.removeEventListener(Za, u), fc.remove(s);
      }
    }
    return ut(() => {
      e.trapped && p(), ye(() => e.trapped, (h) => {
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
  return ve(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var v1 = /* @__PURE__ */ Xe(h1, [["render", g1], ["__file", "focus-trap.vue"]]), Wt = "top", rn = "bottom", on = "right", Gt = "left", hl = "auto", Ro = [Wt, rn, on, Gt], Gr = "start", Eo = "end", b1 = "clippingParents", Tf = "viewport", oo = "popper", y1 = "reference", mc = Ro.reduce(function(e, t) {
  return e.concat([t + "-" + Gr, t + "-" + Eo]);
}, []), Na = [].concat(Ro, [hl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Gr, t + "-" + Eo]);
}, []), _1 = "beforeRead", w1 = "read", k1 = "afterRead", T1 = "beforeMain", S1 = "main", E1 = "afterMain", A1 = "beforeWrite", C1 = "write", O1 = "afterWrite", L1 = [_1, w1, k1, T1, S1, E1, A1, C1, O1];
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
function nn(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function I1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !nn(a) || !$n(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function x1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !nn(o) || !$n(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Sf = { name: "applyStyles", enabled: !0, phase: "write", fn: I1, effect: x1, requires: ["computeStyles"] };
function Rn(e) {
  return e.split("-")[0];
}
var yr = Math.max, ha = Math.min, Kr = Math.round;
function Ss() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ef() {
  return !/^((?!chrome|android).)*safari/i.test(Ss());
}
function qr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && nn(e) && (o = e.offsetWidth > 0 && Kr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Kr(r.height) / e.offsetHeight || 1);
  var s = Tr(e) ? Qt(e) : window, i = s.visualViewport, l = !Ef() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, f = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, p = r.height / a;
  return { width: m, height: p, top: f, right: u + m, bottom: f + p, left: u, x: u, y: f };
}
function vl(e) {
  var t = qr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Af(e, t) {
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
function er(e) {
  return Qt(e).getComputedStyle(e);
}
function R1(e) {
  return ["table", "td", "th"].indexOf($n(e)) >= 0;
}
function gr(e) {
  return ((Tr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function $a(e) {
  return $n(e) === "html" ? e : e.assignedSlot || e.parentNode || (gl(e) ? e.host : null) || gr(e);
}
function hc(e) {
  return !nn(e) || er(e).position === "fixed" ? null : e.offsetParent;
}
function P1(e) {
  var t = /firefox/i.test(Ss()), n = /Trident/i.test(Ss());
  if (n && nn(e)) {
    var r = er(e);
    if (r.position === "fixed") return null;
  }
  var o = $a(e);
  for (gl(o) && (o = o.host); nn(o) && ["html", "body"].indexOf($n(o)) < 0; ) {
    var a = er(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Po(e) {
  for (var t = Qt(e), n = hc(e); n && R1(n) && er(n).position === "static"; ) n = hc(n);
  return n && ($n(n) === "html" || $n(n) === "body" && er(n).position === "static") ? t : n || P1(e) || t;
}
function bl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mo(e, t, n) {
  return yr(e, ha(t, n));
}
function N1(e, t, n) {
  var r = mo(e, t, n);
  return r > n ? n : r;
}
function Cf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Of(e) {
  return Object.assign({}, Cf(), e);
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
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Rn(n.placement), l = bl(i), u = [Gt, on].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = $1(o.padding, n), p = vl(a), v = l === "y" ? Wt : Gt, h = l === "y" ? rn : on, g = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], S = s[l] - n.rects.reference[l], d = Po(a), A = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = g / 2 - S / 2, E = m[v], _ = A - p[f] - m[h], T = A / 2 - p[f] / 2 + L, O = mo(E, T, _), G = l;
    n.modifiersData[r] = (t = {}, t[G] = O, t.centerOffset = O - T, t);
  }
}
function D1(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Af(t.elements.popper, o) && (t.elements.arrow = o));
}
var F1 = { name: "arrow", enabled: !0, phase: "main", fn: M1, effect: D1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Yr(e) {
  return e.split("-")[1];
}
var z1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function V1(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Kr(n * o) / o || 0, y: Kr(r * o) / o || 0 };
}
function gc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, p = s.x, v = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, S = typeof f == "function" ? f({ x: v, y: g }) : { x: v, y: g };
  v = S.x, g = S.y;
  var d = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), L = Gt, E = Wt, _ = window;
  if (u) {
    var T = Po(n), O = "clientHeight", G = "clientWidth";
    if (T === Qt(n) && (T = gr(n), er(T).position !== "static" && i === "absolute" && (O = "scrollHeight", G = "scrollWidth")), T = T, o === Wt || (o === Gt || o === on) && a === Eo) {
      E = rn;
      var K = m && T === _ && _.visualViewport ? _.visualViewport.height : T[O];
      g -= K - r.height, g *= l ? 1 : -1;
    }
    if (o === Gt || (o === Wt || o === rn) && a === Eo) {
      L = on;
      var te = m && T === _ && _.visualViewport ? _.visualViewport.width : T[G];
      v -= te - r.width, v *= l ? 1 : -1;
    }
  }
  var pe = Object.assign({ position: i }, u && z1), ne = f === !0 ? V1({ x: v, y: g }, Qt(n)) : { x: v, y: g };
  if (v = ne.x, g = ne.y, l) {
    var be;
    return Object.assign({}, pe, (be = {}, be[E] = A ? "0" : "", be[L] = d ? "0" : "", be.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", be));
  }
  return Object.assign({}, pe, (t = {}, t[E] = A ? g + "px" : "", t[L] = d ? v + "px" : "", t.transform = "", t));
}
function B1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Rn(t.placement), variation: Yr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var If = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: B1, data: {} }, Ko = { passive: !0 };
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
var xf = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: j1, data: {} }, U1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ea(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return U1[t];
  });
}
var H1 = { start: "end", end: "start" };
function vc(e) {
  return e.replace(/start|end/g, function(t) {
    return H1[t];
  });
}
function yl(e) {
  var t = Qt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function _l(e) {
  return qr(gr(e)).left + yl(e).scrollLeft;
}
function W1(e, t) {
  var n = Qt(e), r = gr(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Ef();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + _l(e), y: l };
}
function G1(e) {
  var t, n = gr(e), r = yl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = yr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = yr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + _l(e), l = -r.scrollTop;
  return er(o || n).direction === "rtl" && (i += yr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function wl(e) {
  var t = er(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Rf(e) {
  return ["html", "body", "#document"].indexOf($n(e)) >= 0 ? e.ownerDocument.body : nn(e) && wl(e) ? e : Rf($a(e));
}
function ho(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Rf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Qt(r), s = o ? [a].concat(a.visualViewport || [], wl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(ho($a(s)));
}
function Es(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function K1(e, t) {
  var n = qr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function bc(e, t, n) {
  return t === Tf ? Es(W1(e, n)) : Tr(t) ? K1(t, n) : Es(G1(gr(e)));
}
function q1(e) {
  var t = ho($a(e)), n = ["absolute", "fixed"].indexOf(er(e).position) >= 0, r = n && nn(e) ? Po(e) : e;
  return Tr(r) ? t.filter(function(o) {
    return Tr(o) && Af(o, r) && $n(o) !== "body";
  }) : [];
}
function Y1(e, t, n, r) {
  var o = t === "clippingParents" ? q1(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = bc(e, u, r);
    return l.top = yr(f.top, l.top), l.right = ha(f.right, l.right), l.bottom = ha(f.bottom, l.bottom), l.left = yr(f.left, l.left), l;
  }, bc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Pf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Rn(r) : null, a = r ? Yr(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Wt:
      l = { x: s, y: t.y - n.height };
      break;
    case rn:
      l = { x: s, y: t.y + t.height };
      break;
    case on:
      l = { x: t.x + t.width, y: i };
      break;
    case Gt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? bl(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Gr:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Eo:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function Ao(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? b1 : i, u = n.rootBoundary, f = u === void 0 ? Tf : u, m = n.elementContext, p = m === void 0 ? oo : m, v = n.altBoundary, h = v === void 0 ? !1 : v, g = n.padding, S = g === void 0 ? 0 : g, d = Of(typeof S != "number" ? S : Lf(S, Ro)), A = p === oo ? y1 : oo, L = e.rects.popper, E = e.elements[h ? A : p], _ = Y1(Tr(E) ? E : E.contextElement || gr(e.elements.popper), l, f, s), T = qr(e.elements.reference), O = Pf({ reference: T, element: L, placement: o }), G = Es(Object.assign({}, L, O)), K = p === oo ? G : T, te = { top: _.top - K.top + d.top, bottom: K.bottom - _.bottom + d.bottom, left: _.left - K.left + d.left, right: K.right - _.right + d.right }, pe = e.modifiersData.offset;
  if (p === oo && pe) {
    var ne = pe[o];
    Object.keys(te).forEach(function(be) {
      var me = [on, rn].indexOf(be) >= 0 ? 1 : -1, N = [Wt, rn].indexOf(be) >= 0 ? "y" : "x";
      te[be] += ne[N] * me;
    });
  }
  return te;
}
function Z1(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Na : l, f = Yr(r), m = f ? i ? mc : mc.filter(function(h) {
    return Yr(h) === f;
  }) : Ro, p = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = m);
  var v = p.reduce(function(h, g) {
    return h[g] = Ao(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[Rn(g)], h;
  }, {});
  return Object.keys(v).sort(function(h, g) {
    return v[h] - v[g];
  });
}
function X1(e) {
  if (Rn(e) === hl) return [];
  var t = ea(e);
  return [vc(e), t, vc(t)];
}
function Q1(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, h = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, S = t.options.placement, d = Rn(S), A = d === S, L = l || (A || !h ? [ea(S)] : X1(S)), E = [S].concat(L).reduce(function(Te, qe) {
      return Te.concat(Rn(qe) === hl ? Z1(t, { placement: qe, boundary: f, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: g }) : qe);
    }, []), _ = t.rects.reference, T = t.rects.popper, O = /* @__PURE__ */ new Map(), G = !0, K = E[0], te = 0; te < E.length; te++) {
      var pe = E[te], ne = Rn(pe), be = Yr(pe) === Gr, me = [Wt, rn].indexOf(ne) >= 0, N = me ? "width" : "height", R = Ao(t, { placement: pe, boundary: f, rootBoundary: m, altBoundary: p, padding: u }), V = me ? be ? on : Gt : be ? rn : Wt;
      _[N] > T[N] && (V = ea(V));
      var ce = ea(V), Q = [];
      if (a && Q.push(R[ne] <= 0), i && Q.push(R[V] <= 0, R[ce] <= 0), Q.every(function(Te) {
        return Te;
      })) {
        K = pe, G = !1;
        break;
      }
      O.set(pe, Q);
    }
    if (G) for (var we = h ? 3 : 1, Y = function(Te) {
      var qe = E.find(function(Se) {
        var tt = O.get(Se);
        if (tt) return tt.slice(0, Te).every(function(ue) {
          return ue;
        });
      });
      if (qe) return K = qe, "break";
    }, Ve = we; Ve > 0; Ve--) {
      var Oe = Y(Ve);
      if (Oe === "break") break;
    }
    t.placement !== K && (t.modifiersData[r]._skip = !0, t.placement = K, t.reset = !0);
  }
}
var J1 = { name: "flip", enabled: !0, phase: "main", fn: Q1, requiresIfExists: ["offset"], data: { _skip: !1 } };
function yc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function _c(e) {
  return [Wt, on, rn, Gt].some(function(t) {
    return e[t] >= 0;
  });
}
function e_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ao(t, { elementContext: "reference" }), i = Ao(t, { altBoundary: !0 }), l = yc(s, r), u = yc(i, o, a), f = _c(l), m = _c(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var t_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: e_ };
function n_(e, t, n) {
  var r = Rn(e), o = [Gt, Wt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Gt, on].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, p = n.tether, v = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, S = Ao(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: f }), d = Rn(t.placement), A = Yr(t.placement), L = !A, E = bl(d), _ = s_(E), T = t.modifiersData.popperOffsets, O = t.rects.reference, G = t.rects.popper, K = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, te = typeof K == "number" ? { mainAxis: K, altAxis: K } : Object.assign({ mainAxis: 0, altAxis: 0 }, K), pe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = { x: 0, y: 0 };
  if (T) {
    if (a) {
      var be, me = E === "y" ? Wt : Gt, N = E === "y" ? rn : on, R = E === "y" ? "height" : "width", V = T[E], ce = V + S[me], Q = V - S[N], we = v ? -G[R] / 2 : 0, Y = A === Gr ? O[R] : G[R], Ve = A === Gr ? -G[R] : -O[R], Oe = t.elements.arrow, Te = v && Oe ? vl(Oe) : { width: 0, height: 0 }, qe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cf(), Se = qe[me], tt = qe[N], ue = mo(0, O[R], Te[R]), nt = L ? O[R] / 2 - we - ue - Se - te.mainAxis : Y - ue - Se - te.mainAxis, ft = L ? -O[R] / 2 + we + ue + tt + te.mainAxis : Ve + ue + tt + te.mainAxis, Ue = t.elements.arrow && Po(t.elements.arrow), St = Ue ? E === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0, at = (be = pe?.[E]) != null ? be : 0, vt = V + nt - at - St, st = V + ft - at, $e = mo(v ? ha(ce, vt) : ce, V, v ? yr(Q, st) : Q);
      T[E] = $e, ne[E] = $e - V;
    }
    if (i) {
      var bt, w = E === "x" ? Wt : Gt, C = E === "x" ? rn : on, F = T[_], Z = _ === "y" ? "height" : "width", Ee = F + S[w], fe = F - S[C], k = [Wt, Gt].indexOf(d) !== -1, D = (bt = pe?.[_]) != null ? bt : 0, ge = k ? Ee : F - O[Z] - G[Z] - D + te.altAxis, Ae = k ? F + O[Z] + G[Z] - D - te.altAxis : fe, Ye = v && k ? N1(ge, F, Ae) : mo(v ? ge : Ee, F, v ? Ae : fe);
      T[_] = Ye, ne[_] = Ye - F;
    }
    t.modifiersData[r] = ne;
  }
}
var i_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: l_, requiresIfExists: ["offset"] };
function c_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function u_(e) {
  return e === Qt(e) || !nn(e) ? yl(e) : c_(e);
}
function f_(e) {
  var t = e.getBoundingClientRect(), n = Kr(t.width) / e.offsetWidth || 1, r = Kr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function d_(e, t, n) {
  n === void 0 && (n = !1);
  var r = nn(t), o = nn(t) && f_(t), a = gr(t), s = qr(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && (($n(t) !== "body" || wl(a)) && (i = u_(t)), nn(t) ? (l = qr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = _l(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
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
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, wc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], m = !1, p = { state: u, setOptions: function(g) {
      var S = typeof g == "function" ? g(u.options) : g;
      h(), u.options = Object.assign({}, a, u.options, S), u.scrollParents = { reference: Tr(s) ? ho(s) : s.contextElement ? ho(s.contextElement) : [], popper: ho(i) };
      var d = m_(g_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(A) {
        return A.enabled;
      }), v(), p.update();
    }, forceUpdate: function() {
      if (!m) {
        var g = u.elements, S = g.reference, d = g.popper;
        if (kc(S, d)) {
          u.rects = { reference: d_(S, Po(d), u.options.strategy === "fixed"), popper: vl(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(G) {
            return u.modifiersData[G.name] = Object.assign({}, G.data);
          });
          for (var A = 0; A < u.orderedModifiers.length; A++) {
            if (u.reset === !0) {
              u.reset = !1, A = -1;
              continue;
            }
            var L = u.orderedModifiers[A], E = L.fn, _ = L.options, T = _ === void 0 ? {} : _, O = L.name;
            typeof E == "function" && (u = E({ state: u, options: T, name: O, instance: p }) || u);
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
    if (!kc(s, i)) return p;
    p.setOptions(l).then(function(g) {
      !m && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function v() {
      u.orderedModifiers.forEach(function(g) {
        var S = g.name, d = g.options, A = d === void 0 ? {} : d, L = g.effect;
        if (typeof L == "function") {
          var E = L({ state: u, name: S, instance: p, options: A }), _ = function() {
          };
          f.push(E || _);
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
kl();
var v_ = [xf, Nf, If, Sf];
kl({ defaultModifiers: v_ });
var b_ = [xf, Nf, If, Sf, o_, J1, i_, F1, t_], y_ = kl({ defaultModifiers: b_ });
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
    modifiers: [...A_(e), ...t]
  };
  return C_(a, o?.modifiers), a;
}, E_ = (e) => {
  if (mt)
    return Kn(e);
};
function A_(e) {
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
function C_(e, t) {
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
  }), a = fr(), s = j({
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
  return ye(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), ye([e, t], ([l, u]) => {
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
const I_ = 0, x_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = De(dl, void 0), a = j(), s = j(), i = I(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = I(() => {
    var d;
    const A = c(a), L = (d = c(s)) != null ? d : I_;
    return {
      name: "arrow",
      enabled: !q0(A),
      options: {
        element: A,
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
  return ye(S, (d) => t.value = d), ut(() => {
    ye(() => {
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
}, R_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Yu(), a = ht("popper"), s = I(() => c(t).popper), i = j(Ne(e.zIndex) ? e.zIndex : o()), l = I(() => [
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
    } = T_(r, n), { attributes: m, arrowRef: p, contentRef: v, styles: h, instanceRef: g, role: S, update: d } = x_(r), {
      ariaModal: A,
      arrowStyle: L,
      contentAttrs: E,
      contentClass: _,
      contentStyle: T,
      updateZIndex: O
    } = R_(r, {
      styles: h,
      attributes: m,
      role: S
    }), G = De(ma, void 0), K = j();
    Pn(gf, {
      arrowStyle: L,
      arrowRef: p,
      arrowOffset: K
    }), G && Pn(ma, {
      ...G,
      addInputId: ko,
      removeInputId: ko
    });
    let te;
    const pe = (be = !0) => {
      d(), be && O();
    }, ne = () => {
      pe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ut(() => {
      ye(() => r.triggerTargetEl, (be, me) => {
        te?.(), te = void 0;
        const N = c(be || v.value), R = c(me || v.value);
        hn(N) && (te = ye([S, () => r.ariaLabel, A, () => r.id], (V) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ce, Q) => {
            Zn(V[Q]) ? N.removeAttribute(ce) : N.setAttribute(ce, V[Q]);
          });
        }, { immediate: !0 })), R !== N && hn(R) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
          R.removeAttribute(V);
        });
      }, { immediate: !0 }), ye(() => r.visible, ne, { immediate: !0 });
    }), Mn(() => {
      te?.(), te = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: g,
      updatePopper: pe,
      contentStyle: T
    }), (be, me) => (x(), W("div", Vr({
      ref_key: "contentRef",
      ref: v
    }, c(E), {
      style: c(T),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (N) => be.$emit("mouseenter", N),
      onMouseleave: (N) => be.$emit("mouseleave", N)
    }), [
      $(c(v1), {
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
          ve(be.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var $_ = /* @__PURE__ */ Xe(N_, [["__file", "content.vue"]]);
const M_ = bn(Ky), Tl = Symbol("elTooltip");
function Tc() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Io(() => n()), {
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
  const { registerTimeout: a } = Tc(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Tc();
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
}, Sl = Ke({
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
    default: () => [xn.enter, xn.numpadEnter, xn.space]
  }
}), z_ = La({
  type: he(Boolean),
  default: null
}), V_ = La({
  type: he(Function)
}), B_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: z_,
    [n]: V_
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
      const p = Bt(), { emit: v } = p, h = p.props, g = I(() => et(h[n])), S = I(() => h[e] === null), d = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), et(f) && f(O));
      }, A = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), et(m) && m(O));
      }, L = (O) => {
        if (h.disabled === !0 || et(u) && !u())
          return;
        const G = g.value && mt;
        G && v(t, !0), (S.value || !G) && d(O);
      }, E = (O) => {
        if (h.disabled === !0 || !mt)
          return;
        const G = g.value && mt;
        G && v(t, !1), (S.value || !G) && A(O);
      }, _ = (O) => {
        dr(O) && (h.disabled && O ? g.value && v(t, !1) : s.value !== O && (O ? d() : A()));
      }, T = () => {
        s.value ? E() : L();
      };
      return ye(() => h[e], _), l && p.appContext.config.globalProperties.$route !== void 0 && ye(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && s.value && E();
      }), ut(() => {
        _(h[e]);
      }), {
        hide: E,
        show: L,
        toggle: T,
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
} = B_("visible"), W_ = Ke({
  ...vf,
  ...j_,
  ...Sl,
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
], K_ = (e, t) => Cn(e) ? e.includes(t) : e === t, Pr = (e, t, n) => (r) => {
  K_(c(e), t) && n(r);
}, Un = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, q_ = re({
  name: "ElTooltipTrigger"
}), Y_ = /* @__PURE__ */ re({
  ...q_,
  props: Mf,
  setup(e, { expose: t }) {
    const n = e, r = ht("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = De(Tl, void 0), f = j(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, p = Hn(n, "trigger"), v = Un(m, Pr(p, "hover", i)), h = Un(m, Pr(p, "hover", l)), g = Un(m, Pr(p, "click", (E) => {
      E.button === 0 && u(E);
    })), S = Un(m, Pr(p, "focus", i)), d = Un(m, Pr(p, "focus", l)), A = Un(m, Pr(p, "contextmenu", (E) => {
      E.preventDefault(), u(E);
    })), L = Un(m, (E) => {
      const { code: _ } = E;
      n.triggerKeys.includes(_) && (E.preventDefault(), u(E));
    });
    return t({
      triggerRef: f
    }), (E, _) => (x(), ie(c(r1), {
      id: c(a),
      "virtual-ref": E.virtualRef,
      open: c(s),
      "virtual-triggering": E.virtualTriggering,
      class: U(c(r).e("trigger")),
      onBlur: c(d),
      onClick: c(g),
      onContextmenu: c(A),
      onFocus: c(S),
      onMouseenter: c(v),
      onMouseleave: c(h),
      onKeydown: c(L)
    }, {
      default: ae(() => [
        ve(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Z_ = /* @__PURE__ */ Xe(Y_, [["__file", "trigger.vue"]]);
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
    return (t, n) => t.disabled ? ve(t.$slots, "default", { key: 0 }) : (x(), ie(ud, {
      key: 1,
      to: t.to
    }, [
      ve(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var J_ = /* @__PURE__ */ Xe(Q_, [["__file", "teleport.vue"]]);
const ew = bn(J_), Df = () => {
  const e = Ys(), t = df(), n = I(() => `${e.value}-popper-container-${t.prefix}`), r = I(() => `#${n.value}`);
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
    mt && (document.body.querySelector(t.value) || tw(e.value));
  }), {
    id: e,
    selector: t
  };
}, rw = re({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ow = /* @__PURE__ */ re({
  ...rw,
  props: Sl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Df(), o = ht("tooltip"), a = j();
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
    } = De(Tl, void 0), d = I(() => n.transition || `${o.namespace.value}-fade-in-linear`), A = I(() => n.persistent);
    Mn(() => {
      s?.();
    });
    const L = I(() => c(A) ? !0 : c(u)), E = I(() => n.disabled ? !1 : c(u)), _ = I(() => n.appendTo || r.value), T = I(() => {
      var V;
      return (V = n.style) != null ? V : {};
    }), O = j(!0), G = () => {
      h(), R() && jn(document.body), O.value = !0;
    }, K = () => {
      if (c(i))
        return !0;
    }, te = Un(K, () => {
      n.enterable && c(f) === "hover" && p();
    }), pe = Un(K, () => {
      c(f) === "hover" && m();
    }), ne = () => {
      var V, ce;
      (ce = (V = a.value) == null ? void 0 : V.updatePopper) == null || ce.call(V), g?.();
    }, be = () => {
      S?.();
    }, me = () => {
      v(), s = fb(I(() => {
        var V;
        return (V = a.value) == null ? void 0 : V.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && m();
      });
    }, N = () => {
      n.virtualTriggering || m();
    }, R = (V) => {
      var ce;
      const Q = (ce = a.value) == null ? void 0 : ce.popperContentRef, we = V?.relatedTarget || document.activeElement;
      return Q?.contains(we);
    };
    return ye(() => c(u), (V) => {
      V ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), ye(() => n.content, () => {
      var V, ce;
      (ce = (V = a.value) == null ? void 0 : V.updatePopper) == null || ce.call(V);
    }), t({
      contentRef: a,
      isFocusInsideContent: R
    }), (V, ce) => (x(), ie(c(ew), {
      disabled: !V.teleported,
      to: c(_)
    }, {
      default: ae(() => [
        $(Qr, {
          name: c(d),
          onAfterLeave: G,
          onBeforeEnter: ne,
          onAfterEnter: me,
          onBeforeLeave: be
        }, {
          default: ae(() => [
            c(L) ? Tt((x(), ie(c($_), Vr({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, V.$attrs, {
              "aria-label": V.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": V.boundariesPadding,
              "fallback-placements": V.fallbackPlacements,
              "gpu-acceleration": V.gpuAcceleration,
              offset: V.offset,
              placement: V.placement,
              "popper-options": V.popperOptions,
              strategy: V.strategy,
              effect: V.effect,
              enterable: V.enterable,
              pure: V.pure,
              "popper-class": V.popperClass,
              "popper-style": [V.popperStyle, c(T)],
              "reference-el": V.referenceEl,
              "trigger-target-el": V.triggerTargetEl,
              visible: c(E),
              "z-index": V.zIndex,
              onMouseenter: c(te),
              onMouseleave: c(pe),
              onBlur: N,
              onClose: c(m)
            }), {
              default: ae(() => [
                ve(V.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Qn, c(E)]
            ]) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var aw = /* @__PURE__ */ Xe(ow, [["__file", "content.vue"]]);
const sw = re({
  name: "ElTooltip"
}), lw = /* @__PURE__ */ re({
  ...sw,
  props: W_,
  emits: G_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    nw();
    const o = xa(), a = j(), s = j(), i = () => {
      var d;
      const A = c(a);
      A && ((d = A.popperInstanceRef) == null || d.update());
    }, l = j(!1), u = j(), { show: f, hide: m, hasUpdateHandler: p } = H_({
      indicator: l,
      toggleReason: u
    }), { onOpen: v, onClose: h } = F_({
      showAfter: Hn(r, "showAfter"),
      hideAfter: Hn(r, "hideAfter"),
      autoClose: Hn(r, "autoClose"),
      open: f,
      close: m
    }), g = I(() => dr(r.visible) && !p.value);
    Pn(Tl, {
      controlled: g,
      id: o,
      open: Is(l),
      trigger: Hn(r, "trigger"),
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
    }), ye(() => r.disabled, (d) => {
      d && l.value && (l.value = !1);
    });
    const S = (d) => {
      var A;
      return (A = s.value) == null ? void 0 : A.isFocusInsideContent(d);
    };
    return dd(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: S,
      updatePopper: i,
      onOpen: v,
      onClose: h,
      hide: m
    }), (d, A) => (x(), ie(c(M_), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: ae(() => [
        $(Z_, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: ae(() => [
            d.$slots.default ? ve(d.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        $(aw, {
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
            ve(d.$slots, "content", {}, () => [
              d.rawContent ? (x(), W("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (x(), W("span", { key: 1 }, B(d.content), 1))
            ]),
            d.showArrow ? (x(), ie(c(Zy), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var iw = /* @__PURE__ */ Xe(lw, [["__file", "tooltip.vue"]]);
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
    const n = e, r = ht("badge"), o = I(() => n.isDot ? "" : Ne(n.value) && Ne(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = I(() => {
      var s, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Wr(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Wr((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (x(), W("div", {
      class: U(c(r).b())
    }, [
      ve(s.$slots, "default"),
      $(Qr, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ae(() => [
          Tt(y("sup", {
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
            ve(s.$slots, "content", { value: c(o) }, () => [
              Zt(B(c(o)), 1)
            ])
          ], 6), [
            [Qn, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var pw = /* @__PURE__ */ Xe(dw, [["__file", "badge.vue"]]);
const mw = bn(pw), hw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), As = Ke({
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
}), gw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, vw = re({
  name: "ElTag"
}), bw = /* @__PURE__ */ re({
  ...vw,
  props: As,
  emits: gw,
  setup(e, { emit: t }) {
    const n = e, r = xo(), o = ht("tag"), a = I(() => {
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
    return (u, f) => u.disableTransitions ? (x(), W("span", {
      key: 0,
      class: U(c(a)),
      style: Ct({ backgroundColor: u.color }),
      onClick: i
    }, [
      y("span", {
        class: U(c(o).e("content"))
      }, [
        ve(u.$slots, "default")
      ], 2),
      u.closable ? (x(), ie(c(pt), {
        key: 0,
        class: U(c(o).e("close")),
        onClick: Qe(s, ["stop"])
      }, {
        default: ae(() => [
          $(c(da))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (x(), ie(Qr, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ae(() => [
        y("span", {
          class: U(c(a)),
          style: Ct({ backgroundColor: u.color }),
          onClick: i
        }, [
          y("span", {
            class: U(c(o).e("content"))
          }, [
            ve(u.$slots, "default")
          ], 2),
          u.closable ? (x(), ie(c(pt), {
            key: 0,
            class: U(c(o).e("close")),
            onClick: Qe(s, ["stop"])
          }, {
            default: ae(() => [
              $(c(da))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var yw = /* @__PURE__ */ Xe(bw, [["__file", "tag.vue"]]);
const _w = bn(yw), lr = /* @__PURE__ */ new Map();
if (mt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of lr.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Sc(e, t) {
  let n = [];
  return Cn(t.arg) ? n = t.arg : hn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), m = e === s, p = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), v = a && (a.contains(s) || a.contains(i));
    l || u || f || m || p || v || t.value(r, o);
  };
}
const ww = {
  beforeMount(e, t) {
    lr.has(e) || lr.set(e, []), lr.get(e).push({
      documentHandler: Sc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    lr.has(e) || lr.set(e, []);
    const n = lr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Sc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    lr.delete(e);
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
}), cn = {};
re({
  name: "ElConfigProvider",
  props: kw,
  setup(e, { slots: t }) {
    ye(() => e.message, (r) => {
      Object.assign(cn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rf(e);
    return () => ve(t, "default", { config: n?.value });
  }
});
const Tw = 100, Sw = 600, Ec = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Tw, delay: o = Sw } = et(n) ? {} : n;
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
}), Aw = {
  [Jn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Xn]: (e) => Ne(e) || Zn(e),
  [kt]: (e) => Ne(e) || Zn(e)
}, Cw = re({
  name: "ElInputNumber"
}), Ow = /* @__PURE__ */ re({
  ...Cw,
  props: Ew,
  emits: Aw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = al(), a = ht("input-number"), s = j(), i = _r({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ra(), u = I(() => Ne(r.modelValue) && r.modelValue <= r.min), f = I(() => Ne(r.modelValue) && r.modelValue >= r.max), m = I(() => {
      const N = d(r.step);
      return On(r.precision) ? Math.max(d(r.modelValue), N) : (N > r.precision, r.precision);
    }), p = I(() => r.controls && r.controlsPosition === "right"), v = xo(), h = ul(), g = I(() => {
      if (i.userInput !== null)
        return i.userInput;
      let N = i.currentValue;
      if (Zn(N))
        return "";
      if (Ne(N)) {
        if (Number.isNaN(N))
          return "";
        On(r.precision) || (N = N.toFixed(r.precision));
      }
      return N;
    }), S = (N, R) => {
      if (On(R) && (R = m.value), R === 0)
        return Math.round(N);
      let V = String(N);
      const ce = V.indexOf(".");
      if (ce === -1 || !V.replace(".", "").split("")[ce + R])
        return N;
      const Y = V.length;
      return V.charAt(Y - 1) === "5" && (V = `${V.slice(0, Math.max(0, Y - 1))}6`), Number.parseFloat(Number(V).toFixed(R));
    }, d = (N) => {
      if (Zn(N))
        return 0;
      const R = N.toString(), V = R.indexOf(".");
      let ce = 0;
      return V !== -1 && (ce = R.length - V - 1), ce;
    }, A = (N, R = 1) => Ne(N) ? S(N + r.step * R) : i.currentValue, L = () => {
      if (r.readonly || h.value || f.value)
        return;
      const N = Number(g.value) || 0, R = A(N);
      T(R), n(Xn, i.currentValue), be();
    }, E = () => {
      if (r.readonly || h.value || u.value)
        return;
      const N = Number(g.value) || 0, R = A(N, -1);
      T(R), n(Xn, i.currentValue), be();
    }, _ = (N, R) => {
      const { max: V, min: ce, step: Q, precision: we, stepStrictly: Y, valueOnClear: Ve } = r;
      V < ce && ol("InputNumber", "min should not be greater than max.");
      let Oe = Number(N);
      if (Zn(N) || Number.isNaN(Oe))
        return null;
      if (N === "") {
        if (Ve === null)
          return null;
        Oe = Mt(Ve) ? { min: ce, max: V }[Ve] : Ve;
      }
      return Y && (Oe = S(Math.round(Oe / Q) * Q, we), Oe !== N && R && n(kt, Oe)), On(we) || (Oe = S(Oe, we)), (Oe > V || Oe < ce) && (Oe = Oe > V ? V : ce, R && n(kt, Oe)), Oe;
    }, T = (N, R = !0) => {
      var V;
      const ce = i.currentValue, Q = _(N);
      if (!R) {
        n(kt, Q);
        return;
      }
      ce === Q && N || (i.userInput = null, n(kt, Q), ce !== Q && n(Jn, Q, ce), r.validateEvent && ((V = l?.validate) == null || V.call(l, "change").catch((we) => void 0)), i.currentValue = Q);
    }, O = (N) => {
      i.userInput = N;
      const R = N === "" ? null : Number(N);
      n(Xn, R), T(R, !1);
    }, G = (N) => {
      const R = N !== "" ? Number(N) : "";
      (Ne(R) && !Number.isNaN(R) || N === "") && T(R), be(), i.userInput = null;
    }, K = () => {
      var N, R;
      (R = (N = s.value) == null ? void 0 : N.focus) == null || R.call(N);
    }, te = () => {
      var N, R;
      (R = (N = s.value) == null ? void 0 : N.blur) == null || R.call(N);
    }, pe = (N) => {
      n("focus", N);
    }, ne = (N) => {
      var R, V;
      i.userInput = null, uf() && i.currentValue === null && ((R = s.value) != null && R.input) && (s.value.input.value = ""), n("blur", N), r.validateEvent && ((V = l?.validate) == null || V.call(l, "blur").catch((ce) => void 0));
    }, be = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, me = (N) => {
      document.activeElement === N.target && N.preventDefault();
    };
    return ye(() => r.modelValue, (N, R) => {
      const V = _(N, !0);
      i.userInput === null && V !== R && (i.currentValue = V);
    }, { immediate: !0 }), ut(() => {
      var N;
      const { min: R, max: V, modelValue: ce } = r, Q = (N = s.value) == null ? void 0 : N.input;
      if (Q.setAttribute("role", "spinbutton"), Number.isFinite(V) ? Q.setAttribute("aria-valuemax", String(V)) : Q.removeAttribute("aria-valuemax"), Number.isFinite(R) ? Q.setAttribute("aria-valuemin", String(R)) : Q.removeAttribute("aria-valuemin"), Q.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), Q.setAttribute("aria-disabled", String(h.value)), !Ne(ce) && ce != null) {
        let we = Number(ce);
        Number.isNaN(we) && (we = null), n(kt, we);
      }
      Q.addEventListener("wheel", me, { passive: !1 });
    }), Wc(() => {
      var N, R;
      const V = (N = s.value) == null ? void 0 : N.input;
      V?.setAttribute("aria-valuenow", `${(R = i.currentValue) != null ? R : ""}`);
    }), t({
      focus: K,
      blur: te
    }), (N, R) => (x(), W("div", {
      class: U([
        c(a).b(),
        c(a).m(c(v)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !N.controls),
        c(a).is("controls-right", c(p))
      ]),
      onDragstart: Qe(() => {
      }, ["prevent"])
    }, [
      N.controls ? Tt((x(), W("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: U([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: tn(E, ["enter"])
      }, [
        ve(N.$slots, "decrease-icon", {}, () => [
          $(c(pt), null, {
            default: ae(() => [
              c(p) ? (x(), ie(c(sf), { key: 0 })) : (x(), ie(c(ty), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ec), E]
      ]) : ee("v-if", !0),
      N.controls ? Tt((x(), W("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: U([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: tn(L, ["enter"])
      }, [
        ve(N.$slots, "increase-icon", {}, () => [
          $(c(pt), null, {
            default: ae(() => [
              c(p) ? (x(), ie(c(jb), { key: 0 })) : (x(), ie(c(ry), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ec), L]
      ]) : ee("v-if", !0),
      $(c(Oy), {
        id: N.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: N.step,
        "model-value": c(g),
        placeholder: N.placeholder,
        readonly: N.readonly,
        disabled: c(h),
        size: c(v),
        max: N.max,
        min: N.min,
        name: N.name,
        "aria-label": N.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          tn(Qe(L, ["prevent"]), ["up"]),
          tn(Qe(E, ["prevent"]), ["down"])
        ],
        onBlur: ne,
        onFocus: pe,
        onInput: O,
        onChange: G
      }, pd({
        _: 2
      }, [
        N.$slots.prefix ? {
          name: "prefix",
          fn: ae(() => [
            ve(N.$slots, "prefix")
          ])
        } : void 0,
        N.$slots.suffix ? {
          name: "suffix",
          fn: ae(() => [
            ve(N.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Lw = /* @__PURE__ */ Xe(Ow, [["__file", "input-number.vue"]]);
const Iw = bn(Lw);
function xw() {
  const e = fr(), t = j(0), n = 11, r = I(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return An(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Ff = Symbol("ElSelectGroup"), Ma = Symbol("ElSelect");
function Rw(e, t) {
  const n = De(Ma), r = De(Ff, { disabled: !1 }), o = I(() => f(cr(n.props.modelValue), e.value)), a = I(() => {
    var v;
    if (n.props.multiple) {
      const h = cr((v = n.props.modelValue) != null ? v : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = I(() => e.label || (Xt(e.value) ? "" : e.value)), i = I(() => e.value || e.label || ""), l = I(() => e.disabled || t.groupDisabled || a.value), u = Bt(), f = (v = [], h) => {
    if (Xt(e.value)) {
      const g = n.props.valueKey;
      return v && v.some((S) => md(ur(S, g)) === ur(h, g));
    } else
      return v && v.includes(h);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, p = (v) => {
    const h = new RegExp(hw(v), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return ye(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ye(() => e.value, (v, h) => {
    const { remote: g, valueKey: S } = n.props;
    if ((g ? v !== h : !po(v, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (S && Xt(v) && Xt(h) && v[S] === h[S])
        return;
      n.setSelected();
    }
  }), ye(() => r.disabled, () => {
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
    const t = ht("select"), n = xa(), r = I(() => [
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
    } = Rw(e, o), { visible: m, hover: p } = xs(o), v = Bt().proxy;
    l.onOptionCreate(v), Mn(() => {
      const g = v.value, { selected: S } = l.states, d = S.some((A) => A.value === v.value);
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
  return Tt((x(), W("li", {
    id: e.id,
    class: U(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Qe(e.selectOptionClick, ["stop"])
  }, [
    ve(e.$slots, "default", {}, () => [
      y("span", null, B(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Qn, e.visible]
  ]);
}
var El = /* @__PURE__ */ Xe(Pw, [["render", Nw], ["__file", "option.vue"]]);
const $w = re({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = De(Ma), t = ht("select"), n = I(() => e.props.popperClass), r = I(() => e.props.multiple), o = I(() => e.props.fitInputWidth), a = j("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ut(() => {
      s(), An(e.selectRef, s);
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
  return x(), W("div", {
    class: U([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ct({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (x(), W("div", {
      key: 0,
      class: U(e.ns.be("dropdown", "header"))
    }, [
      ve(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    ve(e.$slots, "default"),
    e.$slots.footer ? (x(), W("div", {
      key: 1,
      class: U(e.ns.be("dropdown", "footer"))
    }, [
      ve(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var Dw = /* @__PURE__ */ Xe($w, [["render", Mw], ["__file", "select-dropdown.vue"]]);
const Fw = (e, t) => {
  const { t: n } = al(), r = xa(), o = ht("select"), a = ht("input"), s = _r({
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
    isComposing: A,
    handleCompositionStart: L,
    handleCompositionUpdate: E,
    handleCompositionEnd: _
  } = hf({
    afterComposition: (P) => Ye(P)
  }), { wrapperRef: T, isFocused: O, handleBlur: G } = mf(m, {
    beforeFocus() {
      return R.value;
    },
    afterFocus() {
      e.automaticDropdown && !K.value && (K.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(P) {
      var X, _e;
      return ((X = u.value) == null ? void 0 : X.isFocusInsideContent(P)) || ((_e = f.value) == null ? void 0 : _e.isFocusInsideContent(P));
    },
    afterBlur() {
      K.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), K = j(!1), te = j(), { form: pe, formItem: ne } = Ra(), { inputId: be } = cl(e, {
    formItemContext: ne
  }), { valueOnClear: me, isEmptyValue: N } = Pb(e), R = I(() => e.disabled || pe?.disabled), V = I(() => Cn(e.modelValue) ? e.modelValue.length > 0 : !N(e.modelValue)), ce = I(() => {
    var P;
    return (P = pe?.statusIcon) != null ? P : !1;
  }), Q = I(() => e.clearable && !R.value && s.inputHovering && V.value), we = I(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Y = I(() => o.is("reverse", we.value && K.value)), Ve = I(() => ne?.validateState || ""), Oe = I(() => cf[Ve.value]), Te = I(() => e.remote ? 300 : 0), qe = I(() => e.remote && !s.inputValue && s.options.size === 0), Se = I(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && tt.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), tt = I(() => ue.value.filter((P) => P.visible).length), ue = I(() => {
    const P = Array.from(s.options.values()), X = [];
    return s.optionValues.forEach((_e) => {
      const rt = P.findIndex((yt) => yt.value === _e);
      rt > -1 && X.push(P[rt]);
    }), X.length >= P.length ? X : P;
  }), nt = I(() => Array.from(s.cachedOptions.values())), ft = I(() => {
    const P = ue.value.filter((X) => !X.created).some((X) => X.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !P;
  }), Ue = () => {
    e.filterable && et(e.filterMethod) || e.filterable && e.remote && et(e.remoteMethod) || ue.value.forEach((P) => {
      var X;
      (X = P.updateOption) == null || X.call(P, s.inputValue);
    });
  }, St = xo(), at = I(() => ["small"].includes(St.value) ? "small" : "default"), vt = I({
    get() {
      return K.value && !qe.value;
    },
    set(P) {
      K.value = P;
    }
  }), st = I(() => {
    if (e.multiple && !On(e.modelValue))
      return cr(e.modelValue).length === 0 && !s.inputValue;
    const P = Cn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || On(P) ? !s.inputValue : !0;
  }), $e = I(() => {
    var P;
    const X = (P = e.placeholder) != null ? P : n("el.select.placeholder");
    return e.multiple || !V.value ? X : s.selectedLabel;
  }), bt = I(() => ks ? null : "mouseenter");
  ye(() => e.modelValue, (P, X) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), F(), !po(P, X) && e.validateEvent && ne?.validate("change").catch((_e) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ye(() => K.value, (P) => {
    P ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", P);
  }), ye(() => s.options.entries(), () => {
    mt && (F(), e.defaultFirstOption && (e.filterable || e.remote) && tt.value && C());
  }, {
    flush: "post"
  }), ye([() => s.hoveringIndex, ue], ([P]) => {
    Ne(P) && P > -1 ? te.value = ue.value[P] || {} : te.value = {}, ue.value.forEach((X) => {
      X.hover = te.value === X;
    });
  }), Hc(() => {
    s.isBeforeHide || Ue();
  });
  const w = (P) => {
    s.previousQuery === P || A.value || (s.previousQuery = P, e.filterable && et(e.filterMethod) ? e.filterMethod(P) : e.filterable && e.remote && et(e.remoteMethod) && e.remoteMethod(P), e.defaultFirstOption && (e.filterable || e.remote) && tt.value ? lt(C) : lt(Ee));
  }, C = () => {
    const P = ue.value.filter((yt) => yt.visible && !yt.disabled && !yt.states.groupDisabled), X = P.find((yt) => yt.created), _e = P[0], rt = ue.value.map((yt) => yt.value);
    s.hoveringIndex = H(rt, X || _e);
  }, F = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const X = Cn(e.modelValue) ? e.modelValue[0] : e.modelValue, _e = Z(X);
      s.selectedLabel = _e.currentLabel, s.selected = [_e];
      return;
    }
    const P = [];
    On(e.modelValue) || cr(e.modelValue).forEach((X) => {
      P.push(Z(X));
    }), s.selected = P;
  }, Z = (P) => {
    let X;
    const _e = ih(P);
    for (let Jt = s.cachedOptions.size - 1; Jt >= 0; Jt--) {
      const Yt = nt.value[Jt];
      if (_e ? ur(Yt.value, e.valueKey) === ur(P, e.valueKey) : Yt.value === P) {
        X = {
          value: P,
          currentLabel: Yt.currentLabel,
          get isDisabled() {
            return Yt.isDisabled;
          }
        };
        break;
      }
    }
    if (X)
      return X;
    const rt = _e ? P.label : P ?? "";
    return {
      value: P,
      currentLabel: rt
    };
  }, Ee = () => {
    s.hoveringIndex = ue.value.findIndex((P) => s.selected.some((X) => je(X) === je(P)));
  }, fe = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, k = () => {
    s.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, D = () => {
    var P, X;
    (X = (P = u.value) == null ? void 0 : P.updatePopper) == null || X.call(P);
  }, ge = () => {
    var P, X;
    (X = (P = f.value) == null ? void 0 : P.updatePopper) == null || X.call(P);
  }, Ae = () => {
    s.inputValue.length > 0 && !K.value && (K.value = !0), w(s.inputValue);
  }, Ye = (P) => {
    if (s.inputValue = P.target.value, e.remote)
      xt();
    else
      return Ae();
  }, xt = G0(() => {
    Ae();
  }, Te.value), He = (P) => {
    po(e.modelValue, P) || t(Jn, P);
  }, Fn = (P) => K0(P, (X) => {
    const _e = s.cachedOptions.get(X);
    return _e && !_e.disabled && !_e.states.groupDisabled;
  }), rr = (P) => {
    if (e.multiple && P.code !== xn.delete && P.target.value.length <= 0) {
      const X = cr(e.modelValue).slice(), _e = Fn(X);
      if (_e < 0)
        return;
      const rt = X[_e];
      X.splice(_e, 1), t(kt, X), He(X), t("remove-tag", rt);
    }
  }, Lr = (P, X) => {
    const _e = s.selected.indexOf(X);
    if (_e > -1 && !R.value) {
      const rt = cr(e.modelValue).slice();
      rt.splice(_e, 1), t(kt, rt), He(rt), t("remove-tag", X.value);
    }
    P.stopPropagation(), sn();
  }, M = (P) => {
    P.stopPropagation();
    const X = e.multiple ? [] : me.value;
    if (e.multiple)
      for (const _e of s.selected)
        _e.isDisabled && X.push(_e.value);
    t(kt, X), He(X), s.hoveringIndex = -1, K.value = !1, t("clear"), sn();
  }, q = (P) => {
    var X;
    if (e.multiple) {
      const _e = cr((X = e.modelValue) != null ? X : []).slice(), rt = H(_e, P);
      rt > -1 ? _e.splice(rt, 1) : (e.multipleLimit <= 0 || _e.length < e.multipleLimit) && _e.push(P.value), t(kt, _e), He(_e), P.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(kt, P.value), He(P.value), K.value = !1;
    sn(), !K.value && lt(() => {
      le(P);
    });
  }, H = (P = [], X) => On(X) ? -1 : Xt(X.value) ? P.findIndex((_e) => po(ur(_e, e.valueKey), je(X))) : P.indexOf(X.value), le = (P) => {
    var X, _e, rt, yt, Jt;
    const Yt = Cn(P) ? P[0] : P;
    let Ut = null;
    if (Yt?.value) {
      const sr = ue.value.filter((Do) => Do.value === Yt.value);
      sr.length > 0 && (Ut = sr[0].$el);
    }
    if (u.value && Ut) {
      const sr = (yt = (rt = (_e = (X = u.value) == null ? void 0 : X.popperRef) == null ? void 0 : _e.contentRef) == null ? void 0 : rt.querySelector) == null ? void 0 : yt.call(rt, `.${o.be("dropdown", "wrap")}`);
      sr && $b(sr, Ut);
    }
    (Jt = d.value) == null || Jt.handleScroll();
  }, de = (P) => {
    s.options.set(P.value, P), s.cachedOptions.set(P.value, P);
  }, Be = (P, X) => {
    s.options.get(P) === X && s.options.delete(P);
  }, Et = I(() => {
    var P, X;
    return (X = (P = u.value) == null ? void 0 : P.popperRef) == null ? void 0 : X.contentRef;
  }), dt = () => {
    s.isBeforeHide = !1, lt(() => {
      var P;
      (P = d.value) == null || P.update(), le(s.selected);
    });
  }, sn = () => {
    var P;
    (P = m.value) == null || P.focus();
  }, Kt = () => {
    var P;
    if (K.value) {
      K.value = !1, lt(() => {
        var X;
        return (X = m.value) == null ? void 0 : X.blur();
      });
      return;
    }
    (P = m.value) == null || P.blur();
  }, or = (P) => {
    M(P);
  }, yn = (P) => {
    if (K.value = !1, O.value) {
      const X = new FocusEvent("focus", P);
      lt(() => G(X));
    }
  }, Ze = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : K.value = !1;
  }, _n = () => {
    R.value || (ks && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : K.value = !K.value);
  }, Da = () => {
    if (!K.value)
      _n();
    else {
      const P = ue.value[s.hoveringIndex];
      P && !P.isDisabled && q(P);
    }
  }, je = (P) => Xt(P.value) ? ur(P.value, e.valueKey) : P.value, ar = I(() => ue.value.filter((P) => P.visible).every((P) => P.isDisabled)), Fa = I(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), No = I(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ir = (P) => {
    if (!K.value) {
      K.value = !0;
      return;
    }
    if (!(s.options.size === 0 || tt.value === 0 || A.value) && !ar.value) {
      P === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : P === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const X = ue.value[s.hoveringIndex];
      (X.isDisabled || !X.visible) && Ir(P), lt(() => le(te.value));
    }
  }, $o = () => {
    if (!l.value)
      return 0;
    const P = window.getComputedStyle(l.value);
    return Number.parseFloat(P.gap || "6px");
  }, Mo = I(() => {
    const P = $o();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - P : s.selectionWidth}px` };
  }), za = I(() => ({ maxWidth: `${s.selectionWidth}px` })), qt = (P) => {
    t("popup-scroll", P);
  };
  return An(l, fe), An(h, D), An(T, D), An(g, ge), An(S, k), ut(() => {
    F();
  }), {
    inputId: be,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: K,
    optionsArray: ue,
    hoverOption: te,
    selectSize: St,
    filteredOptionsCount: tt,
    updateTooltip: D,
    updateTagTooltip: ge,
    debouncedOnInputChange: xt,
    onInput: Ye,
    deletePrevTag: rr,
    deleteTag: Lr,
    deleteSelected: M,
    handleOptionSelect: q,
    scrollToOption: le,
    hasModelValue: V,
    shouldShowPlaceholder: st,
    currentPlaceholder: $e,
    mouseEnterEventName: bt,
    needStatusIcon: ce,
    showClose: Q,
    iconComponent: we,
    iconReverse: Y,
    validateState: Ve,
    validateIcon: Oe,
    showNewOption: ft,
    updateOptions: Ue,
    collapseTagSize: at,
    setSelected: F,
    selectDisabled: R,
    emptyText: Se,
    handleCompositionStart: L,
    handleCompositionUpdate: E,
    handleCompositionEnd: _,
    onOptionCreate: de,
    onOptionDestroy: Be,
    handleMenuEnter: dt,
    focus: sn,
    blur: Kt,
    handleClearClick: or,
    handleClickOutside: yn,
    handleEsc: Ze,
    toggleMenu: _n,
    selectOption: Da,
    getValueKey: je,
    navigateOptions: Ir,
    dropdownMenuVisible: vt,
    showTagList: Fa,
    collapseTagList: No,
    popupScroll: qt,
    tagStyle: Mo,
    collapseTagStyle: za,
    popperRef: Et,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: p,
    suffixRef: v,
    selectRef: i,
    wrapperRef: T,
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
    const n = De(Ma);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Cn(u) && u.forEach((f) => {
          var m, p, v, h;
          const g = (m = f?.type || {}) == null ? void 0 : m.name;
          g === "ElOptionGroup" ? l(!Mt(f.children) && !Cn(f.children) && et((p = f.children) == null ? void 0 : p.default) ? (v = f.children) == null ? void 0 : v.default() : f.children) : g === "ElOption" ? i.push((h = f.props) == null ? void 0 : h.value) : Cn(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), po(i, r) || (r = i, n && (n.states.optionValues = i)), s;
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
  teleported: Sl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Ln,
    default: ll
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Ln,
    default: sf
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
}), Ac = "ElSelect", Bw = re({
  name: Ac,
  componentName: Ac,
  components: {
    ElSelectMenu: Dw,
    ElOption: El,
    ElOptions: zw,
    ElTag: _w,
    ElScrollbar: Uy,
    ElTooltip: cw,
    ElIcon: pt
  },
  directives: { ClickOutside: ww },
  props: Vw,
  emits: [
    kt,
    Jn,
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
      return Cn(l) ? u ? l : f : u ? f : l;
    }), r = _r({
      ...xs(e),
      modelValue: n
    }), o = Fw(r, t), { calculatorRef: a, inputStyle: s } = xw();
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
  return Tt((x(), W("div", {
    ref: "selectRef",
    class: U([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [gd(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
  }, [
    $(i, {
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
          y("div", {
            ref: "wrapperRef",
            class: U([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Qe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (x(), W("div", {
              key: 0,
              ref: "prefixRef",
              class: U(e.nsSelect.e("prefix"))
            }, [
              ve(e.$slots, "prefix")
            ], 2)) : ee("v-if", !0),
            y("div", {
              ref: "selectionRef",
              class: U([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ve(e.$slots, "tag", { key: 0 }, () => [
                (x(!0), W($t, null, Br(e.showTagList, (g) => (x(), W("div", {
                  key: e.getValueKey(g),
                  class: U(e.nsSelect.e("selected-item"))
                }, [
                  $(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ct(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, g)
                  }, {
                    default: ae(() => [
                      y("span", {
                        class: U(e.nsSelect.e("tags-text"))
                      }, [
                        ve(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Zt(B(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (x(), ie(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ae(() => [
                    y("div", {
                      ref: "collapseItemRef",
                      class: U(e.nsSelect.e("selected-item"))
                    }, [
                      $(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ct(e.collapseTagStyle)
                      }, {
                        default: ae(() => [
                          y("span", {
                            class: U(e.nsSelect.e("tags-text"))
                          }, " + " + B(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ae(() => [
                    y("div", {
                      ref: "tagMenuRef",
                      class: U(e.nsSelect.e("selection"))
                    }, [
                      (x(!0), W($t, null, Br(e.collapseTagList, (g) => (x(), W("div", {
                        key: e.getValueKey(g),
                        class: U(e.nsSelect.e("selected-item"))
                      }, [
                        $(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (S) => e.deleteTag(S, g)
                        }, {
                          default: ae(() => [
                            y("span", {
                              class: U(e.nsSelect.e("tags-text"))
                            }, [
                              ve(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Zt(B(g.currentLabel), 1)
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
                class: U([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Tt(y("input", {
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
                  [vo, e.states.inputValue]
                ]),
                e.filterable ? (x(), W("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: U(e.nsSelect.e("input-calculator")),
                  textContent: B(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (x(), W("div", {
                key: 1,
                class: U([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ve(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  y("span", null, B(e.currentPlaceholder), 1)
                ]) : (x(), W("span", { key: 1 }, B(e.currentPlaceholder), 1))
              ], 2)) : ee("v-if", !0)
            ], 2),
            y("div", {
              ref: "suffixRef",
              class: U(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (x(), ie(l, {
                key: 0,
                class: U([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ae(() => [
                  (x(), ie(zt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (x(), ie(l, {
                key: 1,
                class: U([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ae(() => [
                  (x(), ie(zt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (x(), ie(l, {
                key: 2,
                class: U([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ae(() => [
                  (x(), ie(zt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ae(() => [
        $(p, { ref: "menuRef" }, {
          default: ae(() => [
            e.$slots.header ? (x(), W("div", {
              key: 0,
              class: U(e.nsSelect.be("dropdown", "header")),
              onClick: Qe(() => {
              }, ["stop"])
            }, [
              ve(e.$slots, "header")
            ], 10, ["onClick"])) : ee("v-if", !0),
            Tt($(m, {
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
                e.showNewOption ? (x(), ie(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                $(f, null, {
                  default: ae(() => [
                    ve(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Qn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (x(), W("div", {
              key: 1,
              class: U(e.nsSelect.be("dropdown", "loading"))
            }, [
              ve(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (x(), W("div", {
              key: 2,
              class: U(e.nsSelect.be("dropdown", "empty"))
            }, [
              ve(e.$slots, "empty", {}, () => [
                y("span", null, B(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (x(), W("div", {
              key: 3,
              class: U(e.nsSelect.be("dropdown", "footer")),
              onClick: Qe(() => {
              }, ["stop"])
            }, [
              ve(e.$slots, "footer")
            ], 10, ["onClick"])) : ee("v-if", !0)
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
var Uw = /* @__PURE__ */ Xe(Bw, [["render", jw], ["__file", "select.vue"]]);
const Hw = re({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = ht("select"), n = j(null), r = Bt(), o = j([]);
    Pn(Ff, _r({
      ...xs(e)
    }));
    const a = I(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, m;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const f = cr(u), m = [];
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
  return Tt((x(), W("ul", {
    ref: "groupRef",
    class: U(e.ns.be("group", "wrap"))
  }, [
    y("li", {
      class: U(e.ns.be("group", "title"))
    }, B(e.label), 3),
    y("li", null, [
      y("ul", {
        class: U(e.ns.b("group"))
      }, [
        ve(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Qn, e.visible]
  ]);
}
var zf = /* @__PURE__ */ Xe(Hw, [["render", Ww], ["__file", "option-group.vue"]]);
const Gw = bn(Uw, {
  Option: El,
  OptionGroup: zf
}), Kw = af(El);
af(zf);
const qw = (e) => ["", ...sl].includes(e), Yw = Ke({
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
  [kt]: (e) => dr(e) || Mt(e) || Ne(e),
  [Jn]: (e) => dr(e) || Mt(e) || Ne(e),
  [Xn]: (e) => dr(e) || Mt(e) || Ne(e)
}, Vf = "ElSwitch", Xw = re({
  name: Vf
}), Qw = /* @__PURE__ */ re({
  ...Xw,
  props: Yw,
  emits: Zw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ra(), a = xo(), s = ht("switch"), { inputId: i } = cl(r, {
      formItemContext: o
    }), l = ul(I(() => r.loading)), u = j(r.modelValue !== !1), f = j(), m = j(), p = I(() => [
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
      width: Wr(r.width)
    }));
    ye(() => r.modelValue, () => {
      u.value = !0;
    });
    const S = I(() => u.value ? r.modelValue : !1), d = I(() => S.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(S.value) || (n(kt, r.inactiveValue), n(Jn, r.inactiveValue), n(Xn, r.inactiveValue)), ye(d, (_) => {
      var T;
      f.value.checked = _, r.validateEvent && ((T = o?.validate) == null || T.call(o, "change").catch((O) => void 0));
    });
    const A = () => {
      const _ = d.value ? r.inactiveValue : r.activeValue;
      n(kt, _), n(Jn, _), n(Xn, _), lt(() => {
        f.value.checked = d.value;
      });
    }, L = () => {
      if (l.value)
        return;
      const { beforeChange: _ } = r;
      if (!_) {
        A();
        return;
      }
      const T = _();
      [
        hi(T),
        dr(T)
      ].includes(!0) || ol(Vf, "beforeChange must return type `Promise<boolean>` or `boolean`"), hi(T) ? T.then((G) => {
        G && A();
      }).catch((G) => {
      }) : T && A();
    }, E = () => {
      var _, T;
      (T = (_ = f.value) == null ? void 0 : _.focus) == null || T.call(_);
    };
    return ut(() => {
      f.value.checked = d.value;
    }), t({
      focus: E,
      checked: d
    }), (_, T) => (x(), W("div", {
      class: U(c(p)),
      onClick: Qe(L, ["prevent"])
    }, [
      y("input", {
        id: c(i),
        ref_key: "input",
        ref: f,
        class: U(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(d),
        "aria-disabled": c(l),
        "aria-label": _.ariaLabel,
        name: _.name,
        "true-value": _.activeValue,
        "false-value": _.inactiveValue,
        disabled: c(l),
        tabindex: _.tabindex,
        onChange: A,
        onKeydown: tn(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (x(), W("span", {
        key: 0,
        class: U(c(v))
      }, [
        _.inactiveIcon ? (x(), ie(c(pt), { key: 0 }, {
          default: ae(() => [
            (x(), ie(zt(_.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (x(), W("span", {
          key: 1,
          "aria-hidden": c(d)
        }, B(_.inactiveText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0),
      y("span", {
        ref_key: "core",
        ref: m,
        class: U(c(s).e("core")),
        style: Ct(c(g))
      }, [
        _.inlinePrompt ? (x(), W("div", {
          key: 0,
          class: U(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (x(), ie(c(pt), {
            key: 0,
            class: U(c(s).is("icon"))
          }, {
            default: ae(() => [
              (x(), ie(zt(c(d) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (x(), W("span", {
            key: 1,
            class: U(c(s).is("text")),
            "aria-hidden": !c(d)
          }, B(c(d) ? _.activeText : _.inactiveText), 11, ["aria-hidden"])) : ee("v-if", !0)
        ], 2)) : ee("v-if", !0),
        y("div", {
          class: U(c(s).e("action"))
        }, [
          _.loading ? (x(), ie(c(pt), {
            key: 0,
            class: U(c(s).is("loading"))
          }, {
            default: ae(() => [
              $(c(lf))
            ]),
            _: 1
          }, 8, ["class"])) : c(d) ? ve(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (x(), ie(c(pt), { key: 0 }, {
              default: ae(() => [
                (x(), ie(zt(_.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(d) ? ee("v-if", !0) : ve(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (x(), ie(c(pt), { key: 0 }, {
              default: ae(() => [
                (x(), ie(zt(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (x(), W("span", {
        key: 1,
        class: U(c(h))
      }, [
        _.activeIcon ? (x(), ie(c(pt), { key: 0 }, {
          default: ae(() => [
            (x(), ie(zt(_.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !_.activeIcon && _.activeText ? (x(), W("span", {
          key: 1,
          "aria-hidden": !c(d)
        }, B(_.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var Jw = /* @__PURE__ */ Xe(Qw, [["__file", "switch.vue"]]);
const ek = bn(Jw), Bf = ["success", "info", "warning", "error"], Rt = ff({
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
  appendTo: mt ? document.body : void 0
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
    values: Bf,
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
    }), h = I(() => n.icon || pa[n.type] || ""), g = I(() => ok(n.id)), S = I(() => ak(n.id, n.offset) + g.value), d = I(() => f.value + S.value), A = I(() => ({
      top: `${S.value}px`,
      zIndex: s.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: m } = Wu(() => {
        _();
      }, n.duration));
    }
    function E() {
      m?.();
    }
    function _() {
      u.value = !1;
    }
    function T({ code: O }) {
      O === xn.esc && _();
    }
    return ut(() => {
      L(), i(), u.value = !0;
    }), ye(() => n.repeatNum, () => {
      E(), L();
    }), gn(document, "keydown", T), An(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: _
    }), (O, G) => (x(), ie(Qr, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (K) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        Tt(y("div", {
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
          style: Ct(c(A)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (x(), ie(c(mw), {
            key: 0,
            value: O.repeatNum,
            type: c(p),
            class: U(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(h) ? (x(), ie(c(pt), {
            key: 1,
            class: U([c(o).e("icon"), c(v)])
          }, {
            default: ae(() => [
              (x(), ie(zt(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          ve(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (x(), W($t, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: U(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (x(), W("p", {
              key: 0,
              class: U(c(o).e("content"))
            }, B(O.message), 3))
          ]),
          O.showClose ? (x(), ie(c(pt), {
            key: 2,
            class: U(c(o).e("closeBtn")),
            onClick: Qe(_, ["stop"])
          }, {
            default: ae(() => [
              $(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [Qn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ik = /* @__PURE__ */ Xe(lk, [["__file", "message.vue"]]);
let ck = 1;
const jf = (e) => {
  const t = !e || Mt(e) || bo(e) || et(e) ? { message: e } : e, n = {
    ...Rt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Mt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    hn(r) || (r = document.body), n.appendTo = r;
  }
  return dr(cn.grouping) && !n.grouping && (n.grouping = cn.grouping), Ne(cn.duration) && n.duration === 3e3 && (n.duration = cn.duration), Ne(cn.offset) && n.offset === 16 && (n.offset = cn.offset), dr(cn.showClose) && !n.showClose && (n.showClose = cn.showClose), n;
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
  }, i = $(ik, s, et(s.message) || bo(s.message) ? {
    default: et(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Zr._context, na(i, a), e.appendChild(a.firstElementChild);
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
}, Zr = (e = {}, t) => {
  if (!mt)
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
  if (Ne(cn.max) && mn.length >= cn.max)
    return { close: () => {
    } };
  const r = fk(n, t);
  return mn.push(r), r.handler;
};
Bf.forEach((e) => {
  Zr[e] = (t = {}, n) => {
    const r = jf(t);
    return Zr({ ...r, type: e }, n);
  };
});
function dk(e) {
  for (const t of mn)
    (!e || e === t.props.type) && t.handler.close();
}
Zr.closeAll = dk;
Zr._context = null;
const pk = of(Zr, "$message"), Uf = [
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
    function A({ code: L }) {
      L === xn.delete || L === xn.backspace ? S() : L === xn.esc ? l.value && d() : g();
    }
    return ut(() => {
      g(), a(), l.value = !0;
    }), gn(document, "keydown", A), t({
      visible: l,
      close: d
    }), (L, E) => (x(), ie(Qr, {
      name: c(r).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (_) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        Tt(y("div", {
          id: L.id,
          class: U([c(r).b(), L.customClass, c(p)]),
          style: Ct(c(h)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: g,
          onClick: L.onClick
        }, [
          c(m) ? (x(), ie(c(pt), {
            key: 0,
            class: U([c(r).e("icon"), c(f)])
          }, {
            default: ae(() => [
              (x(), ie(zt(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          y("div", {
            class: U(c(r).e("group"))
          }, [
            y("h2", {
              class: U(c(r).e("title")),
              textContent: B(L.title)
            }, null, 10, ["textContent"]),
            Tt(y("div", {
              class: U(c(r).e("content")),
              style: Ct(L.title ? void 0 : { margin: 0 })
            }, [
              ve(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (x(), W($t, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (x(), W("p", { key: 0 }, B(L.message), 1))
              ])
            ], 6), [
              [Qn, L.message]
            ]),
            L.showClose ? (x(), ie(c(pt), {
              key: 0,
              class: U(c(r).e("closeBtn")),
              onClick: Qe(d, ["stop"])
            }, {
              default: ae(() => [
                $(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Qn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var bk = /* @__PURE__ */ Xe(vk, [["__file", "notification.vue"]]);
const ga = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Cs = 16;
let yk = 1;
const Xr = function(e = {}, t) {
  if (!mt)
    return { close: () => {
    } };
  (Mt(e) || bo(e)) && (e = { message: e });
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
  hn(e.appendTo) ? i = e.appendTo : Mt(e.appendTo) && (i = document.querySelector(e.appendTo)), hn(i) || (i = document.body);
  const l = document.createElement("div"), u = $(bk, s, et(s.message) ? s.message : bo(s.message) ? () => s.message : null);
  return u.appContext = On(t) ? Xr._context : t, u.props.onDestroy = () => {
    na(null, l);
  }, na(u, l), ga[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Uf.forEach((e) => {
  Xr[e] = (t = {}, n) => ((Mt(t) || bo(t)) && (t = {
    message: t
  }), Xr({ ...t, type: e }, n));
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
Xr.closeAll = wk;
Xr._context = null;
const kk = of(Xr, "$notify"), Ft = {
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
async function It(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Cc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Cc || (Cc = {}));
async function Sk(e, t) {
  await It("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ek(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return It("plugin:event|listen", {
    event: e,
    target: o,
    handler: Tk(t)
  }).then((a) => async () => Sk(e, a));
}
const Ak = "snippets-code:developer-mode", Hf = "snippets-code:frontend-diagnostics", Ck = 240, ao = "[REDACTED]", ta = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${ao}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${ao}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  ao
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${ao}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${ao}`
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
}, Al = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ak) === "true";
  } catch {
    return !1;
  }
}, Ik = (e, t, n) => {
  if (!Al() || typeof localStorage > "u") return;
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
      JSON.stringify(r.slice(-Ck))
    );
  } catch {
  }
}, xk = () => Al(), Rk = (e) => e === "warn" || e === "error" || !1 || !1 || Al(), qo = (e, t, n) => {
  Ik(e, t, n), Rk(e) && It("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Wf(n)
  }).catch(() => {
  });
}, un = {
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
    xk() && qo("debug", e, t);
  }
};
async function Gf() {
  return await It("local_ai_get_config");
}
async function Xa(e) {
  return await It("local_ai_save_config", { config: e });
}
async function Pk(e) {
  return await It("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Nk() {
  return await It("local_ai_get_runtime_status");
}
async function Kf() {
  return await It("local_ai_get_status");
}
async function $k(e) {
  return await It("local_ai_start_service", {
    config: e ?? null
  });
}
async function Mk() {
  return await It("local_ai_restart_service");
}
async function Dk() {
  await It("local_ai_stop_service");
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
async function Vk(e) {
  return await It("local_ai_save_chat_history", {
    history: e
  });
}
async function Bk(e) {
  return await It("local_ai_delete_chat_history", {
    historyId: e
  });
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
let jt = Object.freeze, an = Object.seal, zr = Object.create, Zf = typeof Reflect < "u" && Reflect, Os = Zf.apply, Ls = Zf.construct;
jt || (jt = function(t) {
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
const Nr = gt(Array.prototype.forEach), Zk = gt(Array.prototype.lastIndexOf), Ic = gt(Array.prototype.pop), $r = gt(Array.prototype.push), Xk = gt(Array.prototype.splice), Dt = Array.isArray, co = gt(String.prototype.toLowerCase), Ja = gt(String.prototype.toString), xc = gt(String.prototype.match), Mr = gt(String.prototype.replace), Rc = gt(String.prototype.indexOf), Qk = gt(String.prototype.trim), Jk = gt(Number.prototype.toString), eT = gt(Boolean.prototype.toString), Pc = typeof BigInt > "u" ? null : gt(BigInt.prototype.toString), Nc = typeof Symbol > "u" ? null : gt(Symbol.prototype.toString), ot = gt(Object.prototype.hasOwnProperty), so = gt(Object.prototype.toString), At = gt(RegExp.prototype.test), lo = tT(TypeError);
function gt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Os(e, t, r);
  };
}
function tT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ls(e, n);
  };
}
function ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : co;
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
function Pt(e) {
  const t = zr(null);
  for (const r of Yf(e)) {
    var n = Wk(r, 2);
    const o = n[0], a = n[1];
    ot(e, o) && (Dt(a) ? t[o] = nT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Pt(a) : t[o] = a);
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
      return so(e);
    case "function":
    case "object": {
      if (e === null)
        return so(e);
      const t = e, n = En(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : so(r);
      }
      return so(e);
    }
    default:
      return so(e);
  }
}
function En(e, t) {
  for (; e !== null; ) {
    const r = Yk(e, t);
    if (r) {
      if (r.get)
        return gt(r.get);
      if (typeof r.value == "function")
        return gt(r.value);
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
const $c = jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), es = jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ts = jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), aT = jt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ns = jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sT = jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Mc = jt(["#text"]), Dc = jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), rs = jt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fc = jt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yo = jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lT = an(/{{[\w\W]*|^[\w\W]*}}/g), iT = an(/<%[\w\W]*|^[\w\W]*%>/g), cT = an(/\${[\w\W]*/g), uT = an(/^data-[\-\w.\u00B7-\uFFFF]+$/), fT = an(/^aria-[\-\w]+$/), zc = an(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dT = an(/^(?:\w+script|data):/i), pT = an(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), mT = an(/^html$/i), hT = an(/^[a-z][.\w]*(-[.\w]+)+$/i), Sn = {
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
function Xf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gT();
  const t = (se) => Xf(se);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Sn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, m = e.trustedTypes, p = i.prototype, v = En(p, "cloneNode"), h = En(p, "remove"), g = En(p, "nextSibling"), S = En(p, "childNodes"), d = En(p, "parentNode"), A = En(p, "shadowRoot"), L = En(p, "attributes"), E = s && s.prototype ? En(s.prototype, "nodeType") : null, _ = s && s.prototype ? En(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let T, O = "";
  const G = n, K = G.implementation, te = G.createNodeIterator, pe = G.createDocumentFragment, ne = G.getElementsByTagName, be = r.importNode;
  let me = Vc();
  t.isSupported = typeof Yf == "function" && typeof d == "function" && K && K.createHTMLDocument !== void 0;
  const N = lT, R = iT, V = cT, ce = uT, Q = fT, we = dT, Y = pT, Ve = hT;
  let Oe = zc, Te = null;
  const qe = ke({}, [...$c, ...es, ...ts, ...ns, ...Mc]);
  let Se = null;
  const tt = ke({}, [...Dc, ...rs, ...Fc, ...Yo]);
  let ue = Object.seal(zr(null, {
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
  })), nt = null, ft = null;
  const Ue = Object.seal(zr(null, {
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
  let St = !0, at = !0, vt = !1, st = !0, $e = !1, bt = !0, w = !1, C = !1, F = !1, Z = !1, Ee = !1, fe = !1, k = !0, D = !1;
  const ge = "user-content-";
  let Ae = !0, Ye = !1, xt = {}, He = null;
  const Fn = ke({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let rr = null;
  const Lr = ke({}, ["audio", "video", "img", "source", "image", "track"]);
  let M = null;
  const q = ke({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), H = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", de = "http://www.w3.org/1999/xhtml";
  let Be = de, Et = !1, dt = null;
  const sn = ke({}, [H, le, de], Ja);
  let Kt = ke({}, ["mi", "mo", "mn", "ms", "mtext"]), or = ke({}, ["annotation-xml"]);
  const yn = ke({}, ["title", "style", "font", "a", "script"]);
  let Ze = null;
  const _n = ["application/xhtml+xml", "text/html"], Da = "text/html";
  let je = null, ar = null;
  const Fa = n.createElement("form"), No = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Ir = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ar && ar === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = Pt(b), Ze = // eslint-disable-next-line unicorn/prefer-includes
    _n.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Da : b.PARSER_MEDIA_TYPE, je = Ze === "application/xhtml+xml" ? Ja : co, Te = ot(b, "ALLOWED_TAGS") && Dt(b.ALLOWED_TAGS) ? ke({}, b.ALLOWED_TAGS, je) : qe, Se = ot(b, "ALLOWED_ATTR") && Dt(b.ALLOWED_ATTR) ? ke({}, b.ALLOWED_ATTR, je) : tt, dt = ot(b, "ALLOWED_NAMESPACES") && Dt(b.ALLOWED_NAMESPACES) ? ke({}, b.ALLOWED_NAMESPACES, Ja) : sn, M = ot(b, "ADD_URI_SAFE_ATTR") && Dt(b.ADD_URI_SAFE_ATTR) ? ke(Pt(q), b.ADD_URI_SAFE_ATTR, je) : q, rr = ot(b, "ADD_DATA_URI_TAGS") && Dt(b.ADD_DATA_URI_TAGS) ? ke(Pt(Lr), b.ADD_DATA_URI_TAGS, je) : Lr, He = ot(b, "FORBID_CONTENTS") && Dt(b.FORBID_CONTENTS) ? ke({}, b.FORBID_CONTENTS, je) : Fn, nt = ot(b, "FORBID_TAGS") && Dt(b.FORBID_TAGS) ? ke({}, b.FORBID_TAGS, je) : Pt({}), ft = ot(b, "FORBID_ATTR") && Dt(b.FORBID_ATTR) ? ke({}, b.FORBID_ATTR, je) : Pt({}), xt = ot(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? Pt(b.USE_PROFILES) : b.USE_PROFILES : !1, St = b.ALLOW_ARIA_ATTR !== !1, at = b.ALLOW_DATA_ATTR !== !1, vt = b.ALLOW_UNKNOWN_PROTOCOLS || !1, st = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $e = b.SAFE_FOR_TEMPLATES || !1, bt = b.SAFE_FOR_XML !== !1, w = b.WHOLE_DOCUMENT || !1, Z = b.RETURN_DOM || !1, Ee = b.RETURN_DOM_FRAGMENT || !1, fe = b.RETURN_TRUSTED_TYPE || !1, F = b.FORCE_BODY || !1, k = b.SANITIZE_DOM !== !1, D = b.SANITIZE_NAMED_PROPS || !1, Ae = b.KEEP_CONTENT !== !1, Ye = b.IN_PLACE || !1, Oe = oT(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : zc, Be = typeof b.NAMESPACE == "string" ? b.NAMESPACE : de, Kt = ot(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Pt(b.MATHML_TEXT_INTEGRATION_POINTS) : ke({}, ["mi", "mo", "mn", "ms", "mtext"]), or = ot(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? Pt(b.HTML_INTEGRATION_POINTS) : ke({}, ["annotation-xml"]);
    const z = ot(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? Pt(b.CUSTOM_ELEMENT_HANDLING) : zr(null);
    if (ue = zr(null), ot(z, "tagNameCheck") && No(z.tagNameCheck) && (ue.tagNameCheck = z.tagNameCheck), ot(z, "attributeNameCheck") && No(z.attributeNameCheck) && (ue.attributeNameCheck = z.attributeNameCheck), ot(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ue.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), $e && (at = !1), Ee && (Z = !0), xt && (Te = ke({}, Mc), Se = zr(null), xt.html === !0 && (ke(Te, $c), ke(Se, Dc)), xt.svg === !0 && (ke(Te, es), ke(Se, rs), ke(Se, Yo)), xt.svgFilters === !0 && (ke(Te, ts), ke(Se, rs), ke(Se, Yo)), xt.mathMl === !0 && (ke(Te, ns), ke(Se, Fc), ke(Se, Yo))), Ue.tagCheck = null, Ue.attributeCheck = null, ot(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? Ue.tagCheck = b.ADD_TAGS : Dt(b.ADD_TAGS) && (Te === qe && (Te = Pt(Te)), ke(Te, b.ADD_TAGS, je))), ot(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? Ue.attributeCheck = b.ADD_ATTR : Dt(b.ADD_ATTR) && (Se === tt && (Se = Pt(Se)), ke(Se, b.ADD_ATTR, je))), ot(b, "ADD_URI_SAFE_ATTR") && Dt(b.ADD_URI_SAFE_ATTR) && ke(M, b.ADD_URI_SAFE_ATTR, je), ot(b, "FORBID_CONTENTS") && Dt(b.FORBID_CONTENTS) && (He === Fn && (He = Pt(He)), ke(He, b.FORBID_CONTENTS, je)), ot(b, "ADD_FORBID_CONTENTS") && Dt(b.ADD_FORBID_CONTENTS) && (He === Fn && (He = Pt(He)), ke(He, b.ADD_FORBID_CONTENTS, je)), Ae && (Te["#text"] = !0), w && ke(Te, ["html", "head", "body"]), Te.table && (ke(Te, ["tbody"]), delete nt.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      T = b.TRUSTED_TYPES_POLICY, O = T.createHTML("");
    } else
      T === void 0 && (T = vT(m, o)), T !== null && typeof O == "string" && (O = T.createHTML(""));
    (me.uponSanitizeElement.length > 0 || me.uponSanitizeAttribute.length > 0) && Te === qe && (Te = Pt(Te)), me.uponSanitizeAttribute.length > 0 && Se === tt && (Se = Pt(Se)), jt && jt(b), ar = b;
  }, $o = ke({}, [...es, ...ts, ...aT]), Mo = ke({}, [...ns, ...sT]), za = function(b) {
    let z = d(b);
    (!z || !z.tagName) && (z = {
      namespaceURI: Be,
      tagName: "template"
    });
    const J = co(b.tagName), Re = co(z.tagName);
    return dt[b.namespaceURI] ? b.namespaceURI === le ? z.namespaceURI === de ? J === "svg" : z.namespaceURI === H ? J === "svg" && (Re === "annotation-xml" || Kt[Re]) : !!$o[J] : b.namespaceURI === H ? z.namespaceURI === de ? J === "math" : z.namespaceURI === le ? J === "math" && or[Re] : !!Mo[J] : b.namespaceURI === de ? z.namespaceURI === le && !or[Re] || z.namespaceURI === H && !Kt[Re] ? !1 : !Mo[J] && (yn[J] || !$o[J]) : !!(Ze === "application/xhtml+xml" && dt[b.namespaceURI]) : !1;
  }, qt = function(b) {
    $r(t.removed, {
      element: b
    });
    try {
      d(b).removeChild(b);
    } catch {
      h(b);
    }
  }, P = function(b, z) {
    try {
      $r(t.removed, {
        attribute: z.getAttributeNode(b),
        from: z
      });
    } catch {
      $r(t.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(b), b === "is")
      if (Z || Ee)
        try {
          qt(z);
        } catch {
        }
      else
        try {
          z.setAttribute(b, "");
        } catch {
        }
  }, X = function(b) {
    let z = null, J = null;
    if (F)
      b = "<remove></remove>" + b;
    else {
      const We = xc(b, /^[\r\n\t ]+/);
      J = We && We[0];
    }
    Ze === "application/xhtml+xml" && Be === de && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const Re = T ? T.createHTML(b) : b;
    if (Be === de)
      try {
        z = new f().parseFromString(Re, Ze);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = K.createDocument(Be, "template", null);
      try {
        z.documentElement.innerHTML = Et ? O : Re;
      } catch {
      }
    }
    const Ce = z.body || z.documentElement;
    return b && J && Ce.insertBefore(n.createTextNode(J), Ce.childNodes[0] || null), Be === de ? ne.call(z, w ? "html" : "body")[0] : w ? z.documentElement : Ce;
  }, _e = function(b) {
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
    let J = z.nextNode();
    for (; J; ) {
      let Re = J.data;
      Nr([N, R, V], (Ce) => {
        Re = Mr(Re, Ce, " ");
      }), J.data = Re, J = z.nextNode();
    }
  }, yt = function(b) {
    const z = _ ? _(b) : null;
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
  }, Jt = function(b) {
    if (!E || typeof b != "object" || b === null)
      return !1;
    try {
      return E(b) === Sn.documentFragment;
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
    Nr(se, (J) => {
      J.call(t, b, z, ar);
    });
  }
  const sr = function(b) {
    let z = null;
    if (Ut(me.beforeSanitizeElements, b, null), yt(b))
      return qt(b), !0;
    const J = je(b.nodeName);
    if (Ut(me.uponSanitizeElement, b, {
      tagName: J,
      allowedTags: Te
    }), bt && b.hasChildNodes() && !Yt(b.firstElementChild) && At(/<[/\w!]/g, b.innerHTML) && At(/<[/\w!]/g, b.textContent) || bt && b.namespaceURI === de && J === "style" && Yt(b.firstElementChild) || b.nodeType === Sn.progressingInstruction || bt && b.nodeType === Sn.comment && At(/<[/\w]/g, b.data))
      return qt(b), !0;
    if (nt[J] || !(Ue.tagCheck instanceof Function && Ue.tagCheck(J)) && !Te[J]) {
      if (!nt[J] && Cl(J) && (ue.tagNameCheck instanceof RegExp && At(ue.tagNameCheck, J) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(J)))
        return !1;
      if (Ae && !He[J]) {
        const Ce = d(b), We = S(b);
        if (We && Ce) {
          const en = We.length;
          for (let wn = en - 1; wn >= 0; --wn) {
            const ln = v(We[wn], !0);
            Ce.insertBefore(ln, g(b));
          }
        }
      }
      return qt(b), !0;
    }
    return (E ? E(b) : b.nodeType) === Sn.element && !za(b) || (J === "noscript" || J === "noembed" || J === "noframes") && At(/<\/no(script|embed|frames)/i, b.innerHTML) ? (qt(b), !0) : ($e && b.nodeType === Sn.text && (z = b.textContent, Nr([N, R, V], (Ce) => {
      z = Mr(z, Ce, " ");
    }), b.textContent !== z && ($r(t.removed, {
      element: b.cloneNode()
    }), b.textContent = z)), Ut(me.afterSanitizeElements, b, null), !1);
  }, Do = function(b, z, J) {
    if (ft[z] || k && (z === "id" || z === "name") && (J in n || J in Fa))
      return !1;
    const Re = Se[z] || Ue.attributeCheck instanceof Function && Ue.attributeCheck(z, b);
    if (!(at && !ft[z] && At(ce, z))) {
      if (!(St && At(Q, z))) {
        if (!Re || ft[z]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Cl(b) && (ue.tagNameCheck instanceof RegExp && At(ue.tagNameCheck, b) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(b)) && (ue.attributeNameCheck instanceof RegExp && At(ue.attributeNameCheck, z) || ue.attributeNameCheck instanceof Function && ue.attributeNameCheck(z, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            z === "is" && ue.allowCustomizedBuiltInElements && (ue.tagNameCheck instanceof RegExp && At(ue.tagNameCheck, J) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(J)))
          ) return !1;
        } else if (!M[z]) {
          if (!At(Oe, Mr(J, Y, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && b !== "script" && Rc(J, "data:") === 0 && rr[b])) {
              if (!(vt && !At(we, Mr(J, Y, "")))) {
                if (J)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Qf = ke({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Cl = function(b) {
    return !Qf[co(b)] && At(Ve, b);
  }, Ol = function(b) {
    Ut(me.beforeSanitizeAttributes, b, null);
    const z = b.attributes;
    if (!z || yt(b))
      return;
    const J = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Se,
      forceKeepAttr: void 0
    };
    let Re = z.length;
    for (; Re--; ) {
      const Ce = z[Re], We = Ce.name, en = Ce.namespaceURI, wn = Ce.value, ln = je(We), Va = wn;
      let _t = We === "value" ? Va : Qk(Va);
      if (J.attrName = ln, J.attrValue = _t, J.keepAttr = !0, J.forceKeepAttr = void 0, Ut(me.uponSanitizeAttribute, b, J), _t = J.attrValue, D && (ln === "id" || ln === "name") && Rc(_t, ge) !== 0 && (P(We, b), _t = ge + _t), bt && At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _t)) {
        P(We, b);
        continue;
      }
      if (ln === "attributename" && xc(_t, "href")) {
        P(We, b);
        continue;
      }
      if (J.forceKeepAttr)
        continue;
      if (!J.keepAttr) {
        P(We, b);
        continue;
      }
      if (!st && At(/\/>/i, _t)) {
        P(We, b);
        continue;
      }
      $e && Nr([N, R, V], (Il) => {
        _t = Mr(_t, Il, " ");
      });
      const Ll = je(b.nodeName);
      if (!Do(Ll, ln, _t)) {
        P(We, b);
        continue;
      }
      if (T && typeof m == "object" && typeof m.getAttributeType == "function" && !en)
        switch (m.getAttributeType(Ll, ln)) {
          case "TrustedHTML": {
            _t = T.createHTML(_t);
            break;
          }
          case "TrustedScriptURL": {
            _t = T.createScriptURL(_t);
            break;
          }
        }
      if (_t !== Va)
        try {
          en ? b.setAttributeNS(en, We, _t) : b.setAttribute(We, _t), yt(b) ? qt(b) : Ic(t.removed);
        } catch {
          P(We, b);
        }
    }
    Ut(me.afterSanitizeAttributes, b, null);
  }, Fo = function(b) {
    let z = null;
    const J = _e(b);
    for (Ut(me.beforeSanitizeShadowDOM, b, null); z = J.nextNode(); )
      if (Ut(me.uponSanitizeShadowNode, z, null), sr(z), Ol(z), Jt(z.content) && Fo(z.content), (E ? E(z) : z.nodeType) === Sn.element) {
        const Ce = A ? A(z) : z.shadowRoot;
        Jt(Ce) && (xr(Ce), Fo(Ce));
      }
    Ut(me.afterSanitizeShadowDOM, b, null);
  }, xr = function(b) {
    const z = E ? E(b) : b.nodeType;
    if (z === Sn.element) {
      const Ce = A ? A(b) : b.shadowRoot;
      Jt(Ce) && (xr(Ce), Fo(Ce));
    }
    const J = S ? S(b) : b.childNodes;
    if (!J)
      return;
    const Re = [];
    Nr(J, (Ce) => {
      $r(Re, Ce);
    });
    for (const Ce of Re)
      xr(Ce);
    if (z === Sn.element) {
      const Ce = _ ? _(b) : null;
      if (typeof Ce == "string" && je(Ce) === "template") {
        const We = b.content;
        Jt(We) && xr(We);
      }
    }
  };
  return t.sanitize = function(se) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, J = null, Re = null, Ce = null;
    if (Et = !se, Et && (se = "<!-->"), typeof se != "string" && !Yt(se) && (se = rT(se), typeof se != "string"))
      throw lo("dirty is not a string, aborting");
    if (!t.isSupported)
      return se;
    if (C || Ir(b), t.removed = [], typeof se == "string" && (Ye = !1), Ye) {
      const wn = _ ? _(se) : se.nodeName;
      if (typeof wn == "string") {
        const ln = je(wn);
        if (!Te[ln] || nt[ln])
          throw lo("root node is forbidden and cannot be sanitized in-place");
      }
      if (yt(se))
        throw lo("root node is clobbered and cannot be sanitized in-place");
      xr(se);
    } else if (Yt(se))
      z = X("<!---->"), J = z.ownerDocument.importNode(se, !0), J.nodeType === Sn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? z = J : z.appendChild(J), xr(J);
    else {
      if (!Z && !$e && !w && // eslint-disable-next-line unicorn/prefer-includes
      se.indexOf("<") === -1)
        return T && fe ? T.createHTML(se) : se;
      if (z = X(se), !z)
        return Z ? null : fe ? O : "";
    }
    z && F && qt(z.firstChild);
    const We = _e(Ye ? se : z);
    for (; Re = We.nextNode(); )
      sr(Re), Ol(Re), Jt(Re.content) && Fo(Re.content);
    if (Ye)
      return $e && rt(se), se;
    if (Z) {
      if ($e && rt(z), Ee)
        for (Ce = pe.call(z.ownerDocument); z.firstChild; )
          Ce.appendChild(z.firstChild);
      else
        Ce = z;
      return (Se.shadowroot || Se.shadowrootmode) && (Ce = be.call(r, Ce, !0)), Ce;
    }
    let en = w ? z.outerHTML : z.innerHTML;
    return w && Te["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && At(mT, z.ownerDocument.doctype.name) && (en = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + en), $e && Nr([N, R, V], (wn) => {
      en = Mr(en, wn, " ");
    }), T && fe ? T.createHTML(en) : en;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ir(se), C = !0;
  }, t.clearConfig = function() {
    ar = null, C = !1;
  }, t.isValidAttribute = function(se, b, z) {
    ar || Ir({});
    const J = je(se), Re = je(b);
    return Do(J, Re, z);
  }, t.addHook = function(se, b) {
    typeof b == "function" && $r(me[se], b);
  }, t.removeHook = function(se, b) {
    if (b !== void 0) {
      const z = Zk(me[se], b);
      return z === -1 ? void 0 : Xk(me[se], z, 1)[0];
    }
    return Ic(me[se]);
  }, t.removeHooks = function(se) {
    me[se] = [];
  }, t.removeAllHooks = function() {
    me = Vc();
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
const wT = { class: "local-ai-chat-shell" }, kT = { class: "chat-sidebar" }, TT = { class: "sidebar-header" }, ST = { class: "sidebar-title-block" }, ET = { class: "sidebar-actions" }, AT = ["title"], CT = ["title"], OT = { class: "sidebar-search" }, LT = ["placeholder"], IT = { class: "sidebar-section recent-section" }, xT = { class: "section-title" }, RT = {
  key: 0,
  class: "chat-list"
}, PT = ["onClick", "onKeydown"], NT = { class: "chat-item-title" }, $T = { class: "chat-item-time" }, MT = ["title", "onClick"], DT = {
  key: 1,
  class: "sidebar-empty"
}, FT = { class: "chat-panel" }, zT = { class: "chat-topbar" }, VT = { class: "chat-topbar-main" }, BT = { class: "chat-title-row" }, jT = { class: "service-url" }, UT = { class: "chat-topbar-actions" }, HT = ["title"], WT = { class: "date-divider" }, GT = {
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
}, uS = ["title", "onClick"], fS = ["title", "onClick"], dS = ["title"], pS = ["title"], mS = ["title", "onClick"], hS = ["title", "onClick"], gS = ["title"], vS = ["placeholder", "onKeydown"], bS = { class: "input-toolbar" }, yS = { class: "input-toolbar-left" }, _S = ["title"], wS = ["title", "aria-pressed"], kS = { class: "model-select-shell" }, TS = ["value"], SS = ["value"], ES = { class: "input-toolbar-right" }, AS = ["title", "aria-label"], CS = ["disabled", "title", "aria-label"], OS = 96, LS = /* @__PURE__ */ re({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Co(), n = j(""), r = j([]), o = j(""), a = j(""), s = j(!1), i = j(!1), l = j(!1), u = j(!0), f = j(!0), m = j(!1), p = j(null), v = j(null), h = j(null), g = j(null), S = j(Date.now());
    let d = null, A = null;
    const L = /* @__PURE__ */ new Map(), E = I(() => !!a.value.trim() && !s.value), _ = I(() => h.value?.healthy ? t("localAi.serviceHealthy") : h.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), T = I(
      () => r.value.find((M) => M.id === o.value) ?? null
    ), O = I(() => T.value?.messages ?? []), G = (M) => M ? M.split(/[\\/]+/).pop() ?? M : "", K = I(
      () => G(h.value?.modelPath) || G(v.value?.modelPath) || t("localAi.localModel")
    ), te = I(() => {
      const M = n.value.trim().toLowerCase();
      return r.value.filter(
        (q) => !M || q.title.toLowerCase().includes(M) || q.messages.some(
          (H) => H.content.toLowerCase().includes(M)
        )
      ).slice().sort((q, H) => H.updatedAt.localeCompare(q.updatedAt));
    }), pe = () => t("localAi.now"), ne = () => {
      const M = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: M,
        updatedAt: M,
        updatedAtLabel: pe(),
        messages: []
      };
    }, be = () => {
      const M = g.value;
      return M ? M.scrollHeight - M.scrollTop - M.clientHeight <= OS : !0;
    }, me = () => {
      const M = be();
      f.value = M, m.value = !M;
    }, N = () => {
      me();
    }, R = async (M = {}) => {
      await lt();
      const q = g.value;
      !q || !M.force && !f.value || (q.scrollTop = q.scrollHeight, me());
    }, V = () => {
      f.value = !0, R({ force: !0 });
    }, ce = async () => {
      try {
        v.value = await Gf();
      } catch (M) {
        un.warn("[LocalAI] refresh chat config failed", M);
      }
    }, Q = async () => {
      i.value = !0;
      try {
        h.value = await Kf();
      } catch (M) {
        un.warn("[LocalAI] refresh chat status failed", M);
      } finally {
        i.value = !1;
      }
    }, we = async () => {
      try {
        const M = await zk();
        r.value = M.map((q) => ({
          id: q.id,
          title: q.title,
          createdAt: q.createdAt,
          updatedAt: q.updatedAt,
          updatedAtLabel: new Date(q.updatedAt).toLocaleString(),
          messages: q.turns.map((H) => ({
            id: H.id,
            role: H.role,
            content: H.content,
            createdAt: H.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (M) {
        un.warn("[LocalAI] refresh histories failed", M);
      }
    }, Y = async () => {
      await Promise.all([ce(), Q(), we()]);
    }, Ve = async () => {
      const M = T.value;
      M && await Vk({
        id: M.id,
        title: M.title,
        createdAt: M.createdAt,
        updatedAt: M.updatedAt,
        turns: M.messages.map((q) => ({
          id: q.id,
          role: q.role,
          content: q.content,
          createdAt: q.createdAt
        }))
      });
    }, Oe = () => {
      const M = ne();
      r.value.unshift(M), o.value = M.id, a.value = "";
    }, Te = () => {
      T.value || Oe();
    }, qe = (M) => {
      o.value = M, f.value = !0, R({ force: !0 });
    }, Se = async (M) => {
      r.value = r.value.filter((q) => q.id !== M), await Bk(M), o.value === M && (o.value = r.value[0]?.id ?? "");
    }, tt = (M) => {
      const q = M.trimStart();
      return /^\/(?:no_)?think\b/i.test(q) ? M : `${u.value ? "/think" : "/no_think"}
${M}`;
    }, ue = (M = {}) => {
      const q = O.value.filter((le) => !le.streaming), H = M.applyThinkingDirective ? q.map((le) => le.role).lastIndexOf("user") : -1;
      return q.map((le, de) => ({
        role: le.role,
        content: de === H && le.role === "user" ? tt(le.content) : le.content
      }));
    }, nt = (M) => {
      const q = L.get(M);
      if (q) return q;
      const H = _T(Me.parse(M, { async: !1 }));
      if (L.set(M, H), L.size > 80) {
        const le = L.keys().next().value;
        typeof le == "string" && L.delete(le);
      }
      return H;
    }, ft = (M) => {
      const q = M.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!q || q.index === void 0)
        return { reasoning: "", answer: M };
      const H = M.slice(0, q.index).trim(), le = q[0], de = M.slice(q.index + le.length).trim();
      return {
        reasoning: (q[1] ?? "").trim(),
        answer: [H, de].filter(Boolean).join(`

`)
      };
    }, Ue = (M) => ft(M).reasoning, St = (M) => ft(M).answer, at = (M) => {
      const q = M.trim();
      if (!q) return 0;
      const H = (q.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Be = (q.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((Et, dt) => /^[A-Za-z0-9_]+$/.test(dt) ? Et + Math.max(1, Math.ceil(dt.length / 4)) : Et + 1, 0);
      return Math.max(1, Math.ceil(H + Be));
    }, vt = (M) => at(
      M.map((q) => `${q.role}: ${q.content}`).join(`
`)
    ), st = (M) => new Date(
      M.createdAt || T.value?.updatedAt || Date.now()
    ), $e = (M) => {
      const q = S.value, H = O.value.findIndex(
        (Kt) => Kt.id === M.id
      ), le = M.stats?.promptTokens ?? M.promptTokens ?? at(
        O.value.slice(0, Math.max(0, H)).map((Kt) => Kt.content).join(`
`)
      ), de = M.stats?.completionTokens ?? at(M.content), Be = M.stats?.totalTokens ?? le + de, Et = v.value?.ctxSize ?? 4096, dt = (M.stats?.generationTimeMs ?? M.elapsedMs ?? q - st(M).getTime()) / 1e3, sn = M.stats?.tokensPerSecond ?? (dt > 0 ? de / dt : 0);
      return {
        context: Be,
        contextMax: Et,
        contextPercent: Math.min(100, Math.round(Be / Et * 100)),
        output: de,
        outputMax: (v.value?.maxTokens ?? 0) > 0 ? String(v.value?.maxTokens) : "∞",
        seconds: dt.toFixed(1),
        speed: sn.toFixed(1)
      };
    }, bt = (M) => M.repetitionStopped ? t("localAi.repetitionStopped") : M.interrupted ? t("localAi.streamInterrupted") : M.stopped ? t("localAi.generationStopped") : M.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", w = (M) => {
      const q = M.replace(/\s+/g, " ").trim();
      if (q.length < 220) return !1;
      const le = q.slice(-800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((de) => de.toLowerCase()) ?? [];
      if (le.length < 36) return !1;
      for (let de = 1; de <= 8; de += 1) {
        const Be = le.slice(-de).join("\0");
        let Et = 1;
        for (let dt = le.length - de * 2; dt >= 0 && le.slice(dt, dt + de).join("\0") === Be; dt -= de)
          Et += 1;
        if (Et >= Math.max(5, Math.ceil(18 / de))) return !0;
      }
      return !1;
    }, C = () => {
      A || (S.value = Date.now(), A = setInterval(() => {
        S.value = Date.now();
      }, 250));
    }, F = () => {
      A && (clearInterval(A), A = null, S.value = Date.now());
    }, Z = async (M) => {
      const q = performance.now(), H = qf();
      let le = "", de = null, Be = null, Et = !1, dt = !1;
      p.value = H, l.value = !1;
      const sn = async () => {
        if (!le) {
          de = null, Be?.(), Be = null;
          return;
        }
        const Ze = l.value ? 240 : le.length > 240 ? 18 : 6;
        M.content += le.slice(0, Ze), le = le.slice(Ze), !dt && !l.value && w(M.content) && (dt = !0, l.value = !0, M.repetitionStopped = !0, Qa(H).catch(
          (_n) => un.warn("[LocalAI] repetition stop failed", _n)
        )), await R(), de = window.setTimeout(() => {
          sn().catch(
            (_n) => un.warn("[LocalAI] stream pump failed", _n)
          );
        }, 24);
      }, Kt = (Ze) => {
        Ze && (le += Ze, de === null && (de = window.setTimeout(() => {
          sn().catch(
            (_n) => un.warn("[LocalAI] stream pump failed", _n)
          );
        }, 12)));
      }, or = async () => {
        !le && de === null || await new Promise((Ze) => {
          Be = Ze;
        });
      }, yn = await Fk(
        { messages: ue({ applyThinkingDirective: !0 }) },
        (Ze) => {
          Et = !0, Kt(Ze);
        },
        {
          requestId: H,
          onStats: (Ze) => {
            M.stats = Ze, S.value = Date.now();
          }
        }
      ).catch(async (Ze) => {
        throw await or(), Ze;
      });
      if (!Et)
        Kt(yn.content);
      else if (!l.value) {
        const Ze = M.content.length + le.length;
        yn.content.length > Ze && Kt(yn.content.slice(Ze));
      }
      await or(), !l.value && yn.content && M.content !== yn.content && (M.content = yn.content), M.streaming = !1, M.elapsedMs = performance.now() - q, M.stopped = l.value, M.interrupted = !1, M.error = "", S.value = Date.now(), p.value = null;
    }, Ee = async () => {
      const M = p.value;
      if (!(!s.value || !M || l.value)) {
        l.value = !0;
        try {
          await Qa(M);
        } catch (q) {
          un.warn("[LocalAI] cancel stream failed", q);
        }
      }
    }, fe = async () => {
      const M = a.value.trim();
      if (!M || s.value) return;
      Te();
      const q = (/* @__PURE__ */ new Date()).toISOString();
      T.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: M,
        createdAt: q
      });
      const H = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        promptTokens: vt(
          ue({ applyThinkingDirective: !0 })
        )
      };
      T.value?.messages.push(H), a.value = "", s.value = !0, C(), await R({ force: !0 });
      try {
        await Z(H), T.value && (T.value.title = T.value.title === t("localAi.newChatTitle") ? M.slice(0, 28) : T.value.title, T.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.value.updatedAtLabel = new Date(
          T.value.updatedAt
        ).toLocaleString(), await Ve()), await Q();
      } catch (le) {
        l.value || (Ft.msg(`${t("localAi.chatFailed")}: ${le}`, "error"), H.error = String(le), H.interrupted = !!H.content.trim(), H.interrupted || (H.content = String(le)), T.value && (T.value.title = T.value.title === t("localAi.newChatTitle") ? M.slice(0, 28) : T.value.title, T.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.value.updatedAtLabel = new Date(
          T.value.updatedAt
        ).toLocaleString(), await Ve())), H.streaming = !1, H.elapsedMs = performance.now() - st(H).getTime();
      } finally {
        s.value = !1, p.value = null, F(), await R();
      }
    }, k = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, D = () => {
      n.value = "";
    }, ge = () => {
      Ft.msg(t("localAi.moreComingSoon"));
    }, Ae = (M) => st(M).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Ye = (M) => {
      const q = new Date(M), H = /* @__PURE__ */ new Date(), le = H.getTime() - q.getTime(), de = 24 * 60 * 60 * 1e3;
      return q.toDateString() === H.toDateString() ? q.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : le < de * 2 ? t("localAi.yesterday") : le < de * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(le / de))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(le / (de * 7)))
      });
    }, xt = async (M) => {
      try {
        await navigator.clipboard.writeText(M.content), Ft.msg(t("localAi.copied"));
      } catch (q) {
        Ft.msg(`${t("common.operationFailed")}: ${q}`, "error");
      }
    }, He = async (M) => {
      T.value && (T.value.messages = T.value.messages.filter(
        (q) => q.id !== M
      ), T.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.value.updatedAtLabel = new Date(
        T.value.updatedAt
      ).toLocaleString(), await Ve());
    }, Fn = (M) => {
      a.value = M.content;
    }, rr = () => {
      Ft.msg(t("localAi.feedbackSaved"));
    }, Lr = async (M) => {
      const q = T.value;
      if (!q || s.value) return;
      const H = q.messages.findIndex(
        (Be) => Be.id === M
      );
      if (!q.messages.slice(0, H).reverse().find((Be) => Be.role === "user")) return;
      q.messages = q.messages.slice(0, H);
      const de = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        promptTokens: vt(
          ue({ applyThinkingDirective: !0 })
        )
      };
      q.messages.push(de), s.value = !0, C(), await R({ force: !0 });
      try {
        await Z(de), q.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), q.updatedAtLabel = new Date(q.updatedAt).toLocaleString(), await Ve();
      } catch (Be) {
        l.value || (Ft.msg(`${t("localAi.chatFailed")}: ${Be}`, "error"), de.error = String(Be), de.interrupted = !!de.content.trim(), de.interrupted || (de.content = String(Be)), q.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), q.updatedAtLabel = new Date(q.updatedAt).toLocaleString(), await Ve()), de.streaming = !1, de.elapsedMs = performance.now() - st(de).getTime();
      } finally {
        s.value = !1, p.value = null, F(), await R();
      }
    };
    return ut(async () => {
      await Y(), d = setInterval(() => {
        Q().catch(
          (M) => un.warn("[LocalAI] status timer failed", M)
        );
      }, 8e3);
    }), va(() => {
      d && clearInterval(d), p.value && Qa(p.value), F();
    }), (M, q) => (x(), W("main", wT, [
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
          ]),
          y("div", ET, [
            y("button", {
              class: "icon-action-btn icon-action-btn--primary",
              type: "button",
              title: c(t)("localAi.newChat"),
              onClick: Oe
            }, [
              $(c(kd), {
                theme: "outline",
                size: "16"
              })
            ], 8, AT),
            y("button", {
              class: "icon-action-btn",
              type: "button",
              title: c(t)("plugins.refresh"),
              onClick: Y
            }, [
              $(c(Nl), {
                theme: "outline",
                size: "16"
              })
            ], 8, CT)
          ])
        ]),
        y("div", OT, [
          $(c(Id), {
            theme: "outline",
            size: "17"
          }),
          Tt(y("input", {
            "onUpdate:modelValue": q[0] || (q[0] = (H) => go(n) ? n.value = H : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, LT), [
            [vo, c(n)]
          ])
        ]),
        y("section", IT, [
          y(
            "div",
            xT,
            B(c(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          c(te).length ? (x(), W("div", RT, [
            (x(!0), W(
              $t,
              null,
              Br(c(te), (H) => (x(), W("div", {
                key: H.id,
                class: U([
                  "chat-list-item",
                  c(o) === H.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (le) => qe(H.id),
                onKeydown: tn(Qe((le) => qe(H.id), ["prevent"]), ["enter"])
              }, [
                $(c(Cd), {
                  theme: "outline",
                  size: "16"
                }),
                y(
                  "span",
                  NT,
                  B(H.title),
                  1
                  /* TEXT */
                ),
                y(
                  "span",
                  $T,
                  B(Ye(H.updatedAt)),
                  1
                  /* TEXT */
                ),
                y("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: Qe((le) => Se(H.id), ["stop"])
                }, [
                  $(c(Rl), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, MT)
              ], 42, PT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (x(), W(
            "div",
            DT,
            B(c(t)("common.empty")),
            1
            /* TEXT */
          )),
          y("button", {
            class: "view-all-btn",
            type: "button",
            onClick: D
          }, [
            y(
              "span",
              null,
              B(c(t)("localAi.viewAllChats")),
              1
              /* TEXT */
            ),
            $(c(Ld), {
              theme: "outline",
              size: "15"
            })
          ])
        ])
      ]),
      y("section", FT, [
        y("header", zT, [
          y("div", VT, [
            y("div", BT, [
              y(
                "h3",
                null,
                B(c(T)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              y(
                "span",
                {
                  class: U([
                    "status-pill",
                    c(h)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  q[3] || (q[3] = y(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Zt(
                    " " + B(c(_)),
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
              B(c(h)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          y("div", UT, [
            $(c(Bn), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: k
            }, {
              default: ae(() => [
                $(c(os), {
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
            }),
            y("button", {
              class: "topbar-btn topbar-btn--icon",
              type: "button",
              title: c(t)("common.more"),
              onClick: ge
            }, [
              $(c(Od), {
                theme: "outline",
                size: "17"
              })
            ], 8, HT)
          ])
        ]),
        y(
          "div",
          {
            ref_key: "messageListRef",
            ref: g,
            class: "message-list",
            onScroll: N
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
            c(O).length ? ee("v-if", !0) : (x(), W("div", GT, [
              $(c($l), {
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
            (x(!0), W(
              $t,
              null,
              Br(c(O), (H) => (x(), W(
                "article",
                {
                  key: H.id,
                  class: U(["message-row", `message-row--${H.role}`])
                },
                [
                  y("div", YT, [
                    H.role === "assistant" ? (x(), ie(c($l), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (x(), W(
                      "span",
                      ZT,
                      B(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  y("div", XT, [
                    H.role === "user" ? (x(), W("div", QT, [
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
                        B(Ae(H)),
                        1
                        /* TEXT */
                      )
                    ])) : (x(), W(
                      $t,
                      { key: 1 },
                      [
                        y("div", JT, [
                          y(
                            "span",
                            null,
                            B(c(K)),
                            1
                            /* TEXT */
                          ),
                          y(
                            "small",
                            null,
                            B(H.streaming ? c(t)("localAi.thinking") : Ae(H)),
                            1
                            /* TEXT */
                          )
                        ]),
                        y(
                          "div",
                          {
                            class: U(["assistant-card", { "assistant-card--streaming": H.streaming }])
                          },
                          [
                            H.content ? (x(), W("div", eS, [
                              Ue(H.content) ? (x(), W("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: H.streaming
                              }, [
                                y("summary", null, [
                                  y("span", nS, [
                                    $(c(xl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    Zt(
                                      " " + B(c(t)("localAi.reasoningTitle")),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  H.streaming ? (x(), W(
                                    "small",
                                    rS,
                                    B(c(t)("localAi.thinking")),
                                    1
                                    /* TEXT */
                                  )) : ee("v-if", !0)
                                ]),
                                y("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: nt(Ue(H.content))
                                }, null, 8, oS)
                              ], 8, tS)) : ee("v-if", !0),
                              St(H.content) ? (x(), W("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: nt(St(H.content))
                              }, null, 8, aS)) : ee("v-if", !0)
                            ])) : (x(), W(
                              "div",
                              sS,
                              B(c(t)("localAi.thinking")),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        H.content ? (x(), W("div", lS, [
                          y(
                            "span",
                            null,
                            " Context: " + B($e(H).context) + "/" + B($e(H).contextMax) + " (" + B($e(H).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            " Output: " + B($e(H).output) + "/" + B($e(H).outputMax),
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            B($e(H).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            B($e(H).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : ee("v-if", !0),
                        bt(H) ? (x(), W(
                          "div",
                          iS,
                          B(bt(H)),
                          1
                          /* TEXT */
                        )) : ee("v-if", !0),
                        H.streaming ? ee("v-if", !0) : (x(), W("div", cS, [
                          y("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (le) => xt(H)
                          }, [
                            $(c(Td), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, uS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (le) => Lr(H.id)
                          }, [
                            $(c(Nl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, fS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: rr
                          }, [
                            $(c(Ad), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, dS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: rr
                          }, [
                            $(c(Sd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, pS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (le) => Fn(H)
                          }, [
                            $(c(Ed), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, mS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (le) => He(H.id)
                          }, [
                            $(c(Rl), {
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
        c(m) ? (x(), W("button", {
          key: 0,
          class: "scroll-bottom-btn",
          type: "button",
          title: c(t)("localAi.jumpToLatest"),
          onClick: V
        }, [
          $(c(Pl), {
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
            onSubmit: Qe(fe, ["prevent"])
          },
          [
            Tt(y("textarea", {
              "onUpdate:modelValue": q[1] || (q[1] = (H) => go(a) ? a.value = H : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: tn(Qe(fe, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, vS), [
              [vo, c(a)]
            ]),
            y("div", bS, [
              y("div", yS, [
                y("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: k
                }, [
                  $(c(os), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, _S),
                y("button", {
                  class: U([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(u) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(u) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(u),
                  onClick: q[2] || (q[2] = (H) => u.value = !c(u))
                }, [
                  $(c(xl), {
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
                ], 10, wS),
                y("label", kS, [
                  y("select", {
                    value: c(K),
                    disabled: ""
                  }, [
                    y("option", { value: c(K) }, B(c(K)), 9, SS)
                  ], 8, TS),
                  $(c(Pl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              y("div", ES, [
                q[4] || (q[4] = y(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                c(s) ? (x(), W("button", {
                  key: 0,
                  class: "send-btn send-btn--stop",
                  type: "button",
                  title: c(t)("localAi.stopGenerating"),
                  "aria-label": c(t)("localAi.stopGenerating"),
                  onClick: Ee
                }, [
                  $(c(Rd), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, AS)) : (x(), W("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(E),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  $(c(xd), {
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
}), IS = /* @__PURE__ */ qs(LS, [["__scopeId", "data-v-52effca4"]]), xS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IS
}, Symbol.toStringTag, { value: "Module" }));
async function Bc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await It("plugin:dialog|open", { options: e });
}
const RS = { class: "settings-panel local-ai-settings-shell" }, PS = { class: "local-ai-hero panel-card" }, NS = { class: "panel-title" }, $S = { class: "hero-desc" }, MS = { class: "header-actions" }, DS = {
  key: 0,
  class: "settings-grid"
}, FS = { class: "summary-panel panel-card" }, zS = { class: "status-strip" }, VS = { class: "summary-card" }, BS = { class: "summary-card__title" }, jS = { class: "summary-card__desc" }, US = { class: "service-controls" }, HS = { class: "service-url" }, WS = { class: "summary-card" }, GS = { class: "summary-card__title" }, KS = { class: "summary-card__desc" }, qS = { class: "summary-meta" }, YS = { class: "form-panel panel-card" }, ZS = { class: "settings-section" }, XS = { class: "settings-section__header" }, QS = { class: "field-stack" }, JS = { class: "field-row" }, e2 = { class: "path-control" }, t2 = { class: "field-row" }, n2 = { class: "field-row" }, r2 = { class: "field-row" }, o2 = { class: "path-control" }, a2 = ["placeholder"], s2 = { class: "settings-section grid-two" }, l2 = { class: "settings-section__header" }, i2 = { class: "param-grid" }, c2 = { class: "number-field" }, u2 = { class: "number-field" }, f2 = { class: "number-field" }, d2 = { class: "number-field" }, p2 = { class: "number-field" }, m2 = { class: "number-field" }, h2 = { class: "settings-section grid-two" }, g2 = { class: "settings-section__header" }, v2 = { class: "switch-grid" }, b2 = { class: "settings-section grid-two" }, y2 = { class: "settings-section__header" }, _2 = { class: "switch-grid switch-grid--two" }, w2 = { class: "number-field" }, k2 = { class: "number-field" }, T2 = { class: "settings-section grid-two" }, S2 = { class: "settings-section__header" }, E2 = { class: "param-grid param-grid--three" }, A2 = { class: "number-field" }, C2 = { class: "number-field" }, O2 = { class: "number-field" }, L2 = { class: "number-field" }, I2 = { class: "number-field" }, x2 = { class: "number-field" }, R2 = { class: "number-field" }, P2 = { class: "number-field" }, N2 = { class: "settings-footer" }, $2 = ["title"], M2 = /* @__PURE__ */ re({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Co(), n = j(null), r = j(null), o = j(null), a = j(null), s = j(!1), i = j(!1), l = j(!1), u = j(!1), f = j(!1);
    let m = null;
    const p = I(() => !!a.value?.selectedModelPath), v = I({
      get: () => n.value?.modelPath ?? "",
      set: (N) => {
        n.value && (n.value.modelPath = N || void 0);
      }
    }), h = I({
      get: () => n.value?.mmprojPath ?? "",
      set: (N) => {
        n.value && (n.value.mmprojPath = N || void 0);
      }
    }), g = I(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), S = I(
      () => p.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), d = I(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), A = (N) => N.split(/[\\/]+/).pop() ?? N, L = async () => {
      r.value = await Nk();
    }, E = async () => {
      o.value = await Kf();
    }, _ = async () => {
      n.value && (a.value = await Pk(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, T = async () => {
      s.value = !0;
      try {
        n.value = await Gf(), await Promise.all([L(), _(), E()]);
      } catch (N) {
        un.error("[LocalAI] refresh settings failed", N), Ft.msg(`${t("localAi.refreshFailed")}: ${N}`, "error");
      } finally {
        s.value = !1;
      }
    }, O = async () => {
      if (n.value)
        try {
          await Xa(n.value);
        } catch (N) {
          un.warn("[LocalAI] autosave failed", N);
        }
    }, G = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Xa(n.value), await Promise.all([L(), _(), E()]), Ft.msg(t("localAi.configSaved"));
        } catch (N) {
          Ft.msg(`${t("localAi.configSaveFailed")}: ${N}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, K = async () => {
      const N = await Bc({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !N || Array.isArray(N) || !n.value || (n.value.modelDir = N, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await _());
    }, te = async () => {
      const N = await Bc({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !N || Array.isArray(N) || !n.value || (n.value.runtimePath = N, await O(), await L());
    }, pe = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Xa(n.value), o.value = await $k(n.value), Ft.msg(t("localAi.serviceStarted"));
        } catch (N) {
          Ft.msg(`${t("localAi.serviceStartFailed")}: ${N}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, ne = async () => {
      u.value = !0;
      try {
        await G(), o.value = await Mk(), Ft.msg(t("localAi.serviceRestarted"));
      } catch (N) {
        Ft.msg(`${t("localAi.serviceRestartFailed")}: ${N}`, "error");
      } finally {
        u.value = !1;
      }
    }, be = async () => {
      f.value = !0;
      try {
        await Dk(), await E(), Ft.msg(t("localAi.serviceStoppedMsg"));
      } catch (N) {
        Ft.msg(`${t("localAi.serviceStopFailed")}: ${N}`, "error");
      } finally {
        f.value = !1;
      }
    }, me = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return ut(async () => {
      await T(), m = setInterval(() => {
        E().catch(
          (N) => un.warn("[LocalAI] status refresh failed", N)
        );
      }, 5e3);
    }), va(() => {
      m && clearInterval(m);
    }), (N, R) => {
      const V = Kw, ce = Gw, Q = Iw, we = ek;
      return x(), W("div", RS, [
        y("header", PS, [
          y("div", null, [
            y(
              "h3",
              NS,
              B(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            y(
              "p",
              $S,
              B(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          y("div", MS, [
            $(c(Bn), {
              size: "small",
              plain: "",
              onClick: me
            }, {
              default: ae(() => [
                Zt(
                  B(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            $(c(Bn), {
              size: "small",
              loading: c(s),
              onClick: T
            }, {
              default: ae(() => [
                Zt(
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
        c(n) ? (x(), W("main", DS, [
          y("aside", FS, [
            y("div", zS, [
              y(
                "div",
                {
                  class: U(["status-item", { ready: c(r)?.available }])
                },
                [
                  R[25] || (R[25] = y(
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
                  class: U(["status-item", { ready: c(p) }])
                },
                [
                  R[26] || (R[26] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    B(c(S)),
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
                  class: U(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  R[27] || (R[27] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    B(c(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            y("section", VS, [
              y(
                "div",
                BS,
                B(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              y(
                "div",
                jS,
                B(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              y("div", US, [
                $(c(Bn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: pe
                }, {
                  default: ae(() => [
                    Zt(
                      B(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                $(c(Bn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: ne
                }, {
                  default: ae(() => [
                    Zt(
                      B(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                $(c(Bn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: be
                }, {
                  default: ae(() => [
                    Zt(
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
                HS,
                B(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            y("section", WS, [
              y(
                "div",
                GS,
                B(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              y(
                "div",
                KS,
                B(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              y("div", qS, [
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
          y("section", YS, [
            y("div", ZS, [
              y("div", XS, [
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
              y("div", QS, [
                y("label", JS, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  y("div", e2, [
                    Tt(y(
                      "input",
                      {
                        "onUpdate:modelValue": R[0] || (R[0] = (Y) => c(n).modelDir = Y),
                        class: "text-input",
                        onChange: _
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [vo, c(n).modelDir]
                    ]),
                    $(c(Bn), {
                      size: "small",
                      plain: "",
                      onClick: K
                    }, {
                      default: ae(() => [
                        Zt(
                          B(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                y("label", t2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  $(ce, {
                    modelValue: c(v),
                    "onUpdate:modelValue": R[1] || (R[1] = (Y) => go(v) ? v.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: ae(() => [
                      (x(!0), W(
                        $t,
                        null,
                        Br(c(a)?.mainModels ?? [], (Y) => (x(), ie(V, {
                          key: Y,
                          label: A(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                y("label", n2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  $(ce, {
                    modelValue: c(h),
                    "onUpdate:modelValue": R[2] || (R[2] = (Y) => go(h) ? h.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: ae(() => [
                      (x(!0), W(
                        $t,
                        null,
                        Br(c(a)?.mmprojModels ?? [], (Y) => (x(), ie(V, {
                          key: Y,
                          label: A(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                y("label", r2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  y("div", o2, [
                    Tt(y("input", {
                      "onUpdate:modelValue": R[3] || (R[3] = (Y) => c(n).runtimePath = Y),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, a2), [
                      [vo, c(n).runtimePath]
                    ]),
                    $(c(Bn), {
                      size: "small",
                      plain: "",
                      onClick: te
                    }, {
                      default: ae(() => [
                        Zt(
                          B(c(t)("common.browse")),
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
            y("div", s2, [
              y("div", l2, [
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
              y("div", i2, [
                y("label", c2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": R[4] || (R[4] = (Y) => c(n).ctxSize = Y),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", u2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": R[5] || (R[5] = (Y) => c(n).gpuLayers = Y),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", f2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": R[6] || (R[6] = (Y) => c(n).threads = Y),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", d2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": R[7] || (R[7] = (Y) => c(n).batchSize = Y),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", p2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": R[8] || (R[8] = (Y) => c(n).ubatchSize = Y),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", m2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": R[9] || (R[9] = (Y) => c(n).mainGpu = Y),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            y("div", h2, [
              y("div", g2, [
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
              y("div", v2, [
                y("label", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  $(we, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": R[10] || (R[10] = (Y) => c(n).flashAttn = Y)
                  }, null, 8, ["modelValue"])
                ]),
                y("label", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  $(we, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": R[11] || (R[11] = (Y) => c(n).kvOffload = Y)
                  }, null, 8, ["modelValue"])
                ]),
                y("label", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  $(we, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": R[12] || (R[12] = (Y) => c(n).mmap = Y)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            y("div", b2, [
              y("div", y2, [
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
              y("div", _2, [
                y("label", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  $(we, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": R[13] || (R[13] = (Y) => c(n).autoStartOnRequest = Y)
                  }, null, 8, ["modelValue"])
                ]),
                y("label", null, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  $(we, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": R[14] || (R[14] = (Y) => c(n).keepAlive = Y)
                  }, null, 8, ["modelValue"])
                ]),
                y("label", w2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": R[15] || (R[15] = (Y) => c(n).idleTimeoutMinutes = Y),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", k2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": R[16] || (R[16] = (Y) => c(n).requestTimeoutSecs = Y),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            y("div", T2, [
              y("div", S2, [
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
              y("div", E2, [
                y("label", A2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": R[17] || (R[17] = (Y) => c(n).temperature = Y),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", C2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": R[18] || (R[18] = (Y) => c(n).topP = Y),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", O2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": R[19] || (R[19] = (Y) => c(n).topK = Y),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", L2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": R[20] || (R[20] = (Y) => c(n).minP = Y),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", I2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": R[21] || (R[21] = (Y) => c(n).repeatPenalty = Y),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", x2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": R[22] || (R[22] = (Y) => c(n).repeatLastN = Y),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", R2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": R[23] || (R[23] = (Y) => c(n).maxTokens = Y),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                y("label", P2, [
                  y(
                    "span",
                    null,
                    B(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  $(Q, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": R[24] || (R[24] = (Y) => c(n).port = Y),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            y("div", N2, [
              $(c(Bn), {
                type: "primary",
                loading: c(i),
                onClick: G
              }, {
                default: ae(() => [
                  Zt(
                    B(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (x(), W("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, B(c(o).commandLine), 9, $2)) : ee("v-if", !0)
            ])
          ])
        ])) : ee("v-if", !0)
      ]);
    };
  }
}), D2 = /* @__PURE__ */ qs(M2, [["__scopeId", "data-v-58131275"]]), F2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D2
}, Symbol.toStringTag, { value: "Module" }));
export {
  B2 as activate,
  B2 as default
};
