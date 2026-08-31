var ef = Object.defineProperty;
var tf = (e, t, n) => t in e ? ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Re = (e, t, n) => tf(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Le, createVNode as _, defineAsyncComponent as nf, getCurrentInstance as xt, ref as P, computed as A, unref as l, readonly as Ea, getCurrentScope as of, onScopeDispose as Oc, shallowRef as io, watchEffect as xa, onMounted as ot, nextTick as Ze, watch as pe, isRef as Qt, warn as sf, provide as vn, defineComponent as oe, createElementBlock as D, openBlock as S, mergeProps as ko, renderSlot as ie, createElementVNode as f, toRef as Kn, onUnmounted as La, useAttrs as rf, useSlots as $c, normalizeStyle as mt, normalizeClass as z, createCommentVNode as Y, Fragment as at, createBlock as se, withCtx as J, resolveDynamicComponent as Jt, withModifiers as qe, toDisplayString as E, onBeforeUnmount as yn, Transition as Eo, withDirectives as lt, vShow as Rn, reactive as _o, onActivated as af, onUpdated as Rc, cloneVNode as lf, Text as cf, Comment as uf, Teleport as df, onBeforeMount as ff, onDeactivated as pf, createTextVNode as pt, h as mf, createSlots as Ia, withKeys as En, toRaw as hf, toRefs as Oa, resolveComponent as vo, resolveDirective as gf, toHandlerKey as vf, renderList as Cn, vModelText as xs, shallowReactive as bf, isVNode as Ls, render as ir } from "vue";
import { useI18n as Ps } from "vue-i18n";
var yf = {
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
function wf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function kf(e, t, n) {
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
var _f = Symbol("icon-context");
function Ye(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var a = wf(), i = Le(_f, yf);
      return function() {
        var c = r.size, u = r.strokeWidth, d = r.strokeLinecap, m = r.strokeLinejoin, g = r.theme, w = r.fill, h = r.spin, b = kf(a, {
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
const Bl = Ye("brain", !0, function(e) {
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
}), Tf = Ye("check-small", !0, function(e) {
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
}), Sf = Ye("code", !0, function(e) {
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
}), Fl = Ye("copy", !0, function(e) {
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
}), jl = Ye("cube", !1, function(e) {
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
}), Af = Ye("down", !1, function(e) {
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
}), Hr = Ye("edit", !0, function(e) {
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
}), Cf = Ye("file-text", !0, function(e) {
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
}), Ef = Ye("fork", !1, function(e) {
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
}), Vl = Ye("left-bar", !0, function(e) {
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
}), xf = Ye("link", !0, function(e) {
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
}), Hl = Ye("magic-wand", !0, function(e) {
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
}), Lf = Ye("picture", !0, function(e) {
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
}), Wl = Ye("right", !0, function(e) {
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
}), Wr = Ye("robot", !0, function(e) {
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
}), If = Ye("robot-one", !0, function(e) {
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
}), Of = Ye("search", !0, function(e) {
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
}), $f = Ye("send", !0, function(e) {
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
}), Mc = Ye("setting-two", !1, function(e) {
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
}), Rf = Ye("square", !1, function(e) {
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
}), Mf = Ye("translate", !0, function(e) {
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
}), wA = (e) => {
  e.registerRoute({
    target: "config",
    path: "local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => TT)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Mc,
    component: nf(() => Promise.resolve().then(() => gA))
  });
}, Pc = Symbol(), _s = "el", Pf = "is-", bo = (e, t, n, o, s) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), o && (r += `__${o}`), s && (r += `--${s}`), r;
}, Nc = Symbol("namespaceContextKey"), $a = (e) => {
  const t = e || (xt() ? Le(Nc, P(_s)) : P(_s));
  return A(() => l(t) || _s);
}, et = (e, t) => {
  const n = $a(t);
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
      return b && k ? `${Pf}${b}` : "";
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
}, Nf = Object.prototype.hasOwnProperty, Ul = (e, t) => Nf.call(e, t), Ln = Array.isArray, nt = (e) => typeof e == "function", Zt = (e) => typeof e == "string", en = (e) => e !== null && typeof e == "object", Df = Object.prototype.toString, zf = (e) => Df.call(e), Bf = (e) => zf(e) === "[object Object]", Ff = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jf = /-(\w)/g, Vf = Ff(
  (e) => e.replace(jf, (t, n) => n ? n.toUpperCase() : "")
);
var Dc = typeof global == "object" && global && global.Object === Object && global, Hf = typeof self == "object" && self && self.Object === Object && self, Nn = Dc || Hf || Function("return this")(), Mn = Nn.Symbol, zc = Object.prototype, Wf = zc.hasOwnProperty, Uf = zc.toString, us = Mn ? Mn.toStringTag : void 0;
function Gf(e) {
  var t = Wf.call(e, us), n = e[us];
  try {
    e[us] = void 0;
    var o = !0;
  } catch {
  }
  var s = Uf.call(e);
  return o && (t ? e[us] = n : delete e[us]), s;
}
var Kf = Object.prototype, qf = Kf.toString;
function Zf(e) {
  return qf.call(e);
}
var Yf = "[object Null]", Xf = "[object Undefined]", Gl = Mn ? Mn.toStringTag : void 0;
function ss(e) {
  return e == null ? e === void 0 ? Xf : Yf : Gl && Gl in Object(e) ? Gf(e) : Zf(e);
}
function Ko(e) {
  return e != null && typeof e == "object";
}
var Qf = "[object Symbol]";
function _r(e) {
  return typeof e == "symbol" || Ko(e) && ss(e) == Qf;
}
function Jf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var bn = Array.isArray, Kl = Mn ? Mn.prototype : void 0, ql = Kl ? Kl.toString : void 0;
function Bc(e) {
  if (typeof e == "string")
    return e;
  if (bn(e))
    return Jf(e, Bc) + "";
  if (_r(e))
    return ql ? ql.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ep = /\s/;
function tp(e) {
  for (var t = e.length; t-- && ep.test(e.charAt(t)); )
    ;
  return t;
}
var np = /^\s+/;
function op(e) {
  return e && e.slice(0, tp(e) + 1).replace(np, "");
}
function uo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zl = NaN, sp = /^[-+]0x[0-9a-f]+$/i, rp = /^0b[01]+$/i, ap = /^0o[0-7]+$/i, lp = parseInt;
function Yl(e) {
  if (typeof e == "number")
    return e;
  if (_r(e))
    return Zl;
  if (uo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = uo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = op(e);
  var n = rp.test(e);
  return n || ap.test(e) ? lp(e.slice(2), n ? 2 : 8) : sp.test(e) ? Zl : +e;
}
function Fc(e) {
  return e;
}
var ip = "[object AsyncFunction]", cp = "[object Function]", up = "[object GeneratorFunction]", dp = "[object Proxy]";
function jc(e) {
  if (!uo(e))
    return !1;
  var t = ss(e);
  return t == cp || t == up || t == ip || t == dp;
}
var Ur = Nn["__core-js_shared__"], Xl = function() {
  var e = /[^.]+$/.exec(Ur && Ur.keys && Ur.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fp(e) {
  return !!Xl && Xl in e;
}
var pp = Function.prototype, mp = pp.toString;
function xo(e) {
  if (e != null) {
    try {
      return mp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var hp = /[\\^$.*+?()[\]{}|]/g, gp = /^\[object .+?Constructor\]$/, vp = Function.prototype, bp = Object.prototype, yp = vp.toString, wp = bp.hasOwnProperty, kp = RegExp(
  "^" + yp.call(wp).replace(hp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _p(e) {
  if (!uo(e) || fp(e))
    return !1;
  var t = jc(e) ? kp : gp;
  return t.test(xo(e));
}
function Tp(e, t) {
  return e?.[t];
}
function Lo(e, t) {
  var n = Tp(e, t);
  return _p(n) ? n : void 0;
}
var ia = Lo(Nn, "WeakMap");
function Sp(e, t, n) {
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
var Ap = 800, Cp = 16, Ep = Date.now;
function xp(e) {
  var t = 0, n = 0;
  return function() {
    var o = Ep(), s = Cp - (o - n);
    if (n = o, s > 0) {
      if (++t >= Ap)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Lp(e) {
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
}(), Ip = cr ? function(e, t) {
  return cr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Lp(t),
    writable: !0
  });
} : Fc, Op = xp(Ip);
function $p(e, t, n, o) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var Rp = 9007199254740991, Mp = /^(?:0|[1-9]\d*)$/;
function Ra(e, t) {
  var n = typeof e;
  return t = t ?? Rp, !!t && (n == "number" || n != "symbol" && Mp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Pp(e, t, n) {
  t == "__proto__" && cr ? cr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ma(e, t) {
  return e === t || e !== e && t !== t;
}
var Np = Object.prototype, Dp = Np.hasOwnProperty;
function zp(e, t, n) {
  var o = e[t];
  (!(Dp.call(e, t) && Ma(o, n)) || n === void 0 && !(t in e)) && Pp(e, t, n);
}
var Ql = Math.max;
function Bp(e, t, n) {
  return t = Ql(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, r = Ql(o.length - t, 0), a = Array(r); ++s < r; )
      a[s] = o[t + s];
    s = -1;
    for (var i = Array(t + 1); ++s < t; )
      i[s] = o[s];
    return i[t] = n(a), Sp(e, this, i);
  };
}
var Fp = 9007199254740991;
function Pa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fp;
}
function jp(e) {
  return e != null && Pa(e.length) && !jc(e);
}
var Vp = Object.prototype;
function Hp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Vp;
  return e === n;
}
function Wp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Up = "[object Arguments]";
function Jl(e) {
  return Ko(e) && ss(e) == Up;
}
var Vc = Object.prototype, Gp = Vc.hasOwnProperty, Kp = Vc.propertyIsEnumerable, Na = Jl(/* @__PURE__ */ function() {
  return arguments;
}()) ? Jl : function(e) {
  return Ko(e) && Gp.call(e, "callee") && !Kp.call(e, "callee");
};
function qp() {
  return !1;
}
var Hc = typeof exports == "object" && exports && !exports.nodeType && exports, ei = Hc && typeof module == "object" && module && !module.nodeType && module, Zp = ei && ei.exports === Hc, ti = Zp ? Nn.Buffer : void 0, Yp = ti ? ti.isBuffer : void 0, ca = Yp || qp, Xp = "[object Arguments]", Qp = "[object Array]", Jp = "[object Boolean]", em = "[object Date]", tm = "[object Error]", nm = "[object Function]", om = "[object Map]", sm = "[object Number]", rm = "[object Object]", am = "[object RegExp]", lm = "[object Set]", im = "[object String]", cm = "[object WeakMap]", um = "[object ArrayBuffer]", dm = "[object DataView]", fm = "[object Float32Array]", pm = "[object Float64Array]", mm = "[object Int8Array]", hm = "[object Int16Array]", gm = "[object Int32Array]", vm = "[object Uint8Array]", bm = "[object Uint8ClampedArray]", ym = "[object Uint16Array]", wm = "[object Uint32Array]", Fe = {};
Fe[fm] = Fe[pm] = Fe[mm] = Fe[hm] = Fe[gm] = Fe[vm] = Fe[bm] = Fe[ym] = Fe[wm] = !0;
Fe[Xp] = Fe[Qp] = Fe[um] = Fe[Jp] = Fe[dm] = Fe[em] = Fe[tm] = Fe[nm] = Fe[om] = Fe[sm] = Fe[rm] = Fe[am] = Fe[lm] = Fe[im] = Fe[cm] = !1;
function km(e) {
  return Ko(e) && Pa(e.length) && !!Fe[ss(e)];
}
function _m(e) {
  return function(t) {
    return e(t);
  };
}
var Wc = typeof exports == "object" && exports && !exports.nodeType && exports, Ts = Wc && typeof module == "object" && module && !module.nodeType && module, Tm = Ts && Ts.exports === Wc, Gr = Tm && Dc.process, ni = function() {
  try {
    var e = Ts && Ts.require && Ts.require("util").types;
    return e || Gr && Gr.binding && Gr.binding("util");
  } catch {
  }
}(), oi = ni && ni.isTypedArray, Uc = oi ? _m(oi) : km, Sm = Object.prototype, Am = Sm.hasOwnProperty;
function Cm(e, t) {
  var n = bn(e), o = !n && Na(e), s = !n && !o && ca(e), r = !n && !o && !s && Uc(e), a = n || o || s || r, i = a ? Wp(e.length, String) : [], c = i.length;
  for (var u in e)
    Am.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ra(u, c))) && i.push(u);
  return i;
}
function Em(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var xm = Em(Object.keys, Object), Lm = Object.prototype, Im = Lm.hasOwnProperty;
function Om(e) {
  if (!Hp(e))
    return xm(e);
  var t = [];
  for (var n in Object(e))
    Im.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Gc(e) {
  return jp(e) ? Cm(e) : Om(e);
}
var $m = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rm = /^\w*$/;
function Da(e, t) {
  if (bn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || _r(e) ? !0 : Rm.test(e) || !$m.test(e) || t != null && e in Object(t);
}
var Is = Lo(Object, "create");
function Mm() {
  this.__data__ = Is ? Is(null) : {}, this.size = 0;
}
function Pm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nm = "__lodash_hash_undefined__", Dm = Object.prototype, zm = Dm.hasOwnProperty;
function Bm(e) {
  var t = this.__data__;
  if (Is) {
    var n = t[e];
    return n === Nm ? void 0 : n;
  }
  return zm.call(t, e) ? t[e] : void 0;
}
var Fm = Object.prototype, jm = Fm.hasOwnProperty;
function Vm(e) {
  var t = this.__data__;
  return Is ? t[e] !== void 0 : jm.call(t, e);
}
var Hm = "__lodash_hash_undefined__";
function Wm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Is && t === void 0 ? Hm : t, this;
}
function To(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
To.prototype.clear = Mm;
To.prototype.delete = Pm;
To.prototype.get = Bm;
To.prototype.has = Vm;
To.prototype.set = Wm;
function Um() {
  this.__data__ = [], this.size = 0;
}
function Tr(e, t) {
  for (var n = e.length; n--; )
    if (Ma(e[n][0], t))
      return n;
  return -1;
}
var Gm = Array.prototype, Km = Gm.splice;
function qm(e) {
  var t = this.__data__, n = Tr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Km.call(t, n, 1), --this.size, !0;
}
function Zm(e) {
  var t = this.__data__, n = Tr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ym(e) {
  return Tr(this.__data__, e) > -1;
}
function Xm(e, t) {
  var n = this.__data__, o = Tr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Qn.prototype.clear = Um;
Qn.prototype.delete = qm;
Qn.prototype.get = Zm;
Qn.prototype.has = Ym;
Qn.prototype.set = Xm;
var Os = Lo(Nn, "Map");
function Qm() {
  this.size = 0, this.__data__ = {
    hash: new To(),
    map: new (Os || Qn)(),
    string: new To()
  };
}
function Jm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Sr(e, t) {
  var n = e.__data__;
  return Jm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function eh(e) {
  var t = Sr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function th(e) {
  return Sr(this, e).get(e);
}
function nh(e) {
  return Sr(this, e).has(e);
}
function oh(e, t) {
  var n = Sr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Jn.prototype.clear = Qm;
Jn.prototype.delete = eh;
Jn.prototype.get = th;
Jn.prototype.has = nh;
Jn.prototype.set = oh;
var sh = "Expected a function";
function za(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(sh);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var a = e.apply(this, o);
    return n.cache = r.set(s, a) || r, a;
  };
  return n.cache = new (za.Cache || Jn)(), n;
}
za.Cache = Jn;
var rh = 500;
function ah(e) {
  var t = za(e, function(o) {
    return n.size === rh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var lh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ih = /\\(\\)?/g, ch = ah(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(lh, function(n, o, s, r) {
    t.push(s ? r.replace(ih, "$1") : o || n);
  }), t;
});
function uh(e) {
  return e == null ? "" : Bc(e);
}
function Ar(e, t) {
  return bn(e) ? e : Da(e, t) ? [e] : ch(uh(e));
}
function Ns(e) {
  if (typeof e == "string" || _r(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ba(e, t) {
  t = Ar(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Ns(t[n++])];
  return n && n == o ? e : void 0;
}
function lo(e, t, n) {
  var o = e == null ? void 0 : Ba(e, t);
  return o === void 0 ? n : o;
}
function Kc(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; )
    e[s + n] = t[n];
  return e;
}
var si = Mn ? Mn.isConcatSpreadable : void 0;
function dh(e) {
  return bn(e) || Na(e) || !!(si && e && e[si]);
}
function fh(e, t, n, o, s) {
  var r = -1, a = e.length;
  for (n || (n = dh), s || (s = []); ++r < a; ) {
    var i = e[r];
    n(i) ? Kc(s, i) : s[s.length] = i;
  }
  return s;
}
function ph(e) {
  var t = e == null ? 0 : e.length;
  return t ? fh(e) : [];
}
function mh(e) {
  return Op(Bp(e, void 0, ph), e + "");
}
function ao() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return bn(e) ? e : [e];
}
function hh() {
  this.__data__ = new Qn(), this.size = 0;
}
function gh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function vh(e) {
  return this.__data__.get(e);
}
function bh(e) {
  return this.__data__.has(e);
}
var yh = 200;
function wh(e, t) {
  var n = this.__data__;
  if (n instanceof Qn) {
    var o = n.__data__;
    if (!Os || o.length < yh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Jn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zn(e) {
  var t = this.__data__ = new Qn(e);
  this.size = t.size;
}
Zn.prototype.clear = hh;
Zn.prototype.delete = gh;
Zn.prototype.get = vh;
Zn.prototype.has = bh;
Zn.prototype.set = wh;
function kh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = 0, r = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (r[s++] = a);
  }
  return r;
}
function _h() {
  return [];
}
var Th = Object.prototype, Sh = Th.propertyIsEnumerable, ri = Object.getOwnPropertySymbols, Ah = ri ? function(e) {
  return e == null ? [] : (e = Object(e), kh(ri(e), function(t) {
    return Sh.call(e, t);
  }));
} : _h;
function Ch(e, t, n) {
  var o = t(e);
  return bn(e) ? o : Kc(o, n(e));
}
function ai(e) {
  return Ch(e, Gc, Ah);
}
var ua = Lo(Nn, "DataView"), da = Lo(Nn, "Promise"), fa = Lo(Nn, "Set"), li = "[object Map]", Eh = "[object Object]", ii = "[object Promise]", ci = "[object Set]", ui = "[object WeakMap]", di = "[object DataView]", xh = xo(ua), Lh = xo(Os), Ih = xo(da), Oh = xo(fa), $h = xo(ia), ro = ss;
(ua && ro(new ua(new ArrayBuffer(1))) != di || Os && ro(new Os()) != li || da && ro(da.resolve()) != ii || fa && ro(new fa()) != ci || ia && ro(new ia()) != ui) && (ro = function(e) {
  var t = ss(e), n = t == Eh ? e.constructor : void 0, o = n ? xo(n) : "";
  if (o)
    switch (o) {
      case xh:
        return di;
      case Lh:
        return li;
      case Ih:
        return ii;
      case Oh:
        return ci;
      case $h:
        return ui;
    }
  return t;
});
var fi = Nn.Uint8Array, Rh = "__lodash_hash_undefined__";
function Mh(e) {
  return this.__data__.set(e, Rh), this;
}
function Ph(e) {
  return this.__data__.has(e);
}
function ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Jn(); ++t < n; )
    this.add(e[t]);
}
ur.prototype.add = ur.prototype.push = Mh;
ur.prototype.has = Ph;
function Nh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Dh(e, t) {
  return e.has(t);
}
var zh = 1, Bh = 2;
function qc(e, t, n, o, s, r) {
  var a = n & zh, i = e.length, c = t.length;
  if (i != c && !(a && c > i))
    return !1;
  var u = r.get(e), d = r.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, g = !0, w = n & Bh ? new ur() : void 0;
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
      if (!Nh(t, function(k, M) {
        if (!Dh(w, M) && (h === k || s(h, k, n, o, r)))
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
function Fh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, s) {
    n[++t] = [s, o];
  }), n;
}
function jh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Vh = 1, Hh = 2, Wh = "[object Boolean]", Uh = "[object Date]", Gh = "[object Error]", Kh = "[object Map]", qh = "[object Number]", Zh = "[object RegExp]", Yh = "[object Set]", Xh = "[object String]", Qh = "[object Symbol]", Jh = "[object ArrayBuffer]", eg = "[object DataView]", pi = Mn ? Mn.prototype : void 0, Kr = pi ? pi.valueOf : void 0;
function tg(e, t, n, o, s, r, a) {
  switch (n) {
    case eg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Jh:
      return !(e.byteLength != t.byteLength || !r(new fi(e), new fi(t)));
    case Wh:
    case Uh:
    case qh:
      return Ma(+e, +t);
    case Gh:
      return e.name == t.name && e.message == t.message;
    case Zh:
    case Xh:
      return e == t + "";
    case Kh:
      var i = Fh;
    case Yh:
      var c = o & Vh;
      if (i || (i = jh), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Hh, a.set(e, t);
      var d = qc(i(e), i(t), o, s, r, a);
      return a.delete(e), d;
    case Qh:
      if (Kr)
        return Kr.call(e) == Kr.call(t);
  }
  return !1;
}
var ng = 1, og = Object.prototype, sg = og.hasOwnProperty;
function rg(e, t, n, o, s, r) {
  var a = n & ng, i = ai(e), c = i.length, u = ai(t), d = u.length;
  if (c != d && !a)
    return !1;
  for (var m = c; m--; ) {
    var g = i[m];
    if (!(a ? g in t : sg.call(t, g)))
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
var ag = 1, mi = "[object Arguments]", hi = "[object Array]", Ks = "[object Object]", lg = Object.prototype, gi = lg.hasOwnProperty;
function ig(e, t, n, o, s, r) {
  var a = bn(e), i = bn(t), c = a ? hi : ro(e), u = i ? hi : ro(t);
  c = c == mi ? Ks : c, u = u == mi ? Ks : u;
  var d = c == Ks, m = u == Ks, g = c == u;
  if (g && ca(e)) {
    if (!ca(t))
      return !1;
    a = !0, d = !1;
  }
  if (g && !d)
    return r || (r = new Zn()), a || Uc(e) ? qc(e, t, n, o, s, r) : tg(e, t, c, n, o, s, r);
  if (!(n & ag)) {
    var w = d && gi.call(e, "__wrapped__"), h = m && gi.call(t, "__wrapped__");
    if (w || h) {
      var b = w ? e.value() : e, C = h ? t.value() : t;
      return r || (r = new Zn()), s(b, C, n, o, r);
    }
  }
  return g ? (r || (r = new Zn()), rg(e, t, n, o, s, r)) : !1;
}
function Cr(e, t, n, o, s) {
  return e === t ? !0 : e == null || t == null || !Ko(e) && !Ko(t) ? e !== e && t !== t : ig(e, t, n, o, Cr, s);
}
var cg = 1, ug = 2;
function dg(e, t, n, o) {
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
      if (!(m === void 0 ? Cr(u, c, cg | ug, o, d) : m))
        return !1;
    }
  }
  return !0;
}
function Zc(e) {
  return e === e && !uo(e);
}
function fg(e) {
  for (var t = Gc(e), n = t.length; n--; ) {
    var o = t[n], s = e[o];
    t[n] = [o, s, Zc(s)];
  }
  return t;
}
function Yc(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function pg(e) {
  var t = fg(e);
  return t.length == 1 && t[0][2] ? Yc(t[0][0], t[0][1]) : function(n) {
    return n === e || dg(n, e, t);
  };
}
function mg(e, t) {
  return e != null && t in Object(e);
}
function hg(e, t, n) {
  t = Ar(t, e);
  for (var o = -1, s = t.length, r = !1; ++o < s; ) {
    var a = Ns(t[o]);
    if (!(r = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return r || ++o != s ? r : (s = e == null ? 0 : e.length, !!s && Pa(s) && Ra(a, s) && (bn(e) || Na(e)));
}
function Xc(e, t) {
  return e != null && hg(e, t, mg);
}
var gg = 1, vg = 2;
function bg(e, t) {
  return Da(e) && Zc(t) ? Yc(Ns(e), t) : function(n) {
    var o = lo(n, e);
    return o === void 0 && o === t ? Xc(n, e) : Cr(t, o, gg | vg);
  };
}
function yg(e) {
  return function(t) {
    return t?.[e];
  };
}
function wg(e) {
  return function(t) {
    return Ba(t, e);
  };
}
function kg(e) {
  return Da(e) ? yg(Ns(e)) : wg(e);
}
function _g(e) {
  return typeof e == "function" ? e : e == null ? Fc : typeof e == "object" ? bn(e) ? bg(e[0], e[1]) : pg(e) : kg(e);
}
var qr = function() {
  return Nn.Date.now();
}, Tg = "Expected a function", Sg = Math.max, Ag = Math.min;
function Cg(e, t, n) {
  var o, s, r, a, i, c, u = 0, d = !1, m = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Tg);
  t = Yl(t) || 0, uo(n) && (d = !!n.leading, m = "maxWait" in n, r = m ? Sg(Yl(n.maxWait) || 0, t) : r, g = "trailing" in n ? !!n.trailing : g);
  function w(O) {
    var R = o, q = s;
    return o = s = void 0, u = O, a = e.apply(q, R), a;
  }
  function h(O) {
    return u = O, i = setTimeout(k, t), d ? w(O) : a;
  }
  function b(O) {
    var R = O - c, q = O - u, F = t - R;
    return m ? Ag(F, r - q) : F;
  }
  function C(O) {
    var R = O - c, q = O - u;
    return c === void 0 || R >= t || R < 0 || m && q >= r;
  }
  function k() {
    var O = qr();
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
    return i === void 0 ? a : M(qr());
  }
  function I() {
    var O = qr(), R = C(O);
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
function Eg(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var s = o - 1;
  return $p(e, _g(t), s);
}
function dr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
function Ss(e, t) {
  return Cr(e, t);
}
function Yn(e) {
  return e == null;
}
function Qc(e) {
  return e === void 0;
}
function xg(e, t, n, o) {
  if (!uo(e))
    return e;
  t = Ar(t, e);
  for (var s = -1, r = t.length, a = r - 1, i = e; i != null && ++s < r; ) {
    var c = Ns(t[s]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (s != a) {
      var d = i[c];
      u = void 0, u === void 0 && (u = uo(d) ? d : Ra(t[s + 1]) ? [] : {});
    }
    zp(i, c, u), i = i[c];
  }
  return e;
}
function Lg(e, t, n) {
  for (var o = -1, s = t.length, r = {}; ++o < s; ) {
    var a = t[o], i = Ba(e, a);
    n(i, a) && xg(r, Ar(a, e), i);
  }
  return r;
}
function Ig(e, t) {
  return Lg(e, t, function(n, o) {
    return Xc(e, o);
  });
}
var Og = mh(function(e, t) {
  return e == null ? {} : Ig(e, t);
});
const In = (e) => e === void 0, $s = (e) => typeof e == "boolean", Pe = (e) => typeof e == "number", hn = (e) => typeof Element > "u" ? !1 : e instanceof Element, $g = (e) => Zt(e) ? !Number.isNaN(Number(e)) : !1;
var Rg = Object.defineProperty, Mg = Object.defineProperties, Pg = Object.getOwnPropertyDescriptors, vi = Object.getOwnPropertySymbols, Ng = Object.prototype.hasOwnProperty, Dg = Object.prototype.propertyIsEnumerable, bi = (e, t, n) => t in e ? Rg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zg = (e, t) => {
  for (var n in t || (t = {}))
    Ng.call(t, n) && bi(e, n, t[n]);
  if (vi)
    for (var n of vi(t))
      Dg.call(t, n) && bi(e, n, t[n]);
  return e;
}, Bg = (e, t) => Mg(e, Pg(t));
function Fg(e, t) {
  var n;
  const o = io();
  return xa(() => {
    o.value = e();
  }, Bg(zg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ea(o);
}
var yi;
const We = typeof window < "u", jg = (e) => typeof e == "string", Jc = () => {
}, pa = We && ((yi = window?.navigator) == null ? void 0 : yi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Fa(e) {
  return typeof e == "function" ? e() : l(e);
}
function Vg(e) {
  return e;
}
function Ds(e) {
  return of() ? (Oc(e), !0) : !1;
}
function Hg(e, t = !0) {
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
    }, Fa(t));
  }
  return o && (s.value = !0, We && c()), Ds(i), {
    isPending: Ea(s),
    start: c,
    stop: i
  };
}
function qn(e) {
  var t;
  const n = Fa(e);
  return (t = n?.$el) != null ? t : n;
}
const Er = We ? window : void 0;
function gn(...e) {
  let t, n, o, s;
  if (jg(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = Er) : [t, n, o, s] = e, !t)
    return Jc;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], a = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, m, g, w) => (d.addEventListener(m, g, w), () => d.removeEventListener(m, g, w)), c = pe(() => [qn(t), Fa(s)], ([d, m]) => {
    a(), d && r.push(...n.flatMap((g) => o.map((w) => i(d, g, w, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), a();
  };
  return Ds(u), u;
}
let wi = !1;
function Wg(e, t, n = {}) {
  const { window: o = Er, ignore: s = [], capture: r = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  pa && !wi && (wi = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", Jc)));
  let i = !0;
  const c = (g) => s.some((w) => {
    if (typeof w == "string")
      return Array.from(o.document.querySelectorAll(w)).some((h) => h === g.target || g.composedPath().includes(h));
    {
      const h = qn(w);
      return h && (g.target === h || g.composedPath().includes(h));
    }
  }), d = [
    gn(o, "click", (g) => {
      const w = qn(e);
      if (!(!w || w === g.target || g.composedPath().includes(w))) {
        if (g.detail === 0 && (i = !c(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: r }),
    gn(o, "pointerdown", (g) => {
      const w = qn(e);
      w && (i = !g.composedPath().includes(w) && !c(g));
    }, { passive: !0 }),
    a && gn(o, "blur", (g) => {
      var w;
      const h = qn(e);
      ((w = o.document.activeElement) == null ? void 0 : w.tagName) === "IFRAME" && !h?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function eu(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), Hg(o, t), n;
}
const ki = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _i = "__vueuse_ssr_handlers__";
ki[_i] = ki[_i] || {};
var Ti = Object.getOwnPropertySymbols, Ug = Object.prototype.hasOwnProperty, Gg = Object.prototype.propertyIsEnumerable, Kg = (e, t) => {
  var n = {};
  for (var o in e)
    Ug.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ti)
    for (var o of Ti(e))
      t.indexOf(o) < 0 && Gg.call(e, o) && (n[o] = e[o]);
  return n;
};
function xn(e, t, n = {}) {
  const o = n, { window: s = Er } = o, r = Kg(o, ["window"]);
  let a;
  const i = eu(() => s && "ResizeObserver" in s), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => qn(e), (m) => {
    c(), i.value && s && m && (a = new ResizeObserver(t), a.observe(m, r));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return Ds(d), {
    isSupported: i,
    stop: d
  };
}
var Si = Object.getOwnPropertySymbols, qg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, Yg = (e, t) => {
  var n = {};
  for (var o in e)
    qg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Si)
    for (var o of Si(e))
      t.indexOf(o) < 0 && Zg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Xg(e, t, n = {}) {
  const o = n, { window: s = Er } = o, r = Yg(o, ["window"]);
  let a;
  const i = eu(() => s && "MutationObserver" in s), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => qn(e), (m) => {
    c(), i.value && s && m && (a = new MutationObserver(t), a.observe(m, r));
  }, { immediate: !0 }), d = () => {
    c(), u();
  };
  return Ds(d), {
    isSupported: i,
    stop: d
  };
}
var Ai;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ai || (Ai = {}));
var Qg = Object.defineProperty, Ci = Object.getOwnPropertySymbols, Jg = Object.prototype.hasOwnProperty, ev = Object.prototype.propertyIsEnumerable, Ei = (e, t, n) => t in e ? Qg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, tv = (e, t) => {
  for (var n in t || (t = {}))
    Jg.call(t, n) && Ei(e, n, t[n]);
  if (Ci)
    for (var n of Ci(t))
      ev.call(t, n) && Ei(e, n, t[n]);
  return e;
};
const nv = {
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
tv({
  linear: Vg
}, nv);
class ov extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ja(e, t) {
  throw new ov(`[${e}] ${t}`);
}
const xi = {
  current: 0
}, Li = P(0), tu = 2e3, Ii = Symbol("elZIndexContextKey"), nu = Symbol("zIndexContextKey"), Va = (e) => {
  const t = xt() ? Le(Ii, xi) : xi, n = e || (xt() ? Le(nu, void 0) : void 0), o = A(() => {
    const a = l(n);
    return Pe(a) ? a : tu;
  }), s = A(() => o.value + Li.value), r = () => (t.current++, Li.value = t.current, s.value);
  return !We && Le(Ii), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: r
  };
};
var sv = {
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
const rv = (e) => (t, n) => av(t, n, l(e)), av = (e, t, n) => lo(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var r;
  return `${(r = t?.[s]) != null ? r : `{${s}}`}`;
}), lv = (e) => {
  const t = A(() => l(e).name), n = Qt(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: rv(e)
  };
}, ou = Symbol("localeContextKey"), xr = (e) => {
  const t = e || Le(ou, P());
  return lv(A(() => t.value || sv));
}, su = "__epPropKey", he = (e) => e, iv = (e) => en(e) && !!e[su], Lr = (e, t) => {
  if (!en(e) || iv(e))
    return e;
  const { values: n, required: o, default: s, type: r, validator: a } = e, c = {
    type: r,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), Ul(e, "default") && m.push(s), d || (d = m.includes(u))), a && (d || (d = a(u))), !d && m.length > 0) {
        const g = [...new Set(m)].map((w) => JSON.stringify(w)).join(", ");
        sf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [su]: !0
  };
  return Ul(e, "default") && (c.default = s), c;
}, Ne = (e) => dr(Object.entries(e).map(([t, n]) => [
  t,
  Lr(n, t)
])), ru = ["", "default", "small", "large"], Ir = Lr({
  type: String,
  values: ru,
  required: !1
}), au = Symbol("size"), cv = () => {
  const e = Le(au, {});
  return A(() => l(e.size) || "");
}, lu = Symbol("emptyValuesContextKey"), uv = ["", void 0, null], dv = void 0, iu = Ne({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => nt(e) ? !e() : !e
  }
}), fv = (e, t) => {
  const n = xt() ? Le(lu, P({})) : P({}), o = A(() => e.emptyValues || n.value.emptyValues || uv), s = A(() => nt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : nt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : dv), r = (a) => o.value.includes(a);
  return o.value.includes(s.value), {
    emptyValues: o,
    valueOnClear: s,
    isEmptyValue: r
  };
}, Oi = (e) => Object.keys(e), pr = P();
function Ha(e, t = void 0) {
  const n = xt() ? Le(Pc, pr) : pr;
  return e ? A(() => {
    var o, s;
    return (s = (o = n.value) == null ? void 0 : o[e]) != null ? s : t;
  }) : n;
}
function cu(e, t) {
  const n = Ha(), o = et(e, A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || _s;
  })), s = xr(A(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), r = Va(A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || tu;
  })), a = A(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return uu(A(() => l(n) || {})), {
    ns: o,
    locale: s,
    zIndex: r,
    size: a
  };
}
const uu = (e, t, n = !1) => {
  var o;
  const s = !!xt(), r = s ? Ha() : void 0, a = (o = void 0) != null ? o : s ? vn : void 0;
  if (!a)
    return;
  const i = A(() => {
    const c = l(e);
    return r?.value ? pv(r.value, c) : c;
  });
  return a(Pc, i), a(ou, A(() => i.value.locale)), a(Nc, A(() => i.value.namespace)), a(nu, A(() => i.value.zIndex)), a(au, {
    size: A(() => i.value.size || "")
  }), a(lu, A(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !pr.value) && (pr.value = i.value), i;
}, pv = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Oi(e), ...Oi(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
}, vt = "update:modelValue", qo = "change", Go = "input";
var je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
const du = (e = "") => e.split(" ").filter((t) => !!t.trim()), $i = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, mv = (e, t) => {
  !e || !t.trim() || e.classList.add(...du(t));
}, hv = (e, t) => {
  !e || !t.trim() || e.classList.remove(...du(t));
}, gv = (e, t) => {
  var n;
  if (!We || !e)
    return "";
  let o = Vf(t);
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
  if (Pe(e) || $g(e))
    return `${e}${t}`;
  if (Zt(e))
    return e;
}
let qs;
const vv = (e) => {
  var t;
  if (!We)
    return 0;
  if (qs !== void 0)
    return qs;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const s = document.createElement("div");
  s.style.width = "100%", n.appendChild(s);
  const r = s.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), qs = o - r, qs;
};
function bv(e, t) {
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
}, fu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), pu = (e) => (e.install = co, e), yv = Ne({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), wv = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), kv = /* @__PURE__ */ oe({
  ...wv,
  props: yv,
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
var _v = /* @__PURE__ */ je(kv, [["__file", "icon.vue"]]);
const Nt = wn(_v);
/*! Element Plus Icons Vue v2.3.1 */
var Tv = /* @__PURE__ */ oe({
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
}), mu = Tv, Sv = /* @__PURE__ */ oe({
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
}), Av = Sv, Cv = /* @__PURE__ */ oe({
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
}), Ev = Cv, xv = /* @__PURE__ */ oe({
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
}), Lv = xv, Iv = /* @__PURE__ */ oe({
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
}), Wa = Iv, Ov = /* @__PURE__ */ oe({
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
}), mr = Ov, $v = /* @__PURE__ */ oe({
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
}), Rv = $v, Mv = /* @__PURE__ */ oe({
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
}), Pv = Mv, Nv = /* @__PURE__ */ oe({
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
}), Dv = Nv, zv = /* @__PURE__ */ oe({
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
}), Bv = zv, Fv = /* @__PURE__ */ oe({
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
}), jv = Fv, Vv = /* @__PURE__ */ oe({
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
}), Hv = Vv, Wv = /* @__PURE__ */ oe({
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
}), Uv = Wv, Gv = /* @__PURE__ */ oe({
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
}), Kv = Gv;
const So = he([
  String,
  Object,
  Function
]), hu = {
  Close: mr
}, qv = {
  Close: mr
}, hr = {
  success: Hv,
  warning: Kv,
  error: Lv,
  info: Pv
}, gu = {
  validating: Dv,
  success: Ev,
  error: Wa
}, vu = () => We && /firefox/i.test(window.navigator.userAgent);
let Vt;
const Zv = {
  height: "0",
  visibility: "hidden",
  overflow: vu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Yv = [
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
function Xv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Yv.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: s, boxSizing: n };
}
function Ri(e, t = 1, n) {
  var o;
  Vt || (Vt = document.createElement("textarea"), document.body.appendChild(Vt));
  const { paddingSize: s, borderSize: r, boxSizing: a, contextStyle: i } = Xv(e);
  i.forEach(([m, g]) => Vt?.style.setProperty(m, g)), Object.entries(Zv).forEach(([m, g]) => Vt?.style.setProperty(m, g, "important")), Vt.value = e.value || e.placeholder || "";
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
const bu = (e) => e, Qv = Ne({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), rs = (e) => Og(Qv, e), Jv = Ne({
  id: {
    type: String,
    default: void 0
  },
  size: Ir,
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
    default: () => bu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...rs(["ariaLabel"])
}), e0 = {
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
}, t0 = ["class", "style"], n0 = /^on[A-Z]/, o0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = A(() => (n?.value || []).concat(t0)), s = xt();
  return s ? A(() => {
    var r;
    return dr(Object.entries((r = s.proxy) == null ? void 0 : r.$attrs).filter(([a]) => !o.value.includes(a) && !(t && n0.test(a))));
  }) : A(() => ({}));
}, Ua = Symbol("formContextKey"), gr = Symbol("formItemContextKey"), Mi = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, s0 = Symbol("elIdInjection"), yu = () => xt() ? Le(s0, Mi) : Mi, Zo = (e) => {
  const t = yu(), n = $a();
  return Fg(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ga = () => {
  const e = Le(Ua, void 0), t = Le(gr, void 0);
  return {
    form: e,
    formItem: t
  };
}, wu = (e, {
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
    r = pe([Kn(e, "id"), n], ([i, c]) => {
      const u = i ?? (c ? void 0 : Zo().value);
      u !== s.value && (t?.removeInputId && (s.value && t.removeInputId(s.value), !o?.value && !c && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), La(() => {
    r && r(), t?.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: a,
    inputId: s
  };
}, ku = (e) => {
  const t = xt();
  return A(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, Or = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : ku("size"), s = t.global ? n : cv(), r = t.form ? { size: void 0 } : Le(Ua, void 0), a = t.formItem ? { size: void 0 } : Le(gr, void 0);
  return A(() => o.value || l(e) || a?.size || r?.size || s.value || "");
}, _u = (e) => {
  const t = ku("disabled"), n = Le(Ua, void 0);
  return A(() => t.value || l(e) || n?.disabled || !1);
};
function Tu(e, {
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
const r0 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Su({
  afterComposition: e,
  emit: t
}) {
  const n = P(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, s = (i) => {
    var c;
    t?.("compositionupdate", i);
    const u = (c = i.target) == null ? void 0 : c.value, d = u[u.length - 1] || "";
    n.value = !r0(d);
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
function a0(e) {
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
const l0 = "ElInput", i0 = oe({
  name: l0,
  inheritAttrs: !1
}), c0 = /* @__PURE__ */ oe({
  ...i0,
  props: Jv,
  emits: e0,
  setup(e, { expose: t, emit: n }) {
    const o = e, s = rf(), r = o0(), a = $c(), i = A(() => [
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
      h.is("focus", q.value)
    ]), { form: u, formItem: d } = Ga(), { inputId: m } = wu(o, {
      formItemContext: d
    }), g = Or(), w = _u(), h = et("input"), b = et("textarea"), C = io(), k = io(), M = P(!1), j = P(!1), L = P(), I = io(o.inputStyle), O = A(() => C.value || k.value), { wrapperRef: R, isFocused: q, handleFocus: F, handleBlur: ne } = Tu(O, {
      beforeFocus() {
        return w.value;
      },
      afterBlur() {
        var K;
        o.validateEvent && ((K = d?.validate) == null || K.call(d, "blur").catch((ke) => void 0));
      }
    }), H = A(() => {
      var K;
      return (K = u?.statusIcon) != null ? K : !1;
    }), re = A(() => d?.validateState || ""), de = A(() => re.value && gu[re.value]), ce = A(() => j.value ? Uv : Rv), $ = A(() => [
      s.style
    ]), V = A(() => [
      o.inputStyle,
      I.value,
      { resize: o.resize }
    ]), B = A(() => Yn(o.modelValue) ? "" : String(o.modelValue)), ue = A(() => o.clearable && !w.value && !o.readonly && !!B.value && (q.value || M.value)), fe = A(() => o.showPassword && !w.value && !!B.value && (!!B.value || q.value)), Te = A(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !w.value && !o.readonly && !o.showPassword), De = A(() => B.value.length), Ue = A(() => !!Te.value && De.value > Number(o.maxlength)), ve = A(() => !!a.suffix || !!o.suffixIcon || ue.value || o.showPassword || Te.value || !!re.value && H.value), [W, U] = a0(C);
    xn(k, (K) => {
      if (ee(), !Te.value || o.resize !== "both")
        return;
      const ke = K[0], { width: dt } = ke.contentRect;
      L.value = {
        right: `calc(100% - ${dt + 15 + 6}px)`
      };
    });
    const me = () => {
      const { type: K, autosize: ke } = o;
      if (!(!We || K !== "textarea" || !k.value))
        if (ke) {
          const dt = en(ke) ? ke.minRows : void 0, xe = en(ke) ? ke.maxRows : void 0, kt = Ri(k.value, dt, xe);
          I.value = {
            overflowY: "hidden",
            ...kt
          }, Ze(() => {
            k.value.offsetHeight, I.value = kt;
          });
        } else
          I.value = {
            minHeight: Ri(k.value).minHeight
          };
    }, ee = ((K) => {
      let ke = !1;
      return () => {
        var dt;
        if (ke || !o.autosize)
          return;
        ((dt = k.value) == null ? void 0 : dt.offsetParent) === null || (K(), ke = !0);
      };
    })(me), X = () => {
      const K = O.value, ke = o.formatter ? o.formatter(B.value) : B.value;
      !K || K.value === ke || (K.value = ke);
    }, Ve = async (K) => {
      W();
      let { value: ke } = K.target;
      if (o.formatter && o.parser && (ke = o.parser(ke)), !ut.value) {
        if (ke === B.value) {
          X();
          return;
        }
        n(vt, ke), n(Go, ke), await Ze(), X(), U();
      }
    }, ze = (K) => {
      let { value: ke } = K.target;
      o.formatter && o.parser && (ke = o.parser(ke)), n(qo, ke);
    }, {
      isComposing: ut,
      handleCompositionStart: Ge,
      handleCompositionUpdate: Lt,
      handleCompositionEnd: bt
    } = Su({ emit: n, afterComposition: Ve }), Ke = () => {
      W(), j.value = !j.value, setTimeout(U);
    }, yt = () => {
      var K;
      return (K = O.value) == null ? void 0 : K.focus();
    }, st = () => {
      var K;
      return (K = O.value) == null ? void 0 : K.blur();
    }, wt = (K) => {
      M.value = !1, n("mouseleave", K);
    }, Xe = (K) => {
      M.value = !0, n("mouseenter", K);
    }, ct = (K) => {
      n("keydown", K);
    }, It = () => {
      var K;
      (K = O.value) == null || K.select();
    }, Bt = () => {
      n(vt, ""), n(qo, ""), n("clear"), n(Go, "");
    };
    return pe(() => o.modelValue, () => {
      var K;
      Ze(() => me()), o.validateEvent && ((K = d?.validate) == null || K.call(d, "change").catch((ke) => void 0));
    }), pe(B, () => X()), pe(() => o.type, async () => {
      await Ze(), X(), me();
    }), ot(() => {
      !o.formatter && o.parser, X(), Ze(me);
    }), t({
      input: C,
      textarea: k,
      ref: O,
      textareaStyle: V,
      autosize: Kn(o, "autosize"),
      isComposing: ut,
      focus: yt,
      blur: st,
      select: It,
      clear: Bt,
      resizeTextarea: me
    }), (K, ke) => (S(), D("div", {
      class: z([
        l(i),
        {
          [l(h).bm("group", "append")]: K.$slots.append,
          [l(h).bm("group", "prepend")]: K.$slots.prepend
        }
      ]),
      style: mt(l($)),
      onMouseenter: Xe,
      onMouseleave: wt
    }, [
      Y(" input "),
      K.type !== "textarea" ? (S(), D(at, { key: 0 }, [
        Y(" prepend slot "),
        K.$slots.prepend ? (S(), D("div", {
          key: 0,
          class: z(l(h).be("group", "prepend"))
        }, [
          ie(K.$slots, "prepend")
        ], 2)) : Y("v-if", !0),
        f("div", {
          ref_key: "wrapperRef",
          ref: R,
          class: z(l(c))
        }, [
          Y(" prefix slot "),
          K.$slots.prefix || K.prefixIcon ? (S(), D("span", {
            key: 0,
            class: z(l(h).e("prefix"))
          }, [
            f("span", {
              class: z(l(h).e("prefix-inner"))
            }, [
              ie(K.$slots, "prefix"),
              K.prefixIcon ? (S(), se(l(Nt), {
                key: 0,
                class: z(l(h).e("icon"))
              }, {
                default: J(() => [
                  (S(), se(Jt(K.prefixIcon)))
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
            minlength: K.minlength,
            maxlength: K.maxlength,
            type: K.showPassword ? j.value ? "text" : "password" : K.type,
            disabled: l(w),
            readonly: K.readonly,
            autocomplete: K.autocomplete,
            tabindex: K.tabindex,
            "aria-label": K.ariaLabel,
            placeholder: K.placeholder,
            style: K.inputStyle,
            form: K.form,
            autofocus: K.autofocus,
            role: K.containerRole,
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
                ie(K.$slots, "suffix"),
                K.suffixIcon ? (S(), se(l(Nt), {
                  key: 0,
                  class: z(l(h).e("icon"))
                }, {
                  default: J(() => [
                    (S(), se(Jt(K.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Y("v-if", !0)
              ], 64)) : Y("v-if", !0),
              l(ue) ? (S(), se(l(Nt), {
                key: 1,
                class: z([l(h).e("icon"), l(h).e("clear")]),
                onMousedown: qe(l(co), ["prevent"]),
                onClick: Bt
              }, {
                default: J(() => [
                  _(l(Wa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Y("v-if", !0),
              l(fe) ? (S(), se(l(Nt), {
                key: 2,
                class: z([l(h).e("icon"), l(h).e("password")]),
                onClick: Ke
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
                }, E(l(De)) + " / " + E(K.maxlength), 3)
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
        K.$slots.append ? (S(), D("div", {
          key: 1,
          class: z(l(h).be("group", "append"))
        }, [
          ie(K.$slots, "append")
        ], 2)) : Y("v-if", !0)
      ], 64)) : (S(), D(at, { key: 1 }, [
        Y(" textarea "),
        f("textarea", ko({
          id: l(m),
          ref_key: "textarea",
          ref: k,
          class: [l(b).e("inner"), l(h).is("focus", l(q))]
        }, l(r), {
          minlength: K.minlength,
          maxlength: K.maxlength,
          tabindex: K.tabindex,
          disabled: l(w),
          readonly: K.readonly,
          autocomplete: K.autocomplete,
          style: l(V),
          "aria-label": K.ariaLabel,
          placeholder: K.placeholder,
          form: K.form,
          autofocus: K.autofocus,
          rows: K.rows,
          role: K.containerRole,
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
        }, E(l(De)) + " / " + E(K.maxlength), 7)) : Y("v-if", !0)
      ], 64))
    ], 38));
  }
});
var u0 = /* @__PURE__ */ je(c0, [["__file", "input.vue"]]);
const d0 = wn(u0), Bo = 4, f0 = {
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
}, p0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ka = Symbol("scrollbarContextKey"), m0 = Ne({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), h0 = "Thumb", g0 = /* @__PURE__ */ oe({
  __name: "thumb",
  props: m0,
  setup(e) {
    const t = e, n = Le(Ka), o = et("scrollbar");
    n || ja(h0, "can not inject scrollbar context");
    const s = P(), r = P(), a = P({}), i = P(!1);
    let c = !1, u = !1, d = We ? document.onselectstart : null;
    const m = A(() => f0[t.vertical ? "vertical" : "horizontal"]), g = A(() => p0({
      size: t.size,
      move: t.move,
      bar: m.value
    })), w = A(() => s.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / r.value[m.value.offset]), h = (O) => {
      var R;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (R = window.getSelection()) == null || R.removeAllRanges(), C(O);
      const q = O.currentTarget;
      q && (a.value[m.value.axis] = q[m.value.offset] - (O[m.value.client] - q.getBoundingClientRect()[m.value.direction]));
    }, b = (O) => {
      if (!r.value || !s.value || !n.wrapElement)
        return;
      const R = Math.abs(O.target.getBoundingClientRect()[m.value.direction] - O[m.value.client]), q = r.value[m.value.offset] / 2, F = (R - q) * 100 * w.value / s.value[m.value.offset];
      n.wrapElement[m.value.scroll] = F * n.wrapElement[m.value.scrollSize] / 100;
    }, C = (O) => {
      O.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", k), document.addEventListener("mouseup", M), d = document.onselectstart, document.onselectstart = () => !1;
    }, k = (O) => {
      if (!s.value || !r.value || c === !1)
        return;
      const R = a.value[m.value.axis];
      if (!R)
        return;
      const q = (s.value.getBoundingClientRect()[m.value.direction] - O[m.value.client]) * -1, F = r.value[m.value.offset] - R, ne = (q - F) * 100 * w.value / s.value[m.value.offset];
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
    return gn(Kn(n, "scrollbarElement"), "mousemove", j), gn(Kn(n, "scrollbarElement"), "mouseleave", L), (O, R) => (S(), se(Eo, {
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
var Pi = /* @__PURE__ */ je(g0, [["__file", "thumb.vue"]]);
const v0 = Ne({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), b0 = /* @__PURE__ */ oe({
  __name: "bar",
  props: v0,
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
      _(Pi, {
        move: s.value,
        ratio: u.value,
        size: a.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _(Pi, {
        move: r.value,
        ratio: c.value,
        size: i.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var y0 = /* @__PURE__ */ je(b0, [["__file", "bar.vue"]]);
const w0 = Ne({
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
}), k0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Pe)
}, _0 = "ElScrollbar", T0 = oe({
  name: _0
}), S0 = /* @__PURE__ */ oe({
  ...T0,
  props: w0,
  emits: k0,
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
    })), af(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = c);
    }), ot(() => {
      o.native || Ze(() => {
        L();
      });
    }), Rc(() => L()), t({
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
      I.native ? Y("v-if", !0) : (S(), se(y0, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: I.always,
        "min-size": I.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var A0 = /* @__PURE__ */ je(S0, [["__file", "scrollbar.vue"]]);
const C0 = wn(A0), qa = Symbol("popper"), Au = Symbol("popperContent"), E0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Cu = Ne({
  role: {
    type: String,
    values: E0,
    default: "tooltip"
  }
}), x0 = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), L0 = /* @__PURE__ */ oe({
  ...x0,
  props: Cu,
  setup(e, { expose: t }) {
    const n = e, o = P(), s = P(), r = P(), a = P(), i = A(() => n.role), c = {
      triggerRef: o,
      popperInstanceRef: s,
      contentRef: r,
      referenceRef: a,
      role: i
    };
    return t(c), vn(qa, c), (u, d) => ie(u.$slots, "default");
  }
});
var I0 = /* @__PURE__ */ je(L0, [["__file", "popper.vue"]]);
const Eu = Ne({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), O0 = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), $0 = /* @__PURE__ */ oe({
  ...O0,
  props: Eu,
  setup(e, { expose: t }) {
    const n = e, o = et("popper"), { arrowOffset: s, arrowRef: r, arrowStyle: a } = Le(Au, void 0);
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
var R0 = /* @__PURE__ */ je($0, [["__file", "arrow.vue"]]);
const xu = Ne({
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
}), Lu = Symbol("elForwardRef"), M0 = (e) => {
  vn(Lu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, P0 = (e) => ({
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
}, N0 = "ElOnlyChild", D0 = oe({
  name: N0,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const s = Le(Lu), r = P0((o = s?.setForwardRef) != null ? o : co);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i || i.length > 1)
        return null;
      const c = Iu(i);
      return c ? lt(lf(c, n), [[r]]) : null;
    };
  }
});
function Iu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (en(n))
      switch (n.type) {
        case uf:
          continue;
        case cf:
        case "svg":
          return Ni(n);
        case at:
          return Iu(n.children);
        default:
          return n;
      }
    return Ni(n);
  }
  return null;
}
function Ni(e) {
  const t = et("only-child");
  return _("span", {
    class: t.e("content")
  }, [e]);
}
const z0 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), B0 = /* @__PURE__ */ oe({
  ...z0,
  props: xu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: s } = Le(qa, void 0);
    M0(s);
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
        m && (s.value = qn(m));
      }, {
        immediate: !0
      }), pe(s, (m, g) => {
        u?.(), u = void 0, hn(m) && (d.forEach((w) => {
          var h;
          const b = n[w];
          b && (m.addEventListener(w.slice(2).toLowerCase(), b), (h = g?.removeEventListener) == null || h.call(g, w.slice(2).toLowerCase(), b));
        }), ma(m) && (u = pe([r, a, i, c], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, b) => {
            Yn(w[b]) ? m.removeAttribute(h) : m.setAttribute(h, w[b]);
          });
        }, { immediate: !0 }))), hn(g) && ma(g) && [
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
    }), (m, g) => m.virtualTriggering ? Y("v-if", !0) : (S(), se(l(D0), ko({ key: 0 }, m.$attrs, {
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
var F0 = /* @__PURE__ */ je(B0, [["__file", "trigger.vue"]]);
const Zr = "focus-trap.focus-after-trapped", Yr = "focus-trap.focus-after-released", j0 = "focus-trap.focusout-prevented", Di = {
  cancelable: !0,
  bubbles: !1
}, V0 = {
  cancelable: !0,
  bubbles: !1
}, zi = "focusAfterTrapped", Bi = "focusAfterReleased", Ou = Symbol("elFocusTrap"), Za = P(), $r = P(0), Ya = P(0);
let Zs = 0;
const $u = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Fi = (e, t) => {
  for (const n of e)
    if (!H0(n, t))
      return n;
}, H0 = (e, t) => {
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
}, W0 = (e) => {
  const t = $u(e), n = Fi(t, e), o = Fi(t.reverse(), e);
  return [n, o];
}, U0 = (e) => e instanceof HTMLInputElement && "select" in e, Un = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    hn(e) && !ma(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Ya.value = window.performance.now(), e !== n && U0(e) && t && e.select(), hn(e) && o && e.removeAttribute("tabindex");
  }
};
function ji(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const G0 = () => {
  let e = [];
  return {
    push: (o) => {
      const s = e[0];
      s && o !== s && s.pause(), e = ji(e, o), e.unshift(o);
    },
    remove: (o) => {
      var s, r;
      e = ji(e, o), (r = (s = e[0]) == null ? void 0 : s.resume) == null || r.call(s);
    }
  };
}, K0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Un(o, t), document.activeElement !== n)
      return;
}, Vi = G0(), q0 = () => $r.value > Ya.value, Ys = () => {
  Za.value = "pointer", $r.value = window.performance.now();
}, Hi = () => {
  Za.value = "keyboard", $r.value = window.performance.now();
}, Z0 = () => (ot(() => {
  Zs === 0 && (document.addEventListener("mousedown", Ys), document.addEventListener("touchstart", Ys), document.addEventListener("keydown", Hi)), Zs++;
}), yn(() => {
  Zs--, Zs <= 0 && (document.removeEventListener("mousedown", Ys), document.removeEventListener("touchstart", Ys), document.removeEventListener("keydown", Hi));
}), {
  focusReason: Za,
  lastUserFocusTimestamp: $r,
  lastAutomatedFocusTimestamp: Ya
}), Xs = (e) => new CustomEvent(j0, {
  ...V0,
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
const Wi = (e) => {
  e.code === On.esc && Wo.forEach((t) => t(e));
}, Y0 = (e) => {
  ot(() => {
    Wo.length === 0 && document.addEventListener("keydown", Wi), We && Wo.push(e);
  }), yn(() => {
    Wo = Wo.filter((t) => t !== e), Wo.length === 0 && We && document.removeEventListener("keydown", Wi);
  });
}, X0 = oe({
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
    zi,
    Bi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, s;
    const { focusReason: r } = Z0();
    Y0((h) => {
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
        const q = j, [F, ne] = W0(q);
        if (F && ne) {
          if (!L && R === ne) {
            const re = Xs({
              focusReason: r.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), I && Un(F, !0));
          } else if (L && [F, q].includes(R)) {
            const re = Xs({
              focusReason: r.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), I && Un(ne, !0));
          }
        } else if (R === q) {
          const re = Xs({
            focusReason: r.value
          });
          t("focusout-prevented", re), re.defaultPrevented || h.preventDefault();
        }
      }
    };
    vn(Ou, {
      focusTrapRef: n,
      onKeydown: i
    }), pe(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), pe([n], ([h], [b]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", d), b.removeEventListener("focusout", m));
    });
    const c = (h) => {
      t(zi, h);
    }, u = (h) => t(Bi, h), d = (h) => {
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
        Vi.push(a);
        const b = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = b, !h.contains(b)) {
          const k = new Event(Zr, Di);
          h.addEventListener(Zr, c), h.dispatchEvent(k), k.defaultPrevented || Ze(() => {
            let M = e.focusStartEl;
            Zt(M) || (Un(M), document.activeElement !== M && (M = "first")), M === "first" && K0($u(h), !0), (document.activeElement === b || M === "container") && Un(h);
          });
        }
      }
    }
    function w() {
      const h = l(n);
      if (h) {
        h.removeEventListener(Zr, c);
        const b = new CustomEvent(Yr, {
          ...Di,
          detail: {
            focusReason: r.value
          }
        });
        h.addEventListener(Yr, u), h.dispatchEvent(b), !b.defaultPrevented && (r.value == "keyboard" || !q0() || h.contains(document.activeElement)) && Un(o ?? document.body), h.removeEventListener(Yr, u), Vi.remove(a);
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
function Q0(e, t, n, o, s, r) {
  return ie(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Ru = /* @__PURE__ */ je(X0, [["render", Q0], ["__file", "focus-trap.vue"]]), Ht = "top", nn = "bottom", on = "right", Wt = "left", Xa = "auto", zs = [Ht, nn, on, Wt], Yo = "start", Rs = "end", J0 = "clippingParents", Mu = "viewport", ds = "popper", e1 = "reference", Ui = zs.reduce(function(e, t) {
  return e.concat([t + "-" + Yo, t + "-" + Rs]);
}, []), Rr = [].concat(zs, [Xa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yo, t + "-" + Rs]);
}, []), t1 = "beforeRead", n1 = "read", o1 = "afterRead", s1 = "beforeMain", r1 = "main", a1 = "afterMain", l1 = "beforeWrite", i1 = "write", c1 = "afterWrite", u1 = [t1, n1, o1, s1, r1, a1, l1, i1, c1];
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
function Qa(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Yt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function d1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, s = t.attributes[n] || {}, r = t.elements[n];
    !tn(r) || !Pn(r) || (Object.assign(r.style, o), Object.keys(s).forEach(function(a) {
      var i = s[a];
      i === !1 ? r.removeAttribute(a) : r.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function f1(e) {
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
var Pu = { name: "applyStyles", enabled: !0, phase: "write", fn: d1, effect: f1, requires: ["computeStyles"] };
function $n(e) {
  return e.split("-")[0];
}
var wo = Math.max, vr = Math.min, Xo = Math.round;
function ha() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Nu() {
  return !/^((?!chrome|android).)*safari/i.test(ha());
}
function Qo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), s = 1, r = 1;
  t && tn(e) && (s = e.offsetWidth > 0 && Xo(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Xo(o.height) / e.offsetHeight || 1);
  var a = Ao(e) ? Yt(e) : window, i = a.visualViewport, c = !Nu() && n, u = (o.left + (c && i ? i.offsetLeft : 0)) / s, d = (o.top + (c && i ? i.offsetTop : 0)) / r, m = o.width / s, g = o.height / r;
  return { width: m, height: g, top: d, right: u + m, bottom: d + g, left: u, x: u, y: d };
}
function Ja(e) {
  var t = Qo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Du(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Qa(n)) {
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
function p1(e) {
  return ["table", "td", "th"].indexOf(Pn(e)) >= 0;
}
function po(e) {
  return ((Ao(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mr(e) {
  return Pn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qa(e) ? e.host : null) || po(e);
}
function Gi(e) {
  return !tn(e) || Xn(e).position === "fixed" ? null : e.offsetParent;
}
function m1(e) {
  var t = /firefox/i.test(ha()), n = /Trident/i.test(ha());
  if (n && tn(e)) {
    var o = Xn(e);
    if (o.position === "fixed") return null;
  }
  var s = Mr(e);
  for (Qa(s) && (s = s.host); tn(s) && ["html", "body"].indexOf(Pn(s)) < 0; ) {
    var r = Xn(s);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function Bs(e) {
  for (var t = Yt(e), n = Gi(e); n && p1(n) && Xn(n).position === "static"; ) n = Gi(n);
  return n && (Pn(n) === "html" || Pn(n) === "body" && Xn(n).position === "static") ? t : n || m1(e) || t;
}
function el(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function As(e, t, n) {
  return wo(e, vr(t, n));
}
function h1(e, t, n) {
  var o = As(e, t, n);
  return o > n ? n : o;
}
function zu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Bu(e) {
  return Object.assign({}, zu(), e);
}
function Fu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var g1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Bu(typeof e != "number" ? e : Fu(e, zs));
};
function v1(e) {
  var t, n = e.state, o = e.name, s = e.options, r = n.elements.arrow, a = n.modifiersData.popperOffsets, i = $n(n.placement), c = el(i), u = [Wt, on].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!r || !a)) {
    var m = g1(s.padding, n), g = Ja(r), w = c === "y" ? Ht : Wt, h = c === "y" ? nn : on, b = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d], C = a[c] - n.rects.reference[c], k = Bs(r), M = k ? c === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, j = b / 2 - C / 2, L = m[w], I = M - g[d] - m[h], O = M / 2 - g[d] / 2 + j, R = As(L, O, I), q = c;
    n.modifiersData[o] = (t = {}, t[q] = R, t.centerOffset = R - O, t);
  }
}
function b1(e) {
  var t = e.state, n = e.options, o = n.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || Du(t.elements.popper, s) && (t.elements.arrow = s));
}
var y1 = { name: "arrow", enabled: !0, phase: "main", fn: v1, effect: b1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jo(e) {
  return e.split("-")[1];
}
var w1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function k1(e, t) {
  var n = e.x, o = e.y, s = t.devicePixelRatio || 1;
  return { x: Xo(n * s) / s || 0, y: Xo(o * s) / s || 0 };
}
function Ki(e) {
  var t, n = e.popper, o = e.popperRect, s = e.placement, r = e.variation, a = e.offsets, i = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = a.x, w = g === void 0 ? 0 : g, h = a.y, b = h === void 0 ? 0 : h, C = typeof d == "function" ? d({ x: w, y: b }) : { x: w, y: b };
  w = C.x, b = C.y;
  var k = a.hasOwnProperty("x"), M = a.hasOwnProperty("y"), j = Wt, L = Ht, I = window;
  if (u) {
    var O = Bs(n), R = "clientHeight", q = "clientWidth";
    if (O === Yt(n) && (O = po(n), Xn(O).position !== "static" && i === "absolute" && (R = "scrollHeight", q = "scrollWidth")), O = O, s === Ht || (s === Wt || s === on) && r === Rs) {
      L = nn;
      var F = m && O === I && I.visualViewport ? I.visualViewport.height : O[R];
      b -= F - o.height, b *= c ? 1 : -1;
    }
    if (s === Wt || (s === Ht || s === nn) && r === Rs) {
      j = on;
      var ne = m && O === I && I.visualViewport ? I.visualViewport.width : O[q];
      w -= ne - o.width, w *= c ? 1 : -1;
    }
  }
  var H = Object.assign({ position: i }, u && w1), re = d === !0 ? k1({ x: w, y: b }, Yt(n)) : { x: w, y: b };
  if (w = re.x, b = re.y, c) {
    var de;
    return Object.assign({}, H, (de = {}, de[L] = M ? "0" : "", de[j] = k ? "0" : "", de.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", de));
  }
  return Object.assign({}, H, (t = {}, t[L] = M ? b + "px" : "", t[j] = k ? w + "px" : "", t.transform = "", t));
}
function _1(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, s = o === void 0 ? !0 : o, r = n.adaptive, a = r === void 0 ? !0 : r, i = n.roundOffsets, c = i === void 0 ? !0 : i, u = { placement: $n(t.placement), variation: Jo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ki(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ki(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ju = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: _1, data: {} }, Qs = { passive: !0 };
function T1(e) {
  var t = e.state, n = e.instance, o = e.options, s = o.scroll, r = s === void 0 ? !0 : s, a = o.resize, i = a === void 0 ? !0 : a, c = Yt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Qs);
  }), i && c.addEventListener("resize", n.update, Qs), function() {
    r && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Qs);
    }), i && c.removeEventListener("resize", n.update, Qs);
  };
}
var Vu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: T1, data: {} }, S1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function or(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return S1[t];
  });
}
var A1 = { start: "end", end: "start" };
function qi(e) {
  return e.replace(/start|end/g, function(t) {
    return A1[t];
  });
}
function tl(e) {
  var t = Yt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function nl(e) {
  return Qo(po(e)).left + tl(e).scrollLeft;
}
function C1(e, t) {
  var n = Yt(e), o = po(e), s = n.visualViewport, r = o.clientWidth, a = o.clientHeight, i = 0, c = 0;
  if (s) {
    r = s.width, a = s.height;
    var u = Nu();
    (u || !u && t === "fixed") && (i = s.offsetLeft, c = s.offsetTop);
  }
  return { width: r, height: a, x: i + nl(e), y: c };
}
function E1(e) {
  var t, n = po(e), o = tl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = wo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = wo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -o.scrollLeft + nl(e), c = -o.scrollTop;
  return Xn(s || n).direction === "rtl" && (i += wo(n.clientWidth, s ? s.clientWidth : 0) - r), { width: r, height: a, x: i, y: c };
}
function ol(e) {
  var t = Xn(e), n = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o);
}
function Hu(e) {
  return ["html", "body", "#document"].indexOf(Pn(e)) >= 0 ? e.ownerDocument.body : tn(e) && ol(e) ? e : Hu(Mr(e));
}
function Cs(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Hu(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Yt(o), a = s ? [r].concat(r.visualViewport || [], ol(o) ? o : []) : o, i = t.concat(a);
  return s ? i : i.concat(Cs(Mr(a)));
}
function ga(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function x1(e, t) {
  var n = Qo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Zi(e, t, n) {
  return t === Mu ? ga(C1(e, n)) : Ao(t) ? x1(t, n) : ga(E1(po(e)));
}
function L1(e) {
  var t = Cs(Mr(e)), n = ["absolute", "fixed"].indexOf(Xn(e).position) >= 0, o = n && tn(e) ? Bs(e) : e;
  return Ao(o) ? t.filter(function(s) {
    return Ao(s) && Du(s, o) && Pn(s) !== "body";
  }) : [];
}
function I1(e, t, n, o) {
  var s = t === "clippingParents" ? L1(e) : [].concat(t), r = [].concat(s, [n]), a = r[0], i = r.reduce(function(c, u) {
    var d = Zi(e, u, o);
    return c.top = wo(d.top, c.top), c.right = vr(d.right, c.right), c.bottom = vr(d.bottom, c.bottom), c.left = wo(d.left, c.left), c;
  }, Zi(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Wu(e) {
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
  var u = s ? el(s) : null;
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
  var n = t, o = n.placement, s = o === void 0 ? e.placement : o, r = n.strategy, a = r === void 0 ? e.strategy : r, i = n.boundary, c = i === void 0 ? J0 : i, u = n.rootBoundary, d = u === void 0 ? Mu : u, m = n.elementContext, g = m === void 0 ? ds : m, w = n.altBoundary, h = w === void 0 ? !1 : w, b = n.padding, C = b === void 0 ? 0 : b, k = Bu(typeof C != "number" ? C : Fu(C, zs)), M = g === ds ? e1 : ds, j = e.rects.popper, L = e.elements[h ? M : g], I = I1(Ao(L) ? L : L.contextElement || po(e.elements.popper), c, d, a), O = Qo(e.elements.reference), R = Wu({ reference: O, element: j, placement: s }), q = ga(Object.assign({}, j, R)), F = g === ds ? q : O, ne = { top: I.top - F.top + k.top, bottom: F.bottom - I.bottom + k.bottom, left: I.left - F.left + k.left, right: F.right - I.right + k.right }, H = e.modifiersData.offset;
  if (g === ds && H) {
    var re = H[s];
    Object.keys(ne).forEach(function(de) {
      var ce = [on, nn].indexOf(de) >= 0 ? 1 : -1, $ = [Ht, nn].indexOf(de) >= 0 ? "y" : "x";
      ne[de] += re[$] * ce;
    });
  }
  return ne;
}
function O1(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, s = n.boundary, r = n.rootBoundary, a = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Rr : c, d = Jo(o), m = d ? i ? Ui : Ui.filter(function(h) {
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
function $1(e) {
  if ($n(e) === Xa) return [];
  var t = or(e);
  return [qi(e), t, qi(t)];
}
function R1(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, i = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, g = n.altBoundary, w = n.flipVariations, h = w === void 0 ? !0 : w, b = n.allowedAutoPlacements, C = t.options.placement, k = $n(C), M = k === C, j = c || (M || !h ? [or(C)] : $1(C)), L = [C].concat(j).reduce(function(W, U) {
      return W.concat($n(U) === Xa ? O1(t, { placement: U, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: b }) : U);
    }, []), I = t.rects.reference, O = t.rects.popper, R = /* @__PURE__ */ new Map(), q = !0, F = L[0], ne = 0; ne < L.length; ne++) {
      var H = L[ne], re = $n(H), de = Jo(H) === Yo, ce = [Ht, nn].indexOf(re) >= 0, $ = ce ? "width" : "height", V = Ms(t, { placement: H, boundary: d, rootBoundary: m, altBoundary: g, padding: u }), B = ce ? de ? on : Wt : de ? nn : Ht;
      I[$] > O[$] && (B = or(B));
      var ue = or(B), fe = [];
      if (r && fe.push(V[re] <= 0), i && fe.push(V[B] <= 0, V[ue] <= 0), fe.every(function(W) {
        return W;
      })) {
        F = H, q = !1;
        break;
      }
      R.set(H, fe);
    }
    if (q) for (var Te = h ? 3 : 1, De = function(W) {
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
var M1 = { name: "flip", enabled: !0, phase: "main", fn: R1, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Yi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Xi(e) {
  return [Ht, on, nn, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function P1(e) {
  var t = e.state, n = e.name, o = t.rects.reference, s = t.rects.popper, r = t.modifiersData.preventOverflow, a = Ms(t, { elementContext: "reference" }), i = Ms(t, { altBoundary: !0 }), c = Yi(a, o), u = Yi(i, s, r), d = Xi(c), m = Xi(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var N1 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: P1 };
function D1(e, t, n) {
  var o = $n(e), s = [Wt, Ht].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = r[0], i = r[1];
  return a = a || 0, i = (i || 0) * s, [Wt, on].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function z1(e) {
  var t = e.state, n = e.options, o = e.name, s = n.offset, r = s === void 0 ? [0, 0] : s, a = Rr.reduce(function(d, m) {
    return d[m] = D1(m, t.rects, r), d;
  }, {}), i = a[t.placement], c = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var B1 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: z1 };
function F1(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Wu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Uu = { name: "popperOffsets", enabled: !0, phase: "read", fn: F1, data: {} };
function j1(e) {
  return e === "x" ? "y" : "x";
}
function V1(e) {
  var t = e.state, n = e.options, o = e.name, s = n.mainAxis, r = s === void 0 ? !0 : s, a = n.altAxis, i = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, g = n.tether, w = g === void 0 ? !0 : g, h = n.tetherOffset, b = h === void 0 ? 0 : h, C = Ms(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: d }), k = $n(t.placement), M = Jo(t.placement), j = !M, L = el(k), I = j1(L), O = t.modifiersData.popperOffsets, R = t.rects.reference, q = t.rects.popper, F = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, ne = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, re = { x: 0, y: 0 };
  if (O) {
    if (r) {
      var de, ce = L === "y" ? Ht : Wt, $ = L === "y" ? nn : on, V = L === "y" ? "height" : "width", B = O[L], ue = B + C[ce], fe = B - C[$], Te = w ? -q[V] / 2 : 0, De = M === Yo ? R[V] : q[V], Ue = M === Yo ? -q[V] : -R[V], ve = t.elements.arrow, W = w && ve ? Ja(ve) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : zu(), me = U[ce], Ie = U[$], ee = As(0, R[V], W[V]), X = j ? R[V] / 2 - Te - ee - me - ne.mainAxis : De - ee - me - ne.mainAxis, Ve = j ? -R[V] / 2 + Te + ee + Ie + ne.mainAxis : Ue + ee + Ie + ne.mainAxis, ze = t.elements.arrow && Bs(t.elements.arrow), ut = ze ? L === "y" ? ze.clientTop || 0 : ze.clientLeft || 0 : 0, Ge = (de = H?.[L]) != null ? de : 0, Lt = B + X - Ge - ut, bt = B + Ve - Ge, Ke = As(w ? vr(ue, Lt) : ue, B, w ? wo(fe, bt) : fe);
      O[L] = Ke, re[L] = Ke - B;
    }
    if (i) {
      var yt, st = L === "x" ? Ht : Wt, wt = L === "x" ? nn : on, Xe = O[I], ct = I === "y" ? "height" : "width", It = Xe + C[st], Bt = Xe - C[wt], K = [Ht, Wt].indexOf(k) !== -1, ke = (yt = H?.[I]) != null ? yt : 0, dt = K ? It : Xe - R[ct] - q[ct] - ke + ne.altAxis, xe = K ? Xe + R[ct] + q[ct] - ke - ne.altAxis : Bt, kt = w && K ? h1(dt, Xe, xe) : As(w ? dt : It, Xe, w ? xe : Bt);
      O[I] = kt, re[I] = kt - Xe;
    }
    t.modifiersData[o] = re;
  }
}
var H1 = { name: "preventOverflow", enabled: !0, phase: "main", fn: V1, requiresIfExists: ["offset"] };
function W1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function U1(e) {
  return e === Yt(e) || !tn(e) ? tl(e) : W1(e);
}
function G1(e) {
  var t = e.getBoundingClientRect(), n = Xo(t.width) / e.offsetWidth || 1, o = Xo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function K1(e, t, n) {
  n === void 0 && (n = !1);
  var o = tn(t), s = tn(t) && G1(t), r = po(t), a = Qo(e, s, n), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (o || !o && !n) && ((Pn(t) !== "body" || ol(r)) && (i = U1(t)), tn(t) ? (c = Qo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = nl(r))), { x: a.left + i.scrollLeft - c.x, y: a.top + i.scrollTop - c.y, width: a.width, height: a.height };
}
function q1(e) {
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
function Z1(e) {
  var t = q1(e);
  return u1.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function Y1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function X1(e) {
  var t = e.reduce(function(n, o) {
    var s = n[o.name];
    return n[o.name] = s ? Object.assign({}, s, o, { options: Object.assign({}, s.options, o.options), data: Object.assign({}, s.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Qi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ji() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function sl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, s = t.defaultOptions, r = s === void 0 ? Qi : s;
  return function(a, i, c) {
    c === void 0 && (c = r);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Qi, r), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, g = { state: u, setOptions: function(b) {
      var C = typeof b == "function" ? b(u.options) : b;
      h(), u.options = Object.assign({}, r, u.options, C), u.scrollParents = { reference: Ao(a) ? Cs(a) : a.contextElement ? Cs(a.contextElement) : [], popper: Cs(i) };
      var k = Z1(X1([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = k.filter(function(M) {
        return M.enabled;
      }), w(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, C = b.reference, k = b.popper;
        if (Ji(C, k)) {
          u.rects = { reference: K1(C, Bs(k), u.options.strategy === "fixed"), popper: Ja(k) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(q) {
            return u.modifiersData[q.name] = Object.assign({}, q.data);
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
    }, update: Y1(function() {
      return new Promise(function(b) {
        g.forceUpdate(), b(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!Ji(a, i)) return g;
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
sl();
var Q1 = [Vu, Uu, ju, Pu];
sl({ defaultModifiers: Q1 });
var J1 = [Vu, Uu, ju, Pu, B1, M1, H1, y1, N1], eb = sl({ defaultModifiers: J1 });
const tb = ["fixed", "absolute"], nb = Ne({
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
    values: Rr,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: tb,
    default: "absolute"
  }
}), Gu = Ne({
  ...nb,
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
}), ob = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, sb = (e, t) => {
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
}, rb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: s } = e, r = {
    placement: n,
    strategy: o,
    ...s,
    modifiers: [...lb(e), ...t]
  };
  return ib(r, s?.modifiers), r;
}, ab = (e) => {
  if (We)
    return qn(e);
};
function lb(e) {
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
function ib(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const cb = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = ub(c);
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
    i(), !(!c || !u) && (r.value = eb(c, u, l(s)));
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
function ub(e) {
  const t = Object.keys(e.elements), n = dr(t.map((s) => [s, e.styles[s] || {}])), o = dr(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: o
  };
}
const db = 0, fb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: s } = Le(qa, void 0), r = P(), a = P(), i = A(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = A(() => {
    var k;
    const M = l(r), j = (k = l(a)) != null ? k : db;
    return {
      name: "arrow",
      enabled: !Qc(M),
      options: {
        element: M,
        padding: j
      }
    };
  }), u = A(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...rb(e, [
      l(c),
      l(i)
    ])
  })), d = A(() => ab(e.referenceEl) || l(o)), { attributes: m, state: g, styles: w, update: h, forceUpdate: b, instanceRef: C } = cb(d, n, u);
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
}, pb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: s } = Va(), r = et("popper"), a = A(() => l(t).popper), i = P(Pe(e.zIndex) ? e.zIndex : s()), c = A(() => [
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
}, mb = oe({
  name: "ElPopperContent"
}), hb = /* @__PURE__ */ oe({
  ...mb,
  props: Gu,
  emits: ob,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: s,
      trapped: r,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = sb(o, n), { attributes: m, arrowRef: g, contentRef: w, styles: h, instanceRef: b, role: C, update: k } = fb(o), {
      ariaModal: M,
      arrowStyle: j,
      contentAttrs: L,
      contentClass: I,
      contentStyle: O,
      updateZIndex: R
    } = pb(o, {
      styles: h,
      attributes: m,
      role: C
    }), q = Le(gr, void 0), F = P();
    vn(Au, {
      arrowStyle: j,
      arrowRef: g,
      arrowOffset: F
    }), q && vn(gr, {
      ...q,
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
      _(l(Ru), {
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
var gb = /* @__PURE__ */ je(hb, [["__file", "content.vue"]]);
const vb = wn(I0), rl = Symbol("elTooltip");
function ec() {
  let e;
  const t = (o, s) => {
    n(), e = window.setTimeout(o, s);
  }, n = () => window.clearTimeout(e);
  return Ds(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const bb = Ne({
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
}), yb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: s
}) => {
  const { registerTimeout: r } = ec(), {
    registerTimeout: a,
    cancelTimeout: i
  } = ec();
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
}, al = Ne({
  ...bb,
  ...Gu,
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
  ...xu,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [On.enter, On.numpadEnter, On.space]
  }
}), wb = Lr({
  type: he(Boolean),
  default: null
}), kb = Lr({
  type: he(Function)
}), _b = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], s = {
    [e]: wb,
    [n]: kb
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
        const q = b.value && We;
        q && w(t, !0), (C.value || !q) && k(R);
      }, L = (R) => {
        if (h.disabled === !0 || !We)
          return;
        const q = b.value && We;
        q && w(t, !1), (C.value || !q) && M(R);
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
  useModelToggleProps: Tb,
  useModelToggleEmits: Sb,
  useModelToggle: Ab
} = _b("visible"), Cb = Ne({
  ...Cu,
  ...Tb,
  ...al,
  ...Ku,
  ...Eu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Eb = [
  ...Sb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], xb = (e, t) => Ln(e) ? e.includes(t) : e === t, Fo = (e, t, n) => (o) => {
  xb(l(e), t) && n(o);
}, Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const r = e?.(s);
  if (n === !1 || !r)
    return t?.(s);
}, Lb = oe({
  name: "ElTooltipTrigger"
}), Ib = /* @__PURE__ */ oe({
  ...Lb,
  props: Ku,
  setup(e, { expose: t }) {
    const n = e, o = et("tooltip"), { controlled: s, id: r, open: a, onOpen: i, onClose: c, onToggle: u } = Le(rl, void 0), d = P(null), m = () => {
      if (l(s) || n.disabled)
        return !0;
    }, g = Kn(n, "trigger"), w = Gn(m, Fo(g, "hover", i)), h = Gn(m, Fo(g, "hover", c)), b = Gn(m, Fo(g, "click", (L) => {
      L.button === 0 && u(L);
    })), C = Gn(m, Fo(g, "focus", i)), k = Gn(m, Fo(g, "focus", c)), M = Gn(m, Fo(g, "contextmenu", (L) => {
      L.preventDefault(), u(L);
    })), j = Gn(m, (L) => {
      const { code: I } = L;
      n.triggerKeys.includes(I) && (L.preventDefault(), u(L));
    });
    return t({
      triggerRef: d
    }), (L, I) => (S(), se(l(F0), {
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
var Ob = /* @__PURE__ */ je(Ib, [["__file", "trigger.vue"]]);
const $b = Ne({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Rb = /* @__PURE__ */ oe({
  __name: "teleport",
  props: $b,
  setup(e) {
    return (t, n) => t.disabled ? ie(t.$slots, "default", { key: 0 }) : (S(), se(df, {
      key: 1,
      to: t.to
    }, [
      ie(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Mb = /* @__PURE__ */ je(Rb, [["__file", "teleport.vue"]]);
const qu = wn(Mb), Zu = () => {
  const e = $a(), t = yu(), n = A(() => `${e.value}-popper-container-${t.prefix}`), o = A(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Pb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Nb = () => {
  const { id: e, selector: t } = Zu();
  return ff(() => {
    We && (document.body.querySelector(t.value) || Pb(e.value));
  }), {
    id: e,
    selector: t
  };
}, Db = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), zb = /* @__PURE__ */ oe({
  ...Db,
  props: al,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Zu(), s = et("tooltip"), r = P();
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
    } = Le(rl, void 0), k = A(() => n.transition || `${s.namespace.value}-fade-in-linear`), M = A(() => n.persistent);
    yn(() => {
      a?.();
    });
    const j = A(() => l(M) ? !0 : l(u)), L = A(() => n.disabled ? !1 : l(u)), I = A(() => n.appendTo || o.value), O = A(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), R = P(!0), q = () => {
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
      w(), a = Wg(A(() => {
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
    }), (B, ue) => (S(), se(l(qu), {
      disabled: !B.teleported,
      to: l(I)
    }, {
      default: J(() => [
        _(Eo, {
          name: l(k),
          onAfterLeave: q,
          onBeforeEnter: re,
          onAfterEnter: ce,
          onBeforeLeave: de
        }, {
          default: J(() => [
            l(j) ? lt((S(), se(l(gb), ko({
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
var Bb = /* @__PURE__ */ je(zb, [["__file", "content.vue"]]);
const Fb = oe({
  name: "ElTooltip"
}), jb = /* @__PURE__ */ oe({
  ...Fb,
  props: Cb,
  emits: Eb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Nb();
    const s = Zo(), r = P(), a = P(), i = () => {
      var k;
      const M = l(r);
      M && ((k = M.popperInstanceRef) == null || k.update());
    }, c = P(!1), u = P(), { show: d, hide: m, hasUpdateHandler: g } = Ab({
      indicator: c,
      toggleReason: u
    }), { onOpen: w, onClose: h } = yb({
      showAfter: Kn(o, "showAfter"),
      hideAfter: Kn(o, "hideAfter"),
      autoClose: Kn(o, "autoClose"),
      open: d,
      close: m
    }), b = A(() => $s(o.visible) && !g.value);
    vn(rl, {
      controlled: b,
      id: s,
      open: Ea(c),
      trigger: Kn(o, "trigger"),
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
    return pf(() => c.value && m()), t({
      popperRef: r,
      contentRef: a,
      isFocusInsideContent: C,
      updatePopper: i,
      onOpen: w,
      onClose: h,
      hide: m
    }), (k, M) => (S(), se(l(vb), {
      ref_key: "popperRef",
      ref: r,
      role: k.role
    }, {
      default: J(() => [
        _(Ob, {
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
        _(Bb, {
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
            k.showArrow ? (S(), se(l(R0), {
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
var Vb = /* @__PURE__ */ je(jb, [["__file", "tooltip.vue"]]);
const Hb = wn(Vb), Wb = Ne({
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
}), Ub = oe({
  name: "ElBadge"
}), Gb = /* @__PURE__ */ oe({
  ...Ub,
  props: Wb,
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
var Kb = /* @__PURE__ */ je(Gb, [["__file", "badge.vue"]]);
const qb = wn(Kb), Zb = ({ from: e, replacement: t, scope: n, version: o, ref: s, type: r = "API" }, a) => {
  pe(() => l(a), (i) => {
  }, {
    immediate: !0
  });
};
var sr = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(sr || {});
const Yb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), va = Ne({
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
    values: ru
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Xb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Qb = oe({
  name: "ElTag"
}), Jb = /* @__PURE__ */ oe({
  ...Qb,
  props: va,
  emits: Xb,
  setup(e, { emit: t }) {
    const n = e, o = Or(), s = et("tag"), r = A(() => {
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
        onClick: qe(a, ["stop"])
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
            onClick: qe(a, ["stop"])
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
var ey = /* @__PURE__ */ je(Jb, [["__file", "tag.vue"]]);
const ty = wn(ey), so = /* @__PURE__ */ new Map();
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
function tc(e, t) {
  let n = [];
  return Ln(t.arg) ? n = t.arg : hn(t.arg) && n.push(t.arg), function(o, s) {
    const r = t.instance.popperRef, a = o.target, i = s?.target, c = !t || !t.instance, u = !a || !i, d = e.contains(a) || e.contains(i), m = e === a, g = n.length && n.some((h) => h?.contains(a)) || n.length && n.includes(i), w = r && (r.contains(a) || r.contains(i));
    c || u || d || m || g || w || t.value(o, s);
  };
}
const ny = {
  beforeMount(e, t) {
    so.has(e) || so.set(e, []), so.get(e).push({
      documentHandler: tc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    so.has(e) || so.set(e, []);
    const n = so.get(e), o = n.findIndex((r) => r.bindingFn === t.oldValue), s = {
      documentHandler: tc(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, s) : n.push(s);
  },
  unmounted(e) {
    so.delete(e);
  }
}, oy = Ne({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: Ir,
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
}), dn = {};
oe({
  name: "ElConfigProvider",
  props: oy,
  setup(e, { slots: t }) {
    pe(() => e.message, (o) => {
      Object.assign(dn, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = uu(e);
    return () => ie(t, "default", { config: n?.value });
  }
});
const sy = 100, ry = 600, nc = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = sy, delay: s = ry } = nt(n) ? {} : n;
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
}, Yu = (e) => {
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
}, ay = Ne({
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
}), ly = {
  click: (e) => e instanceof MouseEvent
}, iy = "overlay";
var cy = oe({
  name: "ElOverlay",
  props: ay,
  emits: ly,
  setup(e, { slots: t, emit: n }) {
    const o = et(iy), s = (c) => {
      n("click", c);
    }, { onClick: r, onMousedown: a, onMouseup: i } = Yu(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? _("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: r,
      onMousedown: a,
      onMouseup: i
    }, [ie(t, "default")], sr.STYLE | sr.CLASS | sr.PROPS, ["onClick", "onMouseup", "onMousedown"]) : mf("div", {
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
const uy = cy, Xu = Symbol("dialogInjectionKey"), Qu = Ne({
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
}), dy = {
  close: () => !0
}, fy = (e, t, n, o) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const r = (u) => {
    const d = u.clientX, m = u.clientY, { offsetX: g, offsetY: w } = s, h = e.value.getBoundingClientRect(), b = h.left, C = h.top, k = h.width, M = h.height, j = document.documentElement.clientWidth, L = document.documentElement.clientHeight, I = -b + g, O = -C + w, R = j - b - k + g, q = L - C - M + w, F = (H) => {
      let re = g + H.clientX - d, de = w + H.clientY - m;
      o?.value || (re = Math.min(Math.max(re, I), R), de = Math.min(Math.max(de, O), q)), s = {
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
    xa(() => {
      n.value ? a() : i();
    });
  }), yn(() => {
    i();
  }), {
    resetPosition: c
  };
}, py = (...e) => (t) => {
  e.forEach((n) => {
    nt(n) ? n(t) : n.value = t;
  });
}, my = oe({ name: "ElDialogContent" }), hy = /* @__PURE__ */ oe({
  ...my,
  props: Qu,
  emits: dy,
  setup(e, { expose: t }) {
    const n = e, { t: o } = xr(), { Close: s } = hu, { dialogRef: r, headerRef: a, bodyId: i, ns: c, style: u } = Le(Xu), { focusTrapRef: d } = Le(Ou), m = A(() => [
      c.b(),
      c.is("fullscreen", n.fullscreen),
      c.is("draggable", n.draggable),
      c.is("align-center", n.alignCenter),
      { [c.m("center")]: n.center }
    ]), g = py(d, r), w = A(() => n.draggable), h = A(() => n.overflow), { resetPosition: b } = fy(r, a, w, h);
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
var gy = /* @__PURE__ */ je(hy, [["__file", "dialog-content.vue"]]);
const vy = Ne({
  ...Qu,
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
}), by = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [vt]: (e) => $s(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, yy = (e, t = {}) => {
  Qt(e) || ja("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || et("popup"), o = A(() => n.bm("parent", "hidden"));
  if (!We || $i(document.body, o.value))
    return;
  let s = 0, r = !1, a = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || r && document && (document.body.style.width = a, hv(document.body, o.value));
    }, 200);
  };
  pe(e, (c) => {
    if (!c) {
      i();
      return;
    }
    r = !$i(document.body, o.value), r && (a = document.body.style.width, mv(document.body, o.value)), s = vv(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = gv(document.body, "overflowY");
    s > 0 && (u || d === "scroll") && r && (document.body.style.width = `calc(100% - ${s}px)`);
  }), Oc(() => i());
}, wy = (e, t) => {
  var n;
  const s = xt().emit, { nextZIndex: r } = Va();
  let a = "";
  const i = Zo(), c = Zo(), u = P(!1), d = P(!1), m = P(!1), g = P((n = e.zIndex) != null ? n : r());
  let w, h;
  const b = Ha("namespace", _s), C = A(() => {
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
  function q() {
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
  e.lockScroll && yy(u);
  function ce() {
    e.closeOnPressEscape && R();
  }
  return pe(() => e.modelValue, ($) => {
    $ ? (d.value = !1, I(), m.value = !0, g.value = Qc(e.zIndex) ? r() : g.value++, Ze(() => {
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
    onModalClick: q,
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
}, ky = oe({
  name: "ElDialog",
  inheritAttrs: !1
}), _y = /* @__PURE__ */ oe({
  ...ky,
  props: vy,
  emits: by,
  setup(e, { expose: t }) {
    const n = e, o = $c();
    Zb({
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
    } = wy(n, r);
    vn(Xu, {
      dialogRef: r,
      headerRef: a,
      bodyId: d,
      ns: s,
      rendered: w,
      style: m
    });
    const q = Yu(j), F = A(() => n.draggable && !n.fullscreen);
    return t({
      visible: c,
      dialogContentRef: i,
      resetPosition: () => {
        var H;
        (H = i.value) == null || H.resetPosition();
      }
    }), (H, re) => (S(), se(l(qu), {
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
            lt(_(l(uy), {
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
                  onClick: l(q).onClick,
                  onMousedown: l(q).onMousedown,
                  onMouseup: l(q).onMouseup
                }, [
                  _(l(Ru), {
                    loop: "",
                    trapped: l(c),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: l(L),
                    onFocusAfterReleased: l(I),
                    onFocusoutPrevented: l(R),
                    onReleaseRequested: l(O)
                  }, {
                    default: J(() => [
                      l(w) ? (S(), se(gy, ko({
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
                      }), Ia({
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
var Ty = /* @__PURE__ */ je(_y, [["__file", "dialog.vue"]]);
const Sy = wn(Ty), Ay = Ne({
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
  size: Ir,
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
}), Cy = {
  [qo]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Go]: (e) => Pe(e) || Yn(e),
  [vt]: (e) => Pe(e) || Yn(e)
}, Ey = oe({
  name: "ElInputNumber"
}), xy = /* @__PURE__ */ oe({
  ...Ey,
  props: Ay,
  emits: Cy,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: s } = xr(), r = et("input-number"), a = P(), i = _o({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: c } = Ga(), u = A(() => Pe(o.modelValue) && o.modelValue <= o.min), d = A(() => Pe(o.modelValue) && o.modelValue >= o.max), m = A(() => {
      const $ = k(o.step);
      return In(o.precision) ? Math.max(k(o.modelValue), $) : ($ > o.precision, o.precision);
    }), g = A(() => o.controls && o.controlsPosition === "right"), w = Or(), h = _u(), b = A(() => {
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
      B < ue && ja("InputNumber", "min should not be greater than max.");
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
      ue === fe && $ || (i.userInput = null, n(vt, fe), ue !== fe && n(qo, fe, ue), o.validateEvent && ((B = c?.validate) == null || B.call(c, "change").catch((Te) => void 0)), i.currentValue = fe);
    }, R = ($) => {
      i.userInput = $;
      const V = $ === "" ? null : Number($);
      n(Go, V), O(V, !1);
    }, q = ($) => {
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
      i.userInput = null, vu() && i.currentValue === null && ((V = a.value) != null && V.input) && (a.value.input.value = ""), n("blur", $), o.validateEvent && ((B = c?.validate) == null || B.call(c, "blur").catch((ue) => void 0));
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
    }), Rc(() => {
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
      onDragstart: qe(() => {
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
              l(g) ? (S(), se(l(mu), { key: 0 })) : (S(), se(l(Bv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(nc), L]
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
              l(g) ? (S(), se(l(Av), { key: 0 })) : (S(), se(l(jv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(nc), j]
      ]) : Y("v-if", !0),
      _(l(d0), {
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
          En(qe(j, ["prevent"]), ["up"]),
          En(qe(L, ["prevent"]), ["down"])
        ],
        onBlur: re,
        onFocus: H,
        onInput: R,
        onChange: q
      }, Ia({
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
var Ly = /* @__PURE__ */ je(xy, [["__file", "input-number.vue"]]);
const Iy = wn(Ly);
function Oy() {
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
const Ju = Symbol("ElSelectGroup"), Pr = Symbol("ElSelect");
function $y(e, t) {
  const n = Le(Pr), o = Le(Ju, { disabled: !1 }), s = A(() => d(ao(n.props.modelValue), e.value)), r = A(() => {
    var w;
    if (n.props.multiple) {
      const h = ao((w = n.props.modelValue) != null ? w : []);
      return !s.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = A(() => e.label || (en(e.value) ? "" : e.value)), i = A(() => e.value || e.label || ""), c = A(() => e.disabled || t.groupDisabled || r.value), u = xt(), d = (w = [], h) => {
    if (en(e.value)) {
      const b = n.props.valueKey;
      return w && w.some((C) => hf(lo(C, b)) === lo(h, b));
    } else
      return w && w.includes(h);
  }, m = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (w) => {
    const h = new RegExp(Yb(w), "i");
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
const Ry = oe({
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
    } = $y(e, s), { visible: m, hover: g } = Oa(s), w = xt().proxy;
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
function My(e, t, n, o, s, r) {
  return lt((S(), D("li", {
    id: e.id,
    class: z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: qe(e.selectOptionClick, ["stop"])
  }, [
    ie(e.$slots, "default", {}, () => [
      f("span", null, E(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Rn, e.visible]
  ]);
}
var ll = /* @__PURE__ */ je(Ry, [["render", My], ["__file", "option.vue"]]);
const Py = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Le(Pr), t = et("select"), n = A(() => e.props.popperClass), o = A(() => e.props.multiple), s = A(() => e.props.fitInputWidth), r = P("");
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
function Ny(e, t, n, o, s, r) {
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
var Dy = /* @__PURE__ */ je(Py, [["render", Ny], ["__file", "select-dropdown.vue"]]);
const zy = (e, t) => {
  const { t: n } = xr(), o = Zo(), s = et("select"), r = et("input"), a = _o({
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
  } = Su({
    afterComposition: (x) => kt(x)
  }), { wrapperRef: O, isFocused: R, handleBlur: q } = Tu(m, {
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
  }), F = P(!1), ne = P(), { form: H, formItem: re } = Ga(), { inputId: de } = wu(e, {
    formItemContext: re
  }), { valueOnClear: ce, isEmptyValue: $ } = fv(e), V = A(() => e.disabled || H?.disabled), B = A(() => Ln(e.modelValue) ? e.modelValue.length > 0 : !$(e.modelValue)), ue = A(() => {
    var x;
    return (x = H?.statusIcon) != null ? x : !1;
  }), fe = A(() => e.clearable && !V.value && a.inputHovering && B.value), Te = A(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = A(() => s.is("reverse", Te.value && F.value)), Ue = A(() => re?.validateState || ""), ve = A(() => gu[Ue.value]), W = A(() => e.remote ? 300 : 0), U = A(() => e.remote && !a.inputValue && a.options.size === 0), me = A(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && Ie.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ie = A(() => ee.value.filter((x) => x.visible).length), ee = A(() => {
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
  }, ut = Or(), Ge = A(() => ["small"].includes(ut.value) ? "small" : "default"), Lt = A({
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
  }), Ke = A(() => {
    var x;
    const Z = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !B.value ? Z : a.selectedLabel;
  }), yt = A(() => pa ? null : "mouseenter");
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
  }), xa(() => {
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
    const ge = Bf(x);
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
  }, K = () => {
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
  }, He = Cg(() => {
    xe();
  }, W.value), ft = (x) => {
    Ss(e.modelValue, x) || t(qo, x);
  }, mo = (x) => Eg(x, (Z) => {
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
      Gt && bv(Gt, St);
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
      Ze(() => q(Z));
    }
  }, an = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : F.value = !1;
  }, jn = () => {
    V.value || (pa && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : F.value = !F.value);
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
  return xn(c, Bt), xn(h, ke), xn(O, ke), xn(b, dt), xn(C, K), ot(() => {
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
    currentPlaceholder: Ke,
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
var By = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Le(Pr);
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
const Fy = Ne({
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
  size: Ir,
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
  teleported: al.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: So,
    default: Wa
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: So,
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
    values: Rr,
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
  ...rs(["ariaLabel"])
}), oc = "ElSelect", jy = oe({
  name: oc,
  componentName: oc,
  components: {
    ElSelectMenu: Dy,
    ElOption: ll,
    ElOptions: By,
    ElTag: ty,
    ElScrollbar: C0,
    ElTooltip: Hb,
    ElIcon: Nt
  },
  directives: { ClickOutside: ny },
  props: Fy,
  emits: [
    vt,
    qo,
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
      ...Oa(e),
      modelValue: n
    }), s = zy(o, t), { calculatorRef: r, inputStyle: a } = Oy();
    vn(Pr, _o({
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
function Vy(e, t, n, o, s, r) {
  const a = vo("el-tag"), i = vo("el-tooltip"), c = vo("el-icon"), u = vo("el-option"), d = vo("el-options"), m = vo("el-scrollbar"), g = vo("el-select-menu"), w = gf("click-outside");
  return lt((S(), D("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [vf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
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
            onClick: qe(e.toggleMenu, ["prevent"])
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
                    En(qe((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    En(qe((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    En(qe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    En(qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    En(qe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: qe(e.toggleMenu, ["stop"])
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
              onClick: qe(() => {
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
              onClick: qe(() => {
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
var Hy = /* @__PURE__ */ je(jy, [["render", Vy], ["__file", "select.vue"]]);
const Wy = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = et("select"), n = P(null), o = xt(), s = P([]);
    vn(Ju, _o({
      ...Oa(e)
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
    }), Xg(n, c, {
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
function Uy(e, t, n, o, s, r) {
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
var ed = /* @__PURE__ */ je(Wy, [["render", Uy], ["__file", "option-group.vue"]]);
const td = wn(Hy, {
  Option: ll,
  OptionGroup: ed
}), nd = pu(ll);
pu(ed);
const od = ["success", "info", "warning", "error"], At = bu({
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
}), Gy = Ne({
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
    values: od,
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
}, mn = bf([]), qy = (e) => {
  const t = mn.findIndex((s) => s.id === e), n = mn[t];
  let o;
  return t > 0 && (o = mn[t - 1]), { current: n, prev: o };
}, Zy = (e) => {
  const { prev: t } = qy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Yy = (e, t) => mn.findIndex((o) => o.id === e) > 0 ? 16 : t, Xy = oe({
  name: "ElMessage"
}), Qy = /* @__PURE__ */ oe({
  ...Xy,
  props: Gy,
  emits: Ky,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = qv, { ns: s, zIndex: r } = cu("message"), { currentZIndex: a, nextZIndex: i } = r, c = P(), u = P(!1), d = P(0);
    let m;
    const g = A(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = A(() => {
      const R = n.type;
      return { [s.bm("icon", R)]: R && hr[R] };
    }), h = A(() => n.icon || hr[n.type] || ""), b = A(() => Zy(n.id)), C = A(() => Yy(n.id, n.offset) + b.value), k = A(() => d.value + C.value), M = A(() => ({
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
    }), (R, q) => (S(), se(Eo, {
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
          R.repeatNum > 1 ? (S(), se(l(qb), {
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
            onClick: qe(I, ["stop"])
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
var Jy = /* @__PURE__ */ je(Qy, [["__file", "message.vue"]]);
let ew = 1;
const sd = (e) => {
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
}, tw = (e) => {
  const t = mn.indexOf(e);
  if (t === -1)
    return;
  mn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, nw = ({ appendTo: e, ...t }, n) => {
  const o = `message_${ew++}`, s = t.onClose, r = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), tw(d);
    },
    onDestroy: () => {
      ir(null, r);
    }
  }, i = _(Jy, a, nt(a.message) || Ls(a.message) ? {
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
  const n = sd(e);
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
  const o = nw(n, t);
  return mn.push(o), o.handler;
};
od.forEach((e) => {
  es[e] = (t = {}, n) => {
    const o = sd(t);
    return es({ ...o, type: e }, n);
  };
});
function ow(e) {
  for (const t of mn)
    (!e || e === t.props.type) && t.handler.close();
}
es.closeAll = ow;
es._context = null;
const sw = fu(es, "$message"), rd = [
  "success",
  "info",
  "warning",
  "error"
], rw = Ne({
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
    values: [...rd, ""],
    default: ""
  },
  zIndex: Number
}), aw = {
  destroy: () => !0
}, lw = oe({
  name: "ElNotification"
}), iw = /* @__PURE__ */ oe({
  ...lw,
  props: rw,
  emits: aw,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = cu("notification"), { nextZIndex: r, currentZIndex: a } = s, { Close: i } = hu, c = P(!1);
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
              onClick: qe(k, ["stop"])
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
var cw = /* @__PURE__ */ je(iw, [["__file", "notification.vue"]]);
const br = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ba = 16;
let uw = 1;
const ts = function(e = {}, t) {
  if (!We)
    return { close: () => {
    } };
  (Zt(e) || Ls(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  br[n].forEach(({ vm: d }) => {
    var m;
    o += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + ba;
  }), o += ba;
  const s = `notification_${uw++}`, r = e.onClose, a = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      dw(s, n, r);
    }
  };
  let i = document.body;
  hn(e.appendTo) ? i = e.appendTo : Zt(e.appendTo) && (i = document.querySelector(e.appendTo)), hn(i) || (i = document.body);
  const c = document.createElement("div"), u = _(cw, a, nt(a.message) ? a.message : Ls(a.message) ? () => a.message : null);
  return u.appContext = In(t) ? ts._context : t, u.props.onDestroy = () => {
    ir(null, c);
  }, ir(u, c), br[n].push({ vm: u }), i.appendChild(c.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
rd.forEach((e) => {
  ts[e] = (t = {}, n) => ((Zt(t) || Ls(t)) && (t = {
    message: t
  }), ts({ ...t, type: e }, n));
});
function dw(e, t, n) {
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
      const { el: d, component: m } = o[u].vm, g = Number.parseInt(d.style[i], 10) - a - ba;
      m.props.offset = g;
    }
}
function fw() {
  for (const e of Object.values(br))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ts.closeAll = fw;
ts._context = null;
const pw = fu(ts, "$notify");
function mw(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function tt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var sc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(sc || (sc = {}));
async function hw(e, t) {
  await tt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function gw(e, t, n) {
  var o;
  const s = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return tt("plugin:event|listen", {
    event: e,
    target: s,
    handler: mw(t)
  }).then((r) => async () => hw(e, r));
}
async function ad() {
  return await tt("local_ai_get_config");
}
async function rr(e) {
  return await tt("local_ai_save_config", { config: e });
}
async function ld(e) {
  return await tt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function vw() {
  return await tt("local_ai_get_runtime_status");
}
async function id() {
  return await tt("local_ai_get_status");
}
async function bw(e) {
  return await tt("local_ai_start_service", {
    config: e ?? null
  });
}
async function cd() {
  return await tt("local_ai_restart_service");
}
async function yw() {
  await tt("local_ai_stop_service");
}
async function ww(e) {
  return await tt("local_ai_chat", { request: e });
}
function ud() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function kw(e, t, n = {}) {
  const o = n.requestId ?? ud(), s = await gw(
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
async function Xr(e) {
  return await tt("local_ai_cancel_chat_stream", { requestId: e });
}
async function _w() {
  return await tt("local_ai_get_chat_histories");
}
async function Tw(e) {
  return await tt(
    "local_ai_read_attachment_files",
    { paths: e }
  );
}
async function Sw(e) {
  return await tt("local_ai_save_chat_history", {
    history: e
  });
}
async function Aw(e) {
  return await tt("local_ai_delete_chat_history", {
    historyId: e
  });
}
async function Cw() {
  return await tt("local_ai_clear_chat_histories");
}
const Ew = ["disabled"], xw = {
  key: 0,
  class: "custom-button__loading"
}, Lw = /* @__PURE__ */ oe({
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
      e.loading ? (S(), D("div", xw, o[1] || (o[1] = [
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
    ], 10, Ew));
  }
}), Io = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Xt = /* @__PURE__ */ Io(Lw, [["__scopeId", "data-v-5d7f8015"]]), Iw = /* @__PURE__ */ oe({
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
}), fs = /* @__PURE__ */ Io(Iw, [["__scopeId", "data-v-59686f54"]]), Ow = { class: "dialog-footer-default" }, $w = { class: "footer-left" }, Rw = { class: "footer-right" }, Mw = /* @__PURE__ */ oe({
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
      const g = Sy;
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
      }, Ia({
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
              f("div", Ow, [
                f("div", $w, [
                  ie(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                f("div", Rw, [
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
}), dd = /* @__PURE__ */ Io(Mw, [["__scopeId", "data-v-a7e8a5d6"]]), Pw = { class: "confirm-content" }, Nw = { class: "confirm-footer" }, Dw = /* @__PURE__ */ oe({
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
    }), (d, m) => (S(), se(dd, {
      modelValue: l(r),
      "onUpdate:modelValue": m[0] || (m[0] = (g) => Qt(r) ? r.value = g : null),
      title: d.title,
      width: d.width,
      center: d.center,
      "show-close": d.showClose,
      "custom-class": l(a)
    }, {
      footer: J(() => [
        f("div", Nw, [
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
        f("div", Pw, [
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
}), zw = /* @__PURE__ */ Io(Dw, [["__scopeId", "data-v-875c8d56"]]), Ee = {
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
    o === "center" ? sw({
      message: t,
      type: n,
      duration: s,
      showClose: r,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : pw({
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
}, Bw = "snippets-code:developer-mode", fd = "snippets-code:frontend-diagnostics", Fw = 240, ps = "[REDACTED]", ar = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${ps}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${ps}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  ps
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${ps}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${ps}`
), pd = (e) => {
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
}, jw = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Vw = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(fd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, il = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Bw) === "true";
  } catch {
    return !1;
  }
}, Hw = (e, t, n) => {
  if (!il() || typeof localStorage > "u") return;
  const o = Vw();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: jw(),
    message: ar(t),
    data: pd(n)
  });
  try {
    localStorage.setItem(
      fd,
      JSON.stringify(o.slice(-Fw))
    );
  } catch {
  }
}, Ww = () => il(), Uw = (e) => e === "error" || il(), Js = (e, t, n) => {
  Hw(e, t, n), Uw(e) && tt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : pd(n)
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
    Ww() && Js("debug", e, t);
  }
}, Gw = /* @__PURE__ */ new Set([
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
]), Kw = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), qw = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), Zw = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), md = 5, Yw = 1024 * 1024, Xw = 5 * 1024 * 1024, rc = 4e4, Qr = (e) => e?.map((t) => ({ ...t })) ?? [], cl = (e) => e.split(".").pop()?.toLowerCase() ?? "", hd = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, ul = (e) => Kw.has(e.type) || qw.has(cl(e.name)), gd = (e) => e.type.startsWith("text/") || Gw.has(cl(e.name)), Qw = (e) => Zw.has(cl(e.name)), Jw = async (e) => await new Promise((t, n) => {
  const o = new FileReader();
  o.onload = () => t(String(o.result ?? "")), o.onerror = () => n(o.error ?? new Error("read failed")), o.readAsDataURL(e);
}), ek = async (e) => {
  const t = await e.text();
  return t.length <= rc ? { text: t, truncated: !1 } : {
    text: t.slice(0, rc),
    truncated: !0
  };
}, tk = (e, t) => {
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
}, Jr = 160, vd = (e) => {
  const t = e.trim();
  if (!t) return 0;
  const n = (t.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, r = (t.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((a, i) => /^[A-Za-z0-9_]+$/.test(i) ? a + Math.max(1, Math.ceil(i.length / 4)) : a + 1, 0);
  return Math.max(1, Math.ceil(n + r));
}, ea = (e) => Math.max(0, Math.ceil(e.length / 4)), nk = (e) => Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0, ok = (e, t) => {
  const n = Object.entries(t).filter(
    ([, o]) => o != null
  );
  return {
    ...e,
    ...Object.fromEntries(n)
  };
}, bd = (e) => Array.isArray(e) ? e.filter((t) => t.type === "text").map((t) => t.text).join(`
`) : e, sk = (e) => {
  const t = e.attachments?.filter(
    (r) => r.status === "parsed"
  ) ?? [], n = tk(
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
}, ns = (e) => vd(
  e.map((t) => `${t.role}: ${bd(t.content)}`).join(`
`)
), ac = (e, t, n) => {
  const o = Math.max(240, t * 4);
  return e.length <= o ? e : `${n}

${e.slice(-o)}`;
}, ms = (e) => String(e).padStart(2, "0"), rk = (e = /* @__PURE__ */ new Date()) => {
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
}, ak = () => {
  const { isoDate: e, localTime: t, timeZone: n, weekday: o } = rk();
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
}, lk = (e) => {
  const t = e.filter((o) => o.role === "system").map((o) => bd(o.content).trim()).filter(Boolean), n = e.filter(
    (o) => o.role !== "system"
  );
  return t.length ? [
    { role: "system", content: t.join(`

---

`) },
    ...n
  ] : n;
}, ik = (e, t, n) => {
  if (e.role !== "assistant" || typeof e.content != "string" || t < Jr)
    return null;
  let o = t, s = {
    ...e,
    content: ac(
      e.content,
      o,
      n
    )
  };
  for (; ns([s]) > t && o > Jr; )
    o = Math.max(
      Jr,
      Math.floor(o * 0.7)
    ), s = {
      ...e,
      content: ac(
        e.content,
        o,
        n
      )
    };
  return ns([s]) <= t ? s : null;
}, ck = (e, t, n) => {
  const o = [];
  let s = 0;
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const a = e[r], i = ns([a]);
    if (s + i <= t || o.length === 0) {
      o.unshift(a), s += i;
      continue;
    }
    const c = t - s, u = ik(
      a,
      c,
      n
    );
    u && (o.unshift(u), s += ns([u]));
  }
  return o;
}, yo = (e) => `${Date.now()}-${e}-${Math.random().toString(16).slice(2, 8)}`, os = (e) => e.type === "root", Nr = (e) => new Map(e.map((t) => [t.id, t])), Fs = (e) => e.find(os), js = (e, t) => {
  if (!t) return null;
  const n = Nr(e);
  let o = n.get(t);
  const s = /* @__PURE__ */ new Set();
  for (; o?.childIds?.length && !s.has(o.id); )
    s.add(o.id), o = n.get(o.childIds[o.childIds.length - 1]);
  return o?.id ?? null;
}, uk = (e, t) => {
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
}, yd = (e, t) => {
  if (!t) return [];
  const n = Nr(e), o = [], s = /* @__PURE__ */ new Set();
  let r = n.get(t);
  for (; r && !s.has(r.id); )
    s.add(r.id), o.unshift(r), r = r.parentId ? n.get(r.parentId) : void 0;
  return o;
}, lr = (e) => {
  if (!e) return [];
  const t = e.currentNodeId ?? js(e.messages, Fs(e.messages)?.id);
  return yd(e.messages, t).filter(
    (n) => !os(n)
  );
}, dk = (e) => {
  if (!e) return [];
  const t = Nr(e.messages), n = (o) => js(e.messages, o) ?? o;
  return lr(e).map((o) => {
    const r = (o.parentId ? t.get(o.parentId) : void 0)?.childIds ?? [o.id];
    return {
      message: o,
      siblingLeafNodeIds: r.map(n),
      siblingCurrentIndex: Math.max(0, r.indexOf(o.id))
    };
  });
}, ta = (e, t) => {
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
}, fk = (e, t) => {
  const n = Nr(e), o = /* @__PURE__ */ new Set(), s = (r) => {
    if (!o.has(r)) {
      o.add(r);
      for (const a of n.get(r)?.childIds ?? []) s(a);
    }
  };
  return s(t), o;
}, pk = (e, t, n) => {
  const o = e.find((i) => i.id === n);
  if (!o || os(o)) return null;
  const s = fk(e, n), r = e.filter((i) => !s.has(i.id)).map((i) => ({
    ...i,
    childIds: (i.childIds ?? []).filter((c) => !s.has(c))
  })), a = t && s.has(t) ? js(r, o.parentId) ?? Fs(r)?.id ?? null : t;
  return {
    messages: r,
    currentNodeId: a,
    deletedIds: s
  };
};
async function ya(e = {}) {
  return typeof e == "object" && Object.freeze(e), await tt("plugin:dialog|open", { options: e });
}
const mk = [
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
], Dr = (e, t) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: t,
  mime: e.type || "application/octet-stream",
  size: e.size,
  status: "pending"
}), hk = async (e, t) => {
  const n = Dr(e, "image");
  if (e.size > Xw)
    return {
      ...n,
      status: "error",
      error: t("localAi.imageTooLarge")
    };
  try {
    return {
      ...n,
      status: "parsed",
      dataUrl: await Jw(e)
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, gk = async (e, t) => {
  const n = Dr(e, "text");
  if (e.size > Yw)
    return {
      ...n,
      status: "error",
      error: t("localAi.textFileTooLarge")
    };
  try {
    const o = await ek(e);
    return {
      ...n,
      status: "parsed",
      text: o.text,
      error: o.truncated ? "truncated" : void 0
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, vk = async (e, t) => ul(e) ? hk(e, t) : gd(e) ? gk(e, t) : {
  ...Dr(e, "unsupported"),
  status: "error",
  error: Qw(e) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
}, lc = async (e, t, n) => {
  const o = Array.from(t), s = md - e.value.length;
  if (s <= 0) {
    Ee.msg(n("localAi.attachmentLimit"), "warning");
    return;
  }
  o.length > s && Ee.msg(n("localAi.attachmentLimit"), "warning");
  const r = o.slice(0, s), a = r.map(
    (i) => Dr(
      i,
      ul(i) ? "image" : gd(i) ? "text" : "unsupported"
    )
  );
  e.value.push(...a), await Promise.all(
    r.map(async (i, c) => {
      const u = await vk(i, n), d = e.value.findIndex(
        (m) => m.id === a[c].id
      );
      d >= 0 && (e.value[d] = u);
    })
  );
}, bk = (e, t) => {
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
}, yk = (e) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: e.kind,
  mime: e.mime,
  size: e.size,
  status: e.error ? "error" : "parsed",
  text: e.text ?? void 0,
  dataUrl: e.dataUrl ?? void 0,
  error: void 0
}), wk = () => {
  const { t: e } = Ps(), t = P([]), n = P(!1);
  return {
    attachments: t,
    attachmentPicking: n,
    pickAttachmentFiles: async () => {
      const o = md - t.value.length;
      if (o <= 0 || n.value) {
        o <= 0 && Ee.msg(e("localAi.attachmentLimit"), "warning");
        return;
      }
      n.value = !0;
      try {
        const s = await ya({
          title: e("localAi.addAttachment"),
          directory: !1,
          multiple: !0,
          filters: [
            {
              name: e("localAi.attachment"),
              extensions: mk
            }
          ]
        });
        if (!s) return;
        const r = (Array.isArray(s) ? s : [s]).slice(
          0,
          o
        );
        (Array.isArray(s) ? s.length : 1) > o && Ee.msg(e("localAi.attachmentLimit"), "warning");
        const a = await Tw(r);
        t.value.push(
          ...a.map((i) => ({
            ...yk(i),
            error: bk(i, e)
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
      o.dataTransfer?.files.length && await lc(t, o.dataTransfer.files, e);
    },
    handleComposerPaste: async (o) => {
      const r = Array.from(o.clipboardData?.files ?? []).filter(ul);
      r.length && (o.preventDefault(), await lc(t, r, e));
    },
    removeAttachment: (o) => {
      t.value = t.value.filter(
        (s) => s.id !== o
      );
    },
    attachmentStatusText: (o) => o.status === "pending" ? e("localAi.attachmentPending") : o.status === "error" ? o.error ?? "" : o.error === "truncated" ? e("localAi.attachmentTruncated") : e("localAi.attachmentParsed")
  };
};
function dl() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Oo = dl();
function wd(e) {
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
var kk = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Dt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, _k = /^(?:[ \t]*(?:\n|$))+/, Tk = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Sk = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Vs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ak = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, fl = /(?:[*+-]|\d{1,9}[.)])/, kd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _d = Ae(kd).replace(/bull/g, fl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Ck = Ae(kd).replace(/bull/g, fl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), pl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ek = /^[^\n]+/, ml = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, xk = Ae(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ml).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Lk = Ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, fl).getRegex(), zr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", hl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ik = Ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", hl).replace("tag", zr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Td = Ae(pl).replace("hr", Vs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zr).getRegex(), Ok = Ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Td).getRegex(), gl = { blockquote: Ok, code: Tk, def: xk, fences: Sk, heading: Ak, hr: Vs, html: Ik, lheading: _d, list: Lk, newline: _k, paragraph: Td, table: Es, text: Ek }, ic = Ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Vs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zr).getRegex(), $k = { ...gl, lheading: Ck, table: ic, paragraph: Ae(pl).replace("hr", Vs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ic).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zr).getRegex() }, Rk = { ...gl, html: Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", hl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Es, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ae(pl).replace("hr", Vs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", _d).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Mk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Pk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Sd = /^( {2,}|\\)\n(?!\s*$)/, Nk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Br = /[\p{P}\p{S}]/u, vl = /[\s\p{P}\p{S}]/u, Ad = /[^\s\p{P}\p{S}]/u, Dk = Ae(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, vl).getRegex(), Cd = /(?!~)[\p{P}\p{S}]/u, zk = /(?!~)[\s\p{P}\p{S}]/u, Bk = /(?:[^\s\p{P}\p{S}]|~)/u, Fk = Ae(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", kk ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Ed = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, jk = Ae(Ed, "u").replace(/punct/g, Br).getRegex(), Vk = Ae(Ed, "u").replace(/punct/g, Cd).getRegex(), xd = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Hk = Ae(xd, "gu").replace(/notPunctSpace/g, Ad).replace(/punctSpace/g, vl).replace(/punct/g, Br).getRegex(), Wk = Ae(xd, "gu").replace(/notPunctSpace/g, Bk).replace(/punctSpace/g, zk).replace(/punct/g, Cd).getRegex(), Uk = Ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ad).replace(/punctSpace/g, vl).replace(/punct/g, Br).getRegex(), Gk = Ae(/\\(punct)/, "gu").replace(/punct/g, Br).getRegex(), Kk = Ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), qk = Ae(hl).replace("(?:-->|$)", "-->").getRegex(), Zk = Ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", qk).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), yr = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Yk = Ae(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", yr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ld = Ae(/^!?\[(label)\]\[(ref)\]/).replace("label", yr).replace("ref", ml).getRegex(), Id = Ae(/^!?\[(ref)\](?:\[\])?/).replace("ref", ml).getRegex(), Xk = Ae("reflink|nolink(?!\\()", "g").replace("reflink", Ld).replace("nolink", Id).getRegex(), cc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, bl = { _backpedal: Es, anyPunctuation: Gk, autolink: Kk, blockSkip: Fk, br: Sd, code: Pk, del: Es, emStrongLDelim: jk, emStrongRDelimAst: Hk, emStrongRDelimUnd: Uk, escape: Mk, link: Yk, nolink: Id, punctuation: Dk, reflink: Ld, reflinkSearch: Xk, tag: Zk, text: Nk, url: Es }, Qk = { ...bl, link: Ae(/^!?\[(label)\]\((.*?)\)/).replace("label", yr).getRegex(), reflink: Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", yr).getRegex() }, wa = { ...bl, emStrongRDelimAst: Wk, emStrongLDelim: Vk, url: Ae(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", cc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ae(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", cc).getRegex() }, Jk = { ...wa, br: Ae(Sd).replace("{2,}", "*").getRegex(), text: Ae(wa.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, er = { normal: gl, gfm: $k, pedantic: Rk }, hs = { normal: bl, gfm: wa, breaks: Jk, pedantic: Qk }, e_ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, uc = (e) => e_[e];
function Wn(e, t) {
  if (t) {
    if (Dt.escapeTest.test(e)) return e.replace(Dt.escapeReplace, uc);
  } else if (Dt.escapeTestNoEncode.test(e)) return e.replace(Dt.escapeReplaceNoEncode, uc);
  return e;
}
function dc(e) {
  try {
    e = encodeURI(e).replace(Dt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function fc(e, t) {
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
function t_(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let o = 0; o < e.length; o++) if (e[o] === "\\") o++;
  else if (e[o] === t[0]) n++;
  else if (e[o] === t[1] && (n--, n < 0)) return o;
  return n > 0 ? -2 : -1;
}
function pc(e, t, n, o, s) {
  let r = t.href, a = t.title || null, i = e[1].replace(s.other.outputLinkReplace, "$1");
  o.state.inLink = !0;
  let c = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: r, title: a, text: i, tokens: o.inlineTokens(i) };
  return o.state.inLink = !1, c;
}
function n_(e, t, n) {
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
      let n = t[0], o = n_(n, t[3] || "", this.rules);
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
    let n = fc(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let a of o) this.rules.other.tableAlignRight.test(a) ? r.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? r.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? r.align.push("left") : r.align.push(null);
      for (let a = 0; a < n.length; a++) r.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: !0, align: r.align[a] });
      for (let a of s) r.rows.push(fc(a, r.header.length).map((i, c) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: r.align[c] })));
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
        let r = t_(t[2], "()");
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
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), pc(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return pc(n, s, n[0], this.lexer, this.rules);
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
}, fn = class ka {
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
    return new ka(n).lex(t);
  }
  static lexInline(t, n) {
    return new ka(n).inlineTokens(t);
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
    let o = this.parser.parseInline(n), s = dc(e);
    if (s === null) return o;
    e = s;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + Wn(t) + '"'), r += ">" + o + "</a>", r;
  }
  image({ href: e, title: t, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let s = dc(e);
    if (s === null) return Wn(n);
    e = s;
    let r = `<img src="${e}" alt="${n}"`;
    return t && (r += ` title="${Wn(t)}"`), r += ">", r;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Wn(e.text);
  }
}, yl = class {
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
}, pn = class _a {
  constructor(t) {
    Re(this, "options");
    Re(this, "renderer");
    Re(this, "textRenderer");
    this.options = t || Oo, this.options.renderer = this.options.renderer || new kr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new yl();
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
}, Re(nr, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Re(nr, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), nr), o_ = class {
  constructor(...e) {
    Re(this, "defaults", dl());
    Re(this, "options", this.setOptions);
    Re(this, "parse", this.parseMarkdown(!0));
    Re(this, "parseInline", this.parseMarkdown(!1));
    Re(this, "Parser", pn);
    Re(this, "Renderer", kr);
    Re(this, "TextRenderer", yl);
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
}, Co = new o_();
function $e(e, t) {
  return Co.parse(e, t);
}
$e.options = $e.setOptions = function(e) {
  return Co.setOptions(e), $e.defaults = Co.defaults, wd($e.defaults), $e;
};
$e.getDefaults = dl;
$e.defaults = Oo;
$e.use = function(...e) {
  return Co.use(...e), $e.defaults = Co.defaults, wd($e.defaults), $e;
};
$e.walkTokens = function(e, t) {
  return Co.walkTokens(e, t);
};
$e.parseInline = Co.parseInline;
$e.Parser = pn;
$e.parser = pn.parse;
$e.Renderer = kr;
$e.TextRenderer = yl;
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
function mc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function s_(e) {
  if (Array.isArray(e)) return e;
}
function r_(e, t) {
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
function a_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l_(e, t) {
  return s_(e) || r_(e, t) || i_(e, t) || a_();
}
function i_(e, t) {
  if (e) {
    if (typeof e == "string") return mc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mc(e, t) : void 0;
  }
}
const Od = Object.entries, hc = Object.setPrototypeOf, c_ = Object.isFrozen, u_ = Object.getPrototypeOf, d_ = Object.getOwnPropertyDescriptor;
let zt = Object.freeze, sn = Object.seal, Uo = Object.create, $d = typeof Reflect < "u" && Reflect, Ta = $d.apply, Sa = $d.construct;
zt || (zt = function(t) {
  return t;
});
sn || (sn = function(t) {
  return t;
});
Ta || (Ta = function(t, n) {
  for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++)
    s[r - 2] = arguments[r];
  return t.apply(n, s);
});
Sa || (Sa = function(t) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    o[s - 1] = arguments[s];
  return new t(...o);
});
const jo = it(Array.prototype.forEach), f_ = it(Array.prototype.lastIndexOf), gc = it(Array.prototype.pop), Vo = it(Array.prototype.push), p_ = it(Array.prototype.splice), Pt = Array.isArray, ws = it(String.prototype.toLowerCase), na = it(String.prototype.toString), vc = it(String.prototype.match), Ho = it(String.prototype.replace), bc = it(String.prototype.indexOf), m_ = it(String.prototype.trim), h_ = it(Number.prototype.toString), g_ = it(Boolean.prototype.toString), yc = typeof BigInt > "u" ? null : it(BigInt.prototype.toString), wc = typeof Symbol > "u" ? null : it(Symbol.prototype.toString), Je = it(Object.prototype.hasOwnProperty), vs = it(Object.prototype.toString), gt = it(RegExp.prototype.test), bs = v_(TypeError);
function it(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      o[s - 1] = arguments[s];
    return Ta(e, t, o);
  };
}
function v_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return Sa(e, n);
  };
}
function ye(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ws;
  if (hc && hc(e, null), !Pt(t))
    return e;
  let o = t.length;
  for (; o--; ) {
    let s = t[o];
    if (typeof s == "string") {
      const r = n(s);
      r !== s && (c_(t) || (t[o] = r), s = r);
    }
    e[s] = !0;
  }
  return e;
}
function b_(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function Ct(e) {
  const t = Uo(null);
  for (const o of Od(e)) {
    var n = l_(o, 2);
    const s = n[0], r = n[1];
    Je(e, s) && (Pt(r) ? t[s] = b_(r) : r && typeof r == "object" && r.constructor === Object ? t[s] = Ct(r) : t[s] = r);
  }
  return t;
}
function y_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return h_(e);
    case "boolean":
      return g_(e);
    case "bigint":
      return yc ? yc(e) : "0";
    case "symbol":
      return wc ? wc(e) : "Symbol()";
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
    const o = d_(e, t);
    if (o) {
      if (o.get)
        return it(o.get);
      if (typeof o.value == "function")
        return it(o.value);
    }
    e = u_(e);
  }
  function n() {
    return null;
  }
  return n;
}
function w_(e) {
  try {
    return gt(e, ""), !0;
  } catch {
    return !1;
  }
}
const kc = zt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), oa = zt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), sa = zt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), k_ = zt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ra = zt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), __ = zt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), _c = zt(["#text"]), Tc = zt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), aa = zt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sc = zt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), tr = zt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), T_ = sn(/{{[\w\W]*|^[\w\W]*}}/g), S_ = sn(/<%[\w\W]*|^[\w\W]*%>/g), A_ = sn(/\${[\w\W]*/g), C_ = sn(/^data-[\-\w.\u00B7-\uFFFF]+$/), E_ = sn(/^aria-[\-\w]+$/), Ac = sn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), x_ = sn(/^(?:\w+script|data):/i), L_ = sn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), I_ = sn(/^html$/i), O_ = sn(/^[a-z][.\w]*(-[.\w]+)+$/i), Sn = {
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
}, $_ = function() {
  return typeof window > "u" ? null : window;
}, R_ = function(t, n) {
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
}, Cc = function() {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $_();
  const t = (ae) => Rd(ae);
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
  const q = n, F = q.implementation, ne = q.createNodeIterator, H = q.createDocumentFragment, re = q.getElementsByTagName, de = o.importNode;
  let ce = Cc();
  t.isSupported = typeof Od == "function" && typeof k == "function" && F && F.createHTMLDocument !== void 0;
  const $ = T_, V = S_, B = A_, ue = C_, fe = E_, Te = x_, De = L_, Ue = O_;
  let ve = Ac, W = null;
  const U = ye({}, [...kc, ...oa, ...sa, ...ra, ..._c]);
  let me = null;
  const Ie = ye({}, [...Tc, ...aa, ...Sc, ...tr]);
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
  let ut = !0, Ge = !0, Lt = !1, bt = !0, Ke = !1, yt = !0, st = !1, wt = !1, Xe = !1, ct = !1, It = !1, Bt = !1, K = !0, ke = !1;
  const dt = "user-content-";
  let xe = !0, kt = !1, He = {}, ft = null;
  const mo = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Dn = null;
  const kn = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let zn = null;
  const Ut = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bn = "http://www.w3.org/1998/Math/MathML", Ot = "http://www.w3.org/2000/svg", _t = "http://www.w3.org/1999/xhtml";
  let _n = _t, Tn = !1, ho = null;
  const eo = ye({}, [Bn, Ot, _t], na);
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
    jn.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? $o : v.PARSER_MEDIA_TYPE, Oe = an === "application/xhtml+xml" ? na : ws, W = Je(v, "ALLOWED_TAGS") && Pt(v.ALLOWED_TAGS) ? ye({}, v.ALLOWED_TAGS, Oe) : U, me = Je(v, "ALLOWED_ATTR") && Pt(v.ALLOWED_ATTR) ? ye({}, v.ALLOWED_ATTR, Oe) : Ie, ho = Je(v, "ALLOWED_NAMESPACES") && Pt(v.ALLOWED_NAMESPACES) ? ye({}, v.ALLOWED_NAMESPACES, na) : eo, zn = Je(v, "ADD_URI_SAFE_ATTR") && Pt(v.ADD_URI_SAFE_ATTR) ? ye(Ct(Ut), v.ADD_URI_SAFE_ATTR, Oe) : Ut, Dn = Je(v, "ADD_DATA_URI_TAGS") && Pt(v.ADD_DATA_URI_TAGS) ? ye(Ct(kn), v.ADD_DATA_URI_TAGS, Oe) : kn, ft = Je(v, "FORBID_CONTENTS") && Pt(v.FORBID_CONTENTS) ? ye({}, v.FORBID_CONTENTS, Oe) : mo, X = Je(v, "FORBID_TAGS") && Pt(v.FORBID_TAGS) ? ye({}, v.FORBID_TAGS, Oe) : Ct({}), Ve = Je(v, "FORBID_ATTR") && Pt(v.FORBID_ATTR) ? ye({}, v.FORBID_ATTR, Oe) : Ct({}), He = Je(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? Ct(v.USE_PROFILES) : v.USE_PROFILES : !1, ut = v.ALLOW_ARIA_ATTR !== !1, Ge = v.ALLOW_DATA_ATTR !== !1, Lt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, bt = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ke = v.SAFE_FOR_TEMPLATES || !1, yt = v.SAFE_FOR_XML !== !1, st = v.WHOLE_DOCUMENT || !1, ct = v.RETURN_DOM || !1, It = v.RETURN_DOM_FRAGMENT || !1, Bt = v.RETURN_TRUSTED_TYPE || !1, Xe = v.FORCE_BODY || !1, K = v.SANITIZE_DOM !== !1, ke = v.SANITIZE_NAMED_PROPS || !1, xe = v.KEEP_CONTENT !== !1, kt = v.IN_PLACE || !1, ve = w_(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Ac, _n = typeof v.NAMESPACE == "string" ? v.NAMESPACE : _t, rn = Je(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ct(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Fn = Je(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? Ct(v.HTML_INTEGRATION_POINTS) : ye({}, ["annotation-xml"]);
    const N = Je(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? Ct(v.CUSTOM_ELEMENT_HANDLING) : Uo(null);
    if (ee = Uo(null), Je(N, "tagNameCheck") && Mo(N.tagNameCheck) && (ee.tagNameCheck = N.tagNameCheck), Je(N, "attributeNameCheck") && Mo(N.attributeNameCheck) && (ee.attributeNameCheck = N.attributeNameCheck), Je(N, "allowCustomizedBuiltInElements") && typeof N.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = N.allowCustomizedBuiltInElements), Ke && (Ge = !1), It && (ct = !0), He && (W = ye({}, _c), me = Uo(null), He.html === !0 && (ye(W, kc), ye(me, Tc)), He.svg === !0 && (ye(W, oa), ye(me, aa), ye(me, tr)), He.svgFilters === !0 && (ye(W, sa), ye(me, aa), ye(me, tr)), He.mathMl === !0 && (ye(W, ra), ye(me, Sc), ye(me, tr))), ze.tagCheck = null, ze.attributeCheck = null, Je(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? ze.tagCheck = v.ADD_TAGS : Pt(v.ADD_TAGS) && (W === U && (W = Ct(W)), ye(W, v.ADD_TAGS, Oe))), Je(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? ze.attributeCheck = v.ADD_ATTR : Pt(v.ADD_ATTR) && (me === Ie && (me = Ct(me)), ye(me, v.ADD_ATTR, Oe))), Je(v, "ADD_URI_SAFE_ATTR") && Pt(v.ADD_URI_SAFE_ATTR) && ye(zn, v.ADD_URI_SAFE_ATTR, Oe), Je(v, "FORBID_CONTENTS") && Pt(v.FORBID_CONTENTS) && (ft === mo && (ft = Ct(ft)), ye(ft, v.FORBID_CONTENTS, Oe)), Je(v, "ADD_FORBID_CONTENTS") && Pt(v.ADD_FORBID_CONTENTS) && (ft === mo && (ft = Ct(ft)), ye(ft, v.ADD_FORBID_CONTENTS, Oe)), xe && (W["#text"] = !0), st && ye(W, ["html", "head", "body"]), W.table && (ye(W, ["tbody"]), delete X.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw bs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw bs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O = v.TRUSTED_TYPES_POLICY, R = O.createHTML("");
    } else
      O === void 0 && (O = R_(m, s)), O !== null && typeof R == "string" && (R = O.createHTML(""));
    (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && W === U && (W = Ct(W)), ce.uponSanitizeAttribute.length > 0 && me === Ie && (me = Ct(me)), zt && zt(v), ln = v;
  }, Po = ye({}, [...oa, ...sa, ...k_]), go = ye({}, [...ra, ...__]), as = function(v) {
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
      const Me = vc(v, /^[\r\n\t ]+/);
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
          for (let Kt = Mt - 1; Kt >= 0; --Kt) {
            const qt = w(Me[Kt], !0);
            be.insertBefore(qt, b(v));
          }
        }
      }
      return Tt(v), !0;
    }
    return (L ? L(v) : v.nodeType) === Sn.element && !as(v) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && gt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (Tt(v), !0) : (Ke && v.nodeType === Sn.text && (N = v.textContent, jo([$, V, B], (be) => {
      N = Ho(N, be, " ");
    }), v.textContent !== N && (Vo(t.removed, {
      element: v.cloneNode()
    }), v.textContent = N)), St(ce.afterSanitizeElements, v, null), !1);
  }, No = function(v, N, Q) {
    if (Ve[N] || K && (N === "id" || N === "name") && (Q in n || Q in Ro))
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
            if (!((N === "src" || N === "xlink:href" || N === "href") && v !== "script" && bc(Q, "data:") === 0 && Dn[v])) {
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
  }, Fr = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Hs = function(v) {
    return !Fr[ws(v)] && gt(Ue, v);
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
      const be = N[we], Me = be.name, Mt = be.namespaceURI, Kt = be.value, qt = Oe(Me), ls = Kt;
      let rt = Me === "value" ? ls : m_(ls);
      if (Q.attrName = qt, Q.attrValue = rt, Q.keepAttr = !0, Q.forceKeepAttr = void 0, St(ce.uponSanitizeAttribute, v, Q), rt = Q.attrValue, ke && (qt === "id" || qt === "name") && bc(rt, dt) !== 0 && (x(Me, v), rt = dt + rt), yt && gt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, rt)) {
        x(Me, v);
        continue;
      }
      if (qt === "attributename" && vc(rt, "href")) {
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
      Ke && jo([$, V, B], (Us) => {
        rt = Ho(rt, Us, " ");
      });
      const Do = Oe(v.nodeName);
      if (!No(Do, qt, rt)) {
        x(Me, v);
        continue;
      }
      if (O && typeof m == "object" && typeof m.getAttributeType == "function" && !Mt)
        switch (m.getAttributeType(Do, qt)) {
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
          Mt ? v.setAttributeNS(Mt, Me, rt) : v.setAttribute(Me, rt), Qe(v) ? Tt(v) : gc(t.removed);
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
    if (Tn = !ae, Tn && (ae = "<!-->"), typeof ae != "string" && !$t(ae) && (ae = y_(ae), typeof ae != "string"))
      throw bs("dirty is not a string, aborting");
    if (!t.isSupported)
      return ae;
    if (wt || cn(v), t.removed = [], typeof ae == "string" && (kt = !1), kt) {
      const Kt = I ? I(ae) : ae.nodeName;
      if (typeof Kt == "string") {
        const qt = Oe(Kt);
        if (!W[qt] || X[qt])
          throw bs("root node is forbidden and cannot be sanitized in-place");
      }
      if (Qe(ae))
        throw bs("root node is clobbered and cannot be sanitized in-place");
      no(ae);
    } else if ($t(ae))
      N = Z("<!---->"), Q = N.ownerDocument.importNode(ae, !0), Q.nodeType === Sn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q), no(Q);
    else {
      if (!ct && !Ke && !st && // eslint-disable-next-line unicorn/prefer-includes
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
      return Ke && Be(ae), ae;
    if (ct) {
      if (Ke && Be(N), It)
        for (be = H.call(N.ownerDocument); N.firstChild; )
          be.appendChild(N.firstChild);
      else
        be = N;
      return (me.shadowroot || me.shadowrootmode) && (be = de.call(o, be, !0)), be;
    }
    let Mt = st ? N.outerHTML : N.innerHTML;
    return st && W["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && gt(I_, N.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Mt), Ke && jo([$, V, B], (Kt) => {
      Mt = Ho(Mt, Kt, " ");
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
      const N = f_(ce[ae], v);
      return N === -1 ? void 0 : p_(ce[ae], N, 1)[0];
    }
    return gc(ce[ae]);
  }, t.removeHooks = function(ae) {
    ce[ae] = [];
  }, t.removeAllHooks = function() {
    ce = Cc();
  }, t;
}
var M_ = Rd();
const P_ = {
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
function N_(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : M_.sanitize(e, P_) : "";
}
const D_ = 24, z_ = 120, B_ = 420, F_ = 1200, j_ = 24e3, V_ = 1800, H_ = 5200, Aa = (e) => {
  const t = e.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!t || t.index === void 0)
    return { reasoning: "", answer: e };
  const n = e.slice(0, t.index).trim(), o = t[0], s = e.slice(t.index + o.length).trim();
  return {
    reasoning: (t[1] ?? "").trim(),
    answer: [n, s].filter(Boolean).join(`

`)
  };
}, W_ = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return `code-${e.length}-${t.toString(16)}`;
}, Md = (e, t) => {
  if (e.size <= t) return;
  const n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}, U_ = (e, t, n) => e.includes("<pre>") ? e.replace(
  /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
  (o, s, r) => {
    const a = document.createElement("textarea");
    a.innerHTML = r;
    const i = a.value, c = W_(i);
    t.codeCache.set(c, i), Md(t.codeCache, z_);
    const u = s ? ` class="${s}"` : "", d = n("common.copy");
    return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${c}" title="${d}">${d}</button><pre><code${u}>${r}</code></pre></div>`;
  }
) : e, Ec = (e, t, n, o = {}) => {
  const s = o.cache !== !1, r = `${n("common.copy")}\0${e}`, a = s ? t.htmlCache.get(r) : void 0;
  if (a) return a;
  const i = N_($e.parse(e, { async: !1 })), c = o.enhanceCodeBlocks === !1 ? i : U_(i, t, n);
  return s && (t.htmlCache.set(r, c), Md(t.htmlCache, D_)), c;
}, G_ = (e, t, n, o, s) => {
  if (!t) return !0;
  const r = e.content.length >= j_, a = r ? F_ : B_, i = r ? H_ : V_;
  return s - t.updatedAt >= a || e.content.length - t.source.length >= i || !t.reasoning && !!n || !t.answer && !!o;
}, K_ = (e, t, n) => {
  const { reasoning: o, answer: s } = Aa(e.content);
  if (!e.streaming)
    return n.streamingSnapshots.delete(e.id), t === "reasoning" ? o : s;
  const r = Date.now(), a = n.streamingSnapshots.get(e.id);
  return G_(e, a, o, s, r) ? (n.streamingSnapshots.set(e.id, {
    source: e.content,
    reasoning: o,
    answer: s,
    updatedAt: r
  }), t === "reasoning" ? o : s) : t === "reasoning" ? a?.reasoning ?? o : a?.answer ?? s;
}, q_ = (e, t, n, o) => {
  const s = K_(e, t, n);
  if (!e.streaming) return Ec(s, n, o);
  const r = n.streamingSnapshots.get(e.id), a = t === "reasoning" ? "reasoningHtml" : "answerHtml", i = t === "reasoning" ? "reasoning" : "answer";
  if (r?.[i] === s && r[a])
    return r[a];
  const c = Ec(s, n, o, {
    cache: !1,
    enhanceCodeBlocks: !1
  });
  return r?.[i] === s && (r[a] = c), c;
}, Z_ = async (e, t, n) => {
  const s = e.target?.closest(".code-copy-btn"), r = s?.dataset.codeId ? t.codeCache.get(s.dataset.codeId) : void 0;
  if (r)
    try {
      await navigator.clipboard.writeText(r), Ee.msg(n("localAi.codeCopied"));
    } catch (a) {
      Ee.msg(`${n("common.copy")}: ${a}`, "error");
    }
}, Y_ = (e, t) => {
  e.allowThinking && (t.includes("<think>") && !e.reasoningStartedAt && (e.reasoningStartedAt = Date.now()), t.includes("</think>") && !e.reasoningEndedAt && (e.reasoningEndedAt = Date.now()));
}, X_ = () => {
  const { t: e } = Ps(), t = {
    htmlCache: /* @__PURE__ */ new Map(),
    codeCache: /* @__PURE__ */ new Map(),
    streamingSnapshots: /* @__PURE__ */ new Map()
  };
  return {
    renderMessageMarkdown: (n, o) => q_(n, o, t, e),
    handleMarkdownClick: (n) => Z_(n, t, e),
    messageReasoning: (n) => Aa(n).reasoning,
    messageAnswer: (n) => Aa(n).answer,
    recordReasoningProgress: Y_,
    discardStreamingMarkdown: (n) => {
      t.streamingSnapshots.delete(n);
    },
    clearMarkdownState: () => {
      t.htmlCache.clear(), t.codeCache.clear(), t.streamingSnapshots.clear();
    }
  };
}, Q_ = {
  key: 0,
  class: "attachment-preview-dialog__body"
}, J_ = { class: "attachment-preview-dialog__viewport" }, e2 = ["src", "alt"], t2 = { class: "attachment-preview-dialog__meta" }, n2 = { class: "attachment-preview-dialog__file" }, o2 = ["title"], s2 = /* @__PURE__ */ oe({
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
    return (a, i) => (S(), se(l(dd), {
      modelValue: l(r),
      "onUpdate:modelValue": i[0] || (i[0] = (c) => Qt(r) ? r.value = c : null),
      title: l(s)("localAi.attachmentPreview"),
      width: "min(1000px, calc(100vw - 40px))",
      "custom-class": "local-ai-attachment-preview-dialog",
      "close-on-click-modal": !0
    }, {
      default: J(() => [
        a.attachment?.dataUrl ? (S(), D("div", Q_, [
          f("div", J_, [
            f("img", {
              src: a.attachment.dataUrl,
              alt: a.attachment.name
            }, null, 8, e2)
          ]),
          f("div", t2, [
            f("span", n2, [
              _(l(Lf), {
                theme: "outline",
                size: "16"
              }),
              f("strong", {
                title: a.attachment.name
              }, E(a.attachment.name), 9, o2)
            ]),
            f(
              "span",
              null,
              E(l(hd)(a.attachment.size)),
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
}), r2 = /* @__PURE__ */ Io(s2, [["__scopeId", "data-v-8ead8db0"]]), a2 = /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i, l2 = /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i, i2 = /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i, c2 = /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i, Pd = (e) => /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(e), xc = /^\s*(\d+)(?:[.)]\s+|、\s*)/, Lc = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
}, u2 = (e) => e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1").replace(/`([^`\n]+)`/g, "$1").replace(/\*\*([^*\n]+)\*\*/g, "$1").replace(/__([^_\n]+)__/g, "$1").replace(/~~([^~\n]+)~~/g, "$1").replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, "$1$2").replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, "$1$2"), d2 = (e) => e.replace(
  /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
  "$1"
).replace(
  /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
  "$1使用 $3"
).replace(
  /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
  "$1use $3"
), f2 = (e) => {
  const t = e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s{0,3}>\s?/, ""), n = t.match(xc), o = n ? `${n[1]}、` : "", s = t.replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, "").replace(/^\s*[-+*]\s+/, "").replace(xc, "");
  if (Pd(s))
    return "";
  const r = s.trim();
  return r.startsWith("|") && r.endsWith("|") ? r.slice(1, -1).split("|").map((a) => a.trim()).filter(Boolean).join("；") : `${o}${d2(
    u2(s)
  ).trimEnd()}`;
}, p2 = (e, t) => t ? !1 : !e || l2.test(e), m2 = (e, t) => t && i2.test(e), h2 = (e, t) => (t ? e : e.replace(a2, "")).trim(), g2 = (e, t) => !!(e || t), Ca = (e) => /[\u3400-\u9fff]/.test(e), v2 = (e, t = !1) => {
  const n = Ca(e), o = n && t ? `
上一次结果语言错误。本次必须使用简体中文，不得翻译为英文。` : "";
  return {
    systemPrompt: `${n ? Lc.zh : Lc.en}${o}`,
    userPrompt: n ? `改写以下原文：
<原文>
${e}
</原文>` : `Rewrite the following source:
<source>
${e}
</source>`,
    maxTokens: Math.min(640, Math.max(320, Math.ceil(e.length * 1.4)))
  };
}, Ic = (e, t) => !Ca(e) || Ca(t), b2 = (e) => {
  const n = e.replace(/^[\s\S]*?<\/think>\s*/i, "").replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/^\s*```(?:markdown|md|text)?\s*$/gim, "").replace(/^\s*```\s*$/gim, "").replace(/\r\n?/g, `
`).trim().split(`
`), o = [];
  for (const s of n) {
    if (Pd(s)) continue;
    const r = f2(s).trim(), a = o.length > 0;
    if (p2(r, a)) continue;
    if (m2(r, a)) break;
    if (c2.test(r)) continue;
    const i = h2(r, a);
    g2(i, o.at(-1)) && o.push(i);
  }
  return o.join(`
`).replace(/\n{3,}/g, `

`).trim();
}, ks = "snippets.localAi.pendingPrompt", wl = "snippets.localAi.pendingPromptMode", Nd = "new-chat", y2 = (e, t) => {
  e.setItem(ks, t), e.setItem(
    wl,
    Nd
  );
}, la = (e) => e.getItem(wl) === Nd, w2 = { class: "sidebar-header" }, k2 = { class: "sidebar-brand" }, _2 = { class: "sidebar-title-block" }, T2 = ["title", "aria-pressed"], S2 = { class: "sidebar-nav" }, A2 = ["disabled"], C2 = { class: "sidebar-search" }, E2 = ["placeholder"], x2 = {
  key: 0,
  class: "sidebar-search-count"
}, L2 = { class: "sidebar-section recent-section" }, I2 = { class: "section-title-row" }, O2 = { class: "section-title" }, $2 = { class: "section-title-actions" }, R2 = ["title", "disabled"], M2 = ["title", "disabled"], P2 = {
  key: 0,
  class: "chat-list"
}, N2 = ["tabindex", "aria-disabled", "onClick", "onKeydown"], D2 = { class: "chat-item-copy" }, z2 = { class: "chat-item-title" }, B2 = { class: "chat-item-title-track" }, F2 = { class: "chat-item-title-text" }, j2 = {
  class: "chat-item-title-text chat-item-title-clone",
  "aria-hidden": "true"
}, V2 = { class: "chat-item-time" }, H2 = ["title", "disabled", "onClick"], W2 = {
  key: 1,
  class: "sidebar-empty"
}, U2 = { class: "sidebar-service" }, G2 = { class: "sidebar-service-card" }, K2 = { class: "sidebar-service-icon" }, q2 = { class: "sidebar-service-copy" }, Z2 = { class: "chat-panel" }, Y2 = { class: "chat-panel-header" }, X2 = { class: "chat-panel-heading" }, Q2 = ["title"], J2 = { class: "chat-context-mark" }, e4 = { class: "chat-context-copy" }, t4 = {
  key: 0,
  class: "empty-state"
}, n4 = { class: "empty-hero" }, o4 = { class: "empty-hero-mark" }, s4 = { class: "empty-eyebrow" }, r4 = { class: "quick-prompt-section" }, a4 = { class: "quick-prompt-heading" }, l4 = { class: "quick-prompt-grid" }, i4 = ["onClick"], c4 = { class: "quick-prompt-icon" }, u4 = { class: "quick-prompt-copy" }, d4 = {
  key: 0,
  class: "date-divider"
}, f4 = { class: "message-avatar" }, p4 = { key: 1 }, m4 = { class: "message-body" }, h4 = { class: "user-bubble" }, g4 = {
  key: 0,
  class: "user-message-text"
}, v4 = {
  key: 1,
  class: "message-attachment-list"
}, b4 = ["title", "aria-label", "onClick"], y4 = ["src", "alt"], w4 = {
  key: 1,
  class: "attachment-file-icon"
}, k4 = { key: 2 }, _4 = {
  key: 0,
  class: "message-actions"
}, T4 = ["title", "onClick"], S4 = ["title", "onClick"], A4 = ["title", "onClick"], C4 = { class: "assistant-head" }, E4 = { key: 0 }, x4 = {
  key: 0,
  class: "assistant-content-stack"
}, L4 = ["open"], I4 = { class: "reasoning-summary-title" }, O4 = { key: 0 }, $4 = ["innerHTML"], R4 = ["innerHTML"], M4 = {
  key: 0,
  class: "message-stats"
}, P4 = { class: "message-stats__context" }, N4 = { class: "message-stats__output" }, D4 = { class: "message-stats__elapsed" }, z4 = { class: "message-stats__speed" }, B4 = {
  key: 0,
  class: "message-stats-time"
}, F4 = {
  key: 1,
  class: "message-warning"
}, j4 = {
  key: 2,
  class: "message-actions"
}, V4 = ["title", "aria-label"], H4 = ["disabled", "title", "onClick"], W4 = ["disabled", "title", "onClick"], U4 = ["title", "onClick"], G4 = ["title", "onClick"], K4 = ["title", "onClick"], q4 = ["title", "onClick"], Z4 = ["title", "onClick"], Y4 = ["title"], X4 = { class: "composer-dock" }, Q4 = {
  key: 0,
  class: "attachment-preview-list"
}, J4 = ["title", "aria-label", "onClick"], eT = ["src", "alt"], tT = {
  key: 1,
  class: "attachment-file-icon"
}, nT = { class: "attachment-meta" }, oT = ["title", "onClick"], sT = ["placeholder", "readonly", "aria-busy"], rT = { class: "input-toolbar" }, aT = { class: "input-toolbar-left" }, lT = ["title", "disabled"], iT = ["disabled", "title"], cT = ["title", "aria-pressed"], uT = { class: "input-toolbar-right" }, dT = { class: "model-select-shell" }, fT = { class: "chat-model-option" }, pT = { class: "chat-model-option-name" }, mT = { class: "input-hint" }, hT = ["disabled", "title", "aria-label"], gT = ["disabled", "title", "aria-label"], vT = 96, bT = 4096, yT = 90, wT = 1e3, kT = /* @__PURE__ */ oe({
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
    } = wk(), {
      clearMarkdownState: u,
      discardStreamingMarkdown: d,
      handleMarkdownClick: m,
      messageAnswer: g,
      messageReasoning: w,
      recordReasoningProgress: h,
      renderMessageMarkdown: b
    } = X_(), C = P(""), k = P([]), M = P(""), j = P(!1), L = P(""), I = P(null), O = P(!1), R = P(!1), q = P(!1), F = P(!1), ne = P(!1), H = P(!1), re = P(!1), de = P(!1), ce = P(!0), $ = P(!1), V = P(null), B = io(null);
    let ue = !1, fe = null, Te = !1, De = !1, Ue = null;
    const ve = P(null), W = P(null), U = P(""), me = P(null), Ie = P(null), ee = P(null), X = A({
      get: () => !!ee.value,
      set: (p) => {
        p || (ee.value = null);
      }
    }), Ve = P(Date.now());
    let ze = null, ut = null, Ge = null, Lt = !1, bt = null, Ke = null, yt = !1, st = 0, wt = null;
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
    }, K = [
      {
        title: "localAi.quickPromptSummary",
        description: "localAi.quickPromptSummaryDesc",
        icon: Cf
      },
      {
        title: "localAi.quickPromptTranslate",
        description: "localAi.quickPromptTranslateDesc",
        icon: Mf
      },
      {
        title: "localAi.quickPromptCode",
        description: "localAi.quickPromptCodeDesc",
        icon: Sf
      },
      {
        title: "localAi.quickPromptRegex",
        description: "localAi.quickPromptRegexDesc",
        icon: Hl
      }
    ], ke = A(
      () => (!!L.value.trim() || n.value.length > 0) && !R.value && !O.value
    ), dt = A(
      () => !!L.value.trim() && !R.value && !O.value && !V.value
    ), xe = A(() => R.value || O.value), kt = A(() => me.value?.healthy ? t("localAi.serviceHealthy") : me.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), He = A(
      () => k.value.find((p) => p.id === M.value) ?? null
    ), ft = A(
      () => He.value?.title || t("localAi.newChatTitle")
    ), mo = A(() => lr(He.value)), Dn = A(() => dk(He.value)), kn = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", zn = (p) => {
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
        Math.max(bT, Math.floor(p * 0.5)),
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
      y && (be(), Ue = G), L.value = G, De = !1, localStorage.removeItem(wl), Ze(() => {
        to(), I.value?.focus();
      });
    }, $o = async () => {
      try {
        const p = await tt("take_pending_local_ai_prompt"), y = typeof p == "string" ? p.trim() : "";
        return y && y2(localStorage, y), y;
      } catch (p) {
        return Et.warn("[LocalAI] take pending prompt failed", p), "";
      }
    }, Oe = async () => {
      try {
        return await tt("take_pending_local_ai_new_chat");
      } catch (p) {
        return Et.warn("[LocalAI] take pending new chat failed", p), !1;
      }
    }, ln = (p) => {
      const y = p.detail;
      $o().then((G) => {
        const te = typeof y == "string" ? y.trim() : "", T = G || te;
        !T || !(G || la(localStorage)) && T === Ue || jn(T, !0);
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
      const G = v2(
        p,
        y
      ), te = await ww({
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
      return b2(te.content);
    }, as = async () => {
      const p = L.value.trim();
      if (!(!p || !dt.value)) {
        O.value = !0;
        try {
          let y = await go(p, !1);
          if (Ic(p, y) || (y = await go(p, !0)), !y) throw new Error(t("localAi.enhancePromptEmpty"));
          if (!Ic(p, y))
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
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= vT : !0;
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
    }, Fr = (p) => {
      const y = p.touches[0]?.clientY;
      y === void 0 || wt === null || (y > wt && Qe(), wt = y);
    }, Hs = () => {
      wt = null, ge();
    }, Ws = () => {
      if (!bt) return;
      const p = Ie.value?.querySelector(".assistant-card--streaming") ?? null;
      p !== Ke && (Ke && bt.unobserve(Ke), Ke = p, Ke && bt.observe(Ke));
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
        ve.value = await ad(), U.value = ve.value.modelPath ?? "", W.value = await ld(ve.value), rn.value || (re.value = !1);
      } catch (p) {
        Et.warn("[LocalAI] refresh chat config failed", p);
      }
    }, v = async () => {
      if (!q.value) {
        q.value = !0;
        try {
          me.value = await id();
        } catch (p) {
          Et.warn("[LocalAI] refresh chat status failed", p);
        } finally {
          q.value = !1;
        }
      }
    }, N = async () => {
      try {
        const p = await _w();
        if (k.value = p.map((y) => {
          const G = y.messages?.length ? y.messages : y.turns.map((T) => ({
            id: T.id,
            role: T.role,
            content: T.content,
            createdAt: T.createdAt
          })), te = uk(
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
      await Sw({
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
      M.value !== p && (L.value = "", n.value = [], Ut()), M.value = p;
      const y = He.value;
      y && !y.currentNodeId && (y.currentNodeId = js(y.messages, Fs(y.messages)?.id) ?? null), ce.value = !0, Rt({ force: !0 });
    }, Kt = async (p) => {
      if (xe.value) return;
      const y = M.value === p;
      k.value = k.value.filter((G) => G.id !== p);
      try {
        await Aw(p);
      } catch (G) {
        Et.warn("[LocalAI] delete history failed", G), await N(), Ee.msg(`${t("common.operationFailed")}: ${String(G)}`, "error");
        return;
      }
      y && (M.value = k.value[0]?.id ?? "", L.value = "", n.value = [], Ut());
    }, qt = async () => {
      if (!(xe.value || F.value)) {
        F.value = !0;
        try {
          await Cw(), k.value = [], M.value = "", C.value = "", L.value = "", n.value = [], ne.value = !1, Ut(), u(), Ee.msg(t("localAi.clearAllChatsSuccess"));
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
        ve.value = await rr(p), me.value?.running && (me.value = await cd()), Ee.msg(t("localAi.modelChanged"));
      } catch (y) {
        await ae(), Ee.msg(`${t("localAi.configSaveFailed")}: ${y}`, "error");
      }
    }, rt = (p) => !!g(p.content), Do = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !rt(p)), Us = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const y = p.reasoningEndedAt ?? (p.streaming ? Ve.value : Date.now());
      return Math.max(0, (y - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, Dd = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Us(p)
    }), Vn = (p) => new Date(
      p.createdAt || He.value?.updatedAt || Date.now()
    ), kl = (p) => Vn(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), zd = (p, y) => Vn(p).toDateString() === Vn(y).toDateString(), _l = (p) => Vn(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), Bd = (p) => {
      const y = Dn.value[p]?.message;
      if (!y) return !1;
      if (p === 0) return !_l(y);
      const G = Dn.value[p - 1]?.message;
      return G ? zd(G, y) ? Vn(y).getTime() - Vn(G).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, Fd = (p) => {
      const y = Vn(p), G = y.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), te = y.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return _l(p) ? te : `${G} ${te}`;
    }, jd = (p) => p.streaming ? Do(p) ? t("localAi.thinking") : t("localAi.generating") : kl(p), Vd = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Hd = (p = He.value) => {
      const y = ak(), G = ns([y]), te = Math.max(
        512,
        eo.value - G
      );
      return [
        y,
        ...ck(
          lr(p).filter((T) => !T.streaming && T.role !== "system").map((T) => ({
            role: T.role,
            content: T.role === "user" ? sk(T) : T.content
          })),
          te,
          t("localAi.previousAnswerTail")
        )
      ];
    }, Wd = () => nk(ve.value?.maxTokens ?? 0), Tl = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? ve.value?.ctxSize ?? me.value?.ctxSize ?? 4096
    ), Sl = (p) => {
      const y = Ve.value, G = p.stats?.promptTokens ?? p.promptTokens ?? 0, te = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? ea(p.content) : vd(p.content)), T = Tl(p), _e = Math.min(
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
    }, Ud = A(() => (Ve.value, new Map(
      Dn.value.map(({ message: p }) => [
        p.id,
        Sl(p)
      ])
    ))), oo = (p) => Ud.value.get(p.id) ?? Sl(p), Al = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : p.stats?.finishReason === "length" ? (p.stats?.totalTokens ?? oo(p).context) >= Tl(p) - 8 ? t("localAi.contextLimitReached") : t("localAi.outputLimitReached") : "", Cl = (p) => {
      const y = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(y) ? t("localAi.contextExceeded") : y;
    }, Gd = (p) => {
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
    }, El = () => {
      ut || (Ve.value = Date.now(), ut = setInterval(() => {
        Ve.value = Date.now();
      }, wT));
    }, jr = () => {
      ut && (clearInterval(ut), ut = null, Ve.value = Date.now());
    }, xl = (p) => {
      const y = ud();
      return H.value = !1, V.value = y, B.value = p, y;
    }, Gs = (p) => {
      p && V.value !== p || (V.value = null, B.value = null);
    }, Ll = (p, y) => {
      p.streaming = !1, p.stopped = !0, p.interrupted = !1, p.error = "", p.reasoningStartedAt && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()), y !== void 0 && (p.elapsedMs = y), d(p.id), Ve.value = Date.now();
    }, Il = async (p, y, G) => {
      const te = performance.now();
      let T = Hd(y), _e = "", le = null, Se = null, Ce = !1, Hn = !1;
      if (H.value) {
        Ll(p, performance.now() - te), Gs(G);
        return;
      }
      T = lk(T), p.promptTokens = ns(T), p.contextSize = Tn.value;
      const jt = async () => {
        if (!_e) {
          le = null, Se?.(), Se = null;
          return;
        }
        const ht = H.value ? _e.length : _e.length > 4e3 ? 900 : _e.length > 1200 ? 520 : _e.length > 240 ? 180 : 64;
        if (p.content += _e.slice(0, ht), _e = _e.slice(ht), p.estimatedCompletionTokens = ea(
          p.content
        ), !Hn && !H.value && Gd(p.content) && (Hn = !0, H.value = !0, p.repetitionStopped = !0, Xr(G).catch(
          (un) => Et.warn("[LocalAI] repetition stop failed", un)
        )), await Rt(), !_e) {
          le = null, Se?.(), Se = null;
          return;
        }
        le = window.setTimeout(() => {
          jt().catch(
            (un) => Et.warn("[LocalAI] stream pump failed", un)
          );
        }, yT);
      }, Vr = (ht) => {
        ht && (h(p, ht), _e += ht, le === null && (le = window.setTimeout(() => {
          jt().catch(
            (un) => Et.warn("[LocalAI] stream pump failed", un)
          );
        }, 32)));
      }, zl = async () => {
        !_e && le === null || await new Promise((ht) => {
          Se = ht;
        });
      }, zo = await kw(
        {
          messages: T,
          maxTokens: Wd(),
          enableThinking: p.allowThinking === !0
        },
        (ht) => {
          H.value || (Ce = !0, Vr(ht));
        },
        {
          requestId: G,
          onStats: (ht) => {
            const un = ok(p.stats, ht);
            p.stats = un, un.ctxSize && (p.contextSize = un.ctxSize), un.completionTokens !== void 0 && (p.estimatedCompletionTokens = un.completionTokens), Ve.value = Date.now();
          }
        }
      ).catch(async (ht) => {
        throw await zl(), ht;
      });
      if (!Ce)
        Vr(zo.content);
      else if (!H.value) {
        const ht = p.content.length + _e.length;
        zo.content.length > ht && Vr(zo.content.slice(ht));
      }
      await zl(), !H.value && zo.content && p.content !== zo.content && (p.content = zo.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? ea(p.content), d(p.id), p.streaming = !1, p.elapsedMs = performance.now() - te, p.stopped = H.value, p.interrupted = !1, p.error = "", Ve.value = Date.now(), Gs(G);
    }, Kd = async () => {
      const p = V.value;
      if (!R.value || H.value) return;
      H.value = !0;
      const y = B.value;
      if (y && Ll(
        y,
        Math.max(0, Date.now() - Vn(y).getTime())
      ), !!p)
        try {
          await Xr(p);
        } catch (G) {
          Et.warn("[LocalAI] cancel stream failed", G);
        }
    }, qd = () => {
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
    }, Ol = async () => {
      const p = L.value.trim();
      if (xe.value || !qd()) return;
      Me();
      const y = (/* @__PURE__ */ new Date()).toISOString(), G = Qr(n.value), te = p || G[0]?.name || "", T = He.value;
      if (!T) return;
      const _e = ta(T, {
        id: yo("user"),
        role: "user",
        content: p,
        createdAt: y,
        attachments: G
      }), le = ta(T, {
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
      const Se = xl(le);
      El(), await Rt({ force: !0 });
      const Ce = performance.now();
      try {
        await Il(le, T, Se), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T)), await v();
      } catch (Hn) {
        if (H.value)
          T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T);
        else {
          L.value = p, n.value = G;
          const jt = Cl(Hn);
          Ee.msg(`${t("localAi.chatFailed")}: ${jt}`, "error"), le.error = jt, le.interrupted = !!le.content.trim(), le.interrupted || (le.content = jt), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await we(T));
        }
        le.streaming = !1, d(le.id), le.elapsedMs = performance.now() - Ce;
      } finally {
        R.value = !1, Gs(Se), jr(), await Rt();
      }
    }, Zd = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), Ol());
    }, $l = (p) => {
      (p.ctrlKey || p.metaKey) && p.key.toLowerCase() === "n" && !p.shiftKey && !p.altKey && (p.preventDefault(), be());
    }, Yd = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Xd = (p) => {
      const y = new Date(p), G = /* @__PURE__ */ new Date(), te = G.getTime() - y.getTime(), T = 24 * 60 * 60 * 1e3;
      return y.toDateString() === G.toDateString() ? y.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : te < T * 2 ? t("localAi.yesterday") : te < T * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(te / T))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(te / (T * 7)))
      });
    }, Rl = async (p) => {
      try {
        await navigator.clipboard.writeText(p.content), Ee.msg(t("localAi.copied"));
      } catch (y) {
        Ee.msg(`${t("common.operationFailed")}: ${y}`, "error");
      }
    }, Ml = async (p) => {
      if (R.value) return;
      const y = He.value;
      if (!y) return;
      const G = pk(
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
        await Kt(y.id);
        return;
      }
      y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString();
      try {
        await we(y);
      } catch (Ce) {
        y.messages = T, y.currentNodeId = _e, y.updatedAt = le, y.updatedAtLabel = Se, Et.warn("[LocalAI] delete message failed", Ce), Ee.msg(`${t("common.operationFailed")}: ${String(Ce)}`, "error");
      }
    }, Pl = (p) => {
      R.value || (L.value = p.content, n.value = Qr(p.attachments), He.value && p.parentId && (He.value.currentNodeId = p.parentId), cn());
    }, Nl = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), Dl = (p, y) => {
      if (R.value) return;
      const G = He.value;
      if (!G) return;
      const te = p.siblingCurrentIndex + y, T = p.siblingLeafNodeIds[te];
      T && (G.currentNodeId = T, ce.value = !0, Rt({ force: !0 }));
    }, Qd = async (p) => {
      const y = He.value;
      if (!y || R.value) return;
      const G = y.messages.find((Ce) => Ce.id === p);
      if (!G || G.role !== "assistant") return;
      const te = yd(y.messages, G.id);
      if (!te.length) return;
      const T = (/* @__PURE__ */ new Date()).toISOString(), _e = /* @__PURE__ */ new Map(), le = te.map((Ce, Hn) => {
        const jt = yo(Hn === 0 ? "root" : Ce.role);
        return _e.set(Ce.id, jt), {
          ...Ce,
          id: jt,
          parentId: Ce.parentId ? _e.get(Ce.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Qr(Ce.attachments)
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
    }, Jd = async (p) => {
      const y = He.value;
      if (!y || R.value) return;
      const G = y.messages.find((le) => le.id === p);
      if (!G || G.role !== "assistant" || !G.parentId) return;
      y.currentNodeId = G.parentId;
      const te = ta(y, {
        id: yo("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: G.parentId,
        streaming: !0,
        allowThinking: re.value && rn.value
      });
      R.value = !0;
      const T = xl(te);
      El(), await Rt({ force: !0 });
      const _e = performance.now();
      try {
        await Il(te, y, T), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
      } catch (le) {
        if (H.value)
          y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        else {
          const Se = Cl(le);
          Ee.msg(`${t("localAi.chatFailed")}: ${Se}`, "error"), te.error = Se, te.interrupted = !!te.content.trim(), te.interrupted || (te.content = Se), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        }
        te.streaming = !1, d(te.id), te.elapsedMs = performance.now() - _e;
      } finally {
        R.value = !1, Gs(T), jr(), await Rt();
      }
    };
    return ot(async () => {
      window.addEventListener("local-ai-prompt-ready", ln), window.addEventListener(
        "local-ai-new-chat-requested",
        Ro
      ), jn(
        localStorage.getItem(ks),
        la(localStorage)
      ), to(), typeof ResizeObserver < "u" && (bt = new ResizeObserver(() => {
        ce.value && Rt();
      })), window.addEventListener("pointerup", Gt), window.addEventListener("pointercancel", Gt), window.addEventListener("keydown", $l);
      try {
        await Q();
      } finally {
        const [p, y] = await Promise.all([
          $o(),
          Oe()
        ]);
        ue = !0;
        const G = !!p || Te || la(localStorage), te = p || fe || localStorage.getItem(ks);
        fe = null, Te = !1, te ? jn(te, G) : (y || De) && an();
      }
      ze = setInterval(() => {
        v().catch(
          (p) => Et.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), pe(rn, (p) => {
      p || (re.value = !1);
    }), La(() => {
      ue = !1, fe = null, Te = !1, De = !1, Ue = null, window.removeEventListener("local-ai-prompt-ready", ln), window.removeEventListener(
        "local-ai-new-chat-requested",
        Ro
      ), ze && clearInterval(ze), Ge !== null && (window.cancelAnimationFrame(Ge), Ge = null), bt?.disconnect(), bt = null, Ke = null, window.removeEventListener("pointerup", Gt), window.removeEventListener("pointercancel", Gt), window.removeEventListener("keydown", $l), V.value && Xr(V.value), u(), jr();
    }), (p, y) => {
      const G = nd, te = td;
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
              f("header", w2, [
                f("div", k2, [
                  f("div", _2, [
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
                  _(l(Vl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, T2)
              ]),
              f("div", S2, [
                f("button", {
                  class: "sidebar-new-chat-btn",
                  type: "button",
                  disabled: l(xe),
                  onClick: be
                }, [
                  _(l(Hr), {
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
                ], 8, A2),
                f("label", C2, [
                  _(l(Of), {
                    theme: "outline",
                    size: "16"
                  }),
                  lt(f("input", {
                    "onUpdate:modelValue": y[1] || (y[1] = (T) => Qt(C) ? C.value = T : null),
                    placeholder: l(t)("localAi.searchHistory")
                  }, null, 8, E2), [
                    [xs, l(C)]
                  ]),
                  l(C) ? (S(), D(
                    "span",
                    x2,
                    E(l(Fn).length),
                    1
                    /* TEXT */
                  )) : Y("v-if", !0)
                ])
              ]),
              f("section", L2, [
                f("div", I2, [
                  f(
                    "div",
                    O2,
                    E(l(t)("localAi.recent")),
                    1
                    /* TEXT */
                  ),
                  f("div", $2, [
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
                    ], 8, R2),
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: l(t)("plugins.refresh"),
                      disabled: l(xe) || l(q) || l(F),
                      onClick: Q
                    }, [
                      _(l(cs), {
                        class: z({ "animate-spin": l(q) }),
                        theme: "outline",
                        size: "14"
                      }, null, 8, ["class"])
                    ], 8, M2)
                  ])
                ]),
                l(Fn).length ? (S(), D("div", P2, [
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
                      onKeydown: En(qe((_e) => Mt(T.id), ["prevent"]), ["enter"])
                    }, [
                      f("span", D2, [
                        lt((S(), D("span", z2, [
                          f("span", B2, [
                            f(
                              "span",
                              F2,
                              E(T.title),
                              1
                              /* TEXT */
                            ),
                            f(
                              "span",
                              j2,
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
                          V2,
                          E(Xd(T.updatedAt)),
                          1
                          /* TEXT */
                        )
                      ]),
                      f("button", {
                        class: "chat-item-delete",
                        type: "button",
                        title: l(t)("common.delete"),
                        disabled: l(xe),
                        onClick: qe((_e) => Kt(T.id), ["stop"])
                      }, [
                        _(l(is), {
                          theme: "outline",
                          size: "13"
                        })
                      ], 8, H2)
                    ], 42, N2))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (S(), D(
                  "div",
                  W2,
                  E(l(t)("common.empty")),
                  1
                  /* TEXT */
                ))
              ]),
              f("footer", U2, [
                f("div", G2, [
                  f("span", K2, [
                    _(l(Wr), {
                      theme: "outline",
                      size: "15"
                    })
                  ]),
                  f("span", q2, [
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
                  onClick: Yd
                }, [
                  _(l(Mc), {
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
          f("section", Z2, [
            f("header", Y2, [
              f("div", X2, [
                l(j) ? (S(), D("button", {
                  key: 0,
                  class: "panel-sidebar-toggle",
                  type: "button",
                  title: l(t)("localAi.expandSidebar"),
                  onClick: y[3] || (y[3] = (T) => j.value = !1)
                }, [
                  _(l(Vl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, Q2)) : Y("v-if", !0),
                f("div", J2, [
                  _(l(Wr), {
                    theme: "outline",
                    size: "18"
                  })
                ]),
                f("div", e4, [
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
                onTouchmovePassive: Fr,
                onTouchend: Hs
              },
              [
                l(mo).length ? Y("v-if", !0) : (S(), D("section", t4, [
                  f("div", n4, [
                    f("div", o4, [
                      _(l(If), {
                        theme: "outline",
                        size: "30"
                      })
                    ]),
                    f("span", s4, [
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
                  f("div", r4, [
                    f("div", a4, [
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
                    f("div", l4, [
                      (S(), D(
                        at,
                        null,
                        Cn(K, (T) => f("button", {
                          key: T.title,
                          class: "quick-prompt-card",
                          type: "button",
                          onClick: (_e) => Po(T.title)
                        }, [
                          f("span", c4, [
                            (S(), se(Jt(T.icon), {
                              theme: "outline",
                              size: "17"
                            }))
                          ]),
                          f("span", u4, [
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
                          _(l(Wl), {
                            theme: "outline",
                            size: "14"
                          })
                        ], 8, i4)),
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
                      Bd(_e) ? (S(), D("div", d4, [
                        f(
                          "span",
                          null,
                          E(Fd(T.message)),
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
                          f("div", f4, [
                            T.message.role === "assistant" ? (S(), se(l(Wr), {
                              key: 0,
                              theme: "outline",
                              size: "18"
                            })) : (S(), D(
                              "span",
                              p4,
                              E(l(t)("localAi.youShort")),
                              1
                              /* TEXT */
                            ))
                          ]),
                          f("div", m4, [
                            T.message.role === "user" ? (S(), D(
                              at,
                              { key: 0 },
                              [
                                f("div", h4, [
                                  T.message.content ? (S(), D(
                                    "div",
                                    g4,
                                    E(T.message.content),
                                    1
                                    /* TEXT */
                                  )) : Y("v-if", !0),
                                  T.message.attachments?.length ? (S(), D("div", v4, [
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
                                            }, null, 8, y4)
                                          ], 8, b4)) : (S(), D(
                                            "span",
                                            w4,
                                            E(le.type === "text" ? "TXT" : "FILE"),
                                            1
                                            /* TEXT */
                                          )),
                                          le.type === "image" && le.dataUrl ? Y("v-if", !0) : (S(), D(
                                            "span",
                                            k4,
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
                                T.message.streaming ? Y("v-if", !0) : (S(), D("div", _4, [
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Rl(T.message)
                                  }, [
                                    _(l(Fl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, T4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => Pl(T.message)
                                  }, [
                                    _(l(Hr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, S4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => Ml(T.message.id)
                                  }, [
                                    _(l(is), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, A4)
                                ]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (S(), D(
                              at,
                              { key: 1 },
                              [
                                f("div", C4, [
                                  f(
                                    "span",
                                    null,
                                    E(l(Ot)),
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? (S(), D(
                                    "small",
                                    E4,
                                    E(jd(T.message)),
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
                                    T.message.content ? (S(), D("div", x4, [
                                      T.message.allowThinking && l(w)(T.message.content) ? (S(), D("details", {
                                        key: 0,
                                        class: "reasoning-panel",
                                        open: T.message.streaming && Do(T.message)
                                      }, [
                                        f("summary", null, [
                                          f("span", I4, [
                                            _(l(Bl), {
                                              theme: "outline",
                                              size: "14"
                                            }),
                                            pt(
                                              " " + E(Dd(T.message)),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          T.message.streaming ? (S(), D(
                                            "small",
                                            O4,
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
                                        }, null, 8, $4)
                                      ], 8, L4)) : Y("v-if", !0),
                                      l(g)(T.message.content) ? (S(), D("div", {
                                        key: 1,
                                        class: "message-content markdown-body",
                                        onClick: y[5] || (y[5] = //@ts-ignore
                                        (...le) => l(m) && l(m)(...le)),
                                        innerHTML: l(b)(T.message, "answer")
                                      }, null, 8, R4)) : Y("v-if", !0)
                                    ])) : (S(), D(
                                      "div",
                                      {
                                        key: 1,
                                        class: z([
                                          "message-content",
                                          T.message.stopped ? "" : "loading-text"
                                        ])
                                      },
                                      E(T.message.stopped ? l(t)("localAi.generationStopped") : Vd(T.message)),
                                      3
                                      /* TEXT, CLASS */
                                    ))
                                  ],
                                  2
                                  /* CLASS */
                                ),
                                T.message.content ? (S(), D("div", M4, [
                                  f(
                                    "span",
                                    P4,
                                    E(l(t)("localAi.contextLabel")) + ": " + E(oo(T.message).context) + "/" + E(oo(T.message).contextMax) + " (" + E(oo(T.message).contextPercent) + "%) ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    N4,
                                    E(l(t)("localAi.outputLabel")) + ": " + E(oo(T.message).output) + "/" + E(oo(T.message).outputMax),
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    D4,
                                    E(oo(T.message).seconds) + "s ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    z4,
                                    E(oo(T.message).speed) + " t/s ",
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? Y("v-if", !0) : (S(), D(
                                    "span",
                                    B4,
                                    E(kl(T.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ])) : Y("v-if", !0),
                                Al(T.message) ? (S(), D(
                                  "div",
                                  F4,
                                  E(Al(T.message)),
                                  1
                                  /* TEXT */
                                )) : Y("v-if", !0),
                                T.message.streaming ? Y("v-if", !0) : (S(), D("div", j4, [
                                  T.siblingLeafNodeIds.length > 1 ? (S(), D("div", {
                                    key: 0,
                                    class: "message-version-switcher",
                                    title: Nl(T),
                                    "aria-label": Nl(T)
                                  }, [
                                    f("button", {
                                      type: "button",
                                      disabled: T.siblingCurrentIndex <= 0,
                                      title: l(t)("localAi.previousVersion"),
                                      onClick: (le) => Dl(T, -1)
                                    }, " ‹ ", 8, H4),
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
                                      onClick: (le) => Dl(T, 1)
                                    }, " › ", 8, W4)
                                  ], 8, V4)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.copy"),
                                    onClick: (le) => Rl(T.message)
                                  }, [
                                    _(l(Fl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, U4),
                                  T.message.role === "assistant" ? (S(), D("button", {
                                    key: 1,
                                    type: "button",
                                    title: l(t)("localAi.regenerate"),
                                    onClick: (le) => Jd(T.message.id)
                                  }, [
                                    _(l(cs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, G4)) : Y("v-if", !0),
                                  T.message.role === "assistant" ? (S(), D("button", {
                                    key: 2,
                                    type: "button",
                                    title: l(t)("localAi.branchChat"),
                                    onClick: (le) => Qd(T.message.id)
                                  }, [
                                    _(l(Ef), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, K4)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.edit"),
                                    onClick: (le) => Pl(T.message)
                                  }, [
                                    _(l(Hr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, q4),
                                  f("button", {
                                    type: "button",
                                    title: l(t)("common.delete"),
                                    onClick: (le) => Ml(T.message.id)
                                  }, [
                                    _(l(is), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, Z4)
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
              _(l(Af), {
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
            ], 8, Y4)) : Y("v-if", !0),
            f("div", X4, [
              f(
                "form",
                {
                  class: z([
                    "chat-input-card",
                    l(de) ? "chat-input-card--focused" : "",
                    l(O) ? "chat-input-card--enhancing" : ""
                  ]),
                  onDragover: y[11] || (y[11] = qe(() => {
                  }, ["prevent"])),
                  onDrop: y[12] || (y[12] = qe(
                    //@ts-ignore
                    (...T) => l(r) && l(r)(...T),
                    ["prevent"]
                  )),
                  onSubmit: qe(Ol, ["prevent"]),
                  onFocusin: y[13] || (y[13] = (T) => de.value = !0),
                  onFocusout: y[14] || (y[14] = (T) => de.value = !1)
                },
                [
                  l(n).length ? (S(), D("div", Q4, [
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
                            }, null, 8, eT)
                          ], 8, J4)) : (S(), D(
                            "span",
                            tT,
                            E(T.type === "text" ? "TXT" : "FILE"),
                            1
                            /* TEXT */
                          )),
                          f("span", nT, [
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
                              E(l(hd)(T.size)) + " · " + E(l(s)(T)),
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
                          ], 8, oT)
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
                    onKeydown: Zd,
                    onPaste: y[7] || (y[7] = //@ts-ignore
                    (...T) => l(a) && l(a)(...T))
                  }, null, 40, sT), [
                    [xs, l(L)]
                  ]),
                  f("div", rT, [
                    f("div", aT, [
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
                        })) : (S(), se(l(xf), {
                          key: 1,
                          theme: "outline",
                          size: "16"
                        }))
                      ], 8, lT),
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
                        })) : (S(), se(l(Hl), {
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
                      ], 10, iT),
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
                        _(l(Bl), {
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
                      ], 10, cT)) : Y("v-if", !0)
                    ]),
                    f("div", uT, [
                      f("div", dT, [
                        _(l(jl), {
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
                                  f("span", fT, [
                                    _(l(jl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    f(
                                      "span",
                                      pT,
                                      E(kn(T)),
                                      1
                                      /* TEXT */
                                    ),
                                    l(U) === T ? (S(), se(l(Tf), {
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
                        mT,
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
                        })) : (S(), se(l(Rf), {
                          key: 1,
                          theme: "filled",
                          size: "11"
                        }))
                      ], 10, hT)) : (S(), D("button", {
                        key: 1,
                        class: "send-btn",
                        type: "submit",
                        disabled: !l(ke),
                        title: l(t)("localAi.send"),
                        "aria-label": l(t)("localAi.send")
                      }, [
                        _(l($f), {
                          theme: "outline",
                          size: "15"
                        })
                      ], 8, gT))
                    ])
                  ])
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ]),
          _(r2, {
            modelValue: l(X),
            "onUpdate:modelValue": y[15] || (y[15] = (T) => Qt(X) ? X.value = T : null),
            attachment: l(ee)
          }, null, 8, ["modelValue", "attachment"]),
          _(l(zw), {
            modelValue: l(ne),
            "onUpdate:modelValue": y[16] || (y[16] = (T) => Qt(ne) ? ne.value = T : null),
            title: l(t)("localAi.clearAllChats"),
            "confirm-text": l(t)("common.delete"),
            "cancel-text": l(t)("common.cancel"),
            loading: l(F),
            type: "danger",
            onConfirm: qt
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
}), _T = /* @__PURE__ */ Io(kT, [["__scopeId", "data-v-c1ddf31a"]]), TT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _T
}, Symbol.toStringTag, { value: "Module" })), ST = { class: "settings-panel local-ai-settings-shell" }, AT = { class: "panel-header local-ai-header" }, CT = { class: "local-ai-frame local-ai-header__inner" }, ET = { class: "local-ai-heading" }, xT = { class: "panel-title" }, LT = { class: "local-ai-desc" }, IT = { class: "header-actions" }, OT = {
  key: 0,
  class: "panel-content local-ai-content"
}, $T = { class: "local-ai-frame" }, RT = { class: "settings-section" }, MT = { class: "settings-section__header" }, PT = { class: "status-overview" }, NT = { class: "status-list" }, DT = ["title"], zT = ["title"], BT = ["title"], FT = { class: "memory-summary__title" }, jT = { class: "memory-summary__metrics" }, VT = { class: "readiness-grid" }, HT = { class: "readiness-item" }, WT = { class: "readiness-item" }, UT = { class: "readiness-item" }, GT = { class: "readiness-item" }, KT = { class: "readiness-item" }, qT = { class: "readiness-item" }, ZT = { class: "setting-row service-setting" }, YT = { class: "setting-label" }, XT = { class: "setting-title" }, QT = { class: "setting-desc" }, JT = { class: "setting-control service-control" }, eS = { class: "service-controls" }, tS = {
  key: 0,
  class: "service-url"
}, nS = { class: "settings-section" }, oS = { class: "settings-section__header" }, sS = { class: "field-stack" }, rS = ["title"], aS = { class: "setting-label" }, lS = { class: "setting-title" }, iS = { class: "setting-desc" }, cS = { class: "setting-control" }, uS = { class: "path-control" }, dS = ["title"], fS = { class: "setting-label" }, pS = { class: "setting-title" }, mS = { class: "setting-desc" }, hS = { class: "setting-control" }, gS = ["title"], vS = { class: "setting-label" }, bS = { class: "setting-title" }, yS = { class: "setting-desc" }, wS = { class: "setting-control" }, kS = ["title"], _S = { class: "setting-label" }, TS = { class: "setting-title" }, SS = { class: "setting-desc" }, AS = { class: "setting-control" }, CS = { class: "path-control" }, ES = ["placeholder"], xS = { class: "settings-section" }, LS = { class: "settings-section__header" }, IS = { class: "parameter-grid" }, OS = ["title"], $S = ["title"], RS = ["title"], MS = ["title"], PS = ["title"], NS = ["title"], DS = { class: "settings-section" }, zS = { class: "settings-section__header" }, BS = { class: "switch-grid" }, FS = ["title"], jS = { class: "switch-field__label" }, VS = ["title"], HS = { class: "switch-field__label" }, WS = ["title"], US = { class: "switch-field__label" }, GS = { class: "settings-section" }, KS = { class: "settings-section__header" }, qS = { class: "switch-grid switch-grid--two" }, ZS = ["title"], YS = { class: "switch-field__label" }, XS = ["title"], QS = { class: "switch-field__label" }, JS = ["title"], eA = ["title"], tA = { class: "settings-section" }, nA = { class: "settings-section__header" }, oA = { class: "parameter-grid parameter-grid--three" }, sA = ["title"], rA = ["title"], aA = ["title"], lA = ["title"], iA = ["title"], cA = ["title"], uA = ["title"], dA = ["title"], fA = { class: "settings-footer" }, pA = ["title"], mA = /* @__PURE__ */ oe({
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
    }), q = A(() => {
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
      o.value = await vw();
    }, de = async () => {
      s.value = await id();
    }, ce = async () => {
      n.value && (r.value = await ld(n.value), !n.value.modelPath && r.value.selectedModelPath && (n.value.modelPath = r.value.selectedModelPath), !n.value.mmprojPath && r.value.selectedMmprojPath && (n.value.mmprojPath = r.value.selectedMmprojPath));
    }, $ = async () => {
      a.value = !0;
      try {
        n.value = await ad(), await Promise.all([re(), ce(), de()]);
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
      const W = await ya({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !W || Array.isArray(W) || !n.value || (n.value.modelDir = W, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await ce());
    }, fe = async () => {
      const W = await ya({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !W || Array.isArray(W) || !n.value || (n.value.runtimePath = W, await V(), await re());
    }, Te = async () => {
      if (n.value) {
        c.value = !0;
        try {
          await rr(n.value), s.value = await bw(n.value), Ee.msg(t("localAi.serviceStarted"));
        } catch (W) {
          Ee.msg(`${t("localAi.serviceStartFailed")}: ${W}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, De = async () => {
      u.value = !0;
      try {
        await B(), s.value = await cd(), Ee.msg(t("localAi.serviceRestarted"));
      } catch (W) {
        Ee.msg(`${t("localAi.serviceRestartFailed")}: ${W}`, "error");
      } finally {
        u.value = !1;
      }
    }, Ue = async () => {
      d.value = !0;
      try {
        await yw(), await de(), Ee.msg(t("localAi.serviceStoppedMsg"));
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
    }), La(() => {
      m && clearInterval(m);
    }), (W, U) => {
      const me = nd, Ie = td, ee = Iy;
      return S(), D("div", ST, [
        f("header", AT, [
          f("div", CT, [
            f("div", ET, [
              f(
                "h3",
                xT,
                E(l(t)("localAi.title")),
                1
                /* TEXT */
              ),
              f(
                "p",
                LT,
                E(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              )
            ]),
            f("div", IT, [
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
        l(n) ? (S(), D("main", OT, [
          f("div", $T, [
            f("section", RT, [
              f("div", MT, [
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
              f("div", PT, [
                f("div", NT, [
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
                  ], 10, DT),
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
                  ], 10, zT),
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
                  ], 10, BT)
                ]),
                f(
                  "div",
                  {
                    class: z(["memory-summary", ne(l(q).level)])
                  },
                  [
                    f("div", FT, [
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
                    f("div", jT, [
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
                            class: z(ne(l(q).level))
                          },
                          E(l(q).gpuGb) + " GB ",
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
                            class: z(ne(l(q).level))
                          },
                          E(l(q).totalGb) + " GB ",
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
                            class: z(ne(l(q).level))
                          },
                          E(l(q).bottleneck),
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
              f("div", VT, [
                f("div", HT, [
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
                f("div", WT, [
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
                f("div", UT, [
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
                f("div", GT, [
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
                f("div", KT, [
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
                f("div", qT, [
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
              f("div", ZT, [
                f("div", YT, [
                  f(
                    "div",
                    XT,
                    E(l(t)("localAi.serviceControl")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "div",
                    QT,
                    E(l(t)("localAi.serviceControlDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                f("div", JT, [
                  f("div", eS, [
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
                  l(s)?.baseUrl ? (S(), D("div", tS, [
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
            f("section", nS, [
              f("div", oS, [
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
              f("div", sS, [
                f("div", {
                  class: "setting-row",
                  title: F("modelDir")
                }, [
                  f("div", aS, [
                    f(
                      "div",
                      lS,
                      E(l(t)("localAi.modelDir")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      iS,
                      E(F("modelDir")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", cS, [
                    f("div", uS, [
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
                ], 8, rS),
                f("div", {
                  class: "setting-row",
                  title: F("mainModel")
                }, [
                  f("div", fS, [
                    f(
                      "div",
                      pS,
                      E(l(t)("localAi.mainModel")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      mS,
                      E(F("mainModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", hS, [
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
                ], 8, dS),
                f("div", {
                  class: "setting-row",
                  title: F("mmprojModel")
                }, [
                  f("div", vS, [
                    f(
                      "div",
                      bS,
                      E(l(t)("localAi.mmprojModel")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      yS,
                      E(F("mmprojModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", wS, [
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
                ], 8, gS),
                f("div", {
                  class: "setting-row",
                  title: F("runtimePath")
                }, [
                  f("div", _S, [
                    f(
                      "div",
                      TS,
                      E(l(t)("localAi.runtimePath")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      SS,
                      E(F("runtimePath")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", AS, [
                    f("div", CS, [
                      lt(f("input", {
                        "onUpdate:modelValue": U[3] || (U[3] = (X) => l(n).runtimePath = X),
                        class: "setting-input",
                        placeholder: l(t)("localAi.runtimePathPlaceholder")
                      }, null, 8, ES), [
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
                ], 8, kS)
              ])
            ]),
            f("section", xS, [
              f("div", LS, [
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
              f("div", IS, [
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
                ], 8, OS),
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
                ], 8, $S),
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
                ], 8, RS),
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
                ], 8, MS),
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
                ], 8, PS),
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
                ], 8, NS)
              ])
            ]),
            f("section", DS, [
              f("div", zS, [
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
              f("div", BS, [
                f("label", {
                  class: "switch-field",
                  title: F("flashAttn")
                }, [
                  f(
                    "span",
                    jS,
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
                ], 8, FS),
                f("label", {
                  class: "switch-field",
                  title: F("kvOffload")
                }, [
                  f(
                    "span",
                    HS,
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
                ], 8, VS),
                f("label", {
                  class: "switch-field",
                  title: F("mmap")
                }, [
                  f(
                    "span",
                    US,
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
                ], 8, WS)
              ])
            ]),
            f("section", GS, [
              f("div", KS, [
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
              f("div", qS, [
                f("label", {
                  class: "switch-field",
                  title: F("autoStart")
                }, [
                  f(
                    "span",
                    YS,
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
                ], 8, ZS),
                f("label", {
                  class: "switch-field",
                  title: F("keepAlive")
                }, [
                  f(
                    "span",
                    QS,
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
                ], 8, XS),
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
                ], 8, JS),
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
                ], 8, eA)
              ])
            ]),
            f("section", tA, [
              f("div", nA, [
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
              f("div", oA, [
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
                ], 8, sA),
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
                ], 8, rA),
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
                ], 8, aA),
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
                ], 8, lA),
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
                ], 8, iA),
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
                ], 8, cA),
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
                ], 8, uA),
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
                ], 8, dA)
              ])
            ]),
            f("div", fA, [
              l(s)?.commandLine ? (S(), D("span", {
                key: 0,
                class: "command-line",
                title: l(s).commandLine
              }, E(l(s).commandLine), 9, pA)) : Y("v-if", !0),
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
          ])
        ])) : Y("v-if", !0)
      ]);
    };
  }
}), hA = /* @__PURE__ */ Io(mA, [["__scopeId", "data-v-08107016"]]), gA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hA
}, Symbol.toStringTag, { value: "Module" }));
export {
  wA as activate,
  wA as default
};
