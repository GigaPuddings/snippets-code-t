import * as hr from "vue";
import { inject as ye, createVNode as Z, defineAsyncComponent as Wu, ref as x, shallowRef as fn, computed as L, watch as ie, onMounted as Ne, onUnmounted as Jo, defineComponent as X, h as kl, Text as Rl, Fragment as Je, createElementBlock as W, openBlock as k, normalizeClass as B, createCommentVNode as Y, renderSlot as le, createElementVNode as b, getCurrentInstance as Qe, unref as i, watchEffect as $l, readonly as Yr, getCurrentScope as ju, onScopeDispose as Hu, nextTick as Ie, isRef as ro, warn as Ku, provide as xt, mergeProps as Mn, toRef as Gt, useAttrs as Gu, useSlots as Yu, normalizeStyle as Ue, createBlock as te, withCtx as q, resolveDynamicComponent as Ze, withModifiers as Ae, toDisplayString as D, onBeforeUnmount as zt, Transition as Gn, withDirectives as xe, vShow as tn, reactive as En, onActivated as qu, onUpdated as Ml, cloneVNode as Xu, Comment as Zu, Teleport as Ju, onBeforeMount as Qu, onDeactivated as ec, createTextVNode as qe, withKeys as wt, createSlots as tc, toRaw as nc, toRefs as qr, resolveComponent as bn, resolveDirective as oc, toHandlerKey as rc, renderList as Fn, vModelText as ao, shallowReactive as ac, isVNode as so, render as Bo } from "vue";
var sc = {
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
function lc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function ic(e, t, n) {
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
var uc = Symbol("icon-context");
function cc(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = lc(), l = ye(uc, sc);
      return function() {
        var u = a.size, c = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, h = a.fill, v = a.spin, g = ic(s, {
          size: u,
          strokeWidth: c,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: m,
          fill: h
        }, l), E = [l.prefix + "-icon"];
        return E.push(l.prefix + "-icon-" + e), v && E.push(l.prefix + "-icon-spin"), Z("span", {
          class: E.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const dc = cc("setting-two", !1, function(e) {
  return Z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Z("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nw = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => A1)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: dc,
    component: Wu(() => Promise.resolve().then(() => Lw))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const za = typeof window < "u", Tn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), pc = (e, t, n) => mc({ l: e, k: t, s: n }), mc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), De = (e) => typeof e == "number" && isFinite(e), vc = (e) => Xr(e) === "[object Date]", Uo = (e) => Xr(e) === "[object RegExp]", Qo = (e) => pe(e) && Object.keys(e).length === 0, ze = Object.assign, gc = Object.create, _e = (e = null) => gc(e);
let Wa;
const Mo = () => Wa || (Wa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : _e());
function ja(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ha(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, a) => `${r}="${Ha(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, a) => `${r}='${Ha(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const yc = Object.prototype.hasOwnProperty;
function Et(e, t) {
  return yc.call(e, t);
}
const Pe = Array.isArray, Te = (e) => typeof e == "function", Q = (e) => typeof e == "string", Le = (e) => typeof e == "boolean", me = (e) => e !== null && typeof e == "object", bc = (e) => me(e) && Te(e.then) && Te(e.catch), Fl = Object.prototype.toString, Xr = (e) => Fl.call(e), pe = (e) => Xr(e) === "[object Object]", _c = (e) => e == null ? "" : Pe(e) || pe(e) && e.toString === Fl ? JSON.stringify(e, null, 2) : String(e);
function Zr(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Oo = (e) => !me(e) || Pe(e);
function Fo(e, t) {
  if (Oo(e) || Oo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((a) => {
      a !== "__proto__" && (me(o[a]) && !me(r[a]) && (r[a] = Array.isArray(o[a]) ? [] : _e()), Oo(r[a]) || Oo(o[a]) ? r[a] = o[a] : n.push({ src: o[a], des: r[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function wc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ir(e, t, n) {
  return { start: e, end: t };
}
const ge = {
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
}, Ec = 17;
function er(e, t, n = {}) {
  const { domain: o, messages: r, args: a } = n, s = e, l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = o, l;
}
function Cc(e) {
  throw e;
}
const Lt = " ", Sc = "\r", Ye = `
`, Tc = "\u2028", Oc = "\u2029";
function Ac(e) {
  const t = e;
  let n = 0, o = 1, r = 1, a = 0;
  const s = (O) => t[O] === Sc && t[O + 1] === Ye, l = (O) => t[O] === Ye, u = (O) => t[O] === Oc, c = (O) => t[O] === Tc, f = (O) => s(O) || l(O) || u(O) || c(O), p = () => n, m = () => o, h = () => r, v = () => a, g = (O) => s(O) || u(O) || c(O) ? Ye : t[O], E = () => g(n), d = () => g(n + a);
  function C() {
    return a = 0, f(n) && (o++, r = 0), s(n) && n++, n++, r++, t[n];
  }
  function I() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function T() {
    n = 0, o = 1, r = 1, a = 0;
  }
  function y(O = 0) {
    a = O;
  }
  function A() {
    const O = n + a;
    for (; O !== n; )
      C();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: h,
    peekOffset: v,
    charAt: g,
    currentChar: E,
    currentPeek: d,
    next: C,
    peek: I,
    reset: T,
    resetPeek: y,
    skipToPeek: A
  };
}
const jt = void 0, Ic = ".", Ka = "'", Lc = "tokenizer";
function Pc(e, t = {}) {
  const n = t.location !== !1, o = Ac(e), r = () => o.index(), a = () => wc(o.line(), o.column(), o.index()), s = a(), l = r(), u = {
    currentType: 13,
    offset: l,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => u, { onError: f } = t;
  function p(w, S, M, ...H) {
    const fe = c();
    if (S.column += M, S.offset += M, f) {
      const ae = n ? Ir(fe.startLoc, S) : null, _ = er(w, ae, {
        domain: Lc,
        args: H
      });
      f(_);
    }
  }
  function m(w, S, M) {
    w.endLoc = a(), w.currentType = S;
    const H = { type: S };
    return n && (H.loc = Ir(w.startLoc, w.endLoc)), M != null && (H.value = M), H;
  }
  const h = (w) => m(
    w,
    13
    /* TokenTypes.EOF */
  );
  function v(w, S) {
    return w.currentChar() === S ? (w.next(), S) : (p(ge.EXPECTED_TOKEN, a(), 0, S), "");
  }
  function g(w) {
    let S = "";
    for (; w.currentPeek() === Lt || w.currentPeek() === Ye; )
      S += w.currentPeek(), w.peek();
    return S;
  }
  function E(w) {
    const S = g(w);
    return w.skipToPeek(), S;
  }
  function d(w) {
    if (w === jt)
      return !1;
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S === 95;
  }
  function C(w) {
    if (w === jt)
      return !1;
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function I(w, S) {
    const { currentType: M } = S;
    if (M !== 2)
      return !1;
    g(w);
    const H = d(w.currentPeek());
    return w.resetPeek(), H;
  }
  function T(w, S) {
    const { currentType: M } = S;
    if (M !== 2)
      return !1;
    g(w);
    const H = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), fe = C(H);
    return w.resetPeek(), fe;
  }
  function y(w, S) {
    const { currentType: M } = S;
    if (M !== 2)
      return !1;
    g(w);
    const H = w.currentPeek() === Ka;
    return w.resetPeek(), H;
  }
  function A(w, S) {
    const { currentType: M } = S;
    if (M !== 7)
      return !1;
    g(w);
    const H = w.currentPeek() === ".";
    return w.resetPeek(), H;
  }
  function O(w, S) {
    const { currentType: M } = S;
    if (M !== 8)
      return !1;
    g(w);
    const H = d(w.currentPeek());
    return w.resetPeek(), H;
  }
  function z(w, S) {
    const { currentType: M } = S;
    if (!(M === 7 || M === 11))
      return !1;
    g(w);
    const H = w.currentPeek() === ":";
    return w.resetPeek(), H;
  }
  function U(w, S) {
    const { currentType: M } = S;
    if (M !== 9)
      return !1;
    const H = () => {
      const ae = w.currentPeek();
      return ae === "{" ? d(w.peek()) : ae === "@" || ae === "|" || ae === ":" || ae === "." || ae === Lt || !ae ? !1 : ae === Ye ? (w.peek(), H()) : re(w, !1);
    }, fe = H();
    return w.resetPeek(), fe;
  }
  function ee(w) {
    g(w);
    const S = w.currentPeek() === "|";
    return w.resetPeek(), S;
  }
  function re(w, S = !0) {
    const M = (fe = !1, ae = "") => {
      const _ = w.currentPeek();
      return _ === "{" || _ === "@" || !_ ? fe : _ === "|" ? !(ae === Lt || ae === Ye) : _ === Lt ? (w.peek(), M(!0, Lt)) : _ === Ye ? (w.peek(), M(!0, Ye)) : !0;
    }, H = M();
    return S && w.resetPeek(), H;
  }
  function V(w, S) {
    const M = w.currentChar();
    return M === jt ? jt : S(M) ? (w.next(), M) : null;
  }
  function K(w) {
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36;
  }
  function oe(w) {
    return V(w, K);
  }
  function P(w) {
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36 || // $
    S === 45;
  }
  function R(w) {
    return V(w, P);
  }
  function F(w) {
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function ne(w) {
    return V(w, F);
  }
  function J(w) {
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57 || // 0-9
    S >= 65 && S <= 70 || // A-F
    S >= 97 && S <= 102;
  }
  function de(w) {
    return V(w, J);
  }
  function G(w) {
    let S = "", M = "";
    for (; S = ne(w); )
      M += S;
    return M;
  }
  function Me(w) {
    let S = "";
    for (; ; ) {
      const M = w.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
        break;
      if (M === Lt || M === Ye)
        if (re(w))
          S += M, w.next();
        else {
          if (ee(w))
            break;
          S += M, w.next();
        }
      else
        S += M, w.next();
    }
    return S;
  }
  function we(w) {
    E(w);
    let S = "", M = "";
    for (; S = R(w); )
      M += S;
    const H = w.currentChar();
    if (H && H !== "}" && H !== jt && H !== Lt && H !== Ye && H !== "　") {
      const fe = pt(w);
      return p(ge.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, M + fe), M + fe;
    }
    return w.currentChar() === jt && p(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), M;
  }
  function We(w) {
    E(w);
    let S = "";
    return w.currentChar() === "-" ? (w.next(), S += `-${G(w)}`) : S += G(w), w.currentChar() === jt && p(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), S;
  }
  function Be(w) {
    return w !== Ka && w !== Ye;
  }
  function je(w) {
    E(w), v(w, "'");
    let S = "", M = "";
    for (; S = V(w, Be); )
      S === "\\" ? M += He(w) : M += S;
    const H = w.currentChar();
    return H === Ye || H === jt ? (p(ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), H === Ye && (w.next(), v(w, "'")), M) : (v(w, "'"), M);
  }
  function He(w) {
    const S = w.currentChar();
    switch (S) {
      case "\\":
      case "'":
        return w.next(), `\\${S}`;
      case "u":
        return be(w, S, 4);
      case "U":
        return be(w, S, 6);
      default:
        return p(ge.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, S), "";
    }
  }
  function be(w, S, M) {
    v(w, S);
    let H = "";
    for (let fe = 0; fe < M; fe++) {
      const ae = de(w);
      if (!ae) {
        p(ge.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${S}${H}${w.currentChar()}`);
        break;
      }
      H += ae;
    }
    return `\\${S}${H}`;
  }
  function rt(w) {
    return w !== "{" && w !== "}" && w !== Lt && w !== Ye;
  }
  function pt(w) {
    E(w);
    let S = "", M = "";
    for (; S = V(w, rt); )
      M += S;
    return M;
  }
  function at(w) {
    let S = "", M = "";
    for (; S = oe(w); )
      M += S;
    return M;
  }
  function bt(w) {
    const S = (M) => {
      const H = w.currentChar();
      return H === "{" || H === "@" || H === "|" || H === "(" || H === ")" || !H || H === Lt ? M : (M += H, w.next(), S(M));
    };
    return S("");
  }
  function st(w) {
    E(w);
    const S = v(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return E(w), S;
  }
  function lt(w, S) {
    let M = null;
    switch (w.currentChar()) {
      case "{":
        return S.braceNest >= 1 && p(ge.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), M = m(
          S,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(w), S.braceNest++, M;
      case "}":
        return S.braceNest > 0 && S.currentType === 2 && p(ge.EMPTY_PLACEHOLDER, a(), 0), w.next(), M = m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), S.braceNest--, S.braceNest > 0 && E(w), S.inLinked && S.braceNest === 0 && (S.inLinked = !1), M;
      case "@":
        return S.braceNest > 0 && p(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), M = it(w, S) || h(S), S.braceNest = 0, M;
      default: {
        let fe = !0, ae = !0, _ = !0;
        if (ee(w))
          return S.braceNest > 0 && p(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), M = m(S, 1, st(w)), S.braceNest = 0, S.inLinked = !1, M;
        if (S.braceNest > 0 && (S.currentType === 4 || S.currentType === 5 || S.currentType === 6))
          return p(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), S.braceNest = 0, mt(w, S);
        if (fe = I(w, S))
          return M = m(S, 4, we(w)), E(w), M;
        if (ae = T(w, S))
          return M = m(S, 5, We(w)), E(w), M;
        if (_ = y(w, S))
          return M = m(S, 6, je(w)), E(w), M;
        if (!fe && !ae && !_)
          return M = m(S, 12, pt(w)), p(ge.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, M.value), E(w), M;
        break;
      }
    }
    return M;
  }
  function it(w, S) {
    const { currentType: M } = S;
    let H = null;
    const fe = w.currentChar();
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (fe === Ye || fe === Lt) && p(ge.INVALID_LINKED_FORMAT, a(), 0), fe) {
      case "@":
        return w.next(), H = m(
          S,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), S.inLinked = !0, H;
      case ".":
        return E(w), w.next(), m(
          S,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(w), w.next(), m(
          S,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ee(w) ? (H = m(S, 1, st(w)), S.braceNest = 0, S.inLinked = !1, H) : A(w, S) || z(w, S) ? (E(w), it(w, S)) : O(w, S) ? (E(w), m(S, 11, at(w))) : U(w, S) ? (E(w), fe === "{" ? lt(w, S) || H : m(S, 10, bt(w))) : (M === 7 && p(ge.INVALID_LINKED_FORMAT, a(), 0), S.braceNest = 0, S.inLinked = !1, mt(w, S));
    }
  }
  function mt(w, S) {
    let M = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (S.braceNest > 0)
      return lt(w, S) || h(S);
    if (S.inLinked)
      return it(w, S) || h(S);
    switch (w.currentChar()) {
      case "{":
        return lt(w, S) || h(S);
      case "}":
        return p(ge.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return it(w, S) || h(S);
      default: {
        if (ee(w))
          return M = m(S, 1, st(w)), S.braceNest = 0, S.inLinked = !1, M;
        if (re(w))
          return m(S, 0, Me(w));
        break;
      }
    }
    return M;
  }
  function It() {
    const { currentType: w, offset: S, startLoc: M, endLoc: H } = u;
    return u.lastType = w, u.lastOffset = S, u.lastStartLoc = M, u.lastEndLoc = H, u.offset = r(), u.startLoc = a(), o.currentChar() === jt ? m(
      u,
      13
      /* TokenTypes.EOF */
    ) : mt(o, u);
  }
  return {
    nextToken: It,
    currentOffset: r,
    currentPosition: a,
    context: c
  };
}
const Nc = "parser", kc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Rc(e, t, n) {
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
function $c(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(d, C, I, T, ...y) {
    const A = d.currentPosition();
    if (A.offset += T, A.column += T, n) {
      const O = t ? Ir(I, A) : null, z = er(C, O, {
        domain: Nc,
        args: y
      });
      n(z);
    }
  }
  function r(d, C, I) {
    const T = { type: d };
    return t && (T.start = C, T.end = C, T.loc = { start: I, end: I }), T;
  }
  function a(d, C, I, T) {
    t && (d.end = C, d.loc && (d.loc.end = I));
  }
  function s(d, C) {
    const I = d.context(), T = r(3, I.offset, I.startLoc);
    return T.value = C, a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function l(d, C) {
    const I = d.context(), { lastOffset: T, lastStartLoc: y } = I, A = r(5, T, y);
    return A.index = parseInt(C, 10), d.nextToken(), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function u(d, C) {
    const I = d.context(), { lastOffset: T, lastStartLoc: y } = I, A = r(4, T, y);
    return A.key = C, d.nextToken(), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function c(d, C) {
    const I = d.context(), { lastOffset: T, lastStartLoc: y } = I, A = r(9, T, y);
    return A.value = C.replace(kc, Rc), d.nextToken(), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function f(d) {
    const C = d.nextToken(), I = d.context(), { lastOffset: T, lastStartLoc: y } = I, A = r(8, T, y);
    return C.type !== 11 ? (o(d, ge.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), A.value = "", a(A, T, y), {
      nextConsumeToken: C,
      node: A
    }) : (C.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Pt(C)), A.value = C.value || "", a(A, d.currentOffset(), d.currentPosition()), {
      node: A
    });
  }
  function p(d, C) {
    const I = d.context(), T = r(7, I.offset, I.startLoc);
    return T.value = C, a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function m(d) {
    const C = d.context(), I = r(6, C.offset, C.startLoc);
    let T = d.nextToken();
    if (T.type === 8) {
      const y = f(d);
      I.modifier = y.node, T = y.nextConsumeToken || d.nextToken();
    }
    switch (T.type !== 9 && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(T)), T = d.nextToken(), T.type === 2 && (T = d.nextToken()), T.type) {
      case 10:
        T.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(T)), I.key = p(d, T.value || "");
        break;
      case 4:
        T.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(T)), I.key = u(d, T.value || "");
        break;
      case 5:
        T.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(T)), I.key = l(d, T.value || "");
        break;
      case 6:
        T.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(T)), I.key = c(d, T.value || "");
        break;
      default: {
        o(d, ge.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const y = d.context(), A = r(7, y.offset, y.startLoc);
        return A.value = "", a(A, y.offset, y.startLoc), I.key = A, a(I, y.offset, y.startLoc), {
          nextConsumeToken: T,
          node: I
        };
      }
    }
    return a(I, d.currentOffset(), d.currentPosition()), {
      node: I
    };
  }
  function h(d) {
    const C = d.context(), I = C.currentType === 1 ? d.currentOffset() : C.offset, T = C.currentType === 1 ? C.endLoc : C.startLoc, y = r(2, I, T);
    y.items = [];
    let A = null;
    do {
      const U = A || d.nextToken();
      switch (A = null, U.type) {
        case 0:
          U.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(U)), y.items.push(s(d, U.value || ""));
          break;
        case 5:
          U.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(U)), y.items.push(l(d, U.value || ""));
          break;
        case 4:
          U.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(U)), y.items.push(u(d, U.value || ""));
          break;
        case 6:
          U.value == null && o(d, ge.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Pt(U)), y.items.push(c(d, U.value || ""));
          break;
        case 7: {
          const ee = m(d);
          y.items.push(ee.node), A = ee.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const O = C.currentType === 1 ? C.lastOffset : d.currentOffset(), z = C.currentType === 1 ? C.lastEndLoc : d.currentPosition();
    return a(y, O, z), y;
  }
  function v(d, C, I, T) {
    const y = d.context();
    let A = T.items.length === 0;
    const O = r(1, C, I);
    O.cases = [], O.cases.push(T);
    do {
      const z = h(d);
      A || (A = z.items.length === 0), O.cases.push(z);
    } while (y.currentType !== 13);
    return A && o(d, ge.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function g(d) {
    const C = d.context(), { offset: I, startLoc: T } = C, y = h(d);
    return C.currentType === 13 ? y : v(d, I, T, y);
  }
  function E(d) {
    const C = Pc(d, ze({}, e)), I = C.context(), T = r(0, I.offset, I.startLoc);
    return t && T.loc && (T.loc.source = d), T.body = g(C), e.onCacheKey && (T.cacheKey = e.onCacheKey(d)), I.currentType !== 13 && o(C, ge.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, d[I.offset] || ""), a(T, C.currentOffset(), C.currentPosition()), T;
  }
  return { parse: E };
}
function Pt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Mc(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Ga(e, t) {
  for (let n = 0; n < e.length; n++)
    Jr(e[n], t);
}
function Jr(e, t) {
  switch (e.type) {
    case 1:
      Ga(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ga(e.items, t);
      break;
    case 6: {
      Jr(e.key, t), t.helper(
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
function Fc(e, t = {}) {
  const n = Mc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Jr(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function Dc(e) {
  const t = e.body;
  return t.type === 2 ? Ya(t) : t.cases.forEach((n) => Ya(n)), e;
}
function Ya(e) {
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
      e.static = Zr(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
function kn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      kn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        kn(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        kn(n[o]);
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
      kn(t.key), t.k = t.key, delete t.key, t.modifier && (kn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Vc(e, t) {
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
  const l = () => s;
  function u(g, E) {
    s.code += g;
  }
  function c(g, E = !0) {
    const d = E ? o : "";
    u(r ? d + "  ".repeat(g) : d);
  }
  function f(g = !0) {
    const E = ++s.indentLevel;
    g && c(E);
  }
  function p(g = !0) {
    const E = --s.indentLevel;
    g && c(E);
  }
  function m() {
    c(s.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: f,
    deindent: p,
    newline: m,
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function xc(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Dn(e, t.key), t.modifier ? (e.push(", "), Dn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Bc(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let a = 0; a < r && (Dn(e, t.items[a]), a !== r - 1); a++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function Uc(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let a = 0; a < r && (Dn(e, t.cases[a]), a !== r - 1); a++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function zc(e, t) {
  t.body ? Dn(e, t.body) : e.push("null");
}
function Dn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      zc(e, t);
      break;
    case 1:
      Uc(e, t);
      break;
    case 2:
      Bc(e, t);
      break;
    case 6:
      xc(e, t);
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
const Wc = (e, t = {}) => {
  const n = Q(t.mode) ? t.mode : "normal", o = Q(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], l = Vc(e, {
    filename: o,
    breakLineCode: r,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${Zr(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Dn(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function jc(e, t = {}) {
  const n = ze({}, t), o = !!n.jit, r = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = $c(n).parse(e);
  return o ? (a && Dc(l), r && kn(l), { ast: l, code: "" }) : (Fc(l, n), Wc(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Hc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Mo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ft(e) {
  return me(e) && Qr(e) === 0 && (Et(e, "b") || Et(e, "body"));
}
const Dl = ["b", "body"];
function Kc(e) {
  return vn(e, Dl);
}
const Vl = ["c", "cases"];
function Gc(e) {
  return vn(e, Vl, []);
}
const xl = ["s", "static"];
function Yc(e) {
  return vn(e, xl);
}
const Bl = ["i", "items"];
function qc(e) {
  return vn(e, Bl, []);
}
const Ul = ["t", "type"];
function Qr(e) {
  return vn(e, Ul);
}
const zl = ["v", "value"];
function Ao(e, t) {
  const n = vn(e, zl);
  if (n != null)
    return n;
  throw lo(t);
}
const Wl = ["m", "modifier"];
function Xc(e) {
  return vn(e, Wl);
}
const jl = ["k", "key"];
function Zc(e) {
  const t = vn(e, jl);
  if (t)
    return t;
  throw lo(
    6
    /* NodeTypes.Linked */
  );
}
function vn(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (Et(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const Hl = [
  ...Dl,
  ...Vl,
  ...xl,
  ...Bl,
  ...jl,
  ...Wl,
  ...zl,
  ...Ul
];
function lo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function yr(e) {
  return (n) => Jc(n, e);
}
function Jc(e, t) {
  const n = Kc(t);
  if (n == null)
    throw lo(
      0
      /* NodeTypes.Resource */
    );
  if (Qr(n) === 1) {
    const a = Gc(n);
    return e.plural(a.reduce((s, l) => [
      ...s,
      qa(e, l)
    ], []));
  } else
    return qa(e, n);
}
function qa(e, t) {
  const n = Yc(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = qc(t).reduce((r, a) => [...r, Lr(e, a)], []);
    return e.normalize(o);
  }
}
function Lr(e, t) {
  const n = Qr(t);
  switch (n) {
    case 3:
      return Ao(t, n);
    case 9:
      return Ao(t, n);
    case 4: {
      const o = t;
      if (Et(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (Et(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw lo(n);
    }
    case 5: {
      const o = t;
      if (Et(o, "i") && De(o.i))
        return e.interpolate(e.list(o.i));
      if (Et(o, "index") && De(o.index))
        return e.interpolate(e.list(o.index));
      throw lo(n);
    }
    case 6: {
      const o = t, r = Xc(o), a = Zc(o);
      return e.linked(Lr(e, a), r ? Lr(e, r) : void 0, e.type);
    }
    case 7:
      return Ao(t, n);
    case 8:
      return Ao(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Qc = (e) => e;
let Io = _e();
function ed(e, t = {}) {
  let n = !1;
  const o = t.onError || Cc;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...jc(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function td(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Q(e)) {
    Le(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || Qc)(e), r = Io[o];
    if (r)
      return r;
    const { ast: a, detectError: s } = ed(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = yr(a);
    return s ? l : Io[o] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const o = Io[n];
      return o || (Io[n] = yr(e));
    } else
      return yr(e);
  }
}
const Yt = {
  INVALID_ARGUMENT: Ec,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, nd = 24;
function qt(e) {
  return er(e, null, void 0);
}
function ea(e, t) {
  return t.locale != null ? Xa(t.locale) : Xa(e.locale);
}
let br;
function Xa(e) {
  if (Q(e))
    return e;
  if (Te(e)) {
    if (e.resolvedOnce && br != null)
      return br;
    if (e.constructor.name === "Function") {
      const t = e();
      if (bc(t))
        throw qt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return br = t;
    } else
      throw qt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function od(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Pe(t) ? t : me(t) ? Object.keys(t) : Q(t) ? [t] : [n]
  ])];
}
function Kl(e, t, n) {
  const o = Q(n) ? n : zo, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let a = r.__localeChainCache.get(o);
  if (!a) {
    a = [];
    let s = [n];
    for (; Pe(s); )
      s = Za(a, s, t);
    const l = Pe(t) || !pe(t) ? t : t.default ? t.default : null;
    s = Q(l) ? [l] : l, Pe(s) && Za(a, s, !1), r.__localeChainCache.set(o, a);
  }
  return a;
}
function Za(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && Le(o); r++) {
    const a = t[r];
    Q(a) && (o = rd(e, t[r], n));
  }
  return o;
}
function rd(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const a = r.join("-");
    o = ad(e, a, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function ad(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (Pe(n) || pe(n)) && n[r] && (o = n[r]);
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
const sd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ld(e) {
  return sd.test(e);
}
function id(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ud(e) {
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
function cd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ld(t) ? id(t) : "*" + t;
}
function dd(e) {
  const t = [];
  let n = -1, o = 0, r = 0, a, s, l, u, c, f, p;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = l : s += l;
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
    ](), r++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, o = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, s === void 0 || (s = cd(s), s === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const v = e[n + 1];
    if (o === 5 && v === "'" || o === 6 && v === '"')
      return n++, l = "\\" + v, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, a = e[n], !(a === "\\" && h())) {
      if (u = ud(a), p = gn[o], c = p[u] || p.l || 8, c === 8 || (o = c[0], c[1] !== void 0 && (f = m[c[1]], f && (l = a, f() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const Ja = /* @__PURE__ */ new Map();
function fd(e, t) {
  return me(e) ? e[t] : null;
}
function pd(e, t) {
  if (!me(e))
    return null;
  let n = Ja.get(t);
  if (n || (n = dd(t), n && Ja.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, a = 0;
  for (; a < o; ) {
    const s = n[a];
    if (Hl.includes(s) && Ft(r))
      return null;
    const l = r[s];
    if (l === void 0 || Te(r))
      return null;
    r = l, a++;
  }
  return r;
}
const md = "11.2.2", tr = -1, zo = "en-US", Qa = "", es = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function vd() {
  return {
    upper: (e, t) => t === "text" && Q(e) ? e.toUpperCase() : t === "vnode" && me(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Q(e) ? e.toLowerCase() : t === "vnode" && me(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Q(e) ? es(e) : t === "vnode" && me(e) && "__v_isVNode" in e ? es(e.children) : e
  };
}
let Gl;
function gd(e) {
  Gl = e;
}
let Yl;
function hd(e) {
  Yl = e;
}
let ql;
function yd(e) {
  ql = e;
}
let Xl = null;
const ts = (e) => {
  Xl = e;
}, bd = () => Xl;
let ns = 0;
function _d(e = {}) {
  const t = Te(e.onWarn) ? e.onWarn : fc, n = Q(e.version) ? e.version : md, o = Q(e.locale) || Te(e.locale) ? e.locale : zo, r = Te(o) ? zo : o, a = Pe(e.fallbackLocale) || pe(e.fallbackLocale) || Q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, s = pe(e.messages) ? e.messages : _r(r), l = pe(e.datetimeFormats) ? e.datetimeFormats : _r(r), u = pe(e.numberFormats) ? e.numberFormats : _r(r), c = ze(_e(), e.modifiers, vd()), f = e.pluralRules || _e(), p = Te(e.missing) ? e.missing : null, m = Le(e.missingWarn) || Uo(e.missingWarn) ? e.missingWarn : !0, h = Le(e.fallbackWarn) || Uo(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, g = !!e.unresolving, E = Te(e.postTranslation) ? e.postTranslation : null, d = pe(e.processor) ? e.processor : null, C = Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter, T = Te(e.messageCompiler) ? e.messageCompiler : Gl, y = Te(e.messageResolver) ? e.messageResolver : Yl || fd, A = Te(e.localeFallbacker) ? e.localeFallbacker : ql || od, O = me(e.fallbackContext) ? e.fallbackContext : void 0, z = e, U = me(z.__datetimeFormatters) ? z.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = me(z.__numberFormatters) ? z.__numberFormatters : /* @__PURE__ */ new Map(), re = me(z.__meta) ? z.__meta : {};
  ns++;
  const V = {
    version: n,
    cid: ns,
    locale: o,
    fallbackLocale: a,
    messages: s,
    modifiers: c,
    pluralRules: f,
    missing: p,
    missingWarn: m,
    fallbackWarn: h,
    fallbackFormat: v,
    unresolving: g,
    postTranslation: E,
    processor: d,
    warnHtmlMessage: C,
    escapeParameter: I,
    messageCompiler: T,
    messageResolver: y,
    localeFallbacker: A,
    fallbackContext: O,
    onWarn: t,
    __meta: re
  };
  return V.datetimeFormats = l, V.numberFormats = u, V.__datetimeFormatters = U, V.__numberFormatters = ee, V;
}
const _r = (e) => ({ [e]: _e() });
function ta(e, t, n, o, r) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const l = a(e, n, t, r);
    return Q(l) ? l : t;
  } else
    return t;
}
function Xn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function wd(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ed(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (wd(e, t[o]))
      return !0;
  return !1;
}
function os(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: l } = e, [u, c, f, p] = Pr(...t), m = Le(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Le(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, v = ea(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    v
  );
  if (!Q(u) || u === "")
    return new Intl.DateTimeFormat(v, p).format(c);
  let E = {}, d, C = null;
  const I = "datetime format";
  for (let A = 0; A < g.length && (d = g[A], E = n[d] || {}, C = E[u], !pe(C)); A++)
    ta(e, u, d, m, I);
  if (!pe(C) || !Q(d))
    return o ? tr : u;
  let T = `${d}__${u}`;
  Qo(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = l.get(T);
  return y || (y = new Intl.DateTimeFormat(d, ze({}, C, p)), l.set(T, y)), h ? y.formatToParts(c) : y.format(c);
}
const Zl = [
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
function Pr(...e) {
  const [t, n, o, r] = e, a = _e();
  let s = _e(), l;
  if (Q(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (vc(t)) {
    if (isNaN(t.getTime()))
      throw qt(Yt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (De(t))
    l = t;
  else
    throw qt(Yt.INVALID_ARGUMENT);
  return Q(n) ? a.key = n : pe(n) && Object.keys(n).forEach((u) => {
    Zl.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), Q(o) ? a.locale = o : pe(o) && (s = o), pe(r) && (s = r), [a.key || "", l, a, s];
}
function rs(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__datetimeFormatters.has(a) && o.__datetimeFormatters.delete(a);
  }
}
function as(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: l } = e, [u, c, f, p] = Nr(...t), m = Le(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Le(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, v = ea(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    v
  );
  if (!Q(u) || u === "")
    return new Intl.NumberFormat(v, p).format(c);
  let E = {}, d, C = null;
  const I = "number format";
  for (let A = 0; A < g.length && (d = g[A], E = n[d] || {}, C = E[u], !pe(C)); A++)
    ta(e, u, d, m, I);
  if (!pe(C) || !Q(d))
    return o ? tr : u;
  let T = `${d}__${u}`;
  Qo(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = l.get(T);
  return y || (y = new Intl.NumberFormat(d, ze({}, C, p)), l.set(T, y)), h ? y.formatToParts(c) : y.format(c);
}
const Jl = [
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
function Nr(...e) {
  const [t, n, o, r] = e, a = _e();
  let s = _e();
  if (!De(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const l = t;
  return Q(n) ? a.key = n : pe(n) && Object.keys(n).forEach((u) => {
    Jl.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), Q(o) ? a.locale = o : pe(o) && (s = o), pe(r) && (s = r), [a.key || "", l, a, s];
}
function ss(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__numberFormatters.has(a) && o.__numberFormatters.delete(a);
  }
}
const Cd = (e) => e, Sd = (e) => "", Td = "text", Od = (e) => e.length === 0 ? "" : Zr(e), Ad = _c;
function ls(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Id(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t;
}
function Ld(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Pd(e = {}) {
  const t = e.locale, n = Id(e), o = me(e.pluralRules) && Q(t) && Te(e.pluralRules[t]) ? e.pluralRules[t] : ls, r = me(e.pluralRules) && Q(t) && Te(e.pluralRules[t]) ? ls : void 0, a = (d) => d[o(n, d.length, r)], s = e.list || [], l = (d) => s[d], u = e.named || _e();
  De(e.pluralIndex) && Ld(n, u);
  const c = (d) => u[d];
  function f(d, C) {
    const I = Te(e.messages) ? e.messages(d, !!C) : me(e.messages) ? e.messages[d] : !1;
    return I || (e.parent ? e.parent.message(d) : Sd);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Cd, m = pe(e.processor) && Te(e.processor.normalize) ? e.processor.normalize : Od, h = pe(e.processor) && Te(e.processor.interpolate) ? e.processor.interpolate : Ad, v = pe(e.processor) && Q(e.processor.type) ? e.processor.type : Td, E = {
    list: l,
    named: c,
    plural: a,
    linked: (d, ...C) => {
      const [I, T] = C;
      let y = "text", A = "";
      C.length === 1 ? me(I) ? (A = I.modifier || A, y = I.type || y) : Q(I) && (A = I || A) : C.length === 2 && (Q(I) && (A = I || A), Q(T) && (y = T || y));
      const O = f(d, !0)(E), z = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && Pe(O) && A ? O[0] : O
      );
      return A ? p(A)(z, y) : z;
    },
    message: f,
    type: v,
    interpolate: h,
    normalize: m,
    values: ze(_e(), s, u)
  };
  return E;
}
const is = () => "", Zt = (e) => Te(e);
function us(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: a, fallbackLocale: s, messages: l } = e, [u, c] = kr(...t), f = Le(c.missingWarn) ? c.missingWarn : e.missingWarn, p = Le(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = Le(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, v = Q(c.default) || Le(c.default) ? Le(c.default) ? a ? u : () => u : c.default : n ? a ? u : () => u : null, g = n || v != null && (Q(v) || Te(v)), E = ea(e, c);
  m && Nd(c);
  let [d, C, I] = h ? [
    u,
    E,
    l[E] || _e()
  ] : Ql(e, u, E, s, p, f), T = d, y = u;
  if (!h && !(Q(T) || Ft(T) || Zt(T)) && g && (T = v, y = T), !h && (!(Q(T) || Ft(T) || Zt(T)) || !Q(C)))
    return r ? tr : u;
  let A = !1;
  const O = () => {
    A = !0;
  }, z = Zt(T) ? T : ei(e, u, C, T, y, O);
  if (A)
    return T;
  const U = $d(e, C, I, c), ee = Pd(U), re = kd(e, z, ee);
  let V = o ? o(re, u) : re;
  return m && Q(V) && (V = hc(V)), V;
}
function Nd(e) {
  Pe(e.list) ? e.list = e.list.map((t) => Q(t) ? ja(t) : t) : me(e.named) && Object.keys(e.named).forEach((t) => {
    Q(e.named[t]) && (e.named[t] = ja(e.named[t]));
  });
}
function Ql(e, t, n, o, r, a) {
  const { messages: s, onWarn: l, messageResolver: u, localeFallbacker: c } = e, f = c(e, o, n);
  let p = _e(), m, h = null;
  const v = "translate";
  for (let g = 0; g < f.length && (m = f[g], p = s[m] || _e(), (h = u(p, t)) === null && (h = p[t]), !(Q(h) || Ft(h) || Zt(h))); g++)
    if (!Ed(m, f)) {
      const E = ta(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        v
      );
      E !== t && (h = E);
    }
  return [h, m, p];
}
function ei(e, t, n, o, r, a) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (Zt(o)) {
    const c = o;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (s == null) {
    const c = () => o;
    return c.locale = n, c.key = t, c;
  }
  const u = s(o, Rd(e, n, r, o, l, a));
  return u.locale = n, u.key = t, u.source = o, u;
}
function kd(e, t, n) {
  return t(n);
}
function kr(...e) {
  const [t, n, o] = e, r = _e();
  if (!Q(t) && !De(t) && !Zt(t) && !Ft(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const a = De(t) ? String(t) : (Zt(t), t);
  return De(n) ? r.plural = n : Q(n) ? r.default = n : pe(n) && !Qo(n) ? r.named = n : Pe(n) && (r.list = n), De(o) ? r.plural = o : Q(o) ? r.default = o : pe(o) && ze(r, o), [a, r];
}
function Rd(e, t, n, o, r, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => pc(t, n, s)
  };
}
function $d(e, t, n, o) {
  const { modifiers: r, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: u, missingWarn: c, fallbackContext: f } = e, m = {
    locale: t,
    modifiers: r,
    pluralRules: a,
    messages: (h, v) => {
      let g = s(n, h);
      if (g == null && (f || v)) {
        const [, , E] = Ql(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          l,
          u,
          c
        );
        g = s(E, h);
      }
      if (Q(g) || Ft(g)) {
        let E = !1;
        const C = ei(e, h, t, g, h, () => {
          E = !0;
        });
        return E ? is : C;
      } else return Zt(g) ? g : is;
    }
  };
  return e.processor && (m.processor = e.processor), o.list && (m.list = o.list), o.named && (m.named = o.named), De(o.plural) && (m.pluralIndex = o.plural), m;
}
Hc();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Md = "11.2.2";
function Fd() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Mo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Mo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Mo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Vn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: nd,
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
function io(e, ...t) {
  return er(e, null, void 0);
}
const Rr = /* @__PURE__ */ Tn("__translateVNode"), $r = /* @__PURE__ */ Tn("__datetimeParts"), Mr = /* @__PURE__ */ Tn("__numberParts"), Dd = Tn("__setPluralRules"), ti = /* @__PURE__ */ Tn("__injectWithOption"), Fr = /* @__PURE__ */ Tn("__dispose");
function uo(e) {
  if (!me(e) || Ft(e))
    return e;
  for (const t in e)
    if (Et(e, t))
      if (!t.includes("."))
        me(e[t]) && uo(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, a = !1;
        for (let s = 0; s < o; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in r || (r[n[s]] = _e()), !me(r[n[s]])) {
            a = !0;
            break;
          }
          r = r[n[s]];
        }
        if (a || (Ft(r) ? Hl.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !Ft(r)) {
          const s = r[n[o]];
          me(s) && uo(s);
        }
      }
  return e;
}
function ni(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: a } = t, s = pe(n) ? n : Pe(o) ? _e() : { [e]: _e() };
  if (Pe(o) && o.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: c } = l;
      u ? (s[u] = s[u] || _e(), Fo(c, s[u])) : Fo(c, s);
    } else
      Q(l) && Fo(JSON.parse(l), s);
  }), r == null && a)
    for (const l in s)
      Et(s, l) && uo(s[l]);
  return s;
}
function Vd(e) {
  return e.type;
}
function xd(e, t, n) {
  let o = me(t.messages) ? t.messages : _e();
  "__i18nGlobal" in n && (o = ni(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((a) => {
    e.mergeLocaleMessage(a, o[a]);
  });
  {
    if (me(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (me(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function cs(e) {
  return Z(Rl, null, e, 0);
}
function oi() {
  return "currentInstance" in hr ? hr["currentInstance"] : hr.getCurrentInstance();
}
const ds = () => [], Bd = () => !1;
let fs = 0;
function ps(e) {
  return (t, n, o, r) => e(n, o, oi() || void 0, r);
}
function Ud(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, a = za ? x : fn;
  let s = Le(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && s ? t.locale.value : Q(e.locale) ? e.locale : zo
  ), u = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : Q(e.fallbackLocale) || Pe(e.fallbackLocale) || pe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), c = a(ni(l.value, e)), f = a(pe(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = a(pe(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = t ? t.missingWarn : Le(e.missingWarn) || Uo(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : Le(e.fallbackWarn) || Uo(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : Le(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, E = Te(e.missing) ? e.missing : null, d = Te(e.missing) ? ps(e.missing) : null, C = Te(e.postTranslation) ? e.postTranslation : null, I = t ? t.warnHtmlMessage : Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const y = t ? t.modifiers : pe(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    o && ts(null);
    const _ = {
      version: Md,
      locale: l.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: y,
      pluralRules: A,
      missing: d === null ? void 0 : d,
      missingWarn: m,
      fallbackWarn: h,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: I,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = f.value, _.numberFormats = p.value, _.__datetimeFormatters = pe(O) ? O.__datetimeFormatters : void 0, _.__numberFormatters = pe(O) ? O.__numberFormatters : void 0;
    const $ = _d(_);
    return o && ts($), $;
  })(), Xn(O, l.value, u.value);
  function U() {
    return [
      l.value,
      u.value,
      c.value,
      f.value,
      p.value
    ];
  }
  const ee = L({
    get: () => l.value,
    set: (_) => {
      O.locale = _, l.value = _;
    }
  }), re = L({
    get: () => u.value,
    set: (_) => {
      O.fallbackLocale = _, u.value = _, Xn(O, l.value, _);
    }
  }), V = L(() => c.value), K = /* @__PURE__ */ L(() => f.value), oe = /* @__PURE__ */ L(() => p.value);
  function P() {
    return Te(C) ? C : null;
  }
  function R(_) {
    C = _, O.postTranslation = _;
  }
  function F() {
    return E;
  }
  function ne(_) {
    _ !== null && (d = ps(_)), E = _, O.missing = d;
  }
  const J = (_, $, ue, ve, Ke, yn) => {
    U();
    let vt;
    try {
      o || (O.fallbackContext = t ? bd() : void 0), vt = _(O);
    } finally {
      o || (O.fallbackContext = void 0);
    }
    if (ue !== "translate exists" && // for not `te` (e.g `t`)
    De(vt) && vt === tr || ue === "translate exists" && !vt) {
      const [gr, Fa] = $();
      return t && v ? ve(t) : Ke(gr);
    } else {
      if (yn(vt))
        return vt;
      throw io(Vn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function de(..._) {
    return J(($) => Reflect.apply(us, null, [$, ..._]), () => kr(..._), "translate", ($) => Reflect.apply($.t, $, [..._]), ($) => $, ($) => Q($));
  }
  function G(..._) {
    const [$, ue, ve] = _;
    if (ve && !me(ve))
      throw io(Vn.INVALID_ARGUMENT);
    return de($, ue, ze({ resolvedMessage: !0 }, ve || {}));
  }
  function Me(..._) {
    return J(($) => Reflect.apply(os, null, [$, ..._]), () => Pr(..._), "datetime format", ($) => Reflect.apply($.d, $, [..._]), () => Qa, ($) => Q($) || Pe($));
  }
  function we(..._) {
    return J(($) => Reflect.apply(as, null, [$, ..._]), () => Nr(..._), "number format", ($) => Reflect.apply($.n, $, [..._]), () => Qa, ($) => Q($) || Pe($));
  }
  function We(_) {
    return _.map(($) => Q($) || De($) || Le($) ? cs(String($)) : $);
  }
  const je = {
    normalize: We,
    interpolate: (_) => _,
    type: "vnode"
  };
  function He(..._) {
    return J(($) => {
      let ue;
      const ve = $;
      try {
        ve.processor = je, ue = Reflect.apply(us, null, [ve, ..._]);
      } finally {
        ve.processor = null;
      }
      return ue;
    }, () => kr(..._), "translate", ($) => $[Rr](..._), ($) => [cs($)], ($) => Pe($));
  }
  function be(..._) {
    return J(($) => Reflect.apply(as, null, [$, ..._]), () => Nr(..._), "number format", ($) => $[Mr](..._), ds, ($) => Q($) || Pe($));
  }
  function rt(..._) {
    return J(($) => Reflect.apply(os, null, [$, ..._]), () => Pr(..._), "datetime format", ($) => $[$r](..._), ds, ($) => Q($) || Pe($));
  }
  function pt(_) {
    A = _, O.pluralRules = A;
  }
  function at(_, $) {
    return J(() => {
      if (!_)
        return !1;
      const ue = Q($) ? $ : l.value, ve = lt(ue), Ke = O.messageResolver(ve, _);
      return Ft(Ke) || Zt(Ke) || Q(Ke);
    }, () => [_], "translate exists", (ue) => Reflect.apply(ue.te, ue, [_, $]), Bd, (ue) => Le(ue));
  }
  function bt(_) {
    let $ = null;
    const ue = Kl(O, u.value, l.value);
    for (let ve = 0; ve < ue.length; ve++) {
      const Ke = c.value[ue[ve]] || {}, yn = O.messageResolver(Ke, _);
      if (yn != null) {
        $ = yn;
        break;
      }
    }
    return $;
  }
  function st(_) {
    const $ = bt(_);
    return $ ?? (t ? t.tm(_) || {} : {});
  }
  function lt(_) {
    return c.value[_] || {};
  }
  function it(_, $) {
    if (r) {
      const ue = { [_]: $ };
      for (const ve in ue)
        Et(ue, ve) && uo(ue[ve]);
      $ = ue[_];
    }
    c.value[_] = $, O.messages = c.value;
  }
  function mt(_, $) {
    c.value[_] = c.value[_] || {};
    const ue = { [_]: $ };
    if (r)
      for (const ve in ue)
        Et(ue, ve) && uo(ue[ve]);
    $ = ue[_], Fo($, c.value[_]), O.messages = c.value;
  }
  function It(_) {
    return f.value[_] || {};
  }
  function w(_, $) {
    f.value[_] = $, O.datetimeFormats = f.value, rs(O, _, $);
  }
  function S(_, $) {
    f.value[_] = ze(f.value[_] || {}, $), O.datetimeFormats = f.value, rs(O, _, $);
  }
  function M(_) {
    return p.value[_] || {};
  }
  function H(_, $) {
    p.value[_] = $, O.numberFormats = p.value, ss(O, _, $);
  }
  function fe(_, $) {
    p.value[_] = ze(p.value[_] || {}, $), O.numberFormats = p.value, ss(O, _, $);
  }
  fs++, t && za && (ie(t.locale, (_) => {
    s && (l.value = _, O.locale = _, Xn(O, l.value, u.value));
  }), ie(t.fallbackLocale, (_) => {
    s && (u.value = _, O.fallbackLocale = _, Xn(O, l.value, u.value));
  }));
  const ae = {
    id: fs,
    locale: ee,
    fallbackLocale: re,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(_) {
      s = _, _ && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, Xn(O, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: V,
    get modifiers() {
      return y;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(_) {
      m = _, O.missingWarn = m;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(_) {
      h = _, O.fallbackWarn = h;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(_) {
      v = _;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(_) {
      g = _, O.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(_) {
      I = _, O.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(_) {
      T = _, O.escapeParameter = _;
    },
    t: de,
    getLocaleMessage: lt,
    setLocaleMessage: it,
    mergeLocaleMessage: mt,
    getPostTranslationHandler: P,
    setPostTranslationHandler: R,
    getMissingHandler: F,
    setMissingHandler: ne,
    [Dd]: pt
  };
  return ae.datetimeFormats = K, ae.numberFormats = oe, ae.rt = G, ae.te = at, ae.tm = st, ae.d = Me, ae.n = we, ae.getDateTimeFormat = It, ae.setDateTimeFormat = w, ae.mergeDateTimeFormat = S, ae.getNumberFormat = M, ae.setNumberFormat = H, ae.mergeNumberFormat = fe, ae[ti] = n, ae[Rr] = He, ae[$r] = rt, ae[Mr] = be, ae;
}
const na = {
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
function zd({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === Je ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, _e());
}
function ri() {
  return Je;
}
ze({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => De(e) || !isNaN(e)
  }
}, na);
function Wd(e) {
  return Pe(e) && !Q(e[0]);
}
function ai(e, t, n, o) {
  const { slots: r, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let l = _e();
    e.locale && (s.locale = e.locale), Q(e.format) ? s.key = e.format : me(e.format) && (Q(e.format.key) && (s.key = e.format.key), l = Object.keys(e.format).reduce((m, h) => n.includes(h) ? ze(_e(), m, { [h]: e.format[h] }) : m, _e()));
    const u = o(e.value, s, l);
    let c = [s.key];
    Pe(u) ? c = u.map((m, h) => {
      const v = r[m.type], g = v ? v({ [m.type]: m.value, index: h, parts: u }) : [m.value];
      return Wd(g) && (g[0].key = `${m.type}-${h}`), g;
    }) : Q(u) && (c = [u]);
    const f = ze(_e(), a), p = Q(e.tag) || me(e.tag) ? e.tag : ri();
    return kl(p, f, c);
  };
}
ze({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, na);
const jd = /* @__PURE__ */ Tn("global-vue-i18n");
function go(e = {}) {
  const t = oi();
  if (t == null)
    throw io(Vn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw io(Vn.NOT_INSTALLED);
  const n = Hd(t), o = Gd(n), r = Vd(t), a = Kd(e, r);
  if (a === "global")
    return xd(o, e, r), o;
  if (a === "parent") {
    let u = Yd(n, t, e.__useComponent);
    return u == null && (u = o), u;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const u = ze({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), o && (u.__root = o), l = Ud(u), s.__composerExtend && (l[Fr] = s.__composerExtend(l)), Xd(s, t, l), s.__setInstance(t, l);
  }
  return l;
}
function Hd(e) {
  const t = ye(e.isCE ? jd : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw io(e.isCE ? Vn.NOT_INSTALLED_WITH_PROVIDE : Vn.UNEXPECTED_ERROR);
  return t;
}
function Kd(e, t) {
  return Qo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Gd(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Yd(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let a = qd(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      o = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(a);
      l != null && (o = l.__composer, n && o && !o[ti] && (o = null));
    }
    if (o != null || r === a)
      break;
    a = a.parent;
  }
  return o;
}
function qd(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Xd(e, t, n) {
  Ne(() => {
  }, t), Jo(() => {
    const o = n;
    e.__deleteInstance(t);
    const r = o[Fr];
    r && (r(), delete o[Fr]);
  }, t);
}
ze({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, na);
Fd();
gd(td);
hd(pd);
yd(Kl);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var ms;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ms || (ms = {}));
var vs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(vs || (vs = {}));
var gs;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(gs || (gs = {}));
const Zd = Symbol("");
function Jd() {
  return ye(Zd);
}
const Qd = ["disabled"], ef = {
  key: 0,
  class: "custom-button__loading"
}, tf = /* @__PURE__ */ X({
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
    return (n, o) => (k(), W("button", {
      class: B([
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
      e.loading ? (k(), W("div", ef, o[1] || (o[1] = [
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
      ]))) : Y("v-if", !0),
      le(n.$slots, "default", {}, void 0, !0)
    ], 10, Qd));
  }
}), oa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ct = /* @__PURE__ */ oa(tf, [["__scopeId", "data-v-9497085f"]]), si = Symbol(), Do = "el", nf = "is-", _n = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, li = Symbol("namespaceContextKey"), ra = (e) => {
  const t = e || (Qe() ? ye(li, x(Do)) : x(Do));
  return L(() => i(t) || Do);
}, $e = (e, t) => {
  const n = ra(t);
  return {
    namespace: n,
    b: (g = "") => _n(n.value, e, g, "", ""),
    e: (g) => g ? _n(n.value, e, "", g, "") : "",
    m: (g) => g ? _n(n.value, e, "", "", g) : "",
    be: (g, E) => g && E ? _n(n.value, e, g, E, "") : "",
    em: (g, E) => g && E ? _n(n.value, e, "", g, E) : "",
    bm: (g, E) => g && E ? _n(n.value, e, g, "", E) : "",
    bem: (g, E, d) => g && E && d ? _n(n.value, e, g, E, d) : "",
    is: (g, ...E) => {
      const d = E.length >= 1 ? E[0] : !0;
      return g && d ? `${nf}${g}` : "";
    },
    cssVar: (g) => {
      const E = {};
      for (const d in g)
        g[d] && (E[`--${n.value}-${d}`] = g[d]);
      return E;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const E = {};
      for (const d in g)
        g[d] && (E[`--${n.value}-${e}-${d}`] = g[d]);
      return E;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const co = () => {
}, of = Object.prototype.hasOwnProperty, hs = (e, t) => of.call(e, t), Rt = Array.isArray, Oe = (e) => typeof e == "function", Xe = (e) => typeof e == "string", dt = (e) => e !== null && typeof e == "object", ys = (e) => (dt(e) || Oe(e)) && Oe(e.then) && Oe(e.catch), rf = Object.prototype.toString, af = (e) => rf.call(e), sf = (e) => af(e) === "[object Object]";
var ii = typeof global == "object" && global && global.Object === Object && global, lf = typeof self == "object" && self && self.Object === Object && self, Wt = ii || lf || Function("return this")(), Bt = Wt.Symbol, ui = Object.prototype, uf = ui.hasOwnProperty, cf = ui.toString, Zn = Bt ? Bt.toStringTag : void 0;
function df(e) {
  var t = uf.call(e, Zn), n = e[Zn];
  try {
    e[Zn] = void 0;
    var o = !0;
  } catch {
  }
  var r = cf.call(e);
  return o && (t ? e[Zn] = n : delete e[Zn]), r;
}
var ff = Object.prototype, pf = ff.toString;
function mf(e) {
  return pf.call(e);
}
var vf = "[object Null]", gf = "[object Undefined]", bs = Bt ? Bt.toStringTag : void 0;
function Yn(e) {
  return e == null ? e === void 0 ? gf : vf : bs && bs in Object(e) ? df(e) : mf(e);
}
function xn(e) {
  return e != null && typeof e == "object";
}
var hf = "[object Symbol]";
function nr(e) {
  return typeof e == "symbol" || xn(e) && Yn(e) == hf;
}
function yf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ot = Array.isArray, _s = Bt ? Bt.prototype : void 0, ws = _s ? _s.toString : void 0;
function ci(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return yf(e, ci) + "";
  if (nr(e))
    return ws ? ws.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var bf = /\s/;
function _f(e) {
  for (var t = e.length; t-- && bf.test(e.charAt(t)); )
    ;
  return t;
}
var wf = /^\s+/;
function Ef(e) {
  return e && e.slice(0, _f(e) + 1).replace(wf, "");
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Es = NaN, Cf = /^[-+]0x[0-9a-f]+$/i, Sf = /^0b[01]+$/i, Tf = /^0o[0-7]+$/i, Of = parseInt;
function Cs(e) {
  if (typeof e == "number")
    return e;
  if (nr(e))
    return Es;
  if (mn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ef(e);
  var n = Sf.test(e);
  return n || Tf.test(e) ? Of(e.slice(2), n ? 2 : 8) : Cf.test(e) ? Es : +e;
}
function di(e) {
  return e;
}
var Af = "[object AsyncFunction]", If = "[object Function]", Lf = "[object GeneratorFunction]", Pf = "[object Proxy]";
function fi(e) {
  if (!mn(e))
    return !1;
  var t = Yn(e);
  return t == If || t == Lf || t == Af || t == Pf;
}
var wr = Wt["__core-js_shared__"], Ss = function() {
  var e = /[^.]+$/.exec(wr && wr.keys && wr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nf(e) {
  return !!Ss && Ss in e;
}
var kf = Function.prototype, Rf = kf.toString;
function On(e) {
  if (e != null) {
    try {
      return Rf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $f = /[\\^$.*+?()[\]{}|]/g, Mf = /^\[object .+?Constructor\]$/, Ff = Function.prototype, Df = Object.prototype, Vf = Ff.toString, xf = Df.hasOwnProperty, Bf = RegExp(
  "^" + Vf.call(xf).replace($f, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uf(e) {
  if (!mn(e) || Nf(e))
    return !1;
  var t = fi(e) ? Bf : Mf;
  return t.test(On(e));
}
function zf(e, t) {
  return e?.[t];
}
function An(e, t) {
  var n = zf(e, t);
  return Uf(n) ? n : void 0;
}
var Dr = An(Wt, "WeakMap");
function Wf(e, t, n) {
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
var jf = 800, Hf = 16, Kf = Date.now;
function Gf(e) {
  var t = 0, n = 0;
  return function() {
    var o = Kf(), r = Hf - (o - n);
    if (n = o, r > 0) {
      if (++t >= jf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Yf(e) {
  return function() {
    return e;
  };
}
var Wo = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qf = Wo ? function(e, t) {
  return Wo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yf(t),
    writable: !0
  });
} : di, Xf = Gf(qf);
function Zf(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Jf = 9007199254740991, Qf = /^(?:0|[1-9]\d*)$/;
function aa(e, t) {
  var n = typeof e;
  return t = t ?? Jf, !!t && (n == "number" || n != "symbol" && Qf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ep(e, t, n) {
  t == "__proto__" && Wo ? Wo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function sa(e, t) {
  return e === t || e !== e && t !== t;
}
var tp = Object.prototype, np = tp.hasOwnProperty;
function op(e, t, n) {
  var o = e[t];
  (!(np.call(e, t) && sa(o, n)) || n === void 0 && !(t in e)) && ep(e, t, n);
}
var Ts = Math.max;
function rp(e, t, n) {
  return t = Ts(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = Ts(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(s), Wf(e, this, l);
  };
}
var ap = 9007199254740991;
function la(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ap;
}
function sp(e) {
  return e != null && la(e.length) && !fi(e);
}
var lp = Object.prototype;
function ip(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || lp;
  return e === n;
}
function up(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var cp = "[object Arguments]";
function Os(e) {
  return xn(e) && Yn(e) == cp;
}
var pi = Object.prototype, dp = pi.hasOwnProperty, fp = pi.propertyIsEnumerable, ia = Os(/* @__PURE__ */ function() {
  return arguments;
}()) ? Os : function(e) {
  return xn(e) && dp.call(e, "callee") && !fp.call(e, "callee");
};
function pp() {
  return !1;
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, As = mi && typeof module == "object" && module && !module.nodeType && module, mp = As && As.exports === mi, Is = mp ? Wt.Buffer : void 0, vp = Is ? Is.isBuffer : void 0, Vr = vp || pp, gp = "[object Arguments]", hp = "[object Array]", yp = "[object Boolean]", bp = "[object Date]", _p = "[object Error]", wp = "[object Function]", Ep = "[object Map]", Cp = "[object Number]", Sp = "[object Object]", Tp = "[object RegExp]", Op = "[object Set]", Ap = "[object String]", Ip = "[object WeakMap]", Lp = "[object ArrayBuffer]", Pp = "[object DataView]", Np = "[object Float32Array]", kp = "[object Float64Array]", Rp = "[object Int8Array]", $p = "[object Int16Array]", Mp = "[object Int32Array]", Fp = "[object Uint8Array]", Dp = "[object Uint8ClampedArray]", Vp = "[object Uint16Array]", xp = "[object Uint32Array]", Ee = {};
Ee[Np] = Ee[kp] = Ee[Rp] = Ee[$p] = Ee[Mp] = Ee[Fp] = Ee[Dp] = Ee[Vp] = Ee[xp] = !0;
Ee[gp] = Ee[hp] = Ee[Lp] = Ee[yp] = Ee[Pp] = Ee[bp] = Ee[_p] = Ee[wp] = Ee[Ep] = Ee[Cp] = Ee[Sp] = Ee[Tp] = Ee[Op] = Ee[Ap] = Ee[Ip] = !1;
function Bp(e) {
  return xn(e) && la(e.length) && !!Ee[Yn(e)];
}
function Up(e) {
  return function(t) {
    return e(t);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, eo = vi && typeof module == "object" && module && !module.nodeType && module, zp = eo && eo.exports === vi, Er = zp && ii.process, Ls = function() {
  try {
    var e = eo && eo.require && eo.require("util").types;
    return e || Er && Er.binding && Er.binding("util");
  } catch {
  }
}(), Ps = Ls && Ls.isTypedArray, gi = Ps ? Up(Ps) : Bp, Wp = Object.prototype, jp = Wp.hasOwnProperty;
function Hp(e, t) {
  var n = Ot(e), o = !n && ia(e), r = !n && !o && Vr(e), a = !n && !o && !r && gi(e), s = n || o || r || a, l = s ? up(e.length, String) : [], u = l.length;
  for (var c in e)
    jp.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    aa(c, u))) && l.push(c);
  return l;
}
function Kp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Gp = Kp(Object.keys, Object), Yp = Object.prototype, qp = Yp.hasOwnProperty;
function Xp(e) {
  if (!ip(e))
    return Gp(e);
  var t = [];
  for (var n in Object(e))
    qp.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function hi(e) {
  return sp(e) ? Hp(e) : Xp(e);
}
var Zp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jp = /^\w*$/;
function ua(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || nr(e) ? !0 : Jp.test(e) || !Zp.test(e) || t != null && e in Object(t);
}
var fo = An(Object, "create");
function Qp() {
  this.__data__ = fo ? fo(null) : {}, this.size = 0;
}
function em(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tm = "__lodash_hash_undefined__", nm = Object.prototype, om = nm.hasOwnProperty;
function rm(e) {
  var t = this.__data__;
  if (fo) {
    var n = t[e];
    return n === tm ? void 0 : n;
  }
  return om.call(t, e) ? t[e] : void 0;
}
var am = Object.prototype, sm = am.hasOwnProperty;
function lm(e) {
  var t = this.__data__;
  return fo ? t[e] !== void 0 : sm.call(t, e);
}
var im = "__lodash_hash_undefined__";
function um(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = fo && t === void 0 ? im : t, this;
}
function Cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Cn.prototype.clear = Qp;
Cn.prototype.delete = em;
Cn.prototype.get = rm;
Cn.prototype.has = lm;
Cn.prototype.set = um;
function cm() {
  this.__data__ = [], this.size = 0;
}
function or(e, t) {
  for (var n = e.length; n--; )
    if (sa(e[n][0], t))
      return n;
  return -1;
}
var dm = Array.prototype, fm = dm.splice;
function pm(e) {
  var t = this.__data__, n = or(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : fm.call(t, n, 1), --this.size, !0;
}
function mm(e) {
  var t = this.__data__, n = or(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function vm(e) {
  return or(this.__data__, e) > -1;
}
function gm(e, t) {
  var n = this.__data__, o = or(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
rn.prototype.clear = cm;
rn.prototype.delete = pm;
rn.prototype.get = mm;
rn.prototype.has = vm;
rn.prototype.set = gm;
var po = An(Wt, "Map");
function hm() {
  this.size = 0, this.__data__ = {
    hash: new Cn(),
    map: new (po || rn)(),
    string: new Cn()
  };
}
function ym(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function rr(e, t) {
  var n = e.__data__;
  return ym(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function bm(e) {
  var t = rr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _m(e) {
  return rr(this, e).get(e);
}
function wm(e) {
  return rr(this, e).has(e);
}
function Em(e, t) {
  var n = rr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
an.prototype.clear = hm;
an.prototype.delete = bm;
an.prototype.get = _m;
an.prototype.has = wm;
an.prototype.set = Em;
var Cm = "Expected a function";
function ca(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Cm);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (ca.Cache || an)(), n;
}
ca.Cache = an;
var Sm = 500;
function Tm(e) {
  var t = ca(e, function(o) {
    return n.size === Sm && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Om = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Am = /\\(\\)?/g, Im = Tm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Om, function(n, o, r, a) {
    t.push(r ? a.replace(Am, "$1") : o || n);
  }), t;
});
function Lm(e) {
  return e == null ? "" : ci(e);
}
function ar(e, t) {
  return Ot(e) ? e : ua(e, t) ? [e] : Im(Lm(e));
}
function ho(e) {
  if (typeof e == "string" || nr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function da(e, t) {
  t = ar(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ho(t[n++])];
  return n && n == o ? e : void 0;
}
function dn(e, t, n) {
  var o = e == null ? void 0 : da(e, t);
  return o === void 0 ? n : o;
}
function yi(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Ns = Bt ? Bt.isConcatSpreadable : void 0;
function Pm(e) {
  return Ot(e) || ia(e) || !!(Ns && e && e[Ns]);
}
function Nm(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = Pm), r || (r = []); ++a < s; ) {
    var l = e[a];
    n(l) ? yi(r, l) : r[r.length] = l;
  }
  return r;
}
function km(e) {
  var t = e == null ? 0 : e.length;
  return t ? Nm(e) : [];
}
function Rm(e) {
  return Xf(rp(e, void 0, km), e + "");
}
function cn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Ot(e) ? e : [e];
}
function $m() {
  this.__data__ = new rn(), this.size = 0;
}
function Mm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Fm(e) {
  return this.__data__.get(e);
}
function Dm(e) {
  return this.__data__.has(e);
}
var Vm = 200;
function xm(e, t) {
  var n = this.__data__;
  if (n instanceof rn) {
    var o = n.__data__;
    if (!po || o.length < Vm - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new an(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jt(e) {
  var t = this.__data__ = new rn(e);
  this.size = t.size;
}
Jt.prototype.clear = $m;
Jt.prototype.delete = Mm;
Jt.prototype.get = Fm;
Jt.prototype.has = Dm;
Jt.prototype.set = xm;
function Bm(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (a[r++] = s);
  }
  return a;
}
function Um() {
  return [];
}
var zm = Object.prototype, Wm = zm.propertyIsEnumerable, ks = Object.getOwnPropertySymbols, jm = ks ? function(e) {
  return e == null ? [] : (e = Object(e), Bm(ks(e), function(t) {
    return Wm.call(e, t);
  }));
} : Um;
function Hm(e, t, n) {
  var o = t(e);
  return Ot(e) ? o : yi(o, n(e));
}
function Rs(e) {
  return Hm(e, hi, jm);
}
var xr = An(Wt, "DataView"), Br = An(Wt, "Promise"), Ur = An(Wt, "Set"), $s = "[object Map]", Km = "[object Object]", Ms = "[object Promise]", Fs = "[object Set]", Ds = "[object WeakMap]", Vs = "[object DataView]", Gm = On(xr), Ym = On(po), qm = On(Br), Xm = On(Ur), Zm = On(Dr), un = Yn;
(xr && un(new xr(new ArrayBuffer(1))) != Vs || po && un(new po()) != $s || Br && un(Br.resolve()) != Ms || Ur && un(new Ur()) != Fs || Dr && un(new Dr()) != Ds) && (un = function(e) {
  var t = Yn(e), n = t == Km ? e.constructor : void 0, o = n ? On(n) : "";
  if (o)
    switch (o) {
      case Gm:
        return Vs;
      case Ym:
        return $s;
      case qm:
        return Ms;
      case Xm:
        return Fs;
      case Zm:
        return Ds;
    }
  return t;
});
var xs = Wt.Uint8Array, Jm = "__lodash_hash_undefined__";
function Qm(e) {
  return this.__data__.set(e, Jm), this;
}
function ev(e) {
  return this.__data__.has(e);
}
function jo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new an(); ++t < n; )
    this.add(e[t]);
}
jo.prototype.add = jo.prototype.push = Qm;
jo.prototype.has = ev;
function tv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function nv(e, t) {
  return e.has(t);
}
var ov = 1, rv = 2;
function bi(e, t, n, o, r, a) {
  var s = n & ov, l = e.length, u = t.length;
  if (l != u && !(s && u > l))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, m = !0, h = n & rv ? new jo() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < l; ) {
    var v = e[p], g = t[p];
    if (o)
      var E = s ? o(g, v, p, t, e, a) : o(v, g, p, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!tv(t, function(d, C) {
        if (!nv(h, C) && (v === d || r(v, d, n, o, a)))
          return h.push(C);
      })) {
        m = !1;
        break;
      }
    } else if (!(v === g || r(v, g, n, o, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function av(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function sv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var lv = 1, iv = 2, uv = "[object Boolean]", cv = "[object Date]", dv = "[object Error]", fv = "[object Map]", pv = "[object Number]", mv = "[object RegExp]", vv = "[object Set]", gv = "[object String]", hv = "[object Symbol]", yv = "[object ArrayBuffer]", bv = "[object DataView]", Bs = Bt ? Bt.prototype : void 0, Cr = Bs ? Bs.valueOf : void 0;
function _v(e, t, n, o, r, a, s) {
  switch (n) {
    case bv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yv:
      return !(e.byteLength != t.byteLength || !a(new xs(e), new xs(t)));
    case uv:
    case cv:
    case pv:
      return sa(+e, +t);
    case dv:
      return e.name == t.name && e.message == t.message;
    case mv:
    case gv:
      return e == t + "";
    case fv:
      var l = av;
    case vv:
      var u = o & lv;
      if (l || (l = sv), e.size != t.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      o |= iv, s.set(e, t);
      var f = bi(l(e), l(t), o, r, a, s);
      return s.delete(e), f;
    case hv:
      if (Cr)
        return Cr.call(e) == Cr.call(t);
  }
  return !1;
}
var wv = 1, Ev = Object.prototype, Cv = Ev.hasOwnProperty;
function Sv(e, t, n, o, r, a) {
  var s = n & wv, l = Rs(e), u = l.length, c = Rs(t), f = c.length;
  if (u != f && !s)
    return !1;
  for (var p = u; p--; ) {
    var m = l[p];
    if (!(s ? m in t : Cv.call(t, m)))
      return !1;
  }
  var h = a.get(e), v = a.get(t);
  if (h && v)
    return h == t && v == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < u; ) {
    m = l[p];
    var d = e[m], C = t[m];
    if (o)
      var I = s ? o(C, d, m, t, e, a) : o(d, C, m, e, t, a);
    if (!(I === void 0 ? d === C || r(d, C, n, o, a) : I)) {
      g = !1;
      break;
    }
    E || (E = m == "constructor");
  }
  if (g && !E) {
    var T = e.constructor, y = t.constructor;
    T != y && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof y == "function" && y instanceof y) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var Tv = 1, Us = "[object Arguments]", zs = "[object Array]", Lo = "[object Object]", Ov = Object.prototype, Ws = Ov.hasOwnProperty;
function Av(e, t, n, o, r, a) {
  var s = Ot(e), l = Ot(t), u = s ? zs : un(e), c = l ? zs : un(t);
  u = u == Us ? Lo : u, c = c == Us ? Lo : c;
  var f = u == Lo, p = c == Lo, m = u == c;
  if (m && Vr(e)) {
    if (!Vr(t))
      return !1;
    s = !0, f = !1;
  }
  if (m && !f)
    return a || (a = new Jt()), s || gi(e) ? bi(e, t, n, o, r, a) : _v(e, t, u, n, o, r, a);
  if (!(n & Tv)) {
    var h = f && Ws.call(e, "__wrapped__"), v = p && Ws.call(t, "__wrapped__");
    if (h || v) {
      var g = h ? e.value() : e, E = v ? t.value() : t;
      return a || (a = new Jt()), r(g, E, n, o, a);
    }
  }
  return m ? (a || (a = new Jt()), Sv(e, t, n, o, r, a)) : !1;
}
function sr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !xn(e) && !xn(t) ? e !== e && t !== t : Av(e, t, n, o, sr, r);
}
var Iv = 1, Lv = 2;
function Pv(e, t, n, o) {
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
    var l = s[0], u = e[l], c = s[1];
    if (s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new Jt(), p;
      if (!(p === void 0 ? sr(c, u, Iv | Lv, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function _i(e) {
  return e === e && !mn(e);
}
function Nv(e) {
  for (var t = hi(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, _i(r)];
  }
  return t;
}
function wi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function kv(e) {
  var t = Nv(e);
  return t.length == 1 && t[0][2] ? wi(t[0][0], t[0][1]) : function(n) {
    return n === e || Pv(n, e, t);
  };
}
function Rv(e, t) {
  return e != null && t in Object(e);
}
function $v(e, t, n) {
  t = ar(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var s = ho(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && la(r) && aa(s, r) && (Ot(e) || ia(e)));
}
function Ei(e, t) {
  return e != null && $v(e, t, Rv);
}
var Mv = 1, Fv = 2;
function Dv(e, t) {
  return ua(e) && _i(t) ? wi(ho(e), t) : function(n) {
    var o = dn(n, e);
    return o === void 0 && o === t ? Ei(n, e) : sr(t, o, Mv | Fv);
  };
}
function Vv(e) {
  return function(t) {
    return t?.[e];
  };
}
function xv(e) {
  return function(t) {
    return da(t, e);
  };
}
function Bv(e) {
  return ua(e) ? Vv(ho(e)) : xv(e);
}
function Uv(e) {
  return typeof e == "function" ? e : e == null ? di : typeof e == "object" ? Ot(e) ? Dv(e[0], e[1]) : kv(e) : Bv(e);
}
var Sr = function() {
  return Wt.Date.now();
}, zv = "Expected a function", Wv = Math.max, jv = Math.min;
function Hv(e, t, n) {
  var o, r, a, s, l, u, c = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(zv);
  t = Cs(t) || 0, mn(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? Wv(Cs(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function h(A) {
    var O = o, z = r;
    return o = r = void 0, c = A, s = e.apply(z, O), s;
  }
  function v(A) {
    return c = A, l = setTimeout(d, t), f ? h(A) : s;
  }
  function g(A) {
    var O = A - u, z = A - c, U = t - O;
    return p ? jv(U, a - z) : U;
  }
  function E(A) {
    var O = A - u, z = A - c;
    return u === void 0 || O >= t || O < 0 || p && z >= a;
  }
  function d() {
    var A = Sr();
    if (E(A))
      return C(A);
    l = setTimeout(d, g(A));
  }
  function C(A) {
    return l = void 0, m && o ? h(A) : (o = r = void 0, s);
  }
  function I() {
    l !== void 0 && clearTimeout(l), c = 0, o = u = r = l = void 0;
  }
  function T() {
    return l === void 0 ? s : C(Sr());
  }
  function y() {
    var A = Sr(), O = E(A);
    if (o = arguments, r = this, u = A, O) {
      if (l === void 0)
        return v(u);
      if (p)
        return clearTimeout(l), l = setTimeout(d, t), h(u);
    }
    return l === void 0 && (l = setTimeout(d, t)), s;
  }
  return y.cancel = I, y.flush = T, y;
}
function Kv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Zf(e, Uv(t), r);
}
function Ho(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function to(e, t) {
  return sr(e, t);
}
function Qt(e) {
  return e == null;
}
function Gv(e) {
  return e === void 0;
}
function Yv(e, t, n, o) {
  if (!mn(e))
    return e;
  t = ar(t, e);
  for (var r = -1, a = t.length, s = a - 1, l = e; l != null && ++r < a; ) {
    var u = ho(t[r]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (r != s) {
      var f = l[u];
      c = void 0, c === void 0 && (c = mn(f) ? f : aa(t[r + 1]) ? [] : {});
    }
    op(l, u, c), l = l[u];
  }
  return e;
}
function qv(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], l = da(e, s);
    n(l, s) && Yv(a, ar(s, e), l);
  }
  return a;
}
function Xv(e, t) {
  return qv(e, t, function(n, o) {
    return Ei(e, o);
  });
}
var Zv = Rm(function(e, t) {
  return e == null ? {} : Xv(e, t);
});
const $t = (e) => e === void 0, pn = (e) => typeof e == "boolean", he = (e) => typeof e == "number", St = (e) => typeof Element > "u" ? !1 : e instanceof Element, Jv = (e) => Xe(e) ? !Number.isNaN(Number(e)) : !1;
var Qv = Object.defineProperty, eg = Object.defineProperties, tg = Object.getOwnPropertyDescriptors, js = Object.getOwnPropertySymbols, ng = Object.prototype.hasOwnProperty, og = Object.prototype.propertyIsEnumerable, Hs = (e, t, n) => t in e ? Qv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rg = (e, t) => {
  for (var n in t || (t = {}))
    ng.call(t, n) && Hs(e, n, t[n]);
  if (js)
    for (var n of js(t))
      og.call(t, n) && Hs(e, n, t[n]);
  return e;
}, ag = (e, t) => eg(e, tg(t));
function sg(e, t) {
  var n;
  const o = fn();
  return $l(() => {
    o.value = e();
  }, ag(rg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Yr(o);
}
var Ks;
const Re = typeof window < "u", lg = (e) => typeof e == "string", Ci = () => {
}, zr = Re && ((Ks = window?.navigator) == null ? void 0 : Ks.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function fa(e) {
  return typeof e == "function" ? e() : i(e);
}
function ig(e) {
  return e;
}
function yo(e) {
  return ju() ? (Hu(e), !0) : !1;
}
function ug(e, t = !0) {
  Qe() ? Ne(e) : t ? e() : Ie(e);
}
function Si(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = x(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function l() {
    r.value = !1, s();
  }
  function u(...c) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...c);
    }, fa(t));
  }
  return o && (r.value = !0, Re && u()), yo(l), {
    isPending: Yr(r),
    start: u,
    stop: l
  };
}
function Xt(e) {
  var t;
  const n = fa(e);
  return (t = n?.$el) != null ? t : n;
}
const lr = Re ? window : void 0;
function Tt(...e) {
  let t, n, o, r;
  if (lg(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = lr) : [t, n, o, r] = e, !t)
    return Ci;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, l = (f, p, m, h) => (f.addEventListener(p, m, h), () => f.removeEventListener(p, m, h)), u = ie(() => [Xt(t), fa(r)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((m) => o.map((h) => l(f, m, h, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return yo(c), c;
}
let Gs = !1;
function cg(e, t, n = {}) {
  const { window: o = lr, ignore: r = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  zr && !Gs && (Gs = !0, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", Ci)));
  let l = !0;
  const u = (m) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Xt(h);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), f = [
    Tt(o, "click", (m) => {
      const h = Xt(e);
      if (!(!h || h === m.target || m.composedPath().includes(h))) {
        if (m.detail === 0 && (l = !u(m)), !l) {
          l = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    Tt(o, "pointerdown", (m) => {
      const h = Xt(e);
      h && (l = !m.composedPath().includes(h) && !u(m));
    }, { passive: !0 }),
    s && Tt(o, "blur", (m) => {
      var h;
      const v = Xt(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !v?.contains(o.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Ti(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), ug(o, t), n;
}
const Ys = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qs = "__vueuse_ssr_handlers__";
Ys[qs] = Ys[qs] || {};
var Xs = Object.getOwnPropertySymbols, dg = Object.prototype.hasOwnProperty, fg = Object.prototype.propertyIsEnumerable, pg = (e, t) => {
  var n = {};
  for (var o in e)
    dg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Xs)
    for (var o of Xs(e))
      t.indexOf(o) < 0 && fg.call(e, o) && (n[o] = e[o]);
  return n;
};
function kt(e, t, n = {}) {
  const o = n, { window: r = lr } = o, a = pg(o, ["window"]);
  let s;
  const l = Ti(() => r && "ResizeObserver" in r), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ie(() => Xt(e), (p) => {
    u(), l.value && r && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return yo(f), {
    isSupported: l,
    stop: f
  };
}
var Zs = Object.getOwnPropertySymbols, mg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, gg = (e, t) => {
  var n = {};
  for (var o in e)
    mg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Zs)
    for (var o of Zs(e))
      t.indexOf(o) < 0 && vg.call(e, o) && (n[o] = e[o]);
  return n;
};
function hg(e, t, n = {}) {
  const o = n, { window: r = lr } = o, a = gg(o, ["window"]);
  let s;
  const l = Ti(() => r && "MutationObserver" in r), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ie(() => Xt(e), (p) => {
    u(), l.value && r && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    u(), c();
  };
  return yo(f), {
    isSupported: l,
    stop: f
  };
}
var Js;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Js || (Js = {}));
var yg = Object.defineProperty, Qs = Object.getOwnPropertySymbols, bg = Object.prototype.hasOwnProperty, _g = Object.prototype.propertyIsEnumerable, el = (e, t, n) => t in e ? yg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wg = (e, t) => {
  for (var n in t || (t = {}))
    bg.call(t, n) && el(e, n, t[n]);
  if (Qs)
    for (var n of Qs(t))
      _g.call(t, n) && el(e, n, t[n]);
  return e;
};
const Eg = {
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
wg({
  linear: ig
}, Eg);
class Cg extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function pa(e, t) {
  throw new Cg(`[${e}] ${t}`);
}
const tl = {
  current: 0
}, nl = x(0), Oi = 2e3, ol = Symbol("elZIndexContextKey"), Ai = Symbol("zIndexContextKey"), Ii = (e) => {
  const t = Qe() ? ye(ol, tl) : tl, n = e || (Qe() ? ye(Ai, void 0) : void 0), o = L(() => {
    const s = i(n);
    return he(s) ? s : Oi;
  }), r = L(() => o.value + nl.value), a = () => (t.current++, nl.value = t.current, r.value);
  return !Re && ye(ol), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: a
  };
};
var Sg = {
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
const Tg = (e) => (t, n) => Og(t, n, i(e)), Og = (e, t, n) => dn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t?.[r]) != null ? a : `{${r}}`}`;
}), Ag = (e) => {
  const t = L(() => i(e).name), n = ro(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Tg(e)
  };
}, Li = Symbol("localeContextKey"), ma = (e) => {
  const t = e || ye(Li, x());
  return Ag(L(() => t.value || Sg));
}, Pi = "__epPropKey", se = (e) => e, Ig = (e) => dt(e) && !!e[Pi], ir = (e, t) => {
  if (!dt(e) || Ig(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, u = {
    type: a,
    required: !!o,
    validator: n || s ? (c) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), hs(e, "default") && p.push(r), f || (f = p.includes(c))), s && (f || (f = s(c))), !f && p.length > 0) {
        const m = [...new Set(p)].map((h) => JSON.stringify(h)).join(", ");
        Ku(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [Pi]: !0
  };
  return hs(e, "default") && (u.default = r), u;
}, Ce = (e) => Ho(Object.entries(e).map(([t, n]) => [
  t,
  ir(n, t)
])), va = ["", "default", "small", "large"], ur = ir({
  type: String,
  values: va,
  required: !1
}), Ni = Symbol("size"), Lg = () => {
  const e = ye(Ni, {});
  return L(() => i(e.size) || "");
}, ki = Symbol("emptyValuesContextKey"), Pg = ["", void 0, null], Ng = void 0, Ri = Ce({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Oe(e) ? !e() : !e
  }
}), kg = (e, t) => {
  const n = Qe() ? ye(ki, x({})) : x({}), o = L(() => e.emptyValues || n.value.emptyValues || Pg), r = L(() => Oe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Oe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Ng), a = (s) => o.value.includes(s);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: a
  };
}, rl = (e) => Object.keys(e), Ko = x();
function $i(e, t = void 0) {
  return Qe() ? ye(si, Ko) : Ko;
}
function Mi(e, t) {
  const n = $i(), o = $e(e, L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Do;
  })), r = ma(L(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = Ii(L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Oi;
  })), s = L(() => {
    var l;
    return i(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Fi(L(() => i(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
const Fi = (e, t, n = !1) => {
  var o;
  const r = !!Qe(), a = r ? $i() : void 0, s = (o = void 0) != null ? o : r ? xt : void 0;
  if (!s)
    return;
  const l = L(() => {
    const u = i(e);
    return a?.value ? Rg(a.value, u) : u;
  });
  return s(si, l), s(Li, L(() => l.value.locale)), s(li, L(() => l.value.namespace)), s(Ai, L(() => l.value.zIndex)), s(Ni, {
    size: L(() => l.value.size || "")
  }), s(ki, L(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Ko.value) && (Ko.value = l.value), l;
}, Rg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...rl(e), ...rl(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Ve = "update:modelValue", nn = "change", en = "input";
var Se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function Bn(e, t = "px") {
  if (!e)
    return "";
  if (he(e) || Jv(e))
    return `${e}${t}`;
  if (Xe(e))
    return e;
}
function $g(e, t) {
  if (!Re)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), a = r + t.offsetHeight, s = e.scrollTop, l = s + e.clientHeight;
  r < s ? e.scrollTop = r : a > l && (e.scrollTop = a - e.clientHeight);
}
const At = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Di = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Vi = (e) => (e.install = co, e), Mg = Ce({
  size: {
    type: se([Number, String])
  },
  color: {
    type: String
  }
}), Fg = X({
  name: "ElIcon",
  inheritAttrs: !1
}), Dg = /* @__PURE__ */ X({
  ...Fg,
  props: Mg,
  setup(e) {
    const t = e, n = $e("icon"), o = L(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: $t(r) ? void 0 : Bn(r),
        "--color": a
      };
    });
    return (r, a) => (k(), W("i", Mn({
      class: i(n).b(),
      style: i(o)
    }, r.$attrs), [
      le(r.$slots, "default")
    ], 16));
  }
});
var Vg = /* @__PURE__ */ Se(Dg, [["__file", "icon.vue"]]);
const ke = At(Vg);
/*! Element Plus Icons Vue v2.3.1 */
var xg = /* @__PURE__ */ X({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), xi = xg, Bg = /* @__PURE__ */ X({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Ug = Bg, zg = /* @__PURE__ */ X({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (k(), W("svg", {
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
}), Wg = zg, jg = /* @__PURE__ */ X({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Hg = jg, Kg = /* @__PURE__ */ X({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (k(), W("svg", {
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
}), ga = Kg, Gg = /* @__PURE__ */ X({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Go = Gg, Yg = /* @__PURE__ */ X({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (k(), W("svg", {
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
}), qg = Yg, Xg = /* @__PURE__ */ X({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Zg = Xg, Jg = /* @__PURE__ */ X({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Bi = Jg, Qg = /* @__PURE__ */ X({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), eh = Qg, th = /* @__PURE__ */ X({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), nh = th, oh = /* @__PURE__ */ X({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), rh = oh, ah = /* @__PURE__ */ X({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), sh = ah, lh = /* @__PURE__ */ X({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ih = lh;
const Mt = se([
  String,
  Object,
  Function
]), uh = {
  Close: Go
}, ch = {
  Close: Go
}, Yo = {
  success: rh,
  warning: ih,
  error: Hg,
  info: Zg
}, Ui = {
  validating: Bi,
  success: Wg,
  error: ga
}, zi = () => Re && /firefox/i.test(window.navigator.userAgent);
let et;
const dh = {
  height: "0",
  visibility: "hidden",
  overflow: zi() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, fh = [
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
function ph(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: fh.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function al(e, t = 1, n) {
  var o;
  et || (et = document.createElement("textarea"), document.body.appendChild(et));
  const { paddingSize: r, borderSize: a, boxSizing: s, contextStyle: l } = ph(e);
  l.forEach(([p, m]) => et?.style.setProperty(p, m)), Object.entries(dh).forEach(([p, m]) => et?.style.setProperty(p, m, "important")), et.value = e.value || e.placeholder || "";
  let u = et.scrollHeight;
  const c = {};
  s === "border-box" ? u = u + a : s === "content-box" && (u = u - r), et.value = "";
  const f = et.scrollHeight - r;
  if (he(t)) {
    let p = f * t;
    s === "border-box" && (p = p + r + a), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (he(n)) {
    let p = f * n;
    s === "border-box" && (p = p + r + a), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (o = et.parentNode) == null || o.removeChild(et), et = void 0, c;
}
const Wi = (e) => e, mh = Ce({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), In = (e) => Zv(mh, e), vh = Ce({
  id: {
    type: String,
    default: void 0
  },
  size: ur,
  disabled: Boolean,
  modelValue: {
    type: se([
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
    type: se([Boolean, Object]),
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
    type: se([Object, Array, String]),
    default: () => Wi({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...In(["ariaLabel"])
}), gh = {
  [Ve]: (e) => Xe(e),
  input: (e) => Xe(e),
  change: (e) => Xe(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, hh = ["class", "style"], yh = /^on[A-Z]/, bh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = L(() => (n?.value || []).concat(hh)), r = Qe();
  return r ? L(() => {
    var a;
    return Ho(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !o.value.includes(s) && !(t && yh.test(s))));
  }) : L(() => ({}));
}, ha = Symbol("formContextKey"), qo = Symbol("formItemContextKey"), sl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, _h = Symbol("elIdInjection"), ji = () => Qe() ? ye(_h, sl) : sl, cr = (e) => {
  const t = ji(), n = ra();
  return sg(() => i(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, dr = () => {
  const e = ye(ha, void 0), t = ye(qo, void 0);
  return {
    form: e,
    formItem: t
  };
}, ya = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = x(!1)), o || (o = x(!1));
  const r = x();
  let a;
  const s = L(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Ne(() => {
    a = ie([Gt(e, "id"), n], ([l, u]) => {
      const c = l ?? (u ? void 0 : cr().value);
      c !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !u && c && t.addInputId(c)), r.value = c);
    }, { immediate: !0 });
  }), Jo(() => {
    a && a(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, Hi = (e) => {
  const t = Qe();
  return L(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, bo = (e, t = {}) => {
  const n = x(void 0), o = t.prop ? n : Hi("size"), r = t.global ? n : Lg(), a = t.form ? { size: void 0 } : ye(ha, void 0), s = t.formItem ? { size: void 0 } : ye(qo, void 0);
  return L(() => o.value || i(e) || s?.size || a?.size || r.value || "");
}, ba = (e) => {
  const t = Hi("disabled"), n = ye(ha, void 0);
  return L(() => t.value || i(e) || n?.disabled || !1);
};
function Ki(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const a = Qe(), { emit: s } = a, l = fn(), u = x(!1), c = (m) => {
    Oe(t) && t(m) || u.value || (u.value = !0, s("focus", m), n?.());
  }, f = (m) => {
    var h;
    Oe(o) && o(m) || m.relatedTarget && ((h = l.value) != null && h.contains(m.relatedTarget)) || (u.value = !1, s("blur", m), r?.());
  }, p = () => {
    var m, h;
    (m = l.value) != null && m.contains(document.activeElement) && l.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return ie(l, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), Tt(l, "focus", c, !0), Tt(l, "blur", f, !0), Tt(l, "click", p, !0), {
    isFocused: u,
    wrapperRef: l,
    handleFocus: c,
    handleBlur: f
  };
}
const wh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Gi({
  afterComposition: e,
  emit: t
}) {
  const n = x(!1), o = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, r = (l) => {
    var u;
    t?.("compositionupdate", l);
    const c = (u = l.target) == null ? void 0 : u.value, f = c[c.length - 1] || "";
    n.value = !wh(f);
  }, a = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, Ie(() => e(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? a(l) : r(l);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: a
  };
}
function Eh(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: s } = e.value;
    if (r == null || a == null)
      return;
    const l = s.slice(0, Math.max(0, r)), u = s.slice(Math.max(0, a));
    t = {
      selectionStart: r,
      selectionEnd: a,
      value: s,
      beforeTxt: l,
      afterTxt: u
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: l } = t;
    if (a == null || s == null || l == null)
      return;
    let u = r.length;
    if (r.endsWith(s))
      u = r.length - s.length;
    else if (r.startsWith(a))
      u = a.length;
    else {
      const c = a[l - 1], f = r.indexOf(c, l - 1);
      f !== -1 && (u = f + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, o];
}
const Ch = "ElInput", Sh = X({
  name: Ch,
  inheritAttrs: !1
}), Th = /* @__PURE__ */ X({
  ...Sh,
  props: vh,
  emits: gh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Gu(), a = bh(), s = Yu(), l = L(() => [
      o.type === "textarea" ? g.b() : v.b(),
      v.m(m.value),
      v.is("disabled", h.value),
      v.is("exceed", Me.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || o.prefixIcon,
        [v.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [v.bm("suffix", "password-clear")]: ne.value && J.value,
        [v.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), u = L(() => [
      v.e("wrapper"),
      v.is("focus", z.value)
    ]), { form: c, formItem: f } = dr(), { inputId: p } = ya(o, {
      formItemContext: f
    }), m = bo(), h = ba(), v = $e("input"), g = $e("textarea"), E = fn(), d = fn(), C = x(!1), I = x(!1), T = x(), y = fn(o.inputStyle), A = L(() => E.value || d.value), { wrapperRef: O, isFocused: z, handleFocus: U, handleBlur: ee } = Ki(A, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var _;
        o.validateEvent && ((_ = f?.validate) == null || _.call(f, "blur").catch(($) => void 0));
      }
    }), re = L(() => {
      var _;
      return (_ = c?.statusIcon) != null ? _ : !1;
    }), V = L(() => f?.validateState || ""), K = L(() => V.value && Ui[V.value]), oe = L(() => I.value ? sh : qg), P = L(() => [
      r.style
    ]), R = L(() => [
      o.inputStyle,
      y.value,
      { resize: o.resize }
    ]), F = L(() => Qt(o.modelValue) ? "" : String(o.modelValue)), ne = L(() => o.clearable && !h.value && !o.readonly && !!F.value && (z.value || C.value)), J = L(() => o.showPassword && !h.value && !!F.value && (!!F.value || z.value)), de = L(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !h.value && !o.readonly && !o.showPassword), G = L(() => F.value.length), Me = L(() => !!de.value && G.value > Number(o.maxlength)), we = L(() => !!s.suffix || !!o.suffixIcon || ne.value || o.showPassword || de.value || !!V.value && re.value), [We, Be] = Eh(E);
    kt(d, (_) => {
      if (be(), !de.value || o.resize !== "both")
        return;
      const $ = _[0], { width: ue } = $.contentRect;
      T.value = {
        right: `calc(100% - ${ue + 15 + 6}px)`
      };
    });
    const je = () => {
      const { type: _, autosize: $ } = o;
      if (!(!Re || _ !== "textarea" || !d.value))
        if ($) {
          const ue = dt($) ? $.minRows : void 0, ve = dt($) ? $.maxRows : void 0, Ke = al(d.value, ue, ve);
          y.value = {
            overflowY: "hidden",
            ...Ke
          }, Ie(() => {
            d.value.offsetHeight, y.value = Ke;
          });
        } else
          y.value = {
            minHeight: al(d.value).minHeight
          };
    }, be = ((_) => {
      let $ = !1;
      return () => {
        var ue;
        if ($ || !o.autosize)
          return;
        ((ue = d.value) == null ? void 0 : ue.offsetParent) === null || (_(), $ = !0);
      };
    })(je), rt = () => {
      const _ = A.value, $ = o.formatter ? o.formatter(F.value) : F.value;
      !_ || _.value === $ || (_.value = $);
    }, pt = async (_) => {
      We();
      let { value: $ } = _.target;
      if (o.formatter && o.parser && ($ = o.parser($)), !bt.value) {
        if ($ === F.value) {
          rt();
          return;
        }
        n(Ve, $), n(en, $), await Ie(), rt(), Be();
      }
    }, at = (_) => {
      let { value: $ } = _.target;
      o.formatter && o.parser && ($ = o.parser($)), n(nn, $);
    }, {
      isComposing: bt,
      handleCompositionStart: st,
      handleCompositionUpdate: lt,
      handleCompositionEnd: it
    } = Gi({ emit: n, afterComposition: pt }), mt = () => {
      We(), I.value = !I.value, setTimeout(Be);
    }, It = () => {
      var _;
      return (_ = A.value) == null ? void 0 : _.focus();
    }, w = () => {
      var _;
      return (_ = A.value) == null ? void 0 : _.blur();
    }, S = (_) => {
      C.value = !1, n("mouseleave", _);
    }, M = (_) => {
      C.value = !0, n("mouseenter", _);
    }, H = (_) => {
      n("keydown", _);
    }, fe = () => {
      var _;
      (_ = A.value) == null || _.select();
    }, ae = () => {
      n(Ve, ""), n(nn, ""), n("clear"), n(en, "");
    };
    return ie(() => o.modelValue, () => {
      var _;
      Ie(() => je()), o.validateEvent && ((_ = f?.validate) == null || _.call(f, "change").catch(($) => void 0));
    }), ie(F, () => rt()), ie(() => o.type, async () => {
      await Ie(), rt(), je();
    }), Ne(() => {
      !o.formatter && o.parser, rt(), Ie(je);
    }), t({
      input: E,
      textarea: d,
      ref: A,
      textareaStyle: R,
      autosize: Gt(o, "autosize"),
      isComposing: bt,
      focus: It,
      blur: w,
      select: fe,
      clear: ae,
      resizeTextarea: je
    }), (_, $) => (k(), W("div", {
      class: B([
        i(l),
        {
          [i(v).bm("group", "append")]: _.$slots.append,
          [i(v).bm("group", "prepend")]: _.$slots.prepend
        }
      ]),
      style: Ue(i(P)),
      onMouseenter: M,
      onMouseleave: S
    }, [
      Y(" input "),
      _.type !== "textarea" ? (k(), W(Je, { key: 0 }, [
        Y(" prepend slot "),
        _.$slots.prepend ? (k(), W("div", {
          key: 0,
          class: B(i(v).be("group", "prepend"))
        }, [
          le(_.$slots, "prepend")
        ], 2)) : Y("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: B(i(u))
        }, [
          Y(" prefix slot "),
          _.$slots.prefix || _.prefixIcon ? (k(), W("span", {
            key: 0,
            class: B(i(v).e("prefix"))
          }, [
            b("span", {
              class: B(i(v).e("prefix-inner"))
            }, [
              le(_.$slots, "prefix"),
              _.prefixIcon ? (k(), te(i(ke), {
                key: 0,
                class: B(i(v).e("icon"))
              }, {
                default: q(() => [
                  (k(), te(Ze(_.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0),
          b("input", Mn({
            id: i(p),
            ref_key: "input",
            ref: E,
            class: i(v).e("inner")
          }, i(a), {
            minlength: _.minlength,
            maxlength: _.maxlength,
            type: _.showPassword ? I.value ? "text" : "password" : _.type,
            disabled: i(h),
            readonly: _.readonly,
            autocomplete: _.autocomplete,
            tabindex: _.tabindex,
            "aria-label": _.ariaLabel,
            placeholder: _.placeholder,
            style: _.inputStyle,
            form: _.form,
            autofocus: _.autofocus,
            role: _.containerRole,
            onCompositionstart: i(st),
            onCompositionupdate: i(lt),
            onCompositionend: i(it),
            onInput: pt,
            onChange: at,
            onKeydown: H
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Y(" suffix slot "),
          i(we) ? (k(), W("span", {
            key: 1,
            class: B(i(v).e("suffix"))
          }, [
            b("span", {
              class: B(i(v).e("suffix-inner"))
            }, [
              !i(ne) || !i(J) || !i(de) ? (k(), W(Je, { key: 0 }, [
                le(_.$slots, "suffix"),
                _.suffixIcon ? (k(), te(i(ke), {
                  key: 0,
                  class: B(i(v).e("icon"))
                }, {
                  default: q(() => [
                    (k(), te(Ze(_.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Y("v-if", !0)
              ], 64)) : Y("v-if", !0),
              i(ne) ? (k(), te(i(ke), {
                key: 1,
                class: B([i(v).e("icon"), i(v).e("clear")]),
                onMousedown: Ae(i(co), ["prevent"]),
                onClick: ae
              }, {
                default: q(() => [
                  Z(i(ga))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Y("v-if", !0),
              i(J) ? (k(), te(i(ke), {
                key: 2,
                class: B([i(v).e("icon"), i(v).e("password")]),
                onClick: mt
              }, {
                default: q(() => [
                  (k(), te(Ze(i(oe))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              i(de) ? (k(), W("span", {
                key: 3,
                class: B(i(v).e("count"))
              }, [
                b("span", {
                  class: B(i(v).e("count-inner"))
                }, D(i(G)) + " / " + D(_.maxlength), 3)
              ], 2)) : Y("v-if", !0),
              i(V) && i(K) && i(re) ? (k(), te(i(ke), {
                key: 4,
                class: B([
                  i(v).e("icon"),
                  i(v).e("validateIcon"),
                  i(v).is("loading", i(V) === "validating")
                ])
              }, {
                default: q(() => [
                  (k(), te(Ze(i(K))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0)
        ], 2),
        Y(" append slot "),
        _.$slots.append ? (k(), W("div", {
          key: 1,
          class: B(i(v).be("group", "append"))
        }, [
          le(_.$slots, "append")
        ], 2)) : Y("v-if", !0)
      ], 64)) : (k(), W(Je, { key: 1 }, [
        Y(" textarea "),
        b("textarea", Mn({
          id: i(p),
          ref_key: "textarea",
          ref: d,
          class: [i(g).e("inner"), i(v).is("focus", i(z))]
        }, i(a), {
          minlength: _.minlength,
          maxlength: _.maxlength,
          tabindex: _.tabindex,
          disabled: i(h),
          readonly: _.readonly,
          autocomplete: _.autocomplete,
          style: i(R),
          "aria-label": _.ariaLabel,
          placeholder: _.placeholder,
          form: _.form,
          autofocus: _.autofocus,
          rows: _.rows,
          role: _.containerRole,
          onCompositionstart: i(st),
          onCompositionupdate: i(lt),
          onCompositionend: i(it),
          onInput: pt,
          onFocus: i(U),
          onBlur: i(ee),
          onChange: at,
          onKeydown: H
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        i(de) ? (k(), W("span", {
          key: 0,
          style: Ue(T.value),
          class: B(i(v).e("count"))
        }, D(i(G)) + " / " + D(_.maxlength), 7)) : Y("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Oh = /* @__PURE__ */ Se(Th, [["__file", "input.vue"]]);
const Ah = At(Oh), Pn = 4, Ih = {
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
}, Lh = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), _a = Symbol("scrollbarContextKey"), Ph = Ce({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Nh = "Thumb", kh = /* @__PURE__ */ X({
  __name: "thumb",
  props: Ph,
  setup(e) {
    const t = e, n = ye(_a), o = $e("scrollbar");
    n || pa(Nh, "can not inject scrollbar context");
    const r = x(), a = x(), s = x({}), l = x(!1);
    let u = !1, c = !1, f = Re ? document.onselectstart : null;
    const p = L(() => Ih[t.vertical ? "vertical" : "horizontal"]), m = L(() => Lh({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h = L(() => r.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), v = (A) => {
      var O;
      if (A.stopPropagation(), A.ctrlKey || [1, 2].includes(A.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), E(A);
      const z = A.currentTarget;
      z && (s.value[p.value.axis] = z[p.value.offset] - (A[p.value.client] - z.getBoundingClientRect()[p.value.direction]));
    }, g = (A) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const O = Math.abs(A.target.getBoundingClientRect()[p.value.direction] - A[p.value.client]), z = a.value[p.value.offset] / 2, U = (O - z) * 100 * h.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = U * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (A) => {
      A.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (A) => {
      if (!r.value || !a.value || u === !1)
        return;
      const O = s.value[p.value.axis];
      if (!O)
        return;
      const z = (r.value.getBoundingClientRect()[p.value.direction] - A[p.value.client]) * -1, U = a.value[p.value.offset] - O, ee = (z - U) * 100 * h.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ee * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      u = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", C), y(), c && (l.value = !1);
    }, I = () => {
      c = !1, l.value = !!t.size;
    }, T = () => {
      c = !0, l.value = u;
    };
    zt(() => {
      y(), document.removeEventListener("mouseup", C);
    });
    const y = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Tt(Gt(n, "scrollbarElement"), "mousemove", I), Tt(Gt(n, "scrollbarElement"), "mouseleave", T), (A, O) => (k(), te(Gn, {
      name: i(o).b("fade"),
      persisted: ""
    }, {
      default: q(() => [
        xe(b("div", {
          ref_key: "instance",
          ref: r,
          class: B([i(o).e("bar"), i(o).is(i(p).key)]),
          onMousedown: g
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: B(i(o).e("thumb")),
            style: Ue(i(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [tn, A.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ll = /* @__PURE__ */ Se(kh, [["__file", "thumb.vue"]]);
const Rh = Ce({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), $h = /* @__PURE__ */ X({
  __name: "bar",
  props: Rh,
  setup(e, { expose: t }) {
    const n = e, o = ye(_a), r = x(0), a = x(0), s = x(""), l = x(""), u = x(1), c = x(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const h = m.offsetHeight - Pn, v = m.offsetWidth - Pn;
          a.value = m.scrollTop * 100 / h * u.value, r.value = m.scrollLeft * 100 / v * c.value;
        }
      },
      update: () => {
        const m = o?.wrapElement;
        if (!m)
          return;
        const h = m.offsetHeight - Pn, v = m.offsetWidth - Pn, g = h ** 2 / m.scrollHeight, E = v ** 2 / m.scrollWidth, d = Math.max(g, n.minSize), C = Math.max(E, n.minSize);
        u.value = g / (h - g) / (d / (h - d)), c.value = E / (v - E) / (C / (v - C)), l.value = d + Pn < h ? `${d}px` : "", s.value = C + Pn < v ? `${C}px` : "";
      }
    }), (m, h) => (k(), W(Je, null, [
      Z(ll, {
        move: r.value,
        ratio: c.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Z(ll, {
        move: a.value,
        ratio: u.value,
        size: l.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Mh = /* @__PURE__ */ Se($h, [["__file", "bar.vue"]]);
const Fh = Ce({
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
    type: se([String, Object, Array]),
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
}), Dh = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(he)
}, Vh = "ElScrollbar", xh = X({
  name: Vh
}), Bh = /* @__PURE__ */ X({
  ...xh,
  props: Fh,
  emits: Dh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = $e("scrollbar");
    let a, s, l = 0, u = 0;
    const c = x(), f = x(), p = x(), m = x(), h = L(() => {
      const y = {};
      return o.height && (y.height = Bn(o.height)), o.maxHeight && (y.maxHeight = Bn(o.maxHeight)), [o.wrapStyle, y];
    }), v = L(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), g = L(() => [r.e("view"), o.viewClass]), E = () => {
      var y;
      f.value && ((y = m.value) == null || y.handleScroll(f.value), l = f.value.scrollTop, u = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(y, A) {
      dt(y) ? f.value.scrollTo(y) : he(y) && he(A) && f.value.scrollTo(y, A);
    }
    const C = (y) => {
      he(y) && (f.value.scrollTop = y);
    }, I = (y) => {
      he(y) && (f.value.scrollLeft = y);
    }, T = () => {
      var y;
      (y = m.value) == null || y.update();
    };
    return ie(() => o.noresize, (y) => {
      y ? (a?.(), s?.()) : ({ stop: a } = kt(p, T), s = Tt("resize", T));
    }, { immediate: !0 }), ie(() => [o.maxHeight, o.height], () => {
      o.native || Ie(() => {
        var y;
        T(), f.value && ((y = m.value) == null || y.handleScroll(f.value));
      });
    }), xt(_a, En({
      scrollbarElement: c,
      wrapElement: f
    })), qu(() => {
      f.value && (f.value.scrollTop = l, f.value.scrollLeft = u);
    }), Ne(() => {
      o.native || Ie(() => {
        T();
      });
    }), Ml(() => T()), t({
      wrapRef: f,
      update: T,
      scrollTo: d,
      setScrollTop: C,
      setScrollLeft: I,
      handleScroll: E
    }), (y, A) => (k(), W("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: B(i(r).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: f,
        class: B(i(v)),
        style: Ue(i(h)),
        tabindex: y.tabindex,
        onScroll: E
      }, [
        (k(), te(Ze(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: p,
          class: B(i(g)),
          style: Ue(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: q(() => [
            le(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? Y("v-if", !0) : (k(), te(Mh, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: y.always,
        "min-size": y.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Uh = /* @__PURE__ */ Se(Bh, [["__file", "scrollbar.vue"]]);
const zh = At(Uh), wa = Symbol("popper"), Yi = Symbol("popperContent"), Wh = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], qi = Ce({
  role: {
    type: String,
    values: Wh,
    default: "tooltip"
  }
}), jh = X({
  name: "ElPopper",
  inheritAttrs: !1
}), Hh = /* @__PURE__ */ X({
  ...jh,
  props: qi,
  setup(e, { expose: t }) {
    const n = e, o = x(), r = x(), a = x(), s = x(), l = L(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: l
    };
    return t(u), xt(wa, u), (c, f) => le(c.$slots, "default");
  }
});
var Kh = /* @__PURE__ */ Se(Hh, [["__file", "popper.vue"]]);
const Xi = Ce({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Gh = X({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Yh = /* @__PURE__ */ X({
  ...Gh,
  props: Xi,
  setup(e, { expose: t }) {
    const n = e, o = $e("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = ye(Yi, void 0);
    return ie(() => n.arrowOffset, (l) => {
      r.value = l;
    }), zt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, u) => (k(), W("span", {
      ref_key: "arrowRef",
      ref: a,
      class: B(i(o).e("arrow")),
      style: Ue(i(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var qh = /* @__PURE__ */ Se(Yh, [["__file", "arrow.vue"]]);
const Zi = Ce({
  virtualRef: {
    type: se(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: se(Function)
  },
  onMouseleave: {
    type: se(Function)
  },
  onClick: {
    type: se(Function)
  },
  onKeydown: {
    type: se(Function)
  },
  onFocus: {
    type: se(Function)
  },
  onBlur: {
    type: se(Function)
  },
  onContextmenu: {
    type: se(Function)
  },
  id: String,
  open: Boolean
}), Ji = Symbol("elForwardRef"), Xh = (e) => {
  xt(Ji, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Zh = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Wr = (e) => {
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
}, Jh = "ElOnlyChild", Qh = X({
  name: Jh,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ye(Ji), a = Zh((o = r?.setForwardRef) != null ? o : co);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!l || l.length > 1)
        return null;
      const u = Qi(l);
      return u ? xe(Xu(u, n), [[a]]) : null;
    };
  }
});
function Qi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dt(n))
      switch (n.type) {
        case Zu:
          continue;
        case Rl:
        case "svg":
          return il(n);
        case Je:
          return Qi(n.children);
        default:
          return n;
      }
    return il(n);
  }
  return null;
}
function il(e) {
  const t = $e("only-child");
  return Z("span", {
    class: t.e("content")
  }, [e]);
}
const e0 = X({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), t0 = /* @__PURE__ */ X({
  ...e0,
  props: Zi,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ye(wa, void 0);
    Xh(r);
    const a = L(() => l.value ? n.id : void 0), s = L(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = L(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), u = L(() => l.value ? `${n.open}` : void 0);
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
    return Ne(() => {
      ie(() => n.virtualRef, (p) => {
        p && (r.value = Xt(p));
      }, {
        immediate: !0
      }), ie(r, (p, m) => {
        c?.(), c = void 0, St(p) && (f.forEach((h) => {
          var v;
          const g = n[h];
          g && (p.addEventListener(h.slice(2).toLowerCase(), g), (v = m?.removeEventListener) == null || v.call(m, h.slice(2).toLowerCase(), g));
        }), Wr(p) && (c = ie([a, s, l, u], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, g) => {
            Qt(h[g]) ? p.removeAttribute(v) : p.setAttribute(v, h[g]);
          });
        }, { immediate: !0 }))), St(m) && Wr(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), zt(() => {
      if (c?.(), c = void 0, r.value && St(r.value)) {
        const p = r.value;
        f.forEach((m) => {
          const h = n[m];
          h && p.removeEventListener(m.slice(2).toLowerCase(), h);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (p, m) => p.virtualTriggering ? Y("v-if", !0) : (k(), te(i(Qh), Mn({ key: 0 }, p.$attrs, {
      "aria-controls": i(a),
      "aria-describedby": i(s),
      "aria-expanded": i(u),
      "aria-haspopup": i(l)
    }), {
      default: q(() => [
        le(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var n0 = /* @__PURE__ */ Se(t0, [["__file", "trigger.vue"]]);
const Tr = "focus-trap.focus-after-trapped", Or = "focus-trap.focus-after-released", o0 = "focus-trap.focusout-prevented", ul = {
  cancelable: !0,
  bubbles: !1
}, r0 = {
  cancelable: !0,
  bubbles: !1
}, cl = "focusAfterTrapped", dl = "focusAfterReleased", a0 = Symbol("elFocusTrap"), Ea = x(), fr = x(0), Ca = x(0);
let Po = 0;
const eu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, fl = (e, t) => {
  for (const n of e)
    if (!s0(n, t))
      return n;
}, s0 = (e, t) => {
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
}, l0 = (e) => {
  const t = eu(e), n = fl(t, e), o = fl(t.reverse(), e);
  return [n, o];
}, i0 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    St(e) && !Wr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Ca.value = window.performance.now(), e !== n && i0(e) && t && e.select(), St(e) && o && e.removeAttribute("tabindex");
  }
};
function pl(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const u0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = pl(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = pl(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, c0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Ht(o, t), document.activeElement !== n)
      return;
}, ml = u0(), d0 = () => fr.value > Ca.value, No = () => {
  Ea.value = "pointer", fr.value = window.performance.now();
}, vl = () => {
  Ea.value = "keyboard", fr.value = window.performance.now();
}, f0 = () => (Ne(() => {
  Po === 0 && (document.addEventListener("mousedown", No), document.addEventListener("touchstart", No), document.addEventListener("keydown", vl)), Po++;
}), zt(() => {
  Po--, Po <= 0 && (document.removeEventListener("mousedown", No), document.removeEventListener("touchstart", No), document.removeEventListener("keydown", vl));
}), {
  focusReason: Ea,
  lastUserFocusTimestamp: fr,
  lastAutomatedFocusTimestamp: Ca
}), ko = (e) => new CustomEvent(o0, {
  ...r0,
  detail: e
}), Dt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Rn = [];
const gl = (e) => {
  e.code === Dt.esc && Rn.forEach((t) => t(e));
}, p0 = (e) => {
  Ne(() => {
    Rn.length === 0 && document.addEventListener("keydown", gl), Re && Rn.push(e);
  }), zt(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && Re && document.removeEventListener("keydown", gl);
  });
}, m0 = X({
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
    cl,
    dl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let o, r;
    const { focusReason: a } = f0();
    p0((v) => {
      e.trapped && !s.paused && t("release-requested", v);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: g, altKey: E, ctrlKey: d, metaKey: C, currentTarget: I, shiftKey: T } = v, { loop: y } = e, A = g === Dt.tab && !E && !d && !C, O = document.activeElement;
      if (A && O) {
        const z = I, [U, ee] = l0(z);
        if (U && ee) {
          if (!T && O === ee) {
            const V = ko({
              focusReason: a.value
            });
            t("focusout-prevented", V), V.defaultPrevented || (v.preventDefault(), y && Ht(U, !0));
          } else if (T && [U, z].includes(O)) {
            const V = ko({
              focusReason: a.value
            });
            t("focusout-prevented", V), V.defaultPrevented || (v.preventDefault(), y && Ht(ee, !0));
          }
        } else if (O === z) {
          const V = ko({
            focusReason: a.value
          });
          t("focusout-prevented", V), V.defaultPrevented || v.preventDefault();
        }
      }
    };
    xt(a0, {
      focusTrapRef: n,
      onKeydown: l
    }), ie(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), ie([n], ([v], [g]) => {
      v && (v.addEventListener("keydown", l), v.addEventListener("focusin", f), v.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", l), g.removeEventListener("focusin", f), g.removeEventListener("focusout", p));
    });
    const u = (v) => {
      t(cl, v);
    }, c = (v) => t(dl, v), f = (v) => {
      const g = i(n);
      if (!g)
        return;
      const E = v.target, d = v.relatedTarget, C = E && g.contains(E);
      e.trapped || d && g.contains(d) || (o = d), C && t("focusin", v), !s.paused && e.trapped && (C ? r = E : Ht(r, !0));
    }, p = (v) => {
      const g = i(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const E = v.relatedTarget;
          !Qt(E) && !g.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = ko({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ht(r, !0);
            }
          }, 0);
        } else {
          const E = v.target;
          E && g.contains(E) || t("focusout", v);
        }
    };
    async function m() {
      await Ie();
      const v = i(n);
      if (v) {
        ml.push(s);
        const g = v.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !v.contains(g)) {
          const d = new Event(Tr, ul);
          v.addEventListener(Tr, u), v.dispatchEvent(d), d.defaultPrevented || Ie(() => {
            let C = e.focusStartEl;
            Xe(C) || (Ht(C), document.activeElement !== C && (C = "first")), C === "first" && c0(eu(v), !0), (document.activeElement === g || C === "container") && Ht(v);
          });
        }
      }
    }
    function h() {
      const v = i(n);
      if (v) {
        v.removeEventListener(Tr, u);
        const g = new CustomEvent(Or, {
          ...ul,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(Or, c), v.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !d0() || v.contains(document.activeElement)) && Ht(o ?? document.body), v.removeEventListener(Or, c), ml.remove(s);
      }
    }
    return Ne(() => {
      e.trapped && m(), ie(() => e.trapped, (v) => {
        v ? m() : h();
      });
    }), zt(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function v0(e, t, n, o, r, a) {
  return le(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var g0 = /* @__PURE__ */ Se(m0, [["render", v0], ["__file", "focus-trap.vue"]]), tt = "top", ht = "bottom", yt = "right", nt = "left", Sa = "auto", _o = [tt, ht, yt, nt], Un = "start", mo = "end", h0 = "clippingParents", tu = "viewport", Jn = "popper", y0 = "reference", hl = _o.reduce(function(e, t) {
  return e.concat([t + "-" + Un, t + "-" + mo]);
}, []), pr = [].concat(_o, [Sa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Un, t + "-" + mo]);
}, []), b0 = "beforeRead", _0 = "read", w0 = "afterRead", E0 = "beforeMain", C0 = "main", S0 = "afterMain", T0 = "beforeWrite", O0 = "write", A0 = "afterWrite", I0 = [b0, _0, w0, E0, C0, S0, T0, O0, A0];
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ft(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Sn(e) {
  var t = ft(e).Element;
  return e instanceof t || e instanceof Element;
}
function gt(e) {
  var t = ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ta(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function L0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !gt(a) || !Ut(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var l = r[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function P0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = s.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !gt(r) || !Ut(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(u) {
        r.removeAttribute(u);
      }));
    });
  };
}
var nu = { name: "applyStyles", enabled: !0, phase: "write", fn: L0, effect: P0, requires: ["computeStyles"] };
function Vt(e) {
  return e.split("-")[0];
}
var wn = Math.max, Xo = Math.min, zn = Math.round;
function jr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ou() {
  return !/^((?!chrome|android).)*safari/i.test(jr());
}
function Wn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && gt(e) && (r = e.offsetWidth > 0 && zn(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && zn(o.height) / e.offsetHeight || 1);
  var s = Sn(e) ? ft(e) : window, l = s.visualViewport, u = !ou() && n, c = (o.left + (u && l ? l.offsetLeft : 0)) / r, f = (o.top + (u && l ? l.offsetTop : 0)) / a, p = o.width / r, m = o.height / a;
  return { width: p, height: m, top: f, right: c + p, bottom: f + m, left: c, x: c, y: f };
}
function Oa(e) {
  var t = Wn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function ru(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ta(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function on(e) {
  return ft(e).getComputedStyle(e);
}
function N0(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function hn(e) {
  return ((Sn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function mr(e) {
  return Ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ta(e) ? e.host : null) || hn(e);
}
function yl(e) {
  return !gt(e) || on(e).position === "fixed" ? null : e.offsetParent;
}
function k0(e) {
  var t = /firefox/i.test(jr()), n = /Trident/i.test(jr());
  if (n && gt(e)) {
    var o = on(e);
    if (o.position === "fixed") return null;
  }
  var r = mr(e);
  for (Ta(r) && (r = r.host); gt(r) && ["html", "body"].indexOf(Ut(r)) < 0; ) {
    var a = on(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function wo(e) {
  for (var t = ft(e), n = yl(e); n && N0(n) && on(n).position === "static"; ) n = yl(n);
  return n && (Ut(n) === "html" || Ut(n) === "body" && on(n).position === "static") ? t : n || k0(e) || t;
}
function Aa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function no(e, t, n) {
  return wn(e, Xo(t, n));
}
function R0(e, t, n) {
  var o = no(e, t, n);
  return o > n ? n : o;
}
function au() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function su(e) {
  return Object.assign({}, au(), e);
}
function lu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var $0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, su(typeof e != "number" ? e : lu(e, _o));
};
function M0(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Vt(n.placement), u = Aa(l), c = [nt, yt].indexOf(l) >= 0, f = c ? "height" : "width";
  if (!(!a || !s)) {
    var p = $0(r.padding, n), m = Oa(a), h = u === "y" ? tt : nt, v = u === "y" ? ht : yt, g = n.rects.reference[f] + n.rects.reference[u] - s[u] - n.rects.popper[f], E = s[u] - n.rects.reference[u], d = wo(a), C = d ? u === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, I = g / 2 - E / 2, T = p[h], y = C - m[f] - p[v], A = C / 2 - m[f] / 2 + I, O = no(T, A, y), z = u;
    n.modifiersData[o] = (t = {}, t[z] = O, t.centerOffset = O - A, t);
  }
}
function F0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || ru(t.elements.popper, r) && (t.elements.arrow = r));
}
var D0 = { name: "arrow", enabled: !0, phase: "main", fn: M0, effect: F0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function jn(e) {
  return e.split("-")[1];
}
var V0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function x0(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: zn(n * r) / r || 0, y: zn(o * r) / r || 0 };
}
function bl(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, l = e.position, u = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, v = s.y, g = v === void 0 ? 0 : v, E = typeof f == "function" ? f({ x: h, y: g }) : { x: h, y: g };
  h = E.x, g = E.y;
  var d = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), I = nt, T = tt, y = window;
  if (c) {
    var A = wo(n), O = "clientHeight", z = "clientWidth";
    if (A === ft(n) && (A = hn(n), on(A).position !== "static" && l === "absolute" && (O = "scrollHeight", z = "scrollWidth")), A = A, r === tt || (r === nt || r === yt) && a === mo) {
      T = ht;
      var U = p && A === y && y.visualViewport ? y.visualViewport.height : A[O];
      g -= U - o.height, g *= u ? 1 : -1;
    }
    if (r === nt || (r === tt || r === ht) && a === mo) {
      I = yt;
      var ee = p && A === y && y.visualViewport ? y.visualViewport.width : A[z];
      h -= ee - o.width, h *= u ? 1 : -1;
    }
  }
  var re = Object.assign({ position: l }, c && V0), V = f === !0 ? x0({ x: h, y: g }, ft(n)) : { x: h, y: g };
  if (h = V.x, g = V.y, u) {
    var K;
    return Object.assign({}, re, (K = {}, K[T] = C ? "0" : "", K[I] = d ? "0" : "", K.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", K));
  }
  return Object.assign({}, re, (t = {}, t[T] = C ? g + "px" : "", t[I] = d ? h + "px" : "", t.transform = "", t));
}
function B0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, u = l === void 0 ? !0 : l, c = { placement: Vt(t.placement), variation: jn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bl(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bl(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var iu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: B0, data: {} }, Ro = { passive: !0 };
function U0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, s = o.resize, l = s === void 0 ? !0 : s, u = ft(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ro);
  }), l && u.addEventListener("resize", n.update, Ro), function() {
    a && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ro);
    }), l && u.removeEventListener("resize", n.update, Ro);
  };
}
var uu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: U0, data: {} }, z0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return z0[t];
  });
}
var W0 = { start: "end", end: "start" };
function _l(e) {
  return e.replace(/start|end/g, function(t) {
    return W0[t];
  });
}
function Ia(e) {
  var t = ft(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function La(e) {
  return Wn(hn(e)).left + Ia(e).scrollLeft;
}
function j0(e, t) {
  var n = ft(e), o = hn(e), r = n.visualViewport, a = o.clientWidth, s = o.clientHeight, l = 0, u = 0;
  if (r) {
    a = r.width, s = r.height;
    var c = ou();
    (c || !c && t === "fixed") && (l = r.offsetLeft, u = r.offsetTop);
  }
  return { width: a, height: s, x: l + La(e), y: u };
}
function H0(e) {
  var t, n = hn(e), o = Ia(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = wn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = wn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + La(e), u = -o.scrollTop;
  return on(r || n).direction === "rtl" && (l += wn(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: l, y: u };
}
function Pa(e) {
  var t = on(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function cu(e) {
  return ["html", "body", "#document"].indexOf(Ut(e)) >= 0 ? e.ownerDocument.body : gt(e) && Pa(e) ? e : cu(mr(e));
}
function oo(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = cu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ft(o), s = r ? [a].concat(a.visualViewport || [], Pa(o) ? o : []) : o, l = t.concat(s);
  return r ? l : l.concat(oo(mr(s)));
}
function Hr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function K0(e, t) {
  var n = Wn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wl(e, t, n) {
  return t === tu ? Hr(j0(e, n)) : Sn(t) ? K0(t, n) : Hr(H0(hn(e)));
}
function G0(e) {
  var t = oo(mr(e)), n = ["absolute", "fixed"].indexOf(on(e).position) >= 0, o = n && gt(e) ? wo(e) : e;
  return Sn(o) ? t.filter(function(r) {
    return Sn(r) && ru(r, o) && Ut(r) !== "body";
  }) : [];
}
function Y0(e, t, n, o) {
  var r = t === "clippingParents" ? G0(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], l = a.reduce(function(u, c) {
    var f = wl(e, c, o);
    return u.top = wn(f.top, u.top), u.right = Xo(f.right, u.right), u.bottom = Xo(f.bottom, u.bottom), u.left = wn(f.left, u.left), u;
  }, wl(e, s, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function du(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Vt(o) : null, a = o ? jn(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (r) {
    case tt:
      u = { x: s, y: t.y - n.height };
      break;
    case ht:
      u = { x: s, y: t.y + t.height };
      break;
    case yt:
      u = { x: t.x + t.width, y: l };
      break;
    case nt:
      u = { x: t.x - n.width, y: l };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = r ? Aa(r) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (a) {
      case Un:
        u[c] = u[c] - (t[f] / 2 - n[f] / 2);
        break;
      case mo:
        u[c] = u[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function vo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, u = l === void 0 ? h0 : l, c = n.rootBoundary, f = c === void 0 ? tu : c, p = n.elementContext, m = p === void 0 ? Jn : p, h = n.altBoundary, v = h === void 0 ? !1 : h, g = n.padding, E = g === void 0 ? 0 : g, d = su(typeof E != "number" ? E : lu(E, _o)), C = m === Jn ? y0 : Jn, I = e.rects.popper, T = e.elements[v ? C : m], y = Y0(Sn(T) ? T : T.contextElement || hn(e.elements.popper), u, f, s), A = Wn(e.elements.reference), O = du({ reference: A, element: I, placement: r }), z = Hr(Object.assign({}, I, O)), U = m === Jn ? z : A, ee = { top: y.top - U.top + d.top, bottom: U.bottom - y.bottom + d.bottom, left: y.left - U.left + d.left, right: U.right - y.right + d.right }, re = e.modifiersData.offset;
  if (m === Jn && re) {
    var V = re[r];
    Object.keys(ee).forEach(function(K) {
      var oe = [yt, ht].indexOf(K) >= 0 ? 1 : -1, P = [tt, ht].indexOf(K) >= 0 ? "y" : "x";
      ee[K] += V[P] * oe;
    });
  }
  return ee;
}
function q0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? pr : u, f = jn(o), p = f ? l ? hl : hl.filter(function(v) {
    return jn(v) === f;
  }) : _o, m = p.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  m.length === 0 && (m = p);
  var h = m.reduce(function(v, g) {
    return v[g] = vo(e, { placement: g, boundary: r, rootBoundary: a, padding: s })[Vt(g)], v;
  }, {});
  return Object.keys(h).sort(function(v, g) {
    return h[v] - h[g];
  });
}
function X0(e) {
  if (Vt(e) === Sa) return [];
  var t = Vo(e);
  return [_l(e), t, _l(t)];
}
function Z0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, l = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, v = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, E = t.options.placement, d = Vt(E), C = d === E, I = u || (C || !v ? [Vo(E)] : X0(E)), T = [E].concat(I).reduce(function(We, Be) {
      return We.concat(Vt(Be) === Sa ? q0(t, { placement: Be, boundary: f, rootBoundary: p, padding: c, flipVariations: v, allowedAutoPlacements: g }) : Be);
    }, []), y = t.rects.reference, A = t.rects.popper, O = /* @__PURE__ */ new Map(), z = !0, U = T[0], ee = 0; ee < T.length; ee++) {
      var re = T[ee], V = Vt(re), K = jn(re) === Un, oe = [tt, ht].indexOf(V) >= 0, P = oe ? "width" : "height", R = vo(t, { placement: re, boundary: f, rootBoundary: p, altBoundary: m, padding: c }), F = oe ? K ? yt : nt : K ? ht : tt;
      y[P] > A[P] && (F = Vo(F));
      var ne = Vo(F), J = [];
      if (a && J.push(R[V] <= 0), l && J.push(R[F] <= 0, R[ne] <= 0), J.every(function(We) {
        return We;
      })) {
        U = re, z = !1;
        break;
      }
      O.set(re, J);
    }
    if (z) for (var de = v ? 3 : 1, G = function(We) {
      var Be = T.find(function(je) {
        var He = O.get(je);
        if (He) return He.slice(0, We).every(function(be) {
          return be;
        });
      });
      if (Be) return U = Be, "break";
    }, Me = de; Me > 0; Me--) {
      var we = G(Me);
      if (we === "break") break;
    }
    t.placement !== U && (t.modifiersData[o]._skip = !0, t.placement = U, t.reset = !0);
  }
}
var J0 = { name: "flip", enabled: !0, phase: "main", fn: Z0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function El(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Cl(e) {
  return [tt, yt, ht, nt].some(function(t) {
    return e[t] >= 0;
  });
}
function Q0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = vo(t, { elementContext: "reference" }), l = vo(t, { altBoundary: !0 }), u = El(s, o), c = El(l, r, a), f = Cl(u), p = Cl(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var ey = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Q0 };
function ty(e, t, n) {
  var o = Vt(e), r = [nt, tt].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * r, [nt, yt].indexOf(o) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function ny(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = pr.reduce(function(f, p) {
    return f[p] = ty(p, t.rects, a), f;
  }, {}), l = s[t.placement], u = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
}
var oy = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ny };
function ry(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = du({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var fu = { name: "popperOffsets", enabled: !0, phase: "read", fn: ry, data: {} };
function ay(e) {
  return e === "x" ? "y" : "x";
}
function sy(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, l = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, h = m === void 0 ? !0 : m, v = n.tetherOffset, g = v === void 0 ? 0 : v, E = vo(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: f }), d = Vt(t.placement), C = jn(t.placement), I = !C, T = Aa(d), y = ay(T), A = t.modifiersData.popperOffsets, O = t.rects.reference, z = t.rects.popper, U = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, ee = typeof U == "number" ? { mainAxis: U, altAxis: U } : Object.assign({ mainAxis: 0, altAxis: 0 }, U), re = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = { x: 0, y: 0 };
  if (A) {
    if (a) {
      var K, oe = T === "y" ? tt : nt, P = T === "y" ? ht : yt, R = T === "y" ? "height" : "width", F = A[T], ne = F + E[oe], J = F - E[P], de = h ? -z[R] / 2 : 0, G = C === Un ? O[R] : z[R], Me = C === Un ? -z[R] : -O[R], we = t.elements.arrow, We = h && we ? Oa(we) : { width: 0, height: 0 }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : au(), je = Be[oe], He = Be[P], be = no(0, O[R], We[R]), rt = I ? O[R] / 2 - de - be - je - ee.mainAxis : G - be - je - ee.mainAxis, pt = I ? -O[R] / 2 + de + be + He + ee.mainAxis : Me + be + He + ee.mainAxis, at = t.elements.arrow && wo(t.elements.arrow), bt = at ? T === "y" ? at.clientTop || 0 : at.clientLeft || 0 : 0, st = (K = re?.[T]) != null ? K : 0, lt = F + rt - st - bt, it = F + pt - st, mt = no(h ? Xo(ne, lt) : ne, F, h ? wn(J, it) : J);
      A[T] = mt, V[T] = mt - F;
    }
    if (l) {
      var It, w = T === "x" ? tt : nt, S = T === "x" ? ht : yt, M = A[y], H = y === "y" ? "height" : "width", fe = M + E[w], ae = M - E[S], _ = [tt, nt].indexOf(d) !== -1, $ = (It = re?.[y]) != null ? It : 0, ue = _ ? fe : M - O[H] - z[H] - $ + ee.altAxis, ve = _ ? M + O[H] + z[H] - $ - ee.altAxis : ae, Ke = h && _ ? R0(ue, M, ve) : no(h ? ue : fe, M, h ? ve : ae);
      A[y] = Ke, V[y] = Ke - M;
    }
    t.modifiersData[o] = V;
  }
}
var ly = { name: "preventOverflow", enabled: !0, phase: "main", fn: sy, requiresIfExists: ["offset"] };
function iy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function uy(e) {
  return e === ft(e) || !gt(e) ? Ia(e) : iy(e);
}
function cy(e) {
  var t = e.getBoundingClientRect(), n = zn(t.width) / e.offsetWidth || 1, o = zn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function dy(e, t, n) {
  n === void 0 && (n = !1);
  var o = gt(t), r = gt(t) && cy(t), a = hn(t), s = Wn(e, r, n), l = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((Ut(t) !== "body" || Pa(a)) && (l = uy(t)), gt(t) ? (u = Wn(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = La(a))), { x: s.left + l.scrollLeft - u.x, y: s.top + l.scrollTop - u.y, width: s.width, height: s.height };
}
function fy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && r(u);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function py(e) {
  var t = fy(e);
  return I0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function my(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function vy(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Sl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Tl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Na(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? Sl : r;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Sl, a), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, f = [], p = !1, m = { state: c, setOptions: function(g) {
      var E = typeof g == "function" ? g(c.options) : g;
      v(), c.options = Object.assign({}, a, c.options, E), c.scrollParents = { reference: Sn(s) ? oo(s) : s.contextElement ? oo(s.contextElement) : [], popper: oo(l) };
      var d = py(vy([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = d.filter(function(C) {
        return C.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = c.elements, E = g.reference, d = g.popper;
        if (Tl(E, d)) {
          c.rects = { reference: dy(E, wo(d), c.options.strategy === "fixed"), popper: Oa(d) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(z) {
            return c.modifiersData[z.name] = Object.assign({}, z.data);
          });
          for (var C = 0; C < c.orderedModifiers.length; C++) {
            if (c.reset === !0) {
              c.reset = !1, C = -1;
              continue;
            }
            var I = c.orderedModifiers[C], T = I.fn, y = I.options, A = y === void 0 ? {} : y, O = I.name;
            typeof T == "function" && (c = T({ state: c, options: A, name: O, instance: m }) || c);
          }
        }
      }
    }, update: my(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(c);
      });
    }), destroy: function() {
      v(), p = !0;
    } };
    if (!Tl(s, l)) return m;
    m.setOptions(u).then(function(g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var E = g.name, d = g.options, C = d === void 0 ? {} : d, I = g.effect;
        if (typeof I == "function") {
          var T = I({ state: c, name: E, instance: m, options: C }), y = function() {
          };
          f.push(T || y);
        }
      });
    }
    function v() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return m;
  };
}
Na();
var gy = [uu, fu, iu, nu];
Na({ defaultModifiers: gy });
var hy = [uu, fu, iu, nu, oy, J0, ly, D0, ey], yy = Na({ defaultModifiers: hy });
const by = ["fixed", "absolute"], _y = Ce({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: se(Array),
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
    values: pr,
    default: "bottom"
  },
  popperOptions: {
    type: se(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: by,
    default: "absolute"
  }
}), pu = Ce({
  ..._y,
  id: String,
  style: {
    type: se([String, Array, Object])
  },
  className: {
    type: se([String, Array, Object])
  },
  effect: {
    type: se(String),
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
    type: se([String, Array, Object])
  },
  popperStyle: {
    type: se([String, Array, Object])
  },
  referenceEl: {
    type: se(Object)
  },
  triggerTargetEl: {
    type: se(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...In(["ariaLabel"])
}), wy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Ey = (e, t) => {
  const n = x(!1), o = x();
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
}, Cy = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Ty(e), ...t]
  };
  return Oy(a, r?.modifiers), a;
}, Sy = (e) => {
  if (Re)
    return Xt(e);
};
function Ty(e) {
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
function Oy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Ay = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = Iy(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, r = L(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: p } = i(n);
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
  }), a = fn(), s = x({
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
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return ie(r, (u) => {
    const c = i(a);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), ie([e, t], ([u, c]) => {
    l(), !(!u || !c) && (a.value = yy(u, c, i(r)));
  }), zt(() => {
    l();
  }), {
    state: L(() => {
      var u;
      return { ...((u = i(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: L(() => i(s).styles),
    attributes: L(() => i(s).attributes),
    update: () => {
      var u;
      return (u = i(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = i(a)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: L(() => i(a))
  };
};
function Iy(e) {
  const t = Object.keys(e.elements), n = Ho(t.map((r) => [r, e.styles[r] || {}])), o = Ho(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const Ly = 0, Py = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = ye(wa, void 0), a = x(), s = x(), l = L(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = L(() => {
    var d;
    const C = i(a), I = (d = i(s)) != null ? d : Ly;
    return {
      name: "arrow",
      enabled: !Gv(C),
      options: {
        element: C,
        padding: I
      }
    };
  }), c = L(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...Cy(e, [
      i(u),
      i(l)
    ])
  })), f = L(() => Sy(e.referenceEl) || i(o)), { attributes: p, state: m, styles: h, update: v, forceUpdate: g, instanceRef: E } = Ay(f, n, c);
  return ie(E, (d) => t.value = d), Ne(() => {
    ie(() => {
      var d;
      return (d = i(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: m,
    styles: h,
    role: r,
    forceUpdate: g,
    update: v
  };
}, Ny = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Ii(), a = $e("popper"), s = L(() => i(t).popper), l = x(he(e.zIndex) ? e.zIndex : r()), u = L(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = L(() => [
    { zIndex: i(l) },
    i(n).popper,
    e.popperStyle || {}
  ]), f = L(() => o.value === "dialog" ? "false" : void 0), p = L(() => i(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: u,
    contentStyle: c,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = he(e.zIndex) ? e.zIndex : r();
    }
  };
}, ky = X({
  name: "ElPopperContent"
}), Ry = /* @__PURE__ */ X({
  ...ky,
  props: pu,
  emits: wy,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: l,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = Ey(o, n), { attributes: p, arrowRef: m, contentRef: h, styles: v, instanceRef: g, role: E, update: d } = Py(o), {
      ariaModal: C,
      arrowStyle: I,
      contentAttrs: T,
      contentClass: y,
      contentStyle: A,
      updateZIndex: O
    } = Ny(o, {
      styles: v,
      attributes: p,
      role: E
    }), z = ye(qo, void 0), U = x();
    xt(Yi, {
      arrowStyle: I,
      arrowRef: m,
      arrowOffset: U
    }), z && xt(qo, {
      ...z,
      addInputId: co,
      removeInputId: co
    });
    let ee;
    const re = (K = !0) => {
      d(), K && O();
    }, V = () => {
      re(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return Ne(() => {
      ie(() => o.triggerTargetEl, (K, oe) => {
        ee?.(), ee = void 0;
        const P = i(K || h.value), R = i(oe || h.value);
        St(P) && (ee = ie([E, () => o.ariaLabel, C, () => o.id], (F) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ne, J) => {
            Qt(F[J]) ? P.removeAttribute(ne) : P.setAttribute(ne, F[J]);
          });
        }, { immediate: !0 })), R !== P && St(R) && ["role", "aria-label", "aria-modal", "id"].forEach((F) => {
          R.removeAttribute(F);
        });
      }, { immediate: !0 }), ie(() => o.visible, V, { immediate: !0 });
    }), zt(() => {
      ee?.(), ee = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: g,
      updatePopper: re,
      contentStyle: A
    }), (K, oe) => (k(), W("div", Mn({
      ref_key: "contentRef",
      ref: h
    }, i(T), {
      style: i(A),
      class: i(y),
      tabindex: "-1",
      onMouseenter: (P) => K.$emit("mouseenter", P),
      onMouseleave: (P) => K.$emit("mouseleave", P)
    }), [
      Z(i(g0), {
        trapped: i(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": i(h),
        "focus-start-el": i(r),
        onFocusAfterTrapped: i(l),
        onFocusAfterReleased: i(s),
        onFocusin: i(u),
        onFocusoutPrevented: i(c),
        onReleaseRequested: i(f)
      }, {
        default: q(() => [
          le(K.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var $y = /* @__PURE__ */ Se(Ry, [["__file", "content.vue"]]);
const My = At(Kh), ka = Symbol("elTooltip");
function Ol() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return yo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Fy = Ce({
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
}), Dy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = Ol(), {
    registerTimeout: s,
    cancelTimeout: l
  } = Ol();
  return {
    onOpen: (f) => {
      a(() => {
        o(f);
        const p = i(n);
        he(p) && p > 0 && s(() => {
          r(f);
        }, p);
      }, i(e));
    },
    onClose: (f) => {
      l(), a(() => {
        r(f);
      }, i(t));
    }
  };
}, Ra = Ce({
  ...Fy,
  ...pu,
  appendTo: {
    type: se([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: se(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...In(["ariaLabel"])
}), mu = Ce({
  ...Zi,
  disabled: Boolean,
  trigger: {
    type: se([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: se(Array),
    default: () => [Dt.enter, Dt.numpadEnter, Dt.space]
  }
}), Vy = ir({
  type: se(Boolean),
  default: null
}), xy = ir({
  type: se(Function)
}), By = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Vy,
    [n]: xy
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: l,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: f,
      onHide: p
    }) => {
      const m = Qe(), { emit: h } = m, v = m.props, g = L(() => Oe(v[n])), E = L(() => v[e] === null), d = (O) => {
        s.value !== !0 && (s.value = !0, l && (l.value = O), Oe(f) && f(O));
      }, C = (O) => {
        s.value !== !1 && (s.value = !1, l && (l.value = O), Oe(p) && p(O));
      }, I = (O) => {
        if (v.disabled === !0 || Oe(c) && !c())
          return;
        const z = g.value && Re;
        z && h(t, !0), (E.value || !z) && d(O);
      }, T = (O) => {
        if (v.disabled === !0 || !Re)
          return;
        const z = g.value && Re;
        z && h(t, !1), (E.value || !z) && C(O);
      }, y = (O) => {
        pn(O) && (v.disabled && O ? g.value && h(t, !1) : s.value !== O && (O ? d() : C()));
      }, A = () => {
        s.value ? T() : I();
      };
      return ie(() => v[e], y), u && m.appContext.config.globalProperties.$route !== void 0 && ie(() => ({
        ...m.proxy.$route
      }), () => {
        u.value && s.value && T();
      }), Ne(() => {
        y(v[e]);
      }), {
        hide: T,
        show: I,
        toggle: A,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Uy,
  useModelToggleEmits: zy,
  useModelToggle: Wy
} = By("visible"), jy = Ce({
  ...qi,
  ...Uy,
  ...Ra,
  ...mu,
  ...Xi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Hy = [
  ...zy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Ky = (e, t) => Rt(e) ? e.includes(t) : e === t, Nn = (e, t, n) => (o) => {
  Ky(i(e), t) && n(o);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, Gy = X({
  name: "ElTooltipTrigger"
}), Yy = /* @__PURE__ */ X({
  ...Gy,
  props: mu,
  setup(e, { expose: t }) {
    const n = e, o = $e("tooltip"), { controlled: r, id: a, open: s, onOpen: l, onClose: u, onToggle: c } = ye(ka, void 0), f = x(null), p = () => {
      if (i(r) || n.disabled)
        return !0;
    }, m = Gt(n, "trigger"), h = Kt(p, Nn(m, "hover", l)), v = Kt(p, Nn(m, "hover", u)), g = Kt(p, Nn(m, "click", (T) => {
      T.button === 0 && c(T);
    })), E = Kt(p, Nn(m, "focus", l)), d = Kt(p, Nn(m, "focus", u)), C = Kt(p, Nn(m, "contextmenu", (T) => {
      T.preventDefault(), c(T);
    })), I = Kt(p, (T) => {
      const { code: y } = T;
      n.triggerKeys.includes(y) && (T.preventDefault(), c(T));
    });
    return t({
      triggerRef: f
    }), (T, y) => (k(), te(i(n0), {
      id: i(a),
      "virtual-ref": T.virtualRef,
      open: i(s),
      "virtual-triggering": T.virtualTriggering,
      class: B(i(o).e("trigger")),
      onBlur: i(d),
      onClick: i(g),
      onContextmenu: i(C),
      onFocus: i(E),
      onMouseenter: i(h),
      onMouseleave: i(v),
      onKeydown: i(I)
    }, {
      default: q(() => [
        le(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var qy = /* @__PURE__ */ Se(Yy, [["__file", "trigger.vue"]]);
const Xy = Ce({
  to: {
    type: se([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Zy = /* @__PURE__ */ X({
  __name: "teleport",
  props: Xy,
  setup(e) {
    return (t, n) => t.disabled ? le(t.$slots, "default", { key: 0 }) : (k(), te(Ju, {
      key: 1,
      to: t.to
    }, [
      le(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Jy = /* @__PURE__ */ Se(Zy, [["__file", "teleport.vue"]]);
const Qy = At(Jy), vu = () => {
  const e = ra(), t = ji(), n = L(() => `${e.value}-popper-container-${t.prefix}`), o = L(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, eb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, tb = () => {
  const { id: e, selector: t } = vu();
  return Qu(() => {
    Re && (document.body.querySelector(t.value) || eb(e.value));
  }), {
    id: e,
    selector: t
  };
}, nb = X({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ob = /* @__PURE__ */ X({
  ...nb,
  props: Ra,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = vu(), r = $e("tooltip"), a = x();
    let s;
    const {
      controlled: l,
      id: u,
      open: c,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: h,
      onHide: v,
      onBeforeShow: g,
      onBeforeHide: E
    } = ye(ka, void 0), d = L(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = L(() => n.persistent);
    zt(() => {
      s?.();
    });
    const I = L(() => i(C) ? !0 : i(c)), T = L(() => n.disabled ? !1 : i(c)), y = L(() => n.appendTo || o.value), A = L(() => {
      var F;
      return (F = n.style) != null ? F : {};
    }), O = x(!0), z = () => {
      v(), R() && Ht(document.body), O.value = !0;
    }, U = () => {
      if (i(l))
        return !0;
    }, ee = Kt(U, () => {
      n.enterable && i(f) === "hover" && m();
    }), re = Kt(U, () => {
      i(f) === "hover" && p();
    }), V = () => {
      var F, ne;
      (ne = (F = a.value) == null ? void 0 : F.updatePopper) == null || ne.call(F), g?.();
    }, K = () => {
      E?.();
    }, oe = () => {
      h(), s = cg(L(() => {
        var F;
        return (F = a.value) == null ? void 0 : F.popperContentRef;
      }), () => {
        if (i(l))
          return;
        i(f) !== "hover" && p();
      });
    }, P = () => {
      n.virtualTriggering || p();
    }, R = (F) => {
      var ne;
      const J = (ne = a.value) == null ? void 0 : ne.popperContentRef, de = F?.relatedTarget || document.activeElement;
      return J?.contains(de);
    };
    return ie(() => i(c), (F) => {
      F ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), ie(() => n.content, () => {
      var F, ne;
      (ne = (F = a.value) == null ? void 0 : F.updatePopper) == null || ne.call(F);
    }), t({
      contentRef: a,
      isFocusInsideContent: R
    }), (F, ne) => (k(), te(i(Qy), {
      disabled: !F.teleported,
      to: i(y)
    }, {
      default: q(() => [
        Z(Gn, {
          name: i(d),
          onAfterLeave: z,
          onBeforeEnter: V,
          onAfterEnter: oe,
          onBeforeLeave: K
        }, {
          default: q(() => [
            i(I) ? xe((k(), te(i($y), Mn({
              key: 0,
              id: i(u),
              ref_key: "contentRef",
              ref: a
            }, F.$attrs, {
              "aria-label": F.ariaLabel,
              "aria-hidden": O.value,
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
              "popper-style": [F.popperStyle, i(A)],
              "reference-el": F.referenceEl,
              "trigger-target-el": F.triggerTargetEl,
              visible: i(T),
              "z-index": F.zIndex,
              onMouseenter: i(ee),
              onMouseleave: i(re),
              onBlur: P,
              onClose: i(p)
            }), {
              default: q(() => [
                le(F.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, i(T)]
            ]) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var rb = /* @__PURE__ */ Se(ob, [["__file", "content.vue"]]);
const ab = X({
  name: "ElTooltip"
}), sb = /* @__PURE__ */ X({
  ...ab,
  props: jy,
  emits: Hy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    tb();
    const r = cr(), a = x(), s = x(), l = () => {
      var d;
      const C = i(a);
      C && ((d = C.popperInstanceRef) == null || d.update());
    }, u = x(!1), c = x(), { show: f, hide: p, hasUpdateHandler: m } = Wy({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: v } = Dy({
      showAfter: Gt(o, "showAfter"),
      hideAfter: Gt(o, "hideAfter"),
      autoClose: Gt(o, "autoClose"),
      open: f,
      close: p
    }), g = L(() => pn(o.visible) && !m.value);
    xt(ka, {
      controlled: g,
      id: r,
      open: Yr(u),
      trigger: Gt(o, "trigger"),
      onOpen: (d) => {
        h(d);
      },
      onClose: (d) => {
        v(d);
      },
      onToggle: (d) => {
        i(u) ? v(d) : h(d);
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
      updatePopper: l
    }), ie(() => o.disabled, (d) => {
      d && u.value && (u.value = !1);
    });
    const E = (d) => {
      var C;
      return (C = s.value) == null ? void 0 : C.isFocusInsideContent(d);
    };
    return ec(() => u.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: l,
      onOpen: h,
      onClose: v,
      hide: p
    }), (d, C) => (k(), te(i(My), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: q(() => [
        Z(qy, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: q(() => [
            d.$slots.default ? le(d.$slots, "default", { key: 0 }) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Z(rb, {
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
          default: q(() => [
            le(d.$slots, "content", {}, () => [
              d.rawContent ? (k(), W("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (k(), W("span", { key: 1 }, D(d.content), 1))
            ]),
            d.showArrow ? (k(), te(i(qh), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var lb = /* @__PURE__ */ Se(sb, [["__file", "tooltip.vue"]]);
const ib = At(lb), ub = Ce({
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
    type: se([String, Object, Array])
  },
  offset: {
    type: se(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), cb = X({
  name: "ElBadge"
}), db = /* @__PURE__ */ X({
  ...cb,
  props: ub,
  setup(e, { expose: t }) {
    const n = e, o = $e("badge"), r = L(() => n.isDot ? "" : he(n.value) && he(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = L(() => {
      var s, l, u, c, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Bn(-((l = (s = n.offset) == null ? void 0 : s[0]) != null ? l : 0)),
          marginTop: Bn((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: r
    }), (s, l) => (k(), W("div", {
      class: B(i(o).b())
    }, [
      le(s.$slots, "default"),
      Z(Gn, {
        name: `${i(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: q(() => [
          xe(b("sup", {
            class: B([
              i(o).e("content"),
              i(o).em("content", s.type),
              i(o).is("fixed", !!s.$slots.default),
              i(o).is("dot", s.isDot),
              i(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ue(i(a))
          }, [
            le(s.$slots, "content", { value: i(r) }, () => [
              qe(D(i(r)), 1)
            ])
          ], 6), [
            [tn, !s.hidden && (i(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var fb = /* @__PURE__ */ Se(db, [["__file", "badge.vue"]]);
const pb = At(fb), mb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Kr = Ce({
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
    values: va
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), vb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, gb = X({
  name: "ElTag"
}), hb = /* @__PURE__ */ X({
  ...gb,
  props: Kr,
  emits: vb,
  setup(e, { emit: t }) {
    const n = e, o = bo(), r = $e("tag"), a = L(() => {
      const { type: c, hit: f, effect: p, closable: m, round: h } = n;
      return [
        r.b(),
        r.is("closable", m),
        r.m(c || "primary"),
        r.m(o.value),
        r.m(p),
        r.is("hit", f),
        r.is("round", h)
      ];
    }), s = (c) => {
      t("close", c);
    }, l = (c) => {
      t("click", c);
    }, u = (c) => {
      var f, p, m;
      (m = (p = (f = c?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && m.bum && (c.component.subTree.component.bum = null);
    };
    return (c, f) => c.disableTransitions ? (k(), W("span", {
      key: 0,
      class: B(i(a)),
      style: Ue({ backgroundColor: c.color }),
      onClick: l
    }, [
      b("span", {
        class: B(i(r).e("content"))
      }, [
        le(c.$slots, "default")
      ], 2),
      c.closable ? (k(), te(i(ke), {
        key: 0,
        class: B(i(r).e("close")),
        onClick: Ae(s, ["stop"])
      }, {
        default: q(() => [
          Z(i(Go))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Y("v-if", !0)
    ], 6)) : (k(), te(Gn, {
      key: 1,
      name: `${i(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: q(() => [
        b("span", {
          class: B(i(a)),
          style: Ue({ backgroundColor: c.color }),
          onClick: l
        }, [
          b("span", {
            class: B(i(r).e("content"))
          }, [
            le(c.$slots, "default")
          ], 2),
          c.closable ? (k(), te(i(ke), {
            key: 0,
            class: B(i(r).e("close")),
            onClick: Ae(s, ["stop"])
          }, {
            default: q(() => [
              Z(i(Go))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var yb = /* @__PURE__ */ Se(hb, [["__file", "tag.vue"]]);
const bb = At(yb), ln = /* @__PURE__ */ new Map();
if (Re) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of ln.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function Al(e, t) {
  let n = [];
  return Rt(t.arg) ? n = t.arg : St(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, s = o.target, l = r?.target, u = !t || !t.instance, c = !s || !l, f = e.contains(s) || e.contains(l), p = e === s, m = n.length && n.some((v) => v?.contains(s)) || n.length && n.includes(l), h = a && (a.contains(s) || a.contains(l));
    u || c || f || p || m || h || t.value(o, r);
  };
}
const _b = {
  beforeMount(e, t) {
    ln.has(e) || ln.set(e, []), ln.get(e).push({
      documentHandler: Al(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ln.has(e) || ln.set(e, []);
    const n = ln.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: Al(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ln.delete(e);
  }
}, wb = Ce({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: se(Object)
  },
  size: ur,
  button: {
    type: se(Object)
  },
  experimentalFeatures: {
    type: se(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: se(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ri
}), _t = {};
X({
  name: "ElConfigProvider",
  props: wb,
  setup(e, { slots: t }) {
    ie(() => e.message, (o) => {
      Object.assign(_t, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Fi(e);
    return () => le(t, "default", { config: n?.value });
  }
});
const Eb = 100, Cb = 600, Il = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = Eb, delay: r = Cb } = Oe(n) ? {} : n;
    let a, s;
    const l = () => Oe(n) ? n() : n.handler(), u = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), l(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          l();
        }, o);
      }, r));
    });
  }
}, Sb = Ce({
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
  size: ur,
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
    validator: (e) => e === null || he(e) || ["min", "max"].includes(e),
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
}), Tb = {
  [nn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [en]: (e) => he(e) || Qt(e),
  [Ve]: (e) => he(e) || Qt(e)
}, Ob = X({
  name: "ElInputNumber"
}), Ab = /* @__PURE__ */ X({
  ...Ob,
  props: Sb,
  emits: Tb,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = ma(), a = $e("input-number"), s = x(), l = En({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = dr(), c = L(() => he(o.modelValue) && o.modelValue <= o.min), f = L(() => he(o.modelValue) && o.modelValue >= o.max), p = L(() => {
      const P = d(o.step);
      return $t(o.precision) ? Math.max(d(o.modelValue), P) : (P > o.precision, o.precision);
    }), m = L(() => o.controls && o.controlsPosition === "right"), h = bo(), v = ba(), g = L(() => {
      if (l.userInput !== null)
        return l.userInput;
      let P = l.currentValue;
      if (Qt(P))
        return "";
      if (he(P)) {
        if (Number.isNaN(P))
          return "";
        $t(o.precision) || (P = P.toFixed(o.precision));
      }
      return P;
    }), E = (P, R) => {
      if ($t(R) && (R = p.value), R === 0)
        return Math.round(P);
      let F = String(P);
      const ne = F.indexOf(".");
      if (ne === -1 || !F.replace(".", "").split("")[ne + R])
        return P;
      const G = F.length;
      return F.charAt(G - 1) === "5" && (F = `${F.slice(0, Math.max(0, G - 1))}6`), Number.parseFloat(Number(F).toFixed(R));
    }, d = (P) => {
      if (Qt(P))
        return 0;
      const R = P.toString(), F = R.indexOf(".");
      let ne = 0;
      return F !== -1 && (ne = R.length - F - 1), ne;
    }, C = (P, R = 1) => he(P) ? E(P + o.step * R) : l.currentValue, I = () => {
      if (o.readonly || v.value || f.value)
        return;
      const P = Number(g.value) || 0, R = C(P);
      A(R), n(en, l.currentValue), K();
    }, T = () => {
      if (o.readonly || v.value || c.value)
        return;
      const P = Number(g.value) || 0, R = C(P, -1);
      A(R), n(en, l.currentValue), K();
    }, y = (P, R) => {
      const { max: F, min: ne, step: J, precision: de, stepStrictly: G, valueOnClear: Me } = o;
      F < ne && pa("InputNumber", "min should not be greater than max.");
      let we = Number(P);
      if (Qt(P) || Number.isNaN(we))
        return null;
      if (P === "") {
        if (Me === null)
          return null;
        we = Xe(Me) ? { min: ne, max: F }[Me] : Me;
      }
      return G && (we = E(Math.round(we / J) * J, de), we !== P && R && n(Ve, we)), $t(de) || (we = E(we, de)), (we > F || we < ne) && (we = we > F ? F : ne, R && n(Ve, we)), we;
    }, A = (P, R = !0) => {
      var F;
      const ne = l.currentValue, J = y(P);
      if (!R) {
        n(Ve, J);
        return;
      }
      ne === J && P || (l.userInput = null, n(Ve, J), ne !== J && n(nn, J, ne), o.validateEvent && ((F = u?.validate) == null || F.call(u, "change").catch((de) => void 0)), l.currentValue = J);
    }, O = (P) => {
      l.userInput = P;
      const R = P === "" ? null : Number(P);
      n(en, R), A(R, !1);
    }, z = (P) => {
      const R = P !== "" ? Number(P) : "";
      (he(R) && !Number.isNaN(R) || P === "") && A(R), K(), l.userInput = null;
    }, U = () => {
      var P, R;
      (R = (P = s.value) == null ? void 0 : P.focus) == null || R.call(P);
    }, ee = () => {
      var P, R;
      (R = (P = s.value) == null ? void 0 : P.blur) == null || R.call(P);
    }, re = (P) => {
      n("focus", P);
    }, V = (P) => {
      var R, F;
      l.userInput = null, zi() && l.currentValue === null && ((R = s.value) != null && R.input) && (s.value.input.value = ""), n("blur", P), o.validateEvent && ((F = u?.validate) == null || F.call(u, "blur").catch((ne) => void 0));
    }, K = () => {
      l.currentValue !== o.modelValue && (l.currentValue = o.modelValue);
    }, oe = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return ie(() => o.modelValue, (P, R) => {
      const F = y(P, !0);
      l.userInput === null && F !== R && (l.currentValue = F);
    }, { immediate: !0 }), Ne(() => {
      var P;
      const { min: R, max: F, modelValue: ne } = o, J = (P = s.value) == null ? void 0 : P.input;
      if (J.setAttribute("role", "spinbutton"), Number.isFinite(F) ? J.setAttribute("aria-valuemax", String(F)) : J.removeAttribute("aria-valuemax"), Number.isFinite(R) ? J.setAttribute("aria-valuemin", String(R)) : J.removeAttribute("aria-valuemin"), J.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), J.setAttribute("aria-disabled", String(v.value)), !he(ne) && ne != null) {
        let de = Number(ne);
        Number.isNaN(de) && (de = null), n(Ve, de);
      }
      J.addEventListener("wheel", oe, { passive: !1 });
    }), Ml(() => {
      var P, R;
      const F = (P = s.value) == null ? void 0 : P.input;
      F?.setAttribute("aria-valuenow", `${(R = l.currentValue) != null ? R : ""}`);
    }), t({
      focus: U,
      blur: ee
    }), (P, R) => (k(), W("div", {
      class: B([
        i(a).b(),
        i(a).m(i(h)),
        i(a).is("disabled", i(v)),
        i(a).is("without-controls", !P.controls),
        i(a).is("controls-right", i(m))
      ]),
      onDragstart: Ae(() => {
      }, ["prevent"])
    }, [
      P.controls ? xe((k(), W("span", {
        key: 0,
        role: "button",
        "aria-label": i(r)("el.inputNumber.decrease"),
        class: B([i(a).e("decrease"), i(a).is("disabled", i(c))]),
        onKeydown: wt(T, ["enter"])
      }, [
        le(P.$slots, "decrease-icon", {}, () => [
          Z(i(ke), null, {
            default: q(() => [
              i(m) ? (k(), te(i(xi), { key: 0 })) : (k(), te(i(eh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(Il), T]
      ]) : Y("v-if", !0),
      P.controls ? xe((k(), W("span", {
        key: 1,
        role: "button",
        "aria-label": i(r)("el.inputNumber.increase"),
        class: B([i(a).e("increase"), i(a).is("disabled", i(f))]),
        onKeydown: wt(I, ["enter"])
      }, [
        le(P.$slots, "increase-icon", {}, () => [
          Z(i(ke), null, {
            default: q(() => [
              i(m) ? (k(), te(i(Ug), { key: 0 })) : (k(), te(i(nh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(Il), I]
      ]) : Y("v-if", !0),
      Z(i(Ah), {
        id: P.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: P.step,
        "model-value": i(g),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: i(v),
        size: i(h),
        max: P.max,
        min: P.min,
        name: P.name,
        "aria-label": P.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          wt(Ae(I, ["prevent"]), ["up"]),
          wt(Ae(T, ["prevent"]), ["down"])
        ],
        onBlur: V,
        onFocus: re,
        onInput: O,
        onChange: z
      }, tc({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: q(() => [
            le(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: q(() => [
            le(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ib = /* @__PURE__ */ Se(Ab, [["__file", "input-number.vue"]]);
const Lb = At(Ib);
function Pb() {
  const e = fn(), t = x(0), n = 11, o = L(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return kt(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const gu = Symbol("ElSelectGroup"), vr = Symbol("ElSelect");
function Nb(e, t) {
  const n = ye(vr), o = ye(gu, { disabled: !1 }), r = L(() => f(cn(n.props.modelValue), e.value)), a = L(() => {
    var h;
    if (n.props.multiple) {
      const v = cn((h = n.props.modelValue) != null ? h : []);
      return !r.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = L(() => e.label || (dt(e.value) ? "" : e.value)), l = L(() => e.value || e.label || ""), u = L(() => e.disabled || t.groupDisabled || a.value), c = Qe(), f = (h = [], v) => {
    if (dt(e.value)) {
      const g = n.props.valueKey;
      return h && h.some((E) => nc(dn(E, g)) === dn(v, g));
    } else
      return h && h.includes(v);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, m = (h) => {
    const v = new RegExp(mb(h), "i");
    t.visible = v.test(s.value) || e.created;
  };
  return ie(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ie(() => e.value, (h, v) => {
    const { remote: g, valueKey: E } = n.props;
    if ((g ? h !== v : !to(h, v)) && (n.onOptionDestroy(v, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !g) {
      if (E && dt(h) && dt(v) && h[E] === v[E])
        return;
      n.setSelected();
    }
  }), ie(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: r,
    isDisabled: u,
    hoverItem: p,
    updateOption: m
  };
}
const kb = X({
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
    const t = $e("select"), n = cr(), o = L(() => [
      t.be("dropdown", "item"),
      t.is("disabled", i(l)),
      t.is("selected", i(s)),
      t.is("hovering", i(m))
    ]), r = En({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: u,
      hoverItem: c,
      updateOption: f
    } = Nb(e, r), { visible: p, hover: m } = qr(r), h = Qe().proxy;
    u.onOptionCreate(h), zt(() => {
      const g = h.value, { selected: E } = u.states, d = E.some((C) => C.value === h.value);
      Ie(() => {
        u.states.cachedOptions.get(g) === h && !d && u.states.cachedOptions.delete(g);
      }), u.onOptionDestroy(g, h);
    });
    function v() {
      l.value || u.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: u,
      hoverItem: c,
      updateOption: f,
      visible: p,
      hover: m,
      selectOptionClick: v,
      states: r
    };
  }
});
function Rb(e, t, n, o, r, a) {
  return xe((k(), W("li", {
    id: e.id,
    class: B(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ae(e.selectOptionClick, ["stop"])
  }, [
    le(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var $a = /* @__PURE__ */ Se(kb, [["render", Rb], ["__file", "option.vue"]]);
const $b = X({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ye(vr), t = $e("select"), n = L(() => e.props.popperClass), o = L(() => e.props.multiple), r = L(() => e.props.fitInputWidth), a = x("");
    function s() {
      var l;
      a.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return Ne(() => {
      s(), kt(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Mb(e, t, n, o, r, a) {
  return k(), W("div", {
    class: B([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ue({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (k(), W("div", {
      key: 0,
      class: B(e.ns.be("dropdown", "header"))
    }, [
      le(e.$slots, "header")
    ], 2)) : Y("v-if", !0),
    le(e.$slots, "default"),
    e.$slots.footer ? (k(), W("div", {
      key: 1,
      class: B(e.ns.be("dropdown", "footer"))
    }, [
      le(e.$slots, "footer")
    ], 2)) : Y("v-if", !0)
  ], 6);
}
var Fb = /* @__PURE__ */ Se($b, [["render", Mb], ["__file", "select-dropdown.vue"]]);
const Db = (e, t) => {
  const { t: n } = ma(), o = cr(), r = $e("select"), a = $e("input"), s = En({
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
  }), l = x(null), u = x(null), c = x(null), f = x(null), p = x(null), m = x(null), h = x(null), v = x(null), g = x(null), E = x(null), d = x(null), {
    isComposing: C,
    handleCompositionStart: I,
    handleCompositionUpdate: T,
    handleCompositionEnd: y
  } = Gi({
    afterComposition: (N) => Ke(N)
  }), { wrapperRef: A, isFocused: O, handleBlur: z } = Ki(p, {
    beforeFocus() {
      return R.value;
    },
    afterFocus() {
      e.automaticDropdown && !U.value && (U.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var j, ce;
      return ((j = c.value) == null ? void 0 : j.isFocusInsideContent(N)) || ((ce = f.value) == null ? void 0 : ce.isFocusInsideContent(N));
    },
    afterBlur() {
      U.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), U = x(!1), ee = x(), { form: re, formItem: V } = dr(), { inputId: K } = ya(e, {
    formItemContext: V
  }), { valueOnClear: oe, isEmptyValue: P } = kg(e), R = L(() => e.disabled || re?.disabled), F = L(() => Rt(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), ne = L(() => {
    var N;
    return (N = re?.statusIcon) != null ? N : !1;
  }), J = L(() => e.clearable && !R.value && s.inputHovering && F.value), de = L(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), G = L(() => r.is("reverse", de.value && U.value)), Me = L(() => V?.validateState || ""), we = L(() => Ui[Me.value]), We = L(() => e.remote ? 300 : 0), Be = L(() => e.remote && !s.inputValue && s.options.size === 0), je = L(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && He.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), He = L(() => be.value.filter((N) => N.visible).length), be = L(() => {
    const N = Array.from(s.options.values()), j = [];
    return s.optionValues.forEach((ce) => {
      const Fe = N.findIndex((ut) => ut.value === ce);
      Fe > -1 && j.push(N[Fe]);
    }), j.length >= N.length ? j : N;
  }), rt = L(() => Array.from(s.cachedOptions.values())), pt = L(() => {
    const N = be.value.filter((j) => !j.created).some((j) => j.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !N;
  }), at = () => {
    e.filterable && Oe(e.filterMethod) || e.filterable && e.remote && Oe(e.remoteMethod) || be.value.forEach((N) => {
      var j;
      (j = N.updateOption) == null || j.call(N, s.inputValue);
    });
  }, bt = bo(), st = L(() => ["small"].includes(bt.value) ? "small" : "default"), lt = L({
    get() {
      return U.value && !Be.value;
    },
    set(N) {
      U.value = N;
    }
  }), it = L(() => {
    if (e.multiple && !$t(e.modelValue))
      return cn(e.modelValue).length === 0 && !s.inputValue;
    const N = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $t(N) ? !s.inputValue : !0;
  }), mt = L(() => {
    var N;
    const j = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !F.value ? j : s.selectedLabel;
  }), It = L(() => zr ? null : "mouseenter");
  ie(() => e.modelValue, (N, j) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), M(), !to(N, j) && e.validateEvent && V?.validate("change").catch((ce) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ie(() => U.value, (N) => {
    N ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", N);
  }), ie(() => s.options.entries(), () => {
    Re && (M(), e.defaultFirstOption && (e.filterable || e.remote) && He.value && S());
  }, {
    flush: "post"
  }), ie([() => s.hoveringIndex, be], ([N]) => {
    he(N) && N > -1 ? ee.value = be.value[N] || {} : ee.value = {}, be.value.forEach((j) => {
      j.hover = ee.value === j;
    });
  }), $l(() => {
    s.isBeforeHide || at();
  });
  const w = (N) => {
    s.previousQuery === N || C.value || (s.previousQuery = N, e.filterable && Oe(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && Oe(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && He.value ? Ie(S) : Ie(fe));
  }, S = () => {
    const N = be.value.filter((ut) => ut.visible && !ut.disabled && !ut.states.groupDisabled), j = N.find((ut) => ut.created), ce = N[0], Fe = be.value.map((ut) => ut.value);
    s.hoveringIndex = xa(Fe, j || ce);
  }, M = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const j = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue, ce = H(j);
      s.selectedLabel = ce.currentLabel, s.selected = [ce];
      return;
    }
    const N = [];
    $t(e.modelValue) || cn(e.modelValue).forEach((j) => {
      N.push(H(j));
    }), s.selected = N;
  }, H = (N) => {
    let j;
    const ce = sf(N);
    for (let Ln = s.cachedOptions.size - 1; Ln >= 0; Ln--) {
      const sn = rt.value[Ln];
      if (ce ? dn(sn.value, e.valueKey) === dn(N, e.valueKey) : sn.value === N) {
        j = {
          value: N,
          currentLabel: sn.currentLabel,
          get isDisabled() {
            return sn.isDisabled;
          }
        };
        break;
      }
    }
    if (j)
      return j;
    const Fe = ce ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Fe
    };
  }, fe = () => {
    s.hoveringIndex = be.value.findIndex((N) => s.selected.some((j) => So(j) === So(N)));
  }, ae = () => {
    s.selectionWidth = u.value.getBoundingClientRect().width;
  }, _ = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, $ = () => {
    var N, j;
    (j = (N = c.value) == null ? void 0 : N.updatePopper) == null || j.call(N);
  }, ue = () => {
    var N, j;
    (j = (N = f.value) == null ? void 0 : N.updatePopper) == null || j.call(N);
  }, ve = () => {
    s.inputValue.length > 0 && !U.value && (U.value = !0), w(s.inputValue);
  }, Ke = (N) => {
    if (s.inputValue = N.target.value, e.remote)
      yn();
    else
      return ve();
  }, yn = Hv(() => {
    ve();
  }, We.value), vt = (N) => {
    to(e.modelValue, N) || t(nn, N);
  }, gr = (N) => Kv(N, (j) => {
    const ce = s.cachedOptions.get(j);
    return ce && !ce.disabled && !ce.states.groupDisabled;
  }), Fa = (N) => {
    if (e.multiple && N.code !== Dt.delete && N.target.value.length <= 0) {
      const j = cn(e.modelValue).slice(), ce = gr(j);
      if (ce < 0)
        return;
      const Fe = j[ce];
      j.splice(ce, 1), t(Ve, j), vt(j), t("remove-tag", Fe);
    }
  }, Tu = (N, j) => {
    const ce = s.selected.indexOf(j);
    if (ce > -1 && !R.value) {
      const Fe = cn(e.modelValue).slice();
      Fe.splice(ce, 1), t(Ve, Fe), vt(Fe), t("remove-tag", j.value);
    }
    N.stopPropagation(), Co();
  }, Da = (N) => {
    N.stopPropagation();
    const j = e.multiple ? [] : oe.value;
    if (e.multiple)
      for (const ce of s.selected)
        ce.isDisabled && j.push(ce.value);
    t(Ve, j), vt(j), s.hoveringIndex = -1, U.value = !1, t("clear"), Co();
  }, Va = (N) => {
    var j;
    if (e.multiple) {
      const ce = cn((j = e.modelValue) != null ? j : []).slice(), Fe = xa(ce, N);
      Fe > -1 ? ce.splice(Fe, 1) : (e.multipleLimit <= 0 || ce.length < e.multipleLimit) && ce.push(N.value), t(Ve, ce), vt(ce), N.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ve, N.value), vt(N.value), U.value = !1;
    Co(), !U.value && Ie(() => {
      Eo(N);
    });
  }, xa = (N = [], j) => $t(j) ? -1 : dt(j.value) ? N.findIndex((ce) => to(dn(ce, e.valueKey), So(j))) : N.indexOf(j.value), Eo = (N) => {
    var j, ce, Fe, ut, Ln;
    const sn = Rt(N) ? N[0] : N;
    let To = null;
    if (sn?.value) {
      const qn = be.value.filter((zu) => zu.value === sn.value);
      qn.length > 0 && (To = qn[0].$el);
    }
    if (c.value && To) {
      const qn = (ut = (Fe = (ce = (j = c.value) == null ? void 0 : j.popperRef) == null ? void 0 : ce.contentRef) == null ? void 0 : Fe.querySelector) == null ? void 0 : ut.call(Fe, `.${r.be("dropdown", "wrap")}`);
      qn && $g(qn, To);
    }
    (Ln = d.value) == null || Ln.handleScroll();
  }, Ou = (N) => {
    s.options.set(N.value, N), s.cachedOptions.set(N.value, N);
  }, Au = (N, j) => {
    s.options.get(N) === j && s.options.delete(N);
  }, Iu = L(() => {
    var N, j;
    return (j = (N = c.value) == null ? void 0 : N.popperRef) == null ? void 0 : j.contentRef;
  }), Lu = () => {
    s.isBeforeHide = !1, Ie(() => {
      var N;
      (N = d.value) == null || N.update(), Eo(s.selected);
    });
  }, Co = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, Pu = () => {
    var N;
    if (U.value) {
      U.value = !1, Ie(() => {
        var j;
        return (j = p.value) == null ? void 0 : j.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, Nu = (N) => {
    Da(N);
  }, ku = (N) => {
    if (U.value = !1, O.value) {
      const j = new FocusEvent("focus", N);
      Ie(() => z(j));
    }
  }, Ru = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : U.value = !1;
  }, Ba = () => {
    R.value || (zr && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : U.value = !U.value);
  }, $u = () => {
    if (!U.value)
      Ba();
    else {
      const N = be.value[s.hoveringIndex];
      N && !N.isDisabled && Va(N);
    }
  }, So = (N) => dt(N.value) ? dn(N.value, e.valueKey) : N.value, Mu = L(() => be.value.filter((N) => N.visible).every((N) => N.isDisabled)), Fu = L(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Du = L(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ua = (N) => {
    if (!U.value) {
      U.value = !0;
      return;
    }
    if (!(s.options.size === 0 || He.value === 0 || C.value) && !Mu.value) {
      N === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : N === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const j = be.value[s.hoveringIndex];
      (j.isDisabled || !j.visible) && Ua(N), Ie(() => Eo(ee.value));
    }
  }, Vu = () => {
    if (!u.value)
      return 0;
    const N = window.getComputedStyle(u.value);
    return Number.parseFloat(N.gap || "6px");
  }, xu = L(() => {
    const N = Vu();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - N : s.selectionWidth}px` };
  }), Bu = L(() => ({ maxWidth: `${s.selectionWidth}px` })), Uu = (N) => {
    t("popup-scroll", N);
  };
  return kt(u, ae), kt(v, $), kt(A, $), kt(g, ue), kt(E, _), Ne(() => {
    M();
  }), {
    inputId: K,
    contentId: o,
    nsSelect: r,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: U,
    optionsArray: be,
    hoverOption: ee,
    selectSize: bt,
    filteredOptionsCount: He,
    updateTooltip: $,
    updateTagTooltip: ue,
    debouncedOnInputChange: yn,
    onInput: Ke,
    deletePrevTag: Fa,
    deleteTag: Tu,
    deleteSelected: Da,
    handleOptionSelect: Va,
    scrollToOption: Eo,
    hasModelValue: F,
    shouldShowPlaceholder: it,
    currentPlaceholder: mt,
    mouseEnterEventName: It,
    needStatusIcon: ne,
    showClose: J,
    iconComponent: de,
    iconReverse: G,
    validateState: Me,
    validateIcon: we,
    showNewOption: pt,
    updateOptions: at,
    collapseTagSize: st,
    setSelected: M,
    selectDisabled: R,
    emptyText: je,
    handleCompositionStart: I,
    handleCompositionUpdate: T,
    handleCompositionEnd: y,
    onOptionCreate: Ou,
    onOptionDestroy: Au,
    handleMenuEnter: Lu,
    focus: Co,
    blur: Pu,
    handleClearClick: Nu,
    handleClickOutside: ku,
    handleEsc: Ru,
    toggleMenu: Ba,
    selectOption: $u,
    getValueKey: So,
    navigateOptions: Ua,
    dropdownMenuVisible: lt,
    showTagList: Fu,
    collapseTagList: Du,
    popupScroll: Uu,
    tagStyle: xu,
    collapseTagStyle: Bu,
    popperRef: Iu,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: f,
    prefixRef: m,
    suffixRef: h,
    selectRef: l,
    wrapperRef: A,
    selectionRef: u,
    scrollbarRef: d,
    menuRef: v,
    tagMenuRef: g,
    collapseItemRef: E
  };
};
var Vb = X({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ye(vr);
    let o = [];
    return () => {
      var r, a;
      const s = (r = t.default) == null ? void 0 : r.call(t), l = [];
      function u(c) {
        Rt(c) && c.forEach((f) => {
          var p, m, h, v;
          const g = (p = f?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? u(!Xe(f.children) && !Rt(f.children) && Oe((m = f.children) == null ? void 0 : m.default) ? (h = f.children) == null ? void 0 : h.default() : f.children) : g === "ElOption" ? l.push((v = f.props) == null ? void 0 : v.value) : Rt(f.children) && u(f.children);
        });
      }
      return s.length && u((a = s[0]) == null ? void 0 : a.children), to(l, o) || (o = l, n && (n.states.optionValues = l)), s;
    };
  }
});
const xb = Ce({
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
  size: ur,
  effect: {
    type: se(String),
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
    type: se(Object),
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
  teleported: Ra.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mt,
    default: ga
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mt,
    default: xi
  },
  tagType: { ...Kr.type, default: "info" },
  tagEffect: { ...Kr.effect, default: "light" },
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
    type: se(String),
    values: pr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: se(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Ri,
  ...In(["ariaLabel"])
}), Ll = "ElSelect", Bb = X({
  name: Ll,
  componentName: Ll,
  components: {
    ElSelectMenu: Fb,
    ElOption: $a,
    ElOptions: Vb,
    ElTag: bb,
    ElScrollbar: zh,
    ElTooltip: ib,
    ElIcon: ke
  },
  directives: { ClickOutside: _b },
  props: xb,
  emits: [
    Ve,
    nn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = L(() => {
      const { modelValue: u, multiple: c } = e, f = c ? [] : void 0;
      return Rt(u) ? c ? u : f : c ? f : u;
    }), o = En({
      ...qr(e),
      modelValue: n
    }), r = Db(o, t), { calculatorRef: a, inputStyle: s } = Pb();
    xt(vr, En({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const l = L(() => e.multiple ? r.states.selected.map((u) => u.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Ub(e, t, n, o, r, a) {
  const s = bn("el-tag"), l = bn("el-tooltip"), u = bn("el-icon"), c = bn("el-option"), f = bn("el-options"), p = bn("el-scrollbar"), m = bn("el-select-menu"), h = oc("click-outside");
  return xe((k(), W("div", {
    ref: "selectRef",
    class: B([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [rc(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
  }, [
    Z(l, {
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
      onHide: (v) => e.states.isBeforeHide = !1
    }, {
      default: q(() => {
        var v;
        return [
          b("div", {
            ref: "wrapperRef",
            class: B([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ae(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (k(), W("div", {
              key: 0,
              ref: "prefixRef",
              class: B(e.nsSelect.e("prefix"))
            }, [
              le(e.$slots, "prefix")
            ], 2)) : Y("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: B([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? le(e.$slots, "tag", { key: 0 }, () => [
                (k(!0), W(Je, null, Fn(e.showTagList, (g) => (k(), W("div", {
                  key: e.getValueKey(g),
                  class: B(e.nsSelect.e("selected-item"))
                }, [
                  Z(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ue(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, g)
                  }, {
                    default: q(() => [
                      b("span", {
                        class: B(e.nsSelect.e("tags-text"))
                      }, [
                        le(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          qe(D(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (k(), te(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: q(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: B(e.nsSelect.e("selected-item"))
                    }, [
                      Z(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ue(e.collapseTagStyle)
                      }, {
                        default: q(() => [
                          b("span", {
                            class: B(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: q(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: B(e.nsSelect.e("selection"))
                    }, [
                      (k(!0), W(Je, null, Fn(e.collapseTagList, (g) => (k(), W("div", {
                        key: e.getValueKey(g),
                        class: B(e.nsSelect.e("selected-item"))
                      }, [
                        Z(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, g)
                        }, {
                          default: q(() => [
                            b("span", {
                              class: B(e.nsSelect.e("tags-text"))
                            }, [
                              le(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                qe(D(g.currentLabel), 1)
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
              b("div", {
                class: B([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                xe(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: B([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ue(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((v = e.hoverOption) == null ? void 0 : v.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    wt(Ae((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    wt(Ae((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    wt(Ae(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    wt(Ae(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    wt(Ae(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ae(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [ao, e.states.inputValue]
                ]),
                e.filterable ? (k(), W("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: B(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : Y("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (k(), W("div", {
                key: 1,
                class: B([
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
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (k(), W("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : Y("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: B(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (k(), te(u, {
                key: 0,
                class: B([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: q(() => [
                  (k(), te(Ze(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              e.showClose && e.clearIcon ? (k(), te(u, {
                key: 1,
                class: B([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: q(() => [
                  (k(), te(Ze(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Y("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (k(), te(u, {
                key: 2,
                class: B([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: q(() => [
                  (k(), te(Ze(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: q(() => [
        Z(m, { ref: "menuRef" }, {
          default: q(() => [
            e.$slots.header ? (k(), W("div", {
              key: 0,
              class: B(e.nsSelect.be("dropdown", "header")),
              onClick: Ae(() => {
              }, ["stop"])
            }, [
              le(e.$slots, "header")
            ], 10, ["onClick"])) : Y("v-if", !0),
            xe(Z(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: B([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: q(() => [
                e.showNewOption ? (k(), te(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : Y("v-if", !0),
                Z(f, null, {
                  default: q(() => [
                    le(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [tn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (k(), W("div", {
              key: 1,
              class: B(e.nsSelect.be("dropdown", "loading"))
            }, [
              le(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (k(), W("div", {
              key: 2,
              class: B(e.nsSelect.be("dropdown", "empty"))
            }, [
              le(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : Y("v-if", !0),
            e.$slots.footer ? (k(), W("div", {
              key: 3,
              class: B(e.nsSelect.be("dropdown", "footer")),
              onClick: Ae(() => {
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
    [h, e.handleClickOutside, e.popperRef]
  ]);
}
var zb = /* @__PURE__ */ Se(Bb, [["render", Ub], ["__file", "select.vue"]]);
const Wb = X({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = $e("select"), n = x(null), o = Qe(), r = x([]);
    xt(gu, En({
      ...qr(e)
    }));
    const a = L(() => r.value.some((c) => c.visible === !0)), s = (c) => {
      var f, p;
      return ((f = c.type) == null ? void 0 : f.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, l = (c) => {
      const f = cn(c), p = [];
      return f.forEach((m) => {
        var h, v;
        s(m) ? p.push(m.component.proxy) : (h = m.children) != null && h.length ? p.push(...l(m.children)) : (v = m.component) != null && v.subTree && p.push(...l(m.component.subTree));
      }), p;
    }, u = () => {
      r.value = l(o.subTree);
    };
    return Ne(() => {
      u();
    }), hg(n, u, {
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
function jb(e, t, n, o, r, a) {
  return xe((k(), W("ul", {
    ref: "groupRef",
    class: B(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: B(e.ns.be("group", "title"))
    }, D(e.label), 3),
    b("li", null, [
      b("ul", {
        class: B(e.ns.b("group"))
      }, [
        le(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var hu = /* @__PURE__ */ Se(Wb, [["render", jb], ["__file", "option-group.vue"]]);
const Hb = At(zb, {
  Option: $a,
  OptionGroup: hu
}), Kb = Vi($a);
Vi(hu);
const Gb = (e) => ["", ...va].includes(e), Yb = Ce({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Gb
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
    type: se(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...In(["ariaLabel"])
}), qb = {
  [Ve]: (e) => pn(e) || Xe(e) || he(e),
  [nn]: (e) => pn(e) || Xe(e) || he(e),
  [en]: (e) => pn(e) || Xe(e) || he(e)
}, yu = "ElSwitch", Xb = X({
  name: yu
}), Zb = /* @__PURE__ */ X({
  ...Xb,
  props: Yb,
  emits: qb,
  setup(e, { expose: t, emit: n }) {
    const o = e, { formItem: r } = dr(), a = bo(), s = $e("switch"), { inputId: l } = ya(o, {
      formItemContext: r
    }), u = ba(L(() => o.loading)), c = x(o.modelValue !== !1), f = x(), p = x(), m = L(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", u.value),
      s.is("checked", d.value)
    ]), h = L(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), v = L(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), g = L(() => ({
      width: Bn(o.width)
    }));
    ie(() => o.modelValue, () => {
      c.value = !0;
    });
    const E = L(() => c.value ? o.modelValue : !1), d = L(() => E.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(E.value) || (n(Ve, o.inactiveValue), n(nn, o.inactiveValue), n(en, o.inactiveValue)), ie(d, (y) => {
      var A;
      f.value.checked = y, o.validateEvent && ((A = r?.validate) == null || A.call(r, "change").catch((O) => void 0));
    });
    const C = () => {
      const y = d.value ? o.inactiveValue : o.activeValue;
      n(Ve, y), n(nn, y), n(en, y), Ie(() => {
        f.value.checked = d.value;
      });
    }, I = () => {
      if (u.value)
        return;
      const { beforeChange: y } = o;
      if (!y) {
        C();
        return;
      }
      const A = y();
      [
        ys(A),
        pn(A)
      ].includes(!0) || pa(yu, "beforeChange must return type `Promise<boolean>` or `boolean`"), ys(A) ? A.then((z) => {
        z && C();
      }).catch((z) => {
      }) : A && C();
    }, T = () => {
      var y, A;
      (A = (y = f.value) == null ? void 0 : y.focus) == null || A.call(y);
    };
    return Ne(() => {
      f.value.checked = d.value;
    }), t({
      focus: T,
      checked: d
    }), (y, A) => (k(), W("div", {
      class: B(i(m)),
      onClick: Ae(I, ["prevent"])
    }, [
      b("input", {
        id: i(l),
        ref_key: "input",
        ref: f,
        class: B(i(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": i(d),
        "aria-disabled": i(u),
        "aria-label": y.ariaLabel,
        name: y.name,
        "true-value": y.activeValue,
        "false-value": y.inactiveValue,
        disabled: i(u),
        tabindex: y.tabindex,
        onChange: C,
        onKeydown: wt(I, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !y.inlinePrompt && (y.inactiveIcon || y.inactiveText) ? (k(), W("span", {
        key: 0,
        class: B(i(h))
      }, [
        y.inactiveIcon ? (k(), te(i(ke), { key: 0 }, {
          default: q(() => [
            (k(), te(Ze(y.inactiveIcon)))
          ]),
          _: 1
        })) : Y("v-if", !0),
        !y.inactiveIcon && y.inactiveText ? (k(), W("span", {
          key: 1,
          "aria-hidden": i(d)
        }, D(y.inactiveText), 9, ["aria-hidden"])) : Y("v-if", !0)
      ], 2)) : Y("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: B(i(s).e("core")),
        style: Ue(i(g))
      }, [
        y.inlinePrompt ? (k(), W("div", {
          key: 0,
          class: B(i(s).e("inner"))
        }, [
          y.activeIcon || y.inactiveIcon ? (k(), te(i(ke), {
            key: 0,
            class: B(i(s).is("icon"))
          }, {
            default: q(() => [
              (k(), te(Ze(i(d) ? y.activeIcon : y.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : y.activeText || y.inactiveText ? (k(), W("span", {
            key: 1,
            class: B(i(s).is("text")),
            "aria-hidden": !i(d)
          }, D(i(d) ? y.activeText : y.inactiveText), 11, ["aria-hidden"])) : Y("v-if", !0)
        ], 2)) : Y("v-if", !0),
        b("div", {
          class: B(i(s).e("action"))
        }, [
          y.loading ? (k(), te(i(ke), {
            key: 0,
            class: B(i(s).is("loading"))
          }, {
            default: q(() => [
              Z(i(Bi))
            ]),
            _: 1
          }, 8, ["class"])) : i(d) ? le(y.$slots, "active-action", { key: 1 }, () => [
            y.activeActionIcon ? (k(), te(i(ke), { key: 0 }, {
              default: q(() => [
                (k(), te(Ze(y.activeActionIcon)))
              ]),
              _: 1
            })) : Y("v-if", !0)
          ]) : i(d) ? Y("v-if", !0) : le(y.$slots, "inactive-action", { key: 2 }, () => [
            y.inactiveActionIcon ? (k(), te(i(ke), { key: 0 }, {
              default: q(() => [
                (k(), te(Ze(y.inactiveActionIcon)))
              ]),
              _: 1
            })) : Y("v-if", !0)
          ])
        ], 2)
      ], 6),
      !y.inlinePrompt && (y.activeIcon || y.activeText) ? (k(), W("span", {
        key: 1,
        class: B(i(v))
      }, [
        y.activeIcon ? (k(), te(i(ke), { key: 0 }, {
          default: q(() => [
            (k(), te(Ze(y.activeIcon)))
          ]),
          _: 1
        })) : Y("v-if", !0),
        !y.activeIcon && y.activeText ? (k(), W("span", {
          key: 1,
          "aria-hidden": !i(d)
        }, D(y.activeText), 9, ["aria-hidden"])) : Y("v-if", !0)
      ], 2)) : Y("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var Jb = /* @__PURE__ */ Se(Zb, [["__file", "switch.vue"]]);
const Qb = At(Jb), bu = ["success", "info", "warning", "error"], Ge = Wi({
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
  appendTo: Re ? document.body : void 0
}), e_ = Ce({
  customClass: {
    type: String,
    default: Ge.customClass
  },
  center: {
    type: Boolean,
    default: Ge.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ge.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ge.duration
  },
  icon: {
    type: Mt,
    default: Ge.icon
  },
  id: {
    type: String,
    default: Ge.id
  },
  message: {
    type: se([
      String,
      Object,
      Function
    ]),
    default: Ge.message
  },
  onClose: {
    type: se(Function),
    default: Ge.onClose
  },
  showClose: {
    type: Boolean,
    default: Ge.showClose
  },
  type: {
    type: String,
    values: bu,
    default: Ge.type
  },
  plain: {
    type: Boolean,
    default: Ge.plain
  },
  offset: {
    type: Number,
    default: Ge.offset
  },
  zIndex: {
    type: Number,
    default: Ge.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ge.grouping
  },
  repeatNum: {
    type: Number,
    default: Ge.repeatNum
  }
}), t_ = {
  destroy: () => !0
}, Ct = ac([]), n_ = (e) => {
  const t = Ct.findIndex((r) => r.id === e), n = Ct[t];
  let o;
  return t > 0 && (o = Ct[t - 1]), { current: n, prev: o };
}, o_ = (e) => {
  const { prev: t } = n_(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, r_ = (e, t) => Ct.findIndex((o) => o.id === e) > 0 ? 16 : t, a_ = X({
  name: "ElMessage"
}), s_ = /* @__PURE__ */ X({
  ...a_,
  props: e_,
  emits: t_,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = ch, { ns: r, zIndex: a } = Mi("message"), { currentZIndex: s, nextZIndex: l } = a, u = x(), c = x(!1), f = x(0);
    let p;
    const m = L(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = L(() => {
      const O = n.type;
      return { [r.bm("icon", O)]: O && Yo[O] };
    }), v = L(() => n.icon || Yo[n.type] || ""), g = L(() => o_(n.id)), E = L(() => r_(n.id, n.offset) + g.value), d = L(() => f.value + E.value), C = L(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function I() {
      n.duration !== 0 && ({ stop: p } = Si(() => {
        y();
      }, n.duration));
    }
    function T() {
      p?.();
    }
    function y() {
      c.value = !1;
    }
    function A({ code: O }) {
      O === Dt.esc && y();
    }
    return Ne(() => {
      I(), l(), c.value = !0;
    }), ie(() => n.repeatNum, () => {
      T(), I();
    }), Tt(document, "keydown", A), kt(u, () => {
      f.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: d,
      close: y
    }), (O, z) => (k(), te(Gn, {
      name: i(r).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (U) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        xe(b("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: u,
          class: B([
            i(r).b(),
            { [i(r).m(O.type)]: O.type },
            i(r).is("center", O.center),
            i(r).is("closable", O.showClose),
            i(r).is("plain", O.plain),
            O.customClass
          ]),
          style: Ue(i(C)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: I
        }, [
          O.repeatNum > 1 ? (k(), te(i(pb), {
            key: 0,
            value: O.repeatNum,
            type: i(m),
            class: B(i(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          i(v) ? (k(), te(i(ke), {
            key: 1,
            class: B([i(r).e("icon"), i(h)])
          }, {
            default: q(() => [
              (k(), te(Ze(i(v))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          le(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (k(), W(Je, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: B(i(r).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), W("p", {
              key: 0,
              class: B(i(r).e("content"))
            }, D(O.message), 3))
          ]),
          O.showClose ? (k(), te(i(ke), {
            key: 2,
            class: B(i(r).e("closeBtn")),
            onClick: Ae(y, ["stop"])
          }, {
            default: q(() => [
              Z(i(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 46, ["id"]), [
          [tn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var l_ = /* @__PURE__ */ Se(s_, [["__file", "message.vue"]]);
let i_ = 1;
const _u = (e) => {
  const t = !e || Xe(e) || so(e) || Oe(e) ? { message: e } : e, n = {
    ...Ge,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Xe(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    St(o) || (o = document.body), n.appendTo = o;
  }
  return pn(_t.grouping) && !n.grouping && (n.grouping = _t.grouping), he(_t.duration) && n.duration === 3e3 && (n.duration = _t.duration), he(_t.offset) && n.offset === 16 && (n.offset = _t.offset), pn(_t.showClose) && !n.showClose && (n.showClose = _t.showClose), n;
}, u_ = (e) => {
  const t = Ct.indexOf(e);
  if (t === -1)
    return;
  Ct.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, c_ = ({ appendTo: e, ...t }, n) => {
  const o = `message_${i_++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), u_(f);
    },
    onDestroy: () => {
      Bo(null, a);
    }
  }, l = Z(l_, s, Oe(s.message) || so(s.message) ? {
    default: Oe(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Hn._context, Bo(l, a), e.appendChild(a.firstElementChild);
  const u = l.component, f = {
    id: o,
    vnode: l,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return f;
}, Hn = (e = {}, t) => {
  if (!Re)
    return { close: () => {
    } };
  const n = _u(e);
  if (n.grouping && Ct.length) {
    const r = Ct.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (he(_t.max) && Ct.length >= _t.max)
    return { close: () => {
    } };
  const o = c_(n, t);
  return Ct.push(o), o.handler;
};
bu.forEach((e) => {
  Hn[e] = (t = {}, n) => {
    const o = _u(t);
    return Hn({ ...o, type: e }, n);
  };
});
function d_(e) {
  for (const t of Ct)
    (!e || e === t.props.type) && t.handler.close();
}
Hn.closeAll = d_;
Hn._context = null;
const f_ = Di(Hn, "$message"), wu = [
  "success",
  "info",
  "warning",
  "error"
], p_ = Ce({
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
    type: se([
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
    type: se(Function),
    default: () => {
    }
  },
  onClose: {
    type: se(Function),
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
    values: [...wu, ""],
    default: ""
  },
  zIndex: Number
}), m_ = {
  destroy: () => !0
}, v_ = X({
  name: "ElNotification"
}), g_ = /* @__PURE__ */ X({
  ...v_,
  props: p_,
  emits: m_,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = Mi("notification"), { nextZIndex: a, currentZIndex: s } = r, { Close: l } = uh, u = x(!1);
    let c;
    const f = L(() => {
      const I = n.type;
      return I && Yo[n.type] ? o.m(I) : "";
    }), p = L(() => n.type && Yo[n.type] || n.icon), m = L(() => n.position.endsWith("right") ? "right" : "left"), h = L(() => n.position.startsWith("top") ? "top" : "bottom"), v = L(() => {
      var I;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (I = n.zIndex) != null ? I : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: c } = Si(() => {
        u.value && d();
      }, n.duration));
    }
    function E() {
      c?.();
    }
    function d() {
      u.value = !1;
    }
    function C({ code: I }) {
      I === Dt.delete || I === Dt.backspace ? E() : I === Dt.esc ? u.value && d() : g();
    }
    return Ne(() => {
      g(), a(), u.value = !0;
    }), Tt(document, "keydown", C), t({
      visible: u,
      close: d
    }), (I, T) => (k(), te(Gn, {
      name: i(o).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (y) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        xe(b("div", {
          id: I.id,
          class: B([i(o).b(), I.customClass, i(m)]),
          style: Ue(i(v)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: g,
          onClick: I.onClick
        }, [
          i(p) ? (k(), te(i(ke), {
            key: 0,
            class: B([i(o).e("icon"), i(f)])
          }, {
            default: q(() => [
              (k(), te(Ze(i(p))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          b("div", {
            class: B(i(o).e("group"))
          }, [
            b("h2", {
              class: B(i(o).e("title")),
              textContent: D(I.title)
            }, null, 10, ["textContent"]),
            xe(b("div", {
              class: B(i(o).e("content")),
              style: Ue(I.title ? void 0 : { margin: 0 })
            }, [
              le(I.$slots, "default", {}, () => [
                I.dangerouslyUseHTMLString ? (k(), W(Je, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: I.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), W("p", { key: 0 }, D(I.message), 1))
              ])
            ], 6), [
              [tn, I.message]
            ]),
            I.showClose ? (k(), te(i(ke), {
              key: 0,
              class: B(i(o).e("closeBtn")),
              onClick: Ae(d, ["stop"])
            }, {
              default: q(() => [
                Z(i(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Y("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var h_ = /* @__PURE__ */ Se(g_, [["__file", "notification.vue"]]);
const Zo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Gr = 16;
let y_ = 1;
const Kn = function(e = {}, t) {
  if (!Re)
    return { close: () => {
    } };
  (Xe(e) || so(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Zo[n].forEach(({ vm: f }) => {
    var p;
    o += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + Gr;
  }), o += Gr;
  const r = `notification_${y_++}`, a = e.onClose, s = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      b_(r, n, a);
    }
  };
  let l = document.body;
  St(e.appendTo) ? l = e.appendTo : Xe(e.appendTo) && (l = document.querySelector(e.appendTo)), St(l) || (l = document.body);
  const u = document.createElement("div"), c = Z(h_, s, Oe(s.message) ? s.message : so(s.message) ? () => s.message : null);
  return c.appContext = $t(t) ? Kn._context : t, c.props.onDestroy = () => {
    Bo(null, u);
  }, Bo(c, u), Zo[n].push({ vm: c }), l.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
wu.forEach((e) => {
  Kn[e] = (t = {}, n) => ((Xe(t) || so(t)) && (t = {
    message: t
  }), Kn({ ...t, type: e }, n));
});
function b_(e, t, n) {
  const o = Zo[t], r = o.findIndex(({ vm: c }) => {
    var f;
    return ((f = c.component) == null ? void 0 : f.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: a } = o[r];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, l = t.split("-")[0];
  o.splice(r, 1);
  const u = o.length;
  if (!(u < 1))
    for (let c = r; c < u; c++) {
      const { el: f, component: p } = o[c].vm, m = Number.parseInt(f.style[l], 10) - s - Gr;
      p.props.offset = m;
    }
}
function __() {
  for (const e of Object.values(Zo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Kn.closeAll = __;
Kn._context = null;
const w_ = Di(Kn, "$notify"), Nt = {
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
    o === "center" ? f_({
      message: t,
      type: n,
      duration: r,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : w_({
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
};
async function ot(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Pl;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Pl || (Pl = {}));
const E_ = "snippets-code:developer-mode", Eu = "snippets-code:frontend-diagnostics", C_ = 240, Qn = "[REDACTED]", xo = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Qn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Qn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Qn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Qn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Qn}`
), Cu = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return xo(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return xo(
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
    return xo(String(e));
  }
}, S_ = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, T_ = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Eu) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Ma = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(E_) === "true";
  } catch {
    return !1;
  }
}, O_ = (e, t, n) => {
  if (!Ma() || typeof localStorage > "u") return;
  const o = T_();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: S_(),
    message: xo(t),
    data: Cu(n)
  });
  try {
    localStorage.setItem(
      Eu,
      JSON.stringify(o.slice(-C_))
    );
  } catch {
  }
}, A_ = () => Ma(), I_ = (e) => e === "warn" || e === "error" || !1 || !1 || Ma(), $o = (e, t, n) => {
  O_(e, t, n), I_(e) && ot("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Cu(n)
  }).catch(() => {
  });
}, $n = {
  info: (e, t, ...n) => {
    $o("info", e, t);
  },
  error: (e, t) => {
    $o("error", e, t);
  },
  warn: (e, t) => {
    $o("warn", e, t);
  },
  debug: (e, t) => {
    A_() && $o("debug", e, t);
  }
};
async function L_() {
  return await ot("local_ai_get_config");
}
async function Ar(e) {
  return await ot("local_ai_save_config", { config: e });
}
async function P_(e) {
  return await ot("local_ai_scan_models", {
    config: e ?? null
  });
}
async function N_() {
  return await ot("local_ai_get_runtime_status");
}
async function Su() {
  return await ot("local_ai_get_status");
}
async function k_(e) {
  return await ot("local_ai_start_service", {
    config: e ?? null
  });
}
async function R_() {
  return await ot("local_ai_restart_service");
}
async function $_() {
  await ot("local_ai_stop_service");
}
async function M_(e) {
  return await ot("local_ai_chat", { request: e });
}
async function F_() {
  return await ot("local_ai_get_chat_histories");
}
async function D_(e) {
  return await ot("local_ai_save_chat_history", { history: e });
}
async function V_(e) {
  return await ot("local_ai_delete_chat_history", { historyId: e });
}
const x_ = { class: "local-ai-chat-shell" }, B_ = { class: "chat-sidebar panel-card" }, U_ = { class: "sidebar-header" }, z_ = { class: "sidebar-actions" }, W_ = { class: "sidebar-search" }, j_ = ["placeholder"], H_ = { class: "sidebar-section" }, K_ = { class: "section-title" }, G_ = { class: "chat-item-title" }, Y_ = { class: "chat-item-meta" }, q_ = { class: "sidebar-section recent-section" }, X_ = { class: "section-title" }, Z_ = {
  key: 0,
  class: "chat-list"
}, J_ = ["onClick"], Q_ = { class: "chat-item-title" }, e1 = { class: "chat-item-meta" }, t1 = ["onClick"], n1 = {
  key: 1,
  class: "sidebar-empty"
}, o1 = { class: "chat-panel panel-card" }, r1 = { class: "chat-topbar" }, a1 = { class: "chat-topbar-main" }, s1 = { class: "chat-title-row" }, l1 = { class: "chat-subtitle" }, i1 = { class: "chat-topbar-actions" }, u1 = { class: "chat-status-row" }, c1 = { class: "chat-status-item" }, d1 = { class: "chat-status-item" }, f1 = { class: "chat-status-item" }, p1 = {
  key: 0,
  class: "empty-state"
}, m1 = { class: "empty-card" }, v1 = { class: "empty-title" }, g1 = { class: "empty-desc" }, h1 = { class: "message-meta" }, y1 = { class: "message-bubble" }, b1 = {
  key: 1,
  class: "message-row message-row--assistant"
}, _1 = { class: "message-meta" }, w1 = { class: "message-bubble loading-text" }, E1 = ["placeholder", "onKeydown"], C1 = { class: "input-actions" }, S1 = { class: "input-buttons" }, T1 = /* @__PURE__ */ X({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = go(), n = Jd(), o = x(""), r = x([]), a = x(""), s = x(""), l = x(!1), u = x(!1), c = x(null), f = x(null);
    let p = null;
    const m = L(() => c.value?.healthy ? t("localAi.serviceHealthy") : c.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), h = L(() => r.value.find((V) => V.id === a.value) ?? null), v = L(() => h.value?.messages ?? []), g = L(() => {
      const V = o.value.trim().toLowerCase();
      return r.value.filter((K) => !V || K.title.toLowerCase().includes(V) || K.messages.some((oe) => oe.content.toLowerCase().includes(V))).slice().sort((K, oe) => oe.updatedAt.localeCompare(K.updatedAt));
    }), E = async () => {
      await Ie();
      const V = f.value;
      V && (V.scrollTop = V.scrollHeight);
    }, d = async () => {
      u.value = !0;
      try {
        c.value = await Su();
      } catch (V) {
        $n.warn("[LocalAI] refresh chat status failed", V);
      } finally {
        u.value = !1;
      }
    }, C = async () => {
      try {
        const V = await F_();
        r.value = V.map((K) => ({ id: K.id, title: K.title, updatedAt: K.updatedAt, updatedAtLabel: new Date(K.updatedAt).toLocaleString(), messages: K.turns.map((oe) => ({ id: oe.id, role: oe.role, content: oe.content })) })), !a.value && r.value[0] && (a.value = r.value[0].id);
      } catch (V) {
        $n.warn("[LocalAI] refresh histories failed", V);
      }
    }, I = async () => {
      await Promise.all([d(), C()]);
    }, T = async () => {
      const V = h.value;
      V && await D_({ id: V.id, title: V.title, createdAt: V.updatedAt, updatedAt: V.updatedAt, turns: V.messages.map((K) => ({ id: K.id, role: K.role, content: K.content, createdAt: V.updatedAt })) });
    }, y = () => {
      const V = `chat-${Date.now()}`;
      r.value.unshift({ id: V, title: "New Chat", updatedAt: (/* @__PURE__ */ new Date()).toISOString(), updatedAtLabel: "now", messages: [] }), a.value = V;
    }, A = (V) => {
      a.value = V;
    }, O = async (V) => {
      r.value = r.value.filter((K) => K.id !== V), await V_(V), a.value === V && (a.value = r.value[0]?.id ?? "");
    }, z = () => v.value.map((V) => ({ role: V.role, content: V.content })), U = async () => {
      const V = s.value.trim();
      if (!(!V || l.value)) {
        h.value || y(), h.value?.messages.push({ id: `${Date.now()}-user`, role: "user", content: V }), s.value = "", l.value = !0, await E();
        try {
          const K = await M_({ messages: z() });
          h.value?.messages.push({ id: `${Date.now()}-assistant`, role: "assistant", content: K.content }), h.value && (h.value.title = h.value.title === "New Chat" ? V.slice(0, 24) : h.value.title, h.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), h.value.updatedAtLabel = new Date(h.value.updatedAt).toLocaleString(), await T()), await d();
        } catch (K) {
          Nt.msg(`${t("localAi.chatFailed")}: ${K}`, "error"), h.value?.messages.push({ id: `${Date.now()}-assistant-error`, role: "assistant", content: String(K) });
        } finally {
          l.value = !1, await E();
        }
      }
    }, ee = async () => {
      h.value && (h.value.messages = []), await T();
    }, re = () => {
      n.push("/config/local-ai/settings");
    };
    return Ne(async () => {
      await I(), p = setInterval(() => {
        d().catch((V) => $n.warn("[LocalAI] status timer failed", V));
      }, 8e3);
    }), Jo(() => {
      p && clearInterval(p);
    }), (V, K) => (k(), W("main", x_, [
      b("aside", B_, [
        b("div", U_, [
          b("div", null, [
            b(
              "h2",
              null,
              D(i(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            b(
              "p",
              null,
              D(i(t)("localAi.chatEmpty")),
              1
              /* TEXT */
            )
          ]),
          b("div", z_, [
            Z(i(ct), {
              size: "small",
              type: "primary",
              onClick: y
            }, {
              default: q(() => [
                qe(
                  D(i(t)("common.add")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            Z(i(ct), {
              size: "small",
              plain: "",
              onClick: I
            }, {
              default: q(() => [
                qe(
                  D(i(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        b("div", W_, [
          xe(b("input", {
            "onUpdate:modelValue": K[0] || (K[0] = (oe) => ro(o) ? o.value = oe : null),
            class: "search-input",
            placeholder: i(t)("common.search")
          }, null, 8, j_), [
            [ao, i(o)]
          ])
        ]),
        b("div", H_, [
          b(
            "div",
            K_,
            D(i(t)("common.quickStart")),
            1
            /* TEXT */
          ),
          b("button", {
            class: "chat-list-item active",
            type: "button",
            onClick: y
          }, [
            b(
              "div",
              G_,
              D(i(t)("localAi.chatEmpty")),
              1
              /* TEXT */
            ),
            b(
              "div",
              Y_,
              D(i(t)("localAi.chatPlaceholder")),
              1
              /* TEXT */
            )
          ])
        ]),
        b("div", q_, [
          b(
            "div",
            X_,
            D(i(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          i(g).length ? (k(), W("div", Z_, [
            (k(!0), W(
              Je,
              null,
              Fn(i(g), (oe) => (k(), W("button", {
                key: oe.id,
                type: "button",
                class: B(["chat-list-item", i(a) === oe.id ? "active" : ""]),
                onClick: (P) => A(oe.id)
              }, [
                b(
                  "div",
                  Q_,
                  D(oe.title),
                  1
                  /* TEXT */
                ),
                b(
                  "div",
                  e1,
                  D(oe.updatedAtLabel),
                  1
                  /* TEXT */
                ),
                b("span", {
                  class: "chat-item-delete",
                  onClick: Ae((P) => O(oe.id), ["stop"])
                }, "×", 8, t1)
              ], 10, J_))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (k(), W(
            "div",
            n1,
            D(i(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      b("section", o1, [
        b("header", r1, [
          b("div", a1, [
            b("div", s1, [
              b(
                "h3",
                null,
                D(i(h)?.title ?? i(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              b(
                "span",
                {
                  class: B(["status-pill", i(c)?.healthy ? "ready" : ""])
                },
                D(i(m)),
                3
                /* TEXT, CLASS */
              )
            ]),
            b(
              "div",
              l1,
              D(i(c)?.baseUrl ?? "127.0.0.1"),
              1
              /* TEXT */
            )
          ]),
          b("div", i1, [
            Z(i(ct), {
              size: "small",
              plain: "",
              onClick: re
            }, {
              default: q(() => [
                qe(
                  D(i(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        b("div", u1, [
          b("div", c1, [
            b(
              "span",
              null,
              D(i(t)("localAi.serviceControl")),
              1
              /* TEXT */
            ),
            b(
              "b",
              null,
              D(i(m)),
              1
              /* TEXT */
            )
          ]),
          b("div", d1, [
            b(
              "span",
              null,
              D(i(t)("localAi.modelRuntime")),
              1
              /* TEXT */
            ),
            b(
              "b",
              null,
              D(i(c)?.baseUrl ?? "127.0.0.1"),
              1
              /* TEXT */
            )
          ]),
          b("div", f1, [
            b(
              "span",
              null,
              D(i(t)("localAi.generation")),
              1
              /* TEXT */
            ),
            b(
              "b",
              null,
              D(i(t)("localAi.generationDesc")),
              1
              /* TEXT */
            )
          ])
        ]),
        b(
          "div",
          {
            ref_key: "messageListRef",
            ref: f,
            class: "message-list"
          },
          [
            i(v).length ? Y("v-if", !0) : (k(), W("div", p1, [
              b("div", m1, [
                b(
                  "div",
                  v1,
                  D(i(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                b(
                  "div",
                  g1,
                  D(i(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])
            ])),
            (k(!0), W(
              Je,
              null,
              Fn(i(v), (oe) => (k(), W(
                "article",
                {
                  key: oe.id,
                  class: B(["message-row", `message-row--${oe.role}`])
                },
                [
                  b(
                    "div",
                    h1,
                    D(oe.role === "user" ? i(t)("localAi.you") : i(t)("localAi.assistant")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    y1,
                    D(oe.content),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            )),
            i(l) ? (k(), W("article", b1, [
              b(
                "div",
                _1,
                D(i(t)("localAi.assistant")),
                1
                /* TEXT */
              ),
              b(
                "div",
                w1,
                D(i(t)("localAi.thinking")),
                1
                /* TEXT */
              )
            ])) : Y("v-if", !0)
          ],
          512
          /* NEED_PATCH */
        ),
        b(
          "form",
          {
            class: "chat-input-card",
            onSubmit: Ae(U, ["prevent"])
          },
          [
            xe(b("textarea", {
              "onUpdate:modelValue": K[1] || (K[1] = (oe) => ro(s) ? s.value = oe : null),
              class: "chat-input",
              rows: "4",
              placeholder: i(t)("localAi.chatPlaceholder"),
              onKeydown: wt(Ae(U, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, E1), [
              [ao, i(s)]
            ]),
            b("div", C1, [
              K[2] || (K[2] = b(
                "div",
                { class: "input-hint" },
                "Ctrl + Enter",
                -1
                /* HOISTED */
              )),
              b("div", S1, [
                Z(i(ct), {
                  size: "small",
                  plain: "",
                  disabled: i(l) || !i(v).length,
                  onClick: ee
                }, {
                  default: q(() => [
                    qe(
                      D(i(t)("common.clear")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                Z(i(ct), {
                  type: "primary",
                  size: "small",
                  loading: i(l),
                  disabled: !i(s).trim(),
                  onClick: U
                }, {
                  default: q(() => [
                    qe(
                      D(i(t)("localAi.send")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), O1 = /* @__PURE__ */ oa(T1, [["__scopeId", "data-v-8cee4de2"]]), A1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: O1
}, Symbol.toStringTag, { value: "Module" }));
async function Nl(e = {}) {
  return typeof e == "object" && Object.freeze(e), await ot("plugin:dialog|open", { options: e });
}
const I1 = { class: "settings-panel local-ai-settings-shell" }, L1 = { class: "local-ai-hero panel-card" }, P1 = { class: "panel-title" }, N1 = { class: "hero-desc" }, k1 = { class: "header-actions" }, R1 = {
  key: 0,
  class: "settings-grid"
}, $1 = { class: "summary-panel panel-card" }, M1 = { class: "status-strip" }, F1 = { class: "summary-card" }, D1 = { class: "summary-card__title" }, V1 = { class: "summary-card__desc" }, x1 = { class: "service-controls" }, B1 = { class: "service-url" }, U1 = { class: "summary-card" }, z1 = { class: "summary-card__title" }, W1 = { class: "summary-card__desc" }, j1 = { class: "summary-meta" }, H1 = { class: "form-panel panel-card" }, K1 = { class: "settings-section" }, G1 = { class: "settings-section__header" }, Y1 = { class: "field-stack" }, q1 = { class: "field-row" }, X1 = { class: "path-control" }, Z1 = { class: "field-row" }, J1 = { class: "field-row" }, Q1 = { class: "field-row" }, ew = { class: "path-control" }, tw = ["placeholder"], nw = { class: "settings-section grid-two" }, ow = { class: "settings-section__header" }, rw = { class: "param-grid" }, aw = { class: "number-field" }, sw = { class: "number-field" }, lw = { class: "number-field" }, iw = { class: "number-field" }, uw = { class: "number-field" }, cw = { class: "number-field" }, dw = { class: "settings-section grid-two" }, fw = { class: "settings-section__header" }, pw = { class: "switch-grid" }, mw = { class: "settings-section grid-two" }, vw = { class: "settings-section__header" }, gw = { class: "switch-grid switch-grid--two" }, hw = { class: "number-field" }, yw = { class: "number-field" }, bw = { class: "settings-section grid-two" }, _w = { class: "settings-section__header" }, ww = { class: "param-grid param-grid--three" }, Ew = { class: "number-field" }, Cw = { class: "number-field" }, Sw = { class: "number-field" }, Tw = { class: "settings-footer" }, Ow = ["title"], Aw = /* @__PURE__ */ X({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = go(), n = x(null), o = x(null), r = x(null), a = x(null), s = x(!1), l = x(!1), u = x(!1), c = x(!1), f = x(!1);
    let p = null;
    const m = L(() => !!a.value?.selectedModelPath), h = L({ get: () => n.value?.modelPath ?? "", set: (P) => {
      n.value && (n.value.modelPath = P || void 0);
    } }), v = L({ get: () => n.value?.mmprojPath ?? "", set: (P) => {
      n.value && (n.value.mmprojPath = P || void 0);
    } }), g = L(() => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), E = L(() => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = L(() => r.value?.healthy ? t("localAi.serviceHealthy") : r.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), C = (P) => P.split(/[\\/]+/).pop() ?? P, I = async () => {
      s.value = !0;
      try {
        n.value = await L_(), await Promise.all([T(), A(), y()]);
      } catch (P) {
        $n.error("[LocalAI] refresh settings failed", P), Nt.msg(`${t("localAi.refreshFailed")}: ${P}`, "error");
      } finally {
        s.value = !1;
      }
    }, T = async () => {
      o.value = await N_();
    }, y = async () => {
      r.value = await Su();
    }, A = async () => {
      n.value && (a.value = await P_(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, O = async () => {
      if (n.value)
        try {
          await Ar(n.value);
        } catch (P) {
          $n.warn("[LocalAI] autosave failed", P);
        }
    }, z = async () => {
      if (n.value) {
        l.value = !0;
        try {
          n.value = await Ar(n.value), await Promise.all([T(), A(), y()]), Nt.msg(t("localAi.configSaved"));
        } catch (P) {
          Nt.msg(`${t("localAi.configSaveFailed")}: ${P}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, U = async () => {
      const P = await Nl({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !P || Array.isArray(P) || !n.value || (n.value.modelDir = P, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await A());
    }, ee = async () => {
      const P = await Nl({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !P || Array.isArray(P) || !n.value || (n.value.runtimePath = P, await O(), await T());
    }, re = async () => {
      if (n.value) {
        u.value = !0;
        try {
          await Ar(n.value), r.value = await k_(n.value), Nt.msg(t("localAi.serviceStarted"));
        } catch (P) {
          Nt.msg(`${t("localAi.serviceStartFailed")}: ${P}`, "error");
        } finally {
          u.value = !1;
        }
      }
    }, V = async () => {
      c.value = !0;
      try {
        await z(), r.value = await R_(), Nt.msg(t("localAi.serviceRestarted"));
      } catch (P) {
        Nt.msg(`${t("localAi.serviceRestartFailed")}: ${P}`, "error");
      } finally {
        c.value = !1;
      }
    }, K = async () => {
      f.value = !0;
      try {
        await $_(), await y(), Nt.msg(t("localAi.serviceStoppedMsg"));
      } catch (P) {
        Nt.msg(`${t("localAi.serviceStopFailed")}: ${P}`, "error");
      } finally {
        f.value = !1;
      }
    }, oe = () => {
      window.location.hash = "#/config/local-ai";
    };
    return Ne(async () => {
      await I(), p = setInterval(() => {
        y().catch((P) => $n.warn("[LocalAI] status refresh failed", P));
      }, 5e3);
    }), Jo(() => {
      p && clearInterval(p);
    }), (P, R) => {
      const F = Kb, ne = Hb, J = Lb, de = Qb;
      return k(), W("div", I1, [
        b("header", L1, [
          b("div", null, [
            b(
              "h3",
              P1,
              D(i(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              N1,
              D(i(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", k1, [
            Z(i(ct), {
              size: "small",
              plain: "",
              onClick: oe
            }, {
              default: q(() => [
                qe(
                  D(i(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            Z(i(ct), {
              size: "small",
              loading: i(s),
              onClick: I
            }, {
              default: q(() => [
                qe(
                  D(i(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        i(n) ? (k(), W("main", R1, [
          b("aside", $1, [
            b("div", M1, [
              b(
                "div",
                {
                  class: B(["status-item", { ready: i(o)?.available }])
                },
                [
                  R[20] || (R[20] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(i(g)),
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
                  class: B(["status-item", { ready: i(m) }])
                },
                [
                  R[21] || (R[21] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(i(E)),
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
                  class: B(["status-item", { ready: i(r)?.healthy }])
                },
                [
                  R[22] || (R[22] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(i(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", F1, [
              b(
                "div",
                D1,
                D(i(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                V1,
                D(i(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", x1, [
                Z(i(ct), {
                  type: "primary",
                  size: "small",
                  loading: i(u),
                  disabled: i(r)?.running,
                  onClick: re
                }, {
                  default: q(() => [
                    qe(
                      D(i(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                Z(i(ct), {
                  size: "small",
                  loading: i(c),
                  disabled: !i(r)?.running,
                  onClick: V
                }, {
                  default: q(() => [
                    qe(
                      D(i(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                Z(i(ct), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: i(f),
                  disabled: !i(r)?.running,
                  onClick: K
                }, {
                  default: q(() => [
                    qe(
                      D(i(t)("localAi.stopService")),
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
                B1,
                D(i(r)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", U1, [
              b(
                "div",
                z1,
                D(i(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                W1,
                D(i(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", j1, [
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(i(o)?.available ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(i(m) ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(i(r)?.healthy ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          b("section", H1, [
            b("div", K1, [
              b("div", G1, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Y1, [
                b("label", q1, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  b("div", X1, [
                    xe(b(
                      "input",
                      {
                        "onUpdate:modelValue": R[0] || (R[0] = (G) => i(n).modelDir = G),
                        class: "text-input",
                        onChange: A
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ao, i(n).modelDir]
                    ]),
                    Z(i(ct), {
                      size: "small",
                      plain: "",
                      onClick: U
                    }, {
                      default: q(() => [
                        qe(
                          D(i(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                b("label", Z1, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  Z(ne, {
                    modelValue: i(h),
                    "onUpdate:modelValue": R[1] || (R[1] = (G) => ro(h) ? h.value = G : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: q(() => [
                      (k(!0), W(
                        Je,
                        null,
                        Fn(i(a)?.mainModels ?? [], (G) => (k(), te(F, {
                          key: G,
                          label: C(G),
                          value: G
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                b("label", J1, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  Z(ne, {
                    modelValue: i(v),
                    "onUpdate:modelValue": R[2] || (R[2] = (G) => ro(v) ? v.value = G : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: q(() => [
                      (k(!0), W(
                        Je,
                        null,
                        Fn(i(a)?.mmprojModels ?? [], (G) => (k(), te(F, {
                          key: G,
                          label: C(G),
                          value: G
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                b("label", Q1, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  b("div", ew, [
                    xe(b("input", {
                      "onUpdate:modelValue": R[3] || (R[3] = (G) => i(n).runtimePath = G),
                      class: "text-input",
                      placeholder: i(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, tw), [
                      [ao, i(n).runtimePath]
                    ]),
                    Z(i(ct), {
                      size: "small",
                      plain: "",
                      onClick: ee
                    }, {
                      default: q(() => [
                        qe(
                          D(i(t)("common.browse")),
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
            b("div", nw, [
              b("div", ow, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", rw, [
                b("label", aw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).ctxSize,
                    "onUpdate:modelValue": R[4] || (R[4] = (G) => i(n).ctxSize = G),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", sw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).gpuLayers,
                    "onUpdate:modelValue": R[5] || (R[5] = (G) => i(n).gpuLayers = G),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", lw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).threads,
                    "onUpdate:modelValue": R[6] || (R[6] = (G) => i(n).threads = G),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", iw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).batchSize,
                    "onUpdate:modelValue": R[7] || (R[7] = (G) => i(n).batchSize = G),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", uw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).ubatchSize,
                    "onUpdate:modelValue": R[8] || (R[8] = (G) => i(n).ubatchSize = G),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", cw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).mainGpu,
                    "onUpdate:modelValue": R[9] || (R[9] = (G) => i(n).mainGpu = G),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", dw, [
              b("div", fw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", pw, [
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  Z(de, {
                    modelValue: i(n).flashAttn,
                    "onUpdate:modelValue": R[10] || (R[10] = (G) => i(n).flashAttn = G)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  Z(de, {
                    modelValue: i(n).kvOffload,
                    "onUpdate:modelValue": R[11] || (R[11] = (G) => i(n).kvOffload = G)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  Z(de, {
                    modelValue: i(n).mmap,
                    "onUpdate:modelValue": R[12] || (R[12] = (G) => i(n).mmap = G)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", mw, [
              b("div", vw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", gw, [
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  Z(de, {
                    modelValue: i(n).autoStartOnRequest,
                    "onUpdate:modelValue": R[13] || (R[13] = (G) => i(n).autoStartOnRequest = G)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  Z(de, {
                    modelValue: i(n).keepAlive,
                    "onUpdate:modelValue": R[14] || (R[14] = (G) => i(n).keepAlive = G)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", hw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": R[15] || (R[15] = (G) => i(n).idleTimeoutMinutes = G),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", yw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).requestTimeoutSecs,
                    "onUpdate:modelValue": R[16] || (R[16] = (G) => i(n).requestTimeoutSecs = G),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", bw, [
              b("div", _w, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", ww, [
                b("label", Ew, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).temperature,
                    "onUpdate:modelValue": R[17] || (R[17] = (G) => i(n).temperature = G),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Cw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).maxTokens,
                    "onUpdate:modelValue": R[18] || (R[18] = (G) => i(n).maxTokens = G),
                    min: 64,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Sw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  Z(J, {
                    modelValue: i(n).port,
                    "onUpdate:modelValue": R[19] || (R[19] = (G) => i(n).port = G),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", Tw, [
              Z(i(ct), {
                type: "primary",
                loading: i(l),
                onClick: z
              }, {
                default: q(() => [
                  qe(
                    D(i(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              i(r)?.commandLine ? (k(), W("span", {
                key: 0,
                class: "command-line",
                title: i(r).commandLine
              }, D(i(r).commandLine), 9, Ow)) : Y("v-if", !0)
            ])
          ])
        ])) : Y("v-if", !0)
      ]);
    };
  }
}), Iw = /* @__PURE__ */ oa(Aw, [["__scopeId", "data-v-1e10918c"]]), Lw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iw
}, Symbol.toStringTag, { value: "Module" }));
export {
  Nw as activate,
  Nw as default
};
