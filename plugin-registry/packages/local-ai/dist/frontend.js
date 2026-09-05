var af = Object.defineProperty;
var lf = (e, t, n) => t in e ? af(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $e = (e, t, n) => lf(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Le, createVNode as _, defineAsyncComponent as cf, getCurrentInstance as xt, ref as P, computed as S, unref as l, readonly as La, getCurrentScope as uf, onScopeDispose as Pc, shallowRef as io, watchEffect as Ia, onMounted as ot, nextTick as Ze, watch as pe, isRef as Qt, warn as df, provide as vn, defineComponent as oe, createElementBlock as D, openBlock as A, mergeProps as _o, renderSlot as ie, createElementVNode as f, toRef as qn, onUnmounted as Oa, useAttrs as ff, useSlots as Nc, normalizeStyle as mt, normalizeClass as z, createCommentVNode as Y, Fragment as at, createBlock as re, withCtx as J, resolveDynamicComponent as Jt, withModifiers as Ke, toDisplayString as E, onBeforeUnmount as yn, Transition as xo, withDirectives as lt, vShow as Rn, reactive as To, onActivated as pf, onUpdated as Dc, cloneVNode as mf, Text as hf, Comment as gf, Teleport as vf, onBeforeMount as bf, onDeactivated as yf, createTextVNode as pt, h as wf, createSlots as $a, withKeys as En, toRaw as kf, toRefs as Ra, resolveComponent as vo, resolveDirective as _f, toHandlerKey as Tf, renderList as Cn, vModelText as Lr, shallowReactive as Af, isVNode as Ir, render as cs } from "vue";
import { useI18n as Nr } from "vue-i18n";
var Sf = {
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
function Cf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ef(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], s = t.theme || n.theme;
  switch (s) {
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
var xf = Symbol("icon-context");
function Xe(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = Cf(), i = Le(xf, Sf);
      return function() {
        var c = s.size, u = s.strokeWidth, d = s.strokeLinecap, m = s.strokeLinejoin, g = s.theme, w = s.fill, h = s.spin, b = Ef(a, {
          size: c,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: g,
          fill: w
        }, i), C = [i.prefix + "-icon"];
        return C.push(i.prefix + "-icon-" + e), t && i.rtl && C.push(i.prefix + "-icon-rtl"), h && C.push(i.prefix + "-icon-spin"), _("span", {
          class: C.join(" ")
        }, [n(b)]);
      };
    }
  };
  return o;
}
const Vl = Xe("brain", !0, function(e) {
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
}), Lf = Xe("check-small", !0, function(e) {
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
}), If = Xe("code", !0, function(e) {
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
}), Hl = Xe("copy", !0, function(e) {
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
}), Wl = Xe("cube", !1, function(e) {
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
}), cr = Xe("delete", !1, function(e) {
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
}), Of = Xe("down", !1, function(e) {
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
}), Us = Xe("edit", !0, function(e) {
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
}), $f = Xe("file-text", !0, function(e) {
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
}), Rf = Xe("fork", !1, function(e) {
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
}), Ul = Xe("left-bar", !0, function(e) {
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
}), Mf = Xe("link", !0, function(e) {
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
}), Gl = Xe("magic-wand", !0, function(e) {
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
}), Pf = Xe("picture", !0, function(e) {
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
}), ur = Xe("refresh", !0, function(e) {
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
}), ql = Xe("right", !0, function(e) {
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
}), Gs = Xe("robot", !0, function(e) {
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
}), Nf = Xe("robot-one", !0, function(e) {
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
}), Df = Xe("search", !0, function(e) {
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
}), zf = Xe("send", !0, function(e) {
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
}), zc = Xe("setting-two", !1, function(e) {
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
}), Bf = Xe("square", !1, function(e) {
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
}), Ff = Xe("translate", !0, function(e) {
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
}), jf = (e, t) => e.capabilities.includes(t);
class Vf {
  constructor() {
    $e(this, "providers", /* @__PURE__ */ new Map());
  }
  register(t) {
    const n = t.id.trim();
    if (!n)
      throw new Error("AI provider 缺少稳定 id");
    if (t.capabilities.length === 0)
      throw new Error(`AI provider ${n} 缺少 capability`);
    const o = this.providers.get(n);
    if (o && o.pluginId !== t.pluginId)
      throw new Error(
        `AI provider ${n} 已由 ${o.pluginId ?? "core"} 注册`
      );
    this.providers.set(n, {
      ...t,
      id: n
    });
  }
  unregister(t) {
    return this.providers.delete(t);
  }
  unregisterPlugin(t) {
    for (const [n, o] of Array.from(this.providers.entries()))
      o.pluginId === t && this.providers.delete(n);
  }
  clear() {
    this.providers.clear();
  }
  get(t) {
    return this.providers.get(t);
  }
  require(t) {
    const n = this.get(t);
    if (!n)
      throw new Error(`AI provider ${t} 未注册`);
    return n;
  }
  list(t = {}) {
    return Array.from(this.providers.values()).filter((n) => !(t.capability && !jf(n, t.capability) || n.pluginId && t.isPluginEnabled && !t.isPluginEnabled(n.pluginId))).sort((n, o) => {
      const r = (o.priority ?? 0) - (n.priority ?? 0);
      return r !== 0 ? r : n.id.localeCompare(o.id);
    });
  }
  getDefault(t = {}) {
    return this.list(t)[0];
  }
}
const Hf = () => new Vf(), Bc = Hf();
function Wf(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Ye(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Kl;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Kl || (Kl = {}));
async function Uf(e, t) {
  await Ye("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Gf(e, t, n) {
  var o;
  const r = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return Ye("plugin:event|listen", {
    event: e,
    target: r,
    handler: Wf(t)
  }).then((s) => async () => Uf(e, s));
}
async function Fc() {
  return await Ye("local_ai_get_config");
}
async function rs(e) {
  return await Ye("local_ai_save_config", { config: e });
}
async function jc(e) {
  return await Ye("local_ai_scan_models", {
    config: e ?? null
  });
}
async function qf() {
  return await Ye("local_ai_get_runtime_status");
}
async function Ma() {
  return await Ye("local_ai_get_status");
}
async function Vc(e) {
  return await Ye("local_ai_start_service", {
    config: e ?? null
  });
}
async function Hc() {
  return await Ye("local_ai_restart_service");
}
async function Kf() {
  await Ye("local_ai_stop_service");
}
async function Zf(e) {
  return await Ye("local_ai_chat", { request: e });
}
function Wc() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Yf(e, t, n = {}) {
  const o = n.requestId ?? Wc(), r = await Gf(
    "local-ai-chat-stream",
    (s) => {
      const a = s.payload;
      a.requestId === o && (a.event === "delta" && a.content ? t(a.content) : a.event === "stats" && a.stats && n.onStats?.(a.stats));
    }
  );
  try {
    return await Ye("local_ai_chat_stream", {
      request: e,
      requestId: o
    });
  } finally {
    r();
  }
}
async function qs(e) {
  return await Ye("local_ai_cancel_chat_stream", { requestId: e });
}
async function Xf() {
  return await Ye("local_ai_get_chat_histories");
}
async function Qf(e) {
  return await Ye(
    "local_ai_read_attachment_files",
    { paths: e }
  );
}
async function Jf(e) {
  return await Ye("local_ai_save_chat_history", {
    history: e
  });
}
async function ep(e) {
  return await Ye("local_ai_delete_chat_history", {
    historyId: e
  });
}
async function tp() {
  return await Ye("local_ai_clear_chat_histories");
}
async function np(e, t, n) {
  return await Ye("local_ai_translate", { text: e, from: t, to: n });
}
const wo = "local-ai", op = (e) => e && e.split(/[\\/]/).filter(Boolean).pop() || "", Zl = (e) => ({
  providerId: wo,
  available: e.healthy || e.running || !e.lastError,
  running: e.running,
  healthy: e.healthy,
  modelName: op(e.modelPath),
  modelPath: e.modelPath,
  runtimePath: e.runtimePath,
  baseUrl: e.baseUrl,
  lastError: e.lastError
}), Uc = {
  id: wo,
  label: "Local AI",
  pluginId: "local-ai",
  capabilities: ["chat", "vision", "translation"],
  priority: 100,
  async getStatus() {
    try {
      return Zl(await Ma());
    } catch (e) {
      return {
        providerId: wo,
        available: !1,
        healthy: !1,
        lastError: e instanceof Error ? e.message : String(e)
      };
    }
  },
  async start() {
    return Zl(await Vc());
  },
  async chat(e) {
    const t = await Zf(e);
    return {
      providerId: wo,
      content: t.content
    };
  },
  async translate(e) {
    return {
      providerId: wo,
      text: await np(e.text, e.from, e.to)
    };
  }
}, rp = (e) => e.messages.some(
  (t) => Array.isArray(t.content) && t.content.some((n) => n.type === "image_url")
), sp = (e, t) => t ?? (rp(e) ? "vision" : "chat"), ap = (e = Bc) => {
  e.get(wo) || e.register(Uc);
}, lp = (e, t) => {
  const n = e.registry ?? Bc;
  e.registry || ap(n);
  const o = e.providerId ? n.require(e.providerId) : n.getDefault({ capability: t });
  if (!o)
    throw new Error(`没有可用的 ${t} AI provider`);
  if (!o.capabilities.includes(t))
    throw new Error(`AI provider ${o.id} 不支持 ${t}`);
  return o;
}, ip = async (e, t = {}) => {
  const n = sp(e, t.capability), o = lp(t, n), r = await o.chat(e);
  return {
    ...r,
    providerId: r.providerId || o.id
  };
}, jS = (e) => {
  e.registerAiProvider(Uc), e.registerRoute({
    target: "config",
    path: "local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => VT)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: zc,
    component: cf(() => Promise.resolve().then(() => DS))
  });
}, Gc = Symbol(), Tr = "el", cp = "is-", bo = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, qc = Symbol("namespaceContextKey"), Pa = (e) => {
  const t = e || (xt() ? Le(qc, P(Tr)) : P(Tr));
  return S(() => l(t) || Tr);
}, tt = (e, t) => {
  const n = Pa(t);
  return {
    namespace: n,
    b: (b = "") => bo(n.value, e, b, "", ""),
    e: (b) => b ? bo(n.value, e, "", b, "") : "",
    m: (b) => b ? bo(n.value, e, "", "", b) : "",
    be: (b, C) => b && C ? bo(n.value, e, b, C, "") : "",
    em: (b, C) => b && C ? bo(n.value, e, "", b, C) : "",
    bm: (b, C) => b && C ? bo(n.value, e, b, "", C) : "",
    bem: (b, C, k) => b && C && k ? bo(n.value, e, b, C, k) : "",
    is: (b, ...C) => {
      const k = C.length >= 1 ? C[0] : !0;
      return b && k ? `${cp}${b}` : "";
    },
    cssVar: (b) => {
      const C = {};
      for (const k in b)
        b[k] && (C[`--${n.value}-${k}`] = b[k]);
      return C;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const C = {};
      for (const k in b)
        b[k] && (C[`--${n.value}-${e}-${k}`] = b[k]);
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
const co = () => {
}, up = Object.prototype.hasOwnProperty, Yl = (e, t) => up.call(e, t), Ln = Array.isArray, nt = (e) => typeof e == "function", Zt = (e) => typeof e == "string", en = (e) => e !== null && typeof e == "object", dp = Object.prototype.toString, fp = (e) => dp.call(e), pp = (e) => fp(e) === "[object Object]", mp = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, hp = /-(\w)/g, gp = mp(
  (e) => e.replace(hp, (t, n) => n ? n.toUpperCase() : "")
);
var Kc = typeof global == "object" && global && global.Object === Object && global, vp = typeof self == "object" && self && self.Object === Object && self, Nn = Kc || vp || Function("return this")(), Mn = Nn.Symbol, Zc = Object.prototype, bp = Zc.hasOwnProperty, yp = Zc.toString, dr = Mn ? Mn.toStringTag : void 0;
function wp(e) {
  var t = bp.call(e, dr), n = e[dr];
  try {
    e[dr] = void 0;
    var o = !0;
  } catch {
  }
  var r = yp.call(e);
  return o && (t ? e[dr] = n : delete e[dr]), r;
}
var kp = Object.prototype, _p = kp.toString;
function Tp(e) {
  return _p.call(e);
}
var Ap = "[object Null]", Sp = "[object Undefined]", Xl = Mn ? Mn.toStringTag : void 0;
function sr(e) {
  return e == null ? e === void 0 ? Sp : Ap : Xl && Xl in Object(e) ? wp(e) : Tp(e);
}
function Ko(e) {
  return e != null && typeof e == "object";
}
var Cp = "[object Symbol]";
function As(e) {
  return typeof e == "symbol" || Ko(e) && sr(e) == Cp;
}
function Ep(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var bn = Array.isArray, Ql = Mn ? Mn.prototype : void 0, Jl = Ql ? Ql.toString : void 0;
function Yc(e) {
  if (typeof e == "string")
    return e;
  if (bn(e))
    return Ep(e, Yc) + "";
  if (As(e))
    return Jl ? Jl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var xp = /\s/;
function Lp(e) {
  for (var t = e.length; t-- && xp.test(e.charAt(t)); )
    ;
  return t;
}
var Ip = /^\s+/;
function Op(e) {
  return e && e.slice(0, Lp(e) + 1).replace(Ip, "");
}
function uo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ei = NaN, $p = /^[-+]0x[0-9a-f]+$/i, Rp = /^0b[01]+$/i, Mp = /^0o[0-7]+$/i, Pp = parseInt;
function ti(e) {
  if (typeof e == "number")
    return e;
  if (As(e))
    return ei;
  if (uo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = uo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Op(e);
  var n = Rp.test(e);
  return n || Mp.test(e) ? Pp(e.slice(2), n ? 2 : 8) : $p.test(e) ? ei : +e;
}
function Xc(e) {
  return e;
}
var Np = "[object AsyncFunction]", Dp = "[object Function]", zp = "[object GeneratorFunction]", Bp = "[object Proxy]";
function Qc(e) {
  if (!uo(e))
    return !1;
  var t = sr(e);
  return t == Dp || t == zp || t == Np || t == Bp;
}
var Ks = Nn["__core-js_shared__"], ni = function() {
  var e = /[^.]+$/.exec(Ks && Ks.keys && Ks.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fp(e) {
  return !!ni && ni in e;
}
var jp = Function.prototype, Vp = jp.toString;
function Lo(e) {
  if (e != null) {
    try {
      return Vp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Hp = /[\\^$.*+?()[\]{}|]/g, Wp = /^\[object .+?Constructor\]$/, Up = Function.prototype, Gp = Object.prototype, qp = Up.toString, Kp = Gp.hasOwnProperty, Zp = RegExp(
  "^" + qp.call(Kp).replace(Hp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yp(e) {
  if (!uo(e) || Fp(e))
    return !1;
  var t = Qc(e) ? Zp : Wp;
  return t.test(Lo(e));
}
function Xp(e, t) {
  return e?.[t];
}
function Io(e, t) {
  var n = Xp(e, t);
  return Yp(n) ? n : void 0;
}
var ua = Io(Nn, "WeakMap");
function Qp(e, t, n) {
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
var Jp = 800, em = 16, tm = Date.now;
function nm(e) {
  var t = 0, n = 0;
  return function() {
    var o = tm(), r = em - (o - n);
    if (n = o, r > 0) {
      if (++t >= Jp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function om(e) {
  return function() {
    return e;
  };
}
var us = function() {
  try {
    var e = Io(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), rm = us ? function(e, t) {
  return us(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: om(t),
    writable: !0
  });
} : Xc, sm = nm(rm);
function am(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var lm = 9007199254740991, im = /^(?:0|[1-9]\d*)$/;
function Na(e, t) {
  var n = typeof e;
  return t = t ?? lm, !!t && (n == "number" || n != "symbol" && im.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function cm(e, t, n) {
  t == "__proto__" && us ? us(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Da(e, t) {
  return e === t || e !== e && t !== t;
}
var um = Object.prototype, dm = um.hasOwnProperty;
function fm(e, t, n) {
  var o = e[t];
  (!(dm.call(e, t) && Da(o, n)) || n === void 0 && !(t in e)) && cm(e, t, n);
}
var oi = Math.max;
function pm(e, t, n) {
  return t = oi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = oi(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(a), Qp(e, this, i);
  };
}
var mm = 9007199254740991;
function za(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mm;
}
function hm(e) {
  return e != null && za(e.length) && !Qc(e);
}
var gm = Object.prototype;
function vm(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || gm;
  return e === n;
}
function bm(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var ym = "[object Arguments]";
function ri(e) {
  return Ko(e) && sr(e) == ym;
}
var Jc = Object.prototype, wm = Jc.hasOwnProperty, km = Jc.propertyIsEnumerable, Ba = ri(/* @__PURE__ */ function() {
  return arguments;
}()) ? ri : function(e) {
  return Ko(e) && wm.call(e, "callee") && !km.call(e, "callee");
};
function _m() {
  return !1;
}
var eu = typeof exports == "object" && exports && !exports.nodeType && exports, si = eu && typeof module == "object" && module && !module.nodeType && module, Tm = si && si.exports === eu, ai = Tm ? Nn.Buffer : void 0, Am = ai ? ai.isBuffer : void 0, da = Am || _m, Sm = "[object Arguments]", Cm = "[object Array]", Em = "[object Boolean]", xm = "[object Date]", Lm = "[object Error]", Im = "[object Function]", Om = "[object Map]", $m = "[object Number]", Rm = "[object Object]", Mm = "[object RegExp]", Pm = "[object Set]", Nm = "[object String]", Dm = "[object WeakMap]", zm = "[object ArrayBuffer]", Bm = "[object DataView]", Fm = "[object Float32Array]", jm = "[object Float64Array]", Vm = "[object Int8Array]", Hm = "[object Int16Array]", Wm = "[object Int32Array]", Um = "[object Uint8Array]", Gm = "[object Uint8ClampedArray]", qm = "[object Uint16Array]", Km = "[object Uint32Array]", Fe = {};
Fe[Fm] = Fe[jm] = Fe[Vm] = Fe[Hm] = Fe[Wm] = Fe[Um] = Fe[Gm] = Fe[qm] = Fe[Km] = !0;
Fe[Sm] = Fe[Cm] = Fe[zm] = Fe[Em] = Fe[Bm] = Fe[xm] = Fe[Lm] = Fe[Im] = Fe[Om] = Fe[$m] = Fe[Rm] = Fe[Mm] = Fe[Pm] = Fe[Nm] = Fe[Dm] = !1;
function Zm(e) {
  return Ko(e) && za(e.length) && !!Fe[sr(e)];
}
function Ym(e) {
  return function(t) {
    return e(t);
  };
}
var tu = typeof exports == "object" && exports && !exports.nodeType && exports, Ar = tu && typeof module == "object" && module && !module.nodeType && module, Xm = Ar && Ar.exports === tu, Zs = Xm && Kc.process, li = function() {
  try {
    var e = Ar && Ar.require && Ar.require("util").types;
    return e || Zs && Zs.binding && Zs.binding("util");
  } catch {
  }
}(), ii = li && li.isTypedArray, nu = ii ? Ym(ii) : Zm, Qm = Object.prototype, Jm = Qm.hasOwnProperty;
function eh(e, t) {
  var n = bn(e), o = !n && Ba(e), r = !n && !o && da(e), s = !n && !o && !r && nu(e), a = n || o || r || s, i = a ? bm(e.length, String) : [], c = i.length;
  for (var u in e)
    Jm.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Na(u, c))) && i.push(u);
  return i;
}
function th(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var nh = th(Object.keys, Object), oh = Object.prototype, rh = oh.hasOwnProperty;
function sh(e) {
  if (!vm(e))
    return nh(e);
  var t = [];
  for (var n in Object(e))
    rh.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ou(e) {
  return hm(e) ? eh(e) : sh(e);
}
var ah = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lh = /^\w*$/;
function Fa(e, t) {
  if (bn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || As(e) ? !0 : lh.test(e) || !ah.test(e) || t != null && e in Object(t);
}
var Or = Io(Object, "create");
function ih() {
  this.__data__ = Or ? Or(null) : {}, this.size = 0;
}
function ch(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var uh = "__lodash_hash_undefined__", dh = Object.prototype, fh = dh.hasOwnProperty;
function ph(e) {
  var t = this.__data__;
  if (Or) {
    var n = t[e];
    return n === uh ? void 0 : n;
  }
  return fh.call(t, e) ? t[e] : void 0;
}
var mh = Object.prototype, hh = mh.hasOwnProperty;
function gh(e) {
  var t = this.__data__;
  return Or ? t[e] !== void 0 : hh.call(t, e);
}
var vh = "__lodash_hash_undefined__";
function bh(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Or && t === void 0 ? vh : t, this;
}
function Ao(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ao.prototype.clear = ih;
Ao.prototype.delete = ch;
Ao.prototype.get = ph;
Ao.prototype.has = gh;
Ao.prototype.set = bh;
function yh() {
  this.__data__ = [], this.size = 0;
}
function Ss(e, t) {
  for (var n = e.length; n--; )
    if (Da(e[n][0], t))
      return n;
  return -1;
}
var wh = Array.prototype, kh = wh.splice;
function _h(e) {
  var t = this.__data__, n = Ss(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : kh.call(t, n, 1), --this.size, !0;
}
function Th(e) {
  var t = this.__data__, n = Ss(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ah(e) {
  return Ss(this.__data__, e) > -1;
}
function Sh(e, t) {
  var n = this.__data__, o = Ss(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Qn.prototype.clear = yh;
Qn.prototype.delete = _h;
Qn.prototype.get = Th;
Qn.prototype.has = Ah;
Qn.prototype.set = Sh;
var $r = Io(Nn, "Map");
function Ch() {
  this.size = 0, this.__data__ = {
    hash: new Ao(),
    map: new ($r || Qn)(),
    string: new Ao()
  };
}
function Eh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Cs(e, t) {
  var n = e.__data__;
  return Eh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function xh(e) {
  var t = Cs(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Lh(e) {
  return Cs(this, e).get(e);
}
function Ih(e) {
  return Cs(this, e).has(e);
}
function Oh(e, t) {
  var n = Cs(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Jn.prototype.clear = Ch;
Jn.prototype.delete = xh;
Jn.prototype.get = Lh;
Jn.prototype.has = Ih;
Jn.prototype.set = Oh;
var $h = "Expected a function";
function ja(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError($h);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (ja.Cache || Jn)(), n;
}
ja.Cache = Jn;
var Rh = 500;
function Mh(e) {
  var t = ja(e, function(o) {
    return n.size === Rh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Ph = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nh = /\\(\\)?/g, Dh = Mh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ph, function(n, o, r, s) {
    t.push(r ? s.replace(Nh, "$1") : o || n);
  }), t;
});
function zh(e) {
  return e == null ? "" : Yc(e);
}
function Es(e, t) {
  return bn(e) ? e : Fa(e, t) ? [e] : Dh(zh(e));
}
function Dr(e) {
  if (typeof e == "string" || As(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Va(e, t) {
  t = Es(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Dr(t[n++])];
  return n && n == o ? e : void 0;
}
function lo(e, t, n) {
  var o = e == null ? void 0 : Va(e, t);
  return o === void 0 ? n : o;
}
function ru(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var ci = Mn ? Mn.isConcatSpreadable : void 0;
function Bh(e) {
  return bn(e) || Ba(e) || !!(ci && e && e[ci]);
}
function Fh(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = Bh), r || (r = []); ++s < a; ) {
    var i = e[s];
    n(i) ? ru(r, i) : r[r.length] = i;
  }
  return r;
}
function jh(e) {
  var t = e == null ? 0 : e.length;
  return t ? Fh(e) : [];
}
function Vh(e) {
  return sm(pm(e, void 0, jh), e + "");
}
function ao() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return bn(e) ? e : [e];
}
function Hh() {
  this.__data__ = new Qn(), this.size = 0;
}
function Wh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Uh(e) {
  return this.__data__.get(e);
}
function Gh(e) {
  return this.__data__.has(e);
}
var qh = 200;
function Kh(e, t) {
  var n = this.__data__;
  if (n instanceof Qn) {
    var o = n.__data__;
    if (!$r || o.length < qh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Jn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zn(e) {
  var t = this.__data__ = new Qn(e);
  this.size = t.size;
}
Zn.prototype.clear = Hh;
Zn.prototype.delete = Wh;
Zn.prototype.get = Uh;
Zn.prototype.has = Gh;
Zn.prototype.set = Kh;
function Zh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function Yh() {
  return [];
}
var Xh = Object.prototype, Qh = Xh.propertyIsEnumerable, ui = Object.getOwnPropertySymbols, Jh = ui ? function(e) {
  return e == null ? [] : (e = Object(e), Zh(ui(e), function(t) {
    return Qh.call(e, t);
  }));
} : Yh;
function eg(e, t, n) {
  var o = t(e);
  return bn(e) ? o : ru(o, n(e));
}
function di(e) {
  return eg(e, ou, Jh);
}
var fa = Io(Nn, "DataView"), pa = Io(Nn, "Promise"), ma = Io(Nn, "Set"), fi = "[object Map]", tg = "[object Object]", pi = "[object Promise]", mi = "[object Set]", hi = "[object WeakMap]", gi = "[object DataView]", ng = Lo(fa), og = Lo($r), rg = Lo(pa), sg = Lo(ma), ag = Lo(ua), so = sr;
(fa && so(new fa(new ArrayBuffer(1))) != gi || $r && so(new $r()) != fi || pa && so(pa.resolve()) != pi || ma && so(new ma()) != mi || ua && so(new ua()) != hi) && (so = function(e) {
  var t = sr(e), n = t == tg ? e.constructor : void 0, o = n ? Lo(n) : "";
  if (o)
    switch (o) {
      case ng:
        return gi;
      case og:
        return fi;
      case rg:
        return pi;
      case sg:
        return mi;
      case ag:
        return hi;
    }
  return t;
});
var vi = Nn.Uint8Array, lg = "__lodash_hash_undefined__";
function ig(e) {
  return this.__data__.set(e, lg), this;
}
function cg(e) {
  return this.__data__.has(e);
}
function ds(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Jn(); ++t < n; )
    this.add(e[t]);
}
ds.prototype.add = ds.prototype.push = ig;
ds.prototype.has = cg;
function ug(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function dg(e, t) {
  return e.has(t);
}
var fg = 1, pg = 2;
function su(e, t, n, o, r, s) {
  var a = n & fg, i = e.length, c = t.length;
  if (i != c && !(a && c > i))
    return !1;
  var u = s.get(e), d = s.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, g = !0, w = n & pg ? new ds() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < i; ) {
    var h = e[m], b = t[m];
    if (o)
      var C = a ? o(b, h, m, t, e, s) : o(h, b, m, e, t, s);
    if (C !== void 0) {
      if (C)
        continue;
      g = !1;
      break;
    }
    if (w) {
      if (!ug(t, function(k, M) {
        if (!dg(w, M) && (h === k || r(h, k, n, o, s)))
          return w.push(M);
      })) {
        g = !1;
        break;
      }
    } else if (!(h === b || r(h, b, n, o, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
}
function mg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function hg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var gg = 1, vg = 2, bg = "[object Boolean]", yg = "[object Date]", wg = "[object Error]", kg = "[object Map]", _g = "[object Number]", Tg = "[object RegExp]", Ag = "[object Set]", Sg = "[object String]", Cg = "[object Symbol]", Eg = "[object ArrayBuffer]", xg = "[object DataView]", bi = Mn ? Mn.prototype : void 0, Ys = bi ? bi.valueOf : void 0;
function Lg(e, t, n, o, r, s, a) {
  switch (n) {
    case xg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Eg:
      return !(e.byteLength != t.byteLength || !s(new vi(e), new vi(t)));
    case bg:
    case yg:
    case _g:
      return Da(+e, +t);
    case wg:
      return e.name == t.name && e.message == t.message;
    case Tg:
    case Sg:
      return e == t + "";
    case kg:
      var i = mg;
    case Ag:
      var c = o & gg;
      if (i || (i = hg), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= vg, a.set(e, t);
      var d = su(i(e), i(t), o, r, s, a);
      return a.delete(e), d;
    case Cg:
      if (Ys)
        return Ys.call(e) == Ys.call(t);
  }
  return !1;
}
var Ig = 1, Og = Object.prototype, $g = Og.hasOwnProperty;
function Rg(e, t, n, o, r, s) {
  var a = n & Ig, i = di(e), c = i.length, u = di(t), d = u.length;
  if (c != d && !a)
    return !1;
  for (var m = c; m--; ) {
    var g = i[m];
    if (!(a ? g in t : $g.call(t, g)))
      return !1;
  }
  var w = s.get(e), h = s.get(t);
  if (w && h)
    return w == t && h == e;
  var b = !0;
  s.set(e, t), s.set(t, e);
  for (var C = a; ++m < c; ) {
    g = i[m];
    var k = e[g], M = t[g];
    if (o)
      var j = a ? o(M, k, g, t, e, s) : o(k, M, g, e, t, s);
    if (!(j === void 0 ? k === M || r(k, M, n, o, s) : j)) {
      b = !1;
      break;
    }
    C || (C = g == "constructor");
  }
  if (b && !C) {
    var L = e.constructor, I = t.constructor;
    L != I && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof I == "function" && I instanceof I) && (b = !1);
  }
  return s.delete(e), s.delete(t), b;
}
var Mg = 1, yi = "[object Arguments]", wi = "[object Array]", Kr = "[object Object]", Pg = Object.prototype, ki = Pg.hasOwnProperty;
function Ng(e, t, n, o, r, s) {
  var a = bn(e), i = bn(t), c = a ? wi : so(e), u = i ? wi : so(t);
  c = c == yi ? Kr : c, u = u == yi ? Kr : u;
  var d = c == Kr, m = u == Kr, g = c == u;
  if (g && da(e)) {
    if (!da(t))
      return !1;
    a = !0, d = !1;
  }
  if (g && !d)
    return s || (s = new Zn()), a || nu(e) ? su(e, t, n, o, r, s) : Lg(e, t, c, n, o, r, s);
  if (!(n & Mg)) {
    var w = d && ki.call(e, "__wrapped__"), h = m && ki.call(t, "__wrapped__");
    if (w || h) {
      var b = w ? e.value() : e, C = h ? t.value() : t;
      return s || (s = new Zn()), r(b, C, n, o, s);
    }
  }
  return g ? (s || (s = new Zn()), Rg(e, t, n, o, r, s)) : !1;
}
function xs(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Ko(e) && !Ko(t) ? e !== e && t !== t : Ng(e, t, n, o, xs, r);
}
var Dg = 1, zg = 2;
function Bg(e, t, n, o) {
  var r = n.length, s = r;
  if (e == null)
    return !s;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < s; ) {
    a = n[r];
    var i = a[0], c = e[i], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Zn(), m;
      if (!(m === void 0 ? xs(u, c, Dg | zg, o, d) : m))
        return !1;
    }
  }
  return !0;
}
function au(e) {
  return e === e && !uo(e);
}
function Fg(e) {
  for (var t = ou(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, au(r)];
  }
  return t;
}
function lu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function jg(e) {
  var t = Fg(e);
  return t.length == 1 && t[0][2] ? lu(t[0][0], t[0][1]) : function(n) {
    return n === e || Bg(n, e, t);
  };
}
function Vg(e, t) {
  return e != null && t in Object(e);
}
function Hg(e, t, n) {
  t = Es(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = Dr(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && za(r) && Na(a, r) && (bn(e) || Ba(e)));
}
function iu(e, t) {
  return e != null && Hg(e, t, Vg);
}
var Wg = 1, Ug = 2;
function Gg(e, t) {
  return Fa(e) && au(t) ? lu(Dr(e), t) : function(n) {
    var o = lo(n, e);
    return o === void 0 && o === t ? iu(n, e) : xs(t, o, Wg | Ug);
  };
}
function qg(e) {
  return function(t) {
    return t?.[e];
  };
}
function Kg(e) {
  return function(t) {
    return Va(t, e);
  };
}
function Zg(e) {
  return Fa(e) ? qg(Dr(e)) : Kg(e);
}
function Yg(e) {
  return typeof e == "function" ? e : e == null ? Xc : typeof e == "object" ? bn(e) ? Gg(e[0], e[1]) : jg(e) : Zg(e);
}
var Xs = function() {
  return Nn.Date.now();
}, Xg = "Expected a function", Qg = Math.max, Jg = Math.min;
function ev(e, t, n) {
  var o, r, s, a, i, c, u = 0, d = !1, m = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Xg);
  t = ti(t) || 0, uo(n) && (d = !!n.leading, m = "maxWait" in n, s = m ? Qg(ti(n.maxWait) || 0, t) : s, g = "trailing" in n ? !!n.trailing : g);
  function w(O) {
    var R = o, K = r;
    return o = r = void 0, u = O, a = e.apply(K, R), a;
  }
  function h(O) {
    return u = O, i = setTimeout(k, t), d ? w(O) : a;
  }
  function b(O) {
    var R = O - c, K = O - u, F = t - R;
    return m ? Jg(F, s - K) : F;
  }
  function C(O) {
    var R = O - c, K = O - u;
    return c === void 0 || R >= t || R < 0 || m && K >= s;
  }
  function k() {
    var O = Xs();
    if (C(O))
      return M(O);
    i = setTimeout(k, b(O));
  }
  function M(O) {
    return i = void 0, g && o ? w(O) : (o = r = void 0, a);
  }
  function j() {
    i !== void 0 && clearTimeout(i), u = 0, o = c = r = i = void 0;
  }
  function L() {
    return i === void 0 ? a : M(Xs());
  }
  function I() {
    var O = Xs(), R = C(O);
    if (o = arguments, r = this, c = O, R) {
      if (i === void 0)
        return h(c);
      if (m)
        return clearTimeout(i), i = setTimeout(k, t), w(c);
    }
    return i === void 0 && (i = setTimeout(k, t)), a;
  }
  return I.cancel = j, I.flush = L, I;
}
function tv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return am(e, Yg(t), r);
}
function fs(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Sr(e, t) {
  return xs(e, t);
}
function Yn(e) {
  return e == null;
}
function cu(e) {
  return e === void 0;
}
function nv(e, t, n, o) {
  if (!uo(e))
    return e;
  t = Es(t, e);
  for (var r = -1, s = t.length, a = s - 1, i = e; i != null && ++r < s; ) {
    var c = Dr(t[r]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (r != a) {
      var d = i[c];
      u = void 0, u === void 0 && (u = uo(d) ? d : Na(t[r + 1]) ? [] : {});
    }
    fm(i, c, u), i = i[c];
  }
  return e;
}
function ov(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], i = Va(e, a);
    n(i, a) && nv(s, Es(a, e), i);
  }
  return s;
}
function rv(e, t) {
  return ov(e, t, function(n, o) {
    return iu(e, o);
  });
}
var sv = Vh(function(e, t) {
  return e == null ? {} : rv(e, t);
});
const In = (e) => e === void 0, Rr = (e) => typeof e == "boolean", Pe = (e) => typeof e == "number", hn = (e) => typeof Element > "u" ? !1 : e instanceof Element, av = (e) => Zt(e) ? !Number.isNaN(Number(e)) : !1;
var lv = Object.defineProperty, iv = Object.defineProperties, cv = Object.getOwnPropertyDescriptors, _i = Object.getOwnPropertySymbols, uv = Object.prototype.hasOwnProperty, dv = Object.prototype.propertyIsEnumerable, Ti = (e, t, n) => t in e ? lv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fv = (e, t) => {
  for (var n in t || (t = {}))
    uv.call(t, n) && Ti(e, n, t[n]);
  if (_i)
    for (var n of _i(t))
      dv.call(t, n) && Ti(e, n, t[n]);
  return e;
}, pv = (e, t) => iv(e, cv(t));
function mv(e, t) {
  var n;
  const o = io();
  return Ia(() => {
    o.value = e();
  }, pv(fv({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), La(o);
}
var Ai;
const We = typeof window < "u", hv = (e) => typeof e == "string", uu = () => {
}, ha = We && ((Ai = window?.navigator) == null ? void 0 : Ai.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ha(e) {
  return typeof e == "function" ? e() : l(e);
}
function gv(e) {
  return e;
}
function zr(e) {
  return uf() ? (Pc(e), !0) : !1;
}
function vv(e, t = !0) {
  xt() ? ot(e) : t ? e() : Ze(e);
}
function ps(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = P(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    r.value = !1, a();
  }
  function c(...u) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...u);
    }, Ha(t));
  }
  return o && (r.value = !0, We && c()), zr(i), {
    isPending: La(r),
    start: c,
    stop: i
  };
}
function Kn(e) {
  var t;
  const n = Ha(e);
  return (t = n?.$el) != null ? t : n;
}
const Ls = We ? window : void 0;
function gn(...e) {
  let t, n, o, r;
  if (hv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Ls) : [t, n, o, r] = e, !t)
    return uu;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, m, g, w) => (d.addEventListener(m, g, w), () => d.removeEventListener(m, g, w)), c = pe(() => [Kn(t), Ha(r)], ([d, m]) => {
    a(), d && s.push(...n.flatMap((g) => o.map((w) => i(d, g, w, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), a();
  };
  return zr(u), u;
}
let Si = !1;
function bv(e, t, n = {}) {
  const { window: o = Ls, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  ha && !Si && (Si = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", uu)));
  let i = !0;
  const c = (g) => r.some((w) => {
    if (typeof w == "string")
      return Array.from(o.document.querySelectorAll(w)).some((h) => h === g.target || g.composedPath().includes(h));
    {
      const h = Kn(w);
      return h && (g.target === h || g.composedPath().includes(h));
    }
  }), d = [
    gn(o, "click", (g) => {
      const w = Kn(e);
      if (!(!w || w === g.target || g.composedPath().includes(w))) {
        if (g.detail === 0 && (i = !c(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: s }),
    gn(o, "pointerdown", (g) => {
      const w = Kn(e);
      w && (i = !g.composedPath().includes(w) && !c(g));
    }, { passive: !0 }),
    a && gn(o, "blur", (g) => {
      var w;
      const h = Kn(e);
      ((w = o.document.activeElement) == null ? void 0 : w.tagName) === "IFRAME" && !h?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function du(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), vv(o, t), n;
}
const Ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ei = "__vueuse_ssr_handlers__";
Ci[Ei] = Ci[Ei] || {};
var xi = Object.getOwnPropertySymbols, yv = Object.prototype.hasOwnProperty, wv = Object.prototype.propertyIsEnumerable, kv = (e, t) => {
  var n = {};
  for (var o in e)
    yv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && xi)
    for (var o of xi(e))
      t.indexOf(o) < 0 && wv.call(e, o) && (n[o] = e[o]);
  return n;
};
function xn(e, t, n = {}) {
  const o = n, { window: r = Ls } = o, s = kv(o, ["window"]);
  let a;
  const i = du(() => r && "ResizeObserver" in r), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => Kn(e), (m) => {
    c(), i.value && r && m && (a = new ResizeObserver(t), a.observe(m, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return zr(d), {
    isSupported: i,
    stop: d
  };
}
var Li = Object.getOwnPropertySymbols, _v = Object.prototype.hasOwnProperty, Tv = Object.prototype.propertyIsEnumerable, Av = (e, t) => {
  var n = {};
  for (var o in e)
    _v.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Li)
    for (var o of Li(e))
      t.indexOf(o) < 0 && Tv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Sv(e, t, n = {}) {
  const o = n, { window: r = Ls } = o, s = Av(o, ["window"]);
  let a;
  const i = du(() => r && "MutationObserver" in r), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => Kn(e), (m) => {
    c(), i.value && r && m && (a = new MutationObserver(t), a.observe(m, s));
  }, { immediate: !0 }), d = () => {
    c(), u();
  };
  return zr(d), {
    isSupported: i,
    stop: d
  };
}
var Ii;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ii || (Ii = {}));
var Cv = Object.defineProperty, Oi = Object.getOwnPropertySymbols, Ev = Object.prototype.hasOwnProperty, xv = Object.prototype.propertyIsEnumerable, $i = (e, t, n) => t in e ? Cv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Lv = (e, t) => {
  for (var n in t || (t = {}))
    Ev.call(t, n) && $i(e, n, t[n]);
  if (Oi)
    for (var n of Oi(t))
      xv.call(t, n) && $i(e, n, t[n]);
  return e;
};
const Iv = {
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
Lv({
  linear: gv
}, Iv);
class Ov extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Wa(e, t) {
  throw new Ov(`[${e}] ${t}`);
}
const Ri = {
  current: 0
}, Mi = P(0), fu = 2e3, Pi = Symbol("elZIndexContextKey"), pu = Symbol("zIndexContextKey"), Ua = (e) => {
  const t = xt() ? Le(Pi, Ri) : Ri, n = e || (xt() ? Le(pu, void 0) : void 0), o = S(() => {
    const a = l(n);
    return Pe(a) ? a : fu;
  }), r = S(() => o.value + Mi.value), s = () => (t.current++, Mi.value = t.current, r.value);
  return !We && Le(Pi), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var $v = {
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
const Rv = (e) => (t, n) => Mv(t, n, l(e)), Mv = (e, t, n) => lo(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), Pv = (e) => {
  const t = S(() => l(e).name), n = Qt(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: Rv(e)
  };
}, mu = Symbol("localeContextKey"), Is = (e) => {
  const t = e || Le(mu, P());
  return Pv(S(() => t.value || $v));
}, hu = "__epPropKey", he = (e) => e, Nv = (e) => en(e) && !!e[hu], Os = (e, t) => {
  if (!en(e) || Nv(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, c = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), Yl(e, "default") && m.push(r), d || (d = m.includes(u))), a && (d || (d = a(u))), !d && m.length > 0) {
        const g = [...new Set(m)].map((w) => JSON.stringify(w)).join(", ");
        df(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [hu]: !0
  };
  return Yl(e, "default") && (c.default = r), c;
}, Ne = (e) => fs(Object.entries(e).map(([t, n]) => [
  t,
  Os(n, t)
])), gu = ["", "default", "small", "large"], $s = Os({
  type: String,
  values: gu,
  required: !1
}), vu = Symbol("size"), Dv = () => {
  const e = Le(vu, {});
  return S(() => l(e.size) || "");
}, bu = Symbol("emptyValuesContextKey"), zv = ["", void 0, null], Bv = void 0, yu = Ne({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => nt(e) ? !e() : !e
  }
}), Fv = (e, t) => {
  const n = xt() ? Le(bu, P({})) : P({}), o = S(() => e.emptyValues || n.value.emptyValues || zv), r = S(() => nt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : nt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Bv), s = (a) => o.value.includes(a);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Ni = (e) => Object.keys(e), ms = P();
function Ga(e, t = void 0) {
  const n = xt() ? Le(Gc, ms) : ms;
  return e ? S(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function wu(e, t) {
  const n = Ga(), o = tt(e, S(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Tr;
  })), r = Is(S(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = Ua(S(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || fu;
  })), a = S(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return ku(S(() => l(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const ku = (e, t, n = !1) => {
  var o;
  const r = !!xt(), s = r ? Ga() : void 0, a = (o = void 0) != null ? o : r ? vn : void 0;
  if (!a)
    return;
  const i = S(() => {
    const c = l(e);
    return s?.value ? jv(s.value, c) : c;
  });
  return a(Gc, i), a(mu, S(() => i.value.locale)), a(qc, S(() => i.value.namespace)), a(pu, S(() => i.value.zIndex)), a(vu, {
    size: S(() => i.value.size || "")
  }), a(bu, S(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ms.value) && (ms.value = i.value), i;
}, jv = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ni(e), ...Ni(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, vt = "update:modelValue", Zo = "change", qo = "input";
var je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const _u = (e = "") => e.split(" ").filter((t) => !!t.trim()), Di = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Vv = (e, t) => {
  !e || !t.trim() || e.classList.add(..._u(t));
}, Hv = (e, t) => {
  !e || !t.trim() || e.classList.remove(..._u(t));
}, Wv = (e, t) => {
  var n;
  if (!We || !e)
    return "";
  let o = gp(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return s ? s[o] : "";
  } catch {
    return e.style[o];
  }
};
function fo(e, t = "px") {
  if (!e)
    return "";
  if (Pe(e) || av(e))
    return `${e}${t}`;
  if (Zt(e))
    return e;
}
let Zr;
const Uv = (e) => {
  var t;
  if (!We)
    return 0;
  if (Zr !== void 0)
    return Zr;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Zr = o - s, Zr;
};
function Gv(e, t) {
  if (!We)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((c, u) => c + u.offsetTop, 0), s = r + t.offsetHeight, a = e.scrollTop, i = a + e.clientHeight;
  r < a ? e.scrollTop = r : s > i && (e.scrollTop = s - e.clientHeight);
}
const wn = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Tu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Au = (e) => (e.install = co, e), qv = Ne({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), Kv = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), Zv = /* @__PURE__ */ oe({
  ...Kv,
  props: qv,
  setup(e) {
    const t = e, n = tt("icon"), o = S(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: In(r) ? void 0 : fo(r),
        "--color": s
      };
    });
    return (r, s) => (A(), D("i", _o({
      class: l(n).b(),
      style: l(o)
    }, r.$attrs), [
      ie(r.$slots, "default")
    ], 16));
  }
});
var Yv = /* @__PURE__ */ je(Zv, [["__file", "icon.vue"]]);
const Nt = wn(Yv);
/*! Element Plus Icons Vue v2.3.1 */
var Xv = /* @__PURE__ */ oe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Su = Xv, Qv = /* @__PURE__ */ oe({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Jv = Qv, e0 = /* @__PURE__ */ oe({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (A(), D("svg", {
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
}), t0 = e0, n0 = /* @__PURE__ */ oe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), o0 = n0, r0 = /* @__PURE__ */ oe({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (A(), D("svg", {
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
}), qa = r0, s0 = /* @__PURE__ */ oe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), hs = s0, a0 = /* @__PURE__ */ oe({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (A(), D("svg", {
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
}), l0 = a0, i0 = /* @__PURE__ */ oe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), c0 = i0, u0 = /* @__PURE__ */ oe({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), d0 = u0, f0 = /* @__PURE__ */ oe({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), p0 = f0, m0 = /* @__PURE__ */ oe({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), h0 = m0, g0 = /* @__PURE__ */ oe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), v0 = g0, b0 = /* @__PURE__ */ oe({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), y0 = b0, w0 = /* @__PURE__ */ oe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (A(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), k0 = w0;
const So = he([
  String,
  Object,
  Function
]), Cu = {
  Close: hs
}, _0 = {
  Close: hs
}, gs = {
  success: v0,
  warning: k0,
  error: o0,
  info: c0
}, Eu = {
  validating: d0,
  success: t0,
  error: qa
}, xu = () => We && /firefox/i.test(window.navigator.userAgent);
let Vt;
const T0 = {
  height: "0",
  visibility: "hidden",
  overflow: xu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, A0 = [
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
function S0(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: A0.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function zi(e, t = 1, n) {
  var o;
  Vt || (Vt = document.createElement("textarea"), document.body.appendChild(Vt));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: i } = S0(e);
  i.forEach(([m, g]) => Vt?.style.setProperty(m, g)), Object.entries(T0).forEach(([m, g]) => Vt?.style.setProperty(m, g, "important")), Vt.value = e.value || e.placeholder || "";
  let c = Vt.scrollHeight;
  const u = {};
  a === "border-box" ? c = c + s : a === "content-box" && (c = c - r), Vt.value = "";
  const d = Vt.scrollHeight - r;
  if (Pe(t)) {
    let m = d * t;
    a === "border-box" && (m = m + r + s), c = Math.max(m, c), u.minHeight = `${m}px`;
  }
  if (Pe(n)) {
    let m = d * n;
    a === "border-box" && (m = m + r + s), c = Math.min(m, c);
  }
  return u.height = `${c}px`, (o = Vt.parentNode) == null || o.removeChild(Vt), Vt = void 0, u;
}
const Lu = (e) => e, C0 = Ne({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), ar = (e) => sv(C0, e), E0 = Ne({
  id: {
    type: String,
    default: void 0
  },
  size: $s,
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
    type: So
  },
  prefixIcon: {
    type: So
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
    default: () => Lu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...ar(["ariaLabel"])
}), x0 = {
  [vt]: (e) => Zt(e),
  input: (e) => Zt(e),
  change: (e) => Zt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, L0 = ["class", "style"], I0 = /^on[A-Z]/, O0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = S(() => (n?.value || []).concat(L0)), r = xt();
  return r ? S(() => {
    var s;
    return fs(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && I0.test(a))));
  }) : S(() => ({}));
}, Ka = Symbol("formContextKey"), vs = Symbol("formItemContextKey"), Bi = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, $0 = Symbol("elIdInjection"), Iu = () => xt() ? Le($0, Bi) : Bi, Yo = (e) => {
  const t = Iu(), n = Pa();
  return mv(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Za = () => {
  const e = Le(Ka, void 0), t = Le(vs, void 0);
  return {
    form: e,
    formItem: t
  };
}, Ou = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = P(!1)), o || (o = P(!1));
  const r = P();
  let s;
  const a = S(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ot(() => {
    s = pe([qn(e, "id"), n], ([i, c]) => {
      const u = i ?? (c ? void 0 : Yo().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !c && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Oa(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, $u = (e) => {
  const t = xt();
  return S(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, Rs = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : $u("size"), r = t.global ? n : Dv(), s = t.form ? { size: void 0 } : Le(Ka, void 0), a = t.formItem ? { size: void 0 } : Le(vs, void 0);
  return S(() => o.value || l(e) || a?.size || s?.size || r.value || "");
}, Ru = (e) => {
  const t = $u("disabled"), n = Le(Ka, void 0);
  return S(() => t.value || l(e) || n?.disabled || !1);
};
function Mu(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = xt(), { emit: a } = s, i = io(), c = P(!1), u = (g) => {
    nt(t) && t(g) || c.value || (c.value = !0, a("focus", g), n?.());
  }, d = (g) => {
    var w;
    nt(o) && o(g) || g.relatedTarget && ((w = i.value) != null && w.contains(g.relatedTarget)) || (c.value = !1, a("blur", g), r?.());
  }, m = () => {
    var g, w;
    (g = i.value) != null && g.contains(document.activeElement) && i.value !== document.activeElement || (w = e.value) == null || w.focus();
  };
  return pe(i, (g) => {
    g && g.setAttribute("tabindex", "-1");
  }), gn(i, "focus", u, !0), gn(i, "blur", d, !0), gn(i, "click", m, !0), {
    isFocused: c,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const R0 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Pu({
  afterComposition: e,
  emit: t
}) {
  const n = P(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var c;
    t?.("compositionupdate", i);
    const u = (c = i.target) == null ? void 0 : c.value, d = u[u.length - 1] || "";
    n.value = !R0(d);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Ze(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? s(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function M0(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: a } = e.value;
    if (r == null || s == null)
      return;
    const i = a.slice(0, Math.max(0, r)), c = a.slice(Math.max(0, s));
    t = {
      selectionStart: r,
      selectionEnd: s,
      value: a,
      beforeTxt: i,
      afterTxt: c
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: i } = t;
    if (s == null || a == null || i == null)
      return;
    let c = r.length;
    if (r.endsWith(a))
      c = r.length - a.length;
    else if (r.startsWith(s))
      c = s.length;
    else {
      const u = s[i - 1], d = r.indexOf(u, i - 1);
      d !== -1 && (c = d + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, o];
}
const P0 = "ElInput", N0 = oe({
  name: P0,
  inheritAttrs: !1
}), D0 = /* @__PURE__ */ oe({
  ...N0,
  props: E0,
  emits: x0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ff(), s = O0(), a = Nc(), i = S(() => [
      o.type === "textarea" ? b.b() : h.b(),
      h.m(g.value),
      h.is("disabled", w.value),
      h.is("exceed", Ue.value),
      {
        [h.b("group")]: a.prepend || a.append,
        [h.m("prefix")]: a.prefix || o.prefixIcon,
        [h.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [h.bm("suffix", "password-clear")]: ue.value && fe.value,
        [h.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), c = S(() => [
      h.e("wrapper"),
      h.is("focus", K.value)
    ]), { form: u, formItem: d } = Za(), { inputId: m } = Ou(o, {
      formItemContext: d
    }), g = Rs(), w = Ru(), h = tt("input"), b = tt("textarea"), C = io(), k = io(), M = P(!1), j = P(!1), L = P(), I = io(o.inputStyle), O = S(() => C.value || k.value), { wrapperRef: R, isFocused: K, handleFocus: F, handleBlur: ne } = Mu(O, {
      beforeFocus() {
        return w.value;
      },
      afterBlur() {
        var q;
        o.validateEvent && ((q = d?.validate) == null || q.call(d, "blur").catch((ke) => void 0));
      }
    }), H = S(() => {
      var q;
      return (q = u?.statusIcon) != null ? q : !1;
    }), se = S(() => d?.validateState || ""), de = S(() => se.value && Eu[se.value]), ce = S(() => j.value ? y0 : l0), $ = S(() => [
      r.style
    ]), V = S(() => [
      o.inputStyle,
      I.value,
      { resize: o.resize }
    ]), B = S(() => Yn(o.modelValue) ? "" : String(o.modelValue)), ue = S(() => o.clearable && !w.value && !o.readonly && !!B.value && (K.value || M.value)), fe = S(() => o.showPassword && !w.value && !!B.value && (!!B.value || K.value)), Te = S(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !w.value && !o.readonly && !o.showPassword), De = S(() => B.value.length), Ue = S(() => !!Te.value && De.value > Number(o.maxlength)), ve = S(() => !!a.suffix || !!o.suffixIcon || ue.value || o.showPassword || Te.value || !!se.value && H.value), [W, U] = M0(C);
    xn(k, (q) => {
      if (ee(), !Te.value || o.resize !== "both")
        return;
      const ke = q[0], { width: dt } = ke.contentRect;
      L.value = {
        right: `calc(100% - ${dt + 15 + 6}px)`
      };
    });
    const me = () => {
      const { type: q, autosize: ke } = o;
      if (!(!We || q !== "textarea" || !k.value))
        if (ke) {
          const dt = en(ke) ? ke.minRows : void 0, xe = en(ke) ? ke.maxRows : void 0, kt = zi(k.value, dt, xe);
          I.value = {
            overflowY: "hidden",
            ...kt
          }, Ze(() => {
            k.value.offsetHeight, I.value = kt;
          });
        } else
          I.value = {
            minHeight: zi(k.value).minHeight
          };
    }, ee = ((q) => {
      let ke = !1;
      return () => {
        var dt;
        if (ke || !o.autosize)
          return;
        ((dt = k.value) == null ? void 0 : dt.offsetParent) === null || (q(), ke = !0);
      };
    })(me), X = () => {
      const q = O.value, ke = o.formatter ? o.formatter(B.value) : B.value;
      !q || q.value === ke || (q.value = ke);
    }, Ve = async (q) => {
      W();
      let { value: ke } = q.target;
      if (o.formatter && o.parser && (ke = o.parser(ke)), !ut.value) {
        if (ke === B.value) {
          X();
          return;
        }
        n(vt, ke), n(qo, ke), await Ze(), X(), U();
      }
    }, ze = (q) => {
      let { value: ke } = q.target;
      o.formatter && o.parser && (ke = o.parser(ke)), n(Zo, ke);
    }, {
      isComposing: ut,
      handleCompositionStart: Ge,
      handleCompositionUpdate: Lt,
      handleCompositionEnd: bt
    } = Pu({ emit: n, afterComposition: Ve }), qe = () => {
      W(), j.value = !j.value, setTimeout(U);
    }, yt = () => {
      var q;
      return (q = O.value) == null ? void 0 : q.focus();
    }, rt = () => {
      var q;
      return (q = O.value) == null ? void 0 : q.blur();
    }, wt = (q) => {
      M.value = !1, n("mouseleave", q);
    }, Qe = (q) => {
      M.value = !0, n("mouseenter", q);
    }, ct = (q) => {
      n("keydown", q);
    }, It = () => {
      var q;
      (q = O.value) == null || q.select();
    }, Bt = () => {
      n(vt, ""), n(Zo, ""), n("clear"), n(qo, "");
    };
    return pe(() => o.modelValue, () => {
      var q;
      Ze(() => me()), o.validateEvent && ((q = d?.validate) == null || q.call(d, "change").catch((ke) => void 0));
    }), pe(B, () => X()), pe(() => o.type, async () => {
      await Ze(), X(), me();
    }), ot(() => {
      !o.formatter && o.parser, X(), Ze(me);
    }), t({
      input: C,
      textarea: k,
      ref: O,
      textareaStyle: V,
      autosize: qn(o, "autosize"),
      isComposing: ut,
      focus: yt,
      blur: rt,
      select: It,
      clear: Bt,
      resizeTextarea: me
    }), (q, ke) => (A(), D("div", {
      class: z([
        l(i),
        {
          [l(h).bm("group", "append")]: q.$slots.append,
          [l(h).bm("group", "prepend")]: q.$slots.prepend
        }
      ]),
      style: mt(l($)),
      onMouseenter: Qe,
      onMouseleave: wt
    }, [
      Y(" input "),
      q.type !== "textarea" ? (A(), D(at, { key: 0 }, [
        Y(" prepend slot "),
        q.$slots.prepend ? (A(), D("div", {
          key: 0,
          class: z(l(h).be("group", "prepend"))
        }, [
          ie(q.$slots, "prepend")
        ], 2)) : Y("v-if", !0),
        f("div", {
          ref_key: "wrapperRef",
          ref: R,
          class: z(l(c))
        }, [
          Y(" prefix slot "),
          q.$slots.prefix || q.prefixIcon ? (A(), D("span", {
            key: 0,
            class: z(l(h).e("prefix"))
          }, [
            f("span", {
              class: z(l(h).e("prefix-inner"))
            }, [
              ie(q.$slots, "prefix"),
              q.prefixIcon ? (A(), re(l(Nt), {
                key: 0,
                class: z(l(h).e("icon"))
              }, {
                default: J(() => [
                  (A(), re(Jt(q.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0),
          f("input", _o({
            id: l(m),
            ref_key: "input",
            ref: C,
            class: l(h).e("inner")
          }, l(s), {
            minlength: q.minlength,
            maxlength: q.maxlength,
            type: q.showPassword ? j.value ? "text" : "password" : q.type,
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
            onCompositionstart: l(Ge),
            onCompositionupdate: l(Lt),
            onCompositionend: l(bt),
            onInput: Ve,
            onChange: ze,
            onKeydown: ct
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Y(" suffix slot "),
          l(ve) ? (A(), D("span", {
            key: 1,
            class: z(l(h).e("suffix"))
          }, [
            f("span", {
              class: z(l(h).e("suffix-inner"))
            }, [
              !l(ue) || !l(fe) || !l(Te) ? (A(), D(at, { key: 0 }, [
                ie(q.$slots, "suffix"),
                q.suffixIcon ? (A(), re(l(Nt), {
                  key: 0,
                  class: z(l(h).e("icon"))
                }, {
                  default: J(() => [
                    (A(), re(Jt(q.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Y("v-if", !0)
              ], 64)) : Y("v-if", !0),
              l(ue) ? (A(), re(l(Nt), {
                key: 1,
                class: z([l(h).e("icon"), l(h).e("clear")]),
                onMousedown: Ke(l(co), ["prevent"]),
                onClick: Bt
              }, {
                default: J(() => [
                  _(l(qa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Y("v-if", !0),
              l(fe) ? (A(), re(l(Nt), {
                key: 2,
                class: z([l(h).e("icon"), l(h).e("password")]),
                onClick: qe
              }, {
                default: J(() => [
                  (A(), re(Jt(l(ce))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              l(Te) ? (A(), D("span", {
                key: 3,
                class: z(l(h).e("count"))
              }, [
                f("span", {
                  class: z(l(h).e("count-inner"))
                }, E(l(De)) + " / " + E(q.maxlength), 3)
              ], 2)) : Y("v-if", !0),
              l(se) && l(de) && l(H) ? (A(), re(l(Nt), {
                key: 4,
                class: z([
                  l(h).e("icon"),
                  l(h).e("validateIcon"),
                  l(h).is("loading", l(se) === "validating")
                ])
              }, {
                default: J(() => [
                  (A(), re(Jt(l(de))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0)
        ], 2),
        Y(" append slot "),
        q.$slots.append ? (A(), D("div", {
          key: 1,
          class: z(l(h).be("group", "append"))
        }, [
          ie(q.$slots, "append")
        ], 2)) : Y("v-if", !0)
      ], 64)) : (A(), D(at, { key: 1 }, [
        Y(" textarea "),
        f("textarea", _o({
          id: l(m),
          ref_key: "textarea",
          ref: k,
          class: [l(b).e("inner"), l(h).is("focus", l(K))]
        }, l(s), {
          minlength: q.minlength,
          maxlength: q.maxlength,
          tabindex: q.tabindex,
          disabled: l(w),
          readonly: q.readonly,
          autocomplete: q.autocomplete,
          style: l(V),
          "aria-label": q.ariaLabel,
          placeholder: q.placeholder,
          form: q.form,
          autofocus: q.autofocus,
          rows: q.rows,
          role: q.containerRole,
          onCompositionstart: l(Ge),
          onCompositionupdate: l(Lt),
          onCompositionend: l(bt),
          onInput: Ve,
          onFocus: l(F),
          onBlur: l(ne),
          onChange: ze,
          onKeydown: ct
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(Te) ? (A(), D("span", {
          key: 0,
          style: mt(L.value),
          class: z(l(h).e("count"))
        }, E(l(De)) + " / " + E(q.maxlength), 7)) : Y("v-if", !0)
      ], 64))
    ], 38));
  }
});
var z0 = /* @__PURE__ */ je(D0, [["__file", "input.vue"]]);
const B0 = wn(z0), Fo = 4, F0 = {
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
}, j0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ya = Symbol("scrollbarContextKey"), V0 = Ne({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), H0 = "Thumb", W0 = /* @__PURE__ */ oe({
  __name: "thumb",
  props: V0,
  setup(e) {
    const t = e, n = Le(Ya), o = tt("scrollbar");
    n || Wa(H0, "can not inject scrollbar context");
    const r = P(), s = P(), a = P({}), i = P(!1);
    let c = !1, u = !1, d = We ? document.onselectstart : null;
    const m = S(() => F0[t.vertical ? "vertical" : "horizontal"]), g = S(() => j0({
      size: t.size,
      move: t.move,
      bar: m.value
    })), w = S(() => r.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / s.value[m.value.offset]), h = (O) => {
      var R;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (R = window.getSelection()) == null || R.removeAllRanges(), C(O);
      const K = O.currentTarget;
      K && (a.value[m.value.axis] = K[m.value.offset] - (O[m.value.client] - K.getBoundingClientRect()[m.value.direction]));
    }, b = (O) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const R = Math.abs(O.target.getBoundingClientRect()[m.value.direction] - O[m.value.client]), K = s.value[m.value.offset] / 2, F = (R - K) * 100 * w.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = F * n.wrapElement[m.value.scrollSize] / 100;
    }, C = (O) => {
      O.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", k), document.addEventListener("mouseup", M), d = document.onselectstart, document.onselectstart = () => !1;
    }, k = (O) => {
      if (!r.value || !s.value || c === !1)
        return;
      const R = a.value[m.value.axis];
      if (!R)
        return;
      const K = (r.value.getBoundingClientRect()[m.value.direction] - O[m.value.client]) * -1, F = s.value[m.value.offset] - R, ne = (K - F) * 100 * w.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = ne * n.wrapElement[m.value.scrollSize] / 100;
    }, M = () => {
      c = !1, a.value[m.value.axis] = 0, document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", M), I(), u && (i.value = !1);
    }, j = () => {
      u = !1, i.value = !!t.size;
    }, L = () => {
      u = !0, i.value = c;
    };
    yn(() => {
      I(), document.removeEventListener("mouseup", M);
    });
    const I = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return gn(qn(n, "scrollbarElement"), "mousemove", j), gn(qn(n, "scrollbarElement"), "mouseleave", L), (O, R) => (A(), re(xo, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: J(() => [
        lt(f("div", {
          ref_key: "instance",
          ref: r,
          class: z([l(o).e("bar"), l(o).is(l(m).key)]),
          onMousedown: b
        }, [
          f("div", {
            ref_key: "thumb",
            ref: s,
            class: z(l(o).e("thumb")),
            style: mt(l(g)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [Rn, O.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Fi = /* @__PURE__ */ je(W0, [["__file", "thumb.vue"]]);
const U0 = Ne({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), G0 = /* @__PURE__ */ oe({
  __name: "bar",
  props: U0,
  setup(e, { expose: t }) {
    const n = e, o = Le(Ya), r = P(0), s = P(0), a = P(""), i = P(""), c = P(1), u = P(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const w = g.offsetHeight - Fo, h = g.offsetWidth - Fo;
          s.value = g.scrollTop * 100 / w * c.value, r.value = g.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const w = g.offsetHeight - Fo, h = g.offsetWidth - Fo, b = w ** 2 / g.scrollHeight, C = h ** 2 / g.scrollWidth, k = Math.max(b, n.minSize), M = Math.max(C, n.minSize);
        c.value = b / (w - b) / (k / (w - k)), u.value = C / (h - C) / (M / (h - M)), i.value = k + Fo < w ? `${k}px` : "", a.value = M + Fo < h ? `${M}px` : "";
      }
    }), (g, w) => (A(), D(at, null, [
      _(Fi, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _(Fi, {
        move: s.value,
        ratio: c.value,
        size: i.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var q0 = /* @__PURE__ */ je(G0, [["__file", "bar.vue"]]);
const K0 = Ne({
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
  ...ar(["ariaLabel", "ariaOrientation"])
}), Z0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Pe)
}, Y0 = "ElScrollbar", X0 = oe({
  name: Y0
}), Q0 = /* @__PURE__ */ oe({
  ...X0,
  props: K0,
  emits: Z0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = tt("scrollbar");
    let s, a, i = 0, c = 0;
    const u = P(), d = P(), m = P(), g = P(), w = S(() => {
      const I = {};
      return o.height && (I.height = fo(o.height)), o.maxHeight && (I.maxHeight = fo(o.maxHeight)), [o.wrapStyle, I];
    }), h = S(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), b = S(() => [r.e("view"), o.viewClass]), C = () => {
      var I;
      d.value && ((I = g.value) == null || I.handleScroll(d.value), i = d.value.scrollTop, c = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function k(I, O) {
      en(I) ? d.value.scrollTo(I) : Pe(I) && Pe(O) && d.value.scrollTo(I, O);
    }
    const M = (I) => {
      Pe(I) && (d.value.scrollTop = I);
    }, j = (I) => {
      Pe(I) && (d.value.scrollLeft = I);
    }, L = () => {
      var I;
      (I = g.value) == null || I.update();
    };
    return pe(() => o.noresize, (I) => {
      I ? (s?.(), a?.()) : ({ stop: s } = xn(m, L), a = gn("resize", L));
    }, { immediate: !0 }), pe(() => [o.maxHeight, o.height], () => {
      o.native || Ze(() => {
        var I;
        L(), d.value && ((I = g.value) == null || I.handleScroll(d.value));
      });
    }), vn(Ya, To({
      scrollbarElement: u,
      wrapElement: d
    })), pf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = c);
    }), ot(() => {
      o.native || Ze(() => {
        L();
      });
    }), Dc(() => L()), t({
      wrapRef: d,
      update: L,
      scrollTo: k,
      setScrollTop: M,
      setScrollLeft: j,
      handleScroll: C
    }), (I, O) => (A(), D("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: z(l(r).b())
    }, [
      f("div", {
        ref_key: "wrapRef",
        ref: d,
        class: z(l(h)),
        style: mt(l(w)),
        tabindex: I.tabindex,
        onScroll: C
      }, [
        (A(), re(Jt(I.tag), {
          id: I.id,
          ref_key: "resizeRef",
          ref: m,
          class: z(l(b)),
          style: mt(I.viewStyle),
          role: I.role,
          "aria-label": I.ariaLabel,
          "aria-orientation": I.ariaOrientation
        }, {
          default: J(() => [
            ie(I.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      I.native ? Y("v-if", !0) : (A(), re(q0, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: I.always,
        "min-size": I.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var J0 = /* @__PURE__ */ je(Q0, [["__file", "scrollbar.vue"]]);
const e1 = wn(J0), Xa = Symbol("popper"), Nu = Symbol("popperContent"), t1 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Du = Ne({
  role: {
    type: String,
    values: t1,
    default: "tooltip"
  }
}), n1 = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), o1 = /* @__PURE__ */ oe({
  ...n1,
  props: Du,
  setup(e, { expose: t }) {
    const n = e, o = P(), r = P(), s = P(), a = P(), i = S(() => n.role), c = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(c), vn(Xa, c), (u, d) => ie(u.$slots, "default");
  }
});
var r1 = /* @__PURE__ */ je(o1, [["__file", "popper.vue"]]);
const zu = Ne({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), s1 = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), a1 = /* @__PURE__ */ oe({
  ...s1,
  props: zu,
  setup(e, { expose: t }) {
    const n = e, o = tt("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = Le(Nu, void 0);
    return pe(() => n.arrowOffset, (i) => {
      r.value = i;
    }), yn(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, c) => (A(), D("span", {
      ref_key: "arrowRef",
      ref: s,
      class: z(l(o).e("arrow")),
      style: mt(l(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var l1 = /* @__PURE__ */ je(a1, [["__file", "arrow.vue"]]);
const Bu = Ne({
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
}), Fu = Symbol("elForwardRef"), i1 = (e) => {
  vn(Fu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, c1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ga = (e) => {
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
}, u1 = "ElOnlyChild", d1 = oe({
  name: u1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = Le(Fu), s = c1((o = r?.setForwardRef) != null ? o : co);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i || i.length > 1)
        return null;
      const c = ju(i);
      return c ? lt(mf(c, n), [[s]]) : null;
    };
  }
});
function ju(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (en(n))
      switch (n.type) {
        case gf:
          continue;
        case hf:
        case "svg":
          return ji(n);
        case at:
          return ju(n.children);
        default:
          return n;
      }
    return ji(n);
  }
  return null;
}
function ji(e) {
  const t = tt("only-child");
  return _("span", {
    class: t.e("content")
  }, [e]);
}
const f1 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), p1 = /* @__PURE__ */ oe({
  ...f1,
  props: Bu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = Le(Xa, void 0);
    i1(r);
    const s = S(() => i.value ? n.id : void 0), a = S(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = S(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), c = S(() => i.value ? `${n.open}` : void 0);
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
    return ot(() => {
      pe(() => n.virtualRef, (m) => {
        m && (r.value = Kn(m));
      }, {
        immediate: !0
      }), pe(r, (m, g) => {
        u?.(), u = void 0, hn(m) && (d.forEach((w) => {
          var h;
          const b = n[w];
          b && (m.addEventListener(w.slice(2).toLowerCase(), b), (h = g?.removeEventListener) == null || h.call(g, w.slice(2).toLowerCase(), b));
        }), ga(m) && (u = pe([s, a, i, c], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, b) => {
            Yn(w[b]) ? m.removeAttribute(h) : m.setAttribute(h, w[b]);
          });
        }, { immediate: !0 }))), hn(g) && ga(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((w) => g.removeAttribute(w));
      }, {
        immediate: !0
      });
    }), yn(() => {
      if (u?.(), u = void 0, r.value && hn(r.value)) {
        const m = r.value;
        d.forEach((g) => {
          const w = n[g];
          w && m.removeEventListener(g.slice(2).toLowerCase(), w);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (m, g) => m.virtualTriggering ? Y("v-if", !0) : (A(), re(l(d1), _o({ key: 0 }, m.$attrs, {
      "aria-controls": l(s),
      "aria-describedby": l(a),
      "aria-expanded": l(c),
      "aria-haspopup": l(i)
    }), {
      default: J(() => [
        ie(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var m1 = /* @__PURE__ */ je(p1, [["__file", "trigger.vue"]]);
const Qs = "focus-trap.focus-after-trapped", Js = "focus-trap.focus-after-released", h1 = "focus-trap.focusout-prevented", Vi = {
  cancelable: !0,
  bubbles: !1
}, g1 = {
  cancelable: !0,
  bubbles: !1
}, Hi = "focusAfterTrapped", Wi = "focusAfterReleased", Vu = Symbol("elFocusTrap"), Qa = P(), Ms = P(0), Ja = P(0);
let Yr = 0;
const Hu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ui = (e, t) => {
  for (const n of e)
    if (!v1(n, t))
      return n;
}, v1 = (e, t) => {
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
}, b1 = (e) => {
  const t = Hu(e), n = Ui(t, e), o = Ui(t.reverse(), e);
  return [n, o];
}, y1 = (e) => e instanceof HTMLInputElement && "select" in e, Un = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    hn(e) && !ga(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Ja.value = window.performance.now(), e !== n && y1(e) && t && e.select(), hn(e) && o && e.removeAttribute("tabindex");
  }
};
function Gi(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const w1 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Gi(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = Gi(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, k1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Un(o, t), document.activeElement !== n)
      return;
}, qi = w1(), _1 = () => Ms.value > Ja.value, Xr = () => {
  Qa.value = "pointer", Ms.value = window.performance.now();
}, Ki = () => {
  Qa.value = "keyboard", Ms.value = window.performance.now();
}, T1 = () => (ot(() => {
  Yr === 0 && (document.addEventListener("mousedown", Xr), document.addEventListener("touchstart", Xr), document.addEventListener("keydown", Ki)), Yr++;
}), yn(() => {
  Yr--, Yr <= 0 && (document.removeEventListener("mousedown", Xr), document.removeEventListener("touchstart", Xr), document.removeEventListener("keydown", Ki));
}), {
  focusReason: Qa,
  lastUserFocusTimestamp: Ms,
  lastAutomatedFocusTimestamp: Ja
}), Qr = (e) => new CustomEvent(h1, {
  ...g1,
  detail: e
}), On = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Uo = [];
const Zi = (e) => {
  e.code === On.esc && Uo.forEach((t) => t(e));
}, A1 = (e) => {
  ot(() => {
    Uo.length === 0 && document.addEventListener("keydown", Zi), We && Uo.push(e);
  }), yn(() => {
    Uo = Uo.filter((t) => t !== e), Uo.length === 0 && We && document.removeEventListener("keydown", Zi);
  });
}, S1 = oe({
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
    Hi,
    Wi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, r;
    const { focusReason: s } = T1();
    A1((h) => {
      e.trapped && !a.paused && t("release-requested", h);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (h) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { code: b, altKey: C, ctrlKey: k, metaKey: M, currentTarget: j, shiftKey: L } = h, { loop: I } = e, O = b === On.tab && !C && !k && !M, R = document.activeElement;
      if (O && R) {
        const K = j, [F, ne] = b1(K);
        if (F && ne) {
          if (!L && R === ne) {
            const se = Qr({
              focusReason: s.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (h.preventDefault(), I && Un(F, !0));
          } else if (L && [F, K].includes(R)) {
            const se = Qr({
              focusReason: s.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (h.preventDefault(), I && Un(ne, !0));
          }
        } else if (R === K) {
          const se = Qr({
            focusReason: s.value
          });
          t("focusout-prevented", se), se.defaultPrevented || h.preventDefault();
        }
      }
    };
    vn(Vu, {
      focusTrapRef: n,
      onKeydown: i
    }), pe(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), pe([n], ([h], [b]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", d), b.removeEventListener("focusout", m));
    });
    const c = (h) => {
      t(Hi, h);
    }, u = (h) => t(Wi, h), d = (h) => {
      const b = l(n);
      if (!b)
        return;
      const C = h.target, k = h.relatedTarget, M = C && b.contains(C);
      e.trapped || k && b.contains(k) || (o = k), M && t("focusin", h), !a.paused && e.trapped && (M ? r = C : Un(r, !0));
    }, m = (h) => {
      const b = l(n);
      if (!(a.paused || !b))
        if (e.trapped) {
          const C = h.relatedTarget;
          !Yn(C) && !b.contains(C) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const k = Qr({
                focusReason: s.value
              });
              t("focusout-prevented", k), k.defaultPrevented || Un(r, !0);
            }
          }, 0);
        } else {
          const C = h.target;
          C && b.contains(C) || t("focusout", h);
        }
    };
    async function g() {
      await Ze();
      const h = l(n);
      if (h) {
        qi.push(a);
        const b = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = b, !h.contains(b)) {
          const k = new Event(Qs, Vi);
          h.addEventListener(Qs, c), h.dispatchEvent(k), k.defaultPrevented || Ze(() => {
            let M = e.focusStartEl;
            Zt(M) || (Un(M), document.activeElement !== M && (M = "first")), M === "first" && k1(Hu(h), !0), (document.activeElement === b || M === "container") && Un(h);
          });
        }
      }
    }
    function w() {
      const h = l(n);
      if (h) {
        h.removeEventListener(Qs, c);
        const b = new CustomEvent(Js, {
          ...Vi,
          detail: {
            focusReason: s.value
          }
        });
        h.addEventListener(Js, u), h.dispatchEvent(b), !b.defaultPrevented && (s.value == "keyboard" || !_1() || h.contains(document.activeElement)) && Un(o ?? document.body), h.removeEventListener(Js, u), qi.remove(a);
      }
    }
    return ot(() => {
      e.trapped && g(), pe(() => e.trapped, (h) => {
        h ? g() : w();
      });
    }), yn(() => {
      e.trapped && w(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function C1(e, t, n, o, r, s) {
  return ie(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Wu = /* @__PURE__ */ je(S1, [["render", C1], ["__file", "focus-trap.vue"]]), Ht = "top", nn = "bottom", on = "right", Wt = "left", el = "auto", Br = [Ht, nn, on, Wt], Xo = "start", Mr = "end", E1 = "clippingParents", Uu = "viewport", fr = "popper", x1 = "reference", Yi = Br.reduce(function(e, t) {
  return e.concat([t + "-" + Xo, t + "-" + Mr]);
}, []), Ps = [].concat(Br, [el]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xo, t + "-" + Mr]);
}, []), L1 = "beforeRead", I1 = "read", O1 = "afterRead", $1 = "beforeMain", R1 = "main", M1 = "afterMain", P1 = "beforeWrite", N1 = "write", D1 = "afterWrite", z1 = [L1, I1, O1, $1, R1, M1, P1, N1, D1];
function Pn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Yt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Co(e) {
  var t = Yt(e).Element;
  return e instanceof t || e instanceof Element;
}
function tn(e) {
  var t = Yt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Yt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function B1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !tn(s) || !Pn(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var i = r[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function F1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !tn(r) || !Pn(r) || (Object.assign(r.style, i), Object.keys(s).forEach(function(c) {
        r.removeAttribute(c);
      }));
    });
  };
}
var Gu = { name: "applyStyles", enabled: !0, phase: "write", fn: B1, effect: F1, requires: ["computeStyles"] };
function $n(e) {
  return e.split("-")[0];
}
var ko = Math.max, bs = Math.min, Qo = Math.round;
function va() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qu() {
  return !/^((?!chrome|android).)*safari/i.test(va());
}
function Jo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && tn(e) && (r = e.offsetWidth > 0 && Qo(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Qo(o.height) / e.offsetHeight || 1);
  var a = Co(e) ? Yt(e) : window, i = a.visualViewport, c = !qu() && n, u = (o.left + (c && i ? i.offsetLeft : 0)) / r, d = (o.top + (c && i ? i.offsetTop : 0)) / s, m = o.width / r, g = o.height / s;
  return { width: m, height: g, top: d, right: u + m, bottom: d + g, left: u, x: u, y: d };
}
function nl(e) {
  var t = Jo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ku(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && tl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Xn(e) {
  return Yt(e).getComputedStyle(e);
}
function j1(e) {
  return ["table", "td", "th"].indexOf(Pn(e)) >= 0;
}
function po(e) {
  return ((Co(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ns(e) {
  return Pn(e) === "html" ? e : e.assignedSlot || e.parentNode || (tl(e) ? e.host : null) || po(e);
}
function Xi(e) {
  return !tn(e) || Xn(e).position === "fixed" ? null : e.offsetParent;
}
function V1(e) {
  var t = /firefox/i.test(va()), n = /Trident/i.test(va());
  if (n && tn(e)) {
    var o = Xn(e);
    if (o.position === "fixed") return null;
  }
  var r = Ns(e);
  for (tl(r) && (r = r.host); tn(r) && ["html", "body"].indexOf(Pn(r)) < 0; ) {
    var s = Xn(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function Fr(e) {
  for (var t = Yt(e), n = Xi(e); n && j1(n) && Xn(n).position === "static"; ) n = Xi(n);
  return n && (Pn(n) === "html" || Pn(n) === "body" && Xn(n).position === "static") ? t : n || V1(e) || t;
}
function ol(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cr(e, t, n) {
  return ko(e, bs(t, n));
}
function H1(e, t, n) {
  var o = Cr(e, t, n);
  return o > n ? n : o;
}
function Zu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Yu(e) {
  return Object.assign({}, Zu(), e);
}
function Xu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var W1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Yu(typeof e != "number" ? e : Xu(e, Br));
};
function U1(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = $n(n.placement), c = ol(i), u = [Wt, on].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = W1(r.padding, n), g = nl(s), w = c === "y" ? Ht : Wt, h = c === "y" ? nn : on, b = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d], C = a[c] - n.rects.reference[c], k = Fr(s), M = k ? c === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, j = b / 2 - C / 2, L = m[w], I = M - g[d] - m[h], O = M / 2 - g[d] / 2 + j, R = Cr(L, O, I), K = c;
    n.modifiersData[o] = (t = {}, t[K] = R, t.centerOffset = R - O, t);
  }
}
function G1(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ku(t.elements.popper, r) && (t.elements.arrow = r));
}
var q1 = { name: "arrow", enabled: !0, phase: "main", fn: U1, effect: G1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function er(e) {
  return e.split("-")[1];
}
var K1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Z1(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Qo(n * r) / r || 0, y: Qo(o * r) / r || 0 };
}
function Qi(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, i = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = a.x, w = g === void 0 ? 0 : g, h = a.y, b = h === void 0 ? 0 : h, C = typeof d == "function" ? d({ x: w, y: b }) : { x: w, y: b };
  w = C.x, b = C.y;
  var k = a.hasOwnProperty("x"), M = a.hasOwnProperty("y"), j = Wt, L = Ht, I = window;
  if (u) {
    var O = Fr(n), R = "clientHeight", K = "clientWidth";
    if (O === Yt(n) && (O = po(n), Xn(O).position !== "static" && i === "absolute" && (R = "scrollHeight", K = "scrollWidth")), O = O, r === Ht || (r === Wt || r === on) && s === Mr) {
      L = nn;
      var F = m && O === I && I.visualViewport ? I.visualViewport.height : O[R];
      b -= F - o.height, b *= c ? 1 : -1;
    }
    if (r === Wt || (r === Ht || r === nn) && s === Mr) {
      j = on;
      var ne = m && O === I && I.visualViewport ? I.visualViewport.width : O[K];
      w -= ne - o.width, w *= c ? 1 : -1;
    }
  }
  var H = Object.assign({ position: i }, u && K1), se = d === !0 ? Z1({ x: w, y: b }, Yt(n)) : { x: w, y: b };
  if (w = se.x, b = se.y, c) {
    var de;
    return Object.assign({}, H, (de = {}, de[L] = M ? "0" : "", de[j] = k ? "0" : "", de.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", de));
  }
  return Object.assign({}, H, (t = {}, t[L] = M ? b + "px" : "", t[j] = k ? w + "px" : "", t.transform = "", t));
}
function Y1(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, c = i === void 0 ? !0 : i, u = { placement: $n(t.placement), variation: er(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qi(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qi(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Qu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Y1, data: {} }, Jr = { passive: !0 };
function X1(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, i = a === void 0 ? !0 : a, c = Yt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Jr);
  }), i && c.addEventListener("resize", n.update, Jr), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Jr);
    }), i && c.removeEventListener("resize", n.update, Jr);
  };
}
var Ju = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: X1, data: {} }, Q1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ss(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Q1[t];
  });
}
var J1 = { start: "end", end: "start" };
function Ji(e) {
  return e.replace(/start|end/g, function(t) {
    return J1[t];
  });
}
function rl(e) {
  var t = Yt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function sl(e) {
  return Jo(po(e)).left + rl(e).scrollLeft;
}
function eb(e, t) {
  var n = Yt(e), o = po(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, i = 0, c = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = qu();
    (u || !u && t === "fixed") && (i = r.offsetLeft, c = r.offsetTop);
  }
  return { width: s, height: a, x: i + sl(e), y: c };
}
function tb(e) {
  var t, n = po(e), o = rl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = ko(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = ko(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + sl(e), c = -o.scrollTop;
  return Xn(r || n).direction === "rtl" && (i += ko(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: i, y: c };
}
function al(e) {
  var t = Xn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function ed(e) {
  return ["html", "body", "#document"].indexOf(Pn(e)) >= 0 ? e.ownerDocument.body : tn(e) && al(e) ? e : ed(Ns(e));
}
function Er(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = ed(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Yt(o), a = r ? [s].concat(s.visualViewport || [], al(o) ? o : []) : o, i = t.concat(a);
  return r ? i : i.concat(Er(Ns(a)));
}
function ba(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function nb(e, t) {
  var n = Jo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ec(e, t, n) {
  return t === Uu ? ba(eb(e, n)) : Co(t) ? nb(t, n) : ba(tb(po(e)));
}
function ob(e) {
  var t = Er(Ns(e)), n = ["absolute", "fixed"].indexOf(Xn(e).position) >= 0, o = n && tn(e) ? Fr(e) : e;
  return Co(o) ? t.filter(function(r) {
    return Co(r) && Ku(r, o) && Pn(r) !== "body";
  }) : [];
}
function rb(e, t, n, o) {
  var r = t === "clippingParents" ? ob(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], i = s.reduce(function(c, u) {
    var d = ec(e, u, o);
    return c.top = ko(d.top, c.top), c.right = bs(d.right, c.right), c.bottom = bs(d.bottom, c.bottom), c.left = ko(d.left, c.left), c;
  }, ec(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function td(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? $n(o) : null, s = o ? er(o) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
  switch (r) {
    case Ht:
      c = { x: a, y: t.y - n.height };
      break;
    case nn:
      c = { x: a, y: t.y + t.height };
      break;
    case on:
      c = { x: t.x + t.width, y: i };
      break;
    case Wt:
      c = { x: t.x - n.width, y: i };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = r ? ol(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case Xo:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Mr:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Pr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, i = n.boundary, c = i === void 0 ? E1 : i, u = n.rootBoundary, d = u === void 0 ? Uu : u, m = n.elementContext, g = m === void 0 ? fr : m, w = n.altBoundary, h = w === void 0 ? !1 : w, b = n.padding, C = b === void 0 ? 0 : b, k = Yu(typeof C != "number" ? C : Xu(C, Br)), M = g === fr ? x1 : fr, j = e.rects.popper, L = e.elements[h ? M : g], I = rb(Co(L) ? L : L.contextElement || po(e.elements.popper), c, d, a), O = Jo(e.elements.reference), R = td({ reference: O, element: j, placement: r }), K = ba(Object.assign({}, j, R)), F = g === fr ? K : O, ne = { top: I.top - F.top + k.top, bottom: F.bottom - I.bottom + k.bottom, left: I.left - F.left + k.left, right: F.right - I.right + k.right }, H = e.modifiersData.offset;
  if (g === fr && H) {
    var se = H[r];
    Object.keys(ne).forEach(function(de) {
      var ce = [on, nn].indexOf(de) >= 0 ? 1 : -1, $ = [Ht, nn].indexOf(de) >= 0 ? "y" : "x";
      ne[de] += se[$] * ce;
    });
  }
  return ne;
}
function sb(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Ps : c, d = er(o), m = d ? i ? Yi : Yi.filter(function(h) {
    return er(h) === d;
  }) : Br, g = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  g.length === 0 && (g = m);
  var w = g.reduce(function(h, b) {
    return h[b] = Pr(e, { placement: b, boundary: r, rootBoundary: s, padding: a })[$n(b)], h;
  }, {});
  return Object.keys(w).sort(function(h, b) {
    return w[h] - w[b];
  });
}
function ab(e) {
  if ($n(e) === el) return [];
  var t = ss(e);
  return [Ji(e), t, Ji(t)];
}
function lb(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, g = n.altBoundary, w = n.flipVariations, h = w === void 0 ? !0 : w, b = n.allowedAutoPlacements, C = t.options.placement, k = $n(C), M = k === C, j = c || (M || !h ? [ss(C)] : ab(C)), L = [C].concat(j).reduce(function(W, U) {
      return W.concat($n(U) === el ? sb(t, { placement: U, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: b }) : U);
    }, []), I = t.rects.reference, O = t.rects.popper, R = /* @__PURE__ */ new Map(), K = !0, F = L[0], ne = 0; ne < L.length; ne++) {
      var H = L[ne], se = $n(H), de = er(H) === Xo, ce = [Ht, nn].indexOf(se) >= 0, $ = ce ? "width" : "height", V = Pr(t, { placement: H, boundary: d, rootBoundary: m, altBoundary: g, padding: u }), B = ce ? de ? on : Wt : de ? nn : Ht;
      I[$] > O[$] && (B = ss(B));
      var ue = ss(B), fe = [];
      if (s && fe.push(V[se] <= 0), i && fe.push(V[B] <= 0, V[ue] <= 0), fe.every(function(W) {
        return W;
      })) {
        F = H, K = !1;
        break;
      }
      R.set(H, fe);
    }
    if (K) for (var Te = h ? 3 : 1, De = function(W) {
      var U = L.find(function(me) {
        var Ie = R.get(me);
        if (Ie) return Ie.slice(0, W).every(function(ee) {
          return ee;
        });
      });
      if (U) return F = U, "break";
    }, Ue = Te; Ue > 0; Ue--) {
      var ve = De(Ue);
      if (ve === "break") break;
    }
    t.placement !== F && (t.modifiersData[o]._skip = !0, t.placement = F, t.reset = !0);
  }
}
var ib = { name: "flip", enabled: !0, phase: "main", fn: lb, requiresIfExists: ["offset"], data: { _skip: !1 } };
function tc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function nc(e) {
  return [Ht, on, nn, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function cb(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = Pr(t, { elementContext: "reference" }), i = Pr(t, { altBoundary: !0 }), c = tc(a, o), u = tc(i, r, s), d = nc(c), m = nc(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var ub = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: cb };
function db(e, t, n) {
  var o = $n(e), r = [Wt, Ht].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * r, [Wt, on].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function fb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = Ps.reduce(function(d, m) {
    return d[m] = db(m, t.rects, s), d;
  }, {}), i = a[t.placement], c = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var pb = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: fb };
function mb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = td({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var nd = { name: "popperOffsets", enabled: !0, phase: "read", fn: mb, data: {} };
function hb(e) {
  return e === "x" ? "y" : "x";
}
function gb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, g = n.tether, w = g === void 0 ? !0 : g, h = n.tetherOffset, b = h === void 0 ? 0 : h, C = Pr(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: d }), k = $n(t.placement), M = er(t.placement), j = !M, L = ol(k), I = hb(L), O = t.modifiersData.popperOffsets, R = t.rects.reference, K = t.rects.popper, F = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, ne = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, se = { x: 0, y: 0 };
  if (O) {
    if (s) {
      var de, ce = L === "y" ? Ht : Wt, $ = L === "y" ? nn : on, V = L === "y" ? "height" : "width", B = O[L], ue = B + C[ce], fe = B - C[$], Te = w ? -K[V] / 2 : 0, De = M === Xo ? R[V] : K[V], Ue = M === Xo ? -K[V] : -R[V], ve = t.elements.arrow, W = w && ve ? nl(ve) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zu(), me = U[ce], Ie = U[$], ee = Cr(0, R[V], W[V]), X = j ? R[V] / 2 - Te - ee - me - ne.mainAxis : De - ee - me - ne.mainAxis, Ve = j ? -R[V] / 2 + Te + ee + Ie + ne.mainAxis : Ue + ee + Ie + ne.mainAxis, ze = t.elements.arrow && Fr(t.elements.arrow), ut = ze ? L === "y" ? ze.clientTop || 0 : ze.clientLeft || 0 : 0, Ge = (de = H?.[L]) != null ? de : 0, Lt = B + X - Ge - ut, bt = B + Ve - Ge, qe = Cr(w ? bs(ue, Lt) : ue, B, w ? ko(fe, bt) : fe);
      O[L] = qe, se[L] = qe - B;
    }
    if (i) {
      var yt, rt = L === "x" ? Ht : Wt, wt = L === "x" ? nn : on, Qe = O[I], ct = I === "y" ? "height" : "width", It = Qe + C[rt], Bt = Qe - C[wt], q = [Ht, Wt].indexOf(k) !== -1, ke = (yt = H?.[I]) != null ? yt : 0, dt = q ? It : Qe - R[ct] - K[ct] - ke + ne.altAxis, xe = q ? Qe + R[ct] + K[ct] - ke - ne.altAxis : Bt, kt = w && q ? H1(dt, Qe, xe) : Cr(w ? dt : It, Qe, w ? xe : Bt);
      O[I] = kt, se[I] = kt - Qe;
    }
    t.modifiersData[o] = se;
  }
}
var vb = { name: "preventOverflow", enabled: !0, phase: "main", fn: gb, requiresIfExists: ["offset"] };
function bb(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function yb(e) {
  return e === Yt(e) || !tn(e) ? rl(e) : bb(e);
}
function wb(e) {
  var t = e.getBoundingClientRect(), n = Qo(t.width) / e.offsetWidth || 1, o = Qo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function kb(e, t, n) {
  n === void 0 && (n = !1);
  var o = tn(t), r = tn(t) && wb(t), s = po(t), a = Jo(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (o || !o && !n) && ((Pn(t) !== "body" || al(s)) && (i = yb(t)), tn(t) ? (c = Jo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = sl(s))), { x: a.left + i.scrollLeft - c.x, y: a.top + i.scrollTop - c.y, width: a.width, height: a.height };
}
function _b(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(i) {
      if (!n.has(i)) {
        var c = t.get(i);
        c && r(c);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function Tb(e) {
  var t = _b(e);
  return z1.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Ab(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Sb(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var oc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function rc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ll(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? oc : r;
  return function(a, i, c) {
    c === void 0 && (c = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, oc, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, g = { state: u, setOptions: function(b) {
      var C = typeof b == "function" ? b(u.options) : b;
      h(), u.options = Object.assign({}, s, u.options, C), u.scrollParents = { reference: Co(a) ? Er(a) : a.contextElement ? Er(a.contextElement) : [], popper: Er(i) };
      var k = Tb(Sb([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = k.filter(function(M) {
        return M.enabled;
      }), w(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, C = b.reference, k = b.popper;
        if (rc(C, k)) {
          u.rects = { reference: kb(C, Fr(k), u.options.strategy === "fixed"), popper: nl(k) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(K) {
            return u.modifiersData[K.name] = Object.assign({}, K.data);
          });
          for (var M = 0; M < u.orderedModifiers.length; M++) {
            if (u.reset === !0) {
              u.reset = !1, M = -1;
              continue;
            }
            var j = u.orderedModifiers[M], L = j.fn, I = j.options, O = I === void 0 ? {} : I, R = j.name;
            typeof L == "function" && (u = L({ state: u, options: O, name: R, instance: g }) || u);
          }
        }
      }
    }, update: Ab(function() {
      return new Promise(function(b) {
        g.forceUpdate(), b(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!rc(a, i)) return g;
    g.setOptions(c).then(function(b) {
      !m && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function w() {
      u.orderedModifiers.forEach(function(b) {
        var C = b.name, k = b.options, M = k === void 0 ? {} : k, j = b.effect;
        if (typeof j == "function") {
          var L = j({ state: u, name: C, instance: g, options: M }), I = function() {
          };
          d.push(L || I);
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
ll();
var Cb = [Ju, nd, Qu, Gu];
ll({ defaultModifiers: Cb });
var Eb = [Ju, nd, Qu, Gu, pb, ib, vb, q1, ub], xb = ll({ defaultModifiers: Eb });
const Lb = ["fixed", "absolute"], Ib = Ne({
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
    values: Ps,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Lb,
    default: "absolute"
  }
}), od = Ne({
  ...Ib,
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
  ...ar(["ariaLabel"])
}), Ob = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, $b = (e, t) => {
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
}, Rb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Pb(e), ...t]
  };
  return Nb(s, r?.modifiers), s;
}, Mb = (e) => {
  if (We)
    return Kn(e);
};
function Pb(e) {
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
function Nb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Db = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = zb(c);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = S(() => {
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
  }), s = io(), a = P({
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
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return pe(r, (c) => {
    const u = l(s);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), pe([e, t], ([c, u]) => {
    i(), !(!c || !u) && (s.value = xb(c, u, l(r)));
  }), yn(() => {
    i();
  }), {
    state: S(() => {
      var c;
      return { ...((c = l(s)) == null ? void 0 : c.state) || {} };
    }),
    styles: S(() => l(a).styles),
    attributes: S(() => l(a).attributes),
    update: () => {
      var c;
      return (c = l(s)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = l(s)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: S(() => l(s))
  };
};
function zb(e) {
  const t = Object.keys(e.elements), n = fs(t.map((r) => [r, e.styles[r] || {}])), o = fs(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const Bb = 0, Fb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = Le(Xa, void 0), s = P(), a = P(), i = S(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = S(() => {
    var k;
    const M = l(s), j = (k = l(a)) != null ? k : Bb;
    return {
      name: "arrow",
      enabled: !cu(M),
      options: {
        element: M,
        padding: j
      }
    };
  }), u = S(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...Rb(e, [
      l(c),
      l(i)
    ])
  })), d = S(() => Mb(e.referenceEl) || l(o)), { attributes: m, state: g, styles: w, update: h, forceUpdate: b, instanceRef: C } = Db(d, n, u);
  return pe(C, (k) => t.value = k), ot(() => {
    pe(() => {
      var k;
      return (k = l(d)) == null ? void 0 : k.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: m,
    arrowRef: s,
    contentRef: n,
    instanceRef: C,
    state: g,
    styles: w,
    role: r,
    forceUpdate: b,
    update: h
  };
}, jb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Ua(), s = tt("popper"), a = S(() => l(t).popper), i = P(Pe(e.zIndex) ? e.zIndex : r()), c = S(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = S(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = S(() => o.value === "dialog" ? "false" : void 0), m = S(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: a,
    contentClass: c,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Pe(e.zIndex) ? e.zIndex : r();
    }
  };
}, Vb = oe({
  name: "ElPopperContent"
}), Hb = /* @__PURE__ */ oe({
  ...Vb,
  props: od,
  emits: Ob,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = $b(o, n), { attributes: m, arrowRef: g, contentRef: w, styles: h, instanceRef: b, role: C, update: k } = Fb(o), {
      ariaModal: M,
      arrowStyle: j,
      contentAttrs: L,
      contentClass: I,
      contentStyle: O,
      updateZIndex: R
    } = jb(o, {
      styles: h,
      attributes: m,
      role: C
    }), K = Le(vs, void 0), F = P();
    vn(Nu, {
      arrowStyle: j,
      arrowRef: g,
      arrowOffset: F
    }), K && vn(vs, {
      ...K,
      addInputId: co,
      removeInputId: co
    });
    let ne;
    const H = (de = !0) => {
      k(), de && R();
    }, se = () => {
      H(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return ot(() => {
      pe(() => o.triggerTargetEl, (de, ce) => {
        ne?.(), ne = void 0;
        const $ = l(de || w.value), V = l(ce || w.value);
        hn($) && (ne = pe([C, () => o.ariaLabel, M, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ue, fe) => {
            Yn(B[fe]) ? $.removeAttribute(ue) : $.setAttribute(ue, B[fe]);
          });
        }, { immediate: !0 })), V !== $ && hn(V) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          V.removeAttribute(B);
        });
      }, { immediate: !0 }), pe(() => o.visible, se, { immediate: !0 });
    }), yn(() => {
      ne?.(), ne = void 0;
    }), t({
      popperContentRef: w,
      popperInstanceRef: b,
      updatePopper: H,
      contentStyle: O
    }), (de, ce) => (A(), D("div", _o({
      ref_key: "contentRef",
      ref: w
    }, l(L), {
      style: l(O),
      class: l(I),
      tabindex: "-1",
      onMouseenter: ($) => de.$emit("mouseenter", $),
      onMouseleave: ($) => de.$emit("mouseleave", $)
    }), [
      _(l(Wu), {
        trapped: l(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(w),
        "focus-start-el": l(r),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(a),
        onFocusin: l(c),
        onFocusoutPrevented: l(u),
        onReleaseRequested: l(d)
      }, {
        default: J(() => [
          ie(de.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Wb = /* @__PURE__ */ je(Hb, [["__file", "content.vue"]]);
const Ub = wn(r1), il = Symbol("elTooltip");
function sc() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return zr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Gb = Ne({
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
}), qb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = sc(), {
    registerTimeout: a,
    cancelTimeout: i
  } = sc();
  return {
    onOpen: (d) => {
      s(() => {
        o(d);
        const m = l(n);
        Pe(m) && m > 0 && a(() => {
          r(d);
        }, m);
      }, l(e));
    },
    onClose: (d) => {
      i(), s(() => {
        r(d);
      }, l(t));
    }
  };
}, cl = Ne({
  ...Gb,
  ...od,
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
  ...ar(["ariaLabel"])
}), rd = Ne({
  ...Bu,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [On.enter, On.numpadEnter, On.space]
  }
}), Kb = Os({
  type: he(Boolean),
  default: null
}), Zb = Os({
  type: he(Function)
}), Yb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Kb,
    [n]: Zb
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: i,
      shouldHideWhenRouteChanges: c,
      shouldProceed: u,
      onShow: d,
      onHide: m
    }) => {
      const g = xt(), { emit: w } = g, h = g.props, b = S(() => nt(h[n])), C = S(() => h[e] === null), k = (R) => {
        a.value !== !0 && (a.value = !0, i && (i.value = R), nt(d) && d(R));
      }, M = (R) => {
        a.value !== !1 && (a.value = !1, i && (i.value = R), nt(m) && m(R));
      }, j = (R) => {
        if (h.disabled === !0 || nt(u) && !u())
          return;
        const K = b.value && We;
        K && w(t, !0), (C.value || !K) && k(R);
      }, L = (R) => {
        if (h.disabled === !0 || !We)
          return;
        const K = b.value && We;
        K && w(t, !1), (C.value || !K) && M(R);
      }, I = (R) => {
        Rr(R) && (h.disabled && R ? b.value && w(t, !1) : a.value !== R && (R ? k() : M()));
      }, O = () => {
        a.value ? L() : j();
      };
      return pe(() => h[e], I), c && g.appContext.config.globalProperties.$route !== void 0 && pe(() => ({
        ...g.proxy.$route
      }), () => {
        c.value && a.value && L();
      }), ot(() => {
        I(h[e]);
      }), {
        hide: L,
        show: j,
        toggle: O,
        hasUpdateHandler: b
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Xb,
  useModelToggleEmits: Qb,
  useModelToggle: Jb
} = Yb("visible"), ey = Ne({
  ...Du,
  ...Xb,
  ...cl,
  ...rd,
  ...zu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ty = [
  ...Qb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], ny = (e, t) => Ln(e) ? e.includes(t) : e === t, jo = (e, t, n) => (o) => {
  ny(l(e), t) && n(o);
}, Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, oy = oe({
  name: "ElTooltipTrigger"
}), ry = /* @__PURE__ */ oe({
  ...oy,
  props: rd,
  setup(e, { expose: t }) {
    const n = e, o = tt("tooltip"), { controlled: r, id: s, open: a, onOpen: i, onClose: c, onToggle: u } = Le(il, void 0), d = P(null), m = () => {
      if (l(r) || n.disabled)
        return !0;
    }, g = qn(n, "trigger"), w = Gn(m, jo(g, "hover", i)), h = Gn(m, jo(g, "hover", c)), b = Gn(m, jo(g, "click", (L) => {
      L.button === 0 && u(L);
    })), C = Gn(m, jo(g, "focus", i)), k = Gn(m, jo(g, "focus", c)), M = Gn(m, jo(g, "contextmenu", (L) => {
      L.preventDefault(), u(L);
    })), j = Gn(m, (L) => {
      const { code: I } = L;
      n.triggerKeys.includes(I) && (L.preventDefault(), u(L));
    });
    return t({
      triggerRef: d
    }), (L, I) => (A(), re(l(m1), {
      id: l(s),
      "virtual-ref": L.virtualRef,
      open: l(a),
      "virtual-triggering": L.virtualTriggering,
      class: z(l(o).e("trigger")),
      onBlur: l(k),
      onClick: l(b),
      onContextmenu: l(M),
      onFocus: l(C),
      onMouseenter: l(w),
      onMouseleave: l(h),
      onKeydown: l(j)
    }, {
      default: J(() => [
        ie(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var sy = /* @__PURE__ */ je(ry, [["__file", "trigger.vue"]]);
const ay = Ne({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), ly = /* @__PURE__ */ oe({
  __name: "teleport",
  props: ay,
  setup(e) {
    return (t, n) => t.disabled ? ie(t.$slots, "default", { key: 0 }) : (A(), re(vf, {
      key: 1,
      to: t.to
    }, [
      ie(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var iy = /* @__PURE__ */ je(ly, [["__file", "teleport.vue"]]);
const sd = wn(iy), ad = () => {
  const e = Pa(), t = Iu(), n = S(() => `${e.value}-popper-container-${t.prefix}`), o = S(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, cy = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, uy = () => {
  const { id: e, selector: t } = ad();
  return bf(() => {
    We && (document.body.querySelector(t.value) || cy(e.value));
  }), {
    id: e,
    selector: t
  };
}, dy = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), fy = /* @__PURE__ */ oe({
  ...dy,
  props: cl,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = ad(), r = tt("tooltip"), s = P();
    let a;
    const {
      controlled: i,
      id: c,
      open: u,
      trigger: d,
      onClose: m,
      onOpen: g,
      onShow: w,
      onHide: h,
      onBeforeShow: b,
      onBeforeHide: C
    } = Le(il, void 0), k = S(() => n.transition || `${r.namespace.value}-fade-in-linear`), M = S(() => n.persistent);
    yn(() => {
      a?.();
    });
    const j = S(() => l(M) ? !0 : l(u)), L = S(() => n.disabled ? !1 : l(u)), I = S(() => n.appendTo || o.value), O = S(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), R = P(!0), K = () => {
      h(), V() && Un(document.body), R.value = !0;
    }, F = () => {
      if (l(i))
        return !0;
    }, ne = Gn(F, () => {
      n.enterable && l(d) === "hover" && g();
    }), H = Gn(F, () => {
      l(d) === "hover" && m();
    }), se = () => {
      var B, ue;
      (ue = (B = s.value) == null ? void 0 : B.updatePopper) == null || ue.call(B), b?.();
    }, de = () => {
      C?.();
    }, ce = () => {
      w(), a = bv(S(() => {
        var B;
        return (B = s.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && m();
      });
    }, $ = () => {
      n.virtualTriggering || m();
    }, V = (B) => {
      var ue;
      const fe = (ue = s.value) == null ? void 0 : ue.popperContentRef, Te = B?.relatedTarget || document.activeElement;
      return fe?.contains(Te);
    };
    return pe(() => l(u), (B) => {
      B ? R.value = !1 : a?.();
    }, {
      flush: "post"
    }), pe(() => n.content, () => {
      var B, ue;
      (ue = (B = s.value) == null ? void 0 : B.updatePopper) == null || ue.call(B);
    }), t({
      contentRef: s,
      isFocusInsideContent: V
    }), (B, ue) => (A(), re(l(sd), {
      disabled: !B.teleported,
      to: l(I)
    }, {
      default: J(() => [
        _(xo, {
          name: l(k),
          onAfterLeave: K,
          onBeforeEnter: se,
          onAfterEnter: ce,
          onBeforeLeave: de
        }, {
          default: J(() => [
            l(j) ? lt((A(), re(l(Wb), _o({
              key: 0,
              id: l(c),
              ref_key: "contentRef",
              ref: s
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
              onMouseenter: l(ne),
              onMouseleave: l(H),
              onBlur: $,
              onClose: l(m)
            }), {
              default: J(() => [
                ie(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Rn, l(L)]
            ]) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var py = /* @__PURE__ */ je(fy, [["__file", "content.vue"]]);
const my = oe({
  name: "ElTooltip"
}), hy = /* @__PURE__ */ oe({
  ...my,
  props: ey,
  emits: ty,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    uy();
    const r = Yo(), s = P(), a = P(), i = () => {
      var k;
      const M = l(s);
      M && ((k = M.popperInstanceRef) == null || k.update());
    }, c = P(!1), u = P(), { show: d, hide: m, hasUpdateHandler: g } = Jb({
      indicator: c,
      toggleReason: u
    }), { onOpen: w, onClose: h } = qb({
      showAfter: qn(o, "showAfter"),
      hideAfter: qn(o, "hideAfter"),
      autoClose: qn(o, "autoClose"),
      open: d,
      close: m
    }), b = S(() => Rr(o.visible) && !g.value);
    vn(il, {
      controlled: b,
      id: r,
      open: La(c),
      trigger: qn(o, "trigger"),
      onOpen: (k) => {
        w(k);
      },
      onClose: (k) => {
        h(k);
      },
      onToggle: (k) => {
        l(c) ? h(k) : w(k);
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
    }), pe(() => o.disabled, (k) => {
      k && c.value && (c.value = !1);
    });
    const C = (k) => {
      var M;
      return (M = a.value) == null ? void 0 : M.isFocusInsideContent(k);
    };
    return yf(() => c.value && m()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: C,
      updatePopper: i,
      onOpen: w,
      onClose: h,
      hide: m
    }), (k, M) => (A(), re(l(Ub), {
      ref_key: "popperRef",
      ref: s,
      role: k.role
    }, {
      default: J(() => [
        _(sy, {
          disabled: k.disabled,
          trigger: k.trigger,
          "trigger-keys": k.triggerKeys,
          "virtual-ref": k.virtualRef,
          "virtual-triggering": k.virtualTriggering
        }, {
          default: J(() => [
            k.$slots.default ? ie(k.$slots, "default", { key: 0 }) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        _(py, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": k.ariaLabel,
          "boundaries-padding": k.boundariesPadding,
          content: k.content,
          disabled: k.disabled,
          effect: k.effect,
          enterable: k.enterable,
          "fallback-placements": k.fallbackPlacements,
          "hide-after": k.hideAfter,
          "gpu-acceleration": k.gpuAcceleration,
          offset: k.offset,
          persistent: k.persistent,
          "popper-class": k.popperClass,
          "popper-style": k.popperStyle,
          placement: k.placement,
          "popper-options": k.popperOptions,
          pure: k.pure,
          "raw-content": k.rawContent,
          "reference-el": k.referenceEl,
          "trigger-target-el": k.triggerTargetEl,
          "show-after": k.showAfter,
          strategy: k.strategy,
          teleported: k.teleported,
          transition: k.transition,
          "virtual-triggering": k.virtualTriggering,
          "z-index": k.zIndex,
          "append-to": k.appendTo
        }, {
          default: J(() => [
            ie(k.$slots, "content", {}, () => [
              k.rawContent ? (A(), D("span", {
                key: 0,
                innerHTML: k.content
              }, null, 8, ["innerHTML"])) : (A(), D("span", { key: 1 }, E(k.content), 1))
            ]),
            k.showArrow ? (A(), re(l(l1), {
              key: 0,
              "arrow-offset": k.arrowOffset
            }, null, 8, ["arrow-offset"])) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var gy = /* @__PURE__ */ je(hy, [["__file", "tooltip.vue"]]);
const vy = wn(gy), by = Ne({
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
}), yy = oe({
  name: "ElBadge"
}), wy = /* @__PURE__ */ oe({
  ...yy,
  props: by,
  setup(e, { expose: t }) {
    const n = e, o = tt("badge"), r = S(() => n.isDot ? "" : Pe(n.value) && Pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = S(() => {
      var a, i, c, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: fo(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: fo((u = (c = n.offset) == null ? void 0 : c[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: r
    }), (a, i) => (A(), D("div", {
      class: z(l(o).b())
    }, [
      ie(a.$slots, "default"),
      _(xo, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: J(() => [
          lt(f("sup", {
            class: z([
              l(o).e("content"),
              l(o).em("content", a.type),
              l(o).is("fixed", !!a.$slots.default),
              l(o).is("dot", a.isDot),
              l(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: mt(l(s))
          }, [
            ie(a.$slots, "content", { value: l(r) }, () => [
              pt(E(l(r)), 1)
            ])
          ], 6), [
            [Rn, !a.hidden && (l(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ky = /* @__PURE__ */ je(wy, [["__file", "badge.vue"]]);
const _y = wn(ky), Ty = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, a) => {
  pe(() => l(a), (i) => {
  }, {
    immediate: !0
  });
};
var as = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(as || {});
const Ay = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), ya = Ne({
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
    values: gu
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Sy = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Cy = oe({
  name: "ElTag"
}), Ey = /* @__PURE__ */ oe({
  ...Cy,
  props: ya,
  emits: Sy,
  setup(e, { emit: t }) {
    const n = e, o = Rs(), r = tt("tag"), s = S(() => {
      const { type: u, hit: d, effect: m, closable: g, round: w } = n;
      return [
        r.b(),
        r.is("closable", g),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(m),
        r.is("hit", d),
        r.is("round", w)
      ];
    }), a = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, c = (u) => {
      var d, m, g;
      (g = (m = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : m.component) != null && g.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (A(), D("span", {
      key: 0,
      class: z(l(s)),
      style: mt({ backgroundColor: u.color }),
      onClick: i
    }, [
      f("span", {
        class: z(l(r).e("content"))
      }, [
        ie(u.$slots, "default")
      ], 2),
      u.closable ? (A(), re(l(Nt), {
        key: 0,
        class: z(l(r).e("close")),
        onClick: Ke(a, ["stop"])
      }, {
        default: J(() => [
          _(l(hs))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Y("v-if", !0)
    ], 6)) : (A(), re(xo, {
      key: 1,
      name: `${l(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: c
    }, {
      default: J(() => [
        f("span", {
          class: z(l(s)),
          style: mt({ backgroundColor: u.color }),
          onClick: i
        }, [
          f("span", {
            class: z(l(r).e("content"))
          }, [
            ie(u.$slots, "default")
          ], 2),
          u.closable ? (A(), re(l(Nt), {
            key: 0,
            class: z(l(r).e("close")),
            onClick: Ke(a, ["stop"])
          }, {
            default: J(() => [
              _(l(hs))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var xy = /* @__PURE__ */ je(Ey, [["__file", "tag.vue"]]);
const Ly = wn(xy), ro = /* @__PURE__ */ new Map();
if (We) {
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
function ac(e, t) {
  let n = [];
  return Ln(t.arg) ? n = t.arg : hn(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, i = r?.target, c = !t || !t.instance, u = !a || !i, d = e.contains(a) || e.contains(i), m = e === a, g = n.length && n.some((h) => h?.contains(a)) || n.length && n.includes(i), w = s && (s.contains(a) || s.contains(i));
    c || u || d || m || g || w || t.value(o, r);
  };
}
const Iy = {
  beforeMount(e, t) {
    ro.has(e) || ro.set(e, []), ro.get(e).push({
      documentHandler: ac(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ro.has(e) || ro.set(e, []);
    const n = ro.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: ac(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ro.delete(e);
  }
}, Oy = Ne({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: $s,
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
  ...yu
}), dn = {};
oe({
  name: "ElConfigProvider",
  props: Oy,
  setup(e, { slots: t }) {
    pe(() => e.message, (o) => {
      Object.assign(dn, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ku(e);
    return () => ie(t, "default", { config: n?.value });
  }
});
const $y = 100, Ry = 600, lc = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = $y, delay: r = Ry } = nt(n) ? {} : n;
    let s, a;
    const i = () => nt(n) ? n() : n.handler(), c = () => {
      a && (clearTimeout(a), a = void 0), s && (clearInterval(s), s = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (c(), i(), document.addEventListener("mouseup", () => c(), {
        once: !0
      }), a = setTimeout(() => {
        s = setInterval(() => {
          i();
        }, o);
      }, r));
    });
  }
}, ld = (e) => {
  if (!e)
    return { onClick: co, onMousedown: co, onMouseup: co };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
}, My = Ne({
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
}), Py = {
  click: (e) => e instanceof MouseEvent
}, Ny = "overlay";
var Dy = oe({
  name: "ElOverlay",
  props: My,
  emits: Py,
  setup(e, { slots: t, emit: n }) {
    const o = tt(Ny), r = (c) => {
      n("click", c);
    }, { onClick: s, onMousedown: a, onMouseup: i } = ld(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? _("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: s,
      onMousedown: a,
      onMouseup: i
    }, [ie(t, "default")], as.STYLE | as.CLASS | as.PROPS, ["onClick", "onMouseup", "onMousedown"]) : wf("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [ie(t, "default")]);
  }
});
const zy = Dy, id = Symbol("dialogInjectionKey"), cd = Ne({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: So
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
}), By = {
  close: () => !0
}, Fy = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (u) => {
    const d = u.clientX, m = u.clientY, { offsetX: g, offsetY: w } = r, h = e.value.getBoundingClientRect(), b = h.left, C = h.top, k = h.width, M = h.height, j = document.documentElement.clientWidth, L = document.documentElement.clientHeight, I = -b + g, O = -C + w, R = j - b - k + g, K = L - C - M + w, F = (H) => {
      let se = g + H.clientX - d, de = w + H.clientY - m;
      o?.value || (se = Math.min(Math.max(se, I), R), de = Math.min(Math.max(de, O), K)), r = {
        offsetX: se,
        offsetY: de
      }, e.value && (e.value.style.transform = `translate(${fo(se)}, ${fo(de)})`);
    }, ne = () => {
      document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", ne);
    };
    document.addEventListener("mousemove", F), document.addEventListener("mouseup", ne);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", s);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", s);
  }, c = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return ot(() => {
    Ia(() => {
      n.value ? a() : i();
    });
  }), yn(() => {
    i();
  }), {
    resetPosition: c
  };
}, jy = (...e) => (t) => {
  e.forEach((n) => {
    nt(n) ? n(t) : n.value = t;
  });
}, Vy = oe({ name: "ElDialogContent" }), Hy = /* @__PURE__ */ oe({
  ...Vy,
  props: cd,
  emits: By,
  setup(e, { expose: t }) {
    const n = e, { t: o } = Is(), { Close: r } = Cu, { dialogRef: s, headerRef: a, bodyId: i, ns: c, style: u } = Le(id), { focusTrapRef: d } = Le(Vu), m = S(() => [
      c.b(),
      c.is("fullscreen", n.fullscreen),
      c.is("draggable", n.draggable),
      c.is("align-center", n.alignCenter),
      { [c.m("center")]: n.center }
    ]), g = jy(d, s), w = S(() => n.draggable), h = S(() => n.overflow), { resetPosition: b } = Fy(s, a, w, h);
    return t({
      resetPosition: b
    }), (C, k) => (A(), D("div", {
      ref: l(g),
      class: z(l(m)),
      style: mt(l(u)),
      tabindex: "-1"
    }, [
      f("header", {
        ref_key: "headerRef",
        ref: a,
        class: z([l(c).e("header"), C.headerClass, { "show-close": C.showClose }])
      }, [
        ie(C.$slots, "header", {}, () => [
          f("span", {
            role: "heading",
            "aria-level": C.ariaLevel,
            class: z(l(c).e("title"))
          }, E(C.title), 11, ["aria-level"])
        ]),
        C.showClose ? (A(), D("button", {
          key: 0,
          "aria-label": l(o)("el.dialog.close"),
          class: z(l(c).e("headerbtn")),
          type: "button",
          onClick: (M) => C.$emit("close")
        }, [
          _(l(Nt), {
            class: z(l(c).e("close"))
          }, {
            default: J(() => [
              (A(), re(Jt(C.closeIcon || l(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : Y("v-if", !0)
      ], 2),
      f("div", {
        id: l(i),
        class: z([l(c).e("body"), C.bodyClass])
      }, [
        ie(C.$slots, "default")
      ], 10, ["id"]),
      C.$slots.footer ? (A(), D("footer", {
        key: 0,
        class: z([l(c).e("footer"), C.footerClass])
      }, [
        ie(C.$slots, "footer")
      ], 2)) : Y("v-if", !0)
    ], 6));
  }
});
var Wy = /* @__PURE__ */ je(Hy, [["__file", "dialog-content.vue"]]);
const Uy = Ne({
  ...cd,
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
}), Gy = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [vt]: (e) => Rr(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, qy = (e, t = {}) => {
  Qt(e) || Wa("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || tt("popup"), o = S(() => n.bm("parent", "hidden"));
  if (!We || Di(document.body, o.value))
    return;
  let r = 0, s = !1, a = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = a, Hv(document.body, o.value));
    }, 200);
  };
  pe(e, (c) => {
    if (!c) {
      i();
      return;
    }
    s = !Di(document.body, o.value), s && (a = document.body.style.width, Vv(document.body, o.value)), r = Uv(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = Wv(document.body, "overflowY");
    r > 0 && (u || d === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Pc(() => i());
}, Ky = (e, t) => {
  var n;
  const r = xt().emit, { nextZIndex: s } = Ua();
  let a = "";
  const i = Yo(), c = Yo(), u = P(!1), d = P(!1), m = P(!1), g = P((n = e.zIndex) != null ? n : s());
  let w, h;
  const b = Ga("namespace", Tr), C = S(() => {
    const $ = {}, V = `--${b.value}-dialog`;
    return e.fullscreen || (e.top && ($[`${V}-margin-top`] = e.top), e.width && ($[`${V}-width`] = fo(e.width))), $;
  }), k = S(() => e.alignCenter ? { display: "flex" } : {});
  function M() {
    r("opened");
  }
  function j() {
    r("closed"), r(vt, !1), e.destroyOnClose && (m.value = !1);
  }
  function L() {
    r("close");
  }
  function I() {
    h?.(), w?.(), e.openDelay && e.openDelay > 0 ? { stop: w } = ps(() => F(), e.openDelay) : F();
  }
  function O() {
    w?.(), h?.(), e.closeDelay && e.closeDelay > 0 ? { stop: h } = ps(() => ne(), e.closeDelay) : ne();
  }
  function R() {
    function $(V) {
      V || (d.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose($) : O();
  }
  function K() {
    e.closeOnClickModal && R();
  }
  function F() {
    We && (u.value = !0);
  }
  function ne() {
    u.value = !1;
  }
  function H() {
    r("openAutoFocus");
  }
  function se() {
    r("closeAutoFocus");
  }
  function de($) {
    var V;
    ((V = $.detail) == null ? void 0 : V.focusReason) === "pointer" && $.preventDefault();
  }
  e.lockScroll && qy(u);
  function ce() {
    e.closeOnPressEscape && R();
  }
  return pe(() => e.modelValue, ($) => {
    $ ? (d.value = !1, I(), m.value = !0, g.value = cu(e.zIndex) ? s() : g.value++, Ze(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && O();
  }), pe(() => e.fullscreen, ($) => {
    t.value && ($ ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), ot(() => {
    e.modelValue && (u.value = !0, m.value = !0, I());
  }), {
    afterEnter: M,
    afterLeave: j,
    beforeLeave: L,
    handleClose: R,
    onModalClick: K,
    close: O,
    doClose: ne,
    onOpenAutoFocus: H,
    onCloseAutoFocus: se,
    onCloseRequested: ce,
    onFocusoutPrevented: de,
    titleId: i,
    bodyId: c,
    closed: d,
    style: C,
    overlayDialogStyle: k,
    rendered: m,
    visible: u,
    zIndex: g
  };
}, Zy = oe({
  name: "ElDialog",
  inheritAttrs: !1
}), Yy = /* @__PURE__ */ oe({
  ...Zy,
  props: Uy,
  emits: Gy,
  setup(e, { expose: t }) {
    const n = e, o = Nc();
    Ty({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, S(() => !!o.title));
    const r = tt("dialog"), s = P(), a = P(), i = P(), {
      visible: c,
      titleId: u,
      bodyId: d,
      style: m,
      overlayDialogStyle: g,
      rendered: w,
      zIndex: h,
      afterEnter: b,
      afterLeave: C,
      beforeLeave: k,
      handleClose: M,
      onModalClick: j,
      onOpenAutoFocus: L,
      onCloseAutoFocus: I,
      onCloseRequested: O,
      onFocusoutPrevented: R
    } = Ky(n, s);
    vn(id, {
      dialogRef: s,
      headerRef: a,
      bodyId: d,
      ns: r,
      rendered: w,
      style: m
    });
    const K = ld(j), F = S(() => n.draggable && !n.fullscreen);
    return t({
      visible: c,
      dialogContentRef: i,
      resetPosition: () => {
        var H;
        (H = i.value) == null || H.resetPosition();
      }
    }), (H, se) => (A(), re(l(sd), {
      to: H.appendTo,
      disabled: H.appendTo !== "body" ? !1 : !H.appendToBody
    }, {
      default: J(() => [
        _(xo, {
          name: "dialog-fade",
          onAfterEnter: l(b),
          onAfterLeave: l(C),
          onBeforeLeave: l(k),
          persisted: ""
        }, {
          default: J(() => [
            lt(_(l(zy), {
              "custom-mask-event": "",
              mask: H.modal,
              "overlay-class": H.modalClass,
              "z-index": l(h)
            }, {
              default: J(() => [
                f("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": H.title || void 0,
                  "aria-labelledby": H.title ? void 0 : l(u),
                  "aria-describedby": l(d),
                  class: z(`${l(r).namespace.value}-overlay-dialog`),
                  style: mt(l(g)),
                  onClick: l(K).onClick,
                  onMousedown: l(K).onMousedown,
                  onMouseup: l(K).onMouseup
                }, [
                  _(l(Wu), {
                    loop: "",
                    trapped: l(c),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: l(L),
                    onFocusAfterReleased: l(I),
                    onFocusoutPrevented: l(R),
                    onReleaseRequested: l(O)
                  }, {
                    default: J(() => [
                      l(w) ? (A(), re(Wy, _o({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, H.$attrs, {
                        center: H.center,
                        "align-center": H.alignCenter,
                        "close-icon": H.closeIcon,
                        draggable: l(F),
                        overflow: H.overflow,
                        fullscreen: H.fullscreen,
                        "header-class": H.headerClass,
                        "body-class": H.bodyClass,
                        "footer-class": H.footerClass,
                        "show-close": H.showClose,
                        title: H.title,
                        "aria-level": H.headerAriaLevel,
                        onClose: l(M)
                      }), $a({
                        header: J(() => [
                          H.$slots.title ? ie(H.$slots, "title", { key: 1 }) : ie(H.$slots, "header", {
                            key: 0,
                            close: l(M),
                            titleId: l(u),
                            titleClass: l(r).e("title")
                          })
                        ]),
                        default: J(() => [
                          ie(H.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        H.$slots.footer ? {
                          name: "footer",
                          fn: J(() => [
                            ie(H.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : Y("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Rn, l(c)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var Xy = /* @__PURE__ */ je(Yy, [["__file", "dialog.vue"]]);
const Qy = wn(Xy), Jy = Ne({
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
  size: $s,
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
    validator: (e) => e === null || Pe(e) || ["min", "max"].includes(e),
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
  ...ar(["ariaLabel"])
}), ew = {
  [Zo]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [qo]: (e) => Pe(e) || Yn(e),
  [vt]: (e) => Pe(e) || Yn(e)
}, tw = oe({
  name: "ElInputNumber"
}), nw = /* @__PURE__ */ oe({
  ...tw,
  props: Jy,
  emits: ew,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = Is(), s = tt("input-number"), a = P(), i = To({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: c } = Za(), u = S(() => Pe(o.modelValue) && o.modelValue <= o.min), d = S(() => Pe(o.modelValue) && o.modelValue >= o.max), m = S(() => {
      const $ = k(o.step);
      return In(o.precision) ? Math.max(k(o.modelValue), $) : ($ > o.precision, o.precision);
    }), g = S(() => o.controls && o.controlsPosition === "right"), w = Rs(), h = Ru(), b = S(() => {
      if (i.userInput !== null)
        return i.userInput;
      let $ = i.currentValue;
      if (Yn($))
        return "";
      if (Pe($)) {
        if (Number.isNaN($))
          return "";
        In(o.precision) || ($ = $.toFixed(o.precision));
      }
      return $;
    }), C = ($, V) => {
      if (In(V) && (V = m.value), V === 0)
        return Math.round($);
      let B = String($);
      const ue = B.indexOf(".");
      if (ue === -1 || !B.replace(".", "").split("")[ue + V])
        return $;
      const De = B.length;
      return B.charAt(De - 1) === "5" && (B = `${B.slice(0, Math.max(0, De - 1))}6`), Number.parseFloat(Number(B).toFixed(V));
    }, k = ($) => {
      if (Yn($))
        return 0;
      const V = $.toString(), B = V.indexOf(".");
      let ue = 0;
      return B !== -1 && (ue = V.length - B - 1), ue;
    }, M = ($, V = 1) => Pe($) ? C($ + o.step * V) : i.currentValue, j = () => {
      if (o.readonly || h.value || d.value)
        return;
      const $ = Number(b.value) || 0, V = M($);
      O(V), n(qo, i.currentValue), de();
    }, L = () => {
      if (o.readonly || h.value || u.value)
        return;
      const $ = Number(b.value) || 0, V = M($, -1);
      O(V), n(qo, i.currentValue), de();
    }, I = ($, V) => {
      const { max: B, min: ue, step: fe, precision: Te, stepStrictly: De, valueOnClear: Ue } = o;
      B < ue && Wa("InputNumber", "min should not be greater than max.");
      let ve = Number($);
      if (Yn($) || Number.isNaN(ve))
        return null;
      if ($ === "") {
        if (Ue === null)
          return null;
        ve = Zt(Ue) ? { min: ue, max: B }[Ue] : Ue;
      }
      return De && (ve = C(Math.round(ve / fe) * fe, Te), ve !== $ && V && n(vt, ve)), In(Te) || (ve = C(ve, Te)), (ve > B || ve < ue) && (ve = ve > B ? B : ue, V && n(vt, ve)), ve;
    }, O = ($, V = !0) => {
      var B;
      const ue = i.currentValue, fe = I($);
      if (!V) {
        n(vt, fe);
        return;
      }
      ue === fe && $ || (i.userInput = null, n(vt, fe), ue !== fe && n(Zo, fe, ue), o.validateEvent && ((B = c?.validate) == null || B.call(c, "change").catch((Te) => void 0)), i.currentValue = fe);
    }, R = ($) => {
      i.userInput = $;
      const V = $ === "" ? null : Number($);
      n(qo, V), O(V, !1);
    }, K = ($) => {
      const V = $ !== "" ? Number($) : "";
      (Pe(V) && !Number.isNaN(V) || $ === "") && O(V), de(), i.userInput = null;
    }, F = () => {
      var $, V;
      (V = ($ = a.value) == null ? void 0 : $.focus) == null || V.call($);
    }, ne = () => {
      var $, V;
      (V = ($ = a.value) == null ? void 0 : $.blur) == null || V.call($);
    }, H = ($) => {
      n("focus", $);
    }, se = ($) => {
      var V, B;
      i.userInput = null, xu() && i.currentValue === null && ((V = a.value) != null && V.input) && (a.value.input.value = ""), n("blur", $), o.validateEvent && ((B = c?.validate) == null || B.call(c, "blur").catch((ue) => void 0));
    }, de = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, ce = ($) => {
      document.activeElement === $.target && $.preventDefault();
    };
    return pe(() => o.modelValue, ($, V) => {
      const B = I($, !0);
      i.userInput === null && B !== V && (i.currentValue = B);
    }, { immediate: !0 }), ot(() => {
      var $;
      const { min: V, max: B, modelValue: ue } = o, fe = ($ = a.value) == null ? void 0 : $.input;
      if (fe.setAttribute("role", "spinbutton"), Number.isFinite(B) ? fe.setAttribute("aria-valuemax", String(B)) : fe.removeAttribute("aria-valuemax"), Number.isFinite(V) ? fe.setAttribute("aria-valuemin", String(V)) : fe.removeAttribute("aria-valuemin"), fe.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), fe.setAttribute("aria-disabled", String(h.value)), !Pe(ue) && ue != null) {
        let Te = Number(ue);
        Number.isNaN(Te) && (Te = null), n(vt, Te);
      }
      fe.addEventListener("wheel", ce, { passive: !1 });
    }), Dc(() => {
      var $, V;
      const B = ($ = a.value) == null ? void 0 : $.input;
      B?.setAttribute("aria-valuenow", `${(V = i.currentValue) != null ? V : ""}`);
    }), t({
      focus: F,
      blur: ne
    }), ($, V) => (A(), D("div", {
      class: z([
        l(s).b(),
        l(s).m(l(w)),
        l(s).is("disabled", l(h)),
        l(s).is("without-controls", !$.controls),
        l(s).is("controls-right", l(g))
      ]),
      onDragstart: Ke(() => {
      }, ["prevent"])
    }, [
      $.controls ? lt((A(), D("span", {
        key: 0,
        role: "button",
        "aria-label": l(r)("el.inputNumber.decrease"),
        class: z([l(s).e("decrease"), l(s).is("disabled", l(u))]),
        onKeydown: En(L, ["enter"])
      }, [
        ie($.$slots, "decrease-icon", {}, () => [
          _(l(Nt), null, {
            default: J(() => [
              l(g) ? (A(), re(l(Su), { key: 0 })) : (A(), re(l(p0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(lc), L]
      ]) : Y("v-if", !0),
      $.controls ? lt((A(), D("span", {
        key: 1,
        role: "button",
        "aria-label": l(r)("el.inputNumber.increase"),
        class: z([l(s).e("increase"), l(s).is("disabled", l(d))]),
        onKeydown: En(j, ["enter"])
      }, [
        ie($.$slots, "increase-icon", {}, () => [
          _(l(Nt), null, {
            default: J(() => [
              l(g) ? (A(), re(l(Jv), { key: 0 })) : (A(), re(l(h0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(lc), j]
      ]) : Y("v-if", !0),
      _(l(B0), {
        id: $.id,
        ref_key: "input",
        ref: a,
        type: "number",
        step: $.step,
        "model-value": l(b),
        placeholder: $.placeholder,
        readonly: $.readonly,
        disabled: l(h),
        size: l(w),
        max: $.max,
        min: $.min,
        name: $.name,
        "aria-label": $.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          En(Ke(j, ["prevent"]), ["up"]),
          En(Ke(L, ["prevent"]), ["down"])
        ],
        onBlur: se,
        onFocus: H,
        onInput: R,
        onChange: K
      }, $a({
        _: 2
      }, [
        $.$slots.prefix ? {
          name: "prefix",
          fn: J(() => [
            ie($.$slots, "prefix")
          ])
        } : void 0,
        $.$slots.suffix ? {
          name: "suffix",
          fn: J(() => [
            ie($.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var ow = /* @__PURE__ */ je(nw, [["__file", "input-number.vue"]]);
const rw = wn(ow);
function sw() {
  const e = io(), t = P(0), n = 11, o = S(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return xn(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const ud = Symbol("ElSelectGroup"), Ds = Symbol("ElSelect");
function aw(e, t) {
  const n = Le(Ds), o = Le(ud, { disabled: !1 }), r = S(() => d(ao(n.props.modelValue), e.value)), s = S(() => {
    var w;
    if (n.props.multiple) {
      const h = ao((w = n.props.modelValue) != null ? w : []);
      return !r.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = S(() => e.label || (en(e.value) ? "" : e.value)), i = S(() => e.value || e.label || ""), c = S(() => e.disabled || t.groupDisabled || s.value), u = xt(), d = (w = [], h) => {
    if (en(e.value)) {
      const b = n.props.valueKey;
      return w && w.some((C) => kf(lo(C, b)) === lo(h, b));
    } else
      return w && w.includes(h);
  }, m = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (w) => {
    const h = new RegExp(Ay(w), "i");
    t.visible = h.test(a.value) || e.created;
  };
  return pe(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), pe(() => e.value, (w, h) => {
    const { remote: b, valueKey: C } = n.props;
    if ((b ? w !== h : !Sr(w, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (C && en(w) && en(h) && w[C] === h[C])
        return;
      n.setSelected();
    }
  }), pe(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: r,
    isDisabled: c,
    hoverItem: m,
    updateOption: g
  };
}
const lw = oe({
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
    const t = tt("select"), n = Yo(), o = S(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(a)),
      t.is("hovering", l(g))
    ]), r = To({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: a,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d
    } = aw(e, r), { visible: m, hover: g } = Ra(r), w = xt().proxy;
    c.onOptionCreate(w), yn(() => {
      const b = w.value, { selected: C } = c.states, k = C.some((M) => M.value === w.value);
      Ze(() => {
        c.states.cachedOptions.get(b) === w && !k && c.states.cachedOptions.delete(b);
      }), c.onOptionDestroy(b, w);
    });
    function h() {
      i.value || c.handleOptionSelect(w);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: a,
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
function iw(e, t, n, o, r, s) {
  return lt((A(), D("li", {
    id: e.id,
    class: z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ke(e.selectOptionClick, ["stop"])
  }, [
    ie(e.$slots, "default", {}, () => [
      f("span", null, E(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Rn, e.visible]
  ]);
}
var ul = /* @__PURE__ */ je(lw, [["render", iw], ["__file", "option.vue"]]);
const cw = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Le(Ds), t = tt("select"), n = S(() => e.props.popperClass), o = S(() => e.props.multiple), r = S(() => e.props.fitInputWidth), s = P("");
    function a() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ot(() => {
      a(), xn(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function uw(e, t, n, o, r, s) {
  return A(), D("div", {
    class: z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: mt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (A(), D("div", {
      key: 0,
      class: z(e.ns.be("dropdown", "header"))
    }, [
      ie(e.$slots, "header")
    ], 2)) : Y("v-if", !0),
    ie(e.$slots, "default"),
    e.$slots.footer ? (A(), D("div", {
      key: 1,
      class: z(e.ns.be("dropdown", "footer"))
    }, [
      ie(e.$slots, "footer")
    ], 2)) : Y("v-if", !0)
  ], 6);
}
var dw = /* @__PURE__ */ je(cw, [["render", uw], ["__file", "select-dropdown.vue"]]);
const fw = (e, t) => {
  const { t: n } = Is(), o = Yo(), r = tt("select"), s = tt("input"), a = To({
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
  }), i = P(null), c = P(null), u = P(null), d = P(null), m = P(null), g = P(null), w = P(null), h = P(null), b = P(null), C = P(null), k = P(null), {
    isComposing: M,
    handleCompositionStart: j,
    handleCompositionUpdate: L,
    handleCompositionEnd: I
  } = Pu({
    afterComposition: (x) => kt(x)
  }), { wrapperRef: O, isFocused: R, handleBlur: K } = Mu(m, {
    beforeFocus() {
      return V.value;
    },
    afterFocus() {
      e.automaticDropdown && !F.value && (F.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(x) {
      var Z, ge;
      return ((Z = u.value) == null ? void 0 : Z.isFocusInsideContent(x)) || ((ge = d.value) == null ? void 0 : ge.isFocusInsideContent(x));
    },
    afterBlur() {
      F.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), F = P(!1), ne = P(), { form: H, formItem: se } = Za(), { inputId: de } = Ou(e, {
    formItemContext: se
  }), { valueOnClear: ce, isEmptyValue: $ } = Fv(e), V = S(() => e.disabled || H?.disabled), B = S(() => Ln(e.modelValue) ? e.modelValue.length > 0 : !$(e.modelValue)), ue = S(() => {
    var x;
    return (x = H?.statusIcon) != null ? x : !1;
  }), fe = S(() => e.clearable && !V.value && a.inputHovering && B.value), Te = S(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = S(() => r.is("reverse", Te.value && F.value)), Ue = S(() => se?.validateState || ""), ve = S(() => Eu[Ue.value]), W = S(() => e.remote ? 300 : 0), U = S(() => e.remote && !a.inputValue && a.options.size === 0), me = S(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && Ie.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ie = S(() => ee.value.filter((x) => x.visible).length), ee = S(() => {
    const x = Array.from(a.options.values()), Z = [];
    return a.optionValues.forEach((ge) => {
      const Be = x.findIndex((Je) => Je.value === ge);
      Be > -1 && Z.push(x[Be]);
    }), Z.length >= x.length ? Z : x;
  }), X = S(() => Array.from(a.cachedOptions.values())), Ve = S(() => {
    const x = ee.value.filter((Z) => !Z.created).some((Z) => Z.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !x;
  }), ze = () => {
    e.filterable && nt(e.filterMethod) || e.filterable && e.remote && nt(e.remoteMethod) || ee.value.forEach((x) => {
      var Z;
      (Z = x.updateOption) == null || Z.call(x, a.inputValue);
    });
  }, ut = Rs(), Ge = S(() => ["small"].includes(ut.value) ? "small" : "default"), Lt = S({
    get() {
      return F.value && !U.value;
    },
    set(x) {
      F.value = x;
    }
  }), bt = S(() => {
    if (e.multiple && !In(e.modelValue))
      return ao(e.modelValue).length === 0 && !a.inputValue;
    const x = Ln(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || In(x) ? !a.inputValue : !0;
  }), qe = S(() => {
    var x;
    const Z = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !B.value ? Z : a.selectedLabel;
  }), yt = S(() => ha ? null : "mouseenter");
  pe(() => e.modelValue, (x, Z) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", rt("")), Qe(), !Sr(x, Z) && e.validateEvent && se?.validate("change").catch((ge) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), pe(() => F.value, (x) => {
    x ? rt(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", x);
  }), pe(() => a.options.entries(), () => {
    We && (Qe(), e.defaultFirstOption && (e.filterable || e.remote) && Ie.value && wt());
  }, {
    flush: "post"
  }), pe([() => a.hoveringIndex, ee], ([x]) => {
    Pe(x) && x > -1 ? ne.value = ee.value[x] || {} : ne.value = {}, ee.value.forEach((Z) => {
      Z.hover = ne.value === Z;
    });
  }), Ia(() => {
    a.isBeforeHide || ze();
  });
  const rt = (x) => {
    a.previousQuery === x || M.value || (a.previousQuery = x, e.filterable && nt(e.filterMethod) ? e.filterMethod(x) : e.filterable && e.remote && nt(e.remoteMethod) && e.remoteMethod(x), e.defaultFirstOption && (e.filterable || e.remote) && Ie.value ? Ze(wt) : Ze(It));
  }, wt = () => {
    const x = ee.value.filter((Je) => Je.visible && !Je.disabled && !Je.states.groupDisabled), Z = x.find((Je) => Je.created), ge = x[0], Be = ee.value.map((Je) => Je.value);
    a.hoveringIndex = Bn(Be, Z || ge);
  }, Qe = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const Z = Ln(e.modelValue) ? e.modelValue[0] : e.modelValue, ge = ct(Z);
      a.selectedLabel = ge.currentLabel, a.selected = [ge];
      return;
    }
    const x = [];
    In(e.modelValue) || ao(e.modelValue).forEach((Z) => {
      x.push(ct(Z));
    }), a.selected = x;
  }, ct = (x) => {
    let Z;
    const ge = pp(x);
    for (let Ft = a.cachedOptions.size - 1; Ft >= 0; Ft--) {
      const $t = X.value[Ft];
      if (ge ? lo($t.value, e.valueKey) === lo(x, e.valueKey) : $t.value === x) {
        Z = {
          value: x,
          currentLabel: $t.currentLabel,
          get isDisabled() {
            return $t.isDisabled;
          }
        };
        break;
      }
    }
    if (Z)
      return Z;
    const Be = ge ? x.label : x ?? "";
    return {
      value: x,
      currentLabel: Be
    };
  }, It = () => {
    a.hoveringIndex = ee.value.findIndex((x) => a.selected.some((Z) => Oe(Z) === Oe(x)));
  }, Bt = () => {
    a.selectionWidth = c.value.getBoundingClientRect().width;
  }, q = () => {
    a.collapseItemWidth = C.value.getBoundingClientRect().width;
  }, ke = () => {
    var x, Z;
    (Z = (x = u.value) == null ? void 0 : x.updatePopper) == null || Z.call(x);
  }, dt = () => {
    var x, Z;
    (Z = (x = d.value) == null ? void 0 : x.updatePopper) == null || Z.call(x);
  }, xe = () => {
    a.inputValue.length > 0 && !F.value && (F.value = !0), rt(a.inputValue);
  }, kt = (x) => {
    if (a.inputValue = x.target.value, e.remote)
      He();
    else
      return xe();
  }, He = ev(() => {
    xe();
  }, W.value), ft = (x) => {
    Sr(e.modelValue, x) || t(Zo, x);
  }, mo = (x) => tv(x, (Z) => {
    const ge = a.cachedOptions.get(Z);
    return ge && !ge.disabled && !ge.states.groupDisabled;
  }), Dn = (x) => {
    if (e.multiple && x.code !== On.delete && x.target.value.length <= 0) {
      const Z = ao(e.modelValue).slice(), ge = mo(Z);
      if (ge < 0)
        return;
      const Be = Z[ge];
      Z.splice(ge, 1), t(vt, Z), ft(Z), t("remove-tag", Be);
    }
  }, kn = (x, Z) => {
    const ge = a.selected.indexOf(Z);
    if (ge > -1 && !V.value) {
      const Be = ao(e.modelValue).slice();
      Be.splice(ge, 1), t(vt, Be), ft(Be), t("remove-tag", Z.value);
    }
    x.stopPropagation(), eo();
  }, zn = (x) => {
    x.stopPropagation();
    const Z = e.multiple ? [] : ce.value;
    if (e.multiple)
      for (const ge of a.selected)
        ge.isDisabled && Z.push(ge.value);
    t(vt, Z), ft(Z), a.hoveringIndex = -1, F.value = !1, t("clear"), eo();
  }, Ut = (x) => {
    var Z;
    if (e.multiple) {
      const ge = ao((Z = e.modelValue) != null ? Z : []).slice(), Be = Bn(ge, x);
      Be > -1 ? ge.splice(Be, 1) : (e.multipleLimit <= 0 || ge.length < e.multipleLimit) && ge.push(x.value), t(vt, ge), ft(ge), x.created && rt(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(vt, x.value), ft(x.value), F.value = !1;
    eo(), !F.value && Ze(() => {
      Ot(x);
    });
  }, Bn = (x = [], Z) => In(Z) ? -1 : en(Z.value) ? x.findIndex((ge) => Sr(lo(ge, e.valueKey), Oe(Z))) : x.indexOf(Z.value), Ot = (x) => {
    var Z, ge, Be, Je, Ft;
    const $t = Ln(x) ? x[0] : x;
    let At = null;
    if ($t?.value) {
      const Gt = ee.value.filter((Do) => Do.value === $t.value);
      Gt.length > 0 && (At = Gt[0].$el);
    }
    if (u.value && At) {
      const Gt = (Je = (Be = (ge = (Z = u.value) == null ? void 0 : Z.popperRef) == null ? void 0 : ge.contentRef) == null ? void 0 : Be.querySelector) == null ? void 0 : Je.call(Be, `.${r.be("dropdown", "wrap")}`);
      Gt && Gv(Gt, At);
    }
    (Ft = k.value) == null || Ft.handleScroll();
  }, _t = (x) => {
    a.options.set(x.value, x), a.cachedOptions.set(x.value, x);
  }, _n = (x, Z) => {
    a.options.get(x) === Z && a.options.delete(x);
  }, Tn = S(() => {
    var x, Z;
    return (Z = (x = u.value) == null ? void 0 : x.popperRef) == null ? void 0 : Z.contentRef;
  }), ho = () => {
    a.isBeforeHide = !1, Ze(() => {
      var x;
      (x = k.value) == null || x.update(), Ot(a.selected);
    });
  }, eo = () => {
    var x;
    (x = m.value) == null || x.focus();
  }, sn = () => {
    var x;
    if (F.value) {
      F.value = !1, Ze(() => {
        var Z;
        return (Z = m.value) == null ? void 0 : Z.blur();
      });
      return;
    }
    (x = m.value) == null || x.blur();
  }, Fn = (x) => {
    zn(x);
  }, to = (x) => {
    if (F.value = !1, R.value) {
      const Z = new FocusEvent("focus", x);
      Ze(() => K(Z));
    }
  }, an = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : F.value = !1;
  }, jn = () => {
    V.value || (ha && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : F.value = !F.value);
  }, Ro = () => {
    if (!F.value)
      jn();
    else {
      const x = ee.value[a.hoveringIndex];
      x && !x.isDisabled && Ut(x);
    }
  }, Oe = (x) => en(x.value) ? lo(x.value, e.valueKey) : x.value, ln = S(() => ee.value.filter((x) => x.visible).every((x) => x.isDisabled)), Mo = S(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), Po = S(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), cn = (x) => {
    if (!F.value) {
      F.value = !0;
      return;
    }
    if (!(a.options.size === 0 || Ie.value === 0 || M.value) && !ln.value) {
      x === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : x === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const Z = ee.value[a.hoveringIndex];
      (Z.isDisabled || !Z.visible) && cn(x), Ze(() => Ot(ne.value));
    }
  }, No = () => {
    if (!c.value)
      return 0;
    const x = window.getComputedStyle(c.value);
    return Number.parseFloat(x.gap || "6px");
  }, go = S(() => {
    const x = No();
    return { maxWidth: `${C.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - x : a.selectionWidth}px` };
  }), lr = S(() => ({ maxWidth: `${a.selectionWidth}px` })), Tt = (x) => {
    t("popup-scroll", x);
  };
  return xn(c, Bt), xn(h, ke), xn(O, ke), xn(b, dt), xn(C, q), ot(() => {
    Qe();
  }), {
    inputId: de,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: R,
    expanded: F,
    optionsArray: ee,
    hoverOption: ne,
    selectSize: ut,
    filteredOptionsCount: Ie,
    updateTooltip: ke,
    updateTagTooltip: dt,
    debouncedOnInputChange: He,
    onInput: kt,
    deletePrevTag: Dn,
    deleteTag: kn,
    deleteSelected: zn,
    handleOptionSelect: Ut,
    scrollToOption: Ot,
    hasModelValue: B,
    shouldShowPlaceholder: bt,
    currentPlaceholder: qe,
    mouseEnterEventName: yt,
    needStatusIcon: ue,
    showClose: fe,
    iconComponent: Te,
    iconReverse: De,
    validateState: Ue,
    validateIcon: ve,
    showNewOption: Ve,
    updateOptions: ze,
    collapseTagSize: Ge,
    setSelected: Qe,
    selectDisabled: V,
    emptyText: me,
    handleCompositionStart: j,
    handleCompositionUpdate: L,
    handleCompositionEnd: I,
    onOptionCreate: _t,
    onOptionDestroy: _n,
    handleMenuEnter: ho,
    focus: eo,
    blur: sn,
    handleClearClick: Fn,
    handleClickOutside: to,
    handleEsc: an,
    toggleMenu: jn,
    selectOption: Ro,
    getValueKey: Oe,
    navigateOptions: cn,
    dropdownMenuVisible: Lt,
    showTagList: Mo,
    collapseTagList: Po,
    popupScroll: Tt,
    tagStyle: go,
    collapseTagStyle: lr,
    popperRef: Tn,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: g,
    suffixRef: w,
    selectRef: i,
    wrapperRef: O,
    selectionRef: c,
    scrollbarRef: k,
    menuRef: h,
    tagMenuRef: b,
    collapseItemRef: C
  };
};
var pw = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Le(Ds);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function c(u) {
        Ln(u) && u.forEach((d) => {
          var m, g, w, h;
          const b = (m = d?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? c(!Zt(d.children) && !Ln(d.children) && nt((g = d.children) == null ? void 0 : g.default) ? (w = d.children) == null ? void 0 : w.default() : d.children) : b === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : Ln(d.children) && c(d.children);
        });
      }
      return a.length && c((s = a[0]) == null ? void 0 : s.children), Sr(i, o) || (o = i, n && (n.states.optionValues = i)), a;
    };
  }
});
const mw = Ne({
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
  size: $s,
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
  teleported: cl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: So,
    default: qa
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: So,
    default: Su
  },
  tagType: { ...ya.type, default: "info" },
  tagEffect: { ...ya.effect, default: "light" },
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
    values: Ps,
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
  ...yu,
  ...ar(["ariaLabel"])
}), ic = "ElSelect", hw = oe({
  name: ic,
  componentName: ic,
  components: {
    ElSelectMenu: dw,
    ElOption: ul,
    ElOptions: pw,
    ElTag: Ly,
    ElScrollbar: e1,
    ElTooltip: vy,
    ElIcon: Nt
  },
  directives: { ClickOutside: Iy },
  props: mw,
  emits: [
    vt,
    Zo,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = S(() => {
      const { modelValue: c, multiple: u } = e, d = u ? [] : void 0;
      return Ln(c) ? u ? c : d : u ? d : c;
    }), o = To({
      ...Ra(e),
      modelValue: n
    }), r = fw(o, t), { calculatorRef: s, inputStyle: a } = sw();
    vn(Ds, To({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const i = S(() => e.multiple ? r.states.selected.map((c) => c.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: s,
      inputStyle: a
    };
  }
});
function gw(e, t, n, o, r, s) {
  const a = vo("el-tag"), i = vo("el-tooltip"), c = vo("el-icon"), u = vo("el-option"), d = vo("el-options"), m = vo("el-scrollbar"), g = vo("el-select-menu"), w = _f("click-outside");
  return lt((A(), D("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Tf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
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
      default: J(() => {
        var h;
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
            onClick: Ke(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (A(), D("div", {
              key: 0,
              ref: "prefixRef",
              class: z(e.nsSelect.e("prefix"))
            }, [
              ie(e.$slots, "prefix")
            ], 2)) : Y("v-if", !0),
            f("div", {
              ref: "selectionRef",
              class: z([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ie(e.$slots, "tag", { key: 0 }, () => [
                (A(!0), D(at, null, Cn(e.showTagList, (b) => (A(), D("div", {
                  key: e.getValueKey(b),
                  class: z(e.nsSelect.e("selected-item"))
                }, [
                  _(a, {
                    closable: !e.selectDisabled && !b.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: mt(e.tagStyle),
                    onClose: (C) => e.deleteTag(C, b)
                  }, {
                    default: J(() => [
                      f("span", {
                        class: z(e.nsSelect.e("tags-text"))
                      }, [
                        ie(e.$slots, "label", {
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
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (A(), re(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: J(() => [
                    f("div", {
                      ref: "collapseItemRef",
                      class: z(e.nsSelect.e("selected-item"))
                    }, [
                      _(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: mt(e.collapseTagStyle)
                      }, {
                        default: J(() => [
                          f("span", {
                            class: z(e.nsSelect.e("tags-text"))
                          }, " + " + E(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: J(() => [
                    f("div", {
                      ref: "tagMenuRef",
                      class: z(e.nsSelect.e("selection"))
                    }, [
                      (A(!0), D(at, null, Cn(e.collapseTagList, (b) => (A(), D("div", {
                        key: e.getValueKey(b),
                        class: z(e.nsSelect.e("selected-item"))
                      }, [
                        _(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !b.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (C) => e.deleteTag(C, b)
                        }, {
                          default: J(() => [
                            f("span", {
                              class: z(e.nsSelect.e("tags-text"))
                            }, [
                              ie(e.$slots, "label", {
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
                }, 8, ["disabled", "effect", "teleported"])) : Y("v-if", !0)
              ]) : Y("v-if", !0),
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
                  style: mt(e.inputStyle),
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
                    En(Ke((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    En(Ke((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    En(Ke(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    En(Ke(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    En(Ke(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ke(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Lr, e.states.inputValue]
                ]),
                e.filterable ? (A(), D("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: z(e.nsSelect.e("input-calculator")),
                  textContent: E(e.states.inputValue)
                }, null, 10, ["textContent"])) : Y("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (A(), D("div", {
                key: 1,
                class: z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ie(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  f("span", null, E(e.currentPlaceholder), 1)
                ]) : (A(), D("span", { key: 1 }, E(e.currentPlaceholder), 1))
              ], 2)) : Y("v-if", !0)
            ], 2),
            f("div", {
              ref: "suffixRef",
              class: z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (A(), re(c, {
                key: 0,
                class: z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: J(() => [
                  (A(), re(Jt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              e.showClose && e.clearIcon ? (A(), re(c, {
                key: 1,
                class: z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: J(() => [
                  (A(), re(Jt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Y("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (A(), re(c, {
                key: 2,
                class: z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: J(() => [
                  (A(), re(Jt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: J(() => [
        _(g, { ref: "menuRef" }, {
          default: J(() => [
            e.$slots.header ? (A(), D("div", {
              key: 0,
              class: z(e.nsSelect.be("dropdown", "header")),
              onClick: Ke(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "header")
            ], 10, ["onClick"])) : Y("v-if", !0),
            lt(_(m, {
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
              default: J(() => [
                e.showNewOption ? (A(), re(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : Y("v-if", !0),
                _(d, null, {
                  default: J(() => [
                    ie(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Rn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (A(), D("div", {
              key: 1,
              class: z(e.nsSelect.be("dropdown", "loading"))
            }, [
              ie(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (A(), D("div", {
              key: 2,
              class: z(e.nsSelect.be("dropdown", "empty"))
            }, [
              ie(e.$slots, "empty", {}, () => [
                f("span", null, E(e.emptyText), 1)
              ])
            ], 2)) : Y("v-if", !0),
            e.$slots.footer ? (A(), D("div", {
              key: 3,
              class: z(e.nsSelect.be("dropdown", "footer")),
              onClick: Ke(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "footer")
            ], 10, ["onClick"])) : Y("v-if", !0)
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
var vw = /* @__PURE__ */ je(hw, [["render", gw], ["__file", "select.vue"]]);
const bw = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = tt("select"), n = P(null), o = xt(), r = P([]);
    vn(ud, To({
      ...Ra(e)
    }));
    const s = S(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = ao(u), m = [];
      return d.forEach((g) => {
        var w, h;
        a(g) ? m.push(g.component.proxy) : (w = g.children) != null && w.length ? m.push(...i(g.children)) : (h = g.component) != null && h.subTree && m.push(...i(g.component.subTree));
      }), m;
    }, c = () => {
      r.value = i(o.subTree);
    };
    return ot(() => {
      c();
    }), Sv(n, c, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: s,
      ns: t
    };
  }
});
function yw(e, t, n, o, r, s) {
  return lt((A(), D("ul", {
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
        ie(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Rn, e.visible]
  ]);
}
var dd = /* @__PURE__ */ je(bw, [["render", yw], ["__file", "option-group.vue"]]);
const fd = wn(vw, {
  Option: ul,
  OptionGroup: dd
}), pd = Au(ul);
Au(dd);
const md = ["success", "info", "warning", "error"], St = Lu({
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
  appendTo: We ? document.body : void 0
}), ww = Ne({
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
    type: So,
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
    values: md,
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
}), kw = {
  destroy: () => !0
}, mn = Af([]), _w = (e) => {
  const t = mn.findIndex((r) => r.id === e), n = mn[t];
  let o;
  return t > 0 && (o = mn[t - 1]), { current: n, prev: o };
}, Tw = (e) => {
  const { prev: t } = _w(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Aw = (e, t) => mn.findIndex((o) => o.id === e) > 0 ? 16 : t, Sw = oe({
  name: "ElMessage"
}), Cw = /* @__PURE__ */ oe({
  ...Sw,
  props: ww,
  emits: kw,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = _0, { ns: r, zIndex: s } = wu("message"), { currentZIndex: a, nextZIndex: i } = s, c = P(), u = P(!1), d = P(0);
    let m;
    const g = S(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = S(() => {
      const R = n.type;
      return { [r.bm("icon", R)]: R && gs[R] };
    }), h = S(() => n.icon || gs[n.type] || ""), b = S(() => Tw(n.id)), C = S(() => Aw(n.id, n.offset) + b.value), k = S(() => d.value + C.value), M = S(() => ({
      top: `${C.value}px`,
      zIndex: a.value
    }));
    function j() {
      n.duration !== 0 && ({ stop: m } = ps(() => {
        I();
      }, n.duration));
    }
    function L() {
      m?.();
    }
    function I() {
      u.value = !1;
    }
    function O({ code: R }) {
      R === On.esc && I();
    }
    return ot(() => {
      j(), i(), u.value = !0;
    }), pe(() => n.repeatNum, () => {
      L(), j();
    }), gn(document, "keydown", O), xn(c, () => {
      d.value = c.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: k,
      close: I
    }), (R, K) => (A(), re(xo, {
      name: l(r).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (F) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: J(() => [
        lt(f("div", {
          id: R.id,
          ref_key: "messageRef",
          ref: c,
          class: z([
            l(r).b(),
            { [l(r).m(R.type)]: R.type },
            l(r).is("center", R.center),
            l(r).is("closable", R.showClose),
            l(r).is("plain", R.plain),
            R.customClass
          ]),
          style: mt(l(M)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: j
        }, [
          R.repeatNum > 1 ? (A(), re(l(_y), {
            key: 0,
            value: R.repeatNum,
            type: l(g),
            class: z(l(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          l(h) ? (A(), re(l(Nt), {
            key: 1,
            class: z([l(r).e("icon"), l(w)])
          }, {
            default: J(() => [
              (A(), re(Jt(l(h))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          ie(R.$slots, "default", {}, () => [
            R.dangerouslyUseHTMLString ? (A(), D(at, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              f("p", {
                class: z(l(r).e("content")),
                innerHTML: R.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (A(), D("p", {
              key: 0,
              class: z(l(r).e("content"))
            }, E(R.message), 3))
          ]),
          R.showClose ? (A(), re(l(Nt), {
            key: 2,
            class: z(l(r).e("closeBtn")),
            onClick: Ke(I, ["stop"])
          }, {
            default: J(() => [
              _(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 46, ["id"]), [
          [Rn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ew = /* @__PURE__ */ je(Cw, [["__file", "message.vue"]]);
let xw = 1;
const hd = (e) => {
  const t = !e || Zt(e) || Ir(e) || nt(e) ? { message: e } : e, n = {
    ...St,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Zt(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    hn(o) || (o = document.body), n.appendTo = o;
  }
  return Rr(dn.grouping) && !n.grouping && (n.grouping = dn.grouping), Pe(dn.duration) && n.duration === 3e3 && (n.duration = dn.duration), Pe(dn.offset) && n.offset === 16 && (n.offset = dn.offset), Rr(dn.showClose) && !n.showClose && (n.showClose = dn.showClose), n;
}, Lw = (e) => {
  const t = mn.indexOf(e);
  if (t === -1)
    return;
  mn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Iw = ({ appendTo: e, ...t }, n) => {
  const o = `message_${xw++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), Lw(d);
    },
    onDestroy: () => {
      cs(null, s);
    }
  }, i = _(Ew, a, nt(a.message) || Ir(a.message) ? {
    default: nt(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || tr._context, cs(i, s), e.appendChild(s.firstElementChild);
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
}, tr = (e = {}, t) => {
  if (!We)
    return { close: () => {
    } };
  const n = hd(e);
  if (n.grouping && mn.length) {
    const r = mn.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Pe(dn.max) && mn.length >= dn.max)
    return { close: () => {
    } };
  const o = Iw(n, t);
  return mn.push(o), o.handler;
};
md.forEach((e) => {
  tr[e] = (t = {}, n) => {
    const o = hd(t);
    return tr({ ...o, type: e }, n);
  };
});
function Ow(e) {
  for (const t of mn)
    (!e || e === t.props.type) && t.handler.close();
}
tr.closeAll = Ow;
tr._context = null;
const $w = Tu(tr, "$message"), gd = [
  "success",
  "info",
  "warning",
  "error"
], Rw = Ne({
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
    type: So
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
    values: [...gd, ""],
    default: ""
  },
  zIndex: Number
}), Mw = {
  destroy: () => !0
}, Pw = oe({
  name: "ElNotification"
}), Nw = /* @__PURE__ */ oe({
  ...Pw,
  props: Rw,
  emits: Mw,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = wu("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: i } = Cu, c = P(!1);
    let u;
    const d = S(() => {
      const j = n.type;
      return j && gs[n.type] ? o.m(j) : "";
    }), m = S(() => n.type && gs[n.type] || n.icon), g = S(() => n.position.endsWith("right") ? "right" : "left"), w = S(() => n.position.startsWith("top") ? "top" : "bottom"), h = S(() => {
      var j;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (j = n.zIndex) != null ? j : a.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = ps(() => {
        c.value && k();
      }, n.duration));
    }
    function C() {
      u?.();
    }
    function k() {
      c.value = !1;
    }
    function M({ code: j }) {
      j === On.delete || j === On.backspace ? C() : j === On.esc ? c.value && k() : b();
    }
    return ot(() => {
      b(), s(), c.value = !0;
    }), gn(document, "keydown", M), t({
      visible: c,
      close: k
    }), (j, L) => (A(), re(xo, {
      name: l(o).b("fade"),
      onBeforeLeave: j.onClose,
      onAfterLeave: (I) => j.$emit("destroy"),
      persisted: ""
    }, {
      default: J(() => [
        lt(f("div", {
          id: j.id,
          class: z([l(o).b(), j.customClass, l(g)]),
          style: mt(l(h)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: b,
          onClick: j.onClick
        }, [
          l(m) ? (A(), re(l(Nt), {
            key: 0,
            class: z([l(o).e("icon"), l(d)])
          }, {
            default: J(() => [
              (A(), re(Jt(l(m))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          f("div", {
            class: z(l(o).e("group"))
          }, [
            f("h2", {
              class: z(l(o).e("title")),
              textContent: E(j.title)
            }, null, 10, ["textContent"]),
            lt(f("div", {
              class: z(l(o).e("content")),
              style: mt(j.title ? void 0 : { margin: 0 })
            }, [
              ie(j.$slots, "default", {}, () => [
                j.dangerouslyUseHTMLString ? (A(), D(at, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  f("p", { innerHTML: j.message }, null, 8, ["innerHTML"])
                ], 2112)) : (A(), D("p", { key: 0 }, E(j.message), 1))
              ])
            ], 6), [
              [Rn, j.message]
            ]),
            j.showClose ? (A(), re(l(Nt), {
              key: 0,
              class: z(l(o).e("closeBtn")),
              onClick: Ke(k, ["stop"])
            }, {
              default: J(() => [
                _(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Y("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Rn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Dw = /* @__PURE__ */ je(Nw, [["__file", "notification.vue"]]);
const ys = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, wa = 16;
let zw = 1;
const nr = function(e = {}, t) {
  if (!We)
    return { close: () => {
    } };
  (Zt(e) || Ir(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  ys[n].forEach(({ vm: d }) => {
    var m;
    o += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + wa;
  }), o += wa;
  const r = `notification_${zw++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      Bw(r, n, s);
    }
  };
  let i = document.body;
  hn(e.appendTo) ? i = e.appendTo : Zt(e.appendTo) && (i = document.querySelector(e.appendTo)), hn(i) || (i = document.body);
  const c = document.createElement("div"), u = _(Dw, a, nt(a.message) ? a.message : Ir(a.message) ? () => a.message : null);
  return u.appContext = In(t) ? nr._context : t, u.props.onDestroy = () => {
    cs(null, c);
  }, cs(u, c), ys[n].push({ vm: u }), i.appendChild(c.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
gd.forEach((e) => {
  nr[e] = (t = {}, n) => ((Zt(t) || Ir(t)) && (t = {
    message: t
  }), nr({ ...t, type: e }, n));
});
function Bw(e, t, n) {
  const o = ys[t], r = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: s } = o[r];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const c = o.length;
  if (!(c < 1))
    for (let u = r; u < c; u++) {
      const { el: d, component: m } = o[u].vm, g = Number.parseInt(d.style[i], 10) - a - wa;
      m.props.offset = g;
    }
}
function Fw() {
  for (const e of Object.values(ys))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
nr.closeAll = Fw;
nr._context = null;
const jw = Tu(nr, "$notify"), Vw = ["disabled"], Hw = {
  key: 0,
  class: "custom-button__loading"
}, Ww = /* @__PURE__ */ oe({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(
        e
      )
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
    return (n, o) => (A(), D("button", {
      class: z([
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
      e.loading ? (A(), D("div", Hw, o[1] || (o[1] = [
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
      ]))) : Y("v-if", !0),
      ie(n.$slots, "default", {}, void 0, !0)
    ], 10, Vw));
  }
}), Oo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Xt = /* @__PURE__ */ Oo(Ww, [["__scopeId", "data-v-8539c893"]]), Uw = /* @__PURE__ */ oe({
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
    const n = e, o = t, r = () => {
      if (n.disabled) return;
      const s = !n.modelValue;
      o("update:modelValue", s), o("change", s);
    };
    return (s, a) => (A(), D(
      "div",
      {
        class: z(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: r
      },
      [
        e.activeText || e.inactiveText ? (A(), D(
          "span",
          {
            key: 0,
            class: z(["custom-switch__text", { "custom-switch__text--active": e.modelValue }])
          },
          E(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : Y("v-if", !0),
        a[0] || (a[0] = f(
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
}), pr = /* @__PURE__ */ Oo(Uw, [["__scopeId", "data-v-09573d1e"]]), Gw = { class: "dialog-footer-default" }, qw = { class: "footer-left" }, Kw = { class: "footer-right" }, Zw = /* @__PURE__ */ oe({
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
    const o = e, r = n, s = P(o.modelValue), a = S(
      () => ["app-dialog", o.customClass].filter(Boolean).join(" ")
    );
    pe(
      () => o.modelValue,
      (d) => {
        s.value = d;
      }
    ), pe(s, (d) => {
      r("update:modelValue", d);
    });
    const i = () => {
      r("close");
    }, c = () => {
      r("confirm");
    }, u = () => {
      s.value = !1, r("cancel");
    };
    return t({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (d, m) => {
      const g = Qy;
      return A(), re(g, {
        modelValue: l(s),
        "onUpdate:modelValue": m[0] || (m[0] = (w) => Qt(s) ? s.value = w : null),
        title: d.title,
        width: d.width,
        "close-on-click-modal": d.closeOnClickModal,
        draggable: d.draggable,
        center: d.center,
        "show-close": d.showClose,
        "close-on-press-escape": d.closeOnPressEscape,
        "append-to-body": d.appendToBody,
        "align-center": d.alignCenter,
        "custom-class": l(a),
        onClose: i
      }, $a({
        default: J(() => [
          ie(d.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        d.$slots.header ? {
          name: "header",
          fn: J(() => [
            ie(d.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        d.$slots.footer || d.showDefaultFooter ? {
          name: "footer",
          fn: J(() => [
            ie(d.$slots, "footer", {}, () => [
              f("div", Gw, [
                f("div", qw, [
                  ie(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                f("div", Kw, [
                  _(Xt, { onClick: u }, {
                    default: J(() => [
                      pt(
                        E(d.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _(Xt, {
                    type: "primary",
                    loading: d.loading,
                    onClick: c
                  }, {
                    default: J(() => [
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
}), vd = /* @__PURE__ */ Oo(Zw, [["__scopeId", "data-v-71ae260f"]]), Yw = { class: "confirm-content" }, Xw = { class: "confirm-footer" }, Qw = /* @__PURE__ */ oe({
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
    const o = e, r = n, s = P(o.modelValue), a = S(() => {
      const d = ["confirm-dialog"];
      return o.type === "warning" ? d.push("warning-dialog") : o.type === "danger" && d.push("delete-dialog"), d.join(" ");
    }), i = S(() => o.type === "danger" ? "danger" : o.type === "warning" ? "warning" : "primary");
    pe(
      () => o.modelValue,
      (d) => {
        s.value = d;
      }
    ), pe(s, (d) => {
      r("update:modelValue", d);
    });
    const c = () => {
      r("confirm");
    }, u = () => {
      s.value = !1, r("cancel");
    };
    return t({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (d, m) => (A(), re(vd, {
      modelValue: l(s),
      "onUpdate:modelValue": m[0] || (m[0] = (g) => Qt(s) ? s.value = g : null),
      title: d.title,
      width: d.width,
      center: d.center,
      "show-close": d.showClose,
      "custom-class": l(a)
    }, {
      footer: J(() => [
        f("div", Xw, [
          d.showCancelButton ? (A(), re(Xt, {
            key: 0,
            type: "default",
            onClick: u
          }, {
            default: J(() => [
              pt(
                E(d.cancelText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : Y("v-if", !0),
          _(Xt, {
            type: l(i),
            loading: d.loading,
            onClick: c
          }, {
            default: J(() => [
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
      default: J(() => [
        f("div", Yw, [
          ie(d.$slots, "default", {}, () => [
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
}), Jw = /* @__PURE__ */ Oo(Qw, [["__scopeId", "data-v-a3c6b31a"]]), Ee = {
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
      showClose: s = !1
    } = e;
    o === "center" ? $w({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : jw({
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
}, ek = "snippets-code:developer-mode", bd = "snippets-code:frontend-diagnostics", tk = 240, mr = "[REDACTED]", ls = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${mr}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${mr}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  mr
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${mr}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${mr}`
), yd = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return ls(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return ls(
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
    return ls(String(e));
  }
}, nk = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, ok = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(bd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, dl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(ek) === "true";
  } catch {
    return !1;
  }
}, rk = (e, t, n) => {
  if (!dl() || typeof localStorage > "u") return;
  const o = ok();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: nk(),
    message: ls(t),
    data: yd(n)
  });
  try {
    localStorage.setItem(
      bd,
      JSON.stringify(o.slice(-tk))
    );
  } catch {
  }
}, sk = () => dl(), ak = (e) => e === "error" || dl(), es = (e, t, n) => {
  rk(e, t, n), ak(e) && Ye("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : yd(n)
  }).catch(() => {
  });
}, Et = {
  info: (e, t, ...n) => {
    es("info", e, t);
  },
  error: (e, t) => {
    es("error", e, t);
  },
  warn: (e, t) => {
    es("warn", e, t);
  },
  debug: (e, t) => {
    sk() && es("debug", e, t);
  }
}, lk = /* @__PURE__ */ new Set([
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
]), ik = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), ck = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), uk = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), wd = 5, dk = 1024 * 1024, fk = 5 * 1024 * 1024, cc = 4e4, ea = (e) => e?.map((t) => ({ ...t })) ?? [], fl = (e) => e.split(".").pop()?.toLowerCase() ?? "", kd = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, pl = (e) => ik.has(e.type) || ck.has(fl(e.name)), _d = (e) => e.type.startsWith("text/") || lk.has(fl(e.name)), pk = (e) => uk.has(fl(e.name)), mk = async (e) => await new Promise((t, n) => {
  const o = new FileReader();
  o.onload = () => t(String(o.result ?? "")), o.onerror = () => n(o.error ?? new Error("read failed")), o.readAsDataURL(e);
}), hk = async (e) => {
  const t = await e.text();
  return t.length <= cc ? { text: t, truncated: !1 } : {
    text: t.slice(0, cc),
    truncated: !0
  };
}, gk = (e, t) => {
  const n = t.filter(
    (r) => r.type === "text" && r.status === "parsed"
  );
  if (!n.length) return e;
  const o = n.map((r, s) => {
    const a = r.error === "truncated";
    return [
      `--- 文件 ${s + 1}: ${r.name} ---`,
      a ? "以下文件内容已截断。" : "",
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
}, ta = 160, Td = (e) => {
  const t = e.trim();
  if (!t) return 0;
  const n = (t.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, s = (t.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((a, i) => /^[A-Za-z0-9_]+$/.test(i) ? a + Math.max(1, Math.ceil(i.length / 4)) : a + 1, 0);
  return Math.max(1, Math.ceil(n + s));
}, na = (e) => Math.max(0, Math.ceil(e.length / 4)), vk = (e) => Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0, bk = (e, t) => {
  const n = Object.entries(t).filter(
    ([, o]) => o != null
  );
  return {
    ...e,
    ...Object.fromEntries(n)
  };
}, Ad = (e) => Array.isArray(e) ? e.filter((t) => t.type === "text").map((t) => t.text).join(`
`) : e, yk = (e) => {
  const t = e.attachments?.filter(
    (s) => s.status === "parsed"
  ) ?? [], n = gk(
    e.content,
    t
  ), o = t.filter(
    (s) => s.type === "image" && s.dataUrl
  );
  if (!o.length) return n;
  const r = [{ type: "text", text: n }];
  for (const s of o)
    r.push({
      type: "image_url",
      image_url: { url: s.dataUrl ?? "" }
    });
  return r;
}, or = (e) => Td(
  e.map((t) => `${t.role}: ${Ad(t.content)}`).join(`
`)
), uc = (e, t, n) => {
  const o = Math.max(240, t * 4);
  return e.length <= o ? e : `${n}

${e.slice(-o)}`;
}, hr = (e) => String(e).padStart(2, "0"), wk = (e = /* @__PURE__ */ new Date()) => {
  const t = -e.getTimezoneOffset() / 60, n = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${t >= 0 ? "+" : ""}${t}`, o = [
    e.getFullYear(),
    hr(e.getMonth() + 1),
    hr(e.getDate())
  ].join("-"), r = [
    hr(e.getHours()),
    hr(e.getMinutes()),
    hr(e.getSeconds())
  ].join(":"), s = e.toLocaleDateString("zh-CN", { weekday: "long" });
  return { isoDate: o, localTime: r, timeZone: n, weekday: s };
}, kk = () => {
  const { isoDate: e, localTime: t, timeZone: n, weekday: o } = wk();
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
}, _k = (e) => {
  const t = e.filter((o) => o.role === "system").map((o) => Ad(o.content).trim()).filter(Boolean), n = e.filter(
    (o) => o.role !== "system"
  );
  return t.length ? [
    { role: "system", content: t.join(`

---

`) },
    ...n
  ] : n;
}, Tk = (e, t, n) => {
  if (e.role !== "assistant" || typeof e.content != "string" || t < ta)
    return null;
  let o = t, r = {
    ...e,
    content: uc(
      e.content,
      o,
      n
    )
  };
  for (; or([r]) > t && o > ta; )
    o = Math.max(
      ta,
      Math.floor(o * 0.7)
    ), r = {
      ...e,
      content: uc(
        e.content,
        o,
        n
      )
    };
  return or([r]) <= t ? r : null;
}, Ak = (e, t, n) => {
  const o = [];
  let r = 0;
  for (let s = e.length - 1; s >= 0; s -= 1) {
    const a = e[s], i = or([a]);
    if (r + i <= t || o.length === 0) {
      o.unshift(a), r += i;
      continue;
    }
    const c = t - r, u = Tk(
      a,
      c,
      n
    );
    u && (o.unshift(u), r += or([u]));
  }
  return o;
}, yo = (e) => `${Date.now()}-${e}-${Math.random().toString(16).slice(2, 8)}`, rr = (e) => e.type === "root", zs = (e) => new Map(e.map((t) => [t.id, t])), jr = (e) => e.find(rr), Vr = (e, t) => {
  if (!t) return null;
  const n = zs(e);
  let o = n.get(t);
  const r = /* @__PURE__ */ new Set();
  for (; o?.childIds?.length && !r.has(o.id); )
    r.add(o.id), o = n.get(o.childIds[o.childIds.length - 1]);
  return o?.id ?? null;
}, Sk = (e, t) => {
  if (e.some(rr)) {
    const s = e.map((i) => ({
      ...i,
      type: i.type ?? "text",
      parentId: i.parentId ?? null,
      childIds: i.childIds ?? []
    })), a = jr(s);
    return {
      messages: s,
      currentNodeId: Vr(s, s.at(-1)?.id) ?? a?.id ?? null
    };
  }
  const n = {
    id: yo("root"),
    role: "system",
    type: "root",
    content: "",
    createdAt: t,
    parentId: null,
    childIds: []
  }, o = [n];
  let r = n.id;
  for (const s of e) {
    const a = {
      ...s,
      role: s.role === "system" ? "assistant" : s.role,
      type: "text",
      parentId: r,
      childIds: []
    };
    o.find((c) => c.id === r)?.childIds?.push(a.id), o.push(a), r = a.id;
  }
  return { messages: o, currentNodeId: r };
}, Sd = (e, t) => {
  if (!t) return [];
  const n = zs(e), o = [], r = /* @__PURE__ */ new Set();
  let s = n.get(t);
  for (; s && !r.has(s.id); )
    r.add(s.id), o.unshift(s), s = s.parentId ? n.get(s.parentId) : void 0;
  return o;
}, is = (e) => {
  if (!e) return [];
  const t = e.currentNodeId ?? Vr(e.messages, jr(e.messages)?.id);
  return Sd(e.messages, t).filter(
    (n) => !rr(n)
  );
}, Ck = (e) => {
  if (!e) return [];
  const t = zs(e.messages), n = (o) => Vr(e.messages, o) ?? o;
  return is(e).map((o) => {
    const s = (o.parentId ? t.get(o.parentId) : void 0)?.childIds ?? [o.id];
    return {
      message: o,
      siblingLeafNodeIds: s.map(n),
      siblingCurrentIndex: Math.max(0, s.indexOf(o.id))
    };
  });
}, oa = (e, t) => {
  const n = jr(e.messages), o = t.parentId ?? e.currentNodeId ?? n?.id ?? null, r = {
    ...t,
    type: "text",
    parentId: o,
    childIds: []
  };
  if (e.messages.push(r), o) {
    const s = e.messages.find((a) => a.id === o);
    s && (s.childIds = [...s.childIds ?? [], r.id]);
  }
  return e.currentNodeId = r.id, r;
}, Ek = (e, t) => {
  const n = zs(e), o = /* @__PURE__ */ new Set(), r = (s) => {
    if (!o.has(s)) {
      o.add(s);
      for (const a of n.get(s)?.childIds ?? []) r(a);
    }
  };
  return r(t), o;
}, xk = (e, t, n) => {
  const o = e.find((i) => i.id === n);
  if (!o || rr(o)) return null;
  const r = Ek(e, n), s = e.filter((i) => !r.has(i.id)).map((i) => ({
    ...i,
    childIds: (i.childIds ?? []).filter((c) => !r.has(c))
  })), a = t && r.has(t) ? Vr(s, o.parentId) ?? jr(s)?.id ?? null : t;
  return {
    messages: s,
    currentNodeId: a,
    deletedIds: r
  };
};
async function ka(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Ye("plugin:dialog|open", { options: e });
}
const Lk = [
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
], Bs = (e, t) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: t,
  mime: e.type || "application/octet-stream",
  size: e.size,
  status: "pending"
}), Ik = async (e, t) => {
  const n = Bs(e, "image");
  if (e.size > fk)
    return {
      ...n,
      status: "error",
      error: t("localAi.imageTooLarge")
    };
  try {
    return {
      ...n,
      status: "parsed",
      dataUrl: await mk(e)
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, Ok = async (e, t) => {
  const n = Bs(e, "text");
  if (e.size > dk)
    return {
      ...n,
      status: "error",
      error: t("localAi.textFileTooLarge")
    };
  try {
    const o = await hk(e);
    return {
      ...n,
      status: "parsed",
      text: o.text,
      error: o.truncated ? "truncated" : void 0
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, $k = async (e, t) => pl(e) ? Ik(e, t) : _d(e) ? Ok(e, t) : {
  ...Bs(e, "unsupported"),
  status: "error",
  error: pk(e) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
}, dc = async (e, t, n) => {
  const o = Array.from(t), r = wd - e.value.length;
  if (r <= 0) {
    Ee.msg(n("localAi.attachmentLimit"), "warning");
    return;
  }
  o.length > r && Ee.msg(n("localAi.attachmentLimit"), "warning");
  const s = o.slice(0, r), a = s.map(
    (i) => Bs(
      i,
      pl(i) ? "image" : _d(i) ? "text" : "unsupported"
    )
  );
  e.value.push(...a), await Promise.all(
    s.map(async (i, c) => {
      const u = await $k(i, n), d = e.value.findIndex(
        (m) => m.id === a[c].id
      );
      d >= 0 && (e.value[d] = u);
    })
  );
}, Rk = (e, t) => {
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
}, Mk = (e) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: e.kind,
  mime: e.mime,
  size: e.size,
  status: e.error ? "error" : "parsed",
  text: e.text ?? void 0,
  dataUrl: e.dataUrl ?? void 0,
  error: void 0
}), Pk = () => {
  const { t: e } = Nr(), t = P([]), n = P(!1);
  return {
    attachments: t,
    attachmentPicking: n,
    pickAttachmentFiles: async () => {
      const o = wd - t.value.length;
      if (o <= 0 || n.value) {
        o <= 0 && Ee.msg(e("localAi.attachmentLimit"), "warning");
        return;
      }
      n.value = !0;
      try {
        const r = await ka({
          title: e("localAi.addAttachment"),
          directory: !1,
          multiple: !0,
          filters: [
            {
              name: e("localAi.attachment"),
              extensions: Lk
            }
          ]
        });
        if (!r) return;
        const s = (Array.isArray(r) ? r : [r]).slice(
          0,
          o
        );
        (Array.isArray(r) ? r.length : 1) > o && Ee.msg(e("localAi.attachmentLimit"), "warning");
        const a = await Qf(s);
        t.value.push(
          ...a.map((i) => ({
            ...Mk(i),
            error: Rk(i, e)
          }))
        );
      } catch (r) {
        Ee.msg(
          `${e("localAi.attachmentReadFailed")}: ${String(r)}`,
          "error"
        );
      } finally {
        n.value = !1;
      }
    },
    handleAttachmentDrop: async (o) => {
      o.dataTransfer?.files.length && await dc(t, o.dataTransfer.files, e);
    },
    handleComposerPaste: async (o) => {
      const s = Array.from(o.clipboardData?.files ?? []).filter(pl);
      s.length && (o.preventDefault(), await dc(t, s, e));
    },
    removeAttachment: (o) => {
      t.value = t.value.filter(
        (r) => r.id !== o
      );
    },
    attachmentStatusText: (o) => o.status === "pending" ? e("localAi.attachmentPending") : o.status === "error" ? o.error ?? "" : o.error === "truncated" ? e("localAi.attachmentTruncated") : e("localAi.attachmentParsed")
  };
};
function ml() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var $o = ml();
function Cd(e) {
  $o = e;
}
var xr = { exec: () => null };
function Se(e, t = "") {
  let n = typeof e == "string" ? e : e.source, o = { replace: (r, s) => {
    let a = typeof s == "string" ? s : s.source;
    return a = a.replace(Dt.caret, "$1"), n = n.replace(r, a), o;
  }, getRegex: () => new RegExp(n, t) };
  return o;
}
var Nk = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Dt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Dk = /^(?:[ \t]*(?:\n|$))+/, zk = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Bk = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Fk = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hl = /(?:[*+-]|\d{1,9}[.)])/, Ed = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, xd = Se(Ed).replace(/bull/g, hl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), jk = Se(Ed).replace(/bull/g, hl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), gl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Vk = /^[^\n]+/, vl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Hk = Se(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", vl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Wk = Se(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, hl).getRegex(), Fs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", bl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Uk = Se("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", bl).replace("tag", Fs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ld = Se(gl).replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fs).getRegex(), Gk = Se(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ld).getRegex(), yl = { blockquote: Gk, code: zk, def: Hk, fences: Bk, heading: Fk, hr: Hr, html: Uk, lheading: xd, list: Wk, newline: Dk, paragraph: Ld, table: xr, text: Vk }, fc = Se("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fs).getRegex(), qk = { ...yl, lheading: jk, table: fc, paragraph: Se(gl).replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", fc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fs).getRegex() }, Kk = { ...yl, html: Se(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", bl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: xr, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Se(gl).replace("hr", Hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", xd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Zk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Yk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Id = /^( {2,}|\\)\n(?!\s*$)/, Xk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, js = /[\p{P}\p{S}]/u, wl = /[\s\p{P}\p{S}]/u, Od = /[^\s\p{P}\p{S}]/u, Qk = Se(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, wl).getRegex(), $d = /(?!~)[\p{P}\p{S}]/u, Jk = /(?!~)[\s\p{P}\p{S}]/u, e_ = /(?:[^\s\p{P}\p{S}]|~)/u, t_ = Se(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Nk ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Rd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, n_ = Se(Rd, "u").replace(/punct/g, js).getRegex(), o_ = Se(Rd, "u").replace(/punct/g, $d).getRegex(), Md = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", r_ = Se(Md, "gu").replace(/notPunctSpace/g, Od).replace(/punctSpace/g, wl).replace(/punct/g, js).getRegex(), s_ = Se(Md, "gu").replace(/notPunctSpace/g, e_).replace(/punctSpace/g, Jk).replace(/punct/g, $d).getRegex(), a_ = Se("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Od).replace(/punctSpace/g, wl).replace(/punct/g, js).getRegex(), l_ = Se(/\\(punct)/, "gu").replace(/punct/g, js).getRegex(), i_ = Se(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), c_ = Se(bl).replace("(?:-->|$)", "-->").getRegex(), u_ = Se("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", c_).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ws = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, d_ = Se(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ws).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Pd = Se(/^!?\[(label)\]\[(ref)\]/).replace("label", ws).replace("ref", vl).getRegex(), Nd = Se(/^!?\[(ref)\](?:\[\])?/).replace("ref", vl).getRegex(), f_ = Se("reflink|nolink(?!\\()", "g").replace("reflink", Pd).replace("nolink", Nd).getRegex(), pc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, kl = { _backpedal: xr, anyPunctuation: l_, autolink: i_, blockSkip: t_, br: Id, code: Yk, del: xr, emStrongLDelim: n_, emStrongRDelimAst: r_, emStrongRDelimUnd: a_, escape: Zk, link: d_, nolink: Nd, punctuation: Qk, reflink: Pd, reflinkSearch: f_, tag: u_, text: Xk, url: xr }, p_ = { ...kl, link: Se(/^!?\[(label)\]\((.*?)\)/).replace("label", ws).getRegex(), reflink: Se(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ws).getRegex() }, _a = { ...kl, emStrongRDelimAst: s_, emStrongLDelim: o_, url: Se(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", pc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Se(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", pc).getRegex() }, m_ = { ..._a, br: Se(Id).replace("{2,}", "*").getRegex(), text: Se(_a.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ts = { normal: yl, gfm: qk, pedantic: Kk }, gr = { normal: kl, gfm: _a, breaks: m_, pedantic: p_ }, h_ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, mc = (e) => h_[e];
function Wn(e, t) {
  if (t) {
    if (Dt.escapeTest.test(e)) return e.replace(Dt.escapeReplace, mc);
  } else if (Dt.escapeTestNoEncode.test(e)) return e.replace(Dt.escapeReplaceNoEncode, mc);
  return e;
}
function hc(e) {
  try {
    e = encodeURI(e).replace(Dt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function gc(e, t) {
  let n = e.replace(Dt.findPipe, (s, a, i) => {
    let c = !1, u = a;
    for (; --u >= 0 && i[u] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), o = n.split(Dt.splitPipe), r = 0;
  if (o[0].trim() || o.shift(), o.length > 0 && !o.at(-1)?.trim() && o.pop(), t) if (o.length > t) o.splice(t);
  else for (; o.length < t; ) o.push("");
  for (; r < o.length; r++) o[r] = o[r].trim().replace(Dt.slashPipe, "|");
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
function g_(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let o = 0; o < e.length; o++) if (e[o] === "\\") o++;
  else if (e[o] === t[0]) n++;
  else if (e[o] === t[1] && (n--, n < 0)) return o;
  return n > 0 ? -2 : -1;
}
function vc(e, t, n, o, r) {
  let s = t.href, a = t.title || null, i = e[1].replace(r.other.outputLinkReplace, "$1");
  o.state.inLink = !0;
  let c = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: s, title: a, text: i, tokens: o.inlineTokens(i) };
  return o.state.inLink = !1, c;
}
function v_(e, t, n) {
  let o = e.match(n.other.indentCodeCompensation);
  if (o === null) return t;
  let r = o[1];
  return t.split(`
`).map((s) => {
    let a = s.match(n.other.beginningSpace);
    if (a === null) return s;
    let [i] = a;
    return i.length >= r.length ? s.slice(r.length) : s;
  }).join(`
`);
}
var ks = class {
  constructor(e) {
    $e(this, "options");
    $e(this, "rules");
    $e(this, "lexer");
    this.options = e || $o;
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
      let n = t[0], o = v_(n, t[3] || "", this.rules);
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
`), o = "", r = "", s = [];
      for (; n.length > 0; ) {
        let a = !1, i = [], c;
        for (c = 0; c < n.length; c++) if (this.rules.other.blockquoteStart.test(n[c])) i.push(n[c]), a = !0;
        else if (!a) i.push(n[c]);
        else break;
        n = n.slice(c);
        let u = i.join(`
`), d = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        o = o ? `${o}
${u}` : u, r = r ? `${r}
${d}` : d;
        let m = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, s, !0), this.lexer.state.top = m, n.length === 0) break;
        let g = s.at(-1);
        if (g?.type === "code") break;
        if (g?.type === "blockquote") {
          let w = g, h = w.raw + `
` + n.join(`
`), b = this.blockquote(h);
          s[s.length - 1] = b, o = o.substring(0, o.length - w.raw.length) + b.raw, r = r.substring(0, r.length - w.text.length) + b.text;
          break;
        } else if (g?.type === "list") {
          let w = g, h = w.raw + `
` + n.join(`
`), b = this.list(h);
          s[s.length - 1] = b, o = o.substring(0, o.length - g.raw.length) + b.raw, r = r.substring(0, r.length - w.raw.length) + b.raw, n = h.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: s, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), o = n.length > 1, r = { type: "list", raw: "", ordered: o, start: o ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = o ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = o ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), a = !1;
      for (; e; ) {
        let c = !1, u = "", d = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), g = e.split(`
`, 1)[0], w = !m.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, d = m.trimStart()) : w ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, d = m.slice(h), h += t[1].length), w && this.rules.other.blankLine.test(g) && (u += g + `
`, e = e.substring(g.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(h), C = this.rules.other.hrRegex(h), k = this.rules.other.fencesBeginRegex(h), M = this.rules.other.headingBeginRegex(h), j = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let L = e.split(`
`, 1)[0], I;
            if (g = L, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), I = g) : I = g.replace(this.rules.other.tabCharGlobal, "    "), k.test(g) || M.test(g) || j.test(g) || b.test(g) || C.test(g)) break;
            if (I.search(this.rules.other.nonSpaceChar) >= h || !g.trim()) d += `
` + I.slice(h);
            else {
              if (w || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || k.test(m) || M.test(m) || C.test(m)) break;
              d += `
` + g;
            }
            !w && !g.trim() && (w = !0), u += L + `
`, e = e.substring(L.length + 1), m = I.slice(h);
          }
        }
        r.loose || (a ? r.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (a = !0)), r.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: !1, text: d, tokens: [] }), r.raw += u;
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
    let n = gc(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let a of o) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < n.length; a++) s.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: !0, align: s.align[a] });
      for (let a of r) s.rows.push(gc(a, s.header.length).map((i, c) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: s.align[c] })));
      return s;
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
        let s = vr(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = g_(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let o = t[2], r = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(o);
        s && (o = s[1], r = s[3]);
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), vc(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let o = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[o.toLowerCase()];
      if (!r) {
        let s = n[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return vc(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!o || o[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let r = [...o[0]].length - 1, s, a, i = r, c = 0, u = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + r); (o = u.exec(t)) != null; ) {
        if (s = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !s) continue;
        if (a = [...s].length, o[3] || o[4]) {
          i += a;
          continue;
        } else if ((o[5] || o[6]) && r % 3 && !((r + a) % 3)) {
          c += a;
          continue;
        }
        if (i -= a, i > 0) continue;
        a = Math.min(a, a + i + c);
        let d = [...o[0]][0].length, m = e.slice(0, r + o.index + d + a);
        if (Math.min(r, a) % 2) {
          let w = m.slice(1, -1);
          return { type: "em", raw: m, text: w, tokens: this.lexer.inlineTokens(w) };
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
}, fn = class Ta {
  constructor(t) {
    $e(this, "tokens");
    $e(this, "options");
    $e(this, "state");
    $e(this, "inlineQueue");
    $e(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || $o, this.options.tokenizer = this.options.tokenizer || new ks(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Dt, block: ts.normal, inline: gr.normal };
    this.options.pedantic ? (n.block = ts.pedantic, n.inline = gr.pedantic) : this.options.gfm && (n.block = ts.gfm, this.options.breaks ? n.inline = gr.breaks : n.inline = gr.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ts, inline: gr };
  }
  static lex(t, n) {
    return new Ta(n).lex(t);
  }
  static lexInline(t, n) {
    return new Ta(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Dt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let o = this.inlineQueue[n];
      this.inlineTokens(o.src, o.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], o = !1) {
    for (this.options.pedantic && (t = t.replace(Dt.tabCharGlobal, "    ").replace(Dt.spaceLine, "")); t; ) {
      let r;
      if (this.options.extensions?.block?.some((a) => (r = a.call({ lexer: this }, t, n)) ? (t = t.substring(r.raw.length), n.push(r), !0) : !1)) continue;
      if (r = this.tokenizer.space(t)) {
        t = t.substring(r.raw.length);
        let a = n.at(-1);
        r.raw.length === 1 && a !== void 0 ? a.raw += `
` : n.push(r);
        continue;
      }
      if (r = this.tokenizer.code(t)) {
        t = t.substring(r.raw.length);
        let a = n.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.at(-1).src = a.text) : n.push(r);
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
        let a = n.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, n.push(r));
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
      let s = t;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, i = t.slice(1), c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, i), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
        }), a < 1 / 0 && a >= 0 && (s = t.substring(0, a + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(s))) {
        let a = n.at(-1);
        o && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : n.push(r), o = s.length !== t.length, t = t.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(t)) {
        t = t.substring(r.raw.length);
        let a = n.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : n.push(r);
        continue;
      }
      if (t) {
        let a = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else throw new Error(a);
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
    let s;
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) s = r[2] ? r[2].length : 0, o = o.slice(0, r.index + s) + "[" + "a".repeat(r[0].length - s - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    o = this.options.hooks?.emStrongMask?.call({ lexer: this }, o) ?? o;
    let a = !1, i = "";
    for (; t; ) {
      a || (i = ""), a = !1;
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
        this.options.extensions.startInline.forEach((w) => {
          g = w.call({ lexer: this }, m), typeof g == "number" && g >= 0 && (d = Math.min(d, g));
        }), d < 1 / 0 && d >= 0 && (u = t.substring(0, d + 1));
      }
      if (c = this.tokenizer.inlineText(u)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (i = c.raw.slice(-1)), a = !0;
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
}, _s = class {
  constructor(e) {
    $e(this, "options");
    $e(this, "parser");
    this.options = e || $o;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let o = (t || "").match(Dt.notSpaceStart)?.[0], r = e.replace(Dt.endingNewline, "") + `
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
    for (let a = 0; a < e.items.length; a++) {
      let i = e.items[a];
      o += this.listitem(i);
    }
    let r = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + s + `>
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
      let s = e.rows[r];
      n = "";
      for (let a = 0; a < s.length; a++) n += this.tablecell(s[a]);
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
    let o = this.parser.parseInline(n), r = hc(e);
    if (r === null) return o;
    e = r;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + Wn(t) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let r = hc(e);
    if (r === null) return Wn(n);
    e = r;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${Wn(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Wn(e.text);
  }
}, _l = class {
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
}, pn = class Aa {
  constructor(t) {
    $e(this, "options");
    $e(this, "renderer");
    $e(this, "textRenderer");
    this.options = t || $o, this.options.renderer = this.options.renderer || new _s(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _l();
  }
  static parse(t, n) {
    return new Aa(n).parse(t);
  }
  static parseInline(t, n) {
    return new Aa(n).parseInline(t);
  }
  parse(t) {
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let r = t[o];
      if (this.options.extensions?.renderers?.[r.type]) {
        let a = r, i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          n += i || "";
          continue;
        }
      }
      let s = r;
      switch (s.type) {
        case "space": {
          n += this.renderer.space(s);
          break;
        }
        case "hr": {
          n += this.renderer.hr(s);
          break;
        }
        case "heading": {
          n += this.renderer.heading(s);
          break;
        }
        case "code": {
          n += this.renderer.code(s);
          break;
        }
        case "table": {
          n += this.renderer.table(s);
          break;
        }
        case "blockquote": {
          n += this.renderer.blockquote(s);
          break;
        }
        case "list": {
          n += this.renderer.list(s);
          break;
        }
        case "checkbox": {
          n += this.renderer.checkbox(s);
          break;
        }
        case "html": {
          n += this.renderer.html(s);
          break;
        }
        case "def": {
          n += this.renderer.def(s);
          break;
        }
        case "paragraph": {
          n += this.renderer.paragraph(s);
          break;
        }
        case "text": {
          n += this.renderer.text(s);
          break;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
  parseInline(t, n = this.renderer) {
    let o = "";
    for (let r = 0; r < t.length; r++) {
      let s = t[r];
      if (this.options.extensions?.renderers?.[s.type]) {
        let i = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          o += i || "";
          continue;
        }
      }
      let a = s;
      switch (a.type) {
        case "escape": {
          o += n.text(a);
          break;
        }
        case "html": {
          o += n.html(a);
          break;
        }
        case "link": {
          o += n.link(a);
          break;
        }
        case "image": {
          o += n.image(a);
          break;
        }
        case "checkbox": {
          o += n.checkbox(a);
          break;
        }
        case "strong": {
          o += n.strong(a);
          break;
        }
        case "em": {
          o += n.em(a);
          break;
        }
        case "codespan": {
          o += n.codespan(a);
          break;
        }
        case "br": {
          o += n.br(a);
          break;
        }
        case "del": {
          o += n.del(a);
          break;
        }
        case "text": {
          o += n.text(a);
          break;
        }
        default: {
          let i = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return o;
  }
}, os, wr = (os = class {
  constructor(e) {
    $e(this, "options");
    $e(this, "block");
    this.options = e || $o;
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
}, $e(os, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), $e(os, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), os), b_ = class {
  constructor(...e) {
    $e(this, "defaults", ml());
    $e(this, "options", this.setOptions);
    $e(this, "parse", this.parseMarkdown(!0));
    $e(this, "parseInline", this.parseMarkdown(!1));
    $e(this, "Parser", pn);
    $e(this, "Renderer", _s);
    $e(this, "TextRenderer", _l);
    $e(this, "Lexer", fn);
    $e(this, "Tokenizer", ks);
    $e(this, "Hooks", wr);
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let o of e) switch (n = n.concat(t.call(this, o)), o.type) {
      case "table": {
        let r = o;
        for (let s of r.header) n = n.concat(this.walkTokens(s.tokens, t));
        for (let s of r.rows) for (let a of s) n = n.concat(this.walkTokens(a.tokens, t));
        break;
      }
      case "list": {
        let r = o;
        n = n.concat(this.walkTokens(r.items, t));
        break;
      }
      default: {
        let r = o;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((s) => {
          let a = r[s].flat(1 / 0);
          n = n.concat(this.walkTokens(a, t));
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
          let s = t.renderers[r.name];
          s ? t.renderers[r.name] = function(...a) {
            let i = r.renderer.apply(this, a);
            return i === !1 && (i = s.apply(this, a)), i;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[r.level];
          s ? s.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), o.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new _s(this.defaults);
        for (let s in n.renderer) {
          if (!(s in r)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, i = n.renderer[a], c = r[a];
          r[a] = (...u) => {
            let d = i.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d || "";
          };
        }
        o.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new ks(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in r)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, i = n.tokenizer[a], c = r[a];
          r[a] = (...u) => {
            let d = i.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d;
          };
        }
        o.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new wr();
        for (let s in n.hooks) {
          if (!(s in r)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, i = n.hooks[a], c = r[a];
          wr.passThroughHooks.has(s) ? r[a] = (u) => {
            if (this.defaults.async && wr.passThroughHooksRespectAsync.has(s)) return (async () => {
              let m = await i.call(r, u);
              return c.call(r, m);
            })();
            let d = i.call(r, u);
            return c.call(r, d);
          } : r[a] = (...u) => {
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
        let r = this.defaults.walkTokens, s = n.walkTokens;
        o.walkTokens = function(a) {
          let i = [];
          return i.push(s.call(this, a)), r && (i = i.concat(r.call(this, a))), i;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return fn.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return pn.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (t, n) => {
      let o = { ...n }, r = { ...this.defaults, ...o }, s = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (r.hooks && (r.hooks.options = r, r.hooks.block = e), r.async) return (async () => {
        let a = r.hooks ? await r.hooks.preprocess(t) : t, i = await (r.hooks ? await r.hooks.provideLexer() : e ? fn.lex : fn.lexInline)(a, r), c = r.hooks ? await r.hooks.processAllTokens(i) : i;
        r.walkTokens && await Promise.all(this.walkTokens(c, r.walkTokens));
        let u = await (r.hooks ? await r.hooks.provideParser() : e ? pn.parse : pn.parseInline)(c, r);
        return r.hooks ? await r.hooks.postprocess(u) : u;
      })().catch(s);
      try {
        r.hooks && (t = r.hooks.preprocess(t));
        let a = (r.hooks ? r.hooks.provideLexer() : e ? fn.lex : fn.lexInline)(t, r);
        r.hooks && (a = r.hooks.processAllTokens(a)), r.walkTokens && this.walkTokens(a, r.walkTokens);
        let i = (r.hooks ? r.hooks.provideParser() : e ? pn.parse : pn.parseInline)(a, r);
        return r.hooks && (i = r.hooks.postprocess(i)), i;
      } catch (a) {
        return s(a);
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
}, Eo = new b_();
function Re(e, t) {
  return Eo.parse(e, t);
}
Re.options = Re.setOptions = function(e) {
  return Eo.setOptions(e), Re.defaults = Eo.defaults, Cd(Re.defaults), Re;
};
Re.getDefaults = ml;
Re.defaults = $o;
Re.use = function(...e) {
  return Eo.use(...e), Re.defaults = Eo.defaults, Cd(Re.defaults), Re;
};
Re.walkTokens = function(e, t) {
  return Eo.walkTokens(e, t);
};
Re.parseInline = Eo.parseInline;
Re.Parser = pn;
Re.parser = pn.parse;
Re.Renderer = _s;
Re.TextRenderer = _l;
Re.Lexer = fn;
Re.lexer = fn.lex;
Re.Tokenizer = ks;
Re.Hooks = wr;
Re.parse = Re;
Re.options;
Re.setOptions;
Re.use;
Re.walkTokens;
Re.parseInline;
pn.parse;
fn.lex;
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function bc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function y_(e) {
  if (Array.isArray(e)) return e;
}
function w_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, s, a, i = [], c = !0, u = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (o = s.call(n)).done) && (i.push(o.value), i.length !== t); c = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!c && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw r;
      }
    }
    return i;
  }
}
function k_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function __(e, t) {
  return y_(e) || w_(e, t) || T_(e, t) || k_();
}
function T_(e, t) {
  if (e) {
    if (typeof e == "string") return bc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bc(e, t) : void 0;
  }
}
const Dd = Object.entries, yc = Object.setPrototypeOf, A_ = Object.isFrozen, S_ = Object.getPrototypeOf, C_ = Object.getOwnPropertyDescriptor;
let zt = Object.freeze, rn = Object.seal, Go = Object.create, zd = typeof Reflect < "u" && Reflect, Sa = zd.apply, Ca = zd.construct;
zt || (zt = function(t) {
  return t;
});
rn || (rn = function(t) {
  return t;
});
Sa || (Sa = function(t, n) {
  for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
    r[s - 2] = arguments[s];
  return t.apply(n, r);
});
Ca || (Ca = function(t) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    o[r - 1] = arguments[r];
  return new t(...o);
});
const Vo = it(Array.prototype.forEach), E_ = it(Array.prototype.lastIndexOf), wc = it(Array.prototype.pop), Ho = it(Array.prototype.push), x_ = it(Array.prototype.splice), Pt = Array.isArray, kr = it(String.prototype.toLowerCase), ra = it(String.prototype.toString), kc = it(String.prototype.match), Wo = it(String.prototype.replace), _c = it(String.prototype.indexOf), L_ = it(String.prototype.trim), I_ = it(Number.prototype.toString), O_ = it(Boolean.prototype.toString), Tc = typeof BigInt > "u" ? null : it(BigInt.prototype.toString), Ac = typeof Symbol > "u" ? null : it(Symbol.prototype.toString), et = it(Object.prototype.hasOwnProperty), br = it(Object.prototype.toString), gt = it(RegExp.prototype.test), yr = $_(TypeError);
function it(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      o[r - 1] = arguments[r];
    return Sa(e, t, o);
  };
}
function $_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return Ca(e, n);
  };
}
function ye(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kr;
  if (yc && yc(e, null), !Pt(t))
    return e;
  let o = t.length;
  for (; o--; ) {
    let r = t[o];
    if (typeof r == "string") {
      const s = n(r);
      s !== r && (A_(t) || (t[o] = s), r = s);
    }
    e[r] = !0;
  }
  return e;
}
function R_(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function Ct(e) {
  const t = Go(null);
  for (const o of Dd(e)) {
    var n = __(o, 2);
    const r = n[0], s = n[1];
    et(e, r) && (Pt(s) ? t[r] = R_(s) : s && typeof s == "object" && s.constructor === Object ? t[r] = Ct(s) : t[r] = s);
  }
  return t;
}
function M_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return I_(e);
    case "boolean":
      return O_(e);
    case "bigint":
      return Tc ? Tc(e) : "0";
    case "symbol":
      return Ac ? Ac(e) : "Symbol()";
    case "undefined":
      return br(e);
    case "function":
    case "object": {
      if (e === null)
        return br(e);
      const t = e, n = Sn(t, "toString");
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
function Sn(e, t) {
  for (; e !== null; ) {
    const o = C_(e, t);
    if (o) {
      if (o.get)
        return it(o.get);
      if (typeof o.value == "function")
        return it(o.value);
    }
    e = S_(e);
  }
  function n() {
    return null;
  }
  return n;
}
function P_(e) {
  try {
    return gt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Sc = zt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), sa = zt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), aa = zt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), N_ = zt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), la = zt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), D_ = zt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Cc = zt(["#text"]), Ec = zt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ia = zt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xc = zt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ns = zt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), z_ = rn(/{{[\w\W]*|^[\w\W]*}}/g), B_ = rn(/<%[\w\W]*|^[\w\W]*%>/g), F_ = rn(/\${[\w\W]*/g), j_ = rn(/^data-[\-\w.\u00B7-\uFFFF]+$/), V_ = rn(/^aria-[\-\w]+$/), Lc = rn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), H_ = rn(/^(?:\w+script|data):/i), W_ = rn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), U_ = rn(/^html$/i), G_ = rn(/^[a-z][.\w]*(-[.\w]+)+$/i), An = {
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
}, q_ = function() {
  return typeof window > "u" ? null : window;
}, K_ = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const r = "data-tt-policy-suffix";
  n && n.hasAttribute(r) && (o = n.getAttribute(r));
  const s = "dompurify" + (o ? "#" + o : "");
  try {
    return t.createPolicy(s, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, Ic = function() {
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
function Bd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q_();
  const t = (ae) => Bd(ae);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== An.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const o = n, r = o.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, a = e.Node, i = e.Element, c = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, g = i.prototype, w = Sn(g, "cloneNode"), h = Sn(g, "remove"), b = Sn(g, "nextSibling"), C = Sn(g, "childNodes"), k = Sn(g, "parentNode"), M = Sn(g, "shadowRoot"), j = Sn(g, "attributes"), L = a && a.prototype ? Sn(a.prototype, "nodeType") : null, I = a && a.prototype ? Sn(a.prototype, "nodeName") : null;
  if (typeof s == "function") {
    const ae = n.createElement("template");
    ae.content && ae.content.ownerDocument && (n = ae.content.ownerDocument);
  }
  let O, R = "";
  const K = n, F = K.implementation, ne = K.createNodeIterator, H = K.createDocumentFragment, se = K.getElementsByTagName, de = o.importNode;
  let ce = Ic();
  t.isSupported = typeof Dd == "function" && typeof k == "function" && F && F.createHTMLDocument !== void 0;
  const $ = z_, V = B_, B = F_, ue = j_, fe = V_, Te = H_, De = W_, Ue = G_;
  let ve = Lc, W = null;
  const U = ye({}, [...Sc, ...sa, ...aa, ...la, ...Cc]);
  let me = null;
  const Ie = ye({}, [...Ec, ...ia, ...xc, ...ns]);
  let ee = Object.seal(Go(null, {
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
  })), X = null, Ve = null;
  const ze = Object.seal(Go(null, {
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
  let ut = !0, Ge = !0, Lt = !1, bt = !0, qe = !1, yt = !0, rt = !1, wt = !1, Qe = !1, ct = !1, It = !1, Bt = !1, q = !0, ke = !1;
  const dt = "user-content-";
  let xe = !0, kt = !1, He = {}, ft = null;
  const mo = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Dn = null;
  const kn = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let zn = null;
  const Ut = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bn = "http://www.w3.org/1998/Math/MathML", Ot = "http://www.w3.org/2000/svg", _t = "http://www.w3.org/1999/xhtml";
  let _n = _t, Tn = !1, ho = null;
  const eo = ye({}, [Bn, Ot, _t], ra);
  let sn = ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Fn = ye({}, ["annotation-xml"]);
  const to = ye({}, ["title", "style", "font", "a", "script"]);
  let an = null;
  const jn = ["application/xhtml+xml", "text/html"], Ro = "text/html";
  let Oe = null, ln = null;
  const Mo = n.createElement("form"), Po = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, cn = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = Ct(v), an = // eslint-disable-next-line unicorn/prefer-includes
    jn.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Ro : v.PARSER_MEDIA_TYPE, Oe = an === "application/xhtml+xml" ? ra : kr, W = et(v, "ALLOWED_TAGS") && Pt(v.ALLOWED_TAGS) ? ye({}, v.ALLOWED_TAGS, Oe) : U, me = et(v, "ALLOWED_ATTR") && Pt(v.ALLOWED_ATTR) ? ye({}, v.ALLOWED_ATTR, Oe) : Ie, ho = et(v, "ALLOWED_NAMESPACES") && Pt(v.ALLOWED_NAMESPACES) ? ye({}, v.ALLOWED_NAMESPACES, ra) : eo, zn = et(v, "ADD_URI_SAFE_ATTR") && Pt(v.ADD_URI_SAFE_ATTR) ? ye(Ct(Ut), v.ADD_URI_SAFE_ATTR, Oe) : Ut, Dn = et(v, "ADD_DATA_URI_TAGS") && Pt(v.ADD_DATA_URI_TAGS) ? ye(Ct(kn), v.ADD_DATA_URI_TAGS, Oe) : kn, ft = et(v, "FORBID_CONTENTS") && Pt(v.FORBID_CONTENTS) ? ye({}, v.FORBID_CONTENTS, Oe) : mo, X = et(v, "FORBID_TAGS") && Pt(v.FORBID_TAGS) ? ye({}, v.FORBID_TAGS, Oe) : Ct({}), Ve = et(v, "FORBID_ATTR") && Pt(v.FORBID_ATTR) ? ye({}, v.FORBID_ATTR, Oe) : Ct({}), He = et(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? Ct(v.USE_PROFILES) : v.USE_PROFILES : !1, ut = v.ALLOW_ARIA_ATTR !== !1, Ge = v.ALLOW_DATA_ATTR !== !1, Lt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, bt = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qe = v.SAFE_FOR_TEMPLATES || !1, yt = v.SAFE_FOR_XML !== !1, rt = v.WHOLE_DOCUMENT || !1, ct = v.RETURN_DOM || !1, It = v.RETURN_DOM_FRAGMENT || !1, Bt = v.RETURN_TRUSTED_TYPE || !1, Qe = v.FORCE_BODY || !1, q = v.SANITIZE_DOM !== !1, ke = v.SANITIZE_NAMED_PROPS || !1, xe = v.KEEP_CONTENT !== !1, kt = v.IN_PLACE || !1, ve = P_(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Lc, _n = typeof v.NAMESPACE == "string" ? v.NAMESPACE : _t, sn = et(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ct(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Fn = et(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? Ct(v.HTML_INTEGRATION_POINTS) : ye({}, ["annotation-xml"]);
    const N = et(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? Ct(v.CUSTOM_ELEMENT_HANDLING) : Go(null);
    if (ee = Go(null), et(N, "tagNameCheck") && Po(N.tagNameCheck) && (ee.tagNameCheck = N.tagNameCheck), et(N, "attributeNameCheck") && Po(N.attributeNameCheck) && (ee.attributeNameCheck = N.attributeNameCheck), et(N, "allowCustomizedBuiltInElements") && typeof N.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = N.allowCustomizedBuiltInElements), qe && (Ge = !1), It && (ct = !0), He && (W = ye({}, Cc), me = Go(null), He.html === !0 && (ye(W, Sc), ye(me, Ec)), He.svg === !0 && (ye(W, sa), ye(me, ia), ye(me, ns)), He.svgFilters === !0 && (ye(W, aa), ye(me, ia), ye(me, ns)), He.mathMl === !0 && (ye(W, la), ye(me, xc), ye(me, ns))), ze.tagCheck = null, ze.attributeCheck = null, et(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? ze.tagCheck = v.ADD_TAGS : Pt(v.ADD_TAGS) && (W === U && (W = Ct(W)), ye(W, v.ADD_TAGS, Oe))), et(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? ze.attributeCheck = v.ADD_ATTR : Pt(v.ADD_ATTR) && (me === Ie && (me = Ct(me)), ye(me, v.ADD_ATTR, Oe))), et(v, "ADD_URI_SAFE_ATTR") && Pt(v.ADD_URI_SAFE_ATTR) && ye(zn, v.ADD_URI_SAFE_ATTR, Oe), et(v, "FORBID_CONTENTS") && Pt(v.FORBID_CONTENTS) && (ft === mo && (ft = Ct(ft)), ye(ft, v.FORBID_CONTENTS, Oe)), et(v, "ADD_FORBID_CONTENTS") && Pt(v.ADD_FORBID_CONTENTS) && (ft === mo && (ft = Ct(ft)), ye(ft, v.ADD_FORBID_CONTENTS, Oe)), xe && (W["#text"] = !0), rt && ye(W, ["html", "head", "body"]), W.table && (ye(W, ["tbody"]), delete X.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O = v.TRUSTED_TYPES_POLICY, R = O.createHTML("");
    } else
      O === void 0 && (O = K_(m, r)), O !== null && typeof R == "string" && (R = O.createHTML(""));
    (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && W === U && (W = Ct(W)), ce.uponSanitizeAttribute.length > 0 && me === Ie && (me = Ct(me)), zt && zt(v), ln = v;
  }, No = ye({}, [...sa, ...aa, ...N_]), go = ye({}, [...la, ...D_]), lr = function(v) {
    let N = k(v);
    (!N || !N.tagName) && (N = {
      namespaceURI: _n,
      tagName: "template"
    });
    const Q = kr(v.tagName), we = kr(N.tagName);
    return ho[v.namespaceURI] ? v.namespaceURI === Ot ? N.namespaceURI === _t ? Q === "svg" : N.namespaceURI === Bn ? Q === "svg" && (we === "annotation-xml" || sn[we]) : !!No[Q] : v.namespaceURI === Bn ? N.namespaceURI === _t ? Q === "math" : N.namespaceURI === Ot ? Q === "math" && Fn[we] : !!go[Q] : v.namespaceURI === _t ? N.namespaceURI === Ot && !Fn[we] || N.namespaceURI === Bn && !sn[we] ? !1 : !go[Q] && (to[Q] || !No[Q]) : !!(an === "application/xhtml+xml" && ho[v.namespaceURI]) : !1;
  }, Tt = function(v) {
    Ho(t.removed, {
      element: v
    });
    try {
      k(v).removeChild(v);
    } catch {
      h(v);
    }
  }, x = function(v, N) {
    try {
      Ho(t.removed, {
        attribute: N.getAttributeNode(v),
        from: N
      });
    } catch {
      Ho(t.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(v), v === "is")
      if (ct || It)
        try {
          Tt(N);
        } catch {
        }
      else
        try {
          N.setAttribute(v, "");
        } catch {
        }
  }, Z = function(v) {
    let N = null, Q = null;
    if (Qe)
      v = "<remove></remove>" + v;
    else {
      const Me = kc(v, /^[\r\n\t ]+/);
      Q = Me && Me[0];
    }
    an === "application/xhtml+xml" && _n === _t && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const we = O ? O.createHTML(v) : v;
    if (_n === _t)
      try {
        N = new d().parseFromString(we, an);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = F.createDocument(_n, "template", null);
      try {
        N.documentElement.innerHTML = Tn ? R : we;
      } catch {
      }
    }
    const be = N.body || N.documentElement;
    return v && Q && be.insertBefore(n.createTextNode(Q), be.childNodes[0] || null), _n === _t ? se.call(N, rt ? "html" : "body")[0] : rt ? N.documentElement : be;
  }, ge = function(v) {
    return ne.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Be = function(v) {
    v.normalize();
    const N = ne.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Q = N.nextNode();
    for (; Q; ) {
      let we = Q.data;
      Vo([$, V, B], (be) => {
        we = Wo(we, be, " ");
      }), Q.data = we, Q = N.nextNode();
    }
  }, Je = function(v) {
    const N = I ? I(v) : null;
    return typeof N != "string" || Oe(N) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    v.attributes !== j(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, Ft = function(v) {
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
  function At(ae, v, N) {
    Vo(ae, (Q) => {
      Q.call(t, v, N, ln);
    });
  }
  const Gt = function(v) {
    let N = null;
    if (At(ce.beforeSanitizeElements, v, null), Je(v))
      return Tt(v), !0;
    const Q = Oe(v.nodeName);
    if (At(ce.uponSanitizeElement, v, {
      tagName: Q,
      allowedTags: W
    }), yt && v.hasChildNodes() && !$t(v.firstElementChild) && gt(/<[/\w!]/g, v.innerHTML) && gt(/<[/\w!]/g, v.textContent) || yt && v.namespaceURI === _t && Q === "style" && $t(v.firstElementChild) || v.nodeType === An.progressingInstruction || yt && v.nodeType === An.comment && gt(/<[/\w]/g, v.data))
      return Tt(v), !0;
    if (X[Q] || !(ze.tagCheck instanceof Function && ze.tagCheck(Q)) && !W[Q]) {
      if (!X[Q] && Wr(Q) && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, Q) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(Q)))
        return !1;
      if (xe && !ft[Q]) {
        const be = k(v), Me = C(v);
        if (Me && be) {
          const Mt = Me.length;
          for (let qt = Mt - 1; qt >= 0; --qt) {
            const Kt = w(Me[qt], !0);
            be.insertBefore(Kt, b(v));
          }
        }
      }
      return Tt(v), !0;
    }
    return (L ? L(v) : v.nodeType) === An.element && !lr(v) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && gt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (Tt(v), !0) : (qe && v.nodeType === An.text && (N = v.textContent, Vo([$, V, B], (be) => {
      N = Wo(N, be, " ");
    }), v.textContent !== N && (Ho(t.removed, {
      element: v.cloneNode()
    }), v.textContent = N)), At(ce.afterSanitizeElements, v, null), !1);
  }, Do = function(v, N, Q) {
    if (Ve[N] || q && (N === "id" || N === "name") && (Q in n || Q in Mo))
      return !1;
    const we = me[N] || ze.attributeCheck instanceof Function && ze.attributeCheck(N, v);
    if (!(Ge && !Ve[N] && gt(ue, N))) {
      if (!(ut && gt(fe, N))) {
        if (!we || Ve[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Wr(v) && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, v) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(v)) && (ee.attributeNameCheck instanceof RegExp && gt(ee.attributeNameCheck, N) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(N, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, Q) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(Q)))
          ) return !1;
        } else if (!zn[N]) {
          if (!gt(ve, Wo(Q, De, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && v !== "script" && _c(Q, "data:") === 0 && Dn[v])) {
              if (!(Lt && !gt(Te, Wo(Q, De, "")))) {
                if (Q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Vs = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Wr = function(v) {
    return !Vs[kr(v)] && gt(Ue, v);
  }, Ur = function(v) {
    At(ce.beforeSanitizeAttributes, v, null);
    const N = v.attributes;
    if (!N || Je(v))
      return;
    const Q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let we = N.length;
    for (; we--; ) {
      const be = N[we], Me = be.name, Mt = be.namespaceURI, qt = be.value, Kt = Oe(Me), ir = qt;
      let st = Me === "value" ? ir : L_(ir);
      if (Q.attrName = Kt, Q.attrValue = st, Q.keepAttr = !0, Q.forceKeepAttr = void 0, At(ce.uponSanitizeAttribute, v, Q), st = Q.attrValue, ke && (Kt === "id" || Kt === "name") && _c(st, dt) !== 0 && (x(Me, v), st = dt + st), yt && gt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        x(Me, v);
        continue;
      }
      if (Kt === "attributename" && kc(st, "href")) {
        x(Me, v);
        continue;
      }
      if (Q.forceKeepAttr)
        continue;
      if (!Q.keepAttr) {
        x(Me, v);
        continue;
      }
      if (!bt && gt(/\/>/i, st)) {
        x(Me, v);
        continue;
      }
      qe && Vo([$, V, B], (Gr) => {
        st = Wo(st, Gr, " ");
      });
      const zo = Oe(v.nodeName);
      if (!Do(zo, Kt, st)) {
        x(Me, v);
        continue;
      }
      if (O && typeof m == "object" && typeof m.getAttributeType == "function" && !Mt)
        switch (m.getAttributeType(zo, Kt)) {
          case "TrustedHTML": {
            st = O.createHTML(st);
            break;
          }
          case "TrustedScriptURL": {
            st = O.createScriptURL(st);
            break;
          }
        }
      if (st !== ir)
        try {
          Mt ? v.setAttributeNS(Mt, Me, st) : v.setAttribute(Me, st), Je(v) ? Tt(v) : wc(t.removed);
        } catch {
          x(Me, v);
        }
    }
    At(ce.afterSanitizeAttributes, v, null);
  }, Rt = function(v) {
    let N = null;
    const Q = ge(v);
    for (At(ce.beforeSanitizeShadowDOM, v, null); N = Q.nextNode(); )
      if (At(ce.uponSanitizeShadowNode, N, null), Gt(N), Ur(N), Ft(N.content) && Rt(N.content), (L ? L(N) : N.nodeType) === An.element) {
        const be = M ? M(N) : N.shadowRoot;
        Ft(be) && (no(be), Rt(be));
      }
    At(ce.afterSanitizeShadowDOM, v, null);
  }, no = function(v) {
    const N = L ? L(v) : v.nodeType;
    if (N === An.element) {
      const be = M ? M(v) : v.shadowRoot;
      Ft(be) && (no(be), Rt(be));
    }
    const Q = C ? C(v) : v.childNodes;
    if (!Q)
      return;
    const we = [];
    Vo(Q, (be) => {
      Ho(we, be);
    });
    for (const be of we)
      no(be);
    if (N === An.element) {
      const be = I ? I(v) : null;
      if (typeof be == "string" && Oe(be) === "template") {
        const Me = v.content;
        Ft(Me) && no(Me);
      }
    }
  };
  return t.sanitize = function(ae) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, we = null, be = null;
    if (Tn = !ae, Tn && (ae = "<!-->"), typeof ae != "string" && !$t(ae) && (ae = M_(ae), typeof ae != "string"))
      throw yr("dirty is not a string, aborting");
    if (!t.isSupported)
      return ae;
    if (wt || cn(v), t.removed = [], typeof ae == "string" && (kt = !1), kt) {
      const qt = I ? I(ae) : ae.nodeName;
      if (typeof qt == "string") {
        const Kt = Oe(qt);
        if (!W[Kt] || X[Kt])
          throw yr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Je(ae))
        throw yr("root node is clobbered and cannot be sanitized in-place");
      no(ae);
    } else if ($t(ae))
      N = Z("<!---->"), Q = N.ownerDocument.importNode(ae, !0), Q.nodeType === An.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q), no(Q);
    else {
      if (!ct && !qe && !rt && // eslint-disable-next-line unicorn/prefer-includes
      ae.indexOf("<") === -1)
        return O && Bt ? O.createHTML(ae) : ae;
      if (N = Z(ae), !N)
        return ct ? null : Bt ? R : "";
    }
    N && Qe && Tt(N.firstChild);
    const Me = ge(kt ? ae : N);
    for (; we = Me.nextNode(); )
      Gt(we), Ur(we), Ft(we.content) && Rt(we.content);
    if (kt)
      return qe && Be(ae), ae;
    if (ct) {
      if (qe && Be(N), It)
        for (be = H.call(N.ownerDocument); N.firstChild; )
          be.appendChild(N.firstChild);
      else
        be = N;
      return (me.shadowroot || me.shadowrootmode) && (be = de.call(o, be, !0)), be;
    }
    let Mt = rt ? N.outerHTML : N.innerHTML;
    return rt && W["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && gt(U_, N.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Mt), qe && Vo([$, V, B], (qt) => {
      Mt = Wo(Mt, qt, " ");
    }), O && Bt ? O.createHTML(Mt) : Mt;
  }, t.setConfig = function() {
    let ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    cn(ae), wt = !0;
  }, t.clearConfig = function() {
    ln = null, wt = !1;
  }, t.isValidAttribute = function(ae, v, N) {
    ln || cn({});
    const Q = Oe(ae), we = Oe(v);
    return Do(Q, we, N);
  }, t.addHook = function(ae, v) {
    typeof v == "function" && Ho(ce[ae], v);
  }, t.removeHook = function(ae, v) {
    if (v !== void 0) {
      const N = E_(ce[ae], v);
      return N === -1 ? void 0 : x_(ce[ae], N, 1)[0];
    }
    return wc(ce[ae]);
  }, t.removeHooks = function(ae) {
    ce[ae] = [];
  }, t.removeAllHooks = function() {
    ce = Ic();
  }, t;
}
var Z_ = Bd();
const Y_ = {
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
function X_(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : Z_.sanitize(e, Y_) : "";
}
const Q_ = 24, J_ = 120, e2 = 420, t2 = 1200, n2 = 24e3, o2 = 1800, r2 = 5200, Ea = (e) => {
  const t = e.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!t || t.index === void 0)
    return { reasoning: "", answer: e };
  const n = e.slice(0, t.index).trim(), o = t[0], r = e.slice(t.index + o.length).trim();
  return {
    reasoning: (t[1] ?? "").trim(),
    answer: [n, r].filter(Boolean).join(`

`)
  };
}, s2 = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return `code-${e.length}-${t.toString(16)}`;
}, Fd = (e, t) => {
  if (e.size <= t) return;
  const n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}, a2 = (e, t, n) => e.includes("<pre>") ? e.replace(
  /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
  (o, r, s) => {
    const a = document.createElement("textarea");
    a.innerHTML = s;
    const i = a.value, c = s2(i);
    t.codeCache.set(c, i), Fd(t.codeCache, J_);
    const u = r ? ` class="${r}"` : "", d = n("common.copy");
    return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${c}" title="${d}">${d}</button><pre><code${u}>${s}</code></pre></div>`;
  }
) : e, Oc = (e, t, n, o = {}) => {
  const r = o.cache !== !1, s = `${n("common.copy")}\0${e}`, a = r ? t.htmlCache.get(s) : void 0;
  if (a) return a;
  const i = X_(Re.parse(e, { async: !1 })), c = o.enhanceCodeBlocks === !1 ? i : a2(i, t, n);
  return r && (t.htmlCache.set(s, c), Fd(t.htmlCache, Q_)), c;
}, l2 = (e, t, n, o, r) => {
  if (!t) return !0;
  const s = e.content.length >= n2, a = s ? t2 : e2, i = s ? r2 : o2;
  return r - t.updatedAt >= a || e.content.length - t.source.length >= i || !t.reasoning && !!n || !t.answer && !!o;
}, i2 = (e, t, n) => {
  const { reasoning: o, answer: r } = Ea(e.content);
  if (!e.streaming)
    return n.streamingSnapshots.delete(e.id), t === "reasoning" ? o : r;
  const s = Date.now(), a = n.streamingSnapshots.get(e.id);
  return l2(e, a, o, r, s) ? (n.streamingSnapshots.set(e.id, {
    source: e.content,
    reasoning: o,
    answer: r,
    updatedAt: s
  }), t === "reasoning" ? o : r) : t === "reasoning" ? a?.reasoning ?? o : a?.answer ?? r;
}, c2 = (e, t, n, o) => {
  const r = i2(e, t, n);
  if (!e.streaming) return Oc(r, n, o);
  const s = n.streamingSnapshots.get(e.id), a = t === "reasoning" ? "reasoningHtml" : "answerHtml", i = t === "reasoning" ? "reasoning" : "answer";
  if (s?.[i] === r && s[a])
    return s[a];
  const c = Oc(r, n, o, {
    cache: !1,
    enhanceCodeBlocks: !1
  });
  return s?.[i] === r && (s[a] = c), c;
}, u2 = async (e, t, n) => {
  const r = e.target?.closest(".code-copy-btn"), s = r?.dataset.codeId ? t.codeCache.get(r.dataset.codeId) : void 0;
  if (s)
    try {
      await navigator.clipboard.writeText(s), Ee.msg(n("localAi.codeCopied"));
    } catch (a) {
      Ee.msg(`${n("common.copy")}: ${a}`, "error");
    }
}, d2 = (e, t) => {
  e.allowThinking && (t.includes("<think>") && !e.reasoningStartedAt && (e.reasoningStartedAt = Date.now()), t.includes("</think>") && !e.reasoningEndedAt && (e.reasoningEndedAt = Date.now()));
}, f2 = () => {
  const { t: e } = Nr(), t = {
    htmlCache: /* @__PURE__ */ new Map(),
    codeCache: /* @__PURE__ */ new Map(),
    streamingSnapshots: /* @__PURE__ */ new Map()
  };
  return {
    renderMessageMarkdown: (n, o) => c2(n, o, t, e),
    handleMarkdownClick: (n) => u2(n, t, e),
    messageReasoning: (n) => Ea(n).reasoning,
    messageAnswer: (n) => Ea(n).answer,
    recordReasoningProgress: d2,
    discardStreamingMarkdown: (n) => {
      t.streamingSnapshots.delete(n);
    },
    clearMarkdownState: () => {
      t.htmlCache.clear(), t.codeCache.clear(), t.streamingSnapshots.clear();
    }
  };
}, p2 = {
  key: 0,
  class: "attachment-preview-dialog__body"
}, m2 = { class: "attachment-preview-dialog__viewport" }, h2 = ["src", "alt"], g2 = { class: "attachment-preview-dialog__meta" }, v2 = { class: "attachment-preview-dialog__file" }, b2 = ["title"], y2 = /* @__PURE__ */ oe({
  __name: "AttachmentPreviewDialog",
  props: {
    modelValue: { type: Boolean },
    attachment: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { t: r } = Nr(), s = S({
      get: () => n.modelValue,
      set: (a) => o("update:modelValue", a)
    });
    return (a, i) => (A(), re(l(vd), {
      modelValue: l(s),
      "onUpdate:modelValue": i[0] || (i[0] = (c) => Qt(s) ? s.value = c : null),
      title: l(r)("localAi.attachmentPreview"),
      width: "min(1000px, calc(100vw - 40px))",
      "custom-class": "local-ai-attachment-preview-dialog",
      "close-on-click-modal": !0
    }, {
      default: J(() => [
        a.attachment?.dataUrl ? (A(), D("div", p2, [
          f("div", m2, [
            f("img", {
              src: a.attachment.dataUrl,
              alt: a.attachment.name
            }, null, 8, h2)
          ]),
          f("div", g2, [
            f("span", v2, [
              _(l(Pf), {
                theme: "outline",
                size: "16"
              }),
              f("strong", {
                title: a.attachment.name
              }, E(a.attachment.name), 9, b2)
            ]),
            f(
              "span",
              null,
              E(l(kd)(a.attachment.size)),
              1
              /* TEXT */
            )
          ])
        ])) : Y("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "title"]));
  }
}), w2 = /* @__PURE__ */ Oo(y2, [["__scopeId", "data-v-8ead8db0"]]), k2 = /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i, _2 = /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i, T2 = /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i, A2 = /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i, jd = (e) => /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(e), $c = /^\s*(\d+)(?:[.)]\s+|、\s*)/, Rc = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
}, S2 = (e) => e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1").replace(/`([^`\n]+)`/g, "$1").replace(/\*\*([^*\n]+)\*\*/g, "$1").replace(/__([^_\n]+)__/g, "$1").replace(/~~([^~\n]+)~~/g, "$1").replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, "$1$2").replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, "$1$2"), C2 = (e) => e.replace(
  /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
  "$1"
).replace(
  /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
  "$1使用 $3"
).replace(
  /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
  "$1use $3"
), E2 = (e) => {
  const t = e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s{0,3}>\s?/, ""), n = t.match($c), o = n ? `${n[1]}、` : "", r = t.replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, "").replace(/^\s*[-+*]\s+/, "").replace($c, "");
  if (jd(r))
    return "";
  const s = r.trim();
  return s.startsWith("|") && s.endsWith("|") ? s.slice(1, -1).split("|").map((a) => a.trim()).filter(Boolean).join("；") : `${o}${C2(
    S2(r)
  ).trimEnd()}`;
}, x2 = (e, t) => t ? !1 : !e || _2.test(e), L2 = (e, t) => t && T2.test(e), I2 = (e, t) => (t ? e : e.replace(k2, "")).trim(), O2 = (e, t) => !!(e || t), xa = (e) => /[\u3400-\u9fff]/.test(e), $2 = (e, t = !1) => {
  const n = xa(e), o = n && t ? `
上一次结果语言错误。本次必须使用简体中文，不得翻译为英文。` : "";
  return {
    systemPrompt: `${n ? Rc.zh : Rc.en}${o}`,
    userPrompt: n ? `改写以下原文：
<原文>
${e}
</原文>` : `Rewrite the following source:
<source>
${e}
</source>`,
    maxTokens: Math.min(640, Math.max(320, Math.ceil(e.length * 1.4)))
  };
}, Mc = (e, t) => !xa(e) || xa(t), R2 = (e) => {
  const n = e.replace(/^[\s\S]*?<\/think>\s*/i, "").replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/^\s*```(?:markdown|md|text)?\s*$/gim, "").replace(/^\s*```\s*$/gim, "").replace(/\r\n?/g, `
`).trim().split(`
`), o = [];
  for (const r of n) {
    if (jd(r)) continue;
    const s = E2(r).trim(), a = o.length > 0;
    if (x2(s, a)) continue;
    if (L2(s, a)) break;
    if (A2.test(s)) continue;
    const i = I2(s, a);
    O2(i, o.at(-1)) && o.push(i);
  }
  return o.join(`
`).replace(/\n{3,}/g, `

`).trim();
}, _r = "snippets.localAi.pendingPrompt", Tl = "snippets.localAi.pendingPromptMode", Vd = "new-chat", Ts = "snippets.localAi.pendingNewChatAt", M2 = 1e4, P2 = (e, t) => {
  e.setItem(_r, t), e.setItem(
    Tl,
    Vd
  );
}, ca = (e) => e.getItem(Tl) === Vd, N2 = (e, t = Date.now()) => {
  e.setItem(Ts, String(t));
}, D2 = (e, t = Date.now()) => {
  const n = e.getItem(
    Ts
  );
  if (n === null) return !1;
  const o = Number(n), r = t - o;
  return !Number.isFinite(o) || r < 0 || r > M2 ? (e.removeItem(Ts), !1) : !0;
}, z2 = (e) => {
  e.removeItem(Ts);
}, B2 = { class: "sidebar-header" }, F2 = { class: "sidebar-brand" }, j2 = { class: "sidebar-title-block" }, V2 = ["title", "aria-pressed"], H2 = { class: "sidebar-nav" }, W2 = ["disabled"], U2 = { class: "sidebar-search" }, G2 = ["placeholder"], q2 = {
  key: 0,
  class: "sidebar-search-count"
}, K2 = { class: "sidebar-section recent-section" }, Z2 = { class: "section-title-row" }, Y2 = { class: "section-title" }, X2 = { class: "section-title-actions" }, Q2 = ["title", "disabled"], J2 = ["title", "disabled"], e4 = {
  key: 0,
  class: "chat-list"
}, t4 = ["tabindex", "aria-disabled", "onClick", "onKeydown"], n4 = { class: "chat-item-copy" }, o4 = { class: "chat-item-title" }, r4 = { class: "chat-item-title-track" }, s4 = { class: "chat-item-title-text" }, a4 = {
  class: "chat-item-title-text chat-item-title-clone",
  "aria-hidden": "true"
}, l4 = { class: "chat-item-time" }, i4 = ["title", "disabled", "onClick"], c4 = {
  key: 1,
  class: "sidebar-empty"
}, u4 = { class: "sidebar-service" }, d4 = { class: "sidebar-service-card" }, f4 = { class: "sidebar-service-icon" }, p4 = { class: "sidebar-service-copy" }, m4 = { class: "chat-panel" }, h4 = { class: "chat-panel-header" }, g4 = { class: "chat-panel-heading" }, v4 = ["title"], b4 = { class: "chat-context-mark" }, y4 = { class: "chat-context-copy" }, w4 = {
  key: 0,
  class: "empty-state"
}, k4 = { class: "empty-hero" }, _4 = { class: "empty-hero-mark" }, T4 = { class: "empty-eyebrow" }, A4 = { class: "quick-prompt-section" }, S4 = { class: "quick-prompt-heading" }, C4 = { class: "quick-prompt-grid" }, E4 = ["onClick"], x4 = { class: "quick-prompt-icon" }, L4 = { class: "quick-prompt-copy" }, I4 = {
  key: 0,
  class: "date-divider"
}, O4 = { class: "message-avatar" }, $4 = { key: 1 }, R4 = { class: "message-body" }, M4 = { class: "user-bubble" }, P4 = {
  key: 0,
  class: "user-message-text"
}, N4 = {
  key: 1,
  class: "message-attachment-list"
}, D4 = ["title", "aria-label", "onClick"], z4 = ["src", "alt"], B4 = {
  key: 1,
  class: "attachment-file-icon"
}, F4 = { key: 2 }, j4 = {
  key: 0,
  class: "message-actions"
}, V4 = ["title", "onClick"], H4 = ["title", "onClick"], W4 = ["title", "onClick"], U4 = { class: "assistant-head" }, G4 = { key: 0 }, q4 = {
  key: 0,
  class: "assistant-content-stack"
}, K4 = ["open"], Z4 = { class: "reasoning-summary-title" }, Y4 = { key: 0 }, X4 = ["innerHTML"], Q4 = ["innerHTML"], J4 = {
  key: 0,
  class: "message-stats"
}, eT = { class: "message-stats__context" }, tT = { class: "message-stats__output" }, nT = { class: "message-stats__elapsed" }, oT = { class: "message-stats__speed" }, rT = {
  key: 0,
  class: "message-stats-time"
}, sT = {
  key: 1,
  class: "message-warning"
}, aT = {
  key: 2,
  class: "message-actions"
}, lT = ["title", "aria-label"], iT = ["disabled", "title", "onClick"], cT = ["disabled", "title", "onClick"], uT = ["title", "onClick"], dT = ["title", "onClick"], fT = ["title", "onClick"], pT = ["title", "onClick"], mT = ["title", "onClick"], hT = ["title"], gT = { class: "composer-dock" }, vT = {
  key: 0,
  class: "attachment-preview-list"
}, bT = ["title", "aria-label", "onClick"], yT = ["src", "alt"], wT = {
  key: 1,
  class: "attachment-file-icon"
}, kT = { class: "attachment-meta" }, _T = ["title", "onClick"], TT = ["placeholder", "readonly", "aria-busy"], AT = { class: "input-toolbar" }, ST = { class: "input-toolbar-left" }, CT = ["title", "disabled"], ET = ["disabled", "title"], xT = ["title", "aria-pressed"], LT = { class: "input-toolbar-right" }, IT = { class: "model-select-shell" }, OT = { class: "chat-model-option" }, $T = { class: "chat-model-option-name" }, RT = { class: "input-hint" }, MT = ["disabled", "title", "aria-label"], PT = ["disabled", "title", "aria-label"], NT = 96, DT = 4096, zT = 90, BT = 1e3, FT = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Nr(), {
      attachments: n,
      attachmentPicking: o,
      attachmentStatusText: r,
      handleAttachmentDrop: s,
      handleComposerPaste: a,
      pickAttachmentFiles: i,
      removeAttachment: c
    } = Pk(), {
      clearMarkdownState: u,
      discardStreamingMarkdown: d,
      handleMarkdownClick: m,
      messageAnswer: g,
      messageReasoning: w,
      recordReasoningProgress: h,
      renderMessageMarkdown: b
    } = f2(), C = P(""), k = P([]), M = P(""), j = P(!1), L = P(""), I = P(null), O = P(!1), R = P(!1), K = P(!1), F = P(!1), ne = P(!1), H = P(!1), se = P(!1), de = P(!1), ce = P(!0), $ = P(!1), V = P(null), B = io(null);
    let ue = !1, fe = null, Te = !1, De = !1, Ue = null;
    const ve = P(null), W = P(null), U = P(""), me = P(null), Ie = P(null), ee = P(null), X = S({
      get: () => !!ee.value,
      set: (p) => {
        p || (ee.value = null);
      }
    }), Ve = P(Date.now());
    let ze = null, ut = null, Ge = null, Lt = !1, bt = null, qe = null, yt = !1, rt = 0, wt = null;
    const Qe = /* @__PURE__ */ new WeakMap(), ct = (p) => {
      const y = p.querySelector(".chat-item-title-text");
      if (!y) return;
      const G = y.scrollWidth - p.clientWidth > 2, te = y.scrollWidth + 24, T = Math.max(5, te / 34);
      p.style.setProperty("--chat-title-loop-distance", `${te}px`), p.style.setProperty("--chat-title-scroll-duration", `${T}s`), p.classList.toggle("is-overflowing", G);
    }, It = (p) => {
      window.requestAnimationFrame(() => ct(p));
    }, Bt = {
      mounted(p) {
        if (It(p), typeof ResizeObserver > "u") return;
        const y = new ResizeObserver(
          () => It(p)
        );
        y.observe(p);
        const G = p.querySelector(".chat-item-title-text");
        G && y.observe(G), Qe.set(p, y);
      },
      updated(p) {
        It(p);
      },
      beforeUnmount(p) {
        Qe.get(p)?.disconnect(), Qe.delete(p);
      }
    }, q = [
      {
        title: "localAi.quickPromptSummary",
        description: "localAi.quickPromptSummaryDesc",
        icon: $f
      },
      {
        title: "localAi.quickPromptTranslate",
        description: "localAi.quickPromptTranslateDesc",
        icon: Ff
      },
      {
        title: "localAi.quickPromptCode",
        description: "localAi.quickPromptCodeDesc",
        icon: If
      },
      {
        title: "localAi.quickPromptRegex",
        description: "localAi.quickPromptRegexDesc",
        icon: Gl
      }
    ], ke = S(
      () => (!!L.value.trim() || n.value.length > 0) && !R.value && !O.value
    ), dt = S(
      () => !!L.value.trim() && !R.value && !O.value && !V.value
    ), xe = S(() => R.value || O.value), kt = S(() => me.value?.healthy ? t("localAi.serviceHealthy") : me.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), He = S(
      () => k.value.find((p) => p.id === M.value) ?? null
    ), ft = S(
      () => He.value?.title || t("localAi.newChatTitle")
    ), mo = S(() => is(He.value)), Dn = S(() => Ck(He.value)), kn = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", zn = (p) => {
      p.type !== "image" || !p.dataUrl || (ee.value = p);
    }, Ut = () => {
      ee.value = null;
    }, Bn = (p) => {
      ee.value?.id === p && Ut(), c(p);
    }, Ot = S(
      () => kn(U.value) || kn(me.value?.modelPath) || kn(ve.value?.modelPath) || t("localAi.localModel")
    ), _t = S(() => W.value?.mainModels ?? []), _n = S(() => !!ve.value?.mmprojPath), Tn = S(
      () => ve.value?.ctxSize ?? me.value?.ctxSize ?? 4096
    ), ho = S(() => {
      const p = Tn.value, y = ve.value?.maxTokens ?? 0;
      return y > 0 ? Math.min(
        Math.max(y, 512),
        Math.max(512, p - 512)
      ) : Math.min(
        Math.max(DT, Math.floor(p * 0.5)),
        Math.max(512, p - 512)
      );
    }), eo = S(
      () => Math.max(512, Tn.value - ho.value)
    ), sn = S(() => {
      const p = Ot.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(p);
    }), Fn = S(() => {
      const p = C.value.trim().toLowerCase();
      return k.value.filter(
        (y) => !p || y.title.toLowerCase().includes(p) || y.messages.some(
          (G) => !rr(G) && G.content.toLowerCase().includes(p)
        )
      ).slice().sort((y, G) => G.updatedAt.localeCompare(y.updatedAt));
    }), to = () => {
      const p = I.value;
      if (!p) return;
      p.style.height = "auto";
      const y = p.scrollHeight, G = Number.parseFloat(
        window.getComputedStyle(p).maxHeight
      ), te = Number.isFinite(G) ? G : y;
      p.style.height = `${Math.min(y, te)}px`, p.style.overflowY = y > te ? "auto" : "hidden";
    }, an = () => {
      if (!ue || xe.value) {
        De = !0;
        return;
      }
      De = !1, be();
    }, jn = (p, y = !1) => {
      if (typeof p != "string" || !p.trim()) return;
      const G = p.trim();
      if (!ue || y && xe.value) {
        fe = G, y && (Te = !0);
        return;
      }
      y && (be(), Ue = G), L.value = G, De = !1, localStorage.removeItem(Tl), Ze(() => {
        to(), I.value?.focus();
      });
    }, Ro = async () => {
      try {
        const p = await Ye("take_pending_local_ai_prompt"), y = typeof p == "string" ? p.trim() : "";
        return y && P2(localStorage, y), y;
      } catch (p) {
        return Et.warn("[LocalAI] take pending prompt failed", p), "";
      }
    }, Oe = async () => {
      try {
        const p = await Ye("take_pending_local_ai_new_chat");
        return p && N2(localStorage), p;
      } catch (p) {
        return Et.warn("[LocalAI] take pending new chat failed", p), !1;
      }
    }, ln = (p) => {
      const y = p.detail;
      Ro().then((G) => {
        const te = typeof y == "string" ? y.trim() : "", T = G || te;
        !T || !(G || ca(localStorage)) && T === Ue || jn(T, !0);
      });
    }, Mo = () => {
      Oe().then((p) => {
        p && an();
      });
    }, Po = () => {
      if (!(!ue || xe.value || !fe && !De)) {
        if (fe) {
          const p = fe, y = Te;
          fe = null, Te = !1, jn(p, y);
          return;
        }
        an();
      }
    }, cn = async () => {
      await Ze(), to(), I.value?.focus();
    };
    pe(L, to, { flush: "post" }), pe(xe, (p) => {
      p || Po();
    }), pe(
      L,
      (p) => {
        if (!ue) return;
        p.trim() ? localStorage.setItem(_r, p) : localStorage.removeItem(_r);
      },
      { flush: "sync" }
    );
    const No = (p) => {
      L.value = t(p), cn();
    }, go = async (p, y) => {
      const G = $2(
        p,
        y
      ), te = await ip(
        {
          messages: [
            {
              role: "system",
              content: G.systemPrompt
            },
            { role: "user", content: G.userPrompt }
          ],
          temperature: y ? 0.05 : 0.1,
          enableThinking: !1,
          maxTokens: G.maxTokens,
          context: {
            items: [
              {
                kind: "selection",
                content: p,
                source: "local-ai.prompt-enhancement"
              }
            ]
          }
        },
        { providerId: wo, capability: "chat" }
      );
      return R2(te.content);
    }, lr = async () => {
      const p = L.value.trim();
      if (!(!p || !dt.value)) {
        O.value = !0;
        try {
          let y = await go(p, !1);
          if (Mc(p, y) || (y = await go(p, !0)), !y) throw new Error(t("localAi.enhancePromptEmpty"));
          if (!Mc(p, y))
            throw new Error(t("localAi.enhancePromptLanguageMismatch"));
          L.value = y, await cn();
        } catch (y) {
          Ee.msg(`${t("localAi.enhancePromptFailed")}: ${String(y)}`, "error");
        } finally {
          O.value = !1;
        }
      }
    }, Tt = () => t("localAi.now"), x = () => {
      const p = (/* @__PURE__ */ new Date()).toISOString(), y = {
        id: yo("root"),
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
        updatedAtLabel: Tt(),
        currentNodeId: y.id,
        messages: [y]
      };
    }, Z = () => {
      const p = Ie.value;
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= NT : !0;
    }, ge = () => {
      const p = Z();
      p && (ce.value = !0), $.value = !p && !ce.value;
    }, Be = () => {
      Ge === null || Lt || (window.cancelAnimationFrame(Ge), Ge = null);
    }, Je = () => {
      ce.value = !1, $.value = !Z(), Be();
    }, Ft = () => {
      const p = Ie.value;
      p && (yt && p.scrollTop < rt - 1 && Je(), rt = p.scrollTop), ge();
    }, $t = (p) => {
      p.deltaY >= 0 || (Je(), window.requestAnimationFrame(ge));
    }, At = (p) => {
      const y = Ie.value;
      if (!y) return;
      const G = y.getBoundingClientRect(), te = Math.max(12, y.offsetWidth - y.clientWidth);
      p.clientX < G.right - te || (yt = !0, rt = y.scrollTop, Be());
    }, Gt = () => {
      yt = !1, ge();
    }, Do = (p) => {
      wt = p.touches[0]?.clientY ?? null;
    }, Vs = (p) => {
      const y = p.touches[0]?.clientY;
      y === void 0 || wt === null || (y > wt && Je(), wt = y);
    }, Wr = () => {
      wt = null, ge();
    }, Ur = () => {
      if (!bt) return;
      const p = Ie.value?.querySelector(".assistant-card--streaming") ?? null;
      p !== qe && (qe && bt.unobserve(qe), qe = p, qe && bt.observe(qe));
    }, Rt = async (p = {}) => {
      await Ze(), Ur(), !(!Ie.value || !p.force && !ce.value) && (Lt = Lt || p.force === !0, Ge === null && (Ge = window.requestAnimationFrame(() => {
        Ge = null;
        const G = Ie.value, te = Lt;
        if (Lt = !1, !G || !te && !ce.value) return;
        const T = Math.max(0, G.scrollHeight - G.clientHeight);
        Math.abs(G.scrollTop - T) > 1 && (G.scrollTop = T), ge();
      })));
    }, no = () => {
      ce.value = !0, Rt({ force: !0 });
    }, ae = async () => {
      try {
        ve.value = await Fc(), U.value = ve.value.modelPath ?? "", W.value = await jc(ve.value), sn.value || (se.value = !1);
      } catch (p) {
        Et.warn("[LocalAI] refresh chat config failed", p);
      }
    }, v = async () => {
      if (!K.value) {
        K.value = !0;
        try {
          me.value = await Ma();
        } catch (p) {
          Et.warn("[LocalAI] refresh chat status failed", p);
        } finally {
          K.value = !1;
        }
      }
    }, N = async () => {
      try {
        const p = await Xf();
        if (k.value = p.map((y) => {
          const G = y.messages?.length ? y.messages : y.turns.map((T) => ({
            id: T.id,
            role: T.role,
            content: T.content,
            createdAt: T.createdAt
          })), te = Sk(
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
        }), !k.value.some((y) => y.id === M.value)) {
          const y = k.value[0]?.id ?? "";
          y !== M.value && (L.value = "", n.value = [], Ut()), M.value = y;
        }
      } catch (p) {
        Et.warn("[LocalAI] refresh histories failed", p);
      }
    }, Q = async () => {
      xe.value || await Promise.all([ae(), v(), N()]);
    }, we = async (p) => {
      if (!p) return;
      const y = is(p).map((G) => ({
        id: G.id,
        role: G.role,
        content: G.content,
        createdAt: G.createdAt
      }));
      await Jf({
        id: p.id,
        title: p.title,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        turns: y,
        currentNodeId: p.currentNodeId,
        messages: p.messages
      });
    };
    function be() {
      if (xe.value) return;
      const p = x();
      k.value.unshift(p), M.value = p.id, L.value = "", n.value = [], Ut(), cn();
    }
    const Me = () => {
      if (He.value) return;
      const p = x();
      k.value.unshift(p), M.value = p.id;
    }, Mt = (p) => {
      if (xe.value) return;
      z2(localStorage), M.value !== p && (L.value = "", n.value = [], Ut()), M.value = p;
      const y = He.value;
      y && !y.currentNodeId && (y.currentNodeId = Vr(y.messages, jr(y.messages)?.id) ?? null), ce.value = !0, Rt({ force: !0 });
    }, qt = async (p) => {
      if (xe.value) return;
      const y = M.value === p;
      k.value = k.value.filter((G) => G.id !== p);
      try {
        await ep(p);
      } catch (G) {
        Et.warn("[LocalAI] delete history failed", G), await N(), Ee.msg(`${t("common.operationFailed")}: ${String(G)}`, "error");
        return;
      }
      y && (M.value = k.value[0]?.id ?? "", L.value = "", n.value = [], Ut());
    }, Kt = async () => {
      if (!(xe.value || F.value)) {
        F.value = !0;
        try {
          await tp(), k.value = [], M.value = "", C.value = "", L.value = "", n.value = [], ne.value = !1, Ut(), u(), Ee.msg(t("localAi.clearAllChatsSuccess"));
        } catch (p) {
          Et.warn("[LocalAI] clear histories failed", p), Ee.msg(`${t("common.operationFailed")}: ${String(p)}`, "error");
        } finally {
          F.value = !1;
        }
      }
    }, ir = async () => {
      if (!ve.value || !U.value) return;
      const p = {
        ...ve.value,
        modelPath: U.value
      };
      try {
        ve.value = await rs(p), me.value?.running && (me.value = await Hc()), Ee.msg(t("localAi.modelChanged"));
      } catch (y) {
        await ae(), Ee.msg(`${t("localAi.configSaveFailed")}: ${y}`, "error");
      }
    }, st = (p) => !!g(p.content), zo = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !st(p)), Gr = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const y = p.reasoningEndedAt ?? (p.streaming ? Ve.value : Date.now());
      return Math.max(0, (y - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, Hd = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Gr(p)
    }), Vn = (p) => new Date(
      p.createdAt || He.value?.updatedAt || Date.now()
    ), Al = (p) => Vn(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Wd = (p, y) => Vn(p).toDateString() === Vn(y).toDateString(), Sl = (p) => Vn(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Ud = (p) => {
      const y = Dn.value[p]?.message;
      if (!y) return !1;
      if (p === 0) return !Sl(y);
      const G = Dn.value[p - 1]?.message;
      return G ? Wd(G, y) ? Vn(y).getTime() - Vn(G).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, Gd = (p) => {
      const y = Vn(p), G = y.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), te = y.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Sl(p) ? te : `${G} ${te}`;
    }, qd = (p) => p.streaming ? zo(p) ? t("localAi.thinking") : t("localAi.generating") : Al(p), Kd = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Zd = (p = He.value) => {
      const y = kk(), G = or([y]), te = Math.max(
        512,
        eo.value - G
      );
      return [
        y,
        ...Ak(
          is(p).filter((T) => !T.streaming && T.role !== "system").map((T) => ({
            role: T.role,
            content: T.role === "user" ? yk(T) : T.content
          })),
          te,
          t("localAi.previousAnswerTail")
        )
      ];
    }, Yd = () => vk(ve.value?.maxTokens ?? 0), Cl = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? ve.value?.ctxSize ?? me.value?.ctxSize ?? 4096
    ), El = (p) => {
      const y = Ve.value, G = p.stats?.promptTokens ?? p.promptTokens ?? 0, te = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? na(p.content) : Td(p.content)), T = Cl(p), _e = Math.min(
        p.stats?.totalTokens ?? G + te,
        T
      ), le = Math.max(
        0,
        (p.stats?.generationTimeMs ?? p.elapsedMs ?? y - Vn(p).getTime()) / 1e3
      ), Ae = p.stats?.tokensPerSecond ?? (le > 0 ? te / le : 0);
      return {
        context: _e,
        contextMax: T,
        contextPercent: Math.min(100, Math.round(_e / T * 100)),
        output: te,
        outputMax: (ve.value?.maxTokens ?? 0) > 0 ? String(ve.value?.maxTokens) : "∞",
        seconds: le.toFixed(1),
        speed: Ae.toFixed(1)
      };
    }, Xd = S(() => (Ve.value, new Map(
      Dn.value.map(({ message: p }) => [
        p.id,
        El(p)
      ])
    ))), oo = (p) => Xd.value.get(p.id) ?? El(p), xl = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : p.stats?.finishReason === "length" ? (p.stats?.totalTokens ?? oo(p).context) >= Cl(p) - 8 ? t("localAi.contextLimitReached") : t("localAi.outputLimitReached") : "", Ll = (p) => {
      const y = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(y) ? t("localAi.contextExceeded") : y;
    }, Qd = (p) => {
      const y = p.replace(/\s+/g, " ").trim();
      if (y.length < 900) return !1;
      const te = y.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Ae) => Ae.toLowerCase()) ?? [];
      if (te.length < 140) return !1;
      const T = te.slice(-120), _e = /* @__PURE__ */ new Map();
      for (const Ae of T) _e.set(Ae, (_e.get(Ae) ?? 0) + 1);
      if (_e.size / T.length < 0.12 && [..._e.values()].some((Ae) => Ae >= 56))
        return !0;
      for (let Ae = 1; Ae <= 4; Ae += 1) {
        const Ce = te.slice(-Ae).join("\0");
        let Hn = 1;
        for (let jt = te.length - Ae * 2; jt >= 0 && te.slice(jt, jt + Ae).join("\0") === Ce; jt -= Ae)
          Hn += 1;
        if (Hn >= Math.max(24, Math.ceil(72 / Ae))) return !0;
      }
      return !1;
    }, Il = () => {
      ut || (Ve.value = Date.now(), ut = setInterval(() => {
        Ve.value = Date.now();
      }, BT));
    }, Hs = () => {
      ut && (clearInterval(ut), ut = null, Ve.value = Date.now());
    }, Ol = (p) => {
      const y = Wc();
      return H.value = !1, V.value = y, B.value = p, y;
    }, qr = (p) => {
      p && V.value !== p || (V.value = null, B.value = null);
    }, $l = (p, y) => {
      p.streaming = !1, p.stopped = !0, p.interrupted = !1, p.error = "", p.reasoningStartedAt && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()), y !== void 0 && (p.elapsedMs = y), d(p.id), Ve.value = Date.now();
    }, Rl = async (p, y, G) => {
      const te = performance.now();
      let T = Zd(y), _e = "", le = null, Ae = null, Ce = !1, Hn = !1;
      if (H.value) {
        $l(p, performance.now() - te), qr(G);
        return;
      }
      T = _k(T), p.promptTokens = or(T), p.contextSize = Tn.value;
      const jt = async () => {
        if (!_e) {
          le = null, Ae?.(), Ae = null;
          return;
        }
        const ht = H.value ? _e.length : _e.length > 4e3 ? 900 : _e.length > 1200 ? 520 : _e.length > 240 ? 180 : 64;
        if (p.content += _e.slice(0, ht), _e = _e.slice(ht), p.estimatedCompletionTokens = na(
          p.content
        ), !Hn && !H.value && Qd(p.content) && (Hn = !0, H.value = !0, p.repetitionStopped = !0, qs(G).catch(
          (un) => Et.warn("[LocalAI] repetition stop failed", un)
        )), await Rt(), !_e) {
          le = null, Ae?.(), Ae = null;
          return;
        }
        le = window.setTimeout(() => {
          jt().catch(
            (un) => Et.warn("[LocalAI] stream pump failed", un)
          );
        }, zT);
      }, Ws = (ht) => {
        ht && (h(p, ht), _e += ht, le === null && (le = window.setTimeout(() => {
          jt().catch(
            (un) => Et.warn("[LocalAI] stream pump failed", un)
          );
        }, 32)));
      }, jl = async () => {
        !_e && le === null || await new Promise((ht) => {
          Ae = ht;
        });
      }, Bo = await Yf(
        {
          messages: T,
          maxTokens: Yd(),
          enableThinking: p.allowThinking === !0
        },
        (ht) => {
          H.value || (Ce = !0, Ws(ht));
        },
        {
          requestId: G,
          onStats: (ht) => {
            const un = bk(p.stats, ht);
            p.stats = un, un.ctxSize && (p.contextSize = un.ctxSize), un.completionTokens !== void 0 && (p.estimatedCompletionTokens = un.completionTokens), Ve.value = Date.now();
          }
        }
      ).catch(async (ht) => {
        throw await jl(), ht;
      });
      if (!Ce)
        Ws(Bo.content);
      else if (!H.value) {
        const ht = p.content.length + _e.length;
        Bo.content.length > ht && Ws(Bo.content.slice(ht));
      }
      await jl(), !H.value && Bo.content && p.content !== Bo.content && (p.content = Bo.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? na(p.content), d(p.id), p.streaming = !1, p.elapsedMs = performance.now() - te, p.stopped = H.value, p.interrupted = !1, p.error = "", Ve.value = Date.now(), qr(G);
    }, Jd = async () => {
      const p = V.value;
      if (!R.value || H.value) return;
      H.value = !0;
      const y = B.value;
      if (y && $l(
        y,
        Math.max(0, Date.now() - Vn(y).getTime())
      ), !!p)
        try {
          await qs(p);
        } catch (G) {
          Et.warn("[LocalAI] cancel stream failed", G);
        }
    }, ef = () => {
      if (!L.value.trim() && !n.value.length) return !1;
      if (n.value.find(
        (te) => te.status === "pending"
      ))
        return Ee.msg(t("localAi.attachmentPendingBlock"), "warning"), !1;
      const y = n.value.find(
        (te) => te.status === "error" || te.type === "unsupported"
      );
      return y ? (Ee.msg(
        `${t("localAi.attachmentErrorBlock")}: ${y.name}`,
        "warning"
      ), !1) : n.value.some(
        (te) => te.type === "image"
      ) && !_n.value ? (Ee.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, Ml = async () => {
      const p = L.value.trim();
      if (xe.value || !ef()) return;
      Me();
      const y = (/* @__PURE__ */ new Date()).toISOString(), G = ea(n.value), te = p || G[0]?.name || "", T = He.value;
      if (!T) return;
      const _e = oa(T, {
        id: yo("user"),
        role: "user",
        content: p,
        createdAt: y,
        attachments: G
      }), le = oa(T, {
        id: yo("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: _e.id,
        streaming: !0,
        allowThinking: se.value && sn.value,
        contextSize: Tn.value
      });
      L.value = "", n.value = [], R.value = !0;
      const Ae = Ol(le);
      Il(), await Rt({ force: !0 });
      const Ce = performance.now();
      try {
        await Rl(le, T, Ae), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T)), await v();
      } catch (Hn) {
        if (H.value)
          T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T);
        else {
          L.value = p, n.value = G;
          const jt = Ll(Hn);
          Ee.msg(`${t("localAi.chatFailed")}: ${jt}`, "error"), le.error = jt, le.interrupted = !!le.content.trim(), le.interrupted || (le.content = jt), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T));
        }
        le.streaming = !1, d(le.id), le.elapsedMs = performance.now() - Ce;
      } finally {
        R.value = !1, qr(Ae), Hs(), await Rt();
      }
    }, tf = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), Ml());
    }, Pl = (p) => {
      (p.ctrlKey || p.metaKey) && p.key.toLowerCase() === "n" && !p.shiftKey && !p.altKey && (p.preventDefault(), be());
    }, nf = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, of = (p) => {
      const y = new Date(p), G = /* @__PURE__ */ new Date(), te = G.getTime() - y.getTime(), T = 24 * 60 * 60 * 1e3;
      return y.toDateString() === G.toDateString() ? y.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : te < T * 2 ? t("localAi.yesterday") : te < T * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(te / T))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(te / (T * 7)))
      });
    }, Nl = async (p) => {
      try {
        await navigator.clipboard.writeText(p.content), Ee.msg(t("localAi.copied"));
      } catch (y) {
        Ee.msg(`${t("common.operationFailed")}: ${y}`, "error");
      }
    }, Dl = async (p) => {
      if (R.value) return;
      const y = He.value;
      if (!y) return;
      const G = xk(
        y.messages,
        y.currentNodeId,
        p
      );
      if (!G) return;
      const te = new Set(
        y.messages.filter((Ce) => G.deletedIds.has(Ce.id)).flatMap((Ce) => Ce.attachments ?? []).map((Ce) => Ce.id)
      );
      ee.value && te.has(ee.value.id) && Ut();
      const T = y.messages, _e = y.currentNodeId, le = y.updatedAt, Ae = y.updatedAtLabel;
      if (y.messages = G.messages, y.currentNodeId = G.currentNodeId, !y.messages.some((Ce) => !rr(Ce))) {
        await qt(y.id);
        return;
      }
      y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString();
      try {
        await we(y);
      } catch (Ce) {
        y.messages = T, y.currentNodeId = _e, y.updatedAt = le, y.updatedAtLabel = Ae, Et.warn("[LocalAI] delete message failed", Ce), Ee.msg(`${t("common.operationFailed")}: ${String(Ce)}`, "error");
      }
    }, zl = (p) => {
      R.value || (L.value = p.content, n.value = ea(p.attachments), He.value && p.parentId && (He.value.currentNodeId = p.parentId), cn());
    }, Bl = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), Fl = (p, y) => {
      if (R.value) return;
      const G = He.value;
      if (!G) return;
      const te = p.siblingCurrentIndex + y, T = p.siblingLeafNodeIds[te];
      T && (G.currentNodeId = T, ce.value = !0, Rt({ force: !0 }));
    }, rf = async (p) => {
      const y = He.value;
      if (!y || R.value) return;
      const G = y.messages.find((Ce) => Ce.id === p);
      if (!G || G.role !== "assistant") return;
      const te = Sd(y.messages, G.id);
      if (!te.length) return;
      const T = (/* @__PURE__ */ new Date()).toISOString(), _e = /* @__PURE__ */ new Map(), le = te.map((Ce, Hn) => {
        const jt = yo(Hn === 0 ? "root" : Ce.role);
        return _e.set(Ce.id, jt), {
          ...Ce,
          id: jt,
          parentId: Ce.parentId ? _e.get(Ce.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: ea(Ce.attachments)
        };
      });
      for (let Ce = 0; Ce < le.length - 1; Ce += 1)
        le[Ce].childIds = [le[Ce + 1].id];
      const Ae = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${y.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: T,
        updatedAt: T,
        updatedAtLabel: Tt(),
        currentNodeId: le.at(-1)?.id ?? null,
        messages: le
      };
      k.value.unshift(Ae), M.value = Ae.id, L.value = "", n.value = [], ce.value = !0, await we(Ae), await Rt({ force: !0 }), Ee.msg(t("localAi.branchCreated"));
    }, sf = async (p) => {
      const y = He.value;
      if (!y || R.value) return;
      const G = y.messages.find((le) => le.id === p);
      if (!G || G.role !== "assistant" || !G.parentId) return;
      y.currentNodeId = G.parentId;
      const te = oa(y, {
        id: yo("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: G.parentId,
        streaming: !0,
        allowThinking: se.value && sn.value
      });
      R.value = !0;
      const T = Ol(te);
      Il(), await Rt({ force: !0 });
      const _e = performance.now();
      try {
        await Rl(te, y, T), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
      } catch (le) {
        if (H.value)
          y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        else {
          const Ae = Ll(le);
          Ee.msg(`${t("localAi.chatFailed")}: ${Ae}`, "error"), te.error = Ae, te.interrupted = !!te.content.trim(), te.interrupted || (te.content = Ae), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        }
        te.streaming = !1, d(te.id), te.elapsedMs = performance.now() - _e;
      } finally {
        R.value = !1, qr(T), Hs(), await Rt();
      }
    };
    return ot(async () => {
      window.addEventListener("local-ai-prompt-ready", ln), window.addEventListener(
        "local-ai-new-chat-requested",
        Mo
      ), jn(
        localStorage.getItem(_r),
        ca(localStorage)
      ), to(), typeof ResizeObserver < "u" && (bt = new ResizeObserver(() => {
        ce.value && Rt();
      })), window.addEventListener("pointerup", Gt), window.addEventListener("pointercancel", Gt), window.addEventListener("keydown", Pl);
      try {
        await Q();
      } finally {
        const [p, y] = await Promise.all([
          Ro(),
          Oe()
        ]);
        ue = !0;
        const G = !!p || Te || ca(localStorage), te = p || fe || localStorage.getItem(_r);
        fe = null, Te = !1, te ? jn(te, G) : (y || De || D2(localStorage)) && an();
      }
      ze = setInterval(() => {
        v().catch(
          (p) => Et.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), pe(sn, (p) => {
      p || (se.value = !1);
    }), Oa(() => {
      ue = !1, fe = null, Te = !1, De = !1, Ue = null, window.removeEventListener("local-ai-prompt-ready", ln), window.removeEventListener(
        "local-ai-new-chat-requested",
        Mo
      ), ze && clearInterval(ze), Ge !== null && (window.cancelAnimationFrame(Ge), Ge = null), bt?.disconnect(), bt = null, qe = null, window.removeEventListener("pointerup", Gt), window.removeEventListener("pointercancel", Gt), window.removeEventListener("keydown", Pl), V.value && qs(V.value), u(), Hs();
    }), (p, y) => {
      const G = pd, te = fd;
      return A(), D(
        "main",
        {
          class: z([
            "local-ai-chat-shell",
            l(j) ? "local-ai-chat-shell--sidebar-collapsed" : "",
            l(R) ? "local-ai-chat-shell--sending" : ""
          ])
        },
        [
          f(
            "aside",
            {
              class: z([
                "chat-sidebar",
                l(j) ? "chat-sidebar--collapsed" : ""
              ])
            },
            [
              f("header", B2, [
                f("div", F2, [
                  f("div", j2, [
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
                  title: l(j) ? l(t)("localAi.expandSidebar") : l(t)("localAi.collapseSidebar"),
                  "aria-pressed": l(j),
                  onClick: y[0] || (y[0] = (T) => j.value = !l(j))
                }, [
                  _(l(Ul), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, V2)
              ]),
              f("div", H2, [
                f("button", {
                  class: "sidebar-new-chat-btn",
                  type: "button",
                  disabled: l(xe),
                  onClick: be
                }, [
                  _(l(Us), {
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
                ], 8, W2),
                f("label", U2, [
                  _(l(Df), {
                    theme: "outline",
                    size: "16"
                  }),
                  lt(f("input", {
                    "onUpdate:modelValue": y[1] || (y[1] = (T) => Qt(C) ? C.value = T : null),
                    placeholder: l(t)("localAi.searchHistory")
                  }, null, 8, G2), [
                    [Lr, l(C)]
                  ]),
                  l(C) ? (A(), D(
                    "span",
                    q2,
                    E(l(Fn).length),
                    1
                    /* TEXT */
                  )) : Y("v-if", !0)
                ])
              ]),
              f("section", K2, [
                f("div", Z2, [
                  f(
                    "div",
                    Y2,
                    E(l(t)("localAi.recent")),
                    1
                    /* TEXT */
                  ),
                  f("div", X2, [
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("localAi.clearAllChats"),
                      disabled: l(xe) || l(F) || !l(k).length,
                      onClick: y[2] || (y[2] = (T) => ne.value = !0)
                    }, [
                      _(l(cr), {
                        theme: "outline",
                        size: "14"
                      })
                    ], 8, Q2),
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("plugins.refresh"),
                      disabled: l(xe) || l(K) || l(F),
                      onClick: Q
                    }, [
                      _(l(ur), {
                        class: z({ "animate-spin": l(K) }),
                        theme: "outline",
                        size: "14"
                      }, null, 8, ["class"])
                    ], 8, J2)
                  ])
                ]),
                l(Fn).length ? (A(), D("div", e4, [
                  (A(!0), D(
                    at,
                    null,
                    Cn(l(Fn), (T) => (A(), D("div", {
                      key: T.id,
                      class: z([
                        "chat-list-item",
                        l(M) === T.id ? "active" : "",
                        l(xe) ? "disabled" : ""
                      ]),
                      role: "button",
                      tabindex: l(xe) ? -1 : 0,
                      "aria-disabled": l(xe),
                      onClick: (_e) => Mt(T.id),
                      onKeydown: En(Ke((_e) => Mt(T.id), ["prevent"]), ["enter"])
                    }, [
                      f("span", n4, [
                        lt((A(), D("span", o4, [
                          f("span", r4, [
                            f(
                              "span",
                              s4,
                              E(T.title),
                              1
                              /* TEXT */
                            ),
                            f(
                              "span",
                              a4,
                              E(T.title),
                              1
                              /* TEXT */
                            )
                          ])
                        ])), [
                          [Bt]
                        ]),
                        f(
                          "span",
                          l4,
                          E(of(T.updatedAt)),
                          1
                          /* TEXT */
                        )
                      ]),
                      f("button", {
                        class: "chat-item-delete",
                        type: "button",
                        title: l(t)("common.delete"),
                        disabled: l(xe),
                        onClick: Ke((_e) => qt(T.id), ["stop"])
                      }, [
                        _(l(cr), {
                          theme: "outline",
                          size: "13"
                        })
                      ], 8, i4)
                    ], 42, t4))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (A(), D(
                  "div",
                  c4,
                  E(l(t)("common.empty")),
                  1
                  /* TEXT */
                ))
              ]),
              f("footer", u4, [
                f("div", d4, [
                  f("span", f4, [
                    _(l(Gs), {
                      theme: "outline",
                      size: "15"
                    })
                  ]),
                  f("span", p4, [
                    f(
                      "strong",
                      null,
                      E(l(kt)),
                      1
                      /* TEXT */
                    ),
                    f(
                      "small",
                      null,
                      E(l(me)?.healthy ? l(Ot) : l(t)("localAi.onDemandHint")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f(
                    "span",
                    {
                      class: z([
                        "service-status-dot",
                        l(me)?.healthy ? "ready" : "stopped"
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
                  onClick: nf
                }, [
                  _(l(zc), {
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
                  _(l(ql), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ])
            ],
            2
            /* CLASS */
          ),
          f("section", m4, [
            f("header", h4, [
              f("div", g4, [
                l(j) ? (A(), D("button", {
                  key: 0,
                  class: "panel-sidebar-toggle",
                  type: "button",
                  title: l(t)("localAi.expandSidebar"),
                  onClick: y[3] || (y[3] = (T) => j.value = !1)
                }, [
                  _(l(Ul), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, v4)) : Y("v-if", !0),
                f("div", b4, [
                  _(l(Gs), {
                    theme: "outline",
                    size: "18"
                  })
                ]),
                f("div", y4, [
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
                    E(l(ft)),
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
                ref: Ie,
                class: "message-list",
                onScroll: Ft,
                onWheelPassive: $t,
                onPointerdown: At,
                onTouchstartPassive: Do,
                onTouchmovePassive: Vs,
                onTouchend: Wr
              },
              [
                l(mo).length ? Y("v-if", !0) : (A(), D("section", w4, [
                  f("div", k4, [
                    f("div", _4, [
                      _(l(Nf), {
                        theme: "outline",
                        size: "30"
                      })
                    ]),
                    f("span", T4, [
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
                  f("div", A4, [
                    f("div", S4, [
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
                    f("div", C4, [
                      (A(), D(
                        at,
                        null,
                        Cn(q, (T) => f("button", {
                          key: T.title,
                          class: "quick-prompt-card",
                          type: "button",
                          onClick: (_e) => No(T.title)
                        }, [
                          f("span", x4, [
                            (A(), re(Jt(T.icon), {
                              theme: "outline",
                              size: "17"
                            }))
                          ]),
                          f("span", L4, [
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
                          _(l(ql), {
                            theme: "outline",
                            size: "14"
                          })
                        ], 8, E4)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ])
                ])),
                (A(!0), D(
                  at,
                  null,
                  Cn(l(Dn), (T, _e) => (A(), D(
                    at,
                    {
                      key: T.message.id
                    },
                    [
                      Ud(_e) ? (A(), D("div", I4, [
                        f(
                          "span",
                          null,
                          E(Gd(T.message)),
                          1
                          /* TEXT */
                        )
                      ])) : Y("v-if", !0),
                      f(
                        "article",
                        {
                          class: z(["message-row", `message-row--${T.message.role}`])
                        },
                        [
                          f("div", O4, [
                            T.message.role === "assistant" ? (A(), re(l(Gs), {
                              key: 0,
                              theme: "outline",
                              size: "18"
                            })) : (A(), D(
                              "span",
                              $4,
                              E(l(t)("localAi.youShort")),
                              1
                              /* TEXT */
                            ))
                          ]),
                          f("div", R4, [
                            T.message.role === "user" ? (A(), D(
                              at,
                              { key: 0 },
                              [
                                f("div", M4, [
                                  T.message.content ? (A(), D(
                                    "div",
                                    P4,
                                    E(T.message.content),
                                    1
                                    /* TEXT */
                                  )) : Y("v-if", !0),
                                  T.message.attachments?.length ? (A(), D("div", N4, [
                                    (A(!0), D(
                                      at,
                                      null,
                                      Cn(T.message.attachments, (le) => (A(), D(
                                        "div",
                                        {
                                          key: le.id,
                                          class: z([
                                            "message-attachment-chip",
                                            le.type === "image" && le.dataUrl ? "message-attachment-chip--image" : ""
                                          ])
                                        },
                                        [
                                          le.type === "image" && le.dataUrl ? (A(), D("button", {
                                            key: 0,
                                            class: "attachment-image-preview-btn",
                                            type: "button",
                                            title: le.name,
                                            "aria-label": l(t)("localAi.previewAttachment"),
                                            onClick: (Ae) => zn(le)
                                          }, [
                                            f("img", {
                                              src: le.dataUrl,
                                              alt: le.name
                                            }, null, 8, z4)
                                          ], 8, D4)) : (A(), D(
                                            "span",
                                            B4,
                                            E(le.type === "text" ? "TXT" : "FILE"),
                                            1
                                            /* TEXT */
                                          )),
                                          le.type === "image" && le.dataUrl ? Y("v-if", !0) : (A(), D(
                                            "span",
                                            F4,
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
                                  ])) : Y("v-if", !0)
                                ]),
                                T.message.streaming ? Y("v-if", !0) : (A(), D("div", j4, [
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Nl(T.message)
                                  }, [
                                    _(l(Hl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, V4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => zl(T.message)
                                  }, [
                                    _(l(Us), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, H4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => Dl(T.message.id)
                                  }, [
                                    _(l(cr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, W4)
                                ]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (A(), D(
                              at,
                              { key: 1 },
                              [
                                f("div", U4, [
                                  f(
                                    "span",
                                    null,
                                    E(l(Ot)),
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? (A(), D(
                                    "small",
                                    G4,
                                    E(qd(T.message)),
                                    1
                                    /* TEXT */
                                  )) : Y("v-if", !0)
                                ]),
                                f(
                                  "div",
                                  {
                                    class: z(["assistant-card", {
                                      "assistant-card--streaming": T.message.streaming
                                    }])
                                  },
                                  [
                                    T.message.content ? (A(), D("div", q4, [
                                      T.message.allowThinking && l(w)(T.message.content) ? (A(), D("details", {
                                        key: 0,
                                        class: "reasoning-panel",
                                        open: T.message.streaming && zo(T.message)
                                      }, [
                                        f("summary", null, [
                                          f("span", Z4, [
                                            _(l(Vl), {
                                              theme: "outline",
                                              size: "14"
                                            }),
                                            pt(
                                              " " + E(Hd(T.message)),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          T.message.streaming ? (A(), D(
                                            "small",
                                            Y4,
                                            E(zo(T.message) ? l(t)("localAi.thinking") : l(t)("localAi.generating")),
                                            1
                                            /* TEXT */
                                          )) : Y("v-if", !0)
                                        ]),
                                        f("div", {
                                          class: "message-content markdown-body",
                                          onClick: y[4] || (y[4] = //@ts-ignore
                                          (...le) => l(m) && l(m)(...le)),
                                          innerHTML: l(b)(T.message, "reasoning")
                                        }, null, 8, X4)
                                      ], 8, K4)) : Y("v-if", !0),
                                      l(g)(T.message.content) ? (A(), D("div", {
                                        key: 1,
                                        class: "message-content markdown-body",
                                        onClick: y[5] || (y[5] = //@ts-ignore
                                        (...le) => l(m) && l(m)(...le)),
                                        innerHTML: l(b)(T.message, "answer")
                                      }, null, 8, Q4)) : Y("v-if", !0)
                                    ])) : (A(), D(
                                      "div",
                                      {
                                        key: 1,
                                        class: z([
                                          "message-content",
                                          T.message.stopped ? "" : "loading-text"
                                        ])
                                      },
                                      E(T.message.stopped ? l(t)("localAi.generationStopped") : Kd(T.message)),
                                      3
                                      /* TEXT, CLASS */
                                    ))
                                  ],
                                  2
                                  /* CLASS */
                                ),
                                T.message.content ? (A(), D("div", J4, [
                                  f(
                                    "span",
                                    eT,
                                    E(l(t)("localAi.contextLabel")) + ": " + E(oo(T.message).context) + "/" + E(oo(T.message).contextMax) + " (" + E(oo(T.message).contextPercent) + "%) ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    tT,
                                    E(l(t)("localAi.outputLabel")) + ": " + E(oo(T.message).output) + "/" + E(oo(T.message).outputMax),
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    nT,
                                    E(oo(T.message).seconds) + "s ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    oT,
                                    E(oo(T.message).speed) + " t/s ",
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? Y("v-if", !0) : (A(), D(
                                    "span",
                                    rT,
                                    E(Al(T.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ])) : Y("v-if", !0),
                                xl(T.message) ? (A(), D(
                                  "div",
                                  sT,
                                  E(xl(T.message)),
                                  1
                                  /* TEXT */
                                )) : Y("v-if", !0),
                                T.message.streaming ? Y("v-if", !0) : (A(), D("div", aT, [
                                  T.siblingLeafNodeIds.length > 1 ? (A(), D("div", {
                                    key: 0,
                                    class: "message-version-switcher",
                                    title: Bl(T),
                                    "aria-label": Bl(T)
                                  }, [
                                    f("button", {
                                      type: "button",
                                      disabled: T.siblingCurrentIndex <= 0,
                                      title: l(t)("localAi.previousVersion"),
                                      onClick: (le) => Fl(T, -1)
                                    }, " ‹ ", 8, iT),
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
                                      onClick: (le) => Fl(T, 1)
                                    }, " › ", 8, cT)
                                  ], 8, lT)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Nl(T.message)
                                  }, [
                                    _(l(Hl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, uT),
                                  T.message.role === "assistant" ? (A(), D("button", {
                                    key: 1,
                                    type: "button",
                                    title: l(t)("localAi.regenerate"),
                                    onClick: (le) => sf(T.message.id)
                                  }, [
                                    _(l(ur), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, dT)) : Y("v-if", !0),
                                  T.message.role === "assistant" ? (A(), D("button", {
                                    key: 2,
                                    type: "button",
                                    title: l(t)("localAi.branchChat"),
                                    onClick: (le) => rf(T.message.id)
                                  }, [
                                    _(l(Rf), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, fT)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => zl(T.message)
                                  }, [
                                    _(l(Us), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, pT),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => Dl(T.message.id)
                                  }, [
                                    _(l(cr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, mT)
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
            l($) ? (A(), D("button", {
              key: 0,
              class: "scroll-bottom-btn",
              type: "button",
              title: l(t)("localAi.jumpToLatest"),
              onClick: no
            }, [
              _(l(Of), {
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
            ], 8, hT)) : Y("v-if", !0),
            f("div", gT, [
              f(
                "form",
                {
                  class: z([
                    "chat-input-card",
                    l(de) ? "chat-input-card--focused" : "",
                    l(O) ? "chat-input-card--enhancing" : ""
                  ]),
                  onDragover: y[11] || (y[11] = Ke(() => {
                  }, ["prevent"])),
                  onDrop: y[12] || (y[12] = Ke(
                    //@ts-ignore
                    (...T) => l(s) && l(s)(...T),
                    ["prevent"]
                  )),
                  onSubmit: Ke(Ml, ["prevent"]),
                  onFocusin: y[13] || (y[13] = (T) => de.value = !0),
                  onFocusout: y[14] || (y[14] = (T) => de.value = !1)
                },
                [
                  l(n).length ? (A(), D("div", vT, [
                    (A(!0), D(
                      at,
                      null,
                      Cn(l(n), (T) => (A(), D(
                        "div",
                        {
                          key: T.id,
                          class: z([
                            "attachment-preview-item",
                            `attachment-preview-item--${T.status}`
                          ])
                        },
                        [
                          T.type === "image" && T.dataUrl ? (A(), D("button", {
                            key: 0,
                            class: "attachment-preview-image-btn",
                            type: "button",
                            title: T.name,
                            "aria-label": l(t)("localAi.previewAttachment"),
                            onClick: (_e) => zn(T)
                          }, [
                            f("img", {
                              src: T.dataUrl,
                              alt: T.name
                            }, null, 8, yT)
                          ], 8, bT)) : (A(), D(
                            "span",
                            wT,
                            E(T.type === "text" ? "TXT" : "FILE"),
                            1
                            /* TEXT */
                          )),
                          f("span", kT, [
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
                              E(l(kd)(T.size)) + " · " + E(l(r)(T)),
                              1
                              /* TEXT */
                            )
                          ]),
                          f("button", {
                            class: "attachment-remove-btn",
                            type: "button",
                            title: l(t)("common.delete"),
                            onClick: (_e) => Bn(T.id)
                          }, [
                            _(l(cr), {
                              theme: "outline",
                              size: "12"
                            })
                          ], 8, _T)
                        ],
                        2
                        /* CLASS */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : Y("v-if", !0),
                  lt(f("textarea", {
                    ref_key: "composerInputRef",
                    ref: I,
                    "onUpdate:modelValue": y[6] || (y[6] = (T) => Qt(L) ? L.value = T : null),
                    class: "chat-input",
                    rows: "1",
                    placeholder: l(t)("localAi.chatPlaceholder"),
                    readonly: l(O),
                    "aria-busy": l(O),
                    onKeydown: tf,
                    onPaste: y[7] || (y[7] = //@ts-ignore
                    (...T) => l(a) && l(a)(...T))
                  }, null, 40, TT), [
                    [Lr, l(L)]
                  ]),
                  f("div", AT, [
                    f("div", ST, [
                      f("button", {
                        class: "composer-tool-btn",
                        type: "button",
                        title: l(t)("localAi.addAttachment"),
                        disabled: l(o),
                        onClick: y[8] || (y[8] = //@ts-ignore
                        (...T) => l(i) && l(i)(...T))
                      }, [
                        l(o) ? (A(), re(l(ur), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "16"
                        })) : (A(), re(l(Mf), {
                          key: 1,
                          theme: "outline",
                          size: "16"
                        }))
                      ], 8, CT),
                      f("button", {
                        class: z([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          "composer-tool-btn--enhance",
                          l(O) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        disabled: !l(dt),
                        title: l(L).trim() ? l(t)("localAi.enhancePromptDesc") : l(t)("localAi.enhanceNeedsPrompt"),
                        onClick: lr
                      }, [
                        l(O) ? (A(), re(l(ur), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "14"
                        })) : (A(), re(l(Gl), {
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
                      ], 10, ET),
                      l(sn) ? (A(), D("button", {
                        key: 0,
                        class: z([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          l(se) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        title: l(se) ? l(t)("localAi.thinkingEnabled") : l(t)("localAi.thinkingDisabled"),
                        "aria-pressed": l(se),
                        onClick: y[9] || (y[9] = (T) => se.value = !l(se))
                      }, [
                        _(l(Vl), {
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
                      ], 10, xT)) : Y("v-if", !0)
                    ]),
                    f("div", LT, [
                      f("div", IT, [
                        _(l(Wl), {
                          theme: "outline",
                          size: "14"
                        }),
                        _(te, {
                          modelValue: l(U),
                          "onUpdate:modelValue": y[10] || (y[10] = (T) => Qt(U) ? U.value = T : null),
                          class: "chat-model-select",
                          size: "small",
                          disabled: l(R) || !l(_t).length,
                          placeholder: l(Ot),
                          "popper-class": "chat-model-select-popper",
                          onChange: ir
                        }, {
                          default: J(() => [
                            (A(!0), D(
                              at,
                              null,
                              Cn(l(_t), (T) => (A(), re(G, {
                                key: T,
                                label: kn(T),
                                value: T
                              }, {
                                default: J(() => [
                                  f("span", OT, [
                                    _(l(Wl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    f(
                                      "span",
                                      $T,
                                      E(kn(T)),
                                      1
                                      /* TEXT */
                                    ),
                                    l(U) === T ? (A(), re(l(Lf), {
                                      key: 0,
                                      class: "chat-model-option-check",
                                      theme: "outline",
                                      size: "15"
                                    })) : Y("v-if", !0)
                                  ])
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["label", "value"]))),
                              128
                              /* KEYED_FRAGMENT */
                            )),
                            l(_t).length ? Y("v-if", !0) : (A(), re(G, {
                              key: 0,
                              label: l(Ot),
                              value: ""
                            }, null, 8, ["label"]))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "disabled", "placeholder"])
                      ]),
                      f(
                        "span",
                        RT,
                        E(l(t)("localAi.inputHint")),
                        1
                        /* TEXT */
                      ),
                      l(V) ? (A(), D("button", {
                        key: 0,
                        class: z(["send-btn send-btn--stop", { "send-btn--stopping": l(H) }]),
                        type: "button",
                        disabled: l(H),
                        title: l(H) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        "aria-label": l(H) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        onClick: Jd
                      }, [
                        l(H) ? (A(), re(l(ur), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "15"
                        })) : (A(), re(l(Bf), {
                          key: 1,
                          theme: "filled",
                          size: "11"
                        }))
                      ], 10, MT)) : (A(), D("button", {
                        key: 1,
                        class: "send-btn",
                        type: "submit",
                        disabled: !l(ke),
                        title: l(t)("localAi.send"),
                        "aria-label": l(t)("localAi.send")
                      }, [
                        _(l(zf), {
                          theme: "outline",
                          size: "15"
                        })
                      ], 8, PT))
                    ])
                  ])
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ]),
          _(w2, {
            modelValue: l(X),
            "onUpdate:modelValue": y[15] || (y[15] = (T) => Qt(X) ? X.value = T : null),
            attachment: l(ee)
          }, null, 8, ["modelValue", "attachment"]),
          _(l(Jw), {
            modelValue: l(ne),
            "onUpdate:modelValue": y[16] || (y[16] = (T) => Qt(ne) ? ne.value = T : null),
            title: l(t)("localAi.clearAllChats"),
            "confirm-text": l(t)("common.delete"),
            "cancel-text": l(t)("common.cancel"),
            loading: l(F),
            type: "danger",
            onConfirm: Kt
          }, {
            default: J(() => [
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
}), jT = /* @__PURE__ */ Oo(FT, [["__scopeId", "data-v-18e26101"]]), VT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jT
}, Symbol.toStringTag, { value: "Module" })), HT = { class: "settings-panel local-ai-settings-shell" }, WT = { class: "panel-header local-ai-header" }, UT = { class: "local-ai-frame local-ai-header__inner" }, GT = { class: "local-ai-heading" }, qT = { class: "panel-title" }, KT = { class: "local-ai-desc" }, ZT = { class: "header-actions" }, YT = {
  key: 0,
  class: "panel-content local-ai-content"
}, XT = { class: "local-ai-frame" }, QT = { class: "settings-section" }, JT = { class: "settings-section__header" }, eA = { class: "status-overview" }, tA = { class: "status-list" }, nA = ["title"], oA = ["title"], rA = ["title"], sA = { class: "memory-summary__title" }, aA = { class: "memory-summary__metrics" }, lA = { class: "readiness-grid" }, iA = { class: "readiness-item" }, cA = { class: "readiness-item" }, uA = { class: "readiness-item" }, dA = { class: "readiness-item" }, fA = { class: "readiness-item" }, pA = { class: "readiness-item" }, mA = { class: "setting-row service-setting" }, hA = { class: "setting-label" }, gA = { class: "setting-title" }, vA = { class: "setting-desc" }, bA = { class: "setting-control service-control" }, yA = { class: "service-controls" }, wA = {
  key: 0,
  class: "service-url"
}, kA = { class: "settings-section" }, _A = { class: "settings-section__header" }, TA = { class: "field-stack" }, AA = ["title"], SA = { class: "setting-label" }, CA = { class: "setting-title" }, EA = { class: "setting-desc" }, xA = { class: "setting-control" }, LA = { class: "path-control" }, IA = { class: "model-pair-grid" }, OA = ["title"], $A = { class: "setting-label" }, RA = { class: "setting-title" }, MA = { class: "setting-desc" }, PA = { class: "setting-control" }, NA = ["title"], DA = { class: "setting-label" }, zA = { class: "setting-title" }, BA = { class: "setting-desc" }, FA = { class: "setting-control" }, jA = ["title"], VA = { class: "setting-label" }, HA = { class: "setting-title" }, WA = { class: "setting-desc" }, UA = { class: "setting-control" }, GA = { class: "path-control" }, qA = ["placeholder"], KA = { class: "settings-section" }, ZA = { class: "settings-section__header" }, YA = { class: "parameter-grid" }, XA = ["title"], QA = ["title"], JA = ["title"], eS = ["title"], tS = ["title"], nS = ["title"], oS = { class: "settings-section" }, rS = { class: "settings-section__header" }, sS = { class: "switch-grid" }, aS = ["title"], lS = { class: "switch-field__label" }, iS = ["title"], cS = { class: "switch-field__label" }, uS = ["title"], dS = { class: "switch-field__label" }, fS = { class: "settings-section" }, pS = { class: "settings-section__header" }, mS = { class: "switch-grid switch-grid--two" }, hS = ["title"], gS = { class: "switch-field__label" }, vS = ["title"], bS = { class: "switch-field__label" }, yS = ["title"], wS = ["title"], kS = { class: "settings-section" }, _S = { class: "settings-section__header" }, TS = { class: "parameter-grid parameter-grid--three" }, AS = ["title"], SS = ["title"], CS = ["title"], ES = ["title"], xS = ["title"], LS = ["title"], IS = ["title"], OS = ["title"], $S = {
  key: 1,
  class: "local-ai-save-bar"
}, RS = { class: "local-ai-frame settings-footer" }, MS = ["title"], PS = /* @__PURE__ */ oe({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Nr(), n = P(null), o = P(null), r = P(null), s = P(null), a = P(!1), i = P(!1), c = P(!1), u = P(!1), d = P(!1);
    let m = null;
    const g = S(() => !!s.value?.selectedModelPath), w = S(() => !!n.value?.mmprojPath), h = S({
      get: () => n.value?.modelPath ?? "",
      set: (W) => {
        n.value && (n.value.modelPath = W || void 0);
      }
    }), b = S({
      get: () => n.value?.mmprojPath ?? "",
      set: (W) => {
        n.value && (n.value.mmprojPath = W || void 0);
      }
    }), C = S(
      () => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), k = S(
      () => g.value ? t("localAi.modelReady") : s.value?.message ?? t("localAi.modelMissing")
    ), M = S(() => r.value?.healthy ? t("localAi.serviceHealthy") : r.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), j = S(
      () => o.value ? o.value.available ? "ok" : "danger" : "muted"
    ), L = S(
      () => s.value ? g.value ? "ok" : "danger" : "muted"
    ), I = S(() => r.value ? r.value.healthy ? "ok" : r.value.running ? "warn" : "danger" : "muted"), O = (W) => W.split(/[\\/]+/).pop() ?? W, R = S(() => {
      const U = O(
        n.value?.modelPath ?? s.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return U ? Number(U[1]) : 4;
    }), K = S(() => {
      const W = n.value;
      if (!W)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown"),
          level: "warn"
        };
      const U = Math.max(1.4, R.value * 0.92), me = Math.min(1, Math.max(0, W.gpuLayers) / 32), Ie = W.ctxSize / 8192 * 0.38 * (W.kvOffload ? 1 : 0.12), ee = W.batchSize / 512 * 0.18, X = U * me + Ie + ee, Ve = U * (1 - me) + W.ctxSize / 8192 * 0.22, ze = X + Ve, ut = W.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : W.ctxSize >= 32768 || W.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced"), Ge = ze >= 24 || W.ctxSize >= 32768 || W.batchSize >= 2048 ? "danger" : ze >= 16 || W.ctxSize >= 16384 || W.batchSize >= 1024 ? "warn" : "ok";
      return {
        gpuGb: X.toFixed(2),
        totalGb: ze.toFixed(2),
        bottleneck: ut,
        level: Ge
      };
    }), F = (W) => t(`localAi.paramHints.${W}`), ne = (W) => ({
      "tone-ok": W === "ok",
      "tone-warn": W === "warn",
      "tone-danger": W === "danger",
      "tone-muted": W === "muted" || !W
    }), H = (W) => ne(W ? "ok" : "danger"), se = async () => {
      o.value = await qf();
    }, de = async () => {
      r.value = await Ma();
    }, ce = async () => {
      n.value && (s.value = await jc(n.value), !n.value.modelPath && s.value.selectedModelPath && (n.value.modelPath = s.value.selectedModelPath), !n.value.mmprojPath && s.value.selectedMmprojPath && (n.value.mmprojPath = s.value.selectedMmprojPath));
    }, $ = async () => {
      a.value = !0;
      try {
        n.value = await Fc(), await Promise.all([se(), ce(), de()]);
      } catch (W) {
        Et.error("[LocalAI] refresh settings failed", W), Ee.msg(`${t("localAi.refreshFailed")}: ${W}`, "error");
      } finally {
        a.value = !1;
      }
    }, V = async () => {
      if (n.value)
        try {
          await rs(n.value);
        } catch (W) {
          Et.warn("[LocalAI] autosave failed", W);
        }
    }, B = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await rs(n.value), await Promise.all([se(), ce(), de()]), Ee.msg(t("localAi.configSaved"));
        } catch (W) {
          Ee.msg(`${t("localAi.configSaveFailed")}: ${W}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, ue = async () => {
      const W = await ka({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !W || Array.isArray(W) || !n.value || (n.value.modelDir = W, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await ce());
    }, fe = async () => {
      const W = await ka({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !W || Array.isArray(W) || !n.value || (n.value.runtimePath = W, await V(), await se());
    }, Te = async () => {
      if (n.value) {
        c.value = !0;
        try {
          await rs(n.value), r.value = await Vc(n.value), Ee.msg(t("localAi.serviceStarted"));
        } catch (W) {
          Ee.msg(`${t("localAi.serviceStartFailed")}: ${W}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, De = async () => {
      u.value = !0;
      try {
        await B(), r.value = await Hc(), Ee.msg(t("localAi.serviceRestarted"));
      } catch (W) {
        Ee.msg(`${t("localAi.serviceRestartFailed")}: ${W}`, "error");
      } finally {
        u.value = !1;
      }
    }, Ue = async () => {
      d.value = !0;
      try {
        await Kf(), await de(), Ee.msg(t("localAi.serviceStoppedMsg"));
      } catch (W) {
        Ee.msg(`${t("localAi.serviceStopFailed")}: ${W}`, "error");
      } finally {
        d.value = !1;
      }
    }, ve = () => {
      window.location.hash = "#/config/local-ai/chat";
    };
    return ot(async () => {
      await $(), m = setInterval(() => {
        de().catch(
          (W) => Et.warn("[LocalAI] status timer failed", W)
        );
      }, 15e3);
    }), Oa(() => {
      m && clearInterval(m);
    }), (W, U) => {
      const me = pd, Ie = fd, ee = rw;
      return A(), D("div", HT, [
        f("header", WT, [
          f("div", UT, [
            f("div", GT, [
              f(
                "h3",
                qT,
                E(l(t)("localAi.title")),
                1
                /* TEXT */
              ),
              f(
                "p",
                KT,
                E(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              )
            ]),
            f("div", ZT, [
              _(l(Xt), {
                size: "small",
                plain: "",
                onClick: ve
              }, {
                default: J(() => [
                  pt(
                    E(l(t)("localAi.openChat")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              _(l(Xt), {
                size: "small",
                loading: l(a),
                onClick: $
              }, {
                default: J(() => [
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
        l(n) ? (A(), D("main", YT, [
          f("div", XT, [
            f("section", QT, [
              f("div", JT, [
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
              f("div", eA, [
                f("div", tA, [
                  f("div", {
                    class: z(["status-item", ne(l(j))]),
                    title: l(C)
                  }, [
                    U[25] || (U[25] = f(
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
                  ], 10, nA),
                  f("div", {
                    class: z(["status-item", ne(l(L))]),
                    title: l(k)
                  }, [
                    U[26] || (U[26] = f(
                      "span",
                      { class: "status-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    f(
                      "span",
                      null,
                      E(l(k)),
                      1
                      /* TEXT */
                    )
                  ], 10, oA),
                  f("div", {
                    class: z(["status-item", ne(l(I))]),
                    title: l(M)
                  }, [
                    U[27] || (U[27] = f(
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
                  ], 10, rA)
                ]),
                f(
                  "div",
                  {
                    class: z(["memory-summary", ne(l(K).level)])
                  },
                  [
                    f("div", sA, [
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
                    f("div", aA, [
                      f("span", null, [
                        U[28] || (U[28] = f(
                          "span",
                          null,
                          "GPU",
                          -1
                          /* HOISTED */
                        )),
                        f(
                          "b",
                          {
                            class: z(ne(l(K).level))
                          },
                          E(l(K).gpuGb) + " GB ",
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
                            class: z(ne(l(K).level))
                          },
                          E(l(K).totalGb) + " GB ",
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
                            class: z(ne(l(K).level))
                          },
                          E(l(K).bottleneck),
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
              f("div", lA, [
                f("div", iA, [
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
                      class: z(H(l(o)?.available))
                    },
                    E(l(o)?.available ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", cA, [
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
                      class: z(H(l(g)))
                    },
                    E(l(g) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", uA, [
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
                      class: z(H(!!l(h)))
                    },
                    E(l(h) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", dA, [
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
                      class: z(H(!!l(b)))
                    },
                    E(l(b) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", fA, [
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
                      class: z(H(l(w)))
                    },
                    E(l(w) ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", pA, [
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
                      class: z(H(!!l(r)?.healthy))
                    },
                    E(l(r)?.healthy ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ]),
              f("div", mA, [
                f("div", hA, [
                  f(
                    "div",
                    gA,
                    E(l(t)("localAi.serviceControl")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "div",
                    vA,
                    E(l(t)("localAi.serviceControlDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                f("div", bA, [
                  f("div", yA, [
                    _(l(Xt), {
                      type: "primary",
                      size: "small",
                      loading: l(c),
                      disabled: l(r)?.running,
                      onClick: Te
                    }, {
                      default: J(() => [
                        pt(
                          E(l(t)("localAi.startService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"]),
                    _(l(Xt), {
                      size: "small",
                      loading: l(u),
                      disabled: !l(r)?.running,
                      onClick: De
                    }, {
                      default: J(() => [
                        pt(
                          E(l(t)("localAi.restartService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"]),
                    _(l(Xt), {
                      type: "danger",
                      size: "small",
                      plain: "",
                      loading: l(d),
                      disabled: !l(r)?.running,
                      onClick: Ue
                    }, {
                      default: J(() => [
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
                  l(r)?.baseUrl ? (A(), D("div", wA, [
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
                      E(l(r).baseUrl),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0)
                ])
              ])
            ]),
            f("section", kA, [
              f("div", _A, [
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
              f("div", TA, [
                f("div", {
                  class: "setting-row",
                  title: F("modelDir")
                }, [
                  f("div", SA, [
                    f(
                      "div",
                      CA,
                      E(l(t)("localAi.modelDir")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      EA,
                      E(F("modelDir")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", xA, [
                    f("div", LA, [
                      lt(f(
                        "input",
                        {
                          "onUpdate:modelValue": U[0] || (U[0] = (X) => l(n).modelDir = X),
                          class: "setting-input",
                          onChange: ce
                        },
                        null,
                        544
                        /* NEED_HYDRATION, NEED_PATCH */
                      ), [
                        [Lr, l(n).modelDir]
                      ]),
                      _(l(Xt), {
                        size: "small",
                        plain: "",
                        onClick: ue
                      }, {
                        default: J(() => [
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
                ], 8, AA),
                f("div", IA, [
                  f("div", {
                    class: "setting-row",
                    title: F("mainModel")
                  }, [
                    f("div", $A, [
                      f(
                        "div",
                        RA,
                        E(l(t)("localAi.mainModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        MA,
                        E(F("mainModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", PA, [
                      _(Ie, {
                        modelValue: l(h),
                        "onUpdate:modelValue": U[1] || (U[1] = (X) => Qt(h) ? h.value = X : null),
                        class: "field-select",
                        clearable: "",
                        onChange: V
                      }, {
                        default: J(() => [
                          (A(!0), D(
                            at,
                            null,
                            Cn(l(s)?.mainModels ?? [], (X) => (A(), re(me, {
                              key: X,
                              label: O(X),
                              value: X
                            }, null, 8, ["label", "value"]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ])
                  ], 8, OA),
                  f("div", {
                    class: "setting-row",
                    title: F("mmprojModel")
                  }, [
                    f("div", DA, [
                      f(
                        "div",
                        zA,
                        E(l(t)("localAi.mmprojModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        BA,
                        E(F("mmprojModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", FA, [
                      _(Ie, {
                        modelValue: l(b),
                        "onUpdate:modelValue": U[2] || (U[2] = (X) => Qt(b) ? b.value = X : null),
                        class: "field-select",
                        clearable: "",
                        onChange: V
                      }, {
                        default: J(() => [
                          (A(!0), D(
                            at,
                            null,
                            Cn(l(s)?.mmprojModels ?? [], (X) => (A(), re(me, {
                              key: X,
                              label: O(X),
                              value: X
                            }, null, 8, ["label", "value"]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ])
                  ], 8, NA)
                ]),
                f("div", {
                  class: "setting-row",
                  title: F("runtimePath")
                }, [
                  f("div", VA, [
                    f(
                      "div",
                      HA,
                      E(l(t)("localAi.runtimePath")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      WA,
                      E(F("runtimePath")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", UA, [
                    f("div", GA, [
                      lt(f("input", {
                        "onUpdate:modelValue": U[3] || (U[3] = (X) => l(n).runtimePath = X),
                        class: "setting-input",
                        placeholder: l(t)("localAi.runtimePathPlaceholder")
                      }, null, 8, qA), [
                        [Lr, l(n).runtimePath]
                      ]),
                      _(l(Xt), {
                        size: "small",
                        plain: "",
                        onClick: fe
                      }, {
                        default: J(() => [
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
                ], 8, jA)
              ])
            ]),
            f("section", KA, [
              f("div", ZA, [
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
              f("div", YA, [
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
                  _(ee, {
                    modelValue: l(n).ctxSize,
                    "onUpdate:modelValue": U[4] || (U[4] = (X) => l(n).ctxSize = X),
                    controls: !1,
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, XA),
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
                  _(ee, {
                    modelValue: l(n).gpuLayers,
                    "onUpdate:modelValue": U[5] || (U[5] = (X) => l(n).gpuLayers = X),
                    controls: !1,
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, QA),
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
                  _(ee, {
                    modelValue: l(n).threads,
                    "onUpdate:modelValue": U[6] || (U[6] = (X) => l(n).threads = X),
                    controls: !1,
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, JA),
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
                  _(ee, {
                    modelValue: l(n).batchSize,
                    "onUpdate:modelValue": U[7] || (U[7] = (X) => l(n).batchSize = X),
                    controls: !1,
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, eS),
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
                  _(ee, {
                    modelValue: l(n).ubatchSize,
                    "onUpdate:modelValue": U[8] || (U[8] = (X) => l(n).ubatchSize = X),
                    controls: !1,
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, tS),
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
                  _(ee, {
                    modelValue: l(n).mainGpu,
                    "onUpdate:modelValue": U[9] || (U[9] = (X) => l(n).mainGpu = X),
                    controls: !1,
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, nS)
              ])
            ]),
            f("section", oS, [
              f("div", rS, [
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
              f("div", sS, [
                f("label", {
                  class: "switch-field",
                  title: F("flashAttn")
                }, [
                  f(
                    "span",
                    lS,
                    E(l(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  _(l(pr), {
                    modelValue: l(n).flashAttn,
                    "onUpdate:modelValue": U[10] || (U[10] = (X) => l(n).flashAttn = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, aS),
                f("label", {
                  class: "switch-field",
                  title: F("kvOffload")
                }, [
                  f(
                    "span",
                    cS,
                    E(l(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  _(l(pr), {
                    modelValue: l(n).kvOffload,
                    "onUpdate:modelValue": U[11] || (U[11] = (X) => l(n).kvOffload = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, iS),
                f("label", {
                  class: "switch-field",
                  title: F("mmap")
                }, [
                  f(
                    "span",
                    dS,
                    E(l(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  _(l(pr), {
                    modelValue: l(n).mmap,
                    "onUpdate:modelValue": U[12] || (U[12] = (X) => l(n).mmap = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, uS)
              ])
            ]),
            f("section", fS, [
              f("div", pS, [
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
              f("div", mS, [
                f("label", {
                  class: "switch-field",
                  title: F("autoStart")
                }, [
                  f(
                    "span",
                    gS,
                    E(l(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  _(l(pr), {
                    modelValue: l(n).autoStartOnRequest,
                    "onUpdate:modelValue": U[13] || (U[13] = (X) => l(n).autoStartOnRequest = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, hS),
                f("label", {
                  class: "switch-field",
                  title: F("keepAlive")
                }, [
                  f(
                    "span",
                    bS,
                    E(l(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  _(l(pr), {
                    modelValue: l(n).keepAlive,
                    "onUpdate:modelValue": U[14] || (U[14] = (X) => l(n).keepAlive = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, vS),
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
                  _(ee, {
                    modelValue: l(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": U[15] || (U[15] = (X) => l(n).idleTimeoutMinutes = X),
                    controls: !1,
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, yS),
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
                  _(ee, {
                    modelValue: l(n).requestTimeoutSecs,
                    "onUpdate:modelValue": U[16] || (U[16] = (X) => l(n).requestTimeoutSecs = X),
                    controls: !1,
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, wS)
              ])
            ]),
            f("section", kS, [
              f("div", _S, [
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
              f("div", TS, [
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
                  _(ee, {
                    modelValue: l(n).temperature,
                    "onUpdate:modelValue": U[17] || (U[17] = (X) => l(n).temperature = X),
                    controls: !1,
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AS),
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
                  _(ee, {
                    modelValue: l(n).topP,
                    "onUpdate:modelValue": U[18] || (U[18] = (X) => l(n).topP = X),
                    controls: !1,
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, SS),
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
                  _(ee, {
                    modelValue: l(n).topK,
                    "onUpdate:modelValue": U[19] || (U[19] = (X) => l(n).topK = X),
                    controls: !1,
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, CS),
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
                  _(ee, {
                    modelValue: l(n).minP,
                    "onUpdate:modelValue": U[20] || (U[20] = (X) => l(n).minP = X),
                    controls: !1,
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, ES),
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
                  _(ee, {
                    modelValue: l(n).repeatPenalty,
                    "onUpdate:modelValue": U[21] || (U[21] = (X) => l(n).repeatPenalty = X),
                    controls: !1,
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, xS),
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
                  _(ee, {
                    modelValue: l(n).repeatLastN,
                    "onUpdate:modelValue": U[22] || (U[22] = (X) => l(n).repeatLastN = X),
                    controls: !1,
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, LS),
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
                  _(ee, {
                    modelValue: l(n).maxTokens,
                    "onUpdate:modelValue": U[23] || (U[23] = (X) => l(n).maxTokens = X),
                    controls: !1,
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, IS),
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
                  _(ee, {
                    modelValue: l(n).port,
                    "onUpdate:modelValue": U[24] || (U[24] = (X) => l(n).port = X),
                    controls: !1,
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, OS)
              ])
            ])
          ])
        ])) : Y("v-if", !0),
        l(n) ? (A(), D("footer", $S, [
          f("div", RS, [
            l(r)?.commandLine ? (A(), D("span", {
              key: 0,
              class: "command-line",
              title: l(r).commandLine
            }, E(l(r).commandLine), 9, MS)) : Y("v-if", !0),
            _(l(Xt), {
              type: "primary",
              loading: l(i),
              onClick: B
            }, {
              default: J(() => [
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
        ])) : Y("v-if", !0)
      ]);
    };
  }
}), NS = /* @__PURE__ */ Oo(PS, [["__scopeId", "data-v-66dbd72c"]]), DS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NS
}, Symbol.toStringTag, { value: "Module" }));
export {
  jS as activate,
  jS as default
};
