var jf = Object.defineProperty;
var Hf = (e, t, n) => t in e ? jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var He = (e, t, n) => Hf(e, typeof t != "symbol" ? t + "" : t, n);
import * as us from "vue";
import { inject as je, createVNode as F, defineAsyncComponent as Wf, ref as K, shallowRef as wr, computed as N, watch as Ae, onMounted as yt, onUnmounted as Ua, defineComponent as ce, h as ku, Text as Su, Fragment as ct, getCurrentInstance as Gt, unref as c, watchEffect as Tu, readonly as tl, getCurrentScope as Gf, onScopeDispose as Kf, nextTick as ht, isRef as uo, warn as qf, provide as Bn, createElementBlock as j, openBlock as R, mergeProps as fo, renderSlot as Ee, createElementVNode as g, toRef as er, useAttrs as Yf, useSlots as Zf, normalizeStyle as Nt, normalizeClass as q, createCommentVNode as ne, createBlock as me, withCtx as fe, resolveDynamicComponent as Ht, withModifiers as et, toDisplayString as M, onBeforeUnmount as jn, Transition as So, withDirectives as bt, vShow as ir, reactive as zr, onActivated as Xf, onUpdated as Eu, cloneVNode as Qf, Comment as Jf, Teleport as ep, onBeforeMount as tp, onDeactivated as np, createTextVNode as an, withKeys as _n, createSlots as rp, toRaw as op, toRefs as nl, resolveComponent as $r, resolveDirective as ap, toHandlerKey as sp, renderList as Rn, vModelText as Dr, shallowReactive as lp, isVNode as jo, render as Ca, vModelSelect as ip } from "vue";
var cp = {
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
function up() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function dp(e, t, n) {
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
var fp = Symbol("icon-context");
function rn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = up(), i = je(fp, cp);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, m = a.strokeLinejoin, h = a.theme, y = a.fill, v = a.spin, b = dp(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: h,
          fill: y
        }, i), L = [i.prefix + "-icon"];
        return L.push(i.prefix + "-icon-" + e), t && i.rtl && L.push(i.prefix + "-icon-rtl"), v && L.push(i.prefix + "-icon-spin"), F("span", {
          class: L.join(" ")
        }, [n(b)]);
      };
    }
  };
  return r;
}
const li = rn("brain", !0, function(e) {
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
}), ii = rn("copy", !0, function(e) {
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
}), ia = rn("delete", !1, function(e) {
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
}), ci = rn("down", !1, function(e) {
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
}), ds = rn("edit", !0, function(e) {
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
}), pp = rn("fork", !1, function(e) {
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
}), ui = rn("left-bar", !0, function(e) {
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
}), mp = rn("link", !0, function(e) {
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
}), di = rn("refresh", !0, function(e) {
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
}), fi = rn("robot", !0, function(e) {
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
}), fs = rn("search", !0, function(e) {
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
}), hp = rn("send", !0, function(e) {
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
}), Au = rn("setting-two", !1, function(e) {
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
}), gp = rn("square", !1, function(e) {
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
}), FA = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => oE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Au,
    component: Wf(() => Promise.resolve().then(() => $A))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function vp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const pi = typeof window < "u", jr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), bp = (e, t, n) => yp({ l: e, k: t, s: n }), yp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Lt = (e) => typeof e == "number" && isFinite(e), _p = (e) => rl(e) === "[object Date]", Ia = (e) => rl(e) === "[object RegExp]", ja = (e) => $e(e) && Object.keys(e).length === 0, Pt = Object.assign, wp = Object.create, We = (e = null) => wp(e);
