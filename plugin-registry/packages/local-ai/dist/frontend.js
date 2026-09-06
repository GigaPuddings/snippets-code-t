var Ef = Object.defineProperty;
var xf = (e, t, n) => t in e ? Ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ie = (e, t, n) => xf(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as Le, createVNode as _, defineAsyncComponent as If, getCurrentInstance as xt, ref as M, computed as S, unref as i, readonly as Ra, getCurrentScope as Lf, onScopeDispose as Gc, shallowRef as uo, watchEffect as Pa, onMounted as ot, nextTick as Ye, watch as pe, isRef as en, warn as Of, provide as yn, defineComponent as oe, createElementBlock as D, openBlock as T, mergeProps as Ao, renderSlot as le, createElementVNode as f, toRef as Zn, onUnmounted as Ma, useAttrs as $f, useSlots as Kc, normalizeStyle as mt, normalizeClass as z, createCommentVNode as Y, Fragment as at, createBlock as re, withCtx as J, resolveDynamicComponent as tn, withModifiers as Ze, toDisplayString as E, onBeforeUnmount as kn, Transition as Io, withDirectives as it, vShow as Mn, reactive as To, onActivated as Rf, onUpdated as qc, cloneVNode as Pf, Text as Mf, Comment as Nf, Teleport as Df, onBeforeMount as zf, onDeactivated as Ff, createTextVNode as pt, h as Bf, createSlots as Na, withKeys as In, toRaw as jf, toRefs as Da, resolveComponent as yo, resolveDirective as Vf, toHandlerKey as Hf, renderList as xn, vModelText as Lr, shallowReactive as Wf, isVNode as Or, render as us } from "vue";
import { useI18n as Dr } from "vue-i18n";
var Uf = {
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
function Gf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Kf(e, t, n) {
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
var qf = Symbol("icon-context");
function Xe(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = Gf(), l = Le(qf, Uf);
      return function() {
        var c = s.size, u = s.strokeWidth, d = s.strokeLinecap, m = s.strokeLinejoin, g = s.theme, w = s.fill, h = s.spin, b = Kf(a, {
          size: c,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: g,
          fill: w
        }, l), C = [l.prefix + "-icon"];
        return C.push(l.prefix + "-icon-" + e), t && l.rtl && C.push(l.prefix + "-icon-rtl"), h && C.push(l.prefix + "-icon-spin"), _("span", {
          class: C.join(" ")
        }, [n(b)]);
      };
    }
  };
  return o;
}
const Zi = Xe("brain", !0, function(e) {
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
}), Zf = Xe("check-small", !0, function(e) {
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
}), Yf = Xe("code", !0, function(e) {
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
}), Yi = Xe("copy", !0, function(e) {
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
}), Xi = Xe("cube", !1, function(e) {
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
}), Xf = Xe("down", !1, function(e) {
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
}), Ks = Xe("edit", !0, function(e) {
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
}), Qf = Xe("file-text", !0, function(e) {
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
}), Jf = Xe("fork", !1, function(e) {
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
}), Qi = Xe("left-bar", !0, function(e) {
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
}), ep = Xe("link", !0, function(e) {
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
}), Ji = Xe("magic-wand", !0, function(e) {
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
}), tp = Xe("picture", !0, function(e) {
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
}), el = Xe("right", !0, function(e) {
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
}), qs = Xe("robot", !0, function(e) {
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
}), np = Xe("robot-one", !0, function(e) {
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
}), op = Xe("search", !0, function(e) {
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
}), rp = Xe("send", !0, function(e) {
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
}), Zc = Xe("setting-two", !1, function(e) {
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
}), sp = Xe("square", !1, function(e) {
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
}), ap = Xe("translate", !0, function(e) {
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
}), ip = (e, t) => e.capabilities.includes(t);
class lp {
  constructor() {
    Ie(this, "providers", /* @__PURE__ */ new Map());
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
    return Array.from(this.providers.values()).filter((n) => !(t.capability && !ip(n, t.capability) || n.pluginId && t.isPluginEnabled && !t.isPluginEnabled(n.pluginId))).sort((n, o) => {
      const r = (o.priority ?? 0) - (n.priority ?? 0);
      return r !== 0 ? r : n.id.localeCompare(o.id);
    });
  }
  getDefault(t = {}) {
    return this.list(t)[0];
  }
}
const cp = () => new lp(), Yc = cp();
function up(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Fe(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var tl;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(tl || (tl = {}));
async function dp(e, t) {
  await Fe("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function fp(e, t, n) {
  var o;
  const r = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return Fe("plugin:event|listen", {
    event: e,
    target: r,
    handler: up(t)
  }).then((s) => async () => dp(e, s));
}
async function Xc() {
  return await Fe("local_ai_get_config");
}
async function ss(e) {
  return await Fe("local_ai_save_config", { config: e });
}
async function Qc(e) {
  return await Fe("local_ai_scan_models", {
    config: e ?? null
  });
}
async function pp() {
  return await Fe("local_ai_get_runtime_status");
}
async function za() {
  return await Fe("local_ai_get_status");
}
async function Jc(e) {
  return await Fe("local_ai_start_service", {
    config: e ?? null
  });
}
async function eu() {
  return await Fe("local_ai_restart_service");
}
async function mp() {
  await Fe("local_ai_stop_service");
}
async function nl(e) {
  return await Fe("local_ai_chat", { request: e });
}
function hp() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function gp(e, t, n = {}) {
  const o = n.requestId ?? hp(), r = await fp(
    "local-ai-chat-stream",
    (s) => {
      const a = s.payload;
      a.requestId === o && (a.event === "delta" && a.content ? t(a.content) : a.event === "stats" && a.stats && n.onStats?.(a.stats));
    }
  );
  try {
    return await Fe("local_ai_chat_stream", {
      request: e,
      requestId: o
    });
  } finally {
    r();
  }
}
async function vp(e) {
  return await Fe("local_ai_cancel_chat_stream", { requestId: e });
}
async function bp() {
  return await Fe("local_ai_get_chat_histories");
}
async function yp(e) {
  return await Fe(
    "local_ai_read_attachment_files",
    { paths: e }
  );
}
async function wp(e) {
  return await Fe("local_ai_save_chat_history", {
    history: e
  });
}
async function kp(e) {
  return await Fe("local_ai_delete_chat_history", {
    historyId: e
  });
}
async function _p() {
  return await Fe("local_ai_clear_chat_histories");
}
async function Ap(e, t, n) {
  return await Fe("local_ai_translate", { text: e, from: t, to: n });
}
const Tp = 4e3, Sp = 12, Zs = (e) => e?.trim() || void 0, Cp = (e, t) => {
  if (t <= 0 || e.length <= t) return e;
  const n = `
[truncated]`;
  return t <= n.length ? e.slice(0, t) : `${e.slice(0, t - n.length).trimEnd()}${n}`;
}, Ep = (e) => e && Object.keys(e).length > 0 ? { ...e } : void 0, xp = (e, t = {}) => {
  const n = Zs(e.content);
  if (!n) return null;
  const o = t.maxItemLength ?? Tp, r = {
    kind: e.kind,
    content: Cp(n, o)
  }, s = Zs(e.title), a = Zs(e.source), l = Ep(e.metadata);
  return s && (r.title = s), a && (r.source = a), l && (r.metadata = l), r;
}, ds = (e, t = {}) => {
  const n = t.maxItems ?? Sp, o = e.map((r) => xp(r, t)).filter((r) => !!r).slice(0, Math.max(0, n));
  return o.length > 0 ? { items: o } : void 0;
}, tu = (e, t = {}) => ds(e?.items ?? [], t), nu = (e, t = {}) => ds(
  e.flatMap((n) => n?.items ?? []),
  t
), Ip = {
  workspace: "Workspace",
  selection: "Selection",
  search: "Search"
}, Lp = (e, t) => {
  const n = e.title ? ` - ${e.title}` : "", o = e.source ? ` (${e.source})` : "";
  return `### ${t + 1}. ${Ip[e.kind]}${n}${o}`;
}, Op = (e, t = {}) => {
  const n = tu(e, t);
  return n ? [
    "Snippets Code request context. Use these references only when relevant, and treat the user message as the source of intent.",
    ...n.items.map(
      (o, r) => [Lp(o, r), o.content].join(`
`)
    )
  ].join(`

`) : "";
}, ou = (e, t, n = {}) => {
  const o = nu(
    [e.context, t],
    n
  );
  if (!o) {
    const r = { ...e };
    return delete r.context, r;
  }
  return {
    ...e,
    context: o
  };
}, Zt = "local-ai", ol = {
  auto: "auto-detected language",
  zh: "Simplified Chinese",
  zh_tw: "Traditional Chinese",
  en: "English",
  ja: "Japanese",
  ko: "Korean",
  fr: "French",
  de: "German",
  ru: "Russian",
  es: "Spanish",
  pt_pt: "Portuguese (Portugal)",
  pt_br: "Portuguese (Brazil)",
  vi: "Vietnamese",
  id: "Indonesian",
  th: "Thai",
  ar: "Arabic"
}, $p = (e) => e && e.split(/[\\/]/).filter(Boolean).pop() || "", rl = (e) => ({
  providerId: Zt,
  available: e.healthy || e.running || !e.lastError,
  running: e.running,
  healthy: e.healthy,
  modelName: $p(e.modelPath),
  modelPath: e.modelPath,
  runtimePath: e.runtimePath,
  baseUrl: e.baseUrl,
  lastError: e.lastError
}), ru = (e) => {
  const t = Op(e);
  return t ? { role: "system", content: t } : null;
}, sl = (e) => {
  const t = ru(e.context), n = {
    messages: t ? [t, ...e.messages] : e.messages
  };
  return e.temperature !== void 0 && (n.temperature = e.temperature), e.enableThinking !== void 0 && (n.enableThinking = e.enableThinking), e.maxTokens !== void 0 && (n.maxTokens = e.maxTokens), n;
}, Rp = (e) => [
  `Translate from ${ol[e.from] ?? e.from} to ${ol[e.to] ?? e.to}.`,
  "Preserve Markdown, code fences, inline code, URLs, numbers, and line breaks.",
  "Use the Snippets Code request context only to resolve ambiguity.",
  "Return only the translated text, with no explanations."
].join(" "), Pp = (e) => {
  const t = ru(e.context);
  return {
    temperature: 0.2,
    enableThinking: !1,
    messages: [
      {
        role: "system",
        content: [Rp(e), t?.content].filter(Boolean).join(`

`)
      },
      {
        role: "user",
        content: e.text
      }
    ]
  };
}, su = {
  id: Zt,
  label: "Local AI",
  pluginId: "local-ai",
  capabilities: ["chat", "vision", "translation"],
  priority: 100,
  async getStatus() {
    try {
      return rl(await za());
    } catch (e) {
      return {
        providerId: Zt,
        available: !1,
        healthy: !1,
        lastError: e instanceof Error ? e.message : String(e)
      };
    }
  },
  async start() {
    return rl(await Jc());
  },
  async chat(e) {
    const t = await nl(sl(e));
    return {
      providerId: Zt,
      content: t.content
    };
  },
  async streamChat(e, t, n = {}) {
    const o = await gp(
      sl(e),
      t,
      {
        requestId: n.requestId,
        onStats: n.onStats
      }
    );
    return {
      providerId: Zt,
      content: o.content
    };
  },
  async cancelChatStream(e) {
    return await vp(e);
  },
  async translate(e) {
    if (e.context?.items.length) {
      const t = await nl(
        Pp(e)
      );
      return {
        providerId: Zt,
        text: t.content
      };
    }
    return {
      providerId: Zt,
      text: await Ap(e.text, e.from, e.to)
    };
  }
}, Mp = (e = Yc) => {
  e.get(Zt) || e.register(su);
};
async function Np(e) {
  try {
    return await Fe("search_markdown_files_optimized", {
      query: e
    });
  } catch (t) {
    throw new Error(`搜索失败: ${t}`);
  }
}
async function Dp() {
  try {
    const e = await Fe("get_workspace_root_path");
    return e || "";
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    if (t.includes("工作区未设置") || t.includes("工作区未配置"))
      return "";
    throw new Error(`获取工作区路径失败: ${e}`);
  }
}
const zp = /* @__PURE__ */ new Set([
  "workspace",
  "selection",
  "search"
]), Fp = /* @__PURE__ */ new Set([
  "chat",
  "vision",
  "translation"
]), Ys = (e) => `${e.pluginId ?? "core"}:${e.id}`, au = (e) => typeof e == "string" && zp.has(e), Bp = (e) => typeof e == "string" && Fp.has(e), jp = (e) => typeof e == "object" && e !== null && Array.isArray(e.items), Vp = (e) => typeof e == "object" && e !== null && au(e.kind) && "content" in e, Hp = (e, t) => {
  const n = Array.from(new Set(t));
  if (!n.length || n.some((o) => !au(o)))
    throw new Error(`AI context provider ${e} 缺少有效 kind`);
  return n;
}, Wp = (e) => {
  if (!e) return;
  const t = Array.from(new Set(e));
  if (!t.length || t.some((n) => !Bp(n)))
    throw new Error("AI context provider 缺少有效 capability");
  return t;
}, Up = (e, t) => !t || e.kinds.includes(t), Gp = (e, t) => !t || !e.capabilities || e.capabilities.includes(t), Kp = (e, t) => !e.pluginId || !t || t(e.pluginId), qp = (e) => ({
  maxItemLength: e.maxItemLength,
  maxItems: e.maxItems
}), Zp = (e) => ({
  kind: e.kind,
  capability: e.capability,
  operation: e.operation,
  providerId: e.providerId,
  input: e.input
}), Yp = (e, t, n) => {
  if (t) {
    if (jp(t))
      return tu(t, n);
    if (Array.isArray(t))
      return ds(t, n);
    if (Vp(t))
      return ds([t], n);
    throw new Error(`AI context provider ${e.id} 返回无效上下文`);
  }
};
class Xp {
  constructor() {
    Ie(this, "providers", /* @__PURE__ */ new Map());
  }
  register(t) {
    const n = t.id.trim();
    if (!n)
      throw new Error("AI context provider 缺少稳定 id");
    const o = t.pluginId?.trim() || void 0;
    this.providers.set(Ys({ id: n, pluginId: o }), {
      ...t,
      id: n,
      pluginId: o,
      kinds: Hp(n, t.kinds),
      capabilities: Wp(t.capabilities)
    });
  }
  unregisterPlugin(t) {
    for (const [n, o] of Array.from(this.providers.entries()))
      o.pluginId === t && this.providers.delete(n);
  }
  clear() {
    this.providers.clear();
  }
  list(t = {}) {
    return Array.from(this.providers.values()).filter(
      (n) => Up(n, t.kind) && Gp(n, t.capability) && Kp(n, t.isPluginEnabled)
    ).sort((n, o) => {
      const r = (o.priority ?? 0) - (n.priority ?? 0);
      return r !== 0 ? r : Ys(n).localeCompare(Ys(o));
    });
  }
  async collect(t = {}) {
    const n = Zp(t), o = qp(t), r = await Promise.all(
      this.list(t).map(
        async (s) => Yp(
          s,
          await s.collect(n),
          o
        )
      )
    );
    return nu(r, o);
  }
}
const Qp = () => new Xp(), Fa = Qp(), Jp = async (e = {}, t = Fa) => t.collect(e), em = "workspace", tm = "selection", nm = "workspace-search", om = 5, rm = 900, Yt = (e, t) => {
  const n = e.input?.[t];
  return (typeof n == "string" ? n.trim() : "") || void 0;
}, al = (e, t) => {
  const n = e.input?.[t];
  return typeof n == "number" && Number.isFinite(n) ? n : void 0;
}, sm = (e, t) => {
  const n = e.input?.[t];
  return n && typeof n == "object" && !Array.isArray(n) ? { ...n } : void 0;
}, Ba = (e) => {
  const t = Object.entries(e).filter(
    ([, n]) => n != null && n !== ""
  );
  return t.length ? Object.fromEntries(t) : void 0;
}, am = (e) => ({
  id: em,
  label: "Workspace Context",
  kinds: ["workspace"],
  capabilities: ["chat", "translation"],
  priority: 100,
  async collect(t) {
    const n = [], o = Yt(t, "currentContent"), r = Yt(t, "currentTitle"), s = Yt(t, "currentFilePath");
    o && n.push({
      kind: "workspace",
      title: r ?? "Current workspace item",
      source: s ?? "workspace.current",
      content: o,
      metadata: Ba({
        filePath: s,
        type: Yt(t, "currentType")
      })
    });
    const l = Yt(t, "workspaceRoot") ?? await (e.getWorkspaceRoot ?? Dp)().catch(() => "");
    return l && n.push({
      kind: "workspace",
      title: "Workspace root",
      source: "workspace.root",
      content: `Workspace root: ${l}`
    }), n;
  }
}), im = () => ({
  id: tm,
  label: "Selection Context",
  kinds: ["selection"],
  capabilities: ["chat", "translation"],
  priority: 120,
  collect(e) {
    const t = Yt(e, "selectionText") ?? Yt(e, "selectedText");
    if (t)
      return {
        kind: "selection",
        title: Yt(e, "selectionTitle") ?? "Current selection",
        source: Yt(e, "selectionSource") ?? "selection",
        content: t,
        metadata: Ba({
          ...sm(e, "selectionMetadata") ?? {},
          language: Yt(e, "selectionLanguage"),
          filePath: Yt(e, "selectionFilePath"),
          startLine: al(e, "selectionStartLine"),
          endLine: al(e, "selectionEndLine")
        })
      };
  }
}), lm = (e, t, n) => {
  const o = e.trim();
  if (o.length <= n) return o;
  const r = o.toLowerCase(), s = t.toLowerCase().split(/\s+/).find((u) => u.length >= 2), a = s ? r.indexOf(s) : -1, l = a > 0 ? Math.max(0, a - Math.floor(n / 3)) : 0, c = Math.min(o.length, l + n);
  return `${l > 0 ? "..." : ""}${o.slice(l, c)}${c < o.length ? "..." : ""}`;
}, cm = (e, t) => ({
  kind: "search",
  title: e.title || "Untitled",
  source: e.filePath || e.id,
  content: lm(
    e.content || "",
    t,
    rm
  ),
  metadata: Ba({
    filePath: e.filePath,
    category: e.categoryName,
    type: e.type,
    score: e.score
  })
}), um = (e) => ({
  id: nm,
  label: "Workspace Search Context",
  kinds: ["search"],
  capabilities: ["chat", "translation"],
  priority: 80,
  async collect(t) {
    const n = Yt(t, "query") ?? Yt(t, "searchQuery");
    return n ? (await (e.searchMarkdownFiles ?? Np)(n).catch(() => [])).slice(0, om).map((r) => cm(r, n)) : void 0;
  }
}), dm = (e, t) => e.list().some((n) => n.id === t && !n.pluginId), fm = (e = Fa, t = {}) => {
  const n = [
    im(),
    am(t),
    um(t)
  ];
  for (const o of n)
    dm(e, o.id) || e.register(o);
}, pm = (e) => e.type === "text" ? e.text : "", mm = (e) => Array.isArray(e) ? e.map(pm).filter(Boolean).join(`
`) : e, hm = (e) => {
  for (let t = e.messages.length - 1; t >= 0; t -= 1) {
    const n = e.messages[t];
    if (n.role !== "user") continue;
    const o = mm(n.content).trim();
    if (o) return o;
  }
}, iu = (e) => {
  const t = hm(e);
  return t ? { query: t } : {};
}, gm = (e) => {
  if (!(e === void 0 || e === !1))
    return e === !0 ? {} : e;
}, lu = async (e, t, n, o, r) => {
  const s = gm(
    e.contextCollection
  );
  if (!s) return;
  const a = e.contextRegistry ?? Fa;
  return e.contextRegistry || fm(a), await Jp(
    {
      ...s,
      capability: t,
      operation: n,
      providerId: o,
      isPluginEnabled: e.isPluginEnabled,
      input: {
        ...r,
        ...s.input ?? {}
      }
    },
    a
  );
};
async function vm() {
  try {
    return await Fe("get_app_config");
  } catch (e) {
    throw new Error(`获取应用配置失败: ${e}`);
  }
}
const cu = [
  "chat",
  "vision",
  "translation"
];
new Set(
  cu
);
const bm = (e) => typeof e != "string" ? void 0 : e.trim() || void 0, ym = (e) => {
  if (!e || typeof e != "object" || Array.isArray(e))
    return {};
  const t = {};
  for (const n of cu) {
    const o = bm(
      e[n]
    );
    o && (t[n] = o);
  }
  return t;
}, wm = async () => {
  const e = await vm();
  return ym(e.ai_provider_preferences);
}, km = () => typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `ai-${Date.now()}-${Math.random().toString(16).slice(2)}`, _m = (e) => e.messages.some(
  (t) => Array.isArray(t.content) && t.content.some((n) => n.type === "image_url")
), uu = (e, t) => t ?? (_m(e) ? "vision" : "chat"), Am = async (e, t) => e.providerId ? e.providerId : e.providerPreferences ? e.providerPreferences[t]?.trim() || void 0 : e.registry ? void 0 : (await wm().catch(() => ({})))[t]?.trim() || void 0, du = (e, t) => !e.pluginId || !t || t(e.pluginId), Tm = (e, t, n) => !!(e && du(e, n.isPluginEnabled) && e.capabilities.includes(t)), Sm = (e, t, n, o) => o ? t.providerId ? e.require(o) : e.get(o) : e.getDefault({
  capability: n,
  isPluginEnabled: t.isPluginEnabled
}), Cm = (e, t, n) => {
  throw du(e, n) ? new Error(`AI provider ${e.id} 不支持 ${t}`) : new Error(`AI provider ${e.id} 当前不可用`);
}, ja = async (e, t) => {
  const n = e.registry ?? Yc;
  e.registry || Mp(n);
  const o = await Am(
    e,
    t
  ), r = Sm(
    n,
    e,
    t,
    o
  );
  if (Tm(r, t, e))
    return r;
  e.providerId && r && Cm(r, t, e.isPluginEnabled);
  const s = n.getDefault({
    capability: t,
    isPluginEnabled: e.isPluginEnabled
  });
  if (s) return s;
  throw new Error(`没有可用的 ${t} AI provider`);
}, Em = async (e, t = {}) => {
  const n = uu(e, t.capability), o = await ja(t, n), r = await lu(
    t,
    n,
    "chat",
    o.id,
    iu(e)
  ), s = await o.chat(ou(e, r));
  return {
    ...s,
    providerId: s.providerId || o.id
  };
}, xm = (e) => ({
  requestId: e.requestId,
  onStats: e.onStats
}), Im = async (e, t, n = {}) => {
  const o = uu(e, n.capability), r = await ja(n, o), s = await lu(
    n,
    o,
    "chat",
    r.id,
    iu(e)
  ), a = ou(e, s), l = r.streamChat ? await r.streamChat(
    a,
    t,
    xm(n)
  ) : await r.chat(a);
  return !r.streamChat && l.content && t(l.content), {
    ...l,
    providerId: l.providerId || r.id
  };
}, Xs = async (e, t = {}) => {
  const n = await ja(t, t.capability ?? "chat");
  return n.cancelChatStream ? await n.cancelChatStream(e) : !1;
}, l3 = (e) => {
  e.ai.registerProvider(su), e.registerRoute({
    target: "config",
    path: "local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => c4)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Zc,
    component: If(() => Promise.resolve().then(() => r3))
  });
}, fu = Symbol(), Tr = "el", Lm = "is-", wo = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, pu = Symbol("namespaceContextKey"), Va = (e) => {
  const t = e || (xt() ? Le(pu, M(Tr)) : M(Tr));
  return S(() => i(t) || Tr);
}, tt = (e, t) => {
  const n = Va(t);
  return {
    namespace: n,
    b: (b = "") => wo(n.value, e, b, "", ""),
    e: (b) => b ? wo(n.value, e, "", b, "") : "",
    m: (b) => b ? wo(n.value, e, "", "", b) : "",
    be: (b, C) => b && C ? wo(n.value, e, b, C, "") : "",
    em: (b, C) => b && C ? wo(n.value, e, "", b, C) : "",
    bm: (b, C) => b && C ? wo(n.value, e, b, "", C) : "",
    bem: (b, C, k) => b && C && k ? wo(n.value, e, b, C, k) : "",
    is: (b, ...C) => {
      const k = C.length >= 1 ? C[0] : !0;
      return b && k ? `${Lm}${b}` : "";
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
const fo = () => {
}, Om = Object.prototype.hasOwnProperty, il = (e, t) => Om.call(e, t), On = Array.isArray, nt = (e) => typeof e == "function", Xt = (e) => typeof e == "string", nn = (e) => e !== null && typeof e == "object", $m = Object.prototype.toString, Rm = (e) => $m.call(e), Pm = (e) => Rm(e) === "[object Object]", Mm = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Nm = /-(\w)/g, Dm = Mm(
  (e) => e.replace(Nm, (t, n) => n ? n.toUpperCase() : "")
);
var mu = typeof global == "object" && global && global.Object === Object && global, zm = typeof self == "object" && self && self.Object === Object && self, zn = mu || zm || Function("return this")(), Nn = zn.Symbol, hu = Object.prototype, Fm = hu.hasOwnProperty, Bm = hu.toString, fr = Nn ? Nn.toStringTag : void 0;
function jm(e) {
  var t = Fm.call(e, fr), n = e[fr];
  try {
    e[fr] = void 0;
    var o = !0;
  } catch {
  }
  var r = Bm.call(e);
  return o && (t ? e[fr] = n : delete e[fr]), r;
}
var Vm = Object.prototype, Hm = Vm.toString;
function Wm(e) {
  return Hm.call(e);
}
var Um = "[object Null]", Gm = "[object Undefined]", ll = Nn ? Nn.toStringTag : void 0;
function ar(e) {
  return e == null ? e === void 0 ? Gm : Um : ll && ll in Object(e) ? jm(e) : Wm(e);
}
function Zo(e) {
  return e != null && typeof e == "object";
}
var Km = "[object Symbol]";
function Cs(e) {
  return typeof e == "symbol" || Zo(e) && ar(e) == Km;
}
function qm(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var wn = Array.isArray, cl = Nn ? Nn.prototype : void 0, ul = cl ? cl.toString : void 0;
function gu(e) {
  if (typeof e == "string")
    return e;
  if (wn(e))
    return qm(e, gu) + "";
  if (Cs(e))
    return ul ? ul.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Zm = /\s/;
function Ym(e) {
  for (var t = e.length; t-- && Zm.test(e.charAt(t)); )
    ;
  return t;
}
var Xm = /^\s+/;
function Qm(e) {
  return e && e.slice(0, Ym(e) + 1).replace(Xm, "");
}
function po(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var dl = NaN, Jm = /^[-+]0x[0-9a-f]+$/i, eh = /^0b[01]+$/i, th = /^0o[0-7]+$/i, nh = parseInt;
function fl(e) {
  if (typeof e == "number")
    return e;
  if (Cs(e))
    return dl;
  if (po(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = po(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Qm(e);
  var n = eh.test(e);
  return n || th.test(e) ? nh(e.slice(2), n ? 2 : 8) : Jm.test(e) ? dl : +e;
}
function vu(e) {
  return e;
}
var oh = "[object AsyncFunction]", rh = "[object Function]", sh = "[object GeneratorFunction]", ah = "[object Proxy]";
function bu(e) {
  if (!po(e))
    return !1;
  var t = ar(e);
  return t == rh || t == sh || t == oh || t == ah;
}
var Qs = zn["__core-js_shared__"], pl = function() {
  var e = /[^.]+$/.exec(Qs && Qs.keys && Qs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ih(e) {
  return !!pl && pl in e;
}
var lh = Function.prototype, ch = lh.toString;
function Lo(e) {
  if (e != null) {
    try {
      return ch.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var uh = /[\\^$.*+?()[\]{}|]/g, dh = /^\[object .+?Constructor\]$/, fh = Function.prototype, ph = Object.prototype, mh = fh.toString, hh = ph.hasOwnProperty, gh = RegExp(
  "^" + mh.call(hh).replace(uh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vh(e) {
  if (!po(e) || ih(e))
    return !1;
  var t = bu(e) ? gh : dh;
  return t.test(Lo(e));
}
function bh(e, t) {
  return e?.[t];
}
function Oo(e, t) {
  var n = bh(e, t);
  return vh(n) ? n : void 0;
}
var ma = Oo(zn, "WeakMap");
function yh(e, t, n) {
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
var wh = 800, kh = 16, _h = Date.now;
function Ah(e) {
  var t = 0, n = 0;
  return function() {
    var o = _h(), r = kh - (o - n);
    if (n = o, r > 0) {
      if (++t >= wh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Th(e) {
  return function() {
    return e;
  };
}
var fs = function() {
  try {
    var e = Oo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Sh = fs ? function(e, t) {
  return fs(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Th(t),
    writable: !0
  });
} : vu, Ch = Ah(Sh);
function Eh(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var xh = 9007199254740991, Ih = /^(?:0|[1-9]\d*)$/;
function Ha(e, t) {
  var n = typeof e;
  return t = t ?? xh, !!t && (n == "number" || n != "symbol" && Ih.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Lh(e, t, n) {
  t == "__proto__" && fs ? fs(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Wa(e, t) {
  return e === t || e !== e && t !== t;
}
var Oh = Object.prototype, $h = Oh.hasOwnProperty;
function Rh(e, t, n) {
  var o = e[t];
  (!($h.call(e, t) && Wa(o, n)) || n === void 0 && !(t in e)) && Lh(e, t, n);
}
var ml = Math.max;
function Ph(e, t, n) {
  return t = ml(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = ml(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(a), yh(e, this, l);
  };
}
var Mh = 9007199254740991;
function Ua(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mh;
}
function Nh(e) {
  return e != null && Ua(e.length) && !bu(e);
}
var Dh = Object.prototype;
function zh(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Dh;
  return e === n;
}
function Fh(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Bh = "[object Arguments]";
function hl(e) {
  return Zo(e) && ar(e) == Bh;
}
var yu = Object.prototype, jh = yu.hasOwnProperty, Vh = yu.propertyIsEnumerable, Ga = hl(/* @__PURE__ */ function() {
  return arguments;
}()) ? hl : function(e) {
  return Zo(e) && jh.call(e, "callee") && !Vh.call(e, "callee");
};
function Hh() {
  return !1;
}
var wu = typeof exports == "object" && exports && !exports.nodeType && exports, gl = wu && typeof module == "object" && module && !module.nodeType && module, Wh = gl && gl.exports === wu, vl = Wh ? zn.Buffer : void 0, Uh = vl ? vl.isBuffer : void 0, ha = Uh || Hh, Gh = "[object Arguments]", Kh = "[object Array]", qh = "[object Boolean]", Zh = "[object Date]", Yh = "[object Error]", Xh = "[object Function]", Qh = "[object Map]", Jh = "[object Number]", eg = "[object Object]", tg = "[object RegExp]", ng = "[object Set]", og = "[object String]", rg = "[object WeakMap]", sg = "[object ArrayBuffer]", ag = "[object DataView]", ig = "[object Float32Array]", lg = "[object Float64Array]", cg = "[object Int8Array]", ug = "[object Int16Array]", dg = "[object Int32Array]", fg = "[object Uint8Array]", pg = "[object Uint8ClampedArray]", mg = "[object Uint16Array]", hg = "[object Uint32Array]", je = {};
je[ig] = je[lg] = je[cg] = je[ug] = je[dg] = je[fg] = je[pg] = je[mg] = je[hg] = !0;
je[Gh] = je[Kh] = je[sg] = je[qh] = je[ag] = je[Zh] = je[Yh] = je[Xh] = je[Qh] = je[Jh] = je[eg] = je[tg] = je[ng] = je[og] = je[rg] = !1;
function gg(e) {
  return Zo(e) && Ua(e.length) && !!je[ar(e)];
}
function vg(e) {
  return function(t) {
    return e(t);
  };
}
var ku = typeof exports == "object" && exports && !exports.nodeType && exports, Sr = ku && typeof module == "object" && module && !module.nodeType && module, bg = Sr && Sr.exports === ku, Js = bg && mu.process, bl = function() {
  try {
    var e = Sr && Sr.require && Sr.require("util").types;
    return e || Js && Js.binding && Js.binding("util");
  } catch {
  }
}(), yl = bl && bl.isTypedArray, _u = yl ? vg(yl) : gg, yg = Object.prototype, wg = yg.hasOwnProperty;
function kg(e, t) {
  var n = wn(e), o = !n && Ga(e), r = !n && !o && ha(e), s = !n && !o && !r && _u(e), a = n || o || r || s, l = a ? Fh(e.length, String) : [], c = l.length;
  for (var u in e)
    wg.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ha(u, c))) && l.push(u);
  return l;
}
function _g(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ag = _g(Object.keys, Object), Tg = Object.prototype, Sg = Tg.hasOwnProperty;
function Cg(e) {
  if (!zh(e))
    return Ag(e);
  var t = [];
  for (var n in Object(e))
    Sg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Au(e) {
  return Nh(e) ? kg(e) : Cg(e);
}
var Eg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xg = /^\w*$/;
function Ka(e, t) {
  if (wn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Cs(e) ? !0 : xg.test(e) || !Eg.test(e) || t != null && e in Object(t);
}
var $r = Oo(Object, "create");
function Ig() {
  this.__data__ = $r ? $r(null) : {}, this.size = 0;
}
function Lg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Og = "__lodash_hash_undefined__", $g = Object.prototype, Rg = $g.hasOwnProperty;
function Pg(e) {
  var t = this.__data__;
  if ($r) {
    var n = t[e];
    return n === Og ? void 0 : n;
  }
  return Rg.call(t, e) ? t[e] : void 0;
}
var Mg = Object.prototype, Ng = Mg.hasOwnProperty;
function Dg(e) {
  var t = this.__data__;
  return $r ? t[e] !== void 0 : Ng.call(t, e);
}
var zg = "__lodash_hash_undefined__";
function Fg(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $r && t === void 0 ? zg : t, this;
}
function So(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
So.prototype.clear = Ig;
So.prototype.delete = Lg;
So.prototype.get = Pg;
So.prototype.has = Dg;
So.prototype.set = Fg;
function Bg() {
  this.__data__ = [], this.size = 0;
}
function Es(e, t) {
  for (var n = e.length; n--; )
    if (Wa(e[n][0], t))
      return n;
  return -1;
}
var jg = Array.prototype, Vg = jg.splice;
function Hg(e) {
  var t = this.__data__, n = Es(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Vg.call(t, n, 1), --this.size, !0;
}
function Wg(e) {
  var t = this.__data__, n = Es(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ug(e) {
  return Es(this.__data__, e) > -1;
}
function Gg(e, t) {
  var n = this.__data__, o = Es(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function eo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
eo.prototype.clear = Bg;
eo.prototype.delete = Hg;
eo.prototype.get = Wg;
eo.prototype.has = Ug;
eo.prototype.set = Gg;
var Rr = Oo(zn, "Map");
function Kg() {
  this.size = 0, this.__data__ = {
    hash: new So(),
    map: new (Rr || eo)(),
    string: new So()
  };
}
function qg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function xs(e, t) {
  var n = e.__data__;
  return qg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Zg(e) {
  var t = xs(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yg(e) {
  return xs(this, e).get(e);
}
function Xg(e) {
  return xs(this, e).has(e);
}
function Qg(e, t) {
  var n = xs(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function to(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
to.prototype.clear = Kg;
to.prototype.delete = Zg;
to.prototype.get = Yg;
to.prototype.has = Xg;
to.prototype.set = Qg;
var Jg = "Expected a function";
function qa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Jg);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (qa.Cache || to)(), n;
}
qa.Cache = to;
var ev = 500;
function tv(e) {
  var t = qa(e, function(o) {
    return n.size === ev && n.clear(), o;
  }), n = t.cache;
  return t;
}
var nv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ov = /\\(\\)?/g, rv = tv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(nv, function(n, o, r, s) {
    t.push(r ? s.replace(ov, "$1") : o || n);
  }), t;
});
function sv(e) {
  return e == null ? "" : gu(e);
}
function Is(e, t) {
  return wn(e) ? e : Ka(e, t) ? [e] : rv(sv(e));
}
function zr(e) {
  if (typeof e == "string" || Cs(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Za(e, t) {
  t = Is(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[zr(t[n++])];
  return n && n == o ? e : void 0;
}
function co(e, t, n) {
  var o = e == null ? void 0 : Za(e, t);
  return o === void 0 ? n : o;
}
function Tu(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var wl = Nn ? Nn.isConcatSpreadable : void 0;
function av(e) {
  return wn(e) || Ga(e) || !!(wl && e && e[wl]);
}
function iv(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = av), r || (r = []); ++s < a; ) {
    var l = e[s];
    n(l) ? Tu(r, l) : r[r.length] = l;
  }
  return r;
}
function lv(e) {
  var t = e == null ? 0 : e.length;
  return t ? iv(e) : [];
}
function cv(e) {
  return Ch(Ph(e, void 0, lv), e + "");
}
function lo() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return wn(e) ? e : [e];
}
function uv() {
  this.__data__ = new eo(), this.size = 0;
}
function dv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function fv(e) {
  return this.__data__.get(e);
}
function pv(e) {
  return this.__data__.has(e);
}
var mv = 200;
function hv(e, t) {
  var n = this.__data__;
  if (n instanceof eo) {
    var o = n.__data__;
    if (!Rr || o.length < mv - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new to(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xn(e) {
  var t = this.__data__ = new eo(e);
  this.size = t.size;
}
Xn.prototype.clear = uv;
Xn.prototype.delete = dv;
Xn.prototype.get = fv;
Xn.prototype.has = pv;
Xn.prototype.set = hv;
function gv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function vv() {
  return [];
}
var bv = Object.prototype, yv = bv.propertyIsEnumerable, kl = Object.getOwnPropertySymbols, wv = kl ? function(e) {
  return e == null ? [] : (e = Object(e), gv(kl(e), function(t) {
    return yv.call(e, t);
  }));
} : vv;
function kv(e, t, n) {
  var o = t(e);
  return wn(e) ? o : Tu(o, n(e));
}
function _l(e) {
  return kv(e, Au, wv);
}
var ga = Oo(zn, "DataView"), va = Oo(zn, "Promise"), ba = Oo(zn, "Set"), Al = "[object Map]", _v = "[object Object]", Tl = "[object Promise]", Sl = "[object Set]", Cl = "[object WeakMap]", El = "[object DataView]", Av = Lo(ga), Tv = Lo(Rr), Sv = Lo(va), Cv = Lo(ba), Ev = Lo(ma), io = ar;
(ga && io(new ga(new ArrayBuffer(1))) != El || Rr && io(new Rr()) != Al || va && io(va.resolve()) != Tl || ba && io(new ba()) != Sl || ma && io(new ma()) != Cl) && (io = function(e) {
  var t = ar(e), n = t == _v ? e.constructor : void 0, o = n ? Lo(n) : "";
  if (o)
    switch (o) {
      case Av:
        return El;
      case Tv:
        return Al;
      case Sv:
        return Tl;
      case Cv:
        return Sl;
      case Ev:
        return Cl;
    }
  return t;
});
var xl = zn.Uint8Array, xv = "__lodash_hash_undefined__";
function Iv(e) {
  return this.__data__.set(e, xv), this;
}
function Lv(e) {
  return this.__data__.has(e);
}
function ps(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new to(); ++t < n; )
    this.add(e[t]);
}
ps.prototype.add = ps.prototype.push = Iv;
ps.prototype.has = Lv;
function Ov(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function $v(e, t) {
  return e.has(t);
}
var Rv = 1, Pv = 2;
function Su(e, t, n, o, r, s) {
  var a = n & Rv, l = e.length, c = t.length;
  if (l != c && !(a && c > l))
    return !1;
  var u = s.get(e), d = s.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, g = !0, w = n & Pv ? new ps() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < l; ) {
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
      if (!Ov(t, function(k, P) {
        if (!$v(w, P) && (h === k || r(h, k, n, o, s)))
          return w.push(P);
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
function Mv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Nv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Dv = 1, zv = 2, Fv = "[object Boolean]", Bv = "[object Date]", jv = "[object Error]", Vv = "[object Map]", Hv = "[object Number]", Wv = "[object RegExp]", Uv = "[object Set]", Gv = "[object String]", Kv = "[object Symbol]", qv = "[object ArrayBuffer]", Zv = "[object DataView]", Il = Nn ? Nn.prototype : void 0, ea = Il ? Il.valueOf : void 0;
function Yv(e, t, n, o, r, s, a) {
  switch (n) {
    case Zv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case qv:
      return !(e.byteLength != t.byteLength || !s(new xl(e), new xl(t)));
    case Fv:
    case Bv:
    case Hv:
      return Wa(+e, +t);
    case jv:
      return e.name == t.name && e.message == t.message;
    case Wv:
    case Gv:
      return e == t + "";
    case Vv:
      var l = Mv;
    case Uv:
      var c = o & Dv;
      if (l || (l = Nv), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= zv, a.set(e, t);
      var d = Su(l(e), l(t), o, r, s, a);
      return a.delete(e), d;
    case Kv:
      if (ea)
        return ea.call(e) == ea.call(t);
  }
  return !1;
}
var Xv = 1, Qv = Object.prototype, Jv = Qv.hasOwnProperty;
function e0(e, t, n, o, r, s) {
  var a = n & Xv, l = _l(e), c = l.length, u = _l(t), d = u.length;
  if (c != d && !a)
    return !1;
  for (var m = c; m--; ) {
    var g = l[m];
    if (!(a ? g in t : Jv.call(t, g)))
      return !1;
  }
  var w = s.get(e), h = s.get(t);
  if (w && h)
    return w == t && h == e;
  var b = !0;
  s.set(e, t), s.set(t, e);
  for (var C = a; ++m < c; ) {
    g = l[m];
    var k = e[g], P = t[g];
    if (o)
      var j = a ? o(P, k, g, t, e, s) : o(k, P, g, e, t, s);
    if (!(j === void 0 ? k === P || r(k, P, n, o, s) : j)) {
      b = !1;
      break;
    }
    C || (C = g == "constructor");
  }
  if (b && !C) {
    var I = e.constructor, L = t.constructor;
    I != L && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof L == "function" && L instanceof L) && (b = !1);
  }
  return s.delete(e), s.delete(t), b;
}
var t0 = 1, Ll = "[object Arguments]", Ol = "[object Array]", Zr = "[object Object]", n0 = Object.prototype, $l = n0.hasOwnProperty;
function o0(e, t, n, o, r, s) {
  var a = wn(e), l = wn(t), c = a ? Ol : io(e), u = l ? Ol : io(t);
  c = c == Ll ? Zr : c, u = u == Ll ? Zr : u;
  var d = c == Zr, m = u == Zr, g = c == u;
  if (g && ha(e)) {
    if (!ha(t))
      return !1;
    a = !0, d = !1;
  }
  if (g && !d)
    return s || (s = new Xn()), a || _u(e) ? Su(e, t, n, o, r, s) : Yv(e, t, c, n, o, r, s);
  if (!(n & t0)) {
    var w = d && $l.call(e, "__wrapped__"), h = m && $l.call(t, "__wrapped__");
    if (w || h) {
      var b = w ? e.value() : e, C = h ? t.value() : t;
      return s || (s = new Xn()), r(b, C, n, o, s);
    }
  }
  return g ? (s || (s = new Xn()), e0(e, t, n, o, r, s)) : !1;
}
function Ls(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Zo(e) && !Zo(t) ? e !== e && t !== t : o0(e, t, n, o, Ls, r);
}
var r0 = 1, s0 = 2;
function a0(e, t, n, o) {
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
    var l = a[0], c = e[l], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var d = new Xn(), m;
      if (!(m === void 0 ? Ls(u, c, r0 | s0, o, d) : m))
        return !1;
    }
  }
  return !0;
}
function Cu(e) {
  return e === e && !po(e);
}
function i0(e) {
  for (var t = Au(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Cu(r)];
  }
  return t;
}
function Eu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function l0(e) {
  var t = i0(e);
  return t.length == 1 && t[0][2] ? Eu(t[0][0], t[0][1]) : function(n) {
    return n === e || a0(n, e, t);
  };
}
function c0(e, t) {
  return e != null && t in Object(e);
}
function u0(e, t, n) {
  t = Is(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = zr(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && Ua(r) && Ha(a, r) && (wn(e) || Ga(e)));
}
function xu(e, t) {
  return e != null && u0(e, t, c0);
}
var d0 = 1, f0 = 2;
function p0(e, t) {
  return Ka(e) && Cu(t) ? Eu(zr(e), t) : function(n) {
    var o = co(n, e);
    return o === void 0 && o === t ? xu(n, e) : Ls(t, o, d0 | f0);
  };
}
function m0(e) {
  return function(t) {
    return t?.[e];
  };
}
function h0(e) {
  return function(t) {
    return Za(t, e);
  };
}
function g0(e) {
  return Ka(e) ? m0(zr(e)) : h0(e);
}
function v0(e) {
  return typeof e == "function" ? e : e == null ? vu : typeof e == "object" ? wn(e) ? p0(e[0], e[1]) : l0(e) : g0(e);
}
var ta = function() {
  return zn.Date.now();
}, b0 = "Expected a function", y0 = Math.max, w0 = Math.min;
function k0(e, t, n) {
  var o, r, s, a, l, c, u = 0, d = !1, m = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(b0);
  t = fl(t) || 0, po(n) && (d = !!n.leading, m = "maxWait" in n, s = m ? y0(fl(n.maxWait) || 0, t) : s, g = "trailing" in n ? !!n.trailing : g);
  function w(O) {
    var R = o, q = r;
    return o = r = void 0, u = O, a = e.apply(q, R), a;
  }
  function h(O) {
    return u = O, l = setTimeout(k, t), d ? w(O) : a;
  }
  function b(O) {
    var R = O - c, q = O - u, B = t - R;
    return m ? w0(B, s - q) : B;
  }
  function C(O) {
    var R = O - c, q = O - u;
    return c === void 0 || R >= t || R < 0 || m && q >= s;
  }
  function k() {
    var O = ta();
    if (C(O))
      return P(O);
    l = setTimeout(k, b(O));
  }
  function P(O) {
    return l = void 0, g && o ? w(O) : (o = r = void 0, a);
  }
  function j() {
    l !== void 0 && clearTimeout(l), u = 0, o = c = r = l = void 0;
  }
  function I() {
    return l === void 0 ? a : P(ta());
  }
  function L() {
    var O = ta(), R = C(O);
    if (o = arguments, r = this, c = O, R) {
      if (l === void 0)
        return h(c);
      if (m)
        return clearTimeout(l), l = setTimeout(k, t), w(c);
    }
    return l === void 0 && (l = setTimeout(k, t)), a;
  }
  return L.cancel = j, L.flush = I, L;
}
function _0(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Eh(e, v0(t), r);
}
function ms(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Cr(e, t) {
  return Ls(e, t);
}
function Qn(e) {
  return e == null;
}
function Iu(e) {
  return e === void 0;
}
function A0(e, t, n, o) {
  if (!po(e))
    return e;
  t = Is(t, e);
  for (var r = -1, s = t.length, a = s - 1, l = e; l != null && ++r < s; ) {
    var c = zr(t[r]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (r != a) {
      var d = l[c];
      u = void 0, u === void 0 && (u = po(d) ? d : Ha(t[r + 1]) ? [] : {});
    }
    Rh(l, c, u), l = l[c];
  }
  return e;
}
function T0(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], l = Za(e, a);
    n(l, a) && A0(s, Is(a, e), l);
  }
  return s;
}
function S0(e, t) {
  return T0(e, t, function(n, o) {
    return xu(e, o);
  });
}
var C0 = cv(function(e, t) {
  return e == null ? {} : S0(e, t);
});
const $n = (e) => e === void 0, Pr = (e) => typeof e == "boolean", Me = (e) => typeof e == "number", vn = (e) => typeof Element > "u" ? !1 : e instanceof Element, E0 = (e) => Xt(e) ? !Number.isNaN(Number(e)) : !1;
var x0 = Object.defineProperty, I0 = Object.defineProperties, L0 = Object.getOwnPropertyDescriptors, Rl = Object.getOwnPropertySymbols, O0 = Object.prototype.hasOwnProperty, $0 = Object.prototype.propertyIsEnumerable, Pl = (e, t, n) => t in e ? x0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, R0 = (e, t) => {
  for (var n in t || (t = {}))
    O0.call(t, n) && Pl(e, n, t[n]);
  if (Rl)
    for (var n of Rl(t))
      $0.call(t, n) && Pl(e, n, t[n]);
  return e;
}, P0 = (e, t) => I0(e, L0(t));
function M0(e, t) {
  var n;
  const o = uo();
  return Pa(() => {
    o.value = e();
  }, P0(R0({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ra(o);
}
var Ml;
const Ue = typeof window < "u", N0 = (e) => typeof e == "string", Lu = () => {
}, ya = Ue && ((Ml = window?.navigator) == null ? void 0 : Ml.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ya(e) {
  return typeof e == "function" ? e() : i(e);
}
function D0(e) {
  return e;
}
function Fr(e) {
  return Lf() ? (Gc(e), !0) : !1;
}
function z0(e, t = !0) {
  xt() ? ot(e) : t ? e() : Ye(e);
}
function hs(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = M(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function l() {
    r.value = !1, a();
  }
  function c(...u) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...u);
    }, Ya(t));
  }
  return o && (r.value = !0, Ue && c()), Fr(l), {
    isPending: Ra(r),
    start: c,
    stop: l
  };
}
function Yn(e) {
  var t;
  const n = Ya(e);
  return (t = n?.$el) != null ? t : n;
}
const Os = Ue ? window : void 0;
function bn(...e) {
  let t, n, o, r;
  if (N0(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Os) : [t, n, o, r] = e, !t)
    return Lu;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((d) => d()), s.length = 0;
  }, l = (d, m, g, w) => (d.addEventListener(m, g, w), () => d.removeEventListener(m, g, w)), c = pe(() => [Yn(t), Ya(r)], ([d, m]) => {
    a(), d && s.push(...n.flatMap((g) => o.map((w) => l(d, g, w, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), a();
  };
  return Fr(u), u;
}
let Nl = !1;
function F0(e, t, n = {}) {
  const { window: o = Os, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  ya && !Nl && (Nl = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", Lu)));
  let l = !0;
  const c = (g) => r.some((w) => {
    if (typeof w == "string")
      return Array.from(o.document.querySelectorAll(w)).some((h) => h === g.target || g.composedPath().includes(h));
    {
      const h = Yn(w);
      return h && (g.target === h || g.composedPath().includes(h));
    }
  }), d = [
    bn(o, "click", (g) => {
      const w = Yn(e);
      if (!(!w || w === g.target || g.composedPath().includes(w))) {
        if (g.detail === 0 && (l = !c(g)), !l) {
          l = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: s }),
    bn(o, "pointerdown", (g) => {
      const w = Yn(e);
      w && (l = !g.composedPath().includes(w) && !c(g));
    }, { passive: !0 }),
    a && bn(o, "blur", (g) => {
      var w;
      const h = Yn(e);
      ((w = o.document.activeElement) == null ? void 0 : w.tagName) === "IFRAME" && !h?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function Ou(e, t = !1) {
  const n = M(), o = () => n.value = !!e();
  return o(), z0(o, t), n;
}
const Dl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zl = "__vueuse_ssr_handlers__";
Dl[zl] = Dl[zl] || {};
var Fl = Object.getOwnPropertySymbols, B0 = Object.prototype.hasOwnProperty, j0 = Object.prototype.propertyIsEnumerable, V0 = (e, t) => {
  var n = {};
  for (var o in e)
    B0.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Fl)
    for (var o of Fl(e))
      t.indexOf(o) < 0 && j0.call(e, o) && (n[o] = e[o]);
  return n;
};
function Ln(e, t, n = {}) {
  const o = n, { window: r = Os } = o, s = V0(o, ["window"]);
  let a;
  const l = Ou(() => r && "ResizeObserver" in r), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => Yn(e), (m) => {
    c(), l.value && r && m && (a = new ResizeObserver(t), a.observe(m, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return Fr(d), {
    isSupported: l,
    stop: d
  };
}
var Bl = Object.getOwnPropertySymbols, H0 = Object.prototype.hasOwnProperty, W0 = Object.prototype.propertyIsEnumerable, U0 = (e, t) => {
  var n = {};
  for (var o in e)
    H0.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Bl)
    for (var o of Bl(e))
      t.indexOf(o) < 0 && W0.call(e, o) && (n[o] = e[o]);
  return n;
};
function G0(e, t, n = {}) {
  const o = n, { window: r = Os } = o, s = U0(o, ["window"]);
  let a;
  const l = Ou(() => r && "MutationObserver" in r), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = pe(() => Yn(e), (m) => {
    c(), l.value && r && m && (a = new MutationObserver(t), a.observe(m, s));
  }, { immediate: !0 }), d = () => {
    c(), u();
  };
  return Fr(d), {
    isSupported: l,
    stop: d
  };
}
var jl;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(jl || (jl = {}));
var K0 = Object.defineProperty, Vl = Object.getOwnPropertySymbols, q0 = Object.prototype.hasOwnProperty, Z0 = Object.prototype.propertyIsEnumerable, Hl = (e, t, n) => t in e ? K0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Y0 = (e, t) => {
  for (var n in t || (t = {}))
    q0.call(t, n) && Hl(e, n, t[n]);
  if (Vl)
    for (var n of Vl(t))
      Z0.call(t, n) && Hl(e, n, t[n]);
  return e;
};
const X0 = {
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
Y0({
  linear: D0
}, X0);
class Q0 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Xa(e, t) {
  throw new Q0(`[${e}] ${t}`);
}
const Wl = {
  current: 0
}, Ul = M(0), $u = 2e3, Gl = Symbol("elZIndexContextKey"), Ru = Symbol("zIndexContextKey"), Qa = (e) => {
  const t = xt() ? Le(Gl, Wl) : Wl, n = e || (xt() ? Le(Ru, void 0) : void 0), o = S(() => {
    const a = i(n);
    return Me(a) ? a : $u;
  }), r = S(() => o.value + Ul.value), s = () => (t.current++, Ul.value = t.current, r.value);
  return !Ue && Le(Gl), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var J0 = {
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
const eb = (e) => (t, n) => tb(t, n, i(e)), tb = (e, t, n) => co(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), nb = (e) => {
  const t = S(() => i(e).name), n = en(e) ? e : M(e);
  return {
    lang: t,
    locale: n,
    t: eb(e)
  };
}, Pu = Symbol("localeContextKey"), $s = (e) => {
  const t = e || Le(Pu, M());
  return nb(S(() => t.value || J0));
}, Mu = "__epPropKey", he = (e) => e, ob = (e) => nn(e) && !!e[Mu], Rs = (e, t) => {
  if (!nn(e) || ob(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, c = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), il(e, "default") && m.push(r), d || (d = m.includes(u))), a && (d || (d = a(u))), !d && m.length > 0) {
        const g = [...new Set(m)].map((w) => JSON.stringify(w)).join(", ");
        Of(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Mu]: !0
  };
  return il(e, "default") && (c.default = r), c;
}, Ne = (e) => ms(Object.entries(e).map(([t, n]) => [
  t,
  Rs(n, t)
])), Nu = ["", "default", "small", "large"], Ps = Rs({
  type: String,
  values: Nu,
  required: !1
}), Du = Symbol("size"), rb = () => {
  const e = Le(Du, {});
  return S(() => i(e.size) || "");
}, zu = Symbol("emptyValuesContextKey"), sb = ["", void 0, null], ab = void 0, Fu = Ne({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => nt(e) ? !e() : !e
  }
}), ib = (e, t) => {
  const n = xt() ? Le(zu, M({})) : M({}), o = S(() => e.emptyValues || n.value.emptyValues || sb), r = S(() => nt(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : nt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : ab), s = (a) => o.value.includes(a);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Kl = (e) => Object.keys(e), gs = M();
function Ja(e, t = void 0) {
  const n = xt() ? Le(fu, gs) : gs;
  return e ? S(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function Bu(e, t) {
  const n = Ja(), o = tt(e, S(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Tr;
  })), r = $s(S(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), s = Qa(S(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || $u;
  })), a = S(() => {
    var l;
    return i(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return ju(S(() => i(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const ju = (e, t, n = !1) => {
  var o;
  const r = !!xt(), s = r ? Ja() : void 0, a = (o = void 0) != null ? o : r ? yn : void 0;
  if (!a)
    return;
  const l = S(() => {
    const c = i(e);
    return s?.value ? lb(s.value, c) : c;
  });
  return a(fu, l), a(Pu, S(() => l.value.locale)), a(pu, S(() => l.value.namespace)), a(Ru, S(() => l.value.zIndex)), a(Du, {
    size: S(() => l.value.size || "")
  }), a(zu, S(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !gs.value) && (gs.value = l.value), l;
}, lb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Kl(e), ...Kl(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, vt = "update:modelValue", Yo = "change", qo = "input";
var Ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const Vu = (e = "") => e.split(" ").filter((t) => !!t.trim()), ql = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, cb = (e, t) => {
  !e || !t.trim() || e.classList.add(...Vu(t));
}, ub = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Vu(t));
}, db = (e, t) => {
  var n;
  if (!Ue || !e)
    return "";
  let o = Dm(t);
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
function mo(e, t = "px") {
  if (!e)
    return "";
  if (Me(e) || E0(e))
    return `${e}${t}`;
  if (Xt(e))
    return e;
}
let Yr;
const fb = (e) => {
  var t;
  if (!Ue)
    return 0;
  if (Yr !== void 0)
    return Yr;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Yr = o - s, Yr;
};
function pb(e, t) {
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
  const r = t.offsetTop + n.reduce((c, u) => c + u.offsetTop, 0), s = r + t.offsetHeight, a = e.scrollTop, l = a + e.clientHeight;
  r < a ? e.scrollTop = r : s > l && (e.scrollTop = s - e.clientHeight);
}
const _n = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Hu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Wu = (e) => (e.install = fo, e), mb = Ne({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), hb = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), gb = /* @__PURE__ */ oe({
  ...hb,
  props: mb,
  setup(e) {
    const t = e, n = tt("icon"), o = S(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: $n(r) ? void 0 : mo(r),
        "--color": s
      };
    });
    return (r, s) => (T(), D("i", Ao({
      class: i(n).b(),
      style: i(o)
    }, r.$attrs), [
      le(r.$slots, "default")
    ], 16));
  }
});
var vb = /* @__PURE__ */ Ve(gb, [["__file", "icon.vue"]]);
const Nt = _n(vb);
/*! Element Plus Icons Vue v2.3.1 */
var bb = /* @__PURE__ */ oe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Uu = bb, yb = /* @__PURE__ */ oe({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), wb = yb, kb = /* @__PURE__ */ oe({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (T(), D("svg", {
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
}), _b = kb, Ab = /* @__PURE__ */ oe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Tb = Ab, Sb = /* @__PURE__ */ oe({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (T(), D("svg", {
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
}), ei = Sb, Cb = /* @__PURE__ */ oe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), vs = Cb, Eb = /* @__PURE__ */ oe({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (T(), D("svg", {
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
}), xb = Eb, Ib = /* @__PURE__ */ oe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Lb = Ib, Ob = /* @__PURE__ */ oe({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), $b = Ob, Rb = /* @__PURE__ */ oe({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Pb = Rb, Mb = /* @__PURE__ */ oe({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Nb = Mb, Db = /* @__PURE__ */ oe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), zb = Db, Fb = /* @__PURE__ */ oe({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Bb = Fb, jb = /* @__PURE__ */ oe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Vb = jb;
const Co = he([
  String,
  Object,
  Function
]), Gu = {
  Close: vs
}, Hb = {
  Close: vs
}, bs = {
  success: zb,
  warning: Vb,
  error: Tb,
  info: Lb
}, Ku = {
  validating: $b,
  success: _b,
  error: ei
}, qu = () => Ue && /firefox/i.test(window.navigator.userAgent);
let Vt;
const Wb = {
  height: "0",
  visibility: "hidden",
  overflow: qu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Ub = [
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
function Gb(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Ub.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Zl(e, t = 1, n) {
  var o;
  Vt || (Vt = document.createElement("textarea"), document.body.appendChild(Vt));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: l } = Gb(e);
  l.forEach(([m, g]) => Vt?.style.setProperty(m, g)), Object.entries(Wb).forEach(([m, g]) => Vt?.style.setProperty(m, g, "important")), Vt.value = e.value || e.placeholder || "";
  let c = Vt.scrollHeight;
  const u = {};
  a === "border-box" ? c = c + s : a === "content-box" && (c = c - r), Vt.value = "";
  const d = Vt.scrollHeight - r;
  if (Me(t)) {
    let m = d * t;
    a === "border-box" && (m = m + r + s), c = Math.max(m, c), u.minHeight = `${m}px`;
  }
  if (Me(n)) {
    let m = d * n;
    a === "border-box" && (m = m + r + s), c = Math.min(m, c);
  }
  return u.height = `${c}px`, (o = Vt.parentNode) == null || o.removeChild(Vt), Vt = void 0, u;
}
const Zu = (e) => e, Kb = Ne({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), ir = (e) => C0(Kb, e), qb = Ne({
  id: {
    type: String,
    default: void 0
  },
  size: Ps,
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
    type: Co
  },
  prefixIcon: {
    type: Co
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
    default: () => Zu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...ir(["ariaLabel"])
}), Zb = {
  [vt]: (e) => Xt(e),
  input: (e) => Xt(e),
  change: (e) => Xt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Yb = ["class", "style"], Xb = /^on[A-Z]/, Qb = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = S(() => (n?.value || []).concat(Yb)), r = xt();
  return r ? S(() => {
    var s;
    return ms(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && Xb.test(a))));
  }) : S(() => ({}));
}, ti = Symbol("formContextKey"), ys = Symbol("formItemContextKey"), Yl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Jb = Symbol("elIdInjection"), Yu = () => xt() ? Le(Jb, Yl) : Yl, Xo = (e) => {
  const t = Yu(), n = Va();
  return M0(() => i(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, ni = () => {
  const e = Le(ti, void 0), t = Le(ys, void 0);
  return {
    form: e,
    formItem: t
  };
}, Xu = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = M(!1)), o || (o = M(!1));
  const r = M();
  let s;
  const a = S(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return ot(() => {
    s = pe([Zn(e, "id"), n], ([l, c]) => {
      const u = l ?? (c ? void 0 : Xo().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !c && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Ma(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, Qu = (e) => {
  const t = xt();
  return S(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, Ms = (e, t = {}) => {
  const n = M(void 0), o = t.prop ? n : Qu("size"), r = t.global ? n : rb(), s = t.form ? { size: void 0 } : Le(ti, void 0), a = t.formItem ? { size: void 0 } : Le(ys, void 0);
  return S(() => o.value || i(e) || a?.size || s?.size || r.value || "");
}, Ju = (e) => {
  const t = Qu("disabled"), n = Le(ti, void 0);
  return S(() => t.value || i(e) || n?.disabled || !1);
};
function ed(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = xt(), { emit: a } = s, l = uo(), c = M(!1), u = (g) => {
    nt(t) && t(g) || c.value || (c.value = !0, a("focus", g), n?.());
  }, d = (g) => {
    var w;
    nt(o) && o(g) || g.relatedTarget && ((w = l.value) != null && w.contains(g.relatedTarget)) || (c.value = !1, a("blur", g), r?.());
  }, m = () => {
    var g, w;
    (g = l.value) != null && g.contains(document.activeElement) && l.value !== document.activeElement || (w = e.value) == null || w.focus();
  };
  return pe(l, (g) => {
    g && g.setAttribute("tabindex", "-1");
  }), bn(l, "focus", u, !0), bn(l, "blur", d, !0), bn(l, "click", m, !0), {
    isFocused: c,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: d
  };
}
const e1 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function td({
  afterComposition: e,
  emit: t
}) {
  const n = M(!1), o = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, r = (l) => {
    var c;
    t?.("compositionupdate", l);
    const u = (c = l.target) == null ? void 0 : c.value, d = u[u.length - 1] || "";
    n.value = !e1(d);
  }, s = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, Ye(() => e(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? s(l) : r(l);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function t1(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: a } = e.value;
    if (r == null || s == null)
      return;
    const l = a.slice(0, Math.max(0, r)), c = a.slice(Math.max(0, s));
    t = {
      selectionStart: r,
      selectionEnd: s,
      value: a,
      beforeTxt: l,
      afterTxt: c
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: l } = t;
    if (s == null || a == null || l == null)
      return;
    let c = r.length;
    if (r.endsWith(a))
      c = r.length - a.length;
    else if (r.startsWith(s))
      c = s.length;
    else {
      const u = s[l - 1], d = r.indexOf(u, l - 1);
      d !== -1 && (c = d + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, o];
}
const n1 = "ElInput", o1 = oe({
  name: n1,
  inheritAttrs: !1
}), r1 = /* @__PURE__ */ oe({
  ...o1,
  props: qb,
  emits: Zb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = $f(), s = Qb(), a = Kc(), l = S(() => [
      o.type === "textarea" ? b.b() : h.b(),
      h.m(g.value),
      h.is("disabled", w.value),
      h.is("exceed", Ge.value),
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
      h.is("focus", q.value)
    ]), { form: u, formItem: d } = ni(), { inputId: m } = Xu(o, {
      formItemContext: d
    }), g = Ms(), w = Ju(), h = tt("input"), b = tt("textarea"), C = uo(), k = uo(), P = M(!1), j = M(!1), I = M(), L = uo(o.inputStyle), O = S(() => C.value || k.value), { wrapperRef: R, isFocused: q, handleFocus: B, handleBlur: ne } = ed(O, {
      beforeFocus() {
        return w.value;
      },
      afterBlur() {
        var K;
        o.validateEvent && ((K = d?.validate) == null || K.call(d, "blur").catch((ke) => void 0));
      }
    }), H = S(() => {
      var K;
      return (K = u?.statusIcon) != null ? K : !1;
    }), se = S(() => d?.validateState || ""), de = S(() => se.value && Ku[se.value]), ce = S(() => j.value ? Bb : xb), $ = S(() => [
      r.style
    ]), V = S(() => [
      o.inputStyle,
      L.value,
      { resize: o.resize }
    ]), F = S(() => Qn(o.modelValue) ? "" : String(o.modelValue)), ue = S(() => o.clearable && !w.value && !o.readonly && !!F.value && (q.value || P.value)), fe = S(() => o.showPassword && !w.value && !!F.value && (!!F.value || q.value)), Ae = S(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !w.value && !o.readonly && !o.showPassword), De = S(() => F.value.length), Ge = S(() => !!Ae.value && De.value > Number(o.maxlength)), ve = S(() => !!a.suffix || !!o.suffixIcon || ue.value || o.showPassword || Ae.value || !!se.value && H.value), [W, U] = t1(C);
    Ln(k, (K) => {
      if (ee(), !Ae.value || o.resize !== "both")
        return;
      const ke = K[0], { width: dt } = ke.contentRect;
      I.value = {
        right: `calc(100% - ${dt + 15 + 6}px)`
      };
    });
    const me = () => {
      const { type: K, autosize: ke } = o;
      if (!(!Ue || K !== "textarea" || !k.value))
        if (ke) {
          const dt = nn(ke) ? ke.minRows : void 0, xe = nn(ke) ? ke.maxRows : void 0, kt = Zl(k.value, dt, xe);
          L.value = {
            overflowY: "hidden",
            ...kt
          }, Ye(() => {
            k.value.offsetHeight, L.value = kt;
          });
        } else
          L.value = {
            minHeight: Zl(k.value).minHeight
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
      const K = O.value, ke = o.formatter ? o.formatter(F.value) : F.value;
      !K || K.value === ke || (K.value = ke);
    }, He = async (K) => {
      W();
      let { value: ke } = K.target;
      if (o.formatter && o.parser && (ke = o.parser(ke)), !ut.value) {
        if (ke === F.value) {
          X();
          return;
        }
        n(vt, ke), n(qo, ke), await Ye(), X(), U();
      }
    }, ze = (K) => {
      let { value: ke } = K.target;
      o.formatter && o.parser && (ke = o.parser(ke)), n(Yo, ke);
    }, {
      isComposing: ut,
      handleCompositionStart: Ke,
      handleCompositionUpdate: It,
      handleCompositionEnd: bt
    } = td({ emit: n, afterComposition: He }), qe = () => {
      W(), j.value = !j.value, setTimeout(U);
    }, yt = () => {
      var K;
      return (K = O.value) == null ? void 0 : K.focus();
    }, rt = () => {
      var K;
      return (K = O.value) == null ? void 0 : K.blur();
    }, wt = (K) => {
      P.value = !1, n("mouseleave", K);
    }, Qe = (K) => {
      P.value = !0, n("mouseenter", K);
    }, ct = (K) => {
      n("keydown", K);
    }, Lt = () => {
      var K;
      (K = O.value) == null || K.select();
    }, Ft = () => {
      n(vt, ""), n(Yo, ""), n("clear"), n(qo, "");
    };
    return pe(() => o.modelValue, () => {
      var K;
      Ye(() => me()), o.validateEvent && ((K = d?.validate) == null || K.call(d, "change").catch((ke) => void 0));
    }), pe(F, () => X()), pe(() => o.type, async () => {
      await Ye(), X(), me();
    }), ot(() => {
      !o.formatter && o.parser, X(), Ye(me);
    }), t({
      input: C,
      textarea: k,
      ref: O,
      textareaStyle: V,
      autosize: Zn(o, "autosize"),
      isComposing: ut,
      focus: yt,
      blur: rt,
      select: Lt,
      clear: Ft,
      resizeTextarea: me
    }), (K, ke) => (T(), D("div", {
      class: z([
        i(l),
        {
          [i(h).bm("group", "append")]: K.$slots.append,
          [i(h).bm("group", "prepend")]: K.$slots.prepend
        }
      ]),
      style: mt(i($)),
      onMouseenter: Qe,
      onMouseleave: wt
    }, [
      Y(" input "),
      K.type !== "textarea" ? (T(), D(at, { key: 0 }, [
        Y(" prepend slot "),
        K.$slots.prepend ? (T(), D("div", {
          key: 0,
          class: z(i(h).be("group", "prepend"))
        }, [
          le(K.$slots, "prepend")
        ], 2)) : Y("v-if", !0),
        f("div", {
          ref_key: "wrapperRef",
          ref: R,
          class: z(i(c))
        }, [
          Y(" prefix slot "),
          K.$slots.prefix || K.prefixIcon ? (T(), D("span", {
            key: 0,
            class: z(i(h).e("prefix"))
          }, [
            f("span", {
              class: z(i(h).e("prefix-inner"))
            }, [
              le(K.$slots, "prefix"),
              K.prefixIcon ? (T(), re(i(Nt), {
                key: 0,
                class: z(i(h).e("icon"))
              }, {
                default: J(() => [
                  (T(), re(tn(K.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0),
          f("input", Ao({
            id: i(m),
            ref_key: "input",
            ref: C,
            class: i(h).e("inner")
          }, i(s), {
            minlength: K.minlength,
            maxlength: K.maxlength,
            type: K.showPassword ? j.value ? "text" : "password" : K.type,
            disabled: i(w),
            readonly: K.readonly,
            autocomplete: K.autocomplete,
            tabindex: K.tabindex,
            "aria-label": K.ariaLabel,
            placeholder: K.placeholder,
            style: K.inputStyle,
            form: K.form,
            autofocus: K.autofocus,
            role: K.containerRole,
            onCompositionstart: i(Ke),
            onCompositionupdate: i(It),
            onCompositionend: i(bt),
            onInput: He,
            onChange: ze,
            onKeydown: ct
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Y(" suffix slot "),
          i(ve) ? (T(), D("span", {
            key: 1,
            class: z(i(h).e("suffix"))
          }, [
            f("span", {
              class: z(i(h).e("suffix-inner"))
            }, [
              !i(ue) || !i(fe) || !i(Ae) ? (T(), D(at, { key: 0 }, [
                le(K.$slots, "suffix"),
                K.suffixIcon ? (T(), re(i(Nt), {
                  key: 0,
                  class: z(i(h).e("icon"))
                }, {
                  default: J(() => [
                    (T(), re(tn(K.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Y("v-if", !0)
              ], 64)) : Y("v-if", !0),
              i(ue) ? (T(), re(i(Nt), {
                key: 1,
                class: z([i(h).e("icon"), i(h).e("clear")]),
                onMousedown: Ze(i(fo), ["prevent"]),
                onClick: Ft
              }, {
                default: J(() => [
                  _(i(ei))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Y("v-if", !0),
              i(fe) ? (T(), re(i(Nt), {
                key: 2,
                class: z([i(h).e("icon"), i(h).e("password")]),
                onClick: qe
              }, {
                default: J(() => [
                  (T(), re(tn(i(ce))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              i(Ae) ? (T(), D("span", {
                key: 3,
                class: z(i(h).e("count"))
              }, [
                f("span", {
                  class: z(i(h).e("count-inner"))
                }, E(i(De)) + " / " + E(K.maxlength), 3)
              ], 2)) : Y("v-if", !0),
              i(se) && i(de) && i(H) ? (T(), re(i(Nt), {
                key: 4,
                class: z([
                  i(h).e("icon"),
                  i(h).e("validateIcon"),
                  i(h).is("loading", i(se) === "validating")
                ])
              }, {
                default: J(() => [
                  (T(), re(tn(i(de))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0)
        ], 2),
        Y(" append slot "),
        K.$slots.append ? (T(), D("div", {
          key: 1,
          class: z(i(h).be("group", "append"))
        }, [
          le(K.$slots, "append")
        ], 2)) : Y("v-if", !0)
      ], 64)) : (T(), D(at, { key: 1 }, [
        Y(" textarea "),
        f("textarea", Ao({
          id: i(m),
          ref_key: "textarea",
          ref: k,
          class: [i(b).e("inner"), i(h).is("focus", i(q))]
        }, i(s), {
          minlength: K.minlength,
          maxlength: K.maxlength,
          tabindex: K.tabindex,
          disabled: i(w),
          readonly: K.readonly,
          autocomplete: K.autocomplete,
          style: i(V),
          "aria-label": K.ariaLabel,
          placeholder: K.placeholder,
          form: K.form,
          autofocus: K.autofocus,
          rows: K.rows,
          role: K.containerRole,
          onCompositionstart: i(Ke),
          onCompositionupdate: i(It),
          onCompositionend: i(bt),
          onInput: He,
          onFocus: i(B),
          onBlur: i(ne),
          onChange: ze,
          onKeydown: ct
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        i(Ae) ? (T(), D("span", {
          key: 0,
          style: mt(I.value),
          class: z(i(h).e("count"))
        }, E(i(De)) + " / " + E(K.maxlength), 7)) : Y("v-if", !0)
      ], 64))
    ], 38));
  }
});
var s1 = /* @__PURE__ */ Ve(r1, [["__file", "input.vue"]]);
const a1 = _n(s1), jo = 4, i1 = {
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
}, l1 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), oi = Symbol("scrollbarContextKey"), c1 = Ne({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), u1 = "Thumb", d1 = /* @__PURE__ */ oe({
  __name: "thumb",
  props: c1,
  setup(e) {
    const t = e, n = Le(oi), o = tt("scrollbar");
    n || Xa(u1, "can not inject scrollbar context");
    const r = M(), s = M(), a = M({}), l = M(!1);
    let c = !1, u = !1, d = Ue ? document.onselectstart : null;
    const m = S(() => i1[t.vertical ? "vertical" : "horizontal"]), g = S(() => l1({
      size: t.size,
      move: t.move,
      bar: m.value
    })), w = S(() => r.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / s.value[m.value.offset]), h = (O) => {
      var R;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (R = window.getSelection()) == null || R.removeAllRanges(), C(O);
      const q = O.currentTarget;
      q && (a.value[m.value.axis] = q[m.value.offset] - (O[m.value.client] - q.getBoundingClientRect()[m.value.direction]));
    }, b = (O) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const R = Math.abs(O.target.getBoundingClientRect()[m.value.direction] - O[m.value.client]), q = s.value[m.value.offset] / 2, B = (R - q) * 100 * w.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = B * n.wrapElement[m.value.scrollSize] / 100;
    }, C = (O) => {
      O.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", k), document.addEventListener("mouseup", P), d = document.onselectstart, document.onselectstart = () => !1;
    }, k = (O) => {
      if (!r.value || !s.value || c === !1)
        return;
      const R = a.value[m.value.axis];
      if (!R)
        return;
      const q = (r.value.getBoundingClientRect()[m.value.direction] - O[m.value.client]) * -1, B = s.value[m.value.offset] - R, ne = (q - B) * 100 * w.value / r.value[m.value.offset];
      n.wrapElement[m.value.scroll] = ne * n.wrapElement[m.value.scrollSize] / 100;
    }, P = () => {
      c = !1, a.value[m.value.axis] = 0, document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", P), L(), u && (l.value = !1);
    }, j = () => {
      u = !1, l.value = !!t.size;
    }, I = () => {
      u = !0, l.value = c;
    };
    kn(() => {
      L(), document.removeEventListener("mouseup", P);
    });
    const L = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return bn(Zn(n, "scrollbarElement"), "mousemove", j), bn(Zn(n, "scrollbarElement"), "mouseleave", I), (O, R) => (T(), re(Io, {
      name: i(o).b("fade"),
      persisted: ""
    }, {
      default: J(() => [
        it(f("div", {
          ref_key: "instance",
          ref: r,
          class: z([i(o).e("bar"), i(o).is(i(m).key)]),
          onMousedown: b
        }, [
          f("div", {
            ref_key: "thumb",
            ref: s,
            class: z(i(o).e("thumb")),
            style: mt(i(g)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [Mn, O.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Xl = /* @__PURE__ */ Ve(d1, [["__file", "thumb.vue"]]);
const f1 = Ne({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), p1 = /* @__PURE__ */ oe({
  __name: "bar",
  props: f1,
  setup(e, { expose: t }) {
    const n = e, o = Le(oi), r = M(0), s = M(0), a = M(""), l = M(""), c = M(1), u = M(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const w = g.offsetHeight - jo, h = g.offsetWidth - jo;
          s.value = g.scrollTop * 100 / w * c.value, r.value = g.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const w = g.offsetHeight - jo, h = g.offsetWidth - jo, b = w ** 2 / g.scrollHeight, C = h ** 2 / g.scrollWidth, k = Math.max(b, n.minSize), P = Math.max(C, n.minSize);
        c.value = b / (w - b) / (k / (w - k)), u.value = C / (h - C) / (P / (h - P)), l.value = k + jo < w ? `${k}px` : "", a.value = P + jo < h ? `${P}px` : "";
      }
    }), (g, w) => (T(), D(at, null, [
      _(Xl, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _(Xl, {
        move: s.value,
        ratio: c.value,
        size: l.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var m1 = /* @__PURE__ */ Ve(p1, [["__file", "bar.vue"]]);
const h1 = Ne({
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
  ...ir(["ariaLabel", "ariaOrientation"])
}), g1 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Me)
}, v1 = "ElScrollbar", b1 = oe({
  name: v1
}), y1 = /* @__PURE__ */ oe({
  ...b1,
  props: h1,
  emits: g1,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = tt("scrollbar");
    let s, a, l = 0, c = 0;
    const u = M(), d = M(), m = M(), g = M(), w = S(() => {
      const L = {};
      return o.height && (L.height = mo(o.height)), o.maxHeight && (L.maxHeight = mo(o.maxHeight)), [o.wrapStyle, L];
    }), h = S(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), b = S(() => [r.e("view"), o.viewClass]), C = () => {
      var L;
      d.value && ((L = g.value) == null || L.handleScroll(d.value), l = d.value.scrollTop, c = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function k(L, O) {
      nn(L) ? d.value.scrollTo(L) : Me(L) && Me(O) && d.value.scrollTo(L, O);
    }
    const P = (L) => {
      Me(L) && (d.value.scrollTop = L);
    }, j = (L) => {
      Me(L) && (d.value.scrollLeft = L);
    }, I = () => {
      var L;
      (L = g.value) == null || L.update();
    };
    return pe(() => o.noresize, (L) => {
      L ? (s?.(), a?.()) : ({ stop: s } = Ln(m, I), a = bn("resize", I));
    }, { immediate: !0 }), pe(() => [o.maxHeight, o.height], () => {
      o.native || Ye(() => {
        var L;
        I(), d.value && ((L = g.value) == null || L.handleScroll(d.value));
      });
    }), yn(oi, To({
      scrollbarElement: u,
      wrapElement: d
    })), Rf(() => {
      d.value && (d.value.scrollTop = l, d.value.scrollLeft = c);
    }), ot(() => {
      o.native || Ye(() => {
        I();
      });
    }), qc(() => I()), t({
      wrapRef: d,
      update: I,
      scrollTo: k,
      setScrollTop: P,
      setScrollLeft: j,
      handleScroll: C
    }), (L, O) => (T(), D("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: z(i(r).b())
    }, [
      f("div", {
        ref_key: "wrapRef",
        ref: d,
        class: z(i(h)),
        style: mt(i(w)),
        tabindex: L.tabindex,
        onScroll: C
      }, [
        (T(), re(tn(L.tag), {
          id: L.id,
          ref_key: "resizeRef",
          ref: m,
          class: z(i(b)),
          style: mt(L.viewStyle),
          role: L.role,
          "aria-label": L.ariaLabel,
          "aria-orientation": L.ariaOrientation
        }, {
          default: J(() => [
            le(L.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      L.native ? Y("v-if", !0) : (T(), re(m1, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: L.always,
        "min-size": L.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var w1 = /* @__PURE__ */ Ve(y1, [["__file", "scrollbar.vue"]]);
const k1 = _n(w1), ri = Symbol("popper"), nd = Symbol("popperContent"), _1 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], od = Ne({
  role: {
    type: String,
    values: _1,
    default: "tooltip"
  }
}), A1 = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), T1 = /* @__PURE__ */ oe({
  ...A1,
  props: od,
  setup(e, { expose: t }) {
    const n = e, o = M(), r = M(), s = M(), a = M(), l = S(() => n.role), c = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: l
    };
    return t(c), yn(ri, c), (u, d) => le(u.$slots, "default");
  }
});
var S1 = /* @__PURE__ */ Ve(T1, [["__file", "popper.vue"]]);
const rd = Ne({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), C1 = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), E1 = /* @__PURE__ */ oe({
  ...C1,
  props: rd,
  setup(e, { expose: t }) {
    const n = e, o = tt("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = Le(nd, void 0);
    return pe(() => n.arrowOffset, (l) => {
      r.value = l;
    }), kn(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (l, c) => (T(), D("span", {
      ref_key: "arrowRef",
      ref: s,
      class: z(i(o).e("arrow")),
      style: mt(i(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var x1 = /* @__PURE__ */ Ve(E1, [["__file", "arrow.vue"]]);
const sd = Ne({
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
}), ad = Symbol("elForwardRef"), I1 = (e) => {
  yn(ad, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, L1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), wa = (e) => {
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
}, O1 = "ElOnlyChild", $1 = oe({
  name: O1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = Le(ad), s = L1((o = r?.setForwardRef) != null ? o : fo);
    return () => {
      var a;
      const l = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!l || l.length > 1)
        return null;
      const c = id(l);
      return c ? it(Pf(c, n), [[s]]) : null;
    };
  }
});
function id(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (nn(n))
      switch (n.type) {
        case Nf:
          continue;
        case Mf:
        case "svg":
          return Ql(n);
        case at:
          return id(n.children);
        default:
          return n;
      }
    return Ql(n);
  }
  return null;
}
function Ql(e) {
  const t = tt("only-child");
  return _("span", {
    class: t.e("content")
  }, [e]);
}
const R1 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), P1 = /* @__PURE__ */ oe({
  ...R1,
  props: sd,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = Le(ri, void 0);
    I1(r);
    const s = S(() => l.value ? n.id : void 0), a = S(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = S(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), c = S(() => l.value ? `${n.open}` : void 0);
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
        m && (r.value = Yn(m));
      }, {
        immediate: !0
      }), pe(r, (m, g) => {
        u?.(), u = void 0, vn(m) && (d.forEach((w) => {
          var h;
          const b = n[w];
          b && (m.addEventListener(w.slice(2).toLowerCase(), b), (h = g?.removeEventListener) == null || h.call(g, w.slice(2).toLowerCase(), b));
        }), wa(m) && (u = pe([s, a, l, c], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, b) => {
            Qn(w[b]) ? m.removeAttribute(h) : m.setAttribute(h, w[b]);
          });
        }, { immediate: !0 }))), vn(g) && wa(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((w) => g.removeAttribute(w));
      }, {
        immediate: !0
      });
    }), kn(() => {
      if (u?.(), u = void 0, r.value && vn(r.value)) {
        const m = r.value;
        d.forEach((g) => {
          const w = n[g];
          w && m.removeEventListener(g.slice(2).toLowerCase(), w);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (m, g) => m.virtualTriggering ? Y("v-if", !0) : (T(), re(i($1), Ao({ key: 0 }, m.$attrs, {
      "aria-controls": i(s),
      "aria-describedby": i(a),
      "aria-expanded": i(c),
      "aria-haspopup": i(l)
    }), {
      default: J(() => [
        le(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var M1 = /* @__PURE__ */ Ve(P1, [["__file", "trigger.vue"]]);
const na = "focus-trap.focus-after-trapped", oa = "focus-trap.focus-after-released", N1 = "focus-trap.focusout-prevented", Jl = {
  cancelable: !0,
  bubbles: !1
}, D1 = {
  cancelable: !0,
  bubbles: !1
}, ec = "focusAfterTrapped", tc = "focusAfterReleased", ld = Symbol("elFocusTrap"), si = M(), Ns = M(0), ai = M(0);
let Xr = 0;
const cd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, nc = (e, t) => {
  for (const n of e)
    if (!z1(n, t))
      return n;
}, z1 = (e, t) => {
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
}, F1 = (e) => {
  const t = cd(e), n = nc(t, e), o = nc(t.reverse(), e);
  return [n, o];
}, B1 = (e) => e instanceof HTMLInputElement && "select" in e, Kn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    vn(e) && !wa(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), ai.value = window.performance.now(), e !== n && B1(e) && t && e.select(), vn(e) && o && e.removeAttribute("tabindex");
  }
};
function oc(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const j1 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = oc(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = oc(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, V1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Kn(o, t), document.activeElement !== n)
      return;
}, rc = j1(), H1 = () => Ns.value > ai.value, Qr = () => {
  si.value = "pointer", Ns.value = window.performance.now();
}, sc = () => {
  si.value = "keyboard", Ns.value = window.performance.now();
}, W1 = () => (ot(() => {
  Xr === 0 && (document.addEventListener("mousedown", Qr), document.addEventListener("touchstart", Qr), document.addEventListener("keydown", sc)), Xr++;
}), kn(() => {
  Xr--, Xr <= 0 && (document.removeEventListener("mousedown", Qr), document.removeEventListener("touchstart", Qr), document.removeEventListener("keydown", sc));
}), {
  focusReason: si,
  lastUserFocusTimestamp: Ns,
  lastAutomatedFocusTimestamp: ai
}), Jr = (e) => new CustomEvent(N1, {
  ...D1,
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
const ac = (e) => {
  e.code === Rn.esc && Go.forEach((t) => t(e));
}, U1 = (e) => {
  ot(() => {
    Go.length === 0 && document.addEventListener("keydown", ac), Ue && Go.push(e);
  }), kn(() => {
    Go = Go.filter((t) => t !== e), Go.length === 0 && Ue && document.removeEventListener("keydown", ac);
  });
}, G1 = oe({
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
    ec,
    tc,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = M();
    let o, r;
    const { focusReason: s } = W1();
    U1((h) => {
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
    }, l = (h) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { code: b, altKey: C, ctrlKey: k, metaKey: P, currentTarget: j, shiftKey: I } = h, { loop: L } = e, O = b === Rn.tab && !C && !k && !P, R = document.activeElement;
      if (O && R) {
        const q = j, [B, ne] = F1(q);
        if (B && ne) {
          if (!I && R === ne) {
            const se = Jr({
              focusReason: s.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (h.preventDefault(), L && Kn(B, !0));
          } else if (I && [B, q].includes(R)) {
            const se = Jr({
              focusReason: s.value
            });
            t("focusout-prevented", se), se.defaultPrevented || (h.preventDefault(), L && Kn(ne, !0));
          }
        } else if (R === q) {
          const se = Jr({
            focusReason: s.value
          });
          t("focusout-prevented", se), se.defaultPrevented || h.preventDefault();
        }
      }
    };
    yn(ld, {
      focusTrapRef: n,
      onKeydown: l
    }), pe(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), pe([n], ([h], [b]) => {
      h && (h.addEventListener("keydown", l), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), b && (b.removeEventListener("keydown", l), b.removeEventListener("focusin", d), b.removeEventListener("focusout", m));
    });
    const c = (h) => {
      t(ec, h);
    }, u = (h) => t(tc, h), d = (h) => {
      const b = i(n);
      if (!b)
        return;
      const C = h.target, k = h.relatedTarget, P = C && b.contains(C);
      e.trapped || k && b.contains(k) || (o = k), P && t("focusin", h), !a.paused && e.trapped && (P ? r = C : Kn(r, !0));
    }, m = (h) => {
      const b = i(n);
      if (!(a.paused || !b))
        if (e.trapped) {
          const C = h.relatedTarget;
          !Qn(C) && !b.contains(C) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const k = Jr({
                focusReason: s.value
              });
              t("focusout-prevented", k), k.defaultPrevented || Kn(r, !0);
            }
          }, 0);
        } else {
          const C = h.target;
          C && b.contains(C) || t("focusout", h);
        }
    };
    async function g() {
      await Ye();
      const h = i(n);
      if (h) {
        rc.push(a);
        const b = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = b, !h.contains(b)) {
          const k = new Event(na, Jl);
          h.addEventListener(na, c), h.dispatchEvent(k), k.defaultPrevented || Ye(() => {
            let P = e.focusStartEl;
            Xt(P) || (Kn(P), document.activeElement !== P && (P = "first")), P === "first" && V1(cd(h), !0), (document.activeElement === b || P === "container") && Kn(h);
          });
        }
      }
    }
    function w() {
      const h = i(n);
      if (h) {
        h.removeEventListener(na, c);
        const b = new CustomEvent(oa, {
          ...Jl,
          detail: {
            focusReason: s.value
          }
        });
        h.addEventListener(oa, u), h.dispatchEvent(b), !b.defaultPrevented && (s.value == "keyboard" || !H1() || h.contains(document.activeElement)) && Kn(o ?? document.body), h.removeEventListener(oa, u), rc.remove(a);
      }
    }
    return ot(() => {
      e.trapped && g(), pe(() => e.trapped, (h) => {
        h ? g() : w();
      });
    }), kn(() => {
      e.trapped && w(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function K1(e, t, n, o, r, s) {
  return le(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var ud = /* @__PURE__ */ Ve(G1, [["render", K1], ["__file", "focus-trap.vue"]]), Ht = "top", rn = "bottom", sn = "right", Wt = "left", ii = "auto", Br = [Ht, rn, sn, Wt], Qo = "start", Mr = "end", q1 = "clippingParents", dd = "viewport", pr = "popper", Z1 = "reference", ic = Br.reduce(function(e, t) {
  return e.concat([t + "-" + Qo, t + "-" + Mr]);
}, []), Ds = [].concat(Br, [ii]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qo, t + "-" + Mr]);
}, []), Y1 = "beforeRead", X1 = "read", Q1 = "afterRead", J1 = "beforeMain", ey = "main", ty = "afterMain", ny = "beforeWrite", oy = "write", ry = "afterWrite", sy = [Y1, X1, Q1, J1, ey, ty, ny, oy, ry];
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
function Eo(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function on(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function li(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ay(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !on(s) || !Dn(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var l = r[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function iy(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !on(r) || !Dn(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(c) {
        r.removeAttribute(c);
      }));
    });
  };
}
var fd = { name: "applyStyles", enabled: !0, phase: "write", fn: ay, effect: iy, requires: ["computeStyles"] };
function Pn(e) {
  return e.split("-")[0];
}
var _o = Math.max, ws = Math.min, Jo = Math.round;
function ka() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pd() {
  return !/^((?!chrome|android).)*safari/i.test(ka());
}
function er(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && on(e) && (r = e.offsetWidth > 0 && Jo(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Jo(o.height) / e.offsetHeight || 1);
  var a = Eo(e) ? Qt(e) : window, l = a.visualViewport, c = !pd() && n, u = (o.left + (c && l ? l.offsetLeft : 0)) / r, d = (o.top + (c && l ? l.offsetTop : 0)) / s, m = o.width / r, g = o.height / s;
  return { width: m, height: g, top: d, right: u + m, bottom: d + g, left: u, x: u, y: d };
}
function ci(e) {
  var t = er(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function md(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && li(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Jn(e) {
  return Qt(e).getComputedStyle(e);
}
function ly(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
}
function ho(e) {
  return ((Eo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zs(e) {
  return Dn(e) === "html" ? e : e.assignedSlot || e.parentNode || (li(e) ? e.host : null) || ho(e);
}
function lc(e) {
  return !on(e) || Jn(e).position === "fixed" ? null : e.offsetParent;
}
function cy(e) {
  var t = /firefox/i.test(ka()), n = /Trident/i.test(ka());
  if (n && on(e)) {
    var o = Jn(e);
    if (o.position === "fixed") return null;
  }
  var r = zs(e);
  for (li(r) && (r = r.host); on(r) && ["html", "body"].indexOf(Dn(r)) < 0; ) {
    var s = Jn(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function jr(e) {
  for (var t = Qt(e), n = lc(e); n && ly(n) && Jn(n).position === "static"; ) n = lc(n);
  return n && (Dn(n) === "html" || Dn(n) === "body" && Jn(n).position === "static") ? t : n || cy(e) || t;
}
function ui(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Er(e, t, n) {
  return _o(e, ws(t, n));
}
function uy(e, t, n) {
  var o = Er(e, t, n);
  return o > n ? n : o;
}
function hd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function gd(e) {
  return Object.assign({}, hd(), e);
}
function vd(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var dy = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, gd(typeof e != "number" ? e : vd(e, Br));
};
function fy(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Pn(n.placement), c = ui(l), u = [Wt, sn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = dy(r.padding, n), g = ci(s), w = c === "y" ? Ht : Wt, h = c === "y" ? rn : sn, b = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d], C = a[c] - n.rects.reference[c], k = jr(s), P = k ? c === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, j = b / 2 - C / 2, I = m[w], L = P - g[d] - m[h], O = P / 2 - g[d] / 2 + j, R = Er(I, O, L), q = c;
    n.modifiersData[o] = (t = {}, t[q] = R, t.centerOffset = R - O, t);
  }
}
function py(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || md(t.elements.popper, r) && (t.elements.arrow = r));
}
var my = { name: "arrow", enabled: !0, phase: "main", fn: fy, effect: py, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function tr(e) {
  return e.split("-")[1];
}
var hy = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function gy(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Jo(n * r) / r || 0, y: Jo(o * r) / r || 0 };
}
function cc(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = a.x, w = g === void 0 ? 0 : g, h = a.y, b = h === void 0 ? 0 : h, C = typeof d == "function" ? d({ x: w, y: b }) : { x: w, y: b };
  w = C.x, b = C.y;
  var k = a.hasOwnProperty("x"), P = a.hasOwnProperty("y"), j = Wt, I = Ht, L = window;
  if (u) {
    var O = jr(n), R = "clientHeight", q = "clientWidth";
    if (O === Qt(n) && (O = ho(n), Jn(O).position !== "static" && l === "absolute" && (R = "scrollHeight", q = "scrollWidth")), O = O, r === Ht || (r === Wt || r === sn) && s === Mr) {
      I = rn;
      var B = m && O === L && L.visualViewport ? L.visualViewport.height : O[R];
      b -= B - o.height, b *= c ? 1 : -1;
    }
    if (r === Wt || (r === Ht || r === rn) && s === Mr) {
      j = sn;
      var ne = m && O === L && L.visualViewport ? L.visualViewport.width : O[q];
      w -= ne - o.width, w *= c ? 1 : -1;
    }
  }
  var H = Object.assign({ position: l }, u && hy), se = d === !0 ? gy({ x: w, y: b }, Qt(n)) : { x: w, y: b };
  if (w = se.x, b = se.y, c) {
    var de;
    return Object.assign({}, H, (de = {}, de[I] = P ? "0" : "", de[j] = k ? "0" : "", de.transform = (L.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", de));
  }
  return Object.assign({}, H, (t = {}, t[I] = P ? b + "px" : "", t[j] = k ? w + "px" : "", t.transform = "", t));
}
function vy(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = { placement: Pn(t.placement), variation: tr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var bd = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: vy, data: {} }, es = { passive: !0 };
function by(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, l = a === void 0 ? !0 : a, c = Qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, es);
  }), l && c.addEventListener("resize", n.update, es), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, es);
    }), l && c.removeEventListener("resize", n.update, es);
  };
}
var yd = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: by, data: {} }, yy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function as(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return yy[t];
  });
}
var wy = { start: "end", end: "start" };
function uc(e) {
  return e.replace(/start|end/g, function(t) {
    return wy[t];
  });
}
function di(e) {
  var t = Qt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function fi(e) {
  return er(ho(e)).left + di(e).scrollLeft;
}
function ky(e, t) {
  var n = Qt(e), o = ho(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = pd();
    (u || !u && t === "fixed") && (l = r.offsetLeft, c = r.offsetTop);
  }
  return { width: s, height: a, x: l + fi(e), y: c };
}
function _y(e) {
  var t, n = ho(e), o = di(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = _o(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = _o(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + fi(e), c = -o.scrollTop;
  return Jn(r || n).direction === "rtl" && (l += _o(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: l, y: c };
}
function pi(e) {
  var t = Jn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function wd(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0 ? e.ownerDocument.body : on(e) && pi(e) ? e : wd(zs(e));
}
function xr(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = wd(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Qt(o), a = r ? [s].concat(s.visualViewport || [], pi(o) ? o : []) : o, l = t.concat(a);
  return r ? l : l.concat(xr(zs(a)));
}
function _a(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Ay(e, t) {
  var n = er(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function dc(e, t, n) {
  return t === dd ? _a(ky(e, n)) : Eo(t) ? Ay(t, n) : _a(_y(ho(e)));
}
function Ty(e) {
  var t = xr(zs(e)), n = ["absolute", "fixed"].indexOf(Jn(e).position) >= 0, o = n && on(e) ? jr(e) : e;
  return Eo(o) ? t.filter(function(r) {
    return Eo(r) && md(r, o) && Dn(r) !== "body";
  }) : [];
}
function Sy(e, t, n, o) {
  var r = t === "clippingParents" ? Ty(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], l = s.reduce(function(c, u) {
    var d = dc(e, u, o);
    return c.top = _o(d.top, c.top), c.right = ws(d.right, c.right), c.bottom = ws(d.bottom, c.bottom), c.left = _o(d.left, c.left), c;
  }, dc(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function kd(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Pn(o) : null, s = o ? tr(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (r) {
    case Ht:
      c = { x: a, y: t.y - n.height };
      break;
    case rn:
      c = { x: a, y: t.y + t.height };
      break;
    case sn:
      c = { x: t.x + t.width, y: l };
      break;
    case Wt:
      c = { x: t.x - n.width, y: l };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = r ? ui(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case Qo:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Mr:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Nr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, l = n.boundary, c = l === void 0 ? q1 : l, u = n.rootBoundary, d = u === void 0 ? dd : u, m = n.elementContext, g = m === void 0 ? pr : m, w = n.altBoundary, h = w === void 0 ? !1 : w, b = n.padding, C = b === void 0 ? 0 : b, k = gd(typeof C != "number" ? C : vd(C, Br)), P = g === pr ? Z1 : pr, j = e.rects.popper, I = e.elements[h ? P : g], L = Sy(Eo(I) ? I : I.contextElement || ho(e.elements.popper), c, d, a), O = er(e.elements.reference), R = kd({ reference: O, element: j, placement: r }), q = _a(Object.assign({}, j, R)), B = g === pr ? q : O, ne = { top: L.top - B.top + k.top, bottom: B.bottom - L.bottom + k.bottom, left: L.left - B.left + k.left, right: B.right - L.right + k.right }, H = e.modifiersData.offset;
  if (g === pr && H) {
    var se = H[r];
    Object.keys(ne).forEach(function(de) {
      var ce = [sn, rn].indexOf(de) >= 0 ? 1 : -1, $ = [Ht, rn].indexOf(de) >= 0 ? "y" : "x";
      ne[de] += se[$] * ce;
    });
  }
  return ne;
}
function Cy(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Ds : c, d = tr(o), m = d ? l ? ic : ic.filter(function(h) {
    return tr(h) === d;
  }) : Br, g = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  g.length === 0 && (g = m);
  var w = g.reduce(function(h, b) {
    return h[b] = Nr(e, { placement: b, boundary: r, rootBoundary: s, padding: a })[Pn(b)], h;
  }, {});
  return Object.keys(w).sort(function(h, b) {
    return w[h] - w[b];
  });
}
function Ey(e) {
  if (Pn(e) === ii) return [];
  var t = as(e);
  return [uc(e), t, uc(t)];
}
function xy(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, g = n.altBoundary, w = n.flipVariations, h = w === void 0 ? !0 : w, b = n.allowedAutoPlacements, C = t.options.placement, k = Pn(C), P = k === C, j = c || (P || !h ? [as(C)] : Ey(C)), I = [C].concat(j).reduce(function(W, U) {
      return W.concat(Pn(U) === ii ? Cy(t, { placement: U, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: b }) : U);
    }, []), L = t.rects.reference, O = t.rects.popper, R = /* @__PURE__ */ new Map(), q = !0, B = I[0], ne = 0; ne < I.length; ne++) {
      var H = I[ne], se = Pn(H), de = tr(H) === Qo, ce = [Ht, rn].indexOf(se) >= 0, $ = ce ? "width" : "height", V = Nr(t, { placement: H, boundary: d, rootBoundary: m, altBoundary: g, padding: u }), F = ce ? de ? sn : Wt : de ? rn : Ht;
      L[$] > O[$] && (F = as(F));
      var ue = as(F), fe = [];
      if (s && fe.push(V[se] <= 0), l && fe.push(V[F] <= 0, V[ue] <= 0), fe.every(function(W) {
        return W;
      })) {
        B = H, q = !1;
        break;
      }
      R.set(H, fe);
    }
    if (q) for (var Ae = h ? 3 : 1, De = function(W) {
      var U = I.find(function(me) {
        var Oe = R.get(me);
        if (Oe) return Oe.slice(0, W).every(function(ee) {
          return ee;
        });
      });
      if (U) return B = U, "break";
    }, Ge = Ae; Ge > 0; Ge--) {
      var ve = De(Ge);
      if (ve === "break") break;
    }
    t.placement !== B && (t.modifiersData[o]._skip = !0, t.placement = B, t.reset = !0);
  }
}
var Iy = { name: "flip", enabled: !0, phase: "main", fn: xy, requiresIfExists: ["offset"], data: { _skip: !1 } };
function fc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function pc(e) {
  return [Ht, sn, rn, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function Ly(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = Nr(t, { elementContext: "reference" }), l = Nr(t, { altBoundary: !0 }), c = fc(a, o), u = fc(l, r, s), d = pc(c), m = pc(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var Oy = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Ly };
function $y(e, t, n) {
  var o = Pn(e), r = [Wt, Ht].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * r, [Wt, sn].indexOf(o) >= 0 ? { x: l, y: a } : { x: a, y: l };
}
function Ry(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = Ds.reduce(function(d, m) {
    return d[m] = $y(m, t.rects, s), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var Py = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Ry };
function My(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = kd({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var _d = { name: "popperOffsets", enabled: !0, phase: "read", fn: My, data: {} };
function Ny(e) {
  return e === "x" ? "y" : "x";
}
function Dy(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, g = n.tether, w = g === void 0 ? !0 : g, h = n.tetherOffset, b = h === void 0 ? 0 : h, C = Nr(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: d }), k = Pn(t.placement), P = tr(t.placement), j = !P, I = ui(k), L = Ny(I), O = t.modifiersData.popperOffsets, R = t.rects.reference, q = t.rects.popper, B = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, ne = typeof B == "number" ? { mainAxis: B, altAxis: B } : Object.assign({ mainAxis: 0, altAxis: 0 }, B), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, se = { x: 0, y: 0 };
  if (O) {
    if (s) {
      var de, ce = I === "y" ? Ht : Wt, $ = I === "y" ? rn : sn, V = I === "y" ? "height" : "width", F = O[I], ue = F + C[ce], fe = F - C[$], Ae = w ? -q[V] / 2 : 0, De = P === Qo ? R[V] : q[V], Ge = P === Qo ? -q[V] : -R[V], ve = t.elements.arrow, W = w && ve ? ci(ve) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hd(), me = U[ce], Oe = U[$], ee = Er(0, R[V], W[V]), X = j ? R[V] / 2 - Ae - ee - me - ne.mainAxis : De - ee - me - ne.mainAxis, He = j ? -R[V] / 2 + Ae + ee + Oe + ne.mainAxis : Ge + ee + Oe + ne.mainAxis, ze = t.elements.arrow && jr(t.elements.arrow), ut = ze ? I === "y" ? ze.clientTop || 0 : ze.clientLeft || 0 : 0, Ke = (de = H?.[I]) != null ? de : 0, It = F + X - Ke - ut, bt = F + He - Ke, qe = Er(w ? ws(ue, It) : ue, F, w ? _o(fe, bt) : fe);
      O[I] = qe, se[I] = qe - F;
    }
    if (l) {
      var yt, rt = I === "x" ? Ht : Wt, wt = I === "x" ? rn : sn, Qe = O[L], ct = L === "y" ? "height" : "width", Lt = Qe + C[rt], Ft = Qe - C[wt], K = [Ht, Wt].indexOf(k) !== -1, ke = (yt = H?.[L]) != null ? yt : 0, dt = K ? Lt : Qe - R[ct] - q[ct] - ke + ne.altAxis, xe = K ? Qe + R[ct] + q[ct] - ke - ne.altAxis : Ft, kt = w && K ? uy(dt, Qe, xe) : Er(w ? dt : Lt, Qe, w ? xe : Ft);
      O[L] = kt, se[L] = kt - Qe;
    }
    t.modifiersData[o] = se;
  }
}
var zy = { name: "preventOverflow", enabled: !0, phase: "main", fn: Dy, requiresIfExists: ["offset"] };
function Fy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function By(e) {
  return e === Qt(e) || !on(e) ? di(e) : Fy(e);
}
function jy(e) {
  var t = e.getBoundingClientRect(), n = Jo(t.width) / e.offsetWidth || 1, o = Jo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Vy(e, t, n) {
  n === void 0 && (n = !1);
  var o = on(t), r = on(t) && jy(t), s = ho(t), a = er(e, r, n), l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (o || !o && !n) && ((Dn(t) !== "body" || pi(s)) && (l = By(t)), on(t) ? (c = er(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = fi(s))), { x: a.left + l.scrollLeft - c.x, y: a.top + l.scrollTop - c.y, width: a.width, height: a.height };
}
function Hy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && r(c);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function Wy(e) {
  var t = Hy(e);
  return sy.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Uy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Gy(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var mc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function hc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function mi(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? mc : r;
  return function(a, l, c) {
    c === void 0 && (c = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, mc, s), modifiersData: {}, elements: { reference: a, popper: l }, attributes: {}, styles: {} }, d = [], m = !1, g = { state: u, setOptions: function(b) {
      var C = typeof b == "function" ? b(u.options) : b;
      h(), u.options = Object.assign({}, s, u.options, C), u.scrollParents = { reference: Eo(a) ? xr(a) : a.contextElement ? xr(a.contextElement) : [], popper: xr(l) };
      var k = Wy(Gy([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = k.filter(function(P) {
        return P.enabled;
      }), w(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var b = u.elements, C = b.reference, k = b.popper;
        if (hc(C, k)) {
          u.rects = { reference: Vy(C, jr(k), u.options.strategy === "fixed"), popper: ci(k) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(q) {
            return u.modifiersData[q.name] = Object.assign({}, q.data);
          });
          for (var P = 0; P < u.orderedModifiers.length; P++) {
            if (u.reset === !0) {
              u.reset = !1, P = -1;
              continue;
            }
            var j = u.orderedModifiers[P], I = j.fn, L = j.options, O = L === void 0 ? {} : L, R = j.name;
            typeof I == "function" && (u = I({ state: u, options: O, name: R, instance: g }) || u);
          }
        }
      }
    }, update: Uy(function() {
      return new Promise(function(b) {
        g.forceUpdate(), b(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!hc(a, l)) return g;
    g.setOptions(c).then(function(b) {
      !m && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function w() {
      u.orderedModifiers.forEach(function(b) {
        var C = b.name, k = b.options, P = k === void 0 ? {} : k, j = b.effect;
        if (typeof j == "function") {
          var I = j({ state: u, name: C, instance: g, options: P }), L = function() {
          };
          d.push(I || L);
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
mi();
var Ky = [yd, _d, bd, fd];
mi({ defaultModifiers: Ky });
var qy = [yd, _d, bd, fd, Py, Iy, zy, my, Oy], Zy = mi({ defaultModifiers: qy });
const Yy = ["fixed", "absolute"], Xy = Ne({
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
    values: Ds,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Yy,
    default: "absolute"
  }
}), Ad = Ne({
  ...Xy,
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
  ...ir(["ariaLabel"])
}), Qy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Jy = (e, t) => {
  const n = M(!1), o = M();
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
}, ew = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...nw(e), ...t]
  };
  return ow(s, r?.modifiers), s;
}, tw = (e) => {
  if (Ue)
    return Yn(e);
};
function nw(e) {
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
function ow(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const rw = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = sw(c);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = S(() => {
    const { onFirstUpdate: c, placement: u, strategy: d, modifiers: m } = i(n);
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
  }), s = uo(), a = M({
    styles: {
      popper: {
        position: i(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), l = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return pe(r, (c) => {
    const u = i(s);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), pe([e, t], ([c, u]) => {
    l(), !(!c || !u) && (s.value = Zy(c, u, i(r)));
  }), kn(() => {
    l();
  }), {
    state: S(() => {
      var c;
      return { ...((c = i(s)) == null ? void 0 : c.state) || {} };
    }),
    styles: S(() => i(a).styles),
    attributes: S(() => i(a).attributes),
    update: () => {
      var c;
      return (c = i(s)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = i(s)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: S(() => i(s))
  };
};
function sw(e) {
  const t = Object.keys(e.elements), n = ms(t.map((r) => [r, e.styles[r] || {}])), o = ms(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const aw = 0, iw = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = Le(ri, void 0), s = M(), a = M(), l = S(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = S(() => {
    var k;
    const P = i(s), j = (k = i(a)) != null ? k : aw;
    return {
      name: "arrow",
      enabled: !Iu(P),
      options: {
        element: P,
        padding: j
      }
    };
  }), u = S(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...ew(e, [
      i(c),
      i(l)
    ])
  })), d = S(() => tw(e.referenceEl) || i(o)), { attributes: m, state: g, styles: w, update: h, forceUpdate: b, instanceRef: C } = rw(d, n, u);
  return pe(C, (k) => t.value = k), ot(() => {
    pe(() => {
      var k;
      return (k = i(d)) == null ? void 0 : k.getBoundingClientRect();
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
}, lw = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Qa(), s = tt("popper"), a = S(() => i(t).popper), l = M(Me(e.zIndex) ? e.zIndex : r()), c = S(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = S(() => [
    { zIndex: i(l) },
    i(n).popper,
    e.popperStyle || {}
  ]), d = S(() => o.value === "dialog" ? "false" : void 0), m = S(() => i(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: a,
    contentClass: c,
    contentStyle: u,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = Me(e.zIndex) ? e.zIndex : r();
    }
  };
}, cw = oe({
  name: "ElPopperContent"
}), uw = /* @__PURE__ */ oe({
  ...cw,
  props: Ad,
  emits: Qy,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: l,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Jy(o, n), { attributes: m, arrowRef: g, contentRef: w, styles: h, instanceRef: b, role: C, update: k } = iw(o), {
      ariaModal: P,
      arrowStyle: j,
      contentAttrs: I,
      contentClass: L,
      contentStyle: O,
      updateZIndex: R
    } = lw(o, {
      styles: h,
      attributes: m,
      role: C
    }), q = Le(ys, void 0), B = M();
    yn(nd, {
      arrowStyle: j,
      arrowRef: g,
      arrowOffset: B
    }), q && yn(ys, {
      ...q,
      addInputId: fo,
      removeInputId: fo
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
        const $ = i(de || w.value), V = i(ce || w.value);
        vn($) && (ne = pe([C, () => o.ariaLabel, P, () => o.id], (F) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ue, fe) => {
            Qn(F[fe]) ? $.removeAttribute(ue) : $.setAttribute(ue, F[fe]);
          });
        }, { immediate: !0 })), V !== $ && vn(V) && ["role", "aria-label", "aria-modal", "id"].forEach((F) => {
          V.removeAttribute(F);
        });
      }, { immediate: !0 }), pe(() => o.visible, se, { immediate: !0 });
    }), kn(() => {
      ne?.(), ne = void 0;
    }), t({
      popperContentRef: w,
      popperInstanceRef: b,
      updatePopper: H,
      contentStyle: O
    }), (de, ce) => (T(), D("div", Ao({
      ref_key: "contentRef",
      ref: w
    }, i(I), {
      style: i(O),
      class: i(L),
      tabindex: "-1",
      onMouseenter: ($) => de.$emit("mouseenter", $),
      onMouseleave: ($) => de.$emit("mouseleave", $)
    }), [
      _(i(ud), {
        trapped: i(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": i(w),
        "focus-start-el": i(r),
        onFocusAfterTrapped: i(l),
        onFocusAfterReleased: i(a),
        onFocusin: i(c),
        onFocusoutPrevented: i(u),
        onReleaseRequested: i(d)
      }, {
        default: J(() => [
          le(de.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var dw = /* @__PURE__ */ Ve(uw, [["__file", "content.vue"]]);
const fw = _n(S1), hi = Symbol("elTooltip");
function gc() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Fr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const pw = Ne({
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
}), mw = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = gc(), {
    registerTimeout: a,
    cancelTimeout: l
  } = gc();
  return {
    onOpen: (d) => {
      s(() => {
        o(d);
        const m = i(n);
        Me(m) && m > 0 && a(() => {
          r(d);
        }, m);
      }, i(e));
    },
    onClose: (d) => {
      l(), s(() => {
        r(d);
      }, i(t));
    }
  };
}, gi = Ne({
  ...pw,
  ...Ad,
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
  ...ir(["ariaLabel"])
}), Td = Ne({
  ...sd,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [Rn.enter, Rn.numpadEnter, Rn.space]
  }
}), hw = Rs({
  type: he(Boolean),
  default: null
}), gw = Rs({
  type: he(Function)
}), vw = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: hw,
    [n]: gw
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: l,
      shouldHideWhenRouteChanges: c,
      shouldProceed: u,
      onShow: d,
      onHide: m
    }) => {
      const g = xt(), { emit: w } = g, h = g.props, b = S(() => nt(h[n])), C = S(() => h[e] === null), k = (R) => {
        a.value !== !0 && (a.value = !0, l && (l.value = R), nt(d) && d(R));
      }, P = (R) => {
        a.value !== !1 && (a.value = !1, l && (l.value = R), nt(m) && m(R));
      }, j = (R) => {
        if (h.disabled === !0 || nt(u) && !u())
          return;
        const q = b.value && Ue;
        q && w(t, !0), (C.value || !q) && k(R);
      }, I = (R) => {
        if (h.disabled === !0 || !Ue)
          return;
        const q = b.value && Ue;
        q && w(t, !1), (C.value || !q) && P(R);
      }, L = (R) => {
        Pr(R) && (h.disabled && R ? b.value && w(t, !1) : a.value !== R && (R ? k() : P()));
      }, O = () => {
        a.value ? I() : j();
      };
      return pe(() => h[e], L), c && g.appContext.config.globalProperties.$route !== void 0 && pe(() => ({
        ...g.proxy.$route
      }), () => {
        c.value && a.value && I();
      }), ot(() => {
        L(h[e]);
      }), {
        hide: I,
        show: j,
        toggle: O,
        hasUpdateHandler: b
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: bw,
  useModelToggleEmits: yw,
  useModelToggle: ww
} = vw("visible"), kw = Ne({
  ...od,
  ...bw,
  ...gi,
  ...Td,
  ...rd,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), _w = [
  ...yw,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Aw = (e, t) => On(e) ? e.includes(t) : e === t, Vo = (e, t, n) => (o) => {
  Aw(i(e), t) && n(o);
}, qn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, Tw = oe({
  name: "ElTooltipTrigger"
}), Sw = /* @__PURE__ */ oe({
  ...Tw,
  props: Td,
  setup(e, { expose: t }) {
    const n = e, o = tt("tooltip"), { controlled: r, id: s, open: a, onOpen: l, onClose: c, onToggle: u } = Le(hi, void 0), d = M(null), m = () => {
      if (i(r) || n.disabled)
        return !0;
    }, g = Zn(n, "trigger"), w = qn(m, Vo(g, "hover", l)), h = qn(m, Vo(g, "hover", c)), b = qn(m, Vo(g, "click", (I) => {
      I.button === 0 && u(I);
    })), C = qn(m, Vo(g, "focus", l)), k = qn(m, Vo(g, "focus", c)), P = qn(m, Vo(g, "contextmenu", (I) => {
      I.preventDefault(), u(I);
    })), j = qn(m, (I) => {
      const { code: L } = I;
      n.triggerKeys.includes(L) && (I.preventDefault(), u(I));
    });
    return t({
      triggerRef: d
    }), (I, L) => (T(), re(i(M1), {
      id: i(s),
      "virtual-ref": I.virtualRef,
      open: i(a),
      "virtual-triggering": I.virtualTriggering,
      class: z(i(o).e("trigger")),
      onBlur: i(k),
      onClick: i(b),
      onContextmenu: i(P),
      onFocus: i(C),
      onMouseenter: i(w),
      onMouseleave: i(h),
      onKeydown: i(j)
    }, {
      default: J(() => [
        le(I.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Cw = /* @__PURE__ */ Ve(Sw, [["__file", "trigger.vue"]]);
const Ew = Ne({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), xw = /* @__PURE__ */ oe({
  __name: "teleport",
  props: Ew,
  setup(e) {
    return (t, n) => t.disabled ? le(t.$slots, "default", { key: 0 }) : (T(), re(Df, {
      key: 1,
      to: t.to
    }, [
      le(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Iw = /* @__PURE__ */ Ve(xw, [["__file", "teleport.vue"]]);
const Sd = _n(Iw), Cd = () => {
  const e = Va(), t = Yu(), n = S(() => `${e.value}-popper-container-${t.prefix}`), o = S(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Lw = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Ow = () => {
  const { id: e, selector: t } = Cd();
  return zf(() => {
    Ue && (document.body.querySelector(t.value) || Lw(e.value));
  }), {
    id: e,
    selector: t
  };
}, $w = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Rw = /* @__PURE__ */ oe({
  ...$w,
  props: gi,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Cd(), r = tt("tooltip"), s = M();
    let a;
    const {
      controlled: l,
      id: c,
      open: u,
      trigger: d,
      onClose: m,
      onOpen: g,
      onShow: w,
      onHide: h,
      onBeforeShow: b,
      onBeforeHide: C
    } = Le(hi, void 0), k = S(() => n.transition || `${r.namespace.value}-fade-in-linear`), P = S(() => n.persistent);
    kn(() => {
      a?.();
    });
    const j = S(() => i(P) ? !0 : i(u)), I = S(() => n.disabled ? !1 : i(u)), L = S(() => n.appendTo || o.value), O = S(() => {
      var F;
      return (F = n.style) != null ? F : {};
    }), R = M(!0), q = () => {
      h(), V() && Kn(document.body), R.value = !0;
    }, B = () => {
      if (i(l))
        return !0;
    }, ne = qn(B, () => {
      n.enterable && i(d) === "hover" && g();
    }), H = qn(B, () => {
      i(d) === "hover" && m();
    }), se = () => {
      var F, ue;
      (ue = (F = s.value) == null ? void 0 : F.updatePopper) == null || ue.call(F), b?.();
    }, de = () => {
      C?.();
    }, ce = () => {
      w(), a = F0(S(() => {
        var F;
        return (F = s.value) == null ? void 0 : F.popperContentRef;
      }), () => {
        if (i(l))
          return;
        i(d) !== "hover" && m();
      });
    }, $ = () => {
      n.virtualTriggering || m();
    }, V = (F) => {
      var ue;
      const fe = (ue = s.value) == null ? void 0 : ue.popperContentRef, Ae = F?.relatedTarget || document.activeElement;
      return fe?.contains(Ae);
    };
    return pe(() => i(u), (F) => {
      F ? R.value = !1 : a?.();
    }, {
      flush: "post"
    }), pe(() => n.content, () => {
      var F, ue;
      (ue = (F = s.value) == null ? void 0 : F.updatePopper) == null || ue.call(F);
    }), t({
      contentRef: s,
      isFocusInsideContent: V
    }), (F, ue) => (T(), re(i(Sd), {
      disabled: !F.teleported,
      to: i(L)
    }, {
      default: J(() => [
        _(Io, {
          name: i(k),
          onAfterLeave: q,
          onBeforeEnter: se,
          onAfterEnter: ce,
          onBeforeLeave: de
        }, {
          default: J(() => [
            i(j) ? it((T(), re(i(dw), Ao({
              key: 0,
              id: i(c),
              ref_key: "contentRef",
              ref: s
            }, F.$attrs, {
              "aria-label": F.ariaLabel,
              "aria-hidden": R.value,
              "boundaries-padding": F.boundariesPadding,
              "fallback-placements": F.fallbackPlacements,
              "gpu-acceleration": F.gpuAcceleration,
              offset: F.offset,
              placement: F.placement,
              "popper-options": F.popperOptions,
              strategy: F.strategy,
              effect: F.effect,
              enterable: F.enterable,
              pure: F.pure,
              "popper-class": F.popperClass,
              "popper-style": [F.popperStyle, i(O)],
              "reference-el": F.referenceEl,
              "trigger-target-el": F.triggerTargetEl,
              visible: i(I),
              "z-index": F.zIndex,
              onMouseenter: i(ne),
              onMouseleave: i(H),
              onBlur: $,
              onClose: i(m)
            }), {
              default: J(() => [
                le(F.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Mn, i(I)]
            ]) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Pw = /* @__PURE__ */ Ve(Rw, [["__file", "content.vue"]]);
const Mw = oe({
  name: "ElTooltip"
}), Nw = /* @__PURE__ */ oe({
  ...Mw,
  props: kw,
  emits: _w,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Ow();
    const r = Xo(), s = M(), a = M(), l = () => {
      var k;
      const P = i(s);
      P && ((k = P.popperInstanceRef) == null || k.update());
    }, c = M(!1), u = M(), { show: d, hide: m, hasUpdateHandler: g } = ww({
      indicator: c,
      toggleReason: u
    }), { onOpen: w, onClose: h } = mw({
      showAfter: Zn(o, "showAfter"),
      hideAfter: Zn(o, "hideAfter"),
      autoClose: Zn(o, "autoClose"),
      open: d,
      close: m
    }), b = S(() => Pr(o.visible) && !g.value);
    yn(hi, {
      controlled: b,
      id: r,
      open: Ra(c),
      trigger: Zn(o, "trigger"),
      onOpen: (k) => {
        w(k);
      },
      onClose: (k) => {
        h(k);
      },
      onToggle: (k) => {
        i(c) ? h(k) : w(k);
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
      updatePopper: l
    }), pe(() => o.disabled, (k) => {
      k && c.value && (c.value = !1);
    });
    const C = (k) => {
      var P;
      return (P = a.value) == null ? void 0 : P.isFocusInsideContent(k);
    };
    return Ff(() => c.value && m()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: C,
      updatePopper: l,
      onOpen: w,
      onClose: h,
      hide: m
    }), (k, P) => (T(), re(i(fw), {
      ref_key: "popperRef",
      ref: s,
      role: k.role
    }, {
      default: J(() => [
        _(Cw, {
          disabled: k.disabled,
          trigger: k.trigger,
          "trigger-keys": k.triggerKeys,
          "virtual-ref": k.virtualRef,
          "virtual-triggering": k.virtualTriggering
        }, {
          default: J(() => [
            k.$slots.default ? le(k.$slots, "default", { key: 0 }) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        _(Pw, {
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
            le(k.$slots, "content", {}, () => [
              k.rawContent ? (T(), D("span", {
                key: 0,
                innerHTML: k.content
              }, null, 8, ["innerHTML"])) : (T(), D("span", { key: 1 }, E(k.content), 1))
            ]),
            k.showArrow ? (T(), re(i(x1), {
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
var Dw = /* @__PURE__ */ Ve(Nw, [["__file", "tooltip.vue"]]);
const zw = _n(Dw), Fw = Ne({
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
}), Bw = oe({
  name: "ElBadge"
}), jw = /* @__PURE__ */ oe({
  ...Bw,
  props: Fw,
  setup(e, { expose: t }) {
    const n = e, o = tt("badge"), r = S(() => n.isDot ? "" : Me(n.value) && Me(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = S(() => {
      var a, l, c, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: mo(-((l = (a = n.offset) == null ? void 0 : a[0]) != null ? l : 0)),
          marginTop: mo((u = (c = n.offset) == null ? void 0 : c[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: r
    }), (a, l) => (T(), D("div", {
      class: z(i(o).b())
    }, [
      le(a.$slots, "default"),
      _(Io, {
        name: `${i(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: J(() => [
          it(f("sup", {
            class: z([
              i(o).e("content"),
              i(o).em("content", a.type),
              i(o).is("fixed", !!a.$slots.default),
              i(o).is("dot", a.isDot),
              i(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: mt(i(s))
          }, [
            le(a.$slots, "content", { value: i(r) }, () => [
              pt(E(i(r)), 1)
            ])
          ], 6), [
            [Mn, !a.hidden && (i(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Vw = /* @__PURE__ */ Ve(jw, [["__file", "badge.vue"]]);
const Hw = _n(Vw), Ww = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, a) => {
  pe(() => i(a), (l) => {
  }, {
    immediate: !0
  });
};
var is = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(is || {});
const Uw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Aa = Ne({
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
    values: Nu
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Gw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Kw = oe({
  name: "ElTag"
}), qw = /* @__PURE__ */ oe({
  ...Kw,
  props: Aa,
  emits: Gw,
  setup(e, { emit: t }) {
    const n = e, o = Ms(), r = tt("tag"), s = S(() => {
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
    }, l = (u) => {
      t("click", u);
    }, c = (u) => {
      var d, m, g;
      (g = (m = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : m.component) != null && g.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (T(), D("span", {
      key: 0,
      class: z(i(s)),
      style: mt({ backgroundColor: u.color }),
      onClick: l
    }, [
      f("span", {
        class: z(i(r).e("content"))
      }, [
        le(u.$slots, "default")
      ], 2),
      u.closable ? (T(), re(i(Nt), {
        key: 0,
        class: z(i(r).e("close")),
        onClick: Ze(a, ["stop"])
      }, {
        default: J(() => [
          _(i(vs))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Y("v-if", !0)
    ], 6)) : (T(), re(Io, {
      key: 1,
      name: `${i(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: c
    }, {
      default: J(() => [
        f("span", {
          class: z(i(s)),
          style: mt({ backgroundColor: u.color }),
          onClick: l
        }, [
          f("span", {
            class: z(i(r).e("content"))
          }, [
            le(u.$slots, "default")
          ], 2),
          u.closable ? (T(), re(i(Nt), {
            key: 0,
            class: z(i(r).e("close")),
            onClick: Ze(a, ["stop"])
          }, {
            default: J(() => [
              _(i(vs))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Zw = /* @__PURE__ */ Ve(qw, [["__file", "tag.vue"]]);
const Yw = _n(Zw), ao = /* @__PURE__ */ new Map();
if (Ue) {
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
function vc(e, t) {
  let n = [];
  return On(t.arg) ? n = t.arg : vn(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, l = r?.target, c = !t || !t.instance, u = !a || !l, d = e.contains(a) || e.contains(l), m = e === a, g = n.length && n.some((h) => h?.contains(a)) || n.length && n.includes(l), w = s && (s.contains(a) || s.contains(l));
    c || u || d || m || g || w || t.value(o, r);
  };
}
const Xw = {
  beforeMount(e, t) {
    ao.has(e) || ao.set(e, []), ao.get(e).push({
      documentHandler: vc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ao.has(e) || ao.set(e, []);
    const n = ao.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: vc(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ao.delete(e);
  }
}, Qw = Ne({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: Ps,
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
  ...Fu
}), pn = {};
oe({
  name: "ElConfigProvider",
  props: Qw,
  setup(e, { slots: t }) {
    pe(() => e.message, (o) => {
      Object.assign(pn, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ju(e);
    return () => le(t, "default", { config: n?.value });
  }
});
const Jw = 100, ek = 600, bc = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = Jw, delay: r = ek } = nt(n) ? {} : n;
    let s, a;
    const l = () => nt(n) ? n() : n.handler(), c = () => {
      a && (clearTimeout(a), a = void 0), s && (clearInterval(s), s = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (c(), l(), document.addEventListener("mouseup", () => c(), {
        once: !0
      }), a = setTimeout(() => {
        s = setInterval(() => {
          l();
        }, o);
      }, r));
    });
  }
}, Ed = (e) => {
  if (!e)
    return { onClick: fo, onMousedown: fo, onMouseup: fo };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
}, tk = Ne({
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
}), nk = {
  click: (e) => e instanceof MouseEvent
}, ok = "overlay";
var rk = oe({
  name: "ElOverlay",
  props: tk,
  emits: nk,
  setup(e, { slots: t, emit: n }) {
    const o = tt(ok), r = (c) => {
      n("click", c);
    }, { onClick: s, onMousedown: a, onMouseup: l } = Ed(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? _("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: s,
      onMousedown: a,
      onMouseup: l
    }, [le(t, "default")], is.STYLE | is.CLASS | is.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Bf("div", {
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
const sk = rk, xd = Symbol("dialogInjectionKey"), Id = Ne({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Co
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
}), ak = {
  close: () => !0
}, ik = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (u) => {
    const d = u.clientX, m = u.clientY, { offsetX: g, offsetY: w } = r, h = e.value.getBoundingClientRect(), b = h.left, C = h.top, k = h.width, P = h.height, j = document.documentElement.clientWidth, I = document.documentElement.clientHeight, L = -b + g, O = -C + w, R = j - b - k + g, q = I - C - P + w, B = (H) => {
      let se = g + H.clientX - d, de = w + H.clientY - m;
      o?.value || (se = Math.min(Math.max(se, L), R), de = Math.min(Math.max(de, O), q)), r = {
        offsetX: se,
        offsetY: de
      }, e.value && (e.value.style.transform = `translate(${mo(se)}, ${mo(de)})`);
    }, ne = () => {
      document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", ne);
    };
    document.addEventListener("mousemove", B), document.addEventListener("mouseup", ne);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", s);
  }, l = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", s);
  }, c = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return ot(() => {
    Pa(() => {
      n.value ? a() : l();
    });
  }), kn(() => {
    l();
  }), {
    resetPosition: c
  };
}, lk = (...e) => (t) => {
  e.forEach((n) => {
    nt(n) ? n(t) : n.value = t;
  });
}, ck = oe({ name: "ElDialogContent" }), uk = /* @__PURE__ */ oe({
  ...ck,
  props: Id,
  emits: ak,
  setup(e, { expose: t }) {
    const n = e, { t: o } = $s(), { Close: r } = Gu, { dialogRef: s, headerRef: a, bodyId: l, ns: c, style: u } = Le(xd), { focusTrapRef: d } = Le(ld), m = S(() => [
      c.b(),
      c.is("fullscreen", n.fullscreen),
      c.is("draggable", n.draggable),
      c.is("align-center", n.alignCenter),
      { [c.m("center")]: n.center }
    ]), g = lk(d, s), w = S(() => n.draggable), h = S(() => n.overflow), { resetPosition: b } = ik(s, a, w, h);
    return t({
      resetPosition: b
    }), (C, k) => (T(), D("div", {
      ref: i(g),
      class: z(i(m)),
      style: mt(i(u)),
      tabindex: "-1"
    }, [
      f("header", {
        ref_key: "headerRef",
        ref: a,
        class: z([i(c).e("header"), C.headerClass, { "show-close": C.showClose }])
      }, [
        le(C.$slots, "header", {}, () => [
          f("span", {
            role: "heading",
            "aria-level": C.ariaLevel,
            class: z(i(c).e("title"))
          }, E(C.title), 11, ["aria-level"])
        ]),
        C.showClose ? (T(), D("button", {
          key: 0,
          "aria-label": i(o)("el.dialog.close"),
          class: z(i(c).e("headerbtn")),
          type: "button",
          onClick: (P) => C.$emit("close")
        }, [
          _(i(Nt), {
            class: z(i(c).e("close"))
          }, {
            default: J(() => [
              (T(), re(tn(C.closeIcon || i(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : Y("v-if", !0)
      ], 2),
      f("div", {
        id: i(l),
        class: z([i(c).e("body"), C.bodyClass])
      }, [
        le(C.$slots, "default")
      ], 10, ["id"]),
      C.$slots.footer ? (T(), D("footer", {
        key: 0,
        class: z([i(c).e("footer"), C.footerClass])
      }, [
        le(C.$slots, "footer")
      ], 2)) : Y("v-if", !0)
    ], 6));
  }
});
var dk = /* @__PURE__ */ Ve(uk, [["__file", "dialog-content.vue"]]);
const fk = Ne({
  ...Id,
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
}), pk = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [vt]: (e) => Pr(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, mk = (e, t = {}) => {
  en(e) || Xa("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || tt("popup"), o = S(() => n.bm("parent", "hidden"));
  if (!Ue || ql(document.body, o.value))
    return;
  let r = 0, s = !1, a = "0";
  const l = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = a, ub(document.body, o.value));
    }, 200);
  };
  pe(e, (c) => {
    if (!c) {
      l();
      return;
    }
    s = !ql(document.body, o.value), s && (a = document.body.style.width, cb(document.body, o.value)), r = fb(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = db(document.body, "overflowY");
    r > 0 && (u || d === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Gc(() => l());
}, hk = (e, t) => {
  var n;
  const r = xt().emit, { nextZIndex: s } = Qa();
  let a = "";
  const l = Xo(), c = Xo(), u = M(!1), d = M(!1), m = M(!1), g = M((n = e.zIndex) != null ? n : s());
  let w, h;
  const b = Ja("namespace", Tr), C = S(() => {
    const $ = {}, V = `--${b.value}-dialog`;
    return e.fullscreen || (e.top && ($[`${V}-margin-top`] = e.top), e.width && ($[`${V}-width`] = mo(e.width))), $;
  }), k = S(() => e.alignCenter ? { display: "flex" } : {});
  function P() {
    r("opened");
  }
  function j() {
    r("closed"), r(vt, !1), e.destroyOnClose && (m.value = !1);
  }
  function I() {
    r("close");
  }
  function L() {
    h?.(), w?.(), e.openDelay && e.openDelay > 0 ? { stop: w } = hs(() => B(), e.openDelay) : B();
  }
  function O() {
    w?.(), h?.(), e.closeDelay && e.closeDelay > 0 ? { stop: h } = hs(() => ne(), e.closeDelay) : ne();
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
  function B() {
    Ue && (u.value = !0);
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
  e.lockScroll && mk(u);
  function ce() {
    e.closeOnPressEscape && R();
  }
  return pe(() => e.modelValue, ($) => {
    $ ? (d.value = !1, L(), m.value = !0, g.value = Iu(e.zIndex) ? s() : g.value++, Ye(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && O();
  }), pe(() => e.fullscreen, ($) => {
    t.value && ($ ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), ot(() => {
    e.modelValue && (u.value = !0, m.value = !0, L());
  }), {
    afterEnter: P,
    afterLeave: j,
    beforeLeave: I,
    handleClose: R,
    onModalClick: q,
    close: O,
    doClose: ne,
    onOpenAutoFocus: H,
    onCloseAutoFocus: se,
    onCloseRequested: ce,
    onFocusoutPrevented: de,
    titleId: l,
    bodyId: c,
    closed: d,
    style: C,
    overlayDialogStyle: k,
    rendered: m,
    visible: u,
    zIndex: g
  };
}, gk = oe({
  name: "ElDialog",
  inheritAttrs: !1
}), vk = /* @__PURE__ */ oe({
  ...gk,
  props: fk,
  emits: pk,
  setup(e, { expose: t }) {
    const n = e, o = Kc();
    Ww({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, S(() => !!o.title));
    const r = tt("dialog"), s = M(), a = M(), l = M(), {
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
      handleClose: P,
      onModalClick: j,
      onOpenAutoFocus: I,
      onCloseAutoFocus: L,
      onCloseRequested: O,
      onFocusoutPrevented: R
    } = hk(n, s);
    yn(xd, {
      dialogRef: s,
      headerRef: a,
      bodyId: d,
      ns: r,
      rendered: w,
      style: m
    });
    const q = Ed(j), B = S(() => n.draggable && !n.fullscreen);
    return t({
      visible: c,
      dialogContentRef: l,
      resetPosition: () => {
        var H;
        (H = l.value) == null || H.resetPosition();
      }
    }), (H, se) => (T(), re(i(Sd), {
      to: H.appendTo,
      disabled: H.appendTo !== "body" ? !1 : !H.appendToBody
    }, {
      default: J(() => [
        _(Io, {
          name: "dialog-fade",
          onAfterEnter: i(b),
          onAfterLeave: i(C),
          onBeforeLeave: i(k),
          persisted: ""
        }, {
          default: J(() => [
            it(_(i(sk), {
              "custom-mask-event": "",
              mask: H.modal,
              "overlay-class": H.modalClass,
              "z-index": i(h)
            }, {
              default: J(() => [
                f("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": H.title || void 0,
                  "aria-labelledby": H.title ? void 0 : i(u),
                  "aria-describedby": i(d),
                  class: z(`${i(r).namespace.value}-overlay-dialog`),
                  style: mt(i(g)),
                  onClick: i(q).onClick,
                  onMousedown: i(q).onMousedown,
                  onMouseup: i(q).onMouseup
                }, [
                  _(i(ud), {
                    loop: "",
                    trapped: i(c),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: i(I),
                    onFocusAfterReleased: i(L),
                    onFocusoutPrevented: i(R),
                    onReleaseRequested: i(O)
                  }, {
                    default: J(() => [
                      i(w) ? (T(), re(dk, Ao({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: l
                      }, H.$attrs, {
                        center: H.center,
                        "align-center": H.alignCenter,
                        "close-icon": H.closeIcon,
                        draggable: i(B),
                        overflow: H.overflow,
                        fullscreen: H.fullscreen,
                        "header-class": H.headerClass,
                        "body-class": H.bodyClass,
                        "footer-class": H.footerClass,
                        "show-close": H.showClose,
                        title: H.title,
                        "aria-level": H.headerAriaLevel,
                        onClose: i(P)
                      }), Na({
                        header: J(() => [
                          H.$slots.title ? le(H.$slots, "title", { key: 1 }) : le(H.$slots, "header", {
                            key: 0,
                            close: i(P),
                            titleId: i(u),
                            titleClass: i(r).e("title")
                          })
                        ]),
                        default: J(() => [
                          le(H.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        H.$slots.footer ? {
                          name: "footer",
                          fn: J(() => [
                            le(H.$slots, "footer")
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
              [Mn, i(c)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var bk = /* @__PURE__ */ Ve(vk, [["__file", "dialog.vue"]]);
const yk = _n(bk), wk = Ne({
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
  size: Ps,
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
    validator: (e) => e === null || Me(e) || ["min", "max"].includes(e),
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
  ...ir(["ariaLabel"])
}), kk = {
  [Yo]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [qo]: (e) => Me(e) || Qn(e),
  [vt]: (e) => Me(e) || Qn(e)
}, _k = oe({
  name: "ElInputNumber"
}), Ak = /* @__PURE__ */ oe({
  ..._k,
  props: wk,
  emits: kk,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = $s(), s = tt("input-number"), a = M(), l = To({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: c } = ni(), u = S(() => Me(o.modelValue) && o.modelValue <= o.min), d = S(() => Me(o.modelValue) && o.modelValue >= o.max), m = S(() => {
      const $ = k(o.step);
      return $n(o.precision) ? Math.max(k(o.modelValue), $) : ($ > o.precision, o.precision);
    }), g = S(() => o.controls && o.controlsPosition === "right"), w = Ms(), h = Ju(), b = S(() => {
      if (l.userInput !== null)
        return l.userInput;
      let $ = l.currentValue;
      if (Qn($))
        return "";
      if (Me($)) {
        if (Number.isNaN($))
          return "";
        $n(o.precision) || ($ = $.toFixed(o.precision));
      }
      return $;
    }), C = ($, V) => {
      if ($n(V) && (V = m.value), V === 0)
        return Math.round($);
      let F = String($);
      const ue = F.indexOf(".");
      if (ue === -1 || !F.replace(".", "").split("")[ue + V])
        return $;
      const De = F.length;
      return F.charAt(De - 1) === "5" && (F = `${F.slice(0, Math.max(0, De - 1))}6`), Number.parseFloat(Number(F).toFixed(V));
    }, k = ($) => {
      if (Qn($))
        return 0;
      const V = $.toString(), F = V.indexOf(".");
      let ue = 0;
      return F !== -1 && (ue = V.length - F - 1), ue;
    }, P = ($, V = 1) => Me($) ? C($ + o.step * V) : l.currentValue, j = () => {
      if (o.readonly || h.value || d.value)
        return;
      const $ = Number(b.value) || 0, V = P($);
      O(V), n(qo, l.currentValue), de();
    }, I = () => {
      if (o.readonly || h.value || u.value)
        return;
      const $ = Number(b.value) || 0, V = P($, -1);
      O(V), n(qo, l.currentValue), de();
    }, L = ($, V) => {
      const { max: F, min: ue, step: fe, precision: Ae, stepStrictly: De, valueOnClear: Ge } = o;
      F < ue && Xa("InputNumber", "min should not be greater than max.");
      let ve = Number($);
      if (Qn($) || Number.isNaN(ve))
        return null;
      if ($ === "") {
        if (Ge === null)
          return null;
        ve = Xt(Ge) ? { min: ue, max: F }[Ge] : Ge;
      }
      return De && (ve = C(Math.round(ve / fe) * fe, Ae), ve !== $ && V && n(vt, ve)), $n(Ae) || (ve = C(ve, Ae)), (ve > F || ve < ue) && (ve = ve > F ? F : ue, V && n(vt, ve)), ve;
    }, O = ($, V = !0) => {
      var F;
      const ue = l.currentValue, fe = L($);
      if (!V) {
        n(vt, fe);
        return;
      }
      ue === fe && $ || (l.userInput = null, n(vt, fe), ue !== fe && n(Yo, fe, ue), o.validateEvent && ((F = c?.validate) == null || F.call(c, "change").catch((Ae) => void 0)), l.currentValue = fe);
    }, R = ($) => {
      l.userInput = $;
      const V = $ === "" ? null : Number($);
      n(qo, V), O(V, !1);
    }, q = ($) => {
      const V = $ !== "" ? Number($) : "";
      (Me(V) && !Number.isNaN(V) || $ === "") && O(V), de(), l.userInput = null;
    }, B = () => {
      var $, V;
      (V = ($ = a.value) == null ? void 0 : $.focus) == null || V.call($);
    }, ne = () => {
      var $, V;
      (V = ($ = a.value) == null ? void 0 : $.blur) == null || V.call($);
    }, H = ($) => {
      n("focus", $);
    }, se = ($) => {
      var V, F;
      l.userInput = null, qu() && l.currentValue === null && ((V = a.value) != null && V.input) && (a.value.input.value = ""), n("blur", $), o.validateEvent && ((F = c?.validate) == null || F.call(c, "blur").catch((ue) => void 0));
    }, de = () => {
      l.currentValue !== o.modelValue && (l.currentValue = o.modelValue);
    }, ce = ($) => {
      document.activeElement === $.target && $.preventDefault();
    };
    return pe(() => o.modelValue, ($, V) => {
      const F = L($, !0);
      l.userInput === null && F !== V && (l.currentValue = F);
    }, { immediate: !0 }), ot(() => {
      var $;
      const { min: V, max: F, modelValue: ue } = o, fe = ($ = a.value) == null ? void 0 : $.input;
      if (fe.setAttribute("role", "spinbutton"), Number.isFinite(F) ? fe.setAttribute("aria-valuemax", String(F)) : fe.removeAttribute("aria-valuemax"), Number.isFinite(V) ? fe.setAttribute("aria-valuemin", String(V)) : fe.removeAttribute("aria-valuemin"), fe.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), fe.setAttribute("aria-disabled", String(h.value)), !Me(ue) && ue != null) {
        let Ae = Number(ue);
        Number.isNaN(Ae) && (Ae = null), n(vt, Ae);
      }
      fe.addEventListener("wheel", ce, { passive: !1 });
    }), qc(() => {
      var $, V;
      const F = ($ = a.value) == null ? void 0 : $.input;
      F?.setAttribute("aria-valuenow", `${(V = l.currentValue) != null ? V : ""}`);
    }), t({
      focus: B,
      blur: ne
    }), ($, V) => (T(), D("div", {
      class: z([
        i(s).b(),
        i(s).m(i(w)),
        i(s).is("disabled", i(h)),
        i(s).is("without-controls", !$.controls),
        i(s).is("controls-right", i(g))
      ]),
      onDragstart: Ze(() => {
      }, ["prevent"])
    }, [
      $.controls ? it((T(), D("span", {
        key: 0,
        role: "button",
        "aria-label": i(r)("el.inputNumber.decrease"),
        class: z([i(s).e("decrease"), i(s).is("disabled", i(u))]),
        onKeydown: In(I, ["enter"])
      }, [
        le($.$slots, "decrease-icon", {}, () => [
          _(i(Nt), null, {
            default: J(() => [
              i(g) ? (T(), re(i(Uu), { key: 0 })) : (T(), re(i(Pb), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(bc), I]
      ]) : Y("v-if", !0),
      $.controls ? it((T(), D("span", {
        key: 1,
        role: "button",
        "aria-label": i(r)("el.inputNumber.increase"),
        class: z([i(s).e("increase"), i(s).is("disabled", i(d))]),
        onKeydown: In(j, ["enter"])
      }, [
        le($.$slots, "increase-icon", {}, () => [
          _(i(Nt), null, {
            default: J(() => [
              i(g) ? (T(), re(i(wb), { key: 0 })) : (T(), re(i(Nb), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(bc), j]
      ]) : Y("v-if", !0),
      _(i(a1), {
        id: $.id,
        ref_key: "input",
        ref: a,
        type: "number",
        step: $.step,
        "model-value": i(b),
        placeholder: $.placeholder,
        readonly: $.readonly,
        disabled: i(h),
        size: i(w),
        max: $.max,
        min: $.min,
        name: $.name,
        "aria-label": $.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          In(Ze(j, ["prevent"]), ["up"]),
          In(Ze(I, ["prevent"]), ["down"])
        ],
        onBlur: se,
        onFocus: H,
        onInput: R,
        onChange: q
      }, Na({
        _: 2
      }, [
        $.$slots.prefix ? {
          name: "prefix",
          fn: J(() => [
            le($.$slots, "prefix")
          ])
        } : void 0,
        $.$slots.suffix ? {
          name: "suffix",
          fn: J(() => [
            le($.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Tk = /* @__PURE__ */ Ve(Ak, [["__file", "input-number.vue"]]);
const Sk = _n(Tk);
function Ck() {
  const e = uo(), t = M(0), n = 11, o = S(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Ln(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Ld = Symbol("ElSelectGroup"), Fs = Symbol("ElSelect");
function Ek(e, t) {
  const n = Le(Fs), o = Le(Ld, { disabled: !1 }), r = S(() => d(lo(n.props.modelValue), e.value)), s = S(() => {
    var w;
    if (n.props.multiple) {
      const h = lo((w = n.props.modelValue) != null ? w : []);
      return !r.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = S(() => e.label || (nn(e.value) ? "" : e.value)), l = S(() => e.value || e.label || ""), c = S(() => e.disabled || t.groupDisabled || s.value), u = xt(), d = (w = [], h) => {
    if (nn(e.value)) {
      const b = n.props.valueKey;
      return w && w.some((C) => jf(co(C, b)) === co(h, b));
    } else
      return w && w.includes(h);
  }, m = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (w) => {
    const h = new RegExp(Uw(w), "i");
    t.visible = h.test(a.value) || e.created;
  };
  return pe(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), pe(() => e.value, (w, h) => {
    const { remote: b, valueKey: C } = n.props;
    if ((b ? w !== h : !Cr(w, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !b) {
      if (C && nn(w) && nn(h) && w[C] === h[C])
        return;
      n.setSelected();
    }
  }), pe(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: l,
    itemSelected: r,
    isDisabled: c,
    hoverItem: m,
    updateOption: g
  };
}
const xk = oe({
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
    const t = tt("select"), n = Xo(), o = S(() => [
      t.be("dropdown", "item"),
      t.is("disabled", i(l)),
      t.is("selected", i(a)),
      t.is("hovering", i(g))
    ]), r = To({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: a,
      isDisabled: l,
      select: c,
      hoverItem: u,
      updateOption: d
    } = Ek(e, r), { visible: m, hover: g } = Da(r), w = xt().proxy;
    c.onOptionCreate(w), kn(() => {
      const b = w.value, { selected: C } = c.states, k = C.some((P) => P.value === w.value);
      Ye(() => {
        c.states.cachedOptions.get(b) === w && !k && c.states.cachedOptions.delete(b);
      }), c.onOptionDestroy(b, w);
    });
    function h() {
      l.value || c.handleOptionSelect(w);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: a,
      isDisabled: l,
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
function Ik(e, t, n, o, r, s) {
  return it((T(), D("li", {
    id: e.id,
    class: z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ze(e.selectOptionClick, ["stop"])
  }, [
    le(e.$slots, "default", {}, () => [
      f("span", null, E(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Mn, e.visible]
  ]);
}
var vi = /* @__PURE__ */ Ve(xk, [["render", Ik], ["__file", "option.vue"]]);
const Lk = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Le(Fs), t = tt("select"), n = S(() => e.props.popperClass), o = S(() => e.props.multiple), r = S(() => e.props.fitInputWidth), s = M("");
    function a() {
      var l;
      s.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return ot(() => {
      a(), Ln(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Ok(e, t, n, o, r, s) {
  return T(), D("div", {
    class: z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: mt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (T(), D("div", {
      key: 0,
      class: z(e.ns.be("dropdown", "header"))
    }, [
      le(e.$slots, "header")
    ], 2)) : Y("v-if", !0),
    le(e.$slots, "default"),
    e.$slots.footer ? (T(), D("div", {
      key: 1,
      class: z(e.ns.be("dropdown", "footer"))
    }, [
      le(e.$slots, "footer")
    ], 2)) : Y("v-if", !0)
  ], 6);
}
var $k = /* @__PURE__ */ Ve(Lk, [["render", Ok], ["__file", "select-dropdown.vue"]]);
const Rk = (e, t) => {
  const { t: n } = $s(), o = Xo(), r = tt("select"), s = tt("input"), a = To({
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
  }), l = M(null), c = M(null), u = M(null), d = M(null), m = M(null), g = M(null), w = M(null), h = M(null), b = M(null), C = M(null), k = M(null), {
    isComposing: P,
    handleCompositionStart: j,
    handleCompositionUpdate: I,
    handleCompositionEnd: L
  } = td({
    afterComposition: (x) => kt(x)
  }), { wrapperRef: O, isFocused: R, handleBlur: q } = ed(m, {
    beforeFocus() {
      return V.value;
    },
    afterFocus() {
      e.automaticDropdown && !B.value && (B.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(x) {
      var Z, ge;
      return ((Z = u.value) == null ? void 0 : Z.isFocusInsideContent(x)) || ((ge = d.value) == null ? void 0 : ge.isFocusInsideContent(x));
    },
    afterBlur() {
      B.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), B = M(!1), ne = M(), { form: H, formItem: se } = ni(), { inputId: de } = Xu(e, {
    formItemContext: se
  }), { valueOnClear: ce, isEmptyValue: $ } = ib(e), V = S(() => e.disabled || H?.disabled), F = S(() => On(e.modelValue) ? e.modelValue.length > 0 : !$(e.modelValue)), ue = S(() => {
    var x;
    return (x = H?.statusIcon) != null ? x : !1;
  }), fe = S(() => e.clearable && !V.value && a.inputHovering && F.value), Ae = S(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = S(() => r.is("reverse", Ae.value && B.value)), Ge = S(() => se?.validateState || ""), ve = S(() => Ku[Ge.value]), W = S(() => e.remote ? 300 : 0), U = S(() => e.remote && !a.inputValue && a.options.size === 0), me = S(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && Oe.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Oe = S(() => ee.value.filter((x) => x.visible).length), ee = S(() => {
    const x = Array.from(a.options.values()), Z = [];
    return a.optionValues.forEach((ge) => {
      const Be = x.findIndex((Je) => Je.value === ge);
      Be > -1 && Z.push(x[Be]);
    }), Z.length >= x.length ? Z : x;
  }), X = S(() => Array.from(a.cachedOptions.values())), He = S(() => {
    const x = ee.value.filter((Z) => !Z.created).some((Z) => Z.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !x;
  }), ze = () => {
    e.filterable && nt(e.filterMethod) || e.filterable && e.remote && nt(e.remoteMethod) || ee.value.forEach((x) => {
      var Z;
      (Z = x.updateOption) == null || Z.call(x, a.inputValue);
    });
  }, ut = Ms(), Ke = S(() => ["small"].includes(ut.value) ? "small" : "default"), It = S({
    get() {
      return B.value && !U.value;
    },
    set(x) {
      B.value = x;
    }
  }), bt = S(() => {
    if (e.multiple && !$n(e.modelValue))
      return lo(e.modelValue).length === 0 && !a.inputValue;
    const x = On(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $n(x) ? !a.inputValue : !0;
  }), qe = S(() => {
    var x;
    const Z = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !F.value ? Z : a.selectedLabel;
  }), yt = S(() => ya ? null : "mouseenter");
  pe(() => e.modelValue, (x, Z) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", rt("")), Qe(), !Cr(x, Z) && e.validateEvent && se?.validate("change").catch((ge) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), pe(() => B.value, (x) => {
    x ? rt(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", x);
  }), pe(() => a.options.entries(), () => {
    Ue && (Qe(), e.defaultFirstOption && (e.filterable || e.remote) && Oe.value && wt());
  }, {
    flush: "post"
  }), pe([() => a.hoveringIndex, ee], ([x]) => {
    Me(x) && x > -1 ? ne.value = ee.value[x] || {} : ne.value = {}, ee.value.forEach((Z) => {
      Z.hover = ne.value === Z;
    });
  }), Pa(() => {
    a.isBeforeHide || ze();
  });
  const rt = (x) => {
    a.previousQuery === x || P.value || (a.previousQuery = x, e.filterable && nt(e.filterMethod) ? e.filterMethod(x) : e.filterable && e.remote && nt(e.remoteMethod) && e.remoteMethod(x), e.defaultFirstOption && (e.filterable || e.remote) && Oe.value ? Ye(wt) : Ye(Lt));
  }, wt = () => {
    const x = ee.value.filter((Je) => Je.visible && !Je.disabled && !Je.states.groupDisabled), Z = x.find((Je) => Je.created), ge = x[0], Be = ee.value.map((Je) => Je.value);
    a.hoveringIndex = jn(Be, Z || ge);
  }, Qe = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const Z = On(e.modelValue) ? e.modelValue[0] : e.modelValue, ge = ct(Z);
      a.selectedLabel = ge.currentLabel, a.selected = [ge];
      return;
    }
    const x = [];
    $n(e.modelValue) || lo(e.modelValue).forEach((Z) => {
      x.push(ct(Z));
    }), a.selected = x;
  }, ct = (x) => {
    let Z;
    const ge = Pm(x);
    for (let Bt = a.cachedOptions.size - 1; Bt >= 0; Bt--) {
      const $t = X.value[Bt];
      if (ge ? co($t.value, e.valueKey) === co(x, e.valueKey) : $t.value === x) {
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
  }, Lt = () => {
    a.hoveringIndex = ee.value.findIndex((x) => a.selected.some((Z) => $e(Z) === $e(x)));
  }, Ft = () => {
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
    a.inputValue.length > 0 && !B.value && (B.value = !0), rt(a.inputValue);
  }, kt = (x) => {
    if (a.inputValue = x.target.value, e.remote)
      We();
    else
      return xe();
  }, We = k0(() => {
    xe();
  }, W.value), ft = (x) => {
    Cr(e.modelValue, x) || t(Yo, x);
  }, go = (x) => _0(x, (Z) => {
    const ge = a.cachedOptions.get(Z);
    return ge && !ge.disabled && !ge.states.groupDisabled;
  }), Fn = (x) => {
    if (e.multiple && x.code !== Rn.delete && x.target.value.length <= 0) {
      const Z = lo(e.modelValue).slice(), ge = go(Z);
      if (ge < 0)
        return;
      const Be = Z[ge];
      Z.splice(ge, 1), t(vt, Z), ft(Z), t("remove-tag", Be);
    }
  }, An = (x, Z) => {
    const ge = a.selected.indexOf(Z);
    if (ge > -1 && !V.value) {
      const Be = lo(e.modelValue).slice();
      Be.splice(ge, 1), t(vt, Be), ft(Be), t("remove-tag", Z.value);
    }
    x.stopPropagation(), no();
  }, Bn = (x) => {
    x.stopPropagation();
    const Z = e.multiple ? [] : ce.value;
    if (e.multiple)
      for (const ge of a.selected)
        ge.isDisabled && Z.push(ge.value);
    t(vt, Z), ft(Z), a.hoveringIndex = -1, B.value = !1, t("clear"), no();
  }, Ut = (x) => {
    var Z;
    if (e.multiple) {
      const ge = lo((Z = e.modelValue) != null ? Z : []).slice(), Be = jn(ge, x);
      Be > -1 ? ge.splice(Be, 1) : (e.multipleLimit <= 0 || ge.length < e.multipleLimit) && ge.push(x.value), t(vt, ge), ft(ge), x.created && rt(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(vt, x.value), ft(x.value), B.value = !1;
    no(), !B.value && Ye(() => {
      Ot(x);
    });
  }, jn = (x = [], Z) => $n(Z) ? -1 : nn(Z.value) ? x.findIndex((ge) => Cr(co(ge, e.valueKey), $e(Z))) : x.indexOf(Z.value), Ot = (x) => {
    var Z, ge, Be, Je, Bt;
    const $t = On(x) ? x[0] : x;
    let Tt = null;
    if ($t?.value) {
      const Gt = ee.value.filter((zo) => zo.value === $t.value);
      Gt.length > 0 && (Tt = Gt[0].$el);
    }
    if (u.value && Tt) {
      const Gt = (Je = (Be = (ge = (Z = u.value) == null ? void 0 : Z.popperRef) == null ? void 0 : ge.contentRef) == null ? void 0 : Be.querySelector) == null ? void 0 : Je.call(Be, `.${r.be("dropdown", "wrap")}`);
      Gt && pb(Gt, Tt);
    }
    (Bt = k.value) == null || Bt.handleScroll();
  }, _t = (x) => {
    a.options.set(x.value, x), a.cachedOptions.set(x.value, x);
  }, Tn = (x, Z) => {
    a.options.get(x) === Z && a.options.delete(x);
  }, Sn = S(() => {
    var x, Z;
    return (Z = (x = u.value) == null ? void 0 : x.popperRef) == null ? void 0 : Z.contentRef;
  }), vo = () => {
    a.isBeforeHide = !1, Ye(() => {
      var x;
      (x = k.value) == null || x.update(), Ot(a.selected);
    });
  }, no = () => {
    var x;
    (x = m.value) == null || x.focus();
  }, ln = () => {
    var x;
    if (B.value) {
      B.value = !1, Ye(() => {
        var Z;
        return (Z = m.value) == null ? void 0 : Z.blur();
      });
      return;
    }
    (x = m.value) == null || x.blur();
  }, Vn = (x) => {
    Bn(x);
  }, oo = (x) => {
    if (B.value = !1, R.value) {
      const Z = new FocusEvent("focus", x);
      Ye(() => q(Z));
    }
  }, cn = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : B.value = !1;
  }, Hn = () => {
    V.value || (ya && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : B.value = !B.value);
  }, Po = () => {
    if (!B.value)
      Hn();
    else {
      const x = ee.value[a.hoveringIndex];
      x && !x.isDisabled && Ut(x);
    }
  }, $e = (x) => nn(x.value) ? co(x.value, e.valueKey) : x.value, un = S(() => ee.value.filter((x) => x.visible).every((x) => x.isDisabled)), Mo = S(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), No = S(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), dn = (x) => {
    if (!B.value) {
      B.value = !0;
      return;
    }
    if (!(a.options.size === 0 || Oe.value === 0 || P.value) && !un.value) {
      x === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : x === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const Z = ee.value[a.hoveringIndex];
      (Z.isDisabled || !Z.visible) && dn(x), Ye(() => Ot(ne.value));
    }
  }, Do = () => {
    if (!c.value)
      return 0;
    const x = window.getComputedStyle(c.value);
    return Number.parseFloat(x.gap || "6px");
  }, bo = S(() => {
    const x = Do();
    return { maxWidth: `${C.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - x : a.selectionWidth}px` };
  }), lr = S(() => ({ maxWidth: `${a.selectionWidth}px` })), At = (x) => {
    t("popup-scroll", x);
  };
  return Ln(c, Ft), Ln(h, ke), Ln(O, ke), Ln(b, dt), Ln(C, K), ot(() => {
    Qe();
  }), {
    inputId: de,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: R,
    expanded: B,
    optionsArray: ee,
    hoverOption: ne,
    selectSize: ut,
    filteredOptionsCount: Oe,
    updateTooltip: ke,
    updateTagTooltip: dt,
    debouncedOnInputChange: We,
    onInput: kt,
    deletePrevTag: Fn,
    deleteTag: An,
    deleteSelected: Bn,
    handleOptionSelect: Ut,
    scrollToOption: Ot,
    hasModelValue: F,
    shouldShowPlaceholder: bt,
    currentPlaceholder: qe,
    mouseEnterEventName: yt,
    needStatusIcon: ue,
    showClose: fe,
    iconComponent: Ae,
    iconReverse: De,
    validateState: Ge,
    validateIcon: ve,
    showNewOption: He,
    updateOptions: ze,
    collapseTagSize: Ke,
    setSelected: Qe,
    selectDisabled: V,
    emptyText: me,
    handleCompositionStart: j,
    handleCompositionUpdate: I,
    handleCompositionEnd: L,
    onOptionCreate: _t,
    onOptionDestroy: Tn,
    handleMenuEnter: vo,
    focus: no,
    blur: ln,
    handleClearClick: Vn,
    handleClickOutside: oo,
    handleEsc: cn,
    toggleMenu: Hn,
    selectOption: Po,
    getValueKey: $e,
    navigateOptions: dn,
    dropdownMenuVisible: It,
    showTagList: Mo,
    collapseTagList: No,
    popupScroll: At,
    tagStyle: bo,
    collapseTagStyle: lr,
    popperRef: Sn,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: g,
    suffixRef: w,
    selectRef: l,
    wrapperRef: O,
    selectionRef: c,
    scrollbarRef: k,
    menuRef: h,
    tagMenuRef: b,
    collapseItemRef: C
  };
};
var Pk = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Le(Fs);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), l = [];
      function c(u) {
        On(u) && u.forEach((d) => {
          var m, g, w, h;
          const b = (m = d?.type || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? c(!Xt(d.children) && !On(d.children) && nt((g = d.children) == null ? void 0 : g.default) ? (w = d.children) == null ? void 0 : w.default() : d.children) : b === "ElOption" ? l.push((h = d.props) == null ? void 0 : h.value) : On(d.children) && c(d.children);
        });
      }
      return a.length && c((s = a[0]) == null ? void 0 : s.children), Cr(l, o) || (o = l, n && (n.states.optionValues = l)), a;
    };
  }
});
const Mk = Ne({
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
  size: Ps,
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
  teleported: gi.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Co,
    default: ei
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Co,
    default: Uu
  },
  tagType: { ...Aa.type, default: "info" },
  tagEffect: { ...Aa.effect, default: "light" },
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
    values: Ds,
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
  ...Fu,
  ...ir(["ariaLabel"])
}), yc = "ElSelect", Nk = oe({
  name: yc,
  componentName: yc,
  components: {
    ElSelectMenu: $k,
    ElOption: vi,
    ElOptions: Pk,
    ElTag: Yw,
    ElScrollbar: k1,
    ElTooltip: zw,
    ElIcon: Nt
  },
  directives: { ClickOutside: Xw },
  props: Mk,
  emits: [
    vt,
    Yo,
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
      return On(c) ? u ? c : d : u ? d : c;
    }), o = To({
      ...Da(e),
      modelValue: n
    }), r = Rk(o, t), { calculatorRef: s, inputStyle: a } = Ck();
    yn(Fs, To({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const l = S(() => e.multiple ? r.states.selected.map((c) => c.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: s,
      inputStyle: a
    };
  }
});
function Dk(e, t, n, o, r, s) {
  const a = yo("el-tag"), l = yo("el-tooltip"), c = yo("el-icon"), u = yo("el-option"), d = yo("el-options"), m = yo("el-scrollbar"), g = yo("el-select-menu"), w = Vf("click-outside");
  return it((T(), D("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Hf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
  }, [
    _(l, {
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
            onClick: Ze(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (T(), D("div", {
              key: 0,
              ref: "prefixRef",
              class: z(e.nsSelect.e("prefix"))
            }, [
              le(e.$slots, "prefix")
            ], 2)) : Y("v-if", !0),
            f("div", {
              ref: "selectionRef",
              class: z([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? le(e.$slots, "tag", { key: 0 }, () => [
                (T(!0), D(at, null, xn(e.showTagList, (b) => (T(), D("div", {
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
                        le(e.$slots, "label", {
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
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (T(), re(l, {
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
                      (T(!0), D(at, null, xn(e.collapseTagList, (b) => (T(), D("div", {
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
                              le(e.$slots, "label", {
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
                it(f("input", {
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
                    In(Ze((b) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    In(Ze((b) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    In(Ze(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    In(Ze(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    In(Ze(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ze(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Lr, e.states.inputValue]
                ]),
                e.filterable ? (T(), D("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: z(e.nsSelect.e("input-calculator")),
                  textContent: E(e.states.inputValue)
                }, null, 10, ["textContent"])) : Y("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (T(), D("div", {
                key: 1,
                class: z([
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
                  f("span", null, E(e.currentPlaceholder), 1)
                ]) : (T(), D("span", { key: 1 }, E(e.currentPlaceholder), 1))
              ], 2)) : Y("v-if", !0)
            ], 2),
            f("div", {
              ref: "suffixRef",
              class: z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (T(), re(c, {
                key: 0,
                class: z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: J(() => [
                  (T(), re(tn(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              e.showClose && e.clearIcon ? (T(), re(c, {
                key: 1,
                class: z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: J(() => [
                  (T(), re(tn(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Y("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (T(), re(c, {
                key: 2,
                class: z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: J(() => [
                  (T(), re(tn(e.validateIcon)))
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
            e.$slots.header ? (T(), D("div", {
              key: 0,
              class: z(e.nsSelect.be("dropdown", "header")),
              onClick: Ze(() => {
              }, ["stop"])
            }, [
              le(e.$slots, "header")
            ], 10, ["onClick"])) : Y("v-if", !0),
            it(_(m, {
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
                e.showNewOption ? (T(), re(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : Y("v-if", !0),
                _(d, null, {
                  default: J(() => [
                    le(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Mn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (T(), D("div", {
              key: 1,
              class: z(e.nsSelect.be("dropdown", "loading"))
            }, [
              le(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (T(), D("div", {
              key: 2,
              class: z(e.nsSelect.be("dropdown", "empty"))
            }, [
              le(e.$slots, "empty", {}, () => [
                f("span", null, E(e.emptyText), 1)
              ])
            ], 2)) : Y("v-if", !0),
            e.$slots.footer ? (T(), D("div", {
              key: 3,
              class: z(e.nsSelect.be("dropdown", "footer")),
              onClick: Ze(() => {
              }, ["stop"])
            }, [
              le(e.$slots, "footer")
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
var zk = /* @__PURE__ */ Ve(Nk, [["render", Dk], ["__file", "select.vue"]]);
const Fk = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = tt("select"), n = M(null), o = xt(), r = M([]);
    yn(Ld, To({
      ...Da(e)
    }));
    const s = S(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, l = (u) => {
      const d = lo(u), m = [];
      return d.forEach((g) => {
        var w, h;
        a(g) ? m.push(g.component.proxy) : (w = g.children) != null && w.length ? m.push(...l(g.children)) : (h = g.component) != null && h.subTree && m.push(...l(g.component.subTree));
      }), m;
    }, c = () => {
      r.value = l(o.subTree);
    };
    return ot(() => {
      c();
    }), G0(n, c, {
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
function Bk(e, t, n, o, r, s) {
  return it((T(), D("ul", {
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
        le(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Mn, e.visible]
  ]);
}
var Od = /* @__PURE__ */ Ve(Fk, [["render", Bk], ["__file", "option-group.vue"]]);
const $d = _n(zk, {
  Option: vi,
  OptionGroup: Od
}), Rd = Wu(vi);
Wu(Od);
const Pd = ["success", "info", "warning", "error"], St = Zu({
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
}), jk = Ne({
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
    type: Co,
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
    values: Pd,
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
}), Vk = {
  destroy: () => !0
}, gn = Wf([]), Hk = (e) => {
  const t = gn.findIndex((r) => r.id === e), n = gn[t];
  let o;
  return t > 0 && (o = gn[t - 1]), { current: n, prev: o };
}, Wk = (e) => {
  const { prev: t } = Hk(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Uk = (e, t) => gn.findIndex((o) => o.id === e) > 0 ? 16 : t, Gk = oe({
  name: "ElMessage"
}), Kk = /* @__PURE__ */ oe({
  ...Gk,
  props: jk,
  emits: Vk,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Hb, { ns: r, zIndex: s } = Bu("message"), { currentZIndex: a, nextZIndex: l } = s, c = M(), u = M(!1), d = M(0);
    let m;
    const g = S(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = S(() => {
      const R = n.type;
      return { [r.bm("icon", R)]: R && bs[R] };
    }), h = S(() => n.icon || bs[n.type] || ""), b = S(() => Wk(n.id)), C = S(() => Uk(n.id, n.offset) + b.value), k = S(() => d.value + C.value), P = S(() => ({
      top: `${C.value}px`,
      zIndex: a.value
    }));
    function j() {
      n.duration !== 0 && ({ stop: m } = hs(() => {
        L();
      }, n.duration));
    }
    function I() {
      m?.();
    }
    function L() {
      u.value = !1;
    }
    function O({ code: R }) {
      R === Rn.esc && L();
    }
    return ot(() => {
      j(), l(), u.value = !0;
    }), pe(() => n.repeatNum, () => {
      I(), j();
    }), bn(document, "keydown", O), Ln(c, () => {
      d.value = c.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: k,
      close: L
    }), (R, q) => (T(), re(Io, {
      name: i(r).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (B) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: J(() => [
        it(f("div", {
          id: R.id,
          ref_key: "messageRef",
          ref: c,
          class: z([
            i(r).b(),
            { [i(r).m(R.type)]: R.type },
            i(r).is("center", R.center),
            i(r).is("closable", R.showClose),
            i(r).is("plain", R.plain),
            R.customClass
          ]),
          style: mt(i(P)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: j
        }, [
          R.repeatNum > 1 ? (T(), re(i(Hw), {
            key: 0,
            value: R.repeatNum,
            type: i(g),
            class: z(i(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          i(h) ? (T(), re(i(Nt), {
            key: 1,
            class: z([i(r).e("icon"), i(w)])
          }, {
            default: J(() => [
              (T(), re(tn(i(h))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          le(R.$slots, "default", {}, () => [
            R.dangerouslyUseHTMLString ? (T(), D(at, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              f("p", {
                class: z(i(r).e("content")),
                innerHTML: R.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (T(), D("p", {
              key: 0,
              class: z(i(r).e("content"))
            }, E(R.message), 3))
          ]),
          R.showClose ? (T(), re(i(Nt), {
            key: 2,
            class: z(i(r).e("closeBtn")),
            onClick: Ze(L, ["stop"])
          }, {
            default: J(() => [
              _(i(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 46, ["id"]), [
          [Mn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var qk = /* @__PURE__ */ Ve(Kk, [["__file", "message.vue"]]);
let Zk = 1;
const Md = (e) => {
  const t = !e || Xt(e) || Or(e) || nt(e) ? { message: e } : e, n = {
    ...St,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Xt(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    vn(o) || (o = document.body), n.appendTo = o;
  }
  return Pr(pn.grouping) && !n.grouping && (n.grouping = pn.grouping), Me(pn.duration) && n.duration === 3e3 && (n.duration = pn.duration), Me(pn.offset) && n.offset === 16 && (n.offset = pn.offset), Pr(pn.showClose) && !n.showClose && (n.showClose = pn.showClose), n;
}, Yk = (e) => {
  const t = gn.indexOf(e);
  if (t === -1)
    return;
  gn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Xk = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Zk++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), Yk(d);
    },
    onDestroy: () => {
      us(null, s);
    }
  }, l = _(qk, a, nt(a.message) || Or(a.message) ? {
    default: nt(a.message) ? a.message : () => a.message
  } : null);
  l.appContext = n || nr._context, us(l, s), e.appendChild(s.firstElementChild);
  const c = l.component, d = {
    id: o,
    vnode: l,
    vm: c,
    handler: {
      close: () => {
        c.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return d;
}, nr = (e = {}, t) => {
  if (!Ue)
    return { close: () => {
    } };
  const n = Md(e);
  if (n.grouping && gn.length) {
    const r = gn.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Me(pn.max) && gn.length >= pn.max)
    return { close: () => {
    } };
  const o = Xk(n, t);
  return gn.push(o), o.handler;
};
Pd.forEach((e) => {
  nr[e] = (t = {}, n) => {
    const o = Md(t);
    return nr({ ...o, type: e }, n);
  };
});
function Qk(e) {
  for (const t of gn)
    (!e || e === t.props.type) && t.handler.close();
}
nr.closeAll = Qk;
nr._context = null;
const Jk = Hu(nr, "$message"), Nd = [
  "success",
  "info",
  "warning",
  "error"
], e_ = Ne({
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
    type: Co
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
    values: [...Nd, ""],
    default: ""
  },
  zIndex: Number
}), t_ = {
  destroy: () => !0
}, n_ = oe({
  name: "ElNotification"
}), o_ = /* @__PURE__ */ oe({
  ...n_,
  props: e_,
  emits: t_,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = Bu("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: l } = Gu, c = M(!1);
    let u;
    const d = S(() => {
      const j = n.type;
      return j && bs[n.type] ? o.m(j) : "";
    }), m = S(() => n.type && bs[n.type] || n.icon), g = S(() => n.position.endsWith("right") ? "right" : "left"), w = S(() => n.position.startsWith("top") ? "top" : "bottom"), h = S(() => {
      var j;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (j = n.zIndex) != null ? j : a.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: u } = hs(() => {
        c.value && k();
      }, n.duration));
    }
    function C() {
      u?.();
    }
    function k() {
      c.value = !1;
    }
    function P({ code: j }) {
      j === Rn.delete || j === Rn.backspace ? C() : j === Rn.esc ? c.value && k() : b();
    }
    return ot(() => {
      b(), s(), c.value = !0;
    }), bn(document, "keydown", P), t({
      visible: c,
      close: k
    }), (j, I) => (T(), re(Io, {
      name: i(o).b("fade"),
      onBeforeLeave: j.onClose,
      onAfterLeave: (L) => j.$emit("destroy"),
      persisted: ""
    }, {
      default: J(() => [
        it(f("div", {
          id: j.id,
          class: z([i(o).b(), j.customClass, i(g)]),
          style: mt(i(h)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: b,
          onClick: j.onClick
        }, [
          i(m) ? (T(), re(i(Nt), {
            key: 0,
            class: z([i(o).e("icon"), i(d)])
          }, {
            default: J(() => [
              (T(), re(tn(i(m))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          f("div", {
            class: z(i(o).e("group"))
          }, [
            f("h2", {
              class: z(i(o).e("title")),
              textContent: E(j.title)
            }, null, 10, ["textContent"]),
            it(f("div", {
              class: z(i(o).e("content")),
              style: mt(j.title ? void 0 : { margin: 0 })
            }, [
              le(j.$slots, "default", {}, () => [
                j.dangerouslyUseHTMLString ? (T(), D(at, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  f("p", { innerHTML: j.message }, null, 8, ["innerHTML"])
                ], 2112)) : (T(), D("p", { key: 0 }, E(j.message), 1))
              ])
            ], 6), [
              [Mn, j.message]
            ]),
            j.showClose ? (T(), re(i(Nt), {
              key: 0,
              class: z(i(o).e("closeBtn")),
              onClick: Ze(k, ["stop"])
            }, {
              default: J(() => [
                _(i(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Y("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Mn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var r_ = /* @__PURE__ */ Ve(o_, [["__file", "notification.vue"]]);
const ks = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ta = 16;
let s_ = 1;
const or = function(e = {}, t) {
  if (!Ue)
    return { close: () => {
    } };
  (Xt(e) || Or(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  ks[n].forEach(({ vm: d }) => {
    var m;
    o += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + Ta;
  }), o += Ta;
  const r = `notification_${s_++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      a_(r, n, s);
    }
  };
  let l = document.body;
  vn(e.appendTo) ? l = e.appendTo : Xt(e.appendTo) && (l = document.querySelector(e.appendTo)), vn(l) || (l = document.body);
  const c = document.createElement("div"), u = _(r_, a, nt(a.message) ? a.message : Or(a.message) ? () => a.message : null);
  return u.appContext = $n(t) ? or._context : t, u.props.onDestroy = () => {
    us(null, c);
  }, us(u, c), ks[n].push({ vm: u }), l.appendChild(c.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Nd.forEach((e) => {
  or[e] = (t = {}, n) => ((Xt(t) || Or(t)) && (t = {
    message: t
  }), or({ ...t, type: e }, n));
});
function a_(e, t, n) {
  const o = ks[t], r = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: s } = o[r];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, l = t.split("-")[0];
  o.splice(r, 1);
  const c = o.length;
  if (!(c < 1))
    for (let u = r; u < c; u++) {
      const { el: d, component: m } = o[u].vm, g = Number.parseInt(d.style[l], 10) - a - Ta;
      m.props.offset = g;
    }
}
function i_() {
  for (const e of Object.values(ks))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
or.closeAll = i_;
or._context = null;
const l_ = Hu(or, "$notify"), c_ = ["disabled"], u_ = {
  key: 0,
  class: "custom-button__loading"
}, d_ = /* @__PURE__ */ oe({
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
    return (n, o) => (T(), D("button", {
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
      e.loading ? (T(), D("div", u_, o[1] || (o[1] = [
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
      le(n.$slots, "default", {}, void 0, !0)
    ], 10, c_));
  }
}), $o = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Jt = /* @__PURE__ */ $o(d_, [["__scopeId", "data-v-8539c893"]]), f_ = /* @__PURE__ */ oe({
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
    return (s, a) => (T(), D(
      "div",
      {
        class: z(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: r
      },
      [
        e.activeText || e.inactiveText ? (T(), D(
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
}), mr = /* @__PURE__ */ $o(f_, [["__scopeId", "data-v-09573d1e"]]), p_ = { class: "dialog-footer-default" }, m_ = { class: "footer-left" }, h_ = { class: "footer-right" }, g_ = /* @__PURE__ */ oe({
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
    const o = e, r = n, s = M(o.modelValue), a = S(
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
    const l = () => {
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
      const g = yk;
      return T(), re(g, {
        modelValue: i(s),
        "onUpdate:modelValue": m[0] || (m[0] = (w) => en(s) ? s.value = w : null),
        title: d.title,
        width: d.width,
        "close-on-click-modal": d.closeOnClickModal,
        draggable: d.draggable,
        center: d.center,
        "show-close": d.showClose,
        "close-on-press-escape": d.closeOnPressEscape,
        "append-to-body": d.appendToBody,
        "align-center": d.alignCenter,
        "custom-class": i(a),
        onClose: l
      }, Na({
        default: J(() => [
          le(d.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        d.$slots.header ? {
          name: "header",
          fn: J(() => [
            le(d.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        d.$slots.footer || d.showDefaultFooter ? {
          name: "footer",
          fn: J(() => [
            le(d.$slots, "footer", {}, () => [
              f("div", p_, [
                f("div", m_, [
                  le(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                f("div", h_, [
                  _(Jt, { onClick: u }, {
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
                  _(Jt, {
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
}), Dd = /* @__PURE__ */ $o(g_, [["__scopeId", "data-v-71ae260f"]]), v_ = { class: "confirm-content" }, b_ = { class: "confirm-footer" }, y_ = /* @__PURE__ */ oe({
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
    const o = e, r = n, s = M(o.modelValue), a = S(() => {
      const d = ["confirm-dialog"];
      return o.type === "warning" ? d.push("warning-dialog") : o.type === "danger" && d.push("delete-dialog"), d.join(" ");
    }), l = S(() => o.type === "danger" ? "danger" : o.type === "warning" ? "warning" : "primary");
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
    }), (d, m) => (T(), re(Dd, {
      modelValue: i(s),
      "onUpdate:modelValue": m[0] || (m[0] = (g) => en(s) ? s.value = g : null),
      title: d.title,
      width: d.width,
      center: d.center,
      "show-close": d.showClose,
      "custom-class": i(a)
    }, {
      footer: J(() => [
        f("div", b_, [
          d.showCancelButton ? (T(), re(Jt, {
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
          _(Jt, {
            type: i(l),
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
        f("div", v_, [
          le(d.$slots, "default", {}, () => [
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
}), w_ = /* @__PURE__ */ $o(y_, [["__scopeId", "data-v-a3c6b31a"]]), Ee = {
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
    o === "center" ? Jk({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : l_({
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
}, k_ = "snippets-code:developer-mode", zd = "snippets-code:frontend-diagnostics", __ = 240, hr = "[REDACTED]", ls = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${hr}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${hr}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  hr
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${hr}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${hr}`
), Fd = (e) => {
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
}, A_ = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, T_ = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(zd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, bi = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(k_) === "true";
  } catch {
    return !1;
  }
}, S_ = (e, t, n) => {
  if (!bi() || typeof localStorage > "u") return;
  const o = T_();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: A_(),
    message: ls(t),
    data: Fd(n)
  });
  try {
    localStorage.setItem(
      zd,
      JSON.stringify(o.slice(-__))
    );
  } catch {
  }
}, C_ = () => bi(), E_ = (e) => e === "error" || bi(), ts = (e, t, n) => {
  S_(e, t, n), E_(e) && Fe("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Fd(n)
  }).catch(() => {
  });
}, Et = {
  info: (e, t, ...n) => {
    ts("info", e, t);
  },
  error: (e, t) => {
    ts("error", e, t);
  },
  warn: (e, t) => {
    ts("warn", e, t);
  },
  debug: (e, t) => {
    C_() && ts("debug", e, t);
  }
}, x_ = /* @__PURE__ */ new Set([
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
]), I_ = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]), L_ = /* @__PURE__ */ new Set(["png", "jpg", "jpeg", "webp"]), O_ = /* @__PURE__ */ new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx"
]), Bd = 5, $_ = 1024 * 1024, R_ = 5 * 1024 * 1024, wc = 4e4, ra = (e) => e?.map((t) => ({ ...t })) ?? [], yi = (e) => e.split(".").pop()?.toLowerCase() ?? "", jd = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`, wi = (e) => I_.has(e.type) || L_.has(yi(e.name)), Vd = (e) => e.type.startsWith("text/") || x_.has(yi(e.name)), P_ = (e) => O_.has(yi(e.name)), M_ = async (e) => await new Promise((t, n) => {
  const o = new FileReader();
  o.onload = () => t(String(o.result ?? "")), o.onerror = () => n(o.error ?? new Error("read failed")), o.readAsDataURL(e);
}), N_ = async (e) => {
  const t = await e.text();
  return t.length <= wc ? { text: t, truncated: !1 } : {
    text: t.slice(0, wc),
    truncated: !0
  };
}, D_ = (e, t) => {
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
}, sa = 160, Hd = (e) => {
  const t = e.trim();
  if (!t) return 0;
  const n = (t.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, s = (t.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((a, l) => /^[A-Za-z0-9_]+$/.test(l) ? a + Math.max(1, Math.ceil(l.length / 4)) : a + 1, 0);
  return Math.max(1, Math.ceil(n + s));
}, aa = (e) => Math.max(0, Math.ceil(e.length / 4)), z_ = (e) => Number.isFinite(e) && e > 0 ? Math.floor(e) : void 0, F_ = (e, t) => {
  const n = Object.entries(t).filter(
    ([, o]) => o != null
  );
  return {
    ...e,
    ...Object.fromEntries(n)
  };
}, Wd = (e) => Array.isArray(e) ? e.filter((t) => t.type === "text").map((t) => t.text).join(`
`) : e, B_ = (e) => {
  const t = e.attachments?.filter(
    (s) => s.status === "parsed"
  ) ?? [], n = D_(
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
}, rr = (e) => Hd(
  e.map((t) => `${t.role}: ${Wd(t.content)}`).join(`
`)
), kc = (e, t, n) => {
  const o = Math.max(240, t * 4);
  return e.length <= o ? e : `${n}

${e.slice(-o)}`;
}, gr = (e) => String(e).padStart(2, "0"), j_ = (e = /* @__PURE__ */ new Date()) => {
  const t = -e.getTimezoneOffset() / 60, n = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${t >= 0 ? "+" : ""}${t}`, o = [
    e.getFullYear(),
    gr(e.getMonth() + 1),
    gr(e.getDate())
  ].join("-"), r = [
    gr(e.getHours()),
    gr(e.getMinutes()),
    gr(e.getSeconds())
  ].join(":"), s = e.toLocaleDateString("zh-CN", { weekday: "long" });
  return { isoDate: o, localTime: r, timeZone: n, weekday: s };
}, V_ = () => {
  const { isoDate: e, localTime: t, timeZone: n, weekday: o } = j_();
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
}, H_ = (e) => {
  const t = e.filter((o) => o.role === "system").map((o) => Wd(o.content).trim()).filter(Boolean), n = e.filter(
    (o) => o.role !== "system"
  );
  return t.length ? [
    { role: "system", content: t.join(`

---

`) },
    ...n
  ] : n;
}, W_ = (e, t, n) => {
  if (e.role !== "assistant" || typeof e.content != "string" || t < sa)
    return null;
  let o = t, r = {
    ...e,
    content: kc(
      e.content,
      o,
      n
    )
  };
  for (; rr([r]) > t && o > sa; )
    o = Math.max(
      sa,
      Math.floor(o * 0.7)
    ), r = {
      ...e,
      content: kc(
        e.content,
        o,
        n
      )
    };
  return rr([r]) <= t ? r : null;
}, U_ = (e, t, n) => {
  const o = [];
  let r = 0;
  for (let s = e.length - 1; s >= 0; s -= 1) {
    const a = e[s], l = rr([a]);
    if (r + l <= t || o.length === 0) {
      o.unshift(a), r += l;
      continue;
    }
    const c = t - r, u = W_(
      a,
      c,
      n
    );
    u && (o.unshift(u), r += rr([u]));
  }
  return o;
}, ko = (e) => `${Date.now()}-${e}-${Math.random().toString(16).slice(2, 8)}`, sr = (e) => e.type === "root", Bs = (e) => new Map(e.map((t) => [t.id, t])), Vr = (e) => e.find(sr), Hr = (e, t) => {
  if (!t) return null;
  const n = Bs(e);
  let o = n.get(t);
  const r = /* @__PURE__ */ new Set();
  for (; o?.childIds?.length && !r.has(o.id); )
    r.add(o.id), o = n.get(o.childIds[o.childIds.length - 1]);
  return o?.id ?? null;
}, G_ = (e, t) => {
  if (e.some(sr)) {
    const s = e.map((l) => ({
      ...l,
      type: l.type ?? "text",
      parentId: l.parentId ?? null,
      childIds: l.childIds ?? []
    })), a = Vr(s);
    return {
      messages: s,
      currentNodeId: Hr(s, s.at(-1)?.id) ?? a?.id ?? null
    };
  }
  const n = {
    id: ko("root"),
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
}, Ud = (e, t) => {
  if (!t) return [];
  const n = Bs(e), o = [], r = /* @__PURE__ */ new Set();
  let s = n.get(t);
  for (; s && !r.has(s.id); )
    r.add(s.id), o.unshift(s), s = s.parentId ? n.get(s.parentId) : void 0;
  return o;
}, cs = (e) => {
  if (!e) return [];
  const t = e.currentNodeId ?? Hr(e.messages, Vr(e.messages)?.id);
  return Ud(e.messages, t).filter(
    (n) => !sr(n)
  );
}, K_ = (e) => {
  if (!e) return [];
  const t = Bs(e.messages), n = (o) => Hr(e.messages, o) ?? o;
  return cs(e).map((o) => {
    const s = (o.parentId ? t.get(o.parentId) : void 0)?.childIds ?? [o.id];
    return {
      message: o,
      siblingLeafNodeIds: s.map(n),
      siblingCurrentIndex: Math.max(0, s.indexOf(o.id))
    };
  });
}, ia = (e, t) => {
  const n = Vr(e.messages), o = t.parentId ?? e.currentNodeId ?? n?.id ?? null, r = {
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
}, q_ = (e, t) => {
  const n = Bs(e), o = /* @__PURE__ */ new Set(), r = (s) => {
    if (!o.has(s)) {
      o.add(s);
      for (const a of n.get(s)?.childIds ?? []) r(a);
    }
  };
  return r(t), o;
}, Z_ = (e, t, n) => {
  const o = e.find((l) => l.id === n);
  if (!o || sr(o)) return null;
  const r = q_(e, n), s = e.filter((l) => !r.has(l.id)).map((l) => ({
    ...l,
    childIds: (l.childIds ?? []).filter((c) => !r.has(c))
  })), a = t && r.has(t) ? Hr(s, o.parentId) ?? Vr(s)?.id ?? null : t;
  return {
    messages: s,
    currentNodeId: a,
    deletedIds: r
  };
};
async function Sa(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Fe("plugin:dialog|open", { options: e });
}
const Y_ = [
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
], js = (e, t) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: t,
  mime: e.type || "application/octet-stream",
  size: e.size,
  status: "pending"
}), X_ = async (e, t) => {
  const n = js(e, "image");
  if (e.size > R_)
    return {
      ...n,
      status: "error",
      error: t("localAi.imageTooLarge")
    };
  try {
    return {
      ...n,
      status: "parsed",
      dataUrl: await M_(e)
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, Q_ = async (e, t) => {
  const n = js(e, "text");
  if (e.size > $_)
    return {
      ...n,
      status: "error",
      error: t("localAi.textFileTooLarge")
    };
  try {
    const o = await N_(e);
    return {
      ...n,
      status: "parsed",
      text: o.text,
      error: o.truncated ? "truncated" : void 0
    };
  } catch (o) {
    return { ...n, status: "error", error: String(o) };
  }
}, J_ = async (e, t) => wi(e) ? X_(e, t) : Vd(e) ? Q_(e, t) : {
  ...js(e, "unsupported"),
  status: "error",
  error: P_(e) ? t("localAi.unsupportedDocument") : t("localAi.unsupportedAttachment")
}, _c = async (e, t, n) => {
  const o = Array.from(t), r = Bd - e.value.length;
  if (r <= 0) {
    Ee.msg(n("localAi.attachmentLimit"), "warning");
    return;
  }
  o.length > r && Ee.msg(n("localAi.attachmentLimit"), "warning");
  const s = o.slice(0, r), a = s.map(
    (l) => js(
      l,
      wi(l) ? "image" : Vd(l) ? "text" : "unsupported"
    )
  );
  e.value.push(...a), await Promise.all(
    s.map(async (l, c) => {
      const u = await J_(l, n), d = e.value.findIndex(
        (m) => m.id === a[c].id
      );
      d >= 0 && (e.value[d] = u);
    })
  );
}, e2 = (e, t) => {
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
}, t2 = (e) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: e.name,
  type: e.kind,
  mime: e.mime,
  size: e.size,
  status: e.error ? "error" : "parsed",
  text: e.text ?? void 0,
  dataUrl: e.dataUrl ?? void 0,
  error: void 0
}), n2 = () => {
  const { t: e } = Dr(), t = M([]), n = M(!1);
  return {
    attachments: t,
    attachmentPicking: n,
    pickAttachmentFiles: async () => {
      const o = Bd - t.value.length;
      if (o <= 0 || n.value) {
        o <= 0 && Ee.msg(e("localAi.attachmentLimit"), "warning");
        return;
      }
      n.value = !0;
      try {
        const r = await Sa({
          title: e("localAi.addAttachment"),
          directory: !1,
          multiple: !0,
          filters: [
            {
              name: e("localAi.attachment"),
              extensions: Y_
            }
          ]
        });
        if (!r) return;
        const s = (Array.isArray(r) ? r : [r]).slice(
          0,
          o
        );
        (Array.isArray(r) ? r.length : 1) > o && Ee.msg(e("localAi.attachmentLimit"), "warning");
        const a = await yp(s);
        t.value.push(
          ...a.map((l) => ({
            ...t2(l),
            error: e2(l, e)
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
      o.dataTransfer?.files.length && await _c(t, o.dataTransfer.files, e);
    },
    handleComposerPaste: async (o) => {
      const s = Array.from(o.clipboardData?.files ?? []).filter(wi);
      s.length && (o.preventDefault(), await _c(t, s, e));
    },
    removeAttachment: (o) => {
      t.value = t.value.filter(
        (r) => r.id !== o
      );
    },
    attachmentStatusText: (o) => o.status === "pending" ? e("localAi.attachmentPending") : o.status === "error" ? o.error ?? "" : o.error === "truncated" ? e("localAi.attachmentTruncated") : e("localAi.attachmentParsed")
  };
};
function ki() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Ro = ki();
function Gd(e) {
  Ro = e;
}
var Ir = { exec: () => null };
function Se(e, t = "") {
  let n = typeof e == "string" ? e : e.source, o = { replace: (r, s) => {
    let a = typeof s == "string" ? s : s.source;
    return a = a.replace(Dt.caret, "$1"), n = n.replace(r, a), o;
  }, getRegex: () => new RegExp(n, t) };
  return o;
}
var o2 = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Dt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, r2 = /^(?:[ \t]*(?:\n|$))+/, s2 = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, a2 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Wr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, i2 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, _i = /(?:[*+-]|\d{1,9}[.)])/, Kd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, qd = Se(Kd).replace(/bull/g, _i).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), l2 = Se(Kd).replace(/bull/g, _i).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ai = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, c2 = /^[^\n]+/, Ti = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, u2 = Se(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ti).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), d2 = Se(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, _i).getRegex(), Vs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Si = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, f2 = Se("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Si).replace("tag", Vs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Zd = Se(Ai).replace("hr", Wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Vs).getRegex(), p2 = Se(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Zd).getRegex(), Ci = { blockquote: p2, code: s2, def: u2, fences: a2, heading: i2, hr: Wr, html: f2, lheading: qd, list: d2, newline: r2, paragraph: Zd, table: Ir, text: c2 }, Ac = Se("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Vs).getRegex(), m2 = { ...Ci, lheading: l2, table: Ac, paragraph: Se(Ai).replace("hr", Wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ac).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Vs).getRegex() }, h2 = { ...Ci, html: Se(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Si).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ir, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Se(Ai).replace("hr", Wr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", qd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, g2 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, v2 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Yd = /^( {2,}|\\)\n(?!\s*$)/, b2 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Hs = /[\p{P}\p{S}]/u, Ei = /[\s\p{P}\p{S}]/u, Xd = /[^\s\p{P}\p{S}]/u, y2 = Se(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ei).getRegex(), Qd = /(?!~)[\p{P}\p{S}]/u, w2 = /(?!~)[\s\p{P}\p{S}]/u, k2 = /(?:[^\s\p{P}\p{S}]|~)/u, _2 = Se(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", o2 ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Jd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, A2 = Se(Jd, "u").replace(/punct/g, Hs).getRegex(), T2 = Se(Jd, "u").replace(/punct/g, Qd).getRegex(), ef = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", S2 = Se(ef, "gu").replace(/notPunctSpace/g, Xd).replace(/punctSpace/g, Ei).replace(/punct/g, Hs).getRegex(), C2 = Se(ef, "gu").replace(/notPunctSpace/g, k2).replace(/punctSpace/g, w2).replace(/punct/g, Qd).getRegex(), E2 = Se("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Xd).replace(/punctSpace/g, Ei).replace(/punct/g, Hs).getRegex(), x2 = Se(/\\(punct)/, "gu").replace(/punct/g, Hs).getRegex(), I2 = Se(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), L2 = Se(Si).replace("(?:-->|$)", "-->").getRegex(), O2 = Se("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", L2).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), _s = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, $2 = Se(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _s).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), tf = Se(/^!?\[(label)\]\[(ref)\]/).replace("label", _s).replace("ref", Ti).getRegex(), nf = Se(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ti).getRegex(), R2 = Se("reflink|nolink(?!\\()", "g").replace("reflink", tf).replace("nolink", nf).getRegex(), Tc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, xi = { _backpedal: Ir, anyPunctuation: x2, autolink: I2, blockSkip: _2, br: Yd, code: v2, del: Ir, emStrongLDelim: A2, emStrongRDelimAst: S2, emStrongRDelimUnd: E2, escape: g2, link: $2, nolink: nf, punctuation: y2, reflink: tf, reflinkSearch: R2, tag: O2, text: b2, url: Ir }, P2 = { ...xi, link: Se(/^!?\[(label)\]\((.*?)\)/).replace("label", _s).getRegex(), reflink: Se(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _s).getRegex() }, Ca = { ...xi, emStrongRDelimAst: C2, emStrongLDelim: T2, url: Se(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Tc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Se(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Tc).getRegex() }, M2 = { ...Ca, br: Se(Yd).replace("{2,}", "*").getRegex(), text: Se(Ca.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ns = { normal: Ci, gfm: m2, pedantic: h2 }, vr = { normal: xi, gfm: Ca, breaks: M2, pedantic: P2 }, N2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Sc = (e) => N2[e];
function Gn(e, t) {
  if (t) {
    if (Dt.escapeTest.test(e)) return e.replace(Dt.escapeReplace, Sc);
  } else if (Dt.escapeTestNoEncode.test(e)) return e.replace(Dt.escapeReplaceNoEncode, Sc);
  return e;
}
function Cc(e) {
  try {
    e = encodeURI(e).replace(Dt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Ec(e, t) {
  let n = e.replace(Dt.findPipe, (s, a, l) => {
    let c = !1, u = a;
    for (; --u >= 0 && l[u] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), o = n.split(Dt.splitPipe), r = 0;
  if (o[0].trim() || o.shift(), o.length > 0 && !o.at(-1)?.trim() && o.pop(), t) if (o.length > t) o.splice(t);
  else for (; o.length < t; ) o.push("");
  for (; r < o.length; r++) o[r] = o[r].trim().replace(Dt.slashPipe, "|");
  return o;
}
function br(e, t, n) {
  let o = e.length;
  if (o === 0) return "";
  let r = 0;
  for (; r < o && e.charAt(o - r - 1) === t; )
    r++;
  return e.slice(0, o - r);
}
function D2(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let o = 0; o < e.length; o++) if (e[o] === "\\") o++;
  else if (e[o] === t[0]) n++;
  else if (e[o] === t[1] && (n--, n < 0)) return o;
  return n > 0 ? -2 : -1;
}
function xc(e, t, n, o, r) {
  let s = t.href, a = t.title || null, l = e[1].replace(r.other.outputLinkReplace, "$1");
  o.state.inLink = !0;
  let c = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: s, title: a, text: l, tokens: o.inlineTokens(l) };
  return o.state.inLink = !1, c;
}
function z2(e, t, n) {
  let o = e.match(n.other.indentCodeCompensation);
  if (o === null) return t;
  let r = o[1];
  return t.split(`
`).map((s) => {
    let a = s.match(n.other.beginningSpace);
    if (a === null) return s;
    let [l] = a;
    return l.length >= r.length ? s.slice(r.length) : s;
  }).join(`
`);
}
var As = class {
  constructor(e) {
    Ie(this, "options");
    Ie(this, "rules");
    Ie(this, "lexer");
    this.options = e || Ro;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : br(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], o = z2(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: o };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let o = br(n, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (n = o.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: br(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = br(t[0], `
`).split(`
`), o = "", r = "", s = [];
      for (; n.length > 0; ) {
        let a = !1, l = [], c;
        for (c = 0; c < n.length; c++) if (this.rules.other.blockquoteStart.test(n[c])) l.push(n[c]), a = !0;
        else if (!a) l.push(n[c]);
        else break;
        n = n.slice(c);
        let u = l.join(`
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
          let b = this.rules.other.nextBulletRegex(h), C = this.rules.other.hrRegex(h), k = this.rules.other.fencesBeginRegex(h), P = this.rules.other.headingBeginRegex(h), j = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let I = e.split(`
`, 1)[0], L;
            if (g = I, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), L = g) : L = g.replace(this.rules.other.tabCharGlobal, "    "), k.test(g) || P.test(g) || j.test(g) || b.test(g) || C.test(g)) break;
            if (L.search(this.rules.other.nonSpaceChar) >= h || !g.trim()) d += `
` + L.slice(h);
            else {
              if (w || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || k.test(m) || P.test(m) || C.test(m)) break;
              d += `
` + g;
            }
            !w && !g.trim() && (w = !0), u += I + `
`, e = e.substring(I.length + 1), m = L.slice(h);
          }
        }
        r.loose || (a ? r.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (a = !0)), r.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: !1, text: d, tokens: [] }), r.raw += u;
      }
      let l = r.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
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
    let n = Ec(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let a of o) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < n.length; a++) s.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: !0, align: s.align[a] });
      for (let a of r) s.rows.push(Ec(a, s.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: s.align[c] })));
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
        let s = br(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = D2(t[2], "()");
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
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), xc(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return xc(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!o || o[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let r = [...o[0]].length - 1, s, a, l = r, c = 0, u = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + r); (o = u.exec(t)) != null; ) {
        if (s = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !s) continue;
        if (a = [...s].length, o[3] || o[4]) {
          l += a;
          continue;
        } else if ((o[5] || o[6]) && r % 3 && !((r + a) % 3)) {
          c += a;
          continue;
        }
        if (l -= a, l > 0) continue;
        a = Math.min(a, a + l + c);
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
}, mn = class Ea {
  constructor(t) {
    Ie(this, "tokens");
    Ie(this, "options");
    Ie(this, "state");
    Ie(this, "inlineQueue");
    Ie(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ro, this.options.tokenizer = this.options.tokenizer || new As(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Dt, block: ns.normal, inline: vr.normal };
    this.options.pedantic ? (n.block = ns.pedantic, n.inline = vr.pedantic) : this.options.gfm && (n.block = ns.gfm, this.options.breaks ? n.inline = vr.breaks : n.inline = vr.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: ns, inline: vr };
  }
  static lex(t, n) {
    return new Ea(n).lex(t);
  }
  static lexInline(t, n) {
    return new Ea(n).inlineTokens(t);
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
        let a = 1 / 0, l = t.slice(1), c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
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
    let a = !1, l = "";
    for (; t; ) {
      a || (l = ""), a = !1;
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
      if (c = this.tokenizer.emStrong(t, o, l)) {
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
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (l = c.raw.slice(-1)), a = !0;
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
}, Ts = class {
  constructor(e) {
    Ie(this, "options");
    Ie(this, "parser");
    this.options = e || Ro;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let o = (t || "").match(Dt.notSpaceStart)?.[0], r = e.replace(Dt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Gn(o) + '">' + (n ? r : Gn(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : Gn(r, !0)) + `</code></pre>
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
      let l = e.items[a];
      o += this.listitem(l);
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
    return `<code>${Gn(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let o = this.parser.parseInline(n), r = Cc(e);
    if (r === null) return o;
    e = r;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + Gn(t) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let r = Cc(e);
    if (r === null) return Gn(n);
    e = r;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${Gn(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Gn(e.text);
  }
}, Ii = class {
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
}, hn = class xa {
  constructor(t) {
    Ie(this, "options");
    Ie(this, "renderer");
    Ie(this, "textRenderer");
    this.options = t || Ro, this.options.renderer = this.options.renderer || new Ts(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ii();
  }
  static parse(t, n) {
    return new xa(n).parse(t);
  }
  static parseInline(t, n) {
    return new xa(n).parseInline(t);
  }
  parse(t) {
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let r = t[o];
      if (this.options.extensions?.renderers?.[r.type]) {
        let a = r, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          n += l || "";
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
        let l = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          o += l || "";
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
          let l = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return o;
  }
}, rs, kr = (rs = class {
  constructor(e) {
    Ie(this, "options");
    Ie(this, "block");
    this.options = e || Ro;
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
    return this.block ? mn.lex : mn.lexInline;
  }
  provideParser() {
    return this.block ? hn.parse : hn.parseInline;
  }
}, Ie(rs, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ie(rs, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), rs), F2 = class {
  constructor(...e) {
    Ie(this, "defaults", ki());
    Ie(this, "options", this.setOptions);
    Ie(this, "parse", this.parseMarkdown(!0));
    Ie(this, "parseInline", this.parseMarkdown(!1));
    Ie(this, "Parser", hn);
    Ie(this, "Renderer", Ts);
    Ie(this, "TextRenderer", Ii);
    Ie(this, "Lexer", mn);
    Ie(this, "Tokenizer", As);
    Ie(this, "Hooks", kr);
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
            let l = r.renderer.apply(this, a);
            return l === !1 && (l = s.apply(this, a)), l;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[r.level];
          s ? s.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), o.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new Ts(this.defaults);
        for (let s in n.renderer) {
          if (!(s in r)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, l = n.renderer[a], c = r[a];
          r[a] = (...u) => {
            let d = l.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d || "";
          };
        }
        o.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new As(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in r)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, l = n.tokenizer[a], c = r[a];
          r[a] = (...u) => {
            let d = l.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d;
          };
        }
        o.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new kr();
        for (let s in n.hooks) {
          if (!(s in r)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, l = n.hooks[a], c = r[a];
          kr.passThroughHooks.has(s) ? r[a] = (u) => {
            if (this.defaults.async && kr.passThroughHooksRespectAsync.has(s)) return (async () => {
              let m = await l.call(r, u);
              return c.call(r, m);
            })();
            let d = l.call(r, u);
            return c.call(r, d);
          } : r[a] = (...u) => {
            if (this.defaults.async) return (async () => {
              let m = await l.apply(r, u);
              return m === !1 && (m = await c.apply(r, u)), m;
            })();
            let d = l.apply(r, u);
            return d === !1 && (d = c.apply(r, u)), d;
          };
        }
        o.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, s = n.walkTokens;
        o.walkTokens = function(a) {
          let l = [];
          return l.push(s.call(this, a)), r && (l = l.concat(r.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return mn.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return hn.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (t, n) => {
      let o = { ...n }, r = { ...this.defaults, ...o }, s = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (r.hooks && (r.hooks.options = r, r.hooks.block = e), r.async) return (async () => {
        let a = r.hooks ? await r.hooks.preprocess(t) : t, l = await (r.hooks ? await r.hooks.provideLexer() : e ? mn.lex : mn.lexInline)(a, r), c = r.hooks ? await r.hooks.processAllTokens(l) : l;
        r.walkTokens && await Promise.all(this.walkTokens(c, r.walkTokens));
        let u = await (r.hooks ? await r.hooks.provideParser() : e ? hn.parse : hn.parseInline)(c, r);
        return r.hooks ? await r.hooks.postprocess(u) : u;
      })().catch(s);
      try {
        r.hooks && (t = r.hooks.preprocess(t));
        let a = (r.hooks ? r.hooks.provideLexer() : e ? mn.lex : mn.lexInline)(t, r);
        r.hooks && (a = r.hooks.processAllTokens(a)), r.walkTokens && this.walkTokens(a, r.walkTokens);
        let l = (r.hooks ? r.hooks.provideParser() : e ? hn.parse : hn.parseInline)(a, r);
        return r.hooks && (l = r.hooks.postprocess(l)), l;
      } catch (a) {
        return s(a);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let o = "<p>An error occurred:</p><pre>" + Gn(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(o) : o;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
}, xo = new F2();
function Re(e, t) {
  return xo.parse(e, t);
}
Re.options = Re.setOptions = function(e) {
  return xo.setOptions(e), Re.defaults = xo.defaults, Gd(Re.defaults), Re;
};
Re.getDefaults = ki;
Re.defaults = Ro;
Re.use = function(...e) {
  return xo.use(...e), Re.defaults = xo.defaults, Gd(Re.defaults), Re;
};
Re.walkTokens = function(e, t) {
  return xo.walkTokens(e, t);
};
Re.parseInline = xo.parseInline;
Re.Parser = hn;
Re.parser = hn.parse;
Re.Renderer = Ts;
Re.TextRenderer = Ii;
Re.Lexer = mn;
Re.lexer = mn.lex;
Re.Tokenizer = As;
Re.Hooks = kr;
Re.parse = Re;
Re.options;
Re.setOptions;
Re.use;
Re.walkTokens;
Re.parseInline;
hn.parse;
mn.lex;
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Ic(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function B2(e) {
  if (Array.isArray(e)) return e;
}
function j2(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, s, a, l = [], c = !0, u = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (o = s.call(n)).done) && (l.push(o.value), l.length !== t); c = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!c && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw r;
      }
    }
    return l;
  }
}
function V2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H2(e, t) {
  return B2(e) || j2(e, t) || W2(e, t) || V2();
}
function W2(e, t) {
  if (e) {
    if (typeof e == "string") return Ic(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ic(e, t) : void 0;
  }
}
const of = Object.entries, Lc = Object.setPrototypeOf, U2 = Object.isFrozen, G2 = Object.getPrototypeOf, K2 = Object.getOwnPropertyDescriptor;
let zt = Object.freeze, an = Object.seal, Ko = Object.create, rf = typeof Reflect < "u" && Reflect, Ia = rf.apply, La = rf.construct;
zt || (zt = function(t) {
  return t;
});
an || (an = function(t) {
  return t;
});
Ia || (Ia = function(t, n) {
  for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
    r[s - 2] = arguments[s];
  return t.apply(n, r);
});
La || (La = function(t) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    o[r - 1] = arguments[r];
  return new t(...o);
});
const Ho = lt(Array.prototype.forEach), q2 = lt(Array.prototype.lastIndexOf), Oc = lt(Array.prototype.pop), Wo = lt(Array.prototype.push), Z2 = lt(Array.prototype.splice), Mt = Array.isArray, _r = lt(String.prototype.toLowerCase), la = lt(String.prototype.toString), $c = lt(String.prototype.match), Uo = lt(String.prototype.replace), Rc = lt(String.prototype.indexOf), Y2 = lt(String.prototype.trim), X2 = lt(Number.prototype.toString), Q2 = lt(Boolean.prototype.toString), Pc = typeof BigInt > "u" ? null : lt(BigInt.prototype.toString), Mc = typeof Symbol > "u" ? null : lt(Symbol.prototype.toString), et = lt(Object.prototype.hasOwnProperty), yr = lt(Object.prototype.toString), gt = lt(RegExp.prototype.test), wr = J2(TypeError);
function lt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      o[r - 1] = arguments[r];
    return Ia(e, t, o);
  };
}
function J2(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return La(e, n);
  };
}
function ye(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _r;
  if (Lc && Lc(e, null), !Mt(t))
    return e;
  let o = t.length;
  for (; o--; ) {
    let r = t[o];
    if (typeof r == "string") {
      const s = n(r);
      s !== r && (U2(t) || (t[o] = s), r = s);
    }
    e[r] = !0;
  }
  return e;
}
function eA(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function Ct(e) {
  const t = Ko(null);
  for (const o of of(e)) {
    var n = H2(o, 2);
    const r = n[0], s = n[1];
    et(e, r) && (Mt(s) ? t[r] = eA(s) : s && typeof s == "object" && s.constructor === Object ? t[r] = Ct(s) : t[r] = s);
  }
  return t;
}
function tA(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return X2(e);
    case "boolean":
      return Q2(e);
    case "bigint":
      return Pc ? Pc(e) : "0";
    case "symbol":
      return Mc ? Mc(e) : "Symbol()";
    case "undefined":
      return yr(e);
    case "function":
    case "object": {
      if (e === null)
        return yr(e);
      const t = e, n = En(t, "toString");
      if (typeof n == "function") {
        const o = n(t);
        return typeof o == "string" ? o : yr(o);
      }
      return yr(e);
    }
    default:
      return yr(e);
  }
}
function En(e, t) {
  for (; e !== null; ) {
    const o = K2(e, t);
    if (o) {
      if (o.get)
        return lt(o.get);
      if (typeof o.value == "function")
        return lt(o.value);
    }
    e = G2(e);
  }
  function n() {
    return null;
  }
  return n;
}
function nA(e) {
  try {
    return gt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Nc = zt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ca = zt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ua = zt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), oA = zt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), da = zt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), rA = zt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Dc = zt(["#text"]), zc = zt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fa = zt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fc = zt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), os = zt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sA = an(/{{[\w\W]*|^[\w\W]*}}/g), aA = an(/<%[\w\W]*|^[\w\W]*%>/g), iA = an(/\${[\w\W]*/g), lA = an(/^data-[\-\w.\u00B7-\uFFFF]+$/), cA = an(/^aria-[\-\w]+$/), Bc = an(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), uA = an(/^(?:\w+script|data):/i), dA = an(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), fA = an(/^html$/i), pA = an(/^[a-z][.\w]*(-[.\w]+)+$/i), Cn = {
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
}, mA = function() {
  return typeof window > "u" ? null : window;
}, hA = function(t, n) {
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
}, jc = function() {
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
function sf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mA();
  const t = (ae) => sf(ae);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Cn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const o = n, r = o.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, a = e.Node, l = e.Element, c = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, g = l.prototype, w = En(g, "cloneNode"), h = En(g, "remove"), b = En(g, "nextSibling"), C = En(g, "childNodes"), k = En(g, "parentNode"), P = En(g, "shadowRoot"), j = En(g, "attributes"), I = a && a.prototype ? En(a.prototype, "nodeType") : null, L = a && a.prototype ? En(a.prototype, "nodeName") : null;
  if (typeof s == "function") {
    const ae = n.createElement("template");
    ae.content && ae.content.ownerDocument && (n = ae.content.ownerDocument);
  }
  let O, R = "";
  const q = n, B = q.implementation, ne = q.createNodeIterator, H = q.createDocumentFragment, se = q.getElementsByTagName, de = o.importNode;
  let ce = jc();
  t.isSupported = typeof of == "function" && typeof k == "function" && B && B.createHTMLDocument !== void 0;
  const $ = sA, V = aA, F = iA, ue = lA, fe = cA, Ae = uA, De = dA, Ge = pA;
  let ve = Bc, W = null;
  const U = ye({}, [...Nc, ...ca, ...ua, ...da, ...Dc]);
  let me = null;
  const Oe = ye({}, [...zc, ...fa, ...Fc, ...os]);
  let ee = Object.seal(Ko(null, {
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
  })), X = null, He = null;
  const ze = Object.seal(Ko(null, {
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
  let ut = !0, Ke = !0, It = !1, bt = !0, qe = !1, yt = !0, rt = !1, wt = !1, Qe = !1, ct = !1, Lt = !1, Ft = !1, K = !0, ke = !1;
  const dt = "user-content-";
  let xe = !0, kt = !1, We = {}, ft = null;
  const go = ye({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Fn = null;
  const An = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bn = null;
  const Ut = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jn = "http://www.w3.org/1998/Math/MathML", Ot = "http://www.w3.org/2000/svg", _t = "http://www.w3.org/1999/xhtml";
  let Tn = _t, Sn = !1, vo = null;
  const no = ye({}, [jn, Ot, _t], la);
  let ln = ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Vn = ye({}, ["annotation-xml"]);
  const oo = ye({}, ["title", "style", "font", "a", "script"]);
  let cn = null;
  const Hn = ["application/xhtml+xml", "text/html"], Po = "text/html";
  let $e = null, un = null;
  const Mo = n.createElement("form"), No = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, dn = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (un && un === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = Ct(v), cn = // eslint-disable-next-line unicorn/prefer-includes
    Hn.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Po : v.PARSER_MEDIA_TYPE, $e = cn === "application/xhtml+xml" ? la : _r, W = et(v, "ALLOWED_TAGS") && Mt(v.ALLOWED_TAGS) ? ye({}, v.ALLOWED_TAGS, $e) : U, me = et(v, "ALLOWED_ATTR") && Mt(v.ALLOWED_ATTR) ? ye({}, v.ALLOWED_ATTR, $e) : Oe, vo = et(v, "ALLOWED_NAMESPACES") && Mt(v.ALLOWED_NAMESPACES) ? ye({}, v.ALLOWED_NAMESPACES, la) : no, Bn = et(v, "ADD_URI_SAFE_ATTR") && Mt(v.ADD_URI_SAFE_ATTR) ? ye(Ct(Ut), v.ADD_URI_SAFE_ATTR, $e) : Ut, Fn = et(v, "ADD_DATA_URI_TAGS") && Mt(v.ADD_DATA_URI_TAGS) ? ye(Ct(An), v.ADD_DATA_URI_TAGS, $e) : An, ft = et(v, "FORBID_CONTENTS") && Mt(v.FORBID_CONTENTS) ? ye({}, v.FORBID_CONTENTS, $e) : go, X = et(v, "FORBID_TAGS") && Mt(v.FORBID_TAGS) ? ye({}, v.FORBID_TAGS, $e) : Ct({}), He = et(v, "FORBID_ATTR") && Mt(v.FORBID_ATTR) ? ye({}, v.FORBID_ATTR, $e) : Ct({}), We = et(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? Ct(v.USE_PROFILES) : v.USE_PROFILES : !1, ut = v.ALLOW_ARIA_ATTR !== !1, Ke = v.ALLOW_DATA_ATTR !== !1, It = v.ALLOW_UNKNOWN_PROTOCOLS || !1, bt = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qe = v.SAFE_FOR_TEMPLATES || !1, yt = v.SAFE_FOR_XML !== !1, rt = v.WHOLE_DOCUMENT || !1, ct = v.RETURN_DOM || !1, Lt = v.RETURN_DOM_FRAGMENT || !1, Ft = v.RETURN_TRUSTED_TYPE || !1, Qe = v.FORCE_BODY || !1, K = v.SANITIZE_DOM !== !1, ke = v.SANITIZE_NAMED_PROPS || !1, xe = v.KEEP_CONTENT !== !1, kt = v.IN_PLACE || !1, ve = nA(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Bc, Tn = typeof v.NAMESPACE == "string" ? v.NAMESPACE : _t, ln = et(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Ct(v.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ["mi", "mo", "mn", "ms", "mtext"]), Vn = et(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? Ct(v.HTML_INTEGRATION_POINTS) : ye({}, ["annotation-xml"]);
    const N = et(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? Ct(v.CUSTOM_ELEMENT_HANDLING) : Ko(null);
    if (ee = Ko(null), et(N, "tagNameCheck") && No(N.tagNameCheck) && (ee.tagNameCheck = N.tagNameCheck), et(N, "attributeNameCheck") && No(N.attributeNameCheck) && (ee.attributeNameCheck = N.attributeNameCheck), et(N, "allowCustomizedBuiltInElements") && typeof N.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = N.allowCustomizedBuiltInElements), qe && (Ke = !1), Lt && (ct = !0), We && (W = ye({}, Dc), me = Ko(null), We.html === !0 && (ye(W, Nc), ye(me, zc)), We.svg === !0 && (ye(W, ca), ye(me, fa), ye(me, os)), We.svgFilters === !0 && (ye(W, ua), ye(me, fa), ye(me, os)), We.mathMl === !0 && (ye(W, da), ye(me, Fc), ye(me, os))), ze.tagCheck = null, ze.attributeCheck = null, et(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? ze.tagCheck = v.ADD_TAGS : Mt(v.ADD_TAGS) && (W === U && (W = Ct(W)), ye(W, v.ADD_TAGS, $e))), et(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? ze.attributeCheck = v.ADD_ATTR : Mt(v.ADD_ATTR) && (me === Oe && (me = Ct(me)), ye(me, v.ADD_ATTR, $e))), et(v, "ADD_URI_SAFE_ATTR") && Mt(v.ADD_URI_SAFE_ATTR) && ye(Bn, v.ADD_URI_SAFE_ATTR, $e), et(v, "FORBID_CONTENTS") && Mt(v.FORBID_CONTENTS) && (ft === go && (ft = Ct(ft)), ye(ft, v.FORBID_CONTENTS, $e)), et(v, "ADD_FORBID_CONTENTS") && Mt(v.ADD_FORBID_CONTENTS) && (ft === go && (ft = Ct(ft)), ye(ft, v.ADD_FORBID_CONTENTS, $e)), xe && (W["#text"] = !0), rt && ye(W, ["html", "head", "body"]), W.table && (ye(W, ["tbody"]), delete X.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw wr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw wr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O = v.TRUSTED_TYPES_POLICY, R = O.createHTML("");
    } else
      O === void 0 && (O = hA(m, r)), O !== null && typeof R == "string" && (R = O.createHTML(""));
    (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && W === U && (W = Ct(W)), ce.uponSanitizeAttribute.length > 0 && me === Oe && (me = Ct(me)), zt && zt(v), un = v;
  }, Do = ye({}, [...ca, ...ua, ...oA]), bo = ye({}, [...da, ...rA]), lr = function(v) {
    let N = k(v);
    (!N || !N.tagName) && (N = {
      namespaceURI: Tn,
      tagName: "template"
    });
    const Q = _r(v.tagName), we = _r(N.tagName);
    return vo[v.namespaceURI] ? v.namespaceURI === Ot ? N.namespaceURI === _t ? Q === "svg" : N.namespaceURI === jn ? Q === "svg" && (we === "annotation-xml" || ln[we]) : !!Do[Q] : v.namespaceURI === jn ? N.namespaceURI === _t ? Q === "math" : N.namespaceURI === Ot ? Q === "math" && Vn[we] : !!bo[Q] : v.namespaceURI === _t ? N.namespaceURI === Ot && !Vn[we] || N.namespaceURI === jn && !ln[we] ? !1 : !bo[Q] && (oo[Q] || !Do[Q]) : !!(cn === "application/xhtml+xml" && vo[v.namespaceURI]) : !1;
  }, At = function(v) {
    Wo(t.removed, {
      element: v
    });
    try {
      k(v).removeChild(v);
    } catch {
      h(v);
    }
  }, x = function(v, N) {
    try {
      Wo(t.removed, {
        attribute: N.getAttributeNode(v),
        from: N
      });
    } catch {
      Wo(t.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(v), v === "is")
      if (ct || Lt)
        try {
          At(N);
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
      const Pe = $c(v, /^[\r\n\t ]+/);
      Q = Pe && Pe[0];
    }
    cn === "application/xhtml+xml" && Tn === _t && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const we = O ? O.createHTML(v) : v;
    if (Tn === _t)
      try {
        N = new d().parseFromString(we, cn);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = B.createDocument(Tn, "template", null);
      try {
        N.documentElement.innerHTML = Sn ? R : we;
      } catch {
      }
    }
    const be = N.body || N.documentElement;
    return v && Q && be.insertBefore(n.createTextNode(Q), be.childNodes[0] || null), Tn === _t ? se.call(N, rt ? "html" : "body")[0] : rt ? N.documentElement : be;
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
      Ho([$, V, F], (be) => {
        we = Uo(we, be, " ");
      }), Q.data = we, Q = N.nextNode();
    }
  }, Je = function(v) {
    const N = L ? L(v) : null;
    return typeof N != "string" || $e(N) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    v.nodeType !== I(v) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Bt = function(v) {
    if (!I || typeof v != "object" || v === null)
      return !1;
    try {
      return I(v) === Cn.documentFragment;
    } catch {
      return !1;
    }
  }, $t = function(v) {
    if (!I || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof I(v) == "number";
    } catch {
      return !1;
    }
  };
  function Tt(ae, v, N) {
    Ho(ae, (Q) => {
      Q.call(t, v, N, un);
    });
  }
  const Gt = function(v) {
    let N = null;
    if (Tt(ce.beforeSanitizeElements, v, null), Je(v))
      return At(v), !0;
    const Q = $e(v.nodeName);
    if (Tt(ce.uponSanitizeElement, v, {
      tagName: Q,
      allowedTags: W
    }), yt && v.hasChildNodes() && !$t(v.firstElementChild) && gt(/<[/\w!]/g, v.innerHTML) && gt(/<[/\w!]/g, v.textContent) || yt && v.namespaceURI === _t && Q === "style" && $t(v.firstElementChild) || v.nodeType === Cn.progressingInstruction || yt && v.nodeType === Cn.comment && gt(/<[/\w]/g, v.data))
      return At(v), !0;
    if (X[Q] || !(ze.tagCheck instanceof Function && ze.tagCheck(Q)) && !W[Q]) {
      if (!X[Q] && Ur(Q) && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, Q) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(Q)))
        return !1;
      if (xe && !ft[Q]) {
        const be = k(v), Pe = C(v);
        if (Pe && be) {
          const Pt = Pe.length;
          for (let Kt = Pt - 1; Kt >= 0; --Kt) {
            const qt = w(Pe[Kt], !0);
            be.insertBefore(qt, b(v));
          }
        }
      }
      return At(v), !0;
    }
    return (I ? I(v) : v.nodeType) === Cn.element && !lr(v) || (Q === "noscript" || Q === "noembed" || Q === "noframes") && gt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (At(v), !0) : (qe && v.nodeType === Cn.text && (N = v.textContent, Ho([$, V, F], (be) => {
      N = Uo(N, be, " ");
    }), v.textContent !== N && (Wo(t.removed, {
      element: v.cloneNode()
    }), v.textContent = N)), Tt(ce.afterSanitizeElements, v, null), !1);
  }, zo = function(v, N, Q) {
    if (He[N] || K && (N === "id" || N === "name") && (Q in n || Q in Mo))
      return !1;
    const we = me[N] || ze.attributeCheck instanceof Function && ze.attributeCheck(N, v);
    if (!(Ke && !He[N] && gt(ue, N))) {
      if (!(ut && gt(fe, N))) {
        if (!we || He[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ur(v) && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, v) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(v)) && (ee.attributeNameCheck instanceof RegExp && gt(ee.attributeNameCheck, N) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(N, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && gt(ee.tagNameCheck, Q) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(Q)))
          ) return !1;
        } else if (!Bn[N]) {
          if (!gt(ve, Uo(Q, De, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && v !== "script" && Rc(Q, "data:") === 0 && Fn[v])) {
              if (!(It && !gt(Ae, Uo(Q, De, "")))) {
                if (Q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ws = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ur = function(v) {
    return !Ws[_r(v)] && gt(Ge, v);
  }, Gr = function(v) {
    Tt(ce.beforeSanitizeAttributes, v, null);
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
      const be = N[we], Pe = be.name, Pt = be.namespaceURI, Kt = be.value, qt = $e(Pe), cr = Kt;
      let st = Pe === "value" ? cr : Y2(cr);
      if (Q.attrName = qt, Q.attrValue = st, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Tt(ce.uponSanitizeAttribute, v, Q), st = Q.attrValue, ke && (qt === "id" || qt === "name") && Rc(st, dt) !== 0 && (x(Pe, v), st = dt + st), yt && gt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        x(Pe, v);
        continue;
      }
      if (qt === "attributename" && $c(st, "href")) {
        x(Pe, v);
        continue;
      }
      if (Q.forceKeepAttr)
        continue;
      if (!Q.keepAttr) {
        x(Pe, v);
        continue;
      }
      if (!bt && gt(/\/>/i, st)) {
        x(Pe, v);
        continue;
      }
      qe && Ho([$, V, F], (Kr) => {
        st = Uo(st, Kr, " ");
      });
      const Fo = $e(v.nodeName);
      if (!zo(Fo, qt, st)) {
        x(Pe, v);
        continue;
      }
      if (O && typeof m == "object" && typeof m.getAttributeType == "function" && !Pt)
        switch (m.getAttributeType(Fo, qt)) {
          case "TrustedHTML": {
            st = O.createHTML(st);
            break;
          }
          case "TrustedScriptURL": {
            st = O.createScriptURL(st);
            break;
          }
        }
      if (st !== cr)
        try {
          Pt ? v.setAttributeNS(Pt, Pe, st) : v.setAttribute(Pe, st), Je(v) ? At(v) : Oc(t.removed);
        } catch {
          x(Pe, v);
        }
    }
    Tt(ce.afterSanitizeAttributes, v, null);
  }, Rt = function(v) {
    let N = null;
    const Q = ge(v);
    for (Tt(ce.beforeSanitizeShadowDOM, v, null); N = Q.nextNode(); )
      if (Tt(ce.uponSanitizeShadowNode, N, null), Gt(N), Gr(N), Bt(N.content) && Rt(N.content), (I ? I(N) : N.nodeType) === Cn.element) {
        const be = P ? P(N) : N.shadowRoot;
        Bt(be) && (ro(be), Rt(be));
      }
    Tt(ce.afterSanitizeShadowDOM, v, null);
  }, ro = function(v) {
    const N = I ? I(v) : v.nodeType;
    if (N === Cn.element) {
      const be = P ? P(v) : v.shadowRoot;
      Bt(be) && (ro(be), Rt(be));
    }
    const Q = C ? C(v) : v.childNodes;
    if (!Q)
      return;
    const we = [];
    Ho(Q, (be) => {
      Wo(we, be);
    });
    for (const be of we)
      ro(be);
    if (N === Cn.element) {
      const be = L ? L(v) : null;
      if (typeof be == "string" && $e(be) === "template") {
        const Pe = v.content;
        Bt(Pe) && ro(Pe);
      }
    }
  };
  return t.sanitize = function(ae) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, Q = null, we = null, be = null;
    if (Sn = !ae, Sn && (ae = "<!-->"), typeof ae != "string" && !$t(ae) && (ae = tA(ae), typeof ae != "string"))
      throw wr("dirty is not a string, aborting");
    if (!t.isSupported)
      return ae;
    if (wt || dn(v), t.removed = [], typeof ae == "string" && (kt = !1), kt) {
      const Kt = L ? L(ae) : ae.nodeName;
      if (typeof Kt == "string") {
        const qt = $e(Kt);
        if (!W[qt] || X[qt])
          throw wr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Je(ae))
        throw wr("root node is clobbered and cannot be sanitized in-place");
      ro(ae);
    } else if ($t(ae))
      N = Z("<!---->"), Q = N.ownerDocument.importNode(ae, !0), Q.nodeType === Cn.element && Q.nodeName === "BODY" || Q.nodeName === "HTML" ? N = Q : N.appendChild(Q), ro(Q);
    else {
      if (!ct && !qe && !rt && // eslint-disable-next-line unicorn/prefer-includes
      ae.indexOf("<") === -1)
        return O && Ft ? O.createHTML(ae) : ae;
      if (N = Z(ae), !N)
        return ct ? null : Ft ? R : "";
    }
    N && Qe && At(N.firstChild);
    const Pe = ge(kt ? ae : N);
    for (; we = Pe.nextNode(); )
      Gt(we), Gr(we), Bt(we.content) && Rt(we.content);
    if (kt)
      return qe && Be(ae), ae;
    if (ct) {
      if (qe && Be(N), Lt)
        for (be = H.call(N.ownerDocument); N.firstChild; )
          be.appendChild(N.firstChild);
      else
        be = N;
      return (me.shadowroot || me.shadowrootmode) && (be = de.call(o, be, !0)), be;
    }
    let Pt = rt ? N.outerHTML : N.innerHTML;
    return rt && W["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && gt(fA, N.ownerDocument.doctype.name) && (Pt = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Pt), qe && Ho([$, V, F], (Kt) => {
      Pt = Uo(Pt, Kt, " ");
    }), O && Ft ? O.createHTML(Pt) : Pt;
  }, t.setConfig = function() {
    let ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    dn(ae), wt = !0;
  }, t.clearConfig = function() {
    un = null, wt = !1;
  }, t.isValidAttribute = function(ae, v, N) {
    un || dn({});
    const Q = $e(ae), we = $e(v);
    return zo(Q, we, N);
  }, t.addHook = function(ae, v) {
    typeof v == "function" && Wo(ce[ae], v);
  }, t.removeHook = function(ae, v) {
    if (v !== void 0) {
      const N = q2(ce[ae], v);
      return N === -1 ? void 0 : Z2(ce[ae], N, 1)[0];
    }
    return Oc(ce[ae]);
  }, t.removeHooks = function(ae) {
    ce[ae] = [];
  }, t.removeAllHooks = function() {
    ce = jc();
  }, t;
}
var gA = sf();
const vA = {
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
function bA(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(
    /\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi,
    ""
  ) : gA.sanitize(e, vA) : "";
}
const yA = 24, wA = 120, kA = 420, _A = 1200, AA = 24e3, TA = 1800, SA = 5200, Oa = (e) => {
  const t = e.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
  if (!t || t.index === void 0)
    return { reasoning: "", answer: e };
  const n = e.slice(0, t.index).trim(), o = t[0], r = e.slice(t.index + o.length).trim();
  return {
    reasoning: (t[1] ?? "").trim(),
    answer: [n, r].filter(Boolean).join(`

`)
  };
}, CA = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return `code-${e.length}-${t.toString(16)}`;
}, af = (e, t) => {
  if (e.size <= t) return;
  const n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}, EA = (e, t, n) => e.includes("<pre>") ? e.replace(
  /<pre><code(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
  (o, r, s) => {
    const a = document.createElement("textarea");
    a.innerHTML = s;
    const l = a.value, c = CA(l);
    t.codeCache.set(c, l), af(t.codeCache, wA);
    const u = r ? ` class="${r}"` : "", d = n("common.copy");
    return `<div class="code-block-shell"><button type="button" class="code-copy-btn" data-code-id="${c}" title="${d}">${d}</button><pre><code${u}>${s}</code></pre></div>`;
  }
) : e, Vc = (e, t, n, o = {}) => {
  const r = o.cache !== !1, s = `${n("common.copy")}\0${e}`, a = r ? t.htmlCache.get(s) : void 0;
  if (a) return a;
  const l = bA(Re.parse(e, { async: !1 })), c = o.enhanceCodeBlocks === !1 ? l : EA(l, t, n);
  return r && (t.htmlCache.set(s, c), af(t.htmlCache, yA)), c;
}, xA = (e, t, n, o, r) => {
  if (!t) return !0;
  const s = e.content.length >= AA, a = s ? _A : kA, l = s ? SA : TA;
  return r - t.updatedAt >= a || e.content.length - t.source.length >= l || !t.reasoning && !!n || !t.answer && !!o;
}, IA = (e, t, n) => {
  const { reasoning: o, answer: r } = Oa(e.content);
  if (!e.streaming)
    return n.streamingSnapshots.delete(e.id), t === "reasoning" ? o : r;
  const s = Date.now(), a = n.streamingSnapshots.get(e.id);
  return xA(e, a, o, r, s) ? (n.streamingSnapshots.set(e.id, {
    source: e.content,
    reasoning: o,
    answer: r,
    updatedAt: s
  }), t === "reasoning" ? o : r) : t === "reasoning" ? a?.reasoning ?? o : a?.answer ?? r;
}, LA = (e, t, n, o) => {
  const r = IA(e, t, n);
  if (!e.streaming) return Vc(r, n, o);
  const s = n.streamingSnapshots.get(e.id), a = t === "reasoning" ? "reasoningHtml" : "answerHtml", l = t === "reasoning" ? "reasoning" : "answer";
  if (s?.[l] === r && s[a])
    return s[a];
  const c = Vc(r, n, o, {
    cache: !1,
    enhanceCodeBlocks: !1
  });
  return s?.[l] === r && (s[a] = c), c;
}, OA = async (e, t, n) => {
  const r = e.target?.closest(".code-copy-btn"), s = r?.dataset.codeId ? t.codeCache.get(r.dataset.codeId) : void 0;
  if (s)
    try {
      await navigator.clipboard.writeText(s), Ee.msg(n("localAi.codeCopied"));
    } catch (a) {
      Ee.msg(`${n("common.copy")}: ${a}`, "error");
    }
}, $A = (e, t) => {
  e.allowThinking && (t.includes("<think>") && !e.reasoningStartedAt && (e.reasoningStartedAt = Date.now()), t.includes("</think>") && !e.reasoningEndedAt && (e.reasoningEndedAt = Date.now()));
}, RA = () => {
  const { t: e } = Dr(), t = {
    htmlCache: /* @__PURE__ */ new Map(),
    codeCache: /* @__PURE__ */ new Map(),
    streamingSnapshots: /* @__PURE__ */ new Map()
  };
  return {
    renderMessageMarkdown: (n, o) => LA(n, o, t, e),
    handleMarkdownClick: (n) => OA(n, t, e),
    messageReasoning: (n) => Oa(n).reasoning,
    messageAnswer: (n) => Oa(n).answer,
    recordReasoningProgress: $A,
    discardStreamingMarkdown: (n) => {
      t.streamingSnapshots.delete(n);
    },
    clearMarkdownState: () => {
      t.htmlCache.clear(), t.codeCache.clear(), t.streamingSnapshots.clear();
    }
  };
}, PA = {
  key: 0,
  class: "attachment-preview-dialog__body"
}, MA = { class: "attachment-preview-dialog__viewport" }, NA = ["src", "alt"], DA = { class: "attachment-preview-dialog__meta" }, zA = { class: "attachment-preview-dialog__file" }, FA = ["title"], BA = /* @__PURE__ */ oe({
  __name: "AttachmentPreviewDialog",
  props: {
    modelValue: { type: Boolean },
    attachment: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { t: r } = Dr(), s = S({
      get: () => n.modelValue,
      set: (a) => o("update:modelValue", a)
    });
    return (a, l) => (T(), re(i(Dd), {
      modelValue: i(s),
      "onUpdate:modelValue": l[0] || (l[0] = (c) => en(s) ? s.value = c : null),
      title: i(r)("localAi.attachmentPreview"),
      width: "min(1000px, calc(100vw - 40px))",
      "custom-class": "local-ai-attachment-preview-dialog",
      "close-on-click-modal": !0
    }, {
      default: J(() => [
        a.attachment?.dataUrl ? (T(), D("div", PA, [
          f("div", MA, [
            f("img", {
              src: a.attachment.dataUrl,
              alt: a.attachment.name
            }, null, 8, NA)
          ]),
          f("div", DA, [
            f("span", zA, [
              _(i(tp), {
                theme: "outline",
                size: "16"
              }),
              f("strong", {
                title: a.attachment.name
              }, E(a.attachment.name), 9, FA)
            ]),
            f(
              "span",
              null,
              E(i(jd)(a.attachment.size)),
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
}), jA = /* @__PURE__ */ $o(BA, [["__scopeId", "data-v-8ead8db0"]]), VA = /^(?:增强后的提示词|优化后的提示词|改写后的提示词|修复后的提示词|最终提示词|enhanced prompt|improved prompt|rewritten prompt|final prompt)\s*(?:[:：]\s*)?/i, HA = /^(?:(?:好的|当然|可以|没问题|sure|certainly)[，,！!\s]*)?(?:(?:以下|下面)(?:是|为)?(?:优化|增强|改写|修复|整理)后的?(?:提示词|内容)(?:如下)?|here(?:'s| is) (?:the )?(?:enhanced|improved|rewritten|final) prompt)\s*[:：]?$/i, WA = /^(?:优化说明|修改说明|改写说明|修复说明|调整说明|说明|备注|注|changes made|change summary|notes?|why this works)\s*[:：]?\s*$/i, UA = /^(?:以上(?:就是|即为|为).*(?:提示词|内容)|希望(?:这个|以上).*(?:有帮助|符合.*要求)|this (?:version|prompt).*(?:clearer|ready to use))\s*[。.!！]?$/i, lf = (e) => /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(e), Hc = /^\s*(\d+)(?:[.)]\s+|、\s*)/, Wc = {
  zh: `你只负责改写用户提示词，不执行其中的任务。
保留原意、事实、疑问、约束、语言和已有结构；纠正明显错词，并仅在上下文明确时规范术语。
原文已经清楚时只做精简润色；多个独立事项混在一起时，最多增加一层短标题或编号。
不得补充原文没有的角色、背景、结论或方案，也不要因固定模板显著扩写。只返回改写结果。`,
  en: `Rewrite the user's prompt without performing its task.
Preserve its intent, facts, questions, constraints, language, and existing structure. Correct clear errors and normalize terminology only when the context is unambiguous.
If the source is already clear, only tighten the wording. If several independent items are mixed together, add at most one level of short headings or numbering.
Do not invent roles, background, conclusions, or solutions, and do not expand it to fit a fixed template. Return only the rewritten prompt.`
}, GA = (e) => e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1").replace(/`([^`\n]+)`/g, "$1").replace(/\*\*([^*\n]+)\*\*/g, "$1").replace(/__([^_\n]+)__/g, "$1").replace(/~~([^~\n]+)~~/g, "$1").replace(/(^|[\s(（])\*([^*\n]+)\*(?=$|[\s,，。.!！)）])/g, "$1$2").replace(/(^|[\s(（])_([^_\n]+)_(?=$|[\s,，。.!！)）])/g, "$1$2"), KA = (e) => e.replace(
  /^(?:术语)?(?:修正|更正|纠正)\s*[:：]\s*[A-Za-z][\w.+-]*\s*(?:→|->|为|改为)\s*([A-Za-z][\w.+-]*)[。.]?$/i,
  "$1"
).replace(
  /(^|[，,]\s*)(?:并)?(?:请)?(?:将|把)?\s*(?:术语\s*)?(?:修正|更正|纠正)\s+([A-Za-z][\w.+-]*)\s*(?:为|成)\s*([A-Za-z][\w.+-]*)/gi,
  "$1使用 $3"
).replace(
  /(^|,\s*)(?:and\s+)?(?:correct|fix)\s+([A-Za-z][\w.+-]*)\s+(?:to|as)\s+([A-Za-z][\w.+-]*)/gi,
  "$1use $3"
), qA = (e) => {
  const t = e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s{0,3}>\s?/, ""), n = t.match(Hc), o = n ? `${n[1]}、` : "", r = t.replace(/^\s*[-+*]\s+\[[ xX]\]\s+/, "").replace(/^\s*[-+*]\s+/, "").replace(Hc, "");
  if (lf(r))
    return "";
  const s = r.trim();
  return s.startsWith("|") && s.endsWith("|") ? s.slice(1, -1).split("|").map((a) => a.trim()).filter(Boolean).join("；") : `${o}${KA(
    GA(r)
  ).trimEnd()}`;
}, ZA = (e, t) => t ? !1 : !e || HA.test(e), YA = (e, t) => t && WA.test(e), XA = (e, t) => (t ? e : e.replace(VA, "")).trim(), QA = (e, t) => !!(e || t), $a = (e) => /[\u3400-\u9fff]/.test(e), JA = (e, t = !1) => {
  const n = $a(e), o = n && t ? `
上一次结果语言错误。本次必须使用简体中文，不得翻译为英文。` : "";
  return {
    systemPrompt: `${n ? Wc.zh : Wc.en}${o}`,
    userPrompt: n ? `改写以下原文：
<原文>
${e}
</原文>` : `Rewrite the following source:
<source>
${e}
</source>`,
    maxTokens: Math.min(640, Math.max(320, Math.ceil(e.length * 1.4)))
  };
}, Uc = (e, t) => !$a(e) || $a(t), eT = (e) => {
  const n = e.replace(/^[\s\S]*?<\/think>\s*/i, "").replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/^\s*```(?:markdown|md|text)?\s*$/gim, "").replace(/^\s*```\s*$/gim, "").replace(/\r\n?/g, `
`).trim().split(`
`), o = [];
  for (const r of n) {
    if (lf(r)) continue;
    const s = qA(r).trim(), a = o.length > 0;
    if (ZA(s, a)) continue;
    if (YA(s, a)) break;
    if (UA.test(s)) continue;
    const l = XA(s, a);
    QA(l, o.at(-1)) && o.push(l);
  }
  return o.join(`
`).replace(/\n{3,}/g, `

`).trim();
}, Ar = "snippets.localAi.pendingPrompt", Li = "snippets.localAi.pendingPromptMode", cf = "new-chat", Ss = "snippets.localAi.pendingNewChatAt", tT = 1e4, nT = (e, t) => {
  e.setItem(Ar, t), e.setItem(
    Li,
    cf
  );
}, pa = (e) => e.getItem(Li) === cf, oT = (e, t = Date.now()) => {
  e.setItem(Ss, String(t));
}, rT = (e, t = Date.now()) => {
  const n = e.getItem(
    Ss
  );
  if (n === null) return !1;
  const o = Number(n), r = t - o;
  return !Number.isFinite(o) || r < 0 || r > tT ? (e.removeItem(Ss), !1) : !0;
}, sT = (e) => {
  e.removeItem(Ss);
}, aT = { class: "sidebar-header" }, iT = { class: "sidebar-brand" }, lT = { class: "sidebar-title-block" }, cT = ["title", "aria-pressed"], uT = { class: "sidebar-nav" }, dT = ["disabled"], fT = { class: "sidebar-search" }, pT = ["placeholder"], mT = {
  key: 0,
  class: "sidebar-search-count"
}, hT = { class: "sidebar-section recent-section" }, gT = { class: "section-title-row" }, vT = { class: "section-title" }, bT = { class: "section-title-actions" }, yT = ["title", "disabled"], wT = ["title", "disabled"], kT = {
  key: 0,
  class: "chat-list"
}, _T = ["tabindex", "aria-disabled", "onClick", "onKeydown"], AT = { class: "chat-item-copy" }, TT = { class: "chat-item-title" }, ST = { class: "chat-item-title-track" }, CT = { class: "chat-item-title-text" }, ET = {
  class: "chat-item-title-text chat-item-title-clone",
  "aria-hidden": "true"
}, xT = { class: "chat-item-time" }, IT = ["title", "disabled", "onClick"], LT = {
  key: 1,
  class: "sidebar-empty"
}, OT = { class: "sidebar-service" }, $T = { class: "sidebar-service-card" }, RT = { class: "sidebar-service-icon" }, PT = { class: "sidebar-service-copy" }, MT = { class: "chat-panel" }, NT = { class: "chat-panel-header" }, DT = { class: "chat-panel-heading" }, zT = ["title"], FT = { class: "chat-context-mark" }, BT = { class: "chat-context-copy" }, jT = {
  key: 0,
  class: "empty-state"
}, VT = { class: "empty-hero" }, HT = { class: "empty-hero-mark" }, WT = { class: "empty-eyebrow" }, UT = { class: "quick-prompt-section" }, GT = { class: "quick-prompt-heading" }, KT = { class: "quick-prompt-grid" }, qT = ["onClick"], ZT = { class: "quick-prompt-icon" }, YT = { class: "quick-prompt-copy" }, XT = {
  key: 0,
  class: "date-divider"
}, QT = { class: "message-avatar" }, JT = { key: 1 }, eS = { class: "message-body" }, tS = { class: "user-bubble" }, nS = {
  key: 0,
  class: "user-message-text"
}, oS = {
  key: 1,
  class: "message-attachment-list"
}, rS = ["title", "aria-label", "onClick"], sS = ["src", "alt"], aS = {
  key: 1,
  class: "attachment-file-icon"
}, iS = { key: 2 }, lS = {
  key: 0,
  class: "message-actions"
}, cS = ["title", "onClick"], uS = ["title", "onClick"], dS = ["title", "onClick"], fS = { class: "assistant-head" }, pS = { key: 0 }, mS = {
  key: 0,
  class: "assistant-content-stack"
}, hS = ["open"], gS = { class: "reasoning-summary-title" }, vS = { key: 0 }, bS = ["innerHTML"], yS = ["innerHTML"], wS = {
  key: 0,
  class: "message-stats"
}, kS = { class: "message-stats__context" }, _S = { class: "message-stats__output" }, AS = { class: "message-stats__elapsed" }, TS = { class: "message-stats__speed" }, SS = {
  key: 0,
  class: "message-stats-time"
}, CS = {
  key: 1,
  class: "message-warning"
}, ES = {
  key: 2,
  class: "message-actions"
}, xS = ["title", "aria-label"], IS = ["disabled", "title", "onClick"], LS = ["disabled", "title", "onClick"], OS = ["title", "onClick"], $S = ["title", "onClick"], RS = ["title", "onClick"], PS = ["title", "onClick"], MS = ["title", "onClick"], NS = ["title"], DS = { class: "composer-dock" }, zS = {
  key: 0,
  class: "attachment-preview-list"
}, FS = ["title", "aria-label", "onClick"], BS = ["src", "alt"], jS = {
  key: 1,
  class: "attachment-file-icon"
}, VS = { class: "attachment-meta" }, HS = ["title", "onClick"], WS = ["placeholder", "readonly", "aria-busy"], US = { class: "input-toolbar" }, GS = { class: "input-toolbar-left" }, KS = ["title", "disabled"], qS = ["disabled", "title"], ZS = ["title", "aria-pressed"], YS = { class: "input-toolbar-right" }, XS = { class: "model-select-shell" }, QS = { class: "chat-model-option" }, JS = { class: "chat-model-option-name" }, e4 = { class: "input-hint" }, t4 = ["disabled", "title", "aria-label"], n4 = ["disabled", "title", "aria-label"], o4 = 96, r4 = 4096, s4 = 90, a4 = 1e3, i4 = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Dr(), {
      attachments: n,
      attachmentPicking: o,
      attachmentStatusText: r,
      handleAttachmentDrop: s,
      handleComposerPaste: a,
      pickAttachmentFiles: l,
      removeAttachment: c
    } = n2(), {
      clearMarkdownState: u,
      discardStreamingMarkdown: d,
      handleMarkdownClick: m,
      messageAnswer: g,
      messageReasoning: w,
      recordReasoningProgress: h,
      renderMessageMarkdown: b
    } = RA(), C = M(""), k = M([]), P = M(""), j = M(!1), I = M(""), L = M(null), O = M(!1), R = M(!1), q = M(!1), B = M(!1), ne = M(!1), H = M(!1), se = M(!1), de = M(!1), ce = M(!0), $ = M(!1), V = M(null), F = uo(null);
    let ue = !1, fe = null, Ae = !1, De = !1, Ge = null;
    const ve = M(null), W = M(null), U = M(""), me = M(null), Oe = M(null), ee = M(null), X = S({
      get: () => !!ee.value,
      set: (p) => {
        p || (ee.value = null);
      }
    }), He = M(Date.now());
    let ze = null, ut = null, Ke = null, It = !1, bt = null, qe = null, yt = !1, rt = 0, wt = null;
    const Qe = /* @__PURE__ */ new WeakMap(), ct = (p) => {
      const y = p.querySelector(".chat-item-title-text");
      if (!y) return;
      const G = y.scrollWidth - p.clientWidth > 2, te = y.scrollWidth + 24, A = Math.max(5, te / 34);
      p.style.setProperty("--chat-title-loop-distance", `${te}px`), p.style.setProperty("--chat-title-scroll-duration", `${A}s`), p.classList.toggle("is-overflowing", G);
    }, Lt = (p) => {
      window.requestAnimationFrame(() => ct(p));
    }, Ft = {
      mounted(p) {
        if (Lt(p), typeof ResizeObserver > "u") return;
        const y = new ResizeObserver(
          () => Lt(p)
        );
        y.observe(p);
        const G = p.querySelector(".chat-item-title-text");
        G && y.observe(G), Qe.set(p, y);
      },
      updated(p) {
        Lt(p);
      },
      beforeUnmount(p) {
        Qe.get(p)?.disconnect(), Qe.delete(p);
      }
    }, K = [
      {
        title: "localAi.quickPromptSummary",
        description: "localAi.quickPromptSummaryDesc",
        icon: Qf
      },
      {
        title: "localAi.quickPromptTranslate",
        description: "localAi.quickPromptTranslateDesc",
        icon: ap
      },
      {
        title: "localAi.quickPromptCode",
        description: "localAi.quickPromptCodeDesc",
        icon: Yf
      },
      {
        title: "localAi.quickPromptRegex",
        description: "localAi.quickPromptRegexDesc",
        icon: Ji
      }
    ], ke = S(
      () => (!!I.value.trim() || n.value.length > 0) && !R.value && !O.value
    ), dt = S(
      () => !!I.value.trim() && !R.value && !O.value && !V.value
    ), xe = S(() => R.value || O.value), kt = S(() => me.value?.healthy ? t("localAi.serviceHealthy") : me.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), We = S(
      () => k.value.find((p) => p.id === P.value) ?? null
    ), ft = S(
      () => We.value?.title || t("localAi.newChatTitle")
    ), go = S(() => cs(We.value)), Fn = S(() => K_(We.value)), An = (p) => p ? p.split(/[\\/]+/).pop() ?? p : "", Bn = (p) => {
      p.type !== "image" || !p.dataUrl || (ee.value = p);
    }, Ut = () => {
      ee.value = null;
    }, jn = (p) => {
      ee.value?.id === p && Ut(), c(p);
    }, Ot = S(
      () => An(U.value) || An(me.value?.modelPath) || An(ve.value?.modelPath) || t("localAi.localModel")
    ), _t = S(() => W.value?.mainModels ?? []), Tn = S(() => !!ve.value?.mmprojPath), Sn = S(
      () => ve.value?.ctxSize ?? me.value?.ctxSize ?? 4096
    ), vo = S(() => {
      const p = Sn.value, y = ve.value?.maxTokens ?? 0;
      return y > 0 ? Math.min(
        Math.max(y, 512),
        Math.max(512, p - 512)
      ) : Math.min(
        Math.max(r4, Math.floor(p * 0.5)),
        Math.max(512, p - 512)
      );
    }), no = S(
      () => Math.max(512, Sn.value - vo.value)
    ), ln = S(() => {
      const p = Ot.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(p);
    }), Vn = S(() => {
      const p = C.value.trim().toLowerCase();
      return k.value.filter(
        (y) => !p || y.title.toLowerCase().includes(p) || y.messages.some(
          (G) => !sr(G) && G.content.toLowerCase().includes(p)
        )
      ).slice().sort((y, G) => G.updatedAt.localeCompare(y.updatedAt));
    }), oo = () => {
      const p = L.value;
      if (!p) return;
      p.style.height = "auto";
      const y = p.scrollHeight, G = Number.parseFloat(
        window.getComputedStyle(p).maxHeight
      ), te = Number.isFinite(G) ? G : y;
      p.style.height = `${Math.min(y, te)}px`, p.style.overflowY = y > te ? "auto" : "hidden";
    }, cn = () => {
      if (!ue || xe.value) {
        De = !0;
        return;
      }
      De = !1, be();
    }, Hn = (p, y = !1) => {
      if (typeof p != "string" || !p.trim()) return;
      const G = p.trim();
      if (!ue || y && xe.value) {
        fe = G, y && (Ae = !0);
        return;
      }
      y && (be(), Ge = G), I.value = G, De = !1, localStorage.removeItem(Li), Ye(() => {
        oo(), L.value?.focus();
      });
    }, Po = async () => {
      try {
        const p = await Fe("take_pending_local_ai_prompt"), y = typeof p == "string" ? p.trim() : "";
        return y && nT(localStorage, y), y;
      } catch (p) {
        return Et.warn("[LocalAI] take pending prompt failed", p), "";
      }
    }, $e = async () => {
      try {
        const p = await Fe("take_pending_local_ai_new_chat");
        return p && oT(localStorage), p;
      } catch (p) {
        return Et.warn("[LocalAI] take pending new chat failed", p), !1;
      }
    }, un = (p) => {
      const y = p.detail;
      Po().then((G) => {
        const te = typeof y == "string" ? y.trim() : "", A = G || te;
        !A || !(G || pa(localStorage)) && A === Ge || Hn(A, !0);
      });
    }, Mo = () => {
      $e().then((p) => {
        p && cn();
      });
    }, No = () => {
      if (!(!ue || xe.value || !fe && !De)) {
        if (fe) {
          const p = fe, y = Ae;
          fe = null, Ae = !1, Hn(p, y);
          return;
        }
        cn();
      }
    }, dn = async () => {
      await Ye(), oo(), L.value?.focus();
    };
    pe(I, oo, { flush: "post" }), pe(xe, (p) => {
      p || No();
    }), pe(
      I,
      (p) => {
        if (!ue) return;
        p.trim() ? localStorage.setItem(Ar, p) : localStorage.removeItem(Ar);
      },
      { flush: "sync" }
    );
    const Do = (p) => {
      I.value = t(p), dn();
    }, bo = async (p, y) => {
      const G = JA(
        p,
        y
      ), te = await Em(
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
          maxTokens: G.maxTokens
        },
        {
          providerId: Zt,
          capability: "chat",
          contextCollection: {
            kind: "selection",
            input: {
              selectionText: p,
              selectionSource: "local-ai.prompt-enhancement"
            }
          }
        }
      );
      return eT(te.content);
    }, lr = async () => {
      const p = I.value.trim();
      if (!(!p || !dt.value)) {
        O.value = !0;
        try {
          let y = await bo(p, !1);
          if (Uc(p, y) || (y = await bo(p, !0)), !y) throw new Error(t("localAi.enhancePromptEmpty"));
          if (!Uc(p, y))
            throw new Error(t("localAi.enhancePromptLanguageMismatch"));
          I.value = y, await dn();
        } catch (y) {
          Ee.msg(`${t("localAi.enhancePromptFailed")}: ${String(y)}`, "error");
        } finally {
          O.value = !1;
        }
      }
    }, At = () => t("localAi.now"), x = () => {
      const p = (/* @__PURE__ */ new Date()).toISOString(), y = {
        id: ko("root"),
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
        updatedAtLabel: At(),
        currentNodeId: y.id,
        messages: [y]
      };
    }, Z = () => {
      const p = Oe.value;
      return p ? p.scrollHeight - p.scrollTop - p.clientHeight <= o4 : !0;
    }, ge = () => {
      const p = Z();
      p && (ce.value = !0), $.value = !p && !ce.value;
    }, Be = () => {
      Ke === null || It || (window.cancelAnimationFrame(Ke), Ke = null);
    }, Je = () => {
      ce.value = !1, $.value = !Z(), Be();
    }, Bt = () => {
      const p = Oe.value;
      p && (yt && p.scrollTop < rt - 1 && Je(), rt = p.scrollTop), ge();
    }, $t = (p) => {
      p.deltaY >= 0 || (Je(), window.requestAnimationFrame(ge));
    }, Tt = (p) => {
      const y = Oe.value;
      if (!y) return;
      const G = y.getBoundingClientRect(), te = Math.max(12, y.offsetWidth - y.clientWidth);
      p.clientX < G.right - te || (yt = !0, rt = y.scrollTop, Be());
    }, Gt = () => {
      yt = !1, ge();
    }, zo = (p) => {
      wt = p.touches[0]?.clientY ?? null;
    }, Ws = (p) => {
      const y = p.touches[0]?.clientY;
      y === void 0 || wt === null || (y > wt && Je(), wt = y);
    }, Ur = () => {
      wt = null, ge();
    }, Gr = () => {
      if (!bt) return;
      const p = Oe.value?.querySelector(".assistant-card--streaming") ?? null;
      p !== qe && (qe && bt.unobserve(qe), qe = p, qe && bt.observe(qe));
    }, Rt = async (p = {}) => {
      await Ye(), Gr(), !(!Oe.value || !p.force && !ce.value) && (It = It || p.force === !0, Ke === null && (Ke = window.requestAnimationFrame(() => {
        Ke = null;
        const G = Oe.value, te = It;
        if (It = !1, !G || !te && !ce.value) return;
        const A = Math.max(0, G.scrollHeight - G.clientHeight);
        Math.abs(G.scrollTop - A) > 1 && (G.scrollTop = A), ge();
      })));
    }, ro = () => {
      ce.value = !0, Rt({ force: !0 });
    }, ae = async () => {
      try {
        ve.value = await Xc(), U.value = ve.value.modelPath ?? "", W.value = await Qc(ve.value), ln.value || (se.value = !1);
      } catch (p) {
        Et.warn("[LocalAI] refresh chat config failed", p);
      }
    }, v = async () => {
      if (!q.value) {
        q.value = !0;
        try {
          me.value = await za();
        } catch (p) {
          Et.warn("[LocalAI] refresh chat status failed", p);
        } finally {
          q.value = !1;
        }
      }
    }, N = async () => {
      try {
        const p = await bp();
        if (k.value = p.map((y) => {
          const G = y.messages?.length ? y.messages : y.turns.map((A) => ({
            id: A.id,
            role: A.role,
            content: A.content,
            createdAt: A.createdAt
          })), te = G_(
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
        }), !k.value.some((y) => y.id === P.value)) {
          const y = k.value[0]?.id ?? "";
          y !== P.value && (I.value = "", n.value = [], Ut()), P.value = y;
        }
      } catch (p) {
        Et.warn("[LocalAI] refresh histories failed", p);
      }
    }, Q = async () => {
      xe.value || await Promise.all([ae(), v(), N()]);
    }, we = async (p) => {
      if (!p) return;
      const y = cs(p).map((G) => ({
        id: G.id,
        role: G.role,
        content: G.content,
        createdAt: G.createdAt
      }));
      await wp({
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
      k.value.unshift(p), P.value = p.id, I.value = "", n.value = [], Ut(), dn();
    }
    const Pe = () => {
      if (We.value) return;
      const p = x();
      k.value.unshift(p), P.value = p.id;
    }, Pt = (p) => {
      if (xe.value) return;
      sT(localStorage), P.value !== p && (I.value = "", n.value = [], Ut()), P.value = p;
      const y = We.value;
      y && !y.currentNodeId && (y.currentNodeId = Hr(y.messages, Vr(y.messages)?.id) ?? null), ce.value = !0, Rt({ force: !0 });
    }, Kt = async (p) => {
      if (xe.value) return;
      const y = P.value === p;
      k.value = k.value.filter((G) => G.id !== p);
      try {
        await kp(p);
      } catch (G) {
        Et.warn("[LocalAI] delete history failed", G), await N(), Ee.msg(`${t("common.operationFailed")}: ${String(G)}`, "error");
        return;
      }
      y && (P.value = k.value[0]?.id ?? "", I.value = "", n.value = [], Ut());
    }, qt = async () => {
      if (!(xe.value || B.value)) {
        B.value = !0;
        try {
          await _p(), k.value = [], P.value = "", C.value = "", I.value = "", n.value = [], ne.value = !1, Ut(), u(), Ee.msg(t("localAi.clearAllChatsSuccess"));
        } catch (p) {
          Et.warn("[LocalAI] clear histories failed", p), Ee.msg(`${t("common.operationFailed")}: ${String(p)}`, "error");
        } finally {
          B.value = !1;
        }
      }
    }, cr = async () => {
      if (!ve.value || !U.value) return;
      const p = {
        ...ve.value,
        modelPath: U.value
      };
      try {
        ve.value = await ss(p), me.value?.running && (me.value = await eu()), Ee.msg(t("localAi.modelChanged"));
      } catch (y) {
        await ae(), Ee.msg(`${t("localAi.configSaveFailed")}: ${y}`, "error");
      }
    }, st = (p) => !!g(p.content), Fo = (p) => !!(p.streaming && p.allowThinking && p.reasoningStartedAt && !p.reasoningEndedAt && !st(p)), Kr = (p) => {
      if (!p.reasoningStartedAt) return "0.00";
      const y = p.reasoningEndedAt ?? (p.streaming ? He.value : Date.now());
      return Math.max(0, (y - p.reasoningStartedAt) / 1e3).toFixed(2);
    }, uf = (p) => !p.reasoningStartedAt && p.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: Kr(p)
    }), Wn = (p) => new Date(
      p.createdAt || We.value?.updatedAt || Date.now()
    ), Oi = (p) => Wn(p).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), df = (p, y) => Wn(p).toDateString() === Wn(y).toDateString(), $i = (p) => Wn(p).toDateString() === (/* @__PURE__ */ new Date()).toDateString(), ff = (p) => {
      const y = Fn.value[p]?.message;
      if (!y) return !1;
      if (p === 0) return !$i(y);
      const G = Fn.value[p - 1]?.message;
      return G ? df(G, y) ? Wn(y).getTime() - Wn(G).getTime() > 30 * 60 * 1e3 : !0 : !1;
    }, pf = (p) => {
      const y = Wn(p), G = y.toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }), te = y.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      return $i(p) ? te : `${G} ${te}`;
    }, mf = (p) => p.streaming ? Fo(p) ? t("localAi.thinking") : t("localAi.generating") : Oi(p), hf = (p) => p.allowThinking && !p.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), gf = (p = We.value) => {
      const y = V_(), G = rr([y]), te = Math.max(
        512,
        no.value - G
      );
      return [
        y,
        ...U_(
          cs(p).filter((A) => !A.streaming && A.role !== "system").map((A) => ({
            role: A.role,
            content: A.role === "user" ? B_(A) : A.content
          })),
          te,
          t("localAi.previousAnswerTail")
        )
      ];
    }, vf = () => z_(ve.value?.maxTokens ?? 0), Ri = (p) => Math.max(
      1,
      p.stats?.ctxSize ?? p.contextSize ?? ve.value?.ctxSize ?? me.value?.ctxSize ?? 4096
    ), Pi = (p) => {
      const y = He.value, G = p.stats?.promptTokens ?? p.promptTokens ?? 0, te = p.stats?.completionTokens ?? p.estimatedCompletionTokens ?? (p.streaming ? aa(p.content) : Hd(p.content)), A = Ri(p), _e = Math.min(
        p.stats?.totalTokens ?? G + te,
        A
      ), ie = Math.max(
        0,
        (p.stats?.generationTimeMs ?? p.elapsedMs ?? y - Wn(p).getTime()) / 1e3
      ), Te = p.stats?.tokensPerSecond ?? (ie > 0 ? te / ie : 0);
      return {
        context: _e,
        contextMax: A,
        contextPercent: Math.min(100, Math.round(_e / A * 100)),
        output: te,
        outputMax: (ve.value?.maxTokens ?? 0) > 0 ? String(ve.value?.maxTokens) : "∞",
        seconds: ie.toFixed(1),
        speed: Te.toFixed(1)
      };
    }, bf = S(() => (He.value, new Map(
      Fn.value.map(({ message: p }) => [
        p.id,
        Pi(p)
      ])
    ))), so = (p) => bf.value.get(p.id) ?? Pi(p), Mi = (p) => p.repetitionStopped ? t("localAi.repetitionStopped") : p.interrupted ? t("localAi.streamInterrupted") : p.stopped ? t("localAi.generationStopped") : p.stats?.finishReason === "length" ? (p.stats?.totalTokens ?? so(p).context) >= Ri(p) - 8 ? t("localAi.contextLimitReached") : t("localAi.outputLimitReached") : "", Ni = (p) => {
      const y = String(p);
      return /exceeds the available context size|exceed_context_size/i.test(y) ? t("localAi.contextExceeded") : y;
    }, yf = (p) => {
      const y = p.replace(/\s+/g, " ").trim();
      if (y.length < 900) return !1;
      const te = y.slice(-1800).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Te) => Te.toLowerCase()) ?? [];
      if (te.length < 140) return !1;
      const A = te.slice(-120), _e = /* @__PURE__ */ new Map();
      for (const Te of A) _e.set(Te, (_e.get(Te) ?? 0) + 1);
      if (_e.size / A.length < 0.12 && [..._e.values()].some((Te) => Te >= 56))
        return !0;
      for (let Te = 1; Te <= 4; Te += 1) {
        const Ce = te.slice(-Te).join("\0");
        let Un = 1;
        for (let jt = te.length - Te * 2; jt >= 0 && te.slice(jt, jt + Te).join("\0") === Ce; jt -= Te)
          Un += 1;
        if (Un >= Math.max(24, Math.ceil(72 / Te))) return !0;
      }
      return !1;
    }, Di = () => {
      ut || (He.value = Date.now(), ut = setInterval(() => {
        He.value = Date.now();
      }, a4));
    }, Us = () => {
      ut && (clearInterval(ut), ut = null, He.value = Date.now());
    }, zi = (p) => {
      const y = km();
      return H.value = !1, V.value = y, F.value = p, y;
    }, qr = (p) => {
      p && V.value !== p || (V.value = null, F.value = null);
    }, Fi = (p, y) => {
      p.streaming = !1, p.stopped = !0, p.interrupted = !1, p.error = "", p.reasoningStartedAt && !p.reasoningEndedAt && (p.reasoningEndedAt = Date.now()), y !== void 0 && (p.elapsedMs = y), d(p.id), He.value = Date.now();
    }, Bi = async (p, y, G) => {
      const te = performance.now();
      let A = gf(y), _e = "", ie = null, Te = null, Ce = !1, Un = !1;
      if (H.value) {
        Fi(p, performance.now() - te), qr(G);
        return;
      }
      A = H_(A), p.promptTokens = rr(A), p.contextSize = Sn.value;
      const jt = async () => {
        if (!_e) {
          ie = null, Te?.(), Te = null;
          return;
        }
        const ht = H.value ? _e.length : _e.length > 4e3 ? 900 : _e.length > 1200 ? 520 : _e.length > 240 ? 180 : 64;
        if (p.content += _e.slice(0, ht), _e = _e.slice(ht), p.estimatedCompletionTokens = aa(
          p.content
        ), !Un && !H.value && yf(p.content) && (Un = !0, H.value = !0, p.repetitionStopped = !0, Xs(G, {
          providerId: Zt
        }).catch(
          (fn) => Et.warn("[LocalAI] repetition stop failed", fn)
        )), await Rt(), !_e) {
          ie = null, Te?.(), Te = null;
          return;
        }
        ie = window.setTimeout(() => {
          jt().catch(
            (fn) => Et.warn("[LocalAI] stream pump failed", fn)
          );
        }, s4);
      }, Gs = (ht) => {
        ht && (h(p, ht), _e += ht, ie === null && (ie = window.setTimeout(() => {
          jt().catch(
            (fn) => Et.warn("[LocalAI] stream pump failed", fn)
          );
        }, 32)));
      }, qi = async () => {
        !_e && ie === null || await new Promise((ht) => {
          Te = ht;
        });
      }, Bo = await Im(
        {
          messages: A,
          maxTokens: vf(),
          enableThinking: p.allowThinking === !0
        },
        (ht) => {
          H.value || (Ce = !0, Gs(ht));
        },
        {
          providerId: Zt,
          requestId: G,
          onStats: (ht) => {
            const fn = F_(p.stats, ht);
            p.stats = fn, fn.ctxSize && (p.contextSize = fn.ctxSize), fn.completionTokens !== void 0 && (p.estimatedCompletionTokens = fn.completionTokens), He.value = Date.now();
          }
        }
      ).catch(async (ht) => {
        throw await qi(), ht;
      });
      if (!Ce)
        Gs(Bo.content);
      else if (!H.value) {
        const ht = p.content.length + _e.length;
        Bo.content.length > ht && Gs(Bo.content.slice(ht));
      }
      await qi(), !H.value && Bo.content && p.content !== Bo.content && (p.content = Bo.content), p.estimatedCompletionTokens = p.stats?.completionTokens ?? aa(p.content), d(p.id), p.streaming = !1, p.elapsedMs = performance.now() - te, p.stopped = H.value, p.interrupted = !1, p.error = "", He.value = Date.now(), qr(G);
    }, wf = async () => {
      const p = V.value;
      if (!R.value || H.value) return;
      H.value = !0;
      const y = F.value;
      if (y && Fi(
        y,
        Math.max(0, Date.now() - Wn(y).getTime())
      ), !!p)
        try {
          await Xs(p, { providerId: Zt });
        } catch (G) {
          Et.warn("[LocalAI] cancel stream failed", G);
        }
    }, kf = () => {
      if (!I.value.trim() && !n.value.length) return !1;
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
      ) && !Tn.value ? (Ee.msg(t("localAi.visionUnavailable"), "warning"), !1) : !0;
    }, ji = async () => {
      const p = I.value.trim();
      if (xe.value || !kf()) return;
      Pe();
      const y = (/* @__PURE__ */ new Date()).toISOString(), G = ra(n.value), te = p || G[0]?.name || "", A = We.value;
      if (!A) return;
      const _e = ia(A, {
        id: ko("user"),
        role: "user",
        content: p,
        createdAt: y,
        attachments: G
      }), ie = ia(A, {
        id: ko("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: _e.id,
        streaming: !0,
        allowThinking: se.value && ln.value,
        contextSize: Sn.value
      });
      I.value = "", n.value = [], R.value = !0;
      const Te = zi(ie);
      Di(), await Rt({ force: !0 });
      const Ce = performance.now();
      try {
        await Bi(ie, A, Te), A && (A.title = A.title === t("localAi.newChatTitle") ? te.slice(0, 28) : A.title, A.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), A.updatedAtLabel = new Date(A.updatedAt).toLocaleString(), await we(A)), await v();
      } catch (Un) {
        if (H.value)
          A.title = A.title === t("localAi.newChatTitle") ? te.slice(0, 28) : A.title, A.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), A.updatedAtLabel = new Date(A.updatedAt).toLocaleString(), await we(A);
        else {
          I.value = p, n.value = G;
          const jt = Ni(Un);
          Ee.msg(`${t("localAi.chatFailed")}: ${jt}`, "error"), ie.error = jt, ie.interrupted = !!ie.content.trim(), ie.interrupted || (ie.content = jt), A && (A.title = A.title === t("localAi.newChatTitle") ? te.slice(0, 28) : A.title, A.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), A.updatedAtLabel = new Date(A.updatedAt).toLocaleString(), await we(A));
        }
        ie.streaming = !1, d(ie.id), ie.elapsedMs = performance.now() - Ce;
      } finally {
        R.value = !1, qr(Te), Us(), await Rt();
      }
    }, _f = (p) => {
      p.isComposing || p.keyCode === 229 || p.key === "Enter" && !p.shiftKey && (p.preventDefault(), ji());
    }, Vi = (p) => {
      (p.ctrlKey || p.metaKey) && p.key.toLowerCase() === "n" && !p.shiftKey && !p.altKey && (p.preventDefault(), be());
    }, Af = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, Tf = (p) => {
      const y = new Date(p), G = /* @__PURE__ */ new Date(), te = G.getTime() - y.getTime(), A = 24 * 60 * 60 * 1e3;
      return y.toDateString() === G.toDateString() ? y.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : te < A * 2 ? t("localAi.yesterday") : te < A * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(te / A))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(te / (A * 7)))
      });
    }, Hi = async (p) => {
      try {
        await navigator.clipboard.writeText(p.content), Ee.msg(t("localAi.copied"));
      } catch (y) {
        Ee.msg(`${t("common.operationFailed")}: ${y}`, "error");
      }
    }, Wi = async (p) => {
      if (R.value) return;
      const y = We.value;
      if (!y) return;
      const G = Z_(
        y.messages,
        y.currentNodeId,
        p
      );
      if (!G) return;
      const te = new Set(
        y.messages.filter((Ce) => G.deletedIds.has(Ce.id)).flatMap((Ce) => Ce.attachments ?? []).map((Ce) => Ce.id)
      );
      ee.value && te.has(ee.value.id) && Ut();
      const A = y.messages, _e = y.currentNodeId, ie = y.updatedAt, Te = y.updatedAtLabel;
      if (y.messages = G.messages, y.currentNodeId = G.currentNodeId, !y.messages.some((Ce) => !sr(Ce))) {
        await Kt(y.id);
        return;
      }
      y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString();
      try {
        await we(y);
      } catch (Ce) {
        y.messages = A, y.currentNodeId = _e, y.updatedAt = ie, y.updatedAtLabel = Te, Et.warn("[LocalAI] delete message failed", Ce), Ee.msg(`${t("common.operationFailed")}: ${String(Ce)}`, "error");
      }
    }, Ui = (p) => {
      R.value || (I.value = p.content, n.value = ra(p.attachments), We.value && p.parentId && (We.value.currentNodeId = p.parentId), dn());
    }, Gi = (p) => t("localAi.messageVersion", {
      current: p.siblingCurrentIndex + 1,
      total: p.siblingLeafNodeIds.length
    }), Ki = (p, y) => {
      if (R.value) return;
      const G = We.value;
      if (!G) return;
      const te = p.siblingCurrentIndex + y, A = p.siblingLeafNodeIds[te];
      A && (G.currentNodeId = A, ce.value = !0, Rt({ force: !0 }));
    }, Sf = async (p) => {
      const y = We.value;
      if (!y || R.value) return;
      const G = y.messages.find((Ce) => Ce.id === p);
      if (!G || G.role !== "assistant") return;
      const te = Ud(y.messages, G.id);
      if (!te.length) return;
      const A = (/* @__PURE__ */ new Date()).toISOString(), _e = /* @__PURE__ */ new Map(), ie = te.map((Ce, Un) => {
        const jt = ko(Un === 0 ? "root" : Ce.role);
        return _e.set(Ce.id, jt), {
          ...Ce,
          id: jt,
          parentId: Ce.parentId ? _e.get(Ce.parentId) ?? null : null,
          childIds: [],
          streaming: !1,
          attachments: ra(Ce.attachments)
        };
      });
      for (let Ce = 0; Ce < ie.length - 1; Ce += 1)
        ie[Ce].childIds = [ie[Ce + 1].id];
      const Te = {
        id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: `${y.title} / ${t("localAi.branchChat")}`.slice(0, 48),
        createdAt: A,
        updatedAt: A,
        updatedAtLabel: At(),
        currentNodeId: ie.at(-1)?.id ?? null,
        messages: ie
      };
      k.value.unshift(Te), P.value = Te.id, I.value = "", n.value = [], ce.value = !0, await we(Te), await Rt({ force: !0 }), Ee.msg(t("localAi.branchCreated"));
    }, Cf = async (p) => {
      const y = We.value;
      if (!y || R.value) return;
      const G = y.messages.find((ie) => ie.id === p);
      if (!G || G.role !== "assistant" || !G.parentId) return;
      y.currentNodeId = G.parentId;
      const te = ia(y, {
        id: ko("assistant"),
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        parentId: G.parentId,
        streaming: !0,
        allowThinking: se.value && ln.value
      });
      R.value = !0;
      const A = zi(te);
      Di(), await Rt({ force: !0 });
      const _e = performance.now();
      try {
        await Bi(te, y, A), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
      } catch (ie) {
        if (H.value)
          y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        else {
          const Te = Ni(ie);
          Ee.msg(`${t("localAi.chatFailed")}: ${Te}`, "error"), te.error = Te, te.interrupted = !!te.content.trim(), te.interrupted || (te.content = Te), y.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), y.updatedAtLabel = new Date(y.updatedAt).toLocaleString(), await we(y);
        }
        te.streaming = !1, d(te.id), te.elapsedMs = performance.now() - _e;
      } finally {
        R.value = !1, qr(A), Us(), await Rt();
      }
    };
    return ot(async () => {
      window.addEventListener("local-ai-prompt-ready", un), window.addEventListener(
        "local-ai-new-chat-requested",
        Mo
      ), Hn(
        localStorage.getItem(Ar),
        pa(localStorage)
      ), oo(), typeof ResizeObserver < "u" && (bt = new ResizeObserver(() => {
        ce.value && Rt();
      })), window.addEventListener("pointerup", Gt), window.addEventListener("pointercancel", Gt), window.addEventListener("keydown", Vi);
      try {
        await Q();
      } finally {
        const [p, y] = await Promise.all([
          Po(),
          $e()
        ]);
        ue = !0;
        const G = !!p || Ae || pa(localStorage), te = p || fe || localStorage.getItem(Ar);
        fe = null, Ae = !1, te ? Hn(te, G) : (y || De || rT(localStorage)) && cn();
      }
      ze = setInterval(() => {
        v().catch(
          (p) => Et.warn("[LocalAI] status timer failed", p)
        );
      }, 8e3);
    }), pe(ln, (p) => {
      p || (se.value = !1);
    }), Ma(() => {
      ue = !1, fe = null, Ae = !1, De = !1, Ge = null, window.removeEventListener("local-ai-prompt-ready", un), window.removeEventListener(
        "local-ai-new-chat-requested",
        Mo
      ), ze && clearInterval(ze), Ke !== null && (window.cancelAnimationFrame(Ke), Ke = null), bt?.disconnect(), bt = null, qe = null, window.removeEventListener("pointerup", Gt), window.removeEventListener("pointercancel", Gt), window.removeEventListener("keydown", Vi), V.value && Xs(V.value, {
        providerId: Zt
      }), u(), Us();
    }), (p, y) => {
      const G = Rd, te = $d;
      return T(), D(
        "main",
        {
          class: z([
            "local-ai-chat-shell",
            i(j) ? "local-ai-chat-shell--sidebar-collapsed" : "",
            i(R) ? "local-ai-chat-shell--sending" : ""
          ])
        },
        [
          f(
            "aside",
            {
              class: z([
                "chat-sidebar",
                i(j) ? "chat-sidebar--collapsed" : ""
              ])
            },
            [
              f("header", aT, [
                f("div", iT, [
                  f("div", lT, [
                    f(
                      "h2",
                      null,
                      E(i(t)("localAi.chatTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      E(i(t)("localAi.chatPrivacySubtitle")),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                f("button", {
                  class: "icon-action-btn sidebar-collapse-btn",
                  type: "button",
                  title: i(j) ? i(t)("localAi.expandSidebar") : i(t)("localAi.collapseSidebar"),
                  "aria-pressed": i(j),
                  onClick: y[0] || (y[0] = (A) => j.value = !i(j))
                }, [
                  _(i(Qi), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, cT)
              ]),
              f("div", uT, [
                f("button", {
                  class: "sidebar-new-chat-btn",
                  type: "button",
                  disabled: i(xe),
                  onClick: be
                }, [
                  _(i(Ks), {
                    theme: "outline",
                    size: "18"
                  }),
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.newChat")),
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
                ], 8, dT),
                f("label", fT, [
                  _(i(op), {
                    theme: "outline",
                    size: "16"
                  }),
                  it(f("input", {
                    "onUpdate:modelValue": y[1] || (y[1] = (A) => en(C) ? C.value = A : null),
                    placeholder: i(t)("localAi.searchHistory")
                  }, null, 8, pT), [
                    [Lr, i(C)]
                  ]),
                  i(C) ? (T(), D(
                    "span",
                    mT,
                    E(i(Vn).length),
                    1
                    /* TEXT */
                  )) : Y("v-if", !0)
                ])
              ]),
              f("section", hT, [
                f("div", gT, [
                  f(
                    "div",
                    vT,
                    E(i(t)("localAi.recent")),
                    1
                    /* TEXT */
                  ),
                  f("div", bT, [
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: i(t)("localAi.clearAllChats"),
                      disabled: i(xe) || i(B) || !i(k).length,
                      onClick: y[2] || (y[2] = (A) => ne.value = !0)
                    }, [
                      _(i(ur), {
                        theme: "outline",
                        size: "14"
                      })
                    ], 8, yT),
                    f("button", {
                      class: "icon-action-btn",
                      type: "button",
                      title: i(t)("plugins.refresh"),
                      disabled: i(xe) || i(q) || i(B),
                      onClick: Q
                    }, [
                      _(i(dr), {
                        class: z({ "animate-spin": i(q) }),
                        theme: "outline",
                        size: "14"
                      }, null, 8, ["class"])
                    ], 8, wT)
                  ])
                ]),
                i(Vn).length ? (T(), D("div", kT, [
                  (T(!0), D(
                    at,
                    null,
                    xn(i(Vn), (A) => (T(), D("div", {
                      key: A.id,
                      class: z([
                        "chat-list-item",
                        i(P) === A.id ? "active" : "",
                        i(xe) ? "disabled" : ""
                      ]),
                      role: "button",
                      tabindex: i(xe) ? -1 : 0,
                      "aria-disabled": i(xe),
                      onClick: (_e) => Pt(A.id),
                      onKeydown: In(Ze((_e) => Pt(A.id), ["prevent"]), ["enter"])
                    }, [
                      f("span", AT, [
                        it((T(), D("span", TT, [
                          f("span", ST, [
                            f(
                              "span",
                              CT,
                              E(A.title),
                              1
                              /* TEXT */
                            ),
                            f(
                              "span",
                              ET,
                              E(A.title),
                              1
                              /* TEXT */
                            )
                          ])
                        ])), [
                          [Ft]
                        ]),
                        f(
                          "span",
                          xT,
                          E(Tf(A.updatedAt)),
                          1
                          /* TEXT */
                        )
                      ]),
                      f("button", {
                        class: "chat-item-delete",
                        type: "button",
                        title: i(t)("common.delete"),
                        disabled: i(xe),
                        onClick: Ze((_e) => Kt(A.id), ["stop"])
                      }, [
                        _(i(ur), {
                          theme: "outline",
                          size: "13"
                        })
                      ], 8, IT)
                    ], 42, _T))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (T(), D(
                  "div",
                  LT,
                  E(i(t)("common.empty")),
                  1
                  /* TEXT */
                ))
              ]),
              f("footer", OT, [
                f("div", $T, [
                  f("span", RT, [
                    _(i(qs), {
                      theme: "outline",
                      size: "15"
                    })
                  ]),
                  f("span", PT, [
                    f(
                      "strong",
                      null,
                      E(i(kt)),
                      1
                      /* TEXT */
                    ),
                    f(
                      "small",
                      null,
                      E(i(me)?.healthy ? i(Ot) : i(t)("localAi.onDemandHint")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f(
                    "span",
                    {
                      class: z([
                        "service-status-dot",
                        i(me)?.healthy ? "ready" : "stopped"
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
                  onClick: Af
                }, [
                  _(i(Zc), {
                    theme: "outline",
                    size: "16"
                  }),
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.settings")),
                    1
                    /* TEXT */
                  ),
                  _(i(el), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ])
            ],
            2
            /* CLASS */
          ),
          f("section", MT, [
            f("header", NT, [
              f("div", DT, [
                i(j) ? (T(), D("button", {
                  key: 0,
                  class: "panel-sidebar-toggle",
                  type: "button",
                  title: i(t)("localAi.expandSidebar"),
                  onClick: y[3] || (y[3] = (A) => j.value = !1)
                }, [
                  _(i(Qi), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, zT)) : Y("v-if", !0),
                f("div", FT, [
                  _(i(qs), {
                    theme: "outline",
                    size: "18"
                  })
                ]),
                f("div", BT, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.chatSubtitle")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "h1",
                    null,
                    E(i(ft)),
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
                ref: Oe,
                class: "message-list",
                onScroll: Bt,
                onWheelPassive: $t,
                onPointerdown: Tt,
                onTouchstartPassive: zo,
                onTouchmovePassive: Ws,
                onTouchend: Ur
              },
              [
                i(go).length ? Y("v-if", !0) : (T(), D("section", jT, [
                  f("div", VT, [
                    f("div", HT, [
                      _(i(np), {
                        theme: "outline",
                        size: "30"
                      })
                    ]),
                    f("span", WT, [
                      y[18] || (y[18] = f(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      )),
                      pt(
                        " " + E(i(t)("localAi.privateWorkspace")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f(
                      "h2",
                      null,
                      E(i(t)("localAi.chatWelcomeTitle")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "p",
                      null,
                      E(i(t)("localAi.chatWelcomeDesc")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", UT, [
                    f("div", GT, [
                      f(
                        "span",
                        null,
                        E(i(t)("localAi.quickStart")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "small",
                        null,
                        E(i(t)("localAi.quickStartHint")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", KT, [
                      (T(), D(
                        at,
                        null,
                        xn(K, (A) => f("button", {
                          key: A.title,
                          class: "quick-prompt-card",
                          type: "button",
                          onClick: (_e) => Do(A.title)
                        }, [
                          f("span", ZT, [
                            (T(), re(tn(A.icon), {
                              theme: "outline",
                              size: "17"
                            }))
                          ]),
                          f("span", YT, [
                            f(
                              "strong",
                              null,
                              E(i(t)(A.title)),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              E(i(t)(A.description)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _(i(el), {
                            theme: "outline",
                            size: "14"
                          })
                        ], 8, qT)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ])
                ])),
                (T(!0), D(
                  at,
                  null,
                  xn(i(Fn), (A, _e) => (T(), D(
                    at,
                    {
                      key: A.message.id
                    },
                    [
                      ff(_e) ? (T(), D("div", XT, [
                        f(
                          "span",
                          null,
                          E(pf(A.message)),
                          1
                          /* TEXT */
                        )
                      ])) : Y("v-if", !0),
                      f(
                        "article",
                        {
                          class: z(["message-row", `message-row--${A.message.role}`])
                        },
                        [
                          f("div", QT, [
                            A.message.role === "assistant" ? (T(), re(i(qs), {
                              key: 0,
                              theme: "outline",
                              size: "18"
                            })) : (T(), D(
                              "span",
                              JT,
                              E(i(t)("localAi.youShort")),
                              1
                              /* TEXT */
                            ))
                          ]),
                          f("div", eS, [
                            A.message.role === "user" ? (T(), D(
                              at,
                              { key: 0 },
                              [
                                f("div", tS, [
                                  A.message.content ? (T(), D(
                                    "div",
                                    nS,
                                    E(A.message.content),
                                    1
                                    /* TEXT */
                                  )) : Y("v-if", !0),
                                  A.message.attachments?.length ? (T(), D("div", oS, [
                                    (T(!0), D(
                                      at,
                                      null,
                                      xn(A.message.attachments, (ie) => (T(), D(
                                        "div",
                                        {
                                          key: ie.id,
                                          class: z([
                                            "message-attachment-chip",
                                            ie.type === "image" && ie.dataUrl ? "message-attachment-chip--image" : ""
                                          ])
                                        },
                                        [
                                          ie.type === "image" && ie.dataUrl ? (T(), D("button", {
                                            key: 0,
                                            class: "attachment-image-preview-btn",
                                            type: "button",
                                            title: ie.name,
                                            "aria-label": i(t)("localAi.previewAttachment"),
                                            onClick: (Te) => Bn(ie)
                                          }, [
                                            f("img", {
                                              src: ie.dataUrl,
                                              alt: ie.name
                                            }, null, 8, sS)
                                          ], 8, rS)) : (T(), D(
                                            "span",
                                            aS,
                                            E(ie.type === "text" ? "TXT" : "FILE"),
                                            1
                                            /* TEXT */
                                          )),
                                          ie.type === "image" && ie.dataUrl ? Y("v-if", !0) : (T(), D(
                                            "span",
                                            iS,
                                            E(ie.name),
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
                                A.message.streaming ? Y("v-if", !0) : (T(), D("div", lS, [
                                  f("button", {
                                    type: "button",
                                    title: i(t)("common.copy"),
                                    onClick: (ie) => Hi(A.message)
                                  }, [
                                    _(i(Yi), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, cS),
                                  f("button", {
                                    type: "button",
                                    title: i(t)("common.edit"),
                                    onClick: (ie) => Ui(A.message)
                                  }, [
                                    _(i(Ks), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, uS),
                                  f("button", {
                                    type: "button",
                                    title: i(t)("common.delete"),
                                    onClick: (ie) => Wi(A.message.id)
                                  }, [
                                    _(i(ur), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, dS)
                                ]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (T(), D(
                              at,
                              { key: 1 },
                              [
                                f("div", fS, [
                                  f(
                                    "span",
                                    null,
                                    E(i(Ot)),
                                    1
                                    /* TEXT */
                                  ),
                                  A.message.streaming ? (T(), D(
                                    "small",
                                    pS,
                                    E(mf(A.message)),
                                    1
                                    /* TEXT */
                                  )) : Y("v-if", !0)
                                ]),
                                f(
                                  "div",
                                  {
                                    class: z(["assistant-card", {
                                      "assistant-card--streaming": A.message.streaming
                                    }])
                                  },
                                  [
                                    A.message.content ? (T(), D("div", mS, [
                                      A.message.allowThinking && i(w)(A.message.content) ? (T(), D("details", {
                                        key: 0,
                                        class: "reasoning-panel",
                                        open: A.message.streaming && Fo(A.message)
                                      }, [
                                        f("summary", null, [
                                          f("span", gS, [
                                            _(i(Zi), {
                                              theme: "outline",
                                              size: "14"
                                            }),
                                            pt(
                                              " " + E(uf(A.message)),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          A.message.streaming ? (T(), D(
                                            "small",
                                            vS,
                                            E(Fo(A.message) ? i(t)("localAi.thinking") : i(t)("localAi.generating")),
                                            1
                                            /* TEXT */
                                          )) : Y("v-if", !0)
                                        ]),
                                        f("div", {
                                          class: "message-content markdown-body",
                                          onClick: y[4] || (y[4] = //@ts-ignore
                                          (...ie) => i(m) && i(m)(...ie)),
                                          innerHTML: i(b)(A.message, "reasoning")
                                        }, null, 8, bS)
                                      ], 8, hS)) : Y("v-if", !0),
                                      i(g)(A.message.content) ? (T(), D("div", {
                                        key: 1,
                                        class: "message-content markdown-body",
                                        onClick: y[5] || (y[5] = //@ts-ignore
                                        (...ie) => i(m) && i(m)(...ie)),
                                        innerHTML: i(b)(A.message, "answer")
                                      }, null, 8, yS)) : Y("v-if", !0)
                                    ])) : (T(), D(
                                      "div",
                                      {
                                        key: 1,
                                        class: z([
                                          "message-content",
                                          A.message.stopped ? "" : "loading-text"
                                        ])
                                      },
                                      E(A.message.stopped ? i(t)("localAi.generationStopped") : hf(A.message)),
                                      3
                                      /* TEXT, CLASS */
                                    ))
                                  ],
                                  2
                                  /* CLASS */
                                ),
                                A.message.content ? (T(), D("div", wS, [
                                  f(
                                    "span",
                                    kS,
                                    E(i(t)("localAi.contextLabel")) + ": " + E(so(A.message).context) + "/" + E(so(A.message).contextMax) + " (" + E(so(A.message).contextPercent) + "%) ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    _S,
                                    E(i(t)("localAi.outputLabel")) + ": " + E(so(A.message).output) + "/" + E(so(A.message).outputMax),
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    AS,
                                    E(so(A.message).seconds) + "s ",
                                    1
                                    /* TEXT */
                                  ),
                                  f(
                                    "span",
                                    TS,
                                    E(so(A.message).speed) + " t/s ",
                                    1
                                    /* TEXT */
                                  ),
                                  A.message.streaming ? Y("v-if", !0) : (T(), D(
                                    "span",
                                    SS,
                                    E(Oi(A.message)),
                                    1
                                    /* TEXT */
                                  ))
                                ])) : Y("v-if", !0),
                                Mi(A.message) ? (T(), D(
                                  "div",
                                  CS,
                                  E(Mi(A.message)),
                                  1
                                  /* TEXT */
                                )) : Y("v-if", !0),
                                A.message.streaming ? Y("v-if", !0) : (T(), D("div", ES, [
                                  A.siblingLeafNodeIds.length > 1 ? (T(), D("div", {
                                    key: 0,
                                    class: "message-version-switcher",
                                    title: Gi(A),
                                    "aria-label": Gi(A)
                                  }, [
                                    f("button", {
                                      type: "button",
                                      disabled: A.siblingCurrentIndex <= 0,
                                      title: i(t)("localAi.previousVersion"),
                                      onClick: (ie) => Ki(A, -1)
                                    }, " ‹ ", 8, IS),
                                    f(
                                      "span",
                                      null,
                                      E(A.siblingCurrentIndex + 1) + " / " + E(A.siblingLeafNodeIds.length),
                                      1
                                      /* TEXT */
                                    ),
                                    f("button", {
                                      type: "button",
                                      disabled: A.siblingCurrentIndex >= A.siblingLeafNodeIds.length - 1,
                                      title: i(t)("localAi.nextVersion"),
                                      onClick: (ie) => Ki(A, 1)
                                    }, " › ", 8, LS)
                                  ], 8, xS)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: i(t)("common.copy"),
                                    onClick: (ie) => Hi(A.message)
                                  }, [
                                    _(i(Yi), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, OS),
                                  A.message.role === "assistant" ? (T(), D("button", {
                                    key: 1,
                                    type: "button",
                                    title: i(t)("localAi.regenerate"),
                                    onClick: (ie) => Cf(A.message.id)
                                  }, [
                                    _(i(dr), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, $S)) : Y("v-if", !0),
                                  A.message.role === "assistant" ? (T(), D("button", {
                                    key: 2,
                                    type: "button",
                                    title: i(t)("localAi.branchChat"),
                                    onClick: (ie) => Sf(A.message.id)
                                  }, [
                                    _(i(Jf), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, RS)) : Y("v-if", !0),
                                  f("button", {
                                    type: "button",
                                    title: i(t)("common.edit"),
                                    onClick: (ie) => Ui(A.message)
                                  }, [
                                    _(i(Ks), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, PS),
                                  f("button", {
                                    type: "button",
                                    title: i(t)("common.delete"),
                                    onClick: (ie) => Wi(A.message.id)
                                  }, [
                                    _(i(ur), {
                                      theme: "outline",
                                      size: "14"
                                    })
                                  ], 8, MS)
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
            i($) ? (T(), D("button", {
              key: 0,
              class: "scroll-bottom-btn",
              type: "button",
              title: i(t)("localAi.jumpToLatest"),
              onClick: ro
            }, [
              _(i(Xf), {
                theme: "outline",
                size: "15"
              }),
              f(
                "span",
                null,
                E(i(t)("localAi.jumpToLatest")),
                1
                /* TEXT */
              )
            ], 8, NS)) : Y("v-if", !0),
            f("div", DS, [
              f(
                "form",
                {
                  class: z([
                    "chat-input-card",
                    i(de) ? "chat-input-card--focused" : "",
                    i(O) ? "chat-input-card--enhancing" : ""
                  ]),
                  onDragover: y[11] || (y[11] = Ze(() => {
                  }, ["prevent"])),
                  onDrop: y[12] || (y[12] = Ze(
                    //@ts-ignore
                    (...A) => i(s) && i(s)(...A),
                    ["prevent"]
                  )),
                  onSubmit: Ze(ji, ["prevent"]),
                  onFocusin: y[13] || (y[13] = (A) => de.value = !0),
                  onFocusout: y[14] || (y[14] = (A) => de.value = !1)
                },
                [
                  i(n).length ? (T(), D("div", zS, [
                    (T(!0), D(
                      at,
                      null,
                      xn(i(n), (A) => (T(), D(
                        "div",
                        {
                          key: A.id,
                          class: z([
                            "attachment-preview-item",
                            `attachment-preview-item--${A.status}`
                          ])
                        },
                        [
                          A.type === "image" && A.dataUrl ? (T(), D("button", {
                            key: 0,
                            class: "attachment-preview-image-btn",
                            type: "button",
                            title: A.name,
                            "aria-label": i(t)("localAi.previewAttachment"),
                            onClick: (_e) => Bn(A)
                          }, [
                            f("img", {
                              src: A.dataUrl,
                              alt: A.name
                            }, null, 8, BS)
                          ], 8, FS)) : (T(), D(
                            "span",
                            jS,
                            E(A.type === "text" ? "TXT" : "FILE"),
                            1
                            /* TEXT */
                          )),
                          f("span", VS, [
                            f(
                              "strong",
                              null,
                              E(A.name),
                              1
                              /* TEXT */
                            ),
                            f(
                              "small",
                              null,
                              E(i(jd)(A.size)) + " · " + E(i(r)(A)),
                              1
                              /* TEXT */
                            )
                          ]),
                          f("button", {
                            class: "attachment-remove-btn",
                            type: "button",
                            title: i(t)("common.delete"),
                            onClick: (_e) => jn(A.id)
                          }, [
                            _(i(ur), {
                              theme: "outline",
                              size: "12"
                            })
                          ], 8, HS)
                        ],
                        2
                        /* CLASS */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : Y("v-if", !0),
                  it(f("textarea", {
                    ref_key: "composerInputRef",
                    ref: L,
                    "onUpdate:modelValue": y[6] || (y[6] = (A) => en(I) ? I.value = A : null),
                    class: "chat-input",
                    rows: "1",
                    placeholder: i(t)("localAi.chatPlaceholder"),
                    readonly: i(O),
                    "aria-busy": i(O),
                    onKeydown: _f,
                    onPaste: y[7] || (y[7] = //@ts-ignore
                    (...A) => i(a) && i(a)(...A))
                  }, null, 40, WS), [
                    [Lr, i(I)]
                  ]),
                  f("div", US, [
                    f("div", GS, [
                      f("button", {
                        class: "composer-tool-btn",
                        type: "button",
                        title: i(t)("localAi.addAttachment"),
                        disabled: i(o),
                        onClick: y[8] || (y[8] = //@ts-ignore
                        (...A) => i(l) && i(l)(...A))
                      }, [
                        i(o) ? (T(), re(i(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "16"
                        })) : (T(), re(i(ep), {
                          key: 1,
                          theme: "outline",
                          size: "16"
                        }))
                      ], 8, KS),
                      f("button", {
                        class: z([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          "composer-tool-btn--enhance",
                          i(O) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        disabled: !i(dt),
                        title: i(I).trim() ? i(t)("localAi.enhancePromptDesc") : i(t)("localAi.enhanceNeedsPrompt"),
                        onClick: lr
                      }, [
                        i(O) ? (T(), re(i(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "14"
                        })) : (T(), re(i(Ji), {
                          key: 1,
                          theme: "outline",
                          size: "15"
                        })),
                        f(
                          "span",
                          null,
                          E(i(t)("localAi.enhancePrompt")),
                          1
                          /* TEXT */
                        )
                      ], 10, qS),
                      i(ln) ? (T(), D("button", {
                        key: 0,
                        class: z([
                          "composer-tool-btn",
                          "composer-tool-btn--wide",
                          i(se) ? "composer-tool-btn--active" : ""
                        ]),
                        type: "button",
                        title: i(se) ? i(t)("localAi.thinkingEnabled") : i(t)("localAi.thinkingDisabled"),
                        "aria-pressed": i(se),
                        onClick: y[9] || (y[9] = (A) => se.value = !i(se))
                      }, [
                        _(i(Zi), {
                          theme: "outline",
                          size: "15"
                        }),
                        f(
                          "span",
                          null,
                          E(i(t)("localAi.reasoningTitle")),
                          1
                          /* TEXT */
                        )
                      ], 10, ZS)) : Y("v-if", !0)
                    ]),
                    f("div", YS, [
                      f("div", XS, [
                        _(i(Xi), {
                          theme: "outline",
                          size: "14"
                        }),
                        _(te, {
                          modelValue: i(U),
                          "onUpdate:modelValue": y[10] || (y[10] = (A) => en(U) ? U.value = A : null),
                          class: "chat-model-select",
                          size: "small",
                          disabled: i(R) || !i(_t).length,
                          placeholder: i(Ot),
                          "popper-class": "chat-model-select-popper",
                          onChange: cr
                        }, {
                          default: J(() => [
                            (T(!0), D(
                              at,
                              null,
                              xn(i(_t), (A) => (T(), re(G, {
                                key: A,
                                label: An(A),
                                value: A
                              }, {
                                default: J(() => [
                                  f("span", QS, [
                                    _(i(Xi), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    f(
                                      "span",
                                      JS,
                                      E(An(A)),
                                      1
                                      /* TEXT */
                                    ),
                                    i(U) === A ? (T(), re(i(Zf), {
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
                            i(_t).length ? Y("v-if", !0) : (T(), re(G, {
                              key: 0,
                              label: i(Ot),
                              value: ""
                            }, null, 8, ["label"]))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "disabled", "placeholder"])
                      ]),
                      f(
                        "span",
                        e4,
                        E(i(t)("localAi.inputHint")),
                        1
                        /* TEXT */
                      ),
                      i(V) ? (T(), D("button", {
                        key: 0,
                        class: z(["send-btn send-btn--stop", { "send-btn--stopping": i(H) }]),
                        type: "button",
                        disabled: i(H),
                        title: i(H) ? i(t)("localAi.stoppingGeneration") : i(t)("localAi.stopGenerating"),
                        "aria-label": i(H) ? i(t)("localAi.stoppingGeneration") : i(t)("localAi.stopGenerating"),
                        onClick: wf
                      }, [
                        i(H) ? (T(), re(i(dr), {
                          key: 0,
                          class: "animate-spin",
                          theme: "outline",
                          size: "15"
                        })) : (T(), re(i(sp), {
                          key: 1,
                          theme: "filled",
                          size: "11"
                        }))
                      ], 10, t4)) : (T(), D("button", {
                        key: 1,
                        class: "send-btn",
                        type: "submit",
                        disabled: !i(ke),
                        title: i(t)("localAi.send"),
                        "aria-label": i(t)("localAi.send")
                      }, [
                        _(i(rp), {
                          theme: "outline",
                          size: "15"
                        })
                      ], 8, n4))
                    ])
                  ])
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ]),
          _(jA, {
            modelValue: i(X),
            "onUpdate:modelValue": y[15] || (y[15] = (A) => en(X) ? X.value = A : null),
            attachment: i(ee)
          }, null, 8, ["modelValue", "attachment"]),
          _(i(w_), {
            modelValue: i(ne),
            "onUpdate:modelValue": y[16] || (y[16] = (A) => en(ne) ? ne.value = A : null),
            title: i(t)("localAi.clearAllChats"),
            "confirm-text": i(t)("common.delete"),
            "cancel-text": i(t)("common.cancel"),
            loading: i(B),
            type: "danger",
            onConfirm: qt
          }, {
            default: J(() => [
              f(
                "div",
                null,
                E(i(t)("localAi.clearAllChatsConfirm")),
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
}), l4 = /* @__PURE__ */ $o(i4, [["__scopeId", "data-v-bcd9804f"]]), c4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l4
}, Symbol.toStringTag, { value: "Module" })), u4 = { class: "settings-panel local-ai-settings-shell" }, d4 = { class: "panel-header local-ai-header" }, f4 = { class: "local-ai-frame local-ai-header__inner" }, p4 = { class: "local-ai-heading" }, m4 = { class: "panel-title" }, h4 = { class: "local-ai-desc" }, g4 = { class: "header-actions" }, v4 = {
  key: 0,
  class: "panel-content local-ai-content"
}, b4 = { class: "local-ai-frame" }, y4 = { class: "settings-section" }, w4 = { class: "settings-section__header" }, k4 = { class: "status-overview" }, _4 = { class: "status-list" }, A4 = ["title"], T4 = ["title"], S4 = ["title"], C4 = { class: "memory-summary__title" }, E4 = { class: "memory-summary__metrics" }, x4 = { class: "readiness-grid" }, I4 = { class: "readiness-item" }, L4 = { class: "readiness-item" }, O4 = { class: "readiness-item" }, $4 = { class: "readiness-item" }, R4 = { class: "readiness-item" }, P4 = { class: "readiness-item" }, M4 = { class: "setting-row service-setting" }, N4 = { class: "setting-label" }, D4 = { class: "setting-title" }, z4 = { class: "setting-desc" }, F4 = { class: "setting-control service-control" }, B4 = { class: "service-controls" }, j4 = {
  key: 0,
  class: "service-url"
}, V4 = { class: "settings-section" }, H4 = { class: "settings-section__header" }, W4 = { class: "field-stack" }, U4 = ["title"], G4 = { class: "setting-label" }, K4 = { class: "setting-title" }, q4 = { class: "setting-desc" }, Z4 = { class: "setting-control" }, Y4 = { class: "path-control" }, X4 = { class: "model-pair-grid" }, Q4 = ["title"], J4 = { class: "setting-label" }, eC = { class: "setting-title" }, tC = { class: "setting-desc" }, nC = { class: "setting-control" }, oC = ["title"], rC = { class: "setting-label" }, sC = { class: "setting-title" }, aC = { class: "setting-desc" }, iC = { class: "setting-control" }, lC = ["title"], cC = { class: "setting-label" }, uC = { class: "setting-title" }, dC = { class: "setting-desc" }, fC = { class: "setting-control" }, pC = { class: "path-control" }, mC = ["placeholder"], hC = { class: "settings-section" }, gC = { class: "settings-section__header" }, vC = { class: "parameter-grid" }, bC = ["title"], yC = ["title"], wC = ["title"], kC = ["title"], _C = ["title"], AC = ["title"], TC = { class: "settings-section" }, SC = { class: "settings-section__header" }, CC = { class: "switch-grid" }, EC = ["title"], xC = { class: "switch-field__label" }, IC = ["title"], LC = { class: "switch-field__label" }, OC = ["title"], $C = { class: "switch-field__label" }, RC = { class: "settings-section" }, PC = { class: "settings-section__header" }, MC = { class: "switch-grid switch-grid--two" }, NC = ["title"], DC = { class: "switch-field__label" }, zC = ["title"], FC = { class: "switch-field__label" }, BC = ["title"], jC = ["title"], VC = { class: "settings-section" }, HC = { class: "settings-section__header" }, WC = { class: "parameter-grid parameter-grid--three" }, UC = ["title"], GC = ["title"], KC = ["title"], qC = ["title"], ZC = ["title"], YC = ["title"], XC = ["title"], QC = ["title"], JC = {
  key: 1,
  class: "local-ai-save-bar"
}, e3 = { class: "local-ai-frame settings-footer" }, t3 = ["title"], n3 = /* @__PURE__ */ oe({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Dr(), n = M(null), o = M(null), r = M(null), s = M(null), a = M(!1), l = M(!1), c = M(!1), u = M(!1), d = M(!1);
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
    ), P = S(() => r.value?.healthy ? t("localAi.serviceHealthy") : r.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), j = S(
      () => o.value ? o.value.available ? "ok" : "danger" : "muted"
    ), I = S(
      () => s.value ? g.value ? "ok" : "danger" : "muted"
    ), L = S(() => r.value ? r.value.healthy ? "ok" : r.value.running ? "warn" : "danger" : "muted"), O = (W) => W.split(/[\\/]+/).pop() ?? W, R = S(() => {
      const U = O(
        n.value?.modelPath ?? s.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return U ? Number(U[1]) : 4;
    }), q = S(() => {
      const W = n.value;
      if (!W)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown"),
          level: "warn"
        };
      const U = Math.max(1.4, R.value * 0.92), me = Math.min(1, Math.max(0, W.gpuLayers) / 32), Oe = W.ctxSize / 8192 * 0.38 * (W.kvOffload ? 1 : 0.12), ee = W.batchSize / 512 * 0.18, X = U * me + Oe + ee, He = U * (1 - me) + W.ctxSize / 8192 * 0.22, ze = X + He, ut = W.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : W.ctxSize >= 32768 || W.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced"), Ke = ze >= 24 || W.ctxSize >= 32768 || W.batchSize >= 2048 ? "danger" : ze >= 16 || W.ctxSize >= 16384 || W.batchSize >= 1024 ? "warn" : "ok";
      return {
        gpuGb: X.toFixed(2),
        totalGb: ze.toFixed(2),
        bottleneck: ut,
        level: Ke
      };
    }), B = (W) => t(`localAi.paramHints.${W}`), ne = (W) => ({
      "tone-ok": W === "ok",
      "tone-warn": W === "warn",
      "tone-danger": W === "danger",
      "tone-muted": W === "muted" || !W
    }), H = (W) => ne(W ? "ok" : "danger"), se = async () => {
      o.value = await pp();
    }, de = async () => {
      r.value = await za();
    }, ce = async () => {
      n.value && (s.value = await Qc(n.value), !n.value.modelPath && s.value.selectedModelPath && (n.value.modelPath = s.value.selectedModelPath), !n.value.mmprojPath && s.value.selectedMmprojPath && (n.value.mmprojPath = s.value.selectedMmprojPath));
    }, $ = async () => {
      a.value = !0;
      try {
        n.value = await Xc(), await Promise.all([se(), ce(), de()]);
      } catch (W) {
        Et.error("[LocalAI] refresh settings failed", W), Ee.msg(`${t("localAi.refreshFailed")}: ${W}`, "error");
      } finally {
        a.value = !1;
      }
    }, V = async () => {
      if (n.value)
        try {
          await ss(n.value);
        } catch (W) {
          Et.warn("[LocalAI] autosave failed", W);
        }
    }, F = async () => {
      if (n.value) {
        l.value = !0;
        try {
          n.value = await ss(n.value), await Promise.all([se(), ce(), de()]), Ee.msg(t("localAi.configSaved"));
        } catch (W) {
          Ee.msg(`${t("localAi.configSaveFailed")}: ${W}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, ue = async () => {
      const W = await Sa({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !W || Array.isArray(W) || !n.value || (n.value.modelDir = W, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await ce());
    }, fe = async () => {
      const W = await Sa({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !W || Array.isArray(W) || !n.value || (n.value.runtimePath = W, await V(), await se());
    }, Ae = async () => {
      if (n.value) {
        c.value = !0;
        try {
          await ss(n.value), r.value = await Jc(n.value), Ee.msg(t("localAi.serviceStarted"));
        } catch (W) {
          Ee.msg(`${t("localAi.serviceStartFailed")}: ${W}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, De = async () => {
      u.value = !0;
      try {
        await F(), r.value = await eu(), Ee.msg(t("localAi.serviceRestarted"));
      } catch (W) {
        Ee.msg(`${t("localAi.serviceRestartFailed")}: ${W}`, "error");
      } finally {
        u.value = !1;
      }
    }, Ge = async () => {
      d.value = !0;
      try {
        await mp(), await de(), Ee.msg(t("localAi.serviceStoppedMsg"));
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
    }), Ma(() => {
      m && clearInterval(m);
    }), (W, U) => {
      const me = Rd, Oe = $d, ee = Sk;
      return T(), D("div", u4, [
        f("header", d4, [
          f("div", f4, [
            f("div", p4, [
              f(
                "h3",
                m4,
                E(i(t)("localAi.title")),
                1
                /* TEXT */
              ),
              f(
                "p",
                h4,
                E(i(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              )
            ]),
            f("div", g4, [
              _(i(Jt), {
                size: "small",
                plain: "",
                onClick: ve
              }, {
                default: J(() => [
                  pt(
                    E(i(t)("localAi.openChat")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              _(i(Jt), {
                size: "small",
                loading: i(a),
                onClick: $
              }, {
                default: J(() => [
                  pt(
                    E(i(t)("plugins.refresh")),
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
        i(n) ? (T(), D("main", v4, [
          f("div", b4, [
            f("section", y4, [
              f("div", w4, [
                f(
                  "h4",
                  null,
                  E(i(t)("localAi.runtimeOverview")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(i(t)("localAi.runtimeOverviewDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", k4, [
                f("div", _4, [
                  f("div", {
                    class: z(["status-item", ne(i(j))]),
                    title: i(C)
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
                      E(i(C)),
                      1
                      /* TEXT */
                    )
                  ], 10, A4),
                  f("div", {
                    class: z(["status-item", ne(i(I))]),
                    title: i(k)
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
                      E(i(k)),
                      1
                      /* TEXT */
                    )
                  ], 10, T4),
                  f("div", {
                    class: z(["status-item", ne(i(L))]),
                    title: i(P)
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
                      E(i(P)),
                      1
                      /* TEXT */
                    )
                  ], 10, S4)
                ]),
                f(
                  "div",
                  {
                    class: z(["memory-summary", ne(i(q).level)])
                  },
                  [
                    f("div", C4, [
                      f(
                        "span",
                        null,
                        E(i(t)("localAi.estimatedMemory")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "small",
                        null,
                        E(i(t)("localAi.estimateBeta")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", E4, [
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
                            class: z(ne(i(q).level))
                          },
                          E(i(q).gpuGb) + " GB ",
                          3
                          /* TEXT, CLASS */
                        )
                      ]),
                      f("span", null, [
                        f(
                          "span",
                          null,
                          E(i(t)("localAi.total")),
                          1
                          /* TEXT */
                        ),
                        f(
                          "b",
                          {
                            class: z(ne(i(q).level))
                          },
                          E(i(q).totalGb) + " GB ",
                          3
                          /* TEXT, CLASS */
                        )
                      ]),
                      f("span", null, [
                        f(
                          "span",
                          null,
                          E(i(t)("localAi.bottleneck")),
                          1
                          /* TEXT */
                        ),
                        f(
                          "b",
                          {
                            class: z(ne(i(q).level))
                          },
                          E(i(q).bottleneck),
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
              f("div", x4, [
                f("div", I4, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(H(i(o)?.available))
                    },
                    E(i(o)?.available ? i(t)("common.yes") : i(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", L4, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(H(i(g)))
                    },
                    E(i(g) ? i(t)("common.yes") : i(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", O4, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.mainModelConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(H(!!i(h)))
                    },
                    E(i(h) ? i(t)("common.yes") : i(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", $4, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.mmprojConfigured")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(H(!!i(b)))
                    },
                    E(i(b) ? i(t)("common.yes") : i(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", R4, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.visionAvailable")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(H(i(w)))
                    },
                    E(i(w) ? i(t)("common.yes") : i(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                f("div", P4, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "b",
                    {
                      class: z(H(!!i(r)?.healthy))
                    },
                    E(i(r)?.healthy ? i(t)("common.yes") : i(t)("common.no")),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ]),
              f("div", M4, [
                f("div", N4, [
                  f(
                    "div",
                    D4,
                    E(i(t)("localAi.serviceControl")),
                    1
                    /* TEXT */
                  ),
                  f(
                    "div",
                    z4,
                    E(i(t)("localAi.serviceControlDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                f("div", F4, [
                  f("div", B4, [
                    _(i(Jt), {
                      type: "primary",
                      size: "small",
                      loading: i(c),
                      disabled: i(r)?.running,
                      onClick: Ae
                    }, {
                      default: J(() => [
                        pt(
                          E(i(t)("localAi.startService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"]),
                    _(i(Jt), {
                      size: "small",
                      loading: i(u),
                      disabled: !i(r)?.running,
                      onClick: De
                    }, {
                      default: J(() => [
                        pt(
                          E(i(t)("localAi.restartService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"]),
                    _(i(Jt), {
                      type: "danger",
                      size: "small",
                      plain: "",
                      loading: i(d),
                      disabled: !i(r)?.running,
                      onClick: Ge
                    }, {
                      default: J(() => [
                        pt(
                          E(i(t)("localAi.stopService")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled"])
                  ]),
                  i(r)?.baseUrl ? (T(), D("div", j4, [
                    f(
                      "span",
                      null,
                      E(i(t)("localAi.serviceAddress")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "code",
                      null,
                      E(i(r).baseUrl),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0)
                ])
              ])
            ]),
            f("section", V4, [
              f("div", H4, [
                f(
                  "h4",
                  null,
                  E(i(t)("localAi.modelRuntime")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(i(t)("localAi.modelRuntimeDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", W4, [
                f("div", {
                  class: "setting-row",
                  title: B("modelDir")
                }, [
                  f("div", G4, [
                    f(
                      "div",
                      K4,
                      E(i(t)("localAi.modelDir")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      q4,
                      E(B("modelDir")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", Z4, [
                    f("div", Y4, [
                      it(f(
                        "input",
                        {
                          "onUpdate:modelValue": U[0] || (U[0] = (X) => i(n).modelDir = X),
                          class: "setting-input",
                          onChange: ce
                        },
                        null,
                        544
                        /* NEED_HYDRATION, NEED_PATCH */
                      ), [
                        [Lr, i(n).modelDir]
                      ]),
                      _(i(Jt), {
                        size: "small",
                        plain: "",
                        onClick: ue
                      }, {
                        default: J(() => [
                          pt(
                            E(i(t)("common.browse")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ], 8, U4),
                f("div", X4, [
                  f("div", {
                    class: "setting-row",
                    title: B("mainModel")
                  }, [
                    f("div", J4, [
                      f(
                        "div",
                        eC,
                        E(i(t)("localAi.mainModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        tC,
                        E(B("mainModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", nC, [
                      _(Oe, {
                        modelValue: i(h),
                        "onUpdate:modelValue": U[1] || (U[1] = (X) => en(h) ? h.value = X : null),
                        class: "field-select",
                        clearable: "",
                        onChange: V
                      }, {
                        default: J(() => [
                          (T(!0), D(
                            at,
                            null,
                            xn(i(s)?.mainModels ?? [], (X) => (T(), re(me, {
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
                  ], 8, Q4),
                  f("div", {
                    class: "setting-row",
                    title: B("mmprojModel")
                  }, [
                    f("div", rC, [
                      f(
                        "div",
                        sC,
                        E(i(t)("localAi.mmprojModel")),
                        1
                        /* TEXT */
                      ),
                      f(
                        "div",
                        aC,
                        E(B("mmprojModel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f("div", iC, [
                      _(Oe, {
                        modelValue: i(b),
                        "onUpdate:modelValue": U[2] || (U[2] = (X) => en(b) ? b.value = X : null),
                        class: "field-select",
                        clearable: "",
                        onChange: V
                      }, {
                        default: J(() => [
                          (T(!0), D(
                            at,
                            null,
                            xn(i(s)?.mmprojModels ?? [], (X) => (T(), re(me, {
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
                  ], 8, oC)
                ]),
                f("div", {
                  class: "setting-row",
                  title: B("runtimePath")
                }, [
                  f("div", cC, [
                    f(
                      "div",
                      uC,
                      E(i(t)("localAi.runtimePath")),
                      1
                      /* TEXT */
                    ),
                    f(
                      "div",
                      dC,
                      E(B("runtimePath")),
                      1
                      /* TEXT */
                    )
                  ]),
                  f("div", fC, [
                    f("div", pC, [
                      it(f("input", {
                        "onUpdate:modelValue": U[3] || (U[3] = (X) => i(n).runtimePath = X),
                        class: "setting-input",
                        placeholder: i(t)("localAi.runtimePathPlaceholder")
                      }, null, 8, mC), [
                        [Lr, i(n).runtimePath]
                      ]),
                      _(i(Jt), {
                        size: "small",
                        plain: "",
                        onClick: fe
                      }, {
                        default: J(() => [
                          pt(
                            E(i(t)("common.browse")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ], 8, lC)
              ])
            ]),
            f("section", hC, [
              f("div", gC, [
                f(
                  "h4",
                  null,
                  E(i(t)("localAi.inferenceParams")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(i(t)("localAi.inferenceParamsDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", vC, [
                f("label", {
                  class: "number-field",
                  title: B("ctxSize")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).ctxSize,
                    "onUpdate:modelValue": U[4] || (U[4] = (X) => i(n).ctxSize = X),
                    controls: !1,
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, bC),
                f("label", {
                  class: "number-field",
                  title: B("gpuLayers")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).gpuLayers,
                    "onUpdate:modelValue": U[5] || (U[5] = (X) => i(n).gpuLayers = X),
                    controls: !1,
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, yC),
                f("label", {
                  class: "number-field",
                  title: B("threads")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).threads,
                    "onUpdate:modelValue": U[6] || (U[6] = (X) => i(n).threads = X),
                    controls: !1,
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, wC),
                f("label", {
                  class: "number-field",
                  title: B("batchSize")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).batchSize,
                    "onUpdate:modelValue": U[7] || (U[7] = (X) => i(n).batchSize = X),
                    controls: !1,
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, kC),
                f("label", {
                  class: "number-field",
                  title: B("ubatchSize")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).ubatchSize,
                    "onUpdate:modelValue": U[8] || (U[8] = (X) => i(n).ubatchSize = X),
                    controls: !1,
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, _C),
                f("label", {
                  class: "number-field",
                  title: B("mainGpu")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).mainGpu,
                    "onUpdate:modelValue": U[9] || (U[9] = (X) => i(n).mainGpu = X),
                    controls: !1,
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, AC)
              ])
            ]),
            f("section", TC, [
              f("div", SC, [
                f(
                  "h4",
                  null,
                  E(i(t)("localAi.acceleration")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(i(t)("localAi.accelerationDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", CC, [
                f("label", {
                  class: "switch-field",
                  title: B("flashAttn")
                }, [
                  f(
                    "span",
                    xC,
                    E(i(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  _(i(mr), {
                    modelValue: i(n).flashAttn,
                    "onUpdate:modelValue": U[10] || (U[10] = (X) => i(n).flashAttn = X),
                    "active-text": i(t)("common.on"),
                    "inactive-text": i(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, EC),
                f("label", {
                  class: "switch-field",
                  title: B("kvOffload")
                }, [
                  f(
                    "span",
                    LC,
                    E(i(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  _(i(mr), {
                    modelValue: i(n).kvOffload,
                    "onUpdate:modelValue": U[11] || (U[11] = (X) => i(n).kvOffload = X),
                    "active-text": i(t)("common.on"),
                    "inactive-text": i(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, IC),
                f("label", {
                  class: "switch-field",
                  title: B("mmap")
                }, [
                  f(
                    "span",
                    $C,
                    E(i(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  _(i(mr), {
                    modelValue: i(n).mmap,
                    "onUpdate:modelValue": U[12] || (U[12] = (X) => i(n).mmap = X),
                    "active-text": i(t)("common.on"),
                    "inactive-text": i(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, OC)
              ])
            ]),
            f("section", RC, [
              f("div", PC, [
                f(
                  "h4",
                  null,
                  E(i(t)("localAi.lifecycle")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(i(t)("localAi.lifecycleDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", MC, [
                f("label", {
                  class: "switch-field",
                  title: B("autoStart")
                }, [
                  f(
                    "span",
                    DC,
                    E(i(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  _(i(mr), {
                    modelValue: i(n).autoStartOnRequest,
                    "onUpdate:modelValue": U[13] || (U[13] = (X) => i(n).autoStartOnRequest = X),
                    "active-text": i(t)("common.on"),
                    "inactive-text": i(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, NC),
                f("label", {
                  class: "switch-field",
                  title: B("keepAlive")
                }, [
                  f(
                    "span",
                    FC,
                    E(i(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  _(i(mr), {
                    modelValue: i(n).keepAlive,
                    "onUpdate:modelValue": U[14] || (U[14] = (X) => i(n).keepAlive = X),
                    "active-text": i(t)("common.on"),
                    "inactive-text": i(t)("common.off")
                  }, null, 8, ["modelValue", "active-text", "inactive-text"])
                ], 8, zC),
                f("label", {
                  class: "number-field",
                  title: B("idleTimeout")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": U[15] || (U[15] = (X) => i(n).idleTimeoutMinutes = X),
                    controls: !1,
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, BC),
                f("label", {
                  class: "number-field",
                  title: B("requestTimeout")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).requestTimeoutSecs,
                    "onUpdate:modelValue": U[16] || (U[16] = (X) => i(n).requestTimeoutSecs = X),
                    controls: !1,
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, jC)
              ])
            ]),
            f("section", VC, [
              f("div", HC, [
                f(
                  "h4",
                  null,
                  E(i(t)("localAi.generation")),
                  1
                  /* TEXT */
                ),
                f(
                  "p",
                  null,
                  E(i(t)("localAi.generationDesc")),
                  1
                  /* TEXT */
                )
              ]),
              f("div", WC, [
                f("label", {
                  class: "number-field",
                  title: B("temperature")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).temperature,
                    "onUpdate:modelValue": U[17] || (U[17] = (X) => i(n).temperature = X),
                    controls: !1,
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, UC),
                f("label", {
                  class: "number-field",
                  title: B("topP")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).topP,
                    "onUpdate:modelValue": U[18] || (U[18] = (X) => i(n).topP = X),
                    controls: !1,
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, GC),
                f("label", {
                  class: "number-field",
                  title: B("topK")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).topK,
                    "onUpdate:modelValue": U[19] || (U[19] = (X) => i(n).topK = X),
                    controls: !1,
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, KC),
                f("label", {
                  class: "number-field",
                  title: B("minP")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).minP,
                    "onUpdate:modelValue": U[20] || (U[20] = (X) => i(n).minP = X),
                    controls: !1,
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, qC),
                f("label", {
                  class: "number-field",
                  title: B("repeatPenalty")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).repeatPenalty,
                    "onUpdate:modelValue": U[21] || (U[21] = (X) => i(n).repeatPenalty = X),
                    controls: !1,
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, ZC),
                f("label", {
                  class: "number-field",
                  title: B("repeatLastN")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).repeatLastN,
                    "onUpdate:modelValue": U[22] || (U[22] = (X) => i(n).repeatLastN = X),
                    controls: !1,
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, YC),
                f("label", {
                  class: "number-field",
                  title: B("maxTokens")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).maxTokens,
                    "onUpdate:modelValue": U[23] || (U[23] = (X) => i(n).maxTokens = X),
                    controls: !1,
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, XC),
                f("label", {
                  class: "number-field",
                  title: B("port")
                }, [
                  f(
                    "span",
                    null,
                    E(i(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  _(ee, {
                    modelValue: i(n).port,
                    "onUpdate:modelValue": U[24] || (U[24] = (X) => i(n).port = X),
                    controls: !1,
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, QC)
              ])
            ])
          ])
        ])) : Y("v-if", !0),
        i(n) ? (T(), D("footer", JC, [
          f("div", e3, [
            i(r)?.commandLine ? (T(), D("span", {
              key: 0,
              class: "command-line",
              title: i(r).commandLine
            }, E(i(r).commandLine), 9, t3)) : Y("v-if", !0),
            _(i(Jt), {
              type: "primary",
              loading: i(l),
              onClick: F
            }, {
              default: J(() => [
                pt(
                  E(i(t)("common.save")),
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
}), o3 = /* @__PURE__ */ $o(n3, [["__scopeId", "data-v-66dbd72c"]]), r3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: o3
}, Symbol.toStringTag, { value: "Module" }));
export {
  l3 as activate,
  l3 as default
};
