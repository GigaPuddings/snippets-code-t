import * as yr from "vue";
import { inject as Se, createVNode as $, defineAsyncComponent as Gu, ref as V, shallowRef as pn, computed as A, watch as ue, onMounted as xe, onUnmounted as Qo, defineComponent as Q, h as Dl, Text as Fl, Fragment as qe, getCurrentInstance as lt, unref as l, watchEffect as xl, readonly as Xr, getCurrentScope as Yu, onScopeDispose as qu, nextTick as Me, isRef as Dn, warn as Zu, provide as Vt, createElementBlock as W, openBlock as I, mergeProps as xn, renderSlot as ie, createElementVNode as g, toRef as Gt, useAttrs as Xu, useSlots as Ju, normalizeStyle as Ze, normalizeClass as j, createCommentVNode as q, createBlock as oe, withCtx as ne, resolveDynamicComponent as st, withModifiers as Ie, toDisplayString as F, onBeforeUnmount as zt, Transition as qn, withDirectives as Ue, vShow as tn, reactive as Sn, onActivated as Qu, onUpdated as Vl, cloneVNode as ec, Comment as tc, Teleport as nc, onBeforeMount as oc, onDeactivated as rc, createTextVNode as gt, withKeys as yt, createSlots as ac, toRaw as sc, toRefs as Jr, resolveComponent as _n, resolveDirective as lc, toHandlerKey as ic, renderList as Cn, vModelText as so, shallowReactive as uc, isVNode as lo, render as Bo, vModelSelect as cc } from "vue";
var dc = {
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
function fc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function pc(e, t, n) {
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
var mc = Symbol("icon-context");
function nt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = fc(), i = Se(mc, dc);
      return function() {
        var u = a.size, c = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, v = a.theme, y = a.fill, h = a.spin, m = pc(s, {
          size: u,
          strokeWidth: c,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: v,
          fill: y
        }, i), C = [i.prefix + "-icon"];
        return C.push(i.prefix + "-icon-" + e), t && i.rtl && C.push(i.prefix + "-icon-rtl"), h && C.push(i.prefix + "-icon-spin"), $("span", {
          class: C.join(" ")
        }, [n(m)]);
      };
    }
  };
  return o;
}
const vc = nt("add", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hc = nt("copy", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ha = nt("delete", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gc = nt("dislike", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yc = nt("down", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bc = nt("edit", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _c = nt("like", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ka = nt("message", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wc = nt("more", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), $("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), $("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Cc = nt("picture", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ga = nt("refresh", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ec = nt("right", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), br = nt("robot", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sc = nt("search", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tc = nt("send", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ir = nt("setting-two", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cw = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => o2)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Ir,
    component: Gu(() => Promise.resolve().then(() => iw))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function kc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ya = typeof window < "u", On = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Oc = (e, t, n) => Lc({ l: e, k: t, s: n }), Lc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ge = (e) => typeof e == "number" && isFinite(e), Ac = (e) => Qr(e) === "[object Date]", zo = (e) => Qr(e) === "[object RegExp]", er = (e) => ye(e) && Object.keys(e).length === 0, Xe = Object.assign, Ic = Object.create, Te = (e = null) => Ic(e);
let qa;
const Do = () => qa || (qa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Te());
function Za(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Xa(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, a) => `${r}="${Xa(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, a) => `${r}='${Xa(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const Nc = Object.prototype.hasOwnProperty;
function Et(e, t) {
  return Nc.call(e, t);
}
const Fe = Array.isArray, Pe = (e) => typeof e == "function", te = (e) => typeof e == "string", De = (e) => typeof e == "boolean", be = (e) => e !== null && typeof e == "object", $c = (e) => be(e) && Pe(e.then) && Pe(e.catch), jl = Object.prototype.toString, Qr = (e) => jl.call(e), ye = (e) => Qr(e) === "[object Object]", Rc = (e) => e == null ? "" : Fe(e) || ye(e) && e.toString === jl ? JSON.stringify(e, null, 2) : String(e);
function ea(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Oo = (e) => !be(e) || Fe(e);
function Fo(e, t) {
  if (Oo(e) || Oo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((a) => {
      a !== "__proto__" && (be(o[a]) && !be(r[a]) && (r[a] = Array.isArray(o[a]) ? [] : Te()), Oo(r[a]) || Oo(o[a]) ? r[a] = o[a] : n.push({ src: o[a], des: r[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Mc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Pr(e, t, n) {
  return { start: e, end: t };
}
const Ce = {
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
}, Dc = 17;
function tr(e, t, n = {}) {
  const { domain: o, messages: r, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = o, i;
}
function Fc(e) {
  throw e;
}
const It = " ", xc = "\r", et = `
`, Vc = "\u2028", jc = "\u2029";
function Bc(e) {
  const t = e;
  let n = 0, o = 1, r = 1, a = 0;
  const s = (k) => t[k] === xc && t[k + 1] === et, i = (k) => t[k] === et, u = (k) => t[k] === jc, c = (k) => t[k] === Vc, f = (k) => s(k) || i(k) || u(k) || c(k), p = () => n, v = () => o, y = () => r, h = () => a, m = (k) => s(k) || u(k) || c(k) ? et : t[k], C = () => m(n), d = () => m(n + a);
  function S() {
    return a = 0, f(n) && (o++, r = 0), s(n) && n++, n++, r++, t[n];
  }
  function L() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function E() {
    n = 0, o = 1, r = 1, a = 0;
  }
  function b(k = 0) {
    a = k;
  }
  function O() {
    const k = n + a;
    for (; k !== n; )
      S();
    a = 0;
  }
  return {
    index: p,
    line: v,
    column: y,
    peekOffset: h,
    charAt: m,
    currentChar: C,
    currentPeek: d,
    next: S,
    peek: L,
    reset: E,
    resetPeek: b,
    skipToPeek: O
  };
}
const Ut = void 0, zc = ".", Ja = "'", Wc = "tokenizer";
function Uc(e, t = {}) {
  const n = t.location !== !1, o = Bc(e), r = () => o.index(), a = () => Mc(o.line(), o.column(), o.index()), s = a(), i = r(), u = {
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
  }, c = () => u, { onError: f } = t;
  function p(w, T, D, ...G) {
    const ge = c();
    if (T.column += D, T.offset += D, f) {
      const se = n ? Pr(ge.startLoc, T) : null, _ = tr(w, se, {
        domain: Wc,
        args: G
      });
      f(_);
    }
  }
  function v(w, T, D) {
    w.endLoc = a(), w.currentType = T;
    const G = { type: T };
    return n && (G.loc = Pr(w.startLoc, w.endLoc)), D != null && (G.value = D), G;
  }
  const y = (w) => v(
    w,
    13
    /* TokenTypes.EOF */
  );
  function h(w, T) {
    return w.currentChar() === T ? (w.next(), T) : (p(Ce.EXPECTED_TOKEN, a(), 0, T), "");
  }
  function m(w) {
    let T = "";
    for (; w.currentPeek() === It || w.currentPeek() === et; )
      T += w.currentPeek(), w.peek();
    return T;
  }
  function C(w) {
    const T = m(w);
    return w.skipToPeek(), T;
  }
  function d(w) {
    if (w === Ut)
      return !1;
    const T = w.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T === 95;
  }
  function S(w) {
    if (w === Ut)
      return !1;
    const T = w.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function L(w, T) {
    const { currentType: D } = T;
    if (D !== 2)
      return !1;
    m(w);
    const G = d(w.currentPeek());
    return w.resetPeek(), G;
  }
  function E(w, T) {
    const { currentType: D } = T;
    if (D !== 2)
      return !1;
    m(w);
    const G = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), ge = S(G);
    return w.resetPeek(), ge;
  }
  function b(w, T) {
    const { currentType: D } = T;
    if (D !== 2)
      return !1;
    m(w);
    const G = w.currentPeek() === Ja;
    return w.resetPeek(), G;
  }
  function O(w, T) {
    const { currentType: D } = T;
    if (D !== 7)
      return !1;
    m(w);
    const G = w.currentPeek() === ".";
    return w.resetPeek(), G;
  }
  function k(w, T) {
    const { currentType: D } = T;
    if (D !== 8)
      return !1;
    m(w);
    const G = d(w.currentPeek());
    return w.resetPeek(), G;
  }
  function B(w, T) {
    const { currentType: D } = T;
    if (!(D === 7 || D === 11))
      return !1;
    m(w);
    const G = w.currentPeek() === ":";
    return w.resetPeek(), G;
  }
  function z(w, T) {
    const { currentType: D } = T;
    if (D !== 9)
      return !1;
    const G = () => {
      const se = w.currentPeek();
      return se === "{" ? d(w.peek()) : se === "@" || se === "|" || se === ":" || se === "." || se === It || !se ? !1 : se === et ? (w.peek(), G()) : ae(w, !1);
    }, ge = G();
    return w.resetPeek(), ge;
  }
  function ee(w) {
    m(w);
    const T = w.currentPeek() === "|";
    return w.resetPeek(), T;
  }
  function ae(w, T = !0) {
    const D = (ge = !1, se = "") => {
      const _ = w.currentPeek();
      return _ === "{" || _ === "@" || !_ ? ge : _ === "|" ? !(se === It || se === et) : _ === It ? (w.peek(), D(!0, It)) : _ === et ? (w.peek(), D(!0, et)) : !0;
    }, G = D();
    return T && w.resetPeek(), G;
  }
  function Z(w, T) {
    const D = w.currentChar();
    return D === Ut ? Ut : T(D) ? (w.next(), D) : null;
  }
  function ce(w) {
    const T = w.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36;
  }
  function ke(w) {
    return Z(w, ce);
  }
  function P(w) {
    const T = w.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36 || // $
    T === 45;
  }
  function R(w) {
    return Z(w, P);
  }
  function x(w) {
    const T = w.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function re(w) {
    return Z(w, x);
  }
  function X(w) {
    const T = w.charCodeAt(0);
    return T >= 48 && T <= 57 || // 0-9
    T >= 65 && T <= 70 || // A-F
    T >= 97 && T <= 102;
  }
  function fe(w) {
    return Z(w, X);
  }
  function Y(w) {
    let T = "", D = "";
    for (; T = re(w); )
      D += T;
    return D;
  }
  function Re(w) {
    let T = "";
    for (; ; ) {
      const D = w.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D)
        break;
      if (D === It || D === et)
        if (ae(w))
          T += D, w.next();
        else {
          if (ee(w))
            break;
          T += D, w.next();
        }
      else
        T += D, w.next();
    }
    return T;
  }
  function _e(w) {
    C(w);
    let T = "", D = "";
    for (; T = R(w); )
      D += T;
    const G = w.currentChar();
    if (G && G !== "}" && G !== Ut && G !== It && G !== et && G !== "　") {
      const ge = U(w);
      return p(Ce.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D + ge), D + ge;
    }
    return w.currentChar() === Ut && p(Ce.UNTERMINATED_CLOSING_BRACE, a(), 0), D;
  }
  function $e(w) {
    C(w);
    let T = "";
    return w.currentChar() === "-" ? (w.next(), T += `-${Y(w)}`) : T += Y(w), w.currentChar() === Ut && p(Ce.UNTERMINATED_CLOSING_BRACE, a(), 0), T;
  }
  function ze(w) {
    return w !== Ja && w !== et;
  }
  function He(w) {
    C(w), h(w, "'");
    let T = "", D = "";
    for (; T = Z(w, ze); )
      T === "\\" ? D += Ke(w) : D += T;
    const G = w.currentChar();
    return G === et || G === Ut ? (p(Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), G === et && (w.next(), h(w, "'")), D) : (h(w, "'"), D);
  }
  function Ke(w) {
    const T = w.currentChar();
    switch (T) {
      case "\\":
      case "'":
        return w.next(), `\\${T}`;
      case "u":
        return he(w, T, 4);
      case "U":
        return he(w, T, 6);
      default:
        return p(Ce.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, T), "";
    }
  }
  function he(w, T, D) {
    h(w, T);
    let G = "";
    for (let ge = 0; ge < D; ge++) {
      const se = fe(w);
      if (!se) {
        p(Ce.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${T}${G}${w.currentChar()}`);
        break;
      }
      G += se;
    }
    return `\\${T}${G}`;
  }
  function ot(w) {
    return w !== "{" && w !== "}" && w !== It && w !== et;
  }
  function U(w) {
    C(w);
    let T = "", D = "";
    for (; T = Z(w, ot); )
      D += T;
    return D;
  }
  function K(w) {
    let T = "", D = "";
    for (; T = ke(w); )
      D += T;
    return D;
  }
  function J(w) {
    const T = (D) => {
      const G = w.currentChar();
      return G === "{" || G === "@" || G === "|" || G === "(" || G === ")" || !G || G === It ? D : (D += G, w.next(), T(D));
    };
    return T("");
  }
  function ve(w) {
    C(w);
    const T = h(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return C(w), T;
  }
  function me(w, T) {
    let D = null;
    switch (w.currentChar()) {
      case "{":
        return T.braceNest >= 1 && p(Ce.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), D = v(
          T,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), C(w), T.braceNest++, D;
      case "}":
        return T.braceNest > 0 && T.currentType === 2 && p(Ce.EMPTY_PLACEHOLDER, a(), 0), w.next(), D = v(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), T.braceNest--, T.braceNest > 0 && C(w), T.inLinked && T.braceNest === 0 && (T.inLinked = !1), D;
      case "@":
        return T.braceNest > 0 && p(Ce.UNTERMINATED_CLOSING_BRACE, a(), 0), D = rt(w, T) || y(T), T.braceNest = 0, D;
      default: {
        let ge = !0, se = !0, _ = !0;
        if (ee(w))
          return T.braceNest > 0 && p(Ce.UNTERMINATED_CLOSING_BRACE, a(), 0), D = v(T, 1, ve(w)), T.braceNest = 0, T.inLinked = !1, D;
        if (T.braceNest > 0 && (T.currentType === 4 || T.currentType === 5 || T.currentType === 6))
          return p(Ce.UNTERMINATED_CLOSING_BRACE, a(), 0), T.braceNest = 0, it(w, T);
        if (ge = L(w, T))
          return D = v(T, 4, _e(w)), C(w), D;
        if (se = E(w, T))
          return D = v(T, 5, $e(w)), C(w), D;
        if (_ = b(w, T))
          return D = v(T, 6, He(w)), C(w), D;
        if (!ge && !se && !_)
          return D = v(T, 12, U(w)), p(Ce.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D.value), C(w), D;
        break;
      }
    }
    return D;
  }
  function rt(w, T) {
    const { currentType: D } = T;
    let G = null;
    const ge = w.currentChar();
    switch ((D === 7 || D === 8 || D === 11 || D === 9) && (ge === et || ge === It) && p(Ce.INVALID_LINKED_FORMAT, a(), 0), ge) {
      case "@":
        return w.next(), G = v(
          T,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), T.inLinked = !0, G;
      case ".":
        return C(w), w.next(), v(
          T,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return C(w), w.next(), v(
          T,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ee(w) ? (G = v(T, 1, ve(w)), T.braceNest = 0, T.inLinked = !1, G) : O(w, T) || B(w, T) ? (C(w), rt(w, T)) : k(w, T) ? (C(w), v(T, 11, K(w))) : z(w, T) ? (C(w), ge === "{" ? me(w, T) || G : v(T, 10, J(w))) : (D === 7 && p(Ce.INVALID_LINKED_FORMAT, a(), 0), T.braceNest = 0, T.inLinked = !1, it(w, T));
    }
  }
  function it(w, T) {
    let D = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (T.braceNest > 0)
      return me(w, T) || y(T);
    if (T.inLinked)
      return rt(w, T) || y(T);
    switch (w.currentChar()) {
      case "{":
        return me(w, T) || y(T);
      case "}":
        return p(Ce.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), v(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return rt(w, T) || y(T);
      default: {
        if (ee(w))
          return D = v(T, 1, ve(w)), T.braceNest = 0, T.inLinked = !1, D;
        if (ae(w))
          return v(T, 0, Re(w));
        break;
      }
    }
    return D;
  }
  function At() {
    const { currentType: w, offset: T, startLoc: D, endLoc: G } = u;
    return u.lastType = w, u.lastOffset = T, u.lastStartLoc = D, u.lastEndLoc = G, u.offset = r(), u.startLoc = a(), o.currentChar() === Ut ? v(
      u,
      13
      /* TokenTypes.EOF */
    ) : it(o, u);
  }
  return {
    nextToken: At,
    currentOffset: r,
    currentPosition: a,
    context: c
  };
}
const Hc = "parser", Kc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Gc(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const o = parseInt(t || n, 16);
      return o <= 55295 || o >= 57344 ? String.fromCodePoint(o) : "�";
    }
  }
}
function Yc(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(d, S, L, E, ...b) {
    const O = d.currentPosition();
    if (O.offset += E, O.column += E, n) {
      const k = t ? Pr(L, O) : null, B = tr(S, k, {
        domain: Hc,
        args: b
      });
      n(B);
    }
  }
  function r(d, S, L) {
    const E = { type: d };
    return t && (E.start = S, E.end = S, E.loc = { start: L, end: L }), E;
  }
  function a(d, S, L, E) {
    t && (d.end = S, d.loc && (d.loc.end = L));
  }
  function s(d, S) {
    const L = d.context(), E = r(3, L.offset, L.startLoc);
    return E.value = S, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function i(d, S) {
    const L = d.context(), { lastOffset: E, lastStartLoc: b } = L, O = r(5, E, b);
    return O.index = parseInt(S, 10), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function u(d, S) {
    const L = d.context(), { lastOffset: E, lastStartLoc: b } = L, O = r(4, E, b);
    return O.key = S, d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function c(d, S) {
    const L = d.context(), { lastOffset: E, lastStartLoc: b } = L, O = r(9, E, b);
    return O.value = S.replace(Kc, Gc), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function f(d) {
    const S = d.nextToken(), L = d.context(), { lastOffset: E, lastStartLoc: b } = L, O = r(8, E, b);
    return S.type !== 11 ? (o(d, Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), O.value = "", a(O, E, b), {
      nextConsumeToken: S,
      node: O
    }) : (S.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, Pt(S)), O.value = S.value || "", a(O, d.currentOffset(), d.currentPosition()), {
      node: O
    });
  }
  function p(d, S) {
    const L = d.context(), E = r(7, L.offset, L.startLoc);
    return E.value = S, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function v(d) {
    const S = d.context(), L = r(6, S.offset, S.startLoc);
    let E = d.nextToken();
    if (E.type === 8) {
      const b = f(d);
      L.modifier = b.node, E = b.nextConsumeToken || d.nextToken();
    }
    switch (E.type !== 9 && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(E)), E = d.nextToken(), E.type === 2 && (E = d.nextToken()), E.type) {
      case 10:
        E.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(E)), L.key = p(d, E.value || "");
        break;
      case 4:
        E.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(E)), L.key = u(d, E.value || "");
        break;
      case 5:
        E.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(E)), L.key = i(d, E.value || "");
        break;
      case 6:
        E.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(E)), L.key = c(d, E.value || "");
        break;
      default: {
        o(d, Ce.UNEXPECTED_EMPTY_LINKED_KEY, S.lastStartLoc, 0);
        const b = d.context(), O = r(7, b.offset, b.startLoc);
        return O.value = "", a(O, b.offset, b.startLoc), L.key = O, a(L, b.offset, b.startLoc), {
          nextConsumeToken: E,
          node: L
        };
      }
    }
    return a(L, d.currentOffset(), d.currentPosition()), {
      node: L
    };
  }
  function y(d) {
    const S = d.context(), L = S.currentType === 1 ? d.currentOffset() : S.offset, E = S.currentType === 1 ? S.endLoc : S.startLoc, b = r(2, L, E);
    b.items = [];
    let O = null;
    do {
      const z = O || d.nextToken();
      switch (O = null, z.type) {
        case 0:
          z.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(z)), b.items.push(s(d, z.value || ""));
          break;
        case 5:
          z.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(z)), b.items.push(i(d, z.value || ""));
          break;
        case 4:
          z.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(z)), b.items.push(u(d, z.value || ""));
          break;
        case 6:
          z.value == null && o(d, Ce.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pt(z)), b.items.push(c(d, z.value || ""));
          break;
        case 7: {
          const ee = v(d);
          b.items.push(ee.node), O = ee.nextConsumeToken || null;
          break;
        }
      }
    } while (S.currentType !== 13 && S.currentType !== 1);
    const k = S.currentType === 1 ? S.lastOffset : d.currentOffset(), B = S.currentType === 1 ? S.lastEndLoc : d.currentPosition();
    return a(b, k, B), b;
  }
  function h(d, S, L, E) {
    const b = d.context();
    let O = E.items.length === 0;
    const k = r(1, S, L);
    k.cases = [], k.cases.push(E);
    do {
      const B = y(d);
      O || (O = B.items.length === 0), k.cases.push(B);
    } while (b.currentType !== 13);
    return O && o(d, Ce.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), a(k, d.currentOffset(), d.currentPosition()), k;
  }
  function m(d) {
    const S = d.context(), { offset: L, startLoc: E } = S, b = y(d);
    return S.currentType === 13 ? b : h(d, L, E, b);
  }
  function C(d) {
    const S = Uc(d, Xe({}, e)), L = S.context(), E = r(0, L.offset, L.startLoc);
    return t && E.loc && (E.loc.source = d), E.body = m(S), e.onCacheKey && (E.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && o(S, Ce.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), a(E, S.currentOffset(), S.currentPosition()), E;
  }
  return { parse: C };
}
function Pt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function qc(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Qa(e, t) {
  for (let n = 0; n < e.length; n++)
    ta(e[n], t);
}
function ta(e, t) {
  switch (e.type) {
    case 1:
      Qa(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Qa(e.items, t);
      break;
    case 6: {
      ta(e.key, t), t.helper(
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
function Zc(e, t = {}) {
  const n = qc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ta(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function Xc(e) {
  const t = e.body;
  return t.type === 2 ? es(t) : t.cases.forEach((n) => es(n)), e;
}
function es(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const o = e.items[n];
      if (!(o.type === 3 || o.type === 9) || o.value == null)
        break;
      t.push(o.value);
    }
    if (t.length === e.items.length) {
      e.static = ea(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
function Rn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Rn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        Rn(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        Rn(n[o]);
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
      Rn(t.key), t.k = t.key, delete t.key, t.modifier && (Rn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Jc(e, t) {
  const { filename: n, breakLineCode: o, needIndent: r } = t, a = t.location !== !1, s = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: o,
    needIndent: r,
    indentLevel: 0
  };
  a && e.loc && (s.source = e.loc.source);
  const i = () => s;
  function u(m, C) {
    s.code += m;
  }
  function c(m, C = !0) {
    const d = C ? o : "";
    u(r ? d + "  ".repeat(m) : d);
  }
  function f(m = !0) {
    const C = ++s.indentLevel;
    m && c(C);
  }
  function p(m = !0) {
    const C = --s.indentLevel;
    m && c(C);
  }
  function v() {
    c(s.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: f,
    deindent: p,
    newline: v,
    helper: (m) => `_${m}`,
    needIndent: () => s.needIndent
  };
}
function Qc(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Vn(e, t.key), t.modifier ? (e.push(", "), Vn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ed(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let a = 0; a < r && (Vn(e, t.items[a]), a !== r - 1); a++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function td(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let a = 0; a < r && (Vn(e, t.cases[a]), a !== r - 1); a++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function nd(e, t) {
  t.body ? Vn(e, t.body) : e.push("null");
}
function Vn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      nd(e, t);
      break;
    case 1:
      td(e, t);
      break;
    case 2:
      ed(e, t);
      break;
    case 6:
      Qc(e, t);
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
const od = (e, t = {}) => {
  const n = te(t.mode) ? t.mode : "normal", o = te(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Jc(e, {
    filename: o,
    breakLineCode: r,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${ea(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), Vn(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: u, map: c } = i.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function rd(e, t = {}) {
  const n = Xe({}, t), o = !!n.jit, r = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Yc(n).parse(e);
  return o ? (a && Xc(i), r && Rn(i), { ast: i, code: "" }) : (Zc(i, n), od(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ad() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Do().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dt(e) {
  return be(e) && na(e) === 0 && (Et(e, "b") || Et(e, "body"));
}
const Bl = ["b", "body"];
function sd(e) {
  return hn(e, Bl);
}
const zl = ["c", "cases"];
function ld(e) {
  return hn(e, zl, []);
}
const Wl = ["s", "static"];
function id(e) {
  return hn(e, Wl);
}
const Ul = ["i", "items"];
function ud(e) {
  return hn(e, Ul, []);
}
const Hl = ["t", "type"];
function na(e) {
  return hn(e, Hl);
}
const Kl = ["v", "value"];
function Lo(e, t) {
  const n = hn(e, Kl);
  if (n != null)
    return n;
  throw io(t);
}
const Gl = ["m", "modifier"];
function cd(e) {
  return hn(e, Gl);
}
const Yl = ["k", "key"];
function dd(e) {
  const t = hn(e, Yl);
  if (t)
    return t;
  throw io(
    6
    /* NodeTypes.Linked */
  );
}
function hn(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (Et(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const ql = [
  ...Bl,
  ...zl,
  ...Wl,
  ...Ul,
  ...Yl,
  ...Gl,
  ...Kl,
  ...Hl
];
function io(e) {
  return new Error(`unhandled node type: ${e}`);
}
function _r(e) {
  return (n) => fd(n, e);
}
function fd(e, t) {
  const n = sd(t);
  if (n == null)
    throw io(
      0
      /* NodeTypes.Resource */
    );
  if (na(n) === 1) {
    const a = ld(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      ts(e, i)
    ], []));
  } else
    return ts(e, n);
}
function ts(e, t) {
  const n = id(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = ud(t).reduce((r, a) => [...r, Nr(e, a)], []);
    return e.normalize(o);
  }
}
function Nr(e, t) {
  const n = na(t);
  switch (n) {
    case 3:
      return Lo(t, n);
    case 9:
      return Lo(t, n);
    case 4: {
      const o = t;
      if (Et(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (Et(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw io(n);
    }
    case 5: {
      const o = t;
      if (Et(o, "i") && Ge(o.i))
        return e.interpolate(e.list(o.i));
      if (Et(o, "index") && Ge(o.index))
        return e.interpolate(e.list(o.index));
      throw io(n);
    }
    case 6: {
      const o = t, r = cd(o), a = dd(o);
      return e.linked(Nr(e, a), r ? Nr(e, r) : void 0, e.type);
    }
    case 7:
      return Lo(t, n);
    case 8:
      return Lo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const pd = (e) => e;
let Ao = Te();
function md(e, t = {}) {
  let n = !1;
  const o = t.onError || Fc;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...rd(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function vd(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && te(e)) {
    De(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || pd)(e), r = Ao[o];
    if (r)
      return r;
    const { ast: a, detectError: s } = md(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = _r(a);
    return s ? i : Ao[o] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const o = Ao[n];
      return o || (Ao[n] = _r(e));
    } else
      return _r(e);
  }
}
const Yt = {
  INVALID_ARGUMENT: Dc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, hd = 24;
function qt(e) {
  return tr(e, null, void 0);
}
function oa(e, t) {
  return t.locale != null ? ns(t.locale) : ns(e.locale);
}
let wr;
function ns(e) {
  if (te(e))
    return e;
  if (Pe(e)) {
    if (e.resolvedOnce && wr != null)
      return wr;
    if (e.constructor.name === "Function") {
      const t = e();
      if ($c(t))
        throw qt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return wr = t;
    } else
      throw qt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function gd(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Fe(t) ? t : be(t) ? Object.keys(t) : te(t) ? [t] : [n]
  ])];
}
function Zl(e, t, n) {
  const o = te(n) ? n : Wo, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let a = r.__localeChainCache.get(o);
  if (!a) {
    a = [];
    let s = [n];
    for (; Fe(s); )
      s = os(a, s, t);
    const i = Fe(t) || !ye(t) ? t : t.default ? t.default : null;
    s = te(i) ? [i] : i, Fe(s) && os(a, s, !1), r.__localeChainCache.set(o, a);
  }
  return a;
}
function os(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && De(o); r++) {
    const a = t[r];
    te(a) && (o = yd(e, t[r], n));
  }
  return o;
}
function yd(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const a = r.join("-");
    o = bd(e, a, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function bd(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (Fe(n) || ye(n)) && n[r] && (o = n[r]);
  }
  return o;
}
const gn = [];
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
const _d = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function wd(e) {
  return _d.test(e);
}
function Cd(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ed(e) {
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
function Sd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : wd(t) ? Cd(t) : "*" + t;
}
function Td(e) {
  const t = [];
  let n = -1, o = 0, r = 0, a, s, i, u, c, f, p;
  const v = [];
  v[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, v[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, v[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    v[
      0
      /* Actions.APPEND */
    ](), r++;
  }, v[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, o = 4, v[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, s === void 0 || (s = Sd(s), s === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const h = e[n + 1];
    if (o === 5 && h === "'" || o === 6 && h === '"')
      return n++, i = "\\" + h, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, a = e[n], !(a === "\\" && y())) {
      if (u = Ed(a), p = gn[o], c = p[u] || p.l || 8, c === 8 || (o = c[0], c[1] !== void 0 && (f = v[c[1]], f && (i = a, f() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const rs = /* @__PURE__ */ new Map();
function kd(e, t) {
  return be(e) ? e[t] : null;
}
function Od(e, t) {
  if (!be(e))
    return null;
  let n = rs.get(t);
  if (n || (n = Td(t), n && rs.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, a = 0;
  for (; a < o; ) {
    const s = n[a];
    if (ql.includes(s) && Dt(r))
      return null;
    const i = r[s];
    if (i === void 0 || Pe(r))
      return null;
    r = i, a++;
  }
  return r;
}
const Ld = "11.2.2", nr = -1, Wo = "en-US", as = "", ss = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ad() {
  return {
    upper: (e, t) => t === "text" && te(e) ? e.toUpperCase() : t === "vnode" && be(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && te(e) ? e.toLowerCase() : t === "vnode" && be(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && te(e) ? ss(e) : t === "vnode" && be(e) && "__v_isVNode" in e ? ss(e.children) : e
  };
}
let Xl;
function Id(e) {
  Xl = e;
}
let Jl;
function Pd(e) {
  Jl = e;
}
let Ql;
function Nd(e) {
  Ql = e;
}
let ei = null;
const ls = (e) => {
  ei = e;
}, $d = () => ei;
let is = 0;
function Rd(e = {}) {
  const t = Pe(e.onWarn) ? e.onWarn : kc, n = te(e.version) ? e.version : Ld, o = te(e.locale) || Pe(e.locale) ? e.locale : Wo, r = Pe(o) ? Wo : o, a = Fe(e.fallbackLocale) || ye(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, s = ye(e.messages) ? e.messages : Cr(r), i = ye(e.datetimeFormats) ? e.datetimeFormats : Cr(r), u = ye(e.numberFormats) ? e.numberFormats : Cr(r), c = Xe(Te(), e.modifiers, Ad()), f = e.pluralRules || Te(), p = Pe(e.missing) ? e.missing : null, v = De(e.missingWarn) || zo(e.missingWarn) ? e.missingWarn : !0, y = De(e.fallbackWarn) || zo(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, m = !!e.unresolving, C = Pe(e.postTranslation) ? e.postTranslation : null, d = ye(e.processor) ? e.processor : null, S = De(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, E = Pe(e.messageCompiler) ? e.messageCompiler : Xl, b = Pe(e.messageResolver) ? e.messageResolver : Jl || kd, O = Pe(e.localeFallbacker) ? e.localeFallbacker : Ql || gd, k = be(e.fallbackContext) ? e.fallbackContext : void 0, B = e, z = be(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = be(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), ae = be(B.__meta) ? B.__meta : {};
  is++;
  const Z = {
    version: n,
    cid: is,
    locale: o,
    fallbackLocale: a,
    messages: s,
    modifiers: c,
    pluralRules: f,
    missing: p,
    missingWarn: v,
    fallbackWarn: y,
    fallbackFormat: h,
    unresolving: m,
    postTranslation: C,
    processor: d,
    warnHtmlMessage: S,
    escapeParameter: L,
    messageCompiler: E,
    messageResolver: b,
    localeFallbacker: O,
    fallbackContext: k,
    onWarn: t,
    __meta: ae
  };
  return Z.datetimeFormats = i, Z.numberFormats = u, Z.__datetimeFormatters = z, Z.__numberFormatters = ee, Z;
}
const Cr = (e) => ({ [e]: Te() });
function ra(e, t, n, o, r) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, r);
    return te(i) ? i : t;
  } else
    return t;
}
function Jn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Md(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Dd(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (Md(e, t[o]))
      return !0;
  return !1;
}
function us(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [u, c, f, p] = $r(...t), v = De(f.missingWarn) ? f.missingWarn : e.missingWarn;
  De(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, h = oa(e, f), m = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    h
  );
  if (!te(u) || u === "")
    return new Intl.DateTimeFormat(h, p).format(c);
  let C = {}, d, S = null;
  const L = "datetime format";
  for (let O = 0; O < m.length && (d = m[O], C = n[d] || {}, S = C[u], !ye(S)); O++)
    ra(e, u, d, v, L);
  if (!ye(S) || !te(d))
    return o ? nr : u;
  let E = `${d}__${u}`;
  er(p) || (E = `${E}__${JSON.stringify(p)}`);
  let b = i.get(E);
  return b || (b = new Intl.DateTimeFormat(d, Xe({}, S, p)), i.set(E, b)), y ? b.formatToParts(c) : b.format(c);
}
const ti = [
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
function $r(...e) {
  const [t, n, o, r] = e, a = Te();
  let s = Te(), i;
  if (te(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ac(t)) {
    if (isNaN(t.getTime()))
      throw qt(Yt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ge(t))
    i = t;
  else
    throw qt(Yt.INVALID_ARGUMENT);
  return te(n) ? a.key = n : ye(n) && Object.keys(n).forEach((u) => {
    ti.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), te(o) ? a.locale = o : ye(o) && (s = o), ye(r) && (s = r), [a.key || "", i, a, s];
}
function cs(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__datetimeFormatters.has(a) && o.__datetimeFormatters.delete(a);
  }
}
function ds(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [u, c, f, p] = Rr(...t), v = De(f.missingWarn) ? f.missingWarn : e.missingWarn;
  De(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const y = !!f.part, h = oa(e, f), m = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    h
  );
  if (!te(u) || u === "")
    return new Intl.NumberFormat(h, p).format(c);
  let C = {}, d, S = null;
  const L = "number format";
  for (let O = 0; O < m.length && (d = m[O], C = n[d] || {}, S = C[u], !ye(S)); O++)
    ra(e, u, d, v, L);
  if (!ye(S) || !te(d))
    return o ? nr : u;
  let E = `${d}__${u}`;
  er(p) || (E = `${E}__${JSON.stringify(p)}`);
  let b = i.get(E);
  return b || (b = new Intl.NumberFormat(d, Xe({}, S, p)), i.set(E, b)), y ? b.formatToParts(c) : b.format(c);
}
const ni = [
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
function Rr(...e) {
  const [t, n, o, r] = e, a = Te();
  let s = Te();
  if (!Ge(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const i = t;
  return te(n) ? a.key = n : ye(n) && Object.keys(n).forEach((u) => {
    ni.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), te(o) ? a.locale = o : ye(o) && (s = o), ye(r) && (s = r), [a.key || "", i, a, s];
}
function fs(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__numberFormatters.has(a) && o.__numberFormatters.delete(a);
  }
}
const Fd = (e) => e, xd = (e) => "", Vd = "text", jd = (e) => e.length === 0 ? "" : ea(e), Bd = Rc;
function ps(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function zd(e) {
  const t = Ge(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ge(e.named.count) || Ge(e.named.n)) ? Ge(e.named.count) ? e.named.count : Ge(e.named.n) ? e.named.n : t : t;
}
function Wd(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ud(e = {}) {
  const t = e.locale, n = zd(e), o = be(e.pluralRules) && te(t) && Pe(e.pluralRules[t]) ? e.pluralRules[t] : ps, r = be(e.pluralRules) && te(t) && Pe(e.pluralRules[t]) ? ps : void 0, a = (d) => d[o(n, d.length, r)], s = e.list || [], i = (d) => s[d], u = e.named || Te();
  Ge(e.pluralIndex) && Wd(n, u);
  const c = (d) => u[d];
  function f(d, S) {
    const L = Pe(e.messages) ? e.messages(d, !!S) : be(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : xd);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Fd, v = ye(e.processor) && Pe(e.processor.normalize) ? e.processor.normalize : jd, y = ye(e.processor) && Pe(e.processor.interpolate) ? e.processor.interpolate : Bd, h = ye(e.processor) && te(e.processor.type) ? e.processor.type : Vd, C = {
    list: i,
    named: c,
    plural: a,
    linked: (d, ...S) => {
      const [L, E] = S;
      let b = "text", O = "";
      S.length === 1 ? be(L) ? (O = L.modifier || O, b = L.type || b) : te(L) && (O = L || O) : S.length === 2 && (te(L) && (O = L || O), te(E) && (b = E || b));
      const k = f(d, !0)(C), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        b === "vnode" && Fe(k) && O ? k[0] : k
      );
      return O ? p(O)(B, b) : B;
    },
    message: f,
    type: h,
    interpolate: y,
    normalize: v,
    values: Xe(Te(), s, u)
  };
  return C;
}
const ms = () => "", Xt = (e) => Pe(e);
function vs(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: a, fallbackLocale: s, messages: i } = e, [u, c] = Mr(...t), f = De(c.missingWarn) ? c.missingWarn : e.missingWarn, p = De(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, v = De(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, y = !!c.resolvedMessage, h = te(c.default) || De(c.default) ? De(c.default) ? a ? u : () => u : c.default : n ? a ? u : () => u : null, m = n || h != null && (te(h) || Pe(h)), C = oa(e, c);
  v && Hd(c);
  let [d, S, L] = y ? [
    u,
    C,
    i[C] || Te()
  ] : oi(e, u, C, s, p, f), E = d, b = u;
  if (!y && !(te(E) || Dt(E) || Xt(E)) && m && (E = h, b = E), !y && (!(te(E) || Dt(E) || Xt(E)) || !te(S)))
    return r ? nr : u;
  let O = !1;
  const k = () => {
    O = !0;
  }, B = Xt(E) ? E : ri(e, u, S, E, b, k);
  if (O)
    return E;
  const z = Yd(e, S, L, c), ee = Ud(z), ae = Kd(e, B, ee);
  let Z = o ? o(ae, u) : ae;
  return v && te(Z) && (Z = Pc(Z)), Z;
}
function Hd(e) {
  Fe(e.list) ? e.list = e.list.map((t) => te(t) ? Za(t) : t) : be(e.named) && Object.keys(e.named).forEach((t) => {
    te(e.named[t]) && (e.named[t] = Za(e.named[t]));
  });
}
function oi(e, t, n, o, r, a) {
  const { messages: s, onWarn: i, messageResolver: u, localeFallbacker: c } = e, f = c(e, o, n);
  let p = Te(), v, y = null;
  const h = "translate";
  for (let m = 0; m < f.length && (v = f[m], p = s[v] || Te(), (y = u(p, t)) === null && (y = p[t]), !(te(y) || Dt(y) || Xt(y))); m++)
    if (!Dd(v, f)) {
      const C = ra(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        v,
        a,
        h
      );
      C !== t && (y = C);
    }
  return [y, v, p];
}
function ri(e, t, n, o, r, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Xt(o)) {
    const c = o;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (s == null) {
    const c = () => o;
    return c.locale = n, c.key = t, c;
  }
  const u = s(o, Gd(e, n, r, o, i, a));
  return u.locale = n, u.key = t, u.source = o, u;
}
function Kd(e, t, n) {
  return t(n);
}
function Mr(...e) {
  const [t, n, o] = e, r = Te();
  if (!te(t) && !Ge(t) && !Xt(t) && !Dt(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const a = Ge(t) ? String(t) : (Xt(t), t);
  return Ge(n) ? r.plural = n : te(n) ? r.default = n : ye(n) && !er(n) ? r.named = n : Fe(n) && (r.list = n), Ge(o) ? r.plural = o : te(o) ? r.default = o : ye(o) && Xe(r, o), [a, r];
}
function Gd(e, t, n, o, r, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Oc(t, n, s)
  };
}
function Yd(e, t, n, o) {
  const { modifiers: r, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: u, missingWarn: c, fallbackContext: f } = e, v = {
    locale: t,
    modifiers: r,
    pluralRules: a,
    messages: (y, h) => {
      let m = s(n, y);
      if (m == null && (f || h)) {
        const [, , C] = oi(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          i,
          u,
          c
        );
        m = s(C, y);
      }
      if (te(m) || Dt(m)) {
        let C = !1;
        const S = ri(e, y, t, m, y, () => {
          C = !0;
        });
        return C ? ms : S;
      } else return Xt(m) ? m : ms;
    }
  };
  return e.processor && (v.processor = e.processor), o.list && (v.list = o.list), o.named && (v.named = o.named), Ge(o.plural) && (v.pluralIndex = o.plural), v;
}
ad();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const qd = "11.2.2";
function Zd() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Do().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Do().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Do().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const jn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: hd,
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
function uo(e, ...t) {
  return tr(e, null, void 0);
}
const Dr = /* @__PURE__ */ On("__translateVNode"), Fr = /* @__PURE__ */ On("__datetimeParts"), xr = /* @__PURE__ */ On("__numberParts"), Xd = On("__setPluralRules"), ai = /* @__PURE__ */ On("__injectWithOption"), Vr = /* @__PURE__ */ On("__dispose");
function co(e) {
  if (!be(e) || Dt(e))
    return e;
  for (const t in e)
    if (Et(e, t))
      if (!t.includes("."))
        be(e[t]) && co(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, a = !1;
        for (let s = 0; s < o; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in r || (r[n[s]] = Te()), !be(r[n[s]])) {
            a = !0;
            break;
          }
          r = r[n[s]];
        }
        if (a || (Dt(r) ? ql.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !Dt(r)) {
          const s = r[n[o]];
          be(s) && co(s);
        }
      }
  return e;
}
function si(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: a } = t, s = ye(n) ? n : Fe(o) ? Te() : { [e]: Te() };
  if (Fe(o) && o.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: c } = i;
      u ? (s[u] = s[u] || Te(), Fo(c, s[u])) : Fo(c, s);
    } else
      te(i) && Fo(JSON.parse(i), s);
  }), r == null && a)
    for (const i in s)
      Et(s, i) && co(s[i]);
  return s;
}
function Jd(e) {
  return e.type;
}
function Qd(e, t, n) {
  let o = be(t.messages) ? t.messages : Te();
  "__i18nGlobal" in n && (o = si(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((a) => {
    e.mergeLocaleMessage(a, o[a]);
  });
  {
    if (be(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (be(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function hs(e) {
  return $(Fl, null, e, 0);
}
function li() {
  return "currentInstance" in yr ? yr["currentInstance"] : yr.getCurrentInstance();
}
const gs = () => [], ef = () => !1;
let ys = 0;
function bs(e) {
  return (t, n, o, r) => e(n, o, li() || void 0, r);
}
function tf(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, a = Ya ? V : pn;
  let s = De(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : te(e.locale) ? e.locale : Wo
  ), u = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : te(e.fallbackLocale) || Fe(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), c = a(si(i.value, e)), f = a(ye(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(ye(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let v = t ? t.missingWarn : De(e.missingWarn) || zo(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : De(e.fallbackWarn) || zo(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : De(e.fallbackRoot) ? e.fallbackRoot : !0, m = !!e.fallbackFormat, C = Pe(e.missing) ? e.missing : null, d = Pe(e.missing) ? bs(e.missing) : null, S = Pe(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : De(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const b = t ? t.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || t && t.pluralRules, k;
  k = (() => {
    o && ls(null);
    const _ = {
      version: qd,
      locale: i.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: b,
      pluralRules: O,
      missing: d === null ? void 0 : d,
      missingWarn: v,
      fallbackWarn: y,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: L,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = f.value, _.numberFormats = p.value, _.__datetimeFormatters = ye(k) ? k.__datetimeFormatters : void 0, _.__numberFormatters = ye(k) ? k.__numberFormatters : void 0;
    const M = Rd(_);
    return o && ls(M), M;
  })(), Jn(k, i.value, u.value);
  function z() {
    return [
      i.value,
      u.value,
      c.value,
      f.value,
      p.value
    ];
  }
  const ee = A({
    get: () => i.value,
    set: (_) => {
      k.locale = _, i.value = _;
    }
  }), ae = A({
    get: () => u.value,
    set: (_) => {
      k.fallbackLocale = _, u.value = _, Jn(k, i.value, _);
    }
  }), Z = A(() => c.value), ce = /* @__PURE__ */ A(() => f.value), ke = /* @__PURE__ */ A(() => p.value);
  function P() {
    return Pe(S) ? S : null;
  }
  function R(_) {
    S = _, k.postTranslation = _;
  }
  function x() {
    return C;
  }
  function re(_) {
    _ !== null && (d = bs(_)), C = _, k.missing = d;
  }
  const X = (_, M, de, we, Je, bn) => {
    z();
    let ht;
    try {
      o || (k.fallbackContext = t ? $d() : void 0), ht = _(k);
    } finally {
      o || (k.fallbackContext = void 0);
    }
    if (de !== "translate exists" && // for not `te` (e.g `t`)
    Ge(ht) && ht === nr || de === "translate exists" && !ht) {
      const [gr, Va] = M();
      return t && h ? we(t) : Je(gr);
    } else {
      if (bn(ht))
        return ht;
      throw uo(jn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function fe(..._) {
    return X((M) => Reflect.apply(vs, null, [M, ..._]), () => Mr(..._), "translate", (M) => Reflect.apply(M.t, M, [..._]), (M) => M, (M) => te(M));
  }
  function Y(..._) {
    const [M, de, we] = _;
    if (we && !be(we))
      throw uo(jn.INVALID_ARGUMENT);
    return fe(M, de, Xe({ resolvedMessage: !0 }, we || {}));
  }
  function Re(..._) {
    return X((M) => Reflect.apply(us, null, [M, ..._]), () => $r(..._), "datetime format", (M) => Reflect.apply(M.d, M, [..._]), () => as, (M) => te(M) || Fe(M));
  }
  function _e(..._) {
    return X((M) => Reflect.apply(ds, null, [M, ..._]), () => Rr(..._), "number format", (M) => Reflect.apply(M.n, M, [..._]), () => as, (M) => te(M) || Fe(M));
  }
  function $e(_) {
    return _.map((M) => te(M) || Ge(M) || De(M) ? hs(String(M)) : M);
  }
  const He = {
    normalize: $e,
    interpolate: (_) => _,
    type: "vnode"
  };
  function Ke(..._) {
    return X((M) => {
      let de;
      const we = M;
      try {
        we.processor = He, de = Reflect.apply(vs, null, [we, ..._]);
      } finally {
        we.processor = null;
      }
      return de;
    }, () => Mr(..._), "translate", (M) => M[Dr](..._), (M) => [hs(M)], (M) => Fe(M));
  }
  function he(..._) {
    return X((M) => Reflect.apply(ds, null, [M, ..._]), () => Rr(..._), "number format", (M) => M[xr](..._), gs, (M) => te(M) || Fe(M));
  }
  function ot(..._) {
    return X((M) => Reflect.apply(us, null, [M, ..._]), () => $r(..._), "datetime format", (M) => M[Fr](..._), gs, (M) => te(M) || Fe(M));
  }
  function U(_) {
    O = _, k.pluralRules = O;
  }
  function K(_, M) {
    return X(() => {
      if (!_)
        return !1;
      const de = te(M) ? M : i.value, we = me(de), Je = k.messageResolver(we, _);
      return Dt(Je) || Xt(Je) || te(Je);
    }, () => [_], "translate exists", (de) => Reflect.apply(de.te, de, [_, M]), ef, (de) => De(de));
  }
  function J(_) {
    let M = null;
    const de = Zl(k, u.value, i.value);
    for (let we = 0; we < de.length; we++) {
      const Je = c.value[de[we]] || {}, bn = k.messageResolver(Je, _);
      if (bn != null) {
        M = bn;
        break;
      }
    }
    return M;
  }
  function ve(_) {
    const M = J(_);
    return M ?? (t ? t.tm(_) || {} : {});
  }
  function me(_) {
    return c.value[_] || {};
  }
  function rt(_, M) {
    if (r) {
      const de = { [_]: M };
      for (const we in de)
        Et(de, we) && co(de[we]);
      M = de[_];
    }
    c.value[_] = M, k.messages = c.value;
  }
  function it(_, M) {
    c.value[_] = c.value[_] || {};
    const de = { [_]: M };
    if (r)
      for (const we in de)
        Et(de, we) && co(de[we]);
    M = de[_], Fo(M, c.value[_]), k.messages = c.value;
  }
  function At(_) {
    return f.value[_] || {};
  }
  function w(_, M) {
    f.value[_] = M, k.datetimeFormats = f.value, cs(k, _, M);
  }
  function T(_, M) {
    f.value[_] = Xe(f.value[_] || {}, M), k.datetimeFormats = f.value, cs(k, _, M);
  }
  function D(_) {
    return p.value[_] || {};
  }
  function G(_, M) {
    p.value[_] = M, k.numberFormats = p.value, fs(k, _, M);
  }
  function ge(_, M) {
    p.value[_] = Xe(p.value[_] || {}, M), k.numberFormats = p.value, fs(k, _, M);
  }
  ys++, t && Ya && (ue(t.locale, (_) => {
    s && (i.value = _, k.locale = _, Jn(k, i.value, u.value));
  }), ue(t.fallbackLocale, (_) => {
    s && (u.value = _, k.fallbackLocale = _, Jn(k, i.value, u.value));
  }));
  const se = {
    id: ys,
    locale: ee,
    fallbackLocale: ae,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(_) {
      s = _, _ && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, Jn(k, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Z,
    get modifiers() {
      return b;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return v;
    },
    set missingWarn(_) {
      v = _, k.missingWarn = v;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(_) {
      y = _, k.fallbackWarn = y;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(_) {
      h = _;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(_) {
      m = _, k.fallbackFormat = m;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(_) {
      L = _, k.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(_) {
      E = _, k.escapeParameter = _;
    },
    t: fe,
    getLocaleMessage: me,
    setLocaleMessage: rt,
    mergeLocaleMessage: it,
    getPostTranslationHandler: P,
    setPostTranslationHandler: R,
    getMissingHandler: x,
    setMissingHandler: re,
    [Xd]: U
  };
  return se.datetimeFormats = ce, se.numberFormats = ke, se.rt = Y, se.te = K, se.tm = ve, se.d = Re, se.n = _e, se.getDateTimeFormat = At, se.setDateTimeFormat = w, se.mergeDateTimeFormat = T, se.getNumberFormat = D, se.setNumberFormat = G, se.mergeNumberFormat = ge, se[ai] = n, se[Dr] = Ke, se[Fr] = ot, se[xr] = he, se;
}
const aa = {
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
function nf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === qe ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, Te());
}
function ii() {
  return qe;
}
Xe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ge(e) || !isNaN(e)
  }
}, aa);
function of(e) {
  return Fe(e) && !te(e[0]);
}
function ui(e, t, n, o) {
  const { slots: r, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Te();
    e.locale && (s.locale = e.locale), te(e.format) ? s.key = e.format : be(e.format) && (te(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((v, y) => n.includes(y) ? Xe(Te(), v, { [y]: e.format[y] }) : v, Te()));
    const u = o(e.value, s, i);
    let c = [s.key];
    Fe(u) ? c = u.map((v, y) => {
      const h = r[v.type], m = h ? h({ [v.type]: v.value, index: y, parts: u }) : [v.value];
      return of(m) && (m[0].key = `${v.type}-${y}`), m;
    }) : te(u) && (c = [u]);
    const f = Xe(Te(), a), p = te(e.tag) || be(e.tag) ? e.tag : ii();
    return Dl(p, f, c);
  };
}
Xe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, aa);
const rf = /* @__PURE__ */ On("global-vue-i18n");
function go(e = {}) {
  const t = li();
  if (t == null)
    throw uo(jn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw uo(jn.NOT_INSTALLED);
  const n = af(t), o = lf(n), r = Jd(t), a = sf(e, r);
  if (a === "global")
    return Qd(o, e, r), o;
  if (a === "parent") {
    let u = uf(n, t, e.__useComponent);
    return u == null && (u = o), u;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const u = Xe({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), o && (u.__root = o), i = tf(u), s.__composerExtend && (i[Vr] = s.__composerExtend(i)), df(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function af(e) {
  const t = Se(e.isCE ? rf : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw uo(e.isCE ? jn.NOT_INSTALLED_WITH_PROVIDE : jn.UNEXPECTED_ERROR);
  return t;
}
function sf(e, t) {
  return er(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function lf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function uf(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let a = cf(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      o = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (o = i.__composer, n && o && !o[ai] && (o = null));
    }
    if (o != null || r === a)
      break;
    a = a.parent;
  }
  return o;
}
function cf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function df(e, t, n) {
  xe(() => {
  }, t), Qo(() => {
    const o = n;
    e.__deleteInstance(t);
    const r = o[Vr];
    r && (r(), delete o[Vr]);
  }, t);
}
Xe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, aa);
Zd();
Id(vd);
Pd(Od);
Nd(Zl);
async function ft(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
async function ff() {
  return await ft("local_ai_get_config");
}
async function Er(e) {
  return await ft("local_ai_save_config", { config: e });
}
async function pf(e) {
  return await ft("local_ai_scan_models", {
    config: e ?? null
  });
}
async function mf() {
  return await ft("local_ai_get_runtime_status");
}
async function ci() {
  return await ft("local_ai_get_status");
}
async function vf(e) {
  return await ft("local_ai_start_service", {
    config: e ?? null
  });
}
async function hf() {
  return await ft("local_ai_restart_service");
}
async function gf() {
  await ft("local_ai_stop_service");
}
async function _s(e) {
  return await ft("local_ai_chat", { request: e });
}
async function yf() {
  return await ft("local_ai_get_chat_histories");
}
async function bf(e) {
  return await ft("local_ai_save_chat_history", { history: e });
}
async function _f(e) {
  return await ft("local_ai_delete_chat_history", { historyId: e });
}
const di = Symbol(), xo = "el", wf = "is-", wn = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, fi = Symbol("namespaceContextKey"), sa = (e) => {
  const t = e || (lt() ? Se(fi, V(xo)) : V(xo));
  return A(() => l(t) || xo);
}, Be = (e, t) => {
  const n = sa(t);
  return {
    namespace: n,
    b: (m = "") => wn(n.value, e, m, "", ""),
    e: (m) => m ? wn(n.value, e, "", m, "") : "",
    m: (m) => m ? wn(n.value, e, "", "", m) : "",
    be: (m, C) => m && C ? wn(n.value, e, m, C, "") : "",
    em: (m, C) => m && C ? wn(n.value, e, "", m, C) : "",
    bm: (m, C) => m && C ? wn(n.value, e, m, "", C) : "",
    bem: (m, C, d) => m && C && d ? wn(n.value, e, m, C, d) : "",
    is: (m, ...C) => {
      const d = C.length >= 1 ? C[0] : !0;
      return m && d ? `${wf}${m}` : "";
    },
    cssVar: (m) => {
      const C = {};
      for (const d in m)
        m[d] && (C[`--${n.value}-${d}`] = m[d]);
      return C;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const C = {};
      for (const d in m)
        m[d] && (C[`--${n.value}-${e}-${d}`] = m[d]);
      return C;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fo = () => {
}, Cf = Object.prototype.hasOwnProperty, ws = (e, t) => Cf.call(e, t), $t = Array.isArray, Ne = (e) => typeof e == "function", tt = (e) => typeof e == "string", mt = (e) => e !== null && typeof e == "object", Cs = (e) => (mt(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), Ef = Object.prototype.toString, Sf = (e) => Ef.call(e), Tf = (e) => Sf(e) === "[object Object]";
var pi = typeof global == "object" && global && global.Object === Object && global, kf = typeof self == "object" && self && self.Object === Object && self, Wt = pi || kf || Function("return this")(), jt = Wt.Symbol, mi = Object.prototype, Of = mi.hasOwnProperty, Lf = mi.toString, Qn = jt ? jt.toStringTag : void 0;
function Af(e) {
  var t = Of.call(e, Qn), n = e[Qn];
  try {
    e[Qn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Lf.call(e);
  return o && (t ? e[Qn] = n : delete e[Qn]), r;
}
var If = Object.prototype, Pf = If.toString;
function Nf(e) {
  return Pf.call(e);
}
var $f = "[object Null]", Rf = "[object Undefined]", Es = jt ? jt.toStringTag : void 0;
function Zn(e) {
  return e == null ? e === void 0 ? Rf : $f : Es && Es in Object(e) ? Af(e) : Nf(e);
}
function Bn(e) {
  return e != null && typeof e == "object";
}
var Mf = "[object Symbol]";
function or(e) {
  return typeof e == "symbol" || Bn(e) && Zn(e) == Mf;
}
function Df(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ot = Array.isArray, Ss = jt ? jt.prototype : void 0, Ts = Ss ? Ss.toString : void 0;
function vi(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return Df(e, vi) + "";
  if (or(e))
    return Ts ? Ts.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ff = /\s/;
function xf(e) {
  for (var t = e.length; t-- && Ff.test(e.charAt(t)); )
    ;
  return t;
}
var Vf = /^\s+/;
function jf(e) {
  return e && e.slice(0, xf(e) + 1).replace(Vf, "");
}
function vn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ks = NaN, Bf = /^[-+]0x[0-9a-f]+$/i, zf = /^0b[01]+$/i, Wf = /^0o[0-7]+$/i, Uf = parseInt;
function Os(e) {
  if (typeof e == "number")
    return e;
  if (or(e))
    return ks;
  if (vn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = jf(e);
  var n = zf.test(e);
  return n || Wf.test(e) ? Uf(e.slice(2), n ? 2 : 8) : Bf.test(e) ? ks : +e;
}
function hi(e) {
  return e;
}
var Hf = "[object AsyncFunction]", Kf = "[object Function]", Gf = "[object GeneratorFunction]", Yf = "[object Proxy]";
function gi(e) {
  if (!vn(e))
    return !1;
  var t = Zn(e);
  return t == Kf || t == Gf || t == Hf || t == Yf;
}
var Sr = Wt["__core-js_shared__"], Ls = function() {
  var e = /[^.]+$/.exec(Sr && Sr.keys && Sr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qf(e) {
  return !!Ls && Ls in e;
}
var Zf = Function.prototype, Xf = Zf.toString;
function Ln(e) {
  if (e != null) {
    try {
      return Xf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jf = /[\\^$.*+?()[\]{}|]/g, Qf = /^\[object .+?Constructor\]$/, ep = Function.prototype, tp = Object.prototype, np = ep.toString, op = tp.hasOwnProperty, rp = RegExp(
  "^" + np.call(op).replace(Jf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ap(e) {
  if (!vn(e) || qf(e))
    return !1;
  var t = gi(e) ? rp : Qf;
  return t.test(Ln(e));
}
function sp(e, t) {
  return e?.[t];
}
function An(e, t) {
  var n = sp(e, t);
  return ap(n) ? n : void 0;
}
var jr = An(Wt, "WeakMap");
function lp(e, t, n) {
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
var ip = 800, up = 16, cp = Date.now;
function dp(e) {
  var t = 0, n = 0;
  return function() {
    var o = cp(), r = up - (o - n);
    if (n = o, r > 0) {
      if (++t >= ip)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function fp(e) {
  return function() {
    return e;
  };
}
var Uo = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), pp = Uo ? function(e, t) {
  return Uo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fp(t),
    writable: !0
  });
} : hi, mp = dp(pp);
function vp(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var hp = 9007199254740991, gp = /^(?:0|[1-9]\d*)$/;
function la(e, t) {
  var n = typeof e;
  return t = t ?? hp, !!t && (n == "number" || n != "symbol" && gp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function yp(e, t, n) {
  t == "__proto__" && Uo ? Uo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ia(e, t) {
  return e === t || e !== e && t !== t;
}
var bp = Object.prototype, _p = bp.hasOwnProperty;
function wp(e, t, n) {
  var o = e[t];
  (!(_p.call(e, t) && ia(o, n)) || n === void 0 && !(t in e)) && yp(e, t, n);
}
var As = Math.max;
function Cp(e, t, n) {
  return t = As(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = As(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(s), lp(e, this, i);
  };
}
var Ep = 9007199254740991;
function ua(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ep;
}
function Sp(e) {
  return e != null && ua(e.length) && !gi(e);
}
var Tp = Object.prototype;
function kp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Tp;
  return e === n;
}
function Op(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Lp = "[object Arguments]";
function Is(e) {
  return Bn(e) && Zn(e) == Lp;
}
var yi = Object.prototype, Ap = yi.hasOwnProperty, Ip = yi.propertyIsEnumerable, ca = Is(/* @__PURE__ */ function() {
  return arguments;
}()) ? Is : function(e) {
  return Bn(e) && Ap.call(e, "callee") && !Ip.call(e, "callee");
};
function Pp() {
  return !1;
}
var bi = typeof exports == "object" && exports && !exports.nodeType && exports, Ps = bi && typeof module == "object" && module && !module.nodeType && module, Np = Ps && Ps.exports === bi, Ns = Np ? Wt.Buffer : void 0, $p = Ns ? Ns.isBuffer : void 0, Br = $p || Pp, Rp = "[object Arguments]", Mp = "[object Array]", Dp = "[object Boolean]", Fp = "[object Date]", xp = "[object Error]", Vp = "[object Function]", jp = "[object Map]", Bp = "[object Number]", zp = "[object Object]", Wp = "[object RegExp]", Up = "[object Set]", Hp = "[object String]", Kp = "[object WeakMap]", Gp = "[object ArrayBuffer]", Yp = "[object DataView]", qp = "[object Float32Array]", Zp = "[object Float64Array]", Xp = "[object Int8Array]", Jp = "[object Int16Array]", Qp = "[object Int32Array]", em = "[object Uint8Array]", tm = "[object Uint8ClampedArray]", nm = "[object Uint16Array]", om = "[object Uint32Array]", Oe = {};
Oe[qp] = Oe[Zp] = Oe[Xp] = Oe[Jp] = Oe[Qp] = Oe[em] = Oe[tm] = Oe[nm] = Oe[om] = !0;
Oe[Rp] = Oe[Mp] = Oe[Gp] = Oe[Dp] = Oe[Yp] = Oe[Fp] = Oe[xp] = Oe[Vp] = Oe[jp] = Oe[Bp] = Oe[zp] = Oe[Wp] = Oe[Up] = Oe[Hp] = Oe[Kp] = !1;
function rm(e) {
  return Bn(e) && ua(e.length) && !!Oe[Zn(e)];
}
function am(e) {
  return function(t) {
    return e(t);
  };
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, no = _i && typeof module == "object" && module && !module.nodeType && module, sm = no && no.exports === _i, Tr = sm && pi.process, $s = function() {
  try {
    var e = no && no.require && no.require("util").types;
    return e || Tr && Tr.binding && Tr.binding("util");
  } catch {
  }
}(), Rs = $s && $s.isTypedArray, wi = Rs ? am(Rs) : rm, lm = Object.prototype, im = lm.hasOwnProperty;
function um(e, t) {
  var n = Ot(e), o = !n && ca(e), r = !n && !o && Br(e), a = !n && !o && !r && wi(e), s = n || o || r || a, i = s ? Op(e.length, String) : [], u = i.length;
  for (var c in e)
    im.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    la(c, u))) && i.push(c);
  return i;
}
function cm(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var dm = cm(Object.keys, Object), fm = Object.prototype, pm = fm.hasOwnProperty;
function mm(e) {
  if (!kp(e))
    return dm(e);
  var t = [];
  for (var n in Object(e))
    pm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ci(e) {
  return Sp(e) ? um(e) : mm(e);
}
var vm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hm = /^\w*$/;
function da(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || or(e) ? !0 : hm.test(e) || !vm.test(e) || t != null && e in Object(t);
}
var po = An(Object, "create");
function gm() {
  this.__data__ = po ? po(null) : {}, this.size = 0;
}
function ym(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var bm = "__lodash_hash_undefined__", _m = Object.prototype, wm = _m.hasOwnProperty;
function Cm(e) {
  var t = this.__data__;
  if (po) {
    var n = t[e];
    return n === bm ? void 0 : n;
  }
  return wm.call(t, e) ? t[e] : void 0;
}
var Em = Object.prototype, Sm = Em.hasOwnProperty;
function Tm(e) {
  var t = this.__data__;
  return po ? t[e] !== void 0 : Sm.call(t, e);
}
var km = "__lodash_hash_undefined__";
function Om(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = po && t === void 0 ? km : t, this;
}
function Tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tn.prototype.clear = gm;
Tn.prototype.delete = ym;
Tn.prototype.get = Cm;
Tn.prototype.has = Tm;
Tn.prototype.set = Om;
function Lm() {
  this.__data__ = [], this.size = 0;
}
function rr(e, t) {
  for (var n = e.length; n--; )
    if (ia(e[n][0], t))
      return n;
  return -1;
}
var Am = Array.prototype, Im = Am.splice;
function Pm(e) {
  var t = this.__data__, n = rr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Im.call(t, n, 1), --this.size, !0;
}
function Nm(e) {
  var t = this.__data__, n = rr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function $m(e) {
  return rr(this.__data__, e) > -1;
}
function Rm(e, t) {
  var n = this.__data__, o = rr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
rn.prototype.clear = Lm;
rn.prototype.delete = Pm;
rn.prototype.get = Nm;
rn.prototype.has = $m;
rn.prototype.set = Rm;
var mo = An(Wt, "Map");
function Mm() {
  this.size = 0, this.__data__ = {
    hash: new Tn(),
    map: new (mo || rn)(),
    string: new Tn()
  };
}
function Dm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ar(e, t) {
  var n = e.__data__;
  return Dm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Fm(e) {
  var t = ar(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xm(e) {
  return ar(this, e).get(e);
}
function Vm(e) {
  return ar(this, e).has(e);
}
function jm(e, t) {
  var n = ar(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
an.prototype.clear = Mm;
an.prototype.delete = Fm;
an.prototype.get = xm;
an.prototype.has = Vm;
an.prototype.set = jm;
var Bm = "Expected a function";
function fa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bm);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (fa.Cache || an)(), n;
}
fa.Cache = an;
var zm = 500;
function Wm(e) {
  var t = fa(e, function(o) {
    return n.size === zm && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Um = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hm = /\\(\\)?/g, Km = Wm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Um, function(n, o, r, a) {
    t.push(r ? a.replace(Hm, "$1") : o || n);
  }), t;
});
function Gm(e) {
  return e == null ? "" : vi(e);
}
function sr(e, t) {
  return Ot(e) ? e : da(e, t) ? [e] : Km(Gm(e));
}
function yo(e) {
  if (typeof e == "string" || or(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function pa(e, t) {
  t = sr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[yo(t[n++])];
  return n && n == o ? e : void 0;
}
function fn(e, t, n) {
  var o = e == null ? void 0 : pa(e, t);
  return o === void 0 ? n : o;
}
function Ei(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Ms = jt ? jt.isConcatSpreadable : void 0;
function Ym(e) {
  return Ot(e) || ca(e) || !!(Ms && e && e[Ms]);
}
function qm(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = Ym), r || (r = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Ei(r, i) : r[r.length] = i;
  }
  return r;
}
function Zm(e) {
  var t = e == null ? 0 : e.length;
  return t ? qm(e) : [];
}
function Xm(e) {
  return mp(Cp(e, void 0, Zm), e + "");
}
function dn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Ot(e) ? e : [e];
}
function Jm() {
  this.__data__ = new rn(), this.size = 0;
}
function Qm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ev(e) {
  return this.__data__.get(e);
}
function tv(e) {
  return this.__data__.has(e);
}
var nv = 200;
function ov(e, t) {
  var n = this.__data__;
  if (n instanceof rn) {
    var o = n.__data__;
    if (!mo || o.length < nv - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new an(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jt(e) {
  var t = this.__data__ = new rn(e);
  this.size = t.size;
}
Jt.prototype.clear = Jm;
Jt.prototype.delete = Qm;
Jt.prototype.get = ev;
Jt.prototype.has = tv;
Jt.prototype.set = ov;
function rv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (a[r++] = s);
  }
  return a;
}
function av() {
  return [];
}
var sv = Object.prototype, lv = sv.propertyIsEnumerable, Ds = Object.getOwnPropertySymbols, iv = Ds ? function(e) {
  return e == null ? [] : (e = Object(e), rv(Ds(e), function(t) {
    return lv.call(e, t);
  }));
} : av;
function uv(e, t, n) {
  var o = t(e);
  return Ot(e) ? o : Ei(o, n(e));
}
function Fs(e) {
  return uv(e, Ci, iv);
}
var zr = An(Wt, "DataView"), Wr = An(Wt, "Promise"), Ur = An(Wt, "Set"), xs = "[object Map]", cv = "[object Object]", Vs = "[object Promise]", js = "[object Set]", Bs = "[object WeakMap]", zs = "[object DataView]", dv = Ln(zr), fv = Ln(mo), pv = Ln(Wr), mv = Ln(Ur), vv = Ln(jr), cn = Zn;
(zr && cn(new zr(new ArrayBuffer(1))) != zs || mo && cn(new mo()) != xs || Wr && cn(Wr.resolve()) != Vs || Ur && cn(new Ur()) != js || jr && cn(new jr()) != Bs) && (cn = function(e) {
  var t = Zn(e), n = t == cv ? e.constructor : void 0, o = n ? Ln(n) : "";
  if (o)
    switch (o) {
      case dv:
        return zs;
      case fv:
        return xs;
      case pv:
        return Vs;
      case mv:
        return js;
      case vv:
        return Bs;
    }
  return t;
});
var Ws = Wt.Uint8Array, hv = "__lodash_hash_undefined__";
function gv(e) {
  return this.__data__.set(e, hv), this;
}
function yv(e) {
  return this.__data__.has(e);
}
function Ho(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new an(); ++t < n; )
    this.add(e[t]);
}
Ho.prototype.add = Ho.prototype.push = gv;
Ho.prototype.has = yv;
function bv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function _v(e, t) {
  return e.has(t);
}
var wv = 1, Cv = 2;
function Si(e, t, n, o, r, a) {
  var s = n & wv, i = e.length, u = t.length;
  if (i != u && !(s && u > i))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, v = !0, y = n & Cv ? new Ho() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var h = e[p], m = t[p];
    if (o)
      var C = s ? o(m, h, p, t, e, a) : o(h, m, p, e, t, a);
    if (C !== void 0) {
      if (C)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!bv(t, function(d, S) {
        if (!_v(y, S) && (h === d || r(h, d, n, o, a)))
          return y.push(S);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === m || r(h, m, n, o, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function Ev(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Sv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Tv = 1, kv = 2, Ov = "[object Boolean]", Lv = "[object Date]", Av = "[object Error]", Iv = "[object Map]", Pv = "[object Number]", Nv = "[object RegExp]", $v = "[object Set]", Rv = "[object String]", Mv = "[object Symbol]", Dv = "[object ArrayBuffer]", Fv = "[object DataView]", Us = jt ? jt.prototype : void 0, kr = Us ? Us.valueOf : void 0;
function xv(e, t, n, o, r, a, s) {
  switch (n) {
    case Fv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Dv:
      return !(e.byteLength != t.byteLength || !a(new Ws(e), new Ws(t)));
    case Ov:
    case Lv:
    case Pv:
      return ia(+e, +t);
    case Av:
      return e.name == t.name && e.message == t.message;
    case Nv:
    case Rv:
      return e == t + "";
    case Iv:
      var i = Ev;
    case $v:
      var u = o & Tv;
      if (i || (i = Sv), e.size != t.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      o |= kv, s.set(e, t);
      var f = Si(i(e), i(t), o, r, a, s);
      return s.delete(e), f;
    case Mv:
      if (kr)
        return kr.call(e) == kr.call(t);
  }
  return !1;
}
var Vv = 1, jv = Object.prototype, Bv = jv.hasOwnProperty;
function zv(e, t, n, o, r, a) {
  var s = n & Vv, i = Fs(e), u = i.length, c = Fs(t), f = c.length;
  if (u != f && !s)
    return !1;
  for (var p = u; p--; ) {
    var v = i[p];
    if (!(s ? v in t : Bv.call(t, v)))
      return !1;
  }
  var y = a.get(e), h = a.get(t);
  if (y && h)
    return y == t && h == e;
  var m = !0;
  a.set(e, t), a.set(t, e);
  for (var C = s; ++p < u; ) {
    v = i[p];
    var d = e[v], S = t[v];
    if (o)
      var L = s ? o(S, d, v, t, e, a) : o(d, S, v, e, t, a);
    if (!(L === void 0 ? d === S || r(d, S, n, o, a) : L)) {
      m = !1;
      break;
    }
    C || (C = v == "constructor");
  }
  if (m && !C) {
    var E = e.constructor, b = t.constructor;
    E != b && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof b == "function" && b instanceof b) && (m = !1);
  }
  return a.delete(e), a.delete(t), m;
}
var Wv = 1, Hs = "[object Arguments]", Ks = "[object Array]", Io = "[object Object]", Uv = Object.prototype, Gs = Uv.hasOwnProperty;
function Hv(e, t, n, o, r, a) {
  var s = Ot(e), i = Ot(t), u = s ? Ks : cn(e), c = i ? Ks : cn(t);
  u = u == Hs ? Io : u, c = c == Hs ? Io : c;
  var f = u == Io, p = c == Io, v = u == c;
  if (v && Br(e)) {
    if (!Br(t))
      return !1;
    s = !0, f = !1;
  }
  if (v && !f)
    return a || (a = new Jt()), s || wi(e) ? Si(e, t, n, o, r, a) : xv(e, t, u, n, o, r, a);
  if (!(n & Wv)) {
    var y = f && Gs.call(e, "__wrapped__"), h = p && Gs.call(t, "__wrapped__");
    if (y || h) {
      var m = y ? e.value() : e, C = h ? t.value() : t;
      return a || (a = new Jt()), r(m, C, n, o, a);
    }
  }
  return v ? (a || (a = new Jt()), zv(e, t, n, o, r, a)) : !1;
}
function lr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Bn(e) && !Bn(t) ? e !== e && t !== t : Hv(e, t, n, o, lr, r);
}
var Kv = 1, Gv = 2;
function Yv(e, t, n, o) {
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
    var i = s[0], u = e[i], c = s[1];
    if (s[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var f = new Jt(), p;
      if (!(p === void 0 ? lr(c, u, Kv | Gv, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function Ti(e) {
  return e === e && !vn(e);
}
function qv(e) {
  for (var t = Ci(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Ti(r)];
  }
  return t;
}
function ki(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Zv(e) {
  var t = qv(e);
  return t.length == 1 && t[0][2] ? ki(t[0][0], t[0][1]) : function(n) {
    return n === e || Yv(n, e, t);
  };
}
function Xv(e, t) {
  return e != null && t in Object(e);
}
function Jv(e, t, n) {
  t = sr(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var s = yo(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && ua(r) && la(s, r) && (Ot(e) || ca(e)));
}
function Oi(e, t) {
  return e != null && Jv(e, t, Xv);
}
var Qv = 1, eh = 2;
function th(e, t) {
  return da(e) && Ti(t) ? ki(yo(e), t) : function(n) {
    var o = fn(n, e);
    return o === void 0 && o === t ? Oi(n, e) : lr(t, o, Qv | eh);
  };
}
function nh(e) {
  return function(t) {
    return t?.[e];
  };
}
function oh(e) {
  return function(t) {
    return pa(t, e);
  };
}
function rh(e) {
  return da(e) ? nh(yo(e)) : oh(e);
}
function ah(e) {
  return typeof e == "function" ? e : e == null ? hi : typeof e == "object" ? Ot(e) ? th(e[0], e[1]) : Zv(e) : rh(e);
}
var Or = function() {
  return Wt.Date.now();
}, sh = "Expected a function", lh = Math.max, ih = Math.min;
function uh(e, t, n) {
  var o, r, a, s, i, u, c = 0, f = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(sh);
  t = Os(t) || 0, vn(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? lh(Os(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function y(O) {
    var k = o, B = r;
    return o = r = void 0, c = O, s = e.apply(B, k), s;
  }
  function h(O) {
    return c = O, i = setTimeout(d, t), f ? y(O) : s;
  }
  function m(O) {
    var k = O - u, B = O - c, z = t - k;
    return p ? ih(z, a - B) : z;
  }
  function C(O) {
    var k = O - u, B = O - c;
    return u === void 0 || k >= t || k < 0 || p && B >= a;
  }
  function d() {
    var O = Or();
    if (C(O))
      return S(O);
    i = setTimeout(d, m(O));
  }
  function S(O) {
    return i = void 0, v && o ? y(O) : (o = r = void 0, s);
  }
  function L() {
    i !== void 0 && clearTimeout(i), c = 0, o = u = r = i = void 0;
  }
  function E() {
    return i === void 0 ? s : S(Or());
  }
  function b() {
    var O = Or(), k = C(O);
    if (o = arguments, r = this, u = O, k) {
      if (i === void 0)
        return h(u);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), y(u);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return b.cancel = L, b.flush = E, b;
}
function ch(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return vp(e, ah(t), r);
}
function Ko(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function oo(e, t) {
  return lr(e, t);
}
function Qt(e) {
  return e == null;
}
function dh(e) {
  return e === void 0;
}
function fh(e, t, n, o) {
  if (!vn(e))
    return e;
  t = sr(t, e);
  for (var r = -1, a = t.length, s = a - 1, i = e; i != null && ++r < a; ) {
    var u = yo(t[r]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (r != s) {
      var f = i[u];
      c = void 0, c === void 0 && (c = vn(f) ? f : la(t[r + 1]) ? [] : {});
    }
    wp(i, u, c), i = i[u];
  }
  return e;
}
function ph(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], i = pa(e, s);
    n(i, s) && fh(a, sr(s, e), i);
  }
  return a;
}
function mh(e, t) {
  return ph(e, t, function(n, o) {
    return Oi(e, o);
  });
}
var vh = Xm(function(e, t) {
  return e == null ? {} : mh(e, t);
});
const Rt = (e) => e === void 0, mn = (e) => typeof e == "boolean", Ee = (e) => typeof e == "number", Tt = (e) => typeof Element > "u" ? !1 : e instanceof Element, hh = (e) => tt(e) ? !Number.isNaN(Number(e)) : !1;
var gh = Object.defineProperty, yh = Object.defineProperties, bh = Object.getOwnPropertyDescriptors, Ys = Object.getOwnPropertySymbols, _h = Object.prototype.hasOwnProperty, wh = Object.prototype.propertyIsEnumerable, qs = (e, t, n) => t in e ? gh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ch = (e, t) => {
  for (var n in t || (t = {}))
    _h.call(t, n) && qs(e, n, t[n]);
  if (Ys)
    for (var n of Ys(t))
      wh.call(t, n) && qs(e, n, t[n]);
  return e;
}, Eh = (e, t) => yh(e, bh(t));
function Sh(e, t) {
  var n;
  const o = pn();
  return xl(() => {
    o.value = e();
  }, Eh(Ch({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Xr(o);
}
var Zs;
const je = typeof window < "u", Th = (e) => typeof e == "string", Li = () => {
}, Hr = je && ((Zs = window?.navigator) == null ? void 0 : Zs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ma(e) {
  return typeof e == "function" ? e() : l(e);
}
function kh(e) {
  return e;
}
function bo(e) {
  return Yu() ? (qu(e), !0) : !1;
}
function Oh(e, t = !0) {
  lt() ? xe(e) : t ? e() : Me(e);
}
function Ai(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = V(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = !1, s();
  }
  function u(...c) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...c);
    }, ma(t));
  }
  return o && (r.value = !0, je && u()), bo(i), {
    isPending: Xr(r),
    start: u,
    stop: i
  };
}
function Zt(e) {
  var t;
  const n = ma(e);
  return (t = n?.$el) != null ? t : n;
}
const ir = je ? window : void 0;
function kt(...e) {
  let t, n, o, r;
  if (Th(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = ir) : [t, n, o, r] = e, !t)
    return Li;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, p, v, y) => (f.addEventListener(p, v, y), () => f.removeEventListener(p, v, y)), u = ue(() => [Zt(t), ma(r)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((v) => o.map((y) => i(f, v, y, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return bo(c), c;
}
let Xs = !1;
function Lh(e, t, n = {}) {
  const { window: o = ir, ignore: r = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Hr && !Xs && (Xs = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Li)));
  let i = !0;
  const u = (v) => r.some((y) => {
    if (typeof y == "string")
      return Array.from(o.document.querySelectorAll(y)).some((h) => h === v.target || v.composedPath().includes(h));
    {
      const h = Zt(y);
      return h && (v.target === h || v.composedPath().includes(h));
    }
  }), f = [
    kt(o, "click", (v) => {
      const y = Zt(e);
      if (!(!y || y === v.target || v.composedPath().includes(y))) {
        if (v.detail === 0 && (i = !u(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: a }),
    kt(o, "pointerdown", (v) => {
      const y = Zt(e);
      y && (i = !v.composedPath().includes(y) && !u(v));
    }, { passive: !0 }),
    s && kt(o, "blur", (v) => {
      var y;
      const h = Zt(e);
      ((y = o.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !h?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function Ii(e, t = !1) {
  const n = V(), o = () => n.value = !!e();
  return o(), Oh(o, t), n;
}
const Js = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qs = "__vueuse_ssr_handlers__";
Js[Qs] = Js[Qs] || {};
var el = Object.getOwnPropertySymbols, Ah = Object.prototype.hasOwnProperty, Ih = Object.prototype.propertyIsEnumerable, Ph = (e, t) => {
  var n = {};
  for (var o in e)
    Ah.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && el)
    for (var o of el(e))
      t.indexOf(o) < 0 && Ih.call(e, o) && (n[o] = e[o]);
  return n;
};
function Nt(e, t, n = {}) {
  const o = n, { window: r = ir } = o, a = Ph(o, ["window"]);
  let s;
  const i = Ii(() => r && "ResizeObserver" in r), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ue(() => Zt(e), (p) => {
    u(), i.value && r && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return bo(f), {
    isSupported: i,
    stop: f
  };
}
var tl = Object.getOwnPropertySymbols, Nh = Object.prototype.hasOwnProperty, $h = Object.prototype.propertyIsEnumerable, Rh = (e, t) => {
  var n = {};
  for (var o in e)
    Nh.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && tl)
    for (var o of tl(e))
      t.indexOf(o) < 0 && $h.call(e, o) && (n[o] = e[o]);
  return n;
};
function Mh(e, t, n = {}) {
  const o = n, { window: r = ir } = o, a = Rh(o, ["window"]);
  let s;
  const i = Ii(() => r && "MutationObserver" in r), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ue(() => Zt(e), (p) => {
    u(), i.value && r && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    u(), c();
  };
  return bo(f), {
    isSupported: i,
    stop: f
  };
}
var nl;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(nl || (nl = {}));
var Dh = Object.defineProperty, ol = Object.getOwnPropertySymbols, Fh = Object.prototype.hasOwnProperty, xh = Object.prototype.propertyIsEnumerable, rl = (e, t, n) => t in e ? Dh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vh = (e, t) => {
  for (var n in t || (t = {}))
    Fh.call(t, n) && rl(e, n, t[n]);
  if (ol)
    for (var n of ol(t))
      xh.call(t, n) && rl(e, n, t[n]);
  return e;
};
const jh = {
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
Vh({
  linear: kh
}, jh);
class Bh extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function va(e, t) {
  throw new Bh(`[${e}] ${t}`);
}
const al = {
  current: 0
}, sl = V(0), Pi = 2e3, ll = Symbol("elZIndexContextKey"), Ni = Symbol("zIndexContextKey"), $i = (e) => {
  const t = lt() ? Se(ll, al) : al, n = e || (lt() ? Se(Ni, void 0) : void 0), o = A(() => {
    const s = l(n);
    return Ee(s) ? s : Pi;
  }), r = A(() => o.value + sl.value), a = () => (t.current++, sl.value = t.current, r.value);
  return !je && Se(ll), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: a
  };
};
var zh = {
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
const Wh = (e) => (t, n) => Uh(t, n, l(e)), Uh = (e, t, n) => fn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t?.[r]) != null ? a : `{${r}}`}`;
}), Hh = (e) => {
  const t = A(() => l(e).name), n = Dn(e) ? e : V(e);
  return {
    lang: t,
    locale: n,
    t: Wh(e)
  };
}, Ri = Symbol("localeContextKey"), ha = (e) => {
  const t = e || Se(Ri, V());
  return Hh(A(() => t.value || zh));
}, Mi = "__epPropKey", le = (e) => e, Kh = (e) => mt(e) && !!e[Mi], ur = (e, t) => {
  if (!mt(e) || Kh(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, u = {
    type: a,
    required: !!o,
    validator: n || s ? (c) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), ws(e, "default") && p.push(r), f || (f = p.includes(c))), s && (f || (f = s(c))), !f && p.length > 0) {
        const v = [...new Set(p)].map((y) => JSON.stringify(y)).join(", ");
        Zu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [Mi]: !0
  };
  return ws(e, "default") && (u.default = r), u;
}, Le = (e) => Ko(Object.entries(e).map(([t, n]) => [
  t,
  ur(n, t)
])), ga = ["", "default", "small", "large"], cr = ur({
  type: String,
  values: ga,
  required: !1
}), Di = Symbol("size"), Gh = () => {
  const e = Se(Di, {});
  return A(() => l(e.size) || "");
}, Fi = Symbol("emptyValuesContextKey"), Yh = ["", void 0, null], qh = void 0, xi = Le({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ne(e) ? !e() : !e
  }
}), Zh = (e, t) => {
  const n = lt() ? Se(Fi, V({})) : V({}), o = A(() => e.emptyValues || n.value.emptyValues || Yh), r = A(() => Ne(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ne(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : qh), a = (s) => o.value.includes(s);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: a
  };
}, il = (e) => Object.keys(e), Go = V();
function Vi(e, t = void 0) {
  return lt() ? Se(di, Go) : Go;
}
function ji(e, t) {
  const n = Vi(), o = Be(e, A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || xo;
  })), r = ha(A(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = $i(A(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Pi;
  })), s = A(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Bi(A(() => l(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
const Bi = (e, t, n = !1) => {
  var o;
  const r = !!lt(), a = r ? Vi() : void 0, s = (o = void 0) != null ? o : r ? Vt : void 0;
  if (!s)
    return;
  const i = A(() => {
    const u = l(e);
    return a?.value ? Xh(a.value, u) : u;
  });
  return s(di, i), s(Ri, A(() => i.value.locale)), s(fi, A(() => i.value.namespace)), s(Ni, A(() => i.value.zIndex)), s(Di, {
    size: A(() => i.value.size || "")
  }), s(Fi, A(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Go.value) && (Go.value = i.value), i;
}, Xh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...il(e), ...il(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Ye = "update:modelValue", nn = "change", en = "input";
var Ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function zn(e, t = "px") {
  if (!e)
    return "";
  if (Ee(e) || hh(e))
    return `${e}${t}`;
  if (tt(e))
    return e;
}
function Jh(e, t) {
  if (!je)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), a = r + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  r < s ? e.scrollTop = r : a > i && (e.scrollTop = a - e.clientHeight);
}
const Lt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, zi = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Wi = (e) => (e.install = fo, e), Qh = Le({
  size: {
    type: le([Number, String])
  },
  color: {
    type: String
  }
}), eg = Q({
  name: "ElIcon",
  inheritAttrs: !1
}), tg = /* @__PURE__ */ Q({
  ...eg,
  props: Qh,
  setup(e) {
    const t = e, n = Be("icon"), o = A(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: Rt(r) ? void 0 : zn(r),
        "--color": a
      };
    });
    return (r, a) => (I(), W("i", xn({
      class: l(n).b(),
      style: l(o)
    }, r.$attrs), [
      ie(r.$slots, "default")
    ], 16));
  }
});
var ng = /* @__PURE__ */ Ae(tg, [["__file", "icon.vue"]]);
const Ve = Lt(ng);
/*! Element Plus Icons Vue v2.3.1 */
var og = /* @__PURE__ */ Q({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ui = og, rg = /* @__PURE__ */ Q({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), ag = rg, sg = /* @__PURE__ */ Q({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      g("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), lg = sg, ig = /* @__PURE__ */ Q({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), ug = ig, cg = /* @__PURE__ */ Q({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      g("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ya = cg, dg = /* @__PURE__ */ Q({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Yo = dg, fg = /* @__PURE__ */ Q({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      g("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), pg = fg, mg = /* @__PURE__ */ Q({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), vg = mg, hg = /* @__PURE__ */ Q({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Hi = hg, gg = /* @__PURE__ */ Q({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), yg = gg, bg = /* @__PURE__ */ Q({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), _g = bg, wg = /* @__PURE__ */ Q({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Cg = wg, Eg = /* @__PURE__ */ Q({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Sg = Eg, Tg = /* @__PURE__ */ Q({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (I(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), kg = Tg;
const Mt = le([
  String,
  Object,
  Function
]), Og = {
  Close: Yo
}, Lg = {
  Close: Yo
}, qo = {
  success: Cg,
  warning: kg,
  error: ug,
  info: vg
}, Ki = {
  validating: Hi,
  success: lg,
  error: ya
}, Gi = () => je && /firefox/i.test(window.navigator.userAgent);
let ut;
const Ag = {
  height: "0",
  visibility: "hidden",
  overflow: Gi() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Ig = [
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
function Pg(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Ig.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function ul(e, t = 1, n) {
  var o;
  ut || (ut = document.createElement("textarea"), document.body.appendChild(ut));
  const { paddingSize: r, borderSize: a, boxSizing: s, contextStyle: i } = Pg(e);
  i.forEach(([p, v]) => ut?.style.setProperty(p, v)), Object.entries(Ag).forEach(([p, v]) => ut?.style.setProperty(p, v, "important")), ut.value = e.value || e.placeholder || "";
  let u = ut.scrollHeight;
  const c = {};
  s === "border-box" ? u = u + a : s === "content-box" && (u = u - r), ut.value = "";
  const f = ut.scrollHeight - r;
  if (Ee(t)) {
    let p = f * t;
    s === "border-box" && (p = p + r + a), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (Ee(n)) {
    let p = f * n;
    s === "border-box" && (p = p + r + a), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (o = ut.parentNode) == null || o.removeChild(ut), ut = void 0, c;
}
const Yi = (e) => e, Ng = Le({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), In = (e) => vh(Ng, e), $g = Le({
  id: {
    type: String,
    default: void 0
  },
  size: cr,
  disabled: Boolean,
  modelValue: {
    type: le([
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
    type: le([Boolean, Object]),
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
    type: Mt
  },
  prefixIcon: {
    type: Mt
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
    type: le([Object, Array, String]),
    default: () => Yi({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...In(["ariaLabel"])
}), Rg = {
  [Ye]: (e) => tt(e),
  input: (e) => tt(e),
  change: (e) => tt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Mg = ["class", "style"], Dg = /^on[A-Z]/, Fg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = A(() => (n?.value || []).concat(Mg)), r = lt();
  return r ? A(() => {
    var a;
    return Ko(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !o.value.includes(s) && !(t && Dg.test(s))));
  }) : A(() => ({}));
}, ba = Symbol("formContextKey"), Zo = Symbol("formItemContextKey"), cl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, xg = Symbol("elIdInjection"), qi = () => lt() ? Se(xg, cl) : cl, dr = (e) => {
  const t = qi(), n = sa();
  return Sh(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, fr = () => {
  const e = Se(ba, void 0), t = Se(Zo, void 0);
  return {
    form: e,
    formItem: t
  };
}, _a = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = V(!1)), o || (o = V(!1));
  const r = V();
  let a;
  const s = A(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return xe(() => {
    a = ue([Gt(e, "id"), n], ([i, u]) => {
      const c = i ?? (u ? void 0 : dr().value);
      c !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !u && c && t.addInputId(c)), r.value = c);
    }, { immediate: !0 });
  }), Qo(() => {
    a && a(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, Zi = (e) => {
  const t = lt();
  return A(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, _o = (e, t = {}) => {
  const n = V(void 0), o = t.prop ? n : Zi("size"), r = t.global ? n : Gh(), a = t.form ? { size: void 0 } : Se(ba, void 0), s = t.formItem ? { size: void 0 } : Se(Zo, void 0);
  return A(() => o.value || l(e) || s?.size || a?.size || r.value || "");
}, wa = (e) => {
  const t = Zi("disabled"), n = Se(ba, void 0);
  return A(() => t.value || l(e) || n?.disabled || !1);
};
function Xi(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const a = lt(), { emit: s } = a, i = pn(), u = V(!1), c = (v) => {
    Ne(t) && t(v) || u.value || (u.value = !0, s("focus", v), n?.());
  }, f = (v) => {
    var y;
    Ne(o) && o(v) || v.relatedTarget && ((y = i.value) != null && y.contains(v.relatedTarget)) || (u.value = !1, s("blur", v), r?.());
  }, p = () => {
    var v, y;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (y = e.value) == null || y.focus();
  };
  return ue(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), kt(i, "focus", c, !0), kt(i, "blur", f, !0), kt(i, "click", p, !0), {
    isFocused: u,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: f
  };
}
const Vg = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Ji({
  afterComposition: e,
  emit: t
}) {
  const n = V(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var u;
    t?.("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, f = c[c.length - 1] || "";
    n.value = !Vg(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Me(() => e(i)));
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
function jg(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: s } = e.value;
    if (r == null || a == null)
      return;
    const i = s.slice(0, Math.max(0, r)), u = s.slice(Math.max(0, a));
    t = {
      selectionStart: r,
      selectionEnd: a,
      value: s,
      beforeTxt: i,
      afterTxt: u
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: i } = t;
    if (a == null || s == null || i == null)
      return;
    let u = r.length;
    if (r.endsWith(s))
      u = r.length - s.length;
    else if (r.startsWith(a))
      u = a.length;
    else {
      const c = a[i - 1], f = r.indexOf(c, i - 1);
      f !== -1 && (u = f + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, o];
}
const Bg = "ElInput", zg = Q({
  name: Bg,
  inheritAttrs: !1
}), Wg = /* @__PURE__ */ Q({
  ...zg,
  props: $g,
  emits: Rg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Xu(), a = Fg(), s = Ju(), i = A(() => [
      o.type === "textarea" ? m.b() : h.b(),
      h.m(v.value),
      h.is("disabled", y.value),
      h.is("exceed", Re.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || o.prefixIcon,
        [h.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [h.bm("suffix", "password-clear")]: re.value && X.value,
        [h.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), u = A(() => [
      h.e("wrapper"),
      h.is("focus", B.value)
    ]), { form: c, formItem: f } = fr(), { inputId: p } = _a(o, {
      formItemContext: f
    }), v = _o(), y = wa(), h = Be("input"), m = Be("textarea"), C = pn(), d = pn(), S = V(!1), L = V(!1), E = V(), b = pn(o.inputStyle), O = A(() => C.value || d.value), { wrapperRef: k, isFocused: B, handleFocus: z, handleBlur: ee } = Xi(O, {
      beforeFocus() {
        return y.value;
      },
      afterBlur() {
        var _;
        o.validateEvent && ((_ = f?.validate) == null || _.call(f, "blur").catch((M) => void 0));
      }
    }), ae = A(() => {
      var _;
      return (_ = c?.statusIcon) != null ? _ : !1;
    }), Z = A(() => f?.validateState || ""), ce = A(() => Z.value && Ki[Z.value]), ke = A(() => L.value ? Sg : pg), P = A(() => [
      r.style
    ]), R = A(() => [
      o.inputStyle,
      b.value,
      { resize: o.resize }
    ]), x = A(() => Qt(o.modelValue) ? "" : String(o.modelValue)), re = A(() => o.clearable && !y.value && !o.readonly && !!x.value && (B.value || S.value)), X = A(() => o.showPassword && !y.value && !!x.value && (!!x.value || B.value)), fe = A(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !y.value && !o.readonly && !o.showPassword), Y = A(() => x.value.length), Re = A(() => !!fe.value && Y.value > Number(o.maxlength)), _e = A(() => !!s.suffix || !!o.suffixIcon || re.value || o.showPassword || fe.value || !!Z.value && ae.value), [$e, ze] = jg(C);
    Nt(d, (_) => {
      if (he(), !fe.value || o.resize !== "both")
        return;
      const M = _[0], { width: de } = M.contentRect;
      E.value = {
        right: `calc(100% - ${de + 15 + 6}px)`
      };
    });
    const He = () => {
      const { type: _, autosize: M } = o;
      if (!(!je || _ !== "textarea" || !d.value))
        if (M) {
          const de = mt(M) ? M.minRows : void 0, we = mt(M) ? M.maxRows : void 0, Je = ul(d.value, de, we);
          b.value = {
            overflowY: "hidden",
            ...Je
          }, Me(() => {
            d.value.offsetHeight, b.value = Je;
          });
        } else
          b.value = {
            minHeight: ul(d.value).minHeight
          };
    }, he = ((_) => {
      let M = !1;
      return () => {
        var de;
        if (M || !o.autosize)
          return;
        ((de = d.value) == null ? void 0 : de.offsetParent) === null || (_(), M = !0);
      };
    })(He), ot = () => {
      const _ = O.value, M = o.formatter ? o.formatter(x.value) : x.value;
      !_ || _.value === M || (_.value = M);
    }, U = async (_) => {
      $e();
      let { value: M } = _.target;
      if (o.formatter && o.parser && (M = o.parser(M)), !J.value) {
        if (M === x.value) {
          ot();
          return;
        }
        n(Ye, M), n(en, M), await Me(), ot(), ze();
      }
    }, K = (_) => {
      let { value: M } = _.target;
      o.formatter && o.parser && (M = o.parser(M)), n(nn, M);
    }, {
      isComposing: J,
      handleCompositionStart: ve,
      handleCompositionUpdate: me,
      handleCompositionEnd: rt
    } = Ji({ emit: n, afterComposition: U }), it = () => {
      $e(), L.value = !L.value, setTimeout(ze);
    }, At = () => {
      var _;
      return (_ = O.value) == null ? void 0 : _.focus();
    }, w = () => {
      var _;
      return (_ = O.value) == null ? void 0 : _.blur();
    }, T = (_) => {
      S.value = !1, n("mouseleave", _);
    }, D = (_) => {
      S.value = !0, n("mouseenter", _);
    }, G = (_) => {
      n("keydown", _);
    }, ge = () => {
      var _;
      (_ = O.value) == null || _.select();
    }, se = () => {
      n(Ye, ""), n(nn, ""), n("clear"), n(en, "");
    };
    return ue(() => o.modelValue, () => {
      var _;
      Me(() => He()), o.validateEvent && ((_ = f?.validate) == null || _.call(f, "change").catch((M) => void 0));
    }), ue(x, () => ot()), ue(() => o.type, async () => {
      await Me(), ot(), He();
    }), xe(() => {
      !o.formatter && o.parser, ot(), Me(He);
    }), t({
      input: C,
      textarea: d,
      ref: O,
      textareaStyle: R,
      autosize: Gt(o, "autosize"),
      isComposing: J,
      focus: At,
      blur: w,
      select: ge,
      clear: se,
      resizeTextarea: He
    }), (_, M) => (I(), W("div", {
      class: j([
        l(i),
        {
          [l(h).bm("group", "append")]: _.$slots.append,
          [l(h).bm("group", "prepend")]: _.$slots.prepend
        }
      ]),
      style: Ze(l(P)),
      onMouseenter: D,
      onMouseleave: T
    }, [
      q(" input "),
      _.type !== "textarea" ? (I(), W(qe, { key: 0 }, [
        q(" prepend slot "),
        _.$slots.prepend ? (I(), W("div", {
          key: 0,
          class: j(l(h).be("group", "prepend"))
        }, [
          ie(_.$slots, "prepend")
        ], 2)) : q("v-if", !0),
        g("div", {
          ref_key: "wrapperRef",
          ref: k,
          class: j(l(u))
        }, [
          q(" prefix slot "),
          _.$slots.prefix || _.prefixIcon ? (I(), W("span", {
            key: 0,
            class: j(l(h).e("prefix"))
          }, [
            g("span", {
              class: j(l(h).e("prefix-inner"))
            }, [
              ie(_.$slots, "prefix"),
              _.prefixIcon ? (I(), oe(l(Ve), {
                key: 0,
                class: j(l(h).e("icon"))
              }, {
                default: ne(() => [
                  (I(), oe(st(_.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0),
          g("input", xn({
            id: l(p),
            ref_key: "input",
            ref: C,
            class: l(h).e("inner")
          }, l(a), {
            minlength: _.minlength,
            maxlength: _.maxlength,
            type: _.showPassword ? L.value ? "text" : "password" : _.type,
            disabled: l(y),
            readonly: _.readonly,
            autocomplete: _.autocomplete,
            tabindex: _.tabindex,
            "aria-label": _.ariaLabel,
            placeholder: _.placeholder,
            style: _.inputStyle,
            form: _.form,
            autofocus: _.autofocus,
            role: _.containerRole,
            onCompositionstart: l(ve),
            onCompositionupdate: l(me),
            onCompositionend: l(rt),
            onInput: U,
            onChange: K,
            onKeydown: G
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          q(" suffix slot "),
          l(_e) ? (I(), W("span", {
            key: 1,
            class: j(l(h).e("suffix"))
          }, [
            g("span", {
              class: j(l(h).e("suffix-inner"))
            }, [
              !l(re) || !l(X) || !l(fe) ? (I(), W(qe, { key: 0 }, [
                ie(_.$slots, "suffix"),
                _.suffixIcon ? (I(), oe(l(Ve), {
                  key: 0,
                  class: j(l(h).e("icon"))
                }, {
                  default: ne(() => [
                    (I(), oe(st(_.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : q("v-if", !0)
              ], 64)) : q("v-if", !0),
              l(re) ? (I(), oe(l(Ve), {
                key: 1,
                class: j([l(h).e("icon"), l(h).e("clear")]),
                onMousedown: Ie(l(fo), ["prevent"]),
                onClick: se
              }, {
                default: ne(() => [
                  $(l(ya))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : q("v-if", !0),
              l(X) ? (I(), oe(l(Ve), {
                key: 2,
                class: j([l(h).e("icon"), l(h).e("password")]),
                onClick: it
              }, {
                default: ne(() => [
                  (I(), oe(st(l(ke))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              l(fe) ? (I(), W("span", {
                key: 3,
                class: j(l(h).e("count"))
              }, [
                g("span", {
                  class: j(l(h).e("count-inner"))
                }, F(l(Y)) + " / " + F(_.maxlength), 3)
              ], 2)) : q("v-if", !0),
              l(Z) && l(ce) && l(ae) ? (I(), oe(l(Ve), {
                key: 4,
                class: j([
                  l(h).e("icon"),
                  l(h).e("validateIcon"),
                  l(h).is("loading", l(Z) === "validating")
                ])
              }, {
                default: ne(() => [
                  (I(), oe(st(l(ce))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0)
        ], 2),
        q(" append slot "),
        _.$slots.append ? (I(), W("div", {
          key: 1,
          class: j(l(h).be("group", "append"))
        }, [
          ie(_.$slots, "append")
        ], 2)) : q("v-if", !0)
      ], 64)) : (I(), W(qe, { key: 1 }, [
        q(" textarea "),
        g("textarea", xn({
          id: l(p),
          ref_key: "textarea",
          ref: d,
          class: [l(m).e("inner"), l(h).is("focus", l(B))]
        }, l(a), {
          minlength: _.minlength,
          maxlength: _.maxlength,
          tabindex: _.tabindex,
          disabled: l(y),
          readonly: _.readonly,
          autocomplete: _.autocomplete,
          style: l(R),
          "aria-label": _.ariaLabel,
          placeholder: _.placeholder,
          form: _.form,
          autofocus: _.autofocus,
          rows: _.rows,
          role: _.containerRole,
          onCompositionstart: l(ve),
          onCompositionupdate: l(me),
          onCompositionend: l(rt),
          onInput: U,
          onFocus: l(z),
          onBlur: l(ee),
          onChange: K,
          onKeydown: G
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(fe) ? (I(), W("span", {
          key: 0,
          style: Ze(E.value),
          class: j(l(h).e("count"))
        }, F(l(Y)) + " / " + F(_.maxlength), 7)) : q("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ug = /* @__PURE__ */ Ae(Wg, [["__file", "input.vue"]]);
const Hg = Lt(Ug), Nn = 4, Kg = {
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
}, Gg = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ca = Symbol("scrollbarContextKey"), Yg = Le({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), qg = "Thumb", Zg = /* @__PURE__ */ Q({
  __name: "thumb",
  props: Yg,
  setup(e) {
    const t = e, n = Se(Ca), o = Be("scrollbar");
    n || va(qg, "can not inject scrollbar context");
    const r = V(), a = V(), s = V({}), i = V(!1);
    let u = !1, c = !1, f = je ? document.onselectstart : null;
    const p = A(() => Kg[t.vertical ? "vertical" : "horizontal"]), v = A(() => Gg({
      size: t.size,
      move: t.move,
      bar: p.value
    })), y = A(() => r.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), h = (O) => {
      var k;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (k = window.getSelection()) == null || k.removeAllRanges(), C(O);
      const B = O.currentTarget;
      B && (s.value[p.value.axis] = B[p.value.offset] - (O[p.value.client] - B.getBoundingClientRect()[p.value.direction]));
    }, m = (O) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const k = Math.abs(O.target.getBoundingClientRect()[p.value.direction] - O[p.value.client]), B = a.value[p.value.offset] / 2, z = (k - B) * 100 * y.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = z * n.wrapElement[p.value.scrollSize] / 100;
    }, C = (O) => {
      O.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", S), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (O) => {
      if (!r.value || !a.value || u === !1)
        return;
      const k = s.value[p.value.axis];
      if (!k)
        return;
      const B = (r.value.getBoundingClientRect()[p.value.direction] - O[p.value.client]) * -1, z = a.value[p.value.offset] - k, ee = (B - z) * 100 * y.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ee * n.wrapElement[p.value.scrollSize] / 100;
    }, S = () => {
      u = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", S), b(), c && (i.value = !1);
    }, L = () => {
      c = !1, i.value = !!t.size;
    }, E = () => {
      c = !0, i.value = u;
    };
    zt(() => {
      b(), document.removeEventListener("mouseup", S);
    });
    const b = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return kt(Gt(n, "scrollbarElement"), "mousemove", L), kt(Gt(n, "scrollbarElement"), "mouseleave", E), (O, k) => (I(), oe(qn, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: ne(() => [
        Ue(g("div", {
          ref_key: "instance",
          ref: r,
          class: j([l(o).e("bar"), l(o).is(l(p).key)]),
          onMousedown: m
        }, [
          g("div", {
            ref_key: "thumb",
            ref: a,
            class: j(l(o).e("thumb")),
            style: Ze(l(v)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [tn, O.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var dl = /* @__PURE__ */ Ae(Zg, [["__file", "thumb.vue"]]);
const Xg = Le({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Jg = /* @__PURE__ */ Q({
  __name: "bar",
  props: Xg,
  setup(e, { expose: t }) {
    const n = e, o = Se(Ca), r = V(0), a = V(0), s = V(""), i = V(""), u = V(1), c = V(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const y = v.offsetHeight - Nn, h = v.offsetWidth - Nn;
          a.value = v.scrollTop * 100 / y * u.value, r.value = v.scrollLeft * 100 / h * c.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const y = v.offsetHeight - Nn, h = v.offsetWidth - Nn, m = y ** 2 / v.scrollHeight, C = h ** 2 / v.scrollWidth, d = Math.max(m, n.minSize), S = Math.max(C, n.minSize);
        u.value = m / (y - m) / (d / (y - d)), c.value = C / (h - C) / (S / (h - S)), i.value = d + Nn < y ? `${d}px` : "", s.value = S + Nn < h ? `${S}px` : "";
      }
    }), (v, y) => (I(), W(qe, null, [
      $(dl, {
        move: r.value,
        ratio: c.value,
        size: s.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      $(dl, {
        move: a.value,
        ratio: u.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Qg = /* @__PURE__ */ Ae(Jg, [["__file", "bar.vue"]]);
const e0 = Le({
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
    type: le([String, Object, Array]),
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
  ...In(["ariaLabel", "ariaOrientation"])
}), t0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ee)
}, n0 = "ElScrollbar", o0 = Q({
  name: n0
}), r0 = /* @__PURE__ */ Q({
  ...o0,
  props: e0,
  emits: t0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Be("scrollbar");
    let a, s, i = 0, u = 0;
    const c = V(), f = V(), p = V(), v = V(), y = A(() => {
      const b = {};
      return o.height && (b.height = zn(o.height)), o.maxHeight && (b.maxHeight = zn(o.maxHeight)), [o.wrapStyle, b];
    }), h = A(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), m = A(() => [r.e("view"), o.viewClass]), C = () => {
      var b;
      f.value && ((b = v.value) == null || b.handleScroll(f.value), i = f.value.scrollTop, u = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(b, O) {
      mt(b) ? f.value.scrollTo(b) : Ee(b) && Ee(O) && f.value.scrollTo(b, O);
    }
    const S = (b) => {
      Ee(b) && (f.value.scrollTop = b);
    }, L = (b) => {
      Ee(b) && (f.value.scrollLeft = b);
    }, E = () => {
      var b;
      (b = v.value) == null || b.update();
    };
    return ue(() => o.noresize, (b) => {
      b ? (a?.(), s?.()) : ({ stop: a } = Nt(p, E), s = kt("resize", E));
    }, { immediate: !0 }), ue(() => [o.maxHeight, o.height], () => {
      o.native || Me(() => {
        var b;
        E(), f.value && ((b = v.value) == null || b.handleScroll(f.value));
      });
    }), Vt(Ca, Sn({
      scrollbarElement: c,
      wrapElement: f
    })), Qu(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = u);
    }), xe(() => {
      o.native || Me(() => {
        E();
      });
    }), Vl(() => E()), t({
      wrapRef: f,
      update: E,
      scrollTo: d,
      setScrollTop: S,
      setScrollLeft: L,
      handleScroll: C
    }), (b, O) => (I(), W("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: j(l(r).b())
    }, [
      g("div", {
        ref_key: "wrapRef",
        ref: f,
        class: j(l(h)),
        style: Ze(l(y)),
        tabindex: b.tabindex,
        onScroll: C
      }, [
        (I(), oe(st(b.tag), {
          id: b.id,
          ref_key: "resizeRef",
          ref: p,
          class: j(l(m)),
          style: Ze(b.viewStyle),
          role: b.role,
          "aria-label": b.ariaLabel,
          "aria-orientation": b.ariaOrientation
        }, {
          default: ne(() => [
            ie(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      b.native ? q("v-if", !0) : (I(), oe(Qg, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: b.always,
        "min-size": b.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var a0 = /* @__PURE__ */ Ae(r0, [["__file", "scrollbar.vue"]]);
const s0 = Lt(a0), Ea = Symbol("popper"), Qi = Symbol("popperContent"), l0 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], eu = Le({
  role: {
    type: String,
    values: l0,
    default: "tooltip"
  }
}), i0 = Q({
  name: "ElPopper",
  inheritAttrs: !1
}), u0 = /* @__PURE__ */ Q({
  ...i0,
  props: eu,
  setup(e, { expose: t }) {
    const n = e, o = V(), r = V(), a = V(), s = V(), i = A(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(u), Vt(Ea, u), (c, f) => ie(c.$slots, "default");
  }
});
var c0 = /* @__PURE__ */ Ae(u0, [["__file", "popper.vue"]]);
const tu = Le({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), d0 = Q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), f0 = /* @__PURE__ */ Q({
  ...d0,
  props: tu,
  setup(e, { expose: t }) {
    const n = e, o = Be("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = Se(Qi, void 0);
    return ue(() => n.arrowOffset, (i) => {
      r.value = i;
    }), zt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, u) => (I(), W("span", {
      ref_key: "arrowRef",
      ref: a,
      class: j(l(o).e("arrow")),
      style: Ze(l(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var p0 = /* @__PURE__ */ Ae(f0, [["__file", "arrow.vue"]]);
const nu = Le({
  virtualRef: {
    type: le(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: le(Function)
  },
  onMouseleave: {
    type: le(Function)
  },
  onClick: {
    type: le(Function)
  },
  onKeydown: {
    type: le(Function)
  },
  onFocus: {
    type: le(Function)
  },
  onBlur: {
    type: le(Function)
  },
  onContextmenu: {
    type: le(Function)
  },
  id: String,
  open: Boolean
}), ou = Symbol("elForwardRef"), m0 = (e) => {
  Vt(ou, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, v0 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Kr = (e) => {
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
}, h0 = "ElOnlyChild", g0 = Q({
  name: h0,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = Se(ou), a = v0((o = r?.setForwardRef) != null ? o : fo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const u = ru(i);
      return u ? Ue(ec(u, n), [[a]]) : null;
    };
  }
});
function ru(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (mt(n))
      switch (n.type) {
        case tc:
          continue;
        case Fl:
        case "svg":
          return fl(n);
        case qe:
          return ru(n.children);
        default:
          return n;
      }
    return fl(n);
  }
  return null;
}
function fl(e) {
  const t = Be("only-child");
  return $("span", {
    class: t.e("content")
  }, [e]);
}
const y0 = Q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), b0 = /* @__PURE__ */ Q({
  ...y0,
  props: nu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = Se(Ea, void 0);
    m0(r);
    const a = A(() => i.value ? n.id : void 0), s = A(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = A(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), u = A(() => i.value ? `${n.open}` : void 0);
    let c;
    const f = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return xe(() => {
      ue(() => n.virtualRef, (p) => {
        p && (r.value = Zt(p));
      }, {
        immediate: !0
      }), ue(r, (p, v) => {
        c?.(), c = void 0, Tt(p) && (f.forEach((y) => {
          var h;
          const m = n[y];
          m && (p.addEventListener(y.slice(2).toLowerCase(), m), (h = v?.removeEventListener) == null || h.call(v, y.slice(2).toLowerCase(), m));
        }), Kr(p) && (c = ue([a, s, i, u], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, m) => {
            Qt(y[m]) ? p.removeAttribute(h) : p.setAttribute(h, y[m]);
          });
        }, { immediate: !0 }))), Tt(v) && Kr(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => v.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), zt(() => {
      if (c?.(), c = void 0, r.value && Tt(r.value)) {
        const p = r.value;
        f.forEach((v) => {
          const y = n[v];
          y && p.removeEventListener(v.slice(2).toLowerCase(), y);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (p, v) => p.virtualTriggering ? q("v-if", !0) : (I(), oe(l(g0), xn({ key: 0 }, p.$attrs, {
      "aria-controls": l(a),
      "aria-describedby": l(s),
      "aria-expanded": l(u),
      "aria-haspopup": l(i)
    }), {
      default: ne(() => [
        ie(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var _0 = /* @__PURE__ */ Ae(b0, [["__file", "trigger.vue"]]);
const Lr = "focus-trap.focus-after-trapped", Ar = "focus-trap.focus-after-released", w0 = "focus-trap.focusout-prevented", pl = {
  cancelable: !0,
  bubbles: !1
}, C0 = {
  cancelable: !0,
  bubbles: !1
}, ml = "focusAfterTrapped", vl = "focusAfterReleased", E0 = Symbol("elFocusTrap"), Sa = V(), pr = V(0), Ta = V(0);
let Po = 0;
const au = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, hl = (e, t) => {
  for (const n of e)
    if (!S0(n, t))
      return n;
}, S0 = (e, t) => {
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
}, T0 = (e) => {
  const t = au(e), n = hl(t, e), o = hl(t.reverse(), e);
  return [n, o];
}, k0 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Tt(e) && !Kr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Ta.value = window.performance.now(), e !== n && k0(e) && t && e.select(), Tt(e) && o && e.removeAttribute("tabindex");
  }
};
function gl(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const O0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = gl(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = gl(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, L0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Ht(o, t), document.activeElement !== n)
      return;
}, yl = O0(), A0 = () => pr.value > Ta.value, No = () => {
  Sa.value = "pointer", pr.value = window.performance.now();
}, bl = () => {
  Sa.value = "keyboard", pr.value = window.performance.now();
}, I0 = () => (xe(() => {
  Po === 0 && (document.addEventListener("mousedown", No), document.addEventListener("touchstart", No), document.addEventListener("keydown", bl)), Po++;
}), zt(() => {
  Po--, Po <= 0 && (document.removeEventListener("mousedown", No), document.removeEventListener("touchstart", No), document.removeEventListener("keydown", bl));
}), {
  focusReason: Sa,
  lastUserFocusTimestamp: pr,
  lastAutomatedFocusTimestamp: Ta
}), $o = (e) => new CustomEvent(w0, {
  ...C0,
  detail: e
}), Ft = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Mn = [];
const _l = (e) => {
  e.code === Ft.esc && Mn.forEach((t) => t(e));
}, P0 = (e) => {
  xe(() => {
    Mn.length === 0 && document.addEventListener("keydown", _l), je && Mn.push(e);
  }), zt(() => {
    Mn = Mn.filter((t) => t !== e), Mn.length === 0 && je && document.removeEventListener("keydown", _l);
  });
}, N0 = Q({
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
    ml,
    vl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = V();
    let o, r;
    const { focusReason: a } = I0();
    P0((h) => {
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
      const { code: m, altKey: C, ctrlKey: d, metaKey: S, currentTarget: L, shiftKey: E } = h, { loop: b } = e, O = m === Ft.tab && !C && !d && !S, k = document.activeElement;
      if (O && k) {
        const B = L, [z, ee] = T0(B);
        if (z && ee) {
          if (!E && k === ee) {
            const Z = $o({
              focusReason: a.value
            });
            t("focusout-prevented", Z), Z.defaultPrevented || (h.preventDefault(), b && Ht(z, !0));
          } else if (E && [z, B].includes(k)) {
            const Z = $o({
              focusReason: a.value
            });
            t("focusout-prevented", Z), Z.defaultPrevented || (h.preventDefault(), b && Ht(ee, !0));
          }
        } else if (k === B) {
          const Z = $o({
            focusReason: a.value
          });
          t("focusout-prevented", Z), Z.defaultPrevented || h.preventDefault();
        }
      }
    };
    Vt(E0, {
      focusTrapRef: n,
      onKeydown: i
    }), ue(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), ue([n], ([h], [m]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", f), h.addEventListener("focusout", p)), m && (m.removeEventListener("keydown", i), m.removeEventListener("focusin", f), m.removeEventListener("focusout", p));
    });
    const u = (h) => {
      t(ml, h);
    }, c = (h) => t(vl, h), f = (h) => {
      const m = l(n);
      if (!m)
        return;
      const C = h.target, d = h.relatedTarget, S = C && m.contains(C);
      e.trapped || d && m.contains(d) || (o = d), S && t("focusin", h), !s.paused && e.trapped && (S ? r = C : Ht(r, !0));
    }, p = (h) => {
      const m = l(n);
      if (!(s.paused || !m))
        if (e.trapped) {
          const C = h.relatedTarget;
          !Qt(C) && !m.contains(C) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = $o({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ht(r, !0);
            }
          }, 0);
        } else {
          const C = h.target;
          C && m.contains(C) || t("focusout", h);
        }
    };
    async function v() {
      await Me();
      const h = l(n);
      if (h) {
        yl.push(s);
        const m = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = m, !h.contains(m)) {
          const d = new Event(Lr, pl);
          h.addEventListener(Lr, u), h.dispatchEvent(d), d.defaultPrevented || Me(() => {
            let S = e.focusStartEl;
            tt(S) || (Ht(S), document.activeElement !== S && (S = "first")), S === "first" && L0(au(h), !0), (document.activeElement === m || S === "container") && Ht(h);
          });
        }
      }
    }
    function y() {
      const h = l(n);
      if (h) {
        h.removeEventListener(Lr, u);
        const m = new CustomEvent(Ar, {
          ...pl,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(Ar, c), h.dispatchEvent(m), !m.defaultPrevented && (a.value == "keyboard" || !A0() || h.contains(document.activeElement)) && Ht(o ?? document.body), h.removeEventListener(Ar, c), yl.remove(s);
      }
    }
    return xe(() => {
      e.trapped && v(), ue(() => e.trapped, (h) => {
        h ? v() : y();
      });
    }), zt(() => {
      e.trapped && y(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function $0(e, t, n, o, r, a) {
  return ie(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var R0 = /* @__PURE__ */ Ae(N0, [["render", $0], ["__file", "focus-trap.vue"]]), ct = "top", _t = "bottom", wt = "right", dt = "left", ka = "auto", wo = [ct, _t, wt, dt], Wn = "start", vo = "end", M0 = "clippingParents", su = "viewport", eo = "popper", D0 = "reference", wl = wo.reduce(function(e, t) {
  return e.concat([t + "-" + Wn, t + "-" + vo]);
}, []), mr = [].concat(wo, [ka]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Wn, t + "-" + vo]);
}, []), F0 = "beforeRead", x0 = "read", V0 = "afterRead", j0 = "beforeMain", B0 = "main", z0 = "afterMain", W0 = "beforeWrite", U0 = "write", H0 = "afterWrite", K0 = [F0, x0, V0, j0, B0, z0, W0, U0, H0];
function Bt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function kn(e) {
  var t = vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function bt(e) {
  var t = vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Oa(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function G0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !bt(a) || !Bt(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Y0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !bt(r) || !Bt(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(u) {
        r.removeAttribute(u);
      }));
    });
  };
}
var lu = { name: "applyStyles", enabled: !0, phase: "write", fn: G0, effect: Y0, requires: ["computeStyles"] };
function xt(e) {
  return e.split("-")[0];
}
var En = Math.max, Xo = Math.min, Un = Math.round;
function Gr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function iu() {
  return !/^((?!chrome|android).)*safari/i.test(Gr());
}
function Hn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && bt(e) && (r = e.offsetWidth > 0 && Un(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Un(o.height) / e.offsetHeight || 1);
  var s = kn(e) ? vt(e) : window, i = s.visualViewport, u = !iu() && n, c = (o.left + (u && i ? i.offsetLeft : 0)) / r, f = (o.top + (u && i ? i.offsetTop : 0)) / a, p = o.width / r, v = o.height / a;
  return { width: p, height: v, top: f, right: c + p, bottom: f + v, left: c, x: c, y: f };
}
function La(e) {
  var t = Hn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function uu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Oa(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function on(e) {
  return vt(e).getComputedStyle(e);
}
function q0(e) {
  return ["table", "td", "th"].indexOf(Bt(e)) >= 0;
}
function yn(e) {
  return ((kn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vr(e) {
  return Bt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Oa(e) ? e.host : null) || yn(e);
}
function Cl(e) {
  return !bt(e) || on(e).position === "fixed" ? null : e.offsetParent;
}
function Z0(e) {
  var t = /firefox/i.test(Gr()), n = /Trident/i.test(Gr());
  if (n && bt(e)) {
    var o = on(e);
    if (o.position === "fixed") return null;
  }
  var r = vr(e);
  for (Oa(r) && (r = r.host); bt(r) && ["html", "body"].indexOf(Bt(r)) < 0; ) {
    var a = on(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function Co(e) {
  for (var t = vt(e), n = Cl(e); n && q0(n) && on(n).position === "static"; ) n = Cl(n);
  return n && (Bt(n) === "html" || Bt(n) === "body" && on(n).position === "static") ? t : n || Z0(e) || t;
}
function Aa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ro(e, t, n) {
  return En(e, Xo(t, n));
}
function X0(e, t, n) {
  var o = ro(e, t, n);
  return o > n ? n : o;
}
function cu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function du(e) {
  return Object.assign({}, cu(), e);
}
function fu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var J0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, du(typeof e != "number" ? e : fu(e, wo));
};
function Q0(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = xt(n.placement), u = Aa(i), c = [dt, wt].indexOf(i) >= 0, f = c ? "height" : "width";
  if (!(!a || !s)) {
    var p = J0(r.padding, n), v = La(a), y = u === "y" ? ct : dt, h = u === "y" ? _t : wt, m = n.rects.reference[f] + n.rects.reference[u] - s[u] - n.rects.popper[f], C = s[u] - n.rects.reference[u], d = Co(a), S = d ? u === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = m / 2 - C / 2, E = p[y], b = S - v[f] - p[h], O = S / 2 - v[f] / 2 + L, k = ro(E, O, b), B = u;
    n.modifiersData[o] = (t = {}, t[B] = k, t.centerOffset = k - O, t);
  }
}
function ey(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || uu(t.elements.popper, r) && (t.elements.arrow = r));
}
var ty = { name: "arrow", enabled: !0, phase: "main", fn: Q0, effect: ey, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Kn(e) {
  return e.split("-")[1];
}
var ny = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function oy(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Un(n * r) / r || 0, y: Un(o * r) / r || 0 };
}
function El(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, p = e.isFixed, v = s.x, y = v === void 0 ? 0 : v, h = s.y, m = h === void 0 ? 0 : h, C = typeof f == "function" ? f({ x: y, y: m }) : { x: y, y: m };
  y = C.x, m = C.y;
  var d = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), L = dt, E = ct, b = window;
  if (c) {
    var O = Co(n), k = "clientHeight", B = "clientWidth";
    if (O === vt(n) && (O = yn(n), on(O).position !== "static" && i === "absolute" && (k = "scrollHeight", B = "scrollWidth")), O = O, r === ct || (r === dt || r === wt) && a === vo) {
      E = _t;
      var z = p && O === b && b.visualViewport ? b.visualViewport.height : O[k];
      m -= z - o.height, m *= u ? 1 : -1;
    }
    if (r === dt || (r === ct || r === _t) && a === vo) {
      L = wt;
      var ee = p && O === b && b.visualViewport ? b.visualViewport.width : O[B];
      y -= ee - o.width, y *= u ? 1 : -1;
    }
  }
  var ae = Object.assign({ position: i }, c && ny), Z = f === !0 ? oy({ x: y, y: m }, vt(n)) : { x: y, y: m };
  if (y = Z.x, m = Z.y, u) {
    var ce;
    return Object.assign({}, ae, (ce = {}, ce[E] = S ? "0" : "", ce[L] = d ? "0" : "", ce.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + m + "px)" : "translate3d(" + y + "px, " + m + "px, 0)", ce));
  }
  return Object.assign({}, ae, (t = {}, t[E] = S ? m + "px" : "", t[L] = d ? y + "px" : "", t.transform = "", t));
}
function ry(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: xt(t.placement), variation: Kn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, El(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, El(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var pu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ry, data: {} }, Ro = { passive: !0 };
function ay(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, s = o.resize, i = s === void 0 ? !0 : s, u = vt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ro);
  }), i && u.addEventListener("resize", n.update, Ro), function() {
    a && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ro);
    }), i && u.removeEventListener("resize", n.update, Ro);
  };
}
var mu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ay, data: {} }, sy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sy[t];
  });
}
var ly = { start: "end", end: "start" };
function Sl(e) {
  return e.replace(/start|end/g, function(t) {
    return ly[t];
  });
}
function Ia(e) {
  var t = vt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Pa(e) {
  return Hn(yn(e)).left + Ia(e).scrollLeft;
}
function iy(e, t) {
  var n = vt(e), o = yn(e), r = n.visualViewport, a = o.clientWidth, s = o.clientHeight, i = 0, u = 0;
  if (r) {
    a = r.width, s = r.height;
    var c = iu();
    (c || !c && t === "fixed") && (i = r.offsetLeft, u = r.offsetTop);
  }
  return { width: a, height: s, x: i + Pa(e), y: u };
}
function uy(e) {
  var t, n = yn(e), o = Ia(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = En(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = En(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + Pa(e), u = -o.scrollTop;
  return on(r || n).direction === "rtl" && (i += En(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: i, y: u };
}
function Na(e) {
  var t = on(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function vu(e) {
  return ["html", "body", "#document"].indexOf(Bt(e)) >= 0 ? e.ownerDocument.body : bt(e) && Na(e) ? e : vu(vr(e));
}
function ao(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = vu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = vt(o), s = r ? [a].concat(a.visualViewport || [], Na(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(ao(vr(s)));
}
function Yr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function cy(e, t) {
  var n = Hn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Tl(e, t, n) {
  return t === su ? Yr(iy(e, n)) : kn(t) ? cy(t, n) : Yr(uy(yn(e)));
}
function dy(e) {
  var t = ao(vr(e)), n = ["absolute", "fixed"].indexOf(on(e).position) >= 0, o = n && bt(e) ? Co(e) : e;
  return kn(o) ? t.filter(function(r) {
    return kn(r) && uu(r, o) && Bt(r) !== "body";
  }) : [];
}
function fy(e, t, n, o) {
  var r = t === "clippingParents" ? dy(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], i = a.reduce(function(u, c) {
    var f = Tl(e, c, o);
    return u.top = En(f.top, u.top), u.right = Xo(f.right, u.right), u.bottom = Xo(f.bottom, u.bottom), u.left = En(f.left, u.left), u;
  }, Tl(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function hu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? xt(o) : null, a = o ? Kn(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (r) {
    case ct:
      u = { x: s, y: t.y - n.height };
      break;
    case _t:
      u = { x: s, y: t.y + t.height };
      break;
    case wt:
      u = { x: t.x + t.width, y: i };
      break;
    case dt:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = r ? Aa(r) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (a) {
      case Wn:
        u[c] = u[c] - (t[f] / 2 - n[f] / 2);
        break;
      case vo:
        u[c] = u[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function ho(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, u = i === void 0 ? M0 : i, c = n.rootBoundary, f = c === void 0 ? su : c, p = n.elementContext, v = p === void 0 ? eo : p, y = n.altBoundary, h = y === void 0 ? !1 : y, m = n.padding, C = m === void 0 ? 0 : m, d = du(typeof C != "number" ? C : fu(C, wo)), S = v === eo ? D0 : eo, L = e.rects.popper, E = e.elements[h ? S : v], b = fy(kn(E) ? E : E.contextElement || yn(e.elements.popper), u, f, s), O = Hn(e.elements.reference), k = hu({ reference: O, element: L, placement: r }), B = Yr(Object.assign({}, L, k)), z = v === eo ? B : O, ee = { top: b.top - z.top + d.top, bottom: z.bottom - b.bottom + d.bottom, left: b.left - z.left + d.left, right: z.right - b.right + d.right }, ae = e.modifiersData.offset;
  if (v === eo && ae) {
    var Z = ae[r];
    Object.keys(ee).forEach(function(ce) {
      var ke = [wt, _t].indexOf(ce) >= 0 ? 1 : -1, P = [ct, _t].indexOf(ce) >= 0 ? "y" : "x";
      ee[ce] += Z[P] * ke;
    });
  }
  return ee;
}
function py(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? mr : u, f = Kn(o), p = f ? i ? wl : wl.filter(function(h) {
    return Kn(h) === f;
  }) : wo, v = p.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  v.length === 0 && (v = p);
  var y = v.reduce(function(h, m) {
    return h[m] = ho(e, { placement: m, boundary: r, rootBoundary: a, padding: s })[xt(m)], h;
  }, {});
  return Object.keys(y).sort(function(h, m) {
    return y[h] - y[m];
  });
}
function my(e) {
  if (xt(e) === ka) return [];
  var t = Vo(e);
  return [Sl(e), t, Sl(t)];
}
function vy(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, h = y === void 0 ? !0 : y, m = n.allowedAutoPlacements, C = t.options.placement, d = xt(C), S = d === C, L = u || (S || !h ? [Vo(C)] : my(C)), E = [C].concat(L).reduce(function($e, ze) {
      return $e.concat(xt(ze) === ka ? py(t, { placement: ze, boundary: f, rootBoundary: p, padding: c, flipVariations: h, allowedAutoPlacements: m }) : ze);
    }, []), b = t.rects.reference, O = t.rects.popper, k = /* @__PURE__ */ new Map(), B = !0, z = E[0], ee = 0; ee < E.length; ee++) {
      var ae = E[ee], Z = xt(ae), ce = Kn(ae) === Wn, ke = [ct, _t].indexOf(Z) >= 0, P = ke ? "width" : "height", R = ho(t, { placement: ae, boundary: f, rootBoundary: p, altBoundary: v, padding: c }), x = ke ? ce ? wt : dt : ce ? _t : ct;
      b[P] > O[P] && (x = Vo(x));
      var re = Vo(x), X = [];
      if (a && X.push(R[Z] <= 0), i && X.push(R[x] <= 0, R[re] <= 0), X.every(function($e) {
        return $e;
      })) {
        z = ae, B = !1;
        break;
      }
      k.set(ae, X);
    }
    if (B) for (var fe = h ? 3 : 1, Y = function($e) {
      var ze = E.find(function(He) {
        var Ke = k.get(He);
        if (Ke) return Ke.slice(0, $e).every(function(he) {
          return he;
        });
      });
      if (ze) return z = ze, "break";
    }, Re = fe; Re > 0; Re--) {
      var _e = Y(Re);
      if (_e === "break") break;
    }
    t.placement !== z && (t.modifiersData[o]._skip = !0, t.placement = z, t.reset = !0);
  }
}
var hy = { name: "flip", enabled: !0, phase: "main", fn: vy, requiresIfExists: ["offset"], data: { _skip: !1 } };
function kl(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ol(e) {
  return [ct, wt, _t, dt].some(function(t) {
    return e[t] >= 0;
  });
}
function gy(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = ho(t, { elementContext: "reference" }), i = ho(t, { altBoundary: !0 }), u = kl(s, o), c = kl(i, r, a), f = Ol(u), p = Ol(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var yy = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: gy };
function by(e, t, n) {
  var o = xt(e), r = [dt, ct].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * r, [dt, wt].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function _y(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = mr.reduce(function(f, p) {
    return f[p] = by(p, t.rects, a), f;
  }, {}), i = s[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
}
var wy = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: _y };
function Cy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = hu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var gu = { name: "popperOffsets", enabled: !0, phase: "read", fn: Cy, data: {} };
function Ey(e) {
  return e === "x" ? "y" : "x";
}
function Sy(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, v = n.tether, y = v === void 0 ? !0 : v, h = n.tetherOffset, m = h === void 0 ? 0 : h, C = ho(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: f }), d = xt(t.placement), S = Kn(t.placement), L = !S, E = Aa(d), b = Ey(E), O = t.modifiersData.popperOffsets, k = t.rects.reference, B = t.rects.popper, z = typeof m == "function" ? m(Object.assign({}, t.rects, { placement: t.placement })) : m, ee = typeof z == "number" ? { mainAxis: z, altAxis: z } : Object.assign({ mainAxis: 0, altAxis: 0 }, z), ae = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = { x: 0, y: 0 };
  if (O) {
    if (a) {
      var ce, ke = E === "y" ? ct : dt, P = E === "y" ? _t : wt, R = E === "y" ? "height" : "width", x = O[E], re = x + C[ke], X = x - C[P], fe = y ? -B[R] / 2 : 0, Y = S === Wn ? k[R] : B[R], Re = S === Wn ? -B[R] : -k[R], _e = t.elements.arrow, $e = y && _e ? La(_e) : { width: 0, height: 0 }, ze = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cu(), He = ze[ke], Ke = ze[P], he = ro(0, k[R], $e[R]), ot = L ? k[R] / 2 - fe - he - He - ee.mainAxis : Y - he - He - ee.mainAxis, U = L ? -k[R] / 2 + fe + he + Ke + ee.mainAxis : Re + he + Ke + ee.mainAxis, K = t.elements.arrow && Co(t.elements.arrow), J = K ? E === "y" ? K.clientTop || 0 : K.clientLeft || 0 : 0, ve = (ce = ae?.[E]) != null ? ce : 0, me = x + ot - ve - J, rt = x + U - ve, it = ro(y ? Xo(re, me) : re, x, y ? En(X, rt) : X);
      O[E] = it, Z[E] = it - x;
    }
    if (i) {
      var At, w = E === "x" ? ct : dt, T = E === "x" ? _t : wt, D = O[b], G = b === "y" ? "height" : "width", ge = D + C[w], se = D - C[T], _ = [ct, dt].indexOf(d) !== -1, M = (At = ae?.[b]) != null ? At : 0, de = _ ? ge : D - k[G] - B[G] - M + ee.altAxis, we = _ ? D + k[G] + B[G] - M - ee.altAxis : se, Je = y && _ ? X0(de, D, we) : ro(y ? de : ge, D, y ? we : se);
      O[b] = Je, Z[b] = Je - D;
    }
    t.modifiersData[o] = Z;
  }
}
var Ty = { name: "preventOverflow", enabled: !0, phase: "main", fn: Sy, requiresIfExists: ["offset"] };
function ky(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Oy(e) {
  return e === vt(e) || !bt(e) ? Ia(e) : ky(e);
}
function Ly(e) {
  var t = e.getBoundingClientRect(), n = Un(t.width) / e.offsetWidth || 1, o = Un(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Ay(e, t, n) {
  n === void 0 && (n = !1);
  var o = bt(t), r = bt(t) && Ly(t), a = yn(t), s = Hn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((Bt(t) !== "body" || Na(a)) && (i = Oy(t)), bt(t) ? (u = Hn(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Pa(a))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function Iy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var u = t.get(i);
        u && r(u);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Py(e) {
  var t = Iy(e);
  return K0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Ny(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function $y(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ll = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Al() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function $a(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? Ll : r;
  return function(s, i, u) {
    u === void 0 && (u = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ll, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], p = !1, v = { state: c, setOptions: function(m) {
      var C = typeof m == "function" ? m(c.options) : m;
      h(), c.options = Object.assign({}, a, c.options, C), c.scrollParents = { reference: kn(s) ? ao(s) : s.contextElement ? ao(s.contextElement) : [], popper: ao(i) };
      var d = Py($y([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = d.filter(function(S) {
        return S.enabled;
      }), y(), v.update();
    }, forceUpdate: function() {
      if (!p) {
        var m = c.elements, C = m.reference, d = m.popper;
        if (Al(C, d)) {
          c.rects = { reference: Ay(C, Co(d), c.options.strategy === "fixed"), popper: La(d) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(B) {
            return c.modifiersData[B.name] = Object.assign({}, B.data);
          });
          for (var S = 0; S < c.orderedModifiers.length; S++) {
            if (c.reset === !0) {
              c.reset = !1, S = -1;
              continue;
            }
            var L = c.orderedModifiers[S], E = L.fn, b = L.options, O = b === void 0 ? {} : b, k = L.name;
            typeof E == "function" && (c = E({ state: c, options: O, name: k, instance: v }) || c);
          }
        }
      }
    }, update: Ny(function() {
      return new Promise(function(m) {
        v.forceUpdate(), m(c);
      });
    }), destroy: function() {
      h(), p = !0;
    } };
    if (!Al(s, i)) return v;
    v.setOptions(u).then(function(m) {
      !p && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function y() {
      c.orderedModifiers.forEach(function(m) {
        var C = m.name, d = m.options, S = d === void 0 ? {} : d, L = m.effect;
        if (typeof L == "function") {
          var E = L({ state: c, name: C, instance: v, options: S }), b = function() {
          };
          f.push(E || b);
        }
      });
    }
    function h() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return v;
  };
}
$a();
var Ry = [mu, gu, pu, lu];
$a({ defaultModifiers: Ry });
var My = [mu, gu, pu, lu, wy, hy, Ty, ty, yy], Dy = $a({ defaultModifiers: My });
const Fy = ["fixed", "absolute"], xy = Le({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: le(Array),
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
    values: mr,
    default: "bottom"
  },
  popperOptions: {
    type: le(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Fy,
    default: "absolute"
  }
}), yu = Le({
  ...xy,
  id: String,
  style: {
    type: le([String, Array, Object])
  },
  className: {
    type: le([String, Array, Object])
  },
  effect: {
    type: le(String),
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
    type: le([String, Array, Object])
  },
  popperStyle: {
    type: le([String, Array, Object])
  },
  referenceEl: {
    type: le(Object)
  },
  triggerTargetEl: {
    type: le(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...In(["ariaLabel"])
}), Vy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, jy = (e, t) => {
  const n = V(!1), o = V();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var f;
      ((f = c.detail) == null ? void 0 : f.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (o.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, By = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Wy(e), ...t]
  };
  return Uy(a, r?.modifiers), a;
}, zy = (e) => {
  if (je)
    return Zt(e);
};
function Wy(e) {
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
function Uy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Hy = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = Ky(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, r = A(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: p } = l(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = pn(), s = V({
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
  return ue(r, (u) => {
    const c = l(a);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), ue([e, t], ([u, c]) => {
    i(), !(!u || !c) && (a.value = Dy(u, c, l(r)));
  }), zt(() => {
    i();
  }), {
    state: A(() => {
      var u;
      return { ...((u = l(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: A(() => l(s).styles),
    attributes: A(() => l(s).attributes),
    update: () => {
      var u;
      return (u = l(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = l(a)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: A(() => l(a))
  };
};
function Ky(e) {
  const t = Object.keys(e.elements), n = Ko(t.map((r) => [r, e.styles[r] || {}])), o = Ko(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const Gy = 0, Yy = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = Se(Ea, void 0), a = V(), s = V(), i = A(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = A(() => {
    var d;
    const S = l(a), L = (d = l(s)) != null ? d : Gy;
    return {
      name: "arrow",
      enabled: !dh(S),
      options: {
        element: S,
        padding: L
      }
    };
  }), c = A(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...By(e, [
      l(u),
      l(i)
    ])
  })), f = A(() => zy(e.referenceEl) || l(o)), { attributes: p, state: v, styles: y, update: h, forceUpdate: m, instanceRef: C } = Hy(f, n, c);
  return ue(C, (d) => t.value = d), xe(() => {
    ue(() => {
      var d;
      return (d = l(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: C,
    state: v,
    styles: y,
    role: r,
    forceUpdate: m,
    update: h
  };
}, qy = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = $i(), a = Be("popper"), s = A(() => l(t).popper), i = V(Ee(e.zIndex) ? e.zIndex : r()), u = A(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = A(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), f = A(() => o.value === "dialog" ? "false" : void 0), p = A(() => l(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: u,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Ee(e.zIndex) ? e.zIndex : r();
    }
  };
}, Zy = Q({
  name: "ElPopperContent"
}), Xy = /* @__PURE__ */ Q({
  ...Zy,
  props: yu,
  emits: Vy,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = jy(o, n), { attributes: p, arrowRef: v, contentRef: y, styles: h, instanceRef: m, role: C, update: d } = Yy(o), {
      ariaModal: S,
      arrowStyle: L,
      contentAttrs: E,
      contentClass: b,
      contentStyle: O,
      updateZIndex: k
    } = qy(o, {
      styles: h,
      attributes: p,
      role: C
    }), B = Se(Zo, void 0), z = V();
    Vt(Qi, {
      arrowStyle: L,
      arrowRef: v,
      arrowOffset: z
    }), B && Vt(Zo, {
      ...B,
      addInputId: fo,
      removeInputId: fo
    });
    let ee;
    const ae = (ce = !0) => {
      d(), ce && k();
    }, Z = () => {
      ae(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return xe(() => {
      ue(() => o.triggerTargetEl, (ce, ke) => {
        ee?.(), ee = void 0;
        const P = l(ce || y.value), R = l(ke || y.value);
        Tt(P) && (ee = ue([C, () => o.ariaLabel, S, () => o.id], (x) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((re, X) => {
            Qt(x[X]) ? P.removeAttribute(re) : P.setAttribute(re, x[X]);
          });
        }, { immediate: !0 })), R !== P && Tt(R) && ["role", "aria-label", "aria-modal", "id"].forEach((x) => {
          R.removeAttribute(x);
        });
      }, { immediate: !0 }), ue(() => o.visible, Z, { immediate: !0 });
    }), zt(() => {
      ee?.(), ee = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: m,
      updatePopper: ae,
      contentStyle: O
    }), (ce, ke) => (I(), W("div", xn({
      ref_key: "contentRef",
      ref: y
    }, l(E), {
      style: l(O),
      class: l(b),
      tabindex: "-1",
      onMouseenter: (P) => ce.$emit("mouseenter", P),
      onMouseleave: (P) => ce.$emit("mouseleave", P)
    }), [
      $(l(R0), {
        trapped: l(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(y),
        "focus-start-el": l(r),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(s),
        onFocusin: l(u),
        onFocusoutPrevented: l(c),
        onReleaseRequested: l(f)
      }, {
        default: ne(() => [
          ie(ce.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Jy = /* @__PURE__ */ Ae(Xy, [["__file", "content.vue"]]);
const Qy = Lt(c0), Ra = Symbol("elTooltip");
function Il() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return bo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const eb = Le({
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
}), tb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = Il(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Il();
  return {
    onOpen: (f) => {
      a(() => {
        o(f);
        const p = l(n);
        Ee(p) && p > 0 && s(() => {
          r(f);
        }, p);
      }, l(e));
    },
    onClose: (f) => {
      i(), a(() => {
        r(f);
      }, l(t));
    }
  };
}, Ma = Le({
  ...eb,
  ...yu,
  appendTo: {
    type: le([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: le(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...In(["ariaLabel"])
}), bu = Le({
  ...nu,
  disabled: Boolean,
  trigger: {
    type: le([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: le(Array),
    default: () => [Ft.enter, Ft.numpadEnter, Ft.space]
  }
}), nb = ur({
  type: le(Boolean),
  default: null
}), ob = ur({
  type: le(Function)
}), rb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: nb,
    [n]: ob
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: f,
      onHide: p
    }) => {
      const v = lt(), { emit: y } = v, h = v.props, m = A(() => Ne(h[n])), C = A(() => h[e] === null), d = (k) => {
        s.value !== !0 && (s.value = !0, i && (i.value = k), Ne(f) && f(k));
      }, S = (k) => {
        s.value !== !1 && (s.value = !1, i && (i.value = k), Ne(p) && p(k));
      }, L = (k) => {
        if (h.disabled === !0 || Ne(c) && !c())
          return;
        const B = m.value && je;
        B && y(t, !0), (C.value || !B) && d(k);
      }, E = (k) => {
        if (h.disabled === !0 || !je)
          return;
        const B = m.value && je;
        B && y(t, !1), (C.value || !B) && S(k);
      }, b = (k) => {
        mn(k) && (h.disabled && k ? m.value && y(t, !1) : s.value !== k && (k ? d() : S()));
      }, O = () => {
        s.value ? E() : L();
      };
      return ue(() => h[e], b), u && v.appContext.config.globalProperties.$route !== void 0 && ue(() => ({
        ...v.proxy.$route
      }), () => {
        u.value && s.value && E();
      }), xe(() => {
        b(h[e]);
      }), {
        hide: E,
        show: L,
        toggle: O,
        hasUpdateHandler: m
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: ab,
  useModelToggleEmits: sb,
  useModelToggle: lb
} = rb("visible"), ib = Le({
  ...eu,
  ...ab,
  ...Ma,
  ...bu,
  ...tu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ub = [
  ...sb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], cb = (e, t) => $t(e) ? e.includes(t) : e === t, $n = (e, t, n) => (o) => {
  cb(l(e), t) && n(o);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, db = Q({
  name: "ElTooltipTrigger"
}), fb = /* @__PURE__ */ Q({
  ...db,
  props: bu,
  setup(e, { expose: t }) {
    const n = e, o = Be("tooltip"), { controlled: r, id: a, open: s, onOpen: i, onClose: u, onToggle: c } = Se(Ra, void 0), f = V(null), p = () => {
      if (l(r) || n.disabled)
        return !0;
    }, v = Gt(n, "trigger"), y = Kt(p, $n(v, "hover", i)), h = Kt(p, $n(v, "hover", u)), m = Kt(p, $n(v, "click", (E) => {
      E.button === 0 && c(E);
    })), C = Kt(p, $n(v, "focus", i)), d = Kt(p, $n(v, "focus", u)), S = Kt(p, $n(v, "contextmenu", (E) => {
      E.preventDefault(), c(E);
    })), L = Kt(p, (E) => {
      const { code: b } = E;
      n.triggerKeys.includes(b) && (E.preventDefault(), c(E));
    });
    return t({
      triggerRef: f
    }), (E, b) => (I(), oe(l(_0), {
      id: l(a),
      "virtual-ref": E.virtualRef,
      open: l(s),
      "virtual-triggering": E.virtualTriggering,
      class: j(l(o).e("trigger")),
      onBlur: l(d),
      onClick: l(m),
      onContextmenu: l(S),
      onFocus: l(C),
      onMouseenter: l(y),
      onMouseleave: l(h),
      onKeydown: l(L)
    }, {
      default: ne(() => [
        ie(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var pb = /* @__PURE__ */ Ae(fb, [["__file", "trigger.vue"]]);
const mb = Le({
  to: {
    type: le([String, Object]),
    required: !0
  },
  disabled: Boolean
}), vb = /* @__PURE__ */ Q({
  __name: "teleport",
  props: mb,
  setup(e) {
    return (t, n) => t.disabled ? ie(t.$slots, "default", { key: 0 }) : (I(), oe(nc, {
      key: 1,
      to: t.to
    }, [
      ie(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var hb = /* @__PURE__ */ Ae(vb, [["__file", "teleport.vue"]]);
const gb = Lt(hb), _u = () => {
  const e = sa(), t = qi(), n = A(() => `${e.value}-popper-container-${t.prefix}`), o = A(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, yb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, bb = () => {
  const { id: e, selector: t } = _u();
  return oc(() => {
    je && (document.body.querySelector(t.value) || yb(e.value));
  }), {
    id: e,
    selector: t
  };
}, _b = Q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), wb = /* @__PURE__ */ Q({
  ..._b,
  props: Ma,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = _u(), r = Be("tooltip"), a = V();
    let s;
    const {
      controlled: i,
      id: u,
      open: c,
      trigger: f,
      onClose: p,
      onOpen: v,
      onShow: y,
      onHide: h,
      onBeforeShow: m,
      onBeforeHide: C
    } = Se(Ra, void 0), d = A(() => n.transition || `${r.namespace.value}-fade-in-linear`), S = A(() => n.persistent);
    zt(() => {
      s?.();
    });
    const L = A(() => l(S) ? !0 : l(c)), E = A(() => n.disabled ? !1 : l(c)), b = A(() => n.appendTo || o.value), O = A(() => {
      var x;
      return (x = n.style) != null ? x : {};
    }), k = V(!0), B = () => {
      h(), R() && Ht(document.body), k.value = !0;
    }, z = () => {
      if (l(i))
        return !0;
    }, ee = Kt(z, () => {
      n.enterable && l(f) === "hover" && v();
    }), ae = Kt(z, () => {
      l(f) === "hover" && p();
    }), Z = () => {
      var x, re;
      (re = (x = a.value) == null ? void 0 : x.updatePopper) == null || re.call(x), m?.();
    }, ce = () => {
      C?.();
    }, ke = () => {
      y(), s = Lh(A(() => {
        var x;
        return (x = a.value) == null ? void 0 : x.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(f) !== "hover" && p();
      });
    }, P = () => {
      n.virtualTriggering || p();
    }, R = (x) => {
      var re;
      const X = (re = a.value) == null ? void 0 : re.popperContentRef, fe = x?.relatedTarget || document.activeElement;
      return X?.contains(fe);
    };
    return ue(() => l(c), (x) => {
      x ? k.value = !1 : s?.();
    }, {
      flush: "post"
    }), ue(() => n.content, () => {
      var x, re;
      (re = (x = a.value) == null ? void 0 : x.updatePopper) == null || re.call(x);
    }), t({
      contentRef: a,
      isFocusInsideContent: R
    }), (x, re) => (I(), oe(l(gb), {
      disabled: !x.teleported,
      to: l(b)
    }, {
      default: ne(() => [
        $(qn, {
          name: l(d),
          onAfterLeave: B,
          onBeforeEnter: Z,
          onAfterEnter: ke,
          onBeforeLeave: ce
        }, {
          default: ne(() => [
            l(L) ? Ue((I(), oe(l(Jy), xn({
              key: 0,
              id: l(u),
              ref_key: "contentRef",
              ref: a
            }, x.$attrs, {
              "aria-label": x.ariaLabel,
              "aria-hidden": k.value,
              "boundaries-padding": x.boundariesPadding,
              "fallback-placements": x.fallbackPlacements,
              "gpu-acceleration": x.gpuAcceleration,
              offset: x.offset,
              placement: x.placement,
              "popper-options": x.popperOptions,
              strategy: x.strategy,
              effect: x.effect,
              enterable: x.enterable,
              pure: x.pure,
              "popper-class": x.popperClass,
              "popper-style": [x.popperStyle, l(O)],
              "reference-el": x.referenceEl,
              "trigger-target-el": x.triggerTargetEl,
              visible: l(E),
              "z-index": x.zIndex,
              onMouseenter: l(ee),
              onMouseleave: l(ae),
              onBlur: P,
              onClose: l(p)
            }), {
              default: ne(() => [
                ie(x.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, l(E)]
            ]) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Cb = /* @__PURE__ */ Ae(wb, [["__file", "content.vue"]]);
const Eb = Q({
  name: "ElTooltip"
}), Sb = /* @__PURE__ */ Q({
  ...Eb,
  props: ib,
  emits: ub,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    bb();
    const r = dr(), a = V(), s = V(), i = () => {
      var d;
      const S = l(a);
      S && ((d = S.popperInstanceRef) == null || d.update());
    }, u = V(!1), c = V(), { show: f, hide: p, hasUpdateHandler: v } = lb({
      indicator: u,
      toggleReason: c
    }), { onOpen: y, onClose: h } = tb({
      showAfter: Gt(o, "showAfter"),
      hideAfter: Gt(o, "hideAfter"),
      autoClose: Gt(o, "autoClose"),
      open: f,
      close: p
    }), m = A(() => mn(o.visible) && !v.value);
    Vt(Ra, {
      controlled: m,
      id: r,
      open: Xr(u),
      trigger: Gt(o, "trigger"),
      onOpen: (d) => {
        y(d);
      },
      onClose: (d) => {
        h(d);
      },
      onToggle: (d) => {
        l(u) ? h(d) : y(d);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: i
    }), ue(() => o.disabled, (d) => {
      d && u.value && (u.value = !1);
    });
    const C = (d) => {
      var S;
      return (S = s.value) == null ? void 0 : S.isFocusInsideContent(d);
    };
    return rc(() => u.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: C,
      updatePopper: i,
      onOpen: y,
      onClose: h,
      hide: p
    }), (d, S) => (I(), oe(l(Qy), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: ne(() => [
        $(pb, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: ne(() => [
            d.$slots.default ? ie(d.$slots, "default", { key: 0 }) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        $(Cb, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": d.ariaLabel,
          "boundaries-padding": d.boundariesPadding,
          content: d.content,
          disabled: d.disabled,
          effect: d.effect,
          enterable: d.enterable,
          "fallback-placements": d.fallbackPlacements,
          "hide-after": d.hideAfter,
          "gpu-acceleration": d.gpuAcceleration,
          offset: d.offset,
          persistent: d.persistent,
          "popper-class": d.popperClass,
          "popper-style": d.popperStyle,
          placement: d.placement,
          "popper-options": d.popperOptions,
          pure: d.pure,
          "raw-content": d.rawContent,
          "reference-el": d.referenceEl,
          "trigger-target-el": d.triggerTargetEl,
          "show-after": d.showAfter,
          strategy: d.strategy,
          teleported: d.teleported,
          transition: d.transition,
          "virtual-triggering": d.virtualTriggering,
          "z-index": d.zIndex,
          "append-to": d.appendTo
        }, {
          default: ne(() => [
            ie(d.$slots, "content", {}, () => [
              d.rawContent ? (I(), W("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (I(), W("span", { key: 1 }, F(d.content), 1))
            ]),
            d.showArrow ? (I(), oe(l(p0), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Tb = /* @__PURE__ */ Ae(Sb, [["__file", "tooltip.vue"]]);
const kb = Lt(Tb), Ob = Le({
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
    type: le([String, Object, Array])
  },
  offset: {
    type: le(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Lb = Q({
  name: "ElBadge"
}), Ab = /* @__PURE__ */ Q({
  ...Lb,
  props: Ob,
  setup(e, { expose: t }) {
    const n = e, o = Be("badge"), r = A(() => n.isDot ? "" : Ee(n.value) && Ee(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = A(() => {
      var s, i, u, c, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: zn(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: zn((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: r
    }), (s, i) => (I(), W("div", {
      class: j(l(o).b())
    }, [
      ie(s.$slots, "default"),
      $(qn, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ne(() => [
          Ue(g("sup", {
            class: j([
              l(o).e("content"),
              l(o).em("content", s.type),
              l(o).is("fixed", !!s.$slots.default),
              l(o).is("dot", s.isDot),
              l(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ze(l(a))
          }, [
            ie(s.$slots, "content", { value: l(r) }, () => [
              gt(F(l(r)), 1)
            ])
          ], 6), [
            [tn, !s.hidden && (l(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ib = /* @__PURE__ */ Ae(Ab, [["__file", "badge.vue"]]);
const Pb = Lt(Ib), Nb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), qr = Le({
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
    values: ga
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), $b = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Rb = Q({
  name: "ElTag"
}), Mb = /* @__PURE__ */ Q({
  ...Rb,
  props: qr,
  emits: $b,
  setup(e, { emit: t }) {
    const n = e, o = _o(), r = Be("tag"), a = A(() => {
      const { type: c, hit: f, effect: p, closable: v, round: y } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(c || "primary"),
        r.m(o.value),
        r.m(p),
        r.is("hit", f),
        r.is("round", y)
      ];
    }), s = (c) => {
      t("close", c);
    }, i = (c) => {
      t("click", c);
    }, u = (c) => {
      var f, p, v;
      (v = (p = (f = c?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && v.bum && (c.component.subTree.component.bum = null);
    };
    return (c, f) => c.disableTransitions ? (I(), W("span", {
      key: 0,
      class: j(l(a)),
      style: Ze({ backgroundColor: c.color }),
      onClick: i
    }, [
      g("span", {
        class: j(l(r).e("content"))
      }, [
        ie(c.$slots, "default")
      ], 2),
      c.closable ? (I(), oe(l(Ve), {
        key: 0,
        class: j(l(r).e("close")),
        onClick: Ie(s, ["stop"])
      }, {
        default: ne(() => [
          $(l(Yo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : q("v-if", !0)
    ], 6)) : (I(), oe(qn, {
      key: 1,
      name: `${l(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: ne(() => [
        g("span", {
          class: j(l(a)),
          style: Ze({ backgroundColor: c.color }),
          onClick: i
        }, [
          g("span", {
            class: j(l(r).e("content"))
          }, [
            ie(c.$slots, "default")
          ], 2),
          c.closable ? (I(), oe(l(Ve), {
            key: 0,
            class: j(l(r).e("close")),
            onClick: Ie(s, ["stop"])
          }, {
            default: ne(() => [
              $(l(Yo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Db = /* @__PURE__ */ Ae(Mb, [["__file", "tag.vue"]]);
const Fb = Lt(Db), un = /* @__PURE__ */ new Map();
if (je) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of un.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function Pl(e, t) {
  let n = [];
  return $t(t.arg) ? n = t.arg : Tt(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, s = o.target, i = r?.target, u = !t || !t.instance, c = !s || !i, f = e.contains(s) || e.contains(i), p = e === s, v = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), y = a && (a.contains(s) || a.contains(i));
    u || c || f || p || v || y || t.value(o, r);
  };
}
const xb = {
  beforeMount(e, t) {
    un.has(e) || un.set(e, []), un.get(e).push({
      documentHandler: Pl(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    un.has(e) || un.set(e, []);
    const n = un.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: Pl(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    un.delete(e);
  }
}, Vb = Le({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: le(Object)
  },
  size: cr,
  button: {
    type: le(Object)
  },
  experimentalFeatures: {
    type: le(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: le(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...xi
}), Ct = {};
Q({
  name: "ElConfigProvider",
  props: Vb,
  setup(e, { slots: t }) {
    ue(() => e.message, (o) => {
      Object.assign(Ct, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Bi(e);
    return () => ie(t, "default", { config: n?.value });
  }
});
const jb = 100, Bb = 600, Nl = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = jb, delay: r = Bb } = Ne(n) ? {} : n;
    let a, s;
    const i = () => Ne(n) ? n() : n.handler(), u = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), i(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          i();
        }, o);
      }, r));
    });
  }
}, zb = Le({
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
  size: cr,
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
    validator: (e) => e === null || Ee(e) || ["min", "max"].includes(e),
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
  ...In(["ariaLabel"])
}), Wb = {
  [nn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [en]: (e) => Ee(e) || Qt(e),
  [Ye]: (e) => Ee(e) || Qt(e)
}, Ub = Q({
  name: "ElInputNumber"
}), Hb = /* @__PURE__ */ Q({
  ...Ub,
  props: zb,
  emits: Wb,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = ha(), a = Be("input-number"), s = V(), i = Sn({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = fr(), c = A(() => Ee(o.modelValue) && o.modelValue <= o.min), f = A(() => Ee(o.modelValue) && o.modelValue >= o.max), p = A(() => {
      const P = d(o.step);
      return Rt(o.precision) ? Math.max(d(o.modelValue), P) : (P > o.precision, o.precision);
    }), v = A(() => o.controls && o.controlsPosition === "right"), y = _o(), h = wa(), m = A(() => {
      if (i.userInput !== null)
        return i.userInput;
      let P = i.currentValue;
      if (Qt(P))
        return "";
      if (Ee(P)) {
        if (Number.isNaN(P))
          return "";
        Rt(o.precision) || (P = P.toFixed(o.precision));
      }
      return P;
    }), C = (P, R) => {
      if (Rt(R) && (R = p.value), R === 0)
        return Math.round(P);
      let x = String(P);
      const re = x.indexOf(".");
      if (re === -1 || !x.replace(".", "").split("")[re + R])
        return P;
      const Y = x.length;
      return x.charAt(Y - 1) === "5" && (x = `${x.slice(0, Math.max(0, Y - 1))}6`), Number.parseFloat(Number(x).toFixed(R));
    }, d = (P) => {
      if (Qt(P))
        return 0;
      const R = P.toString(), x = R.indexOf(".");
      let re = 0;
      return x !== -1 && (re = R.length - x - 1), re;
    }, S = (P, R = 1) => Ee(P) ? C(P + o.step * R) : i.currentValue, L = () => {
      if (o.readonly || h.value || f.value)
        return;
      const P = Number(m.value) || 0, R = S(P);
      O(R), n(en, i.currentValue), ce();
    }, E = () => {
      if (o.readonly || h.value || c.value)
        return;
      const P = Number(m.value) || 0, R = S(P, -1);
      O(R), n(en, i.currentValue), ce();
    }, b = (P, R) => {
      const { max: x, min: re, step: X, precision: fe, stepStrictly: Y, valueOnClear: Re } = o;
      x < re && va("InputNumber", "min should not be greater than max.");
      let _e = Number(P);
      if (Qt(P) || Number.isNaN(_e))
        return null;
      if (P === "") {
        if (Re === null)
          return null;
        _e = tt(Re) ? { min: re, max: x }[Re] : Re;
      }
      return Y && (_e = C(Math.round(_e / X) * X, fe), _e !== P && R && n(Ye, _e)), Rt(fe) || (_e = C(_e, fe)), (_e > x || _e < re) && (_e = _e > x ? x : re, R && n(Ye, _e)), _e;
    }, O = (P, R = !0) => {
      var x;
      const re = i.currentValue, X = b(P);
      if (!R) {
        n(Ye, X);
        return;
      }
      re === X && P || (i.userInput = null, n(Ye, X), re !== X && n(nn, X, re), o.validateEvent && ((x = u?.validate) == null || x.call(u, "change").catch((fe) => void 0)), i.currentValue = X);
    }, k = (P) => {
      i.userInput = P;
      const R = P === "" ? null : Number(P);
      n(en, R), O(R, !1);
    }, B = (P) => {
      const R = P !== "" ? Number(P) : "";
      (Ee(R) && !Number.isNaN(R) || P === "") && O(R), ce(), i.userInput = null;
    }, z = () => {
      var P, R;
      (R = (P = s.value) == null ? void 0 : P.focus) == null || R.call(P);
    }, ee = () => {
      var P, R;
      (R = (P = s.value) == null ? void 0 : P.blur) == null || R.call(P);
    }, ae = (P) => {
      n("focus", P);
    }, Z = (P) => {
      var R, x;
      i.userInput = null, Gi() && i.currentValue === null && ((R = s.value) != null && R.input) && (s.value.input.value = ""), n("blur", P), o.validateEvent && ((x = u?.validate) == null || x.call(u, "blur").catch((re) => void 0));
    }, ce = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, ke = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return ue(() => o.modelValue, (P, R) => {
      const x = b(P, !0);
      i.userInput === null && x !== R && (i.currentValue = x);
    }, { immediate: !0 }), xe(() => {
      var P;
      const { min: R, max: x, modelValue: re } = o, X = (P = s.value) == null ? void 0 : P.input;
      if (X.setAttribute("role", "spinbutton"), Number.isFinite(x) ? X.setAttribute("aria-valuemax", String(x)) : X.removeAttribute("aria-valuemax"), Number.isFinite(R) ? X.setAttribute("aria-valuemin", String(R)) : X.removeAttribute("aria-valuemin"), X.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), X.setAttribute("aria-disabled", String(h.value)), !Ee(re) && re != null) {
        let fe = Number(re);
        Number.isNaN(fe) && (fe = null), n(Ye, fe);
      }
      X.addEventListener("wheel", ke, { passive: !1 });
    }), Vl(() => {
      var P, R;
      const x = (P = s.value) == null ? void 0 : P.input;
      x?.setAttribute("aria-valuenow", `${(R = i.currentValue) != null ? R : ""}`);
    }), t({
      focus: z,
      blur: ee
    }), (P, R) => (I(), W("div", {
      class: j([
        l(a).b(),
        l(a).m(l(y)),
        l(a).is("disabled", l(h)),
        l(a).is("without-controls", !P.controls),
        l(a).is("controls-right", l(v))
      ]),
      onDragstart: Ie(() => {
      }, ["prevent"])
    }, [
      P.controls ? Ue((I(), W("span", {
        key: 0,
        role: "button",
        "aria-label": l(r)("el.inputNumber.decrease"),
        class: j([l(a).e("decrease"), l(a).is("disabled", l(c))]),
        onKeydown: yt(E, ["enter"])
      }, [
        ie(P.$slots, "decrease-icon", {}, () => [
          $(l(Ve), null, {
            default: ne(() => [
              l(v) ? (I(), oe(l(Ui), { key: 0 })) : (I(), oe(l(yg), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(Nl), E]
      ]) : q("v-if", !0),
      P.controls ? Ue((I(), W("span", {
        key: 1,
        role: "button",
        "aria-label": l(r)("el.inputNumber.increase"),
        class: j([l(a).e("increase"), l(a).is("disabled", l(f))]),
        onKeydown: yt(L, ["enter"])
      }, [
        ie(P.$slots, "increase-icon", {}, () => [
          $(l(Ve), null, {
            default: ne(() => [
              l(v) ? (I(), oe(l(ag), { key: 0 })) : (I(), oe(l(_g), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(Nl), L]
      ]) : q("v-if", !0),
      $(l(Hg), {
        id: P.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: P.step,
        "model-value": l(m),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: l(h),
        size: l(y),
        max: P.max,
        min: P.min,
        name: P.name,
        "aria-label": P.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          yt(Ie(L, ["prevent"]), ["up"]),
          yt(Ie(E, ["prevent"]), ["down"])
        ],
        onBlur: Z,
        onFocus: ae,
        onInput: k,
        onChange: B
      }, ac({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: ne(() => [
            ie(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: ne(() => [
            ie(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Kb = /* @__PURE__ */ Ae(Hb, [["__file", "input-number.vue"]]);
const Gb = Lt(Kb);
function Yb() {
  const e = pn(), t = V(0), n = 11, o = A(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Nt(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const wu = Symbol("ElSelectGroup"), hr = Symbol("ElSelect");
function qb(e, t) {
  const n = Se(hr), o = Se(wu, { disabled: !1 }), r = A(() => f(dn(n.props.modelValue), e.value)), a = A(() => {
    var y;
    if (n.props.multiple) {
      const h = dn((y = n.props.modelValue) != null ? y : []);
      return !r.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = A(() => e.label || (mt(e.value) ? "" : e.value)), i = A(() => e.value || e.label || ""), u = A(() => e.disabled || t.groupDisabled || a.value), c = lt(), f = (y = [], h) => {
    if (mt(e.value)) {
      const m = n.props.valueKey;
      return y && y.some((C) => sc(fn(C, m)) === fn(h, m));
    } else
      return y && y.includes(h);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, v = (y) => {
    const h = new RegExp(Nb(y), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return ue(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ue(() => e.value, (y, h) => {
    const { remote: m, valueKey: C } = n.props;
    if ((m ? y !== h : !oo(y, h)) && (n.onOptionDestroy(h, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !m) {
      if (C && mt(y) && mt(h) && y[C] === h[C])
        return;
      n.setSelected();
    }
  }), ue(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: r,
    isDisabled: u,
    hoverItem: p,
    updateOption: v
  };
}
const Zb = Q({
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
    const t = Be("select"), n = dr(), o = A(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(s)),
      t.is("hovering", l(v))
    ]), r = Sn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: f
    } = qb(e, r), { visible: p, hover: v } = Jr(r), y = lt().proxy;
    u.onOptionCreate(y), zt(() => {
      const m = y.value, { selected: C } = u.states, d = C.some((S) => S.value === y.value);
      Me(() => {
        u.states.cachedOptions.get(m) === y && !d && u.states.cachedOptions.delete(m);
      }), u.onOptionDestroy(m, y);
    });
    function h() {
      i.value || u.handleOptionSelect(y);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: f,
      visible: p,
      hover: v,
      selectOptionClick: h,
      states: r
    };
  }
});
function Xb(e, t, n, o, r, a) {
  return Ue((I(), W("li", {
    id: e.id,
    class: j(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ie(e.selectOptionClick, ["stop"])
  }, [
    ie(e.$slots, "default", {}, () => [
      g("span", null, F(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var Da = /* @__PURE__ */ Ae(Zb, [["render", Xb], ["__file", "option.vue"]]);
const Jb = Q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Se(hr), t = Be("select"), n = A(() => e.props.popperClass), o = A(() => e.props.multiple), r = A(() => e.props.fitInputWidth), a = V("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return xe(() => {
      s(), Nt(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Qb(e, t, n, o, r, a) {
  return I(), W("div", {
    class: j([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ze({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (I(), W("div", {
      key: 0,
      class: j(e.ns.be("dropdown", "header"))
    }, [
      ie(e.$slots, "header")
    ], 2)) : q("v-if", !0),
    ie(e.$slots, "default"),
    e.$slots.footer ? (I(), W("div", {
      key: 1,
      class: j(e.ns.be("dropdown", "footer"))
    }, [
      ie(e.$slots, "footer")
    ], 2)) : q("v-if", !0)
  ], 6);
}
var e1 = /* @__PURE__ */ Ae(Jb, [["render", Qb], ["__file", "select-dropdown.vue"]]);
const t1 = (e, t) => {
  const { t: n } = ha(), o = dr(), r = Be("select"), a = Be("input"), s = Sn({
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
  }), i = V(null), u = V(null), c = V(null), f = V(null), p = V(null), v = V(null), y = V(null), h = V(null), m = V(null), C = V(null), d = V(null), {
    isComposing: S,
    handleCompositionStart: L,
    handleCompositionUpdate: E,
    handleCompositionEnd: b
  } = Ji({
    afterComposition: (N) => Je(N)
  }), { wrapperRef: O, isFocused: k, handleBlur: B } = Xi(p, {
    beforeFocus() {
      return R.value;
    },
    afterFocus() {
      e.automaticDropdown && !z.value && (z.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var H, pe;
      return ((H = c.value) == null ? void 0 : H.isFocusInsideContent(N)) || ((pe = f.value) == null ? void 0 : pe.isFocusInsideContent(N));
    },
    afterBlur() {
      z.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), z = V(!1), ee = V(), { form: ae, formItem: Z } = fr(), { inputId: ce } = _a(e, {
    formItemContext: Z
  }), { valueOnClear: ke, isEmptyValue: P } = Zh(e), R = A(() => e.disabled || ae?.disabled), x = A(() => $t(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), re = A(() => {
    var N;
    return (N = ae?.statusIcon) != null ? N : !1;
  }), X = A(() => e.clearable && !R.value && s.inputHovering && x.value), fe = A(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Y = A(() => r.is("reverse", fe.value && z.value)), Re = A(() => Z?.validateState || ""), _e = A(() => Ki[Re.value]), $e = A(() => e.remote ? 300 : 0), ze = A(() => e.remote && !s.inputValue && s.options.size === 0), He = A(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ke.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ke = A(() => he.value.filter((N) => N.visible).length), he = A(() => {
    const N = Array.from(s.options.values()), H = [];
    return s.optionValues.forEach((pe) => {
      const We = N.findIndex((pt) => pt.value === pe);
      We > -1 && H.push(N[We]);
    }), H.length >= N.length ? H : N;
  }), ot = A(() => Array.from(s.cachedOptions.values())), U = A(() => {
    const N = he.value.filter((H) => !H.created).some((H) => H.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !N;
  }), K = () => {
    e.filterable && Ne(e.filterMethod) || e.filterable && e.remote && Ne(e.remoteMethod) || he.value.forEach((N) => {
      var H;
      (H = N.updateOption) == null || H.call(N, s.inputValue);
    });
  }, J = _o(), ve = A(() => ["small"].includes(J.value) ? "small" : "default"), me = A({
    get() {
      return z.value && !ze.value;
    },
    set(N) {
      z.value = N;
    }
  }), rt = A(() => {
    if (e.multiple && !Rt(e.modelValue))
      return dn(e.modelValue).length === 0 && !s.inputValue;
    const N = $t(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Rt(N) ? !s.inputValue : !0;
  }), it = A(() => {
    var N;
    const H = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !x.value ? H : s.selectedLabel;
  }), At = A(() => Hr ? null : "mouseenter");
  ue(() => e.modelValue, (N, H) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), D(), !oo(N, H) && e.validateEvent && Z?.validate("change").catch((pe) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ue(() => z.value, (N) => {
    N ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", N);
  }), ue(() => s.options.entries(), () => {
    je && (D(), e.defaultFirstOption && (e.filterable || e.remote) && Ke.value && T());
  }, {
    flush: "post"
  }), ue([() => s.hoveringIndex, he], ([N]) => {
    Ee(N) && N > -1 ? ee.value = he.value[N] || {} : ee.value = {}, he.value.forEach((H) => {
      H.hover = ee.value === H;
    });
  }), xl(() => {
    s.isBeforeHide || K();
  });
  const w = (N) => {
    s.previousQuery === N || S.value || (s.previousQuery = N, e.filterable && Ne(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && Ne(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && Ke.value ? Me(T) : Me(ge));
  }, T = () => {
    const N = he.value.filter((pt) => pt.visible && !pt.disabled && !pt.states.groupDisabled), H = N.find((pt) => pt.created), pe = N[0], We = he.value.map((pt) => pt.value);
    s.hoveringIndex = za(We, H || pe);
  }, D = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const H = $t(e.modelValue) ? e.modelValue[0] : e.modelValue, pe = G(H);
      s.selectedLabel = pe.currentLabel, s.selected = [pe];
      return;
    }
    const N = [];
    Rt(e.modelValue) || dn(e.modelValue).forEach((H) => {
      N.push(G(H));
    }), s.selected = N;
  }, G = (N) => {
    let H;
    const pe = Tf(N);
    for (let Pn = s.cachedOptions.size - 1; Pn >= 0; Pn--) {
      const sn = ot.value[Pn];
      if (pe ? fn(sn.value, e.valueKey) === fn(N, e.valueKey) : sn.value === N) {
        H = {
          value: N,
          currentLabel: sn.currentLabel,
          get isDisabled() {
            return sn.isDisabled;
          }
        };
        break;
      }
    }
    if (H)
      return H;
    const We = pe ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: We
    };
  }, ge = () => {
    s.hoveringIndex = he.value.findIndex((N) => s.selected.some((H) => To(H) === To(N)));
  }, se = () => {
    s.selectionWidth = u.value.getBoundingClientRect().width;
  }, _ = () => {
    s.collapseItemWidth = C.value.getBoundingClientRect().width;
  }, M = () => {
    var N, H;
    (H = (N = c.value) == null ? void 0 : N.updatePopper) == null || H.call(N);
  }, de = () => {
    var N, H;
    (H = (N = f.value) == null ? void 0 : N.updatePopper) == null || H.call(N);
  }, we = () => {
    s.inputValue.length > 0 && !z.value && (z.value = !0), w(s.inputValue);
  }, Je = (N) => {
    if (s.inputValue = N.target.value, e.remote)
      bn();
    else
      return we();
  }, bn = uh(() => {
    we();
  }, $e.value), ht = (N) => {
    oo(e.modelValue, N) || t(nn, N);
  }, gr = (N) => ch(N, (H) => {
    const pe = s.cachedOptions.get(H);
    return pe && !pe.disabled && !pe.states.groupDisabled;
  }), Va = (N) => {
    if (e.multiple && N.code !== Ft.delete && N.target.value.length <= 0) {
      const H = dn(e.modelValue).slice(), pe = gr(H);
      if (pe < 0)
        return;
      const We = H[pe];
      H.splice(pe, 1), t(Ye, H), ht(H), t("remove-tag", We);
    }
  }, Au = (N, H) => {
    const pe = s.selected.indexOf(H);
    if (pe > -1 && !R.value) {
      const We = dn(e.modelValue).slice();
      We.splice(pe, 1), t(Ye, We), ht(We), t("remove-tag", H.value);
    }
    N.stopPropagation(), So();
  }, ja = (N) => {
    N.stopPropagation();
    const H = e.multiple ? [] : ke.value;
    if (e.multiple)
      for (const pe of s.selected)
        pe.isDisabled && H.push(pe.value);
    t(Ye, H), ht(H), s.hoveringIndex = -1, z.value = !1, t("clear"), So();
  }, Ba = (N) => {
    var H;
    if (e.multiple) {
      const pe = dn((H = e.modelValue) != null ? H : []).slice(), We = za(pe, N);
      We > -1 ? pe.splice(We, 1) : (e.multipleLimit <= 0 || pe.length < e.multipleLimit) && pe.push(N.value), t(Ye, pe), ht(pe), N.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ye, N.value), ht(N.value), z.value = !1;
    So(), !z.value && Me(() => {
      Eo(N);
    });
  }, za = (N = [], H) => Rt(H) ? -1 : mt(H.value) ? N.findIndex((pe) => oo(fn(pe, e.valueKey), To(H))) : N.indexOf(H.value), Eo = (N) => {
    var H, pe, We, pt, Pn;
    const sn = $t(N) ? N[0] : N;
    let ko = null;
    if (sn?.value) {
      const Xn = he.value.filter((Ku) => Ku.value === sn.value);
      Xn.length > 0 && (ko = Xn[0].$el);
    }
    if (c.value && ko) {
      const Xn = (pt = (We = (pe = (H = c.value) == null ? void 0 : H.popperRef) == null ? void 0 : pe.contentRef) == null ? void 0 : We.querySelector) == null ? void 0 : pt.call(We, `.${r.be("dropdown", "wrap")}`);
      Xn && Jh(Xn, ko);
    }
    (Pn = d.value) == null || Pn.handleScroll();
  }, Iu = (N) => {
    s.options.set(N.value, N), s.cachedOptions.set(N.value, N);
  }, Pu = (N, H) => {
    s.options.get(N) === H && s.options.delete(N);
  }, Nu = A(() => {
    var N, H;
    return (H = (N = c.value) == null ? void 0 : N.popperRef) == null ? void 0 : H.contentRef;
  }), $u = () => {
    s.isBeforeHide = !1, Me(() => {
      var N;
      (N = d.value) == null || N.update(), Eo(s.selected);
    });
  }, So = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, Ru = () => {
    var N;
    if (z.value) {
      z.value = !1, Me(() => {
        var H;
        return (H = p.value) == null ? void 0 : H.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, Mu = (N) => {
    ja(N);
  }, Du = (N) => {
    if (z.value = !1, k.value) {
      const H = new FocusEvent("focus", N);
      Me(() => B(H));
    }
  }, Fu = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : z.value = !1;
  }, Wa = () => {
    R.value || (Hr && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : z.value = !z.value);
  }, xu = () => {
    if (!z.value)
      Wa();
    else {
      const N = he.value[s.hoveringIndex];
      N && !N.isDisabled && Ba(N);
    }
  }, To = (N) => mt(N.value) ? fn(N.value, e.valueKey) : N.value, Vu = A(() => he.value.filter((N) => N.visible).every((N) => N.isDisabled)), ju = A(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Bu = A(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ua = (N) => {
    if (!z.value) {
      z.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ke.value === 0 || S.value) && !Vu.value) {
      N === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : N === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const H = he.value[s.hoveringIndex];
      (H.isDisabled || !H.visible) && Ua(N), Me(() => Eo(ee.value));
    }
  }, zu = () => {
    if (!u.value)
      return 0;
    const N = window.getComputedStyle(u.value);
    return Number.parseFloat(N.gap || "6px");
  }, Wu = A(() => {
    const N = zu();
    return { maxWidth: `${C.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - N : s.selectionWidth}px` };
  }), Uu = A(() => ({ maxWidth: `${s.selectionWidth}px` })), Hu = (N) => {
    t("popup-scroll", N);
  };
  return Nt(u, se), Nt(h, M), Nt(O, M), Nt(m, de), Nt(C, _), xe(() => {
    D();
  }), {
    inputId: ce,
    contentId: o,
    nsSelect: r,
    nsInput: a,
    states: s,
    isFocused: k,
    expanded: z,
    optionsArray: he,
    hoverOption: ee,
    selectSize: J,
    filteredOptionsCount: Ke,
    updateTooltip: M,
    updateTagTooltip: de,
    debouncedOnInputChange: bn,
    onInput: Je,
    deletePrevTag: Va,
    deleteTag: Au,
    deleteSelected: ja,
    handleOptionSelect: Ba,
    scrollToOption: Eo,
    hasModelValue: x,
    shouldShowPlaceholder: rt,
    currentPlaceholder: it,
    mouseEnterEventName: At,
    needStatusIcon: re,
    showClose: X,
    iconComponent: fe,
    iconReverse: Y,
    validateState: Re,
    validateIcon: _e,
    showNewOption: U,
    updateOptions: K,
    collapseTagSize: ve,
    setSelected: D,
    selectDisabled: R,
    emptyText: He,
    handleCompositionStart: L,
    handleCompositionUpdate: E,
    handleCompositionEnd: b,
    onOptionCreate: Iu,
    onOptionDestroy: Pu,
    handleMenuEnter: $u,
    focus: So,
    blur: Ru,
    handleClearClick: Mu,
    handleClickOutside: Du,
    handleEsc: Fu,
    toggleMenu: Wa,
    selectOption: xu,
    getValueKey: To,
    navigateOptions: Ua,
    dropdownMenuVisible: me,
    showTagList: ju,
    collapseTagList: Bu,
    popupScroll: Hu,
    tagStyle: Wu,
    collapseTagStyle: Uu,
    popperRef: Nu,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: f,
    prefixRef: v,
    suffixRef: y,
    selectRef: i,
    wrapperRef: O,
    selectionRef: u,
    scrollbarRef: d,
    menuRef: h,
    tagMenuRef: m,
    collapseItemRef: C
  };
};
var n1 = Q({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Se(hr);
    let o = [];
    return () => {
      var r, a;
      const s = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function u(c) {
        $t(c) && c.forEach((f) => {
          var p, v, y, h;
          const m = (p = f?.type || {}) == null ? void 0 : p.name;
          m === "ElOptionGroup" ? u(!tt(f.children) && !$t(f.children) && Ne((v = f.children) == null ? void 0 : v.default) ? (y = f.children) == null ? void 0 : y.default() : f.children) : m === "ElOption" ? i.push((h = f.props) == null ? void 0 : h.value) : $t(f.children) && u(f.children);
        });
      }
      return s.length && u((a = s[0]) == null ? void 0 : a.children), oo(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const o1 = Le({
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
  size: cr,
  effect: {
    type: le(String),
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
    type: le(Object),
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
  teleported: Ma.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mt,
    default: ya
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mt,
    default: Ui
  },
  tagType: { ...qr.type, default: "info" },
  tagEffect: { ...qr.effect, default: "light" },
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
    type: le(String),
    values: mr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: le(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...xi,
  ...In(["ariaLabel"])
}), $l = "ElSelect", r1 = Q({
  name: $l,
  componentName: $l,
  components: {
    ElSelectMenu: e1,
    ElOption: Da,
    ElOptions: n1,
    ElTag: Fb,
    ElScrollbar: s0,
    ElTooltip: kb,
    ElIcon: Ve
  },
  directives: { ClickOutside: xb },
  props: o1,
  emits: [
    Ye,
    nn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = A(() => {
      const { modelValue: u, multiple: c } = e, f = c ? [] : void 0;
      return $t(u) ? c ? u : f : c ? f : u;
    }), o = Sn({
      ...Jr(e),
      modelValue: n
    }), r = t1(o, t), { calculatorRef: a, inputStyle: s } = Yb();
    Vt(hr, Sn({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const i = A(() => e.multiple ? r.states.selected.map((u) => u.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function a1(e, t, n, o, r, a) {
  const s = _n("el-tag"), i = _n("el-tooltip"), u = _n("el-icon"), c = _n("el-option"), f = _n("el-options"), p = _n("el-scrollbar"), v = _n("el-select-menu"), y = lc("click-outside");
  return Ue((I(), W("div", {
    ref: "selectRef",
    class: j([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [ic(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
  }, [
    $(i, {
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
      default: ne(() => {
        var h;
        return [
          g("div", {
            ref: "wrapperRef",
            class: j([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ie(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (I(), W("div", {
              key: 0,
              ref: "prefixRef",
              class: j(e.nsSelect.e("prefix"))
            }, [
              ie(e.$slots, "prefix")
            ], 2)) : q("v-if", !0),
            g("div", {
              ref: "selectionRef",
              class: j([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ie(e.$slots, "tag", { key: 0 }, () => [
                (I(!0), W(qe, null, Cn(e.showTagList, (m) => (I(), W("div", {
                  key: e.getValueKey(m),
                  class: j(e.nsSelect.e("selected-item"))
                }, [
                  $(s, {
                    closable: !e.selectDisabled && !m.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ze(e.tagStyle),
                    onClose: (C) => e.deleteTag(C, m)
                  }, {
                    default: ne(() => [
                      g("span", {
                        class: j(e.nsSelect.e("tags-text"))
                      }, [
                        ie(e.$slots, "label", {
                          label: m.currentLabel,
                          value: m.value
                        }, () => [
                          gt(F(m.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (I(), oe(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ne(() => [
                    g("div", {
                      ref: "collapseItemRef",
                      class: j(e.nsSelect.e("selected-item"))
                    }, [
                      $(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ze(e.collapseTagStyle)
                      }, {
                        default: ne(() => [
                          g("span", {
                            class: j(e.nsSelect.e("tags-text"))
                          }, " + " + F(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ne(() => [
                    g("div", {
                      ref: "tagMenuRef",
                      class: j(e.nsSelect.e("selection"))
                    }, [
                      (I(!0), W(qe, null, Cn(e.collapseTagList, (m) => (I(), W("div", {
                        key: e.getValueKey(m),
                        class: j(e.nsSelect.e("selected-item"))
                      }, [
                        $(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !m.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (C) => e.deleteTag(C, m)
                        }, {
                          default: ne(() => [
                            g("span", {
                              class: j(e.nsSelect.e("tags-text"))
                            }, [
                              ie(e.$slots, "label", {
                                label: m.currentLabel,
                                value: m.value
                              }, () => [
                                gt(F(m.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : q("v-if", !0)
              ]) : q("v-if", !0),
              g("div", {
                class: j([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Ue(g("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (m) => e.states.inputValue = m,
                  type: "text",
                  name: e.name,
                  class: j([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ze(e.inputStyle),
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
                    yt(Ie((m) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    yt(Ie((m) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    yt(Ie(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    yt(Ie(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    yt(Ie(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ie(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [so, e.states.inputValue]
                ]),
                e.filterable ? (I(), W("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: j(e.nsSelect.e("input-calculator")),
                  textContent: F(e.states.inputValue)
                }, null, 10, ["textContent"])) : q("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (I(), W("div", {
                key: 1,
                class: j([
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
                  g("span", null, F(e.currentPlaceholder), 1)
                ]) : (I(), W("span", { key: 1 }, F(e.currentPlaceholder), 1))
              ], 2)) : q("v-if", !0)
            ], 2),
            g("div", {
              ref: "suffixRef",
              class: j(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (I(), oe(u, {
                key: 0,
                class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ne(() => [
                  (I(), oe(st(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              e.showClose && e.clearIcon ? (I(), oe(u, {
                key: 1,
                class: j([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ne(() => [
                  (I(), oe(st(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : q("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (I(), oe(u, {
                key: 2,
                class: j([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ne(() => [
                  (I(), oe(st(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ne(() => [
        $(v, { ref: "menuRef" }, {
          default: ne(() => [
            e.$slots.header ? (I(), W("div", {
              key: 0,
              class: j(e.nsSelect.be("dropdown", "header")),
              onClick: Ie(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "header")
            ], 10, ["onClick"])) : q("v-if", !0),
            Ue($(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: j([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ne(() => [
                e.showNewOption ? (I(), oe(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : q("v-if", !0),
                $(f, null, {
                  default: ne(() => [
                    ie(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [tn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (I(), W("div", {
              key: 1,
              class: j(e.nsSelect.be("dropdown", "loading"))
            }, [
              ie(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (I(), W("div", {
              key: 2,
              class: j(e.nsSelect.be("dropdown", "empty"))
            }, [
              ie(e.$slots, "empty", {}, () => [
                g("span", null, F(e.emptyText), 1)
              ])
            ], 2)) : q("v-if", !0),
            e.$slots.footer ? (I(), W("div", {
              key: 3,
              class: j(e.nsSelect.be("dropdown", "footer")),
              onClick: Ie(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "footer")
            ], 10, ["onClick"])) : q("v-if", !0)
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
var s1 = /* @__PURE__ */ Ae(r1, [["render", a1], ["__file", "select.vue"]]);
const l1 = Q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Be("select"), n = V(null), o = lt(), r = V([]);
    Vt(wu, Sn({
      ...Jr(e)
    }));
    const a = A(() => r.value.some((c) => c.visible === !0)), s = (c) => {
      var f, p;
      return ((f = c.type) == null ? void 0 : f.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, i = (c) => {
      const f = dn(c), p = [];
      return f.forEach((v) => {
        var y, h;
        s(v) ? p.push(v.component.proxy) : (y = v.children) != null && y.length ? p.push(...i(v.children)) : (h = v.component) != null && h.subTree && p.push(...i(v.component.subTree));
      }), p;
    }, u = () => {
      r.value = i(o.subTree);
    };
    return xe(() => {
      u();
    }), Mh(n, u, {
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
function i1(e, t, n, o, r, a) {
  return Ue((I(), W("ul", {
    ref: "groupRef",
    class: j(e.ns.be("group", "wrap"))
  }, [
    g("li", {
      class: j(e.ns.be("group", "title"))
    }, F(e.label), 3),
    g("li", null, [
      g("ul", {
        class: j(e.ns.b("group"))
      }, [
        ie(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var Cu = /* @__PURE__ */ Ae(l1, [["render", i1], ["__file", "option-group.vue"]]);
const u1 = Lt(s1, {
  Option: Da,
  OptionGroup: Cu
}), c1 = Wi(Da);
Wi(Cu);
const d1 = (e) => ["", ...ga].includes(e), f1 = Le({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: d1
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Mt
  },
  activeActionIcon: {
    type: Mt
  },
  activeIcon: {
    type: Mt
  },
  inactiveIcon: {
    type: Mt
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
    type: le(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...In(["ariaLabel"])
}), p1 = {
  [Ye]: (e) => mn(e) || tt(e) || Ee(e),
  [nn]: (e) => mn(e) || tt(e) || Ee(e),
  [en]: (e) => mn(e) || tt(e) || Ee(e)
}, Eu = "ElSwitch", m1 = Q({
  name: Eu
}), v1 = /* @__PURE__ */ Q({
  ...m1,
  props: f1,
  emits: p1,
  setup(e, { expose: t, emit: n }) {
    const o = e, { formItem: r } = fr(), a = _o(), s = Be("switch"), { inputId: i } = _a(o, {
      formItemContext: r
    }), u = wa(A(() => o.loading)), c = V(o.modelValue !== !1), f = V(), p = V(), v = A(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", u.value),
      s.is("checked", d.value)
    ]), y = A(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), h = A(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), m = A(() => ({
      width: zn(o.width)
    }));
    ue(() => o.modelValue, () => {
      c.value = !0;
    });
    const C = A(() => c.value ? o.modelValue : !1), d = A(() => C.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(C.value) || (n(Ye, o.inactiveValue), n(nn, o.inactiveValue), n(en, o.inactiveValue)), ue(d, (b) => {
      var O;
      f.value.checked = b, o.validateEvent && ((O = r?.validate) == null || O.call(r, "change").catch((k) => void 0));
    });
    const S = () => {
      const b = d.value ? o.inactiveValue : o.activeValue;
      n(Ye, b), n(nn, b), n(en, b), Me(() => {
        f.value.checked = d.value;
      });
    }, L = () => {
      if (u.value)
        return;
      const { beforeChange: b } = o;
      if (!b) {
        S();
        return;
      }
      const O = b();
      [
        Cs(O),
        mn(O)
      ].includes(!0) || va(Eu, "beforeChange must return type `Promise<boolean>` or `boolean`"), Cs(O) ? O.then((B) => {
        B && S();
      }).catch((B) => {
      }) : O && S();
    }, E = () => {
      var b, O;
      (O = (b = f.value) == null ? void 0 : b.focus) == null || O.call(b);
    };
    return xe(() => {
      f.value.checked = d.value;
    }), t({
      focus: E,
      checked: d
    }), (b, O) => (I(), W("div", {
      class: j(l(v)),
      onClick: Ie(L, ["prevent"])
    }, [
      g("input", {
        id: l(i),
        ref_key: "input",
        ref: f,
        class: j(l(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": l(d),
        "aria-disabled": l(u),
        "aria-label": b.ariaLabel,
        name: b.name,
        "true-value": b.activeValue,
        "false-value": b.inactiveValue,
        disabled: l(u),
        tabindex: b.tabindex,
        onChange: S,
        onKeydown: yt(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !b.inlinePrompt && (b.inactiveIcon || b.inactiveText) ? (I(), W("span", {
        key: 0,
        class: j(l(y))
      }, [
        b.inactiveIcon ? (I(), oe(l(Ve), { key: 0 }, {
          default: ne(() => [
            (I(), oe(st(b.inactiveIcon)))
          ]),
          _: 1
        })) : q("v-if", !0),
        !b.inactiveIcon && b.inactiveText ? (I(), W("span", {
          key: 1,
          "aria-hidden": l(d)
        }, F(b.inactiveText), 9, ["aria-hidden"])) : q("v-if", !0)
      ], 2)) : q("v-if", !0),
      g("span", {
        ref_key: "core",
        ref: p,
        class: j(l(s).e("core")),
        style: Ze(l(m))
      }, [
        b.inlinePrompt ? (I(), W("div", {
          key: 0,
          class: j(l(s).e("inner"))
        }, [
          b.activeIcon || b.inactiveIcon ? (I(), oe(l(Ve), {
            key: 0,
            class: j(l(s).is("icon"))
          }, {
            default: ne(() => [
              (I(), oe(st(l(d) ? b.activeIcon : b.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : b.activeText || b.inactiveText ? (I(), W("span", {
            key: 1,
            class: j(l(s).is("text")),
            "aria-hidden": !l(d)
          }, F(l(d) ? b.activeText : b.inactiveText), 11, ["aria-hidden"])) : q("v-if", !0)
        ], 2)) : q("v-if", !0),
        g("div", {
          class: j(l(s).e("action"))
        }, [
          b.loading ? (I(), oe(l(Ve), {
            key: 0,
            class: j(l(s).is("loading"))
          }, {
            default: ne(() => [
              $(l(Hi))
            ]),
            _: 1
          }, 8, ["class"])) : l(d) ? ie(b.$slots, "active-action", { key: 1 }, () => [
            b.activeActionIcon ? (I(), oe(l(Ve), { key: 0 }, {
              default: ne(() => [
                (I(), oe(st(b.activeActionIcon)))
              ]),
              _: 1
            })) : q("v-if", !0)
          ]) : l(d) ? q("v-if", !0) : ie(b.$slots, "inactive-action", { key: 2 }, () => [
            b.inactiveActionIcon ? (I(), oe(l(Ve), { key: 0 }, {
              default: ne(() => [
                (I(), oe(st(b.inactiveActionIcon)))
              ]),
              _: 1
            })) : q("v-if", !0)
          ])
        ], 2)
      ], 6),
      !b.inlinePrompt && (b.activeIcon || b.activeText) ? (I(), W("span", {
        key: 1,
        class: j(l(h))
      }, [
        b.activeIcon ? (I(), oe(l(Ve), { key: 0 }, {
          default: ne(() => [
            (I(), oe(st(b.activeIcon)))
          ]),
          _: 1
        })) : q("v-if", !0),
        !b.activeIcon && b.activeText ? (I(), W("span", {
          key: 1,
          "aria-hidden": !l(d)
        }, F(b.activeText), 9, ["aria-hidden"])) : q("v-if", !0)
      ], 2)) : q("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var h1 = /* @__PURE__ */ Ae(v1, [["__file", "switch.vue"]]);
const g1 = Lt(h1), Su = ["success", "info", "warning", "error"], Qe = Yi({
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
  appendTo: je ? document.body : void 0
}), y1 = Le({
  customClass: {
    type: String,
    default: Qe.customClass
  },
  center: {
    type: Boolean,
    default: Qe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Qe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Qe.duration
  },
  icon: {
    type: Mt,
    default: Qe.icon
  },
  id: {
    type: String,
    default: Qe.id
  },
  message: {
    type: le([
      String,
      Object,
      Function
    ]),
    default: Qe.message
  },
  onClose: {
    type: le(Function),
    default: Qe.onClose
  },
  showClose: {
    type: Boolean,
    default: Qe.showClose
  },
  type: {
    type: String,
    values: Su,
    default: Qe.type
  },
  plain: {
    type: Boolean,
    default: Qe.plain
  },
  offset: {
    type: Number,
    default: Qe.offset
  },
  zIndex: {
    type: Number,
    default: Qe.zIndex
  },
  grouping: {
    type: Boolean,
    default: Qe.grouping
  },
  repeatNum: {
    type: Number,
    default: Qe.repeatNum
  }
}), b1 = {
  destroy: () => !0
}, St = uc([]), _1 = (e) => {
  const t = St.findIndex((r) => r.id === e), n = St[t];
  let o;
  return t > 0 && (o = St[t - 1]), { current: n, prev: o };
}, w1 = (e) => {
  const { prev: t } = _1(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, C1 = (e, t) => St.findIndex((o) => o.id === e) > 0 ? 16 : t, E1 = Q({
  name: "ElMessage"
}), S1 = /* @__PURE__ */ Q({
  ...E1,
  props: y1,
  emits: b1,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Lg, { ns: r, zIndex: a } = ji("message"), { currentZIndex: s, nextZIndex: i } = a, u = V(), c = V(!1), f = V(0);
    let p;
    const v = A(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = A(() => {
      const k = n.type;
      return { [r.bm("icon", k)]: k && qo[k] };
    }), h = A(() => n.icon || qo[n.type] || ""), m = A(() => w1(n.id)), C = A(() => C1(n.id, n.offset) + m.value), d = A(() => f.value + C.value), S = A(() => ({
      top: `${C.value}px`,
      zIndex: s.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: p } = Ai(() => {
        b();
      }, n.duration));
    }
    function E() {
      p?.();
    }
    function b() {
      c.value = !1;
    }
    function O({ code: k }) {
      k === Ft.esc && b();
    }
    return xe(() => {
      L(), i(), c.value = !0;
    }), ue(() => n.repeatNum, () => {
      E(), L();
    }), kt(document, "keydown", O), Nt(u, () => {
      f.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: d,
      close: b
    }), (k, B) => (I(), oe(qn, {
      name: l(r).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (z) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        Ue(g("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: u,
          class: j([
            l(r).b(),
            { [l(r).m(k.type)]: k.type },
            l(r).is("center", k.center),
            l(r).is("closable", k.showClose),
            l(r).is("plain", k.plain),
            k.customClass
          ]),
          style: Ze(l(S)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: L
        }, [
          k.repeatNum > 1 ? (I(), oe(l(Pb), {
            key: 0,
            value: k.repeatNum,
            type: l(v),
            class: j(l(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : q("v-if", !0),
          l(h) ? (I(), oe(l(Ve), {
            key: 1,
            class: j([l(r).e("icon"), l(y)])
          }, {
            default: ne(() => [
              (I(), oe(st(l(h))))
            ]),
            _: 1
          }, 8, ["class"])) : q("v-if", !0),
          ie(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (I(), W(qe, { key: 1 }, [
              q(" Caution here, message could've been compromised, never use user's input as message "),
              g("p", {
                class: j(l(r).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (I(), W("p", {
              key: 0,
              class: j(l(r).e("content"))
            }, F(k.message), 3))
          ]),
          k.showClose ? (I(), oe(l(Ve), {
            key: 2,
            class: j(l(r).e("closeBtn")),
            onClick: Ie(b, ["stop"])
          }, {
            default: ne(() => [
              $(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : q("v-if", !0)
        ], 46, ["id"]), [
          [tn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var T1 = /* @__PURE__ */ Ae(S1, [["__file", "message.vue"]]);
let k1 = 1;
const Tu = (e) => {
  const t = !e || tt(e) || lo(e) || Ne(e) ? { message: e } : e, n = {
    ...Qe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (tt(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Tt(o) || (o = document.body), n.appendTo = o;
  }
  return mn(Ct.grouping) && !n.grouping && (n.grouping = Ct.grouping), Ee(Ct.duration) && n.duration === 3e3 && (n.duration = Ct.duration), Ee(Ct.offset) && n.offset === 16 && (n.offset = Ct.offset), mn(Ct.showClose) && !n.showClose && (n.showClose = Ct.showClose), n;
}, O1 = (e) => {
  const t = St.indexOf(e);
  if (t === -1)
    return;
  St.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, L1 = ({ appendTo: e, ...t }, n) => {
  const o = `message_${k1++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), O1(f);
    },
    onDestroy: () => {
      Bo(null, a);
    }
  }, i = $(T1, s, Ne(s.message) || lo(s.message) ? {
    default: Ne(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Gn._context, Bo(i, a), e.appendChild(a.firstElementChild);
  const u = i.component, f = {
    id: o,
    vnode: i,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return f;
}, Gn = (e = {}, t) => {
  if (!je)
    return { close: () => {
    } };
  const n = Tu(e);
  if (n.grouping && St.length) {
    const r = St.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Ee(Ct.max) && St.length >= Ct.max)
    return { close: () => {
    } };
  const o = L1(n, t);
  return St.push(o), o.handler;
};
Su.forEach((e) => {
  Gn[e] = (t = {}, n) => {
    const o = Tu(t);
    return Gn({ ...o, type: e }, n);
  };
});
function A1(e) {
  for (const t of St)
    (!e || e === t.props.type) && t.handler.close();
}
Gn.closeAll = A1;
Gn._context = null;
const I1 = zi(Gn, "$message"), ku = [
  "success",
  "info",
  "warning",
  "error"
], P1 = Le({
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
    type: Mt
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: le([
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
    type: le(Function),
    default: () => {
    }
  },
  onClose: {
    type: le(Function),
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
    values: [...ku, ""],
    default: ""
  },
  zIndex: Number
}), N1 = {
  destroy: () => !0
}, $1 = Q({
  name: "ElNotification"
}), R1 = /* @__PURE__ */ Q({
  ...$1,
  props: P1,
  emits: N1,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = ji("notification"), { nextZIndex: a, currentZIndex: s } = r, { Close: i } = Og, u = V(!1);
    let c;
    const f = A(() => {
      const L = n.type;
      return L && qo[n.type] ? o.m(L) : "";
    }), p = A(() => n.type && qo[n.type] || n.icon), v = A(() => n.position.endsWith("right") ? "right" : "left"), y = A(() => n.position.startsWith("top") ? "top" : "bottom"), h = A(() => {
      var L;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : s.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: c } = Ai(() => {
        u.value && d();
      }, n.duration));
    }
    function C() {
      c?.();
    }
    function d() {
      u.value = !1;
    }
    function S({ code: L }) {
      L === Ft.delete || L === Ft.backspace ? C() : L === Ft.esc ? u.value && d() : m();
    }
    return xe(() => {
      m(), a(), u.value = !0;
    }), kt(document, "keydown", S), t({
      visible: u,
      close: d
    }), (L, E) => (I(), oe(qn, {
      name: l(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (b) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        Ue(g("div", {
          id: L.id,
          class: j([l(o).b(), L.customClass, l(v)]),
          style: Ze(l(h)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: m,
          onClick: L.onClick
        }, [
          l(p) ? (I(), oe(l(Ve), {
            key: 0,
            class: j([l(o).e("icon"), l(f)])
          }, {
            default: ne(() => [
              (I(), oe(st(l(p))))
            ]),
            _: 1
          }, 8, ["class"])) : q("v-if", !0),
          g("div", {
            class: j(l(o).e("group"))
          }, [
            g("h2", {
              class: j(l(o).e("title")),
              textContent: F(L.title)
            }, null, 10, ["textContent"]),
            Ue(g("div", {
              class: j(l(o).e("content")),
              style: Ze(L.title ? void 0 : { margin: 0 })
            }, [
              ie(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (I(), W(qe, { key: 1 }, [
                  q(" Caution here, message could've been compromised, never use user's input as message "),
                  g("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (I(), W("p", { key: 0 }, F(L.message), 1))
              ])
            ], 6), [
              [tn, L.message]
            ]),
            L.showClose ? (I(), oe(l(Ve), {
              key: 0,
              class: j(l(o).e("closeBtn")),
              onClick: Ie(d, ["stop"])
            }, {
              default: ne(() => [
                $(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var M1 = /* @__PURE__ */ Ae(R1, [["__file", "notification.vue"]]);
const Jo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Zr = 16;
let D1 = 1;
const Yn = function(e = {}, t) {
  if (!je)
    return { close: () => {
    } };
  (tt(e) || lo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Jo[n].forEach(({ vm: f }) => {
    var p;
    o += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + Zr;
  }), o += Zr;
  const r = `notification_${D1++}`, a = e.onClose, s = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      F1(r, n, a);
    }
  };
  let i = document.body;
  Tt(e.appendTo) ? i = e.appendTo : tt(e.appendTo) && (i = document.querySelector(e.appendTo)), Tt(i) || (i = document.body);
  const u = document.createElement("div"), c = $(M1, s, Ne(s.message) ? s.message : lo(s.message) ? () => s.message : null);
  return c.appContext = Rt(t) ? Yn._context : t, c.props.onDestroy = () => {
    Bo(null, u);
  }, Bo(c, u), Jo[n].push({ vm: c }), i.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
ku.forEach((e) => {
  Yn[e] = (t = {}, n) => ((tt(t) || lo(t)) && (t = {
    message: t
  }), Yn({ ...t, type: e }, n));
});
function F1(e, t, n) {
  const o = Jo[t], r = o.findIndex(({ vm: c }) => {
    var f;
    return ((f = c.component) == null ? void 0 : f.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: a } = o[r];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const u = o.length;
  if (!(u < 1))
    for (let c = r; c < u; c++) {
      const { el: f, component: p } = o[c].vm, v = Number.parseInt(f.style[i], 10) - s - Zr;
      p.props.offset = v;
    }
}
function x1() {
  for (const e of Object.values(Jo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Yn.closeAll = x1;
Yn._context = null;
const V1 = zi(Yn, "$notify"), at = {
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
    o === "center" ? I1({
      message: t,
      type: n,
      duration: r,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : V1({
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
}, j1 = "snippets-code:developer-mode", Ou = "snippets-code:frontend-diagnostics", B1 = 240, to = "[REDACTED]", jo = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${to}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${to}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  to
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${to}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${to}`
), Lu = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return jo(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return jo(
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
    return jo(String(e));
  }
}, z1 = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, W1 = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Ou) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Fa = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(j1) === "true";
  } catch {
    return !1;
  }
}, U1 = (e, t, n) => {
  if (!Fa() || typeof localStorage > "u") return;
  const o = W1();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: z1(),
    message: jo(t),
    data: Lu(n)
  });
  try {
    localStorage.setItem(
      Ou,
      JSON.stringify(o.slice(-B1))
    );
  } catch {
  }
}, H1 = () => Fa(), K1 = (e) => e === "warn" || e === "error" || !1 || !1 || Fa(), Mo = (e, t, n) => {
  U1(e, t, n), K1(e) && ft("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Lu(n)
  }).catch(() => {
  });
}, Fn = {
  info: (e, t, ...n) => {
    Mo("info", e, t);
  },
  error: (e, t) => {
    Mo("error", e, t);
  },
  warn: (e, t) => {
    Mo("warn", e, t);
  },
  debug: (e, t) => {
    H1() && Mo("debug", e, t);
  }
}, G1 = { class: "local-ai-chat-shell" }, Y1 = { class: "chat-sidebar" }, q1 = { class: "sidebar-header" }, Z1 = { class: "sidebar-title-block" }, X1 = { class: "sidebar-actions" }, J1 = ["title"], Q1 = ["title"], e_ = { class: "sidebar-search" }, t_ = ["placeholder"], n_ = { class: "sidebar-section" }, o_ = { class: "section-title" }, r_ = ["onClick"], a_ = { class: "sidebar-section recent-section" }, s_ = { class: "section-title" }, l_ = {
  key: 0,
  class: "chat-list"
}, i_ = ["onClick", "onKeydown"], u_ = { class: "chat-item-title" }, c_ = { class: "chat-item-time" }, d_ = ["title", "onClick"], f_ = {
  key: 1,
  class: "sidebar-empty"
}, p_ = { class: "chat-panel" }, m_ = { class: "chat-topbar" }, v_ = { class: "chat-topbar-main" }, h_ = { class: "chat-title-row" }, g_ = { class: "service-url" }, y_ = { class: "chat-meta-pills" }, b_ = { class: "chat-topbar-actions" }, __ = ["title"], w_ = { class: "date-divider" }, C_ = {
  key: 0,
  class: "empty-state"
}, E_ = { class: "empty-title" }, S_ = { class: "empty-desc" }, T_ = { class: "message-avatar" }, k_ = { key: 1 }, O_ = { class: "message-body" }, L_ = {
  key: 0,
  class: "user-bubble"
}, A_ = { class: "assistant-head" }, I_ = { class: "assistant-card" }, P_ = { class: "message-content" }, N_ = { class: "message-actions" }, $_ = ["title", "onClick"], R_ = ["title", "onClick"], M_ = ["title"], D_ = ["title"], F_ = ["title", "onClick"], x_ = ["title", "onClick"], V_ = { class: "token-row" }, j_ = {
  key: 1,
  class: "message-row message-row--assistant"
}, B_ = { class: "message-avatar" }, z_ = { class: "message-body" }, W_ = { class: "assistant-head" }, U_ = { class: "assistant-card loading-text" }, H_ = ["placeholder", "onKeydown"], K_ = { class: "input-toolbar" }, G_ = { class: "input-toolbar-left" }, Y_ = ["title"], q_ = ["title"], Z_ = { class: "model-select-shell" }, X_ = { value: "local" }, J_ = ["disabled"], Q_ = { class: "input-toolbar-right" }, e2 = ["disabled"], t2 = /* @__PURE__ */ Q({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = go(), n = V(""), o = V([]), r = V(""), a = V(""), s = V(!1), i = V(!1), u = V("local"), c = V(null), f = V(null);
    let p = null;
    const v = A(() => [
      { key: "summary", text: t("localAi.quickPromptSummary") },
      { key: "translate", text: t("localAi.quickPromptTranslate") },
      { key: "code", text: t("localAi.quickPromptCode") },
      { key: "regex", text: t("localAi.quickPromptRegex") }
    ]), y = A(() => !!a.value.trim() && !s.value), h = A(() => c.value?.healthy ? t("localAi.serviceHealthy") : c.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), m = A(
      () => o.value.find((U) => U.id === r.value) ?? null
    ), C = A(() => m.value?.messages ?? []), d = A(() => {
      const U = n.value.trim().toLowerCase();
      return o.value.filter(
        (K) => !U || K.title.toLowerCase().includes(U) || K.messages.some(
          (J) => J.content.toLowerCase().includes(U)
        )
      ).slice().sort((K, J) => J.updatedAt.localeCompare(K.updatedAt));
    }), S = () => t("localAi.now"), L = () => {
      const U = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: U,
        updatedAt: U,
        updatedAtLabel: S(),
        messages: []
      };
    }, E = async () => {
      await Me();
      const U = f.value;
      U && (U.scrollTop = U.scrollHeight);
    }, b = async () => {
      i.value = !0;
      try {
        c.value = await ci();
      } catch (U) {
        Fn.warn("[LocalAI] refresh chat status failed", U);
      } finally {
        i.value = !1;
      }
    }, O = async () => {
      try {
        const U = await yf();
        o.value = U.map((K) => ({
          id: K.id,
          title: K.title,
          createdAt: K.createdAt,
          updatedAt: K.updatedAt,
          updatedAtLabel: new Date(K.updatedAt).toLocaleString(),
          messages: K.turns.map((J) => ({
            id: J.id,
            role: J.role,
            content: J.content
          }))
        })), !r.value && o.value[0] && (r.value = o.value[0].id);
      } catch (U) {
        Fn.warn("[LocalAI] refresh histories failed", U);
      }
    }, k = async () => {
      await Promise.all([b(), O()]);
    }, B = async () => {
      const U = m.value;
      U && await bf({
        id: U.id,
        title: U.title,
        createdAt: U.createdAt,
        updatedAt: U.updatedAt,
        turns: U.messages.map((K) => ({
          id: K.id,
          role: K.role,
          content: K.content,
          createdAt: U.updatedAt
        }))
      });
    }, z = () => {
      const U = L();
      o.value.unshift(U), r.value = U.id, a.value = "";
    }, ee = () => {
      m.value || z();
    }, ae = (U) => {
      ee(), a.value = U;
    }, Z = (U) => {
      r.value = U, E();
    }, ce = async (U) => {
      o.value = o.value.filter((K) => K.id !== U), await _f(U), r.value === U && (r.value = o.value[0]?.id ?? "");
    }, ke = () => C.value.map((U) => ({
      role: U.role,
      content: U.content
    })), P = async () => {
      const U = a.value.trim();
      if (!(!U || s.value)) {
        ee(), m.value?.messages.push({
          id: `${Date.now()}-user`,
          role: "user",
          content: U
        }), a.value = "", s.value = !0, await E();
        try {
          const K = await _s({ messages: ke() });
          m.value?.messages.push({
            id: `${Date.now()}-assistant`,
            role: "assistant",
            content: K.content
          }), m.value && (m.value.title = m.value.title === t("localAi.newChatTitle") ? U.slice(0, 28) : m.value.title, m.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), m.value.updatedAtLabel = new Date(
            m.value.updatedAt
          ).toLocaleString(), await B()), await b();
        } catch (K) {
          at.msg(`${t("localAi.chatFailed")}: ${K}`, "error"), m.value?.messages.push({
            id: `${Date.now()}-assistant-error`,
            role: "assistant",
            content: String(K)
          });
        } finally {
          s.value = !1, await E();
        }
      }
    }, R = async () => {
      m.value && (m.value.messages = [], m.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), m.value.updatedAtLabel = new Date(
        m.value.updatedAt
      ).toLocaleString()), await B();
    }, x = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, re = () => {
      n.value = "";
    }, X = () => {
      at.msg(t("localAi.moreComingSoon"));
    }, fe = (U) => {
      const K = Number(U.id.split("-")[0]);
      return Number.isFinite(K) ? new Date(K) : new Date(m.value?.updatedAt ?? Date.now());
    }, Y = (U) => fe(U).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), Re = (U) => {
      const K = new Date(U), J = /* @__PURE__ */ new Date(), ve = J.getTime() - K.getTime(), me = 24 * 60 * 60 * 1e3;
      return K.toDateString() === J.toDateString() ? K.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ve < me * 2 ? t("localAi.yesterday") : ve < me * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(ve / me))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(ve / (me * 7)))
      });
    }, _e = (U) => Math.max(1, Math.ceil(U.length / 2.2)), $e = (U, K) => {
      const J = C.value.slice(0, K).reverse().find((it) => it.role === "user"), ve = _e(J?.content ?? ""), me = _e(U.content), rt = (Math.min(900, me) / 60 + 0.8).toFixed(2);
      return {
        input: ve,
        output: me,
        total: ve + me,
        seconds: rt
      };
    }, ze = async (U) => {
      try {
        await navigator.clipboard.writeText(U.content), at.msg(t("localAi.copied"));
      } catch (K) {
        at.msg(`${t("common.operationFailed")}: ${K}`, "error");
      }
    }, He = async (U) => {
      m.value && (m.value.messages = m.value.messages.filter(
        (K) => K.id !== U
      ), m.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), m.value.updatedAtLabel = new Date(
        m.value.updatedAt
      ).toLocaleString(), await B());
    }, Ke = (U) => {
      a.value = U.content;
    }, he = () => {
      at.msg(t("localAi.feedbackSaved"));
    }, ot = async (U) => {
      const K = m.value;
      if (!K || s.value) return;
      const J = K.messages.findIndex(
        (me) => me.id === U
      );
      if (K.messages.slice(0, J).reverse().find((me) => me.role === "user")) {
        K.messages = K.messages.slice(0, J), s.value = !0, await E();
        try {
          const me = await _s({ messages: ke() });
          K.messages.push({
            id: `${Date.now()}-assistant`,
            role: "assistant",
            content: me.content
          }), K.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), K.updatedAtLabel = new Date(K.updatedAt).toLocaleString(), await B();
        } catch (me) {
          at.msg(`${t("localAi.chatFailed")}: ${me}`, "error"), K.messages.push({
            id: `${Date.now()}-assistant-error`,
            role: "assistant",
            content: String(me)
          });
        } finally {
          s.value = !1, await E();
        }
      }
    };
    return xe(async () => {
      await k(), p = setInterval(() => {
        b().catch(
          (U) => Fn.warn("[LocalAI] status timer failed", U)
        );
      }, 8e3);
    }), Qo(() => {
      p && clearInterval(p);
    }), (U, K) => (I(), W("main", G1, [
      g("aside", Y1, [
        g("header", q1, [
          g("div", Z1, [
            g(
              "h2",
              null,
              F(l(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            g(
              "p",
              null,
              F(l(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ]),
          g("div", X1, [
            g("button", {
              class: "icon-action-btn icon-action-btn--primary",
              type: "button",
              title: l(t)("localAi.newChat"),
              onClick: z
            }, [
              $(l(vc), {
                theme: "outline",
                size: "16"
              })
            ], 8, J1),
            g("button", {
              class: "icon-action-btn",
              type: "button",
              title: l(t)("plugins.refresh"),
              onClick: k
            }, [
              $(l(Ga), {
                theme: "outline",
                size: "16"
              })
            ], 8, Q1)
          ])
        ]),
        g("div", e_, [
          $(l(Sc), {
            theme: "outline",
            size: "17"
          }),
          Ue(g("input", {
            "onUpdate:modelValue": K[0] || (K[0] = (J) => Dn(n) ? n.value = J : null),
            placeholder: l(t)("localAi.searchHistory")
          }, null, 8, t_), [
            [so, l(n)]
          ]),
          K[3] || (K[3] = g(
            "kbd",
            null,
            "Ctrl K",
            -1
            /* HOISTED */
          ))
        ]),
        g("section", n_, [
          g(
            "div",
            o_,
            F(l(t)("common.quickStart")),
            1
            /* TEXT */
          ),
          (I(!0), W(
            qe,
            null,
            Cn(l(v), (J) => (I(), W("button", {
              key: J.key,
              class: "quick-prompt",
              type: "button",
              onClick: (ve) => ae(J.text)
            }, [
              $(l(Ka), {
                theme: "outline",
                size: "16"
              }),
              g(
                "span",
                null,
                F(J.text),
                1
                /* TEXT */
              )
            ], 8, r_))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        g("section", a_, [
          g(
            "div",
            s_,
            F(l(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          l(d).length ? (I(), W("div", l_, [
            (I(!0), W(
              qe,
              null,
              Cn(l(d), (J) => (I(), W("div", {
                key: J.id,
                class: j([
                  "chat-list-item",
                  l(r) === J.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (ve) => Z(J.id),
                onKeydown: yt(Ie((ve) => Z(J.id), ["prevent"]), ["enter"])
              }, [
                $(l(Ka), {
                  theme: "outline",
                  size: "16"
                }),
                g(
                  "span",
                  u_,
                  F(J.title),
                  1
                  /* TEXT */
                ),
                g(
                  "span",
                  c_,
                  F(Re(J.updatedAt)),
                  1
                  /* TEXT */
                ),
                g("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: l(t)("common.delete"),
                  onClick: Ie((ve) => ce(J.id), ["stop"])
                }, [
                  $(l(Ha), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, d_)
              ], 42, i_))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (I(), W(
            "div",
            f_,
            F(l(t)("common.empty")),
            1
            /* TEXT */
          )),
          g("button", {
            class: "view-all-btn",
            type: "button",
            onClick: re
          }, [
            g(
              "span",
              null,
              F(l(t)("localAi.viewAllChats")),
              1
              /* TEXT */
            ),
            $(l(Ec), {
              theme: "outline",
              size: "15"
            })
          ])
        ])
      ]),
      g("section", p_, [
        g("header", m_, [
          g("div", v_, [
            g("div", h_, [
              g(
                "h3",
                null,
                F(l(m)?.title ?? l(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              g(
                "span",
                {
                  class: j([
                    "status-pill",
                    l(c)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  K[4] || (K[4] = g(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  gt(
                    " " + F(l(h)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            g(
              "div",
              g_,
              F(l(c)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            ),
            g("div", y_, [
              g(
                "span",
                null,
                F(l(t)("localAi.modelLabel")) + ": " + F(l(t)("localAi.localModel")),
                1
                /* TEXT */
              ),
              g(
                "span",
                null,
                F(l(t)("localAi.contextLabel")) + ": " + F(l(t)("localAi.defaultContext")),
                1
                /* TEXT */
              ),
              g(
                "span",
                null,
                F(l(t)("localAi.temperature")) + ": 0.7",
                1
                /* TEXT */
              ),
              g(
                "span",
                null,
                F(l(t)("localAi.maxTokens")) + ": 2048",
                1
                /* TEXT */
              )
            ])
          ]),
          g("div", b_, [
            g("button", {
              class: "topbar-btn",
              type: "button",
              onClick: x
            }, [
              $(l(Ir), {
                theme: "outline",
                size: "16"
              }),
              g(
                "span",
                null,
                F(l(t)("localAi.settings")),
                1
                /* TEXT */
              )
            ]),
            g("button", {
              class: "topbar-btn topbar-btn--icon",
              type: "button",
              title: l(t)("common.more"),
              onClick: X
            }, [
              $(l(wc), {
                theme: "outline",
                size: "18"
              })
            ], 8, __)
          ])
        ]),
        g(
          "div",
          {
            ref_key: "messageListRef",
            ref: f,
            class: "message-list"
          },
          [
            g("div", w_, [
              g(
                "span",
                null,
                F(l(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            l(C).length ? q("v-if", !0) : (I(), W("div", C_, [
              $(l(br), {
                theme: "outline",
                size: "30"
              }),
              g(
                "div",
                E_,
                F(l(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              g(
                "div",
                S_,
                F(l(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (I(!0), W(
              qe,
              null,
              Cn(l(C), (J, ve) => (I(), W(
                "article",
                {
                  key: J.id,
                  class: j(["message-row", `message-row--${J.role}`])
                },
                [
                  g("div", T_, [
                    J.role === "assistant" ? (I(), oe(l(br), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (I(), W(
                      "span",
                      k_,
                      F(l(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  g("div", O_, [
                    J.role === "user" ? (I(), W("div", L_, [
                      g(
                        "div",
                        null,
                        F(J.content),
                        1
                        /* TEXT */
                      ),
                      g(
                        "time",
                        null,
                        F(Y(J)),
                        1
                        /* TEXT */
                      )
                    ])) : (I(), W(
                      qe,
                      { key: 1 },
                      [
                        g("div", A_, [
                          g(
                            "span",
                            null,
                            F(l(t)("localAi.localModel")),
                            1
                            /* TEXT */
                          ),
                          g(
                            "small",
                            null,
                            F(l(t)("localAi.thoughtFor", {
                              seconds: $e(J, ve).seconds
                            })),
                            1
                            /* TEXT */
                          )
                        ]),
                        g("div", I_, [
                          g(
                            "div",
                            P_,
                            F(J.content),
                            1
                            /* TEXT */
                          ),
                          g(
                            "time",
                            null,
                            F(Y(J)),
                            1
                            /* TEXT */
                          )
                        ]),
                        g("div", N_, [
                          g("button", {
                            type: "button",
                            title: l(t)("common.copy"),
                            onClick: (me) => ze(J)
                          }, [
                            $(l(hc), {
                              theme: "outline",
                              size: "15"
                            })
                          ], 8, $_),
                          g("button", {
                            type: "button",
                            title: l(t)("localAi.regenerate"),
                            onClick: (me) => ot(J.id)
                          }, [
                            $(l(Ga), {
                              theme: "outline",
                              size: "15"
                            })
                          ], 8, R_),
                          g("button", {
                            type: "button",
                            title: l(t)("localAi.like"),
                            onClick: he
                          }, [
                            $(l(_c), {
                              theme: "outline",
                              size: "15"
                            })
                          ], 8, M_),
                          g("button", {
                            type: "button",
                            title: l(t)("localAi.dislike"),
                            onClick: he
                          }, [
                            $(l(gc), {
                              theme: "outline",
                              size: "15"
                            })
                          ], 8, D_),
                          g("button", {
                            type: "button",
                            title: l(t)("common.edit"),
                            onClick: (me) => Ke(J)
                          }, [
                            $(l(bc), {
                              theme: "outline",
                              size: "15"
                            })
                          ], 8, F_),
                          g("button", {
                            type: "button",
                            title: l(t)("common.delete"),
                            onClick: (me) => He(J.id)
                          }, [
                            $(l(Ha), {
                              theme: "outline",
                              size: "15"
                            })
                          ], 8, x_)
                        ]),
                        g("div", V_, [
                          g(
                            "span",
                            null,
                            F(l(t)("localAi.totalTokens", {
                              count: $e(J, ve).total
                            })),
                            1
                            /* TEXT */
                          ),
                          g(
                            "span",
                            null,
                            F(l(t)("localAi.inputTokens", {
                              count: $e(J, ve).input
                            })),
                            1
                            /* TEXT */
                          ),
                          g(
                            "span",
                            null,
                            F(l(t)("localAi.outputTokens", {
                              count: $e(J, ve).output
                            })),
                            1
                            /* TEXT */
                          ),
                          g(
                            "span",
                            null,
                            F(l(t)("localAi.elapsedSeconds", {
                              seconds: $e(J, ve).seconds
                            })),
                            1
                            /* TEXT */
                          )
                        ])
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
            )),
            l(s) ? (I(), W("article", j_, [
              g("div", B_, [
                $(l(br), {
                  theme: "outline",
                  size: "18"
                })
              ]),
              g("div", z_, [
                g("div", W_, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.localModel")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "small",
                    null,
                    F(l(t)("localAi.thinking")),
                    1
                    /* TEXT */
                  )
                ]),
                g(
                  "div",
                  U_,
                  F(l(t)("localAi.thinking")),
                  1
                  /* TEXT */
                )
              ])
            ])) : q("v-if", !0)
          ],
          512
          /* NEED_PATCH */
        ),
        g(
          "form",
          {
            class: "chat-input-card",
            onSubmit: Ie(P, ["prevent"])
          },
          [
            Ue(g("textarea", {
              "onUpdate:modelValue": K[1] || (K[1] = (J) => Dn(a) ? a.value = J : null),
              class: "chat-input",
              rows: "3",
              placeholder: l(t)("localAi.chatPlaceholder"),
              onKeydown: yt(Ie(P, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, H_), [
              [so, l(a)]
            ]),
            g("div", K_, [
              g("div", G_, [
                g("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: l(t)("localAi.attachment")
                }, [
                  $(l(Cc), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, Y_),
                g("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: l(t)("localAi.settings"),
                  onClick: x
                }, [
                  $(l(Ir), {
                    theme: "outline",
                    size: "17"
                  })
                ], 8, q_),
                g("label", Z_, [
                  Ue(g(
                    "select",
                    {
                      "onUpdate:modelValue": K[2] || (K[2] = (J) => Dn(u) ? u.value = J : null)
                    },
                    [
                      g(
                        "option",
                        X_,
                        F(l(t)("localAi.localModel")),
                        1
                        /* TEXT */
                      )
                    ],
                    512
                    /* NEED_PATCH */
                  ), [
                    [cc, l(u)]
                  ]),
                  $(l(yc), {
                    theme: "outline",
                    size: "14"
                  })
                ]),
                K[5] || (K[5] = g(
                  "span",
                  { class: "vision-pill" },
                  "Vision",
                  -1
                  /* HOISTED */
                )),
                g("button", {
                  class: "clear-link",
                  type: "button",
                  disabled: l(s) || !l(C).length,
                  onClick: R
                }, F(l(t)("common.clear")), 9, J_)
              ]),
              g("div", Q_, [
                K[6] || (K[6] = g(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                g("button", {
                  class: "send-btn",
                  type: "submit",
                  disabled: !l(y)
                }, [
                  $(l(Tc), {
                    theme: "outline",
                    size: "17"
                  }),
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.send")),
                    1
                    /* TEXT */
                  )
                ], 8, e2)
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), xa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, n2 = /* @__PURE__ */ xa(t2, [["__scopeId", "data-v-4df15cd6"]]), o2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n2
}, Symbol.toStringTag, { value: "Module" }));
async function Rl(e = {}) {
  return typeof e == "object" && Object.freeze(e), await ft("plugin:dialog|open", { options: e });
}
const r2 = ["disabled"], a2 = {
  key: 0,
  class: "custom-button__loading"
}, s2 = /* @__PURE__ */ Q({
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
    return (n, o) => (I(), W("button", {
      class: j([
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
      e.loading ? (I(), W("div", a2, o[1] || (o[1] = [
        g(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            g("circle", {
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
      ]))) : q("v-if", !0),
      ie(n.$slots, "default", {}, void 0, !0)
    ], 10, r2));
  }
}), ln = /* @__PURE__ */ xa(s2, [["__scopeId", "data-v-9497085f"]]);
var Ml;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ml || (Ml = {}));
const l2 = { class: "settings-panel local-ai-settings-shell" }, i2 = { class: "local-ai-hero panel-card" }, u2 = { class: "panel-title" }, c2 = { class: "hero-desc" }, d2 = { class: "header-actions" }, f2 = {
  key: 0,
  class: "settings-grid"
}, p2 = { class: "summary-panel panel-card" }, m2 = { class: "status-strip" }, v2 = { class: "summary-card" }, h2 = { class: "summary-card__title" }, g2 = { class: "summary-card__desc" }, y2 = { class: "service-controls" }, b2 = { class: "service-url" }, _2 = { class: "summary-card" }, w2 = { class: "summary-card__title" }, C2 = { class: "summary-card__desc" }, E2 = { class: "summary-meta" }, S2 = { class: "form-panel panel-card" }, T2 = { class: "settings-section" }, k2 = { class: "settings-section__header" }, O2 = { class: "field-stack" }, L2 = { class: "field-row" }, A2 = { class: "path-control" }, I2 = { class: "field-row" }, P2 = { class: "field-row" }, N2 = { class: "field-row" }, $2 = { class: "path-control" }, R2 = ["placeholder"], M2 = { class: "settings-section grid-two" }, D2 = { class: "settings-section__header" }, F2 = { class: "param-grid" }, x2 = { class: "number-field" }, V2 = { class: "number-field" }, j2 = { class: "number-field" }, B2 = { class: "number-field" }, z2 = { class: "number-field" }, W2 = { class: "number-field" }, U2 = { class: "settings-section grid-two" }, H2 = { class: "settings-section__header" }, K2 = { class: "switch-grid" }, G2 = { class: "settings-section grid-two" }, Y2 = { class: "settings-section__header" }, q2 = { class: "switch-grid switch-grid--two" }, Z2 = { class: "number-field" }, X2 = { class: "number-field" }, J2 = { class: "settings-section grid-two" }, Q2 = { class: "settings-section__header" }, ew = { class: "param-grid param-grid--three" }, tw = { class: "number-field" }, nw = { class: "number-field" }, ow = { class: "number-field" }, rw = { class: "settings-footer" }, aw = ["title"], sw = /* @__PURE__ */ Q({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = go(), n = V(null), o = V(null), r = V(null), a = V(null), s = V(!1), i = V(!1), u = V(!1), c = V(!1), f = V(!1);
    let p = null;
    const v = A(() => !!a.value?.selectedModelPath), y = A({ get: () => n.value?.modelPath ?? "", set: (P) => {
      n.value && (n.value.modelPath = P || void 0);
    } }), h = A({ get: () => n.value?.mmprojPath ?? "", set: (P) => {
      n.value && (n.value.mmprojPath = P || void 0);
    } }), m = A(() => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), C = A(() => v.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = A(() => r.value?.healthy ? t("localAi.serviceHealthy") : r.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), S = (P) => P.split(/[\\/]+/).pop() ?? P, L = async () => {
      s.value = !0;
      try {
        n.value = await ff(), await Promise.all([E(), O(), b()]);
      } catch (P) {
        Fn.error("[LocalAI] refresh settings failed", P), at.msg(`${t("localAi.refreshFailed")}: ${P}`, "error");
      } finally {
        s.value = !1;
      }
    }, E = async () => {
      o.value = await mf();
    }, b = async () => {
      r.value = await ci();
    }, O = async () => {
      n.value && (a.value = await pf(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, k = async () => {
      if (n.value)
        try {
          await Er(n.value);
        } catch (P) {
          Fn.warn("[LocalAI] autosave failed", P);
        }
    }, B = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Er(n.value), await Promise.all([E(), O(), b()]), at.msg(t("localAi.configSaved"));
        } catch (P) {
          at.msg(`${t("localAi.configSaveFailed")}: ${P}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, z = async () => {
      const P = await Rl({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !P || Array.isArray(P) || !n.value || (n.value.modelDir = P, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await O());
    }, ee = async () => {
      const P = await Rl({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !P || Array.isArray(P) || !n.value || (n.value.runtimePath = P, await k(), await E());
    }, ae = async () => {
      if (n.value) {
        u.value = !0;
        try {
          await Er(n.value), r.value = await vf(n.value), at.msg(t("localAi.serviceStarted"));
        } catch (P) {
          at.msg(`${t("localAi.serviceStartFailed")}: ${P}`, "error");
        } finally {
          u.value = !1;
        }
      }
    }, Z = async () => {
      c.value = !0;
      try {
        await B(), r.value = await hf(), at.msg(t("localAi.serviceRestarted"));
      } catch (P) {
        at.msg(`${t("localAi.serviceRestartFailed")}: ${P}`, "error");
      } finally {
        c.value = !1;
      }
    }, ce = async () => {
      f.value = !0;
      try {
        await gf(), await b(), at.msg(t("localAi.serviceStoppedMsg"));
      } catch (P) {
        at.msg(`${t("localAi.serviceStopFailed")}: ${P}`, "error");
      } finally {
        f.value = !1;
      }
    }, ke = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return xe(async () => {
      await L(), p = setInterval(() => {
        b().catch((P) => Fn.warn("[LocalAI] status refresh failed", P));
      }, 5e3);
    }), Qo(() => {
      p && clearInterval(p);
    }), (P, R) => {
      const x = c1, re = u1, X = Gb, fe = g1;
      return I(), W("div", l2, [
        g("header", i2, [
          g("div", null, [
            g(
              "h3",
              u2,
              F(l(t)("localAi.title")),
              1
              /* TEXT */
            ),
            g(
              "p",
              c2,
              F(l(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          g("div", d2, [
            $(l(ln), {
              size: "small",
              plain: "",
              onClick: ke
            }, {
              default: ne(() => [
                gt(
                  F(l(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            $(l(ln), {
              size: "small",
              loading: l(s),
              onClick: L
            }, {
              default: ne(() => [
                gt(
                  F(l(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        l(n) ? (I(), W("main", f2, [
          g("aside", p2, [
            g("div", m2, [
              g(
                "div",
                {
                  class: j(["status-item", { ready: l(o)?.available }])
                },
                [
                  R[20] || (R[20] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    F(l(m)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              g(
                "div",
                {
                  class: j(["status-item", { ready: l(v) }])
                },
                [
                  R[21] || (R[21] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    F(l(C)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              g(
                "div",
                {
                  class: j(["status-item", { ready: l(r)?.healthy }])
                },
                [
                  R[22] || (R[22] = g(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  g(
                    "span",
                    null,
                    F(l(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            g("section", v2, [
              g(
                "div",
                h2,
                F(l(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              g(
                "div",
                g2,
                F(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              g("div", y2, [
                $(l(ln), {
                  type: "primary",
                  size: "small",
                  loading: l(u),
                  disabled: l(r)?.running,
                  onClick: ae
                }, {
                  default: ne(() => [
                    gt(
                      F(l(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                $(l(ln), {
                  size: "small",
                  loading: l(c),
                  disabled: !l(r)?.running,
                  onClick: Z
                }, {
                  default: ne(() => [
                    gt(
                      F(l(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                $(l(ln), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: l(f),
                  disabled: !l(r)?.running,
                  onClick: ce
                }, {
                  default: ne(() => [
                    gt(
                      F(l(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              g(
                "div",
                b2,
                F(l(r)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            g("section", _2, [
              g(
                "div",
                w2,
                F(l(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              g(
                "div",
                C2,
                F(l(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              g("div", E2, [
                g("div", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    F(l(o)?.available ? l(t)("common.yes") : l(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    F(l(v) ? l(t)("common.yes") : l(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                g("div", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "b",
                    null,
                    F(l(r)?.healthy ? l(t)("common.yes") : l(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          g("section", S2, [
            g("div", T2, [
              g("div", k2, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    F(l(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    F(l(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", O2, [
                g("label", L2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  g("div", A2, [
                    Ue(g(
                      "input",
                      {
                        "onUpdate:modelValue": R[0] || (R[0] = (Y) => l(n).modelDir = Y),
                        class: "text-input",
                        onChange: O
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [so, l(n).modelDir]
                    ]),
                    $(l(ln), {
                      size: "small",
                      plain: "",
                      onClick: z
                    }, {
                      default: ne(() => [
                        gt(
                          F(l(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                g("label", I2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  $(re, {
                    modelValue: l(y),
                    "onUpdate:modelValue": R[1] || (R[1] = (Y) => Dn(y) ? y.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: k
                  }, {
                    default: ne(() => [
                      (I(!0), W(
                        qe,
                        null,
                        Cn(l(a)?.mainModels ?? [], (Y) => (I(), oe(x, {
                          key: Y,
                          label: S(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                g("label", P2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  $(re, {
                    modelValue: l(h),
                    "onUpdate:modelValue": R[2] || (R[2] = (Y) => Dn(h) ? h.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: k
                  }, {
                    default: ne(() => [
                      (I(!0), W(
                        qe,
                        null,
                        Cn(l(a)?.mmprojModels ?? [], (Y) => (I(), oe(x, {
                          key: Y,
                          label: S(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                g("label", N2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  g("div", $2, [
                    Ue(g("input", {
                      "onUpdate:modelValue": R[3] || (R[3] = (Y) => l(n).runtimePath = Y),
                      class: "text-input",
                      placeholder: l(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, R2), [
                      [so, l(n).runtimePath]
                    ]),
                    $(l(ln), {
                      size: "small",
                      plain: "",
                      onClick: ee
                    }, {
                      default: ne(() => [
                        gt(
                          F(l(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ])
            ]),
            g("div", M2, [
              g("div", D2, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    F(l(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    F(l(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", F2, [
                g("label", x2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).ctxSize,
                    "onUpdate:modelValue": R[4] || (R[4] = (Y) => l(n).ctxSize = Y),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", V2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).gpuLayers,
                    "onUpdate:modelValue": R[5] || (R[5] = (Y) => l(n).gpuLayers = Y),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", j2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).threads,
                    "onUpdate:modelValue": R[6] || (R[6] = (Y) => l(n).threads = Y),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", B2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).batchSize,
                    "onUpdate:modelValue": R[7] || (R[7] = (Y) => l(n).batchSize = Y),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", z2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).ubatchSize,
                    "onUpdate:modelValue": R[8] || (R[8] = (Y) => l(n).ubatchSize = Y),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", W2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).mainGpu,
                    "onUpdate:modelValue": R[9] || (R[9] = (Y) => l(n).mainGpu = Y),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            g("div", U2, [
              g("div", H2, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    F(l(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    F(l(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", K2, [
                g("label", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  $(fe, {
                    modelValue: l(n).flashAttn,
                    "onUpdate:modelValue": R[10] || (R[10] = (Y) => l(n).flashAttn = Y)
                  }, null, 8, ["modelValue"])
                ]),
                g("label", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  $(fe, {
                    modelValue: l(n).kvOffload,
                    "onUpdate:modelValue": R[11] || (R[11] = (Y) => l(n).kvOffload = Y)
                  }, null, 8, ["modelValue"])
                ]),
                g("label", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  $(fe, {
                    modelValue: l(n).mmap,
                    "onUpdate:modelValue": R[12] || (R[12] = (Y) => l(n).mmap = Y)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            g("div", G2, [
              g("div", Y2, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    F(l(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    F(l(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", q2, [
                g("label", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  $(fe, {
                    modelValue: l(n).autoStartOnRequest,
                    "onUpdate:modelValue": R[13] || (R[13] = (Y) => l(n).autoStartOnRequest = Y)
                  }, null, 8, ["modelValue"])
                ]),
                g("label", null, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  $(fe, {
                    modelValue: l(n).keepAlive,
                    "onUpdate:modelValue": R[14] || (R[14] = (Y) => l(n).keepAlive = Y)
                  }, null, 8, ["modelValue"])
                ]),
                g("label", Z2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": R[15] || (R[15] = (Y) => l(n).idleTimeoutMinutes = Y),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", X2, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).requestTimeoutSecs,
                    "onUpdate:modelValue": R[16] || (R[16] = (Y) => l(n).requestTimeoutSecs = Y),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            g("div", J2, [
              g("div", Q2, [
                g("div", null, [
                  g(
                    "h4",
                    null,
                    F(l(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  g(
                    "p",
                    null,
                    F(l(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              g("div", ew, [
                g("label", tw, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).temperature,
                    "onUpdate:modelValue": R[17] || (R[17] = (Y) => l(n).temperature = Y),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", nw, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).maxTokens,
                    "onUpdate:modelValue": R[18] || (R[18] = (Y) => l(n).maxTokens = Y),
                    min: 64,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                g("label", ow, [
                  g(
                    "span",
                    null,
                    F(l(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  $(X, {
                    modelValue: l(n).port,
                    "onUpdate:modelValue": R[19] || (R[19] = (Y) => l(n).port = Y),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            g("div", rw, [
              $(l(ln), {
                type: "primary",
                loading: l(i),
                onClick: B
              }, {
                default: ne(() => [
                  gt(
                    F(l(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              l(r)?.commandLine ? (I(), W("span", {
                key: 0,
                class: "command-line",
                title: l(r).commandLine
              }, F(l(r).commandLine), 9, aw)) : q("v-if", !0)
            ])
          ])
        ])) : q("v-if", !0)
      ]);
    };
  }
}), lw = /* @__PURE__ */ xa(sw, [["__scopeId", "data-v-4e0ae2c1"]]), iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lw
}, Symbol.toStringTag, { value: "Module" }));
export {
  cw as activate,
  cw as default
};
