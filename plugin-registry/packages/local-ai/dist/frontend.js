var ef = Object.defineProperty;
var tf = (e, t, n) => t in e ? ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var De = (e, t, n) => tf(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Re, createVNode as _, defineAsyncComponent as nf, getCurrentInstance as xt, ref as P, computed as C, unref as a, shallowRef as uo, watchEffect as Ea, readonly as xa, getCurrentScope as of, onScopeDispose as Rc, onMounted as tt, nextTick as Ge, watch as de, isRef as tn, warn as rf, provide as bn, defineComponent as oe, createElementBlock as N, openBlock as S, mergeProps as Eo, renderSlot as le, createElementVNode as f, toRef as Kn, onUnmounted as La, useAttrs as sf, useSlots as Mc, normalizeStyle as dt, normalizeClass as D, createCommentVNode as U, Fragment as at, createBlock as ee, withCtx as X, resolveDynamicComponent as wt, withModifiers as Ue, toDisplayString as L, onBeforeUnmount as wn, Transition as $o, withDirectives as it, vShow as Pn, reactive as xo, onActivated as af, onUpdated as Pc, cloneVNode as lf, Text as cf, Comment as uf, Teleport as df, onBeforeMount as ff, onDeactivated as pf, createTextVNode as mt, h as mf, createSlots as Ia, withKeys as pn, toRaw as hf, toRefs as Oa, resolveComponent as So, resolveDirective as gf, toHandlerKey as vf, renderList as Ln, vModelText as Lr, shallowReactive as bf, isVNode as Ir, render as ls } from "vue";
import { useI18n as Pr } from "vue-i18n";
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
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], l = t.theme || n.theme;
  switch (l) {
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
var _f = Symbol("icon-context");
function Qe(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var s = wf(), i = Re(_f, yf);
      return function() {
        var c = l.size, u = l.strokeWidth, d = l.strokeLinecap, m = l.strokeLinejoin, g = l.theme, w = l.fill, h = l.spin, b = kf(s, {
          size: c,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: g,
          fill: w
        }, i), E = [i.prefix + "-icon"];
        return E.push(i.prefix + "-icon-" + e), t && i.rtl && E.push(i.prefix + "-icon-rtl"), h && E.push(i.prefix + "-icon-spin"), _("span", {
          class: E.join(" ")
        }, [n(b)]);
      };
    }
  };
  return o;
}
const Bl = Qe("brain", !0, function(e) {
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
}), Sf = Qe("check-small", !0, function(e) {
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
}), Tf = Qe("code", !0, function(e) {
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
}), Fl = Qe("copy", !0, function(e) {
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
}), jl = Qe("cube", !1, function(e) {
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
}), ur = Qe("delete", !1, function(e) {
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
}), Af = Qe("down", !1, function(e) {
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
}), Hs = Qe("edit", !0, function(e) {
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
}), Cf = Qe("file-text", !0, function(e) {
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
}), Ef = Qe("fork", !1, function(e) {
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
}), Vl = Qe("left-bar", !0, function(e) {
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
}), xf = Qe("link", !0, function(e) {
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
}), Hl = Qe("magic-wand", !0, function(e) {
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
}), Lf = Qe("picture", !0, function(e) {
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
}), dr = Qe("refresh", !0, function(e) {
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
}), Wl = Qe("right", !0, function(e) {
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
}), Ws = Qe("robot", !0, function(e) {
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
}), If = Qe("robot-one", !0, function(e) {
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
}), Ul = Qe("search", !0, function(e) {
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
}), Of = Qe("send", !0, function(e) {
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
}), Nc = Qe("setting-two", !1, function(e) {
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
}), $f = Qe("square", !1, function(e) {
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
}), Rf = Qe("translate", !0, function(e) {
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
}), YT = (e) => {
  e.registerRoute({
    target: "config",
    path: "local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => OS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Nc,
    component: nf(() => Promise.resolve().then(() => GT))
  });
}, Dc = Symbol(), Sr = "el", Mf = "is-", To = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, zc = Symbol("namespaceContextKey"), $a = (e) => {
  const t = e || (xt() ? Re(zc, P(Sr)) : P(Sr));
  return C(() => a(t) || Sr);
}, Xe = (e, t) => {
  const n = $a(t);
  return {
    namespace: n,
    b: (b = "") => To(n.value, e, b, "", ""),
    e: (b) => b ? To(n.value, e, "", b, "") : "",
    m: (b) => b ? To(n.value, e, "", "", b) : "",
    be: (b, E) => b && E ? To(n.value, e, b, E, "") : "",
    em: (b, E) => b && E ? To(n.value, e, "", b, E) : "",
    bm: (b, E) => b && E ? To(n.value, e, b, "", E) : "",
    bem: (b, E, k) => b && E && k ? To(n.value, e, b, E, k) : "",
    is: (b, ...E) => {
      const k = E.length >= 1 ? E[0] : !0;
      return b && k ? `${Mf}${b}` : "";
    },
    cssVar: (b) => {
      const E = {};
      for (const k in b)
        b[k] && (E[`--${n.value}-${k}`] = b[k]);
      return E;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const E = {};
      for (const k in b)
        b[k] && (E[`--${n.value}-${e}-${k}`] = b[k]);
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
}, Pf = Object.prototype.hasOwnProperty, Gl = (e, t) => Pf.call(e, t), On = Array.isArray, Ke = (e) => typeof e == "function", Et = (e) => typeof e == "string", Xt = (e) => e !== null && typeof e == "object", Kl = (e) => (Xt(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), Nf = Object.prototype.toString, Df = (e) => Nf.call(e), zf = (e) => Df(e) === "[object Object]", Bf = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ff = /-(\w)/g, jf = Bf(
  (e) => e.replace(Ff, (t, n) => n ? n.toUpperCase() : "")
);
var Bc = typeof global == "object" && global && global.Object === Object && global, Vf = typeof self == "object" && self && self.Object === Object && self, zn = Bc || Vf || Function("return this")(), Nn = zn.Symbol, Fc = Object.prototype, Hf = Fc.hasOwnProperty, Wf = Fc.toString, fr = Nn ? Nn.toStringTag : void 0;
function Uf(e) {
  var t = Hf.call(e, fr), n = e[fr];
  try {
    e[fr] = void 0;
    var o = !0;
  } catch {
  }
  var r = Wf.call(e);
  return o && (t ? e[fr] = n : delete e[fr]), r;
}
var Gf = Object.prototype, Kf = Gf.toString;
function qf(e) {
  return Kf.call(e);
}
var Zf = "[object Null]", Yf = "[object Undefined]", ql = Nn ? Nn.toStringTag : void 0;
function rr(e) {
  return e == null ? e === void 0 ? Yf : Zf : ql && ql in Object(e) ? Uf(e) : qf(e);
}
function qo(e) {
  return e != null && typeof e == "object";
}
var Xf = "[object Symbol]";
function ks(e) {
  return typeof e == "symbol" || qo(e) && rr(e) == Xf;
}
function Qf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var yn = Array.isArray, Zl = Nn ? Nn.prototype : void 0, Yl = Zl ? Zl.toString : void 0;
function jc(e) {
  if (typeof e == "string")
    return e;
  if (yn(e))
    return Qf(e, jc) + "";
  if (ks(e))
    return Yl ? Yl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Jf = /\s/;
function ep(e) {
  for (var t = e.length; t-- && Jf.test(e.charAt(t)); )
    ;
  return t;
}
var tp = /^\s+/;
function np(e) {
  return e && e.slice(0, ep(e) + 1).replace(tp, "");
}
function po(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xl = NaN, op = /^[-+]0x[0-9a-f]+$/i, rp = /^0b[01]+$/i, sp = /^0o[0-7]+$/i, ap = parseInt;
function Ql(e) {
  if (typeof e == "number")
    return e;
  if (ks(e))
    return Xl;
  if (po(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = po(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = np(e);
  var n = rp.test(e);
  return n || sp.test(e) ? ap(e.slice(2), n ? 2 : 8) : op.test(e) ? Xl : +e;
}
function Vc(e) {
  return e;
}
var lp = "[object AsyncFunction]", ip = "[object Function]", cp = "[object GeneratorFunction]", up = "[object Proxy]";
function Hc(e) {
  if (!po(e))
    return !1;
  var t = rr(e);
  return t == ip || t == cp || t == lp || t == up;
}
var Us = zn["__core-js_shared__"], Jl = function() {
  var e = /[^.]+$/.exec(Us && Us.keys && Us.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dp(e) {
  return !!Jl && Jl in e;
}
var fp = Function.prototype, pp = fp.toString;
function Ro(e) {
  if (e != null) {
    try {
      return pp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var mp = /[\\^$.*+?()[\]{}|]/g, hp = /^\[object .+?Constructor\]$/, gp = Function.prototype, vp = Object.prototype, bp = gp.toString, yp = vp.hasOwnProperty, wp = RegExp(
  "^" + bp.call(yp).replace(mp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kp(e) {
  if (!po(e) || dp(e))
    return !1;
  var t = Hc(e) ? wp : hp;
  return t.test(Ro(e));
}
function _p(e, t) {
  return e?.[t];
}
function Mo(e, t) {
  var n = _p(e, t);
  return kp(n) ? n : void 0;
}
var ia = Mo(zn, "WeakMap");
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
var Tp = 800, Ap = 16, Cp = Date.now;
function Ep(e) {
  var t = 0, n = 0;
  return function() {
    var o = Cp(), r = Ap - (o - n);
    if (n = o, r > 0) {
      if (++t >= Tp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function xp(e) {
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
}(), Lp = is ? function(e, t) {
  return is(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: xp(t),
    writable: !0
  });
} : Vc, Ip = Ep(Lp);
function Op(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var $p = 9007199254740991, Rp = /^(?:0|[1-9]\d*)$/;
function Ra(e, t) {
  var n = typeof e;
  return t = t ?? $p, !!t && (n == "number" || n != "symbol" && Rp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Mp(e, t, n) {
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
var Pp = Object.prototype, Np = Pp.hasOwnProperty;
function Dp(e, t, n) {
  var o = e[t];
  (!(Np.call(e, t) && Ma(o, n)) || n === void 0 && !(t in e)) && Mp(e, t, n);
}
var ei = Math.max;
function zp(e, t, n) {
  return t = ei(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = ei(o.length - t, 0), s = Array(l); ++r < l; )
      s[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(s), Sp(e, this, i);
  };
}
var Bp = 9007199254740991;
function Pa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Bp;
}
function Fp(e) {
  return e != null && Pa(e.length) && !Hc(e);
}
var jp = Object.prototype;
function Vp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || jp;
  return e === n;
}
function Hp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Wp = "[object Arguments]";
function ti(e) {
  return qo(e) && rr(e) == Wp;
}
var Wc = Object.prototype, Up = Wc.hasOwnProperty, Gp = Wc.propertyIsEnumerable, Na = ti(/* @__PURE__ */ function() {
  return arguments;
}()) ? ti : function(e) {
  return qo(e) && Up.call(e, "callee") && !Gp.call(e, "callee");
};
function Kp() {
  return !1;
}
var Uc = typeof exports == "object" && exports && !exports.nodeType && exports, ni = Uc && typeof module == "object" && module && !module.nodeType && module, qp = ni && ni.exports === Uc, oi = qp ? zn.Buffer : void 0, Zp = oi ? oi.isBuffer : void 0, ca = Zp || Kp, Yp = "[object Arguments]", Xp = "[object Array]", Qp = "[object Boolean]", Jp = "[object Date]", em = "[object Error]", tm = "[object Function]", nm = "[object Map]", om = "[object Number]", rm = "[object Object]", sm = "[object RegExp]", am = "[object Set]", lm = "[object String]", im = "[object WeakMap]", cm = "[object ArrayBuffer]", um = "[object DataView]", dm = "[object Float32Array]", fm = "[object Float64Array]", pm = "[object Int8Array]", mm = "[object Int16Array]", hm = "[object Int32Array]", gm = "[object Uint8Array]", vm = "[object Uint8ClampedArray]", bm = "[object Uint16Array]", ym = "[object Uint32Array]", Ve = {};
Ve[dm] = Ve[fm] = Ve[pm] = Ve[mm] = Ve[hm] = Ve[gm] = Ve[vm] = Ve[bm] = Ve[ym] = !0;
Ve[Yp] = Ve[Xp] = Ve[cm] = Ve[Qp] = Ve[um] = Ve[Jp] = Ve[em] = Ve[tm] = Ve[nm] = Ve[om] = Ve[rm] = Ve[sm] = Ve[am] = Ve[lm] = Ve[im] = !1;
function wm(e) {
  return qo(e) && Pa(e.length) && !!Ve[rr(e)];
}
function km(e) {
  return function(t) {
    return e(t);
  };
}
var Gc = typeof exports == "object" && exports && !exports.nodeType && exports, Tr = Gc && typeof module == "object" && module && !module.nodeType && module, _m = Tr && Tr.exports === Gc, Gs = _m && Bc.process, ri = function() {
  try {
    var e = Tr && Tr.require && Tr.require("util").types;
    return e || Gs && Gs.binding && Gs.binding("util");
  } catch {
  }
}(), si = ri && ri.isTypedArray, Kc = si ? km(si) : wm, Sm = Object.prototype, Tm = Sm.hasOwnProperty;
function Am(e, t) {
  var n = yn(e), o = !n && Na(e), r = !n && !o && ca(e), l = !n && !o && !r && Kc(e), s = n || o || r || l, i = s ? Hp(e.length, String) : [], c = i.length;
  for (var u in e)
    Tm.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ra(u, c))) && i.push(u);
  return i;
}
function Cm(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Em = Cm(Object.keys, Object), xm = Object.prototype, Lm = xm.hasOwnProperty;
function Im(e) {
  if (!Vp(e))
    return Em(e);
  var t = [];
  for (var n in Object(e))
    Lm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function qc(e) {
  return Fp(e) ? Am(e) : Im(e);
}
var Om = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $m = /^\w*$/;
function Da(e, t) {
  if (yn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ks(e) ? !0 : $m.test(e) || !Om.test(e) || t != null && e in Object(t);
}
var Or = Mo(Object, "create");
function Rm() {
  this.__data__ = Or ? Or(null) : {}, this.size = 0;
}
function Mm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Pm = "__lodash_hash_undefined__", Nm = Object.prototype, Dm = Nm.hasOwnProperty;
function zm(e) {
  var t = this.__data__;
  if (Or) {
    var n = t[e];
    return n === Pm ? void 0 : n;
  }
  return Dm.call(t, e) ? t[e] : void 0;
}
var Bm = Object.prototype, Fm = Bm.hasOwnProperty;
function jm(e) {
  var t = this.__data__;
  return Or ? t[e] !== void 0 : Fm.call(t, e);
}
var Vm = "__lodash_hash_undefined__";
function Hm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Or && t === void 0 ? Vm : t, this;
}
function Lo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Lo.prototype.clear = Rm;
Lo.prototype.delete = Mm;
Lo.prototype.get = zm;
Lo.prototype.has = jm;
Lo.prototype.set = Hm;
function Wm() {
  this.__data__ = [], this.size = 0;
}
function _s(e, t) {
  for (var n = e.length; n--; )
    if (Ma(e[n][0], t))
      return n;
  return -1;
}
var Um = Array.prototype, Gm = Um.splice;
function Km(e) {
  var t = this.__data__, n = _s(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Gm.call(t, n, 1), --this.size, !0;
}
function qm(e) {
  var t = this.__data__, n = _s(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Zm(e) {
  return _s(this.__data__, e) > -1;
}
function Ym(e, t) {
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
no.prototype.clear = Wm;
no.prototype.delete = Km;
no.prototype.get = qm;
no.prototype.has = Zm;
no.prototype.set = Ym;
var $r = Mo(zn, "Map");
function Xm() {
  this.size = 0, this.__data__ = {
    hash: new Lo(),
    map: new ($r || no)(),
    string: new Lo()
  };
}
function Qm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ss(e, t) {
  var n = e.__data__;
  return Qm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Jm(e) {
  var t = Ss(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function eh(e) {
  return Ss(this, e).get(e);
}
function th(e) {
  return Ss(this, e).has(e);
}
function nh(e, t) {
  var n = Ss(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function oo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oo.prototype.clear = Xm;
oo.prototype.delete = Jm;
oo.prototype.get = eh;
oo.prototype.has = th;
oo.prototype.set = nh;
var oh = "Expected a function";
function za(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(oh);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var s = e.apply(this, o);
    return n.cache = l.set(r, s) || l, s;
  };
  return n.cache = new (za.Cache || oo)(), n;
}
za.Cache = oo;
var rh = 500;
function sh(e) {
  var t = za(e, function(o) {
    return n.size === rh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ah = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lh = /\\(\\)?/g, ih = sh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ah, function(n, o, r, l) {
    t.push(r ? l.replace(lh, "$1") : o || n);
  }), t;
});
function ch(e) {
  return e == null ? "" : jc(e);
}
function Ts(e, t) {
  return yn(e) ? e : Da(e, t) ? [e] : ih(ch(e));
}
function Nr(e) {
  if (typeof e == "string" || ks(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ba(e, t) {
  t = Ts(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Nr(t[n++])];
  return n && n == o ? e : void 0;
}
function co(e, t, n) {
  var o = e == null ? void 0 : Ba(e, t);
  return o === void 0 ? n : o;
}
function Zc(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var ai = Nn ? Nn.isConcatSpreadable : void 0;
function uh(e) {
  return yn(e) || Na(e) || !!(ai && e && e[ai]);
}
function dh(e, t, n, o, r) {
  var l = -1, s = e.length;
  for (n || (n = uh), r || (r = []); ++l < s; ) {
    var i = e[l];
    n(i) ? Zc(r, i) : r[r.length] = i;
  }
  return r;
}
function fh(e) {
  var t = e == null ? 0 : e.length;
  return t ? dh(e) : [];
}
function ph(e) {
  return Ip(zp(e, void 0, fh), e + "");
}
function io() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return yn(e) ? e : [e];
}
function mh() {
  this.__data__ = new no(), this.size = 0;
}
function hh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function gh(e) {
  return this.__data__.get(e);
}
function vh(e) {
  return this.__data__.has(e);
}
var bh = 200;
function yh(e, t) {
  var n = this.__data__;
  if (n instanceof no) {
    var o = n.__data__;
    if (!$r || o.length < bh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new oo(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zn(e) {
  var t = this.__data__ = new no(e);
  this.size = t.size;
}
Zn.prototype.clear = mh;
Zn.prototype.delete = hh;
Zn.prototype.get = gh;
Zn.prototype.has = vh;
Zn.prototype.set = yh;
function wh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (l[r++] = s);
  }
  return l;
}
function kh() {
  return [];
}
var _h = Object.prototype, Sh = _h.propertyIsEnumerable, li = Object.getOwnPropertySymbols, Th = li ? function(e) {
  return e == null ? [] : (e = Object(e), wh(li(e), function(t) {
    return Sh.call(e, t);
  }));
} : kh;
function Ah(e, t, n) {
  var o = t(e);
  return yn(e) ? o : Zc(o, n(e));
}
function ii(e) {
  return Ah(e, qc, Th);
}
var ua = Mo(zn, "DataView"), da = Mo(zn, "Promise"), fa = Mo(zn, "Set"), ci = "[object Map]", Ch = "[object Object]", ui = "[object Promise]", di = "[object Set]", fi = "[object WeakMap]", pi = "[object DataView]", Eh = Ro(ua), xh = Ro($r), Lh = Ro(da), Ih = Ro(fa), Oh = Ro(ia), lo = rr;
(ua && lo(new ua(new ArrayBuffer(1))) != pi || $r && lo(new $r()) != ci || da && lo(da.resolve()) != ui || fa && lo(new fa()) != di || ia && lo(new ia()) != fi) && (lo = function(e) {
  var t = rr(e), n = t == Ch ? e.constructor : void 0, o = n ? Ro(n) : "";
  if (o)
    switch (o) {
      case Eh:
        return pi;
      case xh:
        return ci;
      case Lh:
        return ui;
      case Ih:
        return di;
      case Oh:
        return fi;
    }
  return t;
});
var mi = zn.Uint8Array, $h = "__lodash_hash_undefined__";
function Rh(e) {
  return this.__data__.set(e, $h), this;
}
function Mh(e) {
  return this.__data__.has(e);
}
function cs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new oo(); ++t < n; )
    this.add(e[t]);
}
cs.prototype.add = cs.prototype.push = Rh;
cs.prototype.has = Mh;
function Ph(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Nh(e, t) {
  return e.has(t);
}
var Dh = 1, zh = 2;
function Yc(e, t, n, o, r, l) {
  var s = n & Dh, i = e.length, c = t.length;
  if (i != c && !(s && c > i))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, g = !0, w = n & zh ? new cs() : void 0;
  for (l.set(e, t), l.set(t, e); ++m < i; ) {
    var h = e[m], b = t[m];
    if (o)
      var E = s ? o(b, h, m, t, e, l) : o(h, b, m, e, t, l);
    if (E !== void 0) {
      if (E)
        continue;
      g = !1;
      break;
    }
    if (w) {
      if (!Ph(t, function(k, R) {
        if (!Nh(w, R) && (h === k || r(h, k, n, o, l)))
          return w.push(R);
      })) {
        g = !1;
        break;
      }
    } else if (!(h === b || r(h, b, n, o, l))) {
      g = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), g;
}
function Bh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Fh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var jh = 1, Vh = 2, Hh = "[object Boolean]", Wh = "[object Date]", Uh = "[object Error]", Gh = "[object Map]", Kh = "[object Number]", qh = "[object RegExp]", Zh = "[object Set]", Yh = "[object String]", Xh = "[object Symbol]", Qh = "[object ArrayBuffer]", Jh = "[object DataView]", hi = Nn ? Nn.prototype : void 0, Ks = hi ? hi.valueOf : void 0;
function eg(e, t, n, o, r, l, s) {
  switch (n) {
    case Jh:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Qh:
      return !(e.byteLength != t.byteLength || !l(new mi(e), new mi(t)));
    case Hh:
    case Wh:
    case Kh:
      return Ma(+e, +t);
    case Uh:
      return e.name == t.name && e.message == t.message;
    case qh:
    case Yh:
      return e == t + "";
    case Gh:
      var i = Bh;
    case Zh:
      var c = o & jh;
      if (i || (i = Fh), e.size != t.size && !c)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= Vh, s.set(e, t);
      var d = Yc(i(e), i(t), o, r, l, s);
      return s.delete(e), d;
    case Xh:
      if (Ks)
        return Ks.call(e) == Ks.call(t);
  }
  return !1;
}
var tg = 1, ng = Object.prototype, og = ng.hasOwnProperty;
function rg(e, t, n, o, r, l) {
  var s = n & tg, i = ii(e), c = i.length, u = ii(t), d = u.length;
  if (c != d && !s)
    return !1;
  for (var m = c; m--; ) {
    var g = i[m];
    if (!(s ? g in t : og.call(t, g)))
      return !1;
  }
  var w = l.get(e), h = l.get(t);
  if (w && h)
    return w == t && h == e;
  var b = !0;
  l.set(e, t), l.set(t, e);
  for (var E = s; ++m < c; ) {
    g = i[m];
    var k = e[g], R = t[g];
    if (o)
      var F = s ? o(R, k, g, t, e, l) : o(k, R, g, e, t, l);
    if (!(F === void 0 ? k === R || r(k, R, n, o, l) : F)) {
      b = !1;
      break;
    }
    E || (E = g == "constructor");
  }
  if (b && !E) {
    var O = e.constructor, A = t.constructor;
    O != A && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof A == "function" && A instanceof A) && (b = !1);
  }
  return l.delete(e), l.delete(t), b;
}
var sg = 1, gi = "[object Arguments]", vi = "[object Array]", Gr = "[object Object]", ag = Object.prototype, bi = ag.hasOwnProperty;
function lg(e, t, n, o, r, l) {
  var s = yn(e), i = yn(t), c = s ? vi : lo(e), u = i ? vi : lo(t);
  c = c == gi ? Gr : c, u = u == gi ? Gr : u;
  var d = c == Gr, m = u == Gr, g = c == u;
  if (g && ca(e)) {
    if (!ca(t))
      return !1;
    s = !0, d = !1;
  }
  if (g && !d)
    return l || (l = new Zn()), s || Kc(e) ? Yc(e, t, n, o, r, l) : eg(e, t, c, n, o, r, l);
  if (!(n & sg)) {
    var w = d && bi.call(e, "__wrapped__"), h = m && bi.call(t, "__wrapped__");
    if (w || h) {
      var b = w ? e.value() : e, E = h ? t.value() : t;
      return l || (l = new Zn()), r(b, E, n, o, l);
    }
  }
  return g ? (l || (l = new Zn()), rg(e, t, n, o, r, l)) : !1;
}
function As(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !qo(e) && !qo(t) ? e !== e && t !== t : lg(e, t, n, o, As, r);
}
var ig = 1, cg = 2;
function ug(e, t, n, o) {
  var r = n.length, l = r;
  if (e == null)
    return !l;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < l; ) {
    s = n[r];
    var i = s[0], c = e[i], u = s[1];
    if (s[2]) {
      if (c === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Zn(), m;
      if (!(m === void 0 ? As(u, c, ig | cg, o, d) : m))
        return !1;
    }
  }
  return !0;
}
function Xc(e) {
  return e === e && !po(e);
}
function dg(e) {
  for (var t = qc(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Xc(r)];
  }
  return t;
}
function Qc(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function fg(e) {
  var t = dg(e);
  return t.length == 1 && t[0][2] ? Qc(t[0][0], t[0][1]) : function(n) {
    return n === e || ug(n, e, t);
  };
}
function pg(e, t) {
  return e != null && t in Object(e);
}
function mg(e, t, n) {
  t = Ts(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var s = Nr(t[o]);
    if (!(l = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && Pa(r) && Ra(s, r) && (yn(e) || Na(e)));
}
function Jc(e, t) {
  return e != null && mg(e, t, pg);
}
var hg = 1, gg = 2;
function vg(e, t) {
  return Da(e) && Xc(t) ? Qc(Nr(e), t) : function(n) {
    var o = co(n, e);
    return o === void 0 && o === t ? Jc(n, e) : As(t, o, hg | gg);
  };
}
function bg(e) {
  return function(t) {
    return t?.[e];
  };
}
function yg(e) {
  return function(t) {
    return Ba(t, e);
  };
}
function wg(e) {
  return Da(e) ? bg(Nr(e)) : yg(e);
}
function kg(e) {
  return typeof e == "function" ? e : e == null ? Vc : typeof e == "object" ? yn(e) ? vg(e[0], e[1]) : fg(e) : wg(e);
}
var qs = function() {
  return zn.Date.now();
}, _g = "Expected a function", Sg = Math.max, Tg = Math.min;
function Ag(e, t, n) {
  var o, r, l, s, i, c, u = 0, d = !1, m = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(_g);
  t = Ql(t) || 0, po(n) && (d = !!n.leading, m = "maxWait" in n, l = m ? Sg(Ql(n.maxWait) || 0, t) : l, g = "trailing" in n ? !!n.trailing : g);
  function w(x) {
    var $ = o, K = r;
    return o = r = void 0, u = x, s = e.apply(K, $), s;
  }
  function h(x) {
    return u = x, i = setTimeout(k, t), d ? w(x) : s;
  }
  function b(x) {
    var $ = x - c, K = x - u, Z = t - $;
    return m ? Tg(Z, l - K) : Z;
  }
  function E(x) {
    var $ = x - c, K = x - u;
    return c === void 0 || $ >= t || $ < 0 || m && K >= l;
  }
  function k() {
    var x = qs();
    if (E(x))
      return R(x);
    i = setTimeout(k, b(x));
  }
  function R(x) {
    return i = void 0, g && o ? w(x) : (o = r = void 0, s);
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
        return clearTimeout(i), i = setTimeout(k, t), w(c);
    }
    return i === void 0 && (i = setTimeout(k, t)), s;
  }
  return A.cancel = F, A.flush = O, A;
}
function Cg(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Op(e, kg(t), r);
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
function eu(e) {
  return e === void 0;
}
function Eg(e, t, n, o) {
  if (!po(e))
    return e;
  t = Ts(t, e);
  for (var r = -1, l = t.length, s = l - 1, i = e; i != null && ++r < l; ) {
    var c = Nr(t[r]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (r != s) {
      var d = i[c];
      u = void 0, u === void 0 && (u = po(d) ? d : Ra(t[r + 1]) ? [] : {});
    }
    Dp(i, c, u), i = i[c];
  }
  return e;
}
function xg(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var s = t[o], i = Ba(e, s);
    n(i, s) && Eg(l, Ts(s, e), i);
  }
  return l;
}
function Lg(e, t) {
  return xg(e, t, function(n, o) {
    return Jc(e, o);
  });
}
var Ig = ph(function(e, t) {
  return e == null ? {} : Lg(e, t);
});
const $n = (e) => e === void 0, Xn = (e) => typeof e == "boolean", $e = (e) => typeof e == "number", gn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Og = (e) => Et(e) ? !Number.isNaN(Number(e)) : !1;
var $g = Object.defineProperty, Rg = Object.defineProperties, Mg = Object.getOwnPropertyDescriptors, yi = Object.getOwnPropertySymbols, Pg = Object.prototype.hasOwnProperty, Ng = Object.prototype.propertyIsEnumerable, wi = (e, t, n) => t in e ? $g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Dg = (e, t) => {
  for (var n in t || (t = {}))
    Pg.call(t, n) && wi(e, n, t[n]);
  if (yi)
    for (var n of yi(t))
      Ng.call(t, n) && wi(e, n, t[n]);
  return e;
}, zg = (e, t) => Rg(e, Mg(t));
function Bg(e, t) {
  var n;
  const o = uo();
  return Ea(() => {
    o.value = e();
  }, zg(Dg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), xa(o);
}
var ki;
const qe = typeof window < "u", Fg = (e) => typeof e == "string", tu = () => {
}, pa = qe && ((ki = window?.navigator) == null ? void 0 : ki.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Fa(e) {
  return typeof e == "function" ? e() : a(e);
}
function jg(e) {
  return e;
}
function Dr(e) {
  return of() ? (Rc(e), !0) : !1;
}
function Vg(e, t = !0) {
  xt() ? tt(e) : t ? e() : Ge(e);
}
function ds(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = P(!1);
  let l = null;
  function s() {
    l && (clearTimeout(l), l = null);
  }
  function i() {
    r.value = !1, s();
  }
  function c(...u) {
    s(), r.value = !0, l = setTimeout(() => {
      r.value = !1, l = null, e(...u);
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
  if (Fg(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Cs) : [t, n, o, r] = e, !t)
    return tu;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], s = () => {
    l.forEach((d) => d()), l.length = 0;
  }, i = (d, m, g, w) => (d.addEventListener(m, g, w), () => d.removeEventListener(m, g, w)), c = de(() => [qn(t), Fa(r)], ([d, m]) => {
    s(), d && l.push(...n.flatMap((g) => o.map((w) => i(d, g, w, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), s();
  };
  return Dr(u), u;
}
let _i = !1;
function Hg(e, t, n = {}) {
  const { window: o = Cs, ignore: r = [], capture: l = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  pa && !_i && (_i = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", tu)));
  let i = !0;
  const c = (g) => r.some((w) => {
    if (typeof w == "string")
      return Array.from(o.document.querySelectorAll(w)).some((h) => h === g.target || g.composedPath().includes(h));
    {
      const h = qn(w);
      return h && (g.target === h || g.composedPath().includes(h));
    }
  }), d = [
    vn(o, "click", (g) => {
      const w = qn(e);
      if (!(!w || w === g.target || g.composedPath().includes(w))) {
        if (g.detail === 0 && (i = !c(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: l }),
    vn(o, "pointerdown", (g) => {
      const w = qn(e);
      w && (i = !g.composedPath().includes(w) && !c(g));
    }, { passive: !0 }),
    s && vn(o, "blur", (g) => {
      var w;
      const h = qn(e);
      ((w = o.document.activeElement) == null ? void 0 : w.tagName) === "IFRAME" && !h?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function nu(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), Vg(o, t), n;
}
const Si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ti = "__vueuse_ssr_handlers__";
Si[Ti] = Si[Ti] || {};
var Ai = Object.getOwnPropertySymbols, Wg = Object.prototype.hasOwnProperty, Ug = Object.prototype.propertyIsEnumerable, Gg = (e, t) => {
  var n = {};
  for (var o in e)
    Wg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ai)
    for (var o of Ai(e))
      t.indexOf(o) < 0 && Ug.call(e, o) && (n[o] = e[o]);
  return n;
};
function In(e, t, n = {}) {
  const o = n, { window: r = Cs } = o, l = Gg(o, ["window"]);
  let s;
  const i = nu(() => r && "ResizeObserver" in r), c = () => {
    s && (s.disconnect(), s = void 0);
  }, u = de(() => qn(e), (m) => {
    c(), i.value && r && m && (s = new ResizeObserver(t), s.observe(m, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return Dr(d), {
    isSupported: i,
    stop: d
  };
}
var Ci = Object.getOwnPropertySymbols, Kg = Object.prototype.hasOwnProperty, qg = Object.prototype.propertyIsEnumerable, Zg = (e, t) => {
  var n = {};
  for (var o in e)
    Kg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ci)
    for (var o of Ci(e))
      t.indexOf(o) < 0 && qg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Yg(e, t, n = {}) {
  const o = n, { window: r = Cs } = o, l = Zg(o, ["window"]);
  let s;
  const i = nu(() => r && "MutationObserver" in r), c = () => {
    s && (s.disconnect(), s = void 0);
  }, u = de(() => qn(e), (m) => {
    c(), i.value && r && m && (s = new MutationObserver(t), s.observe(m, l));
  }, { immediate: !0 }), d = () => {
    c(), u();
  };
  return Dr(d), {
    isSupported: i,
    stop: d
  };
}
var Ei;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ei || (Ei = {}));
var Xg = Object.defineProperty, xi = Object.getOwnPropertySymbols, Qg = Object.prototype.hasOwnProperty, Jg = Object.prototype.propertyIsEnumerable, Li = (e, t, n) => t in e ? Xg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ev = (e, t) => {
  for (var n in t || (t = {}))
    Qg.call(t, n) && Li(e, n, t[n]);
  if (xi)
    for (var n of xi(t))
      Jg.call(t, n) && Li(e, n, t[n]);
  return e;
};
const tv = {
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
ev({
  linear: jg
}, tv);
class nv extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Es(e, t) {
  throw new nv(`[${e}] ${t}`);
}
const Ii = {
  current: 0
}, Oi = P(0), ou = 2e3, $i = Symbol("elZIndexContextKey"), ru = Symbol("zIndexContextKey"), ja = (e) => {
  const t = xt() ? Re($i, Ii) : Ii, n = e || (xt() ? Re(ru, void 0) : void 0), o = C(() => {
    const s = a(n);
    return $e(s) ? s : ou;
  }), r = C(() => o.value + Oi.value), l = () => (t.current++, Oi.value = t.current, r.value);
  return !qe && Re($i), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: l
  };
};
var ov = {
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
const rv = (e) => (t, n) => sv(t, n, a(e)), sv = (e, t, n) => co(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t?.[r]) != null ? l : `{${r}}`}`;
}), av = (e) => {
  const t = C(() => a(e).name), n = tn(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: rv(e)
  };
}, su = Symbol("localeContextKey"), xs = (e) => {
  const t = e || Re(su, P());
  return av(C(() => t.value || ov));
}, au = "__epPropKey", he = (e) => e, lv = (e) => Xt(e) && !!e[au], Ls = (e, t) => {
  if (!Xt(e) || lv(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: s } = e, c = {
    type: l,
    required: !!o,
    validator: n || s ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), Gl(e, "default") && m.push(r), d || (d = m.includes(u))), s && (d || (d = s(u))), !d && m.length > 0) {
        const g = [...new Set(m)].map((w) => JSON.stringify(w)).join(", ");
        rf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [au]: !0
  };
  return Gl(e, "default") && (c.default = r), c;
}, ze = (e) => us(Object.entries(e).map(([t, n]) => [
  t,
  Ls(n, t)
])), Va = ["", "default", "small", "large"], Is = Ls({
  type: String,
  values: Va,
  required: !1
}), lu = Symbol("size"), iv = () => {
  const e = Re(lu, {});
  return C(() => a(e.size) || "");
}, iu = Symbol("emptyValuesContextKey"), cv = ["", void 0, null], uv = void 0, cu = ze({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ke(e) ? !e() : !e
  }
}), dv = (e, t) => {
  const n = xt() ? Re(iu, P({})) : P({}), o = C(() => e.emptyValues || n.value.emptyValues || cv), r = C(() => Ke(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ke(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : uv), l = (s) => o.value.includes(s);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: l
  };
}, Ri = (e) => Object.keys(e), fs = P();
function Ha(e, t = void 0) {
  const n = xt() ? Re(Dc, fs) : fs;
  return e ? C(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function uu(e, t) {
  const n = Ha(), o = Xe(e, C(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Sr;
  })), r = xs(C(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), l = ja(C(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || ou;
  })), s = C(() => {
    var i;
    return a(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return du(C(() => a(n) || {})), {
    ns: o,
    locale: r,
    zIndex: l,
    size: s
  };
}
const du = (e, t, n = !1) => {
  var o;
  const r = !!xt(), l = r ? Ha() : void 0, s = (o = void 0) != null ? o : r ? bn : void 0;
  if (!s)
    return;
  const i = C(() => {
    const c = a(e);
    return l?.value ? fv(l.value, c) : c;
  });
  return s(Dc, i), s(su, C(() => i.value.locale)), s(zc, C(() => i.value.namespace)), s(ru, C(() => i.value.zIndex)), s(lu, {
    size: C(() => i.value.size || "")
  }), s(iu, C(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !fs.value) && (fs.value = i.value), i;
}, fv = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ri(e), ...Ri(t)])], o = {};
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
const fu = (e = "") => e.split(" ").filter((t) => !!t.trim()), Mi = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, pv = (e, t) => {
  !e || !t.trim() || e.classList.add(...fu(t));
}, mv = (e, t) => {
  !e || !t.trim() || e.classList.remove(...fu(t));
}, hv = (e, t) => {
  var n;
  if (!qe || !e)
    return "";
  let o = jf(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const l = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return l ? l[o] : "";
  } catch {
    return e.style[o];
  }
};
function eo(e, t = "px") {
  if (!e)
    return "";
  if ($e(e) || Og(e))
    return `${e}${t}`;
  if (Et(e))
    return e;
}
let Kr;
const gv = (e) => {
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
  const l = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Kr = o - l, Kr;
};
function vv(e, t) {
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
  const r = t.offsetTop + n.reduce((c, u) => c + u.offsetTop, 0), l = r + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  r < s ? e.scrollTop = r : l > i && (e.scrollTop = l - e.clientHeight);
}
const an = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, pu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), mu = (e) => (e.install = fo, e), bv = ze({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), yv = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), wv = /* @__PURE__ */ oe({
  ...yv,
  props: bv,
  setup(e) {
    const t = e, n = Xe("icon"), o = C(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: $n(r) ? void 0 : eo(r),
        "--color": l
      };
    });
    return (r, l) => (S(), N("i", Eo({
      class: a(n).b(),
      style: a(o)
    }, r.$attrs), [
      le(r.$slots, "default")
    ], 16));
  }
});
var kv = /* @__PURE__ */ je(wv, [["__file", "icon.vue"]]);
const ot = an(kv);
/*! Element Plus Icons Vue v2.3.1 */
var _v = /* @__PURE__ */ oe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), hu = _v, Sv = /* @__PURE__ */ oe({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Tv = Sv, Av = /* @__PURE__ */ oe({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (S(), N("svg", {
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
}), Cv = Av, Ev = /* @__PURE__ */ oe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), xv = Ev, Lv = /* @__PURE__ */ oe({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (S(), N("svg", {
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
}), Wa = Lv, Iv = /* @__PURE__ */ oe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ps = Iv, Ov = /* @__PURE__ */ oe({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (S(), N("svg", {
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
}), $v = Ov, Rv = /* @__PURE__ */ oe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Mv = Rv, Pv = /* @__PURE__ */ oe({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), gu = Pv, Nv = /* @__PURE__ */ oe({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Dv = Nv, zv = /* @__PURE__ */ oe({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Bv = zv, Fv = /* @__PURE__ */ oe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), jv = Fv, Vv = /* @__PURE__ */ oe({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Hv = Vv, Wv = /* @__PURE__ */ oe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Uv = Wv;
const mn = he([
  String,
  Object,
  Function
]), vu = {
  Close: ps
}, Gv = {
  Close: ps
}, ms = {
  success: jv,
  warning: Uv,
  error: xv,
  info: Mv
}, bu = {
  validating: gu,
  success: Cv,
  error: Wa
}, yu = () => qe && /firefox/i.test(window.navigator.userAgent);
let Ht;
const Kv = {
  height: "0",
  visibility: "hidden",
  overflow: yu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, qv = [
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
function Zv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: qv.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Pi(e, t = 1, n) {
  var o;
  Ht || (Ht = document.createElement("textarea"), document.body.appendChild(Ht));
  const { paddingSize: r, borderSize: l, boxSizing: s, contextStyle: i } = Zv(e);
  i.forEach(([m, g]) => Ht?.style.setProperty(m, g)), Object.entries(Kv).forEach(([m, g]) => Ht?.style.setProperty(m, g, "important")), Ht.value = e.value || e.placeholder || "";
  let c = Ht.scrollHeight;
  const u = {};
  s === "border-box" ? c = c + l : s === "content-box" && (c = c - r), Ht.value = "";
  const d = Ht.scrollHeight - r;
  if ($e(t)) {
    let m = d * t;
    s === "border-box" && (m = m + r + l), c = Math.max(m, c), u.minHeight = `${m}px`;
  }
  if ($e(n)) {
    let m = d * n;
    s === "border-box" && (m = m + r + l), c = Math.min(m, c);
  }
  return u.height = `${c}px`, (o = Ht.parentNode) == null || o.removeChild(Ht), Ht = void 0, u;
}
const wu = (e) => e, Yv = ze({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Po = (e) => Ig(Yv, e), Xv = ze({
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
    default: () => wu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Po(["ariaLabel"])
}), Qv = {
  [lt]: (e) => Et(e),
  input: (e) => Et(e),
  change: (e) => Et(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Jv = ["class", "style"], e0 = /^on[A-Z]/, t0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = C(() => (n?.value || []).concat(Jv)), r = xt();
  return r ? C(() => {
    var l;
    return us(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([s]) => !o.value.includes(s) && !(t && e0.test(s))));
  }) : C(() => ({}));
}, Ua = Symbol("formContextKey"), hs = Symbol("formItemContextKey"), Ni = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, n0 = Symbol("elIdInjection"), ku = () => xt() ? Re(n0, Ni) : Ni, Zo = (e) => {
  const t = ku(), n = $a();
  return Bg(() => a(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
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
  let l;
  const s = C(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return tt(() => {
    l = de([Kn(e, "id"), n], ([i, c]) => {
      const u = i ?? (c ? void 0 : Zo().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !c && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), La(() => {
    l && l(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, _u = (e) => {
  const t = xt();
  return C(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, zr = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : _u("size"), r = t.global ? n : iv(), l = t.form ? { size: void 0 } : Re(Ua, void 0), s = t.formItem ? { size: void 0 } : Re(hs, void 0);
  return C(() => o.value || a(e) || s?.size || l?.size || r.value || "");
}, Ka = (e) => {
  const t = _u("disabled"), n = Re(Ua, void 0);
  return C(() => t.value || a(e) || n?.disabled || !1);
};
function Su(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const l = xt(), { emit: s } = l, i = uo(), c = P(!1), u = (g) => {
    Ke(t) && t(g) || c.value || (c.value = !0, s("focus", g), n?.());
  }, d = (g) => {
    var w;
    Ke(o) && o(g) || g.relatedTarget && ((w = i.value) != null && w.contains(g.relatedTarget)) || (c.value = !1, s("blur", g), r?.());
  }, m = () => {
    var g, w;
    (g = i.value) != null && g.contains(document.activeElement) && i.value !== document.activeElement || (w = e.value) == null || w.focus();
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
const o0 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
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
    n.value = !o0(d);
  }, l = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Ge(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? l(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: l
  };
}
function r0(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: l, value: s } = e.value;
    if (r == null || l == null)
      return;
    const i = s.slice(0, Math.max(0, r)), c = s.slice(Math.max(0, l));
    t = {
      selectionStart: r,
      selectionEnd: l,
      value: s,
      beforeTxt: i,
      afterTxt: c
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: l, afterTxt: s, selectionStart: i } = t;
    if (l == null || s == null || i == null)
      return;
    let c = r.length;
    if (r.endsWith(s))
      c = r.length - s.length;
    else if (r.startsWith(l))
      c = l.length;
    else {
      const u = l[i - 1], d = r.indexOf(u, i - 1);
      d !== -1 && (c = d + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, o];
}
const s0 = "ElInput", a0 = oe({
  name: s0,
  inheritAttrs: !1
}), l0 = /* @__PURE__ */ oe({
  ...a0,
  props: Xv,
  emits: Qv,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = sf(), l = t0(), s = Mc(), i = C(() => [
      o.type === "textarea" ? b.b() : h.b(),
      h.m(g.value),
      h.is("disabled", w.value),
      h.is("exceed", H.value),
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
    }), g = zr(), w = Ka(), h = Xe("input"), b = Xe("textarea"), E = uo(), k = uo(), R = P(!1), F = P(!1), O = P(), A = uo(o.inputStyle), x = C(() => E.value || k.value), { wrapperRef: $, isFocused: K, handleFocus: Z, handleBlur: re } = Su(x, {
      beforeFocus() {
        return w.value;
      },
      afterBlur() {
        var G;
        o.validateEvent && ((G = d?.validate) == null || G.call(d, "blur").catch((we) => void 0));
      }
    }), W = C(() => {
      var G;
      return (G = u?.statusIcon) != null ? G : !1;
    }), ae = C(() => d?.validateState || ""), fe = C(() => ae.value && bu[ae.value]), ce = C(() => F.value ? Hv : $v), M = C(() => [
      r.style
    ]), V = C(() => [
      o.inputStyle,
      A.value,
      { resize: o.resize }
    ]), B = C(() => Yn(o.modelValue) ? "" : String(o.modelValue)), ie = C(() => o.clearable && !w.value && !o.readonly && !!B.value && (K.value || R.value)), pe = C(() => o.showPassword && !w.value && !!B.value && (!!B.value || K.value)), Se = C(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !w.value && !o.readonly && !o.showPassword), Q = C(() => B.value.length), H = C(() => !!Se.value && Q.value > Number(o.maxlength)), Ae = C(() => !!s.suffix || !!o.suffixIcon || ie.value || o.showPassword || Se.value || !!ae.value && W.value), [ge, ve] = r0(E);
    In(k, (G) => {
      if (ue(), !Se.value || o.resize !== "both")
        return;
      const we = G[0], { width: Ce } = we.contentRect;
      O.value = {
        right: `calc(100% - ${Ce + 15 + 6}px)`
      };
    });
    const me = () => {
      const { type: G, autosize: we } = o;
      if (!(!qe || G !== "textarea" || !k.value))
        if (we) {
          const Ce = Xt(we) ? we.minRows : void 0, Nt = Xt(we) ? we.maxRows : void 0, Me = Pi(k.value, Ce, Nt);
          A.value = {
            overflowY: "hidden",
            ...Me
          }, Ge(() => {
            k.value.offsetHeight, A.value = Me;
          });
        } else
          A.value = {
            minHeight: Pi(k.value).minHeight
          };
    }, ue = ((G) => {
      let we = !1;
      return () => {
        var Ce;
        if (we || !o.autosize)
          return;
        ((Ce = k.value) == null ? void 0 : Ce.offsetParent) === null || (G(), we = !0);
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
      handleCompositionUpdate: kt,
      handleCompositionEnd: gt
    } = Tu({ emit: n, afterComposition: ft }), ut = () => {
      ge(), F.value = !F.value, setTimeout(ve);
    }, _t = () => {
      var G;
      return (G = x.value) == null ? void 0 : G.focus();
    }, Je = () => {
      var G;
      return (G = x.value) == null ? void 0 : G.blur();
    }, Mt = (G) => {
      R.value = !1, n("mouseleave", G);
    }, st = (G) => {
      R.value = !0, n("mouseenter", G);
    }, nt = (G) => {
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
    }), tt(() => {
      !o.formatter && o.parser, Be(), Ge(me);
    }), t({
      input: E,
      textarea: k,
      ref: x,
      textareaStyle: V,
      autosize: Kn(o, "autosize"),
      isComposing: rt,
      focus: _t,
      blur: Je,
      select: Gt,
      clear: Pt,
      resizeTextarea: me
    }), (G, we) => (S(), N("div", {
      class: D([
        a(i),
        {
          [a(h).bm("group", "append")]: G.$slots.append,
          [a(h).bm("group", "prepend")]: G.$slots.prepend
        }
      ]),
      style: dt(a(M)),
      onMouseenter: st,
      onMouseleave: Mt
    }, [
      U(" input "),
      G.type !== "textarea" ? (S(), N(at, { key: 0 }, [
        U(" prepend slot "),
        G.$slots.prepend ? (S(), N("div", {
          key: 0,
          class: D(a(h).be("group", "prepend"))
        }, [
          le(G.$slots, "prepend")
        ], 2)) : U("v-if", !0),
        f("div", {
          ref_key: "wrapperRef",
          ref: $,
          class: D(a(c))
        }, [
          U(" prefix slot "),
          G.$slots.prefix || G.prefixIcon ? (S(), N("span", {
            key: 0,
            class: D(a(h).e("prefix"))
          }, [
            f("span", {
              class: D(a(h).e("prefix-inner"))
            }, [
              le(G.$slots, "prefix"),
              G.prefixIcon ? (S(), ee(a(ot), {
                key: 0,
                class: D(a(h).e("icon"))
              }, {
                default: X(() => [
                  (S(), ee(wt(G.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0),
          f("input", Eo({
            id: a(m),
            ref_key: "input",
            ref: E,
            class: a(h).e("inner")
          }, a(l), {
            minlength: G.minlength,
            maxlength: G.maxlength,
            type: G.showPassword ? F.value ? "text" : "password" : G.type,
            disabled: a(w),
            readonly: G.readonly,
            autocomplete: G.autocomplete,
            tabindex: G.tabindex,
            "aria-label": G.ariaLabel,
            placeholder: G.placeholder,
            style: G.inputStyle,
            form: G.form,
            autofocus: G.autofocus,
            role: G.containerRole,
            onCompositionstart: a(ht),
            onCompositionupdate: a(kt),
            onCompositionend: a(gt),
            onInput: ft,
            onChange: He,
            onKeydown: nt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          U(" suffix slot "),
          a(Ae) ? (S(), N("span", {
            key: 1,
            class: D(a(h).e("suffix"))
          }, [
            f("span", {
              class: D(a(h).e("suffix-inner"))
            }, [
              !a(ie) || !a(pe) || !a(Se) ? (S(), N(at, { key: 0 }, [
                le(G.$slots, "suffix"),
                G.suffixIcon ? (S(), ee(a(ot), {
                  key: 0,
                  class: D(a(h).e("icon"))
                }, {
                  default: X(() => [
                    (S(), ee(wt(G.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : U("v-if", !0)
              ], 64)) : U("v-if", !0),
              a(ie) ? (S(), ee(a(ot), {
                key: 1,
                class: D([a(h).e("icon"), a(h).e("clear")]),
                onMousedown: Ue(a(fo), ["prevent"]),
                onClick: Pt
              }, {
                default: X(() => [
                  _(a(Wa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : U("v-if", !0),
              a(pe) ? (S(), ee(a(ot), {
                key: 2,
                class: D([a(h).e("icon"), a(h).e("password")]),
                onClick: ut
              }, {
                default: X(() => [
                  (S(), ee(wt(a(ce))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              a(Se) ? (S(), N("span", {
                key: 3,
                class: D(a(h).e("count"))
              }, [
                f("span", {
                  class: D(a(h).e("count-inner"))
                }, L(a(Q)) + " / " + L(G.maxlength), 3)
              ], 2)) : U("v-if", !0),
              a(ae) && a(fe) && a(W) ? (S(), ee(a(ot), {
                key: 4,
                class: D([
                  a(h).e("icon"),
                  a(h).e("validateIcon"),
                  a(h).is("loading", a(ae) === "validating")
                ])
              }, {
                default: X(() => [
                  (S(), ee(wt(a(fe))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0)
        ], 2),
        U(" append slot "),
        G.$slots.append ? (S(), N("div", {
          key: 1,
          class: D(a(h).be("group", "append"))
        }, [
          le(G.$slots, "append")
        ], 2)) : U("v-if", !0)
      ], 64)) : (S(), N(at, { key: 1 }, [
        U(" textarea "),
        f("textarea", Eo({
          id: a(m),
          ref_key: "textarea",
          ref: k,
          class: [a(b).e("inner"), a(h).is("focus", a(K))]
        }, a(l), {
          minlength: G.minlength,
          maxlength: G.maxlength,
          tabindex: G.tabindex,
          disabled: a(w),
          readonly: G.readonly,
          autocomplete: G.autocomplete,
          style: a(V),
          "aria-label": G.ariaLabel,
          placeholder: G.placeholder,
          form: G.form,
          autofocus: G.autofocus,
          rows: G.rows,
          role: G.containerRole,
          onCompositionstart: a(ht),
          onCompositionupdate: a(kt),
          onCompositionend: a(gt),
          onInput: ft,
          onFocus: a(Z),
          onBlur: a(re),
          onChange: He,
          onKeydown: nt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        a(Se) ? (S(), N("span", {
          key: 0,
          style: dt(O.value),
          class: D(a(h).e("count"))
        }, L(a(Q)) + " / " + L(G.maxlength), 7)) : U("v-if", !0)
      ], 64))
    ], 38));
  }
});
var i0 = /* @__PURE__ */ je(l0, [["__file", "input.vue"]]);
const c0 = an(i0), jo = 4, u0 = {
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
}, d0 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), qa = Symbol("scrollbarContextKey"), f0 = ze({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), p0 = "Thumb", m0 = /* @__PURE__ */ oe({
  __name: "thumb",
  props: f0,
  setup(e) {
    const t = e, n = Re(qa), o = Xe("scrollbar");
    n || Es(p0, "can not inject scrollbar context");
    const r = P(), l = P(), s = P({}), i = P(!1);
    let c = !1, u = !1, d = qe ? document.onselectstart : null;
    const m = C(() => u0[t.vertical ? "vertical" : "horizontal"]), g = C(() => d0({
      size: t.size,
      move: t.move,
      bar: m.value
    })), w = C(() => r.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / l.value[m.value.offset]), h = (x) => {
      var $;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), E(x);
      const K = x.currentTarget;
      K && (s.value[m.value.axis] = K[m.value.offset] - (x[m.value.client] - K.getBoundingClientRect()[m.value.direction]));
    }, b = (x) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const $ = Math.abs(x.target.getBoundingClientRect()[m.value.direction] - x[m.value.client]), K = l.value[m.value.offset] / 2, Z = ($ - K) * 100 * w.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = Z * n.wrapElement[m.value.scrollSize] / 100;
    }, E = (x) => {
      x.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", k), document.addEventListener("mouseup", R), d = document.onselectstart, document.onselectstart = () => !1;
    }, k = (x) => {
      if (!r.value || !l.value || c === !1)
        return;
      const $ = s.value[m.value.axis];
      if (!$)
        return;
      const K = (r.value.getBoundingClientRect()[m.value.direction] - x[m.value.client]) * -1, Z = l.value[m.value.offset] - $, re = (K - Z) * 100 * w.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = re * n.wrapElement[m.value.scrollSize] / 100;
    }, R = () => {
      c = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", R), A(), u && (i.value = !1);
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
    return vn(Kn(n, "scrollbarElement"), "mousemove", F), vn(Kn(n, "scrollbarElement"), "mouseleave", O), (x, $) => (S(), ee($o, {
      name: a(o).b("fade"),
      persisted: ""
    }, {
      default: X(() => [
        it(f("div", {
          ref_key: "instance",
          ref: r,
          class: D([a(o).e("bar"), a(o).is(a(m).key)]),
          onMousedown: b
        }, [
          f("div", {
            ref_key: "thumb",
            ref: l,
            class: D(a(o).e("thumb")),
            style: dt(a(g)),
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
var Di = /* @__PURE__ */ je(m0, [["__file", "thumb.vue"]]);
const h0 = ze({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), g0 = /* @__PURE__ */ oe({
  __name: "bar",
  props: h0,
  setup(e, { expose: t }) {
    const n = e, o = Re(qa), r = P(0), l = P(0), s = P(""), i = P(""), c = P(1), u = P(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const w = g.offsetHeight - jo, h = g.offsetWidth - jo;
          l.value = g.scrollTop * 100 / w * c.value, r.value = g.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const w = g.offsetHeight - jo, h = g.offsetWidth - jo, b = w ** 2 / g.scrollHeight, E = h ** 2 / g.scrollWidth, k = Math.max(b, n.minSize), R = Math.max(E, n.minSize);
        c.value = b / (w - b) / (k / (w - k)), u.value = E / (h - E) / (R / (h - R)), i.value = k + jo < w ? `${k}px` : "", s.value = R + jo < h ? `${R}px` : "";
      }
    }), (g, w) => (S(), N(at, null, [
      _(Di, {
        move: r.value,
        ratio: u.value,
        size: s.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _(Di, {
        move: l.value,
        ratio: c.value,
        size: i.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var v0 = /* @__PURE__ */ je(g0, [["__file", "bar.vue"]]);
const b0 = ze({
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
}), y0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every($e)
}, w0 = "ElScrollbar", k0 = oe({
  name: w0
}), _0 = /* @__PURE__ */ oe({
  ...k0,
  props: b0,
  emits: y0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Xe("scrollbar");
    let l, s, i = 0, c = 0;
    const u = P(), d = P(), m = P(), g = P(), w = C(() => {
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
    function k(A, x) {
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
      A ? (l?.(), s?.()) : ({ stop: l } = In(m, O), s = vn("resize", O));
    }, { immediate: !0 }), de(() => [o.maxHeight, o.height], () => {
      o.native || Ge(() => {
        var A;
        O(), d.value && ((A = g.value) == null || A.handleScroll(d.value));
      });
    }), bn(qa, xo({
      scrollbarElement: u,
      wrapElement: d
    })), af(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = c);
    }), tt(() => {
      o.native || Ge(() => {
        O();
      });
    }), Pc(() => O()), t({
      wrapRef: d,
      update: O,
      scrollTo: k,
      setScrollTop: R,
      setScrollLeft: F,
      handleScroll: E
    }), (A, x) => (S(), N("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: D(a(r).b())
    }, [
      f("div", {
        ref_key: "wrapRef",
        ref: d,
        class: D(a(h)),
        style: dt(a(w)),
        tabindex: A.tabindex,
        onScroll: E
      }, [
        (S(), ee(wt(A.tag), {
          id: A.id,
          ref_key: "resizeRef",
          ref: m,
          class: D(a(b)),
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
      A.native ? U("v-if", !0) : (S(), ee(v0, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: A.always,
        "min-size": A.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var S0 = /* @__PURE__ */ je(_0, [["__file", "scrollbar.vue"]]);
const T0 = an(S0), Za = Symbol("popper"), Au = Symbol("popperContent"), A0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Cu = ze({
  role: {
    type: String,
    values: A0,
    default: "tooltip"
  }
}), C0 = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), E0 = /* @__PURE__ */ oe({
  ...C0,
  props: Cu,
  setup(e, { expose: t }) {
    const n = e, o = P(), r = P(), l = P(), s = P(), i = C(() => n.role), c = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: s,
      role: i
    };
    return t(c), bn(Za, c), (u, d) => le(u.$slots, "default");
  }
});
var x0 = /* @__PURE__ */ je(E0, [["__file", "popper.vue"]]);
const Eu = ze({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), L0 = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), I0 = /* @__PURE__ */ oe({
  ...L0,
  props: Eu,
  setup(e, { expose: t }) {
    const n = e, o = Xe("popper"), { arrowOffset: r, arrowRef: l, arrowStyle: s } = Re(Au, void 0);
    return de(() => n.arrowOffset, (i) => {
      r.value = i;
    }), wn(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (i, c) => (S(), N("span", {
      ref_key: "arrowRef",
      ref: l,
      class: D(a(o).e("arrow")),
      style: dt(a(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var O0 = /* @__PURE__ */ je(I0, [["__file", "arrow.vue"]]);
const xu = ze({
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
}), Lu = Symbol("elForwardRef"), $0 = (e) => {
  bn(Lu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, R0 = (e) => ({
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
}, M0 = "ElOnlyChild", P0 = oe({
  name: M0,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = Re(Lu), l = R0((o = r?.setForwardRef) != null ? o : fo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const c = Iu(i);
      return c ? it(lf(c, n), [[l]]) : null;
    };
  }
});
function Iu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Xt(n))
      switch (n.type) {
        case uf:
          continue;
        case cf:
        case "svg":
          return zi(n);
        case at:
          return Iu(n.children);
        default:
          return n;
      }
    return zi(n);
  }
  return null;
}
function zi(e) {
  const t = Xe("only-child");
  return _("span", {
    class: t.e("content")
  }, [e]);
}
const N0 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), D0 = /* @__PURE__ */ oe({
  ...N0,
  props: xu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = Re(Za, void 0);
    $0(r);
    const l = C(() => i.value ? n.id : void 0), s = C(() => {
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
    return tt(() => {
      de(() => n.virtualRef, (m) => {
        m && (r.value = qn(m));
      }, {
        immediate: !0
      }), de(r, (m, g) => {
        u?.(), u = void 0, gn(m) && (d.forEach((w) => {
          var h;
          const b = n[w];
          b && (m.addEventListener(w.slice(2).toLowerCase(), b), (h = g?.removeEventListener) == null || h.call(g, w.slice(2).toLowerCase(), b));
        }), ma(m) && (u = de([l, s, i, c], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, b) => {
            Yn(w[b]) ? m.removeAttribute(h) : m.setAttribute(h, w[b]);
          });
        }, { immediate: !0 }))), gn(g) && ma(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((w) => g.removeAttribute(w));
      }, {
        immediate: !0
      });
    }), wn(() => {
      if (u?.(), u = void 0, r.value && gn(r.value)) {
        const m = r.value;
        d.forEach((g) => {
          const w = n[g];
          w && m.removeEventListener(g.slice(2).toLowerCase(), w);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (m, g) => m.virtualTriggering ? U("v-if", !0) : (S(), ee(a(P0), Eo({ key: 0 }, m.$attrs, {
      "aria-controls": a(l),
      "aria-describedby": a(s),
      "aria-expanded": a(c),
      "aria-haspopup": a(i)
    }), {
      default: X(() => [
        le(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var z0 = /* @__PURE__ */ je(D0, [["__file", "trigger.vue"]]);
const Zs = "focus-trap.focus-after-trapped", Ys = "focus-trap.focus-after-released", B0 = "focus-trap.focusout-prevented", Bi = {
  cancelable: !0,
  bubbles: !1
}, F0 = {
  cancelable: !0,
  bubbles: !1
}, Fi = "focusAfterTrapped", ji = "focusAfterReleased", Ou = Symbol("elFocusTrap"), Ya = P(), $s = P(0), Xa = P(0);
let qr = 0;
const $u = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Vi = (e, t) => {
  for (const n of e)
    if (!j0(n, t))
      return n;
}, j0 = (e, t) => {
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
}, V0 = (e) => {
  const t = $u(e), n = Vi(t, e), o = Vi(t.reverse(), e);
  return [n, o];
}, H0 = (e) => e instanceof HTMLInputElement && "select" in e, Un = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    gn(e) && !ma(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Xa.value = window.performance.now(), e !== n && H0(e) && t && e.select(), gn(e) && o && e.removeAttribute("tabindex");
  }
};
function Hi(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const W0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Hi(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = Hi(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, U0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Un(o, t), document.activeElement !== n)
      return;
}, Wi = W0(), G0 = () => $s.value > Xa.value, Zr = () => {
  Ya.value = "pointer", $s.value = window.performance.now();
}, Ui = () => {
  Ya.value = "keyboard", $s.value = window.performance.now();
}, K0 = () => (tt(() => {
  qr === 0 && (document.addEventListener("mousedown", Zr), document.addEventListener("touchstart", Zr), document.addEventListener("keydown", Ui)), qr++;
}), wn(() => {
  qr--, qr <= 0 && (document.removeEventListener("mousedown", Zr), document.removeEventListener("touchstart", Zr), document.removeEventListener("keydown", Ui));
}), {
  focusReason: Ya,
  lastUserFocusTimestamp: $s,
  lastAutomatedFocusTimestamp: Xa
}), Yr = (e) => new CustomEvent(B0, {
  ...F0,
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
const Gi = (e) => {
  e.code === Rn.esc && Go.forEach((t) => t(e));
}, q0 = (e) => {
  tt(() => {
    Go.length === 0 && document.addEventListener("keydown", Gi), qe && Go.push(e);
  }), wn(() => {
    Go = Go.filter((t) => t !== e), Go.length === 0 && qe && document.removeEventListener("keydown", Gi);
  });
}, Z0 = oe({
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
    Fi,
    ji,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, r;
    const { focusReason: l } = K0();
    q0((h) => {
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
      const { code: b, altKey: E, ctrlKey: k, metaKey: R, currentTarget: F, shiftKey: O } = h, { loop: A } = e, x = b === Rn.tab && !E && !k && !R, $ = document.activeElement;
      if (x && $) {
        const K = F, [Z, re] = V0(K);
        if (Z && re) {
          if (!O && $ === re) {
            const ae = Yr({
              focusReason: l.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (h.preventDefault(), A && Un(Z, !0));
          } else if (O && [Z, K].includes($)) {
            const ae = Yr({
              focusReason: l.value
            });
            t("focusout-prevented", ae), ae.defaultPrevented || (h.preventDefault(), A && Un(re, !0));
          }
        } else if ($ === K) {
          const ae = Yr({
            focusReason: l.value
          });
          t("focusout-prevented", ae), ae.defaultPrevented || h.preventDefault();
        }
      }
    };
    bn(Ou, {
      focusTrapRef: n,
      onKeydown: i
    }), de(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), de([n], ([h], [b]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", i), b.removeEventListener("focusin", d), b.removeEventListener("focusout", m));
    });
    const c = (h) => {
      t(Fi, h);
    }, u = (h) => t(ji, h), d = (h) => {
      const b = a(n);
      if (!b)
        return;
      const E = h.target, k = h.relatedTarget, R = E && b.contains(E);
      e.trapped || k && b.contains(k) || (o = k), R && t("focusin", h), !s.paused && e.trapped && (R ? r = E : Un(r, !0));
    }, m = (h) => {
      const b = a(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const E = h.relatedTarget;
          !Yn(E) && !b.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const k = Yr({
                focusReason: l.value
              });
              t("focusout-prevented", k), k.defaultPrevented || Un(r, !0);
            }
          }, 0);
        } else {
          const E = h.target;
          E && b.contains(E) || t("focusout", h);
        }
    };
    async function g() {
      await Ge();
      const h = a(n);
      if (h) {
        Wi.push(s);
        const b = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = b, !h.contains(b)) {
          const k = new Event(Zs, Bi);
          h.addEventListener(Zs, c), h.dispatchEvent(k), k.defaultPrevented || Ge(() => {
            let R = e.focusStartEl;
            Et(R) || (Un(R), document.activeElement !== R && (R = "first")), R === "first" && U0($u(h), !0), (document.activeElement === b || R === "container") && Un(h);
          });
        }
      }
    }
    function w() {
      const h = a(n);
      if (h) {
        h.removeEventListener(Zs, c);
        const b = new CustomEvent(Ys, {
          ...Bi,
          detail: {
            focusReason: l.value
          }
        });
        h.addEventListener(Ys, u), h.dispatchEvent(b), !b.defaultPrevented && (l.value == "keyboard" || !G0() || h.contains(document.activeElement)) && Un(o ?? document.body), h.removeEventListener(Ys, u), Wi.remove(s);
      }
    }
    return tt(() => {
      e.trapped && g(), de(() => e.trapped, (h) => {
        h ? g() : w();
      });
    }), wn(() => {
      e.trapped && w(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Y0(e, t, n, o, r, l) {
  return le(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Ru = /* @__PURE__ */ je(Z0, [["render", Y0], ["__file", "focus-trap.vue"]]), Wt = "top", on = "bottom", rn = "right", Ut = "left", Qa = "auto", Br = [Wt, on, rn, Ut], Yo = "start", Rr = "end", X0 = "clippingParents", Mu = "viewport", pr = "popper", Q0 = "reference", Ki = Br.reduce(function(e, t) {
  return e.concat([t + "-" + Yo, t + "-" + Rr]);
}, []), Rs = [].concat(Br, [Qa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yo, t + "-" + Rr]);
}, []), J0 = "beforeRead", eb = "read", tb = "afterRead", nb = "beforeMain", ob = "main", rb = "afterMain", sb = "beforeWrite", ab = "write", lb = "afterWrite", ib = [J0, eb, tb, nb, ob, rb, sb, ab, lb];
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
function cb(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !nn(l) || !Dn(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === !1 ? l.removeAttribute(s) : l.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function ub(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !nn(r) || !Dn(r) || (Object.assign(r.style, i), Object.keys(l).forEach(function(c) {
        r.removeAttribute(c);
      }));
    });
  };
}
var Pu = { name: "applyStyles", enabled: !0, phase: "write", fn: cb, effect: ub, requires: ["computeStyles"] };
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
function Nu() {
  return !/^((?!chrome|android).)*safari/i.test(ha());
}
function Qo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, l = 1;
  t && nn(e) && (r = e.offsetWidth > 0 && Xo(o.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && Xo(o.height) / e.offsetHeight || 1);
  var s = Io(e) ? Qt(e) : window, i = s.visualViewport, c = !Nu() && n, u = (o.left + (c && i ? i.offsetLeft : 0)) / r, d = (o.top + (c && i ? i.offsetTop : 0)) / l, m = o.width / r, g = o.height / l;
  return { width: m, height: g, top: d, right: u + m, bottom: d + g, left: u, x: u, y: d };
}
function el(e) {
  var t = Qo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Du(e, t) {
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
function db(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
}
function mo(e) {
  return ((Io(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ms(e) {
  return Dn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ja(e) ? e.host : null) || mo(e);
}
function qi(e) {
  return !nn(e) || to(e).position === "fixed" ? null : e.offsetParent;
}
function fb(e) {
  var t = /firefox/i.test(ha()), n = /Trident/i.test(ha());
  if (n && nn(e)) {
    var o = to(e);
    if (o.position === "fixed") return null;
  }
  var r = Ms(e);
  for (Ja(r) && (r = r.host); nn(r) && ["html", "body"].indexOf(Dn(r)) < 0; ) {
    var l = to(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function Fr(e) {
  for (var t = Qt(e), n = qi(e); n && db(n) && to(n).position === "static"; ) n = qi(n);
  return n && (Dn(n) === "html" || Dn(n) === "body" && to(n).position === "static") ? t : n || fb(e) || t;
}
function tl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cr(e, t, n) {
  return Co(e, gs(t, n));
}
function pb(e, t, n) {
  var o = Cr(e, t, n);
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
var mb = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Bu(typeof e != "number" ? e : Fu(e, Br));
};
function hb(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Mn(n.placement), c = tl(i), u = [Ut, rn].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!l || !s)) {
    var m = mb(r.padding, n), g = el(l), w = c === "y" ? Wt : Ut, h = c === "y" ? on : rn, b = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], E = s[c] - n.rects.reference[c], k = Fr(l), R = k ? c === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, F = b / 2 - E / 2, O = m[w], A = R - g[d] - m[h], x = R / 2 - g[d] / 2 + F, $ = Cr(O, x, A), K = c;
    n.modifiersData[o] = (t = {}, t[K] = $, t.centerOffset = $ - x, t);
  }
}
function gb(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Du(t.elements.popper, r) && (t.elements.arrow = r));
}
var vb = { name: "arrow", enabled: !0, phase: "main", fn: hb, effect: gb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jo(e) {
  return e.split("-")[1];
}
var bb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yb(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Xo(n * r) / r || 0, y: Xo(o * r) / r || 0 };
}
function Zi(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, i = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = s.x, w = g === void 0 ? 0 : g, h = s.y, b = h === void 0 ? 0 : h, E = typeof d == "function" ? d({ x: w, y: b }) : { x: w, y: b };
  w = E.x, b = E.y;
  var k = s.hasOwnProperty("x"), R = s.hasOwnProperty("y"), F = Ut, O = Wt, A = window;
  if (u) {
    var x = Fr(n), $ = "clientHeight", K = "clientWidth";
    if (x === Qt(n) && (x = mo(n), to(x).position !== "static" && i === "absolute" && ($ = "scrollHeight", K = "scrollWidth")), x = x, r === Wt || (r === Ut || r === rn) && l === Rr) {
      O = on;
      var Z = m && x === A && A.visualViewport ? A.visualViewport.height : x[$];
      b -= Z - o.height, b *= c ? 1 : -1;
    }
    if (r === Ut || (r === Wt || r === on) && l === Rr) {
      F = rn;
      var re = m && x === A && A.visualViewport ? A.visualViewport.width : x[K];
      w -= re - o.width, w *= c ? 1 : -1;
    }
  }
  var W = Object.assign({ position: i }, u && bb), ae = d === !0 ? yb({ x: w, y: b }, Qt(n)) : { x: w, y: b };
  if (w = ae.x, b = ae.y, c) {
    var fe;
    return Object.assign({}, W, (fe = {}, fe[O] = R ? "0" : "", fe[F] = k ? "0" : "", fe.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", fe));
  }
  return Object.assign({}, W, (t = {}, t[O] = R ? b + "px" : "", t[F] = k ? w + "px" : "", t.transform = "", t));
}
function wb(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, s = l === void 0 ? !0 : l, i = n.roundOffsets, c = i === void 0 ? !0 : i, u = { placement: Mn(t.placement), variation: Jo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zi(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zi(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ju = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: wb, data: {} }, Xr = { passive: !0 };
function kb(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, s = o.resize, i = s === void 0 ? !0 : s, c = Qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Xr);
  }), i && c.addEventListener("resize", n.update, Xr), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Xr);
    }), i && c.removeEventListener("resize", n.update, Xr);
  };
}
var Vu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: kb, data: {} }, _b = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ns(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return _b[t];
  });
}
var Sb = { start: "end", end: "start" };
function Yi(e) {
  return e.replace(/start|end/g, function(t) {
    return Sb[t];
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
  var n = Qt(e), o = mo(e), r = n.visualViewport, l = o.clientWidth, s = o.clientHeight, i = 0, c = 0;
  if (r) {
    l = r.width, s = r.height;
    var u = Nu();
    (u || !u && t === "fixed") && (i = r.offsetLeft, c = r.offsetTop);
  }
  return { width: l, height: s, x: i + ol(e), y: c };
}
function Ab(e) {
  var t, n = mo(e), o = nl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Co(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Co(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + ol(e), c = -o.scrollTop;
  return to(r || n).direction === "rtl" && (i += Co(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: s, x: i, y: c };
}
function rl(e) {
  var t = to(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Hu(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0 ? e.ownerDocument.body : nn(e) && rl(e) ? e : Hu(Ms(e));
}
function Er(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Hu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Qt(o), s = r ? [l].concat(l.visualViewport || [], rl(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(Er(Ms(s)));
}
function ga(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Cb(e, t) {
  var n = Qo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Xi(e, t, n) {
  return t === Mu ? ga(Tb(e, n)) : Io(t) ? Cb(t, n) : ga(Ab(mo(e)));
}
function Eb(e) {
  var t = Er(Ms(e)), n = ["absolute", "fixed"].indexOf(to(e).position) >= 0, o = n && nn(e) ? Fr(e) : e;
  return Io(o) ? t.filter(function(r) {
    return Io(r) && Du(r, o) && Dn(r) !== "body";
  }) : [];
}
function xb(e, t, n, o) {
  var r = t === "clippingParents" ? Eb(e) : [].concat(t), l = [].concat(r, [n]), s = l[0], i = l.reduce(function(c, u) {
    var d = Xi(e, u, o);
    return c.top = Co(d.top, c.top), c.right = gs(d.right, c.right), c.bottom = gs(d.bottom, c.bottom), c.left = Co(d.left, c.left), c;
  }, Xi(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Wu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Mn(o) : null, l = o ? Jo(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
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
    switch (l) {
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
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.strategy, s = l === void 0 ? e.strategy : l, i = n.boundary, c = i === void 0 ? X0 : i, u = n.rootBoundary, d = u === void 0 ? Mu : u, m = n.elementContext, g = m === void 0 ? pr : m, w = n.altBoundary, h = w === void 0 ? !1 : w, b = n.padding, E = b === void 0 ? 0 : b, k = Bu(typeof E != "number" ? E : Fu(E, Br)), R = g === pr ? Q0 : pr, F = e.rects.popper, O = e.elements[h ? R : g], A = xb(Io(O) ? O : O.contextElement || mo(e.elements.popper), c, d, s), x = Qo(e.elements.reference), $ = Wu({ reference: x, element: F, placement: r }), K = ga(Object.assign({}, F, $)), Z = g === pr ? K : x, re = { top: A.top - Z.top + k.top, bottom: Z.bottom - A.bottom + k.bottom, left: A.left - Z.left + k.left, right: Z.right - A.right + k.right }, W = e.modifiersData.offset;
  if (g === pr && W) {
    var ae = W[r];
    Object.keys(re).forEach(function(fe) {
      var ce = [rn, on].indexOf(fe) >= 0 ? 1 : -1, M = [Wt, on].indexOf(fe) >= 0 ? "y" : "x";
      re[fe] += ae[M] * ce;
    });
  }
  return re;
}
function Lb(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Rs : c, d = Jo(o), m = d ? i ? Ki : Ki.filter(function(h) {
    return Jo(h) === d;
  }) : Br, g = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  g.length === 0 && (g = m);
  var w = g.reduce(function(h, b) {
    return h[b] = Mr(e, { placement: b, boundary: r, rootBoundary: l, padding: s })[Mn(b)], h;
  }, {});
  return Object.keys(w).sort(function(h, b) {
    return w[h] - w[b];
  });
}
function Ib(e) {
  if (Mn(e) === Qa) return [];
  var t = ns(e);
  return [Yi(e), t, Yi(t)];
}
function Ob(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, g = n.altBoundary, w = n.flipVariations, h = w === void 0 ? !0 : w, b = n.allowedAutoPlacements, E = t.options.placement, k = Mn(E), R = k === E, F = c || (R || !h ? [ns(E)] : Ib(E)), O = [E].concat(F).reduce(function(ge, ve) {
      return ge.concat(Mn(ve) === Qa ? Lb(t, { placement: ve, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: b }) : ve);
    }, []), A = t.rects.reference, x = t.rects.popper, $ = /* @__PURE__ */ new Map(), K = !0, Z = O[0], re = 0; re < O.length; re++) {
      var W = O[re], ae = Mn(W), fe = Jo(W) === Yo, ce = [Wt, on].indexOf(ae) >= 0, M = ce ? "width" : "height", V = Mr(t, { placement: W, boundary: d, rootBoundary: m, altBoundary: g, padding: u }), B = ce ? fe ? rn : Ut : fe ? on : Wt;
      A[M] > x[M] && (B = ns(B));
      var ie = ns(B), pe = [];
      if (l && pe.push(V[ae] <= 0), i && pe.push(V[B] <= 0, V[ie] <= 0), pe.every(function(ge) {
        return ge;
      })) {
        Z = W, K = !1;
        break;
      }
      $.set(W, pe);
    }
    if (K) for (var Se = h ? 3 : 1, Q = function(ge) {
      var ve = O.find(function(me) {
        var q = $.get(me);
        if (q) return q.slice(0, ge).every(function(ue) {
          return ue;
        });
      });
      if (ve) return Z = ve, "break";
    }, H = Se; H > 0; H--) {
      var Ae = Q(H);
      if (Ae === "break") break;
    }
    t.placement !== Z && (t.modifiersData[o]._skip = !0, t.placement = Z, t.reset = !0);
  }
}
var $b = { name: "flip", enabled: !0, phase: "main", fn: Ob, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Qi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ji(e) {
  return [Wt, rn, on, Ut].some(function(t) {
    return e[t] >= 0;
  });
}
function Rb(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = Mr(t, { elementContext: "reference" }), i = Mr(t, { altBoundary: !0 }), c = Qi(s, o), u = Qi(i, r, l), d = Ji(c), m = Ji(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var Mb = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Rb };
function Pb(e, t, n) {
  var o = Mn(e), r = [Ut, Wt].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = l[0], i = l[1];
  return s = s || 0, i = (i || 0) * r, [Ut, rn].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Nb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, s = Rs.reduce(function(d, m) {
    return d[m] = Pb(m, t.rects, l), d;
  }, {}), i = s[t.placement], c = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var Db = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Nb };
function zb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Wu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Uu = { name: "popperOffsets", enabled: !0, phase: "read", fn: zb, data: {} };
function Bb(e) {
  return e === "x" ? "y" : "x";
}
function Fb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, g = n.tether, w = g === void 0 ? !0 : g, h = n.tetherOffset, b = h === void 0 ? 0 : h, E = Mr(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: d }), k = Mn(t.placement), R = Jo(t.placement), F = !R, O = tl(k), A = Bb(O), x = t.modifiersData.popperOffsets, $ = t.rects.reference, K = t.rects.popper, Z = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, re = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ae = { x: 0, y: 0 };
  if (x) {
    if (l) {
      var fe, ce = O === "y" ? Wt : Ut, M = O === "y" ? on : rn, V = O === "y" ? "height" : "width", B = x[O], ie = B + E[ce], pe = B - E[M], Se = w ? -K[V] / 2 : 0, Q = R === Yo ? $[V] : K[V], H = R === Yo ? -K[V] : -$[V], Ae = t.elements.arrow, ge = w && Ae ? el(Ae) : { width: 0, height: 0 }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : zu(), me = ve[ce], q = ve[M], ue = Cr(0, $[V], ge[V]), Be = F ? $[V] / 2 - Se - ue - me - re.mainAxis : Q - ue - me - re.mainAxis, ft = F ? -$[V] / 2 + Se + ue + q + re.mainAxis : H + ue + q + re.mainAxis, He = t.elements.arrow && Fr(t.elements.arrow), rt = He ? O === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, ht = (fe = W?.[O]) != null ? fe : 0, kt = B + Be - ht - rt, gt = B + ft - ht, ut = Cr(w ? gs(ie, kt) : ie, B, w ? Co(pe, gt) : pe);
      x[O] = ut, ae[O] = ut - B;
    }
    if (i) {
      var _t, Je = O === "x" ? Wt : Ut, Mt = O === "x" ? on : rn, st = x[A], nt = A === "y" ? "height" : "width", Gt = st + E[Je], Pt = st - E[Mt], G = [Wt, Ut].indexOf(k) !== -1, we = (_t = W?.[A]) != null ? _t : 0, Ce = G ? Gt : st - $[nt] - K[nt] - we + re.altAxis, Nt = G ? st + $[nt] + K[nt] - we - re.altAxis : Pt, Me = w && G ? pb(Ce, st, Nt) : Cr(w ? Ce : Gt, st, w ? Nt : Pt);
      x[A] = Me, ae[A] = Me - st;
    }
    t.modifiersData[o] = ae;
  }
}
var jb = { name: "preventOverflow", enabled: !0, phase: "main", fn: Fb, requiresIfExists: ["offset"] };
function Vb(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Hb(e) {
  return e === Qt(e) || !nn(e) ? nl(e) : Vb(e);
}
function Wb(e) {
  var t = e.getBoundingClientRect(), n = Xo(t.width) / e.offsetWidth || 1, o = Xo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Ub(e, t, n) {
  n === void 0 && (n = !1);
  var o = nn(t), r = nn(t) && Wb(t), l = mo(t), s = Qo(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (o || !o && !n) && ((Dn(t) !== "body" || rl(l)) && (i = Hb(t)), nn(t) ? (c = Qo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : l && (c.x = ol(l))), { x: s.left + i.scrollLeft - c.x, y: s.top + i.scrollTop - c.y, width: s.width, height: s.height };
}
function Gb(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function r(l) {
    n.add(l.name);
    var s = [].concat(l.requires || [], l.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var c = t.get(i);
        c && r(c);
      }
    }), o.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || r(l);
  }), o;
}
function Kb(e) {
  var t = Gb(e);
  return ib.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function qb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Zb(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ec = { placement: "bottom", modifiers: [], strategy: "absolute" };
function tc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function sl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? ec : r;
  return function(s, i, c) {
    c === void 0 && (c = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ec, l), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, g = { state: u, setOptions: function(b) {
      var E = typeof b == "function" ? b(u.options) : b;
      h(), u.options = Object.assign({}, l, u.options, E), u.scrollParents = { reference: Io(s) ? Er(s) : s.contextElement ? Er(s.contextElement) : [], popper: Er(i) };
      var k = Kb(Zb([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = k.filter(function(R) {
        return R.enabled;
      }), w(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, E = b.reference, k = b.popper;
        if (tc(E, k)) {
          u.rects = { reference: Ub(E, Fr(k), u.options.strategy === "fixed"), popper: el(k) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(K) {
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
    }, update: qb(function() {
      return new Promise(function(b) {
        g.forceUpdate(), b(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!tc(s, i)) return g;
    g.setOptions(c).then(function(b) {
      !m && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function w() {
      u.orderedModifiers.forEach(function(b) {
        var E = b.name, k = b.options, R = k === void 0 ? {} : k, F = b.effect;
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
var Yb = [Vu, Uu, ju, Pu];
sl({ defaultModifiers: Yb });
var Xb = [Vu, Uu, ju, Pu, Db, $b, jb, vb, Mb], Qb = sl({ defaultModifiers: Xb });
const Jb = ["fixed", "absolute"], e1 = ze({
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
    values: Jb,
    default: "absolute"
  }
}), Gu = ze({
  ...e1,
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
}), t1 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, n1 = (e, t) => {
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
}, o1 = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...s1(e), ...t]
  };
  return a1(l, r?.modifiers), l;
}, r1 = (e) => {
  if (qe)
    return qn(e);
};
function s1(e) {
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
function a1(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const l1 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = i1(c);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = C(() => {
    const { onFirstUpdate: c, placement: u, strategy: d, modifiers: m } = a(n);
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
  }), l = uo(), s = P({
    styles: {
      popper: {
        position: a(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    l.value && (l.value.destroy(), l.value = void 0);
  };
  return de(r, (c) => {
    const u = a(l);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), de([e, t], ([c, u]) => {
    i(), !(!c || !u) && (l.value = Qb(c, u, a(r)));
  }), wn(() => {
    i();
  }), {
    state: C(() => {
      var c;
      return { ...((c = a(l)) == null ? void 0 : c.state) || {} };
    }),
    styles: C(() => a(s).styles),
    attributes: C(() => a(s).attributes),
    update: () => {
      var c;
      return (c = a(l)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = a(l)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: C(() => a(l))
  };
};
function i1(e) {
  const t = Object.keys(e.elements), n = us(t.map((r) => [r, e.styles[r] || {}])), o = us(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const c1 = 0, u1 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = Re(Za, void 0), l = P(), s = P(), i = C(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = C(() => {
    var k;
    const R = a(l), F = (k = a(s)) != null ? k : c1;
    return {
      name: "arrow",
      enabled: !eu(R),
      options: {
        element: R,
        padding: F
      }
    };
  }), u = C(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...o1(e, [
      a(c),
      a(i)
    ])
  })), d = C(() => r1(e.referenceEl) || a(o)), { attributes: m, state: g, styles: w, update: h, forceUpdate: b, instanceRef: E } = l1(d, n, u);
  return de(E, (k) => t.value = k), tt(() => {
    de(() => {
      var k;
      return (k = a(d)) == null ? void 0 : k.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: m,
    arrowRef: l,
    contentRef: n,
    instanceRef: E,
    state: g,
    styles: w,
    role: r,
    forceUpdate: b,
    update: h
  };
}, d1 = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ja(), l = Xe("popper"), s = C(() => a(t).popper), i = P($e(e.zIndex) ? e.zIndex : r()), c = C(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = C(() => [
    { zIndex: a(i) },
    a(n).popper,
    e.popperStyle || {}
  ]), d = C(() => o.value === "dialog" ? "false" : void 0), m = C(() => a(n).arrow || {});
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
}, f1 = oe({
  name: "ElPopperContent"
}), p1 = /* @__PURE__ */ oe({
  ...f1,
  props: Gu,
  emits: t1,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: l,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = n1(o, n), { attributes: m, arrowRef: g, contentRef: w, styles: h, instanceRef: b, role: E, update: k } = u1(o), {
      ariaModal: R,
      arrowStyle: F,
      contentAttrs: O,
      contentClass: A,
      contentStyle: x,
      updateZIndex: $
    } = d1(o, {
      styles: h,
      attributes: m,
      role: E
    }), K = Re(hs, void 0), Z = P();
    bn(Au, {
      arrowStyle: F,
      arrowRef: g,
      arrowOffset: Z
    }), K && bn(hs, {
      ...K,
      addInputId: fo,
      removeInputId: fo
    });
    let re;
    const W = (fe = !0) => {
      k(), fe && $();
    }, ae = () => {
      W(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return tt(() => {
      de(() => o.triggerTargetEl, (fe, ce) => {
        re?.(), re = void 0;
        const M = a(fe || w.value), V = a(ce || w.value);
        gn(M) && (re = de([E, () => o.ariaLabel, R, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ie, pe) => {
            Yn(B[pe]) ? M.removeAttribute(ie) : M.setAttribute(ie, B[pe]);
          });
        }, { immediate: !0 })), V !== M && gn(V) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          V.removeAttribute(B);
        });
      }, { immediate: !0 }), de(() => o.visible, ae, { immediate: !0 });
    }), wn(() => {
      re?.(), re = void 0;
    }), t({
      popperContentRef: w,
      popperInstanceRef: b,
      updatePopper: W,
      contentStyle: x
    }), (fe, ce) => (S(), N("div", Eo({
      ref_key: "contentRef",
      ref: w
    }, a(O), {
      style: a(x),
      class: a(A),
      tabindex: "-1",
      onMouseenter: (M) => fe.$emit("mouseenter", M),
      onMouseleave: (M) => fe.$emit("mouseleave", M)
    }), [
      _(a(Ru), {
        trapped: a(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": a(w),
        "focus-start-el": a(r),
        onFocusAfterTrapped: a(i),
        onFocusAfterReleased: a(s),
        onFocusin: a(c),
        onFocusoutPrevented: a(u),
        onReleaseRequested: a(d)
      }, {
        default: X(() => [
          le(fe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var m1 = /* @__PURE__ */ je(p1, [["__file", "content.vue"]]);
const h1 = an(x0), al = Symbol("elTooltip");
function nc() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Dr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const g1 = ze({
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
}), v1 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: l } = nc(), {
    registerTimeout: s,
    cancelTimeout: i
  } = nc();
  return {
    onOpen: (d) => {
      l(() => {
        o(d);
        const m = a(n);
        $e(m) && m > 0 && s(() => {
          r(d);
        }, m);
      }, a(e));
    },
    onClose: (d) => {
      i(), l(() => {
        r(d);
      }, a(t));
    }
  };
}, ll = ze({
  ...g1,
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
  ...Po(["ariaLabel"])
}), Ku = ze({
  ...xu,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [Rn.enter, Rn.numpadEnter, Rn.space]
  }
}), b1 = Ls({
  type: he(Boolean),
  default: null
}), y1 = Ls({
  type: he(Function)
}), w1 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: b1,
    [n]: y1
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
      const g = xt(), { emit: w } = g, h = g.props, b = C(() => Ke(h[n])), E = C(() => h[e] === null), k = ($) => {
        s.value !== !0 && (s.value = !0, i && (i.value = $), Ke(d) && d($));
      }, R = ($) => {
        s.value !== !1 && (s.value = !1, i && (i.value = $), Ke(m) && m($));
      }, F = ($) => {
        if (h.disabled === !0 || Ke(u) && !u())
          return;
        const K = b.value && qe;
        K && w(t, !0), (E.value || !K) && k($);
      }, O = ($) => {
        if (h.disabled === !0 || !qe)
          return;
        const K = b.value && qe;
        K && w(t, !1), (E.value || !K) && R($);
      }, A = ($) => {
        Xn($) && (h.disabled && $ ? b.value && w(t, !1) : s.value !== $ && ($ ? k() : R()));
      }, x = () => {
        s.value ? O() : F();
      };
      return de(() => h[e], A), c && g.appContext.config.globalProperties.$route !== void 0 && de(() => ({
        ...g.proxy.$route
      }), () => {
        c.value && s.value && O();
      }), tt(() => {
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
  useModelToggleProps: k1,
  useModelToggleEmits: _1,
  useModelToggle: S1
} = w1("visible"), T1 = ze({
  ...Cu,
  ...k1,
  ...ll,
  ...Ku,
  ...Eu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), A1 = [
  ..._1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], C1 = (e, t) => On(e) ? e.includes(t) : e === t, Vo = (e, t, n) => (o) => {
  C1(a(e), t) && n(o);
}, Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e?.(r);
  if (n === !1 || !l)
    return t?.(r);
}, E1 = oe({
  name: "ElTooltipTrigger"
}), x1 = /* @__PURE__ */ oe({
  ...E1,
  props: Ku,
  setup(e, { expose: t }) {
    const n = e, o = Xe("tooltip"), { controlled: r, id: l, open: s, onOpen: i, onClose: c, onToggle: u } = Re(al, void 0), d = P(null), m = () => {
      if (a(r) || n.disabled)
        return !0;
    }, g = Kn(n, "trigger"), w = Gn(m, Vo(g, "hover", i)), h = Gn(m, Vo(g, "hover", c)), b = Gn(m, Vo(g, "click", (O) => {
      O.button === 0 && u(O);
    })), E = Gn(m, Vo(g, "focus", i)), k = Gn(m, Vo(g, "focus", c)), R = Gn(m, Vo(g, "contextmenu", (O) => {
      O.preventDefault(), u(O);
    })), F = Gn(m, (O) => {
      const { code: A } = O;
      n.triggerKeys.includes(A) && (O.preventDefault(), u(O));
    });
    return t({
      triggerRef: d
    }), (O, A) => (S(), ee(a(z0), {
      id: a(l),
      "virtual-ref": O.virtualRef,
      open: a(s),
      "virtual-triggering": O.virtualTriggering,
      class: D(a(o).e("trigger")),
      onBlur: a(k),
      onClick: a(b),
      onContextmenu: a(R),
      onFocus: a(E),
      onMouseenter: a(w),
      onMouseleave: a(h),
      onKeydown: a(F)
    }, {
      default: X(() => [
        le(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var L1 = /* @__PURE__ */ je(x1, [["__file", "trigger.vue"]]);
const I1 = ze({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), O1 = /* @__PURE__ */ oe({
  __name: "teleport",
  props: I1,
  setup(e) {
    return (t, n) => t.disabled ? le(t.$slots, "default", { key: 0 }) : (S(), ee(df, {
      key: 1,
      to: t.to
    }, [
      le(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var $1 = /* @__PURE__ */ je(O1, [["__file", "teleport.vue"]]);
const qu = an($1), Zu = () => {
  const e = $a(), t = ku(), n = C(() => `${e.value}-popper-container-${t.prefix}`), o = C(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, R1 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, M1 = () => {
  const { id: e, selector: t } = Zu();
  return ff(() => {
    qe && (document.body.querySelector(t.value) || R1(e.value));
  }), {
    id: e,
    selector: t
  };
}, P1 = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), N1 = /* @__PURE__ */ oe({
  ...P1,
  props: ll,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Zu(), r = Xe("tooltip"), l = P();
    let s;
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
      onBeforeHide: E
    } = Re(al, void 0), k = C(() => n.transition || `${r.namespace.value}-fade-in-linear`), R = C(() => n.persistent);
    wn(() => {
      s?.();
    });
    const F = C(() => a(R) ? !0 : a(u)), O = C(() => n.disabled ? !1 : a(u)), A = C(() => n.appendTo || o.value), x = C(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), $ = P(!0), K = () => {
      h(), V() && Un(document.body), $.value = !0;
    }, Z = () => {
      if (a(i))
        return !0;
    }, re = Gn(Z, () => {
      n.enterable && a(d) === "hover" && g();
    }), W = Gn(Z, () => {
      a(d) === "hover" && m();
    }), ae = () => {
      var B, ie;
      (ie = (B = l.value) == null ? void 0 : B.updatePopper) == null || ie.call(B), b?.();
    }, fe = () => {
      E?.();
    }, ce = () => {
      w(), s = Hg(C(() => {
        var B;
        return (B = l.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (a(i))
          return;
        a(d) !== "hover" && m();
      });
    }, M = () => {
      n.virtualTriggering || m();
    }, V = (B) => {
      var ie;
      const pe = (ie = l.value) == null ? void 0 : ie.popperContentRef, Se = B?.relatedTarget || document.activeElement;
      return pe?.contains(Se);
    };
    return de(() => a(u), (B) => {
      B ? $.value = !1 : s?.();
    }, {
      flush: "post"
    }), de(() => n.content, () => {
      var B, ie;
      (ie = (B = l.value) == null ? void 0 : B.updatePopper) == null || ie.call(B);
    }), t({
      contentRef: l,
      isFocusInsideContent: V
    }), (B, ie) => (S(), ee(a(qu), {
      disabled: !B.teleported,
      to: a(A)
    }, {
      default: X(() => [
        _($o, {
          name: a(k),
          onAfterLeave: K,
          onBeforeEnter: ae,
          onAfterEnter: ce,
          onBeforeLeave: fe
        }, {
          default: X(() => [
            a(F) ? it((S(), ee(a(m1), Eo({
              key: 0,
              id: a(c),
              ref_key: "contentRef",
              ref: l
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
              "popper-style": [B.popperStyle, a(x)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: a(O),
              "z-index": B.zIndex,
              onMouseenter: a(re),
              onMouseleave: a(W),
              onBlur: M,
              onClose: a(m)
            }), {
              default: X(() => [
                le(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Pn, a(O)]
            ]) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var D1 = /* @__PURE__ */ je(N1, [["__file", "content.vue"]]);
const z1 = oe({
  name: "ElTooltip"
}), B1 = /* @__PURE__ */ oe({
  ...z1,
  props: T1,
  emits: A1,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    M1();
    const r = Zo(), l = P(), s = P(), i = () => {
      var k;
      const R = a(l);
      R && ((k = R.popperInstanceRef) == null || k.update());
    }, c = P(!1), u = P(), { show: d, hide: m, hasUpdateHandler: g } = S1({
      indicator: c,
      toggleReason: u
    }), { onOpen: w, onClose: h } = v1({
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
      onOpen: (k) => {
        w(k);
      },
      onClose: (k) => {
        h(k);
      },
      onToggle: (k) => {
        a(c) ? h(k) : w(k);
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
    }), de(() => o.disabled, (k) => {
      k && c.value && (c.value = !1);
    });
    const E = (k) => {
      var R;
      return (R = s.value) == null ? void 0 : R.isFocusInsideContent(k);
    };
    return pf(() => c.value && m()), t({
      popperRef: l,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: w,
      onClose: h,
      hide: m
    }), (k, R) => (S(), ee(a(h1), {
      ref_key: "popperRef",
      ref: l,
      role: k.role
    }, {
      default: X(() => [
        _(L1, {
          disabled: k.disabled,
          trigger: k.trigger,
          "trigger-keys": k.triggerKeys,
          "virtual-ref": k.virtualRef,
          "virtual-triggering": k.virtualTriggering
        }, {
          default: X(() => [
            k.$slots.default ? le(k.$slots, "default", { key: 0 }) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        _(D1, {
          ref_key: "contentRef",
          ref: s,
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
          default: X(() => [
            le(k.$slots, "content", {}, () => [
              k.rawContent ? (S(), N("span", {
                key: 0,
                innerHTML: k.content
              }, null, 8, ["innerHTML"])) : (S(), N("span", { key: 1 }, L(k.content), 1))
            ]),
            k.showArrow ? (S(), ee(a(O0), {
              key: 0,
              "arrow-offset": k.arrowOffset
            }, null, 8, ["arrow-offset"])) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var F1 = /* @__PURE__ */ je(B1, [["__file", "tooltip.vue"]]);
const j1 = an(F1), V1 = ze({
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
}), H1 = oe({
  name: "ElBadge"
}), W1 = /* @__PURE__ */ oe({
  ...H1,
  props: V1,
  setup(e, { expose: t }) {
    const n = e, o = Xe("badge"), r = C(() => n.isDot ? "" : $e(n.value) && $e(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = C(() => {
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
    }), (s, i) => (S(), N("div", {
      class: D(a(o).b())
    }, [
      le(s.$slots, "default"),
      _($o, {
        name: `${a(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: X(() => [
          it(f("sup", {
            class: D([
              a(o).e("content"),
              a(o).em("content", s.type),
              a(o).is("fixed", !!s.$slots.default),
              a(o).is("dot", s.isDot),
              a(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: dt(a(l))
          }, [
            le(s.$slots, "content", { value: a(r) }, () => [
              mt(L(a(r)), 1)
            ])
          ], 6), [
            [Pn, !s.hidden && (a(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var U1 = /* @__PURE__ */ je(W1, [["__file", "badge.vue"]]);
const G1 = an(U1), K1 = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, s) => {
  de(() => a(s), (i) => {
  }, {
    immediate: !0
  });
};
var os = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(os || {});
const q1 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), va = ze({
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
}), Z1 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Y1 = oe({
  name: "ElTag"
}), X1 = /* @__PURE__ */ oe({
  ...Y1,
  props: va,
  emits: Z1,
  setup(e, { emit: t }) {
    const n = e, o = zr(), r = Xe("tag"), l = C(() => {
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
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, c = (u) => {
      var d, m, g;
      (g = (m = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : m.component) != null && g.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (S(), N("span", {
      key: 0,
      class: D(a(l)),
      style: dt({ backgroundColor: u.color }),
      onClick: i
    }, [
      f("span", {
        class: D(a(r).e("content"))
      }, [
        le(u.$slots, "default")
      ], 2),
      u.closable ? (S(), ee(a(ot), {
        key: 0,
        class: D(a(r).e("close")),
        onClick: Ue(s, ["stop"])
      }, {
        default: X(() => [
          _(a(ps))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : U("v-if", !0)
    ], 6)) : (S(), ee($o, {
      key: 1,
      name: `${a(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: c
    }, {
      default: X(() => [
        f("span", {
          class: D(a(l)),
          style: dt({ backgroundColor: u.color }),
          onClick: i
        }, [
          f("span", {
            class: D(a(r).e("content"))
          }, [
            le(u.$slots, "default")
          ], 2),
          u.closable ? (S(), ee(a(ot), {
            key: 0,
            class: D(a(r).e("close")),
            onClick: Ue(s, ["stop"])
          }, {
            default: X(() => [
              _(a(ps))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Q1 = /* @__PURE__ */ je(X1, [["__file", "tag.vue"]]);
const J1 = an(Q1), ao = /* @__PURE__ */ new Map();
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
function oc(e, t) {
  let n = [];
  return On(t.arg) ? n = t.arg : gn(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, s = o.target, i = r?.target, c = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), m = e === s, g = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), w = l && (l.contains(s) || l.contains(i));
    c || u || d || m || g || w || t.value(o, r);
  };
}
const ey = {
  beforeMount(e, t) {
    ao.has(e) || ao.set(e, []), ao.get(e).push({
      documentHandler: oc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ao.has(e) || ao.set(e, []);
    const n = ao.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: oc(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ao.delete(e);
  }
}, ty = ze({
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
  ...cu
}), un = {};
oe({
  name: "ElConfigProvider",
  props: ty,
  setup(e, { slots: t }) {
    de(() => e.message, (o) => {
      Object.assign(un, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = du(e);
    return () => le(t, "default", { config: n?.value });
  }
});
const ny = 100, oy = 600, rc = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = ny, delay: r = oy } = Ke(n) ? {} : n;
    let l, s;
    const i = () => Ke(n) ? n() : n.handler(), c = () => {
      s && (clearTimeout(s), s = void 0), l && (clearInterval(l), l = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (c(), i(), document.addEventListener("mouseup", () => c(), {
        once: !0
      }), s = setTimeout(() => {
        l = setInterval(() => {
          i();
        }, o);
      }, r));
    });
  }
}, Yu = (e) => {
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
}, ry = ze({
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
}), sy = {
  click: (e) => e instanceof MouseEvent
}, ay = "overlay";
var ly = oe({
  name: "ElOverlay",
  props: ry,
  emits: sy,
  setup(e, { slots: t, emit: n }) {
    const o = Xe(ay), r = (c) => {
      n("click", c);
    }, { onClick: l, onMousedown: s, onMouseup: i } = Yu(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? _("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: s,
      onMouseup: i
    }, [le(t, "default")], os.STYLE | os.CLASS | os.PROPS, ["onClick", "onMouseup", "onMousedown"]) : mf("div", {
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
const iy = ly, Xu = Symbol("dialogInjectionKey"), Qu = ze({
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
}), cy = {
  close: () => !0
}, uy = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const l = (u) => {
    const d = u.clientX, m = u.clientY, { offsetX: g, offsetY: w } = r, h = e.value.getBoundingClientRect(), b = h.left, E = h.top, k = h.width, R = h.height, F = document.documentElement.clientWidth, O = document.documentElement.clientHeight, A = -b + g, x = -E + w, $ = F - b - k + g, K = O - E - R + w, Z = (W) => {
      let ae = g + W.clientX - d, fe = w + W.clientY - m;
      o?.value || (ae = Math.min(Math.max(ae, A), $), fe = Math.min(Math.max(fe, x), K)), r = {
        offsetX: ae,
        offsetY: fe
      }, e.value && (e.value.style.transform = `translate(${eo(ae)}, ${eo(fe)})`);
    }, re = () => {
      document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", re);
    };
    document.addEventListener("mousemove", Z), document.addEventListener("mouseup", re);
  }, s = () => {
    t.value && e.value && t.value.addEventListener("mousedown", l);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", l);
  }, c = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return tt(() => {
    Ea(() => {
      n.value ? s() : i();
    });
  }), wn(() => {
    i();
  }), {
    resetPosition: c
  };
}, dy = (...e) => (t) => {
  e.forEach((n) => {
    Ke(n) ? n(t) : n.value = t;
  });
}, fy = oe({ name: "ElDialogContent" }), py = /* @__PURE__ */ oe({
  ...fy,
  props: Qu,
  emits: cy,
  setup(e, { expose: t }) {
    const n = e, { t: o } = xs(), { Close: r } = vu, { dialogRef: l, headerRef: s, bodyId: i, ns: c, style: u } = Re(Xu), { focusTrapRef: d } = Re(Ou), m = C(() => [
      c.b(),
      c.is("fullscreen", n.fullscreen),
      c.is("draggable", n.draggable),
      c.is("align-center", n.alignCenter),
      { [c.m("center")]: n.center }
    ]), g = dy(d, l), w = C(() => n.draggable), h = C(() => n.overflow), { resetPosition: b } = uy(l, s, w, h);
    return t({
      resetPosition: b
    }), (E, k) => (S(), N("div", {
      ref: a(g),
      class: D(a(m)),
      style: dt(a(u)),
      tabindex: "-1"
    }, [
      f("header", {
        ref_key: "headerRef",
        ref: s,
        class: D([a(c).e("header"), E.headerClass, { "show-close": E.showClose }])
      }, [
        le(E.$slots, "header", {}, () => [
          f("span", {
            role: "heading",
            "aria-level": E.ariaLevel,
            class: D(a(c).e("title"))
          }, L(E.title), 11, ["aria-level"])
        ]),
        E.showClose ? (S(), N("button", {
          key: 0,
          "aria-label": a(o)("el.dialog.close"),
          class: D(a(c).e("headerbtn")),
          type: "button",
          onClick: (R) => E.$emit("close")
        }, [
          _(a(ot), {
            class: D(a(c).e("close"))
          }, {
            default: X(() => [
              (S(), ee(wt(E.closeIcon || a(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : U("v-if", !0)
      ], 2),
      f("div", {
        id: a(i),
        class: D([a(c).e("body"), E.bodyClass])
      }, [
        le(E.$slots, "default")
      ], 10, ["id"]),
      E.$slots.footer ? (S(), N("footer", {
        key: 0,
        class: D([a(c).e("footer"), E.footerClass])
      }, [
        le(E.$slots, "footer")
      ], 2)) : U("v-if", !0)
    ], 6));
  }
});
var my = /* @__PURE__ */ je(py, [["__file", "dialog-content.vue"]]);
const hy = ze({
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
}), gy = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [lt]: (e) => Xn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, vy = (e, t = {}) => {
  tn(e) || Es("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || Xe("popup"), o = C(() => n.bm("parent", "hidden"));
  if (!qe || Mi(document.body, o.value))
    return;
  let r = 0, l = !1, s = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || l && document && (document.body.style.width = s, mv(document.body, o.value));
    }, 200);
  };
  de(e, (c) => {
    if (!c) {
      i();
      return;
    }
    l = !Mi(document.body, o.value), l && (s = document.body.style.width, pv(document.body, o.value)), r = gv(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = hv(document.body, "overflowY");
    r > 0 && (u || d === "scroll") && l && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Rc(() => i());
}, by = (e, t) => {
  var n;
  const r = xt().emit, { nextZIndex: l } = ja();
  let s = "";
  const i = Zo(), c = Zo(), u = P(!1), d = P(!1), m = P(!1), g = P((n = e.zIndex) != null ? n : l());
  let w, h;
  const b = Ha("namespace", Sr), E = C(() => {
    const M = {}, V = `--${b.value}-dialog`;
    return e.fullscreen || (e.top && (M[`${V}-margin-top`] = e.top), e.width && (M[`${V}-width`] = eo(e.width))), M;
  }), k = C(() => e.alignCenter ? { display: "flex" } : {});
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
    h?.(), w?.(), e.openDelay && e.openDelay > 0 ? { stop: w } = ds(() => Z(), e.openDelay) : Z();
  }
  function x() {
    w?.(), h?.(), e.closeDelay && e.closeDelay > 0 ? { stop: h } = ds(() => re(), e.closeDelay) : re();
  }
  function $() {
    function M(V) {
      V || (d.value = !0, u.value = !1);
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
  function W() {
    r("openAutoFocus");
  }
  function ae() {
    r("closeAutoFocus");
  }
  function fe(M) {
    var V;
    ((V = M.detail) == null ? void 0 : V.focusReason) === "pointer" && M.preventDefault();
  }
  e.lockScroll && vy(u);
  function ce() {
    e.closeOnPressEscape && $();
  }
  return de(() => e.modelValue, (M) => {
    M ? (d.value = !1, A(), m.value = !0, g.value = eu(e.zIndex) ? l() : g.value++, Ge(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && x();
  }), de(() => e.fullscreen, (M) => {
    t.value && (M ? (s = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = s);
  }), tt(() => {
    e.modelValue && (u.value = !0, m.value = !0, A());
  }), {
    afterEnter: R,
    afterLeave: F,
    beforeLeave: O,
    handleClose: $,
    onModalClick: K,
    close: x,
    doClose: re,
    onOpenAutoFocus: W,
    onCloseAutoFocus: ae,
    onCloseRequested: ce,
    onFocusoutPrevented: fe,
    titleId: i,
    bodyId: c,
    closed: d,
    style: E,
    overlayDialogStyle: k,
    rendered: m,
    visible: u,
    zIndex: g
  };
}, yy = oe({
  name: "ElDialog",
  inheritAttrs: !1
}), wy = /* @__PURE__ */ oe({
  ...yy,
  props: hy,
  emits: gy,
  setup(e, { expose: t }) {
    const n = e, o = Mc();
    K1({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, C(() => !!o.title));
    const r = Xe("dialog"), l = P(), s = P(), i = P(), {
      visible: c,
      titleId: u,
      bodyId: d,
      style: m,
      overlayDialogStyle: g,
      rendered: w,
      zIndex: h,
      afterEnter: b,
      afterLeave: E,
      beforeLeave: k,
      handleClose: R,
      onModalClick: F,
      onOpenAutoFocus: O,
      onCloseAutoFocus: A,
      onCloseRequested: x,
      onFocusoutPrevented: $
    } = by(n, l);
    bn(Xu, {
      dialogRef: l,
      headerRef: s,
      bodyId: d,
      ns: r,
      rendered: w,
      style: m
    });
    const K = Yu(F), Z = C(() => n.draggable && !n.fullscreen);
    return t({
      visible: c,
      dialogContentRef: i,
      resetPosition: () => {
        var W;
        (W = i.value) == null || W.resetPosition();
      }
    }), (W, ae) => (S(), ee(a(qu), {
      to: W.appendTo,
      disabled: W.appendTo !== "body" ? !1 : !W.appendToBody
    }, {
      default: X(() => [
        _($o, {
          name: "dialog-fade",
          onAfterEnter: a(b),
          onAfterLeave: a(E),
          onBeforeLeave: a(k),
          persisted: ""
        }, {
          default: X(() => [
            it(_(a(iy), {
              "custom-mask-event": "",
              mask: W.modal,
              "overlay-class": W.modalClass,
              "z-index": a(h)
            }, {
              default: X(() => [
                f("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": W.title || void 0,
                  "aria-labelledby": W.title ? void 0 : a(u),
                  "aria-describedby": a(d),
                  class: D(`${a(r).namespace.value}-overlay-dialog`),
                  style: dt(a(g)),
                  onClick: a(K).onClick,
                  onMousedown: a(K).onMousedown,
                  onMouseup: a(K).onMouseup
                }, [
                  _(a(Ru), {
                    loop: "",
                    trapped: a(c),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: a(O),
                    onFocusAfterReleased: a(A),
                    onFocusoutPrevented: a($),
                    onReleaseRequested: a(x)
                  }, {
                    default: X(() => [
                      a(w) ? (S(), ee(my, Eo({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, W.$attrs, {
                        center: W.center,
                        "align-center": W.alignCenter,
                        "close-icon": W.closeIcon,
                        draggable: a(Z),
                        overflow: W.overflow,
                        fullscreen: W.fullscreen,
                        "header-class": W.headerClass,
                        "body-class": W.bodyClass,
                        "footer-class": W.footerClass,
                        "show-close": W.showClose,
                        title: W.title,
                        "aria-level": W.headerAriaLevel,
                        onClose: a(R)
                      }), Ia({
                        header: X(() => [
                          W.$slots.title ? le(W.$slots, "title", { key: 1 }) : le(W.$slots, "header", {
                            key: 0,
                            close: a(R),
                            titleId: a(u),
                            titleClass: a(r).e("title")
                          })
                        ]),
                        default: X(() => [
                          le(W.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        W.$slots.footer ? {
                          name: "footer",
                          fn: X(() => [
                            le(W.$slots, "footer")
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
              [Pn, a(c)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var ky = /* @__PURE__ */ je(wy, [["__file", "dialog.vue"]]);
const _y = an(ky), Sy = ze({
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
}, Ay = oe({
  name: "ElInputNumber"
}), Cy = /* @__PURE__ */ oe({
  ...Ay,
  props: Sy,
  emits: Ty,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = xs(), l = Xe("input-number"), s = P(), i = xo({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: c } = Os(), u = C(() => $e(o.modelValue) && o.modelValue <= o.min), d = C(() => $e(o.modelValue) && o.modelValue >= o.max), m = C(() => {
      const M = k(o.step);
      return $n(o.precision) ? Math.max(k(o.modelValue), M) : (M > o.precision, o.precision);
    }), g = C(() => o.controls && o.controlsPosition === "right"), w = zr(), h = Ka(), b = C(() => {
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
    }), E = (M, V) => {
      if ($n(V) && (V = m.value), V === 0)
        return Math.round(M);
      let B = String(M);
      const ie = B.indexOf(".");
      if (ie === -1 || !B.replace(".", "").split("")[ie + V])
        return M;
      const Q = B.length;
      return B.charAt(Q - 1) === "5" && (B = `${B.slice(0, Math.max(0, Q - 1))}6`), Number.parseFloat(Number(B).toFixed(V));
    }, k = (M) => {
      if (Yn(M))
        return 0;
      const V = M.toString(), B = V.indexOf(".");
      let ie = 0;
      return B !== -1 && (ie = V.length - B - 1), ie;
    }, R = (M, V = 1) => $e(M) ? E(M + o.step * V) : i.currentValue, F = () => {
      if (o.readonly || h.value || d.value)
        return;
      const M = Number(b.value) || 0, V = R(M);
      x(V), n(Qn, i.currentValue), fe();
    }, O = () => {
      if (o.readonly || h.value || u.value)
        return;
      const M = Number(b.value) || 0, V = R(M, -1);
      x(V), n(Qn, i.currentValue), fe();
    }, A = (M, V) => {
      const { max: B, min: ie, step: pe, precision: Se, stepStrictly: Q, valueOnClear: H } = o;
      B < ie && Es("InputNumber", "min should not be greater than max.");
      let Ae = Number(M);
      if (Yn(M) || Number.isNaN(Ae))
        return null;
      if (M === "") {
        if (H === null)
          return null;
        Ae = Et(H) ? { min: ie, max: B }[H] : H;
      }
      return Q && (Ae = E(Math.round(Ae / pe) * pe, Se), Ae !== M && V && n(lt, Ae)), $n(Se) || (Ae = E(Ae, Se)), (Ae > B || Ae < ie) && (Ae = Ae > B ? B : ie, V && n(lt, Ae)), Ae;
    }, x = (M, V = !0) => {
      var B;
      const ie = i.currentValue, pe = A(M);
      if (!V) {
        n(lt, pe);
        return;
      }
      ie === pe && M || (i.userInput = null, n(lt, pe), ie !== pe && n(Jn, pe, ie), o.validateEvent && ((B = c?.validate) == null || B.call(c, "change").catch((Se) => void 0)), i.currentValue = pe);
    }, $ = (M) => {
      i.userInput = M;
      const V = M === "" ? null : Number(M);
      n(Qn, V), x(V, !1);
    }, K = (M) => {
      const V = M !== "" ? Number(M) : "";
      ($e(V) && !Number.isNaN(V) || M === "") && x(V), fe(), i.userInput = null;
    }, Z = () => {
      var M, V;
      (V = (M = s.value) == null ? void 0 : M.focus) == null || V.call(M);
    }, re = () => {
      var M, V;
      (V = (M = s.value) == null ? void 0 : M.blur) == null || V.call(M);
    }, W = (M) => {
      n("focus", M);
    }, ae = (M) => {
      var V, B;
      i.userInput = null, yu() && i.currentValue === null && ((V = s.value) != null && V.input) && (s.value.input.value = ""), n("blur", M), o.validateEvent && ((B = c?.validate) == null || B.call(c, "blur").catch((ie) => void 0));
    }, fe = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, ce = (M) => {
      document.activeElement === M.target && M.preventDefault();
    };
    return de(() => o.modelValue, (M, V) => {
      const B = A(M, !0);
      i.userInput === null && B !== V && (i.currentValue = B);
    }, { immediate: !0 }), tt(() => {
      var M;
      const { min: V, max: B, modelValue: ie } = o, pe = (M = s.value) == null ? void 0 : M.input;
      if (pe.setAttribute("role", "spinbutton"), Number.isFinite(B) ? pe.setAttribute("aria-valuemax", String(B)) : pe.removeAttribute("aria-valuemax"), Number.isFinite(V) ? pe.setAttribute("aria-valuemin", String(V)) : pe.removeAttribute("aria-valuemin"), pe.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), pe.setAttribute("aria-disabled", String(h.value)), !$e(ie) && ie != null) {
        let Se = Number(ie);
        Number.isNaN(Se) && (Se = null), n(lt, Se);
      }
      pe.addEventListener("wheel", ce, { passive: !1 });
    }), Pc(() => {
      var M, V;
      const B = (M = s.value) == null ? void 0 : M.input;
      B?.setAttribute("aria-valuenow", `${(V = i.currentValue) != null ? V : ""}`);
    }), t({
      focus: Z,
      blur: re
    }), (M, V) => (S(), N("div", {
      class: D([
        a(l).b(),
        a(l).m(a(w)),
        a(l).is("disabled", a(h)),
        a(l).is("without-controls", !M.controls),
        a(l).is("controls-right", a(g))
      ]),
      onDragstart: Ue(() => {
      }, ["prevent"])
    }, [
      M.controls ? it((S(), N("span", {
        key: 0,
        role: "button",
        "aria-label": a(r)("el.inputNumber.decrease"),
        class: D([a(l).e("decrease"), a(l).is("disabled", a(u))]),
        onKeydown: pn(O, ["enter"])
      }, [
        le(M.$slots, "decrease-icon", {}, () => [
          _(a(ot), null, {
            default: X(() => [
              a(g) ? (S(), ee(a(hu), { key: 0 })) : (S(), ee(a(Dv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [a(rc), O]
      ]) : U("v-if", !0),
      M.controls ? it((S(), N("span", {
        key: 1,
        role: "button",
        "aria-label": a(r)("el.inputNumber.increase"),
        class: D([a(l).e("increase"), a(l).is("disabled", a(d))]),
        onKeydown: pn(F, ["enter"])
      }, [
        le(M.$slots, "increase-icon", {}, () => [
          _(a(ot), null, {
            default: X(() => [
              a(g) ? (S(), ee(a(Tv), { key: 0 })) : (S(), ee(a(Bv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [a(rc), F]
      ]) : U("v-if", !0),
      _(a(c0), {
        id: M.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: M.step,
        "model-value": a(b),
        placeholder: M.placeholder,
        readonly: M.readonly,
        disabled: a(h),
        size: a(w),
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
        onFocus: W,
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
var Ey = /* @__PURE__ */ je(Cy, [["__file", "input-number.vue"]]);
const xy = an(Ey);
function Ly() {
  const e = uo(), t = P(0), n = 11, o = C(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return In(e, () => {
    var l, s;
    t.value = (s = (l = e.value) == null ? void 0 : l.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Ju = Symbol("ElSelectGroup"), Ps = Symbol("ElSelect");
function Iy(e, t) {
  const n = Re(Ps), o = Re(Ju, { disabled: !1 }), r = C(() => d(io(n.props.modelValue), e.value)), l = C(() => {
    var w;
    if (n.props.multiple) {
      const h = io((w = n.props.modelValue) != null ? w : []);
      return !r.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = C(() => e.label || (Xt(e.value) ? "" : e.value)), i = C(() => e.value || e.label || ""), c = C(() => e.disabled || t.groupDisabled || l.value), u = xt(), d = (w = [], h) => {
    if (Xt(e.value)) {
      const b = n.props.valueKey;
      return w && w.some((E) => hf(co(E, b)) === co(h, b));
    } else
      return w && w.includes(h);
  }, m = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (w) => {
    const h = new RegExp(q1(w), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return de(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), de(() => e.value, (w, h) => {
    const { remote: b, valueKey: E } = n.props;
    if ((b ? w !== h : !Ar(w, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (E && Xt(w) && Xt(h) && w[E] === h[E])
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
const Oy = oe({
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
    const t = Xe("select"), n = Zo(), o = C(() => [
      t.be("dropdown", "item"),
      t.is("disabled", a(i)),
      t.is("selected", a(s)),
      t.is("hovering", a(g))
    ]), r = xo({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: l,
      itemSelected: s,
      isDisabled: i,
      select: c,
      hoverItem: u,
      updateOption: d
    } = Iy(e, r), { visible: m, hover: g } = Oa(r), w = xt().proxy;
    c.onOptionCreate(w), wn(() => {
      const b = w.value, { selected: E } = c.states, k = E.some((R) => R.value === w.value);
      Ge(() => {
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
      currentLabel: l,
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
function $y(e, t, n, o, r, l) {
  return it((S(), N("li", {
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
var il = /* @__PURE__ */ je(Oy, [["render", $y], ["__file", "option.vue"]]);
const Ry = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Re(Ps), t = Xe("select"), n = C(() => e.props.popperClass), o = C(() => e.props.multiple), r = C(() => e.props.fitInputWidth), l = P("");
    function s() {
      var i;
      l.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return tt(() => {
      s(), In(e.selectRef, s);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function My(e, t, n, o, r, l) {
  return S(), N("div", {
    class: D([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: dt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (S(), N("div", {
      key: 0,
      class: D(e.ns.be("dropdown", "header"))
    }, [
      le(e.$slots, "header")
    ], 2)) : U("v-if", !0),
    le(e.$slots, "default"),
    e.$slots.footer ? (S(), N("div", {
      key: 1,
      class: D(e.ns.be("dropdown", "footer"))
    }, [
      le(e.$slots, "footer")
    ], 2)) : U("v-if", !0)
  ], 6);
}
var Py = /* @__PURE__ */ je(Ry, [["render", My], ["__file", "select-dropdown.vue"]]);
const Ny = (e, t) => {
  const { t: n } = xs(), o = Zo(), r = Xe("select"), l = Xe("input"), s = xo({
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
  }), i = P(null), c = P(null), u = P(null), d = P(null), m = P(null), g = P(null), w = P(null), h = P(null), b = P(null), E = P(null), k = P(null), {
    isComposing: R,
    handleCompositionStart: F,
    handleCompositionUpdate: O,
    handleCompositionEnd: A
  } = Tu({
    afterComposition: (I) => Me(I)
  }), { wrapperRef: x, isFocused: $, handleBlur: K } = Su(m, {
    beforeFocus() {
      return V.value;
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
  }), Z = P(!1), re = P(), { form: W, formItem: ae } = Os(), { inputId: fe } = Ga(e, {
    formItemContext: ae
  }), { valueOnClear: ce, isEmptyValue: M } = dv(e), V = C(() => e.disabled || W?.disabled), B = C(() => On(e.modelValue) ? e.modelValue.length > 0 : !M(e.modelValue)), ie = C(() => {
    var I;
    return (I = W?.statusIcon) != null ? I : !1;
  }), pe = C(() => e.clearable && !V.value && s.inputHovering && B.value), Se = C(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Q = C(() => r.is("reverse", Se.value && Z.value)), H = C(() => ae?.validateState || ""), Ae = C(() => bu[H.value]), ge = C(() => e.remote ? 300 : 0), ve = C(() => e.remote && !s.inputValue && s.options.size === 0), me = C(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && q.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), q = C(() => ue.value.filter((I) => I.visible).length), ue = C(() => {
    const I = Array.from(s.options.values()), Y = [];
    return s.optionValues.forEach((be) => {
      const We = I.findIndex((Ye) => Ye.value === be);
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
  }, rt = zr(), ht = C(() => ["small"].includes(rt.value) ? "small" : "default"), kt = C({
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
  }), _t = C(() => pa ? null : "mouseenter");
  de(() => e.modelValue, (I, Y) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", Je("")), st(), !Ar(I, Y) && e.validateEvent && ae?.validate("change").catch((be) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), de(() => Z.value, (I) => {
    I ? Je(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", I);
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
  const Je = (I) => {
    s.previousQuery === I || R.value || (s.previousQuery = I, e.filterable && Ke(e.filterMethod) ? e.filterMethod(I) : e.filterable && e.remote && Ke(e.remoteMethod) && e.remoteMethod(I), e.defaultFirstOption && (e.filterable || e.remote) && q.value ? Ge(Mt) : Ge(Gt));
  }, Mt = () => {
    const I = ue.value.filter((Ye) => Ye.visible && !Ye.disabled && !Ye.states.groupDisabled), Y = I.find((Ye) => Ye.created), be = I[0], We = ue.value.map((Ye) => Ye.value);
    s.hoveringIndex = Kt(We, Y || be);
  }, st = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const Y = On(e.modelValue) ? e.modelValue[0] : e.modelValue, be = nt(Y);
      s.selectedLabel = be.currentLabel, s.selected = [be];
      return;
    }
    const I = [];
    $n(e.modelValue) || io(e.modelValue).forEach((Y) => {
      I.push(nt(Y));
    }), s.selected = I;
  }, nt = (I) => {
    let Y;
    const be = zf(I);
    for (let Bt = s.cachedOptions.size - 1; Bt >= 0; Bt--) {
      const Lt = Be.value[Bt];
      if (be ? co(Lt.value, e.valueKey) === co(I, e.valueKey) : Lt.value === I) {
        Y = {
          value: I,
          currentLabel: Lt.currentLabel,
          get isDisabled() {
            return Lt.isDisabled;
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
    s.hoveringIndex = ue.value.findIndex((I) => s.selected.some((Y) => Ie(Y) === Ie(I)));
  }, Pt = () => {
    s.selectionWidth = c.value.getBoundingClientRect().width;
  }, G = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, we = () => {
    var I, Y;
    (Y = (I = u.value) == null ? void 0 : I.updatePopper) == null || Y.call(I);
  }, Ce = () => {
    var I, Y;
    (Y = (I = d.value) == null ? void 0 : I.updatePopper) == null || Y.call(I);
  }, Nt = () => {
    s.inputValue.length > 0 && !Z.value && (Z.value = !0), Je(s.inputValue);
  }, Me = (I) => {
    if (s.inputValue = I.target.value, e.remote)
      ln();
    else
      return Nt();
  }, ln = Ag(() => {
    Nt();
  }, ge.value), pt = (I) => {
    Ar(e.modelValue, I) || t(Jn, I);
  }, kn = (I) => Cg(I, (Y) => {
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
    if (be > -1 && !V.value) {
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
      We > -1 ? be.splice(We, 1) : (e.multipleLimit <= 0 || be.length < e.multipleLimit) && be.push(I.value), t(lt, be), pt(be), I.created && Je(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(lt, I.value), pt(I.value), Z.value = !1;
    Jt(), !Z.value && Ge(() => {
      qt(I);
    });
  }, Kt = (I = [], Y) => $n(Y) ? -1 : Xt(Y.value) ? I.findIndex((be) => Ar(co(be, e.valueKey), Ie(Y))) : I.indexOf(Y.value), qt = (I) => {
    var Y, be, We, Ye, Bt;
    const Lt = On(I) ? I[0] : I;
    let Tt = null;
    if (Lt?.value) {
      const Cn = ue.value.filter((It) => It.value === Lt.value);
      Cn.length > 0 && (Tt = Cn[0].$el);
    }
    if (u.value && Tt) {
      const Cn = (Ye = (We = (be = (Y = u.value) == null ? void 0 : Y.popperRef) == null ? void 0 : be.contentRef) == null ? void 0 : We.querySelector) == null ? void 0 : Ye.call(We, `.${r.be("dropdown", "wrap")}`);
      Cn && vv(Cn, Tt);
    }
    (Bt = k.value) == null || Bt.handleScroll();
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
      (I = k.value) == null || I.update(), qt(s.selected);
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
  }, Sn = (I) => {
    Dt(I);
  }, ro = (I) => {
    if (Z.value = !1, $.value) {
      const Y = new FocusEvent("focus", I);
      Ge(() => K(Y));
    }
  }, Tn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : Z.value = !1;
  }, yo = () => {
    V.value || (pa && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : Z.value = !Z.value);
  }, ar = () => {
    if (!Z.value)
      yo();
    else {
      const I = ue.value[s.hoveringIndex];
      I && !I.isDisabled && go(I);
    }
  }, Ie = (I) => Xt(I.value) ? co(I.value, e.valueKey) : I.value, An = C(() => ue.value.filter((I) => I.visible).every((I) => I.isDisabled)), Do = C(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), zo = C(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Fn = (I) => {
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
  }), jn = C(() => ({ maxWidth: `${s.selectionWidth}px` })), St = (I) => {
    t("popup-scroll", I);
  };
  return In(c, Pt), In(h, we), In(x, we), In(b, Ce), In(E, G), tt(() => {
    st();
  }), {
    inputId: fe,
    contentId: o,
    nsSelect: r,
    nsInput: l,
    states: s,
    isFocused: $,
    expanded: Z,
    optionsArray: ue,
    hoverOption: re,
    selectSize: rt,
    filteredOptionsCount: q,
    updateTooltip: we,
    updateTagTooltip: Ce,
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
    mouseEnterEventName: _t,
    needStatusIcon: ie,
    showClose: pe,
    iconComponent: Se,
    iconReverse: Q,
    validateState: H,
    validateIcon: Ae,
    showNewOption: ft,
    updateOptions: He,
    collapseTagSize: ht,
    setSelected: st,
    selectDisabled: V,
    emptyText: me,
    handleCompositionStart: F,
    handleCompositionUpdate: O,
    handleCompositionEnd: A,
    onOptionCreate: zt,
    onOptionDestroy: Zt,
    handleMenuEnter: bo,
    focus: Jt,
    blur: Bn,
    handleClearClick: Sn,
    handleClickOutside: ro,
    handleEsc: Tn,
    toggleMenu: yo,
    selectOption: ar,
    getValueKey: Ie,
    navigateOptions: Fn,
    dropdownMenuVisible: kt,
    showTagList: Do,
    collapseTagList: zo,
    popupScroll: St,
    tagStyle: ko,
    collapseTagStyle: jn,
    popperRef: vo,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: g,
    suffixRef: w,
    selectRef: i,
    wrapperRef: x,
    selectionRef: c,
    scrollbarRef: k,
    menuRef: h,
    tagMenuRef: b,
    collapseItemRef: E
  };
};
var Dy = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Re(Ps);
    let o = [];
    return () => {
      var r, l;
      const s = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function c(u) {
        On(u) && u.forEach((d) => {
          var m, g, w, h;
          const b = (m = d?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? c(!Et(d.children) && !On(d.children) && Ke((g = d.children) == null ? void 0 : g.default) ? (w = d.children) == null ? void 0 : w.default() : d.children) : b === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : On(d.children) && c(d.children);
        });
      }
      return s.length && c((l = s[0]) == null ? void 0 : l.children), Ar(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const zy = ze({
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
    default: hu
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
  ...cu,
  ...Po(["ariaLabel"])
}), sc = "ElSelect", By = oe({
  name: sc,
  componentName: sc,
  components: {
    ElSelectMenu: Py,
    ElOption: il,
    ElOptions: Dy,
    ElTag: J1,
    ElScrollbar: T0,
    ElTooltip: j1,
    ElIcon: ot
  },
  directives: { ClickOutside: ey },
  props: zy,
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
    }), r = Ny(o, t), { calculatorRef: l, inputStyle: s } = Ly();
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
      calculatorRef: l,
      inputStyle: s
    };
  }
});
function Fy(e, t, n, o, r, l) {
  const s = So("el-tag"), i = So("el-tooltip"), c = So("el-icon"), u = So("el-option"), d = So("el-options"), m = So("el-scrollbar"), g = So("el-select-menu"), w = gf("click-outside");
  return it((S(), N("div", {
    ref: "selectRef",
    class: D([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
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
            e.$slots.prefix ? (S(), N("div", {
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
                (S(!0), N(at, null, Ln(e.showTagList, (b) => (S(), N("div", {
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
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (S(), ee(i, {
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
                      (S(!0), N(at, null, Ln(e.collapseTagList, (b) => (S(), N("div", {
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
                e.filterable ? (S(), N("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: D(e.nsSelect.e("input-calculator")),
                  textContent: L(e.states.inputValue)
                }, null, 10, ["textContent"])) : U("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (S(), N("div", {
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
                ]) : (S(), N("span", { key: 1 }, L(e.currentPlaceholder), 1))
              ], 2)) : U("v-if", !0)
            ], 2),
            f("div", {
              ref: "suffixRef",
              class: D(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (S(), ee(c, {
                key: 0,
                class: D([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: X(() => [
                  (S(), ee(wt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              e.showClose && e.clearIcon ? (S(), ee(c, {
                key: 1,
                class: D([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: X(() => [
                  (S(), ee(wt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : U("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (S(), ee(c, {
                key: 2,
                class: D([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: X(() => [
                  (S(), ee(wt(e.validateIcon)))
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
            e.$slots.header ? (S(), N("div", {
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
                e.showNewOption ? (S(), ee(u, {
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
            e.$slots.loading && e.loading ? (S(), N("div", {
              key: 1,
              class: D(e.nsSelect.be("dropdown", "loading"))
            }, [
              le(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (S(), N("div", {
              key: 2,
              class: D(e.nsSelect.be("dropdown", "empty"))
            }, [
              le(e.$slots, "empty", {}, () => [
                f("span", null, L(e.emptyText), 1)
              ])
            ], 2)) : U("v-if", !0),
            e.$slots.footer ? (S(), N("div", {
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
    [w, e.handleClickOutside, e.popperRef]
  ]);
}
var jy = /* @__PURE__ */ je(By, [["render", Fy], ["__file", "select.vue"]]);
const Vy = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Xe("select"), n = P(null), o = xt(), r = P([]);
    bn(Ju, xo({
      ...Oa(e)
    }));
    const l = C(() => r.value.some((u) => u.visible === !0)), s = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = io(u), m = [];
      return d.forEach((g) => {
        var w, h;
        s(g) ? m.push(g.component.proxy) : (w = g.children) != null && w.length ? m.push(...i(g.children)) : (h = g.component) != null && h.subTree && m.push(...i(g.component.subTree));
      }), m;
    }, c = () => {
      r.value = i(o.subTree);
    };
    return tt(() => {
      c();
    }), Yg(n, c, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: l,
      ns: t
    };
  }
});
function Hy(e, t, n, o, r, l) {
  return it((S(), N("ul", {
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
var ed = /* @__PURE__ */ je(Vy, [["render", Hy], ["__file", "option-group.vue"]]);
const td = an(jy, {
  Option: il,
  OptionGroup: ed
}), nd = mu(il);
mu(ed);
const Wy = (e) => ["", ...Va].includes(e), Uy = ze({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Wy
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
}), Gy = {
  [lt]: (e) => Xn(e) || Et(e) || $e(e),
  [Jn]: (e) => Xn(e) || Et(e) || $e(e),
  [Qn]: (e) => Xn(e) || Et(e) || $e(e)
}, od = "ElSwitch", Ky = oe({
  name: od
}), qy = /* @__PURE__ */ oe({
  ...Ky,
  props: Uy,
  emits: Gy,
  setup(e, { expose: t, emit: n }) {
    const o = e, { formItem: r } = Os(), l = zr(), s = Xe("switch"), { inputId: i } = Ga(o, {
      formItemContext: r
    }), c = Ka(C(() => o.loading)), u = P(o.modelValue !== !1), d = P(), m = P(), g = C(() => [
      s.b(),
      s.m(l.value),
      s.is("disabled", c.value),
      s.is("checked", k.value)
    ]), w = C(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !k.value)
    ]), h = C(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", k.value)
    ]), b = C(() => ({
      width: eo(o.width)
    }));
    de(() => o.modelValue, () => {
      u.value = !0;
    });
    const E = C(() => u.value ? o.modelValue : !1), k = C(() => E.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(E.value) || (n(lt, o.inactiveValue), n(Jn, o.inactiveValue), n(Qn, o.inactiveValue)), de(k, (A) => {
      var x;
      d.value.checked = A, o.validateEvent && ((x = r?.validate) == null || x.call(r, "change").catch(($) => void 0));
    });
    const R = () => {
      const A = k.value ? o.inactiveValue : o.activeValue;
      n(lt, A), n(Jn, A), n(Qn, A), Ge(() => {
        d.value.checked = k.value;
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
        Kl(x),
        Xn(x)
      ].includes(!0) || Es(od, "beforeChange must return type `Promise<boolean>` or `boolean`"), Kl(x) ? x.then((K) => {
        K && R();
      }).catch((K) => {
      }) : x && R();
    }, O = () => {
      var A, x;
      (x = (A = d.value) == null ? void 0 : A.focus) == null || x.call(A);
    };
    return tt(() => {
      d.value.checked = k.value;
    }), t({
      focus: O,
      checked: k
    }), (A, x) => (S(), N("div", {
      class: D(a(g)),
      onClick: Ue(F, ["prevent"])
    }, [
      f("input", {
        id: a(i),
        ref_key: "input",
        ref: d,
        class: D(a(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": a(k),
        "aria-disabled": a(c),
        "aria-label": A.ariaLabel,
        name: A.name,
        "true-value": A.activeValue,
        "false-value": A.inactiveValue,
        disabled: a(c),
        tabindex: A.tabindex,
        onChange: R,
        onKeydown: pn(F, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !A.inlinePrompt && (A.inactiveIcon || A.inactiveText) ? (S(), N("span", {
        key: 0,
        class: D(a(w))
      }, [
        A.inactiveIcon ? (S(), ee(a(ot), { key: 0 }, {
          default: X(() => [
            (S(), ee(wt(A.inactiveIcon)))
          ]),
          _: 1
        })) : U("v-if", !0),
        !A.inactiveIcon && A.inactiveText ? (S(), N("span", {
          key: 1,
          "aria-hidden": a(k)
        }, L(A.inactiveText), 9, ["aria-hidden"])) : U("v-if", !0)
      ], 2)) : U("v-if", !0),
      f("span", {
        ref_key: "core",
        ref: m,
        class: D(a(s).e("core")),
        style: dt(a(b))
      }, [
        A.inlinePrompt ? (S(), N("div", {
          key: 0,
          class: D(a(s).e("inner"))
        }, [
          A.activeIcon || A.inactiveIcon ? (S(), ee(a(ot), {
            key: 0,
            class: D(a(s).is("icon"))
          }, {
            default: X(() => [
              (S(), ee(wt(a(k) ? A.activeIcon : A.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : A.activeText || A.inactiveText ? (S(), N("span", {
            key: 1,
            class: D(a(s).is("text")),
            "aria-hidden": !a(k)
          }, L(a(k) ? A.activeText : A.inactiveText), 11, ["aria-hidden"])) : U("v-if", !0)
        ], 2)) : U("v-if", !0),
        f("div", {
          class: D(a(s).e("action"))
        }, [
          A.loading ? (S(), ee(a(ot), {
            key: 0,
            class: D(a(s).is("loading"))
          }, {
            default: X(() => [
              _(a(gu))
            ]),
            _: 1
          }, 8, ["class"])) : a(k) ? le(A.$slots, "active-action", { key: 1 }, () => [
            A.activeActionIcon ? (S(), ee(a(ot), { key: 0 }, {
              default: X(() => [
                (S(), ee(wt(A.activeActionIcon)))
              ]),
              _: 1
            })) : U("v-if", !0)
          ]) : a(k) ? U("v-if", !0) : le(A.$slots, "inactive-action", { key: 2 }, () => [
            A.inactiveActionIcon ? (S(), ee(a(ot), { key: 0 }, {
              default: X(() => [
                (S(), ee(wt(A.inactiveActionIcon)))
              ]),
              _: 1
            })) : U("v-if", !0)
          ])
        ], 2)
      ], 6),
      !A.inlinePrompt && (A.activeIcon || A.activeText) ? (S(), N("span", {
        key: 1,
        class: D(a(h))
      }, [
        A.activeIcon ? (S(), ee(a(ot), { key: 0 }, {
          default: X(() => [
            (S(), ee(wt(A.activeIcon)))
          ]),
          _: 1
        })) : U("v-if", !0),
        !A.activeIcon && A.activeText ? (S(), N("span", {
          key: 1,
          "aria-hidden": !a(k)
        }, L(A.activeText), 9, ["aria-hidden"])) : U("v-if", !0)
      ], 2)) : U("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var Zy = /* @__PURE__ */ je(qy, [["__file", "switch.vue"]]);
const Yy = an(Zy), rd = ["success", "info", "warning", "error"], At = wu({
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
}), Xy = ze({
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
    type: mn,
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
    values: rd,
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
}), Qy = {
  destroy: () => !0
}, hn = bf([]), Jy = (e) => {
  const t = hn.findIndex((r) => r.id === e), n = hn[t];
  let o;
  return t > 0 && (o = hn[t - 1]), { current: n, prev: o };
}, ew = (e) => {
  const { prev: t } = Jy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, tw = (e, t) => hn.findIndex((o) => o.id === e) > 0 ? 16 : t, nw = oe({
  name: "ElMessage"
}), ow = /* @__PURE__ */ oe({
  ...nw,
  props: Xy,
  emits: Qy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Gv, { ns: r, zIndex: l } = uu("message"), { currentZIndex: s, nextZIndex: i } = l, c = P(), u = P(!1), d = P(0);
    let m;
    const g = C(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = C(() => {
      const $ = n.type;
      return { [r.bm("icon", $)]: $ && ms[$] };
    }), h = C(() => n.icon || ms[n.type] || ""), b = C(() => ew(n.id)), E = C(() => tw(n.id, n.offset) + b.value), k = C(() => d.value + E.value), R = C(() => ({
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
    return tt(() => {
      F(), i(), u.value = !0;
    }), de(() => n.repeatNum, () => {
      O(), F();
    }), vn(document, "keydown", x), In(c, () => {
      d.value = c.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: k,
      close: A
    }), ($, K) => (S(), ee($o, {
      name: a(r).b("fade"),
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
            a(r).b(),
            { [a(r).m($.type)]: $.type },
            a(r).is("center", $.center),
            a(r).is("closable", $.showClose),
            a(r).is("plain", $.plain),
            $.customClass
          ]),
          style: dt(a(R)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: F
        }, [
          $.repeatNum > 1 ? (S(), ee(a(G1), {
            key: 0,
            value: $.repeatNum,
            type: a(g),
            class: D(a(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : U("v-if", !0),
          a(h) ? (S(), ee(a(ot), {
            key: 1,
            class: D([a(r).e("icon"), a(w)])
          }, {
            default: X(() => [
              (S(), ee(wt(a(h))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          le($.$slots, "default", {}, () => [
            $.dangerouslyUseHTMLString ? (S(), N(at, { key: 1 }, [
              U(" Caution here, message could've been compromised, never use user's input as message "),
              f("p", {
                class: D(a(r).e("content")),
                innerHTML: $.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), N("p", {
              key: 0,
              class: D(a(r).e("content"))
            }, L($.message), 3))
          ]),
          $.showClose ? (S(), ee(a(ot), {
            key: 2,
            class: D(a(r).e("closeBtn")),
            onClick: Ue(A, ["stop"])
          }, {
            default: X(() => [
              _(a(o))
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
var rw = /* @__PURE__ */ je(ow, [["__file", "message.vue"]]);
let sw = 1;
const sd = (e) => {
  const t = !e || Et(e) || Ir(e) || Ke(e) ? { message: e } : e, n = {
    ...At,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Et(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    gn(o) || (o = document.body), n.appendTo = o;
  }
  return Xn(un.grouping) && !n.grouping && (n.grouping = un.grouping), $e(un.duration) && n.duration === 3e3 && (n.duration = un.duration), $e(un.offset) && n.offset === 16 && (n.offset = un.offset), Xn(un.showClose) && !n.showClose && (n.showClose = un.showClose), n;
}, aw = (e) => {
  const t = hn.indexOf(e);
  if (t === -1)
    return;
  hn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, lw = ({ appendTo: e, ...t }, n) => {
  const o = `message_${sw++}`, r = t.onClose, l = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), aw(d);
    },
    onDestroy: () => {
      ls(null, l);
    }
  }, i = _(rw, s, Ke(s.message) || Ir(s.message) ? {
    default: Ke(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || er._context, ls(i, l), e.appendChild(l.firstElementChild);
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
  const n = sd(e);
  if (n.grouping && hn.length) {
    const r = hn.find(({ vnode: l }) => {
      var s;
      return ((s = l.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if ($e(un.max) && hn.length >= un.max)
    return { close: () => {
    } };
  const o = lw(n, t);
  return hn.push(o), o.handler;
};
rd.forEach((e) => {
  er[e] = (t = {}, n) => {
    const o = sd(t);
    return er({ ...o, type: e }, n);
  };
});
function iw(e) {
  for (const t of hn)
    (!e || e === t.props.type) && t.handler.close();
}
er.closeAll = iw;
er._context = null;
const cw = pu(er, "$message"), ad = [
  "success",
  "info",
  "warning",
  "error"
], uw = ze({
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
    values: [...ad, ""],
    default: ""
  },
  zIndex: Number
}), dw = {
  destroy: () => !0
}, fw = oe({
  name: "ElNotification"
}), pw = /* @__PURE__ */ oe({
  ...fw,
  props: uw,
  emits: dw,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = uu("notification"), { nextZIndex: l, currentZIndex: s } = r, { Close: i } = vu, c = P(!1);
    let u;
    const d = C(() => {
      const F = n.type;
      return F && ms[n.type] ? o.m(F) : "";
    }), m = C(() => n.type && ms[n.type] || n.icon), g = C(() => n.position.endsWith("right") ? "right" : "left"), w = C(() => n.position.startsWith("top") ? "top" : "bottom"), h = C(() => {
      var F;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (F = n.zIndex) != null ? F : s.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = ds(() => {
        c.value && k();
      }, n.duration));
    }
    function E() {
      u?.();
    }
    function k() {
      c.value = !1;
    }
    function R({ code: F }) {
      F === Rn.delete || F === Rn.backspace ? E() : F === Rn.esc ? c.value && k() : b();
    }
    return tt(() => {
      b(), l(), c.value = !0;
    }), vn(document, "keydown", R), t({
      visible: c,
      close: k
    }), (F, O) => (S(), ee($o, {
      name: a(o).b("fade"),
      onBeforeLeave: F.onClose,
      onAfterLeave: (A) => F.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        it(f("div", {
          id: F.id,
          class: D([a(o).b(), F.customClass, a(g)]),
          style: dt(a(h)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: b,
          onClick: F.onClick
        }, [
          a(m) ? (S(), ee(a(ot), {
            key: 0,
            class: D([a(o).e("icon"), a(d)])
          }, {
            default: X(() => [
              (S(), ee(wt(a(m))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          f("div", {
            class: D(a(o).e("group"))
          }, [
            f("h2", {
              class: D(a(o).e("title")),
              textContent: L(F.title)
            }, null, 10, ["textContent"]),
            it(f("div", {
              class: D(a(o).e("content")),
              style: dt(F.title ? void 0 : { margin: 0 })
            }, [
              le(F.$slots, "default", {}, () => [
                F.dangerouslyUseHTMLString ? (S(), N(at, { key: 1 }, [
                  U(" Caution here, message could've been compromised, never use user's input as message "),
                  f("p", { innerHTML: F.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), N("p", { key: 0 }, L(F.message), 1))
              ])
            ], 6), [
              [Pn, F.message]
            ]),
            F.showClose ? (S(), ee(a(ot), {
              key: 0,
              class: D(a(o).e("closeBtn")),
              onClick: Ue(k, ["stop"])
            }, {
              default: X(() => [
                _(a(i))
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
var mw = /* @__PURE__ */ je(pw, [["__file", "notification.vue"]]);
const vs = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ba = 16;
let hw = 1;
const tr = function(e = {}, t) {
  if (!qe)
    return { close: () => {
    } };
  (Et(e) || Ir(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  vs[n].forEach(({ vm: d }) => {
    var m;
    o += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + ba;
  }), o += ba;
  const r = `notification_${hw++}`, l = e.onClose, s = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      gw(r, n, l);
    }
  };
  let i = document.body;
  gn(e.appendTo) ? i = e.appendTo : Et(e.appendTo) && (i = document.querySelector(e.appendTo)), gn(i) || (i = document.body);
  const c = document.createElement("div"), u = _(mw, s, Ke(s.message) ? s.message : Ir(s.message) ? () => s.message : null);
  return u.appContext = $n(t) ? tr._context : t, u.props.onDestroy = () => {
    ls(null, c);
  }, ls(u, c), vs[n].push({ vm: u }), i.appendChild(c.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
ad.forEach((e) => {
  tr[e] = (t = {}, n) => ((Et(t) || Ir(t)) && (t = {
    message: t
  }), tr({ ...t, type: e }, n));
});
function gw(e, t, n) {
  const o = vs[t], r = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: l } = o[r];
  if (!l)
    return;
  n?.(l);
  const s = l.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const c = o.length;
  if (!(c < 1))
    for (let u = r; u < c; u++) {
      const { el: d, component: m } = o[u].vm, g = Number.parseInt(d.style[i], 10) - s - ba;
      m.props.offset = g;
    }
}
function vw() {
  for (const e of Object.values(vs))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
tr.closeAll = vw;
tr._context = null;
const bw = pu(tr, "$notify");
function yw(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Ze(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var ac;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ac || (ac = {}));
async function ww(e, t) {
  await Ze("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function kw(e, t, n) {
  var o;
  const r = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return Ze("plugin:event|listen", {
    event: e,
    target: r,
    handler: yw(t)
  }).then((l) => async () => ww(e, l));
}
async function ld() {
  return await Ze("local_ai_get_config");
}
async function rs(e) {
  return await Ze("local_ai_save_config", { config: e });
}
async function id(e) {
  return await Ze("local_ai_scan_models", {
    config: e ?? null
  });
}
async function _w() {
  return await Ze("local_ai_get_runtime_status");
}
async function cd() {
  return await Ze("local_ai_get_status");
}
async function Sw(e) {
  return await Ze("local_ai_start_service", {
    config: e ?? null
  });
}
async function ud() {
  return await Ze("local_ai_restart_service");
}
async function Tw() {
  await Ze("local_ai_stop_service");
}
async function Aw(e) {
  return await Ze("local_ai_chat", { request: e });
}
function dd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Cw(e, t, n = {}) {
  const o = n.requestId ?? dd(), r = await kw(
    "local-ai-chat-stream",
    (l) => {
      const s = l.payload;
      s.requestId === o && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await Ze("local_ai_chat_stream", {
      request: e,
      requestId: o
    });
  } finally {
    r();
  }
}
async function Xs(e) {
  return await Ze("local_ai_cancel_chat_stream", { requestId: e });
}
async function Ew() {
  return await Ze("local_ai_get_chat_histories");
}
async function xw(e) {
  return await Ze(
    "local_ai_read_attachment_files",
    { paths: e }
  );
}
async function Lw(e) {
  return await Ze("local_ai_save_chat_history", {
    history: e
  });
}
async function Iw(e) {
  return await Ze("local_ai_delete_chat_history", {
    historyId: e
  });
}
async function Ow() {
  return await Ze("local_ai_clear_chat_histories");
}
const $w = ["disabled"], Rw = {
  key: 0,
  class: "custom-button__loading"
}, Mw = /* @__PURE__ */ oe({
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
    return (n, o) => (S(), N("button", {
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
      e.loading ? (S(), N("div", Rw, o[1] || (o[1] = [
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
    ], 10, $w));
  }
}), sr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, en = /* @__PURE__ */ sr(Mw, [["__scopeId", "data-v-5d7f8015"]]), Pw = { class: "dialog-footer-default" }, Nw = { class: "footer-left" }, Dw = { class: "footer-right" }, zw = /* @__PURE__ */ oe({
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
    const o = e, r = n, l = P(o.modelValue), s = C(() => ["app-dialog", o.customClass].filter(Boolean).join(" "));
    de(
      () => o.modelValue,
      (d) => {
        l.value = d;
      }
    ), de(l, (d) => {
      r("update:modelValue", d);
    });
    const i = () => {
      r("close");
    }, c = () => {
      r("confirm");
    }, u = () => {
      l.value = !1, r("cancel");
    };
    return t({
      open: () => {
        l.value = !0;
      },
      close: () => {
        l.value = !1;
      }
    }), (d, m) => {
      const g = _y;
      return S(), ee(g, {
        modelValue: a(l),
        "onUpdate:modelValue": m[0] || (m[0] = (w) => tn(l) ? l.value = w : null),
        title: d.title,
        width: d.width,
        "close-on-click-modal": d.closeOnClickModal,
        draggable: d.draggable,
        center: d.center,
        "show-close": d.showClose,
        "close-on-press-escape": d.closeOnPressEscape,
        "append-to-body": d.appendToBody,
        "align-center": d.alignCenter,
        "custom-class": a(s),
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
              f("div", Pw, [
                f("div", Nw, [
                  le(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                f("div", Dw, [
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
}), fd = /* @__PURE__ */ sr(zw, [["__scopeId", "data-v-a7e8a5d6"]]), Bw = { class: "confirm-content" }, Fw = { class: "confirm-footer" }, jw = /* @__PURE__ */ oe({
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
    const o = e, r = n, l = P(o.modelValue), s = C(() => {
      const d = ["confirm-dialog"];
      return o.type === "warning" ? d.push("warning-dialog") : o.type === "danger" && d.push("delete-dialog"), d.join(" ");
    }), i = C(() => o.type === "danger" ? "danger" : o.type === "warning" ? "warning" : "primary");
    de(
      () => o.modelValue,
      (d) => {
        l.value = d;
      }
    ), de(l, (d) => {
      r("update:modelValue", d);
    });
    const c = () => {
      r("confirm");
    }, u = () => {
      l.value = !1, r("cancel");
    };
    return t({
      open: () => {
        l.value = !0;
      },
      close: () => {
        l.value = !1;
      }
    }), (d, m) => (S(), ee(fd, {
      modelValue: a(l),
      "onUpdate:modelValue": m[0] || (m[0] = (g) => tn(l) ? l.value = g : null),
      title: d.title,
      width: d.width,
      center: d.center,
      "show-close": d.showClose,
      "custom-class": a(s)
    }, {
      footer: X(() => [
        f("div", Fw, [
          d.showCancelButton ? (S(), ee(en, {
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
            type: a(i),
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
        f("div", Bw, [
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
}), Vw = /* @__PURE__ */ sr(jw, [["__scopeId", "data-v-875c8d56"]]), Ee = {
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
      showClose: l = !1
    } = e;
    o === "center" ? cw({
      message: t,
      type: n,
      duration: r,
      showClose: l,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : bw({
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
}, Hw = "snippets-code:developer-mode", pd = "snippets-code:frontend-diagnostics", Ww = 240, mr = "[REDACTED]", ss = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${mr}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${mr}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  mr
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${mr}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${mr}`
), md = (e) => {
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
}, Uw = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Gw = () => {
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
    return localStorage.getItem(Hw) === "true";
  } catch {
    return !1;
  }
}, Kw = (e, t, n) => {
  if (!cl() || typeof localStorage > "u") return;
  const o = Gw();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Uw(),
    message: ss(t),
    data: md(n)
  });
  try {
    localStorage.setItem(
      pd,
      JSON.stringify(o.slice(-Ww))
    );
  } catch {
  }
}, qw = () => cl(), Zw = (e) => e === "error" || cl(), Qr = (e, t, n) => {
  Kw(e, t, n), Zw(e) && Ze("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : md(n)
  }).catch(() => {
  });
}, yt = {
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
    qw() && Qr("debug", e, t);
  }
}, Yw = async () => {
  const e = await Ze("get_search_engines");
  return Array.isArray(e) ? e : [];
}, Xw = async (e, t, n = {}) => {
  const o = e.url.replace("%s", encodeURIComponent(t || ""));
  await Ze("open_url", { url: o }), n.hideSearchWindow !== !1 && await Ze("show_hide_window_command", { label: "search" });
}, Qw = (e) => e.find((t) => t.enabled), Jw = /* @__PURE__ */ new Set([
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
]), ek = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), tk = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), nk = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), hd = 5, ok = 1024 * 1024, rk = 5 * 1024 * 1024, lc = 4e4, Qs = (e) => e?.map((t) => ({ ...t })) ?? [], ul = (e) => e.split(".").pop()?.toLowerCase() ?? "", gd = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, dl = (e) => ek.has(e.type) || tk.has(ul(e.name)), vd = (e) => e.type.startsWith("text/") || Jw.has(ul(e.name)), sk = (e) => nk.has(ul(e.name)), ak = async (e) => await new Promise((t, n) => {
  const o = new FileReader();
  o.onload = () => t(String(o.result ?? "")), o.onerror = () => n(o.error ?? new Error("read failed")), o.readAsDataURL(e);
}), lk = async (e) => {
  const t = await e.text();
  return t.length <= lc ? { text: t, truncated: !1 } : {
    text: t.slice(0, lc),
    truncated: !0
  };
}, ik = (e, t) => {
  const n = t.filter(
    (r) => r.type === "text" && r.status === "parsed"
  );
  if (!n.length) return e;
  const o = n.map((r, l) => {
    const s = r.error === "truncated";
    return [
      `--- 文件 ${l + 1}: ${r.name} ---`,
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
}, Js = 160, bd = (e) => {
  const t = e.trim();
  if (!t) return 0;
  const n = (t.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, l = (t.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((s, i) => /^[A-Za-z0-9_]+$/.test(i) ? s + Math.max(1, Math.ceil(i.length / 4)) : s + 1, 0);
  return Math.max(1, Math.ceil(n + l));
}, ea = (e) => Math.max(0, Math.ceil(e.length / 4)), ck = (e) => Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0, uk = (e, t) => {
  const n = Object.entries(t).filter(
    ([, o]) => o != null
  );
  return {
    ...e,
    ...Object.fromEntries(n)
  };
}, yd = (e) => Array.isArray(e) ? e.filter((t) => t.type === "text").map((t) => t.text).join(`
`) : e, dk = (e) => {
  const t = e.attachments?.filter(
    (l) => l.status === "parsed"
  ) ?? [], n = ik(
    e.content,
    t
  ), o = t.filter(
    (l) => l.type === "image" && l.dataUrl
  );
  if (!o.length) return n;
  const r = [{ type: "text", text: n }];
  for (const l of o)
    r.push({
      type: "image_url",
      image_url: { url: l.dataUrl ?? "" }
    });
  return r;
}, nr = (e) => bd(
  e.map((t) => `${t.role}: ${yd(t.content)}`).join(`
`)
), ic = (e, t, n) => {
  const o = Math.max(240, t * 4);
  return e.length <= o ? e : `${n}

${e.slice(-o)}`;
}, hr = (e) => String(e).padStart(2, "0"), fk = (e = /* @__PURE__ */ new Date()) => {
  const t = -e.getTimezoneOffset() / 60, n = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${t >= 0 ? "+" : ""}${t}`, o = [
    e.getFullYear(),
    hr(e.getMonth() + 1),
    hr(e.getDate())
  ].join("-"), r = [
    hr(e.getHours()),
    hr(e.getMinutes()),
    hr(e.getSeconds())
  ].join(":"), l = e.toLocaleDateString("zh-CN", { weekday: "long" });
  return { isoDate: o, localTime: r, timeZone: n, weekday: l };
}, pk = () => {
  const { isoDate: e, localTime: t, timeZone: n, weekday: o } = fk();
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
}, mk = (e) => {
  const t = e.filter((o) => o.role === "system").map((o) => yd(o.content).trim()).filter(Boolean), n = e.filter(
    (o) => o.role !== "system"
  );
  return t.length ? [
    { role: "system", content: t.join(`

---

`) },
    ...n
  ] : n;
}, hk = (e, t, n) => {
  if (e.role !== "assistant" || typeof e.content != "string" || t < Js)
    return null;
  let o = t, r = {
    ...e,
    content: ic(
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
      content: ic(
        e.content,
        o,
        n
      )
    };
  return nr([r]) <= t ? r : null;
}, gk = (e, t, n) => {
  const o = [];
  let r = 0;
  for (let l = e.length - 1; l >= 0; l -= 1) {
    const s = e[l], i = nr([s]);
    if (r + i <= t || o.length === 0) {
      o.unshift(s), r += i;
      continue;
    }
    const c = t - r, u = hk(
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
}, vk = (e, t) => {
  if (e.some(or)) {
    const l = e.map((i) => ({
      ...i,
      type: i.type ?? "text",
      parentId: i.parentId ?? null,
      childIds: i.childIds ?? []
    })), s = jr(l);
    return {
      messages: l,
      currentNodeId: Vr(l, l.at(-1)?.id) ?? s?.id ?? null
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
  for (const l of e) {
    const s = {
      ...l,
      role: l.role === "system" ? "assistant" : l.role,
      type: "text",
      parentId: r,
      childIds: []
    };
    o.find((c) => c.id === r)?.childIds?.push(s.id), o.push(s), r = s.id;
  }
  return { messages: o, currentNodeId: r };
}, wd = (e, t) => {
  if (!t) return [];
  const n = Ns(e), o = [], r = /* @__PURE__ */ new Set();
  let l = n.get(t);
  for (; l && !r.has(l.id); )
    r.add(l.id), o.unshift(l), l = l.parentId ? n.get(l.parentId) : void 0;
  return o;
}, as = (e) => {
  if (!e) return [];
  const t = e.currentNodeId ?? Vr(e.messages, jr(e.messages)?.id);
  return wd(e.messages, t).filter(
    (n) => !or(n)
  );
}, bk = (e) => {
  if (!e) return [];
  const t = Ns(e.messages), n = (o) => Vr(e.messages, o) ?? o;
  return as(e).map((o) => {
    const l = (o.parentId ? t.get(o.parentId) : void 0)?.childIds ?? [o.id];
    return {
      message: o,
      siblingLeafNodeIds: l.map(n),
      siblingCurrentIndex: Math.max(0, l.indexOf(o.id))
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
    const l = e.messages.find((s) => s.id === o);
    l && (l.childIds = [...l.childIds ?? [], r.id]);
  }
  return e.currentNodeId = r.id, r;
}, yk = (e, t) => {
  const n = Ns(e), o = /* @__PURE__ */ new Set(), r = (l) => {
    if (!o.has(l)) {
      o.add(l);
      for (const s of n.get(l)?.childIds ?? []) r(s);
    }
  };
  return r(t), o;
}, wk = (e, t, n) => {
  const o = e.find((i) => i.id === n);
  if (!o || or(o)) return null;
  const r = yk(e, n), l = e.filter((i) => !r.has(i.id)).map((i) => ({
    ...i,
    childIds: (i.childIds ?? []).filter((c) => !r.has(c))
  })), s = t && r.has(t) ? Vr(l, o.parentId) ?? jr(l)?.id ?? null : t;
  return {
    messages: l,
    currentNodeId: s,
    deletedIds: r
  };
};
async function ya(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Ze("plugin:dialog|open", { options: e });
}
const kk = [
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
}), _k = async (e, t) => {
  const n = Ds(e, "image");
  if (e.size > rk)
    return {
      ...n,
      status: "error",
      error: t("localAi.imageTooLarge")
    };
  try {
    return {
      ...n,
      status: "parsed",
      dataUrl: await ak(e)
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, Sk = async (e, t) => {
  const n = Ds(e, "text");
  if (e.size > ok)
    return {
      ...n,
      status: "error",
      error: t("localAi.textFileTooLarge")
    };
  try {
    const o = await lk(e);
    return {
      ...n,
      status: "parsed",
      text: o.text,
      error: o.truncated ? "truncated" : void 0
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, Tk = async (e, t) => dl(e) ? _k(e, t) : vd(e) ? Sk(e, t) : {
  ...Ds(e, "unsupported"),
  status: "error",
  error: sk(e) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
}, cc = async (e, t, n) => {
  const o = Array.from(t), r = hd - e.value.length;
  if (r <= 0) {
    Ee.msg(n("localAi.attachmentLimit"), "warning");
    return;
  }
  o.length > r && Ee.msg(n("localAi.attachmentLimit"), "warning");
  const l = o.slice(0, r), s = l.map(
    (i) => Ds(
      i,
      dl(i) ? "image" : vd(i) ? "text" : "unsupported"
    )
  );
  e.value.push(...s), await Promise.all(
    l.map(async (i, c) => {
      const u = await Tk(i, n), d = e.value.findIndex(
        (m) => m.id === s[c].id
      );
      d >= 0 && (e.value[d] = u);
    })
  );
}, Ak = (e, t) => {
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
}, Ck = (e) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: e.kind,
  mime: e.mime,
  size: e.size,
  status: e.error ? "error" : "parsed",
  text: e.text ?? void 0,
  dataUrl: e.dataUrl ?? void 0,
  error: void 0
}), Ek = () => {
  const { t: e } = Pr(), t = P([]), n = P(!1);
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
        const r = await ya({
          title: e("localAi.addAttachment"),
          directory: !1,
          multiple: !0,
          filters: [
            {
              name: e("localAi.attachment"),
              extensions: kk
            }
          ]
        });
        if (!r) return;
        const l = (Array.isArray(r) ? r : [r]).slice(
          0,
          o
        );
        (Array.isArray(r) ? r.length : 1) > o && Ee.msg(e("localAi.attachmentLimit"), "warning");
        const s = await xw(l);
        t.value.push(
          ...s.map((i) => ({
            ...Ck(i),
            error: Ak(i, e)
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
      o.dataTransfer?.files.length && await cc(t, o.dataTransfer.files, e);
    },
    handleComposerPaste: async (o) => {
      const l = Array.from(o.clipboardData?.files ?? []).filter(dl);
      l.length && (o.preventDefault(), await cc(t, l, e));
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
function kd(e) {
  No = e;
}
var xr = { exec: () => null };
function Le(e, t = "") {
  let n = typeof e == "string" ? e : e.source, o = { replace: (r, l) => {
    let s = typeof l == "string" ? l : l.source;
    return s = s.replace($t.caret, "$1"), n = n.replace(r, s), o;
  }, getRegex: () => new RegExp(n, t) };
  return o;
}
var xk = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), $t = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Lk = /^(?:[ \t]*(?:\n|$))+/, Ik = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ok = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, $k = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, pl = /(?:[*+-]|\d{1,9}[.)])/, _d = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Sd = Le(_d).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Rk = Le(_d).replace(/bull/g, pl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ml = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Mk = /^[^\n]+/, hl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Pk = Le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", hl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Nk = Le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, pl).getRegex(), zs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", gl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Dk = Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", gl).replace("tag", zs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Td = Le(ml).replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zs).getRegex(), zk = Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Td).getRegex(), vl = { blockquote: zk, code: Ik, def: Pk, fences: Ok, heading: $k, hr: Hr, html: Dk, lheading: Sd, list: Nk, newline: Lk, paragraph: Td, table: xr, text: Mk }, uc = Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zs).getRegex(), Bk = { ...vl, lheading: Rk, table: uc, paragraph: Le(ml).replace("hr", Hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", uc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zs).getRegex() }, Fk = { ...vl, html: Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", gl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: xr, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Le(ml).replace("hr", Hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Sd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, jk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Vk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ad = /^( {2,}|\\)\n(?!\s*$)/, Hk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Bs = /[\p{P}\p{S}]/u, bl = /[\s\p{P}\p{S}]/u, Cd = /[^\s\p{P}\p{S}]/u, Wk = Le(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, bl).getRegex(), Ed = /(?!~)[\p{P}\p{S}]/u, Uk = /(?!~)[\s\p{P}\p{S}]/u, Gk = /(?:[^\s\p{P}\p{S}]|~)/u, Kk = Le(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", xk ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), xd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, qk = Le(xd, "u").replace(/punct/g, Bs).getRegex(), Zk = Le(xd, "u").replace(/punct/g, Ed).getRegex(), Ld = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Yk = Le(Ld, "gu").replace(/notPunctSpace/g, Cd).replace(/punctSpace/g, bl).replace(/punct/g, Bs).getRegex(), Xk = Le(Ld, "gu").replace(/notPunctSpace/g, Gk).replace(/punctSpace/g, Uk).replace(/punct/g, Ed).getRegex(), Qk = Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Cd).replace(/punctSpace/g, bl).replace(/punct/g, Bs).getRegex(), Jk = Le(/\\(punct)/, "gu").replace(/punct/g, Bs).getRegex(), e2 = Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), t2 = Le(gl).replace("(?:-->|$)", "-->").getRegex(), n2 = Le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", t2).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), bs = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, o2 = Le(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", bs).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Id = Le(/^!?\[(label)\]\[(ref)\]/).replace("label", bs).replace("ref", hl).getRegex(), Od = Le(/^!?\[(ref)\](?:\[\])?/).replace("ref", hl).getRegex(), r2 = Le("reflink|nolink(?!\\()", "g").replace("reflink", Id).replace("nolink", Od).getRegex(), dc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, yl = { _backpedal: xr, anyPunctuation: Jk, autolink: e2, blockSkip: Kk, br: Ad, code: Vk, del: xr, emStrongLDelim: qk, emStrongRDelimAst: Yk, emStrongRDelimUnd: Qk, escape: jk, link: o2, nolink: Od, punctuation: Wk, reflink: Id, reflinkSearch: r2, tag: n2, text: Hk, url: xr }, s2 = { ...yl, link: Le(/^!?\[(label)\]\((.*?)\)/).replace("label", bs).getRegex(), reflink: Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", bs).getRegex() }, wa = { ...yl, emStrongRDelimAst: Xk, emStrongLDelim: Zk, url: Le(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", dc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Le(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", dc).getRegex() }, a2 = { ...wa, br: Le(Ad).replace("{2,}", "*").getRegex(), text: Le(wa.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Jr = { normal: vl, gfm: Bk, pedantic: Fk }, gr = { normal: yl, gfm: wa, breaks: a2, pedantic: s2 }, l2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, fc = (e) => l2[e];
function Wn(e, t) {
  if (t) {
    if ($t.escapeTest.test(e)) return e.replace($t.escapeReplace, fc);
  } else if ($t.escapeTestNoEncode.test(e)) return e.replace($t.escapeReplaceNoEncode, fc);
  return e;
}
function pc(e) {
  try {
    e = encodeURI(e).replace($t.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function mc(e, t) {
  let n = e.replace($t.findPipe, (l, s, i) => {
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
function i2(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let o = 0; o < e.length; o++) if (e[o] === "\\") o++;
  else if (e[o] === t[0]) n++;
  else if (e[o] === t[1] && (n--, n < 0)) return o;
  return n > 0 ? -2 : -1;
}
function hc(e, t, n, o, r) {
  let l = t.href, s = t.title || null, i = e[1].replace(r.other.outputLinkReplace, "$1");
  o.state.inLink = !0;
  let c = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: l, title: s, text: i, tokens: o.inlineTokens(i) };
  return o.state.inLink = !1, c;
}
function c2(e, t, n) {
  let o = e.match(n.other.indentCodeCompensation);
  if (o === null) return t;
  let r = o[1];
  return t.split(`
`).map((l) => {
    let s = l.match(n.other.beginningSpace);
    if (s === null) return l;
    let [i] = s;
    return i.length >= r.length ? l.slice(r.length) : l;
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
      let n = t[0], o = c2(n, t[3] || "", this.rules);
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
`), o = "", r = "", l = [];
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
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, l, !0), this.lexer.state.top = m, n.length === 0) break;
        let g = l.at(-1);
        if (g?.type === "code") break;
        if (g?.type === "blockquote") {
          let w = g, h = w.raw + `
` + n.join(`
`), b = this.blockquote(h);
          l[l.length - 1] = b, o = o.substring(0, o.length - w.raw.length) + b.raw, r = r.substring(0, r.length - w.text.length) + b.text;
          break;
        } else if (g?.type === "list") {
          let w = g, h = w.raw + `
` + n.join(`
`), b = this.list(h);
          l[l.length - 1] = b, o = o.substring(0, o.length - g.raw.length) + b.raw, r = r.substring(0, r.length - w.raw.length) + b.raw, n = h.substring(l.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: l, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), o = n.length > 1, r = { type: "list", raw: "", ordered: o, start: o ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = o ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = o ? n : "[*+-]");
      let l = this.rules.other.listItemRegex(n), s = !1;
      for (; e; ) {
        let c = !1, u = "", d = "";
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), g = e.split(`
`, 1)[0], w = !m.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, d = m.trimStart()) : w ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, d = m.slice(h), h += t[1].length), w && this.rules.other.blankLine.test(g) && (u += g + `
`, e = e.substring(g.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(h), E = this.rules.other.hrRegex(h), k = this.rules.other.fencesBeginRegex(h), R = this.rules.other.headingBeginRegex(h), F = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let O = e.split(`
`, 1)[0], A;
            if (g = O, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), A = g) : A = g.replace(this.rules.other.tabCharGlobal, "    "), k.test(g) || R.test(g) || F.test(g) || b.test(g) || E.test(g)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= h || !g.trim()) d += `
` + A.slice(h);
            else {
              if (w || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || k.test(m) || R.test(m) || E.test(m)) break;
              d += `
` + g;
            }
            !w && !g.trim() && (w = !0), u += O + `
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
    let n = mc(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], l = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let s of o) this.rules.other.tableAlignRight.test(s) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? l.align.push("left") : l.align.push(null);
      for (let s = 0; s < n.length; s++) l.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: l.align[s] });
      for (let s of r) l.rows.push(mc(s, l.header.length).map((i, c) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: l.align[c] })));
      return l;
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
        let l = vr(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0) return;
      } else {
        let l = i2(t[2], "()");
        if (l === -2) return;
        if (l > -1) {
          let s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, s).trim(), t[3] = "";
        }
      }
      let o = t[2], r = "";
      if (this.options.pedantic) {
        let l = this.rules.other.pedanticHrefTitle.exec(o);
        l && (o = l[1], r = l[3]);
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), hc(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let o = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[o.toLowerCase()];
      if (!r) {
        let l = n[0].charAt(0);
        return { type: "text", raw: l, text: l };
      }
      return hc(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!o || o[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let r = [...o[0]].length - 1, l, s, i = r, c = 0, u = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + r); (o = u.exec(t)) != null; ) {
        if (l = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !l) continue;
        if (s = [...l].length, o[3] || o[4]) {
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
      let l = t;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, i = t.slice(1), c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, i), typeof c == "number" && c >= 0 && (s = Math.min(s, c));
        }), s < 1 / 0 && s >= 0 && (l = t.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(l))) {
        let s = n.at(-1);
        o && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : n.push(r), o = l.length !== t.length, t = t.substring(r.raw.length);
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
    let l;
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) l = r[2] ? r[2].length : 0, o = o.slice(0, r.index + l) + "[" + "a".repeat(r[0].length - l - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
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
        this.options.extensions.startInline.forEach((w) => {
          g = w.call({ lexer: this }, m), typeof g == "number" && g >= 0 && (d = Math.min(d, g));
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
    let r = t ? "ol" : "ul", l = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + l + `>
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
      let l = e.rows[r];
      n = "";
      for (let s = 0; s < l.length; s++) n += this.tablecell(l[s]);
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
    let o = this.parser.parseInline(n), r = pc(e);
    if (r === null) return o;
    e = r;
    let l = '<a href="' + e + '"';
    return t && (l += ' title="' + Wn(t) + '"'), l += ">" + o + "</a>", l;
  }
  image({ href: e, title: t, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let r = pc(e);
    if (r === null) return Wn(n);
    e = r;
    let l = `<img src="${e}" alt="${n}"`;
    return t && (l += ` title="${Wn(t)}"`), l += ">", l;
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
      let l = r;
      switch (l.type) {
        case "space": {
          n += this.renderer.space(l);
          break;
        }
        case "hr": {
          n += this.renderer.hr(l);
          break;
        }
        case "heading": {
          n += this.renderer.heading(l);
          break;
        }
        case "code": {
          n += this.renderer.code(l);
          break;
        }
        case "table": {
          n += this.renderer.table(l);
          break;
        }
        case "blockquote": {
          n += this.renderer.blockquote(l);
          break;
        }
        case "list": {
          n += this.renderer.list(l);
          break;
        }
        case "checkbox": {
          n += this.renderer.checkbox(l);
          break;
        }
        case "html": {
          n += this.renderer.html(l);
          break;
        }
        case "def": {
          n += this.renderer.def(l);
          break;
        }
        case "paragraph": {
          n += this.renderer.paragraph(l);
          break;
        }
        case "text": {
          n += this.renderer.text(l);
          break;
        }
        default: {
          let s = 'Token with "' + l.type + '" type was not found.';
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
      let l = t[r];
      if (this.options.extensions?.renderers?.[l.type]) {
        let i = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
          o += i || "";
          continue;
        }
      }
      let s = l;
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
}, De(ts, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), De(ts, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), ts), u2 = class {
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
        for (let l of r.header) n = n.concat(this.walkTokens(l.tokens, t));
        for (let l of r.rows) for (let s of l) n = n.concat(this.walkTokens(s.tokens, t));
        break;
      }
      case "list": {
        let r = o;
        n = n.concat(this.walkTokens(r.items, t));
        break;
      }
      default: {
        let r = o;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((l) => {
          let s = r[l].flat(1 / 0);
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
          let l = t.renderers[r.name];
          l ? t.renderers[r.name] = function(...s) {
            let i = r.renderer.apply(this, s);
            return i === !1 && (i = l.apply(this, s)), i;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let l = t[r.level];
          l ? l.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), o.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new ws(this.defaults);
        for (let l in n.renderer) {
          if (!(l in r)) throw new Error(`renderer '${l}' does not exist`);
          if (["options", "parser"].includes(l)) continue;
          let s = l, i = n.renderer[s], c = r[s];
          r[s] = (...u) => {
            let d = i.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d || "";
          };
        }
        o.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new ys(this.defaults);
        for (let l in n.tokenizer) {
          if (!(l in r)) throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l)) continue;
          let s = l, i = n.tokenizer[s], c = r[s];
          r[s] = (...u) => {
            let d = i.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d;
          };
        }
        o.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new wr();
        for (let l in n.hooks) {
          if (!(l in r)) throw new Error(`hook '${l}' does not exist`);
          if (["options", "block"].includes(l)) continue;
          let s = l, i = n.hooks[s], c = r[s];
          wr.passThroughHooks.has(l) ? r[s] = (u) => {
            if (this.defaults.async && wr.passThroughHooksRespectAsync.has(l)) return (async () => {
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
        let r = this.defaults.walkTokens, l = n.walkTokens;
        o.walkTokens = function(s) {
          let i = [];
          return i.push(l.call(this, s)), r && (i = i.concat(r.call(this, s))), i;
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
      let o = { ...n }, r = { ...this.defaults, ...o }, l = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && o.async === !1) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (r.hooks && (r.hooks.options = r, r.hooks.block = e), r.async) return (async () => {
        let s = r.hooks ? await r.hooks.preprocess(t) : t, i = await (r.hooks ? await r.hooks.provideLexer() : e ? dn.lex : dn.lexInline)(s, r), c = r.hooks ? await r.hooks.processAllTokens(i) : i;
        r.walkTokens && await Promise.all(this.walkTokens(c, r.walkTokens));
        let u = await (r.hooks ? await r.hooks.provideParser() : e ? fn.parse : fn.parseInline)(c, r);
        return r.hooks ? await r.hooks.postprocess(u) : u;
      })().catch(l);
      try {
        r.hooks && (t = r.hooks.preprocess(t));
        let s = (r.hooks ? r.hooks.provideLexer() : e ? dn.lex : dn.lexInline)(t, r);
        r.hooks && (s = r.hooks.processAllTokens(s)), r.walkTokens && this.walkTokens(s, r.walkTokens);
        let i = (r.hooks ? r.hooks.provideParser() : e ? fn.parse : fn.parseInline)(s, r);
        return r.hooks && (i = r.hooks.postprocess(i)), i;
      } catch (s) {
        return l(s);
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
}, Oo = new u2();
function Pe(e, t) {
  return Oo.parse(e, t);
}
Pe.options = Pe.setOptions = function(e) {
  return Oo.setOptions(e), Pe.defaults = Oo.defaults, kd(Pe.defaults), Pe;
};
Pe.getDefaults = fl;
Pe.defaults = No;
Pe.use = function(...e) {
  return Oo.use(...e), Pe.defaults = Oo.defaults, kd(Pe.defaults), Pe;
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
function gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function d2(e) {
  if (Array.isArray(e)) return e;
}
function f2(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, l, s, i = [], c = !0, u = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(c = (o = l.call(n)).done) && (i.push(o.value), i.length !== t); c = !0) ;
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
function p2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m2(e, t) {
  return d2(e) || f2(e, t) || h2(e, t) || p2();
}
function h2(e, t) {
  if (e) {
    if (typeof e == "string") return gc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gc(e, t) : void 0;
  }
}
const $d = Object.entries, vc = Object.setPrototypeOf, g2 = Object.isFrozen, v2 = Object.getPrototypeOf, b2 = Object.getOwnPropertyDescriptor;
let Rt = Object.freeze, sn = Object.seal, Ko = Object.create, Rd = typeof Reflect < "u" && Reflect, Sa = Rd.apply, Ta = Rd.construct;
Rt || (Rt = function(t) {
  return t;
});
sn || (sn = function(t) {
  return t;
});
Sa || (Sa = function(t, n) {
  for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++)
    r[l - 2] = arguments[l];
  return t.apply(n, r);
});
Ta || (Ta = function(t) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    o[r - 1] = arguments[r];
  return new t(...o);
});
const Ho = ct(Array.prototype.forEach), y2 = ct(Array.prototype.lastIndexOf), bc = ct(Array.prototype.pop), Wo = ct(Array.prototype.push), w2 = ct(Array.prototype.splice), Ot = Array.isArray, kr = ct(String.prototype.toLowerCase), na = ct(String.prototype.toString), yc = ct(String.prototype.match), Uo = ct(String.prototype.replace), wc = ct(String.prototype.indexOf), k2 = ct(String.prototype.trim), _2 = ct(Number.prototype.toString), S2 = ct(Boolean.prototype.toString), kc = typeof BigInt > "u" ? null : ct(BigInt.prototype.toString), _c = typeof Symbol > "u" ? null : ct(Symbol.prototype.toString), et = ct(Object.prototype.hasOwnProperty), br = ct(Object.prototype.toString), bt = ct(RegExp.prototype.test), yr = T2(TypeError);
function ct(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      o[r - 1] = arguments[r];
    return Sa(e, t, o);
  };
}
function T2(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return Ta(e, n);
  };
}
function ye(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kr;
  if (vc && vc(e, null), !Ot(t))
    return e;
  let o = t.length;
  for (; o--; ) {
    let r = t[o];
    if (typeof r == "string") {
      const l = n(r);
      l !== r && (g2(t) || (t[o] = l), r = l);
    }
    e[r] = !0;
  }
  return e;
}
function A2(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function Ct(e) {
  const t = Ko(null);
  for (const o of $d(e)) {
    var n = m2(o, 2);
    const r = n[0], l = n[1];
    et(e, r) && (Ot(l) ? t[r] = A2(l) : l && typeof l == "object" && l.constructor === Object ? t[r] = Ct(l) : t[r] = l);
  }
  return t;
}
function C2(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return _2(e);
    case "boolean":
      return S2(e);
    case "bigint":
      return kc ? kc(e) : "0";
    case "symbol":
      return _c ? _c(e) : "Symbol()";
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
    const o = b2(e, t);
    if (o) {
      if (o.get)
        return ct(o.get);
      if (typeof o.value == "function")
        return ct(o.value);
    }
    e = v2(e);
  }
  function n() {
    return null;
  }
  return n;
}
function E2(e) {
  try {
    return bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Sc = Rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), oa = Rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ra = Rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), x2 = Rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), sa = Rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), L2 = Rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Tc = Rt(["#text"]), Ac = Rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), aa = Rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Cc = Rt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), es = Rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), I2 = sn(/{{[\w\W]*|^[\w\W]*}}/g), O2 = sn(/<%[\w\W]*|^[\w\W]*%>/g), $2 = sn(/\${[\w\W]*/g), R2 = sn(/^data-[\-\w.\u00B7-\uFFFF]+$/), M2 = sn(/^aria-[\-\w]+$/), Ec = sn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), P2 = sn(/^(?:\w+script|data):/i), N2 = sn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), D2 = sn(/^html$/i), z2 = sn(/^[a-z][.\w]*(-[.\w]+)+$/i), En = {
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
}, B2 = function() {
  return typeof window > "u" ? null : window;
}, F2 = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const r = "data-tt-policy-suffix";
  n && n.hasAttribute(r) && (o = n.getAttribute(r));
  const l = "dompurify" + (o ? "#" + o : "");
  try {
    return t.createPolicy(l, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
}, xc = function() {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B2();
  const t = (ne) => Md(ne);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const o = n, r = o.currentScript;
  e.DocumentFragment;
  const l = e.HTMLTemplateElement, s = e.Node, i = e.Element, c = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, g = i.prototype, w = xn(g, "cloneNode"), h = xn(g, "remove"), b = xn(g, "nextSibling"), E = xn(g, "childNodes"), k = xn(g, "parentNode"), R = xn(g, "shadowRoot"), F = xn(g, "attributes"), O = s && s.prototype ? xn(s.prototype, "nodeType") : null, A = s && s.prototype ? xn(s.prototype, "nodeName") : null;
  if (typeof l == "function") {
    const ne = n.createElement("template");
    ne.content && ne.content.ownerDocument && (n = ne.content.ownerDocument);
  }
  let x, $ = "";
  const K = n, Z = K.implementation, re = K.createNodeIterator, W = K.createDocumentFragment, ae = K.getElementsByTagName, fe = o.importNode;
  let ce = xc();
  t.isSupported = typeof $d == "function" && typeof k == "function" && Z && Z.createHTMLDocument !== void 0;
  const M = I2, V = O2, B = $2, ie = R2, pe = M2, Se = P2, Q = N2, H = z2;
  let Ae = Ec, ge = null;
  const ve = ye({}, [...Sc, ...oa, ...ra, ...sa, ...Tc]);
  let me = null;
  const q = ye({}, [...Ac, ...aa, ...Cc, ...es]);
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
  let rt = !0, ht = !0, kt = !1, gt = !0, ut = !1, _t = !0, Je = !1, Mt = !1, st = !1, nt = !1, Gt = !1, Pt = !1, G = !0, we = !1;
  const Ce = "user-content-";
  let Nt = !0, Me = !1, ln = {}, pt = null;
  const kn = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _n = null;
  const ho = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let Dt = null;
  const go = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Kt = "http://www.w3.org/1998/Math/MathML", qt = "http://www.w3.org/2000/svg", zt = "http://www.w3.org/1999/xhtml";
  let Zt = zt, vo = !1, bo = null;
  const Jt = ye({}, [Kt, qt, zt], na);
  let Bn = ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Sn = ye({}, ["annotation-xml"]);
  const ro = ye({}, ["title", "style", "font", "a", "script"]);
  let Tn = null;
  const yo = ["application/xhtml+xml", "text/html"], ar = "text/html";
  let Ie = null, An = null;
  const Do = n.createElement("form"), zo = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Fn = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (An && An === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = Ct(v), Tn = // eslint-disable-next-line unicorn/prefer-includes
    yo.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? ar : v.PARSER_MEDIA_TYPE, Ie = Tn === "application/xhtml+xml" ? na : kr, ge = et(v, "ALLOWED_TAGS") && Ot(v.ALLOWED_TAGS) ? ye({}, v.ALLOWED_TAGS, Ie) : ve, me = et(v, "ALLOWED_ATTR") && Ot(v.ALLOWED_ATTR) ? ye({}, v.ALLOWED_ATTR, Ie) : q, bo = et(v, "ALLOWED_NAMESPACES") && Ot(v.ALLOWED_NAMESPACES) ? ye({}, v.ALLOWED_NAMESPACES, na) : Jt, Dt = et(v, "ADD_URI_SAFE_ATTR") && Ot(v.ADD_URI_SAFE_ATTR) ? ye(Ct(go), v.ADD_URI_SAFE_ATTR, Ie) : go, _n = et(v, "ADD_DATA_URI_TAGS") && Ot(v.ADD_DATA_URI_TAGS) ? ye(Ct(ho), v.ADD_DATA_URI_TAGS, Ie) : ho, pt = et(v, "FORBID_CONTENTS") && Ot(v.FORBID_CONTENTS) ? ye({}, v.FORBID_CONTENTS, Ie) : kn, Be = et(v, "FORBID_TAGS") && Ot(v.FORBID_TAGS) ? ye({}, v.FORBID_TAGS, Ie) : Ct({}), ft = et(v, "FORBID_ATTR") && Ot(v.FORBID_ATTR) ? ye({}, v.FORBID_ATTR, Ie) : Ct({}), ln = et(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? Ct(v.USE_PROFILES) : v.USE_PROFILES : !1, rt = v.ALLOW_ARIA_ATTR !== !1, ht = v.ALLOW_DATA_ATTR !== !1, kt = v.ALLOW_UNKNOWN_PROTOCOLS || !1, gt = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ut = v.SAFE_FOR_TEMPLATES || !1, _t = v.SAFE_FOR_XML !== !1, Je = v.WHOLE_DOCUMENT || !1, nt = v.RETURN_DOM || !1, Gt = v.RETURN_DOM_FRAGMENT || !1, Pt = v.RETURN_TRUSTED_TYPE || !1, st = v.FORCE_BODY || !1, G = v.SANITIZE_DOM !== !1, we = v.SANITIZE_NAMED_PROPS || !1, Nt = v.KEEP_CONTENT !== !1, Me = v.IN_PLACE || !1, Ae = E2(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Ec, Zt = typeof v.NAMESPACE == "string" ? v.NAMESPACE : zt, Bn = et(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ct(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Sn = et(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? Ct(v.HTML_INTEGRATION_POINTS) : ye({}, ["annotation-xml"]);
    const z = et(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? Ct(v.CUSTOM_ELEMENT_HANDLING) : Ko(null);
    if (ue = Ko(null), et(z, "tagNameCheck") && zo(z.tagNameCheck) && (ue.tagNameCheck = z.tagNameCheck), et(z, "attributeNameCheck") && zo(z.attributeNameCheck) && (ue.attributeNameCheck = z.attributeNameCheck), et(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ue.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), ut && (ht = !1), Gt && (nt = !0), ln && (ge = ye({}, Tc), me = Ko(null), ln.html === !0 && (ye(ge, Sc), ye(me, Ac)), ln.svg === !0 && (ye(ge, oa), ye(me, aa), ye(me, es)), ln.svgFilters === !0 && (ye(ge, ra), ye(me, aa), ye(me, es)), ln.mathMl === !0 && (ye(ge, sa), ye(me, Cc), ye(me, es))), He.tagCheck = null, He.attributeCheck = null, et(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? He.tagCheck = v.ADD_TAGS : Ot(v.ADD_TAGS) && (ge === ve && (ge = Ct(ge)), ye(ge, v.ADD_TAGS, Ie))), et(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? He.attributeCheck = v.ADD_ATTR : Ot(v.ADD_ATTR) && (me === q && (me = Ct(me)), ye(me, v.ADD_ATTR, Ie))), et(v, "ADD_URI_SAFE_ATTR") && Ot(v.ADD_URI_SAFE_ATTR) && ye(Dt, v.ADD_URI_SAFE_ATTR, Ie), et(v, "FORBID_CONTENTS") && Ot(v.FORBID_CONTENTS) && (pt === kn && (pt = Ct(pt)), ye(pt, v.FORBID_CONTENTS, Ie)), et(v, "ADD_FORBID_CONTENTS") && Ot(v.ADD_FORBID_CONTENTS) && (pt === kn && (pt = Ct(pt)), ye(pt, v.ADD_FORBID_CONTENTS, Ie)), Nt && (ge["#text"] = !0), Je && ye(ge, ["html", "head", "body"]), ge.table && (ye(ge, ["tbody"]), delete Be.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      x = v.TRUSTED_TYPES_POLICY, $ = x.createHTML("");
    } else
      x === void 0 && (x = F2(m, r)), x !== null && typeof $ == "string" && ($ = x.createHTML(""));
    (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && ge === ve && (ge = Ct(ge)), ce.uponSanitizeAttribute.length > 0 && me === q && (me = Ct(me)), Rt && Rt(v), An = v;
  }, wo = ye({}, [...oa, ...ra, ...x2]), ko = ye({}, [...sa, ...L2]), jn = function(v) {
    let z = k(v);
    (!z || !z.tagName) && (z = {
      namespaceURI: Zt,
      tagName: "template"
    });
    const J = kr(v.tagName), xe = kr(z.tagName);
    return bo[v.namespaceURI] ? v.namespaceURI === qt ? z.namespaceURI === zt ? J === "svg" : z.namespaceURI === Kt ? J === "svg" && (xe === "annotation-xml" || Bn[xe]) : !!wo[J] : v.namespaceURI === Kt ? z.namespaceURI === zt ? J === "math" : z.namespaceURI === qt ? J === "math" && Sn[xe] : !!ko[J] : v.namespaceURI === zt ? z.namespaceURI === qt && !Sn[xe] || z.namespaceURI === Kt && !Bn[xe] ? !1 : !ko[J] && (ro[J] || !wo[J]) : !!(Tn === "application/xhtml+xml" && bo[v.namespaceURI]) : !1;
  }, St = function(v) {
    Wo(t.removed, {
      element: v
    });
    try {
      k(v).removeChild(v);
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
      if (nt || Gt)
        try {
          St(z);
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
      const Fe = yc(v, /^[\r\n\t ]+/);
      J = Fe && Fe[0];
    }
    Tn === "application/xhtml+xml" && Zt === zt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const xe = x ? x.createHTML(v) : v;
    if (Zt === zt)
      try {
        z = new d().parseFromString(xe, Tn);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = Z.createDocument(Zt, "template", null);
      try {
        z.documentElement.innerHTML = vo ? $ : xe;
      } catch {
      }
    }
    const ke = z.body || z.documentElement;
    return v && J && ke.insertBefore(n.createTextNode(J), ke.childNodes[0] || null), Zt === zt ? ae.call(z, Je ? "html" : "body")[0] : Je ? z.documentElement : ke;
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
      let xe = J.data;
      Ho([M, V, B], (ke) => {
        xe = Uo(xe, ke, " ");
      }), J.data = xe, J = z.nextNode();
    }
  }, Ye = function(v) {
    const z = A ? A(v) : null;
    return typeof z != "string" || Ie(z) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, Lt = function(v) {
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
    if (Tt(ce.beforeSanitizeElements, v, null), Ye(v))
      return St(v), !0;
    const J = Ie(v.nodeName);
    if (Tt(ce.uponSanitizeElement, v, {
      tagName: J,
      allowedTags: ge
    }), _t && v.hasChildNodes() && !Lt(v.firstElementChild) && bt(/<[/\w!]/g, v.innerHTML) && bt(/<[/\w!]/g, v.textContent) || _t && v.namespaceURI === zt && J === "style" && Lt(v.firstElementChild) || v.nodeType === En.progressingInstruction || _t && v.nodeType === En.comment && bt(/<[/\w]/g, v.data))
      return St(v), !0;
    if (Be[J] || !(He.tagCheck instanceof Function && He.tagCheck(J)) && !ge[J]) {
      if (!Be[J] && lr(J) && (ue.tagNameCheck instanceof RegExp && bt(ue.tagNameCheck, J) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(J)))
        return !1;
      if (Nt && !pt[J]) {
        const ke = k(v), Fe = E(v);
        if (Fe && ke) {
          const Ft = Fe.length;
          for (let jt = Ft - 1; jt >= 0; --jt) {
            const Yt = w(Fe[jt], !0);
            ke.insertBefore(Yt, b(v));
          }
        }
      }
      return St(v), !0;
    }
    return (O ? O(v) : v.nodeType) === En.element && !jn(v) || (J === "noscript" || J === "noembed" || J === "noframes") && bt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (St(v), !0) : (ut && v.nodeType === En.text && (z = v.textContent, Ho([M, V, B], (ke) => {
      z = Uo(z, ke, " ");
    }), v.textContent !== z && (Wo(t.removed, {
      element: v.cloneNode()
    }), v.textContent = z)), Tt(ce.afterSanitizeElements, v, null), !1);
  }, It = function(v, z, J) {
    if (ft[z] || G && (z === "id" || z === "name") && (J in n || J in Do))
      return !1;
    const xe = me[z] || He.attributeCheck instanceof Function && He.attributeCheck(z, v);
    if (!(ht && !ft[z] && bt(ie, z))) {
      if (!(rt && bt(pe, z))) {
        if (!xe || ft[z]) {
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
            if (!((z === "src" || z === "xlink:href" || z === "href") && v !== "script" && wc(J, "data:") === 0 && _n[v])) {
              if (!(kt && !bt(Se, Uo(J, Q, "")))) {
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
    return !Fs[kr(v)] && bt(H, v);
  }, Bo = function(v) {
    Tt(ce.beforeSanitizeAttributes, v, null);
    const z = v.attributes;
    if (!z || Ye(v))
      return;
    const J = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let xe = z.length;
    for (; xe--; ) {
      const ke = z[xe], Fe = ke.name, Ft = ke.namespaceURI, jt = ke.value, Yt = Ie(Fe), ir = jt;
      let Ne = Fe === "value" ? ir : k2(ir);
      if (J.attrName = Yt, J.attrValue = Ne, J.keepAttr = !0, J.forceKeepAttr = void 0, Tt(ce.uponSanitizeAttribute, v, J), Ne = J.attrValue, we && (Yt === "id" || Yt === "name") && wc(Ne, Ce) !== 0 && (I(Fe, v), Ne = Ce + Ne), _t && bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ne)) {
        I(Fe, v);
        continue;
      }
      if (Yt === "attributename" && yc(Ne, "href")) {
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
      ut && Ho([M, V, B], (Wr) => {
        Ne = Uo(Ne, Wr, " ");
      });
      const cr = Ie(v.nodeName);
      if (!It(cr, Yt, Ne)) {
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
          Ft ? v.setAttributeNS(Ft, Fe, Ne) : v.setAttribute(Fe, Ne), Ye(v) ? St(v) : bc(t.removed);
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
    const xe = [];
    Ho(J, (ke) => {
      Wo(xe, ke);
    });
    for (const ke of xe)
      Vn(ke);
    if (z === En.element) {
      const ke = A ? A(v) : null;
      if (typeof ke == "string" && Ie(ke) === "template") {
        const Fe = v.content;
        Bt(Fe) && Vn(Fe);
      }
    }
  };
  return t.sanitize = function(ne) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, J = null, xe = null, ke = null;
    if (vo = !ne, vo && (ne = "<!-->"), typeof ne != "string" && !Lt(ne) && (ne = C2(ne), typeof ne != "string"))
      throw yr("dirty is not a string, aborting");
    if (!t.isSupported)
      return ne;
    if (Mt || Fn(v), t.removed = [], typeof ne == "string" && (Me = !1), Me) {
      const jt = A ? A(ne) : ne.nodeName;
      if (typeof jt == "string") {
        const Yt = Ie(jt);
        if (!ge[Yt] || Be[Yt])
          throw yr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ye(ne))
        throw yr("root node is clobbered and cannot be sanitized in-place");
      Vn(ne);
    } else if (Lt(ne))
      z = Y("<!---->"), J = z.ownerDocument.importNode(ne, !0), J.nodeType === En.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? z = J : z.appendChild(J), Vn(J);
    else {
      if (!nt && !ut && !Je && // eslint-disable-next-line unicorn/prefer-includes
      ne.indexOf("<") === -1)
        return x && Pt ? x.createHTML(ne) : ne;
      if (z = Y(ne), !z)
        return nt ? null : Pt ? $ : "";
    }
    z && st && St(z.firstChild);
    const Fe = be(Me ? ne : z);
    for (; xe = Fe.nextNode(); )
      Cn(xe), Bo(xe), Bt(xe.content) && _o(xe.content);
    if (Me)
      return ut && We(ne), ne;
    if (nt) {
      if (ut && We(z), Gt)
        for (ke = W.call(z.ownerDocument); z.firstChild; )
          ke.appendChild(z.firstChild);
      else
        ke = z;
      return (me.shadowroot || me.shadowrootmode) && (ke = fe.call(o, ke, !0)), ke;
    }
    let Ft = Je ? z.outerHTML : z.innerHTML;
    return Je && ge["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && bt(D2, z.ownerDocument.doctype.name) && (Ft = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + Ft), ut && Ho([M, V, B], (jt) => {
      Ft = Uo(Ft, jt, " ");
    }), x && Pt ? x.createHTML(Ft) : Ft;
  }, t.setConfig = function() {
    let ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fn(ne), Mt = !0;
  }, t.clearConfig = function() {
    An = null, Mt = !1;
  }, t.isValidAttribute = function(ne, v, z) {
    An || Fn({});
    const J = Ie(ne), xe = Ie(v);
    return It(J, xe, z);
  }, t.addHook = function(ne, v) {
    typeof v == "function" && Wo(ce[ne], v);
  }, t.removeHook = function(ne, v) {
    if (v !== void 0) {
      const z = y2(ce[ne], v);
      return z === -1 ? void 0 : w2(ce[ne], z, 1)[0];
    }
    return bc(ce[ne]);
  }, t.removeHooks = function(ne) {
    ce[ne] = [];
  }, t.removeAllHooks = function() {
    ce = xc();
  }, t;
}
var j2 = Md();
const V2 = {
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
function H2(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : j2.sanitize(e, V2) : "";
}
const W2 = 24, U2 = 120, G2 = 420, K2 = 1200, q2 = 24e3, Z2 = 1800, Y2 = 5200, Aa = (e) => {
  const t = e.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!t || t.index === void 0)
    return { reasoning: "", answer: e };
  const n = e.slice(0, t.index).trim(), o = t[0], r = e.slice(t.index + o.length).trim();
  return {
    reasoning: (t[1] ?? "").trim(),
    answer: [n, r].filter(Boolean).join(`

`)
  };
}, X2 = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return `code-${e.length}-${t.toString(16)}`;
}, Pd = (e, t) => {
  if (e.size <= t) return;
  const n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}, Q2 = (e, t, n) => e.includes("<pre>") ? e.replace(
  /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
  (o, r, l) => {
    const s = document.createElement("textarea");
    s.innerHTML = l;
    const i = s.value, c = X2(i);
    t.codeCache.set(c, i), Pd(t.codeCache, U2);
    const u = r ? ` class="${r}"` : "", d = n("common.copy");
    return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${c}" title="${d}">${d}</button><pre><code${u}>${l}</code></pre></div>`;
  }
) : e, Lc = (e, t, n, o = {}) => {
  const r = o.cache !== !1, l = `${n("common.copy")}\0${e}`, s = r ? t.htmlCache.get(l) : void 0;
  if (s) return s;
  const i = H2(Pe.parse(e, { async: !1 })), c = o.enhanceCodeBlocks === !1 ? i : Q2(i, t, n);
  return r && (t.htmlCache.set(l, c), Pd(t.htmlCache, W2)), c;
}, J2 = (e, t, n, o, r) => {
  if (!t) return !0;
  const l = e.content.length >= q2, s = l ? K2 : G2, i = l ? Y2 : Z2;
  return r - t.updatedAt >= s || e.content.length - t.source.length >= i || !t.reasoning && !!n || !t.answer && !!o;
}, e_ = (e, t, n) => {
  const { reasoning: o, answer: r } = Aa(e.content);
  if (!e.streaming)
    return n.streamingSnapshots.delete(e.id), t === "reasoning" ? o : r;
  const l = Date.now(), s = n.streamingSnapshots.get(e.id);
  return J2(e, s, o, r, l) ? (n.streamingSnapshots.set(e.id, {
    source: e.content,
    reasoning: o,
    answer: r,
    updatedAt: l
  }), t === "reasoning" ? o : r) : t === "reasoning" ? s?.reasoning ?? o : s?.answer ?? r;
}, t_ = (e, t, n, o) => {
  const r = e_(e, t, n);
  if (!e.streaming) return Lc(r, n, o);
  const l = n.streamingSnapshots.get(e.id), s = t === "reasoning" ? "reasoningHtml" : "answerHtml", i = t === "reasoning" ? "reasoning" : "answer";
  if (l?.[i] === r && l[s])
    return l[s];
  const c = Lc(r, n, o, {
    cache: !1,
    enhanceCodeBlocks: !1
  });
  return l?.[i] === r && (l[s] = c), c;
}, n_ = async (e, t, n) => {
  const r = e.target?.closest(".code-copy-btn"), l = r?.dataset.codeId ? t.codeCache.get(r.dataset.codeId) : void 0;
  if (l)
    try {
      await navigator.clipboard.writeText(l), Ee.msg(n("localAi.codeCopied"));
    } catch (s) {
      Ee.msg(`${n("common.copy")}: ${s}`, "error");
    }
}, o_ = (e, t) => {
  e.allowThinking && (t.includes("<think>") && !e.reasoningStartedAt && (e.reasoningStartedAt = Date.now()), t.includes("</think>") && !e.reasoningEndedAt && (e.reasoningEndedAt = Date.now()));
}, r_ = () => {
  const { t: e } = Pr(), t = {
    htmlCache: /* @__PURE__ */ new Map(),
    codeCache: /* @__PURE__ */ new Map(),
    streamingSnapshots: /* @__PURE__ */ new Map()
  };
  return {
    renderMessageMarkdown: (n, o) => t_(n, o, t, e),
    handleMarkdownClick: (n) => n_(n, t, e),
    messageReasoning: (n) => Aa(n).reasoning,
    messageAnswer: (n) => Aa(n).answer,
    recordReasoningProgress: o_,
    discardStreamingMarkdown: (n) => {
      t.streamingSnapshots.delete(n);
    },
    clearMarkdownState: () => {
      t.htmlCache.clear(), t.codeCache.clear(), t.streamingSnapshots.clear();
    }
  };
}, s_ = {
  key: 0,
  class: "attachment-preview-dialog__body"
}, a_ = { class: "attachment-preview-dialog__viewport" }, l_ = ["src", "alt"], i_ = { class: "attachment-preview-dialog__meta" }, c_ = { class: "attachment-preview-dialog__file" }, u_ = ["title"], d_ = /* @__PURE__ */ oe({
  __name: "AttachmentPreviewDialog",
  props: {
    modelValue: { type: Boolean },
    attachment: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { t: r } = Pr(), l = C({
      get: () => n.modelValue,
      set: (s) => o("update:modelValue", s)
    });
    return (s, i) => (S(), ee(a(fd), {
      modelValue: a(l),
      "onUpdate:modelValue": i[0] || (i[0] = (c) => tn(l) ? l.value = c : null),
      title: a(r)("localAi.attachmentPreview"),
      width: "min(1000px, calc(100vw - 40px))",
      "custom-class": "local-ai-attachment-preview-dialog",
      "close-on-click-modal": !0
    }, {
      default: X(() => [
        s.attachment?.dataUrl ? (S(), N("div", s_, [
          f("div", a_, [
            f("img", {
              src: s.attachment.dataUrl,
              alt: s.attachment.name
            }, null, 8, l_)
          ]),
          f("div", i_, [
            f("span", c_, [
              _(a(Lf), {
                theme: "outline",
                size: "16"
              }),
              f("strong", {
                title: s.attachment.name
              }, L(s.attachment.name), 9, u_)
            ]),
            f(
              "span",
              null,
              L(a(gd)(s.attachment.size)),
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
}), f_ = /* @__PURE__ */ sr(d_, [["__scopeId", "data-v-8ead8db0"]]), p_ = /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i, m_ = /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i, h_ = /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i, g_ = /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i, Nd = (e) => /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(e), Ic = /^\s*(\d+)(?:[.)]\s+|、\s*)/, Oc = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
}, v_ = (e) => e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1").replace(/`([^`\n]+)`/g, "$1").replace(/\*\*([^*\n]+)\*\*/g, "$1").replace(/__([^_\n]+)__/g, "$1").replace(/~~([^~\n]+)~~/g, "$1").replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, "$1$2").replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, "$1$2"), b_ = (e) => e.replace(
  /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
  "$1"
).replace(
  /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
  "$1使用 $3"
).replace(
  /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
  "$1use $3"
), y_ = (e) => {
  const t = e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s{0,3}>\s?/, ""), n = t.match(Ic), o = n ? `${n[1]}、` : "", r = t.replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, "").replace(/^\s*[-+*]\s+/, "").replace(Ic, "");
  if (Nd(r))
    return "";
  const l = r.trim();
  return l.startsWith("|") && l.endsWith("|") ? l.slice(1, -1).split("|").map((s) => s.trim()).filter(Boolean).join("；") : `${o}${b_(
    v_(r)
  ).trimEnd()}`;
}, w_ = (e, t) => t ? !1 : !e || m_.test(e), k_ = (e, t) => t && h_.test(e), __ = (e, t) => (t ? e : e.replace(p_, "")).trim(), S_ = (e, t) => !!(e || t), Ca = (e) => /[\u3400-\u9fff]/.test(e), T_ = (e, t = !1) => {
  const n = Ca(e), o = n && t ? `
上一次结果语言错误。本次必须使用简体中文，不得翻译为英文。` : "";
  return {
    systemPrompt: `${n ? Oc.zh : Oc.en}${o}`,
    userPrompt: n ? `改写以下原文：
<原文>
${e}
</原文>` : `Rewrite the following source:
<source>
${e}
</source>`,
    maxTokens: Math.min(640, Math.max(320, Math.ceil(e.length * 1.4)))
  };
}, $c = (e, t) => !Ca(e) || Ca(t), A_ = (e) => {
  const n = e.replace(/^[\s\S]*?<\/think>\s*/i, "").replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/^\s*```(?:markdown|md|text)?\s*$/gim, "").replace(/^\s*```\s*$/gim, "").replace(/\r\n?/g, `
`).trim().split(`
`), o = [];
  for (const r of n) {
    if (Nd(r)) continue;
    const l = y_(r).trim(), s = o.length > 0;
    if (w_(l, s)) continue;
    if (k_(l, s)) break;
    if (g_.test(l)) continue;
    const i = __(l, s);
    S_(i, o.at(-1)) && o.push(i);
  }
  return o.join(`
`).replace(/\n{3,}/g, `

`).trim();
}, _r = "snippets.localAi.pendingPrompt", kl = "snippets.localAi.pendingPromptMode", Dd = "new-chat", C_ = (e, t) => {
  e.setItem(_r, t), e.setItem(
    kl,
    Dd
  );
}, la = (e) => e.getItem(kl) === Dd, E_ = { class: "sidebar-header" }, x_ = { class: "sidebar-brand" }, L_ = { class: "sidebar-title-block" }, I_ = ["title", "aria-pressed"], O_ = { class: "sidebar-nav" }, $_ = ["disabled"], R_ = { class: "sidebar-search" }, M_ = ["placeholder"], P_ = {
  key: 0,
  class: "sidebar-search-count"
}, N_ = { class: "sidebar-section recent-section" }, D_ = { class: "section-title-row" }, z_ = { class: "section-title" }, B_ = { class: "section-title-actions" }, F_ = ["title", "disabled"], j_ = ["title", "disabled"], V_ = {
  key: 0,
  class: "chat-list"
}, H_ = ["tabindex", "aria-disabled", "onClick", "onKeydown"], W_ = { class: "chat-item-copy" }, U_ = { class: "chat-item-title" }, G_ = { class: "chat-item-title-track" }, K_ = { class: "chat-item-title-text" }, q_ = {
  class: "chat-item-title-text chat-item-title-clone",
  "aria-hidden": "true"
}, Z_ = { class: "chat-item-time" }, Y_ = ["title", "disabled", "onClick"], X_ = {
  key: 1,
  class: "sidebar-empty"
}, Q_ = { class: "sidebar-service" }, J_ = { class: "sidebar-service-card" }, e4 = { class: "sidebar-service-icon" }, t4 = { class: "sidebar-service-copy" }, n4 = { class: "chat-panel" }, o4 = { class: "chat-panel-header" }, r4 = { class: "chat-panel-heading" }, s4 = ["title"], a4 = { class: "chat-context-mark" }, l4 = { class: "chat-context-copy" }, i4 = {
  key: 0,
  class: "empty-state"
}, c4 = { class: "empty-hero" }, u4 = { class: "empty-hero-mark" }, d4 = { class: "empty-eyebrow" }, f4 = { class: "quick-prompt-section" }, p4 = { class: "quick-prompt-heading" }, m4 = { class: "quick-prompt-grid" }, h4 = ["onClick"], g4 = { class: "quick-prompt-icon" }, v4 = { class: "quick-prompt-copy" }, b4 = {
  key: 0,
  class: "date-divider"
}, y4 = { class: "message-avatar" }, w4 = { key: 1 }, k4 = { class: "message-body" }, _4 = { class: "user-bubble" }, S4 = {
  key: 0,
  class: "user-message-text"
}, T4 = {
  key: 1,
  class: "message-attachment-list"
}, A4 = ["title", "aria-label", "onClick"], C4 = ["src", "alt"], E4 = {
  key: 1,
  class: "attachment-file-icon"
}, x4 = { key: 2 }, L4 = {
  key: 0,
  class: "message-actions"
}, I4 = ["title", "onClick"], O4 = ["title", "onClick"], $4 = ["title", "onClick"], R4 = { class: "assistant-head" }, M4 = { key: 0 }, P4 = {
  key: 0,
  class: "assistant-content-stack"
}, N4 = ["open"], D4 = { class: "reasoning-summary-title" }, z4 = { key: 0 }, B4 = ["innerHTML"], F4 = ["innerHTML"], j4 = {
  key: 0,
  class: "message-stats"
}, V4 = { class: "message-stats__context" }, H4 = { class: "message-stats__output" }, W4 = { class: "message-stats__elapsed" }, U4 = { class: "message-stats__speed" }, G4 = {
  key: 0,
  class: "message-stats-time"
}, K4 = {
  key: 1,
  class: "message-warning"
}, q4 = {
  key: 2,
  class: "message-actions"
}, Z4 = ["title", "aria-label"], Y4 = ["disabled", "title", "onClick"], X4 = ["disabled", "title", "onClick"], Q4 = ["title", "onClick"], J4 = ["title", "onClick"], eS = ["title", "onClick"], tS = ["title", "onClick"], nS = ["title", "onClick"], oS = ["title"], rS = { class: "composer-dock" }, sS = {
  key: 0,
  class: "attachment-preview-list"
}, aS = ["title", "aria-label", "onClick"], lS = ["src", "alt"], iS = {
  key: 1,
  class: "attachment-file-icon"
}, cS = { class: "attachment-meta" }, uS = ["title", "onClick"], dS = ["placeholder", "readonly", "aria-busy"], fS = { class: "input-toolbar" }, pS = { class: "input-toolbar-left" }, mS = ["title", "disabled"], hS = ["disabled", "title"], gS = ["disabled", "title"], vS = ["title", "aria-pressed"], bS = { class: "input-toolbar-right" }, yS = { class: "model-select-shell" }, wS = { class: "chat-model-option" }, kS = { class: "chat-model-option-name" }, _S = { class: "input-hint" }, SS = ["disabled", "title", "aria-label"], TS = ["disabled", "title", "aria-label"], AS = 96, CS = 4096, ES = 90, xS = 1e3, LS = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Pr(), {
      attachments: n,
      attachmentPicking: o,
      attachmentStatusText: r,
      handleAttachmentDrop: l,
      handleComposerPaste: s,
      pickAttachmentFiles: i,
      removeAttachment: c
    } = Ek(), {
      clearMarkdownState: u,
      discardStreamingMarkdown: d,
      handleMarkdownClick: m,
      messageAnswer: g,
      messageReasoning: w,
      recordReasoningProgress: h,
      renderMessageMarkdown: b
    } = r_(), E = P(""), k = P([]), R = P(""), F = P(!1), O = P(""), A = P(null), x = P(!1), $ = P(!1), K = P(!1), Z = P(!1), re = P(!1), W = P(!1), ae = P(!1), fe = P(!1), ce = P(!0), M = P(!1), V = P(null), B = uo(null);
    let ie = !1, pe = null, Se = !1, Q = null;
    const H = P(null), Ae = P(null), ge = P(""), ve = P(null), me = P(null), q = P(null), ue = C({
      get: () => !!q.value,
      set: (p) => {
        p || (q.value = null);
      }
    }), Be = P(Date.now());
    let ft = null, He = null, rt = null, ht = !1, kt = null, gt = null, ut = !1, _t = 0, Je = null;
    const Mt = /* @__PURE__ */ new WeakMap(), st = (p) => {
      const y = p.querySelector(".chat-item-title-text");
      if (!y) return;
      const j = y.scrollWidth - p.clientWidth > 2, te = y.scrollWidth + 24, T = Math.max(5, te / 34);
      p.style.setProperty("--chat-title-loop-distance", `${te}px`), p.style.setProperty("--chat-title-scroll-duration", `${T}s`), p.classList.toggle("is-overflowing", j);
    }, nt = (p) => {
      window.requestAnimationFrame(() => st(p));
    }, Gt = {
      mounted(p) {
        if (nt(p), typeof ResizeObserver > "u") return;
        const y = new ResizeObserver(
          () => nt(p)
        );
        y.observe(p);
        const j = p.querySelector(".chat-item-title-text");
        j && y.observe(j), Mt.set(p, y);
      },
      updated(p) {
        nt(p);
      },
      beforeUnmount(p) {
        Mt.get(p)?.disconnect(), Mt.delete(p);
      }
    }, Pt = [
      {
        title: "localAi.quickPromptSummary",
        description: "localAi.quickPromptSummaryDesc",
        icon: Cf
      },
      {
        title: "localAi.quickPromptTranslate",
        description: "localAi.quickPromptTranslateDesc",
        icon: Rf
      },
      {
        title: "localAi.quickPromptCode",
        description: "localAi.quickPromptCodeDesc",
        icon: Tf
      },
      {
        title: "localAi.quickPromptRegex",
        description: "localAi.quickPromptRegexDesc",
        icon: Hl
      }
    ], G = C(
      () => (!!O.value.trim() || n.value.length > 0) && !$.value && !x.value
    ), we = C(
      () => !!O.value.trim() && !$.value && !x.value && !V.value
    ), Ce = C(() => $.value || x.value), Nt = C(() => ve.value?.healthy ? t("localAi.serviceHealthy") : ve.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), Me = C(
      () => k.value.find((p) => p.id === R.value) ?? null
    ), ln = C(
      () => Me.value?.title || t("localAi.newChatTitle")
    ), pt = C(() => as(Me.value)), kn = C(() => bk(Me.value)), _n = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", ho = (p) => {
      p.type !== "image" || !p.dataUrl || (q.value = p);
    }, Dt = () => {
      q.value = null;
    }, go = (p) => {
      q.value?.id === p && Dt(), c(p);
    }, Kt = C(
      () => _n(ge.value) || _n(ve.value?.modelPath) || _n(H.value?.modelPath) || t("localAi.localModel")
    ), qt = C(() => Ae.value?.mainModels ?? []), zt = C(() => !!H.value?.mmprojPath), Zt = C(
      () => H.value?.ctxSize ?? ve.value?.ctxSize ?? 4096
    ), vo = C(() => {
      const p = Zt.value, y = H.value?.maxTokens ?? 0;
      return y > 0 ? Math.min(
        Math.max(y, 512),
        Math.max(512, p - 512)
      ) : Math.min(
        Math.max(CS, Math.floor(p * 0.5)),
        Math.max(512, p - 512)
      );
    }), bo = C(
      () => Math.max(512, Zt.value - vo.value)
    ), Jt = C(() => {
      const p = Kt.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(p);
    }), Bn = C(() => {
      const p = E.value.trim().toLowerCase();
      return k.value.filter(
        (y) => !p || y.title.toLowerCase().includes(p) || y.messages.some(
          (j) => !or(j) && j.content.toLowerCase().includes(p)
        )
      ).slice().sort((y, j) => j.updatedAt.localeCompare(y.updatedAt));
    }), Sn = () => {
      const p = A.value;
      if (!p) return;
      p.style.height = "auto";
      const y = p.scrollHeight, j = Number.parseFloat(
        window.getComputedStyle(p).maxHeight
      ), te = Number.isFinite(j) ? j : y;
      p.style.height = `${Math.min(y, te)}px`, p.style.overflowY = y > te ? "auto" : "hidden";
    }, ro = (p, y = !1) => {
      if (typeof p != "string" || !p.trim()) return;
      const j = p.trim();
      if (!ie || y && Ce.value) {
        pe = j, y && (Se = !0);
        return;
      }
      y && (v(), Q = j), O.value = j, localStorage.removeItem(kl), Ge(() => {
        Sn(), A.value?.focus();
      });
    }, Tn = async () => {
      try {
        const p = await Ze("take_pending_local_ai_prompt"), y = typeof p == "string" ? p.trim() : "";
        return y && C_(localStorage, y), y;
      } catch (p) {
        return yt.warn("[LocalAI] take pending prompt failed", p), "";
      }
    }, yo = (p) => {
      const y = p.detail;
      Tn().then((j) => {
        const te = typeof y == "string" ? y.trim() : "", T = j || te;
        !T || !(j || la(localStorage)) && T === Q || ro(T, !0);
      });
    }, ar = () => {
      if (!ie || Ce.value || !pe)
        return;
      const p = pe, y = Se;
      pe = null, Se = !1, ro(p, y);
    }, Ie = async () => {
      await Ge(), Sn(), A.value?.focus();
    };
    de(O, Sn, { flush: "post" }), de(Ce, (p) => {
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
      O.value = t(p), Ie();
    }, Do = async (p, y) => {
      const j = T_(
        p,
        y
      ), te = await Aw({
        messages: [
          {
            role: "system",
            content: j.systemPrompt
          },
          { role: "user", content: j.userPrompt }
        ],
        temperature: y ? 0.05 : 0.1,
        enableThinking: !1,
        maxTokens: j.maxTokens
      });
      return A_(te.content);
    }, zo = async () => {
      const p = O.value.trim();
      if (!(!p || !we.value)) {
        x.value = !0;
        try {
          let y = await Do(p, !1);
          if ($c(p, y) || (y = await Do(p, !0)), !y) throw new Error(t("localAi.enhancePromptEmpty"));
          if (!$c(p, y))
            throw new Error(t("localAi.enhancePromptLanguageMismatch"));
          O.value = y, await Ie();
        } catch (y) {
          Ee.msg(`${t("localAi.enhancePromptFailed")}: ${String(y)}`, "error");
        } finally {
          x.value = !1;
        }
      }
    }, Fn = () => t("localAi.now"), wo = () => {
      const p = (/* @__PURE__ */ new Date()).toISOString(), y = {
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
        currentNodeId: y.id,
        messages: [y]
      };
    }, ko = () => {
      const p = me.value;
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= AS : !0;
    }, jn = () => {
      const p = ko();
      p && (ce.value = !0), M.value = !p && !ce.value;
    }, St = () => {
      rt === null || ht || (window.cancelAnimationFrame(rt), rt = null);
    }, I = () => {
      ce.value = !1, M.value = !ko(), St();
    }, Y = () => {
      const p = me.value;
      p && (ut && p.scrollTop < _t - 1 && I(), _t = p.scrollTop), jn();
    }, be = (p) => {
      p.deltaY >= 0 || (I(), window.requestAnimationFrame(jn));
    }, We = (p) => {
      const y = me.value;
      if (!y) return;
      const j = y.getBoundingClientRect(), te = Math.max(12, y.offsetWidth - y.clientWidth);
      p.clientX < j.right - te || (ut = !0, _t = y.scrollTop, St());
    }, Ye = () => {
      ut = !1, jn();
    }, Bt = (p) => {
      Je = p.touches[0]?.clientY ?? null;
    }, Lt = (p) => {
      const y = p.touches[0]?.clientY;
      y === void 0 || Je === null || (y > Je && I(), Je = y);
    }, Tt = () => {
      Je = null, jn();
    }, Cn = () => {
      if (!kt) return;
      const p = me.value?.querySelector(".assistant-card--streaming") ?? null;
      p !== gt && (gt && kt.unobserve(gt), gt = p, gt && kt.observe(gt));
    }, It = async (p = {}) => {
      await Ge(), Cn(), !(!me.value || !p.force && !ce.value) && (ht = ht || p.force === !0, rt === null && (rt = window.requestAnimationFrame(() => {
        rt = null;
        const j = me.value, te = ht;
        if (ht = !1, !j || !te && !ce.value) return;
        const T = Math.max(0, j.scrollHeight - j.clientHeight);
        Math.abs(j.scrollTop - T) > 1 && (j.scrollTop = T), jn();
      })));
    }, Fs = () => {
      ce.value = !0, It({ force: !0 });
    }, lr = async () => {
      try {
        H.value = await ld(), ge.value = H.value.modelPath ?? "", Ae.value = await id(H.value), Jt.value || (ae.value = !1);
      } catch (p) {
        yt.warn("[LocalAI] refresh chat config failed", p);
      }
    }, Bo = async () => {
      if (!K.value) {
        K.value = !0;
        try {
          ve.value = await cd();
        } catch (p) {
          yt.warn("[LocalAI] refresh chat status failed", p);
        } finally {
          K.value = !1;
        }
      }
    }, _o = async () => {
      try {
        const p = await Ew();
        if (k.value = p.map((y) => {
          const j = y.messages?.length ? y.messages : y.turns.map((T) => ({
            id: T.id,
            role: T.role,
            content: T.content,
            createdAt: T.createdAt
          })), te = vk(
            j,
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
        }), !k.value.some((y) => y.id === R.value)) {
          const y = k.value[0]?.id ?? "";
          y !== R.value && (O.value = "", n.value = [], Dt()), R.value = y;
        }
      } catch (p) {
        yt.warn("[LocalAI] refresh histories failed", p);
      }
    }, Vn = async () => {
      Ce.value || await Promise.all([lr(), Bo(), _o()]);
    }, ne = async (p) => {
      if (!p) return;
      const y = as(p).map((j) => ({
        id: j.id,
        role: j.role,
        content: j.content,
        createdAt: j.createdAt
      }));
      await Lw({
        id: p.id,
        title: p.title,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        turns: y,
        currentNodeId: p.currentNodeId,
        messages: p.messages
      });
    };
    function v() {
      if (Ce.value) return;
      const p = wo();
      k.value.unshift(p), R.value = p.id, O.value = "", n.value = [], Dt(), Ie();
    }
    const z = () => {
      if (Me.value) return;
      const p = wo();
      k.value.unshift(p), R.value = p.id;
    }, J = (p) => {
      if (Ce.value) return;
      R.value !== p && (O.value = "", n.value = [], Dt()), R.value = p;
      const y = Me.value;
      y && !y.currentNodeId && (y.currentNodeId = Vr(y.messages, jr(y.messages)?.id) ?? null), ce.value = !0, It({ force: !0 });
    }, xe = async (p) => {
      if (Ce.value) return;
      const y = R.value === p;
      k.value = k.value.filter((j) => j.id !== p);
      try {
        await Iw(p);
      } catch (j) {
        yt.warn("[LocalAI] delete history failed", j), await _o(), Ee.msg(`${t("common.operationFailed")}: ${String(j)}`, "error");
        return;
      }
      y && (R.value = k.value[0]?.id ?? "", O.value = "", n.value = [], Dt());
    }, ke = async () => {
      if (!(Ce.value || Z.value)) {
        Z.value = !0;
        try {
          await Ow(), k.value = [], R.value = "", E.value = "", O.value = "", n.value = [], re.value = !1, Dt(), u(), Ee.msg(t("localAi.clearAllChatsSuccess"));
        } catch (p) {
          yt.warn("[LocalAI] clear histories failed", p), Ee.msg(`${t("common.operationFailed")}: ${String(p)}`, "error");
        } finally {
          Z.value = !1;
        }
      }
    }, Fe = async () => {
      if (!H.value || !ge.value) return;
      const p = {
        ...H.value,
        modelPath: ge.value
      };
      try {
        H.value = await rs(p), ve.value?.running && (ve.value = await ud()), Ee.msg(t("localAi.modelChanged"));
      } catch (y) {
        await lr(), Ee.msg(`${t("localAi.configSaveFailed")}: ${y}`, "error");
      }
    }, Ft = (p) => !!g(p.content), jt = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !Ft(p)), Yt = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const y = p.reasoningEndedAt ?? (p.streaming ? Be.value : Date.now());
      return Math.max(0, (y - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, ir = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Yt(p)
    }), Ne = (p) => new Date(
      p.createdAt || Me.value?.updatedAt || Date.now()
    ), cr = (p) => Ne(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Wr = (p, y) => Ne(p).toDateString() === Ne(y).toDateString(), _l = (p) => Ne(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), zd = (p) => {
      const y = kn.value[p]?.message;
      if (!y) return !1;
      if (p === 0) return !_l(y);
      const j = kn.value[p - 1]?.message;
      return j ? Wr(j, y) ? Ne(y).getTime() - Ne(j).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, Bd = (p) => {
      const y = Ne(p), j = y.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), te = y.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return _l(p) ? te : `${j} ${te}`;
    }, Fd = (p) => p.streaming ? jt(p) ? t("localAi.thinking") : t("localAi.generating") : cr(p), jd = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Vd = async () => {
      const p = O.value.trim();
      if (!p || Ce.value) return;
      let y;
      try {
        const j = await Yw();
        y = Qw(j);
      } catch (j) {
        yt.warn("[LocalAI] search-engines plugin unavailable", j), Ee.msg(t("localAi.webSearchPluginUnavailable"), "warning");
        return;
      }
      if (!y) {
        Ee.msg(t("localAi.webSearchPluginNoDefault"), "warning");
        return;
      }
      try {
        await Xw(y, p, { hideSearchWindow: !1 });
      } catch (j) {
        yt.warn("[LocalAI] search-engines plugin search failed", j), Ee.msg(
          `${t("localAi.webSearchPluginFailed")}: ${String(j)}`,
          "error"
        );
      }
    }, Hd = (p = Me.value) => {
      const y = pk(), j = nr([y]), te = Math.max(
        512,
        bo.value - j
      );
      return [
        y,
        ...gk(
          as(p).filter((T) => !T.streaming && T.role !== "system").map((T) => ({
            role: T.role,
            content: T.role === "user" ? dk(T) : T.content
          })),
          te,
          t("localAi.previousAnswerTail")
        )
      ];
    }, Wd = () => ck(H.value?.maxTokens ?? 0), Sl = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? H.value?.ctxSize ?? ve.value?.ctxSize ?? 4096
    ), Tl = (p) => {
      const y = Be.value, j = p.stats?.promptTokens ?? p.promptTokens ?? 0, te = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? ea(p.content) : bd(p.content)), T = Sl(p), _e = Math.min(
        p.stats?.totalTokens ?? j + te,
        T
      ), se = Math.max(
        0,
        (p.stats?.generationTimeMs ?? p.elapsedMs ?? y - Ne(p).getTime()) / 1e3
      ), Te = p.stats?.tokensPerSecond ?? (se > 0 ? te / se : 0);
      return {
        context: _e,
        contextMax: T,
        contextPercent: Math.min(100, Math.round(_e / T * 100)),
        output: te,
        outputMax: (H.value?.maxTokens ?? 0) > 0 ? String(H.value?.maxTokens) : "∞",
        seconds: se.toFixed(1),
        speed: Te.toFixed(1)
      };
    }, Ud = C(() => (Be.value, new Map(
      kn.value.map(({ message: p }) => [
        p.id,
        Tl(p)
      ])
    ))), so = (p) => Ud.value.get(p.id) ?? Tl(p), Al = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : p.stats?.finishReason === "length" ? (p.stats?.totalTokens ?? so(p).context) >= Sl(p) - 8 ? t("localAi.contextLimitReached") : t("localAi.outputLimitReached") : "", Cl = (p) => {
      const y = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(y) ? t("localAi.contextExceeded") : y;
    }, Gd = (p) => {
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
        for (let Vt = te.length - Te * 2; Vt >= 0 && te.slice(Vt, Vt + Te).join("\0") === Oe; Vt -= Te)
          Hn += 1;
        if (Hn >= Math.max(24, Math.ceil(72 / Te))) return !0;
      }
      return !1;
    }, El = () => {
      He || (Be.value = Date.now(), He = setInterval(() => {
        Be.value = Date.now();
      }, xS));
    }, js = () => {
      He && (clearInterval(He), He = null, Be.value = Date.now());
    }, xl = (p) => {
      const y = dd();
      return W.value = !1, V.value = y, B.value = p, y;
    }, Ur = (p) => {
      p && V.value !== p || (V.value = null, B.value = null);
    }, Ll = (p, y) => {
      p.streaming = !1, p.stopped = !0, p.interrupted = !1, p.error = "", p.reasoningStartedAt && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()), y !== void 0 && (p.elapsedMs = y), d(p.id), Be.value = Date.now();
    }, Il = async (p, y, j) => {
      const te = performance.now();
      let T = Hd(y), _e = "", se = null, Te = null, Oe = !1, Hn = !1;
      if (W.value) {
        Ll(p, performance.now() - te), Ur(j);
        return;
      }
      T = mk(T), p.promptTokens = nr(T), p.contextSize = Zt.value;
      const Vt = async () => {
        if (!_e) {
          se = null, Te?.(), Te = null;
          return;
        }
        const vt = W.value ? _e.length : _e.length > 4e3 ? 900 : _e.length > 1200 ? 520 : _e.length > 240 ? 180 : 64;
        if (p.content += _e.slice(0, vt), _e = _e.slice(vt), p.estimatedCompletionTokens = ea(
          p.content
        ), !Hn && !W.value && Gd(p.content) && (Hn = !0, W.value = !0, p.repetitionStopped = !0, Xs(j).catch(
          (cn) => yt.warn("[LocalAI] repetition stop failed", cn)
        )), await It(), !_e) {
          se = null, Te?.(), Te = null;
          return;
        }
        se = window.setTimeout(() => {
          Vt().catch(
            (cn) => yt.warn("[LocalAI] stream pump failed", cn)
          );
        }, ES);
      }, Vs = (vt) => {
        vt && (h(p, vt), _e += vt, se === null && (se = window.setTimeout(() => {
          Vt().catch(
            (cn) => yt.warn("[LocalAI] stream pump failed", cn)
          );
        }, 32)));
      }, zl = async () => {
        !_e && se === null || await new Promise((vt) => {
          Te = vt;
        });
      }, Fo = await Cw(
        {
          messages: T,
          maxTokens: Wd(),
          enableThinking: p.allowThinking === !0
        },
        (vt) => {
          W.value || (Oe = !0, Vs(vt));
        },
        {
          requestId: j,
          onStats: (vt) => {
            const cn = uk(p.stats, vt);
            p.stats = cn, cn.ctxSize && (p.contextSize = cn.ctxSize), cn.completionTokens !== void 0 && (p.estimatedCompletionTokens = cn.completionTokens), Be.value = Date.now();
          }
        }
      ).catch(async (vt) => {
        throw await zl(), vt;
      });
      if (!Oe)
        Vs(Fo.content);
      else if (!W.value) {
        const vt = p.content.length + _e.length;
        Fo.content.length > vt && Vs(Fo.content.slice(vt));
      }
      await zl(), !W.value && Fo.content && p.content !== Fo.content && (p.content = Fo.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? ea(p.content), d(p.id), p.streaming = !1, p.elapsedMs = performance.now() - te, p.stopped = W.value, p.interrupted = !1, p.error = "", Be.value = Date.now(), Ur(j);
    }, Kd = async () => {
      const p = V.value;
      if (!$.value || W.value) return;
      W.value = !0;
      const y = B.value;
      if (y && Ll(
        y,
        Math.max(0, Date.now() - Ne(y).getTime())
      ), !!p)
        try {
          await Xs(p);
        } catch (j) {
          yt.warn("[LocalAI] cancel stream failed", j);
        }
    }, qd = () => {
      if (!O.value.trim() && !n.value.length) return !1;
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
      ) && !zt.value ? (Ee.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, Ol = async () => {
      const p = O.value.trim();
      if (Ce.value || !qd()) return;
      z();
      const y = (/* @__PURE__ */ new Date()).toISOString(), j = Qs(n.value), te = p || j[0]?.name || "", T = Me.value;
      if (!T) return;
      const _e = ta(T, {
        id: Ao("user"),
        role: "user",
        content: p,
        createdAt: y,
        attachments: j
      }), se = ta(T, {
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
      const Te = xl(se);
      El(), await It({ force: !0 });
      const Oe = performance.now();
      try {
        await Il(se, T, Te), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await ne(T)), await Bo();
      } catch (Hn) {
        if (W.value)
          T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await ne(T);
        else {
          O.value = p, n.value = j;
          const Vt = Cl(Hn);
          Ee.msg(`${t("localAi.chatFailed")}: ${Vt}`, "error"), se.error = Vt, se.interrupted = !!se.content.trim(), se.interrupted || (se.content = Vt), T && (T.title = T.title === t("localAi.newChatTitle") ? te.slice(0, 28) : T.title, T.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), T.updatedAtLabel = new Date(T.updatedAt).toLocaleString(), await ne(T));
        }
        se.streaming = !1, d(se.id), se.elapsedMs = performance.now() - Oe;
      } finally {
        $.value = !1, Ur(Te), js(), await It();
      }
    }, Zd = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), Ol());
    }, $l = (p) => {
      (p.ctrlKey || p.metaKey) && p.key.toLowerCase() === "n" && !p.shiftKey && !p.altKey && (p.preventDefault(), v());
    }, Yd = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Xd = (p) => {
      const y = new Date(p), j = /* @__PURE__ */ new Date(), te = j.getTime() - y.getTime(), T = 24 * 60 * 60 * 1e3;
      return y.toDateString() === j.toDateString() ? y.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : te < T * 2 ? t("localAi.yesterday") : te < T * 7 ? t("localAi.daysAgo", {
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
      if ($.value) return;
      const y = Me.value;
      if (!y) return;
      const j = wk(
        y.messages,
        y.currentNodeId,
        p
      );
      if (!j) return;
      const te = new Set(
        y.messages.filter((Oe) => j.deletedIds.has(Oe.id)).flatMap((Oe) => Oe.attachments ?? []).map((Oe) => Oe.id)
      );
      q.value && te.has(q.value.id) && Dt();
      const T = y.messages, _e = y.currentNodeId, se = y.updatedAt, Te = y.updatedAtLabel;
      if (y.messages = j.messages, y.currentNodeId = j.currentNodeId, !y.messages.some((Oe) => !or(Oe))) {
        await xe(y.id);
        return;
      }
      y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString();
      try {
        await ne(y);
      } catch (Oe) {
        y.messages = T, y.currentNodeId = _e, y.updatedAt = se, y.updatedAtLabel = Te, yt.warn("[LocalAI] delete message failed", Oe), Ee.msg(`${t("common.operationFailed")}: ${String(Oe)}`, "error");
      }
    }, Pl = (p) => {
      $.value || (O.value = p.content, n.value = Qs(p.attachments), Me.value && p.parentId && (Me.value.currentNodeId = p.parentId), Ie());
    }, Nl = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), Dl = (p, y) => {
      if ($.value) return;
      const j = Me.value;
      if (!j) return;
      const te = p.siblingCurrentIndex + y, T = p.siblingLeafNodeIds[te];
      T && (j.currentNodeId = T, ce.value = !0, It({ force: !0 }));
    }, Qd = async (p) => {
      const y = Me.value;
      if (!y || $.value) return;
      const j = y.messages.find((Oe) => Oe.id === p);
      if (!j || j.role !== "assistant") return;
      const te = wd(y.messages, j.id);
      if (!te.length) return;
      const T = (/* @__PURE__ */ new Date()).toISOString(), _e = /* @__PURE__ */ new Map(), se = te.map((Oe, Hn) => {
        const Vt = Ao(Hn === 0 ? "root" : Oe.role);
        return _e.set(Oe.id, Vt), {
          ...Oe,
          id: Vt,
          parentId: Oe.parentId ? _e.get(Oe.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: Qs(Oe.attachments)
        };
      });
      for (let Oe = 0; Oe < se.length - 1; Oe += 1)
        se[Oe].childIds = [se[Oe + 1].id];
      const Te = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${y.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: T,
        updatedAt: T,
        updatedAtLabel: Fn(),
        currentNodeId: se.at(-1)?.id ?? null,
        messages: se
      };
      k.value.unshift(Te), R.value = Te.id, O.value = "", n.value = [], ce.value = !0, await ne(Te), await It({ force: !0 }), Ee.msg(t("localAi.branchCreated"));
    }, Jd = async (p) => {
      const y = Me.value;
      if (!y || $.value) return;
      const j = y.messages.find((se) => se.id === p);
      if (!j || j.role !== "assistant" || !j.parentId) return;
      y.currentNodeId = j.parentId;
      const te = ta(y, {
        id: Ao("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: j.parentId,
        streaming: !0,
        allowThinking: ae.value && Jt.value
      });
      $.value = !0;
      const T = xl(te);
      El(), await It({ force: !0 });
      const _e = performance.now();
      try {
        await Il(te, y, T), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await ne(y);
      } catch (se) {
        if (W.value)
          y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await ne(y);
        else {
          const Te = Cl(se);
          Ee.msg(`${t("localAi.chatFailed")}: ${Te}`, "error"), te.error = Te, te.interrupted = !!te.content.trim(), te.interrupted || (te.content = Te), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await ne(y);
        }
        te.streaming = !1, d(te.id), te.elapsedMs = performance.now() - _e;
      } finally {
        $.value = !1, Ur(T), js(), await It();
      }
    };
    return tt(async () => {
      window.addEventListener("local-ai-prompt-ready", yo), ro(
        localStorage.getItem(_r),
        la(localStorage)
      ), Sn(), typeof ResizeObserver < "u" && (kt = new ResizeObserver(() => {
        ce.value && It();
      })), window.addEventListener("pointerup", Ye), window.addEventListener("pointercancel", Ye), window.addEventListener("keydown", $l);
      try {
        await Vn();
      } finally {
        const p = await Tn();
        ie = !0;
        const y = !!p || Se || la(localStorage), j = p || pe || localStorage.getItem(_r);
        pe = null, Se = !1, ro(j, y);
      }
      ft = setInterval(() => {
        Bo().catch(
          (p) => yt.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), de(Jt, (p) => {
      p || (ae.value = !1);
    }), La(() => {
      ie = !1, pe = null, Se = !1, Q = null, window.removeEventListener("local-ai-prompt-ready", yo), ft && clearInterval(ft), rt !== null && (window.cancelAnimationFrame(rt), rt = null), kt?.disconnect(), kt = null, gt = null, window.removeEventListener("pointerup", Ye), window.removeEventListener("pointercancel", Ye), window.removeEventListener("keydown", $l), V.value && Xs(V.value), u(), js();
    }), (p, y) => {
      const j = nd, te = td;
      return S(), N(
        "main",
        {
          class: D([
            "local-ai-chat-shell",
            a(F) ? "local-ai-chat-shell--sidebar-collapsed" : "",
            a($) ? "local-ai-chat-shell--sending" : ""
          ])
        },
        [
          f(
            "aside",
            {
              class: D([
                "chat-sidebar",
                a(F) ? "chat-sidebar--collapsed" : ""
              ])
            },
            [
              f("header", E_, [
                f("div", x_, [
                  f("div", L_, [
                    f(
                      "h2",
                      null,
                      L(a(t)("localAi.chatTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      L(a(t)("localAi.chatPrivacySubtitle")),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                f("button", {
                  class: "icon-action-btn sidebar-collapse-btn",
                  type: "button",
                  title: a(F) ? a(t)("localAi.expandSidebar") : a(t)("localAi.collapseSidebar"),
                  "aria-pressed": a(F),
                  onClick: y[0] || (y[0] = (T) => F.value = !a(F))
                }, [
                  _(a(Vl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, I_)
              ]),
              f("div", O_, [
                f("button", {
                  class: "sidebar-new-chat-btn",
                  type: "button",
                  disabled: a(Ce),
                  onClick: v
                }, [
                  _(a(Hs), {
                    theme: "outline",
                    size: "18"
                  }),
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.newChat")),
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
                ], 8, $_),
                f("label", R_, [
                  _(a(Ul), {
                    theme: "outline",
                    size: "16"
                  }),
                  it(f("input", {
                    "onUpdate:modelValue": y[1] || (y[1] = (T) => tn(E) ? E.value = T : null),
                    placeholder: a(t)("localAi.searchHistory")
                  }, null, 8, M_), [
                    [Lr, a(E)]
                  ]),
                  a(E) ? (S(), N(
                    "span",
                    P_,
                    L(a(Bn).length),
                    1
                    /* TEXT */
                  )) : U("v-if", !0)
                ])
              ]),
              f("section", N_, [
                f("div", D_, [
                  f(
                    "div",
                    z_,
                    L(a(t)("localAi.recent")),
                    1
                    /* TEXT */
                  ),
                  f("div", B_, [
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: a(t)("localAi.clearAllChats"),
                      disabled: a(Ce) || a(Z) || !a(k).length,
                      onClick: y[2] || (y[2] = (T) => re.value = !0)
                    }, [
                      _(a(ur), {
                        theme: "outline",
                        size: "14"
                      })
                    ], 8, F_),
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: a(t)("plugins.refresh"),
                      disabled: a(Ce) || a(K) || a(Z),
                      onClick: Vn
                    }, [
                      _(a(dr), {
                        class: D({ "animate-spin": a(K) }),
                        theme: "outline",
                        size: "14"
                      }, null, 8, ["class"])
                    ], 8, j_)
                  ])
                ]),
                a(Bn).length ? (S(), N("div", V_, [
                  (S(!0), N(
                    at,
                    null,
                    Ln(a(Bn), (T) => (S(), N("div", {
                      key: T.id,
                      class: D([
                        "chat-list-item",
                        a(R) === T.id ? "active" : "",
                        a(Ce) ? "disabled" : ""
                      ]),
                      role: "button",
                      tabindex: a(Ce) ? -1 : 0,
                      "aria-disabled": a(Ce),
                      onClick: (_e) => J(T.id),
                      onKeydown: pn(Ue((_e) => J(T.id), ["prevent"]), ["enter"])
                    }, [
                      f("span", W_, [
                        it((S(), N("span", U_, [
                          f("span", G_, [
                            f(
                              "span",
                              K_,
                              L(T.title),
                              1
                              /* TEXT */
                            ),
                            f(
                              "span",
                              q_,
                              L(T.title),
                              1
                              /* TEXT */
                            )
                          ])
                        ])), [
                          [Gt]
                        ]),
                        f(
                          "span",
                          Z_,
                          L(Xd(T.updatedAt)),
                          1
                          /* TEXT */
                        )
                      ]),
                      f("button", {
                        class: "chat-item-delete",
                        type: "button",
                        title: a(t)("common.delete"),
                        disabled: a(Ce),
                        onClick: Ue((_e) => xe(T.id), ["stop"])
                      }, [
                        _(a(ur), {
                          theme: "outline",
                          size: "13"
                        })
                      ], 8, Y_)
                    ], 42, H_))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (S(), N(
                  "div",
                  X_,
                  L(a(t)("common.empty")),
                  1
                  /* TEXT */
                ))
              ]),
              f("footer", Q_, [
                f("div", J_, [
                  f("span", e4, [
                    _(a(Ws), {
                      theme: "outline",
                      size: "15"
                    })
                  ]),
                  f("span", t4, [
                    f(
                      "strong",
                      null,
                      L(a(Nt)),
                      1
                      /* TEXT */
                    ),
                    f(
                      "small",
                      null,
                      L(a(ve)?.healthy ? a(Kt) : a(t)("localAi.onDemandHint")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f(
                    "span",
                    {
                      class: D([
                        "service-status-dot",
                        a(ve)?.healthy ? "ready" : "stopped"
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
                  _(a(Nc), {
                    theme: "outline",
                    size: "16"
                  }),
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.settings")),
                    1
                    /* TEXT */
                  ),
                  _(a(Wl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ])
            ],
            2
            /* CLASS */
          ),
          f("section", n4, [
            f("header", o4, [
              f("div", r4, [
                a(F) ? (S(), N("button", {
                  key: 0,
                  class: "panel-sidebar-toggle",
                  type: "button",
                  title: a(t)("localAi.expandSidebar"),
                  onClick: y[3] || (y[3] = (T) => F.value = !1)
                }, [
                  _(a(Vl), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, s4)) : U("v-if", !0),
                f("div", a4, [
                  _(a(Ws), {
                    theme: "outline",
                    size: "18"
                  })
                ]),
                f("div", l4, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.chatSubtitle")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "h1",
                    null,
                    L(a(ln)),
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
                onTouchmovePassive: Lt,
                onTouchend: Tt
              },
              [
                a(pt).length ? U("v-if", !0) : (S(), N("section", i4, [
                  f("div", c4, [
                    f("div", u4, [
                      _(a(If), {
                        theme: "outline",
                        size: "30"
                      })
                    ]),
                    f("span", d4, [
                      y[18] || (y[18] = f(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      )),
                      mt(
                        " " + L(a(t)("localAi.privateWorkspace")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f(
                      "h2",
                      null,
                      L(a(t)("localAi.chatWelcomeTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      L(a(t)("localAi.chatWelcomeDesc")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", f4, [
                    f("div", p4, [
                      f(
                        "span",
                        null,
                        L(a(t)("localAi.quickStart")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "small",
                        null,
                        L(a(t)("localAi.quickStartHint")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", m4, [
                      (S(), N(
                        at,
                        null,
                        Ln(Pt, (T) => f("button", {
                          key: T.title,
                          class: "quick-prompt-card",
                          type: "button",
                          onClick: (_e) => An(T.title)
                        }, [
                          f("span", g4, [
                            (S(), ee(wt(T.icon), {
                              theme: "outline",
                              size: "17"
                            }))
                          ]),
                          f("span", v4, [
                            f(
                              "strong",
                              null,
                              L(a(t)(T.title)),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              L(a(t)(T.description)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _(a(Wl), {
                            theme: "outline",
                            size: "14"
                          })
                        ], 8, h4)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ])
                ])),
                (S(!0), N(
                  at,
                  null,
                  Ln(a(kn), (T, _e) => (S(), N(
                    at,
                    {
                      key: T.message.id
                    },
                    [
                      zd(_e) ? (S(), N("div", b4, [
                        f(
                          "span",
                          null,
                          L(Bd(T.message)),
                          1
                          /* TEXT */
                        )
                      ])) : U("v-if", !0),
                      f(
                        "article",
                        {
                          class: D(["message-row", `message-row--${T.message.role}`])
                        },
                        [
                          f("div", y4, [
                            T.message.role === "assistant" ? (S(), ee(a(Ws), {
                              key: 0,
                              theme: "outline",
                              size: "18"
                            })) : (S(), N(
                              "span",
                              w4,
                              L(a(t)("localAi.youShort")),
                              1
                              /* TEXT */
                            ))
                          ]),
                          f("div", k4, [
                            T.message.role === "user" ? (S(), N(
                              at,
                              { key: 0 },
                              [
                                f("div", _4, [
                                  T.message.content ? (S(), N(
                                    "div",
                                    S4,
                                    L(T.message.content),
                                    1
                                    /* TEXT */
                                  )) : U("v-if", !0),
                                  T.message.attachments?.length ? (S(), N("div", T4, [
                                    (S(!0), N(
                                      at,
                                      null,
                                      Ln(T.message.attachments, (se) => (S(), N(
                                        "div",
                                        {
                                          key: se.id,
                                          class: D([
                                            "message-attachment-chip",
                                            se.type === "image" && se.dataUrl ? "message-attachment-chip--image" : ""
                                          ])
                                        },
                                        [
                                          se.type === "image" && se.dataUrl ? (S(), N("button", {
                                            key: 0,
                                            class: "attachment-image-preview-btn",
                                            type: "button",
                                            title: se.name,
                                            "aria-label": a(t)("localAi.previewAttachment"),
                                            onClick: (Te) => ho(se)
                                          }, [
                                            f("img", {
                                              src: se.dataUrl,
                                              alt: se.name
                                            }, null, 8, C4)
                                          ], 8, A4)) : (S(), N(
                                            "span",
                                            E4,
                                            L(se.type === "text" ? "TXT" : "FILE"),
                                            1
                                            /* TEXT */
                                          )),
                                          se.type === "image" && se.dataUrl ? U("v-if", !0) : (S(), N(
                                            "span",
                                            x4,
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
                                T.message.streaming ? U("v-if", !0) : (S(), N("div", L4, [
                                  f("button", {
                                    type: "button",
                                    title: a(t)("common.copy"),
                                    onClick: (se) => Rl(T.message)
                                  }, [
                                    _(a(Fl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, I4),
                                  f("button", {
                                    type: "button",
                                    title: a(t)("common.edit"),
                                    onClick: (se) => Pl(T.message)
                                  }, [
                                    _(a(Hs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, O4),
                                  f("button", {
                                    type: "button",
                                    title: a(t)("common.delete"),
                                    onClick: (se) => Ml(T.message.id)
                                  }, [
                                    _(a(ur), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, $4)
                                ]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (S(), N(
                              at,
                              { key: 1 },
                              [
                                f("div", R4, [
                                  f(
                                    "span",
                                    null,
                                    L(a(Kt)),
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? (S(), N(
                                    "small",
                                    M4,
                                    L(Fd(T.message)),
                                    1
                                    /* TEXT */
                                  )) : U("v-if", !0)
                                ]),
                                f(
                                  "div",
                                  {
                                    class: D(["assistant-card", {
                                      "assistant-card--streaming": T.message.streaming
                                    }])
                                  },
                                  [
                                    T.message.content ? (S(), N("div", P4, [
                                      T.message.allowThinking && a(w)(T.message.content) ? (S(), N("details", {
                                        key: 0,
                                        class: "reasoning-panel",
                                        open: T.message.streaming && jt(T.message)
                                      }, [
                                        f("summary", null, [
                                          f("span", D4, [
                                            _(a(Bl), {
                                              theme: "outline",
                                              size: "14"
                                            }),
                                            mt(
                                              " " + L(ir(T.message)),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          T.message.streaming ? (S(), N(
                                            "small",
                                            z4,
                                            L(jt(T.message) ? a(t)("localAi.thinking") : a(t)("localAi.generating")),
                                            1
                                            /* TEXT */
                                          )) : U("v-if", !0)
                                        ]),
                                        f("div", {
                                          class: "message-content markdown-body",
                                          onClick: y[4] || (y[4] = //@ts-ignore
                                          (...se) => a(m) && a(m)(...se)),
                                          innerHTML: a(b)(T.message, "reasoning")
                                        }, null, 8, B4)
                                      ], 8, N4)) : U("v-if", !0),
                                      a(g)(T.message.content) ? (S(), N("div", {
                                        key: 1,
                                        class: "message-content markdown-body",
                                        onClick: y[5] || (y[5] = //@ts-ignore
                                        (...se) => a(m) && a(m)(...se)),
                                        innerHTML: a(b)(T.message, "answer")
                                      }, null, 8, F4)) : U("v-if", !0)
                                    ])) : (S(), N(
                                      "div",
                                      {
                                        key: 1,
                                        class: D([
                                          "message-content",
                                          T.message.stopped ? "" : "loading-text"
                                        ])
                                      },
                                      L(T.message.stopped ? a(t)("localAi.generationStopped") : jd(T.message)),
                                      3
                                      /* TEXT, CLASS */
                                    ))
                                  ],
                                  2
                                  /* CLASS */
                                ),
                                T.message.content ? (S(), N("div", j4, [
                                  f(
                                    "span",
                                    V4,
                                    L(a(t)("localAi.contextLabel")) + ": " + L(so(T.message).context) + "/" + L(so(T.message).contextMax) + " (" + L(so(T.message).contextPercent) + "%) ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    H4,
                                    L(a(t)("localAi.outputLabel")) + ": " + L(so(T.message).output) + "/" + L(so(T.message).outputMax),
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    W4,
                                    L(so(T.message).seconds) + "s ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    U4,
                                    L(so(T.message).speed) + " t/s ",
                                    1
                                    /* TEXT */
                                  ),
                                  T.message.streaming ? U("v-if", !0) : (S(), N(
                                    "span",
                                    G4,
                                    L(cr(T.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ])) : U("v-if", !0),
                                Al(T.message) ? (S(), N(
                                  "div",
                                  K4,
                                  L(Al(T.message)),
                                  1
                                  /* TEXT */
                                )) : U("v-if", !0),
                                T.message.streaming ? U("v-if", !0) : (S(), N("div", q4, [
                                  T.siblingLeafNodeIds.length > 1 ? (S(), N("div", {
                                    key: 0,
                                    class: "message-version-switcher",
                                    title: Nl(T),
                                    "aria-label": Nl(T)
                                  }, [
                                    f("button", {
                                      type: "button",
                                      disabled: T.siblingCurrentIndex <= 0,
                                      title: a(t)("localAi.previousVersion"),
                                      onClick: (se) => Dl(T, -1)
                                    }, " ‹ ", 8, Y4),
                                    f(
                                      "span",
                                      null,
                                      L(T.siblingCurrentIndex + 1) + " / " + L(T.siblingLeafNodeIds.length),
                                      1
                                      /* TEXT */
                                    ),
                                    f("button", {
                                      type: "button",
                                      disabled: T.siblingCurrentIndex >= T.siblingLeafNodeIds.length - 1,
                                      title: a(t)("localAi.nextVersion"),
                                      onClick: (se) => Dl(T, 1)
                                    }, " › ", 8, X4)
                                  ], 8, Z4)) : U("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: a(t)("common.copy"),
                                    onClick: (se) => Rl(T.message)
                                  }, [
                                    _(a(Fl), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, Q4),
                                  T.message.role === "assistant" ? (S(), N("button", {
                                    key: 1,
                                    type: "button",
                                    title: a(t)("localAi.regenerate"),
                                    onClick: (se) => Jd(T.message.id)
                                  }, [
                                    _(a(dr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, J4)) : U("v-if", !0),
                                  T.message.role === "assistant" ? (S(), N("button", {
                                    key: 2,
                                    type: "button",
                                    title: a(t)("localAi.branchChat"),
                                    onClick: (se) => Qd(T.message.id)
                                  }, [
                                    _(a(Ef), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, eS)) : U("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: a(t)("common.edit"),
                                    onClick: (se) => Pl(T.message)
                                  }, [
                                    _(a(Hs), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, tS),
                                  f("button", {
                                    type: "button",
                                    title: a(t)("common.delete"),
                                    onClick: (se) => Ml(T.message.id)
                                  }, [
                                    _(a(ur), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, nS)
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
            a(M) ? (S(), N("button", {
              key: 0,
              class: "scroll-bottom-btn",
              type: "button",
              title: a(t)("localAi.jumpToLatest"),
              onClick: Fs
            }, [
              _(a(Af), {
                theme: "outline",
                size: "15"
              }),
              f(
                "span",
                null,
                L(a(t)("localAi.jumpToLatest")),
                1
                /* TEXT */
              )
            ], 8, oS)) : U("v-if", !0),
            f("div", rS, [
              f(
                "form",
                {
                  class: D([
                    "chat-input-card",
                    a(fe) ? "chat-input-card--focused" : "",
                    a(x) ? "chat-input-card--enhancing" : ""
                  ]),
                  onDragover: y[11] || (y[11] = Ue(() => {
                  }, ["prevent"])),
                  onDrop: y[12] || (y[12] = Ue(
                    //@ts-ignore
                    (...T) => a(l) && a(l)(...T),
                    ["prevent"]
                  )),
                  onSubmit: Ue(Ol, ["prevent"]),
                  onFocusin: y[13] || (y[13] = (T) => fe.value = !0),
                  onFocusout: y[14] || (y[14] = (T) => fe.value = !1)
                },
                [
                  a(n).length ? (S(), N("div", sS, [
                    (S(!0), N(
                      at,
                      null,
                      Ln(a(n), (T) => (S(), N(
                        "div",
                        {
                          key: T.id,
                          class: D([
                            "attachment-preview-item",
                            `attachment-preview-item--${T.status}`
                          ])
                        },
                        [
                          T.type === "image" && T.dataUrl ? (S(), N("button", {
                            key: 0,
                            class: "attachment-preview-image-btn",
                            type: "button",
                            title: T.name,
                            "aria-label": a(t)("localAi.previewAttachment"),
                            onClick: (_e) => ho(T)
                          }, [
                            f("img", {
                              src: T.dataUrl,
                              alt: T.name
                            }, null, 8, lS)
                          ], 8, aS)) : (S(), N(
                            "span",
                            iS,
                            L(T.type === "text" ? "TXT" : "FILE"),
                            1
                            /* TEXT */
                          )),
                          f("span", cS, [
                            f(
                              "strong",
                              null,
                              L(T.name),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              L(a(gd)(T.size)) + " · " + L(a(r)(T)),
                              1
                              /* TEXT */
                            )
                          ]),
                          f("button", {
                            class: "attachment-remove-btn",
                            type: "button",
                            title: a(t)("common.delete"),
                            onClick: (_e) => go(T.id)
                          }, [
                            _(a(ur), {
                              theme: "outline",
                              size: "12"
                            })
                          ], 8, uS)
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
                    "onUpdate:modelValue": y[6] || (y[6] = (T) => tn(O) ? O.value = T : null),
                    class: "chat-input",
                    rows: "1",
                    placeholder: a(t)("localAi.chatPlaceholder"),
                    readonly: a(x),
                    "aria-busy": a(x),
                    onKeydown: Zd,
                    onPaste: y[7] || (y[7] = //@ts-ignore
                    (...T) => a(s) && a(s)(...T))
                  }, null, 40, dS), [
                    [Lr, a(O)]
                  ]),
                  f("div", fS, [
                    f("div", pS, [
                      f("button", {
                        class: "composer-tool-btn",
                        type: "button",
                        title: a(t)("localAi.addAttachment"),
                        disabled: a(o),
                        onClick: y[8] || (y[8] = //@ts-ignore
                        (...T) => a(i) && a(i)(...T))
                      }, [
                        a(o) ? (S(), ee(a(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "16"
                        })) : (S(), ee(a(xf), {
                          key: 1,
                          theme: "outline",
                          size: "16"
                        }))
                      ], 8, mS),
                      f("button", {
                        class: D([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          "composer-tool-btn--enhance",
                          a(x) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        disabled: !a(we),
                        title: a(O).trim() ? a(t)("localAi.enhancePromptDesc") : a(t)("localAi.enhanceNeedsPrompt"),
                        onClick: zo
                      }, [
                        a(x) ? (S(), ee(a(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "14"
                        })) : (S(), ee(a(Hl), {
                          key: 1,
                          theme: "outline",
                          size: "15"
                        })),
                        f(
                          "span",
                          null,
                          L(a(t)("localAi.enhancePrompt")),
                          1
                          /* TEXT */
                        )
                      ], 10, hS),
                      f("button", {
                        class: "composer-tool-btn composer-tool-btn--wide",
                        type: "button",
                        disabled: !a(O).trim() || a(Ce),
                        title: a(O).trim() ? a(t)("localAi.webSearchPluginDesc") : a(t)("localAi.webSearchNeedsQuery"),
                        onClick: Vd
                      }, [
                        _(a(Ul), {
                          theme: "outline",
                          size: "15"
                        }),
                        f(
                          "span",
                          null,
                          L(a(t)("localAi.webSearch")),
                          1
                          /* TEXT */
                        )
                      ], 8, gS),
                      a(Jt) ? (S(), N("button", {
                        key: 0,
                        class: D([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          a(ae) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        title: a(ae) ? a(t)("localAi.thinkingEnabled") : a(t)("localAi.thinkingDisabled"),
                        "aria-pressed": a(ae),
                        onClick: y[9] || (y[9] = (T) => ae.value = !a(ae))
                      }, [
                        _(a(Bl), {
                          theme: "outline",
                          size: "15"
                        }),
                        f(
                          "span",
                          null,
                          L(a(t)("localAi.reasoningTitle")),
                          1
                          /* TEXT */
                        )
                      ], 10, vS)) : U("v-if", !0)
                    ]),
                    f("div", bS, [
                      f("div", yS, [
                        _(a(jl), {
                          theme: "outline",
                          size: "14"
                        }),
                        _(te, {
                          modelValue: a(ge),
                          "onUpdate:modelValue": y[10] || (y[10] = (T) => tn(ge) ? ge.value = T : null),
                          class: "chat-model-select",
                          size: "small",
                          disabled: a($) || !a(qt).length,
                          placeholder: a(Kt),
                          "popper-class": "chat-model-select-popper",
                          onChange: Fe
                        }, {
                          default: X(() => [
                            (S(!0), N(
                              at,
                              null,
                              Ln(a(qt), (T) => (S(), ee(j, {
                                key: T,
                                label: _n(T),
                                value: T
                              }, {
                                default: X(() => [
                                  f("span", wS, [
                                    _(a(jl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    f(
                                      "span",
                                      kS,
                                      L(_n(T)),
                                      1
                                      /* TEXT */
                                    ),
                                    a(ge) === T ? (S(), ee(a(Sf), {
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
                            a(qt).length ? U("v-if", !0) : (S(), ee(j, {
                              key: 0,
                              label: a(Kt),
                              value: ""
                            }, null, 8, ["label"]))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "disabled", "placeholder"])
                      ]),
                      f(
                        "span",
                        _S,
                        L(a(t)("localAi.inputHint")),
                        1
                        /* TEXT */
                      ),
                      a(V) ? (S(), N("button", {
                        key: 0,
                        class: D(["send-btn send-btn--stop", { "send-btn--stopping": a(W) }]),
                        type: "button",
                        disabled: a(W),
                        title: a(W) ? a(t)("localAi.stoppingGeneration") : a(t)("localAi.stopGenerating"),
                        "aria-label": a(W) ? a(t)("localAi.stoppingGeneration") : a(t)("localAi.stopGenerating"),
                        onClick: Kd
                      }, [
                        a(W) ? (S(), ee(a(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "15"
                        })) : (S(), ee(a($f), {
                          key: 1,
                          theme: "filled",
                          size: "11"
                        }))
                      ], 10, SS)) : (S(), N("button", {
                        key: 1,
                        class: "send-btn",
                        type: "submit",
                        disabled: !a(G),
                        title: a(t)("localAi.send"),
                        "aria-label": a(t)("localAi.send")
                      }, [
                        _(a(Of), {
                          theme: "outline",
                          size: "15"
                        })
                      ], 8, TS))
                    ])
                  ])
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ]),
          _(f_, {
            modelValue: a(ue),
            "onUpdate:modelValue": y[15] || (y[15] = (T) => tn(ue) ? ue.value = T : null),
            attachment: a(q)
          }, null, 8, ["modelValue", "attachment"]),
          _(a(Vw), {
            modelValue: a(re),
            "onUpdate:modelValue": y[16] || (y[16] = (T) => tn(re) ? re.value = T : null),
            title: a(t)("localAi.clearAllChats"),
            "confirm-text": a(t)("common.delete"),
            "cancel-text": a(t)("common.cancel"),
            loading: a(Z),
            type: "danger",
            onConfirm: ke
          }, {
            default: X(() => [
              f(
                "div",
                null,
                L(a(t)("localAi.clearAllChatsConfirm")),
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
}), IS = /* @__PURE__ */ sr(LS, [["__scopeId", "data-v-5403173f"]]), OS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IS
}, Symbol.toStringTag, { value: "Module" })), $S = { class: "settings-panel local-ai-settings-shell" }, RS = { class: "local-ai-hero panel-card" }, MS = { class: "panel-title" }, PS = { class: "hero-desc" }, NS = { class: "header-actions" }, DS = {
  key: 0,
  class: "settings-grid"
}, zS = { class: "summary-panel panel-card" }, BS = { class: "status-strip" }, FS = { class: "memory-card__header" }, jS = { class: "memory-metrics" }, VS = { class: "bottleneck-row" }, HS = { class: "summary-card" }, WS = { class: "summary-card__title" }, US = { class: "summary-card__desc" }, GS = { class: "service-controls" }, KS = { class: "service-url" }, qS = { class: "summary-card" }, ZS = { class: "summary-card__title" }, YS = { class: "summary-card__desc" }, XS = { class: "summary-meta" }, QS = { class: "form-panel panel-card" }, JS = { class: "settings-section" }, eT = { class: "settings-section__header" }, tT = { class: "field-stack" }, nT = ["title"], oT = { class: "path-control" }, rT = ["title"], sT = ["title"], aT = ["title"], lT = { class: "path-control" }, iT = ["placeholder"], cT = { class: "settings-section grid-two" }, uT = { class: "settings-section__header" }, dT = { class: "param-grid" }, fT = ["title"], pT = ["title"], mT = ["title"], hT = ["title"], gT = ["title"], vT = ["title"], bT = { class: "settings-section grid-two" }, yT = { class: "settings-section__header" }, wT = { class: "switch-grid" }, kT = ["title"], _T = ["title"], ST = ["title"], TT = { class: "settings-section grid-two" }, AT = { class: "settings-section__header" }, CT = { class: "switch-grid switch-grid--two" }, ET = ["title"], xT = ["title"], LT = ["title"], IT = ["title"], OT = { class: "settings-section grid-two" }, $T = { class: "settings-section__header" }, RT = { class: "param-grid param-grid--three" }, MT = ["title"], PT = ["title"], NT = ["title"], DT = ["title"], zT = ["title"], BT = ["title"], FT = ["title"], jT = ["title"], VT = { class: "settings-footer" }, HT = ["title"], WT = /* @__PURE__ */ oe({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Pr(), n = P(null), o = P(null), r = P(null), l = P(null), s = P(!1), i = P(!1), c = P(!1), u = P(!1), d = P(!1);
    let m = null;
    const g = C(() => !!l.value?.selectedModelPath), w = C(() => !!n.value?.mmprojPath), h = C({
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
    ), k = C(
      () => g.value ? t("localAi.modelReady") : l.value?.message ?? t("localAi.modelMissing")
    ), R = C(() => r.value?.healthy ? t("localAi.serviceHealthy") : r.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), F = (Q) => Q.split(/[\\/]+/).pop() ?? Q, O = C(() => {
      const H = F(
        n.value?.modelPath ?? l.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return H ? Number(H[1]) : 4;
    }), A = C(() => {
      const Q = n.value;
      if (!Q)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown"),
          level: "warn"
        };
      const H = Math.max(1.4, O.value * 0.92), Ae = Math.min(1, Math.max(0, Q.gpuLayers) / 32), ge = Q.ctxSize / 8192 * 0.38 * (Q.kvOffload ? 1 : 0.12), ve = Q.batchSize / 512 * 0.18, me = H * Ae + ge + ve, q = H * (1 - Ae) + Q.ctxSize / 8192 * 0.22, ue = me + q, Be = Q.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : Q.ctxSize >= 32768 || Q.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced"), ft = ue >= 24 || Q.ctxSize >= 32768 || Q.batchSize >= 2048 ? "danger" : ue >= 16 || Q.ctxSize >= 16384 || Q.batchSize >= 1024 ? "warn" : "ok";
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
      o.value = await _w();
    }, re = async () => {
      r.value = await cd();
    }, W = async () => {
      n.value && (l.value = await id(n.value), !n.value.modelPath && l.value.selectedModelPath && (n.value.modelPath = l.value.selectedModelPath), !n.value.mmprojPath && l.value.selectedMmprojPath && (n.value.mmprojPath = l.value.selectedMmprojPath));
    }, ae = async () => {
      s.value = !0;
      try {
        n.value = await ld(), await Promise.all([Z(), W(), re()]);
      } catch (Q) {
        yt.error("[LocalAI] refresh settings failed", Q), Ee.msg(`${t("localAi.refreshFailed")}: ${Q}`, "error");
      } finally {
        s.value = !1;
      }
    }, fe = async () => {
      if (n.value)
        try {
          await rs(n.value);
        } catch (Q) {
          yt.warn("[LocalAI] autosave failed", Q);
        }
    }, ce = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await rs(n.value), await Promise.all([Z(), W(), re()]), Ee.msg(t("localAi.configSaved"));
        } catch (Q) {
          Ee.msg(`${t("localAi.configSaveFailed")}: ${Q}`, "error");
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
      !Q || Array.isArray(Q) || !n.value || (n.value.modelDir = Q, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await W());
    }, V = async () => {
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
          await rs(n.value), r.value = await Sw(n.value), Ee.msg(t("localAi.serviceStarted"));
        } catch (Q) {
          Ee.msg(`${t("localAi.serviceStartFailed")}: ${Q}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, ie = async () => {
      u.value = !0;
      try {
        await ce(), r.value = await ud(), Ee.msg(t("localAi.serviceRestarted"));
      } catch (Q) {
        Ee.msg(`${t("localAi.serviceRestartFailed")}: ${Q}`, "error");
      } finally {
        u.value = !1;
      }
    }, pe = async () => {
      d.value = !0;
      try {
        await Tw(), await re(), Ee.msg(t("localAi.serviceStoppedMsg"));
      } catch (Q) {
        Ee.msg(`${t("localAi.serviceStopFailed")}: ${Q}`, "error");
      } finally {
        d.value = !1;
      }
    }, Se = () => {
      window.location.hash = "#/config/local-ai/chat";
    };
    return tt(async () => {
      await ae(), m = setInterval(() => {
        re().catch(
          (Q) => yt.warn("[LocalAI] status timer failed", Q)
        );
      }, 15e3);
    }), La(() => {
      m && clearInterval(m);
    }), (Q, H) => {
      const Ae = nd, ge = td, ve = xy, me = Yy;
      return S(), N("div", $S, [
        f("header", RS, [
          f("div", null, [
            f(
              "h3",
              MS,
              L(a(t)("localAi.title")),
              1
              /* TEXT */
            ),
            f(
              "p",
              PS,
              L(a(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          f("div", NS, [
            _(a(en), {
              size: "small",
              plain: "",
              onClick: Se
            }, {
              default: X(() => [
                mt(
                  L(a(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            _(a(en), {
              size: "small",
              loading: a(s),
              onClick: ae
            }, {
              default: X(() => [
                mt(
                  L(a(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        a(n) ? (S(), N("main", DS, [
          f("aside", zS, [
            f("div", BS, [
              f(
                "div",
                {
                  class: D(["status-item", $(a(o)?.available ? "ok" : "danger")])
                },
                [
                  H[25] || (H[25] = f(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  f(
                    "span",
                    null,
                    L(a(E)),
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
                  class: D(["status-item", $(a(g) ? "ok" : "danger")])
                },
                [
                  H[26] || (H[26] = f(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  f(
                    "span",
                    null,
                    L(a(k)),
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
                      a(r)?.healthy ? "ok" : a(r)?.running ? "warn" : "danger"
                    )
                  ])
                },
                [
                  H[27] || (H[27] = f(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  f(
                    "span",
                    null,
                    L(a(R)),
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
                class: D(["memory-card", $(a(A).level)])
              },
              [
                f("div", FS, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.estimatedMemory")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "small",
                    null,
                    L(a(t)("localAi.estimateBeta")),
                    1
                    /* TEXT */
                  )
                ]),
                f("div", jS, [
                  f("div", null, [
                    H[28] || (H[28] = f(
                      "span",
                      null,
                      "GPU",
                      -1
                      /* HOISTED */
                    )),
                    f(
                      "b",
                      {
                        class: D($(a(A).level))
                      },
                      L(a(A).gpuGb) + " GB ",
                      3
                      /* TEXT, CLASS */
                    )
                  ]),
                  f("div", null, [
                    f(
                      "span",
                      null,
                      L(a(t)("localAi.total")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "b",
                      {
                        class: D($(a(A).level))
                      },
                      L(a(A).totalGb) + " GB ",
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ]),
                f("div", VS, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.bottleneck")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D($(a(A).level))
                    },
                    L(a(A).bottleneck),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            ),
            f("section", HS, [
              f(
                "div",
                WS,
                L(a(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              f(
                "div",
                US,
                L(a(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              f("div", GS, [
                _(a(en), {
                  type: "primary",
                  size: "small",
                  loading: a(c),
                  disabled: a(r)?.running,
                  onClick: B
                }, {
                  default: X(() => [
                    mt(
                      L(a(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                _(a(en), {
                  size: "small",
                  loading: a(u),
                  disabled: !a(r)?.running,
                  onClick: ie
                }, {
                  default: X(() => [
                    mt(
                      L(a(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                _(a(en), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: a(d),
                  disabled: !a(r)?.running,
                  onClick: pe
                }, {
                  default: X(() => [
                    mt(
                      L(a(t)("localAi.stopService")),
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
                KS,
                L(a(r)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            f("section", qS, [
              f(
                "div",
                ZS,
                L(a(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              f(
                "div",
                YS,
                L(a(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              f("div", XS, [
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(a(o)?.available))
                    },
                    L(a(o)?.available ? a(t)("common.yes") : a(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(a(g)))
                    },
                    L(a(g) ? a(t)("common.yes") : a(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(!!a(h)))
                    },
                    L(a(h) ? a(t)("common.yes") : a(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(!!a(b)))
                    },
                    L(a(b) ? a(t)("common.yes") : a(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(a(w)))
                    },
                    L(a(w) ? a(t)("common.yes") : a(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", null, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: D(K(!!a(r)?.healthy))
                    },
                    L(a(r)?.healthy ? a(t)("common.yes") : a(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ])
            ])
          ]),
          f("section", QS, [
            f("div", JS, [
              f("div", eT, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(a(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(a(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", tT, [
                f("label", {
                  class: "field-row",
                  title: x("modelDir")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  f("div", oT, [
                    it(f(
                      "input",
                      {
                        "onUpdate:modelValue": H[0] || (H[0] = (q) => a(n).modelDir = q),
                        class: "text-input",
                        onChange: W
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Lr, a(n).modelDir]
                    ]),
                    _(a(en), {
                      size: "small",
                      plain: "",
                      onClick: M
                    }, {
                      default: X(() => [
                        mt(
                          L(a(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, nT),
                f("label", {
                  class: "field-row",
                  title: x("mainModel")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  _(ge, {
                    modelValue: a(h),
                    "onUpdate:modelValue": H[1] || (H[1] = (q) => tn(h) ? h.value = q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: X(() => [
                      (S(!0), N(
                        at,
                        null,
                        Ln(a(l)?.mainModels ?? [], (q) => (S(), ee(Ae, {
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
                ], 8, rT),
                f("label", {
                  class: "field-row",
                  title: x("mmprojModel")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  _(ge, {
                    modelValue: a(b),
                    "onUpdate:modelValue": H[2] || (H[2] = (q) => tn(b) ? b.value = q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: fe
                  }, {
                    default: X(() => [
                      (S(!0), N(
                        at,
                        null,
                        Ln(a(l)?.mmprojModels ?? [], (q) => (S(), ee(Ae, {
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
                ], 8, sT),
                f("label", {
                  class: "field-row",
                  title: x("runtimePath")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  f("div", lT, [
                    it(f("input", {
                      "onUpdate:modelValue": H[3] || (H[3] = (q) => a(n).runtimePath = q),
                      class: "text-input",
                      placeholder: a(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, iT), [
                      [Lr, a(n).runtimePath]
                    ]),
                    _(a(en), {
                      size: "small",
                      plain: "",
                      onClick: V
                    }, {
                      default: X(() => [
                        mt(
                          L(a(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, aT)
              ])
            ]),
            f("div", cT, [
              f("div", uT, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(a(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(a(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", dT, [
                f("label", {
                  class: "number-field",
                  title: x("ctxSize")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).ctxSize,
                    "onUpdate:modelValue": H[4] || (H[4] = (q) => a(n).ctxSize = q),
                    controls: !1,
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, fT),
                f("label", {
                  class: "number-field",
                  title: x("gpuLayers")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).gpuLayers,
                    "onUpdate:modelValue": H[5] || (H[5] = (q) => a(n).gpuLayers = q),
                    controls: !1,
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, pT),
                f("label", {
                  class: "number-field",
                  title: x("threads")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).threads,
                    "onUpdate:modelValue": H[6] || (H[6] = (q) => a(n).threads = q),
                    controls: !1,
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, mT),
                f("label", {
                  class: "number-field",
                  title: x("batchSize")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).batchSize,
                    "onUpdate:modelValue": H[7] || (H[7] = (q) => a(n).batchSize = q),
                    controls: !1,
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, hT),
                f("label", {
                  class: "number-field",
                  title: x("ubatchSize")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).ubatchSize,
                    "onUpdate:modelValue": H[8] || (H[8] = (q) => a(n).ubatchSize = q),
                    controls: !1,
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, gT),
                f("label", {
                  class: "number-field",
                  title: x("mainGpu")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).mainGpu,
                    "onUpdate:modelValue": H[9] || (H[9] = (q) => a(n).mainGpu = q),
                    controls: !1,
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, vT)
              ])
            ]),
            f("div", bT, [
              f("div", yT, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(a(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(a(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", wT, [
                f("label", {
                  title: x("flashAttn")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: a(n).flashAttn,
                    "onUpdate:modelValue": H[10] || (H[10] = (q) => a(n).flashAttn = q)
                  }, null, 8, ["modelValue"])
                ], 8, kT),
                f("label", {
                  title: x("kvOffload")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: a(n).kvOffload,
                    "onUpdate:modelValue": H[11] || (H[11] = (q) => a(n).kvOffload = q)
                  }, null, 8, ["modelValue"])
                ], 8, _T),
                f("label", {
                  title: x("mmap")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: a(n).mmap,
                    "onUpdate:modelValue": H[12] || (H[12] = (q) => a(n).mmap = q)
                  }, null, 8, ["modelValue"])
                ], 8, ST)
              ])
            ]),
            f("div", TT, [
              f("div", AT, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(a(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(a(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", CT, [
                f("label", {
                  title: x("autoStart")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: a(n).autoStartOnRequest,
                    "onUpdate:modelValue": H[13] || (H[13] = (q) => a(n).autoStartOnRequest = q)
                  }, null, 8, ["modelValue"])
                ], 8, ET),
                f("label", {
                  title: x("keepAlive")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  _(me, {
                    modelValue: a(n).keepAlive,
                    "onUpdate:modelValue": H[14] || (H[14] = (q) => a(n).keepAlive = q)
                  }, null, 8, ["modelValue"])
                ], 8, xT),
                f("label", {
                  class: "number-field",
                  title: x("idleTimeout")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": H[15] || (H[15] = (q) => a(n).idleTimeoutMinutes = q),
                    controls: !1,
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, LT),
                f("label", {
                  class: "number-field",
                  title: x("requestTimeout")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).requestTimeoutSecs,
                    "onUpdate:modelValue": H[16] || (H[16] = (q) => a(n).requestTimeoutSecs = q),
                    controls: !1,
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, IT)
              ])
            ]),
            f("div", OT, [
              f("div", $T, [
                f("div", null, [
                  f(
                    "h4",
                    null,
                    L(a(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "p",
                    null,
                    L(a(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              f("div", RT, [
                f("label", {
                  class: "number-field",
                  title: x("temperature")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).temperature,
                    "onUpdate:modelValue": H[17] || (H[17] = (q) => a(n).temperature = q),
                    controls: !1,
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, MT),
                f("label", {
                  class: "number-field",
                  title: x("topP")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).topP,
                    "onUpdate:modelValue": H[18] || (H[18] = (q) => a(n).topP = q),
                    controls: !1,
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, PT),
                f("label", {
                  class: "number-field",
                  title: x("topK")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).topK,
                    "onUpdate:modelValue": H[19] || (H[19] = (q) => a(n).topK = q),
                    controls: !1,
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, NT),
                f("label", {
                  class: "number-field",
                  title: x("minP")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).minP,
                    "onUpdate:modelValue": H[20] || (H[20] = (q) => a(n).minP = q),
                    controls: !1,
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, DT),
                f("label", {
                  class: "number-field",
                  title: x("repeatPenalty")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).repeatPenalty,
                    "onUpdate:modelValue": H[21] || (H[21] = (q) => a(n).repeatPenalty = q),
                    controls: !1,
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, zT),
                f("label", {
                  class: "number-field",
                  title: x("repeatLastN")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).repeatLastN,
                    "onUpdate:modelValue": H[22] || (H[22] = (q) => a(n).repeatLastN = q),
                    controls: !1,
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, BT),
                f("label", {
                  class: "number-field",
                  title: x("maxTokens")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).maxTokens,
                    "onUpdate:modelValue": H[23] || (H[23] = (q) => a(n).maxTokens = q),
                    controls: !1,
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, FT),
                f("label", {
                  class: "number-field",
                  title: x("port")
                }, [
                  f(
                    "span",
                    null,
                    L(a(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  _(ve, {
                    modelValue: a(n).port,
                    "onUpdate:modelValue": H[24] || (H[24] = (q) => a(n).port = q),
                    controls: !1,
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, jT)
              ])
            ]),
            f("div", VT, [
              _(a(en), {
                type: "primary",
                loading: a(i),
                onClick: ce
              }, {
                default: X(() => [
                  mt(
                    L(a(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              a(r)?.commandLine ? (S(), N("span", {
                key: 0,
                class: "command-line",
                title: a(r).commandLine
              }, L(a(r).commandLine), 9, HT)) : U("v-if", !0)
            ])
          ])
        ])) : U("v-if", !0)
      ]);
    };
  }
}), UT = /* @__PURE__ */ sr(WT, [["__scopeId", "data-v-9d534415"]]), GT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UT
}, Symbol.toStringTag, { value: "Module" }));
export {
  YT as activate,
  YT as default
};
