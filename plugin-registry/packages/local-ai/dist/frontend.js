var Tf = Object.defineProperty;
var Sf = (e, t, n) => t in e ? Tf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ze = (e, t, n) => Sf(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Me, createVNode as k, defineAsyncComponent as Af, getCurrentInstance as Et, ref as N, computed as A, unref as l, readonly as Ba, getCurrentScope as Cf, onScopeDispose as qc, shallowRef as uo, watchEffect as Fa, onMounted as nt, nextTick as Ke, watch as he, isRef as en, warn as Ef, provide as yn, defineComponent as se, createElementBlock as D, openBlock as S, mergeProps as Ao, renderSlot as ce, createElementVNode as f, toRef as qn, onUnmounted as ja, useAttrs as xf, useSlots as Kc, normalizeStyle as ht, normalizeClass as z, createCommentVNode as Q, Fragment as at, createBlock as re, withCtx as ee, resolveDynamicComponent as tn, withModifiers as qe, toDisplayString as E, onBeforeUnmount as _n, Transition as Oo, withDirectives as lt, vShow as Mn, reactive as Co, onActivated as Lf, onUpdated as Zc, cloneVNode as If, Text as Of, Comment as $f, Teleport as Rf, onBeforeMount as Mf, onDeactivated as Pf, createTextVNode as pt, h as Nf, createSlots as Va, withKeys as xn, toRaw as Df, toRefs as Ha, resolveComponent as _o, resolveDirective as zf, toHandlerKey as Bf, renderList as En, vModelText as Ms, shallowReactive as Ff, isVNode as Ps, render as gr } from "vue";
import { useI18n as js } from "vue-i18n";
var jf = {
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
function Hf(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), s.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: s,
    id: e
  };
}
var Wf = Symbol("icon-context");
function Ze(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var r = Vf(), i = Me(Wf, jf);
      return function() {
        var c = a.size, u = a.strokeWidth, d = a.strokeLinecap, h = a.strokeLinejoin, g = a.theme, w = a.fill, m = a.spin, b = Hf(r, {
          size: c,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: h,
          theme: g,
          fill: w
        }, i), C = [i.prefix + "-icon"];
        return C.push(i.prefix + "-icon-" + e), t && i.rtl && C.push(i.prefix + "-icon-rtl"), m && C.push(i.prefix + "-icon-spin"), k("span", {
          class: C.join(" ")
        }, [n(b)]);
      };
    }
  };
  return o;
}
const Ql = Ze("brain", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), Uf = Ze("check-small", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M10 24L20 34L40 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gf = Ze("code", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M16 13L4 25.4322L16 37",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M32 13L44 25.4322L32 37",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M28 4L21 44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), Jl = Ze("copy", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ei = Ze("cube", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M41 14L24 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M7 14L24 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 44V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M32 19L32 39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M41 24L24 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 34L7 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M16 39L16 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M32 9L16 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M32 19L16 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fs = Ze("delete", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qf = Ze("down", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qr = Ze("edit", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Kf = Ze("file-text", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M30 4L40 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 22V36",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M18 22H24L30 22",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zf = Ze("fork", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M37 12C39.2091 12 41 10.2091 41 8C41 5.79086 39.2091 4 37 4C34.7909 4 33 5.79086 33 8C33 10.2091 34.7909 12 37 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M11 12V15C11 22 24 25 24 32V36V32C24 25 37 22 37 15V12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ti = Ze("left-bar", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M16 6V42",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M13 42H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M13 6H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Yf = Ze("link", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ni = Ze("magic-wand", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M7.57932 35.4207C5.32303 32.1826 4 28.2458 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C19.7542 44 15.8174 42.677 12.5793 40.4207M7.57932 35.4207C8.93657 37.3685 10.6315 39.0634 12.5793 40.4207M7.57932 35.4207L16 27M12.5793 40.4207L21 32M16 27L20 23L25 28L21 32M16 27L21 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M17 14H21M19 12V16",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M28 17H34M31 14V20",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M32 29H36M34 27V31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xf = Ze("picture", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ps = Ze("refresh", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oi = Ze("right", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jr = Ze("robot", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), k("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), k("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), k("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qf = Ze("robot-one", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("rect", {
    x: "9",
    y: "18",
    width: "30",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), k("circle", {
    cx: "17",
    cy: "26",
    r: "2",
    fill: e.colors[2]
  }, null), k("circle", {
    cx: "31",
    cy: "26",
    r: "2",
    fill: e.colors[2]
  }, null), k("path", {
    d: "M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z",
    fill: e.colors[2]
  }, null), k("path", {
    d: "M24 10V18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M4 26V34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M44 26V34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("circle", {
    cx: "24",
    cy: "8",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Jf = Ze("search", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ep = Ze("send", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Yc = Ze("setting-two", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), tp = Ze("square", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), np = Ze("translate", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ZA = (e) => {
  e.registerRoute({
    target: "config",
    path: "local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => YS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Yc,
    component: Af(() => Promise.resolve().then(() => UA))
  });
}, Xc = Symbol(), Cs = "el", op = "is-", ko = (e, t, n, o, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), s && (a += `--${s}`), a;
}, Qc = Symbol("namespaceContextKey"), Wa = (e) => {
  const t = e || (Et() ? Me(Qc, N(Cs)) : N(Cs));
  return A(() => l(t) || Cs);
}, Qe = (e, t) => {
  const n = Wa(t);
  return {
    namespace: n,
    b: (b = "") => ko(n.value, e, b, "", ""),
    e: (b) => b ? ko(n.value, e, "", b, "") : "",
    m: (b) => b ? ko(n.value, e, "", "", b) : "",
    be: (b, C) => b && C ? ko(n.value, e, b, C, "") : "",
    em: (b, C) => b && C ? ko(n.value, e, "", b, C) : "",
    bm: (b, C) => b && C ? ko(n.value, e, b, "", C) : "",
    bem: (b, C, _) => b && C && _ ? ko(n.value, e, b, C, _) : "",
    is: (b, ...C) => {
      const _ = C.length >= 1 ? C[0] : !0;
      return b && _ ? `${op}${b}` : "";
    },
    cssVar: (b) => {
      const C = {};
      for (const _ in b)
        b[_] && (C[`--${n.value}-${_}`] = b[_]);
      return C;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const C = {};
      for (const _ in b)
        b[_] && (C[`--${n.value}-${e}-${_}`] = b[_]);
      return C;
    },
    cssVarBlockName: (b) => `--${n.value}-${e}-${b}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fo = () => {
}, sp = Object.prototype.hasOwnProperty, si = (e, t) => sp.call(e, t), In = Array.isArray, tt = (e) => typeof e == "function", qt = (e) => typeof e == "string", nn = (e) => e !== null && typeof e == "object", rp = Object.prototype.toString, ap = (e) => rp.call(e), lp = (e) => ap(e) === "[object Object]", ip = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, cp = /-(\w)/g, up = ip(
  (e) => e.replace(cp, (t, n) => n ? n.toUpperCase() : "")
);
var Jc = typeof global == "object" && global && global.Object === Object && global, dp = typeof self == "object" && self && self.Object === Object && self, Dn = Jc || dp || Function("return this")(), Pn = Dn.Symbol, eu = Object.prototype, fp = eu.hasOwnProperty, pp = eu.toString, hs = Pn ? Pn.toStringTag : void 0;
function hp(e) {
  var t = fp.call(e, hs), n = e[hs];
  try {
    e[hs] = void 0;
    var o = !0;
  } catch {
  }
  var s = pp.call(e);
  return o && (t ? e[hs] = n : delete e[hs]), s;
}
var mp = Object.prototype, gp = mp.toString;
function vp(e) {
  return gp.call(e);
}
var bp = "[object Null]", yp = "[object Undefined]", ri = Pn ? Pn.toStringTag : void 0;
function cs(e) {
  return e == null ? e === void 0 ? yp : bp : ri && ri in Object(e) ? hp(e) : vp(e);
}
function Qo(e) {
  return e != null && typeof e == "object";
}
var wp = "[object Symbol]";
function Or(e) {
  return typeof e == "symbol" || Qo(e) && cs(e) == wp;
}
function _p(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var wn = Array.isArray, ai = Pn ? Pn.prototype : void 0, li = ai ? ai.toString : void 0;
function tu(e) {
  if (typeof e == "string")
    return e;
  if (wn(e))
    return _p(e, tu) + "";
  if (Or(e))
    return li ? li.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var kp = /\s/;
function Tp(e) {
  for (var t = e.length; t-- && kp.test(e.charAt(t)); )
    ;
  return t;
}
var Sp = /^\s+/;
function Ap(e) {
  return e && e.slice(0, Tp(e) + 1).replace(Sp, "");
}
function po(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ii = NaN, Cp = /^[-+]0x[0-9a-f]+$/i, Ep = /^0b[01]+$/i, xp = /^0o[0-7]+$/i, Lp = parseInt;
function ci(e) {
  if (typeof e == "number")
    return e;
  if (Or(e))
    return ii;
  if (po(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = po(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ap(e);
  var n = Ep.test(e);
  return n || xp.test(e) ? Lp(e.slice(2), n ? 2 : 8) : Cp.test(e) ? ii : +e;
}
function nu(e) {
  return e;
}
var Ip = "[object AsyncFunction]", Op = "[object Function]", $p = "[object GeneratorFunction]", Rp = "[object Proxy]";
function ou(e) {
  if (!po(e))
    return !1;
  var t = cs(e);
  return t == Op || t == $p || t == Ip || t == Rp;
}
var ea = Dn["__core-js_shared__"], ui = function() {
  var e = /[^.]+$/.exec(ea && ea.keys && ea.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Mp(e) {
  return !!ui && ui in e;
}
var Pp = Function.prototype, Np = Pp.toString;
function $o(e) {
  if (e != null) {
    try {
      return Np.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Dp = /[\\^$.*+?()[\]{}|]/g, zp = /^\[object .+?Constructor\]$/, Bp = Function.prototype, Fp = Object.prototype, jp = Bp.toString, Vp = Fp.hasOwnProperty, Hp = RegExp(
  "^" + jp.call(Vp).replace(Dp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wp(e) {
  if (!po(e) || Mp(e))
    return !1;
  var t = ou(e) ? Hp : zp;
  return t.test($o(e));
}
function Up(e, t) {
  return e?.[t];
}
function Ro(e, t) {
  var n = Up(e, t);
  return Wp(n) ? n : void 0;
}
var ya = Ro(Dn, "WeakMap");
function Gp(e, t, n) {
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
var qp = 800, Kp = 16, Zp = Date.now;
function Yp(e) {
  var t = 0, n = 0;
  return function() {
    var o = Zp(), s = Kp - (o - n);
    if (n = o, s > 0) {
      if (++t >= qp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Xp(e) {
  return function() {
    return e;
  };
}
var vr = function() {
  try {
    var e = Ro(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Qp = vr ? function(e, t) {
  return vr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xp(t),
    writable: !0
  });
} : nu, Jp = Yp(Qp);
function eh(e, t, n, o) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var th = 9007199254740991, nh = /^(?:0|[1-9]\d*)$/;
function Ua(e, t) {
  var n = typeof e;
  return t = t ?? th, !!t && (n == "number" || n != "symbol" && nh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function oh(e, t, n) {
  t == "__proto__" && vr ? vr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ga(e, t) {
  return e === t || e !== e && t !== t;
}
var sh = Object.prototype, rh = sh.hasOwnProperty;
function ah(e, t, n) {
  var o = e[t];
  (!(rh.call(e, t) && Ga(o, n)) || n === void 0 && !(t in e)) && oh(e, t, n);
}
var di = Math.max;
function lh(e, t, n) {
  return t = di(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, a = di(o.length - t, 0), r = Array(a); ++s < a; )
      r[s] = o[t + s];
    s = -1;
    for (var i = Array(t + 1); ++s < t; )
      i[s] = o[s];
    return i[t] = n(r), Gp(e, this, i);
  };
}
var ih = 9007199254740991;
function qa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ih;
}
function ch(e) {
  return e != null && qa(e.length) && !ou(e);
}
var uh = Object.prototype;
function dh(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || uh;
  return e === n;
}
function fh(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var ph = "[object Arguments]";
function fi(e) {
  return Qo(e) && cs(e) == ph;
}
var su = Object.prototype, hh = su.hasOwnProperty, mh = su.propertyIsEnumerable, Ka = fi(/* @__PURE__ */ function() {
  return arguments;
}()) ? fi : function(e) {
  return Qo(e) && hh.call(e, "callee") && !mh.call(e, "callee");
};
function gh() {
  return !1;
}
var ru = typeof exports == "object" && exports && !exports.nodeType && exports, pi = ru && typeof module == "object" && module && !module.nodeType && module, vh = pi && pi.exports === ru, hi = vh ? Dn.Buffer : void 0, bh = hi ? hi.isBuffer : void 0, wa = bh || gh, yh = "[object Arguments]", wh = "[object Array]", _h = "[object Boolean]", kh = "[object Date]", Th = "[object Error]", Sh = "[object Function]", Ah = "[object Map]", Ch = "[object Number]", Eh = "[object Object]", xh = "[object RegExp]", Lh = "[object Set]", Ih = "[object String]", Oh = "[object WeakMap]", $h = "[object ArrayBuffer]", Rh = "[object DataView]", Mh = "[object Float32Array]", Ph = "[object Float64Array]", Nh = "[object Int8Array]", Dh = "[object Int16Array]", zh = "[object Int32Array]", Bh = "[object Uint8Array]", Fh = "[object Uint8ClampedArray]", jh = "[object Uint16Array]", Vh = "[object Uint32Array]", Ve = {};
Ve[Mh] = Ve[Ph] = Ve[Nh] = Ve[Dh] = Ve[zh] = Ve[Bh] = Ve[Fh] = Ve[jh] = Ve[Vh] = !0;
Ve[yh] = Ve[wh] = Ve[$h] = Ve[_h] = Ve[Rh] = Ve[kh] = Ve[Th] = Ve[Sh] = Ve[Ah] = Ve[Ch] = Ve[Eh] = Ve[xh] = Ve[Lh] = Ve[Ih] = Ve[Oh] = !1;
function Hh(e) {
  return Qo(e) && qa(e.length) && !!Ve[cs(e)];
}
function Wh(e) {
  return function(t) {
    return e(t);
  };
}
var au = typeof exports == "object" && exports && !exports.nodeType && exports, Es = au && typeof module == "object" && module && !module.nodeType && module, Uh = Es && Es.exports === au, ta = Uh && Jc.process, mi = function() {
  try {
    var e = Es && Es.require && Es.require("util").types;
    return e || ta && ta.binding && ta.binding("util");
  } catch {
  }
}(), gi = mi && mi.isTypedArray, lu = gi ? Wh(gi) : Hh, Gh = Object.prototype, qh = Gh.hasOwnProperty;
function Kh(e, t) {
  var n = wn(e), o = !n && Ka(e), s = !n && !o && wa(e), a = !n && !o && !s && lu(e), r = n || o || s || a, i = r ? fh(e.length, String) : [], c = i.length;
  for (var u in e)
    qh.call(e, u) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ua(u, c))) && i.push(u);
  return i;
}
function Zh(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Yh = Zh(Object.keys, Object), Xh = Object.prototype, Qh = Xh.hasOwnProperty;
function Jh(e) {
  if (!dh(e))
    return Yh(e);
  var t = [];
  for (var n in Object(e))
    Qh.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function iu(e) {
  return ch(e) ? Kh(e) : Jh(e);
}
var em = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tm = /^\w*$/;
function Za(e, t) {
  if (wn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Or(e) ? !0 : tm.test(e) || !em.test(e) || t != null && e in Object(t);
}
var Ns = Ro(Object, "create");
function nm() {
  this.__data__ = Ns ? Ns(null) : {}, this.size = 0;
}
function om(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sm = "__lodash_hash_undefined__", rm = Object.prototype, am = rm.hasOwnProperty;
function lm(e) {
  var t = this.__data__;
  if (Ns) {
    var n = t[e];
    return n === sm ? void 0 : n;
  }
  return am.call(t, e) ? t[e] : void 0;
}
var im = Object.prototype, cm = im.hasOwnProperty;
function um(e) {
  var t = this.__data__;
  return Ns ? t[e] !== void 0 : cm.call(t, e);
}
var dm = "__lodash_hash_undefined__";
function fm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ns && t === void 0 ? dm : t, this;
}
function Eo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Eo.prototype.clear = nm;
Eo.prototype.delete = om;
Eo.prototype.get = lm;
Eo.prototype.has = um;
Eo.prototype.set = fm;
function pm() {
  this.__data__ = [], this.size = 0;
}
function $r(e, t) {
  for (var n = e.length; n--; )
    if (Ga(e[n][0], t))
      return n;
  return -1;
}
var hm = Array.prototype, mm = hm.splice;
function gm(e) {
  var t = this.__data__, n = $r(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : mm.call(t, n, 1), --this.size, !0;
}
function vm(e) {
  var t = this.__data__, n = $r(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bm(e) {
  return $r(this.__data__, e) > -1;
}
function ym(e, t) {
  var n = this.__data__, o = $r(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Qn.prototype.clear = pm;
Qn.prototype.delete = gm;
Qn.prototype.get = vm;
Qn.prototype.has = bm;
Qn.prototype.set = ym;
var Ds = Ro(Dn, "Map");
function wm() {
  this.size = 0, this.__data__ = {
    hash: new Eo(),
    map: new (Ds || Qn)(),
    string: new Eo()
  };
}
function _m(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Rr(e, t) {
  var n = e.__data__;
  return _m(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function km(e) {
  var t = Rr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Tm(e) {
  return Rr(this, e).get(e);
}
function Sm(e) {
  return Rr(this, e).has(e);
}
function Am(e, t) {
  var n = Rr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Jn.prototype.clear = wm;
Jn.prototype.delete = km;
Jn.prototype.get = Tm;
Jn.prototype.has = Sm;
Jn.prototype.set = Am;
var Cm = "Expected a function";
function Ya(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Cm);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var r = e.apply(this, o);
    return n.cache = a.set(s, r) || a, r;
  };
  return n.cache = new (Ya.Cache || Jn)(), n;
}
Ya.Cache = Jn;
var Em = 500;
function xm(e) {
  var t = Ya(e, function(o) {
    return n.size === Em && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Lm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Im = /\\(\\)?/g, Om = xm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lm, function(n, o, s, a) {
    t.push(s ? a.replace(Im, "$1") : o || n);
  }), t;
});
function $m(e) {
  return e == null ? "" : tu(e);
}
function Mr(e, t) {
  return wn(e) ? e : Za(e, t) ? [e] : Om($m(e));
}
function Vs(e) {
  if (typeof e == "string" || Or(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Xa(e, t) {
  t = Mr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Vs(t[n++])];
  return n && n == o ? e : void 0;
}
function co(e, t, n) {
  var o = e == null ? void 0 : Xa(e, t);
  return o === void 0 ? n : o;
}
function cu(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; )
    e[s + n] = t[n];
  return e;
}
var vi = Pn ? Pn.isConcatSpreadable : void 0;
function Rm(e) {
  return wn(e) || Ka(e) || !!(vi && e && e[vi]);
}
function Mm(e, t, n, o, s) {
  var a = -1, r = e.length;
  for (n || (n = Rm), s || (s = []); ++a < r; ) {
    var i = e[a];
    n(i) ? cu(s, i) : s[s.length] = i;
  }
  return s;
}
function Pm(e) {
  var t = e == null ? 0 : e.length;
  return t ? Mm(e) : [];
}
function Nm(e) {
  return Jp(lh(e, void 0, Pm), e + "");
}
function io() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return wn(e) ? e : [e];
}
function Dm() {
  this.__data__ = new Qn(), this.size = 0;
}
function zm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Bm(e) {
  return this.__data__.get(e);
}
function Fm(e) {
  return this.__data__.has(e);
}
var jm = 200;
function Vm(e, t) {
  var n = this.__data__;
  if (n instanceof Qn) {
    var o = n.__data__;
    if (!Ds || o.length < jm - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Jn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zn(e) {
  var t = this.__data__ = new Qn(e);
  this.size = t.size;
}
Zn.prototype.clear = Dm;
Zn.prototype.delete = zm;
Zn.prototype.get = Bm;
Zn.prototype.has = Fm;
Zn.prototype.set = Vm;
function Hm(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = 0, a = []; ++n < o; ) {
    var r = e[n];
    t(r, n, e) && (a[s++] = r);
  }
  return a;
}
function Wm() {
  return [];
}
var Um = Object.prototype, Gm = Um.propertyIsEnumerable, bi = Object.getOwnPropertySymbols, qm = bi ? function(e) {
  return e == null ? [] : (e = Object(e), Hm(bi(e), function(t) {
    return Gm.call(e, t);
  }));
} : Wm;
function Km(e, t, n) {
  var o = t(e);
  return wn(e) ? o : cu(o, n(e));
}
function yi(e) {
  return Km(e, iu, qm);
}
var _a = Ro(Dn, "DataView"), ka = Ro(Dn, "Promise"), Ta = Ro(Dn, "Set"), wi = "[object Map]", Zm = "[object Object]", _i = "[object Promise]", ki = "[object Set]", Ti = "[object WeakMap]", Si = "[object DataView]", Ym = $o(_a), Xm = $o(Ds), Qm = $o(ka), Jm = $o(Ta), eg = $o(ya), ao = cs;
(_a && ao(new _a(new ArrayBuffer(1))) != Si || Ds && ao(new Ds()) != wi || ka && ao(ka.resolve()) != _i || Ta && ao(new Ta()) != ki || ya && ao(new ya()) != Ti) && (ao = function(e) {
  var t = cs(e), n = t == Zm ? e.constructor : void 0, o = n ? $o(n) : "";
  if (o)
    switch (o) {
      case Ym:
        return Si;
      case Xm:
        return wi;
      case Qm:
        return _i;
      case Jm:
        return ki;
      case eg:
        return Ti;
    }
  return t;
});
var Ai = Dn.Uint8Array, tg = "__lodash_hash_undefined__";
function ng(e) {
  return this.__data__.set(e, tg), this;
}
function og(e) {
  return this.__data__.has(e);
}
function br(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Jn(); ++t < n; )
    this.add(e[t]);
}
br.prototype.add = br.prototype.push = ng;
br.prototype.has = og;
function sg(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function rg(e, t) {
  return e.has(t);
}
var ag = 1, lg = 2;
function uu(e, t, n, o, s, a) {
  var r = n & ag, i = e.length, c = t.length;
  if (i != c && !(r && c > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var h = -1, g = !0, w = n & lg ? new br() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < i; ) {
    var m = e[h], b = t[h];
    if (o)
      var C = r ? o(b, m, h, t, e, a) : o(m, b, h, e, t, a);
    if (C !== void 0) {
      if (C)
        continue;
      g = !1;
      break;
    }
    if (w) {
      if (!sg(t, function(_, M) {
        if (!rg(w, M) && (m === _ || s(m, _, n, o, a)))
          return w.push(M);
      })) {
        g = !1;
        break;
      }
    } else if (!(m === b || s(m, b, n, o, a))) {
      g = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), g;
}
function ig(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, s) {
    n[++t] = [s, o];
  }), n;
}
function cg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var ug = 1, dg = 2, fg = "[object Boolean]", pg = "[object Date]", hg = "[object Error]", mg = "[object Map]", gg = "[object Number]", vg = "[object RegExp]", bg = "[object Set]", yg = "[object String]", wg = "[object Symbol]", _g = "[object ArrayBuffer]", kg = "[object DataView]", Ci = Pn ? Pn.prototype : void 0, na = Ci ? Ci.valueOf : void 0;
function Tg(e, t, n, o, s, a, r) {
  switch (n) {
    case kg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _g:
      return !(e.byteLength != t.byteLength || !a(new Ai(e), new Ai(t)));
    case fg:
    case pg:
    case gg:
      return Ga(+e, +t);
    case hg:
      return e.name == t.name && e.message == t.message;
    case vg:
    case yg:
      return e == t + "";
    case mg:
      var i = ig;
    case bg:
      var c = o & ug;
      if (i || (i = cg), e.size != t.size && !c)
        return !1;
      var u = r.get(e);
      if (u)
        return u == t;
      o |= dg, r.set(e, t);
      var d = uu(i(e), i(t), o, s, a, r);
      return r.delete(e), d;
    case wg:
      if (na)
        return na.call(e) == na.call(t);
  }
  return !1;
}
var Sg = 1, Ag = Object.prototype, Cg = Ag.hasOwnProperty;
function Eg(e, t, n, o, s, a) {
  var r = n & Sg, i = yi(e), c = i.length, u = yi(t), d = u.length;
  if (c != d && !r)
    return !1;
  for (var h = c; h--; ) {
    var g = i[h];
    if (!(r ? g in t : Cg.call(t, g)))
      return !1;
  }
  var w = a.get(e), m = a.get(t);
  if (w && m)
    return w == t && m == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var C = r; ++h < c; ) {
    g = i[h];
    var _ = e[g], M = t[g];
    if (o)
      var V = r ? o(M, _, g, t, e, a) : o(_, M, g, e, t, a);
    if (!(V === void 0 ? _ === M || s(_, M, n, o, a) : V)) {
      b = !1;
      break;
    }
    C || (C = g == "constructor");
  }
  if (b && !C) {
    var L = e.constructor, I = t.constructor;
    L != I && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof I == "function" && I instanceof I) && (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var xg = 1, Ei = "[object Arguments]", xi = "[object Array]", Js = "[object Object]", Lg = Object.prototype, Li = Lg.hasOwnProperty;
function Ig(e, t, n, o, s, a) {
  var r = wn(e), i = wn(t), c = r ? xi : ao(e), u = i ? xi : ao(t);
  c = c == Ei ? Js : c, u = u == Ei ? Js : u;
  var d = c == Js, h = u == Js, g = c == u;
  if (g && wa(e)) {
    if (!wa(t))
      return !1;
    r = !0, d = !1;
  }
  if (g && !d)
    return a || (a = new Zn()), r || lu(e) ? uu(e, t, n, o, s, a) : Tg(e, t, c, n, o, s, a);
  if (!(n & xg)) {
    var w = d && Li.call(e, "__wrapped__"), m = h && Li.call(t, "__wrapped__");
    if (w || m) {
      var b = w ? e.value() : e, C = m ? t.value() : t;
      return a || (a = new Zn()), s(b, C, n, o, a);
    }
  }
  return g ? (a || (a = new Zn()), Eg(e, t, n, o, s, a)) : !1;
}
function Pr(e, t, n, o, s) {
  return e === t ? !0 : e == null || t == null || !Qo(e) && !Qo(t) ? e !== e && t !== t : Ig(e, t, n, o, Pr, s);
}
var Og = 1, $g = 2;
function Rg(e, t, n, o) {
  var s = n.length, a = s;
  if (e == null)
    return !a;
  for (e = Object(e); s--; ) {
    var r = n[s];
    if (r[2] ? r[1] !== e[r[0]] : !(r[0] in e))
      return !1;
  }
  for (; ++s < a; ) {
    r = n[s];
    var i = r[0], c = e[i], u = r[1];
    if (r[2]) {
      if (c === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Zn(), h;
      if (!(h === void 0 ? Pr(u, c, Og | $g, o, d) : h))
        return !1;
    }
  }
  return !0;
}
function du(e) {
  return e === e && !po(e);
}
function Mg(e) {
  for (var t = iu(e), n = t.length; n--; ) {
    var o = t[n], s = e[o];
    t[n] = [o, s, du(s)];
  }
  return t;
}
function fu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Pg(e) {
  var t = Mg(e);
  return t.length == 1 && t[0][2] ? fu(t[0][0], t[0][1]) : function(n) {
    return n === e || Rg(n, e, t);
  };
}
function Ng(e, t) {
  return e != null && t in Object(e);
}
function Dg(e, t, n) {
  t = Mr(t, e);
  for (var o = -1, s = t.length, a = !1; ++o < s; ) {
    var r = Vs(t[o]);
    if (!(a = e != null && n(e, r)))
      break;
    e = e[r];
  }
  return a || ++o != s ? a : (s = e == null ? 0 : e.length, !!s && qa(s) && Ua(r, s) && (wn(e) || Ka(e)));
}
function pu(e, t) {
  return e != null && Dg(e, t, Ng);
}
var zg = 1, Bg = 2;
function Fg(e, t) {
  return Za(e) && du(t) ? fu(Vs(e), t) : function(n) {
    var o = co(n, e);
    return o === void 0 && o === t ? pu(n, e) : Pr(t, o, zg | Bg);
  };
}
function jg(e) {
  return function(t) {
    return t?.[e];
  };
}
function Vg(e) {
  return function(t) {
    return Xa(t, e);
  };
}
function Hg(e) {
  return Za(e) ? jg(Vs(e)) : Vg(e);
}
function Wg(e) {
  return typeof e == "function" ? e : e == null ? nu : typeof e == "object" ? wn(e) ? Fg(e[0], e[1]) : Pg(e) : Hg(e);
}
var oa = function() {
  return Dn.Date.now();
}, Ug = "Expected a function", Gg = Math.max, qg = Math.min;
function Kg(e, t, n) {
  var o, s, a, r, i, c, u = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ug);
  t = ci(t) || 0, po(n) && (d = !!n.leading, h = "maxWait" in n, a = h ? Gg(ci(n.maxWait) || 0, t) : a, g = "trailing" in n ? !!n.trailing : g);
  function w(O) {
    var R = o, Y = s;
    return o = s = void 0, u = O, r = e.apply(Y, R), r;
  }
  function m(O) {
    return u = O, i = setTimeout(_, t), d ? w(O) : r;
  }
  function b(O) {
    var R = O - c, Y = O - u, F = t - R;
    return h ? qg(F, a - Y) : F;
  }
  function C(O) {
    var R = O - c, Y = O - u;
    return c === void 0 || R >= t || R < 0 || h && Y >= a;
  }
  function _() {
    var O = oa();
    if (C(O))
      return M(O);
    i = setTimeout(_, b(O));
  }
  function M(O) {
    return i = void 0, g && o ? w(O) : (o = s = void 0, r);
  }
  function V() {
    i !== void 0 && clearTimeout(i), u = 0, o = c = s = i = void 0;
  }
  function L() {
    return i === void 0 ? r : M(oa());
  }
  function I() {
    var O = oa(), R = C(O);
    if (o = arguments, s = this, c = O, R) {
      if (i === void 0)
        return m(c);
      if (h)
        return clearTimeout(i), i = setTimeout(_, t), w(c);
    }
    return i === void 0 && (i = setTimeout(_, t)), r;
  }
  return I.cancel = V, I.flush = L, I;
}
function Zg(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var s = o - 1;
  return eh(e, Wg(t), s);
}
function yr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
function xs(e, t) {
  return Pr(e, t);
}
function Yn(e) {
  return e == null;
}
function hu(e) {
  return e === void 0;
}
function Yg(e, t, n, o) {
  if (!po(e))
    return e;
  t = Mr(t, e);
  for (var s = -1, a = t.length, r = a - 1, i = e; i != null && ++s < a; ) {
    var c = Vs(t[s]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (s != r) {
      var d = i[c];
      u = void 0, u === void 0 && (u = po(d) ? d : Ua(t[s + 1]) ? [] : {});
    }
    ah(i, c, u), i = i[c];
  }
  return e;
}
function Xg(e, t, n) {
  for (var o = -1, s = t.length, a = {}; ++o < s; ) {
    var r = t[o], i = Xa(e, r);
    n(i, r) && Yg(a, Mr(r, e), i);
  }
  return a;
}
function Qg(e, t) {
  return Xg(e, t, function(n, o) {
    return pu(e, o);
  });
}
var Jg = Nm(function(e, t) {
  return e == null ? {} : Qg(e, t);
});
const On = (e) => e === void 0, zs = (e) => typeof e == "boolean", Be = (e) => typeof e == "number", vn = (e) => typeof Element > "u" ? !1 : e instanceof Element, ev = (e) => qt(e) ? !Number.isNaN(Number(e)) : !1;
var tv = Object.defineProperty, nv = Object.defineProperties, ov = Object.getOwnPropertyDescriptors, Ii = Object.getOwnPropertySymbols, sv = Object.prototype.hasOwnProperty, rv = Object.prototype.propertyIsEnumerable, Oi = (e, t, n) => t in e ? tv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, av = (e, t) => {
  for (var n in t || (t = {}))
    sv.call(t, n) && Oi(e, n, t[n]);
  if (Ii)
    for (var n of Ii(t))
      rv.call(t, n) && Oi(e, n, t[n]);
  return e;
}, lv = (e, t) => nv(e, ov(t));
function iv(e, t) {
  var n;
  const o = uo();
  return Fa(() => {
    o.value = e();
  }, lv(av({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ba(o);
}
var $i;
const Ue = typeof window < "u", cv = (e) => typeof e == "string", mu = () => {
}, Sa = Ue && (($i = window?.navigator) == null ? void 0 : $i.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qa(e) {
  return typeof e == "function" ? e() : l(e);
}
function uv(e) {
  return e;
}
function Hs(e) {
  return Cf() ? (qc(e), !0) : !1;
}
function dv(e, t = !0) {
  Et() ? nt(e) : t ? e() : Ke(e);
}
function wr(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = N(!1);
  let a = null;
  function r() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    s.value = !1, r();
  }
  function c(...u) {
    r(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...u);
    }, Qa(t));
  }
  return o && (s.value = !0, Ue && c()), Hs(i), {
    isPending: Ba(s),
    start: c,
    stop: i
  };
}
function Kn(e) {
  var t;
  const n = Qa(e);
  return (t = n?.$el) != null ? t : n;
}
const Nr = Ue ? window : void 0;
function bn(...e) {
  let t, n, o, s;
  if (cv(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = Nr) : [t, n, o, s] = e, !t)
    return mu;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], r = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, h, g, w) => (d.addEventListener(h, g, w), () => d.removeEventListener(h, g, w)), c = he(() => [Kn(t), Qa(s)], ([d, h]) => {
    r(), d && a.push(...n.flatMap((g) => o.map((w) => i(d, g, w, h))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), r();
  };
  return Hs(u), u;
}
let Ri = !1;
function fv(e, t, n = {}) {
  const { window: o = Nr, ignore: s = [], capture: a = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  Sa && !Ri && (Ri = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", mu)));
  let i = !0;
  const c = (g) => s.some((w) => {
    if (typeof w == "string")
      return Array.from(o.document.querySelectorAll(w)).some((m) => m === g.target || g.composedPath().includes(m));
    {
      const m = Kn(w);
      return m && (g.target === m || g.composedPath().includes(m));
    }
  }), d = [
    bn(o, "click", (g) => {
      const w = Kn(e);
      if (!(!w || w === g.target || g.composedPath().includes(w))) {
        if (g.detail === 0 && (i = !c(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: a }),
    bn(o, "pointerdown", (g) => {
      const w = Kn(e);
      w && (i = !g.composedPath().includes(w) && !c(g));
    }, { passive: !0 }),
    r && bn(o, "blur", (g) => {
      var w;
      const m = Kn(e);
      ((w = o.document.activeElement) == null ? void 0 : w.tagName) === "IFRAME" && !m?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function gu(e, t = !1) {
  const n = N(), o = () => n.value = !!e();
  return o(), dv(o, t), n;
}
const Mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pi = "__vueuse_ssr_handlers__";
Mi[Pi] = Mi[Pi] || {};
var Ni = Object.getOwnPropertySymbols, pv = Object.prototype.hasOwnProperty, hv = Object.prototype.propertyIsEnumerable, mv = (e, t) => {
  var n = {};
  for (var o in e)
    pv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ni)
    for (var o of Ni(e))
      t.indexOf(o) < 0 && hv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Ln(e, t, n = {}) {
  const o = n, { window: s = Nr } = o, a = mv(o, ["window"]);
  let r;
  const i = gu(() => s && "ResizeObserver" in s), c = () => {
    r && (r.disconnect(), r = void 0);
  }, u = he(() => Kn(e), (h) => {
    c(), i.value && s && h && (r = new ResizeObserver(t), r.observe(h, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return Hs(d), {
    isSupported: i,
    stop: d
  };
}
var Di = Object.getOwnPropertySymbols, gv = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, bv = (e, t) => {
  var n = {};
  for (var o in e)
    gv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Di)
    for (var o of Di(e))
      t.indexOf(o) < 0 && vv.call(e, o) && (n[o] = e[o]);
  return n;
};
function yv(e, t, n = {}) {
  const o = n, { window: s = Nr } = o, a = bv(o, ["window"]);
  let r;
  const i = gu(() => s && "MutationObserver" in s), c = () => {
    r && (r.disconnect(), r = void 0);
  }, u = he(() => Kn(e), (h) => {
    c(), i.value && s && h && (r = new MutationObserver(t), r.observe(h, a));
  }, { immediate: !0 }), d = () => {
    c(), u();
  };
  return Hs(d), {
    isSupported: i,
    stop: d
  };
}
var zi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(zi || (zi = {}));
var wv = Object.defineProperty, Bi = Object.getOwnPropertySymbols, _v = Object.prototype.hasOwnProperty, kv = Object.prototype.propertyIsEnumerable, Fi = (e, t, n) => t in e ? wv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tv = (e, t) => {
  for (var n in t || (t = {}))
    _v.call(t, n) && Fi(e, n, t[n]);
  if (Bi)
    for (var n of Bi(t))
      kv.call(t, n) && Fi(e, n, t[n]);
  return e;
};
const Sv = {
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
Tv({
  linear: uv
}, Sv);
class Av extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ja(e, t) {
  throw new Av(`[${e}] ${t}`);
}
const ji = {
  current: 0
}, Vi = N(0), vu = 2e3, Hi = Symbol("elZIndexContextKey"), bu = Symbol("zIndexContextKey"), el = (e) => {
  const t = Et() ? Me(Hi, ji) : ji, n = e || (Et() ? Me(bu, void 0) : void 0), o = A(() => {
    const r = l(n);
    return Be(r) ? r : vu;
  }), s = A(() => o.value + Vi.value), a = () => (t.current++, Vi.value = t.current, s.value);
  return !Ue && Me(Hi), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: a
  };
};
var Cv = {
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
const Ev = (e) => (t, n) => xv(t, n, l(e)), xv = (e, t, n) => co(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), Lv = (e) => {
  const t = A(() => l(e).name), n = en(e) ? e : N(e);
  return {
    lang: t,
    locale: n,
    t: Ev(e)
  };
}, yu = Symbol("localeContextKey"), Dr = (e) => {
  const t = e || Me(yu, N());
  return Lv(A(() => t.value || Cv));
}, wu = "__epPropKey", me = (e) => e, Iv = (e) => nn(e) && !!e[wu], zr = (e, t) => {
  if (!nn(e) || Iv(e))
    return e;
  const { values: n, required: o, default: s, type: a, validator: r } = e, c = {
    type: a,
    required: !!o,
    validator: n || r ? (u) => {
      let d = !1, h = [];
      if (n && (h = Array.from(n), si(e, "default") && h.push(s), d || (d = h.includes(u))), r && (d || (d = r(u))), !d && h.length > 0) {
        const g = [...new Set(h)].map((w) => JSON.stringify(w)).join(", ");
        Ef(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [wu]: !0
  };
  return si(e, "default") && (c.default = s), c;
}, Fe = (e) => yr(Object.entries(e).map(([t, n]) => [
  t,
  zr(n, t)
])), _u = ["", "default", "small", "large"], Br = zr({
  type: String,
  values: _u,
  required: !1
}), ku = Symbol("size"), Ov = () => {
  const e = Me(ku, {});
  return A(() => l(e.size) || "");
}, Tu = Symbol("emptyValuesContextKey"), $v = ["", void 0, null], Rv = void 0, Su = Fe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => tt(e) ? !e() : !e
  }
}), Mv = (e, t) => {
  const n = Et() ? Me(Tu, N({})) : N({}), o = A(() => e.emptyValues || n.value.emptyValues || $v), s = A(() => tt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : tt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Rv), a = (r) => o.value.includes(r);
  return o.value.includes(s.value), {
    emptyValues: o,
    valueOnClear: s,
    isEmptyValue: a
  };
}, Wi = (e) => Object.keys(e), _r = N();
function tl(e, t = void 0) {
  const n = Et() ? Me(Xc, _r) : _r;
  return e ? A(() => {
    var o, s;
    return (s = (o = n.value) == null ? void 0 : o[e]) != null ? s : t;
  }) : n;
}
function Au(e, t) {
  const n = tl(), o = Qe(e, A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Cs;
  })), s = Dr(A(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = el(A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || vu;
  })), r = A(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Cu(A(() => l(n) || {})), {
    ns: o,
    locale: s,
    zIndex: a,
    size: r
  };
}
const Cu = (e, t, n = !1) => {
  var o;
  const s = !!Et(), a = s ? tl() : void 0, r = (o = void 0) != null ? o : s ? yn : void 0;
  if (!r)
    return;
  const i = A(() => {
    const c = l(e);
    return a?.value ? Pv(a.value, c) : c;
  });
  return r(Xc, i), r(yu, A(() => i.value.locale)), r(Qc, A(() => i.value.namespace)), r(bu, A(() => i.value.zIndex)), r(ku, {
    size: A(() => i.value.size || "")
  }), r(Tu, A(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !_r.value) && (_r.value = i.value), i;
}, Pv = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Wi(e), ...Wi(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
}, wt = "update:modelValue", Jo = "change", Xo = "input";
var He = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
const Eu = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ui = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Nv = (e, t) => {
  !e || !t.trim() || e.classList.add(...Eu(t));
}, Dv = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Eu(t));
}, zv = (e, t) => {
  var n;
  if (!Ue || !e)
    return "";
  let o = up(t);
  o === "float" && (o = "cssFloat");
  try {
    const s = e.style[o];
    if (s)
      return s;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[o] : "";
  } catch {
    return e.style[o];
  }
};
function ho(e, t = "px") {
  if (!e)
    return "";
  if (Be(e) || ev(e))
    return `${e}${t}`;
  if (qt(e))
    return e;
}
let er;
const Bv = (e) => {
  var t;
  if (!Ue)
    return 0;
  if (er !== void 0)
    return er;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const s = document.createElement("div");
  s.style.width = "100%", n.appendChild(s);
  const a = s.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), er = o - a, er;
};
function Fv(e, t) {
  if (!Ue)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const s = t.offsetTop + n.reduce((c, u) => c + u.offsetTop, 0), a = s + t.offsetHeight, r = e.scrollTop, i = r + e.clientHeight;
  s < r ? e.scrollTop = s : a > i && (e.scrollTop = a - e.clientHeight);
}
const kn = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, xu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Lu = (e) => (e.install = fo, e), jv = Fe({
  size: {
    type: me([Number, String])
  },
  color: {
    type: String
  }
}), Vv = se({
  name: "ElIcon",
  inheritAttrs: !1
}), Hv = /* @__PURE__ */ se({
  ...Vv,
  props: jv,
  setup(e) {
    const t = e, n = Qe("icon"), o = A(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: On(s) ? void 0 : ho(s),
        "--color": a
      };
    });
    return (s, a) => (S(), D("i", Ao({
      class: l(n).b(),
      style: l(o)
    }, s.$attrs), [
      ce(s.$slots, "default")
    ], 16));
  }
});
var Wv = /* @__PURE__ */ He(Hv, [["__file", "icon.vue"]]);
const Mt = kn(Wv);
/*! Element Plus Icons Vue v2.3.1 */
var Uv = /* @__PURE__ */ se({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Iu = Uv, Gv = /* @__PURE__ */ se({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), qv = Gv, Kv = /* @__PURE__ */ se({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      f("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Zv = Kv, Yv = /* @__PURE__ */ se({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Xv = Yv, Qv = /* @__PURE__ */ se({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      f("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), nl = Qv, Jv = /* @__PURE__ */ se({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), kr = Jv, e0 = /* @__PURE__ */ se({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      f("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), t0 = e0, n0 = /* @__PURE__ */ se({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), o0 = n0, s0 = /* @__PURE__ */ se({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), r0 = s0, a0 = /* @__PURE__ */ se({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), l0 = a0, i0 = /* @__PURE__ */ se({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), c0 = i0, u0 = /* @__PURE__ */ se({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), d0 = u0, f0 = /* @__PURE__ */ se({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), p0 = f0, h0 = /* @__PURE__ */ se({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), m0 = h0;
const xo = me([
  String,
  Object,
  Function
]), Ou = {
  Close: kr
}, g0 = {
  Close: kr
}, Tr = {
  success: d0,
  warning: m0,
  error: Xv,
  info: o0
}, $u = {
  validating: r0,
  success: Zv,
  error: nl
}, Ru = () => Ue && /firefox/i.test(window.navigator.userAgent);
let jt;
const v0 = {
  height: "0",
  visibility: "hidden",
  overflow: Ru() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, b0 = [
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
function y0(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: b0.map((r) => [
    r,
    t.getPropertyValue(r)
  ]), paddingSize: o, borderSize: s, boxSizing: n };
}
function Gi(e, t = 1, n) {
  var o;
  jt || (jt = document.createElement("textarea"), document.body.appendChild(jt));
  const { paddingSize: s, borderSize: a, boxSizing: r, contextStyle: i } = y0(e);
  i.forEach(([h, g]) => jt?.style.setProperty(h, g)), Object.entries(v0).forEach(([h, g]) => jt?.style.setProperty(h, g, "important")), jt.value = e.value || e.placeholder || "";
  let c = jt.scrollHeight;
  const u = {};
  r === "border-box" ? c = c + a : r === "content-box" && (c = c - s), jt.value = "";
  const d = jt.scrollHeight - s;
  if (Be(t)) {
    let h = d * t;
    r === "border-box" && (h = h + s + a), c = Math.max(h, c), u.minHeight = `${h}px`;
  }
  if (Be(n)) {
    let h = d * n;
    r === "border-box" && (h = h + s + a), c = Math.min(h, c);
  }
  return u.height = `${c}px`, (o = jt.parentNode) == null || o.removeChild(jt), jt = void 0, u;
}
const Mu = (e) => e, w0 = Fe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), us = (e) => Jg(w0, e), _0 = Fe({
  id: {
    type: String,
    default: void 0
  },
  size: Br,
  disabled: Boolean,
  modelValue: {
    type: me([
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
    type: me([Boolean, Object]),
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
    type: xo
  },
  prefixIcon: {
    type: xo
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
    type: me([Object, Array, String]),
    default: () => Mu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...us(["ariaLabel"])
}), k0 = {
  [wt]: (e) => qt(e),
  input: (e) => qt(e),
  change: (e) => qt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, T0 = ["class", "style"], S0 = /^on[A-Z]/, A0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = A(() => (n?.value || []).concat(T0)), s = Et();
  return s ? A(() => {
    var a;
    return yr(Object.entries((a = s.proxy) == null ? void 0 : a.$attrs).filter(([r]) => !o.value.includes(r) && !(t && S0.test(r))));
  }) : A(() => ({}));
}, ol = Symbol("formContextKey"), Sr = Symbol("formItemContextKey"), qi = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, C0 = Symbol("elIdInjection"), Pu = () => Et() ? Me(C0, qi) : qi, es = (e) => {
  const t = Pu(), n = Wa();
  return iv(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, sl = () => {
  const e = Me(ol, void 0), t = Me(Sr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Nu = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = N(!1)), o || (o = N(!1));
  const s = N();
  let a;
  const r = A(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return nt(() => {
    a = he([qn(e, "id"), n], ([i, c]) => {
      const u = i ?? (c ? void 0 : es().value);
      u !== s.value && (t?.removeInputId && (s.value && t.removeInputId(s.value), !o?.value && !c && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), ja(() => {
    a && a(), t?.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: r,
    inputId: s
  };
}, Du = (e) => {
  const t = Et();
  return A(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, Fr = (e, t = {}) => {
  const n = N(void 0), o = t.prop ? n : Du("size"), s = t.global ? n : Ov(), a = t.form ? { size: void 0 } : Me(ol, void 0), r = t.formItem ? { size: void 0 } : Me(Sr, void 0);
  return A(() => o.value || l(e) || r?.size || a?.size || s.value || "");
}, zu = (e) => {
  const t = Du("disabled"), n = Me(ol, void 0);
  return A(() => t.value || l(e) || n?.disabled || !1);
};
function Bu(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: s
} = {}) {
  const a = Et(), { emit: r } = a, i = uo(), c = N(!1), u = (g) => {
    tt(t) && t(g) || c.value || (c.value = !0, r("focus", g), n?.());
  }, d = (g) => {
    var w;
    tt(o) && o(g) || g.relatedTarget && ((w = i.value) != null && w.contains(g.relatedTarget)) || (c.value = !1, r("blur", g), s?.());
  }, h = () => {
    var g, w;
    (g = i.value) != null && g.contains(document.activeElement) && i.value !== document.activeElement || (w = e.value) == null || w.focus();
  };
  return he(i, (g) => {
    g && g.setAttribute("tabindex", "-1");
  }), bn(i, "focus", u, !0), bn(i, "blur", d, !0), bn(i, "click", h, !0), {
    isFocused: c,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const E0 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Fu({
  afterComposition: e,
  emit: t
}) {
  const n = N(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, s = (i) => {
    var c;
    t?.("compositionupdate", i);
    const u = (c = i.target) == null ? void 0 : c.value, d = u[u.length - 1] || "";
    n.value = !E0(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Ke(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? a(i) : s(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: s,
    handleCompositionEnd: a
  };
}
function x0(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: a, value: r } = e.value;
    if (s == null || a == null)
      return;
    const i = r.slice(0, Math.max(0, s)), c = r.slice(Math.max(0, a));
    t = {
      selectionStart: s,
      selectionEnd: a,
      value: r,
      beforeTxt: i,
      afterTxt: c
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: s } = e.value, { beforeTxt: a, afterTxt: r, selectionStart: i } = t;
    if (a == null || r == null || i == null)
      return;
    let c = s.length;
    if (s.endsWith(r))
      c = s.length - r.length;
    else if (s.startsWith(a))
      c = a.length;
    else {
      const u = a[i - 1], d = s.indexOf(u, i - 1);
      d !== -1 && (c = d + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, o];
}
const L0 = "ElInput", I0 = se({
  name: L0,
  inheritAttrs: !1
}), O0 = /* @__PURE__ */ se({
  ...I0,
  props: _0,
  emits: k0,
  setup(e, { expose: t, emit: n }) {
    const o = e, s = xf(), a = A0(), r = Kc(), i = A(() => [
      o.type === "textarea" ? b.b() : m.b(),
      m.m(g.value),
      m.is("disabled", w.value),
      m.is("exceed", Ge.value),
      {
        [m.b("group")]: r.prepend || r.append,
        [m.m("prefix")]: r.prefix || o.prefixIcon,
        [m.m("suffix")]: r.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [m.bm("suffix", "password-clear")]: ue.value && pe.value,
        [m.b("hidden")]: o.type === "hidden"
      },
      s.class
    ]), c = A(() => [
      m.e("wrapper"),
      m.is("focus", Y.value)
    ]), { form: u, formItem: d } = sl(), { inputId: h } = Nu(o, {
      formItemContext: d
    }), g = Fr(), w = zu(), m = Qe("input"), b = Qe("textarea"), C = uo(), _ = uo(), M = N(!1), V = N(!1), L = N(), I = uo(o.inputStyle), O = A(() => C.value || _.value), { wrapperRef: R, isFocused: Y, handleFocus: F, handleBlur: oe } = Bu(O, {
      beforeFocus() {
        return w.value;
      },
      afterBlur() {
        var q;
        o.validateEvent && ((q = d?.validate) == null || q.call(d, "blur").catch((we) => void 0));
      }
    }), U = A(() => {
      var q;
      return (q = u?.statusIcon) != null ? q : !1;
    }), ae = A(() => d?.validateState || ""), fe = A(() => ae.value && $u[ae.value]), de = A(() => V.value ? p0 : t0), $ = A(() => [
      s.style
    ]), H = A(() => [
      o.inputStyle,
      I.value,
      { resize: o.resize }
    ]), B = A(() => Yn(o.modelValue) ? "" : String(o.modelValue)), ue = A(() => o.clearable && !w.value && !o.readonly && !!B.value && (Y.value || M.value)), pe = A(() => o.showPassword && !w.value && !!B.value && (!!B.value || Y.value)), ke = A(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !w.value && !o.readonly && !o.showPassword), je = A(() => B.value.length), Ge = A(() => !!ke.value && je.value > Number(o.maxlength)), Se = A(() => !!r.suffix || !!o.suffixIcon || ue.value || o.showPassword || ke.value || !!ae.value && U.value), [j, K] = x0(C);
    Ln(_, (q) => {
      if (ne(), !ke.value || o.resize !== "both")
        return;
      const we = q[0], { width: mt } = we.contentRect;
      L.value = {
        right: `calc(100% - ${mt + 15 + 6}px)`
      };
    });
    const ge = () => {
      const { type: q, autosize: we } = o;
      if (!(!Ue || q !== "textarea" || !_.value))
        if (we) {
          const mt = nn(we) ? we.minRows : void 0, Lt = nn(we) ? we.maxRows : void 0, xe = Gi(_.value, mt, Lt);
          I.value = {
            overflowY: "hidden",
            ...xe
          }, Ke(() => {
            _.value.offsetHeight, I.value = xe;
          });
        } else
          I.value = {
            minHeight: Gi(_.value).minHeight
          };
    }, ne = ((q) => {
      let we = !1;
      return () => {
        var mt;
        if (we || !o.autosize)
          return;
        ((mt = _.value) == null ? void 0 : mt.offsetParent) === null || (q(), we = !0);
      };
    })(ge), Z = () => {
      const q = O.value, we = o.formatter ? o.formatter(B.value) : B.value;
      !q || q.value === we || (q.value = we);
    }, dt = async (q) => {
      j();
      let { value: we } = q.target;
      if (o.formatter && o.parser && (we = o.parser(we)), !_t.value) {
        if (we === B.value) {
          Z();
          return;
        }
        n(wt, we), n(Xo, we), await Ke(), Z(), K();
      }
    }, Ee = (q) => {
      let { value: we } = q.target;
      o.formatter && o.parser && (we = o.parser(we)), n(Jo, we);
    }, {
      isComposing: _t,
      handleCompositionStart: ct,
      handleCompositionUpdate: ut,
      handleCompositionEnd: xt
    } = Fu({ emit: n, afterComposition: dt }), Ye = () => {
      j(), V.value = !V.value, setTimeout(K);
    }, ot = () => {
      var q;
      return (q = O.value) == null ? void 0 : q.focus();
    }, st = () => {
      var q;
      return (q = O.value) == null ? void 0 : q.blur();
    }, Dt = (q) => {
      M.value = !1, n("mouseleave", q);
    }, We = (q) => {
      M.value = !0, n("mouseenter", q);
    }, Je = (q) => {
      n("keydown", q);
    }, Wt = () => {
      var q;
      (q = O.value) == null || q.select();
    }, kt = () => {
      n(wt, ""), n(Jo, ""), n("clear"), n(Xo, "");
    };
    return he(() => o.modelValue, () => {
      var q;
      Ke(() => ge()), o.validateEvent && ((q = d?.validate) == null || q.call(d, "change").catch((we) => void 0));
    }), he(B, () => Z()), he(() => o.type, async () => {
      await Ke(), Z(), ge();
    }), nt(() => {
      !o.formatter && o.parser, Z(), Ke(ge);
    }), t({
      input: C,
      textarea: _,
      ref: O,
      textareaStyle: H,
      autosize: qn(o, "autosize"),
      isComposing: _t,
      focus: ot,
      blur: st,
      select: Wt,
      clear: kt,
      resizeTextarea: ge
    }), (q, we) => (S(), D("div", {
      class: z([
        l(i),
        {
          [l(m).bm("group", "append")]: q.$slots.append,
          [l(m).bm("group", "prepend")]: q.$slots.prepend
        }
      ]),
      style: ht(l($)),
      onMouseenter: We,
      onMouseleave: Dt
    }, [
      Q(" input "),
      q.type !== "textarea" ? (S(), D(at, { key: 0 }, [
        Q(" prepend slot "),
        q.$slots.prepend ? (S(), D("div", {
          key: 0,
          class: z(l(m).be("group", "prepend"))
        }, [
          ce(q.$slots, "prepend")
        ], 2)) : Q("v-if", !0),
        f("div", {
          ref_key: "wrapperRef",
          ref: R,
          class: z(l(c))
        }, [
          Q(" prefix slot "),
          q.$slots.prefix || q.prefixIcon ? (S(), D("span", {
            key: 0,
            class: z(l(m).e("prefix"))
          }, [
            f("span", {
              class: z(l(m).e("prefix-inner"))
            }, [
              ce(q.$slots, "prefix"),
              q.prefixIcon ? (S(), re(l(Mt), {
                key: 0,
                class: z(l(m).e("icon"))
              }, {
                default: ee(() => [
                  (S(), re(tn(q.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0),
          f("input", Ao({
            id: l(h),
            ref_key: "input",
            ref: C,
            class: l(m).e("inner")
          }, l(a), {
            minlength: q.minlength,
            maxlength: q.maxlength,
            type: q.showPassword ? V.value ? "text" : "password" : q.type,
            disabled: l(w),
            readonly: q.readonly,
            autocomplete: q.autocomplete,
            tabindex: q.tabindex,
            "aria-label": q.ariaLabel,
            placeholder: q.placeholder,
            style: q.inputStyle,
            form: q.form,
            autofocus: q.autofocus,
            role: q.containerRole,
            onCompositionstart: l(ct),
            onCompositionupdate: l(ut),
            onCompositionend: l(xt),
            onInput: dt,
            onChange: Ee,
            onKeydown: Je
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Q(" suffix slot "),
          l(Se) ? (S(), D("span", {
            key: 1,
            class: z(l(m).e("suffix"))
          }, [
            f("span", {
              class: z(l(m).e("suffix-inner"))
            }, [
              !l(ue) || !l(pe) || !l(ke) ? (S(), D(at, { key: 0 }, [
                ce(q.$slots, "suffix"),
                q.suffixIcon ? (S(), re(l(Mt), {
                  key: 0,
                  class: z(l(m).e("icon"))
                }, {
                  default: ee(() => [
                    (S(), re(tn(q.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Q("v-if", !0)
              ], 64)) : Q("v-if", !0),
              l(ue) ? (S(), re(l(Mt), {
                key: 1,
                class: z([l(m).e("icon"), l(m).e("clear")]),
                onMousedown: qe(l(fo), ["prevent"]),
                onClick: kt
              }, {
                default: ee(() => [
                  k(l(nl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Q("v-if", !0),
              l(pe) ? (S(), re(l(Mt), {
                key: 2,
                class: z([l(m).e("icon"), l(m).e("password")]),
                onClick: Ye
              }, {
                default: ee(() => [
                  (S(), re(tn(l(de))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              l(ke) ? (S(), D("span", {
                key: 3,
                class: z(l(m).e("count"))
              }, [
                f("span", {
                  class: z(l(m).e("count-inner"))
                }, E(l(je)) + " / " + E(q.maxlength), 3)
              ], 2)) : Q("v-if", !0),
              l(ae) && l(fe) && l(U) ? (S(), re(l(Mt), {
                key: 4,
                class: z([
                  l(m).e("icon"),
                  l(m).e("validateIcon"),
                  l(m).is("loading", l(ae) === "validating")
                ])
              }, {
                default: ee(() => [
                  (S(), re(tn(l(fe))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0)
        ], 2),
        Q(" append slot "),
        q.$slots.append ? (S(), D("div", {
          key: 1,
          class: z(l(m).be("group", "append"))
        }, [
          ce(q.$slots, "append")
        ], 2)) : Q("v-if", !0)
      ], 64)) : (S(), D(at, { key: 1 }, [
        Q(" textarea "),
        f("textarea", Ao({
          id: l(h),
          ref_key: "textarea",
          ref: _,
          class: [l(b).e("inner"), l(m).is("focus", l(Y))]
        }, l(a), {
          minlength: q.minlength,
          maxlength: q.maxlength,
          tabindex: q.tabindex,
          disabled: l(w),
          readonly: q.readonly,
          autocomplete: q.autocomplete,
          style: l(H),
          "aria-label": q.ariaLabel,
          placeholder: q.placeholder,
          form: q.form,
          autofocus: q.autofocus,
          rows: q.rows,
          role: q.containerRole,
          onCompositionstart: l(ct),
          onCompositionupdate: l(ut),
          onCompositionend: l(xt),
          onInput: dt,
          onFocus: l(F),
          onBlur: l(oe),
          onChange: Ee,
          onKeydown: Je
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(ke) ? (S(), D("span", {
          key: 0,
          style: ht(L.value),
          class: z(l(m).e("count"))
        }, E(l(je)) + " / " + E(q.maxlength), 7)) : Q("v-if", !0)
      ], 64))
    ], 38));
  }
});
var $0 = /* @__PURE__ */ He(O0, [["__file", "input.vue"]]);
const R0 = kn($0), Ho = 4, M0 = {
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
}, P0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), rl = Symbol("scrollbarContextKey"), N0 = Fe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), D0 = "Thumb", z0 = /* @__PURE__ */ se({
  __name: "thumb",
  props: N0,
  setup(e) {
    const t = e, n = Me(rl), o = Qe("scrollbar");
    n || Ja(D0, "can not inject scrollbar context");
    const s = N(), a = N(), r = N({}), i = N(!1);
    let c = !1, u = !1, d = Ue ? document.onselectstart : null;
    const h = A(() => M0[t.vertical ? "vertical" : "horizontal"]), g = A(() => P0({
      size: t.size,
      move: t.move,
      bar: h.value
    })), w = A(() => s.value[h.value.offset] ** 2 / n.wrapElement[h.value.scrollSize] / t.ratio / a.value[h.value.offset]), m = (O) => {
      var R;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (R = window.getSelection()) == null || R.removeAllRanges(), C(O);
      const Y = O.currentTarget;
      Y && (r.value[h.value.axis] = Y[h.value.offset] - (O[h.value.client] - Y.getBoundingClientRect()[h.value.direction]));
    }, b = (O) => {
      if (!a.value || !s.value || !n.wrapElement)
        return;
      const R = Math.abs(O.target.getBoundingClientRect()[h.value.direction] - O[h.value.client]), Y = a.value[h.value.offset] / 2, F = (R - Y) * 100 * w.value / s.value[h.value.offset];
      n.wrapElement[h.value.scroll] = F * n.wrapElement[h.value.scrollSize] / 100;
    }, C = (O) => {
      O.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", _), document.addEventListener("mouseup", M), d = document.onselectstart, document.onselectstart = () => !1;
    }, _ = (O) => {
      if (!s.value || !a.value || c === !1)
        return;
      const R = r.value[h.value.axis];
      if (!R)
        return;
      const Y = (s.value.getBoundingClientRect()[h.value.direction] - O[h.value.client]) * -1, F = a.value[h.value.offset] - R, oe = (Y - F) * 100 * w.value / s.value[h.value.offset];
      n.wrapElement[h.value.scroll] = oe * n.wrapElement[h.value.scrollSize] / 100;
    }, M = () => {
      c = !1, r.value[h.value.axis] = 0, document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", M), I(), u && (i.value = !1);
    }, V = () => {
      u = !1, i.value = !!t.size;
    }, L = () => {
      u = !0, i.value = c;
    };
    _n(() => {
      I(), document.removeEventListener("mouseup", M);
    });
    const I = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return bn(qn(n, "scrollbarElement"), "mousemove", V), bn(qn(n, "scrollbarElement"), "mouseleave", L), (O, R) => (S(), re(Oo, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: ee(() => [
        lt(f("div", {
          ref_key: "instance",
          ref: s,
          class: z([l(o).e("bar"), l(o).is(l(h).key)]),
          onMousedown: b
        }, [
          f("div", {
            ref_key: "thumb",
            ref: a,
            class: z(l(o).e("thumb")),
            style: ht(l(g)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [Mn, O.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ki = /* @__PURE__ */ He(z0, [["__file", "thumb.vue"]]);
const B0 = Fe({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), F0 = /* @__PURE__ */ se({
  __name: "bar",
  props: B0,
  setup(e, { expose: t }) {
    const n = e, o = Me(rl), s = N(0), a = N(0), r = N(""), i = N(""), c = N(1), u = N(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const w = g.offsetHeight - Ho, m = g.offsetWidth - Ho;
          a.value = g.scrollTop * 100 / w * c.value, s.value = g.scrollLeft * 100 / m * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const w = g.offsetHeight - Ho, m = g.offsetWidth - Ho, b = w ** 2 / g.scrollHeight, C = m ** 2 / g.scrollWidth, _ = Math.max(b, n.minSize), M = Math.max(C, n.minSize);
        c.value = b / (w - b) / (_ / (w - _)), u.value = C / (m - C) / (M / (m - M)), i.value = _ + Ho < w ? `${_}px` : "", r.value = M + Ho < m ? `${M}px` : "";
      }
    }), (g, w) => (S(), D(at, null, [
      k(Ki, {
        move: s.value,
        ratio: u.value,
        size: r.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      k(Ki, {
        move: a.value,
        ratio: c.value,
        size: i.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var j0 = /* @__PURE__ */ He(F0, [["__file", "bar.vue"]]);
const V0 = Fe({
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
    type: me([String, Object, Array]),
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
  ...us(["ariaLabel", "ariaOrientation"])
}), H0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Be)
}, W0 = "ElScrollbar", U0 = se({
  name: W0
}), G0 = /* @__PURE__ */ se({
  ...U0,
  props: V0,
  emits: H0,
  setup(e, { expose: t, emit: n }) {
    const o = e, s = Qe("scrollbar");
    let a, r, i = 0, c = 0;
    const u = N(), d = N(), h = N(), g = N(), w = A(() => {
      const I = {};
      return o.height && (I.height = ho(o.height)), o.maxHeight && (I.maxHeight = ho(o.maxHeight)), [o.wrapStyle, I];
    }), m = A(() => [
      o.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !o.native }
    ]), b = A(() => [s.e("view"), o.viewClass]), C = () => {
      var I;
      d.value && ((I = g.value) == null || I.handleScroll(d.value), i = d.value.scrollTop, c = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function _(I, O) {
      nn(I) ? d.value.scrollTo(I) : Be(I) && Be(O) && d.value.scrollTo(I, O);
    }
    const M = (I) => {
      Be(I) && (d.value.scrollTop = I);
    }, V = (I) => {
      Be(I) && (d.value.scrollLeft = I);
    }, L = () => {
      var I;
      (I = g.value) == null || I.update();
    };
    return he(() => o.noresize, (I) => {
      I ? (a?.(), r?.()) : ({ stop: a } = Ln(h, L), r = bn("resize", L));
    }, { immediate: !0 }), he(() => [o.maxHeight, o.height], () => {
      o.native || Ke(() => {
        var I;
        L(), d.value && ((I = g.value) == null || I.handleScroll(d.value));
      });
    }), yn(rl, Co({
      scrollbarElement: u,
      wrapElement: d
    })), Lf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = c);
    }), nt(() => {
      o.native || Ke(() => {
        L();
      });
    }), Zc(() => L()), t({
      wrapRef: d,
      update: L,
      scrollTo: _,
      setScrollTop: M,
      setScrollLeft: V,
      handleScroll: C
    }), (I, O) => (S(), D("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: z(l(s).b())
    }, [
      f("div", {
        ref_key: "wrapRef",
        ref: d,
        class: z(l(m)),
        style: ht(l(w)),
        tabindex: I.tabindex,
        onScroll: C
      }, [
        (S(), re(tn(I.tag), {
          id: I.id,
          ref_key: "resizeRef",
          ref: h,
          class: z(l(b)),
          style: ht(I.viewStyle),
          role: I.role,
          "aria-label": I.ariaLabel,
          "aria-orientation": I.ariaOrientation
        }, {
          default: ee(() => [
            ce(I.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      I.native ? Q("v-if", !0) : (S(), re(j0, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: I.always,
        "min-size": I.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var q0 = /* @__PURE__ */ He(G0, [["__file", "scrollbar.vue"]]);
const K0 = kn(q0), al = Symbol("popper"), ju = Symbol("popperContent"), Z0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Vu = Fe({
  role: {
    type: String,
    values: Z0,
    default: "tooltip"
  }
}), Y0 = se({
  name: "ElPopper",
  inheritAttrs: !1
}), X0 = /* @__PURE__ */ se({
  ...Y0,
  props: Vu,
  setup(e, { expose: t }) {
    const n = e, o = N(), s = N(), a = N(), r = N(), i = A(() => n.role), c = {
      triggerRef: o,
      popperInstanceRef: s,
      contentRef: a,
      referenceRef: r,
      role: i
    };
    return t(c), yn(al, c), (u, d) => ce(u.$slots, "default");
  }
});
var Q0 = /* @__PURE__ */ He(X0, [["__file", "popper.vue"]]);
const Hu = Fe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), J0 = se({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), eb = /* @__PURE__ */ se({
  ...J0,
  props: Hu,
  setup(e, { expose: t }) {
    const n = e, o = Qe("popper"), { arrowOffset: s, arrowRef: a, arrowStyle: r } = Me(ju, void 0);
    return he(() => n.arrowOffset, (i) => {
      s.value = i;
    }), _n(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, c) => (S(), D("span", {
      ref_key: "arrowRef",
      ref: a,
      class: z(l(o).e("arrow")),
      style: ht(l(r)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var tb = /* @__PURE__ */ He(eb, [["__file", "arrow.vue"]]);
const Wu = Fe({
  virtualRef: {
    type: me(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: me(Function)
  },
  onMouseleave: {
    type: me(Function)
  },
  onClick: {
    type: me(Function)
  },
  onKeydown: {
    type: me(Function)
  },
  onFocus: {
    type: me(Function)
  },
  onBlur: {
    type: me(Function)
  },
  onContextmenu: {
    type: me(Function)
  },
  id: String,
  open: Boolean
}), Uu = Symbol("elForwardRef"), nb = (e) => {
  yn(Uu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, ob = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Aa = (e) => {
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
}, sb = "ElOnlyChild", rb = se({
  name: sb,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const s = Me(Uu), a = ob((o = s?.setForwardRef) != null ? o : fo);
    return () => {
      var r;
      const i = (r = t.default) == null ? void 0 : r.call(t, n);
      if (!i || i.length > 1)
        return null;
      const c = Gu(i);
      return c ? lt(If(c, n), [[a]]) : null;
    };
  }
});
function Gu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (nn(n))
      switch (n.type) {
        case $f:
          continue;
        case Of:
        case "svg":
          return Zi(n);
        case at:
          return Gu(n.children);
        default:
          return n;
      }
    return Zi(n);
  }
  return null;
}
function Zi(e) {
  const t = Qe("only-child");
  return k("span", {
    class: t.e("content")
  }, [e]);
}
const ab = se({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), lb = /* @__PURE__ */ se({
  ...ab,
  props: Wu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: s } = Me(al, void 0);
    nb(s);
    const a = A(() => i.value ? n.id : void 0), r = A(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = A(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), c = A(() => i.value ? `${n.open}` : void 0);
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
    return nt(() => {
      he(() => n.virtualRef, (h) => {
        h && (s.value = Kn(h));
      }, {
        immediate: !0
      }), he(s, (h, g) => {
        u?.(), u = void 0, vn(h) && (d.forEach((w) => {
          var m;
          const b = n[w];
          b && (h.addEventListener(w.slice(2).toLowerCase(), b), (m = g?.removeEventListener) == null || m.call(g, w.slice(2).toLowerCase(), b));
        }), Aa(h) && (u = he([a, r, i, c], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, b) => {
            Yn(w[b]) ? h.removeAttribute(m) : h.setAttribute(m, w[b]);
          });
        }, { immediate: !0 }))), vn(g) && Aa(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((w) => g.removeAttribute(w));
      }, {
        immediate: !0
      });
    }), _n(() => {
      if (u?.(), u = void 0, s.value && vn(s.value)) {
        const h = s.value;
        d.forEach((g) => {
          const w = n[g];
          w && h.removeEventListener(g.slice(2).toLowerCase(), w);
        }), s.value = void 0;
      }
    }), t({
      triggerRef: s
    }), (h, g) => h.virtualTriggering ? Q("v-if", !0) : (S(), re(l(rb), Ao({ key: 0 }, h.$attrs, {
      "aria-controls": l(a),
      "aria-describedby": l(r),
      "aria-expanded": l(c),
      "aria-haspopup": l(i)
    }), {
      default: ee(() => [
        ce(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ib = /* @__PURE__ */ He(lb, [["__file", "trigger.vue"]]);
const sa = "focus-trap.focus-after-trapped", ra = "focus-trap.focus-after-released", cb = "focus-trap.focusout-prevented", Yi = {
  cancelable: !0,
  bubbles: !1
}, ub = {
  cancelable: !0,
  bubbles: !1
}, Xi = "focusAfterTrapped", Qi = "focusAfterReleased", qu = Symbol("elFocusTrap"), ll = N(), jr = N(0), il = N(0);
let tr = 0;
const Ku = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ji = (e, t) => {
  for (const n of e)
    if (!db(n, t))
      return n;
}, db = (e, t) => {
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
}, fb = (e) => {
  const t = Ku(e), n = Ji(t, e), o = Ji(t.reverse(), e);
  return [n, o];
}, pb = (e) => e instanceof HTMLInputElement && "select" in e, Un = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    vn(e) && !Aa(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), il.value = window.performance.now(), e !== n && pb(e) && t && e.select(), vn(e) && o && e.removeAttribute("tabindex");
  }
};
function ec(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const hb = () => {
  let e = [];
  return {
    push: (o) => {
      const s = e[0];
      s && o !== s && s.pause(), e = ec(e, o), e.unshift(o);
    },
    remove: (o) => {
      var s, a;
      e = ec(e, o), (a = (s = e[0]) == null ? void 0 : s.resume) == null || a.call(s);
    }
  };
}, mb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Un(o, t), document.activeElement !== n)
      return;
}, tc = hb(), gb = () => jr.value > il.value, nr = () => {
  ll.value = "pointer", jr.value = window.performance.now();
}, nc = () => {
  ll.value = "keyboard", jr.value = window.performance.now();
}, vb = () => (nt(() => {
  tr === 0 && (document.addEventListener("mousedown", nr), document.addEventListener("touchstart", nr), document.addEventListener("keydown", nc)), tr++;
}), _n(() => {
  tr--, tr <= 0 && (document.removeEventListener("mousedown", nr), document.removeEventListener("touchstart", nr), document.removeEventListener("keydown", nc));
}), {
  focusReason: ll,
  lastUserFocusTimestamp: jr,
  lastAutomatedFocusTimestamp: il
}), or = (e) => new CustomEvent(cb, {
  ...ub,
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
let Zo = [];
const oc = (e) => {
  e.code === $n.esc && Zo.forEach((t) => t(e));
}, bb = (e) => {
  nt(() => {
    Zo.length === 0 && document.addEventListener("keydown", oc), Ue && Zo.push(e);
  }), _n(() => {
    Zo = Zo.filter((t) => t !== e), Zo.length === 0 && Ue && document.removeEventListener("keydown", oc);
  });
}, yb = se({
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
    Xi,
    Qi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = N();
    let o, s;
    const { focusReason: a } = vb();
    bb((m) => {
      e.trapped && !r.paused && t("release-requested", m);
    });
    const r = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (m) => {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const { code: b, altKey: C, ctrlKey: _, metaKey: M, currentTarget: V, shiftKey: L } = m, { loop: I } = e, O = b === $n.tab && !C && !_ && !M, R = document.activeElement;
      if (O && R) {
        const Y = V, [F, oe] = fb(Y);
        if (F && oe) {
          if (!L && R === oe) {
            const ae = or({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (m.preventDefault(), I && Un(F, !0));
          } else if (L && [F, Y].includes(R)) {
            const ae = or({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (m.preventDefault(), I && Un(oe, !0));
          }
        } else if (R === Y) {
          const ae = or({
            focusReason: a.value
          });
          t("focusout-prevented", ae), ae.defaultPrevented || m.preventDefault();
        }
      }
    };
    yn(qu, {
      focusTrapRef: n,
      onKeydown: i
    }), he(() => e.focusTrapEl, (m) => {
      m && (n.value = m);
    }, { immediate: !0 }), he([n], ([m], [b]) => {
      m && (m.addEventListener("keydown", i), m.addEventListener("focusin", d), m.addEventListener("focusout", h)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", d), b.removeEventListener("focusout", h));
    });
    const c = (m) => {
      t(Xi, m);
    }, u = (m) => t(Qi, m), d = (m) => {
      const b = l(n);
      if (!b)
        return;
      const C = m.target, _ = m.relatedTarget, M = C && b.contains(C);
      e.trapped || _ && b.contains(_) || (o = _), M && t("focusin", m), !r.paused && e.trapped && (M ? s = C : Un(s, !0));
    }, h = (m) => {
      const b = l(n);
      if (!(r.paused || !b))
        if (e.trapped) {
          const C = m.relatedTarget;
          !Yn(C) && !b.contains(C) && setTimeout(() => {
            if (!r.paused && e.trapped) {
              const _ = or({
                focusReason: a.value
              });
              t("focusout-prevented", _), _.defaultPrevented || Un(s, !0);
            }
          }, 0);
        } else {
          const C = m.target;
          C && b.contains(C) || t("focusout", m);
        }
    };
    async function g() {
      await Ke();
      const m = l(n);
      if (m) {
        tc.push(r);
        const b = m.contains(document.activeElement) ? o : document.activeElement;
        if (o = b, !m.contains(b)) {
          const _ = new Event(sa, Yi);
          m.addEventListener(sa, c), m.dispatchEvent(_), _.defaultPrevented || Ke(() => {
            let M = e.focusStartEl;
            qt(M) || (Un(M), document.activeElement !== M && (M = "first")), M === "first" && mb(Ku(m), !0), (document.activeElement === b || M === "container") && Un(m);
          });
        }
      }
    }
    function w() {
      const m = l(n);
      if (m) {
        m.removeEventListener(sa, c);
        const b = new CustomEvent(ra, {
          ...Yi,
          detail: {
            focusReason: a.value
          }
        });
        m.addEventListener(ra, u), m.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !gb() || m.contains(document.activeElement)) && Un(o ?? document.body), m.removeEventListener(ra, u), tc.remove(r);
      }
    }
    return nt(() => {
      e.trapped && g(), he(() => e.trapped, (m) => {
        m ? g() : w();
      });
    }), _n(() => {
      e.trapped && w(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", h), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function wb(e, t, n, o, s, a) {
  return ce(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Zu = /* @__PURE__ */ He(yb, [["render", wb], ["__file", "focus-trap.vue"]]), Vt = "top", sn = "bottom", rn = "right", Ht = "left", cl = "auto", Ws = [Vt, sn, rn, Ht], ts = "start", Bs = "end", _b = "clippingParents", Yu = "viewport", ms = "popper", kb = "reference", sc = Ws.reduce(function(e, t) {
  return e.concat([t + "-" + ts, t + "-" + Bs]);
}, []), Vr = [].concat(Ws, [cl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ts, t + "-" + Bs]);
}, []), Tb = "beforeRead", Sb = "read", Ab = "afterRead", Cb = "beforeMain", Eb = "main", xb = "afterMain", Lb = "beforeWrite", Ib = "write", Ob = "afterWrite", $b = [Tb, Sb, Ab, Cb, Eb, xb, Lb, Ib, Ob];
function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Kt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Lo(e) {
  var t = Kt(e).Element;
  return e instanceof t || e instanceof Element;
}
function on(e) {
  var t = Kt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ul(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Kt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rb(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, a = t.elements[n];
    !on(a) || !Nn(a) || (Object.assign(a.style, o), Object.keys(s).forEach(function(r) {
      var i = s[r];
      i === !1 ? a.removeAttribute(r) : a.setAttribute(r, i === !0 ? "" : i);
    }));
  });
}
function Mb(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var s = t.elements[o], a = t.attributes[o] || {}, r = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = r.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !on(s) || !Nn(s) || (Object.assign(s.style, i), Object.keys(a).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
var Xu = { name: "applyStyles", enabled: !0, phase: "write", fn: Rb, effect: Mb, requires: ["computeStyles"] };
function Rn(e) {
  return e.split("-")[0];
}
var So = Math.max, Ar = Math.min, ns = Math.round;
function Ca() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qu() {
  return !/^((?!chrome|android).)*safari/i.test(Ca());
}
function os(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, a = 1;
  t && on(e) && (s = e.offsetWidth > 0 && ns(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ns(o.height) / e.offsetHeight || 1);
  var r = Lo(e) ? Kt(e) : window, i = r.visualViewport, c = !Qu() && n, u = (o.left + (c && i ? i.offsetLeft : 0)) / s, d = (o.top + (c && i ? i.offsetTop : 0)) / a, h = o.width / s, g = o.height / a;
  return { width: h, height: g, top: d, right: u + h, bottom: d + g, left: u, x: u, y: d };
}
function dl(e) {
  var t = os(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ju(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ul(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Xn(e) {
  return Kt(e).getComputedStyle(e);
}
function Pb(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0;
}
function mo(e) {
  return ((Lo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Hr(e) {
  return Nn(e) === "html" ? e : e.assignedSlot || e.parentNode || (ul(e) ? e.host : null) || mo(e);
}
function rc(e) {
  return !on(e) || Xn(e).position === "fixed" ? null : e.offsetParent;
}
function Nb(e) {
  var t = /firefox/i.test(Ca()), n = /Trident/i.test(Ca());
  if (n && on(e)) {
    var o = Xn(e);
    if (o.position === "fixed") return null;
  }
  var s = Hr(e);
  for (ul(s) && (s = s.host); on(s) && ["html", "body"].indexOf(Nn(s)) < 0; ) {
    var a = Xn(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function Us(e) {
  for (var t = Kt(e), n = rc(e); n && Pb(n) && Xn(n).position === "static"; ) n = rc(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && Xn(n).position === "static") ? t : n || Nb(e) || t;
}
function fl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ls(e, t, n) {
  return So(e, Ar(t, n));
}
function Db(e, t, n) {
  var o = Ls(e, t, n);
  return o > n ? n : o;
}
function ed() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function td(e) {
  return Object.assign({}, ed(), e);
}
function nd(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var zb = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, td(typeof e != "number" ? e : nd(e, Ws));
};
function Bb(e) {
  var t, n = e.state, o = e.name, s = e.options, a = n.elements.arrow, r = n.modifiersData.popperOffsets, i = Rn(n.placement), c = fl(i), u = [Ht, rn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !r)) {
    var h = zb(s.padding, n), g = dl(a), w = c === "y" ? Vt : Ht, m = c === "y" ? sn : rn, b = n.rects.reference[d] + n.rects.reference[c] - r[c] - n.rects.popper[d], C = r[c] - n.rects.reference[c], _ = Us(a), M = _ ? c === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, V = b / 2 - C / 2, L = h[w], I = M - g[d] - h[m], O = M / 2 - g[d] / 2 + V, R = Ls(L, O, I), Y = c;
    n.modifiersData[o] = (t = {}, t[Y] = R, t.centerOffset = R - O, t);
  }
}
function Fb(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || Ju(t.elements.popper, s) && (t.elements.arrow = s));
}
var jb = { name: "arrow", enabled: !0, phase: "main", fn: Bb, effect: Fb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ss(e) {
  return e.split("-")[1];
}
var Vb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Hb(e, t) {
  var n = e.x, o = e.y, s = t.devicePixelRatio || 1;
  return { x: ns(n * s) / s || 0, y: ns(o * s) / s || 0 };
}
function ac(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, a = e.variation, r = e.offsets, i = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, h = e.isFixed, g = r.x, w = g === void 0 ? 0 : g, m = r.y, b = m === void 0 ? 0 : m, C = typeof d == "function" ? d({ x: w, y: b }) : { x: w, y: b };
  w = C.x, b = C.y;
  var _ = r.hasOwnProperty("x"), M = r.hasOwnProperty("y"), V = Ht, L = Vt, I = window;
  if (u) {
    var O = Us(n), R = "clientHeight", Y = "clientWidth";
    if (O === Kt(n) && (O = mo(n), Xn(O).position !== "static" && i === "absolute" && (R = "scrollHeight", Y = "scrollWidth")), O = O, s === Vt || (s === Ht || s === rn) && a === Bs) {
      L = sn;
      var F = h && O === I && I.visualViewport ? I.visualViewport.height : O[R];
      b -= F - o.height, b *= c ? 1 : -1;
    }
    if (s === Ht || (s === Vt || s === sn) && a === Bs) {
      V = rn;
      var oe = h && O === I && I.visualViewport ? I.visualViewport.width : O[Y];
      w -= oe - o.width, w *= c ? 1 : -1;
    }
  }
  var U = Object.assign({ position: i }, u && Vb), ae = d === !0 ? Hb({ x: w, y: b }, Kt(n)) : { x: w, y: b };
  if (w = ae.x, b = ae.y, c) {
    var fe;
    return Object.assign({}, U, (fe = {}, fe[L] = M ? "0" : "", fe[V] = _ ? "0" : "", fe.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", fe));
  }
  return Object.assign({}, U, (t = {}, t[L] = M ? b + "px" : "", t[V] = _ ? w + "px" : "", t.transform = "", t));
}
function Wb(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, a = n.adaptive, r = a === void 0 ? !0 : a, i = n.roundOffsets, c = i === void 0 ? !0 : i, u = { placement: Rn(t.placement), variation: ss(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ac(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: r, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ac(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var od = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Wb, data: {} }, sr = { passive: !0 };
function Ub(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, a = s === void 0 ? !0 : s, r = o.resize, i = r === void 0 ? !0 : r, c = Kt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, sr);
  }), i && c.addEventListener("resize", n.update, sr), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, sr);
    }), i && c.removeEventListener("resize", n.update, sr);
  };
}
var sd = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ub, data: {} }, Gb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ur(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Gb[t];
  });
}
var qb = { start: "end", end: "start" };
function lc(e) {
  return e.replace(/start|end/g, function(t) {
    return qb[t];
  });
}
function pl(e) {
  var t = Kt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function hl(e) {
  return os(mo(e)).left + pl(e).scrollLeft;
}
function Kb(e, t) {
  var n = Kt(e), o = mo(e), s = n.visualViewport, a = o.clientWidth, r = o.clientHeight, i = 0, c = 0;
  if (s) {
    a = s.width, r = s.height;
    var u = Qu();
    (u || !u && t === "fixed") && (i = s.offsetLeft, c = s.offsetTop);
  }
  return { width: a, height: r, x: i + hl(e), y: c };
}
function Zb(e) {
  var t, n = mo(e), o = pl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, a = So(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = So(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -o.scrollLeft + hl(e), c = -o.scrollTop;
  return Xn(s || n).direction === "rtl" && (i += So(n.clientWidth, s ? s.clientWidth : 0) - a), { width: a, height: r, x: i, y: c };
}
function ml(e) {
  var t = Xn(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function rd(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : on(e) && ml(e) ? e : rd(Hr(e));
}
function Is(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = rd(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Kt(o), r = s ? [a].concat(a.visualViewport || [], ml(o) ? o : []) : o, i = t.concat(r);
  return s ? i : i.concat(Is(Hr(r)));
}
function Ea(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Yb(e, t) {
  var n = os(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ic(e, t, n) {
  return t === Yu ? Ea(Kb(e, n)) : Lo(t) ? Yb(t, n) : Ea(Zb(mo(e)));
}
function Xb(e) {
  var t = Is(Hr(e)), n = ["absolute", "fixed"].indexOf(Xn(e).position) >= 0, o = n && on(e) ? Us(e) : e;
  return Lo(o) ? t.filter(function(s) {
    return Lo(s) && Ju(s, o) && Nn(s) !== "body";
  }) : [];
}
function Qb(e, t, n, o) {
  var s = t === "clippingParents" ? Xb(e) : [].concat(t), a = [].concat(s, [n]), r = a[0], i = a.reduce(function(c, u) {
    var d = ic(e, u, o);
    return c.top = So(d.top, c.top), c.right = Ar(d.right, c.right), c.bottom = Ar(d.bottom, c.bottom), c.left = So(d.left, c.left), c;
  }, ic(e, r, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ad(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? Rn(o) : null, a = o ? ss(o) : null, r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
  switch (s) {
    case Vt:
      c = { x: r, y: t.y - n.height };
      break;
    case sn:
      c = { x: r, y: t.y + t.height };
      break;
    case rn:
      c = { x: t.x + t.width, y: i };
      break;
    case Ht:
      c = { x: t.x - n.width, y: i };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = s ? fl(s) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case ts:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Bs:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Fs(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, a = n.strategy, r = a === void 0 ? e.strategy : a, i = n.boundary, c = i === void 0 ? _b : i, u = n.rootBoundary, d = u === void 0 ? Yu : u, h = n.elementContext, g = h === void 0 ? ms : h, w = n.altBoundary, m = w === void 0 ? !1 : w, b = n.padding, C = b === void 0 ? 0 : b, _ = td(typeof C != "number" ? C : nd(C, Ws)), M = g === ms ? kb : ms, V = e.rects.popper, L = e.elements[m ? M : g], I = Qb(Lo(L) ? L : L.contextElement || mo(e.elements.popper), c, d, r), O = os(e.elements.reference), R = ad({ reference: O, element: V, placement: s }), Y = Ea(Object.assign({}, V, R)), F = g === ms ? Y : O, oe = { top: I.top - F.top + _.top, bottom: F.bottom - I.bottom + _.bottom, left: I.left - F.left + _.left, right: F.right - I.right + _.right }, U = e.modifiersData.offset;
  if (g === ms && U) {
    var ae = U[s];
    Object.keys(oe).forEach(function(fe) {
      var de = [rn, sn].indexOf(fe) >= 0 ? 1 : -1, $ = [Vt, sn].indexOf(fe) >= 0 ? "y" : "x";
      oe[fe] += ae[$] * de;
    });
  }
  return oe;
}
function Jb(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, a = n.rootBoundary, r = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Vr : c, d = ss(o), h = d ? i ? sc : sc.filter(function(m) {
    return ss(m) === d;
  }) : Ws, g = h.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  g.length === 0 && (g = h);
  var w = g.reduce(function(m, b) {
    return m[b] = Fs(e, { placement: b, boundary: s, rootBoundary: a, padding: r })[Rn(b)], m;
  }, {});
  return Object.keys(w).sort(function(m, b) {
    return w[m] - w[b];
  });
}
function ey(e) {
  if (Rn(e) === cl) return [];
  var t = ur(e);
  return [lc(e), t, lc(t)];
}
function ty(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, a = s === void 0 ? !0 : s, r = n.altAxis, i = r === void 0 ? !0 : r, c = n.fallbackPlacements, u = n.padding, d = n.boundary, h = n.rootBoundary, g = n.altBoundary, w = n.flipVariations, m = w === void 0 ? !0 : w, b = n.allowedAutoPlacements, C = t.options.placement, _ = Rn(C), M = _ === C, V = c || (M || !m ? [ur(C)] : ey(C)), L = [C].concat(V).reduce(function(j, K) {
      return j.concat(Rn(K) === cl ? Jb(t, { placement: K, boundary: d, rootBoundary: h, padding: u, flipVariations: m, allowedAutoPlacements: b }) : K);
    }, []), I = t.rects.reference, O = t.rects.popper, R = /* @__PURE__ */ new Map(), Y = !0, F = L[0], oe = 0; oe < L.length; oe++) {
      var U = L[oe], ae = Rn(U), fe = ss(U) === ts, de = [Vt, sn].indexOf(ae) >= 0, $ = de ? "width" : "height", H = Fs(t, { placement: U, boundary: d, rootBoundary: h, altBoundary: g, padding: u }), B = de ? fe ? rn : Ht : fe ? sn : Vt;
      I[$] > O[$] && (B = ur(B));
      var ue = ur(B), pe = [];
      if (a && pe.push(H[ae] <= 0), i && pe.push(H[B] <= 0, H[ue] <= 0), pe.every(function(j) {
        return j;
      })) {
        F = U, Y = !1;
        break;
      }
      R.set(U, pe);
    }
    if (Y) for (var ke = m ? 3 : 1, je = function(j) {
      var K = L.find(function(ge) {
        var Ce = R.get(ge);
        if (Ce) return Ce.slice(0, j).every(function(ne) {
          return ne;
        });
      });
      if (K) return F = K, "break";
    }, Ge = ke; Ge > 0; Ge--) {
      var Se = je(Ge);
      if (Se === "break") break;
    }
    t.placement !== F && (t.modifiersData[o]._skip = !0, t.placement = F, t.reset = !0);
  }
}
var ny = { name: "flip", enabled: !0, phase: "main", fn: ty, requiresIfExists: ["offset"], data: { _skip: !1 } };
function cc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function uc(e) {
  return [Vt, rn, sn, Ht].some(function(t) {
    return e[t] >= 0;
  });
}
function oy(e) {
  var t = e.state, n = e.name, o = t.rects.reference, s = t.rects.popper, a = t.modifiersData.preventOverflow, r = Fs(t, { elementContext: "reference" }), i = Fs(t, { altBoundary: !0 }), c = cc(r, o), u = cc(i, s, a), d = uc(c), h = uc(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: h }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": h });
}
var sy = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: oy };
function ry(e, t, n) {
  var o = Rn(e), s = [Ht, Vt].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, r = a[0], i = a[1];
  return r = r || 0, i = (i || 0) * s, [Ht, rn].indexOf(o) >= 0 ? { x: i, y: r } : { x: r, y: i };
}
function ay(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, a = s === void 0 ? [0, 0] : s, r = Vr.reduce(function(d, h) {
    return d[h] = ry(h, t.rects, a), d;
  }, {}), i = r[t.placement], c = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = r;
}
var ly = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ay };
function iy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ad({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var ld = { name: "popperOffsets", enabled: !0, phase: "read", fn: iy, data: {} };
function cy(e) {
  return e === "x" ? "y" : "x";
}
function uy(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, a = s === void 0 ? !0 : s, r = n.altAxis, i = r === void 0 ? !1 : r, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, h = n.padding, g = n.tether, w = g === void 0 ? !0 : g, m = n.tetherOffset, b = m === void 0 ? 0 : m, C = Fs(t, { boundary: c, rootBoundary: u, padding: h, altBoundary: d }), _ = Rn(t.placement), M = ss(t.placement), V = !M, L = fl(_), I = cy(L), O = t.modifiersData.popperOffsets, R = t.rects.reference, Y = t.rects.popper, F = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, oe = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ae = { x: 0, y: 0 };
  if (O) {
    if (a) {
      var fe, de = L === "y" ? Vt : Ht, $ = L === "y" ? sn : rn, H = L === "y" ? "height" : "width", B = O[L], ue = B + C[de], pe = B - C[$], ke = w ? -Y[H] / 2 : 0, je = M === ts ? R[H] : Y[H], Ge = M === ts ? -Y[H] : -R[H], Se = t.elements.arrow, j = w && Se ? dl(Se) : { width: 0, height: 0 }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ed(), ge = K[de], Ce = K[$], ne = Ls(0, R[H], j[H]), Z = V ? R[H] / 2 - ke - ne - ge - oe.mainAxis : je - ne - ge - oe.mainAxis, dt = V ? -R[H] / 2 + ke + ne + Ce + oe.mainAxis : Ge + ne + Ce + oe.mainAxis, Ee = t.elements.arrow && Us(t.elements.arrow), _t = Ee ? L === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, ct = (fe = U?.[L]) != null ? fe : 0, ut = B + Z - ct - _t, xt = B + dt - ct, Ye = Ls(w ? Ar(ue, ut) : ue, B, w ? So(pe, xt) : pe);
      O[L] = Ye, ae[L] = Ye - B;
    }
    if (i) {
      var ot, st = L === "x" ? Vt : Ht, Dt = L === "x" ? sn : rn, We = O[I], Je = I === "y" ? "height" : "width", Wt = We + C[st], kt = We - C[Dt], q = [Vt, Ht].indexOf(_) !== -1, we = (ot = U?.[I]) != null ? ot : 0, mt = q ? Wt : We - R[Je] - Y[Je] - we + oe.altAxis, Lt = q ? We + R[Je] + Y[Je] - we - oe.altAxis : kt, xe = w && q ? Db(mt, We, Lt) : Ls(w ? mt : Wt, We, w ? Lt : kt);
      O[I] = xe, ae[I] = xe - We;
    }
    t.modifiersData[o] = ae;
  }
}
var dy = { name: "preventOverflow", enabled: !0, phase: "main", fn: uy, requiresIfExists: ["offset"] };
function fy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function py(e) {
  return e === Kt(e) || !on(e) ? pl(e) : fy(e);
}
function hy(e) {
  var t = e.getBoundingClientRect(), n = ns(t.width) / e.offsetWidth || 1, o = ns(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function my(e, t, n) {
  n === void 0 && (n = !1);
  var o = on(t), s = on(t) && hy(t), a = mo(t), r = os(e, s, n), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (o || !o && !n) && ((Nn(t) !== "body" || ml(a)) && (i = py(t)), on(t) ? (c = os(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = hl(a))), { x: r.left + i.scrollLeft - c.x, y: r.top + i.scrollTop - c.y, width: r.width, height: r.height };
}
function gy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function s(a) {
    n.add(a.name);
    var r = [].concat(a.requires || [], a.requiresIfExists || []);
    r.forEach(function(i) {
      if (!n.has(i)) {
        var c = t.get(i);
        c && s(c);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || s(a);
  }), o;
}
function vy(e) {
  var t = gy(e);
  return $b.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function by(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function yy(e) {
  var t = e.reduce(function(n, o) {
    var s = n[o.name];
    return n[o.name] = s ? Object.assign({}, s, o, { options: Object.assign({}, s.options, o.options), data: Object.assign({}, s.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var dc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function gl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, a = s === void 0 ? dc : s;
  return function(r, i, c) {
    c === void 0 && (c = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, dc, a), modifiersData: {}, elements: { reference: r, popper: i }, attributes: {}, styles: {} }, d = [], h = !1, g = { state: u, setOptions: function(b) {
      var C = typeof b == "function" ? b(u.options) : b;
      m(), u.options = Object.assign({}, a, u.options, C), u.scrollParents = { reference: Lo(r) ? Is(r) : r.contextElement ? Is(r.contextElement) : [], popper: Is(i) };
      var _ = vy(yy([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = _.filter(function(M) {
        return M.enabled;
      }), w(), g.update();
    }, forceUpdate: function() {
      if (!h) {
        var b = u.elements, C = b.reference, _ = b.popper;
        if (fc(C, _)) {
          u.rects = { reference: my(C, Us(_), u.options.strategy === "fixed"), popper: dl(_) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
            return u.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var M = 0; M < u.orderedModifiers.length; M++) {
            if (u.reset === !0) {
              u.reset = !1, M = -1;
              continue;
            }
            var V = u.orderedModifiers[M], L = V.fn, I = V.options, O = I === void 0 ? {} : I, R = V.name;
            typeof L == "function" && (u = L({ state: u, options: O, name: R, instance: g }) || u);
          }
        }
      }
    }, update: by(function() {
      return new Promise(function(b) {
        g.forceUpdate(), b(u);
      });
    }), destroy: function() {
      m(), h = !0;
    } };
    if (!fc(r, i)) return g;
    g.setOptions(c).then(function(b) {
      !h && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function w() {
      u.orderedModifiers.forEach(function(b) {
        var C = b.name, _ = b.options, M = _ === void 0 ? {} : _, V = b.effect;
        if (typeof V == "function") {
          var L = V({ state: u, name: C, instance: g, options: M }), I = function() {
          };
          d.push(L || I);
        }
      });
    }
    function m() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return g;
  };
}
gl();
var wy = [sd, ld, od, Xu];
gl({ defaultModifiers: wy });
var _y = [sd, ld, od, Xu, ly, ny, dy, jb, sy], ky = gl({ defaultModifiers: _y });
const Ty = ["fixed", "absolute"], Sy = Fe({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: me(Array),
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
    values: Vr,
    default: "bottom"
  },
  popperOptions: {
    type: me(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Ty,
    default: "absolute"
  }
}), id = Fe({
  ...Sy,
  id: String,
  style: {
    type: me([String, Array, Object])
  },
  className: {
    type: me([String, Array, Object])
  },
  effect: {
    type: me(String),
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
    type: me([String, Array, Object])
  },
  popperStyle: {
    type: me([String, Array, Object])
  },
  referenceEl: {
    type: me(Object)
  },
  triggerTargetEl: {
    type: me(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...us(["ariaLabel"])
}), Ay = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Cy = (e, t) => {
  const n = N(!1), o = N();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Ey = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: s } = e, a = {
    placement: n,
    strategy: o,
    ...s,
    modifiers: [...Ly(e), ...t]
  };
  return Iy(a, s?.modifiers), a;
}, xy = (e) => {
  if (Ue)
    return Kn(e);
};
function Ly(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
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
        fallbackPlacements: o
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
function Iy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Oy = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = $y(c);
      Object.assign(r.value, u);
    },
    requires: ["computeStyles"]
  }, s = A(() => {
    const { onFirstUpdate: c, placement: u, strategy: d, modifiers: h } = l(n);
    return {
      onFirstUpdate: c,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...h || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = uo(), r = N({
    styles: {
      popper: {
        position: l(s).strategy,
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
  return he(s, (c) => {
    const u = l(a);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), he([e, t], ([c, u]) => {
    i(), !(!c || !u) && (a.value = ky(c, u, l(s)));
  }), _n(() => {
    i();
  }), {
    state: A(() => {
      var c;
      return { ...((c = l(a)) == null ? void 0 : c.state) || {} };
    }),
    styles: A(() => l(r).styles),
    attributes: A(() => l(r).attributes),
    update: () => {
      var c;
      return (c = l(a)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = l(a)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: A(() => l(a))
  };
};
function $y(e) {
  const t = Object.keys(e.elements), n = yr(t.map((s) => [s, e.styles[s] || {}])), o = yr(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: o
  };
}
const Ry = 0, My = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: s } = Me(al, void 0), a = N(), r = N(), i = A(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = A(() => {
    var _;
    const M = l(a), V = (_ = l(r)) != null ? _ : Ry;
    return {
      name: "arrow",
      enabled: !hu(M),
      options: {
        element: M,
        padding: V
      }
    };
  }), u = A(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...Ey(e, [
      l(c),
      l(i)
    ])
  })), d = A(() => xy(e.referenceEl) || l(o)), { attributes: h, state: g, styles: w, update: m, forceUpdate: b, instanceRef: C } = Oy(d, n, u);
  return he(C, (_) => t.value = _), nt(() => {
    he(() => {
      var _;
      return (_ = l(d)) == null ? void 0 : _.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: h,
    arrowRef: a,
    contentRef: n,
    instanceRef: C,
    state: g,
    styles: w,
    role: s,
    forceUpdate: b,
    update: m
  };
}, Py = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: s } = el(), a = Qe("popper"), r = A(() => l(t).popper), i = N(Be(e.zIndex) ? e.zIndex : s()), c = A(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = A(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = A(() => o.value === "dialog" ? "false" : void 0), h = A(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: h,
    contentAttrs: r,
    contentClass: c,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Be(e.zIndex) ? e.zIndex : s();
    }
  };
}, Ny = se({
  name: "ElPopperContent"
}), Dy = /* @__PURE__ */ se({
  ...Ny,
  props: id,
  emits: Ay,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: s,
      trapped: a,
      onFocusAfterReleased: r,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Cy(o, n), { attributes: h, arrowRef: g, contentRef: w, styles: m, instanceRef: b, role: C, update: _ } = My(o), {
      ariaModal: M,
      arrowStyle: V,
      contentAttrs: L,
      contentClass: I,
      contentStyle: O,
      updateZIndex: R
    } = Py(o, {
      styles: m,
      attributes: h,
      role: C
    }), Y = Me(Sr, void 0), F = N();
    yn(ju, {
      arrowStyle: V,
      arrowRef: g,
      arrowOffset: F
    }), Y && yn(Sr, {
      ...Y,
      addInputId: fo,
      removeInputId: fo
    });
    let oe;
    const U = (fe = !0) => {
      _(), fe && R();
    }, ae = () => {
      U(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return nt(() => {
      he(() => o.triggerTargetEl, (fe, de) => {
        oe?.(), oe = void 0;
        const $ = l(fe || w.value), H = l(de || w.value);
        vn($) && (oe = he([C, () => o.ariaLabel, M, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ue, pe) => {
            Yn(B[pe]) ? $.removeAttribute(ue) : $.setAttribute(ue, B[pe]);
          });
        }, { immediate: !0 })), H !== $ && vn(H) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          H.removeAttribute(B);
        });
      }, { immediate: !0 }), he(() => o.visible, ae, { immediate: !0 });
    }), _n(() => {
      oe?.(), oe = void 0;
    }), t({
      popperContentRef: w,
      popperInstanceRef: b,
      updatePopper: U,
      contentStyle: O
    }), (fe, de) => (S(), D("div", Ao({
      ref_key: "contentRef",
      ref: w
    }, l(L), {
      style: l(O),
      class: l(I),
      tabindex: "-1",
      onMouseenter: ($) => fe.$emit("mouseenter", $),
      onMouseleave: ($) => fe.$emit("mouseleave", $)
    }), [
      k(l(Zu), {
        trapped: l(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(w),
        "focus-start-el": l(s),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(r),
        onFocusin: l(c),
        onFocusoutPrevented: l(u),
        onReleaseRequested: l(d)
      }, {
        default: ee(() => [
          ce(fe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var zy = /* @__PURE__ */ He(Dy, [["__file", "content.vue"]]);
const By = kn(Q0), vl = Symbol("elTooltip");
function pc() {
  let e;
  const t = (o, s) => {
    n(), e = window.setTimeout(o, s);
  }, n = () => window.clearTimeout(e);
  return Hs(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Fy = Fe({
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
}), jy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: s
}) => {
  const { registerTimeout: a } = pc(), {
    registerTimeout: r,
    cancelTimeout: i
  } = pc();
  return {
    onOpen: (d) => {
      a(() => {
        o(d);
        const h = l(n);
        Be(h) && h > 0 && r(() => {
          s(d);
        }, h);
      }, l(e));
    },
    onClose: (d) => {
      i(), a(() => {
        s(d);
      }, l(t));
    }
  };
}, bl = Fe({
  ...Fy,
  ...id,
  appendTo: {
    type: me([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: me(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...us(["ariaLabel"])
}), cd = Fe({
  ...Wu,
  disabled: Boolean,
  trigger: {
    type: me([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: me(Array),
    default: () => [$n.enter, $n.numpadEnter, $n.space]
  }
}), Vy = zr({
  type: me(Boolean),
  default: null
}), Hy = zr({
  type: me(Function)
}), Wy = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], s = {
    [e]: Vy,
    [n]: Hy
  };
  return {
    useModelToggle: ({
      indicator: r,
      toggleReason: i,
      shouldHideWhenRouteChanges: c,
      shouldProceed: u,
      onShow: d,
      onHide: h
    }) => {
      const g = Et(), { emit: w } = g, m = g.props, b = A(() => tt(m[n])), C = A(() => m[e] === null), _ = (R) => {
        r.value !== !0 && (r.value = !0, i && (i.value = R), tt(d) && d(R));
      }, M = (R) => {
        r.value !== !1 && (r.value = !1, i && (i.value = R), tt(h) && h(R));
      }, V = (R) => {
        if (m.disabled === !0 || tt(u) && !u())
          return;
        const Y = b.value && Ue;
        Y && w(t, !0), (C.value || !Y) && _(R);
      }, L = (R) => {
        if (m.disabled === !0 || !Ue)
          return;
        const Y = b.value && Ue;
        Y && w(t, !1), (C.value || !Y) && M(R);
      }, I = (R) => {
        zs(R) && (m.disabled && R ? b.value && w(t, !1) : r.value !== R && (R ? _() : M()));
      }, O = () => {
        r.value ? L() : V();
      };
      return he(() => m[e], I), c && g.appContext.config.globalProperties.$route !== void 0 && he(() => ({
        ...g.proxy.$route
      }), () => {
        c.value && r.value && L();
      }), nt(() => {
        I(m[e]);
      }), {
        hide: L,
        show: V,
        toggle: O,
        hasUpdateHandler: b
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Uy,
  useModelToggleEmits: Gy,
  useModelToggle: qy
} = Wy("visible"), Ky = Fe({
  ...Vu,
  ...Uy,
  ...bl,
  ...cd,
  ...Hu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Zy = [
  ...Gy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Yy = (e, t) => In(e) ? e.includes(t) : e === t, Wo = (e, t, n) => (o) => {
  Yy(l(e), t) && n(o);
}, Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const a = e?.(s);
  if (n === !1 || !a)
    return t?.(s);
}, Xy = se({
  name: "ElTooltipTrigger"
}), Qy = /* @__PURE__ */ se({
  ...Xy,
  props: cd,
  setup(e, { expose: t }) {
    const n = e, o = Qe("tooltip"), { controlled: s, id: a, open: r, onOpen: i, onClose: c, onToggle: u } = Me(vl, void 0), d = N(null), h = () => {
      if (l(s) || n.disabled)
        return !0;
    }, g = qn(n, "trigger"), w = Gn(h, Wo(g, "hover", i)), m = Gn(h, Wo(g, "hover", c)), b = Gn(h, Wo(g, "click", (L) => {
      L.button === 0 && u(L);
    })), C = Gn(h, Wo(g, "focus", i)), _ = Gn(h, Wo(g, "focus", c)), M = Gn(h, Wo(g, "contextmenu", (L) => {
      L.preventDefault(), u(L);
    })), V = Gn(h, (L) => {
      const { code: I } = L;
      n.triggerKeys.includes(I) && (L.preventDefault(), u(L));
    });
    return t({
      triggerRef: d
    }), (L, I) => (S(), re(l(ib), {
      id: l(a),
      "virtual-ref": L.virtualRef,
      open: l(r),
      "virtual-triggering": L.virtualTriggering,
      class: z(l(o).e("trigger")),
      onBlur: l(_),
      onClick: l(b),
      onContextmenu: l(M),
      onFocus: l(C),
      onMouseenter: l(w),
      onMouseleave: l(m),
      onKeydown: l(V)
    }, {
      default: ee(() => [
        ce(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Jy = /* @__PURE__ */ He(Qy, [["__file", "trigger.vue"]]);
const e1 = Fe({
  to: {
    type: me([String, Object]),
    required: !0
  },
  disabled: Boolean
}), t1 = /* @__PURE__ */ se({
  __name: "teleport",
  props: e1,
  setup(e) {
    return (t, n) => t.disabled ? ce(t.$slots, "default", { key: 0 }) : (S(), re(Rf, {
      key: 1,
      to: t.to
    }, [
      ce(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var n1 = /* @__PURE__ */ He(t1, [["__file", "teleport.vue"]]);
const ud = kn(n1), dd = () => {
  const e = Wa(), t = Pu(), n = A(() => `${e.value}-popper-container-${t.prefix}`), o = A(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, o1 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, s1 = () => {
  const { id: e, selector: t } = dd();
  return Mf(() => {
    Ue && (document.body.querySelector(t.value) || o1(e.value));
  }), {
    id: e,
    selector: t
  };
}, r1 = se({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), a1 = /* @__PURE__ */ se({
  ...r1,
  props: bl,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = dd(), s = Qe("tooltip"), a = N();
    let r;
    const {
      controlled: i,
      id: c,
      open: u,
      trigger: d,
      onClose: h,
      onOpen: g,
      onShow: w,
      onHide: m,
      onBeforeShow: b,
      onBeforeHide: C
    } = Me(vl, void 0), _ = A(() => n.transition || `${s.namespace.value}-fade-in-linear`), M = A(() => n.persistent);
    _n(() => {
      r?.();
    });
    const V = A(() => l(M) ? !0 : l(u)), L = A(() => n.disabled ? !1 : l(u)), I = A(() => n.appendTo || o.value), O = A(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), R = N(!0), Y = () => {
      m(), H() && Un(document.body), R.value = !0;
    }, F = () => {
      if (l(i))
        return !0;
    }, oe = Gn(F, () => {
      n.enterable && l(d) === "hover" && g();
    }), U = Gn(F, () => {
      l(d) === "hover" && h();
    }), ae = () => {
      var B, ue;
      (ue = (B = a.value) == null ? void 0 : B.updatePopper) == null || ue.call(B), b?.();
    }, fe = () => {
      C?.();
    }, de = () => {
      w(), r = fv(A(() => {
        var B;
        return (B = a.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && h();
      });
    }, $ = () => {
      n.virtualTriggering || h();
    }, H = (B) => {
      var ue;
      const pe = (ue = a.value) == null ? void 0 : ue.popperContentRef, ke = B?.relatedTarget || document.activeElement;
      return pe?.contains(ke);
    };
    return he(() => l(u), (B) => {
      B ? R.value = !1 : r?.();
    }, {
      flush: "post"
    }), he(() => n.content, () => {
      var B, ue;
      (ue = (B = a.value) == null ? void 0 : B.updatePopper) == null || ue.call(B);
    }), t({
      contentRef: a,
      isFocusInsideContent: H
    }), (B, ue) => (S(), re(l(ud), {
      disabled: !B.teleported,
      to: l(I)
    }, {
      default: ee(() => [
        k(Oo, {
          name: l(_),
          onAfterLeave: Y,
          onBeforeEnter: ae,
          onAfterEnter: de,
          onBeforeLeave: fe
        }, {
          default: ee(() => [
            l(V) ? lt((S(), re(l(zy), Ao({
              key: 0,
              id: l(c),
              ref_key: "contentRef",
              ref: a
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": R.value,
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
              "popper-style": [B.popperStyle, l(O)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: l(L),
              "z-index": B.zIndex,
              onMouseenter: l(oe),
              onMouseleave: l(U),
              onBlur: $,
              onClose: l(h)
            }), {
              default: ee(() => [
                ce(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Mn, l(L)]
            ]) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var l1 = /* @__PURE__ */ He(a1, [["__file", "content.vue"]]);
const i1 = se({
  name: "ElTooltip"
}), c1 = /* @__PURE__ */ se({
  ...i1,
  props: Ky,
  emits: Zy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    s1();
    const s = es(), a = N(), r = N(), i = () => {
      var _;
      const M = l(a);
      M && ((_ = M.popperInstanceRef) == null || _.update());
    }, c = N(!1), u = N(), { show: d, hide: h, hasUpdateHandler: g } = qy({
      indicator: c,
      toggleReason: u
    }), { onOpen: w, onClose: m } = jy({
      showAfter: qn(o, "showAfter"),
      hideAfter: qn(o, "hideAfter"),
      autoClose: qn(o, "autoClose"),
      open: d,
      close: h
    }), b = A(() => zs(o.visible) && !g.value);
    yn(vl, {
      controlled: b,
      id: s,
      open: Ba(c),
      trigger: qn(o, "trigger"),
      onOpen: (_) => {
        w(_);
      },
      onClose: (_) => {
        m(_);
      },
      onToggle: (_) => {
        l(c) ? m(_) : w(_);
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
    }), he(() => o.disabled, (_) => {
      _ && c.value && (c.value = !1);
    });
    const C = (_) => {
      var M;
      return (M = r.value) == null ? void 0 : M.isFocusInsideContent(_);
    };
    return Pf(() => c.value && h()), t({
      popperRef: a,
      contentRef: r,
      isFocusInsideContent: C,
      updatePopper: i,
      onOpen: w,
      onClose: m,
      hide: h
    }), (_, M) => (S(), re(l(By), {
      ref_key: "popperRef",
      ref: a,
      role: _.role
    }, {
      default: ee(() => [
        k(Jy, {
          disabled: _.disabled,
          trigger: _.trigger,
          "trigger-keys": _.triggerKeys,
          "virtual-ref": _.virtualRef,
          "virtual-triggering": _.virtualTriggering
        }, {
          default: ee(() => [
            _.$slots.default ? ce(_.$slots, "default", { key: 0 }) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        k(l1, {
          ref_key: "contentRef",
          ref: r,
          "aria-label": _.ariaLabel,
          "boundaries-padding": _.boundariesPadding,
          content: _.content,
          disabled: _.disabled,
          effect: _.effect,
          enterable: _.enterable,
          "fallback-placements": _.fallbackPlacements,
          "hide-after": _.hideAfter,
          "gpu-acceleration": _.gpuAcceleration,
          offset: _.offset,
          persistent: _.persistent,
          "popper-class": _.popperClass,
          "popper-style": _.popperStyle,
          placement: _.placement,
          "popper-options": _.popperOptions,
          pure: _.pure,
          "raw-content": _.rawContent,
          "reference-el": _.referenceEl,
          "trigger-target-el": _.triggerTargetEl,
          "show-after": _.showAfter,
          strategy: _.strategy,
          teleported: _.teleported,
          transition: _.transition,
          "virtual-triggering": _.virtualTriggering,
          "z-index": _.zIndex,
          "append-to": _.appendTo
        }, {
          default: ee(() => [
            ce(_.$slots, "content", {}, () => [
              _.rawContent ? (S(), D("span", {
                key: 0,
                innerHTML: _.content
              }, null, 8, ["innerHTML"])) : (S(), D("span", { key: 1 }, E(_.content), 1))
            ]),
            _.showArrow ? (S(), re(l(tb), {
              key: 0,
              "arrow-offset": _.arrowOffset
            }, null, 8, ["arrow-offset"])) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var u1 = /* @__PURE__ */ He(c1, [["__file", "tooltip.vue"]]);
const d1 = kn(u1), f1 = Fe({
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
    type: me([String, Object, Array])
  },
  offset: {
    type: me(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), p1 = se({
  name: "ElBadge"
}), h1 = /* @__PURE__ */ se({
  ...p1,
  props: f1,
  setup(e, { expose: t }) {
    const n = e, o = Qe("badge"), s = A(() => n.isDot ? "" : Be(n.value) && Be(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = A(() => {
      var r, i, c, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: ho(-((i = (r = n.offset) == null ? void 0 : r[0]) != null ? i : 0)),
          marginTop: ho((u = (c = n.offset) == null ? void 0 : c[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: s
    }), (r, i) => (S(), D("div", {
      class: z(l(o).b())
    }, [
      ce(r.$slots, "default"),
      k(Oo, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          lt(f("sup", {
            class: z([
              l(o).e("content"),
              l(o).em("content", r.type),
              l(o).is("fixed", !!r.$slots.default),
              l(o).is("dot", r.isDot),
              l(o).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: ht(l(a))
          }, [
            ce(r.$slots, "content", { value: l(s) }, () => [
              pt(E(l(s)), 1)
            ])
          ], 6), [
            [Mn, !r.hidden && (l(s) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var m1 = /* @__PURE__ */ He(h1, [["__file", "badge.vue"]]);
const g1 = kn(m1), v1 = ({ from: e, replacement: t, scope: n, version: o, ref: s, type: a = "API" }, r) => {
  he(() => l(r), (i) => {
  }, {
    immediate: !0
  });
};
var dr = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(dr || {});
const b1 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), xa = Fe({
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
    values: _u
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), y1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, w1 = se({
  name: "ElTag"
}), _1 = /* @__PURE__ */ se({
  ...w1,
  props: xa,
  emits: y1,
  setup(e, { emit: t }) {
    const n = e, o = Fr(), s = Qe("tag"), a = A(() => {
      const { type: u, hit: d, effect: h, closable: g, round: w } = n;
      return [
        s.b(),
        s.is("closable", g),
        s.m(u || "primary"),
        s.m(o.value),
        s.m(h),
        s.is("hit", d),
        s.is("round", w)
      ];
    }), r = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, c = (u) => {
      var d, h, g;
      (g = (h = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : h.component) != null && g.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (S(), D("span", {
      key: 0,
      class: z(l(a)),
      style: ht({ backgroundColor: u.color }),
      onClick: i
    }, [
      f("span", {
        class: z(l(s).e("content"))
      }, [
        ce(u.$slots, "default")
      ], 2),
      u.closable ? (S(), re(l(Mt), {
        key: 0,
        class: z(l(s).e("close")),
        onClick: qe(r, ["stop"])
      }, {
        default: ee(() => [
          k(l(kr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Q("v-if", !0)
    ], 6)) : (S(), re(Oo, {
      key: 1,
      name: `${l(s).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: c
    }, {
      default: ee(() => [
        f("span", {
          class: z(l(a)),
          style: ht({ backgroundColor: u.color }),
          onClick: i
        }, [
          f("span", {
            class: z(l(s).e("content"))
          }, [
            ce(u.$slots, "default")
          ], 2),
          u.closable ? (S(), re(l(Mt), {
            key: 0,
            class: z(l(s).e("close")),
            onClick: qe(r, ["stop"])
          }, {
            default: ee(() => [
              k(l(kr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var k1 = /* @__PURE__ */ He(_1, [["__file", "tag.vue"]]);
const T1 = kn(k1), ro = /* @__PURE__ */ new Map();
if (Ue) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of ro.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function hc(e, t) {
  let n = [];
  return In(t.arg) ? n = t.arg : vn(t.arg) && n.push(t.arg), function(o, s) {
    const a = t.instance.popperRef, r = o.target, i = s?.target, c = !t || !t.instance, u = !r || !i, d = e.contains(r) || e.contains(i), h = e === r, g = n.length && n.some((m) => m?.contains(r)) || n.length && n.includes(i), w = a && (a.contains(r) || a.contains(i));
    c || u || d || h || g || w || t.value(o, s);
  };
}
const S1 = {
  beforeMount(e, t) {
    ro.has(e) || ro.set(e, []), ro.get(e).push({
      documentHandler: hc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ro.has(e) || ro.set(e, []);
    const n = ro.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), s = {
      documentHandler: hc(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, s) : n.push(s);
  },
  unmounted(e) {
    ro.delete(e);
  }
}, A1 = Fe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: me(Object)
  },
  size: Br,
  button: {
    type: me(Object)
  },
  experimentalFeatures: {
    type: me(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: me(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Su
}), pn = {};
se({
  name: "ElConfigProvider",
  props: A1,
  setup(e, { slots: t }) {
    he(() => e.message, (o) => {
      Object.assign(pn, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Cu(e);
    return () => ce(t, "default", { config: n?.value });
  }
});
const C1 = 100, E1 = 600, mc = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = C1, delay: s = E1 } = tt(n) ? {} : n;
    let a, r;
    const i = () => tt(n) ? n() : n.handler(), c = () => {
      r && (clearTimeout(r), r = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (c(), i(), document.addEventListener("mouseup", () => c(), {
        once: !0
      }), r = setTimeout(() => {
        a = setInterval(() => {
          i();
        }, o);
      }, s));
    });
  }
}, fd = (e) => {
  if (!e)
    return { onClick: fo, onMousedown: fo, onMouseup: fo };
  let t = !1, n = !1;
  return { onClick: (r) => {
    t && n && e(r), t = n = !1;
  }, onMousedown: (r) => {
    t = r.target === r.currentTarget;
  }, onMouseup: (r) => {
    n = r.target === r.currentTarget;
  } };
}, x1 = Fe({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: me([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: me([String, Number])
  }
}), L1 = {
  click: (e) => e instanceof MouseEvent
}, I1 = "overlay";
var O1 = se({
  name: "ElOverlay",
  props: x1,
  emits: L1,
  setup(e, { slots: t, emit: n }) {
    const o = Qe(I1), s = (c) => {
      n("click", c);
    }, { onClick: a, onMousedown: r, onMouseup: i } = fd(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? k("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: r,
      onMouseup: i
    }, [ce(t, "default")], dr.STYLE | dr.CLASS | dr.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Nf("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [ce(t, "default")]);
  }
});
const $1 = O1, pd = Symbol("dialogInjectionKey"), hd = Fe({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: xo
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), R1 = {
  close: () => !0
}, M1 = (e, t, n, o) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const a = (u) => {
    const d = u.clientX, h = u.clientY, { offsetX: g, offsetY: w } = s, m = e.value.getBoundingClientRect(), b = m.left, C = m.top, _ = m.width, M = m.height, V = document.documentElement.clientWidth, L = document.documentElement.clientHeight, I = -b + g, O = -C + w, R = V - b - _ + g, Y = L - C - M + w, F = (U) => {
      let ae = g + U.clientX - d, fe = w + U.clientY - h;
      o?.value || (ae = Math.min(Math.max(ae, I), R), fe = Math.min(Math.max(fe, O), Y)), s = {
        offsetX: ae,
        offsetY: fe
      }, e.value && (e.value.style.transform = `translate(${ho(ae)}, ${ho(fe)})`);
    }, oe = () => {
      document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", oe);
    };
    document.addEventListener("mousemove", F), document.addEventListener("mouseup", oe);
  }, r = () => {
    t.value && e.value && t.value.addEventListener("mousedown", a);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", a);
  }, c = () => {
    s = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return nt(() => {
    Fa(() => {
      n.value ? r() : i();
    });
  }), _n(() => {
    i();
  }), {
    resetPosition: c
  };
}, P1 = (...e) => (t) => {
  e.forEach((n) => {
    tt(n) ? n(t) : n.value = t;
  });
}, N1 = se({ name: "ElDialogContent" }), D1 = /* @__PURE__ */ se({
  ...N1,
  props: hd,
  emits: R1,
  setup(e, { expose: t }) {
    const n = e, { t: o } = Dr(), { Close: s } = Ou, { dialogRef: a, headerRef: r, bodyId: i, ns: c, style: u } = Me(pd), { focusTrapRef: d } = Me(qu), h = A(() => [
      c.b(),
      c.is("fullscreen", n.fullscreen),
      c.is("draggable", n.draggable),
      c.is("align-center", n.alignCenter),
      { [c.m("center")]: n.center }
    ]), g = P1(d, a), w = A(() => n.draggable), m = A(() => n.overflow), { resetPosition: b } = M1(a, r, w, m);
    return t({
      resetPosition: b
    }), (C, _) => (S(), D("div", {
      ref: l(g),
      class: z(l(h)),
      style: ht(l(u)),
      tabindex: "-1"
    }, [
      f("header", {
        ref_key: "headerRef",
        ref: r,
        class: z([l(c).e("header"), C.headerClass, { "show-close": C.showClose }])
      }, [
        ce(C.$slots, "header", {}, () => [
          f("span", {
            role: "heading",
            "aria-level": C.ariaLevel,
            class: z(l(c).e("title"))
          }, E(C.title), 11, ["aria-level"])
        ]),
        C.showClose ? (S(), D("button", {
          key: 0,
          "aria-label": l(o)("el.dialog.close"),
          class: z(l(c).e("headerbtn")),
          type: "button",
          onClick: (M) => C.$emit("close")
        }, [
          k(l(Mt), {
            class: z(l(c).e("close"))
          }, {
            default: ee(() => [
              (S(), re(tn(C.closeIcon || l(s))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : Q("v-if", !0)
      ], 2),
      f("div", {
        id: l(i),
        class: z([l(c).e("body"), C.bodyClass])
      }, [
        ce(C.$slots, "default")
      ], 10, ["id"]),
      C.$slots.footer ? (S(), D("footer", {
        key: 0,
        class: z([l(c).e("footer"), C.footerClass])
      }, [
        ce(C.$slots, "footer")
      ], 2)) : Q("v-if", !0)
    ], 6));
  }
});
var z1 = /* @__PURE__ */ He(D1, [["__file", "dialog-content.vue"]]);
const B1 = Fe({
  ...hd,
  appendToBody: Boolean,
  appendTo: {
    type: me([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: me(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), F1 = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [wt]: (e) => zs(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, j1 = (e, t = {}) => {
  en(e) || Ja("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || Qe("popup"), o = A(() => n.bm("parent", "hidden"));
  if (!Ue || Ui(document.body, o.value))
    return;
  let s = 0, a = !1, r = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || a && document && (document.body.style.width = r, Dv(document.body, o.value));
    }, 200);
  };
  he(e, (c) => {
    if (!c) {
      i();
      return;
    }
    a = !Ui(document.body, o.value), a && (r = document.body.style.width, Nv(document.body, o.value)), s = Bv(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = zv(document.body, "overflowY");
    s > 0 && (u || d === "scroll") && a && (document.body.style.width = `calc(100% - ${s}px)`);
  }), qc(() => i());
}, V1 = (e, t) => {
  var n;
  const s = Et().emit, { nextZIndex: a } = el();
  let r = "";
  const i = es(), c = es(), u = N(!1), d = N(!1), h = N(!1), g = N((n = e.zIndex) != null ? n : a());
  let w, m;
  const b = tl("namespace", Cs), C = A(() => {
    const $ = {}, H = `--${b.value}-dialog`;
    return e.fullscreen || (e.top && ($[`${H}-margin-top`] = e.top), e.width && ($[`${H}-width`] = ho(e.width))), $;
  }), _ = A(() => e.alignCenter ? { display: "flex" } : {});
  function M() {
    s("opened");
  }
  function V() {
    s("closed"), s(wt, !1), e.destroyOnClose && (h.value = !1);
  }
  function L() {
    s("close");
  }
  function I() {
    m?.(), w?.(), e.openDelay && e.openDelay > 0 ? { stop: w } = wr(() => F(), e.openDelay) : F();
  }
  function O() {
    w?.(), m?.(), e.closeDelay && e.closeDelay > 0 ? { stop: m } = wr(() => oe(), e.closeDelay) : oe();
  }
  function R() {
    function $(H) {
      H || (d.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose($) : O();
  }
  function Y() {
    e.closeOnClickModal && R();
  }
  function F() {
    Ue && (u.value = !0);
  }
  function oe() {
    u.value = !1;
  }
  function U() {
    s("openAutoFocus");
  }
  function ae() {
    s("closeAutoFocus");
  }
  function fe($) {
    var H;
    ((H = $.detail) == null ? void 0 : H.focusReason) === "pointer" && $.preventDefault();
  }
  e.lockScroll && j1(u);
  function de() {
    e.closeOnPressEscape && R();
  }
  return he(() => e.modelValue, ($) => {
    $ ? (d.value = !1, I(), h.value = !0, g.value = hu(e.zIndex) ? a() : g.value++, Ke(() => {
      s("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && O();
  }), he(() => e.fullscreen, ($) => {
    t.value && ($ ? (r = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = r);
  }), nt(() => {
    e.modelValue && (u.value = !0, h.value = !0, I());
  }), {
    afterEnter: M,
    afterLeave: V,
    beforeLeave: L,
    handleClose: R,
    onModalClick: Y,
    close: O,
    doClose: oe,
    onOpenAutoFocus: U,
    onCloseAutoFocus: ae,
    onCloseRequested: de,
    onFocusoutPrevented: fe,
    titleId: i,
    bodyId: c,
    closed: d,
    style: C,
    overlayDialogStyle: _,
    rendered: h,
    visible: u,
    zIndex: g
  };
}, H1 = se({
  name: "ElDialog",
  inheritAttrs: !1
}), W1 = /* @__PURE__ */ se({
  ...H1,
  props: B1,
  emits: F1,
  setup(e, { expose: t }) {
    const n = e, o = Kc();
    v1({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, A(() => !!o.title));
    const s = Qe("dialog"), a = N(), r = N(), i = N(), {
      visible: c,
      titleId: u,
      bodyId: d,
      style: h,
      overlayDialogStyle: g,
      rendered: w,
      zIndex: m,
      afterEnter: b,
      afterLeave: C,
      beforeLeave: _,
      handleClose: M,
      onModalClick: V,
      onOpenAutoFocus: L,
      onCloseAutoFocus: I,
      onCloseRequested: O,
      onFocusoutPrevented: R
    } = V1(n, a);
    yn(pd, {
      dialogRef: a,
      headerRef: r,
      bodyId: d,
      ns: s,
      rendered: w,
      style: h
    });
    const Y = fd(V), F = A(() => n.draggable && !n.fullscreen);
    return t({
      visible: c,
      dialogContentRef: i,
      resetPosition: () => {
        var U;
        (U = i.value) == null || U.resetPosition();
      }
    }), (U, ae) => (S(), re(l(ud), {
      to: U.appendTo,
      disabled: U.appendTo !== "body" ? !1 : !U.appendToBody
    }, {
      default: ee(() => [
        k(Oo, {
          name: "dialog-fade",
          onAfterEnter: l(b),
          onAfterLeave: l(C),
          onBeforeLeave: l(_),
          persisted: ""
        }, {
          default: ee(() => [
            lt(k(l($1), {
              "custom-mask-event": "",
              mask: U.modal,
              "overlay-class": U.modalClass,
              "z-index": l(m)
            }, {
              default: ee(() => [
                f("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": U.title || void 0,
                  "aria-labelledby": U.title ? void 0 : l(u),
                  "aria-describedby": l(d),
                  class: z(`${l(s).namespace.value}-overlay-dialog`),
                  style: ht(l(g)),
                  onClick: l(Y).onClick,
                  onMousedown: l(Y).onMousedown,
                  onMouseup: l(Y).onMouseup
                }, [
                  k(l(Zu), {
                    loop: "",
                    trapped: l(c),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: l(L),
                    onFocusAfterReleased: l(I),
                    onFocusoutPrevented: l(R),
                    onReleaseRequested: l(O)
                  }, {
                    default: ee(() => [
                      l(w) ? (S(), re(z1, Ao({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, U.$attrs, {
                        center: U.center,
                        "align-center": U.alignCenter,
                        "close-icon": U.closeIcon,
                        draggable: l(F),
                        overflow: U.overflow,
                        fullscreen: U.fullscreen,
                        "header-class": U.headerClass,
                        "body-class": U.bodyClass,
                        "footer-class": U.footerClass,
                        "show-close": U.showClose,
                        title: U.title,
                        "aria-level": U.headerAriaLevel,
                        onClose: l(M)
                      }), Va({
                        header: ee(() => [
                          U.$slots.title ? ce(U.$slots, "title", { key: 1 }) : ce(U.$slots, "header", {
                            key: 0,
                            close: l(M),
                            titleId: l(u),
                            titleClass: l(s).e("title")
                          })
                        ]),
                        default: ee(() => [
                          ce(U.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        U.$slots.footer ? {
                          name: "footer",
                          fn: ee(() => [
                            ce(U.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : Q("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Mn, l(c)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var U1 = /* @__PURE__ */ He(W1, [["__file", "dialog.vue"]]);
const G1 = kn(U1), q1 = Fe({
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
  size: Br,
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
  ...us(["ariaLabel"])
}), K1 = {
  [Jo]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Xo]: (e) => Be(e) || Yn(e),
  [wt]: (e) => Be(e) || Yn(e)
}, Z1 = se({
  name: "ElInputNumber"
}), Y1 = /* @__PURE__ */ se({
  ...Z1,
  props: q1,
  emits: K1,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: s } = Dr(), a = Qe("input-number"), r = N(), i = Co({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: c } = sl(), u = A(() => Be(o.modelValue) && o.modelValue <= o.min), d = A(() => Be(o.modelValue) && o.modelValue >= o.max), h = A(() => {
      const $ = _(o.step);
      return On(o.precision) ? Math.max(_(o.modelValue), $) : ($ > o.precision, o.precision);
    }), g = A(() => o.controls && o.controlsPosition === "right"), w = Fr(), m = zu(), b = A(() => {
      if (i.userInput !== null)
        return i.userInput;
      let $ = i.currentValue;
      if (Yn($))
        return "";
      if (Be($)) {
        if (Number.isNaN($))
          return "";
        On(o.precision) || ($ = $.toFixed(o.precision));
      }
      return $;
    }), C = ($, H) => {
      if (On(H) && (H = h.value), H === 0)
        return Math.round($);
      let B = String($);
      const ue = B.indexOf(".");
      if (ue === -1 || !B.replace(".", "").split("")[ue + H])
        return $;
      const je = B.length;
      return B.charAt(je - 1) === "5" && (B = `${B.slice(0, Math.max(0, je - 1))}6`), Number.parseFloat(Number(B).toFixed(H));
    }, _ = ($) => {
      if (Yn($))
        return 0;
      const H = $.toString(), B = H.indexOf(".");
      let ue = 0;
      return B !== -1 && (ue = H.length - B - 1), ue;
    }, M = ($, H = 1) => Be($) ? C($ + o.step * H) : i.currentValue, V = () => {
      if (o.readonly || m.value || d.value)
        return;
      const $ = Number(b.value) || 0, H = M($);
      O(H), n(Xo, i.currentValue), fe();
    }, L = () => {
      if (o.readonly || m.value || u.value)
        return;
      const $ = Number(b.value) || 0, H = M($, -1);
      O(H), n(Xo, i.currentValue), fe();
    }, I = ($, H) => {
      const { max: B, min: ue, step: pe, precision: ke, stepStrictly: je, valueOnClear: Ge } = o;
      B < ue && Ja("InputNumber", "min should not be greater than max.");
      let Se = Number($);
      if (Yn($) || Number.isNaN(Se))
        return null;
      if ($ === "") {
        if (Ge === null)
          return null;
        Se = qt(Ge) ? { min: ue, max: B }[Ge] : Ge;
      }
      return je && (Se = C(Math.round(Se / pe) * pe, ke), Se !== $ && H && n(wt, Se)), On(ke) || (Se = C(Se, ke)), (Se > B || Se < ue) && (Se = Se > B ? B : ue, H && n(wt, Se)), Se;
    }, O = ($, H = !0) => {
      var B;
      const ue = i.currentValue, pe = I($);
      if (!H) {
        n(wt, pe);
        return;
      }
      ue === pe && $ || (i.userInput = null, n(wt, pe), ue !== pe && n(Jo, pe, ue), o.validateEvent && ((B = c?.validate) == null || B.call(c, "change").catch((ke) => void 0)), i.currentValue = pe);
    }, R = ($) => {
      i.userInput = $;
      const H = $ === "" ? null : Number($);
      n(Xo, H), O(H, !1);
    }, Y = ($) => {
      const H = $ !== "" ? Number($) : "";
      (Be(H) && !Number.isNaN(H) || $ === "") && O(H), fe(), i.userInput = null;
    }, F = () => {
      var $, H;
      (H = ($ = r.value) == null ? void 0 : $.focus) == null || H.call($);
    }, oe = () => {
      var $, H;
      (H = ($ = r.value) == null ? void 0 : $.blur) == null || H.call($);
    }, U = ($) => {
      n("focus", $);
    }, ae = ($) => {
      var H, B;
      i.userInput = null, Ru() && i.currentValue === null && ((H = r.value) != null && H.input) && (r.value.input.value = ""), n("blur", $), o.validateEvent && ((B = c?.validate) == null || B.call(c, "blur").catch((ue) => void 0));
    }, fe = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, de = ($) => {
      document.activeElement === $.target && $.preventDefault();
    };
    return he(() => o.modelValue, ($, H) => {
      const B = I($, !0);
      i.userInput === null && B !== H && (i.currentValue = B);
    }, { immediate: !0 }), nt(() => {
      var $;
      const { min: H, max: B, modelValue: ue } = o, pe = ($ = r.value) == null ? void 0 : $.input;
      if (pe.setAttribute("role", "spinbutton"), Number.isFinite(B) ? pe.setAttribute("aria-valuemax", String(B)) : pe.removeAttribute("aria-valuemax"), Number.isFinite(H) ? pe.setAttribute("aria-valuemin", String(H)) : pe.removeAttribute("aria-valuemin"), pe.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), pe.setAttribute("aria-disabled", String(m.value)), !Be(ue) && ue != null) {
        let ke = Number(ue);
        Number.isNaN(ke) && (ke = null), n(wt, ke);
      }
      pe.addEventListener("wheel", de, { passive: !1 });
    }), Zc(() => {
      var $, H;
      const B = ($ = r.value) == null ? void 0 : $.input;
      B?.setAttribute("aria-valuenow", `${(H = i.currentValue) != null ? H : ""}`);
    }), t({
      focus: F,
      blur: oe
    }), ($, H) => (S(), D("div", {
      class: z([
        l(a).b(),
        l(a).m(l(w)),
        l(a).is("disabled", l(m)),
        l(a).is("without-controls", !$.controls),
        l(a).is("controls-right", l(g))
      ]),
      onDragstart: qe(() => {
      }, ["prevent"])
    }, [
      $.controls ? lt((S(), D("span", {
        key: 0,
        role: "button",
        "aria-label": l(s)("el.inputNumber.decrease"),
        class: z([l(a).e("decrease"), l(a).is("disabled", l(u))]),
        onKeydown: xn(L, ["enter"])
      }, [
        ce($.$slots, "decrease-icon", {}, () => [
          k(l(Mt), null, {
            default: ee(() => [
              l(g) ? (S(), re(l(Iu), { key: 0 })) : (S(), re(l(l0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(mc), L]
      ]) : Q("v-if", !0),
      $.controls ? lt((S(), D("span", {
        key: 1,
        role: "button",
        "aria-label": l(s)("el.inputNumber.increase"),
        class: z([l(a).e("increase"), l(a).is("disabled", l(d))]),
        onKeydown: xn(V, ["enter"])
      }, [
        ce($.$slots, "increase-icon", {}, () => [
          k(l(Mt), null, {
            default: ee(() => [
              l(g) ? (S(), re(l(qv), { key: 0 })) : (S(), re(l(c0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(mc), V]
      ]) : Q("v-if", !0),
      k(l(R0), {
        id: $.id,
        ref_key: "input",
        ref: r,
        type: "number",
        step: $.step,
        "model-value": l(b),
        placeholder: $.placeholder,
        readonly: $.readonly,
        disabled: l(m),
        size: l(w),
        max: $.max,
        min: $.min,
        name: $.name,
        "aria-label": $.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          xn(qe(V, ["prevent"]), ["up"]),
          xn(qe(L, ["prevent"]), ["down"])
        ],
        onBlur: ae,
        onFocus: U,
        onInput: R,
        onChange: Y
      }, Va({
        _: 2
      }, [
        $.$slots.prefix ? {
          name: "prefix",
          fn: ee(() => [
            ce($.$slots, "prefix")
          ])
        } : void 0,
        $.$slots.suffix ? {
          name: "suffix",
          fn: ee(() => [
            ce($.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var X1 = /* @__PURE__ */ He(Y1, [["__file", "input-number.vue"]]);
const Q1 = kn(X1);
function J1() {
  const e = uo(), t = N(0), n = 11, o = A(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Ln(e, () => {
    var a, r;
    t.value = (r = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? r : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const md = Symbol("ElSelectGroup"), Wr = Symbol("ElSelect");
function ew(e, t) {
  const n = Me(Wr), o = Me(md, { disabled: !1 }), s = A(() => d(io(n.props.modelValue), e.value)), a = A(() => {
    var w;
    if (n.props.multiple) {
      const m = io((w = n.props.modelValue) != null ? w : []);
      return !s.value && m.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), r = A(() => e.label || (nn(e.value) ? "" : e.value)), i = A(() => e.value || e.label || ""), c = A(() => e.disabled || t.groupDisabled || a.value), u = Et(), d = (w = [], m) => {
    if (nn(e.value)) {
      const b = n.props.valueKey;
      return w && w.some((C) => Df(co(C, b)) === co(m, b));
    } else
      return w && w.includes(m);
  }, h = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (w) => {
    const m = new RegExp(b1(w), "i");
    t.visible = m.test(r.value) || e.created;
  };
  return he(() => r.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), he(() => e.value, (w, m) => {
    const { remote: b, valueKey: C } = n.props;
    if ((b ? w !== m : !xs(w, m)) && (n.onOptionDestroy(m, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (C && nn(w) && nn(m) && w[C] === m[C])
        return;
      n.setSelected();
    }
  }), he(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: r,
    currentValue: i,
    itemSelected: s,
    isDisabled: c,
    hoverItem: h,
    updateOption: g
  };
}
const tw = se({
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
    const t = Qe("select"), n = es(), o = A(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(r)),
      t.is("hovering", l(g))
    ]), s = Co({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: r,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d
    } = ew(e, s), { visible: h, hover: g } = Ha(s), w = Et().proxy;
    c.onOptionCreate(w), _n(() => {
      const b = w.value, { selected: C } = c.states, _ = C.some((M) => M.value === w.value);
      Ke(() => {
        c.states.cachedOptions.get(b) === w && !_ && c.states.cachedOptions.delete(b);
      }), c.onOptionDestroy(b, w);
    });
    function m() {
      i.value || c.handleOptionSelect(w);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: a,
      itemSelected: r,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d,
      visible: h,
      hover: g,
      selectOptionClick: m,
      states: s
    };
  }
});
function nw(e, t, n, o, s, a) {
  return lt((S(), D("li", {
    id: e.id,
    class: z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: qe(e.selectOptionClick, ["stop"])
  }, [
    ce(e.$slots, "default", {}, () => [
      f("span", null, E(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Mn, e.visible]
  ]);
}
var yl = /* @__PURE__ */ He(tw, [["render", nw], ["__file", "option.vue"]]);
const ow = se({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Me(Wr), t = Qe("select"), n = A(() => e.props.popperClass), o = A(() => e.props.multiple), s = A(() => e.props.fitInputWidth), a = N("");
    function r() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return nt(() => {
      r(), Ln(e.selectRef, r);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: s
    };
  }
});
function sw(e, t, n, o, s, a) {
  return S(), D("div", {
    class: z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: ht({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (S(), D("div", {
      key: 0,
      class: z(e.ns.be("dropdown", "header"))
    }, [
      ce(e.$slots, "header")
    ], 2)) : Q("v-if", !0),
    ce(e.$slots, "default"),
    e.$slots.footer ? (S(), D("div", {
      key: 1,
      class: z(e.ns.be("dropdown", "footer"))
    }, [
      ce(e.$slots, "footer")
    ], 2)) : Q("v-if", !0)
  ], 6);
}
var rw = /* @__PURE__ */ He(ow, [["render", sw], ["__file", "select-dropdown.vue"]]);
const aw = (e, t) => {
  const { t: n } = Dr(), o = es(), s = Qe("select"), a = Qe("input"), r = Co({
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
  }), i = N(null), c = N(null), u = N(null), d = N(null), h = N(null), g = N(null), w = N(null), m = N(null), b = N(null), C = N(null), _ = N(null), {
    isComposing: M,
    handleCompositionStart: V,
    handleCompositionUpdate: L,
    handleCompositionEnd: I
  } = Fu({
    afterComposition: (x) => xe(x)
  }), { wrapperRef: O, isFocused: R, handleBlur: Y } = Bu(h, {
    beforeFocus() {
      return H.value;
    },
    afterFocus() {
      e.automaticDropdown && !F.value && (F.value = !0, r.menuVisibleOnFocus = !0);
    },
    beforeBlur(x) {
      var X, ve;
      return ((X = u.value) == null ? void 0 : X.isFocusInsideContent(x)) || ((ve = d.value) == null ? void 0 : ve.isFocusInsideContent(x));
    },
    afterBlur() {
      F.value = !1, r.menuVisibleOnFocus = !1;
    }
  }), F = N(!1), oe = N(), { form: U, formItem: ae } = sl(), { inputId: fe } = Nu(e, {
    formItemContext: ae
  }), { valueOnClear: de, isEmptyValue: $ } = Mv(e), H = A(() => e.disabled || U?.disabled), B = A(() => In(e.modelValue) ? e.modelValue.length > 0 : !$(e.modelValue)), ue = A(() => {
    var x;
    return (x = U?.statusIcon) != null ? x : !1;
  }), pe = A(() => e.clearable && !H.value && r.inputHovering && B.value), ke = A(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), je = A(() => s.is("reverse", ke.value && F.value)), Ge = A(() => ae?.validateState || ""), Se = A(() => $u[Ge.value]), j = A(() => e.remote ? 300 : 0), K = A(() => e.remote && !r.inputValue && r.options.size === 0), ge = A(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && r.inputValue && r.options.size > 0 && Ce.value === 0 ? e.noMatchText || n("el.select.noMatch") : r.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ce = A(() => ne.value.filter((x) => x.visible).length), ne = A(() => {
    const x = Array.from(r.options.values()), X = [];
    return r.optionValues.forEach((ve) => {
      const De = x.findIndex((et) => et.value === ve);
      De > -1 && X.push(x[De]);
    }), X.length >= x.length ? X : x;
  }), Z = A(() => Array.from(r.cachedOptions.values())), dt = A(() => {
    const x = ne.value.filter((X) => !X.created).some((X) => X.currentLabel === r.inputValue);
    return e.filterable && e.allowCreate && r.inputValue !== "" && !x;
  }), Ee = () => {
    e.filterable && tt(e.filterMethod) || e.filterable && e.remote && tt(e.remoteMethod) || ne.value.forEach((x) => {
      var X;
      (X = x.updateOption) == null || X.call(x, r.inputValue);
    });
  }, _t = Fr(), ct = A(() => ["small"].includes(_t.value) ? "small" : "default"), ut = A({
    get() {
      return F.value && !K.value;
    },
    set(x) {
      F.value = x;
    }
  }), xt = A(() => {
    if (e.multiple && !On(e.modelValue))
      return io(e.modelValue).length === 0 && !r.inputValue;
    const x = In(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || On(x) ? !r.inputValue : !0;
  }), Ye = A(() => {
    var x;
    const X = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !B.value ? X : r.selectedLabel;
  }), ot = A(() => Sa ? null : "mouseenter");
  he(() => e.modelValue, (x, X) => {
    e.multiple && e.filterable && !e.reserveKeyword && (r.inputValue = "", st("")), We(), !xs(x, X) && e.validateEvent && ae?.validate("change").catch((ve) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), he(() => F.value, (x) => {
    x ? st(r.inputValue) : (r.inputValue = "", r.previousQuery = null, r.isBeforeHide = !0), t("visible-change", x);
  }), he(() => r.options.entries(), () => {
    Ue && (We(), e.defaultFirstOption && (e.filterable || e.remote) && Ce.value && Dt());
  }, {
    flush: "post"
  }), he([() => r.hoveringIndex, ne], ([x]) => {
    Be(x) && x > -1 ? oe.value = ne.value[x] || {} : oe.value = {}, ne.value.forEach((X) => {
      X.hover = oe.value === X;
    });
  }), Fa(() => {
    r.isBeforeHide || Ee();
  });
  const st = (x) => {
    r.previousQuery === x || M.value || (r.previousQuery = x, e.filterable && tt(e.filterMethod) ? e.filterMethod(x) : e.filterable && e.remote && tt(e.remoteMethod) && e.remoteMethod(x), e.defaultFirstOption && (e.filterable || e.remote) && Ce.value ? Ke(Dt) : Ke(Wt));
  }, Dt = () => {
    const x = ne.value.filter((et) => et.visible && !et.disabled && !et.states.groupDisabled), X = x.find((et) => et.created), ve = x[0], De = ne.value.map((et) => et.value);
    r.hoveringIndex = It(De, X || ve);
  }, We = () => {
    if (e.multiple)
      r.selectedLabel = "";
    else {
      const X = In(e.modelValue) ? e.modelValue[0] : e.modelValue, ve = Je(X);
      r.selectedLabel = ve.currentLabel, r.selected = [ve];
      return;
    }
    const x = [];
    On(e.modelValue) || io(e.modelValue).forEach((X) => {
      x.push(Je(X));
    }), r.selected = x;
  }, Je = (x) => {
    let X;
    const ve = lp(x);
    for (let Tt = r.cachedOptions.size - 1; Tt >= 0; Tt--) {
      const $t = Z.value[Tt];
      if (ve ? co($t.value, e.valueKey) === co(x, e.valueKey) : $t.value === x) {
        X = {
          value: x,
          currentLabel: $t.currentLabel,
          get isDisabled() {
            return $t.isDisabled;
          }
        };
        break;
      }
    }
    if (X)
      return X;
    const De = ve ? x.label : x ?? "";
    return {
      value: x,
      currentLabel: De
    };
  }, Wt = () => {
    r.hoveringIndex = ne.value.findIndex((x) => r.selected.some((X) => Pe(X) === Pe(x)));
  }, kt = () => {
    r.selectionWidth = c.value.getBoundingClientRect().width;
  }, q = () => {
    r.collapseItemWidth = C.value.getBoundingClientRect().width;
  }, we = () => {
    var x, X;
    (X = (x = u.value) == null ? void 0 : x.updatePopper) == null || X.call(x);
  }, mt = () => {
    var x, X;
    (X = (x = d.value) == null ? void 0 : x.updatePopper) == null || X.call(x);
  }, Lt = () => {
    r.inputValue.length > 0 && !F.value && (F.value = !0), st(r.inputValue);
  }, xe = (x) => {
    if (r.inputValue = x.target.value, e.remote)
      cn();
    else
      return Lt();
  }, cn = Kg(() => {
    Lt();
  }, j.value), Ie = (x) => {
    xs(e.modelValue, x) || t(Jo, x);
  }, go = (x) => Zg(x, (X) => {
    const ve = r.cachedOptions.get(X);
    return ve && !ve.disabled && !ve.states.groupDisabled;
  }), No = (x) => {
    if (e.multiple && x.code !== $n.delete && x.target.value.length <= 0) {
      const X = io(e.modelValue).slice(), ve = go(X);
      if (ve < 0)
        return;
      const De = X[ve];
      X.splice(ve, 1), t(wt, X), Ie(X), t("remove-tag", De);
    }
  }, zn = (x, X) => {
    const ve = r.selected.indexOf(X);
    if (ve > -1 && !H.value) {
      const De = io(e.modelValue).slice();
      De.splice(ve, 1), t(wt, De), Ie(De), t("remove-tag", X.value);
    }
    x.stopPropagation(), to();
  }, Zt = (x) => {
    x.stopPropagation();
    const X = e.multiple ? [] : de.value;
    if (e.multiple)
      for (const ve of r.selected)
        ve.isDisabled && X.push(ve.value);
    t(wt, X), Ie(X), r.hoveringIndex = -1, F.value = !1, t("clear"), to();
  }, eo = (x) => {
    var X;
    if (e.multiple) {
      const ve = io((X = e.modelValue) != null ? X : []).slice(), De = It(ve, x);
      De > -1 ? ve.splice(De, 1) : (e.multipleLimit <= 0 || ve.length < e.multipleLimit) && ve.push(x.value), t(wt, ve), Ie(ve), x.created && st(""), e.filterable && !e.reserveKeyword && (r.inputValue = "");
    } else
      t(wt, x.value), Ie(x.value), F.value = !1;
    to(), !F.value && Ke(() => {
      un(x);
    });
  }, It = (x = [], X) => On(X) ? -1 : nn(X.value) ? x.findIndex((ve) => xs(co(ve, e.valueKey), Pe(X))) : x.indexOf(X.value), un = (x) => {
    var X, ve, De, et, Tt;
    const $t = In(x) ? x[0] : x;
    let St = null;
    if ($t?.value) {
      const Sn = ne.value.filter((jn) => jn.value === $t.value);
      Sn.length > 0 && (St = Sn[0].$el);
    }
    if (u.value && St) {
      const Sn = (et = (De = (ve = (X = u.value) == null ? void 0 : X.popperRef) == null ? void 0 : ve.contentRef) == null ? void 0 : De.querySelector) == null ? void 0 : et.call(De, `.${s.be("dropdown", "wrap")}`);
      Sn && Fv(Sn, St);
    }
    (Tt = _.value) == null || Tt.handleScroll();
  }, ft = (x) => {
    r.options.set(x.value, x), r.cachedOptions.set(x.value, x);
  }, Yt = (x, X) => {
    r.options.get(x) === X && r.options.delete(x);
  }, vo = A(() => {
    var x, X;
    return (X = (x = u.value) == null ? void 0 : x.popperRef) == null ? void 0 : X.contentRef;
  }), Tn = () => {
    r.isBeforeHide = !1, Ke(() => {
      var x;
      (x = _.value) == null || x.update(), un(r.selected);
    });
  }, to = () => {
    var x;
    (x = h.value) == null || x.focus();
  }, bo = () => {
    var x;
    if (F.value) {
      F.value = !1, Ke(() => {
        var X;
        return (X = h.value) == null ? void 0 : X.blur();
      });
      return;
    }
    (x = h.value) == null || x.blur();
  }, dn = (x) => {
    Zt(x);
  }, yo = (x) => {
    if (F.value = !1, R.value) {
      const X = new FocusEvent("focus", x);
      Ke(() => Y(X));
    }
  }, Xt = () => {
    r.inputValue.length > 0 ? r.inputValue = "" : F.value = !1;
  }, Bn = () => {
    H.value || (Sa && (r.inputHovering = !0), r.menuVisibleOnFocus ? r.menuVisibleOnFocus = !1 : F.value = !F.value);
  }, no = () => {
    if (!F.value)
      Bn();
    else {
      const x = ne.value[r.hoveringIndex];
      x && !x.isDisabled && eo(x);
    }
  }, Pe = (x) => nn(x.value) ? co(x.value, e.valueKey) : x.value, Qt = A(() => ne.value.filter((x) => x.visible).every((x) => x.isDisabled)), Do = A(() => e.multiple ? e.collapseTags ? r.selected.slice(0, e.maxCollapseTags) : r.selected : []), wo = A(() => e.multiple ? e.collapseTags ? r.selected.slice(e.maxCollapseTags) : [] : []), oo = (x) => {
    if (!F.value) {
      F.value = !0;
      return;
    }
    if (!(r.options.size === 0 || Ce.value === 0 || M.value) && !Qt.value) {
      x === "next" ? (r.hoveringIndex++, r.hoveringIndex === r.options.size && (r.hoveringIndex = 0)) : x === "prev" && (r.hoveringIndex--, r.hoveringIndex < 0 && (r.hoveringIndex = r.options.size - 1));
      const X = ne.value[r.hoveringIndex];
      (X.isDisabled || !X.visible) && oo(x), Ke(() => un(oe.value));
    }
  }, Fn = () => {
    if (!c.value)
      return 0;
    const x = window.getComputedStyle(c.value);
    return Number.parseFloat(x.gap || "6px");
  }, zo = A(() => {
    const x = Fn();
    return { maxWidth: `${C.value && e.maxCollapseTags === 1 ? r.selectionWidth - r.collapseItemWidth - x : r.selectionWidth}px` };
  }), Bo = A(() => ({ maxWidth: `${r.selectionWidth}px` })), Ot = (x) => {
    t("popup-scroll", x);
  };
  return Ln(c, kt), Ln(m, we), Ln(O, we), Ln(b, mt), Ln(C, q), nt(() => {
    We();
  }), {
    inputId: fe,
    contentId: o,
    nsSelect: s,
    nsInput: a,
    states: r,
    isFocused: R,
    expanded: F,
    optionsArray: ne,
    hoverOption: oe,
    selectSize: _t,
    filteredOptionsCount: Ce,
    updateTooltip: we,
    updateTagTooltip: mt,
    debouncedOnInputChange: cn,
    onInput: xe,
    deletePrevTag: No,
    deleteTag: zn,
    deleteSelected: Zt,
    handleOptionSelect: eo,
    scrollToOption: un,
    hasModelValue: B,
    shouldShowPlaceholder: xt,
    currentPlaceholder: Ye,
    mouseEnterEventName: ot,
    needStatusIcon: ue,
    showClose: pe,
    iconComponent: ke,
    iconReverse: je,
    validateState: Ge,
    validateIcon: Se,
    showNewOption: dt,
    updateOptions: Ee,
    collapseTagSize: ct,
    setSelected: We,
    selectDisabled: H,
    emptyText: ge,
    handleCompositionStart: V,
    handleCompositionUpdate: L,
    handleCompositionEnd: I,
    onOptionCreate: ft,
    onOptionDestroy: Yt,
    handleMenuEnter: Tn,
    focus: to,
    blur: bo,
    handleClearClick: dn,
    handleClickOutside: yo,
    handleEsc: Xt,
    toggleMenu: Bn,
    selectOption: no,
    getValueKey: Pe,
    navigateOptions: oo,
    dropdownMenuVisible: ut,
    showTagList: Do,
    collapseTagList: wo,
    popupScroll: Ot,
    tagStyle: zo,
    collapseTagStyle: Bo,
    popperRef: vo,
    inputRef: h,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: g,
    suffixRef: w,
    selectRef: i,
    wrapperRef: O,
    selectionRef: c,
    scrollbarRef: _,
    menuRef: m,
    tagMenuRef: b,
    collapseItemRef: C
  };
};
var lw = se({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Me(Wr);
    let o = [];
    return () => {
      var s, a;
      const r = (s = t.default) == null ? void 0 : s.call(t), i = [];
      function c(u) {
        In(u) && u.forEach((d) => {
          var h, g, w, m;
          const b = (h = d?.type || {}) == null ? void 0 : h.name;
          b === "ElOptionGroup" ? c(!qt(d.children) && !In(d.children) && tt((g = d.children) == null ? void 0 : g.default) ? (w = d.children) == null ? void 0 : w.default() : d.children) : b === "ElOption" ? i.push((m = d.props) == null ? void 0 : m.value) : In(d.children) && c(d.children);
        });
      }
      return r.length && c((a = r[0]) == null ? void 0 : a.children), xs(i, o) || (o = i, n && (n.states.optionValues = i)), r;
    };
  }
});
const iw = Fe({
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
  size: Br,
  effect: {
    type: me(String),
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
    type: me(Object),
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
  teleported: bl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: xo,
    default: nl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: xo,
    default: Iu
  },
  tagType: { ...xa.type, default: "info" },
  tagEffect: { ...xa.effect, default: "light" },
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
    type: me(String),
    values: Vr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: me(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Su,
  ...us(["ariaLabel"])
}), gc = "ElSelect", cw = se({
  name: gc,
  componentName: gc,
  components: {
    ElSelectMenu: rw,
    ElOption: yl,
    ElOptions: lw,
    ElTag: T1,
    ElScrollbar: K0,
    ElTooltip: d1,
    ElIcon: Mt
  },
  directives: { ClickOutside: S1 },
  props: iw,
  emits: [
    wt,
    Jo,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = A(() => {
      const { modelValue: c, multiple: u } = e, d = u ? [] : void 0;
      return In(c) ? u ? c : d : u ? d : c;
    }), o = Co({
      ...Ha(e),
      modelValue: n
    }), s = aw(o, t), { calculatorRef: a, inputStyle: r } = J1();
    yn(Wr, Co({
      props: o,
      states: s.states,
      optionsArray: s.optionsArray,
      handleOptionSelect: s.handleOptionSelect,
      onOptionCreate: s.onOptionCreate,
      onOptionDestroy: s.onOptionDestroy,
      selectRef: s.selectRef,
      setSelected: s.setSelected
    }));
    const i = A(() => e.multiple ? s.states.selected.map((c) => c.currentLabel) : s.states.selectedLabel);
    return {
      ...s,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: r
    };
  }
});
function uw(e, t, n, o, s, a) {
  const r = _o("el-tag"), i = _o("el-tooltip"), c = _o("el-icon"), u = _o("el-option"), d = _o("el-options"), h = _o("el-scrollbar"), g = _o("el-select-menu"), w = zf("click-outside");
  return lt((S(), D("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Bf(e.mouseEnterEventName)]: (m) => e.states.inputHovering = !0,
    onMouseleave: (m) => e.states.inputHovering = !1
  }, [
    k(i, {
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
      onHide: (m) => e.states.isBeforeHide = !1
    }, {
      default: ee(() => {
        var m;
        return [
          f("div", {
            ref: "wrapperRef",
            class: z([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: qe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (S(), D("div", {
              key: 0,
              ref: "prefixRef",
              class: z(e.nsSelect.e("prefix"))
            }, [
              ce(e.$slots, "prefix")
            ], 2)) : Q("v-if", !0),
            f("div", {
              ref: "selectionRef",
              class: z([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ce(e.$slots, "tag", { key: 0 }, () => [
                (S(!0), D(at, null, En(e.showTagList, (b) => (S(), D("div", {
                  key: e.getValueKey(b),
                  class: z(e.nsSelect.e("selected-item"))
                }, [
                  k(r, {
                    closable: !e.selectDisabled && !b.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: ht(e.tagStyle),
                    onClose: (C) => e.deleteTag(C, b)
                  }, {
                    default: ee(() => [
                      f("span", {
                        class: z(e.nsSelect.e("tags-text"))
                      }, [
                        ce(e.$slots, "label", {
                          label: b.currentLabel,
                          value: b.value
                        }, () => [
                          pt(E(b.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (S(), re(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ee(() => [
                    f("div", {
                      ref: "collapseItemRef",
                      class: z(e.nsSelect.e("selected-item"))
                    }, [
                      k(r, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: ht(e.collapseTagStyle)
                      }, {
                        default: ee(() => [
                          f("span", {
                            class: z(e.nsSelect.e("tags-text"))
                          }, " + " + E(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ee(() => [
                    f("div", {
                      ref: "tagMenuRef",
                      class: z(e.nsSelect.e("selection"))
                    }, [
                      (S(!0), D(at, null, En(e.collapseTagList, (b) => (S(), D("div", {
                        key: e.getValueKey(b),
                        class: z(e.nsSelect.e("selected-item"))
                      }, [
                        k(r, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !b.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (C) => e.deleteTag(C, b)
                        }, {
                          default: ee(() => [
                            f("span", {
                              class: z(e.nsSelect.e("tags-text"))
                            }, [
                              ce(e.$slots, "label", {
                                label: b.currentLabel,
                                value: b.value
                              }, () => [
                                pt(E(b.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : Q("v-if", !0)
              ]) : Q("v-if", !0),
              f("div", {
                class: z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                lt(f("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (b) => e.states.inputValue = b,
                  type: "text",
                  name: e.name,
                  class: z([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: ht(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((m = e.hoverOption) == null ? void 0 : m.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    xn(qe((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    xn(qe((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    xn(qe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    xn(qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    xn(qe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: qe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Ms, e.states.inputValue]
                ]),
                e.filterable ? (S(), D("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: z(e.nsSelect.e("input-calculator")),
                  textContent: E(e.states.inputValue)
                }, null, 10, ["textContent"])) : Q("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (S(), D("div", {
                key: 1,
                class: z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ce(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  f("span", null, E(e.currentPlaceholder), 1)
                ]) : (S(), D("span", { key: 1 }, E(e.currentPlaceholder), 1))
              ], 2)) : Q("v-if", !0)
            ], 2),
            f("div", {
              ref: "suffixRef",
              class: z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (S(), re(c, {
                key: 0,
                class: z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ee(() => [
                  (S(), re(tn(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              e.showClose && e.clearIcon ? (S(), re(c, {
                key: 1,
                class: z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ee(() => [
                  (S(), re(tn(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Q("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (S(), re(c, {
                key: 2,
                class: z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ee(() => [
                  (S(), re(tn(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ee(() => [
        k(g, { ref: "menuRef" }, {
          default: ee(() => [
            e.$slots.header ? (S(), D("div", {
              key: 0,
              class: z(e.nsSelect.be("dropdown", "header")),
              onClick: qe(() => {
              }, ["stop"])
            }, [
              ce(e.$slots, "header")
            ], 10, ["onClick"])) : Q("v-if", !0),
            lt(k(h, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: z([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ee(() => [
                e.showNewOption ? (S(), re(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : Q("v-if", !0),
                k(d, null, {
                  default: ee(() => [
                    ce(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Mn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (S(), D("div", {
              key: 1,
              class: z(e.nsSelect.be("dropdown", "loading"))
            }, [
              ce(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (S(), D("div", {
              key: 2,
              class: z(e.nsSelect.be("dropdown", "empty"))
            }, [
              ce(e.$slots, "empty", {}, () => [
                f("span", null, E(e.emptyText), 1)
              ])
            ], 2)) : Q("v-if", !0),
            e.$slots.footer ? (S(), D("div", {
              key: 3,
              class: z(e.nsSelect.be("dropdown", "footer")),
              onClick: qe(() => {
              }, ["stop"])
            }, [
              ce(e.$slots, "footer")
            ], 10, ["onClick"])) : Q("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [w, e.handleClickOutside, e.popperRef]
  ]);
}
var dw = /* @__PURE__ */ He(cw, [["render", uw], ["__file", "select.vue"]]);
const fw = se({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Qe("select"), n = N(null), o = Et(), s = N([]);
    yn(md, Co({
      ...Ha(e)
    }));
    const a = A(() => s.value.some((u) => u.visible === !0)), r = (u) => {
      var d, h;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((h = u.component) != null && h.proxy);
    }, i = (u) => {
      const d = io(u), h = [];
      return d.forEach((g) => {
        var w, m;
        r(g) ? h.push(g.component.proxy) : (w = g.children) != null && w.length ? h.push(...i(g.children)) : (m = g.component) != null && m.subTree && h.push(...i(g.component.subTree));
      }), h;
    }, c = () => {
      s.value = i(o.subTree);
    };
    return nt(() => {
      c();
    }), yv(n, c, {
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
function pw(e, t, n, o, s, a) {
  return lt((S(), D("ul", {
    ref: "groupRef",
    class: z(e.ns.be("group", "wrap"))
  }, [
    f("li", {
      class: z(e.ns.be("group", "title"))
    }, E(e.label), 3),
    f("li", null, [
      f("ul", {
        class: z(e.ns.b("group"))
      }, [
        ce(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Mn, e.visible]
  ]);
}
var gd = /* @__PURE__ */ He(fw, [["render", pw], ["__file", "option-group.vue"]]);
const vd = kn(dw, {
  Option: yl,
  OptionGroup: gd
}), bd = Lu(yl);
Lu(gd);
const yd = ["success", "info", "warning", "error"], At = Mu({
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
  appendTo: Ue ? document.body : void 0
}), hw = Fe({
  customClass: {
    type: String,
    default: At.customClass
  },
  center: {
    type: Boolean,
    default: At.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: At.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: At.duration
  },
  icon: {
    type: xo,
    default: At.icon
  },
  id: {
    type: String,
    default: At.id
  },
  message: {
    type: me([
      String,
      Object,
      Function
    ]),
    default: At.message
  },
  onClose: {
    type: me(Function),
    default: At.onClose
  },
  showClose: {
    type: Boolean,
    default: At.showClose
  },
  type: {
    type: String,
    values: yd,
    default: At.type
  },
  plain: {
    type: Boolean,
    default: At.plain
  },
  offset: {
    type: Number,
    default: At.offset
  },
  zIndex: {
    type: Number,
    default: At.zIndex
  },
  grouping: {
    type: Boolean,
    default: At.grouping
  },
  repeatNum: {
    type: Number,
    default: At.repeatNum
  }
}), mw = {
  destroy: () => !0
}, gn = Ff([]), gw = (e) => {
  const t = gn.findIndex((s) => s.id === e), n = gn[t];
  let o;
  return t > 0 && (o = gn[t - 1]), { current: n, prev: o };
}, vw = (e) => {
  const { prev: t } = gw(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, bw = (e, t) => gn.findIndex((o) => o.id === e) > 0 ? 16 : t, yw = se({
  name: "ElMessage"
}), ww = /* @__PURE__ */ se({
  ...yw,
  props: hw,
  emits: mw,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = g0, { ns: s, zIndex: a } = Au("message"), { currentZIndex: r, nextZIndex: i } = a, c = N(), u = N(!1), d = N(0);
    let h;
    const g = A(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = A(() => {
      const R = n.type;
      return { [s.bm("icon", R)]: R && Tr[R] };
    }), m = A(() => n.icon || Tr[n.type] || ""), b = A(() => vw(n.id)), C = A(() => bw(n.id, n.offset) + b.value), _ = A(() => d.value + C.value), M = A(() => ({
      top: `${C.value}px`,
      zIndex: r.value
    }));
    function V() {
      n.duration !== 0 && ({ stop: h } = wr(() => {
        I();
      }, n.duration));
    }
    function L() {
      h?.();
    }
    function I() {
      u.value = !1;
    }
    function O({ code: R }) {
      R === $n.esc && I();
    }
    return nt(() => {
      V(), i(), u.value = !0;
    }), he(() => n.repeatNum, () => {
      L(), V();
    }), bn(document, "keydown", O), Ln(c, () => {
      d.value = c.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: _,
      close: I
    }), (R, Y) => (S(), re(Oo, {
      name: l(s).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (F) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        lt(f("div", {
          id: R.id,
          ref_key: "messageRef",
          ref: c,
          class: z([
            l(s).b(),
            { [l(s).m(R.type)]: R.type },
            l(s).is("center", R.center),
            l(s).is("closable", R.showClose),
            l(s).is("plain", R.plain),
            R.customClass
          ]),
          style: ht(l(M)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: V
        }, [
          R.repeatNum > 1 ? (S(), re(l(g1), {
            key: 0,
            value: R.repeatNum,
            type: l(g),
            class: z(l(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Q("v-if", !0),
          l(m) ? (S(), re(l(Mt), {
            key: 1,
            class: z([l(s).e("icon"), l(w)])
          }, {
            default: ee(() => [
              (S(), re(tn(l(m))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          ce(R.$slots, "default", {}, () => [
            R.dangerouslyUseHTMLString ? (S(), D(at, { key: 1 }, [
              Q(" Caution here, message could've been compromised, never use user's input as message "),
              f("p", {
                class: z(l(s).e("content")),
                innerHTML: R.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), D("p", {
              key: 0,
              class: z(l(s).e("content"))
            }, E(R.message), 3))
          ]),
          R.showClose ? (S(), re(l(Mt), {
            key: 2,
            class: z(l(s).e("closeBtn")),
            onClick: qe(I, ["stop"])
          }, {
            default: ee(() => [
              k(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 46, ["id"]), [
          [Mn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var _w = /* @__PURE__ */ He(ww, [["__file", "message.vue"]]);
let kw = 1;
const wd = (e) => {
  const t = !e || qt(e) || Ps(e) || tt(e) ? { message: e } : e, n = {
    ...At,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (qt(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    vn(o) || (o = document.body), n.appendTo = o;
  }
  return zs(pn.grouping) && !n.grouping && (n.grouping = pn.grouping), Be(pn.duration) && n.duration === 3e3 && (n.duration = pn.duration), Be(pn.offset) && n.offset === 16 && (n.offset = pn.offset), zs(pn.showClose) && !n.showClose && (n.showClose = pn.showClose), n;
}, Tw = (e) => {
  const t = gn.indexOf(e);
  if (t === -1)
    return;
  gn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Sw = ({ appendTo: e, ...t }, n) => {
  const o = `message_${kw++}`, s = t.onClose, a = document.createElement("div"), r = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), Tw(d);
    },
    onDestroy: () => {
      gr(null, a);
    }
  }, i = k(_w, r, tt(r.message) || Ps(r.message) ? {
    default: tt(r.message) ? r.message : () => r.message
  } : null);
  i.appContext = n || rs._context, gr(i, a), e.appendChild(a.firstElementChild);
  const c = i.component, d = {
    id: o,
    vnode: i,
    vm: c,
    handler: {
      close: () => {
        c.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return d;
}, rs = (e = {}, t) => {
  if (!Ue)
    return { close: () => {
    } };
  const n = wd(e);
  if (n.grouping && gn.length) {
    const s = gn.find(({ vnode: a }) => {
      var r;
      return ((r = a.props) == null ? void 0 : r.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (Be(pn.max) && gn.length >= pn.max)
    return { close: () => {
    } };
  const o = Sw(n, t);
  return gn.push(o), o.handler;
};
yd.forEach((e) => {
  rs[e] = (t = {}, n) => {
    const o = wd(t);
    return rs({ ...o, type: e }, n);
  };
});
function Aw(e) {
  for (const t of gn)
    (!e || e === t.props.type) && t.handler.close();
}
rs.closeAll = Aw;
rs._context = null;
const Cw = xu(rs, "$message"), _d = [
  "success",
  "info",
  "warning",
  "error"
], Ew = Fe({
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
    type: xo
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: me([
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
    type: me(Function),
    default: () => {
    }
  },
  onClose: {
    type: me(Function),
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
    values: [..._d, ""],
    default: ""
  },
  zIndex: Number
}), xw = {
  destroy: () => !0
}, Lw = se({
  name: "ElNotification"
}), Iw = /* @__PURE__ */ se({
  ...Lw,
  props: Ew,
  emits: xw,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = Au("notification"), { nextZIndex: a, currentZIndex: r } = s, { Close: i } = Ou, c = N(!1);
    let u;
    const d = A(() => {
      const V = n.type;
      return V && Tr[n.type] ? o.m(V) : "";
    }), h = A(() => n.type && Tr[n.type] || n.icon), g = A(() => n.position.endsWith("right") ? "right" : "left"), w = A(() => n.position.startsWith("top") ? "top" : "bottom"), m = A(() => {
      var V;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (V = n.zIndex) != null ? V : r.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = wr(() => {
        c.value && _();
      }, n.duration));
    }
    function C() {
      u?.();
    }
    function _() {
      c.value = !1;
    }
    function M({ code: V }) {
      V === $n.delete || V === $n.backspace ? C() : V === $n.esc ? c.value && _() : b();
    }
    return nt(() => {
      b(), a(), c.value = !0;
    }), bn(document, "keydown", M), t({
      visible: c,
      close: _
    }), (V, L) => (S(), re(Oo, {
      name: l(o).b("fade"),
      onBeforeLeave: V.onClose,
      onAfterLeave: (I) => V.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        lt(f("div", {
          id: V.id,
          class: z([l(o).b(), V.customClass, l(g)]),
          style: ht(l(m)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: b,
          onClick: V.onClick
        }, [
          l(h) ? (S(), re(l(Mt), {
            key: 0,
            class: z([l(o).e("icon"), l(d)])
          }, {
            default: ee(() => [
              (S(), re(tn(l(h))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          f("div", {
            class: z(l(o).e("group"))
          }, [
            f("h2", {
              class: z(l(o).e("title")),
              textContent: E(V.title)
            }, null, 10, ["textContent"]),
            lt(f("div", {
              class: z(l(o).e("content")),
              style: ht(V.title ? void 0 : { margin: 0 })
            }, [
              ce(V.$slots, "default", {}, () => [
                V.dangerouslyUseHTMLString ? (S(), D(at, { key: 1 }, [
                  Q(" Caution here, message could've been compromised, never use user's input as message "),
                  f("p", { innerHTML: V.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), D("p", { key: 0 }, E(V.message), 1))
              ])
            ], 6), [
              [Mn, V.message]
            ]),
            V.showClose ? (S(), re(l(Mt), {
              key: 0,
              class: z(l(o).e("closeBtn")),
              onClick: qe(_, ["stop"])
            }, {
              default: ee(() => [
                k(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Mn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ow = /* @__PURE__ */ He(Iw, [["__file", "notification.vue"]]);
const Cr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, La = 16;
let $w = 1;
const as = function(e = {}, t) {
  if (!Ue)
    return { close: () => {
    } };
  (qt(e) || Ps(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Cr[n].forEach(({ vm: d }) => {
    var h;
    o += (((h = d.el) == null ? void 0 : h.offsetHeight) || 0) + La;
  }), o += La;
  const s = `notification_${$w++}`, a = e.onClose, r = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      Rw(s, n, a);
    }
  };
  let i = document.body;
  vn(e.appendTo) ? i = e.appendTo : qt(e.appendTo) && (i = document.querySelector(e.appendTo)), vn(i) || (i = document.body);
  const c = document.createElement("div"), u = k(Ow, r, tt(r.message) ? r.message : Ps(r.message) ? () => r.message : null);
  return u.appContext = On(t) ? as._context : t, u.props.onDestroy = () => {
    gr(null, c);
  }, gr(u, c), Cr[n].push({ vm: u }), i.appendChild(c.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
_d.forEach((e) => {
  as[e] = (t = {}, n) => ((qt(t) || Ps(t)) && (t = {
    message: t
  }), as({ ...t, type: e }, n));
});
function Rw(e, t, n) {
  const o = Cr[t], s = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: a } = o[s];
  if (!a)
    return;
  n?.(a);
  const r = a.el.offsetHeight, i = t.split("-")[0];
  o.splice(s, 1);
  const c = o.length;
  if (!(c < 1))
    for (let u = s; u < c; u++) {
      const { el: d, component: h } = o[u].vm, g = Number.parseInt(d.style[i], 10) - r - La;
      h.props.offset = g;
    }
}
function Mw() {
  for (const e of Object.values(Cr))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
as.closeAll = Mw;
as._context = null;
const Pw = xu(as, "$notify");
function Nw(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Dw(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var fr;
const an = "__TAURI_TO_IPC_KEY__";
function zw(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function W(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Bw {
  get rid() {
    return Nw(this, fr, "f");
  }
  constructor(t) {
    fr.set(this, void 0), Dw(this, fr, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return W("plugin:resources|close", {
      rid: this.rid
    });
  }
}
fr = /* @__PURE__ */ new WeakMap();
class kd {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.width = t[0].Logical.width, this.height = t[0].Logical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the logical size to a physical one.
   * @example
   * ```typescript
   * import { LogicalSize } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = new LogicalSize(400, 500);
   * const physical = size.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new Os(this.width * t, this.height * t);
  }
  [an]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[an]();
  }
}
class Os {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.width = t[0].Physical.width, this.height = t[0].Physical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the physical size to a logical one.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = await appWindow.innerSize(); // PhysicalSize
   * const logical = size.toLogical(factor);
   * ```
   */
  toLogical(t) {
    return new kd(this.width / t, this.height / t);
  }
  [an]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[an]();
  }
}
class Uo {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof kd ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Os ? this.size : this.size.toPhysical(t);
  }
  [an]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[an]();
  }
}
class Td {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.x = t[0].Logical.x, this.y = t[0].Logical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the logical position to a physical one.
   * @example
   * ```typescript
   * import { LogicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new LogicalPosition(400, 500);
   * const physical = position.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new lo(this.x * t, this.y * t);
  }
  [an]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[an]();
  }
}
class lo {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.x = t[0].Physical.x, this.y = t[0].Physical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the physical position to a logical one.
   * @example
   * ```typescript
   * import { PhysicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new PhysicalPosition(400, 500);
   * const physical = position.toLogical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toLogical(t) {
    return new Td(this.x / t, this.y / t);
  }
  [an]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[an]();
  }
}
class rr {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Td ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof lo ? this.position : this.position.toPhysical(t);
  }
  [an]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[an]();
  }
}
var Gt;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Gt || (Gt = {}));
async function Sd(e, t) {
  await W("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function wl(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return W("plugin:event|listen", {
    event: e,
    target: s,
    handler: zw(t)
  }).then((a) => async () => Sd(e, a));
}
async function Fw(e, t, n) {
  return wl(e, (o) => {
    Sd(e, o.id), t(o);
  }, n);
}
async function jw(e, t) {
  await W("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Vw(e, t, n) {
  await W("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class $s extends Bw {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, o) {
    return W("plugin:image|new", {
      rgba: Er(t),
      width: n,
      height: o
    }).then((s) => new $s(s));
  }
  /**
   * Creates a new image using the provided bytes by inferring the file format.
   * If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromBytes(t) {
    return W("plugin:image|from_bytes", {
      bytes: Er(t)
    }).then((n) => new $s(n));
  }
  /**
   * Creates a new image using the provided path.
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromPath(t) {
    return W("plugin:image|from_path", { path: t }).then((n) => new $s(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return W("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return W("plugin:image|size", { rid: this.rid });
  }
}
function Er(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof $s ? e.rid : e;
}
var Ia;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ia || (Ia = {}));
class Hw {
  constructor(t) {
    this._preventDefault = !1, this.event = t.event, this.id = t.id;
  }
  preventDefault() {
    this._preventDefault = !0;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
}
var vc;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(vc || (vc = {}));
function Ad() {
  return new Cd(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function aa() {
  return W("plugin:window|get_all_windows").then((e) => e.map((t) => new Cd(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const la = ["tauri://created", "tauri://error"];
class Cd {
  /**
   * Creates a new Window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const appWindow = new Window('my-label');
   * appWindow.once('tauri://created', function () {
   *  // window successfully created
   * });
   * appWindow.once('tauri://error', function (e) {
   *  // an error happened creating the window
   * });
   * ```
   *
   * @param label The unique window label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link Window} instance to communicate with the window.
   */
  constructor(t, n = {}) {
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || W("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (s) => this.emit("tauri://error", s));
  }
  /**
   * Gets the Window associated with the given label.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const mainWindow = Window.getByLabel('main');
   * ```
   *
   * @param label The window label.
   * @returns The Window instance to communicate with the window or null if the window doesn't exist.
   */
  static async getByLabel(t) {
    var n;
    return (n = (await aa()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ad();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return aa();
  }
  /**
   *  Gets the focused window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const focusedWindow = Window.getFocusedWindow();
   * ```
   *
   * @returns The Window instance or `undefined` if there is not any focused window.
   */
  static async getFocusedWindow() {
    for (const t of await aa())
      if (await t.isFocused())
        return t;
    return null;
  }
  /**
   * Listen to an emitted event on this window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async listen(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : wl(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Listen to an emitted event on this window only once.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().once<null>('initialized', (event) => {
   *   console.log(`Window initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async once(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Fw(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emit(t, n) {
    if (la.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return jw(t, n);
  }
  /**
   * Emits an event to all {@link EventTarget|targets} matching the given target.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('main', 'window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emitTo(t, n, o) {
    if (la.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Vw(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return la.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
  }
  // Getters
  /**
   * The scale factor that can be used to map physical pixels to logical pixels.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const factor = await getCurrentWindow().scaleFactor();
   * ```
   *
   * @returns The window's monitor scale factor.
   */
  async scaleFactor() {
    return W("plugin:window|scale_factor", {
      label: this.label
    });
  }
  /**
   * The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().innerPosition();
   * ```
   *
   * @returns The window's inner position.
   */
  async innerPosition() {
    return W("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new lo(t));
  }
  /**
   * The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().outerPosition();
   * ```
   *
   * @returns The window's outer position.
   */
  async outerPosition() {
    return W("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new lo(t));
  }
  /**
   * The physical size of the window's client area.
   * The client area is the content of the window, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().innerSize();
   * ```
   *
   * @returns The window's inner size.
   */
  async innerSize() {
    return W("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Os(t));
  }
  /**
   * The physical size of the entire window.
   * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().outerSize();
   * ```
   *
   * @returns The window's outer size.
   */
  async outerSize() {
    return W("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Os(t));
  }
  /**
   * Gets the window's current fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const fullscreen = await getCurrentWindow().isFullscreen();
   * ```
   *
   * @returns Whether the window is in fullscreen mode or not.
   */
  async isFullscreen() {
    return W("plugin:window|is_fullscreen", {
      label: this.label
    });
  }
  /**
   * Gets the window's current minimized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimized = await getCurrentWindow().isMinimized();
   * ```
   */
  async isMinimized() {
    return W("plugin:window|is_minimized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximized = await getCurrentWindow().isMaximized();
   * ```
   *
   * @returns Whether the window is maximized or not.
   */
  async isMaximized() {
    return W("plugin:window|is_maximized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current focus state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const focused = await getCurrentWindow().isFocused();
   * ```
   *
   * @returns Whether the window is focused or not.
   */
  async isFocused() {
    return W("plugin:window|is_focused", {
      label: this.label
    });
  }
  /**
   * Gets the window's current decorated state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const decorated = await getCurrentWindow().isDecorated();
   * ```
   *
   * @returns Whether the window is decorated or not.
   */
  async isDecorated() {
    return W("plugin:window|is_decorated", {
      label: this.label
    });
  }
  /**
   * Gets the window's current resizable state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const resizable = await getCurrentWindow().isResizable();
   * ```
   *
   * @returns Whether the window is resizable or not.
   */
  async isResizable() {
    return W("plugin:window|is_resizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native maximize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximizable = await getCurrentWindow().isMaximizable();
   * ```
   *
   * @returns Whether the window's native maximize button is enabled or not.
   */
  async isMaximizable() {
    return W("plugin:window|is_maximizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native minimize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimizable = await getCurrentWindow().isMinimizable();
   * ```
   *
   * @returns Whether the window's native minimize button is enabled or not.
   */
  async isMinimizable() {
    return W("plugin:window|is_minimizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native close button state.
   *
   * #### Platform-specific
   *
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const closable = await getCurrentWindow().isClosable();
   * ```
   *
   * @returns Whether the window's native close button is enabled or not.
   */
  async isClosable() {
    return W("plugin:window|is_closable", {
      label: this.label
    });
  }
  /**
   * Gets the window's current visible state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const visible = await getCurrentWindow().isVisible();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isVisible() {
    return W("plugin:window|is_visible", {
      label: this.label
    });
  }
  /**
   * Gets the window's current title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const title = await getCurrentWindow().title();
   * ```
   */
  async title() {
    return W("plugin:window|title", {
      label: this.label
    });
  }
  /**
   * Gets the window's current theme.
   *
   * #### Platform-specific
   *
   * - **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const theme = await getCurrentWindow().theme();
   * ```
   *
   * @returns The window theme.
   */
  async theme() {
    return W("plugin:window|theme", {
      label: this.label
    });
  }
  /**
   * Whether the window is configured to be always on top of other windows or not.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const alwaysOnTop = await getCurrentWindow().isAlwaysOnTop();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isAlwaysOnTop() {
    return W("plugin:window|is_always_on_top", {
      label: this.label
    });
  }
  // Setters
  /**
   * Centers the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().center();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async center() {
    return W("plugin:window|center", {
      label: this.label
    });
  }
  /**
   *  Requests user attention to the window, this has no effect if the application
   * is already focused. How requesting for user attention manifests is platform dependent,
   * see `UserAttentionType` for details.
   *
   * Providing `null` will unset the request for user attention. Unsetting the request for
   * user attention might not be done automatically by the WM when the window receives input.
   *
   * #### Platform-specific
   *
   * - **macOS:** `null` has no effect.
   * - **Linux:** Urgency levels have the same effect.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().requestUserAttention();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async requestUserAttention(t) {
    let n = null;
    return t && (t === Ia.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), W("plugin:window|request_user_attention", {
      label: this.label,
      value: n
    });
  }
  /**
   * Updates the window resizable flag.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setResizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setResizable(t) {
    return W("plugin:window|set_resizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Enable or disable the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async setEnabled(t) {
    return W("plugin:window|set_enabled", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window is enabled or disabled.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async isEnabled() {
    return W("plugin:window|is_enabled", {
      label: this.label
    });
  }
  /**
   * Sets whether the window's native maximize button is enabled or not.
   * If resizable is set to false, this setting is ignored.
   *
   * #### Platform-specific
   *
   * - **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaximizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaximizable(t) {
    return W("plugin:window|set_maximizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native minimize button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinimizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinimizable(t) {
    return W("plugin:window|set_minimizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native close button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setClosable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setClosable(t) {
    return W("plugin:window|set_closable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setTitle('Tauri');
   * ```
   *
   * @param title The new title
   * @returns A promise indicating the success or failure of the operation.
   */
  async setTitle(t) {
    return W("plugin:window|set_title", {
      label: this.label,
      value: t
    });
  }
  /**
   * Maximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().maximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async maximize() {
    return W("plugin:window|maximize", {
      label: this.label
    });
  }
  /**
   * Unmaximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unmaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unmaximize() {
    return W("plugin:window|unmaximize", {
      label: this.label
    });
  }
  /**
   * Toggles the window maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().toggleMaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async toggleMaximize() {
    return W("plugin:window|toggle_maximize", {
      label: this.label
    });
  }
  /**
   * Minimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().minimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async minimize() {
    return W("plugin:window|minimize", {
      label: this.label
    });
  }
  /**
   * Unminimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unminimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unminimize() {
    return W("plugin:window|unminimize", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to true.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async show() {
    return W("plugin:window|show", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to false.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async hide() {
    return W("plugin:window|hide", {
      label: this.label
    });
  }
  /**
   * Closes the window.
   *
   * Note this emits a closeRequested event so you can intercept it. To force window close, use {@link Window.destroy}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async close() {
    return W("plugin:window|close", {
      label: this.label
    });
  }
  /**
   * Destroys the window. Behaves like {@link Window.close} but forces the window close instead of emitting a closeRequested event.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().destroy();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async destroy() {
    return W("plugin:window|destroy", {
      label: this.label
    });
  }
  /**
   * Whether the window should have borders and bars.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setDecorations(false);
   * ```
   *
   * @param decorations Whether the window should have borders and bars.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setDecorations(t) {
    return W("plugin:window|set_decorations", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether or not the window should have shadow.
   *
   * #### Platform-specific
   *
   * - **Windows:**
   *   - `false` has no effect on decorated window, shadows are always ON.
   *   - `true` will make undecorated window have a 1px white border,
   * and on Windows 11, it will have a rounded corners.
   * - **Linux:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setShadow(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setShadow(t) {
    return W("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return W("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return W("plugin:window|set_effects", {
      label: this.label,
      value: null
    });
  }
  /**
   * Whether the window should always be on top of other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnTop(true);
   * ```
   *
   * @param alwaysOnTop Whether the window should always be on top of other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnTop(t) {
    return W("plugin:window|set_always_on_top", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window should always be below other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnBottom(true);
   * ```
   *
   * @param alwaysOnBottom Whether the window should always be below other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnBottom(t) {
    return W("plugin:window|set_always_on_bottom", {
      label: this.label,
      value: t
    });
  }
  /**
   * Prevents the window contents from being captured by other apps.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setContentProtected(true);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setContentProtected(t) {
    return W("plugin:window|set_content_protected", {
      label: this.label,
      value: t
    });
  }
  /**
   * Resizes the window with a new inner size.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSize(t) {
    return W("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Uo ? t : new Uo(t)
    });
  }
  /**
   * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, PhysicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinSize(new PhysicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinSize(t) {
    return W("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Uo ? t : t ? new Uo(t) : null
    });
  }
  /**
   * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaxSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaxSize(t) {
    return W("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Uo ? t : t ? new Uo(t) : null
    });
  }
  /**
   * Sets the window inner size constraints.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSizeConstraints({ minWidth: 300 });
   * ```
   *
   * @param constraints The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSizeConstraints(t) {
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return W("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: n(t?.minWidth),
        minHeight: n(t?.minHeight),
        maxWidth: n(t?.maxWidth),
        maxHeight: n(t?.maxHeight)
      }
    });
  }
  /**
   * Sets the window outer position.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setPosition(t) {
    return W("plugin:window|set_position", {
      label: this.label,
      value: t instanceof rr ? t : new rr(t)
    });
  }
  /**
   * Sets the window fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFullscreen(true);
   * ```
   *
   * @param fullscreen Whether the window should go to fullscreen or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFullscreen(t) {
    return W("plugin:window|set_fullscreen", {
      label: this.label,
      value: t
    });
  }
  /**
   * Bring the window to front and focus.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFocus() {
    return W("plugin:window|set_focus", {
      label: this.label
    });
  }
  /**
   * Sets the window icon.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIcon('/tauri/awesome.png');
   * ```
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @param icon Icon bytes or path to the icon file.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIcon(t) {
    return W("plugin:window|set_icon", {
      label: this.label,
      value: Er(t)
    });
  }
  /**
   * Whether the window icon should be hidden from the taskbar or not.
   *
   * #### Platform-specific
   *
   * - **macOS:** Unsupported.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSkipTaskbar(true);
   * ```
   *
   * @param skip true to hide window icon, false to show it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSkipTaskbar(t) {
    return W("plugin:window|set_skip_taskbar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Grabs the cursor, preventing it from leaving the window.
   *
   * There's no guarantee that the cursor will be hidden. You should
   * hide it by yourself if you want so.
   *
   * #### Platform-specific
   *
   * - **Linux:** Unsupported.
   * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorGrab(true);
   * ```
   *
   * @param grab `true` to grab the cursor icon, `false` to release it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorGrab(t) {
    return W("plugin:window|set_cursor_grab", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor's visibility.
   *
   * #### Platform-specific
   *
   * - **Windows:** The cursor is only hidden within the confines of the window.
   * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
   *   outside of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorVisible(false);
   * ```
   *
   * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorVisible(t) {
    return W("plugin:window|set_cursor_visible", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor icon of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorIcon('help');
   * ```
   *
   * @param icon The new cursor icon.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorIcon(t) {
    return W("plugin:window|set_cursor_icon", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window background color.
   *
   * #### Platform-specific:
   *
   * - **Windows:** alpha channel is ignored.
   * - **iOS / Android:** Unsupported.
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  async setBackgroundColor(t) {
    return W("plugin:window|set_background_color", { color: t });
  }
  /**
   * Changes the position of the cursor in window coordinates.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorPosition(new LogicalPosition(600, 300));
   * ```
   *
   * @param position The new cursor position.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorPosition(t) {
    return W("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof rr ? t : new rr(t)
    });
  }
  /**
   * Changes the cursor events behavior.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIgnoreCursorEvents(true);
   * ```
   *
   * @param ignore `true` to ignore the cursor events; `false` to process them as usual.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIgnoreCursorEvents(t) {
    return W("plugin:window|set_ignore_cursor_events", {
      label: this.label,
      value: t
    });
  }
  /**
   * Starts dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startDragging() {
    return W("plugin:window|start_dragging", {
      label: this.label
    });
  }
  /**
   * Starts resize-dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startResizeDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startResizeDragging(t) {
    return W("plugin:window|start_resize_dragging", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge count. It is app wide and not specific to this window.
   *
   * #### Platform-specific
   *
   * - **Windows**: Unsupported. Use @{linkcode Window.setOverlayIcon} instead.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeCount(5);
   * ```
   *
   * @param count The badge count. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeCount(t) {
    return W("plugin:window|set_badge_count", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge cont **macOS only**.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeLabel("Hello");
   * ```
   *
   * @param label The badge label. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeLabel(t) {
    return W("plugin:window|set_badge_label", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the overlay icon. **Windows only**
   * The overlay icon can be set for every window.
   *
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   *
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setOverlayIcon("/tauri/awesome.png");
   * ```
   *
   * @param icon Icon bytes or path to the icon file. Use `undefined` to remove the overlay icon.
   * @return A promise indicating the success or failure of the operation.
   */
  async setOverlayIcon(t) {
    return W("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Er(t) : void 0
    });
  }
  /**
   * Sets the taskbar progress state.
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Progress bar is app-wide and not specific to this window.
   * - **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).
   *
   * @example
   * ```typescript
   * import { getCurrentWindow, ProgressBarStatus } from '@tauri-apps/api/window';
   * await getCurrentWindow().setProgressBar({
   *   status: ProgressBarStatus.Normal,
   *   progress: 50,
   * });
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async setProgressBar(t) {
    return W("plugin:window|set_progress_bar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window should be visible on all workspaces or virtual desktops.
   *
   * #### Platform-specific
   *
   * - **Windows / iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setVisibleOnAllWorkspaces(t) {
    return W("plugin:window|set_visible_on_all_workspaces", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the title bar style. **macOS only**.
   *
   * @since 2.0.0
   */
  async setTitleBarStyle(t) {
    return W("plugin:window|set_title_bar_style", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window theme, pass in `null` or `undefined` to follow system theme
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Theme is app-wide and not specific to this window.
   * - **iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setTheme(t) {
    return W("plugin:window|set_theme", {
      label: this.label,
      value: t
    });
  }
  // Listeners
  /**
   * Listen to window resize.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onResized(({ payload: size }) => {
   *  console.log('Window resized', size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onResized(t) {
    return this.listen(Gt.WINDOW_RESIZED, (n) => {
      n.payload = new Os(n.payload), t(n);
    });
  }
  /**
   * Listen to window move.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onMoved(({ payload: position }) => {
   *  console.log('Window moved', position);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onMoved(t) {
    return this.listen(Gt.WINDOW_MOVED, (n) => {
      n.payload = new lo(n.payload), t(n);
    });
  }
  /**
   * Listen to window close requested. Emitted when the user requests to closes the window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * import { confirm } from '@tauri-apps/api/dialog';
   * const unlisten = await getCurrentWindow().onCloseRequested(async (event) => {
   *   const confirmed = await confirm('Are you sure?');
   *   if (!confirmed) {
   *     // user did not confirm closing the window; let's prevent it
   *     event.preventDefault();
   *   }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onCloseRequested(t) {
    return this.listen(Gt.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Hw(n);
      await t(o), o.isPreventDefault() || await this.destroy();
    });
  }
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the webview,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/webview";
   * const unlisten = await getCurrentWindow().onDragDropEvent((event) => {
   *  if (event.payload.type === 'over') {
   *    console.log('User hovering', event.payload.position);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onDragDropEvent(t) {
    const n = await this.listen(Gt.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new lo(r.payload.position)
        }
      });
    }), o = await this.listen(Gt.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new lo(r.payload.position)
        }
      });
    }), s = await this.listen(Gt.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new lo(r.payload.position)
        }
      });
    }), a = await this.listen(Gt.DRAG_LEAVE, (r) => {
      t({ ...r, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), a();
    };
  }
  /**
   * Listen to window focus change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onFocusChanged(({ payload: focused }) => {
   *  console.log('Focus changed, window is focused? ' + focused);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onFocusChanged(t) {
    const n = await this.listen(Gt.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(Gt.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      n(), o();
    };
  }
  /**
   * Listen to window scale change. Emitted when the window's scale factor has changed.
   * The following user actions can cause DPI changes:
   * - Changing the display's resolution.
   * - Changing the display's scale factor (e.g. in Control Panel on Windows).
   * - Moving the window to a display with a different scale factor.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onScaleChanged(({ payload }) => {
   *  console.log('Scale changed', payload.scaleFactor, payload.size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onScaleChanged(t) {
    return this.listen(Gt.WINDOW_SCALE_FACTOR_CHANGED, t);
  }
  /**
   * Listen to the system theme change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
   *  console.log('New theme: ' + theme);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onThemeChanged(t) {
    return this.listen(Gt.WINDOW_THEME_CHANGED, t);
  }
}
var bc;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(bc || (bc = {}));
var yc;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(yc || (yc = {}));
var wc;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(wc || (wc = {}));
async function Ed() {
  return await W("local_ai_get_config");
}
async function pr(e) {
  return await W("local_ai_save_config", { config: e });
}
async function xd(e) {
  return await W("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Ww() {
  return await W("local_ai_get_runtime_status");
}
async function Ld() {
  return await W("local_ai_get_status");
}
async function Uw(e) {
  return await W("local_ai_start_service", {
    config: e ?? null
  });
}
async function Id() {
  return await W("local_ai_restart_service");
}
async function Gw() {
  await W("local_ai_stop_service");
}
async function qw(e) {
  return await W("local_ai_chat", { request: e });
}
function Od() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Kw(e, t, n = {}) {
  const o = n.requestId ?? Od(), s = await wl(
    "local-ai-chat-stream",
    (a) => {
      const r = a.payload;
      r.requestId === o && (r.event === "delta" && r.content ? t(r.content) : r.event === "stats" && r.stats && n.onStats?.(r.stats));
    }
  );
  try {
    return await W("local_ai_chat_stream", {
      request: e,
      requestId: o
    });
  } finally {
    s();
  }
}
async function ia(e) {
  return await W("local_ai_cancel_chat_stream", { requestId: e });
}
async function Zw() {
  return await W("local_ai_get_chat_histories");
}
async function Yw(e) {
  return await W(
    "local_ai_read_attachment_files",
    { paths: e }
  );
}
async function Xw(e) {
  return await W("local_ai_save_chat_history", {
    history: e
  });
}
async function Qw(e) {
  return await W("local_ai_delete_chat_history", {
    historyId: e
  });
}
async function Jw() {
  return await W("local_ai_clear_chat_histories");
}
const e_ = ["disabled"], t_ = {
  key: 0,
  class: "custom-button__loading"
}, n_ = /* @__PURE__ */ se({
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
    return (n, o) => (S(), D("button", {
      class: z([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: o[0] || (o[0] = (s) => n.$emit("click", s))
    }, [
      e.loading ? (S(), D("div", t_, o[1] || (o[1] = [
        f(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            f("circle", {
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
      ]))) : Q("v-if", !0),
      ce(n.$slots, "default", {}, void 0, !0)
    ], 10, e_));
  }
}), Mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Jt = /* @__PURE__ */ Mo(n_, [["__scopeId", "data-v-5d7f8015"]]), o_ = /* @__PURE__ */ se({
  name: "CustomSwitch",
  __name: "CustomSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: "#4b94f8"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => {
      if (n.disabled) return;
      const a = !n.modelValue;
      o("update:modelValue", a), o("change", a);
    };
    return (a, r) => (S(), D(
      "div",
      {
        class: z(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: s
      },
      [
        e.activeText || e.inactiveText ? (S(), D(
          "span",
          {
            key: 0,
            class: z(["custom-switch__text", { "custom-switch__text--active": e.modelValue }])
          },
          E(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0),
        r[0] || (r[0] = f(
          "div",
          { class: "custom-switch__core" },
          [
            f("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), gs = /* @__PURE__ */ Mo(o_, [["__scopeId", "data-v-59686f54"]]), s_ = { class: "dialog-footer-default" }, r_ = { class: "footer-left" }, a_ = { class: "footer-right" }, l_ = /* @__PURE__ */ se({
  __name: "CommonDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    width: { default: "540px" },
    closeOnClickModal: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !0 },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    appendToBody: { type: Boolean, default: !0 },
    alignCenter: { type: Boolean, default: !0 },
    showDefaultFooter: { type: Boolean, default: !1 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 },
    customClass: { default: "" }
  },
  emits: ["update:modelValue", "confirm", "cancel", "close"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, a = N(o.modelValue), r = A(() => ["app-dialog", o.customClass].filter(Boolean).join(" "));
    he(
      () => o.modelValue,
      (d) => {
        a.value = d;
      }
    ), he(a, (d) => {
      s("update:modelValue", d);
    });
    const i = () => {
      s("close");
    }, c = () => {
      s("confirm");
    }, u = () => {
      a.value = !1, s("cancel");
    };
    return t({
      open: () => {
        a.value = !0;
      },
      close: () => {
        a.value = !1;
      }
    }), (d, h) => {
      const g = G1;
      return S(), re(g, {
        modelValue: l(a),
        "onUpdate:modelValue": h[0] || (h[0] = (w) => en(a) ? a.value = w : null),
        title: d.title,
        width: d.width,
        "close-on-click-modal": d.closeOnClickModal,
        draggable: d.draggable,
        center: d.center,
        "show-close": d.showClose,
        "close-on-press-escape": d.closeOnPressEscape,
        "append-to-body": d.appendToBody,
        "align-center": d.alignCenter,
        "custom-class": l(r),
        onClose: i
      }, Va({
        default: ee(() => [
          ce(d.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        d.$slots.header ? {
          name: "header",
          fn: ee(() => [
            ce(d.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        d.$slots.footer || d.showDefaultFooter ? {
          name: "footer",
          fn: ee(() => [
            ce(d.$slots, "footer", {}, () => [
              f("div", s_, [
                f("div", r_, [
                  ce(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                f("div", a_, [
                  k(Jt, { onClick: u }, {
                    default: ee(() => [
                      pt(
                        E(d.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  k(Jt, {
                    type: "primary",
                    loading: d.loading,
                    onClick: c
                  }, {
                    default: ee(() => [
                      pt(
                        E(d.confirmText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ])
            ], !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue", "title", "width", "close-on-click-modal", "draggable", "center", "show-close", "close-on-press-escape", "append-to-body", "align-center", "custom-class"]);
    };
  }
}), $d = /* @__PURE__ */ Mo(l_, [["__scopeId", "data-v-a7e8a5d6"]]), i_ = { class: "confirm-content" }, c_ = { class: "confirm-footer" }, u_ = /* @__PURE__ */ se({
  __name: "ConfirmDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "提示" },
    message: { default: "" },
    width: { default: "420px" },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    showCancelButton: { type: Boolean, default: !0 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 },
    type: { default: "info" }
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, a = N(o.modelValue), r = A(() => {
      const d = ["confirm-dialog"];
      return o.type === "warning" ? d.push("warning-dialog") : o.type === "danger" && d.push("delete-dialog"), d.join(" ");
    }), i = A(() => o.type === "danger" ? "danger" : o.type === "warning" ? "warning" : "primary");
    he(
      () => o.modelValue,
      (d) => {
        a.value = d;
      }
    ), he(a, (d) => {
      s("update:modelValue", d);
    });
    const c = () => {
      s("confirm");
    }, u = () => {
      a.value = !1, s("cancel");
    };
    return t({
      open: () => {
        a.value = !0;
      },
      close: () => {
        a.value = !1;
      }
    }), (d, h) => (S(), re($d, {
      modelValue: l(a),
      "onUpdate:modelValue": h[0] || (h[0] = (g) => en(a) ? a.value = g : null),
      title: d.title,
      width: d.width,
      center: d.center,
      "show-close": d.showClose,
      "custom-class": l(r)
    }, {
      footer: ee(() => [
        f("div", c_, [
          d.showCancelButton ? (S(), re(Jt, {
            key: 0,
            type: "default",
            onClick: u
          }, {
            default: ee(() => [
              pt(
                E(d.cancelText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : Q("v-if", !0),
          k(Jt, {
            type: l(i),
            loading: d.loading,
            onClick: c
          }, {
            default: ee(() => [
              pt(
                E(d.confirmText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "loading"])
        ])
      ]),
      default: ee(() => [
        f("div", i_, [
          ce(d.$slots, "default", {}, () => [
            pt(
              E(d.message),
              1
              /* TEXT */
            )
          ], !0)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue", "title", "width", "center", "show-close", "custom-class"]));
  }
}), d_ = /* @__PURE__ */ Mo(u_, [["__scopeId", "data-v-875c8d56"]]), $e = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", o) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: o
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
      position: o = "center",
      duration: s = 3e3,
      showClose: a = !1
    } = e;
    o === "center" ? Cw({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Pw({
      message: t,
      type: n,
      position: o,
      duration: s,
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
}, f_ = "snippets-code:developer-mode", Rd = "snippets-code:frontend-diagnostics", p_ = 240, vs = "[REDACTED]", hr = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${vs}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${vs}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  vs
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${vs}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${vs}`
), Md = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return hr(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return hr(
      JSON.stringify(
        e,
        (n, o) => {
          if (o instanceof Error)
            return {
              name: o.name,
              message: o.message,
              stack: o.stack,
              cause: o.cause
            };
          if (typeof o == "bigint") return o.toString();
          if (typeof o == "object" && o !== null) {
            if (t.has(o)) return "[Circular]";
            t.add(o);
          }
          return o;
        },
        2
      )
    );
  } catch {
    return hr(String(e));
  }
}, h_ = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, m_ = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Rd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, _l = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(f_) === "true";
  } catch {
    return !1;
  }
}, g_ = (e, t, n) => {
  if (!_l() || typeof localStorage > "u") return;
  const o = m_();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: h_(),
    message: hr(t),
    data: Md(n)
  });
  try {
    localStorage.setItem(
      Rd,
      JSON.stringify(o.slice(-p_))
    );
  } catch {
  }
}, v_ = () => _l(), b_ = (e) => e === "error" || _l(), ar = (e, t, n) => {
  g_(e, t, n), b_(e) && W("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Md(n)
  }).catch(() => {
  });
}, yt = {
  info: (e, t, ...n) => {
    ar("info", e, t);
  },
  error: (e, t) => {
    ar("error", e, t);
  },
  warn: (e, t) => {
    ar("warn", e, t);
  },
  debug: (e, t) => {
    v_() && ar("debug", e, t);
  }
}, y_ = /* @__PURE__ */ new Set([
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
]), w_ = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), __ = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), k_ = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), Pd = 5, T_ = 1024 * 1024, S_ = 5 * 1024 * 1024, _c = 4e4, ca = (e) => e?.map((t) => ({ ...t })) ?? [], kl = (e) => e.split(".").pop()?.toLowerCase() ?? "", Nd = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, Tl = (e) => w_.has(e.type) || __.has(kl(e.name)), Dd = (e) => e.type.startsWith("text/") || y_.has(kl(e.name)), A_ = (e) => k_.has(kl(e.name)), C_ = async (e) => await new Promise((t, n) => {
  const o = new FileReader();
  o.onload = () => t(String(o.result ?? "")), o.onerror = () => n(o.error ?? new Error("read failed")), o.readAsDataURL(e);
}), E_ = async (e) => {
  const t = await e.text();
  return t.length <= _c ? { text: t, truncated: !1 } : {
    text: t.slice(0, _c),
    truncated: !0
  };
}, x_ = (e, t) => {
  const n = t.filter(
    (s) => s.type === "text" && s.status === "parsed"
  );
  if (!n.length) return e;
  const o = n.map((s, a) => {
    const r = s.error === "truncated";
    return [
      `--- 文件 ${a + 1}: ${s.name} ---`,
      r ? "以下文件内容已截断。" : "",
      s.text ?? "",
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
    ...o
  ].join(`
`);
}, ua = 160, zd = (e) => {
  const t = e.trim();
  if (!t) return 0;
  const n = (t.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, a = (t.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((r, i) => /^[A-Za-z0-9_]+$/.test(i) ? r + Math.max(1, Math.ceil(i.length / 4)) : r + 1, 0);
  return Math.max(1, Math.ceil(n + a));
}, da = (e) => Math.max(0, Math.ceil(e.length / 4)), L_ = (e) => Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0, I_ = (e, t) => {
  const n = Object.entries(t).filter(
    ([, o]) => o != null
  );
  return {
    ...e,
    ...Object.fromEntries(n)
  };
}, Bd = (e) => Array.isArray(e) ? e.filter((t) => t.type === "text").map((t) => t.text).join(`
`) : e, O_ = (e) => {
  const t = e.attachments?.filter(
    (a) => a.status === "parsed"
  ) ?? [], n = x_(
    e.content,
    t
  ), o = t.filter(
    (a) => a.type === "image" && a.dataUrl
  );
  if (!o.length) return n;
  const s = [{ type: "text", text: n }];
  for (const a of o)
    s.push({
      type: "image_url",
      image_url: { url: a.dataUrl ?? "" }
    });
  return s;
}, ls = (e) => zd(
  e.map((t) => `${t.role}: ${Bd(t.content)}`).join(`
`)
), kc = (e, t, n) => {
  const o = Math.max(240, t * 4);
  return e.length <= o ? e : `${n}

${e.slice(-o)}`;
}, bs = (e) => String(e).padStart(2, "0"), $_ = (e = /* @__PURE__ */ new Date()) => {
  const t = -e.getTimezoneOffset() / 60, n = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${t >= 0 ? "+" : ""}${t}`, o = [
    e.getFullYear(),
    bs(e.getMonth() + 1),
    bs(e.getDate())
  ].join("-"), s = [
    bs(e.getHours()),
    bs(e.getMinutes()),
    bs(e.getSeconds())
  ].join(":"), a = e.toLocaleDateString("zh-CN", { weekday: "long" });
  return { isoDate: o, localTime: s, timeZone: n, weekday: a };
}, R_ = () => {
  const { isoDate: e, localTime: t, timeZone: n, weekday: o } = $_();
  return {
    role: "system",
    content: [
      "Current runtime context is authoritative.",
      `Current local date: ${e}`,
      `Current local weekday: ${o}`,
      `Current local time: ${t}`,
      `Current timezone: ${n}`,
      "For questions involving today, the current date, or the current time, use this runtime context as the source of truth rather than model memory."
    ].join(`
`)
  };
}, M_ = (e) => {
  const t = e.filter((o) => o.role === "system").map((o) => Bd(o.content).trim()).filter(Boolean), n = e.filter(
    (o) => o.role !== "system"
  );
  return t.length ? [
    { role: "system", content: t.join(`

---

`) },
    ...n
  ] : n;
}, P_ = (e, t, n) => {
  if (e.role !== "assistant" || typeof e.content != "string" || t < ua)
    return null;
  let o = t, s = {
    ...e,
    content: kc(
      e.content,
      o,
      n
    )
  };
  for (; ls([s]) > t && o > ua; )
    o = Math.max(
      ua,
      Math.floor(o * 0.7)
    ), s = {
      ...e,
      content: kc(
        e.content,
        o,
        n
      )
    };
  return ls([s]) <= t ? s : null;
}, N_ = (e, t, n) => {
  const o = [];
  let s = 0;
  for (let a = e.length - 1; a >= 0; a -= 1) {
    const r = e[a], i = ls([r]);
    if (s + i <= t || o.length === 0) {
      o.unshift(r), s += i;
      continue;
    }
    const c = t - s, u = P_(
      r,
      c,
      n
    );
    u && (o.unshift(u), s += ls([u]));
  }
  return o;
}, To = (e) => `${Date.now()}-${e}-${Math.random().toString(16).slice(2, 8)}`, is = (e) => e.type === "root", Ur = (e) => new Map(e.map((t) => [t.id, t])), Gs = (e) => e.find(is), qs = (e, t) => {
  if (!t) return null;
  const n = Ur(e);
  let o = n.get(t);
  const s = /* @__PURE__ */ new Set();
  for (; o?.childIds?.length && !s.has(o.id); )
    s.add(o.id), o = n.get(o.childIds[o.childIds.length - 1]);
  return o?.id ?? null;
}, D_ = (e, t) => {
  if (e.some(is)) {
    const a = e.map((i) => ({
      ...i,
      type: i.type ?? "text",
      parentId: i.parentId ?? null,
      childIds: i.childIds ?? []
    })), r = Gs(a);
    return {
      messages: a,
      currentNodeId: qs(a, a.at(-1)?.id) ?? r?.id ?? null
    };
  }
  const n = {
    id: To("root"),
    role: "system",
    type: "root",
    content: "",
    createdAt: t,
    parentId: null,
    childIds: []
  }, o = [n];
  let s = n.id;
  for (const a of e) {
    const r = {
      ...a,
      role: a.role === "system" ? "assistant" : a.role,
      type: "text",
      parentId: s,
      childIds: []
    };
    o.find((c) => c.id === s)?.childIds?.push(r.id), o.push(r), s = r.id;
  }
  return { messages: o, currentNodeId: s };
}, Fd = (e, t) => {
  if (!t) return [];
  const n = Ur(e), o = [], s = /* @__PURE__ */ new Set();
  let a = n.get(t);
  for (; a && !s.has(a.id); )
    s.add(a.id), o.unshift(a), a = a.parentId ? n.get(a.parentId) : void 0;
  return o;
}, mr = (e) => {
  if (!e) return [];
  const t = e.currentNodeId ?? qs(e.messages, Gs(e.messages)?.id);
  return Fd(e.messages, t).filter(
    (n) => !is(n)
  );
}, z_ = (e) => {
  if (!e) return [];
  const t = Ur(e.messages), n = (o) => qs(e.messages, o) ?? o;
  return mr(e).map((o) => {
    const a = (o.parentId ? t.get(o.parentId) : void 0)?.childIds ?? [o.id];
    return {
      message: o,
      siblingLeafNodeIds: a.map(n),
      siblingCurrentIndex: Math.max(0, a.indexOf(o.id))
    };
  });
}, fa = (e, t) => {
  const n = Gs(e.messages), o = t.parentId ?? e.currentNodeId ?? n?.id ?? null, s = {
    ...t,
    type: "text",
    parentId: o,
    childIds: []
  };
  if (e.messages.push(s), o) {
    const a = e.messages.find((r) => r.id === o);
    a && (a.childIds = [...a.childIds ?? [], s.id]);
  }
  return e.currentNodeId = s.id, s;
}, B_ = (e, t) => {
  const n = Ur(e), o = /* @__PURE__ */ new Set(), s = (a) => {
    if (!o.has(a)) {
      o.add(a);
      for (const r of n.get(a)?.childIds ?? []) s(r);
    }
  };
  return s(t), o;
}, F_ = (e, t, n) => {
  const o = e.find((i) => i.id === n);
  if (!o || is(o)) return null;
  const s = B_(e, n), a = e.filter((i) => !s.has(i.id)).map((i) => ({
    ...i,
    childIds: (i.childIds ?? []).filter((c) => !s.has(c))
  })), r = t && s.has(t) ? qs(a, o.parentId) ?? Gs(a)?.id ?? null : t;
  return {
    messages: a,
    currentNodeId: r,
    deletedIds: s
  };
};
async function Oa(e = {}) {
  return typeof e == "object" && Object.freeze(e), await W("plugin:dialog|open", { options: e });
}
const j_ = [
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
  "log",
  "png",
  "jpg",
  "jpeg",
  "webp",
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx"
], Gr = (e, t) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: t,
  mime: e.type || "application/octet-stream",
  size: e.size,
  status: "pending"
}), V_ = async (e, t) => {
  const n = Gr(e, "image");
  if (e.size > S_)
    return {
      ...n,
      status: "error",
      error: t("localAi.imageTooLarge")
    };
  try {
    return {
      ...n,
      status: "parsed",
      dataUrl: await C_(e)
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, H_ = async (e, t) => {
  const n = Gr(e, "text");
  if (e.size > T_)
    return {
      ...n,
      status: "error",
      error: t("localAi.textFileTooLarge")
    };
  try {
    const o = await E_(e);
    return {
      ...n,
      status: "parsed",
      text: o.text,
      error: o.truncated ? "truncated" : void 0
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, W_ = async (e, t) => Tl(e) ? V_(e, t) : Dd(e) ? H_(e, t) : {
  ...Gr(e, "unsupported"),
  status: "error",
  error: A_(e) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
}, Tc = async (e, t, n) => {
  const o = Array.from(t), s = Pd - e.value.length;
  if (s <= 0) {
    $e.msg(n("localAi.attachmentLimit"), "warning");
    return;
  }
  o.length > s && $e.msg(n("localAi.attachmentLimit"), "warning");
  const a = o.slice(0, s), r = a.map(
    (i) => Gr(
      i,
      Tl(i) ? "image" : Dd(i) ? "text" : "unsupported"
    )
  );
  e.value.push(...r), await Promise.all(
    a.map(async (i, c) => {
      const u = await W_(i, n), d = e.value.findIndex(
        (h) => h.id === r[c].id
      );
      d >= 0 && (e.value[d] = u);
    })
  );
}, U_ = (e, t) => {
  switch (e.error) {
    case "image-too-large":
      return t("localAi.imageTooLarge");
    case "text-too-large":
      return t("localAi.textFileTooLarge");
    case "unsupported-document":
      return t("localAi.unsupportedDocument");
    case "unsupported-attachment":
      return t("localAi.unsupportedAttachment");
    case "read-failed":
      return t("localAi.attachmentReadFailed");
    default:
      return e.truncated ? "truncated" : void 0;
  }
}, G_ = (e) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: e.kind,
  mime: e.mime,
  size: e.size,
  status: e.error ? "error" : "parsed",
  text: e.text ?? void 0,
  dataUrl: e.dataUrl ?? void 0,
  error: void 0
}), q_ = () => {
  const { t: e } = js(), t = N([]), n = N(!1);
  return {
    attachments: t,
    attachmentPicking: n,
    pickAttachmentFiles: async () => {
      const o = Pd - t.value.length;
      if (o <= 0 || n.value) {
        o <= 0 && $e.msg(e("localAi.attachmentLimit"), "warning");
        return;
      }
      n.value = !0;
      try {
        const s = await Oa({
          title: e("localAi.addAttachment"),
          directory: !1,
          multiple: !0,
          filters: [
            {
              name: e("localAi.attachment"),
              extensions: j_
            }
          ]
        });
        if (!s) return;
        const a = (Array.isArray(s) ? s : [s]).slice(
          0,
          o
        );
        (Array.isArray(s) ? s.length : 1) > o && $e.msg(e("localAi.attachmentLimit"), "warning");
        const r = await Yw(a);
        t.value.push(
          ...r.map((i) => ({
            ...G_(i),
            error: U_(i, e)
          }))
        );
      } catch (s) {
        $e.msg(
          `${e("localAi.attachmentReadFailed")}: ${String(s)}`,
          "error"
        );
      } finally {
        n.value = !1;
      }
    },
    handleAttachmentDrop: async (o) => {
      o.dataTransfer?.files.length && await Tc(t, o.dataTransfer.files, e);
    },
    handleComposerPaste: async (o) => {
      const a = Array.from(o.clipboardData?.files ?? []).filter(Tl);
      a.length && (o.preventDefault(), await Tc(t, a, e));
    },
    removeAttachment: (o) => {
      t.value = t.value.filter(
        (s) => s.id !== o
      );
    },
    attachmentStatusText: (o) => o.status === "pending" ? e("localAi.attachmentPending") : o.status === "error" ? o.error ?? "" : o.error === "truncated" ? e("localAi.attachmentTruncated") : e("localAi.attachmentParsed")
  };
};
function Sl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Po = Sl();
function jd(e) {
  Po = e;
}
var Rs = { exec: () => null };
function Le(e, t = "") {
  let n = typeof e == "string" ? e : e.source, o = { replace: (s, a) => {
    let r = typeof a == "string" ? a : a.source;
    return r = r.replace(Pt.caret, "$1"), n = n.replace(s, r), o;
  }, getRegex: () => new RegExp(n, t) };
  return o;
}
var K_ = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Pt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Z_ = /^(?:[ \t]*(?:\n|$))+/, Y_ = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, X_ = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ks = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Q_ = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Al = /(?:[*+-]|\d{1,9}[.)])/, Vd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Hd = Le(Vd).replace(/bull/g, Al).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), J_ = Le(Vd).replace(/bull/g, Al).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Cl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ek = /^[^\n]+/, El = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, tk = Le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", El).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), nk = Le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Al).getRegex(), qr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", xl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ok = Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", xl).replace("tag", qr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Wd = Le(Cl).replace("hr", Ks).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qr).getRegex(), sk = Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Wd).getRegex(), Ll = { blockquote: sk, code: Y_, def: tk, fences: X_, heading: Q_, hr: Ks, html: ok, lheading: Hd, list: nk, newline: Z_, paragraph: Wd, table: Rs, text: ek }, Sc = Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ks).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qr).getRegex(), rk = { ...Ll, lheading: J_, table: Sc, paragraph: Le(Cl).replace("hr", Ks).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Sc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qr).getRegex() }, ak = { ...Ll, html: Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", xl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Rs, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Le(Cl).replace("hr", Ks).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Hd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, lk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ik = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ud = /^( {2,}|\\)\n(?!\s*$)/, ck = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Kr = /[\p{P}\p{S}]/u, Il = /[\s\p{P}\p{S}]/u, Gd = /[^\s\p{P}\p{S}]/u, uk = Le(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Il).getRegex(), qd = /(?!~)[\p{P}\p{S}]/u, dk = /(?!~)[\s\p{P}\p{S}]/u, fk = /(?:[^\s\p{P}\p{S}]|~)/u, pk = Le(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", K_ ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Kd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, hk = Le(Kd, "u").replace(/punct/g, Kr).getRegex(), mk = Le(Kd, "u").replace(/punct/g, qd).getRegex(), Zd = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", gk = Le(Zd, "gu").replace(/notPunctSpace/g, Gd).replace(/punctSpace/g, Il).replace(/punct/g, Kr).getRegex(), vk = Le(Zd, "gu").replace(/notPunctSpace/g, fk).replace(/punctSpace/g, dk).replace(/punct/g, qd).getRegex(), bk = Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Gd).replace(/punctSpace/g, Il).replace(/punct/g, Kr).getRegex(), yk = Le(/\\(punct)/, "gu").replace(/punct/g, Kr).getRegex(), wk = Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), _k = Le(xl).replace("(?:-->|$)", "-->").getRegex(), kk = Le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _k).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), xr = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Tk = Le(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", xr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Yd = Le(/^!?\[(label)\]\[(ref)\]/).replace("label", xr).replace("ref", El).getRegex(), Xd = Le(/^!?\[(ref)\](?:\[\])?/).replace("ref", El).getRegex(), Sk = Le("reflink|nolink(?!\\()", "g").replace("reflink", Yd).replace("nolink", Xd).getRegex(), Ac = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ol = { _backpedal: Rs, anyPunctuation: yk, autolink: wk, blockSkip: pk, br: Ud, code: ik, del: Rs, emStrongLDelim: hk, emStrongRDelimAst: gk, emStrongRDelimUnd: bk, escape: lk, link: Tk, nolink: Xd, punctuation: uk, reflink: Yd, reflinkSearch: Sk, tag: kk, text: ck, url: Rs }, Ak = { ...Ol, link: Le(/^!?\[(label)\]\((.*?)\)/).replace("label", xr).getRegex(), reflink: Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", xr).getRegex() }, $a = { ...Ol, emStrongRDelimAst: vk, emStrongLDelim: mk, url: Le(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Ac).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Le(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Ac).getRegex() }, Ck = { ...$a, br: Le(Ud).replace("{2,}", "*").getRegex(), text: Le($a.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, lr = { normal: Ll, gfm: rk, pedantic: ak }, ys = { normal: Ol, gfm: $a, breaks: Ck, pedantic: Ak }, Ek = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Cc = (e) => Ek[e];
function Wn(e, t) {
  if (t) {
    if (Pt.escapeTest.test(e)) return e.replace(Pt.escapeReplace, Cc);
  } else if (Pt.escapeTestNoEncode.test(e)) return e.replace(Pt.escapeReplaceNoEncode, Cc);
  return e;
}
function Ec(e) {
  try {
    e = encodeURI(e).replace(Pt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function xc(e, t) {
  let n = e.replace(Pt.findPipe, (a, r, i) => {
    let c = !1, u = r;
    for (; --u >= 0 && i[u] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), o = n.split(Pt.splitPipe), s = 0;
  if (o[0].trim() || o.shift(), o.length > 0 && !o.at(-1)?.trim() && o.pop(), t) if (o.length > t) o.splice(t);
  else for (; o.length < t; ) o.push("");
  for (; s < o.length; s++) o[s] = o[s].trim().replace(Pt.slashPipe, "|");
  return o;
}
function ws(e, t, n) {
  let o = e.length;
  if (o === 0) return "";
  let s = 0;
  for (; s < o && e.charAt(o - s - 1) === t; )
    s++;
  return e.slice(0, o - s);
}
function xk(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let o = 0; o < e.length; o++) if (e[o] === "\\") o++;
  else if (e[o] === t[0]) n++;
  else if (e[o] === t[1] && (n--, n < 0)) return o;
  return n > 0 ? -2 : -1;
}
function Lc(e, t, n, o, s) {
  let a = t.href, r = t.title || null, i = e[1].replace(s.other.outputLinkReplace, "$1");
  o.state.inLink = !0;
  let c = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: r, text: i, tokens: o.inlineTokens(i) };
  return o.state.inLink = !1, c;
}
function Lk(e, t, n) {
  let o = e.match(n.other.indentCodeCompensation);
  if (o === null) return t;
  let s = o[1];
  return t.split(`
`).map((a) => {
    let r = a.match(n.other.beginningSpace);
    if (r === null) return a;
    let [i] = r;
    return i.length >= s.length ? a.slice(s.length) : a;
  }).join(`
`);
}
var Lr = class {
  constructor(e) {
    ze(this, "options");
    ze(this, "rules");
    ze(this, "lexer");
    this.options = e || Po;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : ws(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], o = Lk(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: o };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let o = ws(n, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (n = o.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: ws(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = ws(t[0], `
`).split(`
`), o = "", s = "", a = [];
      for (; n.length > 0; ) {
        let r = !1, i = [], c;
        for (c = 0; c < n.length; c++) if (this.rules.other.blockquoteStart.test(n[c])) i.push(n[c]), r = !0;
        else if (!r) i.push(n[c]);
        else break;
        n = n.slice(c);
        let u = i.join(`
`), d = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        o = o ? `${o}
${u}` : u, s = s ? `${s}
${d}` : d;
        let h = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, a, !0), this.lexer.state.top = h, n.length === 0) break;
        let g = a.at(-1);
        if (g?.type === "code") break;
        if (g?.type === "blockquote") {
          let w = g, m = w.raw + `
` + n.join(`
`), b = this.blockquote(m);
          a[a.length - 1] = b, o = o.substring(0, o.length - w.raw.length) + b.raw, s = s.substring(0, s.length - w.text.length) + b.text;
          break;
        } else if (g?.type === "list") {
          let w = g, m = w.raw + `
` + n.join(`
`), b = this.list(m);
          a[a.length - 1] = b, o = o.substring(0, o.length - g.raw.length) + b.raw, s = s.substring(0, s.length - w.raw.length) + b.raw, n = m.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: a, text: s };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), o = n.length > 1, s = { type: "list", raw: "", ordered: o, start: o ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = o ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = o ? n : "[*+-]");
      let a = this.rules.other.listItemRegex(n), r = !1;
      for (; e; ) {
        let c = !1, u = "", d = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let h = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), g = e.split(`
`, 1)[0], w = !h.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, d = h.trimStart()) : w ? m = t[1].length + 1 : (m = t[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, d = h.slice(m), m += t[1].length), w && this.rules.other.blankLine.test(g) && (u += g + `
`, e = e.substring(g.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(m), C = this.rules.other.hrRegex(m), _ = this.rules.other.fencesBeginRegex(m), M = this.rules.other.headingBeginRegex(m), V = this.rules.other.htmlBeginRegex(m);
          for (; e; ) {
            let L = e.split(`
`, 1)[0], I;
            if (g = L, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), I = g) : I = g.replace(this.rules.other.tabCharGlobal, "    "), _.test(g) || M.test(g) || V.test(g) || b.test(g) || C.test(g)) break;
            if (I.search(this.rules.other.nonSpaceChar) >= m || !g.trim()) d += `
` + I.slice(m);
            else {
              if (w || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || _.test(h) || M.test(h) || C.test(h)) break;
              d += `
` + g;
            }
            !w && !g.trim() && (w = !0), u += L + `
`, e = e.substring(L.length + 1), h = I.slice(m);
          }
        }
        s.loose || (r ? s.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (r = !0)), s.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: !1, text: d, tokens: [] }), s.raw += u;
      }
      let i = s.items.at(-1);
      if (i) i.raw = i.raw.trimEnd(), i.text = i.text.trimEnd();
      else return;
      s.raw = s.raw.trimEnd();
      for (let c of s.items) {
        if (this.lexer.state.top = !1, c.tokens = this.lexer.blockTokens(c.text, []), c.task) {
          if (c.text = c.text.replace(this.rules.other.listReplaceTask, ""), c.tokens[0]?.type === "text" || c.tokens[0]?.type === "paragraph") {
            c.tokens[0].raw = c.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), c.tokens[0].text = c.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let d = this.lexer.inlineQueue.length - 1; d >= 0; d--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)) {
              this.lexer.inlineQueue[d].src = this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let u = this.rules.other.listTaskCheckbox.exec(c.raw);
          if (u) {
            let d = { type: "checkbox", raw: u[0] + " ", checked: u[0] !== "[ ]" };
            c.checked = d.checked, s.loose ? c.tokens[0] && ["paragraph", "text"].includes(c.tokens[0].type) && "tokens" in c.tokens[0] && c.tokens[0].tokens ? (c.tokens[0].raw = d.raw + c.tokens[0].raw, c.tokens[0].text = d.raw + c.tokens[0].text, c.tokens[0].tokens.unshift(d)) : c.tokens.unshift({ type: "paragraph", raw: d.raw, text: d.raw, tokens: [d] }) : c.tokens.unshift(d);
          }
        }
        if (!s.loose) {
          let u = c.tokens.filter((h) => h.type === "space"), d = u.length > 0 && u.some((h) => this.rules.other.anyLine.test(h.raw));
          s.loose = d;
        }
      }
      if (s.loose) for (let c of s.items) {
        c.loose = !0;
        for (let u of c.tokens) u.type === "text" && (u.type = "paragraph");
      }
      return s;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: !0, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), o = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: o, title: s };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = xc(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let r of o) this.rules.other.tableAlignRight.test(r) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(r) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(r) ? a.align.push("left") : a.align.push(null);
      for (let r = 0; r < n.length; r++) a.header.push({ text: n[r], tokens: this.lexer.inline(n[r]), header: !0, align: a.align[r] });
      for (let r of s) a.rows.push(xc(r, a.header.length).map((i, c) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[c] })));
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
        let a = ws(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = xk(t[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let r = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, r).trim(), t[3] = "";
        }
      }
      let o = t[2], s = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(o);
        a && (o = a[1], s = a[3]);
      } else s = t[3] ? t[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), Lc(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let o = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = t[o.toLowerCase()];
      if (!s) {
        let a = n[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return Lc(n, s, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!o || o[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let s = [...o[0]].length - 1, a, r, i = s, c = 0, u = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + s); (o = u.exec(t)) != null; ) {
        if (a = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !a) continue;
        if (r = [...a].length, o[3] || o[4]) {
          i += r;
          continue;
        } else if ((o[5] || o[6]) && s % 3 && !((s + r) % 3)) {
          c += r;
          continue;
        }
        if (i -= r, i > 0) continue;
        r = Math.min(r, r + i + c);
        let d = [...o[0]][0].length, h = e.slice(0, s + o.index + d + r);
        if (Math.min(s, r) % 2) {
          let w = h.slice(1, -1);
          return { type: "em", raw: h, text: w, tokens: this.lexer.inlineTokens(w) };
        }
        let g = h.slice(2, -2);
        return { type: "strong", raw: h, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), o = this.rules.other.nonSpaceChar.test(n), s = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return o && s && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
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
      let n, o;
      return t[2] === "@" ? (n = t[1], o = "mailto:" + n) : (n = t[1], o = n), { type: "link", raw: t[0], text: n, href: o, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, o;
      if (t[2] === "@") n = t[0], o = "mailto:" + n;
      else {
        let s;
        do
          s = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (s !== t[0]);
        n = t[0], t[1] === "www." ? o = "http://" + t[0] : o = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: o, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
}, hn = class Ra {
  constructor(t) {
    ze(this, "tokens");
    ze(this, "options");
    ze(this, "state");
    ze(this, "inlineQueue");
    ze(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Po, this.options.tokenizer = this.options.tokenizer || new Lr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Pt, block: lr.normal, inline: ys.normal };
    this.options.pedantic ? (n.block = lr.pedantic, n.inline = ys.pedantic) : this.options.gfm && (n.block = lr.gfm, this.options.breaks ? n.inline = ys.breaks : n.inline = ys.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: lr, inline: ys };
  }
  static lex(t, n) {
    return new Ra(n).lex(t);
  }
  static lexInline(t, n) {
    return new Ra(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Pt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let o = this.inlineQueue[n];
      this.inlineTokens(o.src, o.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], o = !1) {
    for (this.options.pedantic && (t = t.replace(Pt.tabCharGlobal, "    ").replace(Pt.spaceLine, "")); t; ) {
      let s;
      if (this.options.extensions?.block?.some((r) => (s = r.call({ lexer: this }, t, n)) ? (t = t.substring(s.raw.length), n.push(s), !0) : !1)) continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        let r = n.at(-1);
        s.raw.length === 1 && r !== void 0 ? r.raw += `
` : n.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        let r = n.at(-1);
        r?.type === "paragraph" || r?.type === "text" ? (r.raw += (r.raw.endsWith(`
`) ? "" : `
`) + s.raw, r.text += `
` + s.text, this.inlineQueue.at(-1).src = r.text) : n.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.list(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.html(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.def(t)) {
        t = t.substring(s.raw.length);
        let r = n.at(-1);
        r?.type === "paragraph" || r?.type === "text" ? (r.raw += (r.raw.endsWith(`
`) ? "" : `
`) + s.raw, r.text += `
` + s.raw, this.inlineQueue.at(-1).src = r.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = { href: s.href, title: s.title }, n.push(s));
        continue;
      }
      if (s = this.tokenizer.table(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      let a = t;
      if (this.options.extensions?.startBlock) {
        let r = 1 / 0, i = t.slice(1), c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, i), typeof c == "number" && c >= 0 && (r = Math.min(r, c));
        }), r < 1 / 0 && r >= 0 && (a = t.substring(0, r + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(a))) {
        let r = n.at(-1);
        o && r?.type === "paragraph" ? (r.raw += (r.raw.endsWith(`
`) ? "" : `
`) + s.raw, r.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : n.push(s), o = a.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        let r = n.at(-1);
        r?.type === "text" ? (r.raw += (r.raw.endsWith(`
`) ? "" : `
`) + s.raw, r.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : n.push(s);
        continue;
      }
      if (t) {
        let r = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(r);
          break;
        } else throw new Error(r);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    let o = t, s = null;
    if (this.tokens.links) {
      let c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; ) c.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; ) o = o.slice(0, s.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let a;
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) a = s[2] ? s[2].length : 0, o = o.slice(0, s.index + a) + "[" + "a".repeat(s[0].length - a - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    o = this.options.hooks?.emStrongMask?.call({ lexer: this }, o) ?? o;
    let r = !1, i = "";
    for (; t; ) {
      r || (i = ""), r = !1;
      let c;
      if (this.options.extensions?.inline?.some((d) => (c = d.call({ lexer: this }, t, n)) ? (t = t.substring(c.raw.length), n.push(c), !0) : !1)) continue;
      if (c = this.tokenizer.escape(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.link(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(c.raw.length);
        let d = n.at(-1);
        c.type === "text" && d?.type === "text" ? (d.raw += c.raw, d.text += c.text) : n.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(t, o, i)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.br(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.del(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(t))) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      let u = t;
      if (this.options.extensions?.startInline) {
        let d = 1 / 0, h = t.slice(1), g;
        this.options.extensions.startInline.forEach((w) => {
          g = w.call({ lexer: this }, h), typeof g == "number" && g >= 0 && (d = Math.min(d, g));
        }), d < 1 / 0 && d >= 0 && (u = t.substring(0, d + 1));
      }
      if (c = this.tokenizer.inlineText(u)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (i = c.raw.slice(-1)), r = !0;
        let d = n.at(-1);
        d?.type === "text" ? (d.raw += c.raw, d.text += c.text) : n.push(c);
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
}, Ir = class {
  constructor(e) {
    ze(this, "options");
    ze(this, "parser");
    this.options = e || Po;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let o = (t || "").match(Pt.notSpaceStart)?.[0], s = e.replace(Pt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Wn(o) + '">' + (n ? s : Wn(s, !0)) + `</code></pre>
` : "<pre><code>" + (n ? s : Wn(s, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, o = "";
    for (let r = 0; r < e.items.length; r++) {
      let i = e.items[r];
      o += this.listitem(i);
    }
    let s = t ? "ol" : "ul", a = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + s + a + `>
` + o + "</" + s + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let s = 0; s < e.header.length; s++) n += this.tablecell(e.header[s]);
    t += this.tablerow({ text: n });
    let o = "";
    for (let s = 0; s < e.rows.length; s++) {
      let a = e.rows[s];
      n = "";
      for (let r = 0; r < a.length; r++) n += this.tablecell(a[r]);
      o += this.tablerow({ text: n });
    }
    return o && (o = `<tbody>${o}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + o + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${Wn(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let o = this.parser.parseInline(n), s = Ec(e);
    if (s === null) return o;
    e = s;
    let a = '<a href="' + e + '"';
    return t && (a += ' title="' + Wn(t) + '"'), a += ">" + o + "</a>", a;
  }
  image({ href: e, title: t, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let s = Ec(e);
    if (s === null) return Wn(n);
    e = s;
    let a = `<img src="${e}" alt="${n}"`;
    return t && (a += ` title="${Wn(t)}"`), a += ">", a;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Wn(e.text);
  }
}, $l = class {
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
}, mn = class Ma {
  constructor(t) {
    ze(this, "options");
    ze(this, "renderer");
    ze(this, "textRenderer");
    this.options = t || Po, this.options.renderer = this.options.renderer || new Ir(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $l();
  }
  static parse(t, n) {
    return new Ma(n).parse(t);
  }
  static parseInline(t, n) {
    return new Ma(n).parseInline(t);
  }
  parse(t) {
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      if (this.options.extensions?.renderers?.[s.type]) {
        let r = s, i = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (i !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(r.type)) {
          n += i || "";
          continue;
        }
      }
      let a = s;
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
          let r = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(r), "";
          throw new Error(r);
        }
      }
    }
    return n;
  }
  parseInline(t, n = this.renderer) {
    let o = "";
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (this.options.extensions?.renderers?.[a.type]) {
        let i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          o += i || "";
          continue;
        }
      }
      let r = a;
      switch (r.type) {
        case "escape": {
          o += n.text(r);
          break;
        }
        case "html": {
          o += n.html(r);
          break;
        }
        case "link": {
          o += n.link(r);
          break;
        }
        case "image": {
          o += n.image(r);
          break;
        }
        case "checkbox": {
          o += n.checkbox(r);
          break;
        }
        case "strong": {
          o += n.strong(r);
          break;
        }
        case "em": {
          o += n.em(r);
          break;
        }
        case "codespan": {
          o += n.codespan(r);
          break;
        }
        case "br": {
          o += n.br(r);
          break;
        }
        case "del": {
          o += n.del(r);
          break;
        }
        case "text": {
          o += n.text(r);
          break;
        }
        default: {
          let i = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return o;
  }
}, cr, Ts = (cr = class {
  constructor(e) {
    ze(this, "options");
    ze(this, "block");
    this.options = e || Po;
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
    return this.block ? mn.parse : mn.parseInline;
  }
}, ze(cr, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), ze(cr, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), cr), Ik = class {
  constructor(...e) {
    ze(this, "defaults", Sl());
    ze(this, "options", this.setOptions);
    ze(this, "parse", this.parseMarkdown(!0));
    ze(this, "parseInline", this.parseMarkdown(!1));
    ze(this, "Parser", mn);
    ze(this, "Renderer", Ir);
    ze(this, "TextRenderer", $l);
    ze(this, "Lexer", hn);
    ze(this, "Tokenizer", Lr);
    ze(this, "Hooks", Ts);
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let o of e) switch (n = n.concat(t.call(this, o)), o.type) {
      case "table": {
        let s = o;
        for (let a of s.header) n = n.concat(this.walkTokens(a.tokens, t));
        for (let a of s.rows) for (let r of a) n = n.concat(this.walkTokens(r.tokens, t));
        break;
      }
      case "list": {
        let s = o;
        n = n.concat(this.walkTokens(s.items, t));
        break;
      }
      default: {
        let s = o;
        this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((a) => {
          let r = s[a].flat(1 / 0);
          n = n.concat(this.walkTokens(r, t));
        }) : s.tokens && (n = n.concat(this.walkTokens(s.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let o = { ...n };
      if (o.async = this.defaults.async || o.async || !1, n.extensions && (n.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          let a = t.renderers[s.name];
          a ? t.renderers[s.name] = function(...r) {
            let i = s.renderer.apply(this, r);
            return i === !1 && (i = a.apply(this, r)), i;
          } : t.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = t[s.level];
          a ? a.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
      }), o.extensions = t), n.renderer) {
        let s = this.defaults.renderer || new Ir(this.defaults);
        for (let a in n.renderer) {
          if (!(a in s)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let r = a, i = n.renderer[r], c = s[r];
          s[r] = (...u) => {
            let d = i.apply(s, u);
            return d === !1 && (d = c.apply(s, u)), d || "";
          };
        }
        o.renderer = s;
      }
      if (n.tokenizer) {
        let s = this.defaults.tokenizer || new Lr(this.defaults);
        for (let a in n.tokenizer) {
          if (!(a in s)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let r = a, i = n.tokenizer[r], c = s[r];
          s[r] = (...u) => {
            let d = i.apply(s, u);
            return d === !1 && (d = c.apply(s, u)), d;
          };
        }
        o.tokenizer = s;
      }
      if (n.hooks) {
        let s = this.defaults.hooks || new Ts();
        for (let a in n.hooks) {
          if (!(a in s)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let r = a, i = n.hooks[r], c = s[r];
          Ts.passThroughHooks.has(a) ? s[r] = (u) => {
            if (this.defaults.async && Ts.passThroughHooksRespectAsync.has(a)) return (async () => {
              let h = await i.call(s, u);
              return c.call(s, h);
            })();
            let d = i.call(s, u);
            return c.call(s, d);
          } : s[r] = (...u) => {
            if (this.defaults.async) return (async () => {
              let h = await i.apply(s, u);
              return h === !1 && (h = await c.apply(s, u)), h;
            })();
            let d = i.apply(s, u);
            return d === !1 && (d = c.apply(s, u)), d;
          };
        }
        o.hooks = s;
      }
      if (n.walkTokens) {
        let s = this.defaults.walkTokens, a = n.walkTokens;
        o.walkTokens = function(r) {
          let i = [];
          return i.push(a.call(this, r)), s && (i = i.concat(s.call(this, r))), i;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return hn.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return mn.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (t, n) => {
      let o = { ...n }, s = { ...this.defaults, ...o }, a = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === !0 && o.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (async () => {
        let r = s.hooks ? await s.hooks.preprocess(t) : t, i = await (s.hooks ? await s.hooks.provideLexer() : e ? hn.lex : hn.lexInline)(r, s), c = s.hooks ? await s.hooks.processAllTokens(i) : i;
        s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
        let u = await (s.hooks ? await s.hooks.provideParser() : e ? mn.parse : mn.parseInline)(c, s);
        return s.hooks ? await s.hooks.postprocess(u) : u;
      })().catch(a);
      try {
        s.hooks && (t = s.hooks.preprocess(t));
        let r = (s.hooks ? s.hooks.provideLexer() : e ? hn.lex : hn.lexInline)(t, s);
        s.hooks && (r = s.hooks.processAllTokens(r)), s.walkTokens && this.walkTokens(r, s.walkTokens);
        let i = (s.hooks ? s.hooks.provideParser() : e ? mn.parse : mn.parseInline)(r, s);
        return s.hooks && (i = s.hooks.postprocess(i)), i;
      } catch (r) {
        return a(r);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let o = "<p>An error occurred:</p><pre>" + Wn(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(o) : o;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
}, Io = new Ik();
function Ne(e, t) {
  return Io.parse(e, t);
}
Ne.options = Ne.setOptions = function(e) {
  return Io.setOptions(e), Ne.defaults = Io.defaults, jd(Ne.defaults), Ne;
};
Ne.getDefaults = Sl;
Ne.defaults = Po;
Ne.use = function(...e) {
  return Io.use(...e), Ne.defaults = Io.defaults, jd(Ne.defaults), Ne;
};
Ne.walkTokens = function(e, t) {
  return Io.walkTokens(e, t);
};
Ne.parseInline = Io.parseInline;
Ne.Parser = mn;
Ne.parser = mn.parse;
Ne.Renderer = Ir;
Ne.TextRenderer = $l;
Ne.Lexer = hn;
Ne.lexer = hn.lex;
Ne.Tokenizer = Lr;
Ne.Hooks = Ts;
Ne.parse = Ne;
Ne.options;
Ne.setOptions;
Ne.use;
Ne.walkTokens;
Ne.parseInline;
mn.parse;
hn.lex;
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Ic(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Ok(e) {
  if (Array.isArray(e)) return e;
}
function $k(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, s, a, r, i = [], c = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (o = a.call(n)).done) && (i.push(o.value), i.length !== t); c = !0) ;
    } catch (d) {
      u = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (r = n.return(), Object(r) !== r)) return;
      } finally {
        if (u) throw s;
      }
    }
    return i;
  }
}
function Rk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mk(e, t) {
  return Ok(e) || $k(e, t) || Pk(e, t) || Rk();
}
function Pk(e, t) {
  if (e) {
    if (typeof e == "string") return Ic(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ic(e, t) : void 0;
  }
}
const Qd = Object.entries, Oc = Object.setPrototypeOf, Nk = Object.isFrozen, Dk = Object.getPrototypeOf, zk = Object.getOwnPropertyDescriptor;
let Nt = Object.freeze, ln = Object.seal, Yo = Object.create, Jd = typeof Reflect < "u" && Reflect, Pa = Jd.apply, Na = Jd.construct;
Nt || (Nt = function(t) {
  return t;
});
ln || (ln = function(t) {
  return t;
});
Pa || (Pa = function(t, n) {
  for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++)
    s[a - 2] = arguments[a];
  return t.apply(n, s);
});
Na || (Na = function(t) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    o[s - 1] = arguments[s];
  return new t(...o);
});
const Go = it(Array.prototype.forEach), Bk = it(Array.prototype.lastIndexOf), $c = it(Array.prototype.pop), qo = it(Array.prototype.push), Fk = it(Array.prototype.splice), Rt = Array.isArray, Ss = it(String.prototype.toLowerCase), pa = it(String.prototype.toString), Rc = it(String.prototype.match), Ko = it(String.prototype.replace), Mc = it(String.prototype.indexOf), jk = it(String.prototype.trim), Vk = it(Number.prototype.toString), Hk = it(Boolean.prototype.toString), Pc = typeof BigInt > "u" ? null : it(BigInt.prototype.toString), Nc = typeof Symbol > "u" ? null : it(Symbol.prototype.toString), Xe = it(Object.prototype.hasOwnProperty), _s = it(Object.prototype.toString), bt = it(RegExp.prototype.test), ks = Wk(TypeError);
function it(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      o[s - 1] = arguments[s];
    return Pa(e, t, o);
  };
}
function Wk(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return Na(e, n);
  };
}
function ye(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ss;
  if (Oc && Oc(e, null), !Rt(t))
    return e;
  let o = t.length;
  for (; o--; ) {
    let s = t[o];
    if (typeof s == "string") {
      const a = n(s);
      a !== s && (Nk(t) || (t[o] = a), s = a);
    }
    e[s] = !0;
  }
  return e;
}
function Uk(e) {
  for (let t = 0; t < e.length; t++)
    Xe(e, t) || (e[t] = null);
  return e;
}
function Ct(e) {
  const t = Yo(null);
  for (const o of Qd(e)) {
    var n = Mk(o, 2);
    const s = n[0], a = n[1];
    Xe(e, s) && (Rt(a) ? t[s] = Uk(a) : a && typeof a == "object" && a.constructor === Object ? t[s] = Ct(a) : t[s] = a);
  }
  return t;
}
function Gk(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Vk(e);
    case "boolean":
      return Hk(e);
    case "bigint":
      return Pc ? Pc(e) : "0";
    case "symbol":
      return Nc ? Nc(e) : "Symbol()";
    case "undefined":
      return _s(e);
    case "function":
    case "object": {
      if (e === null)
        return _s(e);
      const t = e, n = Cn(t, "toString");
      if (typeof n == "function") {
        const o = n(t);
        return typeof o == "string" ? o : _s(o);
      }
      return _s(e);
    }
    default:
      return _s(e);
  }
}
function Cn(e, t) {
  for (; e !== null; ) {
    const o = zk(e, t);
    if (o) {
      if (o.get)
        return it(o.get);
      if (typeof o.value == "function")
        return it(o.value);
    }
    e = Dk(e);
  }
  function n() {
    return null;
  }
  return n;
}
function qk(e) {
  try {
    return bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Dc = Nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ha = Nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ma = Nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Kk = Nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ga = Nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Zk = Nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), zc = Nt(["#text"]), Bc = Nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), va = Nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fc = Nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ir = Nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Yk = ln(/{{[\w\W]*|^[\w\W]*}}/g), Xk = ln(/<%[\w\W]*|^[\w\W]*%>/g), Qk = ln(/\${[\w\W]*/g), Jk = ln(/^data-[\-\w.\u00B7-\uFFFF]+$/), e2 = ln(/^aria-[\-\w]+$/), jc = ln(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), t2 = ln(/^(?:\w+script|data):/i), n2 = ln(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), o2 = ln(/^html$/i), s2 = ln(/^[a-z][.\w]*(-[.\w]+)+$/i), An = {
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
}, r2 = function() {
  return typeof window > "u" ? null : window;
}, a2 = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (o = n.getAttribute(s));
  const a = "dompurify" + (o ? "#" + o : "");
  try {
    return t.createPolicy(a, {
      createHTML(r) {
        return r;
      },
      createScriptURL(r) {
        return r;
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
function ef() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r2();
  const t = (ie) => ef(ie);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== An.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const o = n, s = o.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, r = e.Node, i = e.Element, c = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, h = e.trustedTypes, g = i.prototype, w = Cn(g, "cloneNode"), m = Cn(g, "remove"), b = Cn(g, "nextSibling"), C = Cn(g, "childNodes"), _ = Cn(g, "parentNode"), M = Cn(g, "shadowRoot"), V = Cn(g, "attributes"), L = r && r.prototype ? Cn(r.prototype, "nodeType") : null, I = r && r.prototype ? Cn(r.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ie = n.createElement("template");
    ie.content && ie.content.ownerDocument && (n = ie.content.ownerDocument);
  }
  let O, R = "";
  const Y = n, F = Y.implementation, oe = Y.createNodeIterator, U = Y.createDocumentFragment, ae = Y.getElementsByTagName, fe = o.importNode;
  let de = Vc();
  t.isSupported = typeof Qd == "function" && typeof _ == "function" && F && F.createHTMLDocument !== void 0;
  const $ = Yk, H = Xk, B = Qk, ue = Jk, pe = e2, ke = t2, je = n2, Ge = s2;
  let Se = jc, j = null;
  const K = ye({}, [...Dc, ...ha, ...ma, ...ga, ...zc]);
  let ge = null;
  const Ce = ye({}, [...Bc, ...va, ...Fc, ...ir]);
  let ne = Object.seal(Yo(null, {
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
  })), Z = null, dt = null;
  const Ee = Object.seal(Yo(null, {
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
  let _t = !0, ct = !0, ut = !1, xt = !0, Ye = !1, ot = !0, st = !1, Dt = !1, We = !1, Je = !1, Wt = !1, kt = !1, q = !0, we = !1;
  const mt = "user-content-";
  let Lt = !0, xe = !1, cn = {}, Ie = null;
  const go = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let No = null;
  const zn = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let Zt = null;
  const eo = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), It = "http://www.w3.org/1998/Math/MathML", un = "http://www.w3.org/2000/svg", ft = "http://www.w3.org/1999/xhtml";
  let Yt = ft, vo = !1, Tn = null;
  const to = ye({}, [It, un, ft], pa);
  let bo = ye({}, ["mi", "mo", "mn", "ms", "mtext"]), dn = ye({}, ["annotation-xml"]);
  const yo = ye({}, ["title", "style", "font", "a", "script"]);
  let Xt = null;
  const Bn = ["application/xhtml+xml", "text/html"], no = "text/html";
  let Pe = null, Qt = null;
  const Do = n.createElement("form"), wo = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, oo = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Qt && Qt === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = Ct(v), Xt = // eslint-disable-next-line unicorn/prefer-includes
    Bn.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? no : v.PARSER_MEDIA_TYPE, Pe = Xt === "application/xhtml+xml" ? pa : Ss, j = Xe(v, "ALLOWED_TAGS") && Rt(v.ALLOWED_TAGS) ? ye({}, v.ALLOWED_TAGS, Pe) : K, ge = Xe(v, "ALLOWED_ATTR") && Rt(v.ALLOWED_ATTR) ? ye({}, v.ALLOWED_ATTR, Pe) : Ce, Tn = Xe(v, "ALLOWED_NAMESPACES") && Rt(v.ALLOWED_NAMESPACES) ? ye({}, v.ALLOWED_NAMESPACES, pa) : to, Zt = Xe(v, "ADD_URI_SAFE_ATTR") && Rt(v.ADD_URI_SAFE_ATTR) ? ye(Ct(eo), v.ADD_URI_SAFE_ATTR, Pe) : eo, No = Xe(v, "ADD_DATA_URI_TAGS") && Rt(v.ADD_DATA_URI_TAGS) ? ye(Ct(zn), v.ADD_DATA_URI_TAGS, Pe) : zn, Ie = Xe(v, "FORBID_CONTENTS") && Rt(v.FORBID_CONTENTS) ? ye({}, v.FORBID_CONTENTS, Pe) : go, Z = Xe(v, "FORBID_TAGS") && Rt(v.FORBID_TAGS) ? ye({}, v.FORBID_TAGS, Pe) : Ct({}), dt = Xe(v, "FORBID_ATTR") && Rt(v.FORBID_ATTR) ? ye({}, v.FORBID_ATTR, Pe) : Ct({}), cn = Xe(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? Ct(v.USE_PROFILES) : v.USE_PROFILES : !1, _t = v.ALLOW_ARIA_ATTR !== !1, ct = v.ALLOW_DATA_ATTR !== !1, ut = v.ALLOW_UNKNOWN_PROTOCOLS || !1, xt = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ye = v.SAFE_FOR_TEMPLATES || !1, ot = v.SAFE_FOR_XML !== !1, st = v.WHOLE_DOCUMENT || !1, Je = v.RETURN_DOM || !1, Wt = v.RETURN_DOM_FRAGMENT || !1, kt = v.RETURN_TRUSTED_TYPE || !1, We = v.FORCE_BODY || !1, q = v.SANITIZE_DOM !== !1, we = v.SANITIZE_NAMED_PROPS || !1, Lt = v.KEEP_CONTENT !== !1, xe = v.IN_PLACE || !1, Se = qk(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : jc, Yt = typeof v.NAMESPACE == "string" ? v.NAMESPACE : ft, bo = Xe(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ct(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ["mi", "mo", "mn", "ms", "mtext"]), dn = Xe(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? Ct(v.HTML_INTEGRATION_POINTS) : ye({}, ["annotation-xml"]);
    const P = Xe(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? Ct(v.CUSTOM_ELEMENT_HANDLING) : Yo(null);
    if (ne = Yo(null), Xe(P, "tagNameCheck") && wo(P.tagNameCheck) && (ne.tagNameCheck = P.tagNameCheck), Xe(P, "attributeNameCheck") && wo(P.attributeNameCheck) && (ne.attributeNameCheck = P.attributeNameCheck), Xe(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Ye && (ct = !1), Wt && (Je = !0), cn && (j = ye({}, zc), ge = Yo(null), cn.html === !0 && (ye(j, Dc), ye(ge, Bc)), cn.svg === !0 && (ye(j, ha), ye(ge, va), ye(ge, ir)), cn.svgFilters === !0 && (ye(j, ma), ye(ge, va), ye(ge, ir)), cn.mathMl === !0 && (ye(j, ga), ye(ge, Fc), ye(ge, ir))), Ee.tagCheck = null, Ee.attributeCheck = null, Xe(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? Ee.tagCheck = v.ADD_TAGS : Rt(v.ADD_TAGS) && (j === K && (j = Ct(j)), ye(j, v.ADD_TAGS, Pe))), Xe(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? Ee.attributeCheck = v.ADD_ATTR : Rt(v.ADD_ATTR) && (ge === Ce && (ge = Ct(ge)), ye(ge, v.ADD_ATTR, Pe))), Xe(v, "ADD_URI_SAFE_ATTR") && Rt(v.ADD_URI_SAFE_ATTR) && ye(Zt, v.ADD_URI_SAFE_ATTR, Pe), Xe(v, "FORBID_CONTENTS") && Rt(v.FORBID_CONTENTS) && (Ie === go && (Ie = Ct(Ie)), ye(Ie, v.FORBID_CONTENTS, Pe)), Xe(v, "ADD_FORBID_CONTENTS") && Rt(v.ADD_FORBID_CONTENTS) && (Ie === go && (Ie = Ct(Ie)), ye(Ie, v.ADD_FORBID_CONTENTS, Pe)), Lt && (j["#text"] = !0), st && ye(j, ["html", "head", "body"]), j.table && (ye(j, ["tbody"]), delete Z.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ks('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ks('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O = v.TRUSTED_TYPES_POLICY, R = O.createHTML("");
    } else
      O === void 0 && (O = a2(h, s)), O !== null && typeof R == "string" && (R = O.createHTML(""));
    (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && j === K && (j = Ct(j)), de.uponSanitizeAttribute.length > 0 && ge === Ce && (ge = Ct(ge)), Nt && Nt(v), Qt = v;
  }, Fn = ye({}, [...ha, ...ma, ...Kk]), zo = ye({}, [...ga, ...Zk]), Bo = function(v) {
    let P = _(v);
    (!P || !P.tagName) && (P = {
      namespaceURI: Yt,
      tagName: "template"
    });
    const J = Ss(v.tagName), Ae = Ss(P.tagName);
    return Tn[v.namespaceURI] ? v.namespaceURI === un ? P.namespaceURI === ft ? J === "svg" : P.namespaceURI === It ? J === "svg" && (Ae === "annotation-xml" || bo[Ae]) : !!Fn[J] : v.namespaceURI === It ? P.namespaceURI === ft ? J === "math" : P.namespaceURI === un ? J === "math" && dn[Ae] : !!zo[J] : v.namespaceURI === ft ? P.namespaceURI === un && !dn[Ae] || P.namespaceURI === It && !bo[Ae] ? !1 : !zo[J] && (yo[J] || !Fn[J]) : !!(Xt === "application/xhtml+xml" && Tn[v.namespaceURI]) : !1;
  }, Ot = function(v) {
    qo(t.removed, {
      element: v
    });
    try {
      _(v).removeChild(v);
    } catch {
      m(v);
    }
  }, x = function(v, P) {
    try {
      qo(t.removed, {
        attribute: P.getAttributeNode(v),
        from: P
      });
    } catch {
      qo(t.removed, {
        attribute: null,
        from: P
      });
    }
    if (P.removeAttribute(v), v === "is")
      if (Je || Wt)
        try {
          Ot(P);
        } catch {
        }
      else
        try {
          P.setAttribute(v, "");
        } catch {
        }
  }, X = function(v) {
    let P = null, J = null;
    if (We)
      v = "<remove></remove>" + v;
    else {
      const Re = Rc(v, /^[\r\n\t ]+/);
      J = Re && Re[0];
    }
    Xt === "application/xhtml+xml" && Yt === ft && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const Ae = O ? O.createHTML(v) : v;
    if (Yt === ft)
      try {
        P = new d().parseFromString(Ae, Xt);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = F.createDocument(Yt, "template", null);
      try {
        P.documentElement.innerHTML = vo ? R : Ae;
      } catch {
      }
    }
    const be = P.body || P.documentElement;
    return v && J && be.insertBefore(n.createTextNode(J), be.childNodes[0] || null), Yt === ft ? ae.call(P, st ? "html" : "body")[0] : st ? P.documentElement : be;
  }, ve = function(v) {
    return oe.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, De = function(v) {
    v.normalize();
    const P = oe.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = P.nextNode();
    for (; J; ) {
      let Ae = J.data;
      Go([$, H, B], (be) => {
        Ae = Ko(Ae, be, " ");
      }), J.data = Ae, J = P.nextNode();
    }
  }, et = function(v) {
    const P = I ? I(v) : null;
    return typeof P != "string" || Pe(P) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    v.attributes !== V(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    v.nodeType !== L(v) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    v.childNodes !== C(v);
  }, Tt = function(v) {
    if (!L || typeof v != "object" || v === null)
      return !1;
    try {
      return L(v) === An.documentFragment;
    } catch {
      return !1;
    }
  }, $t = function(v) {
    if (!L || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof L(v) == "number";
    } catch {
      return !1;
    }
  };
  function St(ie, v, P) {
    Go(ie, (J) => {
      J.call(t, v, P, Qt);
    });
  }
  const Sn = function(v) {
    let P = null;
    if (St(de.beforeSanitizeElements, v, null), et(v))
      return Ot(v), !0;
    const J = Pe(v.nodeName);
    if (St(de.uponSanitizeElement, v, {
      tagName: J,
      allowedTags: j
    }), ot && v.hasChildNodes() && !$t(v.firstElementChild) && bt(/<[/\w!]/g, v.innerHTML) && bt(/<[/\w!]/g, v.textContent) || ot && v.namespaceURI === ft && J === "style" && $t(v.firstElementChild) || v.nodeType === An.progressingInstruction || ot && v.nodeType === An.comment && bt(/<[/\w]/g, v.data))
      return Ot(v), !0;
    if (Z[J] || !(Ee.tagCheck instanceof Function && Ee.tagCheck(J)) && !j[J]) {
      if (!Z[J] && Zs(J) && (ne.tagNameCheck instanceof RegExp && bt(ne.tagNameCheck, J) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(J)))
        return !1;
      if (Lt && !Ie[J]) {
        const be = _(v), Re = C(v);
        if (Re && be) {
          const zt = Re.length;
          for (let Ut = zt - 1; Ut >= 0; --Ut) {
            const Bt = w(Re[Ut], !0);
            be.insertBefore(Bt, b(v));
          }
        }
      }
      return Ot(v), !0;
    }
    return (L ? L(v) : v.nodeType) === An.element && !Bo(v) || (J === "noscript" || J === "noembed" || J === "noframes") && bt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (Ot(v), !0) : (Ye && v.nodeType === An.text && (P = v.textContent, Go([$, H, B], (be) => {
      P = Ko(P, be, " ");
    }), v.textContent !== P && (qo(t.removed, {
      element: v.cloneNode()
    }), v.textContent = P)), St(de.afterSanitizeElements, v, null), !1);
  }, jn = function(v, P, J) {
    if (dt[P] || q && (P === "id" || P === "name") && (J in n || J in Do))
      return !1;
    const Ae = ge[P] || Ee.attributeCheck instanceof Function && Ee.attributeCheck(P, v);
    if (!(ct && !dt[P] && bt(ue, P))) {
      if (!(_t && bt(pe, P))) {
        if (!Ae || dt[P]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Zs(v) && (ne.tagNameCheck instanceof RegExp && bt(ne.tagNameCheck, v) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(v)) && (ne.attributeNameCheck instanceof RegExp && bt(ne.attributeNameCheck, P) || ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(P, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            P === "is" && ne.allowCustomizedBuiltInElements && (ne.tagNameCheck instanceof RegExp && bt(ne.tagNameCheck, J) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(J)))
          ) return !1;
        } else if (!Zt[P]) {
          if (!bt(Se, Ko(J, je, ""))) {
            if (!((P === "src" || P === "xlink:href" || P === "href") && v !== "script" && Mc(J, "data:") === 0 && No[v])) {
              if (!(ut && !bt(ke, Ko(J, je, "")))) {
                if (J)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Zr = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Zs = function(v) {
    return !Zr[Ss(v)] && bt(Ge, v);
  }, Ys = function(v) {
    St(de.beforeSanitizeAttributes, v, null);
    const P = v.attributes;
    if (!P || et(v))
      return;
    const J = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ge,
      forceKeepAttr: void 0
    };
    let Ae = P.length;
    for (; Ae--; ) {
      const be = P[Ae], Re = be.name, zt = be.namespaceURI, Ut = be.value, Bt = Pe(Re), ds = Ut;
      let rt = Re === "value" ? ds : jk(ds);
      if (J.attrName = Bt, J.attrValue = rt, J.keepAttr = !0, J.forceKeepAttr = void 0, St(de.uponSanitizeAttribute, v, J), rt = J.attrValue, we && (Bt === "id" || Bt === "name") && Mc(rt, mt) !== 0 && (x(Re, v), rt = mt + rt), ot && bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, rt)) {
        x(Re, v);
        continue;
      }
      if (Bt === "attributename" && Rc(rt, "href")) {
        x(Re, v);
        continue;
      }
      if (J.forceKeepAttr)
        continue;
      if (!J.keepAttr) {
        x(Re, v);
        continue;
      }
      if (!xt && bt(/\/>/i, rt)) {
        x(Re, v);
        continue;
      }
      Ye && Go([$, H, B], (jo) => {
        rt = Ko(rt, jo, " ");
      });
      const Xs = Pe(v.nodeName);
      if (!jn(Xs, Bt, rt)) {
        x(Re, v);
        continue;
      }
      if (O && typeof h == "object" && typeof h.getAttributeType == "function" && !zt)
        switch (h.getAttributeType(Xs, Bt)) {
          case "TrustedHTML": {
            rt = O.createHTML(rt);
            break;
          }
          case "TrustedScriptURL": {
            rt = O.createScriptURL(rt);
            break;
          }
        }
      if (rt !== ds)
        try {
          zt ? v.setAttributeNS(zt, Re, rt) : v.setAttribute(Re, rt), et(v) ? Ot(v) : $c(t.removed);
        } catch {
          x(Re, v);
        }
    }
    St(de.afterSanitizeAttributes, v, null);
  }, Fo = function(v) {
    let P = null;
    const J = ve(v);
    for (St(de.beforeSanitizeShadowDOM, v, null); P = J.nextNode(); )
      if (St(de.uponSanitizeShadowNode, P, null), Sn(P), Ys(P), Tt(P.content) && Fo(P.content), (L ? L(P) : P.nodeType) === An.element) {
        const be = M ? M(P) : P.shadowRoot;
        Tt(be) && (gt(be), Fo(be));
      }
    St(de.afterSanitizeShadowDOM, v, null);
  }, gt = function(v) {
    const P = L ? L(v) : v.nodeType;
    if (P === An.element) {
      const be = M ? M(v) : v.shadowRoot;
      Tt(be) && (gt(be), Fo(be));
    }
    const J = C ? C(v) : v.childNodes;
    if (!J)
      return;
    const Ae = [];
    Go(J, (be) => {
      qo(Ae, be);
    });
    for (const be of Ae)
      gt(be);
    if (P === An.element) {
      const be = I ? I(v) : null;
      if (typeof be == "string" && Pe(be) === "template") {
        const Re = v.content;
        Tt(Re) && gt(Re);
      }
    }
  };
  return t.sanitize = function(ie) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, J = null, Ae = null, be = null;
    if (vo = !ie, vo && (ie = "<!-->"), typeof ie != "string" && !$t(ie) && (ie = Gk(ie), typeof ie != "string"))
      throw ks("dirty is not a string, aborting");
    if (!t.isSupported)
      return ie;
    if (Dt || oo(v), t.removed = [], typeof ie == "string" && (xe = !1), xe) {
      const Ut = I ? I(ie) : ie.nodeName;
      if (typeof Ut == "string") {
        const Bt = Pe(Ut);
        if (!j[Bt] || Z[Bt])
          throw ks("root node is forbidden and cannot be sanitized in-place");
      }
      if (et(ie))
        throw ks("root node is clobbered and cannot be sanitized in-place");
      gt(ie);
    } else if ($t(ie))
      P = X("<!---->"), J = P.ownerDocument.importNode(ie, !0), J.nodeType === An.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? P = J : P.appendChild(J), gt(J);
    else {
      if (!Je && !Ye && !st && // eslint-disable-next-line unicorn/prefer-includes
      ie.indexOf("<") === -1)
        return O && kt ? O.createHTML(ie) : ie;
      if (P = X(ie), !P)
        return Je ? null : kt ? R : "";
    }
    P && We && Ot(P.firstChild);
    const Re = ve(xe ? ie : P);
    for (; Ae = Re.nextNode(); )
      Sn(Ae), Ys(Ae), Tt(Ae.content) && Fo(Ae.content);
    if (xe)
      return Ye && De(ie), ie;
    if (Je) {
      if (Ye && De(P), Wt)
        for (be = U.call(P.ownerDocument); P.firstChild; )
          be.appendChild(P.firstChild);
      else
        be = P;
      return (ge.shadowroot || ge.shadowrootmode) && (be = fe.call(o, be, !0)), be;
    }
    let zt = st ? P.outerHTML : P.innerHTML;
    return st && j["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && bt(o2, P.ownerDocument.doctype.name) && (zt = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + zt), Ye && Go([$, H, B], (Ut) => {
      zt = Ko(zt, Ut, " ");
    }), O && kt ? O.createHTML(zt) : zt;
  }, t.setConfig = function() {
    let ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    oo(ie), Dt = !0;
  }, t.clearConfig = function() {
    Qt = null, Dt = !1;
  }, t.isValidAttribute = function(ie, v, P) {
    Qt || oo({});
    const J = Pe(ie), Ae = Pe(v);
    return jn(J, Ae, P);
  }, t.addHook = function(ie, v) {
    typeof v == "function" && qo(de[ie], v);
  }, t.removeHook = function(ie, v) {
    if (v !== void 0) {
      const P = Bk(de[ie], v);
      return P === -1 ? void 0 : Fk(de[ie], P, 1)[0];
    }
    return $c(de[ie]);
  }, t.removeHooks = function(ie) {
    de[ie] = [];
  }, t.removeAllHooks = function() {
    de = Vc();
  }, t;
}
var l2 = ef();
const i2 = {
  ADD_ATTR: [
    "align",
    "checked",
    "class",
    "data-checked",
    "data-original-path",
    "data-image-scale",
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
function c2(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : l2.sanitize(e, i2) : "";
}
const u2 = 24, d2 = 120, f2 = 420, p2 = 1200, h2 = 24e3, m2 = 1800, g2 = 5200, Da = (e) => {
  const t = e.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!t || t.index === void 0)
    return { reasoning: "", answer: e };
  const n = e.slice(0, t.index).trim(), o = t[0], s = e.slice(t.index + o.length).trim();
  return {
    reasoning: (t[1] ?? "").trim(),
    answer: [n, s].filter(Boolean).join(`

`)
  };
}, v2 = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return `code-${e.length}-${t.toString(16)}`;
}, tf = (e, t) => {
  if (e.size <= t) return;
  const n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}, b2 = (e, t, n) => e.includes("<pre>") ? e.replace(
  /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
  (o, s, a) => {
    const r = document.createElement("textarea");
    r.innerHTML = a;
    const i = r.value, c = v2(i);
    t.codeCache.set(c, i), tf(t.codeCache, d2);
    const u = s ? ` class="${s}"` : "", d = n("common.copy");
    return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${c}" title="${d}">${d}</button><pre><code${u}>${a}</code></pre></div>`;
  }
) : e, Hc = (e, t, n, o = {}) => {
  const s = o.cache !== !1, a = `${n("common.copy")}\0${e}`, r = s ? t.htmlCache.get(a) : void 0;
  if (r) return r;
  const i = c2(Ne.parse(e, { async: !1 })), c = o.enhanceCodeBlocks === !1 ? i : b2(i, t, n);
  return s && (t.htmlCache.set(a, c), tf(t.htmlCache, u2)), c;
}, y2 = (e, t, n, o, s) => {
  if (!t) return !0;
  const a = e.content.length >= h2, r = a ? p2 : f2, i = a ? g2 : m2;
  return s - t.updatedAt >= r || e.content.length - t.source.length >= i || !t.reasoning && !!n || !t.answer && !!o;
}, w2 = (e, t, n) => {
  const { reasoning: o, answer: s } = Da(e.content);
  if (!e.streaming)
    return n.streamingSnapshots.delete(e.id), t === "reasoning" ? o : s;
  const a = Date.now(), r = n.streamingSnapshots.get(e.id);
  return y2(e, r, o, s, a) ? (n.streamingSnapshots.set(e.id, {
    source: e.content,
    reasoning: o,
    answer: s,
    updatedAt: a
  }), t === "reasoning" ? o : s) : t === "reasoning" ? r?.reasoning ?? o : r?.answer ?? s;
}, _2 = (e, t, n, o) => {
  const s = w2(e, t, n);
  if (!e.streaming) return Hc(s, n, o);
  const a = n.streamingSnapshots.get(e.id), r = t === "reasoning" ? "reasoningHtml" : "answerHtml", i = t === "reasoning" ? "reasoning" : "answer";
  if (a?.[i] === s && a[r])
    return a[r];
  const c = Hc(s, n, o, {
    cache: !1,
    enhanceCodeBlocks: !1
  });
  return a?.[i] === s && (a[r] = c), c;
}, k2 = async (e, t, n) => {
  const s = e.target?.closest(".code-copy-btn"), a = s?.dataset.codeId ? t.codeCache.get(s.dataset.codeId) : void 0;
  if (a)
    try {
      await navigator.clipboard.writeText(a), $e.msg(n("localAi.codeCopied"));
    } catch (r) {
      $e.msg(`${n("common.copy")}: ${r}`, "error");
    }
}, T2 = (e, t) => {
  e.allowThinking && (t.includes("<think>") && !e.reasoningStartedAt && (e.reasoningStartedAt = Date.now()), t.includes("</think>") && !e.reasoningEndedAt && (e.reasoningEndedAt = Date.now()));
}, S2 = () => {
  const { t: e } = js(), t = {
    htmlCache: /* @__PURE__ */ new Map(),
    codeCache: /* @__PURE__ */ new Map(),
    streamingSnapshots: /* @__PURE__ */ new Map()
  };
  return {
    renderMessageMarkdown: (n, o) => _2(n, o, t, e),
    handleMarkdownClick: (n) => k2(n, t, e),
    messageReasoning: (n) => Da(n).reasoning,
    messageAnswer: (n) => Da(n).answer,
    recordReasoningProgress: T2,
    discardStreamingMarkdown: (n) => {
      t.streamingSnapshots.delete(n);
    },
    clearMarkdownState: () => {
      t.htmlCache.clear(), t.codeCache.clear(), t.streamingSnapshots.clear();
    }
  };
}, A2 = {
  key: 0,
  class: "attachment-preview-dialog__body"
}, C2 = { class: "attachment-preview-dialog__viewport" }, E2 = ["src", "alt"], x2 = { class: "attachment-preview-dialog__meta" }, L2 = { class: "attachment-preview-dialog__file" }, I2 = ["title"], O2 = /* @__PURE__ */ se({
  __name: "AttachmentPreviewDialog",
  props: {
    modelValue: { type: Boolean },
    attachment: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { t: s } = js(), a = A({
      get: () => n.modelValue,
      set: (r) => o("update:modelValue", r)
    });
    return (r, i) => (S(), re(l($d), {
      modelValue: l(a),
      "onUpdate:modelValue": i[0] || (i[0] = (c) => en(a) ? a.value = c : null),
      title: l(s)("localAi.attachmentPreview"),
      width: "min(1000px, calc(100vw - 40px))",
      "custom-class": "local-ai-attachment-preview-dialog",
      "close-on-click-modal": !0
    }, {
      default: ee(() => [
        r.attachment?.dataUrl ? (S(), D("div", A2, [
          f("div", C2, [
            f("img", {
              src: r.attachment.dataUrl,
              alt: r.attachment.name
            }, null, 8, E2)
          ]),
          f("div", x2, [
            f("span", L2, [
              k(l(Xf), {
                theme: "outline",
                size: "16"
              }),
              f("strong", {
                title: r.attachment.name
              }, E(r.attachment.name), 9, I2)
            ]),
            f(
              "span",
              null,
              E(l(Nd)(r.attachment.size)),
              1
              /* TEXT */
            )
          ])
        ])) : Q("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "title"]));
  }
}), $2 = /* @__PURE__ */ Mo(O2, [["__scopeId", "data-v-8ead8db0"]]), R2 = /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i, M2 = /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i, P2 = /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i, N2 = /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i, nf = (e) => /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(e), Wc = /^\s*(\d+)(?:[.)]\s+|、\s*)/, Uc = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
}, D2 = (e) => e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1").replace(/`([^`\n]+)`/g, "$1").replace(/\*\*([^*\n]+)\*\*/g, "$1").replace(/__([^_\n]+)__/g, "$1").replace(/~~([^~\n]+)~~/g, "$1").replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, "$1$2").replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, "$1$2"), z2 = (e) => e.replace(
  /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
  "$1"
).replace(
  /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
  "$1使用 $3"
).replace(
  /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
  "$1use $3"
), B2 = (e) => {
  const t = e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s{0,3}>\s?/, ""), n = t.match(Wc), o = n ? `${n[1]}、` : "", s = t.replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, "").replace(/^\s*[-+*]\s+/, "").replace(Wc, "");
  if (nf(s))
    return "";
  const a = s.trim();
  return a.startsWith("|") && a.endsWith("|") ? a.slice(1, -1).split("|").map((r) => r.trim()).filter(Boolean).join("；") : `${o}${z2(
    D2(s)
  ).trimEnd()}`;
}, F2 = (e, t) => t ? !1 : !e || M2.test(e), j2 = (e, t) => t && P2.test(e), V2 = (e, t) => (t ? e : e.replace(R2, "")).trim(), H2 = (e, t) => !!(e || t), za = (e) => /[\u3400-\u9fff]/.test(e), W2 = (e, t = !1) => {
  const n = za(e), o = n && t ? `
上一次结果语言错误。本次必须使用简体中文，不得翻译为英文。` : "";
  return {
    systemPrompt: `${n ? Uc.zh : Uc.en}${o}`,
    userPrompt: n ? `改写以下原文：
<原文>
${e}
</原文>` : `Rewrite the following source:
<source>
${e}
</source>`,
    maxTokens: Math.min(640, Math.max(320, Math.ceil(e.length * 1.4)))
  };
}, Gc = (e, t) => !za(e) || za(t), U2 = (e) => {
  const n = e.replace(/^[\s\S]*?<\/think>\s*/i, "").replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/^\s*```(?:markdown|md|text)?\s*$/gim, "").replace(/^\s*```\s*$/gim, "").replace(/\r\n?/g, `
`).trim().split(`
`), o = [];
  for (const s of n) {
    if (nf(s)) continue;
    const a = B2(s).trim(), r = o.length > 0;
    if (F2(a, r)) continue;
    if (j2(a, r)) break;
    if (N2.test(a)) continue;
    const i = V2(a, r);
    H2(i, o.at(-1)) && o.push(i);
  }
  return o.join(`
`).replace(/\n{3,}/g, `

`).trim();
}, As = "snippets.localAi.pendingPrompt", Rl = "snippets.localAi.pendingPromptMode", of = "new-chat", G2 = (e, t) => {
  e.setItem(As, t), e.setItem(
    Rl,
    of
  );
}, ba = (e) => e.getItem(Rl) === of, q2 = { class: "sidebar-header" }, K2 = { class: "sidebar-brand" }, Z2 = { class: "sidebar-title-block" }, Y2 = ["title", "aria-pressed"], X2 = { class: "sidebar-nav" }, Q2 = ["disabled"], J2 = { class: "sidebar-search" }, eT = ["placeholder"], tT = {
  key: 0,
  class: "sidebar-search-count"
}, nT = { class: "sidebar-section recent-section" }, oT = { class: "section-title-row" }, sT = { class: "section-title" }, rT = { class: "section-title-actions" }, aT = ["title", "disabled"], lT = ["title", "disabled"], iT = {
  key: 0,
  class: "chat-list"
}, cT = ["tabindex", "aria-disabled", "onClick", "onKeydown"], uT = { class: "chat-item-copy" }, dT = { class: "chat-item-title" }, fT = { class: "chat-item-title-track" }, pT = { class: "chat-item-title-text" }, hT = {
  class: "chat-item-title-text chat-item-title-clone",
  "aria-hidden": "true"
}, mT = { class: "chat-item-time" }, gT = ["title", "disabled", "onClick"], vT = {
  key: 1,
  class: "sidebar-empty"
}, bT = { class: "sidebar-service" }, yT = { class: "sidebar-service-card" }, wT = { class: "sidebar-service-icon" }, _T = { class: "sidebar-service-copy" }, kT = { class: "chat-panel" }, TT = { class: "chat-panel-header" }, ST = { class: "chat-panel-heading" }, AT = ["title"], CT = { class: "chat-context-mark" }, ET = { class: "chat-context-copy" }, xT = {
  key: 0,
  class: "empty-state"
}, LT = { class: "empty-hero" }, IT = { class: "empty-hero-mark" }, OT = { class: "empty-eyebrow" }, $T = { class: "quick-prompt-section" }, RT = { class: "quick-prompt-heading" }, MT = { class: "quick-prompt-grid" }, PT = ["onClick"], NT = { class: "quick-prompt-icon" }, DT = { class: "quick-prompt-copy" }, zT = {
  key: 0,
  class: "date-divider"
}, BT = { class: "message-avatar" }, FT = { key: 1 }, jT = { class: "message-body" }, VT = { class: "user-bubble" }, HT = {
  key: 0,
  class: "user-message-text"
}, WT = {
  key: 1,
  class: "message-attachment-list"
}, UT = ["title", "aria-label", "onClick"], GT = ["src", "alt"], qT = {
  key: 1,
  class: "attachment-file-icon"
}, KT = { key: 2 }, ZT = {
  key: 0,
  class: "message-actions"
}, YT = ["title", "onClick"], XT = ["title", "onClick"], QT = ["title", "onClick"], JT = { class: "assistant-head" }, eS = { key: 0 }, tS = {
  key: 0,
  class: "assistant-content-stack"
}, nS = ["open"], oS = { class: "reasoning-summary-title" }, sS = { key: 0 }, rS = ["innerHTML"], aS = ["innerHTML"], lS = {
  key: 0,
  class: "message-stats"
}, iS = { class: "message-stats__context" }, cS = { class: "message-stats__output" }, uS = { class: "message-stats__elapsed" }, dS = { class: "message-stats__speed" }, fS = {
  key: 0,
  class: "message-stats-time"
}, pS = {
  key: 1,
  class: "message-warning"
}, hS = {
  key: 2,
  class: "message-actions"
}, mS = ["title", "aria-label"], gS = ["disabled", "title", "onClick"], vS = ["disabled", "title", "onClick"], bS = ["title", "onClick"], yS = ["title", "onClick"], wS = ["title", "onClick"], _S = ["title", "onClick"], kS = ["title", "onClick"], TS = ["title"], SS = { class: "composer-dock" }, AS = {
  key: 0,
  class: "attachment-preview-list"
}, CS = ["title", "aria-label", "onClick"], ES = ["src", "alt"], xS = {
  key: 1,
  class: "attachment-file-icon"
}, LS = { class: "attachment-meta" }, IS = ["title", "onClick"], OS = ["placeholder", "readonly", "aria-busy"], $S = { class: "input-toolbar" }, RS = { class: "input-toolbar-left" }, MS = ["title", "disabled"], PS = ["disabled", "title"], NS = ["title", "aria-pressed"], DS = { class: "input-toolbar-right" }, zS = { class: "model-select-shell" }, BS = { class: "chat-model-option" }, FS = { class: "chat-model-option-name" }, jS = { class: "input-hint" }, VS = ["disabled", "title", "aria-label"], HS = ["disabled", "title", "aria-label"], WS = 96, US = 4096, GS = 90, qS = 1e3, KS = /* @__PURE__ */ se({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = js(), {
      attachments: n,
      attachmentPicking: o,
      attachmentStatusText: s,
      handleAttachmentDrop: a,
      handleComposerPaste: r,
      pickAttachmentFiles: i,
      removeAttachment: c
    } = q_(), {
      clearMarkdownState: u,
      discardStreamingMarkdown: d,
      handleMarkdownClick: h,
      messageAnswer: g,
      messageReasoning: w,
      recordReasoningProgress: m,
      renderMessageMarkdown: b
    } = S2(), C = N(""), _ = N([]), M = N(""), V = N(!1), L = N(""), I = N(null), O = N(!1), R = N(!1), Y = N(!1), F = N(!1), oe = N(!1), U = N(!1), ae = N(!1), fe = N(!1), de = N(!0), $ = N(!1), H = N(null), B = uo(null);
    let ue = !1, pe = null, ke = !1, je = !1, Ge = null, Se = null;
    const j = N(null), K = N(null), ge = N(""), Ce = N(null), ne = N(null), Z = N(null), dt = A({
      get: () => !!Z.value,
      set: (p) => {
        p || (Z.value = null);
      }
    }), Ee = N(Date.now());
    let _t = null, ct = null, ut = null, xt = !1, Ye = null, ot = null, st = !1, Dt = 0, We = null;
    const Je = /* @__PURE__ */ new WeakMap(), Wt = (p) => {
      const y = p.querySelector(".chat-item-title-text");
      if (!y) return;
      const G = y.scrollWidth - p.clientWidth > 2, te = y.scrollWidth + 24, T = Math.max(5, te / 34);
      p.style.setProperty("--chat-title-loop-distance", `${te}px`), p.style.setProperty("--chat-title-scroll-duration", `${T}s`), p.classList.toggle("is-overflowing", G);
    }, kt = (p) => {
      window.requestAnimationFrame(() => Wt(p));
    }, q = {
      mounted(p) {
        if (kt(p), typeof ResizeObserver > "u") return;
        const y = new ResizeObserver(
          () => kt(p)
        );
        y.observe(p);
        const G = p.querySelector(".chat-item-title-text");
        G && y.observe(G), Je.set(p, y);
      },
      updated(p) {
        kt(p);
      },
      beforeUnmount(p) {
        Je.get(p)?.disconnect(), Je.delete(p);
      }
    }, we = [
      {
        title: "localAi.quickPromptSummary",
        description: "localAi.quickPromptSummaryDesc",
        icon: Kf
      },
      {
        title: "localAi.quickPromptTranslate",
        description: "localAi.quickPromptTranslateDesc",
        icon: np
      },
      {
        title: "localAi.quickPromptCode",
        description: "localAi.quickPromptCodeDesc",
        icon: Gf
      },
      {
        title: "localAi.quickPromptRegex",
        description: "localAi.quickPromptRegexDesc",
        icon: ni
      }
    ], mt = A(
      () => (!!L.value.trim() || n.value.length > 0) && !R.value && !O.value
    ), Lt = A(
      () => !!L.value.trim() && !R.value && !O.value && !H.value
    ), xe = A(() => R.value || O.value), cn = A(() => Ce.value?.healthy ? t("localAi.serviceHealthy") : Ce.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), Ie = A(
      () => _.value.find((p) => p.id === M.value) ?? null
    ), go = A(
      () => Ie.value?.title || t("localAi.newChatTitle")
    ), No = A(() => mr(Ie.value)), zn = A(() => z_(Ie.value)), Zt = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", eo = (p) => {
      p.type !== "image" || !p.dataUrl || (Z.value = p);
    }, It = () => {
      Z.value = null;
    }, un = (p) => {
      Z.value?.id === p && It(), c(p);
    }, ft = A(
      () => Zt(ge.value) || Zt(Ce.value?.modelPath) || Zt(j.value?.modelPath) || t("localAi.localModel")
    ), Yt = A(() => K.value?.mainModels ?? []), vo = A(() => !!j.value?.mmprojPath), Tn = A(
      () => j.value?.ctxSize ?? Ce.value?.ctxSize ?? 4096
    ), to = A(() => {
      const p = Tn.value, y = j.value?.maxTokens ?? 0;
      return y > 0 ? Math.min(
        Math.max(y, 512),
        Math.max(512, p - 512)
      ) : Math.min(
        Math.max(US, Math.floor(p * 0.5)),
        Math.max(512, p - 512)
      );
    }), bo = A(
      () => Math.max(512, Tn.value - to.value)
    ), dn = A(() => {
      const p = ft.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(p);
    }), yo = A(() => {
      const p = C.value.trim().toLowerCase();
      return _.value.filter(
        (y) => !p || y.title.toLowerCase().includes(p) || y.messages.some(
          (G) => !is(G) && G.content.toLowerCase().includes(p)
        )
      ).slice().sort((y, G) => G.updatedAt.localeCompare(y.updatedAt));
    }), Xt = () => {
      const p = I.value;
      if (!p) return;
      p.style.height = "auto";
      const y = p.scrollHeight, G = Number.parseFloat(
        window.getComputedStyle(p).maxHeight
      ), te = Number.isFinite(G) ? G : y;
      p.style.height = `${Math.min(y, te)}px`, p.style.overflowY = y > te ? "auto" : "hidden";
    }, Bn = () => {
      if (!ue || xe.value) {
        je = !0;
        return;
      }
      je = !1, Re();
    }, no = (p, y = !1) => {
      if (typeof p != "string" || !p.trim()) return;
      const G = p.trim();
      if (!ue || y && xe.value) {
        pe = G, y && (ke = !0);
        return;
      }
      y && (Re(), Ge = G), L.value = G, je = !1, localStorage.removeItem(Rl), Ke(() => {
        Xt(), I.value?.focus();
      });
    }, Pe = async () => {
      try {
        const p = await W("take_pending_local_ai_prompt"), y = typeof p == "string" ? p.trim() : "";
        return y && G2(localStorage, y), y;
      } catch (p) {
        return yt.warn("[LocalAI] take pending prompt failed", p), "";
      }
    }, Qt = async () => {
      try {
        return await W("take_pending_local_ai_new_chat");
      } catch (p) {
        return yt.warn("[LocalAI] take pending new chat failed", p), !1;
      }
    }, Do = (p) => {
      const y = p.detail;
      Pe().then((G) => {
        const te = typeof y == "string" ? y.trim() : "", T = G || te;
        !T || !(G || ba(localStorage)) && T === Ge || no(T, !0);
      });
    }, wo = () => {
      Qt().then((p) => {
        p && Bn();
      });
    }, oo = () => {
      if (!(!ue || xe.value || !pe && !je)) {
        if (pe) {
          const p = pe, y = ke;
          pe = null, ke = !1, no(p, y);
          return;
        }
        Bn();
      }
    }, Fn = async () => {
      await Ke(), Xt(), I.value?.focus();
    };
    he(L, Xt, { flush: "post" }), he(xe, (p) => {
      p || oo();
    }), he(
      L,
      (p) => {
        if (!ue) return;
        p.trim() ? localStorage.setItem(As, p) : localStorage.removeItem(As);
      },
      { flush: "sync" }
    );
    const zo = (p) => {
      L.value = t(p), Fn();
    }, Bo = async (p, y) => {
      const G = W2(
        p,
        y
      ), te = await qw({
        messages: [
          {
            role: "system",
            content: G.systemPrompt
          },
          { role: "user", content: G.userPrompt }
        ],
        temperature: y ? 0.05 : 0.1,
        enableThinking: !1,
        maxTokens: G.maxTokens
      });
      return U2(te.content);
    }, Ot = async () => {
      const p = L.value.trim();
      if (!(!p || !Lt.value)) {
        O.value = !0;
        try {
          let y = await Bo(p, !1);
          if (Gc(p, y) || (y = await Bo(p, !0)), !y) throw new Error(t("localAi.enhancePromptEmpty"));
          if (!Gc(p, y))
            throw new Error(t("localAi.enhancePromptLanguageMismatch"));
          L.value = y, await Fn();
        } catch (y) {
          $e.msg(`${t("localAi.enhancePromptFailed")}: ${String(y)}`, "error");
        } finally {
          O.value = !1;
        }
      }
    }, x = () => t("localAi.now"), X = () => {
      const p = (/* @__PURE__ */ new Date()).toISOString(), y = {
        id: To("root"),
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
        updatedAtLabel: x(),
        currentNodeId: y.id,
        messages: [y]
      };
    }, ve = () => {
      const p = ne.value;
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= WS : !0;
    }, De = () => {
      const p = ve();
      p && (de.value = !0), $.value = !p && !de.value;
    }, et = () => {
      ut === null || xt || (window.cancelAnimationFrame(ut), ut = null);
    }, Tt = () => {
      de.value = !1, $.value = !ve(), et();
    }, $t = () => {
      const p = ne.value;
      p && (st && p.scrollTop < Dt - 1 && Tt(), Dt = p.scrollTop), De();
    }, St = (p) => {
      p.deltaY >= 0 || (Tt(), window.requestAnimationFrame(De));
    }, Sn = (p) => {
      const y = ne.value;
      if (!y) return;
      const G = y.getBoundingClientRect(), te = Math.max(12, y.offsetWidth - y.clientWidth);
      p.clientX < G.right - te || (st = !0, Dt = y.scrollTop, et());
    }, jn = () => {
      st = !1, De();
    }, Zr = (p) => {
      We = p.touches[0]?.clientY ?? null;
    }, Zs = (p) => {
      const y = p.touches[0]?.clientY;
      y === void 0 || We === null || (y > We && Tt(), We = y);
    }, Ys = () => {
      We = null, De();
    }, Fo = () => {
      if (!Ye) return;
      const p = ne.value?.querySelector(".assistant-card--streaming") ?? null;
      p !== ot && (ot && Ye.unobserve(ot), ot = p, ot && Ye.observe(ot));
    }, gt = async (p = {}) => {
      await Ke(), Fo(), !(!ne.value || !p.force && !de.value) && (xt = xt || p.force === !0, ut === null && (ut = window.requestAnimationFrame(() => {
        ut = null;
        const G = ne.value, te = xt;
        if (xt = !1, !G || !te && !de.value) return;
        const T = Math.max(0, G.scrollHeight - G.clientHeight);
        Math.abs(G.scrollTop - T) > 1 && (G.scrollTop = T), De();
      })));
    }, ie = () => {
      de.value = !0, gt({ force: !0 });
    }, v = async () => {
      try {
        j.value = await Ed(), ge.value = j.value.modelPath ?? "", K.value = await xd(j.value), dn.value || (ae.value = !1);
      } catch (p) {
        yt.warn("[LocalAI] refresh chat config failed", p);
      }
    }, P = async () => {
      if (!Y.value) {
        Y.value = !0;
        try {
          Ce.value = await Ld();
        } catch (p) {
          yt.warn("[LocalAI] refresh chat status failed", p);
        } finally {
          Y.value = !1;
        }
      }
    }, J = async () => {
      try {
        const p = await Zw();
        if (_.value = p.map((y) => {
          const G = y.messages?.length ? y.messages : y.turns.map((T) => ({
            id: T.id,
            role: T.role,
            content: T.content,
            createdAt: T.createdAt
          })), te = D_(
            G,
            y.createdAt
          );
          return {
            id: y.id,
            title: y.title,
            createdAt: y.createdAt,
            updatedAt: y.updatedAt,
            updatedAtLabel: new Date(y.updatedAt).toLocaleString(),
            currentNodeId: y.currentNodeId ?? te.currentNodeId,
            messages: te.messages
          };
        }), !_.value.some((y) => y.id === M.value)) {
          const y = _.value[0]?.id ?? "";
          y !== M.value && (L.value = "", n.value = [], It()), M.value = y;
        }
      } catch (p) {
        yt.warn("[LocalAI] refresh histories failed", p);
      }
    }, Ae = async () => {
      xe.value || await Promise.all([v(), P(), J()]);
    }, be = async (p) => {
      if (!p) return;
      const y = mr(p).map((G) => ({
        id: G.id,
        role: G.role,
        content: G.content,
        createdAt: G.createdAt
      }));
      await Xw({
        id: p.id,
        title: p.title,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        turns: y,
        currentNodeId: p.currentNodeId,
        messages: p.messages
      });
    };
    function Re() {
      if (xe.value) return;
      const p = X();
      _.value.unshift(p), M.value = p.id, L.value = "", n.value = [], It(), Fn();
    }
    const zt = () => {
      if (Ie.value) return;
      const p = X();
      _.value.unshift(p), M.value = p.id;
    }, Ut = (p) => {
      if (xe.value) return;
      M.value !== p && (L.value = "", n.value = [], It()), M.value = p;
      const y = Ie.value;
      y && !y.currentNodeId && (y.currentNodeId = qs(y.messages, Gs(y.messages)?.id) ?? null), de.value = !0, gt({ force: !0 });
    }, Bt = async (p) => {
      if (xe.value) return;
      const y = M.value === p;
      _.value = _.value.filter((G) => G.id !== p);
      try {
        await Qw(p);
      } catch (G) {
        yt.warn("[LocalAI] delete history failed", G), await J(), $e.msg(`${t("common.operationFailed")}: ${String(G)}`, "error");
        return;
      }
      y && (M.value = _.value[0]?.id ?? "", L.value = "", n.value = [], It());
    }, ds = async () => {
      if (!(xe.value || F.value)) {
        F.value = !0;
        try {
          await Jw(), _.value = [], M.value = "", C.value = "", L.value = "", n.value = [], oe.value = !1, It(), u(), $e.msg(t("localAi.clearAllChatsSuccess"));
        } catch (p) {
          yt.warn("[LocalAI] clear histories failed", p), $e.msg(`${t("common.operationFailed")}: ${String(p)}`, "error");
        } finally {
          F.value = !1;
        }
      }
    }, rt = async () => {
      if (!j.value || !ge.value) return;
      const p = {
        ...j.value,
        modelPath: ge.value
      };
      try {
        j.value = await pr(p), Ce.value?.running && (Ce.value = await Id()), $e.msg(t("localAi.modelChanged"));
      } catch (y) {
        await v(), $e.msg(`${t("localAi.configSaveFailed")}: ${y}`, "error");
      }
    }, Xs = (p) => !!g(p.content), jo = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !Xs(p)), sf = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const y = p.reasoningEndedAt ?? (p.streaming ? Ee.value : Date.now());
      return Math.max(0, (y - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, rf = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: sf(p)
    }), Vn = (p) => new Date(
      p.createdAt || Ie.value?.updatedAt || Date.now()
    ), Ml = (p) => Vn(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), af = (p, y) => Vn(p).toDateString() === Vn(y).toDateString(), Pl = (p) => Vn(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), lf = (p) => {
      const y = zn.value[p]?.message;
      if (!y) return !1;
      if (p === 0) return !Pl(y);
      const G = zn.value[p - 1]?.message;
      return G ? af(G, y) ? Vn(y).getTime() - Vn(G).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, cf = (p) => {
      const y = Vn(p), G = y.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), te = y.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Pl(p) ? te : `${G} ${te}`;
    }, uf = (p) => p.streaming ? jo(p) ? t("localAi.thinking") : t("localAi.generating") : Ml(p), df = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), ff = (p = Ie.value) => {
      const y = R_(), G = ls([y]), te = Math.max(
        512,
        bo.value - G
      );
      return [
        y,
        ...N_(
          mr(p).filter((T) => !T.streaming && T.role !== "system").map((T) => ({
            role: T.role,
            content: T.role === "user" ? O_(T) : T.content
          })),
          te,
          t("localAi.previousAnswerTail")
        )
      ];
    }, pf = () => L_(j.value?.maxTokens ?? 0), Nl = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? j.value?.ctxSize ?? Ce.value?.ctxSize ?? 4096
    ), Dl = (p) => {
      const y = Ee.value, G = p.stats?.promptTokens ?? p.promptTokens ?? 0, te = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? da(p.content) : zd(p.content)), T = Nl(p), _e = Math.min(
        p.stats?.totalTokens ?? G + te,
        T
      ), le = Math.max(
        0,
        (p.stats?.generationTimeMs ?? p.elapsedMs ?? y - Vn(p).getTime()) / 1e3
      ), Te = p.stats?.tokensPerSecond ?? (le > 0 ? te / le : 0);
      return {
        context: _e,
        contextMax: T,
        contextPercent: Math.min(100, Math.round(_e / T * 100)),
        output: te,
        outputMax: (j.value?.maxTokens ?? 0) > 0 ? String(j.value?.maxTokens) : "∞",
        seconds: le.toFixed(1),
        speed: Te.toFixed(1)
      };
    }, hf = A(() => (Ee.value, new Map(
      zn.value.map(({ message: p }) => [
        p.id,
        Dl(p)
      ])
    ))), so = (p) => hf.value.get(p.id) ?? Dl(p), zl = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : p.stats?.finishReason === "length" ? (p.stats?.totalTokens ?? so(p).context) >= Nl(p) - 8 ? t("localAi.contextLimitReached") : t("localAi.outputLimitReached") : "", Bl = (p) => {
      const y = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(y) ? t("localAi.contextExceeded") : y;
    }, mf = (p) => {
      const y = p.replace(/\s+/g, " ").trim();
      if (y.length < 900) return !1;
      const te = y.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Te) => Te.toLowerCase()) ?? [];
      if (te.length < 140) return !1;
      const T = te.slice(-120), _e = /* @__PURE__ */ new Map();
      for (const Te of T) _e.set(Te, (_e.get(Te) ?? 0) + 1);
      if (_e.size / T.length < 0.12 && [..._e.values()].some((Te) => Te >= 56))
        return !0;
      for (let Te = 1; Te <= 4; Te += 1) {
        const Oe = te.slice(-Te).join("\0");
        let Hn = 1;
        for (let Ft = te.length - Te * 2; Ft >= 0 && te.slice(Ft, Ft + Te).join("\0") === Oe; Ft -= Te)
          Hn += 1;
        if (Hn >= Math.max(24, Math.ceil(72 / Te))) return !0;
      }
      return !1;
    }, Fl = () => {
      ct || (Ee.value = Date.now(), ct = setInterval(() => {
        Ee.value = Date.now();
      }, qS));
    }, Yr = () => {
      ct && (clearInterval(ct), ct = null, Ee.value = Date.now());
    }, jl = (p) => {
      const y = Od();
      return U.value = !1, H.value = y, B.value = p, y;
    }, Qs = (p) => {
      p && H.value !== p || (H.value = null, B.value = null);
    }, Vl = (p, y) => {
      p.streaming = !1, p.stopped = !0, p.interrupted = !1, p.error = "", p.reasoningStartedAt && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()), y !== void 0 && (p.elapsedMs = y), d(p.id), Ee.value = Date.now();
    }, Hl = async (p, y, G) => {
      const te = performance.now();
      let T = ff(y), _e = "", le = null, Te = null, Oe = !1, Hn = !1;
      if (U.value) {
        Vl(p, performance.now() - te), Qs(G);
        return;
      }
      T = M_(T), p.promptTokens = ls(T), p.contextSize = Tn.value;
      const Ft = async () => {
        if (!_e) {
          le = null, Te?.(), Te = null;
          return;
        }
        const vt = U.value ? _e.length : _e.length > 4e3 ? 900 : _e.length > 1200 ? 520 : _e.length > 240 ? 180 : 64;
        if (p.content += _e.slice(0, vt), _e = _e.slice(vt), p.estimatedCompletionTokens = da(
          p.content
        ), !Hn && !U.value && mf(p.content) && (Hn = !0, U.value = !0, p.repetitionStopped = !0, ia(G).catch(
          (fn) => yt.warn("[LocalAI] repetition stop failed", fn)
        )), await gt(), !_e) {
          le = null, Te?.(), Te = null;
          return;
        }
        le = window.setTimeout(() => {
          Ft().catch(
            (fn) => yt.warn("[LocalAI] stream pump failed", fn)
          );
        }, GS);
      }, Xr = (vt) => {
        vt && (m(p, vt), _e += vt, le === null && (le = window.setTimeout(() => {
          Ft().catch(
            (fn) => yt.warn("[LocalAI] stream pump failed", fn)
          );
        }, 32)));
      }, Xl = async () => {
        !_e && le === null || await new Promise((vt) => {
          Te = vt;
        });
      }, Vo = await Kw(
        {
          messages: T,
          maxTokens: pf(),
          enableThinking: p.allowThinking === !0
        },
        (vt) => {
          U.value || (Oe = !0, Xr(vt));
        },
        {
          requestId: G,
          onStats: (vt) => {
            const fn = I_(p.stats, vt);
            p.stats = fn, fn.ctxSize && (p.contextSize = fn.ctxSize), fn.completionTokens !== void 0 && (p.estimatedCompletionTokens = fn.completionTokens), Ee.value = Date.now();
          }
        }
      ).catch(async (vt) => {
        throw await Xl(), vt;
      });
      if (!Oe)
        Xr(Vo.content);
      else if (!U.value) {
        const vt = p.content.length + _e.length;
        Vo.content.length > vt && Xr(Vo.content.slice(vt));
      }
      await Xl(), !U.value && Vo.content && p.content !== Vo.content && (p.content = Vo.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? da(p.content), d(p.id), p.streaming = !1, p.elapsedMs = performance.now() - te, p.stopped = U.value, p.interrupted = !1, p.error = "", Ee.value = Date.now(), Qs(G);
    }, gf = async () => {
      const p = H.value;
      if (!R.value || U.value) return;
      U.value = !0;
      const y = B.value;
      if (y && Vl(
        y,
        Math.max(0, Date.now() - Vn(y).getTime())
      ), !!p)
        try {
          await ia(p);
        } catch (G) {
          yt.warn("[LocalAI] cancel stream failed", G);
        }
    }, vf = () => {
      if (!L.value.trim() && !n.value.length) return !1;
      if (n.value.find(
        (te) => te.status === "pending"
      ))
        return $e.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const y = n.value.find(
        (te) => te.status === "error" || te.type === "unsupported"
      );
      return y ? ($e.msg(
        `${t("localAi.attachmentErrorBlock")}: ${y.name}`,
        "warning"
      ), !1) : n.value.some(
        (te) => te.type === "image"
      ) && !vo.value ? ($e.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, Wl = async () => {
      const p = L.value.trim();
      if (xe.value || !vf()) return;
      zt();
      const y = (/* @__PURE__ */ new Date()).toISOString(), G = ca(n.value), te = p || G[0]?.name || "", T = Ie.value;
      if (!T) return;
      const _e = fa(T, {
        id: To("user"),
        role: "user",
        content: p,
        createdAt: y,
        attachments: G
      }), le = fa(T, {
        id: To("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: _e.id,
        streaming: !0,
        allowThinking: ae.value && dn.value,
        contextSize: Tn.value
      });
      L.value = "", n.value = [], R.value = !0;
      const Te = jl(le);
      Fl(), await gt({ force: !0 });
      const Oe = performance.now();
      try {
        await Hl(le, T, Te), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await be(T)), await P();
      } catch (Hn) {
        if (U.value)
          T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await be(T);
        else {
          L.value = p, n.value = G;
          const Ft = Bl(Hn);
          $e.msg(`${t("localAi.chatFailed")}: ${Ft}`, "error"), le.error = Ft, le.interrupted = !!le.content.trim(), le.interrupted || (le.content = Ft), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await be(T));
        }
        le.streaming = !1, d(le.id), le.elapsedMs = performance.now() - Oe;
      } finally {
        R.value = !1, Qs(Te), Yr(), await gt();
      }
    }, bf = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), Wl());
    }, Ul = (p) => {
      (p.ctrlKey || p.metaKey) && p.key.toLowerCase() === "n" && !p.shiftKey && !p.altKey && (p.preventDefault(), Re());
    }, yf = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, wf = (p) => {
      const y = new Date(p), G = /* @__PURE__ */ new Date(), te = G.getTime() - y.getTime(), T = 24 * 60 * 60 * 1e3;
      return y.toDateString() === G.toDateString() ? y.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : te < T * 2 ? t("localAi.yesterday") : te < T * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(te / T))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(te / (T * 7)))
      });
    }, Gl = async (p) => {
      try {
        await navigator.clipboard.writeText(p.content), $e.msg(t("localAi.copied"));
      } catch (y) {
        $e.msg(`${t("common.operationFailed")}: ${y}`, "error");
      }
    }, ql = async (p) => {
      if (R.value) return;
      const y = Ie.value;
      if (!y) return;
      const G = F_(
        y.messages,
        y.currentNodeId,
        p
      );
      if (!G) return;
      const te = new Set(
        y.messages.filter((Oe) => G.deletedIds.has(Oe.id)).flatMap((Oe) => Oe.attachments ?? []).map((Oe) => Oe.id)
      );
      Z.value && te.has(Z.value.id) && It();
      const T = y.messages, _e = y.currentNodeId, le = y.updatedAt, Te = y.updatedAtLabel;
      if (y.messages = G.messages, y.currentNodeId = G.currentNodeId, !y.messages.some((Oe) => !is(Oe))) {
        await Bt(y.id);
        return;
      }
      y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString();
      try {
        await be(y);
      } catch (Oe) {
        y.messages = T, y.currentNodeId = _e, y.updatedAt = le, y.updatedAtLabel = Te, yt.warn("[LocalAI] delete message failed", Oe), $e.msg(`${t("common.operationFailed")}: ${String(Oe)}`, "error");
      }
    }, Kl = (p) => {
      R.value || (L.value = p.content, n.value = ca(p.attachments), Ie.value && p.parentId && (Ie.value.currentNodeId = p.parentId), Fn());
    }, Zl = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), Yl = (p, y) => {
      if (R.value) return;
      const G = Ie.value;
      if (!G) return;
      const te = p.siblingCurrentIndex + y, T = p.siblingLeafNodeIds[te];
      T && (G.currentNodeId = T, de.value = !0, gt({ force: !0 }));
    }, _f = async (p) => {
      const y = Ie.value;
      if (!y || R.value) return;
      const G = y.messages.find((Oe) => Oe.id === p);
      if (!G || G.role !== "assistant") return;
      const te = Fd(y.messages, G.id);
      if (!te.length) return;
      const T = (/* @__PURE__ */ new Date()).toISOString(), _e = /* @__PURE__ */ new Map(), le = te.map((Oe, Hn) => {
        const Ft = To(Hn === 0 ? "root" : Oe.role);
        return _e.set(Oe.id, Ft), {
          ...Oe,
          id: Ft,
          parentId: Oe.parentId ? _e.get(Oe.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: ca(Oe.attachments)
        };
      });
      for (let Oe = 0; Oe < le.length - 1; Oe += 1)
        le[Oe].childIds = [le[Oe + 1].id];
      const Te = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${y.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: T,
        updatedAt: T,
        updatedAtLabel: x(),
        currentNodeId: le.at(-1)?.id ?? null,
        messages: le
      };
      _.value.unshift(Te), M.value = Te.id, L.value = "", n.value = [], de.value = !0, await be(Te), await gt({ force: !0 }), $e.msg(t("localAi.branchCreated"));
    }, kf = async (p) => {
      const y = Ie.value;
      if (!y || R.value) return;
      const G = y.messages.find((le) => le.id === p);
      if (!G || G.role !== "assistant" || !G.parentId) return;
      y.currentNodeId = G.parentId;
      const te = fa(y, {
        id: To("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: G.parentId,
        streaming: !0,
        allowThinking: ae.value && dn.value
      });
      R.value = !0;
      const T = jl(te);
      Fl(), await gt({ force: !0 });
      const _e = performance.now();
      try {
        await Hl(te, y, T), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await be(y);
      } catch (le) {
        if (U.value)
          y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await be(y);
        else {
          const Te = Bl(le);
          $e.msg(`${t("localAi.chatFailed")}: ${Te}`, "error"), te.error = Te, te.interrupted = !!te.content.trim(), te.interrupted || (te.content = Te), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await be(y);
        }
        te.streaming = !1, d(te.id), te.elapsedMs = performance.now() - _e;
      } finally {
        R.value = !1, Qs(T), Yr(), await gt();
      }
    };
    return nt(async () => {
      window.addEventListener("local-ai-prompt-ready", Do), window.addEventListener(
        "local-ai-new-chat-requested",
        wo
      ), no(
        localStorage.getItem(As),
        ba(localStorage)
      ), Xt(), typeof ResizeObserver < "u" && (Ye = new ResizeObserver(() => {
        de.value && gt();
      })), window.addEventListener("pointerup", jn), window.addEventListener("pointercancel", jn), window.addEventListener("keydown", Ul);
      try {
        Se = await Ad().onFocusChanged(
          ({ payload: y }) => {
            !y || !ue || Qt().then((G) => {
              G && Bn();
            });
          }
        );
      } catch (p) {
        yt.warn("[LocalAI] focus change listener failed", p);
      }
      try {
        await Ae();
      } finally {
        const [p, y] = await Promise.all([
          Pe(),
          Qt()
        ]);
        ue = !0;
        const G = !!p || ke || ba(localStorage), te = p || pe || localStorage.getItem(As);
        pe = null, ke = !1, te ? no(te, G) : (y || je) && Bn();
      }
      _t = setInterval(() => {
        P().catch(
          (p) => yt.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), he(dn, (p) => {
      p || (ae.value = !1);
    }), ja(() => {
      ue = !1, pe = null, ke = !1, je = !1, Ge = null, window.removeEventListener("local-ai-prompt-ready", Do), window.removeEventListener(
        "local-ai-new-chat-requested",
        wo
      ), Se && (Se(), Se = null), _t && clearInterval(_t), ut !== null && (window.cancelAnimationFrame(ut), ut = null), Ye?.disconnect(), Ye = null, ot = null, window.removeEventListener("pointerup", jn), window.removeEventListener("pointercancel", jn), window.removeEventListener("keydown", Ul), H.value && ia(H.value), u(), Yr();
    }), (p, y) => {
      const G = bd, te = vd;
      return S(), D(
        "main",
        {
          class: z([
            "local-ai-chat-shell",
            l(V) ? "local-ai-chat-shell--sidebar-collapsed" : "",
            l(R) ? "local-ai-chat-shell--sending" : ""
          ])
        },
        [
          f(
            "aside",
            {
              class: z([
                "chat-sidebar",
                l(V) ? "chat-sidebar--collapsed" : ""
              ])
            },
            [
              f("header", q2, [
                f("div", K2, [
                  f("div", Z2, [
                    f(
                      "h2",
                      null,
                      E(l(t)("localAi.chatTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      E(l(t)("localAi.chatPrivacySubtitle")),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                f("button", {
                  class: "icon-action-btn sidebar-collapse-btn",
                  type: "button",
                  title: l(V) ? l(t)("localAi.expandSidebar") : l(t)("localAi.collapseSidebar"),
                  "aria-pressed": l(V),
                  onClick: y[0] || (y[0] = (T) => V.value = !l(V))
                }, [
                  k(l(ti), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, Y2)
              ]),
              f("div", X2, [
                f("button", {
                  class: "sidebar-new-chat-btn",
                  type: "button",
                  disabled: l(xe),
                  onClick: Re
                }, [
                  k(l(Qr), {
                    theme: "outline",
                    size: "18"
                  }),
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.newChat")),
                    1
                    /* TEXT */
                  ),
                  y[17] || (y[17] = f(
                    "span",
                    { class: "sidebar-new-chat-shortcut" },
                    "Ctrl N",
                    -1
                    /* HOISTED */
                  ))
                ], 8, Q2),
                f("label", J2, [
                  k(l(Jf), {
                    theme: "outline",
                    size: "16"
                  }),
                  lt(f("input", {
                    "onUpdate:modelValue": y[1] || (y[1] = (T) => en(C) ? C.value = T : null),
                    placeholder: l(t)("localAi.searchHistory")
                  }, null, 8, eT), [
                    [Ms, l(C)]
                  ]),
                  l(C) ? (S(), D(
                    "span",
                    tT,
                    E(l(yo).length),
                    1
                    /* TEXT */
                  )) : Q("v-if", !0)
                ])
              ]),
              f("section", nT, [
                f("div", oT, [
                  f(
                    "div",
                    sT,
                    E(l(t)("localAi.recent")),
                    1
                    /* TEXT */
                  ),
                  f("div", rT, [
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("localAi.clearAllChats"),
                      disabled: l(xe) || l(F) || !l(_).length,
                      onClick: y[2] || (y[2] = (T) => oe.value = !0)
                    }, [
                      k(l(fs), {
                        theme: "outline",
                        size: "14"
                      })
                    ], 8, aT),
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("plugins.refresh"),
                      disabled: l(xe) || l(Y) || l(F),
                      onClick: Ae
                    }, [
                      k(l(ps), {
                        class: z({ "animate-spin": l(Y) }),
                        theme: "outline",
                        size: "14"
                      }, null, 8, ["class"])
                    ], 8, lT)
                  ])
                ]),
                l(yo).length ? (S(), D("div", iT, [
                  (S(!0), D(
                    at,
                    null,
                    En(l(yo), (T) => (S(), D("div", {
                      key: T.id,
                      class: z([
                        "chat-list-item",
                        l(M) === T.id ? "active" : "",
                        l(xe) ? "disabled" : ""
                      ]),
                      role: "button",
                      tabindex: l(xe) ? -1 : 0,
                      "aria-disabled": l(xe),
                      onClick: (_e) => Ut(T.id),
                      onKeydown: xn(qe((_e) => Ut(T.id), ["prevent"]), ["enter"])
                    }, [
                      f("span", uT, [
                        lt((S(), D("span", dT, [
                          f("span", fT, [
                            f(
                              "span",
                              pT,
                              E(T.title),
                              1
                              /* TEXT */
                            ),
                            f(
                              "span",
                              hT,
                              E(T.title),
                              1
                              /* TEXT */
                            )
                          ])
                        ])), [
                          [q]
                        ]),
                        f(
                          "span",
                          mT,
                          E(wf(T.updatedAt)),
                          1
                          /* TEXT */
                        )
                      ]),
                      f("button", {
                        class: "chat-item-delete",
                        type: "button",
                        title: l(t)("common.delete"),
                        disabled: l(xe),
                        onClick: qe((_e) => Bt(T.id), ["stop"])
                      }, [
                        k(l(fs), {
                          theme: "outline",
                          size: "13"
                        })
                      ], 8, gT)
                    ], 42, cT))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (S(), D(
                  "div",
                  vT,
                  E(l(t)("common.empty")),
                  1
                  /* TEXT */
                ))
              ]),
              f("footer", bT, [
                f("div", yT, [
                  f("span", wT, [
                    k(l(Jr), {
                      theme: "outline",
                      size: "15"
                    })
                  ]),
                  f("span", _T, [
                    f(
                      "strong",
                      null,
                      E(l(cn)),
                      1
                      /* TEXT */
                    ),
                    f(
                      "small",
                      null,
                      E(l(Ce)?.healthy ? l(ft) : l(t)("localAi.onDemandHint")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f(
                    "span",
                    {
                      class: z([
                        "service-status-dot",
                        l(Ce)?.healthy ? "ready" : "stopped"
                      ])
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ]),
                f("button", {
                  class: "sidebar-settings-btn",
                  type: "button",
                  onClick: yf
                }, [
                  k(l(Yc), {
                    theme: "outline",
                    size: "16"
                  }),
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.settings")),
                    1
                    /* TEXT */
                  ),
                  k(l(oi), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ])
            ],
            2
            /* CLASS */
          ),
          f("section", kT, [
            f("header", TT, [
              f("div", ST, [
                l(V) ? (S(), D("button", {
                  key: 0,
                  class: "panel-sidebar-toggle",
                  type: "button",
                  title: l(t)("localAi.expandSidebar"),
                  onClick: y[3] || (y[3] = (T) => V.value = !1)
                }, [
                  k(l(ti), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, AT)) : Q("v-if", !0),
                f("div", CT, [
                  k(l(Jr), {
                    theme: "outline",
                    size: "18"
                  })
                ]),
                f("div", ET, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.chatSubtitle")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "h1",
                    null,
                    E(l(go)),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            f(
              "div",
              {
                ref_key: "messageListRef",
                ref: ne,
                class: "message-list",
                onScroll: $t,
                onWheelPassive: St,
                onPointerdown: Sn,
                onTouchstartPassive: Zr,
                onTouchmovePassive: Zs,
                onTouchend: Ys
              },
              [
                l(No).length ? Q("v-if", !0) : (S(), D("section", xT, [
                  f("div", LT, [
                    f("div", IT, [
                      k(l(Qf), {
                        theme: "outline",
                        size: "30"
                      })
                    ]),
                    f("span", OT, [
                      y[18] || (y[18] = f(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      )),
                      pt(
                        " " + E(l(t)("localAi.privateWorkspace")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f(
                      "h2",
                      null,
                      E(l(t)("localAi.chatWelcomeTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      E(l(t)("localAi.chatWelcomeDesc")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", $T, [
                    f("div", RT, [
                      f(
                        "span",
                        null,
                        E(l(t)("localAi.quickStart")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "small",
                        null,
                        E(l(t)("localAi.quickStartHint")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", MT, [
                      (S(), D(
                        at,
                        null,
                        En(we, (T) => f("button", {
                          key: T.title,
                          class: "quick-prompt-card",
                          type: "button",
                          onClick: (_e) => zo(T.title)
                        }, [
                          f("span", NT, [
                            (S(), re(tn(T.icon), {
                              theme: "outline",
                              size: "17"
                            }))
                          ]),
                          f("span", DT, [
                            f(
                              "strong",
                              null,
                              E(l(t)(T.title)),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              E(l(t)(T.description)),
                              1
                              /* TEXT */
                            )
                          ]),
                          k(l(oi), {
                            theme: "outline",
                            size: "14"
                          })
                        ], 8, PT)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ])
                ])),
                (S(!0), D(
                  at,
                  null,
                  En(l(zn), (T, _e) => (S(), D(
                    at,
                    {
                      key: T.message.id
                    },
                    [
                      lf(_e) ? (S(), D("div", zT, [
                        f(
                          "span",
                          null,
                          E(cf(T.message)),
                          1
                          /* TEXT */
                        )
                      ])) : Q("v-if", !0),
                      f(
                        "article",
                        {
                          class: z(["message-row", `message-row--${T.message.role}`])
                        },
                        [
                          f("div", BT, [
                            T.message.role === "assistant" ? (S(), re(l(Jr), {
                              key: 0,
                              theme: "outline",
                              size: "18"
                            })) : (S(), D(
                              "span",
                              FT,
                              E(l(t)("localAi.youShort")),
                              1
                              /* TEXT */
                            ))
                          ]),
                          f("div", jT, [
                            T.message.role === "user" ? (S(), D(
                              at,
                              { key: 0 },
                              [
                                f("div", VT, [
                                  T.message.content ? (S(), D(
                                    "div",
                                    HT,
                                    E(T.message.content),
                                    1
                                    /* TEXT */
                                  )) : Q("v-if", !0),
                                  T.message.attachments?.length ? (S(), D("div", WT, [
                                    (S(!0), D(
                                      at,
                                      null,
                                      En(T.message.attachments, (le) => (S(), D(
                                        "div",
                                        {
                                          key: le.id,
                                          class: z([
                                            "message-attachment-chip",
                                            le.type === "image" && le.dataUrl ? "message-attachment-chip--image" : ""
                                          ])
                                        },
                                        [
                                          le.type === "image" && le.dataUrl ? (S(), D("button", {
                                            key: 0,
                                            class: "attachment-image-preview-btn",
                                            type: "button",
                                            title: le.name,
                                            "aria-label": l(t)("localAi.previewAttachment"),
                                            onClick: (Te) => eo(le)
                                          }, [
                                            f("img", {
                                              src: le.dataUrl,
                                              alt: le.name
                                            }, null, 8, GT)
                                          ], 8, UT)) : (S(), D(
                                            "span",
                                            qT,
                                            E(le.type === "text" ? "TXT" : "FILE"),
                                            1
                                            /* TEXT */
                                          )),
                                          le.type === "image" && le.dataUrl ? Q("v-if", !0) : (S(), D(
                                            "span",
                                            KT,
                                            E(le.name),
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
                                  ])) : Q("v-if", !0)
                                ]),
                                T.message.streaming ? Q("v-if", !0) : (S(), D("div", ZT, [
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Gl(T.message)
                                  }, [
                                    k(l(Jl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, YT),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => Kl(T.message)
                                  }, [
                                    k(l(Qr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, XT),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => ql(T.message.id)
                                  }, [
                                    k(l(fs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, QT)
                                ]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (S(), D(
                              at,
                              { key: 1 },
                              [
                                f("div", JT, [
                                  f(
                                    "span",
                                    null,
                                    E(l(ft)),
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? (S(), D(
                                    "small",
                                    eS,
                                    E(uf(T.message)),
                                    1
                                    /* TEXT */
                                  )) : Q("v-if", !0)
                                ]),
                                f(
                                  "div",
                                  {
                                    class: z(["assistant-card", {
                                      "assistant-card--streaming": T.message.streaming
                                    }])
                                  },
                                  [
                                    T.message.content ? (S(), D("div", tS, [
                                      T.message.allowThinking && l(w)(T.message.content) ? (S(), D("details", {
                                        key: 0,
                                        class: "reasoning-panel",
                                        open: T.message.streaming && jo(T.message)
                                      }, [
                                        f("summary", null, [
                                          f("span", oS, [
                                            k(l(Ql), {
                                              theme: "outline",
                                              size: "14"
                                            }),
                                            pt(
                                              " " + E(rf(T.message)),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          T.message.streaming ? (S(), D(
                                            "small",
                                            sS,
                                            E(jo(T.message) ? l(t)("localAi.thinking") : l(t)("localAi.generating")),
                                            1
                                            /* TEXT */
                                          )) : Q("v-if", !0)
                                        ]),
                                        f("div", {
                                          class: "message-content markdown-body",
                                          onClick: y[4] || (y[4] = //@ts-ignore
                                          (...le) => l(h) && l(h)(...le)),
                                          innerHTML: l(b)(T.message, "reasoning")
                                        }, null, 8, rS)
                                      ], 8, nS)) : Q("v-if", !0),
                                      l(g)(T.message.content) ? (S(), D("div", {
                                        key: 1,
                                        class: "message-content markdown-body",
                                        onClick: y[5] || (y[5] = //@ts-ignore
                                        (...le) => l(h) && l(h)(...le)),
                                        innerHTML: l(b)(T.message, "answer")
                                      }, null, 8, aS)) : Q("v-if", !0)
                                    ])) : (S(), D(
                                      "div",
                                      {
                                        key: 1,
                                        class: z([
                                          "message-content",
                                          T.message.stopped ? "" : "loading-text"
                                        ])
                                      },
                                      E(T.message.stopped ? l(t)("localAi.generationStopped") : df(T.message)),
                                      3
                                      /* TEXT, CLASS */
                                    ))
                                  ],
                                  2
                                  /* CLASS */
                                ),
                                T.message.content ? (S(), D("div", lS, [
                                  f(
                                    "span",
                                    iS,
                                    E(l(t)("localAi.contextLabel")) + ": " + E(so(T.message).context) + "/" + E(so(T.message).contextMax) + " (" + E(so(T.message).contextPercent) + "%) ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    cS,
                                    E(l(t)("localAi.outputLabel")) + ": " + E(so(T.message).output) + "/" + E(so(T.message).outputMax),
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    uS,
                                    E(so(T.message).seconds) + "s ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    dS,
                                    E(so(T.message).speed) + " t/s ",
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? Q("v-if", !0) : (S(), D(
                                    "span",
                                    fS,
                                    E(Ml(T.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ])) : Q("v-if", !0),
                                zl(T.message) ? (S(), D(
                                  "div",
                                  pS,
                                  E(zl(T.message)),
                                  1
                                  /* TEXT */
                                )) : Q("v-if", !0),
                                T.message.streaming ? Q("v-if", !0) : (S(), D("div", hS, [
                                  T.siblingLeafNodeIds.length > 1 ? (S(), D("div", {
                                    key: 0,
                                    class: "message-version-switcher",
                                    title: Zl(T),
                                    "aria-label": Zl(T)
                                  }, [
                                    f("button", {
                                      type: "button",
                                      disabled: T.siblingCurrentIndex <= 0,
                                      title: l(t)("localAi.previousVersion"),
                                      onClick: (le) => Yl(T, -1)
                                    }, " ‹ ", 8, gS),
                                    f(
                                      "span",
                                      null,
                                      E(T.siblingCurrentIndex + 1) + " / " + E(T.siblingLeafNodeIds.length),
                                      1
                                      /* TEXT */
                                    ),
                                    f("button", {
                                      type: "button",
                                      disabled: T.siblingCurrentIndex >= T.siblingLeafNodeIds.length - 1,
                                      title: l(t)("localAi.nextVersion"),
                                      onClick: (le) => Yl(T, 1)
                                    }, " › ", 8, vS)
                                  ], 8, mS)) : Q("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Gl(T.message)
                                  }, [
                                    k(l(Jl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, bS),
                                  T.message.role === "assistant" ? (S(), D("button", {
                                    key: 1,
                                    type: "button",
                                    title: l(t)("localAi.regenerate"),
                                    onClick: (le) => kf(T.message.id)
                                  }, [
                                    k(l(ps), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, yS)) : Q("v-if", !0),
                                  T.message.role === "assistant" ? (S(), D("button", {
                                    key: 2,
                                    type: "button",
                                    title: l(t)("localAi.branchChat"),
                                    onClick: (le) => _f(T.message.id)
                                  }, [
                                    k(l(Zf), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, wS)) : Q("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => Kl(T.message)
                                  }, [
                                    k(l(Qr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, _S),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => ql(T.message.id)
                                  }, [
                                    k(l(fs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, kS)
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
            l($) ? (S(), D("button", {
              key: 0,
              class: "scroll-bottom-btn",
              type: "button",
              title: l(t)("localAi.jumpToLatest"),
              onClick: ie
            }, [
              k(l(qf), {
                theme: "outline",
                size: "15"
              }),
              f(
                "span",
                null,
                E(l(t)("localAi.jumpToLatest")),
                1
                /* TEXT */
              )
            ], 8, TS)) : Q("v-if", !0),
            f("div", SS, [
              f(
                "form",
                {
                  class: z([
                    "chat-input-card",
                    l(fe) ? "chat-input-card--focused" : "",
                    l(O) ? "chat-input-card--enhancing" : ""
                  ]),
                  onDragover: y[11] || (y[11] = qe(() => {
                  }, ["prevent"])),
                  onDrop: y[12] || (y[12] = qe(
                    //@ts-ignore
                    (...T) => l(a) && l(a)(...T),
                    ["prevent"]
                  )),
                  onSubmit: qe(Wl, ["prevent"]),
                  onFocusin: y[13] || (y[13] = (T) => fe.value = !0),
                  onFocusout: y[14] || (y[14] = (T) => fe.value = !1)
                },
                [
                  l(n).length ? (S(), D("div", AS, [
                    (S(!0), D(
                      at,
                      null,
                      En(l(n), (T) => (S(), D(
                        "div",
                        {
                          key: T.id,
                          class: z([
                            "attachment-preview-item",
                            `attachment-preview-item--${T.status}`
                          ])
                        },
                        [
                          T.type === "image" && T.dataUrl ? (S(), D("button", {
                            key: 0,
                            class: "attachment-preview-image-btn",
                            type: "button",
                            title: T.name,
                            "aria-label": l(t)("localAi.previewAttachment"),
                            onClick: (_e) => eo(T)
                          }, [
                            f("img", {
                              src: T.dataUrl,
                              alt: T.name
                            }, null, 8, ES)
                          ], 8, CS)) : (S(), D(
                            "span",
                            xS,
                            E(T.type === "text" ? "TXT" : "FILE"),
                            1
                            /* TEXT */
                          )),
                          f("span", LS, [
                            f(
                              "strong",
                              null,
                              E(T.name),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              E(l(Nd)(T.size)) + " · " + E(l(s)(T)),
                              1
                              /* TEXT */
                            )
                          ]),
                          f("button", {
                            class: "attachment-remove-btn",
                            type: "button",
                            title: l(t)("common.delete"),
                            onClick: (_e) => un(T.id)
                          }, [
                            k(l(fs), {
                              theme: "outline",
                              size: "12"
                            })
                          ], 8, IS)
                        ],
                        2
                        /* CLASS */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : Q("v-if", !0),
                  lt(f("textarea", {
                    ref_key: "composerInputRef",
                    ref: I,
                    "onUpdate:modelValue": y[6] || (y[6] = (T) => en(L) ? L.value = T : null),
                    class: "chat-input",
                    rows: "1",
                    placeholder: l(t)("localAi.chatPlaceholder"),
                    readonly: l(O),
                    "aria-busy": l(O),
                    onKeydown: bf,
                    onPaste: y[7] || (y[7] = //@ts-ignore
                    (...T) => l(r) && l(r)(...T))
                  }, null, 40, OS), [
                    [Ms, l(L)]
                  ]),
                  f("div", $S, [
                    f("div", RS, [
                      f("button", {
                        class: "composer-tool-btn",
                        type: "button",
                        title: l(t)("localAi.addAttachment"),
                        disabled: l(o),
                        onClick: y[8] || (y[8] = //@ts-ignore
                        (...T) => l(i) && l(i)(...T))
                      }, [
                        l(o) ? (S(), re(l(ps), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "16"
                        })) : (S(), re(l(Yf), {
                          key: 1,
                          theme: "outline",
                          size: "16"
                        }))
                      ], 8, MS),
                      f("button", {
                        class: z([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          "composer-tool-btn--enhance",
                          l(O) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        disabled: !l(Lt),
                        title: l(L).trim() ? l(t)("localAi.enhancePromptDesc") : l(t)("localAi.enhanceNeedsPrompt"),
                        onClick: Ot
                      }, [
                        l(O) ? (S(), re(l(ps), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "14"
                        })) : (S(), re(l(ni), {
                          key: 1,
                          theme: "outline",
                          size: "15"
                        })),
                        f(
                          "span",
                          null,
                          E(l(t)("localAi.enhancePrompt")),
                          1
                          /* TEXT */
                        )
                      ], 10, PS),
                      l(dn) ? (S(), D("button", {
                        key: 0,
                        class: z([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          l(ae) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        title: l(ae) ? l(t)("localAi.thinkingEnabled") : l(t)("localAi.thinkingDisabled"),
                        "aria-pressed": l(ae),
                        onClick: y[9] || (y[9] = (T) => ae.value = !l(ae))
                      }, [
                        k(l(Ql), {
                          theme: "outline",
                          size: "15"
                        }),
                        f(
                          "span",
                          null,
                          E(l(t)("localAi.reasoningTitle")),
                          1
                          /* TEXT */
                        )
                      ], 10, NS)) : Q("v-if", !0)
                    ]),
                    f("div", DS, [
                      f("div", zS, [
                        k(l(ei), {
                          theme: "outline",
                          size: "14"
                        }),
                        k(te, {
                          modelValue: l(ge),
                          "onUpdate:modelValue": y[10] || (y[10] = (T) => en(ge) ? ge.value = T : null),
                          class: "chat-model-select",
                          size: "small",
                          disabled: l(R) || !l(Yt).length,
                          placeholder: l(ft),
                          "popper-class": "chat-model-select-popper",
                          onChange: rt
                        }, {
                          default: ee(() => [
                            (S(!0), D(
                              at,
                              null,
                              En(l(Yt), (T) => (S(), re(G, {
                                key: T,
                                label: Zt(T),
                                value: T
                              }, {
                                default: ee(() => [
                                  f("span", BS, [
                                    k(l(ei), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    f(
                                      "span",
                                      FS,
                                      E(Zt(T)),
                                      1
                                      /* TEXT */
                                    ),
                                    l(ge) === T ? (S(), re(l(Uf), {
                                      key: 0,
                                      class: "chat-model-option-check",
                                      theme: "outline",
                                      size: "15"
                                    })) : Q("v-if", !0)
                                  ])
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["label", "value"]))),
                              128
                              /* KEYED_FRAGMENT */
                            )),
                            l(Yt).length ? Q("v-if", !0) : (S(), re(G, {
                              key: 0,
                              label: l(ft),
                              value: ""
                            }, null, 8, ["label"]))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "disabled", "placeholder"])
                      ]),
                      f(
                        "span",
                        jS,
                        E(l(t)("localAi.inputHint")),
                        1
                        /* TEXT */
                      ),
                      l(H) ? (S(), D("button", {
                        key: 0,
                        class: z(["send-btn send-btn--stop", { "send-btn--stopping": l(U) }]),
                        type: "button",
                        disabled: l(U),
                        title: l(U) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        "aria-label": l(U) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        onClick: gf
                      }, [
                        l(U) ? (S(), re(l(ps), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "15"
                        })) : (S(), re(l(tp), {
                          key: 1,
                          theme: "filled",
                          size: "11"
                        }))
                      ], 10, VS)) : (S(), D("button", {
                        key: 1,
                        class: "send-btn",
                        type: "submit",
                        disabled: !l(mt),
                        title: l(t)("localAi.send"),
                        "aria-label": l(t)("localAi.send")
                      }, [
                        k(l(ep), {
                          theme: "outline",
                          size: "15"
                        })
                      ], 8, HS))
                    ])
                  ])
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ]),
          k($2, {
            modelValue: l(dt),
            "onUpdate:modelValue": y[15] || (y[15] = (T) => en(dt) ? dt.value = T : null),
            attachment: l(Z)
          }, null, 8, ["modelValue", "attachment"]),
          k(l(d_), {
            modelValue: l(oe),
            "onUpdate:modelValue": y[16] || (y[16] = (T) => en(oe) ? oe.value = T : null),
            title: l(t)("localAi.clearAllChats"),
            "confirm-text": l(t)("common.delete"),
            "cancel-text": l(t)("common.cancel"),
            loading: l(F),
            type: "danger",
            onConfirm: ds
          }, {
            default: ee(() => [
              f(
                "div",
                null,
                E(l(t)("localAi.clearAllChatsConfirm")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "title", "confirm-text", "cancel-text", "loading"])
        ],
        2
        /* CLASS */
      );
    };
  }
}), ZS = /* @__PURE__ */ Mo(KS, [["__scopeId", "data-v-7e1179b5"]]), YS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ZS
}, Symbol.toStringTag, { value: "Module" })), XS = { class: "settings-panel local-ai-settings-shell" }, QS = { class: "panel-header local-ai-header" }, JS = { class: "local-ai-frame local-ai-header__inner" }, e4 = { class: "local-ai-heading" }, t4 = { class: "panel-title" }, n4 = { class: "local-ai-desc" }, o4 = { class: "header-actions" }, s4 = {
  key: 0,
  class: "panel-content local-ai-content"
}, r4 = { class: "local-ai-frame" }, a4 = { class: "settings-section" }, l4 = { class: "settings-section__header" }, i4 = { class: "status-overview" }, c4 = { class: "status-list" }, u4 = ["title"], d4 = ["title"], f4 = ["title"], p4 = { class: "memory-summary__title" }, h4 = { class: "memory-summary__metrics" }, m4 = { class: "readiness-grid" }, g4 = { class: "readiness-item" }, v4 = { class: "readiness-item" }, b4 = { class: "readiness-item" }, y4 = { class: "readiness-item" }, w4 = { class: "readiness-item" }, _4 = { class: "readiness-item" }, k4 = { class: "setting-row service-setting" }, T4 = { class: "setting-label" }, S4 = { class: "setting-title" }, A4 = { class: "setting-desc" }, C4 = { class: "setting-control service-control" }, E4 = { class: "service-controls" }, x4 = {
  key: 0,
  class: "service-url"
}, L4 = { class: "settings-section" }, I4 = { class: "settings-section__header" }, O4 = { class: "field-stack" }, $4 = ["title"], R4 = { class: "setting-label" }, M4 = { class: "setting-title" }, P4 = { class: "setting-desc" }, N4 = { class: "setting-control" }, D4 = { class: "path-control" }, z4 = { class: "model-pair-grid" }, B4 = ["title"], F4 = { class: "setting-label" }, j4 = { class: "setting-title" }, V4 = { class: "setting-desc" }, H4 = { class: "setting-control" }, W4 = ["title"], U4 = { class: "setting-label" }, G4 = { class: "setting-title" }, q4 = { class: "setting-desc" }, K4 = { class: "setting-control" }, Z4 = ["title"], Y4 = { class: "setting-label" }, X4 = { class: "setting-title" }, Q4 = { class: "setting-desc" }, J4 = { class: "setting-control" }, eA = { class: "path-control" }, tA = ["placeholder"], nA = { class: "settings-section" }, oA = { class: "settings-section__header" }, sA = { class: "parameter-grid" }, rA = ["title"], aA = ["title"], lA = ["title"], iA = ["title"], cA = ["title"], uA = ["title"], dA = { class: "settings-section" }, fA = { class: "settings-section__header" }, pA = { class: "switch-grid" }, hA = ["title"], mA = { class: "switch-field__label" }, gA = ["title"], vA = { class: "switch-field__label" }, bA = ["title"], yA = { class: "switch-field__label" }, wA = { class: "settings-section" }, _A = { class: "settings-section__header" }, kA = { class: "switch-grid switch-grid--two" }, TA = ["title"], SA = { class: "switch-field__label" }, AA = ["title"], CA = { class: "switch-field__label" }, EA = ["title"], xA = ["title"], LA = { class: "settings-section" }, IA = { class: "settings-section__header" }, OA = { class: "parameter-grid parameter-grid--three" }, $A = ["title"], RA = ["title"], MA = ["title"], PA = ["title"], NA = ["title"], DA = ["title"], zA = ["title"], BA = ["title"], FA = {
  key: 1,
  class: "local-ai-save-bar"
}, jA = { class: "local-ai-frame settings-footer" }, VA = ["title"], HA = /* @__PURE__ */ se({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = js(), n = N(null), o = N(null), s = N(null), a = N(null), r = N(!1), i = N(!1), c = N(!1), u = N(!1), d = N(!1);
    let h = null;
    const g = A(() => !!a.value?.selectedModelPath), w = A(() => !!n.value?.mmprojPath), m = A({
      get: () => n.value?.modelPath ?? "",
      set: (j) => {
        n.value && (n.value.modelPath = j || void 0);
      }
    }), b = A({
      get: () => n.value?.mmprojPath ?? "",
      set: (j) => {
        n.value && (n.value.mmprojPath = j || void 0);
      }
    }), C = A(
      () => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), _ = A(
      () => g.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), M = A(() => s.value?.healthy ? t("localAi.serviceHealthy") : s.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), V = A(
      () => o.value ? o.value.available ? "ok" : "danger" : "muted"
    ), L = A(
      () => a.value ? g.value ? "ok" : "danger" : "muted"
    ), I = A(() => s.value ? s.value.healthy ? "ok" : s.value.running ? "warn" : "danger" : "muted"), O = (j) => j.split(/[\\/]+/).pop() ?? j, R = A(() => {
      const K = O(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return K ? Number(K[1]) : 4;
    }), Y = A(() => {
      const j = n.value;
      if (!j)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown"),
          level: "warn"
        };
      const K = Math.max(1.4, R.value * 0.92), ge = Math.min(1, Math.max(0, j.gpuLayers) / 32), Ce = j.ctxSize / 8192 * 0.38 * (j.kvOffload ? 1 : 0.12), ne = j.batchSize / 512 * 0.18, Z = K * ge + Ce + ne, dt = K * (1 - ge) + j.ctxSize / 8192 * 0.22, Ee = Z + dt, _t = j.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : j.ctxSize >= 32768 || j.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced"), ct = Ee >= 24 || j.ctxSize >= 32768 || j.batchSize >= 2048 ? "danger" : Ee >= 16 || j.ctxSize >= 16384 || j.batchSize >= 1024 ? "warn" : "ok";
      return {
        gpuGb: Z.toFixed(2),
        totalGb: Ee.toFixed(2),
        bottleneck: _t,
        level: ct
      };
    }), F = (j) => t(`localAi.paramHints.${j}`), oe = (j) => ({
      "tone-ok": j === "ok",
      "tone-warn": j === "warn",
      "tone-danger": j === "danger",
      "tone-muted": j === "muted" || !j
    }), U = (j) => oe(j ? "ok" : "danger"), ae = async () => {
      o.value = await Ww();
    }, fe = async () => {
      s.value = await Ld();
    }, de = async () => {
      n.value && (a.value = await xd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, $ = async () => {
      r.value = !0;
      try {
        n.value = await Ed(), await Promise.all([ae(), de(), fe()]);
      } catch (j) {
        yt.error("[LocalAI] refresh settings failed", j), $e.msg(`${t("localAi.refreshFailed")}: ${j}`, "error");
      } finally {
        r.value = !1;
      }
    }, H = async () => {
      if (n.value)
        try {
          await pr(n.value);
        } catch (j) {
          yt.warn("[LocalAI] autosave failed", j);
        }
    }, B = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await pr(n.value), await Promise.all([ae(), de(), fe()]), $e.msg(t("localAi.configSaved"));
        } catch (j) {
          $e.msg(`${t("localAi.configSaveFailed")}: ${j}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, ue = async () => {
      const j = await Oa({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !j || Array.isArray(j) || !n.value || (n.value.modelDir = j, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await de());
    }, pe = async () => {
      const j = await Oa({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !j || Array.isArray(j) || !n.value || (n.value.runtimePath = j, await H(), await ae());
    }, ke = async () => {
      if (n.value) {
        c.value = !0;
        try {
          await pr(n.value), s.value = await Uw(n.value), $e.msg(t("localAi.serviceStarted"));
        } catch (j) {
          $e.msg(`${t("localAi.serviceStartFailed")}: ${j}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, je = async () => {
      u.value = !0;
      try {
        await B(), s.value = await Id(), $e.msg(t("localAi.serviceRestarted"));
      } catch (j) {
        $e.msg(`${t("localAi.serviceRestartFailed")}: ${j}`, "error");
      } finally {
        u.value = !1;
      }
    }, Ge = async () => {
      d.value = !0;
      try {
        await Gw(), await fe(), $e.msg(t("localAi.serviceStoppedMsg"));
      } catch (j) {
        $e.msg(`${t("localAi.serviceStopFailed")}: ${j}`, "error");
      } finally {
        d.value = !1;
      }
    }, Se = () => {
      window.location.hash = "#/config/local-ai/chat";
    };
    return nt(async () => {
      await $(), h = setInterval(() => {
        fe().catch(
          (j) => yt.warn("[LocalAI] status timer failed", j)
        );
      }, 15e3);
    }), ja(() => {
      h && clearInterval(h);
    }), (j, K) => {
      const ge = bd, Ce = vd, ne = Q1;
      return S(), D("div", XS, [
        f("header", QS, [
          f("div", JS, [
            f("div", e4, [
              f(
                "h3",
                t4,
                E(l(t)("localAi.title")),
                1
                /* TEXT */
              ),
              f(
                "p",
                n4,
                E(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              )
            ]),
            f("div", o4, [
              k(l(Jt), {
                size: "small",
                plain: "",
                onClick: Se
              }, {
                default: ee(() => [
                  pt(
                    E(l(t)("localAi.openChat")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              k(l(Jt), {
                size: "small",
                loading: l(r),
                onClick: $
              }, {
                default: ee(() => [
                  pt(
                    E(l(t)("plugins.refresh")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"])
            ])
          ])
        ]),
        l(n) ? (S(), D("main", s4, [
          f("div", r4, [
            f("section", a4, [
              f("div", l4, [
                f(
                  "h4",
                  null,
                  E(l(t)("localAi.runtimeOverview")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(l(t)("localAi.runtimeOverviewDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", i4, [
                f("div", c4, [
                  f("div", {
                    class: z(["status-item", oe(l(V))]),
                    title: l(C)
                  }, [
                    K[25] || (K[25] = f(
                      "span",
                      { class: "status-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    f(
                      "span",
                      null,
                      E(l(C)),
                      1
                      /* TEXT */
                    )
                  ], 10, u4),
                  f("div", {
                    class: z(["status-item", oe(l(L))]),
                    title: l(_)
                  }, [
                    K[26] || (K[26] = f(
                      "span",
                      { class: "status-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    f(
                      "span",
                      null,
                      E(l(_)),
                      1
                      /* TEXT */
                    )
                  ], 10, d4),
                  f("div", {
                    class: z(["status-item", oe(l(I))]),
                    title: l(M)
                  }, [
                    K[27] || (K[27] = f(
                      "span",
                      { class: "status-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    f(
                      "span",
                      null,
                      E(l(M)),
                      1
                      /* TEXT */
                    )
                  ], 10, f4)
                ]),
                f(
                  "div",
                  {
                    class: z(["memory-summary", oe(l(Y).level)])
                  },
                  [
                    f("div", p4, [
                      f(
                        "span",
                        null,
                        E(l(t)("localAi.estimatedMemory")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "small",
                        null,
                        E(l(t)("localAi.estimateBeta")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", h4, [
                      f("span", null, [
                        K[28] || (K[28] = f(
                          "span",
                          null,
                          "GPU",
                          -1
                          /* HOISTED */
                        )),
                        f(
                          "b",
                          {
                            class: z(oe(l(Y).level))
                          },
                          E(l(Y).gpuGb) + " GB ",
                          3
                          /* TEXT, CLASS */
                        )
                      ]),
                      f("span", null, [
                        f(
                          "span",
                          null,
                          E(l(t)("localAi.total")),
                          1
                          /* TEXT */
                        ),
                        f(
                          "b",
                          {
                            class: z(oe(l(Y).level))
                          },
                          E(l(Y).totalGb) + " GB ",
                          3
                          /* TEXT, CLASS */
                        )
                      ]),
                      f("span", null, [
                        f(
                          "span",
                          null,
                          E(l(t)("localAi.bottleneck")),
                          1
                          /* TEXT */
                        ),
                        f(
                          "b",
                          {
                            class: z(oe(l(Y).level))
                          },
                          E(l(Y).bottleneck),
                          3
                          /* TEXT, CLASS */
                        )
                      ])
                    ])
                  ],
                  2
                  /* CLASS */
                )
              ]),
              f("div", m4, [
                f("div", g4, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(U(l(o)?.available))
                    },
                    E(l(o)?.available ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", v4, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(U(l(g)))
                    },
                    E(l(g) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", b4, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(U(!!l(m)))
                    },
                    E(l(m) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", y4, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(U(!!l(b)))
                    },
                    E(l(b) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", w4, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(U(l(w)))
                    },
                    E(l(w) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", _4, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(U(!!l(s)?.healthy))
                    },
                    E(l(s)?.healthy ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ]),
              f("div", k4, [
                f("div", T4, [
                  f(
                    "div",
                    S4,
                    E(l(t)("localAi.serviceControl")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "div",
                    A4,
                    E(l(t)("localAi.serviceControlDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                f("div", C4, [
                  f("div", E4, [
                    k(l(Jt), {
                      type: "primary",
                      size: "small",
                      loading: l(c),
                      disabled: l(s)?.running,
                      onClick: ke
                    }, {
                      default: ee(() => [
                        pt(
                          E(l(t)("localAi.startService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"]),
                    k(l(Jt), {
                      size: "small",
                      loading: l(u),
                      disabled: !l(s)?.running,
                      onClick: je
                    }, {
                      default: ee(() => [
                        pt(
                          E(l(t)("localAi.restartService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"]),
                    k(l(Jt), {
                      type: "danger",
                      size: "small",
                      plain: "",
                      loading: l(d),
                      disabled: !l(s)?.running,
                      onClick: Ge
                    }, {
                      default: ee(() => [
                        pt(
                          E(l(t)("localAi.stopService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"])
                  ]),
                  l(s)?.baseUrl ? (S(), D("div", x4, [
                    f(
                      "span",
                      null,
                      E(l(t)("localAi.serviceAddress")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "code",
                      null,
                      E(l(s).baseUrl),
                      1
                      /* TEXT */
                    )
                  ])) : Q("v-if", !0)
                ])
              ])
            ]),
            f("section", L4, [
              f("div", I4, [
                f(
                  "h4",
                  null,
                  E(l(t)("localAi.modelRuntime")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(l(t)("localAi.modelRuntimeDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", O4, [
                f("div", {
                  class: "setting-row",
                  title: F("modelDir")
                }, [
                  f("div", R4, [
                    f(
                      "div",
                      M4,
                      E(l(t)("localAi.modelDir")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      P4,
                      E(F("modelDir")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", N4, [
                    f("div", D4, [
                      lt(f(
                        "input",
                        {
                          "onUpdate:modelValue": K[0] || (K[0] = (Z) => l(n).modelDir = Z),
                          class: "setting-input",
                          onChange: de
                        },
                        null,
                        544
                        /* NEED_HYDRATION, NEED_PATCH */
                      ), [
                        [Ms, l(n).modelDir]
                      ]),
                      k(l(Jt), {
                        size: "small",
                        plain: "",
                        onClick: ue
                      }, {
                        default: ee(() => [
                          pt(
                            E(l(t)("common.browse")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ], 8, $4),
                f("div", z4, [
                  f("div", {
                    class: "setting-row",
                    title: F("mainModel")
                  }, [
                    f("div", F4, [
                      f(
                        "div",
                        j4,
                        E(l(t)("localAi.mainModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        V4,
                        E(F("mainModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", H4, [
                      k(Ce, {
                        modelValue: l(m),
                        "onUpdate:modelValue": K[1] || (K[1] = (Z) => en(m) ? m.value = Z : null),
                        class: "field-select",
                        clearable: "",
                        onChange: H
                      }, {
                        default: ee(() => [
                          (S(!0), D(
                            at,
                            null,
                            En(l(a)?.mainModels ?? [], (Z) => (S(), re(ge, {
                              key: Z,
                              label: O(Z),
                              value: Z
                            }, null, 8, ["label", "value"]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ])
                  ], 8, B4),
                  f("div", {
                    class: "setting-row",
                    title: F("mmprojModel")
                  }, [
                    f("div", U4, [
                      f(
                        "div",
                        G4,
                        E(l(t)("localAi.mmprojModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        q4,
                        E(F("mmprojModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", K4, [
                      k(Ce, {
                        modelValue: l(b),
                        "onUpdate:modelValue": K[2] || (K[2] = (Z) => en(b) ? b.value = Z : null),
                        class: "field-select",
                        clearable: "",
                        onChange: H
                      }, {
                        default: ee(() => [
                          (S(!0), D(
                            at,
                            null,
                            En(l(a)?.mmprojModels ?? [], (Z) => (S(), re(ge, {
                              key: Z,
                              label: O(Z),
                              value: Z
                            }, null, 8, ["label", "value"]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ])
                  ], 8, W4)
                ]),
                f("div", {
                  class: "setting-row",
                  title: F("runtimePath")
                }, [
                  f("div", Y4, [
                    f(
                      "div",
                      X4,
                      E(l(t)("localAi.runtimePath")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      Q4,
                      E(F("runtimePath")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", J4, [
                    f("div", eA, [
                      lt(f("input", {
                        "onUpdate:modelValue": K[3] || (K[3] = (Z) => l(n).runtimePath = Z),
                        class: "setting-input",
                        placeholder: l(t)("localAi.runtimePathPlaceholder")
                      }, null, 8, tA), [
                        [Ms, l(n).runtimePath]
                      ]),
                      k(l(Jt), {
                        size: "small",
                        plain: "",
                        onClick: pe
                      }, {
                        default: ee(() => [
                          pt(
                            E(l(t)("common.browse")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ], 8, Z4)
              ])
            ]),
            f("section", nA, [
              f("div", oA, [
                f(
                  "h4",
                  null,
                  E(l(t)("localAi.inferenceParams")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(l(t)("localAi.inferenceParamsDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", sA, [
                f("label", {
                  class: "number-field",
                  title: F("ctxSize")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).ctxSize,
                    "onUpdate:modelValue": K[4] || (K[4] = (Z) => l(n).ctxSize = Z),
                    controls: !1,
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, rA),
                f("label", {
                  class: "number-field",
                  title: F("gpuLayers")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).gpuLayers,
                    "onUpdate:modelValue": K[5] || (K[5] = (Z) => l(n).gpuLayers = Z),
                    controls: !1,
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, aA),
                f("label", {
                  class: "number-field",
                  title: F("threads")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).threads,
                    "onUpdate:modelValue": K[6] || (K[6] = (Z) => l(n).threads = Z),
                    controls: !1,
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, lA),
                f("label", {
                  class: "number-field",
                  title: F("batchSize")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).batchSize,
                    "onUpdate:modelValue": K[7] || (K[7] = (Z) => l(n).batchSize = Z),
                    controls: !1,
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, iA),
                f("label", {
                  class: "number-field",
                  title: F("ubatchSize")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).ubatchSize,
                    "onUpdate:modelValue": K[8] || (K[8] = (Z) => l(n).ubatchSize = Z),
                    controls: !1,
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, cA),
                f("label", {
                  class: "number-field",
                  title: F("mainGpu")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).mainGpu,
                    "onUpdate:modelValue": K[9] || (K[9] = (Z) => l(n).mainGpu = Z),
                    controls: !1,
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, uA)
              ])
            ]),
            f("section", dA, [
              f("div", fA, [
                f(
                  "h4",
                  null,
                  E(l(t)("localAi.acceleration")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(l(t)("localAi.accelerationDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", pA, [
                f("label", {
                  class: "switch-field",
                  title: F("flashAttn")
                }, [
                  f(
                    "span",
                    mA,
                    E(l(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  k(l(gs), {
                    modelValue: l(n).flashAttn,
                    "onUpdate:modelValue": K[10] || (K[10] = (Z) => l(n).flashAttn = Z),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, hA),
                f("label", {
                  class: "switch-field",
                  title: F("kvOffload")
                }, [
                  f(
                    "span",
                    vA,
                    E(l(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  k(l(gs), {
                    modelValue: l(n).kvOffload,
                    "onUpdate:modelValue": K[11] || (K[11] = (Z) => l(n).kvOffload = Z),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, gA),
                f("label", {
                  class: "switch-field",
                  title: F("mmap")
                }, [
                  f(
                    "span",
                    yA,
                    E(l(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  k(l(gs), {
                    modelValue: l(n).mmap,
                    "onUpdate:modelValue": K[12] || (K[12] = (Z) => l(n).mmap = Z),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, bA)
              ])
            ]),
            f("section", wA, [
              f("div", _A, [
                f(
                  "h4",
                  null,
                  E(l(t)("localAi.lifecycle")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(l(t)("localAi.lifecycleDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", kA, [
                f("label", {
                  class: "switch-field",
                  title: F("autoStart")
                }, [
                  f(
                    "span",
                    SA,
                    E(l(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  k(l(gs), {
                    modelValue: l(n).autoStartOnRequest,
                    "onUpdate:modelValue": K[13] || (K[13] = (Z) => l(n).autoStartOnRequest = Z),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, TA),
                f("label", {
                  class: "switch-field",
                  title: F("keepAlive")
                }, [
                  f(
                    "span",
                    CA,
                    E(l(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  k(l(gs), {
                    modelValue: l(n).keepAlive,
                    "onUpdate:modelValue": K[14] || (K[14] = (Z) => l(n).keepAlive = Z),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, AA),
                f("label", {
                  class: "number-field",
                  title: F("idleTimeout")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": K[15] || (K[15] = (Z) => l(n).idleTimeoutMinutes = Z),
                    controls: !1,
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, EA),
                f("label", {
                  class: "number-field",
                  title: F("requestTimeout")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).requestTimeoutSecs,
                    "onUpdate:modelValue": K[16] || (K[16] = (Z) => l(n).requestTimeoutSecs = Z),
                    controls: !1,
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, xA)
              ])
            ]),
            f("section", LA, [
              f("div", IA, [
                f(
                  "h4",
                  null,
                  E(l(t)("localAi.generation")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(l(t)("localAi.generationDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", OA, [
                f("label", {
                  class: "number-field",
                  title: F("temperature")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).temperature,
                    "onUpdate:modelValue": K[17] || (K[17] = (Z) => l(n).temperature = Z),
                    controls: !1,
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, $A),
                f("label", {
                  class: "number-field",
                  title: F("topP")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).topP,
                    "onUpdate:modelValue": K[18] || (K[18] = (Z) => l(n).topP = Z),
                    controls: !1,
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, RA),
                f("label", {
                  class: "number-field",
                  title: F("topK")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).topK,
                    "onUpdate:modelValue": K[19] || (K[19] = (Z) => l(n).topK = Z),
                    controls: !1,
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, MA),
                f("label", {
                  class: "number-field",
                  title: F("minP")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).minP,
                    "onUpdate:modelValue": K[20] || (K[20] = (Z) => l(n).minP = Z),
                    controls: !1,
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, PA),
                f("label", {
                  class: "number-field",
                  title: F("repeatPenalty")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).repeatPenalty,
                    "onUpdate:modelValue": K[21] || (K[21] = (Z) => l(n).repeatPenalty = Z),
                    controls: !1,
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, NA),
                f("label", {
                  class: "number-field",
                  title: F("repeatLastN")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).repeatLastN,
                    "onUpdate:modelValue": K[22] || (K[22] = (Z) => l(n).repeatLastN = Z),
                    controls: !1,
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, DA),
                f("label", {
                  class: "number-field",
                  title: F("maxTokens")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).maxTokens,
                    "onUpdate:modelValue": K[23] || (K[23] = (Z) => l(n).maxTokens = Z),
                    controls: !1,
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, zA),
                f("label", {
                  class: "number-field",
                  title: F("port")
                }, [
                  f(
                    "span",
                    null,
                    E(l(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  k(ne, {
                    modelValue: l(n).port,
                    "onUpdate:modelValue": K[24] || (K[24] = (Z) => l(n).port = Z),
                    controls: !1,
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, BA)
              ])
            ])
          ])
        ])) : Q("v-if", !0),
        l(n) ? (S(), D("footer", FA, [
          f("div", jA, [
            l(s)?.commandLine ? (S(), D("span", {
              key: 0,
              class: "command-line",
              title: l(s).commandLine
            }, E(l(s).commandLine), 9, VA)) : Q("v-if", !0),
            k(l(Jt), {
              type: "primary",
              loading: l(i),
              onClick: B
            }, {
              default: ee(() => [
                pt(
                  E(l(t)("common.save")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ])) : Q("v-if", !0)
      ]);
    };
  }
}), WA = /* @__PURE__ */ Mo(HA, [["__scopeId", "data-v-66dbd72c"]]), UA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WA
}, Symbol.toStringTag, { value: "Module" }));
export {
  ZA as activate,
  ZA as default
};
