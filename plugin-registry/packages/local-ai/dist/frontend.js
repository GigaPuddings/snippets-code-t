var tf = Object.defineProperty;
var nf = (e, t, n) => t in e ? tf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Re = (e, t, n) => nf(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Le, createVNode as _, defineAsyncComponent as of, getCurrentInstance as xt, ref as P, computed as A, unref as l, readonly as xa, getCurrentScope as sf, onScopeDispose as $c, shallowRef as io, watchEffect as La, onMounted as ot, nextTick as Ze, watch as pe, isRef as Qt, warn as rf, provide as vn, defineComponent as oe, createElementBlock as D, openBlock as S, mergeProps as ko, renderSlot as ie, createElementVNode as f, toRef as qn, onUnmounted as Ia, useAttrs as af, useSlots as Rc, normalizeStyle as mt, normalizeClass as z, createCommentVNode as Y, Fragment as at, createBlock as se, withCtx as J, resolveDynamicComponent as Jt, withModifiers as Ke, toDisplayString as E, onBeforeUnmount as yn, Transition as Eo, withDirectives as lt, vShow as Rn, reactive as _o, onActivated as lf, onUpdated as Mc, cloneVNode as cf, Text as uf, Comment as df, Teleport as ff, onBeforeMount as pf, onDeactivated as mf, createTextVNode as pt, h as hf, createSlots as Oa, withKeys as En, toRaw as gf, toRefs as $a, resolveComponent as vo, resolveDirective as vf, toHandlerKey as bf, renderList as Cn, vModelText as xs, shallowReactive as yf, isVNode as Ls, render as ir } from "vue";
import { useI18n as Ps } from "vue-i18n";
var wf = {
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
function kf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function _f(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], r = t.theme || n.theme;
  switch (r) {
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
var Tf = Symbol("icon-context");
function Ye(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var a = kf(), i = Le(Tf, wf);
      return function() {
        var c = r.size, u = r.strokeWidth, d = r.strokeLinecap, m = r.strokeLinejoin, g = r.theme, w = r.fill, h = r.spin, b = _f(a, {
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
const Fl = Ye("brain", !0, function(e) {
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
}), Sf = Ye("check-small", !0, function(e) {
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
}), Af = Ye("code", !0, function(e) {
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
}), jl = Ye("copy", !0, function(e) {
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
}), Vl = Ye("cube", !1, function(e) {
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
}), is = Ye("delete", !1, function(e) {
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
}), Cf = Ye("down", !1, function(e) {
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
}), Wr = Ye("edit", !0, function(e) {
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
}), Ef = Ye("file-text", !0, function(e) {
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
}), xf = Ye("fork", !1, function(e) {
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
}), Hl = Ye("left-bar", !0, function(e) {
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
}), Lf = Ye("link", !0, function(e) {
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
}), Wl = Ye("magic-wand", !0, function(e) {
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
}), If = Ye("picture", !0, function(e) {
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
}), cs = Ye("refresh", !0, function(e) {
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
}), Ul = Ye("right", !0, function(e) {
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
}), Ur = Ye("robot", !0, function(e) {
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
}), Of = Ye("robot-one", !0, function(e) {
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
}), $f = Ye("search", !0, function(e) {
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
}), Rf = Ye("send", !0, function(e) {
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
}), Pc = Ye("setting-two", !1, function(e) {
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
}), Mf = Ye("square", !1, function(e) {
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
}), Pf = Ye("translate", !0, function(e) {
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
}), EA = (e) => {
  e.registerRoute({
    target: "config",
    path: "local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => xT)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Pc,
    component: of(() => Promise.resolve().then(() => TA))
  });
}, Nc = Symbol(), _s = "el", Nf = "is-", bo = (e, t, n, o, s) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), o && (r += `__${o}`), s && (r += `--${s}`), r;
}, Dc = Symbol("namespaceContextKey"), Ra = (e) => {
  const t = e || (xt() ? Le(Dc, P(_s)) : P(_s));
  return A(() => l(t) || _s);
}, et = (e, t) => {
  const n = Ra(t);
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
      return b && k ? `${Nf}${b}` : "";
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
}, Df = Object.prototype.hasOwnProperty, Gl = (e, t) => Df.call(e, t), Ln = Array.isArray, nt = (e) => typeof e == "function", Zt = (e) => typeof e == "string", en = (e) => e !== null && typeof e == "object", zf = Object.prototype.toString, Bf = (e) => zf.call(e), Ff = (e) => Bf(e) === "[object Object]", jf = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Vf = /-(\w)/g, Hf = jf(
  (e) => e.replace(Vf, (t, n) => n ? n.toUpperCase() : "")
);
var zc = typeof global == "object" && global && global.Object === Object && global, Wf = typeof self == "object" && self && self.Object === Object && self, Nn = zc || Wf || Function("return this")(), Mn = Nn.Symbol, Bc = Object.prototype, Uf = Bc.hasOwnProperty, Gf = Bc.toString, us = Mn ? Mn.toStringTag : void 0;
function qf(e) {
  var t = Uf.call(e, us), n = e[us];
  try {
    e[us] = void 0;
    var o = !0;
  } catch {
  }
  var s = Gf.call(e);
  return o && (t ? e[us] = n : delete e[us]), s;
}
var Kf = Object.prototype, Zf = Kf.toString;
function Yf(e) {
  return Zf.call(e);
}
var Xf = "[object Null]", Qf = "[object Undefined]", ql = Mn ? Mn.toStringTag : void 0;
function ss(e) {
  return e == null ? e === void 0 ? Qf : Xf : ql && ql in Object(e) ? qf(e) : Yf(e);
}
function qo(e) {
  return e != null && typeof e == "object";
}
var Jf = "[object Symbol]";
function Tr(e) {
  return typeof e == "symbol" || qo(e) && ss(e) == Jf;
}
function ep(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var bn = Array.isArray, Kl = Mn ? Mn.prototype : void 0, Zl = Kl ? Kl.toString : void 0;
function Fc(e) {
  if (typeof e == "string")
    return e;
  if (bn(e))
    return ep(e, Fc) + "";
  if (Tr(e))
    return Zl ? Zl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var tp = /\s/;
function np(e) {
  for (var t = e.length; t-- && tp.test(e.charAt(t)); )
    ;
  return t;
}
var op = /^\s+/;
function sp(e) {
  return e && e.slice(0, np(e) + 1).replace(op, "");
}
function uo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yl = NaN, rp = /^[-+]0x[0-9a-f]+$/i, ap = /^0b[01]+$/i, lp = /^0o[0-7]+$/i, ip = parseInt;
function Xl(e) {
  if (typeof e == "number")
    return e;
  if (Tr(e))
    return Yl;
  if (uo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = uo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = sp(e);
  var n = ap.test(e);
  return n || lp.test(e) ? ip(e.slice(2), n ? 2 : 8) : rp.test(e) ? Yl : +e;
}
function jc(e) {
  return e;
}
var cp = "[object AsyncFunction]", up = "[object Function]", dp = "[object GeneratorFunction]", fp = "[object Proxy]";
function Vc(e) {
  if (!uo(e))
    return !1;
  var t = ss(e);
  return t == up || t == dp || t == cp || t == fp;
}
var Gr = Nn["__core-js_shared__"], Ql = function() {
  var e = /[^.]+$/.exec(Gr && Gr.keys && Gr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pp(e) {
  return !!Ql && Ql in e;
}
var mp = Function.prototype, hp = mp.toString;
function xo(e) {
  if (e != null) {
    try {
      return hp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var gp = /[\\^$.*+?()[\]{}|]/g, vp = /^\[object .+?Constructor\]$/, bp = Function.prototype, yp = Object.prototype, wp = bp.toString, kp = yp.hasOwnProperty, _p = RegExp(
  "^" + wp.call(kp).replace(gp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tp(e) {
  if (!uo(e) || pp(e))
    return !1;
  var t = Vc(e) ? _p : vp;
  return t.test(xo(e));
}
function Sp(e, t) {
  return e?.[t];
}
function Lo(e, t) {
  var n = Sp(e, t);
  return Tp(n) ? n : void 0;
}
var ca = Lo(Nn, "WeakMap");
function Ap(e, t, n) {
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
var Cp = 800, Ep = 16, xp = Date.now;
function Lp(e) {
  var t = 0, n = 0;
  return function() {
    var o = xp(), s = Ep - (o - n);
    if (n = o, s > 0) {
      if (++t >= Cp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ip(e) {
  return function() {
    return e;
  };
}
var cr = function() {
  try {
    var e = Lo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Op = cr ? function(e, t) {
  return cr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ip(t),
    writable: !0
  });
} : jc, $p = Lp(Op);
function Rp(e, t, n, o) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var Mp = 9007199254740991, Pp = /^(?:0|[1-9]\d*)$/;
function Ma(e, t) {
  var n = typeof e;
  return t = t ?? Mp, !!t && (n == "number" || n != "symbol" && Pp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Np(e, t, n) {
  t == "__proto__" && cr ? cr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Pa(e, t) {
  return e === t || e !== e && t !== t;
}
var Dp = Object.prototype, zp = Dp.hasOwnProperty;
function Bp(e, t, n) {
  var o = e[t];
  (!(zp.call(e, t) && Pa(o, n)) || n === void 0 && !(t in e)) && Np(e, t, n);
}
var Jl = Math.max;
function Fp(e, t, n) {
  return t = Jl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, r = Jl(o.length - t, 0), a = Array(r); ++s < r; )
      a[s] = o[t + s];
    s = -1;
    for (var i = Array(t + 1); ++s < t; )
      i[s] = o[s];
    return i[t] = n(a), Ap(e, this, i);
  };
}
var jp = 9007199254740991;
function Na(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jp;
}
function Vp(e) {
  return e != null && Na(e.length) && !Vc(e);
}
var Hp = Object.prototype;
function Wp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Hp;
  return e === n;
}
function Up(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Gp = "[object Arguments]";
function ei(e) {
  return qo(e) && ss(e) == Gp;
}
var Hc = Object.prototype, qp = Hc.hasOwnProperty, Kp = Hc.propertyIsEnumerable, Da = ei(/* @__PURE__ */ function() {
  return arguments;
}()) ? ei : function(e) {
  return qo(e) && qp.call(e, "callee") && !Kp.call(e, "callee");
};
function Zp() {
  return !1;
}
var Wc = typeof exports == "object" && exports && !exports.nodeType && exports, ti = Wc && typeof module == "object" && module && !module.nodeType && module, Yp = ti && ti.exports === Wc, ni = Yp ? Nn.Buffer : void 0, Xp = ni ? ni.isBuffer : void 0, ua = Xp || Zp, Qp = "[object Arguments]", Jp = "[object Array]", em = "[object Boolean]", tm = "[object Date]", nm = "[object Error]", om = "[object Function]", sm = "[object Map]", rm = "[object Number]", am = "[object Object]", lm = "[object RegExp]", im = "[object Set]", cm = "[object String]", um = "[object WeakMap]", dm = "[object ArrayBuffer]", fm = "[object DataView]", pm = "[object Float32Array]", mm = "[object Float64Array]", hm = "[object Int8Array]", gm = "[object Int16Array]", vm = "[object Int32Array]", bm = "[object Uint8Array]", ym = "[object Uint8ClampedArray]", wm = "[object Uint16Array]", km = "[object Uint32Array]", Fe = {};
Fe[pm] = Fe[mm] = Fe[hm] = Fe[gm] = Fe[vm] = Fe[bm] = Fe[ym] = Fe[wm] = Fe[km] = !0;
Fe[Qp] = Fe[Jp] = Fe[dm] = Fe[em] = Fe[fm] = Fe[tm] = Fe[nm] = Fe[om] = Fe[sm] = Fe[rm] = Fe[am] = Fe[lm] = Fe[im] = Fe[cm] = Fe[um] = !1;
function _m(e) {
  return qo(e) && Na(e.length) && !!Fe[ss(e)];
}
function Tm(e) {
  return function(t) {
    return e(t);
  };
}
var Uc = typeof exports == "object" && exports && !exports.nodeType && exports, Ts = Uc && typeof module == "object" && module && !module.nodeType && module, Sm = Ts && Ts.exports === Uc, qr = Sm && zc.process, oi = function() {
  try {
    var e = Ts && Ts.require && Ts.require("util").types;
    return e || qr && qr.binding && qr.binding("util");
  } catch {
  }
}(), si = oi && oi.isTypedArray, Gc = si ? Tm(si) : _m, Am = Object.prototype, Cm = Am.hasOwnProperty;
function Em(e, t) {
  var n = bn(e), o = !n && Da(e), s = !n && !o && ua(e), r = !n && !o && !s && Gc(e), a = n || o || s || r, i = a ? Up(e.length, String) : [], c = i.length;
  for (var u in e)
    Cm.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ma(u, c))) && i.push(u);
  return i;
}
function xm(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Lm = xm(Object.keys, Object), Im = Object.prototype, Om = Im.hasOwnProperty;
function $m(e) {
  if (!Wp(e))
    return Lm(e);
  var t = [];
  for (var n in Object(e))
    Om.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function qc(e) {
  return Vp(e) ? Em(e) : $m(e);
}
var Rm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mm = /^\w*$/;
function za(e, t) {
  if (bn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Tr(e) ? !0 : Mm.test(e) || !Rm.test(e) || t != null && e in Object(t);
}
var Is = Lo(Object, "create");
function Pm() {
  this.__data__ = Is ? Is(null) : {}, this.size = 0;
}
function Nm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Dm = "__lodash_hash_undefined__", zm = Object.prototype, Bm = zm.hasOwnProperty;
function Fm(e) {
  var t = this.__data__;
  if (Is) {
    var n = t[e];
    return n === Dm ? void 0 : n;
  }
  return Bm.call(t, e) ? t[e] : void 0;
}
var jm = Object.prototype, Vm = jm.hasOwnProperty;
function Hm(e) {
  var t = this.__data__;
  return Is ? t[e] !== void 0 : Vm.call(t, e);
}
var Wm = "__lodash_hash_undefined__";
function Um(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Is && t === void 0 ? Wm : t, this;
}
function To(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
To.prototype.clear = Pm;
To.prototype.delete = Nm;
To.prototype.get = Fm;
To.prototype.has = Hm;
To.prototype.set = Um;
function Gm() {
  this.__data__ = [], this.size = 0;
}
function Sr(e, t) {
  for (var n = e.length; n--; )
    if (Pa(e[n][0], t))
      return n;
  return -1;
}
var qm = Array.prototype, Km = qm.splice;
function Zm(e) {
  var t = this.__data__, n = Sr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Km.call(t, n, 1), --this.size, !0;
}
function Ym(e) {
  var t = this.__data__, n = Sr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Xm(e) {
  return Sr(this.__data__, e) > -1;
}
function Qm(e, t) {
  var n = this.__data__, o = Sr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Qn.prototype.clear = Gm;
Qn.prototype.delete = Zm;
Qn.prototype.get = Ym;
Qn.prototype.has = Xm;
Qn.prototype.set = Qm;
var Os = Lo(Nn, "Map");
function Jm() {
  this.size = 0, this.__data__ = {
    hash: new To(),
    map: new (Os || Qn)(),
    string: new To()
  };
}
function eh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ar(e, t) {
  var n = e.__data__;
  return eh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function th(e) {
  var t = Ar(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nh(e) {
  return Ar(this, e).get(e);
}
function oh(e) {
  return Ar(this, e).has(e);
}
function sh(e, t) {
  var n = Ar(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Jn.prototype.clear = Jm;
Jn.prototype.delete = th;
Jn.prototype.get = nh;
Jn.prototype.has = oh;
Jn.prototype.set = sh;
var rh = "Expected a function";
function Ba(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(rh);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var a = e.apply(this, o);
    return n.cache = r.set(s, a) || r, a;
  };
  return n.cache = new (Ba.Cache || Jn)(), n;
}
Ba.Cache = Jn;
var ah = 500;
function lh(e) {
  var t = Ba(e, function(o) {
    return n.size === ah && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ih = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ch = /\\(\\)?/g, uh = lh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ih, function(n, o, s, r) {
    t.push(s ? r.replace(ch, "$1") : o || n);
  }), t;
});
function dh(e) {
  return e == null ? "" : Fc(e);
}
function Cr(e, t) {
  return bn(e) ? e : za(e, t) ? [e] : uh(dh(e));
}
function Ns(e) {
  if (typeof e == "string" || Tr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Fa(e, t) {
  t = Cr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Ns(t[n++])];
  return n && n == o ? e : void 0;
}
function lo(e, t, n) {
  var o = e == null ? void 0 : Fa(e, t);
  return o === void 0 ? n : o;
}
function Kc(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; )
    e[s + n] = t[n];
  return e;
}
var ri = Mn ? Mn.isConcatSpreadable : void 0;
function fh(e) {
  return bn(e) || Da(e) || !!(ri && e && e[ri]);
}
function ph(e, t, n, o, s) {
  var r = -1, a = e.length;
  for (n || (n = fh), s || (s = []); ++r < a; ) {
    var i = e[r];
    n(i) ? Kc(s, i) : s[s.length] = i;
  }
  return s;
}
function mh(e) {
  var t = e == null ? 0 : e.length;
  return t ? ph(e) : [];
}
function hh(e) {
  return $p(Fp(e, void 0, mh), e + "");
}
function ao() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return bn(e) ? e : [e];
}
function gh() {
  this.__data__ = new Qn(), this.size = 0;
}
function vh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function bh(e) {
  return this.__data__.get(e);
}
function yh(e) {
  return this.__data__.has(e);
}
var wh = 200;
function kh(e, t) {
  var n = this.__data__;
  if (n instanceof Qn) {
    var o = n.__data__;
    if (!Os || o.length < wh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Jn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zn(e) {
  var t = this.__data__ = new Qn(e);
  this.size = t.size;
}
Zn.prototype.clear = gh;
Zn.prototype.delete = vh;
Zn.prototype.get = bh;
Zn.prototype.has = yh;
Zn.prototype.set = kh;
function _h(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = 0, r = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (r[s++] = a);
  }
  return r;
}
function Th() {
  return [];
}
var Sh = Object.prototype, Ah = Sh.propertyIsEnumerable, ai = Object.getOwnPropertySymbols, Ch = ai ? function(e) {
  return e == null ? [] : (e = Object(e), _h(ai(e), function(t) {
    return Ah.call(e, t);
  }));
} : Th;
function Eh(e, t, n) {
  var o = t(e);
  return bn(e) ? o : Kc(o, n(e));
}
function li(e) {
  return Eh(e, qc, Ch);
}
var da = Lo(Nn, "DataView"), fa = Lo(Nn, "Promise"), pa = Lo(Nn, "Set"), ii = "[object Map]", xh = "[object Object]", ci = "[object Promise]", ui = "[object Set]", di = "[object WeakMap]", fi = "[object DataView]", Lh = xo(da), Ih = xo(Os), Oh = xo(fa), $h = xo(pa), Rh = xo(ca), ro = ss;
(da && ro(new da(new ArrayBuffer(1))) != fi || Os && ro(new Os()) != ii || fa && ro(fa.resolve()) != ci || pa && ro(new pa()) != ui || ca && ro(new ca()) != di) && (ro = function(e) {
  var t = ss(e), n = t == xh ? e.constructor : void 0, o = n ? xo(n) : "";
  if (o)
    switch (o) {
      case Lh:
        return fi;
      case Ih:
        return ii;
      case Oh:
        return ci;
      case $h:
        return ui;
      case Rh:
        return di;
    }
  return t;
});
var pi = Nn.Uint8Array, Mh = "__lodash_hash_undefined__";
function Ph(e) {
  return this.__data__.set(e, Mh), this;
}
function Nh(e) {
  return this.__data__.has(e);
}
function ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Jn(); ++t < n; )
    this.add(e[t]);
}
ur.prototype.add = ur.prototype.push = Ph;
ur.prototype.has = Nh;
function Dh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function zh(e, t) {
  return e.has(t);
}
var Bh = 1, Fh = 2;
function Zc(e, t, n, o, s, r) {
  var a = n & Bh, i = e.length, c = t.length;
  if (i != c && !(a && c > i))
    return !1;
  var u = r.get(e), d = r.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, g = !0, w = n & Fh ? new ur() : void 0;
  for (r.set(e, t), r.set(t, e); ++m < i; ) {
    var h = e[m], b = t[m];
    if (o)
      var C = a ? o(b, h, m, t, e, r) : o(h, b, m, e, t, r);
    if (C !== void 0) {
      if (C)
        continue;
      g = !1;
      break;
    }
    if (w) {
      if (!Dh(t, function(k, M) {
        if (!zh(w, M) && (h === k || s(h, k, n, o, r)))
          return w.push(M);
      })) {
        g = !1;
        break;
      }
    } else if (!(h === b || s(h, b, n, o, r))) {
      g = !1;
      break;
    }
  }
  return r.delete(e), r.delete(t), g;
}
function jh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, s) {
    n[++t] = [s, o];
  }), n;
}
function Vh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Hh = 1, Wh = 2, Uh = "[object Boolean]", Gh = "[object Date]", qh = "[object Error]", Kh = "[object Map]", Zh = "[object Number]", Yh = "[object RegExp]", Xh = "[object Set]", Qh = "[object String]", Jh = "[object Symbol]", eg = "[object ArrayBuffer]", tg = "[object DataView]", mi = Mn ? Mn.prototype : void 0, Kr = mi ? mi.valueOf : void 0;
function ng(e, t, n, o, s, r, a) {
  switch (n) {
    case tg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case eg:
      return !(e.byteLength != t.byteLength || !r(new pi(e), new pi(t)));
    case Uh:
    case Gh:
    case Zh:
      return Pa(+e, +t);
    case qh:
      return e.name == t.name && e.message == t.message;
    case Yh:
    case Qh:
      return e == t + "";
    case Kh:
      var i = jh;
    case Xh:
      var c = o & Hh;
      if (i || (i = Vh), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Wh, a.set(e, t);
      var d = Zc(i(e), i(t), o, s, r, a);
      return a.delete(e), d;
    case Jh:
      if (Kr)
        return Kr.call(e) == Kr.call(t);
  }
  return !1;
}
var og = 1, sg = Object.prototype, rg = sg.hasOwnProperty;
function ag(e, t, n, o, s, r) {
  var a = n & og, i = li(e), c = i.length, u = li(t), d = u.length;
  if (c != d && !a)
    return !1;
  for (var m = c; m--; ) {
    var g = i[m];
    if (!(a ? g in t : rg.call(t, g)))
      return !1;
  }
  var w = r.get(e), h = r.get(t);
  if (w && h)
    return w == t && h == e;
  var b = !0;
  r.set(e, t), r.set(t, e);
  for (var C = a; ++m < c; ) {
    g = i[m];
    var k = e[g], M = t[g];
    if (o)
      var j = a ? o(M, k, g, t, e, r) : o(k, M, g, e, t, r);
    if (!(j === void 0 ? k === M || s(k, M, n, o, r) : j)) {
      b = !1;
      break;
    }
    C || (C = g == "constructor");
  }
  if (b && !C) {
    var L = e.constructor, I = t.constructor;
    L != I && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof I == "function" && I instanceof I) && (b = !1);
  }
  return r.delete(e), r.delete(t), b;
}
var lg = 1, hi = "[object Arguments]", gi = "[object Array]", qs = "[object Object]", ig = Object.prototype, vi = ig.hasOwnProperty;
function cg(e, t, n, o, s, r) {
  var a = bn(e), i = bn(t), c = a ? gi : ro(e), u = i ? gi : ro(t);
  c = c == hi ? qs : c, u = u == hi ? qs : u;
  var d = c == qs, m = u == qs, g = c == u;
  if (g && ua(e)) {
    if (!ua(t))
      return !1;
    a = !0, d = !1;
  }
  if (g && !d)
    return r || (r = new Zn()), a || Gc(e) ? Zc(e, t, n, o, s, r) : ng(e, t, c, n, o, s, r);
  if (!(n & lg)) {
    var w = d && vi.call(e, "__wrapped__"), h = m && vi.call(t, "__wrapped__");
    if (w || h) {
      var b = w ? e.value() : e, C = h ? t.value() : t;
      return r || (r = new Zn()), s(b, C, n, o, r);
    }
  }
  return g ? (r || (r = new Zn()), ag(e, t, n, o, s, r)) : !1;
}
function Er(e, t, n, o, s) {
  return e === t ? !0 : e == null || t == null || !qo(e) && !qo(t) ? e !== e && t !== t : cg(e, t, n, o, Er, s);
}
var ug = 1, dg = 2;
function fg(e, t, n, o) {
  var s = n.length, r = s;
  if (e == null)
    return !r;
  for (e = Object(e); s--; ) {
    var a = n[s];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++s < r; ) {
    a = n[s];
    var i = a[0], c = e[i], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Zn(), m;
      if (!(m === void 0 ? Er(u, c, ug | dg, o, d) : m))
        return !1;
    }
  }
  return !0;
}
function Yc(e) {
  return e === e && !uo(e);
}
function pg(e) {
  for (var t = qc(e), n = t.length; n--; ) {
    var o = t[n], s = e[o];
    t[n] = [o, s, Yc(s)];
  }
  return t;
}
function Xc(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function mg(e) {
  var t = pg(e);
  return t.length == 1 && t[0][2] ? Xc(t[0][0], t[0][1]) : function(n) {
    return n === e || fg(n, e, t);
  };
}
function hg(e, t) {
  return e != null && t in Object(e);
}
function gg(e, t, n) {
  t = Cr(t, e);
  for (var o = -1, s = t.length, r = !1; ++o < s; ) {
    var a = Ns(t[o]);
    if (!(r = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return r || ++o != s ? r : (s = e == null ? 0 : e.length, !!s && Na(s) && Ma(a, s) && (bn(e) || Da(e)));
}
function Qc(e, t) {
  return e != null && gg(e, t, hg);
}
var vg = 1, bg = 2;
function yg(e, t) {
  return za(e) && Yc(t) ? Xc(Ns(e), t) : function(n) {
    var o = lo(n, e);
    return o === void 0 && o === t ? Qc(n, e) : Er(t, o, vg | bg);
  };
}
function wg(e) {
  return function(t) {
    return t?.[e];
  };
}
function kg(e) {
  return function(t) {
    return Fa(t, e);
  };
}
function _g(e) {
  return za(e) ? wg(Ns(e)) : kg(e);
}
function Tg(e) {
  return typeof e == "function" ? e : e == null ? jc : typeof e == "object" ? bn(e) ? yg(e[0], e[1]) : mg(e) : _g(e);
}
var Zr = function() {
  return Nn.Date.now();
}, Sg = "Expected a function", Ag = Math.max, Cg = Math.min;
function Eg(e, t, n) {
  var o, s, r, a, i, c, u = 0, d = !1, m = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Sg);
  t = Xl(t) || 0, uo(n) && (d = !!n.leading, m = "maxWait" in n, r = m ? Ag(Xl(n.maxWait) || 0, t) : r, g = "trailing" in n ? !!n.trailing : g);
  function w(O) {
    var R = o, K = s;
    return o = s = void 0, u = O, a = e.apply(K, R), a;
  }
  function h(O) {
    return u = O, i = setTimeout(k, t), d ? w(O) : a;
  }
  function b(O) {
    var R = O - c, K = O - u, F = t - R;
    return m ? Cg(F, r - K) : F;
  }
  function C(O) {
    var R = O - c, K = O - u;
    return c === void 0 || R >= t || R < 0 || m && K >= r;
  }
  function k() {
    var O = Zr();
    if (C(O))
      return M(O);
    i = setTimeout(k, b(O));
  }
  function M(O) {
    return i = void 0, g && o ? w(O) : (o = s = void 0, a);
  }
  function j() {
    i !== void 0 && clearTimeout(i), u = 0, o = c = s = i = void 0;
  }
  function L() {
    return i === void 0 ? a : M(Zr());
  }
  function I() {
    var O = Zr(), R = C(O);
    if (o = arguments, s = this, c = O, R) {
      if (i === void 0)
        return h(c);
      if (m)
        return clearTimeout(i), i = setTimeout(k, t), w(c);
    }
    return i === void 0 && (i = setTimeout(k, t)), a;
  }
  return I.cancel = j, I.flush = L, I;
}
function xg(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var s = o - 1;
  return Rp(e, Tg(t), s);
}
function dr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
function Ss(e, t) {
  return Er(e, t);
}
function Yn(e) {
  return e == null;
}
function Jc(e) {
  return e === void 0;
}
function Lg(e, t, n, o) {
  if (!uo(e))
    return e;
  t = Cr(t, e);
  for (var s = -1, r = t.length, a = r - 1, i = e; i != null && ++s < r; ) {
    var c = Ns(t[s]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (s != a) {
      var d = i[c];
      u = void 0, u === void 0 && (u = uo(d) ? d : Ma(t[s + 1]) ? [] : {});
    }
    Bp(i, c, u), i = i[c];
  }
  return e;
}
function Ig(e, t, n) {
  for (var o = -1, s = t.length, r = {}; ++o < s; ) {
    var a = t[o], i = Fa(e, a);
    n(i, a) && Lg(r, Cr(a, e), i);
  }
  return r;
}
function Og(e, t) {
  return Ig(e, t, function(n, o) {
    return Qc(e, o);
  });
}
var $g = hh(function(e, t) {
  return e == null ? {} : Og(e, t);
});
const In = (e) => e === void 0, $s = (e) => typeof e == "boolean", Pe = (e) => typeof e == "number", hn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Rg = (e) => Zt(e) ? !Number.isNaN(Number(e)) : !1;
var Mg = Object.defineProperty, Pg = Object.defineProperties, Ng = Object.getOwnPropertyDescriptors, bi = Object.getOwnPropertySymbols, Dg = Object.prototype.hasOwnProperty, zg = Object.prototype.propertyIsEnumerable, yi = (e, t, n) => t in e ? Mg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Bg = (e, t) => {
  for (var n in t || (t = {}))
    Dg.call(t, n) && yi(e, n, t[n]);
  if (bi)
    for (var n of bi(t))
      zg.call(t, n) && yi(e, n, t[n]);
  return e;
}, Fg = (e, t) => Pg(e, Ng(t));
function jg(e, t) {
  var n;
  const o = io();
  return La(() => {
    o.value = e();
  }, Fg(Bg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), xa(o);
}
var wi;
const We = typeof window < "u", Vg = (e) => typeof e == "string", eu = () => {
}, ma = We && ((wi = window?.navigator) == null ? void 0 : wi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ja(e) {
  return typeof e == "function" ? e() : l(e);
}
function Hg(e) {
  return e;
}
function Ds(e) {
  return sf() ? ($c(e), !0) : !1;
}
function Wg(e, t = !0) {
  xt() ? ot(e) : t ? e() : Ze(e);
}
function fr(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = P(!1);
  let r = null;
  function a() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    s.value = !1, a();
  }
  function c(...u) {
    a(), s.value = !0, r = setTimeout(() => {
      s.value = !1, r = null, e(...u);
    }, ja(t));
  }
  return o && (s.value = !0, We && c()), Ds(i), {
    isPending: xa(s),
    start: c,
    stop: i
  };
}
function Kn(e) {
  var t;
  const n = ja(e);
  return (t = n?.$el) != null ? t : n;
}
const xr = We ? window : void 0;
function gn(...e) {
  let t, n, o, s;
  if (Vg(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = xr) : [t, n, o, s] = e, !t)
    return eu;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], a = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, m, g, w) => (d.addEventListener(m, g, w), () => d.removeEventListener(m, g, w)), c = pe(() => [Kn(t), ja(s)], ([d, m]) => {
    a(), d && r.push(...n.flatMap((g) => o.map((w) => i(d, g, w, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), a();
  };
  return Ds(u), u;
}
let ki = !1;
function Ug(e, t, n = {}) {
  const { window: o = xr, ignore: s = [], capture: r = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  ma && !ki && (ki = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", eu)));
  let i = !0;
  const c = (g) => s.some((w) => {
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
    }, { passive: !0, capture: r }),
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
function tu(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), Wg(o, t), n;
}
const _i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ti = "__vueuse_ssr_handlers__";
_i[Ti] = _i[Ti] || {};
var Si = Object.getOwnPropertySymbols, Gg = Object.prototype.hasOwnProperty, qg = Object.prototype.propertyIsEnumerable, Kg = (e, t) => {
  var n = {};
  for (var o in e)
    Gg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Si)
    for (var o of Si(e))
      t.indexOf(o) < 0 && qg.call(e, o) && (n[o] = e[o]);
  return n;
};
function xn(e, t, n = {}) {
  const o = n, { window: s = xr } = o, r = Kg(o, ["window"]);
  let a;
  const i = tu(() => s && "ResizeObserver" in s), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => Kn(e), (m) => {
    c(), i.value && s && m && (a = new ResizeObserver(t), a.observe(m, r));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return Ds(d), {
    isSupported: i,
    stop: d
  };
}
var Ai = Object.getOwnPropertySymbols, Zg = Object.prototype.hasOwnProperty, Yg = Object.prototype.propertyIsEnumerable, Xg = (e, t) => {
  var n = {};
  for (var o in e)
    Zg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ai)
    for (var o of Ai(e))
      t.indexOf(o) < 0 && Yg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Qg(e, t, n = {}) {
  const o = n, { window: s = xr } = o, r = Xg(o, ["window"]);
  let a;
  const i = tu(() => s && "MutationObserver" in s), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => Kn(e), (m) => {
    c(), i.value && s && m && (a = new MutationObserver(t), a.observe(m, r));
  }, { immediate: !0 }), d = () => {
    c(), u();
  };
  return Ds(d), {
    isSupported: i,
    stop: d
  };
}
var Ci;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ci || (Ci = {}));
var Jg = Object.defineProperty, Ei = Object.getOwnPropertySymbols, ev = Object.prototype.hasOwnProperty, tv = Object.prototype.propertyIsEnumerable, xi = (e, t, n) => t in e ? Jg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nv = (e, t) => {
  for (var n in t || (t = {}))
    ev.call(t, n) && xi(e, n, t[n]);
  if (Ei)
    for (var n of Ei(t))
      tv.call(t, n) && xi(e, n, t[n]);
  return e;
};
const ov = {
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
nv({
  linear: Hg
}, ov);
class sv extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Va(e, t) {
  throw new sv(`[${e}] ${t}`);
}
const Li = {
  current: 0
}, Ii = P(0), nu = 2e3, Oi = Symbol("elZIndexContextKey"), ou = Symbol("zIndexContextKey"), Ha = (e) => {
  const t = xt() ? Le(Oi, Li) : Li, n = e || (xt() ? Le(ou, void 0) : void 0), o = A(() => {
    const a = l(n);
    return Pe(a) ? a : nu;
  }), s = A(() => o.value + Ii.value), r = () => (t.current++, Ii.value = t.current, s.value);
  return !We && Le(Oi), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: r
  };
};
var rv = {
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
const av = (e) => (t, n) => lv(t, n, l(e)), lv = (e, t, n) => lo(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var r;
  return `${(r = t?.[s]) != null ? r : `{${s}}`}`;
}), iv = (e) => {
  const t = A(() => l(e).name), n = Qt(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: av(e)
  };
}, su = Symbol("localeContextKey"), Lr = (e) => {
  const t = e || Le(su, P());
  return iv(A(() => t.value || rv));
}, ru = "__epPropKey", he = (e) => e, cv = (e) => en(e) && !!e[ru], Ir = (e, t) => {
  if (!en(e) || cv(e))
    return e;
  const { values: n, required: o, default: s, type: r, validator: a } = e, c = {
    type: r,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), Gl(e, "default") && m.push(s), d || (d = m.includes(u))), a && (d || (d = a(u))), !d && m.length > 0) {
        const g = [...new Set(m)].map((w) => JSON.stringify(w)).join(", ");
        rf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [ru]: !0
  };
  return Gl(e, "default") && (c.default = s), c;
}, Ne = (e) => dr(Object.entries(e).map(([t, n]) => [
  t,
  Ir(n, t)
])), au = ["", "default", "small", "large"], Or = Ir({
  type: String,
  values: au,
  required: !1
}), lu = Symbol("size"), uv = () => {
  const e = Le(lu, {});
  return A(() => l(e.size) || "");
}, iu = Symbol("emptyValuesContextKey"), dv = ["", void 0, null], fv = void 0, cu = Ne({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => nt(e) ? !e() : !e
  }
}), pv = (e, t) => {
  const n = xt() ? Le(iu, P({})) : P({}), o = A(() => e.emptyValues || n.value.emptyValues || dv), s = A(() => nt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : nt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : fv), r = (a) => o.value.includes(a);
  return o.value.includes(s.value), {
    emptyValues: o,
    valueOnClear: s,
    isEmptyValue: r
  };
}, $i = (e) => Object.keys(e), pr = P();
function Wa(e, t = void 0) {
  const n = xt() ? Le(Nc, pr) : pr;
  return e ? A(() => {
    var o, s;
    return (s = (o = n.value) == null ? void 0 : o[e]) != null ? s : t;
  }) : n;
}
function uu(e, t) {
  const n = Wa(), o = et(e, A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || _s;
  })), s = Lr(A(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), r = Ha(A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || nu;
  })), a = A(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return du(A(() => l(n) || {})), {
    ns: o,
    locale: s,
    zIndex: r,
    size: a
  };
}
const du = (e, t, n = !1) => {
  var o;
  const s = !!xt(), r = s ? Wa() : void 0, a = (o = void 0) != null ? o : s ? vn : void 0;
  if (!a)
    return;
  const i = A(() => {
    const c = l(e);
    return r?.value ? mv(r.value, c) : c;
  });
  return a(Nc, i), a(su, A(() => i.value.locale)), a(Dc, A(() => i.value.namespace)), a(ou, A(() => i.value.zIndex)), a(lu, {
    size: A(() => i.value.size || "")
  }), a(iu, A(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !pr.value) && (pr.value = i.value), i;
}, mv = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...$i(e), ...$i(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
}, vt = "update:modelValue", Ko = "change", Go = "input";
var je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
const fu = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ri = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, hv = (e, t) => {
  !e || !t.trim() || e.classList.add(...fu(t));
}, gv = (e, t) => {
  !e || !t.trim() || e.classList.remove(...fu(t));
}, vv = (e, t) => {
  var n;
  if (!We || !e)
    return "";
  let o = Hf(t);
  o === "float" && (o = "cssFloat");
  try {
    const s = e.style[o];
    if (s)
      return s;
    const r = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return r ? r[o] : "";
  } catch {
    return e.style[o];
  }
};
function fo(e, t = "px") {
  if (!e)
    return "";
  if (Pe(e) || Rg(e))
    return `${e}${t}`;
  if (Zt(e))
    return e;
}
let Ks;
const bv = (e) => {
  var t;
  if (!We)
    return 0;
  if (Ks !== void 0)
    return Ks;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const s = document.createElement("div");
  s.style.width = "100%", n.appendChild(s);
  const r = s.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Ks = o - r, Ks;
};
function yv(e, t) {
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
  const s = t.offsetTop + n.reduce((c, u) => c + u.offsetTop, 0), r = s + t.offsetHeight, a = e.scrollTop, i = a + e.clientHeight;
  s < a ? e.scrollTop = s : r > i && (e.scrollTop = r - e.clientHeight);
}
const wn = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, pu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), mu = (e) => (e.install = co, e), wv = Ne({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), kv = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), _v = /* @__PURE__ */ oe({
  ...kv,
  props: wv,
  setup(e) {
    const t = e, n = et("icon"), o = A(() => {
      const { size: s, color: r } = t;
      return !s && !r ? {} : {
        fontSize: In(s) ? void 0 : fo(s),
        "--color": r
      };
    });
    return (s, r) => (S(), D("i", ko({
      class: l(n).b(),
      style: l(o)
    }, s.$attrs), [
      ie(s.$slots, "default")
    ], 16));
  }
});
var Tv = /* @__PURE__ */ je(_v, [["__file", "icon.vue"]]);
const Nt = wn(Tv);
/*! Element Plus Icons Vue v2.3.1 */
var Sv = /* @__PURE__ */ oe({
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
}), hu = Sv, Av = /* @__PURE__ */ oe({
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
}), Cv = Av, Ev = /* @__PURE__ */ oe({
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
}), xv = Ev, Lv = /* @__PURE__ */ oe({
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
}), Iv = Lv, Ov = /* @__PURE__ */ oe({
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
}), Ua = Ov, $v = /* @__PURE__ */ oe({
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
}), mr = $v, Rv = /* @__PURE__ */ oe({
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
}), Mv = Rv, Pv = /* @__PURE__ */ oe({
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
}), Nv = Pv, Dv = /* @__PURE__ */ oe({
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
}), zv = Dv, Bv = /* @__PURE__ */ oe({
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
}), Fv = Bv, jv = /* @__PURE__ */ oe({
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
}), Vv = jv, Hv = /* @__PURE__ */ oe({
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
}), Wv = Hv, Uv = /* @__PURE__ */ oe({
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
}), Gv = Uv, qv = /* @__PURE__ */ oe({
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
}), Kv = qv;
const So = he([
  String,
  Object,
  Function
]), gu = {
  Close: mr
}, Zv = {
  Close: mr
}, hr = {
  success: Wv,
  warning: Kv,
  error: Iv,
  info: Nv
}, vu = {
  validating: zv,
  success: xv,
  error: Ua
}, bu = () => We && /firefox/i.test(window.navigator.userAgent);
let Vt;
const Yv = {
  height: "0",
  visibility: "hidden",
  overflow: bu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Xv = [
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
function Qv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Xv.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: s, boxSizing: n };
}
function Mi(e, t = 1, n) {
  var o;
  Vt || (Vt = document.createElement("textarea"), document.body.appendChild(Vt));
  const { paddingSize: s, borderSize: r, boxSizing: a, contextStyle: i } = Qv(e);
  i.forEach(([m, g]) => Vt?.style.setProperty(m, g)), Object.entries(Yv).forEach(([m, g]) => Vt?.style.setProperty(m, g, "important")), Vt.value = e.value || e.placeholder || "";
  let c = Vt.scrollHeight;
  const u = {};
  a === "border-box" ? c = c + r : a === "content-box" && (c = c - s), Vt.value = "";
  const d = Vt.scrollHeight - s;
  if (Pe(t)) {
    let m = d * t;
    a === "border-box" && (m = m + s + r), c = Math.max(m, c), u.minHeight = `${m}px`;
  }
  if (Pe(n)) {
    let m = d * n;
    a === "border-box" && (m = m + s + r), c = Math.min(m, c);
  }
  return u.height = `${c}px`, (o = Vt.parentNode) == null || o.removeChild(Vt), Vt = void 0, u;
}
const yu = (e) => e, Jv = Ne({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), rs = (e) => $g(Jv, e), e0 = Ne({
  id: {
    type: String,
    default: void 0
  },
  size: Or,
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
    default: () => yu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...rs(["ariaLabel"])
}), t0 = {
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
}, n0 = ["class", "style"], o0 = /^on[A-Z]/, s0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = A(() => (n?.value || []).concat(n0)), s = xt();
  return s ? A(() => {
    var r;
    return dr(Object.entries((r = s.proxy) == null ? void 0 : r.$attrs).filter(([a]) => !o.value.includes(a) && !(t && o0.test(a))));
  }) : A(() => ({}));
}, Ga = Symbol("formContextKey"), gr = Symbol("formItemContextKey"), Pi = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, r0 = Symbol("elIdInjection"), wu = () => xt() ? Le(r0, Pi) : Pi, Zo = (e) => {
  const t = wu(), n = Ra();
  return jg(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, qa = () => {
  const e = Le(Ga, void 0), t = Le(gr, void 0);
  return {
    form: e,
    formItem: t
  };
}, ku = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = P(!1)), o || (o = P(!1));
  const s = P();
  let r;
  const a = A(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ot(() => {
    r = pe([qn(e, "id"), n], ([i, c]) => {
      const u = i ?? (c ? void 0 : Zo().value);
      u !== s.value && (t?.removeInputId && (s.value && t.removeInputId(s.value), !o?.value && !c && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), Ia(() => {
    r && r(), t?.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: a,
    inputId: s
  };
}, _u = (e) => {
  const t = xt();
  return A(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, $r = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : _u("size"), s = t.global ? n : uv(), r = t.form ? { size: void 0 } : Le(Ga, void 0), a = t.formItem ? { size: void 0 } : Le(gr, void 0);
  return A(() => o.value || l(e) || a?.size || r?.size || s.value || "");
}, Tu = (e) => {
  const t = _u("disabled"), n = Le(Ga, void 0);
  return A(() => t.value || l(e) || n?.disabled || !1);
};
function Su(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: s
} = {}) {
  const r = xt(), { emit: a } = r, i = io(), c = P(!1), u = (g) => {
    nt(t) && t(g) || c.value || (c.value = !0, a("focus", g), n?.());
  }, d = (g) => {
    var w;
    nt(o) && o(g) || g.relatedTarget && ((w = i.value) != null && w.contains(g.relatedTarget)) || (c.value = !1, a("blur", g), s?.());
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
const a0 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Au({
  afterComposition: e,
  emit: t
}) {
  const n = P(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, s = (i) => {
    var c;
    t?.("compositionupdate", i);
    const u = (c = i.target) == null ? void 0 : c.value, d = u[u.length - 1] || "";
    n.value = !a0(d);
  }, r = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Ze(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? r(i) : s(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: s,
    handleCompositionEnd: r
  };
}
function l0(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: r, value: a } = e.value;
    if (s == null || r == null)
      return;
    const i = a.slice(0, Math.max(0, s)), c = a.slice(Math.max(0, r));
    t = {
      selectionStart: s,
      selectionEnd: r,
      value: a,
      beforeTxt: i,
      afterTxt: c
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: s } = e.value, { beforeTxt: r, afterTxt: a, selectionStart: i } = t;
    if (r == null || a == null || i == null)
      return;
    let c = s.length;
    if (s.endsWith(a))
      c = s.length - a.length;
    else if (s.startsWith(r))
      c = r.length;
    else {
      const u = r[i - 1], d = s.indexOf(u, i - 1);
      d !== -1 && (c = d + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, o];
}
const i0 = "ElInput", c0 = oe({
  name: i0,
  inheritAttrs: !1
}), u0 = /* @__PURE__ */ oe({
  ...c0,
  props: e0,
  emits: t0,
  setup(e, { expose: t, emit: n }) {
    const o = e, s = af(), r = s0(), a = Rc(), i = A(() => [
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
      s.class
    ]), c = A(() => [
      h.e("wrapper"),
      h.is("focus", K.value)
    ]), { form: u, formItem: d } = qa(), { inputId: m } = ku(o, {
      formItemContext: d
    }), g = $r(), w = Tu(), h = et("input"), b = et("textarea"), C = io(), k = io(), M = P(!1), j = P(!1), L = P(), I = io(o.inputStyle), O = A(() => C.value || k.value), { wrapperRef: R, isFocused: K, handleFocus: F, handleBlur: ne } = Su(O, {
      beforeFocus() {
        return w.value;
      },
      afterBlur() {
        var q;
        o.validateEvent && ((q = d?.validate) == null || q.call(d, "blur").catch((ke) => void 0));
      }
    }), H = A(() => {
      var q;
      return (q = u?.statusIcon) != null ? q : !1;
    }), re = A(() => d?.validateState || ""), de = A(() => re.value && vu[re.value]), ce = A(() => j.value ? Gv : Mv), $ = A(() => [
      s.style
    ]), V = A(() => [
      o.inputStyle,
      I.value,
      { resize: o.resize }
    ]), B = A(() => Yn(o.modelValue) ? "" : String(o.modelValue)), ue = A(() => o.clearable && !w.value && !o.readonly && !!B.value && (K.value || M.value)), fe = A(() => o.showPassword && !w.value && !!B.value && (!!B.value || K.value)), Te = A(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !w.value && !o.readonly && !o.showPassword), De = A(() => B.value.length), Ue = A(() => !!Te.value && De.value > Number(o.maxlength)), ve = A(() => !!a.suffix || !!o.suffixIcon || ue.value || o.showPassword || Te.value || !!re.value && H.value), [W, U] = l0(C);
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
          const dt = en(ke) ? ke.minRows : void 0, xe = en(ke) ? ke.maxRows : void 0, kt = Mi(k.value, dt, xe);
          I.value = {
            overflowY: "hidden",
            ...kt
          }, Ze(() => {
            k.value.offsetHeight, I.value = kt;
          });
        } else
          I.value = {
            minHeight: Mi(k.value).minHeight
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
        n(vt, ke), n(Go, ke), await Ze(), X(), U();
      }
    }, ze = (q) => {
      let { value: ke } = q.target;
      o.formatter && o.parser && (ke = o.parser(ke)), n(Ko, ke);
    }, {
      isComposing: ut,
      handleCompositionStart: Ge,
      handleCompositionUpdate: Lt,
      handleCompositionEnd: bt
    } = Au({ emit: n, afterComposition: Ve }), qe = () => {
      W(), j.value = !j.value, setTimeout(U);
    }, yt = () => {
      var q;
      return (q = O.value) == null ? void 0 : q.focus();
    }, st = () => {
      var q;
      return (q = O.value) == null ? void 0 : q.blur();
    }, wt = (q) => {
      M.value = !1, n("mouseleave", q);
    }, Xe = (q) => {
      M.value = !0, n("mouseenter", q);
    }, ct = (q) => {
      n("keydown", q);
    }, It = () => {
      var q;
      (q = O.value) == null || q.select();
    }, Bt = () => {
      n(vt, ""), n(Ko, ""), n("clear"), n(Go, "");
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
      blur: st,
      select: It,
      clear: Bt,
      resizeTextarea: me
    }), (q, ke) => (S(), D("div", {
      class: z([
        l(i),
        {
          [l(h).bm("group", "append")]: q.$slots.append,
          [l(h).bm("group", "prepend")]: q.$slots.prepend
        }
      ]),
      style: mt(l($)),
      onMouseenter: Xe,
      onMouseleave: wt
    }, [
      Y(" input "),
      q.type !== "textarea" ? (S(), D(at, { key: 0 }, [
        Y(" prepend slot "),
        q.$slots.prepend ? (S(), D("div", {
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
          q.$slots.prefix || q.prefixIcon ? (S(), D("span", {
            key: 0,
            class: z(l(h).e("prefix"))
          }, [
            f("span", {
              class: z(l(h).e("prefix-inner"))
            }, [
              ie(q.$slots, "prefix"),
              q.prefixIcon ? (S(), se(l(Nt), {
                key: 0,
                class: z(l(h).e("icon"))
              }, {
                default: J(() => [
                  (S(), se(Jt(q.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0),
          f("input", ko({
            id: l(m),
            ref_key: "input",
            ref: C,
            class: l(h).e("inner")
          }, l(r), {
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
          l(ve) ? (S(), D("span", {
            key: 1,
            class: z(l(h).e("suffix"))
          }, [
            f("span", {
              class: z(l(h).e("suffix-inner"))
            }, [
              !l(ue) || !l(fe) || !l(Te) ? (S(), D(at, { key: 0 }, [
                ie(q.$slots, "suffix"),
                q.suffixIcon ? (S(), se(l(Nt), {
                  key: 0,
                  class: z(l(h).e("icon"))
                }, {
                  default: J(() => [
                    (S(), se(Jt(q.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Y("v-if", !0)
              ], 64)) : Y("v-if", !0),
              l(ue) ? (S(), se(l(Nt), {
                key: 1,
                class: z([l(h).e("icon"), l(h).e("clear")]),
                onMousedown: Ke(l(co), ["prevent"]),
                onClick: Bt
              }, {
                default: J(() => [
                  _(l(Ua))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Y("v-if", !0),
              l(fe) ? (S(), se(l(Nt), {
                key: 2,
                class: z([l(h).e("icon"), l(h).e("password")]),
                onClick: qe
              }, {
                default: J(() => [
                  (S(), se(Jt(l(ce))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              l(Te) ? (S(), D("span", {
                key: 3,
                class: z(l(h).e("count"))
              }, [
                f("span", {
                  class: z(l(h).e("count-inner"))
                }, E(l(De)) + " / " + E(q.maxlength), 3)
              ], 2)) : Y("v-if", !0),
              l(re) && l(de) && l(H) ? (S(), se(l(Nt), {
                key: 4,
                class: z([
                  l(h).e("icon"),
                  l(h).e("validateIcon"),
                  l(h).is("loading", l(re) === "validating")
                ])
              }, {
                default: J(() => [
                  (S(), se(Jt(l(de))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0)
        ], 2),
        Y(" append slot "),
        q.$slots.append ? (S(), D("div", {
          key: 1,
          class: z(l(h).be("group", "append"))
        }, [
          ie(q.$slots, "append")
        ], 2)) : Y("v-if", !0)
      ], 64)) : (S(), D(at, { key: 1 }, [
        Y(" textarea "),
        f("textarea", ko({
          id: l(m),
          ref_key: "textarea",
          ref: k,
          class: [l(b).e("inner"), l(h).is("focus", l(K))]
        }, l(r), {
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
        l(Te) ? (S(), D("span", {
          key: 0,
          style: mt(L.value),
          class: z(l(h).e("count"))
        }, E(l(De)) + " / " + E(q.maxlength), 7)) : Y("v-if", !0)
      ], 64))
    ], 38));
  }
});
var d0 = /* @__PURE__ */ je(u0, [["__file", "input.vue"]]);
const f0 = wn(d0), Bo = 4, p0 = {
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
}, m0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ka = Symbol("scrollbarContextKey"), h0 = Ne({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), g0 = "Thumb", v0 = /* @__PURE__ */ oe({
  __name: "thumb",
  props: h0,
  setup(e) {
    const t = e, n = Le(Ka), o = et("scrollbar");
    n || Va(g0, "can not inject scrollbar context");
    const s = P(), r = P(), a = P({}), i = P(!1);
    let c = !1, u = !1, d = We ? document.onselectstart : null;
    const m = A(() => p0[t.vertical ? "vertical" : "horizontal"]), g = A(() => m0({
      size: t.size,
      move: t.move,
      bar: m.value
    })), w = A(() => s.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / r.value[m.value.offset]), h = (O) => {
      var R;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (R = window.getSelection()) == null || R.removeAllRanges(), C(O);
      const K = O.currentTarget;
      K && (a.value[m.value.axis] = K[m.value.offset] - (O[m.value.client] - K.getBoundingClientRect()[m.value.direction]));
    }, b = (O) => {
      if (!r.value || !s.value || !n.wrapElement)
        return;
      const R = Math.abs(O.target.getBoundingClientRect()[m.value.direction] - O[m.value.client]), K = r.value[m.value.offset] / 2, F = (R - K) * 100 * w.value / s.value[m.value.offset];
      n.wrapElement[m.value.scroll] = F * n.wrapElement[m.value.scrollSize] / 100;
    }, C = (O) => {
      O.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", k), document.addEventListener("mouseup", M), d = document.onselectstart, document.onselectstart = () => !1;
    }, k = (O) => {
      if (!s.value || !r.value || c === !1)
        return;
      const R = a.value[m.value.axis];
      if (!R)
        return;
      const K = (s.value.getBoundingClientRect()[m.value.direction] - O[m.value.client]) * -1, F = r.value[m.value.offset] - R, ne = (K - F) * 100 * w.value / s.value[m.value.offset];
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
    return gn(qn(n, "scrollbarElement"), "mousemove", j), gn(qn(n, "scrollbarElement"), "mouseleave", L), (O, R) => (S(), se(Eo, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: J(() => [
        lt(f("div", {
          ref_key: "instance",
          ref: s,
          class: z([l(o).e("bar"), l(o).is(l(m).key)]),
          onMousedown: b
        }, [
          f("div", {
            ref_key: "thumb",
            ref: r,
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
var Ni = /* @__PURE__ */ je(v0, [["__file", "thumb.vue"]]);
const b0 = Ne({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), y0 = /* @__PURE__ */ oe({
  __name: "bar",
  props: b0,
  setup(e, { expose: t }) {
    const n = e, o = Le(Ka), s = P(0), r = P(0), a = P(""), i = P(""), c = P(1), u = P(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const w = g.offsetHeight - Bo, h = g.offsetWidth - Bo;
          r.value = g.scrollTop * 100 / w * c.value, s.value = g.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const w = g.offsetHeight - Bo, h = g.offsetWidth - Bo, b = w ** 2 / g.scrollHeight, C = h ** 2 / g.scrollWidth, k = Math.max(b, n.minSize), M = Math.max(C, n.minSize);
        c.value = b / (w - b) / (k / (w - k)), u.value = C / (h - C) / (M / (h - M)), i.value = k + Bo < w ? `${k}px` : "", a.value = M + Bo < h ? `${M}px` : "";
      }
    }), (g, w) => (S(), D(at, null, [
      _(Ni, {
        move: s.value,
        ratio: u.value,
        size: a.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _(Ni, {
        move: r.value,
        ratio: c.value,
        size: i.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var w0 = /* @__PURE__ */ je(y0, [["__file", "bar.vue"]]);
const k0 = Ne({
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
  ...rs(["ariaLabel", "ariaOrientation"])
}), _0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Pe)
}, T0 = "ElScrollbar", S0 = oe({
  name: T0
}), A0 = /* @__PURE__ */ oe({
  ...S0,
  props: k0,
  emits: _0,
  setup(e, { expose: t, emit: n }) {
    const o = e, s = et("scrollbar");
    let r, a, i = 0, c = 0;
    const u = P(), d = P(), m = P(), g = P(), w = A(() => {
      const I = {};
      return o.height && (I.height = fo(o.height)), o.maxHeight && (I.maxHeight = fo(o.maxHeight)), [o.wrapStyle, I];
    }), h = A(() => [
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
      I ? (r?.(), a?.()) : ({ stop: r } = xn(m, L), a = gn("resize", L));
    }, { immediate: !0 }), pe(() => [o.maxHeight, o.height], () => {
      o.native || Ze(() => {
        var I;
        L(), d.value && ((I = g.value) == null || I.handleScroll(d.value));
      });
    }), vn(Ka, _o({
      scrollbarElement: u,
      wrapElement: d
    })), lf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = c);
    }), ot(() => {
      o.native || Ze(() => {
        L();
      });
    }), Mc(() => L()), t({
      wrapRef: d,
      update: L,
      scrollTo: k,
      setScrollTop: M,
      setScrollLeft: j,
      handleScroll: C
    }), (I, O) => (S(), D("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: z(l(s).b())
    }, [
      f("div", {
        ref_key: "wrapRef",
        ref: d,
        class: z(l(h)),
        style: mt(l(w)),
        tabindex: I.tabindex,
        onScroll: C
      }, [
        (S(), se(Jt(I.tag), {
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
      I.native ? Y("v-if", !0) : (S(), se(w0, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: I.always,
        "min-size": I.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var C0 = /* @__PURE__ */ je(A0, [["__file", "scrollbar.vue"]]);
const E0 = wn(C0), Za = Symbol("popper"), Cu = Symbol("popperContent"), x0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Eu = Ne({
  role: {
    type: String,
    values: x0,
    default: "tooltip"
  }
}), L0 = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), I0 = /* @__PURE__ */ oe({
  ...L0,
  props: Eu,
  setup(e, { expose: t }) {
    const n = e, o = P(), s = P(), r = P(), a = P(), i = A(() => n.role), c = {
      triggerRef: o,
      popperInstanceRef: s,
      contentRef: r,
      referenceRef: a,
      role: i
    };
    return t(c), vn(Za, c), (u, d) => ie(u.$slots, "default");
  }
});
var O0 = /* @__PURE__ */ je(I0, [["__file", "popper.vue"]]);
const xu = Ne({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), $0 = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), R0 = /* @__PURE__ */ oe({
  ...$0,
  props: xu,
  setup(e, { expose: t }) {
    const n = e, o = et("popper"), { arrowOffset: s, arrowRef: r, arrowStyle: a } = Le(Cu, void 0);
    return pe(() => n.arrowOffset, (i) => {
      s.value = i;
    }), yn(() => {
      r.value = void 0;
    }), t({
      arrowRef: r
    }), (i, c) => (S(), D("span", {
      ref_key: "arrowRef",
      ref: r,
      class: z(l(o).e("arrow")),
      style: mt(l(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var M0 = /* @__PURE__ */ je(R0, [["__file", "arrow.vue"]]);
const Lu = Ne({
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
}), Iu = Symbol("elForwardRef"), P0 = (e) => {
  vn(Iu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, N0 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ha = (e) => {
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
}, D0 = "ElOnlyChild", z0 = oe({
  name: D0,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const s = Le(Iu), r = N0((o = s?.setForwardRef) != null ? o : co);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i || i.length > 1)
        return null;
      const c = Ou(i);
      return c ? lt(cf(c, n), [[r]]) : null;
    };
  }
});
function Ou(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (en(n))
      switch (n.type) {
        case df:
          continue;
        case uf:
        case "svg":
          return Di(n);
        case at:
          return Ou(n.children);
        default:
          return n;
      }
    return Di(n);
  }
  return null;
}
function Di(e) {
  const t = et("only-child");
  return _("span", {
    class: t.e("content")
  }, [e]);
}
const B0 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), F0 = /* @__PURE__ */ oe({
  ...B0,
  props: Lu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: s } = Le(Za, void 0);
    P0(s);
    const r = A(() => i.value ? n.id : void 0), a = A(() => {
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
    return ot(() => {
      pe(() => n.virtualRef, (m) => {
        m && (s.value = Kn(m));
      }, {
        immediate: !0
      }), pe(s, (m, g) => {
        u?.(), u = void 0, hn(m) && (d.forEach((w) => {
          var h;
          const b = n[w];
          b && (m.addEventListener(w.slice(2).toLowerCase(), b), (h = g?.removeEventListener) == null || h.call(g, w.slice(2).toLowerCase(), b));
        }), ha(m) && (u = pe([r, a, i, c], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, b) => {
            Yn(w[b]) ? m.removeAttribute(h) : m.setAttribute(h, w[b]);
          });
        }, { immediate: !0 }))), hn(g) && ha(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((w) => g.removeAttribute(w));
      }, {
        immediate: !0
      });
    }), yn(() => {
      if (u?.(), u = void 0, s.value && hn(s.value)) {
        const m = s.value;
        d.forEach((g) => {
          const w = n[g];
          w && m.removeEventListener(g.slice(2).toLowerCase(), w);
        }), s.value = void 0;
      }
    }), t({
      triggerRef: s
    }), (m, g) => m.virtualTriggering ? Y("v-if", !0) : (S(), se(l(z0), ko({ key: 0 }, m.$attrs, {
      "aria-controls": l(r),
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
var j0 = /* @__PURE__ */ je(F0, [["__file", "trigger.vue"]]);
const Yr = "focus-trap.focus-after-trapped", Xr = "focus-trap.focus-after-released", V0 = "focus-trap.focusout-prevented", zi = {
  cancelable: !0,
  bubbles: !1
}, H0 = {
  cancelable: !0,
  bubbles: !1
}, Bi = "focusAfterTrapped", Fi = "focusAfterReleased", $u = Symbol("elFocusTrap"), Ya = P(), Rr = P(0), Xa = P(0);
let Zs = 0;
const Ru = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ji = (e, t) => {
  for (const n of e)
    if (!W0(n, t))
      return n;
}, W0 = (e, t) => {
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
}, U0 = (e) => {
  const t = Ru(e), n = ji(t, e), o = ji(t.reverse(), e);
  return [n, o];
}, G0 = (e) => e instanceof HTMLInputElement && "select" in e, Un = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    hn(e) && !ha(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Xa.value = window.performance.now(), e !== n && G0(e) && t && e.select(), hn(e) && o && e.removeAttribute("tabindex");
  }
};
function Vi(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const q0 = () => {
  let e = [];
  return {
    push: (o) => {
      const s = e[0];
      s && o !== s && s.pause(), e = Vi(e, o), e.unshift(o);
    },
    remove: (o) => {
      var s, r;
      e = Vi(e, o), (r = (s = e[0]) == null ? void 0 : s.resume) == null || r.call(s);
    }
  };
}, K0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Un(o, t), document.activeElement !== n)
      return;
}, Hi = q0(), Z0 = () => Rr.value > Xa.value, Ys = () => {
  Ya.value = "pointer", Rr.value = window.performance.now();
}, Wi = () => {
  Ya.value = "keyboard", Rr.value = window.performance.now();
}, Y0 = () => (ot(() => {
  Zs === 0 && (document.addEventListener("mousedown", Ys), document.addEventListener("touchstart", Ys), document.addEventListener("keydown", Wi)), Zs++;
}), yn(() => {
  Zs--, Zs <= 0 && (document.removeEventListener("mousedown", Ys), document.removeEventListener("touchstart", Ys), document.removeEventListener("keydown", Wi));
}), {
  focusReason: Ya,
  lastUserFocusTimestamp: Rr,
  lastAutomatedFocusTimestamp: Xa
}), Xs = (e) => new CustomEvent(V0, {
  ...H0,
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
let Wo = [];
const Ui = (e) => {
  e.code === On.esc && Wo.forEach((t) => t(e));
}, X0 = (e) => {
  ot(() => {
    Wo.length === 0 && document.addEventListener("keydown", Ui), We && Wo.push(e);
  }), yn(() => {
    Wo = Wo.filter((t) => t !== e), Wo.length === 0 && We && document.removeEventListener("keydown", Ui);
  });
}, Q0 = oe({
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
    let o, s;
    const { focusReason: r } = Y0();
    X0((h) => {
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
        const K = j, [F, ne] = U0(K);
        if (F && ne) {
          if (!L && R === ne) {
            const re = Xs({
              focusReason: r.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), I && Un(F, !0));
          } else if (L && [F, K].includes(R)) {
            const re = Xs({
              focusReason: r.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), I && Un(ne, !0));
          }
        } else if (R === K) {
          const re = Xs({
            focusReason: r.value
          });
          t("focusout-prevented", re), re.defaultPrevented || h.preventDefault();
        }
      }
    };
    vn($u, {
      focusTrapRef: n,
      onKeydown: i
    }), pe(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), pe([n], ([h], [b]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", d), b.removeEventListener("focusout", m));
    });
    const c = (h) => {
      t(Bi, h);
    }, u = (h) => t(Fi, h), d = (h) => {
      const b = l(n);
      if (!b)
        return;
      const C = h.target, k = h.relatedTarget, M = C && b.contains(C);
      e.trapped || k && b.contains(k) || (o = k), M && t("focusin", h), !a.paused && e.trapped && (M ? s = C : Un(s, !0));
    }, m = (h) => {
      const b = l(n);
      if (!(a.paused || !b))
        if (e.trapped) {
          const C = h.relatedTarget;
          !Yn(C) && !b.contains(C) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const k = Xs({
                focusReason: r.value
              });
              t("focusout-prevented", k), k.defaultPrevented || Un(s, !0);
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
        Hi.push(a);
        const b = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = b, !h.contains(b)) {
          const k = new Event(Yr, zi);
          h.addEventListener(Yr, c), h.dispatchEvent(k), k.defaultPrevented || Ze(() => {
            let M = e.focusStartEl;
            Zt(M) || (Un(M), document.activeElement !== M && (M = "first")), M === "first" && K0(Ru(h), !0), (document.activeElement === b || M === "container") && Un(h);
          });
        }
      }
    }
    function w() {
      const h = l(n);
      if (h) {
        h.removeEventListener(Yr, c);
        const b = new CustomEvent(Xr, {
          ...zi,
          detail: {
            focusReason: r.value
          }
        });
        h.addEventListener(Xr, u), h.dispatchEvent(b), !b.defaultPrevented && (r.value == "keyboard" || !Z0() || h.contains(document.activeElement)) && Un(o ?? document.body), h.removeEventListener(Xr, u), Hi.remove(a);
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
function J0(e, t, n, o, s, r) {
  return ie(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Mu = /* @__PURE__ */ je(Q0, [["render", J0], ["__file", "focus-trap.vue"]]), Ht = "top", nn = "bottom", on = "right", Wt = "left", Qa = "auto", zs = [Ht, nn, on, Wt], Yo = "start", Rs = "end", e1 = "clippingParents", Pu = "viewport", ds = "popper", t1 = "reference", Gi = zs.reduce(function(e, t) {
  return e.concat([t + "-" + Yo, t + "-" + Rs]);
}, []), Mr = [].concat(zs, [Qa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yo, t + "-" + Rs]);
}, []), n1 = "beforeRead", o1 = "read", s1 = "afterRead", r1 = "beforeMain", a1 = "main", l1 = "afterMain", i1 = "beforeWrite", c1 = "write", u1 = "afterWrite", d1 = [n1, o1, s1, r1, a1, l1, i1, c1, u1];
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
function Ao(e) {
  var t = Yt(e).Element;
  return e instanceof t || e instanceof Element;
}
function tn(e) {
  var t = Yt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ja(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Yt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function f1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !tn(r) || !Pn(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var i = s[a];
      i === !1 ? r.removeAttribute(a) : r.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function p1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var s = t.elements[o], r = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !tn(s) || !Pn(s) || (Object.assign(s.style, i), Object.keys(r).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
var Nu = { name: "applyStyles", enabled: !0, phase: "write", fn: f1, effect: p1, requires: ["computeStyles"] };
function $n(e) {
  return e.split("-")[0];
}
var wo = Math.max, vr = Math.min, Xo = Math.round;
function ga() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Du() {
  return !/^((?!chrome|android).)*safari/i.test(ga());
}
function Qo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && tn(e) && (s = e.offsetWidth > 0 && Xo(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Xo(o.height) / e.offsetHeight || 1);
  var a = Ao(e) ? Yt(e) : window, i = a.visualViewport, c = !Du() && n, u = (o.left + (c && i ? i.offsetLeft : 0)) / s, d = (o.top + (c && i ? i.offsetTop : 0)) / r, m = o.width / s, g = o.height / r;
  return { width: m, height: g, top: d, right: u + m, bottom: d + g, left: u, x: u, y: d };
}
function el(e) {
  var t = Qo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function zu(e, t) {
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
function Xn(e) {
  return Yt(e).getComputedStyle(e);
}
function m1(e) {
  return ["table", "td", "th"].indexOf(Pn(e)) >= 0;
}
function po(e) {
  return ((Ao(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pr(e) {
  return Pn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ja(e) ? e.host : null) || po(e);
}
function qi(e) {
  return !tn(e) || Xn(e).position === "fixed" ? null : e.offsetParent;
}
function h1(e) {
  var t = /firefox/i.test(ga()), n = /Trident/i.test(ga());
  if (n && tn(e)) {
    var o = Xn(e);
    if (o.position === "fixed") return null;
  }
  var s = Pr(e);
  for (Ja(s) && (s = s.host); tn(s) && ["html", "body"].indexOf(Pn(s)) < 0; ) {
    var r = Xn(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function Bs(e) {
  for (var t = Yt(e), n = qi(e); n && m1(n) && Xn(n).position === "static"; ) n = qi(n);
  return n && (Pn(n) === "html" || Pn(n) === "body" && Xn(n).position === "static") ? t : n || h1(e) || t;
}
function tl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function As(e, t, n) {
  return wo(e, vr(t, n));
}
function g1(e, t, n) {
  var o = As(e, t, n);
  return o > n ? n : o;
}
function Bu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Fu(e) {
  return Object.assign({}, Bu(), e);
}
function ju(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var v1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Fu(typeof e != "number" ? e : ju(e, zs));
};
function b1(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, a = n.modifiersData.popperOffsets, i = $n(n.placement), c = tl(i), u = [Wt, on].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!r || !a)) {
    var m = v1(s.padding, n), g = el(r), w = c === "y" ? Ht : Wt, h = c === "y" ? nn : on, b = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d], C = a[c] - n.rects.reference[c], k = Bs(r), M = k ? c === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, j = b / 2 - C / 2, L = m[w], I = M - g[d] - m[h], O = M / 2 - g[d] / 2 + j, R = As(L, O, I), K = c;
    n.modifiersData[o] = (t = {}, t[K] = R, t.centerOffset = R - O, t);
  }
}
function y1(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || zu(t.elements.popper, s) && (t.elements.arrow = s));
}
var w1 = { name: "arrow", enabled: !0, phase: "main", fn: b1, effect: y1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jo(e) {
  return e.split("-")[1];
}
var k1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function _1(e, t) {
  var n = e.x, o = e.y, s = t.devicePixelRatio || 1;
  return { x: Xo(n * s) / s || 0, y: Xo(o * s) / s || 0 };
}
function Ki(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, a = e.offsets, i = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = a.x, w = g === void 0 ? 0 : g, h = a.y, b = h === void 0 ? 0 : h, C = typeof d == "function" ? d({ x: w, y: b }) : { x: w, y: b };
  w = C.x, b = C.y;
  var k = a.hasOwnProperty("x"), M = a.hasOwnProperty("y"), j = Wt, L = Ht, I = window;
  if (u) {
    var O = Bs(n), R = "clientHeight", K = "clientWidth";
    if (O === Yt(n) && (O = po(n), Xn(O).position !== "static" && i === "absolute" && (R = "scrollHeight", K = "scrollWidth")), O = O, s === Ht || (s === Wt || s === on) && r === Rs) {
      L = nn;
      var F = m && O === I && I.visualViewport ? I.visualViewport.height : O[R];
      b -= F - o.height, b *= c ? 1 : -1;
    }
    if (s === Wt || (s === Ht || s === nn) && r === Rs) {
      j = on;
      var ne = m && O === I && I.visualViewport ? I.visualViewport.width : O[K];
      w -= ne - o.width, w *= c ? 1 : -1;
    }
  }
  var H = Object.assign({ position: i }, u && k1), re = d === !0 ? _1({ x: w, y: b }, Yt(n)) : { x: w, y: b };
  if (w = re.x, b = re.y, c) {
    var de;
    return Object.assign({}, H, (de = {}, de[L] = M ? "0" : "", de[j] = k ? "0" : "", de.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", de));
  }
  return Object.assign({}, H, (t = {}, t[L] = M ? b + "px" : "", t[j] = k ? w + "px" : "", t.transform = "", t));
}
function T1(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, a = r === void 0 ? !0 : r, i = n.roundOffsets, c = i === void 0 ? !0 : i, u = { placement: $n(t.placement), variation: Jo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ki(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ki(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Vu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: T1, data: {} }, Qs = { passive: !0 };
function S1(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, i = a === void 0 ? !0 : a, c = Yt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Qs);
  }), i && c.addEventListener("resize", n.update, Qs), function() {
    r && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Qs);
    }), i && c.removeEventListener("resize", n.update, Qs);
  };
}
var Hu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: S1, data: {} }, A1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function or(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return A1[t];
  });
}
var C1 = { start: "end", end: "start" };
function Zi(e) {
  return e.replace(/start|end/g, function(t) {
    return C1[t];
  });
}
function nl(e) {
  var t = Yt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function ol(e) {
  return Qo(po(e)).left + nl(e).scrollLeft;
}
function E1(e, t) {
  var n = Yt(e), o = po(e), s = n.visualViewport, r = o.clientWidth, a = o.clientHeight, i = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var u = Du();
    (u || !u && t === "fixed") && (i = s.offsetLeft, c = s.offsetTop);
  }
  return { width: r, height: a, x: i + ol(e), y: c };
}
function x1(e) {
  var t, n = po(e), o = nl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = wo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = wo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -o.scrollLeft + ol(e), c = -o.scrollTop;
  return Xn(s || n).direction === "rtl" && (i += wo(n.clientWidth, s ? s.clientWidth : 0) - r), { width: r, height: a, x: i, y: c };
}
function sl(e) {
  var t = Xn(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function Wu(e) {
  return ["html", "body", "#document"].indexOf(Pn(e)) >= 0 ? e.ownerDocument.body : tn(e) && sl(e) ? e : Wu(Pr(e));
}
function Cs(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Wu(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Yt(o), a = s ? [r].concat(r.visualViewport || [], sl(o) ? o : []) : o, i = t.concat(a);
  return s ? i : i.concat(Cs(Pr(a)));
}
function va(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function L1(e, t) {
  var n = Qo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yi(e, t, n) {
  return t === Pu ? va(E1(e, n)) : Ao(t) ? L1(t, n) : va(x1(po(e)));
}
function I1(e) {
  var t = Cs(Pr(e)), n = ["absolute", "fixed"].indexOf(Xn(e).position) >= 0, o = n && tn(e) ? Bs(e) : e;
  return Ao(o) ? t.filter(function(s) {
    return Ao(s) && zu(s, o) && Pn(s) !== "body";
  }) : [];
}
function O1(e, t, n, o) {
  var s = t === "clippingParents" ? I1(e) : [].concat(t), r = [].concat(s, [n]), a = r[0], i = r.reduce(function(c, u) {
    var d = Yi(e, u, o);
    return c.top = wo(d.top, c.top), c.right = vr(d.right, c.right), c.bottom = vr(d.bottom, c.bottom), c.left = wo(d.left, c.left), c;
  }, Yi(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Uu(e) {
  var t = e.reference, n = e.element, o = e.placement, s = o ? $n(o) : null, r = o ? Jo(o) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
  switch (s) {
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
  var u = s ? tl(s) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (r) {
      case Yo:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Rs:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Ms(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, a = r === void 0 ? e.strategy : r, i = n.boundary, c = i === void 0 ? e1 : i, u = n.rootBoundary, d = u === void 0 ? Pu : u, m = n.elementContext, g = m === void 0 ? ds : m, w = n.altBoundary, h = w === void 0 ? !1 : w, b = n.padding, C = b === void 0 ? 0 : b, k = Fu(typeof C != "number" ? C : ju(C, zs)), M = g === ds ? t1 : ds, j = e.rects.popper, L = e.elements[h ? M : g], I = O1(Ao(L) ? L : L.contextElement || po(e.elements.popper), c, d, a), O = Qo(e.elements.reference), R = Uu({ reference: O, element: j, placement: s }), K = va(Object.assign({}, j, R)), F = g === ds ? K : O, ne = { top: I.top - F.top + k.top, bottom: F.bottom - I.bottom + k.bottom, left: I.left - F.left + k.left, right: F.right - I.right + k.right }, H = e.modifiersData.offset;
  if (g === ds && H) {
    var re = H[s];
    Object.keys(ne).forEach(function(de) {
      var ce = [on, nn].indexOf(de) >= 0 ? 1 : -1, $ = [Ht, nn].indexOf(de) >= 0 ? "y" : "x";
      ne[de] += re[$] * ce;
    });
  }
  return ne;
}
function $1(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, a = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Mr : c, d = Jo(o), m = d ? i ? Gi : Gi.filter(function(h) {
    return Jo(h) === d;
  }) : zs, g = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  g.length === 0 && (g = m);
  var w = g.reduce(function(h, b) {
    return h[b] = Ms(e, { placement: b, boundary: s, rootBoundary: r, padding: a })[$n(b)], h;
  }, {});
  return Object.keys(w).sort(function(h, b) {
    return w[h] - w[b];
  });
}
function R1(e) {
  if ($n(e) === Qa) return [];
  var t = or(e);
  return [Zi(e), t, Zi(t)];
}
function M1(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, i = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, g = n.altBoundary, w = n.flipVariations, h = w === void 0 ? !0 : w, b = n.allowedAutoPlacements, C = t.options.placement, k = $n(C), M = k === C, j = c || (M || !h ? [or(C)] : R1(C)), L = [C].concat(j).reduce(function(W, U) {
      return W.concat($n(U) === Qa ? $1(t, { placement: U, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: b }) : U);
    }, []), I = t.rects.reference, O = t.rects.popper, R = /* @__PURE__ */ new Map(), K = !0, F = L[0], ne = 0; ne < L.length; ne++) {
      var H = L[ne], re = $n(H), de = Jo(H) === Yo, ce = [Ht, nn].indexOf(re) >= 0, $ = ce ? "width" : "height", V = Ms(t, { placement: H, boundary: d, rootBoundary: m, altBoundary: g, padding: u }), B = ce ? de ? on : Wt : de ? nn : Ht;
      I[$] > O[$] && (B = or(B));
      var ue = or(B), fe = [];
      if (r && fe.push(V[re] <= 0), i && fe.push(V[B] <= 0, V[ue] <= 0), fe.every(function(W) {
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
var P1 = { name: "flip", enabled: !0, phase: "main", fn: M1, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Xi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Qi(e) {
  return [Ht, on, nn, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function N1(e) {
  var t = e.state, n = e.name, o = t.rects.reference, s = t.rects.popper, r = t.modifiersData.preventOverflow, a = Ms(t, { elementContext: "reference" }), i = Ms(t, { altBoundary: !0 }), c = Xi(a, o), u = Xi(i, s, r), d = Qi(c), m = Qi(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var D1 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: N1 };
function z1(e, t, n) {
  var o = $n(e), s = [Wt, Ht].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = r[0], i = r[1];
  return a = a || 0, i = (i || 0) * s, [Wt, on].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function B1(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, a = Mr.reduce(function(d, m) {
    return d[m] = z1(m, t.rects, r), d;
  }, {}), i = a[t.placement], c = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var F1 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: B1 };
function j1(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Uu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Gu = { name: "popperOffsets", enabled: !0, phase: "read", fn: j1, data: {} };
function V1(e) {
  return e === "x" ? "y" : "x";
}
function H1(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, i = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, g = n.tether, w = g === void 0 ? !0 : g, h = n.tetherOffset, b = h === void 0 ? 0 : h, C = Ms(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: d }), k = $n(t.placement), M = Jo(t.placement), j = !M, L = tl(k), I = V1(L), O = t.modifiersData.popperOffsets, R = t.rects.reference, K = t.rects.popper, F = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, ne = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, re = { x: 0, y: 0 };
  if (O) {
    if (r) {
      var de, ce = L === "y" ? Ht : Wt, $ = L === "y" ? nn : on, V = L === "y" ? "height" : "width", B = O[L], ue = B + C[ce], fe = B - C[$], Te = w ? -K[V] / 2 : 0, De = M === Yo ? R[V] : K[V], Ue = M === Yo ? -K[V] : -R[V], ve = t.elements.arrow, W = w && ve ? el(ve) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Bu(), me = U[ce], Ie = U[$], ee = As(0, R[V], W[V]), X = j ? R[V] / 2 - Te - ee - me - ne.mainAxis : De - ee - me - ne.mainAxis, Ve = j ? -R[V] / 2 + Te + ee + Ie + ne.mainAxis : Ue + ee + Ie + ne.mainAxis, ze = t.elements.arrow && Bs(t.elements.arrow), ut = ze ? L === "y" ? ze.clientTop || 0 : ze.clientLeft || 0 : 0, Ge = (de = H?.[L]) != null ? de : 0, Lt = B + X - Ge - ut, bt = B + Ve - Ge, qe = As(w ? vr(ue, Lt) : ue, B, w ? wo(fe, bt) : fe);
      O[L] = qe, re[L] = qe - B;
    }
    if (i) {
      var yt, st = L === "x" ? Ht : Wt, wt = L === "x" ? nn : on, Xe = O[I], ct = I === "y" ? "height" : "width", It = Xe + C[st], Bt = Xe - C[wt], q = [Ht, Wt].indexOf(k) !== -1, ke = (yt = H?.[I]) != null ? yt : 0, dt = q ? It : Xe - R[ct] - K[ct] - ke + ne.altAxis, xe = q ? Xe + R[ct] + K[ct] - ke - ne.altAxis : Bt, kt = w && q ? g1(dt, Xe, xe) : As(w ? dt : It, Xe, w ? xe : Bt);
      O[I] = kt, re[I] = kt - Xe;
    }
    t.modifiersData[o] = re;
  }
}
var W1 = { name: "preventOverflow", enabled: !0, phase: "main", fn: H1, requiresIfExists: ["offset"] };
function U1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function G1(e) {
  return e === Yt(e) || !tn(e) ? nl(e) : U1(e);
}
function q1(e) {
  var t = e.getBoundingClientRect(), n = Xo(t.width) / e.offsetWidth || 1, o = Xo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function K1(e, t, n) {
  n === void 0 && (n = !1);
  var o = tn(t), s = tn(t) && q1(t), r = po(t), a = Qo(e, s, n), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (o || !o && !n) && ((Pn(t) !== "body" || sl(r)) && (i = G1(t)), tn(t) ? (c = Qo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = ol(r))), { x: a.left + i.scrollLeft - c.x, y: a.top + i.scrollTop - c.y, width: a.width, height: a.height };
}
function Z1(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var a = [].concat(r.requires || [], r.requiresIfExists || []);
    a.forEach(function(i) {
      if (!n.has(i)) {
        var c = t.get(i);
        c && s(c);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || s(r);
  }), o;
}
function Y1(e) {
  var t = Z1(e);
  return d1.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function X1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Q1(e) {
  var t = e.reduce(function(n, o) {
    var s = n[o.name];
    return n[o.name] = s ? Object.assign({}, s, o, { options: Object.assign({}, s.options, o.options), data: Object.assign({}, s.data, o.data) }) : o, n;
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
function rl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? Ji : s;
  return function(a, i, c) {
    c === void 0 && (c = r);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ji, r), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, g = { state: u, setOptions: function(b) {
      var C = typeof b == "function" ? b(u.options) : b;
      h(), u.options = Object.assign({}, r, u.options, C), u.scrollParents = { reference: Ao(a) ? Cs(a) : a.contextElement ? Cs(a.contextElement) : [], popper: Cs(i) };
      var k = Y1(Q1([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = k.filter(function(M) {
        return M.enabled;
      }), w(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, C = b.reference, k = b.popper;
        if (ec(C, k)) {
          u.rects = { reference: K1(C, Bs(k), u.options.strategy === "fixed"), popper: el(k) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(K) {
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
    }, update: X1(function() {
      return new Promise(function(b) {
        g.forceUpdate(), b(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!ec(a, i)) return g;
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
rl();
var J1 = [Hu, Gu, Vu, Nu];
rl({ defaultModifiers: J1 });
var eb = [Hu, Gu, Vu, Nu, F1, P1, W1, w1, D1], tb = rl({ defaultModifiers: eb });
const nb = ["fixed", "absolute"], ob = Ne({
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
    values: Mr,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: nb,
    default: "absolute"
  }
}), qu = Ne({
  ...ob,
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
  ...rs(["ariaLabel"])
}), sb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, rb = (e, t) => {
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
}, ab = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: s } = e, r = {
    placement: n,
    strategy: o,
    ...s,
    modifiers: [...ib(e), ...t]
  };
  return cb(r, s?.modifiers), r;
}, lb = (e) => {
  if (We)
    return Kn(e);
};
function ib(e) {
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
function cb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ub = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = db(c);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, s = A(() => {
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
  }), r = io(), a = P({
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
    r.value && (r.value.destroy(), r.value = void 0);
  };
  return pe(s, (c) => {
    const u = l(r);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), pe([e, t], ([c, u]) => {
    i(), !(!c || !u) && (r.value = tb(c, u, l(s)));
  }), yn(() => {
    i();
  }), {
    state: A(() => {
      var c;
      return { ...((c = l(r)) == null ? void 0 : c.state) || {} };
    }),
    styles: A(() => l(a).styles),
    attributes: A(() => l(a).attributes),
    update: () => {
      var c;
      return (c = l(r)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = l(r)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: A(() => l(r))
  };
};
function db(e) {
  const t = Object.keys(e.elements), n = dr(t.map((s) => [s, e.styles[s] || {}])), o = dr(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: o
  };
}
const fb = 0, pb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: s } = Le(Za, void 0), r = P(), a = P(), i = A(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = A(() => {
    var k;
    const M = l(r), j = (k = l(a)) != null ? k : fb;
    return {
      name: "arrow",
      enabled: !Jc(M),
      options: {
        element: M,
        padding: j
      }
    };
  }), u = A(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...ab(e, [
      l(c),
      l(i)
    ])
  })), d = A(() => lb(e.referenceEl) || l(o)), { attributes: m, state: g, styles: w, update: h, forceUpdate: b, instanceRef: C } = ub(d, n, u);
  return pe(C, (k) => t.value = k), ot(() => {
    pe(() => {
      var k;
      return (k = l(d)) == null ? void 0 : k.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: m,
    arrowRef: r,
    contentRef: n,
    instanceRef: C,
    state: g,
    styles: w,
    role: s,
    forceUpdate: b,
    update: h
  };
}, mb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: s } = Ha(), r = et("popper"), a = A(() => l(t).popper), i = P(Pe(e.zIndex) ? e.zIndex : s()), c = A(() => [
    r.b(),
    r.is("pure", e.pure),
    r.is(e.effect),
    e.popperClass
  ]), u = A(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = A(() => o.value === "dialog" ? "false" : void 0), m = A(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: a,
    contentClass: c,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Pe(e.zIndex) ? e.zIndex : s();
    }
  };
}, hb = oe({
  name: "ElPopperContent"
}), gb = /* @__PURE__ */ oe({
  ...hb,
  props: qu,
  emits: sb,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: s,
      trapped: r,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = rb(o, n), { attributes: m, arrowRef: g, contentRef: w, styles: h, instanceRef: b, role: C, update: k } = pb(o), {
      ariaModal: M,
      arrowStyle: j,
      contentAttrs: L,
      contentClass: I,
      contentStyle: O,
      updateZIndex: R
    } = mb(o, {
      styles: h,
      attributes: m,
      role: C
    }), K = Le(gr, void 0), F = P();
    vn(Cu, {
      arrowStyle: j,
      arrowRef: g,
      arrowOffset: F
    }), K && vn(gr, {
      ...K,
      addInputId: co,
      removeInputId: co
    });
    let ne;
    const H = (de = !0) => {
      k(), de && R();
    }, re = () => {
      H(!1), o.visible && o.focusOnShow ? r.value = !0 : o.visible === !1 && (r.value = !1);
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
      }, { immediate: !0 }), pe(() => o.visible, re, { immediate: !0 });
    }), yn(() => {
      ne?.(), ne = void 0;
    }), t({
      popperContentRef: w,
      popperInstanceRef: b,
      updatePopper: H,
      contentStyle: O
    }), (de, ce) => (S(), D("div", ko({
      ref_key: "contentRef",
      ref: w
    }, l(L), {
      style: l(O),
      class: l(I),
      tabindex: "-1",
      onMouseenter: ($) => de.$emit("mouseenter", $),
      onMouseleave: ($) => de.$emit("mouseleave", $)
    }), [
      _(l(Mu), {
        trapped: l(r),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(w),
        "focus-start-el": l(s),
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
var vb = /* @__PURE__ */ je(gb, [["__file", "content.vue"]]);
const bb = wn(O0), al = Symbol("elTooltip");
function tc() {
  let e;
  const t = (o, s) => {
    n(), e = window.setTimeout(o, s);
  }, n = () => window.clearTimeout(e);
  return Ds(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const yb = Ne({
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
}), wb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: s
}) => {
  const { registerTimeout: r } = tc(), {
    registerTimeout: a,
    cancelTimeout: i
  } = tc();
  return {
    onOpen: (d) => {
      r(() => {
        o(d);
        const m = l(n);
        Pe(m) && m > 0 && a(() => {
          s(d);
        }, m);
      }, l(e));
    },
    onClose: (d) => {
      i(), r(() => {
        s(d);
      }, l(t));
    }
  };
}, ll = Ne({
  ...yb,
  ...qu,
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
  ...rs(["ariaLabel"])
}), Ku = Ne({
  ...Lu,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [On.enter, On.numpadEnter, On.space]
  }
}), kb = Ir({
  type: he(Boolean),
  default: null
}), _b = Ir({
  type: he(Function)
}), Tb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], s = {
    [e]: kb,
    [n]: _b
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
      const g = xt(), { emit: w } = g, h = g.props, b = A(() => nt(h[n])), C = A(() => h[e] === null), k = (R) => {
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
        $s(R) && (h.disabled && R ? b.value && w(t, !1) : a.value !== R && (R ? k() : M()));
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
    useModelToggleProps: s,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Sb,
  useModelToggleEmits: Ab,
  useModelToggle: Cb
} = Tb("visible"), Eb = Ne({
  ...Eu,
  ...Sb,
  ...ll,
  ...Ku,
  ...xu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), xb = [
  ...Ab,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Lb = (e, t) => Ln(e) ? e.includes(t) : e === t, Fo = (e, t, n) => (o) => {
  Lb(l(e), t) && n(o);
}, Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const r = e?.(s);
  if (n === !1 || !r)
    return t?.(s);
}, Ib = oe({
  name: "ElTooltipTrigger"
}), Ob = /* @__PURE__ */ oe({
  ...Ib,
  props: Ku,
  setup(e, { expose: t }) {
    const n = e, o = et("tooltip"), { controlled: s, id: r, open: a, onOpen: i, onClose: c, onToggle: u } = Le(al, void 0), d = P(null), m = () => {
      if (l(s) || n.disabled)
        return !0;
    }, g = qn(n, "trigger"), w = Gn(m, Fo(g, "hover", i)), h = Gn(m, Fo(g, "hover", c)), b = Gn(m, Fo(g, "click", (L) => {
      L.button === 0 && u(L);
    })), C = Gn(m, Fo(g, "focus", i)), k = Gn(m, Fo(g, "focus", c)), M = Gn(m, Fo(g, "contextmenu", (L) => {
      L.preventDefault(), u(L);
    })), j = Gn(m, (L) => {
      const { code: I } = L;
      n.triggerKeys.includes(I) && (L.preventDefault(), u(L));
    });
    return t({
      triggerRef: d
    }), (L, I) => (S(), se(l(j0), {
      id: l(r),
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
var $b = /* @__PURE__ */ je(Ob, [["__file", "trigger.vue"]]);
const Rb = Ne({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Mb = /* @__PURE__ */ oe({
  __name: "teleport",
  props: Rb,
  setup(e) {
    return (t, n) => t.disabled ? ie(t.$slots, "default", { key: 0 }) : (S(), se(ff, {
      key: 1,
      to: t.to
    }, [
      ie(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Pb = /* @__PURE__ */ je(Mb, [["__file", "teleport.vue"]]);
const Zu = wn(Pb), Yu = () => {
  const e = Ra(), t = wu(), n = A(() => `${e.value}-popper-container-${t.prefix}`), o = A(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Nb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Db = () => {
  const { id: e, selector: t } = Yu();
  return pf(() => {
    We && (document.body.querySelector(t.value) || Nb(e.value));
  }), {
    id: e,
    selector: t
  };
}, zb = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Bb = /* @__PURE__ */ oe({
  ...zb,
  props: ll,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Yu(), s = et("tooltip"), r = P();
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
    } = Le(al, void 0), k = A(() => n.transition || `${s.namespace.value}-fade-in-linear`), M = A(() => n.persistent);
    yn(() => {
      a?.();
    });
    const j = A(() => l(M) ? !0 : l(u)), L = A(() => n.disabled ? !1 : l(u)), I = A(() => n.appendTo || o.value), O = A(() => {
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
    }), re = () => {
      var B, ue;
      (ue = (B = r.value) == null ? void 0 : B.updatePopper) == null || ue.call(B), b?.();
    }, de = () => {
      C?.();
    }, ce = () => {
      w(), a = Ug(A(() => {
        var B;
        return (B = r.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && m();
      });
    }, $ = () => {
      n.virtualTriggering || m();
    }, V = (B) => {
      var ue;
      const fe = (ue = r.value) == null ? void 0 : ue.popperContentRef, Te = B?.relatedTarget || document.activeElement;
      return fe?.contains(Te);
    };
    return pe(() => l(u), (B) => {
      B ? R.value = !1 : a?.();
    }, {
      flush: "post"
    }), pe(() => n.content, () => {
      var B, ue;
      (ue = (B = r.value) == null ? void 0 : B.updatePopper) == null || ue.call(B);
    }), t({
      contentRef: r,
      isFocusInsideContent: V
    }), (B, ue) => (S(), se(l(Zu), {
      disabled: !B.teleported,
      to: l(I)
    }, {
      default: J(() => [
        _(Eo, {
          name: l(k),
          onAfterLeave: K,
          onBeforeEnter: re,
          onAfterEnter: ce,
          onBeforeLeave: de
        }, {
          default: J(() => [
            l(j) ? lt((S(), se(l(vb), ko({
              key: 0,
              id: l(c),
              ref_key: "contentRef",
              ref: r
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
var Fb = /* @__PURE__ */ je(Bb, [["__file", "content.vue"]]);
const jb = oe({
  name: "ElTooltip"
}), Vb = /* @__PURE__ */ oe({
  ...jb,
  props: Eb,
  emits: xb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Db();
    const s = Zo(), r = P(), a = P(), i = () => {
      var k;
      const M = l(r);
      M && ((k = M.popperInstanceRef) == null || k.update());
    }, c = P(!1), u = P(), { show: d, hide: m, hasUpdateHandler: g } = Cb({
      indicator: c,
      toggleReason: u
    }), { onOpen: w, onClose: h } = wb({
      showAfter: qn(o, "showAfter"),
      hideAfter: qn(o, "hideAfter"),
      autoClose: qn(o, "autoClose"),
      open: d,
      close: m
    }), b = A(() => $s(o.visible) && !g.value);
    vn(al, {
      controlled: b,
      id: s,
      open: xa(c),
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
    return mf(() => c.value && m()), t({
      popperRef: r,
      contentRef: a,
      isFocusInsideContent: C,
      updatePopper: i,
      onOpen: w,
      onClose: h,
      hide: m
    }), (k, M) => (S(), se(l(bb), {
      ref_key: "popperRef",
      ref: r,
      role: k.role
    }, {
      default: J(() => [
        _($b, {
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
        _(Fb, {
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
              k.rawContent ? (S(), D("span", {
                key: 0,
                innerHTML: k.content
              }, null, 8, ["innerHTML"])) : (S(), D("span", { key: 1 }, E(k.content), 1))
            ]),
            k.showArrow ? (S(), se(l(M0), {
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
var Hb = /* @__PURE__ */ je(Vb, [["__file", "tooltip.vue"]]);
const Wb = wn(Hb), Ub = Ne({
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
}), Gb = oe({
  name: "ElBadge"
}), qb = /* @__PURE__ */ oe({
  ...Gb,
  props: Ub,
  setup(e, { expose: t }) {
    const n = e, o = et("badge"), s = A(() => n.isDot ? "" : Pe(n.value) && Pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = A(() => {
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
      content: s
    }), (a, i) => (S(), D("div", {
      class: z(l(o).b())
    }, [
      ie(a.$slots, "default"),
      _(Eo, {
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
            style: mt(l(r))
          }, [
            ie(a.$slots, "content", { value: l(s) }, () => [
              pt(E(l(s)), 1)
            ])
          ], 6), [
            [Rn, !a.hidden && (l(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Kb = /* @__PURE__ */ je(qb, [["__file", "badge.vue"]]);
const Zb = wn(Kb), Yb = ({ from: e, replacement: t, scope: n, version: o, ref: s, type: r = "API" }, a) => {
  pe(() => l(a), (i) => {
  }, {
    immediate: !0
  });
};
var sr = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(sr || {});
const Xb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), ba = Ne({
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
    values: au
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Qb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Jb = oe({
  name: "ElTag"
}), ey = /* @__PURE__ */ oe({
  ...Jb,
  props: ba,
  emits: Qb,
  setup(e, { emit: t }) {
    const n = e, o = $r(), s = et("tag"), r = A(() => {
      const { type: u, hit: d, effect: m, closable: g, round: w } = n;
      return [
        s.b(),
        s.is("closable", g),
        s.m(u || "primary"),
        s.m(o.value),
        s.m(m),
        s.is("hit", d),
        s.is("round", w)
      ];
    }), a = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, c = (u) => {
      var d, m, g;
      (g = (m = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : m.component) != null && g.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (S(), D("span", {
      key: 0,
      class: z(l(r)),
      style: mt({ backgroundColor: u.color }),
      onClick: i
    }, [
      f("span", {
        class: z(l(s).e("content"))
      }, [
        ie(u.$slots, "default")
      ], 2),
      u.closable ? (S(), se(l(Nt), {
        key: 0,
        class: z(l(s).e("close")),
        onClick: Ke(a, ["stop"])
      }, {
        default: J(() => [
          _(l(mr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Y("v-if", !0)
    ], 6)) : (S(), se(Eo, {
      key: 1,
      name: `${l(s).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: c
    }, {
      default: J(() => [
        f("span", {
          class: z(l(r)),
          style: mt({ backgroundColor: u.color }),
          onClick: i
        }, [
          f("span", {
            class: z(l(s).e("content"))
          }, [
            ie(u.$slots, "default")
          ], 2),
          u.closable ? (S(), se(l(Nt), {
            key: 0,
            class: z(l(s).e("close")),
            onClick: Ke(a, ["stop"])
          }, {
            default: J(() => [
              _(l(mr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var ty = /* @__PURE__ */ je(ey, [["__file", "tag.vue"]]);
const ny = wn(ty), so = /* @__PURE__ */ new Map();
if (We) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of so.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function nc(e, t) {
  let n = [];
  return Ln(t.arg) ? n = t.arg : hn(t.arg) && n.push(t.arg), function(o, s) {
    const r = t.instance.popperRef, a = o.target, i = s?.target, c = !t || !t.instance, u = !a || !i, d = e.contains(a) || e.contains(i), m = e === a, g = n.length && n.some((h) => h?.contains(a)) || n.length && n.includes(i), w = r && (r.contains(a) || r.contains(i));
    c || u || d || m || g || w || t.value(o, s);
  };
}
const oy = {
  beforeMount(e, t) {
    so.has(e) || so.set(e, []), so.get(e).push({
      documentHandler: nc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    so.has(e) || so.set(e, []);
    const n = so.get(e), o = n.findIndex((r) => r.bindingFn === t.oldValue), s = {
      documentHandler: nc(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, s) : n.push(s);
  },
  unmounted(e) {
    so.delete(e);
  }
}, sy = Ne({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: Or,
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
  ...cu
}), dn = {};
oe({
  name: "ElConfigProvider",
  props: sy,
  setup(e, { slots: t }) {
    pe(() => e.message, (o) => {
      Object.assign(dn, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = du(e);
    return () => ie(t, "default", { config: n?.value });
  }
});
const ry = 100, ay = 600, oc = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = ry, delay: s = ay } = nt(n) ? {} : n;
    let r, a;
    const i = () => nt(n) ? n() : n.handler(), c = () => {
      a && (clearTimeout(a), a = void 0), r && (clearInterval(r), r = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (c(), i(), document.addEventListener("mouseup", () => c(), {
        once: !0
      }), a = setTimeout(() => {
        r = setInterval(() => {
          i();
        }, o);
      }, s));
    });
  }
}, Xu = (e) => {
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
}, ly = Ne({
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
}), iy = {
  click: (e) => e instanceof MouseEvent
}, cy = "overlay";
var uy = oe({
  name: "ElOverlay",
  props: ly,
  emits: iy,
  setup(e, { slots: t, emit: n }) {
    const o = et(cy), s = (c) => {
      n("click", c);
    }, { onClick: r, onMousedown: a, onMouseup: i } = Xu(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? _("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: r,
      onMousedown: a,
      onMouseup: i
    }, [ie(t, "default")], sr.STYLE | sr.CLASS | sr.PROPS, ["onClick", "onMouseup", "onMousedown"]) : hf("div", {
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
const dy = uy, Qu = Symbol("dialogInjectionKey"), Ju = Ne({
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
}), fy = {
  close: () => !0
}, py = (e, t, n, o) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const r = (u) => {
    const d = u.clientX, m = u.clientY, { offsetX: g, offsetY: w } = s, h = e.value.getBoundingClientRect(), b = h.left, C = h.top, k = h.width, M = h.height, j = document.documentElement.clientWidth, L = document.documentElement.clientHeight, I = -b + g, O = -C + w, R = j - b - k + g, K = L - C - M + w, F = (H) => {
      let re = g + H.clientX - d, de = w + H.clientY - m;
      o?.value || (re = Math.min(Math.max(re, I), R), de = Math.min(Math.max(de, O), K)), s = {
        offsetX: re,
        offsetY: de
      }, e.value && (e.value.style.transform = `translate(${fo(re)}, ${fo(de)})`);
    }, ne = () => {
      document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", ne);
    };
    document.addEventListener("mousemove", F), document.addEventListener("mouseup", ne);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", r);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", r);
  }, c = () => {
    s = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return ot(() => {
    La(() => {
      n.value ? a() : i();
    });
  }), yn(() => {
    i();
  }), {
    resetPosition: c
  };
}, my = (...e) => (t) => {
  e.forEach((n) => {
    nt(n) ? n(t) : n.value = t;
  });
}, hy = oe({ name: "ElDialogContent" }), gy = /* @__PURE__ */ oe({
  ...hy,
  props: Ju,
  emits: fy,
  setup(e, { expose: t }) {
    const n = e, { t: o } = Lr(), { Close: s } = gu, { dialogRef: r, headerRef: a, bodyId: i, ns: c, style: u } = Le(Qu), { focusTrapRef: d } = Le($u), m = A(() => [
      c.b(),
      c.is("fullscreen", n.fullscreen),
      c.is("draggable", n.draggable),
      c.is("align-center", n.alignCenter),
      { [c.m("center")]: n.center }
    ]), g = my(d, r), w = A(() => n.draggable), h = A(() => n.overflow), { resetPosition: b } = py(r, a, w, h);
    return t({
      resetPosition: b
    }), (C, k) => (S(), D("div", {
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
        C.showClose ? (S(), D("button", {
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
              (S(), se(Jt(C.closeIcon || l(s))))
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
      C.$slots.footer ? (S(), D("footer", {
        key: 0,
        class: z([l(c).e("footer"), C.footerClass])
      }, [
        ie(C.$slots, "footer")
      ], 2)) : Y("v-if", !0)
    ], 6));
  }
});
var vy = /* @__PURE__ */ je(gy, [["__file", "dialog-content.vue"]]);
const by = Ne({
  ...Ju,
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
}), yy = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [vt]: (e) => $s(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, wy = (e, t = {}) => {
  Qt(e) || Va("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || et("popup"), o = A(() => n.bm("parent", "hidden"));
  if (!We || Ri(document.body, o.value))
    return;
  let s = 0, r = !1, a = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || r && document && (document.body.style.width = a, gv(document.body, o.value));
    }, 200);
  };
  pe(e, (c) => {
    if (!c) {
      i();
      return;
    }
    r = !Ri(document.body, o.value), r && (a = document.body.style.width, hv(document.body, o.value)), s = bv(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = vv(document.body, "overflowY");
    s > 0 && (u || d === "scroll") && r && (document.body.style.width = `calc(100% - ${s}px)`);
  }), $c(() => i());
}, ky = (e, t) => {
  var n;
  const s = xt().emit, { nextZIndex: r } = Ha();
  let a = "";
  const i = Zo(), c = Zo(), u = P(!1), d = P(!1), m = P(!1), g = P((n = e.zIndex) != null ? n : r());
  let w, h;
  const b = Wa("namespace", _s), C = A(() => {
    const $ = {}, V = `--${b.value}-dialog`;
    return e.fullscreen || (e.top && ($[`${V}-margin-top`] = e.top), e.width && ($[`${V}-width`] = fo(e.width))), $;
  }), k = A(() => e.alignCenter ? { display: "flex" } : {});
  function M() {
    s("opened");
  }
  function j() {
    s("closed"), s(vt, !1), e.destroyOnClose && (m.value = !1);
  }
  function L() {
    s("close");
  }
  function I() {
    h?.(), w?.(), e.openDelay && e.openDelay > 0 ? { stop: w } = fr(() => F(), e.openDelay) : F();
  }
  function O() {
    w?.(), h?.(), e.closeDelay && e.closeDelay > 0 ? { stop: h } = fr(() => ne(), e.closeDelay) : ne();
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
    s("openAutoFocus");
  }
  function re() {
    s("closeAutoFocus");
  }
  function de($) {
    var V;
    ((V = $.detail) == null ? void 0 : V.focusReason) === "pointer" && $.preventDefault();
  }
  e.lockScroll && wy(u);
  function ce() {
    e.closeOnPressEscape && R();
  }
  return pe(() => e.modelValue, ($) => {
    $ ? (d.value = !1, I(), m.value = !0, g.value = Jc(e.zIndex) ? r() : g.value++, Ze(() => {
      s("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
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
    onCloseAutoFocus: re,
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
}, _y = oe({
  name: "ElDialog",
  inheritAttrs: !1
}), Ty = /* @__PURE__ */ oe({
  ..._y,
  props: by,
  emits: yy,
  setup(e, { expose: t }) {
    const n = e, o = Rc();
    Yb({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, A(() => !!o.title));
    const s = et("dialog"), r = P(), a = P(), i = P(), {
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
    } = ky(n, r);
    vn(Qu, {
      dialogRef: r,
      headerRef: a,
      bodyId: d,
      ns: s,
      rendered: w,
      style: m
    });
    const K = Xu(j), F = A(() => n.draggable && !n.fullscreen);
    return t({
      visible: c,
      dialogContentRef: i,
      resetPosition: () => {
        var H;
        (H = i.value) == null || H.resetPosition();
      }
    }), (H, re) => (S(), se(l(Zu), {
      to: H.appendTo,
      disabled: H.appendTo !== "body" ? !1 : !H.appendToBody
    }, {
      default: J(() => [
        _(Eo, {
          name: "dialog-fade",
          onAfterEnter: l(b),
          onAfterLeave: l(C),
          onBeforeLeave: l(k),
          persisted: ""
        }, {
          default: J(() => [
            lt(_(l(dy), {
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
                  class: z(`${l(s).namespace.value}-overlay-dialog`),
                  style: mt(l(g)),
                  onClick: l(K).onClick,
                  onMousedown: l(K).onMousedown,
                  onMouseup: l(K).onMouseup
                }, [
                  _(l(Mu), {
                    loop: "",
                    trapped: l(c),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: l(L),
                    onFocusAfterReleased: l(I),
                    onFocusoutPrevented: l(R),
                    onReleaseRequested: l(O)
                  }, {
                    default: J(() => [
                      l(w) ? (S(), se(vy, ko({
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
                      }), Oa({
                        header: J(() => [
                          H.$slots.title ? ie(H.$slots, "title", { key: 1 }) : ie(H.$slots, "header", {
                            key: 0,
                            close: l(M),
                            titleId: l(u),
                            titleClass: l(s).e("title")
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
var Sy = /* @__PURE__ */ je(Ty, [["__file", "dialog.vue"]]);
const Ay = wn(Sy), Cy = Ne({
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
  size: Or,
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
  ...rs(["ariaLabel"])
}), Ey = {
  [Ko]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Go]: (e) => Pe(e) || Yn(e),
  [vt]: (e) => Pe(e) || Yn(e)
}, xy = oe({
  name: "ElInputNumber"
}), Ly = /* @__PURE__ */ oe({
  ...xy,
  props: Cy,
  emits: Ey,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: s } = Lr(), r = et("input-number"), a = P(), i = _o({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: c } = qa(), u = A(() => Pe(o.modelValue) && o.modelValue <= o.min), d = A(() => Pe(o.modelValue) && o.modelValue >= o.max), m = A(() => {
      const $ = k(o.step);
      return In(o.precision) ? Math.max(k(o.modelValue), $) : ($ > o.precision, o.precision);
    }), g = A(() => o.controls && o.controlsPosition === "right"), w = $r(), h = Tu(), b = A(() => {
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
      O(V), n(Go, i.currentValue), de();
    }, L = () => {
      if (o.readonly || h.value || u.value)
        return;
      const $ = Number(b.value) || 0, V = M($, -1);
      O(V), n(Go, i.currentValue), de();
    }, I = ($, V) => {
      const { max: B, min: ue, step: fe, precision: Te, stepStrictly: De, valueOnClear: Ue } = o;
      B < ue && Va("InputNumber", "min should not be greater than max.");
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
      ue === fe && $ || (i.userInput = null, n(vt, fe), ue !== fe && n(Ko, fe, ue), o.validateEvent && ((B = c?.validate) == null || B.call(c, "change").catch((Te) => void 0)), i.currentValue = fe);
    }, R = ($) => {
      i.userInput = $;
      const V = $ === "" ? null : Number($);
      n(Go, V), O(V, !1);
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
    }, re = ($) => {
      var V, B;
      i.userInput = null, bu() && i.currentValue === null && ((V = a.value) != null && V.input) && (a.value.input.value = ""), n("blur", $), o.validateEvent && ((B = c?.validate) == null || B.call(c, "blur").catch((ue) => void 0));
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
    }), Mc(() => {
      var $, V;
      const B = ($ = a.value) == null ? void 0 : $.input;
      B?.setAttribute("aria-valuenow", `${(V = i.currentValue) != null ? V : ""}`);
    }), t({
      focus: F,
      blur: ne
    }), ($, V) => (S(), D("div", {
      class: z([
        l(r).b(),
        l(r).m(l(w)),
        l(r).is("disabled", l(h)),
        l(r).is("without-controls", !$.controls),
        l(r).is("controls-right", l(g))
      ]),
      onDragstart: Ke(() => {
      }, ["prevent"])
    }, [
      $.controls ? lt((S(), D("span", {
        key: 0,
        role: "button",
        "aria-label": l(s)("el.inputNumber.decrease"),
        class: z([l(r).e("decrease"), l(r).is("disabled", l(u))]),
        onKeydown: En(L, ["enter"])
      }, [
        ie($.$slots, "decrease-icon", {}, () => [
          _(l(Nt), null, {
            default: J(() => [
              l(g) ? (S(), se(l(hu), { key: 0 })) : (S(), se(l(Fv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(oc), L]
      ]) : Y("v-if", !0),
      $.controls ? lt((S(), D("span", {
        key: 1,
        role: "button",
        "aria-label": l(s)("el.inputNumber.increase"),
        class: z([l(r).e("increase"), l(r).is("disabled", l(d))]),
        onKeydown: En(j, ["enter"])
      }, [
        ie($.$slots, "increase-icon", {}, () => [
          _(l(Nt), null, {
            default: J(() => [
              l(g) ? (S(), se(l(Cv), { key: 0 })) : (S(), se(l(Vv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(oc), j]
      ]) : Y("v-if", !0),
      _(l(f0), {
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
        onBlur: re,
        onFocus: H,
        onInput: R,
        onChange: K
      }, Oa({
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
var Iy = /* @__PURE__ */ je(Ly, [["__file", "input-number.vue"]]);
const Oy = wn(Iy);
function $y() {
  const e = io(), t = P(0), n = 11, o = A(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return xn(e, () => {
    var r, a;
    t.value = (a = (r = e.value) == null ? void 0 : r.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const ed = Symbol("ElSelectGroup"), Nr = Symbol("ElSelect");
function Ry(e, t) {
  const n = Le(Nr), o = Le(ed, { disabled: !1 }), s = A(() => d(ao(n.props.modelValue), e.value)), r = A(() => {
    var w;
    if (n.props.multiple) {
      const h = ao((w = n.props.modelValue) != null ? w : []);
      return !s.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = A(() => e.label || (en(e.value) ? "" : e.value)), i = A(() => e.value || e.label || ""), c = A(() => e.disabled || t.groupDisabled || r.value), u = xt(), d = (w = [], h) => {
    if (en(e.value)) {
      const b = n.props.valueKey;
      return w && w.some((C) => gf(lo(C, b)) === lo(h, b));
    } else
      return w && w.includes(h);
  }, m = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (w) => {
    const h = new RegExp(Xb(w), "i");
    t.visible = h.test(a.value) || e.created;
  };
  return pe(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), pe(() => e.value, (w, h) => {
    const { remote: b, valueKey: C } = n.props;
    if ((b ? w !== h : !Ss(w, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
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
    itemSelected: s,
    isDisabled: c,
    hoverItem: m,
    updateOption: g
  };
}
const My = oe({
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
    const t = et("select"), n = Zo(), o = A(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(a)),
      t.is("hovering", l(g))
    ]), s = _o({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: r,
      itemSelected: a,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d
    } = Ry(e, s), { visible: m, hover: g } = $a(s), w = xt().proxy;
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
      currentLabel: r,
      itemSelected: a,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d,
      visible: m,
      hover: g,
      selectOptionClick: h,
      states: s
    };
  }
});
function Py(e, t, n, o, s, r) {
  return lt((S(), D("li", {
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
var il = /* @__PURE__ */ je(My, [["render", Py], ["__file", "option.vue"]]);
const Ny = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Le(Nr), t = et("select"), n = A(() => e.props.popperClass), o = A(() => e.props.multiple), s = A(() => e.props.fitInputWidth), r = P("");
    function a() {
      var i;
      r.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ot(() => {
      a(), xn(e.selectRef, a);
    }), {
      ns: t,
      minWidth: r,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: s
    };
  }
});
function Dy(e, t, n, o, s, r) {
  return S(), D("div", {
    class: z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: mt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (S(), D("div", {
      key: 0,
      class: z(e.ns.be("dropdown", "header"))
    }, [
      ie(e.$slots, "header")
    ], 2)) : Y("v-if", !0),
    ie(e.$slots, "default"),
    e.$slots.footer ? (S(), D("div", {
      key: 1,
      class: z(e.ns.be("dropdown", "footer"))
    }, [
      ie(e.$slots, "footer")
    ], 2)) : Y("v-if", !0)
  ], 6);
}
var zy = /* @__PURE__ */ je(Ny, [["render", Dy], ["__file", "select-dropdown.vue"]]);
const By = (e, t) => {
  const { t: n } = Lr(), o = Zo(), s = et("select"), r = et("input"), a = _o({
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
  } = Au({
    afterComposition: (x) => kt(x)
  }), { wrapperRef: O, isFocused: R, handleBlur: K } = Su(m, {
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
  }), F = P(!1), ne = P(), { form: H, formItem: re } = qa(), { inputId: de } = ku(e, {
    formItemContext: re
  }), { valueOnClear: ce, isEmptyValue: $ } = pv(e), V = A(() => e.disabled || H?.disabled), B = A(() => Ln(e.modelValue) ? e.modelValue.length > 0 : !$(e.modelValue)), ue = A(() => {
    var x;
    return (x = H?.statusIcon) != null ? x : !1;
  }), fe = A(() => e.clearable && !V.value && a.inputHovering && B.value), Te = A(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = A(() => s.is("reverse", Te.value && F.value)), Ue = A(() => re?.validateState || ""), ve = A(() => vu[Ue.value]), W = A(() => e.remote ? 300 : 0), U = A(() => e.remote && !a.inputValue && a.options.size === 0), me = A(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && Ie.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ie = A(() => ee.value.filter((x) => x.visible).length), ee = A(() => {
    const x = Array.from(a.options.values()), Z = [];
    return a.optionValues.forEach((ge) => {
      const Be = x.findIndex((Qe) => Qe.value === ge);
      Be > -1 && Z.push(x[Be]);
    }), Z.length >= x.length ? Z : x;
  }), X = A(() => Array.from(a.cachedOptions.values())), Ve = A(() => {
    const x = ee.value.filter((Z) => !Z.created).some((Z) => Z.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !x;
  }), ze = () => {
    e.filterable && nt(e.filterMethod) || e.filterable && e.remote && nt(e.remoteMethod) || ee.value.forEach((x) => {
      var Z;
      (Z = x.updateOption) == null || Z.call(x, a.inputValue);
    });
  }, ut = $r(), Ge = A(() => ["small"].includes(ut.value) ? "small" : "default"), Lt = A({
    get() {
      return F.value && !U.value;
    },
    set(x) {
      F.value = x;
    }
  }), bt = A(() => {
    if (e.multiple && !In(e.modelValue))
      return ao(e.modelValue).length === 0 && !a.inputValue;
    const x = Ln(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || In(x) ? !a.inputValue : !0;
  }), qe = A(() => {
    var x;
    const Z = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !B.value ? Z : a.selectedLabel;
  }), yt = A(() => ma ? null : "mouseenter");
  pe(() => e.modelValue, (x, Z) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", st("")), Xe(), !Ss(x, Z) && e.validateEvent && re?.validate("change").catch((ge) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), pe(() => F.value, (x) => {
    x ? st(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", x);
  }), pe(() => a.options.entries(), () => {
    We && (Xe(), e.defaultFirstOption && (e.filterable || e.remote) && Ie.value && wt());
  }, {
    flush: "post"
  }), pe([() => a.hoveringIndex, ee], ([x]) => {
    Pe(x) && x > -1 ? ne.value = ee.value[x] || {} : ne.value = {}, ee.value.forEach((Z) => {
      Z.hover = ne.value === Z;
    });
  }), La(() => {
    a.isBeforeHide || ze();
  });
  const st = (x) => {
    a.previousQuery === x || M.value || (a.previousQuery = x, e.filterable && nt(e.filterMethod) ? e.filterMethod(x) : e.filterable && e.remote && nt(e.remoteMethod) && e.remoteMethod(x), e.defaultFirstOption && (e.filterable || e.remote) && Ie.value ? Ze(wt) : Ze(It));
  }, wt = () => {
    const x = ee.value.filter((Qe) => Qe.visible && !Qe.disabled && !Qe.states.groupDisabled), Z = x.find((Qe) => Qe.created), ge = x[0], Be = ee.value.map((Qe) => Qe.value);
    a.hoveringIndex = Bn(Be, Z || ge);
  }, Xe = () => {
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
    const ge = Ff(x);
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
    a.inputValue.length > 0 && !F.value && (F.value = !0), st(a.inputValue);
  }, kt = (x) => {
    if (a.inputValue = x.target.value, e.remote)
      He();
    else
      return xe();
  }, He = Eg(() => {
    xe();
  }, W.value), ft = (x) => {
    Ss(e.modelValue, x) || t(Ko, x);
  }, mo = (x) => xg(x, (Z) => {
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
      Be > -1 ? ge.splice(Be, 1) : (e.multipleLimit <= 0 || ge.length < e.multipleLimit) && ge.push(x.value), t(vt, ge), ft(ge), x.created && st(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(vt, x.value), ft(x.value), F.value = !1;
    eo(), !F.value && Ze(() => {
      Ot(x);
    });
  }, Bn = (x = [], Z) => In(Z) ? -1 : en(Z.value) ? x.findIndex((ge) => Ss(lo(ge, e.valueKey), Oe(Z))) : x.indexOf(Z.value), Ot = (x) => {
    var Z, ge, Be, Qe, Ft;
    const $t = Ln(x) ? x[0] : x;
    let St = null;
    if ($t?.value) {
      const Gt = ee.value.filter((No) => No.value === $t.value);
      Gt.length > 0 && (St = Gt[0].$el);
    }
    if (u.value && St) {
      const Gt = (Qe = (Be = (ge = (Z = u.value) == null ? void 0 : Z.popperRef) == null ? void 0 : ge.contentRef) == null ? void 0 : Be.querySelector) == null ? void 0 : Qe.call(Be, `.${s.be("dropdown", "wrap")}`);
      Gt && yv(Gt, St);
    }
    (Ft = k.value) == null || Ft.handleScroll();
  }, _t = (x) => {
    a.options.set(x.value, x), a.cachedOptions.set(x.value, x);
  }, _n = (x, Z) => {
    a.options.get(x) === Z && a.options.delete(x);
  }, Tn = A(() => {
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
  }, rn = () => {
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
    V.value || (ma && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : F.value = !F.value);
  }, $o = () => {
    if (!F.value)
      jn();
    else {
      const x = ee.value[a.hoveringIndex];
      x && !x.isDisabled && Ut(x);
    }
  }, Oe = (x) => en(x.value) ? lo(x.value, e.valueKey) : x.value, ln = A(() => ee.value.filter((x) => x.visible).every((x) => x.isDisabled)), Ro = A(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), Mo = A(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), cn = (x) => {
    if (!F.value) {
      F.value = !0;
      return;
    }
    if (!(a.options.size === 0 || Ie.value === 0 || M.value) && !ln.value) {
      x === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : x === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const Z = ee.value[a.hoveringIndex];
      (Z.isDisabled || !Z.visible) && cn(x), Ze(() => Ot(ne.value));
    }
  }, Po = () => {
    if (!c.value)
      return 0;
    const x = window.getComputedStyle(c.value);
    return Number.parseFloat(x.gap || "6px");
  }, go = A(() => {
    const x = Po();
    return { maxWidth: `${C.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - x : a.selectionWidth}px` };
  }), as = A(() => ({ maxWidth: `${a.selectionWidth}px` })), Tt = (x) => {
    t("popup-scroll", x);
  };
  return xn(c, Bt), xn(h, ke), xn(O, ke), xn(b, dt), xn(C, q), ot(() => {
    Xe();
  }), {
    inputId: de,
    contentId: o,
    nsSelect: s,
    nsInput: r,
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
    setSelected: Xe,
    selectDisabled: V,
    emptyText: me,
    handleCompositionStart: j,
    handleCompositionUpdate: L,
    handleCompositionEnd: I,
    onOptionCreate: _t,
    onOptionDestroy: _n,
    handleMenuEnter: ho,
    focus: eo,
    blur: rn,
    handleClearClick: Fn,
    handleClickOutside: to,
    handleEsc: an,
    toggleMenu: jn,
    selectOption: $o,
    getValueKey: Oe,
    navigateOptions: cn,
    dropdownMenuVisible: Lt,
    showTagList: Ro,
    collapseTagList: Mo,
    popupScroll: Tt,
    tagStyle: go,
    collapseTagStyle: as,
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
var Fy = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Le(Nr);
    let o = [];
    return () => {
      var s, r;
      const a = (s = t.default) == null ? void 0 : s.call(t), i = [];
      function c(u) {
        Ln(u) && u.forEach((d) => {
          var m, g, w, h;
          const b = (m = d?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? c(!Zt(d.children) && !Ln(d.children) && nt((g = d.children) == null ? void 0 : g.default) ? (w = d.children) == null ? void 0 : w.default() : d.children) : b === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : Ln(d.children) && c(d.children);
        });
      }
      return a.length && c((r = a[0]) == null ? void 0 : r.children), Ss(i, o) || (o = i, n && (n.states.optionValues = i)), a;
    };
  }
});
const jy = Ne({
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
  size: Or,
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
    type: So,
    default: Ua
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: So,
    default: hu
  },
  tagType: { ...ba.type, default: "info" },
  tagEffect: { ...ba.effect, default: "light" },
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
    values: Mr,
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
  ...cu,
  ...rs(["ariaLabel"])
}), sc = "ElSelect", Vy = oe({
  name: sc,
  componentName: sc,
  components: {
    ElSelectMenu: zy,
    ElOption: il,
    ElOptions: Fy,
    ElTag: ny,
    ElScrollbar: E0,
    ElTooltip: Wb,
    ElIcon: Nt
  },
  directives: { ClickOutside: oy },
  props: jy,
  emits: [
    vt,
    Ko,
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
      return Ln(c) ? u ? c : d : u ? d : c;
    }), o = _o({
      ...$a(e),
      modelValue: n
    }), s = By(o, t), { calculatorRef: r, inputStyle: a } = $y();
    vn(Nr, _o({
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
      calculatorRef: r,
      inputStyle: a
    };
  }
});
function Hy(e, t, n, o, s, r) {
  const a = vo("el-tag"), i = vo("el-tooltip"), c = vo("el-icon"), u = vo("el-option"), d = vo("el-options"), m = vo("el-scrollbar"), g = vo("el-select-menu"), w = vf("click-outside");
  return lt((S(), D("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [bf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
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
            e.$slots.prefix ? (S(), D("div", {
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
                (S(!0), D(at, null, Cn(e.showTagList, (b) => (S(), D("div", {
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
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (S(), se(i, {
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
                      (S(!0), D(at, null, Cn(e.collapseTagList, (b) => (S(), D("div", {
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
                  [xs, e.states.inputValue]
                ]),
                e.filterable ? (S(), D("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: z(e.nsSelect.e("input-calculator")),
                  textContent: E(e.states.inputValue)
                }, null, 10, ["textContent"])) : Y("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (S(), D("div", {
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
                ]) : (S(), D("span", { key: 1 }, E(e.currentPlaceholder), 1))
              ], 2)) : Y("v-if", !0)
            ], 2),
            f("div", {
              ref: "suffixRef",
              class: z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (S(), se(c, {
                key: 0,
                class: z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: J(() => [
                  (S(), se(Jt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              e.showClose && e.clearIcon ? (S(), se(c, {
                key: 1,
                class: z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: J(() => [
                  (S(), se(Jt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Y("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (S(), se(c, {
                key: 2,
                class: z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: J(() => [
                  (S(), se(Jt(e.validateIcon)))
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
            e.$slots.header ? (S(), D("div", {
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
                e.showNewOption ? (S(), se(u, {
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
            e.$slots.loading && e.loading ? (S(), D("div", {
              key: 1,
              class: z(e.nsSelect.be("dropdown", "loading"))
            }, [
              ie(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (S(), D("div", {
              key: 2,
              class: z(e.nsSelect.be("dropdown", "empty"))
            }, [
              ie(e.$slots, "empty", {}, () => [
                f("span", null, E(e.emptyText), 1)
              ])
            ], 2)) : Y("v-if", !0),
            e.$slots.footer ? (S(), D("div", {
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
var Wy = /* @__PURE__ */ je(Vy, [["render", Hy], ["__file", "select.vue"]]);
const Uy = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = et("select"), n = P(null), o = xt(), s = P([]);
    vn(ed, _o({
      ...$a(e)
    }));
    const r = A(() => s.value.some((u) => u.visible === !0)), a = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = ao(u), m = [];
      return d.forEach((g) => {
        var w, h;
        a(g) ? m.push(g.component.proxy) : (w = g.children) != null && w.length ? m.push(...i(g.children)) : (h = g.component) != null && h.subTree && m.push(...i(g.component.subTree));
      }), m;
    }, c = () => {
      s.value = i(o.subTree);
    };
    return ot(() => {
      c();
    }), Qg(n, c, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: r,
      ns: t
    };
  }
});
function Gy(e, t, n, o, s, r) {
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
        ie(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Rn, e.visible]
  ]);
}
var td = /* @__PURE__ */ je(Uy, [["render", Gy], ["__file", "option-group.vue"]]);
const nd = wn(Wy, {
  Option: il,
  OptionGroup: td
}), od = mu(il);
mu(td);
const sd = ["success", "info", "warning", "error"], At = yu({
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
}), qy = Ne({
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
    type: So,
    default: At.icon
  },
  id: {
    type: String,
    default: At.id
  },
  message: {
    type: he([
      String,
      Object,
      Function
    ]),
    default: At.message
  },
  onClose: {
    type: he(Function),
    default: At.onClose
  },
  showClose: {
    type: Boolean,
    default: At.showClose
  },
  type: {
    type: String,
    values: sd,
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
}), Ky = {
  destroy: () => !0
}, mn = yf([]), Zy = (e) => {
  const t = mn.findIndex((s) => s.id === e), n = mn[t];
  let o;
  return t > 0 && (o = mn[t - 1]), { current: n, prev: o };
}, Yy = (e) => {
  const { prev: t } = Zy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Xy = (e, t) => mn.findIndex((o) => o.id === e) > 0 ? 16 : t, Qy = oe({
  name: "ElMessage"
}), Jy = /* @__PURE__ */ oe({
  ...Qy,
  props: qy,
  emits: Ky,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Zv, { ns: s, zIndex: r } = uu("message"), { currentZIndex: a, nextZIndex: i } = r, c = P(), u = P(!1), d = P(0);
    let m;
    const g = A(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = A(() => {
      const R = n.type;
      return { [s.bm("icon", R)]: R && hr[R] };
    }), h = A(() => n.icon || hr[n.type] || ""), b = A(() => Yy(n.id)), C = A(() => Xy(n.id, n.offset) + b.value), k = A(() => d.value + C.value), M = A(() => ({
      top: `${C.value}px`,
      zIndex: a.value
    }));
    function j() {
      n.duration !== 0 && ({ stop: m } = fr(() => {
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
    }), (R, K) => (S(), se(Eo, {
      name: l(s).b("fade"),
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
            l(s).b(),
            { [l(s).m(R.type)]: R.type },
            l(s).is("center", R.center),
            l(s).is("closable", R.showClose),
            l(s).is("plain", R.plain),
            R.customClass
          ]),
          style: mt(l(M)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: j
        }, [
          R.repeatNum > 1 ? (S(), se(l(Zb), {
            key: 0,
            value: R.repeatNum,
            type: l(g),
            class: z(l(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          l(h) ? (S(), se(l(Nt), {
            key: 1,
            class: z([l(s).e("icon"), l(w)])
          }, {
            default: J(() => [
              (S(), se(Jt(l(h))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          ie(R.$slots, "default", {}, () => [
            R.dangerouslyUseHTMLString ? (S(), D(at, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              f("p", {
                class: z(l(s).e("content")),
                innerHTML: R.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), D("p", {
              key: 0,
              class: z(l(s).e("content"))
            }, E(R.message), 3))
          ]),
          R.showClose ? (S(), se(l(Nt), {
            key: 2,
            class: z(l(s).e("closeBtn")),
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
var ew = /* @__PURE__ */ je(Jy, [["__file", "message.vue"]]);
let tw = 1;
const rd = (e) => {
  const t = !e || Zt(e) || Ls(e) || nt(e) ? { message: e } : e, n = {
    ...At,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Zt(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    hn(o) || (o = document.body), n.appendTo = o;
  }
  return $s(dn.grouping) && !n.grouping && (n.grouping = dn.grouping), Pe(dn.duration) && n.duration === 3e3 && (n.duration = dn.duration), Pe(dn.offset) && n.offset === 16 && (n.offset = dn.offset), $s(dn.showClose) && !n.showClose && (n.showClose = dn.showClose), n;
}, nw = (e) => {
  const t = mn.indexOf(e);
  if (t === -1)
    return;
  mn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ow = ({ appendTo: e, ...t }, n) => {
  const o = `message_${tw++}`, s = t.onClose, r = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), nw(d);
    },
    onDestroy: () => {
      ir(null, r);
    }
  }, i = _(ew, a, nt(a.message) || Ls(a.message) ? {
    default: nt(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || es._context, ir(i, r), e.appendChild(r.firstElementChild);
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
}, es = (e = {}, t) => {
  if (!We)
    return { close: () => {
    } };
  const n = rd(e);
  if (n.grouping && mn.length) {
    const s = mn.find(({ vnode: r }) => {
      var a;
      return ((a = r.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (Pe(dn.max) && mn.length >= dn.max)
    return { close: () => {
    } };
  const o = ow(n, t);
  return mn.push(o), o.handler;
};
sd.forEach((e) => {
  es[e] = (t = {}, n) => {
    const o = rd(t);
    return es({ ...o, type: e }, n);
  };
});
function sw(e) {
  for (const t of mn)
    (!e || e === t.props.type) && t.handler.close();
}
es.closeAll = sw;
es._context = null;
const rw = pu(es, "$message"), ad = [
  "success",
  "info",
  "warning",
  "error"
], aw = Ne({
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
    values: [...ad, ""],
    default: ""
  },
  zIndex: Number
}), lw = {
  destroy: () => !0
}, iw = oe({
  name: "ElNotification"
}), cw = /* @__PURE__ */ oe({
  ...iw,
  props: aw,
  emits: lw,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = uu("notification"), { nextZIndex: r, currentZIndex: a } = s, { Close: i } = gu, c = P(!1);
    let u;
    const d = A(() => {
      const j = n.type;
      return j && hr[n.type] ? o.m(j) : "";
    }), m = A(() => n.type && hr[n.type] || n.icon), g = A(() => n.position.endsWith("right") ? "right" : "left"), w = A(() => n.position.startsWith("top") ? "top" : "bottom"), h = A(() => {
      var j;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (j = n.zIndex) != null ? j : a.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = fr(() => {
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
      b(), r(), c.value = !0;
    }), gn(document, "keydown", M), t({
      visible: c,
      close: k
    }), (j, L) => (S(), se(Eo, {
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
          l(m) ? (S(), se(l(Nt), {
            key: 0,
            class: z([l(o).e("icon"), l(d)])
          }, {
            default: J(() => [
              (S(), se(Jt(l(m))))
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
                j.dangerouslyUseHTMLString ? (S(), D(at, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  f("p", { innerHTML: j.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), D("p", { key: 0 }, E(j.message), 1))
              ])
            ], 6), [
              [Rn, j.message]
            ]),
            j.showClose ? (S(), se(l(Nt), {
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
var uw = /* @__PURE__ */ je(cw, [["__file", "notification.vue"]]);
const br = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ya = 16;
let dw = 1;
const ts = function(e = {}, t) {
  if (!We)
    return { close: () => {
    } };
  (Zt(e) || Ls(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  br[n].forEach(({ vm: d }) => {
    var m;
    o += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + ya;
  }), o += ya;
  const s = `notification_${dw++}`, r = e.onClose, a = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      fw(s, n, r);
    }
  };
  let i = document.body;
  hn(e.appendTo) ? i = e.appendTo : Zt(e.appendTo) && (i = document.querySelector(e.appendTo)), hn(i) || (i = document.body);
  const c = document.createElement("div"), u = _(uw, a, nt(a.message) ? a.message : Ls(a.message) ? () => a.message : null);
  return u.appContext = In(t) ? ts._context : t, u.props.onDestroy = () => {
    ir(null, c);
  }, ir(u, c), br[n].push({ vm: u }), i.appendChild(c.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
ad.forEach((e) => {
  ts[e] = (t = {}, n) => ((Zt(t) || Ls(t)) && (t = {
    message: t
  }), ts({ ...t, type: e }, n));
});
function fw(e, t, n) {
  const o = br[t], s = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: r } = o[s];
  if (!r)
    return;
  n?.(r);
  const a = r.el.offsetHeight, i = t.split("-")[0];
  o.splice(s, 1);
  const c = o.length;
  if (!(c < 1))
    for (let u = s; u < c; u++) {
      const { el: d, component: m } = o[u].vm, g = Number.parseInt(d.style[i], 10) - a - ya;
      m.props.offset = g;
    }
}
function pw() {
  for (const e of Object.values(br))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ts.closeAll = pw;
ts._context = null;
const mw = pu(ts, "$notify");
function hw(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function tt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var rc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(rc || (rc = {}));
async function gw(e, t) {
  await tt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function vw(e, t, n) {
  var o;
  const s = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return tt("plugin:event|listen", {
    event: e,
    target: s,
    handler: hw(t)
  }).then((r) => async () => gw(e, r));
}
async function ld() {
  return await tt("local_ai_get_config");
}
async function rr(e) {
  return await tt("local_ai_save_config", { config: e });
}
async function id(e) {
  return await tt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function bw() {
  return await tt("local_ai_get_runtime_status");
}
async function cd() {
  return await tt("local_ai_get_status");
}
async function yw(e) {
  return await tt("local_ai_start_service", {
    config: e ?? null
  });
}
async function ud() {
  return await tt("local_ai_restart_service");
}
async function ww() {
  await tt("local_ai_stop_service");
}
async function kw(e) {
  return await tt("local_ai_chat", { request: e });
}
function dd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function _w(e, t, n = {}) {
  const o = n.requestId ?? dd(), s = await vw(
    "local-ai-chat-stream",
    (r) => {
      const a = r.payload;
      a.requestId === o && (a.event === "delta" && a.content ? t(a.content) : a.event === "stats" && a.stats && n.onStats?.(a.stats));
    }
  );
  try {
    return await tt("local_ai_chat_stream", {
      request: e,
      requestId: o
    });
  } finally {
    s();
  }
}
async function Qr(e) {
  return await tt("local_ai_cancel_chat_stream", { requestId: e });
}
async function Tw() {
  return await tt("local_ai_get_chat_histories");
}
async function Sw(e) {
  return await tt(
    "local_ai_read_attachment_files",
    { paths: e }
  );
}
async function Aw(e) {
  return await tt("local_ai_save_chat_history", {
    history: e
  });
}
async function Cw(e) {
  return await tt("local_ai_delete_chat_history", {
    historyId: e
  });
}
async function Ew() {
  return await tt("local_ai_clear_chat_histories");
}
const xw = ["disabled"], Lw = {
  key: 0,
  class: "custom-button__loading"
}, Iw = /* @__PURE__ */ oe({
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
      e.loading ? (S(), D("div", Lw, o[1] || (o[1] = [
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
    ], 10, xw));
  }
}), Io = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Xt = /* @__PURE__ */ Io(Iw, [["__scopeId", "data-v-5d7f8015"]]), Ow = /* @__PURE__ */ oe({
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
      const r = !n.modelValue;
      o("update:modelValue", r), o("change", r);
    };
    return (r, a) => (S(), D(
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
}), fs = /* @__PURE__ */ Io(Ow, [["__scopeId", "data-v-59686f54"]]), $w = { class: "dialog-footer-default" }, Rw = { class: "footer-left" }, Mw = { class: "footer-right" }, Pw = /* @__PURE__ */ oe({
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
    const o = e, s = n, r = P(o.modelValue), a = A(() => ["app-dialog", o.customClass].filter(Boolean).join(" "));
    pe(
      () => o.modelValue,
      (d) => {
        r.value = d;
      }
    ), pe(r, (d) => {
      s("update:modelValue", d);
    });
    const i = () => {
      s("close");
    }, c = () => {
      s("confirm");
    }, u = () => {
      r.value = !1, s("cancel");
    };
    return t({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), (d, m) => {
      const g = Ay;
      return S(), se(g, {
        modelValue: l(r),
        "onUpdate:modelValue": m[0] || (m[0] = (w) => Qt(r) ? r.value = w : null),
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
      }, Oa({
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
              f("div", $w, [
                f("div", Rw, [
                  ie(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                f("div", Mw, [
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
}), fd = /* @__PURE__ */ Io(Pw, [["__scopeId", "data-v-a7e8a5d6"]]), Nw = { class: "confirm-content" }, Dw = { class: "confirm-footer" }, zw = /* @__PURE__ */ oe({
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
    const o = e, s = n, r = P(o.modelValue), a = A(() => {
      const d = ["confirm-dialog"];
      return o.type === "warning" ? d.push("warning-dialog") : o.type === "danger" && d.push("delete-dialog"), d.join(" ");
    }), i = A(() => o.type === "danger" ? "danger" : o.type === "warning" ? "warning" : "primary");
    pe(
      () => o.modelValue,
      (d) => {
        r.value = d;
      }
    ), pe(r, (d) => {
      s("update:modelValue", d);
    });
    const c = () => {
      s("confirm");
    }, u = () => {
      r.value = !1, s("cancel");
    };
    return t({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), (d, m) => (S(), se(fd, {
      modelValue: l(r),
      "onUpdate:modelValue": m[0] || (m[0] = (g) => Qt(r) ? r.value = g : null),
      title: d.title,
      width: d.width,
      center: d.center,
      "show-close": d.showClose,
      "custom-class": l(a)
    }, {
      footer: J(() => [
        f("div", Dw, [
          d.showCancelButton ? (S(), se(Xt, {
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
        f("div", Nw, [
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
}), Bw = /* @__PURE__ */ Io(zw, [["__scopeId", "data-v-875c8d56"]]), Ee = {
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
      showClose: r = !1
    } = e;
    o === "center" ? rw({
      message: t,
      type: n,
      duration: s,
      showClose: r,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : mw({
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
}, Fw = "snippets-code:developer-mode", pd = "snippets-code:frontend-diagnostics", jw = 240, ps = "[REDACTED]", ar = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${ps}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${ps}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  ps
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${ps}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${ps}`
), md = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return ar(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return ar(
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
    return ar(String(e));
  }
}, Vw = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Hw = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(pd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, cl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Fw) === "true";
  } catch {
    return !1;
  }
}, Ww = (e, t, n) => {
  if (!cl() || typeof localStorage > "u") return;
  const o = Hw();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Vw(),
    message: ar(t),
    data: md(n)
  });
  try {
    localStorage.setItem(
      pd,
      JSON.stringify(o.slice(-jw))
    );
  } catch {
  }
}, Uw = () => cl(), Gw = (e) => e === "error" || cl(), Js = (e, t, n) => {
  Ww(e, t, n), Gw(e) && tt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : md(n)
  }).catch(() => {
  });
}, Et = {
  info: (e, t, ...n) => {
    Js("info", e, t);
  },
  error: (e, t) => {
    Js("error", e, t);
  },
  warn: (e, t) => {
    Js("warn", e, t);
  },
  debug: (e, t) => {
    Uw() && Js("debug", e, t);
  }
}, qw = /* @__PURE__ */ new Set([
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
]), Kw = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), Zw = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), Yw = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), hd = 5, Xw = 1024 * 1024, Qw = 5 * 1024 * 1024, ac = 4e4, Jr = (e) => e?.map((t) => ({ ...t })) ?? [], ul = (e) => e.split(".").pop()?.toLowerCase() ?? "", gd = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, dl = (e) => Kw.has(e.type) || Zw.has(ul(e.name)), vd = (e) => e.type.startsWith("text/") || qw.has(ul(e.name)), Jw = (e) => Yw.has(ul(e.name)), ek = async (e) => await new Promise((t, n) => {
  const o = new FileReader();
  o.onload = () => t(String(o.result ?? "")), o.onerror = () => n(o.error ?? new Error("read failed")), o.readAsDataURL(e);
}), tk = async (e) => {
  const t = await e.text();
  return t.length <= ac ? { text: t, truncated: !1 } : {
    text: t.slice(0, ac),
    truncated: !0
  };
}, nk = (e, t) => {
  const n = t.filter(
    (s) => s.type === "text" && s.status === "parsed"
  );
  if (!n.length) return e;
  const o = n.map((s, r) => {
    const a = s.error === "truncated";
    return [
      `--- 文件 ${r + 1}: ${s.name} ---`,
      a ? "以下文件内容已截断。" : "",
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
}, ea = 160, bd = (e) => {
  const t = e.trim();
  if (!t) return 0;
  const n = (t.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, r = (t.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((a, i) => /^[A-Za-z0-9_]+$/.test(i) ? a + Math.max(1, Math.ceil(i.length / 4)) : a + 1, 0);
  return Math.max(1, Math.ceil(n + r));
}, ta = (e) => Math.max(0, Math.ceil(e.length / 4)), ok = (e) => Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0, sk = (e, t) => {
  const n = Object.entries(t).filter(
    ([, o]) => o != null
  );
  return {
    ...e,
    ...Object.fromEntries(n)
  };
}, yd = (e) => Array.isArray(e) ? e.filter((t) => t.type === "text").map((t) => t.text).join(`
`) : e, rk = (e) => {
  const t = e.attachments?.filter(
    (r) => r.status === "parsed"
  ) ?? [], n = nk(
    e.content,
    t
  ), o = t.filter(
    (r) => r.type === "image" && r.dataUrl
  );
  if (!o.length) return n;
  const s = [{ type: "text", text: n }];
  for (const r of o)
    s.push({
      type: "image_url",
      image_url: { url: r.dataUrl ?? "" }
    });
  return s;
}, ns = (e) => bd(
  e.map((t) => `${t.role}: ${yd(t.content)}`).join(`
`)
), lc = (e, t, n) => {
  const o = Math.max(240, t * 4);
  return e.length <= o ? e : `${n}

${e.slice(-o)}`;
}, ms = (e) => String(e).padStart(2, "0"), ak = (e = /* @__PURE__ */ new Date()) => {
  const t = -e.getTimezoneOffset() / 60, n = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${t >= 0 ? "+" : ""}${t}`, o = [
    e.getFullYear(),
    ms(e.getMonth() + 1),
    ms(e.getDate())
  ].join("-"), s = [
    ms(e.getHours()),
    ms(e.getMinutes()),
    ms(e.getSeconds())
  ].join(":"), r = e.toLocaleDateString("zh-CN", { weekday: "long" });
  return { isoDate: o, localTime: s, timeZone: n, weekday: r };
}, lk = () => {
  const { isoDate: e, localTime: t, timeZone: n, weekday: o } = ak();
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
}, ik = (e) => {
  const t = e.filter((o) => o.role === "system").map((o) => yd(o.content).trim()).filter(Boolean), n = e.filter(
    (o) => o.role !== "system"
  );
  return t.length ? [
    { role: "system", content: t.join(`

---

`) },
    ...n
  ] : n;
}, ck = (e, t, n) => {
  if (e.role !== "assistant" || typeof e.content != "string" || t < ea)
    return null;
  let o = t, s = {
    ...e,
    content: lc(
      e.content,
      o,
      n
    )
  };
  for (; ns([s]) > t && o > ea; )
    o = Math.max(
      ea,
      Math.floor(o * 0.7)
    ), s = {
      ...e,
      content: lc(
        e.content,
        o,
        n
      )
    };
  return ns([s]) <= t ? s : null;
}, uk = (e, t, n) => {
  const o = [];
  let s = 0;
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const a = e[r], i = ns([a]);
    if (s + i <= t || o.length === 0) {
      o.unshift(a), s += i;
      continue;
    }
    const c = t - s, u = ck(
      a,
      c,
      n
    );
    u && (o.unshift(u), s += ns([u]));
  }
  return o;
}, yo = (e) => `${Date.now()}-${e}-${Math.random().toString(16).slice(2, 8)}`, os = (e) => e.type === "root", Dr = (e) => new Map(e.map((t) => [t.id, t])), Fs = (e) => e.find(os), js = (e, t) => {
  if (!t) return null;
  const n = Dr(e);
  let o = n.get(t);
  const s = /* @__PURE__ */ new Set();
  for (; o?.childIds?.length && !s.has(o.id); )
    s.add(o.id), o = n.get(o.childIds[o.childIds.length - 1]);
  return o?.id ?? null;
}, dk = (e, t) => {
  if (e.some(os)) {
    const r = e.map((i) => ({
      ...i,
      type: i.type ?? "text",
      parentId: i.parentId ?? null,
      childIds: i.childIds ?? []
    })), a = Fs(r);
    return {
      messages: r,
      currentNodeId: js(r, r.at(-1)?.id) ?? a?.id ?? null
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
  let s = n.id;
  for (const r of e) {
    const a = {
      ...r,
      role: r.role === "system" ? "assistant" : r.role,
      type: "text",
      parentId: s,
      childIds: []
    };
    o.find((c) => c.id === s)?.childIds?.push(a.id), o.push(a), s = a.id;
  }
  return { messages: o, currentNodeId: s };
}, wd = (e, t) => {
  if (!t) return [];
  const n = Dr(e), o = [], s = /* @__PURE__ */ new Set();
  let r = n.get(t);
  for (; r && !s.has(r.id); )
    s.add(r.id), o.unshift(r), r = r.parentId ? n.get(r.parentId) : void 0;
  return o;
}, lr = (e) => {
  if (!e) return [];
  const t = e.currentNodeId ?? js(e.messages, Fs(e.messages)?.id);
  return wd(e.messages, t).filter(
    (n) => !os(n)
  );
}, fk = (e) => {
  if (!e) return [];
  const t = Dr(e.messages), n = (o) => js(e.messages, o) ?? o;
  return lr(e).map((o) => {
    const r = (o.parentId ? t.get(o.parentId) : void 0)?.childIds ?? [o.id];
    return {
      message: o,
      siblingLeafNodeIds: r.map(n),
      siblingCurrentIndex: Math.max(0, r.indexOf(o.id))
    };
  });
}, na = (e, t) => {
  const n = Fs(e.messages), o = t.parentId ?? e.currentNodeId ?? n?.id ?? null, s = {
    ...t,
    type: "text",
    parentId: o,
    childIds: []
  };
  if (e.messages.push(s), o) {
    const r = e.messages.find((a) => a.id === o);
    r && (r.childIds = [...r.childIds ?? [], s.id]);
  }
  return e.currentNodeId = s.id, s;
}, pk = (e, t) => {
  const n = Dr(e), o = /* @__PURE__ */ new Set(), s = (r) => {
    if (!o.has(r)) {
      o.add(r);
      for (const a of n.get(r)?.childIds ?? []) s(a);
    }
  };
  return s(t), o;
}, mk = (e, t, n) => {
  const o = e.find((i) => i.id === n);
  if (!o || os(o)) return null;
  const s = pk(e, n), r = e.filter((i) => !s.has(i.id)).map((i) => ({
    ...i,
    childIds: (i.childIds ?? []).filter((c) => !s.has(c))
  })), a = t && s.has(t) ? js(r, o.parentId) ?? Fs(r)?.id ?? null : t;
  return {
    messages: r,
    currentNodeId: a,
    deletedIds: s
  };
};
async function wa(e = {}) {
  return typeof e == "object" && Object.freeze(e), await tt("plugin:dialog|open", { options: e });
}
const hk = [
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
], zr = (e, t) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: t,
  mime: e.type || "application/octet-stream",
  size: e.size,
  status: "pending"
}), gk = async (e, t) => {
  const n = zr(e, "image");
  if (e.size > Qw)
    return {
      ...n,
      status: "error",
      error: t("localAi.imageTooLarge")
    };
  try {
    return {
      ...n,
      status: "parsed",
      dataUrl: await ek(e)
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, vk = async (e, t) => {
  const n = zr(e, "text");
  if (e.size > Xw)
    return {
      ...n,
      status: "error",
      error: t("localAi.textFileTooLarge")
    };
  try {
    const o = await tk(e);
    return {
      ...n,
      status: "parsed",
      text: o.text,
      error: o.truncated ? "truncated" : void 0
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, bk = async (e, t) => dl(e) ? gk(e, t) : vd(e) ? vk(e, t) : {
  ...zr(e, "unsupported"),
  status: "error",
  error: Jw(e) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
}, ic = async (e, t, n) => {
  const o = Array.from(t), s = hd - e.value.length;
  if (s <= 0) {
    Ee.msg(n("localAi.attachmentLimit"), "warning");
    return;
  }
  o.length > s && Ee.msg(n("localAi.attachmentLimit"), "warning");
  const r = o.slice(0, s), a = r.map(
    (i) => zr(
      i,
      dl(i) ? "image" : vd(i) ? "text" : "unsupported"
    )
  );
  e.value.push(...a), await Promise.all(
    r.map(async (i, c) => {
      const u = await bk(i, n), d = e.value.findIndex(
        (m) => m.id === a[c].id
      );
      d >= 0 && (e.value[d] = u);
    })
  );
}, yk = (e, t) => {
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
}, wk = (e) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: e.kind,
  mime: e.mime,
  size: e.size,
  status: e.error ? "error" : "parsed",
  text: e.text ?? void 0,
  dataUrl: e.dataUrl ?? void 0,
  error: void 0
}), kk = () => {
  const { t: e } = Ps(), t = P([]), n = P(!1);
  return {
    attachments: t,
    attachmentPicking: n,
    pickAttachmentFiles: async () => {
      const o = hd - t.value.length;
      if (o <= 0 || n.value) {
        o <= 0 && Ee.msg(e("localAi.attachmentLimit"), "warning");
        return;
      }
      n.value = !0;
      try {
        const s = await wa({
          title: e("localAi.addAttachment"),
          directory: !1,
          multiple: !0,
          filters: [
            {
              name: e("localAi.attachment"),
              extensions: hk
            }
          ]
        });
        if (!s) return;
        const r = (Array.isArray(s) ? s : [s]).slice(
          0,
          o
        );
        (Array.isArray(s) ? s.length : 1) > o && Ee.msg(e("localAi.attachmentLimit"), "warning");
        const a = await Sw(r);
        t.value.push(
          ...a.map((i) => ({
            ...wk(i),
            error: yk(i, e)
          }))
        );
      } catch (s) {
        Ee.msg(
          `${e("localAi.attachmentReadFailed")}: ${String(s)}`,
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
      const r = Array.from(o.clipboardData?.files ?? []).filter(dl);
      r.length && (o.preventDefault(), await ic(t, r, e));
    },
    removeAttachment: (o) => {
      t.value = t.value.filter(
        (s) => s.id !== o
      );
    },
    attachmentStatusText: (o) => o.status === "pending" ? e("localAi.attachmentPending") : o.status === "error" ? o.error ?? "" : o.error === "truncated" ? e("localAi.attachmentTruncated") : e("localAi.attachmentParsed")
  };
};
function fl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Oo = fl();
function kd(e) {
  Oo = e;
}
var Es = { exec: () => null };
function Ae(e, t = "") {
  let n = typeof e == "string" ? e : e.source, o = { replace: (s, r) => {
    let a = typeof r == "string" ? r : r.source;
    return a = a.replace(Dt.caret, "$1"), n = n.replace(s, a), o;
  }, getRegex: () => new RegExp(n, t) };
  return o;
}
var _k = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Dt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Tk = /^(?:[ \t]*(?:\n|$))+/, Sk = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ak = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Vs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ck = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, pl = /(?:[*+-]|\d{1,9}[.)])/, _d = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Td = Ae(_d).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Ek = Ae(_d).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ml = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, xk = /^[^\n]+/, hl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Lk = Ae(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", hl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ik = Ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, pl).getRegex(), Br = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", gl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ok = Ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", gl).replace("tag", Br).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Sd = Ae(ml).replace("hr", Vs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Br).getRegex(), $k = Ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Sd).getRegex(), vl = { blockquote: $k, code: Sk, def: Lk, fences: Ak, heading: Ck, hr: Vs, html: Ok, lheading: Td, list: Ik, newline: Tk, paragraph: Sd, table: Es, text: xk }, cc = Ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Vs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Br).getRegex(), Rk = { ...vl, lheading: Ek, table: cc, paragraph: Ae(ml).replace("hr", Vs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", cc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Br).getRegex() }, Mk = { ...vl, html: Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", gl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Es, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ae(ml).replace("hr", Vs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Td).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Pk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Nk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ad = /^( {2,}|\\)\n(?!\s*$)/, Dk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Fr = /[\p{P}\p{S}]/u, bl = /[\s\p{P}\p{S}]/u, Cd = /[^\s\p{P}\p{S}]/u, zk = Ae(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, bl).getRegex(), Ed = /(?!~)[\p{P}\p{S}]/u, Bk = /(?!~)[\s\p{P}\p{S}]/u, Fk = /(?:[^\s\p{P}\p{S}]|~)/u, jk = Ae(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", _k ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), xd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Vk = Ae(xd, "u").replace(/punct/g, Fr).getRegex(), Hk = Ae(xd, "u").replace(/punct/g, Ed).getRegex(), Ld = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Wk = Ae(Ld, "gu").replace(/notPunctSpace/g, Cd).replace(/punctSpace/g, bl).replace(/punct/g, Fr).getRegex(), Uk = Ae(Ld, "gu").replace(/notPunctSpace/g, Fk).replace(/punctSpace/g, Bk).replace(/punct/g, Ed).getRegex(), Gk = Ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Cd).replace(/punctSpace/g, bl).replace(/punct/g, Fr).getRegex(), qk = Ae(/\\(punct)/, "gu").replace(/punct/g, Fr).getRegex(), Kk = Ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Zk = Ae(gl).replace("(?:-->|$)", "-->").getRegex(), Yk = Ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Zk).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), yr = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Xk = Ae(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", yr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Id = Ae(/^!?\[(label)\]\[(ref)\]/).replace("label", yr).replace("ref", hl).getRegex(), Od = Ae(/^!?\[(ref)\](?:\[\])?/).replace("ref", hl).getRegex(), Qk = Ae("reflink|nolink(?!\\()", "g").replace("reflink", Id).replace("nolink", Od).getRegex(), uc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, yl = { _backpedal: Es, anyPunctuation: qk, autolink: Kk, blockSkip: jk, br: Ad, code: Nk, del: Es, emStrongLDelim: Vk, emStrongRDelimAst: Wk, emStrongRDelimUnd: Gk, escape: Pk, link: Xk, nolink: Od, punctuation: zk, reflink: Id, reflinkSearch: Qk, tag: Yk, text: Dk, url: Es }, Jk = { ...yl, link: Ae(/^!?\[(label)\]\((.*?)\)/).replace("label", yr).getRegex(), reflink: Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", yr).getRegex() }, ka = { ...yl, emStrongRDelimAst: Uk, emStrongLDelim: Hk, url: Ae(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", uc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ae(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", uc).getRegex() }, e_ = { ...ka, br: Ae(Ad).replace("{2,}", "*").getRegex(), text: Ae(ka.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, er = { normal: vl, gfm: Rk, pedantic: Mk }, hs = { normal: yl, gfm: ka, breaks: e_, pedantic: Jk }, t_ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, dc = (e) => t_[e];
function Wn(e, t) {
  if (t) {
    if (Dt.escapeTest.test(e)) return e.replace(Dt.escapeReplace, dc);
  } else if (Dt.escapeTestNoEncode.test(e)) return e.replace(Dt.escapeReplaceNoEncode, dc);
  return e;
}
function fc(e) {
  try {
    e = encodeURI(e).replace(Dt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function pc(e, t) {
  let n = e.replace(Dt.findPipe, (r, a, i) => {
    let c = !1, u = a;
    for (; --u >= 0 && i[u] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), o = n.split(Dt.splitPipe), s = 0;
  if (o[0].trim() || o.shift(), o.length > 0 && !o.at(-1)?.trim() && o.pop(), t) if (o.length > t) o.splice(t);
  else for (; o.length < t; ) o.push("");
  for (; s < o.length; s++) o[s] = o[s].trim().replace(Dt.slashPipe, "|");
  return o;
}
function gs(e, t, n) {
  let o = e.length;
  if (o === 0) return "";
  let s = 0;
  for (; s < o && e.charAt(o - s - 1) === t; )
    s++;
  return e.slice(0, o - s);
}
function n_(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let o = 0; o < e.length; o++) if (e[o] === "\\") o++;
  else if (e[o] === t[0]) n++;
  else if (e[o] === t[1] && (n--, n < 0)) return o;
  return n > 0 ? -2 : -1;
}
function mc(e, t, n, o, s) {
  let r = t.href, a = t.title || null, i = e[1].replace(s.other.outputLinkReplace, "$1");
  o.state.inLink = !0;
  let c = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: r, title: a, text: i, tokens: o.inlineTokens(i) };
  return o.state.inLink = !1, c;
}
function o_(e, t, n) {
  let o = e.match(n.other.indentCodeCompensation);
  if (o === null) return t;
  let s = o[1];
  return t.split(`
`).map((r) => {
    let a = r.match(n.other.beginningSpace);
    if (a === null) return r;
    let [i] = a;
    return i.length >= s.length ? r.slice(s.length) : r;
  }).join(`
`);
}
var wr = class {
  constructor(e) {
    Re(this, "options");
    Re(this, "rules");
    Re(this, "lexer");
    this.options = e || Oo;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : gs(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], o = o_(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: o };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let o = gs(n, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (n = o.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: gs(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = gs(t[0], `
`).split(`
`), o = "", s = "", r = [];
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
${u}` : u, s = s ? `${s}
${d}` : d;
        let m = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, r, !0), this.lexer.state.top = m, n.length === 0) break;
        let g = r.at(-1);
        if (g?.type === "code") break;
        if (g?.type === "blockquote") {
          let w = g, h = w.raw + `
` + n.join(`
`), b = this.blockquote(h);
          r[r.length - 1] = b, o = o.substring(0, o.length - w.raw.length) + b.raw, s = s.substring(0, s.length - w.text.length) + b.text;
          break;
        } else if (g?.type === "list") {
          let w = g, h = w.raw + `
` + n.join(`
`), b = this.list(h);
          r[r.length - 1] = b, o = o.substring(0, o.length - g.raw.length) + b.raw, s = s.substring(0, s.length - w.raw.length) + b.raw, n = h.substring(r.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: r, text: s };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), o = n.length > 1, s = { type: "list", raw: "", ordered: o, start: o ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = o ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = o ? n : "[*+-]");
      let r = this.rules.other.listItemRegex(n), a = !1;
      for (; e; ) {
        let c = !1, u = "", d = "";
        if (!(t = r.exec(e)) || this.rules.block.hr.test(e)) break;
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
        s.loose || (a ? s.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (a = !0)), s.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: !1, text: d, tokens: [] }), s.raw += u;
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
          let u = c.tokens.filter((m) => m.type === "space"), d = u.length > 0 && u.some((m) => this.rules.other.anyLine.test(m.raw));
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
    let n = pc(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let a of o) this.rules.other.tableAlignRight.test(a) ? r.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? r.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? r.align.push("left") : r.align.push(null);
      for (let a = 0; a < n.length; a++) r.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: !0, align: r.align[a] });
      for (let a of s) r.rows.push(pc(a, r.header.length).map((i, c) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: r.align[c] })));
      return r;
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
        let r = gs(n.slice(0, -1), "\\");
        if ((n.length - r.length) % 2 === 0) return;
      } else {
        let r = n_(t[2], "()");
        if (r === -2) return;
        if (r > -1) {
          let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + r;
          t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let o = t[2], s = "";
      if (this.options.pedantic) {
        let r = this.rules.other.pedanticHrefTitle.exec(o);
        r && (o = r[1], s = r[3]);
      } else s = t[3] ? t[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), mc(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let o = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = t[o.toLowerCase()];
      if (!s) {
        let r = n[0].charAt(0);
        return { type: "text", raw: r, text: r };
      }
      return mc(n, s, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!o || o[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let s = [...o[0]].length - 1, r, a, i = s, c = 0, u = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + s); (o = u.exec(t)) != null; ) {
        if (r = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !r) continue;
        if (a = [...r].length, o[3] || o[4]) {
          i += a;
          continue;
        } else if ((o[5] || o[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (i -= a, i > 0) continue;
        a = Math.min(a, a + i + c);
        let d = [...o[0]][0].length, m = e.slice(0, s + o.index + d + a);
        if (Math.min(s, a) % 2) {
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
}, fn = class _a {
  constructor(t) {
    Re(this, "tokens");
    Re(this, "options");
    Re(this, "state");
    Re(this, "inlineQueue");
    Re(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Oo, this.options.tokenizer = this.options.tokenizer || new wr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Dt, block: er.normal, inline: hs.normal };
    this.options.pedantic ? (n.block = er.pedantic, n.inline = hs.pedantic) : this.options.gfm && (n.block = er.gfm, this.options.breaks ? n.inline = hs.breaks : n.inline = hs.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: er, inline: hs };
  }
  static lex(t, n) {
    return new _a(n).lex(t);
  }
  static lexInline(t, n) {
    return new _a(n).inlineTokens(t);
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
      let s;
      if (this.options.extensions?.block?.some((a) => (s = a.call({ lexer: this }, t, n)) ? (t = t.substring(s.raw.length), n.push(s), !0) : !1)) continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        let a = n.at(-1);
        s.raw.length === 1 && a !== void 0 ? a.raw += `
` : n.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        let a = n.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.at(-1).src = a.text) : n.push(s);
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
        let a = n.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = { href: s.href, title: s.title }, n.push(s));
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
      let r = t;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, i = t.slice(1), c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, i), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
        }), a < 1 / 0 && a >= 0 && (r = t.substring(0, a + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(r))) {
        let a = n.at(-1);
        o && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : n.push(s), o = r.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        let a = n.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : n.push(s);
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
    let o = t, s = null;
    if (this.tokens.links) {
      let c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; ) c.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; ) o = o.slice(0, s.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let r;
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) r = s[2] ? s[2].length : 0, o = o.slice(0, s.index + r) + "[" + "a".repeat(s[0].length - r - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
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
}, kr = class {
  constructor(e) {
    Re(this, "options");
    Re(this, "parser");
    this.options = e || Oo;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let o = (t || "").match(Dt.notSpaceStart)?.[0], s = e.replace(Dt.endingNewline, "") + `
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
    for (let a = 0; a < e.items.length; a++) {
      let i = e.items[a];
      o += this.listitem(i);
    }
    let s = t ? "ol" : "ul", r = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + s + r + `>
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
      let r = e.rows[s];
      n = "";
      for (let a = 0; a < r.length; a++) n += this.tablecell(r[a]);
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
    let o = this.parser.parseInline(n), s = fc(e);
    if (s === null) return o;
    e = s;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + Wn(t) + '"'), r += ">" + o + "</a>", r;
  }
  image({ href: e, title: t, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let s = fc(e);
    if (s === null) return Wn(n);
    e = s;
    let r = `<img src="${e}" alt="${n}"`;
    return t && (r += ` title="${Wn(t)}"`), r += ">", r;
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
}, pn = class Ta {
  constructor(t) {
    Re(this, "options");
    Re(this, "renderer");
    Re(this, "textRenderer");
    this.options = t || Oo, this.options.renderer = this.options.renderer || new kr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new wl();
  }
  static parse(t, n) {
    return new Ta(n).parse(t);
  }
  static parseInline(t, n) {
    return new Ta(n).parseInline(t);
  }
  parse(t) {
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      if (this.options.extensions?.renderers?.[s.type]) {
        let a = s, i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          n += i || "";
          continue;
        }
      }
      let r = s;
      switch (r.type) {
        case "space": {
          n += this.renderer.space(r);
          break;
        }
        case "hr": {
          n += this.renderer.hr(r);
          break;
        }
        case "heading": {
          n += this.renderer.heading(r);
          break;
        }
        case "code": {
          n += this.renderer.code(r);
          break;
        }
        case "table": {
          n += this.renderer.table(r);
          break;
        }
        case "blockquote": {
          n += this.renderer.blockquote(r);
          break;
        }
        case "list": {
          n += this.renderer.list(r);
          break;
        }
        case "checkbox": {
          n += this.renderer.checkbox(r);
          break;
        }
        case "html": {
          n += this.renderer.html(r);
          break;
        }
        case "def": {
          n += this.renderer.def(r);
          break;
        }
        case "paragraph": {
          n += this.renderer.paragraph(r);
          break;
        }
        case "text": {
          n += this.renderer.text(r);
          break;
        }
        default: {
          let a = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
  parseInline(t, n = this.renderer) {
    let o = "";
    for (let s = 0; s < t.length; s++) {
      let r = t[s];
      if (this.options.extensions?.renderers?.[r.type]) {
        let i = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          o += i || "";
          continue;
        }
      }
      let a = r;
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
}, nr, ys = (nr = class {
  constructor(e) {
    Re(this, "options");
    Re(this, "block");
    this.options = e || Oo;
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
}, Re(nr, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Re(nr, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), nr), s_ = class {
  constructor(...e) {
    Re(this, "defaults", fl());
    Re(this, "options", this.setOptions);
    Re(this, "parse", this.parseMarkdown(!0));
    Re(this, "parseInline", this.parseMarkdown(!1));
    Re(this, "Parser", pn);
    Re(this, "Renderer", kr);
    Re(this, "TextRenderer", wl);
    Re(this, "Lexer", fn);
    Re(this, "Tokenizer", wr);
    Re(this, "Hooks", ys);
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let o of e) switch (n = n.concat(t.call(this, o)), o.type) {
      case "table": {
        let s = o;
        for (let r of s.header) n = n.concat(this.walkTokens(r.tokens, t));
        for (let r of s.rows) for (let a of r) n = n.concat(this.walkTokens(a.tokens, t));
        break;
      }
      case "list": {
        let s = o;
        n = n.concat(this.walkTokens(s.items, t));
        break;
      }
      default: {
        let s = o;
        this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((r) => {
          let a = s[r].flat(1 / 0);
          n = n.concat(this.walkTokens(a, t));
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
          let r = t.renderers[s.name];
          r ? t.renderers[s.name] = function(...a) {
            let i = s.renderer.apply(this, a);
            return i === !1 && (i = r.apply(this, a)), i;
          } : t.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let r = t[s.level];
          r ? r.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
      }), o.extensions = t), n.renderer) {
        let s = this.defaults.renderer || new kr(this.defaults);
        for (let r in n.renderer) {
          if (!(r in s)) throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r)) continue;
          let a = r, i = n.renderer[a], c = s[a];
          s[a] = (...u) => {
            let d = i.apply(s, u);
            return d === !1 && (d = c.apply(s, u)), d || "";
          };
        }
        o.renderer = s;
      }
      if (n.tokenizer) {
        let s = this.defaults.tokenizer || new wr(this.defaults);
        for (let r in n.tokenizer) {
          if (!(r in s)) throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r)) continue;
          let a = r, i = n.tokenizer[a], c = s[a];
          s[a] = (...u) => {
            let d = i.apply(s, u);
            return d === !1 && (d = c.apply(s, u)), d;
          };
        }
        o.tokenizer = s;
      }
      if (n.hooks) {
        let s = this.defaults.hooks || new ys();
        for (let r in n.hooks) {
          if (!(r in s)) throw new Error(`hook '${r}' does not exist`);
          if (["options", "block"].includes(r)) continue;
          let a = r, i = n.hooks[a], c = s[a];
          ys.passThroughHooks.has(r) ? s[a] = (u) => {
            if (this.defaults.async && ys.passThroughHooksRespectAsync.has(r)) return (async () => {
              let m = await i.call(s, u);
              return c.call(s, m);
            })();
            let d = i.call(s, u);
            return c.call(s, d);
          } : s[a] = (...u) => {
            if (this.defaults.async) return (async () => {
              let m = await i.apply(s, u);
              return m === !1 && (m = await c.apply(s, u)), m;
            })();
            let d = i.apply(s, u);
            return d === !1 && (d = c.apply(s, u)), d;
          };
        }
        o.hooks = s;
      }
      if (n.walkTokens) {
        let s = this.defaults.walkTokens, r = n.walkTokens;
        o.walkTokens = function(a) {
          let i = [];
          return i.push(r.call(this, a)), s && (i = i.concat(s.call(this, a))), i;
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
      let o = { ...n }, s = { ...this.defaults, ...o }, r = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === !0 && o.async === !1) return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return r(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return r(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (async () => {
        let a = s.hooks ? await s.hooks.preprocess(t) : t, i = await (s.hooks ? await s.hooks.provideLexer() : e ? fn.lex : fn.lexInline)(a, s), c = s.hooks ? await s.hooks.processAllTokens(i) : i;
        s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
        let u = await (s.hooks ? await s.hooks.provideParser() : e ? pn.parse : pn.parseInline)(c, s);
        return s.hooks ? await s.hooks.postprocess(u) : u;
      })().catch(r);
      try {
        s.hooks && (t = s.hooks.preprocess(t));
        let a = (s.hooks ? s.hooks.provideLexer() : e ? fn.lex : fn.lexInline)(t, s);
        s.hooks && (a = s.hooks.processAllTokens(a)), s.walkTokens && this.walkTokens(a, s.walkTokens);
        let i = (s.hooks ? s.hooks.provideParser() : e ? pn.parse : pn.parseInline)(a, s);
        return s.hooks && (i = s.hooks.postprocess(i)), i;
      } catch (a) {
        return r(a);
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
}, Co = new s_();
function $e(e, t) {
  return Co.parse(e, t);
}
$e.options = $e.setOptions = function(e) {
  return Co.setOptions(e), $e.defaults = Co.defaults, kd($e.defaults), $e;
};
$e.getDefaults = fl;
$e.defaults = Oo;
$e.use = function(...e) {
  return Co.use(...e), $e.defaults = Co.defaults, kd($e.defaults), $e;
};
$e.walkTokens = function(e, t) {
  return Co.walkTokens(e, t);
};
$e.parseInline = Co.parseInline;
$e.Parser = pn;
$e.parser = pn.parse;
$e.Renderer = kr;
$e.TextRenderer = wl;
$e.Lexer = fn;
$e.lexer = fn.lex;
$e.Tokenizer = wr;
$e.Hooks = ys;
$e.parse = $e;
$e.options;
$e.setOptions;
$e.use;
$e.walkTokens;
$e.parseInline;
pn.parse;
fn.lex;
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function r_(e) {
  if (Array.isArray(e)) return e;
}
function a_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, s, r, a, i = [], c = !0, u = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(c = (o = r.call(n)).done) && (i.push(o.value), i.length !== t); c = !0) ;
    } catch (d) {
      u = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw s;
      }
    }
    return i;
  }
}
function l_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i_(e, t) {
  return r_(e) || a_(e, t) || c_(e, t) || l_();
}
function c_(e, t) {
  if (e) {
    if (typeof e == "string") return hc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hc(e, t) : void 0;
  }
}
const $d = Object.entries, gc = Object.setPrototypeOf, u_ = Object.isFrozen, d_ = Object.getPrototypeOf, f_ = Object.getOwnPropertyDescriptor;
let zt = Object.freeze, sn = Object.seal, Uo = Object.create, Rd = typeof Reflect < "u" && Reflect, Sa = Rd.apply, Aa = Rd.construct;
zt || (zt = function(t) {
  return t;
});
sn || (sn = function(t) {
  return t;
});
Sa || (Sa = function(t, n) {
  for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++)
    s[r - 2] = arguments[r];
  return t.apply(n, s);
});
Aa || (Aa = function(t) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    o[s - 1] = arguments[s];
  return new t(...o);
});
const jo = it(Array.prototype.forEach), p_ = it(Array.prototype.lastIndexOf), vc = it(Array.prototype.pop), Vo = it(Array.prototype.push), m_ = it(Array.prototype.splice), Pt = Array.isArray, ws = it(String.prototype.toLowerCase), oa = it(String.prototype.toString), bc = it(String.prototype.match), Ho = it(String.prototype.replace), yc = it(String.prototype.indexOf), h_ = it(String.prototype.trim), g_ = it(Number.prototype.toString), v_ = it(Boolean.prototype.toString), wc = typeof BigInt > "u" ? null : it(BigInt.prototype.toString), kc = typeof Symbol > "u" ? null : it(Symbol.prototype.toString), Je = it(Object.prototype.hasOwnProperty), vs = it(Object.prototype.toString), gt = it(RegExp.prototype.test), bs = b_(TypeError);
function it(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      o[s - 1] = arguments[s];
    return Sa(e, t, o);
  };
}
function b_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return Aa(e, n);
  };
}
function ye(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ws;
  if (gc && gc(e, null), !Pt(t))
    return e;
  let o = t.length;
  for (; o--; ) {
    let s = t[o];
    if (typeof s == "string") {
      const r = n(s);
      r !== s && (u_(t) || (t[o] = r), s = r);
    }
    e[s] = !0;
  }
  return e;
}
function y_(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function Ct(e) {
  const t = Uo(null);
  for (const o of $d(e)) {
    var n = i_(o, 2);
    const s = n[0], r = n[1];
    Je(e, s) && (Pt(r) ? t[s] = y_(r) : r && typeof r == "object" && r.constructor === Object ? t[s] = Ct(r) : t[s] = r);
  }
  return t;
}
function w_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return g_(e);
    case "boolean":
      return v_(e);
    case "bigint":
      return wc ? wc(e) : "0";
    case "symbol":
      return kc ? kc(e) : "Symbol()";
    case "undefined":
      return vs(e);
    case "function":
    case "object": {
      if (e === null)
        return vs(e);
      const t = e, n = An(t, "toString");
      if (typeof n == "function") {
        const o = n(t);
        return typeof o == "string" ? o : vs(o);
      }
      return vs(e);
    }
    default:
      return vs(e);
  }
}
function An(e, t) {
  for (; e !== null; ) {
    const o = f_(e, t);
    if (o) {
      if (o.get)
        return it(o.get);
      if (typeof o.value == "function")
        return it(o.value);
    }
    e = d_(e);
  }
  function n() {
    return null;
  }
  return n;
}
function k_(e) {
  try {
    return gt(e, ""), !0;
  } catch {
    return !1;
  }
}
const _c = zt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), sa = zt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ra = zt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), __ = zt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), aa = zt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), T_ = zt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Tc = zt(["#text"]), Sc = zt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), la = zt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ac = zt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), tr = zt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), S_ = sn(/{{[\w\W]*|^[\w\W]*}}/g), A_ = sn(/<%[\w\W]*|^[\w\W]*%>/g), C_ = sn(/\${[\w\W]*/g), E_ = sn(/^data-[\-\w.\u00B7-\uFFFF]+$/), x_ = sn(/^aria-[\-\w]+$/), Cc = sn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), L_ = sn(/^(?:\w+script|data):/i), I_ = sn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), O_ = sn(/^html$/i), $_ = sn(/^[a-z][.\w]*(-[.\w]+)+$/i), Sn = {
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
}, R_ = function() {
  return typeof window > "u" ? null : window;
}, M_ = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (o = n.getAttribute(s));
  const r = "dompurify" + (o ? "#" + o : "");
  try {
    return t.createPolicy(r, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
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
function Md() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R_();
  const t = (ae) => Md(ae);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Sn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const o = n, s = o.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, a = e.Node, i = e.Element, c = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, g = i.prototype, w = An(g, "cloneNode"), h = An(g, "remove"), b = An(g, "nextSibling"), C = An(g, "childNodes"), k = An(g, "parentNode"), M = An(g, "shadowRoot"), j = An(g, "attributes"), L = a && a.prototype ? An(a.prototype, "nodeType") : null, I = a && a.prototype ? An(a.prototype, "nodeName") : null;
  if (typeof r == "function") {
    const ae = n.createElement("template");
    ae.content && ae.content.ownerDocument && (n = ae.content.ownerDocument);
  }
  let O, R = "";
  const K = n, F = K.implementation, ne = K.createNodeIterator, H = K.createDocumentFragment, re = K.getElementsByTagName, de = o.importNode;
  let ce = Ec();
  t.isSupported = typeof $d == "function" && typeof k == "function" && F && F.createHTMLDocument !== void 0;
  const $ = S_, V = A_, B = C_, ue = E_, fe = x_, Te = L_, De = I_, Ue = $_;
  let ve = Cc, W = null;
  const U = ye({}, [..._c, ...sa, ...ra, ...aa, ...Tc]);
  let me = null;
  const Ie = ye({}, [...Sc, ...la, ...Ac, ...tr]);
  let ee = Object.seal(Uo(null, {
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
  const ze = Object.seal(Uo(null, {
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
  let ut = !0, Ge = !0, Lt = !1, bt = !0, qe = !1, yt = !0, st = !1, wt = !1, Xe = !1, ct = !1, It = !1, Bt = !1, q = !0, ke = !1;
  const dt = "user-content-";
  let xe = !0, kt = !1, He = {}, ft = null;
  const mo = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Dn = null;
  const kn = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let zn = null;
  const Ut = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bn = "http://www.w3.org/1998/Math/MathML", Ot = "http://www.w3.org/2000/svg", _t = "http://www.w3.org/1999/xhtml";
  let _n = _t, Tn = !1, ho = null;
  const eo = ye({}, [Bn, Ot, _t], oa);
  let rn = ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Fn = ye({}, ["annotation-xml"]);
  const to = ye({}, ["title", "style", "font", "a", "script"]);
  let an = null;
  const jn = ["application/xhtml+xml", "text/html"], $o = "text/html";
  let Oe = null, ln = null;
  const Ro = n.createElement("form"), Mo = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, cn = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = Ct(v), an = // eslint-disable-next-line unicorn/prefer-includes
    jn.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? $o : v.PARSER_MEDIA_TYPE, Oe = an === "application/xhtml+xml" ? oa : ws, W = Je(v, "ALLOWED_TAGS") && Pt(v.ALLOWED_TAGS) ? ye({}, v.ALLOWED_TAGS, Oe) : U, me = Je(v, "ALLOWED_ATTR") && Pt(v.ALLOWED_ATTR) ? ye({}, v.ALLOWED_ATTR, Oe) : Ie, ho = Je(v, "ALLOWED_NAMESPACES") && Pt(v.ALLOWED_NAMESPACES) ? ye({}, v.ALLOWED_NAMESPACES, oa) : eo, zn = Je(v, "ADD_URI_SAFE_ATTR") && Pt(v.ADD_URI_SAFE_ATTR) ? ye(Ct(Ut), v.ADD_URI_SAFE_ATTR, Oe) : Ut, Dn = Je(v, "ADD_DATA_URI_TAGS") && Pt(v.ADD_DATA_URI_TAGS) ? ye(Ct(kn), v.ADD_DATA_URI_TAGS, Oe) : kn, ft = Je(v, "FORBID_CONTENTS") && Pt(v.FORBID_CONTENTS) ? ye({}, v.FORBID_CONTENTS, Oe) : mo, X = Je(v, "FORBID_TAGS") && Pt(v.FORBID_TAGS) ? ye({}, v.FORBID_TAGS, Oe) : Ct({}), Ve = Je(v, "FORBID_ATTR") && Pt(v.FORBID_ATTR) ? ye({}, v.FORBID_ATTR, Oe) : Ct({}), He = Je(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? Ct(v.USE_PROFILES) : v.USE_PROFILES : !1, ut = v.ALLOW_ARIA_ATTR !== !1, Ge = v.ALLOW_DATA_ATTR !== !1, Lt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, bt = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qe = v.SAFE_FOR_TEMPLATES || !1, yt = v.SAFE_FOR_XML !== !1, st = v.WHOLE_DOCUMENT || !1, ct = v.RETURN_DOM || !1, It = v.RETURN_DOM_FRAGMENT || !1, Bt = v.RETURN_TRUSTED_TYPE || !1, Xe = v.FORCE_BODY || !1, q = v.SANITIZE_DOM !== !1, ke = v.SANITIZE_NAMED_PROPS || !1, xe = v.KEEP_CONTENT !== !1, kt = v.IN_PLACE || !1, ve = k_(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Cc, _n = typeof v.NAMESPACE == "string" ? v.NAMESPACE : _t, rn = Je(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ct(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Fn = Je(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? Ct(v.HTML_INTEGRATION_POINTS) : ye({}, ["annotation-xml"]);
    const N = Je(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? Ct(v.CUSTOM_ELEMENT_HANDLING) : Uo(null);
    if (ee = Uo(null), Je(N, "tagNameCheck") && Mo(N.tagNameCheck) && (ee.tagNameCheck = N.tagNameCheck), Je(N, "attributeNameCheck") && Mo(N.attributeNameCheck) && (ee.attributeNameCheck = N.attributeNameCheck), Je(N, "allowCustomizedBuiltInElements") && typeof N.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = N.allowCustomizedBuiltInElements), qe && (Ge = !1), It && (ct = !0), He && (W = ye({}, Tc), me = Uo(null), He.html === !0 && (ye(W, _c), ye(me, Sc)), He.svg === !0 && (ye(W, sa), ye(me, la), ye(me, tr)), He.svgFilters === !0 && (ye(W, ra), ye(me, la), ye(me, tr)), He.mathMl === !0 && (ye(W, aa), ye(me, Ac), ye(me, tr))), ze.tagCheck = null, ze.attributeCheck = null, Je(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? ze.tagCheck = v.ADD_TAGS : Pt(v.ADD_TAGS) && (W === U && (W = Ct(W)), ye(W, v.ADD_TAGS, Oe))), Je(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? ze.attributeCheck = v.ADD_ATTR : Pt(v.ADD_ATTR) && (me === Ie && (me = Ct(me)), ye(me, v.ADD_ATTR, Oe))), Je(v, "ADD_URI_SAFE_ATTR") && Pt(v.ADD_URI_SAFE_ATTR) && ye(zn, v.ADD_URI_SAFE_ATTR, Oe), Je(v, "FORBID_CONTENTS") && Pt(v.FORBID_CONTENTS) && (ft === mo && (ft = Ct(ft)), ye(ft, v.FORBID_CONTENTS, Oe)), Je(v, "ADD_FORBID_CONTENTS") && Pt(v.ADD_FORBID_CONTENTS) && (ft === mo && (ft = Ct(ft)), ye(ft, v.ADD_FORBID_CONTENTS, Oe)), xe && (W["#text"] = !0), st && ye(W, ["html", "head", "body"]), W.table && (ye(W, ["tbody"]), delete X.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw bs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw bs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O = v.TRUSTED_TYPES_POLICY, R = O.createHTML("");
    } else
      O === void 0 && (O = M_(m, s)), O !== null && typeof R == "string" && (R = O.createHTML(""));
    (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && W === U && (W = Ct(W)), ce.uponSanitizeAttribute.length > 0 && me === Ie && (me = Ct(me)), zt && zt(v), ln = v;
  }, Po = ye({}, [...sa, ...ra, ...__]), go = ye({}, [...aa, ...T_]), as = function(v) {
    let N = k(v);
    (!N || !N.tagName) && (N = {
      namespaceURI: _n,
      tagName: "template"
    });
    const Q = ws(v.tagName), we = ws(N.tagName);
    return ho[v.namespaceURI] ? v.namespaceURI === Ot ? N.namespaceURI === _t ? Q === "svg" : N.namespaceURI === Bn ? Q === "svg" && (we === "annotation-xml" || rn[we]) : !!Po[Q] : v.namespaceURI === Bn ? N.namespaceURI === _t ? Q === "math" : N.namespaceURI === Ot ? Q === "math" && Fn[we] : !!go[Q] : v.namespaceURI === _t ? N.namespaceURI === Ot && !Fn[we] || N.namespaceURI === Bn && !rn[we] ? !1 : !go[Q] && (to[Q] || !Po[Q]) : !!(an === "application/xhtml+xml" && ho[v.namespaceURI]) : !1;
  }, Tt = function(v) {
    Vo(t.removed, {
      element: v
    });
    try {
      k(v).removeChild(v);
    } catch {
      h(v);
    }
  }, x = function(v, N) {
    try {
      Vo(t.removed, {
        attribute: N.getAttributeNode(v),
        from: N
      });
    } catch {
      Vo(t.removed, {
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
    if (Xe)
      v = "<remove></remove>" + v;
    else {
      const Me = bc(v, /^[\r\n\t ]+/);
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
    return v && Q && be.insertBefore(n.createTextNode(Q), be.childNodes[0] || null), _n === _t ? re.call(N, st ? "html" : "body")[0] : st ? N.documentElement : be;
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
      jo([$, V, B], (be) => {
        we = Ho(we, be, " ");
      }), Q.data = we, Q = N.nextNode();
    }
  }, Qe = function(v) {
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
      return L(v) === Sn.documentFragment;
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
  function St(ae, v, N) {
    jo(ae, (Q) => {
      Q.call(t, v, N, ln);
    });
  }
  const Gt = function(v) {
    let N = null;
    if (St(ce.beforeSanitizeElements, v, null), Qe(v))
      return Tt(v), !0;
    const Q = Oe(v.nodeName);
    if (St(ce.uponSanitizeElement, v, {
      tagName: Q,
      allowedTags: W
    }), yt && v.hasChildNodes() && !$t(v.firstElementChild) && gt(/<[/\w!]/g, v.innerHTML) && gt(/<[/\w!]/g, v.textContent) || yt && v.namespaceURI === _t && Q === "style" && $t(v.firstElementChild) || v.nodeType === Sn.progressingInstruction || yt && v.nodeType === Sn.comment && gt(/<[/\w]/g, v.data))
      return Tt(v), !0;
    if (X[Q] || !(ze.tagCheck instanceof Function && ze.tagCheck(Q)) && !W[Q]) {
      if (!X[Q] && Hs(Q) && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, Q) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(Q)))
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
    return (L ? L(v) : v.nodeType) === Sn.element && !as(v) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && gt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (Tt(v), !0) : (qe && v.nodeType === Sn.text && (N = v.textContent, jo([$, V, B], (be) => {
      N = Ho(N, be, " ");
    }), v.textContent !== N && (Vo(t.removed, {
      element: v.cloneNode()
    }), v.textContent = N)), St(ce.afterSanitizeElements, v, null), !1);
  }, No = function(v, N, Q) {
    if (Ve[N] || q && (N === "id" || N === "name") && (Q in n || Q in Ro))
      return !1;
    const we = me[N] || ze.attributeCheck instanceof Function && ze.attributeCheck(N, v);
    if (!(Ge && !Ve[N] && gt(ue, N))) {
      if (!(ut && gt(fe, N))) {
        if (!we || Ve[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Hs(v) && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, v) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(v)) && (ee.attributeNameCheck instanceof RegExp && gt(ee.attributeNameCheck, N) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(N, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, Q) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(Q)))
          ) return !1;
        } else if (!zn[N]) {
          if (!gt(ve, Ho(Q, De, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && v !== "script" && yc(Q, "data:") === 0 && Dn[v])) {
              if (!(Lt && !gt(Te, Ho(Q, De, "")))) {
                if (Q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, jr = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Hs = function(v) {
    return !jr[ws(v)] && gt(Ue, v);
  }, Ws = function(v) {
    St(ce.beforeSanitizeAttributes, v, null);
    const N = v.attributes;
    if (!N || Qe(v))
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
      const be = N[we], Me = be.name, Mt = be.namespaceURI, qt = be.value, Kt = Oe(Me), ls = qt;
      let rt = Me === "value" ? ls : h_(ls);
      if (Q.attrName = Kt, Q.attrValue = rt, Q.keepAttr = !0, Q.forceKeepAttr = void 0, St(ce.uponSanitizeAttribute, v, Q), rt = Q.attrValue, ke && (Kt === "id" || Kt === "name") && yc(rt, dt) !== 0 && (x(Me, v), rt = dt + rt), yt && gt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, rt)) {
        x(Me, v);
        continue;
      }
      if (Kt === "attributename" && bc(rt, "href")) {
        x(Me, v);
        continue;
      }
      if (Q.forceKeepAttr)
        continue;
      if (!Q.keepAttr) {
        x(Me, v);
        continue;
      }
      if (!bt && gt(/\/>/i, rt)) {
        x(Me, v);
        continue;
      }
      qe && jo([$, V, B], (Us) => {
        rt = Ho(rt, Us, " ");
      });
      const Do = Oe(v.nodeName);
      if (!No(Do, Kt, rt)) {
        x(Me, v);
        continue;
      }
      if (O && typeof m == "object" && typeof m.getAttributeType == "function" && !Mt)
        switch (m.getAttributeType(Do, Kt)) {
          case "TrustedHTML": {
            rt = O.createHTML(rt);
            break;
          }
          case "TrustedScriptURL": {
            rt = O.createScriptURL(rt);
            break;
          }
        }
      if (rt !== ls)
        try {
          Mt ? v.setAttributeNS(Mt, Me, rt) : v.setAttribute(Me, rt), Qe(v) ? Tt(v) : vc(t.removed);
        } catch {
          x(Me, v);
        }
    }
    St(ce.afterSanitizeAttributes, v, null);
  }, Rt = function(v) {
    let N = null;
    const Q = ge(v);
    for (St(ce.beforeSanitizeShadowDOM, v, null); N = Q.nextNode(); )
      if (St(ce.uponSanitizeShadowNode, N, null), Gt(N), Ws(N), Ft(N.content) && Rt(N.content), (L ? L(N) : N.nodeType) === Sn.element) {
        const be = M ? M(N) : N.shadowRoot;
        Ft(be) && (no(be), Rt(be));
      }
    St(ce.afterSanitizeShadowDOM, v, null);
  }, no = function(v) {
    const N = L ? L(v) : v.nodeType;
    if (N === Sn.element) {
      const be = M ? M(v) : v.shadowRoot;
      Ft(be) && (no(be), Rt(be));
    }
    const Q = C ? C(v) : v.childNodes;
    if (!Q)
      return;
    const we = [];
    jo(Q, (be) => {
      Vo(we, be);
    });
    for (const be of we)
      no(be);
    if (N === Sn.element) {
      const be = I ? I(v) : null;
      if (typeof be == "string" && Oe(be) === "template") {
        const Me = v.content;
        Ft(Me) && no(Me);
      }
    }
  };
  return t.sanitize = function(ae) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, we = null, be = null;
    if (Tn = !ae, Tn && (ae = "<!-->"), typeof ae != "string" && !$t(ae) && (ae = w_(ae), typeof ae != "string"))
      throw bs("dirty is not a string, aborting");
    if (!t.isSupported)
      return ae;
    if (wt || cn(v), t.removed = [], typeof ae == "string" && (kt = !1), kt) {
      const qt = I ? I(ae) : ae.nodeName;
      if (typeof qt == "string") {
        const Kt = Oe(qt);
        if (!W[Kt] || X[Kt])
          throw bs("root node is forbidden and cannot be sanitized in-place");
      }
      if (Qe(ae))
        throw bs("root node is clobbered and cannot be sanitized in-place");
      no(ae);
    } else if ($t(ae))
      N = Z("<!---->"), Q = N.ownerDocument.importNode(ae, !0), Q.nodeType === Sn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q), no(Q);
    else {
      if (!ct && !qe && !st && // eslint-disable-next-line unicorn/prefer-includes
      ae.indexOf("<") === -1)
        return O && Bt ? O.createHTML(ae) : ae;
      if (N = Z(ae), !N)
        return ct ? null : Bt ? R : "";
    }
    N && Xe && Tt(N.firstChild);
    const Me = ge(kt ? ae : N);
    for (; we = Me.nextNode(); )
      Gt(we), Ws(we), Ft(we.content) && Rt(we.content);
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
    let Mt = st ? N.outerHTML : N.innerHTML;
    return st && W["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && gt(O_, N.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Mt), qe && jo([$, V, B], (qt) => {
      Mt = Ho(Mt, qt, " ");
    }), O && Bt ? O.createHTML(Mt) : Mt;
  }, t.setConfig = function() {
    let ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    cn(ae), wt = !0;
  }, t.clearConfig = function() {
    ln = null, wt = !1;
  }, t.isValidAttribute = function(ae, v, N) {
    ln || cn({});
    const Q = Oe(ae), we = Oe(v);
    return No(Q, we, N);
  }, t.addHook = function(ae, v) {
    typeof v == "function" && Vo(ce[ae], v);
  }, t.removeHook = function(ae, v) {
    if (v !== void 0) {
      const N = p_(ce[ae], v);
      return N === -1 ? void 0 : m_(ce[ae], N, 1)[0];
    }
    return vc(ce[ae]);
  }, t.removeHooks = function(ae) {
    ce[ae] = [];
  }, t.removeAllHooks = function() {
    ce = Ec();
  }, t;
}
var P_ = Md();
const N_ = {
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
function D_(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : P_.sanitize(e, N_) : "";
}
const z_ = 24, B_ = 120, F_ = 420, j_ = 1200, V_ = 24e3, H_ = 1800, W_ = 5200, Ca = (e) => {
  const t = e.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!t || t.index === void 0)
    return { reasoning: "", answer: e };
  const n = e.slice(0, t.index).trim(), o = t[0], s = e.slice(t.index + o.length).trim();
  return {
    reasoning: (t[1] ?? "").trim(),
    answer: [n, s].filter(Boolean).join(`

`)
  };
}, U_ = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return `code-${e.length}-${t.toString(16)}`;
}, Pd = (e, t) => {
  if (e.size <= t) return;
  const n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}, G_ = (e, t, n) => e.includes("<pre>") ? e.replace(
  /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
  (o, s, r) => {
    const a = document.createElement("textarea");
    a.innerHTML = r;
    const i = a.value, c = U_(i);
    t.codeCache.set(c, i), Pd(t.codeCache, B_);
    const u = s ? ` class="${s}"` : "", d = n("common.copy");
    return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${c}" title="${d}">${d}</button><pre><code${u}>${r}</code></pre></div>`;
  }
) : e, xc = (e, t, n, o = {}) => {
  const s = o.cache !== !1, r = `${n("common.copy")}\0${e}`, a = s ? t.htmlCache.get(r) : void 0;
  if (a) return a;
  const i = D_($e.parse(e, { async: !1 })), c = o.enhanceCodeBlocks === !1 ? i : G_(i, t, n);
  return s && (t.htmlCache.set(r, c), Pd(t.htmlCache, z_)), c;
}, q_ = (e, t, n, o, s) => {
  if (!t) return !0;
  const r = e.content.length >= V_, a = r ? j_ : F_, i = r ? W_ : H_;
  return s - t.updatedAt >= a || e.content.length - t.source.length >= i || !t.reasoning && !!n || !t.answer && !!o;
}, K_ = (e, t, n) => {
  const { reasoning: o, answer: s } = Ca(e.content);
  if (!e.streaming)
    return n.streamingSnapshots.delete(e.id), t === "reasoning" ? o : s;
  const r = Date.now(), a = n.streamingSnapshots.get(e.id);
  return q_(e, a, o, s, r) ? (n.streamingSnapshots.set(e.id, {
    source: e.content,
    reasoning: o,
    answer: s,
    updatedAt: r
  }), t === "reasoning" ? o : s) : t === "reasoning" ? a?.reasoning ?? o : a?.answer ?? s;
}, Z_ = (e, t, n, o) => {
  const s = K_(e, t, n);
  if (!e.streaming) return xc(s, n, o);
  const r = n.streamingSnapshots.get(e.id), a = t === "reasoning" ? "reasoningHtml" : "answerHtml", i = t === "reasoning" ? "reasoning" : "answer";
  if (r?.[i] === s && r[a])
    return r[a];
  const c = xc(s, n, o, {
    cache: !1,
    enhanceCodeBlocks: !1
  });
  return r?.[i] === s && (r[a] = c), c;
}, Y_ = async (e, t, n) => {
  const s = e.target?.closest(".code-copy-btn"), r = s?.dataset.codeId ? t.codeCache.get(s.dataset.codeId) : void 0;
  if (r)
    try {
      await navigator.clipboard.writeText(r), Ee.msg(n("localAi.codeCopied"));
    } catch (a) {
      Ee.msg(`${n("common.copy")}: ${a}`, "error");
    }
}, X_ = (e, t) => {
  e.allowThinking && (t.includes("<think>") && !e.reasoningStartedAt && (e.reasoningStartedAt = Date.now()), t.includes("</think>") && !e.reasoningEndedAt && (e.reasoningEndedAt = Date.now()));
}, Q_ = () => {
  const { t: e } = Ps(), t = {
    htmlCache: /* @__PURE__ */ new Map(),
    codeCache: /* @__PURE__ */ new Map(),
    streamingSnapshots: /* @__PURE__ */ new Map()
  };
  return {
    renderMessageMarkdown: (n, o) => Z_(n, o, t, e),
    handleMarkdownClick: (n) => Y_(n, t, e),
    messageReasoning: (n) => Ca(n).reasoning,
    messageAnswer: (n) => Ca(n).answer,
    recordReasoningProgress: X_,
    discardStreamingMarkdown: (n) => {
      t.streamingSnapshots.delete(n);
    },
    clearMarkdownState: () => {
      t.htmlCache.clear(), t.codeCache.clear(), t.streamingSnapshots.clear();
    }
  };
}, J_ = {
  key: 0,
  class: "attachment-preview-dialog__body"
}, e2 = { class: "attachment-preview-dialog__viewport" }, t2 = ["src", "alt"], n2 = { class: "attachment-preview-dialog__meta" }, o2 = { class: "attachment-preview-dialog__file" }, s2 = ["title"], r2 = /* @__PURE__ */ oe({
  __name: "AttachmentPreviewDialog",
  props: {
    modelValue: { type: Boolean },
    attachment: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { t: s } = Ps(), r = A({
      get: () => n.modelValue,
      set: (a) => o("update:modelValue", a)
    });
    return (a, i) => (S(), se(l(fd), {
      modelValue: l(r),
      "onUpdate:modelValue": i[0] || (i[0] = (c) => Qt(r) ? r.value = c : null),
      title: l(s)("localAi.attachmentPreview"),
      width: "min(1000px, calc(100vw - 40px))",
      "custom-class": "local-ai-attachment-preview-dialog",
      "close-on-click-modal": !0
    }, {
      default: J(() => [
        a.attachment?.dataUrl ? (S(), D("div", J_, [
          f("div", e2, [
            f("img", {
              src: a.attachment.dataUrl,
              alt: a.attachment.name
            }, null, 8, t2)
          ]),
          f("div", n2, [
            f("span", o2, [
              _(l(If), {
                theme: "outline",
                size: "16"
              }),
              f("strong", {
                title: a.attachment.name
              }, E(a.attachment.name), 9, s2)
            ]),
            f(
              "span",
              null,
              E(l(gd)(a.attachment.size)),
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
}), a2 = /* @__PURE__ */ Io(r2, [["__scopeId", "data-v-8ead8db0"]]), l2 = /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i, i2 = /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i, c2 = /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i, u2 = /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i, Nd = (e) => /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(e), Lc = /^\s*(\d+)(?:[.)]\s+|、\s*)/, Ic = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
}, d2 = (e) => e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1").replace(/`([^`\n]+)`/g, "$1").replace(/\*\*([^*\n]+)\*\*/g, "$1").replace(/__([^_\n]+)__/g, "$1").replace(/~~([^~\n]+)~~/g, "$1").replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, "$1$2").replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, "$1$2"), f2 = (e) => e.replace(
  /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
  "$1"
).replace(
  /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
  "$1使用 $3"
).replace(
  /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
  "$1use $3"
), p2 = (e) => {
  const t = e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s{0,3}>\s?/, ""), n = t.match(Lc), o = n ? `${n[1]}、` : "", s = t.replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, "").replace(/^\s*[-+*]\s+/, "").replace(Lc, "");
  if (Nd(s))
    return "";
  const r = s.trim();
  return r.startsWith("|") && r.endsWith("|") ? r.slice(1, -1).split("|").map((a) => a.trim()).filter(Boolean).join("；") : `${o}${f2(
    d2(s)
  ).trimEnd()}`;
}, m2 = (e, t) => t ? !1 : !e || i2.test(e), h2 = (e, t) => t && c2.test(e), g2 = (e, t) => (t ? e : e.replace(l2, "")).trim(), v2 = (e, t) => !!(e || t), Ea = (e) => /[\u3400-\u9fff]/.test(e), b2 = (e, t = !1) => {
  const n = Ea(e), o = n && t ? `
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
}, Oc = (e, t) => !Ea(e) || Ea(t), y2 = (e) => {
  const n = e.replace(/^[\s\S]*?<\/think>\s*/i, "").replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/^\s*```(?:markdown|md|text)?\s*$/gim, "").replace(/^\s*```\s*$/gim, "").replace(/\r\n?/g, `
`).trim().split(`
`), o = [];
  for (const s of n) {
    if (Nd(s)) continue;
    const r = p2(s).trim(), a = o.length > 0;
    if (m2(r, a)) continue;
    if (h2(r, a)) break;
    if (u2.test(r)) continue;
    const i = g2(r, a);
    v2(i, o.at(-1)) && o.push(i);
  }
  return o.join(`
`).replace(/\n{3,}/g, `

`).trim();
}, ks = "snippets.localAi.pendingPrompt", kl = "snippets.localAi.pendingPromptMode", Dd = "new-chat", _r = "snippets.localAi.pendingNewChatAt", w2 = 1e4, k2 = (e, t) => {
  e.setItem(ks, t), e.setItem(
    kl,
    Dd
  );
}, ia = (e) => e.getItem(kl) === Dd, _2 = (e, t = Date.now()) => {
  e.setItem(_r, String(t));
}, T2 = (e, t = Date.now()) => {
  const n = e.getItem(
    _r
  );
  if (n === null) return !1;
  const o = Number(n), s = t - o;
  return !Number.isFinite(o) || s < 0 || s > w2 ? (e.removeItem(_r), !1) : !0;
}, S2 = (e) => {
  e.removeItem(_r);
}, A2 = { class: "sidebar-header" }, C2 = { class: "sidebar-brand" }, E2 = { class: "sidebar-title-block" }, x2 = ["title", "aria-pressed"], L2 = { class: "sidebar-nav" }, I2 = ["disabled"], O2 = { class: "sidebar-search" }, $2 = ["placeholder"], R2 = {
  key: 0,
  class: "sidebar-search-count"
}, M2 = { class: "sidebar-section recent-section" }, P2 = { class: "section-title-row" }, N2 = { class: "section-title" }, D2 = { class: "section-title-actions" }, z2 = ["title", "disabled"], B2 = ["title", "disabled"], F2 = {
  key: 0,
  class: "chat-list"
}, j2 = ["tabindex", "aria-disabled", "onClick", "onKeydown"], V2 = { class: "chat-item-copy" }, H2 = { class: "chat-item-title" }, W2 = { class: "chat-item-title-track" }, U2 = { class: "chat-item-title-text" }, G2 = {
  class: "chat-item-title-text chat-item-title-clone",
  "aria-hidden": "true"
}, q2 = { class: "chat-item-time" }, K2 = ["title", "disabled", "onClick"], Z2 = {
  key: 1,
  class: "sidebar-empty"
}, Y2 = { class: "sidebar-service" }, X2 = { class: "sidebar-service-card" }, Q2 = { class: "sidebar-service-icon" }, J2 = { class: "sidebar-service-copy" }, e4 = { class: "chat-panel" }, t4 = { class: "chat-panel-header" }, n4 = { class: "chat-panel-heading" }, o4 = ["title"], s4 = { class: "chat-context-mark" }, r4 = { class: "chat-context-copy" }, a4 = {
  key: 0,
  class: "empty-state"
}, l4 = { class: "empty-hero" }, i4 = { class: "empty-hero-mark" }, c4 = { class: "empty-eyebrow" }, u4 = { class: "quick-prompt-section" }, d4 = { class: "quick-prompt-heading" }, f4 = { class: "quick-prompt-grid" }, p4 = ["onClick"], m4 = { class: "quick-prompt-icon" }, h4 = { class: "quick-prompt-copy" }, g4 = {
  key: 0,
  class: "date-divider"
}, v4 = { class: "message-avatar" }, b4 = { key: 1 }, y4 = { class: "message-body" }, w4 = { class: "user-bubble" }, k4 = {
  key: 0,
  class: "user-message-text"
}, _4 = {
  key: 1,
  class: "message-attachment-list"
}, T4 = ["title", "aria-label", "onClick"], S4 = ["src", "alt"], A4 = {
  key: 1,
  class: "attachment-file-icon"
}, C4 = { key: 2 }, E4 = {
  key: 0,
  class: "message-actions"
}, x4 = ["title", "onClick"], L4 = ["title", "onClick"], I4 = ["title", "onClick"], O4 = { class: "assistant-head" }, $4 = { key: 0 }, R4 = {
  key: 0,
  class: "assistant-content-stack"
}, M4 = ["open"], P4 = { class: "reasoning-summary-title" }, N4 = { key: 0 }, D4 = ["innerHTML"], z4 = ["innerHTML"], B4 = {
  key: 0,
  class: "message-stats"
}, F4 = { class: "message-stats__context" }, j4 = { class: "message-stats__output" }, V4 = { class: "message-stats__elapsed" }, H4 = { class: "message-stats__speed" }, W4 = {
  key: 0,
  class: "message-stats-time"
}, U4 = {
  key: 1,
  class: "message-warning"
}, G4 = {
  key: 2,
  class: "message-actions"
}, q4 = ["title", "aria-label"], K4 = ["disabled", "title", "onClick"], Z4 = ["disabled", "title", "onClick"], Y4 = ["title", "onClick"], X4 = ["title", "onClick"], Q4 = ["title", "onClick"], J4 = ["title", "onClick"], eT = ["title", "onClick"], tT = ["title"], nT = { class: "composer-dock" }, oT = {
  key: 0,
  class: "attachment-preview-list"
}, sT = ["title", "aria-label", "onClick"], rT = ["src", "alt"], aT = {
  key: 1,
  class: "attachment-file-icon"
}, lT = { class: "attachment-meta" }, iT = ["title", "onClick"], cT = ["placeholder", "readonly", "aria-busy"], uT = { class: "input-toolbar" }, dT = { class: "input-toolbar-left" }, fT = ["title", "disabled"], pT = ["disabled", "title"], mT = ["title", "aria-pressed"], hT = { class: "input-toolbar-right" }, gT = { class: "model-select-shell" }, vT = { class: "chat-model-option" }, bT = { class: "chat-model-option-name" }, yT = { class: "input-hint" }, wT = ["disabled", "title", "aria-label"], kT = ["disabled", "title", "aria-label"], _T = 96, TT = 4096, ST = 90, AT = 1e3, CT = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Ps(), {
      attachments: n,
      attachmentPicking: o,
      attachmentStatusText: s,
      handleAttachmentDrop: r,
      handleComposerPaste: a,
      pickAttachmentFiles: i,
      removeAttachment: c
    } = kk(), {
      clearMarkdownState: u,
      discardStreamingMarkdown: d,
      handleMarkdownClick: m,
      messageAnswer: g,
      messageReasoning: w,
      recordReasoningProgress: h,
      renderMessageMarkdown: b
    } = Q_(), C = P(""), k = P([]), M = P(""), j = P(!1), L = P(""), I = P(null), O = P(!1), R = P(!1), K = P(!1), F = P(!1), ne = P(!1), H = P(!1), re = P(!1), de = P(!1), ce = P(!0), $ = P(!1), V = P(null), B = io(null);
    let ue = !1, fe = null, Te = !1, De = !1, Ue = null;
    const ve = P(null), W = P(null), U = P(""), me = P(null), Ie = P(null), ee = P(null), X = A({
      get: () => !!ee.value,
      set: (p) => {
        p || (ee.value = null);
      }
    }), Ve = P(Date.now());
    let ze = null, ut = null, Ge = null, Lt = !1, bt = null, qe = null, yt = !1, st = 0, wt = null;
    const Xe = /* @__PURE__ */ new WeakMap(), ct = (p) => {
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
        G && y.observe(G), Xe.set(p, y);
      },
      updated(p) {
        It(p);
      },
      beforeUnmount(p) {
        Xe.get(p)?.disconnect(), Xe.delete(p);
      }
    }, q = [
      {
        title: "localAi.quickPromptSummary",
        description: "localAi.quickPromptSummaryDesc",
        icon: Ef
      },
      {
        title: "localAi.quickPromptTranslate",
        description: "localAi.quickPromptTranslateDesc",
        icon: Pf
      },
      {
        title: "localAi.quickPromptCode",
        description: "localAi.quickPromptCodeDesc",
        icon: Af
      },
      {
        title: "localAi.quickPromptRegex",
        description: "localAi.quickPromptRegexDesc",
        icon: Wl
      }
    ], ke = A(
      () => (!!L.value.trim() || n.value.length > 0) && !R.value && !O.value
    ), dt = A(
      () => !!L.value.trim() && !R.value && !O.value && !V.value
    ), xe = A(() => R.value || O.value), kt = A(() => me.value?.healthy ? t("localAi.serviceHealthy") : me.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), He = A(
      () => k.value.find((p) => p.id === M.value) ?? null
    ), ft = A(
      () => He.value?.title || t("localAi.newChatTitle")
    ), mo = A(() => lr(He.value)), Dn = A(() => fk(He.value)), kn = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", zn = (p) => {
      p.type !== "image" || !p.dataUrl || (ee.value = p);
    }, Ut = () => {
      ee.value = null;
    }, Bn = (p) => {
      ee.value?.id === p && Ut(), c(p);
    }, Ot = A(
      () => kn(U.value) || kn(me.value?.modelPath) || kn(ve.value?.modelPath) || t("localAi.localModel")
    ), _t = A(() => W.value?.mainModels ?? []), _n = A(() => !!ve.value?.mmprojPath), Tn = A(
      () => ve.value?.ctxSize ?? me.value?.ctxSize ?? 4096
    ), ho = A(() => {
      const p = Tn.value, y = ve.value?.maxTokens ?? 0;
      return y > 0 ? Math.min(
        Math.max(y, 512),
        Math.max(512, p - 512)
      ) : Math.min(
        Math.max(TT, Math.floor(p * 0.5)),
        Math.max(512, p - 512)
      );
    }), eo = A(
      () => Math.max(512, Tn.value - ho.value)
    ), rn = A(() => {
      const p = Ot.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(p);
    }), Fn = A(() => {
      const p = C.value.trim().toLowerCase();
      return k.value.filter(
        (y) => !p || y.title.toLowerCase().includes(p) || y.messages.some(
          (G) => !os(G) && G.content.toLowerCase().includes(p)
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
      y && (be(), Ue = G), L.value = G, De = !1, localStorage.removeItem(kl), Ze(() => {
        to(), I.value?.focus();
      });
    }, $o = async () => {
      try {
        const p = await tt("take_pending_local_ai_prompt"), y = typeof p == "string" ? p.trim() : "";
        return y && k2(localStorage, y), y;
      } catch (p) {
        return Et.warn("[LocalAI] take pending prompt failed", p), "";
      }
    }, Oe = async () => {
      try {
        const p = await tt("take_pending_local_ai_new_chat");
        return p && _2(localStorage), p;
      } catch (p) {
        return Et.warn("[LocalAI] take pending new chat failed", p), !1;
      }
    }, ln = (p) => {
      const y = p.detail;
      $o().then((G) => {
        const te = typeof y == "string" ? y.trim() : "", T = G || te;
        !T || !(G || ia(localStorage)) && T === Ue || jn(T, !0);
      });
    }, Ro = () => {
      Oe().then((p) => {
        p && an();
      });
    }, Mo = () => {
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
      p || Mo();
    }), pe(
      L,
      (p) => {
        if (!ue) return;
        p.trim() ? localStorage.setItem(ks, p) : localStorage.removeItem(ks);
      },
      { flush: "sync" }
    );
    const Po = (p) => {
      L.value = t(p), cn();
    }, go = async (p, y) => {
      const G = b2(
        p,
        y
      ), te = await kw({
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
      return y2(te.content);
    }, as = async () => {
      const p = L.value.trim();
      if (!(!p || !dt.value)) {
        O.value = !0;
        try {
          let y = await go(p, !1);
          if (Oc(p, y) || (y = await go(p, !0)), !y) throw new Error(t("localAi.enhancePromptEmpty"));
          if (!Oc(p, y))
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
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= _T : !0;
    }, ge = () => {
      const p = Z();
      p && (ce.value = !0), $.value = !p && !ce.value;
    }, Be = () => {
      Ge === null || Lt || (window.cancelAnimationFrame(Ge), Ge = null);
    }, Qe = () => {
      ce.value = !1, $.value = !Z(), Be();
    }, Ft = () => {
      const p = Ie.value;
      p && (yt && p.scrollTop < st - 1 && Qe(), st = p.scrollTop), ge();
    }, $t = (p) => {
      p.deltaY >= 0 || (Qe(), window.requestAnimationFrame(ge));
    }, St = (p) => {
      const y = Ie.value;
      if (!y) return;
      const G = y.getBoundingClientRect(), te = Math.max(12, y.offsetWidth - y.clientWidth);
      p.clientX < G.right - te || (yt = !0, st = y.scrollTop, Be());
    }, Gt = () => {
      yt = !1, ge();
    }, No = (p) => {
      wt = p.touches[0]?.clientY ?? null;
    }, jr = (p) => {
      const y = p.touches[0]?.clientY;
      y === void 0 || wt === null || (y > wt && Qe(), wt = y);
    }, Hs = () => {
      wt = null, ge();
    }, Ws = () => {
      if (!bt) return;
      const p = Ie.value?.querySelector(".assistant-card--streaming") ?? null;
      p !== qe && (qe && bt.unobserve(qe), qe = p, qe && bt.observe(qe));
    }, Rt = async (p = {}) => {
      await Ze(), Ws(), !(!Ie.value || !p.force && !ce.value) && (Lt = Lt || p.force === !0, Ge === null && (Ge = window.requestAnimationFrame(() => {
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
        ve.value = await ld(), U.value = ve.value.modelPath ?? "", W.value = await id(ve.value), rn.value || (re.value = !1);
      } catch (p) {
        Et.warn("[LocalAI] refresh chat config failed", p);
      }
    }, v = async () => {
      if (!K.value) {
        K.value = !0;
        try {
          me.value = await cd();
        } catch (p) {
          Et.warn("[LocalAI] refresh chat status failed", p);
        } finally {
          K.value = !1;
        }
      }
    }, N = async () => {
      try {
        const p = await Tw();
        if (k.value = p.map((y) => {
          const G = y.messages?.length ? y.messages : y.turns.map((T) => ({
            id: T.id,
            role: T.role,
            content: T.content,
            createdAt: T.createdAt
          })), te = dk(
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
      const y = lr(p).map((G) => ({
        id: G.id,
        role: G.role,
        content: G.content,
        createdAt: G.createdAt
      }));
      await Aw({
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
      S2(localStorage), M.value !== p && (L.value = "", n.value = [], Ut()), M.value = p;
      const y = He.value;
      y && !y.currentNodeId && (y.currentNodeId = js(y.messages, Fs(y.messages)?.id) ?? null), ce.value = !0, Rt({ force: !0 });
    }, qt = async (p) => {
      if (xe.value) return;
      const y = M.value === p;
      k.value = k.value.filter((G) => G.id !== p);
      try {
        await Cw(p);
      } catch (G) {
        Et.warn("[LocalAI] delete history failed", G), await N(), Ee.msg(`${t("common.operationFailed")}: ${String(G)}`, "error");
        return;
      }
      y && (M.value = k.value[0]?.id ?? "", L.value = "", n.value = [], Ut());
    }, Kt = async () => {
      if (!(xe.value || F.value)) {
        F.value = !0;
        try {
          await Ew(), k.value = [], M.value = "", C.value = "", L.value = "", n.value = [], ne.value = !1, Ut(), u(), Ee.msg(t("localAi.clearAllChatsSuccess"));
        } catch (p) {
          Et.warn("[LocalAI] clear histories failed", p), Ee.msg(`${t("common.operationFailed")}: ${String(p)}`, "error");
        } finally {
          F.value = !1;
        }
      }
    }, ls = async () => {
      if (!ve.value || !U.value) return;
      const p = {
        ...ve.value,
        modelPath: U.value
      };
      try {
        ve.value = await rr(p), me.value?.running && (me.value = await ud()), Ee.msg(t("localAi.modelChanged"));
      } catch (y) {
        await ae(), Ee.msg(`${t("localAi.configSaveFailed")}: ${y}`, "error");
      }
    }, rt = (p) => !!g(p.content), Do = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !rt(p)), Us = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const y = p.reasoningEndedAt ?? (p.streaming ? Ve.value : Date.now());
      return Math.max(0, (y - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, zd = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Us(p)
    }), Vn = (p) => new Date(
      p.createdAt || He.value?.updatedAt || Date.now()
    ), _l = (p) => Vn(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Bd = (p, y) => Vn(p).toDateString() === Vn(y).toDateString(), Tl = (p) => Vn(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Fd = (p) => {
      const y = Dn.value[p]?.message;
      if (!y) return !1;
      if (p === 0) return !Tl(y);
      const G = Dn.value[p - 1]?.message;
      return G ? Bd(G, y) ? Vn(y).getTime() - Vn(G).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, jd = (p) => {
      const y = Vn(p), G = y.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), te = y.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return Tl(p) ? te : `${G} ${te}`;
    }, Vd = (p) => p.streaming ? Do(p) ? t("localAi.thinking") : t("localAi.generating") : _l(p), Hd = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Wd = (p = He.value) => {
      const y = lk(), G = ns([y]), te = Math.max(
        512,
        eo.value - G
      );
      return [
        y,
        ...uk(
          lr(p).filter((T) => !T.streaming && T.role !== "system").map((T) => ({
            role: T.role,
            content: T.role === "user" ? rk(T) : T.content
          })),
          te,
          t("localAi.previousAnswerTail")
        )
      ];
    }, Ud = () => ok(ve.value?.maxTokens ?? 0), Sl = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? ve.value?.ctxSize ?? me.value?.ctxSize ?? 4096
    ), Al = (p) => {
      const y = Ve.value, G = p.stats?.promptTokens ?? p.promptTokens ?? 0, te = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? ta(p.content) : bd(p.content)), T = Sl(p), _e = Math.min(
        p.stats?.totalTokens ?? G + te,
        T
      ), le = Math.max(
        0,
        (p.stats?.generationTimeMs ?? p.elapsedMs ?? y - Vn(p).getTime()) / 1e3
      ), Se = p.stats?.tokensPerSecond ?? (le > 0 ? te / le : 0);
      return {
        context: _e,
        contextMax: T,
        contextPercent: Math.min(100, Math.round(_e / T * 100)),
        output: te,
        outputMax: (ve.value?.maxTokens ?? 0) > 0 ? String(ve.value?.maxTokens) : "∞",
        seconds: le.toFixed(1),
        speed: Se.toFixed(1)
      };
    }, Gd = A(() => (Ve.value, new Map(
      Dn.value.map(({ message: p }) => [
        p.id,
        Al(p)
      ])
    ))), oo = (p) => Gd.value.get(p.id) ?? Al(p), Cl = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : p.stats?.finishReason === "length" ? (p.stats?.totalTokens ?? oo(p).context) >= Sl(p) - 8 ? t("localAi.contextLimitReached") : t("localAi.outputLimitReached") : "", El = (p) => {
      const y = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(y) ? t("localAi.contextExceeded") : y;
    }, qd = (p) => {
      const y = p.replace(/\s+/g, " ").trim();
      if (y.length < 900) return !1;
      const te = y.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Se) => Se.toLowerCase()) ?? [];
      if (te.length < 140) return !1;
      const T = te.slice(-120), _e = /* @__PURE__ */ new Map();
      for (const Se of T) _e.set(Se, (_e.get(Se) ?? 0) + 1);
      if (_e.size / T.length < 0.12 && [..._e.values()].some((Se) => Se >= 56))
        return !0;
      for (let Se = 1; Se <= 4; Se += 1) {
        const Ce = te.slice(-Se).join("\0");
        let Hn = 1;
        for (let jt = te.length - Se * 2; jt >= 0 && te.slice(jt, jt + Se).join("\0") === Ce; jt -= Se)
          Hn += 1;
        if (Hn >= Math.max(24, Math.ceil(72 / Se))) return !0;
      }
      return !1;
    }, xl = () => {
      ut || (Ve.value = Date.now(), ut = setInterval(() => {
        Ve.value = Date.now();
      }, AT));
    }, Vr = () => {
      ut && (clearInterval(ut), ut = null, Ve.value = Date.now());
    }, Ll = (p) => {
      const y = dd();
      return H.value = !1, V.value = y, B.value = p, y;
    }, Gs = (p) => {
      p && V.value !== p || (V.value = null, B.value = null);
    }, Il = (p, y) => {
      p.streaming = !1, p.stopped = !0, p.interrupted = !1, p.error = "", p.reasoningStartedAt && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()), y !== void 0 && (p.elapsedMs = y), d(p.id), Ve.value = Date.now();
    }, Ol = async (p, y, G) => {
      const te = performance.now();
      let T = Wd(y), _e = "", le = null, Se = null, Ce = !1, Hn = !1;
      if (H.value) {
        Il(p, performance.now() - te), Gs(G);
        return;
      }
      T = ik(T), p.promptTokens = ns(T), p.contextSize = Tn.value;
      const jt = async () => {
        if (!_e) {
          le = null, Se?.(), Se = null;
          return;
        }
        const ht = H.value ? _e.length : _e.length > 4e3 ? 900 : _e.length > 1200 ? 520 : _e.length > 240 ? 180 : 64;
        if (p.content += _e.slice(0, ht), _e = _e.slice(ht), p.estimatedCompletionTokens = ta(
          p.content
        ), !Hn && !H.value && qd(p.content) && (Hn = !0, H.value = !0, p.repetitionStopped = !0, Qr(G).catch(
          (un) => Et.warn("[LocalAI] repetition stop failed", un)
        )), await Rt(), !_e) {
          le = null, Se?.(), Se = null;
          return;
        }
        le = window.setTimeout(() => {
          jt().catch(
            (un) => Et.warn("[LocalAI] stream pump failed", un)
          );
        }, ST);
      }, Hr = (ht) => {
        ht && (h(p, ht), _e += ht, le === null && (le = window.setTimeout(() => {
          jt().catch(
            (un) => Et.warn("[LocalAI] stream pump failed", un)
          );
        }, 32)));
      }, Bl = async () => {
        !_e && le === null || await new Promise((ht) => {
          Se = ht;
        });
      }, zo = await _w(
        {
          messages: T,
          maxTokens: Ud(),
          enableThinking: p.allowThinking === !0
        },
        (ht) => {
          H.value || (Ce = !0, Hr(ht));
        },
        {
          requestId: G,
          onStats: (ht) => {
            const un = sk(p.stats, ht);
            p.stats = un, un.ctxSize && (p.contextSize = un.ctxSize), un.completionTokens !== void 0 && (p.estimatedCompletionTokens = un.completionTokens), Ve.value = Date.now();
          }
        }
      ).catch(async (ht) => {
        throw await Bl(), ht;
      });
      if (!Ce)
        Hr(zo.content);
      else if (!H.value) {
        const ht = p.content.length + _e.length;
        zo.content.length > ht && Hr(zo.content.slice(ht));
      }
      await Bl(), !H.value && zo.content && p.content !== zo.content && (p.content = zo.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? ta(p.content), d(p.id), p.streaming = !1, p.elapsedMs = performance.now() - te, p.stopped = H.value, p.interrupted = !1, p.error = "", Ve.value = Date.now(), Gs(G);
    }, Kd = async () => {
      const p = V.value;
      if (!R.value || H.value) return;
      H.value = !0;
      const y = B.value;
      if (y && Il(
        y,
        Math.max(0, Date.now() - Vn(y).getTime())
      ), !!p)
        try {
          await Qr(p);
        } catch (G) {
          Et.warn("[LocalAI] cancel stream failed", G);
        }
    }, Zd = () => {
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
    }, $l = async () => {
      const p = L.value.trim();
      if (xe.value || !Zd()) return;
      Me();
      const y = (/* @__PURE__ */ new Date()).toISOString(), G = Jr(n.value), te = p || G[0]?.name || "", T = He.value;
      if (!T) return;
      const _e = na(T, {
        id: yo("user"),
        role: "user",
        content: p,
        createdAt: y,
        attachments: G
      }), le = na(T, {
        id: yo("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: _e.id,
        streaming: !0,
        allowThinking: re.value && rn.value,
        contextSize: Tn.value
      });
      L.value = "", n.value = [], R.value = !0;
      const Se = Ll(le);
      xl(), await Rt({ force: !0 });
      const Ce = performance.now();
      try {
        await Ol(le, T, Se), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T)), await v();
      } catch (Hn) {
        if (H.value)
          T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T);
        else {
          L.value = p, n.value = G;
          const jt = El(Hn);
          Ee.msg(`${t("localAi.chatFailed")}: ${jt}`, "error"), le.error = jt, le.interrupted = !!le.content.trim(), le.interrupted || (le.content = jt), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T));
        }
        le.streaming = !1, d(le.id), le.elapsedMs = performance.now() - Ce;
      } finally {
        R.value = !1, Gs(Se), Vr(), await Rt();
      }
    }, Yd = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), $l());
    }, Rl = (p) => {
      (p.ctrlKey || p.metaKey) && p.key.toLowerCase() === "n" && !p.shiftKey && !p.altKey && (p.preventDefault(), be());
    }, Xd = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Qd = (p) => {
      const y = new Date(p), G = /* @__PURE__ */ new Date(), te = G.getTime() - y.getTime(), T = 24 * 60 * 60 * 1e3;
      return y.toDateString() === G.toDateString() ? y.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : te < T * 2 ? t("localAi.yesterday") : te < T * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(te / T))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(te / (T * 7)))
      });
    }, Ml = async (p) => {
      try {
        await navigator.clipboard.writeText(p.content), Ee.msg(t("localAi.copied"));
      } catch (y) {
        Ee.msg(`${t("common.operationFailed")}: ${y}`, "error");
      }
    }, Pl = async (p) => {
      if (R.value) return;
      const y = He.value;
      if (!y) return;
      const G = mk(
        y.messages,
        y.currentNodeId,
        p
      );
      if (!G) return;
      const te = new Set(
        y.messages.filter((Ce) => G.deletedIds.has(Ce.id)).flatMap((Ce) => Ce.attachments ?? []).map((Ce) => Ce.id)
      );
      ee.value && te.has(ee.value.id) && Ut();
      const T = y.messages, _e = y.currentNodeId, le = y.updatedAt, Se = y.updatedAtLabel;
      if (y.messages = G.messages, y.currentNodeId = G.currentNodeId, !y.messages.some((Ce) => !os(Ce))) {
        await qt(y.id);
        return;
      }
      y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString();
      try {
        await we(y);
      } catch (Ce) {
        y.messages = T, y.currentNodeId = _e, y.updatedAt = le, y.updatedAtLabel = Se, Et.warn("[LocalAI] delete message failed", Ce), Ee.msg(`${t("common.operationFailed")}: ${String(Ce)}`, "error");
      }
    }, Nl = (p) => {
      R.value || (L.value = p.content, n.value = Jr(p.attachments), He.value && p.parentId && (He.value.currentNodeId = p.parentId), cn());
    }, Dl = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), zl = (p, y) => {
      if (R.value) return;
      const G = He.value;
      if (!G) return;
      const te = p.siblingCurrentIndex + y, T = p.siblingLeafNodeIds[te];
      T && (G.currentNodeId = T, ce.value = !0, Rt({ force: !0 }));
    }, Jd = async (p) => {
      const y = He.value;
      if (!y || R.value) return;
      const G = y.messages.find((Ce) => Ce.id === p);
      if (!G || G.role !== "assistant") return;
      const te = wd(y.messages, G.id);
      if (!te.length) return;
      const T = (/* @__PURE__ */ new Date()).toISOString(), _e = /* @__PURE__ */ new Map(), le = te.map((Ce, Hn) => {
        const jt = yo(Hn === 0 ? "root" : Ce.role);
        return _e.set(Ce.id, jt), {
          ...Ce,
          id: jt,
          parentId: Ce.parentId ? _e.get(Ce.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Jr(Ce.attachments)
        };
      });
      for (let Ce = 0; Ce < le.length - 1; Ce += 1)
        le[Ce].childIds = [le[Ce + 1].id];
      const Se = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${y.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: T,
        updatedAt: T,
        updatedAtLabel: Tt(),
        currentNodeId: le.at(-1)?.id ?? null,
        messages: le
      };
      k.value.unshift(Se), M.value = Se.id, L.value = "", n.value = [], ce.value = !0, await we(Se), await Rt({ force: !0 }), Ee.msg(t("localAi.branchCreated"));
    }, ef = async (p) => {
      const y = He.value;
      if (!y || R.value) return;
      const G = y.messages.find((le) => le.id === p);
      if (!G || G.role !== "assistant" || !G.parentId) return;
      y.currentNodeId = G.parentId;
      const te = na(y, {
        id: yo("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: G.parentId,
        streaming: !0,
        allowThinking: re.value && rn.value
      });
      R.value = !0;
      const T = Ll(te);
      xl(), await Rt({ force: !0 });
      const _e = performance.now();
      try {
        await Ol(te, y, T), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
      } catch (le) {
        if (H.value)
          y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        else {
          const Se = El(le);
          Ee.msg(`${t("localAi.chatFailed")}: ${Se}`, "error"), te.error = Se, te.interrupted = !!te.content.trim(), te.interrupted || (te.content = Se), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        }
        te.streaming = !1, d(te.id), te.elapsedMs = performance.now() - _e;
      } finally {
        R.value = !1, Gs(T), Vr(), await Rt();
      }
    };
    return ot(async () => {
      window.addEventListener("local-ai-prompt-ready", ln), window.addEventListener(
        "local-ai-new-chat-requested",
        Ro
      ), jn(
        localStorage.getItem(ks),
        ia(localStorage)
      ), to(), typeof ResizeObserver < "u" && (bt = new ResizeObserver(() => {
        ce.value && Rt();
      })), window.addEventListener("pointerup", Gt), window.addEventListener("pointercancel", Gt), window.addEventListener("keydown", Rl);
      try {
        await Q();
      } finally {
        const [p, y] = await Promise.all([
          $o(),
          Oe()
        ]);
        ue = !0;
        const G = !!p || Te || ia(localStorage), te = p || fe || localStorage.getItem(ks);
        fe = null, Te = !1, te ? jn(te, G) : (y || De || T2(localStorage)) && an();
      }
      ze = setInterval(() => {
        v().catch(
          (p) => Et.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), pe(rn, (p) => {
      p || (re.value = !1);
    }), Ia(() => {
      ue = !1, fe = null, Te = !1, De = !1, Ue = null, window.removeEventListener("local-ai-prompt-ready", ln), window.removeEventListener(
        "local-ai-new-chat-requested",
        Ro
      ), ze && clearInterval(ze), Ge !== null && (window.cancelAnimationFrame(Ge), Ge = null), bt?.disconnect(), bt = null, qe = null, window.removeEventListener("pointerup", Gt), window.removeEventListener("pointercancel", Gt), window.removeEventListener("keydown", Rl), V.value && Qr(V.value), u(), Vr();
    }), (p, y) => {
      const G = od, te = nd;
      return S(), D(
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
              f("header", A2, [
                f("div", C2, [
                  f("div", E2, [
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
                  _(l(Hl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, x2)
              ]),
              f("div", L2, [
                f("button", {
                  class: "sidebar-new-chat-btn",
                  type: "button",
                  disabled: l(xe),
                  onClick: be
                }, [
                  _(l(Wr), {
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
                ], 8, I2),
                f("label", O2, [
                  _(l($f), {
                    theme: "outline",
                    size: "16"
                  }),
                  lt(f("input", {
                    "onUpdate:modelValue": y[1] || (y[1] = (T) => Qt(C) ? C.value = T : null),
                    placeholder: l(t)("localAi.searchHistory")
                  }, null, 8, $2), [
                    [xs, l(C)]
                  ]),
                  l(C) ? (S(), D(
                    "span",
                    R2,
                    E(l(Fn).length),
                    1
                    /* TEXT */
                  )) : Y("v-if", !0)
                ])
              ]),
              f("section", M2, [
                f("div", P2, [
                  f(
                    "div",
                    N2,
                    E(l(t)("localAi.recent")),
                    1
                    /* TEXT */
                  ),
                  f("div", D2, [
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("localAi.clearAllChats"),
                      disabled: l(xe) || l(F) || !l(k).length,
                      onClick: y[2] || (y[2] = (T) => ne.value = !0)
                    }, [
                      _(l(is), {
                        theme: "outline",
                        size: "14"
                      })
                    ], 8, z2),
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("plugins.refresh"),
                      disabled: l(xe) || l(K) || l(F),
                      onClick: Q
                    }, [
                      _(l(cs), {
                        class: z({ "animate-spin": l(K) }),
                        theme: "outline",
                        size: "14"
                      }, null, 8, ["class"])
                    ], 8, B2)
                  ])
                ]),
                l(Fn).length ? (S(), D("div", F2, [
                  (S(!0), D(
                    at,
                    null,
                    Cn(l(Fn), (T) => (S(), D("div", {
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
                      f("span", V2, [
                        lt((S(), D("span", H2, [
                          f("span", W2, [
                            f(
                              "span",
                              U2,
                              E(T.title),
                              1
                              /* TEXT */
                            ),
                            f(
                              "span",
                              G2,
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
                          q2,
                          E(Qd(T.updatedAt)),
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
                        _(l(is), {
                          theme: "outline",
                          size: "13"
                        })
                      ], 8, K2)
                    ], 42, j2))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (S(), D(
                  "div",
                  Z2,
                  E(l(t)("common.empty")),
                  1
                  /* TEXT */
                ))
              ]),
              f("footer", Y2, [
                f("div", X2, [
                  f("span", Q2, [
                    _(l(Ur), {
                      theme: "outline",
                      size: "15"
                    })
                  ]),
                  f("span", J2, [
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
                  onClick: Xd
                }, [
                  _(l(Pc), {
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
                  _(l(Ul), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ])
            ],
            2
            /* CLASS */
          ),
          f("section", e4, [
            f("header", t4, [
              f("div", n4, [
                l(j) ? (S(), D("button", {
                  key: 0,
                  class: "panel-sidebar-toggle",
                  type: "button",
                  title: l(t)("localAi.expandSidebar"),
                  onClick: y[3] || (y[3] = (T) => j.value = !1)
                }, [
                  _(l(Hl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, o4)) : Y("v-if", !0),
                f("div", s4, [
                  _(l(Ur), {
                    theme: "outline",
                    size: "18"
                  })
                ]),
                f("div", r4, [
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
                onPointerdown: St,
                onTouchstartPassive: No,
                onTouchmovePassive: jr,
                onTouchend: Hs
              },
              [
                l(mo).length ? Y("v-if", !0) : (S(), D("section", a4, [
                  f("div", l4, [
                    f("div", i4, [
                      _(l(Of), {
                        theme: "outline",
                        size: "30"
                      })
                    ]),
                    f("span", c4, [
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
                  f("div", u4, [
                    f("div", d4, [
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
                    f("div", f4, [
                      (S(), D(
                        at,
                        null,
                        Cn(q, (T) => f("button", {
                          key: T.title,
                          class: "quick-prompt-card",
                          type: "button",
                          onClick: (_e) => Po(T.title)
                        }, [
                          f("span", m4, [
                            (S(), se(Jt(T.icon), {
                              theme: "outline",
                              size: "17"
                            }))
                          ]),
                          f("span", h4, [
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
                          _(l(Ul), {
                            theme: "outline",
                            size: "14"
                          })
                        ], 8, p4)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ])
                ])),
                (S(!0), D(
                  at,
                  null,
                  Cn(l(Dn), (T, _e) => (S(), D(
                    at,
                    {
                      key: T.message.id
                    },
                    [
                      Fd(_e) ? (S(), D("div", g4, [
                        f(
                          "span",
                          null,
                          E(jd(T.message)),
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
                          f("div", v4, [
                            T.message.role === "assistant" ? (S(), se(l(Ur), {
                              key: 0,
                              theme: "outline",
                              size: "18"
                            })) : (S(), D(
                              "span",
                              b4,
                              E(l(t)("localAi.youShort")),
                              1
                              /* TEXT */
                            ))
                          ]),
                          f("div", y4, [
                            T.message.role === "user" ? (S(), D(
                              at,
                              { key: 0 },
                              [
                                f("div", w4, [
                                  T.message.content ? (S(), D(
                                    "div",
                                    k4,
                                    E(T.message.content),
                                    1
                                    /* TEXT */
                                  )) : Y("v-if", !0),
                                  T.message.attachments?.length ? (S(), D("div", _4, [
                                    (S(!0), D(
                                      at,
                                      null,
                                      Cn(T.message.attachments, (le) => (S(), D(
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
                                            onClick: (Se) => zn(le)
                                          }, [
                                            f("img", {
                                              src: le.dataUrl,
                                              alt: le.name
                                            }, null, 8, S4)
                                          ], 8, T4)) : (S(), D(
                                            "span",
                                            A4,
                                            E(le.type === "text" ? "TXT" : "FILE"),
                                            1
                                            /* TEXT */
                                          )),
                                          le.type === "image" && le.dataUrl ? Y("v-if", !0) : (S(), D(
                                            "span",
                                            C4,
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
                                T.message.streaming ? Y("v-if", !0) : (S(), D("div", E4, [
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Ml(T.message)
                                  }, [
                                    _(l(jl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, x4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => Nl(T.message)
                                  }, [
                                    _(l(Wr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, L4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => Pl(T.message.id)
                                  }, [
                                    _(l(is), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, I4)
                                ]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (S(), D(
                              at,
                              { key: 1 },
                              [
                                f("div", O4, [
                                  f(
                                    "span",
                                    null,
                                    E(l(Ot)),
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? (S(), D(
                                    "small",
                                    $4,
                                    E(Vd(T.message)),
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
                                    T.message.content ? (S(), D("div", R4, [
                                      T.message.allowThinking && l(w)(T.message.content) ? (S(), D("details", {
                                        key: 0,
                                        class: "reasoning-panel",
                                        open: T.message.streaming && Do(T.message)
                                      }, [
                                        f("summary", null, [
                                          f("span", P4, [
                                            _(l(Fl), {
                                              theme: "outline",
                                              size: "14"
                                            }),
                                            pt(
                                              " " + E(zd(T.message)),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          T.message.streaming ? (S(), D(
                                            "small",
                                            N4,
                                            E(Do(T.message) ? l(t)("localAi.thinking") : l(t)("localAi.generating")),
                                            1
                                            /* TEXT */
                                          )) : Y("v-if", !0)
                                        ]),
                                        f("div", {
                                          class: "message-content markdown-body",
                                          onClick: y[4] || (y[4] = //@ts-ignore
                                          (...le) => l(m) && l(m)(...le)),
                                          innerHTML: l(b)(T.message, "reasoning")
                                        }, null, 8, D4)
                                      ], 8, M4)) : Y("v-if", !0),
                                      l(g)(T.message.content) ? (S(), D("div", {
                                        key: 1,
                                        class: "message-content markdown-body",
                                        onClick: y[5] || (y[5] = //@ts-ignore
                                        (...le) => l(m) && l(m)(...le)),
                                        innerHTML: l(b)(T.message, "answer")
                                      }, null, 8, z4)) : Y("v-if", !0)
                                    ])) : (S(), D(
                                      "div",
                                      {
                                        key: 1,
                                        class: z([
                                          "message-content",
                                          T.message.stopped ? "" : "loading-text"
                                        ])
                                      },
                                      E(T.message.stopped ? l(t)("localAi.generationStopped") : Hd(T.message)),
                                      3
                                      /* TEXT, CLASS */
                                    ))
                                  ],
                                  2
                                  /* CLASS */
                                ),
                                T.message.content ? (S(), D("div", B4, [
                                  f(
                                    "span",
                                    F4,
                                    E(l(t)("localAi.contextLabel")) + ": " + E(oo(T.message).context) + "/" + E(oo(T.message).contextMax) + " (" + E(oo(T.message).contextPercent) + "%) ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    j4,
                                    E(l(t)("localAi.outputLabel")) + ": " + E(oo(T.message).output) + "/" + E(oo(T.message).outputMax),
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    V4,
                                    E(oo(T.message).seconds) + "s ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    H4,
                                    E(oo(T.message).speed) + " t/s ",
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? Y("v-if", !0) : (S(), D(
                                    "span",
                                    W4,
                                    E(_l(T.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ])) : Y("v-if", !0),
                                Cl(T.message) ? (S(), D(
                                  "div",
                                  U4,
                                  E(Cl(T.message)),
                                  1
                                  /* TEXT */
                                )) : Y("v-if", !0),
                                T.message.streaming ? Y("v-if", !0) : (S(), D("div", G4, [
                                  T.siblingLeafNodeIds.length > 1 ? (S(), D("div", {
                                    key: 0,
                                    class: "message-version-switcher",
                                    title: Dl(T),
                                    "aria-label": Dl(T)
                                  }, [
                                    f("button", {
                                      type: "button",
                                      disabled: T.siblingCurrentIndex <= 0,
                                      title: l(t)("localAi.previousVersion"),
                                      onClick: (le) => zl(T, -1)
                                    }, " ‹ ", 8, K4),
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
                                      onClick: (le) => zl(T, 1)
                                    }, " › ", 8, Z4)
                                  ], 8, q4)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Ml(T.message)
                                  }, [
                                    _(l(jl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, Y4),
                                  T.message.role === "assistant" ? (S(), D("button", {
                                    key: 1,
                                    type: "button",
                                    title: l(t)("localAi.regenerate"),
                                    onClick: (le) => ef(T.message.id)
                                  }, [
                                    _(l(cs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, X4)) : Y("v-if", !0),
                                  T.message.role === "assistant" ? (S(), D("button", {
                                    key: 2,
                                    type: "button",
                                    title: l(t)("localAi.branchChat"),
                                    onClick: (le) => Jd(T.message.id)
                                  }, [
                                    _(l(xf), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, Q4)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => Nl(T.message)
                                  }, [
                                    _(l(Wr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, J4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => Pl(T.message.id)
                                  }, [
                                    _(l(is), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, eT)
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
              onClick: no
            }, [
              _(l(Cf), {
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
            ], 8, tT)) : Y("v-if", !0),
            f("div", nT, [
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
                    (...T) => l(r) && l(r)(...T),
                    ["prevent"]
                  )),
                  onSubmit: Ke($l, ["prevent"]),
                  onFocusin: y[13] || (y[13] = (T) => de.value = !0),
                  onFocusout: y[14] || (y[14] = (T) => de.value = !1)
                },
                [
                  l(n).length ? (S(), D("div", oT, [
                    (S(!0), D(
                      at,
                      null,
                      Cn(l(n), (T) => (S(), D(
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
                            onClick: (_e) => zn(T)
                          }, [
                            f("img", {
                              src: T.dataUrl,
                              alt: T.name
                            }, null, 8, rT)
                          ], 8, sT)) : (S(), D(
                            "span",
                            aT,
                            E(T.type === "text" ? "TXT" : "FILE"),
                            1
                            /* TEXT */
                          )),
                          f("span", lT, [
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
                              E(l(gd)(T.size)) + " · " + E(l(s)(T)),
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
                            _(l(is), {
                              theme: "outline",
                              size: "12"
                            })
                          ], 8, iT)
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
                    onKeydown: Yd,
                    onPaste: y[7] || (y[7] = //@ts-ignore
                    (...T) => l(a) && l(a)(...T))
                  }, null, 40, cT), [
                    [xs, l(L)]
                  ]),
                  f("div", uT, [
                    f("div", dT, [
                      f("button", {
                        class: "composer-tool-btn",
                        type: "button",
                        title: l(t)("localAi.addAttachment"),
                        disabled: l(o),
                        onClick: y[8] || (y[8] = //@ts-ignore
                        (...T) => l(i) && l(i)(...T))
                      }, [
                        l(o) ? (S(), se(l(cs), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "16"
                        })) : (S(), se(l(Lf), {
                          key: 1,
                          theme: "outline",
                          size: "16"
                        }))
                      ], 8, fT),
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
                        onClick: as
                      }, [
                        l(O) ? (S(), se(l(cs), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "14"
                        })) : (S(), se(l(Wl), {
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
                      ], 10, pT),
                      l(rn) ? (S(), D("button", {
                        key: 0,
                        class: z([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          l(re) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        title: l(re) ? l(t)("localAi.thinkingEnabled") : l(t)("localAi.thinkingDisabled"),
                        "aria-pressed": l(re),
                        onClick: y[9] || (y[9] = (T) => re.value = !l(re))
                      }, [
                        _(l(Fl), {
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
                      ], 10, mT)) : Y("v-if", !0)
                    ]),
                    f("div", hT, [
                      f("div", gT, [
                        _(l(Vl), {
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
                          onChange: ls
                        }, {
                          default: J(() => [
                            (S(!0), D(
                              at,
                              null,
                              Cn(l(_t), (T) => (S(), se(G, {
                                key: T,
                                label: kn(T),
                                value: T
                              }, {
                                default: J(() => [
                                  f("span", vT, [
                                    _(l(Vl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    f(
                                      "span",
                                      bT,
                                      E(kn(T)),
                                      1
                                      /* TEXT */
                                    ),
                                    l(U) === T ? (S(), se(l(Sf), {
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
                            l(_t).length ? Y("v-if", !0) : (S(), se(G, {
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
                        yT,
                        E(l(t)("localAi.inputHint")),
                        1
                        /* TEXT */
                      ),
                      l(V) ? (S(), D("button", {
                        key: 0,
                        class: z(["send-btn send-btn--stop", { "send-btn--stopping": l(H) }]),
                        type: "button",
                        disabled: l(H),
                        title: l(H) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        "aria-label": l(H) ? l(t)("localAi.stoppingGeneration") : l(t)("localAi.stopGenerating"),
                        onClick: Kd
                      }, [
                        l(H) ? (S(), se(l(cs), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "15"
                        })) : (S(), se(l(Mf), {
                          key: 1,
                          theme: "filled",
                          size: "11"
                        }))
                      ], 10, wT)) : (S(), D("button", {
                        key: 1,
                        class: "send-btn",
                        type: "submit",
                        disabled: !l(ke),
                        title: l(t)("localAi.send"),
                        "aria-label": l(t)("localAi.send")
                      }, [
                        _(l(Rf), {
                          theme: "outline",
                          size: "15"
                        })
                      ], 8, kT))
                    ])
                  ])
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ]),
          _(a2, {
            modelValue: l(X),
            "onUpdate:modelValue": y[15] || (y[15] = (T) => Qt(X) ? X.value = T : null),
            attachment: l(ee)
          }, null, 8, ["modelValue", "attachment"]),
          _(l(Bw), {
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
}), ET = /* @__PURE__ */ Io(CT, [["__scopeId", "data-v-28b9cbb1"]]), xT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ET
}, Symbol.toStringTag, { value: "Module" })), LT = { class: "settings-panel local-ai-settings-shell" }, IT = { class: "panel-header local-ai-header" }, OT = { class: "local-ai-frame local-ai-header__inner" }, $T = { class: "local-ai-heading" }, RT = { class: "panel-title" }, MT = { class: "local-ai-desc" }, PT = { class: "header-actions" }, NT = {
  key: 0,
  class: "panel-content local-ai-content"
}, DT = { class: "local-ai-frame" }, zT = { class: "settings-section" }, BT = { class: "settings-section__header" }, FT = { class: "status-overview" }, jT = { class: "status-list" }, VT = ["title"], HT = ["title"], WT = ["title"], UT = { class: "memory-summary__title" }, GT = { class: "memory-summary__metrics" }, qT = { class: "readiness-grid" }, KT = { class: "readiness-item" }, ZT = { class: "readiness-item" }, YT = { class: "readiness-item" }, XT = { class: "readiness-item" }, QT = { class: "readiness-item" }, JT = { class: "readiness-item" }, eS = { class: "setting-row service-setting" }, tS = { class: "setting-label" }, nS = { class: "setting-title" }, oS = { class: "setting-desc" }, sS = { class: "setting-control service-control" }, rS = { class: "service-controls" }, aS = {
  key: 0,
  class: "service-url"
}, lS = { class: "settings-section" }, iS = { class: "settings-section__header" }, cS = { class: "field-stack" }, uS = ["title"], dS = { class: "setting-label" }, fS = { class: "setting-title" }, pS = { class: "setting-desc" }, mS = { class: "setting-control" }, hS = { class: "path-control" }, gS = { class: "model-pair-grid" }, vS = ["title"], bS = { class: "setting-label" }, yS = { class: "setting-title" }, wS = { class: "setting-desc" }, kS = { class: "setting-control" }, _S = ["title"], TS = { class: "setting-label" }, SS = { class: "setting-title" }, AS = { class: "setting-desc" }, CS = { class: "setting-control" }, ES = ["title"], xS = { class: "setting-label" }, LS = { class: "setting-title" }, IS = { class: "setting-desc" }, OS = { class: "setting-control" }, $S = { class: "path-control" }, RS = ["placeholder"], MS = { class: "settings-section" }, PS = { class: "settings-section__header" }, NS = { class: "parameter-grid" }, DS = ["title"], zS = ["title"], BS = ["title"], FS = ["title"], jS = ["title"], VS = ["title"], HS = { class: "settings-section" }, WS = { class: "settings-section__header" }, US = { class: "switch-grid" }, GS = ["title"], qS = { class: "switch-field__label" }, KS = ["title"], ZS = { class: "switch-field__label" }, YS = ["title"], XS = { class: "switch-field__label" }, QS = { class: "settings-section" }, JS = { class: "settings-section__header" }, eA = { class: "switch-grid switch-grid--two" }, tA = ["title"], nA = { class: "switch-field__label" }, oA = ["title"], sA = { class: "switch-field__label" }, rA = ["title"], aA = ["title"], lA = { class: "settings-section" }, iA = { class: "settings-section__header" }, cA = { class: "parameter-grid parameter-grid--three" }, uA = ["title"], dA = ["title"], fA = ["title"], pA = ["title"], mA = ["title"], hA = ["title"], gA = ["title"], vA = ["title"], bA = {
  key: 1,
  class: "local-ai-save-bar"
}, yA = { class: "local-ai-frame settings-footer" }, wA = ["title"], kA = /* @__PURE__ */ oe({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Ps(), n = P(null), o = P(null), s = P(null), r = P(null), a = P(!1), i = P(!1), c = P(!1), u = P(!1), d = P(!1);
    let m = null;
    const g = A(() => !!r.value?.selectedModelPath), w = A(() => !!n.value?.mmprojPath), h = A({
      get: () => n.value?.modelPath ?? "",
      set: (W) => {
        n.value && (n.value.modelPath = W || void 0);
      }
    }), b = A({
      get: () => n.value?.mmprojPath ?? "",
      set: (W) => {
        n.value && (n.value.mmprojPath = W || void 0);
      }
    }), C = A(
      () => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), k = A(
      () => g.value ? t("localAi.modelReady") : r.value?.message ?? t("localAi.modelMissing")
    ), M = A(() => s.value?.healthy ? t("localAi.serviceHealthy") : s.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), j = A(
      () => o.value ? o.value.available ? "ok" : "danger" : "muted"
    ), L = A(
      () => r.value ? g.value ? "ok" : "danger" : "muted"
    ), I = A(() => s.value ? s.value.healthy ? "ok" : s.value.running ? "warn" : "danger" : "muted"), O = (W) => W.split(/[\\/]+/).pop() ?? W, R = A(() => {
      const U = O(
        n.value?.modelPath ?? r.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return U ? Number(U[1]) : 4;
    }), K = A(() => {
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
    }), H = (W) => ne(W ? "ok" : "danger"), re = async () => {
      o.value = await bw();
    }, de = async () => {
      s.value = await cd();
    }, ce = async () => {
      n.value && (r.value = await id(n.value), !n.value.modelPath && r.value.selectedModelPath && (n.value.modelPath = r.value.selectedModelPath), !n.value.mmprojPath && r.value.selectedMmprojPath && (n.value.mmprojPath = r.value.selectedMmprojPath));
    }, $ = async () => {
      a.value = !0;
      try {
        n.value = await ld(), await Promise.all([re(), ce(), de()]);
      } catch (W) {
        Et.error("[LocalAI] refresh settings failed", W), Ee.msg(`${t("localAi.refreshFailed")}: ${W}`, "error");
      } finally {
        a.value = !1;
      }
    }, V = async () => {
      if (n.value)
        try {
          await rr(n.value);
        } catch (W) {
          Et.warn("[LocalAI] autosave failed", W);
        }
    }, B = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await rr(n.value), await Promise.all([re(), ce(), de()]), Ee.msg(t("localAi.configSaved"));
        } catch (W) {
          Ee.msg(`${t("localAi.configSaveFailed")}: ${W}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, ue = async () => {
      const W = await wa({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !W || Array.isArray(W) || !n.value || (n.value.modelDir = W, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await ce());
    }, fe = async () => {
      const W = await wa({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !W || Array.isArray(W) || !n.value || (n.value.runtimePath = W, await V(), await re());
    }, Te = async () => {
      if (n.value) {
        c.value = !0;
        try {
          await rr(n.value), s.value = await yw(n.value), Ee.msg(t("localAi.serviceStarted"));
        } catch (W) {
          Ee.msg(`${t("localAi.serviceStartFailed")}: ${W}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, De = async () => {
      u.value = !0;
      try {
        await B(), s.value = await ud(), Ee.msg(t("localAi.serviceRestarted"));
      } catch (W) {
        Ee.msg(`${t("localAi.serviceRestartFailed")}: ${W}`, "error");
      } finally {
        u.value = !1;
      }
    }, Ue = async () => {
      d.value = !0;
      try {
        await ww(), await de(), Ee.msg(t("localAi.serviceStoppedMsg"));
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
    }), Ia(() => {
      m && clearInterval(m);
    }), (W, U) => {
      const me = od, Ie = nd, ee = Oy;
      return S(), D("div", LT, [
        f("header", IT, [
          f("div", OT, [
            f("div", $T, [
              f(
                "h3",
                RT,
                E(l(t)("localAi.title")),
                1
                /* TEXT */
              ),
              f(
                "p",
                MT,
                E(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              )
            ]),
            f("div", PT, [
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
        l(n) ? (S(), D("main", NT, [
          f("div", DT, [
            f("section", zT, [
              f("div", BT, [
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
              f("div", FT, [
                f("div", jT, [
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
                  ], 10, VT),
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
                  ], 10, HT),
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
                  ], 10, WT)
                ]),
                f(
                  "div",
                  {
                    class: z(["memory-summary", ne(l(K).level)])
                  },
                  [
                    f("div", UT, [
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
                    f("div", GT, [
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
              f("div", qT, [
                f("div", KT, [
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
                f("div", ZT, [
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
                f("div", YT, [
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
                f("div", XT, [
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
                f("div", QT, [
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
                f("div", JT, [
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
                      class: z(H(!!l(s)?.healthy))
                    },
                    E(l(s)?.healthy ? l(t)("common.yes") : l(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ]),
              f("div", eS, [
                f("div", tS, [
                  f(
                    "div",
                    nS,
                    E(l(t)("localAi.serviceControl")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "div",
                    oS,
                    E(l(t)("localAi.serviceControlDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                f("div", sS, [
                  f("div", rS, [
                    _(l(Xt), {
                      type: "primary",
                      size: "small",
                      loading: l(c),
                      disabled: l(s)?.running,
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
                      disabled: !l(s)?.running,
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
                      disabled: !l(s)?.running,
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
                  l(s)?.baseUrl ? (S(), D("div", aS, [
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
                  ])) : Y("v-if", !0)
                ])
              ])
            ]),
            f("section", lS, [
              f("div", iS, [
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
              f("div", cS, [
                f("div", {
                  class: "setting-row",
                  title: F("modelDir")
                }, [
                  f("div", dS, [
                    f(
                      "div",
                      fS,
                      E(l(t)("localAi.modelDir")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      pS,
                      E(F("modelDir")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", mS, [
                    f("div", hS, [
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
                        [xs, l(n).modelDir]
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
                ], 8, uS),
                f("div", gS, [
                  f("div", {
                    class: "setting-row",
                    title: F("mainModel")
                  }, [
                    f("div", bS, [
                      f(
                        "div",
                        yS,
                        E(l(t)("localAi.mainModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        wS,
                        E(F("mainModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", kS, [
                      _(Ie, {
                        modelValue: l(h),
                        "onUpdate:modelValue": U[1] || (U[1] = (X) => Qt(h) ? h.value = X : null),
                        class: "field-select",
                        clearable: "",
                        onChange: V
                      }, {
                        default: J(() => [
                          (S(!0), D(
                            at,
                            null,
                            Cn(l(r)?.mainModels ?? [], (X) => (S(), se(me, {
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
                  ], 8, vS),
                  f("div", {
                    class: "setting-row",
                    title: F("mmprojModel")
                  }, [
                    f("div", TS, [
                      f(
                        "div",
                        SS,
                        E(l(t)("localAi.mmprojModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        AS,
                        E(F("mmprojModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", CS, [
                      _(Ie, {
                        modelValue: l(b),
                        "onUpdate:modelValue": U[2] || (U[2] = (X) => Qt(b) ? b.value = X : null),
                        class: "field-select",
                        clearable: "",
                        onChange: V
                      }, {
                        default: J(() => [
                          (S(!0), D(
                            at,
                            null,
                            Cn(l(r)?.mmprojModels ?? [], (X) => (S(), se(me, {
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
                  ], 8, _S)
                ]),
                f("div", {
                  class: "setting-row",
                  title: F("runtimePath")
                }, [
                  f("div", xS, [
                    f(
                      "div",
                      LS,
                      E(l(t)("localAi.runtimePath")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      IS,
                      E(F("runtimePath")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", OS, [
                    f("div", $S, [
                      lt(f("input", {
                        "onUpdate:modelValue": U[3] || (U[3] = (X) => l(n).runtimePath = X),
                        class: "setting-input",
                        placeholder: l(t)("localAi.runtimePathPlaceholder")
                      }, null, 8, RS), [
                        [xs, l(n).runtimePath]
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
                ], 8, ES)
              ])
            ]),
            f("section", MS, [
              f("div", PS, [
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
              f("div", NS, [
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
                ], 8, DS),
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
                ], 8, zS),
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
                ], 8, BS),
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
                ], 8, FS),
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
                ], 8, jS),
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
                ], 8, VS)
              ])
            ]),
            f("section", HS, [
              f("div", WS, [
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
              f("div", US, [
                f("label", {
                  class: "switch-field",
                  title: F("flashAttn")
                }, [
                  f(
                    "span",
                    qS,
                    E(l(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  _(l(fs), {
                    modelValue: l(n).flashAttn,
                    "onUpdate:modelValue": U[10] || (U[10] = (X) => l(n).flashAttn = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, GS),
                f("label", {
                  class: "switch-field",
                  title: F("kvOffload")
                }, [
                  f(
                    "span",
                    ZS,
                    E(l(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  _(l(fs), {
                    modelValue: l(n).kvOffload,
                    "onUpdate:modelValue": U[11] || (U[11] = (X) => l(n).kvOffload = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, KS),
                f("label", {
                  class: "switch-field",
                  title: F("mmap")
                }, [
                  f(
                    "span",
                    XS,
                    E(l(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  _(l(fs), {
                    modelValue: l(n).mmap,
                    "onUpdate:modelValue": U[12] || (U[12] = (X) => l(n).mmap = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, YS)
              ])
            ]),
            f("section", QS, [
              f("div", JS, [
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
              f("div", eA, [
                f("label", {
                  class: "switch-field",
                  title: F("autoStart")
                }, [
                  f(
                    "span",
                    nA,
                    E(l(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  _(l(fs), {
                    modelValue: l(n).autoStartOnRequest,
                    "onUpdate:modelValue": U[13] || (U[13] = (X) => l(n).autoStartOnRequest = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, tA),
                f("label", {
                  class: "switch-field",
                  title: F("keepAlive")
                }, [
                  f(
                    "span",
                    sA,
                    E(l(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  _(l(fs), {
                    modelValue: l(n).keepAlive,
                    "onUpdate:modelValue": U[14] || (U[14] = (X) => l(n).keepAlive = X),
                    "active-text": l(t)("common.on"),
                    "inactive-text": l(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, oA),
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
                ], 8, rA),
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
                ], 8, aA)
              ])
            ]),
            f("section", lA, [
              f("div", iA, [
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
              f("div", cA, [
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
                ], 8, uA),
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
                ], 8, dA),
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
                ], 8, fA),
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
                ], 8, pA),
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
                ], 8, mA),
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
                ], 8, hA),
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
                ], 8, gA),
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
                ], 8, vA)
              ])
            ])
          ])
        ])) : Y("v-if", !0),
        l(n) ? (S(), D("footer", bA, [
          f("div", yA, [
            l(s)?.commandLine ? (S(), D("span", {
              key: 0,
              class: "command-line",
              title: l(s).commandLine
            }, E(l(s).commandLine), 9, wA)) : Y("v-if", !0),
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
}), _A = /* @__PURE__ */ Io(kA, [["__scopeId", "data-v-66dbd72c"]]), TA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _A
}, Symbol.toStringTag, { value: "Module" }));
export {
  EA as activate,
  EA as default
};
