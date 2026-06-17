var sf = Object.defineProperty;
var lf = (e, t, n) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ue = (e, t, n) => lf(e, typeof t != "symbol" ? t + "" : t, n);
import * as Wa from "vue";
import { inject as ze, createVNode as D, defineAsyncComponent as cf, ref as U, shallowRef as hr, computed as I, watch as Ee, onMounted as ut, onUnmounted as Sa, defineComponent as ie, h as qc, Text as Yc, Fragment as bt, createElementBlock as H, openBlock as R, normalizeClass as q, createCommentVNode as oe, renderSlot as Se, createElementVNode as b, getCurrentInstance as Ht, unref as c, watchEffect as Zc, readonly as $s, getCurrentScope as uf, onScopeDispose as df, nextTick as lt, isRef as Zr, warn as ff, provide as Nn, mergeProps as Xr, toRef as qn, useAttrs as pf, useSlots as mf, normalizeStyle as Lt, createBlock as de, withCtx as ue, resolveDynamicComponent as jt, withModifiers as qe, toDisplayString as F, onBeforeUnmount as Dn, Transition as io, withDirectives as yt, vShow as nr, reactive as xr, onActivated as hf, onUpdated as Xc, cloneVNode as gf, Comment as vf, Teleport as bf, onBeforeMount as yf, onDeactivated as _f, createTextVNode as Xt, withKeys as en, createSlots as wf, toRaw as kf, toRefs as Ms, resolveComponent as Or, resolveDirective as Tf, toHandlerKey as Sf, renderList as Kn, vModelText as Oo, shallowReactive as Ef, isVNode as Lo, render as ca, vModelSelect as Af } from "vue";
var Cf = {
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
function Of() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Lf(e, t, n) {
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
var If = Symbol("icon-context");
function Gt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Of(), i = ze(If, Cf);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, y = a.fill, h = a.spin, g = Lf(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: m,
          fill: y
        }, i), A = [i.prefix + "-icon"];
        return A.push(i.prefix + "-icon-" + e), t && i.rtl && A.push(i.prefix + "-icon-rtl"), h && A.push(i.prefix + "-icon-spin"), D("span", {
          class: A.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const Nl = Gt("add", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $l = Gt("brain", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), xf = Gt("copy", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ga = Gt("delete", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rf = Gt("dislike", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ml = Gt("down", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pf = Gt("edit", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nf = Gt("like", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $f = Gt("message", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Dl = Gt("refresh", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fl = Gt("robot", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), D("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), D("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), D("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Mf = Gt("search", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Df = Gt("send", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cs = Gt("setting-two", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ff = Gt("square", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), kE = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => r2)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: cs,
    component: cf(() => Promise.resolve().then(() => yE))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function zf(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const zl = typeof window < "u", $r = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Bf = (e, t, n) => Vf({ l: e, k: t, s: n }), Vf = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Tt = (e) => typeof e == "number" && isFinite(e), jf = (e) => Ds(e) === "[object Date]", ua = (e) => Ds(e) === "[object RegExp]", Ea = (e) => Re(e) && Object.keys(e).length === 0, It = Object.assign, Uf = Object.create, He = (e = null) => Uf(e);
let Bl;
const ra = () => Bl || (Bl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : He());
function Vl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function jl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Hf(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${jl(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${jl(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Wf = Object.prototype.hasOwnProperty;
function mn(e, t) {
  return Wf.call(e, t);
}
const ct = Array.isArray, nt = (e) => typeof e == "function", ce = (e) => typeof e == "string", it = (e) => typeof e == "boolean", Pe = (e) => e !== null && typeof e == "object", Gf = (e) => Pe(e) && nt(e.then) && nt(e.catch), Qc = Object.prototype.toString, Ds = (e) => Qc.call(e), Re = (e) => Ds(e) === "[object Object]", Kf = (e) => e == null ? "" : ct(e) || Re(e) && e.toString === Qc ? JSON.stringify(e, null, 2) : String(e);
function Fs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Wo = (e) => !Pe(e) || ct(e);
function oa(e, t) {
  if (Wo(e) || Wo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Pe(r[a]) && !Pe(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : He()), Wo(o[a]) || Wo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function qf(e, t, n) {
  return { line: e, column: t, offset: n };
}
function us(e, t, n) {
  return { start: e, end: t };
}
const Me = {
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
}, Yf = 17;
function Aa(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Zf(e) {
  throw e;
}
const Tn = " ", Xf = "\r", Mt = `
`, Qf = "\u2028", Jf = "\u2029";
function ep(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (L) => t[L] === Xf && t[L + 1] === Mt, i = (L) => t[L] === Mt, l = (L) => t[L] === Jf, u = (L) => t[L] === Qf, d = (L) => s(L) || i(L) || l(L) || u(L), p = () => n, m = () => r, y = () => o, h = () => a, g = (L) => s(L) || l(L) || u(L) ? Mt : t[L], A = () => g(n), f = () => g(n + a);
  function C() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function x() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function E() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(L = 0) {
    a = L;
  }
  function T() {
    const L = n + a;
    for (; L !== n; )
      C();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: y,
    peekOffset: h,
    charAt: g,
    currentChar: A,
    currentPeek: f,
    next: C,
    peek: x,
    reset: E,
    resetPeek: _,
    skipToPeek: T
  };
}
const jn = void 0, tp = ".", Ul = "'", np = "tokenizer";
function rp(e, t = {}) {
  const n = t.location !== !1, r = ep(e), o = () => r.index(), a = () => qf(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function p(k, O, B, ...te) {
    const Oe = u();
    if (O.column += B, O.offset += B, d) {
      const me = n ? us(Oe.startLoc, O) : null, S = Aa(k, me, {
        domain: np,
        args: te
      });
      d(S);
    }
  }
  function m(k, O, B) {
    k.endLoc = a(), k.currentType = O;
    const te = { type: O };
    return n && (te.loc = us(k.startLoc, k.endLoc)), B != null && (te.value = B), te;
  }
  const y = (k) => m(
    k,
    13
    /* TokenTypes.EOF */
  );
  function h(k, O) {
    return k.currentChar() === O ? (k.next(), O) : (p(Me.EXPECTED_TOKEN, a(), 0, O), "");
  }
  function g(k) {
    let O = "";
    for (; k.currentPeek() === Tn || k.currentPeek() === Mt; )
      O += k.currentPeek(), k.peek();
    return O;
  }
  function A(k) {
    const O = g(k);
    return k.skipToPeek(), O;
  }
  function f(k) {
    if (k === jn)
      return !1;
    const O = k.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O === 95;
  }
  function C(k) {
    if (k === jn)
      return !1;
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function x(k, O) {
    const { currentType: B } = O;
    if (B !== 2)
      return !1;
    g(k);
    const te = f(k.currentPeek());
    return k.resetPeek(), te;
  }
  function E(k, O) {
    const { currentType: B } = O;
    if (B !== 2)
      return !1;
    g(k);
    const te = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), Oe = C(te);
    return k.resetPeek(), Oe;
  }
  function _(k, O) {
    const { currentType: B } = O;
    if (B !== 2)
      return !1;
    g(k);
    const te = k.currentPeek() === Ul;
    return k.resetPeek(), te;
  }
  function T(k, O) {
    const { currentType: B } = O;
    if (B !== 7)
      return !1;
    g(k);
    const te = k.currentPeek() === ".";
    return k.resetPeek(), te;
  }
  function L(k, O) {
    const { currentType: B } = O;
    if (B !== 8)
      return !1;
    g(k);
    const te = f(k.currentPeek());
    return k.resetPeek(), te;
  }
  function Y(k, O) {
    const { currentType: B } = O;
    if (!(B === 7 || B === 11))
      return !1;
    g(k);
    const te = k.currentPeek() === ":";
    return k.resetPeek(), te;
  }
  function Z(k, O) {
    const { currentType: B } = O;
    if (B !== 9)
      return !1;
    const te = () => {
      const me = k.currentPeek();
      return me === "{" ? f(k.peek()) : me === "@" || me === "|" || me === ":" || me === "." || me === Tn || !me ? !1 : me === Mt ? (k.peek(), te()) : re(k, !1);
    }, Oe = te();
    return k.resetPeek(), Oe;
  }
  function le(k) {
    g(k);
    const O = k.currentPeek() === "|";
    return k.resetPeek(), O;
  }
  function re(k, O = !0) {
    const B = (Oe = !1, me = "") => {
      const S = k.currentPeek();
      return S === "{" || S === "@" || !S ? Oe : S === "|" ? !(me === Tn || me === Mt) : S === Tn ? (k.peek(), B(!0, Tn)) : S === Mt ? (k.peek(), B(!0, Mt)) : !0;
    }, te = B();
    return O && k.resetPeek(), te;
  }
  function ae(k, O) {
    const B = k.currentChar();
    return B === jn ? jn : O(B) ? (k.next(), B) : null;
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
    return ae(k, be);
  }
  function V(k) {
    const O = k.charCodeAt(0);
    return O >= 97 && O <= 122 || // a-z
    O >= 65 && O <= 90 || // A-Z
    O >= 48 && O <= 57 || // 0-9
    O === 95 || // _
    O === 36 || // $
    O === 45;
  }
  function Q(k) {
    return ae(k, V);
  }
  function j(k) {
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57;
  }
  function fe(k) {
    return ae(k, j);
  }
  function K(k) {
    const O = k.charCodeAt(0);
    return O >= 48 && O <= 57 || // 0-9
    O >= 65 && O <= 70 || // A-F
    O >= 97 && O <= 102;
  }
  function G(k) {
    return ae(k, K);
  }
  function xe(k) {
    let O = "", B = "";
    for (; O = fe(k); )
      B += O;
    return B;
  }
  function Be(k) {
    let O = "";
    for (; ; ) {
      const B = k.currentChar();
      if (B === "{" || B === "}" || B === "@" || B === "|" || !B)
        break;
      if (B === Tn || B === Mt)
        if (re(k))
          O += B, k.next();
        else {
          if (le(k))
            break;
          O += B, k.next();
        }
      else
        O += B, k.next();
    }
    return O;
  }
  function ge(k) {
    A(k);
    let O = "", B = "";
    for (; O = Q(k); )
      B += O;
    const te = k.currentChar();
    if (te && te !== "}" && te !== jn && te !== Tn && te !== Mt && te !== "　") {
      const Oe = st(k);
      return p(Me.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, B + Oe), B + Oe;
    }
    return k.currentChar() === jn && p(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), B;
  }
  function ve(k) {
    A(k);
    let O = "";
    return k.currentChar() === "-" ? (k.next(), O += `-${xe(k)}`) : O += xe(k), k.currentChar() === jn && p(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), O;
  }
  function J(k) {
    return k !== Ul && k !== Mt;
  }
  function Ae(k) {
    A(k), h(k, "'");
    let O = "", B = "";
    for (; O = ae(k, J); )
      O === "\\" ? B += Ne(k) : B += O;
    const te = k.currentChar();
    return te === Mt || te === jn ? (p(Me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), te === Mt && (k.next(), h(k, "'")), B) : (h(k, "'"), B);
  }
  function Ne(k) {
    const O = k.currentChar();
    switch (O) {
      case "\\":
      case "'":
        return k.next(), `\\${O}`;
      case "u":
        return he(k, O, 4);
      case "U":
        return he(k, O, 6);
      default:
        return p(Me.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, O), "";
    }
  }
  function he(k, O, B) {
    h(k, O);
    let te = "";
    for (let Oe = 0; Oe < B; Oe++) {
      const me = G(k);
      if (!me) {
        p(Me.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${O}${te}${k.currentChar()}`);
        break;
      }
      te += me;
    }
    return `\\${O}${te}`;
  }
  function at(k) {
    return k !== "{" && k !== "}" && k !== Tn && k !== Mt;
  }
  function st(k) {
    A(k);
    let O = "", B = "";
    for (; O = ae(k, at); )
      B += O;
    return B;
  }
  function Ze(k) {
    let O = "", B = "";
    for (; O = ye(k); )
      B += O;
    return B;
  }
  function Et(k) {
    const O = (B) => {
      const te = k.currentChar();
      return te === "{" || te === "@" || te === "|" || te === "(" || te === ")" || !te || te === Tn ? B : (B += te, k.next(), O(B));
    };
    return O("");
  }
  function et(k) {
    A(k);
    const O = h(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return A(k), O;
  }
  function gt(k, O) {
    let B = null;
    switch (k.currentChar()) {
      case "{":
        return O.braceNest >= 1 && p(Me.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), k.next(), B = m(
          O,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(k), O.braceNest++, B;
      case "}":
        return O.braceNest > 0 && O.currentType === 2 && p(Me.EMPTY_PLACEHOLDER, a(), 0), k.next(), B = m(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), O.braceNest--, O.braceNest > 0 && A(k), O.inLinked && O.braceNest === 0 && (O.inLinked = !1), B;
      case "@":
        return O.braceNest > 0 && p(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), B = _t(k, O) || y(O), O.braceNest = 0, B;
      default: {
        let Oe = !0, me = !0, S = !0;
        if (le(k))
          return O.braceNest > 0 && p(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), B = m(O, 1, et(k)), O.braceNest = 0, O.inLinked = !1, B;
        if (O.braceNest > 0 && (O.currentType === 4 || O.currentType === 5 || O.currentType === 6))
          return p(Me.UNTERMINATED_CLOSING_BRACE, a(), 0), O.braceNest = 0, Xe(k, O);
        if (Oe = x(k, O))
          return B = m(O, 4, ge(k)), A(k), B;
        if (me = E(k, O))
          return B = m(O, 5, ve(k)), A(k), B;
        if (S = _(k, O))
          return B = m(O, 6, Ae(k)), A(k), B;
        if (!Oe && !me && !S)
          return B = m(O, 12, st(k)), p(Me.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, B.value), A(k), B;
        break;
      }
    }
    return B;
  }
  function _t(k, O) {
    const { currentType: B } = O;
    let te = null;
    const Oe = k.currentChar();
    switch ((B === 7 || B === 8 || B === 11 || B === 9) && (Oe === Mt || Oe === Tn) && p(Me.INVALID_LINKED_FORMAT, a(), 0), Oe) {
      case "@":
        return k.next(), te = m(
          O,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), O.inLinked = !0, te;
      case ".":
        return A(k), k.next(), m(
          O,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(k), k.next(), m(
          O,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return le(k) ? (te = m(O, 1, et(k)), O.braceNest = 0, O.inLinked = !1, te) : T(k, O) || Y(k, O) ? (A(k), _t(k, O)) : L(k, O) ? (A(k), m(O, 11, Ze(k))) : Z(k, O) ? (A(k), Oe === "{" ? gt(k, O) || te : m(O, 10, Et(k))) : (B === 7 && p(Me.INVALID_LINKED_FORMAT, a(), 0), O.braceNest = 0, O.inLinked = !1, Xe(k, O));
    }
  }
  function Xe(k, O) {
    let B = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (O.braceNest > 0)
      return gt(k, O) || y(O);
    if (O.inLinked)
      return _t(k, O) || y(O);
    switch (k.currentChar()) {
      case "{":
        return gt(k, O) || y(O);
      case "}":
        return p(Me.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), m(
          O,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return _t(k, O) || y(O);
      default: {
        if (le(k))
          return B = m(O, 1, et(k)), O.braceNest = 0, O.inLinked = !1, B;
        if (re(k))
          return m(O, 0, Be(k));
        break;
      }
    }
    return B;
  }
  function wt() {
    const { currentType: k, offset: O, startLoc: B, endLoc: te } = l;
    return l.lastType = k, l.lastOffset = O, l.lastStartLoc = B, l.lastEndLoc = te, l.offset = o(), l.startLoc = a(), r.currentChar() === jn ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : Xe(r, l);
  }
  return {
    nextToken: wt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const op = "parser", ap = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function sp(e, t, n) {
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
function lp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, C, x, E, ..._) {
    const T = f.currentPosition();
    if (T.offset += E, T.column += E, n) {
      const L = t ? us(x, T) : null, Y = Aa(C, L, {
        domain: op,
        args: _
      });
      n(Y);
    }
  }
  function o(f, C, x) {
    const E = { type: f };
    return t && (E.start = C, E.end = C, E.loc = { start: x, end: x }), E;
  }
  function a(f, C, x, E) {
    t && (f.end = C, f.loc && (f.loc.end = x));
  }
  function s(f, C) {
    const x = f.context(), E = o(3, x.offset, x.startLoc);
    return E.value = C, a(E, f.currentOffset(), f.currentPosition()), E;
  }
  function i(f, C) {
    const x = f.context(), { lastOffset: E, lastStartLoc: _ } = x, T = o(5, E, _);
    return T.index = parseInt(C, 10), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function l(f, C) {
    const x = f.context(), { lastOffset: E, lastStartLoc: _ } = x, T = o(4, E, _);
    return T.key = C, f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function u(f, C) {
    const x = f.context(), { lastOffset: E, lastStartLoc: _ } = x, T = o(9, E, _);
    return T.value = C.replace(ap, sp), f.nextToken(), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function d(f) {
    const C = f.nextToken(), x = f.context(), { lastOffset: E, lastStartLoc: _ } = x, T = o(8, E, _);
    return C.type !== 11 ? (r(f, Me.UNEXPECTED_EMPTY_LINKED_MODIFIER, x.lastStartLoc, 0), T.value = "", a(T, E, _), {
      nextConsumeToken: C,
      node: T
    }) : (C.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Sn(C)), T.value = C.value || "", a(T, f.currentOffset(), f.currentPosition()), {
      node: T
    });
  }
  function p(f, C) {
    const x = f.context(), E = o(7, x.offset, x.startLoc);
    return E.value = C, a(E, f.currentOffset(), f.currentPosition()), E;
  }
  function m(f) {
    const C = f.context(), x = o(6, C.offset, C.startLoc);
    let E = f.nextToken();
    if (E.type === 8) {
      const _ = d(f);
      x.modifier = _.node, E = _.nextConsumeToken || f.nextToken();
    }
    switch (E.type !== 9 && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(E)), E = f.nextToken(), E.type === 2 && (E = f.nextToken()), E.type) {
      case 10:
        E.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(E)), x.key = p(f, E.value || "");
        break;
      case 4:
        E.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(E)), x.key = l(f, E.value || "");
        break;
      case 5:
        E.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(E)), x.key = i(f, E.value || "");
        break;
      case 6:
        E.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(E)), x.key = u(f, E.value || "");
        break;
      default: {
        r(f, Me.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const _ = f.context(), T = o(7, _.offset, _.startLoc);
        return T.value = "", a(T, _.offset, _.startLoc), x.key = T, a(x, _.offset, _.startLoc), {
          nextConsumeToken: E,
          node: x
        };
      }
    }
    return a(x, f.currentOffset(), f.currentPosition()), {
      node: x
    };
  }
  function y(f) {
    const C = f.context(), x = C.currentType === 1 ? f.currentOffset() : C.offset, E = C.currentType === 1 ? C.endLoc : C.startLoc, _ = o(2, x, E);
    _.items = [];
    let T = null;
    do {
      const Z = T || f.nextToken();
      switch (T = null, Z.type) {
        case 0:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(Z)), _.items.push(s(f, Z.value || ""));
          break;
        case 5:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(Z)), _.items.push(i(f, Z.value || ""));
          break;
        case 4:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(Z)), _.items.push(l(f, Z.value || ""));
          break;
        case 6:
          Z.value == null && r(f, Me.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Sn(Z)), _.items.push(u(f, Z.value || ""));
          break;
        case 7: {
          const le = m(f);
          _.items.push(le.node), T = le.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const L = C.currentType === 1 ? C.lastOffset : f.currentOffset(), Y = C.currentType === 1 ? C.lastEndLoc : f.currentPosition();
    return a(_, L, Y), _;
  }
  function h(f, C, x, E) {
    const _ = f.context();
    let T = E.items.length === 0;
    const L = o(1, C, x);
    L.cases = [], L.cases.push(E);
    do {
      const Y = y(f);
      T || (T = Y.items.length === 0), L.cases.push(Y);
    } while (_.currentType !== 13);
    return T && r(f, Me.MUST_HAVE_MESSAGES_IN_PLURAL, x, 0), a(L, f.currentOffset(), f.currentPosition()), L;
  }
  function g(f) {
    const C = f.context(), { offset: x, startLoc: E } = C, _ = y(f);
    return C.currentType === 13 ? _ : h(f, x, E, _);
  }
  function A(f) {
    const C = rp(f, It({}, e)), x = C.context(), E = o(0, x.offset, x.startLoc);
    return t && E.loc && (E.loc.source = f), E.body = g(C), e.onCacheKey && (E.cacheKey = e.onCacheKey(f)), x.currentType !== 13 && r(C, Me.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, f[x.offset] || ""), a(E, C.currentOffset(), C.currentPosition()), E;
  }
  return { parse: A };
}
function Sn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ip(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Hl(e, t) {
  for (let n = 0; n < e.length; n++)
    zs(e[n], t);
}
function zs(e, t) {
  switch (e.type) {
    case 1:
      Hl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Hl(e.items, t);
      break;
    case 6: {
      zs(e.key, t), t.helper(
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
function cp(e, t = {}) {
  const n = ip(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && zs(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function up(e) {
  const t = e.body;
  return t.type === 2 ? Wl(t) : t.cases.forEach((n) => Wl(n)), e;
}
function Wl(e) {
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
      e.static = Fs(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Kr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Kr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Kr(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Kr(n[r]);
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
      Kr(t.key), t.k = t.key, delete t.key, t.modifier && (Kr(t.modifier), t.m = t.modifier, delete t.modifier);
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
function dp(e, t) {
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
  function l(g, A) {
    s.code += g;
  }
  function u(g, A = !0) {
    const f = A ? r : "";
    l(o ? f + "  ".repeat(g) : f);
  }
  function d(g = !0) {
    const A = ++s.indentLevel;
    g && u(A);
  }
  function p(g = !0) {
    const A = --s.indentLevel;
    g && u(A);
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
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function fp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Qr(e, t.key), t.modifier ? (e.push(", "), Qr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function pp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Qr(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function mp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Qr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function hp(e, t) {
  t.body ? Qr(e, t.body) : e.push("null");
}
function Qr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      hp(e, t);
      break;
    case 1:
      mp(e, t);
      break;
    case 2:
      pp(e, t);
      break;
    case 6:
      fp(e, t);
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
const gp = (e, t = {}) => {
  const n = ce(t.mode) ? t.mode : "normal", r = ce(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = dp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Fs(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), Qr(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function vp(e, t = {}) {
  const n = It({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = lp(n).parse(e);
  return r ? (a && up(i), o && Kr(i), { ast: i, code: "" }) : (cp(i, n), gp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function bp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ra().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function xn(e) {
  return Pe(e) && Bs(e) === 0 && (mn(e, "b") || mn(e, "body"));
}
const Jc = ["b", "body"];
function yp(e) {
  return br(e, Jc);
}
const eu = ["c", "cases"];
function _p(e) {
  return br(e, eu, []);
}
const tu = ["s", "static"];
function wp(e) {
  return br(e, tu);
}
const nu = ["i", "items"];
function kp(e) {
  return br(e, nu, []);
}
const ru = ["t", "type"];
function Bs(e) {
  return br(e, ru);
}
const ou = ["v", "value"];
function Go(e, t) {
  const n = br(e, ou);
  if (n != null)
    return n;
  throw Io(t);
}
const au = ["m", "modifier"];
function Tp(e) {
  return br(e, au);
}
const su = ["k", "key"];
function Sp(e) {
  const t = br(e, su);
  if (t)
    return t;
  throw Io(
    6
    /* NodeTypes.Linked */
  );
}
function br(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (mn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const lu = [
  ...Jc,
  ...eu,
  ...tu,
  ...nu,
  ...su,
  ...au,
  ...ou,
  ...ru
];
function Io(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Ka(e) {
  return (n) => Ep(n, e);
}
function Ep(e, t) {
  const n = yp(t);
  if (n == null)
    throw Io(
      0
      /* NodeTypes.Resource */
    );
  if (Bs(n) === 1) {
    const a = _p(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Gl(e, i)
    ], []));
  } else
    return Gl(e, n);
}
function Gl(e, t) {
  const n = wp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = kp(t).reduce((o, a) => [...o, ds(e, a)], []);
    return e.normalize(r);
  }
}
function ds(e, t) {
  const n = Bs(t);
  switch (n) {
    case 3:
      return Go(t, n);
    case 9:
      return Go(t, n);
    case 4: {
      const r = t;
      if (mn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (mn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Io(n);
    }
    case 5: {
      const r = t;
      if (mn(r, "i") && Tt(r.i))
        return e.interpolate(e.list(r.i));
      if (mn(r, "index") && Tt(r.index))
        return e.interpolate(e.list(r.index));
      throw Io(n);
    }
    case 6: {
      const r = t, o = Tp(r), a = Sp(r);
      return e.linked(ds(e, a), o ? ds(e, o) : void 0, e.type);
    }
    case 7:
      return Go(t, n);
    case 8:
      return Go(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Ap = (e) => e;
let Ko = He();
function Cp(e, t = {}) {
  let n = !1;
  const r = t.onError || Zf;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...vp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Op(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ce(e)) {
    it(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Ap)(e), o = Ko[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = Cp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Ka(a);
    return s ? i : Ko[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Ko[n];
      return r || (Ko[n] = Ka(e));
    } else
      return Ka(e);
  }
}
const Yn = {
  INVALID_ARGUMENT: Yf,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Lp = 24;
function Zn(e) {
  return Aa(e, null, void 0);
}
function Vs(e, t) {
  return t.locale != null ? Kl(t.locale) : Kl(e.locale);
}
let qa;
function Kl(e) {
  if (ce(e))
    return e;
  if (nt(e)) {
    if (e.resolvedOnce && qa != null)
      return qa;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Gf(t))
        throw Zn(Yn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return qa = t;
    } else
      throw Zn(Yn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Zn(Yn.NOT_SUPPORT_LOCALE_TYPE);
}
function Ip(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ct(t) ? t : Pe(t) ? Object.keys(t) : ce(t) ? [t] : [n]
  ])];
}
function iu(e, t, n) {
  const r = ce(n) ? n : da, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; ct(s); )
      s = ql(a, s, t);
    const i = ct(t) || !Re(t) ? t : t.default ? t.default : null;
    s = ce(i) ? [i] : i, ct(s) && ql(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function ql(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && it(r); o++) {
    const a = t[o];
    ce(a) && (r = xp(e, t[o], n));
  }
  return r;
}
function xp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Rp(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Rp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ct(n) || Re(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const yr = [];
yr[
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
yr[
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
yr[
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
yr[
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
yr[
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
yr[
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
yr[
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
const Pp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Np(e) {
  return Pp.test(e);
}
function $p(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Mp(e) {
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
function Dp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Np(t) ? $p(t) : "*" + t;
}
function Fp(e) {
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
      if (o = 0, s === void 0 || (s = Dp(s), s === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const h = e[n + 1];
    if (r === 5 && h === "'" || r === 6 && h === '"')
      return n++, i = "\\" + h, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && y())) {
      if (l = Mp(a), p = yr[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = m[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Yl = /* @__PURE__ */ new Map();
function zp(e, t) {
  return Pe(e) ? e[t] : null;
}
function Bp(e, t) {
  if (!Pe(e))
    return null;
  let n = Yl.get(t);
  if (n || (n = Fp(t), n && Yl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (lu.includes(s) && xn(o))
      return null;
    const i = o[s];
    if (i === void 0 || nt(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Vp = "11.2.2", Ca = -1, da = "en-US", Zl = "", Xl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function jp() {
  return {
    upper: (e, t) => t === "text" && ce(e) ? e.toUpperCase() : t === "vnode" && Pe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ce(e) ? e.toLowerCase() : t === "vnode" && Pe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ce(e) ? Xl(e) : t === "vnode" && Pe(e) && "__v_isVNode" in e ? Xl(e.children) : e
  };
}
let cu;
function Up(e) {
  cu = e;
}
let uu;
function Hp(e) {
  uu = e;
}
let du;
function Wp(e) {
  du = e;
}
let fu = null;
const Ql = (e) => {
  fu = e;
}, Gp = () => fu;
let Jl = 0;
function Kp(e = {}) {
  const t = nt(e.onWarn) ? e.onWarn : zf, n = ce(e.version) ? e.version : Vp, r = ce(e.locale) || nt(e.locale) ? e.locale : da, o = nt(r) ? da : r, a = ct(e.fallbackLocale) || Re(e.fallbackLocale) || ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Re(e.messages) ? e.messages : Ya(o), i = Re(e.datetimeFormats) ? e.datetimeFormats : Ya(o), l = Re(e.numberFormats) ? e.numberFormats : Ya(o), u = It(He(), e.modifiers, jp()), d = e.pluralRules || He(), p = nt(e.missing) ? e.missing : null, m = it(e.missingWarn) || ua(e.missingWarn) ? e.missingWarn : !0, y = it(e.fallbackWarn) || ua(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, A = nt(e.postTranslation) ? e.postTranslation : null, f = Re(e.processor) ? e.processor : null, C = it(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, E = nt(e.messageCompiler) ? e.messageCompiler : cu, _ = nt(e.messageResolver) ? e.messageResolver : uu || zp, T = nt(e.localeFallbacker) ? e.localeFallbacker : du || Ip, L = Pe(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, Z = Pe(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), le = Pe(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), re = Pe(Y.__meta) ? Y.__meta : {};
  Jl++;
  const ae = {
    version: n,
    cid: Jl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: d,
    missing: p,
    missingWarn: m,
    fallbackWarn: y,
    fallbackFormat: h,
    unresolving: g,
    postTranslation: A,
    processor: f,
    warnHtmlMessage: C,
    escapeParameter: x,
    messageCompiler: E,
    messageResolver: _,
    localeFallbacker: T,
    fallbackContext: L,
    onWarn: t,
    __meta: re
  };
  return ae.datetimeFormats = i, ae.numberFormats = l, ae.__datetimeFormatters = Z, ae.__numberFormatters = le, ae;
}
const Ya = (e) => ({ [e]: He() });
function js(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return ce(i) ? i : t;
  } else
    return t;
}
function po(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function qp(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Yp(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (qp(e, t[r]))
      return !0;
  return !1;
}
function ei(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, p] = fs(...t), m = it(d.missingWarn) ? d.missingWarn : e.missingWarn;
  it(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, h = Vs(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ce(l) || l === "")
    return new Intl.DateTimeFormat(h, p).format(u);
  let A = {}, f, C = null;
  const x = "datetime format";
  for (let T = 0; T < g.length && (f = g[T], A = n[f] || {}, C = A[l], !Re(C)); T++)
    js(e, l, f, m, x);
  if (!Re(C) || !ce(f))
    return r ? Ca : l;
  let E = `${f}__${l}`;
  Ea(p) || (E = `${E}__${JSON.stringify(p)}`);
  let _ = i.get(E);
  return _ || (_ = new Intl.DateTimeFormat(f, It({}, C, p)), i.set(E, _)), y ? _.formatToParts(u) : _.format(u);
}
const pu = [
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
function fs(...e) {
  const [t, n, r, o] = e, a = He();
  let s = He(), i;
  if (ce(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Zn(Yn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Zn(Yn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (jf(t)) {
    if (isNaN(t.getTime()))
      throw Zn(Yn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Tt(t))
    i = t;
  else
    throw Zn(Yn.INVALID_ARGUMENT);
  return ce(n) ? a.key = n : Re(n) && Object.keys(n).forEach((l) => {
    pu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ce(r) ? a.locale = r : Re(r) && (s = r), Re(o) && (s = o), [a.key || "", i, a, s];
}
function ti(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function ni(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, p] = ps(...t), m = it(d.missingWarn) ? d.missingWarn : e.missingWarn;
  it(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, h = Vs(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ce(l) || l === "")
    return new Intl.NumberFormat(h, p).format(u);
  let A = {}, f, C = null;
  const x = "number format";
  for (let T = 0; T < g.length && (f = g[T], A = n[f] || {}, C = A[l], !Re(C)); T++)
    js(e, l, f, m, x);
  if (!Re(C) || !ce(f))
    return r ? Ca : l;
  let E = `${f}__${l}`;
  Ea(p) || (E = `${E}__${JSON.stringify(p)}`);
  let _ = i.get(E);
  return _ || (_ = new Intl.NumberFormat(f, It({}, C, p)), i.set(E, _)), y ? _.formatToParts(u) : _.format(u);
}
const mu = [
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
function ps(...e) {
  const [t, n, r, o] = e, a = He();
  let s = He();
  if (!Tt(t))
    throw Zn(Yn.INVALID_ARGUMENT);
  const i = t;
  return ce(n) ? a.key = n : Re(n) && Object.keys(n).forEach((l) => {
    mu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ce(r) ? a.locale = r : Re(r) && (s = r), Re(o) && (s = o), [a.key || "", i, a, s];
}
function ri(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Zp = (e) => e, Xp = (e) => "", Qp = "text", Jp = (e) => e.length === 0 ? "" : Fs(e), em = Kf;
function oi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function tm(e) {
  const t = Tt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Tt(e.named.count) || Tt(e.named.n)) ? Tt(e.named.count) ? e.named.count : Tt(e.named.n) ? e.named.n : t : t;
}
function nm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function rm(e = {}) {
  const t = e.locale, n = tm(e), r = Pe(e.pluralRules) && ce(t) && nt(e.pluralRules[t]) ? e.pluralRules[t] : oi, o = Pe(e.pluralRules) && ce(t) && nt(e.pluralRules[t]) ? oi : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || He();
  Tt(e.pluralIndex) && nm(n, l);
  const u = (f) => l[f];
  function d(f, C) {
    const x = nt(e.messages) ? e.messages(f, !!C) : Pe(e.messages) ? e.messages[f] : !1;
    return x || (e.parent ? e.parent.message(f) : Xp);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : Zp, m = Re(e.processor) && nt(e.processor.normalize) ? e.processor.normalize : Jp, y = Re(e.processor) && nt(e.processor.interpolate) ? e.processor.interpolate : em, h = Re(e.processor) && ce(e.processor.type) ? e.processor.type : Qp, A = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...C) => {
      const [x, E] = C;
      let _ = "text", T = "";
      C.length === 1 ? Pe(x) ? (T = x.modifier || T, _ = x.type || _) : ce(x) && (T = x || T) : C.length === 2 && (ce(x) && (T = x || T), ce(E) && (_ = E || _));
      const L = d(f, !0)(A), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && ct(L) && T ? L[0] : L
      );
      return T ? p(T)(Y, _) : Y;
    },
    message: d,
    type: h,
    interpolate: y,
    normalize: m,
    values: It(He(), s, l)
  };
  return A;
}
const ai = () => "", Qn = (e) => nt(e);
function si(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = ms(...t), d = it(u.missingWarn) ? u.missingWarn : e.missingWarn, p = it(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = it(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, h = ce(u.default) || it(u.default) ? it(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (ce(h) || nt(h)), A = Vs(e, u);
  m && om(u);
  let [f, C, x] = y ? [
    l,
    A,
    i[A] || He()
  ] : hu(e, l, A, s, p, d), E = f, _ = l;
  if (!y && !(ce(E) || xn(E) || Qn(E)) && g && (E = h, _ = E), !y && (!(ce(E) || xn(E) || Qn(E)) || !ce(C)))
    return o ? Ca : l;
  let T = !1;
  const L = () => {
    T = !0;
  }, Y = Qn(E) ? E : gu(e, l, C, E, _, L);
  if (T)
    return E;
  const Z = lm(e, C, x, u), le = rm(Z), re = am(e, Y, le);
  let ae = r ? r(re, l) : re;
  return m && ce(ae) && (ae = Hf(ae)), ae;
}
function om(e) {
  ct(e.list) ? e.list = e.list.map((t) => ce(t) ? Vl(t) : t) : Pe(e.named) && Object.keys(e.named).forEach((t) => {
    ce(e.named[t]) && (e.named[t] = Vl(e.named[t]));
  });
}
function hu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let p = He(), m, y = null;
  const h = "translate";
  for (let g = 0; g < d.length && (m = d[g], p = s[m] || He(), (y = l(p, t)) === null && (y = p[t]), !(ce(y) || xn(y) || Qn(y))); g++)
    if (!Yp(m, d)) {
      const A = js(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        h
      );
      A !== t && (y = A);
    }
  return [y, m, p];
}
function gu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Qn(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, sm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function am(e, t, n) {
  return t(n);
}
function ms(...e) {
  const [t, n, r] = e, o = He();
  if (!ce(t) && !Tt(t) && !Qn(t) && !xn(t))
    throw Zn(Yn.INVALID_ARGUMENT);
  const a = Tt(t) ? String(t) : (Qn(t), t);
  return Tt(n) ? o.plural = n : ce(n) ? o.default = n : Re(n) && !Ea(n) ? o.named = n : ct(n) && (o.list = n), Tt(r) ? o.plural = r : ce(r) ? o.default = r : Re(r) && It(o, r), [a, o];
}
function sm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Bf(t, n, s)
  };
}
function lm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, h) => {
      let g = s(n, y);
      if (g == null && (d || h)) {
        const [, , A] = hu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          l,
          u
        );
        g = s(A, y);
      }
      if (ce(g) || xn(g)) {
        let A = !1;
        const C = gu(e, y, t, g, y, () => {
          A = !0;
        });
        return A ? ai : C;
      } else return Qn(g) ? g : ai;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Tt(r.plural) && (m.pluralIndex = r.plural), m;
}
bp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const im = "11.2.2";
function cm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ra().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ra().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ra().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Jr = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Lp,
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
function xo(e, ...t) {
  return Aa(e, null, void 0);
}
const hs = /* @__PURE__ */ $r("__translateVNode"), gs = /* @__PURE__ */ $r("__datetimeParts"), vs = /* @__PURE__ */ $r("__numberParts"), um = $r("__setPluralRules"), vu = /* @__PURE__ */ $r("__injectWithOption"), bs = /* @__PURE__ */ $r("__dispose");
function Ro(e) {
  if (!Pe(e) || xn(e))
    return e;
  for (const t in e)
    if (mn(e, t))
      if (!t.includes("."))
        Pe(e[t]) && Ro(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = He()), !Pe(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (xn(o) ? lu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !xn(o)) {
          const s = o[n[r]];
          Pe(s) && Ro(s);
        }
      }
  return e;
}
function bu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Re(n) ? n : ct(r) ? He() : { [e]: He() };
  if (ct(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || He(), oa(u, s[l])) : oa(u, s);
    } else
      ce(i) && oa(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      mn(s, i) && Ro(s[i]);
  return s;
}
function dm(e) {
  return e.type;
}
function fm(e, t, n) {
  let r = Pe(t.messages) ? t.messages : He();
  "__i18nGlobal" in n && (r = bu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Pe(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Pe(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function li(e) {
  return D(Yc, null, e, 0);
}
function yu() {
  return "currentInstance" in Wa ? Wa["currentInstance"] : Wa.getCurrentInstance();
}
const ii = () => [], pm = () => !1;
let ci = 0;
function ui(e) {
  return (t, n, r, o) => e(n, r, yu() || void 0, o);
}
function mm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = zl ? U : hr;
  let s = it(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ce(e.locale) ? e.locale : da
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ce(e.fallbackLocale) || ct(e.fallbackLocale) || Re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(bu(i.value, e)), d = a(Re(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(Re(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : it(e.missingWarn) || ua(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : it(e.fallbackWarn) || ua(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : it(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, A = nt(e.missing) ? e.missing : null, f = nt(e.missing) ? ui(e.missing) : null, C = nt(e.postTranslation) ? e.postTranslation : null, x = t ? t.warnHtmlMessage : it(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const _ = t ? t.modifiers : Re(e.modifiers) ? e.modifiers : {};
  let T = e.pluralRules || t && t.pluralRules, L;
  L = (() => {
    r && Ql(null);
    const S = {
      version: im,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: _,
      pluralRules: T,
      missing: f === null ? void 0 : f,
      missingWarn: m,
      fallbackWarn: y,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: x,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = d.value, S.numberFormats = p.value, S.__datetimeFormatters = Re(L) ? L.__datetimeFormatters : void 0, S.__numberFormatters = Re(L) ? L.__numberFormatters : void 0;
    const z = Kp(S);
    return r && Ql(z), z;
  })(), po(L, i.value, l.value);
  function Z() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      p.value
    ];
  }
  const le = I({
    get: () => i.value,
    set: (S) => {
      L.locale = S, i.value = S;
    }
  }), re = I({
    get: () => l.value,
    set: (S) => {
      L.fallbackLocale = S, l.value = S, po(L, i.value, S);
    }
  }), ae = I(() => u.value), be = /* @__PURE__ */ I(() => d.value), ye = /* @__PURE__ */ I(() => p.value);
  function V() {
    return nt(C) ? C : null;
  }
  function Q(S) {
    C = S, L.postTranslation = S;
  }
  function j() {
    return A;
  }
  function fe(S) {
    S !== null && (f = ui(S)), A = S, L.missing = f;
  }
  const K = (S, z, we, Le, Qe, At) => {
    Z();
    let We;
    try {
      r || (L.fallbackContext = t ? Gp() : void 0), We = S(L);
    } finally {
      r || (L.fallbackContext = void 0);
    }
    if (we !== "translate exists" && // for not `te` (e.g `t`)
    Tt(We) && We === Ca || we === "translate exists" && !We) {
      const [_n, lr] = z();
      return t && h ? Le(t) : Qe(_n);
    } else {
      if (At(We))
        return We;
      throw xo(Jr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function G(...S) {
    return K((z) => Reflect.apply(si, null, [z, ...S]), () => ms(...S), "translate", (z) => Reflect.apply(z.t, z, [...S]), (z) => z, (z) => ce(z));
  }
  function xe(...S) {
    const [z, we, Le] = S;
    if (Le && !Pe(Le))
      throw xo(Jr.INVALID_ARGUMENT);
    return G(z, we, It({ resolvedMessage: !0 }, Le || {}));
  }
  function Be(...S) {
    return K((z) => Reflect.apply(ei, null, [z, ...S]), () => fs(...S), "datetime format", (z) => Reflect.apply(z.d, z, [...S]), () => Zl, (z) => ce(z) || ct(z));
  }
  function ge(...S) {
    return K((z) => Reflect.apply(ni, null, [z, ...S]), () => ps(...S), "number format", (z) => Reflect.apply(z.n, z, [...S]), () => Zl, (z) => ce(z) || ct(z));
  }
  function ve(S) {
    return S.map((z) => ce(z) || Tt(z) || it(z) ? li(String(z)) : z);
  }
  const Ae = {
    normalize: ve,
    interpolate: (S) => S,
    type: "vnode"
  };
  function Ne(...S) {
    return K((z) => {
      let we;
      const Le = z;
      try {
        Le.processor = Ae, we = Reflect.apply(si, null, [Le, ...S]);
      } finally {
        Le.processor = null;
      }
      return we;
    }, () => ms(...S), "translate", (z) => z[hs](...S), (z) => [li(z)], (z) => ct(z));
  }
  function he(...S) {
    return K((z) => Reflect.apply(ni, null, [z, ...S]), () => ps(...S), "number format", (z) => z[vs](...S), ii, (z) => ce(z) || ct(z));
  }
  function at(...S) {
    return K((z) => Reflect.apply(ei, null, [z, ...S]), () => fs(...S), "datetime format", (z) => z[gs](...S), ii, (z) => ce(z) || ct(z));
  }
  function st(S) {
    T = S, L.pluralRules = T;
  }
  function Ze(S, z) {
    return K(() => {
      if (!S)
        return !1;
      const we = ce(z) ? z : i.value, Le = gt(we), Qe = L.messageResolver(Le, S);
      return xn(Qe) || Qn(Qe) || ce(Qe);
    }, () => [S], "translate exists", (we) => Reflect.apply(we.te, we, [S, z]), pm, (we) => it(we));
  }
  function Et(S) {
    let z = null;
    const we = iu(L, l.value, i.value);
    for (let Le = 0; Le < we.length; Le++) {
      const Qe = u.value[we[Le]] || {}, At = L.messageResolver(Qe, S);
      if (At != null) {
        z = At;
        break;
      }
    }
    return z;
  }
  function et(S) {
    const z = Et(S);
    return z ?? (t ? t.tm(S) || {} : {});
  }
  function gt(S) {
    return u.value[S] || {};
  }
  function _t(S, z) {
    if (o) {
      const we = { [S]: z };
      for (const Le in we)
        mn(we, Le) && Ro(we[Le]);
      z = we[S];
    }
    u.value[S] = z, L.messages = u.value;
  }
  function Xe(S, z) {
    u.value[S] = u.value[S] || {};
    const we = { [S]: z };
    if (o)
      for (const Le in we)
        mn(we, Le) && Ro(we[Le]);
    z = we[S], oa(z, u.value[S]), L.messages = u.value;
  }
  function wt(S) {
    return d.value[S] || {};
  }
  function k(S, z) {
    d.value[S] = z, L.datetimeFormats = d.value, ti(L, S, z);
  }
  function O(S, z) {
    d.value[S] = It(d.value[S] || {}, z), L.datetimeFormats = d.value, ti(L, S, z);
  }
  function B(S) {
    return p.value[S] || {};
  }
  function te(S, z) {
    p.value[S] = z, L.numberFormats = p.value, ri(L, S, z);
  }
  function Oe(S, z) {
    p.value[S] = It(p.value[S] || {}, z), L.numberFormats = p.value, ri(L, S, z);
  }
  ci++, t && zl && (Ee(t.locale, (S) => {
    s && (i.value = S, L.locale = S, po(L, i.value, l.value));
  }), Ee(t.fallbackLocale, (S) => {
    s && (l.value = S, L.fallbackLocale = S, po(L, i.value, l.value));
  }));
  const me = {
    id: ci,
    locale: le,
    fallbackLocale: re,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(S) {
      s = S, S && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, po(L, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ae,
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
      return m;
    },
    set missingWarn(S) {
      m = S, L.missingWarn = m;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(S) {
      y = S, L.fallbackWarn = y;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(S) {
      h = S;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(S) {
      g = S, L.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return x;
    },
    set warnHtmlMessage(S) {
      x = S, L.warnHtmlMessage = S;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(S) {
      E = S, L.escapeParameter = S;
    },
    t: G,
    getLocaleMessage: gt,
    setLocaleMessage: _t,
    mergeLocaleMessage: Xe,
    getPostTranslationHandler: V,
    setPostTranslationHandler: Q,
    getMissingHandler: j,
    setMissingHandler: fe,
    [um]: st
  };
  return me.datetimeFormats = be, me.numberFormats = ye, me.rt = xe, me.te = Ze, me.tm = et, me.d = Be, me.n = ge, me.getDateTimeFormat = wt, me.setDateTimeFormat = k, me.mergeDateTimeFormat = O, me.getNumberFormat = B, me.setNumberFormat = te, me.mergeNumberFormat = Oe, me[vu] = n, me[hs] = Ne, me[gs] = at, me[vs] = he, me;
}
const Us = {
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
function hm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === bt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, He());
}
function _u() {
  return bt;
}
It({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Tt(e) || !isNaN(e)
  }
}, Us);
function gm(e) {
  return ct(e) && !ce(e[0]);
}
function wu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = He();
    e.locale && (s.locale = e.locale), ce(e.format) ? s.key = e.format : Pe(e.format) && (ce(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, y) => n.includes(y) ? It(He(), m, { [y]: e.format[y] }) : m, He()));
    const l = r(e.value, s, i);
    let u = [s.key];
    ct(l) ? u = l.map((m, y) => {
      const h = o[m.type], g = h ? h({ [m.type]: m.value, index: y, parts: l }) : [m.value];
      return gm(g) && (g[0].key = `${m.type}-${y}`), g;
    }) : ce(l) && (u = [l]);
    const d = It(He(), a), p = ce(e.tag) || Pe(e.tag) ? e.tag : _u();
    return qc(p, d, u);
  };
}
It({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Us);
const vm = /* @__PURE__ */ $r("global-vue-i18n");
function Fo(e = {}) {
  const t = yu();
  if (t == null)
    throw xo(Jr.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw xo(Jr.NOT_INSTALLED);
  const n = bm(t), r = _m(n), o = dm(t), a = ym(e, o);
  if (a === "global")
    return fm(r, e, o), r;
  if (a === "parent") {
    let l = wm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = It({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = mm(l), s.__composerExtend && (i[bs] = s.__composerExtend(i)), Tm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function bm(e) {
  const t = ze(e.isCE ? vm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw xo(e.isCE ? Jr.NOT_INSTALLED_WITH_PROVIDE : Jr.UNEXPECTED_ERROR);
  return t;
}
function ym(e, t) {
  return Ea(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function _m(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function wm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = km(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[vu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function km(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Tm(e, t, n) {
  ut(() => {
  }, t), Sa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[bs];
    o && (o(), delete r[bs]);
  }, t);
}
It({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Us);
cm();
Up(Op);
Hp(Bp);
Wp(iu);
function Hs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Mr = Hs();
function ku(e) {
  Mr = e;
}
var To = { exec: () => null };
function Ie(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Ut.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var Sm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Ut = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Em = /^(?:[ \t]*(?:\n|$))+/, Am = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Cm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, zo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Om = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ws = /(?:[*+-]|\d{1,9}[.)])/, Tu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Su = Ie(Tu).replace(/bull/g, Ws).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Lm = Ie(Tu).replace(/bull/g, Ws).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Gs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Im = /^[^\n]+/, Ks = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, xm = Ie(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ks).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Rm = Ie(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ws).getRegex(), Oa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", qs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Pm = Ie("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", qs).replace("tag", Oa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Eu = Ie(Gs).replace("hr", zo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oa).getRegex(), Nm = Ie(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Eu).getRegex(), Ys = { blockquote: Nm, code: Am, def: xm, fences: Cm, heading: Om, hr: zo, html: Pm, lheading: Su, list: Rm, newline: Em, paragraph: Eu, table: To, text: Im }, di = Ie("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", zo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oa).getRegex(), $m = { ...Ys, lheading: Lm, table: di, paragraph: Ie(Gs).replace("hr", zo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", di).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oa).getRegex() }, Mm = { ...Ys, html: Ie(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", qs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: To, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ie(Gs).replace("hr", zo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Su).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Dm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Fm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Au = /^( {2,}|\\)\n(?!\s*$)/, zm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, La = /[\p{P}\p{S}]/u, Zs = /[\s\p{P}\p{S}]/u, Cu = /[^\s\p{P}\p{S}]/u, Bm = Ie(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Zs).getRegex(), Ou = /(?!~)[\p{P}\p{S}]/u, Vm = /(?!~)[\s\p{P}\p{S}]/u, jm = /(?:[^\s\p{P}\p{S}]|~)/u, Um = Ie(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Sm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Lu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Hm = Ie(Lu, "u").replace(/punct/g, La).getRegex(), Wm = Ie(Lu, "u").replace(/punct/g, Ou).getRegex(), Iu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Gm = Ie(Iu, "gu").replace(/notPunctSpace/g, Cu).replace(/punctSpace/g, Zs).replace(/punct/g, La).getRegex(), Km = Ie(Iu, "gu").replace(/notPunctSpace/g, jm).replace(/punctSpace/g, Vm).replace(/punct/g, Ou).getRegex(), qm = Ie("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Cu).replace(/punctSpace/g, Zs).replace(/punct/g, La).getRegex(), Ym = Ie(/\\(punct)/, "gu").replace(/punct/g, La).getRegex(), Zm = Ie(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xm = Ie(qs).replace("(?:-->|$)", "-->").getRegex(), Qm = Ie("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), fa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Jm = Ie(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", fa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), xu = Ie(/^!?\[(label)\]\[(ref)\]/).replace("label", fa).replace("ref", Ks).getRegex(), Ru = Ie(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ks).getRegex(), eh = Ie("reflink|nolink(?!\\()", "g").replace("reflink", xu).replace("nolink", Ru).getRegex(), fi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Xs = { _backpedal: To, anyPunctuation: Ym, autolink: Zm, blockSkip: Um, br: Au, code: Fm, del: To, emStrongLDelim: Hm, emStrongRDelimAst: Gm, emStrongRDelimUnd: qm, escape: Dm, link: Jm, nolink: Ru, punctuation: Bm, reflink: xu, reflinkSearch: eh, tag: Qm, text: zm, url: To }, th = { ...Xs, link: Ie(/^!?\[(label)\]\((.*?)\)/).replace("label", fa).getRegex(), reflink: Ie(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", fa).getRegex() }, ys = { ...Xs, emStrongRDelimAst: Km, emStrongLDelim: Wm, url: Ie(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", fi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ie(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", fi).getRegex() }, nh = { ...ys, br: Ie(Au).replace("{2,}", "*").getRegex(), text: Ie(ys.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, qo = { normal: Ys, gfm: $m, pedantic: Mm }, mo = { normal: Xs, gfm: ys, breaks: nh, pedantic: th }, rh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, pi = (e) => rh[e];
function Un(e, t) {
  if (t) {
    if (Ut.escapeTest.test(e)) return e.replace(Ut.escapeReplace, pi);
  } else if (Ut.escapeTestNoEncode.test(e)) return e.replace(Ut.escapeReplaceNoEncode, pi);
  return e;
}
function mi(e) {
  try {
    e = encodeURI(e).replace(Ut.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function hi(e, t) {
  let n = e.replace(Ut.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Ut.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Ut.slashPipe, "|");
  return r;
}
function ho(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function oh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function gi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function ah(e, t, n) {
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
var pa = class {
  constructor(e) {
    Ue(this, "options");
    Ue(this, "rules");
    Ue(this, "lexer");
    this.options = e || Mr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : ho(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = ah(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = ho(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: ho(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = ho(t[0], `
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
          let y = m, h = y.raw + `
` + n.join(`
`), g = this.blockquote(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - y.raw.length) + g.raw, o = o.substring(0, o.length - y.text.length) + g.text;
          break;
        } else if (m?.type === "list") {
          let y = m, h = y.raw + `
` + n.join(`
`), g = this.list(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - m.raw.length) + g.raw, o = o.substring(0, o.length - y.raw.length) + g.raw, n = h.substring(a.at(-1).raw.length).split(`
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
`, 1)[0].replace(this.rules.other.listReplaceTabs, (g) => " ".repeat(3 * g.length)), m = e.split(`
`, 1)[0], y = !p.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, d = p.trimStart()) : y ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, d = p.slice(h), h += t[1].length), y && this.rules.other.blankLine.test(m) && (u += m + `
`, e = e.substring(m.length + 1), l = !0), !l) {
          let g = this.rules.other.nextBulletRegex(h), A = this.rules.other.hrRegex(h), f = this.rules.other.fencesBeginRegex(h), C = this.rules.other.headingBeginRegex(h), x = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let E = e.split(`
`, 1)[0], _;
            if (m = E, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), _ = m) : _ = m.replace(this.rules.other.tabCharGlobal, "    "), f.test(m) || C.test(m) || x.test(m) || g.test(m) || A.test(m)) break;
            if (_.search(this.rules.other.nonSpaceChar) >= h || !m.trim()) d += `
` + _.slice(h);
            else {
              if (y || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(p) || C.test(p) || A.test(p)) break;
              d += `
` + m;
            }
            !y && !m.trim() && (y = !0), u += E + `
`, e = e.substring(E.length + 1), p = _.slice(h);
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
    let n = hi(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(hi(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = ho(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = oh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), gi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return gi(n, o, n[0], this.lexer, this.rules);
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
}, fn = class _s {
  constructor(t) {
    Ue(this, "tokens");
    Ue(this, "options");
    Ue(this, "state");
    Ue(this, "inlineQueue");
    Ue(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Mr, this.options.tokenizer = this.options.tokenizer || new pa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Ut, block: qo.normal, inline: mo.normal };
    this.options.pedantic ? (n.block = qo.pedantic, n.inline = mo.pedantic) : this.options.gfm && (n.block = qo.gfm, this.options.breaks ? n.inline = mo.breaks : n.inline = mo.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: qo, inline: mo };
  }
  static lex(t, n) {
    return new _s(n).lex(t);
  }
  static lexInline(t, n) {
    return new _s(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Ut.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Ut.tabCharGlobal, "    ").replace(Ut.spaceLine, "")); t; ) {
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
}, ma = class {
  constructor(t) {
    Ue(this, "options");
    Ue(this, "parser");
    this.options = t || Mr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Ut.notSpaceStart)?.[0], a = t.replace(Ut.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Un(o) + '">' + (r ? a : Un(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Un(a, !0)) + `</code></pre>
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
    return `<code>${Un(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = mi(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Un(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = mi(t);
    if (a === null) return Un(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Un(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Un(t.text);
  }
}, Qs = class {
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
}, pn = class ws {
  constructor(t) {
    Ue(this, "options");
    Ue(this, "renderer");
    Ue(this, "textRenderer");
    this.options = t || Mr, this.options.renderer = this.options.renderer || new ma(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Qs();
  }
  static parse(t, n) {
    return new ws(n).parse(t);
  }
  static parseInline(t, n) {
    return new ws(n).parseInline(t);
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
}, na, wo = (na = class {
  constructor(e) {
    Ue(this, "options");
    Ue(this, "block");
    this.options = e || Mr;
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
    return this.block ? pn.parse : pn.parseInline;
  }
}, Ue(na, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ue(na, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), na), sh = class {
  constructor(...t) {
    Ue(this, "defaults", Hs());
    Ue(this, "options", this.setOptions);
    Ue(this, "parse", this.parseMarkdown(!0));
    Ue(this, "parseInline", this.parseMarkdown(!1));
    Ue(this, "Parser", pn);
    Ue(this, "Renderer", ma);
    Ue(this, "TextRenderer", Qs);
    Ue(this, "Lexer", fn);
    Ue(this, "Tokenizer", pa);
    Ue(this, "Hooks", wo);
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
        let a = this.defaults.renderer || new ma(this.defaults);
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
        let a = this.defaults.tokenizer || new pa(this.defaults);
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
        let a = this.defaults.hooks || new wo();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          wo.passThroughHooks.has(s) ? a[i] = (d) => {
            if (this.defaults.async && wo.passThroughHooksRespectAsync.has(s)) return (async () => {
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
    return fn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return pn.parse(t, n ?? this.defaults);
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
        let d = await (a.hooks ? await a.hooks.provideParser() : t ? pn.parse : pn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? fn.lex : fn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? pn.parse : pn.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + Un(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Rr = new sh();
function Fe(e, t) {
  return Rr.parse(e, t);
}
Fe.options = Fe.setOptions = function(e) {
  return Rr.setOptions(e), Fe.defaults = Rr.defaults, ku(Fe.defaults), Fe;
};
Fe.getDefaults = Hs;
Fe.defaults = Mr;
Fe.use = function(...e) {
  return Rr.use(...e), Fe.defaults = Rr.defaults, ku(Fe.defaults), Fe;
};
Fe.walkTokens = function(e, t) {
  return Rr.walkTokens(e, t);
};
Fe.parseInline = Rr.parseInline;
Fe.Parser = pn;
Fe.parser = pn.parse;
Fe.Renderer = ma;
Fe.TextRenderer = Qs;
Fe.Lexer = fn;
Fe.lexer = fn.lex;
Fe.Tokenizer = pa;
Fe.Hooks = wo;
Fe.parse = Fe;
Fe.options;
Fe.setOptions;
Fe.use;
Fe.walkTokens;
Fe.parseInline;
pn.parse;
fn.lex;
const lh = ["disabled"], ih = {
  key: 0,
  class: "custom-button__loading"
}, ch = /* @__PURE__ */ ie({
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
      e.loading ? (R(), H("div", ih, r[1] || (r[1] = [
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
      ]))) : oe("v-if", !0),
      Se(n.$slots, "default", {}, void 0, !0)
    ], 10, lh));
  }
}), Js = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Hn = /* @__PURE__ */ Js(ch, [["__scopeId", "data-v-9497085f"]]), Pu = Symbol(), aa = "el", uh = "is-", Lr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Nu = Symbol("namespaceContextKey"), el = (e) => {
  const t = e || (Ht() ? ze(Nu, U(aa)) : U(aa));
  return I(() => c(t) || aa);
}, mt = (e, t) => {
  const n = el(t);
  return {
    namespace: n,
    b: (g = "") => Lr(n.value, e, g, "", ""),
    e: (g) => g ? Lr(n.value, e, "", g, "") : "",
    m: (g) => g ? Lr(n.value, e, "", "", g) : "",
    be: (g, A) => g && A ? Lr(n.value, e, g, A, "") : "",
    em: (g, A) => g && A ? Lr(n.value, e, "", g, A) : "",
    bm: (g, A) => g && A ? Lr(n.value, e, g, "", A) : "",
    bem: (g, A, f) => g && A && f ? Lr(n.value, e, g, A, f) : "",
    is: (g, ...A) => {
      const f = A.length >= 1 ? A[0] : !0;
      return g && f ? `${uh}${g}` : "";
    },
    cssVar: (g) => {
      const A = {};
      for (const f in g)
        g[f] && (A[`--${n.value}-${f}`] = g[f]);
      return A;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const A = {};
      for (const f in g)
        g[f] && (A[`--${n.value}-${e}-${f}`] = g[f]);
      return A;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Po = () => {
}, dh = Object.prototype.hasOwnProperty, vi = (e, t) => dh.call(e, t), On = Array.isArray, rt = (e) => typeof e == "function", Dt = (e) => typeof e == "string", Qt = (e) => e !== null && typeof e == "object", bi = (e) => (Qt(e) || rt(e)) && rt(e.then) && rt(e.catch), fh = Object.prototype.toString, ph = (e) => fh.call(e), mh = (e) => ph(e) === "[object Object]";
var $u = typeof global == "object" && global && global.Object === Object && global, hh = typeof self == "object" && self && self.Object === Object && self, Fn = $u || hh || Function("return this")(), $n = Fn.Symbol, Mu = Object.prototype, gh = Mu.hasOwnProperty, vh = Mu.toString, go = $n ? $n.toStringTag : void 0;
function bh(e) {
  var t = gh.call(e, go), n = e[go];
  try {
    e[go] = void 0;
    var r = !0;
  } catch {
  }
  var o = vh.call(e);
  return r && (t ? e[go] = n : delete e[go]), o;
}
var yh = Object.prototype, _h = yh.toString;
function wh(e) {
  return _h.call(e);
}
var kh = "[object Null]", Th = "[object Undefined]", yi = $n ? $n.toStringTag : void 0;
function co(e) {
  return e == null ? e === void 0 ? Th : kh : yi && yi in Object(e) ? bh(e) : wh(e);
}
function eo(e) {
  return e != null && typeof e == "object";
}
var Sh = "[object Symbol]";
function Ia(e) {
  return typeof e == "symbol" || eo(e) && co(e) == Sh;
}
function Eh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var bn = Array.isArray, _i = $n ? $n.prototype : void 0, wi = _i ? _i.toString : void 0;
function Du(e) {
  if (typeof e == "string")
    return e;
  if (bn(e))
    return Eh(e, Du) + "";
  if (Ia(e))
    return wi ? wi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ah = /\s/;
function Ch(e) {
  for (var t = e.length; t-- && Ah.test(e.charAt(t)); )
    ;
  return t;
}
var Oh = /^\s+/;
function Lh(e) {
  return e && e.slice(0, Ch(e) + 1).replace(Oh, "");
}
function vr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ki = NaN, Ih = /^[-+]0x[0-9a-f]+$/i, xh = /^0b[01]+$/i, Rh = /^0o[0-7]+$/i, Ph = parseInt;
function Ti(e) {
  if (typeof e == "number")
    return e;
  if (Ia(e))
    return ki;
  if (vr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Lh(e);
  var n = xh.test(e);
  return n || Rh.test(e) ? Ph(e.slice(2), n ? 2 : 8) : Ih.test(e) ? ki : +e;
}
function Fu(e) {
  return e;
}
var Nh = "[object AsyncFunction]", $h = "[object Function]", Mh = "[object GeneratorFunction]", Dh = "[object Proxy]";
function zu(e) {
  if (!vr(e))
    return !1;
  var t = co(e);
  return t == $h || t == Mh || t == Nh || t == Dh;
}
var Za = Fn["__core-js_shared__"], Si = function() {
  var e = /[^.]+$/.exec(Za && Za.keys && Za.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fh(e) {
  return !!Si && Si in e;
}
var zh = Function.prototype, Bh = zh.toString;
function Dr(e) {
  if (e != null) {
    try {
      return Bh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vh = /[\\^$.*+?()[\]{}|]/g, jh = /^\[object .+?Constructor\]$/, Uh = Function.prototype, Hh = Object.prototype, Wh = Uh.toString, Gh = Hh.hasOwnProperty, Kh = RegExp(
  "^" + Wh.call(Gh).replace(Vh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qh(e) {
  if (!vr(e) || Fh(e))
    return !1;
  var t = zu(e) ? Kh : jh;
  return t.test(Dr(e));
}
function Yh(e, t) {
  return e?.[t];
}
function Fr(e, t) {
  var n = Yh(e, t);
  return qh(n) ? n : void 0;
}
var ks = Fr(Fn, "WeakMap");
function Zh(e, t, n) {
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
var Xh = 800, Qh = 16, Jh = Date.now;
function eg(e) {
  var t = 0, n = 0;
  return function() {
    var r = Jh(), o = Qh - (r - n);
    if (n = r, o > 0) {
      if (++t >= Xh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function tg(e) {
  return function() {
    return e;
  };
}
var ha = function() {
  try {
    var e = Fr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ng = ha ? function(e, t) {
  return ha(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: tg(t),
    writable: !0
  });
} : Fu, rg = eg(ng);
function og(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var ag = 9007199254740991, sg = /^(?:0|[1-9]\d*)$/;
function tl(e, t) {
  var n = typeof e;
  return t = t ?? ag, !!t && (n == "number" || n != "symbol" && sg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function lg(e, t, n) {
  t == "__proto__" && ha ? ha(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function nl(e, t) {
  return e === t || e !== e && t !== t;
}
var ig = Object.prototype, cg = ig.hasOwnProperty;
function ug(e, t, n) {
  var r = e[t];
  (!(cg.call(e, t) && nl(r, n)) || n === void 0 && !(t in e)) && lg(e, t, n);
}
var Ei = Math.max;
function dg(e, t, n) {
  return t = Ei(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Ei(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Zh(e, this, i);
  };
}
var fg = 9007199254740991;
function rl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fg;
}
function pg(e) {
  return e != null && rl(e.length) && !zu(e);
}
var mg = Object.prototype;
function hg(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || mg;
  return e === n;
}
function gg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var vg = "[object Arguments]";
function Ai(e) {
  return eo(e) && co(e) == vg;
}
var Bu = Object.prototype, bg = Bu.hasOwnProperty, yg = Bu.propertyIsEnumerable, ol = Ai(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ai : function(e) {
  return eo(e) && bg.call(e, "callee") && !yg.call(e, "callee");
};
function _g() {
  return !1;
}
var Vu = typeof exports == "object" && exports && !exports.nodeType && exports, Ci = Vu && typeof module == "object" && module && !module.nodeType && module, wg = Ci && Ci.exports === Vu, Oi = wg ? Fn.Buffer : void 0, kg = Oi ? Oi.isBuffer : void 0, Ts = kg || _g, Tg = "[object Arguments]", Sg = "[object Array]", Eg = "[object Boolean]", Ag = "[object Date]", Cg = "[object Error]", Og = "[object Function]", Lg = "[object Map]", Ig = "[object Number]", xg = "[object Object]", Rg = "[object RegExp]", Pg = "[object Set]", Ng = "[object String]", $g = "[object WeakMap]", Mg = "[object ArrayBuffer]", Dg = "[object DataView]", Fg = "[object Float32Array]", zg = "[object Float64Array]", Bg = "[object Int8Array]", Vg = "[object Int16Array]", jg = "[object Int32Array]", Ug = "[object Uint8Array]", Hg = "[object Uint8ClampedArray]", Wg = "[object Uint16Array]", Gg = "[object Uint32Array]", Ke = {};
Ke[Fg] = Ke[zg] = Ke[Bg] = Ke[Vg] = Ke[jg] = Ke[Ug] = Ke[Hg] = Ke[Wg] = Ke[Gg] = !0;
Ke[Tg] = Ke[Sg] = Ke[Mg] = Ke[Eg] = Ke[Dg] = Ke[Ag] = Ke[Cg] = Ke[Og] = Ke[Lg] = Ke[Ig] = Ke[xg] = Ke[Rg] = Ke[Pg] = Ke[Ng] = Ke[$g] = !1;
function Kg(e) {
  return eo(e) && rl(e.length) && !!Ke[co(e)];
}
function qg(e) {
  return function(t) {
    return e(t);
  };
}
var ju = typeof exports == "object" && exports && !exports.nodeType && exports, So = ju && typeof module == "object" && module && !module.nodeType && module, Yg = So && So.exports === ju, Xa = Yg && $u.process, Li = function() {
  try {
    var e = So && So.require && So.require("util").types;
    return e || Xa && Xa.binding && Xa.binding("util");
  } catch {
  }
}(), Ii = Li && Li.isTypedArray, Uu = Ii ? qg(Ii) : Kg, Zg = Object.prototype, Xg = Zg.hasOwnProperty;
function Qg(e, t) {
  var n = bn(e), r = !n && ol(e), o = !n && !r && Ts(e), a = !n && !r && !o && Uu(e), s = n || r || o || a, i = s ? gg(e.length, String) : [], l = i.length;
  for (var u in e)
    Xg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    tl(u, l))) && i.push(u);
  return i;
}
function Jg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ev = Jg(Object.keys, Object), tv = Object.prototype, nv = tv.hasOwnProperty;
function rv(e) {
  if (!hg(e))
    return ev(e);
  var t = [];
  for (var n in Object(e))
    nv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Hu(e) {
  return pg(e) ? Qg(e) : rv(e);
}
var ov = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, av = /^\w*$/;
function al(e, t) {
  if (bn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ia(e) ? !0 : av.test(e) || !ov.test(e) || t != null && e in Object(t);
}
var No = Fr(Object, "create");
function sv() {
  this.__data__ = No ? No(null) : {}, this.size = 0;
}
function lv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var iv = "__lodash_hash_undefined__", cv = Object.prototype, uv = cv.hasOwnProperty;
function dv(e) {
  var t = this.__data__;
  if (No) {
    var n = t[e];
    return n === iv ? void 0 : n;
  }
  return uv.call(t, e) ? t[e] : void 0;
}
var fv = Object.prototype, pv = fv.hasOwnProperty;
function mv(e) {
  var t = this.__data__;
  return No ? t[e] !== void 0 : pv.call(t, e);
}
var hv = "__lodash_hash_undefined__";
function gv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = No && t === void 0 ? hv : t, this;
}
function Pr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Pr.prototype.clear = sv;
Pr.prototype.delete = lv;
Pr.prototype.get = dv;
Pr.prototype.has = mv;
Pr.prototype.set = gv;
function vv() {
  this.__data__ = [], this.size = 0;
}
function xa(e, t) {
  for (var n = e.length; n--; )
    if (nl(e[n][0], t))
      return n;
  return -1;
}
var bv = Array.prototype, yv = bv.splice;
function _v(e) {
  var t = this.__data__, n = xa(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : yv.call(t, n, 1), --this.size, !0;
}
function wv(e) {
  var t = this.__data__, n = xa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function kv(e) {
  return xa(this.__data__, e) > -1;
}
function Tv(e, t) {
  var n = this.__data__, r = xa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ar(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ar.prototype.clear = vv;
ar.prototype.delete = _v;
ar.prototype.get = wv;
ar.prototype.has = kv;
ar.prototype.set = Tv;
var $o = Fr(Fn, "Map");
function Sv() {
  this.size = 0, this.__data__ = {
    hash: new Pr(),
    map: new ($o || ar)(),
    string: new Pr()
  };
}
function Ev(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ra(e, t) {
  var n = e.__data__;
  return Ev(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Av(e) {
  var t = Ra(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cv(e) {
  return Ra(this, e).get(e);
}
function Ov(e) {
  return Ra(this, e).has(e);
}
function Lv(e, t) {
  var n = Ra(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function sr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
sr.prototype.clear = Sv;
sr.prototype.delete = Av;
sr.prototype.get = Cv;
sr.prototype.has = Ov;
sr.prototype.set = Lv;
var Iv = "Expected a function";
function sl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Iv);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (sl.Cache || sr)(), n;
}
sl.Cache = sr;
var xv = 500;
function Rv(e) {
  var t = sl(e, function(r) {
    return n.size === xv && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Pv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nv = /\\(\\)?/g, $v = Rv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Pv, function(n, r, o, a) {
    t.push(o ? a.replace(Nv, "$1") : r || n);
  }), t;
});
function Mv(e) {
  return e == null ? "" : Du(e);
}
function Pa(e, t) {
  return bn(e) ? e : al(e, t) ? [e] : $v(Mv(e));
}
function Bo(e) {
  if (typeof e == "string" || Ia(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ll(e, t) {
  t = Pa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Bo(t[n++])];
  return n && n == r ? e : void 0;
}
function mr(e, t, n) {
  var r = e == null ? void 0 : ll(e, t);
  return r === void 0 ? n : r;
}
function Wu(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var xi = $n ? $n.isConcatSpreadable : void 0;
function Dv(e) {
  return bn(e) || ol(e) || !!(xi && e && e[xi]);
}
function Fv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Dv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Wu(o, i) : o[o.length] = i;
  }
  return o;
}
function zv(e) {
  var t = e == null ? 0 : e.length;
  return t ? Fv(e) : [];
}
function Bv(e) {
  return rg(dg(e, void 0, zv), e + "");
}
function pr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return bn(e) ? e : [e];
}
function Vv() {
  this.__data__ = new ar(), this.size = 0;
}
function jv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Uv(e) {
  return this.__data__.get(e);
}
function Hv(e) {
  return this.__data__.has(e);
}
var Wv = 200;
function Gv(e, t) {
  var n = this.__data__;
  if (n instanceof ar) {
    var r = n.__data__;
    if (!$o || r.length < Wv - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new sr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jn(e) {
  var t = this.__data__ = new ar(e);
  this.size = t.size;
}
Jn.prototype.clear = Vv;
Jn.prototype.delete = jv;
Jn.prototype.get = Uv;
Jn.prototype.has = Hv;
Jn.prototype.set = Gv;
function Kv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function qv() {
  return [];
}
var Yv = Object.prototype, Zv = Yv.propertyIsEnumerable, Ri = Object.getOwnPropertySymbols, Xv = Ri ? function(e) {
  return e == null ? [] : (e = Object(e), Kv(Ri(e), function(t) {
    return Zv.call(e, t);
  }));
} : qv;
function Qv(e, t, n) {
  var r = t(e);
  return bn(e) ? r : Wu(r, n(e));
}
function Pi(e) {
  return Qv(e, Hu, Xv);
}
var Ss = Fr(Fn, "DataView"), Es = Fr(Fn, "Promise"), As = Fr(Fn, "Set"), Ni = "[object Map]", Jv = "[object Object]", $i = "[object Promise]", Mi = "[object Set]", Di = "[object WeakMap]", Fi = "[object DataView]", e0 = Dr(Ss), t0 = Dr($o), n0 = Dr(Es), r0 = Dr(As), o0 = Dr(ks), fr = co;
(Ss && fr(new Ss(new ArrayBuffer(1))) != Fi || $o && fr(new $o()) != Ni || Es && fr(Es.resolve()) != $i || As && fr(new As()) != Mi || ks && fr(new ks()) != Di) && (fr = function(e) {
  var t = co(e), n = t == Jv ? e.constructor : void 0, r = n ? Dr(n) : "";
  if (r)
    switch (r) {
      case e0:
        return Fi;
      case t0:
        return Ni;
      case n0:
        return $i;
      case r0:
        return Mi;
      case o0:
        return Di;
    }
  return t;
});
var zi = Fn.Uint8Array, a0 = "__lodash_hash_undefined__";
function s0(e) {
  return this.__data__.set(e, a0), this;
}
function l0(e) {
  return this.__data__.has(e);
}
function ga(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new sr(); ++t < n; )
    this.add(e[t]);
}
ga.prototype.add = ga.prototype.push = s0;
ga.prototype.has = l0;
function i0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function c0(e, t) {
  return e.has(t);
}
var u0 = 1, d0 = 2;
function Gu(e, t, n, r, o, a) {
  var s = n & u0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, m = !0, y = n & d0 ? new ga() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var h = e[p], g = t[p];
    if (r)
      var A = s ? r(g, h, p, t, e, a) : r(h, g, p, e, t, a);
    if (A !== void 0) {
      if (A)
        continue;
      m = !1;
      break;
    }
    if (y) {
      if (!i0(t, function(f, C) {
        if (!c0(y, C) && (h === f || o(h, f, n, r, a)))
          return y.push(C);
      })) {
        m = !1;
        break;
      }
    } else if (!(h === g || o(h, g, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function f0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function p0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var m0 = 1, h0 = 2, g0 = "[object Boolean]", v0 = "[object Date]", b0 = "[object Error]", y0 = "[object Map]", _0 = "[object Number]", w0 = "[object RegExp]", k0 = "[object Set]", T0 = "[object String]", S0 = "[object Symbol]", E0 = "[object ArrayBuffer]", A0 = "[object DataView]", Bi = $n ? $n.prototype : void 0, Qa = Bi ? Bi.valueOf : void 0;
function C0(e, t, n, r, o, a, s) {
  switch (n) {
    case A0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case E0:
      return !(e.byteLength != t.byteLength || !a(new zi(e), new zi(t)));
    case g0:
    case v0:
    case _0:
      return nl(+e, +t);
    case b0:
      return e.name == t.name && e.message == t.message;
    case w0:
    case T0:
      return e == t + "";
    case y0:
      var i = f0;
    case k0:
      var l = r & m0;
      if (i || (i = p0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= h0, s.set(e, t);
      var d = Gu(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case S0:
      if (Qa)
        return Qa.call(e) == Qa.call(t);
  }
  return !1;
}
var O0 = 1, L0 = Object.prototype, I0 = L0.hasOwnProperty;
function x0(e, t, n, r, o, a) {
  var s = n & O0, i = Pi(e), l = i.length, u = Pi(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : I0.call(t, m)))
      return !1;
  }
  var y = a.get(e), h = a.get(t);
  if (y && h)
    return y == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var A = s; ++p < l; ) {
    m = i[p];
    var f = e[m], C = t[m];
    if (r)
      var x = s ? r(C, f, m, t, e, a) : r(f, C, m, e, t, a);
    if (!(x === void 0 ? f === C || o(f, C, n, r, a) : x)) {
      g = !1;
      break;
    }
    A || (A = m == "constructor");
  }
  if (g && !A) {
    var E = e.constructor, _ = t.constructor;
    E != _ && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof _ == "function" && _ instanceof _) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var R0 = 1, Vi = "[object Arguments]", ji = "[object Array]", Yo = "[object Object]", P0 = Object.prototype, Ui = P0.hasOwnProperty;
function N0(e, t, n, r, o, a) {
  var s = bn(e), i = bn(t), l = s ? ji : fr(e), u = i ? ji : fr(t);
  l = l == Vi ? Yo : l, u = u == Vi ? Yo : u;
  var d = l == Yo, p = u == Yo, m = l == u;
  if (m && Ts(e)) {
    if (!Ts(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new Jn()), s || Uu(e) ? Gu(e, t, n, r, o, a) : C0(e, t, l, n, r, o, a);
  if (!(n & R0)) {
    var y = d && Ui.call(e, "__wrapped__"), h = p && Ui.call(t, "__wrapped__");
    if (y || h) {
      var g = y ? e.value() : e, A = h ? t.value() : t;
      return a || (a = new Jn()), o(g, A, n, r, a);
    }
  }
  return m ? (a || (a = new Jn()), x0(e, t, n, r, o, a)) : !1;
}
function Na(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !eo(e) && !eo(t) ? e !== e && t !== t : N0(e, t, n, r, Na, o);
}
var $0 = 1, M0 = 2;
function D0(e, t, n, r) {
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
      var d = new Jn(), p;
      if (!(p === void 0 ? Na(u, l, $0 | M0, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function Ku(e) {
  return e === e && !vr(e);
}
function F0(e) {
  for (var t = Hu(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Ku(o)];
  }
  return t;
}
function qu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function z0(e) {
  var t = F0(e);
  return t.length == 1 && t[0][2] ? qu(t[0][0], t[0][1]) : function(n) {
    return n === e || D0(n, e, t);
  };
}
function B0(e, t) {
  return e != null && t in Object(e);
}
function V0(e, t, n) {
  t = Pa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Bo(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && rl(o) && tl(s, o) && (bn(e) || ol(e)));
}
function Yu(e, t) {
  return e != null && V0(e, t, B0);
}
var j0 = 1, U0 = 2;
function H0(e, t) {
  return al(e) && Ku(t) ? qu(Bo(e), t) : function(n) {
    var r = mr(n, e);
    return r === void 0 && r === t ? Yu(n, e) : Na(t, r, j0 | U0);
  };
}
function W0(e) {
  return function(t) {
    return t?.[e];
  };
}
function G0(e) {
  return function(t) {
    return ll(t, e);
  };
}
function K0(e) {
  return al(e) ? W0(Bo(e)) : G0(e);
}
function q0(e) {
  return typeof e == "function" ? e : e == null ? Fu : typeof e == "object" ? bn(e) ? H0(e[0], e[1]) : z0(e) : K0(e);
}
var Ja = function() {
  return Fn.Date.now();
}, Y0 = "Expected a function", Z0 = Math.max, X0 = Math.min;
function Q0(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Y0);
  t = Ti(t) || 0, vr(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? Z0(Ti(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function y(T) {
    var L = r, Y = o;
    return r = o = void 0, u = T, s = e.apply(Y, L), s;
  }
  function h(T) {
    return u = T, i = setTimeout(f, t), d ? y(T) : s;
  }
  function g(T) {
    var L = T - l, Y = T - u, Z = t - L;
    return p ? X0(Z, a - Y) : Z;
  }
  function A(T) {
    var L = T - l, Y = T - u;
    return l === void 0 || L >= t || L < 0 || p && Y >= a;
  }
  function f() {
    var T = Ja();
    if (A(T))
      return C(T);
    i = setTimeout(f, g(T));
  }
  function C(T) {
    return i = void 0, m && r ? y(T) : (r = o = void 0, s);
  }
  function x() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function E() {
    return i === void 0 ? s : C(Ja());
  }
  function _() {
    var T = Ja(), L = A(T);
    if (r = arguments, o = this, l = T, L) {
      if (i === void 0)
        return h(l);
      if (p)
        return clearTimeout(i), i = setTimeout(f, t), y(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return _.cancel = x, _.flush = E, _;
}
function J0(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return og(e, q0(t), o);
}
function va(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Eo(e, t) {
  return Na(e, t);
}
function er(e) {
  return e == null;
}
function eb(e) {
  return e === void 0;
}
function tb(e, t, n, r) {
  if (!vr(e))
    return e;
  t = Pa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Bo(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = vr(d) ? d : tl(t[o + 1]) ? [] : {});
    }
    ug(i, l, u), i = i[l];
  }
  return e;
}
function nb(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = ll(e, s);
    n(i, s) && tb(a, Pa(s, e), i);
  }
  return a;
}
function rb(e, t) {
  return nb(e, t, function(n, r) {
    return Yu(e, r);
  });
}
var ob = Bv(function(e, t) {
  return e == null ? {} : rb(e, t);
});
const Ln = (e) => e === void 0, gr = (e) => typeof e == "boolean", De = (e) => typeof e == "number", gn = (e) => typeof Element > "u" ? !1 : e instanceof Element, ab = (e) => Dt(e) ? !Number.isNaN(Number(e)) : !1;
var sb = Object.defineProperty, lb = Object.defineProperties, ib = Object.getOwnPropertyDescriptors, Hi = Object.getOwnPropertySymbols, cb = Object.prototype.hasOwnProperty, ub = Object.prototype.propertyIsEnumerable, Wi = (e, t, n) => t in e ? sb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, db = (e, t) => {
  for (var n in t || (t = {}))
    cb.call(t, n) && Wi(e, n, t[n]);
  if (Hi)
    for (var n of Hi(t))
      ub.call(t, n) && Wi(e, n, t[n]);
  return e;
}, fb = (e, t) => lb(e, ib(t));
function pb(e, t) {
  var n;
  const r = hr();
  return Zc(() => {
    r.value = e();
  }, fb(db({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), $s(r);
}
var Gi;
const pt = typeof window < "u", mb = (e) => typeof e == "string", Zu = () => {
}, Cs = pt && ((Gi = window?.navigator) == null ? void 0 : Gi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function il(e) {
  return typeof e == "function" ? e() : c(e);
}
function hb(e) {
  return e;
}
function Vo(e) {
  return uf() ? (df(e), !0) : !1;
}
function gb(e, t = !0) {
  Ht() ? ut(e) : t ? e() : lt(e);
}
function Xu(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = U(!1);
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
    }, il(t));
  }
  return r && (o.value = !0, pt && l()), Vo(i), {
    isPending: $s(o),
    start: l,
    stop: i
  };
}
function Xn(e) {
  var t;
  const n = il(e);
  return (t = n?.$el) != null ? t : n;
}
const $a = pt ? window : void 0;
function vn(...e) {
  let t, n, r, o;
  if (mb(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = $a) : [t, n, r, o] = e, !t)
    return Zu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, p, m, y) => (d.addEventListener(p, m, y), () => d.removeEventListener(p, m, y)), l = Ee(() => [Xn(t), il(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((y) => i(d, m, y, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Vo(u), u;
}
let Ki = !1;
function vb(e, t, n = {}) {
  const { window: r = $a, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Cs && !Ki && (Ki = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Zu)));
  let i = !0;
  const l = (m) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((h) => h === m.target || m.composedPath().includes(h));
    {
      const h = Xn(y);
      return h && (m.target === h || m.composedPath().includes(h));
    }
  }), d = [
    vn(r, "click", (m) => {
      const y = Xn(e);
      if (!(!y || y === m.target || m.composedPath().includes(y))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    vn(r, "pointerdown", (m) => {
      const y = Xn(e);
      y && (i = !m.composedPath().includes(y) && !l(m));
    }, { passive: !0 }),
    s && vn(r, "blur", (m) => {
      var y;
      const h = Xn(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Qu(e, t = !1) {
  const n = U(), r = () => n.value = !!e();
  return r(), gb(r, t), n;
}
const qi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yi = "__vueuse_ssr_handlers__";
qi[Yi] = qi[Yi] || {};
var Zi = Object.getOwnPropertySymbols, bb = Object.prototype.hasOwnProperty, yb = Object.prototype.propertyIsEnumerable, _b = (e, t) => {
  var n = {};
  for (var r in e)
    bb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Zi)
    for (var r of Zi(e))
      t.indexOf(r) < 0 && yb.call(e, r) && (n[r] = e[r]);
  return n;
};
function Cn(e, t, n = {}) {
  const r = n, { window: o = $a } = r, a = _b(r, ["window"]);
  let s;
  const i = Qu(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ee(() => Xn(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return Vo(d), {
    isSupported: i,
    stop: d
  };
}
var Xi = Object.getOwnPropertySymbols, wb = Object.prototype.hasOwnProperty, kb = Object.prototype.propertyIsEnumerable, Tb = (e, t) => {
  var n = {};
  for (var r in e)
    wb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Xi)
    for (var r of Xi(e))
      t.indexOf(r) < 0 && kb.call(e, r) && (n[r] = e[r]);
  return n;
};
function Sb(e, t, n = {}) {
  const r = n, { window: o = $a } = r, a = Tb(r, ["window"]);
  let s;
  const i = Qu(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ee(() => Xn(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return Vo(d), {
    isSupported: i,
    stop: d
  };
}
var Qi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Qi || (Qi = {}));
var Eb = Object.defineProperty, Ji = Object.getOwnPropertySymbols, Ab = Object.prototype.hasOwnProperty, Cb = Object.prototype.propertyIsEnumerable, ec = (e, t, n) => t in e ? Eb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ob = (e, t) => {
  for (var n in t || (t = {}))
    Ab.call(t, n) && ec(e, n, t[n]);
  if (Ji)
    for (var n of Ji(t))
      Cb.call(t, n) && ec(e, n, t[n]);
  return e;
};
const Lb = {
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
Ob({
  linear: hb
}, Lb);
class Ib extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function cl(e, t) {
  throw new Ib(`[${e}] ${t}`);
}
const tc = {
  current: 0
}, nc = U(0), Ju = 2e3, rc = Symbol("elZIndexContextKey"), ed = Symbol("zIndexContextKey"), td = (e) => {
  const t = Ht() ? ze(rc, tc) : tc, n = e || (Ht() ? ze(ed, void 0) : void 0), r = I(() => {
    const s = c(n);
    return De(s) ? s : Ju;
  }), o = I(() => r.value + nc.value), a = () => (t.current++, nc.value = t.current, o.value);
  return !pt && ze(rc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var xb = {
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
const Rb = (e) => (t, n) => Pb(t, n, c(e)), Pb = (e, t, n) => mr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Nb = (e) => {
  const t = I(() => c(e).name), n = Zr(e) ? e : U(e);
  return {
    lang: t,
    locale: n,
    t: Rb(e)
  };
}, nd = Symbol("localeContextKey"), ul = (e) => {
  const t = e || ze(nd, U());
  return Nb(I(() => t.value || xb));
}, rd = "__epPropKey", _e = (e) => e, $b = (e) => Qt(e) && !!e[rd], Ma = (e, t) => {
  if (!Qt(e) || $b(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), vi(e, "default") && p.push(o), d || (d = p.includes(u))), s && (d || (d = s(u))), !d && p.length > 0) {
        const m = [...new Set(p)].map((y) => JSON.stringify(y)).join(", ");
        ff(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [rd]: !0
  };
  return vi(e, "default") && (l.default = o), l;
}, Ye = (e) => va(Object.entries(e).map(([t, n]) => [
  t,
  Ma(n, t)
])), dl = ["", "default", "small", "large"], Da = Ma({
  type: String,
  values: dl,
  required: !1
}), od = Symbol("size"), Mb = () => {
  const e = ze(od, {});
  return I(() => c(e.size) || "");
}, ad = Symbol("emptyValuesContextKey"), Db = ["", void 0, null], Fb = void 0, sd = Ye({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => rt(e) ? !e() : !e
  }
}), zb = (e, t) => {
  const n = Ht() ? ze(ad, U({})) : U({}), r = I(() => e.emptyValues || n.value.emptyValues || Db), o = I(() => rt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : rt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Fb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, oc = (e) => Object.keys(e), ba = U();
function ld(e, t = void 0) {
  return Ht() ? ze(Pu, ba) : ba;
}
function id(e, t) {
  const n = ld(), r = mt(e, I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || aa;
  })), o = ul(I(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = td(I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Ju;
  })), s = I(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return cd(I(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const cd = (e, t, n = !1) => {
  var r;
  const o = !!Ht(), a = o ? ld() : void 0, s = (r = void 0) != null ? r : o ? Nn : void 0;
  if (!s)
    return;
  const i = I(() => {
    const l = c(e);
    return a?.value ? Bb(a.value, l) : l;
  });
  return s(Pu, i), s(nd, I(() => i.value.locale)), s(Nu, I(() => i.value.namespace)), s(ed, I(() => i.value.zIndex)), s(od, {
    size: I(() => i.value.size || "")
  }), s(ad, I(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ba.value) && (ba.value = i.value), i;
}, Bb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...oc(e), ...oc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, St = "update:modelValue", rr = "change", tr = "input";
var Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function to(e, t = "px") {
  if (!e)
    return "";
  if (De(e) || ab(e))
    return `${e}${t}`;
  if (Dt(e))
    return e;
}
function Vb(e, t) {
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
const yn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, ud = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), dd = (e) => (e.install = Po, e), jb = Ye({
  size: {
    type: _e([Number, String])
  },
  color: {
    type: String
  }
}), Ub = ie({
  name: "ElIcon",
  inheritAttrs: !1
}), Hb = /* @__PURE__ */ ie({
  ...Ub,
  props: jb,
  setup(e) {
    const t = e, n = mt("icon"), r = I(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Ln(o) ? void 0 : to(o),
        "--color": a
      };
    });
    return (o, a) => (R(), H("i", Xr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Se(o.$slots, "default")
    ], 16));
  }
});
var Wb = /* @__PURE__ */ Je(Hb, [["__file", "icon.vue"]]);
const ft = yn(Wb);
/*! Element Plus Icons Vue v2.3.1 */
var Gb = /* @__PURE__ */ ie({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), fd = Gb, Kb = /* @__PURE__ */ ie({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), qb = Kb, Yb = /* @__PURE__ */ ie({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (R(), H("svg", {
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
}), Zb = Yb, Xb = /* @__PURE__ */ ie({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Qb = Xb, Jb = /* @__PURE__ */ ie({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (R(), H("svg", {
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
}), fl = Jb, ey = /* @__PURE__ */ ie({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ya = ey, ty = /* @__PURE__ */ ie({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (R(), H("svg", {
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
}), ny = ty, ry = /* @__PURE__ */ ie({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), oy = ry, ay = /* @__PURE__ */ ie({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), pd = ay, sy = /* @__PURE__ */ ie({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), ly = sy, iy = /* @__PURE__ */ ie({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), cy = iy, uy = /* @__PURE__ */ ie({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), dy = uy, fy = /* @__PURE__ */ ie({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), py = fy, my = /* @__PURE__ */ ie({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), hy = my;
const In = _e([
  String,
  Object,
  Function
]), gy = {
  Close: ya
}, vy = {
  Close: ya
}, _a = {
  success: dy,
  warning: hy,
  error: Qb,
  info: oy
}, md = {
  validating: pd,
  success: Zb,
  error: fl
}, hd = () => pt && /firefox/i.test(window.navigator.userAgent);
let qt;
const by = {
  height: "0",
  visibility: "hidden",
  overflow: hd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, yy = [
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
function _y(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: yy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function ac(e, t = 1, n) {
  var r;
  qt || (qt = document.createElement("textarea"), document.body.appendChild(qt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = _y(e);
  i.forEach(([p, m]) => qt?.style.setProperty(p, m)), Object.entries(by).forEach(([p, m]) => qt?.style.setProperty(p, m, "important")), qt.value = e.value || e.placeholder || "";
  let l = qt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), qt.value = "";
  const d = qt.scrollHeight - o;
  if (De(t)) {
    let p = d * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (De(n)) {
    let p = d * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = qt.parentNode) == null || r.removeChild(qt), qt = void 0, u;
}
const gd = (e) => e, wy = Ye({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), zr = (e) => ob(wy, e), ky = Ye({
  id: {
    type: String,
    default: void 0
  },
  size: Da,
  disabled: Boolean,
  modelValue: {
    type: _e([
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
    type: _e([Boolean, Object]),
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
    type: In
  },
  prefixIcon: {
    type: In
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
    type: _e([Object, Array, String]),
    default: () => gd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...zr(["ariaLabel"])
}), Ty = {
  [St]: (e) => Dt(e),
  input: (e) => Dt(e),
  change: (e) => Dt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Sy = ["class", "style"], Ey = /^on[A-Z]/, Ay = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = I(() => (n?.value || []).concat(Sy)), o = Ht();
  return o ? I(() => {
    var a;
    return va(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && Ey.test(s))));
  }) : I(() => ({}));
}, pl = Symbol("formContextKey"), wa = Symbol("formItemContextKey"), sc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Cy = Symbol("elIdInjection"), vd = () => Ht() ? ze(Cy, sc) : sc, Fa = (e) => {
  const t = vd(), n = el();
  return pb(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, za = () => {
  const e = ze(pl, void 0), t = ze(wa, void 0);
  return {
    form: e,
    formItem: t
  };
}, ml = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = U(!1)), r || (r = U(!1));
  const o = U();
  let a;
  const s = I(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ut(() => {
    a = Ee([qn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : Fa().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Sa(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, bd = (e) => {
  const t = Ht();
  return I(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, jo = (e, t = {}) => {
  const n = U(void 0), r = t.prop ? n : bd("size"), o = t.global ? n : Mb(), a = t.form ? { size: void 0 } : ze(pl, void 0), s = t.formItem ? { size: void 0 } : ze(wa, void 0);
  return I(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, hl = (e) => {
  const t = bd("disabled"), n = ze(pl, void 0);
  return I(() => t.value || c(e) || n?.disabled || !1);
};
function yd(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Ht(), { emit: s } = a, i = hr(), l = U(!1), u = (m) => {
    rt(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, d = (m) => {
    var y;
    rt(r) && r(m) || m.relatedTarget && ((y = i.value) != null && y.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, y;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return Ee(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), vn(i, "focus", u, !0), vn(i, "blur", d, !0), vn(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const Oy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function _d({
  afterComposition: e,
  emit: t
}) {
  const n = U(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !Oy(d);
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
function Ly(e) {
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
const Iy = "ElInput", xy = ie({
  name: Iy,
  inheritAttrs: !1
}), Ry = /* @__PURE__ */ ie({
  ...xy,
  props: ky,
  emits: Ty,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = pf(), a = Ay(), s = mf(), i = I(() => [
      r.type === "textarea" ? g.b() : h.b(),
      h.m(m.value),
      h.is("disabled", y.value),
      h.is("exceed", Be.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: fe.value && K.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = I(() => [
      h.e("wrapper"),
      h.is("focus", Y.value)
    ]), { form: u, formItem: d } = za(), { inputId: p } = ml(r, {
      formItemContext: d
    }), m = jo(), y = hl(), h = mt("input"), g = mt("textarea"), A = hr(), f = hr(), C = U(!1), x = U(!1), E = U(), _ = hr(r.inputStyle), T = I(() => A.value || f.value), { wrapperRef: L, isFocused: Y, handleFocus: Z, handleBlur: le } = yd(T, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var S;
        r.validateEvent && ((S = d?.validate) == null || S.call(d, "blur").catch((z) => void 0));
      }
    }), re = I(() => {
      var S;
      return (S = u?.statusIcon) != null ? S : !1;
    }), ae = I(() => d?.validateState || ""), be = I(() => ae.value && md[ae.value]), ye = I(() => x.value ? py : ny), V = I(() => [
      o.style
    ]), Q = I(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), j = I(() => er(r.modelValue) ? "" : String(r.modelValue)), fe = I(() => r.clearable && !y.value && !r.readonly && !!j.value && (Y.value || C.value)), K = I(() => r.showPassword && !y.value && !!j.value && (!!j.value || Y.value)), G = I(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), xe = I(() => j.value.length), Be = I(() => !!G.value && xe.value > Number(r.maxlength)), ge = I(() => !!s.suffix || !!r.suffixIcon || fe.value || r.showPassword || G.value || !!ae.value && re.value), [ve, J] = Ly(A);
    Cn(f, (S) => {
      if (he(), !G.value || r.resize !== "both")
        return;
      const z = S[0], { width: we } = z.contentRect;
      E.value = {
        right: `calc(100% - ${we + 15 + 6}px)`
      };
    });
    const Ae = () => {
      const { type: S, autosize: z } = r;
      if (!(!pt || S !== "textarea" || !f.value))
        if (z) {
          const we = Qt(z) ? z.minRows : void 0, Le = Qt(z) ? z.maxRows : void 0, Qe = ac(f.value, we, Le);
          _.value = {
            overflowY: "hidden",
            ...Qe
          }, lt(() => {
            f.value.offsetHeight, _.value = Qe;
          });
        } else
          _.value = {
            minHeight: ac(f.value).minHeight
          };
    }, he = ((S) => {
      let z = !1;
      return () => {
        var we;
        if (z || !r.autosize)
          return;
        ((we = f.value) == null ? void 0 : we.offsetParent) === null || (S(), z = !0);
      };
    })(Ae), at = () => {
      const S = T.value, z = r.formatter ? r.formatter(j.value) : j.value;
      !S || S.value === z || (S.value = z);
    }, st = async (S) => {
      ve();
      let { value: z } = S.target;
      if (r.formatter && r.parser && (z = r.parser(z)), !Et.value) {
        if (z === j.value) {
          at();
          return;
        }
        n(St, z), n(tr, z), await lt(), at(), J();
      }
    }, Ze = (S) => {
      let { value: z } = S.target;
      r.formatter && r.parser && (z = r.parser(z)), n(rr, z);
    }, {
      isComposing: Et,
      handleCompositionStart: et,
      handleCompositionUpdate: gt,
      handleCompositionEnd: _t
    } = _d({ emit: n, afterComposition: st }), Xe = () => {
      ve(), x.value = !x.value, setTimeout(J);
    }, wt = () => {
      var S;
      return (S = T.value) == null ? void 0 : S.focus();
    }, k = () => {
      var S;
      return (S = T.value) == null ? void 0 : S.blur();
    }, O = (S) => {
      C.value = !1, n("mouseleave", S);
    }, B = (S) => {
      C.value = !0, n("mouseenter", S);
    }, te = (S) => {
      n("keydown", S);
    }, Oe = () => {
      var S;
      (S = T.value) == null || S.select();
    }, me = () => {
      n(St, ""), n(rr, ""), n("clear"), n(tr, "");
    };
    return Ee(() => r.modelValue, () => {
      var S;
      lt(() => Ae()), r.validateEvent && ((S = d?.validate) == null || S.call(d, "change").catch((z) => void 0));
    }), Ee(j, () => at()), Ee(() => r.type, async () => {
      await lt(), at(), Ae();
    }), ut(() => {
      !r.formatter && r.parser, at(), lt(Ae);
    }), t({
      input: A,
      textarea: f,
      ref: T,
      textareaStyle: Q,
      autosize: qn(r, "autosize"),
      isComposing: Et,
      focus: wt,
      blur: k,
      select: Oe,
      clear: me,
      resizeTextarea: Ae
    }), (S, z) => (R(), H("div", {
      class: q([
        c(i),
        {
          [c(h).bm("group", "append")]: S.$slots.append,
          [c(h).bm("group", "prepend")]: S.$slots.prepend
        }
      ]),
      style: Lt(c(V)),
      onMouseenter: B,
      onMouseleave: O
    }, [
      oe(" input "),
      S.type !== "textarea" ? (R(), H(bt, { key: 0 }, [
        oe(" prepend slot "),
        S.$slots.prepend ? (R(), H("div", {
          key: 0,
          class: q(c(h).be("group", "prepend"))
        }, [
          Se(S.$slots, "prepend")
        ], 2)) : oe("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: L,
          class: q(c(l))
        }, [
          oe(" prefix slot "),
          S.$slots.prefix || S.prefixIcon ? (R(), H("span", {
            key: 0,
            class: q(c(h).e("prefix"))
          }, [
            b("span", {
              class: q(c(h).e("prefix-inner"))
            }, [
              Se(S.$slots, "prefix"),
              S.prefixIcon ? (R(), de(c(ft), {
                key: 0,
                class: q(c(h).e("icon"))
              }, {
                default: ue(() => [
                  (R(), de(jt(S.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : oe("v-if", !0)
            ], 2)
          ], 2)) : oe("v-if", !0),
          b("input", Xr({
            id: c(p),
            ref_key: "input",
            ref: A,
            class: c(h).e("inner")
          }, c(a), {
            minlength: S.minlength,
            maxlength: S.maxlength,
            type: S.showPassword ? x.value ? "text" : "password" : S.type,
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
            onCompositionstart: c(et),
            onCompositionupdate: c(gt),
            onCompositionend: c(_t),
            onInput: st,
            onChange: Ze,
            onKeydown: te
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          oe(" suffix slot "),
          c(ge) ? (R(), H("span", {
            key: 1,
            class: q(c(h).e("suffix"))
          }, [
            b("span", {
              class: q(c(h).e("suffix-inner"))
            }, [
              !c(fe) || !c(K) || !c(G) ? (R(), H(bt, { key: 0 }, [
                Se(S.$slots, "suffix"),
                S.suffixIcon ? (R(), de(c(ft), {
                  key: 0,
                  class: q(c(h).e("icon"))
                }, {
                  default: ue(() => [
                    (R(), de(jt(S.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : oe("v-if", !0)
              ], 64)) : oe("v-if", !0),
              c(fe) ? (R(), de(c(ft), {
                key: 1,
                class: q([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: qe(c(Po), ["prevent"]),
                onClick: me
              }, {
                default: ue(() => [
                  D(c(fl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : oe("v-if", !0),
              c(K) ? (R(), de(c(ft), {
                key: 2,
                class: q([c(h).e("icon"), c(h).e("password")]),
                onClick: Xe
              }, {
                default: ue(() => [
                  (R(), de(jt(c(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : oe("v-if", !0),
              c(G) ? (R(), H("span", {
                key: 3,
                class: q(c(h).e("count"))
              }, [
                b("span", {
                  class: q(c(h).e("count-inner"))
                }, F(c(xe)) + " / " + F(S.maxlength), 3)
              ], 2)) : oe("v-if", !0),
              c(ae) && c(be) && c(re) ? (R(), de(c(ft), {
                key: 4,
                class: q([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(ae) === "validating")
                ])
              }, {
                default: ue(() => [
                  (R(), de(jt(c(be))))
                ]),
                _: 1
              }, 8, ["class"])) : oe("v-if", !0)
            ], 2)
          ], 2)) : oe("v-if", !0)
        ], 2),
        oe(" append slot "),
        S.$slots.append ? (R(), H("div", {
          key: 1,
          class: q(c(h).be("group", "append"))
        }, [
          Se(S.$slots, "append")
        ], 2)) : oe("v-if", !0)
      ], 64)) : (R(), H(bt, { key: 1 }, [
        oe(" textarea "),
        b("textarea", Xr({
          id: c(p),
          ref_key: "textarea",
          ref: f,
          class: [c(g).e("inner"), c(h).is("focus", c(Y))]
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
          onCompositionstart: c(et),
          onCompositionupdate: c(gt),
          onCompositionend: c(_t),
          onInput: st,
          onFocus: c(Z),
          onBlur: c(le),
          onChange: Ze,
          onKeydown: te
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(G) ? (R(), H("span", {
          key: 0,
          style: Lt(E.value),
          class: q(c(h).e("count"))
        }, F(c(xe)) + " / " + F(S.maxlength), 7)) : oe("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Py = /* @__PURE__ */ Je(Ry, [["__file", "input.vue"]]);
const Ny = yn(Py), jr = 4, $y = {
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
}, My = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), gl = Symbol("scrollbarContextKey"), Dy = Ye({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Fy = "Thumb", zy = /* @__PURE__ */ ie({
  __name: "thumb",
  props: Dy,
  setup(e) {
    const t = e, n = ze(gl), r = mt("scrollbar");
    n || cl(Fy, "can not inject scrollbar context");
    const o = U(), a = U(), s = U({}), i = U(!1);
    let l = !1, u = !1, d = pt ? document.onselectstart : null;
    const p = I(() => $y[t.vertical ? "vertical" : "horizontal"]), m = I(() => My({
      size: t.size,
      move: t.move,
      bar: p.value
    })), y = I(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), h = (T) => {
      var L;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (L = window.getSelection()) == null || L.removeAllRanges(), A(T);
      const Y = T.currentTarget;
      Y && (s.value[p.value.axis] = Y[p.value.offset] - (T[p.value.client] - Y.getBoundingClientRect()[p.value.direction]));
    }, g = (T) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const L = Math.abs(T.target.getBoundingClientRect()[p.value.direction] - T[p.value.client]), Y = a.value[p.value.offset] / 2, Z = (L - Y) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Z * n.wrapElement[p.value.scrollSize] / 100;
    }, A = (T) => {
      T.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", C), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (T) => {
      if (!o.value || !a.value || l === !1)
        return;
      const L = s.value[p.value.axis];
      if (!L)
        return;
      const Y = (o.value.getBoundingClientRect()[p.value.direction] - T[p.value.client]) * -1, Z = a.value[p.value.offset] - L, le = (Y - Z) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = le * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", C), _(), u && (i.value = !1);
    }, x = () => {
      u = !1, i.value = !!t.size;
    }, E = () => {
      u = !0, i.value = l;
    };
    Dn(() => {
      _(), document.removeEventListener("mouseup", C);
    });
    const _ = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return vn(qn(n, "scrollbarElement"), "mousemove", x), vn(qn(n, "scrollbarElement"), "mouseleave", E), (T, L) => (R(), de(io, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: ue(() => [
        yt(b("div", {
          ref_key: "instance",
          ref: o,
          class: q([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: g
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: q(c(r).e("thumb")),
            style: Lt(c(m)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [nr, T.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var lc = /* @__PURE__ */ Je(zy, [["__file", "thumb.vue"]]);
const By = Ye({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Vy = /* @__PURE__ */ ie({
  __name: "bar",
  props: By,
  setup(e, { expose: t }) {
    const n = e, r = ze(gl), o = U(0), a = U(0), s = U(""), i = U(""), l = U(1), u = U(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const y = m.offsetHeight - jr, h = m.offsetWidth - jr;
          a.value = m.scrollTop * 100 / y * l.value, o.value = m.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const y = m.offsetHeight - jr, h = m.offsetWidth - jr, g = y ** 2 / m.scrollHeight, A = h ** 2 / m.scrollWidth, f = Math.max(g, n.minSize), C = Math.max(A, n.minSize);
        l.value = g / (y - g) / (f / (y - f)), u.value = A / (h - A) / (C / (h - C)), i.value = f + jr < y ? `${f}px` : "", s.value = C + jr < h ? `${C}px` : "";
      }
    }), (m, y) => (R(), H(bt, null, [
      D(lc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      D(lc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var jy = /* @__PURE__ */ Je(Vy, [["__file", "bar.vue"]]);
const Uy = Ye({
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
    type: _e([String, Object, Array]),
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
  ...zr(["ariaLabel", "ariaOrientation"])
}), Hy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(De)
}, Wy = "ElScrollbar", Gy = ie({
  name: Wy
}), Ky = /* @__PURE__ */ ie({
  ...Gy,
  props: Uy,
  emits: Hy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = mt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = U(), d = U(), p = U(), m = U(), y = I(() => {
      const _ = {};
      return r.height && (_.height = to(r.height)), r.maxHeight && (_.maxHeight = to(r.maxHeight)), [r.wrapStyle, _];
    }), h = I(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = I(() => [o.e("view"), r.viewClass]), A = () => {
      var _;
      d.value && ((_ = m.value) == null || _.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(_, T) {
      Qt(_) ? d.value.scrollTo(_) : De(_) && De(T) && d.value.scrollTo(_, T);
    }
    const C = (_) => {
      De(_) && (d.value.scrollTop = _);
    }, x = (_) => {
      De(_) && (d.value.scrollLeft = _);
    }, E = () => {
      var _;
      (_ = m.value) == null || _.update();
    };
    return Ee(() => r.noresize, (_) => {
      _ ? (a?.(), s?.()) : ({ stop: a } = Cn(p, E), s = vn("resize", E));
    }, { immediate: !0 }), Ee(() => [r.maxHeight, r.height], () => {
      r.native || lt(() => {
        var _;
        E(), d.value && ((_ = m.value) == null || _.handleScroll(d.value));
      });
    }), Nn(gl, xr({
      scrollbarElement: u,
      wrapElement: d
    })), hf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), ut(() => {
      r.native || lt(() => {
        E();
      });
    }), Xc(() => E()), t({
      wrapRef: d,
      update: E,
      scrollTo: f,
      setScrollTop: C,
      setScrollLeft: x,
      handleScroll: A
    }), (_, T) => (R(), H("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: q(c(o).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: q(c(h)),
        style: Lt(c(y)),
        tabindex: _.tabindex,
        onScroll: A
      }, [
        (R(), de(jt(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: p,
          class: q(c(g)),
          style: Lt(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: ue(() => [
            Se(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      _.native ? oe("v-if", !0) : (R(), de(jy, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var qy = /* @__PURE__ */ Je(Ky, [["__file", "scrollbar.vue"]]);
const Yy = yn(qy), vl = Symbol("popper"), wd = Symbol("popperContent"), Zy = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], kd = Ye({
  role: {
    type: String,
    values: Zy,
    default: "tooltip"
  }
}), Xy = ie({
  name: "ElPopper",
  inheritAttrs: !1
}), Qy = /* @__PURE__ */ ie({
  ...Xy,
  props: kd,
  setup(e, { expose: t }) {
    const n = e, r = U(), o = U(), a = U(), s = U(), i = I(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Nn(vl, l), (u, d) => Se(u.$slots, "default");
  }
});
var Jy = /* @__PURE__ */ Je(Qy, [["__file", "popper.vue"]]);
const Td = Ye({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), e1 = ie({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), t1 = /* @__PURE__ */ ie({
  ...e1,
  props: Td,
  setup(e, { expose: t }) {
    const n = e, r = mt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = ze(wd, void 0);
    return Ee(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Dn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (R(), H("span", {
      ref_key: "arrowRef",
      ref: a,
      class: q(c(r).e("arrow")),
      style: Lt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var n1 = /* @__PURE__ */ Je(t1, [["__file", "arrow.vue"]]);
const Sd = Ye({
  virtualRef: {
    type: _e(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: _e(Function)
  },
  onMouseleave: {
    type: _e(Function)
  },
  onClick: {
    type: _e(Function)
  },
  onKeydown: {
    type: _e(Function)
  },
  onFocus: {
    type: _e(Function)
  },
  onBlur: {
    type: _e(Function)
  },
  onContextmenu: {
    type: _e(Function)
  },
  id: String,
  open: Boolean
}), Ed = Symbol("elForwardRef"), r1 = (e) => {
  Nn(Ed, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, o1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Os = (e) => {
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
}, a1 = "ElOnlyChild", s1 = ie({
  name: a1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ze(Ed), a = o1((r = o?.setForwardRef) != null ? r : Po);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = Ad(i);
      return l ? yt(gf(l, n), [[a]]) : null;
    };
  }
});
function Ad(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Qt(n))
      switch (n.type) {
        case vf:
          continue;
        case Yc:
        case "svg":
          return ic(n);
        case bt:
          return Ad(n.children);
        default:
          return n;
      }
    return ic(n);
  }
  return null;
}
function ic(e) {
  const t = mt("only-child");
  return D("span", {
    class: t.e("content")
  }, [e]);
}
const l1 = ie({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), i1 = /* @__PURE__ */ ie({
  ...l1,
  props: Sd,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ze(vl, void 0);
    r1(o);
    const a = I(() => i.value ? n.id : void 0), s = I(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = I(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = I(() => i.value ? `${n.open}` : void 0);
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
    return ut(() => {
      Ee(() => n.virtualRef, (p) => {
        p && (o.value = Xn(p));
      }, {
        immediate: !0
      }), Ee(o, (p, m) => {
        u?.(), u = void 0, gn(p) && (d.forEach((y) => {
          var h;
          const g = n[y];
          g && (p.addEventListener(y.slice(2).toLowerCase(), g), (h = m?.removeEventListener) == null || h.call(m, y.slice(2).toLowerCase(), g));
        }), Os(p) && (u = Ee([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            er(y[g]) ? p.removeAttribute(h) : p.setAttribute(h, y[g]);
          });
        }, { immediate: !0 }))), gn(m) && Os(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => m.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Dn(() => {
      if (u?.(), u = void 0, o.value && gn(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const y = n[m];
          y && p.removeEventListener(m.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? oe("v-if", !0) : (R(), de(c(s1), Xr({ key: 0 }, p.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: ue(() => [
        Se(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var c1 = /* @__PURE__ */ Je(i1, [["__file", "trigger.vue"]]);
const es = "focus-trap.focus-after-trapped", ts = "focus-trap.focus-after-released", u1 = "focus-trap.focusout-prevented", cc = {
  cancelable: !0,
  bubbles: !1
}, d1 = {
  cancelable: !0,
  bubbles: !1
}, uc = "focusAfterTrapped", dc = "focusAfterReleased", f1 = Symbol("elFocusTrap"), bl = U(), Ba = U(0), yl = U(0);
let Zo = 0;
const Cd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, fc = (e, t) => {
  for (const n of e)
    if (!p1(n, t))
      return n;
}, p1 = (e, t) => {
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
}, m1 = (e) => {
  const t = Cd(e), n = fc(t, e), r = fc(t.reverse(), e);
  return [n, r];
}, h1 = (e) => e instanceof HTMLInputElement && "select" in e, Wn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    gn(e) && !Os(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), yl.value = window.performance.now(), e !== n && h1(e) && t && e.select(), gn(e) && r && e.removeAttribute("tabindex");
  }
};
function pc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const g1 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = pc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = pc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, v1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Wn(r, t), document.activeElement !== n)
      return;
}, mc = g1(), b1 = () => Ba.value > yl.value, Xo = () => {
  bl.value = "pointer", Ba.value = window.performance.now();
}, hc = () => {
  bl.value = "keyboard", Ba.value = window.performance.now();
}, y1 = () => (ut(() => {
  Zo === 0 && (document.addEventListener("mousedown", Xo), document.addEventListener("touchstart", Xo), document.addEventListener("keydown", hc)), Zo++;
}), Dn(() => {
  Zo--, Zo <= 0 && (document.removeEventListener("mousedown", Xo), document.removeEventListener("touchstart", Xo), document.removeEventListener("keydown", hc));
}), {
  focusReason: bl,
  lastUserFocusTimestamp: Ba,
  lastAutomatedFocusTimestamp: yl
}), Qo = (e) => new CustomEvent(u1, {
  ...d1,
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
let qr = [];
const gc = (e) => {
  e.code === Rn.esc && qr.forEach((t) => t(e));
}, _1 = (e) => {
  ut(() => {
    qr.length === 0 && document.addEventListener("keydown", gc), pt && qr.push(e);
  }), Dn(() => {
    qr = qr.filter((t) => t !== e), qr.length === 0 && pt && document.removeEventListener("keydown", gc);
  });
}, w1 = ie({
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
    uc,
    dc,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = U();
    let r, o;
    const { focusReason: a } = y1();
    _1((h) => {
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
      const { code: g, altKey: A, ctrlKey: f, metaKey: C, currentTarget: x, shiftKey: E } = h, { loop: _ } = e, T = g === Rn.tab && !A && !f && !C, L = document.activeElement;
      if (T && L) {
        const Y = x, [Z, le] = m1(Y);
        if (Z && le) {
          if (!E && L === le) {
            const ae = Qo({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (h.preventDefault(), _ && Wn(Z, !0));
          } else if (E && [Z, Y].includes(L)) {
            const ae = Qo({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (h.preventDefault(), _ && Wn(le, !0));
          }
        } else if (L === Y) {
          const ae = Qo({
            focusReason: a.value
          });
          t("focusout-prevented", ae), ae.defaultPrevented || h.preventDefault();
        }
      }
    };
    Nn(f1, {
      focusTrapRef: n,
      onKeydown: i
    }), Ee(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), Ee([n], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", d), g.removeEventListener("focusout", p));
    });
    const l = (h) => {
      t(uc, h);
    }, u = (h) => t(dc, h), d = (h) => {
      const g = c(n);
      if (!g)
        return;
      const A = h.target, f = h.relatedTarget, C = A && g.contains(A);
      e.trapped || f && g.contains(f) || (r = f), C && t("focusin", h), !s.paused && e.trapped && (C ? o = A : Wn(o, !0));
    }, p = (h) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const A = h.relatedTarget;
          !er(A) && !g.contains(A) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = Qo({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Wn(o, !0);
            }
          }, 0);
        } else {
          const A = h.target;
          A && g.contains(A) || t("focusout", h);
        }
    };
    async function m() {
      await lt();
      const h = c(n);
      if (h) {
        mc.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const f = new Event(es, cc);
          h.addEventListener(es, l), h.dispatchEvent(f), f.defaultPrevented || lt(() => {
            let C = e.focusStartEl;
            Dt(C) || (Wn(C), document.activeElement !== C && (C = "first")), C === "first" && v1(Cd(h), !0), (document.activeElement === g || C === "container") && Wn(h);
          });
        }
      }
    }
    function y() {
      const h = c(n);
      if (h) {
        h.removeEventListener(es, l);
        const g = new CustomEvent(ts, {
          ...cc,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(ts, u), h.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !b1() || h.contains(document.activeElement)) && Wn(r ?? document.body), h.removeEventListener(ts, u), mc.remove(s);
      }
    }
    return ut(() => {
      e.trapped && m(), Ee(() => e.trapped, (h) => {
        h ? m() : y();
      });
    }), Dn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function k1(e, t, n, r, o, a) {
  return Se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var T1 = /* @__PURE__ */ Je(w1, [["render", k1], ["__file", "focus-trap.vue"]]), Yt = "top", nn = "bottom", rn = "right", Zt = "left", _l = "auto", Uo = [Yt, nn, rn, Zt], no = "start", Mo = "end", S1 = "clippingParents", Od = "viewport", vo = "popper", E1 = "reference", vc = Uo.reduce(function(e, t) {
  return e.concat([t + "-" + no, t + "-" + Mo]);
}, []), Va = [].concat(Uo, [_l]).reduce(function(e, t) {
  return e.concat([t, t + "-" + no, t + "-" + Mo]);
}, []), A1 = "beforeRead", C1 = "read", O1 = "afterRead", L1 = "beforeMain", I1 = "main", x1 = "afterMain", R1 = "beforeWrite", P1 = "write", N1 = "afterWrite", $1 = [A1, C1, O1, L1, I1, x1, R1, P1, N1];
function Mn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nr(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function tn(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function wl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function M1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !tn(a) || !Mn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function D1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !tn(o) || !Mn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Ld = { name: "applyStyles", enabled: !0, phase: "write", fn: M1, effect: D1, requires: ["computeStyles"] };
function Pn(e) {
  return e.split("-")[0];
}
var Ir = Math.max, ka = Math.min, ro = Math.round;
function Ls() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Id() {
  return !/^((?!chrome|android).)*safari/i.test(Ls());
}
function oo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && tn(e) && (o = e.offsetWidth > 0 && ro(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ro(r.height) / e.offsetHeight || 1);
  var s = Nr(e) ? Jt(e) : window, i = s.visualViewport, l = !Id() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: u + p, bottom: d + m, left: u, x: u, y: d };
}
function kl(e) {
  var t = oo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function xd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && wl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function or(e) {
  return Jt(e).getComputedStyle(e);
}
function F1(e) {
  return ["table", "td", "th"].indexOf(Mn(e)) >= 0;
}
function _r(e) {
  return ((Nr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ja(e) {
  return Mn(e) === "html" ? e : e.assignedSlot || e.parentNode || (wl(e) ? e.host : null) || _r(e);
}
function bc(e) {
  return !tn(e) || or(e).position === "fixed" ? null : e.offsetParent;
}
function z1(e) {
  var t = /firefox/i.test(Ls()), n = /Trident/i.test(Ls());
  if (n && tn(e)) {
    var r = or(e);
    if (r.position === "fixed") return null;
  }
  var o = ja(e);
  for (wl(o) && (o = o.host); tn(o) && ["html", "body"].indexOf(Mn(o)) < 0; ) {
    var a = or(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Ho(e) {
  for (var t = Jt(e), n = bc(e); n && F1(n) && or(n).position === "static"; ) n = bc(n);
  return n && (Mn(n) === "html" || Mn(n) === "body" && or(n).position === "static") ? t : n || z1(e) || t;
}
function Tl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ao(e, t, n) {
  return Ir(e, ka(t, n));
}
function B1(e, t, n) {
  var r = Ao(e, t, n);
  return r > n ? n : r;
}
function Rd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Pd(e) {
  return Object.assign({}, Rd(), e);
}
function Nd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var V1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Pd(typeof e != "number" ? e : Nd(e, Uo));
};
function j1(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Pn(n.placement), l = Tl(i), u = [Zt, rn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = V1(o.padding, n), m = kl(a), y = l === "y" ? Yt : Zt, h = l === "y" ? nn : rn, g = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], A = s[l] - n.rects.reference[l], f = Ho(a), C = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, x = g / 2 - A / 2, E = p[y], _ = C - m[d] - p[h], T = C / 2 - m[d] / 2 + x, L = Ao(E, T, _), Y = l;
    n.modifiersData[r] = (t = {}, t[Y] = L, t.centerOffset = L - T, t);
  }
}
function U1(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xd(t.elements.popper, o) && (t.elements.arrow = o));
}
var H1 = { name: "arrow", enabled: !0, phase: "main", fn: j1, effect: U1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ao(e) {
  return e.split("-")[1];
}
var W1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function G1(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: ro(n * o) / o || 0, y: ro(r * o) / o || 0 };
}
function yc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, y = m === void 0 ? 0 : m, h = s.y, g = h === void 0 ? 0 : h, A = typeof d == "function" ? d({ x: y, y: g }) : { x: y, y: g };
  y = A.x, g = A.y;
  var f = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), x = Zt, E = Yt, _ = window;
  if (u) {
    var T = Ho(n), L = "clientHeight", Y = "clientWidth";
    if (T === Jt(n) && (T = _r(n), or(T).position !== "static" && i === "absolute" && (L = "scrollHeight", Y = "scrollWidth")), T = T, o === Yt || (o === Zt || o === rn) && a === Mo) {
      E = nn;
      var Z = p && T === _ && _.visualViewport ? _.visualViewport.height : T[L];
      g -= Z - r.height, g *= l ? 1 : -1;
    }
    if (o === Zt || (o === Yt || o === nn) && a === Mo) {
      x = rn;
      var le = p && T === _ && _.visualViewport ? _.visualViewport.width : T[Y];
      y -= le - r.width, y *= l ? 1 : -1;
    }
  }
  var re = Object.assign({ position: i }, u && W1), ae = d === !0 ? G1({ x: y, y: g }, Jt(n)) : { x: y, y: g };
  if (y = ae.x, g = ae.y, l) {
    var be;
    return Object.assign({}, re, (be = {}, be[E] = C ? "0" : "", be[x] = f ? "0" : "", be.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + g + "px)" : "translate3d(" + y + "px, " + g + "px, 0)", be));
  }
  return Object.assign({}, re, (t = {}, t[E] = C ? g + "px" : "", t[x] = f ? y + "px" : "", t.transform = "", t));
}
function K1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Pn(t.placement), variation: ao(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, yc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, yc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var $d = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: K1, data: {} }, Jo = { passive: !0 };
function q1(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Jt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Jo);
  }), i && l.addEventListener("resize", n.update, Jo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Jo);
    }), i && l.removeEventListener("resize", n.update, Jo);
  };
}
var Md = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: q1, data: {} }, Y1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function sa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Y1[t];
  });
}
var Z1 = { start: "end", end: "start" };
function _c(e) {
  return e.replace(/start|end/g, function(t) {
    return Z1[t];
  });
}
function Sl(e) {
  var t = Jt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function El(e) {
  return oo(_r(e)).left + Sl(e).scrollLeft;
}
function X1(e, t) {
  var n = Jt(e), r = _r(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Id();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + El(e), y: l };
}
function Q1(e) {
  var t, n = _r(e), r = Sl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ir(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Ir(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + El(e), l = -r.scrollTop;
  return or(o || n).direction === "rtl" && (i += Ir(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Al(e) {
  var t = or(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Dd(e) {
  return ["html", "body", "#document"].indexOf(Mn(e)) >= 0 ? e.ownerDocument.body : tn(e) && Al(e) ? e : Dd(ja(e));
}
function Co(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Dd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Jt(r), s = o ? [a].concat(a.visualViewport || [], Al(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Co(ja(s)));
}
function Is(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function J1(e, t) {
  var n = oo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wc(e, t, n) {
  return t === Od ? Is(X1(e, n)) : Nr(t) ? J1(t, n) : Is(Q1(_r(e)));
}
function e_(e) {
  var t = Co(ja(e)), n = ["absolute", "fixed"].indexOf(or(e).position) >= 0, r = n && tn(e) ? Ho(e) : e;
  return Nr(r) ? t.filter(function(o) {
    return Nr(o) && xd(o, r) && Mn(o) !== "body";
  }) : [];
}
function t_(e, t, n, r) {
  var o = t === "clippingParents" ? e_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = wc(e, u, r);
    return l.top = Ir(d.top, l.top), l.right = ka(d.right, l.right), l.bottom = ka(d.bottom, l.bottom), l.left = Ir(d.left, l.left), l;
  }, wc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Fd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Pn(r) : null, a = r ? ao(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Yt:
      l = { x: s, y: t.y - n.height };
      break;
    case nn:
      l = { x: s, y: t.y + t.height };
      break;
    case rn:
      l = { x: t.x + t.width, y: i };
      break;
    case Zt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Tl(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case no:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Mo:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Do(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? S1 : i, u = n.rootBoundary, d = u === void 0 ? Od : u, p = n.elementContext, m = p === void 0 ? vo : p, y = n.altBoundary, h = y === void 0 ? !1 : y, g = n.padding, A = g === void 0 ? 0 : g, f = Pd(typeof A != "number" ? A : Nd(A, Uo)), C = m === vo ? E1 : vo, x = e.rects.popper, E = e.elements[h ? C : m], _ = t_(Nr(E) ? E : E.contextElement || _r(e.elements.popper), l, d, s), T = oo(e.elements.reference), L = Fd({ reference: T, element: x, placement: o }), Y = Is(Object.assign({}, x, L)), Z = m === vo ? Y : T, le = { top: _.top - Z.top + f.top, bottom: Z.bottom - _.bottom + f.bottom, left: _.left - Z.left + f.left, right: Z.right - _.right + f.right }, re = e.modifiersData.offset;
  if (m === vo && re) {
    var ae = re[o];
    Object.keys(le).forEach(function(be) {
      var ye = [rn, nn].indexOf(be) >= 0 ? 1 : -1, V = [Yt, nn].indexOf(be) >= 0 ? "y" : "x";
      le[be] += ae[V] * ye;
    });
  }
  return le;
}
function n_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Va : l, d = ao(r), p = d ? i ? vc : vc.filter(function(h) {
    return ao(h) === d;
  }) : Uo, m = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(h, g) {
    return h[g] = Do(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[Pn(g)], h;
  }, {});
  return Object.keys(y).sort(function(h, g) {
    return y[h] - y[g];
  });
}
function r_(e) {
  if (Pn(e) === _l) return [];
  var t = sa(e);
  return [_c(e), t, _c(t)];
}
function o_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, h = y === void 0 ? !0 : y, g = n.allowedAutoPlacements, A = t.options.placement, f = Pn(A), C = f === A, x = l || (C || !h ? [sa(A)] : r_(A)), E = [A].concat(x).reduce(function(ve, J) {
      return ve.concat(Pn(J) === _l ? n_(t, { placement: J, boundary: d, rootBoundary: p, padding: u, flipVariations: h, allowedAutoPlacements: g }) : J);
    }, []), _ = t.rects.reference, T = t.rects.popper, L = /* @__PURE__ */ new Map(), Y = !0, Z = E[0], le = 0; le < E.length; le++) {
      var re = E[le], ae = Pn(re), be = ao(re) === no, ye = [Yt, nn].indexOf(ae) >= 0, V = ye ? "width" : "height", Q = Do(t, { placement: re, boundary: d, rootBoundary: p, altBoundary: m, padding: u }), j = ye ? be ? rn : Zt : be ? nn : Yt;
      _[V] > T[V] && (j = sa(j));
      var fe = sa(j), K = [];
      if (a && K.push(Q[ae] <= 0), i && K.push(Q[j] <= 0, Q[fe] <= 0), K.every(function(ve) {
        return ve;
      })) {
        Z = re, Y = !1;
        break;
      }
      L.set(re, K);
    }
    if (Y) for (var G = h ? 3 : 1, xe = function(ve) {
      var J = E.find(function(Ae) {
        var Ne = L.get(Ae);
        if (Ne) return Ne.slice(0, ve).every(function(he) {
          return he;
        });
      });
      if (J) return Z = J, "break";
    }, Be = G; Be > 0; Be--) {
      var ge = xe(Be);
      if (ge === "break") break;
    }
    t.placement !== Z && (t.modifiersData[r]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var a_ = { name: "flip", enabled: !0, phase: "main", fn: o_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function kc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Tc(e) {
  return [Yt, rn, nn, Zt].some(function(t) {
    return e[t] >= 0;
  });
}
function s_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Do(t, { elementContext: "reference" }), i = Do(t, { altBoundary: !0 }), l = kc(s, r), u = kc(i, o, a), d = Tc(l), p = Tc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var l_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: s_ };
function i_(e, t, n) {
  var r = Pn(e), o = [Zt, Yt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Zt, rn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function c_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Va.reduce(function(d, p) {
    return d[p] = i_(p, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var u_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: c_ };
function d_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Fd({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var zd = { name: "popperOffsets", enabled: !0, phase: "read", fn: d_, data: {} };
function f_(e) {
  return e === "x" ? "y" : "x";
}
function p_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, y = m === void 0 ? !0 : m, h = n.tetherOffset, g = h === void 0 ? 0 : h, A = Do(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: d }), f = Pn(t.placement), C = ao(t.placement), x = !C, E = Tl(f), _ = f_(E), T = t.modifiersData.popperOffsets, L = t.rects.reference, Y = t.rects.popper, Z = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, le = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), re = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ae = { x: 0, y: 0 };
  if (T) {
    if (a) {
      var be, ye = E === "y" ? Yt : Zt, V = E === "y" ? nn : rn, Q = E === "y" ? "height" : "width", j = T[E], fe = j + A[ye], K = j - A[V], G = y ? -Y[Q] / 2 : 0, xe = C === no ? L[Q] : Y[Q], Be = C === no ? -Y[Q] : -L[Q], ge = t.elements.arrow, ve = y && ge ? kl(ge) : { width: 0, height: 0 }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Rd(), Ae = J[ye], Ne = J[V], he = Ao(0, L[Q], ve[Q]), at = x ? L[Q] / 2 - G - he - Ae - le.mainAxis : xe - he - Ae - le.mainAxis, st = x ? -L[Q] / 2 + G + he + Ne + le.mainAxis : Be + he + Ne + le.mainAxis, Ze = t.elements.arrow && Ho(t.elements.arrow), Et = Ze ? E === "y" ? Ze.clientTop || 0 : Ze.clientLeft || 0 : 0, et = (be = re?.[E]) != null ? be : 0, gt = j + at - et - Et, _t = j + st - et, Xe = Ao(y ? ka(fe, gt) : fe, j, y ? Ir(K, _t) : K);
      T[E] = Xe, ae[E] = Xe - j;
    }
    if (i) {
      var wt, k = E === "x" ? Yt : Zt, O = E === "x" ? nn : rn, B = T[_], te = _ === "y" ? "height" : "width", Oe = B + A[k], me = B - A[O], S = [Yt, Zt].indexOf(f) !== -1, z = (wt = re?.[_]) != null ? wt : 0, we = S ? Oe : B - L[te] - Y[te] - z + le.altAxis, Le = S ? B + L[te] + Y[te] - z - le.altAxis : me, Qe = y && S ? B1(we, B, Le) : Ao(y ? we : Oe, B, y ? Le : me);
      T[_] = Qe, ae[_] = Qe - B;
    }
    t.modifiersData[r] = ae;
  }
}
var m_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: p_, requiresIfExists: ["offset"] };
function h_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function g_(e) {
  return e === Jt(e) || !tn(e) ? Sl(e) : h_(e);
}
function v_(e) {
  var t = e.getBoundingClientRect(), n = ro(t.width) / e.offsetWidth || 1, r = ro(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function b_(e, t, n) {
  n === void 0 && (n = !1);
  var r = tn(t), o = tn(t) && v_(t), a = _r(t), s = oo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Mn(t) !== "body" || Al(a)) && (i = g_(t)), tn(t) ? (l = oo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = El(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function y_(e) {
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
function __(e) {
  var t = y_(e);
  return $1.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function w_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function k_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Sc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ec() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Cl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Sc : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Sc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: u, setOptions: function(g) {
      var A = typeof g == "function" ? g(u.options) : g;
      h(), u.options = Object.assign({}, a, u.options, A), u.scrollParents = { reference: Nr(s) ? Co(s) : s.contextElement ? Co(s.contextElement) : [], popper: Co(i) };
      var f = __(k_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(C) {
        return C.enabled;
      }), y(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = u.elements, A = g.reference, f = g.popper;
        if (Ec(A, f)) {
          u.rects = { reference: b_(A, Ho(f), u.options.strategy === "fixed"), popper: kl(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
            return u.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var x = u.orderedModifiers[C], E = x.fn, _ = x.options, T = _ === void 0 ? {} : _, L = x.name;
            typeof E == "function" && (u = E({ state: u, options: T, name: L, instance: m }) || u);
          }
        }
      }
    }, update: w_(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(u);
      });
    }), destroy: function() {
      h(), p = !0;
    } };
    if (!Ec(s, i)) return m;
    m.setOptions(l).then(function(g) {
      !p && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function y() {
      u.orderedModifiers.forEach(function(g) {
        var A = g.name, f = g.options, C = f === void 0 ? {} : f, x = g.effect;
        if (typeof x == "function") {
          var E = x({ state: u, name: A, instance: m, options: C }), _ = function() {
          };
          d.push(E || _);
        }
      });
    }
    function h() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return m;
  };
}
Cl();
var T_ = [Md, zd, $d, Ld];
Cl({ defaultModifiers: T_ });
var S_ = [Md, zd, $d, Ld, u_, a_, m_, H1, l_], E_ = Cl({ defaultModifiers: S_ });
const A_ = ["fixed", "absolute"], C_ = Ye({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: _e(Array),
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
    values: Va,
    default: "bottom"
  },
  popperOptions: {
    type: _e(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: A_,
    default: "absolute"
  }
}), Bd = Ye({
  ...C_,
  id: String,
  style: {
    type: _e([String, Array, Object])
  },
  className: {
    type: _e([String, Array, Object])
  },
  effect: {
    type: _e(String),
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
    type: _e([String, Array, Object])
  },
  popperStyle: {
    type: _e([String, Array, Object])
  },
  referenceEl: {
    type: _e(Object)
  },
  triggerTargetEl: {
    type: _e(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...zr(["ariaLabel"])
}), O_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, L_ = (e, t) => {
  const n = U(!1), r = U();
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
}, I_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...R_(e), ...t]
  };
  return P_(a, o?.modifiers), a;
}, x_ = (e) => {
  if (pt)
    return Xn(e);
};
function R_(e) {
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
function P_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const N_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = $_(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = I(() => {
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
  }), a = hr(), s = U({
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
  return Ee(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Ee([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = E_(l, u, c(o)));
  }), Dn(() => {
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
function $_(e) {
  const t = Object.keys(e.elements), n = va(t.map((o) => [o, e.styles[o] || {}])), r = va(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const M_ = 0, D_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ze(vl, void 0), a = U(), s = U(), i = I(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = I(() => {
    var f;
    const C = c(a), x = (f = c(s)) != null ? f : M_;
    return {
      name: "arrow",
      enabled: !eb(C),
      options: {
        element: C,
        padding: x
      }
    };
  }), u = I(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...I_(e, [
      c(l),
      c(i)
    ])
  })), d = I(() => x_(e.referenceEl) || c(r)), { attributes: p, state: m, styles: y, update: h, forceUpdate: g, instanceRef: A } = N_(d, n, u);
  return Ee(A, (f) => t.value = f), ut(() => {
    Ee(() => {
      var f;
      return (f = c(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: A,
    state: m,
    styles: y,
    role: o,
    forceUpdate: g,
    update: h
  };
}, F_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = td(), a = mt("popper"), s = I(() => c(t).popper), i = U(De(e.zIndex) ? e.zIndex : o()), l = I(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = I(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = I(() => r.value === "dialog" ? "false" : void 0), p = I(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = De(e.zIndex) ? e.zIndex : o();
    }
  };
}, z_ = ie({
  name: "ElPopperContent"
}), B_ = /* @__PURE__ */ ie({
  ...z_,
  props: Bd,
  emits: O_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = L_(r, n), { attributes: p, arrowRef: m, contentRef: y, styles: h, instanceRef: g, role: A, update: f } = D_(r), {
      ariaModal: C,
      arrowStyle: x,
      contentAttrs: E,
      contentClass: _,
      contentStyle: T,
      updateZIndex: L
    } = F_(r, {
      styles: h,
      attributes: p,
      role: A
    }), Y = ze(wa, void 0), Z = U();
    Nn(wd, {
      arrowStyle: x,
      arrowRef: m,
      arrowOffset: Z
    }), Y && Nn(wa, {
      ...Y,
      addInputId: Po,
      removeInputId: Po
    });
    let le;
    const re = (be = !0) => {
      f(), be && L();
    }, ae = () => {
      re(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ut(() => {
      Ee(() => r.triggerTargetEl, (be, ye) => {
        le?.(), le = void 0;
        const V = c(be || y.value), Q = c(ye || y.value);
        gn(V) && (le = Ee([A, () => r.ariaLabel, C, () => r.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((fe, K) => {
            er(j[K]) ? V.removeAttribute(fe) : V.setAttribute(fe, j[K]);
          });
        }, { immediate: !0 })), Q !== V && gn(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          Q.removeAttribute(j);
        });
      }, { immediate: !0 }), Ee(() => r.visible, ae, { immediate: !0 });
    }), Dn(() => {
      le?.(), le = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: g,
      updatePopper: re,
      contentStyle: T
    }), (be, ye) => (R(), H("div", Xr({
      ref_key: "contentRef",
      ref: y
    }, c(E), {
      style: c(T),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (V) => be.$emit("mouseenter", V),
      onMouseleave: (V) => be.$emit("mouseleave", V)
    }), [
      D(c(T1), {
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
        default: ue(() => [
          Se(be.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var V_ = /* @__PURE__ */ Je(B_, [["__file", "content.vue"]]);
const j_ = yn(Jy), Ol = Symbol("elTooltip");
function Ac() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Vo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const U_ = Ye({
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
}), H_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Ac(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Ac();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const p = c(n);
        De(p) && p > 0 && s(() => {
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
}, Ll = Ye({
  ...U_,
  ...Bd,
  appendTo: {
    type: _e([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: _e(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...zr(["ariaLabel"])
}), Vd = Ye({
  ...Sd,
  disabled: Boolean,
  trigger: {
    type: _e([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: _e(Array),
    default: () => [Rn.enter, Rn.numpadEnter, Rn.space]
  }
}), W_ = Ma({
  type: _e(Boolean),
  default: null
}), G_ = Ma({
  type: _e(Function)
}), K_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: W_,
    [n]: G_
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
      const m = Ht(), { emit: y } = m, h = m.props, g = I(() => rt(h[n])), A = I(() => h[e] === null), f = (L) => {
        s.value !== !0 && (s.value = !0, i && (i.value = L), rt(d) && d(L));
      }, C = (L) => {
        s.value !== !1 && (s.value = !1, i && (i.value = L), rt(p) && p(L));
      }, x = (L) => {
        if (h.disabled === !0 || rt(u) && !u())
          return;
        const Y = g.value && pt;
        Y && y(t, !0), (A.value || !Y) && f(L);
      }, E = (L) => {
        if (h.disabled === !0 || !pt)
          return;
        const Y = g.value && pt;
        Y && y(t, !1), (A.value || !Y) && C(L);
      }, _ = (L) => {
        gr(L) && (h.disabled && L ? g.value && y(t, !1) : s.value !== L && (L ? f() : C()));
      }, T = () => {
        s.value ? E() : x();
      };
      return Ee(() => h[e], _), l && m.appContext.config.globalProperties.$route !== void 0 && Ee(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && E();
      }), ut(() => {
        _(h[e]);
      }), {
        hide: E,
        show: x,
        toggle: T,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: q_,
  useModelToggleEmits: Y_,
  useModelToggle: Z_
} = K_("visible"), X_ = Ye({
  ...kd,
  ...q_,
  ...Ll,
  ...Vd,
  ...Td,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Q_ = [
  ...Y_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], J_ = (e, t) => On(e) ? e.includes(t) : e === t, Ur = (e, t, n) => (r) => {
  J_(c(e), t) && n(r);
}, Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, ew = ie({
  name: "ElTooltipTrigger"
}), tw = /* @__PURE__ */ ie({
  ...ew,
  props: Vd,
  setup(e, { expose: t }) {
    const n = e, r = mt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = ze(Ol, void 0), d = U(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = qn(n, "trigger"), y = Gn(p, Ur(m, "hover", i)), h = Gn(p, Ur(m, "hover", l)), g = Gn(p, Ur(m, "click", (E) => {
      E.button === 0 && u(E);
    })), A = Gn(p, Ur(m, "focus", i)), f = Gn(p, Ur(m, "focus", l)), C = Gn(p, Ur(m, "contextmenu", (E) => {
      E.preventDefault(), u(E);
    })), x = Gn(p, (E) => {
      const { code: _ } = E;
      n.triggerKeys.includes(_) && (E.preventDefault(), u(E));
    });
    return t({
      triggerRef: d
    }), (E, _) => (R(), de(c(c1), {
      id: c(a),
      "virtual-ref": E.virtualRef,
      open: c(s),
      "virtual-triggering": E.virtualTriggering,
      class: q(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(g),
      onContextmenu: c(C),
      onFocus: c(A),
      onMouseenter: c(y),
      onMouseleave: c(h),
      onKeydown: c(x)
    }, {
      default: ue(() => [
        Se(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var nw = /* @__PURE__ */ Je(tw, [["__file", "trigger.vue"]]);
const rw = Ye({
  to: {
    type: _e([String, Object]),
    required: !0
  },
  disabled: Boolean
}), ow = /* @__PURE__ */ ie({
  __name: "teleport",
  props: rw,
  setup(e) {
    return (t, n) => t.disabled ? Se(t.$slots, "default", { key: 0 }) : (R(), de(bf, {
      key: 1,
      to: t.to
    }, [
      Se(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var aw = /* @__PURE__ */ Je(ow, [["__file", "teleport.vue"]]);
const sw = yn(aw), jd = () => {
  const e = el(), t = vd(), n = I(() => `${e.value}-popper-container-${t.prefix}`), r = I(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, lw = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, iw = () => {
  const { id: e, selector: t } = jd();
  return yf(() => {
    pt && (document.body.querySelector(t.value) || lw(e.value));
  }), {
    id: e,
    selector: t
  };
}, cw = ie({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), uw = /* @__PURE__ */ ie({
  ...cw,
  props: Ll,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = jd(), o = mt("tooltip"), a = U();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: p,
      onOpen: m,
      onShow: y,
      onHide: h,
      onBeforeShow: g,
      onBeforeHide: A
    } = ze(Ol, void 0), f = I(() => n.transition || `${o.namespace.value}-fade-in-linear`), C = I(() => n.persistent);
    Dn(() => {
      s?.();
    });
    const x = I(() => c(C) ? !0 : c(u)), E = I(() => n.disabled ? !1 : c(u)), _ = I(() => n.appendTo || r.value), T = I(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), L = U(!0), Y = () => {
      h(), Q() && Wn(document.body), L.value = !0;
    }, Z = () => {
      if (c(i))
        return !0;
    }, le = Gn(Z, () => {
      n.enterable && c(d) === "hover" && m();
    }), re = Gn(Z, () => {
      c(d) === "hover" && p();
    }), ae = () => {
      var j, fe;
      (fe = (j = a.value) == null ? void 0 : j.updatePopper) == null || fe.call(j), g?.();
    }, be = () => {
      A?.();
    }, ye = () => {
      y(), s = vb(I(() => {
        var j;
        return (j = a.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && p();
      });
    }, V = () => {
      n.virtualTriggering || p();
    }, Q = (j) => {
      var fe;
      const K = (fe = a.value) == null ? void 0 : fe.popperContentRef, G = j?.relatedTarget || document.activeElement;
      return K?.contains(G);
    };
    return Ee(() => c(u), (j) => {
      j ? L.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ee(() => n.content, () => {
      var j, fe;
      (fe = (j = a.value) == null ? void 0 : j.updatePopper) == null || fe.call(j);
    }), t({
      contentRef: a,
      isFocusInsideContent: Q
    }), (j, fe) => (R(), de(c(sw), {
      disabled: !j.teleported,
      to: c(_)
    }, {
      default: ue(() => [
        D(io, {
          name: c(f),
          onAfterLeave: Y,
          onBeforeEnter: ae,
          onAfterEnter: ye,
          onBeforeLeave: be
        }, {
          default: ue(() => [
            c(x) ? yt((R(), de(c(V_), Xr({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, j.$attrs, {
              "aria-label": j.ariaLabel,
              "aria-hidden": L.value,
              "boundaries-padding": j.boundariesPadding,
              "fallback-placements": j.fallbackPlacements,
              "gpu-acceleration": j.gpuAcceleration,
              offset: j.offset,
              placement: j.placement,
              "popper-options": j.popperOptions,
              strategy: j.strategy,
              effect: j.effect,
              enterable: j.enterable,
              pure: j.pure,
              "popper-class": j.popperClass,
              "popper-style": [j.popperStyle, c(T)],
              "reference-el": j.referenceEl,
              "trigger-target-el": j.triggerTargetEl,
              visible: c(E),
              "z-index": j.zIndex,
              onMouseenter: c(le),
              onMouseleave: c(re),
              onBlur: V,
              onClose: c(p)
            }), {
              default: ue(() => [
                Se(j.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [nr, c(E)]
            ]) : oe("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var dw = /* @__PURE__ */ Je(uw, [["__file", "content.vue"]]);
const fw = ie({
  name: "ElTooltip"
}), pw = /* @__PURE__ */ ie({
  ...fw,
  props: X_,
  emits: Q_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    iw();
    const o = Fa(), a = U(), s = U(), i = () => {
      var f;
      const C = c(a);
      C && ((f = C.popperInstanceRef) == null || f.update());
    }, l = U(!1), u = U(), { show: d, hide: p, hasUpdateHandler: m } = Z_({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: h } = H_({
      showAfter: qn(r, "showAfter"),
      hideAfter: qn(r, "hideAfter"),
      autoClose: qn(r, "autoClose"),
      open: d,
      close: p
    }), g = I(() => gr(r.visible) && !m.value);
    Nn(Ol, {
      controlled: g,
      id: o,
      open: $s(l),
      trigger: qn(r, "trigger"),
      onOpen: (f) => {
        y(f);
      },
      onClose: (f) => {
        h(f);
      },
      onToggle: (f) => {
        c(l) ? h(f) : y(f);
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
    }), Ee(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const A = (f) => {
      var C;
      return (C = s.value) == null ? void 0 : C.isFocusInsideContent(f);
    };
    return _f(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: A,
      updatePopper: i,
      onOpen: y,
      onClose: h,
      hide: p
    }), (f, C) => (R(), de(c(j_), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: ue(() => [
        D(nw, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: ue(() => [
            f.$slots.default ? Se(f.$slots, "default", { key: 0 }) : oe("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        D(dw, {
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
          default: ue(() => [
            Se(f.$slots, "content", {}, () => [
              f.rawContent ? (R(), H("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (R(), H("span", { key: 1 }, F(f.content), 1))
            ]),
            f.showArrow ? (R(), de(c(n1), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : oe("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var mw = /* @__PURE__ */ Je(pw, [["__file", "tooltip.vue"]]);
const hw = yn(mw), gw = Ye({
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
    type: _e([String, Object, Array])
  },
  offset: {
    type: _e(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), vw = ie({
  name: "ElBadge"
}), bw = /* @__PURE__ */ ie({
  ...vw,
  props: gw,
  setup(e, { expose: t }) {
    const n = e, r = mt("badge"), o = I(() => n.isDot ? "" : De(n.value) && De(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = I(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: to(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: to((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (R(), H("div", {
      class: q(c(r).b())
    }, [
      Se(s.$slots, "default"),
      D(io, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ue(() => [
          yt(b("sup", {
            class: q([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Lt(c(a))
          }, [
            Se(s.$slots, "content", { value: c(o) }, () => [
              Xt(F(c(o)), 1)
            ])
          ], 6), [
            [nr, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var yw = /* @__PURE__ */ Je(bw, [["__file", "badge.vue"]]);
const _w = yn(yw), ww = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), xs = Ye({
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
    values: dl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), kw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Tw = ie({
  name: "ElTag"
}), Sw = /* @__PURE__ */ ie({
  ...Tw,
  props: xs,
  emits: kw,
  setup(e, { emit: t }) {
    const n = e, r = jo(), o = mt("tag"), a = I(() => {
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
    return (u, d) => u.disableTransitions ? (R(), H("span", {
      key: 0,
      class: q(c(a)),
      style: Lt({ backgroundColor: u.color }),
      onClick: i
    }, [
      b("span", {
        class: q(c(o).e("content"))
      }, [
        Se(u.$slots, "default")
      ], 2),
      u.closable ? (R(), de(c(ft), {
        key: 0,
        class: q(c(o).e("close")),
        onClick: qe(s, ["stop"])
      }, {
        default: ue(() => [
          D(c(ya))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : oe("v-if", !0)
    ], 6)) : (R(), de(io, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ue(() => [
        b("span", {
          class: q(c(a)),
          style: Lt({ backgroundColor: u.color }),
          onClick: i
        }, [
          b("span", {
            class: q(c(o).e("content"))
          }, [
            Se(u.$slots, "default")
          ], 2),
          u.closable ? (R(), de(c(ft), {
            key: 0,
            class: q(c(o).e("close")),
            onClick: qe(s, ["stop"])
          }, {
            default: ue(() => [
              D(c(ya))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : oe("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Ew = /* @__PURE__ */ Je(Sw, [["__file", "tag.vue"]]);
const Aw = yn(Ew), dr = /* @__PURE__ */ new Map();
if (pt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of dr.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Cc(e, t) {
  let n = [];
  return On(t.arg) ? n = t.arg : gn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || d || p || m || y || t.value(r, o);
  };
}
const Cw = {
  beforeMount(e, t) {
    dr.has(e) || dr.set(e, []), dr.get(e).push({
      documentHandler: Cc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    dr.has(e) || dr.set(e, []);
    const n = dr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Cc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    dr.delete(e);
  }
}, Ow = Ye({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: _e(Object)
  },
  size: Da,
  button: {
    type: _e(Object)
  },
  experimentalFeatures: {
    type: _e(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: _e(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...sd
}), un = {};
ie({
  name: "ElConfigProvider",
  props: Ow,
  setup(e, { slots: t }) {
    Ee(() => e.message, (r) => {
      Object.assign(un, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = cd(e);
    return () => Se(t, "default", { config: n?.value });
  }
});
const Lw = 100, Iw = 600, Oc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Lw, delay: o = Iw } = rt(n) ? {} : n;
    let a, s;
    const i = () => rt(n) ? n() : n.handler(), l = () => {
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
}, xw = Ye({
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
  size: Da,
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
    validator: (e) => e === null || De(e) || ["min", "max"].includes(e),
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
  ...zr(["ariaLabel"])
}), Rw = {
  [rr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [tr]: (e) => De(e) || er(e),
  [St]: (e) => De(e) || er(e)
}, Pw = ie({
  name: "ElInputNumber"
}), Nw = /* @__PURE__ */ ie({
  ...Pw,
  props: xw,
  emits: Rw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ul(), a = mt("input-number"), s = U(), i = xr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = za(), u = I(() => De(r.modelValue) && r.modelValue <= r.min), d = I(() => De(r.modelValue) && r.modelValue >= r.max), p = I(() => {
      const V = f(r.step);
      return Ln(r.precision) ? Math.max(f(r.modelValue), V) : (V > r.precision, r.precision);
    }), m = I(() => r.controls && r.controlsPosition === "right"), y = jo(), h = hl(), g = I(() => {
      if (i.userInput !== null)
        return i.userInput;
      let V = i.currentValue;
      if (er(V))
        return "";
      if (De(V)) {
        if (Number.isNaN(V))
          return "";
        Ln(r.precision) || (V = V.toFixed(r.precision));
      }
      return V;
    }), A = (V, Q) => {
      if (Ln(Q) && (Q = p.value), Q === 0)
        return Math.round(V);
      let j = String(V);
      const fe = j.indexOf(".");
      if (fe === -1 || !j.replace(".", "").split("")[fe + Q])
        return V;
      const xe = j.length;
      return j.charAt(xe - 1) === "5" && (j = `${j.slice(0, Math.max(0, xe - 1))}6`), Number.parseFloat(Number(j).toFixed(Q));
    }, f = (V) => {
      if (er(V))
        return 0;
      const Q = V.toString(), j = Q.indexOf(".");
      let fe = 0;
      return j !== -1 && (fe = Q.length - j - 1), fe;
    }, C = (V, Q = 1) => De(V) ? A(V + r.step * Q) : i.currentValue, x = () => {
      if (r.readonly || h.value || d.value)
        return;
      const V = Number(g.value) || 0, Q = C(V);
      T(Q), n(tr, i.currentValue), be();
    }, E = () => {
      if (r.readonly || h.value || u.value)
        return;
      const V = Number(g.value) || 0, Q = C(V, -1);
      T(Q), n(tr, i.currentValue), be();
    }, _ = (V, Q) => {
      const { max: j, min: fe, step: K, precision: G, stepStrictly: xe, valueOnClear: Be } = r;
      j < fe && cl("InputNumber", "min should not be greater than max.");
      let ge = Number(V);
      if (er(V) || Number.isNaN(ge))
        return null;
      if (V === "") {
        if (Be === null)
          return null;
        ge = Dt(Be) ? { min: fe, max: j }[Be] : Be;
      }
      return xe && (ge = A(Math.round(ge / K) * K, G), ge !== V && Q && n(St, ge)), Ln(G) || (ge = A(ge, G)), (ge > j || ge < fe) && (ge = ge > j ? j : fe, Q && n(St, ge)), ge;
    }, T = (V, Q = !0) => {
      var j;
      const fe = i.currentValue, K = _(V);
      if (!Q) {
        n(St, K);
        return;
      }
      fe === K && V || (i.userInput = null, n(St, K), fe !== K && n(rr, K, fe), r.validateEvent && ((j = l?.validate) == null || j.call(l, "change").catch((G) => void 0)), i.currentValue = K);
    }, L = (V) => {
      i.userInput = V;
      const Q = V === "" ? null : Number(V);
      n(tr, Q), T(Q, !1);
    }, Y = (V) => {
      const Q = V !== "" ? Number(V) : "";
      (De(Q) && !Number.isNaN(Q) || V === "") && T(Q), be(), i.userInput = null;
    }, Z = () => {
      var V, Q;
      (Q = (V = s.value) == null ? void 0 : V.focus) == null || Q.call(V);
    }, le = () => {
      var V, Q;
      (Q = (V = s.value) == null ? void 0 : V.blur) == null || Q.call(V);
    }, re = (V) => {
      n("focus", V);
    }, ae = (V) => {
      var Q, j;
      i.userInput = null, hd() && i.currentValue === null && ((Q = s.value) != null && Q.input) && (s.value.input.value = ""), n("blur", V), r.validateEvent && ((j = l?.validate) == null || j.call(l, "blur").catch((fe) => void 0));
    }, be = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, ye = (V) => {
      document.activeElement === V.target && V.preventDefault();
    };
    return Ee(() => r.modelValue, (V, Q) => {
      const j = _(V, !0);
      i.userInput === null && j !== Q && (i.currentValue = j);
    }, { immediate: !0 }), ut(() => {
      var V;
      const { min: Q, max: j, modelValue: fe } = r, K = (V = s.value) == null ? void 0 : V.input;
      if (K.setAttribute("role", "spinbutton"), Number.isFinite(j) ? K.setAttribute("aria-valuemax", String(j)) : K.removeAttribute("aria-valuemax"), Number.isFinite(Q) ? K.setAttribute("aria-valuemin", String(Q)) : K.removeAttribute("aria-valuemin"), K.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), K.setAttribute("aria-disabled", String(h.value)), !De(fe) && fe != null) {
        let G = Number(fe);
        Number.isNaN(G) && (G = null), n(St, G);
      }
      K.addEventListener("wheel", ye, { passive: !1 });
    }), Xc(() => {
      var V, Q;
      const j = (V = s.value) == null ? void 0 : V.input;
      j?.setAttribute("aria-valuenow", `${(Q = i.currentValue) != null ? Q : ""}`);
    }), t({
      focus: Z,
      blur: le
    }), (V, Q) => (R(), H("div", {
      class: q([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !V.controls),
        c(a).is("controls-right", c(m))
      ]),
      onDragstart: qe(() => {
      }, ["prevent"])
    }, [
      V.controls ? yt((R(), H("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: en(E, ["enter"])
      }, [
        Se(V.$slots, "decrease-icon", {}, () => [
          D(c(ft), null, {
            default: ue(() => [
              c(m) ? (R(), de(c(fd), { key: 0 })) : (R(), de(c(ly), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Oc), E]
      ]) : oe("v-if", !0),
      V.controls ? yt((R(), H("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: en(x, ["enter"])
      }, [
        Se(V.$slots, "increase-icon", {}, () => [
          D(c(ft), null, {
            default: ue(() => [
              c(m) ? (R(), de(c(qb), { key: 0 })) : (R(), de(c(cy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Oc), x]
      ]) : oe("v-if", !0),
      D(c(Ny), {
        id: V.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: V.step,
        "model-value": c(g),
        placeholder: V.placeholder,
        readonly: V.readonly,
        disabled: c(h),
        size: c(y),
        max: V.max,
        min: V.min,
        name: V.name,
        "aria-label": V.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          en(qe(x, ["prevent"]), ["up"]),
          en(qe(E, ["prevent"]), ["down"])
        ],
        onBlur: ae,
        onFocus: re,
        onInput: L,
        onChange: Y
      }, wf({
        _: 2
      }, [
        V.$slots.prefix ? {
          name: "prefix",
          fn: ue(() => [
            Se(V.$slots, "prefix")
          ])
        } : void 0,
        V.$slots.suffix ? {
          name: "suffix",
          fn: ue(() => [
            Se(V.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var $w = /* @__PURE__ */ Je(Nw, [["__file", "input-number.vue"]]);
const Mw = yn($w);
function Dw() {
  const e = hr(), t = U(0), n = 11, r = I(() => ({
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
const Ud = Symbol("ElSelectGroup"), Ua = Symbol("ElSelect");
function Fw(e, t) {
  const n = ze(Ua), r = ze(Ud, { disabled: !1 }), o = I(() => d(pr(n.props.modelValue), e.value)), a = I(() => {
    var y;
    if (n.props.multiple) {
      const h = pr((y = n.props.modelValue) != null ? y : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = I(() => e.label || (Qt(e.value) ? "" : e.value)), i = I(() => e.value || e.label || ""), l = I(() => e.disabled || t.groupDisabled || a.value), u = Ht(), d = (y = [], h) => {
    if (Qt(e.value)) {
      const g = n.props.valueKey;
      return y && y.some((A) => kf(mr(A, g)) === mr(h, g));
    } else
      return y && y.includes(h);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (y) => {
    const h = new RegExp(ww(y), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return Ee(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ee(() => e.value, (y, h) => {
    const { remote: g, valueKey: A } = n.props;
    if ((g ? y !== h : !Eo(y, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (A && Qt(y) && Qt(h) && y[A] === h[A])
        return;
      n.setSelected();
    }
  }), Ee(() => r.disabled, () => {
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
const zw = ie({
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
    const t = mt("select"), n = Fa(), r = I(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(m))
    ]), o = xr({
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
    } = Fw(e, o), { visible: p, hover: m } = Ms(o), y = Ht().proxy;
    l.onOptionCreate(y), Dn(() => {
      const g = y.value, { selected: A } = l.states, f = A.some((C) => C.value === y.value);
      lt(() => {
        l.states.cachedOptions.get(g) === y && !f && l.states.cachedOptions.delete(g);
      }), l.onOptionDestroy(g, y);
    });
    function h() {
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
      selectOptionClick: h,
      states: o
    };
  }
});
function Bw(e, t, n, r, o, a) {
  return yt((R(), H("li", {
    id: e.id,
    class: q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: qe(e.selectOptionClick, ["stop"])
  }, [
    Se(e.$slots, "default", {}, () => [
      b("span", null, F(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [nr, e.visible]
  ]);
}
var Il = /* @__PURE__ */ Je(zw, [["render", Bw], ["__file", "option.vue"]]);
const Vw = ie({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ze(Ua), t = mt("select"), n = I(() => e.props.popperClass), r = I(() => e.props.multiple), o = I(() => e.props.fitInputWidth), a = U("");
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
function jw(e, t, n, r, o, a) {
  return R(), H("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Lt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), H("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      Se(e.$slots, "header")
    ], 2)) : oe("v-if", !0),
    Se(e.$slots, "default"),
    e.$slots.footer ? (R(), H("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      Se(e.$slots, "footer")
    ], 2)) : oe("v-if", !0)
  ], 6);
}
var Uw = /* @__PURE__ */ Je(Vw, [["render", jw], ["__file", "select-dropdown.vue"]]);
const Hw = (e, t) => {
  const { t: n } = ul(), r = Fa(), o = mt("select"), a = mt("input"), s = xr({
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
  }), i = U(null), l = U(null), u = U(null), d = U(null), p = U(null), m = U(null), y = U(null), h = U(null), g = U(null), A = U(null), f = U(null), {
    isComposing: C,
    handleCompositionStart: x,
    handleCompositionUpdate: E,
    handleCompositionEnd: _
  } = _d({
    afterComposition: (N) => Qe(N)
  }), { wrapperRef: T, isFocused: L, handleBlur: Y } = yd(p, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !Z.value && (Z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var ee, ke;
      return ((ee = u.value) == null ? void 0 : ee.isFocusInsideContent(N)) || ((ke = d.value) == null ? void 0 : ke.isFocusInsideContent(N));
    },
    afterBlur() {
      Z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Z = U(!1), le = U(), { form: re, formItem: ae } = za(), { inputId: be } = ml(e, {
    formItemContext: ae
  }), { valueOnClear: ye, isEmptyValue: V } = zb(e), Q = I(() => e.disabled || re?.disabled), j = I(() => On(e.modelValue) ? e.modelValue.length > 0 : !V(e.modelValue)), fe = I(() => {
    var N;
    return (N = re?.statusIcon) != null ? N : !1;
  }), K = I(() => e.clearable && !Q.value && s.inputHovering && j.value), G = I(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), xe = I(() => o.is("reverse", G.value && Z.value)), Be = I(() => ae?.validateState || ""), ge = I(() => md[Be.value]), ve = I(() => e.remote ? 300 : 0), J = I(() => e.remote && !s.inputValue && s.options.size === 0), Ae = I(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ne.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ne = I(() => he.value.filter((N) => N.visible).length), he = I(() => {
    const N = Array.from(s.options.values()), ee = [];
    return s.optionValues.forEach((ke) => {
      const Ge = N.findIndex((dt) => dt.value === ke);
      Ge > -1 && ee.push(N[Ge]);
    }), ee.length >= N.length ? ee : N;
  }), at = I(() => Array.from(s.cachedOptions.values())), st = I(() => {
    const N = he.value.filter((ee) => !ee.created).some((ee) => ee.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !N;
  }), Ze = () => {
    e.filterable && rt(e.filterMethod) || e.filterable && e.remote && rt(e.remoteMethod) || he.value.forEach((N) => {
      var ee;
      (ee = N.updateOption) == null || ee.call(N, s.inputValue);
    });
  }, Et = jo(), et = I(() => ["small"].includes(Et.value) ? "small" : "default"), gt = I({
    get() {
      return Z.value && !J.value;
    },
    set(N) {
      Z.value = N;
    }
  }), _t = I(() => {
    if (e.multiple && !Ln(e.modelValue))
      return pr(e.modelValue).length === 0 && !s.inputValue;
    const N = On(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Ln(N) ? !s.inputValue : !0;
  }), Xe = I(() => {
    var N;
    const ee = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !j.value ? ee : s.selectedLabel;
  }), wt = I(() => Cs ? null : "mouseenter");
  Ee(() => e.modelValue, (N, ee) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), B(), !Eo(N, ee) && e.validateEvent && ae?.validate("change").catch((ke) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ee(() => Z.value, (N) => {
    N ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", N);
  }), Ee(() => s.options.entries(), () => {
    pt && (B(), e.defaultFirstOption && (e.filterable || e.remote) && Ne.value && O());
  }, {
    flush: "post"
  }), Ee([() => s.hoveringIndex, he], ([N]) => {
    De(N) && N > -1 ? le.value = he.value[N] || {} : le.value = {}, he.value.forEach((ee) => {
      ee.hover = le.value === ee;
    });
  }), Zc(() => {
    s.isBeforeHide || Ze();
  });
  const k = (N) => {
    s.previousQuery === N || C.value || (s.previousQuery = N, e.filterable && rt(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && rt(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && Ne.value ? lt(O) : lt(Oe));
  }, O = () => {
    const N = he.value.filter((dt) => dt.visible && !dt.disabled && !dt.states.groupDisabled), ee = N.find((dt) => dt.created), ke = N[0], Ge = he.value.map((dt) => dt.value);
    s.hoveringIndex = Bn(Ge, ee || ke);
  }, B = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const ee = On(e.modelValue) ? e.modelValue[0] : e.modelValue, ke = te(ee);
      s.selectedLabel = ke.currentLabel, s.selected = [ke];
      return;
    }
    const N = [];
    Ln(e.modelValue) || pr(e.modelValue).forEach((ee) => {
      N.push(te(ee));
    }), s.selected = N;
  }, te = (N) => {
    let ee;
    const ke = mh(N);
    for (let Kt = s.cachedOptions.size - 1; Kt >= 0; Kt--) {
      const Bt = at.value[Kt];
      if (ke ? mr(Bt.value, e.valueKey) === mr(N, e.valueKey) : Bt.value === N) {
        ee = {
          value: N,
          currentLabel: Bt.currentLabel,
          get isDisabled() {
            return Bt.isDisabled;
          }
        };
        break;
      }
    }
    if (ee)
      return ee;
    const Ge = ke ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Ge
    };
  }, Oe = () => {
    s.hoveringIndex = he.value.findIndex((N) => s.selected.some((ee) => $e(ee) === $e(N)));
  }, me = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, S = () => {
    s.collapseItemWidth = A.value.getBoundingClientRect().width;
  }, z = () => {
    var N, ee;
    (ee = (N = u.value) == null ? void 0 : N.updatePopper) == null || ee.call(N);
  }, we = () => {
    var N, ee;
    (ee = (N = d.value) == null ? void 0 : N.updatePopper) == null || ee.call(N);
  }, Le = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), k(s.inputValue);
  }, Qe = (N) => {
    if (s.inputValue = N.target.value, e.remote)
      At();
    else
      return Le();
  }, At = Q0(() => {
    Le();
  }, ve.value), We = (N) => {
    Eo(e.modelValue, N) || t(rr, N);
  }, _n = (N) => J0(N, (ee) => {
    const ke = s.cachedOptions.get(ee);
    return ke && !ke.disabled && !ke.states.groupDisabled;
  }), lr = (N) => {
    if (e.multiple && N.code !== Rn.delete && N.target.value.length <= 0) {
      const ee = pr(e.modelValue).slice(), ke = _n(ee);
      if (ke < 0)
        return;
      const Ge = ee[ke];
      ee.splice(ke, 1), t(St, ee), We(ee), t("remove-tag", Ge);
    }
  }, ir = (N, ee) => {
    const ke = s.selected.indexOf(ee);
    if (ke > -1 && !Q.value) {
      const Ge = pr(e.modelValue).slice();
      Ge.splice(ke, 1), t(St, Ge), We(Ge), t("remove-tag", ee.value);
    }
    N.stopPropagation(), ur();
  }, cr = (N) => {
    N.stopPropagation();
    const ee = e.multiple ? [] : ye.value;
    if (e.multiple)
      for (const ke of s.selected)
        ke.isDisabled && ee.push(ke.value);
    t(St, ee), We(ee), s.hoveringIndex = -1, Z.value = !1, t("clear"), ur();
  }, zn = (N) => {
    var ee;
    if (e.multiple) {
      const ke = pr((ee = e.modelValue) != null ? ee : []).slice(), Ge = Bn(ke, N);
      Ge > -1 ? ke.splice(Ge, 1) : (e.multipleLimit <= 0 || ke.length < e.multipleLimit) && ke.push(N.value), t(St, ke), We(ke), N.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(St, N.value), We(N.value), Z.value = !1;
    ur(), !Z.value && lt(() => {
      an(N);
    });
  }, Bn = (N = [], ee) => Ln(ee) ? -1 : Qt(ee.value) ? N.findIndex((ke) => Eo(mr(ke, e.valueKey), $e(ee))) : N.indexOf(ee.value), an = (N) => {
    var ee, ke, Ge, dt, Kt;
    const Bt = On(N) ? N[0] : N;
    let Pt = null;
    if (Bt?.value) {
      const cn = he.value.filter((Vr) => Vr.value === Bt.value);
      cn.length > 0 && (Pt = cn[0].$el);
    }
    if (u.value && Pt) {
      const cn = (dt = (Ge = (ke = (ee = u.value) == null ? void 0 : ee.popperRef) == null ? void 0 : ke.contentRef) == null ? void 0 : Ge.querySelector) == null ? void 0 : dt.call(Ge, `.${o.be("dropdown", "wrap")}`);
      cn && Vb(cn, Pt);
    }
    (Kt = f.value) == null || Kt.handleScroll();
  }, Ft = (N) => {
    s.options.set(N.value, N), s.cachedOptions.set(N.value, N);
  }, sn = (N, ee) => {
    s.options.get(N) === ee && s.options.delete(N);
  }, wr = I(() => {
    var N, ee;
    return (ee = (N = u.value) == null ? void 0 : N.popperRef) == null ? void 0 : ee.contentRef;
  }), kr = () => {
    s.isBeforeHide = !1, lt(() => {
      var N;
      (N = f.value) == null || N.update(), an(s.selected);
    });
  }, ur = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, wn = () => {
    var N;
    if (Z.value) {
      Z.value = !1, lt(() => {
        var ee;
        return (ee = p.value) == null ? void 0 : ee.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, Tr = (N) => {
    cr(N);
  }, uo = (N) => {
    if (Z.value = !1, L.value) {
      const ee = new FocusEvent("focus", N);
      lt(() => Y(ee));
    }
  }, zt = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, Sr = () => {
    Q.value || (Cs && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, fo = () => {
    if (!Z.value)
      Sr();
    else {
      const N = he.value[s.hoveringIndex];
      N && !N.isDisabled && zn(N);
    }
  }, $e = (N) => Qt(N.value) ? mr(N.value, e.valueKey) : N.value, kn = I(() => he.value.filter((N) => N.visible).every((N) => N.isDisabled)), ln = I(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Er = I(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Vn = (N) => {
    if (!Z.value) {
      Z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ne.value === 0 || C.value) && !kn.value) {
      N === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : N === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const ee = he.value[s.hoveringIndex];
      (ee.isDisabled || !ee.visible) && Vn(N), lt(() => an(le.value));
    }
  }, Br = () => {
    if (!l.value)
      return 0;
    const N = window.getComputedStyle(l.value);
    return Number.parseFloat(N.gap || "6px");
  }, Ar = I(() => {
    const N = Br();
    return { maxWidth: `${A.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - N : s.selectionWidth}px` };
  }), Cr = I(() => ({ maxWidth: `${s.selectionWidth}px` })), Rt = (N) => {
    t("popup-scroll", N);
  };
  return Cn(l, me), Cn(h, z), Cn(T, z), Cn(g, we), Cn(A, S), ut(() => {
    B();
  }), {
    inputId: be,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: L,
    expanded: Z,
    optionsArray: he,
    hoverOption: le,
    selectSize: Et,
    filteredOptionsCount: Ne,
    updateTooltip: z,
    updateTagTooltip: we,
    debouncedOnInputChange: At,
    onInput: Qe,
    deletePrevTag: lr,
    deleteTag: ir,
    deleteSelected: cr,
    handleOptionSelect: zn,
    scrollToOption: an,
    hasModelValue: j,
    shouldShowPlaceholder: _t,
    currentPlaceholder: Xe,
    mouseEnterEventName: wt,
    needStatusIcon: fe,
    showClose: K,
    iconComponent: G,
    iconReverse: xe,
    validateState: Be,
    validateIcon: ge,
    showNewOption: st,
    updateOptions: Ze,
    collapseTagSize: et,
    setSelected: B,
    selectDisabled: Q,
    emptyText: Ae,
    handleCompositionStart: x,
    handleCompositionUpdate: E,
    handleCompositionEnd: _,
    onOptionCreate: Ft,
    onOptionDestroy: sn,
    handleMenuEnter: kr,
    focus: ur,
    blur: wn,
    handleClearClick: Tr,
    handleClickOutside: uo,
    handleEsc: zt,
    toggleMenu: Sr,
    selectOption: fo,
    getValueKey: $e,
    navigateOptions: Vn,
    dropdownMenuVisible: gt,
    showTagList: ln,
    collapseTagList: Er,
    popupScroll: Rt,
    tagStyle: Ar,
    collapseTagStyle: Cr,
    popperRef: wr,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: m,
    suffixRef: y,
    selectRef: i,
    wrapperRef: T,
    selectionRef: l,
    scrollbarRef: f,
    menuRef: h,
    tagMenuRef: g,
    collapseItemRef: A
  };
};
var Ww = ie({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ze(Ua);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        On(u) && u.forEach((d) => {
          var p, m, y, h;
          const g = (p = d?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? l(!Dt(d.children) && !On(d.children) && rt((m = d.children) == null ? void 0 : m.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : g === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : On(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), Eo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Gw = Ye({
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
  size: Da,
  effect: {
    type: _e(String),
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
    type: _e(Object),
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
  teleported: Ll.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: In,
    default: fl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: In,
    default: fd
  },
  tagType: { ...xs.type, default: "info" },
  tagEffect: { ...xs.effect, default: "light" },
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
    type: _e(String),
    values: Va,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: _e(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...sd,
  ...zr(["ariaLabel"])
}), Lc = "ElSelect", Kw = ie({
  name: Lc,
  componentName: Lc,
  components: {
    ElSelectMenu: Uw,
    ElOption: Il,
    ElOptions: Ww,
    ElTag: Aw,
    ElScrollbar: Yy,
    ElTooltip: hw,
    ElIcon: ft
  },
  directives: { ClickOutside: Cw },
  props: Gw,
  emits: [
    St,
    rr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = I(() => {
      const { modelValue: l, multiple: u } = e, d = u ? [] : void 0;
      return On(l) ? u ? l : d : u ? d : l;
    }), r = xr({
      ...Ms(e),
      modelValue: n
    }), o = Hw(r, t), { calculatorRef: a, inputStyle: s } = Dw();
    Nn(Ua, xr({
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
function qw(e, t, n, r, o, a) {
  const s = Or("el-tag"), i = Or("el-tooltip"), l = Or("el-icon"), u = Or("el-option"), d = Or("el-options"), p = Or("el-scrollbar"), m = Or("el-select-menu"), y = Tf("click-outside");
  return yt((R(), H("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Sf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
  }, [
    D(i, {
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
      default: ue(() => {
        var h;
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
            onClick: qe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), H("div", {
              key: 0,
              ref: "prefixRef",
              class: q(e.nsSelect.e("prefix"))
            }, [
              Se(e.$slots, "prefix")
            ], 2)) : oe("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: q([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Se(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), H(bt, null, Kn(e.showTagList, (g) => (R(), H("div", {
                  key: e.getValueKey(g),
                  class: q(e.nsSelect.e("selected-item"))
                }, [
                  D(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Lt(e.tagStyle),
                    onClose: (A) => e.deleteTag(A, g)
                  }, {
                    default: ue(() => [
                      b("span", {
                        class: q(e.nsSelect.e("tags-text"))
                      }, [
                        Se(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Xt(F(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (R(), de(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ue(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: q(e.nsSelect.e("selected-item"))
                    }, [
                      D(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Lt(e.collapseTagStyle)
                      }, {
                        default: ue(() => [
                          b("span", {
                            class: q(e.nsSelect.e("tags-text"))
                          }, " + " + F(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ue(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: q(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), H(bt, null, Kn(e.collapseTagList, (g) => (R(), H("div", {
                        key: e.getValueKey(g),
                        class: q(e.nsSelect.e("selected-item"))
                      }, [
                        D(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (A) => e.deleteTag(A, g)
                        }, {
                          default: ue(() => [
                            b("span", {
                              class: q(e.nsSelect.e("tags-text"))
                            }, [
                              Se(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Xt(F(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : oe("v-if", !0)
              ]) : oe("v-if", !0),
              b("div", {
                class: q([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                yt(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: q([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Lt(e.inputStyle),
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
                    en(qe((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    en(qe((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    en(qe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    en(qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    en(qe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: qe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Oo, e.states.inputValue]
                ]),
                e.filterable ? (R(), H("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: F(e.states.inputValue)
                }, null, 10, ["textContent"])) : oe("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), H("div", {
                key: 1,
                class: q([
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
                  b("span", null, F(e.currentPlaceholder), 1)
                ]) : (R(), H("span", { key: 1 }, F(e.currentPlaceholder), 1))
              ], 2)) : oe("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: q(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (R(), de(l, {
                key: 0,
                class: q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ue(() => [
                  (R(), de(jt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : oe("v-if", !0),
              e.showClose && e.clearIcon ? (R(), de(l, {
                key: 1,
                class: q([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ue(() => [
                  (R(), de(jt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : oe("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (R(), de(l, {
                key: 2,
                class: q([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ue(() => [
                  (R(), de(jt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : oe("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ue(() => [
        D(m, { ref: "menuRef" }, {
          default: ue(() => [
            e.$slots.header ? (R(), H("div", {
              key: 0,
              class: q(e.nsSelect.be("dropdown", "header")),
              onClick: qe(() => {
              }, ["stop"])
            }, [
              Se(e.$slots, "header")
            ], 10, ["onClick"])) : oe("v-if", !0),
            yt(D(p, {
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
              default: ue(() => [
                e.showNewOption ? (R(), de(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : oe("v-if", !0),
                D(d, null, {
                  default: ue(() => [
                    Se(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [nr, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), H("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              Se(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), H("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              Se(e.$slots, "empty", {}, () => [
                b("span", null, F(e.emptyText), 1)
              ])
            ], 2)) : oe("v-if", !0),
            e.$slots.footer ? (R(), H("div", {
              key: 3,
              class: q(e.nsSelect.be("dropdown", "footer")),
              onClick: qe(() => {
              }, ["stop"])
            }, [
              Se(e.$slots, "footer")
            ], 10, ["onClick"])) : oe("v-if", !0)
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
var Yw = /* @__PURE__ */ Je(Kw, [["render", qw], ["__file", "select.vue"]]);
const Zw = ie({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = mt("select"), n = U(null), r = Ht(), o = U([]);
    Nn(Ud, xr({
      ...Ms(e)
    }));
    const a = I(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, p;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const d = pr(u), p = [];
      return d.forEach((m) => {
        var y, h;
        s(m) ? p.push(m.component.proxy) : (y = m.children) != null && y.length ? p.push(...i(m.children)) : (h = m.component) != null && h.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return ut(() => {
      l();
    }), Sb(n, l, {
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
function Xw(e, t, n, r, o, a) {
  return yt((R(), H("ul", {
    ref: "groupRef",
    class: q(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: q(e.ns.be("group", "title"))
    }, F(e.label), 3),
    b("li", null, [
      b("ul", {
        class: q(e.ns.b("group"))
      }, [
        Se(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [nr, e.visible]
  ]);
}
var Hd = /* @__PURE__ */ Je(Zw, [["render", Xw], ["__file", "option-group.vue"]]);
const Qw = yn(Yw, {
  Option: Il,
  OptionGroup: Hd
}), Jw = dd(Il);
dd(Hd);
const ek = (e) => ["", ...dl].includes(e), tk = Ye({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: ek
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: In
  },
  activeActionIcon: {
    type: In
  },
  activeIcon: {
    type: In
  },
  inactiveIcon: {
    type: In
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
    type: _e(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...zr(["ariaLabel"])
}), nk = {
  [St]: (e) => gr(e) || Dt(e) || De(e),
  [rr]: (e) => gr(e) || Dt(e) || De(e),
  [tr]: (e) => gr(e) || Dt(e) || De(e)
}, Wd = "ElSwitch", rk = ie({
  name: Wd
}), ok = /* @__PURE__ */ ie({
  ...rk,
  props: tk,
  emits: nk,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = za(), a = jo(), s = mt("switch"), { inputId: i } = ml(r, {
      formItemContext: o
    }), l = hl(I(() => r.loading)), u = U(r.modelValue !== !1), d = U(), p = U(), m = I(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", f.value)
    ]), y = I(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !f.value)
    ]), h = I(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", f.value)
    ]), g = I(() => ({
      width: to(r.width)
    }));
    Ee(() => r.modelValue, () => {
      u.value = !0;
    });
    const A = I(() => u.value ? r.modelValue : !1), f = I(() => A.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(A.value) || (n(St, r.inactiveValue), n(rr, r.inactiveValue), n(tr, r.inactiveValue)), Ee(f, (_) => {
      var T;
      d.value.checked = _, r.validateEvent && ((T = o?.validate) == null || T.call(o, "change").catch((L) => void 0));
    });
    const C = () => {
      const _ = f.value ? r.inactiveValue : r.activeValue;
      n(St, _), n(rr, _), n(tr, _), lt(() => {
        d.value.checked = f.value;
      });
    }, x = () => {
      if (l.value)
        return;
      const { beforeChange: _ } = r;
      if (!_) {
        C();
        return;
      }
      const T = _();
      [
        bi(T),
        gr(T)
      ].includes(!0) || cl(Wd, "beforeChange must return type `Promise<boolean>` or `boolean`"), bi(T) ? T.then((Y) => {
        Y && C();
      }).catch((Y) => {
      }) : T && C();
    }, E = () => {
      var _, T;
      (T = (_ = d.value) == null ? void 0 : _.focus) == null || T.call(_);
    };
    return ut(() => {
      d.value.checked = f.value;
    }), t({
      focus: E,
      checked: f
    }), (_, T) => (R(), H("div", {
      class: q(c(m)),
      onClick: qe(x, ["prevent"])
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
        "aria-label": _.ariaLabel,
        name: _.name,
        "true-value": _.activeValue,
        "false-value": _.inactiveValue,
        disabled: c(l),
        tabindex: _.tabindex,
        onChange: C,
        onKeydown: en(x, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (R(), H("span", {
        key: 0,
        class: q(c(y))
      }, [
        _.inactiveIcon ? (R(), de(c(ft), { key: 0 }, {
          default: ue(() => [
            (R(), de(jt(_.inactiveIcon)))
          ]),
          _: 1
        })) : oe("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (R(), H("span", {
          key: 1,
          "aria-hidden": c(f)
        }, F(_.inactiveText), 9, ["aria-hidden"])) : oe("v-if", !0)
      ], 2)) : oe("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: q(c(s).e("core")),
        style: Lt(c(g))
      }, [
        _.inlinePrompt ? (R(), H("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (R(), de(c(ft), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: ue(() => [
              (R(), de(jt(c(f) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (R(), H("span", {
            key: 1,
            class: q(c(s).is("text")),
            "aria-hidden": !c(f)
          }, F(c(f) ? _.activeText : _.inactiveText), 11, ["aria-hidden"])) : oe("v-if", !0)
        ], 2)) : oe("v-if", !0),
        b("div", {
          class: q(c(s).e("action"))
        }, [
          _.loading ? (R(), de(c(ft), {
            key: 0,
            class: q(c(s).is("loading"))
          }, {
            default: ue(() => [
              D(c(pd))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? Se(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (R(), de(c(ft), { key: 0 }, {
              default: ue(() => [
                (R(), de(jt(_.activeActionIcon)))
              ]),
              _: 1
            })) : oe("v-if", !0)
          ]) : c(f) ? oe("v-if", !0) : Se(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (R(), de(c(ft), { key: 0 }, {
              default: ue(() => [
                (R(), de(jt(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : oe("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (R(), H("span", {
        key: 1,
        class: q(c(h))
      }, [
        _.activeIcon ? (R(), de(c(ft), { key: 0 }, {
          default: ue(() => [
            (R(), de(jt(_.activeIcon)))
          ]),
          _: 1
        })) : oe("v-if", !0),
        !_.activeIcon && _.activeText ? (R(), H("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, F(_.activeText), 9, ["aria-hidden"])) : oe("v-if", !0)
      ], 2)) : oe("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var ak = /* @__PURE__ */ Je(ok, [["__file", "switch.vue"]]);
const sk = yn(ak), Gd = ["success", "info", "warning", "error"], Nt = gd({
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
}), lk = Ye({
  customClass: {
    type: String,
    default: Nt.customClass
  },
  center: {
    type: Boolean,
    default: Nt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Nt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Nt.duration
  },
  icon: {
    type: In,
    default: Nt.icon
  },
  id: {
    type: String,
    default: Nt.id
  },
  message: {
    type: _e([
      String,
      Object,
      Function
    ]),
    default: Nt.message
  },
  onClose: {
    type: _e(Function),
    default: Nt.onClose
  },
  showClose: {
    type: Boolean,
    default: Nt.showClose
  },
  type: {
    type: String,
    values: Gd,
    default: Nt.type
  },
  plain: {
    type: Boolean,
    default: Nt.plain
  },
  offset: {
    type: Number,
    default: Nt.offset
  },
  zIndex: {
    type: Number,
    default: Nt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Nt.grouping
  },
  repeatNum: {
    type: Number,
    default: Nt.repeatNum
  }
}), ik = {
  destroy: () => !0
}, hn = Ef([]), ck = (e) => {
  const t = hn.findIndex((o) => o.id === e), n = hn[t];
  let r;
  return t > 0 && (r = hn[t - 1]), { current: n, prev: r };
}, uk = (e) => {
  const { prev: t } = ck(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, dk = (e, t) => hn.findIndex((r) => r.id === e) > 0 ? 16 : t, fk = ie({
  name: "ElMessage"
}), pk = /* @__PURE__ */ ie({
  ...fk,
  props: lk,
  emits: ik,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = vy, { ns: o, zIndex: a } = id("message"), { currentZIndex: s, nextZIndex: i } = a, l = U(), u = U(!1), d = U(0);
    let p;
    const m = I(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = I(() => {
      const L = n.type;
      return { [o.bm("icon", L)]: L && _a[L] };
    }), h = I(() => n.icon || _a[n.type] || ""), g = I(() => uk(n.id)), A = I(() => dk(n.id, n.offset) + g.value), f = I(() => d.value + A.value), C = I(() => ({
      top: `${A.value}px`,
      zIndex: s.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: p } = Xu(() => {
        _();
      }, n.duration));
    }
    function E() {
      p?.();
    }
    function _() {
      u.value = !1;
    }
    function T({ code: L }) {
      L === Rn.esc && _();
    }
    return ut(() => {
      x(), i(), u.value = !0;
    }), Ee(() => n.repeatNum, () => {
      E(), x();
    }), vn(document, "keydown", T), Cn(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: _
    }), (L, Y) => (R(), de(io, {
      name: c(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (Z) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: ue(() => [
        yt(b("div", {
          id: L.id,
          ref_key: "messageRef",
          ref: l,
          class: q([
            c(o).b(),
            { [c(o).m(L.type)]: L.type },
            c(o).is("center", L.center),
            c(o).is("closable", L.showClose),
            c(o).is("plain", L.plain),
            L.customClass
          ]),
          style: Lt(c(C)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: x
        }, [
          L.repeatNum > 1 ? (R(), de(c(_w), {
            key: 0,
            value: L.repeatNum,
            type: c(m),
            class: q(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : oe("v-if", !0),
          c(h) ? (R(), de(c(ft), {
            key: 1,
            class: q([c(o).e("icon"), c(y)])
          }, {
            default: ue(() => [
              (R(), de(jt(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : oe("v-if", !0),
          Se(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (R(), H(bt, { key: 1 }, [
              oe(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: q(c(o).e("content")),
                innerHTML: L.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), H("p", {
              key: 0,
              class: q(c(o).e("content"))
            }, F(L.message), 3))
          ]),
          L.showClose ? (R(), de(c(ft), {
            key: 2,
            class: q(c(o).e("closeBtn")),
            onClick: qe(_, ["stop"])
          }, {
            default: ue(() => [
              D(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : oe("v-if", !0)
        ], 46, ["id"]), [
          [nr, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var mk = /* @__PURE__ */ Je(pk, [["__file", "message.vue"]]);
let hk = 1;
const Kd = (e) => {
  const t = !e || Dt(e) || Lo(e) || rt(e) ? { message: e } : e, n = {
    ...Nt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Dt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    gn(r) || (r = document.body), n.appendTo = r;
  }
  return gr(un.grouping) && !n.grouping && (n.grouping = un.grouping), De(un.duration) && n.duration === 3e3 && (n.duration = un.duration), De(un.offset) && n.offset === 16 && (n.offset = un.offset), gr(un.showClose) && !n.showClose && (n.showClose = un.showClose), n;
}, gk = (e) => {
  const t = hn.indexOf(e);
  if (t === -1)
    return;
  hn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, vk = ({ appendTo: e, ...t }, n) => {
  const r = `message_${hk++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), gk(d);
    },
    onDestroy: () => {
      ca(null, a);
    }
  }, i = D(mk, s, rt(s.message) || Lo(s.message) ? {
    default: rt(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || so._context, ca(i, a), e.appendChild(a.firstElementChild);
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
}, so = (e = {}, t) => {
  if (!pt)
    return { close: () => {
    } };
  const n = Kd(e);
  if (n.grouping && hn.length) {
    const o = hn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (De(un.max) && hn.length >= un.max)
    return { close: () => {
    } };
  const r = vk(n, t);
  return hn.push(r), r.handler;
};
Gd.forEach((e) => {
  so[e] = (t = {}, n) => {
    const r = Kd(t);
    return so({ ...r, type: e }, n);
  };
});
function bk(e) {
  for (const t of hn)
    (!e || e === t.props.type) && t.handler.close();
}
so.closeAll = bk;
so._context = null;
const yk = ud(so, "$message"), qd = [
  "success",
  "info",
  "warning",
  "error"
], _k = Ye({
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
    type: In
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: _e([
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
    type: _e(Function),
    default: () => {
    }
  },
  onClose: {
    type: _e(Function),
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
    values: [...qd, ""],
    default: ""
  },
  zIndex: Number
}), wk = {
  destroy: () => !0
}, kk = ie({
  name: "ElNotification"
}), Tk = /* @__PURE__ */ ie({
  ...kk,
  props: _k,
  emits: wk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = id("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = gy, l = U(!1);
    let u;
    const d = I(() => {
      const x = n.type;
      return x && _a[n.type] ? r.m(x) : "";
    }), p = I(() => n.type && _a[n.type] || n.icon), m = I(() => n.position.endsWith("right") ? "right" : "left"), y = I(() => n.position.startsWith("top") ? "top" : "bottom"), h = I(() => {
      var x;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = Xu(() => {
        l.value && f();
      }, n.duration));
    }
    function A() {
      u?.();
    }
    function f() {
      l.value = !1;
    }
    function C({ code: x }) {
      x === Rn.delete || x === Rn.backspace ? A() : x === Rn.esc ? l.value && f() : g();
    }
    return ut(() => {
      g(), a(), l.value = !0;
    }), vn(document, "keydown", C), t({
      visible: l,
      close: f
    }), (x, E) => (R(), de(io, {
      name: c(r).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (_) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: ue(() => [
        yt(b("div", {
          id: x.id,
          class: q([c(r).b(), x.customClass, c(m)]),
          style: Lt(c(h)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: g,
          onClick: x.onClick
        }, [
          c(p) ? (R(), de(c(ft), {
            key: 0,
            class: q([c(r).e("icon"), c(d)])
          }, {
            default: ue(() => [
              (R(), de(jt(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : oe("v-if", !0),
          b("div", {
            class: q(c(r).e("group"))
          }, [
            b("h2", {
              class: q(c(r).e("title")),
              textContent: F(x.title)
            }, null, 10, ["textContent"]),
            yt(b("div", {
              class: q(c(r).e("content")),
              style: Lt(x.title ? void 0 : { margin: 0 })
            }, [
              Se(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (R(), H(bt, { key: 1 }, [
                  oe(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), H("p", { key: 0 }, F(x.message), 1))
              ])
            ], 6), [
              [nr, x.message]
            ]),
            x.showClose ? (R(), de(c(ft), {
              key: 0,
              class: q(c(r).e("closeBtn")),
              onClick: qe(f, ["stop"])
            }, {
              default: ue(() => [
                D(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : oe("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [nr, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Sk = /* @__PURE__ */ Je(Tk, [["__file", "notification.vue"]]);
const Ta = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Rs = 16;
let Ek = 1;
const lo = function(e = {}, t) {
  if (!pt)
    return { close: () => {
    } };
  (Dt(e) || Lo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Ta[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Rs;
  }), r += Rs;
  const o = `notification_${Ek++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      Ak(o, n, a);
    }
  };
  let i = document.body;
  gn(e.appendTo) ? i = e.appendTo : Dt(e.appendTo) && (i = document.querySelector(e.appendTo)), gn(i) || (i = document.body);
  const l = document.createElement("div"), u = D(Sk, s, rt(s.message) ? s.message : Lo(s.message) ? () => s.message : null);
  return u.appContext = Ln(t) ? lo._context : t, u.props.onDestroy = () => {
    ca(null, l);
  }, ca(u, l), Ta[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
qd.forEach((e) => {
  lo[e] = (t = {}, n) => ((Dt(t) || Lo(t)) && (t = {
    message: t
  }), lo({ ...t, type: e }, n));
});
function Ak(e, t, n) {
  const r = Ta[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: d, component: p } = r[u].vm, m = Number.parseInt(d.style[i], 10) - s - Rs;
      p.props.offset = m;
    }
}
function Ck() {
  for (const e of Object.values(Ta))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
lo.closeAll = Ck;
lo._context = null;
const Ok = ud(lo, "$notify"), tt = {
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
    r === "center" ? yk({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Ok({
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
function Lk(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function xt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Ic;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ic || (Ic = {}));
async function Ik(e, t) {
  await xt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function xk(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return xt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Lk(t)
  }).then((a) => async () => Ik(e, a));
}
const Rk = "snippets-code:developer-mode", Yd = "snippets-code:frontend-diagnostics", Pk = 240, bo = "[REDACTED]", la = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${bo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${bo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  bo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${bo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${bo}`
), Zd = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return la(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return la(
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
    return la(String(e));
  }
}, Nk = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, $k = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Yd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, xl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Rk) === "true";
  } catch {
    return !1;
  }
}, Mk = (e, t, n) => {
  if (!xl() || typeof localStorage > "u") return;
  const r = $k();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Nk(),
    message: la(t),
    data: Zd(n)
  });
  try {
    localStorage.setItem(
      Yd,
      JSON.stringify(r.slice(-Pk))
    );
  } catch {
  }
}, Dk = () => xl(), Fk = (e) => e === "warn" || e === "error" || !1 || !1 || xl(), ea = (e, t, n) => {
  Mk(e, t, n), Fk(e) && xt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Zd(n)
  }).catch(() => {
  });
}, dn = {
  info: (e, t, ...n) => {
    ea("info", e, t);
  },
  error: (e, t) => {
    ea("error", e, t);
  },
  warn: (e, t) => {
    ea("warn", e, t);
  },
  debug: (e, t) => {
    Dk() && ea("debug", e, t);
  }
};
async function Xd() {
  return await xt("local_ai_get_config");
}
async function ia(e) {
  return await xt("local_ai_save_config", { config: e });
}
async function Qd(e) {
  return await xt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function zk() {
  return await xt("local_ai_get_runtime_status");
}
async function Jd() {
  return await xt("local_ai_get_status");
}
async function Bk(e) {
  return await xt("local_ai_start_service", {
    config: e ?? null
  });
}
async function ef() {
  return await xt("local_ai_restart_service");
}
async function Vk() {
  await xt("local_ai_stop_service");
}
function tf() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function jk(e, t, n = {}) {
  const r = n.requestId ?? tf(), o = await xk(
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
async function ns(e) {
  return await xt("local_ai_cancel_chat_stream", { requestId: e });
}
async function Uk() {
  return await xt("local_ai_get_chat_histories");
}
async function Hk(e) {
  return await xt("local_ai_save_chat_history", {
    history: e
  });
}
async function Wk(e) {
  return await xt("local_ai_delete_chat_history", {
    historyId: e
  });
}
const Gk = /* @__PURE__ */ new Set([
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
]), Kk = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), qk = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), Yk = 5, Zk = 1024 * 1024, Xk = 5 * 1024 * 1024, xc = 4e4, nf = (e) => e.split(".").pop()?.toLowerCase() ?? "", Qk = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, Rc = (e) => Kk.has(e.type), Pc = (e) => e.type.startsWith("text/") || Gk.has(nf(e.name)), Jk = (e) => qk.has(nf(e.name)), eT = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), tT = async (e) => {
  const t = await e.text();
  return t.length <= xc ? { text: t, truncated: !1 } : {
    text: t.slice(0, xc),
    truncated: !0
  };
}, nT = (e, t) => {
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
function Nc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function rT(e) {
  if (Array.isArray(e)) return e;
}
function oT(e, t) {
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
function aT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sT(e, t) {
  return rT(e) || oT(e, t) || lT(e, t) || aT();
}
function lT(e, t) {
  if (e) {
    if (typeof e == "string") return Nc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nc(e, t) : void 0;
  }
}
const rf = Object.entries, $c = Object.setPrototypeOf, iT = Object.isFrozen, cT = Object.getPrototypeOf, uT = Object.getOwnPropertyDescriptor;
let Wt = Object.freeze, on = Object.seal, Yr = Object.create, of = typeof Reflect < "u" && Reflect, Ps = of.apply, Ns = of.construct;
Wt || (Wt = function(t) {
  return t;
});
on || (on = function(t) {
  return t;
});
Ps || (Ps = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Ns || (Ns = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Hr = ht(Array.prototype.forEach), dT = ht(Array.prototype.lastIndexOf), Mc = ht(Array.prototype.pop), Wr = ht(Array.prototype.push), fT = ht(Array.prototype.splice), Vt = Array.isArray, ko = ht(String.prototype.toLowerCase), rs = ht(String.prototype.toString), Dc = ht(String.prototype.match), Gr = ht(String.prototype.replace), Fc = ht(String.prototype.indexOf), pT = ht(String.prototype.trim), mT = ht(Number.prototype.toString), hT = ht(Boolean.prototype.toString), zc = typeof BigInt > "u" ? null : ht(BigInt.prototype.toString), Bc = typeof Symbol > "u" ? null : ht(Symbol.prototype.toString), ot = ht(Object.prototype.hasOwnProperty), yo = ht(Object.prototype.toString), Ot = ht(RegExp.prototype.test), _o = gT(TypeError);
function ht(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Ps(e, t, r);
  };
}
function gT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ns(e, n);
  };
}
function Ce(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ko;
  if ($c && $c(e, null), !Vt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (iT(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function vT(e) {
  for (let t = 0; t < e.length; t++)
    ot(e, t) || (e[t] = null);
  return e;
}
function $t(e) {
  const t = Yr(null);
  for (const r of rf(e)) {
    var n = sT(r, 2);
    const o = n[0], a = n[1];
    ot(e, o) && (Vt(a) ? t[o] = vT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = $t(a) : t[o] = a);
  }
  return t;
}
function bT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return mT(e);
    case "boolean":
      return hT(e);
    case "bigint":
      return zc ? zc(e) : "0";
    case "symbol":
      return Bc ? Bc(e) : "Symbol()";
    case "undefined":
      return yo(e);
    case "function":
    case "object": {
      if (e === null)
        return yo(e);
      const t = e, n = An(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : yo(r);
      }
      return yo(e);
    }
    default:
      return yo(e);
  }
}
function An(e, t) {
  for (; e !== null; ) {
    const r = uT(e, t);
    if (r) {
      if (r.get)
        return ht(r.get);
      if (typeof r.value == "function")
        return ht(r.value);
    }
    e = cT(e);
  }
  function n() {
    return null;
  }
  return n;
}
function yT(e) {
  try {
    return Ot(e, ""), !0;
  } catch {
    return !1;
  }
}
const Vc = Wt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), os = Wt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Wt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _T = Wt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ss = Wt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), wT = Wt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jc = Wt(["#text"]), Uc = Wt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ls = Wt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hc = Wt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ta = Wt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kT = on(/{{[\w\W]*|^[\w\W]*}}/g), TT = on(/<%[\w\W]*|^[\w\W]*%>/g), ST = on(/\${[\w\W]*/g), ET = on(/^data-[\-\w.\u00B7-\uFFFF]+$/), AT = on(/^aria-[\-\w]+$/), Wc = on(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), CT = on(/^(?:\w+script|data):/i), OT = on(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), LT = on(/^html$/i), IT = on(/^[a-z][.\w]*(-[.\w]+)+$/i), En = {
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
}, xT = function() {
  return typeof window > "u" ? null : window;
}, RT = function(t, n) {
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
}, Gc = function() {
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
function af() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xT();
  const t = (W) => af(W);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, p = e.trustedTypes, m = i.prototype, y = An(m, "cloneNode"), h = An(m, "remove"), g = An(m, "nextSibling"), A = An(m, "childNodes"), f = An(m, "parentNode"), C = An(m, "shadowRoot"), x = An(m, "attributes"), E = s && s.prototype ? An(s.prototype, "nodeType") : null, _ = s && s.prototype ? An(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const W = n.createElement("template");
    W.content && W.content.ownerDocument && (n = W.content.ownerDocument);
  }
  let T, L = "";
  const Y = n, Z = Y.implementation, le = Y.createNodeIterator, re = Y.createDocumentFragment, ae = Y.getElementsByTagName, be = r.importNode;
  let ye = Gc();
  t.isSupported = typeof rf == "function" && typeof f == "function" && Z && Z.createHTMLDocument !== void 0;
  const V = kT, Q = TT, j = ST, fe = ET, K = AT, G = CT, xe = OT, Be = IT;
  let ge = Wc, ve = null;
  const J = Ce({}, [...Vc, ...os, ...as, ...ss, ...jc]);
  let Ae = null;
  const Ne = Ce({}, [...Uc, ...ls, ...Hc, ...ta]);
  let he = Object.seal(Yr(null, {
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
  })), at = null, st = null;
  const Ze = Object.seal(Yr(null, {
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
  let Et = !0, et = !0, gt = !1, _t = !0, Xe = !1, wt = !0, k = !1, O = !1, B = !1, te = !1, Oe = !1, me = !1, S = !0, z = !1;
  const we = "user-content-";
  let Le = !0, Qe = !1, At = {}, We = null;
  const _n = Ce({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let lr = null;
  const ir = Ce({}, ["audio", "video", "img", "source", "image", "track"]);
  let cr = null;
  const zn = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bn = "http://www.w3.org/1998/Math/MathML", an = "http://www.w3.org/2000/svg", Ft = "http://www.w3.org/1999/xhtml";
  let sn = Ft, wr = !1, kr = null;
  const ur = Ce({}, [Bn, an, Ft], rs);
  let wn = Ce({}, ["mi", "mo", "mn", "ms", "mtext"]), Tr = Ce({}, ["annotation-xml"]);
  const uo = Ce({}, ["title", "style", "font", "a", "script"]);
  let zt = null;
  const Sr = ["application/xhtml+xml", "text/html"], fo = "text/html";
  let $e = null, kn = null;
  const ln = n.createElement("form"), Er = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Vn = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (kn && kn === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = $t(v), zt = // eslint-disable-next-line unicorn/prefer-includes
    Sr.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? fo : v.PARSER_MEDIA_TYPE, $e = zt === "application/xhtml+xml" ? rs : ko, ve = ot(v, "ALLOWED_TAGS") && Vt(v.ALLOWED_TAGS) ? Ce({}, v.ALLOWED_TAGS, $e) : J, Ae = ot(v, "ALLOWED_ATTR") && Vt(v.ALLOWED_ATTR) ? Ce({}, v.ALLOWED_ATTR, $e) : Ne, kr = ot(v, "ALLOWED_NAMESPACES") && Vt(v.ALLOWED_NAMESPACES) ? Ce({}, v.ALLOWED_NAMESPACES, rs) : ur, cr = ot(v, "ADD_URI_SAFE_ATTR") && Vt(v.ADD_URI_SAFE_ATTR) ? Ce($t(zn), v.ADD_URI_SAFE_ATTR, $e) : zn, lr = ot(v, "ADD_DATA_URI_TAGS") && Vt(v.ADD_DATA_URI_TAGS) ? Ce($t(ir), v.ADD_DATA_URI_TAGS, $e) : ir, We = ot(v, "FORBID_CONTENTS") && Vt(v.FORBID_CONTENTS) ? Ce({}, v.FORBID_CONTENTS, $e) : _n, at = ot(v, "FORBID_TAGS") && Vt(v.FORBID_TAGS) ? Ce({}, v.FORBID_TAGS, $e) : $t({}), st = ot(v, "FORBID_ATTR") && Vt(v.FORBID_ATTR) ? Ce({}, v.FORBID_ATTR, $e) : $t({}), At = ot(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? $t(v.USE_PROFILES) : v.USE_PROFILES : !1, Et = v.ALLOW_ARIA_ATTR !== !1, et = v.ALLOW_DATA_ATTR !== !1, gt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Xe = v.SAFE_FOR_TEMPLATES || !1, wt = v.SAFE_FOR_XML !== !1, k = v.WHOLE_DOCUMENT || !1, te = v.RETURN_DOM || !1, Oe = v.RETURN_DOM_FRAGMENT || !1, me = v.RETURN_TRUSTED_TYPE || !1, B = v.FORCE_BODY || !1, S = v.SANITIZE_DOM !== !1, z = v.SANITIZE_NAMED_PROPS || !1, Le = v.KEEP_CONTENT !== !1, Qe = v.IN_PLACE || !1, ge = yT(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Wc, sn = typeof v.NAMESPACE == "string" ? v.NAMESPACE : Ft, wn = ot(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? $t(v.MATHML_TEXT_INTEGRATION_POINTS) : Ce({}, ["mi", "mo", "mn", "ms", "mtext"]), Tr = ot(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? $t(v.HTML_INTEGRATION_POINTS) : Ce({}, ["annotation-xml"]);
    const P = ot(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? $t(v.CUSTOM_ELEMENT_HANDLING) : Yr(null);
    if (he = Yr(null), ot(P, "tagNameCheck") && Er(P.tagNameCheck) && (he.tagNameCheck = P.tagNameCheck), ot(P, "attributeNameCheck") && Er(P.attributeNameCheck) && (he.attributeNameCheck = P.attributeNameCheck), ot(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (he.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Xe && (et = !1), Oe && (te = !0), At && (ve = Ce({}, jc), Ae = Yr(null), At.html === !0 && (Ce(ve, Vc), Ce(Ae, Uc)), At.svg === !0 && (Ce(ve, os), Ce(Ae, ls), Ce(Ae, ta)), At.svgFilters === !0 && (Ce(ve, as), Ce(Ae, ls), Ce(Ae, ta)), At.mathMl === !0 && (Ce(ve, ss), Ce(Ae, Hc), Ce(Ae, ta))), Ze.tagCheck = null, Ze.attributeCheck = null, ot(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? Ze.tagCheck = v.ADD_TAGS : Vt(v.ADD_TAGS) && (ve === J && (ve = $t(ve)), Ce(ve, v.ADD_TAGS, $e))), ot(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? Ze.attributeCheck = v.ADD_ATTR : Vt(v.ADD_ATTR) && (Ae === Ne && (Ae = $t(Ae)), Ce(Ae, v.ADD_ATTR, $e))), ot(v, "ADD_URI_SAFE_ATTR") && Vt(v.ADD_URI_SAFE_ATTR) && Ce(cr, v.ADD_URI_SAFE_ATTR, $e), ot(v, "FORBID_CONTENTS") && Vt(v.FORBID_CONTENTS) && (We === _n && (We = $t(We)), Ce(We, v.FORBID_CONTENTS, $e)), ot(v, "ADD_FORBID_CONTENTS") && Vt(v.ADD_FORBID_CONTENTS) && (We === _n && (We = $t(We)), Ce(We, v.ADD_FORBID_CONTENTS, $e)), Le && (ve["#text"] = !0), k && Ce(ve, ["html", "head", "body"]), ve.table && (Ce(ve, ["tbody"]), delete at.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw _o('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw _o('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      T = v.TRUSTED_TYPES_POLICY, L = T.createHTML("");
    } else
      T === void 0 && (T = RT(p, o)), T !== null && typeof L == "string" && (L = T.createHTML(""));
    (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && ve === J && (ve = $t(ve)), ye.uponSanitizeAttribute.length > 0 && Ae === Ne && (Ae = $t(Ae)), Wt && Wt(v), kn = v;
  }, Br = Ce({}, [...os, ...as, ..._T]), Ar = Ce({}, [...ss, ...wT]), Cr = function(v) {
    let P = f(v);
    (!P || !P.tagName) && (P = {
      namespaceURI: sn,
      tagName: "template"
    });
    const X = ko(v.tagName), Te = ko(P.tagName);
    return kr[v.namespaceURI] ? v.namespaceURI === an ? P.namespaceURI === Ft ? X === "svg" : P.namespaceURI === Bn ? X === "svg" && (Te === "annotation-xml" || wn[Te]) : !!Br[X] : v.namespaceURI === Bn ? P.namespaceURI === Ft ? X === "math" : P.namespaceURI === an ? X === "math" && Tr[Te] : !!Ar[X] : v.namespaceURI === Ft ? P.namespaceURI === an && !Tr[Te] || P.namespaceURI === Bn && !wn[Te] ? !1 : !Ar[X] && (uo[X] || !Br[X]) : !!(zt === "application/xhtml+xml" && kr[v.namespaceURI]) : !1;
  }, Rt = function(v) {
    Wr(t.removed, {
      element: v
    });
    try {
      f(v).removeChild(v);
    } catch {
      h(v);
    }
  }, N = function(v, P) {
    try {
      Wr(t.removed, {
        attribute: P.getAttributeNode(v),
        from: P
      });
    } catch {
      Wr(t.removed, {
        attribute: null,
        from: P
      });
    }
    if (P.removeAttribute(v), v === "is")
      if (te || Oe)
        try {
          Rt(P);
        } catch {
        }
      else
        try {
          P.setAttribute(v, "");
        } catch {
        }
  }, ee = function(v) {
    let P = null, X = null;
    if (B)
      v = "<remove></remove>" + v;
    else {
      const Ve = Dc(v, /^[\r\n\t ]+/);
      X = Ve && Ve[0];
    }
    zt === "application/xhtml+xml" && sn === Ft && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const Te = T ? T.createHTML(v) : v;
    if (sn === Ft)
      try {
        P = new d().parseFromString(Te, zt);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = Z.createDocument(sn, "template", null);
      try {
        P.documentElement.innerHTML = wr ? L : Te;
      } catch {
      }
    }
    const pe = P.body || P.documentElement;
    return v && X && pe.insertBefore(n.createTextNode(X), pe.childNodes[0] || null), sn === Ft ? ae.call(P, k ? "html" : "body")[0] : k ? P.documentElement : pe;
  }, ke = function(v) {
    return le.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Ge = function(v) {
    v.normalize();
    const P = le.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = P.nextNode();
    for (; X; ) {
      let Te = X.data;
      Hr([V, Q, j], (pe) => {
        Te = Gr(Te, pe, " ");
      }), X.data = Te, X = P.nextNode();
    }
  }, dt = function(v) {
    const P = _ ? _(v) : null;
    return typeof P != "string" || $e(P) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    v.attributes !== x(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    v.nodeType !== E(v) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    v.childNodes !== A(v);
  }, Kt = function(v) {
    if (!E || typeof v != "object" || v === null)
      return !1;
    try {
      return E(v) === En.documentFragment;
    } catch {
      return !1;
    }
  }, Bt = function(v) {
    if (!E || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof E(v) == "number";
    } catch {
      return !1;
    }
  };
  function Pt(W, v, P) {
    Hr(W, (X) => {
      X.call(t, v, P, kn);
    });
  }
  const cn = function(v) {
    let P = null;
    if (Pt(ye.beforeSanitizeElements, v, null), dt(v))
      return Rt(v), !0;
    const X = $e(v.nodeName);
    if (Pt(ye.uponSanitizeElement, v, {
      tagName: X,
      allowedTags: ve
    }), wt && v.hasChildNodes() && !Bt(v.firstElementChild) && Ot(/<[/\w!]/g, v.innerHTML) && Ot(/<[/\w!]/g, v.textContent) || wt && v.namespaceURI === Ft && X === "style" && Bt(v.firstElementChild) || v.nodeType === En.progressingInstruction || wt && v.nodeType === En.comment && Ot(/<[/\w]/g, v.data))
      return Rt(v), !0;
    if (at[X] || !(Ze.tagCheck instanceof Function && Ze.tagCheck(X)) && !ve[X]) {
      if (!at[X] && M(X) && (he.tagNameCheck instanceof RegExp && Ot(he.tagNameCheck, X) || he.tagNameCheck instanceof Function && he.tagNameCheck(X)))
        return !1;
      if (Le && !We[X]) {
        const pe = f(v), Ve = A(v);
        if (Ve && pe) {
          const vt = Ve.length;
          for (let je = vt - 1; je >= 0; --je) {
            const Ct = y(Ve[je], !0);
            pe.insertBefore(Ct, g(v));
          }
        }
      }
      return Rt(v), !0;
    }
    return (E ? E(v) : v.nodeType) === En.element && !Cr(v) || (X === "noscript" || X === "noembed" || X === "noframes") && Ot(/<\/no(script|embed|frames)/i, v.innerHTML) ? (Rt(v), !0) : (Xe && v.nodeType === En.text && (P = v.textContent, Hr([V, Q, j], (pe) => {
      P = Gr(P, pe, " ");
    }), v.textContent !== P && (Wr(t.removed, {
      element: v.cloneNode()
    }), v.textContent = P)), Pt(ye.afterSanitizeElements, v, null), !1);
  }, Vr = function(v, P, X) {
    if (st[P] || S && (P === "id" || P === "name") && (X in n || X in ln))
      return !1;
    const Te = Ae[P] || Ze.attributeCheck instanceof Function && Ze.attributeCheck(P, v);
    if (!(et && !st[P] && Ot(fe, P))) {
      if (!(Et && Ot(K, P))) {
        if (!Te || st[P]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(M(v) && (he.tagNameCheck instanceof RegExp && Ot(he.tagNameCheck, v) || he.tagNameCheck instanceof Function && he.tagNameCheck(v)) && (he.attributeNameCheck instanceof RegExp && Ot(he.attributeNameCheck, P) || he.attributeNameCheck instanceof Function && he.attributeNameCheck(P, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            P === "is" && he.allowCustomizedBuiltInElements && (he.tagNameCheck instanceof RegExp && Ot(he.tagNameCheck, X) || he.tagNameCheck instanceof Function && he.tagNameCheck(X)))
          ) return !1;
        } else if (!cr[P]) {
          if (!Ot(ge, Gr(X, xe, ""))) {
            if (!((P === "src" || P === "xlink:href" || P === "href") && v !== "script" && Fc(X, "data:") === 0 && lr[v])) {
              if (!(gt && !Ot(G, Gr(X, xe, "")))) {
                if (X)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, w = Ce({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), M = function(v) {
    return !w[ko(v)] && Ot(Be, v);
  }, $ = function(v) {
    Pt(ye.beforeSanitizeAttributes, v, null);
    const P = v.attributes;
    if (!P || dt(v))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ae,
      forceKeepAttr: void 0
    };
    let Te = P.length;
    for (; Te--; ) {
      const pe = P[Te], Ve = pe.name, vt = pe.namespaceURI, je = pe.value, Ct = $e(Ve), Ha = je;
      let kt = Ve === "value" ? Ha : pT(Ha);
      if (X.attrName = Ct, X.attrValue = kt, X.keepAttr = !0, X.forceKeepAttr = void 0, Pt(ye.uponSanitizeAttribute, v, X), kt = X.attrValue, z && (Ct === "id" || Ct === "name") && Fc(kt, we) !== 0 && (N(Ve, v), kt = we + kt), wt && Ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, kt)) {
        N(Ve, v);
        continue;
      }
      if (Ct === "attributename" && Dc(kt, "href")) {
        N(Ve, v);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        N(Ve, v);
        continue;
      }
      if (!_t && Ot(/\/>/i, kt)) {
        N(Ve, v);
        continue;
      }
      Xe && Hr([V, Q, j], (Pl) => {
        kt = Gr(kt, Pl, " ");
      });
      const Rl = $e(v.nodeName);
      if (!Vr(Rl, Ct, kt)) {
        N(Ve, v);
        continue;
      }
      if (T && typeof p == "object" && typeof p.getAttributeType == "function" && !vt)
        switch (p.getAttributeType(Rl, Ct)) {
          case "TrustedHTML": {
            kt = T.createHTML(kt);
            break;
          }
          case "TrustedScriptURL": {
            kt = T.createScriptURL(kt);
            break;
          }
        }
      if (kt !== Ha)
        try {
          vt ? v.setAttributeNS(vt, Ve, kt) : v.setAttribute(Ve, kt), dt(v) ? Rt(v) : Mc(t.removed);
        } catch {
          N(Ve, v);
        }
    }
    Pt(ye.afterSanitizeAttributes, v, null);
  }, ne = function(v) {
    let P = null;
    const X = ke(v);
    for (Pt(ye.beforeSanitizeShadowDOM, v, null); P = X.nextNode(); )
      if (Pt(ye.uponSanitizeShadowNode, P, null), cn(P), $(P), Kt(P.content) && ne(P.content), (E ? E(P) : P.nodeType) === En.element) {
        const pe = C ? C(P) : P.shadowRoot;
        Kt(pe) && (se(pe), ne(pe));
      }
    Pt(ye.afterSanitizeShadowDOM, v, null);
  }, se = function(v) {
    const P = E ? E(v) : v.nodeType;
    if (P === En.element) {
      const pe = C ? C(v) : v.shadowRoot;
      Kt(pe) && (se(pe), ne(pe));
    }
    const X = A ? A(v) : v.childNodes;
    if (!X)
      return;
    const Te = [];
    Hr(X, (pe) => {
      Wr(Te, pe);
    });
    for (const pe of Te)
      se(pe);
    if (P === En.element) {
      const pe = _ ? _(v) : null;
      if (typeof pe == "string" && $e(pe) === "template") {
        const Ve = v.content;
        Kt(Ve) && se(Ve);
      }
    }
  };
  return t.sanitize = function(W) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, X = null, Te = null, pe = null;
    if (wr = !W, wr && (W = "<!-->"), typeof W != "string" && !Bt(W) && (W = bT(W), typeof W != "string"))
      throw _o("dirty is not a string, aborting");
    if (!t.isSupported)
      return W;
    if (O || Vn(v), t.removed = [], typeof W == "string" && (Qe = !1), Qe) {
      const je = _ ? _(W) : W.nodeName;
      if (typeof je == "string") {
        const Ct = $e(je);
        if (!ve[Ct] || at[Ct])
          throw _o("root node is forbidden and cannot be sanitized in-place");
      }
      if (dt(W))
        throw _o("root node is clobbered and cannot be sanitized in-place");
      se(W);
    } else if (Bt(W))
      P = ee("<!---->"), X = P.ownerDocument.importNode(W, !0), X.nodeType === En.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? P = X : P.appendChild(X), se(X);
    else {
      if (!te && !Xe && !k && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return T && me ? T.createHTML(W) : W;
      if (P = ee(W), !P)
        return te ? null : me ? L : "";
    }
    P && B && Rt(P.firstChild);
    const Ve = ke(Qe ? W : P);
    for (; Te = Ve.nextNode(); )
      cn(Te), $(Te), Kt(Te.content) && ne(Te.content);
    if (Qe)
      return Xe && Ge(W), W;
    if (te) {
      if (Xe && Ge(P), Oe)
        for (pe = re.call(P.ownerDocument); P.firstChild; )
          pe.appendChild(P.firstChild);
      else
        pe = P;
      return (Ae.shadowroot || Ae.shadowrootmode) && (pe = be.call(r, pe, !0)), pe;
    }
    let vt = k ? P.outerHTML : P.innerHTML;
    return k && ve["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Ot(LT, P.ownerDocument.doctype.name) && (vt = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + vt), Xe && Hr([V, Q, j], (je) => {
      vt = Gr(vt, je, " ");
    }), T && me ? T.createHTML(vt) : vt;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Vn(W), O = !0;
  }, t.clearConfig = function() {
    kn = null, O = !1;
  }, t.isValidAttribute = function(W, v, P) {
    kn || Vn({});
    const X = $e(W), Te = $e(v);
    return Vr(X, Te, P);
  }, t.addHook = function(W, v) {
    typeof v == "function" && Wr(ye[W], v);
  }, t.removeHook = function(W, v) {
    if (v !== void 0) {
      const P = dT(ye[W], v);
      return P === -1 ? void 0 : fT(ye[W], P, 1)[0];
    }
    return Mc(ye[W]);
  }, t.removeHooks = function(W) {
    ye[W] = [];
  }, t.removeAllHooks = function() {
    ye = Gc();
  }, t;
}
var PT = af();
const NT = {
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
function $T(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : PT.sanitize(e, NT) : "";
}
const MT = { class: "local-ai-chat-shell" }, DT = { class: "chat-sidebar" }, FT = { class: "sidebar-header" }, zT = { class: "sidebar-title-block" }, BT = { class: "sidebar-search" }, VT = ["placeholder"], jT = { class: "sidebar-section recent-section" }, UT = { class: "section-title-row" }, HT = { class: "section-title" }, WT = { class: "sidebar-actions" }, GT = ["title"], KT = ["title"], qT = {
  key: 0,
  class: "chat-list"
}, YT = ["onClick", "onKeydown"], ZT = { class: "chat-item-title" }, XT = { class: "chat-item-time" }, QT = ["title", "onClick"], JT = {
  key: 1,
  class: "sidebar-empty"
}, eS = { class: "chat-panel" }, tS = { class: "chat-topbar" }, nS = { class: "chat-topbar-main" }, rS = { class: "chat-title-row" }, oS = { class: "service-url" }, aS = { class: "chat-topbar-actions" }, sS = { class: "date-divider" }, lS = {
  key: 0,
  class: "empty-state"
}, iS = { class: "empty-title" }, cS = { class: "empty-desc" }, uS = { class: "message-avatar" }, dS = { key: 1 }, fS = { class: "message-body" }, pS = {
  key: 0,
  class: "user-bubble"
}, mS = {
  key: 0,
  class: "message-attachment-list"
}, hS = ["src", "alt"], gS = {
  key: 1,
  class: "attachment-file-icon"
}, vS = { class: "assistant-head" }, bS = {
  key: 0,
  class: "assistant-content-stack"
}, yS = ["open"], _S = { class: "reasoning-summary-title" }, wS = { key: 0 }, kS = ["innerHTML"], TS = ["innerHTML"], SS = {
  key: 1,
  class: "message-content loading-text"
}, ES = {
  key: 0,
  class: "message-stats"
}, AS = {
  key: 1,
  class: "message-warning"
}, CS = {
  key: 2,
  class: "message-actions"
}, OS = ["title", "onClick"], LS = ["title", "onClick"], IS = ["title"], xS = ["title"], RS = ["title", "onClick"], PS = ["title", "onClick"], NS = ["title"], $S = {
  key: 0,
  class: "attachment-preview-list"
}, MS = ["src", "alt"], DS = {
  key: 1,
  class: "attachment-file-icon"
}, FS = { class: "attachment-meta" }, zS = ["title", "onClick"], BS = ["placeholder", "onKeydown"], VS = { class: "input-toolbar" }, jS = { class: "input-toolbar-left" }, US = ["title"], HS = ["title"], WS = ["title", "aria-pressed"], GS = { class: "model-select-shell" }, KS = ["disabled"], qS = ["value"], YS = {
  key: 0,
  value: ""
}, ZS = { class: "input-toolbar-right" }, XS = ["title", "aria-label"], QS = ["disabled", "title", "aria-label"], JS = 96, e2 = 4096, is = 160, t2 = /* @__PURE__ */ ie({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Fo(), n = U(""), r = U([]), o = U(""), a = U(""), s = U([]), i = U(!1), l = U(!1), u = U(!1), d = U(!1), p = U(!0), m = U(!1), y = U(null), h = U(null), g = U(null), A = U(""), f = U(null), C = U(null), x = U(null), E = U(Date.now());
    let _ = null, T = null;
    const L = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), Z = I(
      () => (!!a.value.trim() || s.value.length > 0) && !i.value
    ), le = I(() => f.value?.healthy ? t("localAi.serviceHealthy") : f.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), re = I(
      () => r.value.find((w) => w.id === o.value) ?? null
    ), ae = I(() => re.value?.messages ?? []), be = (w) => w ? w.split(/[\\/]+/).pop() ?? w : "", ye = I(
      () => be(A.value) || be(f.value?.modelPath) || be(h.value?.modelPath) || t("localAi.localModel")
    ), V = I(() => g.value?.mainModels ?? []), Q = I(() => !!h.value?.mmprojPath), j = I(
      () => f.value?.ctxSize ?? h.value?.ctxSize ?? 4096
    ), fe = I(() => {
      const w = j.value, M = h.value?.maxTokens ?? 0;
      return M > 0 ? Math.min(
        Math.max(M, 512),
        Math.max(512, w - 512)
      ) : Math.min(
        Math.max(e2, Math.floor(w * 0.5)),
        Math.max(512, w - 512)
      );
    }), K = I(
      () => Math.max(512, j.value - fe.value)
    ), G = I(() => {
      const w = ye.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(w);
    }), xe = I(() => {
      const w = n.value.trim().toLowerCase();
      return r.value.filter(
        (M) => !w || M.title.toLowerCase().includes(w) || M.messages.some(
          ($) => $.content.toLowerCase().includes(w)
        )
      ).slice().sort((M, $) => $.updatedAt.localeCompare(M.updatedAt));
    }), Be = () => t("localAi.now"), ge = () => {
      const w = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: w,
        updatedAt: w,
        updatedAtLabel: Be(),
        messages: []
      };
    }, ve = () => {
      const w = C.value;
      return w ? w.scrollHeight - w.scrollTop - w.clientHeight <= JS : !0;
    }, J = () => {
      const w = ve();
      p.value = w, m.value = !w;
    }, Ae = () => {
      J();
    }, Ne = async (w = {}) => {
      await lt();
      const M = C.value;
      !M || !w.force && !p.value || (M.scrollTop = M.scrollHeight, J());
    }, he = () => {
      p.value = !0, Ne({ force: !0 });
    }, at = async () => {
      try {
        h.value = await Xd(), A.value = h.value.modelPath ?? "", g.value = await Qd(h.value), G.value || (d.value = !1);
      } catch (w) {
        dn.warn("[LocalAI] refresh chat config failed", w);
      }
    }, st = async () => {
      l.value = !0;
      try {
        f.value = await Jd();
      } catch (w) {
        dn.warn("[LocalAI] refresh chat status failed", w);
      } finally {
        l.value = !1;
      }
    }, Ze = async () => {
      try {
        const w = await Uk();
        r.value = w.map((M) => ({
          id: M.id,
          title: M.title,
          createdAt: M.createdAt,
          updatedAt: M.updatedAt,
          updatedAtLabel: new Date(M.updatedAt).toLocaleString(),
          messages: M.turns.map(($) => ({
            id: $.id,
            role: $.role,
            content: $.content,
            createdAt: $.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (w) {
        dn.warn("[LocalAI] refresh histories failed", w);
      }
    }, Et = async () => {
      await Promise.all([at(), st(), Ze()]);
    }, et = async () => {
      const w = re.value;
      w && await Hk({
        id: w.id,
        title: w.title,
        createdAt: w.createdAt,
        updatedAt: w.updatedAt,
        turns: w.messages.map((M) => ({
          id: M.id,
          role: M.role,
          content: M.content,
          createdAt: M.createdAt
        }))
      });
    }, gt = () => {
      const w = ge();
      r.value.unshift(w), o.value = w.id, a.value = "";
    }, _t = () => {
      re.value || gt();
    }, Xe = (w) => {
      o.value = w, p.value = !0, Ne({ force: !0 });
    }, wt = async (w) => {
      r.value = r.value.filter((M) => M.id !== w), await Wk(w), o.value === w && (o.value = r.value[0]?.id ?? "");
    }, k = () => {
      x.value?.click();
    }, O = (w, M) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: w.name,
      type: M,
      mime: w.type || "application/octet-stream",
      size: w.size,
      status: "pending"
    }), B = async (w) => {
      if (Rc(w)) {
        const $ = O(w, "image");
        if (w.size > Xk)
          return {
            ...$,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...$,
            status: "parsed",
            dataUrl: await eT(w)
          };
        } catch (ne) {
          return { ...$, status: "error", error: String(ne) };
        }
      }
      if (Pc(w)) {
        const $ = O(w, "text");
        if (w.size > Zk)
          return {
            ...$,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const ne = await tT(w);
          return {
            ...$,
            status: "parsed",
            text: ne.text,
            error: ne.truncated ? "truncated" : void 0
          };
        } catch (ne) {
          return { ...$, status: "error", error: String(ne) };
        }
      }
      return {
        ...O(w, "unsupported"),
        status: "error",
        error: Jk(w) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, te = async (w) => {
      const M = Array.from(w), $ = Yk - s.value.length;
      if ($ <= 0) {
        tt.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      M.length > $ && tt.msg(t("localAi.attachmentLimit"), "warning");
      const ne = M.slice(0, $), se = ne.map(
        (W) => O(
          W,
          Rc(W) ? "image" : Pc(W) ? "text" : "unsupported"
        )
      );
      s.value.push(...se), await Promise.all(
        ne.map(async (W, v) => {
          const P = await B(W), X = s.value.findIndex(
            (Te) => Te.id === se[v].id
          );
          X >= 0 && (s.value[X] = P);
        })
      );
    }, Oe = async (w) => {
      const M = w.target;
      M.files?.length && await te(M.files), M.value = "";
    }, me = async (w) => {
      w.dataTransfer?.files.length && await te(w.dataTransfer.files);
    }, S = (w) => {
      s.value = s.value.filter(
        (M) => M.id !== w
      );
    }, z = (w) => w.status === "pending" ? t("localAi.attachmentPending") : w.status === "error" ? w.error ?? "" : w.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), we = async () => {
      if (!(!h.value || !A.value)) {
        h.value.modelPath = A.value;
        try {
          h.value = await ia(h.value), f.value?.running && (f.value = await ef()), tt.msg(t("localAi.modelChanged"));
        } catch (w) {
          tt.msg(`${t("localAi.configSaveFailed")}: ${w}`, "error");
        }
      }
    }, Le = (w) => {
      let M = 0;
      for (let $ = 0; $ < w.length; $ += 1)
        M = M * 31 + w.charCodeAt($) >>> 0;
      return `code-${w.length}-${M.toString(16)}`;
    }, Qe = (w) => w.includes("<pre>") ? w.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (M, $, ne) => {
        const se = document.createElement("textarea");
        se.innerHTML = ne;
        const W = se.value, v = Le(W);
        Y.set(v, W);
        const P = $ ? ` class="${$}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${v}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${P}>${ne}</code></pre></div>`;
      }
    ) : w, At = (w) => {
      const M = L.get(w);
      if (M) return M;
      const $ = Qe(
        $T(Fe.parse(w, { async: !1 }))
      );
      if (L.set(w, $), L.size > 80) {
        const ne = L.keys().next().value;
        typeof ne == "string" && L.delete(ne);
      }
      return $;
    }, We = async (w) => {
      const ne = w.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!ne) return;
      const se = Y.get(ne);
      if (se)
        try {
          await navigator.clipboard.writeText(se), tt.msg(t("localAi.codeCopied"));
        } catch (W) {
          tt.msg(`${t("common.copy")}: ${W}`, "error");
        }
    }, _n = (w) => {
      const M = w.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!M || M.index === void 0)
        return { reasoning: "", answer: w };
      const $ = w.slice(0, M.index).trim(), ne = M[0], se = w.slice(M.index + ne.length).trim();
      return {
        reasoning: (M[1] ?? "").trim(),
        answer: [$, se].filter(Boolean).join(`

`)
      };
    }, lr = (w) => _n(w).reasoning, ir = (w) => _n(w).answer, cr = (w) => !!ir(w.content), zn = (w) => !!(w.streaming && w.allowThinking && w.reasoningStartedAt && !w.reasoningEndedAt && !cr(w)), Bn = (w) => {
      if (!w.reasoningStartedAt) return "0.00";
      const M = w.reasoningEndedAt ?? (w.streaming ? E.value : Date.now());
      return Math.max(0, (M - w.reasoningStartedAt) / 1e3).toFixed(2);
    }, an = (w) => !w.reasoningStartedAt && w.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Bn(w)
    }), Ft = (w) => new Date(
      w.createdAt || re.value?.updatedAt || Date.now()
    ), sn = (w) => Ft(w).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), wr = (w) => w.streaming ? zn(w) ? t("localAi.thinking") : t("localAi.generating") : sn(w), kr = (w) => w.allowThinking && !w.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), ur = (w, M) => {
      w.allowThinking && (M.includes("<think>") && !w.reasoningStartedAt && (w.reasoningStartedAt = Date.now()), M.includes("</think>") && !w.reasoningEndedAt && (w.reasoningEndedAt = Date.now()));
    }, wn = (w) => {
      const M = w.trim();
      if (!M) return 0;
      const $ = (M.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, W = (M.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((v, P) => /^[A-Za-z0-9_]+$/.test(P) ? v + Math.max(1, Math.ceil(P.length / 4)) : v + 1, 0);
      return Math.max(1, Math.ceil($ + W));
    }, Tr = (w) => Array.isArray(w) ? w.filter((M) => M.type === "text").map((M) => M.text).join(`
`) : w, uo = (w) => {
      const M = w.attachments?.filter(
        (W) => W.status === "parsed"
      ) ?? [], $ = nT(
        w.content,
        M
      ), ne = M.filter(
        (W) => W.type === "image" && W.dataUrl
      );
      if (!ne.length) return $;
      const se = [{ type: "text", text: $ }];
      for (const W of ne)
        se.push({
          type: "image_url",
          image_url: {
            url: W.dataUrl ?? ""
          }
        });
      return se;
    }, zt = (w) => wn(
      w.map((M) => {
        const $ = Tr(M.content);
        return `${M.role}: ${$}`;
      }).join(`
`)
    ), Sr = (w, M) => {
      const $ = Math.max(240, M * 4);
      return w.length <= $ ? w : `${t("localAi.previousAnswerTail")}

${w.slice(-$)}`;
    }, fo = (w, M) => {
      const $ = [];
      let ne = 0;
      for (let se = w.length - 1; se >= 0; se -= 1) {
        const W = w[se], v = zt([W]);
        if (ne + v <= M || $.length === 0) {
          $.unshift(W), ne += v;
          continue;
        }
        const P = M - ne;
        if (W.role !== "assistant" || typeof W.content != "string" || P < is)
          continue;
        let X = P, Te = {
          ...W,
          content: Sr(W.content, X)
        }, pe = zt([Te]);
        for (; pe > P && X > is; )
          X = Math.max(
            is,
            Math.floor(X * 0.7)
          ), Te = {
            ...W,
            content: Sr(W.content, X)
          }, pe = zt([Te]);
        ne + pe <= M && ($.unshift(Te), ne += pe);
      }
      return $;
    }, $e = () => fo(
      ae.value.filter((w) => !w.streaming).map((w) => ({
        role: w.role,
        content: w.role === "user" ? uo(w) : w.content
      })),
      K.value
    ), kn = (w) => {
      const M = h.value?.maxTokens ?? 0;
      if (M > 0) return M;
      const $ = zt(w);
      return Math.max(256, j.value - $ - 128);
    }, ln = (w) => {
      const M = E.value, $ = ae.value.findIndex(
        (pe) => pe.id === w.id
      ), ne = w.stats?.promptTokens ?? w.promptTokens ?? wn(
        ae.value.slice(0, Math.max(0, $)).map((pe) => pe.content).join(`
`)
      ), se = w.stats?.completionTokens ?? wn(w.content), W = j.value, v = w.stats?.totalTokens ?? ne + se, P = Math.min(v, W), X = Math.max(
        0,
        (w.stats?.generationTimeMs ?? w.elapsedMs ?? M - Ft(w).getTime()) / 1e3
      ), Te = w.stats?.tokensPerSecond ?? (X > 0 ? se / X : 0);
      return {
        context: P,
        contextMax: W,
        contextPercent: Math.min(100, Math.round(P / W * 100)),
        output: se,
        outputMax: (h.value?.maxTokens ?? 0) > 0 ? String(h.value?.maxTokens) : "∞",
        seconds: X.toFixed(1),
        speed: Te.toFixed(1)
      };
    }, Er = (w) => w.repetitionStopped ? t("localAi.repetitionStopped") : w.interrupted ? t("localAi.streamInterrupted") : w.stopped ? t("localAi.generationStopped") : (w.stats?.totalTokens ?? (w.promptTokens ?? 0) + (w.stats?.completionTokens ?? wn(w.content))) >= j.value - 8 ? t("localAi.contextLimitReached") : w.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", Vn = (w) => {
      const M = String(w);
      return /exceeds the available context size|exceed_context_size/i.test(M) ? t("localAi.contextExceeded") : M;
    }, Br = (w) => {
      const M = w.replace(/\s+/g, " ").trim();
      if (M.length < 900) return !1;
      const ne = M.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((P) => P.toLowerCase()) ?? [];
      if (ne.length < 140) return !1;
      const se = ne.slice(-120), W = /* @__PURE__ */ new Map();
      for (const P of se) W.set(P, (W.get(P) ?? 0) + 1);
      if (W.size / se.length < 0.12 && [...W.values()].some((P) => P >= 56))
        return !0;
      for (let P = 1; P <= 4; P += 1) {
        const X = ne.slice(-P).join("\0");
        let Te = 1;
        for (let pe = ne.length - P * 2; pe >= 0 && ne.slice(pe, pe + P).join("\0") === X; pe -= P)
          Te += 1;
        if (Te >= Math.max(24, Math.ceil(72 / P))) return !0;
      }
      return !1;
    }, Ar = () => {
      T || (E.value = Date.now(), T = setInterval(() => {
        E.value = Date.now();
      }, 250));
    }, Cr = () => {
      T && (clearInterval(T), T = null, E.value = Date.now());
    }, Rt = async (w) => {
      const M = performance.now(), $ = tf(), ne = $e();
      let se = "", W = null, v = null, P = !1, X = !1;
      y.value = $, u.value = !1, w.promptTokens = zt(ne);
      const Te = async () => {
        if (!se) {
          W = null, v?.(), v = null;
          return;
        }
        const je = u.value ? 480 : se.length > 900 ? 180 : se.length > 240 ? 96 : 32;
        w.content += se.slice(0, je), se = se.slice(je), !X && !u.value && Br(w.content) && (X = !0, u.value = !0, w.repetitionStopped = !0, ns($).catch(
          (Ct) => dn.warn("[LocalAI] repetition stop failed", Ct)
        )), await Ne(), W = window.setTimeout(() => {
          Te().catch(
            (Ct) => dn.warn("[LocalAI] stream pump failed", Ct)
          );
        }, 48);
      }, pe = (je) => {
        je && (ur(w, je), se += je, W === null && (W = window.setTimeout(() => {
          Te().catch(
            (Ct) => dn.warn("[LocalAI] stream pump failed", Ct)
          );
        }, 32)));
      }, Ve = async () => {
        !se && W === null || await new Promise((je) => {
          v = je;
        });
      }, vt = await jk(
        {
          messages: ne,
          maxTokens: kn(ne),
          enableThinking: w.allowThinking === !0
        },
        (je) => {
          P = !0, pe(je);
        },
        {
          requestId: $,
          onStats: (je) => {
            w.stats = je, E.value = Date.now();
          }
        }
      ).catch(async (je) => {
        throw await Ve(), je;
      });
      if (!P)
        pe(vt.content);
      else if (!u.value) {
        const je = w.content.length + se.length;
        vt.content.length > je && pe(vt.content.slice(je));
      }
      await Ve(), !u.value && vt.content && w.content !== vt.content && (w.content = vt.content), w.streaming = !1, w.elapsedMs = performance.now() - M, w.stopped = u.value, w.interrupted = !1, w.error = "", E.value = Date.now(), y.value = null;
    }, N = async () => {
      const w = y.value;
      if (!(!i.value || !w || u.value)) {
        u.value = !0;
        try {
          await ns(w);
        } catch (M) {
          dn.warn("[LocalAI] cancel stream failed", M);
        }
      }
    }, ee = () => {
      if (!a.value.trim() && !s.value.length) return !1;
      if (s.value.find(
        (ne) => ne.status === "pending"
      ))
        return tt.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const M = s.value.find(
        (ne) => ne.status === "error" || ne.type === "unsupported"
      );
      return M ? (tt.msg(
        `${t("localAi.attachmentErrorBlock")}: ${M.name}`,
        "warning"
      ), !1) : s.value.some(
        (ne) => ne.type === "image"
      ) && !Q.value ? (tt.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, ke = async () => {
      const w = a.value.trim();
      if (i.value || !ee()) return;
      _t();
      const M = (/* @__PURE__ */ new Date()).toISOString(), $ = s.value.map((v) => ({
        ...v
      })), ne = w || $[0]?.name || "";
      re.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: w,
        createdAt: M,
        attachments: $
      });
      const se = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: d.value && G.value,
        promptTokens: zt($e())
      };
      re.value?.messages.push(se), a.value = "", s.value = [], i.value = !0, Ar(), await Ne({ force: !0 });
      const W = performance.now();
      try {
        await Rt(se), re.value && (re.value.title = re.value.title === t("localAi.newChatTitle") ? ne.slice(0, 28) : re.value.title, re.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), re.value.updatedAtLabel = new Date(
          re.value.updatedAt
        ).toLocaleString(), await et()), await st();
      } catch (v) {
        if (!u.value) {
          a.value = w, s.value = $;
          const P = Vn(v);
          tt.msg(`${t("localAi.chatFailed")}: ${P}`, "error"), se.error = P, se.interrupted = !!se.content.trim(), se.interrupted || (se.content = P), re.value && (re.value.title = re.value.title === t("localAi.newChatTitle") ? ne.slice(0, 28) : re.value.title, re.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), re.value.updatedAtLabel = new Date(
            re.value.updatedAt
          ).toLocaleString(), await et());
        }
        se.streaming = !1, se.elapsedMs = performance.now() - W;
      } finally {
        i.value = !1, y.value = null, Cr(), await Ne();
      }
    }, Ge = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, dt = (w) => {
      const M = new Date(w), $ = /* @__PURE__ */ new Date(), ne = $.getTime() - M.getTime(), se = 24 * 60 * 60 * 1e3;
      return M.toDateString() === $.toDateString() ? M.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ne < se * 2 ? t("localAi.yesterday") : ne < se * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(ne / se))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(ne / (se * 7)))
      });
    }, Kt = async (w) => {
      try {
        await navigator.clipboard.writeText(w.content), tt.msg(t("localAi.copied"));
      } catch (M) {
        tt.msg(`${t("common.operationFailed")}: ${M}`, "error");
      }
    }, Bt = async (w) => {
      re.value && (re.value.messages = re.value.messages.filter(
        (M) => M.id !== w
      ), re.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), re.value.updatedAtLabel = new Date(
        re.value.updatedAt
      ).toLocaleString(), await et());
    }, Pt = (w) => {
      a.value = w.content;
    }, cn = () => {
      tt.msg(t("localAi.feedbackSaved"));
    }, Vr = async (w) => {
      const M = re.value;
      if (!M || i.value) return;
      const $ = M.messages.findIndex(
        (v) => v.id === w
      );
      if (!M.messages.slice(0, $).reverse().find((v) => v.role === "user")) return;
      M.messages = M.messages.slice(0, $);
      const se = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: d.value && G.value,
        promptTokens: zt($e())
      };
      M.messages.push(se), i.value = !0, Ar(), await Ne({ force: !0 });
      const W = performance.now();
      try {
        await Rt(se), M.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), M.updatedAtLabel = new Date(M.updatedAt).toLocaleString(), await et();
      } catch (v) {
        if (!u.value) {
          const P = Vn(v);
          tt.msg(`${t("localAi.chatFailed")}: ${P}`, "error"), se.error = P, se.interrupted = !!se.content.trim(), se.interrupted || (se.content = P), M.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), M.updatedAtLabel = new Date(M.updatedAt).toLocaleString(), await et();
        }
        se.streaming = !1, se.elapsedMs = performance.now() - W;
      } finally {
        i.value = !1, y.value = null, Cr(), await Ne();
      }
    };
    return ut(async () => {
      await Et(), _ = setInterval(() => {
        st().catch(
          (w) => dn.warn("[LocalAI] status timer failed", w)
        );
      }, 8e3);
    }), Ee(G, (w) => {
      w || (d.value = !1);
    }), Sa(() => {
      _ && clearInterval(_), y.value && ns(y.value), Cr();
    }), (w, M) => (R(), H("main", MT, [
      b("aside", DT, [
        b("header", FT, [
          b("div", zT, [
            b(
              "h2",
              null,
              F(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            b(
              "p",
              null,
              F(c(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ])
        ]),
        b("div", BT, [
          D(c(Mf), {
            theme: "outline",
            size: "17"
          }),
          yt(b("input", {
            "onUpdate:modelValue": M[0] || (M[0] = ($) => Zr(n) ? n.value = $ : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, VT), [
            [Oo, c(n)]
          ])
        ]),
        b("section", jT, [
          b("div", UT, [
            b(
              "div",
              HT,
              F(c(t)("localAi.recent")),
              1
              /* TEXT */
            ),
            b("div", WT, [
              b("button", {
                class: "icon-action-btn icon-action-btn--primary",
                type: "button",
                title: c(t)("localAi.newChat"),
                onClick: gt
              }, [
                D(c(Nl), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, GT),
              b("button", {
                class: "icon-action-btn",
                type: "button",
                title: c(t)("plugins.refresh"),
                onClick: Et
              }, [
                D(c(Dl), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, KT)
            ])
          ]),
          c(xe).length ? (R(), H("div", qT, [
            (R(!0), H(
              bt,
              null,
              Kn(c(xe), ($) => (R(), H("div", {
                key: $.id,
                class: q([
                  "chat-list-item",
                  c(o) === $.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (ne) => Xe($.id),
                onKeydown: en(qe((ne) => Xe($.id), ["prevent"]), ["enter"])
              }, [
                D(c($f), {
                  theme: "outline",
                  size: "16"
                }),
                b(
                  "span",
                  ZT,
                  F($.title),
                  1
                  /* TEXT */
                ),
                b(
                  "span",
                  XT,
                  F(dt($.updatedAt)),
                  1
                  /* TEXT */
                ),
                b("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: qe((ne) => wt($.id), ["stop"])
                }, [
                  D(c(Ga), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, QT)
              ], 42, YT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (R(), H(
            "div",
            JT,
            F(c(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      b("section", eS, [
        b("header", tS, [
          b("div", nS, [
            b("div", rS, [
              b(
                "h3",
                null,
                F(c(re)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              b(
                "span",
                {
                  class: q([
                    "status-pill",
                    c(f)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  M[5] || (M[5] = b(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Xt(
                    " " + F(c(le)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b(
              "div",
              oS,
              F(c(f)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          b("div", aS, [
            D(c(Hn), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: Ge
            }, {
              default: ue(() => [
                D(c(cs), {
                  theme: "outline",
                  size: "16"
                }),
                b(
                  "span",
                  null,
                  F(c(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        b(
          "div",
          {
            ref_key: "messageListRef",
            ref: C,
            class: "message-list",
            onScroll: Ae
          },
          [
            b("div", sS, [
              b(
                "span",
                null,
                F(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(ae).length ? oe("v-if", !0) : (R(), H("div", lS, [
              D(c(Fl), {
                theme: "outline",
                size: "28"
              }),
              b(
                "div",
                iS,
                F(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              b(
                "div",
                cS,
                F(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (R(!0), H(
              bt,
              null,
              Kn(c(ae), ($) => (R(), H(
                "article",
                {
                  key: $.id,
                  class: q(["message-row", `message-row--${$.role}`])
                },
                [
                  b("div", uS, [
                    $.role === "assistant" ? (R(), de(c(Fl), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (R(), H(
                      "span",
                      dS,
                      F(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  b("div", fS, [
                    $.role === "user" ? (R(), H("div", pS, [
                      b(
                        "div",
                        null,
                        F($.content),
                        1
                        /* TEXT */
                      ),
                      $.attachments?.length ? (R(), H("div", mS, [
                        (R(!0), H(
                          bt,
                          null,
                          Kn($.attachments, (ne) => (R(), H("div", {
                            key: ne.id,
                            class: "message-attachment-chip"
                          }, [
                            ne.type === "image" && ne.dataUrl ? (R(), H("img", {
                              key: 0,
                              src: ne.dataUrl,
                              alt: ne.name
                            }, null, 8, hS)) : (R(), H(
                              "span",
                              gS,
                              F(ne.type === "text" ? "TXT" : "FILE"),
                              1
                              /* TEXT */
                            )),
                            b(
                              "span",
                              null,
                              F(ne.name),
                              1
                              /* TEXT */
                            )
                          ]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : oe("v-if", !0),
                      b(
                        "time",
                        null,
                        F(sn($)),
                        1
                        /* TEXT */
                      )
                    ])) : (R(), H(
                      bt,
                      { key: 1 },
                      [
                        b("div", vS, [
                          b(
                            "span",
                            null,
                            F(c(ye)),
                            1
                            /* TEXT */
                          ),
                          b(
                            "small",
                            null,
                            F(wr($)),
                            1
                            /* TEXT */
                          )
                        ]),
                        b(
                          "div",
                          {
                            class: q(["assistant-card", { "assistant-card--streaming": $.streaming }])
                          },
                          [
                            $.content ? (R(), H("div", bS, [
                              $.allowThinking && lr($.content) ? (R(), H("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: $.streaming && zn($)
                              }, [
                                b("summary", null, [
                                  b("span", _S, [
                                    D(c($l), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    Xt(
                                      " " + F(an($)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  $.streaming ? (R(), H(
                                    "small",
                                    wS,
                                    F(zn($) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                    1
                                    /* TEXT */
                                  )) : oe("v-if", !0)
                                ]),
                                b("div", {
                                  class: "message-content markdown-body",
                                  onClick: We,
                                  innerHTML: At(lr($.content))
                                }, null, 8, kS)
                              ], 8, yS)) : oe("v-if", !0),
                              ir($.content) ? (R(), H("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                onClick: We,
                                innerHTML: At(ir($.content))
                              }, null, 8, TS)) : oe("v-if", !0)
                            ])) : (R(), H(
                              "div",
                              SS,
                              F(kr($)),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        $.content ? (R(), H("div", ES, [
                          b(
                            "span",
                            null,
                            " Context: " + F(ln($).context) + "/" + F(ln($).contextMax) + " (" + F(ln($).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            " Output: " + F(ln($).output) + "/" + F(ln($).outputMax),
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            F(ln($).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            F(ln($).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : oe("v-if", !0),
                        Er($) ? (R(), H(
                          "div",
                          AS,
                          F(Er($)),
                          1
                          /* TEXT */
                        )) : oe("v-if", !0),
                        $.streaming ? oe("v-if", !0) : (R(), H("div", CS, [
                          b("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (ne) => Kt($)
                          }, [
                            D(c(xf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, OS),
                          b("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (ne) => Vr($.id)
                          }, [
                            D(c(Dl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, LS),
                          b("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: cn
                          }, [
                            D(c(Nf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, IS),
                          b("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: cn
                          }, [
                            D(c(Rf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, xS),
                          b("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (ne) => Pt($)
                          }, [
                            D(c(Pf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, RS),
                          b("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (ne) => Bt($.id)
                          }, [
                            D(c(Ga), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, PS)
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
          onClick: he
        }, [
          D(c(Ml), {
            theme: "outline",
            size: "15"
          }),
          b(
            "span",
            null,
            F(c(t)("localAi.jumpToLatest")),
            1
            /* TEXT */
          )
        ], 8, NS)) : oe("v-if", !0),
        b(
          "form",
          {
            class: "chat-input-card",
            onDragover: M[4] || (M[4] = qe(() => {
            }, ["prevent"])),
            onDrop: qe(me, ["prevent"]),
            onSubmit: qe(ke, ["prevent"])
          },
          [
            b(
              "input",
              {
                ref_key: "fileInputRef",
                ref: x,
                class: "attachment-input",
                type: "file",
                multiple: "",
                accept: ".txt,.md,.json,.csv,.html,.css,.js,.ts,.tsx,.vue,.rs,.py,.java,.go,.yaml,.yml,.toml,.xml,.log,image/png,image/jpeg,image/webp,.pdf,.doc,.docx,.xls,.xlsx",
                onChange: Oe
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ),
            c(s).length ? (R(), H("div", $S, [
              (R(!0), H(
                bt,
                null,
                Kn(c(s), ($) => (R(), H(
                  "div",
                  {
                    key: $.id,
                    class: q([
                      "attachment-preview-item",
                      `attachment-preview-item--${$.status}`
                    ])
                  },
                  [
                    $.type === "image" && $.dataUrl ? (R(), H("img", {
                      key: 0,
                      src: $.dataUrl,
                      alt: $.name
                    }, null, 8, MS)) : (R(), H(
                      "span",
                      DS,
                      F($.type === "text" ? "TXT" : "FILE"),
                      1
                      /* TEXT */
                    )),
                    b("span", FS, [
                      b(
                        "strong",
                        null,
                        F($.name),
                        1
                        /* TEXT */
                      ),
                      b(
                        "small",
                        null,
                        F(c(Qk)($.size)) + " · " + F(z($)),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("button", {
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: (ne) => S($.id)
                    }, [
                      D(c(Ga), {
                        theme: "outline",
                        size: "12"
                      })
                    ], 8, zS)
                  ],
                  2
                  /* CLASS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : oe("v-if", !0),
            yt(b("textarea", {
              "onUpdate:modelValue": M[1] || (M[1] = ($) => Zr(a) ? a.value = $ : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: en(qe(ke, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, BS), [
              [Oo, c(a)]
            ]),
            b("div", VS, [
              b("div", jS, [
                b("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.addAttachment"),
                  onClick: k
                }, [
                  D(c(Nl), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, US),
                b("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: Ge
                }, [
                  D(c(cs), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, HS),
                c(G) ? (R(), H("button", {
                  key: 0,
                  class: q([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(d) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(d) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(d),
                  onClick: M[2] || (M[2] = ($) => d.value = !c(d))
                }, [
                  D(c($l), {
                    theme: "outline",
                    size: "15"
                  }),
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.reasoningTitle")),
                    1
                    /* TEXT */
                  )
                ], 10, WS)) : oe("v-if", !0),
                b("label", GS, [
                  yt(b("select", {
                    "onUpdate:modelValue": M[3] || (M[3] = ($) => Zr(A) ? A.value = $ : null),
                    disabled: c(i) || !c(V).length,
                    onChange: we
                  }, [
                    (R(!0), H(
                      bt,
                      null,
                      Kn(c(V), ($) => (R(), H("option", {
                        key: $,
                        value: $
                      }, F(be($)), 9, qS))),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    c(V).length ? oe("v-if", !0) : (R(), H(
                      "option",
                      YS,
                      F(c(ye)),
                      1
                      /* TEXT */
                    ))
                  ], 40, KS), [
                    [Af, c(A)]
                  ]),
                  D(c(Ml), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              b("div", ZS, [
                M[6] || (M[6] = b(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                c(i) ? (R(), H("button", {
                  key: 0,
                  class: "send-btn send-btn--stop",
                  type: "button",
                  title: c(t)("localAi.stopGenerating"),
                  "aria-label": c(t)("localAi.stopGenerating"),
                  onClick: N
                }, [
                  D(c(Ff), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, XS)) : (R(), H("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(Z),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  D(c(Df), {
                    theme: "outline",
                    size: "15"
                  })
                ], 8, QS))
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), n2 = /* @__PURE__ */ Js(t2, [["__scopeId", "data-v-22072c3c"]]), r2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n2
}, Symbol.toStringTag, { value: "Module" }));
async function Kc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await xt("plugin:dialog|open", { options: e });
}
const o2 = { class: "settings-panel local-ai-settings-shell" }, a2 = { class: "local-ai-hero panel-card" }, s2 = { class: "panel-title" }, l2 = { class: "hero-desc" }, i2 = { class: "header-actions" }, c2 = {
  key: 0,
  class: "settings-grid"
}, u2 = { class: "summary-panel panel-card" }, d2 = { class: "status-strip" }, f2 = { class: "memory-card" }, p2 = { class: "memory-card__header" }, m2 = { class: "memory-metrics" }, h2 = { class: "bottleneck-row" }, g2 = { class: "summary-card" }, v2 = { class: "summary-card__title" }, b2 = { class: "summary-card__desc" }, y2 = { class: "service-controls" }, _2 = { class: "service-url" }, w2 = { class: "summary-card" }, k2 = { class: "summary-card__title" }, T2 = { class: "summary-card__desc" }, S2 = { class: "summary-meta" }, E2 = { class: "form-panel panel-card" }, A2 = { class: "settings-section" }, C2 = { class: "settings-section__header" }, O2 = { class: "field-stack" }, L2 = ["title"], I2 = { class: "path-control" }, x2 = ["title"], R2 = ["title"], P2 = ["title"], N2 = { class: "path-control" }, $2 = ["placeholder"], M2 = { class: "settings-section grid-two" }, D2 = { class: "settings-section__header" }, F2 = { class: "param-grid" }, z2 = ["title"], B2 = ["title"], V2 = ["title"], j2 = ["title"], U2 = ["title"], H2 = ["title"], W2 = { class: "settings-section grid-two" }, G2 = { class: "settings-section__header" }, K2 = { class: "switch-grid" }, q2 = ["title"], Y2 = ["title"], Z2 = ["title"], X2 = { class: "settings-section grid-two" }, Q2 = { class: "settings-section__header" }, J2 = { class: "switch-grid switch-grid--two" }, eE = ["title"], tE = ["title"], nE = ["title"], rE = ["title"], oE = { class: "settings-section grid-two" }, aE = { class: "settings-section__header" }, sE = { class: "param-grid param-grid--three" }, lE = ["title"], iE = ["title"], cE = ["title"], uE = ["title"], dE = ["title"], fE = ["title"], pE = ["title"], mE = ["title"], hE = { class: "settings-footer" }, gE = ["title"], vE = /* @__PURE__ */ ie({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Fo(), n = U(null), r = U(null), o = U(null), a = U(null), s = U(!1), i = U(!1), l = U(!1), u = U(!1), d = U(!1);
    let p = null;
    const m = I(() => !!a.value?.selectedModelPath), y = I(() => !!n.value?.mmprojPath), h = I({
      get: () => n.value?.modelPath ?? "",
      set: (K) => {
        n.value && (n.value.modelPath = K || void 0);
      }
    }), g = I({
      get: () => n.value?.mmprojPath ?? "",
      set: (K) => {
        n.value && (n.value.mmprojPath = K || void 0);
      }
    }), A = I(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), f = I(
      () => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), C = I(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), x = (K) => K.split(/[\\/]+/).pop() ?? K, E = I(() => {
      const G = x(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return G ? Number(G[1]) : 4;
    }), _ = I(() => {
      const K = n.value;
      if (!K)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const G = Math.max(1.4, E.value * 0.92), xe = Math.min(1, Math.max(0, K.gpuLayers) / 32), Be = K.ctxSize / 8192 * 0.38 * (K.kvOffload ? 1 : 0.12), ge = K.batchSize / 512 * 0.18, ve = G * xe + Be + ge, J = G * (1 - xe) + K.ctxSize / 8192 * 0.22, Ae = ve + J, Ne = K.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : K.ctxSize >= 32768 || K.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: ve.toFixed(2),
        totalGb: Ae.toFixed(2),
        bottleneck: Ne
      };
    }), T = (K) => t(`localAi.paramHints.${K}`), L = async () => {
      r.value = await zk();
    }, Y = async () => {
      o.value = await Jd();
    }, Z = async () => {
      n.value && (a.value = await Qd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, le = async () => {
      s.value = !0;
      try {
        n.value = await Xd(), await Promise.all([L(), Z(), Y()]);
      } catch (K) {
        dn.error("[LocalAI] refresh settings failed", K), tt.msg(`${t("localAi.refreshFailed")}: ${K}`, "error");
      } finally {
        s.value = !1;
      }
    }, re = async () => {
      if (n.value)
        try {
          await ia(n.value);
        } catch (K) {
          dn.warn("[LocalAI] autosave failed", K);
        }
    }, ae = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await ia(n.value), await Promise.all([L(), Z(), Y()]), tt.msg(t("localAi.configSaved"));
        } catch (K) {
          tt.msg(`${t("localAi.configSaveFailed")}: ${K}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, be = async () => {
      const K = await Kc({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !K || Array.isArray(K) || !n.value || (n.value.modelDir = K, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await Z());
    }, ye = async () => {
      const K = await Kc({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !K || Array.isArray(K) || !n.value || (n.value.runtimePath = K, await re(), await L());
    }, V = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await ia(n.value), o.value = await Bk(n.value), tt.msg(t("localAi.serviceStarted"));
        } catch (K) {
          tt.msg(`${t("localAi.serviceStartFailed")}: ${K}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, Q = async () => {
      u.value = !0;
      try {
        await ae(), o.value = await ef(), tt.msg(t("localAi.serviceRestarted"));
      } catch (K) {
        tt.msg(`${t("localAi.serviceRestartFailed")}: ${K}`, "error");
      } finally {
        u.value = !1;
      }
    }, j = async () => {
      d.value = !0;
      try {
        await Vk(), await Y(), tt.msg(t("localAi.serviceStoppedMsg"));
      } catch (K) {
        tt.msg(`${t("localAi.serviceStopFailed")}: ${K}`, "error");
      } finally {
        d.value = !1;
      }
    }, fe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return ut(async () => {
      await le(), p = setInterval(() => {
        Y().catch(
          (K) => dn.warn("[LocalAI] status refresh failed", K)
        );
      }, 5e3);
    }), Sa(() => {
      p && clearInterval(p);
    }), (K, G) => {
      const xe = Jw, Be = Qw, ge = Mw, ve = sk;
      return R(), H("div", o2, [
        b("header", a2, [
          b("div", null, [
            b(
              "h3",
              s2,
              F(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              l2,
              F(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", i2, [
            D(c(Hn), {
              size: "small",
              plain: "",
              onClick: fe
            }, {
              default: ue(() => [
                Xt(
                  F(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            D(c(Hn), {
              size: "small",
              loading: c(s),
              onClick: le
            }, {
              default: ue(() => [
                Xt(
                  F(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (R(), H("main", c2, [
          b("aside", u2, [
            b("div", d2, [
              b(
                "div",
                {
                  class: q(["status-item", { ready: c(r)?.available }])
                },
                [
                  G[25] || (G[25] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    F(c(A)),
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
                  G[26] || (G[26] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    F(c(f)),
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
                  G[27] || (G[27] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    F(c(C)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", f2, [
              b("div", p2, [
                b(
                  "span",
                  null,
                  F(c(t)("localAi.estimatedMemory")),
                  1
                  /* TEXT */
                ),
                b(
                  "small",
                  null,
                  F(c(t)("localAi.estimateBeta")),
                  1
                  /* TEXT */
                )
              ]),
              b("div", m2, [
                b("div", null, [
                  G[28] || (G[28] = b(
                    "span",
                    null,
                    "GPU",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "b",
                    null,
                    F(c(_).gpuGb) + " GB",
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.total")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    F(c(_).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", h2, [
                b(
                  "span",
                  null,
                  F(c(t)("localAi.bottleneck")),
                  1
                  /* TEXT */
                ),
                b(
                  "b",
                  null,
                  F(c(_).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            b("section", g2, [
              b(
                "div",
                v2,
                F(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                b2,
                F(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", y2, [
                D(c(Hn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: V
                }, {
                  default: ue(() => [
                    Xt(
                      F(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                D(c(Hn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: Q
                }, {
                  default: ue(() => [
                    Xt(
                      F(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                D(c(Hn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(d),
                  disabled: !c(o)?.running,
                  onClick: j
                }, {
                  default: ue(() => [
                    Xt(
                      F(c(t)("localAi.stopService")),
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
                _2,
                F(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", w2, [
              b(
                "div",
                k2,
                F(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                T2,
                F(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", S2, [
                b("div", null, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    F(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    F(c(m) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    F(c(h) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    F(c(g) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    F(c(y) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    F(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          b("section", E2, [
            b("div", A2, [
              b("div", C2, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    F(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    F(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", O2, [
                b("label", {
                  class: "field-row",
                  title: T("modelDir")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  b("div", I2, [
                    yt(b(
                      "input",
                      {
                        "onUpdate:modelValue": G[0] || (G[0] = (J) => c(n).modelDir = J),
                        class: "text-input",
                        onChange: Z
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Oo, c(n).modelDir]
                    ]),
                    D(c(Hn), {
                      size: "small",
                      plain: "",
                      onClick: be
                    }, {
                      default: ue(() => [
                        Xt(
                          F(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, L2),
                b("label", {
                  class: "field-row",
                  title: T("mainModel")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  D(Be, {
                    modelValue: c(h),
                    "onUpdate:modelValue": G[1] || (G[1] = (J) => Zr(h) ? h.value = J : null),
                    class: "field-select",
                    clearable: "",
                    onChange: re
                  }, {
                    default: ue(() => [
                      (R(!0), H(
                        bt,
                        null,
                        Kn(c(a)?.mainModels ?? [], (J) => (R(), de(xe, {
                          key: J,
                          label: x(J),
                          value: J
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, x2),
                b("label", {
                  class: "field-row",
                  title: T("mmprojModel")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  D(Be, {
                    modelValue: c(g),
                    "onUpdate:modelValue": G[2] || (G[2] = (J) => Zr(g) ? g.value = J : null),
                    class: "field-select",
                    clearable: "",
                    onChange: re
                  }, {
                    default: ue(() => [
                      (R(!0), H(
                        bt,
                        null,
                        Kn(c(a)?.mmprojModels ?? [], (J) => (R(), de(xe, {
                          key: J,
                          label: x(J),
                          value: J
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, R2),
                b("label", {
                  class: "field-row",
                  title: T("runtimePath")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  b("div", N2, [
                    yt(b("input", {
                      "onUpdate:modelValue": G[3] || (G[3] = (J) => c(n).runtimePath = J),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, $2), [
                      [Oo, c(n).runtimePath]
                    ]),
                    D(c(Hn), {
                      size: "small",
                      plain: "",
                      onClick: ye
                    }, {
                      default: ue(() => [
                        Xt(
                          F(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, P2)
              ])
            ]),
            b("div", M2, [
              b("div", D2, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    F(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    F(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", F2, [
                b("label", {
                  class: "number-field",
                  title: T("ctxSize")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": G[4] || (G[4] = (J) => c(n).ctxSize = J),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, z2),
                b("label", {
                  class: "number-field",
                  title: T("gpuLayers")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": G[5] || (G[5] = (J) => c(n).gpuLayers = J),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, B2),
                b("label", {
                  class: "number-field",
                  title: T("threads")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": G[6] || (G[6] = (J) => c(n).threads = J),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, V2),
                b("label", {
                  class: "number-field",
                  title: T("batchSize")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": G[7] || (G[7] = (J) => c(n).batchSize = J),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, j2),
                b("label", {
                  class: "number-field",
                  title: T("ubatchSize")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": G[8] || (G[8] = (J) => c(n).ubatchSize = J),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, U2),
                b("label", {
                  class: "number-field",
                  title: T("mainGpu")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": G[9] || (G[9] = (J) => c(n).mainGpu = J),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, H2)
              ])
            ]),
            b("div", W2, [
              b("div", G2, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    F(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    F(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", K2, [
                b("label", {
                  title: T("flashAttn")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  D(ve, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": G[10] || (G[10] = (J) => c(n).flashAttn = J)
                  }, null, 8, ["modelValue"])
                ], 8, q2),
                b("label", {
                  title: T("kvOffload")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  D(ve, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": G[11] || (G[11] = (J) => c(n).kvOffload = J)
                  }, null, 8, ["modelValue"])
                ], 8, Y2),
                b("label", {
                  title: T("mmap")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  D(ve, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": G[12] || (G[12] = (J) => c(n).mmap = J)
                  }, null, 8, ["modelValue"])
                ], 8, Z2)
              ])
            ]),
            b("div", X2, [
              b("div", Q2, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    F(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    F(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", J2, [
                b("label", {
                  title: T("autoStart")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  D(ve, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": G[13] || (G[13] = (J) => c(n).autoStartOnRequest = J)
                  }, null, 8, ["modelValue"])
                ], 8, eE),
                b("label", {
                  title: T("keepAlive")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  D(ve, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": G[14] || (G[14] = (J) => c(n).keepAlive = J)
                  }, null, 8, ["modelValue"])
                ], 8, tE),
                b("label", {
                  class: "number-field",
                  title: T("idleTimeout")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": G[15] || (G[15] = (J) => c(n).idleTimeoutMinutes = J),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, nE),
                b("label", {
                  class: "number-field",
                  title: T("requestTimeout")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": G[16] || (G[16] = (J) => c(n).requestTimeoutSecs = J),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, rE)
              ])
            ]),
            b("div", oE, [
              b("div", aE, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    F(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    F(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", sE, [
                b("label", {
                  class: "number-field",
                  title: T("temperature")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": G[17] || (G[17] = (J) => c(n).temperature = J),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, lE),
                b("label", {
                  class: "number-field",
                  title: T("topP")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": G[18] || (G[18] = (J) => c(n).topP = J),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, iE),
                b("label", {
                  class: "number-field",
                  title: T("topK")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": G[19] || (G[19] = (J) => c(n).topK = J),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, cE),
                b("label", {
                  class: "number-field",
                  title: T("minP")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": G[20] || (G[20] = (J) => c(n).minP = J),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, uE),
                b("label", {
                  class: "number-field",
                  title: T("repeatPenalty")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": G[21] || (G[21] = (J) => c(n).repeatPenalty = J),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, dE),
                b("label", {
                  class: "number-field",
                  title: T("repeatLastN")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": G[22] || (G[22] = (J) => c(n).repeatLastN = J),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, fE),
                b("label", {
                  class: "number-field",
                  title: T("maxTokens")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": G[23] || (G[23] = (J) => c(n).maxTokens = J),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, pE),
                b("label", {
                  class: "number-field",
                  title: T("port")
                }, [
                  b(
                    "span",
                    null,
                    F(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  D(ge, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": G[24] || (G[24] = (J) => c(n).port = J),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, mE)
              ])
            ]),
            b("div", hE, [
              D(c(Hn), {
                type: "primary",
                loading: c(i),
                onClick: ae
              }, {
                default: ue(() => [
                  Xt(
                    F(c(t)("common.save")),
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
              }, F(c(o).commandLine), 9, gE)) : oe("v-if", !0)
            ])
          ])
        ])) : oe("v-if", !0)
      ]);
    };
  }
}), bE = /* @__PURE__ */ Js(vE, [["__scopeId", "data-v-c43741fb"]]), yE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bE
}, Symbol.toStringTag, { value: "Module" }));
export {
  kE as activate,
  kE as default
};
