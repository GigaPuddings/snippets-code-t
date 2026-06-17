var _f = Object.defineProperty;
var wf = (e, t, n) => t in e ? _f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var He = (e, t, n) => wf(e, typeof t != "symbol" ? t + "" : t, n);
import * as as from "vue";
import { inject as Ve, createVNode as M, defineAsyncComponent as kf, ref as W, shallowRef as wr, computed as R, watch as Ee, onMounted as pt, onUnmounted as za, defineComponent as le, h as lu, Text as iu, Fragment as gt, createElementBlock as H, openBlock as P, normalizeClass as q, createCommentVNode as ne, renderSlot as Se, createElementVNode as b, getCurrentInstance as Kt, unref as c, watchEffect as cu, readonly as qs, getCurrentScope as Tf, onScopeDispose as Sf, nextTick as ut, isRef as io, warn as Ef, provide as Fn, mergeProps as co, toRef as Xn, useAttrs as Af, useSlots as Cf, normalizeStyle as Nt, createBlock as de, withCtx as ue, resolveDynamicComponent as Wt, withModifiers as et, toDisplayString as D, onBeforeUnmount as Vn, Transition as wo, withDirectives as Tt, vShow as ar, reactive as Mr, onActivated as If, onUpdated as uu, cloneVNode as Lf, Comment as Of, Teleport as xf, onBeforeMount as Rf, onDeactivated as Nf, createTextVNode as nn, withKeys as bn, createSlots as Pf, toRaw as $f, toRefs as Ys, resolveComponent as Nr, resolveDirective as Mf, toHandlerKey as Df, renderList as Zn, vModelText as Vo, shallowReactive as Ff, isVNode as jo, render as Sa, vModelSelect as zf } from "vue";
var Bf = {
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
function Vf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function jf(e, t, n) {
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
var Uf = Symbol("icon-context");
function Vt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Vf(), i = Ve(Uf, Bf);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, y = a.fill, g = a.spin, v = jf(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: m,
          fill: y
        }, i), I = [i.prefix + "-icon"];
        return I.push(i.prefix + "-icon-" + e), t && i.rtl && I.push(i.prefix + "-icon-rtl"), g && I.push(i.prefix + "-icon-spin"), M("span", {
          class: I.join(" ")
        }, [n(v)]);
      };
    }
  };
  return r;
}
const Hf = Vt("add", !1, function(e) {
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
}), Kl = Vt("brain", !0, function(e) {
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
}), ql = Vt("copy", !0, function(e) {
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
}), aa = Vt("delete", !1, function(e) {
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
}), Wf = Vt("dislike", !0, function(e) {
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
}), Yl = Vt("down", !1, function(e) {
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
}), Zl = Vt("edit", !0, function(e) {
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
}), Gf = Vt("like", !1, function(e) {
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
}), Kf = Vt("link", !0, function(e) {
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
}), qf = Vt("message", !0, function(e) {
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
}), Xl = Vt("refresh", !0, function(e) {
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
}), Ql = Vt("robot", !0, function(e) {
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
}), Yf = Vt("search", !0, function(e) {
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
}), Zf = Vt("send", !0, function(e) {
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
}), du = Vt("setting-two", !1, function(e) {
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
}), Xf = Vt("square", !1, function(e) {
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
}), WE = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => AS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: du,
    component: kf(() => Promise.resolve().then(() => jE))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Qf(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Jl = typeof window < "u", Br = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Jf = (e, t, n) => ep({ l: e, k: t, s: n }), ep = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ct = (e) => typeof e == "number" && isFinite(e), tp = (e) => Zs(e) === "[object Date]", Ea = (e) => Zs(e) === "[object RegExp]", Ba = (e) => $e(e) && Object.keys(e).length === 0, Pt = Object.assign, np = Object.create, We = (e = null) => np(e);
let ei;
const ba = () => ei || (ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : We());
function ti(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ni(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function rp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${ni(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${ni(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const op = Object.prototype.hasOwnProperty;
function yn(e, t) {
  return op.call(e, t);
}
const ft = Array.isArray, at = (e) => typeof e == "function", ce = (e) => typeof e == "string", dt = (e) => typeof e == "boolean", Me = (e) => e !== null && typeof e == "object", ap = (e) => Me(e) && at(e.then) && at(e.catch), fu = Object.prototype.toString, Zs = (e) => fu.call(e), $e = (e) => Zs(e) === "[object Object]", sp = (e) => e == null ? "" : ft(e) || $e(e) && e.toString === fu ? JSON.stringify(e, null, 2) : String(e);
function Xs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const sa = (e) => !Me(e) || ft(e);
function ya(e, t) {
  if (sa(e) || sa(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Me(r[a]) && !Me(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : We()), sa(o[a]) || sa(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function lp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ts(e, t, n) {
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
}, ip = 17;
function Va(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function cp(e) {
  throw e;
}
const Cn = " ", up = "\r", zt = `
`, dp = "\u2028", fp = "\u2029";
function pp(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (L) => t[L] === up && t[L + 1] === zt, i = (L) => t[L] === zt, l = (L) => t[L] === fp, u = (L) => t[L] === dp, d = (L) => s(L) || i(L) || l(L) || u(L), p = () => n, m = () => r, y = () => o, g = () => a, v = (L) => s(L) || l(L) || u(L) ? zt : t[L], I = () => v(n), f = () => v(n + a);
  function E() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function N() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function A() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(L = 0) {
    a = L;
  }
  function S() {
    const L = n + a;
    for (; L !== n; )
      E();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: y,
    peekOffset: g,
    charAt: v,
    currentChar: I,
    currentPeek: f,
    next: E,
    peek: N,
    reset: A,
    resetPeek: _,
    skipToPeek: S
  };
}
const Wn = void 0, mp = ".", ri = "'", hp = "tokenizer";
function gp(e, t = {}) {
  const n = t.location !== !1, r = pp(e), o = () => r.index(), a = () => lp(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
      const ge = n ? Ts(Le.startLoc, C) : null, T = Va(k, ge, {
        domain: hp,
        args: ee
      });
      d(T);
    }
  }
  function m(k, C, B) {
    k.endLoc = a(), k.currentType = C;
    const ee = { type: C };
    return n && (ee.loc = Ts(k.startLoc, k.endLoc)), B != null && (ee.value = B), ee;
  }
  const y = (k) => m(
    k,
    13
    /* TokenTypes.EOF */
  );
  function g(k, C) {
    return k.currentChar() === C ? (k.next(), C) : (p(Fe.EXPECTED_TOKEN, a(), 0, C), "");
  }
  function v(k) {
    let C = "";
    for (; k.currentPeek() === Cn || k.currentPeek() === zt; )
      C += k.currentPeek(), k.peek();
    return C;
  }
  function I(k) {
    const C = v(k);
    return k.skipToPeek(), C;
  }
  function f(k) {
    if (k === Wn)
      return !1;
    const C = k.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C === 95;
  }
  function E(k) {
    if (k === Wn)
      return !1;
    const C = k.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function N(k, C) {
    const { currentType: B } = C;
    if (B !== 2)
      return !1;
    v(k);
    const ee = f(k.currentPeek());
    return k.resetPeek(), ee;
  }
  function A(k, C) {
    const { currentType: B } = C;
    if (B !== 2)
      return !1;
    v(k);
    const ee = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), Le = E(ee);
    return k.resetPeek(), Le;
  }
  function _(k, C) {
    const { currentType: B } = C;
    if (B !== 2)
      return !1;
    v(k);
    const ee = k.currentPeek() === ri;
    return k.resetPeek(), ee;
  }
  function S(k, C) {
    const { currentType: B } = C;
    if (B !== 7)
      return !1;
    v(k);
    const ee = k.currentPeek() === ".";
    return k.resetPeek(), ee;
  }
  function L(k, C) {
    const { currentType: B } = C;
    if (B !== 8)
      return !1;
    v(k);
    const ee = f(k.currentPeek());
    return k.resetPeek(), ee;
  }
  function Y(k, C) {
    const { currentType: B } = C;
    if (!(B === 7 || B === 11))
      return !1;
    v(k);
    const ee = k.currentPeek() === ":";
    return k.resetPeek(), ee;
  }
  function Z(k, C) {
    const { currentType: B } = C;
    if (B !== 9)
      return !1;
    const ee = () => {
      const ge = k.currentPeek();
      return ge === "{" ? f(k.peek()) : ge === "@" || ge === "|" || ge === ":" || ge === "." || ge === Cn || !ge ? !1 : ge === zt ? (k.peek(), ee()) : fe(k, !1);
    }, Le = ee();
    return k.resetPeek(), Le;
  }
  function ae(k) {
    v(k);
    const C = k.currentPeek() === "|";
    return k.resetPeek(), C;
  }
  function fe(k, C = !0) {
    const B = (Le = !1, ge = "") => {
      const T = k.currentPeek();
      return T === "{" || T === "@" || !T ? Le : T === "|" ? !(ge === Cn || ge === zt) : T === Cn ? (k.peek(), B(!0, Cn)) : T === zt ? (k.peek(), B(!0, zt)) : !0;
    }, ee = B();
    return C && k.resetPeek(), ee;
  }
  function se(k, C) {
    const B = k.currentChar();
    return B === Wn ? Wn : C(B) ? (k.next(), B) : null;
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
  function Q(k) {
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
      if (B === Cn || B === zt)
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
    for (; C = Q(k); )
      B += C;
    const ee = k.currentChar();
    if (ee && ee !== "}" && ee !== Wn && ee !== Cn && ee !== zt && ee !== "　") {
      const Le = wt(k);
      return p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, B + Le), B + Le;
    }
    return k.currentChar() === Wn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), B;
  }
  function ye(k) {
    I(k);
    let C = "";
    return k.currentChar() === "-" ? (k.next(), C += `-${De(k)}`) : C += De(k), k.currentChar() === Wn && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), C;
  }
  function J(k) {
    return k !== ri && k !== zt;
  }
  function Ae(k) {
    I(k), g(k, "'");
    let C = "", B = "";
    for (; C = se(k, J); )
      C === "\\" ? B += Ge(k) : B += C;
    const ee = k.currentChar();
    return ee === zt || ee === Wn ? (p(Fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ee === zt && (k.next(), g(k, "'")), B) : (g(k, "'"), B);
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
    g(k, C);
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
  function Ke(k) {
    return k !== "{" && k !== "}" && k !== Cn && k !== zt;
  }
  function wt(k) {
    I(k);
    let C = "", B = "";
    for (; C = se(k, Ke); )
      B += C;
    return B;
  }
  function Qe(k) {
    let C = "", B = "";
    for (; C = be(k); )
      B += C;
    return B;
  }
  function mt(k) {
    const C = (B) => {
      const ee = k.currentChar();
      return ee === "{" || ee === "@" || ee === "|" || ee === "(" || ee === ")" || !ee || ee === Cn ? B : (B += ee, k.next(), C(B));
    };
    return C("");
  }
  function ht(k) {
    I(k);
    const C = g(
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
          return C.braceNest > 0 && p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), B = m(C, 1, ht(k)), C.braceNest = 0, C.inLinked = !1, B;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6))
          return p(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), C.braceNest = 0, nt(k, C);
        if (Le = N(k, C))
          return B = m(C, 4, he(k)), I(k), B;
        if (ge = A(k, C))
          return B = m(C, 5, ye(k)), I(k), B;
        if (T = _(k, C))
          return B = m(C, 6, Ae(k)), I(k), B;
        if (!Le && !ge && !T)
          return B = m(C, 12, wt(k)), p(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, B.value), I(k), B;
        break;
      }
    }
    return B;
  }
  function Et(k, C) {
    const { currentType: B } = C;
    let ee = null;
    const Le = k.currentChar();
    switch ((B === 7 || B === 8 || B === 11 || B === 9) && (Le === zt || Le === Cn) && p(Fe.INVALID_LINKED_FORMAT, a(), 0), Le) {
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
        return ae(k) ? (ee = m(C, 1, ht(k)), C.braceNest = 0, C.inLinked = !1, ee) : S(k, C) || Y(k, C) ? (I(k), Et(k, C)) : L(k, C) ? (I(k), m(C, 11, Qe(k))) : Z(k, C) ? (I(k), Le === "{" ? St(k, C) || ee : m(C, 10, mt(k))) : (B === 7 && p(Fe.INVALID_LINKED_FORMAT, a(), 0), C.braceNest = 0, C.inLinked = !1, nt(k, C));
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
          return B = m(C, 1, ht(k)), C.braceNest = 0, C.inLinked = !1, B;
        if (fe(k))
          return m(C, 0, me(k));
        break;
      }
    }
    return B;
  }
  function kt() {
    const { currentType: k, offset: C, startLoc: B, endLoc: ee } = l;
    return l.lastType = k, l.lastOffset = C, l.lastStartLoc = B, l.lastEndLoc = ee, l.offset = o(), l.startLoc = a(), r.currentChar() === Wn ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : nt(r, l);
  }
  return {
    nextToken: kt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const vp = "parser", bp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function yp(e, t, n) {
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
function _p(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, E, N, A, ..._) {
    const S = f.currentPosition();
    if (S.offset += A, S.column += A, n) {
      const L = t ? Ts(N, S) : null, Y = Va(E, L, {
        domain: vp,
        args: _
      });
      n(Y);
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
    return S.value = E.replace(bp, yp), f.nextToken(), a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function d(f) {
    const E = f.nextToken(), N = f.context(), { lastOffset: A, lastStartLoc: _ } = N, S = o(8, A, _);
    return E.type !== 11 ? (r(f, Fe.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), S.value = "", a(S, A, _), {
      nextConsumeToken: E,
      node: S
    }) : (E.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, In(E)), S.value = E.value || "", a(S, f.currentOffset(), f.currentPosition()), {
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
    switch (A.type !== 9 && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(A)), A = f.nextToken(), A.type === 2 && (A = f.nextToken()), A.type) {
      case 10:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(A)), N.key = p(f, A.value || "");
        break;
      case 4:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(A)), N.key = l(f, A.value || "");
        break;
      case 5:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(A)), N.key = i(f, A.value || "");
        break;
      case 6:
        A.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(A)), N.key = u(f, A.value || "");
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
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(Z)), _.items.push(s(f, Z.value || ""));
          break;
        case 5:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(Z)), _.items.push(i(f, Z.value || ""));
          break;
        case 4:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(Z)), _.items.push(l(f, Z.value || ""));
          break;
        case 6:
          Z.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, In(Z)), _.items.push(u(f, Z.value || ""));
          break;
        case 7: {
          const ae = m(f);
          _.items.push(ae.node), S = ae.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const L = E.currentType === 1 ? E.lastOffset : f.currentOffset(), Y = E.currentType === 1 ? E.lastEndLoc : f.currentPosition();
    return a(_, L, Y), _;
  }
  function g(f, E, N, A) {
    const _ = f.context();
    let S = A.items.length === 0;
    const L = o(1, E, N);
    L.cases = [], L.cases.push(A);
    do {
      const Y = y(f);
      S || (S = Y.items.length === 0), L.cases.push(Y);
    } while (_.currentType !== 13);
    return S && r(f, Fe.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), a(L, f.currentOffset(), f.currentPosition()), L;
  }
  function v(f) {
    const E = f.context(), { offset: N, startLoc: A } = E, _ = y(f);
    return E.currentType === 13 ? _ : g(f, N, A, _);
  }
  function I(f) {
    const E = gp(f, Pt({}, e)), N = E.context(), A = o(0, N.offset, N.startLoc);
    return t && A.loc && (A.loc.source = f), A.body = v(E), e.onCacheKey && (A.cacheKey = e.onCacheKey(f)), N.currentType !== 13 && r(E, Fe.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, f[N.offset] || ""), a(A, E.currentOffset(), E.currentPosition()), A;
  }
  return { parse: I };
}
function In(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function wp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function oi(e, t) {
  for (let n = 0; n < e.length; n++)
    Qs(e[n], t);
}
function Qs(e, t) {
  switch (e.type) {
    case 1:
      oi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      oi(e.items, t);
      break;
    case 6: {
      Qs(e.key, t), t.helper(
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
function kp(e, t = {}) {
  const n = wp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Qs(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Tp(e) {
  const t = e.body;
  return t.type === 2 ? ai(t) : t.cases.forEach((n) => ai(n)), e;
}
function ai(e) {
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
      e.static = Xs(t);
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
function Sp(e, t) {
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
  function l(v, I) {
    s.code += v;
  }
  function u(v, I = !0) {
    const f = I ? r : "";
    l(o ? f + "  ".repeat(v) : f);
  }
  function d(v = !0) {
    const I = ++s.indentLevel;
    v && u(I);
  }
  function p(v = !0) {
    const I = --s.indentLevel;
    v && u(I);
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
function Ep(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), uo(e, t.key), t.modifier ? (e.push(", "), uo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ap(e, t) {
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
function Cp(e, t) {
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
function Ip(e, t) {
  t.body ? uo(e, t.body) : e.push("null");
}
function uo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ip(e, t);
      break;
    case 1:
      Cp(e, t);
      break;
    case 2:
      Ap(e, t);
      break;
    case 6:
      Ep(e, t);
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
const Lp = (e, t = {}) => {
  const n = ce(t.mode) ? t.mode : "normal", r = ce(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Sp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Xs(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), uo(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Op(e, t = {}) {
  const n = Pt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = _p(n).parse(e);
  return r ? (a && Tp(i), o && ao(i), { ast: i, code: "" }) : (kp(i, n), Lp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function xp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ba().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function $n(e) {
  return Me(e) && Js(e) === 0 && (yn(e, "b") || yn(e, "body"));
}
const pu = ["b", "body"];
function Rp(e) {
  return Sr(e, pu);
}
const mu = ["c", "cases"];
function Np(e) {
  return Sr(e, mu, []);
}
const hu = ["s", "static"];
function Pp(e) {
  return Sr(e, hu);
}
const gu = ["i", "items"];
function $p(e) {
  return Sr(e, gu, []);
}
const vu = ["t", "type"];
function Js(e) {
  return Sr(e, vu);
}
const bu = ["v", "value"];
function la(e, t) {
  const n = Sr(e, bu);
  if (n != null)
    return n;
  throw Uo(t);
}
const yu = ["m", "modifier"];
function Mp(e) {
  return Sr(e, yu);
}
const _u = ["k", "key"];
function Dp(e) {
  const t = Sr(e, _u);
  if (t)
    return t;
  throw Uo(
    6
    /* NodeTypes.Linked */
  );
}
function Sr(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (yn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const wu = [
  ...pu,
  ...mu,
  ...hu,
  ...gu,
  ..._u,
  ...yu,
  ...bu,
  ...vu
];
function Uo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ss(e) {
  return (n) => Fp(n, e);
}
function Fp(e, t) {
  const n = Rp(t);
  if (n == null)
    throw Uo(
      0
      /* NodeTypes.Resource */
    );
  if (Js(n) === 1) {
    const a = Np(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      si(e, i)
    ], []));
  } else
    return si(e, n);
}
function si(e, t) {
  const n = Pp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = $p(t).reduce((o, a) => [...o, Ss(e, a)], []);
    return e.normalize(r);
  }
}
function Ss(e, t) {
  const n = Js(t);
  switch (n) {
    case 3:
      return la(t, n);
    case 9:
      return la(t, n);
    case 4: {
      const r = t;
      if (yn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (yn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Uo(n);
    }
    case 5: {
      const r = t;
      if (yn(r, "i") && Ct(r.i))
        return e.interpolate(e.list(r.i));
      if (yn(r, "index") && Ct(r.index))
        return e.interpolate(e.list(r.index));
      throw Uo(n);
    }
    case 6: {
      const r = t, o = Mp(r), a = Dp(r);
      return e.linked(Ss(e, a), o ? Ss(e, o) : void 0, e.type);
    }
    case 7:
      return la(t, n);
    case 8:
      return la(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const zp = (e) => e;
let ia = We();
function Bp(e, t = {}) {
  let n = !1;
  const r = t.onError || cp;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Op(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Vp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ce(e)) {
    dt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || zp)(e), o = ia[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = Bp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ss(a);
    return s ? i : ia[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = ia[n];
      return r || (ia[n] = ss(e));
    } else
      return ss(e);
  }
}
const Qn = {
  INVALID_ARGUMENT: ip,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, jp = 24;
function Jn(e) {
  return Va(e, null, void 0);
}
function el(e, t) {
  return t.locale != null ? li(t.locale) : li(e.locale);
}
let ls;
function li(e) {
  if (ce(e))
    return e;
  if (at(e)) {
    if (e.resolvedOnce && ls != null)
      return ls;
    if (e.constructor.name === "Function") {
      const t = e();
      if (ap(t))
        throw Jn(Qn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ls = t;
    } else
      throw Jn(Qn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Jn(Qn.NOT_SUPPORT_LOCALE_TYPE);
}
function Up(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ft(t) ? t : Me(t) ? Object.keys(t) : ce(t) ? [t] : [n]
  ])];
}
function ku(e, t, n) {
  const r = ce(n) ? n : Aa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; ft(s); )
      s = ii(a, s, t);
    const i = ft(t) || !$e(t) ? t : t.default ? t.default : null;
    s = ce(i) ? [i] : i, ft(s) && ii(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function ii(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && dt(r); o++) {
    const a = t[o];
    ce(a) && (r = Hp(e, t[o], n));
  }
  return r;
}
function Hp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Wp(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Wp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ft(n) || $e(n)) && n[o] && (r = n[o]);
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
const Gp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Kp(e) {
  return Gp.test(e);
}
function qp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Yp(e) {
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
function Zp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Kp(t) ? qp(t) : "*" + t;
}
function Xp(e) {
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
      if (o = 0, s === void 0 || (s = Zp(s), s === !1))
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
      if (l = Yp(a), p = Er[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = m[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ci = /* @__PURE__ */ new Map();
function Qp(e, t) {
  return Me(e) ? e[t] : null;
}
function Jp(e, t) {
  if (!Me(e))
    return null;
  let n = ci.get(t);
  if (n || (n = Xp(t), n && ci.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (wu.includes(s) && $n(o))
      return null;
    const i = o[s];
    if (i === void 0 || at(o))
      return null;
    o = i, a++;
  }
  return o;
}
const em = "11.2.2", ja = -1, Aa = "en-US", ui = "", di = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function tm() {
  return {
    upper: (e, t) => t === "text" && ce(e) ? e.toUpperCase() : t === "vnode" && Me(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ce(e) ? e.toLowerCase() : t === "vnode" && Me(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ce(e) ? di(e) : t === "vnode" && Me(e) && "__v_isVNode" in e ? di(e.children) : e
  };
}
let Tu;
function nm(e) {
  Tu = e;
}
let Su;
function rm(e) {
  Su = e;
}
let Eu;
function om(e) {
  Eu = e;
}
let Au = null;
const fi = (e) => {
  Au = e;
}, am = () => Au;
let pi = 0;
function sm(e = {}) {
  const t = at(e.onWarn) ? e.onWarn : Qf, n = ce(e.version) ? e.version : em, r = ce(e.locale) || at(e.locale) ? e.locale : Aa, o = at(r) ? Aa : r, a = ft(e.fallbackLocale) || $e(e.fallbackLocale) || ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = $e(e.messages) ? e.messages : is(o), i = $e(e.datetimeFormats) ? e.datetimeFormats : is(o), l = $e(e.numberFormats) ? e.numberFormats : is(o), u = Pt(We(), e.modifiers, tm()), d = e.pluralRules || We(), p = at(e.missing) ? e.missing : null, m = dt(e.missingWarn) || Ea(e.missingWarn) ? e.missingWarn : !0, y = dt(e.fallbackWarn) || Ea(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, v = !!e.unresolving, I = at(e.postTranslation) ? e.postTranslation : null, f = $e(e.processor) ? e.processor : null, E = dt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter, A = at(e.messageCompiler) ? e.messageCompiler : Tu, _ = at(e.messageResolver) ? e.messageResolver : Su || Qp, S = at(e.localeFallbacker) ? e.localeFallbacker : Eu || Up, L = Me(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, Z = Me(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), ae = Me(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), fe = Me(Y.__meta) ? Y.__meta : {};
  pi++;
  const se = {
    version: n,
    cid: pi,
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
    postTranslation: I,
    processor: f,
    warnHtmlMessage: E,
    escapeParameter: N,
    messageCompiler: A,
    messageResolver: _,
    localeFallbacker: S,
    fallbackContext: L,
    onWarn: t,
    __meta: fe
  };
  return se.datetimeFormats = i, se.numberFormats = l, se.__datetimeFormatters = Z, se.__numberFormatters = ae, se;
}
const is = (e) => ({ [e]: We() });
function tl(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return ce(i) ? i : t;
  } else
    return t;
}
function Ao(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function lm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function im(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (lm(e, t[r]))
      return !0;
  return !1;
}
function mi(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, p] = Es(...t), m = dt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  dt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = el(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!ce(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let I = {}, f, E = null;
  const N = "datetime format";
  for (let S = 0; S < v.length && (f = v[S], I = n[f] || {}, E = I[l], !$e(E)); S++)
    tl(e, l, f, m, N);
  if (!$e(E) || !ce(f))
    return r ? ja : l;
  let A = `${f}__${l}`;
  Ba(p) || (A = `${A}__${JSON.stringify(p)}`);
  let _ = i.get(A);
  return _ || (_ = new Intl.DateTimeFormat(f, Pt({}, E, p)), i.set(A, _)), y ? _.formatToParts(u) : _.format(u);
}
const Cu = [
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
function Es(...e) {
  const [t, n, r, o] = e, a = We();
  let s = We(), i;
  if (ce(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Jn(Qn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Jn(Qn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (tp(t)) {
    if (isNaN(t.getTime()))
      throw Jn(Qn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ct(t))
    i = t;
  else
    throw Jn(Qn.INVALID_ARGUMENT);
  return ce(n) ? a.key = n : $e(n) && Object.keys(n).forEach((l) => {
    Cu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ce(r) ? a.locale = r : $e(r) && (s = r), $e(o) && (s = o), [a.key || "", i, a, s];
}
function hi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function gi(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, p] = As(...t), m = dt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  dt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, g = el(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!ce(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let I = {}, f, E = null;
  const N = "number format";
  for (let S = 0; S < v.length && (f = v[S], I = n[f] || {}, E = I[l], !$e(E)); S++)
    tl(e, l, f, m, N);
  if (!$e(E) || !ce(f))
    return r ? ja : l;
  let A = `${f}__${l}`;
  Ba(p) || (A = `${A}__${JSON.stringify(p)}`);
  let _ = i.get(A);
  return _ || (_ = new Intl.NumberFormat(f, Pt({}, E, p)), i.set(A, _)), y ? _.formatToParts(u) : _.format(u);
}
const Iu = [
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
function As(...e) {
  const [t, n, r, o] = e, a = We();
  let s = We();
  if (!Ct(t))
    throw Jn(Qn.INVALID_ARGUMENT);
  const i = t;
  return ce(n) ? a.key = n : $e(n) && Object.keys(n).forEach((l) => {
    Iu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ce(r) ? a.locale = r : $e(r) && (s = r), $e(o) && (s = o), [a.key || "", i, a, s];
}
function vi(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const cm = (e) => e, um = (e) => "", dm = "text", fm = (e) => e.length === 0 ? "" : Xs(e), pm = sp;
function bi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function mm(e) {
  const t = Ct(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ct(e.named.count) || Ct(e.named.n)) ? Ct(e.named.count) ? e.named.count : Ct(e.named.n) ? e.named.n : t : t;
}
function hm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function gm(e = {}) {
  const t = e.locale, n = mm(e), r = Me(e.pluralRules) && ce(t) && at(e.pluralRules[t]) ? e.pluralRules[t] : bi, o = Me(e.pluralRules) && ce(t) && at(e.pluralRules[t]) ? bi : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || We();
  Ct(e.pluralIndex) && hm(n, l);
  const u = (f) => l[f];
  function d(f, E) {
    const N = at(e.messages) ? e.messages(f, !!E) : Me(e.messages) ? e.messages[f] : !1;
    return N || (e.parent ? e.parent.message(f) : um);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : cm, m = $e(e.processor) && at(e.processor.normalize) ? e.processor.normalize : fm, y = $e(e.processor) && at(e.processor.interpolate) ? e.processor.interpolate : pm, g = $e(e.processor) && ce(e.processor.type) ? e.processor.type : dm, I = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...E) => {
      const [N, A] = E;
      let _ = "text", S = "";
      E.length === 1 ? Me(N) ? (S = N.modifier || S, _ = N.type || _) : ce(N) && (S = N || S) : E.length === 2 && (ce(N) && (S = N || S), ce(A) && (_ = A || _));
      const L = d(f, !0)(I), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && ft(L) && S ? L[0] : L
      );
      return S ? p(S)(Y, _) : Y;
    },
    message: d,
    type: g,
    interpolate: y,
    normalize: m,
    values: Pt(We(), s, l)
  };
  return I;
}
const yi = () => "", tr = (e) => at(e);
function _i(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Cs(...t), d = dt(u.missingWarn) ? u.missingWarn : e.missingWarn, p = dt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = dt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, y = !!u.resolvedMessage, g = ce(u.default) || dt(u.default) ? dt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, v = n || g != null && (ce(g) || at(g)), I = el(e, u);
  m && vm(u);
  let [f, E, N] = y ? [
    l,
    I,
    i[I] || We()
  ] : Lu(e, l, I, s, p, d), A = f, _ = l;
  if (!y && !(ce(A) || $n(A) || tr(A)) && v && (A = g, _ = A), !y && (!(ce(A) || $n(A) || tr(A)) || !ce(E)))
    return o ? ja : l;
  let S = !1;
  const L = () => {
    S = !0;
  }, Y = tr(A) ? A : Ou(e, l, E, A, _, L);
  if (S)
    return A;
  const Z = _m(e, E, N, u), ae = gm(Z), fe = bm(e, Y, ae);
  let se = r ? r(fe, l) : fe;
  return m && ce(se) && (se = rp(se)), se;
}
function vm(e) {
  ft(e.list) ? e.list = e.list.map((t) => ce(t) ? ti(t) : t) : Me(e.named) && Object.keys(e.named).forEach((t) => {
    ce(e.named[t]) && (e.named[t] = ti(e.named[t]));
  });
}
function Lu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let p = We(), m, y = null;
  const g = "translate";
  for (let v = 0; v < d.length && (m = d[v], p = s[m] || We(), (y = l(p, t)) === null && (y = p[t]), !(ce(y) || $n(y) || tr(y))); v++)
    if (!im(m, d)) {
      const I = tl(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        g
      );
      I !== t && (y = I);
    }
  return [y, m, p];
}
function Ou(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (tr(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, ym(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function bm(e, t, n) {
  return t(n);
}
function Cs(...e) {
  const [t, n, r] = e, o = We();
  if (!ce(t) && !Ct(t) && !tr(t) && !$n(t))
    throw Jn(Qn.INVALID_ARGUMENT);
  const a = Ct(t) ? String(t) : (tr(t), t);
  return Ct(n) ? o.plural = n : ce(n) ? o.default = n : $e(n) && !Ba(n) ? o.named = n : ft(n) && (o.list = n), Ct(r) ? o.plural = r : ce(r) ? o.default = r : $e(r) && Pt(o, r), [a, o];
}
function ym(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Jf(t, n, s)
  };
}
function _m(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (y, g) => {
      let v = s(n, y);
      if (v == null && (d || g)) {
        const [, , I] = Lu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          l,
          u
        );
        v = s(I, y);
      }
      if (ce(v) || $n(v)) {
        let I = !1;
        const E = Ou(e, y, t, v, y, () => {
          I = !0;
        });
        return I ? yi : E;
      } else return tr(v) ? v : yi;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Ct(r.plural) && (m.pluralIndex = r.plural), m;
}
xp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const wm = "11.2.2";
function km() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ba().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ba().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ba().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const fo = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: jp,
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
function Ho(e, ...t) {
  return Va(e, null, void 0);
}
const Is = /* @__PURE__ */ Br("__translateVNode"), Ls = /* @__PURE__ */ Br("__datetimeParts"), Os = /* @__PURE__ */ Br("__numberParts"), Tm = Br("__setPluralRules"), xu = /* @__PURE__ */ Br("__injectWithOption"), xs = /* @__PURE__ */ Br("__dispose");
function Wo(e) {
  if (!Me(e) || $n(e))
    return e;
  for (const t in e)
    if (yn(e, t))
      if (!t.includes("."))
        Me(e[t]) && Wo(e[t]);
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
        if (a || ($n(o) ? wu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !$n(o)) {
          const s = o[n[r]];
          Me(s) && Wo(s);
        }
      }
  return e;
}
function Ru(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = $e(n) ? n : ft(r) ? We() : { [e]: We() };
  if (ft(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || We(), ya(u, s[l])) : ya(u, s);
    } else
      ce(i) && ya(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      yn(s, i) && Wo(s[i]);
  return s;
}
function Sm(e) {
  return e.type;
}
function Em(e, t, n) {
  let r = Me(t.messages) ? t.messages : We();
  "__i18nGlobal" in n && (r = Ru(e.locale.value, {
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
function wi(e) {
  return M(iu, null, e, 0);
}
function Nu() {
  return "currentInstance" in as ? as["currentInstance"] : as.getCurrentInstance();
}
const ki = () => [], Am = () => !1;
let Ti = 0;
function Si(e) {
  return (t, n, r, o) => e(n, r, Nu() || void 0, o);
}
function Cm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Jl ? W : wr;
  let s = dt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ce(e.locale) ? e.locale : Aa
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ce(e.fallbackLocale) || ft(e.fallbackLocale) || $e(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Ru(i.value, e)), d = a($e(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a($e(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : dt(e.missingWarn) || Ea(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : dt(e.fallbackWarn) || Ea(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : dt(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, I = at(e.missing) ? e.missing : null, f = at(e.missing) ? Si(e.missing) : null, E = at(e.postTranslation) ? e.postTranslation : null, N = t ? t.warnHtmlMessage : dt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, A = !!e.escapeParameter;
  const _ = t ? t.modifiers : $e(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules, L;
  L = (() => {
    r && fi(null);
    const T = {
      version: wm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: _,
      pluralRules: S,
      missing: f === null ? void 0 : f,
      missingWarn: m,
      fallbackWarn: y,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: N,
      escapeParameter: A,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = d.value, T.numberFormats = p.value, T.__datetimeFormatters = $e(L) ? L.__datetimeFormatters : void 0, T.__numberFormatters = $e(L) ? L.__numberFormatters : void 0;
    const F = sm(T);
    return r && fi(F), F;
  })(), Ao(L, i.value, l.value);
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
      L.locale = T, i.value = T;
    }
  }), fe = R({
    get: () => l.value,
    set: (T) => {
      L.fallbackLocale = T, l.value = T, Ao(L, i.value, T);
    }
  }), se = R(() => u.value), _e = /* @__PURE__ */ R(() => d.value), be = /* @__PURE__ */ R(() => p.value);
  function j() {
    return at(E) ? E : null;
  }
  function Q(T) {
    E = T, L.postTranslation = T;
  }
  function U() {
    return I;
  }
  function pe(T) {
    T !== null && (f = Si(T)), I = T, L.missing = f;
  }
  const K = (T, F, we, Re, qe, Mt) => {
    Z();
    let Ye;
    try {
      r || (L.fallbackContext = t ? am() : void 0), Ye = T(L);
    } finally {
      r || (L.fallbackContext = void 0);
    }
    if (we !== "translate exists" && // for not `te` (e.g `t`)
    Ct(Ye) && Ye === ja || we === "translate exists" && !Ye) {
      const [an, Cr] = F();
      return t && g ? Re(t) : qe(an);
    } else {
      if (Mt(Ye))
        return Ye;
      throw Ho(fo.UNEXPECTED_RETURN_TYPE);
    }
  };
  function G(...T) {
    return K((F) => Reflect.apply(_i, null, [F, ...T]), () => Cs(...T), "translate", (F) => Reflect.apply(F.t, F, [...T]), (F) => F, (F) => ce(F));
  }
  function De(...T) {
    const [F, we, Re] = T;
    if (Re && !Me(Re))
      throw Ho(fo.INVALID_ARGUMENT);
    return G(F, we, Pt({ resolvedMessage: !0 }, Re || {}));
  }
  function me(...T) {
    return K((F) => Reflect.apply(mi, null, [F, ...T]), () => Es(...T), "datetime format", (F) => Reflect.apply(F.d, F, [...T]), () => ui, (F) => ce(F) || ft(F));
  }
  function he(...T) {
    return K((F) => Reflect.apply(gi, null, [F, ...T]), () => As(...T), "number format", (F) => Reflect.apply(F.n, F, [...T]), () => ui, (F) => ce(F) || ft(F));
  }
  function ye(T) {
    return T.map((F) => ce(F) || Ct(F) || dt(F) ? wi(String(F)) : F);
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
        Re.processor = Ae, we = Reflect.apply(_i, null, [Re, ...T]);
      } finally {
        Re.processor = null;
      }
      return we;
    }, () => Cs(...T), "translate", (F) => F[Is](...T), (F) => [wi(F)], (F) => ft(F));
  }
  function ve(...T) {
    return K((F) => Reflect.apply(gi, null, [F, ...T]), () => As(...T), "number format", (F) => F[Os](...T), ki, (F) => ce(F) || ft(F));
  }
  function Ke(...T) {
    return K((F) => Reflect.apply(mi, null, [F, ...T]), () => Es(...T), "datetime format", (F) => F[Ls](...T), ki, (F) => ce(F) || ft(F));
  }
  function wt(T) {
    S = T, L.pluralRules = S;
  }
  function Qe(T, F) {
    return K(() => {
      if (!T)
        return !1;
      const we = ce(F) ? F : i.value, Re = St(we), qe = L.messageResolver(Re, T);
      return $n(qe) || tr(qe) || ce(qe);
    }, () => [T], "translate exists", (we) => Reflect.apply(we.te, we, [T, F]), Am, (we) => dt(we));
  }
  function mt(T) {
    let F = null;
    const we = ku(L, l.value, i.value);
    for (let Re = 0; Re < we.length; Re++) {
      const qe = u.value[we[Re]] || {}, Mt = L.messageResolver(qe, T);
      if (Mt != null) {
        F = Mt;
        break;
      }
    }
    return F;
  }
  function ht(T) {
    const F = mt(T);
    return F ?? (t ? t.tm(T) || {} : {});
  }
  function St(T) {
    return u.value[T] || {};
  }
  function Et(T, F) {
    if (o) {
      const we = { [T]: F };
      for (const Re in we)
        yn(we, Re) && Wo(we[Re]);
      F = we[T];
    }
    u.value[T] = F, L.messages = u.value;
  }
  function nt(T, F) {
    u.value[T] = u.value[T] || {};
    const we = { [T]: F };
    if (o)
      for (const Re in we)
        yn(we, Re) && Wo(we[Re]);
    F = we[T], ya(F, u.value[T]), L.messages = u.value;
  }
  function kt(T) {
    return d.value[T] || {};
  }
  function k(T, F) {
    d.value[T] = F, L.datetimeFormats = d.value, hi(L, T, F);
  }
  function C(T, F) {
    d.value[T] = Pt(d.value[T] || {}, F), L.datetimeFormats = d.value, hi(L, T, F);
  }
  function B(T) {
    return p.value[T] || {};
  }
  function ee(T, F) {
    p.value[T] = F, L.numberFormats = p.value, vi(L, T, F);
  }
  function Le(T, F) {
    p.value[T] = Pt(p.value[T] || {}, F), L.numberFormats = p.value, vi(L, T, F);
  }
  Ti++, t && Jl && (Ee(t.locale, (T) => {
    s && (i.value = T, L.locale = T, Ao(L, i.value, l.value));
  }), Ee(t.fallbackLocale, (T) => {
    s && (l.value = T, L.fallbackLocale = T, Ao(L, i.value, l.value));
  }));
  const ge = {
    id: Ti,
    locale: ae,
    fallbackLocale: fe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(T) {
      s = T, T && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Ao(L, i.value, l.value));
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
      m = T, L.missingWarn = m;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(T) {
      y = T, L.fallbackWarn = y;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(T) {
      g = T;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(T) {
      v = T, L.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return N;
    },
    set warnHtmlMessage(T) {
      N = T, L.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return A;
    },
    set escapeParameter(T) {
      A = T, L.escapeParameter = T;
    },
    t: G,
    getLocaleMessage: St,
    setLocaleMessage: Et,
    mergeLocaleMessage: nt,
    getPostTranslationHandler: j,
    setPostTranslationHandler: Q,
    getMissingHandler: U,
    setMissingHandler: pe,
    [Tm]: wt
  };
  return ge.datetimeFormats = _e, ge.numberFormats = be, ge.rt = De, ge.te = Qe, ge.tm = ht, ge.d = me, ge.n = he, ge.getDateTimeFormat = kt, ge.setDateTimeFormat = k, ge.mergeDateTimeFormat = C, ge.getNumberFormat = B, ge.setNumberFormat = ee, ge.mergeNumberFormat = Le, ge[xu] = n, ge[Is] = Ge, ge[Ls] = Ke, ge[Os] = ve, ge;
}
const nl = {
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
function Im({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === gt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, We());
}
function Pu() {
  return gt;
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
}, nl);
function Lm(e) {
  return ft(e) && !ce(e[0]);
}
function $u(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = We();
    e.locale && (s.locale = e.locale), ce(e.format) ? s.key = e.format : Me(e.format) && (ce(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, y) => n.includes(y) ? Pt(We(), m, { [y]: e.format[y] }) : m, We()));
    const l = r(e.value, s, i);
    let u = [s.key];
    ft(l) ? u = l.map((m, y) => {
      const g = o[m.type], v = g ? g({ [m.type]: m.value, index: y, parts: l }) : [m.value];
      return Lm(v) && (v[0].key = `${m.type}-${y}`), v;
    }) : ce(l) && (u = [l]);
    const d = Pt(We(), a), p = ce(e.tag) || Me(e.tag) ? e.tag : Pu();
    return lu(p, d, u);
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
}, nl);
const Om = /* @__PURE__ */ Br("global-vue-i18n");
function Xo(e = {}) {
  const t = Nu();
  if (t == null)
    throw Ho(fo.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ho(fo.NOT_INSTALLED);
  const n = xm(t), r = Nm(n), o = Sm(t), a = Rm(e, o);
  if (a === "global")
    return Em(r, e, o), r;
  if (a === "parent") {
    let l = Pm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Pt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Cm(l), s.__composerExtend && (i[xs] = s.__composerExtend(i)), Mm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function xm(e) {
  const t = Ve(e.isCE ? Om : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Ho(e.isCE ? fo.NOT_INSTALLED_WITH_PROVIDE : fo.UNEXPECTED_ERROR);
  return t;
}
function Rm(e, t) {
  return Ba(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Nm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Pm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = $m(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[xu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function $m(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Mm(e, t, n) {
  pt(() => {
  }, t), za(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[xs];
    o && (o(), delete r[xs]);
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
}, nl);
km();
nm(Vp);
rm(Jp);
om(ku);
function rl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Vr = rl();
function Mu(e) {
  Vr = e;
}
var Mo = { exec: () => null };
function Pe(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Gt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var Dm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Gt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Fm = /^(?:[ \t]*(?:\n|$))+/, zm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Bm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Qo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Vm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ol = /(?:[*+-]|\d{1,9}[.)])/, Du = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Fu = Pe(Du).replace(/bull/g, ol).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), jm = Pe(Du).replace(/bull/g, ol).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), al = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Um = /^[^\n]+/, sl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Hm = Pe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", sl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Wm = Pe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ol).getRegex(), Ua = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ll = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Gm = Pe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ll).replace("tag", Ua).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), zu = Pe(al).replace("hr", Qo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ua).getRegex(), Km = Pe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", zu).getRegex(), il = { blockquote: Km, code: zm, def: Hm, fences: Bm, heading: Vm, hr: Qo, html: Gm, lheading: Fu, list: Wm, newline: Fm, paragraph: zu, table: Mo, text: Um }, Ei = Pe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Qo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ua).getRegex(), qm = { ...il, lheading: jm, table: Ei, paragraph: Pe(al).replace("hr", Qo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ei).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ua).getRegex() }, Ym = { ...il, html: Pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ll).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Mo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Pe(al).replace("hr", Qo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Fu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Zm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Xm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Bu = /^( {2,}|\\)\n(?!\s*$)/, Qm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ha = /[\p{P}\p{S}]/u, cl = /[\s\p{P}\p{S}]/u, Vu = /[^\s\p{P}\p{S}]/u, Jm = Pe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, cl).getRegex(), ju = /(?!~)[\p{P}\p{S}]/u, eh = /(?!~)[\s\p{P}\p{S}]/u, th = /(?:[^\s\p{P}\p{S}]|~)/u, nh = Pe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Dm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Uu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, rh = Pe(Uu, "u").replace(/punct/g, Ha).getRegex(), oh = Pe(Uu, "u").replace(/punct/g, ju).getRegex(), Hu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", ah = Pe(Hu, "gu").replace(/notPunctSpace/g, Vu).replace(/punctSpace/g, cl).replace(/punct/g, Ha).getRegex(), sh = Pe(Hu, "gu").replace(/notPunctSpace/g, th).replace(/punctSpace/g, eh).replace(/punct/g, ju).getRegex(), lh = Pe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Vu).replace(/punctSpace/g, cl).replace(/punct/g, Ha).getRegex(), ih = Pe(/\\(punct)/, "gu").replace(/punct/g, Ha).getRegex(), ch = Pe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), uh = Pe(ll).replace("(?:-->|$)", "-->").getRegex(), dh = Pe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", uh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ca = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, fh = Pe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ca).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Wu = Pe(/^!?\[(label)\]\[(ref)\]/).replace("label", Ca).replace("ref", sl).getRegex(), Gu = Pe(/^!?\[(ref)\](?:\[\])?/).replace("ref", sl).getRegex(), ph = Pe("reflink|nolink(?!\\()", "g").replace("reflink", Wu).replace("nolink", Gu).getRegex(), Ai = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, ul = { _backpedal: Mo, anyPunctuation: ih, autolink: ch, blockSkip: nh, br: Bu, code: Xm, del: Mo, emStrongLDelim: rh, emStrongRDelimAst: ah, emStrongRDelimUnd: lh, escape: Zm, link: fh, nolink: Gu, punctuation: Jm, reflink: Wu, reflinkSearch: ph, tag: dh, text: Qm, url: Mo }, mh = { ...ul, link: Pe(/^!?\[(label)\]\((.*?)\)/).replace("label", Ca).getRegex(), reflink: Pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ca).getRegex() }, Rs = { ...ul, emStrongRDelimAst: sh, emStrongLDelim: oh, url: Pe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Ai).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Pe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Ai).getRegex() }, hh = { ...Rs, br: Pe(Bu).replace("{2,}", "*").getRegex(), text: Pe(Rs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ca = { normal: il, gfm: qm, pedantic: Ym }, Co = { normal: ul, gfm: Rs, breaks: hh, pedantic: mh }, gh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Ci = (e) => gh[e];
function Gn(e, t) {
  if (t) {
    if (Gt.escapeTest.test(e)) return e.replace(Gt.escapeReplace, Ci);
  } else if (Gt.escapeTestNoEncode.test(e)) return e.replace(Gt.escapeReplaceNoEncode, Ci);
  return e;
}
function Ii(e) {
  try {
    e = encodeURI(e).replace(Gt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Li(e, t) {
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
function Io(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function vh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Oi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function bh(e, t, n) {
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
var Ia = class {
  constructor(e) {
    He(this, "options");
    He(this, "rules");
    He(this, "lexer");
    this.options = e || Vr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Io(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = bh(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = Io(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Io(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = Io(t[0], `
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
          let v = this.rules.other.nextBulletRegex(g), I = this.rules.other.hrRegex(g), f = this.rules.other.fencesBeginRegex(g), E = this.rules.other.headingBeginRegex(g), N = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let A = e.split(`
`, 1)[0], _;
            if (m = A, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), _ = m) : _ = m.replace(this.rules.other.tabCharGlobal, "    "), f.test(m) || E.test(m) || N.test(m) || v.test(m) || I.test(m)) break;
            if (_.search(this.rules.other.nonSpaceChar) >= g || !m.trim()) d += `
` + _.slice(g);
            else {
              if (y || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(p) || E.test(p) || I.test(p)) break;
              d += `
` + m;
            }
            !y && !m.trim() && (y = !0), u += A + `
`, e = e.substring(A.length + 1), p = _.slice(g);
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
    let n = Li(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(Li(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = Io(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = vh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), Oi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return Oi(n, o, n[0], this.lexer, this.rules);
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
}, gn = class Ns {
  constructor(t) {
    He(this, "tokens");
    He(this, "options");
    He(this, "state");
    He(this, "inlineQueue");
    He(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Vr, this.options.tokenizer = this.options.tokenizer || new Ia(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Gt, block: ca.normal, inline: Co.normal };
    this.options.pedantic ? (n.block = ca.pedantic, n.inline = Co.pedantic) : this.options.gfm && (n.block = ca.gfm, this.options.breaks ? n.inline = Co.breaks : n.inline = Co.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ca, inline: Co };
  }
  static lex(t, n) {
    return new Ns(n).lex(t);
  }
  static lexInline(t, n) {
    return new Ns(n).inlineTokens(t);
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
}, La = class {
  constructor(t) {
    He(this, "options");
    He(this, "parser");
    this.options = t || Vr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Gt.notSpaceStart)?.[0], a = t.replace(Gt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Gn(o) + '">' + (r ? a : Gn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Gn(a, !0)) + `</code></pre>
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
    return `<code>${Gn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = Ii(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Gn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = Ii(t);
    if (a === null) return Gn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Gn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Gn(t.text);
  }
}, dl = class {
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
}, vn = class Ps {
  constructor(t) {
    He(this, "options");
    He(this, "renderer");
    He(this, "textRenderer");
    this.options = t || Vr, this.options.renderer = this.options.renderer || new La(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new dl();
  }
  static parse(t, n) {
    return new Ps(n).parse(t);
  }
  static parseInline(t, n) {
    return new Ps(n).parseInline(t);
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
}, va, Po = (va = class {
  constructor(e) {
    He(this, "options");
    He(this, "block");
    this.options = e || Vr;
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
}, He(va, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), He(va, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), va), yh = class {
  constructor(...t) {
    He(this, "defaults", rl());
    He(this, "options", this.setOptions);
    He(this, "parse", this.parseMarkdown(!0));
    He(this, "parseInline", this.parseMarkdown(!1));
    He(this, "Parser", vn);
    He(this, "Renderer", La);
    He(this, "TextRenderer", dl);
    He(this, "Lexer", gn);
    He(this, "Tokenizer", Ia);
    He(this, "Hooks", Po);
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
        let a = this.defaults.renderer || new La(this.defaults);
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
        let a = this.defaults.tokenizer || new Ia(this.defaults);
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
        let a = this.defaults.hooks || new Po();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          Po.passThroughHooks.has(s) ? a[i] = (d) => {
            if (this.defaults.async && Po.passThroughHooksRespectAsync.has(s)) return (async () => {
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
        let o = "<p>An error occurred:</p><pre>" + Gn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Dr = new yh();
function Be(e, t) {
  return Dr.parse(e, t);
}
Be.options = Be.setOptions = function(e) {
  return Dr.setOptions(e), Be.defaults = Dr.defaults, Mu(Be.defaults), Be;
};
Be.getDefaults = rl;
Be.defaults = Vr;
Be.use = function(...e) {
  return Dr.use(...e), Be.defaults = Dr.defaults, Mu(Be.defaults), Be;
};
Be.walkTokens = function(e, t) {
  return Dr.walkTokens(e, t);
};
Be.parseInline = Dr.parseInline;
Be.Parser = vn;
Be.parser = vn.parse;
Be.Renderer = La;
Be.TextRenderer = dl;
Be.Lexer = gn;
Be.lexer = gn.lex;
Be.Tokenizer = Ia;
Be.Hooks = Po;
Be.parse = Be;
Be.options;
Be.setOptions;
Be.use;
Be.walkTokens;
Be.parseInline;
vn.parse;
gn.lex;
const _h = ["disabled"], wh = {
  key: 0,
  class: "custom-button__loading"
}, kh = /* @__PURE__ */ le({
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
      e.loading ? (P(), H("div", wh, r[1] || (r[1] = [
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
    ], 10, _h));
  }
}), fl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Kn = /* @__PURE__ */ fl(kh, [["__scopeId", "data-v-9497085f"]]), Ku = Symbol(), _a = "el", Th = "is-", Pr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, qu = Symbol("namespaceContextKey"), pl = (e) => {
  const t = e || (Kt() ? Ve(qu, W(_a)) : W(_a));
  return R(() => c(t) || _a);
}, yt = (e, t) => {
  const n = pl(t);
  return {
    namespace: n,
    b: (v = "") => Pr(n.value, e, v, "", ""),
    e: (v) => v ? Pr(n.value, e, "", v, "") : "",
    m: (v) => v ? Pr(n.value, e, "", "", v) : "",
    be: (v, I) => v && I ? Pr(n.value, e, v, I, "") : "",
    em: (v, I) => v && I ? Pr(n.value, e, "", v, I) : "",
    bm: (v, I) => v && I ? Pr(n.value, e, v, "", I) : "",
    bem: (v, I, f) => v && I && f ? Pr(n.value, e, v, I, f) : "",
    is: (v, ...I) => {
      const f = I.length >= 1 ? I[0] : !0;
      return v && f ? `${Th}${v}` : "";
    },
    cssVar: (v) => {
      const I = {};
      for (const f in v)
        v[f] && (I[`--${n.value}-${f}`] = v[f]);
      return I;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const I = {};
      for (const f in v)
        v[f] && (I[`--${n.value}-${e}-${f}`] = v[f]);
      return I;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Go = () => {
}, Sh = Object.prototype.hasOwnProperty, xi = (e, t) => Sh.call(e, t), Rn = Array.isArray, st = (e) => typeof e == "function", Bt = (e) => typeof e == "string", rn = (e) => e !== null && typeof e == "object", Ri = (e) => (rn(e) || st(e)) && st(e.then) && st(e.catch), Eh = Object.prototype.toString, Ah = (e) => Eh.call(e), Ch = (e) => Ah(e) === "[object Object]";
var Yu = typeof global == "object" && global && global.Object === Object && global, Ih = typeof self == "object" && self && self.Object === Object && self, jn = Yu || Ih || Function("return this")(), zn = jn.Symbol, Zu = Object.prototype, Lh = Zu.hasOwnProperty, Oh = Zu.toString, Lo = zn ? zn.toStringTag : void 0;
function xh(e) {
  var t = Lh.call(e, Lo), n = e[Lo];
  try {
    e[Lo] = void 0;
    var r = !0;
  } catch {
  }
  var o = Oh.call(e);
  return r && (t ? e[Lo] = n : delete e[Lo]), o;
}
var Rh = Object.prototype, Nh = Rh.toString;
function Ph(e) {
  return Nh.call(e);
}
var $h = "[object Null]", Mh = "[object Undefined]", Ni = zn ? zn.toStringTag : void 0;
function ko(e) {
  return e == null ? e === void 0 ? Mh : $h : Ni && Ni in Object(e) ? xh(e) : Ph(e);
}
function po(e) {
  return e != null && typeof e == "object";
}
var Dh = "[object Symbol]";
function Wa(e) {
  return typeof e == "symbol" || po(e) && ko(e) == Dh;
}
function Fh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tn = Array.isArray, Pi = zn ? zn.prototype : void 0, $i = Pi ? Pi.toString : void 0;
function Xu(e) {
  if (typeof e == "string")
    return e;
  if (Tn(e))
    return Fh(e, Xu) + "";
  if (Wa(e))
    return $i ? $i.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var zh = /\s/;
function Bh(e) {
  for (var t = e.length; t-- && zh.test(e.charAt(t)); )
    ;
  return t;
}
var Vh = /^\s+/;
function jh(e) {
  return e && e.slice(0, Bh(e) + 1).replace(Vh, "");
}
function Tr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Mi = NaN, Uh = /^[-+]0x[0-9a-f]+$/i, Hh = /^0b[01]+$/i, Wh = /^0o[0-7]+$/i, Gh = parseInt;
function Di(e) {
  if (typeof e == "number")
    return e;
  if (Wa(e))
    return Mi;
  if (Tr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Tr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = jh(e);
  var n = Hh.test(e);
  return n || Wh.test(e) ? Gh(e.slice(2), n ? 2 : 8) : Uh.test(e) ? Mi : +e;
}
function Qu(e) {
  return e;
}
var Kh = "[object AsyncFunction]", qh = "[object Function]", Yh = "[object GeneratorFunction]", Zh = "[object Proxy]";
function Ju(e) {
  if (!Tr(e))
    return !1;
  var t = ko(e);
  return t == qh || t == Yh || t == Kh || t == Zh;
}
var cs = jn["__core-js_shared__"], Fi = function() {
  var e = /[^.]+$/.exec(cs && cs.keys && cs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Xh(e) {
  return !!Fi && Fi in e;
}
var Qh = Function.prototype, Jh = Qh.toString;
function jr(e) {
  if (e != null) {
    try {
      return Jh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var eg = /[\\^$.*+?()[\]{}|]/g, tg = /^\[object .+?Constructor\]$/, ng = Function.prototype, rg = Object.prototype, og = ng.toString, ag = rg.hasOwnProperty, sg = RegExp(
  "^" + og.call(ag).replace(eg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function lg(e) {
  if (!Tr(e) || Xh(e))
    return !1;
  var t = Ju(e) ? sg : tg;
  return t.test(jr(e));
}
function ig(e, t) {
  return e?.[t];
}
function Ur(e, t) {
  var n = ig(e, t);
  return lg(n) ? n : void 0;
}
var $s = Ur(jn, "WeakMap");
function cg(e, t, n) {
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
var ug = 800, dg = 16, fg = Date.now;
function pg(e) {
  var t = 0, n = 0;
  return function() {
    var r = fg(), o = dg - (r - n);
    if (n = r, o > 0) {
      if (++t >= ug)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function mg(e) {
  return function() {
    return e;
  };
}
var Oa = function() {
  try {
    var e = Ur(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), hg = Oa ? function(e, t) {
  return Oa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: mg(t),
    writable: !0
  });
} : Qu, gg = pg(hg);
function vg(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var bg = 9007199254740991, yg = /^(?:0|[1-9]\d*)$/;
function ml(e, t) {
  var n = typeof e;
  return t = t ?? bg, !!t && (n == "number" || n != "symbol" && yg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function _g(e, t, n) {
  t == "__proto__" && Oa ? Oa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function hl(e, t) {
  return e === t || e !== e && t !== t;
}
var wg = Object.prototype, kg = wg.hasOwnProperty;
function Tg(e, t, n) {
  var r = e[t];
  (!(kg.call(e, t) && hl(r, n)) || n === void 0 && !(t in e)) && _g(e, t, n);
}
var zi = Math.max;
function Sg(e, t, n) {
  return t = zi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = zi(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), cg(e, this, i);
  };
}
var Eg = 9007199254740991;
function gl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Eg;
}
function Ag(e) {
  return e != null && gl(e.length) && !Ju(e);
}
var Cg = Object.prototype;
function Ig(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Cg;
  return e === n;
}
function Lg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Og = "[object Arguments]";
function Bi(e) {
  return po(e) && ko(e) == Og;
}
var ed = Object.prototype, xg = ed.hasOwnProperty, Rg = ed.propertyIsEnumerable, vl = Bi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Bi : function(e) {
  return po(e) && xg.call(e, "callee") && !Rg.call(e, "callee");
};
function Ng() {
  return !1;
}
var td = typeof exports == "object" && exports && !exports.nodeType && exports, Vi = td && typeof module == "object" && module && !module.nodeType && module, Pg = Vi && Vi.exports === td, ji = Pg ? jn.Buffer : void 0, $g = ji ? ji.isBuffer : void 0, Ms = $g || Ng, Mg = "[object Arguments]", Dg = "[object Array]", Fg = "[object Boolean]", zg = "[object Date]", Bg = "[object Error]", Vg = "[object Function]", jg = "[object Map]", Ug = "[object Number]", Hg = "[object Object]", Wg = "[object RegExp]", Gg = "[object Set]", Kg = "[object String]", qg = "[object WeakMap]", Yg = "[object ArrayBuffer]", Zg = "[object DataView]", Xg = "[object Float32Array]", Qg = "[object Float64Array]", Jg = "[object Int8Array]", ev = "[object Int16Array]", tv = "[object Int32Array]", nv = "[object Uint8Array]", rv = "[object Uint8ClampedArray]", ov = "[object Uint16Array]", av = "[object Uint32Array]", Ze = {};
Ze[Xg] = Ze[Qg] = Ze[Jg] = Ze[ev] = Ze[tv] = Ze[nv] = Ze[rv] = Ze[ov] = Ze[av] = !0;
Ze[Mg] = Ze[Dg] = Ze[Yg] = Ze[Fg] = Ze[Zg] = Ze[zg] = Ze[Bg] = Ze[Vg] = Ze[jg] = Ze[Ug] = Ze[Hg] = Ze[Wg] = Ze[Gg] = Ze[Kg] = Ze[qg] = !1;
function sv(e) {
  return po(e) && gl(e.length) && !!Ze[ko(e)];
}
function lv(e) {
  return function(t) {
    return e(t);
  };
}
var nd = typeof exports == "object" && exports && !exports.nodeType && exports, Do = nd && typeof module == "object" && module && !module.nodeType && module, iv = Do && Do.exports === nd, us = iv && Yu.process, Ui = function() {
  try {
    var e = Do && Do.require && Do.require("util").types;
    return e || us && us.binding && us.binding("util");
  } catch {
  }
}(), Hi = Ui && Ui.isTypedArray, rd = Hi ? lv(Hi) : sv, cv = Object.prototype, uv = cv.hasOwnProperty;
function dv(e, t) {
  var n = Tn(e), r = !n && vl(e), o = !n && !r && Ms(e), a = !n && !r && !o && rd(e), s = n || r || o || a, i = s ? Lg(e.length, String) : [], l = i.length;
  for (var u in e)
    uv.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ml(u, l))) && i.push(u);
  return i;
}
function fv(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pv = fv(Object.keys, Object), mv = Object.prototype, hv = mv.hasOwnProperty;
function gv(e) {
  if (!Ig(e))
    return pv(e);
  var t = [];
  for (var n in Object(e))
    hv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function od(e) {
  return Ag(e) ? dv(e) : gv(e);
}
var vv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bv = /^\w*$/;
function bl(e, t) {
  if (Tn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Wa(e) ? !0 : bv.test(e) || !vv.test(e) || t != null && e in Object(t);
}
var Ko = Ur(Object, "create");
function yv() {
  this.__data__ = Ko ? Ko(null) : {}, this.size = 0;
}
function _v(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wv = "__lodash_hash_undefined__", kv = Object.prototype, Tv = kv.hasOwnProperty;
function Sv(e) {
  var t = this.__data__;
  if (Ko) {
    var n = t[e];
    return n === wv ? void 0 : n;
  }
  return Tv.call(t, e) ? t[e] : void 0;
}
var Ev = Object.prototype, Av = Ev.hasOwnProperty;
function Cv(e) {
  var t = this.__data__;
  return Ko ? t[e] !== void 0 : Av.call(t, e);
}
var Iv = "__lodash_hash_undefined__";
function Lv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ko && t === void 0 ? Iv : t, this;
}
function Fr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Fr.prototype.clear = yv;
Fr.prototype.delete = _v;
Fr.prototype.get = Sv;
Fr.prototype.has = Cv;
Fr.prototype.set = Lv;
function Ov() {
  this.__data__ = [], this.size = 0;
}
function Ga(e, t) {
  for (var n = e.length; n--; )
    if (hl(e[n][0], t))
      return n;
  return -1;
}
var xv = Array.prototype, Rv = xv.splice;
function Nv(e) {
  var t = this.__data__, n = Ga(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Rv.call(t, n, 1), --this.size, !0;
}
function Pv(e) {
  var t = this.__data__, n = Ga(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function $v(e) {
  return Ga(this.__data__, e) > -1;
}
function Mv(e, t) {
  var n = this.__data__, r = Ga(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ir(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ir.prototype.clear = Ov;
ir.prototype.delete = Nv;
ir.prototype.get = Pv;
ir.prototype.has = $v;
ir.prototype.set = Mv;
var qo = Ur(jn, "Map");
function Dv() {
  this.size = 0, this.__data__ = {
    hash: new Fr(),
    map: new (qo || ir)(),
    string: new Fr()
  };
}
function Fv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ka(e, t) {
  var n = e.__data__;
  return Fv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function zv(e) {
  var t = Ka(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Bv(e) {
  return Ka(this, e).get(e);
}
function Vv(e) {
  return Ka(this, e).has(e);
}
function jv(e, t) {
  var n = Ka(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function cr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
cr.prototype.clear = Dv;
cr.prototype.delete = zv;
cr.prototype.get = Bv;
cr.prototype.has = Vv;
cr.prototype.set = jv;
var Uv = "Expected a function";
function yl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Uv);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (yl.Cache || cr)(), n;
}
yl.Cache = cr;
var Hv = 500;
function Wv(e) {
  var t = yl(e, function(r) {
    return n.size === Hv && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Gv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kv = /\\(\\)?/g, qv = Wv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gv, function(n, r, o, a) {
    t.push(o ? a.replace(Kv, "$1") : r || n);
  }), t;
});
function Yv(e) {
  return e == null ? "" : Xu(e);
}
function qa(e, t) {
  return Tn(e) ? e : bl(e, t) ? [e] : qv(Yv(e));
}
function Jo(e) {
  if (typeof e == "string" || Wa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function _l(e, t) {
  t = qa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Jo(t[n++])];
  return n && n == r ? e : void 0;
}
function _r(e, t, n) {
  var r = e == null ? void 0 : _l(e, t);
  return r === void 0 ? n : r;
}
function ad(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Wi = zn ? zn.isConcatSpreadable : void 0;
function Zv(e) {
  return Tn(e) || vl(e) || !!(Wi && e && e[Wi]);
}
function Xv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Zv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? ad(o, i) : o[o.length] = i;
  }
  return o;
}
function Qv(e) {
  var t = e == null ? 0 : e.length;
  return t ? Xv(e) : [];
}
function Jv(e) {
  return gg(Sg(e, void 0, Qv), e + "");
}
function yr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Tn(e) ? e : [e];
}
function e0() {
  this.__data__ = new ir(), this.size = 0;
}
function t0(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function n0(e) {
  return this.__data__.get(e);
}
function r0(e) {
  return this.__data__.has(e);
}
var o0 = 200;
function a0(e, t) {
  var n = this.__data__;
  if (n instanceof ir) {
    var r = n.__data__;
    if (!qo || r.length < o0 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new cr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function nr(e) {
  var t = this.__data__ = new ir(e);
  this.size = t.size;
}
nr.prototype.clear = e0;
nr.prototype.delete = t0;
nr.prototype.get = n0;
nr.prototype.has = r0;
nr.prototype.set = a0;
function s0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function l0() {
  return [];
}
var i0 = Object.prototype, c0 = i0.propertyIsEnumerable, Gi = Object.getOwnPropertySymbols, u0 = Gi ? function(e) {
  return e == null ? [] : (e = Object(e), s0(Gi(e), function(t) {
    return c0.call(e, t);
  }));
} : l0;
function d0(e, t, n) {
  var r = t(e);
  return Tn(e) ? r : ad(r, n(e));
}
function Ki(e) {
  return d0(e, od, u0);
}
var Ds = Ur(jn, "DataView"), Fs = Ur(jn, "Promise"), zs = Ur(jn, "Set"), qi = "[object Map]", f0 = "[object Object]", Yi = "[object Promise]", Zi = "[object Set]", Xi = "[object WeakMap]", Qi = "[object DataView]", p0 = jr(Ds), m0 = jr(qo), h0 = jr(Fs), g0 = jr(zs), v0 = jr($s), br = ko;
(Ds && br(new Ds(new ArrayBuffer(1))) != Qi || qo && br(new qo()) != qi || Fs && br(Fs.resolve()) != Yi || zs && br(new zs()) != Zi || $s && br(new $s()) != Xi) && (br = function(e) {
  var t = ko(e), n = t == f0 ? e.constructor : void 0, r = n ? jr(n) : "";
  if (r)
    switch (r) {
      case p0:
        return Qi;
      case m0:
        return qi;
      case h0:
        return Yi;
      case g0:
        return Zi;
      case v0:
        return Xi;
    }
  return t;
});
var Ji = jn.Uint8Array, b0 = "__lodash_hash_undefined__";
function y0(e) {
  return this.__data__.set(e, b0), this;
}
function _0(e) {
  return this.__data__.has(e);
}
function xa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new cr(); ++t < n; )
    this.add(e[t]);
}
xa.prototype.add = xa.prototype.push = y0;
xa.prototype.has = _0;
function w0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function k0(e, t) {
  return e.has(t);
}
var T0 = 1, S0 = 2;
function sd(e, t, n, r, o, a) {
  var s = n & T0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, m = !0, y = n & S0 ? new xa() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var g = e[p], v = t[p];
    if (r)
      var I = s ? r(v, g, p, t, e, a) : r(g, v, p, e, t, a);
    if (I !== void 0) {
      if (I)
        continue;
      m = !1;
      break;
    }
    if (y) {
      if (!w0(t, function(f, E) {
        if (!k0(y, E) && (g === f || o(g, f, n, r, a)))
          return y.push(E);
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
function E0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function A0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var C0 = 1, I0 = 2, L0 = "[object Boolean]", O0 = "[object Date]", x0 = "[object Error]", R0 = "[object Map]", N0 = "[object Number]", P0 = "[object RegExp]", $0 = "[object Set]", M0 = "[object String]", D0 = "[object Symbol]", F0 = "[object ArrayBuffer]", z0 = "[object DataView]", ec = zn ? zn.prototype : void 0, ds = ec ? ec.valueOf : void 0;
function B0(e, t, n, r, o, a, s) {
  switch (n) {
    case z0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case F0:
      return !(e.byteLength != t.byteLength || !a(new Ji(e), new Ji(t)));
    case L0:
    case O0:
    case N0:
      return hl(+e, +t);
    case x0:
      return e.name == t.name && e.message == t.message;
    case P0:
    case M0:
      return e == t + "";
    case R0:
      var i = E0;
    case $0:
      var l = r & C0;
      if (i || (i = A0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= I0, s.set(e, t);
      var d = sd(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case D0:
      if (ds)
        return ds.call(e) == ds.call(t);
  }
  return !1;
}
var V0 = 1, j0 = Object.prototype, U0 = j0.hasOwnProperty;
function H0(e, t, n, r, o, a) {
  var s = n & V0, i = Ki(e), l = i.length, u = Ki(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : U0.call(t, m)))
      return !1;
  }
  var y = a.get(e), g = a.get(t);
  if (y && g)
    return y == t && g == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var I = s; ++p < l; ) {
    m = i[p];
    var f = e[m], E = t[m];
    if (r)
      var N = s ? r(E, f, m, t, e, a) : r(f, E, m, e, t, a);
    if (!(N === void 0 ? f === E || o(f, E, n, r, a) : N)) {
      v = !1;
      break;
    }
    I || (I = m == "constructor");
  }
  if (v && !I) {
    var A = e.constructor, _ = t.constructor;
    A != _ && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof _ == "function" && _ instanceof _) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var W0 = 1, tc = "[object Arguments]", nc = "[object Array]", ua = "[object Object]", G0 = Object.prototype, rc = G0.hasOwnProperty;
function K0(e, t, n, r, o, a) {
  var s = Tn(e), i = Tn(t), l = s ? nc : br(e), u = i ? nc : br(t);
  l = l == tc ? ua : l, u = u == tc ? ua : u;
  var d = l == ua, p = u == ua, m = l == u;
  if (m && Ms(e)) {
    if (!Ms(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new nr()), s || rd(e) ? sd(e, t, n, r, o, a) : B0(e, t, l, n, r, o, a);
  if (!(n & W0)) {
    var y = d && rc.call(e, "__wrapped__"), g = p && rc.call(t, "__wrapped__");
    if (y || g) {
      var v = y ? e.value() : e, I = g ? t.value() : t;
      return a || (a = new nr()), o(v, I, n, r, a);
    }
  }
  return m ? (a || (a = new nr()), H0(e, t, n, r, o, a)) : !1;
}
function Ya(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !po(e) && !po(t) ? e !== e && t !== t : K0(e, t, n, r, Ya, o);
}
var q0 = 1, Y0 = 2;
function Z0(e, t, n, r) {
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
      var d = new nr(), p;
      if (!(p === void 0 ? Ya(u, l, q0 | Y0, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function ld(e) {
  return e === e && !Tr(e);
}
function X0(e) {
  for (var t = od(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, ld(o)];
  }
  return t;
}
function id(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Q0(e) {
  var t = X0(e);
  return t.length == 1 && t[0][2] ? id(t[0][0], t[0][1]) : function(n) {
    return n === e || Z0(n, e, t);
  };
}
function J0(e, t) {
  return e != null && t in Object(e);
}
function eb(e, t, n) {
  t = qa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Jo(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && gl(o) && ml(s, o) && (Tn(e) || vl(e)));
}
function cd(e, t) {
  return e != null && eb(e, t, J0);
}
var tb = 1, nb = 2;
function rb(e, t) {
  return bl(e) && ld(t) ? id(Jo(e), t) : function(n) {
    var r = _r(n, e);
    return r === void 0 && r === t ? cd(n, e) : Ya(t, r, tb | nb);
  };
}
function ob(e) {
  return function(t) {
    return t?.[e];
  };
}
function ab(e) {
  return function(t) {
    return _l(t, e);
  };
}
function sb(e) {
  return bl(e) ? ob(Jo(e)) : ab(e);
}
function lb(e) {
  return typeof e == "function" ? e : e == null ? Qu : typeof e == "object" ? Tn(e) ? rb(e[0], e[1]) : Q0(e) : sb(e);
}
var fs = function() {
  return jn.Date.now();
}, ib = "Expected a function", cb = Math.max, ub = Math.min;
function db(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(ib);
  t = Di(t) || 0, Tr(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? cb(Di(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function y(S) {
    var L = r, Y = o;
    return r = o = void 0, u = S, s = e.apply(Y, L), s;
  }
  function g(S) {
    return u = S, i = setTimeout(f, t), d ? y(S) : s;
  }
  function v(S) {
    var L = S - l, Y = S - u, Z = t - L;
    return p ? ub(Z, a - Y) : Z;
  }
  function I(S) {
    var L = S - l, Y = S - u;
    return l === void 0 || L >= t || L < 0 || p && Y >= a;
  }
  function f() {
    var S = fs();
    if (I(S))
      return E(S);
    i = setTimeout(f, v(S));
  }
  function E(S) {
    return i = void 0, m && r ? y(S) : (r = o = void 0, s);
  }
  function N() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function A() {
    return i === void 0 ? s : E(fs());
  }
  function _() {
    var S = fs(), L = I(S);
    if (r = arguments, o = this, l = S, L) {
      if (i === void 0)
        return g(l);
      if (p)
        return clearTimeout(i), i = setTimeout(f, t), y(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return _.cancel = N, _.flush = A, _;
}
function fb(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return vg(e, lb(t), o);
}
function Ra(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Fo(e, t) {
  return Ya(e, t);
}
function rr(e) {
  return e == null;
}
function pb(e) {
  return e === void 0;
}
function mb(e, t, n, r) {
  if (!Tr(e))
    return e;
  t = qa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Jo(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = Tr(d) ? d : ml(t[o + 1]) ? [] : {});
    }
    Tg(i, l, u), i = i[l];
  }
  return e;
}
function hb(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = _l(e, s);
    n(i, s) && mb(a, qa(s, e), i);
  }
  return a;
}
function gb(e, t) {
  return hb(e, t, function(n, r) {
    return cd(e, r);
  });
}
var vb = Jv(function(e, t) {
  return e == null ? {} : gb(e, t);
});
const Nn = (e) => e === void 0, kr = (e) => typeof e == "boolean", ze = (e) => typeof e == "number", wn = (e) => typeof Element > "u" ? !1 : e instanceof Element, bb = (e) => Bt(e) ? !Number.isNaN(Number(e)) : !1;
var yb = Object.defineProperty, _b = Object.defineProperties, wb = Object.getOwnPropertyDescriptors, oc = Object.getOwnPropertySymbols, kb = Object.prototype.hasOwnProperty, Tb = Object.prototype.propertyIsEnumerable, ac = (e, t, n) => t in e ? yb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sb = (e, t) => {
  for (var n in t || (t = {}))
    kb.call(t, n) && ac(e, n, t[n]);
  if (oc)
    for (var n of oc(t))
      Tb.call(t, n) && ac(e, n, t[n]);
  return e;
}, Eb = (e, t) => _b(e, wb(t));
function Ab(e, t) {
  var n;
  const r = wr();
  return cu(() => {
    r.value = e();
  }, Eb(Sb({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), qs(r);
}
var sc;
const bt = typeof window < "u", Cb = (e) => typeof e == "string", ud = () => {
}, Bs = bt && ((sc = window?.navigator) == null ? void 0 : sc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wl(e) {
  return typeof e == "function" ? e() : c(e);
}
function Ib(e) {
  return e;
}
function ea(e) {
  return Tf() ? (Sf(e), !0) : !1;
}
function Lb(e, t = !0) {
  Kt() ? pt(e) : t ? e() : ut(e);
}
function dd(e, t, n = {}) {
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
    }, wl(t));
  }
  return r && (o.value = !0, bt && l()), ea(i), {
    isPending: qs(o),
    start: l,
    stop: i
  };
}
function er(e) {
  var t;
  const n = wl(e);
  return (t = n?.$el) != null ? t : n;
}
const Za = bt ? window : void 0;
function kn(...e) {
  let t, n, r, o;
  if (Cb(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Za) : [t, n, r, o] = e, !t)
    return ud;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, p, m, y) => (d.addEventListener(p, m, y), () => d.removeEventListener(p, m, y)), l = Ee(() => [er(t), wl(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((y) => i(d, m, y, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return ea(u), u;
}
let lc = !1;
function Ob(e, t, n = {}) {
  const { window: r = Za, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Bs && !lc && (lc = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", ud)));
  let i = !0;
  const l = (m) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((g) => g === m.target || m.composedPath().includes(g));
    {
      const g = er(y);
      return g && (m.target === g || m.composedPath().includes(g));
    }
  }), d = [
    kn(r, "click", (m) => {
      const y = er(e);
      if (!(!y || y === m.target || m.composedPath().includes(y))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    kn(r, "pointerdown", (m) => {
      const y = er(e);
      y && (i = !m.composedPath().includes(y) && !l(m));
    }, { passive: !0 }),
    s && kn(r, "blur", (m) => {
      var y;
      const g = er(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function fd(e, t = !1) {
  const n = W(), r = () => n.value = !!e();
  return r(), Lb(r, t), n;
}
const ic = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cc = "__vueuse_ssr_handlers__";
ic[cc] = ic[cc] || {};
var uc = Object.getOwnPropertySymbols, xb = Object.prototype.hasOwnProperty, Rb = Object.prototype.propertyIsEnumerable, Nb = (e, t) => {
  var n = {};
  for (var r in e)
    xb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && uc)
    for (var r of uc(e))
      t.indexOf(r) < 0 && Rb.call(e, r) && (n[r] = e[r]);
  return n;
};
function xn(e, t, n = {}) {
  const r = n, { window: o = Za } = r, a = Nb(r, ["window"]);
  let s;
  const i = fd(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ee(() => er(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return ea(d), {
    isSupported: i,
    stop: d
  };
}
var dc = Object.getOwnPropertySymbols, Pb = Object.prototype.hasOwnProperty, $b = Object.prototype.propertyIsEnumerable, Mb = (e, t) => {
  var n = {};
  for (var r in e)
    Pb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && dc)
    for (var r of dc(e))
      t.indexOf(r) < 0 && $b.call(e, r) && (n[r] = e[r]);
  return n;
};
function Db(e, t, n = {}) {
  const r = n, { window: o = Za } = r, a = Mb(r, ["window"]);
  let s;
  const i = fd(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Ee(() => er(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return ea(d), {
    isSupported: i,
    stop: d
  };
}
var fc;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(fc || (fc = {}));
var Fb = Object.defineProperty, pc = Object.getOwnPropertySymbols, zb = Object.prototype.hasOwnProperty, Bb = Object.prototype.propertyIsEnumerable, mc = (e, t, n) => t in e ? Fb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vb = (e, t) => {
  for (var n in t || (t = {}))
    zb.call(t, n) && mc(e, n, t[n]);
  if (pc)
    for (var n of pc(t))
      Bb.call(t, n) && mc(e, n, t[n]);
  return e;
};
const jb = {
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
Vb({
  linear: Ib
}, jb);
class Ub extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function kl(e, t) {
  throw new Ub(`[${e}] ${t}`);
}
const hc = {
  current: 0
}, gc = W(0), pd = 2e3, vc = Symbol("elZIndexContextKey"), md = Symbol("zIndexContextKey"), hd = (e) => {
  const t = Kt() ? Ve(vc, hc) : hc, n = e || (Kt() ? Ve(md, void 0) : void 0), r = R(() => {
    const s = c(n);
    return ze(s) ? s : pd;
  }), o = R(() => r.value + gc.value), a = () => (t.current++, gc.value = t.current, o.value);
  return !bt && Ve(vc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Hb = {
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
const Wb = (e) => (t, n) => Gb(t, n, c(e)), Gb = (e, t, n) => _r(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Kb = (e) => {
  const t = R(() => c(e).name), n = io(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: Wb(e)
  };
}, gd = Symbol("localeContextKey"), Tl = (e) => {
  const t = e || Ve(gd, W());
  return Kb(R(() => t.value || Hb));
}, vd = "__epPropKey", ke = (e) => e, qb = (e) => rn(e) && !!e[vd], Xa = (e, t) => {
  if (!rn(e) || qb(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), xi(e, "default") && p.push(o), d || (d = p.includes(u))), s && (d || (d = s(u))), !d && p.length > 0) {
        const m = [...new Set(p)].map((y) => JSON.stringify(y)).join(", ");
        Ef(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [vd]: !0
  };
  return xi(e, "default") && (l.default = o), l;
}, Xe = (e) => Ra(Object.entries(e).map(([t, n]) => [
  t,
  Xa(n, t)
])), Sl = ["", "default", "small", "large"], Qa = Xa({
  type: String,
  values: Sl,
  required: !1
}), bd = Symbol("size"), Yb = () => {
  const e = Ve(bd, {});
  return R(() => c(e.size) || "");
}, yd = Symbol("emptyValuesContextKey"), Zb = ["", void 0, null], Xb = void 0, _d = Xe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => st(e) ? !e() : !e
  }
}), Qb = (e, t) => {
  const n = Kt() ? Ve(yd, W({})) : W({}), r = R(() => e.emptyValues || n.value.emptyValues || Zb), o = R(() => st(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : st(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Xb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, bc = (e) => Object.keys(e), Na = W();
function wd(e, t = void 0) {
  return Kt() ? Ve(Ku, Na) : Na;
}
function kd(e, t) {
  const n = wd(), r = yt(e, R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || _a;
  })), o = Tl(R(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = hd(R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || pd;
  })), s = R(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Td(R(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Td = (e, t, n = !1) => {
  var r;
  const o = !!Kt(), a = o ? wd() : void 0, s = (r = void 0) != null ? r : o ? Fn : void 0;
  if (!s)
    return;
  const i = R(() => {
    const l = c(e);
    return a?.value ? Jb(a.value, l) : l;
  });
  return s(Ku, i), s(gd, R(() => i.value.locale)), s(qu, R(() => i.value.namespace)), s(md, R(() => i.value.zIndex)), s(bd, {
    size: R(() => i.value.size || "")
  }), s(yd, R(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Na.value) && (Na.value = i.value), i;
}, Jb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...bc(e), ...bc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, It = "update:modelValue", sr = "change", or = "input";
var tt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function mo(e, t = "px") {
  if (!e)
    return "";
  if (ze(e) || bb(e))
    return `${e}${t}`;
  if (Bt(e))
    return e;
}
function ey(e, t) {
  if (!bt)
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
}, Sd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ed = (e) => (e.install = Go, e), ty = Xe({
  size: {
    type: ke([Number, String])
  },
  color: {
    type: String
  }
}), ny = le({
  name: "ElIcon",
  inheritAttrs: !1
}), ry = /* @__PURE__ */ le({
  ...ny,
  props: ty,
  setup(e) {
    const t = e, n = yt("icon"), r = R(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Nn(o) ? void 0 : mo(o),
        "--color": a
      };
    });
    return (o, a) => (P(), H("i", co({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      Se(o.$slots, "default")
    ], 16));
  }
});
var oy = /* @__PURE__ */ tt(ry, [["__file", "icon.vue"]]);
const vt = Sn(oy);
/*! Element Plus Icons Vue v2.3.1 */
var ay = /* @__PURE__ */ le({
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
}), Ad = ay, sy = /* @__PURE__ */ le({
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
}), ly = sy, iy = /* @__PURE__ */ le({
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
}), cy = iy, uy = /* @__PURE__ */ le({
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
}), dy = uy, fy = /* @__PURE__ */ le({
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
}), El = fy, py = /* @__PURE__ */ le({
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
}), Pa = py, my = /* @__PURE__ */ le({
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
}), hy = my, gy = /* @__PURE__ */ le({
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
}), vy = gy, by = /* @__PURE__ */ le({
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
}), Cd = by, yy = /* @__PURE__ */ le({
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
}), _y = yy, wy = /* @__PURE__ */ le({
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
}), ky = wy, Ty = /* @__PURE__ */ le({
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
}), Sy = Ty, Ey = /* @__PURE__ */ le({
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
}), Ay = Ey, Cy = /* @__PURE__ */ le({
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
}), Iy = Cy;
const Pn = ke([
  String,
  Object,
  Function
]), Ly = {
  Close: Pa
}, Oy = {
  Close: Pa
}, $a = {
  success: Sy,
  warning: Iy,
  error: dy,
  info: vy
}, Id = {
  validating: Cd,
  success: cy,
  error: El
}, Ld = () => bt && /firefox/i.test(window.navigator.userAgent);
let Qt;
const xy = {
  height: "0",
  visibility: "hidden",
  overflow: Ld() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Ry = [
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
function Ny(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Ry.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function yc(e, t = 1, n) {
  var r;
  Qt || (Qt = document.createElement("textarea"), document.body.appendChild(Qt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = Ny(e);
  i.forEach(([p, m]) => Qt?.style.setProperty(p, m)), Object.entries(xy).forEach(([p, m]) => Qt?.style.setProperty(p, m, "important")), Qt.value = e.value || e.placeholder || "";
  let l = Qt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Qt.value = "";
  const d = Qt.scrollHeight - o;
  if (ze(t)) {
    let p = d * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (ze(n)) {
    let p = d * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = Qt.parentNode) == null || r.removeChild(Qt), Qt = void 0, u;
}
const Od = (e) => e, Py = Xe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Hr = (e) => vb(Py, e), $y = Xe({
  id: {
    type: String,
    default: void 0
  },
  size: Qa,
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
    type: Pn
  },
  prefixIcon: {
    type: Pn
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
    default: () => Od({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Hr(["ariaLabel"])
}), My = {
  [It]: (e) => Bt(e),
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
}, Dy = ["class", "style"], Fy = /^on[A-Z]/, zy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = R(() => (n?.value || []).concat(Dy)), o = Kt();
  return o ? R(() => {
    var a;
    return Ra(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && Fy.test(s))));
  }) : R(() => ({}));
}, Al = Symbol("formContextKey"), Ma = Symbol("formItemContextKey"), _c = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, By = Symbol("elIdInjection"), xd = () => Kt() ? Ve(By, _c) : _c, Ja = (e) => {
  const t = xd(), n = pl();
  return Ab(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, es = () => {
  const e = Ve(Al, void 0), t = Ve(Ma, void 0);
  return {
    form: e,
    formItem: t
  };
}, Cl = (e, {
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
  return pt(() => {
    a = Ee([Xn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : Ja().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), za(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Rd = (e) => {
  const t = Kt();
  return R(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, ta = (e, t = {}) => {
  const n = W(void 0), r = t.prop ? n : Rd("size"), o = t.global ? n : Yb(), a = t.form ? { size: void 0 } : Ve(Al, void 0), s = t.formItem ? { size: void 0 } : Ve(Ma, void 0);
  return R(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, Il = (e) => {
  const t = Rd("disabled"), n = Ve(Al, void 0);
  return R(() => t.value || c(e) || n?.disabled || !1);
};
function Nd(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Kt(), { emit: s } = a, i = wr(), l = W(!1), u = (m) => {
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
  }), kn(i, "focus", u, !0), kn(i, "blur", d, !0), kn(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const Vy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Pd({
  afterComposition: e,
  emit: t
}) {
  const n = W(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !Vy(d);
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
function jy(e) {
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
const Uy = "ElInput", Hy = le({
  name: Uy,
  inheritAttrs: !1
}), Wy = /* @__PURE__ */ le({
  ...Hy,
  props: $y,
  emits: My,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Af(), a = zy(), s = Cf(), i = R(() => [
      r.type === "textarea" ? v.b() : g.b(),
      g.m(m.value),
      g.is("disabled", y.value),
      g.is("exceed", me.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: pe.value && K.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = R(() => [
      g.e("wrapper"),
      g.is("focus", Y.value)
    ]), { form: u, formItem: d } = es(), { inputId: p } = Cl(r, {
      formItemContext: d
    }), m = ta(), y = Il(), g = yt("input"), v = yt("textarea"), I = wr(), f = wr(), E = W(!1), N = W(!1), A = W(), _ = wr(r.inputStyle), S = R(() => I.value || f.value), { wrapperRef: L, isFocused: Y, handleFocus: Z, handleBlur: ae } = Nd(S, {
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
    }), se = R(() => d?.validateState || ""), _e = R(() => se.value && Id[se.value]), be = R(() => N.value ? Ay : hy), j = R(() => [
      o.style
    ]), Q = R(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), U = R(() => rr(r.modelValue) ? "" : String(r.modelValue)), pe = R(() => r.clearable && !y.value && !r.readonly && !!U.value && (Y.value || E.value)), K = R(() => r.showPassword && !y.value && !!U.value && (!!U.value || Y.value)), G = R(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !y.value && !r.readonly && !r.showPassword), De = R(() => U.value.length), me = R(() => !!G.value && De.value > Number(r.maxlength)), he = R(() => !!s.suffix || !!r.suffixIcon || pe.value || r.showPassword || G.value || !!se.value && fe.value), [ye, J] = jy(I);
    xn(f, (T) => {
      if (ve(), !G.value || r.resize !== "both")
        return;
      const F = T[0], { width: we } = F.contentRect;
      A.value = {
        right: `calc(100% - ${we + 15 + 6}px)`
      };
    });
    const Ae = () => {
      const { type: T, autosize: F } = r;
      if (!(!bt || T !== "textarea" || !f.value))
        if (F) {
          const we = rn(F) ? F.minRows : void 0, Re = rn(F) ? F.maxRows : void 0, qe = yc(f.value, we, Re);
          _.value = {
            overflowY: "hidden",
            ...qe
          }, ut(() => {
            f.value.offsetHeight, _.value = qe;
          });
        } else
          _.value = {
            minHeight: yc(f.value).minHeight
          };
    }, ve = ((T) => {
      let F = !1;
      return () => {
        var we;
        if (F || !r.autosize)
          return;
        ((we = f.value) == null ? void 0 : we.offsetParent) === null || (T(), F = !0);
      };
    })(Ae), Ke = () => {
      const T = S.value, F = r.formatter ? r.formatter(U.value) : U.value;
      !T || T.value === F || (T.value = F);
    }, wt = async (T) => {
      ye();
      let { value: F } = T.target;
      if (r.formatter && r.parser && (F = r.parser(F)), !mt.value) {
        if (F === U.value) {
          Ke();
          return;
        }
        n(It, F), n(or, F), await ut(), Ke(), J();
      }
    }, Qe = (T) => {
      let { value: F } = T.target;
      r.formatter && r.parser && (F = r.parser(F)), n(sr, F);
    }, {
      isComposing: mt,
      handleCompositionStart: ht,
      handleCompositionUpdate: St,
      handleCompositionEnd: Et
    } = Pd({ emit: n, afterComposition: wt }), nt = () => {
      ye(), N.value = !N.value, setTimeout(J);
    }, kt = () => {
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
      n(It, ""), n(sr, ""), n("clear"), n(or, "");
    };
    return Ee(() => r.modelValue, () => {
      var T;
      ut(() => Ae()), r.validateEvent && ((T = d?.validate) == null || T.call(d, "change").catch((F) => void 0));
    }), Ee(U, () => Ke()), Ee(() => r.type, async () => {
      await ut(), Ke(), Ae();
    }), pt(() => {
      !r.formatter && r.parser, Ke(), ut(Ae);
    }), t({
      input: I,
      textarea: f,
      ref: S,
      textareaStyle: Q,
      autosize: Xn(r, "autosize"),
      isComposing: mt,
      focus: kt,
      blur: k,
      select: Le,
      clear: ge,
      resizeTextarea: Ae
    }), (T, F) => (P(), H("div", {
      class: q([
        c(i),
        {
          [c(g).bm("group", "append")]: T.$slots.append,
          [c(g).bm("group", "prepend")]: T.$slots.prepend
        }
      ]),
      style: Nt(c(j)),
      onMouseenter: B,
      onMouseleave: C
    }, [
      ne(" input "),
      T.type !== "textarea" ? (P(), H(gt, { key: 0 }, [
        ne(" prepend slot "),
        T.$slots.prepend ? (P(), H("div", {
          key: 0,
          class: q(c(g).be("group", "prepend"))
        }, [
          Se(T.$slots, "prepend")
        ], 2)) : ne("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: L,
          class: q(c(l))
        }, [
          ne(" prefix slot "),
          T.$slots.prefix || T.prefixIcon ? (P(), H("span", {
            key: 0,
            class: q(c(g).e("prefix"))
          }, [
            b("span", {
              class: q(c(g).e("prefix-inner"))
            }, [
              Se(T.$slots, "prefix"),
              T.prefixIcon ? (P(), de(c(vt), {
                key: 0,
                class: q(c(g).e("icon"))
              }, {
                default: ue(() => [
                  (P(), de(Wt(T.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0),
          b("input", co({
            id: c(p),
            ref_key: "input",
            ref: I,
            class: c(g).e("inner")
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
            onCompositionstart: c(ht),
            onCompositionupdate: c(St),
            onCompositionend: c(Et),
            onInput: wt,
            onChange: Qe,
            onKeydown: ee
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ne(" suffix slot "),
          c(he) ? (P(), H("span", {
            key: 1,
            class: q(c(g).e("suffix"))
          }, [
            b("span", {
              class: q(c(g).e("suffix-inner"))
            }, [
              !c(pe) || !c(K) || !c(G) ? (P(), H(gt, { key: 0 }, [
                Se(T.$slots, "suffix"),
                T.suffixIcon ? (P(), de(c(vt), {
                  key: 0,
                  class: q(c(g).e("icon"))
                }, {
                  default: ue(() => [
                    (P(), de(Wt(T.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ne("v-if", !0)
              ], 64)) : ne("v-if", !0),
              c(pe) ? (P(), de(c(vt), {
                key: 1,
                class: q([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: et(c(Go), ["prevent"]),
                onClick: ge
              }, {
                default: ue(() => [
                  M(c(El))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ne("v-if", !0),
              c(K) ? (P(), de(c(vt), {
                key: 2,
                class: q([c(g).e("icon"), c(g).e("password")]),
                onClick: nt
              }, {
                default: ue(() => [
                  (P(), de(Wt(c(be))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0),
              c(G) ? (P(), H("span", {
                key: 3,
                class: q(c(g).e("count"))
              }, [
                b("span", {
                  class: q(c(g).e("count-inner"))
                }, D(c(De)) + " / " + D(T.maxlength), 3)
              ], 2)) : ne("v-if", !0),
              c(se) && c(_e) && c(fe) ? (P(), de(c(vt), {
                key: 4,
                class: q([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(se) === "validating")
                ])
              }, {
                default: ue(() => [
                  (P(), de(Wt(c(_e))))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 2)) : ne("v-if", !0)
        ], 2),
        ne(" append slot "),
        T.$slots.append ? (P(), H("div", {
          key: 1,
          class: q(c(g).be("group", "append"))
        }, [
          Se(T.$slots, "append")
        ], 2)) : ne("v-if", !0)
      ], 64)) : (P(), H(gt, { key: 1 }, [
        ne(" textarea "),
        b("textarea", co({
          id: c(p),
          ref_key: "textarea",
          ref: f,
          class: [c(v).e("inner"), c(g).is("focus", c(Y))]
        }, c(a), {
          minlength: T.minlength,
          maxlength: T.maxlength,
          tabindex: T.tabindex,
          disabled: c(y),
          readonly: T.readonly,
          autocomplete: T.autocomplete,
          style: c(Q),
          "aria-label": T.ariaLabel,
          placeholder: T.placeholder,
          form: T.form,
          autofocus: T.autofocus,
          rows: T.rows,
          role: T.containerRole,
          onCompositionstart: c(ht),
          onCompositionupdate: c(St),
          onCompositionend: c(Et),
          onInput: wt,
          onFocus: c(Z),
          onBlur: c(ae),
          onChange: Qe,
          onKeydown: ee
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(G) ? (P(), H("span", {
          key: 0,
          style: Nt(A.value),
          class: q(c(g).e("count"))
        }, D(c(De)) + " / " + D(T.maxlength), 7)) : ne("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Gy = /* @__PURE__ */ tt(Wy, [["__file", "input.vue"]]);
const Ky = Sn(Gy), eo = 4, qy = {
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
}, Yy = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ll = Symbol("scrollbarContextKey"), Zy = Xe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Xy = "Thumb", Qy = /* @__PURE__ */ le({
  __name: "thumb",
  props: Zy,
  setup(e) {
    const t = e, n = Ve(Ll), r = yt("scrollbar");
    n || kl(Xy, "can not inject scrollbar context");
    const o = W(), a = W(), s = W({}), i = W(!1);
    let l = !1, u = !1, d = bt ? document.onselectstart : null;
    const p = R(() => qy[t.vertical ? "vertical" : "horizontal"]), m = R(() => Yy({
      size: t.size,
      move: t.move,
      bar: p.value
    })), y = R(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (S) => {
      var L;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      (L = window.getSelection()) == null || L.removeAllRanges(), I(S);
      const Y = S.currentTarget;
      Y && (s.value[p.value.axis] = Y[p.value.offset] - (S[p.value.client] - Y.getBoundingClientRect()[p.value.direction]));
    }, v = (S) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const L = Math.abs(S.target.getBoundingClientRect()[p.value.direction] - S[p.value.client]), Y = a.value[p.value.offset] / 2, Z = (L - Y) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Z * n.wrapElement[p.value.scrollSize] / 100;
    }, I = (S) => {
      S.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (S) => {
      if (!o.value || !a.value || l === !1)
        return;
      const L = s.value[p.value.axis];
      if (!L)
        return;
      const Y = (o.value.getBoundingClientRect()[p.value.direction] - S[p.value.client]) * -1, Z = a.value[p.value.offset] - L, ae = (Y - Z) * 100 * y.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ae * n.wrapElement[p.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", E), _(), u && (i.value = !1);
    }, N = () => {
      u = !1, i.value = !!t.size;
    }, A = () => {
      u = !0, i.value = l;
    };
    Vn(() => {
      _(), document.removeEventListener("mouseup", E);
    });
    const _ = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return kn(Xn(n, "scrollbarElement"), "mousemove", N), kn(Xn(n, "scrollbarElement"), "mouseleave", A), (S, L) => (P(), de(wo, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: ue(() => [
        Tt(b("div", {
          ref_key: "instance",
          ref: o,
          class: q([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: v
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: q(c(r).e("thumb")),
            style: Nt(c(m)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [ar, S.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var wc = /* @__PURE__ */ tt(Qy, [["__file", "thumb.vue"]]);
const Jy = Xe({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), e1 = /* @__PURE__ */ le({
  __name: "bar",
  props: Jy,
  setup(e, { expose: t }) {
    const n = e, r = Ve(Ll), o = W(0), a = W(0), s = W(""), i = W(""), l = W(1), u = W(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const y = m.offsetHeight - eo, g = m.offsetWidth - eo;
          a.value = m.scrollTop * 100 / y * l.value, o.value = m.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const y = m.offsetHeight - eo, g = m.offsetWidth - eo, v = y ** 2 / m.scrollHeight, I = g ** 2 / m.scrollWidth, f = Math.max(v, n.minSize), E = Math.max(I, n.minSize);
        l.value = v / (y - v) / (f / (y - f)), u.value = I / (g - I) / (E / (g - E)), i.value = f + eo < y ? `${f}px` : "", s.value = E + eo < g ? `${E}px` : "";
      }
    }), (m, y) => (P(), H(gt, null, [
      M(wc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      M(wc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var t1 = /* @__PURE__ */ tt(e1, [["__file", "bar.vue"]]);
const n1 = Xe({
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
  ...Hr(["ariaLabel", "ariaOrientation"])
}), r1 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ze)
}, o1 = "ElScrollbar", a1 = le({
  name: o1
}), s1 = /* @__PURE__ */ le({
  ...a1,
  props: n1,
  emits: r1,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = yt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = W(), d = W(), p = W(), m = W(), y = R(() => {
      const _ = {};
      return r.height && (_.height = mo(r.height)), r.maxHeight && (_.maxHeight = mo(r.maxHeight)), [r.wrapStyle, _];
    }), g = R(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = R(() => [o.e("view"), r.viewClass]), I = () => {
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
      _ ? (a?.(), s?.()) : ({ stop: a } = xn(p, A), s = kn("resize", A));
    }, { immediate: !0 }), Ee(() => [r.maxHeight, r.height], () => {
      r.native || ut(() => {
        var _;
        A(), d.value && ((_ = m.value) == null || _.handleScroll(d.value));
      });
    }), Fn(Ll, Mr({
      scrollbarElement: u,
      wrapElement: d
    })), If(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), pt(() => {
      r.native || ut(() => {
        A();
      });
    }), uu(() => A()), t({
      wrapRef: d,
      update: A,
      scrollTo: f,
      setScrollTop: E,
      setScrollLeft: N,
      handleScroll: I
    }), (_, S) => (P(), H("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: q(c(o).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: q(c(g)),
        style: Nt(c(y)),
        tabindex: _.tabindex,
        onScroll: I
      }, [
        (P(), de(Wt(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: p,
          class: q(c(v)),
          style: Nt(_.viewStyle),
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
      _.native ? ne("v-if", !0) : (P(), de(t1, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var l1 = /* @__PURE__ */ tt(s1, [["__file", "scrollbar.vue"]]);
const i1 = Sn(l1), Ol = Symbol("popper"), $d = Symbol("popperContent"), c1 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Md = Xe({
  role: {
    type: String,
    values: c1,
    default: "tooltip"
  }
}), u1 = le({
  name: "ElPopper",
  inheritAttrs: !1
}), d1 = /* @__PURE__ */ le({
  ...u1,
  props: Md,
  setup(e, { expose: t }) {
    const n = e, r = W(), o = W(), a = W(), s = W(), i = R(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Fn(Ol, l), (u, d) => Se(u.$slots, "default");
  }
});
var f1 = /* @__PURE__ */ tt(d1, [["__file", "popper.vue"]]);
const Dd = Xe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), p1 = le({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), m1 = /* @__PURE__ */ le({
  ...p1,
  props: Dd,
  setup(e, { expose: t }) {
    const n = e, r = yt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ve($d, void 0);
    return Ee(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Vn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (P(), H("span", {
      ref_key: "arrowRef",
      ref: a,
      class: q(c(r).e("arrow")),
      style: Nt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var h1 = /* @__PURE__ */ tt(m1, [["__file", "arrow.vue"]]);
const Fd = Xe({
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
}), zd = Symbol("elForwardRef"), g1 = (e) => {
  Fn(zd, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, v1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Vs = (e) => {
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
}, b1 = "ElOnlyChild", y1 = le({
  name: b1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ve(zd), a = v1((r = o?.setForwardRef) != null ? r : Go);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = Bd(i);
      return l ? Tt(Lf(l, n), [[a]]) : null;
    };
  }
});
function Bd(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (rn(n))
      switch (n.type) {
        case Of:
          continue;
        case iu:
        case "svg":
          return kc(n);
        case gt:
          return Bd(n.children);
        default:
          return n;
      }
    return kc(n);
  }
  return null;
}
function kc(e) {
  const t = yt("only-child");
  return M("span", {
    class: t.e("content")
  }, [e]);
}
const _1 = le({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), w1 = /* @__PURE__ */ le({
  ..._1,
  props: Fd,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ve(Ol, void 0);
    g1(o);
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
    return pt(() => {
      Ee(() => n.virtualRef, (p) => {
        p && (o.value = er(p));
      }, {
        immediate: !0
      }), Ee(o, (p, m) => {
        u?.(), u = void 0, wn(p) && (d.forEach((y) => {
          var g;
          const v = n[y];
          v && (p.addEventListener(y.slice(2).toLowerCase(), v), (g = m?.removeEventListener) == null || g.call(m, y.slice(2).toLowerCase(), v));
        }), Vs(p) && (u = Ee([a, s, i, l], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            rr(y[v]) ? p.removeAttribute(g) : p.setAttribute(g, y[v]);
          });
        }, { immediate: !0 }))), wn(m) && Vs(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => m.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), Vn(() => {
      if (u?.(), u = void 0, o.value && wn(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const y = n[m];
          y && p.removeEventListener(m.slice(2).toLowerCase(), y);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? ne("v-if", !0) : (P(), de(c(y1), co({ key: 0 }, p.$attrs, {
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
var k1 = /* @__PURE__ */ tt(w1, [["__file", "trigger.vue"]]);
const ps = "focus-trap.focus-after-trapped", ms = "focus-trap.focus-after-released", T1 = "focus-trap.focusout-prevented", Tc = {
  cancelable: !0,
  bubbles: !1
}, S1 = {
  cancelable: !0,
  bubbles: !1
}, Sc = "focusAfterTrapped", Ec = "focusAfterReleased", E1 = Symbol("elFocusTrap"), xl = W(), ts = W(0), Rl = W(0);
let da = 0;
const Vd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ac = (e, t) => {
  for (const n of e)
    if (!A1(n, t))
      return n;
}, A1 = (e, t) => {
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
}, C1 = (e) => {
  const t = Vd(e), n = Ac(t, e), r = Ac(t.reverse(), e);
  return [n, r];
}, I1 = (e) => e instanceof HTMLInputElement && "select" in e, qn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    wn(e) && !Vs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Rl.value = window.performance.now(), e !== n && I1(e) && t && e.select(), wn(e) && r && e.removeAttribute("tabindex");
  }
};
function Cc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const L1 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Cc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Cc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, O1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (qn(r, t), document.activeElement !== n)
      return;
}, Ic = L1(), x1 = () => ts.value > Rl.value, fa = () => {
  xl.value = "pointer", ts.value = window.performance.now();
}, Lc = () => {
  xl.value = "keyboard", ts.value = window.performance.now();
}, R1 = () => (pt(() => {
  da === 0 && (document.addEventListener("mousedown", fa), document.addEventListener("touchstart", fa), document.addEventListener("keydown", Lc)), da++;
}), Vn(() => {
  da--, da <= 0 && (document.removeEventListener("mousedown", fa), document.removeEventListener("touchstart", fa), document.removeEventListener("keydown", Lc));
}), {
  focusReason: xl,
  lastUserFocusTimestamp: ts,
  lastAutomatedFocusTimestamp: Rl
}), pa = (e) => new CustomEvent(T1, {
  ...S1,
  detail: e
}), Mn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let so = [];
const Oc = (e) => {
  e.code === Mn.esc && so.forEach((t) => t(e));
}, N1 = (e) => {
  pt(() => {
    so.length === 0 && document.addEventListener("keydown", Oc), bt && so.push(e);
  }), Vn(() => {
    so = so.filter((t) => t !== e), so.length === 0 && bt && document.removeEventListener("keydown", Oc);
  });
}, P1 = le({
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
    Sc,
    Ec,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = W();
    let r, o;
    const { focusReason: a } = R1();
    N1((g) => {
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
      const { code: v, altKey: I, ctrlKey: f, metaKey: E, currentTarget: N, shiftKey: A } = g, { loop: _ } = e, S = v === Mn.tab && !I && !f && !E, L = document.activeElement;
      if (S && L) {
        const Y = N, [Z, ae] = C1(Y);
        if (Z && ae) {
          if (!A && L === ae) {
            const se = pa({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (g.preventDefault(), _ && qn(Z, !0));
          } else if (A && [Z, Y].includes(L)) {
            const se = pa({
              focusReason: a.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (g.preventDefault(), _ && qn(ae, !0));
          }
        } else if (L === Y) {
          const se = pa({
            focusReason: a.value
          });
          t("focusout-prevented", se), se.defaultPrevented || g.preventDefault();
        }
      }
    };
    Fn(E1, {
      focusTrapRef: n,
      onKeydown: i
    }), Ee(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Ee([n], ([g], [v]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", d), g.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", p));
    });
    const l = (g) => {
      t(Sc, g);
    }, u = (g) => t(Ec, g), d = (g) => {
      const v = c(n);
      if (!v)
        return;
      const I = g.target, f = g.relatedTarget, E = I && v.contains(I);
      e.trapped || f && v.contains(f) || (r = f), E && t("focusin", g), !s.paused && e.trapped && (E ? o = I : qn(o, !0));
    }, p = (g) => {
      const v = c(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const I = g.relatedTarget;
          !rr(I) && !v.contains(I) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = pa({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || qn(o, !0);
            }
          }, 0);
        } else {
          const I = g.target;
          I && v.contains(I) || t("focusout", g);
        }
    };
    async function m() {
      await ut();
      const g = c(n);
      if (g) {
        Ic.push(s);
        const v = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !g.contains(v)) {
          const f = new Event(ps, Tc);
          g.addEventListener(ps, l), g.dispatchEvent(f), f.defaultPrevented || ut(() => {
            let E = e.focusStartEl;
            Bt(E) || (qn(E), document.activeElement !== E && (E = "first")), E === "first" && O1(Vd(g), !0), (document.activeElement === v || E === "container") && qn(g);
          });
        }
      }
    }
    function y() {
      const g = c(n);
      if (g) {
        g.removeEventListener(ps, l);
        const v = new CustomEvent(ms, {
          ...Tc,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(ms, u), g.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !x1() || g.contains(document.activeElement)) && qn(r ?? document.body), g.removeEventListener(ms, u), Ic.remove(s);
      }
    }
    return pt(() => {
      e.trapped && m(), Ee(() => e.trapped, (g) => {
        g ? m() : y();
      });
    }), Vn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function $1(e, t, n, r, o, a) {
  return Se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var M1 = /* @__PURE__ */ tt(P1, [["render", $1], ["__file", "focus-trap.vue"]]), Jt = "top", ln = "bottom", cn = "right", en = "left", Nl = "auto", na = [Jt, ln, cn, en], ho = "start", Yo = "end", D1 = "clippingParents", jd = "viewport", Oo = "popper", F1 = "reference", xc = na.reduce(function(e, t) {
  return e.concat([t + "-" + ho, t + "-" + Yo]);
}, []), ns = [].concat(na, [Nl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ho, t + "-" + Yo]);
}, []), z1 = "beforeRead", B1 = "read", V1 = "afterRead", j1 = "beforeMain", U1 = "main", H1 = "afterMain", W1 = "beforeWrite", G1 = "write", K1 = "afterWrite", q1 = [z1, B1, V1, j1, U1, H1, W1, G1, K1];
function Bn(e) {
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
function zr(e) {
  var t = on(e).Element;
  return e instanceof t || e instanceof Element;
}
function sn(e) {
  var t = on(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = on(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Y1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !sn(a) || !Bn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Z1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !sn(o) || !Bn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Ud = { name: "applyStyles", enabled: !0, phase: "write", fn: Y1, effect: Z1, requires: ["computeStyles"] };
function Dn(e) {
  return e.split("-")[0];
}
var $r = Math.max, Da = Math.min, go = Math.round;
function js() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Hd() {
  return !/^((?!chrome|android).)*safari/i.test(js());
}
function vo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && sn(e) && (o = e.offsetWidth > 0 && go(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && go(r.height) / e.offsetHeight || 1);
  var s = zr(e) ? on(e) : window, i = s.visualViewport, l = !Hd() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: u + p, bottom: d + m, left: u, x: u, y: d };
}
function $l(e) {
  var t = vo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Wd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Pl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function lr(e) {
  return on(e).getComputedStyle(e);
}
function X1(e) {
  return ["table", "td", "th"].indexOf(Bn(e)) >= 0;
}
function Ar(e) {
  return ((zr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rs(e) {
  return Bn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Pl(e) ? e.host : null) || Ar(e);
}
function Rc(e) {
  return !sn(e) || lr(e).position === "fixed" ? null : e.offsetParent;
}
function Q1(e) {
  var t = /firefox/i.test(js()), n = /Trident/i.test(js());
  if (n && sn(e)) {
    var r = lr(e);
    if (r.position === "fixed") return null;
  }
  var o = rs(e);
  for (Pl(o) && (o = o.host); sn(o) && ["html", "body"].indexOf(Bn(o)) < 0; ) {
    var a = lr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function ra(e) {
  for (var t = on(e), n = Rc(e); n && X1(n) && lr(n).position === "static"; ) n = Rc(n);
  return n && (Bn(n) === "html" || Bn(n) === "body" && lr(n).position === "static") ? t : n || Q1(e) || t;
}
function Ml(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function zo(e, t, n) {
  return $r(e, Da(t, n));
}
function J1(e, t, n) {
  var r = zo(e, t, n);
  return r > n ? n : r;
}
function Gd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Kd(e) {
  return Object.assign({}, Gd(), e);
}
function qd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var e_ = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Kd(typeof e != "number" ? e : qd(e, na));
};
function t_(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Dn(n.placement), l = Ml(i), u = [en, cn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = e_(o.padding, n), m = $l(a), y = l === "y" ? Jt : en, g = l === "y" ? ln : cn, v = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], I = s[l] - n.rects.reference[l], f = ra(a), E = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, N = v / 2 - I / 2, A = p[y], _ = E - m[d] - p[g], S = E / 2 - m[d] / 2 + N, L = zo(A, S, _), Y = l;
    n.modifiersData[r] = (t = {}, t[Y] = L, t.centerOffset = L - S, t);
  }
}
function n_(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Wd(t.elements.popper, o) && (t.elements.arrow = o));
}
var r_ = { name: "arrow", enabled: !0, phase: "main", fn: t_, effect: n_, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function bo(e) {
  return e.split("-")[1];
}
var o_ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function a_(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: go(n * o) / o || 0, y: go(r * o) / o || 0 };
}
function Nc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, y = m === void 0 ? 0 : m, g = s.y, v = g === void 0 ? 0 : g, I = typeof d == "function" ? d({ x: y, y: v }) : { x: y, y: v };
  y = I.x, v = I.y;
  var f = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), N = en, A = Jt, _ = window;
  if (u) {
    var S = ra(n), L = "clientHeight", Y = "clientWidth";
    if (S === on(n) && (S = Ar(n), lr(S).position !== "static" && i === "absolute" && (L = "scrollHeight", Y = "scrollWidth")), S = S, o === Jt || (o === en || o === cn) && a === Yo) {
      A = ln;
      var Z = p && S === _ && _.visualViewport ? _.visualViewport.height : S[L];
      v -= Z - r.height, v *= l ? 1 : -1;
    }
    if (o === en || (o === Jt || o === ln) && a === Yo) {
      N = cn;
      var ae = p && S === _ && _.visualViewport ? _.visualViewport.width : S[Y];
      y -= ae - r.width, y *= l ? 1 : -1;
    }
  }
  var fe = Object.assign({ position: i }, u && o_), se = d === !0 ? a_({ x: y, y: v }, on(n)) : { x: y, y: v };
  if (y = se.x, v = se.y, l) {
    var _e;
    return Object.assign({}, fe, (_e = {}, _e[A] = E ? "0" : "", _e[N] = f ? "0" : "", _e.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", _e));
  }
  return Object.assign({}, fe, (t = {}, t[A] = E ? v + "px" : "", t[N] = f ? y + "px" : "", t.transform = "", t));
}
function s_(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Dn(t.placement), variation: bo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Nc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Nc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Yd = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: s_, data: {} }, ma = { passive: !0 };
function l_(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = on(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, ma);
  }), i && l.addEventListener("resize", n.update, ma), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ma);
    }), i && l.removeEventListener("resize", n.update, ma);
  };
}
var Zd = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: l_, data: {} }, i_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function wa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return i_[t];
  });
}
var c_ = { start: "end", end: "start" };
function Pc(e) {
  return e.replace(/start|end/g, function(t) {
    return c_[t];
  });
}
function Dl(e) {
  var t = on(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Fl(e) {
  return vo(Ar(e)).left + Dl(e).scrollLeft;
}
function u_(e, t) {
  var n = on(e), r = Ar(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Hd();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Fl(e), y: l };
}
function d_(e) {
  var t, n = Ar(e), r = Dl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = $r(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = $r(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Fl(e), l = -r.scrollTop;
  return lr(o || n).direction === "rtl" && (i += $r(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function zl(e) {
  var t = lr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Xd(e) {
  return ["html", "body", "#document"].indexOf(Bn(e)) >= 0 ? e.ownerDocument.body : sn(e) && zl(e) ? e : Xd(rs(e));
}
function Bo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Xd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = on(r), s = o ? [a].concat(a.visualViewport || [], zl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Bo(rs(s)));
}
function Us(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function f_(e, t) {
  var n = vo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function $c(e, t, n) {
  return t === jd ? Us(u_(e, n)) : zr(t) ? f_(t, n) : Us(d_(Ar(e)));
}
function p_(e) {
  var t = Bo(rs(e)), n = ["absolute", "fixed"].indexOf(lr(e).position) >= 0, r = n && sn(e) ? ra(e) : e;
  return zr(r) ? t.filter(function(o) {
    return zr(o) && Wd(o, r) && Bn(o) !== "body";
  }) : [];
}
function m_(e, t, n, r) {
  var o = t === "clippingParents" ? p_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = $c(e, u, r);
    return l.top = $r(d.top, l.top), l.right = Da(d.right, l.right), l.bottom = Da(d.bottom, l.bottom), l.left = $r(d.left, l.left), l;
  }, $c(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Qd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Dn(r) : null, a = r ? bo(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Jt:
      l = { x: s, y: t.y - n.height };
      break;
    case ln:
      l = { x: s, y: t.y + t.height };
      break;
    case cn:
      l = { x: t.x + t.width, y: i };
      break;
    case en:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Ml(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case ho:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Yo:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Zo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? D1 : i, u = n.rootBoundary, d = u === void 0 ? jd : u, p = n.elementContext, m = p === void 0 ? Oo : p, y = n.altBoundary, g = y === void 0 ? !1 : y, v = n.padding, I = v === void 0 ? 0 : v, f = Kd(typeof I != "number" ? I : qd(I, na)), E = m === Oo ? F1 : Oo, N = e.rects.popper, A = e.elements[g ? E : m], _ = m_(zr(A) ? A : A.contextElement || Ar(e.elements.popper), l, d, s), S = vo(e.elements.reference), L = Qd({ reference: S, element: N, placement: o }), Y = Us(Object.assign({}, N, L)), Z = m === Oo ? Y : S, ae = { top: _.top - Z.top + f.top, bottom: Z.bottom - _.bottom + f.bottom, left: _.left - Z.left + f.left, right: Z.right - _.right + f.right }, fe = e.modifiersData.offset;
  if (m === Oo && fe) {
    var se = fe[o];
    Object.keys(ae).forEach(function(_e) {
      var be = [cn, ln].indexOf(_e) >= 0 ? 1 : -1, j = [Jt, ln].indexOf(_e) >= 0 ? "y" : "x";
      ae[_e] += se[j] * be;
    });
  }
  return ae;
}
function h_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ns : l, d = bo(r), p = d ? i ? xc : xc.filter(function(g) {
    return bo(g) === d;
  }) : na, m = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  m.length === 0 && (m = p);
  var y = m.reduce(function(g, v) {
    return g[v] = Zo(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[Dn(v)], g;
  }, {});
  return Object.keys(y).sort(function(g, v) {
    return y[g] - y[v];
  });
}
function g_(e) {
  if (Dn(e) === Nl) return [];
  var t = wa(e);
  return [Pc(e), t, Pc(t)];
}
function v_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, v = n.allowedAutoPlacements, I = t.options.placement, f = Dn(I), E = f === I, N = l || (E || !g ? [wa(I)] : g_(I)), A = [I].concat(N).reduce(function(ye, J) {
      return ye.concat(Dn(J) === Nl ? h_(t, { placement: J, boundary: d, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: v }) : J);
    }, []), _ = t.rects.reference, S = t.rects.popper, L = /* @__PURE__ */ new Map(), Y = !0, Z = A[0], ae = 0; ae < A.length; ae++) {
      var fe = A[ae], se = Dn(fe), _e = bo(fe) === ho, be = [Jt, ln].indexOf(se) >= 0, j = be ? "width" : "height", Q = Zo(t, { placement: fe, boundary: d, rootBoundary: p, altBoundary: m, padding: u }), U = be ? _e ? cn : en : _e ? ln : Jt;
      _[j] > S[j] && (U = wa(U));
      var pe = wa(U), K = [];
      if (a && K.push(Q[se] <= 0), i && K.push(Q[U] <= 0, Q[pe] <= 0), K.every(function(ye) {
        return ye;
      })) {
        Z = fe, Y = !1;
        break;
      }
      L.set(fe, K);
    }
    if (Y) for (var G = g ? 3 : 1, De = function(ye) {
      var J = A.find(function(Ae) {
        var Ge = L.get(Ae);
        if (Ge) return Ge.slice(0, ye).every(function(ve) {
          return ve;
        });
      });
      if (J) return Z = J, "break";
    }, me = G; me > 0; me--) {
      var he = De(me);
      if (he === "break") break;
    }
    t.placement !== Z && (t.modifiersData[r]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var b_ = { name: "flip", enabled: !0, phase: "main", fn: v_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Mc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Dc(e) {
  return [Jt, cn, ln, en].some(function(t) {
    return e[t] >= 0;
  });
}
function y_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Zo(t, { elementContext: "reference" }), i = Zo(t, { altBoundary: !0 }), l = Mc(s, r), u = Mc(i, o, a), d = Dc(l), p = Dc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var __ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: y_ };
function w_(e, t, n) {
  var r = Dn(e), o = [en, Jt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [en, cn].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function k_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = ns.reduce(function(d, p) {
    return d[p] = w_(p, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var T_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: k_ };
function S_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qd({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Jd = { name: "popperOffsets", enabled: !0, phase: "read", fn: S_, data: {} };
function E_(e) {
  return e === "x" ? "y" : "x";
}
function A_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, y = m === void 0 ? !0 : m, g = n.tetherOffset, v = g === void 0 ? 0 : g, I = Zo(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: d }), f = Dn(t.placement), E = bo(t.placement), N = !E, A = Ml(f), _ = E_(A), S = t.modifiersData.popperOffsets, L = t.rects.reference, Y = t.rects.popper, Z = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, ae = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), fe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, se = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var _e, be = A === "y" ? Jt : en, j = A === "y" ? ln : cn, Q = A === "y" ? "height" : "width", U = S[A], pe = U + I[be], K = U - I[j], G = y ? -Y[Q] / 2 : 0, De = E === ho ? L[Q] : Y[Q], me = E === ho ? -Y[Q] : -L[Q], he = t.elements.arrow, ye = y && he ? $l(he) : { width: 0, height: 0 }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gd(), Ae = J[be], Ge = J[j], ve = zo(0, L[Q], ye[Q]), Ke = N ? L[Q] / 2 - G - ve - Ae - ae.mainAxis : De - ve - Ae - ae.mainAxis, wt = N ? -L[Q] / 2 + G + ve + Ge + ae.mainAxis : me + ve + Ge + ae.mainAxis, Qe = t.elements.arrow && ra(t.elements.arrow), mt = Qe ? A === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, ht = (_e = fe?.[A]) != null ? _e : 0, St = U + Ke - ht - mt, Et = U + wt - ht, nt = zo(y ? Da(pe, St) : pe, U, y ? $r(K, Et) : K);
      S[A] = nt, se[A] = nt - U;
    }
    if (i) {
      var kt, k = A === "x" ? Jt : en, C = A === "x" ? ln : cn, B = S[_], ee = _ === "y" ? "height" : "width", Le = B + I[k], ge = B - I[C], T = [Jt, en].indexOf(f) !== -1, F = (kt = fe?.[_]) != null ? kt : 0, we = T ? Le : B - L[ee] - Y[ee] - F + ae.altAxis, Re = T ? B + L[ee] + Y[ee] - F - ae.altAxis : ge, qe = y && T ? J1(we, B, Re) : zo(y ? we : Le, B, y ? Re : ge);
      S[_] = qe, se[_] = qe - B;
    }
    t.modifiersData[r] = se;
  }
}
var C_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: A_, requiresIfExists: ["offset"] };
function I_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function L_(e) {
  return e === on(e) || !sn(e) ? Dl(e) : I_(e);
}
function O_(e) {
  var t = e.getBoundingClientRect(), n = go(t.width) / e.offsetWidth || 1, r = go(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function x_(e, t, n) {
  n === void 0 && (n = !1);
  var r = sn(t), o = sn(t) && O_(t), a = Ar(t), s = vo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Bn(t) !== "body" || zl(a)) && (i = L_(t)), sn(t) ? (l = vo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Fl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function R_(e) {
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
function N_(e) {
  var t = R_(e);
  return q1.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function P_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function $_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Fc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function zc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Bl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Fc : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Fc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: u, setOptions: function(v) {
      var I = typeof v == "function" ? v(u.options) : v;
      g(), u.options = Object.assign({}, a, u.options, I), u.scrollParents = { reference: zr(s) ? Bo(s) : s.contextElement ? Bo(s.contextElement) : [], popper: Bo(i) };
      var f = N_($_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(E) {
        return E.enabled;
      }), y(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, I = v.reference, f = v.popper;
        if (zc(I, f)) {
          u.rects = { reference: x_(I, ra(f), u.options.strategy === "fixed"), popper: $l(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
            return u.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var N = u.orderedModifiers[E], A = N.fn, _ = N.options, S = _ === void 0 ? {} : _, L = N.name;
            typeof A == "function" && (u = A({ state: u, options: S, name: L, instance: m }) || u);
          }
        }
      }
    }, update: P_(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!zc(s, i)) return m;
    m.setOptions(l).then(function(v) {
      !p && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function y() {
      u.orderedModifiers.forEach(function(v) {
        var I = v.name, f = v.options, E = f === void 0 ? {} : f, N = v.effect;
        if (typeof N == "function") {
          var A = N({ state: u, name: I, instance: m, options: E }), _ = function() {
          };
          d.push(A || _);
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
Bl();
var M_ = [Zd, Jd, Yd, Ud];
Bl({ defaultModifiers: M_ });
var D_ = [Zd, Jd, Yd, Ud, T_, b_, C_, r_, __], F_ = Bl({ defaultModifiers: D_ });
const z_ = ["fixed", "absolute"], B_ = Xe({
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
    values: ns,
    default: "bottom"
  },
  popperOptions: {
    type: ke(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: z_,
    default: "absolute"
  }
}), ef = Xe({
  ...B_,
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
  ...Hr(["ariaLabel"])
}), V_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, j_ = (e, t) => {
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
}, U_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...W_(e), ...t]
  };
  return G_(a, o?.modifiers), a;
}, H_ = (e) => {
  if (bt)
    return er(e);
};
function W_(e) {
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
function G_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const K_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = q_(l);
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
  }), a = wr(), s = W({
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
    i(), !(!l || !u) && (a.value = F_(l, u, c(o)));
  }), Vn(() => {
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
function q_(e) {
  const t = Object.keys(e.elements), n = Ra(t.map((o) => [o, e.styles[o] || {}])), r = Ra(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Y_ = 0, Z_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ve(Ol, void 0), a = W(), s = W(), i = R(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = R(() => {
    var f;
    const E = c(a), N = (f = c(s)) != null ? f : Y_;
    return {
      name: "arrow",
      enabled: !pb(E),
      options: {
        element: E,
        padding: N
      }
    };
  }), u = R(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...U_(e, [
      c(l),
      c(i)
    ])
  })), d = R(() => H_(e.referenceEl) || c(r)), { attributes: p, state: m, styles: y, update: g, forceUpdate: v, instanceRef: I } = K_(d, n, u);
  return Ee(I, (f) => t.value = f), pt(() => {
    Ee(() => {
      var f;
      return (f = c(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: I,
    state: m,
    styles: y,
    role: o,
    forceUpdate: v,
    update: g
  };
}, X_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = hd(), a = yt("popper"), s = R(() => c(t).popper), i = W(ze(e.zIndex) ? e.zIndex : o()), l = R(() => [
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
}, Q_ = le({
  name: "ElPopperContent"
}), J_ = /* @__PURE__ */ le({
  ...Q_,
  props: ef,
  emits: V_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = j_(r, n), { attributes: p, arrowRef: m, contentRef: y, styles: g, instanceRef: v, role: I, update: f } = Z_(r), {
      ariaModal: E,
      arrowStyle: N,
      contentAttrs: A,
      contentClass: _,
      contentStyle: S,
      updateZIndex: L
    } = X_(r, {
      styles: g,
      attributes: p,
      role: I
    }), Y = Ve(Ma, void 0), Z = W();
    Fn($d, {
      arrowStyle: N,
      arrowRef: m,
      arrowOffset: Z
    }), Y && Fn(Ma, {
      ...Y,
      addInputId: Go,
      removeInputId: Go
    });
    let ae;
    const fe = (_e = !0) => {
      f(), _e && L();
    }, se = () => {
      fe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return pt(() => {
      Ee(() => r.triggerTargetEl, (_e, be) => {
        ae?.(), ae = void 0;
        const j = c(_e || y.value), Q = c(be || y.value);
        wn(j) && (ae = Ee([I, () => r.ariaLabel, E, () => r.id], (U) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((pe, K) => {
            rr(U[K]) ? j.removeAttribute(pe) : j.setAttribute(pe, U[K]);
          });
        }, { immediate: !0 })), Q !== j && wn(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((U) => {
          Q.removeAttribute(U);
        });
      }, { immediate: !0 }), Ee(() => r.visible, se, { immediate: !0 });
    }), Vn(() => {
      ae?.(), ae = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: v,
      updatePopper: fe,
      contentStyle: S
    }), (_e, be) => (P(), H("div", co({
      ref_key: "contentRef",
      ref: y
    }, c(A), {
      style: c(S),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (j) => _e.$emit("mouseenter", j),
      onMouseleave: (j) => _e.$emit("mouseleave", j)
    }), [
      M(c(M1), {
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
          Se(_e.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var ew = /* @__PURE__ */ tt(J_, [["__file", "content.vue"]]);
const tw = Sn(f1), Vl = Symbol("elTooltip");
function Bc() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return ea(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const nw = Xe({
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
}), rw = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Bc(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Bc();
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
}, jl = Xe({
  ...nw,
  ...ef,
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
  ...Hr(["ariaLabel"])
}), tf = Xe({
  ...Fd,
  disabled: Boolean,
  trigger: {
    type: ke([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ke(Array),
    default: () => [Mn.enter, Mn.numpadEnter, Mn.space]
  }
}), ow = Xa({
  type: ke(Boolean),
  default: null
}), aw = Xa({
  type: ke(Function)
}), sw = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: ow,
    [n]: aw
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
      const m = Kt(), { emit: y } = m, g = m.props, v = R(() => st(g[n])), I = R(() => g[e] === null), f = (L) => {
        s.value !== !0 && (s.value = !0, i && (i.value = L), st(d) && d(L));
      }, E = (L) => {
        s.value !== !1 && (s.value = !1, i && (i.value = L), st(p) && p(L));
      }, N = (L) => {
        if (g.disabled === !0 || st(u) && !u())
          return;
        const Y = v.value && bt;
        Y && y(t, !0), (I.value || !Y) && f(L);
      }, A = (L) => {
        if (g.disabled === !0 || !bt)
          return;
        const Y = v.value && bt;
        Y && y(t, !1), (I.value || !Y) && E(L);
      }, _ = (L) => {
        kr(L) && (g.disabled && L ? v.value && y(t, !1) : s.value !== L && (L ? f() : E()));
      }, S = () => {
        s.value ? A() : N();
      };
      return Ee(() => g[e], _), l && m.appContext.config.globalProperties.$route !== void 0 && Ee(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && A();
      }), pt(() => {
        _(g[e]);
      }), {
        hide: A,
        show: N,
        toggle: S,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: lw,
  useModelToggleEmits: iw,
  useModelToggle: cw
} = sw("visible"), uw = Xe({
  ...Md,
  ...lw,
  ...jl,
  ...tf,
  ...Dd,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), dw = [
  ...iw,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], fw = (e, t) => Rn(e) ? e.includes(t) : e === t, to = (e, t, n) => (r) => {
  fw(c(e), t) && n(r);
}, Yn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, pw = le({
  name: "ElTooltipTrigger"
}), mw = /* @__PURE__ */ le({
  ...pw,
  props: tf,
  setup(e, { expose: t }) {
    const n = e, r = yt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ve(Vl, void 0), d = W(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = Xn(n, "trigger"), y = Yn(p, to(m, "hover", i)), g = Yn(p, to(m, "hover", l)), v = Yn(p, to(m, "click", (A) => {
      A.button === 0 && u(A);
    })), I = Yn(p, to(m, "focus", i)), f = Yn(p, to(m, "focus", l)), E = Yn(p, to(m, "contextmenu", (A) => {
      A.preventDefault(), u(A);
    })), N = Yn(p, (A) => {
      const { code: _ } = A;
      n.triggerKeys.includes(_) && (A.preventDefault(), u(A));
    });
    return t({
      triggerRef: d
    }), (A, _) => (P(), de(c(k1), {
      id: c(a),
      "virtual-ref": A.virtualRef,
      open: c(s),
      "virtual-triggering": A.virtualTriggering,
      class: q(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(v),
      onContextmenu: c(E),
      onFocus: c(I),
      onMouseenter: c(y),
      onMouseleave: c(g),
      onKeydown: c(N)
    }, {
      default: ue(() => [
        Se(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var hw = /* @__PURE__ */ tt(mw, [["__file", "trigger.vue"]]);
const gw = Xe({
  to: {
    type: ke([String, Object]),
    required: !0
  },
  disabled: Boolean
}), vw = /* @__PURE__ */ le({
  __name: "teleport",
  props: gw,
  setup(e) {
    return (t, n) => t.disabled ? Se(t.$slots, "default", { key: 0 }) : (P(), de(xf, {
      key: 1,
      to: t.to
    }, [
      Se(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var bw = /* @__PURE__ */ tt(vw, [["__file", "teleport.vue"]]);
const yw = Sn(bw), nf = () => {
  const e = pl(), t = xd(), n = R(() => `${e.value}-popper-container-${t.prefix}`), r = R(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, _w = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ww = () => {
  const { id: e, selector: t } = nf();
  return Rf(() => {
    bt && (document.body.querySelector(t.value) || _w(e.value));
  }), {
    id: e,
    selector: t
  };
}, kw = le({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Tw = /* @__PURE__ */ le({
  ...kw,
  props: jl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = nf(), o = yt("tooltip"), a = W();
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
      onBeforeHide: I
    } = Ve(Vl, void 0), f = R(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = R(() => n.persistent);
    Vn(() => {
      s?.();
    });
    const N = R(() => c(E) ? !0 : c(u)), A = R(() => n.disabled ? !1 : c(u)), _ = R(() => n.appendTo || r.value), S = R(() => {
      var U;
      return (U = n.style) != null ? U : {};
    }), L = W(!0), Y = () => {
      g(), Q() && qn(document.body), L.value = !0;
    }, Z = () => {
      if (c(i))
        return !0;
    }, ae = Yn(Z, () => {
      n.enterable && c(d) === "hover" && m();
    }), fe = Yn(Z, () => {
      c(d) === "hover" && p();
    }), se = () => {
      var U, pe;
      (pe = (U = a.value) == null ? void 0 : U.updatePopper) == null || pe.call(U), v?.();
    }, _e = () => {
      I?.();
    }, be = () => {
      y(), s = Ob(R(() => {
        var U;
        return (U = a.value) == null ? void 0 : U.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && p();
      });
    }, j = () => {
      n.virtualTriggering || p();
    }, Q = (U) => {
      var pe;
      const K = (pe = a.value) == null ? void 0 : pe.popperContentRef, G = U?.relatedTarget || document.activeElement;
      return K?.contains(G);
    };
    return Ee(() => c(u), (U) => {
      U ? L.value = !1 : s?.();
    }, {
      flush: "post"
    }), Ee(() => n.content, () => {
      var U, pe;
      (pe = (U = a.value) == null ? void 0 : U.updatePopper) == null || pe.call(U);
    }), t({
      contentRef: a,
      isFocusInsideContent: Q
    }), (U, pe) => (P(), de(c(yw), {
      disabled: !U.teleported,
      to: c(_)
    }, {
      default: ue(() => [
        M(wo, {
          name: c(f),
          onAfterLeave: Y,
          onBeforeEnter: se,
          onAfterEnter: be,
          onBeforeLeave: _e
        }, {
          default: ue(() => [
            c(N) ? Tt((P(), de(c(ew), co({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, U.$attrs, {
              "aria-label": U.ariaLabel,
              "aria-hidden": L.value,
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
                Se(U.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [ar, c(A)]
            ]) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Sw = /* @__PURE__ */ tt(Tw, [["__file", "content.vue"]]);
const Ew = le({
  name: "ElTooltip"
}), Aw = /* @__PURE__ */ le({
  ...Ew,
  props: uw,
  emits: dw,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    ww();
    const o = Ja(), a = W(), s = W(), i = () => {
      var f;
      const E = c(a);
      E && ((f = E.popperInstanceRef) == null || f.update());
    }, l = W(!1), u = W(), { show: d, hide: p, hasUpdateHandler: m } = cw({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: g } = rw({
      showAfter: Xn(r, "showAfter"),
      hideAfter: Xn(r, "hideAfter"),
      autoClose: Xn(r, "autoClose"),
      open: d,
      close: p
    }), v = R(() => kr(r.visible) && !m.value);
    Fn(Vl, {
      controlled: v,
      id: o,
      open: qs(l),
      trigger: Xn(r, "trigger"),
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
    }), Ee(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const I = (f) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(f);
    };
    return Nf(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: I,
      updatePopper: i,
      onOpen: y,
      onClose: g,
      hide: p
    }), (f, E) => (P(), de(c(tw), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: ue(() => [
        M(hw, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: ue(() => [
            f.$slots.default ? Se(f.$slots, "default", { key: 0 }) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        M(Sw, {
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
              f.rawContent ? (P(), H("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (P(), H("span", { key: 1 }, D(f.content), 1))
            ]),
            f.showArrow ? (P(), de(c(h1), {
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
var Cw = /* @__PURE__ */ tt(Aw, [["__file", "tooltip.vue"]]);
const Iw = Sn(Cw), Lw = Xe({
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
}), Ow = le({
  name: "ElBadge"
}), xw = /* @__PURE__ */ le({
  ...Ow,
  props: Lw,
  setup(e, { expose: t }) {
    const n = e, r = yt("badge"), o = R(() => n.isDot ? "" : ze(n.value) && ze(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = R(() => {
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
    }), (s, i) => (P(), H("div", {
      class: q(c(r).b())
    }, [
      Se(s.$slots, "default"),
      M(wo, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ue(() => [
          Tt(b("sup", {
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
            Se(s.$slots, "content", { value: c(o) }, () => [
              nn(D(c(o)), 1)
            ])
          ], 6), [
            [ar, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Rw = /* @__PURE__ */ tt(xw, [["__file", "badge.vue"]]);
const Nw = Sn(Rw), Pw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Hs = Xe({
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
    values: Sl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), $w = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Mw = le({
  name: "ElTag"
}), Dw = /* @__PURE__ */ le({
  ...Mw,
  props: Hs,
  emits: $w,
  setup(e, { emit: t }) {
    const n = e, r = ta(), o = yt("tag"), a = R(() => {
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
      class: q(c(a)),
      style: Nt({ backgroundColor: u.color }),
      onClick: i
    }, [
      b("span", {
        class: q(c(o).e("content"))
      }, [
        Se(u.$slots, "default")
      ], 2),
      u.closable ? (P(), de(c(vt), {
        key: 0,
        class: q(c(o).e("close")),
        onClick: et(s, ["stop"])
      }, {
        default: ue(() => [
          M(c(Pa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ne("v-if", !0)
    ], 6)) : (P(), de(wo, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ue(() => [
        b("span", {
          class: q(c(a)),
          style: Nt({ backgroundColor: u.color }),
          onClick: i
        }, [
          b("span", {
            class: q(c(o).e("content"))
          }, [
            Se(u.$slots, "default")
          ], 2),
          u.closable ? (P(), de(c(vt), {
            key: 0,
            class: q(c(o).e("close")),
            onClick: et(s, ["stop"])
          }, {
            default: ue(() => [
              M(c(Pa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Fw = /* @__PURE__ */ tt(Dw, [["__file", "tag.vue"]]);
const zw = Sn(Fw), vr = /* @__PURE__ */ new Map();
if (bt) {
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
function Vc(e, t) {
  let n = [];
  return Rn(t.arg) ? n = t.arg : wn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    l || u || d || p || m || y || t.value(r, o);
  };
}
const Bw = {
  beforeMount(e, t) {
    vr.has(e) || vr.set(e, []), vr.get(e).push({
      documentHandler: Vc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    vr.has(e) || vr.set(e, []);
    const n = vr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Vc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    vr.delete(e);
  }
}, Vw = Xe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ke(Object)
  },
  size: Qa,
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
  ..._d
}), mn = {};
le({
  name: "ElConfigProvider",
  props: Vw,
  setup(e, { slots: t }) {
    Ee(() => e.message, (r) => {
      Object.assign(mn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Td(e);
    return () => Se(t, "default", { config: n?.value });
  }
});
const jw = 100, Uw = 600, jc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = jw, delay: o = Uw } = st(n) ? {} : n;
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
}, Hw = Xe({
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
  size: Qa,
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
  ...Hr(["ariaLabel"])
}), Ww = {
  [sr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [or]: (e) => ze(e) || rr(e),
  [It]: (e) => ze(e) || rr(e)
}, Gw = le({
  name: "ElInputNumber"
}), Kw = /* @__PURE__ */ le({
  ...Gw,
  props: Hw,
  emits: Ww,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = Tl(), a = yt("input-number"), s = W(), i = Mr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = es(), u = R(() => ze(r.modelValue) && r.modelValue <= r.min), d = R(() => ze(r.modelValue) && r.modelValue >= r.max), p = R(() => {
      const j = f(r.step);
      return Nn(r.precision) ? Math.max(f(r.modelValue), j) : (j > r.precision, r.precision);
    }), m = R(() => r.controls && r.controlsPosition === "right"), y = ta(), g = Il(), v = R(() => {
      if (i.userInput !== null)
        return i.userInput;
      let j = i.currentValue;
      if (rr(j))
        return "";
      if (ze(j)) {
        if (Number.isNaN(j))
          return "";
        Nn(r.precision) || (j = j.toFixed(r.precision));
      }
      return j;
    }), I = (j, Q) => {
      if (Nn(Q) && (Q = p.value), Q === 0)
        return Math.round(j);
      let U = String(j);
      const pe = U.indexOf(".");
      if (pe === -1 || !U.replace(".", "").split("")[pe + Q])
        return j;
      const De = U.length;
      return U.charAt(De - 1) === "5" && (U = `${U.slice(0, Math.max(0, De - 1))}6`), Number.parseFloat(Number(U).toFixed(Q));
    }, f = (j) => {
      if (rr(j))
        return 0;
      const Q = j.toString(), U = Q.indexOf(".");
      let pe = 0;
      return U !== -1 && (pe = Q.length - U - 1), pe;
    }, E = (j, Q = 1) => ze(j) ? I(j + r.step * Q) : i.currentValue, N = () => {
      if (r.readonly || g.value || d.value)
        return;
      const j = Number(v.value) || 0, Q = E(j);
      S(Q), n(or, i.currentValue), _e();
    }, A = () => {
      if (r.readonly || g.value || u.value)
        return;
      const j = Number(v.value) || 0, Q = E(j, -1);
      S(Q), n(or, i.currentValue), _e();
    }, _ = (j, Q) => {
      const { max: U, min: pe, step: K, precision: G, stepStrictly: De, valueOnClear: me } = r;
      U < pe && kl("InputNumber", "min should not be greater than max.");
      let he = Number(j);
      if (rr(j) || Number.isNaN(he))
        return null;
      if (j === "") {
        if (me === null)
          return null;
        he = Bt(me) ? { min: pe, max: U }[me] : me;
      }
      return De && (he = I(Math.round(he / K) * K, G), he !== j && Q && n(It, he)), Nn(G) || (he = I(he, G)), (he > U || he < pe) && (he = he > U ? U : pe, Q && n(It, he)), he;
    }, S = (j, Q = !0) => {
      var U;
      const pe = i.currentValue, K = _(j);
      if (!Q) {
        n(It, K);
        return;
      }
      pe === K && j || (i.userInput = null, n(It, K), pe !== K && n(sr, K, pe), r.validateEvent && ((U = l?.validate) == null || U.call(l, "change").catch((G) => void 0)), i.currentValue = K);
    }, L = (j) => {
      i.userInput = j;
      const Q = j === "" ? null : Number(j);
      n(or, Q), S(Q, !1);
    }, Y = (j) => {
      const Q = j !== "" ? Number(j) : "";
      (ze(Q) && !Number.isNaN(Q) || j === "") && S(Q), _e(), i.userInput = null;
    }, Z = () => {
      var j, Q;
      (Q = (j = s.value) == null ? void 0 : j.focus) == null || Q.call(j);
    }, ae = () => {
      var j, Q;
      (Q = (j = s.value) == null ? void 0 : j.blur) == null || Q.call(j);
    }, fe = (j) => {
      n("focus", j);
    }, se = (j) => {
      var Q, U;
      i.userInput = null, Ld() && i.currentValue === null && ((Q = s.value) != null && Q.input) && (s.value.input.value = ""), n("blur", j), r.validateEvent && ((U = l?.validate) == null || U.call(l, "blur").catch((pe) => void 0));
    }, _e = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, be = (j) => {
      document.activeElement === j.target && j.preventDefault();
    };
    return Ee(() => r.modelValue, (j, Q) => {
      const U = _(j, !0);
      i.userInput === null && U !== Q && (i.currentValue = U);
    }, { immediate: !0 }), pt(() => {
      var j;
      const { min: Q, max: U, modelValue: pe } = r, K = (j = s.value) == null ? void 0 : j.input;
      if (K.setAttribute("role", "spinbutton"), Number.isFinite(U) ? K.setAttribute("aria-valuemax", String(U)) : K.removeAttribute("aria-valuemax"), Number.isFinite(Q) ? K.setAttribute("aria-valuemin", String(Q)) : K.removeAttribute("aria-valuemin"), K.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), K.setAttribute("aria-disabled", String(g.value)), !ze(pe) && pe != null) {
        let G = Number(pe);
        Number.isNaN(G) && (G = null), n(It, G);
      }
      K.addEventListener("wheel", be, { passive: !1 });
    }), uu(() => {
      var j, Q;
      const U = (j = s.value) == null ? void 0 : j.input;
      U?.setAttribute("aria-valuenow", `${(Q = i.currentValue) != null ? Q : ""}`);
    }), t({
      focus: Z,
      blur: ae
    }), (j, Q) => (P(), H("div", {
      class: q([
        c(a).b(),
        c(a).m(c(y)),
        c(a).is("disabled", c(g)),
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
        class: q([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: bn(A, ["enter"])
      }, [
        Se(j.$slots, "decrease-icon", {}, () => [
          M(c(vt), null, {
            default: ue(() => [
              c(m) ? (P(), de(c(Ad), { key: 0 })) : (P(), de(c(_y), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(jc), A]
      ]) : ne("v-if", !0),
      j.controls ? Tt((P(), H("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: q([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: bn(N, ["enter"])
      }, [
        Se(j.$slots, "increase-icon", {}, () => [
          M(c(vt), null, {
            default: ue(() => [
              c(m) ? (P(), de(c(ly), { key: 0 })) : (P(), de(c(ky), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(jc), N]
      ]) : ne("v-if", !0),
      M(c(Ky), {
        id: j.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: j.step,
        "model-value": c(v),
        placeholder: j.placeholder,
        readonly: j.readonly,
        disabled: c(g),
        size: c(y),
        max: j.max,
        min: j.min,
        name: j.name,
        "aria-label": j.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          bn(et(N, ["prevent"]), ["up"]),
          bn(et(A, ["prevent"]), ["down"])
        ],
        onBlur: se,
        onFocus: fe,
        onInput: L,
        onChange: Y
      }, Pf({
        _: 2
      }, [
        j.$slots.prefix ? {
          name: "prefix",
          fn: ue(() => [
            Se(j.$slots, "prefix")
          ])
        } : void 0,
        j.$slots.suffix ? {
          name: "suffix",
          fn: ue(() => [
            Se(j.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var qw = /* @__PURE__ */ tt(Kw, [["__file", "input-number.vue"]]);
const Yw = Sn(qw);
function Zw() {
  const e = wr(), t = W(0), n = 11, r = R(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return xn(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const rf = Symbol("ElSelectGroup"), os = Symbol("ElSelect");
function Xw(e, t) {
  const n = Ve(os), r = Ve(rf, { disabled: !1 }), o = R(() => d(yr(n.props.modelValue), e.value)), a = R(() => {
    var y;
    if (n.props.multiple) {
      const g = yr((y = n.props.modelValue) != null ? y : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = R(() => e.label || (rn(e.value) ? "" : e.value)), i = R(() => e.value || e.label || ""), l = R(() => e.disabled || t.groupDisabled || a.value), u = Kt(), d = (y = [], g) => {
    if (rn(e.value)) {
      const v = n.props.valueKey;
      return y && y.some((I) => $f(_r(I, v)) === _r(g, v));
    } else
      return y && y.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (y) => {
    const g = new RegExp(Pw(y), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Ee(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ee(() => e.value, (y, g) => {
    const { remote: v, valueKey: I } = n.props;
    if ((v ? y !== g : !Fo(y, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
      if (I && rn(y) && rn(g) && y[I] === g[I])
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
const Qw = le({
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
    const t = yt("select"), n = Ja(), r = R(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(m))
    ]), o = Mr({
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
    } = Xw(e, o), { visible: p, hover: m } = Ys(o), y = Kt().proxy;
    l.onOptionCreate(y), Vn(() => {
      const v = y.value, { selected: I } = l.states, f = I.some((E) => E.value === y.value);
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
function Jw(e, t, n, r, o, a) {
  return Tt((P(), H("li", {
    id: e.id,
    class: q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: et(e.selectOptionClick, ["stop"])
  }, [
    Se(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [ar, e.visible]
  ]);
}
var Ul = /* @__PURE__ */ tt(Qw, [["render", Jw], ["__file", "option.vue"]]);
const ek = le({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ve(os), t = yt("select"), n = R(() => e.props.popperClass), r = R(() => e.props.multiple), o = R(() => e.props.fitInputWidth), a = W("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return pt(() => {
      s(), xn(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function tk(e, t, n, r, o, a) {
  return P(), H("div", {
    class: q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Nt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), H("div", {
      key: 0,
      class: q(e.ns.be("dropdown", "header"))
    }, [
      Se(e.$slots, "header")
    ], 2)) : ne("v-if", !0),
    Se(e.$slots, "default"),
    e.$slots.footer ? (P(), H("div", {
      key: 1,
      class: q(e.ns.be("dropdown", "footer"))
    }, [
      Se(e.$slots, "footer")
    ], 2)) : ne("v-if", !0)
  ], 6);
}
var nk = /* @__PURE__ */ tt(ek, [["render", tk], ["__file", "select-dropdown.vue"]]);
const rk = (e, t) => {
  const { t: n } = Tl(), r = Ja(), o = yt("select"), a = yt("input"), s = Mr({
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
  }), i = W(null), l = W(null), u = W(null), d = W(null), p = W(null), m = W(null), y = W(null), g = W(null), v = W(null), I = W(null), f = W(null), {
    isComposing: E,
    handleCompositionStart: N,
    handleCompositionUpdate: A,
    handleCompositionEnd: _
  } = Pd({
    afterComposition: ($) => qe($)
  }), { wrapperRef: S, isFocused: L, handleBlur: Y } = Nd(p, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !Z.value && (Z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur($) {
      var X, Te;
      return ((X = u.value) == null ? void 0 : X.isFocusInsideContent($)) || ((Te = d.value) == null ? void 0 : Te.isFocusInsideContent($));
    },
    afterBlur() {
      Z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Z = W(!1), ae = W(), { form: fe, formItem: se } = es(), { inputId: _e } = Cl(e, {
    formItemContext: se
  }), { valueOnClear: be, isEmptyValue: j } = Qb(e), Q = R(() => e.disabled || fe?.disabled), U = R(() => Rn(e.modelValue) ? e.modelValue.length > 0 : !j(e.modelValue)), pe = R(() => {
    var $;
    return ($ = fe?.statusIcon) != null ? $ : !1;
  }), K = R(() => e.clearable && !Q.value && s.inputHovering && U.value), G = R(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = R(() => o.is("reverse", G.value && Z.value)), me = R(() => se?.validateState || ""), he = R(() => Id[me.value]), ye = R(() => e.remote ? 300 : 0), J = R(() => e.remote && !s.inputValue && s.options.size === 0), Ae = R(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ge.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ge = R(() => ve.value.filter(($) => $.visible).length), ve = R(() => {
    const $ = Array.from(s.options.values()), X = [];
    return s.optionValues.forEach((Te) => {
      const Je = $.findIndex((lt) => lt.value === Te);
      Je > -1 && X.push($[Je]);
    }), X.length >= $.length ? X : $;
  }), Ke = R(() => Array.from(s.cachedOptions.values())), wt = R(() => {
    const $ = ve.value.filter((X) => !X.created).some((X) => X.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !$;
  }), Qe = () => {
    e.filterable && st(e.filterMethod) || e.filterable && e.remote && st(e.remoteMethod) || ve.value.forEach(($) => {
      var X;
      (X = $.updateOption) == null || X.call($, s.inputValue);
    });
  }, mt = ta(), ht = R(() => ["small"].includes(mt.value) ? "small" : "default"), St = R({
    get() {
      return Z.value && !J.value;
    },
    set($) {
      Z.value = $;
    }
  }), Et = R(() => {
    if (e.multiple && !Nn(e.modelValue))
      return yr(e.modelValue).length === 0 && !s.inputValue;
    const $ = Rn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Nn($) ? !s.inputValue : !0;
  }), nt = R(() => {
    var $;
    const X = ($ = e.placeholder) != null ? $ : n("el.select.placeholder");
    return e.multiple || !U.value ? X : s.selectedLabel;
  }), kt = R(() => Bs ? null : "mouseenter");
  Ee(() => e.modelValue, ($, X) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), B(), !Fo($, X) && e.validateEvent && se?.validate("change").catch((Te) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Ee(() => Z.value, ($) => {
    $ ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", $);
  }), Ee(() => s.options.entries(), () => {
    bt && (B(), e.defaultFirstOption && (e.filterable || e.remote) && Ge.value && C());
  }, {
    flush: "post"
  }), Ee([() => s.hoveringIndex, ve], ([$]) => {
    ze($) && $ > -1 ? ae.value = ve.value[$] || {} : ae.value = {}, ve.value.forEach((X) => {
      X.hover = ae.value === X;
    });
  }), cu(() => {
    s.isBeforeHide || Qe();
  });
  const k = ($) => {
    s.previousQuery === $ || E.value || (s.previousQuery = $, e.filterable && st(e.filterMethod) ? e.filterMethod($) : e.filterable && e.remote && st(e.remoteMethod) && e.remoteMethod($), e.defaultFirstOption && (e.filterable || e.remote) && Ge.value ? ut(C) : ut(Le));
  }, C = () => {
    const $ = ve.value.filter((lt) => lt.visible && !lt.disabled && !lt.states.groupDisabled), X = $.find((lt) => lt.created), Te = $[0], Je = ve.value.map((lt) => lt.value);
    s.hoveringIndex = Un(Je, X || Te);
  }, B = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const X = Rn(e.modelValue) ? e.modelValue[0] : e.modelValue, Te = ee(X);
      s.selectedLabel = Te.currentLabel, s.selected = [Te];
      return;
    }
    const $ = [];
    Nn(e.modelValue) || yr(e.modelValue).forEach((X) => {
      $.push(ee(X));
    }), s.selected = $;
  }, ee = ($) => {
    let X;
    const Te = Ch($);
    for (let Zt = s.cachedOptions.size - 1; Zt >= 0; Zt--) {
      const ct = Ke.value[Zt];
      if (Te ? _r(ct.value, e.valueKey) === _r($, e.valueKey) : ct.value === $) {
        X = {
          value: $,
          currentLabel: ct.currentLabel,
          get isDisabled() {
            return ct.isDisabled;
          }
        };
        break;
      }
    }
    if (X)
      return X;
    const Je = Te ? $.label : $ ?? "";
    return {
      value: $,
      currentLabel: Je
    };
  }, Le = () => {
    s.hoveringIndex = ve.value.findIndex(($) => s.selected.some((X) => je(X) === je($)));
  }, ge = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, T = () => {
    s.collapseItemWidth = I.value.getBoundingClientRect().width;
  }, F = () => {
    var $, X;
    (X = ($ = u.value) == null ? void 0 : $.updatePopper) == null || X.call($);
  }, we = () => {
    var $, X;
    (X = ($ = d.value) == null ? void 0 : $.updatePopper) == null || X.call($);
  }, Re = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), k(s.inputValue);
  }, qe = ($) => {
    if (s.inputValue = $.target.value, e.remote)
      Mt();
    else
      return Re();
  }, Mt = db(() => {
    Re();
  }, ye.value), Ye = ($) => {
    Fo(e.modelValue, $) || t(sr, $);
  }, an = ($) => fb($, (X) => {
    const Te = s.cachedOptions.get(X);
    return Te && !Te.disabled && !Te.states.groupDisabled;
  }), Cr = ($) => {
    if (e.multiple && $.code !== Mn.delete && $.target.value.length <= 0) {
      const X = yr(e.modelValue).slice(), Te = an(X);
      if (Te < 0)
        return;
      const Je = X[Te];
      X.splice(Te, 1), t(It, X), Ye(X), t("remove-tag", Je);
    }
  }, ur = ($, X) => {
    const Te = s.selected.indexOf(X);
    if (Te > -1 && !Q.value) {
      const Je = yr(e.modelValue).slice();
      Je.splice(Te, 1), t(It, Je), Ye(Je), t("remove-tag", X.value);
    }
    $.stopPropagation(), Hn();
  }, dr = ($) => {
    $.stopPropagation();
    const X = e.multiple ? [] : be.value;
    if (e.multiple)
      for (const Te of s.selected)
        Te.isDisabled && X.push(Te.value);
    t(It, X), Ye(X), s.hoveringIndex = -1, Z.value = !1, t("clear"), Hn();
  }, Ir = ($) => {
    var X;
    if (e.multiple) {
      const Te = yr((X = e.modelValue) != null ? X : []).slice(), Je = Un(Te, $);
      Je > -1 ? Te.splice(Je, 1) : (e.multipleLimit <= 0 || Te.length < e.multipleLimit) && Te.push($.value), t(It, Te), Ye(Te), $.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(It, $.value), Ye($.value), Z.value = !1;
    Hn(), !Z.value && ut(() => {
      dn($);
    });
  }, Un = ($ = [], X) => Nn(X) ? -1 : rn(X.value) ? $.findIndex((Te) => Fo(_r(Te, e.valueKey), je(X))) : $.indexOf(X.value), dn = ($) => {
    var X, Te, Je, lt, Zt;
    const ct = Rn($) ? $[0] : $;
    let Lt = null;
    if (ct?.value) {
      const pn = ve.value.filter((Zr) => Zr.value === ct.value);
      pn.length > 0 && (Lt = pn[0].$el);
    }
    if (u.value && Lt) {
      const pn = (lt = (Je = (Te = (X = u.value) == null ? void 0 : X.popperRef) == null ? void 0 : Te.contentRef) == null ? void 0 : Je.querySelector) == null ? void 0 : lt.call(Je, `.${o.be("dropdown", "wrap")}`);
      pn && ey(pn, Lt);
    }
    (Zt = f.value) == null || Zt.handleScroll();
  }, Yt = ($) => {
    s.options.set($.value, $), s.cachedOptions.set($.value, $);
  }, En = ($, X) => {
    s.options.get($) === X && s.options.delete($);
  }, Lr = R(() => {
    var $, X;
    return (X = ($ = u.value) == null ? void 0 : $.popperRef) == null ? void 0 : X.contentRef;
  }), Or = () => {
    s.isBeforeHide = !1, ut(() => {
      var $;
      ($ = f.value) == null || $.update(), dn(s.selected);
    });
  }, Hn = () => {
    var $;
    ($ = p.value) == null || $.focus();
  }, fr = () => {
    var $;
    if (Z.value) {
      Z.value = !1, ut(() => {
        var X;
        return (X = p.value) == null ? void 0 : X.blur();
      });
      return;
    }
    ($ = p.value) == null || $.blur();
  }, pr = ($) => {
    dr($);
  }, Wr = ($) => {
    if (Z.value = !1, L.value) {
      const X = new FocusEvent("focus", $);
      ut(() => Y(X));
    }
  }, fn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, Gr = () => {
    Q.value || (Bs && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, xr = () => {
    if (!Z.value)
      Gr();
    else {
      const $ = ve.value[s.hoveringIndex];
      $ && !$.isDisabled && Ir($);
    }
  }, je = ($) => rn($.value) ? _r($.value, e.valueKey) : $.value, An = R(() => ve.value.filter(($) => $.visible).every(($) => $.isDisabled)), Kr = R(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Rr = R(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), mr = ($) => {
    if (!Z.value) {
      Z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ge.value === 0 || E.value) && !An.value) {
      $ === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : $ === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const X = ve.value[s.hoveringIndex];
      (X.isDisabled || !X.visible) && mr($), ut(() => dn(ae.value));
    }
  }, qr = () => {
    if (!l.value)
      return 0;
    const $ = window.getComputedStyle(l.value);
    return Number.parseFloat($.gap || "6px");
  }, Yr = R(() => {
    const $ = qr();
    return { maxWidth: `${I.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - $ : s.selectionWidth}px` };
  }), hr = R(() => ({ maxWidth: `${s.selectionWidth}px` })), jt = ($) => {
    t("popup-scroll", $);
  };
  return xn(l, ge), xn(g, F), xn(S, F), xn(v, we), xn(I, T), pt(() => {
    B();
  }), {
    inputId: _e,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: L,
    expanded: Z,
    optionsArray: ve,
    hoverOption: ae,
    selectSize: mt,
    filteredOptionsCount: Ge,
    updateTooltip: F,
    updateTagTooltip: we,
    debouncedOnInputChange: Mt,
    onInput: qe,
    deletePrevTag: Cr,
    deleteTag: ur,
    deleteSelected: dr,
    handleOptionSelect: Ir,
    scrollToOption: dn,
    hasModelValue: U,
    shouldShowPlaceholder: Et,
    currentPlaceholder: nt,
    mouseEnterEventName: kt,
    needStatusIcon: pe,
    showClose: K,
    iconComponent: G,
    iconReverse: De,
    validateState: me,
    validateIcon: he,
    showNewOption: wt,
    updateOptions: Qe,
    collapseTagSize: ht,
    setSelected: B,
    selectDisabled: Q,
    emptyText: Ae,
    handleCompositionStart: N,
    handleCompositionUpdate: A,
    handleCompositionEnd: _,
    onOptionCreate: Yt,
    onOptionDestroy: En,
    handleMenuEnter: Or,
    focus: Hn,
    blur: fr,
    handleClearClick: pr,
    handleClickOutside: Wr,
    handleEsc: fn,
    toggleMenu: Gr,
    selectOption: xr,
    getValueKey: je,
    navigateOptions: mr,
    dropdownMenuVisible: St,
    showTagList: Kr,
    collapseTagList: Rr,
    popupScroll: jt,
    tagStyle: Yr,
    collapseTagStyle: hr,
    popperRef: Lr,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: m,
    suffixRef: y,
    selectRef: i,
    wrapperRef: S,
    selectionRef: l,
    scrollbarRef: f,
    menuRef: g,
    tagMenuRef: v,
    collapseItemRef: I
  };
};
var ok = le({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ve(os);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Rn(u) && u.forEach((d) => {
          var p, m, y, g;
          const v = (p = d?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? l(!Bt(d.children) && !Rn(d.children) && st((m = d.children) == null ? void 0 : m.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : v === "ElOption" ? i.push((g = d.props) == null ? void 0 : g.value) : Rn(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), Fo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const ak = Xe({
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
  size: Qa,
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
  teleported: jl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Pn,
    default: El
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Pn,
    default: Ad
  },
  tagType: { ...Hs.type, default: "info" },
  tagEffect: { ...Hs.effect, default: "light" },
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
    values: ns,
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
  ..._d,
  ...Hr(["ariaLabel"])
}), Uc = "ElSelect", sk = le({
  name: Uc,
  componentName: Uc,
  components: {
    ElSelectMenu: nk,
    ElOption: Ul,
    ElOptions: ok,
    ElTag: zw,
    ElScrollbar: i1,
    ElTooltip: Iw,
    ElIcon: vt
  },
  directives: { ClickOutside: Bw },
  props: ak,
  emits: [
    It,
    sr,
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
      return Rn(l) ? u ? l : d : u ? d : l;
    }), r = Mr({
      ...Ys(e),
      modelValue: n
    }), o = rk(r, t), { calculatorRef: a, inputStyle: s } = Zw();
    Fn(os, Mr({
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
function lk(e, t, n, r, o, a) {
  const s = Nr("el-tag"), i = Nr("el-tooltip"), l = Nr("el-icon"), u = Nr("el-option"), d = Nr("el-options"), p = Nr("el-scrollbar"), m = Nr("el-select-menu"), y = Mf("click-outside");
  return Tt((P(), H("div", {
    ref: "selectRef",
    class: q([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Df(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
      default: ue(() => {
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
            onClick: et(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (P(), H("div", {
              key: 0,
              ref: "prefixRef",
              class: q(e.nsSelect.e("prefix"))
            }, [
              Se(e.$slots, "prefix")
            ], 2)) : ne("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: q([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Se(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), H(gt, null, Zn(e.showTagList, (v) => (P(), H("div", {
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
                    onClose: (I) => e.deleteTag(I, v)
                  }, {
                    default: ue(() => [
                      b("span", {
                        class: q(e.nsSelect.e("tags-text"))
                      }, [
                        Se(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          nn(D(v.currentLabel), 1)
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
                        default: ue(() => [
                          b("span", {
                            class: q(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
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
                      (P(!0), H(gt, null, Zn(e.collapseTagList, (v) => (P(), H("div", {
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
                          onClose: (I) => e.deleteTag(I, v)
                        }, {
                          default: ue(() => [
                            b("span", {
                              class: q(e.nsSelect.e("tags-text"))
                            }, [
                              Se(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                nn(D(v.currentLabel), 1)
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
                class: q([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Tt(b("input", {
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
                    bn(et((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    bn(et((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    bn(et(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    bn(et(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    bn(et(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: et(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Vo, e.states.inputValue]
                ]),
                e.filterable ? (P(), H("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: q(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : ne("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (P(), H("div", {
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
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (P(), H("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : ne("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: q(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), de(l, {
                key: 0,
                class: q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ue(() => [
                  (P(), de(Wt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0),
              e.showClose && e.clearIcon ? (P(), de(l, {
                key: 1,
                class: q([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ue(() => [
                  (P(), de(Wt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ne("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (P(), de(l, {
                key: 2,
                class: q([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ue(() => [
                  (P(), de(Wt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ne("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ue(() => [
        M(m, { ref: "menuRef" }, {
          default: ue(() => [
            e.$slots.header ? (P(), H("div", {
              key: 0,
              class: q(e.nsSelect.be("dropdown", "header")),
              onClick: et(() => {
              }, ["stop"])
            }, [
              Se(e.$slots, "header")
            ], 10, ["onClick"])) : ne("v-if", !0),
            Tt(M(p, {
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
                e.showNewOption ? (P(), de(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ne("v-if", !0),
                M(d, null, {
                  default: ue(() => [
                    Se(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [ar, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (P(), H("div", {
              key: 1,
              class: q(e.nsSelect.be("dropdown", "loading"))
            }, [
              Se(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), H("div", {
              key: 2,
              class: q(e.nsSelect.be("dropdown", "empty"))
            }, [
              Se(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : ne("v-if", !0),
            e.$slots.footer ? (P(), H("div", {
              key: 3,
              class: q(e.nsSelect.be("dropdown", "footer")),
              onClick: et(() => {
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
var ik = /* @__PURE__ */ tt(sk, [["render", lk], ["__file", "select.vue"]]);
const ck = le({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = yt("select"), n = W(null), r = Kt(), o = W([]);
    Fn(rf, Mr({
      ...Ys(e)
    }));
    const a = R(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, p;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const d = yr(u), p = [];
      return d.forEach((m) => {
        var y, g;
        s(m) ? p.push(m.component.proxy) : (y = m.children) != null && y.length ? p.push(...i(m.children)) : (g = m.component) != null && g.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return pt(() => {
      l();
    }), Db(n, l, {
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
function uk(e, t, n, r, o, a) {
  return Tt((P(), H("ul", {
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
        Se(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ar, e.visible]
  ]);
}
var of = /* @__PURE__ */ tt(ck, [["render", uk], ["__file", "option-group.vue"]]);
const dk = Sn(ik, {
  Option: Ul,
  OptionGroup: of
}), fk = Ed(Ul);
Ed(of);
const pk = (e) => ["", ...Sl].includes(e), mk = Xe({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: pk
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Pn
  },
  activeActionIcon: {
    type: Pn
  },
  activeIcon: {
    type: Pn
  },
  inactiveIcon: {
    type: Pn
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
  ...Hr(["ariaLabel"])
}), hk = {
  [It]: (e) => kr(e) || Bt(e) || ze(e),
  [sr]: (e) => kr(e) || Bt(e) || ze(e),
  [or]: (e) => kr(e) || Bt(e) || ze(e)
}, af = "ElSwitch", gk = le({
  name: af
}), vk = /* @__PURE__ */ le({
  ...gk,
  props: mk,
  emits: hk,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = es(), a = ta(), s = yt("switch"), { inputId: i } = Cl(r, {
      formItemContext: o
    }), l = Il(R(() => r.loading)), u = W(r.modelValue !== !1), d = W(), p = W(), m = R(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", f.value)
    ]), y = R(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !f.value)
    ]), g = R(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", f.value)
    ]), v = R(() => ({
      width: mo(r.width)
    }));
    Ee(() => r.modelValue, () => {
      u.value = !0;
    });
    const I = R(() => u.value ? r.modelValue : !1), f = R(() => I.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(I.value) || (n(It, r.inactiveValue), n(sr, r.inactiveValue), n(or, r.inactiveValue)), Ee(f, (_) => {
      var S;
      d.value.checked = _, r.validateEvent && ((S = o?.validate) == null || S.call(o, "change").catch((L) => void 0));
    });
    const E = () => {
      const _ = f.value ? r.inactiveValue : r.activeValue;
      n(It, _), n(sr, _), n(or, _), ut(() => {
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
        Ri(S),
        kr(S)
      ].includes(!0) || kl(af, "beforeChange must return type `Promise<boolean>` or `boolean`"), Ri(S) ? S.then((Y) => {
        Y && E();
      }).catch((Y) => {
      }) : S && E();
    }, A = () => {
      var _, S;
      (S = (_ = d.value) == null ? void 0 : _.focus) == null || S.call(_);
    };
    return pt(() => {
      d.value.checked = f.value;
    }), t({
      focus: A,
      checked: f
    }), (_, S) => (P(), H("div", {
      class: q(c(m)),
      onClick: et(N, ["prevent"])
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
        onChange: E,
        onKeydown: bn(N, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (P(), H("span", {
        key: 0,
        class: q(c(y))
      }, [
        _.inactiveIcon ? (P(), de(c(vt), { key: 0 }, {
          default: ue(() => [
            (P(), de(Wt(_.inactiveIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (P(), H("span", {
          key: 1,
          "aria-hidden": c(f)
        }, D(_.inactiveText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: q(c(s).e("core")),
        style: Nt(c(v))
      }, [
        _.inlinePrompt ? (P(), H("div", {
          key: 0,
          class: q(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (P(), de(c(vt), {
            key: 0,
            class: q(c(s).is("icon"))
          }, {
            default: ue(() => [
              (P(), de(Wt(c(f) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (P(), H("span", {
            key: 1,
            class: q(c(s).is("text")),
            "aria-hidden": !c(f)
          }, D(c(f) ? _.activeText : _.inactiveText), 11, ["aria-hidden"])) : ne("v-if", !0)
        ], 2)) : ne("v-if", !0),
        b("div", {
          class: q(c(s).e("action"))
        }, [
          _.loading ? (P(), de(c(vt), {
            key: 0,
            class: q(c(s).is("loading"))
          }, {
            default: ue(() => [
              M(c(Cd))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? Se(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (P(), de(c(vt), { key: 0 }, {
              default: ue(() => [
                (P(), de(Wt(_.activeActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ]) : c(f) ? ne("v-if", !0) : Se(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (P(), de(c(vt), { key: 0 }, {
              default: ue(() => [
                (P(), de(Wt(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : ne("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (P(), H("span", {
        key: 1,
        class: q(c(g))
      }, [
        _.activeIcon ? (P(), de(c(vt), { key: 0 }, {
          default: ue(() => [
            (P(), de(Wt(_.activeIcon)))
          ]),
          _: 1
        })) : ne("v-if", !0),
        !_.activeIcon && _.activeText ? (P(), H("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, D(_.activeText), 9, ["aria-hidden"])) : ne("v-if", !0)
      ], 2)) : ne("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var bk = /* @__PURE__ */ tt(vk, [["__file", "switch.vue"]]);
const yk = Sn(bk), sf = ["success", "info", "warning", "error"], Dt = Od({
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
  appendTo: bt ? document.body : void 0
}), _k = Xe({
  customClass: {
    type: String,
    default: Dt.customClass
  },
  center: {
    type: Boolean,
    default: Dt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Dt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Dt.duration
  },
  icon: {
    type: Pn,
    default: Dt.icon
  },
  id: {
    type: String,
    default: Dt.id
  },
  message: {
    type: ke([
      String,
      Object,
      Function
    ]),
    default: Dt.message
  },
  onClose: {
    type: ke(Function),
    default: Dt.onClose
  },
  showClose: {
    type: Boolean,
    default: Dt.showClose
  },
  type: {
    type: String,
    values: sf,
    default: Dt.type
  },
  plain: {
    type: Boolean,
    default: Dt.plain
  },
  offset: {
    type: Number,
    default: Dt.offset
  },
  zIndex: {
    type: Number,
    default: Dt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Dt.grouping
  },
  repeatNum: {
    type: Number,
    default: Dt.repeatNum
  }
}), wk = {
  destroy: () => !0
}, _n = Ff([]), kk = (e) => {
  const t = _n.findIndex((o) => o.id === e), n = _n[t];
  let r;
  return t > 0 && (r = _n[t - 1]), { current: n, prev: r };
}, Tk = (e) => {
  const { prev: t } = kk(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Sk = (e, t) => _n.findIndex((r) => r.id === e) > 0 ? 16 : t, Ek = le({
  name: "ElMessage"
}), Ak = /* @__PURE__ */ le({
  ...Ek,
  props: _k,
  emits: wk,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Oy, { ns: o, zIndex: a } = kd("message"), { currentZIndex: s, nextZIndex: i } = a, l = W(), u = W(!1), d = W(0);
    let p;
    const m = R(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = R(() => {
      const L = n.type;
      return { [o.bm("icon", L)]: L && $a[L] };
    }), g = R(() => n.icon || $a[n.type] || ""), v = R(() => Tk(n.id)), I = R(() => Sk(n.id, n.offset) + v.value), f = R(() => d.value + I.value), E = R(() => ({
      top: `${I.value}px`,
      zIndex: s.value
    }));
    function N() {
      n.duration !== 0 && ({ stop: p } = dd(() => {
        _();
      }, n.duration));
    }
    function A() {
      p?.();
    }
    function _() {
      u.value = !1;
    }
    function S({ code: L }) {
      L === Mn.esc && _();
    }
    return pt(() => {
      N(), i(), u.value = !0;
    }), Ee(() => n.repeatNum, () => {
      A(), N();
    }), kn(document, "keydown", S), xn(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: _
    }), (L, Y) => (P(), de(wo, {
      name: c(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (Z) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: ue(() => [
        Tt(b("div", {
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
          style: Nt(c(E)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: N
        }, [
          L.repeatNum > 1 ? (P(), de(c(Nw), {
            key: 0,
            value: L.repeatNum,
            type: c(m),
            class: q(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          c(g) ? (P(), de(c(vt), {
            key: 1,
            class: q([c(o).e("icon"), c(y)])
          }, {
            default: ue(() => [
              (P(), de(Wt(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          Se(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (P(), H(gt, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: q(c(o).e("content")),
                innerHTML: L.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), H("p", {
              key: 0,
              class: q(c(o).e("content"))
            }, D(L.message), 3))
          ]),
          L.showClose ? (P(), de(c(vt), {
            key: 2,
            class: q(c(o).e("closeBtn")),
            onClick: et(_, ["stop"])
          }, {
            default: ue(() => [
              M(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 46, ["id"]), [
          [ar, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ck = /* @__PURE__ */ tt(Ak, [["__file", "message.vue"]]);
let Ik = 1;
const lf = (e) => {
  const t = !e || Bt(e) || jo(e) || st(e) ? { message: e } : e, n = {
    ...Dt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Bt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    wn(r) || (r = document.body), n.appendTo = r;
  }
  return kr(mn.grouping) && !n.grouping && (n.grouping = mn.grouping), ze(mn.duration) && n.duration === 3e3 && (n.duration = mn.duration), ze(mn.offset) && n.offset === 16 && (n.offset = mn.offset), kr(mn.showClose) && !n.showClose && (n.showClose = mn.showClose), n;
}, Lk = (e) => {
  const t = _n.indexOf(e);
  if (t === -1)
    return;
  _n.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ok = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Ik++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), Lk(d);
    },
    onDestroy: () => {
      Sa(null, a);
    }
  }, i = M(Ck, s, st(s.message) || jo(s.message) ? {
    default: st(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || yo._context, Sa(i, a), e.appendChild(a.firstElementChild);
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
  if (!bt)
    return { close: () => {
    } };
  const n = lf(e);
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
  const r = Ok(n, t);
  return _n.push(r), r.handler;
};
sf.forEach((e) => {
  yo[e] = (t = {}, n) => {
    const r = lf(t);
    return yo({ ...r, type: e }, n);
  };
});
function xk(e) {
  for (const t of _n)
    (!e || e === t.props.type) && t.handler.close();
}
yo.closeAll = xk;
yo._context = null;
const Rk = Sd(yo, "$message"), cf = [
  "success",
  "info",
  "warning",
  "error"
], Nk = Xe({
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
    type: Pn
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
    values: [...cf, ""],
    default: ""
  },
  zIndex: Number
}), Pk = {
  destroy: () => !0
}, $k = le({
  name: "ElNotification"
}), Mk = /* @__PURE__ */ le({
  ...$k,
  props: Nk,
  emits: Pk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = kd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = Ly, l = W(!1);
    let u;
    const d = R(() => {
      const N = n.type;
      return N && $a[n.type] ? r.m(N) : "";
    }), p = R(() => n.type && $a[n.type] || n.icon), m = R(() => n.position.endsWith("right") ? "right" : "left"), y = R(() => n.position.startsWith("top") ? "top" : "bottom"), g = R(() => {
      var N;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (N = n.zIndex) != null ? N : s.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: u } = dd(() => {
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
      N === Mn.delete || N === Mn.backspace ? I() : N === Mn.esc ? l.value && f() : v();
    }
    return pt(() => {
      v(), a(), l.value = !0;
    }), kn(document, "keydown", E), t({
      visible: l,
      close: f
    }), (N, A) => (P(), de(wo, {
      name: c(r).b("fade"),
      onBeforeLeave: N.onClose,
      onAfterLeave: (_) => N.$emit("destroy"),
      persisted: ""
    }, {
      default: ue(() => [
        Tt(b("div", {
          id: N.id,
          class: q([c(r).b(), N.customClass, c(m)]),
          style: Nt(c(g)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: v,
          onClick: N.onClick
        }, [
          c(p) ? (P(), de(c(vt), {
            key: 0,
            class: q([c(r).e("icon"), c(d)])
          }, {
            default: ue(() => [
              (P(), de(Wt(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          b("div", {
            class: q(c(r).e("group"))
          }, [
            b("h2", {
              class: q(c(r).e("title")),
              textContent: D(N.title)
            }, null, 10, ["textContent"]),
            Tt(b("div", {
              class: q(c(r).e("content")),
              style: Nt(N.title ? void 0 : { margin: 0 })
            }, [
              Se(N.$slots, "default", {}, () => [
                N.dangerouslyUseHTMLString ? (P(), H(gt, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: N.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), H("p", { key: 0 }, D(N.message), 1))
              ])
            ], 6), [
              [ar, N.message]
            ]),
            N.showClose ? (P(), de(c(vt), {
              key: 0,
              class: q(c(r).e("closeBtn")),
              onClick: et(f, ["stop"])
            }, {
              default: ue(() => [
                M(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ne("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ar, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Dk = /* @__PURE__ */ tt(Mk, [["__file", "notification.vue"]]);
const Fa = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ws = 16;
let Fk = 1;
const _o = function(e = {}, t) {
  if (!bt)
    return { close: () => {
    } };
  (Bt(e) || jo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Fa[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Ws;
  }), r += Ws;
  const o = `notification_${Fk++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      zk(o, n, a);
    }
  };
  let i = document.body;
  wn(e.appendTo) ? i = e.appendTo : Bt(e.appendTo) && (i = document.querySelector(e.appendTo)), wn(i) || (i = document.body);
  const l = document.createElement("div"), u = M(Dk, s, st(s.message) ? s.message : jo(s.message) ? () => s.message : null);
  return u.appContext = Nn(t) ? _o._context : t, u.props.onDestroy = () => {
    Sa(null, l);
  }, Sa(u, l), Fa[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
cf.forEach((e) => {
  _o[e] = (t = {}, n) => ((Bt(t) || jo(t)) && (t = {
    message: t
  }), _o({ ...t, type: e }, n));
});
function zk(e, t, n) {
  const r = Fa[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: d, component: p } = r[u].vm, m = Number.parseInt(d.style[i], 10) - s - Ws;
      p.props.offset = m;
    }
}
function Bk() {
  for (const e of Object.values(Fa))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
_o.closeAll = Bk;
_o._context = null;
const Vk = Sd(_o, "$notify"), ot = {
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
    r === "center" ? Rk({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Vk({
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
function jk(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function $t(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Hc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Hc || (Hc = {}));
async function Uk(e, t) {
  await $t("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Hk(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return $t("plugin:event|listen", {
    event: e,
    target: o,
    handler: jk(t)
  }).then((a) => async () => Uk(e, a));
}
const Wk = "snippets-code:developer-mode", uf = "snippets-code:frontend-diagnostics", Gk = 240, xo = "[REDACTED]", ka = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${xo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${xo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  xo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${xo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${xo}`
), df = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return ka(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return ka(
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
    return ka(String(e));
  }
}, Kk = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, qk = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(uf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Hl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Wk) === "true";
  } catch {
    return !1;
  }
}, Yk = (e, t, n) => {
  if (!Hl() || typeof localStorage > "u") return;
  const r = qk();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Kk(),
    message: ka(t),
    data: df(n)
  });
  try {
    localStorage.setItem(
      uf,
      JSON.stringify(r.slice(-Gk))
    );
  } catch {
  }
}, Zk = () => Hl(), Xk = (e) => e === "warn" || e === "error" || !1 || !1 || Hl(), ha = (e, t, n) => {
  Yk(e, t, n), Xk(e) && $t("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : df(n)
  }).catch(() => {
  });
}, hn = {
  info: (e, t, ...n) => {
    ha("info", e, t);
  },
  error: (e, t) => {
    ha("error", e, t);
  },
  warn: (e, t) => {
    ha("warn", e, t);
  },
  debug: (e, t) => {
    Zk() && ha("debug", e, t);
  }
};
async function ff() {
  return await $t("local_ai_get_config");
}
async function Ta(e) {
  return await $t("local_ai_save_config", { config: e });
}
async function pf(e) {
  return await $t("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Qk() {
  return await $t("local_ai_get_runtime_status");
}
async function mf() {
  return await $t("local_ai_get_status");
}
async function Jk(e) {
  return await $t("local_ai_start_service", {
    config: e ?? null
  });
}
async function hf() {
  return await $t("local_ai_restart_service");
}
async function eT() {
  await $t("local_ai_stop_service");
}
function gf() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function tT(e, t, n = {}) {
  const r = n.requestId ?? gf(), o = await Hk(
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
async function hs(e) {
  return await $t("local_ai_cancel_chat_stream", { requestId: e });
}
async function nT() {
  return await $t("local_ai_get_chat_histories");
}
async function rT(e) {
  return await $t("local_ai_save_chat_history", {
    history: e
  });
}
async function oT(e) {
  return await $t("local_ai_delete_chat_history", {
    historyId: e
  });
}
const aT = /* @__PURE__ */ new Set([
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
]), sT = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), lT = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), iT = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), cT = 5, uT = 1024 * 1024, dT = 5 * 1024 * 1024, Wc = 4e4, Wl = (e) => e.split(".").pop()?.toLowerCase() ?? "", fT = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, gs = (e) => sT.has(e.type) || lT.has(Wl(e.name)), Gc = (e) => e.type.startsWith("text/") || aT.has(Wl(e.name)), pT = (e) => iT.has(Wl(e.name)), mT = async (e) => await new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? new Error("read failed")), r.readAsDataURL(e);
}), hT = async (e) => {
  const t = await e.text();
  return t.length <= Wc ? { text: t, truncated: !1 } : {
    text: t.slice(0, Wc),
    truncated: !0
  };
}, gT = (e, t) => {
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
function Kc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vT(e) {
  if (Array.isArray(e)) return e;
}
function bT(e, t) {
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
function yT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _T(e, t) {
  return vT(e) || bT(e, t) || wT(e, t) || yT();
}
function wT(e, t) {
  if (e) {
    if (typeof e == "string") return Kc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kc(e, t) : void 0;
  }
}
const vf = Object.entries, qc = Object.setPrototypeOf, kT = Object.isFrozen, TT = Object.getPrototypeOf, ST = Object.getOwnPropertyDescriptor;
let qt = Object.freeze, un = Object.seal, lo = Object.create, bf = typeof Reflect < "u" && Reflect, Gs = bf.apply, Ks = bf.construct;
qt || (qt = function(t) {
  return t;
});
un || (un = function(t) {
  return t;
});
Gs || (Gs = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Ks || (Ks = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const no = _t(Array.prototype.forEach), ET = _t(Array.prototype.lastIndexOf), Yc = _t(Array.prototype.pop), ro = _t(Array.prototype.push), AT = _t(Array.prototype.splice), Ht = Array.isArray, $o = _t(String.prototype.toLowerCase), vs = _t(String.prototype.toString), Zc = _t(String.prototype.match), oo = _t(String.prototype.replace), Xc = _t(String.prototype.indexOf), CT = _t(String.prototype.trim), IT = _t(Number.prototype.toString), LT = _t(Boolean.prototype.toString), Qc = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), Jc = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), it = _t(Object.prototype.hasOwnProperty), Ro = _t(Object.prototype.toString), Rt = _t(RegExp.prototype.test), No = OT(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Gs(e, t, r);
  };
}
function OT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ks(e, n);
  };
}
function Ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $o;
  if (qc && qc(e, null), !Ht(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (kT(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function xT(e) {
  for (let t = 0; t < e.length; t++)
    it(e, t) || (e[t] = null);
  return e;
}
function Ft(e) {
  const t = lo(null);
  for (const r of vf(e)) {
    var n = _T(r, 2);
    const o = n[0], a = n[1];
    it(e, o) && (Ht(a) ? t[o] = xT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Ft(a) : t[o] = a);
  }
  return t;
}
function RT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return IT(e);
    case "boolean":
      return LT(e);
    case "bigint":
      return Qc ? Qc(e) : "0";
    case "symbol":
      return Jc ? Jc(e) : "Symbol()";
    case "undefined":
      return Ro(e);
    case "function":
    case "object": {
      if (e === null)
        return Ro(e);
      const t = e, n = On(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Ro(r);
      }
      return Ro(e);
    }
    default:
      return Ro(e);
  }
}
function On(e, t) {
  for (; e !== null; ) {
    const r = ST(e, t);
    if (r) {
      if (r.get)
        return _t(r.get);
      if (typeof r.value == "function")
        return _t(r.value);
    }
    e = TT(e);
  }
  function n() {
    return null;
  }
  return n;
}
function NT(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const eu = qt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), bs = qt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ys = qt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), PT = qt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _s = qt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $T = qt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), tu = qt(["#text"]), nu = qt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ws = qt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ru = qt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ga = qt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), MT = un(/{{[\w\W]*|^[\w\W]*}}/g), DT = un(/<%[\w\W]*|^[\w\W]*%>/g), FT = un(/\${[\w\W]*/g), zT = un(/^data-[\-\w.\u00B7-\uFFFF]+$/), BT = un(/^aria-[\-\w]+$/), ou = un(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), VT = un(/^(?:\w+script|data):/i), jT = un(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), UT = un(/^html$/i), HT = un(/^[a-z][.\w]*(-[.\w]+)+$/i), Ln = {
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
}, WT = function() {
  return typeof window > "u" ? null : window;
}, GT = function(t, n) {
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
}, au = function() {
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
function yf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : WT();
  const t = (ie) => yf(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Ln.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, p = e.trustedTypes, m = i.prototype, y = On(m, "cloneNode"), g = On(m, "remove"), v = On(m, "nextSibling"), I = On(m, "childNodes"), f = On(m, "parentNode"), E = On(m, "shadowRoot"), N = On(m, "attributes"), A = s && s.prototype ? On(s.prototype, "nodeType") : null, _ = s && s.prototype ? On(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let S, L = "";
  const Y = n, Z = Y.implementation, ae = Y.createNodeIterator, fe = Y.createDocumentFragment, se = Y.getElementsByTagName, _e = r.importNode;
  let be = au();
  t.isSupported = typeof vf == "function" && typeof f == "function" && Z && Z.createHTMLDocument !== void 0;
  const j = MT, Q = DT, U = FT, pe = zT, K = BT, G = VT, De = jT, me = HT;
  let he = ou, ye = null;
  const J = Ie({}, [...eu, ...bs, ...ys, ..._s, ...tu]);
  let Ae = null;
  const Ge = Ie({}, [...nu, ...ws, ...ru, ...ga]);
  let ve = Object.seal(lo(null, {
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
  })), Ke = null, wt = null;
  const Qe = Object.seal(lo(null, {
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
  let mt = !0, ht = !0, St = !1, Et = !0, nt = !1, kt = !0, k = !1, C = !1, B = !1, ee = !1, Le = !1, ge = !1, T = !0, F = !1;
  const we = "user-content-";
  let Re = !0, qe = !1, Mt = {}, Ye = null;
  const an = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Cr = null;
  const ur = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let dr = null;
  const Ir = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Un = "http://www.w3.org/1998/Math/MathML", dn = "http://www.w3.org/2000/svg", Yt = "http://www.w3.org/1999/xhtml";
  let En = Yt, Lr = !1, Or = null;
  const Hn = Ie({}, [Un, dn, Yt], vs);
  let fr = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), pr = Ie({}, ["annotation-xml"]);
  const Wr = Ie({}, ["title", "style", "font", "a", "script"]);
  let fn = null;
  const Gr = ["application/xhtml+xml", "text/html"], xr = "text/html";
  let je = null, An = null;
  const Kr = n.createElement("form"), Rr = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, mr = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (An && An === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = Ft(w), fn = // eslint-disable-next-line unicorn/prefer-includes
    Gr.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? xr : w.PARSER_MEDIA_TYPE, je = fn === "application/xhtml+xml" ? vs : $o, ye = it(w, "ALLOWED_TAGS") && Ht(w.ALLOWED_TAGS) ? Ie({}, w.ALLOWED_TAGS, je) : J, Ae = it(w, "ALLOWED_ATTR") && Ht(w.ALLOWED_ATTR) ? Ie({}, w.ALLOWED_ATTR, je) : Ge, Or = it(w, "ALLOWED_NAMESPACES") && Ht(w.ALLOWED_NAMESPACES) ? Ie({}, w.ALLOWED_NAMESPACES, vs) : Hn, dr = it(w, "ADD_URI_SAFE_ATTR") && Ht(w.ADD_URI_SAFE_ATTR) ? Ie(Ft(Ir), w.ADD_URI_SAFE_ATTR, je) : Ir, Cr = it(w, "ADD_DATA_URI_TAGS") && Ht(w.ADD_DATA_URI_TAGS) ? Ie(Ft(ur), w.ADD_DATA_URI_TAGS, je) : ur, Ye = it(w, "FORBID_CONTENTS") && Ht(w.FORBID_CONTENTS) ? Ie({}, w.FORBID_CONTENTS, je) : an, Ke = it(w, "FORBID_TAGS") && Ht(w.FORBID_TAGS) ? Ie({}, w.FORBID_TAGS, je) : Ft({}), wt = it(w, "FORBID_ATTR") && Ht(w.FORBID_ATTR) ? Ie({}, w.FORBID_ATTR, je) : Ft({}), Mt = it(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Ft(w.USE_PROFILES) : w.USE_PROFILES : !1, mt = w.ALLOW_ARIA_ATTR !== !1, ht = w.ALLOW_DATA_ATTR !== !1, St = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Et = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, nt = w.SAFE_FOR_TEMPLATES || !1, kt = w.SAFE_FOR_XML !== !1, k = w.WHOLE_DOCUMENT || !1, ee = w.RETURN_DOM || !1, Le = w.RETURN_DOM_FRAGMENT || !1, ge = w.RETURN_TRUSTED_TYPE || !1, B = w.FORCE_BODY || !1, T = w.SANITIZE_DOM !== !1, F = w.SANITIZE_NAMED_PROPS || !1, Re = w.KEEP_CONTENT !== !1, qe = w.IN_PLACE || !1, he = NT(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : ou, En = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Yt, fr = it(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ft(w.MATHML_TEXT_INTEGRATION_POINTS) : Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), pr = it(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? Ft(w.HTML_INTEGRATION_POINTS) : Ie({}, ["annotation-xml"]);
    const V = it(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? Ft(w.CUSTOM_ELEMENT_HANDLING) : lo(null);
    if (ve = lo(null), it(V, "tagNameCheck") && Rr(V.tagNameCheck) && (ve.tagNameCheck = V.tagNameCheck), it(V, "attributeNameCheck") && Rr(V.attributeNameCheck) && (ve.attributeNameCheck = V.attributeNameCheck), it(V, "allowCustomizedBuiltInElements") && typeof V.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = V.allowCustomizedBuiltInElements), nt && (ht = !1), Le && (ee = !0), Mt && (ye = Ie({}, tu), Ae = lo(null), Mt.html === !0 && (Ie(ye, eu), Ie(Ae, nu)), Mt.svg === !0 && (Ie(ye, bs), Ie(Ae, ws), Ie(Ae, ga)), Mt.svgFilters === !0 && (Ie(ye, ys), Ie(Ae, ws), Ie(Ae, ga)), Mt.mathMl === !0 && (Ie(ye, _s), Ie(Ae, ru), Ie(Ae, ga))), Qe.tagCheck = null, Qe.attributeCheck = null, it(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Qe.tagCheck = w.ADD_TAGS : Ht(w.ADD_TAGS) && (ye === J && (ye = Ft(ye)), Ie(ye, w.ADD_TAGS, je))), it(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Qe.attributeCheck = w.ADD_ATTR : Ht(w.ADD_ATTR) && (Ae === Ge && (Ae = Ft(Ae)), Ie(Ae, w.ADD_ATTR, je))), it(w, "ADD_URI_SAFE_ATTR") && Ht(w.ADD_URI_SAFE_ATTR) && Ie(dr, w.ADD_URI_SAFE_ATTR, je), it(w, "FORBID_CONTENTS") && Ht(w.FORBID_CONTENTS) && (Ye === an && (Ye = Ft(Ye)), Ie(Ye, w.FORBID_CONTENTS, je)), it(w, "ADD_FORBID_CONTENTS") && Ht(w.ADD_FORBID_CONTENTS) && (Ye === an && (Ye = Ft(Ye)), Ie(Ye, w.ADD_FORBID_CONTENTS, je)), Re && (ye["#text"] = !0), k && Ie(ye, ["html", "head", "body"]), ye.table && (Ie(ye, ["tbody"]), delete Ke.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw No('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw No('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      S = w.TRUSTED_TYPES_POLICY, L = S.createHTML("");
    } else
      S === void 0 && (S = GT(p, o)), S !== null && typeof L == "string" && (L = S.createHTML(""));
    (be.uponSanitizeElement.length > 0 || be.uponSanitizeAttribute.length > 0) && ye === J && (ye = Ft(ye)), be.uponSanitizeAttribute.length > 0 && Ae === Ge && (Ae = Ft(Ae)), qt && qt(w), An = w;
  }, qr = Ie({}, [...bs, ...ys, ...PT]), Yr = Ie({}, [..._s, ...$T]), hr = function(w) {
    let V = f(w);
    (!V || !V.tagName) && (V = {
      namespaceURI: En,
      tagName: "template"
    });
    const oe = $o(w.tagName), Ne = $o(V.tagName);
    return Or[w.namespaceURI] ? w.namespaceURI === dn ? V.namespaceURI === Yt ? oe === "svg" : V.namespaceURI === Un ? oe === "svg" && (Ne === "annotation-xml" || fr[Ne]) : !!qr[oe] : w.namespaceURI === Un ? V.namespaceURI === Yt ? oe === "math" : V.namespaceURI === dn ? oe === "math" && pr[Ne] : !!Yr[oe] : w.namespaceURI === Yt ? V.namespaceURI === dn && !pr[Ne] || V.namespaceURI === Un && !fr[Ne] ? !1 : !Yr[oe] && (Wr[oe] || !qr[oe]) : !!(fn === "application/xhtml+xml" && Or[w.namespaceURI]) : !1;
  }, jt = function(w) {
    ro(t.removed, {
      element: w
    });
    try {
      f(w).removeChild(w);
    } catch {
      g(w);
    }
  }, $ = function(w, V) {
    try {
      ro(t.removed, {
        attribute: V.getAttributeNode(w),
        from: V
      });
    } catch {
      ro(t.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(w), w === "is")
      if (ee || Le)
        try {
          jt(V);
        } catch {
        }
      else
        try {
          V.setAttribute(w, "");
        } catch {
        }
  }, X = function(w) {
    let V = null, oe = null;
    if (B)
      w = "<remove></remove>" + w;
    else {
      const Ue = Zc(w, /^[\r\n\t ]+/);
      oe = Ue && Ue[0];
    }
    fn === "application/xhtml+xml" && En === Yt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Ne = S ? S.createHTML(w) : w;
    if (En === Yt)
      try {
        V = new d().parseFromString(Ne, fn);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = Z.createDocument(En, "template", null);
      try {
        V.documentElement.innerHTML = Lr ? L : Ne;
      } catch {
      }
    }
    const xe = V.body || V.documentElement;
    return w && oe && xe.insertBefore(n.createTextNode(oe), xe.childNodes[0] || null), En === Yt ? se.call(V, k ? "html" : "body")[0] : k ? V.documentElement : xe;
  }, Te = function(w) {
    return ae.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Je = function(w) {
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
      no([j, Q, U], (xe) => {
        Ne = oo(Ne, xe, " ");
      }), oe.data = Ne, oe = V.nextNode();
    }
  }, lt = function(w) {
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
  }, Zt = function(w) {
    if (!A || typeof w != "object" || w === null)
      return !1;
    try {
      return A(w) === Ln.documentFragment;
    } catch {
      return !1;
    }
  }, ct = function(w) {
    if (!A || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof A(w) == "number";
    } catch {
      return !1;
    }
  };
  function Lt(ie, w, V) {
    no(ie, (oe) => {
      oe.call(t, w, V, An);
    });
  }
  const pn = function(w) {
    let V = null;
    if (Lt(be.beforeSanitizeElements, w, null), lt(w))
      return jt(w), !0;
    const oe = je(w.nodeName);
    if (Lt(be.uponSanitizeElement, w, {
      tagName: oe,
      allowedTags: ye
    }), kt && w.hasChildNodes() && !ct(w.firstElementChild) && Rt(/<[/\w!]/g, w.innerHTML) && Rt(/<[/\w!]/g, w.textContent) || kt && w.namespaceURI === Yt && oe === "style" && ct(w.firstElementChild) || w.nodeType === Ln.progressingInstruction || kt && w.nodeType === Ln.comment && Rt(/<[/\w]/g, w.data))
      return jt(w), !0;
    if (Ke[oe] || !(Qe.tagCheck instanceof Function && Qe.tagCheck(oe)) && !ye[oe]) {
      if (!Ke[oe] && Xr(oe) && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, oe) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(oe)))
        return !1;
      if (Re && !Ye[oe]) {
        const xe = f(w), Ue = I(w);
        if (Ue && xe) {
          const Ut = Ue.length;
          for (let tn = Ut - 1; tn >= 0; --tn) {
            const Xt = y(Ue[tn], !0);
            xe.insertBefore(Xt, v(w));
          }
        }
      }
      return jt(w), !0;
    }
    return (A ? A(w) : w.nodeType) === Ln.element && !hr(w) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && Rt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (jt(w), !0) : (nt && w.nodeType === Ln.text && (V = w.textContent, no([j, Q, U], (xe) => {
      V = oo(V, xe, " ");
    }), w.textContent !== V && (ro(t.removed, {
      element: w.cloneNode()
    }), w.textContent = V)), Lt(be.afterSanitizeElements, w, null), !1);
  }, Zr = function(w, V, oe) {
    if (wt[V] || T && (V === "id" || V === "name") && (oe in n || oe in Kr))
      return !1;
    const Ne = Ae[V] || Qe.attributeCheck instanceof Function && Qe.attributeCheck(V, w);
    if (!(ht && !wt[V] && Rt(pe, V))) {
      if (!(mt && Rt(K, V))) {
        if (!Ne || wt[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Xr(w) && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, w) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(w)) && (ve.attributeNameCheck instanceof RegExp && Rt(ve.attributeNameCheck, V) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(V, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && Rt(ve.tagNameCheck, oe) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(oe)))
          ) return !1;
        } else if (!dr[V]) {
          if (!Rt(he, oo(oe, De, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && w !== "script" && Xc(oe, "data:") === 0 && Cr[w])) {
              if (!(St && !Rt(G, oo(oe, De, "")))) {
                if (oe)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, oa = Ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Xr = function(w) {
    return !oa[$o(w)] && Rt(me, w);
  }, To = function(w) {
    Lt(be.beforeSanitizeAttributes, w, null);
    const V = w.attributes;
    if (!V || lt(w))
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
      const xe = V[Ne], Ue = xe.name, Ut = xe.namespaceURI, tn = xe.value, Xt = je(Ue), So = tn;
      let h = Ue === "value" ? So : CT(So);
      if (oe.attrName = Xt, oe.attrValue = h, oe.keepAttr = !0, oe.forceKeepAttr = void 0, Lt(be.uponSanitizeAttribute, w, oe), h = oe.attrValue, F && (Xt === "id" || Xt === "name") && Xc(h, we) !== 0 && ($(Ue, w), h = we + h), kt && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, h)) {
        $(Ue, w);
        continue;
      }
      if (Xt === "attributename" && Zc(h, "href")) {
        $(Ue, w);
        continue;
      }
      if (oe.forceKeepAttr)
        continue;
      if (!oe.keepAttr) {
        $(Ue, w);
        continue;
      }
      if (!Et && Rt(/\/>/i, h)) {
        $(Ue, w);
        continue;
      }
      nt && no([j, Q, U], (O) => {
        h = oo(h, O, " ");
      });
      const x = je(w.nodeName);
      if (!Zr(x, Xt, h)) {
        $(Ue, w);
        continue;
      }
      if (S && typeof p == "object" && typeof p.getAttributeType == "function" && !Ut)
        switch (p.getAttributeType(x, Xt)) {
          case "TrustedHTML": {
            h = S.createHTML(h);
            break;
          }
          case "TrustedScriptURL": {
            h = S.createScriptURL(h);
            break;
          }
        }
      if (h !== So)
        try {
          Ut ? w.setAttributeNS(Ut, Ue, h) : w.setAttribute(Ue, h), lt(w) ? jt(w) : Yc(t.removed);
        } catch {
          $(Ue, w);
        }
    }
    Lt(be.afterSanitizeAttributes, w, null);
  }, Qr = function(w) {
    let V = null;
    const oe = Te(w);
    for (Lt(be.beforeSanitizeShadowDOM, w, null); V = oe.nextNode(); )
      if (Lt(be.uponSanitizeShadowNode, V, null), pn(V), To(V), Zt(V.content) && Qr(V.content), (A ? A(V) : V.nodeType) === Ln.element) {
        const xe = E ? E(V) : V.shadowRoot;
        Zt(xe) && (gr(xe), Qr(xe));
      }
    Lt(be.afterSanitizeShadowDOM, w, null);
  }, gr = function(w) {
    const V = A ? A(w) : w.nodeType;
    if (V === Ln.element) {
      const xe = E ? E(w) : w.shadowRoot;
      Zt(xe) && (gr(xe), Qr(xe));
    }
    const oe = I ? I(w) : w.childNodes;
    if (!oe)
      return;
    const Ne = [];
    no(oe, (xe) => {
      ro(Ne, xe);
    });
    for (const xe of Ne)
      gr(xe);
    if (V === Ln.element) {
      const xe = _ ? _(w) : null;
      if (typeof xe == "string" && je(xe) === "template") {
        const Ue = w.content;
        Zt(Ue) && gr(Ue);
      }
    }
  };
  return t.sanitize = function(ie) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, oe = null, Ne = null, xe = null;
    if (Lr = !ie, Lr && (ie = "<!-->"), typeof ie != "string" && !ct(ie) && (ie = RT(ie), typeof ie != "string"))
      throw No("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (C || mr(w), t.removed = [], typeof ie == "string" && (qe = !1), qe) {
      const tn = _ ? _(ie) : ie.nodeName;
      if (typeof tn == "string") {
        const Xt = je(tn);
        if (!ye[Xt] || Ke[Xt])
          throw No("root node is forbidden and cannot be sanitized in-place");
      }
      if (lt(ie))
        throw No("root node is clobbered and cannot be sanitized in-place");
      gr(ie);
    } else if (ct(ie))
      V = X("<!---->"), oe = V.ownerDocument.importNode(ie, !0), oe.nodeType === Ln.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? V = oe : V.appendChild(oe), gr(oe);
    else {
      if (!ee && !nt && !k && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return S && ge ? S.createHTML(ie) : ie;
      if (V = X(ie), !V)
        return ee ? null : ge ? L : "";
    }
    V && B && jt(V.firstChild);
    const Ue = Te(qe ? ie : V);
    for (; Ne = Ue.nextNode(); )
      pn(Ne), To(Ne), Zt(Ne.content) && Qr(Ne.content);
    if (qe)
      return nt && Je(ie), ie;
    if (ee) {
      if (nt && Je(V), Le)
        for (xe = fe.call(V.ownerDocument); V.firstChild; )
          xe.appendChild(V.firstChild);
      else
        xe = V;
      return (Ae.shadowroot || Ae.shadowrootmode) && (xe = _e.call(r, xe, !0)), xe;
    }
    let Ut = k ? V.outerHTML : V.innerHTML;
    return k && ye["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && Rt(UT, V.ownerDocument.doctype.name) && (Ut = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + Ut), nt && no([j, Q, U], (tn) => {
      Ut = oo(Ut, tn, " ");
    }), S && ge ? S.createHTML(Ut) : Ut;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    mr(ie), C = !0;
  }, t.clearConfig = function() {
    An = null, C = !1;
  }, t.isValidAttribute = function(ie, w, V) {
    An || mr({});
    const oe = je(ie), Ne = je(w);
    return Zr(oe, Ne, V);
  }, t.addHook = function(ie, w) {
    typeof w == "function" && ro(be[ie], w);
  }, t.removeHook = function(ie, w) {
    if (w !== void 0) {
      const V = ET(be[ie], w);
      return V === -1 ? void 0 : AT(be[ie], V, 1)[0];
    }
    return Yc(be[ie]);
  }, t.removeHooks = function(ie) {
    be[ie] = [];
  }, t.removeAllHooks = function() {
    be = au();
  }, t;
}
var KT = yf();
const qT = {
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
function YT(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : KT.sanitize(e, qT) : "";
}
const ZT = { class: "local-ai-chat-shell" }, XT = { class: "chat-sidebar" }, QT = { class: "sidebar-header" }, JT = { class: "sidebar-title-block" }, e2 = { class: "sidebar-search" }, t2 = ["placeholder"], n2 = { class: "sidebar-section recent-section" }, r2 = { class: "section-title-row" }, o2 = { class: "section-title" }, a2 = { class: "sidebar-actions" }, s2 = ["title"], l2 = ["title"], i2 = {
  key: 0,
  class: "chat-list"
}, c2 = ["onClick", "onKeydown"], u2 = { class: "chat-item-title" }, d2 = { class: "chat-item-time" }, f2 = ["title", "onClick"], p2 = {
  key: 1,
  class: "sidebar-empty"
}, m2 = { class: "chat-panel" }, h2 = { class: "chat-topbar" }, g2 = { class: "chat-topbar-main" }, v2 = { class: "chat-title-row" }, b2 = { class: "service-url" }, y2 = { class: "chat-topbar-actions" }, _2 = { class: "date-divider" }, w2 = {
  key: 0,
  class: "empty-state"
}, k2 = { class: "empty-title" }, T2 = { class: "empty-desc" }, S2 = { class: "message-avatar" }, E2 = { key: 1 }, A2 = { class: "message-body" }, C2 = { class: "user-bubble" }, I2 = {
  key: 0,
  class: "user-message-text"
}, L2 = {
  key: 1,
  class: "message-attachment-list"
}, O2 = { key: 0 }, x2 = ["src", "alt"], R2 = {
  key: 1,
  class: "attachment-file-icon"
}, N2 = { key: 2 }, P2 = {
  key: 0,
  class: "message-actions"
}, $2 = ["title", "onClick"], M2 = ["title", "onClick"], D2 = ["title", "onClick"], F2 = { class: "assistant-head" }, z2 = {
  key: 0,
  class: "assistant-content-stack"
}, B2 = ["open"], V2 = { class: "reasoning-summary-title" }, j2 = { key: 0 }, U2 = ["innerHTML"], H2 = ["innerHTML"], W2 = {
  key: 1,
  class: "message-content loading-text"
}, G2 = {
  key: 0,
  class: "message-stats"
}, K2 = {
  key: 1,
  class: "message-warning"
}, q2 = {
  key: 2,
  class: "message-actions"
}, Y2 = {
  key: 0,
  class: "message-version-switcher"
}, Z2 = ["disabled", "title", "onClick"], X2 = ["disabled", "title", "onClick"], Q2 = ["title", "onClick"], J2 = ["title", "onClick"], eS = ["title"], tS = ["title"], nS = ["title", "onClick"], rS = ["title", "onClick"], oS = ["title"], aS = {
  key: 0,
  class: "attachment-preview-list"
}, sS = ["src", "alt"], lS = {
  key: 1,
  class: "attachment-file-icon"
}, iS = { class: "attachment-meta" }, cS = ["title", "onClick"], uS = ["placeholder"], dS = { class: "input-toolbar" }, fS = { class: "input-toolbar-left" }, pS = ["title"], mS = ["title", "aria-pressed"], hS = { class: "model-select-shell" }, gS = ["disabled"], vS = ["value"], bS = {
  key: 0,
  value: ""
}, yS = { class: "input-toolbar-right" }, _S = ["title", "aria-label"], wS = ["disabled", "title", "aria-label"], kS = 96, TS = 4096, ks = 160, SS = /* @__PURE__ */ le({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Xo(), n = W(""), r = W([]), o = W(""), a = W(""), s = W([]), i = W(!1), l = W(!1), u = W(!1), d = W(!1), p = W(!1), m = W(!0), y = W(!1), g = W(null), v = W(null), I = W(null), f = W(""), E = W(null), N = W(null), A = W(null), _ = W(Date.now());
    let S = null, L = null;
    const Y = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ae = (h) => `${Date.now()}-${h}-${Math.random().toString(16).slice(2, 8)}`, fe = (h) => h.type === "root", se = (h) => new Map(h.map((x) => [x.id, x])), _e = (h) => h.find(fe), be = (h, x) => {
      if (!x) return null;
      const O = se(h);
      let z = O.get(x);
      const te = /* @__PURE__ */ new Set();
      for (; z?.childIds?.length && !te.has(z.id); )
        te.add(z.id), z = O.get(z.childIds[z.childIds.length - 1]);
      return z?.id ?? null;
    }, j = (h, x) => {
      if (h.some(fe)) {
        const re = h.map((Ce) => ({
          ...Ce,
          type: Ce.type ?? "text",
          parentId: Ce.parentId ?? null,
          childIds: Ce.childIds ?? []
        })), Oe = _e(re);
        return {
          messages: re,
          currentNodeId: be(re, re.at(-1)?.id) ?? Oe?.id ?? null
        };
      }
      const O = {
        id: ae("root"),
        role: "system",
        type: "root",
        content: "",
        createdAt: x,
        parentId: null,
        childIds: []
      }, z = [O];
      let te = O.id;
      for (const re of h) {
        const Oe = {
          ...re,
          role: re.role === "system" ? "assistant" : re.role,
          type: "text",
          parentId: te,
          childIds: []
        };
        z.find((rt) => rt.id === te)?.childIds?.push(Oe.id), z.push(Oe), te = Oe.id;
      }
      return { messages: z, currentNodeId: te };
    }, Q = (h, x) => {
      if (!x) return [];
      const O = se(h), z = [], te = /* @__PURE__ */ new Set();
      let re = O.get(x);
      for (; re && !te.has(re.id); )
        te.add(re.id), z.unshift(re), re = re.parentId ? O.get(re.parentId) : void 0;
      return z;
    }, U = (h) => {
      if (!h) return [];
      const x = h.currentNodeId ?? be(h.messages, _e(h.messages)?.id);
      return Q(h.messages, x).filter(
        (O) => !fe(O)
      );
    }, pe = (h) => {
      if (!h) return [];
      const x = se(h.messages), O = (z) => be(h.messages, z) ?? z;
      return U(h).map((z) => {
        const re = (z.parentId ? x.get(z.parentId) : void 0)?.childIds ?? [z.id];
        return {
          message: z,
          siblingLeafNodeIds: re.map(O),
          siblingCurrentIndex: Math.max(0, re.indexOf(z.id))
        };
      });
    }, K = (h, x) => {
      const O = _e(h.messages), z = x.parentId ?? h.currentNodeId ?? O?.id ?? null, te = {
        ...x,
        type: "text",
        parentId: z,
        childIds: []
      };
      if (h.messages.push(te), z) {
        const re = h.messages.find((Oe) => Oe.id === z);
        re && (re.childIds = [...re.childIds ?? [], te.id]);
      }
      return h.currentNodeId = te.id, te;
    }, G = R(
      () => (!!a.value.trim() || s.value.length > 0) && !i.value
    ), De = R(() => E.value?.healthy ? t("localAi.serviceHealthy") : E.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), me = R(
      () => r.value.find((h) => h.id === o.value) ?? null
    ), he = R(() => U(me.value)), ye = R(() => pe(me.value)), J = (h) => h ? h.split(/[\\/]+/).pop() ?? h : "", Ae = R(
      () => J(f.value) || J(E.value?.modelPath) || J(v.value?.modelPath) || t("localAi.localModel")
    ), Ge = R(() => I.value?.mainModels ?? []), ve = R(() => !!v.value?.mmprojPath), Ke = R(
      () => E.value?.ctxSize ?? v.value?.ctxSize ?? 4096
    ), wt = R(() => {
      const h = Ke.value, x = v.value?.maxTokens ?? 0;
      return x > 0 ? Math.min(
        Math.max(x, 512),
        Math.max(512, h - 512)
      ) : Math.min(
        Math.max(TS, Math.floor(h * 0.5)),
        Math.max(512, h - 512)
      );
    }), Qe = R(
      () => Math.max(512, Ke.value - wt.value)
    ), mt = R(() => {
      const h = Ae.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(h);
    }), ht = R(() => {
      const h = n.value.trim().toLowerCase();
      return r.value.filter(
        (x) => !h || x.title.toLowerCase().includes(h) || x.messages.some(
          (O) => !fe(O) && O.content.toLowerCase().includes(h)
        )
      ).slice().sort((x, O) => O.updatedAt.localeCompare(x.updatedAt));
    }), St = () => t("localAi.now"), Et = () => {
      const h = (/* @__PURE__ */ new Date()).toISOString(), x = {
        id: ae("root"),
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
        updatedAtLabel: St(),
        currentNodeId: x.id,
        messages: [x]
      };
    }, nt = () => {
      const h = N.value;
      return h ? h.scrollHeight - h.scrollTop - h.clientHeight <= kS : !0;
    }, kt = () => {
      const h = nt();
      m.value = h, y.value = !h;
    }, k = () => {
      kt();
    }, C = async (h = {}) => {
      await ut();
      const x = N.value;
      !x || !h.force && !m.value || (x.scrollTop = x.scrollHeight, kt());
    }, B = () => {
      m.value = !0, C({ force: !0 });
    }, ee = async () => {
      try {
        v.value = await ff(), f.value = v.value.modelPath ?? "", I.value = await pf(v.value), mt.value || (d.value = !1);
      } catch (h) {
        hn.warn("[LocalAI] refresh chat config failed", h);
      }
    }, Le = async () => {
      l.value = !0;
      try {
        E.value = await mf();
      } catch (h) {
        hn.warn("[LocalAI] refresh chat status failed", h);
      } finally {
        l.value = !1;
      }
    }, ge = async () => {
      try {
        const h = await nT();
        r.value = h.map((x) => {
          const O = x.messages?.length ? x.messages : x.turns.map((te) => ({
            id: te.id,
            role: te.role,
            content: te.content,
            createdAt: te.createdAt
          })), z = j(
            O,
            x.createdAt
          );
          return {
            id: x.id,
            title: x.title,
            createdAt: x.createdAt,
            updatedAt: x.updatedAt,
            updatedAtLabel: new Date(x.updatedAt).toLocaleString(),
            currentNodeId: x.currentNodeId ?? z.currentNodeId,
            messages: z.messages
          };
        }), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (h) {
        hn.warn("[LocalAI] refresh histories failed", h);
      }
    }, T = async () => {
      await Promise.all([ee(), Le(), ge()]);
    }, F = async () => {
      const h = me.value;
      if (!h) return;
      const x = U(h).map((O) => ({
        id: O.id,
        role: O.role,
        content: O.content,
        createdAt: O.createdAt
      }));
      await rT({
        id: h.id,
        title: h.title,
        createdAt: h.createdAt,
        updatedAt: h.updatedAt,
        turns: x,
        currentNodeId: h.currentNodeId,
        messages: h.messages
      });
    }, we = () => {
      const h = Et();
      r.value.unshift(h), o.value = h.id, a.value = "";
    }, Re = () => {
      me.value || we();
    }, qe = (h) => {
      o.value = h;
      const x = me.value;
      x && !x.currentNodeId && (x.currentNodeId = be(x.messages, _e(x.messages)?.id) ?? null), m.value = !0, C({ force: !0 });
    }, Mt = async (h) => {
      r.value = r.value.filter((x) => x.id !== h), await oT(h), o.value === h && (o.value = r.value[0]?.id ?? "");
    }, Ye = () => {
      A.value?.click();
    }, an = (h, x) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: h.name,
      type: x,
      mime: h.type || "application/octet-stream",
      size: h.size,
      status: "pending"
    }), Cr = async (h) => {
      if (gs(h)) {
        const O = an(h, "image");
        if (h.size > dT)
          return {
            ...O,
            status: "error",
            error: t("localAi.imageTooLarge")
          };
        try {
          return {
            ...O,
            status: "parsed",
            dataUrl: await mT(h)
          };
        } catch (z) {
          return { ...O, status: "error", error: String(z) };
        }
      }
      if (Gc(h)) {
        const O = an(h, "text");
        if (h.size > uT)
          return {
            ...O,
            status: "error",
            error: t("localAi.textFileTooLarge")
          };
        try {
          const z = await hT(h);
          return {
            ...O,
            status: "parsed",
            text: z.text,
            error: z.truncated ? "truncated" : void 0
          };
        } catch (z) {
          return { ...O, status: "error", error: String(z) };
        }
      }
      return {
        ...an(h, "unsupported"),
        status: "error",
        error: pT(h) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
      };
    }, ur = async (h) => {
      const x = Array.from(h), O = cT - s.value.length;
      if (O <= 0) {
        ot.msg(t("localAi.attachmentLimit"), "warning");
        return;
      }
      x.length > O && ot.msg(t("localAi.attachmentLimit"), "warning");
      const z = x.slice(0, O), te = z.map(
        (re) => an(
          re,
          gs(re) ? "image" : Gc(re) ? "text" : "unsupported"
        )
      );
      s.value.push(...te), await Promise.all(
        z.map(async (re, Oe) => {
          const Ce = await Cr(re), rt = s.value.findIndex(
            (At) => At.id === te[Oe].id
          );
          rt >= 0 && (s.value[rt] = Ce);
        })
      );
    }, dr = async (h) => {
      const x = h.target;
      x.files?.length && await ur(x.files), x.value = "";
    }, Ir = async (h) => {
      h.dataTransfer?.files.length && await ur(h.dataTransfer.files);
    }, Un = async (h) => {
      const x = Array.from(h.clipboardData?.files ?? []);
      if (!x.length) return;
      const O = x.filter(gs);
      O.length && (h.preventDefault(), await ur(O));
    }, dn = (h) => {
      s.value = s.value.filter(
        (x) => x.id !== h
      );
    }, Yt = (h) => h.status === "pending" ? t("localAi.attachmentPending") : h.status === "error" ? h.error ?? "" : h.error === "truncated" ? t("localAi.attachmentTruncated") : t("localAi.attachmentParsed"), En = async () => {
      if (!(!v.value || !f.value)) {
        v.value.modelPath = f.value;
        try {
          v.value = await Ta(v.value), E.value?.running && (E.value = await hf()), ot.msg(t("localAi.modelChanged"));
        } catch (h) {
          ot.msg(`${t("localAi.configSaveFailed")}: ${h}`, "error");
        }
      }
    }, Lr = (h) => {
      let x = 0;
      for (let O = 0; O < h.length; O += 1)
        x = x * 31 + h.charCodeAt(O) >>> 0;
      return `code-${h.length}-${x.toString(16)}`;
    }, Or = (h) => h.includes("<pre>") ? h.replace(
      /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
      (x, O, z) => {
        const te = document.createElement("textarea");
        te.innerHTML = z;
        const re = te.value, Oe = Lr(re);
        Z.set(Oe, re);
        const Ce = O ? ` class="${O}"` : "";
        return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${Oe}" title="${t("common.copy")}">${t("common.copy")}</button><pre><code${Ce}>${z}</code></pre></div>`;
      }
    ) : h, Hn = (h) => {
      const x = Y.get(h);
      if (x) return x;
      const O = Or(
        YT(Be.parse(h, { async: !1 }))
      );
      if (Y.set(h, O), Y.size > 80) {
        const z = Y.keys().next().value;
        typeof z == "string" && Y.delete(z);
      }
      return O;
    }, fr = async (h) => {
      const z = h.target?.closest(".code-copy-btn")?.dataset.codeId;
      if (!z) return;
      const te = Z.get(z);
      if (te)
        try {
          await navigator.clipboard.writeText(te), ot.msg(t("localAi.codeCopied"));
        } catch (re) {
          ot.msg(`${t("common.copy")}: ${re}`, "error");
        }
    }, pr = (h) => {
      const x = h.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!x || x.index === void 0)
        return { reasoning: "", answer: h };
      const O = h.slice(0, x.index).trim(), z = x[0], te = h.slice(x.index + z.length).trim();
      return {
        reasoning: (x[1] ?? "").trim(),
        answer: [O, te].filter(Boolean).join(`

`)
      };
    }, Wr = (h) => pr(h).reasoning, fn = (h) => pr(h).answer, Gr = (h) => !!fn(h.content), xr = (h) => !!(h.streaming && h.allowThinking && h.reasoningStartedAt && !h.reasoningEndedAt && !Gr(h)), je = (h) => {
      if (!h.reasoningStartedAt) return "0.00";
      const x = h.reasoningEndedAt ?? (h.streaming ? _.value : Date.now());
      return Math.max(0, (x - h.reasoningStartedAt) / 1e3).toFixed(2);
    }, An = (h) => !h.reasoningStartedAt && h.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: je(h)
    }), Kr = (h) => new Date(
      h.createdAt || me.value?.updatedAt || Date.now()
    ), Rr = (h) => Kr(h).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), mr = (h) => h.streaming ? xr(h) ? t("localAi.thinking") : t("localAi.generating") : Rr(h), qr = (h) => h.allowThinking && !h.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Yr = (h, x) => {
      h.allowThinking && (x.includes("<think>") && !h.reasoningStartedAt && (h.reasoningStartedAt = Date.now()), x.includes("</think>") && !h.reasoningEndedAt && (h.reasoningEndedAt = Date.now()));
    }, hr = (h) => {
      const x = h.trim();
      if (!x) return 0;
      const O = (x.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, re = (x.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((Oe, Ce) => /^[A-Za-z0-9_]+$/.test(Ce) ? Oe + Math.max(1, Math.ceil(Ce.length / 4)) : Oe + 1, 0);
      return Math.max(1, Math.ceil(O + re));
    }, jt = (h) => Array.isArray(h) ? h.filter((x) => x.type === "text").map((x) => x.text).join(`
`) : h, $ = (h) => {
      const x = h.attachments?.filter(
        (re) => re.status === "parsed"
      ) ?? [], O = gT(
        h.content,
        x
      ), z = x.filter(
        (re) => re.type === "image" && re.dataUrl
      );
      if (!z.length) return O;
      const te = [{ type: "text", text: O }];
      for (const re of z)
        te.push({
          type: "image_url",
          image_url: {
            url: re.dataUrl ?? ""
          }
        });
      return te;
    }, X = (h) => hr(
      h.map((x) => {
        const O = jt(x.content);
        return `${x.role}: ${O}`;
      }).join(`
`)
    ), Te = (h, x) => {
      const O = Math.max(240, x * 4);
      return h.length <= O ? h : `${t("localAi.previousAnswerTail")}

${h.slice(-O)}`;
    }, Je = (h, x) => {
      const O = [];
      let z = 0;
      for (let te = h.length - 1; te >= 0; te -= 1) {
        const re = h[te], Oe = X([re]);
        if (z + Oe <= x || O.length === 0) {
          O.unshift(re), z += Oe;
          continue;
        }
        const Ce = x - z;
        if (re.role !== "assistant" || typeof re.content != "string" || Ce < ks)
          continue;
        let rt = Ce, At = {
          ...re,
          content: Te(re.content, rt)
        }, Ot = X([At]);
        for (; Ot > Ce && rt > ks; )
          rt = Math.max(
            ks,
            Math.floor(rt * 0.7)
          ), At = {
            ...re,
            content: Te(re.content, rt)
          }, Ot = X([At]);
        z + Ot <= x && (O.unshift(At), z += Ot);
      }
      return O;
    }, lt = () => Je(
      he.value.filter((h) => !h.streaming && h.role !== "system").map((h) => ({
        role: h.role,
        content: h.role === "user" ? $(h) : h.content
      })),
      Qe.value
    ), Zt = (h) => {
      const x = v.value?.maxTokens ?? 0;
      if (x > 0) return x;
      const O = X(h);
      return Math.max(256, Ke.value - O - 128);
    }, ct = (h) => {
      const x = _.value, O = he.value.findIndex(
        (Ot) => Ot.id === h.id
      ), z = h.stats?.promptTokens ?? h.promptTokens ?? hr(
        he.value.slice(0, Math.max(0, O)).map((Ot) => Ot.content).join(`
`)
      ), te = h.stats?.completionTokens ?? hr(h.content), re = Ke.value, Oe = h.stats?.totalTokens ?? z + te, Ce = Math.min(Oe, re), rt = Math.max(
        0,
        (h.stats?.generationTimeMs ?? h.elapsedMs ?? x - Kr(h).getTime()) / 1e3
      ), At = h.stats?.tokensPerSecond ?? (rt > 0 ? te / rt : 0);
      return {
        context: Ce,
        contextMax: re,
        contextPercent: Math.min(100, Math.round(Ce / re * 100)),
        output: te,
        outputMax: (v.value?.maxTokens ?? 0) > 0 ? String(v.value?.maxTokens) : "∞",
        seconds: rt.toFixed(1),
        speed: At.toFixed(1)
      };
    }, Lt = (h) => h.repetitionStopped ? t("localAi.repetitionStopped") : h.interrupted ? t("localAi.streamInterrupted") : h.stopped ? t("localAi.generationStopped") : (h.stats?.totalTokens ?? (h.promptTokens ?? 0) + (h.stats?.completionTokens ?? hr(h.content))) >= Ke.value - 8 ? t("localAi.contextLimitReached") : h.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", pn = (h) => {
      const x = String(h);
      return /exceeds the available context size|exceed_context_size/i.test(x) ? t("localAi.contextExceeded") : x;
    }, Zr = (h) => {
      const x = h.replace(/\s+/g, " ").trim();
      if (x.length < 900) return !1;
      const z = x.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Ce) => Ce.toLowerCase()) ?? [];
      if (z.length < 140) return !1;
      const te = z.slice(-120), re = /* @__PURE__ */ new Map();
      for (const Ce of te) re.set(Ce, (re.get(Ce) ?? 0) + 1);
      if (re.size / te.length < 0.12 && [...re.values()].some((Ce) => Ce >= 56))
        return !0;
      for (let Ce = 1; Ce <= 4; Ce += 1) {
        const rt = z.slice(-Ce).join("\0");
        let At = 1;
        for (let Ot = z.length - Ce * 2; Ot >= 0 && z.slice(Ot, Ot + Ce).join("\0") === rt; Ot -= Ce)
          At += 1;
        if (At >= Math.max(24, Math.ceil(72 / Ce))) return !0;
      }
      return !1;
    }, oa = () => {
      L || (_.value = Date.now(), L = setInterval(() => {
        _.value = Date.now();
      }, 250));
    }, Xr = () => {
      L && (clearInterval(L), L = null, _.value = Date.now());
    }, To = async (h) => {
      const x = performance.now(), O = gf(), z = lt();
      let te = "", re = null, Oe = null, Ce = !1, rt = !1;
      g.value = O, u.value = !1, h.promptTokens = X(z);
      const At = async () => {
        if (!te) {
          re = null, Oe?.(), Oe = null;
          return;
        }
        const xt = u.value ? 480 : te.length > 900 ? 180 : te.length > 240 ? 96 : 32;
        h.content += te.slice(0, xt), te = te.slice(xt), !rt && !u.value && Zr(h.content) && (rt = !0, u.value = !0, h.repetitionStopped = !0, hs(O).catch(
          (Eo) => hn.warn("[LocalAI] repetition stop failed", Eo)
        )), await C(), re = window.setTimeout(() => {
          At().catch(
            (Eo) => hn.warn("[LocalAI] stream pump failed", Eo)
          );
        }, 48);
      }, Ot = (xt) => {
        xt && (Yr(h, xt), te += xt, re === null && (re = window.setTimeout(() => {
          At().catch(
            (Eo) => hn.warn("[LocalAI] stream pump failed", Eo)
          );
        }, 32)));
      }, Gl = async () => {
        !te && re === null || await new Promise((xt) => {
          Oe = xt;
        });
      }, Jr = await tT(
        {
          messages: z,
          maxTokens: Zt(z),
          enableThinking: h.allowThinking === !0
        },
        (xt) => {
          Ce = !0, Ot(xt);
        },
        {
          requestId: O,
          onStats: (xt) => {
            h.stats = xt, _.value = Date.now();
          }
        }
      ).catch(async (xt) => {
        throw await Gl(), xt;
      });
      if (!Ce)
        Ot(Jr.content);
      else if (!u.value) {
        const xt = h.content.length + te.length;
        Jr.content.length > xt && Ot(Jr.content.slice(xt));
      }
      await Gl(), !u.value && Jr.content && h.content !== Jr.content && (h.content = Jr.content), h.streaming = !1, h.elapsedMs = performance.now() - x, h.stopped = u.value, h.interrupted = !1, h.error = "", _.value = Date.now(), g.value = null;
    }, Qr = async () => {
      const h = g.value;
      if (!(!i.value || !h || u.value)) {
        u.value = !0;
        try {
          await hs(h);
        } catch (x) {
          hn.warn("[LocalAI] cancel stream failed", x);
        }
      }
    }, gr = (h) => {
      h.isComposing || h.keyCode === 229 || h.key === "Enter" && !h.shiftKey && (h.preventDefault(), w());
    }, ie = () => {
      if (!a.value.trim() && !s.value.length) return !1;
      if (s.value.find(
        (z) => z.status === "pending"
      ))
        return ot.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const x = s.value.find(
        (z) => z.status === "error" || z.type === "unsupported"
      );
      return x ? (ot.msg(
        `${t("localAi.attachmentErrorBlock")}: ${x.name}`,
        "warning"
      ), !1) : s.value.some(
        (z) => z.type === "image"
      ) && !ve.value ? (ot.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, w = async () => {
      const h = a.value.trim();
      if (i.value || !ie()) return;
      Re();
      const x = (/* @__PURE__ */ new Date()).toISOString(), O = s.value.map((rt) => ({
        ...rt
      })), z = h || O[0]?.name || "", te = me.value;
      if (!te) return;
      const re = K(te, {
        id: ae("user"),
        role: "user",
        content: h,
        createdAt: x,
        attachments: O
      }), Oe = K(te, {
        id: ae("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: re.id,
        streaming: !0,
        allowThinking: d.value && mt.value,
        promptTokens: X(lt())
      });
      a.value = "", s.value = [], i.value = !0, oa(), await C({ force: !0 });
      const Ce = performance.now();
      try {
        await To(Oe), me.value && (me.value.title = me.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : me.value.title, me.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), me.value.updatedAtLabel = new Date(
          me.value.updatedAt
        ).toLocaleString(), await F()), await Le();
      } catch (rt) {
        if (!u.value) {
          a.value = h, s.value = O;
          const At = pn(rt);
          ot.msg(`${t("localAi.chatFailed")}: ${At}`, "error"), Oe.error = At, Oe.interrupted = !!Oe.content.trim(), Oe.interrupted || (Oe.content = At), me.value && (me.value.title = me.value.title === t("localAi.newChatTitle") ? z.slice(0, 28) : me.value.title, me.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), me.value.updatedAtLabel = new Date(
            me.value.updatedAt
          ).toLocaleString(), await F());
        }
        Oe.streaming = !1, Oe.elapsedMs = performance.now() - Ce;
      } finally {
        i.value = !1, g.value = null, Xr(), await C();
      }
    }, V = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, oe = (h) => {
      const x = new Date(h), O = /* @__PURE__ */ new Date(), z = O.getTime() - x.getTime(), te = 24 * 60 * 60 * 1e3;
      return x.toDateString() === O.toDateString() ? x.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : z < te * 2 ? t("localAi.yesterday") : z < te * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(z / te))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(z / (te * 7)))
      });
    }, Ne = async (h) => {
      try {
        await navigator.clipboard.writeText(h.content), ot.msg(t("localAi.copied"));
      } catch (x) {
        ot.msg(`${t("common.operationFailed")}: ${x}`, "error");
      }
    }, xe = (h, x) => {
      const O = se(h), z = /* @__PURE__ */ new Set([x]), te = (re) => {
        const Oe = O.get(re);
        for (const Ce of Oe?.childIds ?? [])
          z.add(Ce), te(Ce);
      };
      return te(x), z;
    }, Ue = async (h) => {
      const x = me.value;
      if (!x) return;
      const O = x.messages.find((te) => te.id === h);
      if (!O || fe(O)) return;
      const z = xe(x.messages, h);
      x.messages = x.messages.filter((te) => !z.has(te.id)).map((te) => ({
        ...te,
        childIds: (te.childIds ?? []).filter((re) => !z.has(re))
      })), x.currentNodeId && z.has(x.currentNodeId) && (x.currentNodeId = be(x.messages, O.parentId) ?? _e(x.messages)?.id ?? null), x.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), x.updatedAtLabel = new Date(x.updatedAt).toLocaleString(), await F();
    }, Ut = (h) => {
      a.value = h.content, me.value && h.parentId && (me.value.currentNodeId = h.parentId);
    }, tn = (h, x) => {
      const O = me.value;
      if (!O) return;
      const z = h.siblingCurrentIndex + x, te = h.siblingLeafNodeIds[z];
      te && (O.currentNodeId = te, m.value = !0, C({ force: !0 }));
    }, Xt = () => {
      ot.msg(t("localAi.feedbackSaved"));
    }, So = async (h) => {
      const x = me.value;
      if (!x || i.value) return;
      const O = x.messages.find((re) => re.id === h);
      if (!O || O.role !== "assistant" || !O.parentId) return;
      x.currentNodeId = O.parentId;
      const z = K(x, {
        id: ae("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: O.parentId,
        streaming: !0,
        allowThinking: d.value && mt.value,
        promptTokens: X(lt())
      });
      i.value = !0, oa(), await C({ force: !0 });
      const te = performance.now();
      try {
        await To(z), x.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), x.updatedAtLabel = new Date(x.updatedAt).toLocaleString(), await F();
      } catch (re) {
        if (!u.value) {
          const Oe = pn(re);
          ot.msg(`${t("localAi.chatFailed")}: ${Oe}`, "error"), z.error = Oe, z.interrupted = !!z.content.trim(), z.interrupted || (z.content = Oe), x.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), x.updatedAtLabel = new Date(x.updatedAt).toLocaleString(), await F();
        }
        z.streaming = !1, z.elapsedMs = performance.now() - te;
      } finally {
        i.value = !1, g.value = null, Xr(), await C();
      }
    };
    return pt(async () => {
      await T(), S = setInterval(() => {
        Le().catch(
          (h) => hn.warn("[LocalAI] status timer failed", h)
        );
      }, 8e3);
    }), Ee(mt, (h) => {
      h || (d.value = !1);
    }), za(() => {
      S && clearInterval(S), g.value && hs(g.value), Xr();
    }), (h, x) => (P(), H("main", ZT, [
      b("aside", XT, [
        b("header", QT, [
          b("div", JT, [
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
        b("div", e2, [
          M(c(Yf), {
            theme: "outline",
            size: "17"
          }),
          Tt(b("input", {
            "onUpdate:modelValue": x[0] || (x[0] = (O) => io(n) ? n.value = O : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, t2), [
            [Vo, c(n)]
          ])
        ]),
        b("section", n2, [
          b("div", r2, [
            b(
              "div",
              o2,
              D(c(t)("localAi.recent")),
              1
              /* TEXT */
            ),
            b("div", a2, [
              b("button", {
                class: "icon-action-btn icon-action-btn--primary",
                type: "button",
                title: c(t)("localAi.newChat"),
                onClick: we
              }, [
                M(c(Hf), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, s2),
              b("button", {
                class: "icon-action-btn",
                type: "button",
                title: c(t)("plugins.refresh"),
                onClick: T
              }, [
                M(c(Xl), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, l2)
            ])
          ]),
          c(ht).length ? (P(), H("div", i2, [
            (P(!0), H(
              gt,
              null,
              Zn(c(ht), (O) => (P(), H("div", {
                key: O.id,
                class: q([
                  "chat-list-item",
                  c(o) === O.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (z) => qe(O.id),
                onKeydown: bn(et((z) => qe(O.id), ["prevent"]), ["enter"])
              }, [
                M(c(qf), {
                  theme: "outline",
                  size: "16"
                }),
                b(
                  "span",
                  u2,
                  D(O.title),
                  1
                  /* TEXT */
                ),
                b(
                  "span",
                  d2,
                  D(oe(O.updatedAt)),
                  1
                  /* TEXT */
                ),
                b("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: et((z) => Mt(O.id), ["stop"])
                }, [
                  M(c(aa), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, f2)
              ], 42, c2))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (P(), H(
            "div",
            p2,
            D(c(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      b("section", m2, [
        b("header", h2, [
          b("div", g2, [
            b("div", v2, [
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
                  class: q([
                    "status-pill",
                    c(E)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  x[7] || (x[7] = b(
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
              b2,
              D(c(E)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          b("div", y2, [
            M(c(Kn), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: V
            }, {
              default: ue(() => [
                M(c(du), {
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
            b("div", _2, [
              b(
                "span",
                null,
                D(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(he).length ? ne("v-if", !0) : (P(), H("div", w2, [
              M(c(Ql), {
                theme: "outline",
                size: "28"
              }),
              b(
                "div",
                k2,
                D(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              b(
                "div",
                T2,
                D(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (P(!0), H(
              gt,
              null,
              Zn(c(ye), (O) => (P(), H(
                "article",
                {
                  key: O.message.id,
                  class: q(["message-row", `message-row--${O.message.role}`])
                },
                [
                  b("div", S2, [
                    O.message.role === "assistant" ? (P(), de(c(Ql), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (P(), H(
                      "span",
                      E2,
                      D(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  b("div", A2, [
                    O.message.role === "user" ? (P(), H(
                      gt,
                      { key: 0 },
                      [
                        b("div", C2, [
                          O.message.content ? (P(), H(
                            "div",
                            I2,
                            D(O.message.content),
                            1
                            /* TEXT */
                          )) : ne("v-if", !0),
                          O.message.attachments?.length ? (P(), H("div", L2, [
                            (P(!0), H(
                              gt,
                              null,
                              Zn(O.message.attachments, (z) => (P(), H(
                                "div",
                                {
                                  key: z.id,
                                  class: q([
                                    "message-attachment-chip",
                                    z.type === "image" && z.dataUrl ? "message-attachment-chip--image" : ""
                                  ])
                                },
                                [
                                  z.type === "image" && z.dataUrl ? (P(), H("figure", O2, [
                                    b("img", {
                                      src: z.dataUrl,
                                      alt: z.name
                                    }, null, 8, x2),
                                    b(
                                      "figcaption",
                                      null,
                                      D(z.name),
                                      1
                                      /* TEXT */
                                    )
                                  ])) : (P(), H(
                                    "span",
                                    R2,
                                    D(z.type === "text" ? "TXT" : "FILE"),
                                    1
                                    /* TEXT */
                                  )),
                                  z.type === "image" && z.dataUrl ? ne("v-if", !0) : (P(), H(
                                    "span",
                                    N2,
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
                          ])) : ne("v-if", !0),
                          b(
                            "time",
                            null,
                            D(Rr(O.message)),
                            1
                            /* TEXT */
                          )
                        ]),
                        O.message.streaming ? ne("v-if", !0) : (P(), H("div", P2, [
                          b("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (z) => Ne(O.message)
                          }, [
                            M(c(ql), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, $2),
                          b("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (z) => Ut(O.message)
                          }, [
                            M(c(Zl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, M2),
                          b("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (z) => Ue(O.message.id)
                          }, [
                            M(c(aa), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, D2)
                        ]))
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : (P(), H(
                      gt,
                      { key: 1 },
                      [
                        b("div", F2, [
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
                            D(mr(O.message)),
                            1
                            /* TEXT */
                          )
                        ]),
                        b(
                          "div",
                          {
                            class: q(["assistant-card", {
                              "assistant-card--streaming": O.message.streaming
                            }])
                          },
                          [
                            O.message.content ? (P(), H("div", z2, [
                              O.message.allowThinking && Wr(O.message.content) ? (P(), H("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: O.message.streaming && xr(O.message)
                              }, [
                                b("summary", null, [
                                  b("span", V2, [
                                    M(c(Kl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    nn(
                                      " " + D(An(O.message)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  O.message.streaming ? (P(), H(
                                    "small",
                                    j2,
                                    D(xr(O.message) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                    1
                                    /* TEXT */
                                  )) : ne("v-if", !0)
                                ]),
                                b("div", {
                                  class: "message-content markdown-body",
                                  onClick: fr,
                                  innerHTML: Hn(
                                    Wr(O.message.content)
                                  )
                                }, null, 8, U2)
                              ], 8, B2)) : ne("v-if", !0),
                              fn(O.message.content) ? (P(), H("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                onClick: fr,
                                innerHTML: Hn(fn(O.message.content))
                              }, null, 8, H2)) : ne("v-if", !0)
                            ])) : (P(), H(
                              "div",
                              W2,
                              D(qr(O.message)),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        O.message.content ? (P(), H("div", G2, [
                          b(
                            "span",
                            null,
                            " Context: " + D(ct(O.message).context) + "/" + D(ct(O.message).contextMax) + " (" + D(ct(O.message).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            " Output: " + D(ct(O.message).output) + "/" + D(ct(O.message).outputMax),
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            D(ct(O.message).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          b(
                            "span",
                            null,
                            D(ct(O.message).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : ne("v-if", !0),
                        Lt(O.message) ? (P(), H(
                          "div",
                          K2,
                          D(Lt(O.message)),
                          1
                          /* TEXT */
                        )) : ne("v-if", !0),
                        O.message.streaming ? ne("v-if", !0) : (P(), H("div", q2, [
                          O.siblingLeafNodeIds.length > 1 ? (P(), H("div", Y2, [
                            b("button", {
                              type: "button",
                              disabled: O.siblingCurrentIndex <= 0,
                              title: c(t)("localAi.previousVersion"),
                              onClick: (z) => tn(O, -1)
                            }, " ‹ ", 8, Z2),
                            b(
                              "span",
                              null,
                              D(O.siblingCurrentIndex + 1) + " / " + D(O.siblingLeafNodeIds.length),
                              1
                              /* TEXT */
                            ),
                            b("button", {
                              type: "button",
                              disabled: O.siblingCurrentIndex >= O.siblingLeafNodeIds.length - 1,
                              title: c(t)("localAi.nextVersion"),
                              onClick: (z) => tn(O, 1)
                            }, " › ", 8, X2)
                          ])) : ne("v-if", !0),
                          b("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (z) => Ne(O.message)
                          }, [
                            M(c(ql), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, Q2),
                          O.message.role === "assistant" ? (P(), H("button", {
                            key: 1,
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (z) => So(O.message.id)
                          }, [
                            M(c(Xl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, J2)) : ne("v-if", !0),
                          b("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: Xt
                          }, [
                            M(c(Gf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, eS),
                          b("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: Xt
                          }, [
                            M(c(Wf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, tS),
                          b("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (z) => Ut(O.message)
                          }, [
                            M(c(Zl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, nS),
                          b("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (z) => Ue(O.message.id)
                          }, [
                            M(c(aa), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, rS)
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
          M(c(Yl), {
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
        ], 8, oS)) : ne("v-if", !0),
        b(
          "form",
          {
            class: q([
              "chat-input-card",
              c(p) ? "chat-input-card--focused" : ""
            ]),
            onDragover: x[4] || (x[4] = et(() => {
            }, ["prevent"])),
            onDrop: et(Ir, ["prevent"]),
            onSubmit: et(w, ["prevent"]),
            onFocusin: x[5] || (x[5] = (O) => p.value = !0),
            onFocusout: x[6] || (x[6] = (O) => p.value = !1)
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
            c(s).length ? (P(), H("div", aS, [
              (P(!0), H(
                gt,
                null,
                Zn(c(s), (O) => (P(), H(
                  "div",
                  {
                    key: O.id,
                    class: q([
                      "attachment-preview-item",
                      `attachment-preview-item--${O.status}`
                    ])
                  },
                  [
                    O.type === "image" && O.dataUrl ? (P(), H("img", {
                      key: 0,
                      src: O.dataUrl,
                      alt: O.name
                    }, null, 8, sS)) : (P(), H(
                      "span",
                      lS,
                      D(O.type === "text" ? "TXT" : "FILE"),
                      1
                      /* TEXT */
                    )),
                    b("span", iS, [
                      b(
                        "strong",
                        null,
                        D(O.name),
                        1
                        /* TEXT */
                      ),
                      b(
                        "small",
                        null,
                        D(c(fT)(O.size)) + " · " + D(Yt(O)),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("button", {
                      type: "button",
                      title: c(t)("common.delete"),
                      onClick: (z) => dn(O.id)
                    }, [
                      M(c(aa), {
                        theme: "outline",
                        size: "12"
                      })
                    ], 8, cS)
                  ],
                  2
                  /* CLASS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : ne("v-if", !0),
            Tt(b("textarea", {
              "onUpdate:modelValue": x[1] || (x[1] = (O) => io(a) ? a.value = O : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: gr,
              onPaste: Un
            }, null, 40, uS), [
              [Vo, c(a)]
            ]),
            b("div", dS, [
              b("div", fS, [
                b("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.addAttachment"),
                  onClick: Ye
                }, [
                  M(c(Kf), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, pS),
                c(mt) ? (P(), H("button", {
                  key: 0,
                  class: q([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(d) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(d) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(d),
                  onClick: x[2] || (x[2] = (O) => d.value = !c(d))
                }, [
                  M(c(Kl), {
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
                ], 10, mS)) : ne("v-if", !0),
                b("label", hS, [
                  Tt(b("select", {
                    "onUpdate:modelValue": x[3] || (x[3] = (O) => io(f) ? f.value = O : null),
                    disabled: c(i) || !c(Ge).length,
                    onChange: En
                  }, [
                    (P(!0), H(
                      gt,
                      null,
                      Zn(c(Ge), (O) => (P(), H("option", {
                        key: O,
                        value: O
                      }, D(J(O)), 9, vS))),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    c(Ge).length ? ne("v-if", !0) : (P(), H(
                      "option",
                      bS,
                      D(c(Ae)),
                      1
                      /* TEXT */
                    ))
                  ], 40, gS), [
                    [zf, c(f)]
                  ]),
                  M(c(Yl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              b("div", yS, [
                x[8] || (x[8] = b(
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
                  onClick: Qr
                }, [
                  M(c(Xf), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, _S)) : (P(), H("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(G),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  M(c(Zf), {
                    theme: "outline",
                    size: "15"
                  })
                ], 8, wS))
              ])
            ])
          ],
          34
          /* CLASS, NEED_HYDRATION */
        )
      ])
    ]));
  }
}), ES = /* @__PURE__ */ fl(SS, [["__scopeId", "data-v-eeb684ce"]]), AS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ES
}, Symbol.toStringTag, { value: "Module" }));
async function su(e = {}) {
  return typeof e == "object" && Object.freeze(e), await $t("plugin:dialog|open", { options: e });
}
const CS = { class: "settings-panel local-ai-settings-shell" }, IS = { class: "local-ai-hero panel-card" }, LS = { class: "panel-title" }, OS = { class: "hero-desc" }, xS = { class: "header-actions" }, RS = {
  key: 0,
  class: "settings-grid"
}, NS = { class: "summary-panel panel-card" }, PS = { class: "status-strip" }, $S = { class: "memory-card" }, MS = { class: "memory-card__header" }, DS = { class: "memory-metrics" }, FS = { class: "bottleneck-row" }, zS = { class: "summary-card" }, BS = { class: "summary-card__title" }, VS = { class: "summary-card__desc" }, jS = { class: "service-controls" }, US = { class: "service-url" }, HS = { class: "summary-card" }, WS = { class: "summary-card__title" }, GS = { class: "summary-card__desc" }, KS = { class: "summary-meta" }, qS = { class: "form-panel panel-card" }, YS = { class: "settings-section" }, ZS = { class: "settings-section__header" }, XS = { class: "field-stack" }, QS = ["title"], JS = { class: "path-control" }, eE = ["title"], tE = ["title"], nE = ["title"], rE = { class: "path-control" }, oE = ["placeholder"], aE = { class: "settings-section grid-two" }, sE = { class: "settings-section__header" }, lE = { class: "param-grid" }, iE = ["title"], cE = ["title"], uE = ["title"], dE = ["title"], fE = ["title"], pE = ["title"], mE = { class: "settings-section grid-two" }, hE = { class: "settings-section__header" }, gE = { class: "switch-grid" }, vE = ["title"], bE = ["title"], yE = ["title"], _E = { class: "settings-section grid-two" }, wE = { class: "settings-section__header" }, kE = { class: "switch-grid switch-grid--two" }, TE = ["title"], SE = ["title"], EE = ["title"], AE = ["title"], CE = { class: "settings-section grid-two" }, IE = { class: "settings-section__header" }, LE = { class: "param-grid param-grid--three" }, OE = ["title"], xE = ["title"], RE = ["title"], NE = ["title"], PE = ["title"], $E = ["title"], ME = ["title"], DE = ["title"], FE = { class: "settings-footer" }, zE = ["title"], BE = /* @__PURE__ */ le({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Xo(), n = W(null), r = W(null), o = W(null), a = W(null), s = W(!1), i = W(!1), l = W(!1), u = W(!1), d = W(!1);
    let p = null;
    const m = R(() => !!a.value?.selectedModelPath), y = R(() => !!n.value?.mmprojPath), g = R({
      get: () => n.value?.modelPath ?? "",
      set: (K) => {
        n.value && (n.value.modelPath = K || void 0);
      }
    }), v = R({
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
      const G = Math.max(1.4, A.value * 0.92), De = Math.min(1, Math.max(0, K.gpuLayers) / 32), me = K.ctxSize / 8192 * 0.38 * (K.kvOffload ? 1 : 0.12), he = K.batchSize / 512 * 0.18, ye = G * De + me + he, J = G * (1 - De) + K.ctxSize / 8192 * 0.22, Ae = ye + J, Ge = K.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : K.ctxSize >= 32768 || K.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: ye.toFixed(2),
        totalGb: Ae.toFixed(2),
        bottleneck: Ge
      };
    }), S = (K) => t(`localAi.paramHints.${K}`), L = async () => {
      r.value = await Qk();
    }, Y = async () => {
      o.value = await mf();
    }, Z = async () => {
      n.value && (a.value = await pf(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, ae = async () => {
      s.value = !0;
      try {
        n.value = await ff(), await Promise.all([L(), Z(), Y()]);
      } catch (K) {
        hn.error("[LocalAI] refresh settings failed", K), ot.msg(`${t("localAi.refreshFailed")}: ${K}`, "error");
      } finally {
        s.value = !1;
      }
    }, fe = async () => {
      if (n.value)
        try {
          await Ta(n.value);
        } catch (K) {
          hn.warn("[LocalAI] autosave failed", K);
        }
    }, se = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Ta(n.value), await Promise.all([L(), Z(), Y()]), ot.msg(t("localAi.configSaved"));
        } catch (K) {
          ot.msg(`${t("localAi.configSaveFailed")}: ${K}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, _e = async () => {
      const K = await su({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !K || Array.isArray(K) || !n.value || (n.value.modelDir = K, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await Z());
    }, be = async () => {
      const K = await su({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !K || Array.isArray(K) || !n.value || (n.value.runtimePath = K, await fe(), await L());
    }, j = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Ta(n.value), o.value = await Jk(n.value), ot.msg(t("localAi.serviceStarted"));
        } catch (K) {
          ot.msg(`${t("localAi.serviceStartFailed")}: ${K}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, Q = async () => {
      u.value = !0;
      try {
        await se(), o.value = await hf(), ot.msg(t("localAi.serviceRestarted"));
      } catch (K) {
        ot.msg(`${t("localAi.serviceRestartFailed")}: ${K}`, "error");
      } finally {
        u.value = !1;
      }
    }, U = async () => {
      d.value = !0;
      try {
        await eT(), await Y(), ot.msg(t("localAi.serviceStoppedMsg"));
      } catch (K) {
        ot.msg(`${t("localAi.serviceStopFailed")}: ${K}`, "error");
      } finally {
        d.value = !1;
      }
    }, pe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return pt(async () => {
      await ae(), p = setInterval(() => {
        Y().catch(
          (K) => hn.warn("[LocalAI] status refresh failed", K)
        );
      }, 5e3);
    }), za(() => {
      p && clearInterval(p);
    }), (K, G) => {
      const De = fk, me = dk, he = Yw, ye = yk;
      return P(), H("div", CS, [
        b("header", IS, [
          b("div", null, [
            b(
              "h3",
              LS,
              D(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              OS,
              D(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", xS, [
            M(c(Kn), {
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
            M(c(Kn), {
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
        c(n) ? (P(), H("main", RS, [
          b("aside", NS, [
            b("div", PS, [
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
            b("section", $S, [
              b("div", MS, [
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
              b("div", DS, [
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
              b("div", FS, [
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
            b("section", zS, [
              b(
                "div",
                BS,
                D(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                VS,
                D(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", jS, [
                M(c(Kn), {
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
                M(c(Kn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: Q
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
                M(c(Kn), {
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
                US,
                D(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", HS, [
              b(
                "div",
                WS,
                D(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                GS,
                D(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", KS, [
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
          b("section", qS, [
            b("div", YS, [
              b("div", ZS, [
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
              b("div", XS, [
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
                  b("div", JS, [
                    Tt(b(
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
                      [Vo, c(n).modelDir]
                    ]),
                    M(c(Kn), {
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
                ], 8, QS),
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
                    modelValue: c(g),
                    "onUpdate:modelValue": G[1] || (G[1] = (J) => io(g) ? g.value = J : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: ue(() => [
                      (P(!0), H(
                        gt,
                        null,
                        Zn(c(a)?.mainModels ?? [], (J) => (P(), de(De, {
                          key: J,
                          label: N(J),
                          value: J
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, eE),
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
                    modelValue: c(v),
                    "onUpdate:modelValue": G[2] || (G[2] = (J) => io(v) ? v.value = J : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: ue(() => [
                      (P(!0), H(
                        gt,
                        null,
                        Zn(c(a)?.mmprojModels ?? [], (J) => (P(), de(De, {
                          key: J,
                          label: N(J),
                          value: J
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, tE),
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
                  b("div", rE, [
                    Tt(b("input", {
                      "onUpdate:modelValue": G[3] || (G[3] = (J) => c(n).runtimePath = J),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, oE), [
                      [Vo, c(n).runtimePath]
                    ]),
                    M(c(Kn), {
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
                ], 8, nE)
              ])
            ]),
            b("div", aE, [
              b("div", sE, [
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
              b("div", lE, [
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
                    "onUpdate:modelValue": G[4] || (G[4] = (J) => c(n).ctxSize = J),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, iE),
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
                    "onUpdate:modelValue": G[5] || (G[5] = (J) => c(n).gpuLayers = J),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, cE),
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
                    "onUpdate:modelValue": G[6] || (G[6] = (J) => c(n).threads = J),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, uE),
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
                    "onUpdate:modelValue": G[7] || (G[7] = (J) => c(n).batchSize = J),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, dE),
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
                    "onUpdate:modelValue": G[8] || (G[8] = (J) => c(n).ubatchSize = J),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, fE),
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
                    "onUpdate:modelValue": G[9] || (G[9] = (J) => c(n).mainGpu = J),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, pE)
              ])
            ]),
            b("div", mE, [
              b("div", hE, [
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
              b("div", gE, [
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
                    "onUpdate:modelValue": G[10] || (G[10] = (J) => c(n).flashAttn = J)
                  }, null, 8, ["modelValue"])
                ], 8, vE),
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
                    "onUpdate:modelValue": G[11] || (G[11] = (J) => c(n).kvOffload = J)
                  }, null, 8, ["modelValue"])
                ], 8, bE),
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
                    "onUpdate:modelValue": G[12] || (G[12] = (J) => c(n).mmap = J)
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
              b("div", kE, [
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
                    "onUpdate:modelValue": G[13] || (G[13] = (J) => c(n).autoStartOnRequest = J)
                  }, null, 8, ["modelValue"])
                ], 8, TE),
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
                    "onUpdate:modelValue": G[14] || (G[14] = (J) => c(n).keepAlive = J)
                  }, null, 8, ["modelValue"])
                ], 8, SE),
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
                    "onUpdate:modelValue": G[15] || (G[15] = (J) => c(n).idleTimeoutMinutes = J),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, EE),
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
                    "onUpdate:modelValue": G[16] || (G[16] = (J) => c(n).requestTimeoutSecs = J),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AE)
              ])
            ]),
            b("div", CE, [
              b("div", IE, [
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
              b("div", LE, [
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
                    "onUpdate:modelValue": G[17] || (G[17] = (J) => c(n).temperature = J),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, OE),
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
                    "onUpdate:modelValue": G[18] || (G[18] = (J) => c(n).topP = J),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, xE),
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
                    "onUpdate:modelValue": G[19] || (G[19] = (J) => c(n).topK = J),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, RE),
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
                    "onUpdate:modelValue": G[20] || (G[20] = (J) => c(n).minP = J),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, NE),
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
                    "onUpdate:modelValue": G[21] || (G[21] = (J) => c(n).repeatPenalty = J),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, PE),
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
                    "onUpdate:modelValue": G[22] || (G[22] = (J) => c(n).repeatLastN = J),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, $E),
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
                    "onUpdate:modelValue": G[23] || (G[23] = (J) => c(n).maxTokens = J),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, ME),
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
                    "onUpdate:modelValue": G[24] || (G[24] = (J) => c(n).port = J),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, DE)
              ])
            ]),
            b("div", FE, [
              M(c(Kn), {
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
              }, D(c(o).commandLine), 9, zE)) : ne("v-if", !0)
            ])
          ])
        ])) : ne("v-if", !0)
      ]);
    };
  }
}), VE = /* @__PURE__ */ fl(BE, [["__scopeId", "data-v-c43741fb"]]), jE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VE
}, Symbol.toStringTag, { value: "Module" }));
export {
  WE as activate,
  WE as default
};
