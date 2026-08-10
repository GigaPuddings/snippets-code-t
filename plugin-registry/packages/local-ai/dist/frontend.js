var Qd = Object.defineProperty;
var Jd = (e, t, n) => t in e ? Qd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var De = (e, t, n) => Jd(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Re, createVNode as _, defineAsyncComponent as ef, getCurrentInstance as Et, ref as P, computed as C, unref as l, shallowRef as uo, watchEffect as Ea, readonly as xa, getCurrentScope as tf, onScopeDispose as $c, onMounted as et, nextTick as Ge, watch as de, isRef as tn, warn as nf, provide as bn, defineComponent as oe, createElementBlock as N, openBlock as T, mergeProps as Eo, renderSlot as le, createElementVNode as f, toRef as Kn, onUnmounted as La, useAttrs as of, useSlots as Rc, normalizeStyle as dt, normalizeClass as D, createCommentVNode as U, Fragment as at, createBlock as ee, withCtx as X, resolveDynamicComponent as yt, withModifiers as Ue, toDisplayString as L, onBeforeUnmount as wn, Transition as $o, withDirectives as it, vShow as Pn, reactive as xo, onActivated as rf, onUpdated as Mc, cloneVNode as sf, Text as af, Comment as lf, Teleport as cf, onBeforeMount as uf, onDeactivated as df, createTextVNode as mt, h as ff, createSlots as Ia, withKeys as pn, toRaw as pf, toRefs as Oa, resolveComponent as To, resolveDirective as mf, toHandlerKey as hf, renderList as Ln, vModelText as Lr, shallowReactive as gf, isVNode as Ir, render as ls } from "vue";
import { useI18n as Pr } from "vue-i18n";
var vf = {
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
function bf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function yf(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("none"), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("none");
      break;
    case "filled":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("#FFF"), r.push("#FFF");
      break;
    case "two-tone":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), r.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), r.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: r,
    id: e
  };
}
var wf = Symbol("icon-context");
function Xe(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = bf(), i = Re(wf, vf);
      return function() {
        var c = a.size, u = a.strokeWidth, d = a.strokeLinecap, m = a.strokeLinejoin, g = a.theme, y = a.fill, h = a.spin, b = yf(s, {
          size: c,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: g,
          fill: y
        }, i), E = [i.prefix + "-icon"];
        return E.push(i.prefix + "-icon-" + e), t && i.rtl && E.push(i.prefix + "-icon-rtl"), h && E.push(i.prefix + "-icon-spin"), _("span", {
          class: E.join(" ")
        }, [n(b)]);
      };
    }
  };
  return o;
}
const Bl = Xe("brain", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), kf = Xe("check-small", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M10 24L20 34L40 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _f = Xe("code", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M16 13L4 25.4322L16 37",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M32 13L44 25.4322L32 37",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M28 4L21 44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), Fl = Xe("copy", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jl = Xe("cube", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M41 14L24 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M7 14L24 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 44V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M32 19L32 39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M41 24L24 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 34L7 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M16 39L16 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M32 9L16 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M32 19L16 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ur = Xe("delete", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tf = Xe("down", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Hs = Xe("edit", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sf = Xe("file-text", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M30 4L40 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 22V36",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M18 22H24L30 22",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Af = Xe("fork", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M37 12C39.2091 12 41 10.2091 41 8C41 5.79086 39.2091 4 37 4C34.7909 4 33 5.79086 33 8C33 10.2091 34.7909 12 37 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M11 12V15C11 22 24 25 24 32V36V32C24 25 37 22 37 15V12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Vl = Xe("left-bar", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M16 6V42",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M13 42H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M13 6H19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cf = Xe("link", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Hl = Xe("magic-wand", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M7.57932 35.4207C5.32303 32.1826 4 28.2458 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C19.7542 44 15.8174 42.677 12.5793 40.4207M7.57932 35.4207C8.93657 37.3685 10.6315 39.0634 12.5793 40.4207M7.57932 35.4207L16 27M12.5793 40.4207L21 32M16 27L20 23L25 28L21 32M16 27L21 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M17 14H21M19 12V16",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M28 17H34M31 14V20",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M32 29H36M34 27V31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ef = Xe("picture", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dr = Xe("refresh", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wl = Xe("right", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ws = Xe("robot", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), _("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), _("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), _("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xf = Xe("robot-one", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("rect", {
    x: "9",
    y: "18",
    width: "30",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), _("circle", {
    cx: "17",
    cy: "26",
    r: "2",
    fill: e.colors[2]
  }, null), _("circle", {
    cx: "31",
    cy: "26",
    r: "2",
    fill: e.colors[2]
  }, null), _("path", {
    d: "M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z",
    fill: e.colors[2]
  }, null), _("path", {
    d: "M24 10V18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M4 26V34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M44 26V34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("circle", {
    cx: "24",
    cy: "8",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Lf = Xe("search", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), If = Xe("send", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pc = Xe("setting-two", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Of = Xe("square", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), $f = Xe("translate", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), US = (e) => {
  e.registerRoute({
    target: "config",
    path: "local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => CT)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Pc,
    component: ef(() => Promise.resolve().then(() => jS))
  });
}, Nc = Symbol(), Tr = "el", Rf = "is-", So = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, Dc = Symbol("namespaceContextKey"), $a = (e) => {
  const t = e || (Et() ? Re(Dc, P(Tr)) : P(Tr));
  return C(() => l(t) || Tr);
}, Ye = (e, t) => {
  const n = $a(t);
  return {
    namespace: n,
    b: (b = "") => So(n.value, e, b, "", ""),
    e: (b) => b ? So(n.value, e, "", b, "") : "",
    m: (b) => b ? So(n.value, e, "", "", b) : "",
    be: (b, E) => b && E ? So(n.value, e, b, E, "") : "",
    em: (b, E) => b && E ? So(n.value, e, "", b, E) : "",
    bm: (b, E) => b && E ? So(n.value, e, b, "", E) : "",
    bem: (b, E, w) => b && E && w ? So(n.value, e, b, E, w) : "",
    is: (b, ...E) => {
      const w = E.length >= 1 ? E[0] : !0;
      return b && w ? `${Rf}${b}` : "";
    },
    cssVar: (b) => {
      const E = {};
      for (const w in b)
        b[w] && (E[`--${n.value}-${w}`] = b[w]);
      return E;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const E = {};
      for (const w in b)
        b[w] && (E[`--${n.value}-${e}-${w}`] = b[w]);
      return E;
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
}, Mf = Object.prototype.hasOwnProperty, Ul = (e, t) => Mf.call(e, t), On = Array.isArray, Ke = (e) => typeof e == "function", Ct = (e) => typeof e == "string", Xt = (e) => e !== null && typeof e == "object", Gl = (e) => (Xt(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), Pf = Object.prototype.toString, Nf = (e) => Pf.call(e), Df = (e) => Nf(e) === "[object Object]", zf = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Bf = /-(\w)/g, Ff = zf(
  (e) => e.replace(Bf, (t, n) => n ? n.toUpperCase() : "")
);
var zc = typeof global == "object" && global && global.Object === Object && global, jf = typeof self == "object" && self && self.Object === Object && self, zn = zc || jf || Function("return this")(), Nn = zn.Symbol, Bc = Object.prototype, Vf = Bc.hasOwnProperty, Hf = Bc.toString, fr = Nn ? Nn.toStringTag : void 0;
function Wf(e) {
  var t = Vf.call(e, fr), n = e[fr];
  try {
    e[fr] = void 0;
    var o = !0;
  } catch {
  }
  var r = Hf.call(e);
  return o && (t ? e[fr] = n : delete e[fr]), r;
}
var Uf = Object.prototype, Gf = Uf.toString;
function Kf(e) {
  return Gf.call(e);
}
var qf = "[object Null]", Zf = "[object Undefined]", Kl = Nn ? Nn.toStringTag : void 0;
function rr(e) {
  return e == null ? e === void 0 ? Zf : qf : Kl && Kl in Object(e) ? Wf(e) : Kf(e);
}
function qo(e) {
  return e != null && typeof e == "object";
}
var Yf = "[object Symbol]";
function ks(e) {
  return typeof e == "symbol" || qo(e) && rr(e) == Yf;
}
function Xf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var yn = Array.isArray, ql = Nn ? Nn.prototype : void 0, Zl = ql ? ql.toString : void 0;
function Fc(e) {
  if (typeof e == "string")
    return e;
  if (yn(e))
    return Xf(e, Fc) + "";
  if (ks(e))
    return Zl ? Zl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Qf = /\s/;
function Jf(e) {
  for (var t = e.length; t-- && Qf.test(e.charAt(t)); )
    ;
  return t;
}
var ep = /^\s+/;
function tp(e) {
  return e && e.slice(0, Jf(e) + 1).replace(ep, "");
}
function po(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yl = NaN, np = /^[-+]0x[0-9a-f]+$/i, op = /^0b[01]+$/i, rp = /^0o[0-7]+$/i, sp = parseInt;
function Xl(e) {
  if (typeof e == "number")
    return e;
  if (ks(e))
    return Yl;
  if (po(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = po(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = tp(e);
  var n = op.test(e);
  return n || rp.test(e) ? sp(e.slice(2), n ? 2 : 8) : np.test(e) ? Yl : +e;
}
function jc(e) {
  return e;
}
var ap = "[object AsyncFunction]", lp = "[object Function]", ip = "[object GeneratorFunction]", cp = "[object Proxy]";
function Vc(e) {
  if (!po(e))
    return !1;
  var t = rr(e);
  return t == lp || t == ip || t == ap || t == cp;
}
var Us = zn["__core-js_shared__"], Ql = function() {
  var e = /[^.]+$/.exec(Us && Us.keys && Us.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function up(e) {
  return !!Ql && Ql in e;
}
var dp = Function.prototype, fp = dp.toString;
function Ro(e) {
  if (e != null) {
    try {
      return fp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pp = /[\\^$.*+?()[\]{}|]/g, mp = /^\[object .+?Constructor\]$/, hp = Function.prototype, gp = Object.prototype, vp = hp.toString, bp = gp.hasOwnProperty, yp = RegExp(
  "^" + vp.call(bp).replace(pp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wp(e) {
  if (!po(e) || up(e))
    return !1;
  var t = Vc(e) ? yp : mp;
  return t.test(Ro(e));
}
function kp(e, t) {
  return e?.[t];
}
function Mo(e, t) {
  var n = kp(e, t);
  return wp(n) ? n : void 0;
}
var ia = Mo(zn, "WeakMap");
function _p(e, t, n) {
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
var Tp = 800, Sp = 16, Ap = Date.now;
function Cp(e) {
  var t = 0, n = 0;
  return function() {
    var o = Ap(), r = Sp - (o - n);
    if (n = o, r > 0) {
      if (++t >= Tp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ep(e) {
  return function() {
    return e;
  };
}
var is = function() {
  try {
    var e = Mo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), xp = is ? function(e, t) {
  return is(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ep(t),
    writable: !0
  });
} : jc, Lp = Cp(xp);
function Ip(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Op = 9007199254740991, $p = /^(?:0|[1-9]\d*)$/;
function Ra(e, t) {
  var n = typeof e;
  return t = t ?? Op, !!t && (n == "number" || n != "symbol" && $p.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Rp(e, t, n) {
  t == "__proto__" && is ? is(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ma(e, t) {
  return e === t || e !== e && t !== t;
}
var Mp = Object.prototype, Pp = Mp.hasOwnProperty;
function Np(e, t, n) {
  var o = e[t];
  (!(Pp.call(e, t) && Ma(o, n)) || n === void 0 && !(t in e)) && Rp(e, t, n);
}
var Jl = Math.max;
function Dp(e, t, n) {
  return t = Jl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = Jl(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(s), _p(e, this, i);
  };
}
var zp = 9007199254740991;
function Pa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zp;
}
function Bp(e) {
  return e != null && Pa(e.length) && !Vc(e);
}
var Fp = Object.prototype;
function jp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Fp;
  return e === n;
}
function Vp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Hp = "[object Arguments]";
function ei(e) {
  return qo(e) && rr(e) == Hp;
}
var Hc = Object.prototype, Wp = Hc.hasOwnProperty, Up = Hc.propertyIsEnumerable, Na = ei(/* @__PURE__ */ function() {
  return arguments;
}()) ? ei : function(e) {
  return qo(e) && Wp.call(e, "callee") && !Up.call(e, "callee");
};
function Gp() {
  return !1;
}
var Wc = typeof exports == "object" && exports && !exports.nodeType && exports, ti = Wc && typeof module == "object" && module && !module.nodeType && module, Kp = ti && ti.exports === Wc, ni = Kp ? zn.Buffer : void 0, qp = ni ? ni.isBuffer : void 0, ca = qp || Gp, Zp = "[object Arguments]", Yp = "[object Array]", Xp = "[object Boolean]", Qp = "[object Date]", Jp = "[object Error]", em = "[object Function]", tm = "[object Map]", nm = "[object Number]", om = "[object Object]", rm = "[object RegExp]", sm = "[object Set]", am = "[object String]", lm = "[object WeakMap]", im = "[object ArrayBuffer]", cm = "[object DataView]", um = "[object Float32Array]", dm = "[object Float64Array]", fm = "[object Int8Array]", pm = "[object Int16Array]", mm = "[object Int32Array]", hm = "[object Uint8Array]", gm = "[object Uint8ClampedArray]", vm = "[object Uint16Array]", bm = "[object Uint32Array]", Ve = {};
Ve[um] = Ve[dm] = Ve[fm] = Ve[pm] = Ve[mm] = Ve[hm] = Ve[gm] = Ve[vm] = Ve[bm] = !0;
Ve[Zp] = Ve[Yp] = Ve[im] = Ve[Xp] = Ve[cm] = Ve[Qp] = Ve[Jp] = Ve[em] = Ve[tm] = Ve[nm] = Ve[om] = Ve[rm] = Ve[sm] = Ve[am] = Ve[lm] = !1;
function ym(e) {
  return qo(e) && Pa(e.length) && !!Ve[rr(e)];
}
function wm(e) {
  return function(t) {
    return e(t);
  };
}
var Uc = typeof exports == "object" && exports && !exports.nodeType && exports, Sr = Uc && typeof module == "object" && module && !module.nodeType && module, km = Sr && Sr.exports === Uc, Gs = km && zc.process, oi = function() {
  try {
    var e = Sr && Sr.require && Sr.require("util").types;
    return e || Gs && Gs.binding && Gs.binding("util");
  } catch {
  }
}(), ri = oi && oi.isTypedArray, Gc = ri ? wm(ri) : ym, _m = Object.prototype, Tm = _m.hasOwnProperty;
function Sm(e, t) {
  var n = yn(e), o = !n && Na(e), r = !n && !o && ca(e), a = !n && !o && !r && Gc(e), s = n || o || r || a, i = s ? Vp(e.length, String) : [], c = i.length;
  for (var u in e)
    Tm.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ra(u, c))) && i.push(u);
  return i;
}
function Am(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Cm = Am(Object.keys, Object), Em = Object.prototype, xm = Em.hasOwnProperty;
function Lm(e) {
  if (!jp(e))
    return Cm(e);
  var t = [];
  for (var n in Object(e))
    xm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Kc(e) {
  return Bp(e) ? Sm(e) : Lm(e);
}
var Im = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Om = /^\w*$/;
function Da(e, t) {
  if (yn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ks(e) ? !0 : Om.test(e) || !Im.test(e) || t != null && e in Object(t);
}
var Or = Mo(Object, "create");
function $m() {
  this.__data__ = Or ? Or(null) : {}, this.size = 0;
}
function Rm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mm = "__lodash_hash_undefined__", Pm = Object.prototype, Nm = Pm.hasOwnProperty;
function Dm(e) {
  var t = this.__data__;
  if (Or) {
    var n = t[e];
    return n === Mm ? void 0 : n;
  }
  return Nm.call(t, e) ? t[e] : void 0;
}
var zm = Object.prototype, Bm = zm.hasOwnProperty;
function Fm(e) {
  var t = this.__data__;
  return Or ? t[e] !== void 0 : Bm.call(t, e);
}
var jm = "__lodash_hash_undefined__";
function Vm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Or && t === void 0 ? jm : t, this;
}
function Lo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Lo.prototype.clear = $m;
Lo.prototype.delete = Rm;
Lo.prototype.get = Dm;
Lo.prototype.has = Fm;
Lo.prototype.set = Vm;
function Hm() {
  this.__data__ = [], this.size = 0;
}
function _s(e, t) {
  for (var n = e.length; n--; )
    if (Ma(e[n][0], t))
      return n;
  return -1;
}
var Wm = Array.prototype, Um = Wm.splice;
function Gm(e) {
  var t = this.__data__, n = _s(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Um.call(t, n, 1), --this.size, !0;
}
function Km(e) {
  var t = this.__data__, n = _s(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function qm(e) {
  return _s(this.__data__, e) > -1;
}
function Zm(e, t) {
  var n = this.__data__, o = _s(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function no(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
no.prototype.clear = Hm;
no.prototype.delete = Gm;
no.prototype.get = Km;
no.prototype.has = qm;
no.prototype.set = Zm;
var $r = Mo(zn, "Map");
function Ym() {
  this.size = 0, this.__data__ = {
    hash: new Lo(),
    map: new ($r || no)(),
    string: new Lo()
  };
}
function Xm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ts(e, t) {
  var n = e.__data__;
  return Xm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Qm(e) {
  var t = Ts(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Jm(e) {
  return Ts(this, e).get(e);
}
function eh(e) {
  return Ts(this, e).has(e);
}
function th(e, t) {
  var n = Ts(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function oo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oo.prototype.clear = Ym;
oo.prototype.delete = Qm;
oo.prototype.get = Jm;
oo.prototype.has = eh;
oo.prototype.set = th;
var nh = "Expected a function";
function za(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(nh);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (za.Cache || oo)(), n;
}
za.Cache = oo;
var oh = 500;
function rh(e) {
  var t = za(e, function(o) {
    return n.size === oh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var sh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ah = /\\(\\)?/g, lh = rh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sh, function(n, o, r, a) {
    t.push(r ? a.replace(ah, "$1") : o || n);
  }), t;
});
function ih(e) {
  return e == null ? "" : Fc(e);
}
function Ss(e, t) {
  return yn(e) ? e : Da(e, t) ? [e] : lh(ih(e));
}
function Nr(e) {
  if (typeof e == "string" || ks(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ba(e, t) {
  t = Ss(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Nr(t[n++])];
  return n && n == o ? e : void 0;
}
function co(e, t, n) {
  var o = e == null ? void 0 : Ba(e, t);
  return o === void 0 ? n : o;
}
function qc(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var si = Nn ? Nn.isConcatSpreadable : void 0;
function ch(e) {
  return yn(e) || Na(e) || !!(si && e && e[si]);
}
function uh(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = ch), r || (r = []); ++a < s; ) {
    var i = e[a];
    n(i) ? qc(r, i) : r[r.length] = i;
  }
  return r;
}
function dh(e) {
  var t = e == null ? 0 : e.length;
  return t ? uh(e) : [];
}
function fh(e) {
  return Lp(Dp(e, void 0, dh), e + "");
}
function io() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return yn(e) ? e : [e];
}
function ph() {
  this.__data__ = new no(), this.size = 0;
}
function mh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hh(e) {
  return this.__data__.get(e);
}
function gh(e) {
  return this.__data__.has(e);
}
var vh = 200;
function bh(e, t) {
  var n = this.__data__;
  if (n instanceof no) {
    var o = n.__data__;
    if (!$r || o.length < vh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new oo(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zn(e) {
  var t = this.__data__ = new no(e);
  this.size = t.size;
}
Zn.prototype.clear = ph;
Zn.prototype.delete = mh;
Zn.prototype.get = hh;
Zn.prototype.has = gh;
Zn.prototype.set = bh;
function yh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (a[r++] = s);
  }
  return a;
}
function wh() {
  return [];
}
var kh = Object.prototype, _h = kh.propertyIsEnumerable, ai = Object.getOwnPropertySymbols, Th = ai ? function(e) {
  return e == null ? [] : (e = Object(e), yh(ai(e), function(t) {
    return _h.call(e, t);
  }));
} : wh;
function Sh(e, t, n) {
  var o = t(e);
  return yn(e) ? o : qc(o, n(e));
}
function li(e) {
  return Sh(e, Kc, Th);
}
var ua = Mo(zn, "DataView"), da = Mo(zn, "Promise"), fa = Mo(zn, "Set"), ii = "[object Map]", Ah = "[object Object]", ci = "[object Promise]", ui = "[object Set]", di = "[object WeakMap]", fi = "[object DataView]", Ch = Ro(ua), Eh = Ro($r), xh = Ro(da), Lh = Ro(fa), Ih = Ro(ia), lo = rr;
(ua && lo(new ua(new ArrayBuffer(1))) != fi || $r && lo(new $r()) != ii || da && lo(da.resolve()) != ci || fa && lo(new fa()) != ui || ia && lo(new ia()) != di) && (lo = function(e) {
  var t = rr(e), n = t == Ah ? e.constructor : void 0, o = n ? Ro(n) : "";
  if (o)
    switch (o) {
      case Ch:
        return fi;
      case Eh:
        return ii;
      case xh:
        return ci;
      case Lh:
        return ui;
      case Ih:
        return di;
    }
  return t;
});
var pi = zn.Uint8Array, Oh = "__lodash_hash_undefined__";
function $h(e) {
  return this.__data__.set(e, Oh), this;
}
function Rh(e) {
  return this.__data__.has(e);
}
function cs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new oo(); ++t < n; )
    this.add(e[t]);
}
cs.prototype.add = cs.prototype.push = $h;
cs.prototype.has = Rh;
function Mh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Ph(e, t) {
  return e.has(t);
}
var Nh = 1, Dh = 2;
function Zc(e, t, n, o, r, a) {
  var s = n & Nh, i = e.length, c = t.length;
  if (i != c && !(s && c > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, g = !0, y = n & Dh ? new cs() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < i; ) {
    var h = e[m], b = t[m];
    if (o)
      var E = s ? o(b, h, m, t, e, a) : o(h, b, m, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      g = !1;
      break;
    }
    if (y) {
      if (!Mh(t, function(w, R) {
        if (!Ph(y, R) && (h === w || r(h, w, n, o, a)))
          return y.push(R);
      })) {
        g = !1;
        break;
      }
    } else if (!(h === b || r(h, b, n, o, a))) {
      g = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), g;
}
function zh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Bh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Fh = 1, jh = 2, Vh = "[object Boolean]", Hh = "[object Date]", Wh = "[object Error]", Uh = "[object Map]", Gh = "[object Number]", Kh = "[object RegExp]", qh = "[object Set]", Zh = "[object String]", Yh = "[object Symbol]", Xh = "[object ArrayBuffer]", Qh = "[object DataView]", mi = Nn ? Nn.prototype : void 0, Ks = mi ? mi.valueOf : void 0;
function Jh(e, t, n, o, r, a, s) {
  switch (n) {
    case Qh:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Xh:
      return !(e.byteLength != t.byteLength || !a(new pi(e), new pi(t)));
    case Vh:
    case Hh:
    case Gh:
      return Ma(+e, +t);
    case Wh:
      return e.name == t.name && e.message == t.message;
    case Kh:
    case Zh:
      return e == t + "";
    case Uh:
      var i = zh;
    case qh:
      var c = o & Fh;
      if (i || (i = Bh), e.size != t.size && !c)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= jh, s.set(e, t);
      var d = Zc(i(e), i(t), o, r, a, s);
      return s.delete(e), d;
    case Yh:
      if (Ks)
        return Ks.call(e) == Ks.call(t);
  }
  return !1;
}
var eg = 1, tg = Object.prototype, ng = tg.hasOwnProperty;
function og(e, t, n, o, r, a) {
  var s = n & eg, i = li(e), c = i.length, u = li(t), d = u.length;
  if (c != d && !s)
    return !1;
  for (var m = c; m--; ) {
    var g = i[m];
    if (!(s ? g in t : ng.call(t, g)))
      return !1;
  }
  var y = a.get(e), h = a.get(t);
  if (y && h)
    return y == t && h == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++m < c; ) {
    g = i[m];
    var w = e[g], R = t[g];
    if (o)
      var F = s ? o(R, w, g, t, e, a) : o(w, R, g, e, t, a);
    if (!(F === void 0 ? w === R || r(w, R, n, o, a) : F)) {
      b = !1;
      break;
    }
    E || (E = g == "constructor");
  }
  if (b && !E) {
    var O = e.constructor, A = t.constructor;
    O != A && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof A == "function" && A instanceof A) && (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var rg = 1, hi = "[object Arguments]", gi = "[object Array]", Gr = "[object Object]", sg = Object.prototype, vi = sg.hasOwnProperty;
function ag(e, t, n, o, r, a) {
  var s = yn(e), i = yn(t), c = s ? gi : lo(e), u = i ? gi : lo(t);
  c = c == hi ? Gr : c, u = u == hi ? Gr : u;
  var d = c == Gr, m = u == Gr, g = c == u;
  if (g && ca(e)) {
    if (!ca(t))
      return !1;
    s = !0, d = !1;
  }
  if (g && !d)
    return a || (a = new Zn()), s || Gc(e) ? Zc(e, t, n, o, r, a) : Jh(e, t, c, n, o, r, a);
  if (!(n & rg)) {
    var y = d && vi.call(e, "__wrapped__"), h = m && vi.call(t, "__wrapped__");
    if (y || h) {
      var b = y ? e.value() : e, E = h ? t.value() : t;
      return a || (a = new Zn()), r(b, E, n, o, a);
    }
  }
  return g ? (a || (a = new Zn()), og(e, t, n, o, r, a)) : !1;
}
function As(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !qo(e) && !qo(t) ? e !== e && t !== t : ag(e, t, n, o, As, r);
}
var lg = 1, ig = 2;
function cg(e, t, n, o) {
  var r = n.length, a = r;
  if (e == null)
    return !a;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < a; ) {
    s = n[r];
    var i = s[0], c = e[i], u = s[1];
    if (s[2]) {
      if (c === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Zn(), m;
      if (!(m === void 0 ? As(u, c, lg | ig, o, d) : m))
        return !1;
    }
  }
  return !0;
}
function Yc(e) {
  return e === e && !po(e);
}
function ug(e) {
  for (var t = Kc(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Yc(r)];
  }
  return t;
}
function Xc(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function dg(e) {
  var t = ug(e);
  return t.length == 1 && t[0][2] ? Xc(t[0][0], t[0][1]) : function(n) {
    return n === e || cg(n, e, t);
  };
}
function fg(e, t) {
  return e != null && t in Object(e);
}
function pg(e, t, n) {
  t = Ss(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var s = Nr(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && Pa(r) && Ra(s, r) && (yn(e) || Na(e)));
}
function Qc(e, t) {
  return e != null && pg(e, t, fg);
}
var mg = 1, hg = 2;
function gg(e, t) {
  return Da(e) && Yc(t) ? Xc(Nr(e), t) : function(n) {
    var o = co(n, e);
    return o === void 0 && o === t ? Qc(n, e) : As(t, o, mg | hg);
  };
}
function vg(e) {
  return function(t) {
    return t?.[e];
  };
}
function bg(e) {
  return function(t) {
    return Ba(t, e);
  };
}
function yg(e) {
  return Da(e) ? vg(Nr(e)) : bg(e);
}
function wg(e) {
  return typeof e == "function" ? e : e == null ? jc : typeof e == "object" ? yn(e) ? gg(e[0], e[1]) : dg(e) : yg(e);
}
var qs = function() {
  return zn.Date.now();
}, kg = "Expected a function", _g = Math.max, Tg = Math.min;
function Sg(e, t, n) {
  var o, r, a, s, i, c, u = 0, d = !1, m = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(kg);
  t = Xl(t) || 0, po(n) && (d = !!n.leading, m = "maxWait" in n, a = m ? _g(Xl(n.maxWait) || 0, t) : a, g = "trailing" in n ? !!n.trailing : g);
  function y(x) {
    var $ = o, K = r;
    return o = r = void 0, u = x, s = e.apply(K, $), s;
  }
  function h(x) {
    return u = x, i = setTimeout(w, t), d ? y(x) : s;
  }
  function b(x) {
    var $ = x - c, K = x - u, Z = t - $;
    return m ? Tg(Z, a - K) : Z;
  }
  function E(x) {
    var $ = x - c, K = x - u;
    return c === void 0 || $ >= t || $ < 0 || m && K >= a;
  }
  function w() {
    var x = qs();
    if (E(x))
      return R(x);
    i = setTimeout(w, b(x));
  }
  function R(x) {
    return i = void 0, g && o ? y(x) : (o = r = void 0, s);
  }
  function F() {
    i !== void 0 && clearTimeout(i), u = 0, o = c = r = i = void 0;
  }
  function O() {
    return i === void 0 ? s : R(qs());
  }
  function A() {
    var x = qs(), $ = E(x);
    if (o = arguments, r = this, c = x, $) {
      if (i === void 0)
        return h(c);
      if (m)
        return clearTimeout(i), i = setTimeout(w, t), y(c);
    }
    return i === void 0 && (i = setTimeout(w, t)), s;
  }
  return A.cancel = F, A.flush = O, A;
}
function Ag(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Ip(e, wg(t), r);
}
function us(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Ar(e, t) {
  return As(e, t);
}
function Yn(e) {
  return e == null;
}
function Jc(e) {
  return e === void 0;
}
function Cg(e, t, n, o) {
  if (!po(e))
    return e;
  t = Ss(t, e);
  for (var r = -1, a = t.length, s = a - 1, i = e; i != null && ++r < a; ) {
    var c = Nr(t[r]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (r != s) {
      var d = i[c];
      u = void 0, u === void 0 && (u = po(d) ? d : Ra(t[r + 1]) ? [] : {});
    }
    Np(i, c, u), i = i[c];
  }
  return e;
}
function Eg(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], i = Ba(e, s);
    n(i, s) && Cg(a, Ss(s, e), i);
  }
  return a;
}
function xg(e, t) {
  return Eg(e, t, function(n, o) {
    return Qc(e, o);
  });
}
var Lg = fh(function(e, t) {
  return e == null ? {} : xg(e, t);
});
const $n = (e) => e === void 0, Xn = (e) => typeof e == "boolean", $e = (e) => typeof e == "number", gn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ig = (e) => Ct(e) ? !Number.isNaN(Number(e)) : !1;
var Og = Object.defineProperty, $g = Object.defineProperties, Rg = Object.getOwnPropertyDescriptors, bi = Object.getOwnPropertySymbols, Mg = Object.prototype.hasOwnProperty, Pg = Object.prototype.propertyIsEnumerable, yi = (e, t, n) => t in e ? Og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ng = (e, t) => {
  for (var n in t || (t = {}))
    Mg.call(t, n) && yi(e, n, t[n]);
  if (bi)
    for (var n of bi(t))
      Pg.call(t, n) && yi(e, n, t[n]);
  return e;
}, Dg = (e, t) => $g(e, Rg(t));
function zg(e, t) {
  var n;
  const o = uo();
  return Ea(() => {
    o.value = e();
  }, Dg(Ng({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), xa(o);
}
var wi;
const qe = typeof window < "u", Bg = (e) => typeof e == "string", eu = () => {
}, pa = qe && ((wi = window?.navigator) == null ? void 0 : wi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Fa(e) {
  return typeof e == "function" ? e() : l(e);
}
function Fg(e) {
  return e;
}
function Dr(e) {
  return tf() ? ($c(e), !0) : !1;
}
function jg(e, t = !0) {
  Et() ? et(e) : t ? e() : Ge(e);
}
function ds(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = P(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = !1, s();
  }
  function c(...u) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...u);
    }, Fa(t));
  }
  return o && (r.value = !0, qe && c()), Dr(i), {
    isPending: xa(r),
    start: c,
    stop: i
  };
}
function qn(e) {
  var t;
  const n = Fa(e);
  return (t = n?.$el) != null ? t : n;
}
const Cs = qe ? window : void 0;
function vn(...e) {
  let t, n, o, r;
  if (Bg(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Cs) : [t, n, o, r] = e, !t)
    return eu;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, m, g, y) => (d.addEventListener(m, g, y), () => d.removeEventListener(m, g, y)), c = de(() => [qn(t), Fa(r)], ([d, m]) => {
    s(), d && a.push(...n.flatMap((g) => o.map((y) => i(d, g, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), s();
  };
  return Dr(u), u;
}
let ki = !1;
function Vg(e, t, n = {}) {
  const { window: o = Cs, ignore: r = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  pa && !ki && (ki = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", eu)));
  let i = !0;
  const c = (g) => r.some((y) => {
    if (typeof y == "string")
      return Array.from(o.document.querySelectorAll(y)).some((h) => h === g.target || g.composedPath().includes(h));
    {
      const h = qn(y);
      return h && (g.target === h || g.composedPath().includes(h));
    }
  }), d = [
    vn(o, "click", (g) => {
      const y = qn(e);
      if (!(!y || y === g.target || g.composedPath().includes(y))) {
        if (g.detail === 0 && (i = !c(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: a }),
    vn(o, "pointerdown", (g) => {
      const y = qn(e);
      y && (i = !g.composedPath().includes(y) && !c(g));
    }, { passive: !0 }),
    s && vn(o, "blur", (g) => {
      var y;
      const h = qn(e);
      ((y = o.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !h?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function tu(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), jg(o, t), n;
}
const _i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ti = "__vueuse_ssr_handlers__";
_i[Ti] = _i[Ti] || {};
var Si = Object.getOwnPropertySymbols, Hg = Object.prototype.hasOwnProperty, Wg = Object.prototype.propertyIsEnumerable, Ug = (e, t) => {
  var n = {};
  for (var o in e)
    Hg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Si)
    for (var o of Si(e))
      t.indexOf(o) < 0 && Wg.call(e, o) && (n[o] = e[o]);
  return n;
};
function In(e, t, n = {}) {
  const o = n, { window: r = Cs } = o, a = Ug(o, ["window"]);
  let s;
  const i = tu(() => r && "ResizeObserver" in r), c = () => {
    s && (s.disconnect(), s = void 0);
  }, u = de(() => qn(e), (m) => {
    c(), i.value && r && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return Dr(d), {
    isSupported: i,
    stop: d
  };
}
var Ai = Object.getOwnPropertySymbols, Gg = Object.prototype.hasOwnProperty, Kg = Object.prototype.propertyIsEnumerable, qg = (e, t) => {
  var n = {};
  for (var o in e)
    Gg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ai)
    for (var o of Ai(e))
      t.indexOf(o) < 0 && Kg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Zg(e, t, n = {}) {
  const o = n, { window: r = Cs } = o, a = qg(o, ["window"]);
  let s;
  const i = tu(() => r && "MutationObserver" in r), c = () => {
    s && (s.disconnect(), s = void 0);
  }, u = de(() => qn(e), (m) => {
    c(), i.value && r && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), d = () => {
    c(), u();
  };
  return Dr(d), {
    isSupported: i,
    stop: d
  };
}
var Ci;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ci || (Ci = {}));
var Yg = Object.defineProperty, Ei = Object.getOwnPropertySymbols, Xg = Object.prototype.hasOwnProperty, Qg = Object.prototype.propertyIsEnumerable, xi = (e, t, n) => t in e ? Yg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jg = (e, t) => {
  for (var n in t || (t = {}))
    Xg.call(t, n) && xi(e, n, t[n]);
  if (Ei)
    for (var n of Ei(t))
      Qg.call(t, n) && xi(e, n, t[n]);
  return e;
};
const ev = {
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
Jg({
  linear: Fg
}, ev);
class tv extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Es(e, t) {
  throw new tv(`[${e}] ${t}`);
}
const Li = {
  current: 0
}, Ii = P(0), nu = 2e3, Oi = Symbol("elZIndexContextKey"), ou = Symbol("zIndexContextKey"), ja = (e) => {
  const t = Et() ? Re(Oi, Li) : Li, n = e || (Et() ? Re(ou, void 0) : void 0), o = C(() => {
    const s = l(n);
    return $e(s) ? s : nu;
  }), r = C(() => o.value + Ii.value), a = () => (t.current++, Ii.value = t.current, r.value);
  return !qe && Re(Oi), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: a
  };
};
var nv = {
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
const ov = (e) => (t, n) => rv(t, n, l(e)), rv = (e, t, n) => co(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t?.[r]) != null ? a : `{${r}}`}`;
}), sv = (e) => {
  const t = C(() => l(e).name), n = tn(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: ov(e)
  };
}, ru = Symbol("localeContextKey"), xs = (e) => {
  const t = e || Re(ru, P());
  return sv(C(() => t.value || nv));
}, su = "__epPropKey", he = (e) => e, av = (e) => Xt(e) && !!e[su], Ls = (e, t) => {
  if (!Xt(e) || av(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, c = {
    type: a,
    required: !!o,
    validator: n || s ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), Ul(e, "default") && m.push(r), d || (d = m.includes(u))), s && (d || (d = s(u))), !d && m.length > 0) {
        const g = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        nf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [su]: !0
  };
  return Ul(e, "default") && (c.default = r), c;
}, ze = (e) => us(Object.entries(e).map(([t, n]) => [
  t,
  Ls(n, t)
])), Va = ["", "default", "small", "large"], Is = Ls({
  type: String,
  values: Va,
  required: !1
}), au = Symbol("size"), lv = () => {
  const e = Re(au, {});
  return C(() => l(e.size) || "");
}, lu = Symbol("emptyValuesContextKey"), iv = ["", void 0, null], cv = void 0, iu = ze({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ke(e) ? !e() : !e
  }
}), uv = (e, t) => {
  const n = Et() ? Re(lu, P({})) : P({}), o = C(() => e.emptyValues || n.value.emptyValues || iv), r = C(() => Ke(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ke(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : cv), a = (s) => o.value.includes(s);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: a
  };
}, $i = (e) => Object.keys(e), fs = P();
function Ha(e, t = void 0) {
  const n = Et() ? Re(Nc, fs) : fs;
  return e ? C(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function cu(e, t) {
  const n = Ha(), o = Ye(e, C(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Tr;
  })), r = xs(C(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = ja(C(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || nu;
  })), s = C(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return uu(C(() => l(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
const uu = (e, t, n = !1) => {
  var o;
  const r = !!Et(), a = r ? Ha() : void 0, s = (o = void 0) != null ? o : r ? bn : void 0;
  if (!s)
    return;
  const i = C(() => {
    const c = l(e);
    return a?.value ? dv(a.value, c) : c;
  });
  return s(Nc, i), s(ru, C(() => i.value.locale)), s(Dc, C(() => i.value.namespace)), s(ou, C(() => i.value.zIndex)), s(au, {
    size: C(() => i.value.size || "")
  }), s(lu, C(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !fs.value) && (fs.value = i.value), i;
}, dv = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...$i(e), ...$i(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, lt = "update:modelValue", Jn = "change", Qn = "input";
var je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const du = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ri = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, fv = (e, t) => {
  !e || !t.trim() || e.classList.add(...du(t));
}, pv = (e, t) => {
  !e || !t.trim() || e.classList.remove(...du(t));
}, mv = (e, t) => {
  var n;
  if (!qe || !e)
    return "";
  let o = Ff(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[o] : "";
  } catch {
    return e.style[o];
  }
};
function eo(e, t = "px") {
  if (!e)
    return "";
  if ($e(e) || Ig(e))
    return `${e}${t}`;
  if (Ct(e))
    return e;
}
let Kr;
const hv = (e) => {
  var t;
  if (!qe)
    return 0;
  if (Kr !== void 0)
    return Kr;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const a = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Kr = o - a, Kr;
};
function gv(e, t) {
  if (!qe)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((c, u) => c + u.offsetTop, 0), a = r + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  r < s ? e.scrollTop = r : a > i && (e.scrollTop = a - e.clientHeight);
}
const an = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, fu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), pu = (e) => (e.install = fo, e), vv = ze({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), bv = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), yv = /* @__PURE__ */ oe({
  ...bv,
  props: vv,
  setup(e) {
    const t = e, n = Ye("icon"), o = C(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: $n(r) ? void 0 : eo(r),
        "--color": a
      };
    });
    return (r, a) => (T(), N("i", Eo({
      class: l(n).b(),
      style: l(o)
    }, r.$attrs), [
      le(r.$slots, "default")
    ], 16));
  }
});
var wv = /* @__PURE__ */ je(yv, [["__file", "icon.vue"]]);
const nt = an(wv);
/*! Element Plus Icons Vue v2.3.1 */
var kv = /* @__PURE__ */ oe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), mu = kv, _v = /* @__PURE__ */ oe({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Tv = _v, Sv = /* @__PURE__ */ oe({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (T(), N("svg", {
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
}), Av = Sv, Cv = /* @__PURE__ */ oe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ev = Cv, xv = /* @__PURE__ */ oe({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (T(), N("svg", {
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
}), Wa = xv, Lv = /* @__PURE__ */ oe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ps = Lv, Iv = /* @__PURE__ */ oe({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (T(), N("svg", {
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
}), Ov = Iv, $v = /* @__PURE__ */ oe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Rv = $v, Mv = /* @__PURE__ */ oe({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), hu = Mv, Pv = /* @__PURE__ */ oe({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Nv = Pv, Dv = /* @__PURE__ */ oe({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), zv = Dv, Bv = /* @__PURE__ */ oe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Fv = Bv, jv = /* @__PURE__ */ oe({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Vv = jv, Hv = /* @__PURE__ */ oe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (T(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Wv = Hv;
const mn = he([
  String,
  Object,
  Function
]), gu = {
  Close: ps
}, Uv = {
  Close: ps
}, ms = {
  success: Fv,
  warning: Wv,
  error: Ev,
  info: Rv
}, vu = {
  validating: hu,
  success: Av,
  error: Wa
}, bu = () => qe && /firefox/i.test(window.navigator.userAgent);
let Ht;
const Gv = {
  height: "0",
  visibility: "hidden",
  overflow: bu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Kv = [
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
function qv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Kv.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Mi(e, t = 1, n) {
  var o;
  Ht || (Ht = document.createElement("textarea"), document.body.appendChild(Ht));
  const { paddingSize: r, borderSize: a, boxSizing: s, contextStyle: i } = qv(e);
  i.forEach(([m, g]) => Ht?.style.setProperty(m, g)), Object.entries(Gv).forEach(([m, g]) => Ht?.style.setProperty(m, g, "important")), Ht.value = e.value || e.placeholder || "";
  let c = Ht.scrollHeight;
  const u = {};
  s === "border-box" ? c = c + a : s === "content-box" && (c = c - r), Ht.value = "";
  const d = Ht.scrollHeight - r;
  if ($e(t)) {
    let m = d * t;
    s === "border-box" && (m = m + r + a), c = Math.max(m, c), u.minHeight = `${m}px`;
  }
  if ($e(n)) {
    let m = d * n;
    s === "border-box" && (m = m + r + a), c = Math.min(m, c);
  }
  return u.height = `${c}px`, (o = Ht.parentNode) == null || o.removeChild(Ht), Ht = void 0, u;
}
const yu = (e) => e, Zv = ze({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Po = (e) => Lg(Zv, e), Yv = ze({
  id: {
    type: String,
    default: void 0
  },
  size: Is,
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
    type: mn
  },
  prefixIcon: {
    type: mn
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
    default: () => yu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Po(["ariaLabel"])
}), Xv = {
  [lt]: (e) => Ct(e),
  input: (e) => Ct(e),
  change: (e) => Ct(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Qv = ["class", "style"], Jv = /^on[A-Z]/, e0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = C(() => (n?.value || []).concat(Qv)), r = Et();
  return r ? C(() => {
    var a;
    return us(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !o.value.includes(s) && !(t && Jv.test(s))));
  }) : C(() => ({}));
}, Ua = Symbol("formContextKey"), hs = Symbol("formItemContextKey"), Pi = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, t0 = Symbol("elIdInjection"), wu = () => Et() ? Re(t0, Pi) : Pi, Zo = (e) => {
  const t = wu(), n = $a();
  return zg(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Os = () => {
  const e = Re(Ua, void 0), t = Re(hs, void 0);
  return {
    form: e,
    formItem: t
  };
}, Ga = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = P(!1)), o || (o = P(!1));
  const r = P();
  let a;
  const s = C(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return et(() => {
    a = de([Kn(e, "id"), n], ([i, c]) => {
      const u = i ?? (c ? void 0 : Zo().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !c && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), La(() => {
    a && a(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, ku = (e) => {
  const t = Et();
  return C(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, zr = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : ku("size"), r = t.global ? n : lv(), a = t.form ? { size: void 0 } : Re(Ua, void 0), s = t.formItem ? { size: void 0 } : Re(hs, void 0);
  return C(() => o.value || l(e) || s?.size || a?.size || r.value || "");
}, Ka = (e) => {
  const t = ku("disabled"), n = Re(Ua, void 0);
  return C(() => t.value || l(e) || n?.disabled || !1);
};
function _u(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const a = Et(), { emit: s } = a, i = uo(), c = P(!1), u = (g) => {
    Ke(t) && t(g) || c.value || (c.value = !0, s("focus", g), n?.());
  }, d = (g) => {
    var y;
    Ke(o) && o(g) || g.relatedTarget && ((y = i.value) != null && y.contains(g.relatedTarget)) || (c.value = !1, s("blur", g), r?.());
  }, m = () => {
    var g, y;
    (g = i.value) != null && g.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return de(i, (g) => {
    g && g.setAttribute("tabindex", "-1");
  }), vn(i, "focus", u, !0), vn(i, "blur", d, !0), vn(i, "click", m, !0), {
    isFocused: c,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const n0 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Tu({
  afterComposition: e,
  emit: t
}) {
  const n = P(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var c;
    t?.("compositionupdate", i);
    const u = (c = i.target) == null ? void 0 : c.value, d = u[u.length - 1] || "";
    n.value = !n0(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Ge(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? a(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: a
  };
}
function o0(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: s } = e.value;
    if (r == null || a == null)
      return;
    const i = s.slice(0, Math.max(0, r)), c = s.slice(Math.max(0, a));
    t = {
      selectionStart: r,
      selectionEnd: a,
      value: s,
      beforeTxt: i,
      afterTxt: c
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: i } = t;
    if (a == null || s == null || i == null)
      return;
    let c = r.length;
    if (r.endsWith(s))
      c = r.length - s.length;
    else if (r.startsWith(a))
      c = a.length;
    else {
      const u = a[i - 1], d = r.indexOf(u, i - 1);
      d !== -1 && (c = d + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, o];
}
const r0 = "ElInput", s0 = oe({
  name: r0,
  inheritAttrs: !1
}), a0 = /* @__PURE__ */ oe({
  ...s0,
  props: Yv,
  emits: Xv,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = of(), a = e0(), s = Rc(), i = C(() => [
      o.type === "textarea" ? b.b() : h.b(),
      h.m(g.value),
      h.is("disabled", y.value),
      h.is("exceed", V.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || o.prefixIcon,
        [h.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [h.bm("suffix", "password-clear")]: ie.value && pe.value,
        [h.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), c = C(() => [
      h.e("wrapper"),
      h.is("focus", K.value)
    ]), { form: u, formItem: d } = Os(), { inputId: m } = Ga(o, {
      formItemContext: d
    }), g = zr(), y = Ka(), h = Ye("input"), b = Ye("textarea"), E = uo(), w = uo(), R = P(!1), F = P(!1), O = P(), A = uo(o.inputStyle), x = C(() => E.value || w.value), { wrapperRef: $, isFocused: K, handleFocus: Z, handleBlur: re } = _u(x, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var G;
        o.validateEvent && ((G = d?.validate) == null || G.call(d, "blur").catch((we) => void 0));
      }
    }), H = C(() => {
      var G;
      return (G = u?.statusIcon) != null ? G : !1;
    }), ae = C(() => d?.validateState || ""), fe = C(() => ae.value && vu[ae.value]), ce = C(() => F.value ? Vv : Ov), M = C(() => [
      r.style
    ]), j = C(() => [
      o.inputStyle,
      A.value,
      { resize: o.resize }
    ]), B = C(() => Yn(o.modelValue) ? "" : String(o.modelValue)), ie = C(() => o.clearable && !y.value && !o.readonly && !!B.value && (K.value || R.value)), pe = C(() => o.showPassword && !y.value && !!B.value && (!!B.value || K.value)), Te = C(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !y.value && !o.readonly && !o.showPassword), Q = C(() => B.value.length), V = C(() => !!Te.value && Q.value > Number(o.maxlength)), Ae = C(() => !!s.suffix || !!o.suffixIcon || ie.value || o.showPassword || Te.value || !!ae.value && H.value), [ge, ve] = o0(E);
    In(w, (G) => {
      if (ue(), !Te.value || o.resize !== "both")
        return;
      const we = G[0], { width: Ee } = we.contentRect;
      O.value = {
        right: `calc(100% - ${Ee + 15 + 6}px)`
      };
    });
    const me = () => {
      const { type: G, autosize: we } = o;
      if (!(!qe || G !== "textarea" || !w.value))
        if (we) {
          const Ee = Xt(we) ? we.minRows : void 0, Nt = Xt(we) ? we.maxRows : void 0, Me = Mi(w.value, Ee, Nt);
          A.value = {
            overflowY: "hidden",
            ...Me
          }, Ge(() => {
            w.value.offsetHeight, A.value = Me;
          });
        } else
          A.value = {
            minHeight: Mi(w.value).minHeight
          };
    }, ue = ((G) => {
      let we = !1;
      return () => {
        var Ee;
        if (we || !o.autosize)
          return;
        ((Ee = w.value) == null ? void 0 : Ee.offsetParent) === null || (G(), we = !0);
      };
    })(me), Be = () => {
      const G = x.value, we = o.formatter ? o.formatter(B.value) : B.value;
      !G || G.value === we || (G.value = we);
    }, ft = async (G) => {
      ge();
      let { value: we } = G.target;
      if (o.formatter && o.parser && (we = o.parser(we)), !rt.value) {
        if (we === B.value) {
          Be();
          return;
        }
        n(lt, we), n(Qn, we), await Ge(), Be(), ve();
      }
    }, He = (G) => {
      let { value: we } = G.target;
      o.formatter && o.parser && (we = o.parser(we)), n(Jn, we);
    }, {
      isComposing: rt,
      handleCompositionStart: ht,
      handleCompositionUpdate: wt,
      handleCompositionEnd: gt
    } = Tu({ emit: n, afterComposition: ft }), ut = () => {
      ge(), F.value = !F.value, setTimeout(ve);
    }, kt = () => {
      var G;
      return (G = x.value) == null ? void 0 : G.focus();
    }, Qe = () => {
      var G;
      return (G = x.value) == null ? void 0 : G.blur();
    }, Mt = (G) => {
      R.value = !1, n("mouseleave", G);
    }, st = (G) => {
      R.value = !0, n("mouseenter", G);
    }, tt = (G) => {
      n("keydown", G);
    }, Gt = () => {
      var G;
      (G = x.value) == null || G.select();
    }, Pt = () => {
      n(lt, ""), n(Jn, ""), n("clear"), n(Qn, "");
    };
    return de(() => o.modelValue, () => {
      var G;
      Ge(() => me()), o.validateEvent && ((G = d?.validate) == null || G.call(d, "change").catch((we) => void 0));
    }), de(B, () => Be()), de(() => o.type, async () => {
      await Ge(), Be(), me();
    }), et(() => {
      !o.formatter && o.parser, Be(), Ge(me);
    }), t({
      input: E,
      textarea: w,
      ref: x,
      textareaStyle: j,
      autosize: Kn(o, "autosize"),
      isComposing: rt,
      focus: kt,
      blur: Qe,
      select: Gt,
      clear: Pt,
      resizeTextarea: me
    }), (G, we) => (T(), N("div", {
      class: D([
        l(i),
        {
          [l(h).bm("group", "append")]: G.$slots.append,
          [l(h).bm("group", "prepend")]: G.$slots.prepend
        }
      ]),
      style: dt(l(M)),
      onMouseenter: st,
      onMouseleave: Mt
    }, [
      U(" input "),
      G.type !== "textarea" ? (T(), N(at, { key: 0 }, [
        U(" prepend slot "),
        G.$slots.prepend ? (T(), N("div", {
          key: 0,
          class: D(l(h).be("group", "prepend"))
        }, [
          le(G.$slots, "prepend")
        ], 2)) : U("v-if", !0),
        f("div", {
          ref_key: "wrapperRef",
          ref: $,
          class: D(l(c))
        }, [
          U(" prefix slot "),
          G.$slots.prefix || G.prefixIcon ? (T(), N("span", {
            key: 0,
            class: D(l(h).e("prefix"))
          }, [
            f("span", {
              class: D(l(h).e("prefix-inner"))
            }, [
              le(G.$slots, "prefix"),
              G.prefixIcon ? (T(), ee(l(nt), {
                key: 0,
                class: D(l(h).e("icon"))
              }, {
                default: X(() => [
                  (T(), ee(yt(G.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0),
          f("input", Eo({
            id: l(m),
            ref_key: "input",
            ref: E,
            class: l(h).e("inner")
          }, l(a), {
            minlength: G.minlength,
            maxlength: G.maxlength,
            type: G.showPassword ? F.value ? "text" : "password" : G.type,
            disabled: l(y),
            readonly: G.readonly,
            autocomplete: G.autocomplete,
            tabindex: G.tabindex,
            "aria-label": G.ariaLabel,
            placeholder: G.placeholder,
            style: G.inputStyle,
            form: G.form,
            autofocus: G.autofocus,
            role: G.containerRole,
            onCompositionstart: l(ht),
            onCompositionupdate: l(wt),
            onCompositionend: l(gt),
            onInput: ft,
            onChange: He,
            onKeydown: tt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          U(" suffix slot "),
          l(Ae) ? (T(), N("span", {
            key: 1,
            class: D(l(h).e("suffix"))
          }, [
            f("span", {
              class: D(l(h).e("suffix-inner"))
            }, [
              !l(ie) || !l(pe) || !l(Te) ? (T(), N(at, { key: 0 }, [
                le(G.$slots, "suffix"),
                G.suffixIcon ? (T(), ee(l(nt), {
                  key: 0,
                  class: D(l(h).e("icon"))
                }, {
                  default: X(() => [
                    (T(), ee(yt(G.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : U("v-if", !0)
              ], 64)) : U("v-if", !0),
              l(ie) ? (T(), ee(l(nt), {
                key: 1,
                class: D([l(h).e("icon"), l(h).e("clear")]),
                onMousedown: Ue(l(fo), ["prevent"]),
                onClick: Pt
              }, {
                default: X(() => [
                  _(l(Wa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : U("v-if", !0),
              l(pe) ? (T(), ee(l(nt), {
                key: 2,
                class: D([l(h).e("icon"), l(h).e("password")]),
                onClick: ut
              }, {
                default: X(() => [
                  (T(), ee(yt(l(ce))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              l(Te) ? (T(), N("span", {
                key: 3,
                class: D(l(h).e("count"))
              }, [
                f("span", {
                  class: D(l(h).e("count-inner"))
                }, L(l(Q)) + " / " + L(G.maxlength), 3)
              ], 2)) : U("v-if", !0),
              l(ae) && l(fe) && l(H) ? (T(), ee(l(nt), {
                key: 4,
                class: D([
                  l(h).e("icon"),
                  l(h).e("validateIcon"),
                  l(h).is("loading", l(ae) === "validating")
                ])
              }, {
                default: X(() => [
                  (T(), ee(yt(l(fe))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0)
        ], 2),
        U(" append slot "),
        G.$slots.append ? (T(), N("div", {
          key: 1,
          class: D(l(h).be("group", "append"))
        }, [
          le(G.$slots, "append")
        ], 2)) : U("v-if", !0)
      ], 64)) : (T(), N(at, { key: 1 }, [
        U(" textarea "),
        f("textarea", Eo({
          id: l(m),
          ref_key: "textarea",
          ref: w,
          class: [l(b).e("inner"), l(h).is("focus", l(K))]
        }, l(a), {
          minlength: G.minlength,
          maxlength: G.maxlength,
          tabindex: G.tabindex,
          disabled: l(y),
          readonly: G.readonly,
          autocomplete: G.autocomplete,
          style: l(j),
          "aria-label": G.ariaLabel,
          placeholder: G.placeholder,
          form: G.form,
          autofocus: G.autofocus,
          rows: G.rows,
          role: G.containerRole,
          onCompositionstart: l(ht),
          onCompositionupdate: l(wt),
          onCompositionend: l(gt),
          onInput: ft,
          onFocus: l(Z),
          onBlur: l(re),
          onChange: He,
          onKeydown: tt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(Te) ? (T(), N("span", {
          key: 0,
          style: dt(O.value),
          class: D(l(h).e("count"))
        }, L(l(Q)) + " / " + L(G.maxlength), 7)) : U("v-if", !0)
      ], 64))
    ], 38));
  }
});
var l0 = /* @__PURE__ */ je(a0, [["__file", "input.vue"]]);
const i0 = an(l0), jo = 4, c0 = {
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
}, u0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), qa = Symbol("scrollbarContextKey"), d0 = ze({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), f0 = "Thumb", p0 = /* @__PURE__ */ oe({
  __name: "thumb",
  props: d0,
  setup(e) {
    const t = e, n = Re(qa), o = Ye("scrollbar");
    n || Es(f0, "can not inject scrollbar context");
    const r = P(), a = P(), s = P({}), i = P(!1);
    let c = !1, u = !1, d = qe ? document.onselectstart : null;
    const m = C(() => c0[t.vertical ? "vertical" : "horizontal"]), g = C(() => u0({
      size: t.size,
      move: t.move,
      bar: m.value
    })), y = C(() => r.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), h = (x) => {
      var $;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), E(x);
      const K = x.currentTarget;
      K && (s.value[m.value.axis] = K[m.value.offset] - (x[m.value.client] - K.getBoundingClientRect()[m.value.direction]));
    }, b = (x) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const $ = Math.abs(x.target.getBoundingClientRect()[m.value.direction] - x[m.value.client]), K = a.value[m.value.offset] / 2, Z = ($ - K) * 100 * y.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = Z * n.wrapElement[m.value.scrollSize] / 100;
    }, E = (x) => {
      x.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", R), d = document.onselectstart, document.onselectstart = () => !1;
    }, w = (x) => {
      if (!r.value || !a.value || c === !1)
        return;
      const $ = s.value[m.value.axis];
      if (!$)
        return;
      const K = (r.value.getBoundingClientRect()[m.value.direction] - x[m.value.client]) * -1, Z = a.value[m.value.offset] - $, re = (K - Z) * 100 * y.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = re * n.wrapElement[m.value.scrollSize] / 100;
    }, R = () => {
      c = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", R), A(), u && (i.value = !1);
    }, F = () => {
      u = !1, i.value = !!t.size;
    }, O = () => {
      u = !0, i.value = c;
    };
    wn(() => {
      A(), document.removeEventListener("mouseup", R);
    });
    const A = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return vn(Kn(n, "scrollbarElement"), "mousemove", F), vn(Kn(n, "scrollbarElement"), "mouseleave", O), (x, $) => (T(), ee($o, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: X(() => [
        it(f("div", {
          ref_key: "instance",
          ref: r,
          class: D([l(o).e("bar"), l(o).is(l(m).key)]),
          onMousedown: b
        }, [
          f("div", {
            ref_key: "thumb",
            ref: a,
            class: D(l(o).e("thumb")),
            style: dt(l(g)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [Pn, x.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ni = /* @__PURE__ */ je(p0, [["__file", "thumb.vue"]]);
const m0 = ze({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), h0 = /* @__PURE__ */ oe({
  __name: "bar",
  props: m0,
  setup(e, { expose: t }) {
    const n = e, o = Re(qa), r = P(0), a = P(0), s = P(""), i = P(""), c = P(1), u = P(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const y = g.offsetHeight - jo, h = g.offsetWidth - jo;
          a.value = g.scrollTop * 100 / y * c.value, r.value = g.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const y = g.offsetHeight - jo, h = g.offsetWidth - jo, b = y ** 2 / g.scrollHeight, E = h ** 2 / g.scrollWidth, w = Math.max(b, n.minSize), R = Math.max(E, n.minSize);
        c.value = b / (y - b) / (w / (y - w)), u.value = E / (h - E) / (R / (h - R)), i.value = w + jo < y ? `${w}px` : "", s.value = R + jo < h ? `${R}px` : "";
      }
    }), (g, y) => (T(), N(at, null, [
      _(Ni, {
        move: r.value,
        ratio: u.value,
        size: s.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _(Ni, {
        move: a.value,
        ratio: c.value,
        size: i.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var g0 = /* @__PURE__ */ je(h0, [["__file", "bar.vue"]]);
const v0 = ze({
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
  ...Po(["ariaLabel", "ariaOrientation"])
}), b0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every($e)
}, y0 = "ElScrollbar", w0 = oe({
  name: y0
}), k0 = /* @__PURE__ */ oe({
  ...w0,
  props: v0,
  emits: b0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Ye("scrollbar");
    let a, s, i = 0, c = 0;
    const u = P(), d = P(), m = P(), g = P(), y = C(() => {
      const A = {};
      return o.height && (A.height = eo(o.height)), o.maxHeight && (A.maxHeight = eo(o.maxHeight)), [o.wrapStyle, A];
    }), h = C(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), b = C(() => [r.e("view"), o.viewClass]), E = () => {
      var A;
      d.value && ((A = g.value) == null || A.handleScroll(d.value), i = d.value.scrollTop, c = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function w(A, x) {
      Xt(A) ? d.value.scrollTo(A) : $e(A) && $e(x) && d.value.scrollTo(A, x);
    }
    const R = (A) => {
      $e(A) && (d.value.scrollTop = A);
    }, F = (A) => {
      $e(A) && (d.value.scrollLeft = A);
    }, O = () => {
      var A;
      (A = g.value) == null || A.update();
    };
    return de(() => o.noresize, (A) => {
      A ? (a?.(), s?.()) : ({ stop: a } = In(m, O), s = vn("resize", O));
    }, { immediate: !0 }), de(() => [o.maxHeight, o.height], () => {
      o.native || Ge(() => {
        var A;
        O(), d.value && ((A = g.value) == null || A.handleScroll(d.value));
      });
    }), bn(qa, xo({
      scrollbarElement: u,
      wrapElement: d
    })), rf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = c);
    }), et(() => {
      o.native || Ge(() => {
        O();
      });
    }), Mc(() => O()), t({
      wrapRef: d,
      update: O,
      scrollTo: w,
      setScrollTop: R,
      setScrollLeft: F,
      handleScroll: E
    }), (A, x) => (T(), N("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: D(l(r).b())
    }, [
      f("div", {
        ref_key: "wrapRef",
        ref: d,
        class: D(l(h)),
        style: dt(l(y)),
        tabindex: A.tabindex,
        onScroll: E
      }, [
        (T(), ee(yt(A.tag), {
          id: A.id,
          ref_key: "resizeRef",
          ref: m,
          class: D(l(b)),
          style: dt(A.viewStyle),
          role: A.role,
          "aria-label": A.ariaLabel,
          "aria-orientation": A.ariaOrientation
        }, {
          default: X(() => [
            le(A.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      A.native ? U("v-if", !0) : (T(), ee(g0, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: A.always,
        "min-size": A.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var _0 = /* @__PURE__ */ je(k0, [["__file", "scrollbar.vue"]]);
const T0 = an(_0), Za = Symbol("popper"), Su = Symbol("popperContent"), S0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Au = ze({
  role: {
    type: String,
    values: S0,
    default: "tooltip"
  }
}), A0 = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), C0 = /* @__PURE__ */ oe({
  ...A0,
  props: Au,
  setup(e, { expose: t }) {
    const n = e, o = P(), r = P(), a = P(), s = P(), i = C(() => n.role), c = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(c), bn(Za, c), (u, d) => le(u.$slots, "default");
  }
});
var E0 = /* @__PURE__ */ je(C0, [["__file", "popper.vue"]]);
const Cu = ze({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), x0 = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), L0 = /* @__PURE__ */ oe({
  ...x0,
  props: Cu,
  setup(e, { expose: t }) {
    const n = e, o = Ye("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = Re(Su, void 0);
    return de(() => n.arrowOffset, (i) => {
      r.value = i;
    }), wn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, c) => (T(), N("span", {
      ref_key: "arrowRef",
      ref: a,
      class: D(l(o).e("arrow")),
      style: dt(l(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var I0 = /* @__PURE__ */ je(L0, [["__file", "arrow.vue"]]);
const Eu = ze({
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
}), xu = Symbol("elForwardRef"), O0 = (e) => {
  bn(xu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, $0 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ma = (e) => {
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
}, R0 = "ElOnlyChild", M0 = oe({
  name: R0,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = Re(xu), a = $0((o = r?.setForwardRef) != null ? o : fo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const c = Lu(i);
      return c ? it(sf(c, n), [[a]]) : null;
    };
  }
});
function Lu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Xt(n))
      switch (n.type) {
        case lf:
          continue;
        case af:
        case "svg":
          return Di(n);
        case at:
          return Lu(n.children);
        default:
          return n;
      }
    return Di(n);
  }
  return null;
}
function Di(e) {
  const t = Ye("only-child");
  return _("span", {
    class: t.e("content")
  }, [e]);
}
const P0 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), N0 = /* @__PURE__ */ oe({
  ...P0,
  props: Eu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = Re(Za, void 0);
    O0(r);
    const a = C(() => i.value ? n.id : void 0), s = C(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = C(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), c = C(() => i.value ? `${n.open}` : void 0);
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
    return et(() => {
      de(() => n.virtualRef, (m) => {
        m && (r.value = qn(m));
      }, {
        immediate: !0
      }), de(r, (m, g) => {
        u?.(), u = void 0, gn(m) && (d.forEach((y) => {
          var h;
          const b = n[y];
          b && (m.addEventListener(y.slice(2).toLowerCase(), b), (h = g?.removeEventListener) == null || h.call(g, y.slice(2).toLowerCase(), b));
        }), ma(m) && (u = de([a, s, i, c], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, b) => {
            Yn(y[b]) ? m.removeAttribute(h) : m.setAttribute(h, y[b]);
          });
        }, { immediate: !0 }))), gn(g) && ma(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => g.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), wn(() => {
      if (u?.(), u = void 0, r.value && gn(r.value)) {
        const m = r.value;
        d.forEach((g) => {
          const y = n[g];
          y && m.removeEventListener(g.slice(2).toLowerCase(), y);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (m, g) => m.virtualTriggering ? U("v-if", !0) : (T(), ee(l(M0), Eo({ key: 0 }, m.$attrs, {
      "aria-controls": l(a),
      "aria-describedby": l(s),
      "aria-expanded": l(c),
      "aria-haspopup": l(i)
    }), {
      default: X(() => [
        le(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var D0 = /* @__PURE__ */ je(N0, [["__file", "trigger.vue"]]);
const Zs = "focus-trap.focus-after-trapped", Ys = "focus-trap.focus-after-released", z0 = "focus-trap.focusout-prevented", zi = {
  cancelable: !0,
  bubbles: !1
}, B0 = {
  cancelable: !0,
  bubbles: !1
}, Bi = "focusAfterTrapped", Fi = "focusAfterReleased", Iu = Symbol("elFocusTrap"), Ya = P(), $s = P(0), Xa = P(0);
let qr = 0;
const Ou = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ji = (e, t) => {
  for (const n of e)
    if (!F0(n, t))
      return n;
}, F0 = (e, t) => {
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
}, j0 = (e) => {
  const t = Ou(e), n = ji(t, e), o = ji(t.reverse(), e);
  return [n, o];
}, V0 = (e) => e instanceof HTMLInputElement && "select" in e, Un = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    gn(e) && !ma(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Xa.value = window.performance.now(), e !== n && V0(e) && t && e.select(), gn(e) && o && e.removeAttribute("tabindex");
  }
};
function Vi(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const H0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Vi(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = Vi(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, W0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Un(o, t), document.activeElement !== n)
      return;
}, Hi = H0(), U0 = () => $s.value > Xa.value, Zr = () => {
  Ya.value = "pointer", $s.value = window.performance.now();
}, Wi = () => {
  Ya.value = "keyboard", $s.value = window.performance.now();
}, G0 = () => (et(() => {
  qr === 0 && (document.addEventListener("mousedown", Zr), document.addEventListener("touchstart", Zr), document.addEventListener("keydown", Wi)), qr++;
}), wn(() => {
  qr--, qr <= 0 && (document.removeEventListener("mousedown", Zr), document.removeEventListener("touchstart", Zr), document.removeEventListener("keydown", Wi));
}), {
  focusReason: Ya,
  lastUserFocusTimestamp: $s,
  lastAutomatedFocusTimestamp: Xa
}), Yr = (e) => new CustomEvent(z0, {
  ...B0,
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
let Go = [];
const Ui = (e) => {
  e.code === Rn.esc && Go.forEach((t) => t(e));
}, K0 = (e) => {
  et(() => {
    Go.length === 0 && document.addEventListener("keydown", Ui), qe && Go.push(e);
  }), wn(() => {
    Go = Go.filter((t) => t !== e), Go.length === 0 && qe && document.removeEventListener("keydown", Ui);
  });
}, q0 = oe({
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
    Bi,
    Fi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, r;
    const { focusReason: a } = G0();
    K0((h) => {
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
      const { code: b, altKey: E, ctrlKey: w, metaKey: R, currentTarget: F, shiftKey: O } = h, { loop: A } = e, x = b === Rn.tab && !E && !w && !R, $ = document.activeElement;
      if (x && $) {
        const K = F, [Z, re] = j0(K);
        if (Z && re) {
          if (!O && $ === re) {
            const ae = Yr({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (h.preventDefault(), A && Un(Z, !0));
          } else if (O && [Z, K].includes($)) {
            const ae = Yr({
              focusReason: a.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (h.preventDefault(), A && Un(re, !0));
          }
        } else if ($ === K) {
          const ae = Yr({
            focusReason: a.value
          });
          t("focusout-prevented", ae), ae.defaultPrevented || h.preventDefault();
        }
      }
    };
    bn(Iu, {
      focusTrapRef: n,
      onKeydown: i
    }), de(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), de([n], ([h], [b]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", d), b.removeEventListener("focusout", m));
    });
    const c = (h) => {
      t(Bi, h);
    }, u = (h) => t(Fi, h), d = (h) => {
      const b = l(n);
      if (!b)
        return;
      const E = h.target, w = h.relatedTarget, R = E && b.contains(E);
      e.trapped || w && b.contains(w) || (o = w), R && t("focusin", h), !s.paused && e.trapped && (R ? r = E : Un(r, !0));
    }, m = (h) => {
      const b = l(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const E = h.relatedTarget;
          !Yn(E) && !b.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const w = Yr({
                focusReason: a.value
              });
              t("focusout-prevented", w), w.defaultPrevented || Un(r, !0);
            }
          }, 0);
        } else {
          const E = h.target;
          E && b.contains(E) || t("focusout", h);
        }
    };
    async function g() {
      await Ge();
      const h = l(n);
      if (h) {
        Hi.push(s);
        const b = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = b, !h.contains(b)) {
          const w = new Event(Zs, zi);
          h.addEventListener(Zs, c), h.dispatchEvent(w), w.defaultPrevented || Ge(() => {
            let R = e.focusStartEl;
            Ct(R) || (Un(R), document.activeElement !== R && (R = "first")), R === "first" && W0(Ou(h), !0), (document.activeElement === b || R === "container") && Un(h);
          });
        }
      }
    }
    function y() {
      const h = l(n);
      if (h) {
        h.removeEventListener(Zs, c);
        const b = new CustomEvent(Ys, {
          ...zi,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(Ys, u), h.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !U0() || h.contains(document.activeElement)) && Un(o ?? document.body), h.removeEventListener(Ys, u), Hi.remove(s);
      }
    }
    return et(() => {
      e.trapped && g(), de(() => e.trapped, (h) => {
        h ? g() : y();
      });
    }), wn(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Z0(e, t, n, o, r, a) {
  return le(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var $u = /* @__PURE__ */ je(q0, [["render", Z0], ["__file", "focus-trap.vue"]]), Wt = "top", on = "bottom", rn = "right", Ut = "left", Qa = "auto", Br = [Wt, on, rn, Ut], Yo = "start", Rr = "end", Y0 = "clippingParents", Ru = "viewport", pr = "popper", X0 = "reference", Gi = Br.reduce(function(e, t) {
  return e.concat([t + "-" + Yo, t + "-" + Rr]);
}, []), Rs = [].concat(Br, [Qa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yo, t + "-" + Rr]);
}, []), Q0 = "beforeRead", J0 = "read", eb = "afterRead", tb = "beforeMain", nb = "main", ob = "afterMain", rb = "beforeWrite", sb = "write", ab = "afterWrite", lb = [Q0, J0, eb, tb, nb, ob, rb, sb, ab];
function Dn(e) {
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
function Io(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function nn(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ja(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ib(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !nn(a) || !Dn(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function cb(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !nn(r) || !Dn(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(c) {
        r.removeAttribute(c);
      }));
    });
  };
}
var Mu = { name: "applyStyles", enabled: !0, phase: "write", fn: ib, effect: cb, requires: ["computeStyles"] };
function Mn(e) {
  return e.split("-")[0];
}
var Co = Math.max, gs = Math.min, Xo = Math.round;
function ha() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pu() {
  return !/^((?!chrome|android).)*safari/i.test(ha());
}
function Qo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && nn(e) && (r = e.offsetWidth > 0 && Xo(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Xo(o.height) / e.offsetHeight || 1);
  var s = Io(e) ? Qt(e) : window, i = s.visualViewport, c = !Pu() && n, u = (o.left + (c && i ? i.offsetLeft : 0)) / r, d = (o.top + (c && i ? i.offsetTop : 0)) / a, m = o.width / r, g = o.height / a;
  return { width: m, height: g, top: d, right: u + m, bottom: d + g, left: u, x: u, y: d };
}
function el(e) {
  var t = Qo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Nu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ja(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function to(e) {
  return Qt(e).getComputedStyle(e);
}
function ub(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
}
function mo(e) {
  return ((Io(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ms(e) {
  return Dn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ja(e) ? e.host : null) || mo(e);
}
function Ki(e) {
  return !nn(e) || to(e).position === "fixed" ? null : e.offsetParent;
}
function db(e) {
  var t = /firefox/i.test(ha()), n = /Trident/i.test(ha());
  if (n && nn(e)) {
    var o = to(e);
    if (o.position === "fixed") return null;
  }
  var r = Ms(e);
  for (Ja(r) && (r = r.host); nn(r) && ["html", "body"].indexOf(Dn(r)) < 0; ) {
    var a = to(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function Fr(e) {
  for (var t = Qt(e), n = Ki(e); n && ub(n) && to(n).position === "static"; ) n = Ki(n);
  return n && (Dn(n) === "html" || Dn(n) === "body" && to(n).position === "static") ? t : n || db(e) || t;
}
function tl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cr(e, t, n) {
  return Co(e, gs(t, n));
}
function fb(e, t, n) {
  var o = Cr(e, t, n);
  return o > n ? n : o;
}
function Du() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function zu(e) {
  return Object.assign({}, Du(), e);
}
function Bu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var pb = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, zu(typeof e != "number" ? e : Bu(e, Br));
};
function mb(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Mn(n.placement), c = tl(i), u = [Ut, rn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = pb(r.padding, n), g = el(a), y = c === "y" ? Wt : Ut, h = c === "y" ? on : rn, b = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], E = s[c] - n.rects.reference[c], w = Fr(a), R = w ? c === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, F = b / 2 - E / 2, O = m[y], A = R - g[d] - m[h], x = R / 2 - g[d] / 2 + F, $ = Cr(O, x, A), K = c;
    n.modifiersData[o] = (t = {}, t[K] = $, t.centerOffset = $ - x, t);
  }
}
function hb(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Nu(t.elements.popper, r) && (t.elements.arrow = r));
}
var gb = { name: "arrow", enabled: !0, phase: "main", fn: mb, effect: hb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jo(e) {
  return e.split("-")[1];
}
var vb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function bb(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Xo(n * r) / r || 0, y: Xo(o * r) / r || 0 };
}
function qi(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, i = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = s.x, y = g === void 0 ? 0 : g, h = s.y, b = h === void 0 ? 0 : h, E = typeof d == "function" ? d({ x: y, y: b }) : { x: y, y: b };
  y = E.x, b = E.y;
  var w = s.hasOwnProperty("x"), R = s.hasOwnProperty("y"), F = Ut, O = Wt, A = window;
  if (u) {
    var x = Fr(n), $ = "clientHeight", K = "clientWidth";
    if (x === Qt(n) && (x = mo(n), to(x).position !== "static" && i === "absolute" && ($ = "scrollHeight", K = "scrollWidth")), x = x, r === Wt || (r === Ut || r === rn) && a === Rr) {
      O = on;
      var Z = m && x === A && A.visualViewport ? A.visualViewport.height : x[$];
      b -= Z - o.height, b *= c ? 1 : -1;
    }
    if (r === Ut || (r === Wt || r === on) && a === Rr) {
      F = rn;
      var re = m && x === A && A.visualViewport ? A.visualViewport.width : x[K];
      y -= re - o.width, y *= c ? 1 : -1;
    }
  }
  var H = Object.assign({ position: i }, u && vb), ae = d === !0 ? bb({ x: y, y: b }, Qt(n)) : { x: y, y: b };
  if (y = ae.x, b = ae.y, c) {
    var fe;
    return Object.assign({}, H, (fe = {}, fe[O] = R ? "0" : "", fe[F] = w ? "0" : "", fe.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", fe));
  }
  return Object.assign({}, H, (t = {}, t[O] = R ? b + "px" : "", t[F] = w ? y + "px" : "", t.transform = "", t));
}
function yb(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, c = i === void 0 ? !0 : i, u = { placement: Mn(t.placement), variation: Jo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qi(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qi(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Fu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: yb, data: {} }, Xr = { passive: !0 };
function wb(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, s = o.resize, i = s === void 0 ? !0 : s, c = Qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Xr);
  }), i && c.addEventListener("resize", n.update, Xr), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Xr);
    }), i && c.removeEventListener("resize", n.update, Xr);
  };
}
var ju = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: wb, data: {} }, kb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ns(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return kb[t];
  });
}
var _b = { start: "end", end: "start" };
function Zi(e) {
  return e.replace(/start|end/g, function(t) {
    return _b[t];
  });
}
function nl(e) {
  var t = Qt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function ol(e) {
  return Qo(mo(e)).left + nl(e).scrollLeft;
}
function Tb(e, t) {
  var n = Qt(e), o = mo(e), r = n.visualViewport, a = o.clientWidth, s = o.clientHeight, i = 0, c = 0;
  if (r) {
    a = r.width, s = r.height;
    var u = Pu();
    (u || !u && t === "fixed") && (i = r.offsetLeft, c = r.offsetTop);
  }
  return { width: a, height: s, x: i + ol(e), y: c };
}
function Sb(e) {
  var t, n = mo(e), o = nl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = Co(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Co(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + ol(e), c = -o.scrollTop;
  return to(r || n).direction === "rtl" && (i += Co(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: i, y: c };
}
function rl(e) {
  var t = to(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Vu(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0 ? e.ownerDocument.body : nn(e) && rl(e) ? e : Vu(Ms(e));
}
function Er(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Vu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Qt(o), s = r ? [a].concat(a.visualViewport || [], rl(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(Er(Ms(s)));
}
function ga(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Ab(e, t) {
  var n = Qo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yi(e, t, n) {
  return t === Ru ? ga(Tb(e, n)) : Io(t) ? Ab(t, n) : ga(Sb(mo(e)));
}
function Cb(e) {
  var t = Er(Ms(e)), n = ["absolute", "fixed"].indexOf(to(e).position) >= 0, o = n && nn(e) ? Fr(e) : e;
  return Io(o) ? t.filter(function(r) {
    return Io(r) && Nu(r, o) && Dn(r) !== "body";
  }) : [];
}
function Eb(e, t, n, o) {
  var r = t === "clippingParents" ? Cb(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], i = a.reduce(function(c, u) {
    var d = Yi(e, u, o);
    return c.top = Co(d.top, c.top), c.right = gs(d.right, c.right), c.bottom = gs(d.bottom, c.bottom), c.left = Co(d.left, c.left), c;
  }, Yi(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Hu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Mn(o) : null, a = o ? Jo(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
  switch (r) {
    case Wt:
      c = { x: s, y: t.y - n.height };
      break;
    case on:
      c = { x: s, y: t.y + t.height };
      break;
    case rn:
      c = { x: t.x + t.width, y: i };
      break;
    case Ut:
      c = { x: t.x - n.width, y: i };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = r ? tl(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Yo:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Rr:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Mr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, c = i === void 0 ? Y0 : i, u = n.rootBoundary, d = u === void 0 ? Ru : u, m = n.elementContext, g = m === void 0 ? pr : m, y = n.altBoundary, h = y === void 0 ? !1 : y, b = n.padding, E = b === void 0 ? 0 : b, w = zu(typeof E != "number" ? E : Bu(E, Br)), R = g === pr ? X0 : pr, F = e.rects.popper, O = e.elements[h ? R : g], A = Eb(Io(O) ? O : O.contextElement || mo(e.elements.popper), c, d, s), x = Qo(e.elements.reference), $ = Hu({ reference: x, element: F, placement: r }), K = ga(Object.assign({}, F, $)), Z = g === pr ? K : x, re = { top: A.top - Z.top + w.top, bottom: Z.bottom - A.bottom + w.bottom, left: A.left - Z.left + w.left, right: Z.right - A.right + w.right }, H = e.modifiersData.offset;
  if (g === pr && H) {
    var ae = H[r];
    Object.keys(re).forEach(function(fe) {
      var ce = [rn, on].indexOf(fe) >= 0 ? 1 : -1, M = [Wt, on].indexOf(fe) >= 0 ? "y" : "x";
      re[fe] += ae[M] * ce;
    });
  }
  return re;
}
function xb(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Rs : c, d = Jo(o), m = d ? i ? Gi : Gi.filter(function(h) {
    return Jo(h) === d;
  }) : Br, g = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  g.length === 0 && (g = m);
  var y = g.reduce(function(h, b) {
    return h[b] = Mr(e, { placement: b, boundary: r, rootBoundary: a, padding: s })[Mn(b)], h;
  }, {});
  return Object.keys(y).sort(function(h, b) {
    return y[h] - y[b];
  });
}
function Lb(e) {
  if (Mn(e) === Qa) return [];
  var t = ns(e);
  return [Zi(e), t, Zi(t)];
}
function Ib(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, g = n.altBoundary, y = n.flipVariations, h = y === void 0 ? !0 : y, b = n.allowedAutoPlacements, E = t.options.placement, w = Mn(E), R = w === E, F = c || (R || !h ? [ns(E)] : Lb(E)), O = [E].concat(F).reduce(function(ge, ve) {
      return ge.concat(Mn(ve) === Qa ? xb(t, { placement: ve, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: b }) : ve);
    }, []), A = t.rects.reference, x = t.rects.popper, $ = /* @__PURE__ */ new Map(), K = !0, Z = O[0], re = 0; re < O.length; re++) {
      var H = O[re], ae = Mn(H), fe = Jo(H) === Yo, ce = [Wt, on].indexOf(ae) >= 0, M = ce ? "width" : "height", j = Mr(t, { placement: H, boundary: d, rootBoundary: m, altBoundary: g, padding: u }), B = ce ? fe ? rn : Ut : fe ? on : Wt;
      A[M] > x[M] && (B = ns(B));
      var ie = ns(B), pe = [];
      if (a && pe.push(j[ae] <= 0), i && pe.push(j[B] <= 0, j[ie] <= 0), pe.every(function(ge) {
        return ge;
      })) {
        Z = H, K = !1;
        break;
      }
      $.set(H, pe);
    }
    if (K) for (var Te = h ? 3 : 1, Q = function(ge) {
      var ve = O.find(function(me) {
        var q = $.get(me);
        if (q) return q.slice(0, ge).every(function(ue) {
          return ue;
        });
      });
      if (ve) return Z = ve, "break";
    }, V = Te; V > 0; V--) {
      var Ae = Q(V);
      if (Ae === "break") break;
    }
    t.placement !== Z && (t.modifiersData[o]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var Ob = { name: "flip", enabled: !0, phase: "main", fn: Ib, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Xi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Qi(e) {
  return [Wt, rn, on, Ut].some(function(t) {
    return e[t] >= 0;
  });
}
function $b(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = Mr(t, { elementContext: "reference" }), i = Mr(t, { altBoundary: !0 }), c = Xi(s, o), u = Xi(i, r, a), d = Qi(c), m = Qi(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var Rb = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: $b };
function Mb(e, t, n) {
  var o = Mn(e), r = [Ut, Wt].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * r, [Ut, rn].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Pb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = Rs.reduce(function(d, m) {
    return d[m] = Mb(m, t.rects, a), d;
  }, {}), i = s[t.placement], c = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var Nb = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Pb };
function Db(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Hu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Wu = { name: "popperOffsets", enabled: !0, phase: "read", fn: Db, data: {} };
function zb(e) {
  return e === "x" ? "y" : "x";
}
function Bb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, g = n.tether, y = g === void 0 ? !0 : g, h = n.tetherOffset, b = h === void 0 ? 0 : h, E = Mr(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: d }), w = Mn(t.placement), R = Jo(t.placement), F = !R, O = tl(w), A = zb(O), x = t.modifiersData.popperOffsets, $ = t.rects.reference, K = t.rects.popper, Z = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, re = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ae = { x: 0, y: 0 };
  if (x) {
    if (a) {
      var fe, ce = O === "y" ? Wt : Ut, M = O === "y" ? on : rn, j = O === "y" ? "height" : "width", B = x[O], ie = B + E[ce], pe = B - E[M], Te = y ? -K[j] / 2 : 0, Q = R === Yo ? $[j] : K[j], V = R === Yo ? -K[j] : -$[j], Ae = t.elements.arrow, ge = y && Ae ? el(Ae) : { width: 0, height: 0 }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Du(), me = ve[ce], q = ve[M], ue = Cr(0, $[j], ge[j]), Be = F ? $[j] / 2 - Te - ue - me - re.mainAxis : Q - ue - me - re.mainAxis, ft = F ? -$[j] / 2 + Te + ue + q + re.mainAxis : V + ue + q + re.mainAxis, He = t.elements.arrow && Fr(t.elements.arrow), rt = He ? O === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, ht = (fe = H?.[O]) != null ? fe : 0, wt = B + Be - ht - rt, gt = B + ft - ht, ut = Cr(y ? gs(ie, wt) : ie, B, y ? Co(pe, gt) : pe);
      x[O] = ut, ae[O] = ut - B;
    }
    if (i) {
      var kt, Qe = O === "x" ? Wt : Ut, Mt = O === "x" ? on : rn, st = x[A], tt = A === "y" ? "height" : "width", Gt = st + E[Qe], Pt = st - E[Mt], G = [Wt, Ut].indexOf(w) !== -1, we = (kt = H?.[A]) != null ? kt : 0, Ee = G ? Gt : st - $[tt] - K[tt] - we + re.altAxis, Nt = G ? st + $[tt] + K[tt] - we - re.altAxis : Pt, Me = y && G ? fb(Ee, st, Nt) : Cr(y ? Ee : Gt, st, y ? Nt : Pt);
      x[A] = Me, ae[A] = Me - st;
    }
    t.modifiersData[o] = ae;
  }
}
var Fb = { name: "preventOverflow", enabled: !0, phase: "main", fn: Bb, requiresIfExists: ["offset"] };
function jb(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Vb(e) {
  return e === Qt(e) || !nn(e) ? nl(e) : jb(e);
}
function Hb(e) {
  var t = e.getBoundingClientRect(), n = Xo(t.width) / e.offsetWidth || 1, o = Xo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Wb(e, t, n) {
  n === void 0 && (n = !1);
  var o = nn(t), r = nn(t) && Hb(t), a = mo(t), s = Qo(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (o || !o && !n) && ((Dn(t) !== "body" || rl(a)) && (i = Vb(t)), nn(t) ? (c = Qo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = ol(a))), { x: s.left + i.scrollLeft - c.x, y: s.top + i.scrollTop - c.y, width: s.width, height: s.height };
}
function Ub(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var c = t.get(i);
        c && r(c);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Gb(e) {
  var t = Ub(e);
  return lb.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Kb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function qb(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ji = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ec() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function sl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? Ji : r;
  return function(s, i, c) {
    c === void 0 && (c = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ji, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, g = { state: u, setOptions: function(b) {
      var E = typeof b == "function" ? b(u.options) : b;
      h(), u.options = Object.assign({}, a, u.options, E), u.scrollParents = { reference: Io(s) ? Er(s) : s.contextElement ? Er(s.contextElement) : [], popper: Er(i) };
      var w = Gb(qb([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = w.filter(function(R) {
        return R.enabled;
      }), y(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, E = b.reference, w = b.popper;
        if (ec(E, w)) {
          u.rects = { reference: Wb(E, Fr(w), u.options.strategy === "fixed"), popper: el(w) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(K) {
            return u.modifiersData[K.name] = Object.assign({}, K.data);
          });
          for (var R = 0; R < u.orderedModifiers.length; R++) {
            if (u.reset === !0) {
              u.reset = !1, R = -1;
              continue;
            }
            var F = u.orderedModifiers[R], O = F.fn, A = F.options, x = A === void 0 ? {} : A, $ = F.name;
            typeof O == "function" && (u = O({ state: u, options: x, name: $, instance: g }) || u);
          }
        }
      }
    }, update: Kb(function() {
      return new Promise(function(b) {
        g.forceUpdate(), b(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!ec(s, i)) return g;
    g.setOptions(c).then(function(b) {
      !m && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function y() {
      u.orderedModifiers.forEach(function(b) {
        var E = b.name, w = b.options, R = w === void 0 ? {} : w, F = b.effect;
        if (typeof F == "function") {
          var O = F({ state: u, name: E, instance: g, options: R }), A = function() {
          };
          d.push(O || A);
        }
      });
    }
    function h() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return g;
  };
}
sl();
var Zb = [ju, Wu, Fu, Mu];
sl({ defaultModifiers: Zb });
var Yb = [ju, Wu, Fu, Mu, Nb, Ob, Fb, gb, Rb], Xb = sl({ defaultModifiers: Yb });
const Qb = ["fixed", "absolute"], Jb = ze({
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
    values: Rs,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Qb,
    default: "absolute"
  }
}), Uu = ze({
  ...Jb,
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
  ...Po(["ariaLabel"])
}), e1 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, t1 = (e, t) => {
  const n = P(!1), o = P();
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
}, n1 = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...r1(e), ...t]
  };
  return s1(a, r?.modifiers), a;
}, o1 = (e) => {
  if (qe)
    return qn(e);
};
function r1(e) {
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
function s1(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const a1 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = l1(c);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = C(() => {
    const { onFirstUpdate: c, placement: u, strategy: d, modifiers: m } = l(n);
    return {
      onFirstUpdate: c,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...m || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = uo(), s = P({
    styles: {
      popper: {
        position: l(r).strategy,
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
  return de(r, (c) => {
    const u = l(a);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), de([e, t], ([c, u]) => {
    i(), !(!c || !u) && (a.value = Xb(c, u, l(r)));
  }), wn(() => {
    i();
  }), {
    state: C(() => {
      var c;
      return { ...((c = l(a)) == null ? void 0 : c.state) || {} };
    }),
    styles: C(() => l(s).styles),
    attributes: C(() => l(s).attributes),
    update: () => {
      var c;
      return (c = l(a)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = l(a)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: C(() => l(a))
  };
};
function l1(e) {
  const t = Object.keys(e.elements), n = us(t.map((r) => [r, e.styles[r] || {}])), o = us(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const i1 = 0, c1 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = Re(Za, void 0), a = P(), s = P(), i = C(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = C(() => {
    var w;
    const R = l(a), F = (w = l(s)) != null ? w : i1;
    return {
      name: "arrow",
      enabled: !Jc(R),
      options: {
        element: R,
        padding: F
      }
    };
  }), u = C(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...n1(e, [
      l(c),
      l(i)
    ])
  })), d = C(() => o1(e.referenceEl) || l(o)), { attributes: m, state: g, styles: y, update: h, forceUpdate: b, instanceRef: E } = a1(d, n, u);
  return de(E, (w) => t.value = w), et(() => {
    de(() => {
      var w;
      return (w = l(d)) == null ? void 0 : w.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: g,
    styles: y,
    role: r,
    forceUpdate: b,
    update: h
  };
}, u1 = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ja(), a = Ye("popper"), s = C(() => l(t).popper), i = P($e(e.zIndex) ? e.zIndex : r()), c = C(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = C(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = C(() => o.value === "dialog" ? "false" : void 0), m = C(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: c,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = $e(e.zIndex) ? e.zIndex : r();
    }
  };
}, d1 = oe({
  name: "ElPopperContent"
}), f1 = /* @__PURE__ */ oe({
  ...d1,
  props: Uu,
  emits: e1,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = t1(o, n), { attributes: m, arrowRef: g, contentRef: y, styles: h, instanceRef: b, role: E, update: w } = c1(o), {
      ariaModal: R,
      arrowStyle: F,
      contentAttrs: O,
      contentClass: A,
      contentStyle: x,
      updateZIndex: $
    } = u1(o, {
      styles: h,
      attributes: m,
      role: E
    }), K = Re(hs, void 0), Z = P();
    bn(Su, {
      arrowStyle: F,
      arrowRef: g,
      arrowOffset: Z
    }), K && bn(hs, {
      ...K,
      addInputId: fo,
      removeInputId: fo
    });
    let re;
    const H = (fe = !0) => {
      w(), fe && $();
    }, ae = () => {
      H(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return et(() => {
      de(() => o.triggerTargetEl, (fe, ce) => {
        re?.(), re = void 0;
        const M = l(fe || y.value), j = l(ce || y.value);
        gn(M) && (re = de([E, () => o.ariaLabel, R, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ie, pe) => {
            Yn(B[pe]) ? M.removeAttribute(ie) : M.setAttribute(ie, B[pe]);
          });
        }, { immediate: !0 })), j !== M && gn(j) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          j.removeAttribute(B);
        });
      }, { immediate: !0 }), de(() => o.visible, ae, { immediate: !0 });
    }), wn(() => {
      re?.(), re = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: b,
      updatePopper: H,
      contentStyle: x
    }), (fe, ce) => (T(), N("div", Eo({
      ref_key: "contentRef",
      ref: y
    }, l(O), {
      style: l(x),
      class: l(A),
      tabindex: "-1",
      onMouseenter: (M) => fe.$emit("mouseenter", M),
      onMouseleave: (M) => fe.$emit("mouseleave", M)
    }), [
      _(l($u), {
        trapped: l(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(y),
        "focus-start-el": l(r),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(s),
        onFocusin: l(c),
        onFocusoutPrevented: l(u),
        onReleaseRequested: l(d)
      }, {
        default: X(() => [
          le(fe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var p1 = /* @__PURE__ */ je(f1, [["__file", "content.vue"]]);
const m1 = an(E0), al = Symbol("elTooltip");
function tc() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Dr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const h1 = ze({
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
}), g1 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = tc(), {
    registerTimeout: s,
    cancelTimeout: i
  } = tc();
  return {
    onOpen: (d) => {
      a(() => {
        o(d);
        const m = l(n);
        $e(m) && m > 0 && s(() => {
          r(d);
        }, m);
      }, l(e));
    },
    onClose: (d) => {
      i(), a(() => {
        r(d);
      }, l(t));
    }
  };
}, ll = ze({
  ...h1,
  ...Uu,
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
  ...Po(["ariaLabel"])
}), Gu = ze({
  ...Eu,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [Rn.enter, Rn.numpadEnter, Rn.space]
  }
}), v1 = Ls({
  type: he(Boolean),
  default: null
}), b1 = Ls({
  type: he(Function)
}), y1 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: v1,
    [n]: b1
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: c,
      shouldProceed: u,
      onShow: d,
      onHide: m
    }) => {
      const g = Et(), { emit: y } = g, h = g.props, b = C(() => Ke(h[n])), E = C(() => h[e] === null), w = ($) => {
        s.value !== !0 && (s.value = !0, i && (i.value = $), Ke(d) && d($));
      }, R = ($) => {
        s.value !== !1 && (s.value = !1, i && (i.value = $), Ke(m) && m($));
      }, F = ($) => {
        if (h.disabled === !0 || Ke(u) && !u())
          return;
        const K = b.value && qe;
        K && y(t, !0), (E.value || !K) && w($);
      }, O = ($) => {
        if (h.disabled === !0 || !qe)
          return;
        const K = b.value && qe;
        K && y(t, !1), (E.value || !K) && R($);
      }, A = ($) => {
        Xn($) && (h.disabled && $ ? b.value && y(t, !1) : s.value !== $ && ($ ? w() : R()));
      }, x = () => {
        s.value ? O() : F();
      };
      return de(() => h[e], A), c && g.appContext.config.globalProperties.$route !== void 0 && de(() => ({
        ...g.proxy.$route
      }), () => {
        c.value && s.value && O();
      }), et(() => {
        A(h[e]);
      }), {
        hide: O,
        show: F,
        toggle: x,
        hasUpdateHandler: b
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: w1,
  useModelToggleEmits: k1,
  useModelToggle: _1
} = y1("visible"), T1 = ze({
  ...Au,
  ...w1,
  ...ll,
  ...Gu,
  ...Cu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), S1 = [
  ...k1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], A1 = (e, t) => On(e) ? e.includes(t) : e === t, Vo = (e, t, n) => (o) => {
  A1(l(e), t) && n(o);
}, Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, C1 = oe({
  name: "ElTooltipTrigger"
}), E1 = /* @__PURE__ */ oe({
  ...C1,
  props: Gu,
  setup(e, { expose: t }) {
    const n = e, o = Ye("tooltip"), { controlled: r, id: a, open: s, onOpen: i, onClose: c, onToggle: u } = Re(al, void 0), d = P(null), m = () => {
      if (l(r) || n.disabled)
        return !0;
    }, g = Kn(n, "trigger"), y = Gn(m, Vo(g, "hover", i)), h = Gn(m, Vo(g, "hover", c)), b = Gn(m, Vo(g, "click", (O) => {
      O.button === 0 && u(O);
    })), E = Gn(m, Vo(g, "focus", i)), w = Gn(m, Vo(g, "focus", c)), R = Gn(m, Vo(g, "contextmenu", (O) => {
      O.preventDefault(), u(O);
    })), F = Gn(m, (O) => {
      const { code: A } = O;
      n.triggerKeys.includes(A) && (O.preventDefault(), u(O));
    });
    return t({
      triggerRef: d
    }), (O, A) => (T(), ee(l(D0), {
      id: l(a),
      "virtual-ref": O.virtualRef,
      open: l(s),
      "virtual-triggering": O.virtualTriggering,
      class: D(l(o).e("trigger")),
      onBlur: l(w),
      onClick: l(b),
      onContextmenu: l(R),
      onFocus: l(E),
      onMouseenter: l(y),
      onMouseleave: l(h),
      onKeydown: l(F)
    }, {
      default: X(() => [
        le(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var x1 = /* @__PURE__ */ je(E1, [["__file", "trigger.vue"]]);
const L1 = ze({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), I1 = /* @__PURE__ */ oe({
  __name: "teleport",
  props: L1,
  setup(e) {
    return (t, n) => t.disabled ? le(t.$slots, "default", { key: 0 }) : (T(), ee(cf, {
      key: 1,
      to: t.to
    }, [
      le(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var O1 = /* @__PURE__ */ je(I1, [["__file", "teleport.vue"]]);
const Ku = an(O1), qu = () => {
  const e = $a(), t = wu(), n = C(() => `${e.value}-popper-container-${t.prefix}`), o = C(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, $1 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, R1 = () => {
  const { id: e, selector: t } = qu();
  return uf(() => {
    qe && (document.body.querySelector(t.value) || $1(e.value));
  }), {
    id: e,
    selector: t
  };
}, M1 = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), P1 = /* @__PURE__ */ oe({
  ...M1,
  props: ll,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = qu(), r = Ye("tooltip"), a = P();
    let s;
    const {
      controlled: i,
      id: c,
      open: u,
      trigger: d,
      onClose: m,
      onOpen: g,
      onShow: y,
      onHide: h,
      onBeforeShow: b,
      onBeforeHide: E
    } = Re(al, void 0), w = C(() => n.transition || `${r.namespace.value}-fade-in-linear`), R = C(() => n.persistent);
    wn(() => {
      s?.();
    });
    const F = C(() => l(R) ? !0 : l(u)), O = C(() => n.disabled ? !1 : l(u)), A = C(() => n.appendTo || o.value), x = C(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), $ = P(!0), K = () => {
      h(), j() && Un(document.body), $.value = !0;
    }, Z = () => {
      if (l(i))
        return !0;
    }, re = Gn(Z, () => {
      n.enterable && l(d) === "hover" && g();
    }), H = Gn(Z, () => {
      l(d) === "hover" && m();
    }), ae = () => {
      var B, ie;
      (ie = (B = a.value) == null ? void 0 : B.updatePopper) == null || ie.call(B), b?.();
    }, fe = () => {
      E?.();
    }, ce = () => {
      y(), s = Vg(C(() => {
        var B;
        return (B = a.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && m();
      });
    }, M = () => {
      n.virtualTriggering || m();
    }, j = (B) => {
      var ie;
      const pe = (ie = a.value) == null ? void 0 : ie.popperContentRef, Te = B?.relatedTarget || document.activeElement;
      return pe?.contains(Te);
    };
    return de(() => l(u), (B) => {
      B ? $.value = !1 : s?.();
    }, {
      flush: "post"
    }), de(() => n.content, () => {
      var B, ie;
      (ie = (B = a.value) == null ? void 0 : B.updatePopper) == null || ie.call(B);
    }), t({
      contentRef: a,
      isFocusInsideContent: j
    }), (B, ie) => (T(), ee(l(Ku), {
      disabled: !B.teleported,
      to: l(A)
    }, {
      default: X(() => [
        _($o, {
          name: l(w),
          onAfterLeave: K,
          onBeforeEnter: ae,
          onAfterEnter: ce,
          onBeforeLeave: fe
        }, {
          default: X(() => [
            l(F) ? it((T(), ee(l(p1), Eo({
              key: 0,
              id: l(c),
              ref_key: "contentRef",
              ref: a
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": $.value,
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
              "popper-style": [B.popperStyle, l(x)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: l(O),
              "z-index": B.zIndex,
              onMouseenter: l(re),
              onMouseleave: l(H),
              onBlur: M,
              onClose: l(m)
            }), {
              default: X(() => [
                le(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Pn, l(O)]
            ]) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var N1 = /* @__PURE__ */ je(P1, [["__file", "content.vue"]]);
const D1 = oe({
  name: "ElTooltip"
}), z1 = /* @__PURE__ */ oe({
  ...D1,
  props: T1,
  emits: S1,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    R1();
    const r = Zo(), a = P(), s = P(), i = () => {
      var w;
      const R = l(a);
      R && ((w = R.popperInstanceRef) == null || w.update());
    }, c = P(!1), u = P(), { show: d, hide: m, hasUpdateHandler: g } = _1({
      indicator: c,
      toggleReason: u
    }), { onOpen: y, onClose: h } = g1({
      showAfter: Kn(o, "showAfter"),
      hideAfter: Kn(o, "hideAfter"),
      autoClose: Kn(o, "autoClose"),
      open: d,
      close: m
    }), b = C(() => Xn(o.visible) && !g.value);
    bn(al, {
      controlled: b,
      id: r,
      open: xa(c),
      trigger: Kn(o, "trigger"),
      onOpen: (w) => {
        y(w);
      },
      onClose: (w) => {
        h(w);
      },
      onToggle: (w) => {
        l(c) ? h(w) : y(w);
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
    }), de(() => o.disabled, (w) => {
      w && c.value && (c.value = !1);
    });
    const E = (w) => {
      var R;
      return (R = s.value) == null ? void 0 : R.isFocusInsideContent(w);
    };
    return df(() => c.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: y,
      onClose: h,
      hide: m
    }), (w, R) => (T(), ee(l(m1), {
      ref_key: "popperRef",
      ref: a,
      role: w.role
    }, {
      default: X(() => [
        _(x1, {
          disabled: w.disabled,
          trigger: w.trigger,
          "trigger-keys": w.triggerKeys,
          "virtual-ref": w.virtualRef,
          "virtual-triggering": w.virtualTriggering
        }, {
          default: X(() => [
            w.$slots.default ? le(w.$slots, "default", { key: 0 }) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        _(N1, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": w.ariaLabel,
          "boundaries-padding": w.boundariesPadding,
          content: w.content,
          disabled: w.disabled,
          effect: w.effect,
          enterable: w.enterable,
          "fallback-placements": w.fallbackPlacements,
          "hide-after": w.hideAfter,
          "gpu-acceleration": w.gpuAcceleration,
          offset: w.offset,
          persistent: w.persistent,
          "popper-class": w.popperClass,
          "popper-style": w.popperStyle,
          placement: w.placement,
          "popper-options": w.popperOptions,
          pure: w.pure,
          "raw-content": w.rawContent,
          "reference-el": w.referenceEl,
          "trigger-target-el": w.triggerTargetEl,
          "show-after": w.showAfter,
          strategy: w.strategy,
          teleported: w.teleported,
          transition: w.transition,
          "virtual-triggering": w.virtualTriggering,
          "z-index": w.zIndex,
          "append-to": w.appendTo
        }, {
          default: X(() => [
            le(w.$slots, "content", {}, () => [
              w.rawContent ? (T(), N("span", {
                key: 0,
                innerHTML: w.content
              }, null, 8, ["innerHTML"])) : (T(), N("span", { key: 1 }, L(w.content), 1))
            ]),
            w.showArrow ? (T(), ee(l(I0), {
              key: 0,
              "arrow-offset": w.arrowOffset
            }, null, 8, ["arrow-offset"])) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var B1 = /* @__PURE__ */ je(z1, [["__file", "tooltip.vue"]]);
const F1 = an(B1), j1 = ze({
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
}), V1 = oe({
  name: "ElBadge"
}), H1 = /* @__PURE__ */ oe({
  ...V1,
  props: j1,
  setup(e, { expose: t }) {
    const n = e, o = Ye("badge"), r = C(() => n.isDot ? "" : $e(n.value) && $e(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = C(() => {
      var s, i, c, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: eo(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: eo((u = (c = n.offset) == null ? void 0 : c[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: r
    }), (s, i) => (T(), N("div", {
      class: D(l(o).b())
    }, [
      le(s.$slots, "default"),
      _($o, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: X(() => [
          it(f("sup", {
            class: D([
              l(o).e("content"),
              l(o).em("content", s.type),
              l(o).is("fixed", !!s.$slots.default),
              l(o).is("dot", s.isDot),
              l(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: dt(l(a))
          }, [
            le(s.$slots, "content", { value: l(r) }, () => [
              mt(L(l(r)), 1)
            ])
          ], 6), [
            [Pn, !s.hidden && (l(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var W1 = /* @__PURE__ */ je(H1, [["__file", "badge.vue"]]);
const U1 = an(W1), G1 = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: a = "API" }, s) => {
  de(() => l(s), (i) => {
  }, {
    immediate: !0
  });
};
var os = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(os || {});
const K1 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), va = ze({
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
    values: Va
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), q1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Z1 = oe({
  name: "ElTag"
}), Y1 = /* @__PURE__ */ oe({
  ...Z1,
  props: va,
  emits: q1,
  setup(e, { emit: t }) {
    const n = e, o = zr(), r = Ye("tag"), a = C(() => {
      const { type: u, hit: d, effect: m, closable: g, round: y } = n;
      return [
        r.b(),
        r.is("closable", g),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(m),
        r.is("hit", d),
        r.is("round", y)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, c = (u) => {
      var d, m, g;
      (g = (m = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : m.component) != null && g.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (T(), N("span", {
      key: 0,
      class: D(l(a)),
      style: dt({ backgroundColor: u.color }),
      onClick: i
    }, [
      f("span", {
        class: D(l(r).e("content"))
      }, [
        le(u.$slots, "default")
      ], 2),
      u.closable ? (T(), ee(l(nt), {
        key: 0,
        class: D(l(r).e("close")),
        onClick: Ue(s, ["stop"])
      }, {
        default: X(() => [
          _(l(ps))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : U("v-if", !0)
    ], 6)) : (T(), ee($o, {
      key: 1,
      name: `${l(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: c
    }, {
      default: X(() => [
        f("span", {
          class: D(l(a)),
          style: dt({ backgroundColor: u.color }),
          onClick: i
        }, [
          f("span", {
            class: D(l(r).e("content"))
          }, [
            le(u.$slots, "default")
          ], 2),
          u.closable ? (T(), ee(l(nt), {
            key: 0,
            class: D(l(r).e("close")),
            onClick: Ue(s, ["stop"])
          }, {
            default: X(() => [
              _(l(ps))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var X1 = /* @__PURE__ */ je(Y1, [["__file", "tag.vue"]]);
const Q1 = an(X1), ao = /* @__PURE__ */ new Map();
if (qe) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of ao.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function nc(e, t) {
  let n = [];
  return On(t.arg) ? n = t.arg : gn(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, s = o.target, i = r?.target, c = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), m = e === s, g = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    c || u || d || m || g || y || t.value(o, r);
  };
}
const J1 = {
  beforeMount(e, t) {
    ao.has(e) || ao.set(e, []), ao.get(e).push({
      documentHandler: nc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ao.has(e) || ao.set(e, []);
    const n = ao.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: nc(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ao.delete(e);
  }
}, ey = ze({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: Is,
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
  ...iu
}), un = {};
oe({
  name: "ElConfigProvider",
  props: ey,
  setup(e, { slots: t }) {
    de(() => e.message, (o) => {
      Object.assign(un, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = uu(e);
    return () => le(t, "default", { config: n?.value });
  }
});
const ty = 100, ny = 600, oc = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = ty, delay: r = ny } = Ke(n) ? {} : n;
    let a, s;
    const i = () => Ke(n) ? n() : n.handler(), c = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (c(), i(), document.addEventListener("mouseup", () => c(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          i();
        }, o);
      }, r));
    });
  }
}, Zu = (e) => {
  if (!e)
    return { onClick: fo, onMousedown: fo, onMouseup: fo };
  let t = !1, n = !1;
  return { onClick: (s) => {
    t && n && e(s), t = n = !1;
  }, onMousedown: (s) => {
    t = s.target === s.currentTarget;
  }, onMouseup: (s) => {
    n = s.target === s.currentTarget;
  } };
}, oy = ze({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: he([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: he([String, Number])
  }
}), ry = {
  click: (e) => e instanceof MouseEvent
}, sy = "overlay";
var ay = oe({
  name: "ElOverlay",
  props: oy,
  emits: ry,
  setup(e, { slots: t, emit: n }) {
    const o = Ye(sy), r = (c) => {
      n("click", c);
    }, { onClick: a, onMousedown: s, onMouseup: i } = Zu(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? _("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: s,
      onMouseup: i
    }, [le(t, "default")], os.STYLE | os.CLASS | os.PROPS, ["onClick", "onMouseup", "onMousedown"]) : ff("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [le(t, "default")]);
  }
});
const ly = ay, Yu = Symbol("dialogInjectionKey"), Xu = ze({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: mn
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
}), iy = {
  close: () => !0
}, cy = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const a = (u) => {
    const d = u.clientX, m = u.clientY, { offsetX: g, offsetY: y } = r, h = e.value.getBoundingClientRect(), b = h.left, E = h.top, w = h.width, R = h.height, F = document.documentElement.clientWidth, O = document.documentElement.clientHeight, A = -b + g, x = -E + y, $ = F - b - w + g, K = O - E - R + y, Z = (H) => {
      let ae = g + H.clientX - d, fe = y + H.clientY - m;
      o?.value || (ae = Math.min(Math.max(ae, A), $), fe = Math.min(Math.max(fe, x), K)), r = {
        offsetX: ae,
        offsetY: fe
      }, e.value && (e.value.style.transform = `translate(${eo(ae)}, ${eo(fe)})`);
    }, re = () => {
      document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", re);
    };
    document.addEventListener("mousemove", Z), document.addEventListener("mouseup", re);
  }, s = () => {
    t.value && e.value && t.value.addEventListener("mousedown", a);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", a);
  }, c = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return et(() => {
    Ea(() => {
      n.value ? s() : i();
    });
  }), wn(() => {
    i();
  }), {
    resetPosition: c
  };
}, uy = (...e) => (t) => {
  e.forEach((n) => {
    Ke(n) ? n(t) : n.value = t;
  });
}, dy = oe({ name: "ElDialogContent" }), fy = /* @__PURE__ */ oe({
  ...dy,
  props: Xu,
  emits: iy,
  setup(e, { expose: t }) {
    const n = e, { t: o } = xs(), { Close: r } = gu, { dialogRef: a, headerRef: s, bodyId: i, ns: c, style: u } = Re(Yu), { focusTrapRef: d } = Re(Iu), m = C(() => [
      c.b(),
      c.is("fullscreen", n.fullscreen),
      c.is("draggable", n.draggable),
      c.is("align-center", n.alignCenter),
      { [c.m("center")]: n.center }
    ]), g = uy(d, a), y = C(() => n.draggable), h = C(() => n.overflow), { resetPosition: b } = cy(a, s, y, h);
    return t({
      resetPosition: b
    }), (E, w) => (T(), N("div", {
      ref: l(g),
      class: D(l(m)),
      style: dt(l(u)),
      tabindex: "-1"
    }, [
      f("header", {
        ref_key: "headerRef",
        ref: s,
        class: D([l(c).e("header"), E.headerClass, { "show-close": E.showClose }])
      }, [
        le(E.$slots, "header", {}, () => [
          f("span", {
            role: "heading",
            "aria-level": E.ariaLevel,
            class: D(l(c).e("title"))
          }, L(E.title), 11, ["aria-level"])
        ]),
        E.showClose ? (T(), N("button", {
          key: 0,
          "aria-label": l(o)("el.dialog.close"),
          class: D(l(c).e("headerbtn")),
          type: "button",
          onClick: (R) => E.$emit("close")
        }, [
          _(l(nt), {
            class: D(l(c).e("close"))
          }, {
            default: X(() => [
              (T(), ee(yt(E.closeIcon || l(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : U("v-if", !0)
      ], 2),
      f("div", {
        id: l(i),
        class: D([l(c).e("body"), E.bodyClass])
      }, [
        le(E.$slots, "default")
      ], 10, ["id"]),
      E.$slots.footer ? (T(), N("footer", {
        key: 0,
        class: D([l(c).e("footer"), E.footerClass])
      }, [
        le(E.$slots, "footer")
      ], 2)) : U("v-if", !0)
    ], 6));
  }
});
var py = /* @__PURE__ */ je(fy, [["__file", "dialog-content.vue"]]);
const my = ze({
  ...Xu,
  appendToBody: Boolean,
  appendTo: {
    type: he([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: he(Function)
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
}), hy = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [lt]: (e) => Xn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, gy = (e, t = {}) => {
  tn(e) || Es("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || Ye("popup"), o = C(() => n.bm("parent", "hidden"));
  if (!qe || Ri(document.body, o.value))
    return;
  let r = 0, a = !1, s = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || a && document && (document.body.style.width = s, pv(document.body, o.value));
    }, 200);
  };
  de(e, (c) => {
    if (!c) {
      i();
      return;
    }
    a = !Ri(document.body, o.value), a && (s = document.body.style.width, fv(document.body, o.value)), r = hv(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = mv(document.body, "overflowY");
    r > 0 && (u || d === "scroll") && a && (document.body.style.width = `calc(100% - ${r}px)`);
  }), $c(() => i());
}, vy = (e, t) => {
  var n;
  const r = Et().emit, { nextZIndex: a } = ja();
  let s = "";
  const i = Zo(), c = Zo(), u = P(!1), d = P(!1), m = P(!1), g = P((n = e.zIndex) != null ? n : a());
  let y, h;
  const b = Ha("namespace", Tr), E = C(() => {
    const M = {}, j = `--${b.value}-dialog`;
    return e.fullscreen || (e.top && (M[`${j}-margin-top`] = e.top), e.width && (M[`${j}-width`] = eo(e.width))), M;
  }), w = C(() => e.alignCenter ? { display: "flex" } : {});
  function R() {
    r("opened");
  }
  function F() {
    r("closed"), r(lt, !1), e.destroyOnClose && (m.value = !1);
  }
  function O() {
    r("close");
  }
  function A() {
    h?.(), y?.(), e.openDelay && e.openDelay > 0 ? { stop: y } = ds(() => Z(), e.openDelay) : Z();
  }
  function x() {
    y?.(), h?.(), e.closeDelay && e.closeDelay > 0 ? { stop: h } = ds(() => re(), e.closeDelay) : re();
  }
  function $() {
    function M(j) {
      j || (d.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(M) : x();
  }
  function K() {
    e.closeOnClickModal && $();
  }
  function Z() {
    qe && (u.value = !0);
  }
  function re() {
    u.value = !1;
  }
  function H() {
    r("openAutoFocus");
  }
  function ae() {
    r("closeAutoFocus");
  }
  function fe(M) {
    var j;
    ((j = M.detail) == null ? void 0 : j.focusReason) === "pointer" && M.preventDefault();
  }
  e.lockScroll && gy(u);
  function ce() {
    e.closeOnPressEscape && $();
  }
  return de(() => e.modelValue, (M) => {
    M ? (d.value = !1, A(), m.value = !0, g.value = Jc(e.zIndex) ? a() : g.value++, Ge(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && x();
  }), de(() => e.fullscreen, (M) => {
    t.value && (M ? (s = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = s);
  }), et(() => {
    e.modelValue && (u.value = !0, m.value = !0, A());
  }), {
    afterEnter: R,
    afterLeave: F,
    beforeLeave: O,
    handleClose: $,
    onModalClick: K,
    close: x,
    doClose: re,
    onOpenAutoFocus: H,
    onCloseAutoFocus: ae,
    onCloseRequested: ce,
    onFocusoutPrevented: fe,
    titleId: i,
    bodyId: c,
    closed: d,
    style: E,
    overlayDialogStyle: w,
    rendered: m,
    visible: u,
    zIndex: g
  };
}, by = oe({
  name: "ElDialog",
  inheritAttrs: !1
}), yy = /* @__PURE__ */ oe({
  ...by,
  props: my,
  emits: hy,
  setup(e, { expose: t }) {
    const n = e, o = Rc();
    G1({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, C(() => !!o.title));
    const r = Ye("dialog"), a = P(), s = P(), i = P(), {
      visible: c,
      titleId: u,
      bodyId: d,
      style: m,
      overlayDialogStyle: g,
      rendered: y,
      zIndex: h,
      afterEnter: b,
      afterLeave: E,
      beforeLeave: w,
      handleClose: R,
      onModalClick: F,
      onOpenAutoFocus: O,
      onCloseAutoFocus: A,
      onCloseRequested: x,
      onFocusoutPrevented: $
    } = vy(n, a);
    bn(Yu, {
      dialogRef: a,
      headerRef: s,
      bodyId: d,
      ns: r,
      rendered: y,
      style: m
    });
    const K = Zu(F), Z = C(() => n.draggable && !n.fullscreen);
    return t({
      visible: c,
      dialogContentRef: i,
      resetPosition: () => {
        var H;
        (H = i.value) == null || H.resetPosition();
      }
    }), (H, ae) => (T(), ee(l(Ku), {
      to: H.appendTo,
      disabled: H.appendTo !== "body" ? !1 : !H.appendToBody
    }, {
      default: X(() => [
        _($o, {
          name: "dialog-fade",
          onAfterEnter: l(b),
          onAfterLeave: l(E),
          onBeforeLeave: l(w),
          persisted: ""
        }, {
          default: X(() => [
            it(_(l(ly), {
              "custom-mask-event": "",
              mask: H.modal,
              "overlay-class": H.modalClass,
              "z-index": l(h)
            }, {
              default: X(() => [
                f("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": H.title || void 0,
                  "aria-labelledby": H.title ? void 0 : l(u),
                  "aria-describedby": l(d),
                  class: D(`${l(r).namespace.value}-overlay-dialog`),
                  style: dt(l(g)),
                  onClick: l(K).onClick,
                  onMousedown: l(K).onMousedown,
                  onMouseup: l(K).onMouseup
                }, [
                  _(l($u), {
                    loop: "",
                    trapped: l(c),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: l(O),
                    onFocusAfterReleased: l(A),
                    onFocusoutPrevented: l($),
                    onReleaseRequested: l(x)
                  }, {
                    default: X(() => [
                      l(y) ? (T(), ee(py, Eo({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, H.$attrs, {
                        center: H.center,
                        "align-center": H.alignCenter,
                        "close-icon": H.closeIcon,
                        draggable: l(Z),
                        overflow: H.overflow,
                        fullscreen: H.fullscreen,
                        "header-class": H.headerClass,
                        "body-class": H.bodyClass,
                        "footer-class": H.footerClass,
                        "show-close": H.showClose,
                        title: H.title,
                        "aria-level": H.headerAriaLevel,
                        onClose: l(R)
                      }), Ia({
                        header: X(() => [
                          H.$slots.title ? le(H.$slots, "title", { key: 1 }) : le(H.$slots, "header", {
                            key: 0,
                            close: l(R),
                            titleId: l(u),
                            titleClass: l(r).e("title")
                          })
                        ]),
                        default: X(() => [
                          le(H.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        H.$slots.footer ? {
                          name: "footer",
                          fn: X(() => [
                            le(H.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : U("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Pn, l(c)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var wy = /* @__PURE__ */ je(yy, [["__file", "dialog.vue"]]);
const ky = an(wy), _y = ze({
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
  size: Is,
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
    validator: (e) => e === null || $e(e) || ["min", "max"].includes(e),
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
  ...Po(["ariaLabel"])
}), Ty = {
  [Jn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Qn]: (e) => $e(e) || Yn(e),
  [lt]: (e) => $e(e) || Yn(e)
}, Sy = oe({
  name: "ElInputNumber"
}), Ay = /* @__PURE__ */ oe({
  ...Sy,
  props: _y,
  emits: Ty,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = xs(), a = Ye("input-number"), s = P(), i = xo({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: c } = Os(), u = C(() => $e(o.modelValue) && o.modelValue <= o.min), d = C(() => $e(o.modelValue) && o.modelValue >= o.max), m = C(() => {
      const M = w(o.step);
      return $n(o.precision) ? Math.max(w(o.modelValue), M) : (M > o.precision, o.precision);
    }), g = C(() => o.controls && o.controlsPosition === "right"), y = zr(), h = Ka(), b = C(() => {
      if (i.userInput !== null)
        return i.userInput;
      let M = i.currentValue;
      if (Yn(M))
        return "";
      if ($e(M)) {
        if (Number.isNaN(M))
          return "";
        $n(o.precision) || (M = M.toFixed(o.precision));
      }
      return M;
    }), E = (M, j) => {
      if ($n(j) && (j = m.value), j === 0)
        return Math.round(M);
      let B = String(M);
      const ie = B.indexOf(".");
      if (ie === -1 || !B.replace(".", "").split("")[ie + j])
        return M;
      const Q = B.length;
      return B.charAt(Q - 1) === "5" && (B = `${B.slice(0, Math.max(0, Q - 1))}6`), Number.parseFloat(Number(B).toFixed(j));
    }, w = (M) => {
      if (Yn(M))
        return 0;
      const j = M.toString(), B = j.indexOf(".");
      let ie = 0;
      return B !== -1 && (ie = j.length - B - 1), ie;
    }, R = (M, j = 1) => $e(M) ? E(M + o.step * j) : i.currentValue, F = () => {
      if (o.readonly || h.value || d.value)
        return;
      const M = Number(b.value) || 0, j = R(M);
      x(j), n(Qn, i.currentValue), fe();
    }, O = () => {
      if (o.readonly || h.value || u.value)
        return;
      const M = Number(b.value) || 0, j = R(M, -1);
      x(j), n(Qn, i.currentValue), fe();
    }, A = (M, j) => {
      const { max: B, min: ie, step: pe, precision: Te, stepStrictly: Q, valueOnClear: V } = o;
      B < ie && Es("InputNumber", "min should not be greater than max.");
      let Ae = Number(M);
      if (Yn(M) || Number.isNaN(Ae))
        return null;
      if (M === "") {
        if (V === null)
          return null;
        Ae = Ct(V) ? { min: ie, max: B }[V] : V;
      }
      return Q && (Ae = E(Math.round(Ae / pe) * pe, Te), Ae !== M && j && n(lt, Ae)), $n(Te) || (Ae = E(Ae, Te)), (Ae > B || Ae < ie) && (Ae = Ae > B ? B : ie, j && n(lt, Ae)), Ae;
    }, x = (M, j = !0) => {
      var B;
      const ie = i.currentValue, pe = A(M);
      if (!j) {
        n(lt, pe);
        return;
      }
      ie === pe && M || (i.userInput = null, n(lt, pe), ie !== pe && n(Jn, pe, ie), o.validateEvent && ((B = c?.validate) == null || B.call(c, "change").catch((Te) => void 0)), i.currentValue = pe);
    }, $ = (M) => {
      i.userInput = M;
      const j = M === "" ? null : Number(M);
      n(Qn, j), x(j, !1);
    }, K = (M) => {
      const j = M !== "" ? Number(M) : "";
      ($e(j) && !Number.isNaN(j) || M === "") && x(j), fe(), i.userInput = null;
    }, Z = () => {
      var M, j;
      (j = (M = s.value) == null ? void 0 : M.focus) == null || j.call(M);
    }, re = () => {
      var M, j;
      (j = (M = s.value) == null ? void 0 : M.blur) == null || j.call(M);
    }, H = (M) => {
      n("focus", M);
    }, ae = (M) => {
      var j, B;
      i.userInput = null, bu() && i.currentValue === null && ((j = s.value) != null && j.input) && (s.value.input.value = ""), n("blur", M), o.validateEvent && ((B = c?.validate) == null || B.call(c, "blur").catch((ie) => void 0));
    }, fe = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, ce = (M) => {
      document.activeElement === M.target && M.preventDefault();
    };
    return de(() => o.modelValue, (M, j) => {
      const B = A(M, !0);
      i.userInput === null && B !== j && (i.currentValue = B);
    }, { immediate: !0 }), et(() => {
      var M;
      const { min: j, max: B, modelValue: ie } = o, pe = (M = s.value) == null ? void 0 : M.input;
      if (pe.setAttribute("role", "spinbutton"), Number.isFinite(B) ? pe.setAttribute("aria-valuemax", String(B)) : pe.removeAttribute("aria-valuemax"), Number.isFinite(j) ? pe.setAttribute("aria-valuemin", String(j)) : pe.removeAttribute("aria-valuemin"), pe.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), pe.setAttribute("aria-disabled", String(h.value)), !$e(ie) && ie != null) {
        let Te = Number(ie);
        Number.isNaN(Te) && (Te = null), n(lt, Te);
      }
      pe.addEventListener("wheel", ce, { passive: !1 });
    }), Mc(() => {
      var M, j;
      const B = (M = s.value) == null ? void 0 : M.input;
      B?.setAttribute("aria-valuenow", `${(j = i.currentValue) != null ? j : ""}`);
    }), t({
      focus: Z,
      blur: re
    }), (M, j) => (T(), N("div", {
      class: D([
        l(a).b(),
        l(a).m(l(y)),
        l(a).is("disabled", l(h)),
        l(a).is("without-controls", !M.controls),
        l(a).is("controls-right", l(g))
      ]),
      onDragstart: Ue(() => {
      }, ["prevent"])
    }, [
      M.controls ? it((T(), N("span", {
        key: 0,
        role: "button",
        "aria-label": l(r)("el.inputNumber.decrease"),
        class: D([l(a).e("decrease"), l(a).is("disabled", l(u))]),
        onKeydown: pn(O, ["enter"])
      }, [
        le(M.$slots, "decrease-icon", {}, () => [
          _(l(nt), null, {
            default: X(() => [
              l(g) ? (T(), ee(l(mu), { key: 0 })) : (T(), ee(l(Nv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(oc), O]
      ]) : U("v-if", !0),
      M.controls ? it((T(), N("span", {
        key: 1,
        role: "button",
        "aria-label": l(r)("el.inputNumber.increase"),
        class: D([l(a).e("increase"), l(a).is("disabled", l(d))]),
        onKeydown: pn(F, ["enter"])
      }, [
        le(M.$slots, "increase-icon", {}, () => [
          _(l(nt), null, {
            default: X(() => [
              l(g) ? (T(), ee(l(Tv), { key: 0 })) : (T(), ee(l(zv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(oc), F]
      ]) : U("v-if", !0),
      _(l(i0), {
        id: M.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: M.step,
        "model-value": l(b),
        placeholder: M.placeholder,
        readonly: M.readonly,
        disabled: l(h),
        size: l(y),
        max: M.max,
        min: M.min,
        name: M.name,
        "aria-label": M.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          pn(Ue(F, ["prevent"]), ["up"]),
          pn(Ue(O, ["prevent"]), ["down"])
        ],
        onBlur: ae,
        onFocus: H,
        onInput: $,
        onChange: K
      }, Ia({
        _: 2
      }, [
        M.$slots.prefix ? {
          name: "prefix",
          fn: X(() => [
            le(M.$slots, "prefix")
          ])
        } : void 0,
        M.$slots.suffix ? {
          name: "suffix",
          fn: X(() => [
            le(M.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Cy = /* @__PURE__ */ je(Ay, [["__file", "input-number.vue"]]);
const Ey = an(Cy);
function xy() {
  const e = uo(), t = P(0), n = 11, o = C(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return In(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Qu = Symbol("ElSelectGroup"), Ps = Symbol("ElSelect");
function Ly(e, t) {
  const n = Re(Ps), o = Re(Qu, { disabled: !1 }), r = C(() => d(io(n.props.modelValue), e.value)), a = C(() => {
    var y;
    if (n.props.multiple) {
      const h = io((y = n.props.modelValue) != null ? y : []);
      return !r.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = C(() => e.label || (Xt(e.value) ? "" : e.value)), i = C(() => e.value || e.label || ""), c = C(() => e.disabled || t.groupDisabled || a.value), u = Et(), d = (y = [], h) => {
    if (Xt(e.value)) {
      const b = n.props.valueKey;
      return y && y.some((E) => pf(co(E, b)) === co(h, b));
    } else
      return y && y.includes(h);
  }, m = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (y) => {
    const h = new RegExp(K1(y), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return de(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), de(() => e.value, (y, h) => {
    const { remote: b, valueKey: E } = n.props;
    if ((b ? y !== h : !Ar(y, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (E && Xt(y) && Xt(h) && y[E] === h[E])
        return;
      n.setSelected();
    }
  }), de(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: r,
    isDisabled: c,
    hoverItem: m,
    updateOption: g
  };
}
const Iy = oe({
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
    const t = Ye("select"), n = Zo(), o = C(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(s)),
      t.is("hovering", l(g))
    ]), r = xo({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d
    } = Ly(e, r), { visible: m, hover: g } = Oa(r), y = Et().proxy;
    c.onOptionCreate(y), wn(() => {
      const b = y.value, { selected: E } = c.states, w = E.some((R) => R.value === y.value);
      Ge(() => {
        c.states.cachedOptions.get(b) === y && !w && c.states.cachedOptions.delete(b);
      }), c.onOptionDestroy(b, y);
    });
    function h() {
      i.value || c.handleOptionSelect(y);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d,
      visible: m,
      hover: g,
      selectOptionClick: h,
      states: r
    };
  }
});
function Oy(e, t, n, o, r, a) {
  return it((T(), N("li", {
    id: e.id,
    class: D(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ue(e.selectOptionClick, ["stop"])
  }, [
    le(e.$slots, "default", {}, () => [
      f("span", null, L(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Pn, e.visible]
  ]);
}
var il = /* @__PURE__ */ je(Iy, [["render", Oy], ["__file", "option.vue"]]);
const $y = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Re(Ps), t = Ye("select"), n = C(() => e.props.popperClass), o = C(() => e.props.multiple), r = C(() => e.props.fitInputWidth), a = P("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return et(() => {
      s(), In(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Ry(e, t, n, o, r, a) {
  return T(), N("div", {
    class: D([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: dt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (T(), N("div", {
      key: 0,
      class: D(e.ns.be("dropdown", "header"))
    }, [
      le(e.$slots, "header")
    ], 2)) : U("v-if", !0),
    le(e.$slots, "default"),
    e.$slots.footer ? (T(), N("div", {
      key: 1,
      class: D(e.ns.be("dropdown", "footer"))
    }, [
      le(e.$slots, "footer")
    ], 2)) : U("v-if", !0)
  ], 6);
}
var My = /* @__PURE__ */ je($y, [["render", Ry], ["__file", "select-dropdown.vue"]]);
const Py = (e, t) => {
  const { t: n } = xs(), o = Zo(), r = Ye("select"), a = Ye("input"), s = xo({
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
  }), i = P(null), c = P(null), u = P(null), d = P(null), m = P(null), g = P(null), y = P(null), h = P(null), b = P(null), E = P(null), w = P(null), {
    isComposing: R,
    handleCompositionStart: F,
    handleCompositionUpdate: O,
    handleCompositionEnd: A
  } = Tu({
    afterComposition: (I) => Me(I)
  }), { wrapperRef: x, isFocused: $, handleBlur: K } = _u(m, {
    beforeFocus() {
      return j.value;
    },
    afterFocus() {
      e.automaticDropdown && !Z.value && (Z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(I) {
      var Y, be;
      return ((Y = u.value) == null ? void 0 : Y.isFocusInsideContent(I)) || ((be = d.value) == null ? void 0 : be.isFocusInsideContent(I));
    },
    afterBlur() {
      Z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), Z = P(!1), re = P(), { form: H, formItem: ae } = Os(), { inputId: fe } = Ga(e, {
    formItemContext: ae
  }), { valueOnClear: ce, isEmptyValue: M } = uv(e), j = C(() => e.disabled || H?.disabled), B = C(() => On(e.modelValue) ? e.modelValue.length > 0 : !M(e.modelValue)), ie = C(() => {
    var I;
    return (I = H?.statusIcon) != null ? I : !1;
  }), pe = C(() => e.clearable && !j.value && s.inputHovering && B.value), Te = C(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Q = C(() => r.is("reverse", Te.value && Z.value)), V = C(() => ae?.validateState || ""), Ae = C(() => vu[V.value]), ge = C(() => e.remote ? 300 : 0), ve = C(() => e.remote && !s.inputValue && s.options.size === 0), me = C(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && q.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), q = C(() => ue.value.filter((I) => I.visible).length), ue = C(() => {
    const I = Array.from(s.options.values()), Y = [];
    return s.optionValues.forEach((be) => {
      const We = I.findIndex((Ze) => Ze.value === be);
      We > -1 && Y.push(I[We]);
    }), Y.length >= I.length ? Y : I;
  }), Be = C(() => Array.from(s.cachedOptions.values())), ft = C(() => {
    const I = ue.value.filter((Y) => !Y.created).some((Y) => Y.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !I;
  }), He = () => {
    e.filterable && Ke(e.filterMethod) || e.filterable && e.remote && Ke(e.remoteMethod) || ue.value.forEach((I) => {
      var Y;
      (Y = I.updateOption) == null || Y.call(I, s.inputValue);
    });
  }, rt = zr(), ht = C(() => ["small"].includes(rt.value) ? "small" : "default"), wt = C({
    get() {
      return Z.value && !ve.value;
    },
    set(I) {
      Z.value = I;
    }
  }), gt = C(() => {
    if (e.multiple && !$n(e.modelValue))
      return io(e.modelValue).length === 0 && !s.inputValue;
    const I = On(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $n(I) ? !s.inputValue : !0;
  }), ut = C(() => {
    var I;
    const Y = (I = e.placeholder) != null ? I : n("el.select.placeholder");
    return e.multiple || !B.value ? Y : s.selectedLabel;
  }), kt = C(() => pa ? null : "mouseenter");
  de(() => e.modelValue, (I, Y) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", Qe("")), st(), !Ar(I, Y) && e.validateEvent && ae?.validate("change").catch((be) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), de(() => Z.value, (I) => {
    I ? Qe(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", I);
  }), de(() => s.options.entries(), () => {
    qe && (st(), e.defaultFirstOption && (e.filterable || e.remote) && q.value && Mt());
  }, {
    flush: "post"
  }), de([() => s.hoveringIndex, ue], ([I]) => {
    $e(I) && I > -1 ? re.value = ue.value[I] || {} : re.value = {}, ue.value.forEach((Y) => {
      Y.hover = re.value === Y;
    });
  }), Ea(() => {
    s.isBeforeHide || He();
  });
  const Qe = (I) => {
    s.previousQuery === I || R.value || (s.previousQuery = I, e.filterable && Ke(e.filterMethod) ? e.filterMethod(I) : e.filterable && e.remote && Ke(e.remoteMethod) && e.remoteMethod(I), e.defaultFirstOption && (e.filterable || e.remote) && q.value ? Ge(Mt) : Ge(Gt));
  }, Mt = () => {
    const I = ue.value.filter((Ze) => Ze.visible && !Ze.disabled && !Ze.states.groupDisabled), Y = I.find((Ze) => Ze.created), be = I[0], We = ue.value.map((Ze) => Ze.value);
    s.hoveringIndex = Kt(We, Y || be);
  }, st = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const Y = On(e.modelValue) ? e.modelValue[0] : e.modelValue, be = tt(Y);
      s.selectedLabel = be.currentLabel, s.selected = [be];
      return;
    }
    const I = [];
    $n(e.modelValue) || io(e.modelValue).forEach((Y) => {
      I.push(tt(Y));
    }), s.selected = I;
  }, tt = (I) => {
    let Y;
    const be = Df(I);
    for (let Bt = s.cachedOptions.size - 1; Bt >= 0; Bt--) {
      const xt = Be.value[Bt];
      if (be ? co(xt.value, e.valueKey) === co(I, e.valueKey) : xt.value === I) {
        Y = {
          value: I,
          currentLabel: xt.currentLabel,
          get isDisabled() {
            return xt.isDisabled;
          }
        };
        break;
      }
    }
    if (Y)
      return Y;
    const We = be ? I.label : I ?? "";
    return {
      value: I,
      currentLabel: We
    };
  }, Gt = () => {
    s.hoveringIndex = ue.value.findIndex((I) => s.selected.some((Y) => Le(Y) === Le(I)));
  }, Pt = () => {
    s.selectionWidth = c.value.getBoundingClientRect().width;
  }, G = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, we = () => {
    var I, Y;
    (Y = (I = u.value) == null ? void 0 : I.updatePopper) == null || Y.call(I);
  }, Ee = () => {
    var I, Y;
    (Y = (I = d.value) == null ? void 0 : I.updatePopper) == null || Y.call(I);
  }, Nt = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), Qe(s.inputValue);
  }, Me = (I) => {
    if (s.inputValue = I.target.value, e.remote)
      ln();
    else
      return Nt();
  }, ln = Sg(() => {
    Nt();
  }, ge.value), pt = (I) => {
    Ar(e.modelValue, I) || t(Jn, I);
  }, kn = (I) => Ag(I, (Y) => {
    const be = s.cachedOptions.get(Y);
    return be && !be.disabled && !be.states.groupDisabled;
  }), _n = (I) => {
    if (e.multiple && I.code !== Rn.delete && I.target.value.length <= 0) {
      const Y = io(e.modelValue).slice(), be = kn(Y);
      if (be < 0)
        return;
      const We = Y[be];
      Y.splice(be, 1), t(lt, Y), pt(Y), t("remove-tag", We);
    }
  }, ho = (I, Y) => {
    const be = s.selected.indexOf(Y);
    if (be > -1 && !j.value) {
      const We = io(e.modelValue).slice();
      We.splice(be, 1), t(lt, We), pt(We), t("remove-tag", Y.value);
    }
    I.stopPropagation(), Jt();
  }, Dt = (I) => {
    I.stopPropagation();
    const Y = e.multiple ? [] : ce.value;
    if (e.multiple)
      for (const be of s.selected)
        be.isDisabled && Y.push(be.value);
    t(lt, Y), pt(Y), s.hoveringIndex = -1, Z.value = !1, t("clear"), Jt();
  }, go = (I) => {
    var Y;
    if (e.multiple) {
      const be = io((Y = e.modelValue) != null ? Y : []).slice(), We = Kt(be, I);
      We > -1 ? be.splice(We, 1) : (e.multipleLimit <= 0 || be.length < e.multipleLimit) && be.push(I.value), t(lt, be), pt(be), I.created && Qe(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(lt, I.value), pt(I.value), Z.value = !1;
    Jt(), !Z.value && Ge(() => {
      qt(I);
    });
  }, Kt = (I = [], Y) => $n(Y) ? -1 : Xt(Y.value) ? I.findIndex((be) => Ar(co(be, e.valueKey), Le(Y))) : I.indexOf(Y.value), qt = (I) => {
    var Y, be, We, Ze, Bt;
    const xt = On(I) ? I[0] : I;
    let Tt = null;
    if (xt?.value) {
      const Cn = ue.value.filter((Lt) => Lt.value === xt.value);
      Cn.length > 0 && (Tt = Cn[0].$el);
    }
    if (u.value && Tt) {
      const Cn = (Ze = (We = (be = (Y = u.value) == null ? void 0 : Y.popperRef) == null ? void 0 : be.contentRef) == null ? void 0 : We.querySelector) == null ? void 0 : Ze.call(We, `.${r.be("dropdown", "wrap")}`);
      Cn && gv(Cn, Tt);
    }
    (Bt = w.value) == null || Bt.handleScroll();
  }, zt = (I) => {
    s.options.set(I.value, I), s.cachedOptions.set(I.value, I);
  }, Zt = (I, Y) => {
    s.options.get(I) === Y && s.options.delete(I);
  }, vo = C(() => {
    var I, Y;
    return (Y = (I = u.value) == null ? void 0 : I.popperRef) == null ? void 0 : Y.contentRef;
  }), bo = () => {
    s.isBeforeHide = !1, Ge(() => {
      var I;
      (I = w.value) == null || I.update(), qt(s.selected);
    });
  }, Jt = () => {
    var I;
    (I = m.value) == null || I.focus();
  }, Bn = () => {
    var I;
    if (Z.value) {
      Z.value = !1, Ge(() => {
        var Y;
        return (Y = m.value) == null ? void 0 : Y.blur();
      });
      return;
    }
    (I = m.value) == null || I.blur();
  }, Tn = (I) => {
    Dt(I);
  }, ro = (I) => {
    if (Z.value = !1, $.value) {
      const Y = new FocusEvent("focus", I);
      Ge(() => K(Y));
    }
  }, Sn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, yo = () => {
    j.value || (pa && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, ar = () => {
    if (!Z.value)
      yo();
    else {
      const I = ue.value[s.hoveringIndex];
      I && !I.isDisabled && go(I);
    }
  }, Le = (I) => Xt(I.value) ? co(I.value, e.valueKey) : I.value, An = C(() => ue.value.filter((I) => I.visible).every((I) => I.isDisabled)), Do = C(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), zo = C(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Fn = (I) => {
    if (!Z.value) {
      Z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || q.value === 0 || R.value) && !An.value) {
      I === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : I === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const Y = ue.value[s.hoveringIndex];
      (Y.isDisabled || !Y.visible) && Fn(I), Ge(() => qt(re.value));
    }
  }, wo = () => {
    if (!c.value)
      return 0;
    const I = window.getComputedStyle(c.value);
    return Number.parseFloat(I.gap || "6px");
  }, ko = C(() => {
    const I = wo();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - I : s.selectionWidth}px` };
  }), jn = C(() => ({ maxWidth: `${s.selectionWidth}px` })), _t = (I) => {
    t("popup-scroll", I);
  };
  return In(c, Pt), In(h, we), In(x, we), In(b, Ee), In(E, G), et(() => {
    st();
  }), {
    inputId: fe,
    contentId: o,
    nsSelect: r,
    nsInput: a,
    states: s,
    isFocused: $,
    expanded: Z,
    optionsArray: ue,
    hoverOption: re,
    selectSize: rt,
    filteredOptionsCount: q,
    updateTooltip: we,
    updateTagTooltip: Ee,
    debouncedOnInputChange: ln,
    onInput: Me,
    deletePrevTag: _n,
    deleteTag: ho,
    deleteSelected: Dt,
    handleOptionSelect: go,
    scrollToOption: qt,
    hasModelValue: B,
    shouldShowPlaceholder: gt,
    currentPlaceholder: ut,
    mouseEnterEventName: kt,
    needStatusIcon: ie,
    showClose: pe,
    iconComponent: Te,
    iconReverse: Q,
    validateState: V,
    validateIcon: Ae,
    showNewOption: ft,
    updateOptions: He,
    collapseTagSize: ht,
    setSelected: st,
    selectDisabled: j,
    emptyText: me,
    handleCompositionStart: F,
    handleCompositionUpdate: O,
    handleCompositionEnd: A,
    onOptionCreate: zt,
    onOptionDestroy: Zt,
    handleMenuEnter: bo,
    focus: Jt,
    blur: Bn,
    handleClearClick: Tn,
    handleClickOutside: ro,
    handleEsc: Sn,
    toggleMenu: yo,
    selectOption: ar,
    getValueKey: Le,
    navigateOptions: Fn,
    dropdownMenuVisible: wt,
    showTagList: Do,
    collapseTagList: zo,
    popupScroll: _t,
    tagStyle: ko,
    collapseTagStyle: jn,
    popperRef: vo,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: g,
    suffixRef: y,
    selectRef: i,
    wrapperRef: x,
    selectionRef: c,
    scrollbarRef: w,
    menuRef: h,
    tagMenuRef: b,
    collapseItemRef: E
  };
};
var Ny = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Re(Ps);
    let o = [];
    return () => {
      var r, a;
      const s = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function c(u) {
        On(u) && u.forEach((d) => {
          var m, g, y, h;
          const b = (m = d?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? c(!Ct(d.children) && !On(d.children) && Ke((g = d.children) == null ? void 0 : g.default) ? (y = d.children) == null ? void 0 : y.default() : d.children) : b === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : On(d.children) && c(d.children);
        });
      }
      return s.length && c((a = s[0]) == null ? void 0 : a.children), Ar(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Dy = ze({
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
  size: Is,
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
  teleported: ll.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: mn,
    default: Wa
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: mn,
    default: mu
  },
  tagType: { ...va.type, default: "info" },
  tagEffect: { ...va.effect, default: "light" },
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
    values: Rs,
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
  ...iu,
  ...Po(["ariaLabel"])
}), rc = "ElSelect", zy = oe({
  name: rc,
  componentName: rc,
  components: {
    ElSelectMenu: My,
    ElOption: il,
    ElOptions: Ny,
    ElTag: Q1,
    ElScrollbar: T0,
    ElTooltip: F1,
    ElIcon: nt
  },
  directives: { ClickOutside: J1 },
  props: Dy,
  emits: [
    lt,
    Jn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = C(() => {
      const { modelValue: c, multiple: u } = e, d = u ? [] : void 0;
      return On(c) ? u ? c : d : u ? d : c;
    }), o = xo({
      ...Oa(e),
      modelValue: n
    }), r = Py(o, t), { calculatorRef: a, inputStyle: s } = xy();
    bn(Ps, xo({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const i = C(() => e.multiple ? r.states.selected.map((c) => c.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function By(e, t, n, o, r, a) {
  const s = To("el-tag"), i = To("el-tooltip"), c = To("el-icon"), u = To("el-option"), d = To("el-options"), m = To("el-scrollbar"), g = To("el-select-menu"), y = mf("click-outside");
  return it((T(), N("div", {
    ref: "selectRef",
    class: D([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [hf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
  }, [
    _(i, {
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
      default: X(() => {
        var h;
        return [
          f("div", {
            ref: "wrapperRef",
            class: D([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ue(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (T(), N("div", {
              key: 0,
              ref: "prefixRef",
              class: D(e.nsSelect.e("prefix"))
            }, [
              le(e.$slots, "prefix")
            ], 2)) : U("v-if", !0),
            f("div", {
              ref: "selectionRef",
              class: D([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? le(e.$slots, "tag", { key: 0 }, () => [
                (T(!0), N(at, null, Ln(e.showTagList, (b) => (T(), N("div", {
                  key: e.getValueKey(b),
                  class: D(e.nsSelect.e("selected-item"))
                }, [
                  _(s, {
                    closable: !e.selectDisabled && !b.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: dt(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, b)
                  }, {
                    default: X(() => [
                      f("span", {
                        class: D(e.nsSelect.e("tags-text"))
                      }, [
                        le(e.$slots, "label", {
                          label: b.currentLabel,
                          value: b.value
                        }, () => [
                          mt(L(b.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (T(), ee(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: X(() => [
                    f("div", {
                      ref: "collapseItemRef",
                      class: D(e.nsSelect.e("selected-item"))
                    }, [
                      _(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: dt(e.collapseTagStyle)
                      }, {
                        default: X(() => [
                          f("span", {
                            class: D(e.nsSelect.e("tags-text"))
                          }, " + " + L(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: X(() => [
                    f("div", {
                      ref: "tagMenuRef",
                      class: D(e.nsSelect.e("selection"))
                    }, [
                      (T(!0), N(at, null, Ln(e.collapseTagList, (b) => (T(), N("div", {
                        key: e.getValueKey(b),
                        class: D(e.nsSelect.e("selected-item"))
                      }, [
                        _(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !b.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, b)
                        }, {
                          default: X(() => [
                            f("span", {
                              class: D(e.nsSelect.e("tags-text"))
                            }, [
                              le(e.$slots, "label", {
                                label: b.currentLabel,
                                value: b.value
                              }, () => [
                                mt(L(b.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : U("v-if", !0)
              ]) : U("v-if", !0),
              f("div", {
                class: D([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                it(f("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (b) => e.states.inputValue = b,
                  type: "text",
                  name: e.name,
                  class: D([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: dt(e.inputStyle),
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
                    pn(Ue((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    pn(Ue((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    pn(Ue(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    pn(Ue(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    pn(Ue(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ue(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Lr, e.states.inputValue]
                ]),
                e.filterable ? (T(), N("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: D(e.nsSelect.e("input-calculator")),
                  textContent: L(e.states.inputValue)
                }, null, 10, ["textContent"])) : U("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (T(), N("div", {
                key: 1,
                class: D([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? le(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  f("span", null, L(e.currentPlaceholder), 1)
                ]) : (T(), N("span", { key: 1 }, L(e.currentPlaceholder), 1))
              ], 2)) : U("v-if", !0)
            ], 2),
            f("div", {
              ref: "suffixRef",
              class: D(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (T(), ee(c, {
                key: 0,
                class: D([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: X(() => [
                  (T(), ee(yt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              e.showClose && e.clearIcon ? (T(), ee(c, {
                key: 1,
                class: D([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: X(() => [
                  (T(), ee(yt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : U("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (T(), ee(c, {
                key: 2,
                class: D([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: X(() => [
                  (T(), ee(yt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: X(() => [
        _(g, { ref: "menuRef" }, {
          default: X(() => [
            e.$slots.header ? (T(), N("div", {
              key: 0,
              class: D(e.nsSelect.be("dropdown", "header")),
              onClick: Ue(() => {
              }, ["stop"])
            }, [
              le(e.$slots, "header")
            ], 10, ["onClick"])) : U("v-if", !0),
            it(_(m, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: D([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: X(() => [
                e.showNewOption ? (T(), ee(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : U("v-if", !0),
                _(d, null, {
                  default: X(() => [
                    le(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Pn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (T(), N("div", {
              key: 1,
              class: D(e.nsSelect.be("dropdown", "loading"))
            }, [
              le(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (T(), N("div", {
              key: 2,
              class: D(e.nsSelect.be("dropdown", "empty"))
            }, [
              le(e.$slots, "empty", {}, () => [
                f("span", null, L(e.emptyText), 1)
              ])
            ], 2)) : U("v-if", !0),
            e.$slots.footer ? (T(), N("div", {
              key: 3,
              class: D(e.nsSelect.be("dropdown", "footer")),
              onClick: Ue(() => {
              }, ["stop"])
            }, [
              le(e.$slots, "footer")
            ], 10, ["onClick"])) : U("v-if", !0)
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
var Fy = /* @__PURE__ */ je(zy, [["render", By], ["__file", "select.vue"]]);
const jy = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ye("select"), n = P(null), o = Et(), r = P([]);
    bn(Qu, xo({
      ...Oa(e)
    }));
    const a = C(() => r.value.some((u) => u.visible === !0)), s = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = io(u), m = [];
      return d.forEach((g) => {
        var y, h;
        s(g) ? m.push(g.component.proxy) : (y = g.children) != null && y.length ? m.push(...i(g.children)) : (h = g.component) != null && h.subTree && m.push(...i(g.component.subTree));
      }), m;
    }, c = () => {
      r.value = i(o.subTree);
    };
    return et(() => {
      c();
    }), Zg(n, c, {
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
function Vy(e, t, n, o, r, a) {
  return it((T(), N("ul", {
    ref: "groupRef",
    class: D(e.ns.be("group", "wrap"))
  }, [
    f("li", {
      class: D(e.ns.be("group", "title"))
    }, L(e.label), 3),
    f("li", null, [
      f("ul", {
        class: D(e.ns.b("group"))
      }, [
        le(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Pn, e.visible]
  ]);
}
var Ju = /* @__PURE__ */ je(jy, [["render", Vy], ["__file", "option-group.vue"]]);
const ed = an(Fy, {
  Option: il,
  OptionGroup: Ju
}), td = pu(il);
pu(Ju);
const Hy = (e) => ["", ...Va].includes(e), Wy = ze({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Hy
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: mn
  },
  activeActionIcon: {
    type: mn
  },
  activeIcon: {
    type: mn
  },
  inactiveIcon: {
    type: mn
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
  ...Po(["ariaLabel"])
}), Uy = {
  [lt]: (e) => Xn(e) || Ct(e) || $e(e),
  [Jn]: (e) => Xn(e) || Ct(e) || $e(e),
  [Qn]: (e) => Xn(e) || Ct(e) || $e(e)
}, nd = "ElSwitch", Gy = oe({
  name: nd
}), Ky = /* @__PURE__ */ oe({
  ...Gy,
  props: Wy,
  emits: Uy,
  setup(e, { expose: t, emit: n }) {
    const o = e, { formItem: r } = Os(), a = zr(), s = Ye("switch"), { inputId: i } = Ga(o, {
      formItemContext: r
    }), c = Ka(C(() => o.loading)), u = P(o.modelValue !== !1), d = P(), m = P(), g = C(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", c.value),
      s.is("checked", w.value)
    ]), y = C(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !w.value)
    ]), h = C(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", w.value)
    ]), b = C(() => ({
      width: eo(o.width)
    }));
    de(() => o.modelValue, () => {
      u.value = !0;
    });
    const E = C(() => u.value ? o.modelValue : !1), w = C(() => E.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(E.value) || (n(lt, o.inactiveValue), n(Jn, o.inactiveValue), n(Qn, o.inactiveValue)), de(w, (A) => {
      var x;
      d.value.checked = A, o.validateEvent && ((x = r?.validate) == null || x.call(r, "change").catch(($) => void 0));
    });
    const R = () => {
      const A = w.value ? o.inactiveValue : o.activeValue;
      n(lt, A), n(Jn, A), n(Qn, A), Ge(() => {
        d.value.checked = w.value;
      });
    }, F = () => {
      if (c.value)
        return;
      const { beforeChange: A } = o;
      if (!A) {
        R();
        return;
      }
      const x = A();
      [
        Gl(x),
        Xn(x)
      ].includes(!0) || Es(nd, "beforeChange must return type `Promise<boolean>` or `boolean`"), Gl(x) ? x.then((K) => {
        K && R();
      }).catch((K) => {
      }) : x && R();
    }, O = () => {
      var A, x;
      (x = (A = d.value) == null ? void 0 : A.focus) == null || x.call(A);
    };
    return et(() => {
      d.value.checked = w.value;
    }), t({
      focus: O,
      checked: w
    }), (A, x) => (T(), N("div", {
      class: D(l(g)),
      onClick: Ue(F, ["prevent"])
    }, [
      f("input", {
        id: l(i),
        ref_key: "input",
        ref: d,
        class: D(l(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": l(w),
        "aria-disabled": l(c),
        "aria-label": A.ariaLabel,
        name: A.name,
        "true-value": A.activeValue,
        "false-value": A.inactiveValue,
        disabled: l(c),
        tabindex: A.tabindex,
        onChange: R,
        onKeydown: pn(F, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !A.inlinePrompt && (A.inactiveIcon || A.inactiveText) ? (T(), N("span", {
        key: 0,
        class: D(l(y))
      }, [
        A.inactiveIcon ? (T(), ee(l(nt), { key: 0 }, {
          default: X(() => [
            (T(), ee(yt(A.inactiveIcon)))
          ]),
          _: 1
        })) : U("v-if", !0),
        !A.inactiveIcon && A.inactiveText ? (T(), N("span", {
          key: 1,
          "aria-hidden": l(w)
        }, L(A.inactiveText), 9, ["aria-hidden"])) : U("v-if", !0)
      ], 2)) : U("v-if", !0),
      f("span", {
        ref_key: "core",
        ref: m,
        class: D(l(s).e("core")),
        style: dt(l(b))
      }, [
        A.inlinePrompt ? (T(), N("div", {
          key: 0,
          class: D(l(s).e("inner"))
        }, [
          A.activeIcon || A.inactiveIcon ? (T(), ee(l(nt), {
            key: 0,
            class: D(l(s).is("icon"))
          }, {
            default: X(() => [
              (T(), ee(yt(l(w) ? A.activeIcon : A.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : A.activeText || A.inactiveText ? (T(), N("span", {
            key: 1,
            class: D(l(s).is("text")),
            "aria-hidden": !l(w)
          }, L(l(w) ? A.activeText : A.inactiveText), 11, ["aria-hidden"])) : U("v-if", !0)
        ], 2)) : U("v-if", !0),
        f("div", {
          class: D(l(s).e("action"))
        }, [
          A.loading ? (T(), ee(l(nt), {
            key: 0,
            class: D(l(s).is("loading"))
          }, {
            default: X(() => [
              _(l(hu))
            ]),
            _: 1
          }, 8, ["class"])) : l(w) ? le(A.$slots, "active-action", { key: 1 }, () => [
            A.activeActionIcon ? (T(), ee(l(nt), { key: 0 }, {
              default: X(() => [
                (T(), ee(yt(A.activeActionIcon)))
              ]),
              _: 1
            })) : U("v-if", !0)
          ]) : l(w) ? U("v-if", !0) : le(A.$slots, "inactive-action", { key: 2 }, () => [
            A.inactiveActionIcon ? (T(), ee(l(nt), { key: 0 }, {
              default: X(() => [
                (T(), ee(yt(A.inactiveActionIcon)))
              ]),
              _: 1
            })) : U("v-if", !0)
          ])
        ], 2)
      ], 6),
      !A.inlinePrompt && (A.activeIcon || A.activeText) ? (T(), N("span", {
        key: 1,
        class: D(l(h))
      }, [
        A.activeIcon ? (T(), ee(l(nt), { key: 0 }, {
          default: X(() => [
            (T(), ee(yt(A.activeIcon)))
          ]),
          _: 1
        })) : U("v-if", !0),
        !A.activeIcon && A.activeText ? (T(), N("span", {
          key: 1,
          "aria-hidden": !l(w)
        }, L(A.activeText), 9, ["aria-hidden"])) : U("v-if", !0)
      ], 2)) : U("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var qy = /* @__PURE__ */ je(Ky, [["__file", "switch.vue"]]);
const Zy = an(qy), od = ["success", "info", "warning", "error"], St = yu({
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
  appendTo: qe ? document.body : void 0
}), Yy = ze({
  customClass: {
    type: String,
    default: St.customClass
  },
  center: {
    type: Boolean,
    default: St.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: St.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: St.duration
  },
  icon: {
    type: mn,
    default: St.icon
  },
  id: {
    type: String,
    default: St.id
  },
  message: {
    type: he([
      String,
      Object,
      Function
    ]),
    default: St.message
  },
  onClose: {
    type: he(Function),
    default: St.onClose
  },
  showClose: {
    type: Boolean,
    default: St.showClose
  },
  type: {
    type: String,
    values: od,
    default: St.type
  },
  plain: {
    type: Boolean,
    default: St.plain
  },
  offset: {
    type: Number,
    default: St.offset
  },
  zIndex: {
    type: Number,
    default: St.zIndex
  },
  grouping: {
    type: Boolean,
    default: St.grouping
  },
  repeatNum: {
    type: Number,
    default: St.repeatNum
  }
}), Xy = {
  destroy: () => !0
}, hn = gf([]), Qy = (e) => {
  const t = hn.findIndex((r) => r.id === e), n = hn[t];
  let o;
  return t > 0 && (o = hn[t - 1]), { current: n, prev: o };
}, Jy = (e) => {
  const { prev: t } = Qy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ew = (e, t) => hn.findIndex((o) => o.id === e) > 0 ? 16 : t, tw = oe({
  name: "ElMessage"
}), nw = /* @__PURE__ */ oe({
  ...tw,
  props: Yy,
  emits: Xy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Uv, { ns: r, zIndex: a } = cu("message"), { currentZIndex: s, nextZIndex: i } = a, c = P(), u = P(!1), d = P(0);
    let m;
    const g = C(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = C(() => {
      const $ = n.type;
      return { [r.bm("icon", $)]: $ && ms[$] };
    }), h = C(() => n.icon || ms[n.type] || ""), b = C(() => Jy(n.id)), E = C(() => ew(n.id, n.offset) + b.value), w = C(() => d.value + E.value), R = C(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function F() {
      n.duration !== 0 && ({ stop: m } = ds(() => {
        A();
      }, n.duration));
    }
    function O() {
      m?.();
    }
    function A() {
      u.value = !1;
    }
    function x({ code: $ }) {
      $ === Rn.esc && A();
    }
    return et(() => {
      F(), i(), u.value = !0;
    }), de(() => n.repeatNum, () => {
      O(), F();
    }), vn(document, "keydown", x), In(c, () => {
      d.value = c.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: w,
      close: A
    }), ($, K) => (T(), ee($o, {
      name: l(r).b("fade"),
      onBeforeLeave: $.onClose,
      onAfterLeave: (Z) => $.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        it(f("div", {
          id: $.id,
          ref_key: "messageRef",
          ref: c,
          class: D([
            l(r).b(),
            { [l(r).m($.type)]: $.type },
            l(r).is("center", $.center),
            l(r).is("closable", $.showClose),
            l(r).is("plain", $.plain),
            $.customClass
          ]),
          style: dt(l(R)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: F
        }, [
          $.repeatNum > 1 ? (T(), ee(l(U1), {
            key: 0,
            value: $.repeatNum,
            type: l(g),
            class: D(l(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : U("v-if", !0),
          l(h) ? (T(), ee(l(nt), {
            key: 1,
            class: D([l(r).e("icon"), l(y)])
          }, {
            default: X(() => [
              (T(), ee(yt(l(h))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          le($.$slots, "default", {}, () => [
            $.dangerouslyUseHTMLString ? (T(), N(at, { key: 1 }, [
              U(" Caution here, message could've been compromised, never use user's input as message "),
              f("p", {
                class: D(l(r).e("content")),
                innerHTML: $.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (T(), N("p", {
              key: 0,
              class: D(l(r).e("content"))
            }, L($.message), 3))
          ]),
          $.showClose ? (T(), ee(l(nt), {
            key: 2,
            class: D(l(r).e("closeBtn")),
            onClick: Ue(A, ["stop"])
          }, {
            default: X(() => [
              _(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 46, ["id"]), [
          [Pn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ow = /* @__PURE__ */ je(nw, [["__file", "message.vue"]]);
let rw = 1;
const rd = (e) => {
  const t = !e || Ct(e) || Ir(e) || Ke(e) ? { message: e } : e, n = {
    ...St,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ct(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    gn(o) || (o = document.body), n.appendTo = o;
  }
  return Xn(un.grouping) && !n.grouping && (n.grouping = un.grouping), $e(un.duration) && n.duration === 3e3 && (n.duration = un.duration), $e(un.offset) && n.offset === 16 && (n.offset = un.offset), Xn(un.showClose) && !n.showClose && (n.showClose = un.showClose), n;
}, sw = (e) => {
  const t = hn.indexOf(e);
  if (t === -1)
    return;
  hn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, aw = ({ appendTo: e, ...t }, n) => {
  const o = `message_${rw++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), sw(d);
    },
    onDestroy: () => {
      ls(null, a);
    }
  }, i = _(ow, s, Ke(s.message) || Ir(s.message) ? {
    default: Ke(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || er._context, ls(i, a), e.appendChild(a.firstElementChild);
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
}, er = (e = {}, t) => {
  if (!qe)
    return { close: () => {
    } };
  const n = rd(e);
  if (n.grouping && hn.length) {
    const r = hn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if ($e(un.max) && hn.length >= un.max)
    return { close: () => {
    } };
  const o = aw(n, t);
  return hn.push(o), o.handler;
};
od.forEach((e) => {
  er[e] = (t = {}, n) => {
    const o = rd(t);
    return er({ ...o, type: e }, n);
  };
});
function lw(e) {
  for (const t of hn)
    (!e || e === t.props.type) && t.handler.close();
}
er.closeAll = lw;
er._context = null;
const iw = fu(er, "$message"), sd = [
  "success",
  "info",
  "warning",
  "error"
], cw = ze({
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
    type: mn
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
    values: [...sd, ""],
    default: ""
  },
  zIndex: Number
}), uw = {
  destroy: () => !0
}, dw = oe({
  name: "ElNotification"
}), fw = /* @__PURE__ */ oe({
  ...dw,
  props: cw,
  emits: uw,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = cu("notification"), { nextZIndex: a, currentZIndex: s } = r, { Close: i } = gu, c = P(!1);
    let u;
    const d = C(() => {
      const F = n.type;
      return F && ms[n.type] ? o.m(F) : "";
    }), m = C(() => n.type && ms[n.type] || n.icon), g = C(() => n.position.endsWith("right") ? "right" : "left"), y = C(() => n.position.startsWith("top") ? "top" : "bottom"), h = C(() => {
      var F;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (F = n.zIndex) != null ? F : s.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = ds(() => {
        c.value && w();
      }, n.duration));
    }
    function E() {
      u?.();
    }
    function w() {
      c.value = !1;
    }
    function R({ code: F }) {
      F === Rn.delete || F === Rn.backspace ? E() : F === Rn.esc ? c.value && w() : b();
    }
    return et(() => {
      b(), a(), c.value = !0;
    }), vn(document, "keydown", R), t({
      visible: c,
      close: w
    }), (F, O) => (T(), ee($o, {
      name: l(o).b("fade"),
      onBeforeLeave: F.onClose,
      onAfterLeave: (A) => F.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        it(f("div", {
          id: F.id,
          class: D([l(o).b(), F.customClass, l(g)]),
          style: dt(l(h)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: b,
          onClick: F.onClick
        }, [
          l(m) ? (T(), ee(l(nt), {
            key: 0,
            class: D([l(o).e("icon"), l(d)])
          }, {
            default: X(() => [
              (T(), ee(yt(l(m))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          f("div", {
            class: D(l(o).e("group"))
          }, [
            f("h2", {
              class: D(l(o).e("title")),
              textContent: L(F.title)
            }, null, 10, ["textContent"]),
            it(f("div", {
              class: D(l(o).e("content")),
              style: dt(F.title ? void 0 : { margin: 0 })
            }, [
              le(F.$slots, "default", {}, () => [
                F.dangerouslyUseHTMLString ? (T(), N(at, { key: 1 }, [
                  U(" Caution here, message could've been compromised, never use user's input as message "),
                  f("p", { innerHTML: F.message }, null, 8, ["innerHTML"])
                ], 2112)) : (T(), N("p", { key: 0 }, L(F.message), 1))
              ])
            ], 6), [
              [Pn, F.message]
            ]),
            F.showClose ? (T(), ee(l(nt), {
              key: 0,
              class: D(l(o).e("closeBtn")),
              onClick: Ue(w, ["stop"])
            }, {
              default: X(() => [
                _(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : U("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Pn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var pw = /* @__PURE__ */ je(fw, [["__file", "notification.vue"]]);
const vs = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ba = 16;
let mw = 1;
const tr = function(e = {}, t) {
  if (!qe)
    return { close: () => {
    } };
  (Ct(e) || Ir(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  vs[n].forEach(({ vm: d }) => {
    var m;
    o += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + ba;
  }), o += ba;
  const r = `notification_${mw++}`, a = e.onClose, s = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      hw(r, n, a);
    }
  };
  let i = document.body;
  gn(e.appendTo) ? i = e.appendTo : Ct(e.appendTo) && (i = document.querySelector(e.appendTo)), gn(i) || (i = document.body);
  const c = document.createElement("div"), u = _(pw, s, Ke(s.message) ? s.message : Ir(s.message) ? () => s.message : null);
  return u.appContext = $n(t) ? tr._context : t, u.props.onDestroy = () => {
    ls(null, c);
  }, ls(u, c), vs[n].push({ vm: u }), i.appendChild(c.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
sd.forEach((e) => {
  tr[e] = (t = {}, n) => ((Ct(t) || Ir(t)) && (t = {
    message: t
  }), tr({ ...t, type: e }, n));
});
function hw(e, t, n) {
  const o = vs[t], r = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: a } = o[r];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const c = o.length;
  if (!(c < 1))
    for (let u = r; u < c; u++) {
      const { el: d, component: m } = o[u].vm, g = Number.parseInt(d.style[i], 10) - s - ba;
      m.props.offset = g;
    }
}
function gw() {
  for (const e of Object.values(vs))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
tr.closeAll = gw;
tr._context = null;
const vw = fu(tr, "$notify");
function bw(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function ot(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var sc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(sc || (sc = {}));
async function yw(e, t) {
  await ot("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function ww(e, t, n) {
  var o;
  const r = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return ot("plugin:event|listen", {
    event: e,
    target: r,
    handler: bw(t)
  }).then((a) => async () => yw(e, a));
}
async function ad() {
  return await ot("local_ai_get_config");
}
async function rs(e) {
  return await ot("local_ai_save_config", { config: e });
}
async function ld(e) {
  return await ot("local_ai_scan_models", {
    config: e ?? null
  });
}
async function kw() {
  return await ot("local_ai_get_runtime_status");
}
async function id() {
  return await ot("local_ai_get_status");
}
async function _w(e) {
  return await ot("local_ai_start_service", {
    config: e ?? null
  });
}
async function cd() {
  return await ot("local_ai_restart_service");
}
async function Tw() {
  await ot("local_ai_stop_service");
}
async function Sw(e) {
  return await ot("local_ai_chat", { request: e });
}
function ud() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Aw(e, t, n = {}) {
  const o = n.requestId ?? ud(), r = await ww(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === o && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await ot("local_ai_chat_stream", {
      request: e,
      requestId: o
    });
  } finally {
    r();
  }
}
async function Xs(e) {
  return await ot("local_ai_cancel_chat_stream", { requestId: e });
}
async function Cw() {
  return await ot("local_ai_get_chat_histories");
}
async function Ew(e) {
  return await ot(
    "local_ai_read_attachment_files",
    { paths: e }
  );
}
async function xw(e) {
  return await ot("local_ai_save_chat_history", {
    history: e
  });
}
async function Lw(e) {
  return await ot("local_ai_delete_chat_history", {
    historyId: e
  });
}
async function Iw() {
  return await ot("local_ai_clear_chat_histories");
}
const Ow = ["disabled"], $w = {
  key: 0,
  class: "custom-button__loading"
}, Rw = /* @__PURE__ */ oe({
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
    return (n, o) => (T(), N("button", {
      class: D([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: o[0] || (o[0] = (r) => n.$emit("click", r))
    }, [
      e.loading ? (T(), N("div", $w, o[1] || (o[1] = [
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
      ]))) : U("v-if", !0),
      le(n.$slots, "default", {}, void 0, !0)
    ], 10, Ow));
  }
}), sr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, en = /* @__PURE__ */ sr(Rw, [["__scopeId", "data-v-5d7f8015"]]), Mw = { class: "dialog-footer-default" }, Pw = { class: "footer-left" }, Nw = { class: "footer-right" }, Dw = /* @__PURE__ */ oe({
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
    const o = e, r = n, a = P(o.modelValue), s = C(() => ["app-dialog", o.customClass].filter(Boolean).join(" "));
    de(
      () => o.modelValue,
      (d) => {
        a.value = d;
      }
    ), de(a, (d) => {
      r("update:modelValue", d);
    });
    const i = () => {
      r("close");
    }, c = () => {
      r("confirm");
    }, u = () => {
      a.value = !1, r("cancel");
    };
    return t({
      open: () => {
        a.value = !0;
      },
      close: () => {
        a.value = !1;
      }
    }), (d, m) => {
      const g = ky;
      return T(), ee(g, {
        modelValue: l(a),
        "onUpdate:modelValue": m[0] || (m[0] = (y) => tn(a) ? a.value = y : null),
        title: d.title,
        width: d.width,
        "close-on-click-modal": d.closeOnClickModal,
        draggable: d.draggable,
        center: d.center,
        "show-close": d.showClose,
        "close-on-press-escape": d.closeOnPressEscape,
        "append-to-body": d.appendToBody,
        "align-center": d.alignCenter,
        "custom-class": l(s),
        onClose: i
      }, Ia({
        default: X(() => [
          le(d.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        d.$slots.header ? {
          name: "header",
          fn: X(() => [
            le(d.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        d.$slots.footer || d.showDefaultFooter ? {
          name: "footer",
          fn: X(() => [
            le(d.$slots, "footer", {}, () => [
              f("div", Mw, [
                f("div", Pw, [
                  le(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                f("div", Nw, [
                  _(en, { onClick: u }, {
                    default: X(() => [
                      mt(
                        L(d.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _(en, {
                    type: "primary",
                    loading: d.loading,
                    onClick: c
                  }, {
                    default: X(() => [
                      mt(
                        L(d.confirmText),
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
}), dd = /* @__PURE__ */ sr(Dw, [["__scopeId", "data-v-a7e8a5d6"]]), zw = { class: "confirm-content" }, Bw = { class: "confirm-footer" }, Fw = /* @__PURE__ */ oe({
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
    const o = e, r = n, a = P(o.modelValue), s = C(() => {
      const d = ["confirm-dialog"];
      return o.type === "warning" ? d.push("warning-dialog") : o.type === "danger" && d.push("delete-dialog"), d.join(" ");
    }), i = C(() => o.type === "danger" ? "danger" : o.type === "warning" ? "warning" : "primary");
    de(
      () => o.modelValue,
      (d) => {
        a.value = d;
      }
    ), de(a, (d) => {
      r("update:modelValue", d);
    });
    const c = () => {
      r("confirm");
    }, u = () => {
      a.value = !1, r("cancel");
    };
    return t({
      open: () => {
        a.value = !0;
      },
      close: () => {
        a.value = !1;
      }
    }), (d, m) => (T(), ee(dd, {
      modelValue: l(a),
      "onUpdate:modelValue": m[0] || (m[0] = (g) => tn(a) ? a.value = g : null),
      title: d.title,
      width: d.width,
      center: d.center,
      "show-close": d.showClose,
      "custom-class": l(s)
    }, {
      footer: X(() => [
        f("div", Bw, [
          d.showCancelButton ? (T(), ee(en, {
            key: 0,
            type: "default",
            onClick: u
          }, {
            default: X(() => [
              mt(
                L(d.cancelText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : U("v-if", !0),
          _(en, {
            type: l(i),
            loading: d.loading,
            onClick: c
          }, {
            default: X(() => [
              mt(
                L(d.confirmText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "loading"])
        ])
      ]),
      default: X(() => [
        f("div", zw, [
          le(d.$slots, "default", {}, () => [
            mt(
              L(d.message),
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
}), jw = /* @__PURE__ */ sr(Fw, [["__scopeId", "data-v-875c8d56"]]), Oe = {
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
      duration: r = 3e3,
      showClose: a = !1
    } = e;
    o === "center" ? iw({
      message: t,
      type: n,
      duration: r,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : vw({
      message: t,
      type: n,
      position: o,
      duration: r,
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
}, Vw = "snippets-code:developer-mode", fd = "snippets-code:frontend-diagnostics", Hw = 240, mr = "[REDACTED]", ss = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${mr}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${mr}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  mr
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${mr}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${mr}`
), pd = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return ss(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return ss(
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
    return ss(String(e));
  }
}, Ww = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Uw = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(fd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, cl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Vw) === "true";
  } catch {
    return !1;
  }
}, Gw = (e, t, n) => {
  if (!cl() || typeof localStorage > "u") return;
  const o = Uw();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Ww(),
    message: ss(t),
    data: pd(n)
  });
  try {
    localStorage.setItem(
      fd,
      JSON.stringify(o.slice(-Hw))
    );
  } catch {
  }
}, Kw = () => cl(), qw = (e) => e === "error" || cl(), Qr = (e, t, n) => {
  Gw(e, t, n), qw(e) && ot("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : pd(n)
  }).catch(() => {
  });
}, Ot = {
  info: (e, t, ...n) => {
    Qr("info", e, t);
  },
  error: (e, t) => {
    Qr("error", e, t);
  },
  warn: (e, t) => {
    Qr("warn", e, t);
  },
  debug: (e, t) => {
    Kw() && Qr("debug", e, t);
  }
}, Zw = /* @__PURE__ */ new Set([
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
]), Yw = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), Xw = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), Qw = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), md = 5, Jw = 1024 * 1024, ek = 5 * 1024 * 1024, ac = 4e4, Qs = (e) => e?.map((t) => ({ ...t })) ?? [], ul = (e) => e.split(".").pop()?.toLowerCase() ?? "", hd = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, dl = (e) => Yw.has(e.type) || Xw.has(ul(e.name)), gd = (e) => e.type.startsWith("text/") || Zw.has(ul(e.name)), tk = (e) => Qw.has(ul(e.name)), nk = async (e) => await new Promise((t, n) => {
  const o = new FileReader();
  o.onload = () => t(String(o.result ?? "")), o.onerror = () => n(o.error ?? new Error("read failed")), o.readAsDataURL(e);
}), ok = async (e) => {
  const t = await e.text();
  return t.length <= ac ? { text: t, truncated: !1 } : {
    text: t.slice(0, ac),
    truncated: !0
  };
}, rk = (e, t) => {
  const n = t.filter(
    (r) => r.type === "text" && r.status === "parsed"
  );
  if (!n.length) return e;
  const o = n.map((r, a) => {
    const s = r.error === "truncated";
    return [
      `--- 文件 ${a + 1}: ${r.name} ---`,
      s ? "以下文件内容已截断。" : "",
      r.text ?? "",
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
}, Js = 160, vd = (e) => {
  const t = e.trim();
  if (!t) return 0;
  const n = (t.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, a = (t.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((s, i) => /^[A-Za-z0-9_]+$/.test(i) ? s + Math.max(1, Math.ceil(i.length / 4)) : s + 1, 0);
  return Math.max(1, Math.ceil(n + a));
}, ea = (e) => Math.max(0, Math.ceil(e.length / 4)), sk = (e) => Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0, ak = (e, t) => {
  const n = Object.entries(t).filter(
    ([, o]) => o != null
  );
  return {
    ...e,
    ...Object.fromEntries(n)
  };
}, bd = (e) => Array.isArray(e) ? e.filter((t) => t.type === "text").map((t) => t.text).join(`
`) : e, lk = (e) => {
  const t = e.attachments?.filter(
    (a) => a.status === "parsed"
  ) ?? [], n = rk(
    e.content,
    t
  ), o = t.filter(
    (a) => a.type === "image" && a.dataUrl
  );
  if (!o.length) return n;
  const r = [{ type: "text", text: n }];
  for (const a of o)
    r.push({
      type: "image_url",
      image_url: { url: a.dataUrl ?? "" }
    });
  return r;
}, nr = (e) => vd(
  e.map((t) => `${t.role}: ${bd(t.content)}`).join(`
`)
), lc = (e, t, n) => {
  const o = Math.max(240, t * 4);
  return e.length <= o ? e : `${n}

${e.slice(-o)}`;
}, hr = (e) => String(e).padStart(2, "0"), ik = (e = /* @__PURE__ */ new Date()) => {
  const t = -e.getTimezoneOffset() / 60, n = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${t >= 0 ? "+" : ""}${t}`, o = [
    e.getFullYear(),
    hr(e.getMonth() + 1),
    hr(e.getDate())
  ].join("-"), r = [
    hr(e.getHours()),
    hr(e.getMinutes()),
    hr(e.getSeconds())
  ].join(":"), a = e.toLocaleDateString("zh-CN", { weekday: "long" });
  return { isoDate: o, localTime: r, timeZone: n, weekday: a };
}, ck = () => {
  const { isoDate: e, localTime: t, timeZone: n, weekday: o } = ik();
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
}, uk = (e) => {
  const t = e.filter((o) => o.role === "system").map((o) => bd(o.content).trim()).filter(Boolean), n = e.filter(
    (o) => o.role !== "system"
  );
  return t.length ? [
    { role: "system", content: t.join(`

---

`) },
    ...n
  ] : n;
}, dk = (e, t, n) => {
  if (e.role !== "assistant" || typeof e.content != "string" || t < Js)
    return null;
  let o = t, r = {
    ...e,
    content: lc(
      e.content,
      o,
      n
    )
  };
  for (; nr([r]) > t && o > Js; )
    o = Math.max(
      Js,
      Math.floor(o * 0.7)
    ), r = {
      ...e,
      content: lc(
        e.content,
        o,
        n
      )
    };
  return nr([r]) <= t ? r : null;
}, fk = (e, t, n) => {
  const o = [];
  let r = 0;
  for (let a = e.length - 1; a >= 0; a -= 1) {
    const s = e[a], i = nr([s]);
    if (r + i <= t || o.length === 0) {
      o.unshift(s), r += i;
      continue;
    }
    const c = t - r, u = dk(
      s,
      c,
      n
    );
    u && (o.unshift(u), r += nr([u]));
  }
  return o;
}, Ao = (e) => `${Date.now()}-${e}-${Math.random().toString(16).slice(2, 8)}`, or = (e) => e.type === "root", Ns = (e) => new Map(e.map((t) => [t.id, t])), jr = (e) => e.find(or), Vr = (e, t) => {
  if (!t) return null;
  const n = Ns(e);
  let o = n.get(t);
  const r = /* @__PURE__ */ new Set();
  for (; o?.childIds?.length && !r.has(o.id); )
    r.add(o.id), o = n.get(o.childIds[o.childIds.length - 1]);
  return o?.id ?? null;
}, pk = (e, t) => {
  if (e.some(or)) {
    const a = e.map((i) => ({
      ...i,
      type: i.type ?? "text",
      parentId: i.parentId ?? null,
      childIds: i.childIds ?? []
    })), s = jr(a);
    return {
      messages: a,
      currentNodeId: Vr(a, a.at(-1)?.id) ?? s?.id ?? null
    };
  }
  const n = {
    id: Ao("root"),
    role: "system",
    type: "root",
    content: "",
    createdAt: t,
    parentId: null,
    childIds: []
  }, o = [n];
  let r = n.id;
  for (const a of e) {
    const s = {
      ...a,
      role: a.role === "system" ? "assistant" : a.role,
      type: "text",
      parentId: r,
      childIds: []
    };
    o.find((c) => c.id === r)?.childIds?.push(s.id), o.push(s), r = s.id;
  }
  return { messages: o, currentNodeId: r };
}, yd = (e, t) => {
  if (!t) return [];
  const n = Ns(e), o = [], r = /* @__PURE__ */ new Set();
  let a = n.get(t);
  for (; a && !r.has(a.id); )
    r.add(a.id), o.unshift(a), a = a.parentId ? n.get(a.parentId) : void 0;
  return o;
}, as = (e) => {
  if (!e) return [];
  const t = e.currentNodeId ?? Vr(e.messages, jr(e.messages)?.id);
  return yd(e.messages, t).filter(
    (n) => !or(n)
  );
}, mk = (e) => {
  if (!e) return [];
  const t = Ns(e.messages), n = (o) => Vr(e.messages, o) ?? o;
  return as(e).map((o) => {
    const a = (o.parentId ? t.get(o.parentId) : void 0)?.childIds ?? [o.id];
    return {
      message: o,
      siblingLeafNodeIds: a.map(n),
      siblingCurrentIndex: Math.max(0, a.indexOf(o.id))
    };
  });
}, ta = (e, t) => {
  const n = jr(e.messages), o = t.parentId ?? e.currentNodeId ?? n?.id ?? null, r = {
    ...t,
    type: "text",
    parentId: o,
    childIds: []
  };
  if (e.messages.push(r), o) {
    const a = e.messages.find((s) => s.id === o);
    a && (a.childIds = [...a.childIds ?? [], r.id]);
  }
  return e.currentNodeId = r.id, r;
}, hk = (e, t) => {
  const n = Ns(e), o = /* @__PURE__ */ new Set(), r = (a) => {
    if (!o.has(a)) {
      o.add(a);
      for (const s of n.get(a)?.childIds ?? []) r(s);
    }
  };
  return r(t), o;
}, gk = (e, t, n) => {
  const o = e.find((i) => i.id === n);
  if (!o || or(o)) return null;
  const r = hk(e, n), a = e.filter((i) => !r.has(i.id)).map((i) => ({
    ...i,
    childIds: (i.childIds ?? []).filter((c) => !r.has(c))
  })), s = t && r.has(t) ? Vr(a, o.parentId) ?? jr(a)?.id ?? null : t;
  return {
    messages: a,
    currentNodeId: s,
    deletedIds: r
  };
};
async function ya(e = {}) {
  return typeof e == "object" && Object.freeze(e), await ot("plugin:dialog|open", { options: e });
}
const vk = [
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
], Ds = (e, t) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: t,
  mime: e.type || "application/octet-stream",
  size: e.size,
  status: "pending"
}), bk = async (e, t) => {
  const n = Ds(e, "image");
  if (e.size > ek)
    return {
      ...n,
      status: "error",
      error: t("localAi.imageTooLarge")
    };
  try {
    return {
      ...n,
      status: "parsed",
      dataUrl: await nk(e)
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, yk = async (e, t) => {
  const n = Ds(e, "text");
  if (e.size > Jw)
    return {
      ...n,
      status: "error",
      error: t("localAi.textFileTooLarge")
    };
  try {
    const o = await ok(e);
    return {
      ...n,
      status: "parsed",
      text: o.text,
      error: o.truncated ? "truncated" : void 0
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, wk = async (e, t) => dl(e) ? bk(e, t) : gd(e) ? yk(e, t) : {
  ...Ds(e, "unsupported"),
  status: "error",
  error: tk(e) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
}, ic = async (e, t, n) => {
  const o = Array.from(t), r = md - e.value.length;
  if (r <= 0) {
    Oe.msg(n("localAi.attachmentLimit"), "warning");
    return;
  }
  o.length > r && Oe.msg(n("localAi.attachmentLimit"), "warning");
  const a = o.slice(0, r), s = a.map(
    (i) => Ds(
      i,
      dl(i) ? "image" : gd(i) ? "text" : "unsupported"
    )
  );
  e.value.push(...s), await Promise.all(
    a.map(async (i, c) => {
      const u = await wk(i, n), d = e.value.findIndex(
        (m) => m.id === s[c].id
      );
      d >= 0 && (e.value[d] = u);
    })
  );
}, kk = (e, t) => {
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
}, _k = (e) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: e.kind,
  mime: e.mime,
  size: e.size,
  status: e.error ? "error" : "parsed",
  text: e.text ?? void 0,
  dataUrl: e.dataUrl ?? void 0,
  error: void 0
}), Tk = () => {
  const { t: e } = Pr(), t = P([]), n = P(!1);
  return {
    attachments: t,
    attachmentPicking: n,
    pickAttachmentFiles: async () => {
      const o = md - t.value.length;
      if (o <= 0 || n.value) {
        o <= 0 && Oe.msg(e("localAi.attachmentLimit"), "warning");
        return;
      }
      n.value = !0;
      try {
        const r = await ya({
          title: e("localAi.addAttachment"),
          directory: !1,
          multiple: !0,
          filters: [
            {
              name: e("localAi.attachment"),
              extensions: vk
            }
          ]
        });
        if (!r) return;
        const a = (Array.isArray(r) ? r : [r]).slice(
          0,
          o
        );
        (Array.isArray(r) ? r.length : 1) > o && Oe.msg(e("localAi.attachmentLimit"), "warning");
        const s = await Ew(a);
        t.value.push(
          ...s.map((i) => ({
            ..._k(i),
            error: kk(i, e)
          }))
        );
      } catch (r) {
        Oe.msg(
          `${e("localAi.attachmentReadFailed")}: ${String(r)}`,
          "error"
        );
      } finally {
        n.value = !1;
      }
    },
    handleAttachmentDrop: async (o) => {
      o.dataTransfer?.files.length && await ic(t, o.dataTransfer.files, e);
    },
    handleComposerPaste: async (o) => {
      const a = Array.from(o.clipboardData?.files ?? []).filter(dl);
      a.length && (o.preventDefault(), await ic(t, a, e));
    },
    removeAttachment: (o) => {
      t.value = t.value.filter(
        (r) => r.id !== o
      );
    },
    attachmentStatusText: (o) => o.status === "pending" ? e("localAi.attachmentPending") : o.status === "error" ? o.error ?? "" : o.error === "truncated" ? e("localAi.attachmentTruncated") : e("localAi.attachmentParsed")
  };
};
function fl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var No = fl();
function wd(e) {
  No = e;
}
var xr = { exec: () => null };
function xe(e, t = "") {
  let n = typeof e == "string" ? e : e.source, o = { replace: (r, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace($t.caret, "$1"), n = n.replace(r, s), o;
  }, getRegex: () => new RegExp(n, t) };
  return o;
}
var Sk = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), $t = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Ak = /^(?:[ \t]*(?:\n|$))+/, Ck = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ek = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, xk = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, pl = /(?:[*+-]|\d{1,9}[.)])/, kd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _d = xe(kd).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Lk = xe(kd).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ml = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ik = /^[^\n]+/, hl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Ok = xe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", hl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $k = xe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, pl).getRegex(), zs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", gl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Rk = xe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", gl).replace("tag", zs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Td = xe(ml).replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zs).getRegex(), Mk = xe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Td).getRegex(), vl = { blockquote: Mk, code: Ck, def: Ok, fences: Ek, heading: xk, hr: Hr, html: Rk, lheading: _d, list: $k, newline: Ak, paragraph: Td, table: xr, text: Ik }, cc = xe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zs).getRegex(), Pk = { ...vl, lheading: Lk, table: cc, paragraph: xe(ml).replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", cc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zs).getRegex() }, Nk = { ...vl, html: xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", gl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: xr, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: xe(ml).replace("hr", Hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", _d).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Dk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, zk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Sd = /^( {2,}|\\)\n(?!\s*$)/, Bk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Bs = /[\p{P}\p{S}]/u, bl = /[\s\p{P}\p{S}]/u, Ad = /[^\s\p{P}\p{S}]/u, Fk = xe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, bl).getRegex(), Cd = /(?!~)[\p{P}\p{S}]/u, jk = /(?!~)[\s\p{P}\p{S}]/u, Vk = /(?:[^\s\p{P}\p{S}]|~)/u, Hk = xe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Sk ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Ed = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Wk = xe(Ed, "u").replace(/punct/g, Bs).getRegex(), Uk = xe(Ed, "u").replace(/punct/g, Cd).getRegex(), xd = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Gk = xe(xd, "gu").replace(/notPunctSpace/g, Ad).replace(/punctSpace/g, bl).replace(/punct/g, Bs).getRegex(), Kk = xe(xd, "gu").replace(/notPunctSpace/g, Vk).replace(/punctSpace/g, jk).replace(/punct/g, Cd).getRegex(), qk = xe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ad).replace(/punctSpace/g, bl).replace(/punct/g, Bs).getRegex(), Zk = xe(/\\(punct)/, "gu").replace(/punct/g, Bs).getRegex(), Yk = xe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xk = xe(gl).replace("(?:-->|$)", "-->").getRegex(), Qk = xe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xk).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), bs = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Jk = xe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", bs).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ld = xe(/^!?\[(label)\]\[(ref)\]/).replace("label", bs).replace("ref", hl).getRegex(), Id = xe(/^!?\[(ref)\](?:\[\])?/).replace("ref", hl).getRegex(), e2 = xe("reflink|nolink(?!\\()", "g").replace("reflink", Ld).replace("nolink", Id).getRegex(), uc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, yl = { _backpedal: xr, anyPunctuation: Zk, autolink: Yk, blockSkip: Hk, br: Sd, code: zk, del: xr, emStrongLDelim: Wk, emStrongRDelimAst: Gk, emStrongRDelimUnd: qk, escape: Dk, link: Jk, nolink: Id, punctuation: Fk, reflink: Ld, reflinkSearch: e2, tag: Qk, text: Bk, url: xr }, t2 = { ...yl, link: xe(/^!?\[(label)\]\((.*?)\)/).replace("label", bs).getRegex(), reflink: xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", bs).getRegex() }, wa = { ...yl, emStrongRDelimAst: Kk, emStrongLDelim: Uk, url: xe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", uc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: xe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", uc).getRegex() }, n2 = { ...wa, br: xe(Sd).replace("{2,}", "*").getRegex(), text: xe(wa.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Jr = { normal: vl, gfm: Pk, pedantic: Nk }, gr = { normal: yl, gfm: wa, breaks: n2, pedantic: t2 }, o2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, dc = (e) => o2[e];
function Wn(e, t) {
  if (t) {
    if ($t.escapeTest.test(e)) return e.replace($t.escapeReplace, dc);
  } else if ($t.escapeTestNoEncode.test(e)) return e.replace($t.escapeReplaceNoEncode, dc);
  return e;
}
function fc(e) {
  try {
    e = encodeURI(e).replace($t.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function pc(e, t) {
  let n = e.replace($t.findPipe, (a, s, i) => {
    let c = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), o = n.split($t.splitPipe), r = 0;
  if (o[0].trim() || o.shift(), o.length > 0 && !o.at(-1)?.trim() && o.pop(), t) if (o.length > t) o.splice(t);
  else for (; o.length < t; ) o.push("");
  for (; r < o.length; r++) o[r] = o[r].trim().replace($t.slashPipe, "|");
  return o;
}
function vr(e, t, n) {
  let o = e.length;
  if (o === 0) return "";
  let r = 0;
  for (; r < o && e.charAt(o - r - 1) === t; )
    r++;
  return e.slice(0, o - r);
}
function r2(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let o = 0; o < e.length; o++) if (e[o] === "\\") o++;
  else if (e[o] === t[0]) n++;
  else if (e[o] === t[1] && (n--, n < 0)) return o;
  return n > 0 ? -2 : -1;
}
function mc(e, t, n, o, r) {
  let a = t.href, s = t.title || null, i = e[1].replace(r.other.outputLinkReplace, "$1");
  o.state.inLink = !0;
  let c = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: o.inlineTokens(i) };
  return o.state.inLink = !1, c;
}
function s2(e, t, n) {
  let o = e.match(n.other.indentCodeCompensation);
  if (o === null) return t;
  let r = o[1];
  return t.split(`
`).map((a) => {
    let s = a.match(n.other.beginningSpace);
    if (s === null) return a;
    let [i] = s;
    return i.length >= r.length ? a.slice(r.length) : a;
  }).join(`
`);
}
var ys = class {
  constructor(e) {
    De(this, "options");
    De(this, "rules");
    De(this, "lexer");
    this.options = e || No;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : vr(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], o = s2(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: o };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let o = vr(n, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (n = o.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: vr(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = vr(t[0], `
`).split(`
`), o = "", r = "", a = [];
      for (; n.length > 0; ) {
        let s = !1, i = [], c;
        for (c = 0; c < n.length; c++) if (this.rules.other.blockquoteStart.test(n[c])) i.push(n[c]), s = !0;
        else if (!s) i.push(n[c]);
        else break;
        n = n.slice(c);
        let u = i.join(`
`), d = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        o = o ? `${o}
${u}` : u, r = r ? `${r}
${d}` : d;
        let m = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, a, !0), this.lexer.state.top = m, n.length === 0) break;
        let g = a.at(-1);
        if (g?.type === "code") break;
        if (g?.type === "blockquote") {
          let y = g, h = y.raw + `
` + n.join(`
`), b = this.blockquote(h);
          a[a.length - 1] = b, o = o.substring(0, o.length - y.raw.length) + b.raw, r = r.substring(0, r.length - y.text.length) + b.text;
          break;
        } else if (g?.type === "list") {
          let y = g, h = y.raw + `
` + n.join(`
`), b = this.list(h);
          a[a.length - 1] = b, o = o.substring(0, o.length - g.raw.length) + b.raw, r = r.substring(0, r.length - y.raw.length) + b.raw, n = h.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: a, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), o = n.length > 1, r = { type: "list", raw: "", ordered: o, start: o ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = o ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = o ? n : "[*+-]");
      let a = this.rules.other.listItemRegex(n), s = !1;
      for (; e; ) {
        let c = !1, u = "", d = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), g = e.split(`
`, 1)[0], y = !m.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, d = m.trimStart()) : y ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, d = m.slice(h), h += t[1].length), y && this.rules.other.blankLine.test(g) && (u += g + `
`, e = e.substring(g.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(h), E = this.rules.other.hrRegex(h), w = this.rules.other.fencesBeginRegex(h), R = this.rules.other.headingBeginRegex(h), F = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let O = e.split(`
`, 1)[0], A;
            if (g = O, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), A = g) : A = g.replace(this.rules.other.tabCharGlobal, "    "), w.test(g) || R.test(g) || F.test(g) || b.test(g) || E.test(g)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= h || !g.trim()) d += `
` + A.slice(h);
            else {
              if (y || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || w.test(m) || R.test(m) || E.test(m)) break;
              d += `
` + g;
            }
            !y && !g.trim() && (y = !0), u += O + `
`, e = e.substring(O.length + 1), m = A.slice(h);
          }
        }
        r.loose || (s ? r.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (s = !0)), r.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: !1, text: d, tokens: [] }), r.raw += u;
      }
      let i = r.items.at(-1);
      if (i) i.raw = i.raw.trimEnd(), i.text = i.text.trimEnd();
      else return;
      r.raw = r.raw.trimEnd();
      for (let c of r.items) {
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
            c.checked = d.checked, r.loose ? c.tokens[0] && ["paragraph", "text"].includes(c.tokens[0].type) && "tokens" in c.tokens[0] && c.tokens[0].tokens ? (c.tokens[0].raw = d.raw + c.tokens[0].raw, c.tokens[0].text = d.raw + c.tokens[0].text, c.tokens[0].tokens.unshift(d)) : c.tokens.unshift({ type: "paragraph", raw: d.raw, text: d.raw, tokens: [d] }) : c.tokens.unshift(d);
          }
        }
        if (!r.loose) {
          let u = c.tokens.filter((m) => m.type === "space"), d = u.length > 0 && u.some((m) => this.rules.other.anyLine.test(m.raw));
          r.loose = d;
        }
      }
      if (r.loose) for (let c of r.items) {
        c.loose = !0;
        for (let u of c.tokens) u.type === "text" && (u.type = "paragraph");
      }
      return r;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: !0, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), o = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: o, title: r };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = pc(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let s of o) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of r) a.rows.push(pc(s, a.header.length).map((i, c) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[c] })));
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
        let a = vr(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = r2(t[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, s).trim(), t[3] = "";
        }
      }
      let o = t[2], r = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(o);
        a && (o = a[1], r = a[3]);
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), mc(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let o = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[o.toLowerCase()];
      if (!r) {
        let a = n[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return mc(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!o || o[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let r = [...o[0]].length - 1, a, s, i = r, c = 0, u = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + r); (o = u.exec(t)) != null; ) {
        if (a = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !a) continue;
        if (s = [...a].length, o[3] || o[4]) {
          i += s;
          continue;
        } else if ((o[5] || o[6]) && r % 3 && !((r + s) % 3)) {
          c += s;
          continue;
        }
        if (i -= s, i > 0) continue;
        s = Math.min(s, s + i + c);
        let d = [...o[0]][0].length, m = e.slice(0, r + o.index + d + s);
        if (Math.min(r, s) % 2) {
          let y = m.slice(1, -1);
          return { type: "em", raw: m, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let g = m.slice(2, -2);
        return { type: "strong", raw: m, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), o = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return o && r && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
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
        let r;
        do
          r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (r !== t[0]);
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
}, dn = class ka {
  constructor(t) {
    De(this, "tokens");
    De(this, "options");
    De(this, "state");
    De(this, "inlineQueue");
    De(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || No, this.options.tokenizer = this.options.tokenizer || new ys(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: $t, block: Jr.normal, inline: gr.normal };
    this.options.pedantic ? (n.block = Jr.pedantic, n.inline = gr.pedantic) : this.options.gfm && (n.block = Jr.gfm, this.options.breaks ? n.inline = gr.breaks : n.inline = gr.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: Jr, inline: gr };
  }
  static lex(t, n) {
    return new ka(n).lex(t);
  }
  static lexInline(t, n) {
    return new ka(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace($t.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let o = this.inlineQueue[n];
      this.inlineTokens(o.src, o.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], o = !1) {
    for (this.options.pedantic && (t = t.replace($t.tabCharGlobal, "    ").replace($t.spaceLine, "")); t; ) {
      let r;
      if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, t, n)) ? (t = t.substring(r.raw.length), n.push(r), !0) : !1)) continue;
      if (r = this.tokenizer.space(t)) {
        t = t.substring(r.raw.length);
        let s = n.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : n.push(r);
        continue;
      }
      if (r = this.tokenizer.code(t)) {
        t = t.substring(r.raw.length);
        let s = n.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : n.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.list(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.html(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.def(t)) {
        t = t.substring(r.raw.length);
        let s = n.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, n.push(r));
        continue;
      }
      if (r = this.tokenizer.table(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      let a = t;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, i = t.slice(1), c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, i), typeof c == "number" && c >= 0 && (s = Math.min(s, c));
        }), s < 1 / 0 && s >= 0 && (a = t.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(a))) {
        let s = n.at(-1);
        o && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : n.push(r), o = a.length !== t.length, t = t.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(t)) {
        t = t.substring(r.raw.length);
        let s = n.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : n.push(r);
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
    let o = t, r = null;
    if (this.tokens.links) {
      let c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; ) c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; ) o = o.slice(0, r.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let a;
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) a = r[2] ? r[2].length : 0, o = o.slice(0, r.index + a) + "[" + "a".repeat(r[0].length - a - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    o = this.options.hooks?.emStrongMask?.call({ lexer: this }, o) ?? o;
    let s = !1, i = "";
    for (; t; ) {
      s || (i = ""), s = !1;
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
        let d = 1 / 0, m = t.slice(1), g;
        this.options.extensions.startInline.forEach((y) => {
          g = y.call({ lexer: this }, m), typeof g == "number" && g >= 0 && (d = Math.min(d, g));
        }), d < 1 / 0 && d >= 0 && (u = t.substring(0, d + 1));
      }
      if (c = this.tokenizer.inlineText(u)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (i = c.raw.slice(-1)), s = !0;
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
}, ws = class {
  constructor(e) {
    De(this, "options");
    De(this, "parser");
    this.options = e || No;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let o = (t || "").match($t.notSpaceStart)?.[0], r = e.replace($t.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Wn(o) + '">' + (n ? r : Wn(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : Wn(r, !0)) + `</code></pre>
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
    for (let s = 0; s < e.items.length; s++) {
      let i = e.items[s];
      o += this.listitem(i);
    }
    let r = t ? "ol" : "ul", a = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + a + `>
` + o + "</" + r + `>
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
    for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let o = "";
    for (let r = 0; r < e.rows.length; r++) {
      let a = e.rows[r];
      n = "";
      for (let s = 0; s < a.length; s++) n += this.tablecell(a[s]);
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
    let o = this.parser.parseInline(n), r = fc(e);
    if (r === null) return o;
    e = r;
    let a = '<a href="' + e + '"';
    return t && (a += ' title="' + Wn(t) + '"'), a += ">" + o + "</a>", a;
  }
  image({ href: e, title: t, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let r = fc(e);
    if (r === null) return Wn(n);
    e = r;
    let a = `<img src="${e}" alt="${n}"`;
    return t && (a += ` title="${Wn(t)}"`), a += ">", a;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Wn(e.text);
  }
}, wl = class {
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
}, fn = class _a {
  constructor(t) {
    De(this, "options");
    De(this, "renderer");
    De(this, "textRenderer");
    this.options = t || No, this.options.renderer = this.options.renderer || new ws(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new wl();
  }
  static parse(t, n) {
    return new _a(n).parse(t);
  }
  static parseInline(t, n) {
    return new _a(n).parseInline(t);
  }
  parse(t) {
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let r = t[o];
      if (this.options.extensions?.renderers?.[r.type]) {
        let s = r, i = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (i !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(s.type)) {
          n += i || "";
          continue;
        }
      }
      let a = r;
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
    let o = "";
    for (let r = 0; r < t.length; r++) {
      let a = t[r];
      if (this.options.extensions?.renderers?.[a.type]) {
        let i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          o += i || "";
          continue;
        }
      }
      let s = a;
      switch (s.type) {
        case "escape": {
          o += n.text(s);
          break;
        }
        case "html": {
          o += n.html(s);
          break;
        }
        case "link": {
          o += n.link(s);
          break;
        }
        case "image": {
          o += n.image(s);
          break;
        }
        case "checkbox": {
          o += n.checkbox(s);
          break;
        }
        case "strong": {
          o += n.strong(s);
          break;
        }
        case "em": {
          o += n.em(s);
          break;
        }
        case "codespan": {
          o += n.codespan(s);
          break;
        }
        case "br": {
          o += n.br(s);
          break;
        }
        case "del": {
          o += n.del(s);
          break;
        }
        case "text": {
          o += n.text(s);
          break;
        }
        default: {
          let i = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return o;
  }
}, ts, wr = (ts = class {
  constructor(e) {
    De(this, "options");
    De(this, "block");
    this.options = e || No;
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
    return this.block ? dn.lex : dn.lexInline;
  }
  provideParser() {
    return this.block ? fn.parse : fn.parseInline;
  }
}, De(ts, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), De(ts, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), ts), a2 = class {
  constructor(...e) {
    De(this, "defaults", fl());
    De(this, "options", this.setOptions);
    De(this, "parse", this.parseMarkdown(!0));
    De(this, "parseInline", this.parseMarkdown(!1));
    De(this, "Parser", fn);
    De(this, "Renderer", ws);
    De(this, "TextRenderer", wl);
    De(this, "Lexer", dn);
    De(this, "Tokenizer", ys);
    De(this, "Hooks", wr);
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let o of e) switch (n = n.concat(t.call(this, o)), o.type) {
      case "table": {
        let r = o;
        for (let a of r.header) n = n.concat(this.walkTokens(a.tokens, t));
        for (let a of r.rows) for (let s of a) n = n.concat(this.walkTokens(s.tokens, t));
        break;
      }
      case "list": {
        let r = o;
        n = n.concat(this.walkTokens(r.items, t));
        break;
      }
      default: {
        let r = o;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((a) => {
          let s = r[a].flat(1 / 0);
          n = n.concat(this.walkTokens(s, t));
        }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let o = { ...n };
      if (o.async = this.defaults.async || o.async || !1, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let a = t.renderers[r.name];
          a ? t.renderers[r.name] = function(...s) {
            let i = r.renderer.apply(this, s);
            return i === !1 && (i = a.apply(this, s)), i;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = t[r.level];
          a ? a.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), o.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new ws(this.defaults);
        for (let a in n.renderer) {
          if (!(a in r)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let s = a, i = n.renderer[s], c = r[s];
          r[s] = (...u) => {
            let d = i.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d || "";
          };
        }
        o.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new ys(this.defaults);
        for (let a in n.tokenizer) {
          if (!(a in r)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let s = a, i = n.tokenizer[s], c = r[s];
          r[s] = (...u) => {
            let d = i.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d;
          };
        }
        o.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new wr();
        for (let a in n.hooks) {
          if (!(a in r)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let s = a, i = n.hooks[s], c = r[s];
          wr.passThroughHooks.has(a) ? r[s] = (u) => {
            if (this.defaults.async && wr.passThroughHooksRespectAsync.has(a)) return (async () => {
              let m = await i.call(r, u);
              return c.call(r, m);
            })();
            let d = i.call(r, u);
            return c.call(r, d);
          } : r[s] = (...u) => {
            if (this.defaults.async) return (async () => {
              let m = await i.apply(r, u);
              return m === !1 && (m = await c.apply(r, u)), m;
            })();
            let d = i.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d;
          };
        }
        o.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, a = n.walkTokens;
        o.walkTokens = function(s) {
          let i = [];
          return i.push(a.call(this, s)), r && (i = i.concat(r.call(this, s))), i;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return dn.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return fn.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (t, n) => {
      let o = { ...n }, r = { ...this.defaults, ...o }, a = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && o.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (r.hooks && (r.hooks.options = r, r.hooks.block = e), r.async) return (async () => {
        let s = r.hooks ? await r.hooks.preprocess(t) : t, i = await (r.hooks ? await r.hooks.provideLexer() : e ? dn.lex : dn.lexInline)(s, r), c = r.hooks ? await r.hooks.processAllTokens(i) : i;
        r.walkTokens && await Promise.all(this.walkTokens(c, r.walkTokens));
        let u = await (r.hooks ? await r.hooks.provideParser() : e ? fn.parse : fn.parseInline)(c, r);
        return r.hooks ? await r.hooks.postprocess(u) : u;
      })().catch(a);
      try {
        r.hooks && (t = r.hooks.preprocess(t));
        let s = (r.hooks ? r.hooks.provideLexer() : e ? dn.lex : dn.lexInline)(t, r);
        r.hooks && (s = r.hooks.processAllTokens(s)), r.walkTokens && this.walkTokens(s, r.walkTokens);
        let i = (r.hooks ? r.hooks.provideParser() : e ? fn.parse : fn.parseInline)(s, r);
        return r.hooks && (i = r.hooks.postprocess(i)), i;
      } catch (s) {
        return a(s);
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
}, Oo = new a2();
function Pe(e, t) {
  return Oo.parse(e, t);
}
Pe.options = Pe.setOptions = function(e) {
  return Oo.setOptions(e), Pe.defaults = Oo.defaults, wd(Pe.defaults), Pe;
};
Pe.getDefaults = fl;
Pe.defaults = No;
Pe.use = function(...e) {
  return Oo.use(...e), Pe.defaults = Oo.defaults, wd(Pe.defaults), Pe;
};
Pe.walkTokens = function(e, t) {
  return Oo.walkTokens(e, t);
};
Pe.parseInline = Oo.parseInline;
Pe.Parser = fn;
Pe.parser = fn.parse;
Pe.Renderer = ws;
Pe.TextRenderer = wl;
Pe.Lexer = dn;
Pe.lexer = dn.lex;
Pe.Tokenizer = ys;
Pe.Hooks = wr;
Pe.parse = Pe;
Pe.options;
Pe.setOptions;
Pe.use;
Pe.walkTokens;
Pe.parseInline;
fn.parse;
dn.lex;
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function l2(e) {
  if (Array.isArray(e)) return e;
}
function i2(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, a, s, i = [], c = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (o = a.call(n)).done) && (i.push(o.value), i.length !== t); c = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw r;
      }
    }
    return i;
  }
}
function c2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u2(e, t) {
  return l2(e) || i2(e, t) || d2(e, t) || c2();
}
function d2(e, t) {
  if (e) {
    if (typeof e == "string") return hc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hc(e, t) : void 0;
  }
}
const Od = Object.entries, gc = Object.setPrototypeOf, f2 = Object.isFrozen, p2 = Object.getPrototypeOf, m2 = Object.getOwnPropertyDescriptor;
let Rt = Object.freeze, sn = Object.seal, Ko = Object.create, $d = typeof Reflect < "u" && Reflect, Ta = $d.apply, Sa = $d.construct;
Rt || (Rt = function(t) {
  return t;
});
sn || (sn = function(t) {
  return t;
});
Ta || (Ta = function(t, n) {
  for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++)
    r[a - 2] = arguments[a];
  return t.apply(n, r);
});
Sa || (Sa = function(t) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    o[r - 1] = arguments[r];
  return new t(...o);
});
const Ho = ct(Array.prototype.forEach), h2 = ct(Array.prototype.lastIndexOf), vc = ct(Array.prototype.pop), Wo = ct(Array.prototype.push), g2 = ct(Array.prototype.splice), It = Array.isArray, kr = ct(String.prototype.toLowerCase), na = ct(String.prototype.toString), bc = ct(String.prototype.match), Uo = ct(String.prototype.replace), yc = ct(String.prototype.indexOf), v2 = ct(String.prototype.trim), b2 = ct(Number.prototype.toString), y2 = ct(Boolean.prototype.toString), wc = typeof BigInt > "u" ? null : ct(BigInt.prototype.toString), kc = typeof Symbol > "u" ? null : ct(Symbol.prototype.toString), Je = ct(Object.prototype.hasOwnProperty), br = ct(Object.prototype.toString), bt = ct(RegExp.prototype.test), yr = w2(TypeError);
function ct(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      o[r - 1] = arguments[r];
    return Ta(e, t, o);
  };
}
function w2(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return Sa(e, n);
  };
}
function ye(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kr;
  if (gc && gc(e, null), !It(t))
    return e;
  let o = t.length;
  for (; o--; ) {
    let r = t[o];
    if (typeof r == "string") {
      const a = n(r);
      a !== r && (f2(t) || (t[o] = a), r = a);
    }
    e[r] = !0;
  }
  return e;
}
function k2(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function At(e) {
  const t = Ko(null);
  for (const o of Od(e)) {
    var n = u2(o, 2);
    const r = n[0], a = n[1];
    Je(e, r) && (It(a) ? t[r] = k2(a) : a && typeof a == "object" && a.constructor === Object ? t[r] = At(a) : t[r] = a);
  }
  return t;
}
function _2(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return b2(e);
    case "boolean":
      return y2(e);
    case "bigint":
      return wc ? wc(e) : "0";
    case "symbol":
      return kc ? kc(e) : "Symbol()";
    case "undefined":
      return br(e);
    case "function":
    case "object": {
      if (e === null)
        return br(e);
      const t = e, n = xn(t, "toString");
      if (typeof n == "function") {
        const o = n(t);
        return typeof o == "string" ? o : br(o);
      }
      return br(e);
    }
    default:
      return br(e);
  }
}
function xn(e, t) {
  for (; e !== null; ) {
    const o = m2(e, t);
    if (o) {
      if (o.get)
        return ct(o.get);
      if (typeof o.value == "function")
        return ct(o.value);
    }
    e = p2(e);
  }
  function n() {
    return null;
  }
  return n;
}
function T2(e) {
  try {
    return bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const _c = Rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), oa = Rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ra = Rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), S2 = Rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), sa = Rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), A2 = Rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Tc = Rt(["#text"]), Sc = Rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), aa = Rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ac = Rt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), es = Rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), C2 = sn(/{{[\w\W]*|^[\w\W]*}}/g), E2 = sn(/<%[\w\W]*|^[\w\W]*%>/g), x2 = sn(/\${[\w\W]*/g), L2 = sn(/^data-[\-\w.\u00B7-\uFFFF]+$/), I2 = sn(/^aria-[\-\w]+$/), Cc = sn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), O2 = sn(/^(?:\w+script|data):/i), $2 = sn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), R2 = sn(/^html$/i), M2 = sn(/^[a-z][.\w]*(-[.\w]+)+$/i), En = {
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
}, P2 = function() {
  return typeof window > "u" ? null : window;
}, N2 = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const r = "data-tt-policy-suffix";
  n && n.hasAttribute(r) && (o = n.getAttribute(r));
  const a = "dompurify" + (o ? "#" + o : "");
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
}, Ec = function() {
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
function Rd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P2();
  const t = (ne) => Rd(ne);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const o = n, r = o.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, c = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, g = i.prototype, y = xn(g, "cloneNode"), h = xn(g, "remove"), b = xn(g, "nextSibling"), E = xn(g, "childNodes"), w = xn(g, "parentNode"), R = xn(g, "shadowRoot"), F = xn(g, "attributes"), O = s && s.prototype ? xn(s.prototype, "nodeType") : null, A = s && s.prototype ? xn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ne = n.createElement("template");
    ne.content && ne.content.ownerDocument && (n = ne.content.ownerDocument);
  }
  let x, $ = "";
  const K = n, Z = K.implementation, re = K.createNodeIterator, H = K.createDocumentFragment, ae = K.getElementsByTagName, fe = o.importNode;
  let ce = Ec();
  t.isSupported = typeof Od == "function" && typeof w == "function" && Z && Z.createHTMLDocument !== void 0;
  const M = C2, j = E2, B = x2, ie = L2, pe = I2, Te = O2, Q = $2, V = M2;
  let Ae = Cc, ge = null;
  const ve = ye({}, [..._c, ...oa, ...ra, ...sa, ...Tc]);
  let me = null;
  const q = ye({}, [...Sc, ...aa, ...Ac, ...es]);
  let ue = Object.seal(Ko(null, {
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
  })), Be = null, ft = null;
  const He = Object.seal(Ko(null, {
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
  let rt = !0, ht = !0, wt = !1, gt = !0, ut = !1, kt = !0, Qe = !1, Mt = !1, st = !1, tt = !1, Gt = !1, Pt = !1, G = !0, we = !1;
  const Ee = "user-content-";
  let Nt = !0, Me = !1, ln = {}, pt = null;
  const kn = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _n = null;
  const ho = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let Dt = null;
  const go = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Kt = "http://www.w3.org/1998/Math/MathML", qt = "http://www.w3.org/2000/svg", zt = "http://www.w3.org/1999/xhtml";
  let Zt = zt, vo = !1, bo = null;
  const Jt = ye({}, [Kt, qt, zt], na);
  let Bn = ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Tn = ye({}, ["annotation-xml"]);
  const ro = ye({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const yo = ["application/xhtml+xml", "text/html"], ar = "text/html";
  let Le = null, An = null;
  const Do = n.createElement("form"), zo = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Fn = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (An && An === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = At(v), Sn = // eslint-disable-next-line unicorn/prefer-includes
    yo.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? ar : v.PARSER_MEDIA_TYPE, Le = Sn === "application/xhtml+xml" ? na : kr, ge = Je(v, "ALLOWED_TAGS") && It(v.ALLOWED_TAGS) ? ye({}, v.ALLOWED_TAGS, Le) : ve, me = Je(v, "ALLOWED_ATTR") && It(v.ALLOWED_ATTR) ? ye({}, v.ALLOWED_ATTR, Le) : q, bo = Je(v, "ALLOWED_NAMESPACES") && It(v.ALLOWED_NAMESPACES) ? ye({}, v.ALLOWED_NAMESPACES, na) : Jt, Dt = Je(v, "ADD_URI_SAFE_ATTR") && It(v.ADD_URI_SAFE_ATTR) ? ye(At(go), v.ADD_URI_SAFE_ATTR, Le) : go, _n = Je(v, "ADD_DATA_URI_TAGS") && It(v.ADD_DATA_URI_TAGS) ? ye(At(ho), v.ADD_DATA_URI_TAGS, Le) : ho, pt = Je(v, "FORBID_CONTENTS") && It(v.FORBID_CONTENTS) ? ye({}, v.FORBID_CONTENTS, Le) : kn, Be = Je(v, "FORBID_TAGS") && It(v.FORBID_TAGS) ? ye({}, v.FORBID_TAGS, Le) : At({}), ft = Je(v, "FORBID_ATTR") && It(v.FORBID_ATTR) ? ye({}, v.FORBID_ATTR, Le) : At({}), ln = Je(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? At(v.USE_PROFILES) : v.USE_PROFILES : !1, rt = v.ALLOW_ARIA_ATTR !== !1, ht = v.ALLOW_DATA_ATTR !== !1, wt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, gt = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ut = v.SAFE_FOR_TEMPLATES || !1, kt = v.SAFE_FOR_XML !== !1, Qe = v.WHOLE_DOCUMENT || !1, tt = v.RETURN_DOM || !1, Gt = v.RETURN_DOM_FRAGMENT || !1, Pt = v.RETURN_TRUSTED_TYPE || !1, st = v.FORCE_BODY || !1, G = v.SANITIZE_DOM !== !1, we = v.SANITIZE_NAMED_PROPS || !1, Nt = v.KEEP_CONTENT !== !1, Me = v.IN_PLACE || !1, Ae = T2(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Cc, Zt = typeof v.NAMESPACE == "string" ? v.NAMESPACE : zt, Bn = Je(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? At(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Tn = Je(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? At(v.HTML_INTEGRATION_POINTS) : ye({}, ["annotation-xml"]);
    const z = Je(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? At(v.CUSTOM_ELEMENT_HANDLING) : Ko(null);
    if (ue = Ko(null), Je(z, "tagNameCheck") && zo(z.tagNameCheck) && (ue.tagNameCheck = z.tagNameCheck), Je(z, "attributeNameCheck") && zo(z.attributeNameCheck) && (ue.attributeNameCheck = z.attributeNameCheck), Je(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ue.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), ut && (ht = !1), Gt && (tt = !0), ln && (ge = ye({}, Tc), me = Ko(null), ln.html === !0 && (ye(ge, _c), ye(me, Sc)), ln.svg === !0 && (ye(ge, oa), ye(me, aa), ye(me, es)), ln.svgFilters === !0 && (ye(ge, ra), ye(me, aa), ye(me, es)), ln.mathMl === !0 && (ye(ge, sa), ye(me, Ac), ye(me, es))), He.tagCheck = null, He.attributeCheck = null, Je(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? He.tagCheck = v.ADD_TAGS : It(v.ADD_TAGS) && (ge === ve && (ge = At(ge)), ye(ge, v.ADD_TAGS, Le))), Je(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? He.attributeCheck = v.ADD_ATTR : It(v.ADD_ATTR) && (me === q && (me = At(me)), ye(me, v.ADD_ATTR, Le))), Je(v, "ADD_URI_SAFE_ATTR") && It(v.ADD_URI_SAFE_ATTR) && ye(Dt, v.ADD_URI_SAFE_ATTR, Le), Je(v, "FORBID_CONTENTS") && It(v.FORBID_CONTENTS) && (pt === kn && (pt = At(pt)), ye(pt, v.FORBID_CONTENTS, Le)), Je(v, "ADD_FORBID_CONTENTS") && It(v.ADD_FORBID_CONTENTS) && (pt === kn && (pt = At(pt)), ye(pt, v.ADD_FORBID_CONTENTS, Le)), Nt && (ge["#text"] = !0), Qe && ye(ge, ["html", "head", "body"]), ge.table && (ye(ge, ["tbody"]), delete Be.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      x = v.TRUSTED_TYPES_POLICY, $ = x.createHTML("");
    } else
      x === void 0 && (x = N2(m, r)), x !== null && typeof $ == "string" && ($ = x.createHTML(""));
    (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && ge === ve && (ge = At(ge)), ce.uponSanitizeAttribute.length > 0 && me === q && (me = At(me)), Rt && Rt(v), An = v;
  }, wo = ye({}, [...oa, ...ra, ...S2]), ko = ye({}, [...sa, ...A2]), jn = function(v) {
    let z = w(v);
    (!z || !z.tagName) && (z = {
      namespaceURI: Zt,
      tagName: "template"
    });
    const J = kr(v.tagName), Ce = kr(z.tagName);
    return bo[v.namespaceURI] ? v.namespaceURI === qt ? z.namespaceURI === zt ? J === "svg" : z.namespaceURI === Kt ? J === "svg" && (Ce === "annotation-xml" || Bn[Ce]) : !!wo[J] : v.namespaceURI === Kt ? z.namespaceURI === zt ? J === "math" : z.namespaceURI === qt ? J === "math" && Tn[Ce] : !!ko[J] : v.namespaceURI === zt ? z.namespaceURI === qt && !Tn[Ce] || z.namespaceURI === Kt && !Bn[Ce] ? !1 : !ko[J] && (ro[J] || !wo[J]) : !!(Sn === "application/xhtml+xml" && bo[v.namespaceURI]) : !1;
  }, _t = function(v) {
    Wo(t.removed, {
      element: v
    });
    try {
      w(v).removeChild(v);
    } catch {
      h(v);
    }
  }, I = function(v, z) {
    try {
      Wo(t.removed, {
        attribute: z.getAttributeNode(v),
        from: z
      });
    } catch {
      Wo(t.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(v), v === "is")
      if (tt || Gt)
        try {
          _t(z);
        } catch {
        }
      else
        try {
          z.setAttribute(v, "");
        } catch {
        }
  }, Y = function(v) {
    let z = null, J = null;
    if (st)
      v = "<remove></remove>" + v;
    else {
      const Fe = bc(v, /^[\r\n\t ]+/);
      J = Fe && Fe[0];
    }
    Sn === "application/xhtml+xml" && Zt === zt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const Ce = x ? x.createHTML(v) : v;
    if (Zt === zt)
      try {
        z = new d().parseFromString(Ce, Sn);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = Z.createDocument(Zt, "template", null);
      try {
        z.documentElement.innerHTML = vo ? $ : Ce;
      } catch {
      }
    }
    const ke = z.body || z.documentElement;
    return v && J && ke.insertBefore(n.createTextNode(J), ke.childNodes[0] || null), Zt === zt ? ae.call(z, Qe ? "html" : "body")[0] : Qe ? z.documentElement : ke;
  }, be = function(v) {
    return re.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, We = function(v) {
    v.normalize();
    const z = re.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = z.nextNode();
    for (; J; ) {
      let Ce = J.data;
      Ho([M, j, B], (ke) => {
        Ce = Uo(Ce, ke, " ");
      }), J.data = Ce, J = z.nextNode();
    }
  }, Ze = function(v) {
    const z = A ? A(v) : null;
    return typeof z != "string" || Le(z) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    v.attributes !== F(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    v.nodeType !== O(v) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    v.childNodes !== E(v);
  }, Bt = function(v) {
    if (!O || typeof v != "object" || v === null)
      return !1;
    try {
      return O(v) === En.documentFragment;
    } catch {
      return !1;
    }
  }, xt = function(v) {
    if (!O || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof O(v) == "number";
    } catch {
      return !1;
    }
  };
  function Tt(ne, v, z) {
    Ho(ne, (J) => {
      J.call(t, v, z, An);
    });
  }
  const Cn = function(v) {
    let z = null;
    if (Tt(ce.beforeSanitizeElements, v, null), Ze(v))
      return _t(v), !0;
    const J = Le(v.nodeName);
    if (Tt(ce.uponSanitizeElement, v, {
      tagName: J,
      allowedTags: ge
    }), kt && v.hasChildNodes() && !xt(v.firstElementChild) && bt(/<[/\w!]/g, v.innerHTML) && bt(/<[/\w!]/g, v.textContent) || kt && v.namespaceURI === zt && J === "style" && xt(v.firstElementChild) || v.nodeType === En.progressingInstruction || kt && v.nodeType === En.comment && bt(/<[/\w]/g, v.data))
      return _t(v), !0;
    if (Be[J] || !(He.tagCheck instanceof Function && He.tagCheck(J)) && !ge[J]) {
      if (!Be[J] && lr(J) && (ue.tagNameCheck instanceof RegExp && bt(ue.tagNameCheck, J) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(J)))
        return !1;
      if (Nt && !pt[J]) {
        const ke = w(v), Fe = E(v);
        if (Fe && ke) {
          const Ft = Fe.length;
          for (let jt = Ft - 1; jt >= 0; --jt) {
            const Yt = y(Fe[jt], !0);
            ke.insertBefore(Yt, b(v));
          }
        }
      }
      return _t(v), !0;
    }
    return (O ? O(v) : v.nodeType) === En.element && !jn(v) || (J === "noscript" || J === "noembed" || J === "noframes") && bt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (_t(v), !0) : (ut && v.nodeType === En.text && (z = v.textContent, Ho([M, j, B], (ke) => {
      z = Uo(z, ke, " ");
    }), v.textContent !== z && (Wo(t.removed, {
      element: v.cloneNode()
    }), v.textContent = z)), Tt(ce.afterSanitizeElements, v, null), !1);
  }, Lt = function(v, z, J) {
    if (ft[z] || G && (z === "id" || z === "name") && (J in n || J in Do))
      return !1;
    const Ce = me[z] || He.attributeCheck instanceof Function && He.attributeCheck(z, v);
    if (!(ht && !ft[z] && bt(ie, z))) {
      if (!(rt && bt(pe, z))) {
        if (!Ce || ft[z]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(lr(v) && (ue.tagNameCheck instanceof RegExp && bt(ue.tagNameCheck, v) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(v)) && (ue.attributeNameCheck instanceof RegExp && bt(ue.attributeNameCheck, z) || ue.attributeNameCheck instanceof Function && ue.attributeNameCheck(z, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            z === "is" && ue.allowCustomizedBuiltInElements && (ue.tagNameCheck instanceof RegExp && bt(ue.tagNameCheck, J) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(J)))
          ) return !1;
        } else if (!Dt[z]) {
          if (!bt(Ae, Uo(J, Q, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && v !== "script" && yc(J, "data:") === 0 && _n[v])) {
              if (!(wt && !bt(Te, Uo(J, Q, "")))) {
                if (J)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Fs = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), lr = function(v) {
    return !Fs[kr(v)] && bt(V, v);
  }, Bo = function(v) {
    Tt(ce.beforeSanitizeAttributes, v, null);
    const z = v.attributes;
    if (!z || Ze(v))
      return;
    const J = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let Ce = z.length;
    for (; Ce--; ) {
      const ke = z[Ce], Fe = ke.name, Ft = ke.namespaceURI, jt = ke.value, Yt = Le(Fe), ir = jt;
      let Ne = Fe === "value" ? ir : v2(ir);
      if (J.attrName = Yt, J.attrValue = Ne, J.keepAttr = !0, J.forceKeepAttr = void 0, Tt(ce.uponSanitizeAttribute, v, J), Ne = J.attrValue, we && (Yt === "id" || Yt === "name") && yc(Ne, Ee) !== 0 && (I(Fe, v), Ne = Ee + Ne), kt && bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ne)) {
        I(Fe, v);
        continue;
      }
      if (Yt === "attributename" && bc(Ne, "href")) {
        I(Fe, v);
        continue;
      }
      if (J.forceKeepAttr)
        continue;
      if (!J.keepAttr) {
        I(Fe, v);
        continue;
      }
      if (!gt && bt(/\/>/i, Ne)) {
        I(Fe, v);
        continue;
      }
      ut && Ho([M, j, B], (Wr) => {
        Ne = Uo(Ne, Wr, " ");
      });
      const cr = Le(v.nodeName);
      if (!Lt(cr, Yt, Ne)) {
        I(Fe, v);
        continue;
      }
      if (x && typeof m == "object" && typeof m.getAttributeType == "function" && !Ft)
        switch (m.getAttributeType(cr, Yt)) {
          case "TrustedHTML": {
            Ne = x.createHTML(Ne);
            break;
          }
          case "TrustedScriptURL": {
            Ne = x.createScriptURL(Ne);
            break;
          }
        }
      if (Ne !== ir)
        try {
          Ft ? v.setAttributeNS(Ft, Fe, Ne) : v.setAttribute(Fe, Ne), Ze(v) ? _t(v) : vc(t.removed);
        } catch {
          I(Fe, v);
        }
    }
    Tt(ce.afterSanitizeAttributes, v, null);
  }, _o = function(v) {
    let z = null;
    const J = be(v);
    for (Tt(ce.beforeSanitizeShadowDOM, v, null); z = J.nextNode(); )
      if (Tt(ce.uponSanitizeShadowNode, z, null), Cn(z), Bo(z), Bt(z.content) && _o(z.content), (O ? O(z) : z.nodeType) === En.element) {
        const ke = R ? R(z) : z.shadowRoot;
        Bt(ke) && (Vn(ke), _o(ke));
      }
    Tt(ce.afterSanitizeShadowDOM, v, null);
  }, Vn = function(v) {
    const z = O ? O(v) : v.nodeType;
    if (z === En.element) {
      const ke = R ? R(v) : v.shadowRoot;
      Bt(ke) && (Vn(ke), _o(ke));
    }
    const J = E ? E(v) : v.childNodes;
    if (!J)
      return;
    const Ce = [];
    Ho(J, (ke) => {
      Wo(Ce, ke);
    });
    for (const ke of Ce)
      Vn(ke);
    if (z === En.element) {
      const ke = A ? A(v) : null;
      if (typeof ke == "string" && Le(ke) === "template") {
        const Fe = v.content;
        Bt(Fe) && Vn(Fe);
      }
    }
  };
  return t.sanitize = function(ne) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, J = null, Ce = null, ke = null;
    if (vo = !ne, vo && (ne = "<!-->"), typeof ne != "string" && !xt(ne) && (ne = _2(ne), typeof ne != "string"))
      throw yr("dirty is not a string, aborting");
    if (!t.isSupported)
      return ne;
    if (Mt || Fn(v), t.removed = [], typeof ne == "string" && (Me = !1), Me) {
      const jt = A ? A(ne) : ne.nodeName;
      if (typeof jt == "string") {
        const Yt = Le(jt);
        if (!ge[Yt] || Be[Yt])
          throw yr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ze(ne))
        throw yr("root node is clobbered and cannot be sanitized in-place");
      Vn(ne);
    } else if (xt(ne))
      z = Y("<!---->"), J = z.ownerDocument.importNode(ne, !0), J.nodeType === En.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? z = J : z.appendChild(J), Vn(J);
    else {
      if (!tt && !ut && !Qe && // eslint-disable-next-line unicorn/prefer-includes
      ne.indexOf("<") === -1)
        return x && Pt ? x.createHTML(ne) : ne;
      if (z = Y(ne), !z)
        return tt ? null : Pt ? $ : "";
    }
    z && st && _t(z.firstChild);
    const Fe = be(Me ? ne : z);
    for (; Ce = Fe.nextNode(); )
      Cn(Ce), Bo(Ce), Bt(Ce.content) && _o(Ce.content);
    if (Me)
      return ut && We(ne), ne;
    if (tt) {
      if (ut && We(z), Gt)
        for (ke = H.call(z.ownerDocument); z.firstChild; )
          ke.appendChild(z.firstChild);
      else
        ke = z;
      return (me.shadowroot || me.shadowrootmode) && (ke = fe.call(o, ke, !0)), ke;
    }
    let Ft = Qe ? z.outerHTML : z.innerHTML;
    return Qe && ge["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && bt(R2, z.ownerDocument.doctype.name) && (Ft = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + Ft), ut && Ho([M, j, B], (jt) => {
      Ft = Uo(Ft, jt, " ");
    }), x && Pt ? x.createHTML(Ft) : Ft;
  }, t.setConfig = function() {
    let ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fn(ne), Mt = !0;
  }, t.clearConfig = function() {
    An = null, Mt = !1;
  }, t.isValidAttribute = function(ne, v, z) {
    An || Fn({});
    const J = Le(ne), Ce = Le(v);
    return Lt(J, Ce, z);
  }, t.addHook = function(ne, v) {
    typeof v == "function" && Wo(ce[ne], v);
  }, t.removeHook = function(ne, v) {
    if (v !== void 0) {
      const z = h2(ce[ne], v);
      return z === -1 ? void 0 : g2(ce[ne], z, 1)[0];
    }
    return vc(ce[ne]);
  }, t.removeHooks = function(ne) {
    ce[ne] = [];
  }, t.removeAllHooks = function() {
    ce = Ec();
  }, t;
}
var D2 = Rd();
const z2 = {
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
function B2(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : D2.sanitize(e, z2) : "";
}
const F2 = 24, j2 = 120, V2 = 420, H2 = 1200, W2 = 24e3, U2 = 1800, G2 = 5200, Aa = (e) => {
  const t = e.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!t || t.index === void 0)
    return { reasoning: "", answer: e };
  const n = e.slice(0, t.index).trim(), o = t[0], r = e.slice(t.index + o.length).trim();
  return {
    reasoning: (t[1] ?? "").trim(),
    answer: [n, r].filter(Boolean).join(`

`)
  };
}, K2 = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return `code-${e.length}-${t.toString(16)}`;
}, Md = (e, t) => {
  if (e.size <= t) return;
  const n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}, q2 = (e, t, n) => e.includes("<pre>") ? e.replace(
  /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
  (o, r, a) => {
    const s = document.createElement("textarea");
    s.innerHTML = a;
    const i = s.value, c = K2(i);
    t.codeCache.set(c, i), Md(t.codeCache, j2);
    const u = r ? ` class="${r}"` : "", d = n("common.copy");
    return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${c}" title="${d}">${d}</button><pre><code${u}>${a}</code></pre></div>`;
  }
) : e, xc = (e, t, n, o = {}) => {
  const r = o.cache !== !1, a = `${n("common.copy")}\0${e}`, s = r ? t.htmlCache.get(a) : void 0;
  if (s) return s;
  const i = B2(Pe.parse(e, { async: !1 })), c = o.enhanceCodeBlocks === !1 ? i : q2(i, t, n);
  return r && (t.htmlCache.set(a, c), Md(t.htmlCache, F2)), c;
}, Z2 = (e, t, n, o, r) => {
  if (!t) return !0;
  const a = e.content.length >= W2, s = a ? H2 : V2, i = a ? G2 : U2;
  return r - t.updatedAt >= s || e.content.length - t.source.length >= i || !t.reasoning && !!n || !t.answer && !!o;
}, Y2 = (e, t, n) => {
  const { reasoning: o, answer: r } = Aa(e.content);
  if (!e.streaming)
    return n.streamingSnapshots.delete(e.id), t === "reasoning" ? o : r;
  const a = Date.now(), s = n.streamingSnapshots.get(e.id);
  return Z2(e, s, o, r, a) ? (n.streamingSnapshots.set(e.id, {
    source: e.content,
    reasoning: o,
    answer: r,
    updatedAt: a
  }), t === "reasoning" ? o : r) : t === "reasoning" ? s?.reasoning ?? o : s?.answer ?? r;
}, X2 = (e, t, n, o) => {
  const r = Y2(e, t, n);
  if (!e.streaming) return xc(r, n, o);
  const a = n.streamingSnapshots.get(e.id), s = t === "reasoning" ? "reasoningHtml" : "answerHtml", i = t === "reasoning" ? "reasoning" : "answer";
  if (a?.[i] === r && a[s])
    return a[s];
  const c = xc(r, n, o, {
    cache: !1,
    enhanceCodeBlocks: !1
  });
  return a?.[i] === r && (a[s] = c), c;
}, Q2 = async (e, t, n) => {
  const r = e.target?.closest(".code-copy-btn"), a = r?.dataset.codeId ? t.codeCache.get(r.dataset.codeId) : void 0;
  if (a)
    try {
      await navigator.clipboard.writeText(a), Oe.msg(n("localAi.codeCopied"));
    } catch (s) {
      Oe.msg(`${n("common.copy")}: ${s}`, "error");
    }
}, J2 = (e, t) => {
  e.allowThinking && (t.includes("<think>") && !e.reasoningStartedAt && (e.reasoningStartedAt = Date.now()), t.includes("</think>") && !e.reasoningEndedAt && (e.reasoningEndedAt = Date.now()));
}, e_ = () => {
  const { t: e } = Pr(), t = {
    htmlCache: /* @__PURE__ */ new Map(),
    codeCache: /* @__PURE__ */ new Map(),
    streamingSnapshots: /* @__PURE__ */ new Map()
  };
  return {
    renderMessageMarkdown: (n, o) => X2(n, o, t, e),
    handleMarkdownClick: (n) => Q2(n, t, e),
    messageReasoning: (n) => Aa(n).reasoning,
    messageAnswer: (n) => Aa(n).answer,
    recordReasoningProgress: J2,
    discardStreamingMarkdown: (n) => {
      t.streamingSnapshots.delete(n);
    },
    clearMarkdownState: () => {
      t.htmlCache.clear(), t.codeCache.clear(), t.streamingSnapshots.clear();
    }
  };
}, t_ = {
  key: 0,
  class: "attachment-preview-dialog__body"
}, n_ = { class: "attachment-preview-dialog__viewport" }, o_ = ["src", "alt"], r_ = { class: "attachment-preview-dialog__meta" }, s_ = { class: "attachment-preview-dialog__file" }, a_ = ["title"], l_ = /* @__PURE__ */ oe({
  __name: "AttachmentPreviewDialog",
  props: {
    modelValue: { type: Boolean },
    attachment: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { t: r } = Pr(), a = C({
      get: () => n.modelValue,
      set: (s) => o("update:modelValue", s)
    });
    return (s, i) => (T(), ee(l(dd), {
      modelValue: l(a),
      "onUpdate:modelValue": i[0] || (i[0] = (c) => tn(a) ? a.value = c : null),
      title: l(r)("localAi.attachmentPreview"),
      width: "min(1000px, calc(100vw - 40px))",
      "custom-class": "local-ai-attachment-preview-dialog",
      "close-on-click-modal": !0
    }, {
      default: X(() => [
        s.attachment?.dataUrl ? (T(), N("div", t_, [
          f("div", n_, [
            f("img", {
              src: s.attachment.dataUrl,
              alt: s.attachment.name
            }, null, 8, o_)
          ]),
          f("div", r_, [
            f("span", s_, [
              _(l(Ef), {
                theme: "outline",
                size: "16"
              }),
              f("strong", {
                title: s.attachment.name
              }, L(s.attachment.name), 9, a_)
            ]),
            f(
              "span",
              null,
              L(l(hd)(s.attachment.size)),
              1
              /* TEXT */
            )
          ])
        ])) : U("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "title"]));
  }
}), i_ = /* @__PURE__ */ sr(l_, [["__scopeId", "data-v-8ead8db0"]]), c_ = /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i, u_ = /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i, d_ = /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i, f_ = /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i, Pd = (e) => /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(e), Lc = /^\s*(\d+)(?:[.)]\s+|、\s*)/, Ic = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
}, p_ = (e) => e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1").replace(/`([^`\n]+)`/g, "$1").replace(/\*\*([^*\n]+)\*\*/g, "$1").replace(/__([^_\n]+)__/g, "$1").replace(/~~([^~\n]+)~~/g, "$1").replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, "$1$2").replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, "$1$2"), m_ = (e) => e.replace(
  /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
  "$1"
).replace(
  /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
  "$1使用 $3"
).replace(
  /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
  "$1use $3"
), h_ = (e) => {
  const t = e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s{0,3}>\s?/, ""), n = t.match(Lc), o = n ? `${n[1]}、` : "", r = t.replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, "").replace(/^\s*[-+*]\s+/, "").replace(Lc, "");
  if (Pd(r))
    return "";
  const a = r.trim();
  return a.startsWith("|") && a.endsWith("|") ? a.slice(1, -1).split("|").map((s) => s.trim()).filter(Boolean).join("；") : `${o}${m_(
    p_(r)
  ).trimEnd()}`;
}, g_ = (e, t) => t ? !1 : !e || u_.test(e), v_ = (e, t) => t && d_.test(e), b_ = (e, t) => (t ? e : e.replace(c_, "")).trim(), y_ = (e, t) => !!(e || t), Ca = (e) => /[\u3400-\u9fff]/.test(e), w_ = (e, t = !1) => {
  const n = Ca(e), o = n && t ? `
上一次结果语言错误。本次必须使用简体中文，不得翻译为英文。` : "";
  return {
    systemPrompt: `${n ? Ic.zh : Ic.en}${o}`,
    userPrompt: n ? `改写以下原文：
<原文>
${e}
</原文>` : `Rewrite the following source:
<source>
${e}
</source>`,
    maxTokens: Math.min(640, Math.max(320, Math.ceil(e.length * 1.4)))
  };
}, Oc = (e, t) => !Ca(e) || Ca(t), k_ = (e) => {
  const n = e.replace(/^[\s\S]*?<\/think>\s*/i, "").replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/^\s*```(?:markdown|md|text)?\s*$/gim, "").replace(/^\s*```\s*$/gim, "").replace(/\r\n?/g, `
`).trim().split(`
`), o = [];
  for (const r of n) {
    if (Pd(r)) continue;
    const a = h_(r).trim(), s = o.length > 0;
    if (g_(a, s)) continue;
    if (v_(a, s)) break;
    if (f_.test(a)) continue;
    const i = b_(a, s);
    y_(i, o.at(-1)) && o.push(i);
  }
  return o.join(`
`).replace(/\n{3,}/g, `

`).trim();
}, _r = "snippets.localAi.pendingPrompt", kl = "snippets.localAi.pendingPromptMode", Nd = "new-chat", __ = (e, t) => {
  e.setItem(_r, t), e.setItem(
    kl,
    Nd
  );
}, la = (e) => e.getItem(kl) === Nd, T_ = { class: "sidebar-header" }, S_ = { class: "sidebar-brand" }, A_ = { class: "sidebar-title-block" }, C_ = ["title", "aria-pressed"], E_ = { class: "sidebar-nav" }, x_ = ["disabled"], L_ = { class: "sidebar-search" }, I_ = ["placeholder"], O_ = {
  key: 0,
  class: "sidebar-search-count"
}, $_ = { class: "sidebar-section recent-section" }, R_ = { class: "section-title-row" }, M_ = { class: "section-title" }, P_ = { class: "section-title-actions" }, N_ = ["title", "disabled"], D_ = ["title", "disabled"], z_ = {
  key: 0,
  class: "chat-list"
}, B_ = ["tabindex", "aria-disabled", "onClick", "onKeydown"], F_ = { class: "chat-item-copy" }, j_ = { class: "chat-item-title" }, V_ = { class: "chat-item-title-track" }, H_ = { class: "chat-item-title-text" }, W_ = {
  class: "chat-item-title-text chat-item-title-clone",
  "aria-hidden": "true"
}, U_ = { class: "chat-item-time" }, G_ = ["title", "disabled", "onClick"], K_ = {
  key: 1,
  class: "sidebar-empty"
}, q_ = { class: "sidebar-service" }, Z_ = { class: "sidebar-service-card" }, Y_ = { class: "sidebar-service-icon" }, X_ = { class: "sidebar-service-copy" }, Q_ = { class: "chat-panel" }, J_ = { class: "chat-panel-header" }, e4 = { class: "chat-panel-heading" }, t4 = ["title"], n4 = { class: "chat-context-mark" }, o4 = { class: "chat-context-copy" }, r4 = {
  key: 0,
  class: "empty-state"
}, s4 = { class: "empty-hero" }, a4 = { class: "empty-hero-mark" }, l4 = { class: "empty-eyebrow" }, i4 = { class: "quick-prompt-section" }, c4 = { class: "quick-prompt-heading" }, u4 = { class: "quick-prompt-grid" }, d4 = ["onClick"], f4 = { class: "quick-prompt-icon" }, p4 = { class: "quick-prompt-copy" }, m4 = {
  key: 0,
  class: "date-divider"
}, h4 = { class: "message-avatar" }, g4 = { key: 1 }, v4 = { class: "message-body" }, b4 = { class: "user-bubble" }, y4 = {
  key: 0,
  class: "user-message-text"
}, w4 = {
  key: 1,
  class: "message-attachment-list"
}, k4 = ["title", "aria-label", "onClick"], _4 = ["src", "alt"], T4 = {
  key: 1,
  class: "attachment-file-icon"
}, S4 = { key: 2 }, A4 = {
  key: 0,
  class: "message-actions"
}, C4 = ["title", "onClick"], E4 = ["title", "onClick"], x4 = ["title", "onClick"], L4 = { class: "assistant-head" }, I4 = { key: 0 }, O4 = {
  key: 0,
  class: "assistant-content-stack"
}, $4 = ["open"], R4 = { class: "reasoning-summary-title" }, M4 = { key: 0 }, P4 = ["innerHTML"], N4 = ["innerHTML"], D4 = {
  key: 0,
  class: "message-stats"
}, z4 = { class: "message-stats__context" }, B4 = { class: "message-stats__output" }, F4 = { class: "message-stats__elapsed" }, j4 = { class: "message-stats__speed" }, V4 = {
  key: 0,
  class: "message-stats-time"
}, H4 = {
  key: 1,
  class: "message-warning"
}, W4 = {
  key: 2,
  class: "message-actions"
}, U4 = ["title", "aria-label"], G4 = ["disabled", "title", "onClick"], K4 = ["disabled", "title", "onClick"], q4 = ["title", "onClick"], Z4 = ["title", "onClick"], Y4 = ["title", "onClick"], X4 = ["title", "onClick"], Q4 = ["title", "onClick"], J4 = ["title"], eT = { class: "composer-dock" }, tT = {
  key: 0,
  class: "attachment-preview-list"
}, nT = ["title", "aria-label", "onClick"], oT = ["src", "alt"], rT = {
  key: 1,
  class: "attachment-file-icon"
}, sT = { class: "attachment-meta" }, aT = ["title", "onClick"], lT = ["placeholder", "readonly", "aria-busy"], iT = { class: "input-toolbar" }, cT = { class: "input-toolbar-left" }, uT = ["title", "disabled"], dT = ["disabled", "title"], fT = ["title", "aria-pressed"], pT = { class: "input-toolbar-right" }, mT = { class: "model-select-shell" }, hT = { class: "chat-model-option" }, gT = { class: "chat-model-option-name" }, vT = { class: "input-hint" }, bT = ["disabled", "title", "aria-label"], yT = ["disabled", "title", "aria-label"], wT = 96, kT = 4096, _T = 90, TT = 1e3, ST = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Pr(), {
      attachments: n,
      attachmentPicking: o,
      attachmentStatusText: r,
      handleAttachmentDrop: a,
      handleComposerPaste: s,
      pickAttachmentFiles: i,
      removeAttachment: c
    } = Tk(), {
      clearMarkdownState: u,
      discardStreamingMarkdown: d,
      handleMarkdownClick: m,
      messageAnswer: g,
      messageReasoning: y,
      recordReasoningProgress: h,
      renderMessageMarkdown: b
    } = e_(), E = P(""), w = P([]), R = P(""), F = P(!1), O = P(""), A = P(null), x = P(!1), $ = P(!1), K = P(!1), Z = P(!1), re = P(!1), H = P(!1), ae = P(!1), fe = P(!1), ce = P(!0), M = P(!1), j = P(null), B = uo(null);
    let ie = !1, pe = null, Te = !1, Q = null;
    const V = P(null), Ae = P(null), ge = P(""), ve = P(null), me = P(null), q = P(null), ue = C({
      get: () => !!q.value,
      set: (p) => {
        p || (q.value = null);
      }
    }), Be = P(Date.now());
    let ft = null, He = null, rt = null, ht = !1, wt = null, gt = null, ut = !1, kt = 0, Qe = null;
    const Mt = /* @__PURE__ */ new WeakMap(), st = (p) => {
      const k = p.querySelector(".chat-item-title-text");
      if (!k) return;
      const W = k.scrollWidth - p.clientWidth > 2, te = k.scrollWidth + 24, S = Math.max(5, te / 34);
      p.style.setProperty("--chat-title-loop-distance", `${te}px`), p.style.setProperty("--chat-title-scroll-duration", `${S}s`), p.classList.toggle("is-overflowing", W);
    }, tt = (p) => {
      window.requestAnimationFrame(() => st(p));
    }, Gt = {
      mounted(p) {
        if (tt(p), typeof ResizeObserver > "u") return;
        const k = new ResizeObserver(
          () => tt(p)
        );
        k.observe(p);
        const W = p.querySelector(".chat-item-title-text");
        W && k.observe(W), Mt.set(p, k);
      },
      updated(p) {
        tt(p);
      },
      beforeUnmount(p) {
        Mt.get(p)?.disconnect(), Mt.delete(p);
      }
    }, Pt = [
      {
        title: "localAi.quickPromptSummary",
        description: "localAi.quickPromptSummaryDesc",
        icon: Sf
      },
      {
        title: "localAi.quickPromptTranslate",
        description: "localAi.quickPromptTranslateDesc",
        icon: $f
      },
      {
        title: "localAi.quickPromptCode",
        description: "localAi.quickPromptCodeDesc",
        icon: _f
      },
      {
        title: "localAi.quickPromptRegex",
        description: "localAi.quickPromptRegexDesc",
        icon: Hl
      }
    ], G = C(
      () => (!!O.value.trim() || n.value.length > 0) && !$.value && !x.value
    ), we = C(
      () => !!O.value.trim() && !$.value && !x.value && !j.value
    ), Ee = C(() => $.value || x.value), Nt = C(() => ve.value?.healthy ? t("localAi.serviceHealthy") : ve.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), Me = C(
      () => w.value.find((p) => p.id === R.value) ?? null
    ), ln = C(
      () => Me.value?.title || t("localAi.newChatTitle")
    ), pt = C(() => as(Me.value)), kn = C(() => mk(Me.value)), _n = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", ho = (p) => {
      p.type !== "image" || !p.dataUrl || (q.value = p);
    }, Dt = () => {
      q.value = null;
    }, go = (p) => {
      q.value?.id === p && Dt(), c(p);
    }, Kt = C(
      () => _n(ge.value) || _n(ve.value?.modelPath) || _n(V.value?.modelPath) || t("localAi.localModel")
    ), qt = C(() => Ae.value?.mainModels ?? []), zt = C(() => !!V.value?.mmprojPath), Zt = C(
      () => V.value?.ctxSize ?? ve.value?.ctxSize ?? 4096
    ), vo = C(() => {
      const p = Zt.value, k = V.value?.maxTokens ?? 0;
      return k > 0 ? Math.min(
        Math.max(k, 512),
        Math.max(512, p - 512)
      ) : Math.min(
        Math.max(kT, Math.floor(p * 0.5)),
        Math.max(512, p - 512)
      );
    }), bo = C(
      () => Math.max(512, Zt.value - vo.value)
    ), Jt = C(() => {
      const p = Kt.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(p);
    }), Bn = C(() => {
      const p = E.value.trim().toLowerCase();
      return w.value.filter(
        (k) => !p || k.title.toLowerCase().includes(p) || k.messages.some(
          (W) => !or(W) && W.content.toLowerCase().includes(p)
        )
      ).slice().sort((k, W) => W.updatedAt.localeCompare(k.updatedAt));
    }), Tn = () => {
      const p = A.value;
      if (!p) return;
      p.style.height = "auto";
      const k = p.scrollHeight, W = Number.parseFloat(
        window.getComputedStyle(p).maxHeight
      ), te = Number.isFinite(W) ? W : k;
      p.style.height = `${Math.min(k, te)}px`, p.style.overflowY = k > te ? "auto" : "hidden";
    }, ro = (p, k = !1) => {
      if (typeof p != "string" || !p.trim()) return;
      const W = p.trim();
      if (!ie || k && Ee.value) {
        pe = W, k && (Te = !0);
        return;
      }
      k && (v(), Q = W), O.value = W, localStorage.removeItem(kl), Ge(() => {
        Tn(), A.value?.focus();
      });
    }, Sn = async () => {
      try {
        const p = await ot("take_pending_local_ai_prompt"), k = typeof p == "string" ? p.trim() : "";
        return k && __(localStorage, k), k;
      } catch (p) {
        return Ot.warn("[LocalAI] take pending prompt failed", p), "";
      }
    }, yo = (p) => {
      const k = p.detail;
      Sn().then((W) => {
        const te = typeof k == "string" ? k.trim() : "", S = W || te;
        !S || !(W || la(localStorage)) && S === Q || ro(S, !0);
      });
    }, ar = () => {
      if (!ie || Ee.value || !pe)
        return;
      const p = pe, k = Te;
      pe = null, Te = !1, ro(p, k);
    }, Le = async () => {
      await Ge(), Tn(), A.value?.focus();
    };
    de(O, Tn, { flush: "post" }), de(Ee, (p) => {
      p || ar();
    }), de(
      O,
      (p) => {
        if (!ie) return;
        p.trim() ? localStorage.setItem(_r, p) : localStorage.removeItem(_r);
      },
      { flush: "sync" }
    );
    const An = (p) => {
      O.value = t(p), Le();
    }, Do = async (p, k) => {
      const W = w_(
        p,
        k
      ), te = await Sw({
        messages: [
          {
            role: "system",
            content: W.systemPrompt
          },
          { role: "user", content: W.userPrompt }
        ],
        temperature: k ? 0.05 : 0.1,
        enableThinking: !1,
        maxTokens: W.maxTokens
      });
      return k_(te.content);
    }, zo = async () => {
      const p = O.value.trim();
      if (!(!p || !we.value)) {
        x.value = !0;
        try {
          let k = await Do(p, !1);
          if (Oc(p, k) || (k = await Do(p, !0)), !k) throw new Error(t("localAi.enhancePromptEmpty"));
          if (!Oc(p, k))
            throw new Error(t("localAi.enhancePromptLanguageMismatch"));
          O.value = k, await Le();
        } catch (k) {
          Oe.msg(`${t("localAi.enhancePromptFailed")}: ${String(k)}`, "error");
        } finally {
          x.value = !1;
        }
      }
    }, Fn = () => t("localAi.now"), wo = () => {
      const p = (/* @__PURE__ */ new Date()).toISOString(), k = {
        id: Ao("root"),
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
        updatedAtLabel: Fn(),
        currentNodeId: k.id,
        messages: [k]
      };
    }, ko = () => {
      const p = me.value;
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= wT : !0;
    }, jn = () => {
      const p = ko();
      p && (ce.value = !0), M.value = !p && !ce.value;
    }, _t = () => {
      rt === null || ht || (window.cancelAnimationFrame(rt), rt = null);
    }, I = () => {
      ce.value = !1, M.value = !ko(), _t();
    }, Y = () => {
      const p = me.value;
      p && (ut && p.scrollTop < kt - 1 && I(), kt = p.scrollTop), jn();
    }, be = (p) => {
      p.deltaY >= 0 || (I(), window.requestAnimationFrame(jn));
    }, We = (p) => {
      const k = me.value;
      if (!k) return;
      const W = k.getBoundingClientRect(), te = Math.max(12, k.offsetWidth - k.clientWidth);
      p.clientX < W.right - te || (ut = !0, kt = k.scrollTop, _t());
    }, Ze = () => {
      ut = !1, jn();
    }, Bt = (p) => {
      Qe = p.touches[0]?.clientY ?? null;
    }, xt = (p) => {
      const k = p.touches[0]?.clientY;
      k === void 0 || Qe === null || (k > Qe && I(), Qe = k);
    }, Tt = () => {
      Qe = null, jn();
    }, Cn = () => {
      if (!wt) return;
      const p = me.value?.querySelector(".assistant-card--streaming") ?? null;
      p !== gt && (gt && wt.unobserve(gt), gt = p, gt && wt.observe(gt));
    }, Lt = async (p = {}) => {
      await Ge(), Cn(), !(!me.value || !p.force && !ce.value) && (ht = ht || p.force === !0, rt === null && (rt = window.requestAnimationFrame(() => {
        rt = null;
        const W = me.value, te = ht;
        if (ht = !1, !W || !te && !ce.value) return;
        const S = Math.max(0, W.scrollHeight - W.clientHeight);
        Math.abs(W.scrollTop - S) > 1 && (W.scrollTop = S), jn();
      })));
    }, Fs = () => {
      ce.value = !0, Lt({ force: !0 });
    }, lr = async () => {
      try {
        V.value = await ad(), ge.value = V.value.modelPath ?? "", Ae.value = await ld(V.value), Jt.value || (ae.value = !1);
      } catch (p) {
        Ot.warn("[LocalAI] refresh chat config failed", p);
      }
    }, Bo = async () => {
      if (!K.value) {
        K.value = !0;
        try {
          ve.value = await id();
        } catch (p) {
          Ot.warn("[LocalAI] refresh chat status failed", p);
        } finally {
          K.value = !1;
        }
      }
    }, _o = async () => {
      try {
        const p = await Cw();
        if (w.value = p.map((k) => {
          const W = k.messages?.length ? k.messages : k.turns.map((S) => ({
            id: S.id,
            role: S.role,
            content: S.content,
            createdAt: S.createdAt
          })), te = pk(
            W,
            k.createdAt
          );
          return {
            id: k.id,
            title: k.title,
            createdAt: k.createdAt,
            updatedAt: k.updatedAt,
            updatedAtLabel: new Date(k.updatedAt).toLocaleString(),
            currentNodeId: k.currentNodeId ?? te.currentNodeId,
            messages: te.messages
          };
        }), !w.value.some((k) => k.id === R.value)) {
          const k = w.value[0]?.id ?? "";
          k !== R.value && (O.value = "", n.value = [], Dt()), R.value = k;
        }
      } catch (p) {
        Ot.warn("[LocalAI] refresh histories failed", p);
      }
    }, Vn = async () => {
      Ee.value || await Promise.all([lr(), Bo(), _o()]);
    }, ne = async (p) => {
      if (!p) return;
      const k = as(p).map((W) => ({
        id: W.id,
        role: W.role,
        content: W.content,
        createdAt: W.createdAt
      }));
      await xw({
        id: p.id,
        title: p.title,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        turns: k,
        currentNodeId: p.currentNodeId,
        messages: p.messages
      });
    };
    function v() {
      if (Ee.value) return;
      const p = wo();
      w.value.unshift(p), R.value = p.id, O.value = "", n.value = [], Dt(), Le();
    }
    const z = () => {
      if (Me.value) return;
      const p = wo();
      w.value.unshift(p), R.value = p.id;
    }, J = (p) => {
      if (Ee.value) return;
      R.value !== p && (O.value = "", n.value = [], Dt()), R.value = p;
      const k = Me.value;
      k && !k.currentNodeId && (k.currentNodeId = Vr(k.messages, jr(k.messages)?.id) ?? null), ce.value = !0, Lt({ force: !0 });
    }, Ce = async (p) => {
      if (Ee.value) return;
      const k = R.value === p;
      w.value = w.value.filter((W) => W.id !== p);
      try {
        await Lw(p);
      } catch (W) {
        Ot.warn("[LocalAI] delete history failed", W), await _o(), Oe.msg(`${t("common.operationFailed")}: ${String(W)}`, "error");
        return;
      }
      k && (R.value = w.value[0]?.id ?? "", O.value = "", n.value = [], Dt());
    }, ke = async () => {
      if (!(Ee.value || Z.value)) {
        Z.value = !0;
        try {
          await Iw(), w.value = [], R.value = "", E.value = "", O.value = "", n.value = [], re.value = !1, Dt(), u(), Oe.msg(t("localAi.clearAllChatsSuccess"));
        } catch (p) {
          Ot.warn("[LocalAI] clear histories failed", p), Oe.msg(`${t("common.operationFailed")}: ${String(p)}`, "error");
        } finally {
          Z.value = !1;
        }
      }
    }, Fe = async () => {
      if (!V.value || !ge.value) return;
      const p = {
        ...V.value,
        modelPath: ge.value
      };
      try {
        V.value = await rs(p), ve.value?.running && (ve.value = await cd()), Oe.msg(t("localAi.modelChanged"));
      } catch (k) {
        await lr(), Oe.msg(`${t("localAi.configSaveFailed")}: ${k}`, "error");
      }
    }, Ft = (p) => !!g(p.content), jt = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !Ft(p)), Yt = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const k = p.reasoningEndedAt ?? (p.streaming ? Be.value : Date.now());
      return Math.max(0, (k - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, ir = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Yt(p)
    }), Ne = (p) => new Date(
      p.createdAt || Me.value?.updatedAt || Date.now()
    ), cr = (p) => Ne(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Wr = (p, k) => Ne(p).toDateString() === Ne(k).toDateString(), _l = (p) => Ne(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Dd = (p) => {
      const k = kn.value[p]?.message;
      if (!k) return !1;
      if (p === 0) return !_l(k);
      const W = kn.value[p - 1]?.message;
      return W ? Wr(W, k) ? Ne(k).getTime() - Ne(W).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, zd = (p) => {
      const k = Ne(p), W = k.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), te = k.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return _l(p) ? te : `${W} ${te}`;
    }, Bd = (p) => p.streaming ? jt(p) ? t("localAi.thinking") : t("localAi.generating") : cr(p), Fd = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), jd = (p = Me.value) => {
      const k = ck(), W = nr([k]), te = Math.max(
        512,
        bo.value - W
      );
      return [
        k,
        ...fk(
          as(p).filter((S) => !S.streaming && S.role !== "system").map((S) => ({
            role: S.role,
            content: S.role === "user" ? lk(S) : S.content
          })),
          te,
          t("localAi.previousAnswerTail")
        )
      ];
    }, Vd = () => sk(V.value?.maxTokens ?? 0), Tl = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? V.value?.ctxSize ?? ve.value?.ctxSize ?? 4096
    ), Sl = (p) => {
      const k = Be.value, W = p.stats?.promptTokens ?? p.promptTokens ?? 0, te = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? ea(p.content) : vd(p.content)), S = Tl(p), _e = Math.min(
        p.stats?.totalTokens ?? W + te,
        S
      ), se = Math.max(
        0,
        (p.stats?.generationTimeMs ?? p.elapsedMs ?? k - Ne(p).getTime()) / 1e3
      ), Se = p.stats?.tokensPerSecond ?? (se > 0 ? te / se : 0);
      return {
        context: _e,
        contextMax: S,
        contextPercent: Math.min(100, Math.round(_e / S * 100)),
        output: te,
        outputMax: (V.value?.maxTokens ?? 0) > 0 ? String(V.value?.maxTokens) : "∞",
        seconds: se.toFixed(1),
        speed: Se.toFixed(1)
      };
    }, Hd = C(() => (Be.value, new Map(
      kn.value.map(({ message: p }) => [
        p.id,
        Sl(p)
      ])
    ))), so = (p) => Hd.value.get(p.id) ?? Sl(p), Al = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : p.stats?.finishReason === "length" ? (p.stats?.totalTokens ?? so(p).context) >= Tl(p) - 8 ? t("localAi.contextLimitReached") : t("localAi.outputLimitReached") : "", Cl = (p) => {
      const k = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(k) ? t("localAi.contextExceeded") : k;
    }, Wd = (p) => {
      const k = p.replace(/\s+/g, " ").trim();
      if (k.length < 900) return !1;
      const te = k.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Se) => Se.toLowerCase()) ?? [];
      if (te.length < 140) return !1;
      const S = te.slice(-120), _e = /* @__PURE__ */ new Map();
      for (const Se of S) _e.set(Se, (_e.get(Se) ?? 0) + 1);
      if (_e.size / S.length < 0.12 && [..._e.values()].some((Se) => Se >= 56))
        return !0;
      for (let Se = 1; Se <= 4; Se += 1) {
        const Ie = te.slice(-Se).join("\0");
        let Hn = 1;
        for (let Vt = te.length - Se * 2; Vt >= 0 && te.slice(Vt, Vt + Se).join("\0") === Ie; Vt -= Se)
          Hn += 1;
        if (Hn >= Math.max(24, Math.ceil(72 / Se))) return !0;
      }
      return !1;
    }, El = () => {
      He || (Be.value = Date.now(), He = setInterval(() => {
        Be.value = Date.now();
      }, TT));
    }, js = () => {
      He && (clearInterval(He), He = null, Be.value = Date.now());
    }, xl = (p) => {
      const k = ud();
      return H.value = !1, j.value = k, B.value = p, k;
    }, Ur = (p) => {
      p && j.value !== p || (j.value = null, B.value = null);
    }, Ll = (p, k) => {
      p.streaming = !1, p.stopped = !0, p.interrupted = !1, p.error = "", p.reasoningStartedAt && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()), k !== void 0 && (p.elapsedMs = k), d(p.id), Be.value = Date.now();
    }, Il = async (p, k, W) => {
      const te = performance.now();
      let S = jd(k), _e = "", se = null, Se = null, Ie = !1, Hn = !1;
      if (H.value) {
        Ll(p, performance.now() - te), Ur(W);
        return;
      }
      S = uk(S), p.promptTokens = nr(S), p.contextSize = Zt.value;
      const Vt = async () => {
        if (!_e) {
          se = null, Se?.(), Se = null;
          return;
        }
        const vt = H.value ? _e.length : _e.length > 4e3 ? 900 : _e.length > 1200 ? 520 : _e.length > 240 ? 180 : 64;
        if (p.content += _e.slice(0, vt), _e = _e.slice(vt), p.estimatedCompletionTokens = ea(
          p.content
        ), !Hn && !H.value && Wd(p.content) && (Hn = !0, H.value = !0, p.repetitionStopped = !0, Xs(W).catch(
          (cn) => Ot.warn("[LocalAI] repetition stop failed", cn)
        )), await Lt(), !_e) {
          se = null, Se?.(), Se = null;
          return;
        }
        se = window.setTimeout(() => {
          Vt().catch(
            (cn) => Ot.warn("[LocalAI] stream pump failed", cn)
          );
        }, _T);
      }, Vs = (vt) => {
        vt && (h(p, vt), _e += vt, se === null && (se = window.setTimeout(() => {
          Vt().catch(
            (cn) => Ot.warn("[LocalAI] stream pump failed", cn)
          );
        }, 32)));
      }, zl = async () => {
        !_e && se === null || await new Promise((vt) => {
          Se = vt;
        });
      }, Fo = await Aw(
        {
          messages: S,
          maxTokens: Vd(),
          enableThinking: p.allowThinking === !0
        },
        (vt) => {
          H.value || (Ie = !0, Vs(vt));
        },
        {
          requestId: W,
          onStats: (vt) => {
            const cn = ak(p.stats, vt);
            p.stats = cn, cn.ctxSize && (p.contextSize = cn.ctxSize), cn.completionTokens !== void 0 && (p.estimatedCompletionTokens = cn.completionTokens), Be.value = Date.now();
          }
        }
      ).catch(async (vt) => {
        throw await zl(), vt;
      });
      if (!Ie)
        Vs(Fo.content);
      else if (!H.value) {
        const vt = p.content.length + _e.length;
        Fo.content.length > vt && Vs(Fo.content.slice(vt));
      }
      await zl(), !H.value && Fo.content && p.content !== Fo.content && (p.content = Fo.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? ea(p.content), d(p.id), p.streaming = !1, p.elapsedMs = performance.now() - te, p.stopped = H.value, p.interrupted = !1, p.error = "", Be.value = Date.now(), Ur(W);
    }, Ud = async () => {
      const p = j.value;
      if (!$.value || H.value) return;
      H.value = !0;
      const k = B.value;
      if (k && Ll(
        k,
        Math.max(0, Date.now() - Ne(k).getTime())
      ), !!p)
        try {
          await Xs(p);
        } catch (W) {
          Ot.warn("[LocalAI] cancel stream failed", W);
        }
    }, Gd = () => {
      if (!O.value.trim() && !n.value.length) return !1;
      if (n.value.find(
        (te) => te.status === "pending"
      ))
        return Oe.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const k = n.value.find(
        (te) => te.status === "error" || te.type === "unsupported"
      );
      return k ? (Oe.msg(
        `${t("localAi.attachmentErrorBlock")}: ${k.name}`,
        "warning"
      ), !1) : n.value.some(
        (te) => te.type === "image"
      ) && !zt.value ? (Oe.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, Ol = async () => {
      const p = O.value.trim();
      if (Ee.value || !Gd()) return;
      z();
      const k = (/* @__PURE__ */ new Date()).toISOString(), W = Qs(n.value), te = p || W[0]?.name || "", S = Me.value;
      if (!S) return;
      const _e = ta(S, {
        id: Ao("user"),
        role: "user",
        content: p,
        createdAt: k,
        attachments: W
      }), se = ta(S, {
        id: Ao("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: _e.id,
        streaming: !0,
        allowThinking: ae.value && Jt.value,
        contextSize: Zt.value
      });
      O.value = "", n.value = [], $.value = !0;
      const Se = xl(se);
      El(), await Lt({ force: !0 });
      const Ie = performance.now();
      try {
        await Il(se, S, Se), S && (S.title = S.title === t("localAi.newChatTitle") ? te.slice(0, 28) : S.title, S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await ne(S)), await Bo();
      } catch (Hn) {
        if (H.value)
          S.title = S.title === t("localAi.newChatTitle") ? te.slice(0, 28) : S.title, S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await ne(S);
        else {
          O.value = p, n.value = W;
          const Vt = Cl(Hn);
          Oe.msg(`${t("localAi.chatFailed")}: ${Vt}`, "error"), se.error = Vt, se.interrupted = !!se.content.trim(), se.interrupted || (se.content = Vt), S && (S.title = S.title === t("localAi.newChatTitle") ? te.slice(0, 28) : S.title, S.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), S.updatedAtLabel = new Date(S.updatedAt).toLocaleString(), await ne(S));
        }
        se.streaming = !1, d(se.id), se.elapsedMs = performance.now() - Ie;
      } finally {
        $.value = !1, Ur(Se), js(), await Lt();
      }
    }, Kd = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), Ol());
    }, $l = (p) => {
      (p.ctrlKey || p.metaKey) && p.key.toLowerCase() === "n" && !p.shiftKey && !p.altKey && (p.preventDefault(), v());
    }, qd = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Zd = (p) => {
      const k = new Date(p), W = /* @__PURE__ */ new Date(), te = W.getTime() - k.getTime(), S = 24 * 60 * 60 * 1e3;
      return k.toDateString() === W.toDateString() ? k.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : te < S * 2 ? t("localAi.yesterday") : te < S * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(te / S))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(te / (S * 7)))
      });
    }, Rl = async (p) => {
      try {
        await navigator.clipboard.writeText(p.content), Oe.msg(t("localAi.copied"));
      } catch (k) {
        Oe.msg(`${t("common.operationFailed")}: ${k}`, "error");
      }
    }, Ml = async (p) => {
      if ($.value) return;
      const k = Me.value;
      if (!k) return;
      const W = gk(
        k.messages,
        k.currentNodeId,
        p
      );
      if (!W) return;
      const te = new Set(
        k.messages.filter((Ie) => W.deletedIds.has(Ie.id)).flatMap((Ie) => Ie.attachments ?? []).map((Ie) => Ie.id)
      );
      q.value && te.has(q.value.id) && Dt();
      const S = k.messages, _e = k.currentNodeId, se = k.updatedAt, Se = k.updatedAtLabel;
      if (k.messages = W.messages, k.currentNodeId = W.currentNodeId, !k.messages.some((Ie) => !or(Ie))) {
        await Ce(k.id);
        return;
      }
      k.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.updatedAtLabel = new Date(k.updatedAt).toLocaleString();
      try {
        await ne(k);
      } catch (Ie) {
        k.messages = S, k.currentNodeId = _e, k.updatedAt = se, k.updatedAtLabel = Se, Ot.warn("[LocalAI] delete message failed", Ie), Oe.msg(`${t("common.operationFailed")}: ${String(Ie)}`, "error");
      }
    }, Pl = (p) => {
      $.value || (O.value = p.content, n.value = Qs(p.attachments), Me.value && p.parentId && (Me.value.currentNodeId = p.parentId), Le());
    }, Nl = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), Dl = (p, k) => {
      if ($.value) return;
      const W = Me.value;
      if (!W) return;
      const te = p.siblingCurrentIndex + k, S = p.siblingLeafNodeIds[te];
      S && (W.currentNodeId = S, ce.value = !0, Lt({ force: !0 }));
    }, Yd = async (p) => {
      const k = Me.value;
      if (!k || $.value) return;
      const W = k.messages.find((Ie) => Ie.id === p);
      if (!W || W.role !== "assistant") return;
      const te = yd(k.messages, W.id);
      if (!te.length) return;
      const S = (/* @__PURE__ */ new Date()).toISOString(), _e = /* @__PURE__ */ new Map(), se = te.map((Ie, Hn) => {
        const Vt = Ao(Hn === 0 ? "root" : Ie.role);
        return _e.set(Ie.id, Vt), {
          ...Ie,
          id: Vt,
          parentId: Ie.parentId ? _e.get(Ie.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Qs(Ie.attachments)
        };
      });
      for (let Ie = 0; Ie < se.length - 1; Ie += 1)
        se[Ie].childIds = [se[Ie + 1].id];
      const Se = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${k.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: S,
        updatedAt: S,
        updatedAtLabel: Fn(),
        currentNodeId: se.at(-1)?.id ?? null,
        messages: se
      };
      w.value.unshift(Se), R.value = Se.id, O.value = "", n.value = [], ce.value = !0, await ne(Se), await Lt({ force: !0 }), Oe.msg(t("localAi.branchCreated"));
    }, Xd = async (p) => {
      const k = Me.value;
      if (!k || $.value) return;
      const W = k.messages.find((se) => se.id === p);
      if (!W || W.role !== "assistant" || !W.parentId) return;
      k.currentNodeId = W.parentId;
      const te = ta(k, {
        id: Ao("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: W.parentId,
        streaming: !0,
        allowThinking: ae.value && Jt.value
      });
      $.value = !0;
      const S = xl(te);
      El(), await Lt({ force: !0 });
      const _e = performance.now();
      try {
        await Il(te, k, S), k.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.updatedAtLabel = new Date(k.updatedAt).toLocaleString(), await ne(k);
      } catch (se) {
        if (H.value)
          k.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.updatedAtLabel = new Date(k.updatedAt).toLocaleString(), await ne(k);
        else {
          const Se = Cl(se);
          Oe.msg(`${t("localAi.chatFailed")}: ${Se}`, "error"), te.error = Se, te.interrupted = !!te.content.trim(), te.interrupted || (te.content = Se), k.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), k.updatedAtLabel = new Date(k.updatedAt).toLocaleString(), await ne(k);
        }
        te.streaming = !1, d(te.id), te.elapsedMs = performance.now() - _e;
      } finally {
        $.value = !1, Ur(S), js(), await Lt();
      }
    };
    return et(async () => {
      window.addEventListener("local-ai-prompt-ready", yo), ro(
        localStorage.getItem(_r),
        la(localStorage)
      ), Tn(), typeof ResizeObserver < "u" && (wt = new ResizeObserver(() => {
        ce.value && Lt();
      })), window.addEventListener("pointerup", Ze), window.addEventListener("pointercancel", Ze), window.addEventListener("keydown", $l);
      try {
        await Vn();
      } finally {
        const p = await Sn();
        ie = !0;
        const k = !!p || Te || la(localStorage), W = p || pe || localStorage.getItem(_r);
        pe = null, Te = !1, ro(W, k);
      }
      ft = setInterval(() => {
        Bo().catch(
          (p) => Ot.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), de(Jt, (p) => {
      p || (ae.value = !1);
    }), La(() => {
      ie = !1, pe = null, Te = !1, Q = null, window.removeEventListener("local-ai-prompt-ready", yo), ft && clearInterval(ft), rt !== null && (window.cancelAnimationFrame(rt), rt = null), wt?.disconnect(), wt = null, gt = null, window.removeEventListener("pointerup", Ze), window.removeEventListener("pointercancel", Ze), window.removeEventListener("keydown", $l), j.value && Xs(j.value), u(), js();
    }), (p, k) => {
      const W = td, te = ed;
      return T(), N(
        "main",
        {
          class: D([
            "local-ai-chat-shell",
            l(F) ? "local-ai-chat-shell--sidebar-collapsed" : "",
            l($) ? "local-ai-chat-shell--sending" : ""
          ])
        },
        [
          f(
            "aside",
            {
              class: D([
                "chat-sidebar",
                l(F) ? "chat-sidebar--collapsed" : ""
              ])
            },
            [
              f("header", T_, [
                f("div", S_, [
                  f("div", A_, [
                    f(
                      "h2",
                      null,
                      L(l(t)("localAi.chatTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      L(l(t)("localAi.chatPrivacySubtitle")),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                f("button", {
                  class: "icon-action-btn sidebar-collapse-btn",
                  type: "button",
                  title: l(F) ? l(t)("localAi.expandSidebar") : l(t)("localAi.collapseSidebar"),
                  "aria-pressed": l(F),
                  onClick: k[0] || (k[0] = (S) => F.value = !l(F))
                }, [
                  _(l(Vl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, C_)
              ]),
              f("div", E_, [
                f("button", {
                  class: "sidebar-new-chat-btn",
                  type: "button",
                  disabled: l(Ee),
                  onClick: v
                }, [
                  _(l(Hs), {
                    theme: "outline",
                    size: "18"
                  }),
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.newChat")),
                    1
                    /* TEXT */
                  ),
                  k[17] || (k[17] = f(
                    "span",
                    { class: "sidebar-new-chat-shortcut" },
                    "Ctrl N",
                    -1
                    /* HOISTED */
                  ))
                ], 8, x_),
                f("label", L_, [
                  _(l(Lf), {
                    theme: "outline",
                    size: "16"
                  }),
                  it(f("input", {
                    "onUpdate:modelValue": k[1] || (k[1] = (S) => tn(E) ? E.value = S : null),
                    placeholder: l(t)("localAi.searchHistory")
                  }, null, 8, I_), [
                    [Lr, l(E)]
                  ]),
                  l(E) ? (T(), N(
                    "span",
                    O_,
                    L(l(Bn).length),
                    1
                    /* TEXT */
                  )) : U("v-if", !0)
                ])
              ]),
              f("section", $_, [
                f("div", R_, [
                  f(
                    "div",
                    M_,
                    L(l(t)("localAi.recent")),
                    1
                    /* TEXT */
                  ),
                  f("div", P_, [
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("localAi.clearAllChats"),
                      disabled: l(Ee) || l(Z) || !l(w).length,
                      onClick: k[2] || (k[2] = (S) => re.value = !0)
                    }, [
                      _(l(ur), {
                        theme: "outline",
                        size: "14"
                      })
                    ], 8, N_),
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("plugins.refresh"),
                      disabled: l(Ee) || l(K) || l(Z),
                      onClick: Vn
                    }, [
                      _(l(dr), {
                        class: D({ "animate-spin": l(K) }),
                        theme: "outline",
                        size: "14"
                      }, null, 8, ["class"])
                    ], 8, D_)
                  ])
                ]),
                l(Bn).length ? (T(), N("div", z_, [
                  (T(!0), N(
                    at,
                    null,
                    Ln(l(Bn), (S) => (T(), N("div", {
                      key: S.id,
                      class: D([
                        "chat-list-item",
                        l(R) === S.id ? "active" : "",
                        l(Ee) ? "disabled" : ""
                      ]),
                      role: "button",
                      tabindex: l(Ee) ? -1 : 0,
                      "aria-disabled": l(Ee),
                      onClick: (_e) => J(S.id),
                      onKeydown: pn(Ue((_e) => J(S.id), ["prevent"]), ["enter"])
                    }, [
                      f("span", F_, [
                        it((T(), N("span", j_, [
                          f("span", V_, [
                            f(
                              "span",
                              H_,
                              L(S.title),
                              1
                              /* TEXT */
                            ),
                            f(
                              "span",
                              W_,
                              L(S.title),
                              1
                              /* TEXT */
                            )
                          ])
                        ])), [
                          [Gt]
                        ]),
                        f(
                          "span",
                          U_,
                          L(Zd(S.updatedAt)),
                          1
                          /* TEXT */
                        )
                      ]),
                      f("button", {
                        class: "chat-item-delete",
                        type: "button",
                        title: l(t)("common.delete"),
                        disabled: l(Ee),
                        onClick: Ue((_e) => Ce(S.id), ["stop"])
                      }, [
                        _(l(ur), {
                          theme: "outline",
                          size: "13"
                        })
                      ], 8, G_)
                    ], 42, B_))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (T(), N(
                  "div",
                  K_,
                  L(l(t)("common.empty")),
                  1
                  /* TEXT */
                ))
              ]),
              f("footer", q_, [
                f("div", Z_, [
                  f("span", Y_, [
                    _(l(Ws), {
                      theme: "outline",
                      size: "15"
                    })
                  ]),
                  f("span", X_, [
                    f(
                      "strong",
                      null,
                      L(l(Nt)),
                      1
                      /* TEXT */
                    ),
                    f(
                      "small",
                      null,
                      L(l(ve)?.healthy ? l(Kt) : l(t)("localAi.onDemandHint")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f(
                    "span",
                    {
                      class: D([
                        "service-status-dot",
                        l(ve)?.healthy ? "ready" : "stopped"
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
                  onClick: qd
                }, [
                  _(l(Pc), {
                    theme: "outline",
                    size: "16"
                  }),
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.settings")),
                    1
                    /* TEXT */
                  ),
                  _(l(Wl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ])
            ],
            2
            /* CLASS */
          ),
          f("section", Q_, [
            f("header", J_, [
              f("div", e4, [
                l(F) ? (T(), N("button", {
                  key: 0,
                  class: "panel-sidebar-toggle",
                  type: "button",
                  title: l(t)("localAi.expandSidebar"),
                  onClick: k[3] || (k[3] = (S) => F.value = !1)
                }, [
                  _(l(Vl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, t4)) : U("v-if", !0),
                f("div", n4, [
                  _(l(Ws), {
                    theme: "outline",
                    size: "18"
                  })
                ]),
                f("div", o4, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.chatSubtitle")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "h1",
                    null,
                    L(l(ln)),
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
                ref: me,
                class: "message-list",
                onScroll: Y,
                onWheelPassive: be,
                onPointerdown: We,
                onTouchstartPassive: Bt,
                onTouchmovePassive: xt,
                onTouchend: Tt
              },
              [
                l(pt).length ? U("v-if", !0) : (T(), N("section", r4, [
                  f("div", s4, [
                    f("div", a4, [
                      _(l(xf), {
                        theme: "outline",
                        size: "30"
                      })
                    ]),
                    f("span", l4, [
                      k[18] || (k[18] = f(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      )),
                      mt(
                        " " + L(l(t)("localAi.privateWorkspace")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f(
                      "h2",
                      null,
                      L(l(t)("localAi.chatWelcomeTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      L(l(t)("localAi.chatWelcomeDesc")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", i4, [
                    f("div", c4, [
                      f(
                        "span",
                        null,
                        L(l(t)("localAi.quickStart")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "small",
                        null,
                        L(l(t)("localAi.quickStartHint")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", u4, [
                      (T(), N(
                        at,
                        null,
                        Ln(Pt, (S) => f("button", {
                          key: S.title,
                          class: "quick-prompt-card",
                          type: "button",
                          onClick: (_e) => An(S.title)
                        }, [
                          f("span", f4, [
                            (T(), ee(yt(S.icon), {
                              theme: "outline",
                              size: "17"
                            }))
                          ]),
                          f("span", p4, [
                            f(
                              "strong",
                              null,
                              L(l(t)(S.title)),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              L(l(t)(S.description)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _(l(Wl), {
                            theme: "outline",
                            size: "14"
                          })
                        ], 8, d4)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ])
                ])),
                (T(!0), N(
                  at,
                  null,
                  Ln(l(kn), (S, _e) => (T(), N(
                    at,
                    {
                      key: S.message.id
                    },
                    [
                      Dd(_e) ? (T(), N("div", m4, [
                        f(
                          "span",
                          null,
                          L(zd(S.message)),
                          1
                          /* TEXT */
                        )
                      ])) : U("v-if", !0),
                      f(
                        "article",
                        {
                          class: D(["message-row", `message-row--${S.message.role}`])
                        },
                        [
                          f("div", h4, [
                            S.message.role === "assistant" ? (T(), ee(l(Ws), {
                              key: 0,
                              theme: "outline",
                              size: "18"
                            })) : (T(), N(
                              "span",
                              g4,
                              L(l(t)("localAi.youShort")),
                              1
                              /* TEXT */
                            ))
                          ]),
                          f("div", v4, [
                            S.message.role === "user" ? (T(), N(
                              at,
                              { key: 0 },
                              [
                                f("div", b4, [
                                  S.message.content ? (T(), N(
                                    "div",
                                    y4,
                                    L(S.message.content),
                                    1
                                    /* TEXT */
                                  )) : U("v-if", !0),
                                  S.message.attachments?.length ? (T(), N("div", w4, [
                                    (T(!0), N(
                                      at,
                                      null,
                                      Ln(S.message.attachments, (se) => (T(), N(
                                        "div",
                                        {
                                          key: se.id,
                                          class: D([
                                            "message-attachment-chip",
                                            se.type === "image" && se.dataUrl ? "message-attachment-chip--image" : ""
                                          ])
                                        },
                                        [
                                          se.type === "image" && se.dataUrl ? (T(), N("button", {
                                            key: 0,
                                            class: "attachment-image-preview-btn",
                                            type: "button",
                                            title: se.name,
                                            "aria-label": l(t)("localAi.previewAttachment"),
                                            onClick: (Se) => ho(se)
                                          }, [
                                            f("img", {
                                              src: se.dataUrl,
                                              alt: se.name
                                            }, null, 8, _4)
                                          ], 8, k4)) : (T(), N(
                                            "span",
                                            T4,
                                            L(se.type === "text" ? "TXT" : "FILE"),
                                            1
                                            /* TEXT */
                                          )),
                                          se.type === "image" && se.dataUrl ? U("v-if", !0) : (T(), N(
                                            "span",
                                            S4,
                                            L(se.name),
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
                                  ])) : U("v-if", !0)
                                ]),
                                S.message.streaming ? U("v-if", !0) : (T(), N("div", A4, [
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (se) => Rl(S.message)
                                  }, [
                                    _(l(Fl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, C4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (se) => Pl(S.message)
                                  }, [
                                    _(l(Hs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, E4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (se) => Ml(S.message.id)
                                  }, [
                                    _(l(ur), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, x4)
                                ]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (T(), N(
                              at,
                              { key: 1 },
                              [
                                f("div", L4, [
                                  f(
                                    "span",
                                    null,
                                    L(l(Kt)),
                                    1
                                    /* TEXT */
                                  ),
                                  S.message.streaming ? (T(), N(
                                    "small",
                                    I4,
                                    L(Bd(S.message)),
                                    1
                                    /* TEXT */
                                  )) : U("v-if", !0)
                                ]),
                                f(
                                  "div",
                                  {
                                    class: D(["assistant-card", {
                                      "assistant-card--streaming": S.message.streaming
                                    }])
                                  },
                                  [
                                    S.message.content ? (T(), N("div", O4, [
                                      S.message.allowThinking && l(y)(S.message.content) ? (T(), N("details", {
                                        key: 0,
                                        class: "reasoning-panel",
                                        open: S.message.streaming && jt(S.message)
                                      }, [
                                        f("summary", null, [
                                          f("span", R4, [
                                            _(l(Bl), {
                                              theme: "outline",
                                              size: "14"
                                            }),
                                            mt(
                                              " " + L(ir(S.message)),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          S.message.streaming ? (T(), N(
                                            "small",
                                            M4,
                                            L(jt(S.message) ? l(t)("localAi.thinking") : l(t)("localAi.generating")),
                                            1
                                            /* TEXT */
                                          )) : U("v-if", !0)
                                        ]),
                                        f("div", {
                                          class: "message-content markdown-body",
                                          onClick: k[4] || (k[4] = //@ts-ignore
                                          (...se) => l(m) && l(m)(...se)),
                                          innerHTML: l(b)(S.message, "reasoning")
                                        }, null, 8, P4)
                                      ], 8, $4)) : U("v-if", !0),
                                      l(g)(S.message.content) ? (T(), N("div", {
                                        key: 1,
                                        class: "message-content markdown-body",
                                        onClick: k[5] || (k[5] = //@ts-ignore
                                        (...se) => l(m) && l(m)(...se)),
                                        innerHTML: l(b)(S.message, "answer")
                                      }, null, 8, N4)) : U("v-if", !0)
                                    ])) : (T(), N(
                                      "div",
                                      {
                                        key: 1,
                                        class: D([
                                          "message-content",
                                          S.message.stopped ? "" : "loading-text"
                                        ])
                                      },
                                      L(S.message.stopped ? l(t)("localAi.generationStopped") : Fd(S.message)),
                                      3
                                      /* TEXT, CLASS */
                                    ))
                                  ],
                                  2
                                  /* CLASS */
                                ),
                                S.message.content ? (T(), N("div", D4, [
                                  f(
                                    "span",
                                    z4,
                                    L(l(t)("localAi.contextLabel")) + ": " + L(so(S.message).context) + "/" + L(so(S.message).contextMax) + " (" + L(so(S.message).contextPercent) + "%) ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    B4,
                                    L(l(t)("localAi.outputLabel")) + ": " + L(so(S.message).output) + "/" + L(so(S.message).outputMax),
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    F4,
                                    L(so(S.message).seconds) + "s ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    j4,
                                    L(so(S.message).speed) + " t/s ",
                                    1
                                    /* TEXT */
                                  ),
                                  S.message.streaming ? U("v-if", !0) : (T(), N(
                                    "span",
                                    V4,
                                    L(cr(S.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ])) : U("v-if", !0),
                                Al(S.message) ? (T(), N(
                                  "div",
                                  H4,
                                  L(Al(S.message)),
                                  1
                                  /* TEXT */
                                )) : U("v-if", !0),
                                S.message.streaming ? U("v-if", !0) : (T(), N("div", W4, [
                                  S.siblingLeafNodeIds.length > 1 ? (T(), N("div", {
                                    key: 0,
                                    class: "message-version-switcher",
                                    title: Nl(S),
                                    "aria-label": Nl(S)
                                  }, [
                                    f("button", {
                                      type: "button",
                                      disabled: S.siblingCurrentIndex <= 0,
                                      title: l(t)("localAi.previousVersion"),
                                      onClick: (se) => Dl(S, -1)
                                    }, " ‹ ", 8, G4),
                                    f(
                                      "span",
                                      null,
                                      L(S.siblingCurrentIndex + 1) + " / " + L(S.siblingLeafNodeIds.length),
                                      1
                                      /* TEXT */
                                    ),
                                    f("button", {
                                      type: "button",
                                      disabled: S.siblingCurrentIndex >= S.siblingLeafNodeIds.length - 1,
                                      title: l(t)("localAi.nextVersion"),
                                      onClick: (se) => Dl(S, 1)
                                    }, " › ", 8, K4)
                                  ], 8, U4)) : U("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (se) => Rl(S.message)
                                  }, [
                                    _(l(Fl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, q4),
                                  S.message.role === "assistant" ? (T(), N("button", {
                                    key: 1,
                                    type: "button",
                                    title: l(t)("localAi.regenerate"),
                                    onClick: (se) => Xd(S.message.id)
                                  }, [
                                    _(l(dr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, Z4)) : U("v-if", !0),
                                  S.message.role === "assistant" ? (T(), N("button", {
                                    key: 2,
                                    type: "button",
                                    title: l(t)("localAi.branchChat"),
                                    onClick: (se) => Yd(S.message.id)
                                  }, [
                                    _(l(Af), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, Y4)) : U("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (se) => Pl(S.message)
                                  }, [
                                    _(l(Hs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, X4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (se) => Ml(S.message.id)
                                  }, [
                                    _(l(ur), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, Q4)
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
            l(M) ? (T(), N("button", {
              key: 0,
              class: "scroll-bottom-btn",
              type: "button",
              title: l(t)("localAi.jumpToLatest"),
              onClick: Fs
            }, [
              _(l(Tf), {
                theme: "outline",
                size: "15"
              }),
              f(
                "span",
                null,
                L(l(t)("localAi.jumpToLatest")),
                1
                /* TEXT */
              )
            ], 8, J4)) : U("v-if", !0),
            f("div", eT, [
              f(
                "form",
                {
                  class: D([
                    "chat-input-card",
                    l(fe) ? "chat-input-card--focused" : "",
                    l(x) ? "chat-input-card--enhancing" : ""
                  ]),
                  onDragover: k[11] || (k[11] = Ue(() => {
                  }, ["prevent"])),
                  onDrop: k[12] || (k[12] = Ue(
                    //@ts-ignore
                    (...S) => l(a) && l(a)(...S),
                    ["prevent"]
                  )),
                  onSubmit: Ue(Ol, ["prevent"]),
                  onFocusin: k[13] || (k[13] = (S) => fe.value = !0),
                  onFocusout: k[14] || (k[14] = (S) => fe.value = !1)
                },
                [
                  l(n).length ? (T(), N("div", tT, [
                    (T(!0), N(
                      at,
                      null,
                      Ln(l(n), (S) => (T(), N(
                        "div",
                        {
                          key: S.id,
                          class: D([
                            "attachment-preview-item",
                            `attachment-preview-item--${S.status}`
                          ])
                        },
                        [
                          S.type === "image" && S.dataUrl ? (T(), N("button", {
                            key: 0,
                            class: "attachment-preview-image-btn",
                            type: "button",
                            title: S.name,
                            "aria-label": l(t)("localAi.previewAttachment"),
                            onClick: (_e) => ho(S)
                          }, [
                            f("img", {
                              src: S.dataUrl,
                              alt: S.name
                            }, null, 8, oT)
                          ], 8, nT)) : (T(), N(
                            "span",
                            rT,
                            L(S.type === "text" ? "TXT" : "FILE"),
                            1
                            /* TEXT */
                          )),
                          f("span", sT, [
                            f(
                              "strong",
                              null,
                              L(S.name),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              L(l(hd)(S.size)) + " · " + L(l(r)(S)),
                              1
                              /* TEXT */
                            )
                          ]),
                          f("button", {
                            class: "attachment-remove-btn",
                            type: "button",
                            title: l(t)("common.delete"),
                            onClick: (_e) => go(S.id)
                          }, [
                            _(l(ur), {
                              theme: "outline",
                              size: "12"
                            })
                          ], 8, aT)
                        ],
                        2
                        /* CLASS */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : U("v-if", !0),
                  it(f("textarea", {
                    ref_key: "composerInputRef",
                    ref: A,
                    "onUpdate:modelValue": k[6] || (k[6] = (S) => tn(O) ? O.value = S : null),
                    class: "chat-input",
                    rows: "1",
                    placeholder: l(t)("localAi.chatPlaceholder"),
                    readonly: l(x),
                    "aria-busy": l(x),
                    onKeydown: Kd,
                    onPaste: k[7] || (k[7] = //@ts-ignore
                    (...S) => l(s) && l(s)(...S))
                  }, null, 40, lT), [
                    [Lr, l(O)]
                  ]),
                  f("div", iT, [
                    f("div", cT, [
                      f("button", {
                        class: "composer-tool-btn",
                        type: "button",
                        title: l(t)("localAi.addAttachment"),
                        disabled: l(o),
                        onClick: k[8] || (k[8] = //@ts-ignore
                        (...S) => l(i) && l(i)(...S))
                      }, [
                        l(o) ? (T(), ee(l(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "16"
                        })) : (T(), ee(l(Cf), {
                          key: 1,
                          theme: "outline",
                          size: "16"
                        }))
                      ], 8, uT),
                      f("button", {
                        class: D([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          "composer-tool-btn--enhance",
                          l(x) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        disabled: !l(we),
                        title: l(O).trim() ? l(t)("localAi.enhancePromptDesc") : l(t)("localAi.enhanceNeedsPrompt"),
                        onClick: zo
                      }, [
                        l(x) ? (T(), ee(l(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "14"
                        })) : (T(), ee(l(Hl), {
                          key: 1,
                          theme: "outline",
                          size: "15"
                        })),
                        f(
                          "span",
                          null,
                          L(l(t)("localAi.enhancePrompt")),
                          1
                          /* TEXT */
                        )
                      ], 10, dT),
                      l(Jt) ? (T(), N("button", {
                        key: 0,
                        class: D([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          l(ae) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        title: l(ae) ? l(t)("localAi.thinkingEnabled") : l(t)("localAi.thinkingDisabled"),
                        "aria-pressed": l(ae),
                        onClick: k[9] || (k[9] = (S) => ae.value = !l(ae))
                      }, [
                        _(l(Bl), {
                          theme: "outline",
                          size: "15"
                        }),
                        f(
                          "span",
                          null,
                          L(l(t)("localAi.reasoningTitle")),
                          1
                          /* TEXT */
                        )
                      ], 10, fT)) : U("v-if", !0)
                    ]),
                    f("div", pT, [
                      f("div", mT, [
                        _(l(jl), {
                          theme: "outline",
                          size: "14"
                        }),
                        _(te, {
                          modelValue: l(ge),
                          "onUpdate:modelValue": k[10] || (k[10] = (S) => tn(ge) ? ge.value = S : null),
                          class: "chat-model-select",
                          size: "small",
                          disabled: l($) || !l(qt).length,
                          placeholder: l(Kt),
                          "popper-class": "chat-model-select-popper",
                          onChange: Fe
                        }, {
                          default: X(() => [
                            (T(!0), N(
                              at,
                              null,
                              Ln(l(qt), (S) => (T(), ee(W, {
                                key: S,
                                label: _n(S),
                                value: S
                              }, {
                                default: X(() => [
                                  f("span", hT, [
                                    _(l(jl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    f(
                                      "span",
                                      gT,
                                      L(_n(S)),
                                      1
                                      /* TEXT */
                                    ),
                                    l(ge) === S ? (T(), ee(l(kf), {
                                      key: 0,
                                      class: "chat-model-option-check",
                                      theme: "outline",
                                      size: "15"
                                    })) : U("v-if", !0)
                                  ])
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["label", "value"]))),
                              128
                              /* KEYED_FRAGMENT */
                            )),
                            l(qt).length ? U("v-if", !0) : (T(), ee(W, {
                              key: 0,
                              label: l(Kt),
                              value: ""
                            }, null, 8, ["label"]))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "disabled", "placeholder"])
                      ]),
                      f(
                        "span",
                        vT,
                        L(l(t)("localAi.inputHint")),
                        1
                        /* TEXT */
                      ),
                      l(j) ? (T(), N("button", {
                        key: 0,
                        class: D(["send-btn send-btn--stop", { "send-btn--stopping": l(H) }]),
                        type: "button",
                        disabled: l(H),
                        title: l(H) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        "aria-label": l(H) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        onClick: Ud
                      }, [
                        l(H) ? (T(), ee(l(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "15"
                        })) : (T(), ee(l(Of), {
                          key: 1,
                          theme: "filled",
                          size: "11"
                        }))
                      ], 10, bT)) : (T(), N("button", {
                        key: 1,
                        class: "send-btn",
                        type: "submit",
                        disabled: !l(G),
                        title: l(t)("localAi.send"),
                        "aria-label": l(t)("localAi.send")
                      }, [
                        _(l(If), {
                          theme: "outline",
                          size: "15"
                        })
                      ], 8, yT))
                    ])
                  ])
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ]),
          _(i_, {
            modelValue: l(ue),
            "onUpdate:modelValue": k[15] || (k[15] = (S) => tn(ue) ? ue.value = S : null),
            attachment: l(q)
          }, null, 8, ["modelValue", "attachment"]),
          _(l(jw), {
            modelValue: l(re),
            "onUpdate:modelValue": k[16] || (k[16] = (S) => tn(re) ? re.value = S : null),
            title: l(t)("localAi.clearAllChats"),
            "confirm-text": l(t)("common.delete"),
            "cancel-text": l(t)("common.cancel"),
            loading: l(Z),
            type: "danger",
            onConfirm: ke
          }, {
            default: X(() => [
              f(
                "div",
                null,
                L(l(t)("localAi.clearAllChatsConfirm")),
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
}), AT = /* @__PURE__ */ sr(ST, [["__scopeId", "data-v-36d03cc4"]]), CT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AT
}, Symbol.toStringTag, { value: "Module" })), ET = { class: "settings-panel local-ai-settings-shell" }, xT = { class: "local-ai-hero panel-card" }, LT = { class: "panel-title" }, IT = { class: "hero-desc" }, OT = { class: "header-actions" }, $T = {
  key: 0,
  class: "settings-grid"
}, RT = { class: "summary-panel panel-card" }, MT = { class: "status-strip" }, PT = { class: "memory-card__header" }, NT = { class: "memory-metrics" }, DT = { class: "bottleneck-row" }, zT = { class: "summary-card" }, BT = { class: "summary-card__title" }, FT = { class: "summary-card__desc" }, jT = { class: "service-controls" }, VT = { class: "service-url" }, HT = { class: "summary-card" }, WT = { class: "summary-card__title" }, UT = { class: "summary-card__desc" }, GT = { class: "summary-meta" }, KT = { class: "form-panel panel-card" }, qT = { class: "settings-section" }, ZT = { class: "settings-section__header" }, YT = { class: "field-stack" }, XT = ["title"], QT = { class: "path-control" }, JT = ["title"], eS = ["title"], tS = ["title"], nS = { class: "path-control" }, oS = ["placeholder"], rS = { class: "settings-section grid-two" }, sS = { class: "settings-section__header" }, aS = { class: "param-grid" }, lS = ["title"], iS = ["title"], cS = ["title"], uS = ["title"], dS = ["title"], fS = ["title"], pS = { class: "settings-section grid-two" }, mS = { class: "settings-section__header" }, hS = { class: "switch-grid" }, gS = ["title"], vS = ["title"], bS = ["title"], yS = { class: "settings-section grid-two" }, wS = { class: "settings-section__header" }, kS = { class: "switch-grid switch-grid--two" }, _S = ["title"], TS = ["title"], SS = ["title"], AS = ["title"], CS = { class: "settings-section grid-two" }, ES = { class: "settings-section__header" }, xS = { class: "param-grid param-grid--three" }, LS = ["title"], IS = ["title"], OS = ["title"], $S = ["title"], RS = ["title"], MS = ["title"], PS = ["title"], NS = ["title"], DS = { class: "settings-footer" }, zS = ["title"], BS = /* @__PURE__ */ oe({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Pr(), n = P(null), o = P(null), r = P(null), a = P(null), s = P(!1), i = P(!1), c = P(!1), u = P(!1), d = P(!1);
    let m = null;
    const g = C(() => !!a.value?.selectedModelPath), y = C(() => !!n.value?.mmprojPath), h = C({
      get: () => n.value?.modelPath ?? "",
      set: (Q) => {
        n.value && (n.value.modelPath = Q || void 0);
      }
    }), b = C({
      get: () => n.value?.mmprojPath ?? "",
      set: (Q) => {
        n.value && (n.value.mmprojPath = Q || void 0);
      }
    }), E = C(
      () => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), w = C(
      () => g.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), R = C(() => r.value?.healthy ? t("localAi.serviceHealthy") : r.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), F = (Q) => Q.split(/[\\/]+/).pop() ?? Q, O = C(() => {
      const V = F(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return V ? Number(V[1]) : 4;
    }), A = C(() => {
      const Q = n.value;
      if (!Q)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown"),
          level: "warn"
        };
      const V = Math.max(1.4, O.value * 0.92), Ae = Math.min(1, Math.max(0, Q.gpuLayers) / 32), ge = Q.ctxSize / 8192 * 0.38 * (Q.kvOffload ? 1 : 0.12), ve = Q.batchSize / 512 * 0.18, me = V * Ae + ge + ve, q = V * (1 - Ae) + Q.ctxSize / 8192 * 0.22, ue = me + q, Be = Q.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : Q.ctxSize >= 32768 || Q.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced"), ft = ue >= 24 || Q.ctxSize >= 32768 || Q.batchSize >= 2048 ? "danger" : ue >= 16 || Q.ctxSize >= 16384 || Q.batchSize >= 1024 ? "warn" : "ok";
      return {
        gpuGb: me.toFixed(2),
        totalGb: ue.toFixed(2),
        bottleneck: Be,
        level: ft
      };
    }), x = (Q) => t(`localAi.paramHints.${Q}`), $ = (Q) => ({
      "tone-ok": Q === "ok",
      "tone-warn": Q === "warn",
      "tone-danger": Q === "danger"
    }), K = (Q) => $(Q ? "ok" : "danger"), Z = async () => {
      o.value = await kw();
    }, re = async () => {
      r.value = await id();
    }, H = async () => {
      n.value && (a.value = await ld(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, ae = async () => {
      s.value = !0;
      try {
        n.value = await ad(), await Promise.all([Z(), H(), re()]);
      } catch (Q) {
        Ot.error("[LocalAI] refresh settings failed", Q), Oe.msg(`${t("localAi.refreshFailed")}: ${Q}`, "error");
      } finally {
        s.value = !1;
      }
    }, fe = async () => {
      if (n.value)
        try {
          await rs(n.value);
        } catch (Q) {
          Ot.warn("[LocalAI] autosave failed", Q);
        }
    }, ce = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await rs(n.value), await Promise.all([Z(), H(), re()]), Oe.msg(t("localAi.configSaved"));
        } catch (Q) {
          Oe.msg(`${t("localAi.configSaveFailed")}: ${Q}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, M = async () => {
      const Q = await ya({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !Q || Array.isArray(Q) || !n.value || (n.value.modelDir = Q, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await H());
    }, j = async () => {
      const Q = await ya({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !Q || Array.isArray(Q) || !n.value || (n.value.runtimePath = Q, await fe(), await Z());
    }, B = async () => {
      if (n.value) {
        c.value = !0;
        try {
          await rs(n.value), r.value = await _w(n.value), Oe.msg(t("localAi.serviceStarted"));
        } catch (Q) {
          Oe.msg(`${t("localAi.serviceStartFailed")}: ${Q}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, ie = async () => {
      u.value = !0;
      try {
        await ce(), r.value = await cd(), Oe.msg(t("localAi.serviceRestarted"));
      } catch (Q) {
        Oe.msg(`${t("localAi.serviceRestartFailed")}: ${Q}`, "error");
      } finally {
        u.value = !1;
      }
    }, pe = async () => {
      d.value = !0;
      try {
        await Tw(), await re(), Oe.msg(t("localAi.serviceStoppedMsg"));
      } catch (Q) {
        Oe.msg(`${t("localAi.serviceStopFailed")}: ${Q}`, "error");
      } finally {
        d.value = !1;
      }
    }, Te = () => {
      window.location.hash = "#/config/local-ai/chat";
    };
    return et(async () => {
      await ae(), m = setInterval(() => {
        re().catch(
          (Q) => Ot.warn("[LocalAI] status timer failed", Q)
        );
      }, 15e3);
    }), La(() => {
      m && clearInterval(m);
    }), (Q, V) => {
      const Ae = td, ge = ed, ve = Ey, me = Zy;
      return T(), N("div", ET, [
        f("header", xT, [
          f("div", null, [
            f(
              "h3",
              LT,
              L(l(t)("localAi.title")),
              1
              /* TEXT */
            ),
            f(
              "p",
              IT,
              L(l(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          f("div", OT, [
            _(l(en), {
              size: "small",
              plain: "",
              onClick: Te
            }, {
              default: X(() => [
                mt(
                  L(l(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            _(l(en), {
              size: "small",
              loading: l(s),
              onClick: ae
            }, {
              default: X(() => [
                mt(
                  L(l(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        l(n) ? (T(), N("main", $T, [
          f("aside", RT, [
            f("div", MT, [
              f(
                "div",
                {
                  class: D(["status-item", $(l(o)?.available ? "ok" : "danger")])
                },
                [
                  V[25] || (V[25] = f(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  f(
                    "span",
                    null,
                    L(l(E)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              f(
                "div",
                {
                  class: D(["status-item", $(l(g) ? "ok" : "danger")])
                },
                [
                  V[26] || (V[26] = f(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  f(
                    "span",
                    null,
                    L(l(w)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              f(
                "div",
                {
                  class: D([
                    "status-item",
                    $(
                      l(r)?.healthy ? "ok" : l(r)?.running ? "warn" : "danger"
                    )
                  ])
                },
                [
                  V[27] || (V[27] = f(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  f(
                    "span",
                    null,
                    L(l(R)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            f(
              "section",
              {
                class: D(["memory-card", $(l(A).level)])
              },
              [
                f("div", PT, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.estimatedMemory")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "small",
                    null,
                    L(l(t)("localAi.estimateBeta")),
                    1
                    /* TEXT */
                  )
                ]),
                f("div", NT, [
                  f("div", null, [
                    V[28] || (V[28] = f(
                      "span",
                      null,
                      "GPU",
                      -1
                      /* HOISTED */
                    )),
                    f(
                      "b",
                      {
                        class: D($(l(A).level))
                      },
                      L(l(A).gpuGb) + " GB ",
                      3
                      /* TEXT, CLASS */
                    )
                  ]),
                  f("div", null, [
                    f(
                      "span",
                      null,
                      L(l(t)("localAi.total")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "b",
                      {
                        class: D($(l(A).level))
                      },
                      L(l(A).totalGb) + " GB ",
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ]),
                f("div", DT, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.bottleneck")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D($(l(A).level))
                    },
                    L(l(A).bottleneck),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            ),
            f("section", zT, [
              f(
                "div",
                BT,
                L(l(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              f(
                "div",
                FT,
                L(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              f("div", jT, [
                _(l(en), {
                  type: "primary",
                  size: "small",
                  loading: l(c),
                  disabled: l(r)?.running,
                  onClick: B
                }, {
                  default: X(() => [
                    mt(
                      L(l(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                _(l(en), {
                  size: "small",
                  loading: l(u),
                  disabled: !l(r)?.running,
                  onClick: ie
                }, {
                  default: X(() => [
                    mt(
                      L(l(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                _(l(en), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: l(d),
                  disabled: !l(r)?.running,
                  onClick: pe
                }, {
                  default: X(() => [
                    mt(
                      L(l(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              f(
                "div",
                VT,
                L(l(r)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            f("section", HT, [
              f(
                "div",
                WT,
                L(l(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              f(
                "div",
                UT,
                L(l(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              f("div", GT, [
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(l(o)?.available))
                    },
                    L(l(o)?.available ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(l(g)))
                    },
                    L(l(g) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(!!l(h)))
                    },
                    L(l(h) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(!!l(b)))
                    },
                    L(l(b) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(l(y)))
                    },
                    L(l(y) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(!!l(r)?.healthy))
                    },
                    L(l(r)?.healthy ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ])
            ])
          ]),
          f("section", KT, [
            f("div", qT, [
              f("div", ZT, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(l(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(l(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", YT, [
                f("label", {
                  class: "field-row",
                  title: x("modelDir")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  f("div", QT, [
                    it(f(
                      "input",
                      {
                        "onUpdate:modelValue": V[0] || (V[0] = (q) => l(n).modelDir = q),
                        class: "text-input",
                        onChange: H
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Lr, l(n).modelDir]
                    ]),
                    _(l(en), {
                      size: "small",
                      plain: "",
                      onClick: M
                    }, {
                      default: X(() => [
                        mt(
                          L(l(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, XT),
                f("label", {
                  class: "field-row",
                  title: x("mainModel")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  _(ge, {
                    modelValue: l(h),
                    "onUpdate:modelValue": V[1] || (V[1] = (q) => tn(h) ? h.value = q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: X(() => [
                      (T(!0), N(
                        at,
                        null,
                        Ln(l(a)?.mainModels ?? [], (q) => (T(), ee(Ae, {
                          key: q,
                          label: F(q),
                          value: q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, JT),
                f("label", {
                  class: "field-row",
                  title: x("mmprojModel")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  _(ge, {
                    modelValue: l(b),
                    "onUpdate:modelValue": V[2] || (V[2] = (q) => tn(b) ? b.value = q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: X(() => [
                      (T(!0), N(
                        at,
                        null,
                        Ln(l(a)?.mmprojModels ?? [], (q) => (T(), ee(Ae, {
                          key: q,
                          label: F(q),
                          value: q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, eS),
                f("label", {
                  class: "field-row",
                  title: x("runtimePath")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  f("div", nS, [
                    it(f("input", {
                      "onUpdate:modelValue": V[3] || (V[3] = (q) => l(n).runtimePath = q),
                      class: "text-input",
                      placeholder: l(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, oS), [
                      [Lr, l(n).runtimePath]
                    ]),
                    _(l(en), {
                      size: "small",
                      plain: "",
                      onClick: j
                    }, {
                      default: X(() => [
                        mt(
                          L(l(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, tS)
              ])
            ]),
            f("div", rS, [
              f("div", sS, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(l(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(l(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", aS, [
                f("label", {
                  class: "number-field",
                  title: x("ctxSize")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).ctxSize,
                    "onUpdate:modelValue": V[4] || (V[4] = (q) => l(n).ctxSize = q),
                    controls: !1,
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, lS),
                f("label", {
                  class: "number-field",
                  title: x("gpuLayers")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).gpuLayers,
                    "onUpdate:modelValue": V[5] || (V[5] = (q) => l(n).gpuLayers = q),
                    controls: !1,
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, iS),
                f("label", {
                  class: "number-field",
                  title: x("threads")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).threads,
                    "onUpdate:modelValue": V[6] || (V[6] = (q) => l(n).threads = q),
                    controls: !1,
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, cS),
                f("label", {
                  class: "number-field",
                  title: x("batchSize")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).batchSize,
                    "onUpdate:modelValue": V[7] || (V[7] = (q) => l(n).batchSize = q),
                    controls: !1,
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, uS),
                f("label", {
                  class: "number-field",
                  title: x("ubatchSize")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).ubatchSize,
                    "onUpdate:modelValue": V[8] || (V[8] = (q) => l(n).ubatchSize = q),
                    controls: !1,
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, dS),
                f("label", {
                  class: "number-field",
                  title: x("mainGpu")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).mainGpu,
                    "onUpdate:modelValue": V[9] || (V[9] = (q) => l(n).mainGpu = q),
                    controls: !1,
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, fS)
              ])
            ]),
            f("div", pS, [
              f("div", mS, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(l(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(l(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", hS, [
                f("label", {
                  title: x("flashAttn")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: l(n).flashAttn,
                    "onUpdate:modelValue": V[10] || (V[10] = (q) => l(n).flashAttn = q)
                  }, null, 8, ["modelValue"])
                ], 8, gS),
                f("label", {
                  title: x("kvOffload")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: l(n).kvOffload,
                    "onUpdate:modelValue": V[11] || (V[11] = (q) => l(n).kvOffload = q)
                  }, null, 8, ["modelValue"])
                ], 8, vS),
                f("label", {
                  title: x("mmap")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: l(n).mmap,
                    "onUpdate:modelValue": V[12] || (V[12] = (q) => l(n).mmap = q)
                  }, null, 8, ["modelValue"])
                ], 8, bS)
              ])
            ]),
            f("div", yS, [
              f("div", wS, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(l(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(l(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", kS, [
                f("label", {
                  title: x("autoStart")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: l(n).autoStartOnRequest,
                    "onUpdate:modelValue": V[13] || (V[13] = (q) => l(n).autoStartOnRequest = q)
                  }, null, 8, ["modelValue"])
                ], 8, _S),
                f("label", {
                  title: x("keepAlive")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: l(n).keepAlive,
                    "onUpdate:modelValue": V[14] || (V[14] = (q) => l(n).keepAlive = q)
                  }, null, 8, ["modelValue"])
                ], 8, TS),
                f("label", {
                  class: "number-field",
                  title: x("idleTimeout")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": V[15] || (V[15] = (q) => l(n).idleTimeoutMinutes = q),
                    controls: !1,
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, SS),
                f("label", {
                  class: "number-field",
                  title: x("requestTimeout")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).requestTimeoutSecs,
                    "onUpdate:modelValue": V[16] || (V[16] = (q) => l(n).requestTimeoutSecs = q),
                    controls: !1,
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AS)
              ])
            ]),
            f("div", CS, [
              f("div", ES, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(l(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(l(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", xS, [
                f("label", {
                  class: "number-field",
                  title: x("temperature")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).temperature,
                    "onUpdate:modelValue": V[17] || (V[17] = (q) => l(n).temperature = q),
                    controls: !1,
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, LS),
                f("label", {
                  class: "number-field",
                  title: x("topP")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).topP,
                    "onUpdate:modelValue": V[18] || (V[18] = (q) => l(n).topP = q),
                    controls: !1,
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, IS),
                f("label", {
                  class: "number-field",
                  title: x("topK")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).topK,
                    "onUpdate:modelValue": V[19] || (V[19] = (q) => l(n).topK = q),
                    controls: !1,
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, OS),
                f("label", {
                  class: "number-field",
                  title: x("minP")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).minP,
                    "onUpdate:modelValue": V[20] || (V[20] = (q) => l(n).minP = q),
                    controls: !1,
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, $S),
                f("label", {
                  class: "number-field",
                  title: x("repeatPenalty")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).repeatPenalty,
                    "onUpdate:modelValue": V[21] || (V[21] = (q) => l(n).repeatPenalty = q),
                    controls: !1,
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, RS),
                f("label", {
                  class: "number-field",
                  title: x("repeatLastN")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).repeatLastN,
                    "onUpdate:modelValue": V[22] || (V[22] = (q) => l(n).repeatLastN = q),
                    controls: !1,
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, MS),
                f("label", {
                  class: "number-field",
                  title: x("maxTokens")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).maxTokens,
                    "onUpdate:modelValue": V[23] || (V[23] = (q) => l(n).maxTokens = q),
                    controls: !1,
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, PS),
                f("label", {
                  class: "number-field",
                  title: x("port")
                }, [
                  f(
                    "span",
                    null,
                    L(l(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: l(n).port,
                    "onUpdate:modelValue": V[24] || (V[24] = (q) => l(n).port = q),
                    controls: !1,
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, NS)
              ])
            ]),
            f("div", DS, [
              _(l(en), {
                type: "primary",
                loading: l(i),
                onClick: ce
              }, {
                default: X(() => [
                  mt(
                    L(l(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              l(r)?.commandLine ? (T(), N("span", {
                key: 0,
                class: "command-line",
                title: l(r).commandLine
              }, L(l(r).commandLine), 9, zS)) : U("v-if", !0)
            ])
          ])
        ])) : U("v-if", !0)
      ]);
    };
  }
}), FS = /* @__PURE__ */ sr(BS, [["__scopeId", "data-v-9d534415"]]), jS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FS
}, Symbol.toStringTag, { value: "Module" }));
export {
  US as activate,
  US as default
};
