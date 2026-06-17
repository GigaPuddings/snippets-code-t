var vf = Object.defineProperty;
var bf = (e, t, n) => t in e ? vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ue = (e, t, n) => bf(e, typeof t != "symbol" ? t + "" : t, n);
import * as rs from "vue";
import { inject as Ve, createVNode as M, defineAsyncComponent as yf, ref as W, shallowRef as kr, computed as R, watch as Ee, onMounted as dt, onUnmounted as Da, defineComponent as le, h as ru, Text as ou, Fragment as kt, createElementBlock as H, openBlock as P, normalizeClass as Y, createCommentVNode as re, renderSlot as Te, createElementVNode as b, getCurrentInstance as qt, unref as c, watchEffect as au, readonly as Gs, getCurrentScope as _f, onScopeDispose as wf, nextTick as it, isRef as ao, warn as kf, provide as Dn, mergeProps as so, toRef as Qn, useAttrs as Tf, useSlots as Sf, normalizeStyle as Nt, createBlock as de, withCtx as ue, resolveDynamicComponent as Gt, withModifiers as et, toDisplayString as D, onBeforeUnmount as Bn, Transition as bo, withDirectives as Tt, vShow as sr, reactive as Dr, onActivated as Ef, onUpdated as su, cloneVNode as Af, Comment as Cf, Teleport as If, onBeforeMount as Lf, onDeactivated as Of, createTextVNode as nn, withKeys as vn, createSlots as xf, toRaw as Rf, toRefs as Ks, resolveComponent as Pr, resolveDirective as Nf, toHandlerKey as Pf, renderList as Xn, vModelText as Bo, shallowReactive as $f, isVNode as Vo, render as ka, vModelSelect as Mf } from "vue";
var Df = {
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
function Ff() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function zf(e, t, n) {
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
var Bf = Symbol("icon-context");
function jt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Ff(), i = Ve(Bf, Df);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, y = a.fill, h = a.spin, g = zf(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: m,
          fill: y
        }, i), I = [i.prefix + "-icon"];
        return I.push(i.prefix + "-icon-" + e), t && i.rtl && I.push(i.prefix + "-icon-rtl"), h && I.push(i.prefix + "-icon-spin"), M("span", {
          class: I.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const Vf = jt("add", !1, function(e) {
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
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Hl = jt("brain", !0, function(e) {
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
}), jf = jt("copy", !0, function(e) {
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
}), os = jt("delete", !1, function(e) {
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
}), Uf = jt("dislike", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wl = jt("down", !1, function(e) {
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
}), Hf = jt("edit", !0, function(e) {
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
}), Wf = jt("like", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gf = jt("link", !0, function(e) {
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
}), Kf = jt("message", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gl = jt("refresh", !0, function(e) {
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
}), Kl = jt("robot", !0, function(e) {
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
}), qf = jt("search", !0, function(e) {
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
}), Yf = jt("send", !0, function(e) {
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
}), lu = jt("setting-two", !1, function(e) {
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
}), Zf = jt("square", !1, function(e) {
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
}), ME = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => vS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: lu,
    component: yf(() => Promise.resolve().then(() => NE))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Xf(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ql = typeof window < "u", Vr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Qf = (e, t, n) => Jf({ l: e, k: t, s: n }), Jf = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ct = (e) => typeof e == "number" && isFinite(e), ep = (e) => qs(e) === "[object Date]", Ta = (e) => qs(e) === "[object RegExp]", Fa = (e) => $e(e) && Object.keys(e).length === 0, Pt = Object.assign, tp = Object.create, He = (e = null) => tp(e);
let Yl;
const ga = () => Yl || (Yl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : He());
function Zl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Xl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function np(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${Xl(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${Xl(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const rp = Object.prototype.hasOwnProperty;
function bn(e, t) {
  return rp.call(e, t);
}
const ut = Array.isArray, at = (e) => typeof e == "function", ce = (e) => typeof e == "string", ct = (e) => typeof e == "boolean", Me = (e) => e !== null && typeof e == "object", op = (e) => Me(e) && at(e.then) && at(e.catch), iu = Object.prototype.toString, qs = (e) => iu.call(e), $e = (e) => qs(e) === "[object Object]", ap = (e) => e == null ? "" : ut(e) || $e(e) && e.toString === iu ? JSON.stringify(e, null, 2) : String(e);
function Ys(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const oa = (e) => !Me(e) || ut(e);
function va(e, t) {
  if (oa(e) || oa(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Me(r[a]) && !Me(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : He()), oa(o[a]) || oa(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function sp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ws(e, t, n) {
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
}, lp = 17;
function za(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function ip(e) {
  throw e;
}
const An = " ", cp = "\r", Bt = `
`, up = "\u2028", dp = "\u2029";
function fp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === cp && t[O + 1] === Bt, i = (O) => t[O] === Bt, l = (O) => t[O] === dp, u = (O) => t[O] === up, d = (O) => s(O) || i(O) || l(O) || u(O), p = () => n, m = () => r, y = () => o, h = () => a, g = (O) => s(O) || l(O) || u(O) ? Bt : t[O], I = () => g(n), f = () => g(n + a);
  function E() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function N() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function A() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(O = 0) {
    a = O;
  }
  function S() {
    const O = n + a;
    for (; O !== n; )
      E();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: y,
    peekOffset: h,
    charAt: g,
    currentChar: I,
    currentPeek: f,
    next: E,
    peek: N,
    reset: A,
    resetPeek: _,
    skipToPeek: S
  };
}
const Gn = void 0, pp = ".", Ql = "'", mp = "tokenizer";
function hp(e, t = {}) {
  const n = t.location !== !1, r = fp(e), o = () => r.index(), a = () => sp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function p(k, C, B, ...ee) {
    const Le = u();
    if (C.column += B, C.offset += B, d) {
      const ge = n ? ws(Le.startLoc, C) : null, T = za(k, ge, {
        domain: mp,
        args: ee
      });
      d(T);
    }
  }
  function m(k, C, B) {
    k.endLoc = a(), k.currentType = C;
    const ee = { type: C };
    return n && (ee.loc = ws(k.startLoc, k.endLoc)), B != null && (ee.value = B), ee;
  }
  const y = (k) => m(
    k,
    13
    /* TokenTypes.EOF */
  );
  function h(k, C) {
    return k.currentChar() === C ? (k.next(), C) : (p(Fe.EXPECTED_TOKEN, a(), 0, C), "");
  }
  function g(k) {
    let C = "";
    for (; k.currentPeek() === An || k.currentPeek() === Bt; )
      C += k.currentPeek(), k.peek();
    return C;
  }
  function I(k) {
    const C = g(k);
    return k.skipToPeek(), C;
  }
  function f(k) {
    if (k === Gn)
      return !1;
    const C = k.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C === 95;
  }
  function E(k) {
    if (k === Gn)
      return !1;
    const C = k.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function N(k, C) {
    const { currentType: B } = C;
    if (B !== 2)
      return !1;
    g(k);
    const ee = f(k.currentPeek());
    return k.resetPeek(), ee;
  }
  function A(k, C) {
    const { currentType: B } = C;
    if (B !== 2)
      return !1;
    g(k);
    const ee = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), Le = E(ee);
    return k.resetPeek(), Le;
  }
  function _(k, C) {
    const { currentType: B } = C;
    if (B !== 2)
      return !1;
    g(k);
    const ee = k.currentPeek() === Ql;
    return k.resetPeek(), ee;
  }
  function S(k, C) {
    const { currentType: B } = C;
    if (B !== 7)
      return !1;
    g(k);
    const ee = k.currentPeek() === ".";
    return k.resetPeek(), ee;
  }
  function O(k, C) {
    const { currentType: B } = C;
    if (B !== 8)
      return !1;
    g(k);
    const ee = f(k.currentPeek());
    return k.resetPeek(), ee;
  }
  function q(k, C) {
    const { currentType: B } = C;
    if (!(B === 7 || B === 11))
      return !1;
    g(k);
    const ee = k.currentPeek() === ":";
    return k.resetPeek(), ee;
  }
  function Z(k, C) {
    const { currentType: B } = C;
    if (B !== 9)
      return !1;
    const ee = () => {
      const ge = k.currentPeek();
      return ge === "{" ? f(k.peek()) : ge === "@" || ge === "|" || ge === ":" || ge === "." || ge === An || !ge ? !1 : ge === Bt ? (k.peek(), ee()) : fe(k, !1);
    }, Le = ee();
    return k.resetPeek(), Le;
  }
  function ae(k) {
    g(k);
    const C = k.currentPeek() === "|";
    return k.resetPeek(), C;
  }
  function fe(k, C = !0) {
    const B = (Le = !1, ge = "") => {
      const T = k.currentPeek();
      return T === "{" || T === "@" || !T ? Le : T === "|" ? !(ge === An || ge === Bt) : T === An ? (k.peek(), B(!0, An)) : T === Bt ? (k.peek(), B(!0, Bt)) : !0;
    }, ee = B();
    return C && k.resetPeek(), ee;
  }
  function se(k, C) {
    const B = k.currentChar();
    return B === Gn ? Gn : C(B) ? (k.next(), B) : null;
  }
  function _e(k) {
    const C = k.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36;
  }
  function be(k) {
    return se(k, _e);
  }
  function j(k) {
    const C = k.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36 || // $
    C === 45;
  }
  function X(k) {
    return se(k, j);
  }
  function U(k) {
    const C = k.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function pe(k) {
    return se(k, U);
  }
  function K(k) {
    const C = k.charCodeAt(0);
    return C >= 48 && C <= 57 || // 0-9
    C >= 65 && C <= 70 || // A-F
    C >= 97 && C <= 102;
  }
  function G(k) {
    return se(k, K);
  }
  function De(k) {
    let C = "", B = "";
    for (; C = pe(k); )
      B += C;
    return B;
  }
  function me(k) {
    let C = "";
    for (; ; ) {
      const B = k.currentChar();
      if (B === "{" || B === "}" || B === "@" || B === "|" || !B)
        break;
      if (B === An || B === Bt)
        if (fe(k))
          C += B, k.next();
        else {
          if (ae(k))
            break;
          C += B, k.next();
        }
      else
        C += B, k.next();
    }
    return C;
  }
  function he(k) {
    I(k);
    let C = "", B = "";
    for (; C = X(k); )
      B += C;
    const ee = k.currentChar();
    if (ee && ee !== "}" && ee !== Gn && ee !== An && ee !== Bt && ee !== "　") {
      const Le = _t(k);
      return p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, B + Le), B + Le;
    }
    return k.currentChar() === Gn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), B;
  }
  function ye(k) {
    I(k);
    let C = "";
    return k.currentChar() === "-" ? (k.next(), C += `-${De(k)}`) : C += De(k), k.currentChar() === Gn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), C;
  }
  function Q(k) {
    return k !== Ql && k !== Bt;
  }
  function Ae(k) {
    I(k), h(k, "'");
    let C = "", B = "";
    for (; C = se(k, Q); )
      C === "\\" ? B += Ge(k) : B += C;
    const ee = k.currentChar();
    return ee === Bt || ee === Gn ? (p(Fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ee === Bt && (k.next(), h(k, "'")), B) : (h(k, "'"), B);
  }
  function Ge(k) {
    const C = k.currentChar();
    switch (C) {
      case "\\":
      case "'":
        return k.next(), `\\${C}`;
      case "u":
        return ve(k, C, 4);
      case "U":
        return ve(k, C, 6);
      default:
        return p(Fe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, C), "";
    }
  }
  function ve(k, C, B) {
    h(k, C);
    let ee = "";
    for (let Le = 0; Le < B; Le++) {
      const ge = G(k);
      if (!ge) {
        p(Fe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${C}${ee}${k.currentChar()}`);
        break;
      }
      ee += ge;
    }
    return `\\${C}${ee}`;
  }
  function qe(k) {
    return k !== "{" && k !== "}" && k !== An && k !== Bt;
  }
  function _t(k) {
    I(k);
    let C = "", B = "";
    for (; C = se(k, qe); )
      B += C;
    return B;
  }
  function Je(k) {
    let C = "", B = "";
    for (; C = be(k); )
      B += C;
    return B;
  }
  function ft(k) {
    const C = (B) => {
      const ee = k.currentChar();
      return ee === "{" || ee === "@" || ee === "|" || ee === "(" || ee === ")" || !ee || ee === An ? B : (B += ee, k.next(), C(B));
    };
    return C("");
  }
  function pt(k) {
    I(k);
    const C = h(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return I(k), C;
  }
  function St(k, C) {
    let B = null;
    switch (k.currentChar()) {
      case "{":
        return C.braceNest >= 1 && p(Fe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), k.next(), B = m(
          C,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), I(k), C.braceNest++, B;
      case "}":
        return C.braceNest > 0 && C.currentType === 2 && p(Fe.EMPTY_PLACEHOLDER, a(), 0), k.next(), B = m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), C.braceNest--, C.braceNest > 0 && I(k), C.inLinked && C.braceNest === 0 && (C.inLinked = !1), B;
      case "@":
        return C.braceNest > 0 && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), B = Et(k, C) || y(C), C.braceNest = 0, B;
      default: {
        let Le = !0, ge = !0, T = !0;
        if (ae(k))
          return C.braceNest > 0 && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), B = m(C, 1, pt(k)), C.braceNest = 0, C.inLinked = !1, B;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6))
          return p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), C.braceNest = 0, nt(k, C);
        if (Le = N(k, C))
          return B = m(C, 4, he(k)), I(k), B;
        if (ge = A(k, C))
          return B = m(C, 5, ye(k)), I(k), B;
        if (T = _(k, C))
          return B = m(C, 6, Ae(k)), I(k), B;
        if (!Le && !ge && !T)
          return B = m(C, 12, _t(k)), p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, B.value), I(k), B;
        break;
      }
    }
    return B;
  }
  function Et(k, C) {
    const { currentType: B } = C;
    let ee = null;
    const Le = k.currentChar();
    switch ((B === 7 || B === 8 || B === 11 || B === 9) && (Le === Bt || Le === An) && p(Fe.INVALID_LINKED_FORMAT, a(), 0), Le) {
      case "@":
        return k.next(), ee = m(
          C,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), C.inLinked = !0, ee;
      case ".":
        return I(k), k.next(), m(
          C,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return I(k), k.next(), m(
          C,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ae(k) ? (ee = m(C, 1, pt(k)), C.braceNest = 0, C.inLinked = !1, ee) : S(k, C) || q(k, C) ? (I(k), Et(k, C)) : O(k, C) ? (I(k), m(C, 11, Je(k))) : Z(k, C) ? (I(k), Le === "{" ? St(k, C) || ee : m(C, 10, ft(k))) : (B === 7 && p(Fe.INVALID_LINKED_FORMAT, a(), 0), C.braceNest = 0, C.inLinked = !1, nt(k, C));
    }
  }
  function nt(k, C) {
    let B = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (C.braceNest > 0)
      return St(k, C) || y(C);
    if (C.inLinked)
      return Et(k, C) || y(C);
    switch (k.currentChar()) {
      case "{":
        return St(k, C) || y(C);
      case "}":
        return p(Fe.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Et(k, C) || y(C);
      default: {
        if (ae(k))
          return B = m(C, 1, pt(k)), C.braceNest = 0, C.inLinked = !1, B;
        if (fe(k))
          return m(C, 0, me(k));
        break;
      }
    }
    return B;
  }
  function wt() {
    const { currentType: k, offset: C, startLoc: B, endLoc: ee } = l;
    return l.lastType = k, l.lastOffset = C, l.lastStartLoc = B, l.lastEndLoc = ee, l.offset = o(), l.startLoc = a(), r.currentChar() === Gn ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : nt(r, l);
  }
  return {
    nextToken: wt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const gp = "parser", vp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function bp(e, t, n) {
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
function yp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, E, N, A, ..._) {
    const S = f.currentPosition();
    if (S.offset += A, S.column += A, n) {
      const O = t ? ws(N, S) : null, q = za(E, O, {
        domain: gp,
        args: _
      });
      n(q);
    }
  }
  function o(f, E, N) {
    const A = { type: f };
    return t && (A.start = E, A.end = E, A.loc = { start: N, end: N }), A;
  }
  function a(f, E, N, A) {
    t && (f.end = E, f.loc && (f.loc.end = N));
  }
  function s(f, E) {
    const N = f.context(), A = o(3, N.offset, N.startLoc);
    return A.value = E, a(A, f.currentOffset(), f.currentPosition()), A;
  }
  function i(f, E) {
    const N = f.context(), { lastOffset: A, lastStartLoc: _ } = N, S = o(5, A, _);
    return S.index = parseInt(E, 10), f.nextToken(), a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function l(f, E) {
    const N = f.context(), { lastOffset: A, lastStartLoc: _ } = N, S = o(4, A, _);
    return S.key = E, f.nextToken(), a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function u(f, E) {
    const N = f.context(), { lastOffset: A, lastStartLoc: _ } = N, S = o(9, A, _);
    return S.value = E.replace(vp, bp), f.nextToken(), a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function d(f) {
    const E = f.nextToken(), N = f.context(), { lastOffset: A, lastStartLoc: _ } = N, S = o(8, A, _);
    return E.type !== 11 ? (r(f, Fe.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), S.value = "", a(S, A, _), {
      nextConsumeToken: E,
      node: S
    }) : (E.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, Cn(E)), S.value = E.value || "", a(S, f.currentOffset(), f.currentPosition()), {
      node: S
    });
  }
  function p(f, E) {
    const N = f.context(), A = o(7, N.offset, N.startLoc);
    return A.value = E, a(A, f.currentOffset(), f.currentPosition()), A;
  }
  function m(f) {
    const E = f.context(), N = o(6, E.offset, E.startLoc);
    let A = f.nextToken();
    if (A.type === 8) {
      const _ = d(f);
      N.modifier = _.node, A = _.nextConsumeToken || f.nextToken();
    }
    switch (A.type !== 9 && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(A)), A = f.nextToken(), A.type === 2 && (A = f.nextToken()), A.type) {
      case 10:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(A)), N.key = p(f, A.value || "");
        break;
      case 4:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(A)), N.key = l(f, A.value || "");
        break;
      case 5:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(A)), N.key = i(f, A.value || "");
        break;
      case 6:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(A)), N.key = u(f, A.value || "");
        break;
      default: {
        r(f, Fe.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const _ = f.context(), S = o(7, _.offset, _.startLoc);
        return S.value = "", a(S, _.offset, _.startLoc), N.key = S, a(N, _.offset, _.startLoc), {
          nextConsumeToken: A,
          node: N
        };
      }
    }
    return a(N, f.currentOffset(), f.currentPosition()), {
      node: N
    };
  }
  function y(f) {
    const E = f.context(), N = E.currentType === 1 ? f.currentOffset() : E.offset, A = E.currentType === 1 ? E.endLoc : E.startLoc, _ = o(2, N, A);
    _.items = [];
    let S = null;
    do {
      const Z = S || f.nextToken();
      switch (S = null, Z.type) {
        case 0:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(Z)), _.items.push(s(f, Z.value || ""));
          break;
        case 5:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(Z)), _.items.push(i(f, Z.value || ""));
          break;
        case 4:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(Z)), _.items.push(l(f, Z.value || ""));
          break;
        case 6:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Cn(Z)), _.items.push(u(f, Z.value || ""));
          break;
        case 7: {
          const ae = m(f);
          _.items.push(ae.node), S = ae.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const O = E.currentType === 1 ? E.lastOffset : f.currentOffset(), q = E.currentType === 1 ? E.lastEndLoc : f.currentPosition();
    return a(_, O, q), _;
  }
  function h(f, E, N, A) {
    const _ = f.context();
    let S = A.items.length === 0;
    const O = o(1, E, N);
    O.cases = [], O.cases.push(A);
    do {
      const q = y(f);
      S || (S = q.items.length === 0), O.cases.push(q);
    } while (_.currentType !== 13);
    return S && r(f, Fe.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function g(f) {
    const E = f.context(), { offset: N, startLoc: A } = E, _ = y(f);
    return E.currentType === 13 ? _ : h(f, N, A, _);
  }
  function I(f) {
    const E = hp(f, Pt({}, e)), N = E.context(), A = o(0, N.offset, N.startLoc);
    return t && A.loc && (A.loc.source = f), A.body = g(E), e.onCacheKey && (A.cacheKey = e.onCacheKey(f)), N.currentType !== 13 && r(E, Fe.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, f[N.offset] || ""), a(A, E.currentOffset(), E.currentPosition()), A;
  }
  return { parse: I };
}
function Cn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function _p(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Jl(e, t) {
  for (let n = 0; n < e.length; n++)
    Zs(e[n], t);
}
function Zs(e, t) {
  switch (e.type) {
    case 1:
      Jl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Jl(e.items, t);
      break;
    case 6: {
      Zs(e.key, t), t.helper(
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
function wp(e, t = {}) {
  const n = _p(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Zs(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function kp(e) {
  const t = e.body;
  return t.type === 2 ? ei(t) : t.cases.forEach((n) => ei(n)), e;
}
function ei(e) {
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
      e.static = Ys(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function no(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      no(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        no(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        no(n[r]);
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
      no(t.key), t.k = t.key, delete t.key, t.modifier && (no(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Tp(e, t) {
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
  function l(g, I) {
    s.code += g;
  }
  function u(g, I = !0) {
    const f = I ? r : "";
    l(o ? f + "  ".repeat(g) : f);
  }
  function d(g = !0) {
    const I = ++s.indentLevel;
    g && u(I);
  }
  function p(g = !0) {
    const I = --s.indentLevel;
    g && u(I);
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
function Sp(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), lo(e, t.key), t.modifier ? (e.push(", "), lo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ep(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (lo(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Ap(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (lo(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Cp(e, t) {
  t.body ? lo(e, t.body) : e.push("null");
}
function lo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Cp(e, t);
      break;
    case 1:
      Ap(e, t);
      break;
    case 2:
      Ep(e, t);
      break;
    case 6:
      Sp(e, t);
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
const Ip = (e, t = {}) => {
  const n = ce(t.mode) ? t.mode : "normal", r = ce(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Tp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Ys(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), lo(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Lp(e, t = {}) {
  const n = Pt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = yp(n).parse(e);
  return r ? (a && kp(i), o && no(i), { ast: i, code: "" }) : (wp(i, n), Ip(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Op() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ga().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Pn(e) {
  return Me(e) && Xs(e) === 0 && (bn(e, "b") || bn(e, "body"));
}
const cu = ["b", "body"];
function xp(e) {
  return Er(e, cu);
}
const uu = ["c", "cases"];
function Rp(e) {
  return Er(e, uu, []);
}
const du = ["s", "static"];
function Np(e) {
  return Er(e, du);
}
const fu = ["i", "items"];
function Pp(e) {
  return Er(e, fu, []);
}
const pu = ["t", "type"];
function Xs(e) {
  return Er(e, pu);
}
const mu = ["v", "value"];
function aa(e, t) {
  const n = Er(e, mu);
  if (n != null)
    return n;
  throw jo(t);
}
const hu = ["m", "modifier"];
function $p(e) {
  return Er(e, hu);
}
const gu = ["k", "key"];
function Mp(e) {
  const t = Er(e, gu);
  if (t)
    return t;
  throw jo(
    6
    /* NodeTypes.Linked */
  );
}
function Er(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (bn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const vu = [
  ...cu,
  ...uu,
  ...du,
  ...fu,
  ...gu,
  ...hu,
  ...mu,
  ...pu
];
function jo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function as(e) {
  return (n) => Dp(n, e);
}
function Dp(e, t) {
  const n = xp(t);
  if (n == null)
    throw jo(
      0
      /* NodeTypes.Resource */
    );
  if (Xs(n) === 1) {
    const a = Rp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      ti(e, i)
    ], []));
  } else
    return ti(e, n);
}
function ti(e, t) {
  const n = Np(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Pp(t).reduce((o, a) => [...o, ks(e, a)], []);
    return e.normalize(r);
  }
}
function ks(e, t) {
  const n = Xs(t);
  switch (n) {
    case 3:
      return aa(t, n);
    case 9:
      return aa(t, n);
    case 4: {
      const r = t;
      if (bn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (bn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw jo(n);
    }
    case 5: {
      const r = t;
      if (bn(r, "i") && Ct(r.i))
        return e.interpolate(e.list(r.i));
      if (bn(r, "index") && Ct(r.index))
        return e.interpolate(e.list(r.index));
      throw jo(n);
    }
    case 6: {
      const r = t, o = $p(r), a = Mp(r);
      return e.linked(ks(e, a), o ? ks(e, o) : void 0, e.type);
    }
    case 7:
      return aa(t, n);
    case 8:
      return aa(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Fp = (e) => e;
let sa = He();
function zp(e, t = {}) {
  let n = !1;
  const r = t.onError || ip;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Lp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Bp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ce(e)) {
    ct(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Fp)(e), o = sa[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = zp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = as(a);
    return s ? i : sa[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = sa[n];
      return r || (sa[n] = as(e));
    } else
      return as(e);
  }
}
const Jn = {
  INVALID_ARGUMENT: lp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Vp = 24;
function er(e) {
  return za(e, null, void 0);
}
function Qs(e, t) {
  return t.locale != null ? ni(t.locale) : ni(e.locale);
}
let ss;
function ni(e) {
  if (ce(e))
    return e;
  if (at(e)) {
    if (e.resolvedOnce && ss != null)
      return ss;
    if (e.constructor.name === "Function") {
      const t = e();
      if (op(t))
        throw er(Jn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ss = t;
    } else
      throw er(Jn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw er(Jn.NOT_SUPPORT_LOCALE_TYPE);
}
function jp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ut(t) ? t : Me(t) ? Object.keys(t) : ce(t) ? [t] : [n]
  ])];
}
function bu(e, t, n) {
  const r = ce(n) ? n : Sa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; ut(s); )
      s = ri(a, s, t);
    const i = ut(t) || !$e(t) ? t : t.default ? t.default : null;
    s = ce(i) ? [i] : i, ut(s) && ri(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function ri(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ct(r); o++) {
    const a = t[o];
    ce(a) && (r = Up(e, t[o], n));
  }
  return r;
}
function Up(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Hp(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Hp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ut(n) || $e(n)) && n[o] && (r = n[o]);
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
const Wp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Gp(e) {
  return Wp.test(e);
}
function Kp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function qp(e) {
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
function Yp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Gp(t) ? Kp(t) : "*" + t;
}
function Zp(e) {
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
      if (o = 0, s === void 0 || (s = Yp(s), s === !1))
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
      if (l = qp(a), p = Ar[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = m[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const oi = /* @__PURE__ */ new Map();
function Xp(e, t) {
  return Me(e) ? e[t] : null;
}
function Qp(e, t) {
  if (!Me(e))
    return null;
  let n = oi.get(t);
  if (n || (n = Zp(t), n && oi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (vu.includes(s) && Pn(o))
      return null;
    const i = o[s];
    if (i === void 0 || at(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Jp = "11.2.2", Ba = -1, Sa = "en-US", ai = "", si = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function em() {
  return {
    upper: (e, t) => t === "text" && ce(e) ? e.toUpperCase() : t === "vnode" && Me(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ce(e) ? e.toLowerCase() : t === "vnode" && Me(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ce(e) ? si(e) : t === "vnode" && Me(e) && "__v_isVNode" in e ? si(e.children) : e
  };
}
let yu;
function tm(e) {
  yu = e;
}
let _u;
function nm(e) {
  _u = e;
}
let wu;
function rm(e) {
  wu = e;
}
let ku = null;
const li = (e) => {
  ku = e;
}, om = () => ku;
let ii = 0;
function am(e = {}) {
  const t = at(e.onWarn) ? e.onWarn : Xf, n = ce(e.version) ? e.version : Jp, r = ce(e.locale) || at(e.locale) ? e.locale : Sa, o = at(r) ? Sa : r, a = ut(e.fallbackLocale) || $e(e.fallbackLocale) || ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = $e(e.messages) ? e.messages : ls(o), i = $e(e.datetimeFormats) ? e.datetimeFormats : ls(o), l = $e(e.numberFormats) ? e.numberFormats : ls(o), u = Pt(He(), e.modifiers, em()), d = e.pluralRules || He(), p = at(e.missing) ? e.missing : null, m = ct(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, y = ct(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, I = at(e.postTranslation) ? e.postTranslation : null, f = $e(e.processor) ? e.processor : null, E = ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter, A = at(e.messageCompiler) ? e.messageCompiler : yu, _ = at(e.messageResolver) ? e.messageResolver : _u || Xp, S = at(e.localeFallbacker) ? e.localeFallbacker : wu || jp, O = Me(e.fallbackContext) ? e.fallbackContext : void 0, q = e, Z = Me(q.__datetimeFormatters) ? q.__datetimeFormatters : /* @__PURE__ */ new Map(), ae = Me(q.__numberFormatters) ? q.__numberFormatters : /* @__PURE__ */ new Map(), fe = Me(q.__meta) ? q.__meta : {};
  ii++;
  const se = {
    version: n,
    cid: ii,
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
    postTranslation: I,
    processor: f,
    warnHtmlMessage: E,
    escapeParameter: N,
    messageCompiler: A,
    messageResolver: _,
    localeFallbacker: S,
    fallbackContext: O,
    onWarn: t,
    __meta: fe
  };
  return se.datetimeFormats = i, se.numberFormats = l, se.__datetimeFormatters = Z, se.__numberFormatters = ae, se;
}
const ls = (e) => ({ [e]: He() });
function Js(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return ce(i) ? i : t;
  } else
    return t;
}
function Eo(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function sm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function lm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (sm(e, t[r]))
      return !0;
  return !1;
}
function ci(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, p] = Ts(...t), m = ct(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ct(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, h = Qs(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ce(l) || l === "")
    return new Intl.DateTimeFormat(h, p).format(u);
  let I = {}, f, E = null;
  const N = "datetime format";
  for (let S = 0; S < g.length && (f = g[S], I = n[f] || {}, E = I[l], !$e(E)); S++)
    Js(e, l, f, m, N);
  if (!$e(E) || !ce(f))
    return r ? Ba : l;
  let A = `${f}__${l}`;
  Fa(p) || (A = `${A}__${JSON.stringify(p)}`);
  let _ = i.get(A);
  return _ || (_ = new Intl.DateTimeFormat(f, Pt({}, E, p)), i.set(A, _)), y ? _.formatToParts(u) : _.format(u);
}
const Tu = [
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
function Ts(...e) {
  const [t, n, r, o] = e, a = He();
  let s = He(), i;
  if (ce(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw er(Jn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw er(Jn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ep(t)) {
    if (isNaN(t.getTime()))
      throw er(Jn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ct(t))
    i = t;
  else
    throw er(Jn.INVALID_ARGUMENT);
  return ce(n) ? a.key = n : $e(n) && Object.keys(n).forEach((l) => {
    Tu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ce(r) ? a.locale = r : $e(r) && (s = r), $e(o) && (s = o), [a.key || "", i, a, s];
}
function ui(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function di(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, p] = Ss(...t), m = ct(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ct(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, h = Qs(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ce(l) || l === "")
    return new Intl.NumberFormat(h, p).format(u);
  let I = {}, f, E = null;
  const N = "number format";
  for (let S = 0; S < g.length && (f = g[S], I = n[f] || {}, E = I[l], !$e(E)); S++)
    Js(e, l, f, m, N);
  if (!$e(E) || !ce(f))
    return r ? Ba : l;
  let A = `${f}__${l}`;
  Fa(p) || (A = `${A}__${JSON.stringify(p)}`);
  let _ = i.get(A);
  return _ || (_ = new Intl.NumberFormat(f, Pt({}, E, p)), i.set(A, _)), y ? _.formatToParts(u) : _.format(u);
}
const Su = [
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
function Ss(...e) {
  const [t, n, r, o] = e, a = He();
  let s = He();
  if (!Ct(t))
    throw er(Jn.INVALID_ARGUMENT);
  const i = t;
  return ce(n) ? a.key = n : $e(n) && Object.keys(n).forEach((l) => {
    Su.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ce(r) ? a.locale = r : $e(r) && (s = r), $e(o) && (s = o), [a.key || "", i, a, s];
}
function fi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const im = (e) => e, cm = (e) => "", um = "text", dm = (e) => e.length === 0 ? "" : Ys(e), fm = ap;
function pi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function pm(e) {
  const t = Ct(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ct(e.named.count) || Ct(e.named.n)) ? Ct(e.named.count) ? e.named.count : Ct(e.named.n) ? e.named.n : t : t;
}
function mm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function hm(e = {}) {
  const t = e.locale, n = pm(e), r = Me(e.pluralRules) && ce(t) && at(e.pluralRules[t]) ? e.pluralRules[t] : pi, o = Me(e.pluralRules) && ce(t) && at(e.pluralRules[t]) ? pi : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || He();
  Ct(e.pluralIndex) && mm(n, l);
  const u = (f) => l[f];
  function d(f, E) {
    const N = at(e.messages) ? e.messages(f, !!E) : Me(e.messages) ? e.messages[f] : !1;
    return N || (e.parent ? e.parent.message(f) : cm);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : im, m = $e(e.processor) && at(e.processor.normalize) ? e.processor.normalize : dm, y = $e(e.processor) && at(e.processor.interpolate) ? e.processor.interpolate : fm, h = $e(e.processor) && ce(e.processor.type) ? e.processor.type : um, I = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...E) => {
      const [N, A] = E;
      let _ = "text", S = "";
      E.length === 1 ? Me(N) ? (S = N.modifier || S, _ = N.type || _) : ce(N) && (S = N || S) : E.length === 2 && (ce(N) && (S = N || S), ce(A) && (_ = A || _));
      const O = d(f, !0)(I), q = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && ut(O) && S ? O[0] : O
      );
      return S ? p(S)(q, _) : q;
    },
    message: d,
    type: h,
    interpolate: y,
    normalize: m,
    values: Pt(He(), s, l)
  };
  return I;
}
const mi = () => "", nr = (e) => at(e);
function hi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Es(...t), d = ct(u.missingWarn) ? u.missingWarn : e.missingWarn, p = ct(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ct(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, h = ce(u.default) || ct(u.default) ? ct(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (ce(h) || at(h)), I = Qs(e, u);
  m && gm(u);
  let [f, E, N] = y ? [
    l,
    I,
    i[I] || He()
  ] : Eu(e, l, I, s, p, d), A = f, _ = l;
  if (!y && !(ce(A) || Pn(A) || nr(A)) && g && (A = h, _ = A), !y && (!(ce(A) || Pn(A) || nr(A)) || !ce(E)))
    return o ? Ba : l;
  let S = !1;
  const O = () => {
    S = !0;
  }, q = nr(A) ? A : Au(e, l, E, A, _, O);
  if (S)
    return A;
  const Z = ym(e, E, N, u), ae = hm(Z), fe = vm(e, q, ae);
  let se = r ? r(fe, l) : fe;
  return m && ce(se) && (se = np(se)), se;
}
function gm(e) {
  ut(e.list) ? e.list = e.list.map((t) => ce(t) ? Zl(t) : t) : Me(e.named) && Object.keys(e.named).forEach((t) => {
    ce(e.named[t]) && (e.named[t] = Zl(e.named[t]));
  });
}
function Eu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let p = He(), m, y = null;
  const h = "translate";
  for (let g = 0; g < d.length && (m = d[g], p = s[m] || He(), (y = l(p, t)) === null && (y = p[t]), !(ce(y) || Pn(y) || nr(y))); g++)
    if (!lm(m, d)) {
      const I = Js(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        h
      );
      I !== t && (y = I);
    }
  return [y, m, p];
}
function Au(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (nr(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, bm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function vm(e, t, n) {
  return t(n);
}
function Es(...e) {
  const [t, n, r] = e, o = He();
  if (!ce(t) && !Ct(t) && !nr(t) && !Pn(t))
    throw er(Jn.INVALID_ARGUMENT);
  const a = Ct(t) ? String(t) : (nr(t), t);
  return Ct(n) ? o.plural = n : ce(n) ? o.default = n : $e(n) && !Fa(n) ? o.named = n : ut(n) && (o.list = n), Ct(r) ? o.plural = r : ce(r) ? o.default = r : $e(r) && Pt(o, r), [a, o];
}
function bm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Qf(t, n, s)
  };
}
function ym(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, h) => {
      let g = s(n, y);
      if (g == null && (d || h)) {
        const [, , I] = Eu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          l,
          u
        );
        g = s(I, y);
      }
      if (ce(g) || Pn(g)) {
        let I = !1;
        const E = Au(e, y, t, g, y, () => {
          I = !0;
        });
        return I ? mi : E;
      } else return nr(g) ? g : mi;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Ct(r.plural) && (m.pluralIndex = r.plural), m;
}
Op();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _m = "11.2.2";
function wm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ga().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ga().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ga().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const io = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Vp,
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
function Uo(e, ...t) {
  return za(e, null, void 0);
}
const As = /* @__PURE__ */ Vr("__translateVNode"), Cs = /* @__PURE__ */ Vr("__datetimeParts"), Is = /* @__PURE__ */ Vr("__numberParts"), km = Vr("__setPluralRules"), Cu = /* @__PURE__ */ Vr("__injectWithOption"), Ls = /* @__PURE__ */ Vr("__dispose");
function Ho(e) {
  if (!Me(e) || Pn(e))
    return e;
  for (const t in e)
    if (bn(e, t))
      if (!t.includes("."))
        Me(e[t]) && Ho(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = He()), !Me(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Pn(o) ? vu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Pn(o)) {
          const s = o[n[r]];
          Me(s) && Ho(s);
        }
      }
  return e;
}
function Iu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = $e(n) ? n : ut(r) ? He() : { [e]: He() };
  if (ut(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || He(), va(u, s[l])) : va(u, s);
    } else
      ce(i) && va(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      bn(s, i) && Ho(s[i]);
  return s;
}
function Tm(e) {
  return e.type;
}
function Sm(e, t, n) {
  let r = Me(t.messages) ? t.messages : He();
  "__i18nGlobal" in n && (r = Iu(e.locale.value, {
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
function gi(e) {
  return M(ou, null, e, 0);
}
function Lu() {
  return "currentInstance" in rs ? rs["currentInstance"] : rs.getCurrentInstance();
}
const vi = () => [], Em = () => !1;
let bi = 0;
function yi(e) {
  return (t, n, r, o) => e(n, r, Lu() || void 0, o);
}
function Am(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = ql ? W : kr;
  let s = ct(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ce(e.locale) ? e.locale : Sa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ce(e.fallbackLocale) || ut(e.fallbackLocale) || $e(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Iu(i.value, e)), d = a($e(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a($e(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : ct(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : ct(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : ct(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, I = at(e.missing) ? e.missing : null, f = at(e.missing) ? yi(e.missing) : null, E = at(e.postTranslation) ? e.postTranslation : null, N = t ? t.warnHtmlMessage : ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, A = !!e.escapeParameter;
  const _ = t ? t.modifiers : $e(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && li(null);
    const T = {
      version: _m,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: _,
      pluralRules: S,
      missing: f === null ? void 0 : f,
      missingWarn: m,
      fallbackWarn: y,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: N,
      escapeParameter: A,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = d.value, T.numberFormats = p.value, T.__datetimeFormatters = $e(O) ? O.__datetimeFormatters : void 0, T.__numberFormatters = $e(O) ? O.__numberFormatters : void 0;
    const F = am(T);
    return r && li(F), F;
  })(), Eo(O, i.value, l.value);
  function Z() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      p.value
    ];
  }
  const ae = R({
    get: () => i.value,
    set: (T) => {
      O.locale = T, i.value = T;
    }
  }), fe = R({
    get: () => l.value,
    set: (T) => {
      O.fallbackLocale = T, l.value = T, Eo(O, i.value, T);
    }
  }), se = R(() => u.value), _e = /* @__PURE__ */ R(() => d.value), be = /* @__PURE__ */ R(() => p.value);
  function j() {
    return at(E) ? E : null;
  }
  function X(T) {
    E = T, O.postTranslation = T;
  }
  function U() {
    return I;
  }
  function pe(T) {
    T !== null && (f = yi(T)), I = T, O.missing = f;
  }
  const K = (T, F, we, Re, Ye, Mt) => {
    Z();
    let Ze;
    try {
      r || (O.fallbackContext = t ? om() : void 0), Ze = T(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (we !== "translate exists" && // for not `te` (e.g `t`)
    Ct(Ze) && Ze === Ba || we === "translate exists" && !Ze) {
      const [an, Ir] = F();
      return t && h ? Re(t) : Ye(an);
    } else {
      if (Mt(Ze))
        return Ze;
      throw Uo(io.UNEXPECTED_RETURN_TYPE);
    }
  };
  function G(...T) {
    return K((F) => Reflect.apply(hi, null, [F, ...T]), () => Es(...T), "translate", (F) => Reflect.apply(F.t, F, [...T]), (F) => F, (F) => ce(F));
  }
  function De(...T) {
    const [F, we, Re] = T;
    if (Re && !Me(Re))
      throw Uo(io.INVALID_ARGUMENT);
    return G(F, we, Pt({ resolvedMessage: !0 }, Re || {}));
  }
  function me(...T) {
    return K((F) => Reflect.apply(ci, null, [F, ...T]), () => Ts(...T), "datetime format", (F) => Reflect.apply(F.d, F, [...T]), () => ai, (F) => ce(F) || ut(F));
  }
  function he(...T) {
    return K((F) => Reflect.apply(di, null, [F, ...T]), () => Ss(...T), "number format", (F) => Reflect.apply(F.n, F, [...T]), () => ai, (F) => ce(F) || ut(F));
  }
  function ye(T) {
    return T.map((F) => ce(F) || Ct(F) || ct(F) ? gi(String(F)) : F);
  }
  const Ae = {
    normalize: ye,
    interpolate: (T) => T,
    type: "vnode"
  };
  function Ge(...T) {
    return K((F) => {
      let we;
      const Re = F;
      try {
        Re.processor = Ae, we = Reflect.apply(hi, null, [Re, ...T]);
      } finally {
        Re.processor = null;
      }
      return we;
    }, () => Es(...T), "translate", (F) => F[As](...T), (F) => [gi(F)], (F) => ut(F));
  }
  function ve(...T) {
    return K((F) => Reflect.apply(di, null, [F, ...T]), () => Ss(...T), "number format", (F) => F[Is](...T), vi, (F) => ce(F) || ut(F));
  }
  function qe(...T) {
    return K((F) => Reflect.apply(ci, null, [F, ...T]), () => Ts(...T), "datetime format", (F) => F[Cs](...T), vi, (F) => ce(F) || ut(F));
  }
  function _t(T) {
    S = T, O.pluralRules = S;
  }
  function Je(T, F) {
    return K(() => {
      if (!T)
        return !1;
      const we = ce(F) ? F : i.value, Re = St(we), Ye = O.messageResolver(Re, T);
      return Pn(Ye) || nr(Ye) || ce(Ye);
    }, () => [T], "translate exists", (we) => Reflect.apply(we.te, we, [T, F]), Em, (we) => ct(we));
  }
  function ft(T) {
    let F = null;
    const we = bu(O, l.value, i.value);
    for (let Re = 0; Re < we.length; Re++) {
      const Ye = u.value[we[Re]] || {}, Mt = O.messageResolver(Ye, T);
      if (Mt != null) {
        F = Mt;
        break;
      }
    }
    return F;
  }
  function pt(T) {
    const F = ft(T);
    return F ?? (t ? t.tm(T) || {} : {});
  }
  function St(T) {
    return u.value[T] || {};
  }
  function Et(T, F) {
    if (o) {
      const we = { [T]: F };
      for (const Re in we)
        bn(we, Re) && Ho(we[Re]);
      F = we[T];
    }
    u.value[T] = F, O.messages = u.value;
  }
  function nt(T, F) {
    u.value[T] = u.value[T] || {};
    const we = { [T]: F };
    if (o)
      for (const Re in we)
        bn(we, Re) && Ho(we[Re]);
    F = we[T], va(F, u.value[T]), O.messages = u.value;
  }
  function wt(T) {
    return d.value[T] || {};
  }
  function k(T, F) {
    d.value[T] = F, O.datetimeFormats = d.value, ui(O, T, F);
  }
  function C(T, F) {
    d.value[T] = Pt(d.value[T] || {}, F), O.datetimeFormats = d.value, ui(O, T, F);
  }
  function B(T) {
    return p.value[T] || {};
  }
  function ee(T, F) {
    p.value[T] = F, O.numberFormats = p.value, fi(O, T, F);
  }
  function Le(T, F) {
    p.value[T] = Pt(p.value[T] || {}, F), O.numberFormats = p.value, fi(O, T, F);
  }
  bi++, t && ql && (Ee(t.locale, (T) => {
    s && (i.value = T, O.locale = T, Eo(O, i.value, l.value));
  }), Ee(t.fallbackLocale, (T) => {
    s && (l.value = T, O.fallbackLocale = T, Eo(O, i.value, l.value));
  }));
  const ge = {
    id: bi,
    locale: ae,
    fallbackLocale: fe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(T) {
      s = T, T && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Eo(O, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: se,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(T) {
      m = T, O.missingWarn = m;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(T) {
      y = T, O.fallbackWarn = y;
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
      return N;
    },
    set warnHtmlMessage(T) {
      N = T, O.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return A;
    },
    set escapeParameter(T) {
      A = T, O.escapeParameter = T;
    },
    t: G,
    getLocaleMessage: St,
    setLocaleMessage: Et,
    mergeLocaleMessage: nt,
    getPostTranslationHandler: j,
    setPostTranslationHandler: X,
    getMissingHandler: U,
    setMissingHandler: pe,
    [km]: _t
  };
  return ge.datetimeFormats = _e, ge.numberFormats = be, ge.rt = De, ge.te = Je, ge.tm = pt, ge.d = me, ge.n = he, ge.getDateTimeFormat = wt, ge.setDateTimeFormat = k, ge.mergeDateTimeFormat = C, ge.getNumberFormat = B, ge.setNumberFormat = ee, ge.mergeNumberFormat = Le, ge[Cu] = n, ge[As] = Ge, ge[Cs] = qe, ge[Is] = ve, ge;
}
const el = {
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
function Cm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === kt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, He());
}
function Ou() {
  return kt;
}
Pt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ct(e) || !isNaN(e)
  }
}, el);
function Im(e) {
  return ut(e) && !ce(e[0]);
}
function xu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = He();
    e.locale && (s.locale = e.locale), ce(e.format) ? s.key = e.format : Me(e.format) && (ce(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, y) => n.includes(y) ? Pt(He(), m, { [y]: e.format[y] }) : m, He()));
    const l = r(e.value, s, i);
    let u = [s.key];
    ut(l) ? u = l.map((m, y) => {
      const h = o[m.type], g = h ? h({ [m.type]: m.value, index: y, parts: l }) : [m.value];
      return Im(g) && (g[0].key = `${m.type}-${y}`), g;
    }) : ce(l) && (u = [l]);
    const d = Pt(He(), a), p = ce(e.tag) || Me(e.tag) ? e.tag : Ou();
    return ru(p, d, u);
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
}, el);
const Lm = /* @__PURE__ */ Vr("global-vue-i18n");
function Zo(e = {}) {
  const t = Lu();
  if (t == null)
    throw Uo(io.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Uo(io.NOT_INSTALLED);
  const n = Om(t), r = Rm(n), o = Tm(t), a = xm(e, o);
  if (a === "global")
    return Sm(r, e, o), r;
  if (a === "parent") {
    let l = Nm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Pt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Am(l), s.__composerExtend && (i[Ls] = s.__composerExtend(i)), $m(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function Om(e) {
  const t = Ve(e.isCE ? Lm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Uo(e.isCE ? io.NOT_INSTALLED_WITH_PROVIDE : io.UNEXPECTED_ERROR);
  return t;
}
function xm(e, t) {
  return Fa(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Rm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Nm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Pm(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Cu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function Pm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function $m(e, t, n) {
  dt(() => {
  }, t), Da(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Ls];
    o && (o(), delete r[Ls]);
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
}, el);
wm();
tm(Bp);
nm(Qp);
rm(bu);
function tl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var jr = tl();
function Ru(e) {
  jr = e;
}
var $o = { exec: () => null };
function Pe(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Kt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var Mm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Kt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Dm = /^(?:[ \t]*(?:\n|$))+/, Fm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, zm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Xo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Bm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, nl = /(?:[*+-]|\d{1,9}[.)])/, Nu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Pu = Pe(Nu).replace(/bull/g, nl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Vm = Pe(Nu).replace(/bull/g, nl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), rl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, jm = /^[^\n]+/, ol = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Um = Pe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ol).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Hm = Pe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, nl).getRegex(), Va = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", al = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Wm = Pe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", al).replace("tag", Va).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $u = Pe(rl).replace("hr", Xo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Va).getRegex(), Gm = Pe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", $u).getRegex(), sl = { blockquote: Gm, code: Fm, def: Um, fences: zm, heading: Bm, hr: Xo, html: Wm, lheading: Pu, list: Hm, newline: Dm, paragraph: $u, table: $o, text: jm }, _i = Pe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Xo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Va).getRegex(), Km = { ...sl, lheading: Vm, table: _i, paragraph: Pe(rl).replace("hr", Xo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", _i).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Va).getRegex() }, qm = { ...sl, html: Pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", al).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: $o, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Pe(rl).replace("hr", Xo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Pu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ym = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Zm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Mu = /^( {2,}|\\)\n(?!\s*$)/, Xm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ja = /[\p{P}\p{S}]/u, ll = /[\s\p{P}\p{S}]/u, Du = /[^\s\p{P}\p{S}]/u, Qm = Pe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ll).getRegex(), Fu = /(?!~)[\p{P}\p{S}]/u, Jm = /(?!~)[\s\p{P}\p{S}]/u, eh = /(?:[^\s\p{P}\p{S}]|~)/u, th = Pe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Mm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), zu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, nh = Pe(zu, "u").replace(/punct/g, ja).getRegex(), rh = Pe(zu, "u").replace(/punct/g, Fu).getRegex(), Bu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", oh = Pe(Bu, "gu").replace(/notPunctSpace/g, Du).replace(/punctSpace/g, ll).replace(/punct/g, ja).getRegex(), ah = Pe(Bu, "gu").replace(/notPunctSpace/g, eh).replace(/punctSpace/g, Jm).replace(/punct/g, Fu).getRegex(), sh = Pe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Du).replace(/punctSpace/g, ll).replace(/punct/g, ja).getRegex(), lh = Pe(/\\(punct)/, "gu").replace(/punct/g, ja).getRegex(), ih = Pe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), ch = Pe(al).replace("(?:-->|$)", "-->").getRegex(), uh = Pe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ch).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ea = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, dh = Pe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ea).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Vu = Pe(/^!?\[(label)\]\[(ref)\]/).replace("label", Ea).replace("ref", ol).getRegex(), ju = Pe(/^!?\[(ref)\](?:\[\])?/).replace("ref", ol).getRegex(), fh = Pe("reflink|nolink(?!\\()", "g").replace("reflink", Vu).replace("nolink", ju).getRegex(), wi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, il = { _backpedal: $o, anyPunctuation: lh, autolink: ih, blockSkip: th, br: Mu, code: Zm, del: $o, emStrongLDelim: nh, emStrongRDelimAst: oh, emStrongRDelimUnd: sh, escape: Ym, link: dh, nolink: ju, punctuation: Qm, reflink: Vu, reflinkSearch: fh, tag: uh, text: Xm, url: $o }, ph = { ...il, link: Pe(/^!?\[(label)\]\((.*?)\)/).replace("label", Ea).getRegex(), reflink: Pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ea).getRegex() }, Os = { ...il, emStrongRDelimAst: ah, emStrongLDelim: rh, url: Pe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", wi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Pe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", wi).getRegex() }, mh = { ...Os, br: Pe(Mu).replace("{2,}", "*").getRegex(), text: Pe(Os.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, la = { normal: sl, gfm: Km, pedantic: qm }, Ao = { normal: il, gfm: Os, breaks: mh, pedantic: ph }, hh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ki = (e) => hh[e];
function Kn(e, t) {
  if (t) {
    if (Kt.escapeTest.test(e)) return e.replace(Kt.escapeReplace, ki);
  } else if (Kt.escapeTestNoEncode.test(e)) return e.replace(Kt.escapeReplaceNoEncode, ki);
  return e;
}
function Ti(e) {
  try {
    e = encodeURI(e).replace(Kt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Si(e, t) {
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
function Co(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function gh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Ei(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function vh(e, t, n) {
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
var Aa = class {
  constructor(e) {
    Ue(this, "options");
    Ue(this, "rules");
    Ue(this, "lexer");
    this.options = e || jr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Co(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = vh(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = Co(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Co(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = Co(t[0], `
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
          let g = this.rules.other.nextBulletRegex(h), I = this.rules.other.hrRegex(h), f = this.rules.other.fencesBeginRegex(h), E = this.rules.other.headingBeginRegex(h), N = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let A = e.split(`
`, 1)[0], _;
            if (m = A, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), _ = m) : _ = m.replace(this.rules.other.tabCharGlobal, "    "), f.test(m) || E.test(m) || N.test(m) || g.test(m) || I.test(m)) break;
            if (_.search(this.rules.other.nonSpaceChar) >= h || !m.trim()) d += `
` + _.slice(h);
            else {
              if (y || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(p) || E.test(p) || I.test(p)) break;
              d += `
` + m;
            }
            !y && !m.trim() && (y = !0), u += A + `
`, e = e.substring(A.length + 1), p = _.slice(h);
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
    let n = Si(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(Si(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = Co(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = gh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), Ei(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return Ei(n, o, n[0], this.lexer, this.rules);
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
}, hn = class xs {
  constructor(t) {
    Ue(this, "tokens");
    Ue(this, "options");
    Ue(this, "state");
    Ue(this, "inlineQueue");
    Ue(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || jr, this.options.tokenizer = this.options.tokenizer || new Aa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Kt, block: la.normal, inline: Ao.normal };
    this.options.pedantic ? (n.block = la.pedantic, n.inline = Ao.pedantic) : this.options.gfm && (n.block = la.gfm, this.options.breaks ? n.inline = Ao.breaks : n.inline = Ao.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: la, inline: Ao };
  }
  static lex(t, n) {
    return new xs(n).lex(t);
  }
  static lexInline(t, n) {
    return new xs(n).inlineTokens(t);
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
}, Ca = class {
  constructor(t) {
    Ue(this, "options");
    Ue(this, "parser");
    this.options = t || jr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Kt.notSpaceStart)?.[0], a = t.replace(Kt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Kn(o) + '">' + (r ? a : Kn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Kn(a, !0)) + `</code></pre>
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
    return `<code>${Kn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Ti(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Kn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Ti(t);
    if (a === null) return Kn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Kn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Kn(t.text);
  }
}, cl = class {
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
}, gn = class Rs {
  constructor(t) {
    Ue(this, "options");
    Ue(this, "renderer");
    Ue(this, "textRenderer");
    this.options = t || jr, this.options.renderer = this.options.renderer || new Ca(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new cl();
  }
  static parse(t, n) {
    return new Rs(n).parse(t);
  }
  static parseInline(t, n) {
    return new Rs(n).parseInline(t);
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
}, ha, No = (ha = class {
  constructor(e) {
    Ue(this, "options");
    Ue(this, "block");
    this.options = e || jr;
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
}, Ue(ha, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ue(ha, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), ha), bh = class {
  constructor(...t) {
    Ue(this, "defaults", tl());
    Ue(this, "options", this.setOptions);
    Ue(this, "parse", this.parseMarkdown(!0));
    Ue(this, "parseInline", this.parseMarkdown(!1));
    Ue(this, "Parser", gn);
    Ue(this, "Renderer", Ca);
    Ue(this, "TextRenderer", cl);
    Ue(this, "Lexer", hn);
    Ue(this, "Tokenizer", Aa);
    Ue(this, "Hooks", No);
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
        let a = this.defaults.renderer || new Ca(this.defaults);
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
        let a = this.defaults.tokenizer || new Aa(this.defaults);
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
        let a = this.defaults.hooks || new No();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          No.passThroughHooks.has(s) ? a[i] = (d) => {
            if (this.defaults.async && No.passThroughHooksRespectAsync.has(s)) return (async () => {
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
        let o = "<p>An error occurred:</p><pre>" + Kn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Fr = new bh();
function Be(e, t) {
  return Fr.parse(e, t);
}
Be.options = Be.setOptions = function(e) {
  return Fr.setOptions(e), Be.defaults = Fr.defaults, Ru(Be.defaults), Be;
};
Be.getDefaults = tl;
Be.defaults = jr;
Be.use = function(...e) {
  return Fr.use(...e), Be.defaults = Fr.defaults, Ru(Be.defaults), Be;
};
Be.walkTokens = function(e, t) {
  return Fr.walkTokens(e, t);
};
Be.parseInline = Fr.parseInline;
Be.Parser = gn;
Be.parser = gn.parse;
Be.Renderer = Ca;
Be.TextRenderer = cl;
Be.Lexer = hn;
Be.lexer = hn.lex;
Be.Tokenizer = Aa;
Be.Hooks = No;
Be.parse = Be;
Be.options;
Be.setOptions;
Be.use;
Be.walkTokens;
Be.parseInline;
gn.parse;
hn.lex;
const yh = ["disabled"], _h = {
  key: 0,
  class: "custom-button__loading"
}, wh = /* @__PURE__ */ le({
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
    return (n, r) => (P(), H("button", {
      class: Y([
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
      e.loading ? (P(), H("div", _h, r[1] || (r[1] = [
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
      ]))) : re("v-if", !0),
      Te(n.$slots, "default", {}, void 0, !0)
    ], 10, yh));
  }
}), ul = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, qn = /* @__PURE__ */ ul(wh, [["__scopeId", "data-v-9497085f"]]), Uu = Symbol(), ba = "el", kh = "is-", $r = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Hu = Symbol("namespaceContextKey"), dl = (e) => {
  const t = e || (qt() ? Ve(Hu, W(ba)) : W(ba));
  return R(() => c(t) || ba);
}, bt = (e, t) => {
  const n = dl(t);
  return {
    namespace: n,
    b: (g = "") => $r(n.value, e, g, "", ""),
    e: (g) => g ? $r(n.value, e, "", g, "") : "",
    m: (g) => g ? $r(n.value, e, "", "", g) : "",
    be: (g, I) => g && I ? $r(n.value, e, g, I, "") : "",
    em: (g, I) => g && I ? $r(n.value, e, "", g, I) : "",
    bm: (g, I) => g && I ? $r(n.value, e, g, "", I) : "",
    bem: (g, I, f) => g && I && f ? $r(n.value, e, g, I, f) : "",
    is: (g, ...I) => {
      const f = I.length >= 1 ? I[0] : !0;
      return g && f ? `${kh}${g}` : "";
    },
    cssVar: (g) => {
      const I = {};
      for (const f in g)
        g[f] && (I[`--${n.value}-${f}`] = g[f]);
      return I;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const I = {};
      for (const f in g)
        g[f] && (I[`--${n.value}-${e}-${f}`] = g[f]);
      return I;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Wo = () => {
}, Th = Object.prototype.hasOwnProperty, Ai = (e, t) => Th.call(e, t), xn = Array.isArray, st = (e) => typeof e == "function", Vt = (e) => typeof e == "string", rn = (e) => e !== null && typeof e == "object", Ci = (e) => (rn(e) || st(e)) && st(e.then) && st(e.catch), Sh = Object.prototype.toString, Eh = (e) => Sh.call(e), Ah = (e) => Eh(e) === "[object Object]";
var Wu = typeof global == "object" && global && global.Object === Object && global, Ch = typeof self == "object" && self && self.Object === Object && self, Vn = Wu || Ch || Function("return this")(), Fn = Vn.Symbol, Gu = Object.prototype, Ih = Gu.hasOwnProperty, Lh = Gu.toString, Io = Fn ? Fn.toStringTag : void 0;
function Oh(e) {
  var t = Ih.call(e, Io), n = e[Io];
  try {
    e[Io] = void 0;
    var r = !0;
  } catch {
  }
  var o = Lh.call(e);
  return r && (t ? e[Io] = n : delete e[Io]), o;
}
var xh = Object.prototype, Rh = xh.toString;
function Nh(e) {
  return Rh.call(e);
}
var Ph = "[object Null]", $h = "[object Undefined]", Ii = Fn ? Fn.toStringTag : void 0;
function yo(e) {
  return e == null ? e === void 0 ? $h : Ph : Ii && Ii in Object(e) ? Oh(e) : Nh(e);
}
function co(e) {
  return e != null && typeof e == "object";
}
var Mh = "[object Symbol]";
function Ua(e) {
  return typeof e == "symbol" || co(e) && yo(e) == Mh;
}
function Dh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var kn = Array.isArray, Li = Fn ? Fn.prototype : void 0, Oi = Li ? Li.toString : void 0;
function Ku(e) {
  if (typeof e == "string")
    return e;
  if (kn(e))
    return Dh(e, Ku) + "";
  if (Ua(e))
    return Oi ? Oi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Fh = /\s/;
function zh(e) {
  for (var t = e.length; t-- && Fh.test(e.charAt(t)); )
    ;
  return t;
}
var Bh = /^\s+/;
function Vh(e) {
  return e && e.slice(0, zh(e) + 1).replace(Bh, "");
}
function Sr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var xi = NaN, jh = /^[-+]0x[0-9a-f]+$/i, Uh = /^0b[01]+$/i, Hh = /^0o[0-7]+$/i, Wh = parseInt;
function Ri(e) {
  if (typeof e == "number")
    return e;
  if (Ua(e))
    return xi;
  if (Sr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Sr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Vh(e);
  var n = Uh.test(e);
  return n || Hh.test(e) ? Wh(e.slice(2), n ? 2 : 8) : jh.test(e) ? xi : +e;
}
function qu(e) {
  return e;
}
var Gh = "[object AsyncFunction]", Kh = "[object Function]", qh = "[object GeneratorFunction]", Yh = "[object Proxy]";
function Yu(e) {
  if (!Sr(e))
    return !1;
  var t = yo(e);
  return t == Kh || t == qh || t == Gh || t == Yh;
}
var is = Vn["__core-js_shared__"], Ni = function() {
  var e = /[^.]+$/.exec(is && is.keys && is.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zh(e) {
  return !!Ni && Ni in e;
}
var Xh = Function.prototype, Qh = Xh.toString;
function Ur(e) {
  if (e != null) {
    try {
      return Qh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jh = /[\\^$.*+?()[\]{}|]/g, eg = /^\[object .+?Constructor\]$/, tg = Function.prototype, ng = Object.prototype, rg = tg.toString, og = ng.hasOwnProperty, ag = RegExp(
  "^" + rg.call(og).replace(Jh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sg(e) {
  if (!Sr(e) || Zh(e))
    return !1;
  var t = Yu(e) ? ag : eg;
  return t.test(Ur(e));
}
function lg(e, t) {
  return e?.[t];
}
function Hr(e, t) {
  var n = lg(e, t);
  return sg(n) ? n : void 0;
}
var Ns = Hr(Vn, "WeakMap");
function ig(e, t, n) {
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
var cg = 800, ug = 16, dg = Date.now;
function fg(e) {
  var t = 0, n = 0;
  return function() {
    var r = dg(), o = ug - (r - n);
    if (n = r, o > 0) {
      if (++t >= cg)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function pg(e) {
  return function() {
    return e;
  };
}
var Ia = function() {
  try {
    var e = Hr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), mg = Ia ? function(e, t) {
  return Ia(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: pg(t),
    writable: !0
  });
} : qu, hg = fg(mg);
function gg(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var vg = 9007199254740991, bg = /^(?:0|[1-9]\d*)$/;
function fl(e, t) {
  var n = typeof e;
  return t = t ?? vg, !!t && (n == "number" || n != "symbol" && bg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function yg(e, t, n) {
  t == "__proto__" && Ia ? Ia(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function pl(e, t) {
  return e === t || e !== e && t !== t;
}
var _g = Object.prototype, wg = _g.hasOwnProperty;
function kg(e, t, n) {
  var r = e[t];
  (!(wg.call(e, t) && pl(r, n)) || n === void 0 && !(t in e)) && yg(e, t, n);
}
var Pi = Math.max;
function Tg(e, t, n) {
  return t = Pi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Pi(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), ig(e, this, i);
  };
}
var Sg = 9007199254740991;
function ml(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Sg;
}
function Eg(e) {
  return e != null && ml(e.length) && !Yu(e);
}
var Ag = Object.prototype;
function Cg(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ag;
  return e === n;
}
function Ig(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Lg = "[object Arguments]";
function $i(e) {
  return co(e) && yo(e) == Lg;
}
var Zu = Object.prototype, Og = Zu.hasOwnProperty, xg = Zu.propertyIsEnumerable, hl = $i(/* @__PURE__ */ function() {
  return arguments;
}()) ? $i : function(e) {
  return co(e) && Og.call(e, "callee") && !xg.call(e, "callee");
};
function Rg() {
  return !1;
}
var Xu = typeof exports == "object" && exports && !exports.nodeType && exports, Mi = Xu && typeof module == "object" && module && !module.nodeType && module, Ng = Mi && Mi.exports === Xu, Di = Ng ? Vn.Buffer : void 0, Pg = Di ? Di.isBuffer : void 0, Ps = Pg || Rg, $g = "[object Arguments]", Mg = "[object Array]", Dg = "[object Boolean]", Fg = "[object Date]", zg = "[object Error]", Bg = "[object Function]", Vg = "[object Map]", jg = "[object Number]", Ug = "[object Object]", Hg = "[object RegExp]", Wg = "[object Set]", Gg = "[object String]", Kg = "[object WeakMap]", qg = "[object ArrayBuffer]", Yg = "[object DataView]", Zg = "[object Float32Array]", Xg = "[object Float64Array]", Qg = "[object Int8Array]", Jg = "[object Int16Array]", ev = "[object Int32Array]", tv = "[object Uint8Array]", nv = "[object Uint8ClampedArray]", rv = "[object Uint16Array]", ov = "[object Uint32Array]", Xe = {};
Xe[Zg] = Xe[Xg] = Xe[Qg] = Xe[Jg] = Xe[ev] = Xe[tv] = Xe[nv] = Xe[rv] = Xe[ov] = !0;
Xe[$g] = Xe[Mg] = Xe[qg] = Xe[Dg] = Xe[Yg] = Xe[Fg] = Xe[zg] = Xe[Bg] = Xe[Vg] = Xe[jg] = Xe[Ug] = Xe[Hg] = Xe[Wg] = Xe[Gg] = Xe[Kg] = !1;
function av(e) {
  return co(e) && ml(e.length) && !!Xe[yo(e)];
}
function sv(e) {
  return function(t) {
    return e(t);
  };
}
var Qu = typeof exports == "object" && exports && !exports.nodeType && exports, Mo = Qu && typeof module == "object" && module && !module.nodeType && module, lv = Mo && Mo.exports === Qu, cs = lv && Wu.process, Fi = function() {
  try {
    var e = Mo && Mo.require && Mo.require("util").types;
    return e || cs && cs.binding && cs.binding("util");
  } catch {
  }
}(), zi = Fi && Fi.isTypedArray, Ju = zi ? sv(zi) : av, iv = Object.prototype, cv = iv.hasOwnProperty;
function uv(e, t) {
  var n = kn(e), r = !n && hl(e), o = !n && !r && Ps(e), a = !n && !r && !o && Ju(e), s = n || r || o || a, i = s ? Ig(e.length, String) : [], l = i.length;
  for (var u in e)
    cv.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    fl(u, l))) && i.push(u);
  return i;
}
function dv(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var fv = dv(Object.keys, Object), pv = Object.prototype, mv = pv.hasOwnProperty;
function hv(e) {
  if (!Cg(e))
    return fv(e);
  var t = [];
  for (var n in Object(e))
    mv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ed(e) {
  return Eg(e) ? uv(e) : hv(e);
}
var gv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vv = /^\w*$/;
function gl(e, t) {
  if (kn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ua(e) ? !0 : vv.test(e) || !gv.test(e) || t != null && e in Object(t);
}
var Go = Hr(Object, "create");
function bv() {
  this.__data__ = Go ? Go(null) : {}, this.size = 0;
}
function yv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _v = "__lodash_hash_undefined__", wv = Object.prototype, kv = wv.hasOwnProperty;
function Tv(e) {
  var t = this.__data__;
  if (Go) {
    var n = t[e];
    return n === _v ? void 0 : n;
  }
  return kv.call(t, e) ? t[e] : void 0;
}
var Sv = Object.prototype, Ev = Sv.hasOwnProperty;
function Av(e) {
  var t = this.__data__;
  return Go ? t[e] !== void 0 : Ev.call(t, e);
}
var Cv = "__lodash_hash_undefined__";
function Iv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Go && t === void 0 ? Cv : t, this;
}
function zr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
zr.prototype.clear = bv;
zr.prototype.delete = yv;
zr.prototype.get = Tv;
zr.prototype.has = Av;
zr.prototype.set = Iv;
function Lv() {
  this.__data__ = [], this.size = 0;
}
function Ha(e, t) {
  for (var n = e.length; n--; )
    if (pl(e[n][0], t))
      return n;
  return -1;
}
var Ov = Array.prototype, xv = Ov.splice;
function Rv(e) {
  var t = this.__data__, n = Ha(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : xv.call(t, n, 1), --this.size, !0;
}
function Nv(e) {
  var t = this.__data__, n = Ha(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Pv(e) {
  return Ha(this.__data__, e) > -1;
}
function $v(e, t) {
  var n = this.__data__, r = Ha(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function cr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
cr.prototype.clear = Lv;
cr.prototype.delete = Rv;
cr.prototype.get = Nv;
cr.prototype.has = Pv;
cr.prototype.set = $v;
var Ko = Hr(Vn, "Map");
function Mv() {
  this.size = 0, this.__data__ = {
    hash: new zr(),
    map: new (Ko || cr)(),
    string: new zr()
  };
}
function Dv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Wa(e, t) {
  var n = e.__data__;
  return Dv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Fv(e) {
  var t = Wa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function zv(e) {
  return Wa(this, e).get(e);
}
function Bv(e) {
  return Wa(this, e).has(e);
}
function Vv(e, t) {
  var n = Wa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ur.prototype.clear = Mv;
ur.prototype.delete = Fv;
ur.prototype.get = zv;
ur.prototype.has = Bv;
ur.prototype.set = Vv;
var jv = "Expected a function";
function vl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(jv);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (vl.Cache || ur)(), n;
}
vl.Cache = ur;
var Uv = 500;
function Hv(e) {
  var t = vl(e, function(r) {
    return n.size === Uv && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Wv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gv = /\\(\\)?/g, Kv = Hv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wv, function(n, r, o, a) {
    t.push(o ? a.replace(Gv, "$1") : r || n);
  }), t;
});
function qv(e) {
  return e == null ? "" : Ku(e);
}
function Ga(e, t) {
  return kn(e) ? e : gl(e, t) ? [e] : Kv(qv(e));
}
function Qo(e) {
  if (typeof e == "string" || Ua(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function bl(e, t) {
  t = Ga(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Qo(t[n++])];
  return n && n == r ? e : void 0;
}
function wr(e, t, n) {
  var r = e == null ? void 0 : bl(e, t);
  return r === void 0 ? n : r;
}
function td(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Bi = Fn ? Fn.isConcatSpreadable : void 0;
function Yv(e) {
  return kn(e) || hl(e) || !!(Bi && e && e[Bi]);
}
function Zv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Yv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? td(o, i) : o[o.length] = i;
  }
  return o;
}
function Xv(e) {
  var t = e == null ? 0 : e.length;
  return t ? Zv(e) : [];
}
function Qv(e) {
  return hg(Tg(e, void 0, Xv), e + "");
}
function _r() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return kn(e) ? e : [e];
}
function Jv() {
  this.__data__ = new cr(), this.size = 0;
}
function e0(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function t0(e) {
  return this.__data__.get(e);
}
function n0(e) {
  return this.__data__.has(e);
}
var r0 = 200;
function o0(e, t) {
  var n = this.__data__;
  if (n instanceof cr) {
    var r = n.__data__;
    if (!Ko || r.length < r0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ur(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function rr(e) {
  var t = this.__data__ = new cr(e);
  this.size = t.size;
}
rr.prototype.clear = Jv;
rr.prototype.delete = e0;
rr.prototype.get = t0;
rr.prototype.has = n0;
rr.prototype.set = o0;
function a0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function s0() {
  return [];
}
var l0 = Object.prototype, i0 = l0.propertyIsEnumerable, Vi = Object.getOwnPropertySymbols, c0 = Vi ? function(e) {
  return e == null ? [] : (e = Object(e), a0(Vi(e), function(t) {
    return i0.call(e, t);
  }));
} : s0;
function u0(e, t, n) {
  var r = t(e);
  return kn(e) ? r : td(r, n(e));
}
function ji(e) {
  return u0(e, ed, c0);
}
var $s = Hr(Vn, "DataView"), Ms = Hr(Vn, "Promise"), Ds = Hr(Vn, "Set"), Ui = "[object Map]", d0 = "[object Object]", Hi = "[object Promise]", Wi = "[object Set]", Gi = "[object WeakMap]", Ki = "[object DataView]", f0 = Ur($s), p0 = Ur(Ko), m0 = Ur(Ms), h0 = Ur(Ds), g0 = Ur(Ns), yr = yo;
($s && yr(new $s(new ArrayBuffer(1))) != Ki || Ko && yr(new Ko()) != Ui || Ms && yr(Ms.resolve()) != Hi || Ds && yr(new Ds()) != Wi || Ns && yr(new Ns()) != Gi) && (yr = function(e) {
  var t = yo(e), n = t == d0 ? e.constructor : void 0, r = n ? Ur(n) : "";
  if (r)
    switch (r) {
      case f0:
        return Ki;
      case p0:
        return Ui;
      case m0:
        return Hi;
      case h0:
        return Wi;
      case g0:
        return Gi;
    }
  return t;
});
var qi = Vn.Uint8Array, v0 = "__lodash_hash_undefined__";
function b0(e) {
  return this.__data__.set(e, v0), this;
}
function y0(e) {
  return this.__data__.has(e);
}
function La(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ur(); ++t < n; )
    this.add(e[t]);
}
La.prototype.add = La.prototype.push = b0;
La.prototype.has = y0;
function _0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function w0(e, t) {
  return e.has(t);
}
var k0 = 1, T0 = 2;
function nd(e, t, n, r, o, a) {
  var s = n & k0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, m = !0, y = n & T0 ? new La() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var h = e[p], g = t[p];
    if (r)
      var I = s ? r(g, h, p, t, e, a) : r(h, g, p, e, t, a);
    if (I !== void 0) {
      if (I)
        continue;
      m = !1;
      break;
    }
    if (y) {
      if (!_0(t, function(f, E) {
        if (!w0(y, E) && (h === f || o(h, f, n, r, a)))
          return y.push(E);
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
function S0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function E0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var A0 = 1, C0 = 2, I0 = "[object Boolean]", L0 = "[object Date]", O0 = "[object Error]", x0 = "[object Map]", R0 = "[object Number]", N0 = "[object RegExp]", P0 = "[object Set]", $0 = "[object String]", M0 = "[object Symbol]", D0 = "[object ArrayBuffer]", F0 = "[object DataView]", Yi = Fn ? Fn.prototype : void 0, us = Yi ? Yi.valueOf : void 0;
function z0(e, t, n, r, o, a, s) {
  switch (n) {
    case F0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case D0:
      return !(e.byteLength != t.byteLength || !a(new qi(e), new qi(t)));
    case I0:
    case L0:
    case R0:
      return pl(+e, +t);
    case O0:
      return e.name == t.name && e.message == t.message;
    case N0:
    case $0:
      return e == t + "";
    case x0:
      var i = S0;
    case P0:
      var l = r & A0;
      if (i || (i = E0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= C0, s.set(e, t);
      var d = nd(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case M0:
      if (us)
        return us.call(e) == us.call(t);
  }
  return !1;
}
var B0 = 1, V0 = Object.prototype, j0 = V0.hasOwnProperty;
function U0(e, t, n, r, o, a) {
  var s = n & B0, i = ji(e), l = i.length, u = ji(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : j0.call(t, m)))
      return !1;
  }
  var y = a.get(e), h = a.get(t);
  if (y && h)
    return y == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var I = s; ++p < l; ) {
    m = i[p];
    var f = e[m], E = t[m];
    if (r)
      var N = s ? r(E, f, m, t, e, a) : r(f, E, m, e, t, a);
    if (!(N === void 0 ? f === E || o(f, E, n, r, a) : N)) {
      g = !1;
      break;
    }
    I || (I = m == "constructor");
  }
  if (g && !I) {
    var A = e.constructor, _ = t.constructor;
    A != _ && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof _ == "function" && _ instanceof _) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var H0 = 1, Zi = "[object Arguments]", Xi = "[object Array]", ia = "[object Object]", W0 = Object.prototype, Qi = W0.hasOwnProperty;
function G0(e, t, n, r, o, a) {
  var s = kn(e), i = kn(t), l = s ? Xi : yr(e), u = i ? Xi : yr(t);
  l = l == Zi ? ia : l, u = u == Zi ? ia : u;
  var d = l == ia, p = u == ia, m = l == u;
  if (m && Ps(e)) {
    if (!Ps(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new rr()), s || Ju(e) ? nd(e, t, n, r, o, a) : z0(e, t, l, n, r, o, a);
  if (!(n & H0)) {
    var y = d && Qi.call(e, "__wrapped__"), h = p && Qi.call(t, "__wrapped__");
    if (y || h) {
      var g = y ? e.value() : e, I = h ? t.value() : t;
      return a || (a = new rr()), o(g, I, n, r, a);
    }
  }
  return m ? (a || (a = new rr()), U0(e, t, n, r, o, a)) : !1;
}
function Ka(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !co(e) && !co(t) ? e !== e && t !== t : G0(e, t, n, r, Ka, o);
}
var K0 = 1, q0 = 2;
function Y0(e, t, n, r) {
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
      var d = new rr(), p;
      if (!(p === void 0 ? Ka(u, l, K0 | q0, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function rd(e) {
  return e === e && !Sr(e);
}
function Z0(e) {
  for (var t = ed(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, rd(o)];
  }
  return t;
}
function od(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function X0(e) {
  var t = Z0(e);
  return t.length == 1 && t[0][2] ? od(t[0][0], t[0][1]) : function(n) {
    return n === e || Y0(n, e, t);
  };
}
function Q0(e, t) {
  return e != null && t in Object(e);
}
function J0(e, t, n) {
  t = Ga(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Qo(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && ml(o) && fl(s, o) && (kn(e) || hl(e)));
}
function ad(e, t) {
  return e != null && J0(e, t, Q0);
}
var eb = 1, tb = 2;
function nb(e, t) {
  return gl(e) && rd(t) ? od(Qo(e), t) : function(n) {
    var r = wr(n, e);
    return r === void 0 && r === t ? ad(n, e) : Ka(t, r, eb | tb);
  };
}
function rb(e) {
  return function(t) {
    return t?.[e];
  };
}
function ob(e) {
  return function(t) {
    return bl(t, e);
  };
}
function ab(e) {
  return gl(e) ? rb(Qo(e)) : ob(e);
}
function sb(e) {
  return typeof e == "function" ? e : e == null ? qu : typeof e == "object" ? kn(e) ? nb(e[0], e[1]) : X0(e) : ab(e);
}
var ds = function() {
  return Vn.Date.now();
}, lb = "Expected a function", ib = Math.max, cb = Math.min;
function ub(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(lb);
  t = Ri(t) || 0, Sr(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? ib(Ri(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function y(S) {
    var O = r, q = o;
    return r = o = void 0, u = S, s = e.apply(q, O), s;
  }
  function h(S) {
    return u = S, i = setTimeout(f, t), d ? y(S) : s;
  }
  function g(S) {
    var O = S - l, q = S - u, Z = t - O;
    return p ? cb(Z, a - q) : Z;
  }
  function I(S) {
    var O = S - l, q = S - u;
    return l === void 0 || O >= t || O < 0 || p && q >= a;
  }
  function f() {
    var S = ds();
    if (I(S))
      return E(S);
    i = setTimeout(f, g(S));
  }
  function E(S) {
    return i = void 0, m && r ? y(S) : (r = o = void 0, s);
  }
  function N() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function A() {
    return i === void 0 ? s : E(ds());
  }
  function _() {
    var S = ds(), O = I(S);
    if (r = arguments, o = this, l = S, O) {
      if (i === void 0)
        return h(l);
      if (p)
        return clearTimeout(i), i = setTimeout(f, t), y(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return _.cancel = N, _.flush = A, _;
}
function db(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return gg(e, sb(t), o);
}
function Oa(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Do(e, t) {
  return Ka(e, t);
}
function or(e) {
  return e == null;
}
function fb(e) {
  return e === void 0;
}
function pb(e, t, n, r) {
  if (!Sr(e))
    return e;
  t = Ga(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Qo(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = Sr(d) ? d : fl(t[o + 1]) ? [] : {});
    }
    kg(i, l, u), i = i[l];
  }
  return e;
}
function mb(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = bl(e, s);
    n(i, s) && pb(a, Ga(s, e), i);
  }
  return a;
}
function hb(e, t) {
  return mb(e, t, function(n, r) {
    return ad(e, r);
  });
}
var gb = Qv(function(e, t) {
  return e == null ? {} : hb(e, t);
});
const Rn = (e) => e === void 0, Tr = (e) => typeof e == "boolean", ze = (e) => typeof e == "number", _n = (e) => typeof Element > "u" ? !1 : e instanceof Element, vb = (e) => Vt(e) ? !Number.isNaN(Number(e)) : !1;
var bb = Object.defineProperty, yb = Object.defineProperties, _b = Object.getOwnPropertyDescriptors, Ji = Object.getOwnPropertySymbols, wb = Object.prototype.hasOwnProperty, kb = Object.prototype.propertyIsEnumerable, ec = (e, t, n) => t in e ? bb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tb = (e, t) => {
  for (var n in t || (t = {}))
    wb.call(t, n) && ec(e, n, t[n]);
  if (Ji)
    for (var n of Ji(t))
      kb.call(t, n) && ec(e, n, t[n]);
  return e;
}, Sb = (e, t) => yb(e, _b(t));
function Eb(e, t) {
  var n;
  const r = kr();
  return au(() => {
    r.value = e();
  }, Sb(Tb({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Gs(r);
}
var tc;
const vt = typeof window < "u", Ab = (e) => typeof e == "string", sd = () => {
}, Fs = vt && ((tc = window?.navigator) == null ? void 0 : tc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function yl(e) {
  return typeof e == "function" ? e() : c(e);
}
function Cb(e) {
  return e;
}
function Jo(e) {
  return _f() ? (wf(e), !0) : !1;
}
function Ib(e, t = !0) {
  qt() ? dt(e) : t ? e() : it(e);
}
function ld(e, t, n = {}) {
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
    }, yl(t));
  }
  return r && (o.value = !0, vt && l()), Jo(i), {
    isPending: Gs(o),
    start: l,
    stop: i
  };
}
function tr(e) {
  var t;
  const n = yl(e);
  return (t = n?.$el) != null ? t : n;
}
const qa = vt ? window : void 0;
function wn(...e) {
  let t, n, r, o;
  if (Ab(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = qa) : [t, n, r, o] = e, !t)
    return sd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, p, m, y) => (d.addEventListener(p, m, y), () => d.removeEventListener(p, m, y)), l = Ee(() => [tr(t), yl(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((y) => i(d, m, y, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Jo(u), u;
}
let nc = !1;
function Lb(e, t, n = {}) {
  const { window: r = qa, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Fs && !nc && (nc = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", sd)));
  let i = !0;
  const l = (m) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((h) => h === m.target || m.composedPath().includes(h));
    {
      const h = tr(y);
      return h && (m.target === h || m.composedPath().includes(h));
    }
  }), d = [
    wn(r, "click", (m) => {
      const y = tr(e);
      if (!(!y || y === m.target || m.composedPath().includes(y))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    wn(r, "pointerdown", (m) => {
      const y = tr(e);
      y && (i = !m.composedPath().includes(y) && !l(m));
    }, { passive: !0 }),
    s && wn(r, "blur", (m) => {
      var y;
      const h = tr(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function id(e, t = !1) {
  const n = W(), r = () => n.value = !!e();
  return r(), Ib(r, t), n;
}
const rc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, oc = "__vueuse_ssr_handlers__";
rc[oc] = rc[oc] || {};
var ac = Object.getOwnPropertySymbols, Ob = Object.prototype.hasOwnProperty, xb = Object.prototype.propertyIsEnumerable, Rb = (e, t) => {
  var n = {};
  for (var r in e)
    Ob.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ac)
    for (var r of ac(e))
      t.indexOf(r) < 0 && xb.call(e, r) && (n[r] = e[r]);
  return n;
};
function On(e, t, n = {}) {
  const r = n, { window: o = qa } = r, a = Rb(r, ["window"]);
  let s;
  const i = id(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ee(() => tr(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return Jo(d), {
    isSupported: i,
    stop: d
  };
}
var sc = Object.getOwnPropertySymbols, Nb = Object.prototype.hasOwnProperty, Pb = Object.prototype.propertyIsEnumerable, $b = (e, t) => {
  var n = {};
  for (var r in e)
    Nb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && sc)
    for (var r of sc(e))
      t.indexOf(r) < 0 && Pb.call(e, r) && (n[r] = e[r]);
  return n;
};
function Mb(e, t, n = {}) {
  const r = n, { window: o = qa } = r, a = $b(r, ["window"]);
  let s;
  const i = id(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ee(() => tr(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return Jo(d), {
    isSupported: i,
    stop: d
  };
}
var lc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(lc || (lc = {}));
var Db = Object.defineProperty, ic = Object.getOwnPropertySymbols, Fb = Object.prototype.hasOwnProperty, zb = Object.prototype.propertyIsEnumerable, cc = (e, t, n) => t in e ? Db(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Bb = (e, t) => {
  for (var n in t || (t = {}))
    Fb.call(t, n) && cc(e, n, t[n]);
  if (ic)
    for (var n of ic(t))
      zb.call(t, n) && cc(e, n, t[n]);
  return e;
};
const Vb = {
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
Bb({
  linear: Cb
}, Vb);
class jb extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function _l(e, t) {
  throw new jb(`[${e}] ${t}`);
}
const uc = {
  current: 0
}, dc = W(0), cd = 2e3, fc = Symbol("elZIndexContextKey"), ud = Symbol("zIndexContextKey"), dd = (e) => {
  const t = qt() ? Ve(fc, uc) : uc, n = e || (qt() ? Ve(ud, void 0) : void 0), r = R(() => {
    const s = c(n);
    return ze(s) ? s : cd;
  }), o = R(() => r.value + dc.value), a = () => (t.current++, dc.value = t.current, o.value);
  return !vt && Ve(fc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Ub = {
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
const Hb = (e) => (t, n) => Wb(t, n, c(e)), Wb = (e, t, n) => wr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Gb = (e) => {
  const t = R(() => c(e).name), n = ao(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: Hb(e)
  };
}, fd = Symbol("localeContextKey"), wl = (e) => {
  const t = e || Ve(fd, W());
  return Gb(R(() => t.value || Ub));
}, pd = "__epPropKey", ke = (e) => e, Kb = (e) => rn(e) && !!e[pd], Ya = (e, t) => {
  if (!rn(e) || Kb(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), Ai(e, "default") && p.push(o), d || (d = p.includes(u))), s && (d || (d = s(u))), !d && p.length > 0) {
        const m = [...new Set(p)].map((y) => JSON.stringify(y)).join(", ");
        kf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [pd]: !0
  };
  return Ai(e, "default") && (l.default = o), l;
}, Qe = (e) => Oa(Object.entries(e).map(([t, n]) => [
  t,
  Ya(n, t)
])), kl = ["", "default", "small", "large"], Za = Ya({
  type: String,
  values: kl,
  required: !1
}), md = Symbol("size"), qb = () => {
  const e = Ve(md, {});
  return R(() => c(e.size) || "");
}, hd = Symbol("emptyValuesContextKey"), Yb = ["", void 0, null], Zb = void 0, gd = Qe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => st(e) ? !e() : !e
  }
}), Xb = (e, t) => {
  const n = qt() ? Ve(hd, W({})) : W({}), r = R(() => e.emptyValues || n.value.emptyValues || Yb), o = R(() => st(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : st(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Zb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, pc = (e) => Object.keys(e), xa = W();
function vd(e, t = void 0) {
  return qt() ? Ve(Uu, xa) : xa;
}
function bd(e, t) {
  const n = vd(), r = bt(e, R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || ba;
  })), o = wl(R(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = dd(R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || cd;
  })), s = R(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return yd(R(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const yd = (e, t, n = !1) => {
  var r;
  const o = !!qt(), a = o ? vd() : void 0, s = (r = void 0) != null ? r : o ? Dn : void 0;
  if (!s)
    return;
  const i = R(() => {
    const l = c(e);
    return a?.value ? Qb(a.value, l) : l;
  });
  return s(Uu, i), s(fd, R(() => i.value.locale)), s(Hu, R(() => i.value.namespace)), s(ud, R(() => i.value.zIndex)), s(md, {
    size: R(() => i.value.size || "")
  }), s(hd, R(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !xa.value) && (xa.value = i.value), i;
}, Qb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...pc(e), ...pc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, It = "update:modelValue", lr = "change", ar = "input";
var tt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function uo(e, t = "px") {
  if (!e)
    return "";
  if (ze(e) || vb(e))
    return `${e}${t}`;
  if (Vt(e))
    return e;
}
function Jb(e, t) {
  if (!vt)
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
}, _d = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), wd = (e) => (e.install = Wo, e), ey = Qe({
  size: {
    type: ke([Number, String])
  },
  color: {
    type: String
  }
}), ty = le({
  name: "ElIcon",
  inheritAttrs: !1
}), ny = /* @__PURE__ */ le({
  ...ty,
  props: ey,
  setup(e) {
    const t = e, n = bt("icon"), r = R(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Rn(o) ? void 0 : uo(o),
        "--color": a
      };
    });
    return (o, a) => (P(), H("i", so({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Te(o.$slots, "default")
    ], 16));
  }
});
var ry = /* @__PURE__ */ tt(ny, [["__file", "icon.vue"]]);
const gt = Tn(ry);
/*! Element Plus Icons Vue v2.3.1 */
var oy = /* @__PURE__ */ le({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), kd = oy, ay = /* @__PURE__ */ le({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), sy = ay, ly = /* @__PURE__ */ le({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (P(), H("svg", {
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
}), iy = ly, cy = /* @__PURE__ */ le({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), uy = cy, dy = /* @__PURE__ */ le({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (P(), H("svg", {
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
}), Tl = dy, fy = /* @__PURE__ */ le({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ra = fy, py = /* @__PURE__ */ le({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (P(), H("svg", {
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
}), my = py, hy = /* @__PURE__ */ le({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), gy = hy, vy = /* @__PURE__ */ le({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Td = vy, by = /* @__PURE__ */ le({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), yy = by, _y = /* @__PURE__ */ le({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), wy = _y, ky = /* @__PURE__ */ le({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ty = ky, Sy = /* @__PURE__ */ le({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Ey = Sy, Ay = /* @__PURE__ */ le({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (P(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Cy = Ay;
const Nn = ke([
  String,
  Object,
  Function
]), Iy = {
  Close: Ra
}, Ly = {
  Close: Ra
}, Na = {
  success: Ty,
  warning: Cy,
  error: uy,
  info: gy
}, Sd = {
  validating: Td,
  success: iy,
  error: Tl
}, Ed = () => vt && /firefox/i.test(window.navigator.userAgent);
let Xt;
const Oy = {
  height: "0",
  visibility: "hidden",
  overflow: Ed() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, xy = [
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
function Ry(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: xy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function mc(e, t = 1, n) {
  var r;
  Xt || (Xt = document.createElement("textarea"), document.body.appendChild(Xt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = Ry(e);
  i.forEach(([p, m]) => Xt?.style.setProperty(p, m)), Object.entries(Oy).forEach(([p, m]) => Xt?.style.setProperty(p, m, "important")), Xt.value = e.value || e.placeholder || "";
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
const Ad = (e) => e, Ny = Qe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Wr = (e) => gb(Ny, e), Py = Qe({
  id: {
    type: String,
    default: void 0
  },
  size: Za,
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
    type: Nn
  },
  prefixIcon: {
    type: Nn
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
    default: () => Ad({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Wr(["ariaLabel"])
}), $y = {
  [It]: (e) => Vt(e),
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
}, My = ["class", "style"], Dy = /^on[A-Z]/, Fy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = R(() => (n?.value || []).concat(My)), o = qt();
  return o ? R(() => {
    var a;
    return Oa(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && Dy.test(s))));
  }) : R(() => ({}));
}, Sl = Symbol("formContextKey"), Pa = Symbol("formItemContextKey"), hc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, zy = Symbol("elIdInjection"), Cd = () => qt() ? Ve(zy, hc) : hc, Xa = (e) => {
  const t = Cd(), n = dl();
  return Eb(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Qa = () => {
  const e = Ve(Sl, void 0), t = Ve(Pa, void 0);
  return {
    form: e,
    formItem: t
  };
}, El = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = W(!1)), r || (r = W(!1));
  const o = W();
  let a;
  const s = R(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return dt(() => {
    a = Ee([Qn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : Xa().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Da(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Id = (e) => {
  const t = qt();
  return R(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, ea = (e, t = {}) => {
  const n = W(void 0), r = t.prop ? n : Id("size"), o = t.global ? n : qb(), a = t.form ? { size: void 0 } : Ve(Sl, void 0), s = t.formItem ? { size: void 0 } : Ve(Pa, void 0);
  return R(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, Al = (e) => {
  const t = Id("disabled"), n = Ve(Sl, void 0);
  return R(() => t.value || c(e) || n?.disabled || !1);
};
function Ld(e, {
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
  return Ee(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), wn(i, "focus", u, !0), wn(i, "blur", d, !0), wn(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const By = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Od({
  afterComposition: e,
  emit: t
}) {
  const n = W(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !By(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, it(() => e(i)));
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
function Vy(e) {
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
const jy = "ElInput", Uy = le({
  name: jy,
  inheritAttrs: !1
}), Hy = /* @__PURE__ */ le({
  ...Uy,
  props: Py,
  emits: $y,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Tf(), a = Fy(), s = Sf(), i = R(() => [
      r.type === "textarea" ? g.b() : h.b(),
      h.m(m.value),
      h.is("disabled", y.value),
      h.is("exceed", me.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: pe.value && K.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = R(() => [
      h.e("wrapper"),
      h.is("focus", q.value)
    ]), { form: u, formItem: d } = Qa(), { inputId: p } = El(r, {
      formItemContext: d
    }), m = ea(), y = Al(), h = bt("input"), g = bt("textarea"), I = kr(), f = kr(), E = W(!1), N = W(!1), A = W(), _ = kr(r.inputStyle), S = R(() => I.value || f.value), { wrapperRef: O, isFocused: q, handleFocus: Z, handleBlur: ae } = Ld(S, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var T;
        r.validateEvent && ((T = d?.validate) == null || T.call(d, "blur").catch((F) => void 0));
      }
    }), fe = R(() => {
      var T;
      return (T = u?.statusIcon) != null ? T : !1;
    }), se = R(() => d?.validateState || ""), _e = R(() => se.value && Sd[se.value]), be = R(() => N.value ? Ey : my), j = R(() => [
      o.style
    ]), X = R(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), U = R(() => or(r.modelValue) ? "" : String(r.modelValue)), pe = R(() => r.clearable && !y.value && !r.readonly && !!U.value && (q.value || E.value)), K = R(() => r.showPassword && !y.value && !!U.value && (!!U.value || q.value)), G = R(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), De = R(() => U.value.length), me = R(() => !!G.value && De.value > Number(r.maxlength)), he = R(() => !!s.suffix || !!r.suffixIcon || pe.value || r.showPassword || G.value || !!se.value && fe.value), [ye, Q] = Vy(I);
    On(f, (T) => {
      if (ve(), !G.value || r.resize !== "both")
        return;
      const F = T[0], { width: we } = F.contentRect;
      A.value = {
        right: `calc(100% - ${we + 15 + 6}px)`
      };
    });
    const Ae = () => {
      const { type: T, autosize: F } = r;
      if (!(!vt || T !== "textarea" || !f.value))
        if (F) {
          const we = rn(F) ? F.minRows : void 0, Re = rn(F) ? F.maxRows : void 0, Ye = mc(f.value, we, Re);
          _.value = {
            overflowY: "hidden",
            ...Ye
          }, it(() => {
            f.value.offsetHeight, _.value = Ye;
          });
        } else
          _.value = {
            minHeight: mc(f.value).minHeight
          };
    }, ve = ((T) => {
      let F = !1;
      return () => {
        var we;
        if (F || !r.autosize)
          return;
        ((we = f.value) == null ? void 0 : we.offsetParent) === null || (T(), F = !0);
      };
    })(Ae), qe = () => {
      const T = S.value, F = r.formatter ? r.formatter(U.value) : U.value;
      !T || T.value === F || (T.value = F);
    }, _t = async (T) => {
      ye();
      let { value: F } = T.target;
      if (r.formatter && r.parser && (F = r.parser(F)), !ft.value) {
        if (F === U.value) {
          qe();
          return;
        }
        n(It, F), n(ar, F), await it(), qe(), Q();
      }
    }, Je = (T) => {
      let { value: F } = T.target;
      r.formatter && r.parser && (F = r.parser(F)), n(lr, F);
    }, {
      isComposing: ft,
      handleCompositionStart: pt,
      handleCompositionUpdate: St,
      handleCompositionEnd: Et
    } = Od({ emit: n, afterComposition: _t }), nt = () => {
      ye(), N.value = !N.value, setTimeout(Q);
    }, wt = () => {
      var T;
      return (T = S.value) == null ? void 0 : T.focus();
    }, k = () => {
      var T;
      return (T = S.value) == null ? void 0 : T.blur();
    }, C = (T) => {
      E.value = !1, n("mouseleave", T);
    }, B = (T) => {
      E.value = !0, n("mouseenter", T);
    }, ee = (T) => {
      n("keydown", T);
    }, Le = () => {
      var T;
      (T = S.value) == null || T.select();
    }, ge = () => {
      n(It, ""), n(lr, ""), n("clear"), n(ar, "");
    };
    return Ee(() => r.modelValue, () => {
      var T;
      it(() => Ae()), r.validateEvent && ((T = d?.validate) == null || T.call(d, "change").catch((F) => void 0));
    }), Ee(U, () => qe()), Ee(() => r.type, async () => {
      await it(), qe(), Ae();
    }), dt(() => {
      !r.formatter && r.parser, qe(), it(Ae);
    }), t({
      input: I,
      textarea: f,
      ref: S,
      textareaStyle: X,
      autosize: Qn(r, "autosize"),
      isComposing: ft,
      focus: wt,
      blur: k,
      select: Le,
      clear: ge,
      resizeTextarea: Ae
    }), (T, F) => (P(), H("div", {
      class: Y([
        c(i),
        {
          [c(h).bm("group", "append")]: T.$slots.append,
          [c(h).bm("group", "prepend")]: T.$slots.prepend
        }
      ]),
      style: Nt(c(j)),
      onMouseenter: B,
      onMouseleave: C
    }, [
      re(" input "),
      T.type !== "textarea" ? (P(), H(kt, { key: 0 }, [
        re(" prepend slot "),
        T.$slots.prepend ? (P(), H("div", {
          key: 0,
          class: Y(c(h).be("group", "prepend"))
        }, [
          Te(T.$slots, "prepend")
        ], 2)) : re("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: Y(c(l))
        }, [
          re(" prefix slot "),
          T.$slots.prefix || T.prefixIcon ? (P(), H("span", {
            key: 0,
            class: Y(c(h).e("prefix"))
          }, [
            b("span", {
              class: Y(c(h).e("prefix-inner"))
            }, [
              Te(T.$slots, "prefix"),
              T.prefixIcon ? (P(), de(c(gt), {
                key: 0,
                class: Y(c(h).e("icon"))
              }, {
                default: ue(() => [
                  (P(), de(Gt(T.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0)
            ], 2)
          ], 2)) : re("v-if", !0),
          b("input", so({
            id: c(p),
            ref_key: "input",
            ref: I,
            class: c(h).e("inner")
          }, c(a), {
            minlength: T.minlength,
            maxlength: T.maxlength,
            type: T.showPassword ? N.value ? "text" : "password" : T.type,
            disabled: c(y),
            readonly: T.readonly,
            autocomplete: T.autocomplete,
            tabindex: T.tabindex,
            "aria-label": T.ariaLabel,
            placeholder: T.placeholder,
            style: T.inputStyle,
            form: T.form,
            autofocus: T.autofocus,
            role: T.containerRole,
            onCompositionstart: c(pt),
            onCompositionupdate: c(St),
            onCompositionend: c(Et),
            onInput: _t,
            onChange: Je,
            onKeydown: ee
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          re(" suffix slot "),
          c(he) ? (P(), H("span", {
            key: 1,
            class: Y(c(h).e("suffix"))
          }, [
            b("span", {
              class: Y(c(h).e("suffix-inner"))
            }, [
              !c(pe) || !c(K) || !c(G) ? (P(), H(kt, { key: 0 }, [
                Te(T.$slots, "suffix"),
                T.suffixIcon ? (P(), de(c(gt), {
                  key: 0,
                  class: Y(c(h).e("icon"))
                }, {
                  default: ue(() => [
                    (P(), de(Gt(T.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : re("v-if", !0)
              ], 64)) : re("v-if", !0),
              c(pe) ? (P(), de(c(gt), {
                key: 1,
                class: Y([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: et(c(Wo), ["prevent"]),
                onClick: ge
              }, {
                default: ue(() => [
                  M(c(Tl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : re("v-if", !0),
              c(K) ? (P(), de(c(gt), {
                key: 2,
                class: Y([c(h).e("icon"), c(h).e("password")]),
                onClick: nt
              }, {
                default: ue(() => [
                  (P(), de(Gt(c(be))))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0),
              c(G) ? (P(), H("span", {
                key: 3,
                class: Y(c(h).e("count"))
              }, [
                b("span", {
                  class: Y(c(h).e("count-inner"))
                }, D(c(De)) + " / " + D(T.maxlength), 3)
              ], 2)) : re("v-if", !0),
              c(se) && c(_e) && c(fe) ? (P(), de(c(gt), {
                key: 4,
                class: Y([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(se) === "validating")
                ])
              }, {
                default: ue(() => [
                  (P(), de(Gt(c(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0)
            ], 2)
          ], 2)) : re("v-if", !0)
        ], 2),
        re(" append slot "),
        T.$slots.append ? (P(), H("div", {
          key: 1,
          class: Y(c(h).be("group", "append"))
        }, [
          Te(T.$slots, "append")
        ], 2)) : re("v-if", !0)
      ], 64)) : (P(), H(kt, { key: 1 }, [
        re(" textarea "),
        b("textarea", so({
          id: c(p),
          ref_key: "textarea",
          ref: f,
          class: [c(g).e("inner"), c(h).is("focus", c(q))]
        }, c(a), {
          minlength: T.minlength,
          maxlength: T.maxlength,
          tabindex: T.tabindex,
          disabled: c(y),
          readonly: T.readonly,
          autocomplete: T.autocomplete,
          style: c(X),
          "aria-label": T.ariaLabel,
          placeholder: T.placeholder,
          form: T.form,
          autofocus: T.autofocus,
          rows: T.rows,
          role: T.containerRole,
          onCompositionstart: c(pt),
          onCompositionupdate: c(St),
          onCompositionend: c(Et),
          onInput: _t,
          onFocus: c(Z),
          onBlur: c(ae),
          onChange: Je,
          onKeydown: ee
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(G) ? (P(), H("span", {
          key: 0,
          style: Nt(A.value),
          class: Y(c(h).e("count"))
        }, D(c(De)) + " / " + D(T.maxlength), 7)) : re("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Wy = /* @__PURE__ */ tt(Hy, [["__file", "input.vue"]]);
const Gy = Tn(Wy), Xr = 4, Ky = {
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
}, qy = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Cl = Symbol("scrollbarContextKey"), Yy = Qe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Zy = "Thumb", Xy = /* @__PURE__ */ le({
  __name: "thumb",
  props: Yy,
  setup(e) {
    const t = e, n = Ve(Cl), r = bt("scrollbar");
    n || _l(Zy, "can not inject scrollbar context");
    const o = W(), a = W(), s = W({}), i = W(!1);
    let l = !1, u = !1, d = vt ? document.onselectstart : null;
    const p = R(() => Ky[t.vertical ? "vertical" : "horizontal"]), m = R(() => qy({
      size: t.size,
      move: t.move,
      bar: p.value
    })), y = R(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), h = (S) => {
      var O;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), I(S);
      const q = S.currentTarget;
      q && (s.value[p.value.axis] = q[p.value.offset] - (S[p.value.client] - q.getBoundingClientRect()[p.value.direction]));
    }, g = (S) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(S.target.getBoundingClientRect()[p.value.direction] - S[p.value.client]), q = a.value[p.value.offset] / 2, Z = (O - q) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Z * n.wrapElement[p.value.scrollSize] / 100;
    }, I = (S) => {
      S.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (S) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[p.value.axis];
      if (!O)
        return;
      const q = (o.value.getBoundingClientRect()[p.value.direction] - S[p.value.client]) * -1, Z = a.value[p.value.offset] - O, ae = (q - Z) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ae * n.wrapElement[p.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", E), _(), u && (i.value = !1);
    }, N = () => {
      u = !1, i.value = !!t.size;
    }, A = () => {
      u = !0, i.value = l;
    };
    Bn(() => {
      _(), document.removeEventListener("mouseup", E);
    });
    const _ = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return wn(Qn(n, "scrollbarElement"), "mousemove", N), wn(Qn(n, "scrollbarElement"), "mouseleave", A), (S, O) => (P(), de(bo, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: ue(() => [
        Tt(b("div", {
          ref_key: "instance",
          ref: o,
          class: Y([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: g
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: Y(c(r).e("thumb")),
            style: Nt(c(m)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [sr, S.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var gc = /* @__PURE__ */ tt(Xy, [["__file", "thumb.vue"]]);
const Qy = Qe({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Jy = /* @__PURE__ */ le({
  __name: "bar",
  props: Qy,
  setup(e, { expose: t }) {
    const n = e, r = Ve(Cl), o = W(0), a = W(0), s = W(""), i = W(""), l = W(1), u = W(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const y = m.offsetHeight - Xr, h = m.offsetWidth - Xr;
          a.value = m.scrollTop * 100 / y * l.value, o.value = m.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const y = m.offsetHeight - Xr, h = m.offsetWidth - Xr, g = y ** 2 / m.scrollHeight, I = h ** 2 / m.scrollWidth, f = Math.max(g, n.minSize), E = Math.max(I, n.minSize);
        l.value = g / (y - g) / (f / (y - f)), u.value = I / (h - I) / (E / (h - E)), i.value = f + Xr < y ? `${f}px` : "", s.value = E + Xr < h ? `${E}px` : "";
      }
    }), (m, y) => (P(), H(kt, null, [
      M(gc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      M(gc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var e1 = /* @__PURE__ */ tt(Jy, [["__file", "bar.vue"]]);
const t1 = Qe({
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
  ...Wr(["ariaLabel", "ariaOrientation"])
}), n1 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ze)
}, r1 = "ElScrollbar", o1 = le({
  name: r1
}), a1 = /* @__PURE__ */ le({
  ...o1,
  props: t1,
  emits: n1,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = bt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = W(), d = W(), p = W(), m = W(), y = R(() => {
      const _ = {};
      return r.height && (_.height = uo(r.height)), r.maxHeight && (_.maxHeight = uo(r.maxHeight)), [r.wrapStyle, _];
    }), h = R(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = R(() => [o.e("view"), r.viewClass]), I = () => {
      var _;
      d.value && ((_ = m.value) == null || _.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(_, S) {
      rn(_) ? d.value.scrollTo(_) : ze(_) && ze(S) && d.value.scrollTo(_, S);
    }
    const E = (_) => {
      ze(_) && (d.value.scrollTop = _);
    }, N = (_) => {
      ze(_) && (d.value.scrollLeft = _);
    }, A = () => {
      var _;
      (_ = m.value) == null || _.update();
    };
    return Ee(() => r.noresize, (_) => {
      _ ? (a?.(), s?.()) : ({ stop: a } = On(p, A), s = wn("resize", A));
    }, { immediate: !0 }), Ee(() => [r.maxHeight, r.height], () => {
      r.native || it(() => {
        var _;
        A(), d.value && ((_ = m.value) == null || _.handleScroll(d.value));
      });
    }), Dn(Cl, Dr({
      scrollbarElement: u,
      wrapElement: d
    })), Ef(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), dt(() => {
      r.native || it(() => {
        A();
      });
    }), su(() => A()), t({
      wrapRef: d,
      update: A,
      scrollTo: f,
      setScrollTop: E,
      setScrollLeft: N,
      handleScroll: I
    }), (_, S) => (P(), H("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: Y(c(o).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: Y(c(h)),
        style: Nt(c(y)),
        tabindex: _.tabindex,
        onScroll: I
      }, [
        (P(), de(Gt(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: p,
          class: Y(c(g)),
          style: Nt(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: ue(() => [
            Te(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      _.native ? re("v-if", !0) : (P(), de(e1, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var s1 = /* @__PURE__ */ tt(a1, [["__file", "scrollbar.vue"]]);
const l1 = Tn(s1), Il = Symbol("popper"), xd = Symbol("popperContent"), i1 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Rd = Qe({
  role: {
    type: String,
    values: i1,
    default: "tooltip"
  }
}), c1 = le({
  name: "ElPopper",
  inheritAttrs: !1
}), u1 = /* @__PURE__ */ le({
  ...c1,
  props: Rd,
  setup(e, { expose: t }) {
    const n = e, r = W(), o = W(), a = W(), s = W(), i = R(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Dn(Il, l), (u, d) => Te(u.$slots, "default");
  }
});
var d1 = /* @__PURE__ */ tt(u1, [["__file", "popper.vue"]]);
const Nd = Qe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), f1 = le({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), p1 = /* @__PURE__ */ le({
  ...f1,
  props: Nd,
  setup(e, { expose: t }) {
    const n = e, r = bt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ve(xd, void 0);
    return Ee(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Bn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (P(), H("span", {
      ref_key: "arrowRef",
      ref: a,
      class: Y(c(r).e("arrow")),
      style: Nt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var m1 = /* @__PURE__ */ tt(p1, [["__file", "arrow.vue"]]);
const Pd = Qe({
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
}), $d = Symbol("elForwardRef"), h1 = (e) => {
  Dn($d, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, g1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), zs = (e) => {
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
}, v1 = "ElOnlyChild", b1 = le({
  name: v1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ve($d), a = g1((r = o?.setForwardRef) != null ? r : Wo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = Md(i);
      return l ? Tt(Af(l, n), [[a]]) : null;
    };
  }
});
function Md(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (rn(n))
      switch (n.type) {
        case Cf:
          continue;
        case ou:
        case "svg":
          return vc(n);
        case kt:
          return Md(n.children);
        default:
          return n;
      }
    return vc(n);
  }
  return null;
}
function vc(e) {
  const t = bt("only-child");
  return M("span", {
    class: t.e("content")
  }, [e]);
}
const y1 = le({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), _1 = /* @__PURE__ */ le({
  ...y1,
  props: Pd,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ve(Il, void 0);
    h1(o);
    const a = R(() => i.value ? n.id : void 0), s = R(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = R(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = R(() => i.value ? `${n.open}` : void 0);
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
    return dt(() => {
      Ee(() => n.virtualRef, (p) => {
        p && (o.value = tr(p));
      }, {
        immediate: !0
      }), Ee(o, (p, m) => {
        u?.(), u = void 0, _n(p) && (d.forEach((y) => {
          var h;
          const g = n[y];
          g && (p.addEventListener(y.slice(2).toLowerCase(), g), (h = m?.removeEventListener) == null || h.call(m, y.slice(2).toLowerCase(), g));
        }), zs(p) && (u = Ee([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            or(y[g]) ? p.removeAttribute(h) : p.setAttribute(h, y[g]);
          });
        }, { immediate: !0 }))), _n(m) && zs(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => m.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Bn(() => {
      if (u?.(), u = void 0, o.value && _n(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const y = n[m];
          y && p.removeEventListener(m.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? re("v-if", !0) : (P(), de(c(b1), so({ key: 0 }, p.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: ue(() => [
        Te(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var w1 = /* @__PURE__ */ tt(_1, [["__file", "trigger.vue"]]);
const fs = "focus-trap.focus-after-trapped", ps = "focus-trap.focus-after-released", k1 = "focus-trap.focusout-prevented", bc = {
  cancelable: !0,
  bubbles: !1
}, T1 = {
  cancelable: !0,
  bubbles: !1
}, yc = "focusAfterTrapped", _c = "focusAfterReleased", S1 = Symbol("elFocusTrap"), Ll = W(), Ja = W(0), Ol = W(0);
let ca = 0;
const Dd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, wc = (e, t) => {
  for (const n of e)
    if (!E1(n, t))
      return n;
}, E1 = (e, t) => {
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
}, A1 = (e) => {
  const t = Dd(e), n = wc(t, e), r = wc(t.reverse(), e);
  return [n, r];
}, C1 = (e) => e instanceof HTMLInputElement && "select" in e, Yn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    _n(e) && !zs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Ol.value = window.performance.now(), e !== n && C1(e) && t && e.select(), _n(e) && r && e.removeAttribute("tabindex");
  }
};
function kc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const I1 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = kc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = kc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, L1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Yn(r, t), document.activeElement !== n)
      return;
}, Tc = I1(), O1 = () => Ja.value > Ol.value, ua = () => {
  Ll.value = "pointer", Ja.value = window.performance.now();
}, Sc = () => {
  Ll.value = "keyboard", Ja.value = window.performance.now();
}, x1 = () => (dt(() => {
  ca === 0 && (document.addEventListener("mousedown", ua), document.addEventListener("touchstart", ua), document.addEventListener("keydown", Sc)), ca++;
}), Bn(() => {
  ca--, ca <= 0 && (document.removeEventListener("mousedown", ua), document.removeEventListener("touchstart", ua), document.removeEventListener("keydown", Sc));
}), {
  focusReason: Ll,
  lastUserFocusTimestamp: Ja,
  lastAutomatedFocusTimestamp: Ol
}), da = (e) => new CustomEvent(k1, {
  ...T1,
  detail: e
}), $n = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let ro = [];
const Ec = (e) => {
  e.code === $n.esc && ro.forEach((t) => t(e));
}, R1 = (e) => {
  dt(() => {
    ro.length === 0 && document.addEventListener("keydown", Ec), vt && ro.push(e);
  }), Bn(() => {
    ro = ro.filter((t) => t !== e), ro.length === 0 && vt && document.removeEventListener("keydown", Ec);
  });
}, N1 = le({
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
    yc,
    _c,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = W();
    let r, o;
    const { focusReason: a } = x1();
    R1((h) => {
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
      const { code: g, altKey: I, ctrlKey: f, metaKey: E, currentTarget: N, shiftKey: A } = h, { loop: _ } = e, S = g === $n.tab && !I && !f && !E, O = document.activeElement;
      if (S && O) {
        const q = N, [Z, ae] = A1(q);
        if (Z && ae) {
          if (!A && O === ae) {
            const se = da({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (h.preventDefault(), _ && Yn(Z, !0));
          } else if (A && [Z, q].includes(O)) {
            const se = da({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (h.preventDefault(), _ && Yn(ae, !0));
          }
        } else if (O === q) {
          const se = da({
            focusReason: a.value
          });
          t("focusout-prevented", se), se.defaultPrevented || h.preventDefault();
        }
      }
    };
    Dn(S1, {
      focusTrapRef: n,
      onKeydown: i
    }), Ee(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), Ee([n], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", d), g.removeEventListener("focusout", p));
    });
    const l = (h) => {
      t(yc, h);
    }, u = (h) => t(_c, h), d = (h) => {
      const g = c(n);
      if (!g)
        return;
      const I = h.target, f = h.relatedTarget, E = I && g.contains(I);
      e.trapped || f && g.contains(f) || (r = f), E && t("focusin", h), !s.paused && e.trapped && (E ? o = I : Yn(o, !0));
    }, p = (h) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const I = h.relatedTarget;
          !or(I) && !g.contains(I) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = da({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Yn(o, !0);
            }
          }, 0);
        } else {
          const I = h.target;
          I && g.contains(I) || t("focusout", h);
        }
    };
    async function m() {
      await it();
      const h = c(n);
      if (h) {
        Tc.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const f = new Event(fs, bc);
          h.addEventListener(fs, l), h.dispatchEvent(f), f.defaultPrevented || it(() => {
            let E = e.focusStartEl;
            Vt(E) || (Yn(E), document.activeElement !== E && (E = "first")), E === "first" && L1(Dd(h), !0), (document.activeElement === g || E === "container") && Yn(h);
          });
        }
      }
    }
    function y() {
      const h = c(n);
      if (h) {
        h.removeEventListener(fs, l);
        const g = new CustomEvent(ps, {
          ...bc,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(ps, u), h.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !O1() || h.contains(document.activeElement)) && Yn(r ?? document.body), h.removeEventListener(ps, u), Tc.remove(s);
      }
    }
    return dt(() => {
      e.trapped && m(), Ee(() => e.trapped, (h) => {
        h ? m() : y();
      });
    }), Bn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function P1(e, t, n, r, o, a) {
  return Te(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var $1 = /* @__PURE__ */ tt(N1, [["render", P1], ["__file", "focus-trap.vue"]]), Qt = "top", ln = "bottom", cn = "right", Jt = "left", xl = "auto", ta = [Qt, ln, cn, Jt], fo = "start", qo = "end", M1 = "clippingParents", Fd = "viewport", Lo = "popper", D1 = "reference", Ac = ta.reduce(function(e, t) {
  return e.concat([t + "-" + fo, t + "-" + qo]);
}, []), es = [].concat(ta, [xl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + fo, t + "-" + qo]);
}, []), F1 = "beforeRead", z1 = "read", B1 = "afterRead", V1 = "beforeMain", j1 = "main", U1 = "afterMain", H1 = "beforeWrite", W1 = "write", G1 = "afterWrite", K1 = [F1, z1, B1, V1, j1, U1, H1, W1, G1];
function zn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function on(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Br(e) {
  var t = on(e).Element;
  return e instanceof t || e instanceof Element;
}
function sn(e) {
  var t = on(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Rl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = on(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function q1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !sn(a) || !zn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Y1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !sn(o) || !zn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var zd = { name: "applyStyles", enabled: !0, phase: "write", fn: q1, effect: Y1, requires: ["computeStyles"] };
function Mn(e) {
  return e.split("-")[0];
}
var Mr = Math.max, $a = Math.min, po = Math.round;
function Bs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Bd() {
  return !/^((?!chrome|android).)*safari/i.test(Bs());
}
function mo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && sn(e) && (o = e.offsetWidth > 0 && po(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && po(r.height) / e.offsetHeight || 1);
  var s = Br(e) ? on(e) : window, i = s.visualViewport, l = !Bd() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: u + p, bottom: d + m, left: u, x: u, y: d };
}
function Nl(e) {
  var t = mo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Vd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Rl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ir(e) {
  return on(e).getComputedStyle(e);
}
function Z1(e) {
  return ["table", "td", "th"].indexOf(zn(e)) >= 0;
}
function Cr(e) {
  return ((Br(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ts(e) {
  return zn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Rl(e) ? e.host : null) || Cr(e);
}
function Cc(e) {
  return !sn(e) || ir(e).position === "fixed" ? null : e.offsetParent;
}
function X1(e) {
  var t = /firefox/i.test(Bs()), n = /Trident/i.test(Bs());
  if (n && sn(e)) {
    var r = ir(e);
    if (r.position === "fixed") return null;
  }
  var o = ts(e);
  for (Rl(o) && (o = o.host); sn(o) && ["html", "body"].indexOf(zn(o)) < 0; ) {
    var a = ir(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function na(e) {
  for (var t = on(e), n = Cc(e); n && Z1(n) && ir(n).position === "static"; ) n = Cc(n);
  return n && (zn(n) === "html" || zn(n) === "body" && ir(n).position === "static") ? t : n || X1(e) || t;
}
function Pl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Fo(e, t, n) {
  return Mr(e, $a(t, n));
}
function Q1(e, t, n) {
  var r = Fo(e, t, n);
  return r > n ? n : r;
}
function jd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ud(e) {
  return Object.assign({}, jd(), e);
}
function Hd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var J1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ud(typeof e != "number" ? e : Hd(e, ta));
};
function e_(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Mn(n.placement), l = Pl(i), u = [Jt, cn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = J1(o.padding, n), m = Nl(a), y = l === "y" ? Qt : Jt, h = l === "y" ? ln : cn, g = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], I = s[l] - n.rects.reference[l], f = na(a), E = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, N = g / 2 - I / 2, A = p[y], _ = E - m[d] - p[h], S = E / 2 - m[d] / 2 + N, O = Fo(A, S, _), q = l;
    n.modifiersData[r] = (t = {}, t[q] = O, t.centerOffset = O - S, t);
  }
}
function t_(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Vd(t.elements.popper, o) && (t.elements.arrow = o));
}
var n_ = { name: "arrow", enabled: !0, phase: "main", fn: e_, effect: t_, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ho(e) {
  return e.split("-")[1];
}
var r_ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function o_(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: po(n * o) / o || 0, y: po(r * o) / o || 0 };
}
function Ic(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, y = m === void 0 ? 0 : m, h = s.y, g = h === void 0 ? 0 : h, I = typeof d == "function" ? d({ x: y, y: g }) : { x: y, y: g };
  y = I.x, g = I.y;
  var f = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), N = Jt, A = Qt, _ = window;
  if (u) {
    var S = na(n), O = "clientHeight", q = "clientWidth";
    if (S === on(n) && (S = Cr(n), ir(S).position !== "static" && i === "absolute" && (O = "scrollHeight", q = "scrollWidth")), S = S, o === Qt || (o === Jt || o === cn) && a === qo) {
      A = ln;
      var Z = p && S === _ && _.visualViewport ? _.visualViewport.height : S[O];
      g -= Z - r.height, g *= l ? 1 : -1;
    }
    if (o === Jt || (o === Qt || o === ln) && a === qo) {
      N = cn;
      var ae = p && S === _ && _.visualViewport ? _.visualViewport.width : S[q];
      y -= ae - r.width, y *= l ? 1 : -1;
    }
  }
  var fe = Object.assign({ position: i }, u && r_), se = d === !0 ? o_({ x: y, y: g }, on(n)) : { x: y, y: g };
  if (y = se.x, g = se.y, l) {
    var _e;
    return Object.assign({}, fe, (_e = {}, _e[A] = E ? "0" : "", _e[N] = f ? "0" : "", _e.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + g + "px)" : "translate3d(" + y + "px, " + g + "px, 0)", _e));
  }
  return Object.assign({}, fe, (t = {}, t[A] = E ? g + "px" : "", t[N] = f ? y + "px" : "", t.transform = "", t));
}
function a_(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Mn(t.placement), variation: ho(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ic(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ic(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Wd = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: a_, data: {} }, fa = { passive: !0 };
function s_(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = on(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, fa);
  }), i && l.addEventListener("resize", n.update, fa), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, fa);
    }), i && l.removeEventListener("resize", n.update, fa);
  };
}
var Gd = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: s_, data: {} }, l_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ya(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return l_[t];
  });
}
var i_ = { start: "end", end: "start" };
function Lc(e) {
  return e.replace(/start|end/g, function(t) {
    return i_[t];
  });
}
function $l(e) {
  var t = on(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ml(e) {
  return mo(Cr(e)).left + $l(e).scrollLeft;
}
function c_(e, t) {
  var n = on(e), r = Cr(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Bd();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Ml(e), y: l };
}
function u_(e) {
  var t, n = Cr(e), r = $l(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Mr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Mr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Ml(e), l = -r.scrollTop;
  return ir(o || n).direction === "rtl" && (i += Mr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Dl(e) {
  var t = ir(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Kd(e) {
  return ["html", "body", "#document"].indexOf(zn(e)) >= 0 ? e.ownerDocument.body : sn(e) && Dl(e) ? e : Kd(ts(e));
}
function zo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Kd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = on(r), s = o ? [a].concat(a.visualViewport || [], Dl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(zo(ts(s)));
}
function Vs(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function d_(e, t) {
  var n = mo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Oc(e, t, n) {
  return t === Fd ? Vs(c_(e, n)) : Br(t) ? d_(t, n) : Vs(u_(Cr(e)));
}
function f_(e) {
  var t = zo(ts(e)), n = ["absolute", "fixed"].indexOf(ir(e).position) >= 0, r = n && sn(e) ? na(e) : e;
  return Br(r) ? t.filter(function(o) {
    return Br(o) && Vd(o, r) && zn(o) !== "body";
  }) : [];
}
function p_(e, t, n, r) {
  var o = t === "clippingParents" ? f_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = Oc(e, u, r);
    return l.top = Mr(d.top, l.top), l.right = $a(d.right, l.right), l.bottom = $a(d.bottom, l.bottom), l.left = Mr(d.left, l.left), l;
  }, Oc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function qd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Mn(r) : null, a = r ? ho(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Qt:
      l = { x: s, y: t.y - n.height };
      break;
    case ln:
      l = { x: s, y: t.y + t.height };
      break;
    case cn:
      l = { x: t.x + t.width, y: i };
      break;
    case Jt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Pl(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case fo:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case qo:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Yo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? M1 : i, u = n.rootBoundary, d = u === void 0 ? Fd : u, p = n.elementContext, m = p === void 0 ? Lo : p, y = n.altBoundary, h = y === void 0 ? !1 : y, g = n.padding, I = g === void 0 ? 0 : g, f = Ud(typeof I != "number" ? I : Hd(I, ta)), E = m === Lo ? D1 : Lo, N = e.rects.popper, A = e.elements[h ? E : m], _ = p_(Br(A) ? A : A.contextElement || Cr(e.elements.popper), l, d, s), S = mo(e.elements.reference), O = qd({ reference: S, element: N, placement: o }), q = Vs(Object.assign({}, N, O)), Z = m === Lo ? q : S, ae = { top: _.top - Z.top + f.top, bottom: Z.bottom - _.bottom + f.bottom, left: _.left - Z.left + f.left, right: Z.right - _.right + f.right }, fe = e.modifiersData.offset;
  if (m === Lo && fe) {
    var se = fe[o];
    Object.keys(ae).forEach(function(_e) {
      var be = [cn, ln].indexOf(_e) >= 0 ? 1 : -1, j = [Qt, ln].indexOf(_e) >= 0 ? "y" : "x";
      ae[_e] += se[j] * be;
    });
  }
  return ae;
}
function m_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? es : l, d = ho(r), p = d ? i ? Ac : Ac.filter(function(h) {
    return ho(h) === d;
  }) : ta, m = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(h, g) {
    return h[g] = Yo(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[Mn(g)], h;
  }, {});
  return Object.keys(y).sort(function(h, g) {
    return y[h] - y[g];
  });
}
function h_(e) {
  if (Mn(e) === xl) return [];
  var t = ya(e);
  return [Lc(e), t, Lc(t)];
}
function g_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, h = y === void 0 ? !0 : y, g = n.allowedAutoPlacements, I = t.options.placement, f = Mn(I), E = f === I, N = l || (E || !h ? [ya(I)] : h_(I)), A = [I].concat(N).reduce(function(ye, Q) {
      return ye.concat(Mn(Q) === xl ? m_(t, { placement: Q, boundary: d, rootBoundary: p, padding: u, flipVariations: h, allowedAutoPlacements: g }) : Q);
    }, []), _ = t.rects.reference, S = t.rects.popper, O = /* @__PURE__ */ new Map(), q = !0, Z = A[0], ae = 0; ae < A.length; ae++) {
      var fe = A[ae], se = Mn(fe), _e = ho(fe) === fo, be = [Qt, ln].indexOf(se) >= 0, j = be ? "width" : "height", X = Yo(t, { placement: fe, boundary: d, rootBoundary: p, altBoundary: m, padding: u }), U = be ? _e ? cn : Jt : _e ? ln : Qt;
      _[j] > S[j] && (U = ya(U));
      var pe = ya(U), K = [];
      if (a && K.push(X[se] <= 0), i && K.push(X[U] <= 0, X[pe] <= 0), K.every(function(ye) {
        return ye;
      })) {
        Z = fe, q = !1;
        break;
      }
      O.set(fe, K);
    }
    if (q) for (var G = h ? 3 : 1, De = function(ye) {
      var Q = A.find(function(Ae) {
        var Ge = O.get(Ae);
        if (Ge) return Ge.slice(0, ye).every(function(ve) {
          return ve;
        });
      });
      if (Q) return Z = Q, "break";
    }, me = G; me > 0; me--) {
      var he = De(me);
      if (he === "break") break;
    }
    t.placement !== Z && (t.modifiersData[r]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var v_ = { name: "flip", enabled: !0, phase: "main", fn: g_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function xc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Rc(e) {
  return [Qt, cn, ln, Jt].some(function(t) {
    return e[t] >= 0;
  });
}
function b_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Yo(t, { elementContext: "reference" }), i = Yo(t, { altBoundary: !0 }), l = xc(s, r), u = xc(i, o, a), d = Rc(l), p = Rc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var y_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: b_ };
function __(e, t, n) {
  var r = Mn(e), o = [Jt, Qt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Jt, cn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function w_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = es.reduce(function(d, p) {
    return d[p] = __(p, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var k_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: w_ };
function T_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = qd({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Yd = { name: "popperOffsets", enabled: !0, phase: "read", fn: T_, data: {} };
function S_(e) {
  return e === "x" ? "y" : "x";
}
function E_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, y = m === void 0 ? !0 : m, h = n.tetherOffset, g = h === void 0 ? 0 : h, I = Yo(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: d }), f = Mn(t.placement), E = ho(t.placement), N = !E, A = Pl(f), _ = S_(A), S = t.modifiersData.popperOffsets, O = t.rects.reference, q = t.rects.popper, Z = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, ae = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), fe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, se = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var _e, be = A === "y" ? Qt : Jt, j = A === "y" ? ln : cn, X = A === "y" ? "height" : "width", U = S[A], pe = U + I[be], K = U - I[j], G = y ? -q[X] / 2 : 0, De = E === fo ? O[X] : q[X], me = E === fo ? -q[X] : -O[X], he = t.elements.arrow, ye = y && he ? Nl(he) : { width: 0, height: 0 }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jd(), Ae = Q[be], Ge = Q[j], ve = Fo(0, O[X], ye[X]), qe = N ? O[X] / 2 - G - ve - Ae - ae.mainAxis : De - ve - Ae - ae.mainAxis, _t = N ? -O[X] / 2 + G + ve + Ge + ae.mainAxis : me + ve + Ge + ae.mainAxis, Je = t.elements.arrow && na(t.elements.arrow), ft = Je ? A === "y" ? Je.clientTop || 0 : Je.clientLeft || 0 : 0, pt = (_e = fe?.[A]) != null ? _e : 0, St = U + qe - pt - ft, Et = U + _t - pt, nt = Fo(y ? $a(pe, St) : pe, U, y ? Mr(K, Et) : K);
      S[A] = nt, se[A] = nt - U;
    }
    if (i) {
      var wt, k = A === "x" ? Qt : Jt, C = A === "x" ? ln : cn, B = S[_], ee = _ === "y" ? "height" : "width", Le = B + I[k], ge = B - I[C], T = [Qt, Jt].indexOf(f) !== -1, F = (wt = fe?.[_]) != null ? wt : 0, we = T ? Le : B - O[ee] - q[ee] - F + ae.altAxis, Re = T ? B + O[ee] + q[ee] - F - ae.altAxis : ge, Ye = y && T ? Q1(we, B, Re) : Fo(y ? we : Le, B, y ? Re : ge);
      S[_] = Ye, se[_] = Ye - B;
    }
    t.modifiersData[r] = se;
  }
}
var A_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: E_, requiresIfExists: ["offset"] };
function C_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function I_(e) {
  return e === on(e) || !sn(e) ? $l(e) : C_(e);
}
function L_(e) {
  var t = e.getBoundingClientRect(), n = po(t.width) / e.offsetWidth || 1, r = po(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function O_(e, t, n) {
  n === void 0 && (n = !1);
  var r = sn(t), o = sn(t) && L_(t), a = Cr(t), s = mo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((zn(t) !== "body" || Dl(a)) && (i = I_(t)), sn(t) ? (l = mo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ml(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function x_(e) {
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
function R_(e) {
  var t = x_(e);
  return K1.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function N_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function P_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Nc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Pc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Fl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Nc : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Nc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: u, setOptions: function(g) {
      var I = typeof g == "function" ? g(u.options) : g;
      h(), u.options = Object.assign({}, a, u.options, I), u.scrollParents = { reference: Br(s) ? zo(s) : s.contextElement ? zo(s.contextElement) : [], popper: zo(i) };
      var f = R_(P_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(E) {
        return E.enabled;
      }), y(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = u.elements, I = g.reference, f = g.popper;
        if (Pc(I, f)) {
          u.rects = { reference: O_(I, na(f), u.options.strategy === "fixed"), popper: Nl(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(q) {
            return u.modifiersData[q.name] = Object.assign({}, q.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var N = u.orderedModifiers[E], A = N.fn, _ = N.options, S = _ === void 0 ? {} : _, O = N.name;
            typeof A == "function" && (u = A({ state: u, options: S, name: O, instance: m }) || u);
          }
        }
      }
    }, update: N_(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(u);
      });
    }), destroy: function() {
      h(), p = !0;
    } };
    if (!Pc(s, i)) return m;
    m.setOptions(l).then(function(g) {
      !p && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function y() {
      u.orderedModifiers.forEach(function(g) {
        var I = g.name, f = g.options, E = f === void 0 ? {} : f, N = g.effect;
        if (typeof N == "function") {
          var A = N({ state: u, name: I, instance: m, options: E }), _ = function() {
          };
          d.push(A || _);
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
Fl();
var $_ = [Gd, Yd, Wd, zd];
Fl({ defaultModifiers: $_ });
var M_ = [Gd, Yd, Wd, zd, k_, v_, A_, n_, y_], D_ = Fl({ defaultModifiers: M_ });
const F_ = ["fixed", "absolute"], z_ = Qe({
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
    values: es,
    default: "bottom"
  },
  popperOptions: {
    type: ke(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: F_,
    default: "absolute"
  }
}), Zd = Qe({
  ...z_,
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
  ...Wr(["ariaLabel"])
}), B_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, V_ = (e, t) => {
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
}, j_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...H_(e), ...t]
  };
  return W_(a, o?.modifiers), a;
}, U_ = (e) => {
  if (vt)
    return tr(e);
};
function H_(e) {
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
function W_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const G_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = K_(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = R(() => {
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
  return Ee(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Ee([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = D_(l, u, c(o)));
  }), Bn(() => {
    i();
  }), {
    state: R(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: R(() => c(s).styles),
    attributes: R(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: R(() => c(a))
  };
};
function K_(e) {
  const t = Object.keys(e.elements), n = Oa(t.map((o) => [o, e.styles[o] || {}])), r = Oa(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const q_ = 0, Y_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ve(Il, void 0), a = W(), s = W(), i = R(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = R(() => {
    var f;
    const E = c(a), N = (f = c(s)) != null ? f : q_;
    return {
      name: "arrow",
      enabled: !fb(E),
      options: {
        element: E,
        padding: N
      }
    };
  }), u = R(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...j_(e, [
      c(l),
      c(i)
    ])
  })), d = R(() => U_(e.referenceEl) || c(r)), { attributes: p, state: m, styles: y, update: h, forceUpdate: g, instanceRef: I } = G_(d, n, u);
  return Ee(I, (f) => t.value = f), dt(() => {
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
    instanceRef: I,
    state: m,
    styles: y,
    role: o,
    forceUpdate: g,
    update: h
  };
}, Z_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = dd(), a = bt("popper"), s = R(() => c(t).popper), i = W(ze(e.zIndex) ? e.zIndex : o()), l = R(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = R(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = R(() => r.value === "dialog" ? "false" : void 0), p = R(() => c(n).arrow || {});
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
}, X_ = le({
  name: "ElPopperContent"
}), Q_ = /* @__PURE__ */ le({
  ...X_,
  props: Zd,
  emits: B_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = V_(r, n), { attributes: p, arrowRef: m, contentRef: y, styles: h, instanceRef: g, role: I, update: f } = Y_(r), {
      ariaModal: E,
      arrowStyle: N,
      contentAttrs: A,
      contentClass: _,
      contentStyle: S,
      updateZIndex: O
    } = Z_(r, {
      styles: h,
      attributes: p,
      role: I
    }), q = Ve(Pa, void 0), Z = W();
    Dn(xd, {
      arrowStyle: N,
      arrowRef: m,
      arrowOffset: Z
    }), q && Dn(Pa, {
      ...q,
      addInputId: Wo,
      removeInputId: Wo
    });
    let ae;
    const fe = (_e = !0) => {
      f(), _e && O();
    }, se = () => {
      fe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return dt(() => {
      Ee(() => r.triggerTargetEl, (_e, be) => {
        ae?.(), ae = void 0;
        const j = c(_e || y.value), X = c(be || y.value);
        _n(j) && (ae = Ee([I, () => r.ariaLabel, E, () => r.id], (U) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((pe, K) => {
            or(U[K]) ? j.removeAttribute(pe) : j.setAttribute(pe, U[K]);
          });
        }, { immediate: !0 })), X !== j && _n(X) && ["role", "aria-label", "aria-modal", "id"].forEach((U) => {
          X.removeAttribute(U);
        });
      }, { immediate: !0 }), Ee(() => r.visible, se, { immediate: !0 });
    }), Bn(() => {
      ae?.(), ae = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: g,
      updatePopper: fe,
      contentStyle: S
    }), (_e, be) => (P(), H("div", so({
      ref_key: "contentRef",
      ref: y
    }, c(A), {
      style: c(S),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (j) => _e.$emit("mouseenter", j),
      onMouseleave: (j) => _e.$emit("mouseleave", j)
    }), [
      M(c($1), {
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
          Te(_e.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var J_ = /* @__PURE__ */ tt(Q_, [["__file", "content.vue"]]);
const ew = Tn(d1), zl = Symbol("elTooltip");
function $c() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Jo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const tw = Qe({
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
}), nw = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = $c(), {
    registerTimeout: s,
    cancelTimeout: i
  } = $c();
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
}, Bl = Qe({
  ...tw,
  ...Zd,
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
  ...Wr(["ariaLabel"])
}), Xd = Qe({
  ...Pd,
  disabled: Boolean,
  trigger: {
    type: ke([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ke(Array),
    default: () => [$n.enter, $n.numpadEnter, $n.space]
  }
}), rw = Ya({
  type: ke(Boolean),
  default: null
}), ow = Ya({
  type: ke(Function)
}), aw = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: rw,
    [n]: ow
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
      const m = qt(), { emit: y } = m, h = m.props, g = R(() => st(h[n])), I = R(() => h[e] === null), f = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), st(d) && d(O));
      }, E = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), st(p) && p(O));
      }, N = (O) => {
        if (h.disabled === !0 || st(u) && !u())
          return;
        const q = g.value && vt;
        q && y(t, !0), (I.value || !q) && f(O);
      }, A = (O) => {
        if (h.disabled === !0 || !vt)
          return;
        const q = g.value && vt;
        q && y(t, !1), (I.value || !q) && E(O);
      }, _ = (O) => {
        Tr(O) && (h.disabled && O ? g.value && y(t, !1) : s.value !== O && (O ? f() : E()));
      }, S = () => {
        s.value ? A() : N();
      };
      return Ee(() => h[e], _), l && m.appContext.config.globalProperties.$route !== void 0 && Ee(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && A();
      }), dt(() => {
        _(h[e]);
      }), {
        hide: A,
        show: N,
        toggle: S,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: sw,
  useModelToggleEmits: lw,
  useModelToggle: iw
} = aw("visible"), cw = Qe({
  ...Rd,
  ...sw,
  ...Bl,
  ...Xd,
  ...Nd,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), uw = [
  ...lw,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], dw = (e, t) => xn(e) ? e.includes(t) : e === t, Qr = (e, t, n) => (r) => {
  dw(c(e), t) && n(r);
}, Zn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, fw = le({
  name: "ElTooltipTrigger"
}), pw = /* @__PURE__ */ le({
  ...fw,
  props: Xd,
  setup(e, { expose: t }) {
    const n = e, r = bt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ve(zl, void 0), d = W(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = Qn(n, "trigger"), y = Zn(p, Qr(m, "hover", i)), h = Zn(p, Qr(m, "hover", l)), g = Zn(p, Qr(m, "click", (A) => {
      A.button === 0 && u(A);
    })), I = Zn(p, Qr(m, "focus", i)), f = Zn(p, Qr(m, "focus", l)), E = Zn(p, Qr(m, "contextmenu", (A) => {
      A.preventDefault(), u(A);
    })), N = Zn(p, (A) => {
      const { code: _ } = A;
      n.triggerKeys.includes(_) && (A.preventDefault(), u(A));
    });
    return t({
      triggerRef: d
    }), (A, _) => (P(), de(c(w1), {
      id: c(a),
      "virtual-ref": A.virtualRef,
      open: c(s),
      "virtual-triggering": A.virtualTriggering,
      class: Y(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(g),
      onContextmenu: c(E),
      onFocus: c(I),
      onMouseenter: c(y),
      onMouseleave: c(h),
      onKeydown: c(N)
    }, {
      default: ue(() => [
        Te(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var mw = /* @__PURE__ */ tt(pw, [["__file", "trigger.vue"]]);
const hw = Qe({
  to: {
    type: ke([String, Object]),
    required: !0
  },
  disabled: Boolean
}), gw = /* @__PURE__ */ le({
  __name: "teleport",
  props: hw,
  setup(e) {
    return (t, n) => t.disabled ? Te(t.$slots, "default", { key: 0 }) : (P(), de(If, {
      key: 1,
      to: t.to
    }, [
      Te(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var vw = /* @__PURE__ */ tt(gw, [["__file", "teleport.vue"]]);
const bw = Tn(vw), Qd = () => {
  const e = dl(), t = Cd(), n = R(() => `${e.value}-popper-container-${t.prefix}`), r = R(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, yw = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, _w = () => {
  const { id: e, selector: t } = Qd();
  return Lf(() => {
    vt && (document.body.querySelector(t.value) || yw(e.value));
  }), {
    id: e,
    selector: t
  };
}, ww = le({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), kw = /* @__PURE__ */ le({
  ...ww,
  props: Bl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Qd(), o = bt("tooltip"), a = W();
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
      onBeforeHide: I
    } = Ve(zl, void 0), f = R(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = R(() => n.persistent);
    Bn(() => {
      s?.();
    });
    const N = R(() => c(E) ? !0 : c(u)), A = R(() => n.disabled ? !1 : c(u)), _ = R(() => n.appendTo || r.value), S = R(() => {
      var U;
      return (U = n.style) != null ? U : {};
    }), O = W(!0), q = () => {
      h(), X() && Yn(document.body), O.value = !0;
    }, Z = () => {
      if (c(i))
        return !0;
    }, ae = Zn(Z, () => {
      n.enterable && c(d) === "hover" && m();
    }), fe = Zn(Z, () => {
      c(d) === "hover" && p();
    }), se = () => {
      var U, pe;
      (pe = (U = a.value) == null ? void 0 : U.updatePopper) == null || pe.call(U), g?.();
    }, _e = () => {
      I?.();
    }, be = () => {
      y(), s = Lb(R(() => {
        var U;
        return (U = a.value) == null ? void 0 : U.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && p();
      });
    }, j = () => {
      n.virtualTriggering || p();
    }, X = (U) => {
      var pe;
      const K = (pe = a.value) == null ? void 0 : pe.popperContentRef, G = U?.relatedTarget || document.activeElement;
      return K?.contains(G);
    };
    return Ee(() => c(u), (U) => {
      U ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ee(() => n.content, () => {
      var U, pe;
      (pe = (U = a.value) == null ? void 0 : U.updatePopper) == null || pe.call(U);
    }), t({
      contentRef: a,
      isFocusInsideContent: X
    }), (U, pe) => (P(), de(c(bw), {
      disabled: !U.teleported,
      to: c(_)
    }, {
      default: ue(() => [
        M(bo, {
          name: c(f),
          onAfterLeave: q,
          onBeforeEnter: se,
          onAfterEnter: be,
          onBeforeLeave: _e
        }, {
          default: ue(() => [
            c(N) ? Tt((P(), de(c(J_), so({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, U.$attrs, {
              "aria-label": U.ariaLabel,
              "aria-hidden": O.value,
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
              "popper-style": [U.popperStyle, c(S)],
              "reference-el": U.referenceEl,
              "trigger-target-el": U.triggerTargetEl,
              visible: c(A),
              "z-index": U.zIndex,
              onMouseenter: c(ae),
              onMouseleave: c(fe),
              onBlur: j,
              onClose: c(p)
            }), {
              default: ue(() => [
                Te(U.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [sr, c(A)]
            ]) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Tw = /* @__PURE__ */ tt(kw, [["__file", "content.vue"]]);
const Sw = le({
  name: "ElTooltip"
}), Ew = /* @__PURE__ */ le({
  ...Sw,
  props: cw,
  emits: uw,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    _w();
    const o = Xa(), a = W(), s = W(), i = () => {
      var f;
      const E = c(a);
      E && ((f = E.popperInstanceRef) == null || f.update());
    }, l = W(!1), u = W(), { show: d, hide: p, hasUpdateHandler: m } = iw({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: h } = nw({
      showAfter: Qn(r, "showAfter"),
      hideAfter: Qn(r, "hideAfter"),
      autoClose: Qn(r, "autoClose"),
      open: d,
      close: p
    }), g = R(() => Tr(r.visible) && !m.value);
    Dn(zl, {
      controlled: g,
      id: o,
      open: Gs(l),
      trigger: Qn(r, "trigger"),
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
    const I = (f) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(f);
    };
    return Of(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: I,
      updatePopper: i,
      onOpen: y,
      onClose: h,
      hide: p
    }), (f, E) => (P(), de(c(ew), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: ue(() => [
        M(mw, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: ue(() => [
            f.$slots.default ? Te(f.$slots, "default", { key: 0 }) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        M(Tw, {
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
            Te(f.$slots, "content", {}, () => [
              f.rawContent ? (P(), H("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (P(), H("span", { key: 1 }, D(f.content), 1))
            ]),
            f.showArrow ? (P(), de(c(m1), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Aw = /* @__PURE__ */ tt(Ew, [["__file", "tooltip.vue"]]);
const Cw = Tn(Aw), Iw = Qe({
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
}), Lw = le({
  name: "ElBadge"
}), Ow = /* @__PURE__ */ le({
  ...Lw,
  props: Iw,
  setup(e, { expose: t }) {
    const n = e, r = bt("badge"), o = R(() => n.isDot ? "" : ze(n.value) && ze(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = R(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: uo(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: uo((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (P(), H("div", {
      class: Y(c(r).b())
    }, [
      Te(s.$slots, "default"),
      M(bo, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ue(() => [
          Tt(b("sup", {
            class: Y([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Nt(c(a))
          }, [
            Te(s.$slots, "content", { value: c(o) }, () => [
              nn(D(c(o)), 1)
            ])
          ], 6), [
            [sr, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var xw = /* @__PURE__ */ tt(Ow, [["__file", "badge.vue"]]);
const Rw = Tn(xw), Nw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), js = Qe({
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
    values: kl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Pw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, $w = le({
  name: "ElTag"
}), Mw = /* @__PURE__ */ le({
  ...$w,
  props: js,
  emits: Pw,
  setup(e, { emit: t }) {
    const n = e, r = ea(), o = bt("tag"), a = R(() => {
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
    return (u, d) => u.disableTransitions ? (P(), H("span", {
      key: 0,
      class: Y(c(a)),
      style: Nt({ backgroundColor: u.color }),
      onClick: i
    }, [
      b("span", {
        class: Y(c(o).e("content"))
      }, [
        Te(u.$slots, "default")
      ], 2),
      u.closable ? (P(), de(c(gt), {
        key: 0,
        class: Y(c(o).e("close")),
        onClick: et(s, ["stop"])
      }, {
        default: ue(() => [
          M(c(Ra))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : re("v-if", !0)
    ], 6)) : (P(), de(bo, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ue(() => [
        b("span", {
          class: Y(c(a)),
          style: Nt({ backgroundColor: u.color }),
          onClick: i
        }, [
          b("span", {
            class: Y(c(o).e("content"))
          }, [
            Te(u.$slots, "default")
          ], 2),
          u.closable ? (P(), de(c(gt), {
            key: 0,
            class: Y(c(o).e("close")),
            onClick: et(s, ["stop"])
          }, {
            default: ue(() => [
              M(c(Ra))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : re("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Dw = /* @__PURE__ */ tt(Mw, [["__file", "tag.vue"]]);
const Fw = Tn(Dw), br = /* @__PURE__ */ new Map();
if (vt) {
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
function Mc(e, t) {
  let n = [];
  return xn(t.arg) ? n = t.arg : _n(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || d || p || m || y || t.value(r, o);
  };
}
const zw = {
  beforeMount(e, t) {
    br.has(e) || br.set(e, []), br.get(e).push({
      documentHandler: Mc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    br.has(e) || br.set(e, []);
    const n = br.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Mc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    br.delete(e);
  }
}, Bw = Qe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ke(Object)
  },
  size: Za,
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
  ...gd
}), pn = {};
le({
  name: "ElConfigProvider",
  props: Bw,
  setup(e, { slots: t }) {
    Ee(() => e.message, (r) => {
      Object.assign(pn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = yd(e);
    return () => Te(t, "default", { config: n?.value });
  }
});
const Vw = 100, jw = 600, Dc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Vw, delay: o = jw } = st(n) ? {} : n;
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
}, Uw = Qe({
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
  size: Za,
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
  ...Wr(["ariaLabel"])
}), Hw = {
  [lr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [ar]: (e) => ze(e) || or(e),
  [It]: (e) => ze(e) || or(e)
}, Ww = le({
  name: "ElInputNumber"
}), Gw = /* @__PURE__ */ le({
  ...Ww,
  props: Uw,
  emits: Hw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = wl(), a = bt("input-number"), s = W(), i = Dr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Qa(), u = R(() => ze(r.modelValue) && r.modelValue <= r.min), d = R(() => ze(r.modelValue) && r.modelValue >= r.max), p = R(() => {
      const j = f(r.step);
      return Rn(r.precision) ? Math.max(f(r.modelValue), j) : (j > r.precision, r.precision);
    }), m = R(() => r.controls && r.controlsPosition === "right"), y = ea(), h = Al(), g = R(() => {
      if (i.userInput !== null)
        return i.userInput;
      let j = i.currentValue;
      if (or(j))
        return "";
      if (ze(j)) {
        if (Number.isNaN(j))
          return "";
        Rn(r.precision) || (j = j.toFixed(r.precision));
      }
      return j;
    }), I = (j, X) => {
      if (Rn(X) && (X = p.value), X === 0)
        return Math.round(j);
      let U = String(j);
      const pe = U.indexOf(".");
      if (pe === -1 || !U.replace(".", "").split("")[pe + X])
        return j;
      const De = U.length;
      return U.charAt(De - 1) === "5" && (U = `${U.slice(0, Math.max(0, De - 1))}6`), Number.parseFloat(Number(U).toFixed(X));
    }, f = (j) => {
      if (or(j))
        return 0;
      const X = j.toString(), U = X.indexOf(".");
      let pe = 0;
      return U !== -1 && (pe = X.length - U - 1), pe;
    }, E = (j, X = 1) => ze(j) ? I(j + r.step * X) : i.currentValue, N = () => {
      if (r.readonly || h.value || d.value)
        return;
      const j = Number(g.value) || 0, X = E(j);
      S(X), n(ar, i.currentValue), _e();
    }, A = () => {
      if (r.readonly || h.value || u.value)
        return;
      const j = Number(g.value) || 0, X = E(j, -1);
      S(X), n(ar, i.currentValue), _e();
    }, _ = (j, X) => {
      const { max: U, min: pe, step: K, precision: G, stepStrictly: De, valueOnClear: me } = r;
      U < pe && _l("InputNumber", "min should not be greater than max.");
      let he = Number(j);
      if (or(j) || Number.isNaN(he))
        return null;
      if (j === "") {
        if (me === null)
          return null;
        he = Vt(me) ? { min: pe, max: U }[me] : me;
      }
      return De && (he = I(Math.round(he / K) * K, G), he !== j && X && n(It, he)), Rn(G) || (he = I(he, G)), (he > U || he < pe) && (he = he > U ? U : pe, X && n(It, he)), he;
    }, S = (j, X = !0) => {
      var U;
      const pe = i.currentValue, K = _(j);
      if (!X) {
        n(It, K);
        return;
      }
      pe === K && j || (i.userInput = null, n(It, K), pe !== K && n(lr, K, pe), r.validateEvent && ((U = l?.validate) == null || U.call(l, "change").catch((G) => void 0)), i.currentValue = K);
    }, O = (j) => {
      i.userInput = j;
      const X = j === "" ? null : Number(j);
      n(ar, X), S(X, !1);
    }, q = (j) => {
      const X = j !== "" ? Number(j) : "";
      (ze(X) && !Number.isNaN(X) || j === "") && S(X), _e(), i.userInput = null;
    }, Z = () => {
      var j, X;
      (X = (j = s.value) == null ? void 0 : j.focus) == null || X.call(j);
    }, ae = () => {
      var j, X;
      (X = (j = s.value) == null ? void 0 : j.blur) == null || X.call(j);
    }, fe = (j) => {
      n("focus", j);
    }, se = (j) => {
      var X, U;
      i.userInput = null, Ed() && i.currentValue === null && ((X = s.value) != null && X.input) && (s.value.input.value = ""), n("blur", j), r.validateEvent && ((U = l?.validate) == null || U.call(l, "blur").catch((pe) => void 0));
    }, _e = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, be = (j) => {
      document.activeElement === j.target && j.preventDefault();
    };
    return Ee(() => r.modelValue, (j, X) => {
      const U = _(j, !0);
      i.userInput === null && U !== X && (i.currentValue = U);
    }, { immediate: !0 }), dt(() => {
      var j;
      const { min: X, max: U, modelValue: pe } = r, K = (j = s.value) == null ? void 0 : j.input;
      if (K.setAttribute("role", "spinbutton"), Number.isFinite(U) ? K.setAttribute("aria-valuemax", String(U)) : K.removeAttribute("aria-valuemax"), Number.isFinite(X) ? K.setAttribute("aria-valuemin", String(X)) : K.removeAttribute("aria-valuemin"), K.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), K.setAttribute("aria-disabled", String(h.value)), !ze(pe) && pe != null) {
        let G = Number(pe);
        Number.isNaN(G) && (G = null), n(It, G);
      }
      K.addEventListener("wheel", be, { passive: !1 });
    }), su(() => {
      var j, X;
      const U = (j = s.value) == null ? void 0 : j.input;
      U?.setAttribute("aria-valuenow", `${(X = i.currentValue) != null ? X : ""}`);
    }), t({
      focus: Z,
      blur: ae
    }), (j, X) => (P(), H("div", {
      class: Y([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !j.controls),
        c(a).is("controls-right", c(m))
      ]),
      onDragstart: et(() => {
      }, ["prevent"])
    }, [
      j.controls ? Tt((P(), H("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: Y([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: vn(A, ["enter"])
      }, [
        Te(j.$slots, "decrease-icon", {}, () => [
          M(c(gt), null, {
            default: ue(() => [
              c(m) ? (P(), de(c(kd), { key: 0 })) : (P(), de(c(yy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Dc), A]
      ]) : re("v-if", !0),
      j.controls ? Tt((P(), H("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: Y([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: vn(N, ["enter"])
      }, [
        Te(j.$slots, "increase-icon", {}, () => [
          M(c(gt), null, {
            default: ue(() => [
              c(m) ? (P(), de(c(sy), { key: 0 })) : (P(), de(c(wy), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Dc), N]
      ]) : re("v-if", !0),
      M(c(Gy), {
        id: j.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: j.step,
        "model-value": c(g),
        placeholder: j.placeholder,
        readonly: j.readonly,
        disabled: c(h),
        size: c(y),
        max: j.max,
        min: j.min,
        name: j.name,
        "aria-label": j.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          vn(et(N, ["prevent"]), ["up"]),
          vn(et(A, ["prevent"]), ["down"])
        ],
        onBlur: se,
        onFocus: fe,
        onInput: O,
        onChange: q
      }, xf({
        _: 2
      }, [
        j.$slots.prefix ? {
          name: "prefix",
          fn: ue(() => [
            Te(j.$slots, "prefix")
          ])
        } : void 0,
        j.$slots.suffix ? {
          name: "suffix",
          fn: ue(() => [
            Te(j.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Kw = /* @__PURE__ */ tt(Gw, [["__file", "input-number.vue"]]);
const qw = Tn(Kw);
function Yw() {
  const e = kr(), t = W(0), n = 11, r = R(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return On(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Jd = Symbol("ElSelectGroup"), ns = Symbol("ElSelect");
function Zw(e, t) {
  const n = Ve(ns), r = Ve(Jd, { disabled: !1 }), o = R(() => d(_r(n.props.modelValue), e.value)), a = R(() => {
    var y;
    if (n.props.multiple) {
      const h = _r((y = n.props.modelValue) != null ? y : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = R(() => e.label || (rn(e.value) ? "" : e.value)), i = R(() => e.value || e.label || ""), l = R(() => e.disabled || t.groupDisabled || a.value), u = qt(), d = (y = [], h) => {
    if (rn(e.value)) {
      const g = n.props.valueKey;
      return y && y.some((I) => Rf(wr(I, g)) === wr(h, g));
    } else
      return y && y.includes(h);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (y) => {
    const h = new RegExp(Nw(y), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return Ee(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ee(() => e.value, (y, h) => {
    const { remote: g, valueKey: I } = n.props;
    if ((g ? y !== h : !Do(y, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (I && rn(y) && rn(h) && y[I] === h[I])
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
const Xw = le({
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
    const t = bt("select"), n = Xa(), r = R(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(m))
    ]), o = Dr({
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
    } = Zw(e, o), { visible: p, hover: m } = Ks(o), y = qt().proxy;
    l.onOptionCreate(y), Bn(() => {
      const g = y.value, { selected: I } = l.states, f = I.some((E) => E.value === y.value);
      it(() => {
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
function Qw(e, t, n, r, o, a) {
  return Tt((P(), H("li", {
    id: e.id,
    class: Y(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: et(e.selectOptionClick, ["stop"])
  }, [
    Te(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [sr, e.visible]
  ]);
}
var Vl = /* @__PURE__ */ tt(Xw, [["render", Qw], ["__file", "option.vue"]]);
const Jw = le({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ve(ns), t = bt("select"), n = R(() => e.props.popperClass), r = R(() => e.props.multiple), o = R(() => e.props.fitInputWidth), a = W("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return dt(() => {
      s(), On(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function ek(e, t, n, r, o, a) {
  return P(), H("div", {
    class: Y([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Nt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), H("div", {
      key: 0,
      class: Y(e.ns.be("dropdown", "header"))
    }, [
      Te(e.$slots, "header")
    ], 2)) : re("v-if", !0),
    Te(e.$slots, "default"),
    e.$slots.footer ? (P(), H("div", {
      key: 1,
      class: Y(e.ns.be("dropdown", "footer"))
    }, [
      Te(e.$slots, "footer")
    ], 2)) : re("v-if", !0)
  ], 6);
}
var tk = /* @__PURE__ */ tt(Jw, [["render", ek], ["__file", "select-dropdown.vue"]]);
const nk = (e, t) => {
  const { t: n } = wl(), r = Xa(), o = bt("select"), a = bt("input"), s = Dr({
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
  }), i = W(null), l = W(null), u = W(null), d = W(null), p = W(null), m = W(null), y = W(null), h = W(null), g = W(null), I = W(null), f = W(null), {
    isComposing: E,
    handleCompositionStart: N,
    handleCompositionUpdate: A,
    handleCompositionEnd: _
  } = Od({
    afterComposition: ($) => Ye($)
  }), { wrapperRef: S, isFocused: O, handleBlur: q } = Ld(p, {
    beforeFocus() {
      return X.value;
    },
    afterFocus() {
      e.automaticDropdown && !Z.value && (Z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur($) {
      var J, Se;
      return ((J = u.value) == null ? void 0 : J.isFocusInsideContent($)) || ((Se = d.value) == null ? void 0 : Se.isFocusInsideContent($));
    },
    afterBlur() {
      Z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Z = W(!1), ae = W(), { form: fe, formItem: se } = Qa(), { inputId: _e } = El(e, {
    formItemContext: se
  }), { valueOnClear: be, isEmptyValue: j } = Xb(e), X = R(() => e.disabled || fe?.disabled), U = R(() => xn(e.modelValue) ? e.modelValue.length > 0 : !j(e.modelValue)), pe = R(() => {
    var $;
    return ($ = fe?.statusIcon) != null ? $ : !1;
  }), K = R(() => e.clearable && !X.value && s.inputHovering && U.value), G = R(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = R(() => o.is("reverse", G.value && Z.value)), me = R(() => se?.validateState || ""), he = R(() => Sd[me.value]), ye = R(() => e.remote ? 300 : 0), Q = R(() => e.remote && !s.inputValue && s.options.size === 0), Ae = R(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ge.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ge = R(() => ve.value.filter(($) => $.visible).length), ve = R(() => {
    const $ = Array.from(s.options.values()), J = [];
    return s.optionValues.forEach((Se) => {
      const Ke = $.findIndex((mt) => mt.value === Se);
      Ke > -1 && J.push($[Ke]);
    }), J.length >= $.length ? J : $;
  }), qe = R(() => Array.from(s.cachedOptions.values())), _t = R(() => {
    const $ = ve.value.filter((J) => !J.created).some((J) => J.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !$;
  }), Je = () => {
    e.filterable && st(e.filterMethod) || e.filterable && e.remote && st(e.remoteMethod) || ve.value.forEach(($) => {
      var J;
      (J = $.updateOption) == null || J.call($, s.inputValue);
    });
  }, ft = ea(), pt = R(() => ["small"].includes(ft.value) ? "small" : "default"), St = R({
    get() {
      return Z.value && !Q.value;
    },
    set($) {
      Z.value = $;
    }
  }), Et = R(() => {
    if (e.multiple && !Rn(e.modelValue))
      return _r(e.modelValue).length === 0 && !s.inputValue;
    const $ = xn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Rn($) ? !s.inputValue : !0;
  }), nt = R(() => {
    var $;
    const J = ($ = e.placeholder) != null ? $ : n("el.select.placeholder");
    return e.multiple || !U.value ? J : s.selectedLabel;
  }), wt = R(() => Fs ? null : "mouseenter");
  Ee(() => e.modelValue, ($, J) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), B(), !Do($, J) && e.validateEvent && se?.validate("change").catch((Se) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ee(() => Z.value, ($) => {
    $ ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", $);
  }), Ee(() => s.options.entries(), () => {
    vt && (B(), e.defaultFirstOption && (e.filterable || e.remote) && Ge.value && C());
  }, {
    flush: "post"
  }), Ee([() => s.hoveringIndex, ve], ([$]) => {
    ze($) && $ > -1 ? ae.value = ve.value[$] || {} : ae.value = {}, ve.value.forEach((J) => {
      J.hover = ae.value === J;
    });
  }), au(() => {
    s.isBeforeHide || Je();
  });
  const k = ($) => {
    s.previousQuery === $ || E.value || (s.previousQuery = $, e.filterable && st(e.filterMethod) ? e.filterMethod($) : e.filterable && e.remote && st(e.remoteMethod) && e.remoteMethod($), e.defaultFirstOption && (e.filterable || e.remote) && Ge.value ? it(C) : it(Le));
  }, C = () => {
    const $ = ve.value.filter((mt) => mt.visible && !mt.disabled && !mt.states.groupDisabled), J = $.find((mt) => mt.created), Se = $[0], Ke = ve.value.map((mt) => mt.value);
    s.hoveringIndex = jn(Ke, J || Se);
  }, B = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const J = xn(e.modelValue) ? e.modelValue[0] : e.modelValue, Se = ee(J);
      s.selectedLabel = Se.currentLabel, s.selected = [Se];
      return;
    }
    const $ = [];
    Rn(e.modelValue) || _r(e.modelValue).forEach((J) => {
      $.push(ee(J));
    }), s.selected = $;
  }, ee = ($) => {
    let J;
    const Se = Ah($);
    for (let ht = s.cachedOptions.size - 1; ht >= 0; ht--) {
      const Dt = qe.value[ht];
      if (Se ? wr(Dt.value, e.valueKey) === wr($, e.valueKey) : Dt.value === $) {
        J = {
          value: $,
          currentLabel: Dt.currentLabel,
          get isDisabled() {
            return Dt.isDisabled;
          }
        };
        break;
      }
    }
    if (J)
      return J;
    const Ke = Se ? $.label : $ ?? "";
    return {
      value: $,
      currentLabel: Ke
    };
  }, Le = () => {
    s.hoveringIndex = ve.value.findIndex(($) => s.selected.some((J) => je(J) === je($)));
  }, ge = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, T = () => {
    s.collapseItemWidth = I.value.getBoundingClientRect().width;
  }, F = () => {
    var $, J;
    (J = ($ = u.value) == null ? void 0 : $.updatePopper) == null || J.call($);
  }, we = () => {
    var $, J;
    (J = ($ = d.value) == null ? void 0 : $.updatePopper) == null || J.call($);
  }, Re = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), k(s.inputValue);
  }, Ye = ($) => {
    if (s.inputValue = $.target.value, e.remote)
      Mt();
    else
      return Re();
  }, Mt = ub(() => {
    Re();
  }, ye.value), Ze = ($) => {
    Do(e.modelValue, $) || t(lr, $);
  }, an = ($) => db($, (J) => {
    const Se = s.cachedOptions.get(J);
    return Se && !Se.disabled && !Se.states.groupDisabled;
  }), Ir = ($) => {
    if (e.multiple && $.code !== $n.delete && $.target.value.length <= 0) {
      const J = _r(e.modelValue).slice(), Se = an(J);
      if (Se < 0)
        return;
      const Ke = J[Se];
      J.splice(Se, 1), t(It, J), Ze(J), t("remove-tag", Ke);
    }
  }, Lr = ($, J) => {
    const Se = s.selected.indexOf(J);
    if (Se > -1 && !X.value) {
      const Ke = _r(e.modelValue).slice();
      Ke.splice(Se, 1), t(It, Ke), Ze(Ke), t("remove-tag", J.value);
    }
    $.stopPropagation(), Un();
  }, dr = ($) => {
    $.stopPropagation();
    const J = e.multiple ? [] : be.value;
    if (e.multiple)
      for (const Se of s.selected)
        Se.isDisabled && J.push(Se.value);
    t(It, J), Ze(J), s.hoveringIndex = -1, Z.value = !1, t("clear"), Un();
  }, Or = ($) => {
    var J;
    if (e.multiple) {
      const Se = _r((J = e.modelValue) != null ? J : []).slice(), Ke = jn(Se, $);
      Ke > -1 ? Se.splice(Ke, 1) : (e.multipleLimit <= 0 || Se.length < e.multipleLimit) && Se.push($.value), t(It, Se), Ze(Se), $.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(It, $.value), Ze($.value), Z.value = !1;
    Un(), !Z.value && it(() => {
      dn($);
    });
  }, jn = ($ = [], J) => Rn(J) ? -1 : rn(J.value) ? $.findIndex((Se) => Do(wr(Se, e.valueKey), je(J))) : $.indexOf(J.value), dn = ($) => {
    var J, Se, Ke, mt, ht;
    const Dt = xn($) ? $[0] : $;
    let Lt = null;
    if (Dt?.value) {
      const En = ve.value.filter((Nr) => Nr.value === Dt.value);
      En.length > 0 && (Lt = En[0].$el);
    }
    if (u.value && Lt) {
      const En = (mt = (Ke = (Se = (J = u.value) == null ? void 0 : J.popperRef) == null ? void 0 : Se.contentRef) == null ? void 0 : Ke.querySelector) == null ? void 0 : mt.call(Ke, `.${o.be("dropdown", "wrap")}`);
      En && Jb(En, Lt);
    }
    (ht = f.value) == null || ht.handleScroll();
  }, Zt = ($) => {
    s.options.set($.value, $), s.cachedOptions.set($.value, $);
  }, Sn = ($, J) => {
    s.options.get($) === J && s.options.delete($);
  }, xr = R(() => {
    var $, J;
    return (J = ($ = u.value) == null ? void 0 : $.popperRef) == null ? void 0 : J.contentRef;
  }), fr = () => {
    s.isBeforeHide = !1, it(() => {
      var $;
      ($ = f.value) == null || $.update(), dn(s.selected);
    });
  }, Un = () => {
    var $;
    ($ = p.value) == null || $.focus();
  }, pr = () => {
    var $;
    if (Z.value) {
      Z.value = !1, it(() => {
        var J;
        return (J = p.value) == null ? void 0 : J.blur();
      });
      return;
    }
    ($ = p.value) == null || $.blur();
  }, mr = ($) => {
    dr($);
  }, Rr = ($) => {
    if (Z.value = !1, O.value) {
      const J = new FocusEvent("focus", $);
      it(() => q(J));
    }
  }, Hn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, hr = () => {
    X.value || (Fs && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, _o = () => {
    if (!Z.value)
      hr();
    else {
      const $ = ve.value[s.hoveringIndex];
      $ && !$.isDisabled && Or($);
    }
  }, je = ($) => rn($.value) ? wr($.value, e.valueKey) : $.value, fn = R(() => ve.value.filter(($) => $.visible).every(($) => $.isDisabled)), Gr = R(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Kr = R(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), gr = ($) => {
    if (!Z.value) {
      Z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ge.value === 0 || E.value) && !fn.value) {
      $ === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : $ === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const J = ve.value[s.hoveringIndex];
      (J.isDisabled || !J.visible) && gr($), it(() => dn(ae.value));
    }
  }, qr = () => {
    if (!l.value)
      return 0;
    const $ = window.getComputedStyle(l.value);
    return Number.parseFloat($.gap || "6px");
  }, Wn = R(() => {
    const $ = qr();
    return { maxWidth: `${I.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - $ : s.selectionWidth}px` };
  }), wo = R(() => ({ maxWidth: `${s.selectionWidth}px` })), Ut = ($) => {
    t("popup-scroll", $);
  };
  return On(l, ge), On(h, F), On(S, F), On(g, we), On(I, T), dt(() => {
    B();
  }), {
    inputId: _e,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: Z,
    optionsArray: ve,
    hoverOption: ae,
    selectSize: ft,
    filteredOptionsCount: Ge,
    updateTooltip: F,
    updateTagTooltip: we,
    debouncedOnInputChange: Mt,
    onInput: Ye,
    deletePrevTag: Ir,
    deleteTag: Lr,
    deleteSelected: dr,
    handleOptionSelect: Or,
    scrollToOption: dn,
    hasModelValue: U,
    shouldShowPlaceholder: Et,
    currentPlaceholder: nt,
    mouseEnterEventName: wt,
    needStatusIcon: pe,
    showClose: K,
    iconComponent: G,
    iconReverse: De,
    validateState: me,
    validateIcon: he,
    showNewOption: _t,
    updateOptions: Je,
    collapseTagSize: pt,
    setSelected: B,
    selectDisabled: X,
    emptyText: Ae,
    handleCompositionStart: N,
    handleCompositionUpdate: A,
    handleCompositionEnd: _,
    onOptionCreate: Zt,
    onOptionDestroy: Sn,
    handleMenuEnter: fr,
    focus: Un,
    blur: pr,
    handleClearClick: mr,
    handleClickOutside: Rr,
    handleEsc: Hn,
    toggleMenu: hr,
    selectOption: _o,
    getValueKey: je,
    navigateOptions: gr,
    dropdownMenuVisible: St,
    showTagList: Gr,
    collapseTagList: Kr,
    popupScroll: Ut,
    tagStyle: Wn,
    collapseTagStyle: wo,
    popperRef: xr,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: m,
    suffixRef: y,
    selectRef: i,
    wrapperRef: S,
    selectionRef: l,
    scrollbarRef: f,
    menuRef: h,
    tagMenuRef: g,
    collapseItemRef: I
  };
};
var rk = le({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ve(ns);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        xn(u) && u.forEach((d) => {
          var p, m, y, h;
          const g = (p = d?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? l(!Vt(d.children) && !xn(d.children) && st((m = d.children) == null ? void 0 : m.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : g === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : xn(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), Do(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const ok = Qe({
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
  size: Za,
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
  teleported: Bl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Nn,
    default: Tl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Nn,
    default: kd
  },
  tagType: { ...js.type, default: "info" },
  tagEffect: { ...js.effect, default: "light" },
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
    values: es,
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
  ...gd,
  ...Wr(["ariaLabel"])
}), Fc = "ElSelect", ak = le({
  name: Fc,
  componentName: Fc,
  components: {
    ElSelectMenu: tk,
    ElOption: Vl,
    ElOptions: rk,
    ElTag: Fw,
    ElScrollbar: l1,
    ElTooltip: Cw,
    ElIcon: gt
  },
  directives: { ClickOutside: zw },
  props: ok,
  emits: [
    It,
    lr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = R(() => {
      const { modelValue: l, multiple: u } = e, d = u ? [] : void 0;
      return xn(l) ? u ? l : d : u ? d : l;
    }), r = Dr({
      ...Ks(e),
      modelValue: n
    }), o = nk(r, t), { calculatorRef: a, inputStyle: s } = Yw();
    Dn(ns, Dr({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const i = R(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function sk(e, t, n, r, o, a) {
  const s = Pr("el-tag"), i = Pr("el-tooltip"), l = Pr("el-icon"), u = Pr("el-option"), d = Pr("el-options"), p = Pr("el-scrollbar"), m = Pr("el-select-menu"), y = Nf("click-outside");
  return Tt((P(), H("div", {
    ref: "selectRef",
    class: Y([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Pf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
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
      onHide: (h) => e.states.isBeforeHide = !1
    }, {
      default: ue(() => {
        var h;
        return [
          b("div", {
            ref: "wrapperRef",
            class: Y([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: et(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (P(), H("div", {
              key: 0,
              ref: "prefixRef",
              class: Y(e.nsSelect.e("prefix"))
            }, [
              Te(e.$slots, "prefix")
            ], 2)) : re("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: Y([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Te(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), H(kt, null, Xn(e.showTagList, (g) => (P(), H("div", {
                  key: e.getValueKey(g),
                  class: Y(e.nsSelect.e("selected-item"))
                }, [
                  M(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Nt(e.tagStyle),
                    onClose: (I) => e.deleteTag(I, g)
                  }, {
                    default: ue(() => [
                      b("span", {
                        class: Y(e.nsSelect.e("tags-text"))
                      }, [
                        Te(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          nn(D(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (P(), de(i, {
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
                      class: Y(e.nsSelect.e("selected-item"))
                    }, [
                      M(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Nt(e.collapseTagStyle)
                      }, {
                        default: ue(() => [
                          b("span", {
                            class: Y(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ue(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: Y(e.nsSelect.e("selection"))
                    }, [
                      (P(!0), H(kt, null, Xn(e.collapseTagList, (g) => (P(), H("div", {
                        key: e.getValueKey(g),
                        class: Y(e.nsSelect.e("selected-item"))
                      }, [
                        M(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (I) => e.deleteTag(I, g)
                        }, {
                          default: ue(() => [
                            b("span", {
                              class: Y(e.nsSelect.e("tags-text"))
                            }, [
                              Te(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                nn(D(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : re("v-if", !0)
              ]) : re("v-if", !0),
              b("div", {
                class: Y([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Tt(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: Y([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Nt(e.inputStyle),
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
                    vn(et((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    vn(et((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    vn(et(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    vn(et(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    vn(et(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: et(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Bo, e.states.inputValue]
                ]),
                e.filterable ? (P(), H("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: Y(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : re("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (P(), H("div", {
                key: 1,
                class: Y([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? Te(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (P(), H("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : re("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: Y(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), de(l, {
                key: 0,
                class: Y([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ue(() => [
                  (P(), de(Gt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0),
              e.showClose && e.clearIcon ? (P(), de(l, {
                key: 1,
                class: Y([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ue(() => [
                  (P(), de(Gt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : re("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (P(), de(l, {
                key: 2,
                class: Y([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ue(() => [
                  (P(), de(Gt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ue(() => [
        M(m, { ref: "menuRef" }, {
          default: ue(() => [
            e.$slots.header ? (P(), H("div", {
              key: 0,
              class: Y(e.nsSelect.be("dropdown", "header")),
              onClick: et(() => {
              }, ["stop"])
            }, [
              Te(e.$slots, "header")
            ], 10, ["onClick"])) : re("v-if", !0),
            Tt(M(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Y([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ue(() => [
                e.showNewOption ? (P(), de(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : re("v-if", !0),
                M(d, null, {
                  default: ue(() => [
                    Te(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [sr, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (P(), H("div", {
              key: 1,
              class: Y(e.nsSelect.be("dropdown", "loading"))
            }, [
              Te(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), H("div", {
              key: 2,
              class: Y(e.nsSelect.be("dropdown", "empty"))
            }, [
              Te(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : re("v-if", !0),
            e.$slots.footer ? (P(), H("div", {
              key: 3,
              class: Y(e.nsSelect.be("dropdown", "footer")),
              onClick: et(() => {
              }, ["stop"])
            }, [
              Te(e.$slots, "footer")
            ], 10, ["onClick"])) : re("v-if", !0)
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
var lk = /* @__PURE__ */ tt(ak, [["render", sk], ["__file", "select.vue"]]);
const ik = le({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = bt("select"), n = W(null), r = qt(), o = W([]);
    Dn(Jd, Dr({
      ...Ks(e)
    }));
    const a = R(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, p;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const d = _r(u), p = [];
      return d.forEach((m) => {
        var y, h;
        s(m) ? p.push(m.component.proxy) : (y = m.children) != null && y.length ? p.push(...i(m.children)) : (h = m.component) != null && h.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return dt(() => {
      l();
    }), Mb(n, l, {
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
function ck(e, t, n, r, o, a) {
  return Tt((P(), H("ul", {
    ref: "groupRef",
    class: Y(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: Y(e.ns.be("group", "title"))
    }, D(e.label), 3),
    b("li", null, [
      b("ul", {
        class: Y(e.ns.b("group"))
      }, [
        Te(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [sr, e.visible]
  ]);
}
var ef = /* @__PURE__ */ tt(ik, [["render", ck], ["__file", "option-group.vue"]]);
const uk = Tn(lk, {
  Option: Vl,
  OptionGroup: ef
}), dk = wd(Vl);
wd(ef);
const fk = (e) => ["", ...kl].includes(e), pk = Qe({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: fk
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Nn
  },
  activeActionIcon: {
    type: Nn
  },
  activeIcon: {
    type: Nn
  },
  inactiveIcon: {
    type: Nn
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
  ...Wr(["ariaLabel"])
}), mk = {
  [It]: (e) => Tr(e) || Vt(e) || ze(e),
  [lr]: (e) => Tr(e) || Vt(e) || ze(e),
  [ar]: (e) => Tr(e) || Vt(e) || ze(e)
}, tf = "ElSwitch", hk = le({
  name: tf
}), gk = /* @__PURE__ */ le({
  ...hk,
  props: pk,
  emits: mk,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Qa(), a = ea(), s = bt("switch"), { inputId: i } = El(r, {
      formItemContext: o
    }), l = Al(R(() => r.loading)), u = W(r.modelValue !== !1), d = W(), p = W(), m = R(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", f.value)
    ]), y = R(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !f.value)
    ]), h = R(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", f.value)
    ]), g = R(() => ({
      width: uo(r.width)
    }));
    Ee(() => r.modelValue, () => {
      u.value = !0;
    });
    const I = R(() => u.value ? r.modelValue : !1), f = R(() => I.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(I.value) || (n(It, r.inactiveValue), n(lr, r.inactiveValue), n(ar, r.inactiveValue)), Ee(f, (_) => {
      var S;
      d.value.checked = _, r.validateEvent && ((S = o?.validate) == null || S.call(o, "change").catch((O) => void 0));
    });
    const E = () => {
      const _ = f.value ? r.inactiveValue : r.activeValue;
      n(It, _), n(lr, _), n(ar, _), it(() => {
        d.value.checked = f.value;
      });
    }, N = () => {
      if (l.value)
        return;
      const { beforeChange: _ } = r;
      if (!_) {
        E();
        return;
      }
      const S = _();
      [
        Ci(S),
        Tr(S)
      ].includes(!0) || _l(tf, "beforeChange must return type `Promise<boolean>` or `boolean`"), Ci(S) ? S.then((q) => {
        q && E();
      }).catch((q) => {
      }) : S && E();
    }, A = () => {
      var _, S;
      (S = (_ = d.value) == null ? void 0 : _.focus) == null || S.call(_);
    };
    return dt(() => {
      d.value.checked = f.value;
    }), t({
      focus: A,
      checked: f
    }), (_, S) => (P(), H("div", {
      class: Y(c(m)),
      onClick: et(N, ["prevent"])
    }, [
      b("input", {
        id: c(i),
        ref_key: "input",
        ref: d,
        class: Y(c(s).e("input")),
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
        onChange: E,
        onKeydown: vn(N, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (P(), H("span", {
        key: 0,
        class: Y(c(y))
      }, [
        _.inactiveIcon ? (P(), de(c(gt), { key: 0 }, {
          default: ue(() => [
            (P(), de(Gt(_.inactiveIcon)))
          ]),
          _: 1
        })) : re("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (P(), H("span", {
          key: 1,
          "aria-hidden": c(f)
        }, D(_.inactiveText), 9, ["aria-hidden"])) : re("v-if", !0)
      ], 2)) : re("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: Y(c(s).e("core")),
        style: Nt(c(g))
      }, [
        _.inlinePrompt ? (P(), H("div", {
          key: 0,
          class: Y(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (P(), de(c(gt), {
            key: 0,
            class: Y(c(s).is("icon"))
          }, {
            default: ue(() => [
              (P(), de(Gt(c(f) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (P(), H("span", {
            key: 1,
            class: Y(c(s).is("text")),
            "aria-hidden": !c(f)
          }, D(c(f) ? _.activeText : _.inactiveText), 11, ["aria-hidden"])) : re("v-if", !0)
        ], 2)) : re("v-if", !0),
        b("div", {
          class: Y(c(s).e("action"))
        }, [
          _.loading ? (P(), de(c(gt), {
            key: 0,
            class: Y(c(s).is("loading"))
          }, {
            default: ue(() => [
              M(c(Td))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? Te(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (P(), de(c(gt), { key: 0 }, {
              default: ue(() => [
                (P(), de(Gt(_.activeActionIcon)))
              ]),
              _: 1
            })) : re("v-if", !0)
          ]) : c(f) ? re("v-if", !0) : Te(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (P(), de(c(gt), { key: 0 }, {
              default: ue(() => [
                (P(), de(Gt(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : re("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (P(), H("span", {
        key: 1,
        class: Y(c(h))
      }, [
        _.activeIcon ? (P(), de(c(gt), { key: 0 }, {
          default: ue(() => [
            (P(), de(Gt(_.activeIcon)))
          ]),
          _: 1
        })) : re("v-if", !0),
        !_.activeIcon && _.activeText ? (P(), H("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, D(_.activeText), 9, ["aria-hidden"])) : re("v-if", !0)
      ], 2)) : re("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var vk = /* @__PURE__ */ tt(gk, [["__file", "switch.vue"]]);
const bk = Tn(vk), nf = ["success", "info", "warning", "error"], Ft = Ad({
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
  appendTo: vt ? document.body : void 0
}), yk = Qe({
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
    type: Nn,
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
    values: nf,
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
}), _k = {
  destroy: () => !0
}, yn = $f([]), wk = (e) => {
  const t = yn.findIndex((o) => o.id === e), n = yn[t];
  let r;
  return t > 0 && (r = yn[t - 1]), { current: n, prev: r };
}, kk = (e) => {
  const { prev: t } = wk(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Tk = (e, t) => yn.findIndex((r) => r.id === e) > 0 ? 16 : t, Sk = le({
  name: "ElMessage"
}), Ek = /* @__PURE__ */ le({
  ...Sk,
  props: yk,
  emits: _k,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Ly, { ns: o, zIndex: a } = bd("message"), { currentZIndex: s, nextZIndex: i } = a, l = W(), u = W(!1), d = W(0);
    let p;
    const m = R(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = R(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && Na[O] };
    }), h = R(() => n.icon || Na[n.type] || ""), g = R(() => kk(n.id)), I = R(() => Tk(n.id, n.offset) + g.value), f = R(() => d.value + I.value), E = R(() => ({
      top: `${I.value}px`,
      zIndex: s.value
    }));
    function N() {
      n.duration !== 0 && ({ stop: p } = ld(() => {
        _();
      }, n.duration));
    }
    function A() {
      p?.();
    }
    function _() {
      u.value = !1;
    }
    function S({ code: O }) {
      O === $n.esc && _();
    }
    return dt(() => {
      N(), i(), u.value = !0;
    }), Ee(() => n.repeatNum, () => {
      A(), N();
    }), wn(document, "keydown", S), On(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: _
    }), (O, q) => (P(), de(bo, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (Z) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ue(() => [
        Tt(b("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: l,
          class: Y([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: Nt(c(E)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: N
        }, [
          O.repeatNum > 1 ? (P(), de(c(Rw), {
            key: 0,
            value: O.repeatNum,
            type: c(m),
            class: Y(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : re("v-if", !0),
          c(h) ? (P(), de(c(gt), {
            key: 1,
            class: Y([c(o).e("icon"), c(y)])
          }, {
            default: ue(() => [
              (P(), de(Gt(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : re("v-if", !0),
          Te(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (P(), H(kt, { key: 1 }, [
              re(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: Y(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), H("p", {
              key: 0,
              class: Y(c(o).e("content"))
            }, D(O.message), 3))
          ]),
          O.showClose ? (P(), de(c(gt), {
            key: 2,
            class: Y(c(o).e("closeBtn")),
            onClick: et(_, ["stop"])
          }, {
            default: ue(() => [
              M(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : re("v-if", !0)
        ], 46, ["id"]), [
          [sr, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ak = /* @__PURE__ */ tt(Ek, [["__file", "message.vue"]]);
let Ck = 1;
const rf = (e) => {
  const t = !e || Vt(e) || Vo(e) || st(e) ? { message: e } : e, n = {
    ...Ft,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Vt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    _n(r) || (r = document.body), n.appendTo = r;
  }
  return Tr(pn.grouping) && !n.grouping && (n.grouping = pn.grouping), ze(pn.duration) && n.duration === 3e3 && (n.duration = pn.duration), ze(pn.offset) && n.offset === 16 && (n.offset = pn.offset), Tr(pn.showClose) && !n.showClose && (n.showClose = pn.showClose), n;
}, Ik = (e) => {
  const t = yn.indexOf(e);
  if (t === -1)
    return;
  yn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Lk = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Ck++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), Ik(d);
    },
    onDestroy: () => {
      ka(null, a);
    }
  }, i = M(Ak, s, st(s.message) || Vo(s.message) ? {
    default: st(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || go._context, ka(i, a), e.appendChild(a.firstElementChild);
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
}, go = (e = {}, t) => {
  if (!vt)
    return { close: () => {
    } };
  const n = rf(e);
  if (n.grouping && yn.length) {
    const o = yn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ze(pn.max) && yn.length >= pn.max)
    return { close: () => {
    } };
  const r = Lk(n, t);
  return yn.push(r), r.handler;
};
nf.forEach((e) => {
  go[e] = (t = {}, n) => {
    const r = rf(t);
    return go({ ...r, type: e }, n);
  };
});
function Ok(e) {
  for (const t of yn)
    (!e || e === t.props.type) && t.handler.close();
}
go.closeAll = Ok;
go._context = null;
const xk = _d(go, "$message"), of = [
  "success",
  "info",
  "warning",
  "error"
], Rk = Qe({
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
    type: Nn
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
    values: [...of, ""],
    default: ""
  },
  zIndex: Number
}), Nk = {
  destroy: () => !0
}, Pk = le({
  name: "ElNotification"
}), $k = /* @__PURE__ */ le({
  ...Pk,
  props: Rk,
  emits: Nk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = bd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = Iy, l = W(!1);
    let u;
    const d = R(() => {
      const N = n.type;
      return N && Na[n.type] ? r.m(N) : "";
    }), p = R(() => n.type && Na[n.type] || n.icon), m = R(() => n.position.endsWith("right") ? "right" : "left"), y = R(() => n.position.startsWith("top") ? "top" : "bottom"), h = R(() => {
      var N;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (N = n.zIndex) != null ? N : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = ld(() => {
        l.value && f();
      }, n.duration));
    }
    function I() {
      u?.();
    }
    function f() {
      l.value = !1;
    }
    function E({ code: N }) {
      N === $n.delete || N === $n.backspace ? I() : N === $n.esc ? l.value && f() : g();
    }
    return dt(() => {
      g(), a(), l.value = !0;
    }), wn(document, "keydown", E), t({
      visible: l,
      close: f
    }), (N, A) => (P(), de(bo, {
      name: c(r).b("fade"),
      onBeforeLeave: N.onClose,
      onAfterLeave: (_) => N.$emit("destroy"),
      persisted: ""
    }, {
      default: ue(() => [
        Tt(b("div", {
          id: N.id,
          class: Y([c(r).b(), N.customClass, c(m)]),
          style: Nt(c(h)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: g,
          onClick: N.onClick
        }, [
          c(p) ? (P(), de(c(gt), {
            key: 0,
            class: Y([c(r).e("icon"), c(d)])
          }, {
            default: ue(() => [
              (P(), de(Gt(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : re("v-if", !0),
          b("div", {
            class: Y(c(r).e("group"))
          }, [
            b("h2", {
              class: Y(c(r).e("title")),
              textContent: D(N.title)
            }, null, 10, ["textContent"]),
            Tt(b("div", {
              class: Y(c(r).e("content")),
              style: Nt(N.title ? void 0 : { margin: 0 })
            }, [
              Te(N.$slots, "default", {}, () => [
                N.dangerouslyUseHTMLString ? (P(), H(kt, { key: 1 }, [
                  re(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: N.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), H("p", { key: 0 }, D(N.message), 1))
              ])
            ], 6), [
              [sr, N.message]
            ]),
            N.showClose ? (P(), de(c(gt), {
              key: 0,
              class: Y(c(r).e("closeBtn")),
              onClick: et(f, ["stop"])
            }, {
              default: ue(() => [
                M(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : re("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [sr, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Mk = /* @__PURE__ */ tt($k, [["__file", "notification.vue"]]);
const Ma = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Us = 16;
let Dk = 1;
const vo = function(e = {}, t) {
  if (!vt)
    return { close: () => {
    } };
  (Vt(e) || Vo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Ma[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Us;
  }), r += Us;
  const o = `notification_${Dk++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      Fk(o, n, a);
    }
  };
  let i = document.body;
  _n(e.appendTo) ? i = e.appendTo : Vt(e.appendTo) && (i = document.querySelector(e.appendTo)), _n(i) || (i = document.body);
  const l = document.createElement("div"), u = M(Mk, s, st(s.message) ? s.message : Vo(s.message) ? () => s.message : null);
  return u.appContext = Rn(t) ? vo._context : t, u.props.onDestroy = () => {
    ka(null, l);
  }, ka(u, l), Ma[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
of.forEach((e) => {
  vo[e] = (t = {}, n) => ((Vt(t) || Vo(t)) && (t = {
    message: t
  }), vo({ ...t, type: e }, n));
});
function Fk(e, t, n) {
  const r = Ma[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: d, component: p } = r[u].vm, m = Number.parseInt(d.style[i], 10) - s - Us;
      p.props.offset = m;
    }
}
function zk() {
  for (const e of Object.values(Ma))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
vo.closeAll = zk;
vo._context = null;
const Bk = _d(vo, "$notify"), ot = {
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
    r === "center" ? xk({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Bk({
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
function Vk(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function $t(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var zc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(zc || (zc = {}));
async function jk(e, t) {
  await $t("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Uk(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return $t("plugin:event|listen", {
    event: e,
    target: o,
    handler: Vk(t)
  }).then((a) => async () => jk(e, a));
}
const Hk = "snippets-code:developer-mode", af = "snippets-code:frontend-diagnostics", Wk = 240, Oo = "[REDACTED]", _a = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Oo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Oo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Oo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Oo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Oo}`
), sf = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return _a(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return _a(
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
    return _a(String(e));
  }
}, Gk = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Kk = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(af) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, jl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Hk) === "true";
  } catch {
    return !1;
  }
}, qk = (e, t, n) => {
  if (!jl() || typeof localStorage > "u") return;
  const r = Kk();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Gk(),
    message: _a(t),
    data: sf(n)
  });
  try {
    localStorage.setItem(
      af,
      JSON.stringify(r.slice(-Wk))
    );
  } catch {
  }
}, Yk = () => jl(), Zk = (e) => e === "warn" || e === "error" || !1 || !1 || jl(), pa = (e, t, n) => {
  qk(e, t, n), Zk(e) && $t("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : sf(n)
  }).catch(() => {
  });
}, mn = {
  info: (e, t, ...n) => {
    pa("info", e, t);
  },
  error: (e, t) => {
    pa("error", e, t);
  },
  warn: (e, t) => {
    pa("warn", e, t);
  },
  debug: (e, t) => {
    Yk() && pa("debug", e, t);
  }
};
async function lf() {
  return await $t("local_ai_get_config");
}
async function wa(e) {
  return await $t("local_ai_save_config", { config: e });
}
async function cf(e) {
  return await $t("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Xk() {
  return await $t("local_ai_get_runtime_status");
}
async function uf() {
  return await $t("local_ai_get_status");
}
async function Qk(e) {
  return await $t("local_ai_start_service", {
    config: e ?? null
  });
}
async function df() {
  return await $t("local_ai_restart_service");
}
async function Jk() {
  await $t("local_ai_stop_service");
}
function ff() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function eT(e, t, n = {}) {
  const r = n.requestId ?? ff(), o = await Uk(
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
async function tT() {
  return await $t("local_ai_get_chat_histories");
}
async function nT(e) {
  return await $t("local_ai_save_chat_history", {
    history: e
  });
}
async function rT(e) {
  return await $t("local_ai_delete_chat_history", {
    historyId: e
  });
}
const oT = /* @__PURE__ */ new Set([
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
]), aT = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), sT = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), lT = 5, iT = 1024 * 1024, cT = 5 * 1024 * 1024, Bc = 4e4, pf = (e) => e.split(".").pop()?.toLowerCase() ?? "", uT = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, Vc = (e) => aT.has(e.type), jc = (e) => e.type.startsWith("text/") || oT.has(pf(e.name)), dT = (e) => sT.has(pf(e.name)), fT = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), pT = async (e) => {
  const t = await e.text();
  return t.length <= Bc ? { text: t, truncated: !1 } : {
    text: t.slice(0, Bc),
    truncated: !0
  };
}, mT = (e, t) => {
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
function Uc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function hT(e) {
  if (Array.isArray(e)) return e;
}
function gT(e, t) {
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
function vT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bT(e, t) {
  return hT(e) || gT(e, t) || yT(e, t) || vT();
}
function yT(e, t) {
  if (e) {
    if (typeof e == "string") return Uc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Uc(e, t) : void 0;
  }
}
const mf = Object.entries, Hc = Object.setPrototypeOf, _T = Object.isFrozen, wT = Object.getPrototypeOf, kT = Object.getOwnPropertyDescriptor;
let Yt = Object.freeze, un = Object.seal, oo = Object.create, hf = typeof Reflect < "u" && Reflect, Hs = hf.apply, Ws = hf.construct;
Yt || (Yt = function(t) {
  return t;
});
un || (un = function(t) {
  return t;
});
Hs || (Hs = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Ws || (Ws = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Jr = yt(Array.prototype.forEach), TT = yt(Array.prototype.lastIndexOf), Wc = yt(Array.prototype.pop), eo = yt(Array.prototype.push), ST = yt(Array.prototype.splice), Wt = Array.isArray, Po = yt(String.prototype.toLowerCase), hs = yt(String.prototype.toString), Gc = yt(String.prototype.match), to = yt(String.prototype.replace), Kc = yt(String.prototype.indexOf), ET = yt(String.prototype.trim), AT = yt(Number.prototype.toString), CT = yt(Boolean.prototype.toString), qc = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), Yc = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), lt = yt(Object.prototype.hasOwnProperty), xo = yt(Object.prototype.toString), Rt = yt(RegExp.prototype.test), Ro = IT(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Hs(e, t, r);
  };
}
function IT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ws(e, n);
  };
}
function Ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Po;
  if (Hc && Hc(e, null), !Wt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (_T(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function LT(e) {
  for (let t = 0; t < e.length; t++)
    lt(e, t) || (e[t] = null);
  return e;
}
function zt(e) {
  const t = oo(null);
  for (const r of mf(e)) {
    var n = bT(r, 2);
    const o = n[0], a = n[1];
    lt(e, o) && (Wt(a) ? t[o] = LT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = zt(a) : t[o] = a);
  }
  return t;
}
function OT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return AT(e);
    case "boolean":
      return CT(e);
    case "bigint":
      return qc ? qc(e) : "0";
    case "symbol":
      return Yc ? Yc(e) : "Symbol()";
    case "undefined":
      return xo(e);
    case "function":
    case "object": {
      if (e === null)
        return xo(e);
      const t = e, n = Ln(t, "toString");
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
function Ln(e, t) {
  for (; e !== null; ) {
    const r = kT(e, t);
    if (r) {
      if (r.get)
        return yt(r.get);
      if (typeof r.value == "function")
        return yt(r.value);
    }
    e = wT(e);
  }
  function n() {
    return null;
  }
  return n;
}
function xT(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Zc = Yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gs = Yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vs = Yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), RT = Yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), bs = Yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), NT = Yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xc = Yt(["#text"]), Qc = Yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ys = Yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Jc = Yt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ma = Yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), PT = un(/{{[\w\W]*|^[\w\W]*}}/g), $T = un(/<%[\w\W]*|^[\w\W]*%>/g), MT = un(/\${[\w\W]*/g), DT = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), FT = un(/^aria-[\-\w]+$/), eu = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zT = un(/^(?:\w+script|data):/i), BT = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), VT = un(/^html$/i), jT = un(/^[a-z][.\w]*(-[.\w]+)+$/i), In = {
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
}, UT = function() {
  return typeof window > "u" ? null : window;
}, HT = function(t, n) {
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
}, tu = function() {
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
function gf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : UT();
  const t = (ie) => gf(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== In.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, p = e.trustedTypes, m = i.prototype, y = Ln(m, "cloneNode"), h = Ln(m, "remove"), g = Ln(m, "nextSibling"), I = Ln(m, "childNodes"), f = Ln(m, "parentNode"), E = Ln(m, "shadowRoot"), N = Ln(m, "attributes"), A = s && s.prototype ? Ln(s.prototype, "nodeType") : null, _ = s && s.prototype ? Ln(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let S, O = "";
  const q = n, Z = q.implementation, ae = q.createNodeIterator, fe = q.createDocumentFragment, se = q.getElementsByTagName, _e = r.importNode;
  let be = tu();
  t.isSupported = typeof mf == "function" && typeof f == "function" && Z && Z.createHTMLDocument !== void 0;
  const j = PT, X = $T, U = MT, pe = DT, K = FT, G = zT, De = BT, me = jT;
  let he = eu, ye = null;
  const Q = Ie({}, [...Zc, ...gs, ...vs, ...bs, ...Xc]);
  let Ae = null;
  const Ge = Ie({}, [...Qc, ...ys, ...Jc, ...ma]);
  let ve = Object.seal(oo(null, {
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
  })), qe = null, _t = null;
  const Je = Object.seal(oo(null, {
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
  let ft = !0, pt = !0, St = !1, Et = !0, nt = !1, wt = !0, k = !1, C = !1, B = !1, ee = !1, Le = !1, ge = !1, T = !0, F = !1;
  const we = "user-content-";
  let Re = !0, Ye = !1, Mt = {}, Ze = null;
  const an = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ir = null;
  const Lr = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let dr = null;
  const Or = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jn = "http://www.w3.org/1998/Math/MathML", dn = "http://www.w3.org/2000/svg", Zt = "http://www.w3.org/1999/xhtml";
  let Sn = Zt, xr = !1, fr = null;
  const Un = Ie({}, [jn, dn, Zt], hs);
  let pr = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), mr = Ie({}, ["annotation-xml"]);
  const Rr = Ie({}, ["title", "style", "font", "a", "script"]);
  let Hn = null;
  const hr = ["application/xhtml+xml", "text/html"], _o = "text/html";
  let je = null, fn = null;
  const Gr = n.createElement("form"), Kr = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, gr = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (fn && fn === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = zt(w), Hn = // eslint-disable-next-line unicorn/prefer-includes
    hr.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? _o : w.PARSER_MEDIA_TYPE, je = Hn === "application/xhtml+xml" ? hs : Po, ye = lt(w, "ALLOWED_TAGS") && Wt(w.ALLOWED_TAGS) ? Ie({}, w.ALLOWED_TAGS, je) : Q, Ae = lt(w, "ALLOWED_ATTR") && Wt(w.ALLOWED_ATTR) ? Ie({}, w.ALLOWED_ATTR, je) : Ge, fr = lt(w, "ALLOWED_NAMESPACES") && Wt(w.ALLOWED_NAMESPACES) ? Ie({}, w.ALLOWED_NAMESPACES, hs) : Un, dr = lt(w, "ADD_URI_SAFE_ATTR") && Wt(w.ADD_URI_SAFE_ATTR) ? Ie(zt(Or), w.ADD_URI_SAFE_ATTR, je) : Or, Ir = lt(w, "ADD_DATA_URI_TAGS") && Wt(w.ADD_DATA_URI_TAGS) ? Ie(zt(Lr), w.ADD_DATA_URI_TAGS, je) : Lr, Ze = lt(w, "FORBID_CONTENTS") && Wt(w.FORBID_CONTENTS) ? Ie({}, w.FORBID_CONTENTS, je) : an, qe = lt(w, "FORBID_TAGS") && Wt(w.FORBID_TAGS) ? Ie({}, w.FORBID_TAGS, je) : zt({}), _t = lt(w, "FORBID_ATTR") && Wt(w.FORBID_ATTR) ? Ie({}, w.FORBID_ATTR, je) : zt({}), Mt = lt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? zt(w.USE_PROFILES) : w.USE_PROFILES : !1, ft = w.ALLOW_ARIA_ATTR !== !1, pt = w.ALLOW_DATA_ATTR !== !1, St = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Et = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, nt = w.SAFE_FOR_TEMPLATES || !1, wt = w.SAFE_FOR_XML !== !1, k = w.WHOLE_DOCUMENT || !1, ee = w.RETURN_DOM || !1, Le = w.RETURN_DOM_FRAGMENT || !1, ge = w.RETURN_TRUSTED_TYPE || !1, B = w.FORCE_BODY || !1, T = w.SANITIZE_DOM !== !1, F = w.SANITIZE_NAMED_PROPS || !1, Re = w.KEEP_CONTENT !== !1, Ye = w.IN_PLACE || !1, he = xT(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : eu, Sn = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Zt, pr = lt(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? zt(w.MATHML_TEXT_INTEGRATION_POINTS) : Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), mr = lt(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? zt(w.HTML_INTEGRATION_POINTS) : Ie({}, ["annotation-xml"]);
    const V = lt(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? zt(w.CUSTOM_ELEMENT_HANDLING) : oo(null);
    if (ve = oo(null), lt(V, "tagNameCheck") && Kr(V.tagNameCheck) && (ve.tagNameCheck = V.tagNameCheck), lt(V, "attributeNameCheck") && Kr(V.attributeNameCheck) && (ve.attributeNameCheck = V.attributeNameCheck), lt(V, "allowCustomizedBuiltInElements") && typeof V.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = V.allowCustomizedBuiltInElements), nt && (pt = !1), Le && (ee = !0), Mt && (ye = Ie({}, Xc), Ae = oo(null), Mt.html === !0 && (Ie(ye, Zc), Ie(Ae, Qc)), Mt.svg === !0 && (Ie(ye, gs), Ie(Ae, ys), Ie(Ae, ma)), Mt.svgFilters === !0 && (Ie(ye, vs), Ie(Ae, ys), Ie(Ae, ma)), Mt.mathMl === !0 && (Ie(ye, bs), Ie(Ae, Jc), Ie(Ae, ma))), Je.tagCheck = null, Je.attributeCheck = null, lt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Je.tagCheck = w.ADD_TAGS : Wt(w.ADD_TAGS) && (ye === Q && (ye = zt(ye)), Ie(ye, w.ADD_TAGS, je))), lt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Je.attributeCheck = w.ADD_ATTR : Wt(w.ADD_ATTR) && (Ae === Ge && (Ae = zt(Ae)), Ie(Ae, w.ADD_ATTR, je))), lt(w, "ADD_URI_SAFE_ATTR") && Wt(w.ADD_URI_SAFE_ATTR) && Ie(dr, w.ADD_URI_SAFE_ATTR, je), lt(w, "FORBID_CONTENTS") && Wt(w.FORBID_CONTENTS) && (Ze === an && (Ze = zt(Ze)), Ie(Ze, w.FORBID_CONTENTS, je)), lt(w, "ADD_FORBID_CONTENTS") && Wt(w.ADD_FORBID_CONTENTS) && (Ze === an && (Ze = zt(Ze)), Ie(Ze, w.ADD_FORBID_CONTENTS, je)), Re && (ye["#text"] = !0), k && Ie(ye, ["html", "head", "body"]), ye.table && (Ie(ye, ["tbody"]), delete qe.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ro('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ro('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      S = w.TRUSTED_TYPES_POLICY, O = S.createHTML("");
    } else
      S === void 0 && (S = HT(p, o)), S !== null && typeof O == "string" && (O = S.createHTML(""));
    (be.uponSanitizeElement.length > 0 || be.uponSanitizeAttribute.length > 0) && ye === Q && (ye = zt(ye)), be.uponSanitizeAttribute.length > 0 && Ae === Ge && (Ae = zt(Ae)), Yt && Yt(w), fn = w;
  }, qr = Ie({}, [...gs, ...vs, ...RT]), Wn = Ie({}, [...bs, ...NT]), wo = function(w) {
    let V = f(w);
    (!V || !V.tagName) && (V = {
      namespaceURI: Sn,
      tagName: "template"
    });
    const oe = Po(w.tagName), Ne = Po(V.tagName);
    return fr[w.namespaceURI] ? w.namespaceURI === dn ? V.namespaceURI === Zt ? oe === "svg" : V.namespaceURI === jn ? oe === "svg" && (Ne === "annotation-xml" || pr[Ne]) : !!qr[oe] : w.namespaceURI === jn ? V.namespaceURI === Zt ? oe === "math" : V.namespaceURI === dn ? oe === "math" && mr[Ne] : !!Wn[oe] : w.namespaceURI === Zt ? V.namespaceURI === dn && !mr[Ne] || V.namespaceURI === jn && !pr[Ne] ? !1 : !Wn[oe] && (Rr[oe] || !qr[oe]) : !!(Hn === "application/xhtml+xml" && fr[w.namespaceURI]) : !1;
  }, Ut = function(w) {
    eo(t.removed, {
      element: w
    });
    try {
      f(w).removeChild(w);
    } catch {
      h(w);
    }
  }, $ = function(w, V) {
    try {
      eo(t.removed, {
        attribute: V.getAttributeNode(w),
        from: V
      });
    } catch {
      eo(t.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(w), w === "is")
      if (ee || Le)
        try {
          Ut(V);
        } catch {
        }
      else
        try {
          V.setAttribute(w, "");
        } catch {
        }
  }, J = function(w) {
    let V = null, oe = null;
    if (B)
      w = "<remove></remove>" + w;
    else {
      const We = Gc(w, /^[\r\n\t ]+/);
      oe = We && We[0];
    }
    Hn === "application/xhtml+xml" && Sn === Zt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Ne = S ? S.createHTML(w) : w;
    if (Sn === Zt)
      try {
        V = new d().parseFromString(Ne, Hn);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = Z.createDocument(Sn, "template", null);
      try {
        V.documentElement.innerHTML = xr ? O : Ne;
      } catch {
      }
    }
    const xe = V.body || V.documentElement;
    return w && oe && xe.insertBefore(n.createTextNode(oe), xe.childNodes[0] || null), Sn === Zt ? se.call(V, k ? "html" : "body")[0] : k ? V.documentElement : xe;
  }, Se = function(w) {
    return ae.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Ke = function(w) {
    w.normalize();
    const V = ae.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let oe = V.nextNode();
    for (; oe; ) {
      let Ne = oe.data;
      Jr([j, X, U], (xe) => {
        Ne = to(Ne, xe, " ");
      }), oe.data = Ne, oe = V.nextNode();
    }
  }, mt = function(w) {
    const V = _ ? _(w) : null;
    return typeof V != "string" || je(V) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== N(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    w.nodeType !== A(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    w.childNodes !== I(w);
  }, ht = function(w) {
    if (!A || typeof w != "object" || w === null)
      return !1;
    try {
      return A(w) === In.documentFragment;
    } catch {
      return !1;
    }
  }, Dt = function(w) {
    if (!A || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof A(w) == "number";
    } catch {
      return !1;
    }
  };
  function Lt(ie, w, V) {
    Jr(ie, (oe) => {
      oe.call(t, w, V, fn);
    });
  }
  const En = function(w) {
    let V = null;
    if (Lt(be.beforeSanitizeElements, w, null), mt(w))
      return Ut(w), !0;
    const oe = je(w.nodeName);
    if (Lt(be.uponSanitizeElement, w, {
      tagName: oe,
      allowedTags: ye
    }), wt && w.hasChildNodes() && !Dt(w.firstElementChild) && Rt(/<[/\w!]/g, w.innerHTML) && Rt(/<[/\w!]/g, w.textContent) || wt && w.namespaceURI === Zt && oe === "style" && Dt(w.firstElementChild) || w.nodeType === In.progressingInstruction || wt && w.nodeType === In.comment && Rt(/<[/\w]/g, w.data))
      return Ut(w), !0;
    if (qe[oe] || !(Je.tagCheck instanceof Function && Je.tagCheck(oe)) && !ye[oe]) {
      if (!qe[oe] && To(oe) && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, oe) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(oe)))
        return !1;
      if (Re && !Ze[oe]) {
        const xe = f(w), We = I(w);
        if (We && xe) {
          const Ht = We.length;
          for (let en = Ht - 1; en >= 0; --en) {
            const tn = y(We[en], !0);
            xe.insertBefore(tn, g(w));
          }
        }
      }
      return Ut(w), !0;
    }
    return (A ? A(w) : w.nodeType) === In.element && !wo(w) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && Rt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (Ut(w), !0) : (nt && w.nodeType === In.text && (V = w.textContent, Jr([j, X, U], (xe) => {
      V = to(V, xe, " ");
    }), w.textContent !== V && (eo(t.removed, {
      element: w.cloneNode()
    }), w.textContent = V)), Lt(be.afterSanitizeElements, w, null), !1);
  }, Nr = function(w, V, oe) {
    if (_t[V] || T && (V === "id" || V === "name") && (oe in n || oe in Gr))
      return !1;
    const Ne = Ae[V] || Je.attributeCheck instanceof Function && Je.attributeCheck(V, w);
    if (!(pt && !_t[V] && Rt(pe, V))) {
      if (!(ft && Rt(K, V))) {
        if (!Ne || _t[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(To(w) && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, w) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(w)) && (ve.attributeNameCheck instanceof RegExp && Rt(ve.attributeNameCheck, V) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(V, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, oe) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(oe)))
          ) return !1;
        } else if (!dr[V]) {
          if (!Rt(he, to(oe, De, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && w !== "script" && Kc(oe, "data:") === 0 && Ir[w])) {
              if (!(St && !Rt(G, to(oe, De, "")))) {
                if (oe)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ko = Ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), To = function(w) {
    return !ko[Po(w)] && Rt(me, w);
  }, ra = function(w) {
    Lt(be.beforeSanitizeAttributes, w, null);
    const V = w.attributes;
    if (!V || mt(w))
      return;
    const oe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ae,
      forceKeepAttr: void 0
    };
    let Ne = V.length;
    for (; Ne--; ) {
      const xe = V[Ne], We = xe.name, Ht = xe.namespaceURI, en = xe.value, tn = je(We), v = en;
      let L = We === "value" ? v : ET(v);
      if (oe.attrName = tn, oe.attrValue = L, oe.keepAttr = !0, oe.forceKeepAttr = void 0, Lt(be.uponSanitizeAttribute, w, oe), L = oe.attrValue, F && (tn === "id" || tn === "name") && Kc(L, we) !== 0 && ($(We, w), L = we + L), wt && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, L)) {
        $(We, w);
        continue;
      }
      if (tn === "attributename" && Gc(L, "href")) {
        $(We, w);
        continue;
      }
      if (oe.forceKeepAttr)
        continue;
      if (!oe.keepAttr) {
        $(We, w);
        continue;
      }
      if (!Et && Rt(/\/>/i, L)) {
        $(We, w);
        continue;
      }
      nt && Jr([j, X, U], (z) => {
        L = to(L, z, " ");
      });
      const x = je(w.nodeName);
      if (!Nr(x, tn, L)) {
        $(We, w);
        continue;
      }
      if (S && typeof p == "object" && typeof p.getAttributeType == "function" && !Ht)
        switch (p.getAttributeType(x, tn)) {
          case "TrustedHTML": {
            L = S.createHTML(L);
            break;
          }
          case "TrustedScriptURL": {
            L = S.createScriptURL(L);
            break;
          }
        }
      if (L !== v)
        try {
          Ht ? w.setAttributeNS(Ht, We, L) : w.setAttribute(We, L), mt(w) ? Ut(w) : Wc(t.removed);
        } catch {
          $(We, w);
        }
    }
    Lt(be.afterSanitizeAttributes, w, null);
  }, Yr = function(w) {
    let V = null;
    const oe = Se(w);
    for (Lt(be.beforeSanitizeShadowDOM, w, null); V = oe.nextNode(); )
      if (Lt(be.uponSanitizeShadowNode, V, null), En(V), ra(V), ht(V.content) && Yr(V.content), (A ? A(V) : V.nodeType) === In.element) {
        const xe = E ? E(V) : V.shadowRoot;
        ht(xe) && (vr(xe), Yr(xe));
      }
    Lt(be.afterSanitizeShadowDOM, w, null);
  }, vr = function(w) {
    const V = A ? A(w) : w.nodeType;
    if (V === In.element) {
      const xe = E ? E(w) : w.shadowRoot;
      ht(xe) && (vr(xe), Yr(xe));
    }
    const oe = I ? I(w) : w.childNodes;
    if (!oe)
      return;
    const Ne = [];
    Jr(oe, (xe) => {
      eo(Ne, xe);
    });
    for (const xe of Ne)
      vr(xe);
    if (V === In.element) {
      const xe = _ ? _(w) : null;
      if (typeof xe == "string" && je(xe) === "template") {
        const We = w.content;
        ht(We) && vr(We);
      }
    }
  };
  return t.sanitize = function(ie) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, oe = null, Ne = null, xe = null;
    if (xr = !ie, xr && (ie = "<!-->"), typeof ie != "string" && !Dt(ie) && (ie = OT(ie), typeof ie != "string"))
      throw Ro("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (C || gr(w), t.removed = [], typeof ie == "string" && (Ye = !1), Ye) {
      const en = _ ? _(ie) : ie.nodeName;
      if (typeof en == "string") {
        const tn = je(en);
        if (!ye[tn] || qe[tn])
          throw Ro("root node is forbidden and cannot be sanitized in-place");
      }
      if (mt(ie))
        throw Ro("root node is clobbered and cannot be sanitized in-place");
      vr(ie);
    } else if (Dt(ie))
      V = J("<!---->"), oe = V.ownerDocument.importNode(ie, !0), oe.nodeType === In.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? V = oe : V.appendChild(oe), vr(oe);
    else {
      if (!ee && !nt && !k && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return S && ge ? S.createHTML(ie) : ie;
      if (V = J(ie), !V)
        return ee ? null : ge ? O : "";
    }
    V && B && Ut(V.firstChild);
    const We = Se(Ye ? ie : V);
    for (; Ne = We.nextNode(); )
      En(Ne), ra(Ne), ht(Ne.content) && Yr(Ne.content);
    if (Ye)
      return nt && Ke(ie), ie;
    if (ee) {
      if (nt && Ke(V), Le)
        for (xe = fe.call(V.ownerDocument); V.firstChild; )
          xe.appendChild(V.firstChild);
      else
        xe = V;
      return (Ae.shadowroot || Ae.shadowrootmode) && (xe = _e.call(r, xe, !0)), xe;
    }
    let Ht = k ? V.outerHTML : V.innerHTML;
    return k && ye["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && Rt(VT, V.ownerDocument.doctype.name) && (Ht = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + Ht), nt && Jr([j, X, U], (en) => {
      Ht = to(Ht, en, " ");
    }), S && ge ? S.createHTML(Ht) : Ht;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gr(ie), C = !0;
  }, t.clearConfig = function() {
    fn = null, C = !1;
  }, t.isValidAttribute = function(ie, w, V) {
    fn || gr({});
    const oe = je(ie), Ne = je(w);
    return Nr(oe, Ne, V);
  }, t.addHook = function(ie, w) {
    typeof w == "function" && eo(be[ie], w);
  }, t.removeHook = function(ie, w) {
    if (w !== void 0) {
      const V = TT(be[ie], w);
      return V === -1 ? void 0 : ST(be[ie], V, 1)[0];
    }
    return Wc(be[ie]);
  }, t.removeHooks = function(ie) {
    be[ie] = [];
  }, t.removeAllHooks = function() {
    be = tu();
  }, t;
}
var WT = gf();
const GT = {
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
function KT(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : WT.sanitize(e, GT) : "";
}
const qT = { class: "local-ai-chat-shell" }, YT = { class: "chat-sidebar" }, ZT = { class: "sidebar-header" }, XT = { class: "sidebar-title-block" }, QT = { class: "sidebar-search" }, JT = ["placeholder"], e2 = { class: "sidebar-section recent-section" }, t2 = { class: "section-title-row" }, n2 = { class: "section-title" }, r2 = { class: "sidebar-actions" }, o2 = ["title"], a2 = ["title"], s2 = {
  key: 0,
  class: "chat-list"
}, l2 = ["onClick", "onKeydown"], i2 = { class: "chat-item-title" }, c2 = { class: "chat-item-time" }, u2 = ["title", "onClick"], d2 = {
  key: 1,
  class: "sidebar-empty"
}, f2 = { class: "chat-panel" }, p2 = { class: "chat-topbar" }, m2 = { class: "chat-topbar-main" }, h2 = { class: "chat-title-row" }, g2 = { class: "service-url" }, v2 = { class: "chat-topbar-actions" }, b2 = { class: "date-divider" }, y2 = {
  key: 0,
  class: "empty-state"
}, _2 = { class: "empty-title" }, w2 = { class: "empty-desc" }, k2 = { class: "message-avatar" }, T2 = { key: 1 }, S2 = { class: "message-body" }, E2 = {
  key: 0,
  class: "user-bubble"
}, A2 = {
  key: 0,
  class: "message-attachment-list"
}, C2 = ["src", "alt"], I2 = {
  key: 1,
  class: "attachment-file-icon"
}, L2 = { class: "assistant-head" }, O2 = {
  key: 0,
  class: "assistant-content-stack"
}, x2 = ["open"], R2 = { class: "reasoning-summary-title" }, N2 = { key: 0 }, P2 = ["innerHTML"], $2 = ["innerHTML"], M2 = {
  key: 1,
  class: "message-content loading-text"
}, D2 = {
  key: 0,
  class: "message-stats"
}, F2 = {
  key: 1,
  class: "message-warning"
}, z2 = {
  key: 2,
  class: "message-actions"
}, B2 = {
  key: 0,
  class: "message-version-switcher"
}, V2 = ["disabled", "title", "onClick"], j2 = ["disabled", "title", "onClick"], U2 = ["title", "onClick"], H2 = ["title", "onClick"], W2 = ["title"], G2 = ["title"], K2 = ["title", "onClick"], q2 = ["title", "onClick"], Y2 = ["title"], Z2 = {
  key: 0,
  class: "attachment-preview-list"
}, X2 = ["src", "alt"], Q2 = {
  key: 1,
  class: "attachment-file-icon"
}, J2 = { class: "attachment-meta" }, eS = ["title", "onClick"], tS = ["placeholder"], nS = { class: "input-toolbar" }, rS = { class: "input-toolbar-left" }, oS = ["title"], aS = ["title", "aria-pressed"], sS = { class: "model-select-shell" }, lS = ["disabled"], iS = ["value"], cS = {
  key: 0,
  value: ""
}, uS = { class: "input-toolbar-right" }, dS = ["title", "aria-label"], fS = ["disabled", "title", "aria-label"], pS = 96, mS = 4096, _s = 160, hS = /* @__PURE__ */ le({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Zo(), n = W(""), r = W([]), o = W(""), a = W(""), s = W([]), i = W(!1), l = W(!1), u = W(!1), d = W(!1), p = W(!1), m = W(!0), y = W(!1), h = W(null), g = W(null), I = W(null), f = W(""), E = W(null), N = W(null), A = W(null), _ = W(Date.now());
    let S = null, O = null;
    const q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ae = (v) => `${Date.now()}-${v}-${Math.random().toString(16).slice(2, 8)}`, fe = (v) => v.type === "root", se = (v) => new Map(v.map((L) => [L.id, L])), _e = (v) => v.find(fe), be = (v, L) => {
      if (!L) return null;
      const x = se(v);
      let z = x.get(L);
      const te = /* @__PURE__ */ new Set();
      for (; z?.childIds?.length && !te.has(z.id); )
        te.add(z.id), z = x.get(z.childIds[z.childIds.length - 1]);
      return z?.id ?? null;
    }, j = (v, L) => {
      if (v.some(fe)) {
        const ne = v.map((Ce) => ({
          ...Ce,
          type: Ce.type ?? "text",
          parentId: Ce.parentId ?? null,
          childIds: Ce.childIds ?? []
        })), Oe = _e(ne);
        return {
          messages: ne,
          currentNodeId: be(ne, ne.at(-1)?.id) ?? Oe?.id ?? null
        };
      }
      const x = {
        id: ae("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: L,
        parentId: null,
        childIds: []
      }, z = [x];
      let te = x.id;
      for (const ne of v) {
        const Oe = {
          ...ne,
          role: ne.role === "system" ? "assistant" : ne.role,
          type: "text",
          parentId: te,
          childIds: []
        };
        z.find((rt) => rt.id === te)?.childIds?.push(Oe.id), z.push(Oe), te = Oe.id;
      }
      return { messages: z, currentNodeId: te };
    }, X = (v, L) => {
      if (!L) return [];
      const x = se(v), z = [], te = /* @__PURE__ */ new Set();
      let ne = x.get(L);
      for (; ne && !te.has(ne.id); )
        te.add(ne.id), z.unshift(ne), ne = ne.parentId ? x.get(ne.parentId) : void 0;
      return z;
    }, U = (v) => {
      if (!v) return [];
      const L = v.currentNodeId ?? be(v.messages, _e(v.messages)?.id);
      return X(v.messages, L).filter(
        (x) => !fe(x)
      );
    }, pe = (v) => {
      if (!v) return [];
      const L = se(v.messages), x = (z) => be(v.messages, z) ?? z;
      return U(v).map((z) => {
        const ne = (z.parentId ? L.get(z.parentId) : void 0)?.childIds ?? [z.id];
        return {
          message: z,
          siblingLeafNodeIds: ne.map(x),
          siblingCurrentIndex: Math.max(0, ne.indexOf(z.id))
        };
      });
    }, K = (v, L) => {
      const x = _e(v.messages), z = L.parentId ?? v.currentNodeId ?? x?.id ?? null, te = {
        ...L,
        type: "text",
        parentId: z,
        childIds: []
      };
      if (v.messages.push(te), z) {
        const ne = v.messages.find((Oe) => Oe.id === z);
        ne && (ne.childIds = [...ne.childIds ?? [], te.id]);
      }
      return v.currentNodeId = te.id, te;
    }, G = R(
      () => (!!a.value.trim() || s.value.length > 0) && !i.value
    ), De = R(() => E.value?.healthy ? t("localAi.serviceHealthy") : E.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), me = R(
      () => r.value.find((v) => v.id === o.value) ?? null
    ), he = R(
      () => U(me.value)
    ), ye = R(
      () => pe(me.value)
    ), Q = (v) => v ? v.split(/[\\/]+/).pop() ?? v : "", Ae = R(
      () => Q(f.value) || Q(E.value?.modelPath) || Q(g.value?.modelPath) || t("localAi.localModel")
    ), Ge = R(() => I.value?.mainModels ?? []), ve = R(() => !!g.value?.mmprojPath), qe = R(
      () => E.value?.ctxSize ?? g.value?.ctxSize ?? 4096
    ), _t = R(() => {
      const v = qe.value, L = g.value?.maxTokens ?? 0;
      return L > 0 ? Math.min(
        Math.max(L, 512),
        Math.max(512, v - 512)
      ) : Math.min(
        Math.max(mS, Math.floor(v * 0.5)),
        Math.max(512, v - 512)
      );
    }), Je = R(
      () => Math.max(512, qe.value - _t.value)
    ), ft = R(() => {
      const v = Ae.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(v);
    }), pt = R(() => {
      const v = n.value.trim().toLowerCase();
      return r.value.filter(
        (L) => !v || L.title.toLowerCase().includes(v) || L.messages.some(
          (x) => !fe(x) && x.content.toLowerCase().includes(v)
        )
      ).slice().sort((L, x) => x.updatedAt.localeCompare(L.updatedAt));
    }), St = () => t("localAi.now"), Et = () => {
      const v = (/* @__PURE__ */ new Date()).toISOString(), L = {
        id: ae("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: v,
        parentId: null,
        childIds: []
      };
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: v,
        updatedAt: v,
        updatedAtLabel: St(),
        currentNodeId: L.id,
        messages: [L]
      };
    }, nt = () => {
      const v = N.value;
      return v ? v.scrollHeight - v.scrollTop - v.clientHeight <= pS : !0;
    }, wt = () => {
      const v = nt();
      m.value = v, y.value = !v;
    }, k = () => {
      wt();
    }, C = async (v = {}) => {
      await it();
      const L = N.value;
      !L || !v.force && !m.value || (L.scrollTop = L.scrollHeight, wt());
    }, B = () => {
      m.value = !0, C({ force: !0 });
    }, ee = async () => {
      try {
        g.value = await lf(), f.value = g.value.modelPath ?? "", I.value = await cf(g.value), ft.value || (d.value = !1);
      } catch (v) {
        mn.warn("[LocalAI] refresh chat config failed", v);
      }
    }, Le = async () => {
      l.value = !0;
      try {
        E.value = await uf();
      } catch (v) {
        mn.warn("[LocalAI] refresh chat status failed", v);
      } finally {
        l.value = !1;
      }
    }, ge = async () => {
      try {
        const v = await tT();
        r.value = v.map((L) => {
          const x = L.messages?.length ? L.messages : L.turns.map((te) => ({
            id: te.id,
            role: te.role,
            content: te.content,
            createdAt: te.createdAt
          })), z = j(
            x,
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
      } catch (v) {
        mn.warn("[LocalAI] refresh histories failed", v);
      }
    }, T = async () => {
      await Promise.all([ee(), Le(), ge()]);
    }, F = async () => {
      const v = me.value;
      if (!v) return;
      const L = U(v).map((x) => ({
        id: x.id,
        role: x.role,
        content: x.content,
        createdAt: x.createdAt
      }));
      await nT({
        id: v.id,
        title: v.title,
        createdAt: v.createdAt,
        updatedAt: v.updatedAt,
        turns: L,
        currentNodeId: v.currentNodeId,
        messages: v.messages
      });
    }, we = () => {
      const v = Et();
      r.value.unshift(v), o.value = v.id, a.value = "";
    }, Re = () => {
      me.value || we();
    }, Ye = (v) => {
      o.value = v;
      const L = me.value;
      L && !L.currentNodeId && (L.currentNodeId = be(L.messages, _e(L.messages)?.id) ?? null), m.value = !0, C({ force: !0 });
    }, Mt = async (v) => {
      r.value = r.value.filter((L) => L.id !== v), await rT(v), o.value === v && (o.value = r.value[0]?.id ?? "");
    }, Ze = () => {
      A.value?.click();
    }, an = (v, L) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: v.name,
      type: L,
      mime: v.type || "application/octet-stream",
      size: v.size,
      status: "pending"
    }), Ir = async (v) => {
      if (Vc(v)) {
        const x = an(v, "image");
        if (v.size > cT)
          return {
            ...x,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...x,
            status: "parsed",
            dataUrl: await fT(v)
          };
        } catch (z) {
          return { ...x, status: "error", error: String(z) };
        }
      }
      if (jc(v)) {
        const x = an(v, "text");
        if (v.size > iT)
          return {
            ...x,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const z = await pT(v);
          return {
            ...x,
            status: "parsed",
            text: z.text,
            error: z.truncated ? "truncated" : void 0
          };
        } catch (z) {
          return { ...x, status: "error", error: String(z) };
        }
      }
      return {
        ...an(v, "unsupported"),
        status: "error",
        error: dT(v) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, Lr = async (v) => {
      const L = Array.from(v), x = lT - s.value.length;
      if (x <= 0) {
        ot.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      L.length > x && ot.msg(t("localAi.attachmentLimit"), "warning");
      const z = L.slice(0, x), te = z.map(
        (ne) => an(
          ne,
          Vc(ne) ? "image" : jc(ne) ? "text" : "unsupported"
        )
      );
      s.value.push(...te), await Promise.all(
        z.map(async (ne, Oe) => {
          const Ce = await Ir(ne), rt = s.value.findIndex(
            (At) => At.id === te[Oe].id
          );
          rt >= 0 && (s.value[rt] = Ce);
        })
      );
    }, dr = async (v) => {
      const L = v.target;
      L.files?.length && await Lr(L.files), L.value = "";
    }, Or = async (v) => {
      v.dataTransfer?.files.length && await Lr(v.dataTransfer.files);
    }, jn = (v) => {
      s.value = s.value.filter(
        (L) => L.id !== v
      );
    }, dn = (v) => v.status === "pending" ? t("localAi.attachmentPending") : v.status === "error" ? v.error ?? "" : v.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), Zt = async () => {
      if (!(!g.value || !f.value)) {
        g.value.modelPath = f.value;
        try {
          g.value = await wa(g.value), E.value?.running && (E.value = await df()), ot.msg(t("localAi.modelChanged"));
        } catch (v) {
          ot.msg(`${t("localAi.configSaveFailed")}: ${v}`, "error");
        }
      }
    }, Sn = (v) => {
      let L = 0;
      for (let x = 0; x < v.length; x += 1)
        L = L * 31 + v.charCodeAt(x) >>> 0;
      return `code-${v.length}-${L.toString(16)}`;
    }, xr = (v) => v.includes("<pre>") ? v.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (L, x, z) => {
        const te = document.createElement("textarea");
        te.innerHTML = z;
        const ne = te.value, Oe = Sn(ne);
        Z.set(Oe, ne);
        const Ce = x ? ` class="${x}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${Oe}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${Ce}>${z}</code></pre></div>`;
      }
    ) : v, fr = (v) => {
      const L = q.get(v);
      if (L) return L;
      const x = xr(
        KT(Be.parse(v, { async: !1 }))
      );
      if (q.set(v, x), q.size > 80) {
        const z = q.keys().next().value;
        typeof z == "string" && q.delete(z);
      }
      return x;
    }, Un = async (v) => {
      const z = v.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!z) return;
      const te = Z.get(z);
      if (te)
        try {
          await navigator.clipboard.writeText(te), ot.msg(t("localAi.codeCopied"));
        } catch (ne) {
          ot.msg(`${t("common.copy")}: ${ne}`, "error");
        }
    }, pr = (v) => {
      const L = v.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!L || L.index === void 0)
        return { reasoning: "", answer: v };
      const x = v.slice(0, L.index).trim(), z = L[0], te = v.slice(L.index + z.length).trim();
      return {
        reasoning: (L[1] ?? "").trim(),
        answer: [x, te].filter(Boolean).join(`

`)
      };
    }, mr = (v) => pr(v).reasoning, Rr = (v) => pr(v).answer, Hn = (v) => !!Rr(v.content), hr = (v) => !!(v.streaming && v.allowThinking && v.reasoningStartedAt && !v.reasoningEndedAt && !Hn(v)), _o = (v) => {
      if (!v.reasoningStartedAt) return "0.00";
      const L = v.reasoningEndedAt ?? (v.streaming ? _.value : Date.now());
      return Math.max(0, (L - v.reasoningStartedAt) / 1e3).toFixed(2);
    }, je = (v) => !v.reasoningStartedAt && v.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: _o(v)
    }), fn = (v) => new Date(
      v.createdAt || me.value?.updatedAt || Date.now()
    ), Gr = (v) => fn(v).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Kr = (v) => v.streaming ? hr(v) ? t("localAi.thinking") : t("localAi.generating") : Gr(v), gr = (v) => v.allowThinking && !v.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), qr = (v, L) => {
      v.allowThinking && (L.includes("<think>") && !v.reasoningStartedAt && (v.reasoningStartedAt = Date.now()), L.includes("</think>") && !v.reasoningEndedAt && (v.reasoningEndedAt = Date.now()));
    }, Wn = (v) => {
      const L = v.trim();
      if (!L) return 0;
      const x = (L.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, ne = (L.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((Oe, Ce) => /^[A-Za-z0-9_]+$/.test(Ce) ? Oe + Math.max(1, Math.ceil(Ce.length / 4)) : Oe + 1, 0);
      return Math.max(1, Math.ceil(x + ne));
    }, wo = (v) => Array.isArray(v) ? v.filter((L) => L.type === "text").map((L) => L.text).join(`
`) : v, Ut = (v) => {
      const L = v.attachments?.filter(
        (ne) => ne.status === "parsed"
      ) ?? [], x = mT(
        v.content,
        L
      ), z = L.filter(
        (ne) => ne.type === "image" && ne.dataUrl
      );
      if (!z.length) return x;
      const te = [{ type: "text", text: x }];
      for (const ne of z)
        te.push({
          type: "image_url",
          image_url: {
            url: ne.dataUrl ?? ""
          }
        });
      return te;
    }, $ = (v) => Wn(
      v.map((L) => {
        const x = wo(L.content);
        return `${L.role}: ${x}`;
      }).join(`
`)
    ), J = (v, L) => {
      const x = Math.max(240, L * 4);
      return v.length <= x ? v : `${t("localAi.previousAnswerTail")}

${v.slice(-x)}`;
    }, Se = (v, L) => {
      const x = [];
      let z = 0;
      for (let te = v.length - 1; te >= 0; te -= 1) {
        const ne = v[te], Oe = $([ne]);
        if (z + Oe <= L || x.length === 0) {
          x.unshift(ne), z += Oe;
          continue;
        }
        const Ce = L - z;
        if (ne.role !== "assistant" || typeof ne.content != "string" || Ce < _s)
          continue;
        let rt = Ce, At = {
          ...ne,
          content: J(ne.content, rt)
        }, Ot = $([At]);
        for (; Ot > Ce && rt > _s; )
          rt = Math.max(
            _s,
            Math.floor(rt * 0.7)
          ), At = {
            ...ne,
            content: J(ne.content, rt)
          }, Ot = $([At]);
        z + Ot <= L && (x.unshift(At), z += Ot);
      }
      return x;
    }, Ke = () => Se(
      he.value.filter((v) => !v.streaming && v.role !== "system").map((v) => ({
        role: v.role,
        content: v.role === "user" ? Ut(v) : v.content
      })),
      Je.value
    ), mt = (v) => {
      const L = g.value?.maxTokens ?? 0;
      if (L > 0) return L;
      const x = $(v);
      return Math.max(256, qe.value - x - 128);
    }, ht = (v) => {
      const L = _.value, x = he.value.findIndex(
        (Ot) => Ot.id === v.id
      ), z = v.stats?.promptTokens ?? v.promptTokens ?? Wn(
        he.value.slice(0, Math.max(0, x)).map((Ot) => Ot.content).join(`
`)
      ), te = v.stats?.completionTokens ?? Wn(v.content), ne = qe.value, Oe = v.stats?.totalTokens ?? z + te, Ce = Math.min(Oe, ne), rt = Math.max(
        0,
        (v.stats?.generationTimeMs ?? v.elapsedMs ?? L - fn(v).getTime()) / 1e3
      ), At = v.stats?.tokensPerSecond ?? (rt > 0 ? te / rt : 0);
      return {
        context: Ce,
        contextMax: ne,
        contextPercent: Math.min(100, Math.round(Ce / ne * 100)),
        output: te,
        outputMax: (g.value?.maxTokens ?? 0) > 0 ? String(g.value?.maxTokens) : "∞",
        seconds: rt.toFixed(1),
        speed: At.toFixed(1)
      };
    }, Dt = (v) => v.repetitionStopped ? t("localAi.repetitionStopped") : v.interrupted ? t("localAi.streamInterrupted") : v.stopped ? t("localAi.generationStopped") : (v.stats?.totalTokens ?? (v.promptTokens ?? 0) + (v.stats?.completionTokens ?? Wn(v.content))) >= qe.value - 8 ? t("localAi.contextLimitReached") : v.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", Lt = (v) => {
      const L = String(v);
      return /exceeds the available context size|exceed_context_size/i.test(L) ? t("localAi.contextExceeded") : L;
    }, En = (v) => {
      const L = v.replace(/\s+/g, " ").trim();
      if (L.length < 900) return !1;
      const z = L.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Ce) => Ce.toLowerCase()) ?? [];
      if (z.length < 140) return !1;
      const te = z.slice(-120), ne = /* @__PURE__ */ new Map();
      for (const Ce of te) ne.set(Ce, (ne.get(Ce) ?? 0) + 1);
      if (ne.size / te.length < 0.12 && [...ne.values()].some((Ce) => Ce >= 56))
        return !0;
      for (let Ce = 1; Ce <= 4; Ce += 1) {
        const rt = z.slice(-Ce).join("\0");
        let At = 1;
        for (let Ot = z.length - Ce * 2; Ot >= 0 && z.slice(Ot, Ot + Ce).join("\0") === rt; Ot -= Ce)
          At += 1;
        if (At >= Math.max(24, Math.ceil(72 / Ce))) return !0;
      }
      return !1;
    }, Nr = () => {
      O || (_.value = Date.now(), O = setInterval(() => {
        _.value = Date.now();
      }, 250));
    }, ko = () => {
      O && (clearInterval(O), O = null, _.value = Date.now());
    }, To = async (v) => {
      const L = performance.now(), x = ff(), z = Ke();
      let te = "", ne = null, Oe = null, Ce = !1, rt = !1;
      h.value = x, u.value = !1, v.promptTokens = $(z);
      const At = async () => {
        if (!te) {
          ne = null, Oe?.(), Oe = null;
          return;
        }
        const xt = u.value ? 480 : te.length > 900 ? 180 : te.length > 240 ? 96 : 32;
        v.content += te.slice(0, xt), te = te.slice(xt), !rt && !u.value && En(v.content) && (rt = !0, u.value = !0, v.repetitionStopped = !0, ms(x).catch(
          (So) => mn.warn("[LocalAI] repetition stop failed", So)
        )), await C(), ne = window.setTimeout(() => {
          At().catch(
            (So) => mn.warn("[LocalAI] stream pump failed", So)
          );
        }, 48);
      }, Ot = (xt) => {
        xt && (qr(v, xt), te += xt, ne === null && (ne = window.setTimeout(() => {
          At().catch(
            (So) => mn.warn("[LocalAI] stream pump failed", So)
          );
        }, 32)));
      }, Ul = async () => {
        !te && ne === null || await new Promise((xt) => {
          Oe = xt;
        });
      }, Zr = await eT(
        {
          messages: z,
          maxTokens: mt(z),
          enableThinking: v.allowThinking === !0
        },
        (xt) => {
          Ce = !0, Ot(xt);
        },
        {
          requestId: x,
          onStats: (xt) => {
            v.stats = xt, _.value = Date.now();
          }
        }
      ).catch(async (xt) => {
        throw await Ul(), xt;
      });
      if (!Ce)
        Ot(Zr.content);
      else if (!u.value) {
        const xt = v.content.length + te.length;
        Zr.content.length > xt && Ot(Zr.content.slice(xt));
      }
      await Ul(), !u.value && Zr.content && v.content !== Zr.content && (v.content = Zr.content), v.streaming = !1, v.elapsedMs = performance.now() - L, v.stopped = u.value, v.interrupted = !1, v.error = "", _.value = Date.now(), h.value = null;
    }, ra = async () => {
      const v = h.value;
      if (!(!i.value || !v || u.value)) {
        u.value = !0;
        try {
          await ms(v);
        } catch (L) {
          mn.warn("[LocalAI] cancel stream failed", L);
        }
      }
    }, Yr = (v) => {
      v.isComposing || v.keyCode === 229 || v.key === "Enter" && !v.shiftKey && (v.preventDefault(), ie());
    }, vr = () => {
      if (!a.value.trim() && !s.value.length) return !1;
      if (s.value.find(
        (z) => z.status === "pending"
      ))
        return ot.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const L = s.value.find(
        (z) => z.status === "error" || z.type === "unsupported"
      );
      return L ? (ot.msg(
        `${t("localAi.attachmentErrorBlock")}: ${L.name}`,
        "warning"
      ), !1) : s.value.some(
        (z) => z.type === "image"
      ) && !ve.value ? (ot.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, ie = async () => {
      const v = a.value.trim();
      if (i.value || !vr()) return;
      Re();
      const L = (/* @__PURE__ */ new Date()).toISOString(), x = s.value.map((rt) => ({
        ...rt
      })), z = v || x[0]?.name || "", te = me.value;
      if (!te) return;
      const ne = K(te, {
        id: ae("user"),
        role: "user",
        content: v,
        createdAt: L,
        attachments: x
      }), Oe = K(te, {
        id: ae("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: ne.id,
        streaming: !0,
        allowThinking: d.value && ft.value,
        promptTokens: $(Ke())
      });
      a.value = "", s.value = [], i.value = !0, Nr(), await C({ force: !0 });
      const Ce = performance.now();
      try {
        await To(Oe), me.value && (me.value.title = me.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : me.value.title, me.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), me.value.updatedAtLabel = new Date(
          me.value.updatedAt
        ).toLocaleString(), await F()), await Le();
      } catch (rt) {
        if (!u.value) {
          a.value = v, s.value = x;
          const At = Lt(rt);
          ot.msg(`${t("localAi.chatFailed")}: ${At}`, "error"), Oe.error = At, Oe.interrupted = !!Oe.content.trim(), Oe.interrupted || (Oe.content = At), me.value && (me.value.title = me.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : me.value.title, me.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), me.value.updatedAtLabel = new Date(
            me.value.updatedAt
          ).toLocaleString(), await F());
        }
        Oe.streaming = !1, Oe.elapsedMs = performance.now() - Ce;
      } finally {
        i.value = !1, h.value = null, ko(), await C();
      }
    }, w = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, V = (v) => {
      const L = new Date(v), x = /* @__PURE__ */ new Date(), z = x.getTime() - L.getTime(), te = 24 * 60 * 60 * 1e3;
      return L.toDateString() === x.toDateString() ? L.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : z < te * 2 ? t("localAi.yesterday") : z < te * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(z / te))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(z / (te * 7)))
      });
    }, oe = async (v) => {
      try {
        await navigator.clipboard.writeText(v.content), ot.msg(t("localAi.copied"));
      } catch (L) {
        ot.msg(`${t("common.operationFailed")}: ${L}`, "error");
      }
    }, Ne = (v, L) => {
      const x = se(v), z = /* @__PURE__ */ new Set([L]), te = (ne) => {
        const Oe = x.get(ne);
        for (const Ce of Oe?.childIds ?? [])
          z.add(Ce), te(Ce);
      };
      return te(L), z;
    }, xe = async (v) => {
      const L = me.value;
      if (!L) return;
      const x = L.messages.find((te) => te.id === v);
      if (!x || fe(x)) return;
      const z = Ne(L.messages, v);
      L.messages = L.messages.filter((te) => !z.has(te.id)).map((te) => ({
        ...te,
        childIds: (te.childIds ?? []).filter((ne) => !z.has(ne))
      })), L.currentNodeId && z.has(L.currentNodeId) && (L.currentNodeId = be(L.messages, x.parentId) ?? _e(L.messages)?.id ?? null), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await F();
    }, We = (v) => {
      a.value = v.content, me.value && v.parentId && (me.value.currentNodeId = v.parentId);
    }, Ht = (v, L) => {
      const x = me.value;
      if (!x) return;
      const z = v.siblingCurrentIndex + L, te = v.siblingLeafNodeIds[z];
      te && (x.currentNodeId = te, m.value = !0, C({ force: !0 }));
    }, en = () => {
      ot.msg(t("localAi.feedbackSaved"));
    }, tn = async (v) => {
      const L = me.value;
      if (!L || i.value) return;
      const x = L.messages.find((ne) => ne.id === v);
      if (!x || x.role !== "assistant" || !x.parentId) return;
      L.currentNodeId = x.parentId;
      const z = K(L, {
        id: ae("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: x.parentId,
        streaming: !0,
        allowThinking: d.value && ft.value,
        promptTokens: $(Ke())
      });
      i.value = !0, Nr(), await C({ force: !0 });
      const te = performance.now();
      try {
        await To(z), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await F();
      } catch (ne) {
        if (!u.value) {
          const Oe = Lt(ne);
          ot.msg(`${t("localAi.chatFailed")}: ${Oe}`, "error"), z.error = Oe, z.interrupted = !!z.content.trim(), z.interrupted || (z.content = Oe), L.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), L.updatedAtLabel = new Date(L.updatedAt).toLocaleString(), await F();
        }
        z.streaming = !1, z.elapsedMs = performance.now() - te;
      } finally {
        i.value = !1, h.value = null, ko(), await C();
      }
    };
    return dt(async () => {
      await T(), S = setInterval(() => {
        Le().catch(
          (v) => mn.warn("[LocalAI] status timer failed", v)
        );
      }, 8e3);
    }), Ee(ft, (v) => {
      v || (d.value = !1);
    }), Da(() => {
      S && clearInterval(S), h.value && ms(h.value), ko();
    }), (v, L) => (P(), H("main", qT, [
      b("aside", YT, [
        b("header", ZT, [
          b("div", XT, [
            b(
              "h2",
              null,
              D(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            b(
              "p",
              null,
              D(c(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ])
        ]),
        b("div", QT, [
          M(c(qf), {
            theme: "outline",
            size: "17"
          }),
          Tt(b("input", {
            "onUpdate:modelValue": L[0] || (L[0] = (x) => ao(n) ? n.value = x : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, JT), [
            [Bo, c(n)]
          ])
        ]),
        b("section", e2, [
          b("div", t2, [
            b(
              "div",
              n2,
              D(c(t)("localAi.recent")),
              1
              /* TEXT */
            ),
            b("div", r2, [
              b("button", {
                class: "icon-action-btn icon-action-btn--primary",
                type: "button",
                title: c(t)("localAi.newChat"),
                onClick: we
              }, [
                M(c(Vf), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, o2),
              b("button", {
                class: "icon-action-btn",
                type: "button",
                title: c(t)("plugins.refresh"),
                onClick: T
              }, [
                M(c(Gl), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, a2)
            ])
          ]),
          c(pt).length ? (P(), H("div", s2, [
            (P(!0), H(
              kt,
              null,
              Xn(c(pt), (x) => (P(), H("div", {
                key: x.id,
                class: Y([
                  "chat-list-item",
                  c(o) === x.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (z) => Ye(x.id),
                onKeydown: vn(et((z) => Ye(x.id), ["prevent"]), ["enter"])
              }, [
                M(c(Kf), {
                  theme: "outline",
                  size: "16"
                }),
                b(
                  "span",
                  i2,
                  D(x.title),
                  1
                  /* TEXT */
                ),
                b(
                  "span",
                  c2,
                  D(V(x.updatedAt)),
                  1
                  /* TEXT */
                ),
                b("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: et((z) => Mt(x.id), ["stop"])
                }, [
                  M(c(os), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, u2)
              ], 42, l2))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (P(), H(
            "div",
            d2,
            D(c(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      b("section", f2, [
        b("header", p2, [
          b("div", m2, [
            b("div", h2, [
              b(
                "h3",
                null,
                D(c(me)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              b(
                "span",
                {
                  class: Y([
                    "status-pill",
                    c(E)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  L[7] || (L[7] = b(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  nn(
                    " " + D(c(De)),
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
              g2,
              D(c(E)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          b("div", v2, [
            M(c(qn), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: w
            }, {
              default: ue(() => [
                M(c(lu), {
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
              _: 1
              /* STABLE */
            })
          ])
        ]),
        b(
          "div",
          {
            ref_key: "messageListRef",
            ref: N,
            class: "message-list",
            onScroll: k
          },
          [
            b("div", b2, [
              b(
                "span",
                null,
                D(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(he).length ? re("v-if", !0) : (P(), H("div", y2, [
              M(c(Kl), {
                theme: "outline",
                size: "28"
              }),
              b(
                "div",
                _2,
                D(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              b(
                "div",
                w2,
                D(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (P(!0), H(
              kt,
              null,
              Xn(c(ye), (x) => (P(), H(
                "article",
                {
                  key: x.message.id,
                  class: Y(["message-row", `message-row--${x.message.role}`])
                },
                [
                  b("div", k2, [
                    x.message.role === "assistant" ? (P(), de(c(Kl), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (P(), H(
                      "span",
                      T2,
                      D(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  b("div", S2, [
                    x.message.role === "user" ? (P(), H("div", E2, [
                      b(
                        "div",
                        null,
                        D(x.message.content),
                        1
                        /* TEXT */
                      ),
                      x.message.attachments?.length ? (P(), H("div", A2, [
                        (P(!0), H(
                          kt,
                          null,
                          Xn(x.message.attachments, (z) => (P(), H("div", {
                            key: z.id,
                            class: "message-attachment-chip"
                          }, [
                            z.type === "image" && z.dataUrl ? (P(), H("img", {
                              key: 0,
                              src: z.dataUrl,
                              alt: z.name
                            }, null, 8, C2)) : (P(), H(
                              "span",
                              I2,
                              D(z.type === "text" ? "TXT" : "FILE"),
                              1
                              /* TEXT */
                            )),
                            b(
                              "span",
                              null,
                              D(z.name),
                              1
                              /* TEXT */
                            )
                          ]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : re("v-if", !0),
                      b(
                        "time",
                        null,
                        D(Gr(x.message)),
                        1
                        /* TEXT */
                      )
                    ])) : (P(), H(
                      kt,
                      { key: 1 },
                      [
                        b("div", L2, [
                          b(
                            "span",
                            null,
                            D(c(Ae)),
                            1
                            /* TEXT */
                          ),
                          b(
                            "small",
                            null,
                            D(Kr(x.message)),
                            1
                            /* TEXT */
                          )
                        ]),
                        b(
                          "div",
                          {
                            class: Y(["assistant-card", {
                              "assistant-card--streaming": x.message.streaming
                            }])
                          },
                          [
                            x.message.content ? (P(), H("div", O2, [
                              x.message.allowThinking && mr(x.message.content) ? (P(), H("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: x.message.streaming && hr(x.message)
                              }, [
                                b("summary", null, [
                                  b("span", R2, [
                                    M(c(Hl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    nn(
                                      " " + D(je(x.message)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  x.message.streaming ? (P(), H(
                                    "small",
                                    N2,
                                    D(hr(x.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                    1
                                    /* TEXT */
                                  )) : re("v-if", !0)
                                ]),
                                b("div", {
                                  class: "message-content markdown-body",
                                  onClick: Un,
                                  innerHTML: fr(mr(x.message.content))
                                }, null, 8, P2)
                              ], 8, x2)) : re("v-if", !0),
                              Rr(x.message.content) ? (P(), H("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                onClick: Un,
                                innerHTML: fr(Rr(x.message.content))
                              }, null, 8, $2)) : re("v-if", !0)
                            ])) : (P(), H(
                              "div",
                              M2,
                              D(gr(x.message)),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        x.message.content ? (P(), H("div", D2, [
                          b(
                            "span",
                            null,
                            " Context: " + D(ht(x.message).context) + "/" + D(ht(x.message).contextMax) + " (" + D(ht(x.message).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            " Output: " + D(ht(x.message).output) + "/" + D(ht(x.message).outputMax),
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            D(ht(x.message).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            D(ht(x.message).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : re("v-if", !0),
                        Dt(x.message) ? (P(), H(
                          "div",
                          F2,
                          D(Dt(x.message)),
                          1
                          /* TEXT */
                        )) : re("v-if", !0),
                        x.message.streaming ? re("v-if", !0) : (P(), H("div", z2, [
                          x.siblingLeafNodeIds.length > 1 ? (P(), H("div", B2, [
                            b("button", {
                              type: "button",
                              disabled: x.siblingCurrentIndex <= 0,
                              title: c(t)("localAi.previousVersion"),
                              onClick: (z) => Ht(x, -1)
                            }, " ‹ ", 8, V2),
                            b(
                              "span",
                              null,
                              D(x.siblingCurrentIndex + 1) + " / " + D(x.siblingLeafNodeIds.length),
                              1
                              /* TEXT */
                            ),
                            b("button", {
                              type: "button",
                              disabled: x.siblingCurrentIndex >= x.siblingLeafNodeIds.length - 1,
                              title: c(t)("localAi.nextVersion"),
                              onClick: (z) => Ht(x, 1)
                            }, " › ", 8, j2)
                          ])) : re("v-if", !0),
                          b("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (z) => oe(x.message)
                          }, [
                            M(c(jf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, U2),
                          x.message.role === "assistant" ? (P(), H("button", {
                            key: 1,
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (z) => tn(x.message.id)
                          }, [
                            M(c(Gl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, H2)) : re("v-if", !0),
                          b("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: en
                          }, [
                            M(c(Wf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, W2),
                          b("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: en
                          }, [
                            M(c(Uf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, G2),
                          b("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (z) => We(x.message)
                          }, [
                            M(c(Hf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, K2),
                          b("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (z) => xe(x.message.id)
                          }, [
                            M(c(os), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, q2)
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
        c(y) ? (P(), H("button", {
          key: 0,
          class: "scroll-bottom-btn",
          type: "button",
          title: c(t)("localAi.jumpToLatest"),
          onClick: B
        }, [
          M(c(Wl), {
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
        ], 8, Y2)) : re("v-if", !0),
        b(
          "form",
          {
            class: Y([
              "chat-input-card",
              c(p) ? "chat-input-card--focused" : ""
            ]),
            onDragover: L[4] || (L[4] = et(() => {
            }, ["prevent"])),
            onDrop: et(Or, ["prevent"]),
            onSubmit: et(ie, ["prevent"]),
            onFocusin: L[5] || (L[5] = (x) => p.value = !0),
            onFocusout: L[6] || (L[6] = (x) => p.value = !1)
          },
          [
            b(
              "input",
              {
                ref_key: "fileInputRef",
                ref: A,
                class: "attachment-input",
                type: "file",
                multiple: "",
                accept: ".txt,.md,.json,.csv,.html,.css,.js,.ts,.tsx,.vue,.rs,.py,.java,.go,.yaml,.yml,.toml,.xml,.log,image/png,image/jpeg,image/webp,.pdf,.doc,.docx,.xls,.xlsx",
                onChange: dr
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ),
            c(s).length ? (P(), H("div", Z2, [
              (P(!0), H(
                kt,
                null,
                Xn(c(s), (x) => (P(), H(
                  "div",
                  {
                    key: x.id,
                    class: Y([
                      "attachment-preview-item",
                      `attachment-preview-item--${x.status}`
                    ])
                  },
                  [
                    x.type === "image" && x.dataUrl ? (P(), H("img", {
                      key: 0,
                      src: x.dataUrl,
                      alt: x.name
                    }, null, 8, X2)) : (P(), H(
                      "span",
                      Q2,
                      D(x.type === "text" ? "TXT" : "FILE"),
                      1
                      /* TEXT */
                    )),
                    b("span", J2, [
                      b(
                        "strong",
                        null,
                        D(x.name),
                        1
                        /* TEXT */
                      ),
                      b(
                        "small",
                        null,
                        D(c(uT)(x.size)) + " · " + D(dn(x)),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("button", {
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: (z) => jn(x.id)
                    }, [
                      M(c(os), {
                        theme: "outline",
                        size: "12"
                      })
                    ], 8, eS)
                  ],
                  2
                  /* CLASS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : re("v-if", !0),
            Tt(b("textarea", {
              "onUpdate:modelValue": L[1] || (L[1] = (x) => ao(a) ? a.value = x : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: Yr
            }, null, 40, tS), [
              [Bo, c(a)]
            ]),
            b("div", nS, [
              b("div", rS, [
                b("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.addAttachment"),
                  onClick: Ze
                }, [
                  M(c(Gf), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, oS),
                c(ft) ? (P(), H("button", {
                  key: 0,
                  class: Y([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(d) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(d) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(d),
                  onClick: L[2] || (L[2] = (x) => d.value = !c(d))
                }, [
                  M(c(Hl), {
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
                ], 10, aS)) : re("v-if", !0),
                b("label", sS, [
                  Tt(b("select", {
                    "onUpdate:modelValue": L[3] || (L[3] = (x) => ao(f) ? f.value = x : null),
                    disabled: c(i) || !c(Ge).length,
                    onChange: Zt
                  }, [
                    (P(!0), H(
                      kt,
                      null,
                      Xn(c(Ge), (x) => (P(), H("option", {
                        key: x,
                        value: x
                      }, D(Q(x)), 9, iS))),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    c(Ge).length ? re("v-if", !0) : (P(), H(
                      "option",
                      cS,
                      D(c(Ae)),
                      1
                      /* TEXT */
                    ))
                  ], 40, lS), [
                    [Mf, c(f)]
                  ]),
                  M(c(Wl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              b("div", uS, [
                L[8] || (L[8] = b(
                  "span",
                  { class: "input-hint" },
                  "Enter · Shift + Enter",
                  -1
                  /* HOISTED */
                )),
                c(i) ? (P(), H("button", {
                  key: 0,
                  class: "send-btn send-btn--stop",
                  type: "button",
                  title: c(t)("localAi.stopGenerating"),
                  "aria-label": c(t)("localAi.stopGenerating"),
                  onClick: ra
                }, [
                  M(c(Zf), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, dS)) : (P(), H("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(G),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  M(c(Yf), {
                    theme: "outline",
                    size: "15"
                  })
                ], 8, fS))
              ])
            ])
          ],
          34
          /* CLASS, NEED_HYDRATION */
        )
      ])
    ]));
  }
}), gS = /* @__PURE__ */ ul(hS, [["__scopeId", "data-v-53583495"]]), vS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gS
}, Symbol.toStringTag, { value: "Module" }));
async function nu(e = {}) {
  return typeof e == "object" && Object.freeze(e), await $t("plugin:dialog|open", { options: e });
}
const bS = { class: "settings-panel local-ai-settings-shell" }, yS = { class: "local-ai-hero panel-card" }, _S = { class: "panel-title" }, wS = { class: "hero-desc" }, kS = { class: "header-actions" }, TS = {
  key: 0,
  class: "settings-grid"
}, SS = { class: "summary-panel panel-card" }, ES = { class: "status-strip" }, AS = { class: "memory-card" }, CS = { class: "memory-card__header" }, IS = { class: "memory-metrics" }, LS = { class: "bottleneck-row" }, OS = { class: "summary-card" }, xS = { class: "summary-card__title" }, RS = { class: "summary-card__desc" }, NS = { class: "service-controls" }, PS = { class: "service-url" }, $S = { class: "summary-card" }, MS = { class: "summary-card__title" }, DS = { class: "summary-card__desc" }, FS = { class: "summary-meta" }, zS = { class: "form-panel panel-card" }, BS = { class: "settings-section" }, VS = { class: "settings-section__header" }, jS = { class: "field-stack" }, US = ["title"], HS = { class: "path-control" }, WS = ["title"], GS = ["title"], KS = ["title"], qS = { class: "path-control" }, YS = ["placeholder"], ZS = { class: "settings-section grid-two" }, XS = { class: "settings-section__header" }, QS = { class: "param-grid" }, JS = ["title"], eE = ["title"], tE = ["title"], nE = ["title"], rE = ["title"], oE = ["title"], aE = { class: "settings-section grid-two" }, sE = { class: "settings-section__header" }, lE = { class: "switch-grid" }, iE = ["title"], cE = ["title"], uE = ["title"], dE = { class: "settings-section grid-two" }, fE = { class: "settings-section__header" }, pE = { class: "switch-grid switch-grid--two" }, mE = ["title"], hE = ["title"], gE = ["title"], vE = ["title"], bE = { class: "settings-section grid-two" }, yE = { class: "settings-section__header" }, _E = { class: "param-grid param-grid--three" }, wE = ["title"], kE = ["title"], TE = ["title"], SE = ["title"], EE = ["title"], AE = ["title"], CE = ["title"], IE = ["title"], LE = { class: "settings-footer" }, OE = ["title"], xE = /* @__PURE__ */ le({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Zo(), n = W(null), r = W(null), o = W(null), a = W(null), s = W(!1), i = W(!1), l = W(!1), u = W(!1), d = W(!1);
    let p = null;
    const m = R(() => !!a.value?.selectedModelPath), y = R(() => !!n.value?.mmprojPath), h = R({
      get: () => n.value?.modelPath ?? "",
      set: (K) => {
        n.value && (n.value.modelPath = K || void 0);
      }
    }), g = R({
      get: () => n.value?.mmprojPath ?? "",
      set: (K) => {
        n.value && (n.value.mmprojPath = K || void 0);
      }
    }), I = R(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), f = R(
      () => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), E = R(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), N = (K) => K.split(/[\\/]+/).pop() ?? K, A = R(() => {
      const G = N(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return G ? Number(G[1]) : 4;
    }), _ = R(() => {
      const K = n.value;
      if (!K)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const G = Math.max(1.4, A.value * 0.92), De = Math.min(1, Math.max(0, K.gpuLayers) / 32), me = K.ctxSize / 8192 * 0.38 * (K.kvOffload ? 1 : 0.12), he = K.batchSize / 512 * 0.18, ye = G * De + me + he, Q = G * (1 - De) + K.ctxSize / 8192 * 0.22, Ae = ye + Q, Ge = K.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : K.ctxSize >= 32768 || K.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: ye.toFixed(2),
        totalGb: Ae.toFixed(2),
        bottleneck: Ge
      };
    }), S = (K) => t(`localAi.paramHints.${K}`), O = async () => {
      r.value = await Xk();
    }, q = async () => {
      o.value = await uf();
    }, Z = async () => {
      n.value && (a.value = await cf(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, ae = async () => {
      s.value = !0;
      try {
        n.value = await lf(), await Promise.all([O(), Z(), q()]);
      } catch (K) {
        mn.error("[LocalAI] refresh settings failed", K), ot.msg(`${t("localAi.refreshFailed")}: ${K}`, "error");
      } finally {
        s.value = !1;
      }
    }, fe = async () => {
      if (n.value)
        try {
          await wa(n.value);
        } catch (K) {
          mn.warn("[LocalAI] autosave failed", K);
        }
    }, se = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await wa(n.value), await Promise.all([O(), Z(), q()]), ot.msg(t("localAi.configSaved"));
        } catch (K) {
          ot.msg(`${t("localAi.configSaveFailed")}: ${K}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, _e = async () => {
      const K = await nu({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !K || Array.isArray(K) || !n.value || (n.value.modelDir = K, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await Z());
    }, be = async () => {
      const K = await nu({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !K || Array.isArray(K) || !n.value || (n.value.runtimePath = K, await fe(), await O());
    }, j = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await wa(n.value), o.value = await Qk(n.value), ot.msg(t("localAi.serviceStarted"));
        } catch (K) {
          ot.msg(`${t("localAi.serviceStartFailed")}: ${K}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, X = async () => {
      u.value = !0;
      try {
        await se(), o.value = await df(), ot.msg(t("localAi.serviceRestarted"));
      } catch (K) {
        ot.msg(`${t("localAi.serviceRestartFailed")}: ${K}`, "error");
      } finally {
        u.value = !1;
      }
    }, U = async () => {
      d.value = !0;
      try {
        await Jk(), await q(), ot.msg(t("localAi.serviceStoppedMsg"));
      } catch (K) {
        ot.msg(`${t("localAi.serviceStopFailed")}: ${K}`, "error");
      } finally {
        d.value = !1;
      }
    }, pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return dt(async () => {
      await ae(), p = setInterval(() => {
        q().catch(
          (K) => mn.warn("[LocalAI] status refresh failed", K)
        );
      }, 5e3);
    }), Da(() => {
      p && clearInterval(p);
    }), (K, G) => {
      const De = dk, me = uk, he = qw, ye = bk;
      return P(), H("div", bS, [
        b("header", yS, [
          b("div", null, [
            b(
              "h3",
              _S,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              wS,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", kS, [
            M(c(qn), {
              size: "small",
              plain: "",
              onClick: pe
            }, {
              default: ue(() => [
                nn(
                  D(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            M(c(qn), {
              size: "small",
              loading: c(s),
              onClick: ae
            }, {
              default: ue(() => [
                nn(
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
        c(n) ? (P(), H("main", TS, [
          b("aside", SS, [
            b("div", ES, [
              b(
                "div",
                {
                  class: Y(["status-item", { ready: c(r)?.available }])
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
                    D(c(I)),
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
                  class: Y(["status-item", { ready: c(m) }])
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
                  class: Y(["status-item", { ready: c(o)?.healthy }])
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
                    D(c(E)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", AS, [
              b("div", CS, [
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
              b("div", IS, [
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
                    D(c(_).gpuGb) + " GB",
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
                    D(c(_).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", LS, [
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
                  D(c(_).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            b("section", OS, [
              b(
                "div",
                xS,
                D(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                RS,
                D(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", NS, [
                M(c(qn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: j
                }, {
                  default: ue(() => [
                    nn(
                      D(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(qn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: X
                }, {
                  default: ue(() => [
                    nn(
                      D(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(qn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(d),
                  disabled: !c(o)?.running,
                  onClick: U
                }, {
                  default: ue(() => [
                    nn(
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
                PS,
                D(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", $S, [
              b(
                "div",
                MS,
                D(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                DS,
                D(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", FS, [
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
                    D(c(h) ? c(t)("common.yes") : c(t)("common.no")),
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
                    D(c(g) ? c(t)("common.yes") : c(t)("common.no")),
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
          b("section", zS, [
            b("div", BS, [
              b("div", VS, [
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
              b("div", jS, [
                b("label", {
                  class: "field-row",
                  title: S("modelDir")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  b("div", HS, [
                    Tt(b(
                      "input",
                      {
                        "onUpdate:modelValue": G[0] || (G[0] = (Q) => c(n).modelDir = Q),
                        class: "text-input",
                        onChange: Z
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Bo, c(n).modelDir]
                    ]),
                    M(c(qn), {
                      size: "small",
                      plain: "",
                      onClick: _e
                    }, {
                      default: ue(() => [
                        nn(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, US),
                b("label", {
                  class: "field-row",
                  title: S("mainModel")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  M(me, {
                    modelValue: c(h),
                    "onUpdate:modelValue": G[1] || (G[1] = (Q) => ao(h) ? h.value = Q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: ue(() => [
                      (P(!0), H(
                        kt,
                        null,
                        Xn(c(a)?.mainModels ?? [], (Q) => (P(), de(De, {
                          key: Q,
                          label: N(Q),
                          value: Q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, WS),
                b("label", {
                  class: "field-row",
                  title: S("mmprojModel")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  M(me, {
                    modelValue: c(g),
                    "onUpdate:modelValue": G[2] || (G[2] = (Q) => ao(g) ? g.value = Q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: ue(() => [
                      (P(!0), H(
                        kt,
                        null,
                        Xn(c(a)?.mmprojModels ?? [], (Q) => (P(), de(De, {
                          key: Q,
                          label: N(Q),
                          value: Q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, GS),
                b("label", {
                  class: "field-row",
                  title: S("runtimePath")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  b("div", qS, [
                    Tt(b("input", {
                      "onUpdate:modelValue": G[3] || (G[3] = (Q) => c(n).runtimePath = Q),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, YS), [
                      [Bo, c(n).runtimePath]
                    ]),
                    M(c(qn), {
                      size: "small",
                      plain: "",
                      onClick: be
                    }, {
                      default: ue(() => [
                        nn(
                          D(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, KS)
              ])
            ]),
            b("div", ZS, [
              b("div", XS, [
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
              b("div", QS, [
                b("label", {
                  class: "number-field",
                  title: S("ctxSize")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": G[4] || (G[4] = (Q) => c(n).ctxSize = Q),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, JS),
                b("label", {
                  class: "number-field",
                  title: S("gpuLayers")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": G[5] || (G[5] = (Q) => c(n).gpuLayers = Q),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, eE),
                b("label", {
                  class: "number-field",
                  title: S("threads")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": G[6] || (G[6] = (Q) => c(n).threads = Q),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, tE),
                b("label", {
                  class: "number-field",
                  title: S("batchSize")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": G[7] || (G[7] = (Q) => c(n).batchSize = Q),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, nE),
                b("label", {
                  class: "number-field",
                  title: S("ubatchSize")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": G[8] || (G[8] = (Q) => c(n).ubatchSize = Q),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, rE),
                b("label", {
                  class: "number-field",
                  title: S("mainGpu")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": G[9] || (G[9] = (Q) => c(n).mainGpu = Q),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, oE)
              ])
            ]),
            b("div", aE, [
              b("div", sE, [
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
              b("div", lE, [
                b("label", {
                  title: S("flashAttn")
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
                    "onUpdate:modelValue": G[10] || (G[10] = (Q) => c(n).flashAttn = Q)
                  }, null, 8, ["modelValue"])
                ], 8, iE),
                b("label", {
                  title: S("kvOffload")
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
                    "onUpdate:modelValue": G[11] || (G[11] = (Q) => c(n).kvOffload = Q)
                  }, null, 8, ["modelValue"])
                ], 8, cE),
                b("label", {
                  title: S("mmap")
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
                    "onUpdate:modelValue": G[12] || (G[12] = (Q) => c(n).mmap = Q)
                  }, null, 8, ["modelValue"])
                ], 8, uE)
              ])
            ]),
            b("div", dE, [
              b("div", fE, [
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
              b("div", pE, [
                b("label", {
                  title: S("autoStart")
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
                    "onUpdate:modelValue": G[13] || (G[13] = (Q) => c(n).autoStartOnRequest = Q)
                  }, null, 8, ["modelValue"])
                ], 8, mE),
                b("label", {
                  title: S("keepAlive")
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
                    "onUpdate:modelValue": G[14] || (G[14] = (Q) => c(n).keepAlive = Q)
                  }, null, 8, ["modelValue"])
                ], 8, hE),
                b("label", {
                  class: "number-field",
                  title: S("idleTimeout")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": G[15] || (G[15] = (Q) => c(n).idleTimeoutMinutes = Q),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, gE),
                b("label", {
                  class: "number-field",
                  title: S("requestTimeout")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": G[16] || (G[16] = (Q) => c(n).requestTimeoutSecs = Q),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, vE)
              ])
            ]),
            b("div", bE, [
              b("div", yE, [
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
              b("div", _E, [
                b("label", {
                  class: "number-field",
                  title: S("temperature")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": G[17] || (G[17] = (Q) => c(n).temperature = Q),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, wE),
                b("label", {
                  class: "number-field",
                  title: S("topP")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": G[18] || (G[18] = (Q) => c(n).topP = Q),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, kE),
                b("label", {
                  class: "number-field",
                  title: S("topK")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": G[19] || (G[19] = (Q) => c(n).topK = Q),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, TE),
                b("label", {
                  class: "number-field",
                  title: S("minP")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": G[20] || (G[20] = (Q) => c(n).minP = Q),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, SE),
                b("label", {
                  class: "number-field",
                  title: S("repeatPenalty")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": G[21] || (G[21] = (Q) => c(n).repeatPenalty = Q),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, EE),
                b("label", {
                  class: "number-field",
                  title: S("repeatLastN")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": G[22] || (G[22] = (Q) => c(n).repeatLastN = Q),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AE),
                b("label", {
                  class: "number-field",
                  title: S("maxTokens")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": G[23] || (G[23] = (Q) => c(n).maxTokens = Q),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, CE),
                b("label", {
                  class: "number-field",
                  title: S("port")
                }, [
                  b(
                    "span",
                    null,
                    D(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  M(he, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": G[24] || (G[24] = (Q) => c(n).port = Q),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, IE)
              ])
            ]),
            b("div", LE, [
              M(c(qn), {
                type: "primary",
                loading: c(i),
                onClick: se
              }, {
                default: ue(() => [
                  nn(
                    D(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (P(), H("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, D(c(o).commandLine), 9, OE)) : re("v-if", !0)
            ])
          ])
        ])) : re("v-if", !0)
      ]);
    };
  }
}), RE = /* @__PURE__ */ ul(xE, [["__scopeId", "data-v-c43741fb"]]), NE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RE
}, Symbol.toStringTag, { value: "Module" }));
export {
  ME as activate,
  ME as default
};