let mi;
const wa = () => mi || (mi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : We());
function hi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function gi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function kp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${gi(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${gi(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Sp = Object.prototype.hasOwnProperty;
function wn(e, t) {
  return Sp.call(e, t);
}
const vt = Array.isArray, ot = (e) => typeof e == "function", de = (e) => typeof e == "string", gt = (e) => typeof e == "boolean", Me = (e) => e !== null && typeof e == "object", Tp = (e) => Me(e) && ot(e.then) && ot(e.catch), Cu = Object.prototype.toString, rl = (e) => Cu.call(e), $e = (e) => rl(e) === "[object Object]", Ep = (e) => e == null ? "" : vt(e) || $e(e) && e.toString === Cu ? JSON.stringify(e, null, 2) : String(e);
function ol(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const ca = (e) => !Me(e) || vt(e);
function ka(e, t) {
  if (ca(e) || ca(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Me(r[a]) && !Me(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : We()), ca(o[a]) || ca(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ap(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Os(e, t, n) {
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
}, Cp = 17;
function Ha(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Ip(e) {
  throw e;
}
const In = " ", Lp = "\r", zt = `
`, Op = "\u2028", xp = "\u2029";
function Rp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (x) => t[x] === Lp && t[x + 1] === zt, i = (x) => t[x] === zt, l = (x) => t[x] === xp, u = (x) => t[x] === Op, d = (x) => s(x) || i(x) || l(x) || u(x), m = () => n, h = () => r, y = () => o, v = () => a, b = (x) => s(x) || l(x) || u(x) ? zt : t[x], L = () => b(n), p = () => b(n + a);
  function C() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function P() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function I() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function w(x = 0) {
    a = x;
  }
  function E() {
    const x = n + a;
    for (; x !== n; )
      C();
    a = 0;
  }
  return {
    index: m,
    line: h,
    column: y,
    peekOffset: v,
    charAt: b,
    currentChar: L,
    currentPeek: p,
    next: C,
    peek: P,
    reset: I,
    resetPeek: w,
    skipToPeek: E
  };
}
const Zn = void 0, Np = ".", vi = "'", Pp = "tokenizer";
function $p(e, t = {}) {
  const n = t.location !== !1, r = Rp(e), o = () => r.index(), a = () => Ap(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function m(T, O, U, ...re) {
    const Le = u();
    if (O.column += U, O.offset += U, d) {
      const ve = n ? Os(Le.startLoc, O) : null, A = Ha(T, ve, {
        domain: Pp,
        args: re
      });
      d(A);
    }
  }
  function h(T, O, U) {
    T.endLoc = a(), T.currentType = O;
    const re = { type: O };
    return n && (re.loc = Os(T.startLoc, T.endLoc)), U != null && (re.value = U), re;
  }
  const y = (T) => h(
    T,
    13
    /* TokenTypes.EOF */
  );
  function v(T, O) {
    return T.currentChar() === O ? (T.next(), O) : (m(Fe.EXPECTED_TOKEN, a(), 0, O), "");
  }
  function b(T) {
    let O = "";
    for (; T.currentPeek() === In || T.currentPeek() === zt; )
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
  function C(T) {
    if (T === Zn)
      return !1;
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function P(T, O) {
    const { currentType: U } = O;
    if (U !== 2)
      return !1;
    b(T);
    const re = p(T.currentPeek());
    return T.resetPeek(), re;
  }
  function I(T, O) {
    const { currentType: U } = O;
    if (U !== 2)
      return !1;
    b(T);
    const re = T.currentPeek() === "-" ? T.peek() : T.currentPeek(), Le = C(re);
    return T.resetPeek(), Le;
  }
  function w(T, O) {
    const { currentType: U } = O;
    if (U !== 2)
      return !1;
    b(T);
    const re = T.currentPeek() === vi;
    return T.resetPeek(), re;
  }
  function E(T, O) {
    const { currentType: U } = O;
    if (U !== 7)
      return !1;
    b(T);
    const re = T.currentPeek() === ".";
    return T.resetPeek(), re;
  }
  function x(T, O) {
    const { currentType: U } = O;
    if (U !== 8)
      return !1;
    b(T);
    const re = p(T.currentPeek());
    return T.resetPeek(), re;
  }
  function Z(T, O) {
    const { currentType: U } = O;
    if (!(U === 7 || U === 11))
      return !1;
    b(T);
    const re = T.currentPeek() === ":";
    return T.resetPeek(), re;
  }
  function Q(T, O) {
    const { currentType: U } = O;
    if (U !== 9)
      return !1;
    const re = () => {
      const ve = T.currentPeek();
      return ve === "{" ? p(T.peek()) : ve === "@" || ve === "|" || ve === ":" || ve === "." || ve === In || !ve ? !1 : ve === zt ? (T.peek(), re()) : he(T, !1);
    }, Le = re();
    return T.resetPeek(), Le;
  }
  function se(T) {
    b(T);
    const O = T.currentPeek() === "|";
    return T.resetPeek(), O;
  }
  function he(T, O = !0) {
    const U = (Le = !1, ve = "") => {
      const A = T.currentPeek();
      return A === "{" || A === "@" || !A ? Le : A === "|" ? !(ve === In || ve === zt) : A === In ? (T.peek(), U(!0, In)) : A === zt ? (T.peek(), U(!0, zt)) : !0;
    }, re = U();
    return O && T.resetPeek(), re;
  }
  function le(T, O) {
    const U = T.currentChar();
    return U === Zn ? Zn : O(U) ? (T.next(), U) : null;
  }
  function ye(T) {
    const O = T.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36;
  }
  function be(T) {
    return le(T, ye);
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
  function ee(T) {
    return le(T, V);
  }
  function W(T) {
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function pe(T) {
    return le(T, W);
  }
  function Y(T) {
    const O = T.charCodeAt(0);
    return O >= 48 && O <= 57 || // 0-9
    O >= 65 && O <= 70 || // A-F
    O >= 97 && O <= 102;
  }
  function G(T) {
    return le(T, Y);
  }
  function De(T) {
    let O = "", U = "";
    for (; O = pe(T); )
      U += O;
    return U;
  }
  function Be(T) {
    let O = "";
    for (; ; ) {
      const U = T.currentChar();
      if (U === "{" || U === "}" || U === "@" || U === "|" || !U)
        break;
      if (U === In || U === zt)
        if (he(T))
          O += U, T.next();
        else {
          if (se(T))
            break;
          O += U, T.next();
        }
      else
        O += U, T.next();
    }
    return O;
  }
  function ge(T) {
    L(T);
    let O = "", U = "";
    for (; O = ee(T); )
      U += O;
    const re = T.currentChar();
    if (re && re !== "}" && re !== Zn && re !== In && re !== zt && re !== "　") {
      const Le = ut(T);
      return m(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, U + Le), U + Le;
    }
    return T.currentChar() === Zn && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), U;
  }
  function _e(T) {
    L(T);
    let O = "";
    return T.currentChar() === "-" ? (T.next(), O += `-${De(T)}`) : O += De(T), T.currentChar() === Zn && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), O;
  }
  function J(T) {
    return T !== vi && T !== zt;
  }
  function Ce(T) {
    L(T), v(T, "'");
    let O = "", U = "";
    for (; O = le(T, J); )
      O === "\\" ? U += Qe(T) : U += O;
    const re = T.currentChar();
    return re === zt || re === Zn ? (m(Fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), re === zt && (T.next(), v(T, "'")), U) : (v(T, "'"), U);
  }
  function Qe(T) {
    const O = T.currentChar();
    switch (O) {
      case "\\":
      case "'":
        return T.next(), `\\${O}`;
      case "u":
        return oe(T, O, 4);
      case "U":
        return oe(T, O, 6);
      default:
        return m(Fe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, O), "";
    }
  }
  function oe(T, O, U) {
    v(T, O);
    let re = "";
    for (let Le = 0; Le < U; Le++) {
      const ve = G(T);
      if (!ve) {
        m(Fe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${O}${re}${T.currentChar()}`);
        break;
      }
      re += ve;
    }
    return `\\${O}${re}`;
  }
  function st(T) {
    return T !== "{" && T !== "}" && T !== In && T !== zt;
  }
  function ut(T) {
    L(T);
    let O = "", U = "";
    for (; O = le(T, st); )
      U += O;
    return U;
  }
  function Ge(T) {
    let O = "", U = "";
    for (; O = be(T); )
      U += O;
    return U;
  }
  function At(T) {
    const O = (U) => {
      const re = T.currentChar();
      return re === "{" || re === "@" || re === "|" || re === "(" || re === ")" || !re || re === In ? U : (U += re, T.next(), O(U));
    };
    return O("");
  }
  function dt(T) {
    L(T);
    const O = v(
      T,
      "|"
      /* TokenChars.Pipe */
    );
    return L(T), O;
  }
  function Ct(T, O) {
    let U = null;
    switch (T.currentChar()) {
      case "{":
        return O.braceNest >= 1 && m(Fe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), T.next(), U = h(
          O,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), L(T), O.braceNest++, U;
      case "}":
        return O.braceNest > 0 && O.currentType === 2 && m(Fe.EMPTY_PLACEHOLDER, a(), 0), T.next(), U = h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), O.braceNest--, O.braceNest > 0 && L(T), O.inLinked && O.braceNest === 0 && (O.inLinked = !1), U;
      case "@":
        return O.braceNest > 0 && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), U = lt(T, O) || y(O), O.braceNest = 0, U;
      default: {
        let Le = !0, ve = !0, A = !0;
        if (se(T))
          return O.braceNest > 0 && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), U = h(O, 1, dt(T)), O.braceNest = 0, O.inLinked = !1, U;
        if (O.braceNest > 0 && (O.currentType === 4 || O.currentType === 5 || O.currentType === 6))
          return m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), O.braceNest = 0, nt(T, O);
        if (Le = P(T, O))
          return U = h(O, 4, ge(T)), L(T), U;
        if (ve = I(T, O))
          return U = h(O, 5, _e(T)), L(T), U;
        if (A = w(T, O))
          return U = h(O, 6, Ce(T)), L(T), U;
        if (!Le && !ve && !A)
          return U = h(O, 12, ut(T)), m(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, U.value), L(T), U;
        break;
      }
    }
    return U;
  }
  function lt(T, O) {
    const { currentType: U } = O;
    let re = null;
    const Le = T.currentChar();
    switch ((U === 7 || U === 8 || U === 11 || U === 9) && (Le === zt || Le === In) && m(Fe.INVALID_LINKED_FORMAT, a(), 0), Le) {
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
        return se(T) ? (re = h(O, 1, dt(T)), O.braceNest = 0, O.inLinked = !1, re) : E(T, O) || Z(T, O) ? (L(T), lt(T, O)) : x(T, O) ? (L(T), h(O, 11, Ge(T))) : Q(T, O) ? (L(T), Le === "{" ? Ct(T, O) || re : h(O, 10, At(T))) : (U === 7 && m(Fe.INVALID_LINKED_FORMAT, a(), 0), O.braceNest = 0, O.inLinked = !1, nt(T, O));
    }
  }
  function nt(T, O) {
    let U = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (O.braceNest > 0)
      return Ct(T, O) || y(O);
    if (O.inLinked)
      return lt(T, O) || y(O);
    switch (T.currentChar()) {
      case "{":
        return Ct(T, O) || y(O);
      case "}":
        return m(Fe.UNBALANCED_CLOSING_BRACE, a(), 0), T.next(), h(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return lt(T, O) || y(O);
      default: {
        if (se(T))
          return U = h(O, 1, dt(T)), O.braceNest = 0, O.inLinked = !1, U;
        if (he(T))
          return h(O, 0, Be(T));
        break;
      }
    }
    return U;
  }
  function Tt() {
    const { currentType: T, offset: O, startLoc: U, endLoc: re } = l;
    return l.lastType = T, l.lastOffset = O, l.lastStartLoc = U, l.lastEndLoc = re, l.offset = o(), l.startLoc = a(), r.currentChar() === Zn ? h(
      l,
      13
      /* TokenTypes.EOF */
    ) : nt(r, l);
  }
  return {
    nextToken: Tt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Mp = "parser", Dp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Fp(e, t, n) {
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
function zp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(p, C, P, I, ...w) {
    const E = p.currentPosition();
    if (E.offset += I, E.column += I, n) {
      const x = t ? Os(P, E) : null, Z = Ha(C, x, {
        domain: Mp,
        args: w
      });
      n(Z);
    }
  }
  function o(p, C, P) {
    const I = { type: p };
    return t && (I.start = C, I.end = C, I.loc = { start: P, end: P }), I;
  }
  function a(p, C, P, I) {
    t && (p.end = C, p.loc && (p.loc.end = P));
  }
  function s(p, C) {
    const P = p.context(), I = o(3, P.offset, P.startLoc);
    return I.value = C, a(I, p.currentOffset(), p.currentPosition()), I;
  }
  function i(p, C) {
    const P = p.context(), { lastOffset: I, lastStartLoc: w } = P, E = o(5, I, w);
    return E.index = parseInt(C, 10), p.nextToken(), a(E, p.currentOffset(), p.currentPosition()), E;
  }
  function l(p, C) {
    const P = p.context(), { lastOffset: I, lastStartLoc: w } = P, E = o(4, I, w);
    return E.key = C, p.nextToken(), a(E, p.currentOffset(), p.currentPosition()), E;
  }
  function u(p, C) {
    const P = p.context(), { lastOffset: I, lastStartLoc: w } = P, E = o(9, I, w);
    return E.value = C.replace(Dp, Fp), p.nextToken(), a(E, p.currentOffset(), p.currentPosition()), E;
  }
  function d(p) {
    const C = p.nextToken(), P = p.context(), { lastOffset: I, lastStartLoc: w } = P, E = o(8, I, w);
    return C.type !== 11 ? (r(p, Fe.UNEXPECTED_EMPTY_LINKED_MODIFIER, P.lastStartLoc, 0), E.value = "", a(E, I, w), {
      nextConsumeToken: C,
      node: E
    }) : (C.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, Ln(C)), E.value = C.value || "", a(E, p.currentOffset(), p.currentPosition()), {
      node: E
    });
  }
  function m(p, C) {
    const P = p.context(), I = o(7, P.offset, P.startLoc);
    return I.value = C, a(I, p.currentOffset(), p.currentPosition()), I;
  }
  function h(p) {
    const C = p.context(), P = o(6, C.offset, C.startLoc);
    let I = p.nextToken();
    if (I.type === 8) {
      const w = d(p);
      P.modifier = w.node, I = w.nextConsumeToken || p.nextToken();
    }
    switch (I.type !== 9 && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(I)), I = p.nextToken(), I.type === 2 && (I = p.nextToken()), I.type) {
      case 10:
        I.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(I)), P.key = m(p, I.value || "");
        break;
      case 4:
        I.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(I)), P.key = l(p, I.value || "");
        break;
      case 5:
        I.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(I)), P.key = i(p, I.value || "");
        break;
      case 6:
        I.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(I)), P.key = u(p, I.value || "");
        break;
      default: {
        r(p, Fe.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const w = p.context(), E = o(7, w.offset, w.startLoc);
        return E.value = "", a(E, w.offset, w.startLoc), P.key = E, a(P, w.offset, w.startLoc), {
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
    const C = p.context(), P = C.currentType === 1 ? p.currentOffset() : C.offset, I = C.currentType === 1 ? C.endLoc : C.startLoc, w = o(2, P, I);
    w.items = [];
    let E = null;
    do {
      const Q = E || p.nextToken();
      switch (E = null, Q.type) {
        case 0:
          Q.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(Q)), w.items.push(s(p, Q.value || ""));
          break;
        case 5:
          Q.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(Q)), w.items.push(i(p, Q.value || ""));
          break;
        case 4:
          Q.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(Q)), w.items.push(l(p, Q.value || ""));
          break;
        case 6:
          Q.value == null && r(p, Fe.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ln(Q)), w.items.push(u(p, Q.value || ""));
          break;
        case 7: {
          const se = h(p);
          w.items.push(se.node), E = se.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const x = C.currentType === 1 ? C.lastOffset : p.currentOffset(), Z = C.currentType === 1 ? C.lastEndLoc : p.currentPosition();
    return a(w, x, Z), w;
  }
  function v(p, C, P, I) {
    const w = p.context();
    let E = I.items.length === 0;
    const x = o(1, C, P);
    x.cases = [], x.cases.push(I);
    do {
      const Z = y(p);
      E || (E = Z.items.length === 0), x.cases.push(Z);
    } while (w.currentType !== 13);
    return E && r(p, Fe.MUST_HAVE_MESSAGES_IN_PLURAL, P, 0), a(x, p.currentOffset(), p.currentPosition()), x;
  }
  function b(p) {
    const C = p.context(), { offset: P, startLoc: I } = C, w = y(p);
    return C.currentType === 13 ? w : v(p, P, I, w);
  }
  function L(p) {
    const C = $p(p, Pt({}, e)), P = C.context(), I = o(0, P.offset, P.startLoc);
    return t && I.loc && (I.loc.source = p), I.body = b(C), e.onCacheKey && (I.cacheKey = e.onCacheKey(p)), P.currentType !== 13 && r(C, Fe.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, p[P.offset] || ""), a(I, C.currentOffset(), C.currentPosition()), I;
  }
  return { parse: L };
}
function Ln(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Bp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function bi(e, t) {
  for (let n = 0; n < e.length; n++)
    al(e[n], t);
}
function al(e, t) {
  switch (e.type) {
    case 1:
      bi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      bi(e.items, t);
      break;
    case 6: {
      al(e.key, t), t.helper(
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
function Vp(e, t = {}) {
  const n = Bp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && al(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Up(e) {
  const t = e.body;
  return t.type === 2 ? yi(t) : t.cases.forEach((n) => yi(n)), e;
}
function yi(e) {
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
      e.static = ol(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function lo(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      lo(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        lo(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        lo(n[r]);
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
      lo(t.key), t.k = t.key, delete t.key, t.modifier && (lo(t.modifier), t.m = t.modifier, delete t.modifier);
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
function jp(e, t) {
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
  function d(b = !0) {
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
    indent: d,
    deindent: m,
    newline: h,
    helper: (b) => `_${b}`,
    needIndent: () => s.needIndent
  };
}
function Hp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), po(e, t.key), t.modifier ? (e.push(", "), po(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Wp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (po(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Gp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (po(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Kp(e, t) {
  t.body ? po(e, t.body) : e.push("null");
}
function po(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Kp(e, t);
      break;
    case 1:
      Gp(e, t);
      break;
    case 2:
      Wp(e, t);
      break;
    case 6:
      Hp(e, t);
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
const qp = (e, t = {}) => {
  const n = de(t.mode) ? t.mode : "normal", r = de(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = jp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${ol(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), po(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Yp(e, t = {}) {
  const n = Pt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = zp(n).parse(e);
  return r ? (a && Up(i), o && lo(i), { ast: i, code: "" }) : (Vp(i, n), qp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Zp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (wa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dn(e) {
  return Me(e) && sl(e) === 0 && (wn(e, "b") || wn(e, "body"));
}
const Iu = ["b", "body"];
function Xp(e) {
  return Tr(e, Iu);
}
const Lu = ["c", "cases"];
function Qp(e) {
  return Tr(e, Lu, []);
}
const Ou = ["s", "static"];
function Jp(e) {
  return Tr(e, Ou);
}
const xu = ["i", "items"];
function em(e) {
  return Tr(e, xu, []);
}
const Ru = ["t", "type"];
function sl(e) {
  return Tr(e, Ru);
}
const Nu = ["v", "value"];
function ua(e, t) {
  const n = Tr(e, Nu);
  if (n != null)
    return n;
  throw Ho(t);
}
const Pu = ["m", "modifier"];
function tm(e) {
  return Tr(e, Pu);
}
const $u = ["k", "key"];
function nm(e) {
  const t = Tr(e, $u);
  if (t)
    return t;
  throw Ho(
    6
    /* NodeTypes.Linked */
  );
}
function Tr(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (wn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Mu = [
  ...Iu,
  ...Lu,
  ...Ou,
  ...xu,
  ...$u,
  ...Pu,
  ...Nu,
  ...Ru
];
function Ho(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ps(e) {
  return (n) => rm(n, e);
}
function rm(e, t) {
  const n = Xp(t);
  if (n == null)
    throw Ho(
      0
      /* NodeTypes.Resource */
    );
  if (sl(n) === 1) {
    const a = Qp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      _i(e, i)
    ], []));
  } else
    return _i(e, n);
}
function _i(e, t) {
  const n = Jp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = em(t).reduce((o, a) => [...o, xs(e, a)], []);
    return e.normalize(r);
  }
}
function xs(e, t) {
  const n = sl(t);
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
      if (wn(r, "i") && Lt(r.i))
        return e.interpolate(e.list(r.i));
      if (wn(r, "index") && Lt(r.index))
        return e.interpolate(e.list(r.index));
      throw Ho(n);
    }
    case 6: {
      const r = t, o = tm(r), a = nm(r);
      return e.linked(xs(e, a), o ? xs(e, o) : void 0, e.type);
    }
    case 7:
      return ua(t, n);
    case 8:
      return ua(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const om = (e) => e;
let da = We();
function am(e, t = {}) {
  let n = !1;
  const r = t.onError || Ip;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Yp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function sm(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && de(e)) {
    gt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || om)(e), o = da[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = am(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ps(a);
    return s ? i : da[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = da[n];
      return r || (da[n] = ps(e));
    } else
      return ps(e);
  }
}
const tr = {
  INVALID_ARGUMENT: Cp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, lm = 24;
function nr(e) {
  return Ha(e, null, void 0);
}
function ll(e, t) {
  return t.locale != null ? wi(t.locale) : wi(e.locale);
}
let ms;
function wi(e) {
  if (de(e))
    return e;
  if (ot(e)) {
    if (e.resolvedOnce && ms != null)
      return ms;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Tp(t))
        throw nr(tr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ms = t;
    } else
      throw nr(tr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw nr(tr.NOT_SUPPORT_LOCALE_TYPE);
}
function im(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...vt(t) ? t : Me(t) ? Object.keys(t) : de(t) ? [t] : [n]
  ])];
}
function Du(e, t, n) {
  const r = de(n) ? n : La, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; vt(s); )
      s = ki(a, s, t);
    const i = vt(t) || !$e(t) ? t : t.default ? t.default : null;
    s = de(i) ? [i] : i, vt(s) && ki(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function ki(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && gt(r); o++) {
    const a = t[o];
    de(a) && (r = cm(e, t[o], n));
  }
  return r;
}
function cm(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = um(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function um(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (vt(n) || $e(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Er = [];
Er[
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
Er[
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
Er[
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
Er[
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
Er[
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
Er[
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
Er[
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
const dm = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function fm(e) {
  return dm.test(e);
}
function pm(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function mm(e) {
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
function hm(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : fm(t) ? pm(t) : "*" + t;
}
function gm(e) {
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
      if (o = 0, s === void 0 || (s = hm(s), s === !1))
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
      return n++, i = "\\" + v, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && y())) {
      if (l = mm(a), m = Er[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = h[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Si = /* @__PURE__ */ new Map();
function vm(e, t) {
  return Me(e) ? e[t] : null;
}
function bm(e, t) {
  if (!Me(e))
    return null;
  let n = Si.get(t);
  if (n || (n = gm(t), n && Si.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Mu.includes(s) && Dn(o))
      return null;
    const i = o[s];
    if (i === void 0 || ot(o))
      return null;
    o = i, a++;
  }
  return o;
}
const ym = "11.2.2", Wa = -1, La = "en-US", Ti = "", Ei = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function _m() {
  return {
    upper: (e, t) => t === "text" && de(e) ? e.toUpperCase() : t === "vnode" && Me(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && de(e) ? e.toLowerCase() : t === "vnode" && Me(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && de(e) ? Ei(e) : t === "vnode" && Me(e) && "__v_isVNode" in e ? Ei(e.children) : e
  };
}
let Fu;
function wm(e) {
  Fu = e;
}
let zu;
function km(e) {
  zu = e;
}
let Bu;
function Sm(e) {
  Bu = e;
}
let Vu = null;
const Ai = (e) => {
  Vu = e;
}, Tm = () => Vu;
let Ci = 0;
function Em(e = {}) {
  const t = ot(e.onWarn) ? e.onWarn : vp, n = de(e.version) ? e.version : ym, r = de(e.locale) || ot(e.locale) ? e.locale : La, o = ot(r) ? La : r, a = vt(e.fallbackLocale) || $e(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = $e(e.messages) ? e.messages : hs(o), i = $e(e.datetimeFormats) ? e.datetimeFormats : hs(o), l = $e(e.numberFormats) ? e.numberFormats : hs(o), u = Pt(We(), e.modifiers, _m()), d = e.pluralRules || We(), m = ot(e.missing) ? e.missing : null, h = gt(e.missingWarn) || Ia(e.missingWarn) ? e.missingWarn : !0, y = gt(e.fallbackWarn) || Ia(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, b = !!e.unresolving, L = ot(e.postTranslation) ? e.postTranslation : null, p = $e(e.processor) ? e.processor : null, C = gt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter, I = ot(e.messageCompiler) ? e.messageCompiler : Fu, w = ot(e.messageResolver) ? e.messageResolver : zu || vm, E = ot(e.localeFallbacker) ? e.localeFallbacker : Bu || im, x = Me(e.fallbackContext) ? e.fallbackContext : void 0, Z = e, Q = Me(Z.__datetimeFormatters) ? Z.__datetimeFormatters : /* @__PURE__ */ new Map(), se = Me(Z.__numberFormatters) ? Z.__numberFormatters : /* @__PURE__ */ new Map(), he = Me(Z.__meta) ? Z.__meta : {};
  Ci++;
  const le = {
    version: n,
    cid: Ci,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: d,
    missing: m,
    missingWarn: h,
    fallbackWarn: y,
    fallbackFormat: v,
    unresolving: b,
    postTranslation: L,
    processor: p,
    warnHtmlMessage: C,
    escapeParameter: P,
    messageCompiler: I,
    messageResolver: w,
    localeFallbacker: E,
    fallbackContext: x,
    onWarn: t,
    __meta: he
  };
  return le.datetimeFormats = i, le.numberFormats = l, le.__datetimeFormatters = Q, le.__numberFormatters = se, le;
}
const hs = (e) => ({ [e]: We() });
function il(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return de(i) ? i : t;
  } else
    return t;
}
function Io(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Am(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Cm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Am(e, t[r]))
      return !0;
  return !1;
}
function Ii(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, m] = Rs(...t), h = gt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  gt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, v = ll(e, d), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!de(l) || l === "")
    return new Intl.DateTimeFormat(v, m).format(u);
  let L = {}, p, C = null;
  const P = "datetime format";
  for (let E = 0; E < b.length && (p = b[E], L = n[p] || {}, C = L[l], !$e(C)); E++)
    il(e, l, p, h, P);
  if (!$e(C) || !de(p))
    return r ? Wa : l;
  let I = `${p}__${l}`;
  ja(m) || (I = `${I}__${JSON.stringify(m)}`);
  let w = i.get(I);
  return w || (w = new Intl.DateTimeFormat(p, Pt({}, C, m)), i.set(I, w)), y ? w.formatToParts(u) : w.format(u);
}
const Uu = [
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
function Rs(...e) {
  const [t, n, r, o] = e, a = We();
  let s = We(), i;
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
  } else if (_p(t)) {
    if (isNaN(t.getTime()))
      throw nr(tr.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Lt(t))
    i = t;
  else
    throw nr(tr.INVALID_ARGUMENT);
  return de(n) ? a.key = n : $e(n) && Object.keys(n).forEach((l) => {
    Uu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), de(r) ? a.locale = r : $e(r) && (s = r), $e(o) && (s = o), [a.key || "", i, a, s];
}
function Li(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Oi(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, m] = Ns(...t), h = gt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  gt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, v = ll(e, d), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!de(l) || l === "")
    return new Intl.NumberFormat(v, m).format(u);
  let L = {}, p, C = null;
  const P = "number format";
  for (let E = 0; E < b.length && (p = b[E], L = n[p] || {}, C = L[l], !$e(C)); E++)
    il(e, l, p, h, P);
  if (!$e(C) || !de(p))
    return r ? Wa : l;
  let I = `${p}__${l}`;
  ja(m) || (I = `${I}__${JSON.stringify(m)}`);
  let w = i.get(I);
  return w || (w = new Intl.NumberFormat(p, Pt({}, C, m)), i.set(I, w)), y ? w.formatToParts(u) : w.format(u);
}
const ju = [
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
function Ns(...e) {
  const [t, n, r, o] = e, a = We();
  let s = We();
  if (!Lt(t))
    throw nr(tr.INVALID_ARGUMENT);
  const i = t;
  return de(n) ? a.key = n : $e(n) && Object.keys(n).forEach((l) => {
    ju.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), de(r) ? a.locale = r : $e(r) && (s = r), $e(o) && (s = o), [a.key || "", i, a, s];
}
function xi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Im = (e) => e, Lm = (e) => "", Om = "text", xm = (e) => e.length === 0 ? "" : ol(e), Rm = Ep;
function Ri(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Nm(e) {
  const t = Lt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Lt(e.named.count) || Lt(e.named.n)) ? Lt(e.named.count) ? e.named.count : Lt(e.named.n) ? e.named.n : t : t;
}
function Pm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function $m(e = {}) {
  const t = e.locale, n = Nm(e), r = Me(e.pluralRules) && de(t) && ot(e.pluralRules[t]) ? e.pluralRules[t] : Ri, o = Me(e.pluralRules) && de(t) && ot(e.pluralRules[t]) ? Ri : void 0, a = (p) => p[r(n, p.length, o)], s = e.list || [], i = (p) => s[p], l = e.named || We();
  Lt(e.pluralIndex) && Pm(n, l);
  const u = (p) => l[p];
  function d(p, C) {
    const P = ot(e.messages) ? e.messages(p, !!C) : Me(e.messages) ? e.messages[p] : !1;
    return P || (e.parent ? e.parent.message(p) : Lm);
  }
  const m = (p) => e.modifiers ? e.modifiers[p] : Im, h = $e(e.processor) && ot(e.processor.normalize) ? e.processor.normalize : xm, y = $e(e.processor) && ot(e.processor.interpolate) ? e.processor.interpolate : Rm, v = $e(e.processor) && de(e.processor.type) ? e.processor.type : Om, L = {
    list: i,
    named: u,
    plural: a,
    linked: (p, ...C) => {
      const [P, I] = C;
      let w = "text", E = "";
      C.length === 1 ? Me(P) ? (E = P.modifier || E, w = P.type || w) : de(P) && (E = P || E) : C.length === 2 && (de(P) && (E = P || E), de(I) && (w = I || w));
      const x = d(p, !0)(L), Z = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && vt(x) && E ? x[0] : x
      );
      return E ? m(E)(Z, w) : Z;
    },
    message: d,
    type: v,
    interpolate: y,
    normalize: h,
    values: Pt(We(), s, l)
  };
  return L;
}
const Ni = () => "", or = (e) => ot(e);
function Pi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Ps(...t), d = gt(u.missingWarn) ? u.missingWarn : e.missingWarn, m = gt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = gt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, v = de(u.default) || gt(u.default) ? gt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, b = n || v != null && (de(v) || ot(v)), L = ll(e, u);
  h && Mm(u);
  let [p, C, P] = y ? [
    l,
    L,
    i[L] || We()
  ] : Hu(e, l, L, s, m, d), I = p, w = l;
  if (!y && !(de(I) || Dn(I) || or(I)) && b && (I = v, w = I), !y && (!(de(I) || Dn(I) || or(I)) || !de(C)))
    return o ? Wa : l;
  let E = !1;
  const x = () => {
    E = !0;
  }, Z = or(I) ? I : Wu(e, l, C, I, w, x);
  if (E)
    return I;
  const Q = zm(e, C, P, u), se = $m(Q), he = Dm(e, Z, se);
  let le = r ? r(he, l) : he;
  return h && de(le) && (le = kp(le)), le;
}
function Mm(e) {
  vt(e.list) ? e.list = e.list.map((t) => de(t) ? hi(t) : t) : Me(e.named) && Object.keys(e.named).forEach((t) => {
    de(e.named[t]) && (e.named[t] = hi(e.named[t]));
  });
}
function Hu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let m = We(), h, y = null;
  const v = "translate";
  for (let b = 0; b < d.length && (h = d[b], m = s[h] || We(), (y = l(m, t)) === null && (y = m[t]), !(de(y) || Dn(y) || or(y))); b++)
    if (!Cm(h, d)) {
      const L = il(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        a,
        v
      );
      L !== t && (y = L);
    }
  return [y, h, m];
}
function Wu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (or(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Fm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Dm(e, t, n) {
  return t(n);
}
function Ps(...e) {
  const [t, n, r] = e, o = We();
  if (!de(t) && !Lt(t) && !or(t) && !Dn(t))
    throw nr(tr.INVALID_ARGUMENT);
  const a = Lt(t) ? String(t) : (or(t), t);
  return Lt(n) ? o.plural = n : de(n) ? o.default = n : $e(n) && !ja(n) ? o.named = n : vt(n) && (o.list = n), Lt(r) ? o.plural = r : de(r) ? o.default = r : $e(r) && Pt(o, r), [a, o];
}
function Fm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => bp(t, n, s)
  };
}
function zm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, v) => {
      let b = s(n, y);
      if (b == null && (d || v)) {
        const [, , L] = Hu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          l,
          u
        );
        b = s(L, y);
      }
      if (de(b) || Dn(b)) {
        let L = !1;
        const C = Wu(e, y, t, b, y, () => {
          L = !0;
        });
        return L ? Ni : C;
      } else return or(b) ? b : Ni;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Lt(r.plural) && (h.pluralIndex = r.plural), h;
}
Zp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Bm = "11.2.2";
function Vm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (wa().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (wa().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (wa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const mo = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: lm,
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
const $s = /* @__PURE__ */ jr("__translateVNode"), Ms = /* @__PURE__ */ jr("__datetimeParts"), Ds = /* @__PURE__ */ jr("__numberParts"), Um = jr("__setPluralRules"), Gu = /* @__PURE__ */ jr("__injectWithOption"), Fs = /* @__PURE__ */ jr("__dispose");
function Go(e) {
  if (!Me(e) || Dn(e))
    return e;
  for (const t in e)
    if (wn(e, t))
      if (!t.includes("."))
        Me(e[t]) && Go(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = We()), !Me(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Dn(o) ? Mu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Dn(o)) {
          const s = o[n[r]];
          Me(s) && Go(s);
        }
      }
  return e;
}
function Ku(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = $e(n) ? n : vt(r) ? We() : { [e]: We() };
  if (vt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || We(), ka(u, s[l])) : ka(u, s);
    } else
      de(i) && ka(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      wn(s, i) && Go(s[i]);
  return s;
}
function jm(e) {
  return e.type;
}
function Hm(e, t, n) {
  let r = Me(t.messages) ? t.messages : We();
  "__i18nGlobal" in n && (r = Ku(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Me(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Me(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function $i(e) {
  return F(Su, null, e, 0);
}
function qu() {
  return "currentInstance" in us ? us["currentInstance"] : us.getCurrentInstance();
}
const Mi = () => [], Wm = () => !1;
let Di = 0;
function Fi(e) {
  return (t, n, r, o) => e(n, r, qu() || void 0, o);
}
function Gm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = pi ? K : wr;
  let s = gt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : de(e.locale) ? e.locale : La
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : de(e.fallbackLocale) || vt(e.fallbackLocale) || $e(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Ku(i.value, e)), d = a($e(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a($e(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let h = t ? t.missingWarn : gt(e.missingWarn) || Ia(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : gt(e.fallbackWarn) || Ia(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : gt(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, L = ot(e.missing) ? e.missing : null, p = ot(e.missing) ? Fi(e.missing) : null, C = ot(e.postTranslation) ? e.postTranslation : null, P = t ? t.warnHtmlMessage : gt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const w = t ? t.modifiers : $e(e.modifiers) ? e.modifiers : {};
  let E = e.pluralRules || t && t.pluralRules, x;
  x = (() => {
    r && Ai(null);
    const A = {
      version: Bm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: w,
      pluralRules: E,
      missing: p === null ? void 0 : p,
      missingWarn: h,
      fallbackWarn: y,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: P,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    A.datetimeFormats = d.value, A.numberFormats = m.value, A.__datetimeFormatters = $e(x) ? x.__datetimeFormatters : void 0, A.__numberFormatters = $e(x) ? x.__numberFormatters : void 0;
    const z = Em(A);
    return r && Ai(z), z;
  })(), Io(x, i.value, l.value);
  function Q() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      m.value
    ];
  }
  const se = N({
    get: () => i.value,
    set: (A) => {
      x.locale = A, i.value = A;
    }
  }), he = N({
    get: () => l.value,
    set: (A) => {
      x.fallbackLocale = A, l.value = A, Io(x, i.value, A);
    }
  }), le = N(() => u.value), ye = /* @__PURE__ */ N(() => d.value), be = /* @__PURE__ */ N(() => m.value);
  function V() {
    return ot(C) ? C : null;
  }
  function ee(A) {
    C = A, x.postTranslation = A;
  }
  function W() {
    return L;
  }
  function pe(A) {
    A !== null && (p = Fi(A)), L = A, x.missing = p;
  }
  const Y = (A, z, Se, Re, qe, $t) => {
    Q();
    let Ye;
    try {
      r || (x.fallbackContext = t ? Tm() : void 0), Ye = A(x);
    } finally {
      r || (x.fallbackContext = void 0);
    }
    if (Se !== "translate exists" && // for not `te` (e.g `t`)
    Lt(Ye) && Ye === Wa || Se === "translate exists" && !Ye) {
      const [qt, pr] = z();
      return t && v ? Re(t) : qe(qt);
    } else {
      if ($t(Ye))
        return Ye;
      throw Wo(mo.UNEXPECTED_RETURN_TYPE);
    }
  };
  function G(...A) {
    return Y((z) => Reflect.apply(Pi, null, [z, ...A]), () => Ps(...A), "translate", (z) => Reflect.apply(z.t, z, [...A]), (z) => z, (z) => de(z));
  }
  function De(...A) {
    const [z, Se, Re] = A;
    if (Re && !Me(Re))
      throw Wo(mo.INVALID_ARGUMENT);
    return G(z, Se, Pt({ resolvedMessage: !0 }, Re || {}));
  }
  function Be(...A) {
    return Y((z) => Reflect.apply(Ii, null, [z, ...A]), () => Rs(...A), "datetime format", (z) => Reflect.apply(z.d, z, [...A]), () => Ti, (z) => de(z) || vt(z));
  }
  function ge(...A) {
    return Y((z) => Reflect.apply(Oi, null, [z, ...A]), () => Ns(...A), "number format", (z) => Reflect.apply(z.n, z, [...A]), () => Ti, (z) => de(z) || vt(z));
  }
  function _e(A) {
    return A.map((z) => de(z) || Lt(z) || gt(z) ? $i(String(z)) : z);
  }
  const Ce = {
    normalize: _e,
    interpolate: (A) => A,
    type: "vnode"
  };
  function Qe(...A) {
    return Y((z) => {
      let Se;
      const Re = z;
      try {
        Re.processor = Ce, Se = Reflect.apply(Pi, null, [Re, ...A]);
      } finally {
        Re.processor = null;
      }
      return Se;
    }, () => Ps(...A), "translate", (z) => z[$s](...A), (z) => [$i(z)], (z) => vt(z));
  }
  function oe(...A) {
    return Y((z) => Reflect.apply(Oi, null, [z, ...A]), () => Ns(...A), "number format", (z) => z[Ds](...A), Mi, (z) => de(z) || vt(z));
  }
  function st(...A) {
    return Y((z) => Reflect.apply(Ii, null, [z, ...A]), () => Rs(...A), "datetime format", (z) => z[Ms](...A), Mi, (z) => de(z) || vt(z));
  }
  function ut(A) {
    E = A, x.pluralRules = E;
  }
  function Ge(A, z) {
    return Y(() => {
      if (!A)
        return !1;
      const Se = de(z) ? z : i.value, Re = Ct(Se), qe = x.messageResolver(Re, A);
      return Dn(qe) || or(qe) || de(qe);
    }, () => [A], "translate exists", (Se) => Reflect.apply(Se.te, Se, [A, z]), Wm, (Se) => gt(Se));
  }
  function At(A) {
    let z = null;
    const Se = Du(x, l.value, i.value);
    for (let Re = 0; Re < Se.length; Re++) {
      const qe = u.value[Se[Re]] || {}, $t = x.messageResolver(qe, A);
      if ($t != null) {
        z = $t;
        break;
      }
    }
    return z;
  }
  function dt(A) {
    const z = At(A);
    return z ?? (t ? t.tm(A) || {} : {});
  }
  function Ct(A) {
    return u.value[A] || {};
  }
  function lt(A, z) {
    if (o) {
      const Se = { [A]: z };
      for (const Re in Se)
        wn(Se, Re) && Go(Se[Re]);
      z = Se[A];
    }
    u.value[A] = z, x.messages = u.value;
  }
  function nt(A, z) {
    u.value[A] = u.value[A] || {};
    const Se = { [A]: z };
    if (o)
      for (const Re in Se)
        wn(Se, Re) && Go(Se[Re]);
    z = Se[A], ka(z, u.value[A]), x.messages = u.value;
  }
  function Tt(A) {
    return d.value[A] || {};
  }
  function T(A, z) {
    d.value[A] = z, x.datetimeFormats = d.value, Li(x, A, z);
  }
  function O(A, z) {
    d.value[A] = Pt(d.value[A] || {}, z), x.datetimeFormats = d.value, Li(x, A, z);
  }
  function U(A) {
    return m.value[A] || {};
  }
  function re(A, z) {
    m.value[A] = z, x.numberFormats = m.value, xi(x, A, z);
  }
  function Le(A, z) {
    m.value[A] = Pt(m.value[A] || {}, z), x.numberFormats = m.value, xi(x, A, z);
  }
  Di++, t && pi && (Ae(t.locale, (A) => {
    s && (i.value = A, x.locale = A, Io(x, i.value, l.value));
  }), Ae(t.fallbackLocale, (A) => {
    s && (l.value = A, x.fallbackLocale = A, Io(x, i.value, l.value));
  }));
  const ve = {
    id: Di,
    locale: se,
    fallbackLocale: he,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(A) {
      s = A, A && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Io(x, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: le,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return E || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return h;
    },
    set missingWarn(A) {
      h = A, x.missingWarn = h;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(A) {
      y = A, x.fallbackWarn = y;
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
      b = A, x.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return P;
    },
    set warnHtmlMessage(A) {
      P = A, x.warnHtmlMessage = A;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(A) {
      I = A, x.escapeParameter = A;
    },
    t: G,
    getLocaleMessage: Ct,
    setLocaleMessage: lt,
    mergeLocaleMessage: nt,
    getPostTranslationHandler: V,
    setPostTranslationHandler: ee,
    getMissingHandler: W,
    setMissingHandler: pe,
    [Um]: ut
  };
  return ve.datetimeFormats = ye, ve.numberFormats = be, ve.rt = De, ve.te = Ge, ve.tm = dt, ve.d = Be, ve.n = ge, ve.getDateTimeFormat = Tt, ve.setDateTimeFormat = T, ve.mergeDateTimeFormat = O, ve.getNumberFormat = U, ve.setNumberFormat = re, ve.mergeNumberFormat = Le, ve[Gu] = n, ve[$s] = Qe, ve[Ms] = st, ve[Ds] = oe, ve;
}
const cl = {
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
function Km({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === ct ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, We());
}
function Yu() {
  return ct;
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
}, cl);
function qm(e) {
  return vt(e) && !de(e[0]);
}
function Zu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = We();
    e.locale && (s.locale = e.locale), de(e.format) ? s.key = e.format : Me(e.format) && (de(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((h, y) => n.includes(y) ? Pt(We(), h, { [y]: e.format[y] }) : h, We()));
    const l = r(e.value, s, i);
    let u = [s.key];
    vt(l) ? u = l.map((h, y) => {
      const v = o[h.type], b = v ? v({ [h.type]: h.value, index: y, parts: l }) : [h.value];
      return qm(b) && (b[0].key = `${h.type}-${y}`), b;
    }) : de(l) && (u = [l]);
    const d = Pt(We(), a), m = de(e.tag) || Me(e.tag) ? e.tag : Yu();
    return ku(m, d, u);
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
}, cl);
const Ym = /* @__PURE__ */ jr("global-vue-i18n");
function Qo(e = {}) {
  const t = qu();
  if (t == null)
    throw Wo(mo.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wo(mo.NOT_INSTALLED);
  const n = Zm(t), r = Qm(n), o = jm(t), a = Xm(e, o);
  if (a === "global")
    return Hm(r, e, o), r;
  if (a === "parent") {
    let l = Jm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Pt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Gm(l), s.__composerExtend && (i[Fs] = s.__composerExtend(i)), th(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function Zm(e) {
  const t = je(e.isCE ? Ym : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Wo(e.isCE ? mo.NOT_INSTALLED_WITH_PROVIDE : mo.UNEXPECTED_ERROR);
  return t;
}
function Xm(e, t) {
  return ja(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Qm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Jm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = eh(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Gu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function eh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function th(e, t, n) {
  yt(() => {
  }, t), Ua(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Fs];
    o && (o(), delete r[Fs]);
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
}, cl);
Vm();
wm(sm);
km(bm);
Sm(Du);
function ul() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Hr = ul();
function Xu(e) {
  Hr = e;
}
var Fo = { exec: () => null };
function Pe(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Wt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var nh = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Wt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, rh = /^(?:[ \t]*(?:\n|$))+/, oh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ah = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Jo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, sh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, dl = /(?:[*+-]|\d{1,9}[.)])/, Qu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Ju = Pe(Qu).replace(/bull/g, dl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), lh = Pe(Qu).replace(/bull/g, dl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), fl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ih = /^[^\n]+/, pl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, ch = Pe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", pl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), uh = Pe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, dl).getRegex(), Ga = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ml = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, dh = Pe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ml).replace("tag", Ga).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ed = Pe(fl).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex(), fh = Pe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ed).getRegex(), hl = { blockquote: fh, code: oh, def: ch, fences: ah, heading: sh, hr: Jo, html: dh, lheading: Ju, list: uh, newline: rh, paragraph: ed, table: Fo, text: ih }, zi = Pe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex(), ph = { ...hl, lheading: lh, table: zi, paragraph: Pe(fl).replace("hr", Jo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", zi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ga).getRegex() }, mh = { ...hl, html: Pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ml).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Fo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Pe(fl).replace("hr", Jo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ju).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, hh = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, gh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, td = /^( {2,}|\\)\n(?!\s*$)/, vh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ka = /[\p{P}\p{S}]/u, gl = /[\s\p{P}\p{S}]/u, nd = /[^\s\p{P}\p{S}]/u, bh = Pe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, gl).getRegex(), rd = /(?!~)[\p{P}\p{S}]/u, yh = /(?!~)[\s\p{P}\p{S}]/u, _h = /(?:[^\s\p{P}\p{S}]|~)/u, wh = Pe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", nh ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), od = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, kh = Pe(od, "u").replace(/punct/g, Ka).getRegex(), Sh = Pe(od, "u").replace(/punct/g, rd).getRegex(), ad = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Th = Pe(ad, "gu").replace(/notPunctSpace/g, nd).replace(/punctSpace/g, gl).replace(/punct/g, Ka).getRegex(), Eh = Pe(ad, "gu").replace(/notPunctSpace/g, _h).replace(/punctSpace/g, yh).replace(/punct/g, rd).getRegex(), Ah = Pe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, nd).replace(/punctSpace/g, gl).replace(/punct/g, Ka).getRegex(), Ch = Pe(/\\(punct)/, "gu").replace(/punct/g, Ka).getRegex(), Ih = Pe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Lh = Pe(ml).replace("(?:-->|$)", "-->").getRegex(), Oh = Pe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Lh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Oa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, xh = Pe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Oa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), sd = Pe(/^!?\[(label)\]\[(ref)\]/).replace("label", Oa).replace("ref", pl).getRegex(), ld = Pe(/^!?\[(ref)\](?:\[\])?/).replace("ref", pl).getRegex(), Rh = Pe("reflink|nolink(?!\\()", "g").replace("reflink", sd).replace("nolink", ld).getRegex(), Bi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, vl = { _backpedal: Fo, anyPunctuation: Ch, autolink: Ih, blockSkip: wh, br: td, code: gh, del: Fo, emStrongLDelim: kh, emStrongRDelimAst: Th, emStrongRDelimUnd: Ah, escape: hh, link: xh, nolink: ld, punctuation: bh, reflink: sd, reflinkSearch: Rh, tag: Oh, text: vh, url: Fo }, Nh = { ...vl, link: Pe(/^!?\[(label)\]\((.*?)\)/).replace("label", Oa).getRegex(), reflink: Pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Oa).getRegex() }, zs = { ...vl, emStrongRDelimAst: Eh, emStrongLDelim: Sh, url: Pe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Bi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Pe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Bi).getRegex() }, Ph = { ...zs, br: Pe(td).replace("{2,}", "*").getRegex(), text: Pe(zs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, fa = { normal: hl, gfm: ph, pedantic: mh }, Lo = { normal: vl, gfm: zs, breaks: Ph, pedantic: Nh }, $h = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Vi = (e) => $h[e];
function Xn(e, t) {
  if (t) {
    if (Wt.escapeTest.test(e)) return e.replace(Wt.escapeReplace, Vi);
  } else if (Wt.escapeTestNoEncode.test(e)) return e.replace(Wt.escapeReplaceNoEncode, Vi);
  return e;
}
function Ui(e) {
  try {
    e = encodeURI(e).replace(Wt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function ji(e, t) {
  let n = e.replace(Wt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Wt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Wt.slashPipe, "|");
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
function Mh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Hi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function Dh(e, t, n) {
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
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Oo(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Dh(n, t[3] || "", this.rules);
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
        let l = !1, u = "", d = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), h = e.split(`
`, 1)[0], y = !m.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, d = m.trimStart()) : y ? v = t[1].length + 1 : (v = t[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, d = m.slice(v), v += t[1].length), y && this.rules.other.blankLine.test(h) && (u += h + `
`, e = e.substring(h.length + 1), l = !0), !l) {
          let b = this.rules.other.nextBulletRegex(v), L = this.rules.other.hrRegex(v), p = this.rules.other.fencesBeginRegex(v), C = this.rules.other.headingBeginRegex(v), P = this.rules.other.htmlBeginRegex(v);
          for (; e; ) {
            let I = e.split(`
`, 1)[0], w;
            if (h = I, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), w = h) : w = h.replace(this.rules.other.tabCharGlobal, "    "), p.test(h) || C.test(h) || P.test(h) || b.test(h) || L.test(h)) break;
            if (w.search(this.rules.other.nonSpaceChar) >= v || !h.trim()) d += `
` + w.slice(v);
            else {
              if (y || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || p.test(m) || C.test(m) || L.test(m)) break;
              d += `
` + h;
            }
            !y && !h.trim() && (y = !0), u += I + `
`, e = e.substring(I.length + 1), m = w.slice(v);
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
    let n = ji(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(ji(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = Mh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), Hi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return Hi(n, o, n[0], this.lexer, this.rules);
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
}, bn = class Bs {
  constructor(t) {
    He(this, "tokens");
    He(this, "options");
    He(this, "state");
    He(this, "inlineQueue");
    He(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Hr, this.options.tokenizer = this.options.tokenizer || new xa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Wt, block: fa.normal, inline: Lo.normal };
    this.options.pedantic ? (n.block = fa.pedantic, n.inline = Lo.pedantic) : this.options.gfm && (n.block = fa.gfm, this.options.breaks ? n.inline = Lo.breaks : n.inline = Lo.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: fa, inline: Lo };
  }
  static lex(t, n) {
    return new Bs(n).lex(t);
  }
  static lexInline(t, n) {
    return new Bs(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Wt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Wt.tabCharGlobal, "    ").replace(Wt.spaceLine, "")); t; ) {
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
    this.options = t || Hr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Wt.notSpaceStart)?.[0], a = t.replace(Wt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Xn(o) + '">' + (r ? a : Xn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Xn(a, !0)) + `</code></pre>
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
    return `<code>${Xn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Ui(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Xn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Ui(t);
    if (a === null) return Xn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Xn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Xn(t.text);
  }
}, bl = class {
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
}, yn = class Vs {
  constructor(t) {
    He(this, "options");
    He(this, "renderer");
    He(this, "textRenderer");
    this.options = t || Hr, this.options.renderer = this.options.renderer || new Ra(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new bl();
  }
  static parse(t, n) {
    return new Vs(n).parse(t);
  }
  static parseInline(t, n) {
    return new Vs(n).parseInline(t);
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
}, _a, Mo = (_a = class {
  constructor(e) {
    He(this, "options");
    He(this, "block");
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
}, He(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), He(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a), Fh = class {
  constructor(...t) {
    He(this, "defaults", ul());
    He(this, "options", this.setOptions);
    He(this, "parse", this.parseMarkdown(!0));
    He(this, "parseInline", this.parseMarkdown(!1));
    He(this, "Parser", yn);
    He(this, "Renderer", Ra);
    He(this, "TextRenderer", bl);
    He(this, "Lexer", bn);
    He(this, "Tokenizer", xa);
    He(this, "Hooks", Mo);
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
        let a = this.defaults.hooks || new Mo();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          Mo.passThroughHooks.has(s) ? a[i] = (d) => {
            if (this.defaults.async && Mo.passThroughHooksRespectAsync.has(s)) return (async () => {
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
        let o = "<p>An error occurred:</p><pre>" + Xn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Br = new Fh();
function Ue(e, t) {
  return Br.parse(e, t);
}
Ue.options = Ue.setOptions = function(e) {
  return Br.setOptions(e), Ue.defaults = Br.defaults, Xu(Ue.defaults), Ue;
};
Ue.getDefaults = ul;
Ue.defaults = Hr;
Ue.use = function(...e) {
  return Br.use(...e), Ue.defaults = Br.defaults, Xu(Ue.defaults), Ue;
};
Ue.walkTokens = function(e, t) {
  return Br.walkTokens(e, t);
};
Ue.parseInline = Br.parseInline;
Ue.Parser = yn;
Ue.parser = yn.parse;
Ue.Renderer = Ra;
Ue.TextRenderer = bl;
Ue.Lexer = bn;
Ue.lexer = bn.lex;
Ue.Tokenizer = xa;
Ue.Hooks = Mo;
Ue.parse = Ue;
Ue.options;
Ue.setOptions;
Ue.use;
Ue.walkTokens;
Ue.parseInline;
yn.parse;
bn.lex;
function zh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function xt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Wi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Wi || (Wi = {}));
async function Bh(e, t) {
  await xt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Vh(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return xt("plugin:event|listen", {
    event: e,
    target: o,
    handler: zh(t)
  }).then((a) => async () => Bh(e, a));
}
async function id() {
  return await xt("local_ai_get_config");
}
async function Sa(e) {
  return await xt("local_ai_save_config", { config: e });
}
async function cd(e) {
  return await xt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Uh() {
  return await xt("local_ai_get_runtime_status");
}
async function ud() {
  return await xt("local_ai_get_status");
}
async function jh(e) {
  return await xt("local_ai_start_service", {
    config: e ?? null
  });
}
async function dd() {
  return await xt("local_ai_restart_service");
}
async function Hh() {
  await xt("local_ai_stop_service");
}
function fd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Wh(e, t, n = {}) {
  const r = n.requestId ?? fd(), o = await Vh(
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
async function gs(e) {
  return await xt("local_ai_cancel_chat_stream", { requestId: e });
}
async function Gh(e) {
  return await xt("local_ai_web_search", {
    request: e
  });
}
async function Kh() {
  return await xt("local_ai_get_chat_histories");
}
async function qh(e) {
  return await xt("local_ai_save_chat_history", {
    history: e
  });
}
async function Yh(e) {
  return await xt("local_ai_delete_chat_history", {
    historyId: e
  });
}
const Zh = /* @__PURE__ */ new Set([
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
]), Xh = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), Qh = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), Jh = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), eg = 5, tg = 1024 * 1024, ng = 5 * 1024 * 1024, Gi = 4e4, yl = (e) => e.split(".").pop()?.toLowerCase() ?? "", rg = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, vs = (e) => Xh.has(e.type) || Qh.has(yl(e.name)), Ki = (e) => e.type.startsWith("text/") || Zh.has(yl(e.name)), og = (e) => Jh.has(yl(e.name)), ag = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), sg = async (e) => {
  const t = await e.text();
  return t.length <= Gi ? { text: t, truncated: !1 } : {
    text: t.slice(0, Gi),
    truncated: !0
  };
}, lg = (e, t) => {
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
function qi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ig(e) {
  if (Array.isArray(e)) return e;
}
function cg(e, t) {
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
function ug() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dg(e, t) {
  return ig(e) || cg(e, t) || fg(e, t) || ug();
}
function fg(e, t) {
  if (e) {
    if (typeof e == "string") return qi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qi(e, t) : void 0;
  }
}
const pd = Object.entries, Yi = Object.setPrototypeOf, pg = Object.isFrozen, mg = Object.getPrototypeOf, hg = Object.getOwnPropertyDescriptor;
let Kt = Object.freeze, fn = Object.seal, io = Object.create, md = typeof Reflect < "u" && Reflect, Us = md.apply, js = md.construct;
Kt || (Kt = function(t) {
  return t;
});
fn || (fn = function(t) {
  return t;
});
Us || (Us = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
js || (js = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const no = kt(Array.prototype.forEach), gg = kt(Array.prototype.lastIndexOf), Zi = kt(Array.prototype.pop), ro = kt(Array.prototype.push), vg = kt(Array.prototype.splice), jt = Array.isArray, Do = kt(String.prototype.toLowerCase), bs = kt(String.prototype.toString), Xi = kt(String.prototype.match), oo = kt(String.prototype.replace), Qi = kt(String.prototype.indexOf), bg = kt(String.prototype.trim), yg = kt(Number.prototype.toString), _g = kt(Boolean.prototype.toString), Ji = typeof BigInt > "u" ? null : kt(BigInt.prototype.toString), ec = typeof Symbol > "u" ? null : kt(Symbol.prototype.toString), it = kt(Object.prototype.hasOwnProperty), xo = kt(Object.prototype.toString), Rt = kt(RegExp.prototype.test), Ro = wg(TypeError);
function kt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Us(e, t, r);
  };
}
function wg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return js(e, n);
  };
}
function Ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Do;
  if (Yi && Yi(e, null), !jt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (pg(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function kg(e) {
  for (let t = 0; t < e.length; t++)
    it(e, t) || (e[t] = null);
  return e;
}
function Dt(e) {
  const t = io(null);
  for (const r of pd(e)) {
    var n = dg(r, 2);
    const o = n[0], a = n[1];
    it(e, o) && (jt(a) ? t[o] = kg(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Dt(a) : t[o] = a);
  }
  return t;
}
function Sg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return yg(e);
    case "boolean":
      return _g(e);
    case "bigint":
      return Ji ? Ji(e) : "0";
    case "symbol":
      return ec ? ec(e) : "Symbol()";
    case "undefined":
      return xo(e);
    case "function":
    case "object": {
      if (e === null)
        return xo(e);
      const t = e, n = xn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : xo(r);
      }
      return xo(e);
    }
    default:
      return xo(e);
  }
}
function xn(e, t) {
  for (; e !== null; ) {
    const r = hg(e, t);
    if (r) {
      if (r.get)
        return kt(r.get);
      if (typeof r.value == "function")
        return kt(r.value);
    }
    e = mg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Tg(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const tc = Kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ys = Kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _s = Kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Eg = Kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ws = Kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ag = Kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), nc = Kt(["#text"]), rc = Kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ks = Kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oc = Kt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pa = Kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Cg = fn(/{{[\w\W]*|^[\w\W]*}}/g), Ig = fn(/<%[\w\W]*|^[\w\W]*%>/g), Lg = fn(/\${[\w\W]*/g), Og = fn(/^data-[\-\w.\u00B7-\uFFFF]+$/), xg = fn(/^aria-[\-\w]+$/), ac = fn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rg = fn(/^(?:\w+script|data):/i), Ng = fn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Pg = fn(/^html$/i), $g = fn(/^[a-z][.\w]*(-[.\w]+)+$/i), On = {
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
}, Mg = function() {
  return typeof window > "u" ? null : window;
}, Dg = function(t, n) {
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
}, sc = function() {
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
function hd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mg();
  const t = (ue) => hd(ue);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== On.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, h = i.prototype, y = xn(h, "cloneNode"), v = xn(h, "remove"), b = xn(h, "nextSibling"), L = xn(h, "childNodes"), p = xn(h, "parentNode"), C = xn(h, "shadowRoot"), P = xn(h, "attributes"), I = s && s.prototype ? xn(s.prototype, "nodeType") : null, w = s && s.prototype ? xn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ue = n.createElement("template");
    ue.content && ue.content.ownerDocument && (n = ue.content.ownerDocument);
  }
  let E, x = "";
  const Z = n, Q = Z.implementation, se = Z.createNodeIterator, he = Z.createDocumentFragment, le = Z.getElementsByTagName, ye = r.importNode;
  let be = sc();
  t.isSupported = typeof pd == "function" && typeof p == "function" && Q && Q.createHTMLDocument !== void 0;
  const V = Cg, ee = Ig, W = Lg, pe = Og, Y = xg, G = Rg, De = Ng, Be = $g;
  let ge = ac, _e = null;
  const J = Ie({}, [...tc, ...ys, ..._s, ...ws, ...nc]);
  let Ce = null;
  const Qe = Ie({}, [...rc, ...ks, ...oc, ...pa]);
  let oe = Object.seal(io(null, {
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
  })), st = null, ut = null;
  const Ge = Object.seal(io(null, {
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
  let At = !0, dt = !0, Ct = !1, lt = !0, nt = !1, Tt = !0, T = !1, O = !1, U = !1, re = !1, Le = !1, ve = !1, A = !0, z = !1;
  const Se = "user-content-";
  let Re = !0, qe = !1, $t = {}, Ye = null;
  const qt = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let pr = null;
  const qr = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let Wn = null;
  const Cr = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Gn = "http://www.w3.org/1998/Math/MathML", Yt = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let cn = Zt, Ir = !1, Lr = null;
  const mr = Ie({}, [Gn, Yt, Zt], bs);
  let Or = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), xr = Ie({}, ["annotation-xml"]);
  const Eo = Ie({}, ["title", "style", "font", "a", "script"]);
  let Kn = null;
  const Yr = ["application/xhtml+xml", "text/html"], Zr = "text/html";
  let Ve = null, hn = null;
  const Rr = n.createElement("form"), Xr = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, qn = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (hn && hn === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = Dt(_), Kn = // eslint-disable-next-line unicorn/prefer-includes
    Yr.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Zr : _.PARSER_MEDIA_TYPE, Ve = Kn === "application/xhtml+xml" ? bs : Do, _e = it(_, "ALLOWED_TAGS") && jt(_.ALLOWED_TAGS) ? Ie({}, _.ALLOWED_TAGS, Ve) : J, Ce = it(_, "ALLOWED_ATTR") && jt(_.ALLOWED_ATTR) ? Ie({}, _.ALLOWED_ATTR, Ve) : Qe, Lr = it(_, "ALLOWED_NAMESPACES") && jt(_.ALLOWED_NAMESPACES) ? Ie({}, _.ALLOWED_NAMESPACES, bs) : mr, Wn = it(_, "ADD_URI_SAFE_ATTR") && jt(_.ADD_URI_SAFE_ATTR) ? Ie(Dt(Cr), _.ADD_URI_SAFE_ATTR, Ve) : Cr, pr = it(_, "ADD_DATA_URI_TAGS") && jt(_.ADD_DATA_URI_TAGS) ? Ie(Dt(qr), _.ADD_DATA_URI_TAGS, Ve) : qr, Ye = it(_, "FORBID_CONTENTS") && jt(_.FORBID_CONTENTS) ? Ie({}, _.FORBID_CONTENTS, Ve) : qt, st = it(_, "FORBID_TAGS") && jt(_.FORBID_TAGS) ? Ie({}, _.FORBID_TAGS, Ve) : Dt({}), ut = it(_, "FORBID_ATTR") && jt(_.FORBID_ATTR) ? Ie({}, _.FORBID_ATTR, Ve) : Dt({}), $t = it(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? Dt(_.USE_PROFILES) : _.USE_PROFILES : !1, At = _.ALLOW_ARIA_ATTR !== !1, dt = _.ALLOW_DATA_ATTR !== !1, Ct = _.ALLOW_UNKNOWN_PROTOCOLS || !1, lt = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, nt = _.SAFE_FOR_TEMPLATES || !1, Tt = _.SAFE_FOR_XML !== !1, T = _.WHOLE_DOCUMENT || !1, re = _.RETURN_DOM || !1, Le = _.RETURN_DOM_FRAGMENT || !1, ve = _.RETURN_TRUSTED_TYPE || !1, U = _.FORCE_BODY || !1, A = _.SANITIZE_DOM !== !1, z = _.SANITIZE_NAMED_PROPS || !1, Re = _.KEEP_CONTENT !== !1, qe = _.IN_PLACE || !1, ge = Tg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : ac, cn = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Zt, Or = it(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Dt(_.MATHML_TEXT_INTEGRATION_POINTS) : Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), xr = it(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? Dt(_.HTML_INTEGRATION_POINTS) : Ie({}, ["annotation-xml"]);
    const H = it(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? Dt(_.CUSTOM_ELEMENT_HANDLING) : io(null);
    if (oe = io(null), it(H, "tagNameCheck") && Xr(H.tagNameCheck) && (oe.tagNameCheck = H.tagNameCheck), it(H, "attributeNameCheck") && Xr(H.attributeNameCheck) && (oe.attributeNameCheck = H.attributeNameCheck), it(H, "allowCustomizedBuiltInElements") && typeof H.allowCustomizedBuiltInElements == "boolean" && (oe.allowCustomizedBuiltInElements = H.allowCustomizedBuiltInElements), nt && (dt = !1), Le && (re = !0), $t && (_e = Ie({}, nc), Ce = io(null), $t.html === !0 && (Ie(_e, tc), Ie(Ce, rc)), $t.svg === !0 && (Ie(_e, ys), Ie(Ce, ks), Ie(Ce, pa)), $t.svgFilters === !0 && (Ie(_e, _s), Ie(Ce, ks), Ie(Ce, pa)), $t.mathMl === !0 && (Ie(_e, ws), Ie(Ce, oc), Ie(Ce, pa))), Ge.tagCheck = null, Ge.attributeCheck = null, it(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? Ge.tagCheck = _.ADD_TAGS : jt(_.ADD_TAGS) && (_e === J && (_e = Dt(_e)), Ie(_e, _.ADD_TAGS, Ve))), it(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? Ge.attributeCheck = _.ADD_ATTR : jt(_.ADD_ATTR) && (Ce === Qe && (Ce = Dt(Ce)), Ie(Ce, _.ADD_ATTR, Ve))), it(_, "ADD_URI_SAFE_ATTR") && jt(_.ADD_URI_SAFE_ATTR) && Ie(Wn, _.ADD_URI_SAFE_ATTR, Ve), it(_, "FORBID_CONTENTS") && jt(_.FORBID_CONTENTS) && (Ye === qt && (Ye = Dt(Ye)), Ie(Ye, _.FORBID_CONTENTS, Ve)), it(_, "ADD_FORBID_CONTENTS") && jt(_.ADD_FORBID_CONTENTS) && (Ye === qt && (Ye = Dt(Ye)), Ie(Ye, _.ADD_FORBID_CONTENTS, Ve)), Re && (_e["#text"] = !0), T && Ie(_e, ["html", "head", "body"]), _e.table && (Ie(_e, ["tbody"]), delete st.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ro('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ro('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      E = _.TRUSTED_TYPES_POLICY, x = E.createHTML("");
    } else
      E === void 0 && (E = Dg(m, o)), E !== null && typeof x == "string" && (x = E.createHTML(""));
    (be.uponSanitizeElement.length > 0 || be.uponSanitizeAttribute.length > 0) && _e === J && (_e = Dt(_e)), be.uponSanitizeAttribute.length > 0 && Ce === Qe && (Ce = Dt(Ce)), Kt && Kt(_), hn = _;
  }, Qr = Ie({}, [...ys, ..._s, ...Eg]), Jr = Ie({}, [...ws, ...Ag]), Nr = function(_) {
    let H = p(_);
    (!H || !H.tagName) && (H = {
      namespaceURI: cn,
      tagName: "template"
    });
    const ae = Do(_.tagName), Ne = Do(H.tagName);
    return Lr[_.namespaceURI] ? _.namespaceURI === Yt ? H.namespaceURI === Zt ? ae === "svg" : H.namespaceURI === Gn ? ae === "svg" && (Ne === "annotation-xml" || Or[Ne]) : !!Qr[ae] : _.namespaceURI === Gn ? H.namespaceURI === Zt ? ae === "math" : H.namespaceURI === Yt ? ae === "math" && xr[Ne] : !!Jr[ae] : _.namespaceURI === Zt ? H.namespaceURI === Yt && !xr[Ne] || H.namespaceURI === Gn && !Or[Ne] ? !1 : !Jr[ae] && (Eo[ae] || !Qr[ae]) : !!(Kn === "application/xhtml+xml" && Lr[_.namespaceURI]) : !1;
  }, Vt = function(_) {
    ro(t.removed, {
      element: _
    });
    try {
      p(_).removeChild(_);
    } catch {
      v(_);
    }
  }, $ = function(_, H) {
    try {
      ro(t.removed, {
        attribute: H.getAttributeNode(_),
        from: H
      });
    } catch {
      ro(t.removed, {
        attribute: null,
        from: H
      });
    }
    if (H.removeAttribute(_), _ === "is")
      if (re || Le)
        try {
          Vt(H);
        } catch {
        }
      else
        try {
          H.setAttribute(_, "");
        } catch {
        }
  }, te = function(_) {
    let H = null, ae = null;
    if (U)
      _ = "<remove></remove>" + _;
    else {
      const Ke = Xi(_, /^[\r\n\t ]+/);
      ae = Ke && Ke[0];
    }
    Kn === "application/xhtml+xml" && cn === Zt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const Ne = E ? E.createHTML(_) : _;
    if (cn === Zt)
      try {
        H = new d().parseFromString(Ne, Kn);
      } catch {
      }
    if (!H || !H.documentElement) {
      H = Q.createDocument(cn, "template", null);
      try {
        H.documentElement.innerHTML = Ir ? x : Ne;
      } catch {
      }
    }
    const Oe = H.body || H.documentElement;
    return _ && ae && Oe.insertBefore(n.createTextNode(ae), Oe.childNodes[0] || null), cn === Zt ? le.call(H, T ? "html" : "body")[0] : T ? H.documentElement : Oe;
  }, Te = function(_) {
    return se.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Je = function(_) {
    _.normalize();
    const H = se.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ae = H.nextNode();
    for (; ae; ) {
      let Ne = ae.data;
      no([V, ee, W], (Oe) => {
        Ne = oo(Ne, Oe, " ");
      }), ae.data = Ne, ae = H.nextNode();
    }
  }, ft = function(_) {
    const H = w ? w(_) : null;
    return typeof H != "string" || Ve(H) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, Xt = function(_) {
    if (!I || typeof _ != "object" || _ === null)
      return !1;
    try {
      return I(_) === On.documentFragment;
    } catch {
      return !1;
    }
  }, Ut = function(_) {
    if (!I || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof I(_) == "number";
    } catch {
      return !1;
    }
  };
  function Mt(ue, _, H) {
    no(ue, (ae) => {
      ae.call(t, _, H, hn);
    });
  }
  const Cn = function(_) {
    let H = null;
    if (Mt(be.beforeSanitizeElements, _, null), ft(_))
      return Vt(_), !0;
    const ae = Ve(_.nodeName);
    if (Mt(be.uponSanitizeElement, _, {
      tagName: ae,
      allowedTags: _e
    }), Tt && _.hasChildNodes() && !Ut(_.firstElementChild) && Rt(/<[/\w!]/g, _.innerHTML) && Rt(/<[/\w!]/g, _.textContent) || Tt && _.namespaceURI === Zt && ae === "style" && Ut(_.firstElementChild) || _.nodeType === On.progressingInstruction || Tt && _.nodeType === On.comment && Rt(/<[/\w]/g, _.data))
      return Vt(_), !0;
    if (st[ae] || !(Ge.tagCheck instanceof Function && Ge.tagCheck(ae)) && !_e[ae]) {
      if (!st[ae] && aa(ae) && (oe.tagNameCheck instanceof RegExp && Rt(oe.tagNameCheck, ae) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(ae)))
        return !1;
      if (Re && !Ye[ae]) {
        const Oe = p(_), Ke = L(_);
        if (Ke && Oe) {
          const Qt = Ke.length;
          for (let un = Qt - 1; un >= 0; --un) {
            const Jt = y(Ke[un], !0);
            Oe.insertBefore(Jt, b(_));
          }
        }
      }
      return Vt(_), !0;
    }
    return (I ? I(_) : _.nodeType) === On.element && !Nr(_) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && Rt(/<\/no(script|embed|frames)/i, _.innerHTML) ? (Vt(_), !0) : (nt && _.nodeType === On.text && (H = _.textContent, no([V, ee, W], (Oe) => {
      H = oo(H, Oe, " ");
    }), _.textContent !== H && (ro(t.removed, {
      element: _.cloneNode()
    }), _.textContent = H)), Mt(be.afterSanitizeElements, _, null), !1);
  }, Pr = function(_, H, ae) {
    if (ut[H] || A && (H === "id" || H === "name") && (ae in n || ae in Rr))
      return !1;
    const Ne = Ce[H] || Ge.attributeCheck instanceof Function && Ge.attributeCheck(H, _);
    if (!(dt && !ut[H] && Rt(pe, H))) {
      if (!(At && Rt(Y, H))) {
        if (!Ne || ut[H]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(aa(_) && (oe.tagNameCheck instanceof RegExp && Rt(oe.tagNameCheck, _) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(_)) && (oe.attributeNameCheck instanceof RegExp && Rt(oe.attributeNameCheck, H) || oe.attributeNameCheck instanceof Function && oe.attributeNameCheck(H, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            H === "is" && oe.allowCustomizedBuiltInElements && (oe.tagNameCheck instanceof RegExp && Rt(oe.tagNameCheck, ae) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(ae)))
          ) return !1;
        } else if (!Wn[H]) {
          if (!Rt(ge, oo(ae, De, ""))) {
            if (!((H === "src" || H === "xlink:href" || H === "href") && _ !== "script" && Qi(ae, "data:") === 0 && pr[_])) {
              if (!(Ct && !Rt(G, oo(ae, De, "")))) {
                if (ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, is = Ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), aa = function(_) {
    return !is[Do(_)] && Rt(Be, _);
  }, eo = function(_) {
    Mt(be.beforeSanitizeAttributes, _, null);
    const H = _.attributes;
    if (!H || ft(_))
      return;
    const ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ce,
      forceKeepAttr: void 0
    };
    let Ne = H.length;
    for (; Ne--; ) {
      const Oe = H[Ne], Ke = Oe.name, Qt = Oe.namespaceURI, un = Oe.value, Jt = Ve(Ke), gn = un;
      let pt = Ke === "value" ? gn : bg(gn);
      if (ae.attrName = Jt, ae.attrValue = pt, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Mt(be.uponSanitizeAttribute, _, ae), pt = ae.attrValue, z && (Jt === "id" || Jt === "name") && Qi(pt, Se) !== 0 && ($(Ke, _), pt = Se + pt), Tt && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        $(Ke, _);
        continue;
      }
      if (Jt === "attributename" && Xi(pt, "href")) {
        $(Ke, _);
        continue;
      }
      if (ae.forceKeepAttr)
        continue;
      if (!ae.keepAttr) {
        $(Ke, _);
        continue;
      }
      if (!lt && Rt(/\/>/i, pt)) {
        $(Ke, _);
        continue;
      }
      nt && no([V, ee, W], (sa) => {
        pt = oo(pt, sa, " ");
      });
      const Ao = Ve(_.nodeName);
      if (!Pr(Ao, Jt, pt)) {
        $(Ke, _);
        continue;
      }
      if (E && typeof m == "object" && typeof m.getAttributeType == "function" && !Qt)
        switch (m.getAttributeType(Ao, Jt)) {
          case "TrustedHTML": {
            pt = E.createHTML(pt);
            break;
          }
          case "TrustedScriptURL": {
            pt = E.createScriptURL(pt);
            break;
          }
        }
      if (pt !== gn)
        try {
          Qt ? _.setAttributeNS(Qt, Ke, pt) : _.setAttribute(Ke, pt), ft(_) ? Vt(_) : Zi(t.removed);
        } catch {
          $(Ke, _);
        }
    }
    Mt(be.afterSanitizeAttributes, _, null);
  }, Yn = function(_) {
    let H = null;
    const ae = Te(_);
    for (Mt(be.beforeSanitizeShadowDOM, _, null); H = ae.nextNode(); )
      if (Mt(be.uponSanitizeShadowNode, H, null), Cn(H), eo(H), Xt(H.content) && Yn(H.content), (I ? I(H) : H.nodeType) === On.element) {
        const Oe = C ? C(H) : H.shadowRoot;
        Xt(Oe) && (hr(Oe), Yn(Oe));
      }
    Mt(be.afterSanitizeShadowDOM, _, null);
  }, hr = function(_) {
    const H = I ? I(_) : _.nodeType;
    if (H === On.element) {
      const Oe = C ? C(_) : _.shadowRoot;
      Xt(Oe) && (hr(Oe), Yn(Oe));
    }
    const ae = L ? L(_) : _.childNodes;
    if (!ae)
      return;
    const Ne = [];
    no(ae, (Oe) => {
      ro(Ne, Oe);
    });
    for (const Oe of Ne)
      hr(Oe);
    if (H === On.element) {
      const Oe = w ? w(_) : null;
      if (typeof Oe == "string" && Ve(Oe) === "template") {
        const Ke = _.content;
        Xt(Ke) && hr(Ke);
      }
    }
  };
  return t.sanitize = function(ue) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, H = null, ae = null, Ne = null, Oe = null;
    if (Ir = !ue, Ir && (ue = "<!-->"), typeof ue != "string" && !Ut(ue) && (ue = Sg(ue), typeof ue != "string"))
      throw Ro("dirty is not a string, aborting");
    if (!t.isSupported)
      return ue;
    if (O || qn(_), t.removed = [], typeof ue == "string" && (qe = !1), qe) {
      const un = w ? w(ue) : ue.nodeName;
      if (typeof un == "string") {
        const Jt = Ve(un);
        if (!_e[Jt] || st[Jt])
          throw Ro("root node is forbidden and cannot be sanitized in-place");
      }
      if (ft(ue))
        throw Ro("root node is clobbered and cannot be sanitized in-place");
      hr(ue);
    } else if (Ut(ue))
      H = te("<!---->"), ae = H.ownerDocument.importNode(ue, !0), ae.nodeType === On.element && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? H = ae : H.appendChild(ae), hr(ae);
    else {
      if (!re && !nt && !T && // eslint-disable-next-line unicorn/prefer-includes
      ue.indexOf("<") === -1)
        return E && ve ? E.createHTML(ue) : ue;
      if (H = te(ue), !H)
        return re ? null : ve ? x : "";
    }
    H && U && Vt(H.firstChild);
    const Ke = Te(qe ? ue : H);
    for (; Ne = Ke.nextNode(); )
      Cn(Ne), eo(Ne), Xt(Ne.content) && Yn(Ne.content);
    if (qe)
      return nt && Je(ue), ue;
    if (re) {
      if (nt && Je(H), Le)
        for (Oe = he.call(H.ownerDocument); H.firstChild; )
          Oe.appendChild(H.firstChild);
      else
        Oe = H;
      return (Ce.shadowroot || Ce.shadowrootmode) && (Oe = ye.call(r, Oe, !0)), Oe;
    }
    let Qt = T ? H.outerHTML : H.innerHTML;
    return T && _e["!doctype"] && H.ownerDocument && H.ownerDocument.doctype && H.ownerDocument.doctype.name && Rt(Pg, H.ownerDocument.doctype.name) && (Qt = "<!DOCTYPE " + H.ownerDocument.doctype.name + `>
` + Qt), nt && no([V, ee, W], (un) => {
      Qt = oo(Qt, un, " ");
    }), E && ve ? E.createHTML(Qt) : Qt;
  }, t.setConfig = function() {
    let ue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qn(ue), O = !0;
  }, t.clearConfig = function() {
    hn = null, O = !1;
  }, t.isValidAttribute = function(ue, _, H) {
    hn || qn({});
    const ae = Ve(ue), Ne = Ve(_);
    return Pr(ae, Ne, H);
  }, t.addHook = function(ue, _) {
    typeof _ == "function" && ro(be[ue], _);
  }, t.removeHook = function(ue, _) {
    if (_ !== void 0) {
      const H = gg(be[ue], _);
      return H === -1 ? void 0 : vg(be[ue], H, 1)[0];
    }
    return Zi(be[ue]);
  }, t.removeHooks = function(ue) {
    be[ue] = [];
  }, t.removeAllHooks = function() {
    be = sc();
  }, t;
}
var Fg = hd();
const zg = {
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
function Bg(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Fg.sanitize(e, zg) : "";
}
const gd = Symbol(), Ta = "el", Vg = "is-", Mr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, vd = Symbol("namespaceContextKey"), _l = (e) => {
  const t = e || (Gt() ? je(vd, K(Ta)) : K(Ta));
  return N(() => c(t) || Ta);
}, St = (e, t) => {
  const n = _l(t);
  return {
    namespace: n,
    b: (b = "") => Mr(n.value, e, b, "", ""),
    e: (b) => b ? Mr(n.value, e, "", b, "") : "",
    m: (b) => b ? Mr(n.value, e, "", "", b) : "",
    be: (b, L) => b && L ? Mr(n.value, e, b, L, "") : "",
    em: (b, L) => b && L ? Mr(n.value, e, "", b, L) : "",
    bm: (b, L) => b && L ? Mr(n.value, e, b, "", L) : "",
    bem: (b, L, p) => b && L && p ? Mr(n.value, e, b, L, p) : "",
    is: (b, ...L) => {
      const p = L.length >= 1 ? L[0] : !0;
      return b && p ? `${Vg}${b}` : "";
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
const Ko = () => {
}, Ug = Object.prototype.hasOwnProperty, lc = (e, t) => Ug.call(e, t), Pn = Array.isArray, at = (e) => typeof e == "function", Bt = (e) => typeof e == "string", sn = (e) => e !== null && typeof e == "object", ic = (e) => (sn(e) || at(e)) && at(e.then) && at(e.catch), jg = Object.prototype.toString, Hg = (e) => jg.call(e), Wg = (e) => Hg(e) === "[object Object]";
var bd = typeof global == "object" && global && global.Object === Object && global, Gg = typeof self == "object" && self && self.Object === Object && self, Hn = bd || Gg || Function("return this")(), Vn = Hn.Symbol, yd = Object.prototype, Kg = yd.hasOwnProperty, qg = yd.toString, No = Vn ? Vn.toStringTag : void 0;
function Yg(e) {
  var t = Kg.call(e, No), n = e[No];
  try {
    e[No] = void 0;
    var r = !0;
  } catch {
  }
  var o = qg.call(e);
  return r && (t ? e[No] = n : delete e[No]), o;
}
var Zg = Object.prototype, Xg = Zg.toString;
function Qg(e) {
  return Xg.call(e);
}
var Jg = "[object Null]", ev = "[object Undefined]", cc = Vn ? Vn.toStringTag : void 0;
function To(e) {
  return e == null ? e === void 0 ? ev : Jg : cc && cc in Object(e) ? Yg(e) : Qg(e);
}
function ho(e) {
  return e != null && typeof e == "object";
}
var tv = "[object Symbol]";
function qa(e) {
  return typeof e == "symbol" || ho(e) && To(e) == tv;
}
function nv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var En = Array.isArray, uc = Vn ? Vn.prototype : void 0, dc = uc ? uc.toString : void 0;
function _d(e) {
  if (typeof e == "string")
    return e;
  if (En(e))
    return nv(e, _d) + "";
  if (qa(e))
    return dc ? dc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var rv = /\s/;
function ov(e) {
  for (var t = e.length; t-- && rv.test(e.charAt(t)); )
    ;
  return t;
}
var av = /^\s+/;
function sv(e) {
  return e && e.slice(0, ov(e) + 1).replace(av, "");
}
function Sr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fc = NaN, lv = /^[-+]0x[0-9a-f]+$/i, iv = /^0b[01]+$/i, cv = /^0o[0-7]+$/i, uv = parseInt;
function pc(e) {
  if (typeof e == "number")
    return e;
  if (qa(e))
    return fc;
  if (Sr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Sr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = sv(e);
  var n = iv.test(e);
  return n || cv.test(e) ? uv(e.slice(2), n ? 2 : 8) : lv.test(e) ? fc : +e;
}
function wd(e) {
  return e;
}
var dv = "[object AsyncFunction]", fv = "[object Function]", pv = "[object GeneratorFunction]", mv = "[object Proxy]";
function kd(e) {
  if (!Sr(e))
    return !1;
  var t = To(e);
  return t == fv || t == pv || t == dv || t == mv;
}
var Ss = Hn["__core-js_shared__"], mc = function() {
  var e = /[^.]+$/.exec(Ss && Ss.keys && Ss.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hv(e) {
  return !!mc && mc in e;
}
var gv = Function.prototype, vv = gv.toString;
function Wr(e) {
  if (e != null) {
    try {
      return vv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bv = /[\\^$.*+?()[\]{}|]/g, yv = /^\[object .+?Constructor\]$/, _v = Function.prototype, wv = Object.prototype, kv = _v.toString, Sv = wv.hasOwnProperty, Tv = RegExp(
  "^" + kv.call(Sv).replace(bv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ev(e) {
  if (!Sr(e) || hv(e))
    return !1;
  var t = kd(e) ? Tv : yv;
  return t.test(Wr(e));
}
function Av(e, t) {
  return e?.[t];
}
function Gr(e, t) {
  var n = Av(e, t);
  return Ev(n) ? n : void 0;
}
var Hs = Gr(Hn, "WeakMap");
function Cv(e, t, n) {
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
var Iv = 800, Lv = 16, Ov = Date.now;
function xv(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ov(), o = Lv - (r - n);
    if (n = r, o > 0) {
      if (++t >= Iv)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Rv(e) {
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
}(), Nv = Na ? function(e, t) {
  return Na(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Rv(t),
    writable: !0
  });
} : wd, Pv = xv(Nv);
function $v(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Mv = 9007199254740991, Dv = /^(?:0|[1-9]\d*)$/;
function wl(e, t) {
  var n = typeof e;
  return t = t ?? Mv, !!t && (n == "number" || n != "symbol" && Dv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Fv(e, t, n) {
  t == "__proto__" && Na ? Na(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function kl(e, t) {
  return e === t || e !== e && t !== t;
}
var zv = Object.prototype, Bv = zv.hasOwnProperty;
function Vv(e, t, n) {
  var r = e[t];
  (!(Bv.call(e, t) && kl(r, n)) || n === void 0 && !(t in e)) && Fv(e, t, n);
}
var hc = Math.max;
function Uv(e, t, n) {
  return t = hc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = hc(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Cv(e, this, i);
  };
}
var jv = 9007199254740991;
function Sl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jv;
}
function Hv(e) {
  return e != null && Sl(e.length) && !kd(e);
}
var Wv = Object.prototype;
function Gv(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Wv;
  return e === n;
}
function Kv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var qv = "[object Arguments]";
function gc(e) {
  return ho(e) && To(e) == qv;
}
var Sd = Object.prototype, Yv = Sd.hasOwnProperty, Zv = Sd.propertyIsEnumerable, Tl = gc(/* @__PURE__ */ function() {
  return arguments;
}()) ? gc : function(e) {
  return ho(e) && Yv.call(e, "callee") && !Zv.call(e, "callee");
};
function Xv() {
  return !1;
}
var Td = typeof exports == "object" && exports && !exports.nodeType && exports, vc = Td && typeof module == "object" && module && !module.nodeType && module, Qv = vc && vc.exports === Td, bc = Qv ? Hn.Buffer : void 0, Jv = bc ? bc.isBuffer : void 0, Ws = Jv || Xv, eb = "[object Arguments]", tb = "[object Array]", nb = "[object Boolean]", rb = "[object Date]", ob = "[object Error]", ab = "[object Function]", sb = "[object Map]", lb = "[object Number]", ib = "[object Object]", cb = "[object RegExp]", ub = "[object Set]", db = "[object String]", fb = "[object WeakMap]", pb = "[object ArrayBuffer]", mb = "[object DataView]", hb = "[object Float32Array]", gb = "[object Float64Array]", vb = "[object Int8Array]", bb = "[object Int16Array]", yb = "[object Int32Array]", _b = "[object Uint8Array]", wb = "[object Uint8ClampedArray]", kb = "[object Uint16Array]", Sb = "[object Uint32Array]", Ze = {};
Ze[hb] = Ze[gb] = Ze[vb] = Ze[bb] = Ze[yb] = Ze[_b] = Ze[wb] = Ze[kb] = Ze[Sb] = !0;
Ze[eb] = Ze[tb] = Ze[pb] = Ze[nb] = Ze[mb] = Ze[rb] = Ze[ob] = Ze[ab] = Ze[sb] = Ze[lb] = Ze[ib] = Ze[cb] = Ze[ub] = Ze[db] = Ze[fb] = !1;
function Tb(e) {
  return ho(e) && Sl(e.length) && !!Ze[To(e)];
}
function Eb(e) {
  return function(t) {
    return e(t);
  };
}
var Ed = typeof exports == "object" && exports && !exports.nodeType && exports, zo = Ed && typeof module == "object" && module && !module.nodeType && module, Ab = zo && zo.exports === Ed, Ts = Ab && bd.process, yc = function() {
  try {
    var e = zo && zo.require && zo.require("util").types;
    return e || Ts && Ts.binding && Ts.binding("util");
  } catch {
  }
}(), _c = yc && yc.isTypedArray, Ad = _c ? Eb(_c) : Tb, Cb = Object.prototype, Ib = Cb.hasOwnProperty;
function Lb(e, t) {
  var n = En(e), r = !n && Tl(e), o = !n && !r && Ws(e), a = !n && !r && !o && Ad(e), s = n || r || o || a, i = s ? Kv(e.length, String) : [], l = i.length;
  for (var u in e)
    Ib.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    wl(u, l))) && i.push(u);
  return i;
}
function Ob(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var xb = Ob(Object.keys, Object), Rb = Object.prototype, Nb = Rb.hasOwnProperty;
function Pb(e) {
  if (!Gv(e))
    return xb(e);
  var t = [];
  for (var n in Object(e))
    Nb.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Cd(e) {
  return Hv(e) ? Lb(e) : Pb(e);
}
var $b = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mb = /^\w*$/;
function El(e, t) {
  if (En(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qa(e) ? !0 : Mb.test(e) || !$b.test(e) || t != null && e in Object(t);
}
var qo = Gr(Object, "create");
function Db() {
  this.__data__ = qo ? qo(null) : {}, this.size = 0;
}
function Fb(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zb = "__lodash_hash_undefined__", Bb = Object.prototype, Vb = Bb.hasOwnProperty;
function Ub(e) {
  var t = this.__data__;
  if (qo) {
    var n = t[e];
    return n === zb ? void 0 : n;
  }
  return Vb.call(t, e) ? t[e] : void 0;
}
var jb = Object.prototype, Hb = jb.hasOwnProperty;
function Wb(e) {
  var t = this.__data__;
  return qo ? t[e] !== void 0 : Hb.call(t, e);
}
var Gb = "__lodash_hash_undefined__";
function Kb(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = qo && t === void 0 ? Gb : t, this;
}
function Vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vr.prototype.clear = Db;
Vr.prototype.delete = Fb;
Vr.prototype.get = Ub;
Vr.prototype.has = Wb;
Vr.prototype.set = Kb;
function qb() {
  this.__data__ = [], this.size = 0;
}
function Ya(e, t) {
  for (var n = e.length; n--; )
    if (kl(e[n][0], t))
      return n;
  return -1;
}
var Yb = Array.prototype, Zb = Yb.splice;
function Xb(e) {
  var t = this.__data__, n = Ya(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Zb.call(t, n, 1), --this.size, !0;
}
function Qb(e) {
  var t = this.__data__, n = Ya(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Jb(e) {
  return Ya(this.__data__, e) > -1;
}
function e0(e, t) {
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
dr.prototype.clear = qb;
dr.prototype.delete = Xb;
dr.prototype.get = Qb;
dr.prototype.has = Jb;
dr.prototype.set = e0;
var Yo = Gr(Hn, "Map");
function t0() {
  this.size = 0, this.__data__ = {
    hash: new Vr(),
    map: new (Yo || dr)(),
    string: new Vr()
  };
}
function n0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Za(e, t) {
  var n = e.__data__;
  return n0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function r0(e) {
  var t = Za(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function o0(e) {
  return Za(this, e).get(e);
}
function a0(e) {
  return Za(this, e).has(e);
}
function s0(e, t) {
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
fr.prototype.clear = t0;
fr.prototype.delete = r0;
fr.prototype.get = o0;
fr.prototype.has = a0;
fr.prototype.set = s0;
var l0 = "Expected a function";
function Al(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(l0);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Al.Cache || fr)(), n;
}
Al.Cache = fr;
var i0 = 500;
function c0(e) {
  var t = Al(e, function(r) {
    return n.size === i0 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var u0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, d0 = /\\(\\)?/g, f0 = c0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(u0, function(n, r, o, a) {
    t.push(o ? a.replace(d0, "$1") : r || n);
  }), t;
});
function p0(e) {
  return e == null ? "" : _d(e);
}
function Xa(e, t) {
  return En(e) ? e : El(e, t) ? [e] : f0(p0(e));
}
function ea(e) {
  if (typeof e == "string" || qa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Cl(e, t) {
  t = Xa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ea(t[n++])];
  return n && n == r ? e : void 0;
}
function _r(e, t, n) {
  var r = e == null ? void 0 : Cl(e, t);
  return r === void 0 ? n : r;
}
function Id(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var wc = Vn ? Vn.isConcatSpreadable : void 0;
function m0(e) {
  return En(e) || Tl(e) || !!(wc && e && e[wc]);
}
function h0(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = m0), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Id(o, i) : o[o.length] = i;
  }
  return o;
}
function g0(e) {
  var t = e == null ? 0 : e.length;
  return t ? h0(e) : [];
}
function v0(e) {
  return Pv(Uv(e, void 0, g0), e + "");
}
function yr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return En(e) ? e : [e];
}
function b0() {
  this.__data__ = new dr(), this.size = 0;
}
function y0(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function _0(e) {
  return this.__data__.get(e);
}
function w0(e) {
  return this.__data__.has(e);
}
var k0 = 200;
function S0(e, t) {
  var n = this.__data__;
  if (n instanceof dr) {
    var r = n.__data__;
    if (!Yo || r.length < k0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new fr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ar(e) {
  var t = this.__data__ = new dr(e);
  this.size = t.size;
}
ar.prototype.clear = b0;
ar.prototype.delete = y0;
ar.prototype.get = _0;
ar.prototype.has = w0;
ar.prototype.set = S0;
function T0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function E0() {
  return [];
}
var A0 = Object.prototype, C0 = A0.propertyIsEnumerable, kc = Object.getOwnPropertySymbols, I0 = kc ? function(e) {
  return e == null ? [] : (e = Object(e), T0(kc(e), function(t) {
    return C0.call(e, t);
  }));
} : E0;
function L0(e, t, n) {
  var r = t(e);
  return En(e) ? r : Id(r, n(e));
}
function Sc(e) {
  return L0(e, Cd, I0);
}
var Gs = Gr(Hn, "DataView"), Ks = Gr(Hn, "Promise"), qs = Gr(Hn, "Set"), Tc = "[object Map]", O0 = "[object Object]", Ec = "[object Promise]", Ac = "[object Set]", Cc = "[object WeakMap]", Ic = "[object DataView]", x0 = Wr(Gs), R0 = Wr(Yo), N0 = Wr(Ks), P0 = Wr(qs), $0 = Wr(Hs), br = To;
(Gs && br(new Gs(new ArrayBuffer(1))) != Ic || Yo && br(new Yo()) != Tc || Ks && br(Ks.resolve()) != Ec || qs && br(new qs()) != Ac || Hs && br(new Hs()) != Cc) && (br = function(e) {
  var t = To(e), n = t == O0 ? e.constructor : void 0, r = n ? Wr(n) : "";
  if (r)
    switch (r) {
      case x0:
        return Ic;
      case R0:
        return Tc;
      case N0:
        return Ec;
      case P0:
        return Ac;
      case $0:
        return Cc;
    }
  return t;
});
var Lc = Hn.Uint8Array, M0 = "__lodash_hash_undefined__";
function D0(e) {
  return this.__data__.set(e, M0), this;
}
function F0(e) {
  return this.__data__.has(e);
}
function Pa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new fr(); ++t < n; )
    this.add(e[t]);
}
Pa.prototype.add = Pa.prototype.push = D0;
Pa.prototype.has = F0;
function z0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function B0(e, t) {
  return e.has(t);
}
var V0 = 1, U0 = 2;
function Ld(e, t, n, r, o, a) {
  var s = n & V0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, h = !0, y = n & U0 ? new Pa() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < i; ) {
    var v = e[m], b = t[m];
    if (r)
      var L = s ? r(b, v, m, t, e, a) : r(v, b, m, e, t, a);
    if (L !== void 0) {
      if (L)
        continue;
      h = !1;
      break;
    }
    if (y) {
      if (!z0(t, function(p, C) {
        if (!B0(y, C) && (v === p || o(v, p, n, r, a)))
          return y.push(C);
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
function j0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function H0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var W0 = 1, G0 = 2, K0 = "[object Boolean]", q0 = "[object Date]", Y0 = "[object Error]", Z0 = "[object Map]", X0 = "[object Number]", Q0 = "[object RegExp]", J0 = "[object Set]", e1 = "[object String]", t1 = "[object Symbol]", n1 = "[object ArrayBuffer]", r1 = "[object DataView]", Oc = Vn ? Vn.prototype : void 0, Es = Oc ? Oc.valueOf : void 0;
function o1(e, t, n, r, o, a, s) {
  switch (n) {
    case r1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case n1:
      return !(e.byteLength != t.byteLength || !a(new Lc(e), new Lc(t)));
    case K0:
    case q0:
    case X0:
      return kl(+e, +t);
    case Y0:
      return e.name == t.name && e.message == t.message;
    case Q0:
    case e1:
      return e == t + "";
    case Z0:
      var i = j0;
    case J0:
      var l = r & W0;
      if (i || (i = H0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= G0, s.set(e, t);
      var d = Ld(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case t1:
      if (Es)
        return Es.call(e) == Es.call(t);
  }
  return !1;
}
var a1 = 1, s1 = Object.prototype, l1 = s1.hasOwnProperty;
function i1(e, t, n, r, o, a) {
  var s = n & a1, i = Sc(e), l = i.length, u = Sc(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var m = l; m--; ) {
    var h = i[m];
    if (!(s ? h in t : l1.call(t, h)))
      return !1;
  }
  var y = a.get(e), v = a.get(t);
  if (y && v)
    return y == t && v == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var L = s; ++m < l; ) {
    h = i[m];
    var p = e[h], C = t[h];
    if (r)
      var P = s ? r(C, p, h, t, e, a) : r(p, C, h, e, t, a);
    if (!(P === void 0 ? p === C || o(p, C, n, r, a) : P)) {
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
var c1 = 1, xc = "[object Arguments]", Rc = "[object Array]", ma = "[object Object]", u1 = Object.prototype, Nc = u1.hasOwnProperty;
function d1(e, t, n, r, o, a) {
  var s = En(e), i = En(t), l = s ? Rc : br(e), u = i ? Rc : br(t);
  l = l == xc ? ma : l, u = u == xc ? ma : u;
  var d = l == ma, m = u == ma, h = l == u;
  if (h && Ws(e)) {
    if (!Ws(t))
      return !1;
    s = !0, d = !1;
  }
  if (h && !d)
    return a || (a = new ar()), s || Ad(e) ? Ld(e, t, n, r, o, a) : o1(e, t, l, n, r, o, a);
  if (!(n & c1)) {
    var y = d && Nc.call(e, "__wrapped__"), v = m && Nc.call(t, "__wrapped__");
    if (y || v) {
      var b = y ? e.value() : e, L = v ? t.value() : t;
      return a || (a = new ar()), o(b, L, n, r, a);
    }
  }
  return h ? (a || (a = new ar()), i1(e, t, n, r, o, a)) : !1;
}
function Qa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !ho(e) && !ho(t) ? e !== e && t !== t : d1(e, t, n, r, Qa, o);
}
var f1 = 1, p1 = 2;
function m1(e, t, n, r) {
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
      var d = new ar(), m;
      if (!(m === void 0 ? Qa(u, l, f1 | p1, r, d) : m))
        return !1;
    }
  }
  return !0;
}
function Od(e) {
  return e === e && !Sr(e);
}
function h1(e) {
  for (var t = Cd(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Od(o)];
  }
  return t;
}
function xd(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function g1(e) {
  var t = h1(e);
  return t.length == 1 && t[0][2] ? xd(t[0][0], t[0][1]) : function(n) {
    return n === e || m1(n, e, t);
  };
}
function v1(e, t) {
  return e != null && t in Object(e);
}
function b1(e, t, n) {
  t = Xa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = ea(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Sl(o) && wl(s, o) && (En(e) || Tl(e)));
}
function Rd(e, t) {
  return e != null && b1(e, t, v1);
}
var y1 = 1, _1 = 2;
function w1(e, t) {
  return El(e) && Od(t) ? xd(ea(e), t) : function(n) {
    var r = _r(n, e);
    return r === void 0 && r === t ? Rd(n, e) : Qa(t, r, y1 | _1);
  };
}
function k1(e) {
  return function(t) {
    return t?.[e];
  };
}
function S1(e) {
  return function(t) {
    return Cl(t, e);
  };
}
function T1(e) {
  return El(e) ? k1(ea(e)) : S1(e);
}
function E1(e) {
  return typeof e == "function" ? e : e == null ? wd : typeof e == "object" ? En(e) ? w1(e[0], e[1]) : g1(e) : T1(e);
}
var As = function() {
  return Hn.Date.now();
}, A1 = "Expected a function", C1 = Math.max, I1 = Math.min;
function L1(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(A1);
  t = pc(t) || 0, Sr(n) && (d = !!n.leading, m = "maxWait" in n, a = m ? C1(pc(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function y(E) {
    var x = r, Z = o;
    return r = o = void 0, u = E, s = e.apply(Z, x), s;
  }
  function v(E) {
    return u = E, i = setTimeout(p, t), d ? y(E) : s;
  }
  function b(E) {
    var x = E - l, Z = E - u, Q = t - x;
    return m ? I1(Q, a - Z) : Q;
  }
  function L(E) {
    var x = E - l, Z = E - u;
    return l === void 0 || x >= t || x < 0 || m && Z >= a;
  }
  function p() {
    var E = As();
    if (L(E))
      return C(E);
    i = setTimeout(p, b(E));
  }
  function C(E) {
    return i = void 0, h && r ? y(E) : (r = o = void 0, s);
  }
  function P() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function I() {
    return i === void 0 ? s : C(As());
  }
  function w() {
    var E = As(), x = L(E);
    if (r = arguments, o = this, l = E, x) {
      if (i === void 0)
        return v(l);
      if (m)
        return clearTimeout(i), i = setTimeout(p, t), y(l);
    }
    return i === void 0 && (i = setTimeout(p, t)), s;
  }
  return w.cancel = P, w.flush = I, w;
}
function O1(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return $v(e, E1(t), o);
}
function $a(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Bo(e, t) {
  return Qa(e, t);
}
function sr(e) {
  return e == null;
}
function x1(e) {
  return e === void 0;
}
function R1(e, t, n, r) {
  if (!Sr(e))
    return e;
  t = Xa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = ea(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = Sr(d) ? d : wl(t[o + 1]) ? [] : {});
    }
    Vv(i, l, u), i = i[l];
  }
  return e;
}
function N1(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = Cl(e, s);
    n(i, s) && R1(a, Xa(s, e), i);
  }
  return a;
}
function P1(e, t) {
  return N1(e, t, function(n, r) {
    return Rd(e, r);
  });
}
var $1 = v0(function(e, t) {
  return e == null ? {} : P1(e, t);
});
const $n = (e) => e === void 0, kr = (e) => typeof e == "boolean", ze = (e) => typeof e == "number", Sn = (e) => typeof Element > "u" ? !1 : e instanceof Element, M1 = (e) => Bt(e) ? !Number.isNaN(Number(e)) : !1;
var D1 = Object.defineProperty, F1 = Object.defineProperties, z1 = Object.getOwnPropertyDescriptors, Pc = Object.getOwnPropertySymbols, B1 = Object.prototype.hasOwnProperty, V1 = Object.prototype.propertyIsEnumerable, $c = (e, t, n) => t in e ? D1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, U1 = (e, t) => {
  for (var n in t || (t = {}))
    B1.call(t, n) && $c(e, n, t[n]);
  if (Pc)
    for (var n of Pc(t))
      V1.call(t, n) && $c(e, n, t[n]);
  return e;
}, j1 = (e, t) => F1(e, z1(t));
function H1(e, t) {
  var n;
  const r = wr();
  return Tu(() => {
    r.value = e();
  }, j1(U1({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), tl(r);
}
var Mc;
const wt = typeof window < "u", W1 = (e) => typeof e == "string", Nd = () => {
}, Ys = wt && ((Mc = window?.navigator) == null ? void 0 : Mc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Il(e) {
  return typeof e == "function" ? e() : c(e);
}
function G1(e) {
  return e;
}
function ta(e) {
  return Gf() ? (Kf(e), !0) : !1;
}
function K1(e, t = !0) {
  Gt() ? yt(e) : t ? e() : ht(e);
}
function Pd(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = K(!1);
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
    }, Il(t));
  }
  return r && (o.value = !0, wt && l()), ta(i), {
    isPending: tl(o),
    start: l,
    stop: i
  };
}
function rr(e) {
  var t;
  const n = Il(e);
  return (t = n?.$el) != null ? t : n;
}
const Ja = wt ? window : void 0;
function Tn(...e) {
  let t, n, r, o;
  if (W1(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ja) : [t, n, r, o] = e, !t)
    return Nd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, m, h, y) => (d.addEventListener(m, h, y), () => d.removeEventListener(m, h, y)), l = Ae(() => [rr(t), Il(o)], ([d, m]) => {
    s(), d && a.push(...n.flatMap((h) => r.map((y) => i(d, h, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return ta(u), u;
}
let Dc = !1;
function q1(e, t, n = {}) {
  const { window: r = Ja, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Ys && !Dc && (Dc = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", Nd)));
  let i = !0;
  const l = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((v) => v === h.target || h.composedPath().includes(v));
    {
      const v = rr(y);
      return v && (h.target === v || h.composedPath().includes(v));
    }
  }), d = [
    Tn(r, "click", (h) => {
      const y = rr(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !l(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: a }),
    Tn(r, "pointerdown", (h) => {
      const y = rr(e);
      y && (i = !h.composedPath().includes(y) && !l(h));
    }, { passive: !0 }),
    s && Tn(r, "blur", (h) => {
      var y;
      const v = rr(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !v?.contains(r.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => d.forEach((h) => h());
}
function $d(e, t = !1) {
  const n = K(), r = () => n.value = !!e();
  return r(), K1(r, t), n;
}
const Fc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zc = "__vueuse_ssr_handlers__";
Fc[zc] = Fc[zc] || {};
var Bc = Object.getOwnPropertySymbols, Y1 = Object.prototype.hasOwnProperty, Z1 = Object.prototype.propertyIsEnumerable, X1 = (e, t) => {
  var n = {};
  for (var r in e)
    Y1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Bc)
    for (var r of Bc(e))
      t.indexOf(r) < 0 && Z1.call(e, r) && (n[r] = e[r]);
  return n;
};
function Nn(e, t, n = {}) {
  const r = n, { window: o = Ja } = r, a = X1(r, ["window"]);
  let s;
  const i = $d(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ae(() => rr(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return ta(d), {
    isSupported: i,
    stop: d
  };
}
var Vc = Object.getOwnPropertySymbols, Q1 = Object.prototype.hasOwnProperty, J1 = Object.prototype.propertyIsEnumerable, ey = (e, t) => {
  var n = {};
  for (var r in e)
    Q1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Vc)
    for (var r of Vc(e))
      t.indexOf(r) < 0 && J1.call(e, r) && (n[r] = e[r]);
  return n;
};
function ty(e, t, n = {}) {
  const r = n, { window: o = Ja } = r, a = ey(r, ["window"]);
  let s;
  const i = $d(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ae(() => rr(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return ta(d), {
    isSupported: i,
    stop: d
  };
}
var Uc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Uc || (Uc = {}));
var ny = Object.defineProperty, jc = Object.getOwnPropertySymbols, ry = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, Hc = (e, t, n) => t in e ? ny(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ay = (e, t) => {
  for (var n in t || (t = {}))
    ry.call(t, n) && Hc(e, n, t[n]);
  if (jc)
    for (var n of jc(t))
      oy.call(t, n) && Hc(e, n, t[n]);
  return e;
};
const sy = {
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
ay({
  linear: G1
}, sy);
class ly extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ll(e, t) {
  throw new ly(`[${e}] ${t}`);
}
const Wc = {
  current: 0
}, Gc = K(0), Md = 2e3, Kc = Symbol("elZIndexContextKey"), Dd = Symbol("zIndexContextKey"), Fd = (e) => {
  const t = Gt() ? je(Kc, Wc) : Wc, n = e || (Gt() ? je(Dd, void 0) : void 0), r = N(() => {
    const s = c(n);
    return ze(s) ? s : Md;
  }), o = N(() => r.value + Gc.value), a = () => (t.current++, Gc.value = t.current, o.value);
  return !wt && je(Kc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var iy = {
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
const cy = (e) => (t, n) => uy(t, n, c(e)), uy = (e, t, n) => _r(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), dy = (e) => {
  const t = N(() => c(e).name), n = uo(e) ? e : K(e);
  return {
    lang: t,
    locale: n,
    t: cy(e)
  };
}, zd = Symbol("localeContextKey"), Ol = (e) => {
  const t = e || je(zd, K());
  return dy(N(() => t.value || iy));
}, Bd = "__epPropKey", ke = (e) => e, fy = (e) => sn(e) && !!e[Bd], es = (e, t) => {
  if (!sn(e) || fy(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), lc(e, "default") && m.push(o), d || (d = m.includes(u))), s && (d || (d = s(u))), !d && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        qf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Bd]: !0
  };
  return lc(e, "default") && (l.default = o), l;
}, Xe = (e) => $a(Object.entries(e).map(([t, n]) => [
  t,
  es(n, t)
])), xl = ["", "default", "small", "large"], ts = es({
  type: String,
  values: xl,
  required: !1
}), Vd = Symbol("size"), py = () => {
  const e = je(Vd, {});
  return N(() => c(e.size) || "");
}, Ud = Symbol("emptyValuesContextKey"), my = ["", void 0, null], hy = void 0, jd = Xe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => at(e) ? !e() : !e
  }
}), gy = (e, t) => {
  const n = Gt() ? je(Ud, K({})) : K({}), r = N(() => e.emptyValues || n.value.emptyValues || my), o = N(() => at(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : at(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : hy), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, qc = (e) => Object.keys(e), Ma = K();
function Hd(e, t = void 0) {
  return Gt() ? je(gd, Ma) : Ma;
}
function Wd(e, t) {
  const n = Hd(), r = St(e, N(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Ta;
  })), o = Ol(N(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Fd(N(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Md;
  })), s = N(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Gd(N(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Gd = (e, t, n = !1) => {
  var r;
  const o = !!Gt(), a = o ? Hd() : void 0, s = (r = void 0) != null ? r : o ? Bn : void 0;
  if (!s)
    return;
  const i = N(() => {
    const l = c(e);
    return a?.value ? vy(a.value, l) : l;
  });
  return s(gd, i), s(zd, N(() => i.value.locale)), s(vd, N(() => i.value.namespace)), s(Dd, N(() => i.value.zIndex)), s(Vd, {
    size: N(() => i.value.size || "")
  }), s(Ud, N(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Ma.value) && (Ma.value = i.value), i;
}, vy = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...qc(e), ...qc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Ot = "update:modelValue", cr = "change", lr = "input";
var tt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function go(e, t = "px") {
  if (!e)
    return "";
  if (ze(e) || M1(e))
    return `${e}${t}`;
  if (Bt(e))
    return e;
}
function by(e, t) {
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
const An = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Kd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), qd = (e) => (e.install = Ko, e), yy = Xe({
  size: {
    type: ke([Number, String])
  },
  color: {
    type: String
  }
}), _y = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), wy = /* @__PURE__ */ ce({
  ..._y,
  props: yy,
  setup(e) {
    const t = e, n = St("icon"), r = N(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: $n(o) ? void 0 : go(o),
        "--color": a
      };
    });
    return (o, a) => (R(), j("i", fo({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Ee(o.$slots, "default")
    ], 16));
  }
});
var ky = /* @__PURE__ */ tt(wy, [["__file", "icon.vue"]]);
const _t = An(ky);
/*! Element Plus Icons Vue v2.3.1 */
var Sy = /* @__PURE__ */ ce({
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
}), Yd = Sy, Ty = /* @__PURE__ */ ce({
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
}), Ey = Ty, Ay = /* @__PURE__ */ ce({
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
}), Cy = Ay, Iy = /* @__PURE__ */ ce({
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
}), Ly = Iy, Oy = /* @__PURE__ */ ce({
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
}), Rl = Oy, xy = /* @__PURE__ */ ce({
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
}), Da = xy, Ry = /* @__PURE__ */ ce({
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
}), Ny = Ry, Py = /* @__PURE__ */ ce({
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
}), $y = Py, My = /* @__PURE__ */ ce({
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
}), Zd = My, Dy = /* @__PURE__ */ ce({
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
}), Fy = Dy, zy = /* @__PURE__ */ ce({
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
}), By = zy, Vy = /* @__PURE__ */ ce({
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
}), Uy = Vy, jy = /* @__PURE__ */ ce({
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
}), Hy = jy, Wy = /* @__PURE__ */ ce({
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
}), Gy = Wy;
const Mn = ke([
  String,
  Object,
  Function
]), Ky = {
  Close: Da
}, qy = {
  Close: Da
}, Fa = {
  success: Uy,
  warning: Gy,
  error: Ly,
  info: $y
}, Xd = {
  validating: Zd,
  success: Cy,
  error: Rl
}, Qd = () => wt && /firefox/i.test(window.navigator.userAgent);
let en;
const Yy = {
  height: "0",
  visibility: "hidden",
  overflow: Qd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Zy = [
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
function Xy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Zy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Yc(e, t = 1, n) {
  var r;
  en || (en = document.createElement("textarea"), document.body.appendChild(en));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = Xy(e);
  i.forEach(([m, h]) => en?.style.setProperty(m, h)), Object.entries(Yy).forEach(([m, h]) => en?.style.setProperty(m, h, "important")), en.value = e.value || e.placeholder || "";
  let l = en.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), en.value = "";
  const d = en.scrollHeight - o;
  if (ze(t)) {
    let m = d * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (ze(n)) {
    let m = d * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = en.parentNode) == null || r.removeChild(en), en = void 0, u;
}
const Jd = (e) => e, Qy = Xe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Kr = (e) => $1(Qy, e), Jy = Xe({
  id: {
    type: String,
    default: void 0
  },
  size: ts,
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
    type: ke([Object, Array, String]),
    default: () => Jd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Kr(["ariaLabel"])
}), e_ = {
  [Ot]: (e) => Bt(e),
  input: (e) => Bt(e),
  change: (e) => Bt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, t_ = ["class", "style"], n_ = /^on[A-Z]/, r_ = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = N(() => (n?.value || []).concat(t_)), o = Gt();
  return o ? N(() => {
    var a;
    return $a(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && n_.test(s))));
  }) : N(() => ({}));
}, Nl = Symbol("formContextKey"), za = Symbol("formItemContextKey"), Zc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, o_ = Symbol("elIdInjection"), ef = () => Gt() ? je(o_, Zc) : Zc, ns = (e) => {
  const t = ef(), n = _l();
  return H1(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, rs = () => {
  const e = je(Nl, void 0), t = je(za, void 0);
  return {
    form: e,
    formItem: t
  };
}, Pl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = K(!1)), r || (r = K(!1));
  const o = K();
  let a;
  const s = N(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return yt(() => {
    a = Ae([er(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : ns().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Ua(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, tf = (e) => {
  const t = Gt();
  return N(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, na = (e, t = {}) => {
  const n = K(void 0), r = t.prop ? n : tf("size"), o = t.global ? n : py(), a = t.form ? { size: void 0 } : je(Nl, void 0), s = t.formItem ? { size: void 0 } : je(za, void 0);
  return N(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, $l = (e) => {
  const t = tf("disabled"), n = je(Nl, void 0);
  return N(() => t.value || c(e) || n?.disabled || !1);
};
function nf(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Gt(), { emit: s } = a, i = wr(), l = K(!1), u = (h) => {
    at(t) && t(h) || l.value || (l.value = !0, s("focus", h), n?.());
  }, d = (h) => {
    var y;
    at(r) && r(h) || h.relatedTarget && ((y = i.value) != null && y.contains(h.relatedTarget)) || (l.value = !1, s("blur", h), o?.());
  }, m = () => {
    var h, y;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Ae(i, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), Tn(i, "focus", u, !0), Tn(i, "blur", d, !0), Tn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const a_ = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function rf({
  afterComposition: e,
  emit: t
}) {
  const n = K(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !a_(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, ht(() => e(i)));
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
function s_(e) {
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
const l_ = "ElInput", i_ = ce({
  name: l_,
  inheritAttrs: !1
}), c_ = /* @__PURE__ */ ce({
  ...i_,
  props: Jy,
  emits: e_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Yf(), a = r_(), s = Zf(), i = N(() => [
      r.type === "textarea" ? b.b() : v.b(),
      v.m(h.value),
      v.is("disabled", y.value),
      v.is("exceed", Be.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || r.prefixIcon,
        [v.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [v.bm("suffix", "password-clear")]: pe.value && Y.value,
        [v.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = N(() => [
      v.e("wrapper"),
      v.is("focus", Z.value)
    ]), { form: u, formItem: d } = rs(), { inputId: m } = Pl(r, {
      formItemContext: d
    }), h = na(), y = $l(), v = St("input"), b = St("textarea"), L = wr(), p = wr(), C = K(!1), P = K(!1), I = K(), w = wr(r.inputStyle), E = N(() => L.value || p.value), { wrapperRef: x, isFocused: Z, handleFocus: Q, handleBlur: se } = nf(E, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var A;
        r.validateEvent && ((A = d?.validate) == null || A.call(d, "blur").catch((z) => void 0));
      }
    }), he = N(() => {
      var A;
      return (A = u?.statusIcon) != null ? A : !1;
    }), le = N(() => d?.validateState || ""), ye = N(() => le.value && Xd[le.value]), be = N(() => P.value ? Hy : Ny), V = N(() => [
      o.style
    ]), ee = N(() => [
      r.inputStyle,
      w.value,
      { resize: r.resize }
    ]), W = N(() => sr(r.modelValue) ? "" : String(r.modelValue)), pe = N(() => r.clearable && !y.value && !r.readonly && !!W.value && (Z.value || C.value)), Y = N(() => r.showPassword && !y.value && !!W.value && (!!W.value || Z.value)), G = N(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), De = N(() => W.value.length), Be = N(() => !!G.value && De.value > Number(r.maxlength)), ge = N(() => !!s.suffix || !!r.suffixIcon || pe.value || r.showPassword || G.value || !!le.value && he.value), [_e, J] = s_(L);
    Nn(p, (A) => {
      if (oe(), !G.value || r.resize !== "both")
        return;
      const z = A[0], { width: Se } = z.contentRect;
      I.value = {
        right: `calc(100% - ${Se + 15 + 6}px)`
      };
    });
    const Ce = () => {
      const { type: A, autosize: z } = r;
      if (!(!wt || A !== "textarea" || !p.value))
        if (z) {
          const Se = sn(z) ? z.minRows : void 0, Re = sn(z) ? z.maxRows : void 0, qe = Yc(p.value, Se, Re);
          w.value = {
            overflowY: "hidden",
            ...qe
          }, ht(() => {
            p.value.offsetHeight, w.value = qe;
          });
        } else
          w.value = {
            minHeight: Yc(p.value).minHeight
          };
    }, oe = ((A) => {
      let z = !1;
      return () => {
        var Se;
        if (z || !r.autosize)
          return;
        ((Se = p.value) == null ? void 0 : Se.offsetParent) === null || (A(), z = !0);
      };
    })(Ce), st = () => {
      const A = E.value, z = r.formatter ? r.formatter(W.value) : W.value;
      !A || A.value === z || (A.value = z);
    }, ut = async (A) => {
      _e();
      let { value: z } = A.target;
      if (r.formatter && r.parser && (z = r.parser(z)), !At.value) {
        if (z === W.value) {
          st();
          return;
        }
        n(Ot, z), n(lr, z), await ht(), st(), J();
      }
    }, Ge = (A) => {
      let { value: z } = A.target;
      r.formatter && r.parser && (z = r.parser(z)), n(cr, z);
    }, {
      isComposing: At,
      handleCompositionStart: dt,
      handleCompositionUpdate: Ct,
      handleCompositionEnd: lt
    } = rf({ emit: n, afterComposition: ut }), nt = () => {
      _e(), P.value = !P.value, setTimeout(J);
    }, Tt = () => {
      var A;
      return (A = E.value) == null ? void 0 : A.focus();
    }, T = () => {
      var A;
      return (A = E.value) == null ? void 0 : A.blur();
    }, O = (A) => {
      C.value = !1, n("mouseleave", A);
    }, U = (A) => {
      C.value = !0, n("mouseenter", A);
    }, re = (A) => {
      n("keydown", A);
    }, Le = () => {
      var A;
      (A = E.value) == null || A.select();
    }, ve = () => {
      n(Ot, ""), n(cr, ""), n("clear"), n(lr, "");
    };
    return Ae(() => r.modelValue, () => {
      var A;
      ht(() => Ce()), r.validateEvent && ((A = d?.validate) == null || A.call(d, "change").catch((z) => void 0));
    }), Ae(W, () => st()), Ae(() => r.type, async () => {
      await ht(), st(), Ce();
    }), yt(() => {
      !r.formatter && r.parser, st(), ht(Ce);
    }), t({
      input: L,
      textarea: p,
      ref: E,
      textareaStyle: ee,
      autosize: er(r, "autosize"),
      isComposing: At,
      focus: Tt,
      blur: T,
      select: Le,
      clear: ve,
      resizeTextarea: Ce
    }), (A, z) => (R(), j("div", {
      class: q([
        c(i),
        {
          [c(v).bm("group", "append")]: A.$slots.append,
          [c(v).bm("group", "prepend")]: A.$slots.prepend
        }
      ]),
      style: Nt(c(V)),
      onMouseenter: U,
      onMouseleave: O
    }, [
      ne(" input "),
      A.type !== "textarea" ? (R(), j(ct, { key: 0 }, [
        ne(" prepend slot "),
        A.$slots.prepend ? (R(), j("div", {
          key: 0,
          class: q(c(v).be("group", "prepend"))
        }, [
          Ee(A.$slots, "prepend")
        ], 2)) : ne("v-if", !0),
        g("div", {
          ref_key: "wrapperRef",
          ref: x,
          class: q(c(l))
        }, [
          ne(" prefix slot "),
          A.$slots.prefix || A.prefixIcon ? (R(), j("span", {
            key: 0,
            class: q(c(v).e("prefix"))
          }, [
            g("span", {
              class: q(c(v).e("prefix-inner"))
            }, [
              Ee(A.$slots, "prefix"),
              A.prefixIcon ? (R(), me(c(_t), {
                key: 0,
                class: q(c(v).e("icon"))
              }, {
                default: fe(() => [
                  (R(), me(Ht(A.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0),
          g("input", fo({
            id: c(m),
            ref_key: "input",
            ref: L,
            class: c(v).e("inner")
          }, c(a), {
            minlength: A.minlength,
            maxlength: A.maxlength,
            type: A.showPassword ? P.value ? "text" : "password" : A.type,
            disabled: c(y),
            readonly: A.readonly,
            autocomplete: A.autocomplete,
            tabindex: A.tabindex,
            "aria-label": A.ariaLabel,
            placeholder: A.placeholder,
            style: A.inputStyle,
            form: A.form,
            autofocus: A.autofocus,
            role: A.containerRole,
            onCompositionstart: c(dt),
            onCompositionupdate: c(Ct),
            onCompositionend: c(lt),
            onInput: ut,
            onChange: Ge,
            onKeydown: re
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ne(" suffix slot "),
          c(ge) ? (R(), j("span", {
            key: 1,
            class: q(c(v).e("suffix"))
          }, [
            g("span", {
              class: q(c(v).e("suffix-inner"))
            }, [
              !c(pe) || !c(Y) || !c(G) ? (R(), j(ct, { key: 0 }, [
                Ee(A.$slots, "suffix"),
                A.suffixIcon ? (R(), me(c(_t), {
                  key: 0,
                  class: q(c(v).e("icon"))
                }, {
                  default: fe(() => [
                    (R(), me(Ht(A.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ne("v-if", !0)
              ], 64)) : ne("v-if", !0),
              c(pe) ? (R(), me(c(_t), {
                key: 1,
                class: q([c(v).e("icon"), c(v).e("clear")]),
                onMousedown: et(c(Ko), ["prevent"]),
                onClick: ve
              }, {
                default: fe(() => [
                  F(c(Rl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ne("v-if", !0),
              c(Y) ? (R(), me(c(_t), {
                key: 2,
                class: q([c(v).e("icon"), c(v).e("password")]),
                onClick: nt
              }, {
                default: fe(() => [
                  (R(), me(Ht(c(be))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0),
              c(G) ? (R(), j("span", {
                key: 3,
                class: q(c(v).e("count"))
              }, [
                g("span", {
                  class: q(c(v).e("count-inner"))
                }, M(c(De)) + " / " + M(A.maxlength), 3)
              ], 2)) : ne("v-if", !0),
              c(le) && c(ye) && c(he) ? (R(), me(c(_t), {
                key: 4,
                class: q([
                  c(v).e("icon"),
                  c(v).e("validateIcon"),
                  c(v).is("loading", c(le) === "validating")
                ])
              }, {
                default: fe(() => [
                  (R(), me(Ht(c(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0)
        ], 2),
        ne(" append slot "),
        A.$slots.append ? (R(), j("div", {
          key: 1,
          class: q(c(v).be("group", "append"))
        }, [
          Ee(A.$slots, "append")
        ], 2)) : ne("v-if", !0)
      ], 64)) : (R(), j(ct, { key: 1 }, [
        ne(" textarea "),
        g("textarea", fo({
          id: c(m),
          ref_key: "textarea",
          ref: p,
          class: [c(b).e("inner"), c(v).is("focus", c(Z))]
        }, c(a), {
          minlength: A.minlength,
          maxlength: A.maxlength,
          tabindex: A.tabindex,
          disabled: c(y),
          readonly: A.readonly,
          autocomplete: A.autocomplete,
          style: c(ee),
          "aria-label": A.ariaLabel,
          placeholder: A.placeholder,
          form: A.form,
          autofocus: A.autofocus,
          rows: A.rows,
          role: A.containerRole,
          onCompositionstart: c(dt),
          onCompositionupdate: c(Ct),
          onCompositionend: c(lt),
          onInput: ut,
          onFocus: c(Q),
          onBlur: c(se),
          onChange: Ge,
          onKeydown: re
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(G) ? (R(), j("span", {
          key: 0,
          style: Nt(I.value),
          class: q(c(v).e("count"))
        }, M(c(De)) + " / " + M(A.maxlength), 7)) : ne("v-if", !0)
      ], 64))
    ], 38));
  }
});
var u_ = /* @__PURE__ */ tt(c_, [["__file", "input.vue"]]);
const d_ = An(u_), ao = 4, f_ = {
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
}, p_ = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ml = Symbol("scrollbarContextKey"), m_ = Xe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), h_ = "Thumb", g_ = /* @__PURE__ */ ce({
  __name: "thumb",
  props: m_,
  setup(e) {
    const t = e, n = je(Ml), r = St("scrollbar");
    n || Ll(h_, "can not inject scrollbar context");
    const o = K(), a = K(), s = K({}), i = K(!1);
    let l = !1, u = !1, d = wt ? document.onselectstart : null;
    const m = N(() => f_[t.vertical ? "vertical" : "horizontal"]), h = N(() => p_({
      size: t.size,
      move: t.move,
      bar: m.value
    })), y = N(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), v = (E) => {
      var x;
      if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button))
        return;
      (x = window.getSelection()) == null || x.removeAllRanges(), L(E);
      const Z = E.currentTarget;
      Z && (s.value[m.value.axis] = Z[m.value.offset] - (E[m.value.client] - Z.getBoundingClientRect()[m.value.direction]));
    }, b = (E) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const x = Math.abs(E.target.getBoundingClientRect()[m.value.direction] - E[m.value.client]), Z = a.value[m.value.offset] / 2, Q = (x - Z) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = Q * n.wrapElement[m.value.scrollSize] / 100;
    }, L = (E) => {
      E.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", p), document.addEventListener("mouseup", C), d = document.onselectstart, document.onselectstart = () => !1;
    }, p = (E) => {
      if (!o.value || !a.value || l === !1)
        return;
      const x = s.value[m.value.axis];
      if (!x)
        return;
      const Z = (o.value.getBoundingClientRect()[m.value.direction] - E[m.value.client]) * -1, Q = a.value[m.value.offset] - x, se = (Z - Q) * 100 * y.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = se * n.wrapElement[m.value.scrollSize] / 100;
    }, C = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", C), w(), u && (i.value = !1);
    }, P = () => {
      u = !1, i.value = !!t.size;
    }, I = () => {
      u = !0, i.value = l;
    };
    jn(() => {
      w(), document.removeEventListener("mouseup", C);
    });
    const w = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Tn(er(n, "scrollbarElement"), "mousemove", P), Tn(er(n, "scrollbarElement"), "mouseleave", I), (E, x) => (R(), me(So, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: fe(() => [
        bt(g("div", {
          ref_key: "instance",
          ref: o,
          class: q([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: b
        }, [
          g("div", {
            ref_key: "thumb",
            ref: a,
            class: q(c(r).e("thumb")),
            style: Nt(c(h)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [ir, E.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Xc = /* @__PURE__ */ tt(g_, [["__file", "thumb.vue"]]);
const v_ = Xe({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), b_ = /* @__PURE__ */ ce({
  __name: "bar",
  props: v_,
  setup(e, { expose: t }) {
    const n = e, r = je(Ml), o = K(0), a = K(0), s = K(""), i = K(""), l = K(1), u = K(1);
    return t({
      handleScroll: (h) => {
        if (h) {
          const y = h.offsetHeight - ao, v = h.offsetWidth - ao;
          a.value = h.scrollTop * 100 / y * l.value, o.value = h.scrollLeft * 100 / v * u.value;
        }
      },
      update: () => {
        const h = r?.wrapElement;
        if (!h)
          return;
        const y = h.offsetHeight - ao, v = h.offsetWidth - ao, b = y ** 2 / h.scrollHeight, L = v ** 2 / h.scrollWidth, p = Math.max(b, n.minSize), C = Math.max(L, n.minSize);
        l.value = b / (y - b) / (p / (y - p)), u.value = L / (v - L) / (C / (v - C)), i.value = p + ao < y ? `${p}px` : "", s.value = C + ao < v ? `${C}px` : "";
      }
    }), (h, y) => (R(), j(ct, null, [
      F(Xc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      F(Xc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var y_ = /* @__PURE__ */ tt(b_, [["__file", "bar.vue"]]);
const __ = Xe({
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
}), w_ = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ze)
}, k_ = "ElScrollbar", S_ = ce({
  name: k_
}), T_ = /* @__PURE__ */ ce({
  ...S_,
  props: __,
  emits: w_,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = St("scrollbar");
    let a, s, i = 0, l = 0;
    const u = K(), d = K(), m = K(), h = K(), y = N(() => {
      const w = {};
      return r.height && (w.height = go(r.height)), r.maxHeight && (w.maxHeight = go(r.maxHeight)), [r.wrapStyle, w];
    }), v = N(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), b = N(() => [o.e("view"), r.viewClass]), L = () => {
      var w;
      d.value && ((w = h.value) == null || w.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function p(w, E) {
      sn(w) ? d.value.scrollTo(w) : ze(w) && ze(E) && d.value.scrollTo(w, E);
    }
    const C = (w) => {
      ze(w) && (d.value.scrollTop = w);
    }, P = (w) => {
      ze(w) && (d.value.scrollLeft = w);
    }, I = () => {
      var w;
      (w = h.value) == null || w.update();
    };
    return Ae(() => r.noresize, (w) => {
      w ? (a?.(), s?.()) : ({ stop: a } = Nn(m, I), s = Tn("resize", I));
    }, { immediate: !0 }), Ae(() => [r.maxHeight, r.height], () => {
      r.native || ht(() => {
        var w;
        I(), d.value && ((w = h.value) == null || w.handleScroll(d.value));
      });
    }), Bn(Ml, zr({
      scrollbarElement: u,
      wrapElement: d
    })), Xf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), yt(() => {
      r.native || ht(() => {
        I();
      });
    }), Eu(() => I()), t({
      wrapRef: d,
      update: I,
      scrollTo: p,
      setScrollTop: C,
      setScrollLeft: P,
      handleScroll: L
    }), (w, E) => (R(), j("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: q(c(o).b())
    }, [
      g("div", {
        ref_key: "wrapRef",
        ref: d,
        class: q(c(v)),
        style: Nt(c(y)),
        tabindex: w.tabindex,
        onScroll: L
      }, [
        (R(), me(Ht(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: m,
          class: q(c(b)),
          style: Nt(w.viewStyle),
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
      w.native ? ne("v-if", !0) : (R(), me(y_, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var E_ = /* @__PURE__ */ tt(T_, [["__file", "scrollbar.vue"]]);
const A_ = An(E_), Dl = Symbol("popper"), of = Symbol("popperContent"), C_ = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], af = Xe({
  role: {
    type: String,
    values: C_,
    default: "tooltip"
  }
}), I_ = ce({
  name: "ElPopper",
  inheritAttrs: !1
}), L_ = /* @__PURE__ */ ce({
  ...I_,
  props: af,
  setup(e, { expose: t }) {
    const n = e, r = K(), o = K(), a = K(), s = K(), i = N(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Bn(Dl, l), (u, d) => Ee(u.$slots, "default");
  }
});
var O_ = /* @__PURE__ */ tt(L_, [["__file", "popper.vue"]]);
const sf = Xe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), x_ = ce({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), R_ = /* @__PURE__ */ ce({
  ...x_,
  props: sf,
  setup(e, { expose: t }) {
    const n = e, r = St("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = je(of, void 0);
    return Ae(() => n.arrowOffset, (i) => {
      o.value = i;
    }), jn(() => {
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
var N_ = /* @__PURE__ */ tt(R_, [["__file", "arrow.vue"]]);
const lf = Xe({
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
}), cf = Symbol("elForwardRef"), P_ = (e) => {
  Bn(cf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, $_ = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Zs = (e) => {
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
}, M_ = "ElOnlyChild", D_ = ce({
  name: M_,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = je(cf), a = $_((r = o?.setForwardRef) != null ? r : Ko);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = uf(i);
      return l ? bt(Qf(l, n), [[a]]) : null;
    };
  }
});
function uf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (sn(n))
      switch (n.type) {
        case Jf:
          continue;
        case Su:
        case "svg":
          return Qc(n);
        case ct:
          return uf(n.children);
        default:
          return n;
      }
    return Qc(n);
  }
  return null;
}
function Qc(e) {
  const t = St("only-child");
  return F("span", {
    class: t.e("content")
  }, [e]);
}
const F_ = ce({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), z_ = /* @__PURE__ */ ce({
  ...F_,
  props: lf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = je(Dl, void 0);
    P_(o);
    const a = N(() => i.value ? n.id : void 0), s = N(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = N(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = N(() => i.value ? `${n.open}` : void 0);
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
    return yt(() => {
      Ae(() => n.virtualRef, (m) => {
        m && (o.value = rr(m));
      }, {
        immediate: !0
      }), Ae(o, (m, h) => {
        u?.(), u = void 0, Sn(m) && (d.forEach((y) => {
          var v;
          const b = n[y];
          b && (m.addEventListener(y.slice(2).toLowerCase(), b), (v = h?.removeEventListener) == null || v.call(h, y.slice(2).toLowerCase(), b));
        }), Zs(m) && (u = Ae([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, b) => {
            sr(y[b]) ? m.removeAttribute(v) : m.setAttribute(v, y[b]);
          });
        }, { immediate: !0 }))), Sn(h) && Zs(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => h.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), jn(() => {
      if (u?.(), u = void 0, o.value && Sn(o.value)) {
        const m = o.value;
        d.forEach((h) => {
          const y = n[h];
          y && m.removeEventListener(h.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, h) => m.virtualTriggering ? ne("v-if", !0) : (R(), me(c(D_), fo({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: fe(() => [
        Ee(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var B_ = /* @__PURE__ */ tt(z_, [["__file", "trigger.vue"]]);
const Cs = "focus-trap.focus-after-trapped", Is = "focus-trap.focus-after-released", V_ = "focus-trap.focusout-prevented", Jc = {
  cancelable: !0,
  bubbles: !1
}, U_ = {
  cancelable: !0,
  bubbles: !1
}, eu = "focusAfterTrapped", tu = "focusAfterReleased", j_ = Symbol("elFocusTrap"), Fl = K(), os = K(0), zl = K(0);
let ha = 0;
const df = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, nu = (e, t) => {
  for (const n of e)
    if (!H_(n, t))
      return n;
}, H_ = (e, t) => {
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
}, W_ = (e) => {
  const t = df(e), n = nu(t, e), r = nu(t.reverse(), e);
  return [n, r];
}, G_ = (e) => e instanceof HTMLInputElement && "select" in e, Qn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    Sn(e) && !Zs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), zl.value = window.performance.now(), e !== n && G_(e) && t && e.select(), Sn(e) && r && e.removeAttribute("tabindex");
  }
};
function ru(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const K_ = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = ru(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = ru(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, q_ = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Qn(r, t), document.activeElement !== n)
      return;
}, ou = K_(), Y_ = () => os.value > zl.value, ga = () => {
  Fl.value = "pointer", os.value = window.performance.now();
}, au = () => {
  Fl.value = "keyboard", os.value = window.performance.now();
}, Z_ = () => (yt(() => {
  ha === 0 && (document.addEventListener("mousedown", ga), document.addEventListener("touchstart", ga), document.addEventListener("keydown", au)), ha++;
}), jn(() => {
  ha--, ha <= 0 && (document.removeEventListener("mousedown", ga), document.removeEventListener("touchstart", ga), document.removeEventListener("keydown", au));
}), {
  focusReason: Fl,
  lastUserFocusTimestamp: os,
  lastAutomatedFocusTimestamp: zl
}), va = (e) => new CustomEvent(V_, {
  ...U_,
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
let co = [];
const su = (e) => {
  e.code === Fn.esc && co.forEach((t) => t(e));
}, X_ = (e) => {
  yt(() => {
    co.length === 0 && document.addEventListener("keydown", su), wt && co.push(e);
  }), jn(() => {
    co = co.filter((t) => t !== e), co.length === 0 && wt && document.removeEventListener("keydown", su);
  });
}, Q_ = ce({
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
    eu,
    tu,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = K();
    let r, o;
    const { focusReason: a } = Z_();
    X_((v) => {
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
    }, i = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: b, altKey: L, ctrlKey: p, metaKey: C, currentTarget: P, shiftKey: I } = v, { loop: w } = e, E = b === Fn.tab && !L && !p && !C, x = document.activeElement;
      if (E && x) {
        const Z = P, [Q, se] = W_(Z);
        if (Q && se) {
          if (!I && x === se) {
            const le = va({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (v.preventDefault(), w && Qn(Q, !0));
          } else if (I && [Q, Z].includes(x)) {
            const le = va({
              focusReason: a.value
            });
            t("focusout-prevented", le), le.defaultPrevented || (v.preventDefault(), w && Qn(se, !0));
          }
        } else if (x === Z) {
          const le = va({
            focusReason: a.value
          });
          t("focusout-prevented", le), le.defaultPrevented || v.preventDefault();
        }
      }
    };
    Bn(j_, {
      focusTrapRef: n,
      onKeydown: i
    }), Ae(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), Ae([n], ([v], [b]) => {
      v && (v.addEventListener("keydown", i), v.addEventListener("focusin", d), v.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", d), b.removeEventListener("focusout", m));
    });
    const l = (v) => {
      t(eu, v);
    }, u = (v) => t(tu, v), d = (v) => {
      const b = c(n);
      if (!b)
        return;
      const L = v.target, p = v.relatedTarget, C = L && b.contains(L);
      e.trapped || p && b.contains(p) || (r = p), C && t("focusin", v), !s.paused && e.trapped && (C ? o = L : Qn(o, !0));
    }, m = (v) => {
      const b = c(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const L = v.relatedTarget;
          !sr(L) && !b.contains(L) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const p = va({
                focusReason: a.value
              });
              t("focusout-prevented", p), p.defaultPrevented || Qn(o, !0);
            }
          }, 0);
        } else {
          const L = v.target;
          L && b.contains(L) || t("focusout", v);
        }
    };
    async function h() {
      await ht();
      const v = c(n);
      if (v) {
        ou.push(s);
        const b = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = b, !v.contains(b)) {
          const p = new Event(Cs, Jc);
          v.addEventListener(Cs, l), v.dispatchEvent(p), p.defaultPrevented || ht(() => {
            let C = e.focusStartEl;
            Bt(C) || (Qn(C), document.activeElement !== C && (C = "first")), C === "first" && q_(df(v), !0), (document.activeElement === b || C === "container") && Qn(v);
          });
        }
      }
    }
    function y() {
      const v = c(n);
      if (v) {
        v.removeEventListener(Cs, l);
        const b = new CustomEvent(Is, {
          ...Jc,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(Is, u), v.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !Y_() || v.contains(document.activeElement)) && Qn(r ?? document.body), v.removeEventListener(Is, u), ou.remove(s);
      }
    }
    return yt(() => {
      e.trapped && h(), Ae(() => e.trapped, (v) => {
        v ? h() : y();
      });
    }), jn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function J_(e, t, n, r, o, a) {
  return Ee(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var ew = /* @__PURE__ */ tt(Q_, [["render", J_], ["__file", "focus-trap.vue"]]), tn = "top", pn = "bottom", mn = "right", nn = "left", Bl = "auto", ra = [tn, pn, mn, nn], vo = "start", Zo = "end", tw = "clippingParents", ff = "viewport", Po = "popper", nw = "reference", lu = ra.reduce(function(e, t) {
  return e.concat([t + "-" + vo, t + "-" + Zo]);
}, []), as = [].concat(ra, [Bl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + vo, t + "-" + Zo]);
}, []), rw = "beforeRead", ow = "read", aw = "afterRead", sw = "beforeMain", lw = "main", iw = "afterMain", cw = "beforeWrite", uw = "write", dw = "afterWrite", fw = [rw, ow, aw, sw, lw, iw, cw, uw, dw];
function Un(e) {
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
function dn(e) {
  var t = ln(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ln(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !dn(a) || !Un(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function mw(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !dn(o) || !Un(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var pf = { name: "applyStyles", enabled: !0, phase: "write", fn: pw, effect: mw, requires: ["computeStyles"] };
function zn(e) {
  return e.split("-")[0];
}
var Fr = Math.max, Ba = Math.min, bo = Math.round;
function Xs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function mf() {
  return !/^((?!chrome|android).)*safari/i.test(Xs());
}
function yo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && dn(e) && (o = e.offsetWidth > 0 && bo(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && bo(r.height) / e.offsetHeight || 1);
  var s = Ur(e) ? ln(e) : window, i = s.visualViewport, l = !mf() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
  return { width: m, height: h, top: d, right: u + m, bottom: d + h, left: u, x: u, y: d };
}
function Ul(e) {
  var t = yo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function hf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Vl(n)) {
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
function hw(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function Ar(e) {
  return ((Ur(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ss(e) {
  return Un(e) === "html" ? e : e.assignedSlot || e.parentNode || (Vl(e) ? e.host : null) || Ar(e);
}
function iu(e) {
  return !dn(e) || ur(e).position === "fixed" ? null : e.offsetParent;
}
function gw(e) {
  var t = /firefox/i.test(Xs()), n = /Trident/i.test(Xs());
  if (n && dn(e)) {
    var r = ur(e);
    if (r.position === "fixed") return null;
  }
  var o = ss(e);
  for (Vl(o) && (o = o.host); dn(o) && ["html", "body"].indexOf(Un(o)) < 0; ) {
    var a = ur(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function oa(e) {
  for (var t = ln(e), n = iu(e); n && hw(n) && ur(n).position === "static"; ) n = iu(n);
  return n && (Un(n) === "html" || Un(n) === "body" && ur(n).position === "static") ? t : n || gw(e) || t;
}
function jl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vo(e, t, n) {
  return Fr(e, Ba(t, n));
}
function vw(e, t, n) {
  var r = Vo(e, t, n);
  return r > n ? n : r;
}
function gf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function vf(e) {
  return Object.assign({}, gf(), e);
}
function bf(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var bw = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, vf(typeof e != "number" ? e : bf(e, ra));
};
function yw(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = zn(n.placement), l = jl(i), u = [nn, mn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = bw(o.padding, n), h = Ul(a), y = l === "y" ? tn : nn, v = l === "y" ? pn : mn, b = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], L = s[l] - n.rects.reference[l], p = oa(a), C = p ? l === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, P = b / 2 - L / 2, I = m[y], w = C - h[d] - m[v], E = C / 2 - h[d] / 2 + P, x = Vo(I, E, w), Z = l;
    n.modifiersData[r] = (t = {}, t[Z] = x, t.centerOffset = x - E, t);
  }
}
function _w(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || hf(t.elements.popper, o) && (t.elements.arrow = o));
}
var ww = { name: "arrow", enabled: !0, phase: "main", fn: yw, effect: _w, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function _o(e) {
  return e.split("-")[1];
}
var kw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Sw(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: bo(n * o) / o || 0, y: bo(r * o) / o || 0 };
}
function cu(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, h = s.x, y = h === void 0 ? 0 : h, v = s.y, b = v === void 0 ? 0 : v, L = typeof d == "function" ? d({ x: y, y: b }) : { x: y, y: b };
  y = L.x, b = L.y;
  var p = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), P = nn, I = tn, w = window;
  if (u) {
    var E = oa(n), x = "clientHeight", Z = "clientWidth";
    if (E === ln(n) && (E = Ar(n), ur(E).position !== "static" && i === "absolute" && (x = "scrollHeight", Z = "scrollWidth")), E = E, o === tn || (o === nn || o === mn) && a === Zo) {
      I = pn;
      var Q = m && E === w && w.visualViewport ? w.visualViewport.height : E[x];
      b -= Q - r.height, b *= l ? 1 : -1;
    }
    if (o === nn || (o === tn || o === pn) && a === Zo) {
      P = mn;
      var se = m && E === w && w.visualViewport ? w.visualViewport.width : E[Z];
      y -= se - r.width, y *= l ? 1 : -1;
    }
  }
  var he = Object.assign({ position: i }, u && kw), le = d === !0 ? Sw({ x: y, y: b }, ln(n)) : { x: y, y: b };
  if (y = le.x, b = le.y, l) {
    var ye;
    return Object.assign({}, he, (ye = {}, ye[I] = C ? "0" : "", ye[P] = p ? "0" : "", ye.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", ye));
  }
  return Object.assign({}, he, (t = {}, t[I] = C ? b + "px" : "", t[P] = p ? y + "px" : "", t.transform = "", t));
}
function Tw(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: zn(t.placement), variation: _o(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cu(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cu(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var yf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Tw, data: {} }, ba = { passive: !0 };
function Ew(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = ln(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, ba);
  }), i && l.addEventListener("resize", n.update, ba), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ba);
    }), i && l.removeEventListener("resize", n.update, ba);
  };
}
var _f = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ew, data: {} }, Aw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ea(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Aw[t];
  });
}
var Cw = { start: "end", end: "start" };
function uu(e) {
  return e.replace(/start|end/g, function(t) {
    return Cw[t];
  });
}
function Hl(e) {
  var t = ln(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Wl(e) {
  return yo(Ar(e)).left + Hl(e).scrollLeft;
}
function Iw(e, t) {
  var n = ln(e), r = Ar(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = mf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Wl(e), y: l };
}
function Lw(e) {
  var t, n = Ar(e), r = Hl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Fr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Fr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Wl(e), l = -r.scrollTop;
  return ur(o || n).direction === "rtl" && (i += Fr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Gl(e) {
  var t = ur(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function wf(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : dn(e) && Gl(e) ? e : wf(ss(e));
}
function Uo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = wf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ln(r), s = o ? [a].concat(a.visualViewport || [], Gl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Uo(ss(s)));
}
function Qs(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Ow(e, t) {
  var n = yo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function du(e, t, n) {
  return t === ff ? Qs(Iw(e, n)) : Ur(t) ? Ow(t, n) : Qs(Lw(Ar(e)));
}
function xw(e) {
  var t = Uo(ss(e)), n = ["absolute", "fixed"].indexOf(ur(e).position) >= 0, r = n && dn(e) ? oa(e) : e;
  return Ur(r) ? t.filter(function(o) {
    return Ur(o) && hf(o, r) && Un(o) !== "body";
  }) : [];
}
function Rw(e, t, n, r) {
  var o = t === "clippingParents" ? xw(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = du(e, u, r);
    return l.top = Fr(d.top, l.top), l.right = Ba(d.right, l.right), l.bottom = Ba(d.bottom, l.bottom), l.left = Fr(d.left, l.left), l;
  }, du(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function kf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? zn(r) : null, a = r ? _o(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case tn:
      l = { x: s, y: t.y - n.height };
      break;
    case pn:
      l = { x: s, y: t.y + t.height };
      break;
    case mn:
      l = { x: t.x + t.width, y: i };
      break;
    case nn:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? jl(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case vo:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? tw : i, u = n.rootBoundary, d = u === void 0 ? ff : u, m = n.elementContext, h = m === void 0 ? Po : m, y = n.altBoundary, v = y === void 0 ? !1 : y, b = n.padding, L = b === void 0 ? 0 : b, p = vf(typeof L != "number" ? L : bf(L, ra)), C = h === Po ? nw : Po, P = e.rects.popper, I = e.elements[v ? C : h], w = Rw(Ur(I) ? I : I.contextElement || Ar(e.elements.popper), l, d, s), E = yo(e.elements.reference), x = kf({ reference: E, element: P, placement: o }), Z = Qs(Object.assign({}, P, x)), Q = h === Po ? Z : E, se = { top: w.top - Q.top + p.top, bottom: Q.bottom - w.bottom + p.bottom, left: w.left - Q.left + p.left, right: Q.right - w.right + p.right }, he = e.modifiersData.offset;
  if (h === Po && he) {
    var le = he[o];
    Object.keys(se).forEach(function(ye) {
      var be = [mn, pn].indexOf(ye) >= 0 ? 1 : -1, V = [tn, pn].indexOf(ye) >= 0 ? "y" : "x";
      se[ye] += le[V] * be;
    });
  }
  return se;
}
function Nw(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? as : l, d = _o(r), m = d ? i ? lu : lu.filter(function(v) {
    return _o(v) === d;
  }) : ra, h = m.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(v, b) {
    return v[b] = Xo(e, { placement: b, boundary: o, rootBoundary: a, padding: s })[zn(b)], v;
  }, {});
  return Object.keys(y).sort(function(v, b) {
    return y[v] - y[b];
  });
}
function Pw(e) {
  if (zn(e) === Bl) return [];
  var t = Ea(e);
  return [uu(e), t, uu(t)];
}
function $w(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, v = y === void 0 ? !0 : y, b = n.allowedAutoPlacements, L = t.options.placement, p = zn(L), C = p === L, P = l || (C || !v ? [Ea(L)] : Pw(L)), I = [L].concat(P).reduce(function(_e, J) {
      return _e.concat(zn(J) === Bl ? Nw(t, { placement: J, boundary: d, rootBoundary: m, padding: u, flipVariations: v, allowedAutoPlacements: b }) : J);
    }, []), w = t.rects.reference, E = t.rects.popper, x = /* @__PURE__ */ new Map(), Z = !0, Q = I[0], se = 0; se < I.length; se++) {
      var he = I[se], le = zn(he), ye = _o(he) === vo, be = [tn, pn].indexOf(le) >= 0, V = be ? "width" : "height", ee = Xo(t, { placement: he, boundary: d, rootBoundary: m, altBoundary: h, padding: u }), W = be ? ye ? mn : nn : ye ? pn : tn;
      w[V] > E[V] && (W = Ea(W));
      var pe = Ea(W), Y = [];
      if (a && Y.push(ee[le] <= 0), i && Y.push(ee[W] <= 0, ee[pe] <= 0), Y.every(function(_e) {
        return _e;
      })) {
        Q = he, Z = !1;
        break;
      }
      x.set(he, Y);
    }
    if (Z) for (var G = v ? 3 : 1, De = function(_e) {
      var J = I.find(function(Ce) {
        var Qe = x.get(Ce);
        if (Qe) return Qe.slice(0, _e).every(function(oe) {
          return oe;
        });
      });
      if (J) return Q = J, "break";
    }, Be = G; Be > 0; Be--) {
      var ge = De(Be);
      if (ge === "break") break;
    }
    t.placement !== Q && (t.modifiersData[r]._skip = !0, t.placement = Q, t.reset = !0);
  }
}
var Mw = { name: "flip", enabled: !0, phase: "main", fn: $w, requiresIfExists: ["offset"], data: { _skip: !1 } };
function fu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function pu(e) {
  return [tn, mn, pn, nn].some(function(t) {
    return e[t] >= 0;
  });
}
function Dw(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Xo(t, { elementContext: "reference" }), i = Xo(t, { altBoundary: !0 }), l = fu(s, r), u = fu(i, o, a), d = pu(l), m = pu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var Fw = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Dw };
function zw(e, t, n) {
  var r = zn(e), o = [nn, tn].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [nn, mn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Bw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = as.reduce(function(d, m) {
    return d[m] = zw(m, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Vw = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Bw };
function Uw(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = kf({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Sf = { name: "popperOffsets", enabled: !0, phase: "read", fn: Uw, data: {} };
function jw(e) {
  return e === "x" ? "y" : "x";
}
function Hw(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, v = n.tetherOffset, b = v === void 0 ? 0 : v, L = Xo(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: d }), p = zn(t.placement), C = _o(t.placement), P = !C, I = jl(p), w = jw(I), E = t.modifiersData.popperOffsets, x = t.rects.reference, Z = t.rects.popper, Q = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, se = typeof Q == "number" ? { mainAxis: Q, altAxis: Q } : Object.assign({ mainAxis: 0, altAxis: 0 }, Q), he = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, le = { x: 0, y: 0 };
  if (E) {
    if (a) {
      var ye, be = I === "y" ? tn : nn, V = I === "y" ? pn : mn, ee = I === "y" ? "height" : "width", W = E[I], pe = W + L[be], Y = W - L[V], G = y ? -Z[ee] / 2 : 0, De = C === vo ? x[ee] : Z[ee], Be = C === vo ? -Z[ee] : -x[ee], ge = t.elements.arrow, _e = y && ge ? Ul(ge) : { width: 0, height: 0 }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : gf(), Ce = J[be], Qe = J[V], oe = Vo(0, x[ee], _e[ee]), st = P ? x[ee] / 2 - G - oe - Ce - se.mainAxis : De - oe - Ce - se.mainAxis, ut = P ? -x[ee] / 2 + G + oe + Qe + se.mainAxis : Be + oe + Qe + se.mainAxis, Ge = t.elements.arrow && oa(t.elements.arrow), At = Ge ? I === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0 : 0, dt = (ye = he?.[I]) != null ? ye : 0, Ct = W + st - dt - At, lt = W + ut - dt, nt = Vo(y ? Ba(pe, Ct) : pe, W, y ? Fr(Y, lt) : Y);
      E[I] = nt, le[I] = nt - W;
    }
    if (i) {
      var Tt, T = I === "x" ? tn : nn, O = I === "x" ? pn : mn, U = E[w], re = w === "y" ? "height" : "width", Le = U + L[T], ve = U - L[O], A = [tn, nn].indexOf(p) !== -1, z = (Tt = he?.[w]) != null ? Tt : 0, Se = A ? Le : U - x[re] - Z[re] - z + se.altAxis, Re = A ? U + x[re] + Z[re] - z - se.altAxis : ve, qe = y && A ? vw(Se, U, Re) : Vo(y ? Se : Le, U, y ? Re : ve);
      E[w] = qe, le[w] = qe - U;
    }
    t.modifiersData[r] = le;
  }
}
var Ww = { name: "preventOverflow", enabled: !0, phase: "main", fn: Hw, requiresIfExists: ["offset"] };
function Gw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Kw(e) {
  return e === ln(e) || !dn(e) ? Hl(e) : Gw(e);
}
function qw(e) {
  var t = e.getBoundingClientRect(), n = bo(t.width) / e.offsetWidth || 1, r = bo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Yw(e, t, n) {
  n === void 0 && (n = !1);
  var r = dn(t), o = dn(t) && qw(t), a = Ar(t), s = yo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Un(t) !== "body" || Gl(a)) && (i = Kw(t)), dn(t) ? (l = yo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Wl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function Zw(e) {
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
function Xw(e) {
  var t = Zw(e);
  return fw.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Qw(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Jw(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var mu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function hu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Kl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? mu : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, mu, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, h = { state: u, setOptions: function(b) {
      var L = typeof b == "function" ? b(u.options) : b;
      v(), u.options = Object.assign({}, a, u.options, L), u.scrollParents = { reference: Ur(s) ? Uo(s) : s.contextElement ? Uo(s.contextElement) : [], popper: Uo(i) };
      var p = Xw(Jw([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(C) {
        return C.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, L = b.reference, p = b.popper;
        if (hu(L, p)) {
          u.rects = { reference: Yw(L, oa(p), u.options.strategy === "fixed"), popper: Ul(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Z) {
            return u.modifiersData[Z.name] = Object.assign({}, Z.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var P = u.orderedModifiers[C], I = P.fn, w = P.options, E = w === void 0 ? {} : w, x = P.name;
            typeof I == "function" && (u = I({ state: u, options: E, name: x, instance: h }) || u);
          }
        }
      }
    }, update: Qw(function() {
      return new Promise(function(b) {
        h.forceUpdate(), b(u);
      });
    }), destroy: function() {
      v(), m = !0;
    } };
    if (!hu(s, i)) return h;
    h.setOptions(l).then(function(b) {
      !m && l.onFirstUpdate && l.onFirstUpdate(b);
    });
    function y() {
      u.orderedModifiers.forEach(function(b) {
        var L = b.name, p = b.options, C = p === void 0 ? {} : p, P = b.effect;
        if (typeof P == "function") {
          var I = P({ state: u, name: L, instance: h, options: C }), w = function() {
          };
          d.push(I || w);
        }
      });
    }
    function v() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return h;
  };
}
Kl();
var ek = [_f, Sf, yf, pf];
Kl({ defaultModifiers: ek });
var tk = [_f, Sf, yf, pf, Vw, Mw, Ww, ww, Fw], nk = Kl({ defaultModifiers: tk });
const rk = ["fixed", "absolute"], ok = Xe({
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
    values: as,
    default: "bottom"
  },
  popperOptions: {
    type: ke(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: rk,
    default: "absolute"
  }
}), Tf = Xe({
  ...ok,
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
}), ak = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, sk = (e, t) => {
  const n = K(!1), r = K();
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
}, lk = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...ck(e), ...t]
  };
  return uk(a, o?.modifiers), a;
}, ik = (e) => {
  if (wt)
    return rr(e);
};
function ck(e) {
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
function uk(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const dk = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = fk(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = N(() => {
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
  }), a = wr(), s = K({
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
    i(), !(!l || !u) && (a.value = nk(l, u, c(o)));
  }), jn(() => {
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
function fk(e) {
  const t = Object.keys(e.elements), n = $a(t.map((o) => [o, e.styles[o] || {}])), r = $a(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const pk = 0, mk = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = je(Dl, void 0), a = K(), s = K(), i = N(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = N(() => {
    var p;
    const C = c(a), P = (p = c(s)) != null ? p : pk;
    return {
      name: "arrow",
      enabled: !x1(C),
      options: {
        element: C,
        padding: P
      }
    };
  }), u = N(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...lk(e, [
      c(l),
      c(i)
    ])
  })), d = N(() => ik(e.referenceEl) || c(r)), { attributes: m, state: h, styles: y, update: v, forceUpdate: b, instanceRef: L } = dk(d, n, u);
  return Ae(L, (p) => t.value = p), yt(() => {
    Ae(() => {
      var p;
      return (p = c(d)) == null ? void 0 : p.getBoundingClientRect();
    }, () => {
      v();
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
    update: v
  };
}, hk = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Fd(), a = St("popper"), s = N(() => c(t).popper), i = K(ze(e.zIndex) ? e.zIndex : o()), l = N(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = N(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = N(() => r.value === "dialog" ? "false" : void 0), m = N(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = ze(e.zIndex) ? e.zIndex : o();
    }
  };
}, gk = ce({
  name: "ElPopperContent"
}), vk = /* @__PURE__ */ ce({
  ...gk,
  props: Tf,
  emits: ak,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = sk(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: v, instanceRef: b, role: L, update: p } = mk(r), {
      ariaModal: C,
      arrowStyle: P,
      contentAttrs: I,
      contentClass: w,
      contentStyle: E,
      updateZIndex: x
    } = hk(r, {
      styles: v,
      attributes: m,
      role: L
    }), Z = je(za, void 0), Q = K();
    Bn(of, {
      arrowStyle: P,
      arrowRef: h,
      arrowOffset: Q
    }), Z && Bn(za, {
      ...Z,
      addInputId: Ko,
      removeInputId: Ko
    });
    let se;
    const he = (ye = !0) => {
      p(), ye && x();
    }, le = () => {
      he(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return yt(() => {
      Ae(() => r.triggerTargetEl, (ye, be) => {
        se?.(), se = void 0;
        const V = c(ye || y.value), ee = c(be || y.value);
        Sn(V) && (se = Ae([L, () => r.ariaLabel, C, () => r.id], (W) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((pe, Y) => {
            sr(W[Y]) ? V.removeAttribute(pe) : V.setAttribute(pe, W[Y]);
          });
        }, { immediate: !0 })), ee !== V && Sn(ee) && ["role", "aria-label", "aria-modal", "id"].forEach((W) => {
          ee.removeAttribute(W);
        });
      }, { immediate: !0 }), Ae(() => r.visible, le, { immediate: !0 });
    }), jn(() => {
      se?.(), se = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: b,
      updatePopper: he,
      contentStyle: E
    }), (ye, be) => (R(), j("div", fo({
      ref_key: "contentRef",
      ref: y
    }, c(I), {
      style: c(E),
      class: c(w),
      tabindex: "-1",
      onMouseenter: (V) => ye.$emit("mouseenter", V),
      onMouseleave: (V) => ye.$emit("mouseleave", V)
    }), [
      F(c(ew), {
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
          Ee(ye.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var bk = /* @__PURE__ */ tt(vk, [["__file", "content.vue"]]);
const yk = An(O_), ql = Symbol("elTooltip");
function gu() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return ta(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const _k = Xe({
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
}), wk = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = gu(), {
    registerTimeout: s,
    cancelTimeout: i
  } = gu();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const m = c(n);
        ze(m) && m > 0 && s(() => {
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
}, Yl = Xe({
  ..._k,
  ...Tf,
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
}), Ef = Xe({
  ...lf,
  disabled: Boolean,
  trigger: {
    type: ke([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ke(Array),
    default: () => [Fn.enter, Fn.numpadEnter, Fn.space]
  }
}), kk = es({
  type: ke(Boolean),
  default: null
}), Sk = es({
  type: ke(Function)
}), Tk = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: kk,
    [n]: Sk
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
      const h = Gt(), { emit: y } = h, v = h.props, b = N(() => at(v[n])), L = N(() => v[e] === null), p = (x) => {
        s.value !== !0 && (s.value = !0, i && (i.value = x), at(d) && d(x));
      }, C = (x) => {
        s.value !== !1 && (s.value = !1, i && (i.value = x), at(m) && m(x));
      }, P = (x) => {
        if (v.disabled === !0 || at(u) && !u())
          return;
        const Z = b.value && wt;
        Z && y(t, !0), (L.value || !Z) && p(x);
      }, I = (x) => {
        if (v.disabled === !0 || !wt)
          return;
        const Z = b.value && wt;
        Z && y(t, !1), (L.value || !Z) && C(x);
      }, w = (x) => {
        kr(x) && (v.disabled && x ? b.value && y(t, !1) : s.value !== x && (x ? p() : C()));
      }, E = () => {
        s.value ? I() : P();
      };
      return Ae(() => v[e], w), l && h.appContext.config.globalProperties.$route !== void 0 && Ae(() => ({
        ...h.proxy.$route
      }), () => {
        l.value && s.value && I();
      }), yt(() => {
        w(v[e]);
      }), {
        hide: I,
        show: P,
        toggle: E,
        hasUpdateHandler: b
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: Ek,
  useModelToggleEmits: Ak,
  useModelToggle: Ck
} = Tk("visible"), Ik = Xe({
  ...af,
  ...Ek,
  ...Yl,
  ...Ef,
  ...sf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Lk = [
  ...Ak,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Ok = (e, t) => Pn(e) ? e.includes(t) : e === t, so = (e, t, n) => (r) => {
  Ok(c(e), t) && n(r);
}, Jn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, xk = ce({
  name: "ElTooltipTrigger"
}), Rk = /* @__PURE__ */ ce({
  ...xk,
  props: Ef,
  setup(e, { expose: t }) {
    const n = e, r = St("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = je(ql, void 0), d = K(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, h = er(n, "trigger"), y = Jn(m, so(h, "hover", i)), v = Jn(m, so(h, "hover", l)), b = Jn(m, so(h, "click", (I) => {
      I.button === 0 && u(I);
    })), L = Jn(m, so(h, "focus", i)), p = Jn(m, so(h, "focus", l)), C = Jn(m, so(h, "contextmenu", (I) => {
      I.preventDefault(), u(I);
    })), P = Jn(m, (I) => {
      const { code: w } = I;
      n.triggerKeys.includes(w) && (I.preventDefault(), u(I));
    });
    return t({
      triggerRef: d
    }), (I, w) => (R(), me(c(B_), {
      id: c(a),
      "virtual-ref": I.virtualRef,
      open: c(s),
      "virtual-triggering": I.virtualTriggering,
      class: q(c(r).e("trigger")),
      onBlur: c(p),
      onClick: c(b),
      onContextmenu: c(C),
      onFocus: c(L),
      onMouseenter: c(y),
      onMouseleave: c(v),
      onKeydown: c(P)
    }, {
      default: fe(() => [
        Ee(I.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Nk = /* @__PURE__ */ tt(Rk, [["__file", "trigger.vue"]]);
const Pk = Xe({
  to: {
    type: ke([String, Object]),
    required: !0
  },
  disabled: Boolean
}), $k = /* @__PURE__ */ ce({
  __name: "teleport",
  props: Pk,
  setup(e) {
    return (t, n) => t.disabled ? Ee(t.$slots, "default", { key: 0 }) : (R(), me(ep, {
      key: 1,
      to: t.to
    }, [
      Ee(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Mk = /* @__PURE__ */ tt($k, [["__file", "teleport.vue"]]);
const Dk = An(Mk), Af = () => {
  const e = _l(), t = ef(), n = N(() => `${e.value}-popper-container-${t.prefix}`), r = N(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Fk = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, zk = () => {
  const { id: e, selector: t } = Af();
  return tp(() => {
    wt && (document.body.querySelector(t.value) || Fk(e.value));
  }), {
    id: e,
    selector: t
  };
}, Bk = ce({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Vk = /* @__PURE__ */ ce({
  ...Bk,
  props: Yl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Af(), o = St("tooltip"), a = K();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: m,
      onOpen: h,
      onShow: y,
      onHide: v,
      onBeforeShow: b,
      onBeforeHide: L
    } = je(ql, void 0), p = N(() => n.transition || `${o.namespace.value}-fade-in-linear`), C = N(() => n.persistent);
    jn(() => {
      s?.();
    });
    const P = N(() => c(C) ? !0 : c(u)), I = N(() => n.disabled ? !1 : c(u)), w = N(() => n.appendTo || r.value), E = N(() => {
      var W;
      return (W = n.style) != null ? W : {};
    }), x = K(!0), Z = () => {
      v(), ee() && Qn(document.body), x.value = !0;
    }, Q = () => {
      if (c(i))
        return !0;
    }, se = Jn(Q, () => {
      n.enterable && c(d) === "hover" && h();
    }), he = Jn(Q, () => {
      c(d) === "hover" && m();
    }), le = () => {
      var W, pe;
      (pe = (W = a.value) == null ? void 0 : W.updatePopper) == null || pe.call(W), b?.();
    }, ye = () => {
      L?.();
    }, be = () => {
      y(), s = q1(N(() => {
        var W;
        return (W = a.value) == null ? void 0 : W.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && m();
      });
    }, V = () => {
      n.virtualTriggering || m();
    }, ee = (W) => {
      var pe;
      const Y = (pe = a.value) == null ? void 0 : pe.popperContentRef, G = W?.relatedTarget || document.activeElement;
      return Y?.contains(G);
    };
    return Ae(() => c(u), (W) => {
      W ? x.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ae(() => n.content, () => {
      var W, pe;
      (pe = (W = a.value) == null ? void 0 : W.updatePopper) == null || pe.call(W);
    }), t({
      contentRef: a,
      isFocusInsideContent: ee
    }), (W, pe) => (R(), me(c(Dk), {
      disabled: !W.teleported,
      to: c(w)
    }, {
      default: fe(() => [
        F(So, {
          name: c(p),
          onAfterLeave: Z,
          onBeforeEnter: le,
          onAfterEnter: be,
          onBeforeLeave: ye
        }, {
          default: fe(() => [
            c(P) ? bt((R(), me(c(bk), fo({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, W.$attrs, {
              "aria-label": W.ariaLabel,
              "aria-hidden": x.value,
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
              "popper-style": [W.popperStyle, c(E)],
              "reference-el": W.referenceEl,
              "trigger-target-el": W.triggerTargetEl,
              visible: c(I),
              "z-index": W.zIndex,
              onMouseenter: c(se),
              onMouseleave: c(he),
              onBlur: V,
              onClose: c(m)
            }), {
              default: fe(() => [
                Ee(W.$slots, "default")
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
var Uk = /* @__PURE__ */ tt(Vk, [["__file", "content.vue"]]);
const jk = ce({
  name: "ElTooltip"
}), Hk = /* @__PURE__ */ ce({
  ...jk,
  props: Ik,
  emits: Lk,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    zk();
    const o = ns(), a = K(), s = K(), i = () => {
      var p;
      const C = c(a);
      C && ((p = C.popperInstanceRef) == null || p.update());
    }, l = K(!1), u = K(), { show: d, hide: m, hasUpdateHandler: h } = Ck({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: v } = wk({
      showAfter: er(r, "showAfter"),
      hideAfter: er(r, "hideAfter"),
      autoClose: er(r, "autoClose"),
      open: d,
      close: m
    }), b = N(() => kr(r.visible) && !h.value);
    Bn(ql, {
      controlled: b,
      id: o,
      open: tl(l),
      trigger: er(r, "trigger"),
      onOpen: (p) => {
        y(p);
      },
      onClose: (p) => {
        v(p);
      },
      onToggle: (p) => {
        c(l) ? v(p) : y(p);
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
    }), Ae(() => r.disabled, (p) => {
      p && l.value && (l.value = !1);
    });
    const L = (p) => {
      var C;
      return (C = s.value) == null ? void 0 : C.isFocusInsideContent(p);
    };
    return np(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: L,
      updatePopper: i,
      onOpen: y,
      onClose: v,
      hide: m
    }), (p, C) => (R(), me(c(yk), {
      ref_key: "popperRef",
      ref: a,
      role: p.role
    }, {
      default: fe(() => [
        F(Nk, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: fe(() => [
            p.$slots.default ? Ee(p.$slots, "default", { key: 0 }) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        F(Uk, {
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
            Ee(p.$slots, "content", {}, () => [
              p.rawContent ? (R(), j("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, ["innerHTML"])) : (R(), j("span", { key: 1 }, M(p.content), 1))
            ]),
            p.showArrow ? (R(), me(c(N_), {
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
var Wk = /* @__PURE__ */ tt(Hk, [["__file", "tooltip.vue"]]);
const Gk = An(Wk), Kk = Xe({
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
}), qk = ce({
  name: "ElBadge"
}), Yk = /* @__PURE__ */ ce({
  ...qk,
  props: Kk,
  setup(e, { expose: t }) {
    const n = e, r = St("badge"), o = N(() => n.isDot ? "" : ze(n.value) && ze(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = N(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: go(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: go((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (R(), j("div", {
      class: q(c(r).b())
    }, [
      Ee(s.$slots, "default"),
      F(So, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: fe(() => [
          bt(g("sup", {
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
            Ee(s.$slots, "content", { value: c(o) }, () => [
              an(M(c(o)), 1)
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
var Zk = /* @__PURE__ */ tt(Yk, [["__file", "badge.vue"]]);
const Xk = An(Zk), Qk = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Js = Xe({
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
    values: xl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Jk = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, eS = ce({
  name: "ElTag"
}), tS = /* @__PURE__ */ ce({
  ...eS,
  props: Js,
  emits: Jk,
  setup(e, { emit: t }) {
    const n = e, r = na(), o = St("tag"), a = N(() => {
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
    return (u, d) => u.disableTransitions ? (R(), j("span", {
      key: 0,
      class: q(c(a)),
      style: Nt({ backgroundColor: u.color }),
      onClick: i
    }, [
      g("span", {
        class: q(c(o).e("content"))
      }, [
        Ee(u.$slots, "default")
      ], 2),
      u.closable ? (R(), me(c(_t), {
        key: 0,
        class: q(c(o).e("close")),
        onClick: et(s, ["stop"])
      }, {
        default: fe(() => [
          F(c(Da))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ne("v-if", !0)
    ], 6)) : (R(), me(So, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: fe(() => [
        g("span", {
          class: q(c(a)),
          style: Nt({ backgroundColor: u.color }),
          onClick: i
        }, [
          g("span", {
            class: q(c(o).e("content"))
          }, [
            Ee(u.$slots, "default")
          ], 2),
          u.closable ? (R(), me(c(_t), {
            key: 0,
            class: q(c(o).e("close")),
            onClick: et(s, ["stop"])
          }, {
            default: fe(() => [
              F(c(Da))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var nS = /* @__PURE__ */ tt(tS, [["__file", "tag.vue"]]);
const rS = An(nS), vr = /* @__PURE__ */ new Map();
if (wt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of vr.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function vu(e, t) {
  let n = [];
  return Pn(t.arg) ? n = t.arg : Sn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), m = e === s, h = n.length && n.some((v) => v?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || d || m || h || y || t.value(r, o);
  };
}
const oS = {
  beforeMount(e, t) {
    vr.has(e) || vr.set(e, []), vr.get(e).push({
      documentHandler: vu(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    vr.has(e) || vr.set(e, []);
    const n = vr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: vu(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    vr.delete(e);
  }
}, aS = Xe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ke(Object)
  },
  size: ts,
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
  ...jd
}), vn = {};
ce({
  name: "ElConfigProvider",
  props: aS,
  setup(e, { slots: t }) {
    Ae(() => e.message, (r) => {
      Object.assign(vn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Gd(e);
    return () => Ee(t, "default", { config: n?.value });
  }
});
const sS = 100, lS = 600, bu = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = sS, delay: o = lS } = at(n) ? {} : n;
    let a, s;
    const i = () => at(n) ? n() : n.handler(), l = () => {
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
}, iS = Xe({
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
}), cS = {
  [cr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [lr]: (e) => ze(e) || sr(e),
  [Ot]: (e) => ze(e) || sr(e)
}, uS = ce({
  name: "ElInputNumber"
}), dS = /* @__PURE__ */ ce({
  ...uS,
  props: iS,
  emits: cS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Ol(), a = St("input-number"), s = K(), i = zr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = rs(), u = N(() => ze(r.modelValue) && r.modelValue <= r.min), d = N(() => ze(r.modelValue) && r.modelValue >= r.max), m = N(() => {
      const V = p(r.step);
      return $n(r.precision) ? Math.max(p(r.modelValue), V) : (V > r.precision, r.precision);
    }), h = N(() => r.controls && r.controlsPosition === "right"), y = na(), v = $l(), b = N(() => {
      if (i.userInput !== null)
        return i.userInput;
      let V = i.currentValue;
      if (sr(V))
        return "";
      if (ze(V)) {
        if (Number.isNaN(V))
          return "";
        $n(r.precision) || (V = V.toFixed(r.precision));
      }
      return V;
    }), L = (V, ee) => {
      if ($n(ee) && (ee = m.value), ee === 0)
        return Math.round(V);
      let W = String(V);
      const pe = W.indexOf(".");
      if (pe === -1 || !W.replace(".", "").split("")[pe + ee])
        return V;
      const De = W.length;
      return W.charAt(De - 1) === "5" && (W = `${W.slice(0, Math.max(0, De - 1))}6`), Number.parseFloat(Number(W).toFixed(ee));
    }, p = (V) => {
      if (sr(V))
        return 0;
      const ee = V.toString(), W = ee.indexOf(".");
      let pe = 0;
      return W !== -1 && (pe = ee.length - W - 1), pe;
    }, C = (V, ee = 1) => ze(V) ? L(V + r.step * ee) : i.currentValue, P = () => {
      if (r.readonly || v.value || d.value)
        return;
      const V = Number(b.value) || 0, ee = C(V);
      E(ee), n(lr, i.currentValue), ye();
    }, I = () => {
      if (r.readonly || v.value || u.value)
        return;
      const V = Number(b.value) || 0, ee = C(V, -1);
      E(ee), n(lr, i.currentValue), ye();
    }, w = (V, ee) => {
      const { max: W, min: pe, step: Y, precision: G, stepStrictly: De, valueOnClear: Be } = r;
      W < pe && Ll("InputNumber", "min should not be greater than max.");
      let ge = Number(V);
      if (sr(V) || Number.isNaN(ge))
        return null;
      if (V === "") {
        if (Be === null)
          return null;
        ge = Bt(Be) ? { min: pe, max: W }[Be] : Be;
      }
      return De && (ge = L(Math.round(ge / Y) * Y, G), ge !== V && ee && n(Ot, ge)), $n(G) || (ge = L(ge, G)), (ge > W || ge < pe) && (ge = ge > W ? W : pe, ee && n(Ot, ge)), ge;
    }, E = (V, ee = !0) => {
      var W;
      const pe = i.currentValue, Y = w(V);
      if (!ee) {
        n(Ot, Y);
        return;
      }
      pe === Y && V || (i.userInput = null, n(Ot, Y), pe !== Y && n(cr, Y, pe), r.validateEvent && ((W = l?.validate) == null || W.call(l, "change").catch((G) => void 0)), i.currentValue = Y);
    }, x = (V) => {
      i.userInput = V;
      const ee = V === "" ? null : Number(V);
      n(lr, ee), E(ee, !1);
    }, Z = (V) => {
      const ee = V !== "" ? Number(V) : "";
      (ze(ee) && !Number.isNaN(ee) || V === "") && E(ee), ye(), i.userInput = null;
    }, Q = () => {
      var V, ee;
      (ee = (V = s.value) == null ? void 0 : V.focus) == null || ee.call(V);
    }, se = () => {
      var V, ee;
      (ee = (V = s.value) == null ? void 0 : V.blur) == null || ee.call(V);
    }, he = (V) => {
      n("focus", V);
    }, le = (V) => {
      var ee, W;
      i.userInput = null, Qd() && i.currentValue === null && ((ee = s.value) != null && ee.input) && (s.value.input.value = ""), n("blur", V), r.validateEvent && ((W = l?.validate) == null || W.call(l, "blur").catch((pe) => void 0));
    }, ye = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, be = (V) => {
      document.activeElement === V.target && V.preventDefault();
    };
    return Ae(() => r.modelValue, (V, ee) => {
      const W = w(V, !0);
      i.userInput === null && W !== ee && (i.currentValue = W);
    }, { immediate: !0 }), yt(() => {
      var V;
      const { min: ee, max: W, modelValue: pe } = r, Y = (V = s.value) == null ? void 0 : V.input;
      if (Y.setAttribute("role", "spinbutton"), Number.isFinite(W) ? Y.setAttribute("aria-valuemax", String(W)) : Y.removeAttribute("aria-valuemax"), Number.isFinite(ee) ? Y.setAttribute("aria-valuemin", String(ee)) : Y.removeAttribute("aria-valuemin"), Y.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), Y.setAttribute("aria-disabled", String(v.value)), !ze(pe) && pe != null) {
        let G = Number(pe);
        Number.isNaN(G) && (G = null), n(Ot, G);
      }
      Y.addEventListener("wheel", be, { passive: !1 });
    }), Eu(() => {
      var V, ee;
      const W = (V = s.value) == null ? void 0 : V.input;
      W?.setAttribute("aria-valuenow", `${(ee = i.currentValue) != null ? ee : ""}`);
    }), t({
      focus: Q,
      blur: se
    }), (V, ee) => (R(), j("div", {
      class: q([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(v)),
        c(a).is("without-controls", !V.controls),
        c(a).is("controls-right", c(h))
      ]),
      onDragstart: et(() => {
      }, ["prevent"])
    }, [
      V.controls ? bt((R(), j("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: _n(I, ["enter"])
      }, [
        Ee(V.$slots, "decrease-icon", {}, () => [
          F(c(_t), null, {
            default: fe(() => [
              c(h) ? (R(), me(c(Yd), { key: 0 })) : (R(), me(c(Fy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(bu), I]
      ]) : ne("v-if", !0),
      V.controls ? bt((R(), j("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: _n(P, ["enter"])
      }, [
        Ee(V.$slots, "increase-icon", {}, () => [
          F(c(_t), null, {
            default: fe(() => [
              c(h) ? (R(), me(c(Ey), { key: 0 })) : (R(), me(c(By), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(bu), P]
      ]) : ne("v-if", !0),
      F(c(d_), {
        id: V.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: V.step,
        "model-value": c(b),
        placeholder: V.placeholder,
        readonly: V.readonly,
        disabled: c(v),
        size: c(y),
        max: V.max,
        min: V.min,
        name: V.name,
        "aria-label": V.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          _n(et(P, ["prevent"]), ["up"]),
          _n(et(I, ["prevent"]), ["down"])
        ],
        onBlur: le,
        onFocus: he,
        onInput: x,
        onChange: Z
      }, rp({
        _: 2
      }, [
        V.$slots.prefix ? {
          name: "prefix",
          fn: fe(() => [
            Ee(V.$slots, "prefix")
          ])
        } : void 0,
        V.$slots.suffix ? {
          name: "suffix",
          fn: fe(() => [
            Ee(V.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var fS = /* @__PURE__ */ tt(dS, [["__file", "input-number.vue"]]);
const pS = An(fS);
function mS() {
  const e = wr(), t = K(0), n = 11, r = N(() => ({
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
const Cf = Symbol("ElSelectGroup"), ls = Symbol("ElSelect");
function hS(e, t) {
  const n = je(ls), r = je(Cf, { disabled: !1 }), o = N(() => d(yr(n.props.modelValue), e.value)), a = N(() => {
    var y;
    if (n.props.multiple) {
      const v = yr((y = n.props.modelValue) != null ? y : []);
      return !o.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = N(() => e.label || (sn(e.value) ? "" : e.value)), i = N(() => e.value || e.label || ""), l = N(() => e.disabled || t.groupDisabled || a.value), u = Gt(), d = (y = [], v) => {
    if (sn(e.value)) {
      const b = n.props.valueKey;
      return y && y.some((L) => op(_r(L, b)) === _r(v, b));
    } else
      return y && y.includes(v);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, h = (y) => {
    const v = new RegExp(Qk(y), "i");
    t.visible = v.test(s.value) || e.created;
  };
  return Ae(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ae(() => e.value, (y, v) => {
    const { remote: b, valueKey: L } = n.props;
    if ((b ? y !== v : !Bo(y, v)) && (n.onOptionDestroy(v, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (L && sn(y) && sn(v) && y[L] === v[L])
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
    hoverItem: m,
    updateOption: h
  };
}
const gS = ce({
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
    const t = St("select"), n = ns(), r = N(() => [
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
      updateOption: d
    } = hS(e, o), { visible: m, hover: h } = nl(o), y = Gt().proxy;
    l.onOptionCreate(y), jn(() => {
      const b = y.value, { selected: L } = l.states, p = L.some((C) => C.value === y.value);
      ht(() => {
        l.states.cachedOptions.get(b) === y && !p && l.states.cachedOptions.delete(b);
      }), l.onOptionDestroy(b, y);
    });
    function v() {
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
      selectOptionClick: v,
      states: o
    };
  }
});
function vS(e, t, n, r, o, a) {
  return bt((R(), j("li", {
    id: e.id,
    class: q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: et(e.selectOptionClick, ["stop"])
  }, [
    Ee(e.$slots, "default", {}, () => [
      g("span", null, M(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [ir, e.visible]
  ]);
}
var Zl = /* @__PURE__ */ tt(gS, [["render", vS], ["__file", "option.vue"]]);
const bS = ce({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = je(ls), t = St("select"), n = N(() => e.props.popperClass), r = N(() => e.props.multiple), o = N(() => e.props.fitInputWidth), a = K("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return yt(() => {
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
function yS(e, t, n, r, o, a) {
  return R(), j("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Nt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), j("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      Ee(e.$slots, "header")
    ], 2)) : ne("v-if", !0),
    Ee(e.$slots, "default"),
    e.$slots.footer ? (R(), j("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      Ee(e.$slots, "footer")
    ], 2)) : ne("v-if", !0)
  ], 6);
}
var _S = /* @__PURE__ */ tt(bS, [["render", yS], ["__file", "select-dropdown.vue"]]);
const wS = (e, t) => {
  const { t: n } = Ol(), r = ns(), o = St("select"), a = St("input"), s = zr({
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
  }), i = K(null), l = K(null), u = K(null), d = K(null), m = K(null), h = K(null), y = K(null), v = K(null), b = K(null), L = K(null), p = K(null), {
    isComposing: C,
    handleCompositionStart: P,
    handleCompositionUpdate: I,
    handleCompositionEnd: w
  } = rf({
    afterComposition: ($) => qe($)
  }), { wrapperRef: E, isFocused: x, handleBlur: Z } = nf(m, {
    beforeFocus() {
      return ee.value;
    },
    afterFocus() {
      e.automaticDropdown && !Q.value && (Q.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur($) {
      var te, Te;
      return ((te = u.value) == null ? void 0 : te.isFocusInsideContent($)) || ((Te = d.value) == null ? void 0 : Te.isFocusInsideContent($));
    },
    afterBlur() {
      Q.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Q = K(!1), se = K(), { form: he, formItem: le } = rs(), { inputId: ye } = Pl(e, {
    formItemContext: le
  }), { valueOnClear: be, isEmptyValue: V } = gy(e), ee = N(() => e.disabled || he?.disabled), W = N(() => Pn(e.modelValue) ? e.modelValue.length > 0 : !V(e.modelValue)), pe = N(() => {
    var $;
    return ($ = he?.statusIcon) != null ? $ : !1;
  }), Y = N(() => e.clearable && !ee.value && s.inputHovering && W.value), G = N(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = N(() => o.is("reverse", G.value && Q.value)), Be = N(() => le?.validateState || ""), ge = N(() => Xd[Be.value]), _e = N(() => e.remote ? 300 : 0), J = N(() => e.remote && !s.inputValue && s.options.size === 0), Ce = N(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Qe.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Qe = N(() => oe.value.filter(($) => $.visible).length), oe = N(() => {
    const $ = Array.from(s.options.values()), te = [];
    return s.optionValues.forEach((Te) => {
      const Je = $.findIndex((ft) => ft.value === Te);
      Je > -1 && te.push($[Je]);
    }), te.length >= $.length ? te : $;
  }), st = N(() => Array.from(s.cachedOptions.values())), ut = N(() => {
    const $ = oe.value.filter((te) => !te.created).some((te) => te.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !$;
  }), Ge = () => {
    e.filterable && at(e.filterMethod) || e.filterable && e.remote && at(e.remoteMethod) || oe.value.forEach(($) => {
      var te;
      (te = $.updateOption) == null || te.call($, s.inputValue);
    });
  }, At = na(), dt = N(() => ["small"].includes(At.value) ? "small" : "default"), Ct = N({
    get() {
      return Q.value && !J.value;
    },
    set($) {
      Q.value = $;
    }
  }), lt = N(() => {
    if (e.multiple && !$n(e.modelValue))
      return yr(e.modelValue).length === 0 && !s.inputValue;
    const $ = Pn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $n($) ? !s.inputValue : !0;
  }), nt = N(() => {
    var $;
    const te = ($ = e.placeholder) != null ? $ : n("el.select.placeholder");
    return e.multiple || !W.value ? te : s.selectedLabel;
  }), Tt = N(() => Ys ? null : "mouseenter");
  Ae(() => e.modelValue, ($, te) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", T("")), U(), !Bo($, te) && e.validateEvent && le?.validate("change").catch((Te) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ae(() => Q.value, ($) => {
    $ ? T(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", $);
  }), Ae(() => s.options.entries(), () => {
    wt && (U(), e.defaultFirstOption && (e.filterable || e.remote) && Qe.value && O());
  }, {
    flush: "post"
  }), Ae([() => s.hoveringIndex, oe], ([$]) => {
    ze($) && $ > -1 ? se.value = oe.value[$] || {} : se.value = {}, oe.value.forEach((te) => {
      te.hover = se.value === te;
    });
  }), Tu(() => {
    s.isBeforeHide || Ge();
  });
  const T = ($) => {
    s.previousQuery === $ || C.value || (s.previousQuery = $, e.filterable && at(e.filterMethod) ? e.filterMethod($) : e.filterable && e.remote && at(e.remoteMethod) && e.remoteMethod($), e.defaultFirstOption && (e.filterable || e.remote) && Qe.value ? ht(O) : ht(Le));
  }, O = () => {
    const $ = oe.value.filter((ft) => ft.visible && !ft.disabled && !ft.states.groupDisabled), te = $.find((ft) => ft.created), Te = $[0], Je = oe.value.map((ft) => ft.value);
    s.hoveringIndex = Gn(Je, te || Te);
  }, U = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const te = Pn(e.modelValue) ? e.modelValue[0] : e.modelValue, Te = re(te);
      s.selectedLabel = Te.currentLabel, s.selected = [Te];
      return;
    }
    const $ = [];
    $n(e.modelValue) || yr(e.modelValue).forEach((te) => {
      $.push(re(te));
    }), s.selected = $;
  }, re = ($) => {
    let te;
    const Te = Wg($);
    for (let Xt = s.cachedOptions.size - 1; Xt >= 0; Xt--) {
      const Ut = st.value[Xt];
      if (Te ? _r(Ut.value, e.valueKey) === _r($, e.valueKey) : Ut.value === $) {
        te = {
          value: $,
          currentLabel: Ut.currentLabel,
          get isDisabled() {
            return Ut.isDisabled;
          }
        };
        break;
      }
    }
    if (te)
      return te;
    const Je = Te ? $.label : $ ?? "";
    return {
      value: $,
      currentLabel: Je
    };
  }, Le = () => {
    s.hoveringIndex = oe.value.findIndex(($) => s.selected.some((te) => Ve(te) === Ve($)));
  }, ve = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, A = () => {
    s.collapseItemWidth = L.value.getBoundingClientRect().width;
  }, z = () => {
    var $, te;
    (te = ($ = u.value) == null ? void 0 : $.updatePopper) == null || te.call($);
  }, Se = () => {
    var $, te;
    (te = ($ = d.value) == null ? void 0 : $.updatePopper) == null || te.call($);
  }, Re = () => {
    s.inputValue.length > 0 && !Q.value && (Q.value = !0), T(s.inputValue);
  }, qe = ($) => {
    if (s.inputValue = $.target.value, e.remote)
      $t();
    else
      return Re();
  }, $t = L1(() => {
    Re();
  }, _e.value), Ye = ($) => {
    Bo(e.modelValue, $) || t(cr, $);
  }, qt = ($) => O1($, (te) => {
    const Te = s.cachedOptions.get(te);
    return Te && !Te.disabled && !Te.states.groupDisabled;
  }), pr = ($) => {
    if (e.multiple && $.code !== Fn.delete && $.target.value.length <= 0) {
      const te = yr(e.modelValue).slice(), Te = qt(te);
      if (Te < 0)
        return;
      const Je = te[Te];
      te.splice(Te, 1), t(Ot, te), Ye(te), t("remove-tag", Je);
    }
  }, qr = ($, te) => {
    const Te = s.selected.indexOf(te);
    if (Te > -1 && !ee.value) {
      const Je = yr(e.modelValue).slice();
      Je.splice(Te, 1), t(Ot, Je), Ye(Je), t("remove-tag", te.value);
    }
    $.stopPropagation(), mr();
  }, Wn = ($) => {
    $.stopPropagation();
    const te = e.multiple ? [] : be.value;
    if (e.multiple)
      for (const Te of s.selected)
        Te.isDisabled && te.push(Te.value);
    t(Ot, te), Ye(te), s.hoveringIndex = -1, Q.value = !1, t("clear"), mr();
  }, Cr = ($) => {
    var te;
    if (e.multiple) {
      const Te = yr((te = e.modelValue) != null ? te : []).slice(), Je = Gn(Te, $);
      Je > -1 ? Te.splice(Je, 1) : (e.multipleLimit <= 0 || Te.length < e.multipleLimit) && Te.push($.value), t(Ot, Te), Ye(Te), $.created && T(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ot, $.value), Ye($.value), Q.value = !1;
    mr(), !Q.value && ht(() => {
      Yt($);
    });
  }, Gn = ($ = [], te) => $n(te) ? -1 : sn(te.value) ? $.findIndex((Te) => Bo(_r(Te, e.valueKey), Ve(te))) : $.indexOf(te.value), Yt = ($) => {
    var te, Te, Je, ft, Xt;
    const Ut = Pn($) ? $[0] : $;
    let Mt = null;
    if (Ut?.value) {
      const Cn = oe.value.filter((Pr) => Pr.value === Ut.value);
      Cn.length > 0 && (Mt = Cn[0].$el);
    }
    if (u.value && Mt) {
      const Cn = (ft = (Je = (Te = (te = u.value) == null ? void 0 : te.popperRef) == null ? void 0 : Te.contentRef) == null ? void 0 : Je.querySelector) == null ? void 0 : ft.call(Je, `.${o.be("dropdown", "wrap")}`);
      Cn && by(Cn, Mt);
    }
    (Xt = p.value) == null || Xt.handleScroll();
  }, Zt = ($) => {
    s.options.set($.value, $), s.cachedOptions.set($.value, $);
  }, cn = ($, te) => {
    s.options.get($) === te && s.options.delete($);
  }, Ir = N(() => {
    var $, te;
    return (te = ($ = u.value) == null ? void 0 : $.popperRef) == null ? void 0 : te.contentRef;
  }), Lr = () => {
    s.isBeforeHide = !1, ht(() => {
      var $;
      ($ = p.value) == null || $.update(), Yt(s.selected);
    });
  }, mr = () => {
    var $;
    ($ = m.value) == null || $.focus();
  }, Or = () => {
    var $;
    if (Q.value) {
      Q.value = !1, ht(() => {
        var te;
        return (te = m.value) == null ? void 0 : te.blur();
      });
      return;
    }
    ($ = m.value) == null || $.blur();
  }, xr = ($) => {
    Wn($);
  }, Eo = ($) => {
    if (Q.value = !1, x.value) {
      const te = new FocusEvent("focus", $);
      ht(() => Z(te));
    }
  }, Kn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Q.value = !1;
  }, Yr = () => {
    ee.value || (Ys && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Q.value = !Q.value);
  }, Zr = () => {
    if (!Q.value)
      Yr();
    else {
      const $ = oe.value[s.hoveringIndex];
      $ && !$.isDisabled && Cr($);
    }
  }, Ve = ($) => sn($.value) ? _r($.value, e.valueKey) : $.value, hn = N(() => oe.value.filter(($) => $.visible).every(($) => $.isDisabled)), Rr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Xr = N(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), qn = ($) => {
    if (!Q.value) {
      Q.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Qe.value === 0 || C.value) && !hn.value) {
      $ === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : $ === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const te = oe.value[s.hoveringIndex];
      (te.isDisabled || !te.visible) && qn($), ht(() => Yt(se.value));
    }
  }, Qr = () => {
    if (!l.value)
      return 0;
    const $ = window.getComputedStyle(l.value);
    return Number.parseFloat($.gap || "6px");
  }, Jr = N(() => {
    const $ = Qr();
    return { maxWidth: `${L.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - $ : s.selectionWidth}px` };
  }), Nr = N(() => ({ maxWidth: `${s.selectionWidth}px` })), Vt = ($) => {
    t("popup-scroll", $);
  };
  return Nn(l, ve), Nn(v, z), Nn(E, z), Nn(b, Se), Nn(L, A), yt(() => {
    U();
  }), {
    inputId: ye,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: x,
    expanded: Q,
    optionsArray: oe,
    hoverOption: se,
    selectSize: At,
    filteredOptionsCount: Qe,
    updateTooltip: z,
    updateTagTooltip: Se,
    debouncedOnInputChange: $t,
    onInput: qe,
    deletePrevTag: pr,
    deleteTag: qr,
    deleteSelected: Wn,
    handleOptionSelect: Cr,
    scrollToOption: Yt,
    hasModelValue: W,
    shouldShowPlaceholder: lt,
    currentPlaceholder: nt,
    mouseEnterEventName: Tt,
    needStatusIcon: pe,
    showClose: Y,
    iconComponent: G,
    iconReverse: De,
    validateState: Be,
    validateIcon: ge,
    showNewOption: ut,
    updateOptions: Ge,
    collapseTagSize: dt,
    setSelected: U,
    selectDisabled: ee,
    emptyText: Ce,
    handleCompositionStart: P,
    handleCompositionUpdate: I,
    handleCompositionEnd: w,
    onOptionCreate: Zt,
    onOptionDestroy: cn,
    handleMenuEnter: Lr,
    focus: mr,
    blur: Or,
    handleClearClick: xr,
    handleClickOutside: Eo,
    handleEsc: Kn,
    toggleMenu: Yr,
    selectOption: Zr,
    getValueKey: Ve,
    navigateOptions: qn,
    dropdownMenuVisible: Ct,
    showTagList: Rr,
    collapseTagList: Xr,
    popupScroll: Vt,
    tagStyle: Jr,
    collapseTagStyle: Nr,
    popperRef: Ir,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: h,
    suffixRef: y,
    selectRef: i,
    wrapperRef: E,
    selectionRef: l,
    scrollbarRef: p,
    menuRef: v,
    tagMenuRef: b,
    collapseItemRef: L
  };
};
var kS = ce({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = je(ls);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Pn(u) && u.forEach((d) => {
          var m, h, y, v;
          const b = (m = d?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? l(!Bt(d.children) && !Pn(d.children) && at((h = d.children) == null ? void 0 : h.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : b === "ElOption" ? i.push((v = d.props) == null ? void 0 : v.value) : Pn(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), Bo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const SS = Xe({
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
  teleported: Yl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mn,
    default: Rl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mn,
    default: Yd
  },
  tagType: { ...Js.type, default: "info" },
  tagEffect: { ...Js.effect, default: "light" },
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
    values: as,
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
  ...jd,
  ...Kr(["ariaLabel"])
}), yu = "ElSelect", TS = ce({
  name: yu,
  componentName: yu,
  components: {
    ElSelectMenu: _S,
    ElOption: Zl,
    ElOptions: kS,
    ElTag: rS,
    ElScrollbar: A_,
    ElTooltip: Gk,
    ElIcon: _t
  },
  directives: { ClickOutside: oS },
  props: SS,
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
    const n = N(() => {
      const { modelValue: l, multiple: u } = e, d = u ? [] : void 0;
      return Pn(l) ? u ? l : d : u ? d : l;
    }), r = zr({
      ...nl(e),
      modelValue: n
    }), o = wS(r, t), { calculatorRef: a, inputStyle: s } = mS();
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
function ES(e, t, n, r, o, a) {
  const s = $r("el-tag"), i = $r("el-tooltip"), l = $r("el-icon"), u = $r("el-option"), d = $r("el-options"), m = $r("el-scrollbar"), h = $r("el-select-menu"), y = ap("click-outside");
  return bt((R(), j("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [sp(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
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
      onHide: (v) => e.states.isBeforeHide = !1
    }, {
      default: fe(() => {
        var v;
        return [
          g("div", {
            ref: "wrapperRef",
            class: q([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: et(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), j("div", {
              key: 0,
              ref: "prefixRef",
              class: q(e.nsSelect.e("prefix"))
            }, [
              Ee(e.$slots, "prefix")
            ], 2)) : ne("v-if", !0),
            g("div", {
              ref: "selectionRef",
              class: q([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Ee(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), j(ct, null, Rn(e.showTagList, (b) => (R(), j("div", {
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
                      g("span", {
                        class: q(e.nsSelect.e("tags-text"))
                      }, [
                        Ee(e.$slots, "label", {
                          label: b.currentLabel,
                          value: b.value
                        }, () => [
                          an(M(b.currentLabel), 1)
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
                    g("div", {
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
                          g("span", {
                            class: q(e.nsSelect.e("tags-text"))
                          }, " + " + M(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: fe(() => [
                    g("div", {
                      ref: "tagMenuRef",
                      class: q(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), j(ct, null, Rn(e.collapseTagList, (b) => (R(), j("div", {
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
                            g("span", {
                              class: q(e.nsSelect.e("tags-text"))
                            }, [
                              Ee(e.$slots, "label", {
                                label: b.currentLabel,
                                value: b.value
                              }, () => [
                                an(M(b.currentLabel), 1)
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
                class: q([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                bt(g("input", {
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
                  "aria-activedescendant": ((v = e.hoverOption) == null ? void 0 : v.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    _n(et((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    _n(et((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    _n(et(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    _n(et(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    _n(et(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: et(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Dr, e.states.inputValue]
                ]),
                e.filterable ? (R(), j("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: M(e.states.inputValue)
                }, null, 10, ["textContent"])) : ne("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), j("div", {
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
                  g("span", null, M(e.currentPlaceholder), 1)
                ]) : (R(), j("span", { key: 1 }, M(e.currentPlaceholder), 1))
              ], 2)) : ne("v-if", !0)
            ], 2),
            g("div", {
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
              }, 8, ["class"])) : ne("v-if", !0),
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
              }, 8, ["class", "onClick"])) : ne("v-if", !0),
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
              }, 8, ["class"])) : ne("v-if", !0)
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
              onClick: et(() => {
              }, ["stop"])
            }, [
              Ee(e.$slots, "header")
            ], 10, ["onClick"])) : ne("v-if", !0),
            bt(F(m, {
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
                }, null, 8, ["value"])) : ne("v-if", !0),
                F(d, null, {
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
            e.$slots.loading && e.loading ? (R(), j("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              Ee(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), j("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              Ee(e.$slots, "empty", {}, () => [
                g("span", null, M(e.emptyText), 1)
              ])
            ], 2)) : ne("v-if", !0),
            e.$slots.footer ? (R(), j("div", {
              key: 3,
              class: q(e.nsSelect.be("dropdown", "footer")),
              onClick: et(() => {
              }, ["stop"])
            }, [
              Ee(e.$slots, "footer")
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
var AS = /* @__PURE__ */ tt(TS, [["render", ES], ["__file", "select.vue"]]);
const CS = ce({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = St("select"), n = K(null), r = Gt(), o = K([]);
    Bn(Cf, zr({
      ...nl(e)
    }));
    const a = N(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = yr(u), m = [];
      return d.forEach((h) => {
        var y, v;
        s(h) ? m.push(h.component.proxy) : (y = h.children) != null && y.length ? m.push(...i(h.children)) : (v = h.component) != null && v.subTree && m.push(...i(h.component.subTree));
      }), m;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return yt(() => {
      l();
    }), ty(n, l, {
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
function IS(e, t, n, r, o, a) {
  return bt((R(), j("ul", {
    ref: "groupRef",
    class: q(e.ns.be("group", "wrap"))
  }, [
    g("li", {
      class: q(e.ns.be("group", "title"))
    }, M(e.label), 3),
    g("li", null, [
      g("ul", {
        class: q(e.ns.b("group"))
      }, [
        Ee(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ir, e.visible]
  ]);
}
var If = /* @__PURE__ */ tt(CS, [["render", IS], ["__file", "option-group.vue"]]);
const LS = An(AS, {
  Option: Zl,
  OptionGroup: If
}), OS = qd(Zl);
qd(If);
const xS = (e) => ["", ...xl].includes(e), RS = Xe({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: xS
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
    type: ke(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Kr(["ariaLabel"])
}), NS = {
  [Ot]: (e) => kr(e) || Bt(e) || ze(e),
  [cr]: (e) => kr(e) || Bt(e) || ze(e),
  [lr]: (e) => kr(e) || Bt(e) || ze(e)
}, Lf = "ElSwitch", PS = ce({
  name: Lf
}), $S = /* @__PURE__ */ ce({
  ...PS,
  props: RS,
  emits: NS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = rs(), a = na(), s = St("switch"), { inputId: i } = Pl(r, {
      formItemContext: o
    }), l = $l(N(() => r.loading)), u = K(r.modelValue !== !1), d = K(), m = K(), h = N(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
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
      width: go(r.width)
    }));
    Ae(() => r.modelValue, () => {
      u.value = !0;
    });
    const L = N(() => u.value ? r.modelValue : !1), p = N(() => L.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(L.value) || (n(Ot, r.inactiveValue), n(cr, r.inactiveValue), n(lr, r.inactiveValue)), Ae(p, (w) => {
      var E;
      d.value.checked = w, r.validateEvent && ((E = o?.validate) == null || E.call(o, "change").catch((x) => void 0));
    });
    const C = () => {
      const w = p.value ? r.inactiveValue : r.activeValue;
      n(Ot, w), n(cr, w), n(lr, w), ht(() => {
        d.value.checked = p.value;
      });
    }, P = () => {
      if (l.value)
        return;
      const { beforeChange: w } = r;
      if (!w) {
        C();
        return;
      }
      const E = w();
      [
        ic(E),
        kr(E)
      ].includes(!0) || Ll(Lf, "beforeChange must return type `Promise<boolean>` or `boolean`"), ic(E) ? E.then((Z) => {
        Z && C();
      }).catch((Z) => {
      }) : E && C();
    }, I = () => {
      var w, E;
      (E = (w = d.value) == null ? void 0 : w.focus) == null || E.call(w);
    };
    return yt(() => {
      d.value.checked = p.value;
    }), t({
      focus: I,
      checked: p
    }), (w, E) => (R(), j("div", {
      class: q(c(h)),
      onClick: et(P, ["prevent"])
    }, [
      g("input", {
        id: c(i),
        ref_key: "input",
        ref: d,
        class: q(c(s).e("input")),
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
        onChange: C,
        onKeydown: _n(P, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !w.inlinePrompt && (w.inactiveIcon || w.inactiveText) ? (R(), j("span", {
        key: 0,
        class: q(c(y))
      }, [
        w.inactiveIcon ? (R(), me(c(_t), { key: 0 }, {
          default: fe(() => [
            (R(), me(Ht(w.inactiveIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !w.inactiveIcon && w.inactiveText ? (R(), j("span", {
          key: 1,
          "aria-hidden": c(p)
        }, M(w.inactiveText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0),
      g("span", {
        ref_key: "core",
        ref: m,
        class: q(c(s).e("core")),
        style: Nt(c(b))
      }, [
        w.inlinePrompt ? (R(), j("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          w.activeIcon || w.inactiveIcon ? (R(), me(c(_t), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: fe(() => [
              (R(), me(Ht(c(p) ? w.activeIcon : w.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : w.activeText || w.inactiveText ? (R(), j("span", {
            key: 1,
            class: q(c(s).is("text")),
            "aria-hidden": !c(p)
          }, M(c(p) ? w.activeText : w.inactiveText), 11, ["aria-hidden"])) : ne("v-if", !0)
        ], 2)) : ne("v-if", !0),
        g("div", {
          class: q(c(s).e("action"))
        }, [
          w.loading ? (R(), me(c(_t), {
            key: 0,
            class: q(c(s).is("loading"))
          }, {
            default: fe(() => [
              F(c(Zd))
            ]),
            _: 1
          }, 8, ["class"])) : c(p) ? Ee(w.$slots, "active-action", { key: 1 }, () => [
            w.activeActionIcon ? (R(), me(c(_t), { key: 0 }, {
              default: fe(() => [
                (R(), me(Ht(w.activeActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ]) : c(p) ? ne("v-if", !0) : Ee(w.$slots, "inactive-action", { key: 2 }, () => [
            w.inactiveActionIcon ? (R(), me(c(_t), { key: 0 }, {
              default: fe(() => [
                (R(), me(Ht(w.inactiveActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ])
        ], 2)
      ], 6),
      !w.inlinePrompt && (w.activeIcon || w.activeText) ? (R(), j("span", {
        key: 1,
        class: q(c(v))
      }, [
        w.activeIcon ? (R(), me(c(_t), { key: 0 }, {
          default: fe(() => [
            (R(), me(Ht(w.activeIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !w.activeIcon && w.activeText ? (R(), j("span", {
          key: 1,
          "aria-hidden": !c(p)
        }, M(w.activeText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var MS = /* @__PURE__ */ tt($S, [["__file", "switch.vue"]]);
const DS = An(MS), Of = ["success", "info", "warning", "error"], Ft = Jd({
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
}), FS = Xe({
  customClass: {
    type: String,
    default: Ft.customClass
  },
  center: {
    type: Boolean,
    default: Ft.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ft.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ft.duration
  },
  icon: {
    type: Mn,
    default: Ft.icon
  },
  id: {
    type: String,
    default: Ft.id
  },
  message: {
    type: ke([
      String,
      Object,
      Function
    ]),
    default: Ft.message
  },
  onClose: {
    type: ke(Function),
    default: Ft.onClose
  },
  showClose: {
    type: Boolean,
    default: Ft.showClose
  },
  type: {
    type: String,
    values: Of,
    default: Ft.type
  },
  plain: {
    type: Boolean,
    default: Ft.plain
  },
  offset: {
    type: Number,
    default: Ft.offset
  },
  zIndex: {
    type: Number,
    default: Ft.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ft.grouping
  },
  repeatNum: {
    type: Number,
    default: Ft.repeatNum
  }
}), zS = {
  destroy: () => !0
}, kn = lp([]), BS = (e) => {
  const t = kn.findIndex((o) => o.id === e), n = kn[t];
  let r;
  return t > 0 && (r = kn[t - 1]), { current: n, prev: r };
}, VS = (e) => {
  const { prev: t } = BS(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, US = (e, t) => kn.findIndex((r) => r.id === e) > 0 ? 16 : t, jS = ce({
  name: "ElMessage"
}), HS = /* @__PURE__ */ ce({
  ...jS,
  props: FS,
  emits: zS,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = qy, { ns: o, zIndex: a } = Wd("message"), { currentZIndex: s, nextZIndex: i } = a, l = K(), u = K(!1), d = K(0);
    let m;
    const h = N(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = N(() => {
      const x = n.type;
      return { [o.bm("icon", x)]: x && Fa[x] };
    }), v = N(() => n.icon || Fa[n.type] || ""), b = N(() => VS(n.id)), L = N(() => US(n.id, n.offset) + b.value), p = N(() => d.value + L.value), C = N(() => ({
      top: `${L.value}px`,
      zIndex: s.value
    }));
    function P() {
      n.duration !== 0 && ({ stop: m } = Pd(() => {
        w();
      }, n.duration));
    }
    function I() {
      m?.();
    }
    function w() {
      u.value = !1;
    }
    function E({ code: x }) {
      x === Fn.esc && w();
    }
    return yt(() => {
      P(), i(), u.value = !0;
    }), Ae(() => n.repeatNum, () => {
      I(), P();
    }), Tn(document, "keydown", E), Nn(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: p,
      close: w
    }), (x, Z) => (R(), me(So, {
      name: c(o).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (Q) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: fe(() => [
        bt(g("div", {
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
          style: Nt(c(C)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: P
        }, [
          x.repeatNum > 1 ? (R(), me(c(Xk), {
            key: 0,
            value: x.repeatNum,
            type: c(h),
            class: q(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          c(v) ? (R(), me(c(_t), {
            key: 1,
            class: q([c(o).e("icon"), c(y)])
          }, {
            default: fe(() => [
              (R(), me(Ht(c(v))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          Ee(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (R(), j(ct, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              g("p", {
                class: q(c(o).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), j("p", {
              key: 0,
              class: q(c(o).e("content"))
            }, M(x.message), 3))
          ]),
          x.showClose ? (R(), me(c(_t), {
            key: 2,
            class: q(c(o).e("closeBtn")),
            onClick: et(w, ["stop"])
          }, {
            default: fe(() => [
              F(c(r))
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
var WS = /* @__PURE__ */ tt(HS, [["__file", "message.vue"]]);
let GS = 1;
const xf = (e) => {
  const t = !e || Bt(e) || jo(e) || at(e) ? { message: e } : e, n = {
    ...Ft,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Bt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Sn(r) || (r = document.body), n.appendTo = r;
  }
  return kr(vn.grouping) && !n.grouping && (n.grouping = vn.grouping), ze(vn.duration) && n.duration === 3e3 && (n.duration = vn.duration), ze(vn.offset) && n.offset === 16 && (n.offset = vn.offset), kr(vn.showClose) && !n.showClose && (n.showClose = vn.showClose), n;
}, KS = (e) => {
  const t = kn.indexOf(e);
  if (t === -1)
    return;
  kn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, qS = ({ appendTo: e, ...t }, n) => {
  const r = `message_${GS++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), KS(d);
    },
    onDestroy: () => {
      Ca(null, a);
    }
  }, i = F(WS, s, at(s.message) || jo(s.message) ? {
    default: at(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || wo._context, Ca(i, a), e.appendChild(a.firstElementChild);
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
}, wo = (e = {}, t) => {
  if (!wt)
    return { close: () => {
    } };
  const n = xf(e);
  if (n.grouping && kn.length) {
    const o = kn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ze(vn.max) && kn.length >= vn.max)
    return { close: () => {
    } };
  const r = qS(n, t);
  return kn.push(r), r.handler;
};
Of.forEach((e) => {
  wo[e] = (t = {}, n) => {
    const r = xf(t);
    return wo({ ...r, type: e }, n);
  };
});
function YS(e) {
  for (const t of kn)
    (!e || e === t.props.type) && t.handler.close();
}
wo.closeAll = YS;
wo._context = null;
const ZS = Kd(wo, "$message"), Rf = [
  "success",
  "info",
  "warning",
  "error"
], XS = Xe({
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
    values: [...Rf, ""],
    default: ""
  },
  zIndex: Number
}), QS = {
  destroy: () => !0
}, JS = ce({
  name: "ElNotification"
}), eT = /* @__PURE__ */ ce({
  ...JS,
  props: XS,
  emits: QS,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Wd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = Ky, l = K(!1);
    let u;
    const d = N(() => {
      const P = n.type;
      return P && Fa[n.type] ? r.m(P) : "";
    }), m = N(() => n.type && Fa[n.type] || n.icon), h = N(() => n.position.endsWith("right") ? "right" : "left"), y = N(() => n.position.startsWith("top") ? "top" : "bottom"), v = N(() => {
      var P;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (P = n.zIndex) != null ? P : s.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = Pd(() => {
        l.value && p();
      }, n.duration));
    }
    function L() {
      u?.();
    }
    function p() {
      l.value = !1;
    }
    function C({ code: P }) {
      P === Fn.delete || P === Fn.backspace ? L() : P === Fn.esc ? l.value && p() : b();
    }
    return yt(() => {
      b(), a(), l.value = !0;
    }), Tn(document, "keydown", C), t({
      visible: l,
      close: p
    }), (P, I) => (R(), me(So, {
      name: c(r).b("fade"),
      onBeforeLeave: P.onClose,
      onAfterLeave: (w) => P.$emit("destroy"),
      persisted: ""
    }, {
      default: fe(() => [
        bt(g("div", {
          id: P.id,
          class: q([c(r).b(), P.customClass, c(h)]),
          style: Nt(c(v)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: b,
          onClick: P.onClick
        }, [
          c(m) ? (R(), me(c(_t), {
            key: 0,
            class: q([c(r).e("icon"), c(d)])
          }, {
            default: fe(() => [
              (R(), me(Ht(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          g("div", {
            class: q(c(r).e("group"))
          }, [
            g("h2", {
              class: q(c(r).e("title")),
              textContent: M(P.title)
            }, null, 10, ["textContent"]),
            bt(g("div", {
              class: q(c(r).e("content")),
              style: Nt(P.title ? void 0 : { margin: 0 })
            }, [
              Ee(P.$slots, "default", {}, () => [
                P.dangerouslyUseHTMLString ? (R(), j(ct, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  g("p", { innerHTML: P.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), j("p", { key: 0 }, M(P.message), 1))
              ])
            ], 6), [
              [ir, P.message]
            ]),
            P.showClose ? (R(), me(c(_t), {
              key: 0,
              class: q(c(r).e("closeBtn")),
              onClick: et(p, ["stop"])
            }, {
              default: fe(() => [
                F(c(i))
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
var tT = /* @__PURE__ */ tt(eT, [["__file", "notification.vue"]]);
const Va = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, el = 16;
let nT = 1;
const ko = function(e = {}, t) {
  if (!wt)
    return { close: () => {
    } };
  (Bt(e) || jo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Va[n].forEach(({ vm: d }) => {
    var m;
    r += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + el;
  }), r += el;
  const o = `notification_${nT++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      rT(o, n, a);
    }
  };
  let i = document.body;
  Sn(e.appendTo) ? i = e.appendTo : Bt(e.appendTo) && (i = document.querySelector(e.appendTo)), Sn(i) || (i = document.body);
  const l = document.createElement("div"), u = F(tT, s, at(s.message) ? s.message : jo(s.message) ? () => s.message : null);
  return u.appContext = $n(t) ? ko._context : t, u.props.onDestroy = () => {
    Ca(null, l);
  }, Ca(u, l), Va[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Rf.forEach((e) => {
  ko[e] = (t = {}, n) => ((Bt(t) || jo(t)) && (t = {
    message: t
  }), ko({ ...t, type: e }, n));
});
function rT(e, t, n) {
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
      const { el: d, component: m } = r[u].vm, h = Number.parseInt(d.style[i], 10) - s - el;
      m.props.offset = h;
    }
}
function oT() {
  for (const e of Object.values(Va))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ko.closeAll = oT;
ko._context = null;
const aT = Kd(ko, "$notify"), rt = {
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
    r === "center" ? ZS({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : aT({
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
}, sT = "snippets-code:developer-mode", Nf = "snippets-code:frontend-diagnostics", lT = 240, $o = "[REDACTED]", Aa = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${$o}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${$o}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  $o
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${$o}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${$o}`
), Pf = (e) => {
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
}, iT = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, cT = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Nf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Xl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(sT) === "true";
  } catch {
    return !1;
  }
}, uT = (e, t, n) => {
  if (!Xl() || typeof localStorage > "u") return;
  const r = cT();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: iT(),
    message: Aa(t),
    data: Pf(n)
  });
  try {
    localStorage.setItem(
      Nf,
      JSON.stringify(r.slice(-lT))
    );
  } catch {
  }
}, dT = () => Xl(), fT = (e) => e === "warn" || e === "error" || !1 || !1 || Xl(), ya = (e, t, n) => {
  uT(e, t, n), fT(e) && xt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Pf(n)
  }).catch(() => {
  });
}, on = {
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
    dT() && ya("debug", e, t);
  }
}, pT = { class: "sidebar-header" }, mT = { class: "sidebar-title-block" }, hT = ["title", "aria-pressed"], gT = { class: "sidebar-nav" }, vT = { class: "sidebar-nav-item sidebar-nav-item--search" }, bT = ["placeholder"], yT = { class: "sidebar-section recent-section" }, _T = { class: "section-title-row" }, wT = { class: "section-title" }, kT = ["title"], ST = {
  key: 0,
  class: "chat-list"
}, TT = ["onClick", "onKeydown"], ET = { class: "chat-item-title" }, AT = { class: "chat-item-time" }, CT = ["title", "onClick"], IT = {
  key: 1,
  class: "sidebar-empty"
}, LT = { class: "sidebar-service" }, OT = { class: "sidebar-service-row" }, xT = { class: "chat-panel" }, RT = ["title"], NT = {
  key: 0,
  class: "empty-state"
}, PT = { class: "empty-title" }, $T = { class: "empty-desc" }, MT = {
  key: 0,
  class: "date-divider"
}, DT = { class: "message-avatar" }, FT = { key: 1 }, zT = { class: "message-body" }, BT = { class: "user-bubble" }, VT = {
  key: 0,
  class: "user-message-text"
}, UT = {
  key: 1,
  class: "message-attachment-list"
}, jT = ["title"], HT = ["src", "alt"], WT = {
  key: 1,
  class: "attachment-file-icon"
}, GT = { key: 2 }, KT = {
  key: 0,
  class: "message-actions"
}, qT = ["title", "onClick"], YT = ["title", "onClick"], ZT = ["title", "onClick"], XT = { class: "assistant-head" }, QT = { key: 0 }, JT = {
  key: 0,
  class: "assistant-content-stack"
}, e2 = ["open"], t2 = { class: "reasoning-summary-title" }, n2 = { key: 0 }, r2 = ["innerHTML"], o2 = ["innerHTML"], a2 = {
  key: 1,
  class: "message-content loading-text"
}, s2 = {
  key: 0,
  class: "web-search-panel"
}, l2 = { class: "web-search-panel__header" }, i2 = {
  key: 0,
  class: "web-search-source-list"
}, c2 = ["href", "title"], u2 = {
  key: 1,
  class: "message-stats"
}, d2 = { class: "message-stats__context" }, f2 = { class: "message-stats__output" }, p2 = { class: "message-stats__elapsed" }, m2 = { class: "message-stats__speed" }, h2 = {
  key: 0,
  class: "message-stats-time"
}, g2 = {
  key: 2,
  class: "message-warning"
}, v2 = {
  key: 3,
  class: "message-actions"
}, b2 = ["title", "aria-label"], y2 = ["disabled", "title", "onClick"], _2 = ["disabled", "title", "onClick"], w2 = ["title", "onClick"], k2 = ["title", "onClick"], S2 = ["title", "onClick"], T2 = ["title", "onClick"], E2 = ["title", "onClick"], A2 = ["title"], C2 = {
  key: 0,
  class: "attachment-preview-list"
}, I2 = ["src", "alt"], L2 = {
  key: 1,
  class: "attachment-file-icon"
}, O2 = { class: "attachment-meta" }, x2 = ["title", "onClick"], R2 = ["placeholder"], N2 = { class: "input-toolbar" }, P2 = { class: "input-toolbar-left" }, $2 = ["title"], M2 = { class: "model-select-shell" }, D2 = ["disabled"], F2 = ["value"], z2 = {
  key: 0,
  value: ""
}, B2 = ["title", "aria-pressed"], V2 = ["title", "aria-pressed"], U2 = { class: "input-toolbar-right" }, j2 = ["title", "aria-label"], H2 = ["disabled", "title", "aria-label"], _u = "snippets.localAi.webSearchEnabled", W2 = 96, G2 = 24, K2 = 120, q2 = 4096, Ls = 160, Y2 = 420, Z2 = 1200, X2 = 24e3, Q2 = 1800, J2 = 5200, eE = 90, tE = 1e3, nE = /* @__PURE__ */ ce({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = K(""), r = K([]), o = K(""), a = K(!1), s = K(""), i = K([]), l = K(!1), u = K(!1), d = K(!1), m = K(!1), y = K((() => {
      try {
        return localStorage.getItem(_u) === "true";
      } catch {
        return !1;
      }
    })()), v = K(!1), b = K(!0), L = K(!1), p = K(null), C = K(null), P = K(null), I = K(""), w = K(null), E = K(null), x = K(null), Z = K(Date.now());
    let Q = null, se = null, he = null, le = !1;
    const ye = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ee = (f) => `${Date.now()}-${f}-${Math.random().toString(16).slice(2, 8)}`, W = (f) => f.type === "root", pe = (f) => new Map(f.map((S) => [S.id, S])), Y = (f) => f.find(W), G = (f, S) => {
      if (!S) return null;
      const k = pe(f);
      let D = k.get(S);
      const B = /* @__PURE__ */ new Set();
      for (; D?.childIds?.length && !B.has(D.id); )
        B.add(D.id), D = k.get(D.childIds[D.childIds.length - 1]);
      return D?.id ?? null;
    }, De = (f, S) => {
      if (f.some(W)) {
        const X = f.map((we) => ({
          ...we,
          type: we.type ?? "text",
          parentId: we.parentId ?? null,
          childIds: we.childIds ?? []
        })), ie = Y(X);
        return {
          messages: X,
          currentNodeId: G(X, X.at(-1)?.id) ?? ie?.id ?? null
        };
      }
      const k = {
        id: ee("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: S,
        parentId: null,
        childIds: []
      }, D = [k];
      let B = k.id;
      for (const X of f) {
        const ie = {
          ...X,
          role: X.role === "system" ? "assistant" : X.role,
          type: "text",
          parentId: B,
          childIds: []
        };
        D.find((xe) => xe.id === B)?.childIds?.push(ie.id), D.push(ie), B = ie.id;
      }
      return { messages: D, currentNodeId: B };
    }, Be = (f, S) => {
      if (!S) return [];
      const k = pe(f), D = [], B = /* @__PURE__ */ new Set();
      let X = k.get(S);
      for (; X && !B.has(X.id); )
        B.add(X.id), D.unshift(X), X = X.parentId ? k.get(X.parentId) : void 0;
      return D;
    }, ge = (f) => {
      if (!f) return [];
      const S = f.currentNodeId ?? G(f.messages, Y(f.messages)?.id);
      return Be(f.messages, S).filter(
        (k) => !W(k)
      );
    }, _e = (f) => {
      if (!f) return [];
      const S = pe(f.messages), k = (D) => G(f.messages, D) ?? D;
      return ge(f).map((D) => {
        const X = (D.parentId ? S.get(D.parentId) : void 0)?.childIds ?? [D.id];
        return {
          message: D,
          siblingLeafNodeIds: X.map(k),
          siblingCurrentIndex: Math.max(0, X.indexOf(D.id))
        };
      });
    }, J = (f, S) => {
      const k = Y(f.messages), D = S.parentId ?? f.currentNodeId ?? k?.id ?? null, B = {
        ...S,
        type: "text",
        parentId: D,
        childIds: []
      };
      if (f.messages.push(B), D) {
        const X = f.messages.find((ie) => ie.id === D);
        X && (X.childIds = [...X.childIds ?? [], B.id]);
      }
      return f.currentNodeId = B.id, B;
    }, Ce = N(
      () => (!!s.value.trim() || i.value.length > 0) && !l.value
    ), Qe = N(() => w.value?.healthy ? t("localAi.serviceHealthy") : w.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), oe = N(
      () => r.value.find((f) => f.id === o.value) ?? null
    ), st = N(() => ge(oe.value)), ut = N(() => _e(oe.value)), Ge = (f) => f ? f.split(/[\\/]+/).pop() ?? f : "", At = N(
      () => Ge(I.value) || Ge(w.value?.modelPath) || Ge(C.value?.modelPath) || t("localAi.localModel")
    ), dt = N(() => P.value?.mainModels ?? []), Ct = N(() => !!C.value?.mmprojPath), lt = N(
      () => C.value?.ctxSize ?? w.value?.ctxSize ?? 4096
    ), nt = N(() => {
      const f = lt.value, S = C.value?.maxTokens ?? 0;
      return S > 0 ? Math.min(
        Math.max(S, 512),
        Math.max(512, f - 512)
      ) : Math.min(
        Math.max(q2, Math.floor(f * 0.5)),
        Math.max(512, f - 512)
      );
    }), Tt = N(
      () => Math.max(512, lt.value - nt.value)
    ), T = N(() => {
      const f = At.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(f);
    }), O = N(() => {
      const f = n.value.trim().toLowerCase();
      return r.value.filter(
        (S) => !f || S.title.toLowerCase().includes(f) || S.messages.some(
          (k) => !W(k) && k.content.toLowerCase().includes(f)
        )
      ).slice().sort((S, k) => k.updatedAt.localeCompare(S.updatedAt));
    }), U = () => t("localAi.now"), re = () => {
      const f = (/* @__PURE__ */ new Date()).toISOString(), S = {
        id: ee("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: f,
        parentId: null,
        childIds: []
      };
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: f,
        updatedAt: f,
        updatedAtLabel: U(),
        currentNodeId: S.id,
        messages: [S]
      };
    }, Le = () => {
      const f = E.value;
      return f ? f.scrollHeight - f.scrollTop - f.clientHeight <= W2 : !0;
    }, ve = () => {
      const f = Le();
      b.value = f, L.value = !f;
    }, A = () => {
      ve();
    }, z = async (f = {}) => {
      await ht(), !(!E.value || !f.force && !b.value) && (le = le || f.force === !0, he === null && (he = window.requestAnimationFrame(() => {
        he = null;
        const k = E.value, D = le;
        if (le = !1, !k || !D && !b.value) return;
        const B = Math.max(0, k.scrollHeight - k.clientHeight);
        Math.abs(k.scrollTop - B) > 1 && (k.scrollTop = B), ve();
      })));
    }, Se = () => {
      b.value = !0, z({ force: !0 });
    }, Re = async () => {
      try {
        C.value = await id(), I.value = C.value.modelPath ?? "", P.value = await cd(C.value), T.value || (m.value = !1);
      } catch (f) {
        on.warn("[LocalAI] refresh chat config failed", f);
      }
    }, qe = async () => {
      u.value = !0;
      try {
        w.value = await ud();
      } catch (f) {
        on.warn("[LocalAI] refresh chat status failed", f);
      } finally {
        u.value = !1;
      }
    }, $t = async () => {
      try {
        const f = await Kh();
        r.value = f.map((S) => {
          const k = S.messages?.length ? S.messages : S.turns.map((B) => ({
            id: B.id,
            role: B.role,
            content: B.content,
            createdAt: B.createdAt
          })), D = De(
            k,
            S.createdAt
          );
          return {
            id: S.id,
            title: S.title,
            createdAt: S.createdAt,
            updatedAt: S.updatedAt,
            updatedAtLabel: new Date(S.updatedAt).toLocaleString(),
            currentNodeId: S.currentNodeId ?? D.currentNodeId,
            messages: D.messages
          };
        }), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (f) {
        on.warn("[LocalAI] refresh histories failed", f);
      }
    }, Ye = async () => {
      await Promise.all([Re(), qe(), $t()]);
    }, qt = async () => {
      const f = oe.value;
      if (!f) return;
      const S = ge(f).map((k) => ({
        id: k.id,
        role: k.role,
        content: k.content,
        createdAt: k.createdAt
      }));
      await qh({
        id: f.id,
        title: f.title,
        createdAt: f.createdAt,
        updatedAt: f.updatedAt,
        turns: S,
        currentNodeId: f.currentNodeId,
        messages: f.messages
      });
    }, pr = () => {
      const f = re();
      r.value.unshift(f), o.value = f.id, s.value = "";
    }, qr = () => {
      oe.value || pr();
    }, Wn = (f) => {
      o.value = f;
      const S = oe.value;
      S && !S.currentNodeId && (S.currentNodeId = G(S.messages, Y(S.messages)?.id) ?? null), b.value = !0, z({ force: !0 });
    }, Cr = async (f) => {
      r.value = r.value.filter((S) => S.id !== f), await Yh(f), o.value === f && (o.value = r.value[0]?.id ?? "");
    }, Gn = () => {
      x.value?.click();
    }, Yt = (f, S) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: f.name,
      type: S,
      mime: f.type || "application/octet-stream",
      size: f.size,
      status: "pending"
    }), Zt = async (f) => {
      if (vs(f)) {
        const k = Yt(f, "image");
        if (f.size > ng)
          return {
            ...k,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...k,
            status: "parsed",
            dataUrl: await ag(f)
          };
        } catch (D) {
          return { ...k, status: "error", error: String(D) };
        }
      }
      if (Ki(f)) {
        const k = Yt(f, "text");
        if (f.size > tg)
          return {
            ...k,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const D = await sg(f);
          return {
            ...k,
            status: "parsed",
            text: D.text,
            error: D.truncated ? "truncated" : void 0
          };
        } catch (D) {
          return { ...k, status: "error", error: String(D) };
        }
      }
      return {
        ...Yt(f, "unsupported"),
        status: "error",
        error: og(f) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, cn = async (f) => {
      const S = Array.from(f), k = eg - i.value.length;
      if (k <= 0) {
        rt.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      S.length > k && rt.msg(t("localAi.attachmentLimit"), "warning");
      const D = S.slice(0, k), B = D.map(
        (X) => Yt(
          X,
          vs(X) ? "image" : Ki(X) ? "text" : "unsupported"
        )
      );
      i.value.push(...B), await Promise.all(
        D.map(async (X, ie) => {
          const we = await Zt(X), xe = i.value.findIndex(
            (Et) => Et.id === B[ie].id
          );
          xe >= 0 && (i.value[xe] = we);
        })
      );
    }, Ir = async (f) => {
      const S = f.target;
      S.files?.length && await cn(S.files), S.value = "";
    }, Lr = async (f) => {
      f.dataTransfer?.files.length && await cn(f.dataTransfer.files);
    }, mr = async (f) => {
      const S = Array.from(f.clipboardData?.files ?? []);
      if (!S.length) return;
      const k = S.filter(vs);
      k.length && (f.preventDefault(), await cn(k));
    }, Or = (f) => {
      i.value = i.value.filter(
        (S) => S.id !== f
      );
    }, xr = (f) => f.status === "pending" ? t("localAi.attachmentPending") : f.status === "error" ? f.error ?? "" : f.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), Eo = async () => {
      if (!(!C.value || !I.value)) {
        C.value.modelPath = I.value;
        try {
          C.value = await Sa(C.value), w.value?.running && (w.value = await dd()), rt.msg(t("localAi.modelChanged"));
        } catch (f) {
          rt.msg(`${t("localAi.configSaveFailed")}: ${f}`, "error");
        }
      }
    }, Kn = (f) => {
      let S = 0;
      for (let k = 0; k < f.length; k += 1)
        S = S * 31 + f.charCodeAt(k) >>> 0;
      return `code-${f.length}-${S.toString(16)}`;
    }, Yr = (f) => f.includes("<pre>") ? f.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (S, k, D) => {
        const B = document.createElement("textarea");
        B.innerHTML = D;
        const X = B.value, ie = Kn(X);
        if (be.set(ie, X), be.size > K2) {
          const xe = be.keys().next().value;
          typeof xe == "string" && be.delete(xe);
        }
        const we = k ? ` class="${k}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${ie}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${we}>${D}</code></pre></div>`;
      }
    ) : f, Zr = (f, S = {}) => {
      const k = S.cache !== !1, D = S.enhanceCodeBlocks !== !1;
      if (k) {
        const ie = ye.get(f);
        if (ie) return ie;
      }
      const B = Bg(Ue.parse(f, { async: !1 })), X = D ? Yr(B) : B;
      if (!k) return X;
      if (ye.set(f, X), ye.size > G2) {
        const ie = ye.keys().next().value;
        typeof ie == "string" && ye.delete(ie);
      }
      return X;
    }, Ve = (f, S) => {
      const k = Qr(f, S);
      if (!f.streaming) return Zr(k);
      const D = V.get(f.id), B = S === "reasoning" ? "reasoningHtml" : "answerHtml", X = S === "reasoning" ? "reasoning" : "answer";
      if (D?.[X] === k && D[B])
        return D[B];
      const ie = Zr(k, {
        cache: !1,
        enhanceCodeBlocks: !1
      });
      return D?.[X] === k && (D[B] = ie), ie;
    }, hn = async (f) => {
      const D = f.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!D) return;
      const B = be.get(D);
      if (B)
        try {
          await navigator.clipboard.writeText(B), rt.msg(t("localAi.codeCopied"));
        } catch (X) {
          rt.msg(`${t("common.copy")}: ${X}`, "error");
        }
    }, Rr = (f) => {
      const S = f.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!S || S.index === void 0)
        return { reasoning: "", answer: f };
      const k = f.slice(0, S.index).trim(), D = S[0], B = f.slice(S.index + D.length).trim();
      return {
        reasoning: (S[1] ?? "").trim(),
        answer: [k, B].filter(Boolean).join(`

`)
      };
    }, Xr = (f) => Rr(f).reasoning, qn = (f) => Rr(f).answer, Qr = (f, S) => {
      const { reasoning: k, answer: D } = Rr(f.content);
      if (!f.streaming)
        return V.delete(f.id), S === "reasoning" ? k : D;
      const B = Date.now(), X = V.get(f.id), ie = f.content.length >= X2, we = ie ? Z2 : Y2, xe = ie ? J2 : Q2;
      if (!X || B - X.updatedAt >= we || f.content.length - X.source.length >= xe || !X.reasoning && !!k || !X.answer && !!D) {
        const It = {
          source: f.content,
          reasoning: k,
          answer: D,
          updatedAt: B
        };
        return V.set(f.id, It), S === "reasoning" ? k : D;
      }
      return S === "reasoning" ? X.reasoning : X.answer;
    }, Jr = (f) => !!qn(f.content), Nr = (f) => !!(f.streaming && f.allowThinking && f.reasoningStartedAt && !f.reasoningEndedAt && !Jr(f)), Vt = (f) => {
      if (!f.reasoningStartedAt) return "0.00";
      const S = f.reasoningEndedAt ?? (f.streaming ? Z.value : Date.now());
      return Math.max(0, (S - f.reasoningStartedAt) / 1e3).toFixed(2);
    }, $ = (f) => !f.reasoningStartedAt && f.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Vt(f)
    }), te = (f) => new Date(
      f.createdAt || oe.value?.updatedAt || Date.now()
    ), Te = (f) => te(f).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Je = (f, S) => te(f).toDateString() === te(S).toDateString(), ft = (f) => te(f).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Xt = (f) => {
      const S = ut.value[f]?.message;
      if (!S) return !1;
      if (f === 0) return !ft(S);
      const k = ut.value[f - 1]?.message;
      return k ? Je(k, S) ? te(S).getTime() - te(k).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, Ut = (f) => {
      const S = te(f), k = S.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), D = S.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return ft(f) ? D : `${k} ${D}`;
    }, Mt = (f) => f.streaming ? Nr(f) ? t("localAi.thinking") : t("localAi.generating") : Te(f), Cn = (f) => f.webSearchStatus === "searching" ? t("localAi.webSearchSearching") : f.allowThinking && !f.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Pr = (f) => f.webSearchStatus === "searching" ? t("localAi.webSearchSearching") : f.webSearchStatus === "done" && f.webSearchResults?.length ? t("localAi.webSearchUsed", {
      count: f.webSearchResults.length
    }) : f.webSearchStatus === "empty" ? t("localAi.webSearchNoResults") : f.webSearchStatus === "failed" ? `${t("localAi.webSearchFailed")}: ${f.webSearchError ?? ""}` : "", is = () => {
      y.value = !y.value;
      try {
        localStorage.setItem(
          _u,
          String(y.value)
        );
      } catch (f) {
        on.warn("[LocalAI] save web search state failed", f);
      }
    }, aa = (f, S) => {
      f.allowThinking && (S.includes("<think>") && !f.reasoningStartedAt && (f.reasoningStartedAt = Date.now()), S.includes("</think>") && !f.reasoningEndedAt && (f.reasoningEndedAt = Date.now()));
    }, eo = (f) => {
      const S = f.trim();
      if (!S) return 0;
      const k = (S.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, X = (S.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((ie, we) => /^[A-Za-z0-9_]+$/.test(we) ? ie + Math.max(1, Math.ceil(we.length / 4)) : ie + 1, 0);
      return Math.max(1, Math.ceil(k + X));
    }, Yn = (f) => Math.max(0, Math.ceil(f.length / 4)), hr = (f) => Array.isArray(f) ? f.filter((S) => S.type === "text").map((S) => S.text).join(`
`) : f, ue = (f) => {
      const S = f.attachments?.filter(
        (X) => X.status === "parsed"
      ) ?? [], k = lg(
        f.content,
        S
      ), D = S.filter(
        (X) => X.type === "image" && X.dataUrl
      );
      if (!D.length) return k;
      const B = [{ type: "text", text: k }];
      for (const X of D)
        B.push({
          type: "image_url",
          image_url: {
            url: X.dataUrl ?? ""
          }
        });
      return B;
    }, _ = (f) => eo(
      f.map((S) => {
        const k = hr(S.content);
        return `${S.role}: ${k}`;
      }).join(`
`)
    ), H = (f, S) => {
      const k = Math.max(240, S * 4);
      return f.length <= k ? f : `${t("localAi.previousAnswerTail")}

${f.slice(-k)}`;
    }, ae = (f, S) => {
      const k = [];
      let D = 0;
      for (let B = f.length - 1; B >= 0; B -= 1) {
        const X = f[B], ie = _([X]);
        if (D + ie <= S || k.length === 0) {
          k.unshift(X), D += ie;
          continue;
        }
        const we = S - D;
        if (X.role !== "assistant" || typeof X.content != "string" || we < Ls)
          continue;
        let xe = we, Et = {
          ...X,
          content: H(X.content, xe)
        }, It = _([Et]);
        for (; It > we && xe > Ls; )
          xe = Math.max(
            Ls,
            Math.floor(xe * 0.7)
          ), Et = {
            ...X,
            content: H(X.content, xe)
          }, It = _([Et]);
        D + It <= S && (k.unshift(Et), D += It);
      }
      return k;
    }, Ne = () => ae(
      st.value.filter((f) => !f.streaming && f.role !== "system").map((f) => ({
        role: f.role,
        content: f.role === "user" ? ue(f) : f.content
      })),
      Tt.value
    ), Oe = (f) => {
      const S = oe.value?.messages.find(
        (k) => k.id === f.parentId
      );
      return S?.role === "user" ? S.content.trim() : "";
    }, Ke = (f) => {
      const S = f.results.map((k, D) => {
        const B = k.content.trim();
        return [
          `[${D + 1}] ${k.title}`,
          `URL: ${k.url}`,
          B ? `摘要: ${B}` : ""
        ].filter(Boolean).join(`
`);
      }).join(`

`);
      return {
        role: "system",
        content: [
          "Web search context is available for this turn.",
          `Search query: ${f.query}`,
          "Use the search results below when they are relevant. Prefer recent factual information from these results, and cite sources with bracket numbers like [1]. If the results are not relevant or insufficient, say so briefly.",
          "",
          S
        ].join(`
`)
      };
    }, Qt = async (f, S) => {
      if (S.webSearchStatus !== "searching") return f;
      const k = Oe(S);
      if (!k) return f;
      S.webSearchStatus = "searching", S.webSearchQuery = k, S.webSearchResults = [], S.webSearchError = "";
      try {
        const D = await Gh({
          query: k,
          maxResults: C.value?.webSearchMaxResults
        });
        if (!D.results.length)
          return S.webSearchStatus = "empty", f;
        S.webSearchStatus = "done", S.webSearchResults = D.results;
        const B = Ke(D), X = _([B]), ie = Math.max(
          512,
          Tt.value - X
        );
        return [
          B,
          ...ae(f, ie)
        ];
      } catch (D) {
        return S.webSearchStatus = "failed", S.webSearchError = String(D), on.warn("[LocalAI] web search failed", D), f;
      }
    }, un = (f) => {
      const S = C.value?.maxTokens ?? 0;
      if (S > 0) return S;
      const k = _(f);
      return Math.max(256, lt.value - k - 128);
    }, Jt = (f) => Math.max(
      1,
      f.stats?.ctxSize ?? f.contextSize ?? C.value?.ctxSize ?? w.value?.ctxSize ?? 4096
    ), gn = (f) => {
      const S = Z.value, k = f.stats?.promptTokens ?? f.promptTokens ?? 0, D = f.stats?.completionTokens ?? f.estimatedCompletionTokens ?? (f.streaming ? Yn(f.content) : eo(f.content)), B = Jt(f), X = Math.min(
        f.stats?.totalTokens ?? k + D,
        B
      ), ie = Math.max(
        0,
        (f.stats?.generationTimeMs ?? f.elapsedMs ?? S - te(f).getTime()) / 1e3
      ), we = f.stats?.tokensPerSecond ?? (ie > 0 ? D / ie : 0);
      return {
        context: X,
        contextMax: B,
        contextPercent: Math.min(100, Math.round(X / B * 100)),
        output: D,
        outputMax: (C.value?.maxTokens ?? 0) > 0 ? String(C.value?.maxTokens) : "∞",
        seconds: ie.toFixed(1),
        speed: we.toFixed(1)
      };
    }, pt = (f) => f.repetitionStopped ? t("localAi.repetitionStopped") : f.interrupted ? t("localAi.streamInterrupted") : f.stopped ? t("localAi.generationStopped") : (f.stats?.totalTokens ?? (f.promptTokens ?? 0) + (f.stats?.completionTokens ?? f.estimatedCompletionTokens ?? (f.streaming ? Yn(f.content) : eo(f.content)))) >= Jt(f) - 8 ? t("localAi.contextLimitReached") : f.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", Ao = (f) => {
      const S = String(f);
      return /exceeds the available context size|exceed_context_size/i.test(S) ? t("localAi.contextExceeded") : S;
    }, sa = (f) => {
      const S = f.replace(/\s+/g, " ").trim();
      if (S.length < 900) return !1;
      const D = S.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((we) => we.toLowerCase()) ?? [];
      if (D.length < 140) return !1;
      const B = D.slice(-120), X = /* @__PURE__ */ new Map();
      for (const we of B) X.set(we, (X.get(we) ?? 0) + 1);
      if (X.size / B.length < 0.12 && [...X.values()].some((we) => we >= 56))
        return !0;
      for (let we = 1; we <= 4; we += 1) {
        const xe = D.slice(-we).join("\0");
        let Et = 1;
        for (let It = D.length - we * 2; It >= 0 && D.slice(It, It + we).join("\0") === xe; It -= we)
          Et += 1;
        if (Et >= Math.max(24, Math.ceil(72 / we))) return !0;
      }
      return !1;
    }, Jl = () => {
      se || (Z.value = Date.now(), se = setInterval(() => {
        Z.value = Date.now();
      }, tE));
    }, cs = () => {
      se && (clearInterval(se), se = null, Z.value = Date.now());
    }, ei = async (f) => {
      const S = performance.now(), k = fd();
      let D = Ne(), B = "", X = null, ie = null, we = !1, xe = !1;
      if (p.value = k, d.value = !1, D = await Qt(D, f), d.value) {
        f.streaming = !1, f.stopped = !0, f.elapsedMs = performance.now() - S, p.value = null;
        return;
      }
      f.promptTokens = _(D), f.contextSize = lt.value;
      const Et = async () => {
        if (!B) {
          X = null, ie?.(), ie = null;
          return;
        }
        const mt = d.value ? 1200 : B.length > 4e3 ? 900 : B.length > 1200 ? 520 : B.length > 240 ? 180 : 64;
        f.content += B.slice(0, mt), B = B.slice(mt), f.estimatedCompletionTokens = Yn(
          f.content
        ), !xe && !d.value && sa(f.content) && (xe = !0, d.value = !0, f.repetitionStopped = !0, gs(k).catch(
          (Co) => on.warn("[LocalAI] repetition stop failed", Co)
        )), await z(), X = window.setTimeout(() => {
          Et().catch(
            (Co) => on.warn("[LocalAI] stream pump failed", Co)
          );
        }, eE);
      }, It = (mt) => {
        mt && (aa(f, mt), B += mt, X === null && (X = window.setTimeout(() => {
          Et().catch(
            (Co) => on.warn("[LocalAI] stream pump failed", Co)
          );
        }, 32)));
      }, la = async () => {
        !B && X === null || await new Promise((mt) => {
          ie = mt;
        });
      }, to = await Wh(
        {
          messages: D,
          maxTokens: un(D),
          enableThinking: f.allowThinking === !0
        },
        (mt) => {
          we = !0, It(mt);
        },
        {
          requestId: k,
          onStats: (mt) => {
            f.stats = {
              ...f.stats ?? {},
              ...mt
            }, mt.ctxSize && (f.contextSize = mt.ctxSize), mt.completionTokens !== void 0 && (f.estimatedCompletionTokens = mt.completionTokens), Z.value = Date.now();
          }
        }
      ).catch(async (mt) => {
        throw await la(), mt;
      });
      if (!we)
        It(to.content);
      else if (!d.value) {
        const mt = f.content.length + B.length;
        to.content.length > mt && It(to.content.slice(mt));
      }
      await la(), !d.value && to.content && f.content !== to.content && (f.content = to.content), f.estimatedCompletionTokens = f.stats?.completionTokens ?? Yn(f.content), V.delete(f.id), f.streaming = !1, f.elapsedMs = performance.now() - S, f.stopped = d.value, f.interrupted = !1, f.error = "", Z.value = Date.now(), p.value = null;
    }, $f = async () => {
      const f = p.value;
      if (!(!l.value || !f || d.value)) {
        d.value = !0;
        try {
          await gs(f);
        } catch (S) {
          on.warn("[LocalAI] cancel stream failed", S);
        }
      }
    }, Mf = (f) => {
      f.isComposing || f.keyCode === 229 || f.key === "Enter" && !f.shiftKey && (f.preventDefault(), ti());
    }, Df = () => {
      if (!s.value.trim() && !i.value.length) return !1;
      if (i.value.find(
        (D) => D.status === "pending"
      ))
        return rt.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const S = i.value.find(
        (D) => D.status === "error" || D.type === "unsupported"
      );
      return S ? (rt.msg(
        `${t("localAi.attachmentErrorBlock")}: ${S.name}`,
        "warning"
      ), !1) : i.value.some(
        (D) => D.type === "image"
      ) && !Ct.value ? (rt.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, ti = async () => {
      const f = s.value.trim();
      if (l.value || !Df()) return;
      qr();
      const S = (/* @__PURE__ */ new Date()).toISOString(), k = i.value.map((xe) => ({
        ...xe
      })), D = f || k[0]?.name || "", B = oe.value;
      if (!B) return;
      const X = J(B, {
        id: ee("user"),
        role: "user",
        content: f,
        createdAt: S,
        attachments: k
      }), ie = J(B, {
        id: ee("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: X.id,
        streaming: !0,
        allowThinking: m.value && T.value,
        webSearchStatus: y.value ? "searching" : void 0,
        contextSize: lt.value,
        promptTokens: _(Ne())
      });
      s.value = "", i.value = [], l.value = !0, Jl(), await z({ force: !0 });
      const we = performance.now();
      try {
        await ei(ie), oe.value && (oe.value.title = oe.value.title === t("localAi.newChatTitle") ? D.slice(0, 28) : oe.value.title, oe.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), oe.value.updatedAtLabel = new Date(
          oe.value.updatedAt
        ).toLocaleString(), await qt()), await qe();
      } catch (xe) {
        if (!d.value) {
          s.value = f, i.value = k;
          const Et = Ao(xe);
          rt.msg(`${t("localAi.chatFailed")}: ${Et}`, "error"), ie.error = Et, ie.interrupted = !!ie.content.trim(), ie.interrupted || (ie.content = Et), oe.value && (oe.value.title = oe.value.title === t("localAi.newChatTitle") ? D.slice(0, 28) : oe.value.title, oe.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), oe.value.updatedAtLabel = new Date(
            oe.value.updatedAt
          ).toLocaleString(), await qt());
        }
        ie.streaming = !1, V.delete(ie.id), ie.elapsedMs = performance.now() - we;
      } finally {
        l.value = !1, p.value = null, cs(), await z();
      }
    }, Ff = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, zf = (f) => {
      const S = new Date(f), k = /* @__PURE__ */ new Date(), D = k.getTime() - S.getTime(), B = 24 * 60 * 60 * 1e3;
      return S.toDateString() === k.toDateString() ? S.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : D < B * 2 ? t("localAi.yesterday") : D < B * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(D / B))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(D / (B * 7)))
      });
    }, ni = async (f) => {
      try {
        await navigator.clipboard.writeText(f.content), rt.msg(t("localAi.copied"));
      } catch (S) {
        rt.msg(`${t("common.operationFailed")}: ${S}`, "error");
      }
    }, Bf = (f, S) => {
      const k = pe(f), D = /* @__PURE__ */ new Set([S]), B = (X) => {
        const ie = k.get(X);
        for (const we of ie?.childIds ?? [])
          D.add(we), B(we);
      };
      return B(S), D;
    }, ri = async (f) => {
      const S = oe.value;
      if (!S) return;
      const k = S.messages.find((B) => B.id === f);
      if (!k || W(k)) return;
      const D = Bf(S.messages, f);
      S.messages = S.messages.filter((B) => !D.has(B.id)).map((B) => ({
        ...B,
        childIds: (B.childIds ?? []).filter((X) => !D.has(X))
      })), S.currentNodeId && D.has(S.currentNodeId) && (S.currentNodeId = G(S.messages, k.parentId) ?? Y(S.messages)?.id ?? null), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await qt();
    }, oi = (f) => {
      s.value = f.content, oe.value && f.parentId && (oe.value.currentNodeId = f.parentId);
    }, ai = (f) => t("localAi.messageVersion", {
      current: f.siblingCurrentIndex + 1,
      total: f.siblingLeafNodeIds.length
    }), si = (f, S) => {
      const k = oe.value;
      if (!k) return;
      const D = f.siblingCurrentIndex + S, B = f.siblingLeafNodeIds[D];
      B && (k.currentNodeId = B, b.value = !0, z({ force: !0 }));
    }, Vf = async (f) => {
      const S = oe.value;
      if (!S || l.value) return;
      const k = S.messages.find((xe) => xe.id === f);
      if (!k || k.role !== "assistant") return;
      const D = Be(S.messages, k.id);
      if (!D.length) return;
      const B = (/* @__PURE__ */ new Date()).toISOString(), X = /* @__PURE__ */ new Map(), ie = D.map((xe, Et) => {
        const It = ee(Et === 0 ? "root" : xe.role);
        return X.set(xe.id, It), {
          ...xe,
          id: It,
          parentId: xe.parentId ? X.get(xe.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: xe.attachments?.map((la) => ({ ...la }))
        };
      });
      for (let xe = 0; xe < ie.length - 1; xe += 1)
        ie[xe].childIds = [ie[xe + 1].id];
      const we = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${S.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: B,
        updatedAt: B,
        updatedAtLabel: U(),
        currentNodeId: ie.at(-1)?.id ?? null,
        messages: ie
      };
      r.value.unshift(we), o.value = we.id, s.value = "", i.value = [], b.value = !0, await qt(), await z({ force: !0 }), rt.msg(t("localAi.branchCreated"));
    }, Uf = async (f) => {
      const S = oe.value;
      if (!S || l.value) return;
      const k = S.messages.find((X) => X.id === f);
      if (!k || k.role !== "assistant" || !k.parentId) return;
      S.currentNodeId = k.parentId;
      const D = J(S, {
        id: ee("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: k.parentId,
        streaming: !0,
        allowThinking: m.value && T.value,
        webSearchStatus: y.value ? "searching" : void 0,
        promptTokens: _(Ne())
      });
      l.value = !0, Jl(), await z({ force: !0 });
      const B = performance.now();
      try {
        await ei(D), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await qt();
      } catch (X) {
        if (!d.value) {
          const ie = Ao(X);
          rt.msg(`${t("localAi.chatFailed")}: ${ie}`, "error"), D.error = ie, D.interrupted = !!D.content.trim(), D.interrupted || (D.content = ie), S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await qt();
        }
        D.streaming = !1, V.delete(D.id), D.elapsedMs = performance.now() - B;
      } finally {
        l.value = !1, p.value = null, cs(), await z();
      }
    };
    return yt(async () => {
      await Ye(), Q = setInterval(() => {
        qe().catch(
          (f) => on.warn("[LocalAI] status timer failed", f)
        );
      }, 8e3);
    }), Ae(T, (f) => {
      f || (m.value = !1);
    }), Ua(() => {
      Q && clearInterval(Q), he !== null && (window.cancelAnimationFrame(he), he = null), p.value && gs(p.value), ye.clear(), be.clear(), V.clear(), cs();
    }), (f, S) => (R(), j(
      "main",
      {
        class: q([
          "local-ai-chat-shell",
          c(a) ? "local-ai-chat-shell--sidebar-collapsed" : ""
        ])
      },
      [
        g(
          "aside",
          {
            class: q([
              "chat-sidebar",
              c(a) ? "chat-sidebar--collapsed" : ""
            ])
          },
          [
            g("header", pT, [
              g("div", mT, [
                g(
                  "h2",
                  null,
                  M(c(t)("localAi.chatTitle")),
                  1
                  /* TEXT */
                )
              ]),
              g("button", {
                class: "icon-action-btn sidebar-collapse-btn",
                type: "button",
                title: c(a) ? c(t)("localAi.expandSidebar") : c(t)("localAi.collapseSidebar"),
                "aria-pressed": c(a),
                onClick: S[0] || (S[0] = (k) => a.value = !c(a))
              }, [
                F(c(ui), {
                  theme: "outline",
                  size: "17"
                })
              ], 8, hT)
            ]),
            g("div", gT, [
              g("button", {
                class: "sidebar-nav-item",
                type: "button",
                onClick: pr
              }, [
                F(c(ds), {
                  theme: "outline",
                  size: "18"
                }),
                g(
                  "span",
                  null,
                  M(c(t)("localAi.newChat")),
                  1
                  /* TEXT */
                )
              ]),
              g("label", vT, [
                F(c(fs), {
                  theme: "outline",
                  size: "18"
                }),
                bt(g("input", {
                  "onUpdate:modelValue": S[1] || (S[1] = (k) => uo(n) ? n.value = k : null),
                  placeholder: c(t)("localAi.searchHistory")
                }, null, 8, bT), [
                  [Dr, c(n)]
                ])
              ])
            ]),
            g("section", yT, [
              g("div", _T, [
                g(
                  "div",
                  wT,
                  M(c(t)("localAi.recent")),
                  1
                  /* TEXT */
                ),
                g("button", {
                  class: "icon-action-btn",
                  type: "button",
                  title: c(t)("plugins.refresh"),
                  onClick: Ye
                }, [
                  F(c(di), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, kT)
              ]),
              c(O).length ? (R(), j("div", ST, [
                (R(!0), j(
                  ct,
                  null,
                  Rn(c(O), (k) => (R(), j("div", {
                    key: k.id,
                    class: q([
                      "chat-list-item",
                      c(o) === k.id ? "active" : ""
                    ]),
                    role: "button",
                    tabindex: "0",
                    onClick: (D) => Wn(k.id),
                    onKeydown: _n(et((D) => Wn(k.id), ["prevent"]), ["enter"])
                  }, [
                    g(
                      "span",
                      ET,
                      M(k.title),
                      1
                      /* TEXT */
                    ),
                    g(
                      "span",
                      AT,
                      M(zf(k.updatedAt)),
                      1
                      /* TEXT */
                    ),
                    g("button", {
                      class: "chat-item-delete",
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: et((D) => Cr(k.id), ["stop"])
                    }, [
                      F(c(ia), {
                        theme: "outline",
                        size: "13"
                      })
                    ], 8, CT)
                  ], 42, TT))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (R(), j(
                "div",
                IT,
                M(c(t)("common.empty")),
                1
                /* TEXT */
              ))
            ]),
            g("footer", LT, [
              g("button", {
                class: "sidebar-settings-btn",
                type: "button",
                onClick: Ff
              }, [
                F(c(Au), {
                  theme: "outline",
                  size: "16"
                }),
                g(
                  "span",
                  null,
                  M(c(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              g("div", OT, [
                g(
                  "span",
                  {
                    class: q([
                      "status-pill",
                      c(w)?.healthy ? "ready" : "stopped"
                    ])
                  },
                  [
                    S[9] || (S[9] = g(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    )),
                    an(
                      " " + M(c(Qe)),
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
        g("section", xT, [
          c(a) ? (R(), j("button", {
            key: 0,
            class: "panel-sidebar-toggle",
            type: "button",
            title: c(t)("localAi.expandSidebar"),
            onClick: S[2] || (S[2] = (k) => a.value = !1)
          }, [
            F(c(ui), {
              theme: "outline",
              size: "17"
            })
          ], 8, RT)) : ne("v-if", !0),
          g(
            "div",
            {
              ref_key: "messageListRef",
              ref: E,
              class: "message-list",
              onScroll: A
            },
            [
              c(st).length ? ne("v-if", !0) : (R(), j("div", NT, [
                F(c(fi), {
                  theme: "outline",
                  size: "28"
                }),
                g(
                  "div",
                  PT,
                  M(c(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                g(
                  "div",
                  $T,
                  M(c(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])),
              (R(!0), j(
                ct,
                null,
                Rn(c(ut), (k, D) => (R(), j(
                  ct,
                  {
                    key: k.message.id
                  },
                  [
                    Xt(D) ? (R(), j("div", MT, [
                      g(
                        "span",
                        null,
                        M(Ut(k.message)),
                        1
                        /* TEXT */
                      )
                    ])) : ne("v-if", !0),
                    g(
                      "article",
                      {
                        class: q(["message-row", `message-row--${k.message.role}`])
                      },
                      [
                        g("div", DT, [
                          k.message.role === "assistant" ? (R(), me(c(fi), {
                            key: 0,
                            theme: "outline",
                            size: "18"
                          })) : (R(), j(
                            "span",
                            FT,
                            M(c(t)("localAi.youShort")),
                            1
                            /* TEXT */
                          ))
                        ]),
                        g("div", zT, [
                          k.message.role === "user" ? (R(), j(
                            ct,
                            { key: 0 },
                            [
                              g("div", BT, [
                                k.message.content ? (R(), j(
                                  "div",
                                  VT,
                                  M(k.message.content),
                                  1
                                  /* TEXT */
                                )) : ne("v-if", !0),
                                k.message.attachments?.length ? (R(), j("div", UT, [
                                  (R(!0), j(
                                    ct,
                                    null,
                                    Rn(k.message.attachments, (B) => (R(), j(
                                      "div",
                                      {
                                        key: B.id,
                                        class: q([
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
                                          }, null, 8, HT)
                                        ], 8, jT)) : (R(), j(
                                          "span",
                                          WT,
                                          M(B.type === "text" ? "TXT" : "FILE"),
                                          1
                                          /* TEXT */
                                        )),
                                        B.type === "image" && B.dataUrl ? ne("v-if", !0) : (R(), j(
                                          "span",
                                          GT,
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
                              k.message.streaming ? ne("v-if", !0) : (R(), j("div", KT, [
                                g("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (B) => ni(k.message)
                                }, [
                                  F(c(ii), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, qT),
                                g("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (B) => oi(k.message)
                                }, [
                                  F(c(ds), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, YT),
                                g("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (B) => ri(k.message.id)
                                }, [
                                  F(c(ia), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, ZT)
                              ]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (R(), j(
                            ct,
                            { key: 1 },
                            [
                              g("div", XT, [
                                g(
                                  "span",
                                  null,
                                  M(c(At)),
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? (R(), j(
                                  "small",
                                  QT,
                                  M(Mt(k.message)),
                                  1
                                  /* TEXT */
                                )) : ne("v-if", !0)
                              ]),
                              g(
                                "div",
                                {
                                  class: q(["assistant-card", {
                                    "assistant-card--streaming": k.message.streaming
                                  }])
                                },
                                [
                                  k.message.content ? (R(), j("div", JT, [
                                    k.message.allowThinking && Xr(k.message.content) ? (R(), j("details", {
                                      key: 0,
                                      class: "reasoning-panel",
                                      open: k.message.streaming && Nr(k.message)
                                    }, [
                                      g("summary", null, [
                                        g("span", t2, [
                                          F(c(li), {
                                            theme: "outline",
                                            size: "14"
                                          }),
                                          an(
                                            " " + M($(k.message)),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        k.message.streaming ? (R(), j(
                                          "small",
                                          n2,
                                          M(Nr(k.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                          1
                                          /* TEXT */
                                        )) : ne("v-if", !0)
                                      ]),
                                      g("div", {
                                        class: "message-content markdown-body",
                                        onClick: hn,
                                        innerHTML: Ve(k.message, "reasoning")
                                      }, null, 8, r2)
                                    ], 8, e2)) : ne("v-if", !0),
                                    qn(k.message.content) ? (R(), j("div", {
                                      key: 1,
                                      class: "message-content markdown-body",
                                      onClick: hn,
                                      innerHTML: Ve(k.message, "answer")
                                    }, null, 8, o2)) : ne("v-if", !0)
                                  ])) : (R(), j(
                                    "div",
                                    a2,
                                    M(Cn(k.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              ),
                              Pr(k.message) || k.message.webSearchResults?.length ? (R(), j("div", s2, [
                                g("div", l2, [
                                  F(c(fs), {
                                    theme: "outline",
                                    size: "14"
                                  }),
                                  g(
                                    "span",
                                    null,
                                    M(Pr(k.message)),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                k.message.webSearchResults?.length ? (R(), j("div", i2, [
                                  (R(!0), j(
                                    ct,
                                    null,
                                    Rn(k.message.webSearchResults, (B, X) => (R(), j("a", {
                                      key: `${B.url}-${X}`,
                                      class: "web-search-source",
                                      href: B.url,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      title: B.url
                                    }, [
                                      g(
                                        "span",
                                        null,
                                        M(X + 1),
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
                                    ], 8, c2))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])) : ne("v-if", !0)
                              ])) : ne("v-if", !0),
                              k.message.content ? (R(), j("div", u2, [
                                g(
                                  "span",
                                  d2,
                                  M(c(t)("localAi.contextLabel")) + ": " + M(gn(k.message).context) + "/" + M(gn(k.message).contextMax) + " (" + M(gn(k.message).contextPercent) + "%) ",
                                  1
                                  /* TEXT */
                                ),
                                g(
                                  "span",
                                  f2,
                                  M(c(t)("localAi.outputLabel")) + ": " + M(gn(k.message).output) + "/" + M(gn(k.message).outputMax),
                                  1
                                  /* TEXT */
                                ),
                                g(
                                  "span",
                                  p2,
                                  M(gn(k.message).seconds) + "s ",
                                  1
                                  /* TEXT */
                                ),
                                g(
                                  "span",
                                  m2,
                                  M(gn(k.message).speed) + " t/s ",
                                  1
                                  /* TEXT */
                                ),
                                k.message.streaming ? ne("v-if", !0) : (R(), j(
                                  "span",
                                  h2,
                                  M(Te(k.message)),
                                  1
                                  /* TEXT */
                                ))
                              ])) : ne("v-if", !0),
                              pt(k.message) ? (R(), j(
                                "div",
                                g2,
                                M(pt(k.message)),
                                1
                                /* TEXT */
                              )) : ne("v-if", !0),
                              k.message.streaming ? ne("v-if", !0) : (R(), j("div", v2, [
                                k.siblingLeafNodeIds.length > 1 ? (R(), j("div", {
                                  key: 0,
                                  class: "message-version-switcher",
                                  title: ai(k),
                                  "aria-label": ai(k)
                                }, [
                                  g("button", {
                                    type: "button",
                                    disabled: k.siblingCurrentIndex <= 0,
                                    title: c(t)("localAi.previousVersion"),
                                    onClick: (B) => si(k, -1)
                                  }, " ‹ ", 8, y2),
                                  g(
                                    "span",
                                    null,
                                    M(k.siblingCurrentIndex + 1) + " / " + M(k.siblingLeafNodeIds.length),
                                    1
                                    /* TEXT */
                                  ),
                                  g("button", {
                                    type: "button",
                                    disabled: k.siblingCurrentIndex >= k.siblingLeafNodeIds.length - 1,
                                    title: c(t)("localAi.nextVersion"),
                                    onClick: (B) => si(k, 1)
                                  }, " › ", 8, _2)
                                ], 8, b2)) : ne("v-if", !0),
                                g("button", {
                                  type: "button",
                                  title: c(t)("common.copy"),
                                  onClick: (B) => ni(k.message)
                                }, [
                                  F(c(ii), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, w2),
                                k.message.role === "assistant" ? (R(), j("button", {
                                  key: 1,
                                  type: "button",
                                  title: c(t)("localAi.regenerate"),
                                  onClick: (B) => Uf(k.message.id)
                                }, [
                                  F(c(di), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, k2)) : ne("v-if", !0),
                                k.message.role === "assistant" ? (R(), j("button", {
                                  key: 2,
                                  type: "button",
                                  title: c(t)("localAi.branchChat"),
                                  onClick: (B) => Vf(k.message.id)
                                }, [
                                  F(c(pp), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, S2)) : ne("v-if", !0),
                                g("button", {
                                  type: "button",
                                  title: c(t)("common.edit"),
                                  onClick: (B) => oi(k.message)
                                }, [
                                  F(c(ds), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, T2),
                                g("button", {
                                  type: "button",
                                  title: c(t)("common.delete"),
                                  onClick: (B) => ri(k.message.id)
                                }, [
                                  F(c(ia), {
                                    theme: "outline",
                                    size: "14"
                                  })
                                ], 8, E2)
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
            onClick: Se
          }, [
            F(c(ci), {
              theme: "outline",
              size: "15"
            }),
            g(
              "span",
              null,
              M(c(t)("localAi.jumpToLatest")),
              1
              /* TEXT */
            )
          ], 8, A2)) : ne("v-if", !0),
          g(
            "form",
            {
              class: q([
                "chat-input-card",
                c(v) ? "chat-input-card--focused" : ""
              ]),
              onDragover: S[6] || (S[6] = et(() => {
              }, ["prevent"])),
              onDrop: et(Lr, ["prevent"]),
              onSubmit: et(ti, ["prevent"]),
              onFocusin: S[7] || (S[7] = (k) => v.value = !0),
              onFocusout: S[8] || (S[8] = (k) => v.value = !1)
            },
            [
              g(
                "input",
                {
                  ref_key: "fileInputRef",
                  ref: x,
                  class: "attachment-input",
                  type: "file",
                  multiple: "",
                  accept: ".txt,.md,.json,.csv,.html,.css,.js,.ts,.tsx,.vue,.rs,.py,.java,.go,.yaml,.yml,.toml,.xml,.log,image/png,image/jpeg,image/webp,.pdf,.doc,.docx,.xls,.xlsx",
                  onChange: Ir
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ),
              c(i).length ? (R(), j("div", C2, [
                (R(!0), j(
                  ct,
                  null,
                  Rn(c(i), (k) => (R(), j(
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
                      }, null, 8, I2)) : (R(), j(
                        "span",
                        L2,
                        M(k.type === "text" ? "TXT" : "FILE"),
                        1
                        /* TEXT */
                      )),
                      g("span", O2, [
                        g(
                          "strong",
                          null,
                          M(k.name),
                          1
                          /* TEXT */
                        ),
                        g(
                          "small",
                          null,
                          M(c(rg)(k.size)) + " · " + M(xr(k)),
                          1
                          /* TEXT */
                        )
                      ]),
                      g("button", {
                        type: "button",
                        title: c(t)("common.delete"),
                        onClick: (D) => Or(k.id)
                      }, [
                        F(c(ia), {
                          theme: "outline",
                          size: "12"
                        })
                      ], 8, x2)
                    ],
                    2
                    /* CLASS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : ne("v-if", !0),
              bt(g("textarea", {
                "onUpdate:modelValue": S[3] || (S[3] = (k) => uo(s) ? s.value = k : null),
                class: "chat-input",
                rows: "2",
                placeholder: c(t)("localAi.chatPlaceholder"),
                onKeydown: Mf,
                onPaste: mr
              }, null, 40, R2), [
                [Dr, c(s)]
              ]),
              g("div", N2, [
                g("div", P2, [
                  g("button", {
                    class: "composer-tool-btn",
                    type: "button",
                    title: c(t)("localAi.addAttachment"),
                    onClick: Gn
                  }, [
                    F(c(mp), {
                      theme: "outline",
                      size: "16"
                    })
                  ], 8, $2),
                  g("label", M2, [
                    bt(g("select", {
                      "onUpdate:modelValue": S[4] || (S[4] = (k) => uo(I) ? I.value = k : null),
                      disabled: c(l) || !c(dt).length,
                      onChange: Eo
                    }, [
                      (R(!0), j(
                        ct,
                        null,
                        Rn(c(dt), (k) => (R(), j("option", {
                          key: k,
                          value: k
                        }, M(Ge(k)), 9, F2))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      c(dt).length ? ne("v-if", !0) : (R(), j(
                        "option",
                        z2,
                        M(c(At)),
                        1
                        /* TEXT */
                      ))
                    ], 40, D2), [
                      [ip, c(I)]
                    ]),
                    F(c(ci), {
                      theme: "outline",
                      size: "14"
                    })
                  ]),
                  g("button", {
                    class: q([
                      "composer-tool-btn",
                      "composer-tool-btn--wide",
                      c(y) ? "composer-tool-btn--active" : ""
                    ]),
                    type: "button",
                    title: c(y) ? c(t)("localAi.webSearchEnabled") : c(t)("localAi.webSearchDisabled"),
                    "aria-pressed": c(y),
                    onClick: is
                  }, [
                    F(c(fs), {
                      theme: "outline",
                      size: "15"
                    }),
                    g(
                      "span",
                      null,
                      M(c(t)("localAi.webSearchTitle")),
                      1
                      /* TEXT */
                    )
                  ], 10, B2),
                  c(T) ? (R(), j("button", {
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
                    F(c(li), {
                      theme: "outline",
                      size: "15"
                    }),
                    g(
                      "span",
                      null,
                      M(c(t)("localAi.reasoningTitle")),
                      1
                      /* TEXT */
                    )
                  ], 10, V2)) : ne("v-if", !0)
                ]),
                g("div", U2, [
                  S[10] || (S[10] = g(
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
                    onClick: $f
                  }, [
                    F(c(gp), {
                      theme: "filled",
                      size: "11"
                    })
                  ], 8, j2)) : (R(), j("button", {
                    key: 1,
                    class: "send-btn",
                    type: "submit",
                    disabled: !c(Ce),
                    title: c(t)("localAi.send"),
                    "aria-label": c(t)("localAi.send")
                  }, [
                    F(c(hp), {
                      theme: "outline",
                      size: "15"
                    })
                  ], 8, H2))
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
}), Ql = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, rE = /* @__PURE__ */ Ql(nE, [["__scopeId", "data-v-04279c9f"]]), oE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rE
}, Symbol.toStringTag, { value: "Module" }));
async function wu(e = {}) {
  return typeof e == "object" && Object.freeze(e), await xt("plugin:dialog|open", { options: e });
}
const aE = ["disabled"], sE = {
  key: 0,
  class: "custom-button__loading"
}, lE = /* @__PURE__ */ ce({
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
      e.loading ? (R(), j("div", sE, r[1] || (r[1] = [
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
      Ee(n.$slots, "default", {}, void 0, !0)
    ], 10, aE));
  }
}), gr = /* @__PURE__ */ Ql(lE, [["__scopeId", "data-v-9497085f"]]), iE = { class: "settings-panel local-ai-settings-shell" }, cE = { class: "local-ai-hero panel-card" }, uE = { class: "panel-title" }, dE = { class: "hero-desc" }, fE = { class: "header-actions" }, pE = {
  key: 0,
  class: "settings-grid"
}, mE = { class: "summary-panel panel-card" }, hE = { class: "status-strip" }, gE = { class: "memory-card" }, vE = { class: "memory-card__header" }, bE = { class: "memory-metrics" }, yE = { class: "bottleneck-row" }, _E = { class: "summary-card" }, wE = { class: "summary-card__title" }, kE = { class: "summary-card__desc" }, SE = { class: "service-controls" }, TE = { class: "service-url" }, EE = { class: "summary-card" }, AE = { class: "summary-card__title" }, CE = { class: "summary-card__desc" }, IE = { class: "summary-meta" }, LE = { class: "form-panel panel-card" }, OE = { class: "settings-section" }, xE = { class: "settings-section__header" }, RE = { class: "field-stack" }, NE = ["title"], PE = { class: "path-control" }, $E = ["title"], ME = ["title"], DE = ["title"], FE = { class: "path-control" }, zE = ["placeholder"], BE = { class: "settings-section grid-two" }, VE = { class: "settings-section__header" }, UE = { class: "param-grid" }, jE = ["title"], HE = ["title"], WE = ["title"], GE = ["title"], KE = ["title"], qE = ["title"], YE = { class: "settings-section grid-two" }, ZE = { class: "settings-section__header" }, XE = { class: "switch-grid" }, QE = ["title"], JE = ["title"], eA = ["title"], tA = { class: "settings-section grid-two" }, nA = { class: "settings-section__header" }, rA = { class: "switch-grid switch-grid--two" }, oA = ["title"], aA = ["title"], sA = ["title"], lA = ["title"], iA = { class: "settings-section grid-two" }, cA = { class: "settings-section__header" }, uA = { class: "param-grid param-grid--three" }, dA = ["title"], fA = ["title"], pA = ["title"], mA = ["title"], hA = ["title"], gA = ["title"], vA = ["title"], bA = ["title"], yA = { class: "settings-section grid-two" }, _A = { class: "settings-section__header" }, wA = { class: "field-stack" }, kA = ["title"], SA = ["placeholder"], TA = { class: "param-grid param-grid--three" }, EA = ["title"], AA = ["title"], CA = ["title"], IA = { class: "field-stack" }, LA = ["title"], OA = ["placeholder"], xA = { class: "settings-footer" }, RA = ["title"], NA = /* @__PURE__ */ ce({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Qo(), n = K(null), r = K(null), o = K(null), a = K(null), s = K(!1), i = K(!1), l = K(!1), u = K(!1), d = K(!1);
    let m = null;
    const h = N(() => !!a.value?.selectedModelPath), y = N(() => !!n.value?.mmprojPath), v = N({
      get: () => n.value?.modelPath ?? "",
      set: (Y) => {
        n.value && (n.value.modelPath = Y || void 0);
      }
    }), b = N({
      get: () => n.value?.mmprojPath ?? "",
      set: (Y) => {
        n.value && (n.value.mmprojPath = Y || void 0);
      }
    }), L = N(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), p = N(
      () => h.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), C = N(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), P = (Y) => Y.split(/[\\/]+/).pop() ?? Y, I = N(() => {
      const G = P(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return G ? Number(G[1]) : 4;
    }), w = N(() => {
      const Y = n.value;
      if (!Y)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const G = Math.max(1.4, I.value * 0.92), De = Math.min(1, Math.max(0, Y.gpuLayers) / 32), Be = Y.ctxSize / 8192 * 0.38 * (Y.kvOffload ? 1 : 0.12), ge = Y.batchSize / 512 * 0.18, _e = G * De + Be + ge, J = G * (1 - De) + Y.ctxSize / 8192 * 0.22, Ce = _e + J, Qe = Y.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : Y.ctxSize >= 32768 || Y.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: _e.toFixed(2),
        totalGb: Ce.toFixed(2),
        bottleneck: Qe
      };
    }), E = (Y) => t(`localAi.paramHints.${Y}`), x = async () => {
      r.value = await Uh();
    }, Z = async () => {
      o.value = await ud();
    }, Q = async () => {
      n.value && (a.value = await cd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, se = async () => {
      s.value = !0;
      try {
        n.value = await id(), await Promise.all([x(), Q(), Z()]);
      } catch (Y) {
        on.error("[LocalAI] refresh settings failed", Y), rt.msg(`${t("localAi.refreshFailed")}: ${Y}`, "error");
      } finally {
        s.value = !1;
      }
    }, he = async () => {
      if (n.value)
        try {
          await Sa(n.value);
        } catch (Y) {
          on.warn("[LocalAI] autosave failed", Y);
        }
    }, le = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Sa(n.value), await Promise.all([x(), Q(), Z()]), rt.msg(t("localAi.configSaved"));
        } catch (Y) {
          rt.msg(`${t("localAi.configSaveFailed")}: ${Y}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, ye = async () => {
      const Y = await wu({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !Y || Array.isArray(Y) || !n.value || (n.value.modelDir = Y, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await Q());
    }, be = async () => {
      const Y = await wu({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !Y || Array.isArray(Y) || !n.value || (n.value.runtimePath = Y, await he(), await x());
    }, V = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Sa(n.value), o.value = await jh(n.value), rt.msg(t("localAi.serviceStarted"));
        } catch (Y) {
          rt.msg(`${t("localAi.serviceStartFailed")}: ${Y}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, ee = async () => {
      u.value = !0;
      try {
        await le(), o.value = await dd(), rt.msg(t("localAi.serviceRestarted"));
      } catch (Y) {
        rt.msg(`${t("localAi.serviceRestartFailed")}: ${Y}`, "error");
      } finally {
        u.value = !1;
      }
    }, W = async () => {
      d.value = !0;
      try {
        await Hh(), await Z(), rt.msg(t("localAi.serviceStoppedMsg"));
      } catch (Y) {
        rt.msg(`${t("localAi.serviceStopFailed")}: ${Y}`, "error");
      } finally {
        d.value = !1;
      }
    }, pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return yt(async () => {
      await se(), m = setInterval(() => {
        Z().catch(
          (Y) => on.warn("[LocalAI] status refresh failed", Y)
        );
      }, 5e3);
    }), Ua(() => {
      m && clearInterval(m);
    }), (Y, G) => {
      const De = OS, Be = LS, ge = pS, _e = DS;
      return R(), j("div", iE, [
        g("header", cE, [
          g("div", null, [
            g(
              "h3",
              uE,
              M(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            g(
              "p",
              dE,
              M(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          g("div", fE, [
            F(c(gr), {
              size: "small",
              plain: "",
              onClick: pe
            }, {
              default: fe(() => [
                an(
                  M(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            F(c(gr), {
              size: "small",
              loading: c(s),
              onClick: se
            }, {
              default: fe(() => [
                an(
                  M(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (R(), j("main", pE, [
          g("aside", mE, [
            g("div", hE, [
              g(
                "div",
                {
                  class: q(["status-item", { ready: c(r)?.available }])
                },
                [
                  G[30] || (G[30] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    M(c(L)),
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
                  class: q(["status-item", { ready: c(h) }])
                },
                [
                  G[31] || (G[31] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    M(c(p)),
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
                  class: q(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  G[32] || (G[32] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    M(c(C)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            g("section", gE, [
              g("div", vE, [
                g(
                  "span",
                  null,
                  M(c(t)("localAi.estimatedMemory")),
                  1
                  /* TEXT */
                ),
                g(
                  "small",
                  null,
                  M(c(t)("localAi.estimateBeta")),
                  1
                  /* TEXT */
                )
              ]),
              g("div", bE, [
                g("div", null, [
                  G[33] || (G[33] = g(
                    "span",
                    null,
                    "GPU",
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "b",
                    null,
                    M(c(w).gpuGb) + " GB",
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.total")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    M(c(w).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", yE, [
                g(
                  "span",
                  null,
                  M(c(t)("localAi.bottleneck")),
                  1
                  /* TEXT */
                ),
                g(
                  "b",
                  null,
                  M(c(w).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            g("section", _E, [
              g(
                "div",
                wE,
                M(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              g(
                "div",
                kE,
                M(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              g("div", SE, [
                F(c(gr), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: V
                }, {
                  default: fe(() => [
                    an(
                      M(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(gr), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: ee
                }, {
                  default: fe(() => [
                    an(
                      M(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(gr), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(d),
                  disabled: !c(o)?.running,
                  onClick: W
                }, {
                  default: fe(() => [
                    an(
                      M(c(t)("localAi.stopService")),
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
                TE,
                M(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            g("section", EE, [
              g(
                "div",
                AE,
                M(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              g(
                "div",
                CE,
                M(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              g("div", IE, [
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    M(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    M(c(h) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    M(c(v) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    M(c(b) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    M(c(y) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    M(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          g("section", LE, [
            g("div", OE, [
              g("div", xE, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", RE, [
                g("label", {
                  class: "field-row",
                  title: E("modelDir")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  g("div", PE, [
                    bt(g(
                      "input",
                      {
                        "onUpdate:modelValue": G[0] || (G[0] = (J) => c(n).modelDir = J),
                        class: "text-input",
                        onChange: Q
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Dr, c(n).modelDir]
                    ]),
                    F(c(gr), {
                      size: "small",
                      plain: "",
                      onClick: ye
                    }, {
                      default: fe(() => [
                        an(
                          M(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, NE),
                g("label", {
                  class: "field-row",
                  title: E("mainModel")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  F(Be, {
                    modelValue: c(v),
                    "onUpdate:modelValue": G[1] || (G[1] = (J) => uo(v) ? v.value = J : null),
                    class: "field-select",
                    clearable: "",
                    onChange: he
                  }, {
                    default: fe(() => [
                      (R(!0), j(
                        ct,
                        null,
                        Rn(c(a)?.mainModels ?? [], (J) => (R(), me(De, {
                          key: J,
                          label: P(J),
                          value: J
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, $E),
                g("label", {
                  class: "field-row",
                  title: E("mmprojModel")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  F(Be, {
                    modelValue: c(b),
                    "onUpdate:modelValue": G[2] || (G[2] = (J) => uo(b) ? b.value = J : null),
                    class: "field-select",
                    clearable: "",
                    onChange: he
                  }, {
                    default: fe(() => [
                      (R(!0), j(
                        ct,
                        null,
                        Rn(c(a)?.mmprojModels ?? [], (J) => (R(), me(De, {
                          key: J,
                          label: P(J),
                          value: J
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, ME),
                g("label", {
                  class: "field-row",
                  title: E("runtimePath")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  g("div", FE, [
                    bt(g("input", {
                      "onUpdate:modelValue": G[3] || (G[3] = (J) => c(n).runtimePath = J),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, zE), [
                      [Dr, c(n).runtimePath]
                    ]),
                    F(c(gr), {
                      size: "small",
                      plain: "",
                      onClick: be
                    }, {
                      default: fe(() => [
                        an(
                          M(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, DE)
              ])
            ]),
            g("div", BE, [
              g("div", VE, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", UE, [
                g("label", {
                  class: "number-field",
                  title: E("ctxSize")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": G[4] || (G[4] = (J) => c(n).ctxSize = J),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, jE),
                g("label", {
                  class: "number-field",
                  title: E("gpuLayers")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": G[5] || (G[5] = (J) => c(n).gpuLayers = J),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, HE),
                g("label", {
                  class: "number-field",
                  title: E("threads")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": G[6] || (G[6] = (J) => c(n).threads = J),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, WE),
                g("label", {
                  class: "number-field",
                  title: E("batchSize")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": G[7] || (G[7] = (J) => c(n).batchSize = J),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, GE),
                g("label", {
                  class: "number-field",
                  title: E("ubatchSize")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": G[8] || (G[8] = (J) => c(n).ubatchSize = J),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, KE),
                g("label", {
                  class: "number-field",
                  title: E("mainGpu")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": G[9] || (G[9] = (J) => c(n).mainGpu = J),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, qE)
              ])
            ]),
            g("div", YE, [
              g("div", ZE, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", XE, [
                g("label", {
                  title: E("flashAttn")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  F(_e, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": G[10] || (G[10] = (J) => c(n).flashAttn = J)
                  }, null, 8, ["modelValue"])
                ], 8, QE),
                g("label", {
                  title: E("kvOffload")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  F(_e, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": G[11] || (G[11] = (J) => c(n).kvOffload = J)
                  }, null, 8, ["modelValue"])
                ], 8, JE),
                g("label", {
                  title: E("mmap")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  F(_e, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": G[12] || (G[12] = (J) => c(n).mmap = J)
                  }, null, 8, ["modelValue"])
                ], 8, eA)
              ])
            ]),
            g("div", tA, [
              g("div", nA, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", rA, [
                g("label", {
                  title: E("autoStart")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  F(_e, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": G[13] || (G[13] = (J) => c(n).autoStartOnRequest = J)
                  }, null, 8, ["modelValue"])
                ], 8, oA),
                g("label", {
                  title: E("keepAlive")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  F(_e, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": G[14] || (G[14] = (J) => c(n).keepAlive = J)
                  }, null, 8, ["modelValue"])
                ], 8, aA),
                g("label", {
                  class: "number-field",
                  title: E("idleTimeout")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": G[15] || (G[15] = (J) => c(n).idleTimeoutMinutes = J),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, sA),
                g("label", {
                  class: "number-field",
                  title: E("requestTimeout")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": G[16] || (G[16] = (J) => c(n).requestTimeoutSecs = J),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, lA)
              ])
            ]),
            g("div", iA, [
              g("div", cA, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", uA, [
                g("label", {
                  class: "number-field",
                  title: E("temperature")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": G[17] || (G[17] = (J) => c(n).temperature = J),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, dA),
                g("label", {
                  class: "number-field",
                  title: E("topP")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": G[18] || (G[18] = (J) => c(n).topP = J),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, fA),
                g("label", {
                  class: "number-field",
                  title: E("topK")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": G[19] || (G[19] = (J) => c(n).topK = J),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, pA),
                g("label", {
                  class: "number-field",
                  title: E("minP")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": G[20] || (G[20] = (J) => c(n).minP = J),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, mA),
                g("label", {
                  class: "number-field",
                  title: E("repeatPenalty")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": G[21] || (G[21] = (J) => c(n).repeatPenalty = J),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, hA),
                g("label", {
                  class: "number-field",
                  title: E("repeatLastN")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": G[22] || (G[22] = (J) => c(n).repeatLastN = J),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, gA),
                g("label", {
                  class: "number-field",
                  title: E("maxTokens")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": G[23] || (G[23] = (J) => c(n).maxTokens = J),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, vA),
                g("label", {
                  class: "number-field",
                  title: E("port")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": G[24] || (G[24] = (J) => c(n).port = J),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, bA)
              ])
            ]),
            g("div", yA, [
              g("div", _A, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    M(c(t)("localAi.webSearch")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    M(c(t)("localAi.webSearchDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", wA, [
                g("label", {
                  class: "field-row",
                  title: E("webSearchBaseUrl")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.webSearchBaseUrl")),
                    1
                    /* TEXT */
                  ),
                  bt(g("input", {
                    "onUpdate:modelValue": G[25] || (G[25] = (J) => c(n).webSearchBaseUrl = J),
                    class: "text-input",
                    placeholder: c(t)("localAi.webSearchBaseUrlPlaceholder")
                  }, null, 8, SA), [
                    [Dr, c(n).webSearchBaseUrl]
                  ])
                ], 8, kA)
              ]),
              g("div", TA, [
                g("label", {
                  class: "number-field",
                  title: E("webSearchMaxResults")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.webSearchMaxResults")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).webSearchMaxResults,
                    "onUpdate:modelValue": G[26] || (G[26] = (J) => c(n).webSearchMaxResults = J),
                    min: 1,
                    max: 10,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, EA),
                g("label", {
                  class: "number-field",
                  title: E("webSearchTimeoutSecs")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.webSearchTimeoutSecs")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).webSearchTimeoutSecs,
                    "onUpdate:modelValue": G[27] || (G[27] = (J) => c(n).webSearchTimeoutSecs = J),
                    min: 3,
                    max: 60,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AA),
                g("label", {
                  class: "number-field",
                  title: E("webSearchSafeSearch")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.webSearchSafeSearch")),
                    1
                    /* TEXT */
                  ),
                  F(ge, {
                    modelValue: c(n).webSearchSafeSearch,
                    "onUpdate:modelValue": G[28] || (G[28] = (J) => c(n).webSearchSafeSearch = J),
                    min: 0,
                    max: 2,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, CA)
              ]),
              g("div", IA, [
                g("label", {
                  class: "field-row",
                  title: E("webSearchLanguage")
                }, [
                  g(
                    "span",
                    null,
                    M(c(t)("localAi.webSearchLanguage")),
                    1
                    /* TEXT */
                  ),
                  bt(g("input", {
                    "onUpdate:modelValue": G[29] || (G[29] = (J) => c(n).webSearchLanguage = J),
                    class: "text-input",
                    placeholder: c(t)("localAi.webSearchLanguagePlaceholder")
                  }, null, 8, OA), [
                    [Dr, c(n).webSearchLanguage]
                  ])
                ], 8, LA)
              ])
            ]),
            g("div", xA, [
              F(c(gr), {
                type: "primary",
                loading: c(i),
                onClick: le
              }, {
                default: fe(() => [
                  an(
                    M(c(t)("common.save")),
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
              }, M(c(o).commandLine), 9, RA)) : ne("v-if", !0)
            ])
          ])
        ])) : ne("v-if", !0)
      ]);
    };
  }
}), PA = /* @__PURE__ */ Ql(NA, [["__scopeId", "data-v-af36537e"]]), $A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PA
}, Symbol.toStringTag, { value: "Module" }));
export {
  FA as activate,
  FA as default
};
