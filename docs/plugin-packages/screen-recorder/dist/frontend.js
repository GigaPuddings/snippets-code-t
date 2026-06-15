import * as Wn from "vue";
import { inject as Ke, ref as j, shallowRef as eo, computed as F, watch as Ye, onMounted as tn, onUnmounted as lr, defineComponent as ae, h as Os, createVNode as X, Text as to, Fragment as Ge, getCurrentInstance as Et, unref as I, readonly as no, getCurrentScope as ro, onScopeDispose as so, nextTick as bt, isRef as ao, warn as oo, provide as io, createElementBlock as ne, openBlock as G, mergeProps as lo, renderSlot as St, createElementVNode as O, normalizeClass as re, Transition as cr, withCtx as st, withDirectives as at, normalizeStyle as Lt, createTextVNode as co, toDisplayString as de, vShow as wn, shallowReactive as uo, createBlock as xe, createCommentVNode as Fe, resolveDynamicComponent as Ps, withModifiers as Kt, isVNode as Xt, render as bn, renderList as fo, vModelSelect as $n } from "vue";
const lf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => af)
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ho(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Mr = typeof window < "u", ut = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), po = (e, t, n) => mo({ l: e, k: t, s: n }), mo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), se = (e) => typeof e == "number" && isFinite(e), go = (e) => ur(e) === "[object Date]", Cn = (e) => ur(e) === "[object RegExp]", On = (e) => H(e) && Object.keys(e).length === 0, ie = Object.assign, _o = Object.create, K = (e = null) => _o(e);
let Rr;
const pn = () => Rr || (Rr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : K());
function Dr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function xr(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function yo(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, a) => `${s}="${xr(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, a) => `${s}='${xr(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const vo = Object.prototype.hasOwnProperty;
function Le(e, t) {
  return vo.call(e, t);
}
const te = Array.isArray, Z = (e) => typeof e == "function", R = (e) => typeof e == "string", ee = (e) => typeof e == "boolean", B = (e) => e !== null && typeof e == "object", wo = (e) => B(e) && Z(e.then) && Z(e.catch), As = Object.prototype.toString, ur = (e) => As.call(e), H = (e) => ur(e) === "[object Object]", bo = (e) => e == null ? "" : te(e) || H(e) && e.toString === As ? JSON.stringify(e, null, 2) : String(e);
function dr(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const on = (e) => !B(e) || te(e);
function mn(e, t) {
  if (on(e) || on(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (B(r[a]) && !B(s[a]) && (s[a] = Array.isArray(r[a]) ? [] : K()), on(s[a]) || on(r[a]) ? s[a] = r[a] : n.push({ src: r[a], des: s[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Co(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Xn(e, t, n) {
  return { start: e, end: t };
}
const V = {
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
}, Eo = 17;
function Pn(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = e, c = new SyntaxError(String(o));
  return c.code = e, t && (c.location = t), c.domain = r, c;
}
function So(e) {
  throw e;
}
const Te = " ", Lo = "\r", ue = `
`, ko = "\u2028", No = "\u2029";
function To(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (g) => t[g] === Lo && t[g + 1] === ue, c = (g) => t[g] === ue, u = (g) => t[g] === No, h = (g) => t[g] === ko, _ = (g) => o(g) || c(g) || u(g) || h(g), w = () => n, k = () => r, A = () => s, D = () => a, b = (g) => o(g) || u(g) || h(g) ? ue : t[g], N = () => b(n), d = () => b(n + a);
  function C() {
    return a = 0, _(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function y() {
    return o(n + a) && a++, a++, t[n + a];
  }
  function v() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function L(g = 0) {
    a = g;
  }
  function S() {
    const g = n + a;
    for (; g !== n; )
      C();
    a = 0;
  }
  return {
    index: w,
    line: k,
    column: A,
    peekOffset: D,
    charAt: b,
    currentChar: N,
    currentPeek: d,
    next: C,
    peek: y,
    reset: v,
    resetPeek: L,
    skipToPeek: S
  };
}
const De = void 0, Io = ".", Fr = "'", Oo = "tokenizer";
function Po(e, t = {}) {
  const n = t.location !== !1, r = To(e), s = () => r.index(), a = () => Co(r.line(), r.column(), r.index()), o = a(), c = s(), u = {
    currentType: 13,
    offset: c,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: c,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, h = () => u, { onError: _ } = t;
  function w(i, l, E, ...M) {
    const Y = h();
    if (l.column += E, l.offset += E, _) {
      const W = n ? Xn(Y.startLoc, l) : null, m = Pn(i, W, {
        domain: Oo,
        args: M
      });
      _(m);
    }
  }
  function k(i, l, E) {
    i.endLoc = a(), i.currentType = l;
    const M = { type: l };
    return n && (M.loc = Xn(i.startLoc, i.endLoc)), E != null && (M.value = E), M;
  }
  const A = (i) => k(
    i,
    13
    /* TokenTypes.EOF */
  );
  function D(i, l) {
    return i.currentChar() === l ? (i.next(), l) : (w(V.EXPECTED_TOKEN, a(), 0, l), "");
  }
  function b(i) {
    let l = "";
    for (; i.currentPeek() === Te || i.currentPeek() === ue; )
      l += i.currentPeek(), i.peek();
    return l;
  }
  function N(i) {
    const l = b(i);
    return i.skipToPeek(), l;
  }
  function d(i) {
    if (i === De)
      return !1;
    const l = i.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l === 95;
  }
  function C(i) {
    if (i === De)
      return !1;
    const l = i.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function y(i, l) {
    const { currentType: E } = l;
    if (E !== 2)
      return !1;
    b(i);
    const M = d(i.currentPeek());
    return i.resetPeek(), M;
  }
  function v(i, l) {
    const { currentType: E } = l;
    if (E !== 2)
      return !1;
    b(i);
    const M = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), Y = C(M);
    return i.resetPeek(), Y;
  }
  function L(i, l) {
    const { currentType: E } = l;
    if (E !== 2)
      return !1;
    b(i);
    const M = i.currentPeek() === Fr;
    return i.resetPeek(), M;
  }
  function S(i, l) {
    const { currentType: E } = l;
    if (E !== 7)
      return !1;
    b(i);
    const M = i.currentPeek() === ".";
    return i.resetPeek(), M;
  }
  function g(i, l) {
    const { currentType: E } = l;
    if (E !== 8)
      return !1;
    b(i);
    const M = d(i.currentPeek());
    return i.resetPeek(), M;
  }
  function U(i, l) {
    const { currentType: E } = l;
    if (!(E === 7 || E === 11))
      return !1;
    b(i);
    const M = i.currentPeek() === ":";
    return i.resetPeek(), M;
  }
  function q(i, l) {
    const { currentType: E } = l;
    if (E !== 9)
      return !1;
    const M = () => {
      const W = i.currentPeek();
      return W === "{" ? d(i.peek()) : W === "@" || W === "|" || W === ":" || W === "." || W === Te || !W ? !1 : W === ue ? (i.peek(), M()) : _e(i, !1);
    }, Y = M();
    return i.resetPeek(), Y;
  }
  function fe(i) {
    b(i);
    const l = i.currentPeek() === "|";
    return i.resetPeek(), l;
  }
  function _e(i, l = !0) {
    const E = (Y = !1, W = "") => {
      const m = i.currentPeek();
      return m === "{" || m === "@" || !m ? Y : m === "|" ? !(W === Te || W === ue) : m === Te ? (i.peek(), E(!0, Te)) : m === ue ? (i.peek(), E(!0, ue)) : !0;
    }, M = E();
    return l && i.resetPeek(), M;
  }
  function Q(i, l) {
    const E = i.currentChar();
    return E === De ? De : l(E) ? (i.next(), E) : null;
  }
  function Mt(i) {
    const l = i.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l >= 48 && l <= 57 || // 0-9
    l === 95 || // _
    l === 36;
  }
  function Rt(i) {
    return Q(i, Mt);
  }
  function Dt(i) {
    const l = i.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l >= 48 && l <= 57 || // 0-9
    l === 95 || // _
    l === 36 || // $
    l === 45;
  }
  function ht(i) {
    return Q(i, Dt);
  }
  function xt(i) {
    const l = i.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function Ft(i) {
    return Q(i, xt);
  }
  function ye(i) {
    const l = i.charCodeAt(0);
    return l >= 48 && l <= 57 || // 0-9
    l >= 65 && l <= 70 || // A-F
    l >= 97 && l <= 102;
  }
  function he(i) {
    return Q(i, ye);
  }
  function Ne(i) {
    let l = "", E = "";
    for (; l = Ft(i); )
      E += l;
    return E;
  }
  function ze(i) {
    let l = "";
    for (; ; ) {
      const E = i.currentChar();
      if (E === "{" || E === "}" || E === "@" || E === "|" || !E)
        break;
      if (E === Te || E === ue)
        if (_e(i))
          l += E, i.next();
        else {
          if (fe(i))
            break;
          l += E, i.next();
        }
      else
        l += E, i.next();
    }
    return l;
  }
  function Wt(i) {
    N(i);
    let l = "", E = "";
    for (; l = ht(i); )
      E += l;
    const M = i.currentChar();
    if (M && M !== "}" && M !== De && M !== Te && M !== ue && M !== "　") {
      const Y = be(i);
      return w(V.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, E + Y), E + Y;
    }
    return i.currentChar() === De && w(V.UNTERMINATED_CLOSING_BRACE, a(), 0), E;
  }
  function $t(i) {
    N(i);
    let l = "";
    return i.currentChar() === "-" ? (i.next(), l += `-${Ne(i)}`) : l += Ne(i), i.currentChar() === De && w(V.UNTERMINATED_CLOSING_BRACE, a(), 0), l;
  }
  function nn(i) {
    return i !== Fr && i !== ue;
  }
  function pt(i) {
    N(i), D(i, "'");
    let l = "", E = "";
    for (; l = Q(i, nn); )
      l === "\\" ? E += Je(i) : E += l;
    const M = i.currentChar();
    return M === ue || M === De ? (w(V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), M === ue && (i.next(), D(i, "'")), E) : (D(i, "'"), E);
  }
  function Je(i) {
    const l = i.currentChar();
    switch (l) {
      case "\\":
      case "'":
        return i.next(), `\\${l}`;
      case "u":
        return mt(i, l, 4);
      case "U":
        return mt(i, l, 6);
      default:
        return w(V.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, l), "";
    }
  }
  function mt(i, l, E) {
    D(i, l);
    let M = "";
    for (let Y = 0; Y < E; Y++) {
      const W = he(i);
      if (!W) {
        w(V.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${l}${M}${i.currentChar()}`);
        break;
      }
      M += W;
    }
    return `\\${l}${M}`;
  }
  function Ut(i) {
    return i !== "{" && i !== "}" && i !== Te && i !== ue;
  }
  function be(i) {
    N(i);
    let l = "", E = "";
    for (; l = Q(i, Ut); )
      E += l;
    return E;
  }
  function gt(i) {
    let l = "", E = "";
    for (; l = Rt(i); )
      E += l;
    return E;
  }
  function _t(i) {
    const l = (E) => {
      const M = i.currentChar();
      return M === "{" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === Te ? E : (E += M, i.next(), l(E));
    };
    return l("");
  }
  function ve(i) {
    N(i);
    const l = D(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return N(i), l;
  }
  function je(i, l) {
    let E = null;
    switch (i.currentChar()) {
      case "{":
        return l.braceNest >= 1 && w(V.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), i.next(), E = k(
          l,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), N(i), l.braceNest++, E;
      case "}":
        return l.braceNest > 0 && l.currentType === 2 && w(V.EMPTY_PLACEHOLDER, a(), 0), i.next(), E = k(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), l.braceNest--, l.braceNest > 0 && N(i), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), E;
      case "@":
        return l.braceNest > 0 && w(V.UNTERMINATED_CLOSING_BRACE, a(), 0), E = Ce(i, l) || A(l), l.braceNest = 0, E;
      default: {
        let Y = !0, W = !0, m = !0;
        if (fe(i))
          return l.braceNest > 0 && w(V.UNTERMINATED_CLOSING_BRACE, a(), 0), E = k(l, 1, ve(i)), l.braceNest = 0, l.inLinked = !1, E;
        if (l.braceNest > 0 && (l.currentType === 4 || l.currentType === 5 || l.currentType === 6))
          return w(V.UNTERMINATED_CLOSING_BRACE, a(), 0), l.braceNest = 0, Ae(i, l);
        if (Y = y(i, l))
          return E = k(l, 4, Wt(i)), N(i), E;
        if (W = v(i, l))
          return E = k(l, 5, $t(i)), N(i), E;
        if (m = L(i, l))
          return E = k(l, 6, pt(i)), N(i), E;
        if (!Y && !W && !m)
          return E = k(l, 12, be(i)), w(V.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, E.value), N(i), E;
        break;
      }
    }
    return E;
  }
  function Ce(i, l) {
    const { currentType: E } = l;
    let M = null;
    const Y = i.currentChar();
    switch ((E === 7 || E === 8 || E === 11 || E === 9) && (Y === ue || Y === Te) && w(V.INVALID_LINKED_FORMAT, a(), 0), Y) {
      case "@":
        return i.next(), M = k(
          l,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), l.inLinked = !0, M;
      case ".":
        return N(i), i.next(), k(
          l,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return N(i), i.next(), k(
          l,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return fe(i) ? (M = k(l, 1, ve(i)), l.braceNest = 0, l.inLinked = !1, M) : S(i, l) || U(i, l) ? (N(i), Ce(i, l)) : g(i, l) ? (N(i), k(l, 11, gt(i))) : q(i, l) ? (N(i), Y === "{" ? je(i, l) || M : k(l, 10, _t(i))) : (E === 7 && w(V.INVALID_LINKED_FORMAT, a(), 0), l.braceNest = 0, l.inLinked = !1, Ae(i, l));
    }
  }
  function Ae(i, l) {
    let E = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (l.braceNest > 0)
      return je(i, l) || A(l);
    if (l.inLinked)
      return Ce(i, l) || A(l);
    switch (i.currentChar()) {
      case "{":
        return je(i, l) || A(l);
      case "}":
        return w(V.UNBALANCED_CLOSING_BRACE, a(), 0), i.next(), k(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ce(i, l) || A(l);
      default: {
        if (fe(i))
          return E = k(l, 1, ve(i)), l.braceNest = 0, l.inLinked = !1, E;
        if (_e(i))
          return k(l, 0, ze(i));
        break;
      }
    }
    return E;
  }
  function yt() {
    const { currentType: i, offset: l, startLoc: E, endLoc: M } = u;
    return u.lastType = i, u.lastOffset = l, u.lastStartLoc = E, u.lastEndLoc = M, u.offset = s(), u.startLoc = a(), r.currentChar() === De ? k(
      u,
      13
      /* TokenTypes.EOF */
    ) : Ae(r, u);
  }
  return {
    nextToken: yt,
    currentOffset: s,
    currentPosition: a,
    context: h
  };
}
const Ao = "parser", Mo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ro(e, t, n) {
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
function Do(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, C, y, v, ...L) {
    const S = d.currentPosition();
    if (S.offset += v, S.column += v, n) {
      const g = t ? Xn(y, S) : null, U = Pn(C, g, {
        domain: Ao,
        args: L
      });
      n(U);
    }
  }
  function s(d, C, y) {
    const v = { type: d };
    return t && (v.start = C, v.end = C, v.loc = { start: y, end: y }), v;
  }
  function a(d, C, y, v) {
    t && (d.end = C, d.loc && (d.loc.end = y));
  }
  function o(d, C) {
    const y = d.context(), v = s(3, y.offset, y.startLoc);
    return v.value = C, a(v, d.currentOffset(), d.currentPosition()), v;
  }
  function c(d, C) {
    const y = d.context(), { lastOffset: v, lastStartLoc: L } = y, S = s(5, v, L);
    return S.index = parseInt(C, 10), d.nextToken(), a(S, d.currentOffset(), d.currentPosition()), S;
  }
  function u(d, C) {
    const y = d.context(), { lastOffset: v, lastStartLoc: L } = y, S = s(4, v, L);
    return S.key = C, d.nextToken(), a(S, d.currentOffset(), d.currentPosition()), S;
  }
  function h(d, C) {
    const y = d.context(), { lastOffset: v, lastStartLoc: L } = y, S = s(9, v, L);
    return S.value = C.replace(Mo, Ro), d.nextToken(), a(S, d.currentOffset(), d.currentPosition()), S;
  }
  function _(d) {
    const C = d.nextToken(), y = d.context(), { lastOffset: v, lastStartLoc: L } = y, S = s(8, v, L);
    return C.type !== 11 ? (r(d, V.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0), S.value = "", a(S, v, L), {
      nextConsumeToken: C,
      node: S
    }) : (C.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ie(C)), S.value = C.value || "", a(S, d.currentOffset(), d.currentPosition()), {
      node: S
    });
  }
  function w(d, C) {
    const y = d.context(), v = s(7, y.offset, y.startLoc);
    return v.value = C, a(v, d.currentOffset(), d.currentPosition()), v;
  }
  function k(d) {
    const C = d.context(), y = s(6, C.offset, C.startLoc);
    let v = d.nextToken();
    if (v.type === 8) {
      const L = _(d);
      y.modifier = L.node, v = L.nextConsumeToken || d.nextToken();
    }
    switch (v.type !== 9 && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(v)), v = d.nextToken(), v.type === 2 && (v = d.nextToken()), v.type) {
      case 10:
        v.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(v)), y.key = w(d, v.value || "");
        break;
      case 4:
        v.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(v)), y.key = u(d, v.value || "");
        break;
      case 5:
        v.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(v)), y.key = c(d, v.value || "");
        break;
      case 6:
        v.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(v)), y.key = h(d, v.value || "");
        break;
      default: {
        r(d, V.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const L = d.context(), S = s(7, L.offset, L.startLoc);
        return S.value = "", a(S, L.offset, L.startLoc), y.key = S, a(y, L.offset, L.startLoc), {
          nextConsumeToken: v,
          node: y
        };
      }
    }
    return a(y, d.currentOffset(), d.currentPosition()), {
      node: y
    };
  }
  function A(d) {
    const C = d.context(), y = C.currentType === 1 ? d.currentOffset() : C.offset, v = C.currentType === 1 ? C.endLoc : C.startLoc, L = s(2, y, v);
    L.items = [];
    let S = null;
    do {
      const q = S || d.nextToken();
      switch (S = null, q.type) {
        case 0:
          q.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(q)), L.items.push(o(d, q.value || ""));
          break;
        case 5:
          q.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(q)), L.items.push(c(d, q.value || ""));
          break;
        case 4:
          q.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(q)), L.items.push(u(d, q.value || ""));
          break;
        case 6:
          q.value == null && r(d, V.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ie(q)), L.items.push(h(d, q.value || ""));
          break;
        case 7: {
          const fe = k(d);
          L.items.push(fe.node), S = fe.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const g = C.currentType === 1 ? C.lastOffset : d.currentOffset(), U = C.currentType === 1 ? C.lastEndLoc : d.currentPosition();
    return a(L, g, U), L;
  }
  function D(d, C, y, v) {
    const L = d.context();
    let S = v.items.length === 0;
    const g = s(1, C, y);
    g.cases = [], g.cases.push(v);
    do {
      const U = A(d);
      S || (S = U.items.length === 0), g.cases.push(U);
    } while (L.currentType !== 13);
    return S && r(d, V.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0), a(g, d.currentOffset(), d.currentPosition()), g;
  }
  function b(d) {
    const C = d.context(), { offset: y, startLoc: v } = C, L = A(d);
    return C.currentType === 13 ? L : D(d, y, v, L);
  }
  function N(d) {
    const C = Po(d, ie({}, e)), y = C.context(), v = s(0, y.offset, y.startLoc);
    return t && v.loc && (v.loc.source = d), v.body = b(C), e.onCacheKey && (v.cacheKey = e.onCacheKey(d)), y.currentType !== 13 && r(C, V.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, d[y.offset] || ""), a(v, C.currentOffset(), C.currentPosition()), v;
  }
  return { parse: N };
}
function Ie(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function xo(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Wr(e, t) {
  for (let n = 0; n < e.length; n++)
    fr(e[n], t);
}
function fr(e, t) {
  switch (e.type) {
    case 1:
      Wr(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Wr(e.items, t);
      break;
    case 6: {
      fr(e.key, t), t.helper(
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
function Fo(e, t = {}) {
  const n = xo(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && fr(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Wo(e) {
  const t = e.body;
  return t.type === 2 ? $r(t) : t.cases.forEach((n) => $r(n)), e;
}
function $r(e) {
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
      e.static = dr(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Ct(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ct(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Ct(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Ct(n[r]);
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
      Ct(t.key), t.k = t.key, delete t.key, t.modifier && (Ct(t.modifier), t.m = t.modifier, delete t.modifier);
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
function $o(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t, a = t.location !== !1, o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  a && e.loc && (o.source = e.loc.source);
  const c = () => o;
  function u(b, N) {
    o.code += b;
  }
  function h(b, N = !0) {
    const d = N ? r : "";
    u(s ? d + "  ".repeat(b) : d);
  }
  function _(b = !0) {
    const N = ++o.indentLevel;
    b && h(N);
  }
  function w(b = !0) {
    const N = --o.indentLevel;
    b && h(N);
  }
  function k() {
    h(o.indentLevel);
  }
  return {
    context: c,
    push: u,
    indent: _,
    deindent: w,
    newline: k,
    helper: (b) => `_${b}`,
    needIndent: () => o.needIndent
  };
}
function Uo(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), kt(e, t.key), t.modifier ? (e.push(", "), kt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function zo(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (kt(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function jo(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (kt(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Ho(e, t) {
  t.body ? kt(e, t.body) : e.push("null");
}
function kt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ho(e, t);
      break;
    case 1:
      jo(e, t);
      break;
    case 2:
      zo(e, t);
      break;
    case 6:
      Uo(e, t);
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
const Bo = (e, t = {}) => {
  const n = R(t.mode) ? t.mode : "normal", r = R(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], c = $o(e, {
    filename: r,
    breakLineCode: s,
    needIndent: a
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(a), o.length > 0 && (c.push(`const { ${dr(o.map((_) => `${_}: _${_}`), ", ")} } = ctx`), c.newline()), c.push("return "), kt(c, e), c.deindent(a), c.push("}"), delete e.helpers;
  const { code: u, map: h } = c.context();
  return {
    ast: e,
    code: u,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Vo(e, t = {}) {
  const n = ie({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, c = Do(n).parse(e);
  return r ? (a && Wo(c), s && Ct(c), { ast: c, code: "" }) : (Fo(c, n), Bo(c, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Go() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Pe(e) {
  return B(e) && hr(e) === 0 && (Le(e, "b") || Le(e, "body"));
}
const Ms = ["b", "body"];
function Ko(e) {
  return Xe(e, Ms);
}
const Rs = ["c", "cases"];
function Yo(e) {
  return Xe(e, Rs, []);
}
const Ds = ["s", "static"];
function Xo(e) {
  return Xe(e, Ds);
}
const xs = ["i", "items"];
function qo(e) {
  return Xe(e, xs, []);
}
const Fs = ["t", "type"];
function hr(e) {
  return Xe(e, Fs);
}
const Ws = ["v", "value"];
function ln(e, t) {
  const n = Xe(e, Ws);
  if (n != null)
    return n;
  throw qt(t);
}
const $s = ["m", "modifier"];
function Jo(e) {
  return Xe(e, $s);
}
const Us = ["k", "key"];
function Zo(e) {
  const t = Xe(e, Us);
  if (t)
    return t;
  throw qt(
    6
    /* NodeTypes.Linked */
  );
}
function Xe(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Le(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const zs = [
  ...Ms,
  ...Rs,
  ...Ds,
  ...xs,
  ...Us,
  ...$s,
  ...Ws,
  ...Fs
];
function qt(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Un(e) {
  return (n) => Qo(n, e);
}
function Qo(e, t) {
  const n = Ko(t);
  if (n == null)
    throw qt(
      0
      /* NodeTypes.Resource */
    );
  if (hr(n) === 1) {
    const a = Yo(n);
    return e.plural(a.reduce((o, c) => [
      ...o,
      Ur(e, c)
    ], []));
  } else
    return Ur(e, n);
}
function Ur(e, t) {
  const n = Xo(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = qo(t).reduce((s, a) => [...s, qn(e, a)], []);
    return e.normalize(r);
  }
}
function qn(e, t) {
  const n = hr(t);
  switch (n) {
    case 3:
      return ln(t, n);
    case 9:
      return ln(t, n);
    case 4: {
      const r = t;
      if (Le(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Le(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw qt(n);
    }
    case 5: {
      const r = t;
      if (Le(r, "i") && se(r.i))
        return e.interpolate(e.list(r.i));
      if (Le(r, "index") && se(r.index))
        return e.interpolate(e.list(r.index));
      throw qt(n);
    }
    case 6: {
      const r = t, s = Jo(r), a = Zo(r);
      return e.linked(qn(e, a), s ? qn(e, s) : void 0, e.type);
    }
    case 7:
      return ln(t, n);
    case 8:
      return ln(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ei = (e) => e;
let cn = K();
function ti(e, t = {}) {
  let n = !1;
  const r = t.onError || So;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...Vo(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function ni(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && R(e)) {
    ee(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || ei)(e), s = cn[r];
    if (s)
      return s;
    const { ast: a, detectError: o } = ti(e, {
      ...t,
      location: !1,
      jit: !0
    }), c = Un(a);
    return o ? c : cn[r] = c;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = cn[n];
      return r || (cn[n] = Un(e));
    } else
      return Un(e);
  }
}
const We = {
  INVALID_ARGUMENT: Eo,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ri = 24;
function $e(e) {
  return Pn(e, null, void 0);
}
function pr(e, t) {
  return t.locale != null ? zr(t.locale) : zr(e.locale);
}
let zn;
function zr(e) {
  if (R(e))
    return e;
  if (Z(e)) {
    if (e.resolvedOnce && zn != null)
      return zn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (wo(t))
        throw $e(We.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return zn = t;
    } else
      throw $e(We.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw $e(We.NOT_SUPPORT_LOCALE_TYPE);
}
function si(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...te(t) ? t : B(t) ? Object.keys(t) : R(t) ? [t] : [n]
  ])];
}
function js(e, t, n) {
  const r = R(n) ? n : En, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; te(o); )
      o = jr(a, o, t);
    const c = te(t) || !H(t) ? t : t.default ? t.default : null;
    o = R(c) ? [c] : c, te(o) && jr(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function jr(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ee(r); s++) {
    const a = t[s];
    R(a) && (r = ai(e, t[s], n));
  }
  return r;
}
function ai(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = oi(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function oi(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (te(n) || H(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const qe = [];
qe[
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
qe[
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
qe[
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
qe[
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
qe[
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
qe[
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
qe[
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
const ii = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function li(e) {
  return ii.test(e);
}
function ci(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ui(e) {
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
function di(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : li(t) ? ci(t) : "*" + t;
}
function fi(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, c, u, h, _, w;
  const k = [];
  k[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = c : o += c;
  }, k[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, k[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    k[
      0
      /* Actions.APPEND */
    ](), s++;
  }, k[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, k[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = di(o), o === !1))
        return !1;
      k[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function A() {
    const D = e[n + 1];
    if (r === 5 && D === "'" || r === 6 && D === '"')
      return n++, c = "\\" + D, k[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && A())) {
      if (u = ui(a), w = qe[r], h = w[u] || w.l || 8, h === 8 || (r = h[0], h[1] !== void 0 && (_ = k[h[1]], _ && (c = a, _() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Hr = /* @__PURE__ */ new Map();
function hi(e, t) {
  return B(e) ? e[t] : null;
}
function pi(e, t) {
  if (!B(e))
    return null;
  let n = Hr.get(t);
  if (n || (n = fi(t), n && Hr.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const o = n[a];
    if (zs.includes(o) && Pe(s))
      return null;
    const c = s[o];
    if (c === void 0 || Z(s))
      return null;
    s = c, a++;
  }
  return s;
}
const mi = "11.2.2", An = -1, En = "en-US", Br = "", Vr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function gi() {
  return {
    upper: (e, t) => t === "text" && R(e) ? e.toUpperCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && R(e) ? e.toLowerCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && R(e) ? Vr(e) : t === "vnode" && B(e) && "__v_isVNode" in e ? Vr(e.children) : e
  };
}
let Hs;
function _i(e) {
  Hs = e;
}
let Bs;
function yi(e) {
  Bs = e;
}
let Vs;
function vi(e) {
  Vs = e;
}
let Gs = null;
const Gr = (e) => {
  Gs = e;
}, wi = () => Gs;
let Kr = 0;
function bi(e = {}) {
  const t = Z(e.onWarn) ? e.onWarn : ho, n = R(e.version) ? e.version : mi, r = R(e.locale) || Z(e.locale) ? e.locale : En, s = Z(r) ? En : r, a = te(e.fallbackLocale) || H(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = H(e.messages) ? e.messages : jn(s), c = H(e.datetimeFormats) ? e.datetimeFormats : jn(s), u = H(e.numberFormats) ? e.numberFormats : jn(s), h = ie(K(), e.modifiers, gi()), _ = e.pluralRules || K(), w = Z(e.missing) ? e.missing : null, k = ee(e.missingWarn) || Cn(e.missingWarn) ? e.missingWarn : !0, A = ee(e.fallbackWarn) || Cn(e.fallbackWarn) ? e.fallbackWarn : !0, D = !!e.fallbackFormat, b = !!e.unresolving, N = Z(e.postTranslation) ? e.postTranslation : null, d = H(e.processor) ? e.processor : null, C = ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, v = Z(e.messageCompiler) ? e.messageCompiler : Hs, L = Z(e.messageResolver) ? e.messageResolver : Bs || hi, S = Z(e.localeFallbacker) ? e.localeFallbacker : Vs || si, g = B(e.fallbackContext) ? e.fallbackContext : void 0, U = e, q = B(U.__datetimeFormatters) ? U.__datetimeFormatters : /* @__PURE__ */ new Map(), fe = B(U.__numberFormatters) ? U.__numberFormatters : /* @__PURE__ */ new Map(), _e = B(U.__meta) ? U.__meta : {};
  Kr++;
  const Q = {
    version: n,
    cid: Kr,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: h,
    pluralRules: _,
    missing: w,
    missingWarn: k,
    fallbackWarn: A,
    fallbackFormat: D,
    unresolving: b,
    postTranslation: N,
    processor: d,
    warnHtmlMessage: C,
    escapeParameter: y,
    messageCompiler: v,
    messageResolver: L,
    localeFallbacker: S,
    fallbackContext: g,
    onWarn: t,
    __meta: _e
  };
  return Q.datetimeFormats = c, Q.numberFormats = u, Q.__datetimeFormatters = q, Q.__numberFormatters = fe, Q;
}
const jn = (e) => ({ [e]: K() });
function mr(e, t, n, r, s) {
  const { missing: a, onWarn: o } = e;
  if (a !== null) {
    const c = a(e, n, t, s);
    return R(c) ? c : t;
  } else
    return t;
}
function jt(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ci(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ei(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Ci(e, t[r]))
      return !0;
  return !1;
}
function Yr(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: c } = e, [u, h, _, w] = Jn(...t), k = ee(_.missingWarn) ? _.missingWarn : e.missingWarn;
  ee(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const A = !!_.part, D = pr(e, _), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    D
  );
  if (!R(u) || u === "")
    return new Intl.DateTimeFormat(D, w).format(h);
  let N = {}, d, C = null;
  const y = "datetime format";
  for (let S = 0; S < b.length && (d = b[S], N = n[d] || {}, C = N[u], !H(C)); S++)
    mr(e, u, d, k, y);
  if (!H(C) || !R(d))
    return r ? An : u;
  let v = `${d}__${u}`;
  On(w) || (v = `${v}__${JSON.stringify(w)}`);
  let L = c.get(v);
  return L || (L = new Intl.DateTimeFormat(d, ie({}, C, w)), c.set(v, L)), A ? L.formatToParts(h) : L.format(h);
}
const Ks = [
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
function Jn(...e) {
  const [t, n, r, s] = e, a = K();
  let o = K(), c;
  if (R(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw $e(We.INVALID_ISO_DATE_ARGUMENT);
    const h = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    c = new Date(h);
    try {
      c.toISOString();
    } catch {
      throw $e(We.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (go(t)) {
    if (isNaN(t.getTime()))
      throw $e(We.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (se(t))
    c = t;
  else
    throw $e(We.INVALID_ARGUMENT);
  return R(n) ? a.key = n : H(n) && Object.keys(n).forEach((u) => {
    Ks.includes(u) ? o[u] = n[u] : a[u] = n[u];
  }), R(r) ? a.locale = r : H(r) && (o = r), H(s) && (o = s), [a.key || "", c, a, o];
}
function Xr(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function qr(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: c } = e, [u, h, _, w] = Zn(...t), k = ee(_.missingWarn) ? _.missingWarn : e.missingWarn;
  ee(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const A = !!_.part, D = pr(e, _), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    D
  );
  if (!R(u) || u === "")
    return new Intl.NumberFormat(D, w).format(h);
  let N = {}, d, C = null;
  const y = "number format";
  for (let S = 0; S < b.length && (d = b[S], N = n[d] || {}, C = N[u], !H(C)); S++)
    mr(e, u, d, k, y);
  if (!H(C) || !R(d))
    return r ? An : u;
  let v = `${d}__${u}`;
  On(w) || (v = `${v}__${JSON.stringify(w)}`);
  let L = c.get(v);
  return L || (L = new Intl.NumberFormat(d, ie({}, C, w)), c.set(v, L)), A ? L.formatToParts(h) : L.format(h);
}
const Ys = [
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
function Zn(...e) {
  const [t, n, r, s] = e, a = K();
  let o = K();
  if (!se(t))
    throw $e(We.INVALID_ARGUMENT);
  const c = t;
  return R(n) ? a.key = n : H(n) && Object.keys(n).forEach((u) => {
    Ys.includes(u) ? o[u] = n[u] : a[u] = n[u];
  }), R(r) ? a.locale = r : H(r) && (o = r), H(s) && (o = s), [a.key || "", c, a, o];
}
function Jr(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Si = (e) => e, Li = (e) => "", ki = "text", Ni = (e) => e.length === 0 ? "" : dr(e), Ti = bo;
function Zr(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ii(e) {
  const t = se(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (se(e.named.count) || se(e.named.n)) ? se(e.named.count) ? e.named.count : se(e.named.n) ? e.named.n : t : t;
}
function Oi(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Pi(e = {}) {
  const t = e.locale, n = Ii(e), r = B(e.pluralRules) && R(t) && Z(e.pluralRules[t]) ? e.pluralRules[t] : Zr, s = B(e.pluralRules) && R(t) && Z(e.pluralRules[t]) ? Zr : void 0, a = (d) => d[r(n, d.length, s)], o = e.list || [], c = (d) => o[d], u = e.named || K();
  se(e.pluralIndex) && Oi(n, u);
  const h = (d) => u[d];
  function _(d, C) {
    const y = Z(e.messages) ? e.messages(d, !!C) : B(e.messages) ? e.messages[d] : !1;
    return y || (e.parent ? e.parent.message(d) : Li);
  }
  const w = (d) => e.modifiers ? e.modifiers[d] : Si, k = H(e.processor) && Z(e.processor.normalize) ? e.processor.normalize : Ni, A = H(e.processor) && Z(e.processor.interpolate) ? e.processor.interpolate : Ti, D = H(e.processor) && R(e.processor.type) ? e.processor.type : ki, N = {
    list: c,
    named: h,
    plural: a,
    linked: (d, ...C) => {
      const [y, v] = C;
      let L = "text", S = "";
      C.length === 1 ? B(y) ? (S = y.modifier || S, L = y.type || L) : R(y) && (S = y || S) : C.length === 2 && (R(y) && (S = y || S), R(v) && (L = v || L));
      const g = _(d, !0)(N), U = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        L === "vnode" && te(g) && S ? g[0] : g
      );
      return S ? w(S)(U, L) : U;
    },
    message: _,
    type: D,
    interpolate: A,
    normalize: k,
    values: ie(K(), o, u)
  };
  return N;
}
const Qr = () => "", Ue = (e) => Z(e);
function es(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: c } = e, [u, h] = Qn(...t), _ = ee(h.missingWarn) ? h.missingWarn : e.missingWarn, w = ee(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, k = ee(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, A = !!h.resolvedMessage, D = R(h.default) || ee(h.default) ? ee(h.default) ? a ? u : () => u : h.default : n ? a ? u : () => u : null, b = n || D != null && (R(D) || Z(D)), N = pr(e, h);
  k && Ai(h);
  let [d, C, y] = A ? [
    u,
    N,
    c[N] || K()
  ] : Xs(e, u, N, o, w, _), v = d, L = u;
  if (!A && !(R(v) || Pe(v) || Ue(v)) && b && (v = D, L = v), !A && (!(R(v) || Pe(v) || Ue(v)) || !R(C)))
    return s ? An : u;
  let S = !1;
  const g = () => {
    S = !0;
  }, U = Ue(v) ? v : qs(e, u, C, v, L, g);
  if (S)
    return v;
  const q = Di(e, C, y, h), fe = Pi(q), _e = Mi(e, U, fe);
  let Q = r ? r(_e, u) : _e;
  return k && R(Q) && (Q = yo(Q)), Q;
}
function Ai(e) {
  te(e.list) ? e.list = e.list.map((t) => R(t) ? Dr(t) : t) : B(e.named) && Object.keys(e.named).forEach((t) => {
    R(e.named[t]) && (e.named[t] = Dr(e.named[t]));
  });
}
function Xs(e, t, n, r, s, a) {
  const { messages: o, onWarn: c, messageResolver: u, localeFallbacker: h } = e, _ = h(e, r, n);
  let w = K(), k, A = null;
  const D = "translate";
  for (let b = 0; b < _.length && (k = _[b], w = o[k] || K(), (A = u(w, t)) === null && (A = w[t]), !(R(A) || Pe(A) || Ue(A))); b++)
    if (!Ei(k, _)) {
      const N = mr(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        k,
        a,
        D
      );
      N !== t && (A = N);
    }
  return [A, k, w];
}
function qs(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: c } = e;
  if (Ue(r)) {
    const h = r;
    return h.locale = h.locale || n, h.key = h.key || t, h;
  }
  if (o == null) {
    const h = () => r;
    return h.locale = n, h.key = t, h;
  }
  const u = o(r, Ri(e, n, s, r, c, a));
  return u.locale = n, u.key = t, u.source = r, u;
}
function Mi(e, t, n) {
  return t(n);
}
function Qn(...e) {
  const [t, n, r] = e, s = K();
  if (!R(t) && !se(t) && !Ue(t) && !Pe(t))
    throw $e(We.INVALID_ARGUMENT);
  const a = se(t) ? String(t) : (Ue(t), t);
  return se(n) ? s.plural = n : R(n) ? s.default = n : H(n) && !On(n) ? s.named = n : te(n) && (s.list = n), se(r) ? s.plural = r : R(r) ? s.default = r : H(r) && ie(s, r), [a, s];
}
function Ri(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw a && a(o), o;
    },
    onCacheKey: (o) => po(t, n, o)
  };
}
function Di(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: c, fallbackWarn: u, missingWarn: h, fallbackContext: _ } = e, k = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (A, D) => {
      let b = o(n, A);
      if (b == null && (_ || D)) {
        const [, , N] = Xs(
          _ || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          A,
          t,
          c,
          u,
          h
        );
        b = o(N, A);
      }
      if (R(b) || Pe(b)) {
        let N = !1;
        const C = qs(e, A, t, b, A, () => {
          N = !0;
        });
        return N ? Qr : C;
      } else return Ue(b) ? b : Qr;
    }
  };
  return e.processor && (k.processor = e.processor), r.list && (k.list = r.list), r.named && (k.named = r.named), se(r.plural) && (k.pluralIndex = r.plural), k;
}
Go();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const xi = "11.2.2";
function Fi() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (pn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (pn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Nt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ri,
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
function Jt(e, ...t) {
  return Pn(e, null, void 0);
}
const er = /* @__PURE__ */ ut("__translateVNode"), tr = /* @__PURE__ */ ut("__datetimeParts"), nr = /* @__PURE__ */ ut("__numberParts"), Wi = ut("__setPluralRules"), Js = /* @__PURE__ */ ut("__injectWithOption"), rr = /* @__PURE__ */ ut("__dispose");
function Zt(e) {
  if (!B(e) || Pe(e))
    return e;
  for (const t in e)
    if (Le(e, t))
      if (!t.includes("."))
        B(e[t]) && Zt(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in s || (s[n[o]] = K()), !B(s[n[o]])) {
            a = !0;
            break;
          }
          s = s[n[o]];
        }
        if (a || (Pe(s) ? zs.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !Pe(s)) {
          const o = s[n[r]];
          B(o) && Zt(o);
        }
      }
  return e;
}
function Zs(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = H(n) ? n : te(r) ? K() : { [e]: K() };
  if (te(r) && r.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: u, resource: h } = c;
      u ? (o[u] = o[u] || K(), mn(h, o[u])) : mn(h, o);
    } else
      R(c) && mn(JSON.parse(c), o);
  }), s == null && a)
    for (const c in o)
      Le(o, c) && Zt(o[c]);
  return o;
}
function $i(e) {
  return e.type;
}
function Ui(e, t, n) {
  let r = B(t.messages) ? t.messages : K();
  "__i18nGlobal" in n && (r = Zs(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (B(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (B(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function ts(e) {
  return X(to, null, e, 0);
}
function Qs() {
  return "currentInstance" in Wn ? Wn["currentInstance"] : Wn.getCurrentInstance();
}
const ns = () => [], zi = () => !1;
let rs = 0;
function ss(e) {
  return (t, n, r, s) => e(n, r, Qs() || void 0, s);
}
function ji(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, a = Mr ? j : eo;
  let o = ee(e.inheritLocale) ? e.inheritLocale : !0;
  const c = a(
    // prettier-ignore
    t && o ? t.locale.value : R(e.locale) ? e.locale : En
  ), u = a(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : R(e.fallbackLocale) || te(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), h = a(Zs(c.value, e)), _ = a(H(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), w = a(H(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let k = t ? t.missingWarn : ee(e.missingWarn) || Cn(e.missingWarn) ? e.missingWarn : !0, A = t ? t.fallbackWarn : ee(e.fallbackWarn) || Cn(e.fallbackWarn) ? e.fallbackWarn : !0, D = t ? t.fallbackRoot : ee(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, N = Z(e.missing) ? e.missing : null, d = Z(e.missing) ? ss(e.missing) : null, C = Z(e.postTranslation) ? e.postTranslation : null, y = t ? t.warnHtmlMessage : ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter;
  const L = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules, g;
  g = (() => {
    r && Gr(null);
    const m = {
      version: xi,
      locale: c.value,
      fallbackLocale: u.value,
      messages: h.value,
      modifiers: L,
      pluralRules: S,
      missing: d === null ? void 0 : d,
      missingWarn: k,
      fallbackWarn: A,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: y,
      escapeParameter: v,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = _.value, m.numberFormats = w.value, m.__datetimeFormatters = H(g) ? g.__datetimeFormatters : void 0, m.__numberFormatters = H(g) ? g.__numberFormatters : void 0;
    const T = bi(m);
    return r && Gr(T), T;
  })(), jt(g, c.value, u.value);
  function q() {
    return [
      c.value,
      u.value,
      h.value,
      _.value,
      w.value
    ];
  }
  const fe = F({
    get: () => c.value,
    set: (m) => {
      g.locale = m, c.value = m;
    }
  }), _e = F({
    get: () => u.value,
    set: (m) => {
      g.fallbackLocale = m, u.value = m, jt(g, c.value, m);
    }
  }), Q = F(() => h.value), Mt = /* @__PURE__ */ F(() => _.value), Rt = /* @__PURE__ */ F(() => w.value);
  function Dt() {
    return Z(C) ? C : null;
  }
  function ht(m) {
    C = m, g.postTranslation = m;
  }
  function xt() {
    return N;
  }
  function Ft(m) {
    m !== null && (d = ss(m)), N = m, g.missing = d;
  }
  const ye = (m, T, z, J, Me, Ze) => {
    q();
    let Re;
    try {
      r || (g.fallbackContext = t ? wi() : void 0), Re = m(g);
    } finally {
      r || (g.fallbackContext = void 0);
    }
    if (z !== "translate exists" && // for not `te` (e.g `t`)
    se(Re) && Re === An || z === "translate exists" && !Re) {
      const [rn, Lr] = T();
      return t && D ? J(t) : Me(rn);
    } else {
      if (Ze(Re))
        return Re;
      throw Jt(Nt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function he(...m) {
    return ye((T) => Reflect.apply(es, null, [T, ...m]), () => Qn(...m), "translate", (T) => Reflect.apply(T.t, T, [...m]), (T) => T, (T) => R(T));
  }
  function Ne(...m) {
    const [T, z, J] = m;
    if (J && !B(J))
      throw Jt(Nt.INVALID_ARGUMENT);
    return he(T, z, ie({ resolvedMessage: !0 }, J || {}));
  }
  function ze(...m) {
    return ye((T) => Reflect.apply(Yr, null, [T, ...m]), () => Jn(...m), "datetime format", (T) => Reflect.apply(T.d, T, [...m]), () => Br, (T) => R(T) || te(T));
  }
  function Wt(...m) {
    return ye((T) => Reflect.apply(qr, null, [T, ...m]), () => Zn(...m), "number format", (T) => Reflect.apply(T.n, T, [...m]), () => Br, (T) => R(T) || te(T));
  }
  function $t(m) {
    return m.map((T) => R(T) || se(T) || ee(T) ? ts(String(T)) : T);
  }
  const pt = {
    normalize: $t,
    interpolate: (m) => m,
    type: "vnode"
  };
  function Je(...m) {
    return ye((T) => {
      let z;
      const J = T;
      try {
        J.processor = pt, z = Reflect.apply(es, null, [J, ...m]);
      } finally {
        J.processor = null;
      }
      return z;
    }, () => Qn(...m), "translate", (T) => T[er](...m), (T) => [ts(T)], (T) => te(T));
  }
  function mt(...m) {
    return ye((T) => Reflect.apply(qr, null, [T, ...m]), () => Zn(...m), "number format", (T) => T[nr](...m), ns, (T) => R(T) || te(T));
  }
  function Ut(...m) {
    return ye((T) => Reflect.apply(Yr, null, [T, ...m]), () => Jn(...m), "datetime format", (T) => T[tr](...m), ns, (T) => R(T) || te(T));
  }
  function be(m) {
    S = m, g.pluralRules = S;
  }
  function gt(m, T) {
    return ye(() => {
      if (!m)
        return !1;
      const z = R(T) ? T : c.value, J = je(z), Me = g.messageResolver(J, m);
      return Pe(Me) || Ue(Me) || R(Me);
    }, () => [m], "translate exists", (z) => Reflect.apply(z.te, z, [m, T]), zi, (z) => ee(z));
  }
  function _t(m) {
    let T = null;
    const z = js(g, u.value, c.value);
    for (let J = 0; J < z.length; J++) {
      const Me = h.value[z[J]] || {}, Ze = g.messageResolver(Me, m);
      if (Ze != null) {
        T = Ze;
        break;
      }
    }
    return T;
  }
  function ve(m) {
    const T = _t(m);
    return T ?? (t ? t.tm(m) || {} : {});
  }
  function je(m) {
    return h.value[m] || {};
  }
  function Ce(m, T) {
    if (s) {
      const z = { [m]: T };
      for (const J in z)
        Le(z, J) && Zt(z[J]);
      T = z[m];
    }
    h.value[m] = T, g.messages = h.value;
  }
  function Ae(m, T) {
    h.value[m] = h.value[m] || {};
    const z = { [m]: T };
    if (s)
      for (const J in z)
        Le(z, J) && Zt(z[J]);
    T = z[m], mn(T, h.value[m]), g.messages = h.value;
  }
  function yt(m) {
    return _.value[m] || {};
  }
  function i(m, T) {
    _.value[m] = T, g.datetimeFormats = _.value, Xr(g, m, T);
  }
  function l(m, T) {
    _.value[m] = ie(_.value[m] || {}, T), g.datetimeFormats = _.value, Xr(g, m, T);
  }
  function E(m) {
    return w.value[m] || {};
  }
  function M(m, T) {
    w.value[m] = T, g.numberFormats = w.value, Jr(g, m, T);
  }
  function Y(m, T) {
    w.value[m] = ie(w.value[m] || {}, T), g.numberFormats = w.value, Jr(g, m, T);
  }
  rs++, t && Mr && (Ye(t.locale, (m) => {
    o && (c.value = m, g.locale = m, jt(g, c.value, u.value));
  }), Ye(t.fallbackLocale, (m) => {
    o && (u.value = m, g.fallbackLocale = m, jt(g, c.value, u.value));
  }));
  const W = {
    id: rs,
    locale: fe,
    fallbackLocale: _e,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(m) {
      o = m, m && t && (c.value = t.locale.value, u.value = t.fallbackLocale.value, jt(g, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(h.value).sort();
    },
    messages: Q,
    get modifiers() {
      return L;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return k;
    },
    set missingWarn(m) {
      k = m, g.missingWarn = k;
    },
    get fallbackWarn() {
      return A;
    },
    set fallbackWarn(m) {
      A = m, g.fallbackWarn = A;
    },
    get fallbackRoot() {
      return D;
    },
    set fallbackRoot(m) {
      D = m;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(m) {
      b = m, g.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(m) {
      y = m, g.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return v;
    },
    set escapeParameter(m) {
      v = m, g.escapeParameter = m;
    },
    t: he,
    getLocaleMessage: je,
    setLocaleMessage: Ce,
    mergeLocaleMessage: Ae,
    getPostTranslationHandler: Dt,
    setPostTranslationHandler: ht,
    getMissingHandler: xt,
    setMissingHandler: Ft,
    [Wi]: be
  };
  return W.datetimeFormats = Mt, W.numberFormats = Rt, W.rt = Ne, W.te = gt, W.tm = ve, W.d = ze, W.n = Wt, W.getDateTimeFormat = yt, W.setDateTimeFormat = i, W.mergeDateTimeFormat = l, W.getNumberFormat = E, W.setNumberFormat = M, W.mergeNumberFormat = Y, W[Js] = n, W[er] = Je, W[tr] = Ut, W[nr] = mt, W;
}
const gr = {
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
function Hi({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Ge ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, K());
}
function ea() {
  return Ge;
}
ie({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => se(e) || !isNaN(e)
  }
}, gr);
function Bi(e) {
  return te(e) && !R(e[0]);
}
function ta(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let c = K();
    e.locale && (o.locale = e.locale), R(e.format) ? o.key = e.format : B(e.format) && (R(e.format.key) && (o.key = e.format.key), c = Object.keys(e.format).reduce((k, A) => n.includes(A) ? ie(K(), k, { [A]: e.format[A] }) : k, K()));
    const u = r(e.value, o, c);
    let h = [o.key];
    te(u) ? h = u.map((k, A) => {
      const D = s[k.type], b = D ? D({ [k.type]: k.value, index: A, parts: u }) : [k.value];
      return Bi(b) && (b[0].key = `${k.type}-${A}`), b;
    }) : R(u) && (h = [u]);
    const _ = ie(K(), a), w = R(e.tag) || B(e.tag) ? e.tag : ea();
    return Os(w, _, h);
  };
}
ie({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, gr);
const Vi = /* @__PURE__ */ ut("global-vue-i18n");
function Mn(e = {}) {
  const t = Qs();
  if (t == null)
    throw Jt(Nt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Jt(Nt.NOT_INSTALLED);
  const n = Gi(t), r = Yi(n), s = $i(t), a = Ki(e, s);
  if (a === "global")
    return Ui(r, e, s), r;
  if (a === "parent") {
    let u = Xi(n, t, e.__useComponent);
    return u == null && (u = r), u;
  }
  const o = n;
  let c = o.__getInstance(t);
  if (c == null) {
    const u = ie({}, e);
    "__i18n" in s && (u.__i18n = s.__i18n), r && (u.__root = r), c = ji(u), o.__composerExtend && (c[rr] = o.__composerExtend(c)), Ji(o, t, c), o.__setInstance(t, c);
  }
  return c;
}
function Gi(e) {
  const t = Ke(e.isCE ? Vi : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Jt(e.isCE ? Nt.NOT_INSTALLED_WITH_PROVIDE : Nt.UNEXPECTED_ERROR);
  return t;
}
function Ki(e, t) {
  return On(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Yi(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Xi(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = qi(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = o.__getInstance(a);
      c != null && (r = c.__composer, n && r && !r[Js] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function qi(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ji(e, t, n) {
  tn(() => {
  }, t), lr(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[rr];
    s && (s(), delete r[rr]);
  }, t);
}
ie({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, gr);
Fi();
_i(ni);
yi(pi);
vi(js);
function Zi(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Qi(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var gn;
const we = "__TAURI_TO_IPC_KEY__";
function el(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function P(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class tl {
  get rid() {
    return Zi(this, gn, "f");
  }
  constructor(t) {
    gn.set(this, void 0), Qi(this, gn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return P("plugin:resources|close", {
      rid: this.rid
    });
  }
}
gn = /* @__PURE__ */ new WeakMap();
class rt {
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
    return new ot(this.width * t, this.height * t);
  }
  [we]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[we]();
  }
}
class ot {
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
    return new rt(this.width / t, this.height / t);
  }
  [we]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[we]();
  }
}
class vt {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof rt ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ot ? this.size : this.size.toPhysical(t);
  }
  [we]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[we]();
  }
}
class na {
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
    return new Oe(this.x * t, this.y * t);
  }
  [we]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[we]();
  }
}
class Oe {
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
    return new na(this.x / t, this.y / t);
  }
  [we]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[we]();
  }
}
class un {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof na ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Oe ? this.position : this.position.toPhysical(t);
  }
  [we]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[we]();
  }
}
var pe;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(pe || (pe = {}));
async function ra(e, t) {
  await P("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Sn(e, t, n) {
  var r;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return P("plugin:event|listen", {
    event: e,
    target: s,
    handler: el(t)
  }).then((a) => async () => ra(e, a));
}
async function nl(e, t, n) {
  return Sn(e, (r) => {
    ra(e, r.id), t(r);
  }, n);
}
async function rl(e, t) {
  await P("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function sl(e, t, n) {
  await P("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Yt extends tl {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, r) {
    return P("plugin:image|new", {
      rgba: Ln(t),
      width: n,
      height: r
    }).then((s) => new Yt(s));
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
    return P("plugin:image|from_bytes", {
      bytes: Ln(t)
    }).then((n) => new Yt(n));
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
    return P("plugin:image|from_path", { path: t }).then((n) => new Yt(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return P("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return P("plugin:image|size", { rid: this.rid });
  }
}
function Ln(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Yt ? e.rid : e;
}
var sr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(sr || (sr = {}));
class al {
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
var as;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(as || (as = {}));
function sa() {
  return new aa(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Hn() {
  return P("plugin:window|get_all_windows").then((e) => e.map((t) => new aa(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Bn = ["tauri://created", "tauri://error"];
class aa {
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
    var r;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || P("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (r = n.parent) === null || r === void 0 ? void 0 : r.label,
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
    return (n = (await Hn()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return sa();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Hn();
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
    for (const t of await Hn())
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : Sn(t, n, {
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : nl(t, n, {
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
    if (Bn.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return rl(t, n);
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
  async emitTo(t, n, r) {
    if (Bn.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return sl(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Bn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return P("plugin:window|scale_factor", {
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
    return P("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Oe(t));
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
    return P("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Oe(t));
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
    return P("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new ot(t));
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
    return P("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new ot(t));
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
    return P("plugin:window|is_fullscreen", {
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
    return P("plugin:window|is_minimized", {
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
    return P("plugin:window|is_maximized", {
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
    return P("plugin:window|is_focused", {
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
    return P("plugin:window|is_decorated", {
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
    return P("plugin:window|is_resizable", {
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
    return P("plugin:window|is_maximizable", {
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
    return P("plugin:window|is_minimizable", {
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
    return P("plugin:window|is_closable", {
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
    return P("plugin:window|is_visible", {
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
    return P("plugin:window|title", {
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
    return P("plugin:window|theme", {
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
    return P("plugin:window|is_always_on_top", {
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
    return P("plugin:window|center", {
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
    return t && (t === sr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), P("plugin:window|request_user_attention", {
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
    return P("plugin:window|set_resizable", {
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
    return P("plugin:window|set_enabled", {
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
    return P("plugin:window|is_enabled", {
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
    return P("plugin:window|set_maximizable", {
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
    return P("plugin:window|set_minimizable", {
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
    return P("plugin:window|set_closable", {
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
    return P("plugin:window|set_title", {
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
    return P("plugin:window|maximize", {
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
    return P("plugin:window|unmaximize", {
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
    return P("plugin:window|toggle_maximize", {
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
    return P("plugin:window|minimize", {
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
    return P("plugin:window|unminimize", {
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
    return P("plugin:window|show", {
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
    return P("plugin:window|hide", {
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
    return P("plugin:window|close", {
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
    return P("plugin:window|destroy", {
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
    return P("plugin:window|set_decorations", {
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
    return P("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return P("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return P("plugin:window|set_effects", {
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
    return P("plugin:window|set_always_on_top", {
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
    return P("plugin:window|set_always_on_bottom", {
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
    return P("plugin:window|set_content_protected", {
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
    return P("plugin:window|set_size", {
      label: this.label,
      value: t instanceof vt ? t : new vt(t)
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
    return P("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof vt ? t : t ? new vt(t) : null
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
    return P("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof vt ? t : t ? new vt(t) : null
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
    function n(r) {
      return r ? { Logical: r } : null;
    }
    return P("plugin:window|set_size_constraints", {
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
    return P("plugin:window|set_position", {
      label: this.label,
      value: t instanceof un ? t : new un(t)
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
    return P("plugin:window|set_fullscreen", {
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
    return P("plugin:window|set_focus", {
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
    return P("plugin:window|set_icon", {
      label: this.label,
      value: Ln(t)
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
    return P("plugin:window|set_skip_taskbar", {
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
    return P("plugin:window|set_cursor_grab", {
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
    return P("plugin:window|set_cursor_visible", {
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
    return P("plugin:window|set_cursor_icon", {
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
    return P("plugin:window|set_background_color", { color: t });
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
    return P("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof un ? t : new un(t)
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
    return P("plugin:window|set_ignore_cursor_events", {
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
    return P("plugin:window|start_dragging", {
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
    return P("plugin:window|start_resize_dragging", {
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
    return P("plugin:window|set_badge_count", {
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
    return P("plugin:window|set_badge_label", {
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
    return P("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Ln(t) : void 0
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
    return P("plugin:window|set_progress_bar", {
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
    return P("plugin:window|set_visible_on_all_workspaces", {
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
    return P("plugin:window|set_title_bar_style", {
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
    return P("plugin:window|set_theme", {
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
    return this.listen(pe.WINDOW_RESIZED, (n) => {
      n.payload = new ot(n.payload), t(n);
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
    return this.listen(pe.WINDOW_MOVED, (n) => {
      n.payload = new Oe(n.payload), t(n);
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
    return this.listen(pe.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new al(n);
      await t(r), r.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(pe.DRAG_ENTER, (o) => {
      t({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new Oe(o.payload.position)
        }
      });
    }), r = await this.listen(pe.DRAG_OVER, (o) => {
      t({
        ...o,
        payload: {
          type: "over",
          position: new Oe(o.payload.position)
        }
      });
    }), s = await this.listen(pe.DRAG_DROP, (o) => {
      t({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new Oe(o.payload.position)
        }
      });
    }), a = await this.listen(pe.DRAG_LEAVE, (o) => {
      t({ ...o, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), r(), a();
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
    const n = await this.listen(pe.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), r = await this.listen(pe.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      n(), r();
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
    return this.listen(pe.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(pe.WINDOW_THEME_CHANGED, t);
  }
}
var os;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(os || (os = {}));
var is;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(is || (is = {}));
var ls;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ls || (ls = {}));
function ol(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Oe(e.position),
    size: new ot(e.size)
  };
}
async function il(e, t) {
  return P("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(ol);
}
var ll = {
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
function cl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function ul(e, t, n) {
  var r = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("none"), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.multiColor.outFillColor), s.push(typeof r[2] == "string" ? r[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof r[3] == "string" ? r[3] : n.colors.multiColor.innerFillColor);
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
var dl = Symbol("icon-context");
function Rn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var o = cl(), c = Ke(dl, ll);
      return function() {
        var u = a.size, h = a.strokeWidth, _ = a.strokeLinecap, w = a.strokeLinejoin, k = a.theme, A = a.fill, D = a.spin, b = ul(o, {
          size: u,
          strokeWidth: h,
          strokeLinecap: _,
          strokeLinejoin: w,
          theme: k,
          fill: A
        }, c), N = [c.prefix + "-icon"];
        return N.push(c.prefix + "-icon-" + e), t && c.rtl && N.push(c.prefix + "-icon-rtl"), D && N.push(c.prefix + "-icon-spin"), X("span", {
          class: N.join(" ")
        }, [n(b)]);
      };
    }
  };
  return r;
}
const fl = Rn("close-small", !1, function(e) {
  return X("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [X("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), X("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hl = Rn("minus", !1, function(e) {
  return X("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [X("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pl = Rn("mouse", !0, function(e) {
  return X("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [X("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), X("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), X("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ml = Rn("radar", !1, function(e) {
  return X("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [X("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), X("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), X("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), X("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), X("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oa = Symbol(), _n = "el", gl = "is-", tt = (e, t, n, r, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), s && (a += `--${s}`), a;
}, ia = Symbol("namespaceContextKey"), _l = (e) => {
  const t = e || (Et() ? Ke(ia, j(_n)) : j(_n));
  return F(() => I(t) || _n);
}, _r = (e, t) => {
  const n = _l(t);
  return {
    namespace: n,
    b: (b = "") => tt(n.value, e, b, "", ""),
    e: (b) => b ? tt(n.value, e, "", b, "") : "",
    m: (b) => b ? tt(n.value, e, "", "", b) : "",
    be: (b, N) => b && N ? tt(n.value, e, b, N, "") : "",
    em: (b, N) => b && N ? tt(n.value, e, "", b, N) : "",
    bm: (b, N) => b && N ? tt(n.value, e, b, "", N) : "",
    bem: (b, N, d) => b && N && d ? tt(n.value, e, b, N, d) : "",
    is: (b, ...N) => {
      const d = N.length >= 1 ? N[0] : !0;
      return b && d ? `${gl}${b}` : "";
    },
    cssVar: (b) => {
      const N = {};
      for (const d in b)
        b[d] && (N[`--${n.value}-${d}`] = b[d]);
      return N;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const N = {};
      for (const d in b)
        b[d] && (N[`--${n.value}-${e}-${d}`] = b[d]);
      return N;
    },
    cssVarBlockName: (b) => `--${n.value}-${e}-${b}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const yl = Object.prototype.hasOwnProperty, cs = (e, t) => yl.call(e, t), Qt = (e) => typeof e == "function", it = (e) => typeof e == "string", la = (e) => e !== null && typeof e == "object";
var vl = typeof global == "object" && global && global.Object === Object && global, wl = typeof self == "object" && self && self.Object === Object && self, yr = vl || wl || Function("return this")(), Tt = yr.Symbol, ca = Object.prototype, bl = ca.hasOwnProperty, Cl = ca.toString, Ht = Tt ? Tt.toStringTag : void 0;
function El(e) {
  var t = bl.call(e, Ht), n = e[Ht];
  try {
    e[Ht] = void 0;
    var r = !0;
  } catch {
  }
  var s = Cl.call(e);
  return r && (t ? e[Ht] = n : delete e[Ht]), s;
}
var Sl = Object.prototype, Ll = Sl.toString;
function kl(e) {
  return Ll.call(e);
}
var Nl = "[object Null]", Tl = "[object Undefined]", us = Tt ? Tt.toStringTag : void 0;
function ua(e) {
  return e == null ? e === void 0 ? Tl : Nl : us && us in Object(e) ? El(e) : kl(e);
}
function Il(e) {
  return e != null && typeof e == "object";
}
var Ol = "[object Symbol]";
function vr(e) {
  return typeof e == "symbol" || Il(e) && ua(e) == Ol;
}
function Pl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var wr = Array.isArray, ds = Tt ? Tt.prototype : void 0, fs = ds ? ds.toString : void 0;
function da(e) {
  if (typeof e == "string")
    return e;
  if (wr(e))
    return Pl(e, da) + "";
  if (vr(e))
    return fs ? fs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function fa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Al = "[object AsyncFunction]", Ml = "[object Function]", Rl = "[object GeneratorFunction]", Dl = "[object Proxy]";
function xl(e) {
  if (!fa(e))
    return !1;
  var t = ua(e);
  return t == Ml || t == Rl || t == Al || t == Dl;
}
var Vn = yr["__core-js_shared__"], hs = function() {
  var e = /[^.]+$/.exec(Vn && Vn.keys && Vn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fl(e) {
  return !!hs && hs in e;
}
var Wl = Function.prototype, $l = Wl.toString;
function Ul(e) {
  if (e != null) {
    try {
      return $l.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zl = /[\\^$.*+?()[\]{}|]/g, jl = /^\[object .+?Constructor\]$/, Hl = Function.prototype, Bl = Object.prototype, Vl = Hl.toString, Gl = Bl.hasOwnProperty, Kl = RegExp(
  "^" + Vl.call(Gl).replace(zl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yl(e) {
  if (!fa(e) || Fl(e))
    return !1;
  var t = xl(e) ? Kl : jl;
  return t.test(Ul(e));
}
function Xl(e, t) {
  return e?.[t];
}
function ha(e, t) {
  var n = Xl(e, t);
  return Yl(n) ? n : void 0;
}
function ql(e, t) {
  return e === t || e !== e && t !== t;
}
var Jl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zl = /^\w*$/;
function Ql(e, t) {
  if (wr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || vr(e) ? !0 : Zl.test(e) || !Jl.test(e) || t != null && e in Object(t);
}
var en = ha(Object, "create");
function ec() {
  this.__data__ = en ? en(null) : {}, this.size = 0;
}
function tc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nc = "__lodash_hash_undefined__", rc = Object.prototype, sc = rc.hasOwnProperty;
function ac(e) {
  var t = this.__data__;
  if (en) {
    var n = t[e];
    return n === nc ? void 0 : n;
  }
  return sc.call(t, e) ? t[e] : void 0;
}
var oc = Object.prototype, ic = oc.hasOwnProperty;
function lc(e) {
  var t = this.__data__;
  return en ? t[e] !== void 0 : ic.call(t, e);
}
var cc = "__lodash_hash_undefined__";
function uc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = en && t === void 0 ? cc : t, this;
}
function lt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
lt.prototype.clear = ec;
lt.prototype.delete = tc;
lt.prototype.get = ac;
lt.prototype.has = lc;
lt.prototype.set = uc;
function dc() {
  this.__data__ = [], this.size = 0;
}
function Dn(e, t) {
  for (var n = e.length; n--; )
    if (ql(e[n][0], t))
      return n;
  return -1;
}
var fc = Array.prototype, hc = fc.splice;
function pc(e) {
  var t = this.__data__, n = Dn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : hc.call(t, n, 1), --this.size, !0;
}
function mc(e) {
  var t = this.__data__, n = Dn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gc(e) {
  return Dn(this.__data__, e) > -1;
}
function _c(e, t) {
  var n = this.__data__, r = Dn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Pt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Pt.prototype.clear = dc;
Pt.prototype.delete = pc;
Pt.prototype.get = mc;
Pt.prototype.has = gc;
Pt.prototype.set = _c;
var yc = ha(yr, "Map");
function vc() {
  this.size = 0, this.__data__ = {
    hash: new lt(),
    map: new (yc || Pt)(),
    string: new lt()
  };
}
function wc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function xn(e, t) {
  var n = e.__data__;
  return wc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function bc(e) {
  var t = xn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cc(e) {
  return xn(this, e).get(e);
}
function Ec(e) {
  return xn(this, e).has(e);
}
function Sc(e, t) {
  var n = xn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function dt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = vc;
dt.prototype.delete = bc;
dt.prototype.get = Cc;
dt.prototype.has = Ec;
dt.prototype.set = Sc;
var Lc = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Lc);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new (br.Cache || dt)(), n;
}
br.Cache = dt;
var kc = 500;
function Nc(e) {
  var t = br(e, function(r) {
    return n.size === kc && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Tc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ic = /\\(\\)?/g, Oc = Nc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Tc, function(n, r, s, a) {
    t.push(s ? a.replace(Ic, "$1") : r || n);
  }), t;
});
function Pc(e) {
  return e == null ? "" : da(e);
}
function Ac(e, t) {
  return wr(e) ? e : Ql(e, t) ? [e] : Oc(Pc(e));
}
function Mc(e) {
  if (typeof e == "string" || vr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Rc(e, t) {
  t = Ac(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Mc(t[n++])];
  return n && n == r ? e : void 0;
}
function Dc(e, t, n) {
  var r = e == null ? void 0 : Rc(e, t);
  return r === void 0 ? n : r;
}
function xc(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
const pa = (e) => e === void 0, ps = (e) => typeof e == "boolean", ct = (e) => typeof e == "number", ar = (e) => typeof Element > "u" ? !1 : e instanceof Element, Fc = (e) => it(e) ? !Number.isNaN(Number(e)) : !1;
var ms;
const ft = typeof window < "u", Wc = (e) => typeof e == "string", $c = () => {
};
ft && ((ms = window?.navigator) != null && ms.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Cr(e) {
  return typeof e == "function" ? e() : I(e);
}
function Uc(e) {
  return e;
}
function Er(e) {
  return ro() ? (so(e), !0) : !1;
}
function zc(e, t = !0) {
  Et() ? tn(e) : t ? e() : bt(e);
}
function ma(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, s = j(!1);
  let a = null;
  function o() {
    a && (clearTimeout(a), a = null);
  }
  function c() {
    s.value = !1, o();
  }
  function u(...h) {
    o(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...h);
    }, Cr(t));
  }
  return r && (s.value = !0, ft && u()), Er(c), {
    isPending: no(s),
    start: u,
    stop: c
  };
}
function ga(e) {
  var t;
  const n = Cr(e);
  return (t = n?.$el) != null ? t : n;
}
const _a = ft ? window : void 0;
function ya(...e) {
  let t, n, r, s;
  if (Wc(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = _a) : [t, n, r, s] = e, !t)
    return $c;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], o = () => {
    a.forEach((_) => _()), a.length = 0;
  }, c = (_, w, k, A) => (_.addEventListener(w, k, A), () => _.removeEventListener(w, k, A)), u = Ye(() => [ga(t), Cr(s)], ([_, w]) => {
    o(), _ && a.push(...n.flatMap((k) => r.map((A) => c(_, k, A, w))));
  }, { immediate: !0, flush: "post" }), h = () => {
    u(), o();
  };
  return Er(h), h;
}
function jc(e, t = !1) {
  const n = j(), r = () => n.value = !!e();
  return r(), zc(r, t), n;
}
const gs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _s = "__vueuse_ssr_handlers__";
gs[_s] = gs[_s] || {};
var ys = Object.getOwnPropertySymbols, Hc = Object.prototype.hasOwnProperty, Bc = Object.prototype.propertyIsEnumerable, Vc = (e, t) => {
  var n = {};
  for (var r in e)
    Hc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ys)
    for (var r of ys(e))
      t.indexOf(r) < 0 && Bc.call(e, r) && (n[r] = e[r]);
  return n;
};
function Gc(e, t, n = {}) {
  const r = n, { window: s = _a } = r, a = Vc(r, ["window"]);
  let o;
  const c = jc(() => s && "ResizeObserver" in s), u = () => {
    o && (o.disconnect(), o = void 0);
  }, h = Ye(() => ga(e), (w) => {
    u(), c.value && s && w && (o = new ResizeObserver(t), o.observe(w, a));
  }, { immediate: !0, flush: "post" }), _ = () => {
    u(), h();
  };
  return Er(_), {
    isSupported: c,
    stop: _
  };
}
var vs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(vs || (vs = {}));
var Kc = Object.defineProperty, ws = Object.getOwnPropertySymbols, Yc = Object.prototype.hasOwnProperty, Xc = Object.prototype.propertyIsEnumerable, bs = (e, t, n) => t in e ? Kc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qc = (e, t) => {
  for (var n in t || (t = {}))
    Yc.call(t, n) && bs(e, n, t[n]);
  if (ws)
    for (var n of ws(t))
      Xc.call(t, n) && bs(e, n, t[n]);
  return e;
};
const Jc = {
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
qc({
  linear: Uc
}, Jc);
const Cs = {
  current: 0
}, Es = j(0), va = 2e3, Ss = Symbol("elZIndexContextKey"), wa = Symbol("zIndexContextKey"), Zc = (e) => {
  const t = Et() ? Ke(Ss, Cs) : Cs, n = e || (Et() ? Ke(wa, void 0) : void 0), r = F(() => {
    const o = I(n);
    return ct(o) ? o : va;
  }), s = F(() => r.value + Es.value), a = () => (t.current++, Es.value = t.current, s.value);
  return !ft && Ke(Ss), {
    initialZIndex: r,
    currentZIndex: s,
    nextZIndex: a
  };
};
var Qc = {
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
const eu = (e) => (t, n) => tu(t, n, I(e)), tu = (e, t, n) => Dc(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), nu = (e) => {
  const t = F(() => I(e).name), n = ao(e) ? e : j(e);
  return {
    lang: t,
    locale: n,
    t: eu(e)
  };
}, ba = Symbol("localeContextKey"), ru = (e) => {
  const t = e || Ke(ba, j());
  return nu(F(() => t.value || Qc));
}, Ca = "__epPropKey", me = (e) => e, su = (e) => la(e) && !!e[Ca], Ea = (e, t) => {
  if (!la(e) || su(e))
    return e;
  const { values: n, required: r, default: s, type: a, validator: o } = e, u = {
    type: a,
    required: !!r,
    validator: n || o ? (h) => {
      let _ = !1, w = [];
      if (n && (w = Array.from(n), cs(e, "default") && w.push(s), _ || (_ = w.includes(h))), o && (_ || (_ = o(h))), !_ && w.length > 0) {
        const k = [...new Set(w)].map((A) => JSON.stringify(A)).join(", ");
        oo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${k}], got value ${JSON.stringify(h)}.`);
      }
      return _;
    } : void 0,
    [Ca]: !0
  };
  return cs(e, "default") && (u.default = s), u;
}, At = (e) => xc(Object.entries(e).map(([t, n]) => [
  t,
  Ea(n, t)
])), au = ["", "default", "small", "large"], ou = Ea({
  type: String,
  values: au,
  required: !1
}), iu = Symbol("size"), lu = Symbol("emptyValuesContextKey"), cu = At({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Qt(e) ? !e() : !e
  }
}), Ls = (e) => Object.keys(e), kn = j();
function Sa(e, t = void 0) {
  return Et() ? Ke(oa, kn) : kn;
}
function La(e, t) {
  const n = Sa(), r = _r(e, F(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || _n;
  })), s = ru(F(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), a = Zc(F(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || va;
  })), o = F(() => {
    var c;
    return I(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return ka(F(() => I(n) || {})), {
    ns: r,
    locale: s,
    zIndex: a,
    size: o
  };
}
const ka = (e, t, n = !1) => {
  var r;
  const s = !!Et(), a = s ? Sa() : void 0, o = (r = void 0) != null ? r : s ? io : void 0;
  if (!o)
    return;
  const c = F(() => {
    const u = I(e);
    return a?.value ? uu(a.value, u) : u;
  });
  return o(oa, c), o(ba, F(() => c.value.locale)), o(ia, F(() => c.value.namespace)), o(wa, F(() => c.value.zIndex)), o(iu, {
    size: F(() => c.value.size || "")
  }), o(lu, F(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !kn.value) && (kn.value = c.value), c;
}, uu = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ls(e), ...Ls(t)])], r = {};
  for (const s of n)
    r[s] = t[s] !== void 0 ? t[s] : e[s];
  return r;
};
var Fn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
function or(e, t = "px") {
  if (!e)
    return "";
  if (ct(e) || Fc(e))
    return `${e}${t}`;
  if (it(e))
    return e;
}
const Na = (e, t) => (e.install = (n) => {
  for (const r of [e, ...Object.values({})])
    n.component(r.name, r);
}, e), Ta = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), du = At({
  size: {
    type: me([Number, String])
  },
  color: {
    type: String
  }
}), fu = ae({
  name: "ElIcon",
  inheritAttrs: !1
}), hu = /* @__PURE__ */ ae({
  ...fu,
  props: du,
  setup(e) {
    const t = e, n = _r("icon"), r = F(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: pa(s) ? void 0 : or(s),
        "--color": a
      };
    });
    return (s, a) => (G(), ne("i", lo({
      class: I(n).b(),
      style: I(r)
    }, s.$attrs), [
      St(s.$slots, "default")
    ], 16));
  }
});
var pu = /* @__PURE__ */ Fn(hu, [["__file", "icon.vue"]]);
const Nn = Na(pu);
/*! Element Plus Icons Vue v2.3.1 */
var mu = /* @__PURE__ */ ae({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (G(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), gu = mu, _u = /* @__PURE__ */ ae({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (G(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ia = _u, yu = /* @__PURE__ */ ae({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (G(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), vu = yu, wu = /* @__PURE__ */ ae({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (G(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), bu = wu, Cu = /* @__PURE__ */ ae({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (G(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Eu = Cu;
const Oa = me([
  String,
  Object,
  Function
]), Su = {
  Close: Ia
}, Lu = {
  Close: Ia
}, Tn = {
  success: bu,
  warning: Eu,
  error: gu,
  info: vu
}, ku = (e) => e, yn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Nu = At({
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
}), Tu = ae({
  name: "ElBadge"
}), Iu = /* @__PURE__ */ ae({
  ...Tu,
  props: Nu,
  setup(e, { expose: t }) {
    const n = e, r = _r("badge"), s = F(() => n.isDot ? "" : ct(n.value) && ct(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = F(() => {
      var o, c, u, h, _;
      return [
        {
          backgroundColor: n.color,
          marginRight: or(-((c = (o = n.offset) == null ? void 0 : o[0]) != null ? c : 0)),
          marginTop: or((h = (u = n.offset) == null ? void 0 : u[1]) != null ? h : 0)
        },
        (_ = n.badgeStyle) != null ? _ : {}
      ];
    });
    return t({
      content: s
    }), (o, c) => (G(), ne("div", {
      class: re(I(r).b())
    }, [
      St(o.$slots, "default"),
      X(cr, {
        name: `${I(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: st(() => [
          at(O("sup", {
            class: re([
              I(r).e("content"),
              I(r).em("content", o.type),
              I(r).is("fixed", !!o.$slots.default),
              I(r).is("dot", o.isDot),
              I(r).is("hide-zero", !o.showZero && n.value === 0),
              o.badgeClass
            ]),
            style: Lt(I(a))
          }, [
            St(o.$slots, "content", { value: I(s) }, () => [
              co(de(I(s)), 1)
            ])
          ], 6), [
            [wn, !o.hidden && (I(s) || o.isDot || o.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ou = /* @__PURE__ */ Fn(Iu, [["__file", "badge.vue"]]);
const Pu = Na(Ou), Au = At({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: me(Object)
  },
  size: ou,
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
  ...cu
}), Se = {};
ae({
  name: "ElConfigProvider",
  props: Au,
  setup(e, { slots: t }) {
    Ye(() => e.message, (r) => {
      Object.assign(Se, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ka(e);
    return () => St(t, "default", { config: n?.value });
  }
});
const Pa = ["success", "info", "warning", "error"], ce = ku({
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
  appendTo: ft ? document.body : void 0
}), Mu = At({
  customClass: {
    type: String,
    default: ce.customClass
  },
  center: {
    type: Boolean,
    default: ce.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: ce.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: ce.duration
  },
  icon: {
    type: Oa,
    default: ce.icon
  },
  id: {
    type: String,
    default: ce.id
  },
  message: {
    type: me([
      String,
      Object,
      Function
    ]),
    default: ce.message
  },
  onClose: {
    type: me(Function),
    default: ce.onClose
  },
  showClose: {
    type: Boolean,
    default: ce.showClose
  },
  type: {
    type: String,
    values: Pa,
    default: ce.type
  },
  plain: {
    type: Boolean,
    default: ce.plain
  },
  offset: {
    type: Number,
    default: ce.offset
  },
  zIndex: {
    type: Number,
    default: ce.zIndex
  },
  grouping: {
    type: Boolean,
    default: ce.grouping
  },
  repeatNum: {
    type: Number,
    default: ce.repeatNum
  }
}), Ru = {
  destroy: () => !0
}, ke = uo([]), Du = (e) => {
  const t = ke.findIndex((s) => s.id === e), n = ke[t];
  let r;
  return t > 0 && (r = ke[t - 1]), { current: n, prev: r };
}, xu = (e) => {
  const { prev: t } = Du(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Fu = (e, t) => ke.findIndex((r) => r.id === e) > 0 ? 16 : t, Wu = ae({
  name: "ElMessage"
}), $u = /* @__PURE__ */ ae({
  ...Wu,
  props: Mu,
  emits: Ru,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Lu, { ns: s, zIndex: a } = La("message"), { currentZIndex: o, nextZIndex: c } = a, u = j(), h = j(!1), _ = j(0);
    let w;
    const k = F(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), A = F(() => {
      const g = n.type;
      return { [s.bm("icon", g)]: g && Tn[g] };
    }), D = F(() => n.icon || Tn[n.type] || ""), b = F(() => xu(n.id)), N = F(() => Fu(n.id, n.offset) + b.value), d = F(() => _.value + N.value), C = F(() => ({
      top: `${N.value}px`,
      zIndex: o.value
    }));
    function y() {
      n.duration !== 0 && ({ stop: w } = ma(() => {
        L();
      }, n.duration));
    }
    function v() {
      w?.();
    }
    function L() {
      h.value = !1;
    }
    function S({ code: g }) {
      g === yn.esc && L();
    }
    return tn(() => {
      y(), c(), h.value = !0;
    }), Ye(() => n.repeatNum, () => {
      v(), y();
    }), ya(document, "keydown", S), Gc(u, () => {
      _.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: d,
      close: L
    }), (g, U) => (G(), xe(cr, {
      name: I(s).b("fade"),
      onBeforeLeave: g.onClose,
      onAfterLeave: (q) => g.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        at(O("div", {
          id: g.id,
          ref_key: "messageRef",
          ref: u,
          class: re([
            I(s).b(),
            { [I(s).m(g.type)]: g.type },
            I(s).is("center", g.center),
            I(s).is("closable", g.showClose),
            I(s).is("plain", g.plain),
            g.customClass
          ]),
          style: Lt(I(C)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: y
        }, [
          g.repeatNum > 1 ? (G(), xe(I(Pu), {
            key: 0,
            value: g.repeatNum,
            type: I(k),
            class: re(I(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Fe("v-if", !0),
          I(D) ? (G(), xe(I(Nn), {
            key: 1,
            class: re([I(s).e("icon"), I(A)])
          }, {
            default: st(() => [
              (G(), xe(Ps(I(D))))
            ]),
            _: 1
          }, 8, ["class"])) : Fe("v-if", !0),
          St(g.$slots, "default", {}, () => [
            g.dangerouslyUseHTMLString ? (G(), ne(Ge, { key: 1 }, [
              Fe(" Caution here, message could've been compromised, never use user's input as message "),
              O("p", {
                class: re(I(s).e("content")),
                innerHTML: g.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (G(), ne("p", {
              key: 0,
              class: re(I(s).e("content"))
            }, de(g.message), 3))
          ]),
          g.showClose ? (G(), xe(I(Nn), {
            key: 2,
            class: re(I(s).e("closeBtn")),
            onClick: Kt(L, ["stop"])
          }, {
            default: st(() => [
              X(I(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Fe("v-if", !0)
        ], 46, ["id"]), [
          [wn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Uu = /* @__PURE__ */ Fn($u, [["__file", "message.vue"]]);
let zu = 1;
const Aa = (e) => {
  const t = !e || it(e) || Xt(e) || Qt(e) ? { message: e } : e, n = {
    ...ce,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (it(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    ar(r) || (r = document.body), n.appendTo = r;
  }
  return ps(Se.grouping) && !n.grouping && (n.grouping = Se.grouping), ct(Se.duration) && n.duration === 3e3 && (n.duration = Se.duration), ct(Se.offset) && n.offset === 16 && (n.offset = Se.offset), ps(Se.showClose) && !n.showClose && (n.showClose = Se.showClose), n;
}, ju = (e) => {
  const t = ke.indexOf(e);
  if (t === -1)
    return;
  ke.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Hu = ({ appendTo: e, ...t }, n) => {
  const r = `message_${zu++}`, s = t.onClose, a = document.createElement("div"), o = {
    ...t,
    id: r,
    onClose: () => {
      s?.(), ju(_);
    },
    onDestroy: () => {
      bn(null, a);
    }
  }, c = X(Uu, o, Qt(o.message) || Xt(o.message) ? {
    default: Qt(o.message) ? o.message : () => o.message
  } : null);
  c.appContext = n || It._context, bn(c, a), e.appendChild(a.firstElementChild);
  const u = c.component, _ = {
    id: r,
    vnode: c,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return _;
}, It = (e = {}, t) => {
  if (!ft)
    return { close: () => {
    } };
  const n = Aa(e);
  if (n.grouping && ke.length) {
    const s = ke.find(({ vnode: a }) => {
      var o;
      return ((o = a.props) == null ? void 0 : o.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (ct(Se.max) && ke.length >= Se.max)
    return { close: () => {
    } };
  const r = Hu(n, t);
  return ke.push(r), r.handler;
};
Pa.forEach((e) => {
  It[e] = (t = {}, n) => {
    const r = Aa(t);
    return It({ ...r, type: e }, n);
  };
});
function Bu(e) {
  for (const t of ke)
    (!e || e === t.props.type) && t.handler.close();
}
It.closeAll = Bu;
It._context = null;
const Vu = Ta(It, "$message"), Ma = [
  "success",
  "info",
  "warning",
  "error"
], Gu = At({
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
    type: Oa
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
    values: [...Ma, ""],
    default: ""
  },
  zIndex: Number
}), Ku = {
  destroy: () => !0
}, Yu = ae({
  name: "ElNotification"
}), Xu = /* @__PURE__ */ ae({
  ...Yu,
  props: Gu,
  emits: Ku,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: s } = La("notification"), { nextZIndex: a, currentZIndex: o } = s, { Close: c } = Su, u = j(!1);
    let h;
    const _ = F(() => {
      const y = n.type;
      return y && Tn[n.type] ? r.m(y) : "";
    }), w = F(() => n.type && Tn[n.type] || n.icon), k = F(() => n.position.endsWith("right") ? "right" : "left"), A = F(() => n.position.startsWith("top") ? "top" : "bottom"), D = F(() => {
      var y;
      return {
        [A.value]: `${n.offset}px`,
        zIndex: (y = n.zIndex) != null ? y : o.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: h } = ma(() => {
        u.value && d();
      }, n.duration));
    }
    function N() {
      h?.();
    }
    function d() {
      u.value = !1;
    }
    function C({ code: y }) {
      y === yn.delete || y === yn.backspace ? N() : y === yn.esc ? u.value && d() : b();
    }
    return tn(() => {
      b(), a(), u.value = !0;
    }), ya(document, "keydown", C), t({
      visible: u,
      close: d
    }), (y, v) => (G(), xe(cr, {
      name: I(r).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (L) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        at(O("div", {
          id: y.id,
          class: re([I(r).b(), y.customClass, I(k)]),
          style: Lt(I(D)),
          role: "alert",
          onMouseenter: N,
          onMouseleave: b,
          onClick: y.onClick
        }, [
          I(w) ? (G(), xe(I(Nn), {
            key: 0,
            class: re([I(r).e("icon"), I(_)])
          }, {
            default: st(() => [
              (G(), xe(Ps(I(w))))
            ]),
            _: 1
          }, 8, ["class"])) : Fe("v-if", !0),
          O("div", {
            class: re(I(r).e("group"))
          }, [
            O("h2", {
              class: re(I(r).e("title")),
              textContent: de(y.title)
            }, null, 10, ["textContent"]),
            at(O("div", {
              class: re(I(r).e("content")),
              style: Lt(y.title ? void 0 : { margin: 0 })
            }, [
              St(y.$slots, "default", {}, () => [
                y.dangerouslyUseHTMLString ? (G(), ne(Ge, { key: 1 }, [
                  Fe(" Caution here, message could've been compromised, never use user's input as message "),
                  O("p", { innerHTML: y.message }, null, 8, ["innerHTML"])
                ], 2112)) : (G(), ne("p", { key: 0 }, de(y.message), 1))
              ])
            ], 6), [
              [wn, y.message]
            ]),
            y.showClose ? (G(), xe(I(Nn), {
              key: 0,
              class: re(I(r).e("closeBtn")),
              onClick: Kt(d, ["stop"])
            }, {
              default: st(() => [
                X(I(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Fe("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [wn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var qu = /* @__PURE__ */ Fn(Xu, [["__file", "notification.vue"]]);
const In = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ir = 16;
let Ju = 1;
const Ot = function(e = {}, t) {
  if (!ft)
    return { close: () => {
    } };
  (it(e) || Xt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  In[n].forEach(({ vm: _ }) => {
    var w;
    r += (((w = _.el) == null ? void 0 : w.offsetHeight) || 0) + ir;
  }), r += ir;
  const s = `notification_${Ju++}`, a = e.onClose, o = {
    ...e,
    offset: r,
    id: s,
    onClose: () => {
      Zu(s, n, a);
    }
  };
  let c = document.body;
  ar(e.appendTo) ? c = e.appendTo : it(e.appendTo) && (c = document.querySelector(e.appendTo)), ar(c) || (c = document.body);
  const u = document.createElement("div"), h = X(qu, o, Qt(o.message) ? o.message : Xt(o.message) ? () => o.message : null);
  return h.appContext = pa(t) ? Ot._context : t, h.props.onDestroy = () => {
    bn(null, u);
  }, bn(h, u), In[n].push({ vm: h }), c.appendChild(u.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
Ma.forEach((e) => {
  Ot[e] = (t = {}, n) => ((it(t) || Xt(t)) && (t = {
    message: t
  }), Ot({ ...t, type: e }, n));
});
function Zu(e, t, n) {
  const r = In[t], s = r.findIndex(({ vm: h }) => {
    var _;
    return ((_ = h.component) == null ? void 0 : _.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: a } = r[s];
  if (!a)
    return;
  n?.(a);
  const o = a.el.offsetHeight, c = t.split("-")[0];
  r.splice(s, 1);
  const u = r.length;
  if (!(u < 1))
    for (let h = s; h < u; h++) {
      const { el: _, component: w } = r[h].vm, k = Number.parseInt(_.style[c], 10) - o - ir;
      w.props.offset = k;
    }
}
function Qu() {
  for (const e of Object.values(In))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ot.closeAll = Qu;
Ot._context = null;
const ed = Ta(Ot, "$notify"), Gn = {
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
      duration: s = 3e3,
      showClose: a = !1
    } = e;
    r === "center" ? Vu({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ed({
      message: t,
      type: n,
      position: r,
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
}, td = "snippets-code:developer-mode", Ra = "snippets-code:frontend-diagnostics", nd = 240, Bt = "[REDACTED]", vn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Bt}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Bt}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Bt
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Bt}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Bt}`
), Da = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return vn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return vn(
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
    return vn(String(e));
  }
}, rd = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, sd = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Ra) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Sr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(td) === "true";
  } catch {
    return !1;
  }
}, ad = (e, t, n) => {
  if (!Sr() || typeof localStorage > "u") return;
  const r = sd();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: rd(),
    message: vn(t),
    data: Da(n)
  });
  try {
    localStorage.setItem(
      Ra,
      JSON.stringify(r.slice(-nd))
    );
  } catch {
  }
}, od = () => Sr(), id = (e) => e === "warn" || e === "error" || !1 || !1 || Sr(), dn = (e, t, n) => {
  ad(e, t, n), id(e) && P("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Da(n)
  }).catch(() => {
  });
}, Vt = {
  info: (e, t, ...n) => {
    dn("info", e, t);
  },
  error: (e, t) => {
    dn("error", e, t);
  },
  warn: (e, t) => {
    dn("warn", e, t);
  },
  debug: (e, t) => {
    od() && dn("debug", e, t);
  }
}, ld = "[screen-recorder]", ge = async (e, t) => {
  const n = performance.now();
  try {
    return await P(e, t);
  } catch (r) {
    throw console.error(`${ld} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: r
    }), r;
  }
}, cd = () => ge("screen_recorder_get_ffmpeg_status"), nt = (e) => ge("screen_recorder_set_capture_excluded", { excluded: e }), fn = (e) => ge("screen_recorder_set_passthrough_region", { region: e }), hn = (e) => ge("screen_recorder_set_overlay_window_region", { region: e }), ud = () => ge("screen_recorder_pick_target_window"), dd = () => ge("screen_recorder_close_window"), fd = (e, t) => ge("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), hd = () => ge("screen_recorder_pause_recording"), pd = (e, t) => ge("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), md = () => ge("screen_recorder_stop_recording"), gd = () => ge("screen_recorder_cancel_recording"), _d = () => ge("screen_recorder_cancel_export"), yd = (e, t) => ge("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), ks = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0,
  showCursor: !0
});
function vd() {
  const e = j("selecting"), t = j(ks()), n = j(null), r = j(null), s = j(""), a = j(null), o = j(0), c = j(0), u = j(null), h = () => {
    c.value = e.value === "recording" && a.value !== null ? o.value + Date.now() - a.value : o.value;
  }, _ = () => {
    u.value !== null && (window.clearInterval(u.value), u.value = null);
  }, w = () => {
    _(), h(), u.value = window.setInterval(() => {
      h();
    }, 250);
  }, k = async () => (n.value = await cd(), n.value), A = async (L) => {
    s.value = "", r.value = null;
    const S = n.value ?? await k();
    if (!S.available)
      throw new Error(S.message || "FFmpeg unavailable");
    await fd(L, t.value), e.value = "recording", o.value = 0, c.value = 0, a.value = Date.now(), w();
  }, D = async () => {
    e.value === "recording" && (h(), o.value = c.value, a.value = null, _(), await hd(), e.value = "paused");
  }, b = async (L) => {
    e.value === "paused" && (await pd(L, t.value), e.value = "recording", a.value = Date.now(), w());
  }, N = async () => {
    e.value !== "recording" && e.value !== "paused" || (h(), o.value = c.value, a.value = null, _(), await md(), e.value = "exporting");
  }, d = async () => {
    e.value = "exporting";
    try {
      return r.value = await yd(
        t.value,
        Math.round(c.value)
      ), e.value = "completed", r.value;
    } catch (L) {
      throw e.value = "ready", r.value = null, L;
    }
  }, C = async () => {
    await _d(), e.value = "ready", r.value = null;
  }, y = async () => {
    _(), await gd(), e.value = "selecting", a.value = null, o.value = 0, c.value = 0, r.value = null;
  }, v = () => {
    e.value = "selecting", a.value = null, o.value = 0, c.value = 0, r.value = null, s.value = "", t.value = ks();
  };
  return lr(() => {
    _();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: r,
    errorMessage: s,
    elapsedMs: c,
    refreshFfmpegStatus: k,
    begin: A,
    pause: D,
    resume: b,
    stop: N,
    exportFile: d,
    cancelExport: C,
    cancel: y,
    reset: v
  };
}
const wd = { class: "screen-recorder" }, bd = ["onMousedown"], Cd = { class: "window-title" }, Ed = { class: "capture-viewport" }, Sd = { class: "capture-frame" }, Ld = { class: "control-group control-group--tools" }, kd = { class: "tool-pill" }, Nd = ["title", "aria-pressed", "disabled"], Td = ["title", "aria-label", "aria-pressed", "disabled"], Id = { class: "select-field" }, Od = ["disabled"], Pd = ["disabled"], Ad = ["disabled"], Md = { value: "high" }, Rd = { value: "standard" }, Dd = { value: "small" }, xd = { class: "dimension-group optional-size" }, Fd = { class: "dimension" }, Wd = ["value"], $d = { class: "dimension" }, Ud = ["value"], zd = { class: "control-group control-group--actions" }, jd = { class: "time" }, Hd = { class: "button-label" }, Bd = { class: "button-label" }, Vd = ["title"], Gd = { class: "export-progress__meta" }, Kd = { class: "export-progress__track" }, Yd = ["title"], Xd = ["disabled"], qd = { class: "record-label" }, Jd = {
  key: 0,
  class: "warning"
}, Ve = "[screen-recorder]", wt = 80, Kn = 400, Gt = 240, Yn = 260, Ns = 140, Zd = 3, Ts = 2, Is = 0, Qd = 15, ef = 10, tf = 2, nf = /* @__PURE__ */ ae({
  __name: "index",
  setup(e) {
    const { t } = Mn(), n = sa(), r = j(null), s = j(null), a = j(null), o = j({ width: 0, height: 0 }), c = j(!1), u = j(!1), h = j(0), _ = j(!1), w = j(null);
    let k = null, A = null, D = null, b = null, N = null, d = null, C = null, y = null;
    const v = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: L,
      settings: S,
      ffmpegStatus: g,
      result: U,
      elapsedMs: q,
      refreshFfmpegStatus: fe,
      begin: _e,
      pause: Q,
      resume: Mt,
      stop: Rt,
      exportFile: Dt,
      cancelExport: ht,
      cancel: xt,
      reset: Ft
    } = vd(), ye = j(!1), he = F(
      () => L.value === "recording" || L.value === "paused" || L.value === "exporting"
    ), Ne = F(
      () => S.value.audio && S.value.format === "mp4"
    ), ze = F(
      () => Ne.value && L.value === "recording"
    ), Wt = F(() => {
      const f = ze.value && !_.value ? h.value : 0, p = (x, $) => Math.max(0.18, Math.min(1, x + f * $)).toFixed(3);
      return {
        "--bar-1": p(0.28, 0.64),
        "--bar-2": p(0.42, 0.78),
        "--bar-3": p(0.34, 0.94),
        "--bar-4": p(0.22, 0.72)
      };
    }), $t = F(() => {
      if (S.value.format === "gif")
        return "GIF 不支持音频";
      if (_.value && S.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (U.value?.audioDevice)
        return `已录制音频：${U.value.audioDevice}`;
      if (U.value && !U.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (g.value?.available && !g.value.systemAudioAvailable) {
        const f = g.value.audioDevices?.join("、") || "无";
        return S.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${f}` : "录制音频已关闭";
      }
      return S.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), nn = F(
      () => S.value.showCursor ? String(t("screenRecorder.showCursorOn")) : String(t("screenRecorder.showCursorOff"))
    ), pt = F(() => {
      const f = w.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(f * 100)));
    }), Je = F(() => {
      const f = w.value;
      return f ? f.totalFrames && f.stage === "frames" ? `${f.message}` : f.message || "正在导出..." : "正在导出...";
    }), mt = F(() => {
      const f = w.value;
      return f?.totalFrames ? `${Je.value} (${f.currentFrame}/${f.totalFrames})` : Je.value;
    }), Ut = F(() => {
      const f = Math.floor(q.value / 1e3), p = Math.floor(f / 60).toString().padStart(2, "0"), x = (f % 60).toString().padStart(2, "0");
      return `${p}:${x}`;
    }), be = async (f) => {
      try {
        await f();
      } catch (p) {
        console.error(`${Ve} action failed`, p), Vt.error(`${Ve} action failed`, p), ye.value || Gn.msg(p?.message || String(p), "error");
      }
    }, gt = (f) => Math.max(2, Math.floor(Math.round(f) / 2) * 2), _t = (f) => Math.max(1, Math.round(f)), ve = (f, p) => Math.abs(f - p) <= tf, je = (f, p) => f === p ? !0 : !f || !p ? !1 : ve(f.x, p.x) && ve(f.y, p.y) && ve(f.width, p.width) && ve(f.height, p.height), Ce = async (f) => {
      je(y, f) || (y = f ? { ...f } : null, await fn(f).catch(() => {
      }));
    }, Ae = async () => {
      const f = r.value;
      if (!f)
        throw new Error("录制视口尚未准备好");
      const p = f.getBoundingClientRect(), x = await n.scaleFactor(), $ = await n.innerPosition(), le = _t(p.width * x), oe = _t(p.height * x);
      if (le < wt || oe < wt)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: p.left,
        y: p.top,
        width: le / x,
        height: oe / x,
        screenX: Math.round($.x + p.left * x),
        screenY: Math.round($.y + p.top * x),
        physicalWidth: le,
        physicalHeight: oe,
        scale: x
      };
    }, yt = async () => {
      const f = await Ae(), p = gt(f.physicalWidth), x = gt(f.physicalHeight);
      return {
        ...f,
        width: p / f.scale,
        height: x / f.scale,
        physicalWidth: p,
        physicalHeight: x
      };
    }, i = async () => {
      try {
        const f = await Ae();
        if ((!ve(
          o.value.width,
          f.physicalWidth
        ) || !ve(
          o.value.height,
          f.physicalHeight
        )) && (o.value = {
          width: f.physicalWidth,
          height: f.physicalHeight
        }), u.value) {
          const p = s.value?.getBoundingClientRect().height ?? 0, x = a.value?.getBoundingClientRect().height ?? 0;
          await Ce({
            x: Math.round(f.x * f.scale),
            y: Math.round((f.y + p) * f.scale),
            width: f.physicalWidth,
            height: Math.max(
              1,
              f.physicalHeight - Math.round((p + x) * f.scale)
            )
          });
          return;
        }
        await Ce({
          x: Math.round(f.x * f.scale),
          y: Math.round(f.y * f.scale),
          width: f.physicalWidth,
          height: f.physicalHeight
        });
      } catch {
        (o.value.width !== 0 || o.value.height !== 0) && (o.value = { width: 0, height: 0 }), await Ce(null);
      }
    }, l = async () => d || (d = i().finally(() => {
      if (d = null, C) {
        const f = C;
        C = null, Ce(f);
      }
    }), d), E = () => {
      N === null && (N = requestAnimationFrame(() => {
        N = null, l();
      }));
    }, M = () => {
      c.value || E();
    }, Y = () => {
      C = null, y = null;
    }, W = async () => {
      Y(), await fn(null).catch(() => {
      }), await hn(null).catch(() => {
      });
    }, m = () => {
      c.value = !1, u.value = !1;
    }, T = () => {
      window.setTimeout(() => {
        l();
      }, 120);
    }, z = () => new Promise((f) => {
      requestAnimationFrame(() => requestAnimationFrame(() => f()));
    }), J = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await z(), document.documentElement.classList.remove("screen-recorder-repaint"), await z();
    }, Me = async () => {
      await n.setIgnoreCursorEvents(!0).catch(() => {
      }), await z(), await n.setIgnoreCursorEvents(!1).catch(() => {
      }), await l();
    }, Ze = async () => {
      const [f, p] = await Promise.all([
        n.outerPosition(),
        n.outerSize()
      ]);
      return {
        x: f.x,
        y: f.y,
        width: p.width,
        height: p.height
      };
    }, Re = async () => {
      if (!u.value) {
        await hn(null).catch(() => {
        });
        return;
      }
      const f = await Ze(), p = await n.scaleFactor(), x = s.value?.getBoundingClientRect().height ?? 0, $ = a.value?.getBoundingClientRect().height ?? 0;
      await hn({
        width: f.width,
        height: f.height,
        topHeight: Math.round(x * p),
        bottomHeight: Math.round($ * p)
      }).catch(() => {
      });
    }, rn = (f, p) => {
      const x = Math.min(f.width, p.width), $ = Math.min(f.height, p.height), le = p.x + p.width - x, oe = p.y + p.height - $;
      return {
        x: Math.min(Math.max(f.x, p.x), le),
        y: Math.min(Math.max(f.y, p.y), oe),
        width: x,
        height: $
      };
    }, Lr = (f, p, x) => {
      if (!p) return !1;
      const $ = Math.max(8, Math.round(8 * x)), le = p.x + p.width, oe = p.y + p.height, He = f.screenX + f.physicalWidth, Qe = f.screenY + f.physicalHeight;
      return f.screenX <= p.x + $ && f.screenY <= p.y + $ && He >= le - $ && Qe >= oe - $;
    }, xa = (f, p, x) => {
      if (!p) return !1;
      const $ = Math.max(8, Math.round(8 * x));
      return f.screenX <= p.x + $ || f.screenY <= p.y + $ || f.screenX + f.physicalWidth >= p.x + p.width - $ || f.screenY + f.physicalHeight >= p.y + p.height - $;
    }, Fa = (f, p, x) => {
      if (!x) return f;
      const $ = Math.round(Qd * p), le = Math.round(ef * p);
      return {
        ...f,
        physicalWidth: Math.max(wt, f.physicalWidth - $),
        physicalHeight: Math.max(
          wt,
          f.physicalHeight - le
        )
      };
    }, kr = async (f) => {
      await n.setSize(
        new ot(Math.round(f.width), Math.round(f.height))
      ), await n.setPosition(
        new Oe(Math.round(f.x), Math.round(f.y))
      ), await z();
    }, Nr = async () => {
      const [f, p] = await Promise.all([
        Ae(),
        Ze()
      ]);
      return { actualRegion: f, currentFrame: p };
    }, Wa = async (f, p, x) => {
      const { actualRegion: $, currentFrame: le } = await Nr(), oe = $.screenX - le.x, He = $.screenY - le.y, Qe = Math.max(
        0,
        le.width - $.physicalWidth
      ), Ee = Math.max(
        0,
        le.height - $.physicalHeight
      );
      return {
        x: f.screenX - oe,
        y: f.screenY - He,
        width: Math.max(p, f.physicalWidth + Qe),
        height: Math.max(x, f.physicalHeight + Ee)
      };
    }, Tr = async () => {
      D?.(), D = null, h.value = 0;
    }, sn = async () => {
      if (!(!Ne.value || D))
        try {
          D = await Sn(
            "screen_recorder_audio_level",
            (f) => {
              if (!ze.value) {
                h.value = 0;
                return;
              }
              const p = Math.max(
                0,
                Math.min(1, Number(f.payload?.level ?? 0))
              );
              h.value = h.value * 0.38 + p * 0.62;
            }
          ), _.value = !1;
        } catch (f) {
          console.error(`${Ve} audio meter failed`, f), Vt.warn(`${Ve} audio meter failed`, f), _.value = !0;
        }
    }, $a = async (f) => {
      f.button !== 0 || he.value || (m(), await n.setMinSize(new rt(Kn, Gt)).catch(() => {
      }), await W(), await n.startDragging().catch((p) => {
        Gn.msg(p?.message || String(p), "error");
      }), T());
    }, Ua = async (f) => {
      he.value || (m(), await n.setMinSize(new rt(Kn, Gt)).catch(() => {
      }), await W(), await n.startResizeDragging(f).catch((p) => {
        Gn.msg(p?.message || String(p), "error");
      }), T());
    }, za = () => be(async () => {
      w.value = null, await sn(), await nt(!0).catch(() => {
      }), await l(), await _e(await yt());
    }), ja = () => be(async () => {
      await Q();
    }), Ha = () => be(async () => {
      await Mt(await yt());
    }), Ba = () => be(async () => {
      w.value = {
        stage: "encode",
        message: S.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Rt(), h.value = 0, await nt(!1).catch(() => {
      }), await Dt(), await l();
    }), Va = () => be(async () => {
      await ht(), w.value = null, await nt(!1).catch(() => {
      }), await l();
    }), Ga = () => {
      const f = { ...S.value };
      W(), Ft(), S.value = f, L.value = "ready", U.value = null, w.value = null, nt(!1).catch(() => {
      }), bt(l), sn();
    }, Ka = async (f) => {
      const p = await il(f.screenX, f.screenY), x = p?.scaleFactor || await n.scaleFactor(), $ = p ? {
        x: p.position.x,
        y: p.position.y,
        width: p.size.width,
        height: p.size.height
      } : null, le = Lr(
        f,
        $,
        x
      ), oe = xa(
        f,
        $,
        x
      );
      c.value = !0, u.value = oe, await bt(), await z(), await n.setMinSize(
        oe ? new rt(Yn, Ns) : new rt(Yn, Gt)
      ).catch(() => {
      });
      const He = Math.round(Yn * x), Qe = Math.round(
        (oe ? Ns : Gt) * x
      ), Ee = Fa(f, x, !le), Pr = oe && $ ? {
        x: Math.max($.x, Ee.screenX),
        y: Math.max($.y, Ee.screenY),
        width: Math.max(
          He,
          Math.min(Ee.physicalWidth, $.width)
        ),
        height: Math.max(
          Qe,
          Math.min(Ee.physicalHeight, $.height)
        )
      } : await Wa(
        Ee,
        He,
        Qe
      );
      try {
        if (await kr(
          $ && oe ? rn(Pr, $) : Pr
        ), await bt(), await Re(), oe)
          return;
        const an = async () => {
          const { actualRegion: et, currentFrame: zt } = await Nr(), Be = {
            x: Ee.screenX - et.screenX,
            y: Ee.screenY - et.screenY,
            width: Ee.physicalWidth - et.physicalWidth,
            height: Ee.physicalHeight - et.physicalHeight
          };
          if (Math.abs(Be.x) <= Is && Math.abs(Be.y) <= Is && Math.abs(Be.width) <= Ts && Math.abs(Be.height) <= Ts)
            return !0;
          const Ar = {
            x: zt.x + Be.x,
            y: zt.y + Be.y,
            width: Math.max(He, zt.width + Be.width),
            height: Math.max(
              Qe,
              zt.height + Be.height
            )
          };
          return await kr(
            $ && oe ? rn(Ar, $) : Ar
          ), !1;
        };
        for (let et = 0; et < Zd && !await an(); et += 1)
          ;
      } catch (an) {
        console.error(`${Ve} snap correction failed`, an), Vt.warn(`${Ve} snap correction failed`, an);
      } finally {
        await Me(), await l(), await Re(), await J(), await n.setFocus().catch(() => {
        });
      }
    }, Ya = () => be(async () => {
      await W();
      const f = await ud();
      await Ka(f);
    }), Xa = () => {
      he.value || S.value.format === "gif" || (S.value.audio = !S.value.audio);
    }, qa = () => {
      he.value || (S.value.showCursor = !S.value.showCursor);
    }, Ja = async () => {
      await n.minimize();
    }, Ir = async () => {
      ye.value = !0;
      try {
        L.value === "exporting" ? await ht().catch(() => {
        }) : await xt(), await fn(null).catch(() => {
        }), await nt(!1).catch(() => {
        });
      } catch {
      }
      await dd();
    }, Za = async () => {
      U.value && (await l(), await P("open_file_with_default_app", { filePath: U.value.path }));
    }, Qa = async () => {
      U.value && (await l(), await P("show_file_in_folder", { filePath: U.value.path }));
    }, Or = (f) => {
      f.key === "Escape" && (f.preventDefault(), Ir());
    };
    return tn(async () => {
      Vt.info(`${Ve} frontend mounted`), L.value = "ready", await n.setMinSize(new rt(Kn, Gt)).catch(() => {
      }), await nt(!1).catch(() => {
      }), await fe().catch(() => {
      }), await bt(), await l(), await sn(), await bt(), await n.emit("screen_recorder_ready"), Vt.info(`${Ve} frontend ready emitted`), b = await Sn(
        "screen_recorder_export_progress",
        (f) => {
          w.value = f.payload;
        }
      ).catch(() => null), r.value && (k = new ResizeObserver(() => {
        M();
      }), k.observe(r.value)), A = await n.onMoved(() => {
        M();
      }).catch(() => null), window.addEventListener(
        "resize",
        M
      ), window.addEventListener("keydown", Or);
    }), Ye(Ne, (f) => {
      f ? sn() : Tr();
    }), Ye(L, (f) => {
      f !== "recording" && (h.value = 0), f !== "exporting" && (w.value = null);
    }), lr(() => {
      k?.disconnect(), A?.(), b?.(), window.removeEventListener(
        "resize",
        M
      ), window.removeEventListener("keydown", Or), Y(), fn(null).catch(() => {
      }), hn(null).catch(() => {
      }), nt(!1).catch(() => {
      }), Tr();
    }), (f, p) => (G(), ne("div", wd, [
      O(
        "div",
        {
          class: re(["recorder-shell", {
            recording: I(L) === "recording",
            paused: I(L) === "paused",
            "snap-aligned": c.value,
            "snap-fullscreen": u.value
          }])
        },
        [
          (G(), ne(
            Ge,
            null,
            fo(v, (x) => O("span", {
              key: x.className,
              class: re(["resize-zone", x.className]),
              onMousedown: Kt(($) => Ua(x.direction), ["prevent"])
            }, null, 42, bd)),
            64
            /* STABLE_FRAGMENT */
          )),
          O(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: $a
            },
            [
              O(
                "span",
                Cd,
                de(f.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              O(
                "div",
                {
                  class: "window-actions",
                  onMousedown: p[0] || (p[0] = Kt(() => {
                  }, ["stop"]))
                },
                [
                  O("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Ja
                  }, [
                    X(I(hl), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  O("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: Ir
                  }, [
                    X(I(fl), {
                      class: "title-icon",
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          O("main", Ed, [
            p[9] || (p[9] = O(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            p[10] || (p[10] = O(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            p[11] || (p[11] = O(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            p[12] || (p[12] = O(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            O("div", Sd, [
              O(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: r,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              p[5] || (p[5] = O(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              p[6] || (p[6] = O(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              p[7] || (p[7] = O(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              p[8] || (p[8] = O(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          O(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: a,
              class: "control-strip"
            },
            [
              O("div", Ld, [
                O("div", kd, [
                  I(L) === "ready" || I(L) === "completed" ? (G(), ne(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Kt(Ya, ["prevent"])
                    },
                    [
                      X(I(ml), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : Fe("v-if", !0),
                  O("button", {
                    class: re(["audio-meter", {
                      active: ze.value && h.value > 0.03,
                      "audio-on": Ne.value,
                      metering: ze.value && !_.value,
                      muted: !Ne.value || _.value
                    }]),
                    title: $t.value,
                    "aria-label": "系统声音录制状态",
                    "aria-pressed": I(S).audio && I(S).format === "mp4",
                    disabled: he.value || I(S).format === "gif",
                    onClick: Xa
                  }, [
                    O(
                      "span",
                      {
                        class: "audio-bars",
                        style: Lt(Wt.value)
                      },
                      p[13] || (p[13] = [
                        O(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        O(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        O(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        O(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        )
                      ]),
                      4
                      /* STYLE */
                    )
                  ], 10, Nd),
                  O("button", {
                    class: re(["icon-control cursor-control", { active: I(S).showCursor }]),
                    title: nn.value,
                    "aria-label": f.$t("screenRecorder.showCursor"),
                    "aria-pressed": I(S).showCursor,
                    disabled: he.value,
                    onClick: qa
                  }, [
                    X(I(pl), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, Td)
                ]),
                O("label", Id, [
                  at(O("select", {
                    "onUpdate:modelValue": p[1] || (p[1] = (x) => I(S).fps = x),
                    disabled: he.value
                  }, p[14] || (p[14] = [
                    O(
                      "option",
                      { value: 15 },
                      "15",
                      -1
                      /* HOISTED */
                    ),
                    O(
                      "option",
                      { value: 24 },
                      "24",
                      -1
                      /* HOISTED */
                    ),
                    O(
                      "option",
                      { value: 30 },
                      "30",
                      -1
                      /* HOISTED */
                    ),
                    O(
                      "option",
                      { value: 60 },
                      "60",
                      -1
                      /* HOISTED */
                    )
                  ]), 8, Od), [
                    [$n, I(S).fps]
                  ]),
                  p[15] || (p[15] = O(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                at(O("select", {
                  "onUpdate:modelValue": p[2] || (p[2] = (x) => I(S).format = x),
                  class: "format-select optional-format",
                  disabled: he.value
                }, p[16] || (p[16] = [
                  O(
                    "option",
                    { value: "mp4" },
                    "MP4",
                    -1
                    /* HOISTED */
                  ),
                  O(
                    "option",
                    { value: "gif" },
                    "GIF",
                    -1
                    /* HOISTED */
                  )
                ]), 8, Pd), [
                  [$n, I(S).format]
                ]),
                at(O("select", {
                  "onUpdate:modelValue": p[3] || (p[3] = (x) => I(S).quality = x),
                  class: "quality-select optional-quality",
                  disabled: he.value
                }, [
                  O(
                    "option",
                    Md,
                    de(f.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  O(
                    "option",
                    Rd,
                    de(f.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  O(
                    "option",
                    Dd,
                    de(f.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, Ad), [
                  [$n, I(S).quality]
                ]),
                O("div", xd, [
                  O("label", Fd, [
                    O("input", {
                      value: o.value.width,
                      readonly: ""
                    }, null, 8, Wd)
                  ]),
                  p[17] || (p[17] = O(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  O("label", $d, [
                    O("input", {
                      value: o.value.height,
                      readonly: ""
                    }, null, 8, Ud)
                  ]),
                  p[18] || (p[18] = O(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              O("div", zd, [
                I(L) === "recording" || I(L) === "paused" ? (G(), ne(
                  Ge,
                  { key: 0 },
                  [
                    O(
                      "span",
                      jd,
                      de(Ut.value),
                      1
                      /* TEXT */
                    ),
                    O("button", {
                      class: "control-button",
                      onClick: p[4] || (p[4] = (x) => I(L) === "paused" ? Ha() : ja())
                    }, [
                      O(
                        "span",
                        Hd,
                        de(I(L) === "paused" ? f.$t("screenRecorder.resume") : f.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    O("button", {
                      class: "control-button danger",
                      onClick: Ba
                    }, [
                      O(
                        "span",
                        Bd,
                        de(f.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : I(L) === "exporting" ? (G(), ne(
                  Ge,
                  { key: 1 },
                  [
                    O("div", {
                      class: "export-progress",
                      title: mt.value
                    }, [
                      O("div", Gd, [
                        O(
                          "span",
                          null,
                          de(Je.value),
                          1
                          /* TEXT */
                        ),
                        O(
                          "strong",
                          null,
                          de(pt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      O("div", Kd, [
                        O(
                          "span",
                          {
                            style: Lt({ width: `${pt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Vd),
                    O("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: Va
                    }, p[19] || (p[19] = [
                      O(
                        "span",
                        { class: "button-label" },
                        "取消",
                        -1
                        /* HOISTED */
                      )
                    ]))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : I(L) === "completed" && I(U) ? (G(), ne(
                  Ge,
                  { key: 2 },
                  [
                    O("span", {
                      class: "save-status optional-save-status",
                      title: I(U).path
                    }, de(I(U).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Yd),
                    O("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Za
                    }, p[20] || (p[20] = [
                      O(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    O("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: Qa
                    }, p[21] || (p[21] = [
                      O(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    O("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: Ga
                    }, p[22] || (p[22] = [
                      O(
                        "span",
                        { class: "button-label" },
                        "重录",
                        -1
                        /* HOISTED */
                      )
                    ]))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (G(), ne("button", {
                  key: 3,
                  class: "record-button",
                  disabled: I(g)?.available === !1 || o.value.width < wt || o.value.height < wt,
                  onClick: za
                }, [
                  p[23] || (p[23] = O(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  O(
                    "span",
                    qd,
                    de(f.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Xd))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      I(g) && !I(g).available ? (G(), ne(
        "p",
        Jd,
        de(I(g).message || f.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Fe("v-if", !0)
    ]));
  }
}), rf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, sf = /* @__PURE__ */ rf(nf, [["__scopeId", "data-v-9838ab3b"]]), af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sf
}, Symbol.toStringTag, { value: "Module" }));
export {
  lf as activate
};
